import '../../../../../require.js';
import '../../../../../exports.js';
define(de[659], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$BNb = e.$ANb = e.$zNb = e.$yNb = e.$xNb = e.FoldSource = void 0);
			var t;
			(function (d) {
				(d[(d.provider = 0)] = "provider"),
					(d[(d.userDefined = 1)] = "userDefined"),
					(d[(d.recovered = 2)] = "recovered");
			})(t || (e.FoldSource = t = {})),
				(e.$xNb = {
					[t.provider]: " ",
					[t.userDefined]: "u",
					[t.recovered]: "r",
				}),
				(e.$yNb = 65535),
				(e.$zNb = 16777215);
			const i = 4278190080;
			class w {
				constructor(m) {
					const r = Math.ceil(m / 32);
					this.a = new Uint32Array(r);
				}
				get(m) {
					const r = (m / 32) | 0,
						u = m % 32;
					return (this.a[r] & (1 << u)) !== 0;
				}
				set(m, r) {
					const u = (m / 32) | 0,
						a = m % 32,
						h = this.a[u];
					r ? (this.a[u] = h | (1 << a)) : (this.a[u] = h & ~(1 << a));
				}
			}
			class E {
				constructor(m, r, u) {
					if (m.length !== r.length || m.length > e.$yNb)
						throw new Error("invalid startIndexes or endIndexes size");
					(this.a = m),
						(this.b = r),
						(this.c = new w(m.length)),
						(this.d = new w(m.length)),
						(this.e = new w(m.length)),
						(this.g = u),
						(this.f = !1);
				}
				h() {
					if (!this.f) {
						this.f = !0;
						const m = [],
							r = (u, a) => {
								const h = m[m.length - 1];
								return (
									this.getStartLineNumber(h) <= u &&
									this.getEndLineNumber(h) >= a
								);
							};
						for (let u = 0, a = this.a.length; u < a; u++) {
							const h = this.a[u],
								c = this.b[u];
							if (h > e.$zNb || c > e.$zNb)
								throw new Error(
									"startLineNumber or endLineNumber must not exceed " + e.$zNb,
								);
							for (; m.length > 0 && !r(h, c); ) m.pop();
							const n = m.length > 0 ? m[m.length - 1] : -1;
							m.push(u),
								(this.a[u] = h + ((n & 255) << 24)),
								(this.b[u] = c + ((n & 65280) << 16));
						}
					}
				}
				get length() {
					return this.a.length;
				}
				getStartLineNumber(m) {
					return this.a[m] & e.$zNb;
				}
				getEndLineNumber(m) {
					return this.b[m] & e.$zNb;
				}
				getType(m) {
					return this.g ? this.g[m] : void 0;
				}
				hasTypes() {
					return !!this.g;
				}
				isCollapsed(m) {
					return this.c.get(m);
				}
				setCollapsed(m, r) {
					this.c.set(m, r);
				}
				j(m) {
					return this.d.get(m);
				}
				k(m, r) {
					return this.d.set(m, r);
				}
				l(m) {
					return this.e.get(m);
				}
				m(m, r) {
					return this.e.set(m, r);
				}
				getSource(m) {
					return this.j(m)
						? t.userDefined
						: this.l(m)
							? t.recovered
							: t.provider;
				}
				setSource(m, r) {
					r === t.userDefined
						? (this.k(m, !0), this.m(m, !1))
						: r === t.recovered
							? (this.k(m, !1), this.m(m, !0))
							: (this.k(m, !1), this.m(m, !1));
				}
				setCollapsedAllOfType(m, r) {
					let u = !1;
					if (this.g)
						for (let a = 0; a < this.g.length; a++)
							this.g[a] === m && (this.setCollapsed(a, r), (u = !0));
					return u;
				}
				toRegion(m) {
					return new C(this, m);
				}
				getParentIndex(m) {
					this.h();
					const r = ((this.a[m] & i) >>> 24) + ((this.b[m] & i) >>> 16);
					return r === e.$yNb ? -1 : r;
				}
				contains(m, r) {
					return (
						this.getStartLineNumber(m) <= r && this.getEndLineNumber(m) >= r
					);
				}
				n(m) {
					let r = 0,
						u = this.a.length;
					if (u === 0) return -1;
					for (; r < u; ) {
						const a = Math.floor((r + u) / 2);
						m < this.getStartLineNumber(a) ? (u = a) : (r = a + 1);
					}
					return r - 1;
				}
				findRange(m) {
					let r = this.n(m);
					if (r >= 0) {
						if (this.getEndLineNumber(r) >= m) return r;
						for (r = this.getParentIndex(r); r !== -1; ) {
							if (this.contains(r, m)) return r;
							r = this.getParentIndex(r);
						}
					}
					return -1;
				}
				toString() {
					const m = [];
					for (let r = 0; r < this.length; r++)
						m[r] =
							`[${e.$xNb[this.getSource(r)]}${this.isCollapsed(r) ? "+" : "-"}] ${this.getStartLineNumber(r)}/${this.getEndLineNumber(r)}`;
					return m.join(", ");
				}
				toFoldRange(m) {
					return {
						startLineNumber: this.a[m] & e.$zNb,
						endLineNumber: this.b[m] & e.$zNb,
						type: this.g ? this.g[m] : void 0,
						isCollapsed: this.isCollapsed(m),
						source: this.getSource(m),
					};
				}
				static fromFoldRanges(m) {
					const r = m.length,
						u = new Uint32Array(r),
						a = new Uint32Array(r);
					let h = [],
						c = !1;
					for (let g = 0; g < r; g++) {
						const p = m[g];
						(u[g] = p.startLineNumber),
							(a[g] = p.endLineNumber),
							h.push(p.type),
							p.type && (c = !0);
					}
					c || (h = void 0);
					const n = new E(u, a, h);
					for (let g = 0; g < r; g++)
						m[g].isCollapsed && n.setCollapsed(g, !0),
							n.setSource(g, m[g].source);
					return n;
				}
				static sanitizeAndMerge(m, r, u, a) {
					u = u ?? Number.MAX_VALUE;
					const h = ($, v) =>
							Array.isArray($)
								? (S) => (S < v ? $[S] : void 0)
								: (S) => (S < v ? $.toFoldRange(S) : void 0),
						c = h(m, m.length),
						n = h(r, r.length);
					let g = 0,
						p = 0,
						o = c(0),
						f = n(0);
					const b = [];
					let s,
						l = 0;
					const y = [];
					for (; o || f; ) {
						let $;
						if (f && (!o || o.startLineNumber >= f.startLineNumber))
							o && o.startLineNumber === f.startLineNumber
								? (f.source === t.userDefined
										? ($ = f)
										: (($ = o),
											($.isCollapsed =
												f.isCollapsed &&
												(o.endLineNumber === f.endLineNumber ||
													!a?.startsInside(
														o.startLineNumber + 1,
														o.endLineNumber + 1,
													))),
											($.source = t.provider)),
									(o = c(++g)))
								: (($ = f),
									f.isCollapsed &&
										f.source === t.provider &&
										($.source = t.recovered)),
								(f = n(++p));
						else {
							let v = p,
								S = f;
							for (;;) {
								if (!S || S.startLineNumber > o.endLineNumber) {
									$ = o;
									break;
								}
								if (
									S.source === t.userDefined &&
									S.endLineNumber > o.endLineNumber
								)
									break;
								S = n(++v);
							}
							o = c(++g);
						}
						if ($) {
							for (; s && s.endLineNumber < $.startLineNumber; ) s = b.pop();
							$.endLineNumber > $.startLineNumber &&
								$.startLineNumber > l &&
								$.endLineNumber <= u &&
								(!s || s.endLineNumber >= $.endLineNumber) &&
								(y.push($), (l = $.startLineNumber), s && b.push(s), (s = $));
						}
					}
					return y;
				}
			}
			e.$ANb = E;
			class C {
				constructor(m, r) {
					(this.a = m), (this.b = r);
				}
				get startLineNumber() {
					return this.a.getStartLineNumber(this.b);
				}
				get endLineNumber() {
					return this.a.getEndLineNumber(this.b);
				}
				get regionIndex() {
					return this.b;
				}
				get parentIndex() {
					return this.a.getParentIndex(this.b);
				}
				get isCollapsed() {
					return this.a.isCollapsed(this.b);
				}
				containedBy(m) {
					return (
						m.startLineNumber <= this.startLineNumber &&
						m.endLineNumber >= this.endLineNumber
					);
				}
				containsLine(m) {
					return this.startLineNumber <= m && m <= this.endLineNumber;
				}
				hidesLine(m) {
					return this.startLineNumber < m && m <= this.endLineNumber;
				}
			}
			e.$BNb = C;
		})
