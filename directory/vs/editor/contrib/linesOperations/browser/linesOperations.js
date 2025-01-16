define(
			de[1645],
			he([
				1, 0, 27, 498, 46, 655, 1148, 38, 949, 948, 188, 48, 17, 104, 71, 2588,
				2778, 2589, 4, 11, 43, 152, 10,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ejc =
						e.$djc =
						e.$cjc =
						e.$bjc =
						e.$ajc =
						e.$_ic =
						e.$$ic =
						e.$0ic =
						e.$9ic =
						e.$8ic =
						e.$7ic =
						e.$6ic =
						e.$5ic =
						e.$4ic =
						e.$3ic =
						e.$2ic =
						e.$1ic =
						e.$Zic =
						e.$Yic =
						e.$Xic =
						e.$Wic =
						e.$Vic =
						e.$Uic =
							void 0),
					(f = mt(f));
				class $ extends w.$itb {
					constructor(te, Q) {
						super(Q), (this.d = te);
					}
					run(te, Q) {
						if (!Q.hasModel()) return;
						const Z = Q.getSelections().map((le, oe) => ({
							selection: le,
							index: oe,
							ignore: !1,
						}));
						Z.sort((le, oe) =>
							h.$iL.compareRangesUsingStarts(le.selection, oe.selection),
						);
						let se = Z[0];
						for (let le = 1; le < Z.length; le++) {
							const oe = Z[le];
							se.selection.endLineNumber === oe.selection.startLineNumber &&
								(se.index < oe.index
									? (oe.ignore = !0)
									: ((se.ignore = !0), (se = oe)));
						}
						const re = [];
						for (const le of Z)
							re.push(new g.$Ric(le.selection, this.d, le.ignore));
						Q.pushUndoStop(), Q.executeCommands(this.id, re), Q.pushUndoStop();
					}
				}
				class v extends $ {
					constructor() {
						super(!1, {
							id: "editor.action.copyLinesUpAction",
							label: f.localize(1272, null),
							alias: "Copy Line Up",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: t.KeyMod.Alt | t.KeyMod.Shift | t.KeyCode.UpArrow,
								linux: {
									primary:
										t.KeyMod.CtrlCmd |
										t.KeyMod.Alt |
										t.KeyMod.Shift |
										t.KeyCode.UpArrow,
								},
								weight: s.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: b.$XX.MenubarSelectionMenu,
								group: "2_line",
								title: f.localize(1273, null),
								order: 1,
							},
						});
					}
				}
				class S extends $ {
					constructor() {
						super(!0, {
							id: "editor.action.copyLinesDownAction",
							label: f.localize(1274, null),
							alias: "Copy Line Down",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: t.KeyMod.Alt | t.KeyMod.Shift | t.KeyCode.DownArrow,
								linux: {
									primary:
										t.KeyMod.CtrlCmd |
										t.KeyMod.Alt |
										t.KeyMod.Shift |
										t.KeyCode.DownArrow,
								},
								weight: s.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: b.$XX.MenubarSelectionMenu,
								group: "2_line",
								title: f.localize(1275, null),
								order: 2,
							},
						});
					}
				}
				class I extends w.$itb {
					constructor() {
						super({
							id: "editor.action.duplicateSelection",
							label: f.localize(1276, null),
							alias: "Duplicate Selection",
							precondition: n.EditorContextKeys.writable,
							menuOpts: {
								menuId: b.$XX.MenubarSelectionMenu,
								group: "2_line",
								title: f.localize(1277, null),
								order: 5,
							},
						});
					}
					run(te, Q, Z) {
						if (!Q.hasModel()) return;
						const se = [],
							re = Q.getSelections(),
							le = Q.getModel();
						for (const oe of re)
							if (oe.isEmpty()) se.push(new g.$Ric(oe, !0));
							else {
								const ae = new c.$kL(
									oe.endLineNumber,
									oe.endColumn,
									oe.endLineNumber,
									oe.endColumn,
								);
								se.push(new E.$xtb(ae, le.getValueInRange(oe)));
							}
						Q.pushUndoStop(), Q.executeCommands(this.id, se), Q.pushUndoStop();
					}
				}
				e.$Uic = I;
				class T extends w.$itb {
					constructor(te, Q) {
						super(Q), (this.d = te);
					}
					run(te, Q) {
						const Z = te.get(l.$aN),
							se = [],
							re = Q.getSelections() || [],
							le = Q.getOption(d.EditorOption.autoIndent);
						for (const oe of re) se.push(new p.$Sic(oe, this.d, le, Z));
						Q.pushUndoStop(), Q.executeCommands(this.id, se), Q.pushUndoStop();
					}
				}
				class P extends T {
					constructor() {
						super(!1, {
							id: "editor.action.moveLinesUpAction",
							label: f.localize(1278, null),
							alias: "Move Line Up",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: t.KeyMod.Alt | t.KeyCode.UpArrow,
								linux: { primary: t.KeyMod.Alt | t.KeyCode.UpArrow },
								weight: s.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: b.$XX.MenubarSelectionMenu,
								group: "2_line",
								title: f.localize(1279, null),
								order: 3,
							},
						});
					}
				}
				class k extends T {
					constructor() {
						super(!0, {
							id: "editor.action.moveLinesDownAction",
							label: f.localize(1280, null),
							alias: "Move Line Down",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: t.KeyMod.Alt | t.KeyCode.DownArrow,
								linux: { primary: t.KeyMod.Alt | t.KeyCode.DownArrow },
								weight: s.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: b.$XX.MenubarSelectionMenu,
								group: "2_line",
								title: f.localize(1281, null),
								order: 4,
							},
						});
					}
				}
				class L extends w.$itb {
					constructor(te, Q) {
						super(Q), (this.d = te);
					}
					run(te, Q) {
						if (!Q.hasModel()) return;
						const Z = Q.getModel();
						let se = Q.getSelections();
						se.length === 1 &&
							se[0].isEmpty() &&
							(se = [
								new c.$kL(
									1,
									1,
									Z.getLineCount(),
									Z.getLineMaxColumn(Z.getLineCount()),
								),
							]);
						for (const le of se)
							if (!o.$Tic.canRun(Q.getModel(), le, this.d)) return;
						const re = [];
						for (let le = 0, oe = se.length; le < oe; le++)
							re[le] = new o.$Tic(se[le], this.d);
						Q.pushUndoStop(), Q.executeCommands(this.id, re), Q.pushUndoStop();
					}
				}
				e.$Vic = L;
				class D extends L {
					constructor() {
						super(!1, {
							id: "editor.action.sortLinesAscending",
							label: f.localize(1282, null),
							alias: "Sort Lines Ascending",
							precondition: n.EditorContextKeys.writable,
						});
					}
				}
				e.$Wic = D;
				class M extends L {
					constructor() {
						super(!0, {
							id: "editor.action.sortLinesDescending",
							label: f.localize(1283, null),
							alias: "Sort Lines Descending",
							precondition: n.EditorContextKeys.writable,
						});
					}
				}
				e.$Xic = M;
				class N extends w.$itb {
					constructor() {
						super({
							id: "editor.action.removeDuplicateLines",
							label: f.localize(1284, null),
							alias: "Delete Duplicate Lines",
							precondition: n.EditorContextKeys.writable,
						});
					}
					run(te, Q) {
						if (!Q.hasModel()) return;
						const Z = Q.getModel();
						if (Z.getLineCount() === 1 && Z.getLineMaxColumn(1) === 1) return;
						const se = [],
							re = [];
						let le = 0,
							oe = !0,
							ae = Q.getSelections();
						ae.length === 1 &&
							ae[0].isEmpty() &&
							((ae = [
								new c.$kL(
									1,
									1,
									Z.getLineCount(),
									Z.getLineMaxColumn(Z.getLineCount()),
								),
							]),
							(oe = !1));
						for (const pe of ae) {
							const $e = new Set(),
								ye = [];
							for (let ve = pe.startLineNumber; ve <= pe.endLineNumber; ve++) {
								const ge = Z.getLineContent(ve);
								$e.has(ge) || (ye.push(ge), $e.add(ge));
							}
							const ue = new c.$kL(
									pe.startLineNumber,
									1,
									pe.endLineNumber,
									Z.getLineMaxColumn(pe.endLineNumber),
								),
								fe = pe.startLineNumber - le,
								me = new c.$kL(
									fe,
									1,
									fe + ye.length - 1,
									ye[ye.length - 1].length,
								);
							se.push(
								u.$jL.replace(
									ue,
									ye.join(`
`),
								),
							),
								re.push(me),
								(le += pe.endLineNumber - pe.startLineNumber + 1 - ye.length);
						}
						Q.pushUndoStop(),
							Q.executeEdits(this.id, se, oe ? re : void 0),
							Q.pushUndoStop();
					}
				}
				e.$Yic = N;
				class A extends w.$itb {
					static {
						this.ID = "editor.action.trimTrailingWhitespace";
					}
					constructor() {
						super({
							id: A.ID,
							label: f.localize(1285, null),
							alias: "Trim Trailing Whitespace",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, t.$os)(t.$ps, t.KeyMod.CtrlCmd | t.KeyCode.KeyX),
								mac: {
									primary: (0, t.$os)(t.$qs, t.KeyMod.CtrlCmd | t.KeyCode.KeyX),
								},
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(te, Q, Z) {
						let se = [];
						Z.reason === "auto-save" &&
							(se = (Q.getSelections() || []).map(
								($e) => new a.$hL($e.positionLineNumber, $e.positionColumn),
							));
						const re = Q.getSelection();
						if (re === null) return;
						const le = te.get(y.$gj),
							oe = Q.getModel(),
							ae = le.getValue(
								"files.trimTrailingWhitespaceInRegexAndStrings",
								{ overrideIdentifier: oe?.getLanguageId(), resource: oe?.uri },
							),
							pe = new C.$Pic(re, se, ae);
						Q.pushUndoStop(),
							Q.executeCommands(this.id, [pe]),
							Q.pushUndoStop();
					}
				}
				e.$Zic = A;
				class R extends w.$itb {
					constructor() {
						super({
							id: "editor.action.deleteLines",
							label: f.localize(1286, null),
							alias: "Delete Line",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.textInputFocus,
								primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.KeyK,
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(te, Q) {
						if (!Q.hasModel()) return;
						const Z = this.d(Q),
							se = Q.getModel();
						if (se.getLineCount() === 1 && se.getLineMaxColumn(1) === 1) return;
						let re = 0;
						const le = [],
							oe = [];
						for (let ae = 0, pe = Z.length; ae < pe; ae++) {
							const $e = Z[ae];
							let ye = $e.startLineNumber,
								ue = $e.endLineNumber,
								fe = 1,
								me = se.getLineMaxColumn(ue);
							ue < se.getLineCount()
								? ((ue += 1), (me = 1))
								: ye > 1 && ((ye -= 1), (fe = se.getLineMaxColumn(ye))),
								le.push(u.$jL.replace(new c.$kL(ye, fe, ue, me), "")),
								oe.push(
									new c.$kL(
										ye - re,
										$e.positionColumn,
										ye - re,
										$e.positionColumn,
									),
								),
								(re += $e.endLineNumber - $e.startLineNumber + 1);
						}
						Q.pushUndoStop(), Q.executeEdits(this.id, le, oe), Q.pushUndoStop();
					}
					d(te) {
						const Q = te.getSelections().map((re) => {
							let le = re.endLineNumber;
							return (
								re.startLineNumber < re.endLineNumber &&
									re.endColumn === 1 &&
									(le -= 1),
								{
									startLineNumber: re.startLineNumber,
									selectionStartColumn: re.selectionStartColumn,
									endLineNumber: le,
									positionColumn: re.positionColumn,
								}
							);
						});
						Q.sort((re, le) =>
							re.startLineNumber === le.startLineNumber
								? re.endLineNumber - le.endLineNumber
								: re.startLineNumber - le.startLineNumber,
						);
						const Z = [];
						let se = Q[0];
						for (let re = 1; re < Q.length; re++)
							se.endLineNumber + 1 >= Q[re].startLineNumber
								? (se.endLineNumber = Q[re].endLineNumber)
								: (Z.push(se), (se = Q[re]));
						return Z.push(se), Z;
					}
				}
				e.$1ic = R;
				class O extends w.$itb {
					constructor() {
						super({
							id: "editor.action.indentLines",
							label: f.localize(1287, null),
							alias: "Indent Line",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: t.KeyMod.CtrlCmd | t.KeyCode.BracketRight,
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(te, Q) {
						const Z = Q._getViewModel();
						Z &&
							(Q.pushUndoStop(),
							Q.executeCommands(
								this.id,
								m.$$tb.indent(Z.cursorConfig, Q.getModel(), Q.getSelections()),
							),
							Q.pushUndoStop());
					}
				}
				e.$2ic = O;
				class B extends w.$itb {
					constructor() {
						super({
							id: "editor.action.outdentLines",
							label: f.localize(1288, null),
							alias: "Outdent Line",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: t.KeyMod.CtrlCmd | t.KeyCode.BracketLeft,
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(te, Q) {
						i.CoreEditingCommands.Outdent.runEditorCommand(te, Q, null);
					}
				}
				class U extends w.$itb {
					constructor() {
						super({
							id: "editor.action.insertLineBefore",
							label: f.localize(1289, null),
							alias: "Insert Line Above",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.Enter,
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(te, Q) {
						const Z = Q._getViewModel();
						Z &&
							(Q.pushUndoStop(),
							Q.executeCommands(
								this.id,
								r.$2tb.lineInsertBefore(
									Z.cursorConfig,
									Q.getModel(),
									Q.getSelections(),
								),
							));
					}
				}
				e.$3ic = U;
				class z extends w.$itb {
					constructor() {
						super({
							id: "editor.action.insertLineAfter",
							label: f.localize(1290, null),
							alias: "Insert Line Below",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: t.KeyMod.CtrlCmd | t.KeyCode.Enter,
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(te, Q) {
						const Z = Q._getViewModel();
						Z &&
							(Q.pushUndoStop(),
							Q.executeCommands(
								this.id,
								r.$2tb.lineInsertAfter(
									Z.cursorConfig,
									Q.getModel(),
									Q.getSelections(),
								),
							));
					}
				}
				e.$4ic = z;
				class F extends w.$itb {
					run(te, Q) {
						if (!Q.hasModel()) return;
						const Z = Q.getSelection(),
							se = this.e(Q),
							re = [];
						for (let ae = 0, pe = se.length - 1; ae < pe; ae++) {
							const $e = se[ae],
								ye = se[ae + 1];
							h.$iL.intersectRanges($e, ye) === null
								? re.push($e)
								: (se[ae + 1] = h.$iL.plusRange($e, ye));
						}
						re.push(se[se.length - 1]);
						const le = this.d(Z, re),
							oe = re.map((ae) => u.$jL.replace(ae, ""));
						Q.pushUndoStop(), Q.executeEdits(this.id, oe, le), Q.pushUndoStop();
					}
				}
				e.$5ic = F;
				class x extends F {
					constructor() {
						super({
							id: "deleteAllLeft",
							label: f.localize(1291, null),
							alias: "Delete All Left",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.textInputFocus,
								primary: 0,
								mac: { primary: t.KeyMod.CtrlCmd | t.KeyCode.Backspace },
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
					d(te, Q) {
						let Z = null;
						const se = [];
						let re = 0;
						return (
							Q.forEach((le) => {
								let oe;
								if (le.endColumn === 1 && re > 0) {
									const ae = le.startLineNumber - re;
									oe = new c.$kL(ae, le.startColumn, ae, le.startColumn);
								} else
									oe = new c.$kL(
										le.startLineNumber,
										le.startColumn,
										le.startLineNumber,
										le.startColumn,
									);
								(re += le.endLineNumber - le.startLineNumber),
									le.intersectRanges(te) ? (Z = oe) : se.push(oe);
							}),
							Z && se.unshift(Z),
							se
						);
					}
					e(te) {
						const Q = te.getSelections();
						if (Q === null) return [];
						let Z = Q;
						const se = te.getModel();
						return se === null
							? []
							: (Z.sort(h.$iL.compareRangesUsingStarts),
								(Z = Z.map((re) => {
									if (re.isEmpty())
										if (re.startColumn === 1) {
											const le = Math.max(1, re.startLineNumber - 1),
												oe =
													re.startLineNumber === 1
														? 1
														: se.getLineLength(le) + 1;
											return new h.$iL(le, oe, re.startLineNumber, 1);
										} else
											return new h.$iL(
												re.startLineNumber,
												1,
												re.startLineNumber,
												re.startColumn,
											);
									else
										return new h.$iL(
											re.startLineNumber,
											1,
											re.endLineNumber,
											re.endColumn,
										);
								})),
								Z);
					}
				}
				e.$6ic = x;
				class H extends F {
					constructor() {
						super({
							id: "deleteAllRight",
							label: f.localize(1292, null),
							alias: "Delete All Right",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.textInputFocus,
								primary: 0,
								mac: {
									primary: t.KeyMod.WinCtrl | t.KeyCode.KeyK,
									secondary: [t.KeyMod.CtrlCmd | t.KeyCode.Delete],
								},
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
					d(te, Q) {
						let Z = null;
						const se = [];
						for (let re = 0, le = Q.length, oe = 0; re < le; re++) {
							const ae = Q[re],
								pe = new c.$kL(
									ae.startLineNumber - oe,
									ae.startColumn,
									ae.startLineNumber - oe,
									ae.startColumn,
								);
							ae.intersectRanges(te) ? (Z = pe) : se.push(pe);
						}
						return Z && se.unshift(Z), se;
					}
					e(te) {
						const Q = te.getModel();
						if (Q === null) return [];
						const Z = te.getSelections();
						if (Z === null) return [];
						const se = Z.map((re) => {
							if (re.isEmpty()) {
								const le = Q.getLineMaxColumn(re.startLineNumber);
								return re.startColumn === le
									? new h.$iL(
											re.startLineNumber,
											re.startColumn,
											re.startLineNumber + 1,
											1,
										)
									: new h.$iL(
											re.startLineNumber,
											re.startColumn,
											re.startLineNumber,
											le,
										);
							}
							return re;
						});
						return se.sort(h.$iL.compareRangesUsingStarts), se;
					}
				}
				e.$7ic = H;
				class q extends w.$itb {
					constructor() {
						super({
							id: "editor.action.joinLines",
							label: f.localize(1293, null),
							alias: "Join Lines",
							precondition: n.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: 0,
								mac: { primary: t.KeyMod.WinCtrl | t.KeyCode.KeyJ },
								weight: s.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(te, Q) {
						const Z = Q.getSelections();
						if (Z === null) return;
						let se = Q.getSelection();
						if (se === null) return;
						Z.sort(h.$iL.compareRangesUsingStarts);
						const re = [],
							le = Z.reduce((ue, fe) =>
								ue.isEmpty()
									? ue.endLineNumber === fe.startLineNumber
										? (se.equalsSelection(ue) && (se = fe), fe)
										: fe.startLineNumber > ue.endLineNumber + 1
											? (re.push(ue), fe)
											: new c.$kL(
													ue.startLineNumber,
													ue.startColumn,
													fe.endLineNumber,
													fe.endColumn,
												)
									: fe.startLineNumber > ue.endLineNumber
										? (re.push(ue), fe)
										: new c.$kL(
												ue.startLineNumber,
												ue.startColumn,
												fe.endLineNumber,
												fe.endColumn,
											),
							);
						re.push(le);
						const oe = Q.getModel();
						if (oe === null) return;
						const ae = [],
							pe = [];
						let $e = se,
							ye = 0;
						for (let ue = 0, fe = re.length; ue < fe; ue++) {
							const me = re[ue],
								ve = me.startLineNumber,
								ge = 1;
							let be = 0,
								Ce,
								Le;
							const Fe = oe.getLineLength(me.endLineNumber) - me.endColumn;
							if (me.isEmpty() || me.startLineNumber === me.endLineNumber) {
								const He = me.getStartPosition();
								He.lineNumber < oe.getLineCount()
									? ((Ce = ve + 1), (Le = oe.getLineMaxColumn(Ce)))
									: ((Ce = He.lineNumber),
										(Le = oe.getLineMaxColumn(He.lineNumber)));
							} else (Ce = me.endLineNumber), (Le = oe.getLineMaxColumn(Ce));
							let Oe = oe.getLineContent(ve);
							for (let He = ve + 1; He <= Ce; He++) {
								const Ke = oe.getLineContent(He),
									Je = oe.getLineFirstNonWhitespaceColumn(He);
								if (Je >= 1) {
									let Te = !0;
									Oe === "" && (Te = !1),
										Te &&
											(Oe.charAt(Oe.length - 1) === " " ||
												Oe.charAt(Oe.length - 1) === "	") &&
											((Te = !1), (Oe = Oe.replace(/[\s\uFEFF\xA0]+$/g, " ")));
									const Ee = Ke.substr(Je - 1);
									(Oe += (Te ? " " : "") + Ee),
										Te ? (be = Ee.length + 1) : (be = Ee.length);
								} else be = 0;
							}
							const xe = new h.$iL(ve, ge, Ce, Le);
							if (!xe.isEmpty()) {
								let He;
								me.isEmpty()
									? (ae.push(u.$jL.replace(xe, Oe)),
										(He = new c.$kL(
											xe.startLineNumber - ye,
											Oe.length - be + 1,
											ve - ye,
											Oe.length - be + 1,
										)))
									: me.startLineNumber === me.endLineNumber
										? (ae.push(u.$jL.replace(xe, Oe)),
											(He = new c.$kL(
												me.startLineNumber - ye,
												me.startColumn,
												me.endLineNumber - ye,
												me.endColumn,
											)))
										: (ae.push(u.$jL.replace(xe, Oe)),
											(He = new c.$kL(
												me.startLineNumber - ye,
												me.startColumn,
												me.startLineNumber - ye,
												Oe.length - Fe,
											))),
									h.$iL.intersectRanges(xe, se) !== null
										? ($e = He)
										: pe.push(He);
							}
							ye += xe.endLineNumber - xe.startLineNumber;
						}
						pe.unshift($e),
							Q.pushUndoStop(),
							Q.executeEdits(this.id, ae, pe),
							Q.pushUndoStop();
					}
				}
				e.$8ic = q;
				class V extends w.$itb {
					constructor() {
						super({
							id: "editor.action.transpose",
							label: f.localize(1294, null),
							alias: "Transpose Characters around the Cursor",
							precondition: n.EditorContextKeys.writable,
						});
					}
					run(te, Q) {
						const Z = Q.getSelections();
						if (Z === null) return;
						const se = Q.getModel();
						if (se === null) return;
						const re = [];
						for (let le = 0, oe = Z.length; le < oe; le++) {
							const ae = Z[le];
							if (!ae.isEmpty()) continue;
							const pe = ae.getStartPosition(),
								$e = se.getLineMaxColumn(pe.lineNumber);
							if (pe.column >= $e) {
								if (pe.lineNumber === se.getLineCount()) continue;
								const ye = new h.$iL(
										pe.lineNumber,
										Math.max(1, pe.column - 1),
										pe.lineNumber + 1,
										1,
									),
									ue = se.getValueInRange(ye).split("").reverse().join("");
								re.push(
									new E.$wtb(
										new c.$kL(
											pe.lineNumber,
											Math.max(1, pe.column - 1),
											pe.lineNumber + 1,
											1,
										),
										ue,
									),
								);
							} else {
								const ye = new h.$iL(
										pe.lineNumber,
										Math.max(1, pe.column - 1),
										pe.lineNumber,
										pe.column + 1,
									),
									ue = se.getValueInRange(ye).split("").reverse().join("");
								re.push(
									new E.$Atb(
										ye,
										ue,
										new c.$kL(
											pe.lineNumber,
											pe.column + 1,
											pe.lineNumber,
											pe.column + 1,
										),
									),
								);
							}
						}
						Q.pushUndoStop(), Q.executeCommands(this.id, re), Q.pushUndoStop();
					}
				}
				e.$9ic = V;
				class G extends w.$itb {
					run(te, Q) {
						const Z = Q.getSelections();
						if (Z === null) return;
						const se = Q.getModel();
						if (se === null) return;
						const re = Q.getOption(d.EditorOption.wordSeparators),
							le = [];
						for (const oe of Z)
							if (oe.isEmpty()) {
								const ae = oe.getStartPosition(),
									pe = Q.getConfiguredWordAtPosition(ae);
								if (!pe) continue;
								const $e = new h.$iL(
										ae.lineNumber,
										pe.startColumn,
										ae.lineNumber,
										pe.endColumn,
									),
									ye = se.getValueInRange($e);
								le.push(u.$jL.replace($e, this.d(ye, re)));
							} else {
								const ae = se.getValueInRange(oe);
								le.push(u.$jL.replace(oe, this.d(ae, re)));
							}
						Q.pushUndoStop(), Q.executeEdits(this.id, le), Q.pushUndoStop();
					}
				}
				e.$0ic = G;
				class K extends G {
					constructor() {
						super({
							id: "editor.action.transformToUppercase",
							label: f.localize(1295, null),
							alias: "Transform to Uppercase",
							precondition: n.EditorContextKeys.writable,
						});
					}
					d(te, Q) {
						return te.toLocaleUpperCase();
					}
				}
				e.$$ic = K;
				class J extends G {
					constructor() {
						super({
							id: "editor.action.transformToLowercase",
							label: f.localize(1296, null),
							alias: "Transform to Lowercase",
							precondition: n.EditorContextKeys.writable,
						});
					}
					d(te, Q) {
						return te.toLocaleLowerCase();
					}
				}
				e.$_ic = J;
				class W {
					constructor(te, Q) {
						(this.e = te), (this.f = Q), (this.c = null), (this.d = !1);
					}
					get() {
						if (!this.d) {
							this.d = !0;
							try {
								this.c = new RegExp(this.e, this.f);
							} catch {}
						}
						return this.c;
					}
					isSupported() {
						return this.get() !== null;
					}
				}
				class X extends G {
					static {
						this.titleBoundary = new W(
							"(^|[^\\p{L}\\p{N}']|((^|\\P{L})'))\\p{L}",
							"gmu",
						);
					}
					constructor() {
						super({
							id: "editor.action.transformToTitlecase",
							label: f.localize(1297, null),
							alias: "Transform to Title Case",
							precondition: n.EditorContextKeys.writable,
						});
					}
					d(te, Q) {
						const Z = X.titleBoundary.get();
						return Z
							? te
									.toLocaleLowerCase()
									.replace(Z, (se) => se.toLocaleUpperCase())
							: te;
					}
				}
				e.$ajc = X;
				class Y extends G {
					static {
						this.caseBoundary = new W("(\\p{Ll})(\\p{Lu})", "gmu");
					}
					static {
						this.singleLetters = new W(
							"(\\p{Lu}|\\p{N})(\\p{Lu})(\\p{Ll})",
							"gmu",
						);
					}
					constructor() {
						super({
							id: "editor.action.transformToSnakecase",
							label: f.localize(1298, null),
							alias: "Transform to Snake Case",
							precondition: n.EditorContextKeys.writable,
						});
					}
					d(te, Q) {
						const Z = Y.caseBoundary.get(),
							se = Y.singleLetters.get();
						return !Z || !se
							? te
							: te
									.replace(Z, "$1_$2")
									.replace(se, "$1_$2$3")
									.toLocaleLowerCase();
					}
				}
				e.$bjc = Y;
				class ie extends G {
					static {
						this.wordBoundary = new W("[_\\s-]", "gm");
					}
					constructor() {
						super({
							id: "editor.action.transformToCamelcase",
							label: f.localize(1299, null),
							alias: "Transform to Camel Case",
							precondition: n.EditorContextKeys.writable,
						});
					}
					d(te, Q) {
						const Z = ie.wordBoundary.get();
						if (!Z) return te;
						const se = te.split(Z);
						return (
							se.shift() +
							se
								.map(
									(le) =>
										le.substring(0, 1).toLocaleUpperCase() + le.substring(1),
								)
								.join("")
						);
					}
				}
				e.$cjc = ie;
				class ne extends G {
					static {
						this.wordBoundary = new W("[_\\s-]", "gm");
					}
					static {
						this.wordBoundaryToMaintain = new W("(?<=\\.)", "gm");
					}
					constructor() {
						super({
							id: "editor.action.transformToPascalcase",
							label: f.localize(1300, null),
							alias: "Transform to Pascal Case",
							precondition: n.EditorContextKeys.writable,
						});
					}
					d(te, Q) {
						const Z = ne.wordBoundary.get(),
							se = ne.wordBoundaryToMaintain.get();
						return !Z || !se
							? te
							: te
									.split(se)
									.map((oe) => oe.split(Z))
									.flat()
									.map(
										(oe) =>
											oe.substring(0, 1).toLocaleUpperCase() + oe.substring(1),
									)
									.join("");
					}
				}
				e.$djc = ne;
				class ee extends G {
					static isSupported() {
						return [this.e, this.h, this.j].every((Q) => Q.isSupported());
					}
					static {
						this.e = new W("(\\p{Ll})(\\p{Lu})", "gmu");
					}
					static {
						this.h = new W("(\\p{Lu}|\\p{N})(\\p{Lu}\\p{Ll})", "gmu");
					}
					static {
						this.j = new W("(\\S)(_)(\\S)", "gm");
					}
					constructor() {
						super({
							id: "editor.action.transformToKebabcase",
							label: f.localize(1301, null),
							alias: "Transform to Kebab Case",
							precondition: n.EditorContextKeys.writable,
						});
					}
					d(te, Q) {
						const Z = ee.e.get(),
							se = ee.h.get(),
							re = ee.j.get();
						return !Z || !se || !re
							? te
							: te
									.replace(re, "$1-$3")
									.replace(Z, "$1-$2")
									.replace(se, "$1-$2")
									.toLocaleLowerCase();
					}
				}
				(e.$ejc = ee),
					(0, w.$ntb)(v),
					(0, w.$ntb)(S),
					(0, w.$ntb)(I),
					(0, w.$ntb)(P),
					(0, w.$ntb)(k),
					(0, w.$ntb)(D),
					(0, w.$ntb)(M),
					(0, w.$ntb)(N),
					(0, w.$ntb)(A),
					(0, w.$ntb)(R),
					(0, w.$ntb)(O),
					(0, w.$ntb)(B),
					(0, w.$ntb)(U),
					(0, w.$ntb)(z),
					(0, w.$ntb)(x),
					(0, w.$ntb)(H),
					(0, w.$ntb)(q),
					(0, w.$ntb)(V),
					(0, w.$ntb)(K),
					(0, w.$ntb)(J),
					Y.caseBoundary.isSupported() &&
						Y.singleLetters.isSupported() &&
						(0, w.$ntb)(Y),
					ie.wordBoundary.isSupported() && (0, w.$ntb)(ie),
					ne.wordBoundary.isSupported() && (0, w.$ntb)(ne),
					X.titleBoundary.isSupported() && (0, w.$ntb)(X),
					ee.isSupported() && (0, w.$ntb)(ee);
			},
		),
		