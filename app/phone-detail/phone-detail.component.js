
'use strict';

angular
    .module('phoneDetail')
    .component('phoneDetail', {
        template: 'Detail view for <span>{{$ctrl.phoneId}}</span>',
        controller: ['$routeParams',
            function PhoneDetailController($routeParams) {
                this.phoneId = $routeParams.phoneId;
            }
    ]
});