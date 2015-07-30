app.controller('mainCtrl', function($scope, mainService){
	//not rellevant to starwars, but showing how you can call data from service.
	$scope.people = mainService.getPeople();



	$scope.getStarWarsPoeple = function(){
		mainService.getStarWarsPoeple().then(function(data){
			console.log(data)
			$scope.planets = []
			$scope.starWarsPeople = data;


			//looping through starWarsPeople because planets require a api call every time. then we push the results onto a new array that we have already declared. 

			for (var i = 0; i < data.length; i++) { 
				mainService.getPlanet(data[i].homeworld).then(function(response){
					//pushing results back onto the array
					$scope.planets.push(response)
				})
			};
		})
	}() // () is automatically invoking the function. 




})