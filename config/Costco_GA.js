GA_TRACE_CODE = "UA-110096492-2";

var _local_debug = true;

if(_local_debug == false){
  CSS_URL = "https://localhost/GA-project/config/Costco_GA.css";
  LIB_URL = "https://localhost/GA-project/ga_inject_lib.js";
  
  //Costco_GA.js 直接加入在網頁head上
  console.log("[LOCAL TEST MODE]");
}
else {
  CSS_URL = "https://medo972283.github.io/GA-project/config/Costco_GA.css";
  LIB_URL = "https://medo972283.github.io/GA-project/ga_inject_lib.js";
  
}

var exec = function(){
  auto_set_user_id();
  
  //腳本
  ga_mouse_over_event(".menu-trigger","Classification_Menu_Hover");
  ga_mouse_click_event(".menu-trigger","Classification_Menu_Click");
  ga_mouse_over_event(".nbc-container","Other_Menu_Hover");
  ga_mouse_click_event(".nbc-container","Other_Menu_Click");
  
  ga_mouse_over_event(".show-sub-menu","OOOOOer");
  ga_mouse_click_event(".show-sub-menu","OtOOOOck");
  
  
  ga_mouse_over_event(".nbc-mobile.auto","Other_Menu_Hover");
  ga_mouse_click_event(".nbc-mobile.auto","Other_Menu_Click");
  
  ga_mouse_over_event(".topmenu","Top_Menu_Hover");
  ga_mouse_click_event(".topmenu","Top_Menu_Click");
  ga_mouse_over_event("#1-1-0","Sub_Menu_Hover");
  ga_mouse_click_event("#1-1-0","Sub_Menu_Hover");
  
  
}




// --------------------------------------

$(function () {
    $.getScript(LIB_URL, function () {
        ga_setup(function () {
            exec();
        });
    });
});
