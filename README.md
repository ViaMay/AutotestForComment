run following commands to setup project:
1. npm install

2. selenium install:
npm run setup-test_selenium_install

3. Start test
npm test


___________________________________________________________________

run one test setting on wdio.conf:
specs: [        
        'tests/tests/upMenu.test.js'
____________________________________________________________________
for debug used 
        browser.debug(); 
into test instead of break point
and run user DEBUG=true on wdio.conf
____________________________________________________________________    