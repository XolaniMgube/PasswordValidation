let something = require("../passwordValidation")

let passwordIsValid = something.passwordIsValid

let passwordIsOkay = something.passwordIsOkay

describe("passwordIsValid", () =>{
    it("It should be true ", () =>{
        expect(passwordIsValid("xoLAni$100")).toBe(true);
    })
    it("It should be true ", () =>{
        expect(passwordIsValid("xoLAni")).toBe(false);
    })
});

describe("passwordIsOkay", () =>{
    it("It should be true ", () =>{
        expect(passwordIsOkay("xolani$100")).toBe(true);
    })
    it("It should be true ", () =>{
        expect(passwordIsOkay("xolani111")).toBe(false);
    })
});