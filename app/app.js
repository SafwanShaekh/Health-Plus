let myApp = angular.module('MyAngularApp',['ngRoute']);
myApp.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/home',{templateUrl: 'Views/Home.html'})
    .when('/about',{templateUrl: 'Views/About.html'})
    .when('/test',{templateUrl: 'Views/test.html', controller: 'MyAngularController'})    
    .when('/appointments',{templateUrl: 'Views/Appointments.html', controller: 'MyAppointmentController'})
    .when('/dosage-schedules',{templateUrl: 'Views/Dosage-Schedules.html', controller: 'MyDosageController'})
    .when('/health-vitals',{templateUrl: 'Views/Health-Vitals.html'})
    .when('/self-health-tips',{templateUrl: 'Views/Self-Health-Tips.html'})
    .when('/health-measures',{templateUrl: 'Views/Health-Measures.html'})
    .when('/feedback',{templateUrl: 'Views/Feedback.html'})
    .when('/contact',{templateUrl: 'Views/Contact.html'})
    .otherwise({redirectTo: '/home'});
}]);

myApp.controller('MyAngularController', ['$scope','$http',function($scope,$http){

    $scope.removeStd =  function(std){
        let removeStd = $scope.students.indexOf(std);
        $scope.students.splice(removeStd,1);
    };
    $scope.addStd = function(){
        $scope.students.push({
            name:$scope.newStd.Name,
            marks:parseInt($scope.newStd.Marks),
            sal:parseInt($scope.newStd.Sal),
            p:true
        });
        $scope.newStd.Name="";
        $scope.newStd.Marks="";
        $scope.newStd.Sal="";

    };        
    
    
    $http.get('data/students.json').success(function(stdData){
        $scope.students = stdData;
    });

    // $http.get('data/appointments.json').success(function(appointData){
    //     $scope.students = appointData;
    // });


}]);

myApp.controller('MyAppointmentController', ['$scope','$http',function($scope,$http){
    
    $http.get('data/appointments.json').success(function(appointData){
        $scope.appointments = appointData;
    });
}]);

myApp.controller('MyDosageController', ['$scope','$http',function($scope,$http){
    
    $http.get('data/dosage.json').success(function(dosageData){
        $scope.dosages = dosageData;
    });

}]);