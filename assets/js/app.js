angular.module('todolist', ['ngResource'])

.controller('TodoController', function($scope, $http){

	$scope.todos = [];
	var uri = 'http://apitodolist.herokuapp.com/api/todos';

	$scope.init = function(){
		$http.get(uri).success(function(response){
			$scope.todos = response;
		});
		if($scope.todos === null){
			$scope.todos = [];
		}
	}

	$scope.add = function(){
		var todo = {task: $scope.todo.task, doing: false, done: false};
		$http.post(uri, todo);
		$scope.todos.push(todo);
		$scope.todo.task = '';
	}

	$scope.remove = function(index){
		var todo = $scope.todos[index];
		$http.delete(uri + '/' + todo._id);
		$scope.todos.splice(index, 1);
	}

	$scope.done = function(index){
		var todo = $scope.todos[index];
		todo.done = true;
		$http.put(uri + '/' + todo._id, todo);
	}

	$scope.doing = function(index){
		var todo = $scope.todos[index];
		todo.doing = true;
		$http.put(uri + '/' + todo._id, todo);
	}

});