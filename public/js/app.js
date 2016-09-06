angular.module('app', ['ngAnimate'])
    .controller('test', [function() {
        var self = this;
        // alert('herllo');
        // var data = {
        //     "email": "john@stamplay.com",
        //     "password": "john123"
        // }
        //
        // self.login = function() {
        //     Stamplay.User.signup(data, function(error, result) {
        //         //manage the result and the error
        //         alert(result);
        //     })
        // }

    }])
    .controller('order', [function() {
        var self = this;


        self.orderListOpenStatus = true;

        self.openArrow = function() {

            if (self.orderListOpenStatus == true) {
                self.orderListOpenStatus = false;
            } else if (self.orderListOpenStatus != true) {
                self.orderListOpenStatus = true;
            }
        }
    }]);
