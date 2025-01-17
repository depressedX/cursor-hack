import '../../../../../require.js';
import '../../../../../exports.js';
import './base.js';
import './utils.js';
define(de[901], he([1, 0, 1129, 1499]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$fqb = void 0),
				(e.$gqb = w),
				(e.$hqb = E),
				(e.$iqb = C),
				(e.$fqb = new t.Diff()),
				(e.$fqb.tokenize = function (d) {
					this.options.stripTrailingCr &&
						(d = d.replace(
							/\r\n/g,
							`
`,
						));
					let m = [],
						r = d.split(/(\n|\r\n)/);
					r[r.length - 1] || r.pop();
					for (let u = 0; u < r.length; u++) {
						let a = r[u];
						u % 2 && !this.options.newlineIsToken
							? (m[m.length - 1] += a)
							: (this.options.ignoreWhitespace && (a = a.trim()), m.push(a));
					}
					return m;
				});
			function w(d, m, r = {}) {
				return e.$fqb.diff(d, m, r);
			}
			function E(d, m, r) {
				let u = 0;
				d.endsWith(`
`) ||
					((d += `
`),
					u++),
					m.endsWith(`
`) ||
						(u++,
						(m += `
`));
				let a = [],
					h = [],
					c = d.split(`
`),
					n = m.split(`
`);
				for (let o = 0; o < Math.min(c.length, n.length) && c[o] === n[o]; o++)
					a.push({ value: c[o], count: 1 }), (c = c.slice(1)), (n = n.slice(1));
				for (
					let o = 0;
					o < Math.min(c.length, n.length) &&
					(c[c.length - 1 - o] === n[n.length - 1 - o] || n[o] === "");
					o++
				)
					h.unshift({ value: c[c.length - 1 - o], count: 1 }),
						(c = c.slice(0, c.length - 1 - o)),
						(n = n.slice(0, n.length - 1 - o));
				const g = [...a, ...r.diff(d, m), ...h],
					p = g.slice(-1)[0];
				return (
					u === 1 && p.value === "" && !p.added && !p.removed && g.pop(), g
				);
			}
			function C(d, m, r = {}) {
				let u = (0, i.$eqb)(r, { ignoreWhitespace: !0 });
				return e.$fqb.diff(d, m, u);
			}
		}),
		