(function (root, factory) {
  // AMD
  if (typeof define === 'function' && define.amd) {
    define(['angular', 'stamplay'], function (angular, stamplay) {
      return factory({}, angular, stamplay);
    });
  }
  // Node.js
  else if (typeof exports === 'object') {
    module.exports = factory({}, require('angular'), require('stamplay'));
  }
  // Angular
  else if (angular) {
    factory(root, root.angular, root.Stamplay);
  }
}(this, function (global, angular, Stamplay) {
  'use strict';
  if (Stamplay && global && !global.Stamplay) {
    global.Stamplay = Stamplay;
  }

  // var stamplaySettings = global.StamplaySettings || {};

  var instance = false;
  // Allow constructor to be used for both $stamplay and Stamplay services
  function $StamplayProvider() {

    var provider = this;

    provider.$get = ['$rootScope', '$log', function ($rootScope, $log) {
      // warn the user if they inject both $stamplay and Stamplay
      if (instance) {
        $log.warn('Please use consider using either $stamplay or Stamplay not both');
      }
      instance = true;

      function $stamplay() {
        global.Stamplay.apply(global.Stamplay, arguments);
        return $stamplay;
      }

      var methods = {
        Object: function (options) {
          var cobject = new global.Stamplay.Object(options);
          return cobject;
        },
        User: global.Stamplay.User,
        Stripe: global.Stamplay.Stripe,
        Webhook: function (option) {
          var webhook = new global.Stamplay.Webhook(option);
          return webhook;
        },
        Codeblock: function(option){
          var codeblock = new global.Stamplay.Codeblock(option)
          return codeblock
        },
        Query: function (option1, option2) {
          var query = new global.Stamplay.Query(option1,option2);
          return query;
        }
      };

      // this allows you to use methods prefixed with '$' to safe $apply on $rootScope
      function buildMethod(func, method) {
        $stamplay[method] = func;
        $stamplay['$' + method] = function () {
          func.apply(Stamplay, arguments);
          if (!$rootScope.$$phase) {
            $rootScope.$apply();
          }
          return $stamplay;
        };
      }

      angular.forEach(methods, buildMethod);

      return $stamplay;
    }]; // end $get
  }

  angular.module('ngStamplay', [])
    .provider('$stamplay', $StamplayProvider)
    .provider('Stamplay', $StamplayProvider);

  // allow you to use either module
  angular.module('angular-stamplay', ['ngStamplay']);

  return angular.module('ngStamplay');

}));
