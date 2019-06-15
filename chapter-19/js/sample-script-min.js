/* 这是与sample-script.js中相同的脚本，但我已经用uglifyjs缩小了它。 */

(function (e, c) { var d = c.getElementById("choices"), b = c.getElementById("other-description"); d && b && (b.disabled = !0, d.onclick = function (a) { a || (a = e.event); a = a.target || a.srcElement; "radio" === a.getAttribute("type") && ("other" !== a.id ? b.disabled = !0 : (b.disabled = !1, b.focus())) }) })(window, document);