import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/browser/fastDomNode.js';
import '../../../base/browser/trustedTypes.js';
import '../../../base/common/errors.js';
import '../../common/config/editorOptions.js';
import '../../common/core/stringBuilder.js';
define(
			de[1183],
			he([1, 0, 194, 432, 29, 38, 462]),
			function (ce /*require*/,
 e /*exports*/,
 t /*fastDomNode*/,
 i /*trustedTypes*/,
 w /*errors*/,
 E /*editorOptions*/,
 C /*stringBuilder*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Bub = e.$Aub = void 0);
				class d {
					constructor(a) {
						(this.c = a), this._set(1, []);
					}
					flush() {
						this._set(1, []);
					}
					_set(a, h) {
						(this.a = h), (this.b = a);
					}
					_get() {
						return { rendLineNumberStart: this.b, lines: this.a };
					}
					getStartLineNumber() {
						return this.b;
					}
					getEndLineNumber() {
						return this.b + this.a.length - 1;
					}
					getCount() {
						return this.a.length;
					}
					getLine(a) {
						const h = a - this.b;
						if (h < 0 || h >= this.a.length)
							throw new w.$gb("Illegal value for lineNumber");
						return this.a[h];
					}
					onLinesDeleted(a, h) {
						if (this.getCount() === 0) return null;
						const c = this.getStartLineNumber(),
							n = this.getEndLineNumber();
						if (h < c) {
							const f = h - a + 1;
							return (this.b -= f), null;
						}
						if (a > n) return null;
						let g = 0,
							p = 0;
						for (let f = c; f <= n; f++) {
							const b = f - this.b;
							a <= f && f <= h && (p === 0 ? ((g = b), (p = 1)) : p++);
						}
						if (a < c) {
							let f = 0;
							h < c ? (f = h - a + 1) : (f = c - a), (this.b -= f);
						}
						return this.a.splice(g, p);
					}
					onLinesChanged(a, h) {
						const c = a + h - 1;
						if (this.getCount() === 0) return !1;
						const n = this.getStartLineNumber(),
							g = this.getEndLineNumber();
						let p = !1;
						for (let o = a; o <= c; o++)
							o >= n &&
								o <= g &&
								(this.a[o - this.b].onContentChanged(), (p = !0));
						return p;
					}
					onLinesInserted(a, h) {
						if (this.getCount() === 0) return null;
						const c = h - a + 1,
							n = this.getStartLineNumber(),
							g = this.getEndLineNumber();
						if (a <= n) return (this.b += c), null;
						if (a > g) return null;
						if (c + a > g) return this.a.splice(a - this.b, g - a + 1);
						const p = [];
						for (let l = 0; l < c; l++) p[l] = this.c.createLine();
						const o = a - this.b,
							f = this.a.slice(0, o),
							b = this.a.slice(o, this.a.length - c),
							s = this.a.slice(this.a.length - c, this.a.length);
						return (this.a = f.concat(p).concat(b)), s;
					}
					onTokensChanged(a) {
						if (this.getCount() === 0) return !1;
						const h = this.getStartLineNumber(),
							c = this.getEndLineNumber();
						let n = !1;
						for (let g = 0, p = a.length; g < p; g++) {
							const o = a[g];
							if (o.toLineNumber < h || o.fromLineNumber > c) continue;
							const f = Math.max(h, o.fromLineNumber),
								b = Math.min(c, o.toLineNumber);
							for (let s = f; s <= b; s++) {
								const l = s - this.b;
								this.a[l].onTokensChanged(), (n = !0);
							}
						}
						return n;
					}
				}
				e.$Aub = d;
				class m {
					constructor(a) {
						(this.b = a), (this.domNode = this.c()), (this.a = new d(this.b));
					}
					c() {
						const a = (0, t.$Shb)(document.createElement("div"));
						return (
							a.setClassName("view-layer"),
							a.setPosition("absolute"),
							a.domNode.setAttribute("role", "presentation"),
							a.domNode.setAttribute("aria-hidden", "true"),
							a
						);
					}
					onConfigurationChanged(a) {
						return !!a.hasChanged(E.EditorOption.layoutInfo);
					}
					onFlushed(a) {
						return this.a.flush(), !0;
					}
					onLinesChanged(a) {
						return this.a.onLinesChanged(a.fromLineNumber, a.count);
					}
					onLinesDeleted(a) {
						const h = this.a.onLinesDeleted(a.fromLineNumber, a.toLineNumber);
						if (h)
							for (let c = 0, n = h.length; c < n; c++)
								h[c].getDomNode()?.remove();
						return !0;
					}
					onLinesInserted(a) {
						const h = this.a.onLinesInserted(a.fromLineNumber, a.toLineNumber);
						if (h)
							for (let c = 0, n = h.length; c < n; c++)
								h[c].getDomNode()?.remove();
						return !0;
					}
					onScrollChanged(a) {
						return a.scrollTopChanged;
					}
					onTokensChanged(a) {
						return this.a.onTokensChanged(a.ranges);
					}
					onZonesChanged(a) {
						return !0;
					}
					getStartLineNumber() {
						return this.a.getStartLineNumber();
					}
					getEndLineNumber() {
						return this.a.getEndLineNumber();
					}
					getVisibleLine(a) {
						return this.a.getLine(a);
					}
					renderLines(a) {
						const h = this.a._get(),
							c = new r(this.domNode.domNode, this.b, a),
							n = {
								rendLineNumberStart: h.rendLineNumberStart,
								lines: h.lines,
								linesLength: h.lines.length,
							},
							g = c.render(
								n,
								a.startLineNumber,
								a.endLineNumber,
								a.relativeVerticalOffset,
							);
						this.a._set(g.rendLineNumberStart, g.lines);
					}
				}
				e.$Bub = m;
				class r {
					static {
						this.a = (0, i.$bjb)("editorViewLayer", { createHTML: (a) => a });
					}
					constructor(a, h, c) {
						(this.b = a), (this.c = h), (this.d = c);
					}
					render(a, h, c, n) {
						const g = {
							rendLineNumberStart: a.rendLineNumberStart,
							lines: a.lines.slice(0),
							linesLength: a.linesLength,
						};
						if (
							g.rendLineNumberStart + g.linesLength - 1 < h ||
							c < g.rendLineNumberStart
						) {
							(g.rendLineNumberStart = h),
								(g.linesLength = c - h + 1),
								(g.lines = []);
							for (let p = h; p <= c; p++) g.lines[p - h] = this.c.createLine();
							return this.o(g, !0, n), g;
						}
						if (
							(this.f(
								g,
								Math.max(h - g.rendLineNumberStart, 0),
								Math.min(c - g.rendLineNumberStart, g.linesLength - 1),
								n,
								h,
							),
							g.rendLineNumberStart > h)
						) {
							const p = h,
								o = Math.min(c, g.rendLineNumberStart - 1);
							p <= o && (this.g(g, p, o, n, h), (g.linesLength += o - p + 1));
						} else if (g.rendLineNumberStart < h) {
							const p = Math.min(g.linesLength, h - g.rendLineNumberStart);
							p > 0 && (this.h(g, p), (g.linesLength -= p));
						}
						if (
							((g.rendLineNumberStart = h),
							g.rendLineNumberStart + g.linesLength - 1 < c)
						) {
							const p = g.rendLineNumberStart + g.linesLength,
								o = c;
							p <= o && (this.j(g, p, o, n, h), (g.linesLength += o - p + 1));
						} else if (g.rendLineNumberStart + g.linesLength - 1 > c) {
							const p = Math.max(0, c - g.rendLineNumberStart + 1),
								f = g.linesLength - 1 - p + 1;
							f > 0 && (this.k(g, f), (g.linesLength -= f));
						}
						return this.o(g, !1, n), g;
					}
					f(a, h, c, n, g) {
						const p = a.rendLineNumberStart,
							o = a.lines;
						for (let f = h; f <= c; f++) {
							const b = p + f;
							o[f].layoutLine(b, n[b - g], this.d.lineHeight);
						}
					}
					g(a, h, c, n, g) {
						const p = [];
						let o = 0;
						for (let f = h; f <= c; f++) p[o++] = this.c.createLine();
						a.lines = p.concat(a.lines);
					}
					h(a, h) {
						for (let c = 0; c < h; c++) a.lines[c].getDomNode()?.remove();
						a.lines.splice(0, h);
					}
					j(a, h, c, n, g) {
						const p = [];
						let o = 0;
						for (let f = h; f <= c; f++) p[o++] = this.c.createLine();
						a.lines = a.lines.concat(p);
					}
					k(a, h) {
						const c = a.linesLength - h;
						for (let n = 0; n < h; n++) a.lines[c + n].getDomNode()?.remove();
						a.lines.splice(c, h);
					}
					l(a, h, c, n) {
						r.a && (c = r.a.createHTML(c));
						const g = this.b.lastChild;
						h || !g
							? (this.b.innerHTML = c)
							: g.insertAdjacentHTML("afterend", c);
						let p = this.b.lastChild;
						for (let o = a.linesLength - 1; o >= 0; o--) {
							const f = a.lines[o];
							n[o] && (f.setDomNode(p), (p = p.previousSibling));
						}
					}
					m(a, h, c) {
						const n = document.createElement("div");
						r.a && (h = r.a.createHTML(h)), (n.innerHTML = h);
						for (let g = 0; g < a.linesLength; g++) {
							const p = a.lines[g];
							if (c[g]) {
								const o = n.firstChild,
									f = p.getDomNode();
								f.parentNode.replaceChild(o, f), p.setDomNode(o);
							}
						}
					}
					static {
						this.n = new C.$KL(1e5);
					}
					o(a, h, c) {
						const n = r.n,
							g = a.linesLength,
							p = a.lines,
							o = a.rendLineNumberStart,
							f = [];
						{
							n.reset();
							let b = !1;
							for (let s = 0; s < g; s++) {
								const l = p[s];
								(f[s] = !1),
									!(
										l.getDomNode() ||
										!l.renderLine(s + o, c[s], this.d.lineHeight, this.d, n)
									) && ((f[s] = !0), (b = !0));
							}
							b && this.l(a, h, n.build(), f);
						}
						{
							n.reset();
							let b = !1;
							const s = [];
							for (let l = 0; l < g; l++) {
								const y = p[l];
								(s[l] = !1),
									!(
										f[l] ||
										!y.renderLine(l + o, c[l], this.d.lineHeight, this.d, n)
									) && ((s[l] = !0), (b = !0));
							}
							b && this.m(a, n.build(), s);
						}
					}
				}
			},
		),
		