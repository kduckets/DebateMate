'use strict';

app.controller('CommentsCtrl', function ($scope, $routeParams, Post, Auth) {
  $scope.post = Post.get($routeParams.postId);
  $scope.commentsA = Post.commentsA($routeParams.postId);
  $scope.commentsB = Post.commentsB($routeParams.postId);

  $scope.user = Auth.user;
  $scope.signedIn = Auth.signedIn;
  $scope.view_tab = 'null';

  $scope.changeTab = function(tab) {
    $scope.view_tab = tab;
}

  $scope.addCommentA = function () {
    if(!$scope.commentText || $scope.commentText === '') {
      return;
    }

    var comment = {
      text: $scope.commentText,
      creator: $scope.user.profile.username,
      creatorUID: $scope.user.uid
    };
    $scope.commentsA.$add(comment);

    $scope.commentText = '';
  };

  $scope.addCommentB = function () {
    if(!$scope.commentText || $scope.commentText === '') {
      return;
    }

    var comment = {
      text: $scope.commentText,
      creator: $scope.user.profile.username,
      creatorUID: $scope.user.uid
    };
    $scope.commentsB.$add(comment);

    $scope.commentText = '';
  };

  $scope.deleteCommentA = function (comment) {
  $scope.commentsA.$remove(comment);
};

  $scope.deleteCommentB = function (comment) {
  $scope.commentsB.$remove(comment);
};

});