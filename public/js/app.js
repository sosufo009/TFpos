angular.module('app',[])
.controller('test',[function(){
  var self = this;
  // alert('herllo');
  var data = {
      "email": "john@stamplay.com",
      "password": "john123"
  }

  self.login = function()
  {
    Stamplay.User.signup(data, function(error, result) {
        //manage the result and the error
        alert(result);
    })
  }

}]);
