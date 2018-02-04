var commentsContentControl = require('../PagesControls/commentsContentControl');

function secondLevelComments (index) {
    index = index + 1;
    var locator  = '#comments-bid > li.comment:nth-child(' + index + ')';
    var boxElement = $(locator);
    this.titleName = boxElement.element('div.comments-content-header.clearfix > div > a');
    this.openReply = boxElement.element('div.expand-box.system-color > span:nth-child(2) > i');
    this.replyComment = boxElement.element('li.reply-link-container > a > span');
}

module.exports.secondLevelComments = secondLevelComments;