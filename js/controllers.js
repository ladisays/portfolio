
var portfolio = angular.module('portfolio', []);

portfolio.controller('ReposCtrl', function($scope, $http) {
  $scope.show = false;
  $scope.generatePortfolio = function(a) {
    $scope.show = a;
    var githubURL = 'https://api.github.com/users/' + $scope.query + '/repos';

    $http.get(githubURL).
    success(function(data, status) {
      if(status === 200) {
        $scope.repos = data;
        console.log(data);
        for(var i = 0; i < $scope.repos.length; i++) {
          var liveViewUrl = 'http://' + $scope.query + '.github.io/' + $scope.repos[i].name,
              imageUrl = 'images/' + $scope.repos[i].name + '.png';

          $scope.repos[i].liveView = liveViewUrl;
          $scope.repos[i].imageSrc = imageUrl;
        }
      }
    }).
    error(function(data, status) {
      if(status === 404) {
        alert("Oops!\nCould not find any portfolio for" + $scope.query);
      }
      else if(status !== 200) {
        alert("Oops! We are sorry!\nThere was an error with the request.");
      }
    }); // end $http.get
  }
}); // end ReposCtrl
