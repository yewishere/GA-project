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
  
  
 // for(var i=0; i<$('#theMenu').find('.topmenu').length; i++){
 //   ga_mouse_over_event("#top_menu"+i,"Top_Menu_Hover");
  //  ga_mouse_click_event("#top_menu"+i,"Top_Menu_Click");
 // };
 //ga_mouse_over_event(".topmenu","Hover");
  ga_mouse_over_event(".show-sub-menu","HHover");	
}




// --------------------------------------
$(function() {  
    var len =  $('#theMenu').find('.topmenu').length; 
    for(var i=0;i<len;i++){
        $('#theMenu').find('.topmenu').eq(i).attr('id', 'top_menu'+i);    
    };
    
  /*  var len =  $('#theMenu').find('.topmenu').length; 
    for(var j=0;j<len;j++){
        var len2 = $('#theMenu').find('#top_menu'+j).length;
        for(var i=0;i<len2;i++){
            $('#theMenu').find('#top_menu'+j).eq(i).attr('id', 'sub_menu'+i);
        };
    };
    
    var len =  $('#theMenu').find('.topmenu').length; 
    for(var k=0;k<len;k++){
      var len2 = $('#theMenu').find('#top_menu'+k).length;
      for(var j=0;j<len2;j++){
          var len3 = $('#theMenu').find('#top_menu'+k).find('#sub_menu'+j).length;
          for(var i=0;i<len3;i++){
              $('#theMenu').find('#top_menu'+k).find('#sub_menu'+j).eq(i).attr('id', 'subsub_menu'+i);
          };
      };
    };
  */
});

  
  
$(function () {
    $.getScript(LIB_URL, function () {
        ga_setup(function () {
            exec();
        });
    });
});


