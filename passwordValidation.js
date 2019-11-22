"use strict"

function passwordIsValid(password){

    var regexConditions = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[\W]).{8,}/;

    //tests the condition 
    var conditionTest = regexConditions.test(password);

    if (conditionTest == true){
        return conditionTest;
        
    } else{
       return conditionTest;
       
    }
}


//passwordIsValid fuction testing
//We are expecting the function to be true because the out password input "xoLAni$100" meets all the required conditions
describe("passwordIsValid", () =>{
    it("It should be true ", () =>{
        expect(passwordIsValid("xoLAni$100")).toBe(true);
    })
});




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
    var lengthTest = minLength.test(password);
    
    if (lengthTest == false){
        return lengthTest
    } else if (counter >= 3){
        return "Password is OKAY";
    } else if(counter < 3){
        return "Password is NOT OKAY, password should meet atleast 3 requirements";
    }
          
}

//passwordIsOkay fuction testing
//We are expecting the function to be false because the password we inputed "xoLAni" in not longer that 8 characters
describe("passwordIsOkay", () =>{
    it("It should be true ", () =>{
        expect(passwordIsOkay("xoLA")).toBe(false);
    })
});