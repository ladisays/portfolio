var portfolio = angular.module('portfolio', []);

portfolio.controller('ReposCtrl', function($scope) {
  $scope.repos = [
    {'name' : 'Calculator',
     'language' : 'Javascript',
     'html_url' : 'https://github.com/andela-ladenusi/calculator',
     'live_view_url': 'http://andela-ladenusi.github.io/calculator'},

    {'name' : 'GoogleClone',
     'language' : 'Javascript',
     'html_url' : 'https://github.com/andela-ladenusi/GoogleClone',
     'live_view_url': 'http://andela-ladenusi.github.io/GoogleClone'},

    {'name' : 'HuckleBuckle',
     'language' : 'Javascript',
     'html_url' : 'https://github.com/andela-ladenusi/HuckleBuckle',
     'live_view_url': 'http://andela-ladenusi.github.io/HuckleBuckle'},

    {'name' : 'jobseeker',
     'language' : 'Javascript',
     'html_url' : 'https://github.com/andela-ladenusi/jobseeker',
     'live_view_url': 'http://andela-ladenusi.github.io/jobseeker'},

    {'name' : 'ShoppingList',
     'language' : 'Javascript',
     'html_url' : 'https://github.com/andela-ladenusi/ShoppingList',
     'live_view_url': 'http://andela-ladenusi.github.io/ShoppingList'},

    {'name' : 'TimeOColor',
     'language' : 'Javascript',
     'html_url' : 'https://github.com/andela-ladenusi/TimeOColor',
     'live_view_url': 'http://andela-ladenusi.github.io/TimeOColor'},

    {'name' : 'weatherForecast',
     'language' : 'Javascript',
     'html_url' : 'https://github.com/andela-ladenusi/weatherForecast',
     'live_view_url': 'http://andela-ladenusi.github.io/weatherForecast'}
  ];

});