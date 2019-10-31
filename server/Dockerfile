FROM python:3.7-alpine

MAINTAINER togglecorp info@togglecorp.com

ENV PYTHON3 /usr/local/bin/python3
ENV PIP3 /usr/local/bin/pip3

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

RUN apk add --no-cache --virtual .app-deps \
        git bash gcc libpq coreutils libxslt \
    && apk add --no-cache --virtual .build-deps \
        subversion python3-dev \
        musl-dev \
        linux-headers \
        postgresql-dev \
        ca-certificates \
        libxml2-dev \
        libxslt-dev \
        zlib-dev \
        jpeg-dev \
    && apk add \
        --no-cache \
        --repository http://dl-cdn.alpinelinux.org/alpine/edge/testing \
        --repository http://dl-cdn.alpinelinux.org/alpine/edge/main \
        gdal gdal-dev geos-dev \
    && $PIP3 install --upgrade pip \
    && $PIP3 install --no-cache-dir -r requirements.txt \
    && apk del --no-cache .build-deps

COPY . /code/

CMD ./deploy/scripts/prod_exec.sh
