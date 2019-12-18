// build time:Wed Dec 18 2019 13:10:55 GMT+0800 (GMT+08:00)
(function(t){function e(e,r,n){n=g(r,n);return this.on("click.pjax",e,function(e){var r=n;if(!r.container){r=t.extend({},n);r.container=t(this).attr("data-pjax")}a(e,r)})}function a(e,a,r){r=g(a,r);var i=e.currentTarget;var o=t(i);if(i.tagName.toUpperCase()!=="A")throw"$.fn.pjax or $.pjax.click requires an anchor element";if(e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(location.protocol!==i.protocol||location.hostname!==i.hostname)return;if(i.href.indexOf("#")>-1&&x(i)==x(location))return;if(e.isDefaultPrevented())return;var s={url:i.href,container:o.attr("data-pjax"),target:i};var c=t.extend({},s,r);var u=t.Event("pjax:click");o.trigger(u,[c]);if(!u.isDefaultPrevented()){n(c);e.preventDefault();o.trigger("pjax:clicked",[c])}}function r(e,a,r){r=g(a,r);var i=e.currentTarget;var o=t(i);if(i.tagName.toUpperCase()!=="FORM")throw"$.pjax.submit requires a form element";var s={type:(o.attr("method")||"GET").toUpperCase(),url:o.attr("action"),container:o.attr("data-pjax"),target:i};if(s.type!=="GET"&&window.FormData!==undefined){s.data=new FormData(i);s.processData=false;s.contentType=false}else{if(o.find(":file").length){return}s.data=o.serializeArray()}n(t.extend({},s,r));e.preventDefault()}function n(e){e=t.extend(true,{},t.ajaxSettings,n.defaults,e);if(t.isFunction(e.url)){e.url=e.url()}var a=m(e.url).hash;var r=t.type(e.container);if(r!=="string"){throw"expected string value for 'container' option; got "+r}var i=e.context=t(e.container);if(!i.length){throw"the container selector '"+e.container+"' did not match anything"}if(!e.data)e.data={};if(t.isArray(e.data)){e.data.push({name:"_pjax",value:e.container})}else{e.data._pjax=e.container}function s(a,r,n){if(!n)n={};n.relatedTarget=e.target;var o=t.Event(a,n);i.trigger(o,r);return!o.isDefaultPrevented()}var c;e.beforeSend=function(t,r){if(r.type!=="GET"){r.timeout=0}t.setRequestHeader("X-PJAX","true");t.setRequestHeader("X-PJAX-Container",e.container);if(!s("pjax:beforeSend",[t,r]))return false;if(r.timeout>0){c=setTimeout(function(){if(s("pjax:timeout",[t,e]))t.abort("timeout")},r.timeout);r.timeout=0}var n=m(r.url);if(a)n.hash=a;e.requestUrl=v(n)};e.complete=function(a,r){if(c)clearTimeout(c);s("pjax:complete",[a,r,e]);s("pjax:end",[a,e]);t('head > script[src^="//jsfiddle.net"]').each(function(){t('div[data-src="'+t(this).attr("src")+'"]').after(t(this))})};e.error=function(t,a,r){var n=w("",t,e);var i=s("pjax:error",[t,a,r,e]);if(e.type=="GET"&&a!=="abort"&&i){o(n.url)}};e.success=function(r,c,u){var f=n.state;var l=typeof t.pjax.defaults.version==="function"?t.pjax.defaults.version():t.pjax.defaults.version;var p=u.getResponseHeader("X-PJAX-Version");var h=w(r,u,e);var v=m(h.url);if(a){v.hash=a;h.url=v.href}if(l&&p&&l!==p){o(h.url);return}if(!h.contents){o(h.url);return}n.state={id:e.id||d(),url:h.url,title:h.title,container:e.container,fragment:e.fragment,timeout:e.timeout};if(e.push||e.replace){window.history.replaceState(n.state,h.title,h.url)}var x=t.contains(i,document.activeElement);if(x){try{document.activeElement.blur()}catch(g){}}if(h.title)document.title=h.title;s("pjax:beforeReplace",[h.contents,e],{state:n.state,previousState:f});i.html(h.contents);var y=i.find("input[autofocus], textarea[autofocus]").last()[0];if(y&&document.activeElement!==y){y.focus()}b(h.scripts);var j=e.scrollTo;if(a){var T=decodeURIComponent(a.slice(1));var E=document.getElementById(T)||document.getElementsByName(T)[0];if(E)j=t(E).offset().top}if(typeof j=="number")t(window).scrollTop(j);s("pjax:success",[r,c,u,e])};if(!n.state){n.state={id:d(),url:window.location.href,title:document.title,container:e.container,fragment:e.fragment,timeout:e.timeout};window.history.replaceState(n.state,document.title)}p(n.xhr);n.options=e;var u=n.xhr=t.ajax(e);if(u.readyState>0){if(e.push&&!e.replace){P(n.state.id,[e.container,h(i)]);window.history.pushState(null,"",e.requestUrl)}s("pjax:start",[u,e]);s("pjax:send",[u,e])}return n.xhr}function i(e,a){var r={url:window.location.href,push:false,replace:true,scrollTo:false};return n(t.extend(r,g(e,a)))}function o(t){window.history.replaceState(null,"",n.state.url);window.location.replace(t)}var s=true;var c=window.location.href;var u=window.history.state;if(u&&u.container){n.state=u}if("state"in window.history){s=false}function f(e){if(!s){p(n.xhr)}var a=n.state;var r=e.state;var i;if(r&&r.container){if(s&&c==r.url)return;if(a){if(a.id===r.id)return;i=a.id<r.id?"forward":"back"}var u=T[r.id]||[];var f=u[0]||r.container;var l=t(f),d=u[1];if(l.length){if(a){C(i,a.id,[f,h(l)])}var v=t.Event("pjax:popstate",{state:r,direction:i});l.trigger(v);var m={id:r.id,url:r.url,container:f,push:false,fragment:r.fragment,timeout:r.timeout,scrollTo:false};if(d){l.trigger("pjax:start",[null,m]);n.state=r;if(r.title)document.title=r.title;var x=t.Event("pjax:beforeReplace",{state:r,previousState:a});l.trigger(x,[d,m]);l.html(d);l.trigger("pjax:end",[null,m]);t('head > script[src^="//jsfiddle.net"]').each(function(){t('div[data-src="'+t(this).attr("src")+'"]').after(t(this))})}else{n(m)}l[0].offsetHeight}else{o(location.href)}}s=false}function l(e){var a=t.isFunction(e.url)?e.url():e.url,r=e.type?e.type.toUpperCase():"GET";var n=t("<form>",{method:r==="GET"?"GET":"POST",action:a,style:"display:none"});if(r!=="GET"&&r!=="POST"){n.append(t("<input>",{type:"hidden",name:"_method",value:r.toLowerCase()}))}var i=e.data;if(typeof i==="string"){t.each(i.split("&"),function(e,a){var r=a.split("=");n.append(t("<input>",{type:"hidden",name:r[0],value:r[1]}))})}else if(t.isArray(i)){t.each(i,function(e,a){n.append(t("<input>",{type:"hidden",name:a.name,value:a.value}))})}else if(typeof i==="object"){var o;for(o in i)n.append(t("<input>",{type:"hidden",name:o,value:i[o]}))}t(document.body).append(n);n.submit()}function p(e){if(e&&e.readyState<4){e.onreadystatechange=t.noop;e.abort()}}function d(){return(new Date).getTime()}function h(e){var a=e.clone();a.find("script").each(function(){if(!this.src)t._data(this,"globalEval",false)});return a.contents()}function v(t){t.search=t.search.replace(/([?&])(_pjax|_)=[^&]*/g,"").replace(/^&/,"");return t.href.replace(/\?($|#)/,"$1")}function m(t){var e=document.createElement("a");e.href=t;return e}function x(t){return t.href.replace(/#.*/,"")}function g(e,a){if(e&&a){a=t.extend({},a);a.container=e;return a}else if(t.isPlainObject(e)){return e}else{return{container:e}}}function y(t,e){return t.filter(e).add(t.find(e))}function j(e){return t.parseHTML(e,document,true)}function w(e,a,r){var n={},i=/<html/i.test(e);var o=a.getResponseHeader("X-PJAX-URL");n.url=o?v(m(o)):r.requestUrl;var s,c;if(i){c=t(j(e.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]));var u=e.match(/<head[^>]*>([\s\S.]*)<\/head>/i);s=u!=null?t(j(u[0])):c}else{s=c=t(j(e))}if(c.length===0)return n;n.title=y(s,"title").last().text();if(r.fragment){var f=c;if(r.fragment!=="body"){f=y(f,r.fragment).first()}if(f.length){n.contents=r.fragment==="body"?f:f.contents();if(!n.title)n.title=f.attr("title")||f.data("title")}}else if(!i){n.contents=c}if(n.contents){n.contents=n.contents.not(function(){return t(this).is("title")});n.contents.find("title").remove();n.scripts=y(n.contents,"script[src]");n.scripts.each(function(){t(this).after('<div style="display: none" data-src="'+t(this).attr("src")+'"></div>');t(this).remove()});n.contents=n.contents.not(n.scripts)}if(n.title)n.title=t.trim(n.title);return n}function b(e){if(!e)return;var a=t("script[src]");e.each(function(){var e=this.src;var r=a.filter(function(){return this.src===e});if(r.length)return;var n=document.createElement("script");var i=t(this).attr("type");if(i)n.type=i;n.src=t(this).attr("src");document.head.appendChild(n)})}var T={};var E=[];var S=[];function P(t,e){T[t]=e;S.push(t);A(E,0);A(S,n.defaults.maxCacheLength)}function C(t,e,a){var r,i;T[e]=a;if(t==="forward"){r=S;i=E}else{r=E;i=S}r.push(e);e=i.pop();if(e)delete T[e];A(r,n.defaults.maxCacheLength)}function A(t,e){while(t.length>e)delete T[t.shift()]}function D(){return t("meta").filter(function(){var e=t(this).attr("http-equiv");return e&&e.toUpperCase()==="X-PJAX-VERSION"}).attr("content")}function R(){t.fn.pjax=e;t.pjax=n;t.pjax.enable=t.noop;t.pjax.disable=U;t.pjax.click=a;t.pjax.submit=r;t.pjax.reload=i;t.pjax.defaults={timeout:650,push:true,replace:false,type:"GET",dataType:"html",scrollTo:0,maxCacheLength:20,version:D};t(window).on("popstate.pjax",f)}function U(){t.fn.pjax=function(){return this};t.pjax=l;t.pjax.enable=R;t.pjax.disable=t.noop;t.pjax.click=t.noop;t.pjax.submit=t.noop;t.pjax.reload=function(){window.location.reload()};t(window).off("popstate.pjax",f)}if(t.event.props&&t.inArray("state",t.event.props)<0){t.event.props.push("state")}else if(!("state"in t.Event.prototype)){t.event.addProp("state")}t.support.pjax=window.history&&window.history.pushState&&window.history.replaceState&&!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/);if(t.support.pjax){R()}else{U()}})(jQuery);
//rebuild by neat 