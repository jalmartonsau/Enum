angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (cordova.platformId === 'ios' && window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }

        // On load




  });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('loading', {
        url: '/loading',
        templateUrl: 'page/loading.html'
    })


  // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/loading');
});
