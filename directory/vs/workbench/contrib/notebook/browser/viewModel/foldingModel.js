import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/markdownRenderer.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/marked/marked.js';
import '../../../../../editor/common/model.js';
import '../../../../../editor/contrib/folding/browser/foldingRanges.js';
import '../../../../../editor/contrib/folding/browser/syntaxRangeProvider.js';
import '../../common/notebookCommon.js';
import '../../common/notebookRange.js';
define(
			de[1841],
			he([1, 0, 267, 6, 3, 434, 64, 659, 660, 70, 442]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3Nb = void 0),
					(e.$4Nb = c),
					(e.$5Nb = n);
				const a = { limit: 5e3, update: () => {} };
				class h {
					get regions() {
						return this.c;
					}
					constructor() {
						(this.a = null),
							(this.b = new w.$Zc()),
							(this.d = new i.$re()),
							(this.onDidFoldingRegionChanged = this.d.event),
							(this.e = []),
							(this.c = new d.$ANb(new Uint32Array(0), new Uint32Array(0)));
					}
					dispose() {
						this.d.dispose(), this.b.dispose();
					}
					detachViewModel() {
						this.b.clear(), (this.a = null);
					}
					attachViewModel(p) {
						(this.a = p),
							this.b.add(
								this.a.onDidChangeViewCells(() => {
									this.recompute();
								}),
							),
							this.b.add(
								this.a.onDidChangeSelection(() => {
									if (!this.a) return;
									const o = (0, u.$j6)(this.a.getSelections());
									let f = !1;
									o.forEach((b) => {
										let s = this.regions.findRange(b + 1);
										for (; s !== -1; )
											this.c.isCollapsed(s) &&
												b > this.c.getStartLineNumber(s) - 1 &&
												(this.c.setCollapsed(s, !1), (f = !0)),
												(s = this.c.getParentIndex(s));
									}),
										f && this.d.fire();
								}),
							),
							this.recompute();
					}
					getRegionAtLine(p) {
						if (this.c) {
							const o = this.c.findRange(p);
							if (o >= 0) return this.c.toRegion(o);
						}
						return null;
					}
					getRegionsInside(p, o) {
						const f = [],
							b = p ? p.regionIndex + 1 : 0,
							s = p ? p.endLineNumber : Number.MAX_VALUE;
						if (o && o.length === 2) {
							const l = [];
							for (let y = b, $ = this.c.length; y < $; y++) {
								const v = this.c.toRegion(y);
								if (this.c.getStartLineNumber(y) < s) {
									for (; l.length > 0 && !v.containedBy(l[l.length - 1]); )
										l.pop();
									l.push(v), o(v, l.length) && f.push(v);
								} else break;
							}
						} else
							for (let l = b, y = this.c.length; l < y; l++) {
								const $ = this.c.toRegion(l);
								if (this.c.getStartLineNumber(l) < s) (!o || o($)) && f.push($);
								else break;
							}
						return f;
					}
					getAllRegionsAtLine(p, o) {
						const f = [];
						if (this.c) {
							let b = this.c.findRange(p),
								s = 1;
							for (; b >= 0; ) {
								const l = this.c.toRegion(b);
								(!o || o(l, s)) && f.push(l), s++, (b = l.parentIndex);
							}
						}
						return f;
					}
					setCollapsed(p, o) {
						this.c.setCollapsed(p, o);
					}
					recompute() {
						if (!this.a) return;
						const p = this.a,
							o = p.viewCells,
							f = [];
						for (let I = 0; I < o.length; I++) {
							const T = o[I];
							if (T.cellKind !== r.CellKind.Markup || T.language !== "markdown")
								continue;
							const P = Math.min(
								7,
								...Array.from(n(T.getText()), (k) => k.depth),
							);
							P < 7 && f.push({ index: I, level: P, endIndex: 0 });
						}
						const b = f
								.map((I, T) => {
									let P;
									for (let L = T + 1; L < f.length; ++L)
										if (f[L].level <= I.level) {
											P = f[L].index - 1;
											break;
										}
									const k = P !== void 0 ? P : o.length - 1;
									return { start: I.index + 1, end: k + 1, rank: 1 };
								})
								.filter((I) => I.start !== I.end),
							s = (0, m.$YNb)(b, a);
						let l = 0;
						const y = () => {
							for (; l < this.c.length; ) {
								const I = this.c.isCollapsed(l);
								if ((l++, I)) return l - 1;
							}
							return -1;
						};
						let $ = 0,
							v = y();
						for (; v !== -1 && $ < s.length; ) {
							const I = p.getTrackedRange(this.e[v]);
							if (I) {
								const T = I.start;
								for (; $ < s.length; ) {
									const P = s.getStartLineNumber($) - 1;
									if (T >= P) s.setCollapsed($, T === P), $++;
									else break;
								}
							}
							v = y();
						}
						for (; $ < s.length; ) s.setCollapsed($, !1), $++;
						const S = [];
						for (let I = 0; I < s.length; I++) {
							const T = s.toRegion(I);
							S.push({
								start: T.startLineNumber - 1,
								end: T.endLineNumber - 1,
							});
						}
						this.e.forEach((I) =>
							p.setTrackedRange(
								I,
								null,
								C.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter,
							),
						),
							(this.e = S.map((I) =>
								p.setTrackedRange(
									null,
									I,
									C.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter,
								),
							).filter((I) => I !== null)),
							(this.c = s),
							this.d.fire();
					}
					getMemento() {
						const p = [];
						let o = 0;
						for (; o < this.c.length; ) {
							if (this.c.isCollapsed(o)) {
								const b = this.c.toRegion(o);
								p.push({
									start: b.startLineNumber - 1,
									end: b.endLineNumber - 1,
								});
							}
							o++;
						}
						return p;
					}
					applyMemento(p) {
						if (!this.a) return !1;
						let o = 0,
							f = 0;
						for (; f < p.length && o < this.c.length; ) {
							if (this.a.getTrackedRange(this.e[o])) {
								const s = p[f].start;
								for (; o < this.c.length; ) {
									const l = this.c.getStartLineNumber(o) - 1;
									if (s >= l) this.c.setCollapsed(o, s === l), o++;
									else break;
								}
							}
							f++;
						}
						for (; o < this.c.length; ) this.c.setCollapsed(o, !1), o++;
						return !0;
					}
				}
				e.$3Nb = h;
				function c(g, p, o) {
					const f = g.regions.findRange(p + 1);
					g.setCollapsed(f, o);
				}
				function* n(g) {
					for (const p of E.marked.lexer(g, { gfm: !0 }))
						p.type === "heading" &&
							(yield {
								depth: p.depth,
								text: (0, t.$Xib)({ value: p.raw }).trim(),
							});
				}
			},
		),
		