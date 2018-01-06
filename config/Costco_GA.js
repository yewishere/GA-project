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
  
  //-------------首頁---------------
  
  //分類選單
  ga_mouse_over_event(".menu-trigger","Classification_Menu_Hover");
  ga_mouse_click_event(".menu-trigger","Classification_Menu_Click");
  //其餘主選單
  ga_mouse_over_event(".nbc-container","Other_Menu_Hover");
  ga_mouse_click_event(".nbc-container","Other_Menu_Click");
  //分類選單子選單
  //ga_mouse_over_event(".show-sub-menu.hidden-xs.hidden-sm","Sub_Menu_Hover");
  //ga_mouse_click_event(".show-sub-menu.hidden-xs.hidden-sm","Sub_Menu_Click");
  //分類選單子子選單
  //ga_mouse_over_event("#1-1-0","Sub_Menu_Hover");
  //ga_mouse_click_event("#1-1-0","Sub_Menu_Hover");
  
  
}




// --------------------------------------

$(function () {
    $.getScript(LIB_URL, function () {
        ga_setup(function () {
            exec();
        });
    });
});

$(function() {
    var len = $(".show-sub-menu.hidden-xs.hidden-sm").find("a").length; 

    for(var i=0;i<len;i++){
        $(".show-sub-menu.hidden-xs.hidden-sm").find('a').eq(i).attr('id', 'sub_menu'+i);
    };
});
