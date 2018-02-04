function commentsContent (locator) {
    var boxElement = $(locator);
    this.addComment = boxElement.element('#comment_data');
    this.emailField = boxElement.element('input[name="email"]');
    this.nameField = boxElement.element('input[name="name"]');
    this.termsCheckbox = boxElement.element('div.terms-block > input.i-agree');
    this.arrowEnter = boxElement.element('span.icon-arrow-btn');

    this.messageText = boxElement.element('div.error-new.message-success > span');
    this.displayName = boxElement.element('#display_name');

    this.iconSo = boxElement.element('div.wrap-soc-icons > span.icon-so');

    this.addReply = boxElement.element('[role="textbox"]');
    this.postPerly = boxElement.element('[value="Post"]');
    this.postCansel = boxElement.element('[value="Cancel"]');
}

module.exports.commentsContent = commentsContent;