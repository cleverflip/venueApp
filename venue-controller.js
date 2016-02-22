(function(){
  'use strict';
  
  var venueController = function(FoursquareApiURL, ApiURL, locationFetchingService, venuesFetchingService, $filter){
    /*jshint validthis: true */
    var vm = this;
    var lat, long, latlong, foursquareURL, orderByDist, filterByName;
    vm.message;
    vm.change = changeSearch;
    vm.search;
    vm.venues = [];

    getLocation();

    function getLocation(){
      return locationFetchingService.get()
        .then(getPositionSuccess)
        .catch(getPositionFailed);
    }

    function getPositionSuccess(position){
      lat = position.coords.latitude;
      long = position.coords.longitude;
      addCoordinates(lat,long);
    }

    function getPositionFailed(err){
      vm.message = err.message;
    }

    function addCoordinates(lat, long){
      latlong = '&ll='+ lat + '%2C%20' + long;
      foursquareURL = FoursquareApiURL + ApiURL.version + latlong + ApiURL.intent + ApiURL.client_id + ApiURL.client_secret;
      getVenues();
    }

    function getVenues(){
      return venuesFetchingService.findVenues(foursquareURL, function (q) {
        orderByDist = $filter('orderBy')(q.data.response.venues, 'location.distance');
        vm.venues = orderByDist;
        changeSearch();  
      });
    }

    function changeSearch(data){
      filterByName = $filter('filter')(orderByDist, {name: vm.search});
      vm.venues = filterByName;
    }

  }

  angular
    .module('venue.controller', ['apiSettings', 'constants', 'venuesFetching', 'locationFetching'])
    .controller('VenueCtrl', venueController);

})();