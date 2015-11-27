function locationService($q){
  var location = {};

  location.get = function(position){
    var def = $q.defer();
    if(navigator.geolocation){
      var options = {timeout:60000};
      var geoLoc = navigator.geolocation;
      var watchID = geoLoc.watchPosition(
      	function(position){
      		def.resolve(position);
      	},
      	function(err){
      		def.reject(err);
      	},
        options
      );
      return def.promise;
      
    }else{
      def.reject("Geolocation is not supported by this browser.");
      return;
    }
  }

  return location;

}

angular
	.module('locationFetching', [])
	.factory('locationFetchingService', locationService);