/**
 * Created by handtalk on 29/10/15.
 */

angular.module('application.routes', [])
  .config(function ($stateProvider , $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider

      //┌───────────┐
      //│ Principal │
      //└───────────┘

      // Home State
      .state('home', {
        url: '/home',
        templateUrl: 'home'
      })

      // Info State
      .state('info', {
        url: '/info',
        templateUrl: 'info',
        controller: 'InfoCtrl'
      });
  })
;




