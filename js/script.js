// build time:Wed Dec 18 2019 23:24:43 GMT+0800 (GMT+08:00)
jQuery.expr[":"].contains=function(t,e,i){return jQuery(t).text().toUpperCase().indexOf(i[3].toUpperCase())>=0};jQuery.expr[":"].contains_tag=function(t,e,i){var s=jQuery(t).data("tag").split(",");return $.inArray(i[3],s)!=-1};jQuery.expr[":"].contains_author=function(t,e,i){var s=jQuery(t).data("author").split(",");return $.inArray(i[3],s)!=-1};var blog_path=$(".theme_blog_path").val();blog_path=blog_path.lastIndexOf("/")===blog_path.length-1?blog_path.slice(0,blog_path.length-1):blog_path;var content=$(".pjax");var container=$(".post");$(document).pjax(".nav-right nav a,.nav-left .avatar_target,.site_url",".pjax",{fragment:".pjax",timeout:8e3});$(document).on({"pjax:click":function(){content.removeClass("fadeIns").addClass("fadeOuts");NProgress.start()},"pjax:start":function(){content.css({opacity:0})},"pjax:end":function(){NProgress.done();container.scrollTop(0);afterPjax();if($(window).width()<=1024){$(".full-toc .full").trigger("click")}}});function afterPjax(){if(blog_path===""?location.pathname==="/":blog_path===location.pathname.split("/")[1]){$(".post").addClass("index")}else{$(".post").removeClass("index")}if($("script[type='text/x-mathjax-config']").length>0){$.getScript($("#MathJax-js").val(),function(){MathJax.Hub.Queue(["resetEquationNumbers",MathJax.InputJax.TeX],["Typeset",MathJax.Hub])})}$("pre code").each(function(t,e){hljs.highlightBlock(e)});content.css({opacity:1}).removeClass("fadeOuts").addClass("fadeIns");bind();if($(".theme_disqus_on").val()=="true"){DISQUSWIDGETS.getCount({reset:true})}if($("#comments").hasClass("disqus")){setTimeout(function(){if($(".count-comment").text().trim()==""){$(".count-comment").text(0)}},300)}}$(".nav-left ul li>div").on("click",function(t){$(".friend").removeClass("friend");$(".nav-right form .search").val("").change();$(".nav-left li>div.active").removeClass("active");$(this).addClass("active");var e=$(".nav-right nav a");if($(this).hasClass("all")){e.css("display","block")}else{e.css("display","none");$(".nav-right").find("."+$(this).data("rel")+"").css("display","block")}});$(".nav-left ul.sub").each(function(){$(this).height($(this).children().length*26-1)});$(".nav-left ul>li>div>.fold").on("click",function(t){var e=this;t.stopPropagation();$(e).toggleClass("unfold");$(e).parent().next().toggleClass("hide");$(e).parents("ul.sub").each(function(){if($(e).hasClass("unfold")){$(this).height($(this).height()+parseInt($(e).parent().next().attr("style").match(/\d+/g)[0])+1)}else{$(this).height($(this).height()-parseInt($(e).parent().next().attr("style").match(/\d+/g)[0])-1)}})});$(".nav-right nav a").mouseenter(function(t){$(".nav-right nav a.hover").removeClass("hover");$(this).addClass("hover")});$(".nav-right nav a").mouseleave(function(t){$(this).removeClass("hover")});var publickey={shift:false,ctrl:false,alt:false,last:0};$(document).keydown(function(t){var e=container.prop("scrollHeight")-container.scrollTop()-container.height();var i=container.scrollTop();if(!$(".nav-right form .search").is(":focus")&&!$("#comments textarea").is(":focus")){if(t.keyCode==74){container.animate({scrollTop:container.prop("scrollHeight")-container.height()},e,"linear")}else if(t.keyCode==75){container.animate({scrollTop:0},i,"linear")}else if(t.keyCode==71){if(publickey.shift){container.animate({scrollTop:container.prop("scrollHeight")},800)}else if(publickey.last==71){container.animate({scrollTop:0},800)}}else if(t.keyCode==16){publickey.shift=true}}});$(document).keyup(function(t){if(!$(".nav-right form .search").is(":focus")&&!$("#comments textarea").is(":focus")){if(t.keyCode==83){$(".full-toc .full").trigger("click")}else if(t.keyCode==73&&$(".nav").css("margin-left")=="0px"&&!$(".title-list").hasClass("friend")){$(".nav-right form .search").focus()}else if(t.keyCode==87){$(".full-toc .post-toc-menu").trigger("click")}else if(t.keyCode==74||t.keyCode==75){container.stop(true)}else if(t.keyCode==16){publickey.shift=false}}publickey.last=t.keyCode});$(".nav-right form .search").blur(function(t){$(".nav-right nav a.hover").removeClass("hover")});$(".nav-right form .search").keydown(function(t){if($(".nav-right nav a:not(:hidden), #local-search-result a:not(:hidden)").length>0&&!$(".ac").is(":visible")){if(t.which==13){var e=$(".nav-right nav a.hover:not(:hidden), #local-search-result a.hover:not(:hidden)");if(e.length==0){$(".nav-right nav a:not(:hidden):first, #local-search-result a:not(:hidden):first").trigger("click")}else{e.trigger("click")}$(":focus").blur()}else if(t.which==38){if(!$("nav").is(":visible")){if($("#local-search-result a.hover").length==0||$("#local-search-result a.hover").parent().prevAll(":visible").length==0){$("#local-search-result").scrollTop($("#local-search-result").prop("scrollHeight"));$("#local-search-result a.hover").removeClass("hover");$("#local-search-result a:visible:last").addClass("hover")}else{$("#local-search-result a.hover").parent().prevAll().each(function(){if($(this).is(":visible")){$("#local-search-result a.hover").removeClass("hover");$(this).children().addClass("hover");if($(this).offset().top-$(".nav-right form").height()<0){$("#local-search-result").scrollTop($("#local-search-result").scrollTop()-$(this).height())}return false}})}}else{if($("nav a:visible.hover").length==0||$("nav a:visible.hover").prevAll(":visible").length==0){$("nav").scrollTop($("nav").prop("scrollHeight"));$(".nav-right nav a.hover").removeClass("hover");$(".nav-right nav a:visible:last").addClass("hover")}else{$("nav a.hover").prevAll().each(function(){if($(this).is(":visible")){$(".nav-right nav a.hover").removeClass("hover");$(this).addClass("hover");if($(this).offset().top-$(".nav-right form").height()<0){$("nav").scrollTop($("nav").scrollTop()-$(this).height())}return false}})}}}else if(t.which==9||t.which==40){if($("nav").is(":visible")){if($("nav a:visible.hover").length==0||$("nav a:visible.hover").nextAll(":visible").length==0){$("nav").scrollTop(0);$(".nav-right nav a.hover").removeClass("hover");$(".nav-right nav a:visible:first").addClass("hover")}else{$("nav a.hover").nextAll().each(function(){if($(this).is(":visible")){$(".nav-right nav a.hover").removeClass("hover");$(this).addClass("hover");if($("nav").height()+$(".nav-right form").height()-$(this).offset().top<20){$("nav").scrollTop($("nav").scrollTop()+$(this).height())}return false}})}}else{if($("#local-search-result a:visible.hover").length==0||$("#local-search-result a:visible.hover").parent().nextAll(":visible").length==0){$("#local-search-result").scrollTop(0);$("#local-search-result a.hover").removeClass("hover");$("#local-search-result a:visible:first").addClass("hover")}else{$("#local-search-result a.hover").parent().nextAll().each(function(){if($(this).is(":visible")){$("#local-search-result a.hover").removeClass("hover");$(this).children().addClass("hover");if($("#local-search-result").height()+$(".nav-right form").height()-$(this).offset().top<20){$("#local-search-result").scrollTop($("#local-search-result").scrollTop()+$(this).prev().height())}return false}})}}if(t.which==9){return false}}}if(t.which==27){var e=$(".nav-right form .cross");if(e.is(":visible")){$(".nav-right form .cross").trigger("click")}else{$(".nav-right form input").blur()}}});$(".nav-right form .search").on("input",function(t){inputChange(t)});$(".nav-right form .search").on("change",function(t){inputChange(t)});var searchContent;function inputChange(t){var e=$(t.currentTarget).val().trim();if(e==searchContent){return}searchContent=e;$(".nav-right form .cross").css("display",e==""?"none":"block");if($("#local-search-result").length>0){if(e.length>3&&(e.substr(0,3).toLowerCase()=="in:"||e.substr(0,3).toLowerCase()=="in：")){$("#title-list-nav").hide();$("#local-search-result").show();searchAll(e.substr(3))}else{$("#title-list-nav").show();$("#local-search-result").hide()}}if(e==""){$(".nav-right nav a").css("display","block")}else if(e.substr(0,1)=="#"){$("div.ac > ul").attr("class","tag");$("div.acParent").css("display","block");if(e.substr(1).length!=0){$(".nav-right nav a").css("display","none");$(".nav-right nav").find("a:contains_tag('"+e.substr(1)+"')").css("display","block")}}else if(e.substr(0,1)=="@"){$("div.ac > ul").attr("class","author");$("div.acParent").css("display","block");if(e.substr(1).length!=0){$(".nav-right nav a").css("display","none");$(".nav-right nav").find("a:contains_author('"+e.substr(1)+"')").css("display","block")}}else{$("div.acParent").css("display","none");$(".nav-right nav a").css("display","none");$(".nav-right nav").find("a:contains('"+e+"')").css("display","block")}}$("#tagsWitchIcon").on("click",function(){$("#tagswitch").trigger("click")});$("#tagswitch").on("change",function(t){$(".nav-right .tags-list").css("display",$(this).prop("checked")?"block":"none");var e=$(this).prop("checked")?$(".nav-right form").height()+$(".nav-right .tags-list").height()+51:$(".nav-right form").height()+1;if($(window).width()>426){var i=$(document).height()-e-11}else{i=$(document).height()-e-$(".nav-left").height()-11}$(".nav-right nav, #local-search-result").css({top:e,height:i})});$(".full-toc .full,.semicircle").click(function(t){if($(window).width()<=1024&&$(".nav").hasClass("mobile")){$(".nav").removeClass("mobile");$(".full-toc .full").children().removeClass("mobile");return}if($(".full-toc .full").children().hasClass("min")){$(".full-toc .full").children().removeClass("min").addClass("max");$(".nav, .hide-list").addClass("fullscreen");content.delay(200).queue(function(){$(".full-toc .full").addClass("fullscreen").dequeue()})}else{$(".full-toc .full").children().removeClass("max").addClass("min");$(".nav, .hide-list").removeClass("fullscreen");content.delay(300).queue(function(){$(".full-toc .full").removeClass("fullscreen").dequeue()})}});$(".post").hover(function(){$(".semicircle").css("margin-left","-43px")},function(){$(".semicircle").css("margin-left","0")});$(function(){bind();$(".more-menus").on("click",function(){$(".mobile-menus-out").addClass("show");$(".mobile-menus").addClass("show")});$(".mobile-menus-out,.mobile-menus a").on("click",function(){$(".mobile-menus-out").removeClass("show");$(".mobile-menus").removeClass("show")});$(".nav-left>ul").css("height","calc(100vh - "+($(".avatar_target img").outerHeight(true)+$(".author").outerHeight(true)+$(".nav-left .icon").outerHeight(true)+$(".left-bottom").outerHeight(true))+"px)");if($("#local-search-result").length>0){$.getScript(blog_path+"/js/search.js",function(){searchFunc(blog_path+"/search.xml","local-search-input","local-search-result")})}$(".nav-right .tags-list li a").on("click",function(t){$(".nav-right form input").val("#"+$(this).text().trim()).change()});$(".full-toc .post-toc-menu").on("click",function(){$(".post-toc").toggleClass("open")});$(".nav-right form .cross").on("click",function(t){$(".nav-right form .search").val("").change();$(".nav-right form .search").focus()});$("#rocket").on("click",function(t){$(this).addClass("launch");container.animate({scrollTop:0},500)});container.scroll(function(t){if(container.scrollTop()>=200&&$("#rocket").css("display")=="none"){$("#rocket").removeClass("launch").css("display","block").css("opacity","0.5")}else if(container.scrollTop()<200&&$("#rocket").css("display")=="block"){$("#rocket").removeClass("launch").css("opacity","1").css("display","none")}});if($("#comments").hasClass("disqus")){setTimeout(function(){if($(".count-comment").text().trim()==""){$(".count-comment").text(0)}},1500)}if($(window).width()>414){$(".nav-right>nav>a>.post-title").css("width",$(".nav-right>nav>a").width()-$(".nav-right>nav>a>.post-date:first").width()-40)}$(".tags-list").css("width",$(".nav-right").width()-40);$(".friends").on("click",function(){$(".friends-area,.title-list").toggleClass("friend")});$(".back-title-list").on("click",function(){$(".friends-area,.title-list").removeClass("friend")})});function bind(){initArticle();$(".article_number").text($("#yelog_site_posts_number").val());$(".site_word_count").text($("#yelog_site_word_count").val());$(".site_uv").text($("#busuanzi_value_site_uv").text());$("#busuanzi_value_site_uv").bind("DOMNodeInserted",function(t){$(".site_uv").text($(this).text())});$(".site_pv").text($("#busuanzi_value_site_pv").text());$("#busuanzi_value_site_pv").bind("DOMNodeInserted",function(t){$(".site_pv").text($(this).text())});$(".post .pjax .index").find("br").remove();$(".post .pjax .index h1:eq(0)").addClass("article-title");$(".post .pjax article .article-meta .tag a").on("click",function(t){$(".nav-right form input").val("#"+$(this).text().trim()).change();if($(window).width()<=1024){$(".full-toc .full").trigger("click")}else if($(".full-toc .full span").hasClass("max")){$(".full-toc .full").trigger("click")}});$(".post .pjax article .article-meta .book a").on("click",function(t){$(".nav-left ul li>div[data-rel='"+$(this).data("rel")+"']").parents(".hide").each(function(){var t=this;$(t).removeClass("hide").prev().children(".fold").addClass("unfold");$(t).parents("ul.sub").each(function(){$(this).height(parseInt($(this).attr("style").match(/\d+/g)[0])+parseInt($(t).attr("style").match(/\d+/g)[0])+1)})});$(".nav-left ul li>div[data-rel='"+$(this).data("rel")+"']").trigger("click");if($(window).width()<=1024){$(".full-toc .full").trigger("click")}else if($(".full-toc .full span").hasClass("max")){$(".full-toc .full").trigger("click")}});$(".post .pjax article .article-meta .author").on("click",function(t){$(".nav-right form input").val("@"+$(this).text().trim()).change();if($(window).width()<=1024){$(".full-toc .full").trigger("click")}else if($(".full-toc .full span").hasClass("max")){$(".full-toc .full").trigger("click")}});$(".post-toc-content").html($(".post .pjax article .toc-ref .toc").clone());$("a[href^='#']").click(function(){container.animate({scrollTop:$($(this).attr("href")).offset().top+container.scrollTop()},500);if($(this).attr("href")==="#comments"){load$hide()}return false});if($("#comments").hasClass("disqus")){var t=$(".disqus-comment-count");t.bind("DOMNodeInserted",function(t){$(".count-comment").text($(this).text().replace(/[^0-9]/gi,""))})}$(document).pjax(".post .pjax article a[target!=_blank]",".pjax",{fragment:".pjax",timeout:8e3});if(img_resize!="photoSwipe"){$(".pjax").find("img").each(function(){if(!$(this).parent().hasClass("div_img")){$(this).wrap("<div class='div_img'></div>");var t=this.alt;if(t){$(this).after('<div class="img_alt"><span>'+t+"</span></div>")}}if($(window).width()>426){$(this).on("click",function(t){var e=$(this);$("body").append('<img class="img_hidden" style="display:none" src="'+this.src+'" />');var i="";var s="";var a="";var l="";if(this.width/this.height>document.body.clientWidth/document.body.clientHeight&&$(".img_hidden").width()>document.body.clientWidth){i=document.body.clientWidth+"px";s=this.height*document.body.clientWidth/this.width+"px";a=(document.body.clientHeight-this.height*document.body.clientWidth/this.width)/2+"px";l="0px"}else if(this.width/this.height<document.body.clientWidth/document.body.clientHeight&&$(".img_hidden").height()>document.body.clientHeight){i=this.width*document.body.clientHeight/this.height+"px";s=document.body.clientHeight+"px";a="0px";l=(document.body.clientWidth-this.width*document.body.clientHeight/this.height)/2+"px"}else{s=$(".img_hidden").height()+"px";i=$(".img_hidden").width()+"px";a=(document.body.clientHeight-$(".img_hidden").height())/2+"px";l=(document.body.clientWidth-$(".img_hidden").width())/2+"px"}$("body").append('<div class="img_max" style="opacity: 0"></div>');$("body").append('<img class="img_max" src="'+this.src+'" style="top:'+$(this).offset().top+"px;left:"+$(this).offset().left+"px; width:"+$(this).width()+"px;height: "+this.height+'px;">');$(this).css("visibility","hidden");setTimeout(function(){$("img.img_max").attr("style","").css({top:a,left:l,width:i,height:s});$("div.img_max").css("opacity","1")},10);$(".img_max").on("click",function(t){$("img.img_max").css({width:e.width()+"px",height:e.height()+"px",top:e.offset().top+"px",left:e.offset().left+"px"});$("div.img_max").css("opacity","0");setTimeout(function(){e.css("visibility","visible");$(".img_max").remove();$(".img_hidden").remove()},500)})})}})}}
//rebuild by neat 