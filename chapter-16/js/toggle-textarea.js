/*
  *如果访客选择Other这个radio按钮，文本区域已启用光标放在里面，所以访问者可以开始输入。
  *选择任何剩余的单选按钮禁用文本区域。
  *
  *下面是更详细的解释：
  *脚本将行为应用于DIV中id=“choices”的单选按钮。
  *如果访问者选择了除
  *使用id=“Other”，id=“Other Description”的文本区域是
  *已禁用。如果访问者选择其他单选按钮，则文本区域
  *已启用，并将光标放置在其中，以便访问者可以开始键入。
  */

  (function (window, document) {
    'use strict';

    // 找到id=“choices”div和其他单选按钮下面的文本区域
    // 并将它们赋给变量，以便对它们进行操作
    var choices = document.getElementById('choices'),
    textarea = document.getElementById('other-description');

    // 如果HTML中不存在单选按钮和文本区域，则不执行任何操作
    if (!choices || !textarea) {
      return;
    }

    // 向单选按钮添加行为
    choices.onclick = function(e) {
      var target, e;

      // 检查IE7或之前版本
      if (!e) {
        e = window.event;
      }

      // 现代浏览器和IE7或更早版本的事件目标
      target = e.target || e.srcElement;

      // 根据所选的单选按钮切换文本区域
      if (target.getAttribute('type') == 'radio') {
        if (target.id != 'other') {
          textarea.disabled = true; // 禁用文本区域
        } else { // Visitor selected Other
          textarea.disabled = false;  // 启用文本区域
          textarea.focus();         // 将光标放在文本区域
        }
      }
    };
  }(window, document));