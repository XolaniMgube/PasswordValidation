# Password Checker

This is a javascript application that checks for requirements of a password, checks if the user's passoword exists and if it meets all the requirements for a strong password combination.

The application does not have an interface for now and the inputs(password) are set though arguments of a function when calling it.

This is a node project and was tested using jasmine unit testing.


## Application structure and contribution
- Since this is a node project you should node installed in your system

- After cloning the repo, from the root folder run `npm install` to install all the node module dependecies used in this project.

- The dependecies include jasmine, which was used for unit testing, it is found in the `spec` folder.

- To run the applicantion, navigate to the `src` folder, and run `node passowrd_checker.js`

- The functions in the script are not being called, you will need to open the `password_checker.js` file and call either the `passordIsValid` or `passwordIsOkay` functions with parameters of the password you would like to check, as a string. EXAMPLE: `passwordIsOkay("MyPassW0RD1%1")`

- The output should be displayed in the on the console with the respective error message or success message.

- To run the test, navigate to the root folder and run `jasmine`

## Technologies used
- ```Javascript```
- ```jasmine usit testing``` also is a dependency
- ```node```
- ```regular expressions```