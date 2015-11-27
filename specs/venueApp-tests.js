//UNDER CONSTRUCTION
describe('Controller: VenueCtrl', function(){
	
	beforeEach(function(){
		module('venueApp');
	});

	beforeEach(inject(function($controller, $rootScope, $httpBackend, locationFetchingService, venuesFetchingService, $filter){
		this.$filter = $filter;
		this.$httpBackend = $httpBackend;
		this.scope = $rootScope.$new();
		this.controller = $controller('VenueCtrl', {
			$scope: this.scope,
			locationFetchingService: locationFetchingService,
			venuesFetchingService: venuesFetchingService,
			$filter: $filter
		});
	}));

	afterEach(function(){
		this.$httpBackend.verifyNoOutstandingExpectation();
        this.$httpBackend.verifyNoOutstandingRequest();
	});

	describe('successfully fetching current location data', function(){
		
		beforeEach(inject( function(locationFetchingService, $q){
	    	this.locationFetchingService = locationFetchingService;
	    	this.locationFetchingService.get = function() {
		        var deferred = $q.defer();
		        deferred.resolve('Remote call result');
		        return deferred.promise;   
	   	 	};
	  	}));

	  	it('should get the latitude and longitude of device"s location', function() {
	    	this.locationFetchingService.get()
	      		.then(function() {
	        		console.log('Success');
	      		});    
	  	});


		xit('should get the latitude and longitude of device"s location', function(){
			//arrange
			
			//act
			locationFetchingService.get();
			
			//assertion
			expect().toBe();
		});
	});

	xdescribe('successfully fetching venue data', function(){
		it('should get the venue list data', function(){
			var foursquareURL = '';
			//arrange
			this.$httpBackend.expectGET(foursquareURL, {cache: true}).respond(200);
			//act
			this.controller.venuesFetchingService.findVenues(foursquareURL);
			this.$httpBackend.flush();
			//assertion
			//expect(q).toContain(q);
		});
	});

	xdescribe('successfully filtering venue data on search', function(){
		it('should filter venues list on distance at page load', function(){
			//arrange
			
			//act
			
			//assertion
			expect().toBe();
		});
		it('should filter venues list on name on each key input', function(){
			//arrange
			
			//act
			
			//assertion
			expect().toBe();
		});
	});


	describe('the version of the app', function(){
		it('is version 0.0.1', function(){
			var version = '0.0.1';
			expect(version).toBe('0.0.1');
			console.log('Success, your version is '+version);
		});
	});
	

});
