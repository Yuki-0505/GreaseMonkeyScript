// ==UserScript==
// @name         去除樱花动漫广告
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Pink-0505
// @match        http://www.imomoe.ai/*
// @grant        GM_addStyle
// @license      AGPL-3.0
// @icon         http://www.imomoe.ai/favicon.ico
// ==/UserScript==
;(function () {
  'use strict';
  // 方式一
  // document.querySelector('#player_pause').remove()
  // 方式二
  GM_addStyle(`
  #HMRichBox, #player_pause {
    display: none !important;
    visibility: hidden !important;
  }
  `)
})()
