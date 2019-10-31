#!/bin/bash -x

export PYTHONUNBUFFERED=1
. /venv/bin/activate
pip3 install -r requirements.txt
python manage.py migrate --no-input
python manage.py runserver 0.0.0.0:8006
