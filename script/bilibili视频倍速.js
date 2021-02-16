// ==UserScript==
// @name          哔哩哔哩视频倍速
// @namespace     www.bilibili.com
// @version       0.1
// @description   哔哩哔哩视频倍速
// @author        Pink-0505
// @match         https://www.bilibili.com/video/*
// @require       https://code.jquery.com/jquery-3.5.1.min.js
// @grant         none
// @license       AGPL-3.0
// @icon          https://www.bilibili.com/favicon.ico
// ==/UserScript==
(function () {
  'use strict'
  let listClass = 'bilibili-player-video-btn-speed-menu-list'
  let activeClass = 'bilibili-player-active'
  let $video = $('video')
  let $button = $('.bilibili-player-video-btn-speed-name')
  let interval = setInterval(function () {
    let $ul = $('.bilibili-player-video-btn-speed-menu')
    if (!$ul[0]) return
    clearInterval(interval)
    let $li1 = $(`.${listClass}:[data-value^=2]`)
    for (let speed of ['1.75', '2.0', '2.5', '3.0']) {
      let $li = $li1.clone(true).attr('data-value', speed).html(`${speed}x`)
      $li.on('click', function () {
        $(`.${listClass}.${activeClass}`).attr('class', `${listClass}`)
        $(this).attr('class', `${listClass} ${activeClass}`)
        $button.html(`${speed}x`)
        $video[0].playbackRate = Number(speed)
      })
      $ul.prepend($li)
    }
    $li1.remove()
  }, 3000)
  // 原生js
  // const video = document.querySelector('video')
  // let interval = setInterval(function () {
  //   let ul = document.querySelector('.bilibili-player-video-btn-speed-menu')
  //   if (!ul) return
  //   clearInterval(interval)
  //   ul.innerHTML = ''
  //   for (let speed of ['2.5', '2.0', '1.75', '1.5', '1.25', '1.0', '0.75', '0.5']) {
  //     let li = document.createElement('li')
  //     let classValue = 'bilibili-player-video-btn-speed-menu-list'
  //     classValue += speed === '1.0'? ' bilibili-player-active': ''
  //     li.setAttribute('class', classValue)
  //     li.setAttribute('data-value', speed)
  //     li.innerHTML = speed + 'x'
  //     li.addEventListener('click', function () {
  //       let select_li = document.querySelector('.bilibili-player-video-btn-speed-menu-list.bilibili-player-active')
  //       select_li.setAttribute('class', 'bilibili-player-video-btn-speed-menu-list')
  //       this.setAttribute('class', 'bilibili-player-video-btn-speed-menu-list bilibili-player-active')
  //       video.playbackRate = Number(this.getAttribute('data-value'))
  //       let btnValue = this.getAttribute('data-value') === '1.0'? '倍速': this.getAttribute('data-value') + 'x'
  //       document.querySelector('.bilibili-player-video-btn-speed-name').innerHTML = btnValue
  //     })
  //     ul.appendChild(li)
  //   }
  // }, 100)
})()
// <li class="bilibili-player-video-btn-speed-menu-list bilibili-player-active" data-value="1">1.0x</li>
