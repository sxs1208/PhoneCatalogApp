'use strict';

angular.module('phoneList')
    .component('phoneList', {

      templateUrl: 'phone-list/phone-list.template.html',

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

