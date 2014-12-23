module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'js/vendor/angular.js',
      'js/vendor/angular-route.js',
      'js/vendor/angular-mocks.js',
      'js/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};