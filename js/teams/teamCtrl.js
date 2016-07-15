var app = angular.module('nbaRoutes');
// the resolved data from the router needs to be injected into the controller
app.controller('teamCtrl', function ($scope, $stateParams, teamService, teamData) {
	$scope.teamData = teamData;

	$scope.newGame = {};

	$scope.showNewGameForm = false;

	$scope.toggleNewGameForm = function () {
		 $scope.showNewGameForm = !$scope.showNewGameForm;
	}

	var team = $stateParams.team;

	switch (team) {
		case 'utahjazz':
			$scope.homeTeam = 'Utah Jazz';
			$scop.logoPath = 'images/jazz-logo.png'
			break;
		case 'losangeleslakers':
			$scope.homeTeam = 'Los Angeles Lakers';
			$scop.logoPath = 'images/lakers-logo.png'
			break;
			case 'miamiheat':
			$scope.homeTeam = 'Miami Heat';
			$scop.logoPath = 'images/heat-logo.png'
			break;	
		default:
			// statements_def
			break;
	}

	$scope.submitGame = function () {
		$scope.newGame.homeTeam = $scope.homeTeam.split(' ').join('').toLowerCase();
		teamService.addNewGame($scope.newGame)
			.then(function () {
				teamService.getTeamData($scope.newGame.homeTeam)
					.then(function (data) {
						$scope.teamData = data;
						$scope.newGame = {};
						$scope.showNewGameForm = false;
					})
			})
	}
	
});
