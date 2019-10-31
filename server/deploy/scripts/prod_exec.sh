#! /bin/bash

python3 /code/manage.py collectstatic --no-input &
python3 /code/manage.py migrate --no-input
/usr/local/bin/uwsgi --ini /code/deploy/configs/uwsgi.ini # Start uwsgi server
