ngPaymentFormat.directive('paymentFormat', [
    function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attrs, ngModel) {
                switch(attrs.paymentFormat) {
                    case 'card':

                        break;
                    case 'cvc':

                        break;
                    case 'expiry':

                        break;
                    case 'sortCode':

                        break;
                    default:
                        break;
                }
            }
        };
    }
]);