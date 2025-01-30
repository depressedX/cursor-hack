import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/model/utils.js';
import './foldingRanges.js';
define(de[752], he([1, 0, 1149, 659]), function (ce /*require*/,
 e /*exports*/,
 t /*utils*/,
 i /*foldingRanges*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$QNb = e.$PNb = void 0),
				(e.$RNb = r);
			const w = 5e3,
				E = "indent";
			class C {
				constructor(a, h, c) {
					(this.a = a), (this.b = h), (this.c = c), (this.id = E);
				}
				dispose() {}
				compute(a) {
					const h = this.b.getLanguageConfiguration(
							this.a.getLanguageId(),
						).foldingRules,
						c = h && !!h.offSide,
						n = h && h.markers;
					return Promise.resolve(r(this.a, c, n, this.c));
				}
			}
			e.$PNb = C;
			class d {
				constructor(a) {
					(this.a = []),
						(this.b = []),
						(this.c = []),
						(this.d = 0),
						(this.e = a);
				}
				insertFirst(a, h, c) {
					if (a > i.$zNb || h > i.$zNb) return;
					const n = this.d;
					(this.a[n] = a),
						(this.b[n] = h),
						this.d++,
						c < 1e3 && (this.c[c] = (this.c[c] || 0) + 1);
				}
				toIndentRanges(a) {
					const h = this.e.limit;
					if (this.d <= h) {
						this.e.update(this.d, !1);
						const c = new Uint32Array(this.d),
							n = new Uint32Array(this.d);
						for (let g = this.d - 1, p = 0; g >= 0; g--, p++)
							(c[p] = this.a[g]), (n[p] = this.b[g]);
						return new i.$ANb(c, n);
					} else {
						this.e.update(this.d, h);
						let c = 0,
							n = this.c.length;
						for (let f = 0; f < this.c.length; f++) {
							const b = this.c[f];
							if (b) {
								if (b + c > h) {
									n = f;
									break;
								}
								c += b;
							}
						}
						const g = a.getOptions().tabSize,
							p = new Uint32Array(h),
							o = new Uint32Array(h);
						for (let f = this.d - 1, b = 0; f >= 0; f--) {
							const s = this.a[f],
								l = a.getLineContent(s),
								y = (0, t.$BU)(l, g);
							(y < n || (y === n && c++ < h)) &&
								((p[b] = s), (o[b] = this.b[f]), b++);
						}
						return new i.$ANb(p, o);
					}
				}
			}
			e.$QNb = d;
			const m = { limit: w, update: () => {} };
			function r(u, a, h, c = m) {
				const n = u.getOptions().tabSize,
					g = new d(c);
				let p;
				h && (p = new RegExp(`(${h.start.source})|(?:${h.end.source})`));
				const o = [],
					f = u.getLineCount() + 1;
				o.push({ indent: -1, endAbove: f, line: f });
				for (let b = u.getLineCount(); b > 0; b--) {
					const s = u.getLineContent(b),
						l = (0, t.$BU)(s, n);
					let y = o[o.length - 1];
					if (l === -1) {
						a && (y.endAbove = b);
						continue;
					}
					let $;
					if (p && ($ = s.match(p)))
						if ($[1]) {
							let v = o.length - 1;
							for (; v > 0 && o[v].indent !== -2; ) v--;
							if (v > 0) {
								(o.length = v + 1),
									(y = o[v]),
									g.insertFirst(b, y.line, l),
									(y.line = b),
									(y.indent = l),
									(y.endAbove = b);
								continue;
							}
						} else {
							o.push({ indent: -2, endAbove: b, line: b });
							continue;
						}
					if (y.indent > l) {
						do o.pop(), (y = o[o.length - 1]);
						while (y.indent > l);
						const v = y.endAbove - 1;
						v - b >= 1 && g.insertFirst(b, v, l);
					}
					y.indent === l
						? (y.endAbove = b)
						: o.push({ indent: l, endAbove: b, line: b });
				}
				return g.toIndentRanges(u);
			}
		}),
		