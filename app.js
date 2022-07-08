(function(){                                                                     
    var app = angular.module('myPortfolioApp', [])
                     .controller('HomeController', HomeController)
                     .controller('ProjectPagesController', ProjectPagesController)
                     .run(run);

                     HomeController.$inject = ['$rootScope', '$scope'];
                     function HomeController($rootScope, $scope) {
                 
                     }
                 
                     ProjectPagesController.$inject = ['$rootScope', '$scope'];
                     function ProjectPagesController($rootScope, $scope) {
                        const queryString = window.location.search;
                        const urlParams = new URLSearchParams(queryString);
                        const page_name = urlParams.get('page_name')
                        var page_description;

                         switch(page_name){
                            case "AdoboCloudCRMPage":
                                page_description = "<p>Lorem impsum etc etc<p>";

                                $scope.ProjectActivePageDatas = {
                                    PageTitle: "Adobo Cloud CRM",
                                    PageDetails: angular.element(page_description).html(),
                                    Images:[
                                        {ImageSrc:"images/ProjectImages/AdoboCloud CRM/Screenshot_1.jpg", Info:""},
                                        {ImageSrc:"images/ProjectImages/AdoboCloud CRM/Screenshot_2.png", Info:""},
                                        {ImageSrc:"images/ProjectImages/AdoboCloud CRM/Screenshot_3.png", Info:""},
                                        {ImageSrc:"images/ProjectImages/AdoboCloud CRM/Screenshot_4.png", Info:""},
                                        {ImageSrc:"images/ProjectImages/AdoboCloud CRM/Screenshot_5.png", Info:""},
                                        {ImageSrc:"images/ProjectImages/AdoboCloud CRM/Screenshot_6.png", Info:""}
                                    ]
                                 };
                                break;
                            case "AdoboClientPage":
                                page_description = "<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique.</p>";

                                $scope.ProjectActivePageDatas = {
                                    PageTitle: "Adobo Client",
                                    PageDetails: angular.element(page_description).html(),
                                    Images:[
                                        {ImageSrc:"images/ProjectImages/AdoboClient/Screenshot_1.png", Info:""},
                                        {ImageSrc:"images/ProjectImages/AdoboClient/Screenshot_2.png", Info:""},
                                        {ImageSrc:"images/ProjectImages/AdoboClient/Screenshot_3.png", Info:""},
                                        {ImageSrc:"images/ProjectImages/AdoboClient/Screenshot_4.png", Info:""},
                                        {ImageSrc:"images/ProjectImages/AdoboClient/Screenshot_5.png", Info:""},
                                        {ImageSrc:"images/ProjectImages/AdoboClient/Screenshot_6.png", Info:""}
                                    ]
                                 };
                                break;
                         }



                         
                     }

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

                        //  console.log($rootScope.OwnerInfo);
                     }
})();  