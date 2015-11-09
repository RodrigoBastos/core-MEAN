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

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];

    $scope.loadTags = function(query) {
      return $http.get('/tags?query=' + query);
    };

    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };

  });