function slickInit(){$(".center1").slick({arrows:!0,autoplay:true,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:1200,settings:{arrows:!0,slidesToShow:3}},{breakpoint:991,settings:{arrows:!0,slidesToShow:3}},{breakpoint:767,settings:{arrows:!0,centerMode:!0,centerPadding:"50px",slidesToShow:1,slidesToScroll:1}},{breakpoint:340,settings:{arrows:!1,centerMode:!0,centerPadding:"20px",slidesToShow:1,slidesToScroll:1}}]})}function slickInit1(){$(".center").slick({arrows:!0,slidesToShow:5,slidesToScroll:1,infinite:!1,responsive:[{breakpoint:1200,settings:{arrows:!0,slidesToShow:4}},{breakpoint:991,settings:{arrows:!0,centerMode:!1,centerPadding:"100px",slidesToScroll:3,slidesToShow:3}},{breakpoint:767,settings:{arrows:!0,centerMode:!1,centerPadding:"20px",slidesToShow:2,slidesToScroll:2}},{breakpoint:340,settings:{arrows:!1,centerMode:!1,centerPadding:"20px",slidesToShow:1,slidesToScroll:1}}]})}function onloadOfferProduct(){var e="/call-to-service&";e=e+"PageName=financehomejumpto&JumpToAssetId="+$("#jumpToListUl li.active").attr("id"),$("#JumpToListProducts").removeClass(),$.ajax({url:e,type:"GET",cache:!1,contentType:"text/html",error:function(e){},success:function(e){var s,t=$(e).filter("#JumpToSection").html();$("#JumpToListProducts").html(t),s=$("#JumpToListProducts"),$.trim(s.html())?$(".expagebox").length>=1&&($("#JumpToListProducts").addClass("hOurFinOfList center1"),$(window).width()>991&&slickInit()):$("#JumpToListProducts").html("<div class=''><div class='expageboxtext'><h2>No list available !!!</h2></div></div>")}})}$(document).ready(function(){onloadOfferProduct(),$("#jumpToListUl li").click(function(){var e="/call-to-service&";e=e+"PageName=financehomejumpto&JumpToAssetId="+$(this).attr("id"),$("#JumpToListProducts").removeClass(),$.ajax({url:e,type:"GET",cache:!1,contentType:"text/html",error:function(e){},success:function(e){var s,t=$(e).filter("#JumpToSection").html();$("#JumpToListProducts").html(t),s=$("#JumpToListProducts"),$.trim(s.html())?$(".expagebox").length>=1&&($("#JumpToListProducts").addClass("hOurFinOfList center1"),$(window).width()>991&&slickInit()):$("#JumpToListProducts").html("<div class=''><div class='expageboxtext'><h2>No list available !!!</h2></div></div>")}})})}),$(document).ready(function(){$(document).on("click","#searchPageBannerResult1 li",function(){$("#search_input").val()&&($("#search_input").val($(this).children("a").text()),setTimeout(function(){$("#searchformIdBanner").submit()},100))})});var searchRequest=null,searchRequest1=null;$(function(){$("#search_input").keyup(function(){var e=this,s=$(this).val().trim();if(s.length<3&&$("#searchPageBannerResult").hide(),s.length>=3){null!=searchRequest&&searchRequest.abort(),null!=searchRequest1&&searchRequest1.abort(),$("#searchPageBannerResult").html("");var t="";if(t=$("#search_input").val().trim(),console.log("showdata"+t),void 0!==t&&""!=t.trim()){var a="/call-to-service&";a=a+"PageName=searchautosuggestions&ProductIds="+t.trim(),searchRequest=$.ajax({type:"GET",url:a,dataType:"text",success:function(s){var t=$(s).filter("#childURL").html();if(void 0!==t){$("#searchPageBannerResult").show(),$("#searchPageBannerResult").html(t),$("#searchPageBannerResult").append("<h4 id='suggestedsearchesBanner'>Suggested Searches</h4><ul class='sugestUl' id='searchPageBannerResult1'></ul>");var a="&rows=8&start=0&wt=json",r="/solr/Bajaj/select?q=name:"+$("#search_input").val().trim()+"*"+a;searchRequest1=$.ajax({url:r,success:function(e){var s=JSON.stringify(e.response.docs),t=JSON.parse(s);""!=t?$.each(t,function(e){$("#searchPageBannerResult1").append("<li><a href='#;'>"+t[e].name+"</a></li>")}):($("#suggestedsearchesBanner").hide(),$("#searchPageBannerResult1").hide())},dataType:"jsonp",jsonp:"json.wrf"})}else $("#searchPageBannerResult").show(),$("#searchPageBannerResult").html("<h4 id='suggestedsearchesBanner'>Suggested Searches</h4><ul class='sugestUl' id='searchPageBannerResult1'></ul>"),a="&rows=8&start=0&wt=json",r="/solr/Bajaj/select?q=name:"+$("#search_input").val().trim()+"*"+a,searchRequest1=$.ajax({url:r,success:function(e){var s=JSON.stringify(e.response.docs),t=JSON.parse(s);""!=t?$.each(t,function(e){$("#searchPageBannerResult1").append("<li><a href='#;'>"+t[e].name+"</a></li>")}):($("#suggestedsearchesBanner").hide(),$("#searchPageBannerResult1").hide())},dataType:"jsonp",jsonp:"json.wrf"});$(e).val()}})}else{$("#searchPageBannerResult").show(),$("#searchPageBannerResult").html("<h4 id='suggestedsearchesBanner'>Suggested Searches</h4><ul class='sugestUl' id='searchPageBannerResult1'></ul>");var r="/solr/Bajaj/select?q=name:"+$("#search_input").val().trim()+"*&rows=8&start=0&wt=json";searchRequest1=$.ajax({url:r,success:function(e){var s=JSON.stringify(e.response.docs),t=JSON.parse(s);""!=t?$.each(t,function(e){$("#searchPageBannerResult1").append("<li><a href='#;'>"+t[e].name+"</a></li>")}):($("#suggestedsearchesBanner").hide(),$("#searchPageBannerResult1").hide())},dataType:"jsonp",jsonp:"json.wrf"})}}})}),$(document).ready(function(){var e=0;$("#search_input").click(function(){0==e&&(e=1,$(this).val(" "))}),$("#search_input").keyup(function(){0==e&&(e=1,$(this).val(" "))}),$(".SearchAnimatedText").text();var s=JSON.parse('["What can we help you find?","Fastest Personal Loan","Everything on EMI"]'),t=0,a=0,r=$("#search_input").attr("placeholder");$("#search_input").attr("placeholder",""),s&&s.push(r),$("#search_input").focus(),function n(){if(s&&0==e&&a<s.length)if(t<=s[a].length){var i=s[a].substr(0,t++);$("#search_input").val(i),setTimeout(function(){n()},60)}else setTimeout(function(){t=0,++a==s.length-1?$("#search_input").val(r):$("#search_input").val(""),n()},1500),a==s.length-1&&setTimeout(function(){$("#search_input").attr("placeholder",r),$("#search_input").val(r)},100)}()});