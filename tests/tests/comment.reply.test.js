var assert = require('assert');
var expect = require('chai').expect;
var Page = require('../Pages/Page');
var topCommentsPage = require('../Pages/topCommentsPage');
var loginPage = require('../Pages/loginPage');

describe('comment reply', function () {
    it('comment reply for fist user', function () {
        topCommentsPage.open();
        topCommentsPage.waitVisible();
        topCommentsPage.firstLevelComments(0).titleName.waitForVisible();
        topCommentsPage.firstLevelComments(1).titleName.waitForVisible();
        topCommentsPage.firstLevelComments(2).titleName.waitForVisible();

        topCommentsPage.commentsContent.addComment.setValue('hi');
        topCommentsPage.commentsContent.iconSo.waitForVisible();
        topCommentsPage.commentsContent.iconSo.click();

        var id1Windows =  browser.getCurrentTabId();
        var id2Windows = browser.getTabIds()[1];
        browser.switchTab(id2Windows);
        loginPage.waitVisible();
        loginPage.email.setValue(Page.userEmail);
        loginPage.password.setValue(Page.userPass);
        loginPage.logIn.click();
        browser.switchTab(id1Windows);
        browser.pause(3000);

        topCommentsPage.waitVisible();
        topCommentsPage.firstLevelComments(0).replyComment.waitForVisible();
        topCommentsPage.firstLevelComments(0).replyComment.click();

        topCommentsPage.firstLevelComments(0).comments.addReply.waitForVisible();
        topCommentsPage.firstLevelComments(0).comments.addReply.setValue('text for autotests');
        topCommentsPage.firstLevelComments(0).comments.postPerly.click();
    });
});