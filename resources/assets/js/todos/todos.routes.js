(function() {
	'use strict';

	angular
		.module('app')
		.config(config);
	
	
	config.injector = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('todos', {
				url: '/todos',
				templateUrl: 'templates/todos/index.html',
				controller: 'TodosController',
				controllerAs: 'todos' 
			});

		$stateProvider
			.state('todosNew', {
				url: '/todos/new',
				templateUrl: 'templates/todos/new.html',
				controller: 'TodosController',
				controllerAs: 'todos' 
			});
	}

})(); 

