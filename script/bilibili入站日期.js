// ==UserScript==
// @name          哔哩哔哩入站日期
// @namespace     www.bilibili.com
// @version       0.1
// @description   description
// @author        Pink-0505
// @match         https://space.bilibili.com/*
// @grant         none
// @connect       example.com
// @require       https://code.jquery.com/jquery-3.5.1.min.js
// @license       AGPL-3.0
// @icon          https://www.bilibili.com/favicon.ico
// ==/UserScript==
;
(function () {
  'use strict'
  Date.prototype.format = function (fmt) {
    let o = {
      "M+": this.getMonth() + 1,
      "d+": this.getDate(),
      "h+": this.getHours(),
      "m+": this.getMinutes(),
      "s+": this.getSeconds(),
      "q+": Math.floor((this.getMonth() + 3) / 3),
      "S": this.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
    }
    return fmt;
  }
  let url = 'https://member.bilibili.com/x2/creative/h5/calendar/event?ts=0'
  $(function () {
    $.ajax({
      url: url,
      xhrFields: {
        //允许跨域带Cookie
        withCredentials: true
      },
      type: 'get',
      dataType: 'json',
      success: function (result) {
        let joinTime = result.data.pfs.profile.jointime
        let date = new Date()
        date.setTime(joinTime * 1000)
        // let localeString = date.toLocaleString()
        let localeString = date.format('yyyy-MM-dd hh:mm:ss')
        console.log(date.format('yyyy-MM-dd hh:mm:ss'))
        let $time = $(`<div class="item uid"><span class=""><b>&nbsp入站日期：<b/></span><span class="text"><b>${localeString}</b></span></div>`)
        let interval = setInterval(function () {
          let $row = $('#page-index .col-2 .user .row')
          if (!$row[0]) return
          clearInterval(interval)
          $row.height('74px')
          $row.append($('<br/>'))
          $row.append($time)
        }, 300)
      }
    })
  })
})()
