function ContactController($scope, $timeout) {
	$scope.name = 'Dee';

  $timeout(function(){
    $scope.name = "Deniz"
  }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);