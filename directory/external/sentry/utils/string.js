define(de[881], he([1, 0, 430, 2073]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.escapeStringForRegex = void 0),
				(e.truncate = w),
				(e.snipLine = E),
				(e.safeJoin = C),
				(e.isMatchingPattern = d),
				(e.stringMatchesSomePattern = m),
				Object.defineProperty(e, "escapeStringForRegex", {
					enumerable: !0,
					get: function () {
						return i.escapeStringForRegex;
					},
				});
			function w(r, u = 0) {
				return typeof r != "string" || u === 0 || r.length <= u
					? r
					: `${r.slice(0, u)}...`;
			}
			function E(r, u) {
				let a = r;
				const h = a.length;
				if (h <= 150) return a;
				u > h && (u = h);
				let c = Math.max(u - 60, 0);
				c < 5 && (c = 0);
				let n = Math.min(c + 140, h);
				return (
					n > h - 5 && (n = h),
					n === h && (c = Math.max(n - 140, 0)),
					(a = a.slice(c, n)),
					c > 0 && (a = `'{snip} ${a}`),
					n < h && (a += " {snip}"),
					a
				);
			}
			function C(r, u) {
				if (!Array.isArray(r)) return "";
				const a = [];
				for (let h = 0; h < r.length; h++) {
					const c = r[h];
					try {
						(0, t.isVueViewModel)(c)
							? a.push("[VueViewModel]")
							: a.push(String(c));
					} catch {
						a.push("[value cannot be serialized]");
					}
				}
				return a.join(u);
			}
			function d(r, u, a = !1) {
				return (0, t.isString)(r)
					? (0, t.isRegExp)(u)
						? u.test(r)
						: (0, t.isString)(u)
							? a
								? r === u
								: r.includes(u)
							: !1
					: !1;
			}
			function m(r, u = [], a = !1) {
				return u.some((h) => d(r, h, a));
			}
		}),
		