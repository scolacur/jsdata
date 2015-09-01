'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('post', {
		url: '/post/:postId',
		templateUrl: 'js/post/post.html',
		controller: 'PostCtrl',
		resolve: {
			users: function(User, $stateParams){
				console.log('postId: ', $stateParams.postId)
				// GET - > '/api/users'
				return User.findAll();
			},
			post: function(Post, $stateParams){
				// GET - > '/api/users'
				return Post.find($stateParams.postId);
			}
		}
	});
});

// add necessary dependencies
app.controller('PostCtrl', function($scope, $stateParams, post) {

	$scope.id = $stateParams.postId;
	$scope.post = post;
	/* 1. FIND POST
		use state params to retrieve the post id and attach post object to scope
		on controller load

	*/
//Alternatively, yo can pass in Post, $state, and users and do this here rather
//than in the resolve function on line 14:

	// Post.find($stateParams.postId)
	// 	.then(function(post){
	// 		console.log('p: ', post);
	// 		$scope.thisPost = post;
	// 	});
	// });

	/*
		2. DELETE POST
		create a function that destroys the post, adds an alert that the post has been
		successfully deleted, and redirects to the main state.
	*/

	/*
		3. EDIT POST
		create a function that edits the post, adds an alert that the post has been
		successfully edited, and displays the edited post.

	*/

});
