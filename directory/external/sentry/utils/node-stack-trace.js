import '../../../require.js';
import '../../../exports.js';
import './stacktrace.js';
define(de[1424], he([1, 0, 725]), function (ce /*require*/,
 e /*exports*/,
 t /*stacktrace*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.filenameIsInApp = i),
				(e.node = w),
				(e.nodeStackLineParser = E);
			function i(d, m = !1) {
				return (
					!(
						m ||
						(d &&
							!d.startsWith("/") &&
							!d.match(/^[A-Z]:/) &&
							!d.startsWith(".") &&
							!d.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//))
					) &&
					d !== void 0 &&
					!d.includes("node_modules/")
				);
			}
			function w(d) {
				const m = /^\s*[-]{4,}$/,
					r = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
				return (u) => {
					const a = u.match(r);
					if (a) {
						let h, c, n, g, p;
						if (a[1]) {
							n = a[1];
							let b = n.lastIndexOf(".");
							if ((n[b - 1] === "." && b--, b > 0)) {
								(h = n.slice(0, b)), (c = n.slice(b + 1));
								const s = h.indexOf(".Module");
								s > 0 && ((n = n.slice(s + 1)), (h = h.slice(0, s)));
							}
							g = void 0;
						}
						c && ((g = h), (p = c)),
							c === "<anonymous>" && ((p = void 0), (n = void 0)),
							n === void 0 &&
								((p = p || t.UNKNOWN_FUNCTION), (n = g ? `${g}.${p}` : p));
						let o = a[2] && a[2].startsWith("file://") ? a[2].slice(7) : a[2];
						const f = a[5] === "native";
						return (
							o && o.match(/\/[A-Z]:/) && (o = o.slice(1)),
							!o && a[5] && !f && (o = a[5]),
							{
								filename: o,
								module: d ? d(o) : void 0,
								function: n,
								lineno: C(a[3]),
								colno: C(a[4]),
								in_app: i(o || "", f),
							}
						);
					}
					if (u.match(m)) return { filename: u };
				};
			}
			function E(d) {
				return [90, w(d)];
			}
			function C(d) {
				return parseInt(d || "", 10) || void 0;
			}
		}),
		