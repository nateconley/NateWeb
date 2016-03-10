function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


angular.module('weatherApp', [])
.controller('location', function($scope, $http){
	// Temperature unit to fahrenheit
	$scope.tempUnit = "F";
	$scope['tempUnit'] = "F"

	// Set Temperature for manipulating when unit is changed
	var temp;

	// handles weather requests
	$scope.getWeather = function(locationType){
		// variables showing state of app for DOM elements
		$scope.loading = true;
		$scope.showData = false;
		$scope.error = false;
		$scope.invalidZip = false;
		$scope.noGeolocation = false;
		// empty location object
		var location = {}
		
     var getLocator = 'getLocation' + capitalizeFirstLetter(locationType);
     console.log(getLocator);
		$scope[getLocator](function(location) {
			$scope.makeWeatherRequest(location);
			console.log(location);
		})

  }

		$scope.getLocationGeo = function(callback) {
			if ("geolocation" in navigator) {		// Check to see if the browser supports geolocation
				navigator.geolocation.getCurrentPosition(function(position){
					var location = {};
					location.latitude = position.coords.latitude;
					location.longitude = position.coords.longitude;
					callback(location);
				});
			} else {
			// If browser doesn't support geolocation
				$scope.noGeolocation = true;
			}
		}

		$scope.getLocationZip = function(callback) {
			var location = {};
			location.zip = $scope.zipCode;
			// Check if zip is valid (eg: 55555)
			if (!location.zip.match(/[0-9]{5}/) || location.zip.length !== 5) {
				$scope.invalidZip = true;
				$scope.loading = false;
			} else {
				callback(location);
			}
		}

$scope.makeWeatherRequest = function(location) {
			$http.post('/weather', location).then(function(response){
				var weatherData = response.data;
				if (!weatherData.error) {
					// Success
					$scope.city = weatherData.city;
					$scope.temperature = weatherData.temperature;
					temp = weatherData.temperature;
					$scope.condition = weatherData.condition;
					// Hide Loading Bar and show Data
					$scope.loading = false;
					$scope.showData = true;
				} else {
					// Failure
					$scope.error = true;
					$scope.loading = false;
					$scope.showData = false;
				}
			}, function(){
				// Failure
				$scope.error = true;
				$scope.loading = false;
				$scope.showData = false;
			});
		}

	$scope.changeUnit = function(unit){

		if (unit === $scope.tempUnit) {
			return;
		}
		if (unit === "F") {

				$scope.temperature = temp;
		} else if (unit == "C") {
			var tempCelcius = (temp - 32) * 0.555555555;
			tempCelcius = Math.round(tempCelcius);
			$scope.temperature = tempCelcius;
		}
		$scope.tempUnit = unit
	}





});