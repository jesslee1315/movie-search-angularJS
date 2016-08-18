app.controller('moviesController', function($scope, movieFactory){
   $scope.searchedMovies  = movieFactory.getMovies();
})
