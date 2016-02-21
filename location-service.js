(function(){
  'use strict';

  function locationService($q){
    
    var def = $q.defer();
    var geoLoc = navigator.geolocation;
    var options = {timeout:60000};

    function get(){
      if(geoLoc){
        var watchID = geoLoc.watchPosition(positionResolve, positionReject, options);
        return def.promise;
      }else{
        return def.reject("Geolocation is not supported by this browser.");
      }
    }

    function positionResolve(position){
      def.resolve(position);
    }

    function positionReject(err){
      def.reject(err);
    }
    
    var location = {
      get: get
    };
    
    return location;

  }

  angular
  	.module('locationFetching', [])
  	.factory('locationFetchingService', locationService);

})();