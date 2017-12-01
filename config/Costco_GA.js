GA_TRACE_CODE = "UA-110096492-2";

var _local_debug = false;

if(_local_debug == false){
  CSS_URL = "https://localhost/GA-project/config/Costco_GA.css";
  LIB_URL = "https://localhost/GA-project/ga_inject_lib.js"
  console.log("[LOCAL TEST MODE]");
}
else {
  CSS_URL = "https://medo972283.github.io/GA-project/config/Costco_GA.css";
  LIB_URL = "https://medo972283.github.io/GA-project/ga_inject_lib.js"
}

var exec = function(){
  auto_set_user_id();
  
  //腳本
  ga_mouse_over_event(".menu-trigger","click");
}




// --------------------------------------

$(function () {
    $.getScript(LIB_URL, function () {
        ga_setup(function () {
            exec();
        });
    });
});
