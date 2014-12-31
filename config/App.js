 var app = angular.module('myApp', ['ngRoute']);
    app.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider.
          when('/index', {
            templateUrl: 'modules/Timer/View/Timer.html',
            controller: 'TimerController'
          }).
          when('/settings', {
            templateUrl: 'modules/Setting/View/Settings.html',
            controller: 'SettingController'
          }).
          otherwise({
            redirectTo: '/index'
          });
      }]);
  