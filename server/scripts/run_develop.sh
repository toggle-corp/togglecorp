#!/bin/bash -x

export PYTHONUNBUFFERED=1
python manage.py migrate --no-input
python manage.py runserver 0.0.0.0:8006
