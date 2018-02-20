describe('phoneList', function() {

    beforeEach(module('phoneList'));

    describe('Controller', function() {

        var $httpBackend, ctrl;

        beforeEach(inject(function($componentController, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/phones.json')
                .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

            ctrl = $componentController('phoneList');
        }));

        it('default sort option is age', inject(function($componentController) {
            expect(ctrl.orderProp).toBe('age');
        }));

        it('should create a `phones` property with 2 phones fetched with `$http`', function() {
                expect(ctrl.phones).toBeUndefined();

                $httpBackend.flush();
                expect(ctrl.phones).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
        });
    });

});