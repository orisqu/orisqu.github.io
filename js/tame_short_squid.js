!function(e){var t=1e3;ua=navigator.userAgent,(ua.indexOf("MSIE ")>-1||ua.indexOf("Trident/")>-1)&&(t=5e3),e("body").hasClass("et-fb")&&(t=1e4),setTimeout((function(){e(".et_pb_button_module_wrapper .et_pb_button.freddie_button_soul_brother ").each((function(){var t=e(this).text();e(this).html("<span>"+t+"</span>"),e(this).prepend(e('<div class="bg_color"></div>'))}));var t=new TimelineLite;e(".et_pb_button_module_wrapper .et_pb_button.freddie_button_soul_brother ").hover((function(){t.to(e(this).find("span"),.3,{x:-35,ease:Power0.easeNone},0).to(e(this).find(".bg_color"),0,{opacity:1,ease:Power0.easeNone},0)}),(function(){t.clear(),(new TimelineLite).to(e(this).find("span"),.3,{x:0,ease:Power0.easeNone},0).to(e(this).find(".bg_color"),0,{opacity:0,ease:Power0.easeNone},0)}))}),t)}(jQuery);