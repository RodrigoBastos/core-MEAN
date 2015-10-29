/**
 * Created by handtalk on 29/10/15.
 */

angular.module('applicatio.routes', [])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider.
      state('home', {
        url: '/home',
        templateUrl: '/home',
        controller: 'HomeCtrl'
      })
  })
;