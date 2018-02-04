var assert = require('assert');
var expect = require('chai').expect;
var Page = require('../Pages/Page');
var topCommentsPage = require('../Pages/topCommentsPage');

describe('open page, switch to frame', function () {
    it('open page, switch to frame', function () {
        topCommentsPage.open();
        topCommentsPage.waitVisible();
    });

});