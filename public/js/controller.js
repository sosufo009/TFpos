Stamplay.init("tfpos");
angular.module('app')
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
    .controller('order', ['testFac', '$stamplay', function(testFac, $stamplay) {
        var self = this;

        self.orderList = [];

        testFac.all().then(function(books) {
            self.orderList = books;
        });

        self.test = function() {
            // var user = $stamplay.User
            var data = {
                    "email": "john@stamplay.com",
                    "password": "john123"
                }
                // user.signup(data, function(error, result) {
                //     //manage the result and the error
                //     console.log(result);
                //     console.log(data);
                // })
            console.log(Stamplay);
            Stamplay.User
                .signup(data,
                    function(err, res) {
                        if (err) return console.log(err);
                        console.log(res);
                    });
        }

        self.menuList = [{
            id: 0,
            name: '三明治',
            price: 20,
            isshow: false
        }, {
            id: 1,
            name: '雞塊',
            price: 25,
            isshow: false
        }, {
            id: 2,
            name: '蛋餅',
            price: 30,
            isshow: false
        }];

        self.orderListOpenStatus = true;

        self.openArrow = function() {

            if (self.orderListOpenStatus == true) {
                self.orderListOpenStatus = false;
            } else if (self.orderListOpenStatus != true) {
                self.orderListOpenStatus = true;
            }
        };
        self.addOrder = function(id) {
            self.orderList.push({
                name: self.menuList[id].name
            })
            self.showDetail(id);

        };

        self.showDetail = function(id) {
            var tmp = self.menuList.filter(function(obj) {
                return obj.id == id;
            });
            if (tmp.length > 0) {
                self.menuList[id].isshow = !self.menuList[id].isshow;
                // console.log(self.menuList[id]);
            }
        };
    }]);
