(function( angular ){
	//主要模块
	var mainModule = angular.module('moviecat', [
		'ngRoute',
		'moviecat.movie_list',
		'moviecat.directives.auto-focus'
	]);
	mainModule.config(['$routeProvider',function($routeProvider) {
		$routeProvider.otherwise({redirectTo:'/in_theaters/1'})
	}])
})(angular)
