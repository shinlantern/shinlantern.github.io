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
        page_description =
          "This system is about customer relationship management. I was one of the developer in this project and my task is to add new function, test bugs and maintain the system.\
          <br> Some function of are customer management, invoicing, payments, ticketing, job order, scheduling, customer location mapping, reports, sms via api and others.";

        $scope.ProjectActivePageDatas = {
          PageTitle: "Adobo Cloud CRM",
          PageDetails: page_description.split("<br>"),
          Images: [
            {
              ImageSrc: "images/ProjectImages/AdoboCloud CRM/Screenshot_1.jpg",
              Info: "Landing page",
            },
            {
              ImageSrc: "images/ProjectImages/AdoboCloud CRM/Screenshot_2.png",
              Info: "List of companies that uses our system.",
            },
            {
              ImageSrc: "images/ProjectImages/AdoboCloud CRM/Screenshot_3.png",
              Info: "Authenticated user dashboard page.",
            },
            {
              ImageSrc: "images/ProjectImages/AdoboCloud CRM/Screenshot_4.png",
              Info: "Subscriber details page.",
            },
            {
              ImageSrc: "images/ProjectImages/AdoboCloud CRM/Screenshot_5.png",
              Info: "Subscriber mapping using google map api.",
            },
            {
              ImageSrc: "images/ProjectImages/AdoboCloud CRM/Screenshot_6.png",
              Info: "",
            },
          ],
          CreatedWith:
            "Asp.net Mvc 5, html, javascript, bootstrap 4, signalR, google map api and others",
        };
        break;
      case "AdoboClientPage":
        page_description =
          'This system is related to my previous project "Adobo Cloud CRM".\
          It is basically the customers portal to view their respective\
          account information like invoices, data usage, tickets,\
          job orders and also to pay their respective bills.\
          <br>I was one of the developer who develop and maintains the system including adding various technology like the realtime payment gateways. Paypal, Paynamics and lastly Xendit are currently included';

        $scope.ProjectActivePageDatas = {
          PageTitle: "Adobo Client",
          PageDetails: page_description.split("<br>"),
          Images: [
            {
              ImageSrc: "images/ProjectImages/AdoboClient/Screenshot_1.png",
              Info: "Landing page",
            },
            {
              ImageSrc: "images/ProjectImages/AdoboClient/Screenshot_2.png",
              Info: "Authenticated user dashboard/home page.",
            },
            {
              ImageSrc: "images/ProjectImages/AdoboClient/Screenshot_3.png",
              Info: "User account profile.",
            },
            {
              ImageSrc: "images/ProjectImages/AdoboClient/Screenshot_4.png",
              Info: "User tickets",
            },
            {
              ImageSrc: "images/ProjectImages/AdoboClient/Screenshot_5.png",
              Info: "User account details, invoice details and payment details.",
            },
            {
              ImageSrc: "images/ProjectImages/AdoboClient/Screenshot_6.png",
              Info: "Payment details.",
            },
          ],
          CreatedWith:
            "Asp.net Mvc 5, html, javascript, bootstrap 5, paypal api, paymaya api, paynamics api, xendit api, xemaphore api",
        };
        break;
      case "AdoboClientExpressPage":
        page_description =
          "This system is also related to Adobo Cloud CRM. This focuses on processing realtime payments of the customer.<br>\
          I was the developer of this small web app and also maintain it. The technique that I used here are payment gateway api and sms api for sending payment confirmation";

        $scope.ProjectActivePageDatas = {
          PageTitle: "Adobo Client Express",
          PageDetails: page_description.split("<br>"),
          Images: [
            {
              ImageSrc:
                "images/ProjectImages/AdoboClient Express/Screenshot_1.png",
              Info: "Landing page",
            },
            {
              ImageSrc:
                "images/ProjectImages/AdoboClient Express/Screenshot_2.png",
              Info: "Account verification.",
            },
            {
              ImageSrc:
                "images/ProjectImages/AdoboClient Express/Screenshot_3.png",
              Info: "Invoice list.",
            },
            {
              ImageSrc:
                "images/ProjectImages/AdoboClient Express/Screenshot_4.png",
              Info: "Invoice selection.",
            },
            {
              ImageSrc:
                "images/ProjectImages/AdoboClient Express/Screenshot_5.png",
              Info: "Payment gateway selections.",
            },
            {
              ImageSrc:
                "images/ProjectImages/AdoboClient Express/Screenshot_6.png",
              Info: "Payment Processing.",
            },
          ],
          CreatedWith:
            "Asp.net Mvc 5, html, javascript, bootstrap 5, paypal api, paymaya api, paynamics api, xendit api, xemaphore api",
        };
        break;
      case "BopisPage":
        break;
      case "CansiInventoryPage":
        page_description =
          "This system is also related to Adobo Cloud CRM. This focuses on processing realtime payments of the customer.<br>\
          I was the developer of this small web app and also maintain it. The technique that I used here are payment gateway api and sms api for sending payment confirmation";

        $scope.ProjectActivePageDatas = {
          PageTitle: "Cansi Inventory",
          PageDetails: page_description.split("<br>"),
          Images: [
            {
              ImageSrc: "images/ProjectImages/Cansi Inventory/Screenshot_1.png",
              Info: "Landing page",
            },
            {
              ImageSrc: "images/ProjectImages/Cansi Inventory/Screenshot_2.png",
              Info: "Customer page.",
            },
            {
              ImageSrc: "images/ProjectImages/Cansi Inventory/Screenshot_3.png",
              Info: "Product page.",
            },
            {
              ImageSrc: "images/ProjectImages/Cansi Inventory/Screenshot_4.png",
              Info: "Stock in page.",
            },
            {
              ImageSrc: "images/ProjectImages/Cansi Inventory/Screenshot_5.png",
              Info: "Order page.",
            },
            {
              ImageSrc: "images/ProjectImages/Cansi Inventory/Screenshot_6.png",
              Info: "Invoice page.",
            },
          ],
          CreatedWith: "Asp.net Mvc 5, html, javascript, bootstrap 5",
        };
        break;
      case "PadecoInquiryPage":
        break;
      case "Pelco3PPPage":
        break;
    }

    let slideIndex = 1;
    $scope.showSlides = function (n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    };

    // Next/previous controls
    $scope.plusSlides = function (n) {
      $scope.showSlides((slideIndex += n));
    };

    // Thumbnail image controls
    $scope.currentSlide = function (n) {
      $scope.showSlides((slideIndex = n));
    };

    $(function () {
      $scope.showSlides(slideIndex);
    });
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
