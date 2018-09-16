#!/bin/bash

BASE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )" # /code/deploy/scripts/
ROOT_DIR=$(dirname "$(dirname "$BASE_DIR")") # /code/
SERVER_DIR=${ROOT_DIR}/server

docker build --cache-from devtc/togglecorp:server-latest --tag devtc/togglecorp:server-latest ${SERVER_DIR}
