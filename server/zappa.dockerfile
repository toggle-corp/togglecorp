FROM python:3.6-slim

MAINTAINER togglecorp info@togglecorp.com

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

RUN apt-get update -y \
    && apt-get install -y \
        vim \
        curl \
        cron \
        unzip \
        python3 \
        python3-dev \
        libpq-dev \
        python3-setuptools \
        python3-pip

RUN pip install --upgrade pip \
    && pip install virtualenv \
    && virtualenv /venv \
    && . /venv/bin/activate \
    && pip install --no-cache-dir -r requirements.txt \
    && apt-get autoremove

COPY . /code/
