'use strict'

var phoneCatalogApp = angular.module('phoneCatalogApp', []);


phoneCatalogApp.controller( 'PhoneListController', function PhoneListController($scope) {

    $scope.name = 'world';

    $scope.phones = [
        {
            name: 'phone name 1',
            snippet: 'phone snippet 1'
        },
        {
            name: 'phone name 2',
            snippet: 'phone snippet 2'
        },
        {
            name: 'phone name 3',
            snippet: 'phone snippet 3'
        }

];
});