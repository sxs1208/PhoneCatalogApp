'use strict';

angular
    .module('phoneList')
    .component('phoneList', {

      templateUrl: 'phone-list/phone-list.template.html',

      controller: ['$http',
          function PhoneListController($http) {
              var self = this;
              self.name = 'world';

              $http.get('phones/phones.json').then(function(response) {
                  self.phones = response.data;
              });

              self.orderProp = 'age';
          }
        ]
    });

