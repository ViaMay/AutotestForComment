function Page () {
}

Page.prototype.userEmail = "qtoqatqdrmoa@dropmail.me";
Page.prototype.userPass = "111222333R";
Page.prototype.userName = "testuser";

Page.prototype.open = function (path) {
    browser.deleteCookie();
    browser.url(path);
    browser.pause(3000);
};

Page.prototype.emailGeneration = function () {
    var today  = new Date().toISOString();
    today = today.replace(':', '').replace('-', '').replace('.', '').replace(':', '').replace('-', '').replace('T', '').slice(0, 15);
    return "test" + today + "@gmail.com";
};

Page.prototype.nameGeneration = function () {
    var userName  = new Date().toISOString();
    userName = userName.replace(':', '').replace('-', '').replace('.', '').replace(':', '').replace('-', '').replace('T', '').slice(0, 15);
    return userName;
};

module.exports = new Page();