(function () {
  var app = angular
    .module("myPortfolioApp", [])
    .controller("HomeController", HomeController)
    .controller("ProjectPagesController", ProjectPagesController)
    .run(run);

  HomeController.$inject = ["$rootScope", "$scope"];
  function HomeController($rootScope, $scope) {}

  ProjectPagesController.$inject = ["$rootScope", "$scope", "$compile"];
  function ProjectPagesController($rootScope, $scope, $compile) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const page_name = urlParams.get("page_name");
    var page_description;

    switch (page_name) {
      case "AdoboCloudCRMPage":
        page_description = "<p>Lorem impsum etc etc<p>";

        $scope.ProjectActivePageDatas = {
          PageTitle: "Adobo Cloud CRM",
          PageDetails: angular.element(page_description).html(),
          Images: [
            {
              ImageSrc: "images/ProjectImages/AdoboCloud CRM/Screenshot_1.jpg",
              Info: "",
            },
            {
              ImageSrc: "images/ProjectImages/AdoboCloud CRM/Screenshot_2.png",
              Info: "",
            },
            {
              ImageSrc: "images/ProjectImages/AdoboCloud CRM/Screenshot_3.png",
              Info: "",
            },
            {
              ImageSrc: "images/ProjectImages/AdoboCloud CRM/Screenshot_4.png",
              Info: "",
            },
            {
              ImageSrc: "images/ProjectImages/AdoboCloud CRM/Screenshot_5.png",
              Info: "",
            },
            {
              ImageSrc: "images/ProjectImages/AdoboCloud CRM/Screenshot_6.png",
              Info: "",
            },
          ],
        };

        break;
      case "AdoboClientPage":
        page_description =
          "<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique.</p>";

        $scope.ProjectActivePageDatas = {
          PageTitle: "Adobo Client",
          PageDetails: angular.element(page_description).html(),
          Images: [
            {
              ImageSrc: "images/ProjectImages/AdoboClient/Screenshot_1.png",
              Info: "",
            },
            {
              ImageSrc: "images/ProjectImages/AdoboClient/Screenshot_2.png",
              Info: "",
            },
            {
              ImageSrc: "images/ProjectImages/AdoboClient/Screenshot_3.png",
              Info: "",
            },
            {
              ImageSrc: "images/ProjectImages/AdoboClient/Screenshot_4.png",
              Info: "",
            },
            {
              ImageSrc: "images/ProjectImages/AdoboClient/Screenshot_5.png",
              Info: "",
            },
            {
              ImageSrc: "images/ProjectImages/AdoboClient/Screenshot_6.png",
              Info: "",
            },
          ],
        };
        break;
    }

    var html = "",
      el = document.getElementById("slideshowDiv");

    var log = [];
    angular.forEach(
      $scope.ProjectActivePageDatas.Images,
      function (value, key) {
        var tempHtml =
          '<div>\
               <div class="mySlides fade">\
                   <div class="numbertext">' +
          key +
          1 +
          " / " +
          $scope.ProjectActivePageDatas.Images.length +
          "</div>\
                   <img src=" +
          value.ImageSrc +
          ' style="width:100%">\
                   <div class="text">' +
          value.Info +
          "</div>\
               </div>\
           </div>";

        html += tempHtml;
        //this.push(key + ": " + value);
      },
      log
    );

    //console.log(log);

    //$scope.value = "mk";

    //angular.element(el).append($compile(html)($scope));

    //console.log(html);

    // $scope.selectedValue = function (value) {
    //   $scope.val = value;
    //   console.log($scope.val);
    // };
  }

  run.$inject = ["$rootScope"];
  function run($rootScope) {
    $rootScope.ProjectTitle = "Lantern Portfolio";

    $rootScope.OwnerInfo = {
      FirstName: "Allan",
      LastName: "Ternola",
      Gender: "Male",
      Location: "Baguio City Philippines",
      Email: "allan.a.ternola@gmail.com",
      EducationInfo: [
        {
          Id: "1",
          SchoolName: "University of Baguio",
          Date: "June 2013 - May 2018",
          Course:
            "Bachelor of Science in Information Technology Major in Software Development",
          Address: "",
        },
        {
          Id: "0",
          SchoolName: "Datamex Computer Collage",
          Date: "June 2005 - March 2007",
          Course: "Certificate in Two-year Computer Hardware Technology",
          Address: "",
        },
      ],
      Experiences: [
        {
          Id: "0",
          CompanyName: "",
          Date: "",
          JobDescription: "",
        },
      ],
      SoftwareDevelopment: [
        {
          WebDevelopment: [
            { Name: "Asp.net (MVC)", Level: "10" },
            { Name: "Web Api", Level: "10" },
            { Name: "HTML 5", Level: "10" },
            { Name: "CSS3", Level: "10" },
            { Name: "Jquery", Level: "10" },
            { Name: "WordPress", Level: "10" },
          ],
        },
        {
          Language: [
            { Name: "C#", Level: "10" },
            { Name: "Java", Level: "10" },
            { Name: "Javascript", Level: "10" },
            { Name: "PHP", Level: "10" },
          ],
        },
        {
          SoftwareApplication: [
            { Name: "Visual Studio", Level: "10" },
            { Name: "Visual Code", Level: "10" },
            { Name: "Microsoft SQL Server", Level: "10" },
            { Name: "GitHub", Level: "10" },
            { Name: "VS SVN", Level: "10" },
            { Name: "Microsoft Office Suite", Level: "10" },
            { Name: "Adobo Photoshop", Level: "10" },
          ],
        },
      ],
    };

    //  console.log($rootScope.OwnerInfo);
  }
})();
