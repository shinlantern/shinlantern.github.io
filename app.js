(function(){                                                                     
    var app = angular.module('myPortfolioApp', [])
                     .run(run);

                     run.$inject = ['$rootScope'];
                     function run($rootScope) {
                         $rootScope.ProjectTitle = "Lantern Portfolio";
                         $rootScope.OwnerInformation = "test";
                     }
})();  