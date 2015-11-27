(function(){
	angular
		.module('apiSettings', [])
		.value('ApiURL', {
			version: '?v=20131016',
			latlong: undefined,
			intent: '&intent=checkin',
			client_id: '&client_id=[CLIENT_ID]', //replace [CLIENT_ID]
			client_secret: '&client_secret=[CLIENT_SECRET]' //replace [CLIENT_SECRET]
		});
})();