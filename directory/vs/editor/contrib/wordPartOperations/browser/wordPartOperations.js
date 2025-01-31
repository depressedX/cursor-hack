import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/keyCodes.js';
import '../../../browser/editorExtensions.js';
import '../../../common/cursor/cursorWordOperations.js';
import '../../../common/core/range.js';
import '../../../common/editorContextKeys.js';
import '../../wordOperations/browser/wordOperations.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
define(
			de[2814],
			he([1, 0, 27, 46, 944, 17, 71, 1648, 31, 43]),
			function (ce /*require*/,
 e /*exports*/,
 t /*keyCodes*/,
 i /*editorExtensions*/,
 w /*cursorWordOperations*/,
 E /*range*/,
 C /*editorContextKeys*/,
 d /*wordOperations*/,
 m /*commands*/,
 r /*keybindingsRegistry*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ilc =
						e.$hlc =
						e.$glc =
						e.$flc =
						e.$elc =
						e.$dlc =
						e.$clc =
						e.$blc =
							void 0);
				class u extends d.$4kc {
					constructor() {
						super({
							whitespaceHeuristics: !0,
							wordNavigationType: w.WordNavigationType.WordStart,
							id: "deleteWordPartLeft",
							precondition: C.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: C.EditorContextKeys.textInputFocus,
								primary: 0,
								mac: {
									primary:
										t.KeyMod.WinCtrl | t.KeyMod.Alt | t.KeyCode.Backspace,
								},
								weight: r.KeybindingWeight.EditorContrib,
							},
						});
					}
					h(b, s) {
						const l = w.$Gtb.deleteWordPartLeft(b);
						return l || new E.$iL(1, 1, 1, 1);
					}
				}
				e.$blc = u;
				class a extends d.$4kc {
					constructor() {
						super({
							whitespaceHeuristics: !0,
							wordNavigationType: w.WordNavigationType.WordEnd,
							id: "deleteWordPartRight",
							precondition: C.EditorContextKeys.writable,
							kbOpts: {
								kbExpr: C.EditorContextKeys.textInputFocus,
								primary: 0,
								mac: {
									primary: t.KeyMod.WinCtrl | t.KeyMod.Alt | t.KeyCode.Delete,
								},
								weight: r.KeybindingWeight.EditorContrib,
							},
						});
					}
					h(b, s) {
						const l = w.$Gtb.deleteWordPartRight(b);
						if (l) return l;
						const y = b.model.getLineCount(),
							$ = b.model.getLineMaxColumn(y);
						return new E.$iL(y, $, y, $);
					}
				}
				e.$clc = a;
				class h extends d.$Kkc {
					j(b, s, l, y, $) {
						return w.$Gtb.moveWordPartLeft(b, s, l, $);
					}
				}
				e.$dlc = h;
				class c extends h {
					constructor() {
						super({
							inSelectionMode: !1,
							wordNavigationType: w.WordNavigationType.WordStart,
							id: "cursorWordPartLeft",
							precondition: void 0,
							kbOpts: {
								kbExpr: C.EditorContextKeys.textInputFocus,
								primary: 0,
								mac: {
									primary:
										t.KeyMod.WinCtrl | t.KeyMod.Alt | t.KeyCode.LeftArrow,
								},
								weight: r.KeybindingWeight.EditorContrib,
							},
						});
					}
				}
				(e.$elc = c),
					m.$fk.registerCommandAlias(
						"cursorWordPartStartLeft",
						"cursorWordPartLeft",
					);
				class n extends h {
					constructor() {
						super({
							inSelectionMode: !0,
							wordNavigationType: w.WordNavigationType.WordStart,
							id: "cursorWordPartLeftSelect",
							precondition: void 0,
							kbOpts: {
								kbExpr: C.EditorContextKeys.textInputFocus,
								primary: 0,
								mac: {
									primary:
										t.KeyMod.WinCtrl |
										t.KeyMod.Alt |
										t.KeyMod.Shift |
										t.KeyCode.LeftArrow,
								},
								weight: r.KeybindingWeight.EditorContrib,
							},
						});
					}
				}
				(e.$flc = n),
					m.$fk.registerCommandAlias(
						"cursorWordPartStartLeftSelect",
						"cursorWordPartLeftSelect",
					);
				class g extends d.$Kkc {
					j(b, s, l, y, $) {
						return w.$Gtb.moveWordPartRight(b, s, l);
					}
				}
				e.$glc = g;
				class p extends g {
					constructor() {
						super({
							inSelectionMode: !1,
							wordNavigationType: w.WordNavigationType.WordEnd,
							id: "cursorWordPartRight",
							precondition: void 0,
							kbOpts: {
								kbExpr: C.EditorContextKeys.textInputFocus,
								primary: 0,
								mac: {
									primary:
										t.KeyMod.WinCtrl | t.KeyMod.Alt | t.KeyCode.RightArrow,
								},
								weight: r.KeybindingWeight.EditorContrib,
							},
						});
					}
				}
				e.$hlc = p;
				class o extends g {
					constructor() {
						super({
							inSelectionMode: !0,
							wordNavigationType: w.WordNavigationType.WordEnd,
							id: "cursorWordPartRightSelect",
							precondition: void 0,
							kbOpts: {
								kbExpr: C.EditorContextKeys.textInputFocus,
								primary: 0,
								mac: {
									primary:
										t.KeyMod.WinCtrl |
										t.KeyMod.Alt |
										t.KeyMod.Shift |
										t.KeyCode.RightArrow,
								},
								weight: r.KeybindingWeight.EditorContrib,
							},
						});
					}
				}
				(e.$ilc = o),
					(0, i.$mtb)(new u()),
					(0, i.$mtb)(new a()),
					(0, i.$mtb)(new c()),
					(0, i.$mtb)(new n()),
					(0, i.$mtb)(new p()),
					(0, i.$mtb)(new o());
			},
		)
