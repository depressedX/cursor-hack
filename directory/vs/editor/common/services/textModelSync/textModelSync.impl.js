import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/uri.js';
import '../../core/position.js';
import '../../core/range.js';
import '../../core/wordHelper.js';
import '../../model/mirrorTextModel.js';
define(
			de[935],
			he([1, 0, 15, 3, 9, 48, 17, 409, 2568]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*lifecycle*/,
 w /*uri*/,
 E /*position*/,
 C /*range*/,
 d /*wordHelper*/,
 m /*mirrorTextModel*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$yxb = e.$xxb = e.$wxb = e.$vxb = e.$uxb = void 0),
					(e.$uxb = 60 * 1e3),
					(e.$vxb = "workerTextModelSync");
				class r extends i.$1c {
					static create(c, n) {
						return new r(c.getChannel(e.$vxb), n);
					}
					constructor(c, n, g = !1) {
						if (
							(super(),
							(this.c = Object.create(null)),
							(this.f = Object.create(null)),
							(this.a = c),
							(this.b = n),
							!g)
						) {
							const p = new t.$Xh();
							p.cancelAndSet(() => this.g(), Math.round(e.$uxb / 2)), this.D(p);
						}
					}
					dispose() {
						for (const c in this.c) (0, i.$Vc)(this.c[c]);
						(this.c = Object.create(null)),
							(this.f = Object.create(null)),
							super.dispose();
					}
					ensureSyncedResources(c, n = !1) {
						for (const g of c) {
							const p = g.toString();
							this.c[p] || this.h(g, n),
								this.c[p] && (this.f[p] = new Date().getTime());
						}
					}
					g() {
						const c = new Date().getTime(),
							n = [];
						for (const g in this.f) c - this.f[g] > e.$uxb && n.push(g);
						for (const g of n) this.j(g);
					}
					h(c, n) {
						const g = this.b.getModel(c);
						if (!g || (!n && g.isTooLargeForSyncing())) return;
						const p = c.toString();
						this.a.$acceptNewModel({
							url: g.uri.toString(),
							lines: g.getLinesContent(),
							EOL: g.getEOL(),
							versionId: g.getVersionId(),
						});
						const o = new i.$Zc();
						o.add(
							g.onDidChangeContent((f) => {
								this.a.$acceptModelChanged(p.toString(), f);
							}),
						),
							o.add(
								g.onWillDispose(() => {
									this.j(p);
								}),
							),
							o.add(
								(0, i.$Yc)(() => {
									this.a.$acceptRemovedModel(p);
								}),
							),
							(this.c[p] = o);
					}
					j(c) {
						const n = this.c[c];
						delete this.c[c], delete this.f[c], (0, i.$Vc)(n);
					}
				}
				e.$wxb = r;
				class u {
					constructor() {
						this.a = Object.create(null);
					}
					bindToServer(c) {
						c.setChannel(e.$vxb, this);
					}
					getModel(c) {
						return this.a[c];
					}
					getModels() {
						const c = [];
						return Object.keys(this.a).forEach((n) => c.push(this.a[n])), c;
					}
					$acceptNewModel(c) {
						this.a[c.url] = new a(
							w.URI.parse(c.url),
							c.lines,
							c.EOL,
							c.versionId,
						);
					}
					$acceptModelChanged(c, n) {
						if (!this.a[c]) return;
						this.a[c].onEvents(n);
					}
					$acceptRemovedModel(c) {
						this.a[c] && delete this.a[c];
					}
				}
				e.$xxb = u;
				class a extends m.$ZN {
					get uri() {
						return this.a;
					}
					get eol() {
						return this.c;
					}
					getValue() {
						return this.getText();
					}
					findMatches(c) {
						const n = [];
						for (let g = 0; g < this.b.length; g++) {
							const p = this.b[g],
								o = this.offsetAt(new E.$hL(g + 1, 1)),
								f = p.matchAll(c);
							for (const b of f)
								(b.index || b.index === 0) && (b.index = b.index + o),
									n.push(b);
						}
						return n;
					}
					getLinesContent() {
						return this.b.slice(0);
					}
					getLineCount() {
						return this.b.length;
					}
					getLineContent(c) {
						return this.b[c - 1];
					}
					getWordAtPosition(c, n) {
						const g = (0, d.$WK)(
							c.column,
							(0, d.$UK)(n),
							this.b[c.lineNumber - 1],
							0,
						);
						return g
							? new C.$iL(
									c.lineNumber,
									g.startColumn,
									c.lineNumber,
									g.endColumn,
								)
							: null;
					}
					getWordUntilPosition(c, n) {
						const g = this.getWordAtPosition(c, n);
						return g
							? {
									word: this.b[c.lineNumber - 1].substring(
										g.startColumn - 1,
										c.column - 1,
									),
									startColumn: g.startColumn,
									endColumn: c.column,
								}
							: { word: "", startColumn: c.column, endColumn: c.column };
					}
					words(c) {
						const n = this.b,
							g = this.m.bind(this);
						let p = 0,
							o = "",
							f = 0,
							b = [];
						return {
							*[Symbol.iterator]() {
								for (;;)
									if (f < b.length) {
										const s = o.substring(b[f].start, b[f].end);
										(f += 1), yield s;
									} else if (p < n.length)
										(o = n[p]), (b = g(o, c)), (f = 0), (p += 1);
									else break;
							},
						};
					}
					getLineWords(c, n) {
						const g = this.b[c - 1],
							p = this.m(g, n),
							o = [];
						for (const f of p)
							o.push({
								word: g.substring(f.start, f.end),
								startColumn: f.start + 1,
								endColumn: f.end + 1,
							});
						return o;
					}
					m(c, n) {
						const g = [];
						let p;
						for (n.lastIndex = 0; (p = n.exec(c)) && p[0].length !== 0; )
							g.push({ start: p.index, end: p.index + p[0].length });
						return g;
					}
					getValueInRange(c) {
						if (((c = this.n(c)), c.startLineNumber === c.endLineNumber))
							return this.b[c.startLineNumber - 1].substring(
								c.startColumn - 1,
								c.endColumn - 1,
							);
						const n = this.c,
							g = c.startLineNumber - 1,
							p = c.endLineNumber - 1,
							o = [];
						o.push(this.b[g].substring(c.startColumn - 1));
						for (let f = g + 1; f < p; f++) o.push(this.b[f]);
						return o.push(this.b[p].substring(0, c.endColumn - 1)), o.join(n);
					}
					offsetAt(c) {
						return (
							(c = this.o(c)),
							this.h(),
							this.f.getPrefixSum(c.lineNumber - 2) + (c.column - 1)
						);
					}
					positionAt(c) {
						(c = Math.floor(c)), (c = Math.max(0, c)), this.h();
						const n = this.f.getIndexOf(c),
							g = this.b[n.index].length;
						return {
							lineNumber: 1 + n.index,
							column: 1 + Math.min(n.remainder, g),
						};
					}
					n(c) {
						const n = this.o({
								lineNumber: c.startLineNumber,
								column: c.startColumn,
							}),
							g = this.o({ lineNumber: c.endLineNumber, column: c.endColumn });
						return n.lineNumber !== c.startLineNumber ||
							n.column !== c.startColumn ||
							g.lineNumber !== c.endLineNumber ||
							g.column !== c.endColumn
							? {
									startLineNumber: n.lineNumber,
									startColumn: n.column,
									endLineNumber: g.lineNumber,
									endColumn: g.column,
								}
							: c;
					}
					o(c) {
						if (!E.$hL.isIPosition(c)) throw new Error("bad position");
						let { lineNumber: n, column: g } = c,
							p = !1;
						if (n < 1) (n = 1), (g = 1), (p = !0);
						else if (n > this.b.length)
							(n = this.b.length), (g = this.b[n - 1].length + 1), (p = !0);
						else {
							const o = this.b[n - 1].length + 1;
							g < 1 ? ((g = 1), (p = !0)) : g > o && ((g = o), (p = !0));
						}
						return p ? { lineNumber: n, column: g } : c;
					}
				}
				e.$yxb = a;
			},
		)
