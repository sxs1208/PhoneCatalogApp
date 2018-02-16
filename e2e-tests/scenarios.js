describe('Protractor Demo App', function() {

    beforeEach(function() {
       // browser.get('hhttp://localhost:8000');
    });


    it('should have a title', function() {
        browser.get('http://localhost:8000');

        expect(browser.getTitle()).toEqual('My HTML File');
    });


    it('when search criteria entered, list of phones is filtered', function() {
        var phoneList = element.all(by.repeater('phone in $ctrl.phones'));
        var query = element(by.model('$ctrl.query'));

        expect(phoneList.count()).toBe(3);

        query.sendKeys('iPhone');
        expect(phoneList.count()).toBe(1);

        query.clear();
        query.sendKeys('snippet with');
        expect(phoneList.count()).toBe(3);

    });

});