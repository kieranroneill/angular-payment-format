'use strict';

angular.module('ngPaymentFormatDemo', ['ng-payment-format'])
    .controller('DemoController', [
        '$scope',
        function($scope) {
            $scope.payment = {
                card: '',
                cvc: '',
                expiryDate: '',
                sortCode: ''
            };
        }
    ]);