# Ahadu

    -new school with new strategy

# Endpoints to the api

## Signup

use json format in the request body
```
signup - POST https//localhost:8000/accounts/signup 
``` 

## Login

you must provide username and password in formdata as json format and return the token

```

login - POST https//...:accounts/login
```

## Question Fetch

just pass the argument grade (integer), subject (string), unit(int)
```
questions - POST https://..../questions/<int:grade>/<str:subject>/<int:unit>/ 

```

## Question Check

just pass the argument in url question id and in request data pass the answer of the user
```
questions - POST https://..../check/questions/<int:questionId>/ 
```

return {'correct' : True } if it is correct 
return {'correct' : False } if it is incorrect 