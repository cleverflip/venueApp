function venuesService($http){
  
  var VenuesService = {};

  VenuesService.findVenues = function(foursquareURL, q){
    return $http.get(foursquareURL, {cache: true}).then(q); 
  }

  return VenuesService;
  
}

angular
	.module('venuesFetching', [])
	.factory('venuesFetchingService', venuesService);