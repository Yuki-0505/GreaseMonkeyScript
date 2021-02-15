// ==UserScript==
// @name          哔哩哔哩视频倍速
// @namespace     www.bilibili.com
// @version       0.1
// @description   哔哩哔哩视频倍速
// @author        Pink-0505
// @match         https://www.bilibili.com/*
// @grant         none
// @license       AGPL-3.0
// @icon          https://www.bilibili.com/favicon.ico
// ==/UserScript==
(function () {
  'use strict'
  let video = document.querySelector('video')
  let interval = setInterval(function () {
    let ul = document.querySelector('.bilibili-player-video-btn-speed-menu')
    if (!ul) return
    clearInterval(interval)
    for (let speed of ['1.75', '2.0', '2.5', '3.0', '4.0']) {
      let li = document.createElement('li')
      li.setAttribute('class', 'bilibili-player-video-btn-speed-menu-list')
      li.setAttribute('data-value', Number(speed))
      li.innerHTML = speed + 'x'
      li.addEventListener('click', function () {
        let lis = [...document.querySelectorAll('.bilibili-player-video-btn-speed-menu-list')]
        lis.forEach(item => item.setAttribute('class', 'bilibili-player-video-btn-speed-menu-list'))
        this.setAttribute('class', 'bilibili-player-video-btn-speed-menu-list bilibili-player-active')
        video.playbackRate = this.getAttribute('data-value')
      })
      ul.appendChild(li)
    }
  }, 100)
})()
