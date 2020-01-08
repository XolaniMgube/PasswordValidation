let something = require("../src/password_checker.js")

let passwordIsValid = something.passwordIsValid

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


