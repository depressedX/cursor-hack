import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/keyCodes.js';
import '../../../browser/editorExtensions.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/range.js';
import '../../../common/editorContextKeys.js';
import '../../../common/languages/languageConfigurationRegistry.js';
import './blockCommentCommand.js';
import './lineCommentCommand.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
define(
			de[2803],
			he([1, 0, 27, 46, 38, 17, 71, 152, 1548, 1549, 4, 11, 43]),
			function (ce /*require*/,
 e /*exports*/,
 t /*keyCodes*/,
 i /*editorExtensions*/,
 w /*editorOptions*/,
 E /*range*/,
 C /*editorContextKeys*/,
 d /*languageConfigurationRegistry*/,
 m /*blockCommentCommand*/,
 r /*lineCommentCommand*/,
 u /*nls*/,
 a /*actions*/,
 h /*keybindingsRegistry*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (u = mt(u));
				class c extends i.$itb {
					constructor(b, s) {
						super(s), (this.d = b);
					}
					run(b, s) {
						const l = b.get(d.$aN);
						if (!s.hasModel()) return;
						const y = s.getModel(),
							$ = [],
							v = y.getOptions(),
							S = s.getOption(w.EditorOption.comments),
							I = s
								.getSelections()
								.map((P, k) => ({
									selection: P,
									index: k,
									ignoreFirstLine: !1,
								}));
						I.sort((P, k) =>
							E.$iL.compareRangesUsingStarts(P.selection, k.selection),
						);
						let T = I[0];
						for (let P = 1; P < I.length; P++) {
							const k = I[P];
							T.selection.endLineNumber === k.selection.startLineNumber &&
								(T.index < k.index
									? (k.ignoreFirstLine = !0)
									: ((T.ignoreFirstLine = !0), (T = k)));
						}
						for (const P of I)
							$.push(
								new r.$Chc(
									l,
									P.selection,
									v.indentSize,
									this.d,
									S.insertSpace,
									S.ignoreEmptyLines,
									P.ignoreFirstLine,
								),
							);
						s.pushUndoStop(), s.executeCommands(this.id, $), s.pushUndoStop();
					}
				}
				class n extends c {
					constructor() {
						super(r.Type.Toggle, {
							id: "editor.action.commentLine",
							label: u.localize(961, null),
							alias: "Toggle Line Comment",
							precondition: C.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: C.EditorContextKeys.editorTextFocus,
								primary: t.KeyMod.CtrlCmd | t.KeyCode.Slash,
								weight: h.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: a.$XX.MenubarEditMenu,
								group: "5_insert",
								title: u.localize(962, null),
								order: 1,
							},
						});
					}
				}
				class g extends c {
					constructor() {
						super(r.Type.ForceAdd, {
							id: "editor.action.addCommentLine",
							label: u.localize(963, null),
							alias: "Add Line Comment",
							precondition: C.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: C.EditorContextKeys.editorTextFocus,
								primary: (0, t.$os)(t.$ps, t.KeyMod.CtrlCmd | t.KeyCode.KeyC),
								mac: {
									primary: (0, t.$os)(t.$qs, t.KeyMod.CtrlCmd | t.KeyCode.KeyC),
								},
								weight: h.KeybindingWeight.EditorContrib,
							},
						});
					}
				}
				class p extends c {
					constructor() {
						super(r.Type.ForceRemove, {
							id: "editor.action.removeCommentLine",
							label: u.localize(964, null),
							alias: "Remove Line Comment",
							precondition: C.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: C.EditorContextKeys.editorTextFocus,
								primary: (0, t.$os)(t.$ps, t.KeyMod.CtrlCmd | t.KeyCode.KeyU),
								mac: {
									primary: (0, t.$os)(t.$qs, t.KeyMod.CtrlCmd | t.KeyCode.KeyU),
								},
								weight: h.KeybindingWeight.EditorContrib,
							},
						});
					}
				}
				class o extends i.$itb {
					constructor() {
						super({
							id: "editor.action.blockComment",
							label: u.localize(965, null),
							alias: "Toggle Block Comment",
							precondition: C.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: C.EditorContextKeys.editorTextFocus,
								primary: t.KeyMod.Shift | t.KeyMod.Alt | t.KeyCode.KeyA,
								linux: {
									primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.KeyA,
								},
								weight: h.KeybindingWeight.EditorContrib,
							},
							menuOpts: {
								menuId: a.$XX.MenubarEditMenu,
								group: "5_insert",
								title: u.localize(966, null),
								order: 2,
							},
						});
					}
					run(b, s) {
						const l = b.get(d.$aN);
						if (!s.hasModel()) return;
						const y = s.getOption(w.EditorOption.comments),
							$ = [],
							v = s.getSelections();
						for (const S of v) $.push(new m.$Bhc(S, y.insertSpace, l));
						s.pushUndoStop(), s.executeCommands(this.id, $), s.pushUndoStop();
					}
				}
				(0, i.$ntb)(n), (0, i.$ntb)(g), (0, i.$ntb)(p), (0, i.$ntb)(o);
			},
		),
		