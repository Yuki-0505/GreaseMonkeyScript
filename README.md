# GreaseMonkeyScript

```javascript
// ==UserScript==
// @name         New UserScript                               // 名称
// @namespace    http://tampermonkey.net/                     // 命名空间
// @version      0.1                                          // 版本号
// @description  try to take over the world!                  // 描述
// @author       Pink-0505                                    // 作者
// @match        http://www.bilibili.com/*                    // 匹配网站
// @grant        none                                         // 特殊权限（调用GM_开头的函数需要先申请权限）
// @require      https://code.jquery.com/jquery-2.1.4.min.js  // 引入第三方库
// @include      /https://example.com/*/                      // 和match相似，支持正则
// @connect      example.com                                  // 需要跨域资源时，提前声明
// @license      AGPL-3.0                                     // 脚本授权许可信息
// @icon         https://www.bilibili.com/favicon.ico         // 脚本图标
// ==/UserScript==

(function () {
    'use strict'

    // Your code here...
})()
```
