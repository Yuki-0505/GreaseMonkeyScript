// ==UserScript==
// @name          下载图片
// @namespace     www.bilibili.com
// @version       0.1
// @description   description
// @author        Pink-0505
// @match         https://www.bilibili.com/*
// @grant         GM_download
// @connect       example.com
// @require       https://code.jquery.com/jquery-3.5.1.min.js
// @license       AGPL-3.0
// @icon          https://www.bilibili.com/favicon.ico
// ==/UserScript==
;(function () {
  'use strict'
  GM_download('https://i0.hdslb.com/bfs/face/58e44d873e301b30a8ccaedcfb615d381c18bc6d.jpg@72w_72h_1c.webp', '头像')
})()
