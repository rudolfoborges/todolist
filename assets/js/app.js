angular.module('todolist', [])

.controller('TodoController', function($scope){

	$scope.todos = [];

	$scope.init = function(){
		$scope.todos = angular.fromJson(window.localStorage.getItem('todos'));
		if($scope.todos === null){
			$scope.todos = [];
		}
	}

	$scope.add = function(){
		$scope.todos.push({task: $scope.todo.task, done: false});
		window.localStorage.setItem('todos', angular.toJson($scope.todos));
		$scope.todo.task = '';
	}

	$scope.remove = function(index){
		console.log(index);
		$scope.todos.splice(index, 1);
		window.localStorage.setItem('todos', angular.toJson($scope.todos));
	}

	$scope.done = function(index){
		var todo = $scope.todos[index];
		todo.done = true;
		window.localStorage.setItem('todos', angular.toJson(todos));
	}

});