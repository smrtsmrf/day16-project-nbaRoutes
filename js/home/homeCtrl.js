var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function ($scope, homeService) {
	$scope.teams = [
		{team: 'Los Angeles Lakers', logo: 'images/lakers-logo.png'},
    		{team: 'Utah Jazz', logo: 'images/lakers-logo.png'},
    		{team: 'Miami Heat', logo: 'images/heat-logo.png'}
  	]

  	$scope.allTeamData = homeService.getAllTeamData();
});
