# User Registration API 

## Endpoint
`POST users/register`

This endpoint is used to register a new user.

## Request Body

The request body must be in JSON format and include the following fields:

```
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string"
}

```
## Parameters
* **fullname (object):** An object containing the user's full name.

* **firstname (string):** The first name of the user.
* **lastname (string):** The last name of the user.
* **email (string):** The email address of the user. This should be unique.

* **password (string):** The password for the user account. Ensure that it meets security standards (e.g., minimum length, complexity).

## Response
On a successful registration, the response will be a JSON object structured as follows:

```json

{
  "token": "string",
  "user": {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "password": "string",
    "_id": "string",
    "__v": "number"
  }
}
```

## Response Fields

* **token (string):** A token that can be used for authentication in subsequent requests.

* **user (object):** An object containing the registered user's details.

* **fullname (object):** The user's full name.
* **firstname (string):** The first name of the user.
* **lastname (string):** The last name of the user.
* **email (string):** The email address of the user.
* **password (string):** The password of the user (consider omitting this in the response for security reasons).
* **_id (string):** The unique identifier for the user in the database.
* **__v (number):** The version key for the user document (used by MongoDB).


## Example Request

**URL :** http://localhost:3000/users/regsiter
* Content-Type: application/json
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```
## Example Response

**Resonpose:**  200 OK
```json

{
  "token": "abc123xyz456",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "securePassword123",
    "_id": "609b1f5c8f1b2c001c8e4e5a",
    "__v": 0
  }
}
```
## Error Handling

In case of an error (e.g., missing fields, email already exists), the API should return an appropriate error message with a status code indicating the type of error (e.g., 400 for bad request).



 