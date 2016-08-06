ngPaymentFormat.directive('paymentFormatCardNumber', [
    function() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, element, attrs, ngModel) {
                var onKeyDown = function(event) {

                };
                var onKeyPress = function(event) {

                };

                element.on('keypress', onKeyPress);
                element.on('keydown', onKeyDown);
            }
        };
    }
]);