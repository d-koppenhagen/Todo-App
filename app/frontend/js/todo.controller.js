/* Startpage view controller */
(function(){
    "use strict";
	angular
		.module('todo')
        .controller('todoCtrl', ['$scope','$http',
            function($scope, $http) {

                getTodos();
                function getTodos() {
                    $http.get('/todo')
                        .success(function(data){
                          console.log("received Data from API: ", data);
                          $scope.items = data;
                        })
                        .error(function(data, status, headers, config) {
                        console.log("Error by getting data", data, status, headers, config);
                    });
                }

        }]);
}());
