define(de[430], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.isError = i),
				(e.isErrorEvent = E),
				(e.isDOMError = C),
				(e.isDOMException = d),
				(e.isString = m),
				(e.isParameterizedString = r),
				(e.isPrimitive = u),
				(e.isPlainObject = a),
				(e.isEvent = h),
				(e.isElement = c),
				(e.isRegExp = n),
				(e.isThenable = g),
				(e.isSyntheticEvent = p),
				(e.isInstanceOf = o),
				(e.isVueViewModel = f);
			const t = Object.prototype.toString;
			function i(b) {
				switch (t.call(b)) {
					case "[object Error]":
					case "[object Exception]":
					case "[object DOMException]":
					case "[object WebAssembly.Exception]":
						return !0;
					default:
						return o(b, Error);
				}
			}
			function w(b, s) {
				return t.call(b) === `[object ${s}]`;
			}
			function E(b) {
				return w(b, "ErrorEvent");
			}
			function C(b) {
				return w(b, "DOMError");
			}
			function d(b) {
				return w(b, "DOMException");
			}
			function m(b) {
				return w(b, "String");
			}
			function r(b) {
				return (
					typeof b == "object" &&
					b !== null &&
					"__sentry_template_string__" in b &&
					"__sentry_template_values__" in b
				);
			}
			function u(b) {
				return (
					b === null || r(b) || (typeof b != "object" && typeof b != "function")
				);
			}
			function a(b) {
				return w(b, "Object");
			}
			function h(b) {
				return typeof Event < "u" && o(b, Event);
			}
			function c(b) {
				return typeof Element < "u" && o(b, Element);
			}
			function n(b) {
				return w(b, "RegExp");
			}
			function g(b) {
				return !!(b && b.then && typeof b.then == "function");
			}
			function p(b) {
				return (
					a(b) &&
					"nativeEvent" in b &&
					"preventDefault" in b &&
					"stopPropagation" in b
				);
			}
			function o(b, s) {
				try {
					return b instanceof s;
				} catch {
					return !1;
				}
			}
			function f(b) {
				return !!(
					typeof b == "object" &&
					b !== null &&
					(b.__isVue || b._isVue)
				);
			}
		}),
		