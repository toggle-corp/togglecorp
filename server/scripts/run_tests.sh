#!/bin/bash -e

/code/scripts/wait-for-it.sh db:5432

python3 manage.py test -v 3 apps/**/
