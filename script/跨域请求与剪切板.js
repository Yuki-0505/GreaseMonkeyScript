// ==UserScript==
// @name          跨域请求与剪切板
// @namespace     cn.bing.com
// @version       0.1
// @description   description
// @author        Pink-0505
// @match         https://cn.bing.com/*
// @grant         GM_xmlhttpRequest
// @grant         GM_setClipboard
// @grant         GM_getClipboard
// @connect       member.bilibili.com
// @license       AGPL-3.0
// @icon          https://cn.bing.com/favicon.ico
// ==/UserScript==
(function () {
  'use strict'
  GM_xmlhttpRequest({
    method: 'get',
    dataType: 'json',
    url: 'https://member.bilibili.com/x2/creative/h5/calendar/event?ts=0',
    onload: function (e) {
      console.log(JSON.parse(e.response))
      GM_setClipboard(JSON.parse(e.response).data.pfs.profile.sign)
    }
  })
})()
