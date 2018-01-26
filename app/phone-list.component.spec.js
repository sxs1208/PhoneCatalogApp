fdescribe('phoneList', function() {

    beforeEach(module('phoneCatalogApp'));

    describe('PhoneListController', function() {

        it('check for total number of phones', inject(function($componentController) {
            var ctrl = $componentController('phoneList');

            expect(ctrl.phones.length).toBe(3);
        }));

    });

});