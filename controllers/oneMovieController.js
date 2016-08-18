app.controller('oneMovieController', function($scope, $routeParams, movieFactory){
  movieFactory.getSingle($routeParams.id).then(function(data){
    console.log(data.data);
    $scope.single_movie=data.data
  })
})
