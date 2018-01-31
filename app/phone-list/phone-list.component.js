'use strict';

angular.module('phoneList')
    .component('phoneList', {

      templateUrl: 'phone-list/phone-list.template.html',

      controller: function PhoneListController() {

          this.name = 'world';

          this.phones = [
              {
                  name: 'iPhone',
                  snippet: 'iPhone snippet with age 1',
                  age: 1
              },
              {
                  name: 'Windows Phone',
                  snippet: 'Windows snippet with age 2',
                  age: 2
              },
              {
                  name: 'Android',
                  snippet: 'Android snippet with age 3',
                  age: 3
              }

          ];

          this.orderProp = 'age';
      }

    });

