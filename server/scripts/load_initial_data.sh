#!/bin/bash

. /venv/bin/activate

python3 manage.py load_initial_clients
python3 manage.py load_initial_members
python3 manage.py load_initial_services
python3 manage.py load_initial_technologies
