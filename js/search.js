// build time:Tue Dec 31 2019 16:10:55 GMT+0800 (GMT+08:00)
var searchAll;var searchFunc=function(e,t,r){"use strict";$.ajax({url:e,dataType:"xml",complete:function(e){function a(e){if(document.all){var t=new ActiveXObject("Microsoft.XMLDOM");t.loadXML(e);return t}else return(new DOMParser).parseFromString(e,"text/xml")}var l=$("entry",a(e.responseText)).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get();var s=document.getElementById(t);var n=document.getElementById(r);searchAll=function(e){var t='<ul class="search-result-list">';var r=e.trim().toLowerCase().trim().split(/[\s\-]+/);n.innerHTML="";if(e.trim().length<=0){return}l.forEach(function(e){var a=true;var l=[];if(!e.title||e.title.trim()===""){e.title="Untitled"}var s=e.title.trim().toLowerCase();var n=e.content.trim().replace(/<[^>]+>/g,"").toLowerCase();var i=e.url;var o=-1;var c=-1;var u=-1;if(n!==""){r.forEach(function(e,t){o=s.indexOf(e);c=n.indexOf(e);if(o<0&&c<0){a=false}else{if(c<0){c=0}if(t==0){u=c}}})}else{a=false}if(a){var f=i.split("/");var h=f[1]+"/"+f[2]+"/"+f[3];t+="<li><a href='"+i+"'><span class='post-title' title='"+s+"'>"+s+"</span><span class='post-date' title='"+h+"'>"+h+"</span></a>";var v=e.content.trim().replace(/<[^>]+>/g,"");if(u>=0){var m=u-20;var p=u+80;if(m<0){m=0}if(m==0){p=100}if(p>v.length){p=v.length}var x=v.substr(m,p);r.forEach(function(e){var t=new RegExp(e,"gi");x=x.replace(t,'<em class="search-keyword">'+e+"</em>")});t+='<p class="search-result">'+x+"...</p>"}t+="</li>"}});t+="</ul>";if(t.indexOf("<li>")===-1){return n.innerHTML="<ul><span class='local-search-empty'>没有找到内容，更换下搜索词试试吧~<span></ul>"}n.innerHTML=t;$(document).pjax("#local-search-result a",".pjax",{fragment:".pjax",timeout:8e3});$("#local-search-result a").mouseenter(function(e){$("#local-search-result a.hover").removeClass("hover");$(this).addClass("hover")});$("#local-search-result a").mouseleave(function(e){$(this).removeClass("hover")})}},error:function(e,t,r){console.log("文章中出现特殊字符，导致解析xml出现问题，系统自动采用第二方案：进行主动解析！！！ 请检查全文搜索是否有问题，如出现问题，请及时在 https://github.com/yelog/hexo-theme-3-hexo/issues 中提出来，作者会尽快处理！")}})};
//rebuild by neat 