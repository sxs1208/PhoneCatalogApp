describe('phoneList', function() {

    beforeEach(module('phoneList'));

    describe('Controller', function() {

        it('check for total number of phones', inject(function($componentController) {
            var ctrl = $componentController('phoneList');

            expect(ctrl.phones.length).toBe(3);
        }));


        it('default sort option is age', inject(function($componentController) {
            var ctrl = $componentController('phoneList');

            expect(ctrl.orderProp).toBe('age');
        }));

    });

});