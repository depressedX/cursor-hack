import '../../../../../require.js';
import '../../../../../exports.js';
define(de[1129], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.Diff = t);
			function t() {}
			t.prototype = {
				diff(w, E, C = {}) {
					let d = C.callback;
					typeof C == "function" && ((d = C), (C = {})), (this.options = C);
					let m = this;
					function r(l) {
						return d
							? (setTimeout(function () {
									d(void 0, l);
								}, 0),
								!0)
							: l;
					}
					(w = this.castInput(w)),
						(E = this.castInput(E)),
						(w = this.removeEmpty(this.tokenize(w))),
						(E = this.removeEmpty(this.tokenize(E)));
					let u = E.length,
						a = w.length,
						h = 1,
						c = u + a;
					C.maxEditLength && (c = Math.min(c, C.maxEditLength));
					const n = C.timeout ?? 1 / 0,
						g = Date.now() + n;
					let p = [{ oldPos: -1, lastComponent: void 0 }],
						o = this.extractCommon(p[0], E, w, 0);
					if (p[0].oldPos + 1 >= a && o + 1 >= u)
						return r([{ value: this.join(E), count: E.length }]);
					let f = -1 / 0,
						b = 1 / 0;
					function s() {
						for (let l = Math.max(f, -h); l <= Math.min(b, h); l += 2) {
							let y,
								$ = p[l - 1],
								v = p[l + 1];
							$ && (p[l - 1] = void 0);
							let S = !1;
							if (v) {
								const T = v.oldPos - l;
								S = v && 0 <= T && T < u;
							}
							let I = $ && $.oldPos + 1 < a;
							if (!S && !I) {
								p[l] = void 0;
								continue;
							}
							if (
								(!I || (S && $.oldPos + 1 < v.oldPos)
									? (y = m.addToPath(v, !0, void 0, 0))
									: (y = m.addToPath($, void 0, !0, 1)),
								(o = m.extractCommon(y, E, w, l)),
								y.oldPos + 1 >= a && o + 1 >= u)
							)
								return r(i(m, y.lastComponent, E, w, m.useLongestToken));
							(p[l] = y),
								y.oldPos + 1 >= a && (b = Math.min(b, l - 1)),
								o + 1 >= u && (f = Math.max(f, l + 1));
						}
						h++;
					}
					if (d)
						(function l() {
							setTimeout(function () {
								if (h > c || Date.now() > g) return d();
								s() || l();
							}, 0);
						})();
					else
						for (; h <= c && Date.now() <= g; ) {
							let l = s();
							if (l) return l;
						}
				},
				addToPath(w, E, C, d) {
					let m = w.lastComponent;
					return m && m.added === E && m.removed === C
						? {
								oldPos: w.oldPos + d,
								lastComponent: {
									count: m.count + 1,
									added: E,
									removed: C,
									previousComponent: m.previousComponent,
								},
							}
						: {
								oldPos: w.oldPos + d,
								lastComponent: {
									count: 1,
									added: E,
									removed: C,
									previousComponent: m,
								},
							};
				},
				extractCommon(w, E, C, d) {
					let m = E.length,
						r = C.length,
						u = w.oldPos,
						a = u - d,
						h = 0;
					for (; a + 1 < m && u + 1 < r && this.equals(E[a + 1], C[u + 1]); )
						a++, u++, h++;
					return (
						h &&
							(w.lastComponent = {
								count: h,
								previousComponent: w.lastComponent,
							}),
						(w.oldPos = u),
						a
					);
				},
				equals(w, E) {
					return this.options.comparator
						? this.options.comparator(w, E)
						: w === E ||
								(this.options.ignoreCase &&
									w.toLowerCase() === E.toLowerCase());
				},
				removeEmpty(w) {
					let E = [];
					for (let C = 0; C < w.length; C++) w[C] && E.push(w[C]);
					return E;
				},
				castInput(w) {
					return w;
				},
				tokenize(w) {
					return w.split("");
				},
				join(w) {
					return w.join("");
				},
			};
			function i(w, E, C, d, m) {
				const r = [];
				let u;
				for (; E; )
					r.push(E),
						(u = E.previousComponent),
						delete E.previousComponent,
						(E = u);
				r.reverse();
				let a = 0,
					h = r.length,
					c = 0,
					n = 0;
				for (; a < h; a++) {
					let p = r[a];
					if (p.removed) {
						if (
							((p.value = w.join(d.slice(n, n + p.count))),
							(n += p.count),
							a && r[a - 1].added)
						) {
							let o = r[a - 1];
							(r[a - 1] = r[a]), (r[a] = o);
						}
					} else {
						if (!p.added && m) {
							let o = C.slice(c, c + p.count);
							(o = o.map(function (f, b) {
								let s = d[n + b];
								return s.length > f.length ? s : f;
							})),
								(p.value = w.join(o));
						} else p.value = w.join(C.slice(c, c + p.count));
						(c += p.count), p.added || (n += p.count);
					}
				}
				let g = r[h - 1];
				return (
					h > 1 &&
						typeof g.value == "string" &&
						(g.added || g.removed) &&
						w.equals("", g.value) &&
						((r[h - 2].value += g.value), r.pop()),
					r
				);
			}
		}),
		