// build time:Tue Dec 31 2019 18:32:49 GMT+0800 (GMT+08:00)
if(!("boxShadow"in document.body.style)){document.body.setAttribute("class","noBoxShadow")}document.body.addEventListener("click",function(e){var t=e.target;if(t.tagName==="INPUT"&&t.getAttribute("class").indexOf("liga")===-1){t.select()}});(function(){var e=document.getElementById("fontSize"),t=document.getElementById("testDrive"),n=document.getElementById("testText");function o(){t.innerHTML=n.value||String.fromCharCode(160);if(window.icomoonLiga){window.icomoonLiga(t)}}function i(){t.style.fontSize=e.value+"px"}e.addEventListener("change",i,false);n.addEventListener("input",o,false);n.addEventListener("change",o,false);i()})();
//rebuild by neat 