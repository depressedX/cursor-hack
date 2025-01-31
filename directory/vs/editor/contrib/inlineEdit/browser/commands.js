import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/keyCodes.js';
import '../../../browser/editorExtensions.js';
import '../../../common/editorContextKeys.js';
import './commandIds.js';
import './inlineEditController.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
define(
			de[2916],
			he([1, 0, 27, 46, 71, 2587, 1690, 11, 8, 43]),
			function (ce /*require*/,
 e /*exports*/,
 t /*keyCodes*/,
 i /*editorExtensions*/,
 w /*editorContextKeys*/,
 E /*commandIds*/,
 C /*inlineEditController*/,
 d /*actions*/,
 m /*contextkey*/,
 r /*keybindingsRegistry*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ojc = e.$Njc = e.$Mjc = e.$Ljc = e.$Kjc = void 0);
				class u extends i.$itb {
					constructor() {
						super({
							id: E.$yjc,
							label: "Accept Inline Edit",
							alias: "Accept Inline Edit",
							precondition: m.$Kj.and(
								w.EditorContextKeys.writable,
								C.$Jjc.inlineEditVisibleContext,
							),
							kbOpts: [
								{
									weight: r.KeybindingWeight.EditorContrib + 1,
									primary: t.KeyCode.Tab,
									kbExpr: m.$Kj.and(
										w.EditorContextKeys.writable,
										C.$Jjc.inlineEditVisibleContext,
										C.$Jjc.cursorAtInlineEditContext,
									),
								},
							],
							menuOpts: [
								{
									menuId: d.$XX.InlineEditToolbar,
									title: "Accept",
									group: "primary",
									order: 1,
								},
							],
						});
					}
					async run(p, o) {
						await C.$Jjc.get(o)?.accept();
					}
				}
				e.$Kjc = u;
				class a extends i.$itb {
					constructor() {
						const p = m.$Kj.and(
							w.EditorContextKeys.writable,
							m.$Kj.not(C.$Jjc.inlineEditVisibleKey),
						);
						super({
							id: "editor.action.inlineEdit.trigger",
							label: "Trigger Inline Edit",
							alias: "Trigger Inline Edit",
							precondition: p,
							kbOpts: {
								weight: r.KeybindingWeight.EditorContrib + 1,
								primary: t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.Equal,
								kbExpr: p,
							},
						});
					}
					async run(p, o) {
						C.$Jjc.get(o)?.trigger();
					}
				}
				e.$Ljc = a;
				class h extends i.$itb {
					constructor() {
						const p = m.$Kj.and(
							w.EditorContextKeys.writable,
							C.$Jjc.inlineEditVisibleContext,
							m.$Kj.not(C.$Jjc.cursorAtInlineEditKey),
						);
						super({
							id: E.$Bjc,
							label: "Jump to Inline Edit",
							alias: "Jump to Inline Edit",
							precondition: p,
							kbOpts: {
								weight: r.KeybindingWeight.EditorContrib + 1,
								primary: t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.Equal,
								kbExpr: p,
							},
							menuOpts: [
								{
									menuId: d.$XX.InlineEditToolbar,
									title: "Jump To Edit",
									group: "primary",
									order: 3,
									when: p,
								},
							],
						});
					}
					async run(p, o) {
						C.$Jjc.get(o)?.jumpToCurrent();
					}
				}
				e.$Mjc = h;
				class c extends i.$itb {
					constructor() {
						const p = m.$Kj.and(
							w.EditorContextKeys.writable,
							C.$Jjc.cursorAtInlineEditContext,
						);
						super({
							id: E.$Cjc,
							label: "Jump Back from Inline Edit",
							alias: "Jump Back from Inline Edit",
							precondition: p,
							kbOpts: {
								weight: r.KeybindingWeight.EditorContrib + 10,
								primary: t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.Equal,
								kbExpr: p,
							},
							menuOpts: [
								{
									menuId: d.$XX.InlineEditToolbar,
									title: "Jump Back",
									group: "primary",
									order: 3,
									when: p,
								},
							],
						});
					}
					async run(p, o) {
						C.$Jjc.get(o)?.jumpBack();
					}
				}
				e.$Njc = c;
				class n extends i.$itb {
					constructor() {
						const p = m.$Kj.and(
							w.EditorContextKeys.writable,
							C.$Jjc.inlineEditVisibleContext,
						);
						super({
							id: E.$Ajc,
							label: "Reject Inline Edit",
							alias: "Reject Inline Edit",
							precondition: p,
							kbOpts: {
								weight: r.KeybindingWeight.EditorContrib,
								primary: t.KeyCode.Escape,
								kbExpr: p,
							},
							menuOpts: [
								{
									menuId: d.$XX.InlineEditToolbar,
									title: "Reject",
									group: "secondary",
									order: 2,
								},
							],
						});
					}
					async run(p, o) {
						await C.$Jjc.get(o)?.clear();
					}
				}
				e.$Ojc = n;
			},
		)
