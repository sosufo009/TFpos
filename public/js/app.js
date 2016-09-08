angular.module('app', [])
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

        self.menuList = [{
            id: 1,
            name: '三明治',
            price:20
        }, {
            id: 2,
            name: '雞塊',
            price:25
        }, {
            id: 3,
            name: '蛋餅',
            price:30
        }];

        self.orderListOpenStatus = true;

        self.openArrow = function() {

            if (self.orderListOpenStatus == true) {
                self.orderListOpenStatus = false;
            } else if (self.orderListOpenStatus != true) {
                self.orderListOpenStatus = true;
            }
        };
        self.test = function() {
            alert('hi');
            console.log(self.menuList);
        };
    }]);
