/**
* CloudPelican plugin for CloudFlare
*/
try {
	console.log('CloudPelican meets CloudFlare');
	window.onerror = function() {
		console.log('error');
	}

	cloudpelican = {
		this.push = function(fields)
		{
			console.log(fields);
		}
	}
} catch (e) {
	window.console && console.log(e);
}
