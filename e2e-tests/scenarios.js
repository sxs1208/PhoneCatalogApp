describe('Protractor Demo App', function() {

    beforeEach(function() {
        //browser.get('hhttp://localhost:8000');
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


    it('display results should be iltered by search', function() {

        browser.get('http://localhost:8000');

        var queryField = element(by.model('$ctrl.query'));

        //element.all(by.css('ul li')).then(function(items) {
        $$('ul li').then(function(phones) {
            expect(phones.length).toBe(3);
            var name1 = phones[0].element(by.css('span'));
            var name2 = phones[1].element(by.css('span'));
            var name3 = phones[2].element(by.css('span'));
            expect(name1.getText()).toBe('iPhone');
            expect(name2.getText()).toBe('Windows Phone');
            expect(name3.getText()).toBe('Android');
        });


        queryField.sendKeys('phone');

        //element.all(by.css('ul li')).then(function(items) {
        $$('ul li').then(function(phones) {
            expect(phones.length).toBe(2);
            var name1 = phones[0].element(by.css('span'));
            var name2 = phones[1].element(by.css('span'));

            expect(name1.getText()).toBe('iPhone');
            expect(name2.getText()).toBe('Windows Phone');

        });

    });



    it('display results by sort order', function() {

        browser.get('http://localhost:8000');

        //element.all(by.css('ul li')).then(function(items) {
        $$('ul li').then(function(phones) {
            expect(phones.length).toBe(3);
            var name1 = phones[0].element(by.css('span'));
            var name2 = phones[1].element(by.css('span'));
            var name3 = phones[2].element(by.css('span'));
            expect(name1.getText()).toBe('iPhone');
            expect(name2.getText()).toBe('Windows Phone');
            expect(name3.getText()).toBe('Android');
        });


        element(by.cssContainingText('option', 'Alphabetical')).click();

        //element.all(by.css('ul li')).then(function(items) {
        $$('ul li').then(function(phones) {
            expect(phones.length).toBe(3);
            var name1 = phones[0].element(by.css('span'));
            var name2 = phones[1].element(by.css('span'));
            var name3 = phones[2].element(by.css('span'));

            expect(name1.getText()).toBe('Android');
            expect(name2.getText()).toBe('iPhone');
            expect(name3.getText()).toBe('Windows Phone');

        });

    });
});