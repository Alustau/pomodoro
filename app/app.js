var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/index', {
        templateUrl: 'partials/timer.html',
        controller: 'TimerController'
      }).
      when('/settings', {
        templateUrl: 'partials/settings.html',
        controller: 'SettingController'
      }).
      otherwise({
        redirectTo: '/index'
      });
  }]);