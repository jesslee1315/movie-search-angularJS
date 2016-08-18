app.controller('indexController', function($scope, movieFactory){
  $scope.activating=function(){
    movieFactory.activate($scope.title);
  }
})
