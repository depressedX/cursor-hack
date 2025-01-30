import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/actions/common/actions.js';
import './bugBotLinterService.js';
import '../../../../base/common/constants.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../services/editor/browser/editorService.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../base/common/keyCodes.js';
import '../../../../editor/common/editorContextKeys.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/contextkey/common/contextkeys.js';
import './bugBotLinterPreviewBoxController.js';
define(
			de[4270],
			he([1, 0, 11, 850, 58, 46, 46, 56, 8, 1051, 43, 27, 71, 27, 179, 1989]),
			function (ce /*require*/,
 e /*exports*/,
 t /*actions*/,
 i /*bugBotLinterService*/,
 w /*constants*/,
 E /*editorExtensions*/,
 C /*editorExtensions*/,
 d /*editorBrowser*/,
 m /*contextkey*/,
 r /*editorService*/,
 u /*keybindingsRegistry*/,
 a /*keyCodes*/,
 h /*editorContextKeys*/,
 c /*keyCodes*/,
 n /*contextkeys*/,
 g /*bugBotLinterPreviewBoxController*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$FAc = void 0),
					r.$Bdc.registerEditorAction(w.$TW, (o, f, b) => {
						(0, C.$ntb)(
							class extends E.$itb {
								constructor() {
									super({
										id: w.$TW,
										label: "Dismiss Bug Finder Lint",
										alias: "Dismiss Bug Finder Lint",
										precondition: m.$Kj.function(() => {
											const s = f.activeEditorPane?.getControl();
											if (!(0, d.$0sb)(s)) return !1;
											const l = g.$EAc.get(s);
											return !(
												!l || l.widget.value.previewBoxStore.bug === void 0
											);
										}),
										kbOpts: {
											kbExpr: h.EditorContextKeys.editorTextFocus,
											primary: c.KeyMod.CtrlCmd | a.KeyCode.Backspace,
											weight: u.KeybindingWeight.CursorMaxPriority,
										},
									});
								}
								async run(s, l) {
									s.get(i.$idc).dismissBugBotLinter(l);
								}
							},
						);
					});
				class p extends t.$3X {
					constructor() {
						super({
							id: "bugBotLinter.triggerDummyLint",
							title: {
								value: "Trigger Dummy Lint (Debug)",
								original: "Trigger Dummy Lint (Debug)",
							},
							f1: !0,
							category: "Developer",
							precondition: n.$$Lb,
						});
					}
					async run(f) {
						await f.get(i.$idc).createDummyBug();
					}
				}
				(e.$FAc = p), (0, t.$4X)(p);
			},
		),
		