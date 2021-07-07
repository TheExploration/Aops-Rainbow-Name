// ==UserScript==
// @name         Aops Rainbow Username
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Make yourself look cool!
// @author       Edit
// @match        https://artofproblemsolving.com/classroom/room/*
// @icon         https://www.google.com/s2/favicons?domain=artofproblemsolving.com
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
   var head, style;
   head = document.getElementsByTagName('head')[0];
   if (!head) { return; }
   style = document.createElement('style');
   style.type = 'text/css';
   style.innerHTML = css;
   head.appendChild(style);
}


addGlobalStyle('.shared-ui_username__30LVr.shared-ui_myself__-Xs7Z.shared-ui_green__3rSfc { animation: colorRotate 2s linear 0s infinite; font-size: 16px; }');
addGlobalStyle('.shared-ui_username__30LVr.shared-ui_myself__-Xs7Z.shared-ui_orange__fKaSB { animation: colorRotate 2s linear 0s infinite; font-size: 16px; }');
addGlobalStyle('.shared-ui_username__30LVr.shared-ui_myself__-Xs7Z.shared-ui_pink__1KtZC { animation: colorRotate 2s linear 0s infinite; font-size: 16px; }');
addGlobalStyle('.shared-ui_username__30LVr.shared-ui_myself__-Xs7Z.shared-ui_purple__Y4ARx { animation: colorRotate 2s linear 0s infinite; font-size: 16px; }');
addGlobalStyle('.shared-ui_username__30LVr.shared-ui_myself__-Xs7Z.shared-ui_blue__1Y6GZ { animation: colorRotate 2s linear 0s infinite; font-size: 16px; }');


addGlobalStyle('@keyframes colorRotate { from {  color: #6666ff; } 10% {   color: #0099ff; } 50%  {   color: #00ff00;  }  75% {    color: #ff3399;  }  100% {   color: #6666ff;  }');

