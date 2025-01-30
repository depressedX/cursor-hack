import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/assert.js';
import '../../../base/common/errors.js';
import '../../../base/common/idGenerator.js';
import './extHostTypeConverters.js';
import './extHostTypes.js';
define(
			Pe[305],
			Ne([1, 0, 104, 12, 262, 17, 11]),
			function (we, t, e, r, S, N, P) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Vdb = t.$Udb = t.$Tdb = void 0),
					(N = tt(N));
				class I {
					static {
						this.c = new S.$Rdb("TextEditorDecorationType");
					}
					constructor(d, k, g) {
						const c = I.c.nextId();
						d.$registerTextEditorDecorationType(
							k.identifier,
							c,
							N.DecorationRenderOptions.from(g),
						),
							(this.value = Object.freeze({
								key: c,
								dispose() {
									d.$removeTextEditorDecorationType(c);
								},
							}));
					}
				}
				t.$Tdb = I;
				class l {
					constructor(d, k) {
						(this.g = []),
							(this.h = void 0),
							(this.j = !1),
							(this.c = d),
							(this.d = d.version),
							(this.e = k.undoStopBefore),
							(this.f = k.undoStopAfter);
					}
					finalize() {
						return (
							(this.j = !0),
							{
								documentVersionId: this.d,
								edits: this.g,
								setEndOfLine: this.h,
								undoStopBefore: this.e,
								undoStopAfter: this.f,
							}
						);
					}
					k() {
						if (this.j)
							throw new Error("Edit is only valid while callback runs");
					}
					replace(d, k) {
						this.k();
						let g = null;
						if (d instanceof P.$obb) g = new P.$pbb(d, d);
						else if (d instanceof P.$pbb) g = d;
						else throw new Error("Unrecognized location");
						this.l(g, k, !1);
					}
					insert(d, k) {
						this.k(), this.l(new P.$pbb(d, d), k, !0);
					}
					delete(d) {
						this.k();
						let k = null;
						if (d instanceof P.$pbb) k = d;
						else throw new Error("Unrecognized location");
						this.l(k, null, !0);
					}
					l(d, k, g) {
						const c = this.c.validateRange(d);
						this.g.push({ range: c, text: k, forceMoveMarkers: g });
					}
					setEndOfLine(d) {
						if ((this.k(), d !== P.EndOfLine.LF && d !== P.EndOfLine.CRLF))
							throw (0, r.$$)("endOfLine");
						this.h = d;
					}
				}
				class n {
					constructor(d, k, g, c) {
						(this.c = d), (this.d = k), this._accept(g), (this.e = c);
						const h = this;
						this.value = {
							get tabSize() {
								return h.f;
							},
							set tabSize($) {
								h.n($);
							},
							get indentSize() {
								return h.g;
							},
							set indentSize($) {
								h.p($);
							},
							get insertSpaces() {
								return h.j;
							},
							set insertSpaces($) {
								h.s($);
							},
							get cursorStyle() {
								return h.k;
							},
							set cursorStyle($) {
								h.t($);
							},
							get lineNumbers() {
								return h.l;
							},
							set lineNumbers($) {
								h.u($);
							},
						};
					}
					_accept(d) {
						(this.f = d.tabSize),
							(this.g = d.indentSize),
							(this.h = d.originalIndentSize),
							(this.j = d.insertSpaces),
							(this.k = d.cursorStyle),
							(this.l = N.TextEditorLineNumbersStyle.to(d.lineNumbers));
					}
					m(d) {
						if (d === "auto") return "auto";
						if (typeof d == "number") {
							const k = Math.floor(d);
							return k > 0 ? k : null;
						}
						if (typeof d == "string") {
							const k = parseInt(d, 10);
							return isNaN(k) ? null : k > 0 ? k : null;
						}
						return null;
					}
					n(d) {
						const k = this.m(d);
						if (k !== null) {
							if (typeof k == "number") {
								if (this.f === k) return;
								this.f = k;
							}
							this.v(
								"setTabSize",
								this.c.$trySetOptions(this.d, { tabSize: k }),
							);
						}
					}
					o(d) {
						if (d === "tabSize") return "tabSize";
						if (typeof d == "number") {
							const k = Math.floor(d);
							return k > 0 ? k : null;
						}
						if (typeof d == "string") {
							const k = parseInt(d, 10);
							return isNaN(k) ? null : k > 0 ? k : null;
						}
						return null;
					}
					p(d) {
						const k = this.o(d);
						if (k !== null) {
							if (typeof k == "number") {
								if (this.h === k) return;
								(this.g = k), (this.h = k);
							}
							this.v(
								"setIndentSize",
								this.c.$trySetOptions(this.d, { indentSize: k }),
							);
						}
					}
					q(d) {
						return d === "auto" ? "auto" : d === "false" ? !1 : !!d;
					}
					s(d) {
						const k = this.q(d);
						if (typeof k == "boolean") {
							if (this.j === k) return;
							this.j = k;
						}
						this.v(
							"setInsertSpaces",
							this.c.$trySetOptions(this.d, { insertSpaces: k }),
						);
					}
					t(d) {
						this.k !== d &&
							((this.k = d),
							this.v(
								"setCursorStyle",
								this.c.$trySetOptions(this.d, { cursorStyle: d }),
							));
					}
					u(d) {
						this.l !== d &&
							((this.l = d),
							this.v(
								"setLineNumbers",
								this.c.$trySetOptions(this.d, {
									lineNumbers: N.TextEditorLineNumbersStyle.from(d),
								}),
							));
					}
					assign(d) {
						const k = {};
						let g = !1;
						if (typeof d.tabSize < "u") {
							const c = this.m(d.tabSize);
							c === "auto"
								? ((g = !0), (k.tabSize = c))
								: typeof c == "number" &&
									this.f !== c &&
									((this.f = c), (g = !0), (k.tabSize = c));
						}
						if (typeof d.indentSize < "u") {
							const c = this.o(d.indentSize);
							c === "tabSize"
								? ((g = !0), (k.indentSize = c))
								: typeof c == "number" &&
									this.h !== c &&
									((this.g = c), (this.h = c), (g = !0), (k.indentSize = c));
						}
						if (typeof d.insertSpaces < "u") {
							const c = this.q(d.insertSpaces);
							c === "auto"
								? ((g = !0), (k.insertSpaces = c))
								: this.j !== c &&
									((this.j = c), (g = !0), (k.insertSpaces = c));
						}
						typeof d.cursorStyle < "u" &&
							this.k !== d.cursorStyle &&
							((this.k = d.cursorStyle),
							(g = !0),
							(k.cursorStyle = d.cursorStyle)),
							typeof d.lineNumbers < "u" &&
								this.l !== d.lineNumbers &&
								((this.l = d.lineNumbers),
								(g = !0),
								(k.lineNumbers = N.TextEditorLineNumbersStyle.from(
									d.lineNumbers,
								))),
							g && this.v("setOptions", this.c.$trySetOptions(this.d, k));
					}
					v(d, k) {
						k.catch((g) => {
							this.e.warn(`ExtHostTextEditorOptions '${d}' failed:'`),
								this.e.warn(g);
						});
					}
				}
				t.$Udb = n;
				class p {
					constructor(d, k, g, c, h, $, T, a) {
						(this.id = d),
							(this.j = k),
							(this.k = g),
							(this.g = !1),
							(this.h = new Set()),
							(this.c = h),
							(this.d = new n(this.j, this.id, $, g)),
							(this.e = T),
							(this.f = a);
						const u = this;
						this.value = Object.freeze({
							get document() {
								return c.value;
							},
							set document(s) {
								throw new r.$ab("document");
							},
							get selection() {
								return u.c && u.c[0];
							},
							set selection(s) {
								if (!(s instanceof P.$qbb)) throw (0, r.$$)("selection");
								(u.c = [s]), u.l();
							},
							get selections() {
								return u.c;
							},
							set selections(s) {
								if (!Array.isArray(s) || s.some((f) => !(f instanceof P.$qbb)))
									throw (0, r.$$)("selections");
								(u.c = s), u.l();
							},
							get visibleRanges() {
								return u.e;
							},
							set visibleRanges(s) {
								throw new r.$ab("visibleRanges");
							},
							get options() {
								return u.d.value;
							},
							set options(s) {
								u.g || u.d.assign(s);
							},
							get viewColumn() {
								return u.f;
							},
							set viewColumn(s) {
								throw new r.$ab("viewColumn");
							},
							edit(s, f = { undoStopBefore: !0, undoStopAfter: !0 }) {
								if (u.g)
									return Promise.reject(
										new Error("TextEditor#edit not possible on closed editors"),
									);
								const o = new l(c.value, f);
								return s(o), u.m(o);
							},
							insertSnippet(
								s,
								f,
								o = { undoStopBefore: !0, undoStopAfter: !0 },
							) {
								if (u.g)
									return Promise.reject(
										new Error(
											"TextEditor#insertSnippet not possible on closed editors",
										),
									);
								let w;
								if (!f || (Array.isArray(f) && f.length === 0))
									w = u.c.map((m) => N.Range.from(m));
								else if (f instanceof P.$obb) {
									const { lineNumber: m, column: E } = N.Position.from(f);
									w = [
										{
											startLineNumber: m,
											startColumn: E,
											endLineNumber: m,
											endColumn: E,
										},
									];
								} else if (f instanceof P.$pbb) w = [N.Range.from(f)];
								else {
									w = [];
									for (const m of f)
										if (m instanceof P.$pbb) w.push(N.Range.from(m));
										else {
											const { lineNumber: E, column: R } = N.Position.from(m);
											w.push({
												startLineNumber: E,
												startColumn: R,
												endLineNumber: E,
												endColumn: R,
											});
										}
								}
								return k.$tryInsertSnippet(d, c.value.version, s.value, w, o);
							},
							setDecorations(s, f) {
								const o = f.length === 0;
								(o && !u.h.has(s.key)) ||
									(o ? u.h.delete(s.key) : u.h.add(s.key),
									u.n(() => {
										if (N.$g9(f))
											return k.$trySetDecorations(d, s.key, N.$h9(f));
										{
											const w = new Array(4 * f.length);
											for (let m = 0, E = f.length; m < E; m++) {
												const R = f[m];
												(w[4 * m] = R.start.line + 1),
													(w[4 * m + 1] = R.start.character + 1),
													(w[4 * m + 2] = R.end.line + 1),
													(w[4 * m + 3] = R.end.character + 1);
											}
											return k.$trySetDecorationsFast(d, s.key, w);
										}
									}));
							},
							revealRange(s, f) {
								u.n(() =>
									k.$tryRevealRange(
										d,
										N.Range.from(s),
										f || P.TextEditorRevealType.Default,
									),
								);
							},
							show(s) {
								k.$tryShowEditor(d, N.ViewColumn.from(s));
							},
							hide() {
								k.$tryHideEditor(d);
							},
							[Symbol.for("debug.description")]() {
								return `TextEditor(${this.document.uri.toString()})`;
							},
						});
					}
					dispose() {
						(0, e.ok)(!this.g), (this.g = !0);
					}
					_acceptOptions(d) {
						(0, e.ok)(!this.g), this.d._accept(d);
					}
					_acceptVisibleRanges(d) {
						(0, e.ok)(!this.g), (this.e = d);
					}
					_acceptViewColumn(d) {
						(0, e.ok)(!this.g), (this.f = d);
					}
					_acceptSelections(d) {
						(0, e.ok)(!this.g), (this.c = d);
					}
					async l() {
						const d = this.c.map(N.Selection.from);
						return (
							await this.n(() => this.j.$trySetSelections(this.id, d)),
							this.value
						);
					}
					m(d) {
						const k = d.finalize();
						if (k.edits.length === 0 && !k.setEndOfLine)
							return Promise.resolve(!0);
						const g = k.edits.map((h) => h.range);
						g.sort((h, $) =>
							h.end.line === $.end.line
								? h.end.character === $.end.character
									? h.start.line === $.start.line
										? h.start.character - $.start.character
										: h.start.line - $.start.line
									: h.end.character - $.end.character
								: h.end.line - $.end.line,
						);
						for (let h = 0, $ = g.length - 1; h < $; h++) {
							const T = g[h].end;
							if (g[h + 1].start.isBefore(T))
								return Promise.reject(
									new Error("Overlapping ranges are not allowed!"),
								);
						}
						const c = k.edits.map((h) => ({
							range: N.Range.from(h.range),
							text: h.text,
							forceMoveMarkers: h.forceMoveMarkers,
						}));
						return this.j.$tryApplyEdits(this.id, k.documentVersionId, c, {
							setEndOfLine:
								typeof k.setEndOfLine == "number"
									? N.EndOfLine.from(k.setEndOfLine)
									: void 0,
							undoStopBefore: k.undoStopBefore,
							undoStopAfter: k.undoStopAfter,
						});
					}
					n(d) {
						return this.g
							? (this.k.warn("TextEditor is closed/disposed"),
								Promise.resolve(void 0))
							: d().then(
									() => this,
									(k) => (
										(k instanceof Error && k.name === "DISPOSED") ||
											this.k.warn(k),
										null
									),
								);
					}
				}
				t.$Vdb = p;
			},
		),
		