"use strict";angular.module("projectApp",["ui.router","ngAnimate","angulartics","angulartics.google.analytics"]).config(["$analyticsProvider",function(e){e.virtualPageviews(!1)}]).config(["$stateProvider","$urlRouterProvider",function(e,o){o.otherwise("/aboutme"),e.state("aboutme",{url:"/aboutme",templateUrl:"views/aboutme.html"}).state("projects",{url:"/projects",templateUrl:"views/projects.html"}).state("photos",{url:"/photos",templateUrl:"views/photos.html"}).state("videos",{url:"/videos",templateUrl:"views/videos.html"}).state("projects.summary",{url:"",templateUrl:"views/projectsSummary.html"}).state("projects.execdashboard",{url:"/execdashboard",templateUrl:"views/executiveDashboardDetail.html"}).state("projects.myagencyreports",{url:"/myagencyreports",templateUrl:"views/myAgencyReportsDetail.html"}).state("projects.personalportfolio",{url:"/personalportfolio",templateUrl:"views/personalPortfolioDetail.html"})}]),angular.module("projectApp").factory("workProjectIntroFactory",function(){var e=[{_id:0,evenOrOddClass:"oddContainer",name:"Executive Dashboard",companyLogo:"/svgs/vertaforeLogo.svg",image:"/images/ExecutiveDashboard.png",roleIconClass:"user",role:"Experience Designer",date:"2014.11 - 2016.04",intro1:"Vertafore's Executive Dashboard is a new feature initially targeted the executive users of agencies. It delivers easy to understand key data points to executive from which they can make informed decisions. By bringing these key metrics together into a single, easily digestible format for the first time, agencies are allowed to take action more quickly on their business direction.",intro2:"I, as the only Experience Designer in the cross functional team, designed Executive Dashboard to bring the key business performance KPIs to the fingertips of the Agency Executives.",intro3:"",tools:["Adobe Illustrator","Adobe Photoshop","FramerJS","Highcharts"],detailTemplate:"projects.execdashboard"},{_id:1,evenOrOddClass:"evenContainer",name:"My Agency Reports",companyLogo:"/svgs/vertaforeLogo.svg",image:"/images/MyAgencyReports.png",roleIconClass:"user",role:"Experience Designer",date:"2016.01 - Present",intro1:"Vertafore’s My Agency Reports is the new reporting platform, replacing legacy Vertafore Reporting. With My Agency Reports insurance agency is connected to its critical data and has added flexibility to give them more control over the data.",intro2:"I, as the only Experience Designer in the cross functional team, designed My Agency Reports with a simplified navigation and added report filtering options. Reports are simple to use and allow users to adapt and tailor reports to meet the needs of their insurance agency. Users can quickly build custom reports and slice data into a view that makes sense for their business.",intro3:"",tools:["Adobe Illustrator","Adobe Photoshop","FramerJS","Angular UI Grid"],detailTemplate:"projects.myagencyreports"},{_id:2,evenOrOddClass:"oddContainer",name:"Personal Portfolio",companyLogo:"",image:"/images/portfolioProject.jpg",roleIconClass:"user",role:"Designer / Developer",date:"2016.06 - 2016.07",intro1:"My personal portfolio was completely rebuilt in June 2016, when I just finished my online Coursera specialization “Full Stack Web Development” and I thought it would be a good practice to put everything together - all the way from design to a well-built website.",intro2:"I believe some of the most interesting and useful players in creating the modern Internet are hybrids between designers and developers — people who can translate between the disparate languages of the visual and the technical. And this personal project gave me so much experience of dancing on both ends.",intro3:"The moment you enter this website, you are looking at my final work. Enjoy!",tools:["Adobe Illustrator","Adobe Photoshop","Semantic UI","AngularJS","Yeoman","Gulp","GitHub"],detailTemplate:"projects.personalportfolio"}],o={};return o.getProjects=function(){return e},o.getProject=function(e){return o[e]},o}),angular.module("projectApp").factory("photoFactory",function(){var e=[{_id:0,location:"Haleakalā National Park, Maui, Hawaii",googleMap:"https://www.google.com/maps/place/Haleakal%C4%81+National+Park/@20.7203826,-156.1573464,17z/data=!3m1!4b1!4m5!3m4!1s0x7954b73425a04bd1:0x9c23fd88e8f5f4ca!8m2!3d20.7203826!4d-156.1551524",image:"/images/photos/IMG_9826.jpg",date:"2016.04"},{_id:1,location:"Haleakalā National Park, Maui, Hawaii",googleMap:"https://www.google.com/maps/place/Haleakal%C4%81+National+Park/@20.7203826,-156.1573464,17z/data=!3m1!4b1!4m5!3m4!1s0x7954b73425a04bd1:0x9c23fd88e8f5f4ca!8m2!3d20.7203826!4d-156.1551524",image:"/images/photos/IMG_9776.jpg",date:"2016.04"},{_id:2,location:"Makena Beach State Park, Maui, Hawaii",googleMap:"https://www.google.com/maps/place/Makena+Beach+State+Park/@20.6345903,-156.4486883,17z/data=!3m1!4b1!4m5!3m4!1s0x7954dca05e5b47bd:0x2dd055942892efff!8m2!3d20.6345903!4d-156.4464943",image:"/images/photos/IMG_9587.jpg",date:"2016.04"},{_id:4,location:"Diamond Head, Oahu, Hawaii",googleMap:"https://www.google.com/maps/place/Diamond+Head/@21.2637537,-157.8061576,16.84z/data=!4m12!1m6!3m5!1s0x7c00728901172099:0x429e0b513230e252!2sDiamond+Head+State+Monument!8m2!3d21.2637984!4d-157.8040943!3m4!1s0x0:0x8ed32dc0972431bc!8m2!3d21.261521!4d-157.8058778",image:"/images/photos/IMG_9485.jpg",date:"2016.04"},{_id:5,location:"Makapu'u Beach, Oahu, Hawaii",googleMap:"https://www.google.com/maps/place/Makapu'u+Beach/@21.3110583,-157.6621688,17z/data=!3m1!4b1!4m5!3m4!1s0x7c0011633c4667bf:0x24ed059147c8afa!8m2!3d21.3110583!4d-157.6599748",image:"/images/photos/IMG_9355.jpg",date:"2016.04"},{_id:6,location:"Lanikai Beach, Oahu, Hawaii",googleMap:"https://www.google.com/maps/place/Lanikai+Beach/@21.3930921,-157.7176295,17z/data=!3m1!4b1!4m5!3m4!1s0x7c0014dd17442541:0x88415fbfd50f90b8!8m2!3d21.3930921!4d-157.7154355",image:"/images/photos/IMG_9271.jpg",date:"2016.04"},{_id:7,location:"Sandy Beach Park, Oahu, Hawaii",googleMap:"https://www.google.com/maps/place/Sandy+Beach+Park/@21.2856686,-157.6747868,17z/data=!3m1!4b1!4m5!3m4!1s0x7c0013d93e8ba33f:0x8741e1408e8bb576!8m2!3d21.2856686!4d-157.6725928",image:"/images/photos/IMG_9083.jpg",date:"2016.04"},{_id:8,location:"Richardson Hwy, Alaska",googleMap:"https://www.google.com/maps/place/Richardson+Hwy,+North+Pole,+AK+99705/@64.7527276,-147.338071,17z/data=!3m1!4b1!4m5!3m4!1s0x56cb1fd48765bfd3:0x518b76500e4e01cc!8m2!3d64.7527276!4d-147.335877",image:"/images/photos/IMG_8171.jpg",date:"2015.09"},{_id:9,location:"Cold Foot, Alaska",googleMap:"https://www.google.com/maps/place/Coldfoot,+AK/@67.2353182,-150.2266042,11z/data=!3m1!4b1!4m5!3m4!1s0x5128c0e716ad1835:0x50a68a6483ae4827!8m2!3d67.2524398!4d-150.1771514",image:"/images/photos/IMG_7946.jpg",date:"2015.09"},{_id:10,location:"Dalton Hwy, Alaksa",googleMap:"https://www.google.com/maps/place/Dalton+Hwy,+Alaska/@67.8441173,-149.8191683,17z/data=!3m1!4b1!4m5!3m4!1s0x51263c94e8caa953:0xd2115c2b28ef1c69!8m2!3d67.8441173!4d-149.8169743",image:"/images/photos/IMG_7913.jpg",date:"2015.09"},{_id:11,location:"Denali National Park and Preserve, Alaska",googleMap:"https://www.google.com/maps/place/Denali+National+Park+and+Preserve/@63.1148002,-151.1947998,17z/data=!3m1!4b1!4m5!3m4!1s0x56cdf3ff88d01605:0xc6b53b15131936a5!8m2!3d63.1148002!4d-151.1926058",image:"/images/photos/IMG_7350.jpg",date:"2015.09"},{_id:12,location:"Denali National Park and Preserve, Alaska",googleMap:"https://www.google.com/maps/place/Denali+National+Park+and+Preserve/@63.1148002,-151.1947998,17z/data=!3m1!4b1!4m5!3m4!1s0x56cdf3ff88d01605:0xc6b53b15131936a5!8m2!3d63.1148002!4d-151.1926058",image:"/images/photos/IMG_7168.jpg",date:"2015.09"},{_id:13,location:"Mount Denali, Alaska",googleMap:"https://www.google.com/maps/place/Denali/@63.0691235,-151.0771948,12z/data=!3m1!4b1!4m5!3m4!1s0x56cde603306d1c1b:0xb36f3b95ebe1ce02!8m2!3d63.0691689!4d-151.0069842",image:"/images/photos/IMG_6588.jpg",date:"2015.09"},{_id:14,location:"Kenai Fjords National Park, Alaska",googleMap:"https://www.google.com/maps/place/Kenai+Fjords+National+Park/@60.0437764,-149.8185584,17z/data=!3m1!4b1!4m5!3m4!1s0x56c79c630608aa09:0x12143ced272edc64!8m2!3d60.0437764!4d-149.8163644",image:"/images/photos/IMG_6190.jpg",date:"2015.09"},{_id:15,location:"Crater Lake National Park, Oregon",googleMap:"https://www.google.com/maps/place/Crater+Lake+National+Park/@42.8684411,-122.1706725,17z/data=!3m1!4b1!4m5!3m4!1s0x54c6170840e5e339:0x902bf2e1452fe3a3!8m2!3d42.8684411!4d-122.1684785",image:"/images/photos/IMG_5533.jpg",date:"2015.07"},{_id:16,location:"Tulip Town, Washington",googleMap:"https://www.google.com/maps/place/Tulip+Town/@48.4279625,-122.4258766,17z/data=!3m1!4b1!4m5!3m4!1s0x54856fa8f81ecd09:0x4e1b4921812f9b1!8m2!3d48.4279625!4d-122.4236826",image:"/images/photos/IMG_2566.jpg",date:"2015.04"},{_id:17,location:"Downtown Skyline, Seattle, Washington",googleMap:"https://www.google.com/maps/place/Dr.+Jose+Rizal+Park/@47.6084989,-122.3461802,13.48z/data=!4m5!3m4!1s0x0:0x7961f5440df0a1dc!8m2!3d47.5931698!4d-122.3187304",image:"/images/photos/IMG_2409.jpg",date:"2015.03"},{_id:18,location:"Grand Teton National Park, Wyoming",googleMap:"https://www.google.com/maps/place/Grand+Teton+National+Park/@43.7904282,-110.6839567,17z/data=!3m1!4b1!4m5!3m4!1s0x5352519ec95d1ba9:0xa5a0b88ecc91a337!8m2!3d43.7904282!4d-110.6817627",image:"/images/photos/IMG_9892.jpg",date:"2014.07"},{_id:19,location:"Yellow Stone National Park",googleMap:"https://www.google.com/maps/place/Yellowstone+National+Park/@44.42577,-110.592788,12.27z/data=!4m5!3m4!1s0x5351e55555555555:0xaca8f930348fe1bb!8m2!3d44.427963!4d-110.588455",image:"/images/photos/IMG_0184.jpg",date:"2014.07"},{_id:20,location:"Yellow Stone National Park",googleMap:"https://www.google.com/maps/place/Yellowstone+National+Park/@44.42577,-110.592788,12.27z/data=!4m5!3m4!1s0x5351e55555555555:0xaca8f930348fe1bb!8m2!3d44.427963!4d-110.588455",image:"/images/photos/IMG_0041.jpg",date:"2014.07"}],o={};return o.getPhotos=function(){return e},o.getPhoto=function(o){return e[o]},o}),angular.module("projectApp").factory("videoFactory",["$sce",function(e){for(var o=[{_id:0,evenOrOddClass:"oddContainer",name:"Aloha Hawaii",source:"https://www.youtube.com/embed/pIIsa8IYVWU",date:"2016.04",intro:"In April 2016, I went to Hawaii for vocation. The video was taken by my DJI Phantom 3 & Canon 5D Mark II, and edited with Adobe After Effect and Premiere.",tools:["DJI Phantom 3","Canon 5D Mark II","Adobe After Effect","Adobe Premiere"]},{_id:1,evenOrOddClass:"evenContainer",name:"Alaska - The Last Frontier",source:"http://www.youtube.com/embed/8xZm70yGCm0",date:"2015.09",intro:"In Sept 2015, I went on a road trip to Alaska. The video was taken by my DJI Phantom 3 and edited with Adobe After Effect and Premiere.",tools:["DJI Phantom 3","Adobe After Effect","Adobe Premiere"]},{_id:2,evenOrOddClass:"oddContainer",name:"University of Washington iSchool Capstone Project",source:"https://www.youtube.com/embed/V6sOnU6Fwtg",date:"2014.06",intro:"This video was created for promoting my master program capstone project - Alaska Airline Carry-On Baggage Predictive Analytics.",tools:["Adobe After Effect","Adobe Premiere"]},{_id:3,evenOrOddClass:"evenContainer",name:"iSchool Study Abroad Promotion Video",source:"https://www.youtube.com/embed/FhRyVixfbi0",date:"2013.09",intro:"In September, 2013, I attended iSchool's Study Abroad - Denmark Exploration Seminar at University of Copenhagen. Based on our exciting experiences in Denmark, I made this Study Abroad Promotion Video for my school.",tools:["Adobe After Effect","Adobe Premiere"]}],a=0;a<o.length;a++)o[a].source=e.trustAsResourceUrl(o[a].source);var t={};return t.getVideos=function(){return o},t.getVideo=function(e){return o[e]},t}]),angular.module("projectApp").controller("AppController",["$scope","$state","$analytics",function(e,o,a){e.onViewLoad=function(){var e=new ScrollMagic.Controller,o=new ScrollMagic.Scene({offset:1}).addTo(e);o.on("enter",function(){$(".fullScreenHeader").removeClass("transparentMenu")}),o.on("leave",function(){$(".fullScreenHeader").addClass("transparentMenu")});var a=new ScrollMagic.Scene({triggerElement:"#experienceTrigger"}).addTo(e);a.on("enter",function(){$("#flightToUSA").addClass("animated fadeInCustomUp"),$("#graduation").addClass("animated fadeInCustomDown delay"),$("#executiveDashboard").addClass("animated fadeInCustomDown delay-one"),$("#adobeReports").addClass("animated fadeInCustomUp delay-two"),$("#myAgencyReports").addClass("animated fadeInCustomDown delay-three")});var t=new ScrollMagic.Scene({triggerElement:"#skillsTrigger"}).addTo(e);t.on("enter",function(){$("#skillsBar-1").addClass("animated growBar"),$("#skillsText-1").addClass("animated fadeInCustom"),$("#skillsIcon-1").addClass("animated fadeInCustom"),$("#skillsBar-2").addClass("animated growBar "),$("#skillsText-2").addClass("animated fadeInCustom "),$("#skillsIcon-2").addClass("animated fadeInCustom "),$("#skillsBar-3").addClass("animated growBar "),$("#skillsText-3").addClass("animated fadeInCustom "),$("#skillsIcon-3").addClass("animated fadeInCustom "),$("#skillsBar-4").addClass("animated growBar "),$("#skillsText-4").addClass("animated fadeInCustom "),$("#skillsIcon-4").addClass("animated fadeInCustom "),$("#skillsBar-5").addClass("animated growBar "),$("#skillsText-5").addClass("animated fadeInCustom "),$("#skillsIcon-5").addClass("animated fadeInCustom "),$("#English").addClass("animated show75"),$("#Chinese").addClass("animated show100"),$("#Spanish").addClass("animated show25")})},e.$on("$stateChangeSuccess",function(e,a,t,r,n){"aboutme"!==a.name&&"projects"!==a.name&&"photos"!==a.name&&"videos"!==a.name||(document.body.scrollTop=document.documentElement.scrollTop=0,console.log("root")),"projects"===a.name&&o.go("projects.summary")}),e.scrollToProject_Animation=function(){var e=new ScrollMagic.Controller;e.scrollTo(function(e){$("html, body").animate({scrollTop:e},800)}),e.scrollTo("#projectAnchor")},e.scrollToProject=function(){var e=new ScrollMagic.Controller;e.scrollTo("#projectAnchor")},$(".launchIcon").click(function(){$("body").attr("style","position: relative !important; overflow: hidden !important"),$("html").attr("style","position: relative !important; overflow: hidden !important"),$(".ui.labeled.icon.sidebar").sidebar("toggle")}),$(".ui.labeled.icon.sidebar").sidebar({transition:"uncover",scrollLock:!0,onHidden:function(){$("body").attr("style",""),$("html").attr("style","")}}),e.clickSideBarMenuItem=function(e){$(".ui.labeled.icon.sidebar").sidebar("toggle"),$(".sidebar a.item").removeClass("active"),$(e.currentTarget).addClass("active");var o=e.currentTarget.getAttribute("href");o.indexOf("#")>-1&&(o=o.replace("#","")),a.pageTrack(o)},e.clickFullMenuItem=function(e){var o=e.currentTarget.getAttribute("href");o.indexOf("#")>-1&&(o=o.replace("#","")),a.pageTrack(o)};var t=document.location.hash;t.indexOf("#")>-1&&(t=t.replace("#","")),a.pageTrack(t)}]),angular.module("projectApp").controller("AboutMeController",["$scope",function(e){var o=new Date;o.getHours()<12&&o.getHours()>3?e.greeting="Good Morning":o.getHours()>=12&&o.getHours()<=17?e.greeting="Good Afternoon":o.getHours()>17||o.getHours()<=3?e.greeting="Good Evening":e.greeting="Good Day";var a=new ScrollMagic.Controller;$("#learnMore").click(function(){a.scrollTo(function(e){$("html, body").animate({scrollTop:e},800)}),a.scrollTo("#learnMoreScrollToAnchor")})}]),angular.module("projectApp").controller("ProjectsController",["$scope","$state",function(e,o){o.go("projects.summary"),$("#learnMoreWork").click(function(){e.scrollToProject_Animation()})}]),angular.module("projectApp").controller("ProjectsSummaryController",["$scope","$animate","$state","workProjectIntroFactory","$analytics",function(e,o,a,t,r){var n=t.getProjects();e.projects=n,e.$on("LastRepeaterElement",function(){$(".special.card .image").dimmer({on:"hover"})}),e.learnMoreProject=function(o){var t="learn-more-"+e.projects[o].name+":button#click";t=t.toLowerCase(),r.eventTrack(t),$(".special.card .image").dimmer("hide"),$(".special.card .image").dimmer({}),o%2!=0&&$("."+e.projects[o].evenOrOddClass).css("background-color","#383740"),a.go(n[o].detailTemplate)}}]),angular.module("projectApp").controller("ExecDashboardController",["$scope","workProjectIntroFactory","$state",function(e,o,a){var t=o.getProjects();e.project=t[0],$(".step").click(function(){$(".step").removeClass("active"),$(this).addClass("active")}),$(".step").tab(),e.closeProjectDetail=function(e){$(".special.card .image").dimmer({on:"hover"}),a.go("projects.summary")},e.$on("$stateChangeSuccess",function(o){e.scrollToProject()})}]),angular.module("projectApp").controller("MyAgencyReportsController",["$scope","workProjectIntroFactory","$state",function(e,o,a){var t=o.getProjects();e.project=t[1],$(".step").click(function(){$(".step").removeClass("active"),$(this).addClass("active")}),$(".step").tab(),e.closeProjectDetail=function(e){$(".special.card .image").dimmer({on:"hover"}),a.go("projects.summary")},e.$on("$stateChangeSuccess",function(o){e.scrollToProject()})}]),angular.module("projectApp").controller("PersonalPortfolioController",["$scope","workProjectIntroFactory","$state",function(e,o,a){var t=o.getProjects();e.project=t[2],$(".portfolioDesignProcessContainer .step").click(function(){$(".portfolioDesignProcessContainer .step").removeClass("active"),$(this).addClass("active")}),$(".portfolioDesignProcessContainer .step").tab({context:$(".portfolioDesignProcessContainer")}),$(".portfolioImplementationProcessContainer .step").click(function(){$(".portfolioImplementationProcessContainer .step").removeClass("active"),$(this).addClass("active")}),$(".portfolioImplementationProcessContainer .step").tab({context:$(".portfolioImplementationProcessContainer")}),e.closeProjectDetail=function(e){$(".special.card .image").dimmer({on:"hover"}),a.go("projects.summary")},e.$on("$stateChangeSuccess",function(o){e.scrollToProject()})}]),angular.module("projectApp").controller("PhotoController",["$scope","photoFactory",function(e,o){var a=o.getPhotos();e.photos=a;var t=new ScrollMagic.Controller;$("#SeeMorePhoto").click(function(){t.scrollTo(function(e){$("html, body").animate({scrollTop:e},800)}),t.scrollTo("#photoAnchor")})}]),angular.module("projectApp").controller("VideoController",["$scope","$sce","videoFactory",function(e,o,a){var t=a.getVideos();e.videos=t;var r=new ScrollMagic.Controller;$("#SeeMoreVideo").click(function(){r.scrollTo(function(e){$("html, body").animate({scrollTop:e},800)}),r.scrollTo("#videoAnchor")})}]),angular.module("projectApp").directive("emitLastRepeaterElement",function(){return function(e){e.$last&&e.$emit("LastRepeaterElement")}});