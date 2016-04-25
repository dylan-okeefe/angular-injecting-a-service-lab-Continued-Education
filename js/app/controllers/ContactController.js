function ContactController($scope, $timeout) {
	$scope.name = 'Dylan O\'Keefe';

  $timeout(function () {
    $scope.name = 'Dylan O\'Keefe III';
  }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);