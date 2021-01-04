# Test the Registeration and Recovery API

### This test contains tests for the /register and /recover API endpoints of [customerpay.me](staging.api.customerpay.me)

To run the tests, you will need to have Nodejs installed on your chosen platform.
The test application uses the built-in 'https' Nodejs module to make API calls to the endpoints.

The test defines a module called 'regandrec.js' that defines two functions 'register()' and 'recoverPwd()' which respectively tests the /register and /recover endpoints.

To run the test, you need to clone this repository, create a JavaScript file in the cloned repository and write a JavaScript code that imports the test functions e.g;

var myTest = require('./regandrec');


## Registration test

For the registration test, you will call the 'register()' function which takes the user's phone number, password, country and state respectively as strings e.g

myTest.register('2349888888888', 'p@$$w0rd' , 'Nigeria' , 'Imo');

If the user does not already exist, the function returns and logs the string "User registration successful".
If the user already exists, it returns and logs the string "User already exists".
Otherwise it returns and logs the string "An unknown error occurred"

>*Note that the function returns the string "Incorrect arguments" if the function is called without the complete arguments or string type*

## Recovery test

For the recovery test, you will call the 'recoverPwd()' function which takes the user's phone number, as string e.g

myTest.register('2349888888888');

If the user already exist, the function returns and logs the string "Recovery email sent successfully".
If the user does not exist, it returns and logs the string "User not found".
Otherwise it returns and logs the string "An unknown error occurred"

>*Note that the function returns the string "Incorrect arguments" if the function is called without the complete arguments or string type*

You can run the test by passing the named of your test file to the 'node' command e.g

> $ node test.js

An example test code *exampletest.js* has been attached to illustrate the calls. Run

> $ node exampletest.js

Simply comment out one of the functions to test another and change the parameters as pleased.