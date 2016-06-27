angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Remove accessory bar from the keyboard
        try {
            if (cordova.platformId === 'ios' && window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        } catch (ex) {
            console.log(ex);
        }


  });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        // Loading screen
    .state('loading', {
        url: '/loading',
        templateUrl: 'page/loading.html',
        controller: 'LoadingCtrl'
    })
        // Login page
    .state('signin', {
        url: '/signin',
        templateUrl: 'page/signin.html',
        controller: 'SigninCtrl'
    })


    // Fallback
    $urlRouterProvider.otherwise('/loading');
});
