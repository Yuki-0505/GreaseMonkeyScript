// ==UserScript==
// @name          哔哩哔哩表情包
// @namespace     www.bilibili.com
// @version       0.1
// @description   哔哩哔哩表情包
// @author        Yuki-0505
// @match         https://message.bilibili.com/*/*
// @grant         GM_download
// @require       https://code.jquery.com/jquery-3.5.1.min.js
// @license       AGPL-3.0
// @icon          https://message.bilibili.com/favicon.ico
// ==/UserScript==
;
(function () {
  'use strict'
  $.ajax({
    type: 'get',
    url: 'https://api.bilibili.com/x/emote/user/panel/web?business=reply',
    dataType: 'json',
    xhrFields: {
      withCredentials: true
    },
    success: function (response) {
      let count = 0
      for (let item of response.data.packages) {
        if (item.text === '颜文字') continue
        for (let emt of item.emote) {
          setTimeout(function (count) {
            console.log(count, emt.text)
            GM_download(emt.url, emt.text.slice(1, -1))
          }, count * 120, count)
          count++
        }
      }
    }
  })
})()
