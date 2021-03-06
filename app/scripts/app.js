 /* global app:true */
/* exported app */

'use strict';

/**
 * @ngdoc overview
 * @name debateMateApp
 * @description
 * # debateMateApp
 *
 * Main module of the application.
 */

var app = angular
  .module('debateMateApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
  templateUrl: 'views/posts.html',
  controller: 'PostsCtrl'
      })
      .when('/posts/:postId', {
  templateUrl: 'views/comments.html',
  controller: 'CommentsCtrl'
      })
      .when('/register', {
  templateUrl: 'views/register.html',
  controller: 'AuthCtrl',
  resolve: {
    user: function(Auth) {
      return Auth.resolveUser();
       }
      }
      })
     .when('/login', {
  templateUrl: 'views/login.html',
  controller: 'AuthCtrl',
  resolve: {
    user: function(Auth) {
      return Auth.resolveUser();
    }
  }
})
    .when('/users/:userId', {
  templateUrl: 'views/profile.html',
  controller: 'ProfileCtrl'
})
      .otherwise({
        redirectTo: '/'
      });
  });
app.constant('FIREBASE_URL', 'https://glowing-inferno-7389.firebaseIO.com');