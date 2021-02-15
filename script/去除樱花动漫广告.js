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
  // document.querySelector('#HMRichBox').remove()
  // 方式二
  let HMRichBoxStyle = document.createElement('style')
  HMRichBoxStyle.setAttribute('type', 'text/css')
  HMRichBoxStyle.innerHTML = `#HMRichBox {display: none !important;}`
  document.querySelector('head').appendChild(HMRichBoxStyle);
})()
