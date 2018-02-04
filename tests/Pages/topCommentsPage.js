var Page = require('./Page');
var firstLevelCommentsControl = require('../PagesControls/firstLevelCommentsControl');
var commentsContentControl = require('../PagesControls/commentsContentControl');
var expect = require('chai').expect;

var topCommentsPage = Object.create(Page, {

    bodyText: {get: function () {return browser.element('body > div > h3');}},
    commentFrame: {get: function () {return $('iframe');}},
    topCommentsText: {get: function () {return browser.element('div.top_comments');}},

    firstLevelComments: {value: function (index) {return new firstLevelCommentsControl.firstLevelComments(index);}},
    commentsContent: {get: function () {return new commentsContentControl.commentsContent('#solid-comment-wrap');}},
    locator: {get: function () {return '#solid-comment-wrap';}},

    open: {value: function () {Page.open.call(this, '');}},

    waitVisible: {
        value: function () {
            browser.frameParent();

            this.bodyText.waitForVisible();
            this.bodyText.waitForExist();
            this.commentFrame.waitForExist();
            browser.frame(this.commentFrame.value);
            this.topCommentsText.waitForExist();

            this.topCommentsText.waitForText(5000);
            expect(this.topCommentsText.getText()).to.be.equal('TOP Comments');
        }
    }
});


module.exports = topCommentsPage;