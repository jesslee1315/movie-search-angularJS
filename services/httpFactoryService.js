app.factory('movieFactory', function($http){

  var movies = [];

  return {
    activate: function(movieTitle){
      $http.get(`http://www.omdbapi.com/?s=${movieTitle}`).then(function(movie){
        for (var i = 0; i < movie.data.Search.length; i++) {
          movies.push(movie.data.Search[i]);
        }
      })
    },
      getMovies: function(){
        return movies;
      },
      getSingle: function(id){
        return $http.get(`http://www.omdbapi.com/?i=${id}`)
      }
    }
  });
