(function(){

    var app = angular.module('app',[]);

    app.controller('appCtrl',function($scope){
         $scope.title = 'Surveys 3.0';
    });

    app.controller('surveysCtrl',function($scope){
         $scope.surveys = [{'name':'a'},{'name':'b'}];
         $scope.addSurvey = function(){
           $scope.surveys.push({name: $scope.surveyName});
           $scope.surveyName = "";
         }
    });

})();
