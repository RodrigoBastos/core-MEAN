/**
 * Created by handtalk on 29/10/15.
 */

angular.module('application.controllers', [])


  .controller('InfoCtrl', function ($scope, $http) {
    $scope.colors = ['red', 'blue', 'yellow', 'orange'];

    $scope.tags = [
      { text: 'just' },
      { text: 'some' },
      { text: 'cool' },
      { text: 'tags' }
    ];

    $scope.loadTags = function(query) {
      return $http.get('/tags?query=' + query);
    };

  });