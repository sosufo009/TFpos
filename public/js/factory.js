// app.factory('book', function($q, $stamplay){
//   function all() {
//     var deferred = $q.defer();
//
//     var BookCollection = $stamplay.Cobject('book').Collection;
//     BookCollection.fetch().then(function() {
//       deferred.resolve(BookCollection.instance);
//     });
//
//     return deferred.promise;
//   }
//
//   return {
//     all: all
//   }
// });

// angular.module('app').factory('Auth', ['$firebaseAuth',function($firebaseAuth) {
//     function create() {
//       var ref = new Firebase('https://tfpos-7c516.firebaseio.com/');
//       return $firebaseAuth(ref);
//     }
//
//     return {
//         create: create
//     }
// }]);

angular.module('app').factory("Auth", [
  function($firebaseAuth) {
    var ref = new Firebase('https://tfpos-7c516.firebaseio.com/');
    return $firebaseAuth(ref);

  }
]);
