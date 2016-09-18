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

angular.module('app').factory('testFac', ['$q','$stamplay',function($q,$stamplay) {
    function all() {
        var deferred = $q.defer();
        //
        // var BookCollection = $stamplay.Cobject('book').Collection;
        // BookCollection.fetch().then(function() {
        //     deferred.resolve(BookCollection.instance);
        // });

        return deferred.promise;
    }

    return {
        all: all
    }
}]);
