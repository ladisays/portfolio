var app = angular.module('portfolio', []);

app.factory('Utils', function() {
  return {
    isImage: function(src, index, cb) {
      
      var image = new Image();
      image.src = src;
      image.onerror = function() {
        cb(false, index);
      };
      image.onload = function() {
        cb(true, index);
      };
    }
  };
}); // end app.factory

app.controller('ReposCtrl', function($scope, $http, Utils) {
  
  $scope.show = false;

  $scope.generatePortfolio = function(a) {

    //$scope.show will accept only a boolean value, which will hide/show
    //the text "Portfolio for *username*"
    $scope.show = a;

    var portfolioURL = 'https://api.github.com/users/' + $scope.query + '/repos';

    $http.get(portfolioURL).
    success(function(data, status) {
      if(status === 200) {
        $scope.repos = data;
        
        //loop through all the repos and add 'liveViewUrl' and 'imageSrc' properties 
        for(var i = 0; i < $scope.repos.length; i++) {
          var liveViewUrl = 'http://' + $scope.query + '.github.io/' + $scope.repos[i].name,
              defaultImg = 'images/placeholder.png',
              imageSrc  = 'images/' + $scope.repos[i].name + '.png';

          //check if the generated image url is true, else use the placeholder image as a default
          Utils.isImage(imageSrc, i, function(bool, index) {
            if(bool) {
              var imageUrl = 'images/' + $scope.repos[index].name + '.png';
              $scope.$apply(function() {
                $scope.repos[index].imageSrc = imageUrl;
              });
              
            }
            else {
              $scope.$apply(function() {
                $scope.repos[index].imageSrc = defaultImg;
              });
            }
            
          });

          //check if the a repo has gh-pages, if not, set live view to not available
          if($scope.repos[i].has_pages === true) {
            $scope.repos[i].liveView = {url: liveViewUrl, text: "click for live view!"};
          }
          else {
            $scope.repos[i].liveView = {url: "", text: "not available"};
          }
        } // end for loop
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

  }; // end $scope.generatePortfolio

}); // end app.controller









