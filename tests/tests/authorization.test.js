var assert = require('assert');
var expect = require('chai').expect;
var Page = require('../Pages/Page');
var topCommentsPage = require('../Pages/topCommentsPage');

describe('authorization', function () {
    it('create new account', function () {
        topCommentsPage.open();
        topCommentsPage.waitVisible();
        topCommentsPage.firstLevelComments(0).titleName.waitForVisible();

        topCommentsPage.commentsContent.addComment.setValue('hi');
        topCommentsPage.commentsContent.emailField.waitForVisible();
        topCommentsPage.commentsContent.nameField.waitForVisible();

        var emailGeneration= Page.emailGeneration();
        var nameGeneration = Page.nameGeneration();
        topCommentsPage.commentsContent.emailField.setValue(emailGeneration);
        topCommentsPage.commentsContent.nameField.setValue(nameGeneration);

        topCommentsPage.commentsContent.termsCheckbox.waitForVisible();
        topCommentsPage.commentsContent.arrowEnter.waitForVisible();
        topCommentsPage.commentsContent.termsCheckbox.click();
        topCommentsPage.commentsContent.arrowEnter.click();

        topCommentsPage.commentsContent.messageText.waitForText(5000);
        topCommentsPage.commentsContent.displayName.waitForText(5000);

        expect(topCommentsPage.commentsContent.messageText.getText()).to.be.equal('Your temporary password has been sent to your inbox. Please don’t forget to change it later.');
        expect(topCommentsPage.commentsContent.displayName.getText()).to.be.equal(nameGeneration);
    });
});