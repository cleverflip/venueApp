function venueController(FoursquareApiURL, ApiURL, locationFetchingService, venuesFetchingService, $filter){
  var vc = this;
  
  locationFetchingService.get()
    .then(
      function(position){
        lat = position.coords.latitude;
        long = position.coords.longitude;
        addCoordinates(lat,long);
      },
      function(err){vc.message = err.message;}
    );

  function addCoordinates(lat, long){
    var latlong = '&ll='+ lat + '%2C%20' + long;
    var foursquareURL = FoursquareApiURL + ApiURL.version + latlong + ApiURL.intent + ApiURL.client_id + ApiURL.client_secret;
    
    venuesFetchingService.findVenues(foursquareURL, function (q) {
      var orderByDist = $filter('orderBy')(q.data.response.venues, 'location.distance');
      vc.venues = orderByDist;

      vc.change = function(data){
        var filterByName = $filter('filter')(orderByDist, {name: vc.search});
        vc.venues = filterByName;
      }
    });
  }
}

angular
  .module('venue.controller', ['apiSettings', 'constants', 'venuesFetching', 'locationFetching'])
  .controller('VenueCtrl', venueController);