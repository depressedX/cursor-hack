define(
			de[1788],
			he([
				1, 0, 127, 15, 27, 3, 210, 46, 38, 248, 1193, 17, 104, 98, 71, 618, 786,
				4, 11, 8, 43, 69, 1695, 5,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
			) {
				"use strict";
				var v;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xjc =
						e.$wjc =
						e.$vjc =
						e.$ujc =
						e.$tjc =
						e.$sjc =
						e.$rjc =
						e.$qjc =
						e.$pjc =
						e.$ojc =
						e.$njc =
						e.$mjc =
						e.$ljc =
						e.$kjc =
						e.$jjc =
							void 0),
					(o = mt(o));
				function S(J, W) {
					const X = W.filter((Y) => !J.find((ie) => ie.equals(Y)));
					if (X.length >= 1) {
						const Y = X.map(
								(ne) =>
									`line ${ne.viewState.position.lineNumber} column ${ne.viewState.position.column}`,
							).join(", "),
							ie =
								X.length === 1
									? o.localize(1315, null, Y)
									: o.localize(1316, null, Y);
						(0, t.$pib)(ie);
					}
				}
				class I extends d.$itb {
					constructor() {
						super({
							id: "editor.action.insertCursorAbove",
							label: o.localize(1317, null),
							alias: "Add Cursor Above",
							precondition: void 0,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: w.KeyMod.CtrlCmd | w.KeyMod.Alt | w.KeyCode.UpArrow,
								linux: {
									primary: w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.UpArrow,
									secondary: [
										w.KeyMod.CtrlCmd | w.KeyMod.Shift | w.KeyCode.UpArrow,
									],
								},
								weight: s.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: f.$XX.MenubarSelectionMenu,
								group: "3_multi",
								title: o.localize(1318, null),
								order: 2,
							},
						});
					}
					run(W, X, Y) {
						if (!X.hasModel()) return;
						let ie = !0;
						Y && Y.logicalLine === !1 && (ie = !1);
						const ne = X._getViewModel();
						if (ne.cursorConfig.readOnly) return;
						ne.model.pushStackElement();
						const ee = ne.getCursorStates();
						ne.setCursorStates(
							Y.source,
							r.CursorChangeReason.Explicit,
							u.$Htb.addCursorUp(ne, ee, ie),
						),
							ne.revealTopMostCursor(Y.source),
							S(ee, ne.getCursorStates());
					}
				}
				e.$jjc = I;
				class T extends d.$itb {
					constructor() {
						super({
							id: "editor.action.insertCursorBelow",
							label: o.localize(1319, null),
							alias: "Add Cursor Below",
							precondition: void 0,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: w.KeyMod.CtrlCmd | w.KeyMod.Alt | w.KeyCode.DownArrow,
								linux: {
									primary: w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.DownArrow,
									secondary: [
										w.KeyMod.CtrlCmd | w.KeyMod.Shift | w.KeyCode.DownArrow,
									],
								},
								weight: s.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: f.$XX.MenubarSelectionMenu,
								group: "3_multi",
								title: o.localize(1320, null),
								order: 3,
							},
						});
					}
					run(W, X, Y) {
						if (!X.hasModel()) return;
						let ie = !0;
						Y && Y.logicalLine === !1 && (ie = !1);
						const ne = X._getViewModel();
						if (ne.cursorConfig.readOnly) return;
						ne.model.pushStackElement();
						const ee = ne.getCursorStates();
						ne.setCursorStates(
							Y.source,
							r.CursorChangeReason.Explicit,
							u.$Htb.addCursorDown(ne, ee, ie),
						),
							ne.revealBottomMostCursor(Y.source),
							S(ee, ne.getCursorStates());
					}
				}
				e.$kjc = T;
				class P extends d.$itb {
					constructor() {
						super({
							id: "editor.action.insertCursorAtEndOfEachLineSelected",
							label: o.localize(1321, null),
							alias: "Add Cursors to Line Ends",
							precondition: void 0,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: w.KeyMod.Shift | w.KeyMod.Alt | w.KeyCode.KeyI,
								weight: s.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: f.$XX.MenubarSelectionMenu,
								group: "3_multi",
								title: o.localize(1322, null),
								order: 4,
							},
						});
					}
					d(W, X, Y) {
						if (!W.isEmpty()) {
							for (let ie = W.startLineNumber; ie < W.endLineNumber; ie++) {
								const ne = X.getLineMaxColumn(ie);
								Y.push(new h.$kL(ie, ne, ie, ne));
							}
							W.endColumn > 1 &&
								Y.push(
									new h.$kL(
										W.endLineNumber,
										W.endColumn,
										W.endLineNumber,
										W.endColumn,
									),
								);
						}
					}
					run(W, X) {
						if (!X.hasModel()) return;
						const Y = X.getModel(),
							ie = X.getSelections(),
							ne = X._getViewModel(),
							ee = ne.getCursorStates(),
							_ = [];
						ie.forEach((te) => this.d(te, Y, _)),
							_.length > 0 && X.setSelections(_),
							S(ee, ne.getCursorStates());
					}
				}
				class k extends d.$itb {
					constructor() {
						super({
							id: "editor.action.addCursorsToBottom",
							label: o.localize(1323, null),
							alias: "Add Cursors To Bottom",
							precondition: void 0,
						});
					}
					run(W, X) {
						if (!X.hasModel()) return;
						const Y = X.getSelections(),
							ie = X.getModel().getLineCount(),
							ne = [];
						for (let te = Y[0].startLineNumber; te <= ie; te++)
							ne.push(new h.$kL(te, Y[0].startColumn, te, Y[0].endColumn));
						const ee = X._getViewModel(),
							_ = ee.getCursorStates();
						ne.length > 0 && X.setSelections(ne), S(_, ee.getCursorStates());
					}
				}
				class L extends d.$itb {
					constructor() {
						super({
							id: "editor.action.addCursorsToTop",
							label: o.localize(1324, null),
							alias: "Add Cursors To Top",
							precondition: void 0,
						});
					}
					run(W, X) {
						if (!X.hasModel()) return;
						const Y = X.getSelections(),
							ie = [];
						for (let _ = Y[0].startLineNumber; _ >= 1; _--)
							ie.push(new h.$kL(_, Y[0].startColumn, _, Y[0].endColumn));
						const ne = X._getViewModel(),
							ee = ne.getCursorStates();
						ie.length > 0 && X.setSelections(ie), S(ee, ne.getCursorStates());
					}
				}
				class D {
					constructor(W, X, Y) {
						(this.selections = W),
							(this.revealRange = X),
							(this.revealScrollType = Y);
					}
				}
				e.$ljc = D;
				class M {
					static create(W, X) {
						if (!W.hasModel()) return null;
						const Y = X.getState();
						if (!W.hasTextFocus() && Y.isRevealed && Y.searchString.length > 0)
							return new M(
								W,
								X,
								!1,
								Y.searchString,
								Y.wholeWord,
								Y.matchCase,
								null,
							);
						let ie = !1,
							ne,
							ee;
						const _ = W.getSelections();
						_.length === 1 && _[0].isEmpty()
							? ((ie = !0), (ne = !0), (ee = !0))
							: ((ne = Y.wholeWord), (ee = Y.matchCase));
						const te = W.getSelection();
						let Q,
							Z = null;
						if (te.isEmpty()) {
							const se = W.getConfiguredWordAtPosition(te.getStartPosition());
							if (!se) return null;
							(Q = se.word),
								(Z = new h.$kL(
									te.startLineNumber,
									se.startColumn,
									te.startLineNumber,
									se.endColumn,
								));
						} else
							Q = W.getModel()
								.getValueInRange(te)
								.replace(
									/\r\n/g,
									`
`,
								);
						return new M(W, X, ie, Q, ne, ee, Z);
					}
					constructor(W, X, Y, ie, ne, ee, _) {
						(this.a = W),
							(this.findController = X),
							(this.isDisconnectedFromFindController = Y),
							(this.searchText = ie),
							(this.wholeWord = ne),
							(this.matchCase = ee),
							(this.currentMatch = _);
					}
					addSelectionToNextFindMatch() {
						if (!this.a.hasModel()) return null;
						const W = this.b();
						if (!W) return null;
						const X = this.a.getSelections();
						return new D(X.concat(W), W, c.ScrollType.Smooth);
					}
					moveSelectionToNextFindMatch() {
						if (!this.a.hasModel()) return null;
						const W = this.b();
						if (!W) return null;
						const X = this.a.getSelections();
						return new D(
							X.slice(0, X.length - 1).concat(W),
							W,
							c.ScrollType.Smooth,
						);
					}
					b() {
						if (!this.a.hasModel()) return null;
						if (this.currentMatch) {
							const ie = this.currentMatch;
							return (this.currentMatch = null), ie;
						}
						this.findController.highlightFindOptions();
						const W = this.a.getSelections(),
							X = W[W.length - 1],
							Y = this.a
								.getModel()
								.findNextMatch(
									this.searchText,
									X.getEndPosition(),
									!1,
									this.matchCase,
									this.wholeWord
										? this.a.getOption(m.EditorOption.wordSeparators)
										: null,
									!1,
								);
						return Y
							? new h.$kL(
									Y.range.startLineNumber,
									Y.range.startColumn,
									Y.range.endLineNumber,
									Y.range.endColumn,
								)
							: null;
					}
					addSelectionToPreviousFindMatch() {
						if (!this.a.hasModel()) return null;
						const W = this.c();
						if (!W) return null;
						const X = this.a.getSelections();
						return new D(X.concat(W), W, c.ScrollType.Smooth);
					}
					moveSelectionToPreviousFindMatch() {
						if (!this.a.hasModel()) return null;
						const W = this.c();
						if (!W) return null;
						const X = this.a.getSelections();
						return new D(
							X.slice(0, X.length - 1).concat(W),
							W,
							c.ScrollType.Smooth,
						);
					}
					c() {
						if (!this.a.hasModel()) return null;
						if (this.currentMatch) {
							const ie = this.currentMatch;
							return (this.currentMatch = null), ie;
						}
						this.findController.highlightFindOptions();
						const W = this.a.getSelections(),
							X = W[W.length - 1],
							Y = this.a
								.getModel()
								.findPreviousMatch(
									this.searchText,
									X.getStartPosition(),
									!1,
									this.matchCase,
									this.wholeWord
										? this.a.getOption(m.EditorOption.wordSeparators)
										: null,
									!1,
								);
						return Y
							? new h.$kL(
									Y.range.startLineNumber,
									Y.range.startColumn,
									Y.range.endLineNumber,
									Y.range.endColumn,
								)
							: null;
					}
					selectAll(W) {
						if (!this.a.hasModel()) return [];
						this.findController.highlightFindOptions();
						const X = this.a.getModel();
						return W
							? X.findMatches(
									this.searchText,
									W,
									!1,
									this.matchCase,
									this.wholeWord
										? this.a.getOption(m.EditorOption.wordSeparators)
										: null,
									!1,
									C.Constants.MAX_SAFE_SMALL_INTEGER,
								)
							: X.findMatches(
									this.searchText,
									!0,
									!1,
									this.matchCase,
									this.wholeWord
										? this.a.getOption(m.EditorOption.wordSeparators)
										: null,
									!1,
									C.Constants.MAX_SAFE_SMALL_INTEGER,
								);
					}
				}
				e.$mjc = M;
				class N extends E.$1c {
					static {
						this.ID = "editor.contrib.multiCursorController";
					}
					static get(W) {
						return W.getContribution(N.ID);
					}
					constructor(W) {
						super(),
							(this.f = this.D(new E.$Zc())),
							(this.a = W),
							(this.b = !1),
							(this.c = null);
					}
					dispose() {
						this.h(), super.dispose();
					}
					g(W) {
						if (!this.c) {
							const X = M.create(this.a, W);
							if (!X) return;
							this.c = X;
							const Y = { searchString: this.c.searchText };
							this.c.isDisconnectedFromFindController &&
								((Y.wholeWordOverride = p.FindOptionOverride.True),
								(Y.matchCaseOverride = p.FindOptionOverride.True),
								(Y.isRegexOverride = p.FindOptionOverride.False)),
								W.getState().change(Y, !1),
								this.f.add(
									this.a.onDidChangeCursorSelection((ie) => {
										this.b || this.h();
									}),
								),
								this.f.add(
									this.a.onDidBlurEditorText(() => {
										this.h();
									}),
								),
								this.f.add(
									W.getState().onFindReplaceStateChange((ie) => {
										(ie.matchCase || ie.wholeWord) && this.h();
									}),
								);
						}
					}
					h() {
						if (
							(this.f.clear(),
							this.c && this.c.isDisconnectedFromFindController)
						) {
							const W = {
								wholeWordOverride: p.FindOptionOverride.NotSet,
								matchCaseOverride: p.FindOptionOverride.NotSet,
								isRegexOverride: p.FindOptionOverride.NotSet,
							};
							this.c.findController.getState().change(W, !1);
						}
						this.c = null;
					}
					n(W) {
						(this.b = !0), this.a.setSelections(W), (this.b = !1);
					}
					q(W, X) {
						if (!X.isEmpty()) return X;
						const Y = this.a.getConfiguredWordAtPosition(X.getStartPosition());
						return Y
							? new h.$kL(
									X.startLineNumber,
									Y.startColumn,
									X.startLineNumber,
									Y.endColumn,
								)
							: X;
					}
					t(W) {
						W &&
							(this.n(W.selections),
							W.revealRange &&
								this.a.revealRangeInCenterIfOutsideViewport(
									W.revealRange,
									W.revealScrollType,
								));
					}
					getSession(W) {
						return this.c;
					}
					addSelectionToNextFindMatch(W) {
						if (this.a.hasModel()) {
							if (!this.c) {
								const X = this.a.getSelections();
								if (X.length > 1) {
									const ie = W.getState().matchCase;
									if (!q(this.a.getModel(), X, ie)) {
										const ee = this.a.getModel(),
											_ = [];
										for (let te = 0, Q = X.length; te < Q; te++)
											_[te] = this.q(ee, X[te]);
										this.a.setSelections(_);
										return;
									}
								}
							}
							this.g(W), this.c && this.t(this.c.addSelectionToNextFindMatch());
						}
					}
					addSelectionToPreviousFindMatch(W) {
						this.g(W),
							this.c && this.t(this.c.addSelectionToPreviousFindMatch());
					}
					moveSelectionToNextFindMatch(W) {
						this.g(W), this.c && this.t(this.c.moveSelectionToNextFindMatch());
					}
					moveSelectionToPreviousFindMatch(W) {
						this.g(W),
							this.c && this.t(this.c.moveSelectionToPreviousFindMatch());
					}
					selectAll(W) {
						if (!this.a.hasModel()) return;
						let X = null;
						const Y = W.getState();
						if (Y.isRevealed && Y.searchString.length > 0 && Y.isRegex) {
							const ie = this.a.getModel();
							Y.searchScope
								? (X = ie.findMatches(
										Y.searchString,
										Y.searchScope,
										Y.isRegex,
										Y.matchCase,
										Y.wholeWord
											? this.a.getOption(m.EditorOption.wordSeparators)
											: null,
										!1,
										C.Constants.MAX_SAFE_SMALL_INTEGER,
									))
								: (X = ie.findMatches(
										Y.searchString,
										!0,
										Y.isRegex,
										Y.matchCase,
										Y.wholeWord
											? this.a.getOption(m.EditorOption.wordSeparators)
											: null,
										!1,
										C.Constants.MAX_SAFE_SMALL_INTEGER,
									));
						} else {
							if ((this.g(W), !this.c)) return;
							X = this.c.selectAll(Y.searchScope);
						}
						if (X.length > 0) {
							const ie = this.a.getSelection();
							for (let ne = 0, ee = X.length; ne < ee; ne++) {
								const _ = X[ne];
								if (_.range.intersectRanges(ie)) {
									(X[ne] = X[0]), (X[0] = _);
									break;
								}
							}
							this.n(
								X.map(
									(ne) =>
										new h.$kL(
											ne.range.startLineNumber,
											ne.range.startColumn,
											ne.range.endLineNumber,
											ne.range.endColumn,
										),
								),
							);
						}
					}
					selectAllUsingSelections(W) {
						W.length > 0 && this.n(W);
					}
				}
				e.$njc = N;
				class A extends d.$itb {
					run(W, X) {
						const Y = N.get(X);
						if (!Y) return;
						const ie = X._getViewModel();
						if (ie) {
							const ne = ie.getCursorStates(),
								ee = g.$ufc.get(X);
							if (ee) this.d(Y, ee);
							else {
								const _ = W.get($.$Li).createInstance(g.$ufc, X);
								this.d(Y, _), _.dispose();
							}
							S(ne, ie.getCursorStates());
						}
					}
				}
				e.$ojc = A;
				class R extends A {
					constructor() {
						super({
							id: "editor.action.addSelectionToNextFindMatch",
							label: o.localize(1325, null),
							alias: "Add Selection To Next Find Match",
							precondition: void 0,
							kbOpts: {
								kbExpr: n.EditorContextKeys.focus,
								primary: w.KeyMod.CtrlCmd | w.KeyCode.KeyD,
								weight: s.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: f.$XX.MenubarSelectionMenu,
								group: "3_multi",
								title: o.localize(1326, null),
								order: 5,
							},
						});
					}
					d(W, X) {
						W.addSelectionToNextFindMatch(X);
					}
				}
				e.$pjc = R;
				class O extends A {
					constructor() {
						super({
							id: "editor.action.addSelectionToPreviousFindMatch",
							label: o.localize(1327, null),
							alias: "Add Selection To Previous Find Match",
							precondition: void 0,
							menuOpts: {
								menuId: f.$XX.MenubarSelectionMenu,
								group: "3_multi",
								title: o.localize(1328, null),
								order: 6,
							},
						});
					}
					d(W, X) {
						W.addSelectionToPreviousFindMatch(X);
					}
				}
				e.$qjc = O;
				class B extends A {
					constructor() {
						super({
							id: "editor.action.moveSelectionToNextFindMatch",
							label: o.localize(1329, null),
							alias: "Move Last Selection To Next Find Match",
							precondition: void 0,
							kbOpts: {
								kbExpr: n.EditorContextKeys.focus,
								primary: (0, w.$os)(w.$ps, w.KeyMod.CtrlCmd | w.KeyCode.KeyD),
								mac: {
									primary: (0, w.$os)(w.$qs, w.KeyMod.CtrlCmd | w.KeyCode.KeyD),
								},
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
					d(W, X) {
						W.moveSelectionToNextFindMatch(X);
					}
				}
				e.$rjc = B;
				class U extends A {
					constructor() {
						super({
							id: "editor.action.moveSelectionToPreviousFindMatch",
							label: o.localize(1330, null),
							alias: "Move Last Selection To Previous Find Match",
							precondition: void 0,
						});
					}
					d(W, X) {
						W.moveSelectionToPreviousFindMatch(X);
					}
				}
				e.$sjc = U;
				class z extends A {
					constructor() {
						super({
							id: "editor.action.selectHighlights",
							label: o.localize(1331, null),
							alias: "Select All Occurrences of Find Match",
							precondition: void 0,
							kbOpts: {
								kbExpr: n.EditorContextKeys.focus,
								primary: w.KeyMod.CtrlCmd | w.KeyMod.Shift | w.KeyCode.KeyL,
								weight: s.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: f.$XX.MenubarSelectionMenu,
								group: "3_multi",
								title: o.localize(1332, null),
								order: 7,
							},
						});
					}
					d(W, X) {
						W.selectAll(X);
					}
				}
				e.$tjc = z;
				class F extends A {
					constructor() {
						super({
							id: "editor.action.changeAll",
							label: o.localize(1333, null),
							alias: "Change All Occurrences",
							precondition: b.$Kj.and(
								n.EditorContextKeys.writable,
								n.EditorContextKeys.editorTextFocus,
							),
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: w.KeyMod.CtrlCmd | w.KeyCode.F2,
								weight: s.KeybindingWeight.EditorContrib,
							},
							contextMenuOpts: { group: "1_modification", order: 1.2 },
						});
					}
					d(W, X) {
						W.selectAll(X);
					}
				}
				e.$ujc = F;
				class x {
					constructor(W, X, Y, ie, ne) {
						(this.c = W),
							(this.d = X),
							(this.f = Y),
							(this.g = ie),
							(this.a = this.c.getVersionId()),
							(this.b = null),
							ne &&
								this.c === ne.c &&
								this.d === ne.d &&
								this.f === ne.f &&
								this.g === ne.g &&
								this.a === ne.a &&
								(this.b = ne.b);
					}
					findMatches() {
						return (
							this.b === null &&
								((this.b = this.c
									.findMatches(this.d, !0, !1, this.f, this.g, !1)
									.map((W) => W.range)),
								this.b.sort(a.$iL.compareRangesUsingStarts)),
							this.b
						);
					}
				}
				let H = class extends E.$1c {
					static {
						v = this;
					}
					static {
						this.ID = "editor.contrib.selectionHighlighter";
					}
					constructor(W, X) {
						super(),
							(this.h = X),
							(this.a = W),
							(this.b = W.getOption(m.EditorOption.selectionHighlight)),
							(this.c = W.createDecorationsCollection()),
							(this.f = this.D(new i.$Yh(() => this.n(), 300))),
							(this.g = null),
							this.D(
								W.onDidChangeConfiguration((ie) => {
									this.b = W.getOption(m.EditorOption.selectionHighlight);
								}),
							),
							this.D(
								W.onDidChangeCursorSelection((ie) => {
									this.b &&
										(ie.selection.isEmpty()
											? ie.reason === r.CursorChangeReason.Explicit
												? (this.g && this.t(null), this.f.schedule())
												: this.t(null)
											: this.n());
								}),
							),
							this.D(
								W.onDidChangeModel((ie) => {
									this.t(null);
								}),
							),
							this.D(
								W.onDidChangeModelContent((ie) => {
									this.b && this.f.schedule();
								}),
							);
						const Y = g.$ufc.get(W);
						Y &&
							this.D(
								Y.getState().onFindReplaceStateChange((ie) => {
									this.n();
								}),
							),
							this.f.schedule();
					}
					n() {
						this.t(v.q(this.g, this.b, this.a));
					}
					static q(W, X, Y) {
						if (!X || !Y.hasModel()) return null;
						const ie = Y.getSelection();
						if (ie.startLineNumber !== ie.endLineNumber) return null;
						const ne = N.get(Y);
						if (!ne) return null;
						const ee = g.$ufc.get(Y);
						if (!ee) return null;
						let _ = ne.getSession(ee);
						if (!_) {
							const Z = Y.getSelections();
							if (Z.length > 1) {
								const re = ee.getState().matchCase;
								if (!q(Y.getModel(), Z, re)) return null;
							}
							_ = M.create(Y, ee);
						}
						if (
							!_ ||
							_.currentMatch ||
							/^[ \t]+$/.test(_.searchText) ||
							_.searchText.length > 200
						)
							return null;
						const te = ee.getState(),
							Q = te.matchCase;
						if (te.isRevealed) {
							let Z = te.searchString;
							Q || (Z = Z.toLowerCase());
							let se = _.searchText;
							if (
								(Q || (se = se.toLowerCase()),
								Z === se &&
									_.matchCase === te.matchCase &&
									_.wholeWord === te.wholeWord &&
									!te.isRegex)
							)
								return null;
						}
						return new x(
							Y.getModel(),
							_.searchText,
							_.matchCase,
							_.wholeWord ? Y.getOption(m.EditorOption.wordSeparators) : null,
							W,
						);
					}
					t(W) {
						if (((this.g = W), !this.g)) {
							this.c.clear();
							return;
						}
						if (!this.a.hasModel()) return;
						const X = this.a.getModel();
						if (X.isTooLargeForTokenization()) return;
						const Y = this.g.findMatches(),
							ie = this.a.getSelections();
						ie.sort(a.$iL.compareRangesUsingStarts);
						const ne = [];
						for (let Q = 0, Z = 0, se = Y.length, re = ie.length; Q < se; ) {
							const le = Y[Q];
							if (Z >= re) ne.push(le), Q++;
							else {
								const oe = a.$iL.compareRangesUsingStarts(le, ie[Z]);
								oe < 0
									? ((ie[Z].isEmpty() || !a.$iL.areIntersecting(le, ie[Z])) &&
											ne.push(le),
										Q++)
									: (oe > 0 || Q++, Z++);
							}
						}
						const ee =
								this.a.getOption(m.EditorOption.occurrencesHighlight) !== "off",
							_ = this.h.documentHighlightProvider.has(X) && ee,
							te = ne.map((Q) => ({ range: Q, options: (0, y.$nPb)(_) }));
						this.c.set(te);
					}
					dispose() {
						this.t(null), super.dispose();
					}
				};
				(e.$vjc = H), (e.$vjc = H = v = Ne([j(1, l.$k3)], H));
				function q(J, W, X) {
					const Y = V(J, W[0], !X);
					for (let ie = 1, ne = W.length; ie < ne; ie++) {
						const ee = W[ie];
						if (ee.isEmpty()) return !1;
						const _ = V(J, ee, !X);
						if (Y !== _) return !1;
					}
					return !0;
				}
				function V(J, W, X) {
					const Y = J.getValueInRange(W);
					return X ? Y.toLowerCase() : Y;
				}
				class G extends d.$itb {
					constructor() {
						super({
							id: "editor.action.focusNextCursor",
							label: o.localize(1334, null),
							metadata: { description: o.localize(1335, null), args: [] },
							alias: "Focus Next Cursor",
							precondition: void 0,
						});
					}
					run(W, X, Y) {
						if (!X.hasModel()) return;
						const ie = X._getViewModel();
						if (ie.cursorConfig.readOnly) return;
						ie.model.pushStackElement();
						const ne = Array.from(ie.getCursorStates()),
							ee = ne.shift();
						ee &&
							(ne.push(ee),
							ie.setCursorStates(Y.source, r.CursorChangeReason.Explicit, ne),
							ie.revealPrimaryCursor(Y.source, !0),
							S(ne, ie.getCursorStates()));
					}
				}
				e.$wjc = G;
				class K extends d.$itb {
					constructor() {
						super({
							id: "editor.action.focusPreviousCursor",
							label: o.localize(1336, null),
							metadata: { description: o.localize(1337, null), args: [] },
							alias: "Focus Previous Cursor",
							precondition: void 0,
						});
					}
					run(W, X, Y) {
						if (!X.hasModel()) return;
						const ie = X._getViewModel();
						if (ie.cursorConfig.readOnly) return;
						ie.model.pushStackElement();
						const ne = Array.from(ie.getCursorStates()),
							ee = ne.pop();
						ee &&
							(ne.unshift(ee),
							ie.setCursorStates(Y.source, r.CursorChangeReason.Explicit, ne),
							ie.revealPrimaryCursor(Y.source, !0),
							S(ne, ie.getCursorStates()));
					}
				}
				(e.$xjc = K),
					(0, d.$qtb)(N.ID, N, d.EditorContributionInstantiation.Lazy),
					(0, d.$qtb)(
						H.ID,
						H,
						d.EditorContributionInstantiation.AfterFirstRender,
					),
					(0, d.$ntb)(I),
					(0, d.$ntb)(T),
					(0, d.$ntb)(P),
					(0, d.$ntb)(R),
					(0, d.$ntb)(O),
					(0, d.$ntb)(B),
					(0, d.$ntb)(U),
					(0, d.$ntb)(z),
					(0, d.$ntb)(F),
					(0, d.$ntb)(k),
					(0, d.$ntb)(L),
					(0, d.$ntb)(G),
					(0, d.$ntb)(K);
			},
		),
		