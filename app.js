(function(){                                                                     
    var app = angular.module('myPortfolioApp', [])
                     .run(run);

                     run.$inject = ['$rootScope'];
                     function run($rootScope) {
                         $rootScope.ProjectTitle = "Lantern Portfolio";
                         $rootScope.OwnerInfo = {
                            "FirstName": "Allan",
                            "LastName": "Ternola",
                            "Gender":"Male",
                            "Location":"Baguio City Philippines",
                            "Email":"allan.a.ternola@gmail.com",
                            "EducationInfo": [
                                {"SchoolName":"University of Baguio", "Date":"June 2013 - May 2018", "Course": "Bachelor of Science in Information Technology Major in Software Development"}
                            ],
                            "Experiences":[
                                {"":""}
                            ]
                         };

                         console.log($rootScope.OwnerInfo);
                     }
})();  