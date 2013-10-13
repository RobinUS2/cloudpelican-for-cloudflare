/**
* CloudPelican plugin for CloudFlare
*/
try {
	console.log('CloudPelican meets CloudFlare');
	window.onerror = function() {
		console.log('error');
	}
} catch (e) {
	window.console && console.log(e);
}
