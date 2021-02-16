// ==UserScript==
// @name         去除樱花动漫广告
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Pink-0505
// @match        http://www.imomoe.ai/*
// @grant        none
// @license      AGPL-3.0
// @icon         http://www.imomoe.ai/favicon.ico
// ==/UserScript==

(function () {
  'use strict';
  // 方式一
  // document.querySelector('div#player_pause').remove()
  let interval = setInterval(function () {
    if (!dp) return
    clearInterval(interval)
    dp.on('pause', () => h2_remove())
  }, 300)
  // 方式二
  let style = document.createElement('style')
  style.setAttribute('type', 'text/css')
  style.innerHTML = `#HMRichBox, {display: none !important; visibility: hidden !important;}`
  document.querySelector('head').appendChild(style);
})()
