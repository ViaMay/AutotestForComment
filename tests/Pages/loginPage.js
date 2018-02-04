var Page = require('./Page');
var expect = require('chai').expect;

var loginPage = Object.create(Page, {
    text: {get: function () {return browser.element('#container > div > h1');}},
    email: {get: function () {return browser.element('#email');}},
    password: {get: function () {return browser.element('#password');}},
    logIn: {get: function () {return browser.element('#go_login');}},

    waitVisible: {
        value: function () {
            this.email.waitForVisible();
            this.password.waitForVisible();
            this.logIn.waitForVisible();
            this.text.waitForText(5000);
            this.logIn.waitForText(5000);
            expect(this.text.getText()).to.be.equal('SolidOpinion Log in');
            expect(this.logIn.getText()).to.be.equal('Log In');
        }
    }
});

module.exports = loginPage;