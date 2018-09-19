#!/bin/bash

: '
Dependent Env Variables
 - TOGGLECORP_RC_BRANCH
 - REACT_APP_API_END

 - AWS Related
     - AWS_ACCESS_KEY_ID
     - AWS_SECRET_ACCESS_KEY
     - DEPLOYMENT_REGION
     - TOGGLECORP_S3_BUCKET
'

echo "************************************************************";
echo "RC Branch=${TOGGLECORP_RC_BRANCH}, Branch=${TRAVIS_BRANCH}, Pull request=${TRAVIS_PULL_REQUEST}"
echo "************************************************************";

# Ignore pull request
if ! [ "${TRAVIS_PULL_REQUEST}" == "false" ]; then
    echo '[Travis Build] Pull request found ... exiting...'
    exit
fi

# Ignore non rc branch
if ! [ "${TRAVIS_BRANCH}" == "${TOGGLECORP_RC_BRANCH}" ]; then
    echo "Non Rc Branch: ${TRAVIS_BRANCH}, current RC branch: ${TOGGLECORP_RC_BRANCH} ...exiting...";
    exit
fi


BASE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )" # /code/deploy/travis/
ROOT_DIR=$(dirname "$(dirname "$BASE_DIR")") # /code/
CLIENT_DIR=${ROOT_DIR}/client

CLIENT_BUILD_DIR=${CLIENT_DIR}/build

echo "::::: Configuring AWS :::::"
aws configure set aws_access_key_id ${AWS_ACCESS_KEY_ID}
aws configure set aws_secret_access_key ${AWS_SECRET_ACCESS_KEY}
aws configure set default.region ${DEPLOYMENT_REGION}
aws configure set metadata_service_timeout 1200
aws configure set metadata_service_num_attempts 3

printf "\n\n::::::::: Deploying TOGGLECORP to S3 :::::::::::\n"

set -xe;
echo "::::::  >> Generating React Builds"
    python -c "import fcntl; fcntl.fcntl(1, fcntl.F_SETFL, 0)"

    echo "
    REACT_APP_API_END=${REACT_APP_API_END}
    " > ${CLIENT_DIR}/.env

    docker run -t -v ${CLIENT_BUILD_DIR}:/code/build --env-file=${CLIENT_DIR}/.env \
        devtc/togglecorp:client-latest bash -c 'yarn install && CI=false yarn build'

    rm ${CLIENT_DIR}/.env
set +xe;

echo "::::::  >> Removing Previous Builds Files [js, css] From S3 Bucket [$TOGGLECORP_S3_BUCKET]"
    aws s3 rm s3://$TOGGLECORP_S3_BUCKET/static/js --recursive
    aws s3 rm s3://$TOGGLECORP_S3_BUCKET/static/css --recursive
    echo "::::::  >> Uploading New Builds Files To S3 Bucket [$TOGGLECORP_S3_BUCKET]"
    aws s3 sync ${CLIENT_BUILD_DIR}/ s3://$TOGGLECORP_S3_BUCKET
    echo "::::::  >> Settings Configs for Bucket [$TOGGLECORP_S3_BUCKET]"
    # disable index.html cache
    aws s3 cp ${CLIENT_BUILD_DIR}/index.html s3://$TOGGLECORP_S3_BUCKET/index.html \
        --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type text/html --acl public-read
    # disable service-worker.js cache
    aws s3 cp ${CLIENT_BUILD_DIR}/service-worker.js s3://$TOGGLECORP_S3_BUCKET/service-worker.js \
        --metadata-directive REPLACE --cache-control max-age=0,no-cache,no-store,must-revalidate --content-type application/javascript --acl public-read
    # S3 website settings config
    aws s3 website s3://$TOGGLECORP_S3_BUCKET --index-document index.html --error-document index.html

echo "Push Server Release"
docker tag devtc/togglecorp:server-latest devtc/togglecorp:server-release
docker push devtc/togglecorp:server-release
