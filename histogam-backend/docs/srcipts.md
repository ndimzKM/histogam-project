# What the scripts do?
    scripts written in this project in particular help automate processes and accelerate tedious tasks like running the server, migrating and making migrations.

## Making a script

### Linux

#### first get the bash directory using
    --- which bash

#### and then add your commands one after the other in the form of a stack e.g
    --- cd
    --- sudo apt update
    --- pip install --package


## All the scripts and their functions

### migrate.sh
    This script makes migrations and then migrates to database. This can be executed after making changes to a model or after adding a new model.

### localhost.sh
    This script runs the server and maps the port to https://localhost:8000

### runalltests.sh
    This scripts automates a simple command that executes all the test files with their functions in a the folder addons/tests

### runtestqueries.sh
    This script only tests functions with the name query in them.

### runtestmutations.sh
    This script only tests functions with the name mutation in them.



# Executing scripts
    To activate and run scripts

    # making it executable
    --- chmod +x ./name_of_script

    # execute
    --- ./name_of_script