import '../../../require.js';
import '../../../exports.js';
define(de[725], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.UNKNOWN_FUNCTION = void 0),
				(e.createStackParser = E),
				(e.stackParserFromStackParserOptions = C),
				(e.stripSentryFramesAndReverse = d),
				(e.getFunctionName = u),
				(e.getFramesFromEvent = a);
			const t = 50;
			e.UNKNOWN_FUNCTION = "?";
			const i = /\(error: (.*)\)/,
				w = /captureMessage|captureException/;
			function E(...h) {
				const c = h.sort((n, g) => n[0] - g[0]).map((n) => n[1]);
				return (n, g = 0, p = 0) => {
					const o = [],
						f = n.split(`
`);
					for (let b = g; b < f.length; b++) {
						const s = f[b];
						if (s.length > 1024) continue;
						const l = i.test(s) ? s.replace(i, "$1") : s;
						if (!l.match(/\S*Error: /)) {
							for (const y of c) {
								const $ = y(l);
								if ($) {
									o.push($);
									break;
								}
							}
							if (o.length >= t + p) break;
						}
					}
					return d(o.slice(p));
				};
			}
			function C(h) {
				return Array.isArray(h) ? E(...h) : h;
			}
			function d(h) {
				if (!h.length) return [];
				const c = Array.from(h);
				return (
					/sentryWrapped/.test(m(c).function || "") && c.pop(),
					c.reverse(),
					w.test(m(c).function || "") &&
						(c.pop(), w.test(m(c).function || "") && c.pop()),
					c
						.slice(0, t)
						.map((n) => ({
							...n,
							filename: n.filename || m(c).filename,
							function: n.function || e.UNKNOWN_FUNCTION,
						}))
				);
			}
			function m(h) {
				return h[h.length - 1] || {};
			}
			const r = "<anonymous>";
			function u(h) {
				try {
					return !h || typeof h != "function" ? r : h.name || r;
				} catch {
					return r;
				}
			}
			function a(h) {
				const c = h.exception;
				if (c) {
					const n = [];
					try {
						return (
							c.values.forEach((g) => {
								g.stacktrace.frames && n.push(...g.stacktrace.frames);
							}),
							n
						);
					} catch {
						return;
					}
				}
			}
		}),
		