(function(){
	'use strict';

	var VenuesService = function($http){
	  
	  function findVenues(foursquareURL, q){
	    return $http.get(foursquareURL, {cache: true}).then(q); 
	  }

	  return {
	  	findVenues: findVenues
	  };
	  
	}

	angular
		.module('venuesFetching', [])
		.factory('venuesFetchingService', VenuesService);

})();