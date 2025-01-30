import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../nls.js';
import '../../../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../common/contextkeys.js';
import './chatActions.js';
import './chatClear.js';
import '../chat.js';
import '../chatEditorInput.js';
import '../../common/chatContextKeys.js';
import '../../../../services/views/common/viewsService.js';
define(
			de[3806],
			he([1, 0, 14, 27, 4, 184, 11, 8, 43, 100, 402, 1288, 208, 552, 207, 89]),
			function (ce /*require*/,
 e /*exports*/,
 t /*codicons*/,
 i /*keyCodes*/,
 w /*nls*/,
 E /*accessibilitySignalService*/,
 C /*actions*/,
 d /*contextkey*/,
 m /*keybindingsRegistry*/,
 r /*contextkeys*/,
 u /*chatActions*/,
 a /*chatClear*/,
 h /*chat*/,
 c /*chatEditorInput*/,
 n /*chatContextKeys*/,
 g /*viewsService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$yIc = void 0),
					(e.$zIc = p),
					(e.$yIc = "workbench.action.chat.newChat");
				function p() {
					(0, C.$4X)(
						class extends C.$3X {
							constructor() {
								super({
									id: "workbench.action.chatEditor.newChat",
									title: (0, w.localize2)(4573, "New Chat"),
									icon: t.$ak.plus,
									f1: !1,
									precondition: n.$51,
									menu: [
										{
											id: C.$XX.EditorTitle,
											group: "navigation",
											order: 0,
											when: r.$TPb.isEqualTo(c.$cMb.EditorID),
										},
									],
								});
							}
							async run(b, ...s) {
								o(b.get(E.$Owb)), await (0, a.$1Yb)(b);
							}
						},
					),
						(0, C.$4X)(
							class extends C.$3X {
								constructor() {
									super({
										id: e.$yIc,
										title: (0, w.localize2)(4574, "New Chat"),
										category: u.$3Yb,
										icon: t.$ak.plus,
										precondition: n.$51,
										f1: !0,
										keybinding: {
											weight: m.KeybindingWeight.WorkbenchContrib,
											primary: i.KeyMod.CtrlCmd | i.KeyCode.KeyL,
											mac: { primary: i.KeyMod.WinCtrl | i.KeyCode.KeyL },
											when: n.$41,
										},
										menu: [
											{ id: C.$XX.ChatContext, group: "z_clear" },
											{
												id: C.$XX.ViewTitle,
												when: d.$Kj.equals("view", h.$MYb),
												group: "navigation",
												order: -1,
											},
										],
									});
								}
								async run(b, ...s) {
									const l = s[0],
										y = b.get(E.$Owb);
									if ((0, u.$2Yb)(l))
										o(y),
											l.chatView.widget.clear(),
											l.chatView.widget.focusInput();
									else {
										const $ = b.get(h.$GYb),
											v = b.get(g.$HMb);
										let S = $.lastFocusedWidget;
										S || (S = (await v.openView(h.$MYb)).widget),
											o(y),
											S.clear(),
											S.focusInput();
									}
								}
							},
						);
				}
				function o(f) {
					f.playSignal(E.$Twb.clear);
				}
			},
		),
		