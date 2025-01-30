import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/ui/list/listView.js';
import '../../../../../editor/common/model/prefixSumComputer.js';
define(de[3102], he([1, 0, 539, 589]), function (ce /*require*/,
 e /*exports*/,
 t /*listView*/,
 i /*prefixSumComputer*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$x2b = e.$w2b = void 0);
			class w {
				get paddingTop() {
					return this.g;
				}
				set paddingTop(d) {
					(this.f = this.f + d - this.g), (this.g = d);
				}
				get count() {
					return this.c.length;
				}
				get size() {
					return this.f;
				}
				constructor(d) {
					(this.c = []),
						(this.d = []),
						(this.e = new i.$XN([])),
						(this.f = 0),
						(this.g = 0),
						(this.g = d ?? 0),
						(this.f = this.g);
				}
				getWhitespaces() {
					return this.d;
				}
				restoreWhitespace(d) {
					(this.d = d),
						(this.f =
							this.g +
							this.c.reduce((m, r) => m + r.size, 0) +
							this.d.reduce((m, r) => m + r.size, 0));
				}
				splice(d, m, r) {
					const u = r ?? [];
					this.c.splice(d, m, ...u),
						(this.f =
							this.g +
							this.c.reduce((h, c) => h + c.size, 0) +
							this.d.reduce((h, c) => h + c.size, 0)),
						this.e.removeValues(d, m);
					const a = [];
					for (let h = 0; h < u.length; h++) {
						const c = h + d,
							n = this.d.filter((g) => g.afterPosition === c + 1);
						n.length > 0
							? a.push(u[h].size + n.reduce((g, p) => g + p.size, 0))
							: a.push(u[h].size);
					}
					this.e.insertValues(d, a);
					for (let h = d; h < this.c.length; h++) {
						const c = this.d.filter((n) => n.afterPosition === h + 1);
						c.length > 0
							? this.e.setValue(
									h,
									this.c[h].size + c.reduce((n, g) => n + g.size, 0),
								)
							: this.e.setValue(h, this.c[h].size);
					}
				}
				insertWhitespace(d, m, r) {
					let u = 0;
					const a = this.d.filter((h) => h.afterPosition === m);
					if (
						(a.length > 0 && (u = Math.max(...a.map((h) => h.priority)) + 1),
						this.d.push({ id: d, afterPosition: m, size: r, priority: u }),
						(this.f += r),
						this.d.sort((h, c) =>
							h.afterPosition === c.afterPosition
								? h.priority - c.priority
								: h.afterPosition - c.afterPosition,
						),
						m > 0)
					) {
						const h = m - 1,
							n = this.c[h].size + r;
						this.e.setValue(h, n);
					}
				}
				changeOneWhitespace(d, m, r) {
					const u = this.d.findIndex((a) => a.id === d);
					if (u !== -1) {
						const a = this.d[u],
							h = a.afterPosition;
						a.afterPosition = m;
						const c = a.size,
							n = r - c;
						if (((a.size = r), (this.f += n), h > 0 && h <= this.c.length)) {
							const g = h - 1,
								o = this.c[g].size;
							this.e.setValue(g, o);
						}
						if (m > 0 && m <= this.c.length) {
							const g = m - 1,
								o = this.c[g].size + r;
							this.e.setValue(g, o);
						}
					}
				}
				removeWhitespace(d) {
					const m = this.d.findIndex((r) => r.id === d);
					if (m !== -1) {
						const r = this.d[m];
						if (
							(this.d.splice(m, 1), (this.f -= r.size), r.afterPosition > 0)
						) {
							const u = r.afterPosition - 1,
								a = this.c[u].size,
								h = this.d.filter((n) => n.afterPosition === r.afterPosition),
								c = a + h.reduce((n, g) => n + g.size, 0);
							this.e.setValue(u, c);
						}
					}
				}
				getWhitespacePosition(d) {
					const m = this.d.find((p) => p.id === d);
					if (!m) throw new Error("Whitespace not found");
					const r = m.afterPosition;
					if (r === 0)
						return (
							this.d
								.filter((o) => o.afterPosition === r && o.priority < m.priority)
								.reduce((o, f) => o + f.size, 0) + this.paddingTop
						);
					const u = this.d
							.filter((p) => p.afterPosition === 0)
							.reduce((p, o) => p + o.size, 0),
						a = r - 1,
						h = this.e.getPrefixSum(a),
						c = this.c[a].size,
						g = this.d
							.filter((p) => p.afterPosition <= r - 1 && p.afterPosition > 0)
							.reduce((p, o) => p + o.size, 0);
					return h + c + u + this.paddingTop + g;
				}
				indexAt(d) {
					if (d < 0) return -1;
					const m = this.d
							.filter((u) => u.afterPosition === 0)
							.reduce((u, a) => u + a.size, 0),
						r = d - (this.g + m);
					return r <= 0
						? 0
						: r >= this.f - this.g - m
							? this.count
							: this.e.getIndexOf(Math.trunc(r)).index;
				}
				indexAfter(d) {
					const m = this.indexAt(d);
					return Math.min(m + 1, this.c.length);
				}
				positionAt(d) {
					if (d < 0 || this.count === 0 || d >= this.count) return -1;
					const m = this.d
						.filter((r) => r.afterPosition === 0)
						.reduce((r, u) => r + u.size, 0);
					return this.e.getPrefixSum(d) + this.g + m;
				}
			}
			e.$w2b = w;
			class E extends t.$zib {
				constructor() {
					super(...arguments), (this.yb = 0), (this.zb = 0);
				}
				get inRenderingTransaction() {
					return this.zb > 0;
				}
				get notebookRangeMap() {
					return this.g;
				}
				Y(d, m, r, u, a, h) {
					this.zb++, super.Y(d, m, r, u, a, h), this.zb--;
				}
				wb(d, m, r) {
					this.zb++, super.wb(d, m, r), this.zb--;
				}
				S(d) {
					const m = this.g;
					if (m) {
						const r = new w(d);
						return r.restoreWhitespace(m.getWhitespaces()), r;
					} else return new w(d);
				}
				insertWhitespace(d, m) {
					const r = this.scrollTop,
						u = `${++this.yb}`,
						a = this.vb(this.k, this.m),
						h = this.elementTop(d),
						c = r > h;
					this.notebookRangeMap.insertWhitespace(u, d, m);
					const n = c ? r + m : r;
					return (
						this.Y(a, n, this.m, void 0, void 0, !1),
						this.wb(n, this.renderHeight, !1),
						this.V(),
						u
					);
				}
				changeOneWhitespace(d, m, r) {
					const u = this.scrollTop,
						a = this.vb(this.k, this.m);
					this.notebookRangeMap.getWhitespacePosition(d) > u
						? (this.notebookRangeMap.changeOneWhitespace(d, m, r),
							this.Y(a, u, this.m, void 0, void 0, !1),
							this.wb(u, this.renderHeight, !1),
							this.V())
						: (this.notebookRangeMap.changeOneWhitespace(d, m, r), this.V());
				}
				removeWhitespace(d) {
					const m = this.scrollTop,
						r = this.vb(this.k, this.m);
					this.notebookRangeMap.getWhitespacePosition(d) > m
						? (this.notebookRangeMap.removeWhitespace(d),
							this.Y(r, m, this.m, void 0, void 0, !1),
							this.wb(m, this.renderHeight, !1),
							this.V())
						: (this.notebookRangeMap.removeWhitespace(d), this.V());
				}
				getWhitespacePosition(d) {
					return this.notebookRangeMap.getWhitespacePosition(d);
				}
			}
			e.$x2b = E;
		}),
		