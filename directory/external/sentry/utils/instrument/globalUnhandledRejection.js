define(de[2078], he([1, 0, 365, 726]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.addGlobalUnhandledRejectionInstrumentationHandler = E);
			let w = null;
			function E(d) {
				const m = "unhandledrejection";
				(0, i.addHandler)(m, d), (0, i.maybeInstrument)(m, C);
			}
			function C() {
				(w = t.GLOBAL_OBJ.onunhandledrejection),
					(t.GLOBAL_OBJ.onunhandledrejection = function (d) {
						const m = d;
						return (
							(0, i.triggerHandlers)("unhandledrejection", m),
							w && !w.__SENTRY_LOADER__ ? w.apply(this, arguments) : !0
						);
					}),
					(t.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
			}
		}),
		define(
			de[528],
			he([1, 0, 1429, 577, 430, 527, 881]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.fill = d),
					(e.addNonEnumerableProperty = m),
					(e.markFunctionWrapped = r),
					(e.getOriginalFunction = u),
					(e.urlEncode = a),
					(e.convertToPlainObject = h),
					(e.extractExceptionKeysForMessage = g),
					(e.dropUndefinedKeys = p),
					(e.objectify = b);
				function d(s, l, y) {
					if (!(l in s)) return;
					const $ = s[l],
						v = y($);
					typeof v == "function" && r(v, $), (s[l] = v);
				}
				function m(s, l, y) {
					try {
						Object.defineProperty(s, l, {
							value: y,
							writable: !0,
							configurable: !0,
						});
					} catch {
						i.DEBUG_BUILD &&
							E.logger.log(
								`Failed to add non-enumerable property "${l}" to object`,
								s,
							);
					}
				}
				function r(s, l) {
					try {
						const y = l.prototype || {};
						(s.prototype = l.prototype = y), m(s, "__sentry_original__", l);
					} catch {}
				}
				function u(s) {
					return s.__sentry_original__;
				}
				function a(s) {
					return Object.keys(s)
						.map((l) => `${encodeURIComponent(l)}=${encodeURIComponent(s[l])}`)
						.join("&");
				}
				function h(s) {
					if ((0, w.isError)(s))
						return {
							message: s.message,
							name: s.name,
							stack: s.stack,
							...n(s),
						};
					if ((0, w.isEvent)(s)) {
						const l = {
							type: s.type,
							target: c(s.target),
							currentTarget: c(s.currentTarget),
							...n(s),
						};
						return (
							typeof CustomEvent < "u" &&
								(0, w.isInstanceOf)(s, CustomEvent) &&
								(l.detail = s.detail),
							l
						);
					} else return s;
				}
				function c(s) {
					try {
						return (0, w.isElement)(s)
							? (0, t.htmlTreeAsString)(s)
							: Object.prototype.toString.call(s);
					} catch {
						return "<unknown>";
					}
				}
				function n(s) {
					if (typeof s == "object" && s !== null) {
						const l = {};
						for (const y in s)
							Object.prototype.hasOwnProperty.call(s, y) && (l[y] = s[y]);
						return l;
					} else return {};
				}
				function g(s, l = 40) {
					const y = Object.keys(h(s));
					y.sort();
					const $ = y[0];
					if (!$) return "[object has no keys]";
					if ($.length >= l) return (0, C.truncate)($, l);
					for (let v = y.length; v > 0; v--) {
						const S = y.slice(0, v).join(", ");
						if (!(S.length > l))
							return v === y.length ? S : (0, C.truncate)(S, l);
					}
					return "";
				}
				function p(s) {
					return o(s, new Map());
				}
				function o(s, l) {
					if (f(s)) {
						const y = l.get(s);
						if (y !== void 0) return y;
						const $ = {};
						l.set(s, $);
						for (const v of Object.getOwnPropertyNames(s))
							typeof s[v] < "u" && ($[v] = o(s[v], l));
						return $;
					}
					if (Array.isArray(s)) {
						const y = l.get(s);
						if (y !== void 0) return y;
						const $ = [];
						return (
							l.set(s, $),
							s.forEach((v) => {
								$.push(o(v, l));
							}),
							$
						);
					}
					return s;
				}
				function f(s) {
					if (!(0, w.isPlainObject)(s)) return !1;
					try {
						const l = Object.getPrototypeOf(s).constructor.name;
						return !l || l === "Object";
					} catch {
						return !0;
					}
				}
				function b(s) {
					let l;
					switch (!0) {
						case s == null:
							l = new String(s);
							break;
						case typeof s == "symbol" || typeof s == "bigint":
							l = Object(s);
							break;
						case (0, w.isPrimitive)(s):
							l = new s.constructor(s);
							break;
						default:
							l = s;
							break;
					}
					return l;
				}
			},
		),
		