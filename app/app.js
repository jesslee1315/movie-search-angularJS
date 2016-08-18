var app=angular.module('movie_search', ['ngRoute']).
config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'partials/movies.html',
      controller: 'moviesController'
    })
    .when('/movies/:id', {
      templateUrl: 'partials/show.html',
      controller: 'oneMovieController'
    })
})
