app.config(function ($stateProvider) {

    $stateProvider.state('thankYou', {
        url: '/thankYou',
        templateUrl: 'js/thankYou/thankYou.html',
        controller: 'thankYouCtrl'
    });

});

// main controller
app.controller('thankYouCtrl', function ($scope, $state) {
	
});
