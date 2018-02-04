1. Установить зависимость. Запустить в консоле:
npm install

2. Запустить тесты:
npm test


___________________________________________________________________

Чтобы запустить один тест wdio.conf:
specs: [        
        'tests/tests/authorization.test.js'
____________________________________________________________________
for debug used 
        browser.debug(); 
into test instead of break point
and run user DEBUG=true on wdio.conf
____________________________________________________________________    