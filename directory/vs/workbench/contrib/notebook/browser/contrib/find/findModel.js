import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/arraysFind.js';
import '../../../../../../base/common/async.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../editor/common/core/range.js';
import '../../../../../../editor/common/model/prefixSumComputer.js';
import '../../../../../../platform/configuration/common/configuration.js';
import './findMatchDecorationModel.js';
import '../../notebookBrowser.js';
import '../../../common/notebookCommon.js';
define(
			de[1030],
			he([1, 0, 214, 15, 3, 17, 589, 10, 1844, 108, 70]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arraysFind*/,
 i /*async*/,
 w /*lifecycle*/,
 E /*range*/,
 C /*prefixSumComputer*/,
 d /*configuration*/,
 m /*findMatchDecorationModel*/,
 r /*notebookBrowser*/,
 u /*notebookCommon*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$p2b = e.$o2b = void 0);
				class a {
					get length() {
						return this.a.length + this.b.length;
					}
					get contentMatches() {
						return this.a;
					}
					get webviewMatches() {
						return this.b;
					}
					constructor(n, g, p, o) {
						(this.cell = n), (this.index = g), (this.a = p), (this.b = o);
					}
					getMatch(n) {
						if (n >= this.length)
							throw new Error("NotebookCellFindMatch: index out of range");
						return n < this.a.length ? this.a[n] : this.b[n - this.a.length];
					}
				}
				e.$o2b = a;
				let h = class extends w.$1c {
					get findMatches() {
						return this.a;
					}
					get currentMatch() {
						return this.f;
					}
					constructor(n, g, p) {
						super(),
							(this.q = n),
							(this.r = g),
							(this.s = p),
							(this.a = []),
							(this.b = null),
							(this.f = -1),
							(this.h = null),
							(this.j = this.D(new w.$Zc())),
							(this.g = new i.$Jh(20)),
							(this.h = null),
							this.D(
								g.onFindReplaceStateChange((o) => {
									this.t(o),
										(o.searchString ||
											o.isRegex ||
											o.matchCase ||
											o.searchScope ||
											o.wholeWord ||
											(o.isRevealed && this.r.isRevealed) ||
											o.filters ||
											o.isReplaceRevealed) &&
											this.research(),
										o.isRevealed && !this.r.isRevealed && this.clear();
								}),
							),
							this.D(
								this.q.onDidChangeModel((o) => {
									this.w(o);
								}),
							),
							this.D(
								this.q.onDidChangeCellState((o) => {
									o.cell.cellKind === u.CellKind.Markup &&
										o.source.editStateChanged &&
										this.research();
								}),
							),
							this.q.hasModel() && this.w(this.q.textModel),
							(this.n = new m.$n2b(this.q, this.q.getId()));
					}
					t(n) {
						if (
							!this.r.filters?.markupInput ||
							!this.r.filters?.markupPreview ||
							!this.r.filters?.findScope
						)
							return;
						const g = () => {
							const p = this.q.getViewModel();
							if (!p) return;
							const o = this.s.inspect("editor.wordSeparators").value,
								f = {
									regex: this.r.isRegex,
									wholeWord: this.r.wholeWord,
									caseSensitive: this.r.matchCase,
									wordSeparators: o,
									includeMarkupInput: !0,
									includeCodeInput: !1,
									includeMarkupPreview: !1,
									includeOutput: !1,
									findScope: this.r.filters?.findScope,
								},
								b = p.find(this.r.searchString, f);
							for (let s = 0; s < p.length; s++) {
								const l = p.cellAt(s);
								if (l && l.cellKind === u.CellKind.Markup) {
									const $ = b.find(
											(S) =>
												S.cell.handle === l.handle &&
												S.contentMatches.length > 0,
										)
											? r.CellEditState.Editing
											: r.CellEditState.Preview,
										v = l.getEditState();
									if (
										v === r.CellEditState.Editing &&
										l.editStateSource !== "find"
									)
										continue;
									v !== $ && l.updateEditState($, "find");
								}
							}
						};
						if (n.isReplaceRevealed && !this.r.isReplaceRevealed) {
							const p = this.q.getViewModel();
							if (!p) return;
							for (let o = 0; o < p.length; o++) {
								const f = p.cellAt(o);
								f &&
									f.cellKind === u.CellKind.Markup &&
									f.getEditState() === r.CellEditState.Editing &&
									f.editStateSource === "find" &&
									f.updateEditState(r.CellEditState.Preview, "find");
							}
							return;
						}
						(n.isReplaceRevealed ||
							((n.filters ||
								n.isRevealed ||
								n.searchString ||
								n.replaceString) &&
								this.r.isRevealed &&
								this.r.isReplaceRevealed)) &&
							g();
					}
					ensureFindMatches() {
						this.b || this.y(this.a, !0);
					}
					getCurrentMatch() {
						const n = this.b.getIndexOf(this.f),
							g = this.a[n.index].cell,
							p = this.a[n.index].getMatch(n.remainder);
						return {
							cell: g,
							match: p,
							isModelMatch: n.remainder < this.a[n.index].contentMatches.length,
						};
					}
					refreshCurrentMatch(n) {
						const g = this.findMatches.findIndex((b) => b.cell === n.cell);
						if (g === -1) return;
						const o = this.findMatches[g].contentMatches.findIndex(
							(b) => b.range.intersectRanges(n.range) !== null,
						);
						if (o === void 0) return;
						const f = g === 0 ? 0 : (this.b?.getPrefixSum(g - 1) ?? 0);
						(this.f = f + o),
							this.H(g, o).then((b) => {
								this.u(g, o, b),
									this.r.changeMatchInfo(
										this.f,
										this.a.reduce((s, l) => s + l.length, 0),
										void 0,
									);
							});
					}
					find(n) {
						if (!this.findMatches.length) return;
						if (!this.b) this.y(this.a, !0), "index" in n && (this.f = n.index);
						else {
							const p = this.b.getTotalSum();
							if ("index" in n) this.f = n.index;
							else if (this.f === -1) this.f = n.previous ? p - 1 : 0;
							else {
								const o = (this.f + (n.previous ? -1 : 1) + p) % p;
								this.f = o;
							}
						}
						const g = this.b.getIndexOf(this.f);
						this.H(g.index, g.remainder).then((p) => {
							this.u(g.index, g.remainder, p),
								this.r.changeMatchInfo(
									this.f,
									this.a.reduce((o, f) => o + f.length, 0),
									void 0,
								);
						});
					}
					u(n, g, p) {
						const o = this.a[n];
						if (g >= o.contentMatches.length)
							this.q.focusElement(o.cell),
								this.q.getCellIndex(o.cell) !== void 0 &&
									this.q.revealCellOffsetInCenter(o.cell, p ?? 0);
						else {
							const f = o.getMatch(g);
							o.cell.getEditState() !== r.CellEditState.Editing &&
								o.cell.updateEditState(r.CellEditState.Editing, "find"),
								(o.cell.isInputCollapsed = !1),
								this.q.focusElement(o.cell),
								this.q.setCellEditorSelection(o.cell, f.range),
								this.q.revealRangeInCenterIfOutsideViewportAsync(
									o.cell,
									f.range,
								);
						}
					}
					w(n) {
						this.j.clear(),
							n &&
								this.j.add(
									n.onDidChangeContent((g) => {
										g.rawEvents.some(
											(p) =>
												p.kind ===
													u.NotebookCellsChangeType.ChangeCellContent ||
												p.kind === u.NotebookCellsChangeType.ModelChange,
										) && this.research();
									}),
								),
							this.research();
					}
					async research() {
						return this.g.trigger(async () => {
							this.r.change({ isSearching: !0 }, !1),
								await this._research(),
								this.r.change({ isSearching: !1 }, !1);
						});
					}
					async _research() {
						if ((this.h?.cancel(), !this.r.isRevealed || !this.q.hasModel())) {
							this.y([], !1);
							return;
						}
						this.h = (0, i.$zh)((s) => this.z(s));
						const n = await this.h;
						if (!n) {
							this.y([], !1);
							return;
						}
						if (n.length === 0) {
							this.y([], !1);
							return;
						}
						const g = (s) => {
							const l = (0, t.$ob)(
								n.map((y) => y.index),
								(y) => y >= s,
							);
							this.C(n, this.F(n, l));
						};
						if (this.f === -1)
							if (this.q.getLength() === 0) {
								this.y(n, !1);
								return;
							} else {
								const s = this.q.getFocus().start;
								g(s), this.y(n, !1);
								return;
							}
						const p = this.b.getIndexOf(this.f),
							o = this.a[p.index].cell,
							f = this.q.getCellIndex(o);
						if (f < 0) {
							if (this.q.getLength() === 0) {
								this.y(n, !1);
								return;
							}
							g(f);
							return;
						}
						const b = this.q.cellAt(f);
						if (
							b.cellKind === u.CellKind.Markup &&
							b.getEditState() === r.CellEditState.Preview
						) {
							g(f);
							return;
						}
						if (!this.n.currentMatchDecorations) {
							g(f);
							return;
						}
						if (this.n.currentMatchDecorations.kind === "input") {
							const s = this.n.currentMatchDecorations.decorations.find(
								(y) => y.ownerId === b.handle,
							);
							if (!s) {
								g(f);
								return;
							}
							const l = (0, t.$ob)(n, (y) => y.index >= f) % n.length;
							if (n[l].index > f) {
								this.C(n, this.F(n, l));
								return;
							} else {
								let y =
									b.editorAttached && s.decorations[0]
										? b.getCellDecorationRange(s.decorations[0])
										: null;
								if (
									(y === null &&
										p.remainder < this.a[p.index].contentMatches.length &&
										(y = this.a[p.index].getMatch(p.remainder).range),
									y !== null)
								) {
									const $ = n[l],
										v = (0, t.$ob)(
											$.contentMatches,
											(S) => E.$iL.compareRangesUsingStarts(S.range, y) >= 0,
										);
									this.C(n, this.F(n, l) + v);
								} else {
									this.C(n, this.F(n, l));
									return;
								}
							}
						} else {
							const s =
								(0, t.$ob)(
									n.map((l) => l.index),
									(l) => l >= f,
								) % n.length;
							this.C(n, this.F(n, s));
						}
					}
					y(n, g) {
						if (!n || !n.length) {
							(this.a = []),
								this.n.setAllFindMatchesDecorations([]),
								this.G(),
								(this.f = -1),
								this.n.clearCurrentFindMatchDecoration(),
								this.r.changeMatchInfo(
									this.f,
									this.a.reduce((p, o) => p + o.length, 0),
									void 0,
								);
							return;
						}
						(this.a = n),
							this.n.setAllFindMatchesDecorations(n || []),
							this.G(),
							g && ((this.f = 0), this.H(0, 0)),
							this.r.changeMatchInfo(
								this.f,
								this.a.reduce((p, o) => p + o.length, 0),
								void 0,
							);
					}
					async z(n) {
						if (!this.q.hasModel()) return null;
						let g = null;
						const p = this.r.searchString,
							o = this.s.inspect("editor.wordSeparators").value,
							f = {
								regex: this.r.isRegex,
								wholeWord: this.r.wholeWord,
								caseSensitive: this.r.matchCase,
								wordSeparators: o,
								includeMarkupInput: this.r.filters?.markupInput ?? !0,
								includeCodeInput: this.r.filters?.codeInput ?? !0,
								includeMarkupPreview: !!this.r.filters?.markupPreview,
								includeOutput: !!this.r.filters?.codeOutput,
								findScope: this.r.filters?.findScope,
							};
						return (
							(g = await this.q.find(p, f, n)),
							n.isCancellationRequested ? null : g
						);
					}
					C(n, g) {
						(this.f = g % n.length), this.y(n, !1);
						const p = this.b.getIndexOf(this.f);
						this.H(p.index, p.remainder),
							this.r.changeMatchInfo(
								this.f,
								this.a.reduce((o, f) => o + f.length, 0),
								void 0,
							);
					}
					F(n, g) {
						let p = 0;
						for (let o = 0; o < g; o++) p += n[o].length;
						return p;
					}
					G() {
						if (this.a && this.a.length) {
							const n = new Uint32Array(this.a.length);
							for (let g = 0; g < this.a.length; g++) n[g] = this.a[g].length;
							this.b = new C.$WN(n);
						} else this.b = null;
					}
					async H(n, g) {
						const p = this.a[n].cell,
							o = this.a[n].getMatch(g);
						return g < this.a[n].contentMatches.length
							? this.n.highlightCurrentFindMatchDecorationInCell(p, o.range)
							: this.n.highlightCurrentFindMatchDecorationInWebview(p, o.index);
					}
					clear() {
						this.h?.cancel(), this.g.cancel(), this.y([], !1);
					}
					dispose() {
						this.n.dispose(), super.dispose();
					}
				};
				(e.$p2b = h), (e.$p2b = h = Ne([j(2, d.$gj)], h));
			},
		)
