 /*
  * # Semantic UI - 1.11.8
  * https://github.com/Semantic-Org/Semantic-UI
  * http://www.semantic-ui.com/
  *
  * Copyright 2014 Contributors
  * Released under the MIT license
  * http://opensource.org/licenses/MIT
  *
  */
 !function (e, t, n, i) {
     e.site = e.fn.site = function (o) {
         var a, r, s = (new Date).getTime()
             , c = []
             , l = arguments[0]
             , u = "string" == typeof l
             , d = [].slice.call(arguments, 1)
             , f = e.isPlainObject(o) ? e.extend(!0, {}, e.site.settings, o) : e.extend({}, e.site.settings)
             , m = f.namespace
             , g = f.error
             , p = "module-" + m
             , v = e(n)
             , h = v
             , b = this
             , y = h.data(p);
         return a = {
             initialize: function () {
                 a.instantiate()
             }
             , instantiate: function () {
                 a.verbose("Storing instance of site", a), y = a, h.data(p, a)
             }
             , normalize: function () {
                 a.fix.console(), a.fix.requestAnimationFrame()
             }
             , fix: {
                 console: function () {
                     a.debug("Normalizing window.console"), (console === i || console.log === i) && (a.verbose("Console not available, normalizing events"), a.disable.console()), ("undefined" == typeof console.group || "undefined" == typeof console.groupEnd || "undefined" == typeof console.groupCollapsed) && (a.verbose("Console group not available, normalizing events"), t.console.group = function () {}, t.console.groupEnd = function () {}, t.console.groupCollapsed = function () {}), "undefined" == typeof console.markTimeline && (a.verbose("Mark timeline not available, normalizing events"), t.console.markTimeline = function () {})
                 }
                 , consoleClear: function () {
                     a.debug("Disabling programmatic console clearing"), t.console.clear = function () {}
                 }
                 , requestAnimationFrame: function () {
                     a.debug("Normalizing requestAnimationFrame"), t.requestAnimationFrame === i && (a.debug("RequestAnimationFrame not available, normailizing event"), t.requestAnimationFrame = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                         setTimeout(e, 0)
                     })
                 }
             }
             , moduleExists: function (t) {
                 return e.fn[t] !== i && e.fn[t].settings !== i
             }
             , enabled: {
                 modules: function (t) {
                     var n = [];
                     return t = t || f.modules, e.each(t, function (e, t) {
                         a.moduleExists(t) && n.push(t)
                     }), n
                 }
             }
             , disabled: {
                 modules: function (t) {
                     var n = [];
                     return t = t || f.modules, e.each(t, function (e, t) {
                         a.moduleExists(t) || n.push(t)
                     }), n
                 }
             }
             , change: {
                 setting: function (t, n, o, r) {
                     o = "string" == typeof o ? "all" === o ? f.modules : [o] : o || f.modules, r = r !== i ? r : !0, e.each(o, function (i, o) {
                         var s, c = a.moduleExists(o) ? e.fn[o].settings.namespace || !1 : !0;
                         a.moduleExists(o) && (a.verbose("Changing default setting", t, n, o), e.fn[o].settings[t] = n, r && c && (s = e(":data(module-" + c + ")"), s.length > 0 && (a.verbose("Modifying existing settings", s), s[o]("setting", t, n))))
                     })
                 }
                 , settings: function (t, n, o) {
                     n = "string" == typeof n ? [n] : n || f.modules, o = o !== i ? o : !0, e.each(n, function (n, i) {
                         var r;
                         a.moduleExists(i) && (a.verbose("Changing default setting", t, i), e.extend(!0, e.fn[i].settings, t), o && m && (r = e(":data(module-" + m + ")"), r.length > 0 && (a.verbose("Modifying existing settings", r), r[i]("setting", t))))
                     })
                 }
             }
             , enable: {
                 console: function () {
                     a.console(!0)
                 }
                 , debug: function (e, t) {
                     e = e || f.modules, a.debug("Enabling debug for modules", e), a.change.setting("debug", !0, e, t)
                 }
                 , verbose: function (e, t) {
                     e = e || f.modules, a.debug("Enabling verbose debug for modules", e), a.change.setting("verbose", !0, e, t)
                 }
             }
             , disable: {
                 console: function () {
                     a.console(!1)
                 }
                 , debug: function (e, t) {
                     e = e || f.modules, a.debug("Disabling debug for modules", e), a.change.setting("debug", !1, e, t)
                 }
                 , verbose: function (e, t) {
                     e = e || f.modules, a.debug("Disabling verbose debug for modules", e), a.change.setting("verbose", !1, e, t)
                 }
             }
             , console: function (e) {
                 if (e) {
                     if (y.cache.console === i) return void a.error(g.console);
                     a.debug("Restoring console function"), t.console = y.cache.console
                 }
                 else a.debug("Disabling console function"), y.cache.console = t.console, t.console = {
                     clear: function () {}
                     , error: function () {}
                     , group: function () {}
                     , groupCollapsed: function () {}
                     , groupEnd: function () {}
                     , info: function () {}
                     , log: function () {}
                     , markTimeline: function () {}
                     , warn: function () {}
                 }
             }
             , destroy: function () {
                 a.verbose("Destroying previous site for", h), h.removeData(p)
             }
             , cache: {}
             , setting: function (t, n) {
                 if (e.isPlainObject(t)) e.extend(!0, f, t);
                 else {
                     if (n === i) return f[t];
                     f[t] = n
                 }
             }
             , internal: function (t, n) {
                 if (e.isPlainObject(t)) e.extend(!0, a, t);
                 else {
                     if (n === i) return a[t];
                     a[t] = n
                 }
             }
             , debug: function () {
                 f.debug && (f.performance ? a.performance.log(arguments) : (a.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), a.debug.apply(console, arguments)))
             }
             , verbose: function () {
                 f.verbose && f.debug && (f.performance ? a.performance.log(arguments) : (a.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), a.verbose.apply(console, arguments)))
             }
             , error: function () {
                 a.error = Function.prototype.bind.call(console.error, console, f.name + ":"), a.error.apply(console, arguments)
             }
             , performance: {
                 log: function (e) {
                     var t, n, i;
                     f.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                         Element: b
                         , Name: e[0]
                         , Arguments: [].slice.call(e, 1) || ""
                         , "Execution Time": n
                     })), clearTimeout(a.performance.timer), a.performance.timer = setTimeout(a.performance.display, 100)
                 }
                 , display: function () {
                     var t = f.name + ":"
                         , n = 0;
                     s = !1, clearTimeout(a.performance.timer), e.each(c, function (e, t) {
                         n += t["Execution Time"]
                     }), t += " " + n + "ms", (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
                         console.log(t.Name + ": " + t["Execution Time"] + "ms")
                     }), console.groupEnd()), c = []
                 }
             }
             , invoke: function (t, n, o) {
                 var s, c, l, u = y;
                 return n = n || d, o = b || o, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function (n, o) {
                     var r = n != s ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                     if (e.isPlainObject(u[r]) && n != s) u = u[r];
                     else {
                         if (u[r] !== i) return c = u[r], !1;
                         if (!e.isPlainObject(u[o]) || n == s) return u[o] !== i ? (c = u[o], !1) : (a.error(g.method, t), !1);
                         u = u[o]
                     }
                 })), e.isFunction(c) ? l = c.apply(o, n) : c !== i && (l = c), e.isArray(r) ? r.push(l) : r !== i ? r = [r, l] : l !== i && (r = l), c
             }
         }, u ? (y === i && a.initialize(), a.invoke(l)) : (y !== i && a.destroy(), a.initialize()), r !== i ? r : this
     }, e.site.settings = {
         name: "Site"
         , namespace: "site"
         , error: {
             console: "Console cannot be restored, most likely it was overwritten outside of module"
             , method: "The method you called is not defined."
         }
         , debug: !1
         , verbose: !0
         , performance: !0
         , modules: ["accordion", "api", "checkbox", "dimmer", "dropdown", "form", "modal", "nag", "popup", "rating", "shape", "sidebar", "state", "sticky", "tab", "transition", "video", "visit", "visibility"]
         , siteNamespace: "site"
         , namespaceStub: {
             cache: {}
             , config: {}
             , sections: {}
             , section: {}
             , utilities: {}
         }
     }, e.extend(e.expr[":"], {
         data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
             return function (n) {
                 return !!e.data(n, t)
             }
         }) : function (t, n, i) {
             return !!e.data(t, i[3])
         }
     })
 }(jQuery, window, document)
 , function (e, t, n, i) {
     "use strict";
     e.fn.form = function (t, o) {
         var a, r = e(this)
             , s = e.extend(!0, {}, e.fn.form.settings, o)
             , c = e.extend({}, e.fn.form.settings.defaults, t)
             , l = s.namespace
             , u = s.metadata
             , d = s.selector
             , f = s.className
             , m = (s.error, "." + l)
             , g = "module-" + l
             , p = r.selector || ""
             , v = (new Date).getTime()
             , h = []
             , b = arguments[0]
             , y = "string" == typeof b
             , x = [].slice.call(arguments, 1);
         return r.each(function () {
             var t, o = e(this)
                 , l = e(this).find(d.field)
                 , w = e(this).find(d.group)
                 , C = e(this).find(d.message)
                 , k = (e(this).find(d.prompt), e(this).find(d.submit))
                 , T = e(this).find(d.clear)
                 , S = e(this).find(d.reset)
                 , A = []
                 , P = !1
                 , E = this
                 , F = o.data(g);
             t = {
                 initialize: function () {
                     t.verbose("Initializing form validation", o, c, s), t.bindEvents(), t.set.defaults(), t.instantiate()
                 }
                 , instantiate: function () {
                     t.verbose("Storing instance of module", t), F = t, o.data(g, t)
                 }
                 , destroy: function () {
                     t.verbose("Destroying previous module", F), t.removeEvents(), o.removeData(g)
                 }
                 , refresh: function () {
                     t.verbose("Refreshing selector cache"), l = o.find(d.field)
                 }
                 , submit: function () {
                     t.verbose("Submitting form", o), o.submit()
                 }
                 , attachEvents: function (n, i) {
                     i = i || "submit", e(n).on("click", function (e) {
                         t[i](), e.preventDefault()
                     })
                 }
                 , bindEvents: function () {
                     s.keyboardShortcuts && l.on("keydown" + m, t.event.field.keydown), o.on("submit" + m, t.validate.form), l.on("blur" + m, t.event.field.blur), t.attachEvents(k, "submit"), t.attachEvents(S, "reset"), t.attachEvents(T, "clear"), l.each(function () {
                         var n = e(this).prop("type")
                             , i = t.get.changeEvent(n);
                         e(this).on(i + m, t.event.field.change)
                     })
                 }
                 , clear: function () {
                     l.each(function () {
                         var n = e(this)
                             , i = n.parent()
                             , o = n.closest(w)
                             , a = o.find(d.prompt)
                             , r = n.data(u.defaultValue) || ""
                             , s = i.is(d.uiCheckbox)
                             , c = i.is(d.uiDropdown)
                             , l = o.hasClass(f.error);
                         l && (t.verbose("Resetting error on field", o), o.removeClass(f.error), a.remove()), c ? (t.verbose("Resetting dropdown value", i, r), i.dropdown("clear")) : s ? i.checkbox("uncheck") : (t.verbose("Resetting field value", n, r), n.val(""))
                     })
                 }
                 , reset: function () {
                     l.each(function () {
                         var n = e(this)
                             , i = n.parent()
                             , o = n.closest(w)
                             , a = o.find(d.prompt)
                             , r = n.data(u.defaultValue) || ""
                             , s = i.is(d.uiCheckbox)
                             , c = i.is(d.uiDropdown)
                             , l = o.hasClass(f.error);
                         l && (t.verbose("Resetting error on field", o), o.removeClass(f.error), a.remove()), c ? (t.verbose("Resetting dropdown value", i, r), i.dropdown("restore defaults")) : s ? (t.verbose("Resetting checkbox value", i, r), i.checkbox(r === !0 ? "check" : "uncheck")) : (t.verbose("Resetting field value", n, r), n.val(r))
                     })
                 }
                 , removeEvents: function () {
                     o.off(m), l.off(m), k.off(m), l.off(m)
                 }
                 , event: {
                     field: {
                         keydown: function (n) {
                             var i = e(this)
                                 , o = n.which
                                 , a = {
                                     enter: 13
                                     , escape: 27
                                 };
                             o == a.escape && (t.verbose("Escape key pressed blurring field"), i.blur()), !n.ctrlKey && o == a.enter && i.is(d.input) && i.not(d.checkbox).length > 0 && (k.addClass(f.pressed), P || (i.one("keyup" + m, t.event.field.keyup), t.submit(), t.debug("Enter pressed on input submitting form")), P = !0)
                         }
                         , keyup: function () {
                             P = !1, k.removeClass(f.pressed)
                         }
                         , blur: function () {
                             var n = e(this)
                                 , i = n.closest(w);
                             i.hasClass(f.error) ? (t.debug("Revalidating field", n, t.get.validation(n)), t.validate.field(t.get.validation(n))) : ("blur" == s.on || "change" == s.on) && t.validate.field(t.get.validation(n))
                         }
                         , change: function () {
                             var n = e(this)
                                 , i = n.closest(w);
                             ("change" == s.on || i.hasClass(f.error) && s.revalidate) && (clearTimeout(t.timer), t.timer = setTimeout(function () {
                                 t.debug("Revalidating field", n, t.get.validation(n)), t.validate.field(t.get.validation(n))
                             }, s.delay))
                         }
                     }
                 }
                 , get: {
                     changeEvent: function (e) {
                         return "checkbox" == e || "radio" == e || "hidden" == e ? "change" : t.get.inputEvent()
                     }
                     , inputEvent: function () {
                         return n.createElement("input").oninput !== i ? "input" : n.createElement("input").onpropertychange !== i ? "propertychange" : "keyup"
                     }
                     , field: function (n) {
                         return t.verbose("Finding field with identifier", n), l.filter("#" + n).length > 0 ? l.filter("#" + n) : l.filter('[name="' + n + '"]').length > 0 ? l.filter('[name="' + n + '"]') : l.filter('[name="' + n + '[]"]').length > 0 ? l.filter('[name="' + n + '[]"]') : l.filter("[data-" + u.validate + '="' + n + '"]').length > 0 ? l.filter("[data-" + u.validate + '="' + n + '"]') : e("<input/>")
                     }
                     , fields: function (n) {
                         var i = e();
                         return e.each(n, function (e, n) {
                             i = i.add(t.get.field(n))
                         }), i
                     }
                     , validation: function (n) {
                         var i;
                         return e.each(c, function (e, o) {
                             t.get.field(o.identifier).get(0) == n.get(0) && (i = o)
                         }), i || !1
                     }
                     , value: function (e) {
                         var n, i = [];
                         return i.push(e), n = t.get.values.call(E, i), n[e]
                     }
                     , values: function (n) {
                         var i = e.isArray(n) ? t.get.fields(n) : l
                             , o = {};
                         return i.each(function (n, i) {
                             var a = e(i)
                                 , r = (a.prop("type"), a.prop("name"))
                                 , s = a.val()
                                 , c = a.is(d.checkbox)
                                 , l = a.is(d.radio)
                                 , u = -1 !== r.indexOf("[]")
                                 , f = c ? a.is(":checked") : !1;
                             if (r)
                                 if (u)
                                     if (r = r.replace("[]", ""), o[r] || (o[r] = []), c) {
                                         if (!f) return t.debug("Omitted unchecked checkbox", a), !0;
                                         o[r].push(s)
                                     }
                                     else o[r].push(s);
                             else if (l) f && (o[r] = s);
                             else if (c) {
                                 if (!f) return t.debug("Omitted unchecked checkbox", a), !0;
                                 o[r] = !0
                             }
                             else o[r] = s
                         }), o
                     }
                 }
                 , has: {
                     field: function (e) {
                         return t.verbose("Checking for existence of a field with identifier", e), l.filter("#" + e).length > 0 ? !0 : l.filter('[name="' + e + '"]').length > 0 ? !0 : l.filter("[data-" + u.validate + '="' + e + '"]').length > 0 ? !0 : !1
                     }
                 }
                 , add: {
                     prompt: function (n, a) {
                         var r = t.get.field(n)
                             , c = r.closest(w)
                             , l = c.children(d.prompt)
                             , u = 0 !== l.length;
                         a = "string" == typeof a ? [a] : a, t.verbose("Adding field error state", n), c.addClass(f.error), s.inline && (u || (l = s.templates.prompt(a), l.appendTo(c)), l.html(a[0]), u ? t.verbose("Inline errors are disabled, no inline error added", n) : s.transition && e.fn.transition !== i && o.transition("is supported") ? (t.verbose("Displaying error with css transition", s.transition), l.transition(s.transition + " in", s.duration)) : (t.verbose("Displaying error with fallback javascript animation"), l.fadeIn(s.duration)))
                     }
                     , errors: function (e) {
                         t.debug("Adding form error messages", e), C.html(s.templates.error(e))
                     }
                 }
                 , remove: {
                     prompt: function (n) {
                         var a = t.get.field(n.identifier)
                             , r = a.closest(w)
                             , c = r.children(d.prompt);
                         r.removeClass(f.error), s.inline && c.is(":visible") && (t.verbose("Removing prompt for field", n), s.transition && e.fn.transition !== i && o.transition("is supported") ? c.transition(s.transition + " out", s.duration, function () {
                             c.remove()
                         }) : c.fadeOut(s.duration, function () {
                             c.remove()
                         }))
                     }
                 }
                 , set: {
                     success: function () {
                         o.removeClass(f.error).addClass(f.success)
                     }
                     , defaults: function () {
                         l.each(function () {
                             var t = e(this)
                                 , n = t.filter(d.checkbox).length > 0
                                 , i = n ? t.is(":checked") : t.val();
                             t.data(u.defaultValue, i)
                         })
                     }
                     , error: function () {
                         o.removeClass(f.success).addClass(f.error)
                     }
                     , value: function (e, n) {
                         var i = {};
                         return i[e] = n, t.set.values.call(E, i)
                     }
                     , values: function (n) {
                         e.isEmptyObject(n) || (e.each(n, function (n, i) {
                             var o, a = t.get.field(n)
                                 , r = a.parent()
                                 , s = e.isArray(i)
                                 , c = r.is(d.uiCheckbox)
                                 , l = r.is(d.uiDropdown)
                                 , u = a.is(d.radio) && c
                                 , f = a.length > 0;
                             f && (s && c ? (t.verbose("Selecting multiple", i, a), r.checkbox("uncheck"), e.each(i, function (e, t) {
                                 o = a.filter('[value="' + t + '"]'), r = o.parent(), o.length > 0 && r.checkbox("check")
                             })) : u ? (t.verbose("Selecting radio value", i, a), a.filter('[value="' + i + '"]').parent(d.uiCheckbox).checkbox("check")) : c ? (t.verbose("Setting checkbox value", i, r), r.checkbox(i === !0 ? "check" : "uncheck")) : l ? (t.verbose("Setting dropdown value", i, r), r.dropdown("set selected", i)) : (t.verbose("Setting field value", i, a), a.val(i)))
                         }), t.validate.form())
                     }
                 }
                 , validate: {
                     form: function (n) {
                         var a = !0;
                         return P ? !1 : (A = [], e.each(c, function (e, n) {
                             t.validate.field(n) || (a = !1)
                         }), a ? (t.debug("Form has no validation errors, submitting"), t.set.success(), s.onSuccess.call(E, n)) : (t.debug("Form has errors"), t.set.error(), s.inline || t.add.errors(A), o.data("moduleApi") !== i && n.stopImmediatePropagation(), s.onFailure.call(E, A)))
                     }
                     , field: function (n) {
                         var o = t.get.field(n.identifier)
                             , a = !0
                             , r = [];
                         return o.prop("disabled") ? (t.debug("Field is disabled. Skipping", n.identifier), a = !0) : n.optional && "" === e.trim(o.val()) ? (t.debug("Field is optional and empty. Skipping", n.identifier), a = !0) : n.rules !== i && e.each(n.rules, function (e, i) {
                             t.has.field(n.identifier) && !t.validate.rule(n, i) && (t.debug("Field is invalid", n.identifier, i.type), r.push(i.prompt), a = !1)
                         }), a ? (t.remove.prompt(n, r), s.onValid.call(o), !0) : (A = A.concat(r), t.add.prompt(n.identifier, r), s.onInvalid.call(o, r), !1)
                     }
                     , rule: function (n, o) {
                         var a, r, c = t.get.field(n.identifier)
                             , l = o.type
                             , u = e.trim(c.val() + "")
                             , d = /\[(.*)\]/i
                             , f = d.exec(l)
                             , m = !0;
                         return f !== i && null !== f ? (a = "" + f[1], r = l.replace(f[0], ""), m = s.rules[r].call(E, u, a)) : m = s.rules[l].call(c, u), m
                     }
                 }
                 , setting: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, s, t);
                     else {
                         if (n === i) return s[t];
                         s[t] = n
                     }
                 }
                 , internal: function (n, o) {
                     if (e.isPlainObject(n)) e.extend(!0, t, n);
                     else {
                         if (o === i) return t[n];
                         t[n] = o
                     }
                 }
                 , debug: function () {
                     s.debug && (s.performance ? t.performance.log(arguments) : (t.debug = Function.prototype.bind.call(console.info, console, s.name + ":"), t.debug.apply(console, arguments)))
                 }
                 , verbose: function () {
                     s.verbose && s.debug && (s.performance ? t.performance.log(arguments) : (t.verbose = Function.prototype.bind.call(console.info, console, s.name + ":"), t.verbose.apply(console, arguments)))
                 }
                 , error: function () {
                     t.error = Function.prototype.bind.call(console.error, console, s.name + ":"), t.error.apply(console, arguments)
                 }
                 , performance: {
                     log: function (e) {
                         var n, i, o;
                         s.performance && (n = (new Date).getTime(), o = v || n, i = n - o, v = n, h.push({
                             Name: e[0]
                             , Arguments: [].slice.call(e, 1) || ""
                             , Element: E
                             , "Execution Time": i
                         })), clearTimeout(t.performance.timer), t.performance.timer = setTimeout(t.performance.display, 100)
                     }
                     , display: function () {
                         var n = s.name + ":"
                             , o = 0;
                         v = !1, clearTimeout(t.performance.timer), e.each(h, function (e, t) {
                             o += t["Execution Time"]
                         }), n += " " + o + "ms", p && (n += " '" + p + "'"), r.length > 1 && (n += " (" + r.length + ")"), (console.group !== i || console.table !== i) && h.length > 0 && (console.groupCollapsed(n), console.table ? console.table(h) : e.each(h, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), h = []
                     }
                 }
                 , invoke: function (t, n, o) {
                     var r, s, c, l = F;
                     return n = n || x, o = E || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                 }
             }, y ? (F === i && t.initialize(), t.invoke(b)) : (F !== i && F.invoke("destroy"), t.initialize())
         }), a !== i ? a : this
     }, e.fn.form.settings = {
         name: "Form"
         , namespace: "form"
         , debug: !1
         , verbose: !0
         , performance: !0
         , keyboardShortcuts: !0
         , on: "submit"
         , inline: !1
         , delay: 200
         , revalidate: !0
         , transition: "scale"
         , duration: 200
         , onValid: function () {}
         , onInvalid: function () {}
         , onSuccess: function () {
             return !0
         }
         , onFailure: function () {
             return !1
         }
         , metadata: {
             defaultValue: "default"
             , validate: "validate"
         }
         , selector: {
             checkbox: 'input[type="checkbox"], input[type="radio"]'
             , clear: ".clear"
             , field: "input, textarea, select"
             , group: ".field"
             , input: "input"
             , message: ".error.message"
             , prompt: ".prompt.label"
             , radio: 'input[type="radio"]'
             , reset: ".reset"
             , submit: ".submit"
             , uiCheckbox: ".ui.checkbox"
             , uiDropdown: ".ui.dropdown"
         }
         , className: {
             error: "error"
             , label: "ui prompt label"
             , pressed: "down"
             , success: "success"
         }
         , error: {
             method: "The method you called is not defined."
         }
         , templates: {
             error: function (t) {
                 var n = '<ul class="list">';
                 return e.each(t, function (e, t) {
                     n += "<li>" + t + "</li>"
                 }), n += "</ul>", e(n)
             }
             , prompt: function (t) {
                 return e("<div/>").addClass("ui red pointing prompt label").html(t[0])
             }
         }
         , rules: {
             checked: function () {
                 return e(this).filter(":checked").length > 0
             }
             , contains: function (e, t) {
                 return t = t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), -1 !== e.search(new RegExp(t, "i"))
             }
             , containsExactly: function (e, t) {
                 return t = t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), -1 !== e.search(new RegExp(t))
             }
             , email: function (e) {
                 var t = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", "i");
                 return t.test(e)
             }
             , empty: function (e) {
                 return !(e === i || "" === e)
             }
             , integer: function (e, t) {
                 var n, o, a, r = /^\-?\d+$/;
                 return t === i || "" === t || ".." === t || (-1 == t.indexOf("..") ? r.test(t) && (n = o = t - 0) : (a = t.split("..", 2), r.test(a[0]) && (n = a[0] - 0), r.test(a[1]) && (o = a[1] - 0))), r.test(e) && (n === i || e >= n) && (o === i || o >= e)
             }
             , is: function (e, t) {
                 return t = "string" == typeof t ? t.toLowerCase() : t, e = "string" == typeof e ? e.toLowerCase() : e, e == t
             }
             , isExactly: function (e, t) {
                 return e == t
             }
             , length: function (e, t) {
                 return e !== i ? e.length >= t : !1
             }
             , match: function (t, n) {
                 var o, a = e(this);
                 return a.find("#" + n).length > 0 ? o = a.find("#" + n).val() : a.find('[name="' + n + '"]').length > 0 ? o = a.find('[name="' + n + '"]').val() : a.find('[data-validate="' + n + '"]').length > 0 && (o = a.find('[data-validate="' + n + '"]').val()), o !== i ? t.toString() == o.toString() : !1
             }
             , maxLength: function (e, t) {
                 return e !== i ? e.length <= t : !1
             }
             , not: function (e, t) {
                 return e = "string" == typeof e ? e.toLowerCase() : e, t = "string" == typeof t ? t.toLowerCase() : t, e != t
             }
             , notExactly: function (e, t) {
                 return e != t
             }
             , url: function (e) {
                 var t = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
                 return t.test(e)
             }
         }
     }
 }(jQuery, window, document)
 , function (e, t, n, i) {
     "use strict";
     e.fn.accordion = function (n) {
         {
             var o, a = e(this)
                 , r = (new Date).getTime()
                 , s = []
                 , c = arguments[0]
                 , l = "string" == typeof c
                 , u = [].slice.call(arguments, 1);
             t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                 setTimeout(e, 0)
             }
         }
         return a.each(function () {
             var d, f, m = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.accordion.settings, n) : e.extend({}, e.fn.accordion.settings)
                 , g = m.className
                 , p = m.namespace
                 , v = m.selector
                 , h = m.error
                 , b = "." + p
                 , y = "module-" + p
                 , x = a.selector || ""
                 , w = e(this)
                 , C = w.find(v.title)
                 , k = w.find(v.content)
                 , T = this
                 , S = w.data(y);
             f = {
                 initialize: function () {
                     f.debug("Initializing", w), f.bind.events(), f.observeChanges(), f.instantiate()
                 }
                 , instantiate: function () {
                     S = f, w.data(y, f)
                 }
                 , destroy: function () {
                     f.debug("Destroying previous instance", w), w.off(b).removeData(y)
                 }
                 , refresh: function () {
                     C = w.find(v.title), k = w.find(v.content)
                 }
                 , observeChanges: function () {
                     "MutationObserver" in t && (d = new MutationObserver(function () {
                         f.debug("DOM tree modified, updating selector cache"), f.refresh()
                     }), d.observe(T, {
                         childList: !0
                         , subtree: !0
                     }), f.debug("Setting up mutation observer", d))
                 }
                 , bind: {
                     events: function () {
                         f.debug("Binding delegated events"), w.on("click" + b, v.trigger, f.event.click)
                     }
                 }
                 , event: {
                     click: function () {
                         f.toggle.call(this)
                     }
                 }
                 , toggle: function (t) {
                     var n = t !== i ? "number" == typeof t ? C.eq(t) : e(t).closest(v.title) : e(this).closest(v.title)
                         , o = n.next(k)
                         , a = o.hasClass(g.animating)
                         , r = o.hasClass(g.active)
                         , s = r && !a
                         , c = !r && a;
                     f.debug("Toggling visibility of content", n), s || c ? m.collapsible ? f.close.call(n) : f.debug("Cannot close accordion content collapsing is disabled") : f.open.call(n)
                 }
                 , open: function (t) {
                     var n = t !== i ? "number" == typeof t ? C.eq(t) : e(t).closest(v.title) : e(this).closest(v.title)
                         , o = n.next(k)
                         , a = o.hasClass(g.animating)
                         , r = o.hasClass(g.active)
                         , s = !r && !a;
                     s && (f.debug("Opening accordion content", n), m.exclusive && f.closeOthers.call(n), n.addClass(g.active), o.addClass(g.animating), m.animateChildren && (e.fn.transition !== i && w.transition("is supported") ? o.children().transition({
                         animation: "fade in"
                         , queue: !1
                         , useFailSafe: !0
                         , debug: m.debug
                         , verbose: m.verbose
                         , duration: m.duration
                     }) : o.children().stop(!0).animate({
                         opacity: 1
                     }, m.duration, f.resetOpacity)), o.stop(!0).slideDown(m.duration, m.easing, function () {
                         o.removeClass(g.animating).addClass(g.active), f.reset.display.call(this), m.onOpen.call(this), m.onChange.call(this)
                     }))
                 }
                 , close: function (t) {
                     var n = t !== i ? "number" == typeof t ? C.eq(t) : e(t).closest(v.title) : e(this).closest(v.title)
                         , o = n.next(k)
                         , a = o.hasClass(g.animating)
                         , r = o.hasClass(g.active)
                         , s = !r && a
                         , c = r && a;
                     !r && !s || c || (f.debug("Closing accordion content", o), n.removeClass(g.active), o.addClass(g.animating), m.animateChildren && (e.fn.transition !== i && w.transition("is supported") ? o.children().transition({
                         animation: "fade out"
                         , queue: !1
                         , useFailSafe: !0
                         , debug: m.debug
                         , verbose: m.verbose
                         , duration: m.duration
                     }) : o.children().stop(!0).animate({
                         opacity: 0
                     }, m.duration, f.resetOpacity)), o.stop(!0).slideUp(m.duration, m.easing, function () {
                         o.removeClass(g.animating).removeClass(g.active), f.reset.display.call(this), m.onClose.call(this), m.onChange.call(this)
                     }))
                 }
                 , closeOthers: function (t) {
                     var n, o, a, r = t !== i ? C.eq(t) : e(this).closest(v.title)
                         , s = r.parents(v.content).prev(v.title)
                         , c = r.closest(v.accordion)
                         , l = v.title + "." + g.active + ":visible"
                         , u = v.content + "." + g.active + ":visible";
                     m.closeNested ? (n = c.find(l).not(s), a = n.next(k)) : (n = c.find(l).not(s), o = c.find(u).find(l).not(s), n = n.not(o), a = n.next(k)), n.length > 0 && (f.debug("Exclusive enabled, closing other content", n), n.removeClass(g.active), m.animateChildren && (e.fn.transition !== i && w.transition("is supported") ? a.children().transition({
                         animation: "fade out"
                         , useFailSafe: !0
                         , debug: m.debug
                         , verbose: m.verbose
                         , duration: m.duration
                     }) : a.children().stop().animate({
                         opacity: 0
                     }, m.duration, f.resetOpacity)), a.stop().slideUp(m.duration, m.easing, function () {
                         e(this).removeClass(g.active), f.reset.display.call(this)
                     }))
                 }
                 , reset: {
                     display: function () {
                         f.verbose("Removing inline display from element", this), e(this).css("display", ""), "" === e(this).attr("style") && e(this).attr("style", "").removeAttr("style")
                     }
                     , opacity: function () {
                         f.verbose("Removing inline opacity from element", this), e(this).css("opacity", ""), "" === e(this).attr("style") && e(this).attr("style", "").removeAttr("style")
                     }
                 }
                 , setting: function (t, n) {
                     if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (n === i) return m[t];
                         m[t] = n
                     }
                 }
                 , internal: function (t, n) {
                     return f.debug("Changing internal", t, n), n === i ? f[t] : void(e.isPlainObject(t) ? e.extend(!0, f, t) : f[t] = n)
                 }
                 , debug: function () {
                     m.debug && (m.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), f.debug.apply(console, arguments)))
                 }
                 , verbose: function () {
                     m.verbose && m.debug && (m.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), f.verbose.apply(console, arguments)))
                 }
                 , error: function () {
                     f.error = Function.prototype.bind.call(console.error, console, m.name + ":"), f.error.apply(console, arguments)
                 }
                 , performance: {
                     log: function (e) {
                         var t, n, i;
                         m.performance && (t = (new Date).getTime(), i = r || t, n = t - i, r = t, s.push({
                             Name: e[0]
                             , Arguments: [].slice.call(e, 1) || ""
                             , Element: T
                             , "Execution Time": n
                         })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 100)
                     }
                     , display: function () {
                         var t = m.name + ":"
                             , n = 0;
                         r = !1, clearTimeout(f.performance.timer), e.each(s, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", x && (t += " '" + x + "'"), (console.group !== i || console.table !== i) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), s = []
                     }
                 }
                 , invoke: function (t, n, a) {
                     var r, s, c, l = S;
                     return n = n || u, a = T || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (f.error(h.method, t), !1);
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                 }
             }, l ? (S === i && f.initialize(), f.invoke(c)) : (S !== i && S.invoke("destroy"), f.initialize())
         }), o !== i ? o : this
     }, e.fn.accordion.settings = {
         name: "Accordion"
         , namespace: "accordion"
         , debug: !1
         , verbose: !0
         , performance: !0
         , exclusive: !0
         , collapsible: !0
         , closeNested: !1
         , animateChildren: !0
         , duration: 350
         , easing: "easeOutQuad"
         , onOpen: function () {}
         , onClose: function () {}
         , onChange: function () {}
         , error: {
             method: "The method you called is not defined"
         }
         , className: {
             active: "active"
             , animating: "animating"
         }
         , selector: {
             accordion: ".accordion"
             , title: ".title"
             , trigger: ".title"
             , content: ".content"
         }
     }, e.extend(e.easing, {
         easeOutQuad: function (e, t, n, i, o) {
             return -i * (t /= o) * (t - 2) + n
         }
     })
 }(jQuery, window, document)
 , function (e, t, n, i) {
     "use strict";
     e.fn.checkbox = function (n) {
         var o, a = e(this)
             , r = a.selector || ""
             , s = (new Date).getTime()
             , c = []
             , l = arguments[0]
             , u = "string" == typeof l
             , d = [].slice.call(arguments, 1);
         return a.each(function () {
             var a, f, m = e.extend(!0, {}, e.fn.checkbox.settings, n)
                 , g = m.className
                 , p = m.namespace
                 , v = m.selector
                 , h = m.error
                 , b = "." + p
                 , y = "module-" + p
                 , x = e(this)
                 , w = e(this).find(v.label).first()
                 , C = e(this).find(v.input)
                 , k = x.data(y)
                 , T = this;
             f = {
                 initialize: function () {
                     f.verbose("Initializing checkbox", m), f.create.label(), f.add.events(), f.is.checked() ? (f.set.checked(), m.fireOnInit && m.onChecked.call(C.get())) : (f.remove.checked(), m.fireOnInit && m.onUnchecked.call(C.get())), f.observeChanges(), f.instantiate()
                 }
                 , instantiate: function () {
                     f.verbose("Storing instance of module", f), k = f, x.data(y, f)
                 }
                 , destroy: function () {
                     f.verbose("Destroying module"), f.remove.events(), x.removeData(y)
                 }
                 , refresh: function () {
                     x = e(this), w = e(this).find(v.label).first(), C = e(this).find(v.input)
                 }
                 , observeChanges: function () {
                     "MutationObserver" in t && (a = new MutationObserver(function () {
                         f.debug("DOM tree modified, updating selector cache"), f.refresh()
                     }), a.observe(T, {
                         childList: !0
                         , subtree: !0
                     }), f.debug("Setting up mutation observer", a))
                 }
                 , attachEvents: function (t, n) {
                     var i = e(t);
                     n = e.isFunction(f[n]) ? f[n] : f.toggle, i.length > 0 ? (f.debug("Attaching checkbox events to element", t, n), i.on("click" + b, n)) : f.error(h.notFound)
                 }
                 , event: {
                     keydown: function (e) {
                         var t = e.which
                             , n = {
                                 enter: 13
                                 , space: 32
                                 , escape: 27
                             };
                         t == n.escape && (f.verbose("Escape key pressed blurring field"), x.blur()), e.ctrlKey || t != n.enter && t != n.space || (f.verbose("Enter key pressed, toggling checkbox"), f.toggle.call(this), e.preventDefault())
                     }
                 }
                 , is: {
                     radio: function () {
                         return x.hasClass(g.radio)
                     }
                     , checked: function () {
                         return C.prop("checked") !== i && C.prop("checked")
                     }
                     , unchecked: function () {
                         return !f.is.checked()
                     }
                 }
                 , can: {
                     change: function () {
                         return !(x.hasClass(g.disabled) || x.hasClass(g.readOnly) || C.prop("disabled"))
                     }
                     , uncheck: function () {
                         return "boolean" == typeof m.uncheckable ? m.uncheckable : !f.is.radio()
                     }
                 }
                 , set: {
                     checked: function () {
                         x.addClass(g.checked)
                     }
                     , tab: function () {
                         C.attr("tabindex") === i && C.attr("tabindex", 0)
                     }
                 }
                 , create: {
                     label: function () {
                         C.prevAll(v.label).length > 0 ? (C.prev(v.label).detach().insertAfter(C), f.debug("Moving existing label", w)) : f.has.label() || (w = e("<label>").insertAfter(C), f.debug("Creating label", w))
                     }
                 }
                 , has: {
                     label: function () {
                         return w.length > 0
                     }
                 }
                 , add: {
                     events: function () {
                         f.verbose("Attaching checkbox events"), x.on("click" + b, f.toggle).on("keydown" + b, v.input, f.event.keydown)
                     }
                 }
                 , remove: {
                     checked: function () {
                         x.removeClass(g.checked)
                     }
                     , events: function () {
                         f.debug("Removing events"), x.off(b).removeData(y), C.off(b, f.event.keydown), w.off(b)
                     }
                 }
                 , enable: function () {
                     f.debug("Enabling checkbox functionality"), x.removeClass(g.disabled), C.prop("disabled", !1), m.onEnabled.call(C.get())
                 }
                 , disable: function () {
                     f.debug("Disabling checkbox functionality"), x.addClass(g.disabled), C.prop("disabled", "disabled"), m.onDisabled.call(C.get())
                 }
                 , check: function () {
                     f.debug("Enabling checkbox", C), C.prop("checked", !0).trigger("change"), f.set.checked(), C.trigger("blur"), m.onChange.call(C.get()), m.onChecked.call(C.get())
                 }
                 , uncheck: function () {
                     f.debug("Disabling checkbox"), C.prop("checked", !1).trigger("change"), f.remove.checked(), C.trigger("blur"), m.onChange.call(C.get()), m.onUnchecked.call(C.get())
                 }
                 , toggle: function () {
                     return f.can.change() ? (f.verbose("Determining new checkbox state"), void(f.is.unchecked() ? f.check() : f.is.checked() && f.can.uncheck() && f.uncheck())) : (console.log(f.can.change()), void f.debug("Checkbox is read-only or disabled, ignoring toggle"))
                 }
                 , setting: function (t, n) {
                     if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (n === i) return m[t];
                         m[t] = n
                     }
                 }
                 , internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, f, t);
                     else {
                         if (n === i) return f[t];
                         f[t] = n
                     }
                 }
                 , debug: function () {
                     m.debug && (m.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), f.debug.apply(console, arguments)))
                 }
                 , verbose: function () {
                     m.verbose && m.debug && (m.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), f.verbose.apply(console, arguments)))
                 }
                 , error: function () {
                     f.error = Function.prototype.bind.call(console.error, console, m.name + ":"), f.error.apply(console, arguments)
                 }
                 , performance: {
                     log: function (e) {
                         var t, n, i;
                         m.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                             Name: e[0]
                             , Arguments: [].slice.call(e, 1) || ""
                             , Element: T
                             , "Execution Time": n
                         })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 100)
                     }
                     , display: function () {
                         var t = m.name + ":"
                             , n = 0;
                         s = !1, clearTimeout(f.performance.timer), e.each(c, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 }
                 , invoke: function (t, n, a) {
                     var r, s, c, l = k;
                     return n = n || d, a = T || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (f.error(h.method, t), !1);
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                 }
             }, u ? (k === i && f.initialize(), f.invoke(l)) : (k !== i && k.invoke("destroy"), f.initialize())
         }), o !== i ? o : this
     }, e.fn.checkbox.settings = {
         name: "Checkbox"
         , namespace: "checkbox"
         , debug: !1
         , verbose: !0
         , performance: !0
         , uncheckable: "auto"
         , fireOnInit: !0
         , onChange: function () {}
         , onChecked: function () {}
         , onUnchecked: function () {}
         , onEnabled: function () {}
         , onDisabled: function () {}
         , className: {
             checked: "checked"
             , disabled: "disabled"
             , radio: "radio"
             , readOnly: "read-only"
         }
         , error: {
             method: "The method you called is not defined"
         }
         , selector: {
             input: 'input[type="checkbox"], input[type="radio"]'
             , label: "label"
         }
     }
 }(jQuery, window, document)
 , function (e, t, n, i) {
     "use strict";
     e.fn.dimmer = function (t) {
         var o, a = e(this)
             , r = (new Date).getTime()
             , s = []
             , c = arguments[0]
             , l = "string" == typeof c
             , u = [].slice.call(arguments, 1);
         return a.each(function () {
             var d, f, m, g = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.dimmer.settings, t) : e.extend({}, e.fn.dimmer.settings)
                 , p = g.selector
                 , v = g.namespace
                 , h = g.className
                 , b = g.error
                 , y = "." + v
                 , x = "module-" + v
                 , w = a.selector || ""
                 , C = "ontouchstart" in n.documentElement ? "touchstart" : "click"
                 , k = e(this)
                 , T = this
                 , S = k.data(x);
             m = {
                 preinitialize: function () {
                     m.is.dimmer() ? (f = k.parent(), d = k) : (f = k, d = m.has.dimmer() ? g.dimmerName ? f.children(p.dimmer).filter("." + g.dimmerName) : f.children(p.dimmer) : m.create())
                 }
                 , initialize: function () {
                     m.debug("Initializing dimmer", g), "hover" == g.on ? f.on("mouseenter" + y, m.show).on("mouseleave" + y, m.hide) : "click" == g.on && f.on(C + y, m.toggle), m.is.page() && (m.debug("Setting as a page dimmer", f), m.set.pageDimmer()), m.is.closable() && (m.verbose("Adding dimmer close event", d), d.on(C + y, m.event.click)), m.set.dimmable(), m.instantiate()
                 }
                 , instantiate: function () {
                     m.verbose("Storing instance of module", m), S = m, k.data(x, S)
                 }
                 , destroy: function () {
                     m.verbose("Destroying previous module", d), k.removeData(x), f.off(y), d.off(y)
                 }
                 , event: {
                     click: function (t) {
                         m.verbose("Determining if event occured on dimmer", t), (0 === d.find(t.target).length || e(t.target).is(p.content)) && (m.hide(), t.stopImmediatePropagation())
                     }
                 }
                 , addContent: function (t) {
                     var n = e(t);
                     m.debug("Add content to dimmer", n), n.parent()[0] !== d[0] && n.detach().appendTo(d)
                 }
                 , create: function () {
                     var t = e(g.template.dimmer());
                     return g.variation && (m.debug("Creating dimmer with variation", g.variation), t.addClass(g.variation)), g.dimmerName && (m.debug("Creating named dimmer", g.dimmerName), t.addClass(g.dimmerName)), t.appendTo(f), t
                 }
                 , show: function (t) {
                     t = e.isFunction(t) ? t : function () {}, m.debug("Showing dimmer", d, g), m.is.dimmed() && !m.is.animating() || !m.is.enabled() ? m.debug("Dimmer is already shown or disabled") : (m.animate.show(t), g.onShow.call(T), g.onChange.call(T))
                 }
                 , hide: function (t) {
                     t = e.isFunction(t) ? t : function () {}, m.is.dimmed() || m.is.animating() ? (m.debug("Hiding dimmer", d), m.animate.hide(t), g.onHide.call(T), g.onChange.call(T)) : m.debug("Dimmer is not visible")
                 }
                 , toggle: function () {
                     m.verbose("Toggling dimmer visibility", d), m.is.dimmed() ? m.hide() : m.show()
                 }
                 , animate: {
                     show: function (t) {
                         t = e.isFunction(t) ? t : function () {}, g.useCSS && e.fn.transition !== i && d.transition("is supported") ? ("auto" !== g.opacity && m.set.opacity(), d.transition({
                             animation: g.transition + " in"
                             , queue: !1
                             , duration: m.get.duration()
                             , useFailSafe: !0
                             , onStart: function () {
                                 m.set.dimmed()
                             }
                             , onComplete: function () {
                                 m.set.active(), t()
                             }
                         })) : (m.verbose("Showing dimmer animation with javascript"), m.set.dimmed(), "auto" == g.opacity && (g.opacity = .8), d.stop().css({
                             opacity: 0
                             , width: "100%"
                             , height: "100%"
                         }).fadeTo(m.get.duration(), g.opacity, function () {
                             d.removeAttr("style"), m.set.active(), t()
                         }))
                     }
                     , hide: function (t) {
                         t = e.isFunction(t) ? t : function () {}, g.useCSS && e.fn.transition !== i && d.transition("is supported") ? (m.verbose("Hiding dimmer with css"), d.transition({
                             animation: g.transition + " out"
                             , queue: !1
                             , duration: m.get.duration()
                             , useFailSafe: !0
                             , onStart: function () {
                                 m.remove.dimmed()
                             }
                             , onComplete: function () {
                                 m.remove.active(), t()
                             }
                         })) : (m.verbose("Hiding dimmer with javascript"), m.remove.dimmed(), d.stop().fadeOut(m.get.duration(), function () {
                             m.remove.active(), d.removeAttr("style"), t()
                         }))
                     }
                 }
                 , get: {
                     dimmer: function () {
                         return d
                     }
                     , duration: function () {
                         return "object" == typeof g.duration ? m.is.active() ? g.duration.hide : g.duration.show : g.duration
                     }
                 }
                 , has: {
                     dimmer: function () {
                         return g.dimmerName ? k.children(p.dimmer).filter("." + g.dimmerName).length > 0 : k.children(p.dimmer).length > 0
                     }
                 }
                 , is: {
                     active: function () {
                         return d.hasClass(h.active)
                     }
                     , animating: function () {
                         return d.is(":animated") || d.hasClass(h.animating)
                     }
                     , closable: function () {
                         return "auto" == g.closable ? "hover" == g.on ? !1 : !0 : g.closable
                     }
                     , dimmer: function () {
                         return k.is(p.dimmer)
                     }
                     , dimmable: function () {
                         return k.is(p.dimmable)
                     }
                     , dimmed: function () {
                         return f.hasClass(h.dimmed)
                     }
                     , disabled: function () {
                         return f.hasClass(h.disabled)
                     }
                     , enabled: function () {
                         return !m.is.disabled()
                     }
                     , page: function () {
                         return f.is("body")
                     }
                     , pageDimmer: function () {
                         return d.hasClass(h.pageDimmer)
                     }
                 }
                 , can: {
                     show: function () {
                         return !d.hasClass(h.disabled)
                     }
                 }
                 , set: {
                     opacity: function (e) {
                         var e = g.opacity || e
                             , t = d.css("background-color")
                             , n = t.split(",")
                             , i = n && 4 == n.length;
                         i ? (n[3] = e + ")", t = n.join(",")) : t = "rgba(0, 0, 0, " + e + ")", m.debug("Setting opacity to", e), d.css("background-color", t)
                     }
                     , active: function () {
                         d.addClass(h.active)
                     }
                     , dimmable: function () {
                         f.addClass(h.dimmable)
                     }
                     , dimmed: function () {
                         f.addClass(h.dimmed)
                     }
                     , pageDimmer: function () {
                         d.addClass(h.pageDimmer)
                     }
                     , disabled: function () {
                         d.addClass(h.disabled)
                     }
                 }
                 , remove: {
                     active: function () {
                         d.removeClass(h.active)
                     }
                     , dimmed: function () {
                         f.removeClass(h.dimmed)
                     }
                     , disabled: function () {
                         d.removeClass(h.disabled)
                     }
                 }
                 , setting: function (t, n) {
                     if (m.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, g, t);
                     else {
                         if (n === i) return g[t];
                         g[t] = n
                     }
                 }
                 , internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (n === i) return m[t];
                         m[t] = n
                     }
                 }
                 , debug: function () {
                     g.debug && (g.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), m.debug.apply(console, arguments)))
                 }
                 , verbose: function () {
                     g.verbose && g.debug && (g.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), m.verbose.apply(console, arguments)))
                 }
                 , error: function () {
                     m.error = Function.prototype.bind.call(console.error, console, g.name + ":"), m.error.apply(console, arguments)
                 }
                 , performance: {
                     log: function (e) {
                         var t, n, i;
                         g.performance && (t = (new Date).getTime(), i = r || t, n = t - i, r = t, s.push({
                             Name: e[0]
                             , Arguments: [].slice.call(e, 1) || ""
                             , Element: T
                             , "Execution Time": n
                         })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 100)
                     }
                     , display: function () {
                         var t = g.name + ":"
                             , n = 0;
                         r = !1, clearTimeout(m.performance.timer), e.each(s, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", w && (t += " '" + w + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), s = []
                     }
                 }
                 , invoke: function (t, n, a) {
                     var r, s, c, l = S;
                     return n = n || u, a = T || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (m.error(b.method, t), !1);
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                 }
             }, m.preinitialize(), l ? (S === i && m.initialize(), m.invoke(c)) : (S !== i && S.invoke("destroy"), m.initialize())
         }), o !== i ? o : this
     }, e.fn.dimmer.settings = {
         name: "Dimmer"
         , namespace: "dimmer"
         , debug: !1
         , verbose: !0
         , performance: !0
         , dimmerName: !1
         , variation: !1
         , closable: "auto"
         , useCSS: !0
         , transition: "fade"
         , on: !1
         , opacity: "auto"
         , duration: {
             show: 500
             , hide: 500
         }
         , onChange: function () {}
         , onShow: function () {}
         , onHide: function () {}
         , error: {
             method: "The method you called is not defined."
         }
         , selector: {
             dimmable: ".dimmable"
             , dimmer: ".ui.dimmer"
             , content: ".ui.dimmer > .content, .ui.dimmer > .content > .center"
         }
         , template: {
             dimmer: function () {
                 return e("<div />").attr("class", "ui dimmer")
             }
         }
         , className: {
             active: "active"
             , animating: "animating"
             , dimmable: "dimmable"
             , dimmed: "dimmed"
             , disabled: "disabled"
             , hide: "hide"
             , pageDimmer: "page"
             , show: "show"
         }
     }
 }(jQuery, window, document)
 , function (e, t, n, i) {
     "use strict";
     e.fn.dropdown = function (o) {
         var a, r = e(this)
             , s = e(n)
             , c = r.selector || ""
             , l = "ontouchstart" in n.documentElement
             , u = (new Date).getTime()
             , d = []
             , f = arguments[0]
             , m = "string" == typeof f
             , g = [].slice.call(arguments, 1);
         return r.each(function () {
             var p, v, h, b, y = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.dropdown.settings, o) : e.extend({}, e.fn.dropdown.settings)
                 , x = y.className
                 , w = y.metadata
                 , C = y.namespace
                 , k = y.selector
                 , T = y.error
                 , S = "." + C
                 , A = "module-" + C
                 , P = e(this)
                 , E = P.find(k.text)
                 , F = P.find(k.search)
                 , R = P.find(k.input)
                 , O = P.prev().find(k.text).length > 0 ? P.prev().find(k.text) : P.prev()
                 , D = P.children(k.menu)
                 , z = D.find(k.item)
                 , q = !1
                 , j = !1
                 , N = this
                 , I = P.data(A);
             b = {
                 initialize: function () {
                     b.debug("Initializing dropdown", y), b.is.alreadySetup() ? b.setup.reference() : (b.setup.layout(), b.save.defaults(), b.set.selected(), b.create.id(), l && b.bind.touchEvents(), b.bind.mouseEvents(), b.bind.keyboardEvents(), b.observeChanges(), b.instantiate())
                 }
                 , instantiate: function () {
                     b.verbose("Storing instance of dropdown", b), I = b, P.data(A, b)
                 }
                 , destroy: function () {
                     b.verbose("Destroying previous dropdown for", P), b.remove.tabbable(), P.off(S).removeData(A), D.off(S), s.off(p)
                 }
                 , observeChanges: function () {
                     "MutationObserver" in t && (h = new MutationObserver(function (e) {
                         b.is.selectMutation(e) ? (b.debug("<select> modified, recreating menu"), b.setup.select()) : (b.debug("DOM tree modified, updating selector cache"), b.refresh())
                     }), h.observe(N, {
                         childList: !0
                         , subtree: !0
                     }), b.debug("Setting up mutation observer", h))
                 }
                 , create: {
                     id: function () {
                         v = (Math.random().toString(16) + "000000000").substr(2, 8), p = "." + v, b.verbose("Creating unique id for element", v)
                     }
                 }
                 , search: function () {
                     var e;
                     e = F.val(), b.verbose("Searching for query", e), b.filter(e), b.is.searchSelection() && b.can.show() && b.show()
                 }
                 , setup: {
                     layout: function () {
                         P.is("select") && b.setup.select(), b.is.search() && !b.is.searchable() && (F = e("<input />").addClass(x.search).insertBefore(E)), y.allowTab && b.set.tabbable()
                     }
                     , select: function () {
                         var t = b.get.selectValues();
                         b.debug("Dropdown initialized on a select", t), P.is("select") && (R = P), R.parent(k.dropdown).length > 0 ? (b.debug("UI dropdown already exists. Creating dropdown menu only"), P = R.closest(k.dropdown), D = P.children(k.menu), 0 === D.length && (D = e("<div />").addClass(x.menu).appendTo(P)), D.html(y.templates.menu(t))) : (b.debug("Creating entire dropdown from select"), P = e("<div />").attr("class", R.attr("class")).addClass(x.selection).addClass(x.dropdown).html(y.templates.dropdown(t)).insertBefore(R), R.removeAttr("class").prependTo(P)), b.refresh()
                     }
                     , reference: function () {
                         var e, t, n = r.index(P);
                         b.debug("Dropdown behavior was called on select, replacing with closest dropdown"), P = P.parent(k.dropdown), b.refresh(), e = r.slice(0, n), t = r.slice(n + 1), r = e.add(P).add(t)
                     }
                 }
                 , refresh: function () {
                     b.verbose("Refreshing selector cache"), E = P.find(k.text), F = P.find(k.search), R = P.find(k.input), O = P.prev().find(k.text).length > 0 ? P.prev().find(k.text) : P.prev(), D = P.children(k.menu), z = D.find(k.item)
                 }
                 , toggle: function () {
                     b.verbose("Toggling menu visibility"), b.is.active() ? b.hide() : b.show()
                 }
                 , show: function (t) {
                     t = e.isFunction(t) ? t : function () {}, b.is.searchSelection() && b.is.allFiltered() || b.can.show() && !b.is.active() && (b.debug("Showing dropdown"), b.animate.show(function () {
                         b.can.click() && b.bind.intent(), b.set.visible(), t.call(N)
                     }), y.onShow.call(N))
                 }
                 , hide: function (t) {
                     t = e.isFunction(t) ? t : function () {}, b.is.active() && (b.debug("Hiding dropdown"), b.animate.hide(function () {
                         b.remove.visible(), t.call(N)
                     }), y.onHide.call(N))
                 }
                 , hideOthers: function () {
                     b.verbose("Finding other dropdowns to hide"), r.not(P).has(k.menu + ":visible:not(." + x.animating + ")").dropdown("hide")
                 }
                 , hideSubMenus: function () {
                     var e = D.find(k.menu);
                     e.transition("hide")
                 }
                 , bind: {
                     keyboardEvents: function () {
                         b.debug("Binding keyboard events"), P.on("keydown" + S, b.event.keydown), b.is.searchable() && P.on(b.get.inputEvent(), k.search, b.event.input)
                     }
                     , touchEvents: function () {
                         b.debug("Touch device detected binding additional touch events"), b.is.searchSelection() || P.on("touchstart" + S, b.event.test.toggle), D.on("touchstart" + S, k.item, b.event.item.mouseenter)
                     }
                     , mouseEvents: function () {
                         b.verbose("Mouse detected binding mouse events"), b.is.searchSelection() ? P.on("mousedown" + S, k.menu, b.event.menu.activate).on("mouseup" + S, k.menu, b.event.menu.deactivate).on("click" + S, k.search, b.show).on("focus" + S, k.search, b.event.searchFocus).on("blur" + S, k.search, b.event.searchBlur).on("click" + S, k.text, b.event.searchTextFocus) : ("click" == y.on ? P.on("click" + S, b.event.test.toggle) : "hover" == y.on ? P.on("mouseenter" + S, b.delay.show).on("mouseleave" + S, b.delay.hide) : P.on(y.on + S, b.toggle), P.on("mousedown" + S, b.event.mousedown).on("mouseup" + S, b.event.mouseup).on("focus" + S, b.event.focus).on("blur" + S, b.event.blur)), D.on("mouseenter" + S, k.item, b.event.item.mouseenter).on("mouseleave" + S, k.item, b.event.item.mouseleave).on("click" + S, k.item, b.event.item.click)
                     }
                     , intent: function () {
                         b.verbose("Binding hide intent event to document"), l && s.on("touchstart" + p, b.event.test.touch).on("touchmove" + p, b.event.test.touch), s.on("click" + p, b.event.test.hide)
                     }
                 }
                 , unbind: {
                     intent: function () {
                         b.verbose("Removing hide intent event from document"), l && s.off("touchstart" + p).off("touchmove" + p), s.off("click" + p)
                     }
                 }
                 , filter: function (t) {
                     var n = e()
                         , i = b.escape.regExp(t)
                         , o = new RegExp("^" + i, "igm")
                         , a = new RegExp(i, "ig");
                     b.verbose("Searching for matching values"), z.each(function () {
                         var t = e(this)
                             , i = String(b.get.choiceText(t, !1))
                             , r = String(b.get.choiceValue(t, i));
                         i.match(o) || r.match(o) ? n = n.add(t) : y.fullTextSearch && (i.match(a) || r.match(a)) && (n = n.add(t))
                     }), b.debug("Setting filter", t), b.remove.filteredItem(), z.not(n).addClass(x.filtered), b.verbose("Selecting first non-filtered element"), b.remove.selectedItem(), z.not("." + x.filtered).eq(0).addClass(x.selected), b.is.allFiltered() && (b.debug("All items filtered, hiding dropdown", t), b.is.searchSelection() && b.hide(), y.onNoResults.call(N, t))
                 }
                 , focusSearch: function () {
                     b.is.search() && F.focus()
                 }
                 , forceSelection: function () {
                     var e = z.not(x.filtered).filter("." + x.selected).eq(0)
                         , t = z.filter("." + x.active).eq(0)
                         , n = e.length > 0 ? e : t
                         , i = n.size() > 0;
                     i ? (b.event.item.click.call(n), b.remove.filteredItem()) : b.hide()
                 }
                 , event: {
                     mousedown: function () {
                         q = !0
                     }
                     , mouseup: function () {
                         q = !1
                     }
                     , focus: function () {
                         !q && b.is.hidden() && b.show()
                     }
                     , blur: function () {
                         var e = n.activeElement === this;
                         q || e || b.hide()
                     }
                     , searchFocus: function () {
                         q = !0, b.show()
                     }
                     , searchBlur: function () {
                         var e = n.activeElement === this;
                         j || e || (y.forceSelection ? b.forceSelection() : b.hide())
                     }
                     , searchTextFocus: function () {
                         q = !0, F.focus()
                     }
                     , input: function () {
                         b.is.searchSelection() && b.set.filtered(), clearTimeout(b.timer), b.timer = setTimeout(b.search, y.delay.search)
                     }
                     , keydown: function (e) {
                         {
                             var t, n = z.not(x.filtered).filter("." + x.selected).eq(0)
                                 , i = D.children("." + x.active).eq(0)
                                 , o = n.length > 0 ? n : i
                                 , a = o.length > 0 ? o.siblings(":not(." + x.filtered + ")").andSelf() : D.children(":not(." + x.filtered + ")")
                                 , r = o.children(k.menu)
                                 , s = o.closest(k.menu)
                                 , c = s[0] !== D[0]
                                 , l = s.is(":visible")
                                 , u = e.which
                                 , d = {
                                     enter: 13
                                     , escape: 27
                                     , leftArrow: 37
                                     , upArrow: 38
                                     , rightArrow: 39
                                     , downArrow: 40
                                 }
                                 , f = r.length > 0
                                 , m = o.length > 0;
                             a.size() - 1
                         }
                         if (b.is.visible()) {
                             if (u == d.enter && m && (f && !y.allowCategorySelection ? (b.verbose("Pressed enter on unselectable category, opening sub menu"), u = d.rightArrow) : (b.verbose("Enter key pressed, choosing selected item"), b.event.item.click.call(o, e))), u == d.leftArrow && (c && (b.verbose("Left key pressed, closing sub-menu"), b.animate.hide(!1, s), o.removeClass(x.selected), s.closest(k.item).addClass(x.selected)), e.preventDefault()), u == d.rightArrow && (f && (b.verbose("Right key pressed, opening sub-menu"), b.animate.show(!1, r), o.removeClass(x.selected), r.find(k.item).eq(0).addClass(x.selected)), e.preventDefault()), u == d.upArrow) {
                                 if (t = m && l ? o.prevAll(k.item + ":not(." + x.filtered + ")").eq(0) : z.eq(0), a.index(t) < 0) return void b.verbose("Up key pressed but reached top of current menu");
                                 b.verbose("Up key pressed, changing active item"), o.removeClass(x.selected), t.addClass(x.selected), b.set.scrollPosition(t), e.preventDefault()
                             }
                             if (u == d.downArrow) {
                                 if (t = m && l ? t = o.nextAll(k.item + ":not(." + x.filtered + ")").eq(0) : z.eq(0), 0 === t.length) return void b.verbose("Down key pressed but reached bottom of current menu");
                                 b.verbose("Down key pressed, changing active item"), z.removeClass(x.selected), t.addClass(x.selected), b.set.scrollPosition(t), e.preventDefault()
                             }
                         }
                         else u == d.enter && (b.verbose("Enter key pressed, showing dropdown"), b.show()), u == d.escape && (b.verbose("Escape key pressed, closing dropdown"), b.hide()), u == d.downArrow && (b.verbose("Down key pressed, showing dropdown"), b.show())
                     }
                     , test: {
                         toggle: function (e) {
                             b.determine.eventInMenu(e, b.toggle) && e.preventDefault()
                         }
                         , touch: function (e) {
                             b.determine.eventInMenu(e, function () {
                                 "touchstart" == e.type ? b.timer = setTimeout(b.hide, y.delay.touch) : "touchmove" == e.type && clearTimeout(b.timer)
                             }), e.stopPropagation()
                         }
                         , hide: function (e) {
                             b.determine.eventInModule(e, b.hide)
                         }
                     }
                     , menu: {
                         activate: function () {
                             j = !0
                         }
                         , deactivate: function () {
                             j = !1
                         }
                     }
                     , item: {
                         mouseenter: function (t) {
                             var n = e(this).children(k.menu)
                                 , i = e(this).siblings(k.item).children(k.menu);
                             n.length > 0 && (clearTimeout(b.itemTimer), b.itemTimer = setTimeout(function () {
                                 b.verbose("Showing sub-menu", n), e.each(i, function () {
                                     b.animate.hide(!1, e(this))
                                 }), b.animate.show(!1, n)
                             }, y.delay.show), t.preventDefault())
                         }
                         , mouseleave: function () {
                             var t = e(this).children(k.menu);
                             t.length > 0 && (clearTimeout(b.itemTimer), b.itemTimer = setTimeout(function () {
                                 b.verbose("Hiding sub-menu", t), b.animate.hide(!1, t)
                             }, y.delay.hide))
                         }
                         , click: function (t) {
                             var n = e(this)
                                 , i = e(t ? t.target : "")
                                 , o = n.find(k.menu)
                                 , a = b.get.choiceText(n)
                                 , r = b.get.choiceValue(n, a)
                                 , s = function () {
                                     b.remove.searchTerm(), b.determine.selectAction(a, r)
                                 }
                                 , c = o.length > 0
                                 , l = o.find(i).length > 0;
                             l || c && !y.allowCategorySelection || s()
                         }
                     }
                     , resetStyle: function () {
                         e(this).removeAttr("style")
                     }
                 }
                 , determine: {
                     selectAction: function (t, n) {
                         b.verbose("Determining action", y.action), e.isFunction(b.action[y.action]) ? (b.verbose("Triggering preset action", y.action, t, n), b.action[y.action](t, n)) : e.isFunction(y.action) ? (b.verbose("Triggering user action", y.action, t, n), y.action(t, n)) : b.error(T.action, y.action)
                     }
                     , eventInModule: function (t, n) {
                         return n = e.isFunction(n) ? n : function () {}, 0 === e(t.target).closest(P).length ? (b.verbose("Triggering event", n), n(), !0) : (b.verbose("Event occurred in dropdown, canceling callback"), !1)
                     }
                     , eventInMenu: function (t, n) {
                         return n = e.isFunction(n) ? n : function () {}, 0 === e(t.target).closest(D).length ? (b.verbose("Triggering event", n), n(), !0) : (b.verbose("Event occurred in dropdown menu, canceling callback"), !1)
                     }
                 }
                 , action: {
                     nothing: function () {}
                     , activate: function (e, t) {
                         t = t !== i ? t : e, b.set.selected(t), b.hide(function () {
                             b.remove.filteredItem()
                         })
                     }
                     , select: function (e, t) {
                         t = t !== i ? t : e, b.set.selected(t), b.hide(function () {
                             b.remove.filteredItem()
                         })
                     }
                     , combo: function (e, t) {
                         t = t !== i ? t : e, b.set.selected(t), b.hide(function () {
                             b.remove.filteredItem()
                         })
                     }
                     , hide: function () {
                         b.hide(function () {
                             b.remove.filteredItem()
                         })
                     }
                 }
                 , get: {
                     id: function () {
                         return v
                     }
                     , text: function () {
                         return E.text()
                     }
                     , value: function () {
                         return R.length > 0 ? R.val() : P.data(w.value)
                     }
                     , choiceText: function (e, t) {
                         return t = t !== i ? t : y.preserveHTML, e !== i ? (e.find(k.menu).length > 0 && (b.verbose("Retreiving text of element with sub-menu"), e = e.clone(), e.find(k.menu).remove(), e.find(k.menuIcon).remove()), e.data(w.text) !== i ? e.data(w.text) : t ? e.html().trim() : e.text().trim()) : void 0
                     }
                     , choiceValue: function (e, t) {
                         return t = t || b.get.choiceText(e), e.data(w.value) !== i ? e.data(w.value) : "string" == typeof t ? t.toLowerCase().trim() : t.trim()
                     }
                     , inputEvent: function () {
                         var e = F[0];
                         return e ? e.oninput !== i ? "input" : e.onpropertychange !== i ? "propertychange" : "keyup" : !1
                     }
                     , selectValues: function () {
                         var t = {};
                         return t.values = y.sortSelect ? {} : [], P.find("option").each(function () {
                             var n = e(this).html()
                                 , o = e(this).attr("value") !== i ? e(this).attr("value") : n;
                             "" === o ? t.placeholder = n : y.sortSelect ? t.values[o] = {
                                 name: n
                                 , value: o
                             } : t.values.push({
                                 name: n
                                 , value: o
                             })
                         }), y.sortSelect ? b.debug("Retrieved and sorted values from select", t) : b.debug("Retreived values from select", t), t
                     }
                     , activeItem: function () {
                         return z.filter("." + x.active)
                     }
                     , item: function (t, n) {
                         var o = !1;
                         return t = t !== i ? t : b.get.value() !== i ? b.get.value() : b.get.text(), n = "" === t || 0 === t ? !0 : n || !1, t !== i ? z.each(function () {
                             var i = e(this)
                                 , a = b.get.choiceText(i)
                                 , r = b.get.choiceValue(i, a);
                             if (n) {
                                 if (b.verbose("Ambiguous dropdown value using strict type check", i, t), r === t) return o = e(this), !0;
                                 if (!o && a === t) return o = e(this), !0
                             }
                             else {
                                 if (r == t) return b.verbose("Found select item by value", r, t), o = e(this), !0;
                                 if (!o && a == t) return b.verbose("Found select item by text", a, t), o = e(this), !0
                             }
                         }) : t = b.get.text(), o || !1
                     }
                 }
                 , restore: {
                     defaults: function () {
                         b.restore.defaultText(), b.restore.defaultValue()
                     }
                     , defaultText: function () {
                         var e = P.data(w.defaultText);
                         b.debug("Restoring default text", e), b.set.text(e), E.addClass(x.placeholder)
                     }
                     , defaultValue: function () {
                         var e = P.data(w.defaultValue);
                         e !== i && (b.debug("Restoring default value", e), e.length ? b.set.selected(e) : (b.remove.activeItem(), b.remove.selectedItem()))
                     }
                 }
                 , save: {
                     defaults: function () {
                         b.save.defaultText(), b.save.placeholderText(), b.save.defaultValue()
                     }
                     , defaultValue: function () {
                         P.data(w.defaultValue, b.get.value())
                     }
                     , defaultText: function () {
                         P.data(w.defaultText, E.text())
                     }
                     , placeholderText: function () {
                         E.hasClass(x.placeholder) && P.data(w.placeholderText, E.text())
                     }
                 }
                 , clear: function () {
                     var e = P.data(w.placeholderText);
                     b.set.text(e), b.set.value(""), b.remove.activeItem(), b.remove.selectedItem(), E.addClass(x.placeholder)
                 }
                 , set: {
                     filtered: function () {
                         var e = F.val()
                             , t = "string" == typeof e && e.length > 0;
                         t ? E.addClass(x.filtered) : E.removeClass(x.filtered)
                     }
                     , tabbable: function () {
                         b.is.searchable() ? (b.debug("Searchable dropdown initialized"), F.val("").attr("tabindex", 0), D.attr("tabindex", "-1")) : (b.debug("Simple selection dropdown initialized"), P.attr("tabindex") || (P.attr("tabindex", 0), D.attr("tabindex", "-1")))
                     }
                     , scrollPosition: function (e, t) {
                         var n, o, a, r, s, c, l, u, d, f = 5;
                         e = e || b.get.activeItem(), n = e && e.length > 0, t = t !== i ? t : !1, e && n && (D.hasClass(x.visible) || D.addClass(x.loading), l = D.height(), a = e.height(), c = D.scrollTop(), s = D.offset().top, r = e.offset().top, o = c - s + r, d = o + f > c + l, u = c > o - f, b.debug("Scrolling to active item", o), (u || d || t) && D.scrollTop(o).removeClass(x.loading))
                     }
                     , text: function (e) {
                         "combo" == y.action ? (b.debug("Changing combo button text", e, O), y.preserveHTML ? O.html(e) : O.text(e)) : "select" !== y.action && (b.debug("Changing text", e, E), E.removeClass(x.filtered).removeClass(x.placeholder), y.preserveHTML ? E.html(e) : E.text(e))
                     }
                     , value: function (e) {
                         b.debug("Adding selected value to hidden input", e, R), R.length > 0 ? R.val(e).trigger("change") : P.data(w.value, e)
                     }
                     , active: function () {
                         P.addClass(x.active)
                     }
                     , visible: function () {
                         P.addClass(x.visible)
                     }
                     , selected: function (e) {
                         var t, n, i = b.get.item(e);
                         i && !i.hasClass(x.active) && (b.debug("Setting selected menu item to", i), b.remove.activeItem(), b.remove.selectedItem(), i.addClass(x.active).addClass(x.selected), t = b.get.choiceText(i), n = b.get.choiceValue(i, t), b.set.text(t), b.set.value(n), y.onChange.call(N, e, t, i))
                     }
                 }
                 , remove: {
                     active: function () {
                         P.removeClass(x.active)
                     }
                     , visible: function () {
                         P.removeClass(x.visible)
                     }
                     , activeItem: function () {
                         z.removeClass(x.active)
                     }
                     , filteredItem: function () {
                         z.removeClass(x.filtered)
                     }
                     , searchTerm: function () {
                         F.val("")
                     }
                     , selectedItem: function () {
                         z.removeClass(x.selected)
                     }
                     , tabbable: function () {
                         b.is.searchable() ? (b.debug("Searchable dropdown initialized"), F.attr("tabindex", "-1"), D.attr("tabindex", "-1")) : (b.debug("Simple selection dropdown initialized"), P.attr("tabindex", "-1"), D.attr("tabindex", "-1"))
                     }
                 }
                 , is: {
                     active: function () {
                         return P.hasClass(x.active)
                     }
                     , alreadySetup: function () {
                         return P.is("select") && P.parent(k.dropdown).length > 0
                     }
                     , animating: function (e) {
                         return e ? e.is(":animated") || e.transition && e.transition("is animating") : D.is(":animated") || D.transition && D.transition("is animating")
                     }
                     , allFiltered: function () {
                         return z.filter("." + x.filtered).length === z.length
                     }
                     , hidden: function (e) {
                         return e ? e.is(":hidden") : D.is(":hidden")
                     }
                     , selectMutation: function (t) {
                         var n = !1;
                         return e.each(t, function (t, i) {
                             return i.target && e(i.target).is("select") ? (n = !0, !0) : void 0
                         }), n
                     }
                     , search: function () {
                         return P.hasClass(x.search)
                     }
                     , searchable: function () {
                         return F.length > 0
                     }
                     , searchSelection: function () {
                         return b.is.searchable() && F.parent().is(P)
                     }
                     , selection: function () {
                         return P.hasClass(x.selection)
                     }
                     , upward: function () {
                         return P.hasClass(x.upward)
                     }
                     , visible: function (e) {
                         return e ? e.is(":visible") : D.is(":visible")
                     }
                 }
                 , can: {
                     click: function () {
                         return l || "click" == y.on
                     }
                     , show: function () {
                         return !P.hasClass(x.disabled)
                     }
                 }
                 , animate: {
                     show: function (t, n) {
                         var o = n || D
                             , a = n ? function () {} : function () {
                                 b.hideSubMenus(), b.hideOthers(), b.set.active()
                             };
                         t = e.isFunction(t) ? t : function () {}, b.set.scrollPosition(b.get.activeItem(), !0), b.verbose("Doing menu show animation", o), (b.is.hidden(o) || b.is.animating(o)) && ("auto" == y.transition && (y.transition = b.is.upward() ? "slide up" : "slide down", b.verbose("Automatically determining animation based on animation direction", y.transition)), "none" == y.transition ? t.call(N) : e.fn.transition !== i && P.transition("is supported") ? o.transition({
                             animation: y.transition + " in"
                             , debug: y.debug
                             , verbose: y.verbose
                             , duration: y.duration
                             , queue: !0
                             , onStart: a
                             , onComplete: function () {
                                 t.call(N)
                             }
                         }) : "slide down" == y.transition ? (a(), o.hide().clearQueue().children().clearQueue().css("opacity", 0).delay(50).animate({
                             opacity: 1
                         }, y.duration, "easeOutQuad", b.event.resetStyle).end().slideDown(100, "easeOutQuad", function () {
                             b.event.resetStyle.call(this), t.call(N)
                         })) : "fade" == y.transition ? (a(), o.hide().clearQueue().fadeIn(y.duration, function () {
                             b.event.resetStyle.call(this), t.call(N)
                         })) : b.error(T.transition, y.transition))
                     }
                     , hide: function (t, n) {
                         var o = n || D
                             , a = (n ? .9 * y.duration : y.duration, n ? function () {} : function () {
                                 b.can.click() && b.unbind.intent(), b.focusSearch(), b.remove.active()
                             });
                         t = e.isFunction(t) ? t : function () {}, (b.is.visible(o) || b.is.animating(o)) && (b.verbose("Doing menu hide animation", o), "auto" == y.transition && (y.transition = b.is.upward() ? "slide up" : "slide down"), R.trigger("blur"), "none" == y.transition ? t.call(N) : e.fn.transition !== i && P.transition("is supported") ? o.transition({
                             animation: y.transition + " out"
                             , duration: y.duration
                             , debug: y.debug
                             , verbose: y.verbose
                             , queue: !0
                             , onStart: a
                             , onComplete: function () {
                                 t.call(N)
                             }
                         }) : "slide down" == y.transition ? (a(), o.show().clearQueue().children().clearQueue().css("opacity", 1).animate({
                             opacity: 0
                         }, 100, "easeOutQuad", b.event.resetStyle).end().delay(50).slideUp(100, "easeOutQuad", function () {
                             b.event.resetStyle.call(this), t.call(N)
                         })) : "fade" == y.transition ? (a(), o.show().clearQueue().fadeOut(150, function () {
                             b.event.resetStyle.call(this), t.call(N)
                         })) : b.error(T.transition))
                     }
                 }
                 , delay: {
                     show: function () {
                         b.verbose("Delaying show event to ensure user intent"), clearTimeout(b.timer), b.timer = setTimeout(b.show, y.delay.show)
                     }
                     , hide: function () {
                         b.verbose("Delaying hide event to ensure user intent"), clearTimeout(b.timer), b.timer = setTimeout(b.hide, y.delay.hide)
                     }
                 }
                 , escape: {
                     regExp: function (e) {
                         return e = String(e), e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
                     }
                 }
                 , setting: function (t, n) {
                     if (b.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, y, t);
                     else {
                         if (n === i) return y[t];
                         y[t] = n
                     }
                 }
                 , internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, b, t);
                     else {
                         if (n === i) return b[t];
                         b[t] = n
                     }
                 }
                 , debug: function () {
                     y.debug && (y.performance ? b.performance.log(arguments) : (b.debug = Function.prototype.bind.call(console.info, console, y.name + ":"), b.debug.apply(console, arguments)))
                 }
                 , verbose: function () {
                     y.verbose && y.debug && (y.performance ? b.performance.log(arguments) : (b.verbose = Function.prototype.bind.call(console.info, console, y.name + ":"), b.verbose.apply(console, arguments)))
                 }
                 , error: function () {
                     b.error = Function.prototype.bind.call(console.error, console, y.name + ":"), b.error.apply(console, arguments)
                 }
                 , performance: {
                     log: function (e) {
                         var t, n, i;
                         y.performance && (t = (new Date).getTime(), i = u || t, n = t - i, u = t, d.push({
                             Name: e[0]
                             , Arguments: [].slice.call(e, 1) || ""
                             , Element: N
                             , "Execution Time": n
                         })), clearTimeout(b.performance.timer), b.performance.timer = setTimeout(b.performance.display, 500)
                     }
                     , display: function () {
                         var t = y.name + ":"
                             , n = 0;
                         u = !1, clearTimeout(b.performance.timer), e.each(d, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", c && (t += " '" + c + "'"), (console.group !== i || console.table !== i) && d.length > 0 && (console.groupCollapsed(t), console.table ? console.table(d) : e.each(d, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), d = []
                     }
                 }
                 , invoke: function (t, n, o) {
                     var r, s, c, l = I;
                     return n = n || g, o = N || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (b.error(T.method, t), !1);
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                 }
             }, m ? (I === i && b.initialize(), b.invoke(f)) : (I !== i && I.invoke("destroy"), b.initialize())
         }), a !== i ? a : r
     }, e.fn.dropdown.settings = {
         debug: !1
         , verbose: !0
         , performance: !0
         , on: "click"
         , action: "activate"
         , allowTab: !0
         , fullTextSearch: !1
         , preserveHTML: !0
         , sortSelect: !1
         , allowCategorySelection: !1
         , delay: {
             hide: 300
             , show: 200
             , search: 50
             , touch: 50
         }
         , forceSelection: !0
         , transition: "auto"
         , duration: 250
         , onNoResults: function () {}
         , onChange: function () {}
         , onShow: function () {}
         , onHide: function () {}
         , name: "Dropdown"
         , namespace: "dropdown"
         , error: {
             action: "You called a dropdown action that was not defined"
             , alreadySetup: "Once a select has been initialized behaviors must be called on the created ui dropdown"
             , method: "The method you called is not defined."
             , transition: "The requested transition was not found"
         }
         , metadata: {
             defaultText: "defaultText"
             , defaultValue: "defaultValue"
             , placeholderText: "placeholderText"
             , text: "text"
             , value: "value"
         }
         , selector: {
             dropdown: ".ui.dropdown"
             , input: '> input[type="hidden"], > select'
             , item: ".item"
             , menu: ".menu"
             , menuIcon: ".dropdown.icon"
             , search: "> input.search, .menu > .search > input, .menu > input.search"
             , text: "> .text:not(.icon)"
         }
         , className: {
             active: "active"
             , animating: "animating"
             , disabled: "disabled"
             , dropdown: "ui dropdown"
             , filtered: "filtered"
             , loading: "loading"
             , menu: "menu"
             , placeholder: "default"
             , search: "search"
             , selected: "selected"
             , selection: "selection"
             , upward: "upward"
             , visible: "visible"
         }
     }, e.fn.dropdown.settings.templates = {
         menu: function (t) {
             var n = (t.placeholder || !1, t.values || {}, "");
             return e.each(t.values, function (e, t) {
                 n += '<div class="item" data-value="' + t.value + '">' + t.name + "</div>"
             }), n
         }
         , dropdown: function (t) {
             var n = t.placeholder || !1
                 , i = (t.values || {}, "");
             return i += '<i class="dropdown icon"></i>', i += t.placeholder ? '<div class="default text">' + n + "</div>" : '<div class="text"></div>', i += '<div class="menu">', e.each(t.values, function (e, t) {
                 i += '<div class="item" data-value="' + t.value + '">' + t.name + "</div>"
             }), i += "</div>"
         }
     }, e.extend(e.easing, {
         easeOutQuad: function (e, t, n, i, o) {
             return -i * (t /= o) * (t - 2) + n
         }
     })
 }(jQuery, window, document)
 , function (e, t, n, i) {
     "use strict";
     e.fn.modal = function (o) {
         var a, r = e(this)
             , s = e(t)
             , c = e(n)
             , l = e("body")
             , u = r.selector || ""
             , d = (new Date).getTime()
             , f = []
             , m = arguments[0]
             , g = "string" == typeof m
             , p = [].slice.call(arguments, 1)
             , v = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                 setTimeout(e, 0)
             };
         return r.each(function () {
             var r, h, b, y, x, w, C, k, T, S = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.modal.settings, o) : e.extend({}, e.fn.modal.settings)
                 , A = S.selector
                 , P = S.className
                 , E = S.namespace
                 , F = S.error
                 , R = "." + E
                 , O = "module-" + E
                 , D = e(this)
                 , z = e(S.context)
                 , q = D.find(A.close)
                 , j = this
                 , N = D.data(O);
             T = {
                 initialize: function () {
                     T.verbose("Initializing dimmer", z), T.create.id(), T.create.dimmer(), T.refreshModals(), T.verbose("Attaching close events", q), T.bind.events(), T.observeChanges(), T.instantiate()
                 }
                 , instantiate: function () {
                     T.verbose("Storing instance of modal"), N = T, D.data(O, N)
                 }
                 , create: {
                     dimmer: function () {
                         var t = {
                                 debug: S.debug
                                 , dimmerName: "modals"
                                 , duration: {
                                     show: S.duration
                                     , hide: S.duration
                                 }
                             }
                             , n = e.extend(!0, t, S.dimmerSettings);
                         return e.fn.dimmer === i ? void T.error(F.dimmer) : (T.debug("Creating dimmer with settings", n), y = z.dimmer(n), S.detachable && (T.verbose("Modal is detachable, moving content into dimmer"), y.dimmer("add content", D)), void(x = y.dimmer("get dimmer")))
                     }
                     , id: function () {
                         C = (Math.random().toString(16) + "000000000").substr(2, 8), w = "." + C, T.verbose("Creating unique id for element", C)
                     }
                 }
                 , destroy: function () {
                     T.verbose("Destroying previous modal"), D.removeData(O).off(R), s.off(w), q.off(R), z.dimmer("destroy")
                 }
                 , observeChanges: function () {
                     "MutationObserver" in t && (k = new MutationObserver(function () {
                         T.debug("DOM tree modified, refreshing"), T.refresh()
                     }), k.observe(j, {
                         childList: !0
                         , subtree: !0
                     }), T.debug("Setting up mutation observer", k))
                 }
                 , refresh: function () {
                     T.remove.scrolling(), T.cacheSizes(), T.set.screenHeight(), T.set.type(), T.set.position()
                 }
                 , refreshModals: function () {
                     h = D.siblings(A.modal), r = h.add(D)
                 }
                 , attachEvents: function (t, n) {
                     var i = e(t);
                     n = e.isFunction(T[n]) ? T[n] : T.toggle, i.length > 0 ? (T.debug("Attaching modal events to element", t, n), i.off(R).on("click" + R, n)) : T.error(F.notFound, t)
                 }
                 , bind: {
                     events: function () {
                         q.on("click" + R, T.event.close), s.on("resize" + w, T.event.resize)
                     }
                 }
                 , get: {
                     id: function () {
                         return (Math.random().toString(16) + "000000000").substr(2, 8)
                     }
                 }
                 , event: {
                     close: function () {
                         T.verbose("Closing element pressed"), e(this).is(A.approve) ? S.onApprove.call(j) !== !1 ? T.hide() : T.verbose("Approve callback returned false cancelling hide") : e(this).is(A.deny) ? S.onDeny.call(j) !== !1 ? T.hide() : T.verbose("Deny callback returned false cancelling hide") : T.hide()
                     }
                     , click: function (t) {
                         0 === e(t.target).closest(D).length && (T.debug("Dimmer clicked, hiding all modals"), T.is.active() && (T.remove.clickaway(), S.allowMultiple ? T.hide() : T.hideAll()))
                     }
                     , debounce: function (e, t) {
                         clearTimeout(T.timer), T.timer = setTimeout(e, t)
                     }
                     , keyboard: function (e) {
                         var t = e.which
                             , n = 27;
                         t == n && (S.closable ? (T.debug("Escape key pressed hiding modal"), T.hide()) : T.debug("Escape key pressed, but closable is set to false"), e.preventDefault())
                     }
                     , resize: function () {
                         y.dimmer("is active") && v(T.refresh)
                     }
                 }
                 , toggle: function () {
                     T.is.active() || T.is.animating() ? T.hide() : T.show()
                 }
                 , show: function (t) {
                     t = e.isFunction(t) ? t : function () {}, T.refreshModals(), T.showModal(t)
                 }
                 , hide: function (t) {
                     t = e.isFunction(t) ? t : function () {}, T.refreshModals(), T.hideModal(t)
                 }
                 , showModal: function (t) {
                     t = e.isFunction(t) ? t : function () {}, T.is.animating() || !T.is.active() ? (T.showDimmer(), T.cacheSizes(), T.set.position(), T.set.screenHeight(), T.set.type(), T.set.clickaway(), !S.allowMultiple && h.filter("." + P.active).length > 0 ? (T.debug("Other modals visible, queueing show animation"), T.hideOthers(T.showModal)) : (S.onShow.call(j), S.transition && e.fn.transition !== i && D.transition("is supported") ? (T.debug("Showing modal with css animations"), D.transition({
                         debug: S.debug
                         , animation: S.transition + " in"
                         , queue: S.queue
                         , duration: S.duration
                         , useFailSafe: !0
                         , onComplete: function () {
                             S.onVisible.apply(j), T.add.keyboardShortcuts(), T.save.focus(), T.set.active(), T.set.autofocus(), t()
                         }
                     })) : (T.debug("Showing modal with javascript"), D.fadeIn(S.duration, S.easing, function () {
                         S.onVisible.apply(j), T.add.keyboardShortcuts(), T.save.focus(), T.set.active(), t()
                     })))) : T.debug("Modal is already visible")
                 }
                 , hideModal: function (t, n) {
                     t = e.isFunction(t) ? t : function () {}, T.debug("Hiding modal"), S.onHide.call(j), (T.is.animating() || T.is.active()) && (S.transition && e.fn.transition !== i && D.transition("is supported") ? (T.remove.active(), D.transition({
                         debug: S.debug
                         , animation: S.transition + " out"
                         , queue: S.queue
                         , duration: S.duration
                         , useFailSafe: !0
                         , onStart: function () {
                             T.othersActive() || n || T.hideDimmer(), T.remove.keyboardShortcuts()
                         }
                         , onComplete: function () {
                             S.onHidden.call(j), T.restore.focus(), t()
                         }
                     })) : (T.remove.active(), T.othersActive() || T.hideDimmer(), T.remove.keyboardShortcuts(), D.fadeOut(S.duration, S.easing, function () {
                         S.onHidden.call(j), T.restore.focus(), t()
                     })))
                 }
                 , showDimmer: function () {
                     y.dimmer("is animating") || !y.dimmer("is active") ? (T.debug("Showing dimmer"), y.dimmer("show")) : T.debug("Dimmer already visible")
                 }
                 , hideDimmer: function () {
                     return y.dimmer("is animating") || y.dimmer("is active") ? void y.dimmer("hide", function () {
                         S.transition && e.fn.transition !== i && D.transition("is supported") && (T.remove.clickaway(), T.remove.screenHeight())
                     }) : void T.debug("Dimmer is not visible cannot hide")
                 }
                 , hideAll: function (t) {
                     var n = r.filter(":visible");
                     t = e.isFunction(t) ? t : function () {}, n.length > 0 && (T.debug("Hiding all visible modals"), T.hideDimmer(), n.modal("hide modal", t))
                 }
                 , hideOthers: function (t) {
                     var n = h.filter(":visible");
                     t = e.isFunction(t) ? t : function () {}, n.length > 0 && (T.debug("Hiding other modals", h), n.modal("hide modal", t, !0))
                 }
                 , othersActive: function () {
                     return h.filter("." + P.active).length > 0
                 }
                 , add: {
                     keyboardShortcuts: function () {
                         T.verbose("Adding keyboard shortcuts"), c.on("keyup" + R, T.event.keyboard)
                     }
                 }
                 , save: {
                     focus: function () {
                         b = e(n.activeElement).blur()
                     }
                 }
                 , restore: {
                     focus: function () {
                         b && b.length > 0 && b.focus()
                     }
                 }
                 , remove: {
                     active: function () {
                         D.removeClass(P.active)
                     }
                     , clickaway: function () {
                         S.closable && x.off("click" + w)
                     }
                     , screenHeight: function () {
                         T.cache.height > T.cache.pageHeight && (T.debug("Removing page height"), l.css("height", ""))
                     }
                     , keyboardShortcuts: function () {
                         T.verbose("Removing keyboard shortcuts"), c.off("keyup" + R)
                     }
                     , scrolling: function () {
                         y.removeClass(P.scrolling), D.removeClass(P.scrolling)
                     }
                 }
                 , cacheSizes: function () {
                     var o = D.outerHeight();
                     (T.cache === i || 0 !== o) && (T.cache = {
                         pageHeight: e(n).outerHeight()
                         , height: o + S.offset
                         , contextHeight: "body" == S.context ? e(t).height() : y.height()
                     }), T.debug("Caching modal and container sizes", T.cache)
                 }
                 , can: {
                     fit: function () {
                         return T.cache.height + 2 * S.padding < T.cache.contextHeight
                     }
                 }
                 , is: {
                     active: function () {
                         return D.hasClass(P.active)
                     }
                     , animating: function () {
                         return D.transition("is supported") ? D.transition("is animating") : D.is(":visible")
                     }
                     , scrolling: function () {
                         return y.hasClass(P.scrolling)
                     }
                     , modernBrowser: function () {
                         return !(t.ActiveXObject || "ActiveXObject" in t)
                     }
                 }
                 , set: {
                     autofocus: function () {
                         if (S.autofocus) {
                             var e = D.find(":input:visible")
                                 , t = e.filter("[autofocus]")
                                 , n = t.length > 0 ? t : e;
                             n.first().focus()
                         }
                     }
                     , clickaway: function () {
                         S.closable && x.on("click" + w, T.event.click)
                     }
                     , screenHeight: function () {
                         T.can.fit() ? l.css("height", "") : (T.debug("Modal is taller than page content, resizing page height"), l.css("height", T.cache.height + S.padding / 2))
                     }
                     , active: function () {
                         D.addClass(P.active)
                     }
                     , scrolling: function () {
                         y.addClass(P.scrolling), D.addClass(P.scrolling)
                     }
                     , type: function () {
                         T.can.fit() ? (T.verbose("Modal fits on screen"), T.othersActive || T.remove.scrolling()) : (T.verbose("Modal cannot fit on screen setting to scrolling"), T.set.scrolling())
                     }
                     , position: function () {
                         T.verbose("Centering modal on page", T.cache), D.css(T.can.fit() ? {
                             top: ""
                             , marginTop: -(T.cache.height / 2)
                         } : {
                             marginTop: ""
                             , top: c.scrollTop()
                         })
                     }
                 }
                 , setting: function (t, n) {
                     if (T.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, S, t);
                     else {
                         if (n === i) return S[t];
                         S[t] = n
                     }
                 }
                 , internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, T, t);
                     else {
                         if (n === i) return T[t];
                         T[t] = n
                     }
                 }
                 , debug: function () {
                     S.debug && (S.performance ? T.performance.log(arguments) : (T.debug = Function.prototype.bind.call(console.info, console, S.name + ":"), T.debug.apply(console, arguments)))
                 }
                 , verbose: function () {
                     S.verbose && S.debug && (S.performance ? T.performance.log(arguments) : (T.verbose = Function.prototype.bind.call(console.info, console, S.name + ":"), T.verbose.apply(console, arguments)))
                 }
                 , error: function () {
                     T.error = Function.prototype.bind.call(console.error, console, S.name + ":"), T.error.apply(console, arguments)
                 }
                 , performance: {
                     log: function (e) {
                         var t, n, i;
                         S.performance && (t = (new Date).getTime(), i = d || t, n = t - i, d = t, f.push({
                             Name: e[0]
                             , Arguments: [].slice.call(e, 1) || ""
                             , Element: j
                             , "Execution Time": n
                         })), clearTimeout(T.performance.timer), T.performance.timer = setTimeout(T.performance.display, 100)
                     }
                     , display: function () {
                         var t = S.name + ":"
                             , n = 0;
                         d = !1, clearTimeout(T.performance.timer), e.each(f, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", u && (t += " '" + u + "'"), (console.group !== i || console.table !== i) && f.length > 0 && (console.groupCollapsed(t), console.table ? console.table(f) : e.each(f, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), f = []
                     }
                 }
                 , invoke: function (t, n, o) {
                     var r, s, c, l = N;
                     return n = n || p, o = j || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                 }
             }, g ? (N === i && T.initialize(), T.invoke(m)) : (N !== i && N.invoke("destroy"), T.initialize())
         }), a !== i ? a : this
     }, e.fn.modal.settings = {
         name: "Modal"
         , namespace: "modal"
         , debug: !1
         , verbose: !0
         , performance: !0
         , allowMultiple: !1
         , detachable: !0
         , closable: !0
         , autofocus: !0
         , dimmerSettings: {
             closable: !1
             , useCSS: !0
         }
         , context: "body"
         , queue: !1
         , duration: 500
         , easing: "easeOutExpo"
         , offset: 0
         , transition: "scale"
         , padding: 50
         , onShow: function () {}
         , onHide: function () {}
         , onVisible: function () {}
         , onHidden: function () {}
         , onApprove: function () {
             return !0
         }
         , onDeny: function () {
             return !0
         }
         , selector: {
             close: ".close, .actions .button"
             , approve: ".actions .positive, .actions .approve, .actions .ok"
             , deny: ".actions .negative, .actions .deny, .actions .cancel"
             , modal: ".ui.modal"
         }
         , error: {
             dimmer: "UI Dimmer, a required component is not included in this page"
             , method: "The method you called is not defined."
             , notFound: "The element you specified could not be found"
         }
         , className: {
             active: "active"
             , animating: "animating"
             , scrolling: "scrolling"
         }
     }
 }(jQuery, window, document)
 , function (e, t, n, i) {
     "use strict";
     e.fn.nag = function (n) {
         var o, a = e(this)
             , r = a.selector || ""
             , s = (new Date).getTime()
             , c = []
             , l = arguments[0]
             , u = "string" == typeof l
             , d = [].slice.call(arguments, 1);
         return a.each(function () {
             {
                 var a, f = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.nag.settings, n) : e.extend({}, e.fn.nag.settings)
                     , m = (f.className, f.selector)
                     , g = f.error
                     , p = f.namespace
                     , v = "." + p
                     , h = p + "-module"
                     , b = e(this)
                     , y = b.find(m.close)
                     , x = e(f.context ? f.context : "body")
                     , w = this
                     , C = b.data(h);
                 t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                     setTimeout(e, 0)
                 }
             }
             a = {
                 initialize: function () {
                     a.verbose("Initializing element"), b.data(h, a), y.on("click" + v, a.dismiss), f.detachable && b.parent()[0] !== x[0] && b.detach().prependTo(x), f.displayTime > 0 && setTimeout(a.hide, f.displayTime), a.show()
                 }
                 , destroy: function () {
                     a.verbose("Destroying instance"), b.removeData(h).off(v)
                 }
                 , show: function () {
                     a.should.show() && !b.is(":visible") && (a.debug("Showing nag", f.animation.show), "fade" == f.animation.show ? b.fadeIn(f.duration, f.easing) : b.slideDown(f.duration, f.easing))
                 }
                 , hide: function () {
                     a.debug("Showing nag", f.animation.hide), "fade" == f.animation.show ? b.fadeIn(f.duration, f.easing) : b.slideUp(f.duration, f.easing)
                 }
                 , onHide: function () {
                     a.debug("Removing nag", f.animation.hide), b.remove(), f.onHide && f.onHide()
                 }
                 , dismiss: function (e) {
                     f.storageMethod && a.storage.set(f.key, f.value), a.hide(), e.stopImmediatePropagation(), e.preventDefault()
                 }
                 , should: {
                     show: function () {
                         return f.persist ? (a.debug("Persistent nag is set, can show nag"), !0) : a.storage.get(f.key) != f.value.toString() ? (a.debug("Stored value is not set, can show nag", a.storage.get(f.key)), !0) : (a.debug("Stored value is set, cannot show nag", a.storage.get(f.key)), !1)
                     }
                 }
                 , get: {
                     storageOptions: function () {
                         var e = {};
                         return f.expires && (e.expires = f.expires), f.domain && (e.domain = f.domain), f.path && (e.path = f.path), e
                     }
                 }
                 , clear: function () {
                     a.storage.remove(f.key)
                 }
                 , storage: {
                     set: function (n, o) {
                         var r = a.get.storageOptions();
                         if ("localstorage" == f.storageMethod && t.localStorage !== i) t.localStorage.setItem(n, o), a.debug("Value stored using local storage", n, o);
                         else {
                             if (e.cookie === i) return void a.error(g.noCookieStorage);
                             e.cookie(n, o, r), a.debug("Value stored using cookie", n, o, r)
                         }
                     }
                     , get: function (n) {
                         var o;
                         return "localstorage" == f.storageMethod && t.localStorage !== i ? o = t.localStorage.getItem(n) : e.cookie !== i ? o = e.cookie(n) : a.error(g.noCookieStorage), ("undefined" == o || "null" == o || o === i || null === o) && (o = i), o
                     }
                     , remove: function (n) {
                         var o = a.get.storageOptions();
                         "local" == f.storageMethod && t.store !== i ? t.localStorage.removeItem(n) : e.cookie !== i ? e.removeCookie(n, o) : a.error(g.noStorage)
                     }
                 }
                 , setting: function (t, n) {
                     if (a.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);
                     else {
                         if (n === i) return f[t];
                         f[t] = n
                     }
                 }
                 , internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, a, t);
                     else {
                         if (n === i) return a[t];
                         a[t] = n
                     }
                 }
                 , debug: function () {
                     f.debug && (f.performance ? a.performance.log(arguments) : (a.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), a.debug.apply(console, arguments)))
                 }
                 , verbose: function () {
                     f.verbose && f.debug && (f.performance ? a.performance.log(arguments) : (a.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), a.verbose.apply(console, arguments)))
                 }
                 , error: function () {
                     a.error = Function.prototype.bind.call(console.error, console, f.name + ":"), a.error.apply(console, arguments)
                 }
                 , performance: {
                     log: function (e) {
                         var t, n, i;
                         f.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                             Name: e[0]
                             , Arguments: [].slice.call(e, 1) || ""
                             , Element: w
                             , "Execution Time": n
                         })), clearTimeout(a.performance.timer), a.performance.timer = setTimeout(a.performance.display, 100)
                     }
                     , display: function () {
                         var t = f.name + ":"
                             , n = 0;
                         s = !1, clearTimeout(a.performance.timer), e.each(c, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 }
                 , invoke: function (t, n, r) {
                     var s, c, l, u = C;
                     return n = n || d, r = w || r, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function (n, o) {
                         var r = n != s ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(u[r]) && n != s) u = u[r];
                         else {
                             if (u[r] !== i) return c = u[r], !1;
                             if (!e.isPlainObject(u[o]) || n == s) return u[o] !== i ? (c = u[o], !1) : (a.error(g.method, t), !1);
                             u = u[o]
                         }
                     })), e.isFunction(c) ? l = c.apply(r, n) : c !== i && (l = c), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), c
                 }
             }, u ? (C === i && a.initialize(), a.invoke(l)) : (C !== i && C.invoke("destroy"), a.initialize())
         }), o !== i ? o : this
     }, e.fn.nag.settings = {
         name: "Nag"
         , debug: !1
         , verbose: !0
         , performance: !0
         , namespace: "Nag"
         , persist: !1
         , displayTime: 0
         , animation: {
             show: "slide"
             , hide: "slide"
         }
         , context: !1
         , detachable: !1
         , expires: 30
         , domain: !1
         , path: "/"
         , storageMethod: "cookie"
         , key: "nag"
         , value: "dismiss"
         , error: {
             noStorage: "Neither $.cookie or store is defined. A storage solution is required for storing state"
             , method: "The method you called is not defined."
         }
         , className: {
             bottom: "bottom"
             , fixed: "fixed"
         }
         , selector: {
             close: ".close.icon"
         }
         , speed: 500
         , easing: "easeOutQuad"
         , onHide: function () {}
     }
 }(jQuery, window, document)
 , function (e, t, n, i) {
     "use strict";
     e.fn.popup = function (o) {
         var a, r = e(this)
             , s = e(n)
             , c = r.selector || ""
             , l = "ontouchstart" in n.documentElement
             , u = (new Date).getTime()
             , d = []
             , f = arguments[0]
             , m = "string" == typeof f
             , g = [].slice.call(arguments, 1);
         return r.each(function () {
             var n, r, p, v, h, b = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.popup.settings, o) : e.extend({}, e.fn.popup.settings)
                 , y = b.selector
                 , x = b.className
                 , w = b.error
                 , C = b.metadata
                 , k = b.namespace
                 , T = "." + b.namespace
                 , S = "module-" + k
                 , A = e(this)
                 , P = e(b.context)
                 , E = b.target ? e(b.target) : A
                 , F = e(t)
                 , R = e("body")
                 , O = 0
                 , D = !1
                 , z = this
                 , q = A.data(S);
             h = {
                 initialize: function () {
                     h.debug("Initializing", A), h.createID(), h.bind.events(), !h.exists() && b.preserve && h.create(), h.instantiate()
                 }
                 , instantiate: function () {
                     h.verbose("Storing instance", h), q = h, A.data(S, q)
                 }
                 , refresh: function () {
                     b.popup ? n = e(b.popup).eq(0) : b.inline && (n = E.next(y.popup).eq(0)), b.popup ? (n.addClass(x.loading), r = h.get.offsetParent(), n.removeClass(x.loading), b.movePopup && h.has.popup() && h.get.offsetParent(n)[0] !== r[0] && (h.debug("Moving popup to the same offset parent as activating element"), n.detach().appendTo(r))) : r = b.inline ? h.get.offsetParent(E) : h.has.popup() ? h.get.offsetParent(n) : R, r.is("html") && (h.debug("Setting page as offset parent"), r = R)
                 }
                 , reposition: function () {
                     h.refresh(), h.set.position()
                 }
                 , destroy: function () {
                     h.debug("Destroying previous module"), n && !b.preserve && h.removePopup(), clearTimeout(h.hideTimer), clearTimeout(h.showTimer), F.off(p), A.off(T).removeData(S)
                 }
                 , event: {
                     start: function () {
                         var t = e.isPlainObject(b.delay) ? b.delay.show : b.delay;
                         clearTimeout(h.hideTimer), h.showTimer = setTimeout(function () {
                             !h.is.hidden() || h.is.active() && h.is.dropdown() || h.show()
                         }, t)
                     }
                     , end: function () {
                         var t = e.isPlainObject(b.delay) ? b.delay.hide : b.delay;
                         clearTimeout(h.showTimer), h.hideTimer = setTimeout(function () {
                             h.is.visible() && h.hide()
                         }, t)
                     }
                     , resize: function () {
                         h.is.visible() && h.set.position()
                     }
                 }
                 , create: function () {
                     var t = A.data(C.html) || b.html
                         , i = A.data(C.variation) || b.variation
                         , o = A.data(C.title) || b.title
                         , a = A.data(C.content) || A.attr("title") || b.content;
                     t || a || o ? (h.debug("Creating pop-up html"), t || (t = b.templates.popup({
                         title: o
                         , content: a
                     })), n = e("<div/>").addClass(x.popup).addClass(i).data(C.activator, A).html(t), i && n.addClass(i), b.inline ? (h.verbose("Inserting popup element inline", n), n.insertAfter(A)) : (h.verbose("Appending popup element to body", n), n.appendTo(P)), h.refresh(), b.hoverable && h.bind.popup(), b.onCreate.call(n, z)) : 0 !== E.next(y.popup).length ? (h.verbose("Pre-existing popup found"), b.inline = !0, b.popup = E.next(y.popup).data(C.activator, A), h.refresh(), b.hoverable && h.bind.popup()) : b.popup ? (b.popup.data(C.activator, A), h.verbose("Used popup specified in settings"), h.refresh(), b.hoverable && h.bind.popup()) : h.debug("No content specified skipping display", z)
                 }
                 , createID: function () {
                     v = (Math.random().toString(16) + "000000000").substr(2, 8), p = "." + v, h.verbose("Creating unique id for element", v)
                 }
                 , toggle: function () {
                     h.debug("Toggling pop-up"), h.is.hidden() ? (h.debug("Popup is hidden, showing pop-up"), h.unbind.close(), h.show()) : (h.debug("Popup is visible, hiding pop-up"), h.hide())
                 }
                 , show: function (t) {
                     t = e.isFunction(t) ? t : function () {}, h.debug("Showing pop-up", b.transition), h.exists() ? b.preserve || b.popup || h.refresh() : h.create(), n && h.set.position() && (h.save.conditions(), b.exclusive && h.hideAll(), h.animate.show(t))
                 }
                 , hide: function (t) {
                     t = e.isFunction(t) ? t : function () {}, h.remove.visible(), h.unbind.close(), h.is.visible() && (h.restore.conditions(), h.animate.hide(t))
                 }
                 , hideAll: function () {
                     e(y.popup).filter("." + x.visible).each(function () {
                         e(this).data(C.activator).popup("hide")
                     })
                 }
                 , hideGracefully: function (t) {
                     t && 0 === e(t.target).closest(y.popup).length ? (h.debug("Click occurred outside popup hiding popup"), h.hide()) : h.debug("Click was inside popup, keeping popup open")
                 }
                 , exists: function () {
                     return n ? b.inline || b.popup ? h.has.popup() : n.closest(P).length >= 1 ? !0 : !1 : !1
                 }
                 , removePopup: function () {
                     h.debug("Removing popup", n), h.has.popup() && !b.popup && (n.remove(), n = i), b.onRemove.call(n, z)
                 }
                 , save: {
                     conditions: function () {
                         h.cache = {
                             title: A.attr("title")
                         }, h.cache.title && A.removeAttr("title"), h.verbose("Saving original attributes", h.cache.title)
                     }
                 }
                 , restore: {
                     conditions: function () {
                         return h.cache && h.cache.title && (A.attr("title", h.cache.title), h.verbose("Restoring original attributes", h.cache.title)), !0
                     }
                 }
                 , animate: {
                     show: function (t) {
                         t = e.isFunction(t) ? t : function () {}, b.transition && e.fn.transition !== i && A.transition("is supported") ? (h.set.visible(), n.transition({
                             animation: b.transition + " in"
                             , queue: !1
                             , debug: b.debug
                             , verbose: b.verbose
                             , duration: b.duration
                             , onComplete: function () {
                                 h.bind.close(), t.call(n, z), b.onVisible.call(n, z)
                             }
                         })) : (h.set.visible(), n.stop().fadeIn(b.duration, b.easing, function () {
                             h.bind.close(), t.call(n, z), b.onVisible.call(n, z)
                         })), b.onShow.call(n, z)
                     }
                     , hide: function (t) {
                         t = e.isFunction(t) ? t : function () {}, h.debug("Hiding pop-up"), b.transition && e.fn.transition !== i && A.transition("is supported") ? n.transition({
                             animation: b.transition + " out"
                             , queue: !1
                             , duration: b.duration
                             , debug: b.debug
                             , verbose: b.verbose
                             , onComplete: function () {
                                 h.reset(), t.call(n, z), b.onHidden.call(n, z)
                             }
                         }) : n.stop().fadeOut(b.duration, b.easing, function () {
                             h.reset(), t.call(n, z), b.onHidden.call(n, z)
                         }), b.onHide.call(n, z)
                     }
                 }
                 , get: {
                     id: function () {
                         return v
                     }
                     , startEvent: function () {
                         return "hover" == b.on ? l ? "touchstart mouseenter" : "mouseenter" : "focus" == b.on ? "focus" : !1
                     }
                     , scrollEvent: function () {
                         return l ? "touchmove scroll" : "scroll"
                     }
                     , endEvent: function () {
                         return "hover" == b.on ? "mouseleave" : "focus" == b.on ? "blur" : !1
                     }
                     , offsetParent: function (t) {
                         var n = t !== i ? t[0] : A[0]
                             , o = n.parentNode
                             , a = e(o);
                         if (o)
                             for (var r = "none" === a.css("transform"), s = "static" === a.css("position"), c = a.is("html"); o && !c && s && r;) o = o.parentNode, a = e(o), r = "none" === a.css("transform"), s = "static" === a.css("position"), c = a.is("html");
                         return a && a.length > 0 ? a : e()
                     }
                     , offstagePosition: function (i) {
                         var o = {
                                 top: e(t).scrollTop()
                                 , bottom: e(t).scrollTop() + e(t).height()
                                 , left: 0
                                 , right: e(t).width()
                             }
                             , a = {
                                 width: n.width()
                                 , height: n.height()
                                 , offset: n.offset()
                             }
                             , r = {}
                             , s = [];
                         return i = i || !1, a.offset && i && (h.verbose("Checking if outside viewable area", a.offset), r = {
                             top: a.offset.top < o.top
                             , bottom: a.offset.top + a.height > o.bottom
                             , right: a.offset.left + a.width > o.right
                             , left: a.offset.left < o.left
                         }), e.each(r, function (e, t) {
                             t && s.push(e)
                         }), s.length > 0 ? s.join(" ") : !1
                     }
                     , positions: function () {
                         return {
                             "top left": !1
                             , "top center": !1
                             , "top right": !1
                             , "bottom left": !1
                             , "bottom center": !1
                             , "bottom right": !1
                             , "left center": !1
                             , "right center": !1
                         }
                     }
                     , nextPosition: function (e) {
                         var t = e.split(" ")
                             , n = t[0]
                             , i = t[1]
                             , o = {
                                 top: "bottom"
                                 , bottom: "top"
                                 , left: "right"
                                 , right: "left"
                             }
                             , a = {
                                 left: "center"
                                 , center: "right"
                                 , right: "left"
                             }
                             , r = {
                                 "top left": "top center"
                                 , "top center": "top right"
                                 , "top right": "right center"
                                 , "right center": "bottom right"
                                 , "bottom right": "bottom center"
                                 , "bottom center": "bottom left"
                                 , "bottom left": "left center"
                                 , "left center": "top left"
                             }
                             , s = "top" == n || "bottom" == n
                             , c = !1
                             , l = !1
                             , u = !1;
                         return D || (h.verbose("All available positions available"), D = h.get.positions()), h.debug("Recording last position tried", e), D[e] = !0, "opposite" === b.prefer && (u = [o[n], i], u = u.join(" "), c = D[u] === !0, h.debug("Trying opposite strategy", u)), "adjacent" === b.prefer && s && (u = [n, a[i]], u = u.join(" "), l = D[u] === !0, h.debug("Trying adjacent strategy", u)), (l || c) && (h.debug("Using backup position", u), u = r[e]), u
                     }
                 }
                 , set: {
                     position: function (o, a) {
                         var s, c, l, u = (e(t).width(), e(t).height(), E.outerWidth())
                             , d = E.outerHeight()
                             , f = n.outerWidth()
                             , m = n.outerHeight()
                             , g = r.outerWidth()
                             , p = r.outerHeight()
                             , v = b.distanceAway
                             , y = E[0]
                             , k = b.inline ? parseInt(t.getComputedStyle(y).getPropertyValue("margin-top"), 10) : 0
                             , T = b.inline ? parseInt(t.getComputedStyle(y).getPropertyValue(h.is.rtl() ? "margin-right" : "margin-left"), 10) : 0
                             , S = b.inline || b.popup ? E.position() : E.offset();
                         switch (o = o || A.data(C.position) || b.position, a = a || A.data(C.offset) || b.offset, O == b.maxSearchDepth && b.lastResort && (h.debug("Using last resort position to display", b.lastResort), o = b.lastResort), b.inline && (h.debug("Adding targets margin to calculation"), "left center" == o || "right center" == o ? (a += k, v += -T) : "top left" == o || "top center" == o || "top right" == o ? (a += T, v -= k) : (a += T, v += k)), h.debug("Calculating popup positioning", o), s = o, h.is.rtl() && (s = s.replace(/left|right/g, function (e) {
                             return "left" == e ? "right" : "left"
                         }), h.debug("RTL: Popup positioning updated", s)), s) {
                         case "top left":
                             c = {
                                 top: "auto"
                                 , bottom: p - S.top + v
                                 , left: S.left + a
                                 , right: "auto"
                             };
                             break;
                         case "top center":
                             c = {
                                 bottom: p - S.top + v
                                 , left: S.left + u / 2 - f / 2 + a
                                 , top: "auto"
                                 , right: "auto"
                             };
                             break;
                         case "top right":
                             c = {
                                 bottom: p - S.top + v
                                 , right: g - S.left - u - a
                                 , top: "auto"
                                 , left: "auto"
                             };
                             break;
                         case "left center":
                             c = {
                                 top: S.top + d / 2 - m / 2 + a
                                 , right: g - S.left + v
                                 , left: "auto"
                                 , bottom: "auto"
                             };
                             break;
                         case "right center":
                             c = {
                                 top: S.top + d / 2 - m / 2 + a
                                 , left: S.left + u + v
                                 , bottom: "auto"
                                 , right: "auto"
                             };
                             break;
                         case "bottom left":
                             c = {
                                 top: S.top + d + v
                                 , left: S.left + a
                                 , bottom: "auto"
                                 , right: "auto"
                             };
                             break;
                         case "bottom center":
                             c = {
                                 top: S.top + d + v
                                 , left: S.left + u / 2 - f / 2 + a
                                 , bottom: "auto"
                                 , right: "auto"
                             };
                             break;
                         case "bottom right":
                             c = {
                                 top: S.top + d + v
                                 , right: g - S.left - u - a
                                 , left: "auto"
                                 , bottom: "auto"
                             }
                         }
                         if (c === i && h.error(w.invalidPosition, o), h.debug("Calculated popup positioning values", c), n.css(c).removeClass(x.position).addClass(o).addClass(x.loading), l = h.get.offstagePosition(o)) {
                             if (h.debug("Popup cant fit into viewport", l), O < b.maxSearchDepth) return O++, o = h.get.nextPosition(o), h.debug("Trying new position", o), n ? h.set.position(o) : !1;
                             if (!b.lastResort) return h.debug("Popup could not find a position in view", n), h.error(w.cannotPlace, z), h.remove.attempts(), h.remove.loading(), h.reset(), !1
                         }
                         return h.debug("Position is on stage", o), h.remove.attempts(), h.set.fluidWidth(), h.remove.loading(), !0
                     }
                     , fluidWidth: function () {
                         b.setFluidWidth && n.hasClass(x.fluid) && n.css("width", r.width())
                     }
                     , visible: function () {
                         A.addClass(x.visible)
                     }
                 }
                 , remove: {
                     loading: function () {
                         n.removeClass(x.loading)
                     }
                     , visible: function () {
                         A.removeClass(x.visible)
                     }
                     , attempts: function () {
                         h.verbose("Resetting all searched positions"), O = 0, D = !1
                     }
                 }
                 , bind: {
                     events: function () {
                         h.debug("Binding popup events to module"), "click" == b.on ? A.on("click" + T, h.toggle) : h.get.startEvent() && A.on(h.get.startEvent() + T, h.event.start).on(h.get.endEvent() + T, h.event.end), b.target && h.debug("Target set to element", E), F.on("resize" + p, h.event.resize)
                     }
                     , popup: function () {
                         h.verbose("Allowing hover events on popup to prevent closing"), n && h.has.popup() && n.on("mouseenter" + T, h.event.start).on("mouseleave" + T, h.event.end)
                     }
                     , close: function () {
                         (b.hideOnScroll === !0 || "auto" == b.hideOnScroll && "click" != b.on) && (s.one(h.get.scrollEvent() + p, h.hideGracefully), P.one(h.get.scrollEvent() + p, h.hideGracefully)), "click" == b.on && b.closable && (h.verbose("Binding popup close event to document"), s.on("click" + p, function (e) {
                             h.verbose("Pop-up clickaway intent detected"), h.hideGracefully.call(z, e)
                         }))
                     }
                 }
                 , unbind: {
                     close: function () {
                         (b.hideOnScroll === !0 || "auto" == b.hideOnScroll && "click" != b.on) && (s.off("scroll" + p, h.hide), P.off("scroll" + p, h.hide)), "click" == b.on && b.closable && (h.verbose("Removing close event from document"), s.off("click" + p))
                     }
                 }
                 , has: {
                     popup: function () {
                         return n && n.length > 0
                     }
                 }
                 , is: {
                     active: function () {
                         return A.hasClass(x.active)
                     }
                     , animating: function () {
                         return n && n.is(":animated") || n.hasClass(x.animating)
                     }
                     , visible: function () {
                         return n && n.is(":visible")
                     }
                     , dropdown: function () {
                         return A.hasClass(x.dropdown)
                     }
                     , hidden: function () {
                         return !h.is.visible()
                     }
                     , rtl: function () {
                         return "rtl" == A.css("direction")
                     }
                 }
                 , reset: function () {
                     h.remove.visible(), b.preserve ? e.fn.transition !== i && n.transition("remove transition") : h.removePopup()
                 }
                 , setting: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, b, t);
                     else {
                         if (n === i) return b[t];
                         b[t] = n
                     }
                 }
                 , internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, h, t);
                     else {
                         if (n === i) return h[t];
                         h[t] = n
                     }
                 }
                 , debug: function () {
                     b.debug && (b.performance ? h.performance.log(arguments) : (h.debug = Function.prototype.bind.call(console.info, console, b.name + ":"), h.debug.apply(console, arguments)))
                 }
                 , verbose: function () {
                     b.verbose && b.debug && (b.performance ? h.performance.log(arguments) : (h.verbose = Function.prototype.bind.call(console.info, console, b.name + ":"), h.verbose.apply(console, arguments)))
                 }
                 , error: function () {
                     h.error = Function.prototype.bind.call(console.error, console, b.name + ":"), h.error.apply(console, arguments)
                 }
                 , performance: {
                     log: function (e) {
                         var t, n, i;
                         b.performance && (t = (new Date).getTime(), i = u || t, n = t - i, u = t, d.push({
                             Name: e[0]
                             , Arguments: [].slice.call(e, 1) || ""
                             , Element: z
                             , "Execution Time": n
                         })), clearTimeout(h.performance.timer), h.performance.timer = setTimeout(h.performance.display, 100)
                     }
                     , display: function () {
                         var t = b.name + ":"
                             , n = 0;
                         u = !1, clearTimeout(h.performance.timer), e.each(d, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", c && (t += " '" + c + "'"), (console.group !== i || console.table !== i) && d.length > 0 && (console.groupCollapsed(t), console.table ? console.table(d) : e.each(d, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), d = []
                     }
                 }
                 , invoke: function (t, n, o) {
                     var r, s, c, l = q;
                     return n = n || g, o = z || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                 }
             }, m ? (q === i && h.initialize(), h.invoke(f)) : (q !== i && q.invoke("destroy"), h.initialize())
         }), a !== i ? a : this
     }, e.fn.popup.settings = {
         name: "Popup"
         , debug: !1
         , verbose: !0
         , performance: !0
         , namespace: "popup"
         , onCreate: function () {}
         , onRemove: function () {}
         , onShow: function () {}
         , onVisible: function () {}
         , onHide: function () {}
         , onHidden: function () {}
         , variation: ""
         , content: !1
         , html: !1
         , title: !1
         , on: "hover"
         , closable: !0
         , hideOnScroll: "auto"
         , exclusive: !0
         , context: "body"
         , position: "top left"
         , prefer: "opposite"
         , lastResort: !1
         , delay: {
             show: 30
             , hide: 0
         }
         , setFluidWidth: !0
         , movePopup: !0
         , target: !1
         , popup: !1
         , inline: !1
         , preserve: !1
         , hoverable: !1
         , duration: 200
         , easing: "easeOutQuint"
         , transition: "scale"
         , distanceAway: 0
         , offset: 0
         , maxSearchDepth: 20
         , error: {
             invalidPosition: "The position you specified is not a valid position"
             , cannotPlace: "No visible position could be found for the popup"
             , method: "The method you called is not defined."
         }
         , metadata: {
             activator: "activator"
             , content: "content"
             , html: "html"
             , offset: "offset"
             , position: "position"
             , title: "title"
             , variation: "variation"
         }
         , className: {
             active: "active"
             , animating: "animating"
             , dropdown: "dropdown"
             , fluid: "fluid"
             , loading: "loading"
             , popup: "ui popup"
             , position: "top left center bottom right"
             , visible: "visible"
         }
         , selector: {
             popup: ".ui.popup"
         }
         , templates: {
             escape: function (e) {
                 var t = /[&<>"'`]/g
                     , n = /[&<>"'`]/
                     , i = {
                         "&": "&amp;"
                         , "<": "&lt;"
                         , ">": "&gt;"
                         , '"': "&quot;"
                         , "'": "&#x27;"
                         , "`": "&#x60;"
                     }
                     , o = function (e) {
                         return i[e]
                     };
                 return n.test(e) ? e.replace(t, o) : e
             }
             , popup: function (t) {
                 var n = ""
                     , o = e.fn.popup.settings.templates.escape;
                 return typeof t !== i && (typeof t.title !== i && t.title && (t.title = o(t.title), n += '<div class="header">' + t.title + "</div>"), typeof t.content !== i && t.content && (t.content = o(t.content), n += '<div class="content">' + t.content + "</div>")), n
             }
         }
     }, e.extend(e.easing, {
         easeOutQuad: function (e, t, n, i, o) {
             return -i * (t /= o) * (t - 2) + n
         }
     })
 }(jQuery, window, document)
 , function (e, t, n, i) {
     "use strict";
     e.fn.progress = function (t) {
         var o, a = e(this)
             , r = a.selector || ""
             , s = (new Date).getTime()
             , c = []
             , l = arguments[0]
             , u = "string" == typeof l
             , d = [].slice.call(arguments, 1);
         return a.each(function () {
             var a, f, m = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.progress.settings, t) : e.extend({}, e.fn.progress.settings)
                 , g = m.className
                 , p = m.metadata
                 , v = m.namespace
                 , h = m.selector
                 , b = m.error
                 , y = "." + v
                 , x = "module-" + v
                 , w = e(this)
                 , C = e(this).find(h.bar)
                 , k = e(this).find(h.progress)
                 , T = e(this).find(h.label)
                 , S = this
                 , A = w.data(x)
                 , P = !1;
             f = {
                 initialize: function () {
                     f.debug("Initializing progress bar", m), a = f.get.transitionEnd(), f.read.metadata(), f.set.duration(), f.set.initials(), f.instantiate()
                 }
                 , instantiate: function () {
                     f.verbose("Storing instance of progress", f), A = f, w.data(x, f)
                 }
                 , destroy: function () {
                     f.verbose("Destroying previous progress for", w), clearInterval(A.interval), f.remove.state(), w.removeData(x), A = i
                 }
                 , reset: function () {
                     f.set.percent(0)
                 }
                 , complete: function () {
                     (f.percent === i || f.percent < 100) && f.set.percent(100)
                 }
                 , read: {
                     metadata: function () {
                         w.data(p.percent) && (f.verbose("Current percent value set from metadata"), f.percent = w.data(p.percent)), w.data(p.total) && (f.verbose("Total value set from metadata"), f.total = w.data(p.total)), w.data(p.value) && (f.verbose("Current value set from metadata"), f.value = w.data(p.value))
                     }
                     , currentValue: function () {
                         return f.value !== i ? f.value : !1
                     }
                 }
                 , increment: function (e) {
                     var t, n, i, o = f.total || !1;
                     o ? (n = f.value || 0, e = e || 1, i = n + e, t = f.total, f.debug("Incrementing value by", e, n, t), i > t && (f.debug("Value cannot increment above total", t), i = t), f.set.progress(i)) : (n = f.percent || 0, e = e || f.get.randomValue(), i = n + e, t = 100, f.debug("Incrementing percentage by", e, n), i > t && (f.debug("Value cannot increment above 100 percent"), i = t), f.set.progress(i))
                 }
                 , decrement: function (e) {
                     var t, n, i = f.total || !1
                         , o = 0;
                     i ? (t = f.value || 0, e = e || 1, n = t - e, f.debug("Decrementing value by", e, t)) : (t = f.percent || 0, e = e || f.get.randomValue(), n = t - e, f.debug("Decrementing percentage by", e, t)), o > n && (f.debug("Value cannot decrement below 0"), n = 0), f.set.progress(n)
                 }
                 , get: {
                     text: function (e) {
                         var t = f.value || 0
                             , n = f.total || 0
                             , i = f.is.visible() && P ? f.get.displayPercent() : f.percent || 0
                             , o = f.total > 0 ? n - t : 100 - i;
                         return e = e || "", e = e.replace("{value}", t).replace("{total}", n).replace("{left}", o).replace("{percent}", i), f.debug("Adding variables to progress bar text", e), e
                     }
                     , randomValue: function () {
                         return f.debug("Generating random increment percentage"), Math.floor(Math.random() * m.random.max + m.random.min)
                     }
                     , transitionEnd: function () {
                         var e, t = n.createElement("element")
                             , o = {
                                 transition: "transitionend"
                                 , OTransition: "oTransitionEnd"
                                 , MozTransition: "transitionend"
                                 , WebkitTransition: "webkitTransitionEnd"
                             };
                         for (e in o)
                             if (t.style[e] !== i) return o[e]
                     }
                     , displayPercent: function () {
                         var e = C.width()
                             , t = w.width()
                             , n = parseInt(C.css("min-width"), 10)
                             , i = e > n ? e / t * 100 : f.percent;
                         return Math.round(0 === m.precision ? i : 10 * i * m.precision / (10 * m.precision))
                     }
                     , percent: function () {
                         return f.percent || 0
                     }
                     , value: function () {
                         return f.value || !1
                     }
                     , total: function () {
                         return f.total || !1
                     }
                 }
                 , is: {
                     success: function () {
                         return w.hasClass(g.success)
                     }
                     , warning: function () {
                         return w.hasClass(g.warning)
                     }
                     , error: function () {
                         return w.hasClass(g.error)
                     }
                     , active: function () {
                         return w.hasClass(g.active)
                     }
                     , visible: function () {
                         return w.is(":visible")
                     }
                 }
                 , remove: {
                     state: function () {
                         f.verbose("Removing stored state"), delete f.total, delete f.percent, delete f.value
                     }
                     , active: function () {
                         f.verbose("Removing active state"), w.removeClass(g.active)
                     }
                     , success: function () {
                         f.verbose("Removing success state"), w.removeClass(g.success)
                     }
                     , warning: function () {
                         f.verbose("Removing warning state"), w.removeClass(g.warning)
                     }
                     , error: function () {
                         f.verbose("Removing error state"), w.removeClass(g.error)
                     }
                 }
                 , set: {
                     barWidth: function (e) {
                         e > 100 ? f.error(b.tooHigh, e) : 0 > e ? f.error(b.tooLow, e) : (C.css("width", e + "%"), w.attr("data-percent", parseInt(e, 10)))
                     }
                     , duration: function (e) {
                         e = e || m.duration, e = "number" == typeof e ? e + "ms" : e, f.verbose("Setting progress bar transition duration", e), C.css({
                             "-webkit-transition-duration": e
                             , "-moz-transition-duration": e
                             , "-ms-transition-duration": e
                             , "-o-transition-duration": e
                             , "transition-duration": e
                         })
                     }
                     , initials: function () {
                         m.total !== !1 && (f.verbose("Current total set in settings", m.total), f.total = m.total), m.value !== !1 && (f.verbose("Current value set in settings", m.value), f.value = m.value), m.percent !== !1 && (f.verbose("Current percent set in settings", m.percent), f.percent = m.percent), f.percent !== i ? f.set.percent(f.percent) : f.value !== i && f.set.progress(f.value)
                     }
                     , percent: function (e) {
                         e = "string" == typeof e ? +e.replace("%", "") : e, e > 0 && 1 > e && (f.verbose("Module percentage passed as decimal, converting"), e = 100 * e), e = Math.round(0 === m.precision ? e : 10 * e * m.precision / (10 * m.precision)), f.percent = e, f.total ? f.value = Math.round(e / 100 * f.total) : m.limitValues && (f.value = f.value > 100 ? 100 : f.value < 0 ? 0 : f.value), f.set.barWidth(e), f.is.visible() && f.set.labelInterval(), f.set.labels(), m.onChange.call(S, e, f.value, f.total)
                     }
                     , labelInterval: function () {
                         var e = function () {
                             f.verbose("Bar finished animating, removing continuous label updates"), clearInterval(f.interval), P = !1, f.set.labels()
                         };
                         clearInterval(f.interval), C.one(a + y, e), f.timer = setTimeout(e, m.duration + 100), P = !0, f.interval = setInterval(f.set.labels, m.framerate)
                     }
                     , labels: function () {
                         f.verbose("Setting both bar progress and outer label text"), f.set.barLabel(), f.set.state()
                     }
                     , label: function (e) {
                         e = e || "", e && (e = f.get.text(e), f.debug("Setting label to text", e), T.text(e))
                     }
                     , state: function (e) {
                         e = e !== i ? e : f.percent, 100 === e ? !m.autoSuccess || f.is.warning() || f.is.error() ? (f.verbose("Reached 100% removing active state"), f.remove.active()) : (f.set.success(), f.debug("Automatically triggering success at 100%")) : e > 0 ? (f.verbose("Adjusting active progress bar label", e), f.set.active()) : (f.remove.active(), f.set.label(m.text.active))
                     }
                     , barLabel: function (e) {
                         e !== i ? k.text(f.get.text(e)) : "ratio" == m.label && f.total ? (f.debug("Adding ratio to bar label"), k.text(f.get.text(m.text.ratio))) : "percent" == m.label && (f.debug("Adding percentage to bar label"), k.text(f.get.text(m.text.percent)))
                     }
                     , active: function (e) {
                         e = e || m.text.active, f.debug("Setting active state"), m.showActivity && !f.is.active() && w.addClass(g.active), f.remove.warning(), f.remove.error(), f.remove.success(), e && f.set.label(e), m.onActive.call(S, f.value, f.total)
                     }
                     , success: function (e) {
                         e = e || m.text.success, f.debug("Setting success state"), w.addClass(g.success), f.remove.active(), f.remove.warning(), f.remove.error(), f.complete(), e && f.set.label(e), m.onSuccess.call(S, f.total)
                     }
                     , warning: function (e) {
                         e = e || m.text.warning, f.debug("Setting warning state"), w.addClass(g.warning), f.remove.active(), f.remove.success(), f.remove.error(), f.complete(), e && f.set.label(e), m.onWarning.call(S, f.value, f.total)
                     }
                     , error: function (e) {
                         e = e || m.text.error, f.debug("Setting error state"), w.addClass(g.error), f.remove.active(), f.remove.success(), f.remove.warning(), f.complete(), e && f.set.label(e), m.onError.call(S, f.value, f.total)
                     }
                     , total: function (e) {
                         f.total = e
                     }
                     , progress: function (e) {
                         var t, n = "string" == typeof e ? "" !== e.replace(/[^\d.]/g, "") ? +e.replace(/[^\d.]/g, "") : !1 : e;
                         n === !1 && f.error(b.nonNumeric, e), f.total ? (f.value = n, t = n / f.total * 100, f.debug("Calculating percent complete from total", t), f.set.percent(t)) : (t = n, f.debug("Setting value to exact percentage value", t), f.set.percent(t))
                     }
                 }
                 , setting: function (t, n) {
                     if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (n === i) return m[t];
                         m[t] = n
                     }
                 }
                 , internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, f, t);
                     else {
                         if (n === i) return f[t];
                         f[t] = n
                     }
                 }
                 , debug: function () {
                     m.debug && (m.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), f.debug.apply(console, arguments)))
                 }
                 , verbose: function () {
                     m.verbose && m.debug && (m.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), f.verbose.apply(console, arguments)))
                 }
                 , error: function () {
                     f.error = Function.prototype.bind.call(console.error, console, m.name + ":"), f.error.apply(console, arguments)
                 }
                 , performance: {
                     log: function (e) {
                         var t, n, i;
                         m.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                             Name: e[0]
                             , Arguments: [].slice.call(e, 1) || ""
                             , Element: S
                             , "Execution Time": n
                         })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 100)
                     }
                     , display: function () {
                         var t = m.name + ":"
                             , n = 0;
                         s = !1, clearTimeout(f.performance.timer), e.each(c, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 }
                 , invoke: function (t, n, a) {
                     var r, s, c, l = A;
                     return n = n || d, a = S || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (f.error(b.method, t), !1);
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                 }
             }, u ? (A === i && f.initialize(), f.invoke(l)) : (A !== i && A.invoke("destroy"), f.initialize())
         }), o !== i ? o : this
     }, e.fn.progress.settings = {
         name: "Progress"
         , namespace: "progress"
         , debug: !1
         , verbose: !0
         , performance: !0
         , random: {
             min: 2
             , max: 5
         }
         , duration: 300
         , autoSuccess: !0
         , showActivity: !0
         , limitValues: !0
         , label: "percent"
         , precision: 1
         , framerate: 1e3 / 30
         , percent: !1
         , total: !1
         , value: !1
         , onChange: function () {}
         , onSuccess: function () {}
         , onActive: function () {}
         , onError: function () {}
         , onWarning: function () {}
         , error: {
             method: "The method you called is not defined."
             , nonNumeric: "Progress value is non numeric"
             , tooHigh: "Value specified is above 100%"
             , tooLow: "Value specified is below 0%"
         }
         , regExp: {
             variable: /\{\$*[A-z0-9]+\}/g
         }
         , metadata: {
             percent: "percent"
             , total: "total"
             , value: "value"
         }
         , selector: {
             bar: "> .bar"
             , label: "> .label"
             , progress: ".bar > .progress"
         }
         , text: {
             active: !1
             , error: !1
             , success: !1
             , warning: !1
             , percent: "{percent}%"
             , ratio: "{value} of {total}"
         }
         , className: {
             active: "active"
             , error: "error"
             , success: "success"
             , warning: "warning"
         }
     }
 }(jQuery, window, document)
 , function (e, t, n, i) {
     "use strict";
     e.fn.rating = function (t) {
         var n, o = e(this)
             , a = o.selector || ""
             , r = (new Date).getTime()
             , s = []
             , c = arguments[0]
             , l = "string" == typeof c
             , u = [].slice.call(arguments, 1);
         return o.each(function () {
             var d, f = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.rating.settings, t) : e.extend({}, e.fn.rating.settings)
                 , m = f.namespace
                 , g = f.className
                 , p = f.metadata
                 , v = f.selector
                 , h = (f.error, "." + m)
                 , b = "module-" + m
                 , y = this
                 , x = e(this).data(b)
                 , w = e(this)
                 , C = w.find(v.icon);
             d = {
                 initialize: function () {
                     d.verbose("Initializing rating module", f), 0 === C.length && d.setup.layout(), f.interactive ? d.enable() : d.disable(), f.initialRating && (d.debug("Setting initial rating"), d.setRating(f.initialRating)), w.data(p.rating) && (d.debug("Rating found in metadata"), d.setRating(w.data(p.rating))), d.instantiate()
                 }
                 , instantiate: function () {
                     d.verbose("Instantiating module", f), x = d, w.data(b, d)
                 }
                 , destroy: function () {
                     d.verbose("Destroying previous instance", x), w.removeData(b), C.off(h)
                 }
                 , refresh: function () {
                     C = w.find(v.icon)
                 }
                 , setup: {
                     layout: function () {
                         var t = w.data(p.maxRating) || f.maxRating;
                         d.debug("Generating icon html dynamically"), w.html(e.fn.rating.settings.templates.icon(t)), d.refresh()
                     }
                 }
                 , event: {
                     mouseenter: function () {
                         var t = e(this);
                         t.nextAll().removeClass(g.selected), w.addClass(g.selected), t.addClass(g.selected).prevAll().addClass(g.selected)
                     }
                     , mouseleave: function () {
                         w.removeClass(g.selected), C.removeClass(g.selected)
                     }
                     , click: function () {
                         var t = e(this)
                             , n = d.getRating()
                             , i = C.index(t) + 1
                             , o = "auto" == f.clearable ? 1 === C.length : f.clearable;
                         o && n == i ? d.clearRating() : d.setRating(i)
                     }
                 }
                 , clearRating: function () {
                     d.debug("Clearing current rating"), d.setRating(0)
                 }
                 , getRating: function () {
                     var e = C.filter("." + g.active).length;
                     return d.verbose("Current rating retrieved", e), e
                 }
                 , enable: function () {
                     d.debug("Setting rating to interactive mode"), C.on("mouseenter" + h, d.event.mouseenter).on("mouseleave" + h, d.event.mouseleave).on("click" + h, d.event.click), w.removeClass(g.disabled)
                 }
                 , disable: function () {
                     d.debug("Setting rating to read-only mode"), C.off(h), w.addClass(g.disabled)
                 }
                 , setRating: function (e) {
                     var t = e - 1 >= 0 ? e - 1 : 0
                         , n = C.eq(t);
                     w.removeClass(g.selected), C.removeClass(g.selected).removeClass(g.active), e > 0 && (d.verbose("Setting current rating to", e), n.prevAll().andSelf().addClass(g.active)), f.onRate.call(y, e)
                 }
                 , setting: function (t, n) {
                     if (d.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);
                     else {
                         if (n === i) return f[t];
                         f[t] = n
                     }
                 }
                 , internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, d, t);
                     else {
                         if (n === i) return d[t];
                         d[t] = n
                     }
                 }
                 , debug: function () {
                     f.debug && (f.performance ? d.performance.log(arguments) : (d.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), d.debug.apply(console, arguments)))
                 }
                 , verbose: function () {
                     f.verbose && f.debug && (f.performance ? d.performance.log(arguments) : (d.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), d.verbose.apply(console, arguments)))
                 }
                 , error: function () {
                     d.error = Function.prototype.bind.call(console.error, console, f.name + ":"), d.error.apply(console, arguments)
                 }
                 , performance: {
                     log: function (e) {
                         var t, n, i;
                         f.performance && (t = (new Date).getTime(), i = r || t, n = t - i, r = t, s.push({
                             Name: e[0]
                             , Arguments: [].slice.call(e, 1) || ""
                             , Element: y
                             , "Execution Time": n
                         })), clearTimeout(d.performance.timer), d.performance.timer = setTimeout(d.performance.display, 100)
                     }
                     , display: function () {
                         var t = f.name + ":"
                             , n = 0;
                         r = !1, clearTimeout(d.performance.timer), e.each(s, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", a && (t += " '" + a + "'"), o.length > 1 && (t += " (" + o.length + ")"), (console.group !== i || console.table !== i) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), s = []
                     }
                 }
                 , invoke: function (t, o, a) {
                     var r, s, c, l = x;
                     return o = o || u, a = y || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, o) : s !== i && (c = s), e.isArray(n) ? n.push(c) : n !== i ? n = [n, c] : c !== i && (n = c), s
                 }
             }, l ? (x === i && d.initialize(), d.invoke(c)) : (x !== i && x.invoke("destroy"), d.initialize())
         }), n !== i ? n : this
     }, e.fn.rating.settings = {
         name: "Rating"
         , namespace: "rating"
         , debug: !1
         , verbose: !0
         , performance: !0
         , initialRating: 0
         , interactive: !0
         , maxRating: 4
         , clearable: "auto"
         , onRate: function () {}
         , error: {
             method: "The method you called is not defined"
             , noMaximum: "No maximum rating specified. Cannot generate HTML automatically"
         }
         , metadata: {
             rating: "rating"
             , maxRating: "maxRating"
         }
         , className: {
             active: "active"
             , disabled: "disabled"
             , selected: "selected"
             , loading: "loading"
         }
         , selector: {
             icon: ".icon"
         }
         , templates: {
             icon: function (e) {
                 for (var t = 1, n = ""; e >= t;) n += '<i class="icon"></i>', t++;
                 return n
             }
         }
     }
 }(jQuery, window, document)
 , function (e, t, n, i) {
     "use strict";
     e.fn.search = function (o) {
         var a, r = e(this)
             , s = r.selector || ""
             , c = (new Date).getTime()
             , l = []
             , u = arguments[0]
             , d = "string" == typeof u
             , f = [].slice.call(arguments, 1);
         return e(this).each(function () {
             var m, g = e.extend(!0, {}, e.fn.search.settings, o)
                 , p = g.className
                 , v = g.metadata
                 , h = g.regExp
                 , b = g.selector
                 , y = g.error
                 , x = g.namespace
                 , w = "." + x
                 , C = x + "-module"
                 , k = e(this)
                 , T = k.find(b.prompt)
                 , S = k.find(b.searchButton)
                 , A = k.find(b.results)
                 , P = (k.find(b.result), k.find(b.category), this)
                 , E = k.data(C);
             m = {
                 initialize: function () {
                     m.verbose("Initializing module");
                     var e = T[0]
                         , t = e !== i && e.oninput !== i ? "input" : e !== i && e.onpropertychange !== i ? "propertychange" : "keyup";
                     g.automatic && T.on(t + w, m.throttle).attr("autocomplete", "off"), T.on("focus" + w, m.event.focus).on("blur" + w, m.event.blur).on("keydown" + w, m.handleKeyboard), S.on("click" + w, m.query), A.on("mousedown" + w, m.event.result.mousedown).on("mouseup" + w, m.event.result.mouseup).on("click" + w, b.result, m.event.result.click), m.instantiate()
                 }
                 , instantiate: function () {
                     m.verbose("Storing instance of module", m), E = m, k.data(C, m)
                 }
                 , destroy: function () {
                     m.verbose("Destroying instance"), k.removeData(C), T.off(w), S.off(w), A.off(w)
                 }
                 , event: {
                     focus: function () {
                         m.set.focus(), clearTimeout(m.timer), m.throttle(), m.has.minimumCharacters() && m.showResults()
                     }
                     , blur: function () {
                         var e = n.activeElement === this;
                         e || m.resultsClicked || (m.cancel.query(), m.remove.focus(), m.timer = setTimeout(m.hideResults, g.hideDelay))
                     }
                     , result: {
                         mousedown: function () {
                             m.resultsClicked = !0
                         }
                         , mouseup: function () {
                             m.resultsClicked = !1
                         }
                         , click: function (n) {
                             m.debug("Search result selected");
                             var i = e(this)
                                 , o = i.find(b.title).eq(0)
                                 , a = i.find("a[href]").eq(0)
                                 , r = a.attr("href") || !1
                                 , s = a.attr("target") || !1
                                 , c = (o.html(), o.length > 0 ? o.text() : !1)
                                 , l = m.get.results()
                                 , u = m.get.result(c, l);
                             return e.isFunction(g.onSelect) && g.onSelect.call(P, u, l) === !1 ? void m.debug("Custom onSelect callback cancelled default select action") : (m.hideResults(), c && m.set.value(c), void(r && (m.verbose("Opening search link found in result", a), "_blank" == s || n.ctrlKey ? t.open(r) : t.location.href = r)))
                         }
                     }
                 }
                 , handleKeyboard: function (e) {
                     var t, n = k.find(b.result)
                         , i = k.find(b.category)
                         , o = n.index(n.filter("." + p.active))
                         , a = n.length
                         , r = e.which
                         , s = {
                             backspace: 8
                             , enter: 13
                             , escape: 27
                             , upArrow: 38
                             , downArrow: 40
                         };
                     if (r == s.escape && (m.verbose("Escape key pressed, blurring search field"), T.trigger("blur")), m.is.visible())
                         if (r == s.enter) {
                             if (m.verbose("Enter key pressed, selecting active result"), n.filter("." + p.active).length > 0) return m.event.result.click.call(n.filter("." + p.active), e), e.preventDefault(), !1
                         }
                         else r == s.upArrow ? (m.verbose("Up key pressed, changing active result"), t = 0 > o - 1 ? o : o - 1, i.removeClass(p.active), n.removeClass(p.active).eq(t).addClass(p.active).closest(i).addClass(p.active), e.preventDefault()) : r == s.downArrow && (m.verbose("Down key pressed, changing active result"), t = o + 1 >= a ? o : o + 1, i.removeClass(p.active), n.removeClass(p.active).eq(t).addClass(p.active).closest(i).addClass(p.active), e.preventDefault());
                     else r == s.enter && (m.verbose("Enter key pressed, executing query"), m.query(), m.set.buttonPressed(), T.one("keyup", m.remove.buttonFocus))
                 }
                 , setup: {
                     api: function () {
                         var e = {
                             on: !1
                             , action: "search"
                             , onFailure: m.error
                         };
                         m.verbose("First request, initializing API"), k.api(e)
                     }
                 }
                 , can: {
                     useAPI: function () {
                         return e.fn.api !== i
                     }
                     , transition: function () {
                         return g.transition && e.fn.transition !== i && k.transition("is supported")
                     }
                 }
                 , is: {
                     empty: function () {
                         return "" === A.html()
                     }
                     , visible: function () {
                         return A.filter(":visible").length > 0
                     }
                     , focused: function () {
                         return T.filter(":focus").length > 0
                     }
                 }
                 , get: {
                     value: function () {
                         return T.val()
                     }
                     , results: function () {
                         var e = k.data(v.results);
                         return e
                     }
                     , result: function (t, n) {
                         var i = !1;
                         return t = t || m.get.value(), n = n || m.get.results(), "category" === g.type ? (m.debug("Finding result that matches", t), e.each(n, function (n, o) {
                             return e.isArray(o.results) && (i = m.search.object(t, o.results)[0], i && i.length > 0) ? !0 : void 0
                         })) : (m.debug("Finding result in results object", t), i = m.search.object(t, n)[0]), i
                     }
                 }
                 , set: {
                     focus: function () {
                         k.addClass(p.focus)
                     }
                     , loading: function () {
                         k.addClass(p.loading)
                     }
                     , value: function (e) {
                         m.verbose("Setting search input value", e), T.val(e), m.query()
                     }
                     , buttonPressed: function () {
                         S.addClass(p.pressed)
                     }
                 }
                 , remove: {
                     loading: function () {
                         k.removeClass(p.loading)
                     }
                     , focus: function () {
                         k.removeClass(p.focus)
                     }
                     , buttonPressed: function () {
                         S.removeClass(p.pressed)
                     }
                 }
                 , query: function () {
                     var t = m.get.value()
                         , n = m.read.cache(t);
                     n ? (m.debug("Reading result for " + t + " from cache"), m.save.results(n.results), m.addResults(n.html)) : (m.debug("Querying for " + t), e.isPlainObject(g.source) || e.isArray(g.source) ? m.search.local(t) : m.can.useAPI() ? g.apiSettings ? (m.debug("Searching with specified API settings", g.apiSettings), m.search.remote(t)) : e.api.settings.api.search !== i ? (m.debug("Searching with default search API endpoint"), m.search.remote(t)) : m.error(y.noEndpoint) : m.error(y.source), g.onSearchQuery.call(P, t))
                 }
                 , search: {
                     local: function (e) {
                         var t, n = m.search.object(e, g.content);
                         m.set.loading(), m.save.results(n), m.debug("Returned local search results", n), t = m.generateResults({
                             results: n
                         }), m.remove.loading(), m.write.cache(e, {
                             html: t
                             , results: n
                         }), m.addResults(t)
                     }
                     , remote: function (t) {
                         var n = {
                             onSuccess: function (e) {
                                 m.parse.response.call(P, e, t)
                             }
                             , urlData: {
                                 query: t
                             }
                         };
                         k.api("get request") || m.setup.api(), e.extend(!0, n, g.apiSettings), m.debug("Executing search", n), m.cancel.query(), k.api("setting", n).api("query")
                     }
                     , object: function (t, n) {
                         var o = []
                             , a = []
                             , r = e.isArray(g.searchFields) ? g.searchFields : [g.searchFields]
                             , s = t.replace(h.escape, "\\$&")
                             , c = new RegExp(h.exact + s, "i");
                         return n = n || g.source, n === i ? (m.error(y.source), []) : (e.each(r, function (i, r) {
                             e.each(n, function (n, i) {
                                 var s = "string" == typeof i[r]
                                     , l = -1 == e.inArray(i, o) && -1 == e.inArray(i, a);
                                 s && l && (i[r].match(c) ? o.push(i) : g.searchFullText && m.fuzzySearch(t, i[r]) && a.push(i))
                             })
                         }), e.merge(o, a))
                     }
                 }
                 , fuzzySearch: function (e, t) {
                     var n = t.length
                         , i = e.length;
                     if (e = e.toLowerCase(), t = t.toLowerCase(), i > n) return !1;
                     if (i === n) return e === t;
                     e: for (var o = 0, a = 0; i > o; o++) {
                         for (var r = e.charCodeAt(o); n > a;)
                             if (t.charCodeAt(a++) === r) continue e;
                         return !1
                     }
                     return !0
                 }
                 , parse: {
                     response: function (e, t) {
                         var n = m.generateResults(e);
                         m.verbose("Parsing server response", e), e !== i && t !== i && e.results !== i && (m.write.cache(t, {
                             html: n
                             , results: e.results
                         }), m.save.results(e.results), m.addResults(n))
                     }
                 }
                 , throttle: function () {
                     clearTimeout(m.timer), m.has.minimumCharacters() ? m.timer = setTimeout(m.query, g.searchDelay) : m.hideResults()
                 }
                 , cancel: {
                     query: function () {
                         m.can.useAPI() && k.api("abort")
                     }
                 }
                 , has: {
                     minimumCharacters: function () {
                         var e = m.get.value()
                             , t = e.length;
                         return t >= g.minCharacters
                     }
                 }
                 , read: {
                     cache: function (e) {
                         var t = k.data(v.cache);
                         return g.cache ? (m.verbose("Checking cache for generated html for query", e), "object" == typeof t && t[e] !== i ? t[e] : !1) : !1
                     }
                 }
                 , save: {
                     results: function (e) {
                         m.verbose("Saving current search results to metadata", e), k.data(v.results, e)
                     }
                 }
                 , write: {
                     cache: function (e, t) {
                         var n = k.data(v.cache) !== i ? k.data(v.cache) : {};
                         g.cache && (m.verbose("Writing generated html to cache", e, t), n[e] = t, k.data(v.cache, n))
                     }
                 }
                 , addResults: function (t) {
                     return e.isFunction(g.onResultsAdd) && g.onResultsAdd.call(A, t) === !1 ? (m.debug("onResultsAdd callback cancelled default action"), !1) : (A.html(t), void m.showResults())
                 }
                 , showResults: function () {
                     m.is.visible() || !m.is.focused() || m.is.empty() || (m.can.transition() ? (m.debug("Showing results with css animations"), A.transition({
                         animation: g.transition + " in"
                         , duration: g.duration
                         , queue: !0
                     })) : (m.debug("Showing results with javascript"), A.stop().fadeIn(g.duration, g.easing)), g.onResultsOpen.call(A))
                 }
                 , hideResults: function () {
                     m.is.visible() && (m.can.transition() ? (m.debug("Hiding results with css animations"), A.transition({
                         animation: g.transition + " out"
                         , duration: g.duration
                         , queue: !0
                     })) : (m.debug("Hiding results with javascript"), A.stop().fadeOut(g.duration, g.easing)), g.onResultsClose.call(A))
                 }
                 , generateResults: function (t) {
                     m.debug("Generating html from response", t);
                     var n = g.templates[g.type]
                         , i = e.isPlainObject(t.results) && !e.isEmptyObject(t.results)
                         , o = e.isArray(t.results) && t.results.length > 0
                         , a = "";
                     return i || o ? (g.maxResults > 0 && (i ? "standard" == g.type && m.error(y.maxResults) : t.results = t.results.slice(0, g.maxResults)), e.isFunction(n) ? a = n(t) : m.error(y.noTemplate, !1)) : a = m.displayMessage(y.noResults, "empty"), g.onResults.call(P, t), a
                 }
                 , displayMessage: function (e, t) {
                     return t = t || "standard", m.debug("Displaying message", e, t), m.addResults(g.templates.message(e, t)), g.templates.message(e, t)
                 }
                 , setting: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, g, t);
                     else {
                         if (n === i) return g[t];
                         g[t] = n
                     }
                 }
                 , internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (n === i) return m[t];
                         m[t] = n
                     }
                 }
                 , debug: function () {
                     g.debug && (g.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), m.debug.apply(console, arguments)))
                 }
                 , verbose: function () {
                     g.verbose && g.debug && (g.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), m.verbose.apply(console, arguments)))
                 }
                 , error: function () {
                     m.error = Function.prototype.bind.call(console.error, console, g.name + ":"), m.error.apply(console, arguments)
                 }
                 , performance: {
                     log: function (e) {
                         var t, n, i;
                         g.performance && (t = (new Date).getTime(), i = c || t, n = t - i, c = t, l.push({
                             Name: e[0]
                             , Arguments: [].slice.call(e, 1) || ""
                             , Element: P
                             , "Execution Time": n
                         })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 100)
                     }
                     , display: function () {
                         var t = g.name + ":"
                             , n = 0;
                         c = !1, clearTimeout(m.performance.timer), e.each(l, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", s && (t += " '" + s + "'"), r.length > 1 && (t += " (" + r.length + ")"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), l = []
                     }
                 }
                 , invoke: function (t, n, o) {
                     var r, s, c, l = E;
                     return n = n || f, o = P || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                 }
             }, d ? (E === i && m.initialize(), m.invoke(u)) : (E !== i && E.invoke("destroy"), m.initialize())
         }), a !== i ? a : this
     }, e.fn.search.settings = {
         name: "Search Module"
         , namespace: "search"
         , debug: !1
         , verbose: !0
         , performance: !0
         , type: "standard"
         , minCharacters: 1
         , apiSettings: !1
         , source: !1
         , searchFields: ["title", "description"]
         , searchFullText: !0
         , automatic: "true"
         , hideDelay: 0
         , searchDelay: 100
         , maxResults: 7
         , cache: !0
         , transition: "scale"
         , duration: 300
         , easing: "easeOutExpo"
         , onSelect: !1
         , onResultsAdd: !1
         , onSearchQuery: function () {}
         , onResults: function () {}
         , onResultsOpen: function () {}
         , onResultsClose: function () {}
         , className: {
             active: "active"
             , empty: "empty"
             , focus: "focus"
             , loading: "loading"
             , pressed: "down"
         }
         , error: {
             source: "Cannot search. No source used, and Semantic API module was not included"
             , noResults: "Your search returned no results"
             , logging: "Error in debug logging, exiting."
             , noEndpoint: "No search endpoint was specified"
             , noTemplate: "A valid template name was not specified."
             , serverError: "There was an issue with querying the server."
             , maxResults: "Results must be an array to use maxResults setting"
             , method: "The method you called is not defined."
         }
         , metadata: {
             cache: "cache"
             , results: "results"
         }
         , regExp: {
             escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g
             , exact: "(?:s|^)"
         }
         , selector: {
             prompt: ".prompt"
             , searchButton: ".search.button"
             , results: ".results"
             , category: ".category"
             , result: ".result"
             , title: ".title, .name"
         }
         , templates: {
             escape: function (e) {
                 var t = /[&<>"'`]/g
                     , n = /[&<>"'`]/
                     , i = {
                         "&": "&amp;"
                         , "<": "&lt;"
                         , ">": "&gt;"
                         , '"': "&quot;"
                         , "'": "&#x27;"
                         , "`": "&#x60;"
                     }
                     , o = function (e) {
                         return i[e]
                     };
                 return n.test(e) ? e.replace(t, o) : e
             }
             , message: function (e, t) {
                 var n = "";
                 return e !== i && t !== i && (n += '<div class="message ' + t + '">', n += "empty" == t ? '<div class="header">No Results</div class="header"><div class="description">' + e + '</div class="description">' : ' <div class="description">' + e + "</div>", n += "</div>"), n
             }
             , category: function (t) {
                 var n = ""
                     , o = e.fn.search.settings.templates.escape;
                 return t.results !== i ? (e.each(t.results, function (t, a) {
                     a.results !== i && a.results.length > 0 && (n += '<div class="category"><div class="name">' + a.name + "</div>", e.each(a.results, function (e, t) {
                         n += '<div class="result">', t.url && (n += '<a href="' + t.url + '"></a>'), t.image !== i && (t.image = o(t.image), n += '<div class="image"> <img src="' + t.image + '" alt=""></div>'), n += '<div class="content">', t.price !== i && (t.price = o(t.price), n += '<div class="price">' + t.price + "</div>"), t.title !== i && (t.title = o(t.title), n += '<div class="title">' + t.title + "</div>"), t.description !== i && (n += '<div class="description">' + t.description + "</div>"), n += "</div></div>"
                     }), n += "</div>")
                 }), t.action && (n += '<a href="' + t.action.url + '" class="action">' + t.action.text + "</a>"), n) : !1
             }
             , standard: function (t) {
                 var n = "";
                 return t.results !== i ? (e.each(t.results, function (e, t) {
                     n += t.url ? '<a class="result" href="' + t.url + '">' : '<a class="result">', t.image !== i && (n += '<div class="image"> <img src="' + t.image + '"></div>'), n += '<div class="content">', t.price !== i && (n += '<div class="price">' + t.price + "</div>"), t.title !== i && (n += '<div class="title">' + t.title + "</div>"), t.description !== i && (n += '<div class="description">' + t.description + "</div>"), n += "</div>", n += "</a>"
                 }), t.action && (n += '<a href="' + t.action.url + '" class="action">' + t.action.text + "</a>"), n) : !1
             }
         }
     }
 }(jQuery, window, document)
 , function (e, t, n, i) {
     "use strict";
     e.fn.shape = function (o) {
         var a, r = e(this)
             , s = (e("body"), (new Date).getTime())
             , c = []
             , l = arguments[0]
             , u = "string" == typeof l
             , d = [].slice.call(arguments, 1)
             , f = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                 setTimeout(e, 0)
             };
         return r.each(function () {
             var t, m, g, p = r.selector || ""
                 , v = e.extend(!0, {}, e.fn.shape.settings, o)
                 , h = v.namespace
                 , b = v.selector
                 , y = v.error
                 , x = v.className
                 , w = "." + h
                 , C = "module-" + h
                 , k = e(this)
                 , T = k.find(b.sides)
                 , S = k.find(b.side)
                 , A = !1
                 , P = this
                 , E = k.data(C);
             g = {
                 initialize: function () {
                     g.verbose("Initializing module for", P), g.set.defaultSide(), g.instantiate()
                 }
                 , instantiate: function () {
                     g.verbose("Storing instance of module", g), E = g, k.data(C, E)
                 }
                 , destroy: function () {
                     g.verbose("Destroying previous module for", P), k.removeData(C).off(w)
                 }
                 , refresh: function () {
                     g.verbose("Refreshing selector cache for", P), k = e(P), T = e(this).find(b.shape), S = e(this).find(b.side)
                 }
                 , repaint: function () {
                     g.verbose("Forcing repaint event"); {
                         var e = T.get(0) || n.createElement("div");
                         e.offsetWidth
                     }
                 }
                 , animate: function (e, n) {
                     g.verbose("Animating box with properties", e), n = n || function (e) {
                         g.verbose("Executing animation callback"), e !== i && e.stopPropagation(), g.reset(), g.set.active()
                     }, v.beforeChange.call(m.get()), g.get.transitionEvent() ? (g.verbose("Starting CSS animation"), k.addClass(x.animating), T.css(e).one(g.get.transitionEvent(), n), g.set.duration(v.duration), f(function () {
                         k.addClass(x.animating), t.addClass(x.hidden)
                     })) : n()
                 }
                 , queue: function (e) {
                     g.debug("Queueing animation of", e), T.one(g.get.transitionEvent(), function () {
                         g.debug("Executing queued animation"), setTimeout(function () {
                             k.shape(e)
                         }, 0)
                     })
                 }
                 , reset: function () {
                     g.verbose("Animating states reset"), k.removeClass(x.animating).attr("style", "").removeAttr("style"), T.attr("style", "").removeAttr("style"), S.attr("style", "").removeAttr("style").removeClass(x.hidden), m.removeClass(x.animating).attr("style", "").removeAttr("style")
                 }
                 , is: {
                     complete: function () {
                         return S.filter("." + x.active)[0] == m[0]
                     }
                     , animating: function () {
                         return k.hasClass(x.animating)
                     }
                 }
                 , set: {
                     defaultSide: function () {
                         t = k.find("." + v.className.active), m = t.next(b.side).length > 0 ? t.next(b.side) : k.find(b.side).first(), A = !1, g.verbose("Active side set to", t), g.verbose("Next side set to", m)
                     }
                     , duration: function (e) {
                         e = e || v.duration, e = "number" == typeof e ? e + "ms" : e, g.verbose("Setting animation duration", e), T.add(S).css({
                             "-webkit-transition-duration": e
                             , "-moz-transition-duration": e
                             , "-ms-transition-duration": e
                             , "-o-transition-duration": e
                             , "transition-duration": e
                         })
                     }
                     , stageSize: function () {
                         var e = k.clone().addClass(x.loading)
                             , t = e.find("." + v.className.active)
                             , n = A ? e.find(b.side).eq(A) : t.next(b.side).length > 0 ? t.next(b.side) : e.find(b.side).first()
                             , i = {};
                         t.removeClass(x.active), n.addClass(x.active), e.insertAfter(k), i = {
                             width: n.outerWidth()
                             , height: n.outerHeight()
                         }, e.remove(), k.css(i), g.verbose("Resizing stage to fit new content", i)
                     }
                     , nextSide: function (e) {
                         A = e, m = S.filter(e), A = S.index(m), 0 === m.length && (g.set.defaultSide(), g.error(y.side)), g.verbose("Next side manually set to", m)
                     }
                     , active: function () {
                         g.verbose("Setting new side to active", m), S.removeClass(x.active), m.addClass(x.active), v.onChange.call(m.get()), g.set.defaultSide()
                     }
                 }
                 , flip: {
                     up: function () {
                         return !g.is.complete() || g.is.animating() || v.allowRepeats ? void(g.is.animating() ? g.queue("flip up") : (g.debug("Flipping up", m), g.set.stageSize(), g.stage.above(), g.animate(g.get.transform.up()))) : void g.debug("Side already visible", m)
                     }
                     , down: function () {
                         return !g.is.complete() || g.is.animating() || v.allowRepeats ? void(g.is.animating() ? g.queue("flip down") : (g.debug("Flipping down", m), g.set.stageSize(), g.stage.below(), g.animate(g.get.transform.down()))) : void g.debug("Side already visible", m)
                     }
                     , left: function () {
                         return !g.is.complete() || g.is.animating() || v.allowRepeats ? void(g.is.animating() ? g.queue("flip left") : (g.debug("Flipping left", m), g.set.stageSize(), g.stage.left(), g.animate(g.get.transform.left()))) : void g.debug("Side already visible", m)
                     }
                     , right: function () {
                         return !g.is.complete() || g.is.animating() || v.allowRepeats ? void(g.is.animating() ? g.queue("flip right") : (g.debug("Flipping right", m), g.set.stageSize(), g.stage.right(), g.animate(g.get.transform.right()))) : void g.debug("Side already visible", m)
                     }
                     , over: function () {
                         return !g.is.complete() || g.is.animating() || v.allowRepeats ? void(g.is.animating() ? g.queue("flip over") : (g.debug("Flipping over", m), g.set.stageSize(), g.stage.behind(), g.animate(g.get.transform.over()))) : void g.debug("Side already visible", m)
                     }
                     , back: function () {
                         return !g.is.complete() || g.is.animating() || v.allowRepeats ? void(g.is.animating() ? g.queue("flip back") : (g.debug("Flipping back", m), g.set.stageSize(), g.stage.behind(), g.animate(g.get.transform.back()))) : void g.debug("Side already visible", m)
                     }
                 }
                 , get: {
                     transform: {
                         up: function () {
                             var e = {
                                 y: -((t.outerHeight() - m.outerHeight()) / 2)
                                 , z: -(t.outerHeight() / 2)
                             };
                             return {
                                 transform: "translateY(" + e.y + "px) translateZ(" + e.z + "px) rotateX(-90deg)"
                             }
                         }
                         , down: function () {
                             var e = {
                                 y: -((t.outerHeight() - m.outerHeight()) / 2)
                                 , z: -(t.outerHeight() / 2)
                             };
                             return {
                                 transform: "translateY(" + e.y + "px) translateZ(" + e.z + "px) rotateX(90deg)"
                             }
                         }
                         , left: function () {
                             var e = {
                                 x: -((t.outerWidth() - m.outerWidth()) / 2)
                                 , z: -(t.outerWidth() / 2)
                             };
                             return {
                                 transform: "translateX(" + e.x + "px) translateZ(" + e.z + "px) rotateY(90deg)"
                             }
                         }
                         , right: function () {
                             var e = {
                                 x: -((t.outerWidth() - m.outerWidth()) / 2)
                                 , z: -(t.outerWidth() / 2)
                             };
                             return {
                                 transform: "translateX(" + e.x + "px) translateZ(" + e.z + "px) rotateY(-90deg)"
                             }
                         }
                         , over: function () {
                             var e = {
                                 x: -((t.outerWidth() - m.outerWidth()) / 2)
                             };
                             return {
                                 transform: "translateX(" + e.x + "px) rotateY(180deg)"
                             }
                         }
                         , back: function () {
                             var e = {
                                 x: -((t.outerWidth() - m.outerWidth()) / 2)
                             };
                             return {
                                 transform: "translateX(" + e.x + "px) rotateY(-180deg)"
                             }
                         }
                     }
                     , transitionEvent: function () {
                         var e, t = n.createElement("element")
                             , o = {
                                 transition: "transitionend"
                                 , OTransition: "oTransitionEnd"
                                 , MozTransition: "transitionend"
                                 , WebkitTransition: "webkitTransitionEnd"
                             };
                         for (e in o)
                             if (t.style[e] !== i) return o[e]
                     }
                     , nextSide: function () {
                         return t.next(b.side).length > 0 ? t.next(b.side) : k.find(b.side).first()
                     }
                 }
                 , stage: {
                     above: function () {
                         var e = {
                             origin: (t.outerHeight() - m.outerHeight()) / 2
                             , depth: {
                                 active: m.outerHeight() / 2
                                 , next: t.outerHeight() / 2
                             }
                         };
                         g.verbose("Setting the initial animation position as above", m, e), t.css({
                             transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)"
                         }), m.addClass(x.animating).css({
                             display: "block"
                             , top: e.origin + "px"
                             , transform: "rotateX(90deg) translateZ(" + e.depth.next + "px)"
                         })
                     }
                     , below: function () {
                         var e = {
                             origin: (t.outerHeight() - m.outerHeight()) / 2
                             , depth: {
                                 active: m.outerHeight() / 2
                                 , next: t.outerHeight() / 2
                             }
                         };
                         g.verbose("Setting the initial animation position as below", m, e), t.css({
                             transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)"
                         }), m.addClass(x.animating).css({
                             display: "block"
                             , top: e.origin + "px"
                             , transform: "rotateX(-90deg) translateZ(" + e.depth.next + "px)"
                         })
                     }
                     , left: function () {
                         var e = {
                             origin: (t.outerWidth() - m.outerWidth()) / 2
                             , depth: {
                                 active: m.outerWidth() / 2
                                 , next: t.outerWidth() / 2
                             }
                         };
                         g.verbose("Setting the initial animation position as left", m, e), t.css({
                             transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)"
                         }), m.addClass(x.animating).css({
                             display: "block"
                             , left: e.origin + "px"
                             , transform: "rotateY(-90deg) translateZ(" + e.depth.next + "px)"
                         })
                     }
                     , right: function () {
                         var e = {
                             origin: (t.outerWidth() - m.outerWidth()) / 2
                             , depth: {
                                 active: m.outerWidth() / 2
                                 , next: t.outerWidth() / 2
                             }
                         };
                         g.verbose("Setting the initial animation position as left", m, e), t.css({
                             transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)"
                         }), m.addClass(x.animating).css({
                             display: "block"
                             , left: e.origin + "px"
                             , transform: "rotateY(90deg) translateZ(" + e.depth.next + "px)"
                         })
                     }
                     , behind: function () {
                         var e = {
                             origin: (t.outerWidth() - m.outerWidth()) / 2
                             , depth: {
                                 active: m.outerWidth() / 2
                                 , next: t.outerWidth() / 2
                             }
                         };
                         g.verbose("Setting the initial animation position as behind", m, e), t.css({
                             transform: "rotateY(0deg)"
                         }), m.addClass(x.animating).css({
                             display: "block"
                             , left: e.origin + "px"
                             , transform: "rotateY(-180deg)"
                         })
                     }
                 }
                 , setting: function (t, n) {
                     if (g.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, v, t);
                     else {
                         if (n === i) return v[t];
                         v[t] = n
                     }
                 }
                 , internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, g, t);
                     else {
                         if (n === i) return g[t];
                         g[t] = n
                     }
                 }
                 , debug: function () {
                     v.debug && (v.performance ? g.performance.log(arguments) : (g.debug = Function.prototype.bind.call(console.info, console, v.name + ":"), g.debug.apply(console, arguments)))
                 }
                 , verbose: function () {
                     v.verbose && v.debug && (v.performance ? g.performance.log(arguments) : (g.verbose = Function.prototype.bind.call(console.info, console, v.name + ":"), g.verbose.apply(console, arguments)))
                 }
                 , error: function () {
                     g.error = Function.prototype.bind.call(console.error, console, v.name + ":"), g.error.apply(console, arguments)
                 }
                 , performance: {
                     log: function (e) {
                         var t, n, i;
                         v.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                             Name: e[0]
                             , Arguments: [].slice.call(e, 1) || ""
                             , Element: P
                             , "Execution Time": n
                         })), clearTimeout(g.performance.timer), g.performance.timer = setTimeout(g.performance.display, 100)
                     }
                     , display: function () {
                         var t = v.name + ":"
                             , n = 0;
                         s = !1, clearTimeout(g.performance.timer), e.each(c, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", p && (t += " '" + p + "'"), r.length > 1 && (t += " (" + r.length + ")"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 }
                 , invoke: function (t, n, o) {
                     var r, s, c, l = E;
                     return n = n || d, o = P || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                 }
             }, u ? (E === i && g.initialize(), g.invoke(l)) : (E !== i && E.invoke("destroy"), g.initialize())
         }), a !== i ? a : this
     }, e.fn.shape.settings = {
         name: "Shape"
         , debug: !1
         , verbose: !0
         , performance: !0
         , namespace: "shape"
         , beforeChange: function () {}
         , onChange: function () {}
         , allowRepeats: !1
         , duration: 700
         , error: {
             side: "You tried to switch to a side that does not exist."
             , method: "The method you called is not defined"
         }
         , className: {
             animating: "animating"
             , hidden: "hidden"
             , loading: "loading"
             , active: "active"
         }
         , selector: {
             sides: ".sides"
             , side: ".side"
         }
     }
 }(jQuery, window, document)
 , function (e, t, n, i) {
     "use strict";
     e.fn.sidebar = function (o) {
         var a, r = e(this)
             , s = e(t)
             , c = e(n)
             , l = e("html")
             , u = e("head")
             , d = r.selector || ""
             , f = (new Date).getTime()
             , m = []
             , g = arguments[0]
             , p = "string" == typeof g
             , v = [].slice.call(arguments, 1)
             , h = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                 setTimeout(e, 0)
             };
         return r.each(function () {
             var r, b, y, x, w, C, k = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.sidebar.settings, o) : e.extend({}, e.fn.sidebar.settings)
                 , T = k.selector
                 , S = k.className
                 , A = k.namespace
                 , P = k.regExp
                 , E = k.error
                 , F = "." + A
                 , R = "module-" + A
                 , O = e(this)
                 , D = e(k.context)
                 , z = O.children(T.sidebar)
                 , q = D.children(T.fixed)
                 , j = D.children(T.pusher)
                 , N = this
                 , I = O.data(R);
             C = {
                 initialize: function () {
                     C.debug("Initializing sidebar", o), C.create.id(), w = C.get.transitionEvent(), ("auto" == k.useLegacy && C.is.legacy() || k.useLegacy === !0) && (k.transition = "overlay", k.useLegacy = !0), C.is.ios() && C.set.ios(), k.delaySetup ? h(C.setup.layout) : C.setup.layout(), C.instantiate()
                 }
                 , instantiate: function () {
                     C.verbose("Storing instance of module", C), I = C, O.data(R, C)
                 }
                 , create: {
                     id: function () {
                         y = (Math.random().toString(16) + "000000000").substr(2, 8), b = "." + y, C.verbose("Creating unique id for element", y)
                     }
                 }
                 , destroy: function () {
                     C.verbose("Destroying previous module for", O), C.remove.direction(), O.off(F).removeData(R), D.off(b), s.off(b), c.off(b)
                 }
                 , event: {
                     clickaway: function (e) {
                         var t = j.find(e.target).length > 0 || j.is(e.target)
                             , n = D.is(e.target);
                         t && (C.verbose("User clicked on dimmed page"), C.hide()), n && (C.verbose("User clicked on dimmable context (scaled out page)"), C.hide())
                     }
                     , touch: function () {}
                     , containScroll: function () {
                         N.scrollTop <= 0 && (N.scrollTop = 1), N.scrollTop + N.offsetHeight >= N.scrollHeight && (N.scrollTop = N.scrollHeight - N.offsetHeight - 1)
                     }
                     , scroll: function (t) {
                         0 === e(t.target).closest(T.sidebar).length && t.preventDefault()
                     }
                 }
                 , bind: {
                     clickaway: function () {
                         C.verbose("Adding clickaway events to context", D), k.closable && D.on("click" + b, C.event.clickaway).on("touchend" + b, C.event.clickaway)
                     }
                     , scrollLock: function () {
                         k.scrollLock && (C.debug("Disabling page scroll"), s.on("DOMMouseScroll" + b, C.event.scroll)), C.verbose("Adding events to contain sidebar scroll"), c.on("touchmove" + b, C.event.touch), O.on("scroll" + F, C.event.containScroll)
                     }
                 }
                 , unbind: {
                     clickaway: function () {
                         C.verbose("Removing clickaway events from context", D), D.off(b)
                     }
                     , scrollLock: function () {
                         C.verbose("Removing scroll lock from page"), c.off(b), s.off(b), O.off("scroll" + F)
                     }
                 }
                 , add: {
                     bodyCSS: function () {
                         var t, n = O.outerWidth()
                             , i = O.outerHeight()
                             , o = C.get.direction()
                             , a = {
                                 left: n
                                 , right: -n
                                 , top: i
                                 , bottom: -i
                             };
                         C.is.rtl() && (C.verbose("RTL detected, flipping widths"), a.left = -n, a.right = n), t = '<style title="' + A + '">', "left" === o || "right" === o ? (C.debug("Adding CSS rules for animation distance", n), t += " .ui.visible." + o + ".sidebar ~ .fixed, .ui.visible." + o + ".sidebar ~ .pusher {   -webkit-transform: translate3d(" + a[o] + "px, 0, 0);           transform: translate3d(" + a[o] + "px, 0, 0); }") : ("top" === o || "bottom" == o) && (t += " .ui.visible." + o + ".sidebar ~ .fixed, .ui.visible." + o + ".sidebar ~ .pusher {   -webkit-transform: translate3d(0, " + a[o] + "px, 0);           transform: translate3d(0, " + a[o] + "px, 0); }"), C.is.ie() && ("left" === o || "right" === o ? (C.debug("Adding CSS rules for animation distance", n), t += " body.pushable > .ui.visible." + o + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(" + a[o] + "px, 0, 0);           transform: translate3d(" + a[o] + "px, 0, 0); }") : ("top" === o || "bottom" == o) && (t += " body.pushable > .ui.visible." + o + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, " + a[o] + "px, 0);           transform: translate3d(0, " + a[o] + "px, 0); }"), t += " body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0px, 0, 0);           transform: translate3d(0px, 0, 0); }"), t += "</style>", u.append(t), r = e("style[title=" + A + "]"), C.debug("Adding sizing css to head", r)
                     }
                 }
                 , refresh: function () {
                     C.verbose("Refreshing selector cache"), D = e(k.context), z = D.children(T.sidebar), j = D.children(T.pusher), q = D.children(T.fixed)
                 }
                 , refreshSidebars: function () {
                     C.verbose("Refreshing other sidebars"), z = D.children(T.sidebar)
                 }
                 , repaint: function () {
                     C.verbose("Forcing repaint event"), N.style.display = "none", N.offsetHeight, N.scrollTop = N.scrollTop, N.style.display = ""
                 }
                 , setup: {
                     layout: function () {
                         0 === D.children(T.pusher).length && (C.debug("Adding wrapper element for sidebar"), C.error(E.pusher), j = e('<div class="pusher" />'), D.children().not(T.omitted).not(z).wrapAll(j), C.refresh()), (0 === O.nextAll(T.pusher).length || O.nextAll(T.pusher)[0] !== j[0]) && (C.debug("Moved sidebar to correct parent element"), C.error(E.movedSidebar, N), O.detach().prependTo(D), C.refresh()), C.set.pushable(), C.set.direction()
                     }
                 }
                 , attachEvents: function (t, n) {
                     var i = e(t);
                     n = e.isFunction(C[n]) ? C[n] : C.toggle, i.length > 0 ? (C.debug("Attaching sidebar events to element", t, n), i.on("click" + F, n)) : C.error(E.notFound, t)
                 }
                 , show: function (t) {
                     var n = k.useLegacy === !0 ? C.legacyPushPage : C.pushPage;
                     if (t = e.isFunction(t) ? t : function () {}, C.is.hidden()) {
                         if (C.refreshSidebars(), k.overlay && (C.error(E.overlay), k.transition = "overlay"), C.refresh(), C.othersActive())
                             if (C.debug("Other sidebars currently visible"), k.exclusive) {
                                 if ("overlay" != k.transition) return void C.hideOthers(C.show);
                                 C.hideOthers()
                             }
                             else k.transition = "overlay";
                         n(function () {
                             t.call(N), k.onShow.call(N)
                         }), k.onChange.call(N), k.onVisible.call(N)
                     }
                     else C.debug("Sidebar is already visible")
                 }
                 , hide: function (t) {
                     var n = k.useLegacy === !0 ? C.legacyPullPage : C.pullPage;
                     t = e.isFunction(t) ? t : function () {}, (C.is.visible() || C.is.animating()) && (C.debug("Hiding sidebar", t), C.refreshSidebars(), n(function () {
                         t.call(N), k.onHidden.call(N)
                     }), k.onChange.call(N), k.onHide.call(N))
                 }
                 , othersAnimating: function () {
                     return z.not(O).filter("." + S.animating).length > 0
                 }
                 , othersVisible: function () {
                     return z.not(O).filter("." + S.visible).length > 0
                 }
                 , othersActive: function () {
                     return C.othersVisible() || C.othersAnimating()
                 }
                 , hideOthers: function (e) {
                     var t = z.not(O).filter("." + S.visible)
                         , n = t.length
                         , i = 0;
                     e = e || function () {}, t.sidebar("hide", function () {
                         i++, i == n && e()
                     })
                 }
                 , toggle: function () {
                     C.verbose("Determining toggled direction"), C.is.hidden() ? C.show() : C.hide()
                 }
                 , pushPage: function (t) {
                     var n, i, o = C.get.transition()
                         , a = "safe" == o ? D : "overlay" === o || C.othersActive() ? O : j;
                     t = e.isFunction(t) ? t : function () {}, "scale down" == k.transition && C.scrollToTop(), C.set.transition(o), C.repaint(), n = function () {
                         C.bind.clickaway(), C.add.bodyCSS(), C.set.animating(), C.set.visible(), C.othersVisible() || k.dimPage && j.addClass(S.dimmed)
                     }, i = function (e) {
                         e.target == a[0] && (a.off(w + b, i), C.remove.animating(), C.bind.scrollLock(), t.call(N))
                     }, a.off(w + b), a.on(w + b, i), h(n)
                 }
                 , pullPage: function (t) {
                     var n, i, o = C.get.transition()
                         , a = "safe" == o ? D : "overlay" == o || C.othersActive() ? O : j;
                     t = e.isFunction(t) ? t : function () {}, C.verbose("Removing context push state", C.get.direction()), C.set.transition(o), C.unbind.clickaway(), C.unbind.scrollLock(), n = function () {
                         C.set.animating(), C.remove.visible(), k.dimPage && !C.othersVisible() && j.removeClass(S.dimmed)
                     }, i = function (e) {
                         e.target == a[0] && (a.off(w + b, i), C.remove.animating(), C.remove.transition(), C.remove.bodyCSS(), ("scale down" == o || k.returnScroll && C.is.mobile()) && C.scrollBack(), t.call(N))
                     }, a.off(w + b), a.on(w + b, i), h(n)
                 }
                 , legacyPushPage: function (t) {
                     var n = O.width()
                         , i = C.get.direction()
                         , o = {};
                     n = n || O.width(), t = e.isFunction(t) ? t : function () {}, o[i] = n, C.debug("Using javascript to push context", o), C.set.visible(), C.set.transition(), C.set.animating(), k.dimPage && j.addClass(S.dimmed), D.css("position", "relative").animate(o, k.duration, k.easing, function () {
                         C.remove.animating(), C.bind.clickaway(), t.call(N)
                     })
                 }
                 , legacyPullPage: function (t) {
                     var n = 0
                         , i = C.get.direction()
                         , o = {};
                     n = n || O.width(), t = e.isFunction(t) ? t : function () {}, o[i] = "0px", C.debug("Using javascript to pull context", o), C.unbind.clickaway(), C.set.animating(), C.remove.visible(), k.dimPage && !C.othersActive() && j.removeClass(S.dimmed), D.css("position", "relative").animate(o, k.duration, k.easing, function () {
                         C.remove.animating(), t.call(N)
                     })
                 }
                 , scrollToTop: function () {
                     C.verbose("Scrolling to top of page to avoid animation issues"), x = e(t).scrollTop(), O.scrollTop(0), t.scrollTo(0, 0)
                 }
                 , scrollBack: function () {
                     C.verbose("Scrolling back to original page position"), t.scrollTo(0, x)
                 }
                 , set: {
                     ios: function () {
                         l.addClass(S.ios)
                     }
                     , pushed: function () {
                         D.addClass(S.pushed)
                     }
                     , pushable: function () {
                         D.addClass(S.pushable)
                     }
                     , active: function () {
                         O.addClass(S.active)
                     }
                     , animating: function () {
                         O.addClass(S.animating)
                     }
                     , transition: function (e) {
                         e = e || C.get.transition(), O.addClass(e)
                     }
                     , direction: function (e) {
                         e = e || C.get.direction(), O.addClass(S[e])
                     }
                     , visible: function () {
                         O.addClass(S.visible)
                     }
                     , overlay: function () {
                         O.addClass(S.overlay)
                     }
                 }
                 , remove: {
                     bodyCSS: function () {
                         C.debug("Removing body css styles", r), r && r.length > 0 && r.remove()
                     }
                     , pushed: function () {
                         D.removeClass(S.pushed)
                     }
                     , pushable: function () {
                         D.removeClass(S.pushable)
                     }
                     , active: function () {
                         O.removeClass(S.active)
                     }
                     , animating: function () {
                         O.removeClass(S.animating)
                     }
                     , transition: function (e) {
                         e = e || C.get.transition(), O.removeClass(e)
                     }
                     , direction: function (e) {
                         e = e || C.get.direction(), O.removeClass(S[e])
                     }
                     , visible: function () {
                         O.removeClass(S.visible)
                     }
                     , overlay: function () {
                         O.removeClass(S.overlay)
                     }
                 }
                 , get: {
                     direction: function () {
                         return O.hasClass(S.top) ? S.top : O.hasClass(S.right) ? S.right : O.hasClass(S.bottom) ? S.bottom : S.left
                     }
                     , transition: function () {
                         var e, t = C.get.direction();
                         return e = C.is.mobile() ? "auto" == k.mobileTransition ? k.defaultTransition.mobile[t] : k.mobileTransition : "auto" == k.transition ? k.defaultTransition.computer[t] : k.transition, C.verbose("Determined transition", e), e
                     }
                     , transitionEvent: function () {
                         var e, t = n.createElement("element")
                             , o = {
                                 transition: "transitionend"
                                 , OTransition: "oTransitionEnd"
                                 , MozTransition: "transitionend"
                                 , WebkitTransition: "webkitTransitionEnd"
                             };
                         for (e in o)
                             if (t.style[e] !== i) return o[e]
                     }
                 }
                 , is: {
                     ie: function () {
                         var e = !t.ActiveXObject && "ActiveXObject" in t
                             , n = "ActiveXObject" in t;
                         return e || n
                     }
                     , legacy: function () {
                         var e, o = n.createElement("div")
                             , a = {
                                 webkitTransform: "-webkit-transform"
                                 , OTransform: "-o-transform"
                                 , msTransform: "-ms-transform"
                                 , MozTransform: "-moz-transform"
                                 , transform: "transform"
                             };
                         n.body.insertBefore(o, null);
                         for (var r in a) o.style[r] !== i && (o.style[r] = "translate3d(1px,1px,1px)", e = t.getComputedStyle(o).getPropertyValue(a[r]));
                         return n.body.removeChild(o), !(e !== i && e.length > 0 && "none" !== e)
                     }
                     , ios: function () {
                         var e = navigator.userAgent
                             , t = e.match(P.ios);
                         return t ? (C.verbose("Browser was found to be iOS", e), !0) : !1
                     }
                     , mobile: function () {
                         var e = navigator.userAgent
                             , t = e.match(P.mobile);
                         return t ? (C.verbose("Browser was found to be mobile", e), !0) : (C.verbose("Browser is not mobile, using regular transition", e), !1)
                     }
                     , hidden: function () {
                         return !C.is.visible()
                     }
                     , visible: function () {
                         return O.hasClass(S.visible)
                     }
                     , open: function () {
                         return C.is.visible()
                     }
                     , closed: function () {
                         return C.is.hidden()
                     }
                     , vertical: function () {
                         return O.hasClass(S.top)
                     }
                     , animating: function () {
                         return D.hasClass(S.animating)
                     }
                     , rtl: function () {
                         return "rtl" == O.css("direction")
                     }
                 }
                 , setting: function (t, n) {
                     if (C.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, k, t);
                     else {
                         if (n === i) return k[t];
                         k[t] = n
                     }
                 }
                 , internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, C, t);
                     else {
                         if (n === i) return C[t];
                         C[t] = n
                     }
                 }
                 , debug: function () {
                     k.debug && (k.performance ? C.performance.log(arguments) : (C.debug = Function.prototype.bind.call(console.info, console, k.name + ":"), C.debug.apply(console, arguments)))
                 }
                 , verbose: function () {
                     k.verbose && k.debug && (k.performance ? C.performance.log(arguments) : (C.verbose = Function.prototype.bind.call(console.info, console, k.name + ":"), C.verbose.apply(console, arguments)))
                 }
                 , error: function () {
                     C.error = Function.prototype.bind.call(console.error, console, k.name + ":"), C.error.apply(console, arguments)
                 }
                 , performance: {
                     log: function (e) {
                         var t, n, i;
                         k.performance && (t = (new Date).getTime(), i = f || t, n = t - i, f = t, m.push({
                             Name: e[0]
                             , Arguments: [].slice.call(e, 1) || ""
                             , Element: N
                             , "Execution Time": n
                         })), clearTimeout(C.performance.timer), C.performance.timer = setTimeout(C.performance.display, 100)
                     }
                     , display: function () {
                         var t = k.name + ":"
                             , n = 0;
                         f = !1, clearTimeout(C.performance.timer), e.each(m, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", d && (t += " '" + d + "'"), (console.group !== i || console.table !== i) && m.length > 0 && (console.groupCollapsed(t), console.table ? console.table(m) : e.each(m, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), m = []
                     }
                 }
                 , invoke: function (t, n, o) {
                     var r, s, c, l = I;
                     return n = n || v, o = N || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (C.error(E.method, t), !1);
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                 }
             }, p ? (I === i && C.initialize(), C.invoke(g)) : (I !== i && C.invoke("destroy"), C.initialize())
         }), a !== i ? a : this
     }, e.fn.sidebar.settings = {
         name: "Sidebar"
         , namespace: "sidebar"
         , debug: !1
         , verbose: !0
         , performance: !0
         , transition: "auto"
         , mobileTransition: "auto"
         , defaultTransition: {
             computer: {
                 left: "uncover"
                 , right: "uncover"
                 , top: "overlay"
                 , bottom: "overlay"
             }
             , mobile: {
                 left: "uncover"
                 , right: "uncover"
                 , top: "overlay"
                 , bottom: "overlay"
             }
         }
         , context: "body"
         , exclusive: !1
         , closable: !0
         , dimPage: !0
         , scrollLock: !1
         , returnScroll: !1
         , delaySetup: !1
         , useLegacy: "auto"
         , duration: 500
         , easing: "easeInOutQuint"
         , onChange: function () {}
         , onShow: function () {}
         , onHide: function () {}
         , onHidden: function () {}
         , onVisible: function () {}
         , className: {
             active: "active"
             , animating: "animating"
             , dimmed: "dimmed"
             , ios: "ios"
             , pushable: "pushable"
             , pushed: "pushed"
             , right: "right"
             , top: "top"
             , left: "left"
             , bottom: "bottom"
             , visible: "visible"
         }
         , selector: {
             fixed: ".fixed"
             , omitted: "script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed"
             , pusher: ".pusher"
             , sidebar: ".ui.sidebar"
         }
         , regExp: {
             ios: /(iPad|iPhone|iPod)/g
             , mobile: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g
         }
         , error: {
             method: "The method you called is not defined."
             , pusher: "Had to add pusher element. For optimal performance make sure body content is inside a pusher element"
             , movedSidebar: "Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag"
             , overlay: "The overlay setting is no longer supported, use animation: overlay"
             , notFound: "There were no elements that matched the specified selector"
         }
     }, e.extend(e.easing, {
         easeInOutQuint: function (e, t, n, i, o) {
             return (t /= o / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
         }
     })
 }(jQuery, window, document)
 , function (e, t, n, i) {
     "use strict";
     e.fn.sticky = function (n) {
         var o, a = e(this)
             , r = a.selector || ""
             , s = (new Date).getTime()
             , c = []
             , l = arguments[0]
             , u = "string" == typeof l
             , d = [].slice.call(arguments, 1);
         return a.each(function () {
             var a, f, m, g = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.sticky.settings, n) : e.extend({}, e.fn.sticky.settings)
                 , p = g.className
                 , v = g.namespace
                 , h = g.error
                 , b = "." + v
                 , y = "module-" + v
                 , x = e(this)
                 , w = e(t)
                 , C = x.offsetParent()
                 , k = e(g.scrollContext)
                 , T = (x.selector || "", x.data(y))
                 , S = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                     setTimeout(e, 0)
                 }
                 , A = this;
             m = {
                 initialize: function () {
                     m.determineContext(), m.verbose("Initializing sticky", g, C), m.save.positions(), m.checkErrors(), m.bind.events(), g.observeChanges && m.observeChanges(), m.instantiate()
                 }
                 , instantiate: function () {
                     m.verbose("Storing instance of module", m), T = m, x.data(y, m)
                 }
                 , destroy: function () {
                     m.verbose("Destroying previous module"), m.reset(), f && f.disconnect(), w.off("resize" + b, m.event.resize), k.off("scroll" + b, m.event.scroll), x.removeData(y)
                 }
                 , observeChanges: function () {
                     var e = a[0];
                     "MutationObserver" in t && (f = new MutationObserver(function () {
                         clearTimeout(m.timer), m.timer = setTimeout(function () {
                             m.verbose("DOM tree modified, updating sticky menu"), m.refresh()
                         }, 20)
                     }), f.observe(A, {
                         childList: !0
                         , subtree: !0
                     }), f.observe(e, {
                         childList: !0
                         , subtree: !0
                     }), m.debug("Setting up mutation observer", f))
                 }
                 , determineContext: function () {
                     return a = g.context ? e(g.context) : C, 0 === a.length ? void m.error(h.invalidContext, g.context, x) : void 0
                 }
                 , checkErrors: function () {
                     return m.is.hidden() && m.error(h.visible, x), m.cache.element.height > m.cache.context.height ? (m.reset(), void m.error(h.elementSize, x)) : void 0
                 }
                 , bind: {
                     events: function () {
                         w.on("resize" + b, m.event.resize), k.on("scroll" + b, m.event.scroll)
                     }
                 }
                 , event: {
                     resize: function () {
                         S(function () {
                             m.refresh(), m.stick()
                         })
                     }
                     , scroll: function () {
                         S(function () {
                             m.stick(), g.onScroll.call(A)
                         })
                     }
                 }
                 , refresh: function (e) {
                     m.reset(), e && (C = x.offsetParent()), m.save.positions(), m.stick(), g.onReposition.call(A)
                 }
                 , supports: {
                     sticky: function () {
                         {
                             var t = e("<div/>");
                             t.get()
                         }
                         return t.addClass(p.supported), t.css("position").match("sticky")
                     }
                 }
                 , save: {
                     scroll: function (e) {
                         m.lastScroll = e
                     }
                     , positions: function () {
                         var e = {
                                 height: w.height()
                             }
                             , t = {
                                 margin: {
                                     top: parseInt(x.css("margin-top"), 10)
                                     , bottom: parseInt(x.css("margin-bottom"), 10)
                                 }
                                 , offset: x.offset()
                                 , width: x.outerWidth()
                                 , height: x.outerHeight()
                             }
                             , n = {
                                 offset: a.offset()
                                 , height: a.outerHeight()
                                 , bottomPadding: parseInt(a.css("padding-bottom"), 10)
                             };
                         m.cache = {
                             fits: t.height < e.height
                             , window: {
                                 height: e.height
                             }
                             , element: {
                                 margin: t.margin
                                 , top: t.offset.top - t.margin.top
                                 , left: t.offset.left
                                 , width: t.width
                                 , height: t.height
                                 , bottom: t.offset.top + t.height
                             }
                             , context: {
                                 top: n.offset.top
                                 , height: n.height
                                 , bottomPadding: n.bottomPadding
                                 , bottom: n.offset.top + n.height - n.bottomPadding
                             }
                         }, m.set.containerSize(), m.set.size(), m.stick(), m.debug("Caching element positions", m.cache)
                     }
                 }
                 , get: {
                     direction: function (e) {
                         var t = "down";
                         return e = e || k.scrollTop(), m.lastScroll !== i && (m.lastScroll < e ? t = "down" : m.lastScroll > e && (t = "up")), t
                     }
                     , scrollChange: function (e) {
                         return e = e || k.scrollTop(), m.lastScroll ? e - m.lastScroll : 0
                     }
                     , currentElementScroll: function () {
                         return m.is.top() ? Math.abs(parseInt(x.css("top"), 10)) || 0 : Math.abs(parseInt(x.css("bottom"), 10)) || 0
                     }
                     , elementScroll: function (e) {
                         e = e || k.scrollTop();
                         var t, n = m.cache.element
                             , i = m.cache.window
                             , o = m.get.scrollChange(e)
                             , a = n.height - i.height + g.offset
                             , r = m.get.currentElementScroll()
                             , s = r + o;
                         return t = m.cache.fits || 0 > s ? 0 : s > a ? a : s
                     }
                 }
                 , remove: {
                     offset: function () {
                         x.css("margin-top", "")
                     }
                 }
                 , set: {
                     offset: function () {
                         m.verbose("Setting offset on element", g.offset), x.css("margin-top", g.offset)
                     }
                     , containerSize: function () {
                         var e = C.get(0).tagName;
                         "HTML" === e || "body" == e ? C = x.offsetParent() : (m.debug("Settings container size", m.cache.context.height), Math.abs(C.height() - m.cache.context.height) > 5 && C.css({
                             height: m.cache.context.height
                         }))
                     }
                     , scroll: function (e) {
                         m.debug("Setting scroll on element", e), m.is.top() && x.css("bottom", "").css("top", -e), m.is.bottom() && x.css("top", "").css("bottom", e)
                     }
                     , size: function () {
                         0 !== m.cache.element.height && 0 !== m.cache.element.width && x.css({
                             width: m.cache.element.width
                             , height: m.cache.element.height
                         })
                     }
                 }
                 , is: {
                     top: function () {
                         return x.hasClass(p.top)
                     }
                     , bottom: function () {
                         return x.hasClass(p.bottom)
                     }
                     , initialPosition: function () {
                         return !m.is.fixed() && !m.is.bound()
                     }
                     , hidden: function () {
                         return !x.is(":visible")
                     }
                     , bound: function () {
                         return x.hasClass(p.bound)
                     }
                     , fixed: function () {
                         return x.hasClass(p.fixed)
                     }
                 }
                 , stick: function () {
                     var e = m.cache
                         , t = e.fits
                         , n = e.element
                         , i = e.window
                         , o = e.context
                         , a = m.is.bottom() && g.pushing ? g.bottomOffset : g.offset
                         , r = {
                             top: k.scrollTop() + a
                             , bottom: k.scrollTop() + a + i.height
                         }
                         , s = (m.get.direction(r.top), m.get.elementScroll(r.top))
                         , c = !t
                         , l = 0 !== n.height;
                     m.save.scroll(r.top), l && (m.is.initialPosition() ? r.top >= o.bottom ? (m.debug("Element bottom of container"), m.bindBottom()) : r.top >= n.top && (m.debug("Element passed, fixing element to page"), m.fixTop()) : m.is.fixed() ? m.is.top() ? r.top < n.top ? (m.debug("Fixed element reached top of container"), m.setInitialPosition()) : n.height + r.top - s > o.bottom ? (m.debug("Fixed element reached bottom of container"), m.bindBottom()) : c && m.set.scroll(s) : m.is.bottom() && (r.bottom - n.height < n.top ? (m.debug("Bottom fixed rail has reached top of container"), m.setInitialPosition()) : r.bottom > o.bottom ? (m.debug("Bottom fixed rail has reached bottom of container"), m.bindBottom()) : c && m.set.scroll(s)) : m.is.bottom() && (g.pushing ? m.is.bound() && r.bottom < o.bottom && (m.debug("Fixing bottom attached element to bottom of browser."), m.fixBottom()) : m.is.bound() && r.top < o.bottom - n.height && (m.debug("Fixing bottom attached element to top of browser."), m.fixTop())))
                 }
                 , bindTop: function () {
                     m.debug("Binding element to top of parent container"), m.remove.offset(), x.css("left", "").css("top", "").css("margin-bottom", "").removeClass(p.fixed).removeClass(p.bottom).addClass(p.bound).addClass(p.top), g.onTop.call(A), g.onUnstick.call(A)
                 }
                 , bindBottom: function () {
                     m.debug("Binding element to bottom of parent container"), m.remove.offset(), x.css("left", "").css("top", "").css("margin-bottom", m.cache.context.bottomPadding).removeClass(p.fixed).removeClass(p.top).addClass(p.bound).addClass(p.bottom), g.onBottom.call(A), g.onUnstick.call(A)
                 }
                 , setInitialPosition: function () {
                     m.unfix(), m.unbind()
                 }
                 , fixTop: function () {
                     m.debug("Fixing element to top of page"), m.set.offset(), x.css("left", m.cache.element.left).css("bottom", "").removeClass(p.bound).removeClass(p.bottom).addClass(p.fixed).addClass(p.top), g.onStick.call(A)
                 }
                 , fixBottom: function () {
                     m.debug("Sticking element to bottom of page"), m.set.offset(), x.css("left", m.cache.element.left).css("bottom", "").removeClass(p.bound).removeClass(p.top).addClass(p.fixed).addClass(p.bottom), g.onStick.call(A)
                 }
                 , unbind: function () {
                     m.debug("Removing absolute position on element"), m.remove.offset(), x.removeClass(p.bound).removeClass(p.top).removeClass(p.bottom)
                 }
                 , unfix: function () {
                     m.debug("Removing fixed position on element"), m.remove.offset(), x.removeClass(p.fixed).removeClass(p.top).removeClass(p.bottom), g.onUnstick.call(A)
                 }
                 , reset: function () {
                     m.debug("Reseting elements position"), m.unbind(), m.unfix(), m.resetCSS()
                 }
                 , resetCSS: function () {
                     x.css({
                         top: ""
                         , bottom: ""
                         , width: ""
                         , height: ""
                     }), C.css({
                         height: ""
                     })
                 }
                 , setting: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, g, t);
                     else {
                         if (n === i) return g[t];
                         g[t] = n
                     }
                 }
                 , internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (n === i) return m[t];
                         m[t] = n
                     }
                 }
                 , debug: function () {
                     g.debug && (g.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), m.debug.apply(console, arguments)))
                 }
                 , verbose: function () {
                     g.verbose && g.debug && (g.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), m.verbose.apply(console, arguments)))
                 }
                 , error: function () {
                     m.error = Function.prototype.bind.call(console.error, console, g.name + ":"), m.error.apply(console, arguments)
                 }
                 , performance: {
                     log: function (e) {
                         var t, n, i;
                         g.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                             Name: e[0]
                             , Arguments: [].slice.call(e, 1) || ""
                             , Element: A
                             , "Execution Time": n
                         })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 0)
                     }
                     , display: function () {
                         var t = g.name + ":"
                             , n = 0;
                         s = !1, clearTimeout(m.performance.timer), e.each(c, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 }
                 , invoke: function (t, n, a) {
                     var r, s, c, l = T;
                     return n = n || d, a = A || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                 }
             }, u ? (T === i && m.initialize(), m.invoke(l)) : (T !== i && T.invoke("destroy"), m.initialize())
         }), o !== i ? o : this
     }, e.fn.sticky.settings = {
         name: "Sticky"
         , namespace: "sticky"
         , debug: !1
         , verbose: !1
         , performance: !1
         , pushing: !1
         , context: !1
         , scrollContext: t
         , offset: 0
         , bottomOffset: 0
         , observeChanges: !0
         , onReposition: function () {}
         , onScroll: function () {}
         , onStick: function () {}
         , onUnstick: function () {}
         , onTop: function () {}
         , onBottom: function () {}
         , error: {
             container: "Sticky element must be inside a relative container"
             , visible: "Element is hidden, you must call refresh after element becomes visible"
             , method: "The method you called is not defined."
             , invalidContext: "Context specified does not exist"
             , elementSize: "Sticky element is larger than its container, cannot create sticky."
         }
         , className: {
             bound: "bound"
             , fixed: "fixed"
             , supported: "native"
             , top: "top"
             , bottom: "bottom"
         }
     }
 }(jQuery, window, document)
 , function (e, t, n, i) {
     "use strict";
     e.fn.tab = function (n) {
         var o, a, r = e(e.isFunction(this) ? t : this)
             , s = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.tab.settings, n) : e.extend({}, e.fn.tab.settings)
             , c = r.selector || ""
             , l = (new Date).getTime()
             , u = []
             , d = arguments[0]
             , f = "string" == typeof d
             , m = [].slice.call(arguments, 1);
         return r.each(function () {
             var n, g, p, v, h, b = s.className
                 , y = s.metadata
                 , x = s.selector
                 , w = s.error
                 , C = "." + s.namespace
                 , k = "module-" + s.namespace
                 , T = e(this)
                 , S = {}
                 , A = !0
                 , P = 0
                 , E = this
                 , F = T.data(k);
             o = {
                 initialize: function () {
                     o.debug("Initializing tab menu item", T), o.determineTabs(), o.debug("Determining tabs", s.context, g), s.auto && o.set.auto(), e.isWindow(E) || (o.debug("Attaching tab activation events to element", T), T.on("click" + C, o.event.click)), o.instantiate()
                 }
                 , determineTabs: function () {
                     var t;
                     "parent" === s.context ? (T.closest(x.ui).length > 0 ? (t = T.closest(x.ui), o.verbose("Using closest UI element for determining parent", t)) : t = T, n = t.parent(), o.verbose("Determined parent element for creating context", n)) : s.context ? (n = e(s.context), o.verbose("Using selector for tab context", s.context, n)) : n = e("body"), s.childrenOnly ? (g = n.children(x.tabs), o.debug("Searching tab context children for tabs", n, g)) : (g = n.find(x.tabs), o.debug("Searching tab context for tabs", n, g))
                 }
                 , initializeHistory: function () {
                     if (s.history) {
                         if (o.debug("Initializing page state"), e.address === i) return o.error(w.state), !1;
                         if ("state" == s.historyType) {
                             if (o.debug("Using HTML5 to manage state"), s.path === !1) return o.error(w.path), !1;
                             e.address.history(!0).state(s.path)
                         }
                         e.address.bind("change", o.event.history.change)
                     }
                 }
                 , instantiate: function () {
                     o.verbose("Storing instance of module", o), F = o, T.data(k, o)
                 }
                 , destroy: function () {
                     o.debug("Destroying tabs", T), T.removeData(k).off(C)
                 }
                 , event: {
                     click: function (t) {
                         var n = e(this).data(y.tab);
                         n !== i ? (s.history ? (o.verbose("Updating page state", t), e.address.value(n)) : (o.verbose("Changing tab", t), o.changeTab(n)), t.preventDefault()) : o.debug("No tab specified")
                     }
                     , history: {
                         change: function (t) {
                             var n = t.pathNames.join("/") || o.get.initialPath()
                                 , a = s.templates.determineTitle(n) || !1;
                             o.performance.display(), o.debug("History change event", n, t), h = t, n !== i && o.changeTab(n), a && e.address.title(a)
                         }
                     }
                 }
                 , refresh: function () {
                     p && (o.debug("Refreshing tab", p), o.changeTab(p))
                 }
                 , cache: {
                     read: function (e) {
                         return e !== i ? S[e] : !1
                     }
                     , add: function (e, t) {
                         e = e || p, o.debug("Adding cached content for", e), S[e] = t
                     }
                     , remove: function (e) {
                         e = e || p, o.debug("Removing cached content for", e), delete S[e]
                     }
                 }
                 , set: {
                     auto: function () {
                         var t = "string" == typeof s.path ? s.path.replace(/\/$/, "") + "/{$tab}" : "/{$tab}";
                         o.verbose("Setting up automatic tab retrieval from server", t), e.isPlainObject(s.apiSettings) ? s.apiSettings.url = t : s.apiSettings = {
                             url: t
                         }
                     }
                     , state: function (t) {
                         e.address.value(t)
                     }
                 }
                 , changeTab: function (i) {
                     var a = t.history && t.history.pushState
                         , r = a && s.ignoreFirstLoad && A
                         , c = s.auto || e.isPlainObject(s.apiSettings)
                         , l = c && !r ? o.utilities.pathToArray(i) : o.get.defaultPathArray(i);
                     i = o.utilities.arrayToPath(l), e.each(l, function (t, a) {
                         var u, d, f, m, g = l.slice(0, t + 1)
                             , b = o.utilities.arrayToPath(g)
                             , y = o.is.tab(b)
                             , x = t + 1 == l.length
                             , C = o.get.tabElement(b);
                         if (o.verbose("Looking for tab", a), y) {
                             if (o.verbose("Tab was found", a), p = b, v = o.utilities.filterArray(l, g), x ? m = !0 : (d = l.slice(0, t + 2), f = o.utilities.arrayToPath(d), m = !o.is.tab(f), m && o.verbose("Tab parameters found", d)), m && c) return r ? (o.debug("Ignoring remote content on first tab load", b), A = !1, o.cache.add(i, C.html()), o.activate.all(b), s.onTabInit.call(C, b, v, h), s.onTabLoad.call(C, b, v, h)) : (o.activate.navigation(b), o.content.fetch(b, i)), !1;
                             o.debug("Opened local tab", b), o.activate.all(b), o.cache.read(b) || (o.cache.add(b, !0), o.debug("First time tab loaded calling tab init"), s.onTabInit.call(C, b, v, h)), s.onTabLoad.call(C, b, v, h)
                         }
                         else {
                             if (-1 != i.search("/") || "" === i) return o.error(w.missingTab, T, n, b), !1;
                             if (u = e("#" + i + ', a[name="' + i + '"]'), b = u.closest("[data-tab]").data("tab"), C = o.get.tabElement(b), u && u.length > 0 && b) return o.debug("No tab found, but deep anchor link present, opening parent tab"), o.activate.all(b), o.cache.read(b) || (o.cache.add(b, !0), o.debug("First time tab loaded calling tab init"), s.onTabInit.call(C, b, v, h)), !1
                         }
                     })
                 }
                 , content: {
                     fetch: function (t, n) {
                         var a, r, c = o.get.tabElement(t)
                             , l = {
                                 dataType: "html"
                                 , on: "now"
                                 , onSuccess: function (e) {
                                     o.cache.add(n, e), o.content.update(t, e), t == p ? (o.debug("Content loaded", t), o.activate.tab(t)) : o.debug("Content loaded in background", t), s.onTabInit.call(c, t, v, h), s.onTabLoad.call(c, t, v, h)
                                 }
                                 , urlData: {
                                     tab: n
                                 }
                             }
                             , u = c.api("get request") || !1
                             , d = u && "pending" === u.state();
                         n = n || t, r = o.cache.read(n), o.activate.tab(t), s.cache && r ? (o.debug("Showing existing content", n), o.content.update(t, r), s.onTabLoad.call(c, t, v, h)) : d ? (o.debug("Content is already loading", n), c.addClass(b.loading)) : e.api !== i ? (a = e.extend(!0, {
                             headers: {
                                 "X-Remote": !0
                             }
                         }, s.apiSettings, l), o.debug("Retrieving remote content", n, a), c.api(a)) : o.error(w.api)
                     }
                     , update: function (e, t) {
                         o.debug("Updating html for", e);
                         var n = o.get.tabElement(e);
                         n.html(t)
                     }
                 }
                 , activate: {
                     all: function (e) {
                         o.activate.tab(e), o.activate.navigation(e)
                     }
                     , tab: function (e) {
                         var t = o.get.tabElement(e);
                         o.verbose("Showing tab content for", t), t.addClass(b.active).siblings(g).removeClass(b.active + " " + b.loading)
                     }
                     , navigation: function (e) {
                         var t = o.get.navElement(e);
                         o.verbose("Activating tab navigation for", t, e), t.addClass(b.active).siblings(r).removeClass(b.active + " " + b.loading)
                     }
                 }
                 , deactivate: {
                     all: function () {
                         o.deactivate.navigation(), o.deactivate.tabs()
                     }
                     , navigation: function () {
                         r.removeClass(b.active)
                     }
                     , tabs: function () {
                         g.removeClass(b.active + " " + b.loading)
                     }
                 }
                 , is: {
                     tab: function (e) {
                         return e !== i ? o.get.tabElement(e).length > 0 : !1
                     }
                 }
                 , get: {
                     initialPath: function () {
                         return r.eq(0).data(y.tab) || g.eq(0).data(y.tab)
                     }
                     , path: function () {
                         return e.address.value()
                     }
                     , defaultPathArray: function (e) {
                         return o.utilities.pathToArray(o.get.defaultPath(e))
                     }
                     , defaultPath: function (e) {
                         var t = r.filter("[data-" + y.tab + '^="' + e + '/"]').eq(0)
                             , n = t.data(y.tab) || !1;
                         if (n) {
                             if (o.debug("Found default tab", n), P < s.maxDepth) return P++, o.get.defaultPath(n);
                             o.error(w.recursion)
                         }
                         else o.debug("No default tabs found for", e, g);
                         return P = 0, e
                     }
                     , navElement: function (e) {
                         return e = e || p, r.filter("[data-" + y.tab + '="' + e + '"]')
                     }
                     , tabElement: function (e) {
                         var t, n, i, a;
                         return e = e || p, i = o.utilities.pathToArray(e), a = o.utilities.last(i), t = g.filter("[data-" + y.tab + '="' + a + '"]'), n = g.filter("[data-" + y.tab + '="' + e + '"]'), t.length > 0 ? t : n
                     }
                     , tab: function () {
                         return p
                     }
                 }
                 , utilities: {
                     filterArray: function (t, n) {
                         return e.grep(t, function (t) {
                             return -1 == e.inArray(t, n)
                         })
                     }
                     , last: function (t) {
                         return e.isArray(t) ? t[t.length - 1] : !1
                     }
                     , pathToArray: function (e) {
                         return e === i && (e = p), "string" == typeof e ? e.split("/") : [e]
                     }
                     , arrayToPath: function (t) {
                         return e.isArray(t) ? t.join("/") : !1
                     }
                 }
                 , setting: function (t, n) {
                     if (o.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, s, t);
                     else {
                         if (n === i) return s[t];
                         s[t] = n
                     }
                 }
                 , internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, o, t);
                     else {
                         if (n === i) return o[t];
                         o[t] = n
                     }
                 }
                 , debug: function () {
                     s.debug && (s.performance ? o.performance.log(arguments) : (o.debug = Function.prototype.bind.call(console.info, console, s.name + ":"), o.debug.apply(console, arguments)))
                 }
                 , verbose: function () {
                     s.verbose && s.debug && (s.performance ? o.performance.log(arguments) : (o.verbose = Function.prototype.bind.call(console.info, console, s.name + ":"), o.verbose.apply(console, arguments)))
                 }
                 , error: function () {
                     o.error = Function.prototype.bind.call(console.error, console, s.name + ":"), o.error.apply(console, arguments)
                 }
                 , performance: {
                     log: function (e) {
                         var t, n, i;
                         s.performance && (t = (new Date).getTime(), i = l || t, n = t - i, l = t, u.push({
                             Name: e[0]
                             , Arguments: [].slice.call(e, 1) || ""
                             , Element: E
                             , "Execution Time": n
                         })), clearTimeout(o.performance.timer), o.performance.timer = setTimeout(o.performance.display, 100)
                     }
                     , display: function () {
                         var t = s.name + ":"
                             , n = 0;
                         l = !1, clearTimeout(o.performance.timer), e.each(u, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", c && (t += " '" + c + "'"), (console.group !== i || console.table !== i) && u.length > 0 && (console.groupCollapsed(t), console.table ? console.table(u) : e.each(u, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), u = []
                     }
                 }
                 , invoke: function (t, n, r) {
                     var s, c, l, u = F;
                     return n = n || m, r = E || r, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function (n, a) {
                         var r = n != s ? a + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(u[r]) && n != s) u = u[r];
                         else {
                             if (u[r] !== i) return c = u[r], !1;
                             if (!e.isPlainObject(u[a]) || n == s) return u[a] !== i ? (c = u[a], !1) : (o.error(w.method, t), !1);
                             u = u[a]
                         }
                     })), e.isFunction(c) ? l = c.apply(r, n) : c !== i && (l = c), e.isArray(a) ? a.push(l) : a !== i ? a = [a, l] : l !== i && (a = l), c
                 }
             }, f ? (F === i && o.initialize(), o.invoke(d)) : (F !== i && F.invoke("destroy"), o.initialize())
         }), o && !f && o.initializeHistory(), a !== i ? a : this
     }, e.tab = function () {
         e(t).tab.apply(this, arguments)
     }, e.fn.tab.settings = {
         name: "Tab"
         , namespace: "tab"
         , debug: !1
         , verbose: !0
         , performance: !0
         , auto: !1
         , history: !1
         , historyType: "hash"
         , path: !1
         , context: !1
         , childrenOnly: !1
         , maxDepth: 25
         , alwaysRefresh: !1
         , cache: !0
         , ignoreFirstLoad: !1
         , apiSettings: !1
         , onTabInit: function () {}
         , onTabLoad: function () {}
         , templates: {
             determineTitle: function () {}
         }
         , error: {
             api: "You attempted to load content without API module"
             , method: "The method you called is not defined"
             , missingTab: "Activated tab cannot be found for this context."
             , noContent: "The tab you specified is missing a content url."
             , path: "History enabled, but no path was specified"
             , recursion: "Max recursive depth reached"
             , state: "History requires Asual's Address library <https://github.com/asual/jquery-address>"
         }
         , metadata: {
             tab: "tab"
             , loaded: "loaded"
             , promise: "promise"
         }
         , className: {
             loading: "loading"
             , active: "active"
         }
         , selector: {
             tabs: ".ui.tab"
             , ui: ".ui"
         }
     }
 }(jQuery, window, document)
 , function (e, t, n, i) {
     "use strict";
     e.fn.transition = function () {
         {
             var o, a = e(this)
                 , r = a.selector || ""
                 , s = (new Date).getTime()
                 , c = []
                 , l = arguments
                 , u = l[0]
                 , d = [].slice.call(arguments, 1)
                 , f = "string" == typeof u;
             t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                 setTimeout(e, 0)
             }
         }
         return a.each(function (t) {
             var m, g, p, v, h, b, y, x, w, C, k, T = e(this)
                 , S = this;
             k = {
                 initialize: function () {
                     m = k.get.settings.apply(S, l), v = m.className, p = m.error, h = m.metadata, C = "." + m.namespace, w = "module-" + m.namespace, g = T.data(w) || k, y = k.get.animationEndEvent(), x = k.get.animationName(), b = k.get.animationStartEvent(), f && (f = k.invoke(u)), f === !1 && (k.verbose("Converted arguments into settings object", m), m.interval ? k.delay(m.animate) : k.animate(), k.instantiate())
                 }
                 , instantiate: function () {
                     k.verbose("Storing instance of module", k), g = k, T.data(w, g)
                 }
                 , destroy: function () {
                     k.verbose("Destroying previous module for", S), T.removeData(w)
                 }
                 , refresh: function () {
                     k.verbose("Refreshing display type on next animation"), delete k.displayType
                 }
                 , forceRepaint: function () {
                     k.verbose("Forcing element repaint");
                     var e = T.parent()
                         , t = T.next();
                     0 === t.length ? T.detach().appendTo(e) : T.detach().insertBefore(t)
                 }
                 , repaint: function () {
                     k.verbose("Repainting element");
                     S.offsetWidth
                 }
                 , delay: function (e) {
                     var n, o = m.reverse === !0
                         , r = "auto" == m.reverse && k.get.direction() == v.outward;
                     e = typeof e !== i ? e : m.interval, n = o || r ? (a.length - t) * m.interval : t * m.interval, k.debug("Delaying animation by", n), setTimeout(k.animate, n)
                 }
                 , animate: function (e) {
                     if (m = e || m, !k.is.supported()) return k.error(p.support), !1;
                     if (k.debug("Preparing animation", m.animation), k.is.animating()) {
                         if (m.queue) return !m.allowRepeats && k.has.direction() && k.is.occurring() && k.queuing !== !0 ? k.debug("Animation is currently occurring, preventing queueing same animation", m.animation) : k.queue(m.animation), !1;
                         if (!m.allowRepeats && k.is.occurring()) return k.debug("Animation is already occurring, will not execute repeated animation", m.animation), !1;
                         k.debug("New animation started, completing previous early", m.animation), k.complete()
                     }
                     k.can.animate() ? k.set.animating(m.animation) : k.error(p.noAnimation, m.animation, S)
                 }
                 , reset: function () {
                     k.debug("Resetting animation to beginning conditions"), k.remove.animationCallbacks(), k.restore.conditions(), k.remove.animating()
                 }
                 , queue: function (e) {
                     k.debug("Queueing animation of", e), k.queuing = !0, T.one(y + ".queue" + C, function () {
                         k.queuing = !1, k.repaint(), k.animate.apply(this, m)
                     })
                 }
                 , complete: function () {
                     k.debug("Animation complete", m.animation), k.remove.completeCallback(), k.remove.failSafe(), k.is.looping() || (k.is.outward() ? (k.verbose("Animation is outward, hiding element"), k.restore.conditions(), k.hide(), m.onHide.call(this)) : k.is.inward() ? (k.verbose("Animation is outward, showing element"), k.restore.conditions(), k.show(), m.onShow.call(this)) : k.restore.conditions(), k.remove.animation(), k.remove.animating()), m.onComplete.call(this)
                 }
                 , has: {
                     direction: function (t) {
                         var n = !1;
                         return t = t || m.animation, "string" == typeof t && (t = t.split(" "), e.each(t, function (e, t) {
                             (t === v.inward || t === v.outward) && (n = !0)
                         })), n
                     }
                     , inlineDisplay: function () {
                         var t = T.attr("style") || "";
                         return e.isArray(t.match(/display.*?;/, ""))
                     }
                 }
                 , set: {
                     animating: function (e) {
                         e = e || m.animation, k.is.animating() || k.save.conditions(), k.remove.direction(), k.remove.completeCallback(), k.can.transition() && !k.has.direction() && k.set.direction(), k.remove.hidden(), k.set.display(), T.addClass(v.animating + " " + v.transition + " " + e).addClass(e).one(y + ".complete" + C, k.complete), m.useFailSafe && k.add.failSafe(), k.set.duration(m.duration), m.onStart.call(this), k.debug("Starting tween", e, T.attr("class"))
                     }
                     , duration: function (e, t) {
                         t = t || m.duration, t = "number" == typeof t ? t + "ms" : t, (t || 0 === t) && (k.verbose("Setting animation duration", t), T.css({
                             "-webkit-animation-duration": t
                             , "-moz-animation-duration": t
                             , "-ms-animation-duration": t
                             , "-o-animation-duration": t
                             , "animation-duration": t
                         }))
                     }
                     , display: function () {
                         var e = k.get.style()
                             , t = k.get.displayType()
                             , n = e + "display: " + t + " !important;";
                         T.css("display", ""), k.refresh(), T.css("display") !== t && (k.verbose("Setting inline visibility to", t), T.attr("style", n))
                     }
                     , direction: function () {
                         T.is(":visible") && !k.is.hidden() ? (k.debug("Automatically determining the direction of animation", "Outward"), T.removeClass(v.inward).addClass(v.outward)) : (k.debug("Automatically determining the direction of animation", "Inward"), T.removeClass(v.outward).addClass(v.inward))
                     }
                     , looping: function () {
                         k.debug("Transition set to loop"), T.addClass(v.looping)
                     }
                     , hidden: function () {
                         k.is.hidden() || T.addClass(v.transition).addClass(v.hidden), "none" !== T.css("display") && (k.verbose("Overriding default display to hide element"), T.css("display", "none"))
                     }
                     , visible: function () {
                         T.addClass(v.transition).addClass(v.visible)
                     }
                 }
                 , save: {
                     displayType: function (e) {
                         T.data(h.displayType, e)
                     }
                     , transitionExists: function (t, n) {
                         e.fn.transition.exists[t] = n, k.verbose("Saving existence of transition", t, n)
                     }
                     , conditions: function () {
                         T.attr("class") || !1, T.attr("style") || "";
                         T.removeClass(m.animation), k.remove.direction(), k.cache = {
                             className: T.attr("class")
                             , style: k.get.style()
                         }, k.verbose("Saving original attributes", k.cache)
                     }
                 }
                 , restore: {
                     conditions: function () {
                         return k.cache === i ? !1 : (k.cache.className ? T.attr("class", k.cache.className) : T.removeAttr("class"), k.cache.style ? (k.verbose("Restoring original style attribute", k.cache.style), T.attr("style", k.cache.style)) : (k.verbose("Clearing style attribute"), T.removeAttr("style")), void k.verbose("Restoring original attributes", k.cache))
                     }
                 }
                 , add: {
                     failSafe: function () {
                         var e = k.get.duration();
                         k.timer = setTimeout(function () {
                             T.trigger(y)
                         }, e + m.failSafeDelay), k.verbose("Adding fail safe timer", k.timer)
                     }
                 }
                 , remove: {
                     animating: function () {
                         T.removeClass(v.animating)
                     }
                     , animation: function () {
                         T.css({
                             "-webkit-animation": ""
                             , "-moz-animation": ""
                             , "-ms-animation": ""
                             , "-o-animation": ""
                             , animation: ""
                         })
                     }
                     , animationCallbacks: function () {
                         k.remove.queueCallback(), k.remove.completeCallback()
                     }
                     , queueCallback: function () {
                         T.off(".queue" + C)
                     }
                     , completeCallback: function () {
                         T.off(".complete" + C)
                     }
                     , display: function () {
                         T.css("display", "")
                     }
                     , direction: function () {
                         T.removeClass(v.inward).removeClass(v.outward)
                     }
                     , failSafe: function () {
                         k.verbose("Removing fail safe timer", k.timer), k.timer && clearTimeout(k.timer)
                     }
                     , hidden: function () {
                         T.removeClass(v.hidden)
                     }
                     , visible: function () {
                         T.removeClass(v.visible)
                     }
                     , looping: function () {
                         k.debug("Transitions are no longer looping"), k.is.looping() && (k.reset(), T.removeClass(v.looping))
                     }
                     , transition: function () {
                         T.removeClass(v.visible).removeClass(v.hidden)
                     }
                 }
                 , get: {
                     settings: function (t, n, i) {
                         return "object" == typeof t ? e.extend(!0, {}, e.fn.transition.settings, t) : "function" == typeof i ? e.extend({}, e.fn.transition.settings, {
                             animation: t
                             , onComplete: i
                             , duration: n
                         }) : "string" == typeof n || "number" == typeof n ? e.extend({}, e.fn.transition.settings, {
                             animation: t
                             , duration: n
                         }) : "object" == typeof n ? e.extend({}, e.fn.transition.settings, n, {
                             animation: t
                         }) : "function" == typeof n ? e.extend({}, e.fn.transition.settings, {
                             animation: t
                             , onComplete: n
                         }) : e.extend({}, e.fn.transition.settings, {
                             animation: t
                         })
                     }
                     , direction: function (t) {
                         return t = t || m.animation, "string" == typeof t && (t = t.split(" "), e.each(t, function (e, t) {
                             return t === v.inward ? v.inward : t === v.outward ? v.outward : void 0
                         })), k.can.transition() ? T.is(":visible") && !k.is.hidden() ? v.outward : v.inward : "static"
                     }
                     , duration: function (e) {
                         return e = e || m.duration, e === !1 && (e = T.css("animation-duration") || 0), "string" == typeof e ? e.indexOf("ms") > -1 ? parseFloat(e) : 1e3 * parseFloat(e) : e
                     }
                     , displayType: function () {
                         return m.displayType ? m.displayType : (T.data(h.displayType) === i && k.can.transition(!0), T.data(h.displayType))
                     }
                     , style: function () {
                         var e = T.attr("style") || "";
                         return e.replace(/display.*?;/, "")
                     }
                     , transitionExists: function (t) {
                         return e.fn.transition.exists[t]
                     }
                     , animationName: function () {
                         var e, t = n.createElement("div")
                             , o = {
                                 animation: "animationName"
                                 , OAnimation: "oAnimationName"
                                 , MozAnimation: "mozAnimationName"
                                 , WebkitAnimation: "webkitAnimationName"
                             };
                         for (e in o)
                             if (t.style[e] !== i) return o[e];
                         return !1
                     }
                     , animationStartEvent: function () {
                         var e, t = n.createElement("div")
                             , o = {
                                 animation: "animationstart"
                                 , OAnimation: "oAnimationStart"
                                 , MozAnimation: "mozAnimationStart"
                                 , WebkitAnimation: "webkitAnimationStart"
                             };
                         for (e in o)
                             if (t.style[e] !== i) return o[e];
                         return !1
                     }
                     , animationEndEvent: function () {
                         var e, t = n.createElement("div")
                             , o = {
                                 animation: "animationend"
                                 , OAnimation: "oAnimationEnd"
                                 , MozAnimation: "mozAnimationEnd"
                                 , WebkitAnimation: "webkitAnimationEnd"
                             };
                         for (e in o)
                             if (t.style[e] !== i) return o[e];
                         return !1
                     }
                 }
                 , can: {
                     transition: function (t) {
                         var n, o, a, r, s, c = T.attr("class")
                             , l = T.prop("tagName")
                             , u = m.animation
                             , d = k.get.transitionExists(u);
                         if (d === i || t) {
                             if (k.verbose("Determining whether animation exists"), n = e("<" + l + " />").addClass(c).insertAfter(T), o = n.addClass(u).removeClass(v.inward).removeClass(v.outward).addClass(v.animating).addClass(v.transition).css(x), a = n.addClass(v.inward).css(x), s = n.attr("class", c).removeAttr("style").removeClass(v.hidden).removeClass(v.visible).show().css("display"), k.verbose("Determining final display state", s), k.save.displayType(s), n.remove(), o != a) k.debug("Direction exists for animation", u), r = !0;
                             else {
                                 if ("none" == o || !o) return void k.debug("No animation defined in css", u);
                                 k.debug("Static animation found", u, s), r = !1
                             }
                             k.save.transitionExists(u, r)
                         }
                         return d !== i ? d : r
                     }
                     , animate: function () {
                         return k.can.transition() !== i
                     }
                 }
                 , is: {
                     animating: function () {
                         return T.hasClass(v.animating)
                     }
                     , inward: function () {
                         return T.hasClass(v.inward)
                     }
                     , outward: function () {
                         return T.hasClass(v.outward)
                     }
                     , looping: function () {
                         return T.hasClass(v.looping)
                     }
                     , occurring: function (e) {
                         return e = e || m.animation, e = "." + e.replace(" ", "."), T.filter(e).length > 0
                     }
                     , visible: function () {
                         return T.is(":visible")
                     }
                     , hidden: function () {
                         return "hidden" === T.css("visibility")
                     }
                     , supported: function () {
                         return x !== !1 && y !== !1
                     }
                 }
                 , hide: function () {
                     k.verbose("Hiding element"), k.is.animating() && k.reset(), k.remove.display(), k.remove.visible(), k.set.hidden(), k.repaint()
                 }
                 , show: function (e) {
                     k.verbose("Showing element", e), k.remove.hidden(), k.set.visible(), k.set.display(), k.repaint()
                 }
                 , toggle: function () {
                     k.is.visible() ? k.hide() : k.show()
                 }
                 , stop: function () {
                     k.debug("Stopping current animation"), T.trigger(y)
                 }
                 , stopAll: function () {
                     k.debug("Stopping all animation"), k.remove.queueCallback(), T.trigger(y)
                 }
                 , clear: {
                     queue: function () {
                         k.debug("Clearing animation queue"), k.remove.queueCallback()
                     }
                 }
                 , enable: function () {
                     k.verbose("Starting animation"), T.removeClass(v.disabled)
                 }
                 , disable: function () {
                     k.debug("Stopping animation"), T.addClass(v.disabled)
                 }
                 , setting: function (t, n) {
                     if (k.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (n === i) return m[t];
                         m[t] = n
                     }
                 }
                 , internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, k, t);
                     else {
                         if (n === i) return k[t];
                         k[t] = n
                     }
                 }
                 , debug: function () {
                     m.debug && (m.performance ? k.performance.log(arguments) : (k.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), k.debug.apply(console, arguments)))
                 }
                 , verbose: function () {
                     m.verbose && m.debug && (m.performance ? k.performance.log(arguments) : (k.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), k.verbose.apply(console, arguments)))
                 }
                 , error: function () {
                     k.error = Function.prototype.bind.call(console.error, console, m.name + ":"), k.error.apply(console, arguments)
                 }
                 , performance: {
                     log: function (e) {
                         var t, n, i;
                         m.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                             Name: e[0]
                             , Arguments: [].slice.call(e, 1) || ""
                             , Element: S
                             , "Execution Time": n
                         })), clearTimeout(k.performance.timer), k.performance.timer = setTimeout(k.performance.display, 100)
                     }
                     , display: function () {
                         var t = m.name + ":"
                             , n = 0;
                         s = !1, clearTimeout(k.performance.timer), e.each(c, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", r && (t += " '" + r + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 }
                 , invoke: function (t, n, a) {
                     var r, s, c, l = g;
                     return n = n || d, a = S || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s !== i ? s : !1
                 }
             }, k.initialize()
         }), o !== i ? o : this
     }, e.fn.transition.exists = {}, e.fn.transition.settings = {
         name: "Transition"
         , debug: !1
         , verbose: !0
         , performance: !0
         , namespace: "transition"
         , interval: 0
         , reverse: "auto"
         , onStart: function () {}
         , onComplete: function () {}
         , onShow: function () {}
         , onHide: function () {}
         , useFailSafe: !0
         , failSafeDelay: 100
         , allowRepeats: !1
         , displayType: !1
         , animation: "fade"
         , duration: !1
         , queue: !0
         , metadata: {
             displayType: "display"
         }
         , className: {
             animating: "animating"
             , disabled: "disabled"
             , hidden: "hidden"
             , inward: "in"
             , loading: "loading"
             , looping: "looping"
             , outward: "out"
             , transition: "transition"
             , visible: "visible"
         }
         , error: {
             noAnimation: "There is no css animation matching the one you specified."
             , repeated: "That animation is already occurring, cancelling repeated animation"
             , method: "The method you called is not defined"
             , support: "This browser does not support CSS animations"
         }
     }
 }(jQuery, window, document)
 , function (e, t, n, i) {
     "use strict";
     e.fn.video = function (n) {
         {
             var o, a = e(this)
                 , r = a.selector || ""
                 , s = (new Date).getTime()
                 , c = []
                 , l = arguments[0]
                 , u = "string" == typeof l
                 , d = [].slice.call(arguments, 1);
             t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                 setTimeout(e, 0)
             }
         }
         return a.each(function () {
             var f, m = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.video.settings, n) : e.extend({}, e.fn.video.settings)
                 , g = m.selector
                 , p = m.className
                 , v = m.error
                 , h = m.metadata
                 , b = m.namespace
                 , y = m.templates
                 , x = "." + b
                 , w = "module-" + b
                 , C = (e(t), e(this))
                 , k = C.find(g.placeholder)
                 , T = C.find(g.playButton)
                 , S = C.find(g.embed)
                 , A = this
                 , P = C.data(w);
             f = {
                 initialize: function () {
                     f.debug("Initializing video"), f.create(), k.on("click" + x, f.play), T.on("click" + x, f.play), f.instantiate()
                 }
                 , instantiate: function () {
                     f.verbose("Storing instance of module", f), P = f, C.data(w, f)
                 }
                 , create: function () {
                     var e = C.data(h.image)
                         , t = y.video(e);
                     C.html(t), f.refresh(), e || f.play(), f.debug("Creating html for video element", t)
                 }
                 , destroy: function () {
                     f.verbose("Destroying previous instance of video"), f.reset(), C.removeData(w).off(x), k.off(x), T.off(x)
                 }
                 , refresh: function () {
                     f.verbose("Refreshing selector cache"), k = C.find(g.placeholder), T = C.find(g.playButton), S = C.find(g.embed)
                 }
                 , change: function (e, t, n) {
                     f.debug("Changing video to ", e, t, n), C.data(h.source, e).data(h.id, t).data(h.url, n), m.onChange()
                 }
                 , reset: function () {
                     f.debug("Clearing video embed and showing placeholder"), C.removeClass(p.active), S.html(" "), k.show(), m.onReset()
                 }
                 , play: function () {
                     f.debug("Playing video");
                     var e = C.data(h.source) || !1
                         , t = C.data(h.url) || !1
                         , n = C.data(h.id) || !1;
                     S.html(f.generate.html(e, n, t)), C.addClass(p.active), m.onPlay()
                 }
                 , get: {
                     source: function (e) {
                         return "string" != typeof e ? !1 : -1 !== e.search("youtube.com") ? "youtube" : -1 !== e.search("vimeo.com") ? "vimeo" : !1
                     }
                     , id: function (e) {
                         return e.match(m.regExp.youtube) ? e.match(m.regExp.youtube)[1] : e.match(m.regExp.vimeo) ? e.match(m.regExp.vimeo)[2] : !1
                     }
                 }
                 , generate: {
                     html: function (e, t, n) {
                         f.debug("Generating embed html");
                         var i;
                         return e = e || m.source, t = t || m.id, e && t || n ? (e && t || (e = f.get.source(n), t = f.get.id(n)), "vimeo" == e ? i = '<iframe src="//player.vimeo.com/video/' + t + "?=" + f.generate.url(e) + '" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>' : "youtube" == e && (i = '<iframe src="//www.youtube.com/embed/' + t + "?=" + f.generate.url(e) + '" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')) : f.error(v.noVideo), i
                     }
                     , url: function (e) {
                         var t = m.api ? 1 : 0
                             , n = "auto" === m.autoplay ? C.data("image") !== i : m.autoplay
                             , o = m.hd ? 1 : 0
                             , a = m.showUI ? 1 : 0
                             , r = m.showUI ? 0 : 1
                             , s = "";
                         return "vimeo" == e && (s = "api=" + t + "&amp;title=" + a + "&amp;byline=" + a + "&amp;portrait=" + a + "&amp;autoplay=" + n, m.color && (s += "&amp;color=" + m.color)), "ustream" == e ? (s = "autoplay=" + n, m.color && (s += "&amp;color=" + m.color)) : "youtube" == e && (s = "enablejsapi=" + t + "&amp;autoplay=" + n + "&amp;autohide=" + r + "&amp;hq=" + o + "&amp;modestbranding=1", m.color && (s += "&amp;color=" + m.color)), s
                     }
                 }
                 , setting: function (t, n) {
                     if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (n === i) return m[t];
                         m[t] = n
                     }
                 }
                 , internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, f, t);
                     else {
                         if (n === i) return f[t];
                         f[t] = n
                     }
                 }
                 , debug: function () {
                     m.debug && (m.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), f.debug.apply(console, arguments)))
                 }
                 , verbose: function () {
                     m.verbose && m.debug && (m.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), f.verbose.apply(console, arguments)))
                 }
                 , error: function () {
                     f.error = Function.prototype.bind.call(console.error, console, m.name + ":"), f.error.apply(console, arguments)
                 }
                 , performance: {
                     log: function (e) {
                         var t, n, i;
                         m.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                             Name: e[0]
                             , Arguments: [].slice.call(e, 1) || ""
                             , Element: A
                             , "Execution Time": n
                         })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 100)
                     }
                     , display: function () {
                         var t = m.name + ":"
                             , n = 0;
                         s = !1, clearTimeout(f.performance.timer), e.each(c, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", r && (t += " '" + r + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 }
                 , invoke: function (t, n, a) {
                     var r, s, c, l = P;
                     return n = n || d, a = A || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (f.error(v.method, t), !1);
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                 }
             }, u ? (P === i && f.initialize(), f.invoke(l)) : (P !== i && P.invoke("destroy"), f.initialize())
         }), o !== i ? o : this
     }, e.fn.video.settings = {
         name: "Video"
         , namespace: "video"
         , debug: !1
         , verbose: !0
         , performance: !0
         , metadata: {
             id: "id"
             , image: "image"
             , source: "source"
             , url: "url"
         }
         , source: !1
         , url: !1
         , id: !1
         , aspectRatio: 16 / 9
         , onPlay: function () {}
         , onReset: function () {}
         , onChange: function () {}
         , onPause: function () {}
         , onStop: function () {}
         , width: "auto"
         , height: "auto"
         , autoplay: "auto"
         , color: "#442359"
         , hd: !0
         , showUI: !1
         , api: !0
         , regExp: {
             youtube: /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
             , vimeo: /http:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/
         }
         , error: {
             noVideo: "No video specified"
             , method: "The method you called is not defined"
         }
         , className: {
             active: "active"
         }
         , selector: {
             embed: ".embed"
             , placeholder: ".placeholder"
             , playButton: ".play"
         }
     }, e.fn.video.settings.templates = {
         video: function (e) {
             var t = "";
             return e && (t += '<i class="video play icon"></i><img class="placeholder" src="' + e + '">'), t += '<div class="embed"></div>'
         }
     }
 }(jQuery, window, document)
 , function (e, t, n, i) {
     "use strict";
     e.api = e.fn.api = function (n) {
         var o, a = e(e.isFunction(this) ? t : this)
             , r = a.selector || ""
             , s = (new Date).getTime()
             , c = []
             , l = arguments[0]
             , u = "string" == typeof l
             , d = [].slice.call(arguments, 1);
         return a.each(function () {
             var t, a, f, m, g, p = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.api.settings, n) : e.extend({}, e.fn.api.settings)
                 , v = p.namespace
                 , h = p.metadata
                 , b = p.selector
                 , y = p.error
                 , x = p.className
                 , w = "." + v
                 , C = "module-" + v
                 , k = e(this)
                 , T = k.closest(b.form)
                 , S = p.stateContext ? e(p.stateContext) : k
                 , A = this
                 , P = S.get()
                 , E = k.data(C);
             g = {
                 initialize: function () {
                     var e = g.get.event();
                     u || (e ? (g.debug("Attaching API events to element", e), k.on(e + w, g.event.trigger)) : "now" == p.on && (g.debug("Querying API now", e), g.query())), g.instantiate()
                 }
                 , instantiate: function () {
                     g.verbose("Storing instance of module", g), E = g, k.data(C, E)
                 }
                 , destroy: function () {
                     g.verbose("Destroying previous module for", A), k.removeData(C).off(w)
                 }
                 , query: function () {
                     if (g.is.disabled()) return void g.debug("Element is disabled API request aborted");
                     if (g.is.loading() && 0 === p.throttle) return void g.debug("Cancelling request, previous request is still pending");
                     if (p.defaultData && e.extend(!0, p.urlData, g.get.defaultData()), (p.serializeForm !== !1 || S.is("form")) && ("json" == p.serializeForm ? e.extend(!0, p.data, g.get.formData()) : p.data = g.get.formData()), a = g.get.settings(), a === !1) return g.cancelled = !0, void g.error(y.beforeSend);
                     if (g.cancelled = !1, p.url ? (g.debug("Using specified url", f), f = g.add.urlData(p.url)) : (f = g.add.urlData(g.get.templateURL()), g.debug("Added URL Data to url", f)), !f) {
                         if (!g.is.form()) return void g.error(y.missingURL, p.action);
                         f = k.attr("action") || "", g.debug("No url or action specified, defaulting to form action", f)
                     }
                     g.set.loading(), t = e.extend(!0, {}, p, {
                         type: p.method || p.type
                         , data: m
                         , url: p.base + f
                         , beforeSend: p.beforeXHR
                         , success: function () {}
                         , failure: function () {}
                         , complete: function () {}
                     }), g.debug("Querying URL", t.url), g.debug("Sending data", m, t.method), g.verbose("Using AJAX settings", t), g.is.loading() ? g.timer = setTimeout(function () {
                         g.request = g.create.request(), g.xhr = g.create.xhr(), p.onRequest.call(P, g.request, g.xhr)
                     }, p.throttle) : (g.request = g.create.request(), g.xhr = g.create.xhr(), p.onRequest.call(P, g.request, g.xhr))
                 }
                 , is: {
                     disabled: function () {
                         return k.filter(p.filter).length > 0
                     }
                     , form: function () {
                         return k.is("form")
                     }
                     , input: function () {
                         return k.is("input")
                     }
                     , loading: function () {
                         return g.request && "pending" == g.request.state()
                     }
                 }
                 , was: {
                     cancelled: function () {
                         return g.cancelled || !1
                     }
                     , succesful: function () {
                         return g.request && "resolved" == g.request.state()
                     }
                     , failure: function () {
                         return g.request && "rejected" == g.request.state()
                     }
                     , complete: function () {
                         return g.request && ("resolved" == g.request.state() || "rejected" == g.request.state())
                     }
                 }
                 , add: {
                     urlData: function (t, n) {
                         var o, a;
                         return t && (o = t.match(p.regExp.required), a = t.match(p.regExp.optional), n = n || p.urlData, o && (g.debug("Looking for required URL variables", o), e.each(o, function (o, a) {
                             var r = -1 !== a.indexOf("$") ? a.substr(2, a.length - 3) : a.substr(1, a.length - 2)
                                 , s = e.isPlainObject(n) && n[r] !== i ? n[r] : k.data(r) !== i ? k.data(r) : S.data(r) !== i ? S.data(r) : n[r];
                             return s === i ? (g.error(y.requiredParameter, r, t), t = !1, !1) : (g.verbose("Found required variable", r, s), void(t = t.replace(a, s)))
                         })), a && (g.debug("Looking for optional URL variables", o), e.each(a, function (o, a) {
                             var r = -1 !== a.indexOf("$") ? a.substr(3, a.length - 4) : a.substr(2, a.length - 3)
                                 , s = e.isPlainObject(n) && n[r] !== i ? n[r] : k.data(r) !== i ? k.data(r) : S.data(r) !== i ? S.data(r) : n[r];
                             s !== i ? (g.verbose("Optional variable Found", r, s), t = t.replace(a, s)) : (g.verbose("Optional variable not found", r), t = -1 !== t.indexOf("/" + a) ? t.replace("/" + a, "") : t.replace(a, ""))
                         }))), t
                     }
                 }
                 , event: {
                     trigger: function (e) {
                         g.query(), ("submit" == e.type || "click" == e.type) && e.preventDefault()
                     }
                     , xhr: {
                         always: function () {}
                         , done: function (e) {
                             var t = this
                                 , n = (new Date).getTime() - s
                                 , i = p.loadingDuration - n;
                             i = i > 0 ? i : 0, setTimeout(function () {
                                 g.request.resolveWith(t, [e])
                             }, i)
                         }
                         , fail: function (e, t, n) {
                             var i = this
                                 , o = (new Date).getTime() - s
                                 , a = p.loadingDuration - o;
                             a = a > 0 ? a : 0, setTimeout(function () {
                                 "abort" !== t ? g.request.rejectWith(i, [e, t, n]) : g.reset()
                             }, a)
                         }
                     }
                     , request: {
                         complete: function (e) {
                             g.remove.loading(), p.onComplete.call(P, e, k)
                         }
                         , done: function (t) {
                             g.debug("API Response Received", t), "json" == p.dataType && e.isFunction(p.successTest) ? (g.debug("Checking JSON returned success", p.successTest, t), p.successTest(t) ? p.onSuccess.call(P, t, k) : (g.debug("JSON test specified by user and response failed", t), p.onFailure.call(P, t, k))) : p.onSuccess.call(P, t, k)
                         }
                         , error: function (n, o, a) {
                             var r, s = p.error[o] !== i ? p.error[o] : a;
                             if (n !== i)
                                 if (n.readyState !== i && 4 == n.readyState) {
                                     if (200 != n.status && a !== i && "" !== a) g.error(y.statusMessage + a, t.url);
                                     else if ("error" == o && "json" == p.dataType) try {
                                         r = e.parseJSON(n.responseText), r && r.error !== i && (s = r.error)
                                     }
                                     catch (c) {
                                         g.error(y.JSONParse)
                                     }
                                     g.remove.loading(), g.set.error(), p.errorDuration && setTimeout(g.remove.error, p.errorDuration), g.debug("API Request error:", s), p.onError.call(P, s, k)
                                 }
                                 else p.onAbort.call(P, s, k), g.debug("Request Aborted (Most likely caused by page change or CORS Policy)", o, a)
                         }
                     }
                 }
                 , create: {
                     request: function () {
                         return e.Deferred().always(g.event.request.complete).done(g.event.request.done).fail(g.event.request.error)
                     }
                     , xhr: function () {
                         return e.ajax(t).always(g.event.xhr.always).done(g.event.xhr.done).fail(g.event.xhr.fail)
                     }
                 }
                 , set: {
                     error: function () {
                         g.verbose("Adding error state to element", S), S.addClass(x.error)
                     }
                     , loading: function () {
                         g.verbose("Adding loading state to element", S), S.addClass(x.loading)
                     }
                 }
                 , remove: {
                     error: function () {
                         g.verbose("Removing error state from element", S), S.removeClass(x.error)
                     }
                     , loading: function () {
                         g.verbose("Removing loading state from element", S), S.removeClass(x.loading)
                     }
                 }
                 , get: {
                     request: function () {
                         return g.request || !1
                     }
                     , xhr: function () {
                         return g.xhr || !1
                     }
                     , settings: function () {
                         var e;
                         return e = p.beforeSend.call(k, p), e && (e.success !== i && (g.debug("Legacy success callback detected", e), g.error(y.legacyParameters, e.success), e.onSuccess = e.success), e.failure !== i && (g.debug("Legacy failure callback detected", e), g.error(y.legacyParameters, e.failure), e.onFailure = e.failure), e.complete !== i && (g.debug("Legacy complete callback detected", e), g.error(y.legacyParameters, e.complete), e.onComplete = e.complete)), e === i && g.error(y.noReturnedValue), e !== i ? e : p
                     }
                     , defaultData: function () {
                         var t = {};
                         return e.isWindow(A) || (g.is.input() ? t.value = k.val() : g.is.form() && (t.text = k.text())), t
                     }
                     , event: function () {
                         return e.isWindow(A) || "now" == p.on ? (g.debug("API called without element, no events attached"), !1) : "auto" == p.on ? k.is("input") ? A.oninput !== i ? "input" : A.onpropertychange !== i ? "propertychange" : "keyup" : k.is("form") ? "submit" : "click" : p.on
                     }
                     , formData: function () {
                         var e;
                         return k.serializeObject !== i ? e = T.serializeObject() : (g.error(y.missingSerialize), e = T.serialize()), g.debug("Retrieved form data", e), e
                     }
                     , templateURL: function (e) {
                         var t;
                         return e = e || k.data(h.action) || p.action || !1, e && (g.debug("Looking up url for action", e, p.api), p.api[e] !== i ? (t = p.api[e], g.debug("Found template url", t)) : g.is.form() || g.error(y.missingAction, p.action, p.api)), t
                     }
                 }
                 , abort: function () {
                     var e = g.get.xhr();
                     e && "resolved" !== e.state() && (g.debug("Cancelling API request"), e.abort(), g.request.rejectWith(p.apiSettings))
                 }
                 , reset: function () {
                     g.remove.error(), g.remove.loading()
                 }
                 , setting: function (t, n) {
                     if (g.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, p, t);
                     else {
                         if (n === i) return p[t];
                         p[t] = n
                     }
                 }
                 , internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, g, t);
                     else {
                         if (n === i) return g[t];
                         g[t] = n
                     }
                 }
                 , debug: function () {
                     p.debug && (p.performance ? g.performance.log(arguments) : (g.debug = Function.prototype.bind.call(console.info, console, p.name + ":"), g.debug.apply(console, arguments)))
                 }
                 , verbose: function () {
                     p.verbose && p.debug && (p.performance ? g.performance.log(arguments) : (g.verbose = Function.prototype.bind.call(console.info, console, p.name + ":"), g.verbose.apply(console, arguments)))
                 }
                 , error: function () {
                     g.error = Function.prototype.bind.call(console.error, console, p.name + ":"), g.error.apply(console, arguments)
                 }
                 , performance: {
                     log: function (e) {
                         var t, n, i;
                         p.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, c.push({
                             Name: e[0]
                             , Arguments: [].slice.call(e, 1) || ""
                             , "Execution Time": n
                         })), clearTimeout(g.performance.timer), g.performance.timer = setTimeout(g.performance.display, 100)
                     }
                     , display: function () {
                         var t = p.name + ":"
                             , n = 0;
                         s = !1, clearTimeout(g.performance.timer), e.each(c, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 }
                 , invoke: function (t, n, a) {
                     var r, s, c, l = E;
                     return n = n || d, a = A || a, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (g.error(y.method, t), !1);
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(a, n) : s !== i && (c = s), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), s
                 }
             }, u ? (E === i && g.initialize(), g.invoke(l)) : (E !== i && E.invoke("destroy"), g.initialize())
         }), o !== i ? o : this
     }, e.api.settings = {
         name: "API"
         , namespace: "api"
         , debug: !0
         , verbose: !1
         , performance: !0
         , on: "auto"
         , filter: ".disabled"
         , stateContext: !1
         , loadingDuration: 0
         , errorDuration: 2e3
         , action: !1
         , url: !1
         , base: ""
         , urlData: {}
         , defaultData: !0
         , serializeForm: !1
         , throttle: 0
         , method: "get"
         , data: {}
         , dataType: "json"
         , beforeSend: function (e) {
             return e
         }
         , beforeXHR: function () {}
         , onRequest: function () {}
         , onSuccess: function () {}
         , onComplete: function () {}
         , onFailure: function () {}
         , onError: function () {}
         , onAbort: function () {}
         , successTest: !1
         , error: {
             beforeSend: "The before send function has aborted the request"
             , error: "There was an error with your request"
             , exitConditions: "API Request Aborted. Exit conditions met"
             , JSONParse: "JSON could not be parsed during error handling"
             , legacyParameters: "You are using legacy API success callback names"
             , method: "The method you called is not defined"
             , missingAction: "API action used but no url was defined"
             , missingSerialize: "Required dependency jquery-serialize-object missing, using basic serialize"
             , missingURL: "No URL specified for api event"
             , noReturnedValue: "The beforeSend callback must return a settings object, beforeSend ignored."
             , parseError: "There was an error parsing your request"
             , requiredParameter: "Missing a required URL parameter: "
             , statusMessage: "Server gave an error: "
             , timeout: "Your request timed out"
         }
         , regExp: {
             required: /\{\$*[A-z0-9]+\}/g
             , optional: /\{\/\$*[A-z0-9]+\}/g
         }
         , className: {
             loading: "loading"
             , error: "error"
         }
         , selector: {
             form: "form"
         }
         , metadata: {
             action: "action"
         }
     }, e.api.settings.api = {}
 }(jQuery, window, document)
 , function (e, t, n, i) {
     "use strict";
     e.fn.form = function (t, o) {
         var a, r = e(this)
             , s = e.extend(!0, {}, e.fn.form.settings, o)
             , c = e.extend({}, e.fn.form.settings.defaults, t)
             , l = s.namespace
             , u = s.metadata
             , d = s.selector
             , f = s.className
             , m = (s.error, "." + l)
             , g = "module-" + l
             , p = r.selector || ""
             , v = (new Date).getTime()
             , h = []
             , b = arguments[0]
             , y = "string" == typeof b
             , x = [].slice.call(arguments, 1);
         return r.each(function () {
             var t, o = e(this)
                 , l = e(this).find(d.field)
                 , w = e(this).find(d.group)
                 , C = e(this).find(d.message)
                 , k = (e(this).find(d.prompt), e(this).find(d.submit))
                 , T = e(this).find(d.clear)
                 , S = e(this).find(d.reset)
                 , A = []
                 , P = !1
                 , E = this
                 , F = o.data(g);
             t = {
                 initialize: function () {
                     t.verbose("Initializing form validation", o, c, s), t.bindEvents(), t.set.defaults(), t.instantiate()
                 }
                 , instantiate: function () {
                     t.verbose("Storing instance of module", t), F = t, o.data(g, t)
                 }
                 , destroy: function () {
                     t.verbose("Destroying previous module", F), t.removeEvents(), o.removeData(g)
                 }
                 , refresh: function () {
                     t.verbose("Refreshing selector cache"), l = o.find(d.field)
                 }
                 , submit: function () {
                     t.verbose("Submitting form", o), o.submit()
                 }
                 , attachEvents: function (n, i) {
                     i = i || "submit", e(n).on("click", function (e) {
                         t[i](), e.preventDefault()
                     })
                 }
                 , bindEvents: function () {
                     s.keyboardShortcuts && l.on("keydown" + m, t.event.field.keydown), o.on("submit" + m, t.validate.form), l.on("blur" + m, t.event.field.blur), t.attachEvents(k, "submit"), t.attachEvents(S, "reset"), t.attachEvents(T, "clear"), l.each(function () {
                         var n = e(this).prop("type")
                             , i = t.get.changeEvent(n);
                         e(this).on(i + m, t.event.field.change)
                     })
                 }
                 , clear: function () {
                     l.each(function () {
                         var n = e(this)
                             , i = n.parent()
                             , o = n.closest(w)
                             , a = o.find(d.prompt)
                             , r = n.data(u.defaultValue) || ""
                             , s = i.is(d.uiCheckbox)
                             , c = i.is(d.uiDropdown)
                             , l = o.hasClass(f.error);
                         l && (t.verbose("Resetting error on field", o), o.removeClass(f.error), a.remove()), c ? (t.verbose("Resetting dropdown value", i, r), i.dropdown("clear")) : s ? i.checkbox("uncheck") : (t.verbose("Resetting field value", n, r), n.val(""))
                     })
                 }
                 , reset: function () {
                     l.each(function () {
                         var n = e(this)
                             , i = n.parent()
                             , o = n.closest(w)
                             , a = o.find(d.prompt)
                             , r = n.data(u.defaultValue) || ""
                             , s = i.is(d.uiCheckbox)
                             , c = i.is(d.uiDropdown)
                             , l = o.hasClass(f.error);
                         l && (t.verbose("Resetting error on field", o), o.removeClass(f.error), a.remove()), c ? (t.verbose("Resetting dropdown value", i, r), i.dropdown("restore defaults")) : s ? (t.verbose("Resetting checkbox value", i, r), i.checkbox(r === !0 ? "check" : "uncheck")) : (t.verbose("Resetting field value", n, r), n.val(r))
                     })
                 }
                 , removeEvents: function () {
                     o.off(m), l.off(m), k.off(m), l.off(m)
                 }
                 , event: {
                     field: {
                         keydown: function (n) {
                             var i = e(this)
                                 , o = n.which
                                 , a = {
                                     enter: 13
                                     , escape: 27
                                 };
                             o == a.escape && (t.verbose("Escape key pressed blurring field"), i.blur()), !n.ctrlKey && o == a.enter && i.is(d.input) && i.not(d.checkbox).length > 0 && (k.addClass(f.pressed), P || (i.one("keyup" + m, t.event.field.keyup), t.submit(), t.debug("Enter pressed on input submitting form")), P = !0)
                         }
                         , keyup: function () {
                             P = !1, k.removeClass(f.pressed)
                         }
                         , blur: function () {
                             var n = e(this)
                                 , i = n.closest(w);
                             i.hasClass(f.error) ? (t.debug("Revalidating field", n, t.get.validation(n)), t.validate.field(t.get.validation(n))) : ("blur" == s.on || "change" == s.on) && t.validate.field(t.get.validation(n))
                         }
                         , change: function () {
                             var n = e(this)
                                 , i = n.closest(w);
                             ("change" == s.on || i.hasClass(f.error) && s.revalidate) && (clearTimeout(t.timer), t.timer = setTimeout(function () {
                                 t.debug("Revalidating field", n, t.get.validation(n)), t.validate.field(t.get.validation(n))
                             }, s.delay))
                         }
                     }
                 }
                 , get: {
                     changeEvent: function (e) {
                         return "checkbox" == e || "radio" == e || "hidden" == e ? "change" : t.get.inputEvent()
                     }
                     , inputEvent: function () {
                         return n.createElement("input").oninput !== i ? "input" : n.createElement("input").onpropertychange !== i ? "propertychange" : "keyup"
                     }
                     , field: function (n) {
                         return t.verbose("Finding field with identifier", n), l.filter("#" + n).length > 0 ? l.filter("#" + n) : l.filter('[name="' + n + '"]').length > 0 ? l.filter('[name="' + n + '"]') : l.filter('[name="' + n + '[]"]').length > 0 ? l.filter('[name="' + n + '[]"]') : l.filter("[data-" + u.validate + '="' + n + '"]').length > 0 ? l.filter("[data-" + u.validate + '="' + n + '"]') : e("<input/>")
                     }
                     , fields: function (n) {
                         var i = e();
                         return e.each(n, function (e, n) {
                             i = i.add(t.get.field(n))
                         }), i
                     }
                     , validation: function (n) {
                         var i;
                         return e.each(c, function (e, o) {
                             t.get.field(o.identifier).get(0) == n.get(0) && (i = o)
                         }), i || !1
                     }
                     , value: function (e) {
                         var n, i = [];
                         return i.push(e), n = t.get.values.call(E, i), n[e]
                     }
                     , values: function (n) {
                         var i = e.isArray(n) ? t.get.fields(n) : l
                             , o = {};
                         return i.each(function (n, i) {
                             var a = e(i)
                                 , r = (a.prop("type"), a.prop("name"))
                                 , s = a.val()
                                 , c = a.is(d.checkbox)
                                 , l = a.is(d.radio)
                                 , u = -1 !== r.indexOf("[]")
                                 , f = c ? a.is(":checked") : !1;
                             if (r)
                                 if (u)
                                     if (r = r.replace("[]", ""), o[r] || (o[r] = []), c) {
                                         if (!f) return t.debug("Omitted unchecked checkbox", a), !0;
                                         o[r].push(s)
                                     }
                                     else o[r].push(s);
                             else if (l) f && (o[r] = s);
                             else if (c) {
                                 if (!f) return t.debug("Omitted unchecked checkbox", a), !0;
                                 o[r] = !0
                             }
                             else o[r] = s
                         }), o
                     }
                 }
                 , has: {
                     field: function (e) {
                         return t.verbose("Checking for existence of a field with identifier", e), l.filter("#" + e).length > 0 ? !0 : l.filter('[name="' + e + '"]').length > 0 ? !0 : l.filter("[data-" + u.validate + '="' + e + '"]').length > 0 ? !0 : !1
                     }
                 }
                 , add: {
                     prompt: function (n, a) {
                         var r = t.get.field(n)
                             , c = r.closest(w)
                             , l = c.children(d.prompt)
                             , u = 0 !== l.length;
                         a = "string" == typeof a ? [a] : a, t.verbose("Adding field error state", n), c.addClass(f.error), s.inline && (u || (l = s.templates.prompt(a), l.appendTo(c)), l.html(a[0]), u ? t.verbose("Inline errors are disabled, no inline error added", n) : s.transition && e.fn.transition !== i && o.transition("is supported") ? (t.verbose("Displaying error with css transition", s.transition), l.transition(s.transition + " in", s.duration)) : (t.verbose("Displaying error with fallback javascript animation"), l.fadeIn(s.duration)))
                     }
                     , errors: function (e) {
                         t.debug("Adding form error messages", e), C.html(s.templates.error(e))
                     }
                 }
                 , remove: {
                     prompt: function (n) {
                         var a = t.get.field(n.identifier)
                             , r = a.closest(w)
                             , c = r.children(d.prompt);
                         r.removeClass(f.error), s.inline && c.is(":visible") && (t.verbose("Removing prompt for field", n), s.transition && e.fn.transition !== i && o.transition("is supported") ? c.transition(s.transition + " out", s.duration, function () {
                             c.remove()
                         }) : c.fadeOut(s.duration, function () {
                             c.remove()
                         }))
                     }
                 }
                 , set: {
                     success: function () {
                         o.removeClass(f.error).addClass(f.success)
                     }
                     , defaults: function () {
                         l.each(function () {
                             var t = e(this)
                                 , n = t.filter(d.checkbox).length > 0
                                 , i = n ? t.is(":checked") : t.val();
                             t.data(u.defaultValue, i)
                         })
                     }
                     , error: function () {
                         o.removeClass(f.success).addClass(f.error)
                     }
                     , value: function (e, n) {
                         var i = {};
                         return i[e] = n, t.set.values.call(E, i)
                     }
                     , values: function (n) {
                         e.isEmptyObject(n) || (e.each(n, function (n, i) {
                             var o, a = t.get.field(n)
                                 , r = a.parent()
                                 , s = e.isArray(i)
                                 , c = r.is(d.uiCheckbox)
                                 , l = r.is(d.uiDropdown)
                                 , u = a.is(d.radio) && c
                                 , f = a.length > 0;
                             f && (s && c ? (t.verbose("Selecting multiple", i, a), r.checkbox("uncheck"), e.each(i, function (e, t) {
                                 o = a.filter('[value="' + t + '"]'), r = o.parent(), o.length > 0 && r.checkbox("check")
                             })) : u ? (t.verbose("Selecting radio value", i, a), a.filter('[value="' + i + '"]').parent(d.uiCheckbox).checkbox("check")) : c ? (t.verbose("Setting checkbox value", i, r), r.checkbox(i === !0 ? "check" : "uncheck")) : l ? (t.verbose("Setting dropdown value", i, r), r.dropdown("set selected", i)) : (t.verbose("Setting field value", i, a), a.val(i)))
                         }), t.validate.form())
                     }
                 }
                 , validate: {
                     form: function (n) {
                         var a = !0;
                         return P ? !1 : (A = [], e.each(c, function (e, n) {
                             t.validate.field(n) || (a = !1)
                         }), a ? (t.debug("Form has no validation errors, submitting"), t.set.success(), s.onSuccess.call(E, n)) : (t.debug("Form has errors"), t.set.error(), s.inline || t.add.errors(A), o.data("moduleApi") !== i && n.stopImmediatePropagation(), s.onFailure.call(E, A)))
                     }
                     , field: function (n) {
                         var o = t.get.field(n.identifier)
                             , a = !0
                             , r = [];
                         return o.prop("disabled") ? (t.debug("Field is disabled. Skipping", n.identifier), a = !0) : n.optional && "" === e.trim(o.val()) ? (t.debug("Field is optional and empty. Skipping", n.identifier), a = !0) : n.rules !== i && e.each(n.rules, function (e, i) {
                             t.has.field(n.identifier) && !t.validate.rule(n, i) && (t.debug("Field is invalid", n.identifier, i.type), r.push(i.prompt), a = !1)
                         }), a ? (t.remove.prompt(n, r), s.onValid.call(o), !0) : (A = A.concat(r), t.add.prompt(n.identifier, r), s.onInvalid.call(o, r), !1)
                     }
                     , rule: function (n, o) {
                         var a, r, c = t.get.field(n.identifier)
                             , l = o.type
                             , u = e.trim(c.val() + "")
                             , d = /\[(.*)\]/i
                             , f = d.exec(l)
                             , m = !0;
                         return f !== i && null !== f ? (a = "" + f[1], r = l.replace(f[0], ""), m = s.rules[r].call(E, u, a)) : m = s.rules[l].call(c, u), m
                     }
                 }
                 , setting: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, s, t);
                     else {
                         if (n === i) return s[t];
                         s[t] = n
                     }
                 }
                 , internal: function (n, o) {
                     if (e.isPlainObject(n)) e.extend(!0, t, n);
                     else {
                         if (o === i) return t[n];
                         t[n] = o
                     }
                 }
                 , debug: function () {
                     s.debug && (s.performance ? t.performance.log(arguments) : (t.debug = Function.prototype.bind.call(console.info, console, s.name + ":"), t.debug.apply(console, arguments)))
                 }
                 , verbose: function () {
                     s.verbose && s.debug && (s.performance ? t.performance.log(arguments) : (t.verbose = Function.prototype.bind.call(console.info, console, s.name + ":"), t.verbose.apply(console, arguments)))
                 }
                 , error: function () {
                     t.error = Function.prototype.bind.call(console.error, console, s.name + ":"), t.error.apply(console, arguments)
                 }
                 , performance: {
                     log: function (e) {
                         var n, i, o;
                         s.performance && (n = (new Date).getTime(), o = v || n, i = n - o, v = n, h.push({
                             Name: e[0]
                             , Arguments: [].slice.call(e, 1) || ""
                             , Element: E
                             , "Execution Time": i
                         })), clearTimeout(t.performance.timer), t.performance.timer = setTimeout(t.performance.display, 100)
                     }
                     , display: function () {
                         var n = s.name + ":"
                             , o = 0;
                         v = !1, clearTimeout(t.performance.timer), e.each(h, function (e, t) {
                             o += t["Execution Time"]
                         }), n += " " + o + "ms", p && (n += " '" + p + "'"), r.length > 1 && (n += " (" + r.length + ")"), (console.group !== i || console.table !== i) && h.length > 0 && (console.groupCollapsed(n), console.table ? console.table(h) : e.each(h, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), h = []
                     }
                 }
                 , invoke: function (t, n, o) {
                     var r, s, c, l = F;
                     return n = n || x, o = E || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : !1;
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                 }
             }, y ? (F === i && t.initialize(), t.invoke(b)) : (F !== i && F.invoke("destroy"), t.initialize())
         }), a !== i ? a : this
     }, e.fn.form.settings = {
         name: "Form"
         , namespace: "form"
         , debug: !1
         , verbose: !0
         , performance: !0
         , keyboardShortcuts: !0
         , on: "submit"
         , inline: !1
         , delay: 200
         , revalidate: !0
         , transition: "scale"
         , duration: 200
         , onValid: function () {}
         , onInvalid: function () {}
         , onSuccess: function () {
             return !0
         }
         , onFailure: function () {
             return !1
         }
         , metadata: {
             defaultValue: "default"
             , validate: "validate"
         }
         , selector: {
             checkbox: 'input[type="checkbox"], input[type="radio"]'
             , clear: ".clear"
             , field: "input, textarea, select"
             , group: ".field"
             , input: "input"
             , message: ".error.message"
             , prompt: ".prompt.label"
             , radio: 'input[type="radio"]'
             , reset: ".reset"
             , submit: ".submit"
             , uiCheckbox: ".ui.checkbox"
             , uiDropdown: ".ui.dropdown"
         }
         , className: {
             error: "error"
             , label: "ui prompt label"
             , pressed: "down"
             , success: "success"
         }
         , error: {
             method: "The method you called is not defined."
         }
         , templates: {
             error: function (t) {
                 var n = '<ul class="list">';
                 return e.each(t, function (e, t) {
                     n += "<li>" + t + "</li>"
                 }), n += "</ul>", e(n)
             }
             , prompt: function (t) {
                 return e("<div/>").addClass("ui red pointing prompt label").html(t[0])
             }
         }
         , rules: {
             checked: function () {
                 return e(this).filter(":checked").length > 0
             }
             , contains: function (e, t) {
                 return t = t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), -1 !== e.search(new RegExp(t, "i"))
             }
             , containsExactly: function (e, t) {
                 return t = t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), -1 !== e.search(new RegExp(t))
             }
             , email: function (e) {
                 var t = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", "i");
                 return t.test(e)
             }
             , empty: function (e) {
                 return !(e === i || "" === e)
             }
             , integer: function (e, t) {
                 var n, o, a, r = /^\-?\d+$/;
                 return t === i || "" === t || ".." === t || (-1 == t.indexOf("..") ? r.test(t) && (n = o = t - 0) : (a = t.split("..", 2), r.test(a[0]) && (n = a[0] - 0), r.test(a[1]) && (o = a[1] - 0))), r.test(e) && (n === i || e >= n) && (o === i || o >= e)
             }
             , is: function (e, t) {
                 return t = "string" == typeof t ? t.toLowerCase() : t, e = "string" == typeof e ? e.toLowerCase() : e, e == t
             }
             , isExactly: function (e, t) {
                 return e == t
             }
             , length: function (e, t) {
                 return e !== i ? e.length >= t : !1
             }
             , match: function (t, n) {
                 var o, a = e(this);
                 return a.find("#" + n).length > 0 ? o = a.find("#" + n).val() : a.find('[name="' + n + '"]').length > 0 ? o = a.find('[name="' + n + '"]').val() : a.find('[data-validate="' + n + '"]').length > 0 && (o = a.find('[data-validate="' + n + '"]').val()), o !== i ? t.toString() == o.toString() : !1
             }
             , maxLength: function (e, t) {
                 return e !== i ? e.length <= t : !1
             }
             , not: function (e, t) {
                 return e = "string" == typeof e ? e.toLowerCase() : e, t = "string" == typeof t ? t.toLowerCase() : t, e != t
             }
             , notExactly: function (e, t) {
                 return e != t
             }
             , url: function (e) {
                 var t = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
                 return t.test(e)
             }
         }
     }
 }(jQuery, window, document)
 , function (e, t, n, i) {
     "use strict";
     e.fn.state = function (t) {
         var o, a = e(this)
             , r = a.selector || ""
             , s = ("ontouchstart" in n.documentElement, (new Date).getTime())
             , c = []
             , l = arguments[0]
             , u = "string" == typeof l
             , d = [].slice.call(arguments, 1);
         return a.each(function () {
             var n, f = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.state.settings, t) : e.extend({}, e.fn.state.settings)
                 , m = f.error
                 , g = f.metadata
                 , p = f.className
                 , v = f.namespace
                 , h = f.states
                 , b = f.text
                 , y = "." + v
                 , x = v + "-module"
                 , w = e(this)
                 , C = this
                 , k = w.data(x);
             n = {
                 initialize: function () {
                     n.verbose("Initializing module"), f.automatic && n.add.defaults(), f.context && "" !== r ? e(f.context).on(r, "mouseenter" + y, n.change.text).on(r, "mouseleave" + y, n.reset.text).on(r, "click" + y, n.toggle.state) : w.on("mouseenter" + y, n.change.text).on("mouseleave" + y, n.reset.text).on("click" + y, n.toggle.state), n.instantiate()
                 }
                 , instantiate: function () {
                     n.verbose("Storing instance of module", n), k = n, w.data(x, n)
                 }
                 , destroy: function () {
                     n.verbose("Destroying previous module", k), w.off(y).removeData(x)
                 }
                 , refresh: function () {
                     n.verbose("Refreshing selector cache"), w = e(C)
                 }
                 , add: {
                     defaults: function () {
                         var o = t && e.isPlainObject(t.states) ? t.states : {};
                         e.each(f.defaults, function (t, a) {
                             n.is[t] !== i && n.is[t]() && (n.verbose("Adding default states", t, C), e.extend(f.states, a, o))
                         })
                     }
                 }
                 , is: {
                     active: function () {
                         return w.hasClass(p.active)
                     }
                     , loading: function () {
                         return w.hasClass(p.loading)
                     }
                     , inactive: function () {
                         return !w.hasClass(p.active)
                     }
                     , state: function (e) {
                         return p[e] === i ? !1 : w.hasClass(p[e])
                     }
                     , enabled: function () {
                         return !w.is(f.filter.active)
                     }
                     , disabled: function () {
                         return w.is(f.filter.active)
                     }
                     , textEnabled: function () {
                         return !w.is(f.filter.text)
                     }
                     , button: function () {
                         return w.is(".button:not(a, .submit)")
                     }
                     , input: function () {
                         return w.is("input")
                     }
                     , progress: function () {
                         return w.is(".ui.progress")
                     }
                 }
                 , allow: function (e) {
                     n.debug("Now allowing state", e), h[e] = !0
                 }
                 , disallow: function (e) {
                     n.debug("No longer allowing", e), h[e] = !1
                 }
                 , allows: function (e) {
                     return h[e] || !1
                 }
                 , enable: function () {
                     w.removeClass(p.disabled)
                 }
                 , disable: function () {
                     w.addClass(p.disabled)
                 }
                 , setState: function (e) {
                     n.allows(e) && w.addClass(p[e])
                 }
                 , removeState: function (e) {
                     n.allows(e) && w.removeClass(p[e])
                 }
                 , toggle: {
                     state: function () {
                         var t, o;
                         if (n.allows("active") && n.is.enabled()) {
                             if (n.refresh(), e.fn.api !== i)
                                 if (t = w.api("get request"), o = w.api("was cancelled")) n.debug("API Request cancelled by beforesend"), f.activateTest = function () {
                                     return !1
                                 }, f.deactivateTest = function () {
                                     return !1
                                 };
                                 else if (t) return void n.listenTo(t);
                             n.change.state()
                         }
                     }
                 }
                 , listenTo: function (t) {
                     n.debug("API request detected, waiting for state signal", t), t && (b.loading && n.update.text(b.loading), e.when(t).then(function () {
                         "resolved" == t.state() ? (n.debug("API request succeeded"), f.activateTest = function () {
                             return !0
                         }, f.deactivateTest = function () {
                             return !0
                         }) : (n.debug("API request failed"), f.activateTest = function () {
                             return !1
                         }, f.deactivateTest = function () {
                             return !1
                         }), n.change.state()
                     }))
                 }
                 , change: {
                     state: function () {
                         n.debug("Determining state change direction"), n.is.inactive() ? n.activate() : n.deactivate(), f.sync && n.sync(), f.onChange.call(C)
                     }
                     , text: function () {
                         n.is.textEnabled() && (n.is.disabled() ? (n.verbose("Changing text to disabled text", b.hover), n.update.text(b.disabled)) : n.is.active() ? b.hover ? (n.verbose("Changing text to hover text", b.hover), n.update.text(b.hover)) : b.deactivate && (n.verbose("Changing text to deactivating text", b.deactivate), n.update.text(b.deactivate)) : b.hover ? (n.verbose("Changing text to hover text", b.hover), n.update.text(b.hover)) : b.activate && (n.verbose("Changing text to activating text", b.activate), n.update.text(b.activate)))
                     }
                 }
                 , activate: function () {
                     f.activateTest.call(C) && (n.debug("Setting state to active"), w.addClass(p.active), n.update.text(b.active), f.onActivate.call(C))
                 }
                 , deactivate: function () {
                     f.deactivateTest.call(C) && (n.debug("Setting state to inactive"), w.removeClass(p.active), n.update.text(b.inactive), f.onDeactivate.call(C))
                 }
                 , sync: function () {
                     n.verbose("Syncing other buttons to current state"), a.not(w).state(n.is.active() ? "activate" : "deactivate")
                 }
                 , get: {
                     text: function () {
                         return f.selector.text ? w.find(f.selector.text).text() : w.html()
                     }
                     , textFor: function (e) {
                         return b[e] || !1
                     }
                 }
                 , flash: {
                     text: function (e, t, i) {
                         var o = n.get.text();
                         n.debug("Flashing text message", e, t), e = e || f.text.flash, t = t || f.flashDuration, i = i || function () {}, n.update.text(e), setTimeout(function () {
                             n.update.text(o), i.call(C)
                         }, t)
                     }
                 }
                 , reset: {
                     text: function () {
                         var e = b.active || w.data(g.storedText)
                             , t = b.inactive || w.data(g.storedText);
                         n.is.textEnabled() && (n.is.active() && e ? (n.verbose("Resetting active text", e), n.update.text(e)) : t && (n.verbose("Resetting inactive text", e), n.update.text(t)))
                     }
                 }
                 , update: {
                     text: function (e) {
                         var t = n.get.text();
                         e && e !== t ? (n.debug("Updating text", e), f.selector.text ? w.data(g.storedText, e).find(f.selector.text).text(e) : w.data(g.storedText, e).html(e)) : n.debug("Text is already set, ignoring update", e)
                     }
                 }
                 , setting: function (t, o) {
                     if (n.debug("Changing setting", t, o), e.isPlainObject(t)) e.extend(!0, f, t);
                     else {
                         if (o === i) return f[t];
                         f[t] = o
                     }
                 }
                 , internal: function (t, o) {
                     if (e.isPlainObject(t)) e.extend(!0, n, t);
                     else {
                         if (o === i) return n[t];
                         n[t] = o
                     }
                 }
                 , debug: function () {
                     f.debug && (f.performance ? n.performance.log(arguments) : (n.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), n.debug.apply(console, arguments)))
                 }
                 , verbose: function () {
                     f.verbose && f.debug && (f.performance ? n.performance.log(arguments) : (n.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), n.verbose.apply(console, arguments)))
                 }
                 , error: function () {
                     n.error = Function.prototype.bind.call(console.error, console, f.name + ":"), n.error.apply(console, arguments)
                 }
                 , performance: {
                     log: function (e) {
                         var t, i, o;
                         f.performance && (t = (new Date).getTime(), o = s || t, i = t - o, s = t, c.push({
                             Name: e[0]
                             , Arguments: [].slice.call(e, 1) || ""
                             , Element: C
                             , "Execution Time": i
                         })), clearTimeout(n.performance.timer), n.performance.timer = setTimeout(n.performance.display, 100)
                     }
                     , display: function () {
                         var t = f.name + ":"
                             , o = 0;
                         s = !1, clearTimeout(n.performance.timer), e.each(c, function (e, t) {
                             o += t["Execution Time"]
                         }), t += " " + o + "ms", r && (t += " '" + r + "'"), (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), c = []
                     }
                 }
                 , invoke: function (t, a, r) {
                     var s, c, l, u = k;
                     return a = a || d, r = C || r, "string" == typeof t && u !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function (o, a) {
                         var r = o != s ? a + t[o + 1].charAt(0).toUpperCase() + t[o + 1].slice(1) : t;
                         if (e.isPlainObject(u[r]) && o != s) u = u[r];
                         else {
                             if (u[r] !== i) return c = u[r], !1;
                             if (!e.isPlainObject(u[a]) || o == s) return u[a] !== i ? (c = u[a], !1) : (n.error(m.method, t), !1);
                             u = u[a]
                         }
                     })), e.isFunction(c) ? l = c.apply(r, a) : c !== i && (l = c), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), c
                 }
             }, u ? (k === i && n.initialize(), n.invoke(l)) : (k !== i && k.invoke("destroy"), n.initialize())
         }), o !== i ? o : this
     }, e.fn.state.settings = {
         name: "State"
         , debug: !1
         , verbose: !0
         , namespace: "state"
         , performance: !0
         , onActivate: function () {}
         , onDeactivate: function () {}
         , onChange: function () {}
         , activateTest: function () {
             return !0
         }
         , deactivateTest: function () {
             return !0
         }
         , automatic: !0
         , sync: !1
         , flashDuration: 1e3
         , filter: {
             text: ".loading, .disabled"
             , active: ".disabled"
         }
         , context: !1
         , error: {
             beforeSend: "The before send function has cancelled state change"
             , method: "The method you called is not defined."
         }
         , metadata: {
             promise: "promise"
             , storedText: "stored-text"
         }
         , className: {
             active: "active"
             , disabled: "disabled"
             , error: "error"
             , loading: "loading"
             , success: "success"
             , warning: "warning"
         }
         , selector: {
             text: !1
         }
         , defaults: {
             input: {
                 disabled: !0
                 , loading: !0
                 , active: !0
             }
             , button: {
                 disabled: !0
                 , loading: !0
                 , active: !0
             }
             , progress: {
                 active: !0
                 , success: !0
                 , warning: !0
                 , error: !0
             }
         }
         , states: {
             active: !0
             , disabled: !0
             , error: !0
             , loading: !0
             , success: !0
             , warning: !0
         }
         , text: {
             disabled: !1
             , flash: !1
             , hover: !1
             , active: !1
             , inactive: !1
             , activate: !1
             , deactivate: !1
         }
     }
 }(jQuery, window, document)
 , function (e, t, n, i) {
     "use strict";
     e.fn.visibility = function (o) {
         var a, r = e(this)
             , s = r.selector || ""
             , c = (new Date).getTime()
             , l = []
             , u = arguments[0]
             , d = "string" == typeof u
             , f = [].slice.call(arguments, 1);
         return r.each(function () {
             var r, m, g = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.visibility.settings, o) : e.extend({}, e.fn.visibility.settings)
                 , p = g.className
                 , v = g.namespace
                 , h = g.error
                 , b = "." + v
                 , y = "module-" + v
                 , x = e(t)
                 , w = e(this)
                 , C = e(g.context)
                 , k = w.find("img")
                 , T = (w.selector || "", w.data(y))
                 , S = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
                     setTimeout(e, 0)
                 }
                 , A = this;
             m = {
                 initialize: function () {
                     m.debug("Initializing", g), m.setup.cache(), m.save.position(), m.should.trackChanges() && (m.bind.events(), "image" == g.type && m.setup.image(), "fixed" == g.type && m.setup.fixed()), g.initialCheck && m.checkVisibility(), g.observeChanges && m.observeChanges(), m.instantiate()
                 }
                 , instantiate: function () {
                     m.debug("Storing instance", m), w.data(y, m), T = m
                 }
                 , destroy: function () {
                     m.verbose("Destroying previous module"), w.off(b).removeData(y), x.off("resize" + b, m.event.refresh), C.off("scroll" + b, m.event.scroll)
                 }
                 , observeChanges: function () {
                     C[0];
                     "MutationObserver" in t && (r = new MutationObserver(function () {
                         m.verbose("DOM tree modified, updating visibility calculations"), m.refresh()
                     }), r.observe(A, {
                         childList: !0
                         , subtree: !0
                     }), m.debug("Setting up mutation observer", r))
                 }
                 , bind: {
                     events: function () {
                         m.verbose("Binding visibility events to scroll and resize"), x.on("resize" + b, m.event.refresh), C.on("scroll" + b, m.event.scroll), k.length > 0 && m.bind.imageLoad()
                     }
                     , imageLoad: function () {
                         var t = k.length
                             , i = t
                             , o = 0
                             , a = []
                             , r = []
                             , s = n.createElement("img")
                             , c = function () {
                                 o++, o >= t && (m.debug("Images finished loading inside element, refreshing position"), m.refresh())
                             };
                         for (k.each(function () {
                                 a.push(e(this).attr("src"))
                             }); i--;) s = n.createElement("img"), s.onload = c, s.onerror = c, s.src = a[i], r.push(s)
                     }
                 }
                 , event: {
                     refresh: function () {
                         S(m.refresh)
                     }
                     , scroll: function () {
                         m.verbose("Scroll position changed"), g.throttle ? (clearTimeout(m.timer), m.timer = setTimeout(function () {
                             m.checkVisibility()
                         }, g.throttle)) : S(function () {
                             m.checkVisibility()
                         })
                     }
                 }
                 , should: {
                     trackChanges: function () {
                         return d && f.length > 0 ? (m.debug("One time query, no need to bind events"), !1) : (m.debug("Callbacks being attached"), !0)
                     }
                 }
                 , setup: {
                     cache: function () {
                         m.cache = {
                             occurred: {}
                             , screen: {}
                             , element: {}
                         }
                     }
                     , image: function () {
                         var e = w.data("src");
                         e && (m.verbose("Lazy loading image", e), g.observeChanges = !1, m.topVisible(function () {
                             m.debug("Image top visible", A), m.precache(e, function () {
                                 m.set.image(e), g.onTopVisible = !1
                             })
                         }))
                     }
                     , fixed: function () {
                         m.verbose("Setting up fixed on element pass"), g.once = !1, g.onTopPassed = function () {
                             w.addClass(p.fixed).css({
                                 top: g.offset + "px"
                             }), g.transition && e.fn.transition !== i && w.transition(g.transition, g.duration)
                         }, g.onTopPassedReverse = function () {
                             w.removeClass(p.fixed).css({
                                 position: ""
                                 , top: ""
                             })
                         }
                     }
                 }
                 , set: {
                     image: function (t) {
                         var n = m.cache.screen.bottom < m.cache.element.top;
                         w.attr("src", t), n ? (m.verbose("Image outside browser, no show animation"), w.show()) : g.transition ? e.fn.transition !== i ? w.transition(g.transition, g.duration) : w.fadeIn(g.duration) : w.show()
                     }
                 }
                 , is: {
                     visible: function () {
                         return m.cache && m.cache.element ? m.cache.element.width > 0 : !1
                     }
                 }
                 , refresh: function () {
                     m.debug("Refreshing constants (element width/height)"), m.reset(), m.save.position(), m.checkVisibility(), g.onRefresh.call(A)
                 }
                 , reset: function () {
                     m.verbose("Reseting all cached values"), e.isPlainObject(m.cache) && (m.cache.screen = {}, m.cache.element = {})
                 }
                 , checkVisibility: function () {
                     m.verbose("Checking visibility of element", m.cache.element), m.is.visible() && (m.save.calculations(), m.passed(), m.passingReverse(), m.topVisibleReverse(), m.bottomVisibleReverse(), m.topPassedReverse(), m.bottomPassedReverse(), m.passing(), m.topVisible(), m.bottomVisible(), m.topPassed(), m.bottomPassed(), g.onUpdate && g.onUpdate.call(A, m.get.elementCalculations()))
                 }
                 , passed: function (t, n) {
                     var o = m.get.elementCalculations();
                     if (t !== i && n !== i) g.onPassed[t] = n;
                     else {
                         if (t !== i) return m.get.pixelsPassed(t) > o.pixelsPassed;
                         o.passing && e.each(g.onPassed, function (e, t) {
                             o.bottomVisible || o.pixelsPassed > m.get.pixelsPassed(e) ? m.execute(t, e) : g.once || m.remove.occurred(t)
                         })
                     }
                 }
                 , passing: function (e) {
                     var t = m.get.elementCalculations()
                         , n = e || g.onPassing
                         , o = "passing";
                     return e && (m.debug("Adding callback for passing", e), g.onPassing = e), t.passing ? m.execute(n, o) : g.once || m.remove.occurred(o), e !== i ? t.passing : void 0
                 }
                 , topVisible: function (e) {
                     var t = m.get.elementCalculations()
                         , n = e || g.onTopVisible
                         , o = "topVisible";
                     return e && (m.debug("Adding callback for top visible", e), g.onTopVisible = e), t.topVisible ? m.execute(n, o) : g.once || m.remove.occurred(o), e === i ? t.topVisible : void 0
                 }
                 , bottomVisible: function (e) {
                     var t = m.get.elementCalculations()
                         , n = e || g.onBottomVisible
                         , o = "bottomVisible";
                     return e && (m.debug("Adding callback for bottom visible", e), g.onBottomVisible = e), t.bottomVisible ? m.execute(n, o) : g.once || m.remove.occurred(o), e === i ? t.bottomVisible : void 0
                 }
                 , topPassed: function (e) {
                     var t = m.get.elementCalculations()
                         , n = e || g.onTopPassed
                         , o = "topPassed";
                     return e && (m.debug("Adding callback for top passed", e), g.onTopPassed = e), t.topPassed ? m.execute(n, o) : g.once || m.remove.occurred(o), e === i ? t.topPassed : void 0
                 }
                 , bottomPassed: function (e) {
                     var t = m.get.elementCalculations()
                         , n = e || g.onBottomPassed
                         , o = "bottomPassed";
                     return e && (m.debug("Adding callback for bottom passed", e), g.onBottomPassed = e), t.bottomPassed ? m.execute(n, o) : g.once || m.remove.occurred(o), e === i ? t.bottomPassed : void 0
                 }
                 , passingReverse: function (e) {
                     var t = m.get.elementCalculations()
                         , n = e || g.onPassingReverse
                         , o = "passingReverse";
                     return e && (m.debug("Adding callback for passing reverse", e), g.onPassingReverse = e), t.passing ? g.once || m.remove.occurred(o) : m.get.occurred("passing") && m.execute(n, o), e !== i ? !t.passing : void 0
                 }
                 , topVisibleReverse: function (e) {
                     var t = m.get.elementCalculations()
                         , n = e || g.onTopVisibleReverse
                         , o = "topVisibleReverse";
                     return e && (m.debug("Adding callback for top visible reverse", e), g.onTopVisibleReverse = e), t.topVisible ? g.once || m.remove.occurred(o) : m.get.occurred("topVisible") && m.execute(n, o), e === i ? !t.topVisible : void 0
                 }
                 , bottomVisibleReverse: function (e) {
                     var t = m.get.elementCalculations()
                         , n = e || g.onBottomVisibleReverse
                         , o = "bottomVisibleReverse";
                     return e && (m.debug("Adding callback for bottom visible reverse", e), g.onBottomVisibleReverse = e), t.bottomVisible ? g.once || m.remove.occurred(o) : m.get.occurred("bottomVisible") && m.execute(n, o), e === i ? !t.bottomVisible : void 0
                 }
                 , topPassedReverse: function (e) {
                     var t = m.get.elementCalculations()
                         , n = e || g.onTopPassedReverse
                         , o = "topPassedReverse";
                     return e && (m.debug("Adding callback for top passed reverse", e), g.onTopPassedReverse = e), t.topPassed ? g.once || m.remove.occurred(o) : m.get.occurred("topPassed") && m.execute(n, o), e === i ? !t.onTopPassed : void 0
                 }
                 , bottomPassedReverse: function (e) {
                     var t = m.get.elementCalculations()
                         , n = e || g.onBottomPassedReverse
                         , o = "bottomPassedReverse";
                     return e && (m.debug("Adding callback for bottom passed reverse", e), g.onBottomPassedReverse = e), t.bottomPassed ? g.once || m.remove.occurred(o) : m.get.occurred("bottomPassed") && m.execute(n, o), e === i ? !t.bottomPassed : void 0
                 }
                 , execute: function (e, t) {
                     var n = m.get.elementCalculations()
                         , i = m.get.screenCalculations();
                     e = e || !1, e && (g.continuous ? (m.debug("Callback being called continuously", t, n), e.call(A, n, i)) : m.get.occurred(t) || (m.debug("Conditions met", t, n), e.call(A, n, i))), m.save.occurred(t)
                 }
                 , remove: {
                     occurred: function (e) {
                         e ? m.cache.occurred[e] !== i && m.cache.occurred[e] === !0 && (m.debug("Callback can now be called again", e), m.cache.occurred[e] = !1) : m.cache.occurred = {}
                     }
                 }
                 , save: {
                     calculations: function () {
                         m.verbose("Saving all calculations necessary to determine positioning"), m.save.scroll(), m.save.direction(), m.save.screenCalculations(), m.save.elementCalculations()
                     }
                     , occurred: function (e) {
                         e && (m.cache.occurred[e] === i || m.cache.occurred[e] !== !0) && (m.verbose("Saving callback occurred", e), m.cache.occurred[e] = !0)
                     }
                     , scroll: function () {
                         m.cache.scroll = C.scrollTop() + g.offset
                     }
                     , direction: function () {
                         var e, t = m.get.scroll()
                             , n = m.get.lastScroll();
                         return e = t > n && n ? "down" : n > t && n ? "up" : "static", m.cache.direction = e, m.cache.direction
                     }
                     , elementPosition: function () {
                         var e = m.cache.element
                             , t = m.get.screenSize();
                         return m.verbose("Saving element position"), e.fits = e.height < t.height, e.offset = w.offset(), e.width = w.outerWidth(), e.height = w.outerHeight(), m.cache.element = e, e
                     }
                     , elementCalculations: function () {
                         var e = m.get.screenCalculations()
                             , t = m.get.elementPosition();
                         return g.includeMargin ? (t.margin = {}, t.margin.top = parseInt(w.css("margin-top"), 10), t.margin.bottom = parseInt(w.css("margin-bottom"), 10), t.top = t.offset.top - t.margin.top, t.bottom = t.offset.top + t.height + t.margin.bottom) : (t.top = t.offset.top, t.bottom = t.offset.top + t.height), t.topVisible = e.bottom >= t.top, t.topPassed = e.top >= t.top, t.bottomVisible = e.bottom >= t.bottom, t.bottomPassed = e.top >= t.bottom, t.pixelsPassed = 0, t.percentagePassed = 0, t.visible = t.topVisible || t.bottomVisible, t.passing = t.topPassed && !t.bottomPassed, t.hidden = !t.topVisible && !t.bottomVisible, t.passing && (t.pixelsPassed = e.top - t.top, t.percentagePassed = (e.top - t.top) / t.height), m.cache.element = t, m.verbose("Updated element calculations", t), t
                     }
                     , screenCalculations: function () {
                         var e = m.get.scroll();
                         return m.save.direction(), m.cache.screen.top = e, m.cache.screen.bottom = e + m.cache.screen.height, m.cache.screen
                     }
                     , screenSize: function () {
                         m.verbose("Saving window position"), m.cache.screen = {
                             height: C.height()
                         }
                     }
                     , position: function () {
                         m.save.screenSize(), m.save.elementPosition()
                     }
                 }
                 , get: {
                     pixelsPassed: function (e) {
                         var t = m.get.elementCalculations();
                         return e.search("%") > -1 ? t.height * (parseInt(e, 10) / 100) : parseInt(e, 10)
                     }
                     , occurred: function (e) {
                         return m.cache.occurred !== i ? m.cache.occurred[e] || !1 : !1
                     }
                     , direction: function () {
                         return m.cache.direction === i && m.save.direction(), m.cache.direction
                     }
                     , elementPosition: function () {
                         return m.cache.element === i && m.save.elementPosition(), m.cache.element
                     }
                     , elementCalculations: function () {
                         return m.cache.element === i && m.save.elementCalculations(), m.cache.element
                     }
                     , screenCalculations: function () {
                         return m.cache.screen === i && m.save.screenCalculations(), m.cache.screen
                     }
                     , screenSize: function () {
                         return m.cache.screen === i && m.save.screenSize(), m.cache.screen
                     }
                     , scroll: function () {
                         return m.cache.scroll === i && m.save.scroll(), m.cache.scroll
                     }
                     , lastScroll: function () {
                         return m.cache.screen === i ? (m.debug("First scroll event, no last scroll could be found"), !1) : m.cache.screen.top
                     }
                 }
                 , setting: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, g, t);
                     else {
                         if (n === i) return g[t];
                         g[t] = n
                     }
                 }
                 , internal: function (t, n) {
                     if (e.isPlainObject(t)) e.extend(!0, m, t);
                     else {
                         if (n === i) return m[t];
                         m[t] = n
                     }
                 }
                 , debug: function () {
                     g.debug && (g.performance ? m.performance.log(arguments) : (m.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), m.debug.apply(console, arguments)))
                 }
                 , verbose: function () {
                     g.verbose && g.debug && (g.performance ? m.performance.log(arguments) : (m.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), m.verbose.apply(console, arguments)))
                 }
                 , error: function () {
                     m.error = Function.prototype.bind.call(console.error, console, g.name + ":"), m.error.apply(console, arguments)
                 }
                 , performance: {
                     log: function (e) {
                         var t, n, i;
                         g.performance && (t = (new Date).getTime(), i = c || t, n = t - i, c = t, l.push({
                             Name: e[0]
                             , Arguments: [].slice.call(e, 1) || ""
                             , Element: A
                             , "Execution Time": n
                         })), clearTimeout(m.performance.timer), m.performance.timer = setTimeout(m.performance.display, 100)
                     }
                     , display: function () {
                         var t = g.name + ":"
                             , n = 0;
                         c = !1, clearTimeout(m.performance.timer), e.each(l, function (e, t) {
                             n += t["Execution Time"]
                         }), t += " " + n + "ms", s && (t += " '" + s + "'"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
                             console.log(t.Name + ": " + t["Execution Time"] + "ms")
                         }), console.groupEnd()), l = []
                     }
                 }
                 , invoke: function (t, n, o) {
                     var r, s, c, l = T;
                     return n = n || f, o = A || o, "string" == typeof t && l !== i && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (n, o) {
                         var a = n != r ? o + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                         if (e.isPlainObject(l[a]) && n != r) l = l[a];
                         else {
                             if (l[a] !== i) return s = l[a], !1;
                             if (!e.isPlainObject(l[o]) || n == r) return l[o] !== i ? (s = l[o], !1) : (m.error(h.method, t), !1);
                             l = l[o]
                         }
                     })), e.isFunction(s) ? c = s.apply(o, n) : s !== i && (c = s), e.isArray(a) ? a.push(c) : a !== i ? a = [a, c] : c !== i && (a = c), s
                 }
             }, d ? (T === i && m.initialize(), m.invoke(u)) : (T !== i && T.invoke("destroy"), m.initialize())
         }), a !== i ? a : this
     }, e.fn.visibility.settings = {
         name: "Visibility"
         , namespace: "visibility"
         , debug: !1
         , verbose: !1
         , performance: !0
         , observeChanges: !0
         , once: !0
         , continuous: !1
         , offset: 0
         , includeMargin: !1
         , context: t
         , initialCheck: !0
         , throttle: !1
         , type: !1
         , transition: !1
         , duration: 1e3
         , onPassed: {}
         , onPassing: !1
         , onTopVisible: !1
         , onBottomVisible: !1
         , onTopPassed: !1
         , onBottomPassed: !1
         , onPassingReverse: !1
         , onTopVisibleReverse: !1
         , onBottomVisibleReverse: !1
         , onTopPassedReverse: !1
         , onBottomPassedReverse: !1
         , onUpdate: !1
         , onRefresh: function () {}
         , className: {
             fixed: "fixed"
         }
         , error: {
             method: "The method you called is not defined."
         }
     }
 }(jQuery, window, document);