// ==UserScript==
// @name          百度文库复制
// @namespace     wenku.baidu.com
// @version       0.1
// @description   description
// @author        Pink-0505
// @match         https://wenku.baidu.com/*
// @grant         GM_setClipboard
// @require       https://code.jquery.com/jquery-3.5.1.min.js
// @license       AGPL-3.0
// @connect       wenku.baidu.com
// @icon          https://wenku.baidu.com/favicon.ico
// ==/UserScript==
;
(function () {
  'use strict'
  $(function () {
    let i = 0
    setInterval(function () {
      let pages = document.querySelectorAll('.ie-fix')
      console.log(pages)
      for (let len = pages.length; i < len; i++) {
        let $text = $(pages[i])
        $text.on('click', function () {
          let array = []
          $text.children().each((index, element) => {
            array.push(element.innerHTML)
          })
          let str = array.join('')
          GM_setClipboard(str)
          console.log(str)
        })
      }
    }, 1500)
  })
})()
