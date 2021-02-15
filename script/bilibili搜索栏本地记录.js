// ==UserScript==
// @name          哔哩哔哩搜索栏本地记录
// @namespace     www.bilibili.com
// @version       0.1
// @description   哔哩哔哩搜索栏本地记录
// @author        Pink-0505
// @match         https://www.bilibili.com/*
// @grant         GM_setValue
// @grant         GM_getValue
// @license       AGPL-3.0
// @icon          https://www.bilibili.com/favicon.ico
// ==/UserScript==
(function () {
  'use strict'
  let interval = setInterval(function () {
    let input_ = document.querySelector('#nav_searchform > input')
    if (!input_) return
    clearInterval(interval)
    input_.addEventListener('change', function () {
      GM_setValue('input_search', input_.value)
    })
    setTimeout(function () {
      input_.setAttribute('placeholder', GM_getValue('input_search', '默认的文字'))
    }, 200)
  }, 100)
})()
