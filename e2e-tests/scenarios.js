'use strict';

describe('application e2e testing', function () {
    describe('phoneList', function() {
        beforeEach(function() {

            browser.get('index.html');
            /*
            browser.get('index.html').then(function() {
                browser.wait(function() {
                    return browser.getCurrentUrl().then(function(url) {
                        return /thetestroom/.test(url);
                    });
                }, 10000);
            });
            */
        });
    });

    it('when search criteria entered, list of phones is filtered', function() {
        var phoneList = element.all(by.repeater('phone in $ctrl.phones'));
        var query = element(by.model('$ctrl.query'));

        expect(phoneList.count()).toBe(3);

        query.sendKeys('phone name 1');
        expect(phoneList.count()).toBe(1);

        query.clear();
        query.sendKeys('phone name');
        expect(phoneList.count()).toBe(3);
    });

});