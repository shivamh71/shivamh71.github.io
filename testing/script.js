// Angular JS code
var app = angular.module("urlShortener",[]);
app.controller("appController",function($scope,$http){
    $scope.shortUrl = "";
    $scope.longUrl = "";
    $scope.getOriginalUrl = function(){
        console.log("here");
        var request = gapi.client.urlshortener.url.get({
            "shortUrl" : $scope.shortUrl
        });
        request.then(function(response){
            $scope.longUrl = response.result.longUrl;
        },function(response){
            console.log("Error occured!");
        });
    }
});

function init(){
    gapi.client.setApiKey("AIzaSyDGosRUWhEismSud3vuCx-rT1DcRD7AmTQ");
    gapi.client.load("urlshortener","v1").then(function(){});
}
