"use strict"

function passwordIsValid(password){

    var regexConditions = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[\W]).{8,}/;

    //tests the condition 
    var conditionTest = regexConditions.test(password);

    if (conditionTest == true){
        return conditionTest + ", Password is Valid";
    } else{
       return conditionTest + ", Password is NOT Valid, did not meet all the requirements";
    }
}

console.log(passwordIsValid("dfasdfag.s1")); 


function passwordIsOkay(password){

    //Declaring each Regular Expression separate
    var capitalLetters = /(?=.*?[A-Z])/;   
    var smallLetters = /(?=.*?[a-z])/
    var specialChar = /\W/;
    var digits = /(?=.*?[0-9])/
    var minLength = /.{8,}/;


    //loops through each requirement and increment the counter for every requirement met.
    var counter = 0;
    var passwordRequirements = [capitalLetters, smallLetters, specialChar, digits, minLength];

    for (var i = 0; i < passwordRequirements.length; i++){
        
        if (passwordRequirements[i].test(password) == true){
            counter++; 
        }
    }

    //Checks errors and outputs messages if certain conditions are not met.
    if (minLength.test(password) == false){
        console.log("Password does not exist or has less than 8 characters");
    } else if (counter >= 3){
        console.log("Password is OKAY");
    } else if(counter < 3){
        console.log("Password is NOT OKAY, password should meet atleast 3 requirements");
    }
          
}
passwordIsOkay("3@dAqqqqq");