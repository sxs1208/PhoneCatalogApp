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

        expect(phoneList.count()).toBe(20);

        query.sendKeys('Samsung');
        expect(phoneList.count()).toBe(5);

        query.clear();
        query.sendKeys('Dell');
        expect(phoneList.count()).toBe(2);

    });


    it('display results should be iltered by search', function() {

        browser.get('http://localhost:8000');

        var queryField = element(by.model('$ctrl.query'));

        //element.all(by.css('ul li')).then(function(items) {
        $$('ul li').then(function(phones) {
            expect(phones.length).toBe(20);
            var name1 = phones[0].element(by.css('span a'));
            var name2 = phones[1].element(by.css('span a'));
            var name3 = phones[2].element(by.css('span a'));
            expect(name1.getText()).toBe('Motorola XOOM™ with Wi-Fi');
            expect(name2.getText()).toBe('MOTOROLA XOOM™');
            expect(name3.getText()).toBe('MOTOROLA ATRIX™ 4G');
        });


        queryField.sendKeys('Samsung');

        //element.all(by.css('ul li')).then(function(items) {
        $$('ul li').then(function(phones) {
            expect(phones.length).toBe(5);
            var name1 = phones[0].element(by.css('span a'));
            var name2 = phones[1].element(by.css('span a'));

            expect(name1.getText()).toBe('Samsung Gem™');
            expect(name2.getText()).toBe('Samsung Galaxy Tab™');

        });

    });



    it('display results by sort order', function() {

        browser.get('http://localhost:8000');

        //element.all(by.css('ul li')).then(function(items) {
        $$('ul li').then(function(phones) {
            expect(phones.length).toBe(20);
            var name1 = phones[0].element(by.css('span a'));
            var name2 = phones[1].element(by.css('span a'));
            var name3 = phones[2].element(by.css('span a'));
            expect(name1.getText()).toBe('Motorola XOOM™ with Wi-Fi');
            expect(name2.getText()).toBe('MOTOROLA XOOM™');
            expect(name3.getText()).toBe('MOTOROLA ATRIX™ 4G');
        });


        element(by.cssContainingText('option', 'Alphabetical')).click();

        //element.all(by.css('ul li')).then(function(items) {
        $$('ul li').then(function(phones) {
            expect(phones.length).toBe(20);
            var name1 = phones[0].element(by.css('span a'));
            var name2 = phones[1].element(by.css('span a'));
            var name3 = phones[2].element(by.css('span a'));

            expect(name1.getText()).toBe('Dell Streak 7');
            expect(name2.getText()).toBe('Dell Venue');
            expect(name3.getText()).toBe('DROID™ 2 Global by Motorola');

        });

    });

    it('should render phone specific links', function() {

        browser.get('http://localhost:8000');

        var queryField = element(by.model('$ctrl.query'));

        queryField.sendKeys('nexus');

        element.all(by.css('.phones li a')).first().click();
        expect(browser.getLocationAbsUrl()).toBe('/phones/nexus-s');
    });
});