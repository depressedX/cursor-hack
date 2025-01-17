import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/iterator.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/linkedList.js';
define(de[409], he([1, 0, 103, 3, 273]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$TK = e.$SK = void 0),
				(e.$UK = C),
				(e.$VK = m),
				(e.$WK = r),
				(e.$SK = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?");
			function E(a = "") {
				let h = "(-?\\d*\\.\\d\\w*)|([^";
				for (const c of e.$SK) a.indexOf(c) >= 0 || (h += "\\" + c);
				return (h += "\\s]+)"), new RegExp(h, "g");
			}
			e.$TK = E();
			function C(a) {
				let h = e.$TK;
				if (a && a instanceof RegExp)
					if (a.global) h = a;
					else {
						let c = "g";
						a.ignoreCase && (c += "i"),
							a.multiline && (c += "m"),
							a.unicode && (c += "u"),
							(h = new RegExp(a.source, c));
					}
				return (h.lastIndex = 0), h;
			}
			const d = new w.$$c();
			d.unshift({ maxLen: 1e3, windowSize: 15, timeBudget: 150 });
			function m(a) {
				const h = d.unshift(a);
				return (0, i.$Yc)(h);
			}
			function r(a, h, c, n, g) {
				if (((h = C(h)), g || (g = t.Iterable.first(d)), c.length > g.maxLen)) {
					let s = a - g.maxLen / 2;
					return (
						s < 0 ? (s = 0) : (n += s),
						(c = c.substring(s, a + g.maxLen / 2)),
						r(a, h, c, n, g)
					);
				}
				const p = Date.now(),
					o = a - 1 - n;
				let f = -1,
					b = null;
				for (let s = 1; !(Date.now() - p >= g.timeBudget); s++) {
					const l = o - g.windowSize * s;
					h.lastIndex = Math.max(0, l);
					const y = u(h, c, o, f);
					if ((!y && b) || ((b = y), l <= 0)) break;
					f = l;
				}
				if (b) {
					const s = {
						word: b[0],
						startColumn: n + 1 + b.index,
						endColumn: n + 1 + b.index + b[0].length,
					};
					return (h.lastIndex = 0), s;
				}
				return null;
			}
			function u(a, h, c, n) {
				let g;
				for (; (g = a.exec(h)); ) {
					const p = g.index || 0;
					if (p <= c && a.lastIndex >= c) return g;
					if (n > 0 && p > n) return null;
				}
				return null;
			}
		}),
		