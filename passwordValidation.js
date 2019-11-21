function passwordIsValid(password){


    
    var regex = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[\W]).{8,}/;

   // var regex2 = /(?=.*?[\w])(?=.*?[\W])(?=.*?[0-9]) .{8,}/;

    var tester = regex2.test(password);

    console.log(tester);

    
    
}
//passwordIsValid("xoLani.s"); 


function passwordIsOkay(password){
    var capitalLetters = /(?=.*?[A-Z])/;   
    var smallLetters = /(?=.*?[a-z])/
    var specialChar = /\W/;
    var digits = /(?=.*?[0-9])/
    var minLength = /.{8,}/;

    var counter = 0;

    var myArray = [capitalLetters, smallLetters, specialChar, digits, minLength];

    for (var i = 0; i < myArray.length; i++){
        
        if (myArray[i].test(password) == true){
            counter++; 
        }

    }
        
    console.log(counter);

    
    try{

    if (counter < 3)
         throw "it doesnt work"
    }   catch (err){
        return err;
    }

   

//     if (counter >= 3){
//         console.log("Password is OKAY because " + counter );
//     }
// }
}
console.log(passwordIsOkay("xolani1.Q"));