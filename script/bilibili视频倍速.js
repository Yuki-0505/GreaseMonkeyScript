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
  const video = document.querySelector('video')
  let interval = setInterval(function () {
    let ul = document.querySelector('.bilibili-player-video-btn-speed-menu')
    let li = document.querySelector('.bilibili-player-video-btn-speed-menu-list')
    if (!ul || !li) return
    clearInterval(interval)
    ul.innerHTML = ''
    let lis = []
    for (let speed of ['4.0', '3.0', '2.5', '2.0', '1.75', '1.5', '1.25', '1.0', '0.75', '0.5']) {
      // let li = document.createElement('li')
      // let classValue = 'bilibili-player-video-btn-speed-menu-list'
      // classValue += speed === '1.0'? ' bilibili-player-active': ''
      // li.setAttribute('class', classValue)
      // li.setAttribute('data-value', speed)
      // li.innerHTML = speed + 'x'
      // li.addEventListener('click', function () {
      //   let select_li = document.querySelector('.bilibili-player-video-btn-speed-menu-list.bilibili-player-active')
      //   select_li.setAttribute('class', 'bilibili-player-video-btn-speed-menu-list')
      //   this.setAttribute('class', 'bilibili-player-video-btn-speed-menu-list bilibili-player-active')
      //   video.playbackRate = Number(this.getAttribute('data-value'))
      //   let btnValue = this.getAttribute('data-value') === '1.0'? '倍速': this.getAttribute('data-value') + 'x'
      //   document.querySelector('.bilibili-player-video-btn-speed-name').innerHTML = btnValue
      // })
      // ul.appendChild(li)
      let li2 = li.cloneNode()
      li2.setAttribute('data-value', speed)
      li2.innerHTML = speed + 'x'
      ul.appendChild(li2)
    }
  }, 100)
})()
// <li class="bilibili-player-video-btn-speed-menu-list bilibili-player-active" data-value="1">1.0x</li>
