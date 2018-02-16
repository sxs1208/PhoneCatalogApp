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


    it('should be possible to control phone order via the drop-down menu', function() {
        var queryField = element(by.model('$ctrl.query'));
        var orderSelect = element(by.model('$ctrl.orderProp'));
        //var nameOption = orderSelect.element(by.css('option[value="name"]'));
        var phoneNameColumn = element.all(by.repeater('phone in $ctrl.phones').column('phone.name'));

        function getNames() {
            return phoneNameColumn.map(function(elem) {
                return elem.getText();
            });
        }

        queryField.sendKeys('phone');   // Let's narrow the dataset to make the assertions shorter

        expect(getNames()).toEqual([
            'iPhone',
            'Windows Phone'
        ]);

        nameOption.click();

        expect(getNames()).toEqual([
            'iPhone',
            'Windows Phone'
        ]);
    });

});