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
    .controller('order', ['$firebaseObject', '$firebaseArray', '$firebase', '$firebaseAuth', function( $firebaseObject, $firebaseArray, $firebase, $firebaseAuth) {
        var self = this;

        self.orderList = [];


        self.test = function() {
            //load data
            // var ref = new Firebase("https://tfpos-7c516.firebaseio.com/");
            // self.messages = $firebaseObject(ref);
            // self.messages.$loaded()
            //     .then(function() {
            //         console.log(self.messages);
            //     })
            //     .catch(function(err) {
            //         console.error(err);
            //     });
            /////

            //auth create account
            // self.message = null;
            // self.error = null;
            //
            // Auth.$createUser({
            //     email: 'ccc@gmail.com',
            //     password: '12345678'
            // }).then(function(userData) {
            //     console.log("User created with uid: " + userData.uid);
            // }).catch(function(error) {
            //     console.log(error);
            // });
            /////

            var config = {
                apiKey: "AIzaSyCm3F66M361f6xzm2yg248VPQx9DcgeyG0",
                authDomain: "tfpos-7c516.firebaseapp.com",
                databaseURL: "https://tfpos-7c516.firebaseio.com",
                storageBucket: "tfpos-7c516.appspot.com",
                messagingSenderId: "95143809814"
            };
            firebase.initializeApp(config);
            // var rootRef = firebase.database().ref();
            var ref = firebase.database().ref();
            console.log(ref);
            //
            // // Reference
            // var key = ref.key;
            // var rootRef = ref.root;
            // var parentRef = ref.parent;
            //
            // // Query
            // var queryRef = query.ref;
            //
            // // DataSnapshot
            // ref.on("value", function(snapshot) {
            //     var dataRef = snapshot.ref;
            //     var dataKey = snapshot.key;
            // });

            var auth = firebase.auth();
            var provider = new firebase.auth.TwitterAuthProvider();
            auth.signInWithPopup(provider).then(function(result) {
                // User signed in!
                var uid = result.user.uid;
                console.log(uid);
            }).catch(function(error) {
                // An error occurred
                console.log(error);
            });

            //auth login
            // auth = $firebaseAuth(ref);
            // self.authData = null;
            // self.error = null;
            //
            // auth.$authAnonymously().then(function(authData) {
            //     self.authData = authData;
            // }).catch(function(error) {
            //     self.error = error;
            // });
            /////
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
