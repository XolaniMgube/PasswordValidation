"use strict"

function passwordIsValid(password){

    var regexConditions = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[\W]).{8,}/;

    //tests the condition 
    var conditionTest = regexConditions.test(password);
    return conditionTest;
}




function passwordIsOkay(password){

    //Declaring each Regular Expression separate
    var capitalLetters = /(?=.*?[A-Z])/;   
    var smallLetters = /(?=.*?[a-z])/
    var specialChar = /\W/;
    var digits = /(?=.*?[0-9])/
    var minLength = /.{8,}/;


    //loops through each requirement and increment the counter for every requirement met.
    var counter = 0;
    var passwordRequirements = [capitalLetters, smallLetters, specialChar, digits];

    for (var i = 0; i < passwordRequirements.length; i++){    
        if (passwordRequirements[i].test(password) == true){
            counter++; 
        }
    }
    
    //Test if the password is 
    var lengthTest = minLength.test(password);

    if (lengthTest == true && counter >= 3){
        return "The Password is Okay";
    } else if (lengthTest == true && counter < 3){
        return "The password should meet atleast 3 conditions";
    } else if(lengthTest == false && counter >= 3){
        return "Password should have a minimum of 8 characters";
    } else{
        return "Password too short, less than 3 conditions are met";
    }
          
}

// console.log(passwordIsOkay("xolani"));
// console.log(passwordIsOkay("xolani$100"));
// console.log(passwordIsOkay("xoLAni$100"));
// console.log(passwordIsOkay("xol$100"));
// console.log(passwordIsOkay("xolanixolani"))

module.exports = {passwordIsValid, passwordIsOkay}