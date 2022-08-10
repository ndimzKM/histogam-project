# Overview
    This test files are created specifically to test queries and mutations. This test files can be located in tests/ folder. And each model has a folder created for different test cases.


## Testing queries
    This file tests for both graphql endpoints and also all subsequent queries. A query is instanciated in triple quotes. Note that before testing this particular file the server should be up and running.

### test_xxxx.queries.py
import pytest
import requests

    # referencing the query created in schema.py
query_all_xxxx = """
{
  allXxxx {
    id
    xx_string
    xx_int
    xx_boolean
  }
}
"""

def test_query_all_xxxx_data_should_return_http_200():
    response = requests.post("http://localhost:8000/api", json={'query': query_all_xxxx})
    assert response.status_code == 200


## Testing mutations

### test_xxxx_mutations.py



# Executing test
    To run test globally write

    --- pytest -v

    # running a test with a particular file
    --- pytest -v -k "name"