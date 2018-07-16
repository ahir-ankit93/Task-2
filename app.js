let app= angular.module("myApp",[]);


app.controller ("myAppCtrl",function($scope,$http){
    
    $http.get("https://jsonplaceholder.typicode.com/posts").then(function(item){
    // $http.get("data.json").then(function(item){
        $scope.posts=item.data;
    })

})
