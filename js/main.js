$(document).ready(function(){
	console.log("Hello");
     
    /*******header-button-first********/ 
	$("#header-button-first").hover(function(){
    $(this).css({"background": "#fff","color": "#fe2851"});
    },
    function(){
    $(this).css({"background": "transparent","color": "#fff" });
    });
    
    /*******Hover header-button-second********/ 
    $("#header-button-second").hover(function(){
    $(this).css({"background": "transparent","color": "#fff","border": "1px solid #fff"});
    },
    function(){
    $(this).css({"background": "#fff","color": "#fe2851" });
    });
     
    /*******Hover work-button-first********/  
    $("#work-button-first").hover(function(){
    $(this).css({"background": "-webkit-linear-gradient(left , #ff651c,#ff242e ,#ff003c, #ff003c)","color": "#fff","border": "1px solid #ff003c"});
    },
    function(){
    $(this).css({"background": "#fff","color": "#4a4a4a","border": "1px solid #4a4a4a" });
    });

    /*******Hover work-button-second********/  
    $("#work-button-second").hover(function(){
    $(this).css({"background": "#fff","color": "#4a4a4a","border": "1px solid #4a4a4a"});
    },
    function(){
    $(this).css({"background": "-webkit-linear-gradient(left , #ff651c,#ff242e ,#ff003c, #ff003c)"
    	,"color": "#fff","border": "0px solid #4a4a4a" });
    });

    /*******Hover work-button-second********/  
    $(".videoContainer").hover(function(){
    $("#overlayid").removeClass("overlay");
    },
    function(){
    $("#overlayid").addClass("overlay");
    });

    /*******Hover Icon1********/  
    $("#icon1").hover(function(){
    $("i.fa.fa-globe.fa-2x").css({"background": "#fe2851","color": "#fff"});
    },
    function(){
    $("i.fa.fa-globe.fa-2x").css({"background-image" : "linear-gradient(to bottom, #ffffff, #f1f5f8)","color":"#a9a3a3"});
    });

    /*******Hover Icon2********/  
    $("#icon2").hover(function(){
    $("i.fa.fa-eye.fa-2x").css({"background-image": "linear-gradient(to bottom, #ffffff, #f1f5f8)","color": "#a9a3a3" });
    },
    function(){
    $("i.fa.fa-eye.fa-2x").css({"background" : "#fe2851","color": "#fff"});
    });

    /*******Hover Icon3********/  
    $("#icon3").hover(function(){
    $("i.fa.fa-briefcase.fa-2x").css({"background": "#fe2851","color": "#fff"});
    },
    function(){
    $("i.fa.fa-briefcase.fa-2x").css({"background-image" : "linear-gradient(to bottom, #ffffff, #f1f5f8)","color":"#a9a3a3"});
    });
});