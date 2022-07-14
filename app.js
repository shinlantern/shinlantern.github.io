(function () {
  var app = angular
    .module("myPortfolioApp", [])
    .controller("HomeController", HomeController)
    .controller("ProjectPagesController", ProjectPagesController)
    .run(run);

  HomeController.$inject = ["$rootScope", "$scope", "$timeout"];
  function HomeController($rootScope, $scope, $timeout) {
    $scope.IsHideWelcomeNote = true;
    $scope.showBlurBg = false;
    $timeout(function () {
      $scope.IsHideWelcomeNote = false;
      $scope.showBlurBg = true;
    }, 4000);
  }

  ProjectPagesController.$inject = ["$rootScope", "$scope", "$compile"];
  function ProjectPagesController($rootScope, $scope, $compile) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const page_name = urlParams.get("page_name");

    $scope.ProjectDatas = $rootScope.Projects.find((obj) => {
      let pt = "";
      switch (page_name) {
        case "AdoboCloudCRMPage":
          pt = "Adobo Cloud CRM";
          break;
        case "AdoboClientPage":
          pt = "Adobo Client";
          break;
        case "AdoboClientExpressPage":
          pt = "Adobo Client Express";
          break;
        case "BopisPage":
          pt = "Bopis Inventory";
          break;
        case "CansiInventoryPage":
          pt = "Cansi Inventory";
          break;
        case "PadecoInquiryPage":
          pt = "Padeco Inquiry";
          break;
        case "Pelco3PPPage":
          pt = "Pelco 3 Payment Center";
          break;
      }

      return obj.PageTitle === pt;
    });

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
      Mobile: "+639996821630",
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
            { Name: "Asp.Net (MVC)", YearMonths: "3 years +" },
            { Name: "Web API", YearMonths: "3 years +" },
            { Name: "HTML", YearMonths: "3 years +" },
            { Name: "CSS/SASS", YearMonths: "3 years +" },
            { Name: "Jquery", YearMonths: "3 years +" },
            { Name: "AngularJS", YearMonths: "" },
            { Name: "ReactJS", YearMonths: "" },
            { Name: "WordPress", YearMonths: "4 month" },
          ],
        },
        {
          Language: [
            { Name: "C#", YearMonths: "3 years +" },
            { Name: "Java", YearMonths: "In school" },
            { Name: "Javascript", YearMonths: "3 years +" },
            { Name: "PHP", YearMonths: "In school" },
          ],
        },
        {
          SoftwareApplication: [
            { Name: "Visual Studio", YearMonths: "3 years +" },
            { Name: "Visual Code", YearMonths: "3 years +" },
            { Name: "Microsoft SQL Server", YearMonths: "3 years +" },
            { Name: "GitHub", YearMonths: "3 years +" },
            { Name: "VS SVN", YearMonths: "2 years" },
            { Name: "Microsoft Office Suite", YearMonths: "10" },
            { Name: "Adobo Photoshop", YearMonths: "10" },
          ],
        },
      ],
      Quote: [
        {
          Title: "Fastload",
          Desc: "Loads quickly to avoid user drop off",
        },
        {
          Title: "Dynamic",
          Desc: "No need to code, make it manageable. It doesn't have to be static",
        },
        {
          Title: "Intuitive",
          Desc: "Easy to use UI. UI doesn't have to be confusing",
        },
        {
          Title: "Responsive",
          Desc: "Beautiful on screens big or small",
        },
        {
          Title: "Clean Code",
          Desc: "Easy to read and maintainable code",
        },
      ],
    };

    $rootScope.Projects = [
      {
        PageTitle: "Adobo Cloud CRM",
        PageDetails:
          "This system is about customer relationship management. I was one of the developer using Asp.net MVC Framework, my task is to add new function based on user feedback, test bugs and maintain the system.\
        <br> Some functions are customer management, invoicing, payments, ticketing, job order, scheduling, customer location mapping, reports, sms via API and others.".split(
            "<br>"
          ),
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
            Info: "Subscriber mapping using google map API.",
          },
          {
            ImageSrc: "images/ProjectImages/AdoboCloud CRM/Screenshot_6.png",
            Info: "",
          },
        ],
        CreatedWith:
          "Asp.net Mvc 5, html, javascript, bootstrap 4, signalR, google map API and others",
        MainPageImageSrc: "images/crm_logo.jpg",
        MainPageDesc:
          "Customer Relation Management System, Accounting System, Ticketing and Job Order",
      },
      {
        PageTitle: "Adobo Client",
        PageDetails:
          'This system is related to my previous project "Adobo Cloud CRM".\
        It is basically the customers portal to view their respective\
        account information like invoices, data usage, tickets,\
        job orders and also to pay their respective bills.<br>\
        I was one of the developer who develop and maintains the system including adding various technology like the realtime payment gateways. Paypal, Paynamics and lastly Xendit are currently included.<br>\
        This system also provides APIs that are used by a mobile app.'.split(
            "<br>"
          ),
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
          "Asp.net Mvc 5, html, javascript, bootstrap 5, paypal API, paymaya API, paynamics API, xendit API, xemaphore API",
        MainPageImageSrc: "images/crm_client_logo.jpg",
        MainPageDesc:
          "Customer care portal system. In relation to Adobo Cloud CRM",
      },
      {
        PageTitle: "Adobo Client Express",
        PageDetails:
          "This system is also related to Adobo Cloud CRM. This focuses on processing realtime payments of the customer.<br>\
        I was the developer of this small web app and also maintain it. The technique that I used here are payment gateway API and sms API for sending payment confirmation.<br>\
        This system also provides APIs that are used by a mobile app.".split(
            "<br>"
          ),
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
          "Asp.net Mvc 5, html, javascript, bootstrap 5, paypal API, paymaya API, paynamics API, xendit API, xemaphore API",
        MainPageImageSrc: "images/crm_client_express_logo.jpg",
        MainPageDesc: "Online payment system in relation to Adobo Cloud CRM",
      },
      {
        PageTitle: "Bopis Inventory",
        PageDetails:
          "This system is also related to Adobo Cloud CRM. This focuses on processing realtime payments of the customer.<br>\
        I was the developer of this small web app and also maintain it. The technique that I used here are payment gateway API and sms API for sending payment confirmation".split(
            "<br>"
          ),
        Images: [
          {
            ImageSrc: "images/ProjectImages/Bopis/Screenshot_1.png",
            Info: "Landing page",
          },
          {
            ImageSrc: "images/ProjectImages/Bopis/Screenshot_2.png",
            Info: "Customer page.",
          },
          {
            ImageSrc: "images/ProjectImages/Bopis/Screenshot_3.png",
            Info: "Product page.",
          },
          {
            ImageSrc: "images/ProjectImages/Bopis/Screenshot_4.png",
            Info: "Stock in page.",
          },
          {
            ImageSrc: "images/ProjectImages/Bopis/Screenshot_5.png",
            Info: "Order page.",
          },
          {
            ImageSrc: "images/ProjectImages/Bopis/Screenshot_6.png",
            Info: "Invoice page.",
          },
        ],
        CreatedWith: "Asp.net Mvc 5, html, javascript, bootstrap 5",
        MainPageImageSrc: "images/pic03.jpg",
        MainPageDesc:
          "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam\
        turpis mauris, eu ultricies erat malesuada quis. Aliquam\
        dAPIbus.",
      },
      {
        PageTitle: "Cansi Inventory",
        PageDetails:
          "This system inludes inventory, warehousing, ordering, invoicing and payment system.<br>\
          I was the developer in this system using asp.net mvc".split(
            "<br>"
          ),
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
        MainPageImageSrc: "images/cansi_main_img.jpg",
        MainPageDesc:
          "Inventory/warehousing system with customer management,\
          accounting and ordering module.",
      },
      {
        PageTitle: "Padeco Inquiry",
        PageDetails:
          "This is just a simple single page project made for company inquiry and online application.<br>\
          I was one of the developer and then eventually turn over for other to maintain.".split(
            "<br>"
          ),
        Images: [
          {
            ImageSrc: "images/ProjectImages/Padeco Inquiry/Screenshot_1.png",
            Info: "",
          },
          {
            ImageSrc: "images/ProjectImages/Padeco Inquiry/Screenshot_2.png",
            Info: "",
          },
          {
            ImageSrc: "images/ProjectImages/Padeco Inquiry/Screenshot_3.png",
            Info: "",
          },
          {
            ImageSrc: "images/ProjectImages/Padeco Inquiry/Screenshot_4.png",
            Info: "",
          },
        ],
        CreatedWith: "Asp.net Mvc 5, html, javascript, bootstrap 5",
        MainPageImageSrc: "images/padeco_inquiry_logo.jpg",
        MainPageDesc: "Inquiry and subscription application system.",
      },
      {
        PageTitle: "Pelco 3 Payment Center",
        PageDetails:
          "This system is for managing payment partners and agent for collection of customer electric bill payment which is a separate mobile app.<br>\
          The features of this system are managing users, managing user load and commissions, dispute, reports and google mapping.<br>\
          Most of the module in this project was assigned to me, including the maintainance after deployment.<br>\
          This system also provides APIs that are used by a mobile app.".split(
            "<br>"
          ),
        Images: [
          {
            ImageSrc: "images/ProjectImages/Pelco3/Screenshot_1.png",
            Info: "Landing page",
          },
          {
            ImageSrc: "images/ProjectImages/Pelco3/Screenshot_2.jpg",
            Info: "User Dashboard.",
          },
          {
            ImageSrc: "images/ProjectImages/Pelco3/Screenshot_3.jpg",
            Info: "Partner page.",
          },
          {
            ImageSrc: "images/ProjectImages/Pelco3/Screenshot_4.jpg",
            Info: "Agent load page.",
          },
          {
            ImageSrc: "images/ProjectImages/Pelco3/Screenshot_5.jpg",
            Info: "Load details page.",
          },
          {
            ImageSrc: "images/ProjectImages/Pelco3/Screenshot_6.jpg",
            Info: "Agent details page.",
          },
          {
            ImageSrc: "images/ProjectImages/Pelco3/Screenshot_7.jpg",
            Info: "User access page.",
          },
        ],
        CreatedWith:
          "Asp.net Mvc 5, html, javascript, bootstrap 5, semaphore API",
        MainPageImageSrc: "images/pelco_3_logo.jpg",
        MainPageDesc:
          "Partner and agent managing system for billing collection.",
      },
    ];

    $rootScope.GetProjectImages = function (folderPath) {
      var folder = "images/projectimages/adoboclient";
      var imgPath_Arr = [];
      $.ajax({
        url: folder,
        success: function (data) {
          $(data)
            .find("a")
            .attr("href", function (i, val) {
              if (val.match(/\.(jpe?g|png|gif)$/)) {
                imgPath_Arr.push(val.substring(1));
              }
            });

          console.log(imgPath_Arr);
        },
      });
    };
  }
})();
