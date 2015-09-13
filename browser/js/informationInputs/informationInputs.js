app.config(function ($stateProvider) {

    $stateProvider.state('input', {
        url: '/input',
        templateUrl: 'js/informationInputs/informationInputs.html',
        controller: 'infoCtrl'
    });

});

// main controller passing input info to the factory
app.controller('infoCtrl', function ($scope, inputFactory, $state) {
	$scope.sendInfo = function (userInfo) {
		console.log('userInfo in controller', userInfo)
		inputFactory.send(userInfo)
		.then(function () {
			console.log('hit it to new state')
			$state.go('thankYou')
		})
	}
});



// factory to send calls to back-end with input info
app.factory('inputFactory', function($http) {
  return {
    send: function(message) {
    	console.log('userInfo in factory', message)
      return $http.post('/api/messages/sendMail', message)
        .then(function(res) {
        	console.log('res after came back from server', res)
          return res.data
        })
    }
  }
})