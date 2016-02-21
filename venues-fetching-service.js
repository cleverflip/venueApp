(function(){
	'use strict';

	function venuesService($http){
	  
	  function findVenues(foursquareURL, q){
	    return $http.get(foursquareURL, {cache: true}).then(q); 
	  }

	  return {
	  	findVenues: findVenues
	  };
	  
	}

	angular
		.module('venuesFetching', [])
		.factory('venuesFetchingService', venuesService);

})();