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
    .when('/faqs',{templateUrl: 'Views/Faqs.html'})
    .otherwise({redirectTo: '/home'});
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

let d;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    d = new Date();
    date = d.toLocaleDateString(undefined, options);
    time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    document.getElementById('currentTime').innerHTML = time + " on " + date ;
}, 1);
