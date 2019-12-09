let something = require("../passwordValidation")

let passwordIsValid = something.passwordIsValid

let passwordIsOkay = something.passwordIsOkay

//Tests for passwordIsValid function
describe("passwordIsValid", () =>{
    it("It should be true ", () =>{
        expect(passwordIsValid("xoLAni$100")).toBe(true);
    })
    it("Return false because it is shorter than 8 characters ", () =>{
        expect(passwordIsValid("Xola$1")).toBe(false);
    })
    it("Return false because there no special characters ", () =>{
        expect(passwordIsValid("xoLAni11111")).toBe(false);
    })
    it("Return false because there are no digits ", () =>{
        expect(passwordIsValid("xoLAni!@#$%^")).toBe(false);
    })
});

//Tests for passwordIsOkay function
describe("passwordIsOkay", () =>{
    it("It should be true ", () =>{
        expect(passwordIsOkay("xolani")).toBe("Password too short, less than 3 conditions are met");
    })
    it("It should be true ", () =>{
        expect(passwordIsOkay("xolani$100")).toBe("The Password is Okay");
    })
    it("It should be true ", () =>{
        expect(passwordIsOkay("XOlaNi$100")).toBe("The Password is Okay");
    })
    it("It should be true ", () =>{
        expect(passwordIsOkay("Xol$100")).toBe("Password should have a minimum of 8 characters");
    })
    it("It should be true ", () =>{
        expect(passwordIsOkay("xolanixolani")).toBe("The password should meet atleast 3 conditions");
    })
});