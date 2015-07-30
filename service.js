app.service('mainService', function($http, $q){
	//not related to starwars. passing data to controller
	var people = [
		{name: 'Justin', cool: true},
		{name: 'Andy', cool: false}
	]
	this.getPeople = function(){
		return people;
	}

	//beginning of starwars api calls. calls the different people
	this.getStarWarsPoeple = function(){
		var dfd = $q.defer()

		$http({
			method: 'GET', 
			url: 'http://swapi.co/api/people'
		}).then(function(data){
			data = data.data.results;
			dfd.resolve(data) // could also write data.data.results inside resolve
		})
		return dfd.promise;
	}
	//calls different planets with the url that you pass in
	this.getPlanet = function(url){
		var dfd = $q.defer()

		$http({
			method: 'GET', 
			url: url
		}).then(function(data){
			dfd.resolve(data.data)
		})
		return dfd.promise;
	}

})