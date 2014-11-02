angular.module('todolist', [])

.controller('TodoController', function($scope){

	$scope.todos = [];
	var localStorage = window.localStorage;

	$scope.init = function(){
		$scope.todos = angular.fromJson(localStorage.getItem('todos'));
		if($scope.todos === null){
			$scope.todos = [];
		}
	}

	$scope.add = function(){
		$scope.todos.push({task: $scope.todo.task, done: false});
		localStorage.setItem('todos', angular.toJson($scope.todos));
		$scope.todo.task = '';
	}

	$scope.remove = function(index){
		console.log(index);
		$scope.todos.splice(index, 1);
		localStorage.setItem('todos', angular.toJson($scope.todos));
	}

	$scope.done = function(index){
		var dones = angular.fromJson(localStorage.getItem('dones'));
		if(dones === null){
			dones = [];
		}
		todo = $scope.todos[index];
		todo.done = true;
		dones.push(todo);
		localStorage.setItem('dones', angular.toJson(dones));
		$scope.remove(index);
	}

});