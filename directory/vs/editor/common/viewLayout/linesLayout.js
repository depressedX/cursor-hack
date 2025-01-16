define(de[2577], he([1, 0, 37]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$gwb = e.$fwb = void 0),
				(t = mt(t));
			class i {
				constructor() {
					(this.c = !1), (this.d = []), (this.e = []), (this.f = []);
				}
				insert(d) {
					(this.c = !0), this.d.push(d);
				}
				change(d) {
					(this.c = !0), this.e.push(d);
				}
				remove(d) {
					(this.c = !0), this.f.push(d);
				}
				mustCommit() {
					return this.c;
				}
				commit(d) {
					if (!this.c) return;
					const m = this.d,
						r = this.e,
						u = this.f;
					(this.c = !1),
						(this.d = []),
						(this.e = []),
						(this.f = []),
						d._commitPendingChanges(m, r, u);
				}
			}
			class w {
				constructor(d, m, r, u, a) {
					(this.id = d),
						(this.afterLineNumber = m),
						(this.ordinal = r),
						(this.height = u),
						(this.minWidth = a),
						(this.prefixSum = 0);
				}
			}
			e.$fwb = w;
			class E {
				static {
					this.c = 0;
				}
				constructor(d, m, r, u) {
					(this.d = t.$fg(++E.c)),
						(this.e = new i()),
						(this.f = 0),
						(this.g = []),
						(this.h = -1),
						(this.j = -1),
						(this.k = d),
						(this.l = m),
						(this.m = r),
						(this.n = u);
				}
				static findInsertionIndex(d, m, r) {
					let u = 0,
						a = d.length;
					for (; u < a; ) {
						const h = (u + a) >>> 1;
						m === d[h].afterLineNumber
							? r < d[h].ordinal
								? (a = h)
								: (u = h + 1)
							: m < d[h].afterLineNumber
								? (a = h)
								: (u = h + 1);
					}
					return u;
				}
				setLineHeight(d) {
					this.o(), (this.l = d);
				}
				setPadding(d, m) {
					(this.m = d), (this.n = m);
				}
				onFlushed(d) {
					this.o(), (this.k = d);
				}
				changeWhitespace(d) {
					let m = !1;
					try {
						d({
							insertWhitespace: (u, a, h, c) => {
								(m = !0), (u = u | 0), (a = a | 0), (h = h | 0), (c = c | 0);
								const n = this.d + ++this.f;
								return this.e.insert(new w(n, u, a, h, c)), n;
							},
							changeOneWhitespace: (u, a, h) => {
								(m = !0),
									(a = a | 0),
									(h = h | 0),
									this.e.change({ id: u, newAfterLineNumber: a, newHeight: h });
							},
							removeWhitespace: (u) => {
								(m = !0), this.e.remove({ id: u });
							},
						});
					} finally {
						this.e.commit(this);
					}
					return m;
				}
				_commitPendingChanges(d, m, r) {
					if (
						((d.length > 0 || r.length > 0) && (this.j = -1),
						d.length + m.length + r.length <= 1)
					) {
						for (const n of d) this.p(n);
						for (const n of m) this.r(n.id, n.newAfterLineNumber, n.newHeight);
						for (const n of r) {
							const g = this.q(n.id);
							g !== -1 && this.s(g);
						}
						return;
					}
					const u = new Set();
					for (const n of r) u.add(n.id);
					const a = new Map();
					for (const n of m) a.set(n.id, n);
					const h = (n) => {
							const g = [];
							for (const p of n)
								if (!u.has(p.id)) {
									if (a.has(p.id)) {
										const o = a.get(p.id);
										(p.afterLineNumber = o.newAfterLineNumber),
											(p.height = o.newHeight);
									}
									g.push(p);
								}
							return g;
						},
						c = h(this.g).concat(h(d));
					c.sort((n, g) =>
						n.afterLineNumber === g.afterLineNumber
							? n.ordinal - g.ordinal
							: n.afterLineNumber - g.afterLineNumber,
					),
						(this.g = c),
						(this.h = -1);
				}
				o() {
					this.e.mustCommit() && this.e.commit(this);
				}
				p(d) {
					const m = E.findInsertionIndex(this.g, d.afterLineNumber, d.ordinal);
					this.g.splice(m, 0, d), (this.h = Math.min(this.h, m - 1));
				}
				q(d) {
					const m = this.g;
					for (let r = 0, u = m.length; r < u; r++) if (m[r].id === d) return r;
					return -1;
				}
				r(d, m, r) {
					const u = this.q(d);
					if (
						u !== -1 &&
						(this.g[u].height !== r &&
							((this.g[u].height = r), (this.h = Math.min(this.h, u - 1))),
						this.g[u].afterLineNumber !== m)
					) {
						const a = this.g[u];
						this.s(u), (a.afterLineNumber = m), this.p(a);
					}
				}
				s(d) {
					this.g.splice(d, 1), (this.h = Math.min(this.h, d - 1));
				}
				onLinesDeleted(d, m) {
					this.o(), (d = d | 0), (m = m | 0), (this.k -= m - d + 1);
					for (let r = 0, u = this.g.length; r < u; r++) {
						const a = this.g[r].afterLineNumber;
						d <= a && a <= m
							? (this.g[r].afterLineNumber = d - 1)
							: a > m && (this.g[r].afterLineNumber -= m - d + 1);
					}
				}
				onLinesInserted(d, m) {
					this.o(), (d = d | 0), (m = m | 0), (this.k += m - d + 1);
					for (let r = 0, u = this.g.length; r < u; r++) {
						const a = this.g[r].afterLineNumber;
						d <= a && (this.g[r].afterLineNumber += m - d + 1);
					}
				}
				getWhitespacesTotalHeight() {
					return (
						this.o(),
						this.g.length === 0
							? 0
							: this.getWhitespacesAccumulatedHeight(this.g.length - 1)
					);
				}
				getWhitespacesAccumulatedHeight(d) {
					this.o(), (d = d | 0);
					let m = Math.max(0, this.h + 1);
					m === 0 && ((this.g[0].prefixSum = this.g[0].height), m++);
					for (let r = m; r <= d; r++)
						this.g[r].prefixSum = this.g[r - 1].prefixSum + this.g[r].height;
					return (this.h = Math.max(this.h, d)), this.g[d].prefixSum;
				}
				getLinesTotalHeight() {
					this.o();
					const d = this.l * this.k,
						m = this.getWhitespacesTotalHeight();
					return d + m + this.m + this.n;
				}
				getWhitespaceAccumulatedHeightBeforeLineNumber(d) {
					this.o(), (d = d | 0);
					const m = this.t(d);
					return m === -1 ? 0 : this.getWhitespacesAccumulatedHeight(m);
				}
				t(d) {
					d = d | 0;
					const m = this.g;
					let r = 0,
						u = m.length - 1;
					for (; r <= u; ) {
						const h = (((u - r) | 0) / 2) | 0,
							c = (r + h) | 0;
						if (m[c].afterLineNumber < d) {
							if (c + 1 >= m.length || m[c + 1].afterLineNumber >= d) return c;
							r = (c + 1) | 0;
						} else u = (c - 1) | 0;
					}
					return -1;
				}
				u(d) {
					d = d | 0;
					const r = this.t(d) + 1;
					return r < this.g.length ? r : -1;
				}
				getFirstWhitespaceIndexAfterLineNumber(d) {
					return this.o(), (d = d | 0), this.u(d);
				}
				getVerticalOffsetForLineNumber(d, m = !1) {
					this.o(), (d = d | 0);
					let r;
					d > 1 ? (r = this.l * (d - 1)) : (r = 0);
					const u = this.getWhitespaceAccumulatedHeightBeforeLineNumber(
						d - (m ? 1 : 0),
					);
					return r + u + this.m;
				}
				getVerticalOffsetAfterLineNumber(d, m = !1) {
					this.o(), (d = d | 0);
					const r = this.l * d,
						u = this.getWhitespaceAccumulatedHeightBeforeLineNumber(
							d + (m ? 1 : 0),
						);
					return r + u + this.m;
				}
				hasWhitespace() {
					return this.o(), this.getWhitespacesCount() > 0;
				}
				getWhitespaceMinWidth() {
					if ((this.o(), this.j === -1)) {
						let d = 0;
						for (let m = 0, r = this.g.length; m < r; m++)
							d = Math.max(d, this.g[m].minWidth);
						this.j = d;
					}
					return this.j;
				}
				isAfterLines(d) {
					this.o();
					const m = this.getLinesTotalHeight();
					return d > m;
				}
				isInTopPadding(d) {
					return this.m === 0 ? !1 : (this.o(), d < this.m);
				}
				isInBottomPadding(d) {
					if (this.n === 0) return !1;
					this.o();
					const m = this.getLinesTotalHeight();
					return d >= m - this.n;
				}
				getLineNumberAtOrAfterVerticalOffset(d) {
					if ((this.o(), (d = d | 0), d < 0)) return 1;
					const m = this.k | 0,
						r = this.l;
					let u = 1,
						a = m;
					for (; u < a; ) {
						const h = ((u + a) / 2) | 0,
							c = this.getVerticalOffsetForLineNumber(h) | 0;
						if (d >= c + r) u = h + 1;
						else {
							if (d >= c) return h;
							a = h;
						}
					}
					return u > m ? m : u;
				}
				getLinesViewportData(d, m) {
					this.o(), (d = d | 0), (m = m | 0);
					const r = this.l,
						u = this.getLineNumberAtOrAfterVerticalOffset(d) | 0,
						a = this.getVerticalOffsetForLineNumber(u) | 0;
					let h = this.k | 0,
						c = this.getFirstWhitespaceIndexAfterLineNumber(u) | 0;
					const n = this.getWhitespacesCount() | 0;
					let g, p;
					c === -1
						? ((c = n), (p = h + 1), (g = 0))
						: ((p = this.getAfterLineNumberForWhitespaceIndex(c) | 0),
							(g = this.getHeightForWhitespaceIndex(c) | 0));
					let o = a,
						f = o;
					const b = 5e5;
					let s = 0;
					a >= b &&
						((s = Math.floor(a / b) * b),
						(s = Math.floor(s / r) * r),
						(f -= s));
					const l = [],
						y = d + (m - d) / 2;
					let $ = -1;
					for (let T = u; T <= h; T++) {
						if ($ === -1) {
							const P = o,
								k = o + r;
							((P <= y && y < k) || P > y) && ($ = T);
						}
						for (o += r, l[T - u] = f, f += r; p === T; )
							(f += g),
								(o += g),
								c++,
								c >= n
									? (p = h + 1)
									: ((p = this.getAfterLineNumberForWhitespaceIndex(c) | 0),
										(g = this.getHeightForWhitespaceIndex(c) | 0));
						if (o >= m) {
							h = T;
							break;
						}
					}
					$ === -1 && ($ = h);
					const v = this.getVerticalOffsetForLineNumber(h) | 0;
					let S = u,
						I = h;
					return (
						S < I && a < d && S++,
						S < I && v + r > m && I--,
						{
							bigNumbersDelta: s,
							startLineNumber: u,
							endLineNumber: h,
							relativeVerticalOffset: l,
							centeredLineNumber: $,
							completelyVisibleStartLineNumber: S,
							completelyVisibleEndLineNumber: I,
							lineHeight: this.l,
						}
					);
				}
				getVerticalOffsetForWhitespaceIndex(d) {
					this.o(), (d = d | 0);
					const m = this.getAfterLineNumberForWhitespaceIndex(d);
					let r;
					m >= 1 ? (r = this.l * m) : (r = 0);
					let u;
					return (
						d > 0 ? (u = this.getWhitespacesAccumulatedHeight(d - 1)) : (u = 0),
						r + u + this.m
					);
				}
				getWhitespaceIndexAtOrAfterVerticallOffset(d) {
					this.o(), (d = d | 0);
					let m = 0,
						r = this.getWhitespacesCount() - 1;
					if (r < 0) return -1;
					const u = this.getVerticalOffsetForWhitespaceIndex(r),
						a = this.getHeightForWhitespaceIndex(r);
					if (d >= u + a) return -1;
					for (; m < r; ) {
						const h = Math.floor((m + r) / 2),
							c = this.getVerticalOffsetForWhitespaceIndex(h),
							n = this.getHeightForWhitespaceIndex(h);
						if (d >= c + n) m = h + 1;
						else {
							if (d >= c) return h;
							r = h;
						}
					}
					return m;
				}
				getWhitespaceAtVerticalOffset(d) {
					this.o(), (d = d | 0);
					const m = this.getWhitespaceIndexAtOrAfterVerticallOffset(d);
					if (m < 0 || m >= this.getWhitespacesCount()) return null;
					const r = this.getVerticalOffsetForWhitespaceIndex(m);
					if (r > d) return null;
					const u = this.getHeightForWhitespaceIndex(m),
						a = this.getIdForWhitespaceIndex(m),
						h = this.getAfterLineNumberForWhitespaceIndex(m);
					return { id: a, afterLineNumber: h, verticalOffset: r, height: u };
				}
				getWhitespaceViewportData(d, m) {
					this.o(), (d = d | 0), (m = m | 0);
					const r = this.getWhitespaceIndexAtOrAfterVerticallOffset(d),
						u = this.getWhitespacesCount() - 1;
					if (r < 0) return [];
					const a = [];
					for (let h = r; h <= u; h++) {
						const c = this.getVerticalOffsetForWhitespaceIndex(h),
							n = this.getHeightForWhitespaceIndex(h);
						if (c >= m) break;
						a.push({
							id: this.getIdForWhitespaceIndex(h),
							afterLineNumber: this.getAfterLineNumberForWhitespaceIndex(h),
							verticalOffset: c,
							height: n,
						});
					}
					return a;
				}
				getWhitespaces() {
					return this.o(), this.g.slice(0);
				}
				getWhitespacesCount() {
					return this.o(), this.g.length;
				}
				getIdForWhitespaceIndex(d) {
					return this.o(), (d = d | 0), this.g[d].id;
				}
				getAfterLineNumberForWhitespaceIndex(d) {
					return this.o(), (d = d | 0), this.g[d].afterLineNumber;
				}
				getHeightForWhitespaceIndex(d) {
					return this.o(), (d = d | 0), this.g[d].height;
				}
			}
			e.$gwb = E;
		}),
		