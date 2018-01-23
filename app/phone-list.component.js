'use strict';

angular.module('phoneCatalogApp')
    .component('phoneList', {
      template:

        '<p>Hello, {{$ctrl.name}}!</p>' +

        '<ul>' +
            '<li ng-repeat="phone in $ctrl.phones">' +
                '<span>{{phone.name}}</span>' +
                '<p>{{phone.snippet}}</p>' +
            '</li>' +
        '</ul>' +

        '<p>Total number of phones: {{phones.length}}</p>',


      controller: function PhoneListController() {

          this.name = 'world';

          this.phones = [
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
      }

    });

