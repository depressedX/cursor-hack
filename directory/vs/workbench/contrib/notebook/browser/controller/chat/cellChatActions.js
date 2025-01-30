import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/codicons.js';
import '../../../../../../base/common/keyCodes.js';
import '../../../../../../editor/common/editorContextKeys.js';
import '../../../../../../nls.js';
import '../../../../../../platform/accessibility/common/accessibility.js';
import '../../../../../../platform/actions/common/actions.js';
import '../../../../../../platform/commands/common/commands.js';
import '../../../../../../platform/configuration/common/configuration.js';
import '../../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../../platform/contextkey/common/contextkeys.js';
import '../../../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../inlineChat/common/inlineChat.js';
import './notebookChatContext.js';
import './notebookChatController.js';
import '../coreActions.js';
import '../insertCellActions.js';
import '../../notebookBrowser.js';
import '../../../common/notebookCommon.js';
import '../../../common/notebookContextKeys.js';
define(
			de[4086],
			he([
				1, 0, 14, 27, 71, 4, 91, 11, 31, 10, 8, 179, 43, 257, 688, 1359, 238,
				1846, 108, 70, 176,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*codicons*/,
				i /*keyCodes*/,
				w /*editorContextKeys*/,
				E /*nls*/,
				C /*accessibility*/,
				d /*actions*/,
				m /*commands*/,
				r /*configuration*/,
				u /*contextkey*/,
				a /*contextkeys*/,
				h /*keybindingsRegistry*/,
				c /*inlineChat*/,
				n /*notebookChatContext*/,
				g /*notebookChatController*/,
				p /*coreActions*/,
				o /*insertCellActions*/,
				f /*notebookBrowser*/,
				b /*notebookCommon*/,
				s /*notebookContextKeys*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, d.$4X)(
						class extends p.$x5b {
							constructor() {
								super({
									id: "notebook.cell.chat.accept",
									title: (0, E.localize2)(7848, "Make Request"),
									icon: t.$ak.send,
									keybinding: {
										when: u.$Kj.and(n.$o1b, c.$XKb, s.$FJb.negate()),
										weight: h.KeybindingWeight.WorkbenchContrib,
										primary: i.KeyCode.Enter,
									},
									menu: {
										id: n.$s1b,
										group: "navigation",
										order: 1,
										when: n.$p1b.negate(),
									},
									f1: !1,
								});
							}
							async runWithContext(y, $) {
								g.$y1b.get($.notebookEditor)?.acceptInput();
							}
						},
					),
					(0, d.$4X)(
						class extends p.$z5b {
							constructor() {
								super({
									id: "notebook.cell.chat.arrowOutUp",
									title: (0, E.localize)(7831, null),
									keybinding: {
										when: u.$Kj.and(
											n.$o1b,
											c.$XKb,
											c.$2Kb,
											s.$FJb.negate(),
											C.$YK.negate(),
										),
										weight: h.KeybindingWeight.EditorCore + 7,
										primary: i.KeyMod.CtrlCmd | i.KeyCode.UpArrow,
									},
									f1: !1,
								});
							}
							async runWithContext(y, $) {
								const v = $.notebookEditor,
									S = $.cell,
									I = v.getCellIndex(S);
								if (typeof I != "number" || I < 1 || v.getLength() === 0)
									return;
								const T = v.cellAt(I - 1),
									P =
										T.cellKind === b.CellKind.Markup &&
										T.getEditState() === f.CellEditState.Preview
											? "container"
											: "editor",
									k = T.textBuffer.getLineCount();
								await v.focusNotebookCell(T, P, { focusEditorLine: k });
							}
						},
					),
					(0, d.$4X)(
						class extends p.$x5b {
							constructor() {
								super({
									id: "notebook.cell.chat.arrowOutDown",
									title: (0, E.localize)(7832, null),
									keybinding: {
										when: u.$Kj.and(
											n.$o1b,
											c.$XKb,
											c.$3Kb,
											s.$FJb.negate(),
											C.$YK.negate(),
										),
										weight: h.KeybindingWeight.EditorCore + 7,
										primary: i.KeyMod.CtrlCmd | i.KeyCode.DownArrow,
									},
									f1: !1,
								});
							}
							async runWithContext(y, $) {
								await g.$y1b.get($.notebookEditor)?.focusNext();
							}
						},
					),
					(0, d.$4X)(
						class extends p.$z5b {
							constructor() {
								super({
									id: "notebook.cell.focusChatWidget",
									title: (0, E.localize)(7833, null),
									keybinding: {
										when: u.$Kj.and(
											s.$pJb,
											C.$YK.negate(),
											u.$Kj.and(
												u.$Kj.has(a.$aMb),
												w.EditorContextKeys.editorTextFocus,
												b.$16.notEqualsTo("bottom"),
												b.$16.notEqualsTo("none"),
											),
											w.EditorContextKeys.isEmbeddedDiffEditor.negate(),
										),
										weight: h.KeybindingWeight.EditorCore + 7,
										primary: i.KeyMod.CtrlCmd | i.KeyCode.UpArrow,
									},
									f1: !1,
								});
							}
							async runWithContext(y, $) {
								const v = $.notebookEditor.getCellIndex($.cell);
								await g.$y1b
									.get($.notebookEditor)
									?.focusNearestWidget(v, "above");
							}
						},
					),
					(0, d.$4X)(
						class extends p.$z5b {
							constructor() {
								super({
									id: "notebook.cell.focusNextChatWidget",
									title: (0, E.localize)(7834, null),
									keybinding: {
										when: u.$Kj.and(
											s.$pJb,
											C.$YK.negate(),
											u.$Kj.and(
												u.$Kj.has(a.$aMb),
												w.EditorContextKeys.editorTextFocus,
												b.$16.notEqualsTo("top"),
												b.$16.notEqualsTo("none"),
											),
											w.EditorContextKeys.isEmbeddedDiffEditor.negate(),
										),
										weight: h.KeybindingWeight.EditorCore + 7,
										primary: i.KeyMod.CtrlCmd | i.KeyCode.DownArrow,
									},
									f1: !1,
								});
							}
							async runWithContext(y, $) {
								const v = $.notebookEditor.getCellIndex($.cell);
								await g.$y1b
									.get($.notebookEditor)
									?.focusNearestWidget(v, "below");
							}
						},
					),
					(0, d.$4X)(
						class extends p.$x5b {
							constructor() {
								super({
									id: "notebook.cell.chat.stop",
									title: (0, E.localize2)(7849, "Stop Request"),
									icon: t.$ak.debugStop,
									menu: {
										id: n.$s1b,
										group: "navigation",
										order: 1,
										when: n.$p1b,
									},
									f1: !1,
								});
							}
							async runWithContext(y, $) {
								g.$y1b.get($.notebookEditor)?.cancelCurrentRequest(!1);
							}
						},
					),
					(0, d.$4X)(
						class extends p.$x5b {
							constructor() {
								super({
									id: "notebook.cell.chat.close",
									title: (0, E.localize2)(7850, "Close Chat"),
									icon: t.$ak.close,
									menu: { id: n.$t1b, group: "navigation", order: 2 },
									f1: !1,
								});
							}
							async runWithContext(y, $) {
								g.$y1b.get($.notebookEditor)?.dismiss(!1);
							}
						},
					),
					(0, d.$4X)(
						class extends p.$x5b {
							constructor() {
								super({
									id: "notebook.cell.chat.acceptChanges",
									title: (0, E.localize2)(7851, "Accept Changes"),
									shortTitle: (0, E.localize)(7835, null),
									icon: t.$ak.check,
									tooltip: (0, E.localize)(7836, null),
									keybinding: [
										{
											when: u.$Kj.and(n.$o1b, c.$XKb, s.$FJb.negate()),
											weight: h.KeybindingWeight.EditorContrib + 10,
											primary: i.KeyMod.CtrlCmd | i.KeyCode.Enter,
										},
										{
											when: u.$Kj.and(n.$o1b, c.$XKb, n.$q1b, s.$FJb.negate()),
											weight: h.KeybindingWeight.EditorCore + 10,
											primary: i.KeyCode.Escape,
										},
										{
											when: u.$Kj.and(
												s.$pJb,
												u.$Kj.not(a.$aMb),
												s.$FJb.negate(),
												n.$r1b.isEqualTo("below"),
											),
											primary: i.KeyMod.CtrlCmd | i.KeyCode.Enter,
											weight: h.KeybindingWeight.WorkbenchContrib,
										},
									],
									menu: [
										{
											id: n.$u1b,
											group: "0_main",
											order: 0,
											when: c.$bLb.notEqualsTo(
												c.InlineChatResponseType.Messages,
											),
										},
									],
									f1: !1,
								});
							}
							async runWithContext(y, $) {
								g.$y1b.get($.notebookEditor)?.acceptSession();
							}
						},
					),
					(0, d.$4X)(
						class extends p.$x5b {
							constructor() {
								super({
									id: "notebook.cell.chat.discard",
									title: (0, E.localize)(7837, null),
									icon: t.$ak.discard,
									keybinding: {
										when: u.$Kj.and(
											n.$o1b,
											c.$XKb,
											n.$q1b.negate(),
											s.$FJb.negate(),
										),
										weight: h.KeybindingWeight.EditorContrib,
										primary: i.KeyCode.Escape,
									},
									menu: { id: n.$u1b, group: "0_main", order: 1 },
									f1: !1,
								});
							}
							async runWithContext(y, $) {
								g.$y1b.get($.notebookEditor)?.discard();
							}
						},
					);
				async function l(y, $, v, S, I, T) {
					const P = y.get(r.$gj),
						k = y.get(m.$ek);
					if (P.getValue(b.$56.cellChat))
						$.notebookEditor.focusContainer(),
							g.$y1b.get($.notebookEditor)?.run(v, S, I);
					else if (P.getValue(b.$56.cellGenerate)) {
						const L = $.notebookEditor.getActiveCell(),
							D =
								L?.getTextLength() === 0 && T !== "insertToolbar"
									? L
									: await (0, o.$tFc)(y, $, b.CellKind.Code, "below", !0);
						if (D) {
							D.enableAutoLanguageDetection(),
								await $.notebookEditor.revealFirstLineIfOutsideViewport(D);
							const M = $.notebookEditor.codeEditors.find(
								(N) => N[0] === D,
							)?.[1];
							M && (M.focus(), k.executeCommand("inlineChat.start"));
						}
					}
				}
				(0, d.$4X)(
					class extends p.$x5b {
						constructor() {
							super({
								id: "notebook.cell.chat.start",
								title: {
									value: "$(sparkle) " + (0, E.localize)(7838, null),
									original: "$(sparkle) Generate",
								},
								tooltip: (0, E.localize)(7839, null),
								metadata: {
									description: (0, E.localize)(7840, null),
									args: [
										{
											name: "args",
											schema: {
												type: "object",
												required: ["index"],
												properties: {
													index: { type: "number" },
													input: { type: "string" },
													autoSend: { type: "boolean" },
												},
											},
										},
									],
								},
								f1: !1,
								keybinding: {
									when: u.$Kj.and(
										s.$pJb,
										s.$tJb.isEqualTo(!0),
										u.$Kj.not(a.$aMb),
										n.$x1b,
										u.$Kj.or(
											u.$Kj.equals(`config.${b.$56.cellChat}`, !0),
											u.$Kj.equals(`config.${b.$56.cellGenerate}`, !0),
										),
									),
									weight: h.KeybindingWeight.WorkbenchContrib,
									primary: i.KeyMod.CtrlCmd | i.KeyCode.KeyI,
									secondary: [(0, i.$os)(i.$ps, i.KeyCode.KeyI)],
									mac: {
										primary: i.KeyMod.CtrlCmd | i.KeyCode.KeyI,
										secondary: [(0, i.$os)(i.$qs, i.KeyCode.KeyI)],
									},
								},
								menu: [
									{
										id: d.$XX.NotebookCellBetween,
										group: "inline",
										order: -1,
										when: u.$Kj.and(
											s.$tJb.isEqualTo(!0),
											n.$x1b,
											u.$Kj.or(
												u.$Kj.equals(`config.${b.$56.cellChat}`, !0),
												u.$Kj.equals(`config.${b.$56.cellGenerate}`, !0),
											),
										),
									},
								],
							});
						}
						getEditorContextFromArgsOrActive(y, ...$) {
							const [v] = $;
							if (!v) {
								const T = (0, p.$B5b)(y);
								if (!T) return;
								const P = T.getActiveCell();
								return P
									? {
											cell: P,
											notebookEditor: T,
											input: void 0,
											autoSend: void 0,
										}
									: void 0;
							}
							if (typeof v != "object" || typeof v.index != "number") return;
							const S = (0, p.$B5b)(y);
							return S
								? {
										cell: v.index <= 0 ? void 0 : S.cellAt(v.index - 1),
										notebookEditor: S,
										input: v.input,
										autoSend: v.autoSend,
									}
								: void 0;
						}
						async runWithContext(y, $) {
							const v = Math.max(
								0,
								$.cell ? $.notebookEditor.getCellIndex($.cell) + 1 : 0,
							);
							await l(y, $, v, $.input, $.autoSend, $.source);
						}
					},
				),
					(0, d.$4X)(
						class extends p.$x5b {
							constructor() {
								super({
									id: "notebook.cell.chat.startAtTop",
									title: {
										value: "$(sparkle) " + (0, E.localize)(7841, null),
										original: "$(sparkle) Generate",
									},
									tooltip: (0, E.localize)(7842, null),
									f1: !1,
									menu: [
										{
											id: d.$XX.NotebookCellListTop,
											group: "inline",
											order: -1,
											when: u.$Kj.and(
												s.$tJb.isEqualTo(!0),
												n.$x1b,
												u.$Kj.or(
													u.$Kj.equals(`config.${b.$56.cellChat}`, !0),
													u.$Kj.equals(`config.${b.$56.cellGenerate}`, !0),
												),
											),
										},
									],
								});
							}
							async runWithContext(y, $) {
								await l(y, $, 0, "", !1);
							}
						},
					),
					d.$ZX.appendMenuItem(d.$XX.NotebookToolbar, {
						command: {
							id: "notebook.cell.chat.start",
							icon: t.$ak.sparkle,
							title: (0, E.localize)(7843, null),
							tooltip: (0, E.localize)(7844, null),
						},
						order: -10,
						group: "navigation/add",
						when: u.$Kj.and(
							s.$tJb.isEqualTo(!0),
							u.$Kj.notEquals(
								"config.notebook.insertToolbarLocation",
								"betweenCells",
							),
							u.$Kj.notEquals(
								"config.notebook.insertToolbarLocation",
								"hidden",
							),
							n.$x1b,
							u.$Kj.or(
								u.$Kj.equals(`config.${b.$56.cellChat}`, !0),
								u.$Kj.equals(`config.${b.$56.cellGenerate}`, !0),
							),
						),
					}),
					(0, d.$4X)(
						class extends p.$x5b {
							constructor() {
								super({
									id: "notebook.cell.chat.focus",
									title: (0, E.localize)(7845, null),
									keybinding: [
										{
											when: u.$Kj.and(
												s.$pJb,
												u.$Kj.not(a.$aMb),
												n.$r1b.isEqualTo("above"),
											),
											primary: i.KeyMod.CtrlCmd | i.KeyCode.DownArrow,
											weight: h.KeybindingWeight.WorkbenchContrib,
										},
										{
											when: u.$Kj.and(
												s.$pJb,
												u.$Kj.not(a.$aMb),
												n.$r1b.isEqualTo("below"),
											),
											primary: i.KeyMod.CtrlCmd | i.KeyCode.UpArrow,
											weight: h.KeybindingWeight.WorkbenchContrib,
										},
									],
									f1: !1,
								});
							}
							async runWithContext(y, $) {
								g.$y1b.get($.notebookEditor)?.focus();
							}
						},
					),
					(0, d.$4X)(
						class extends p.$x5b {
							constructor() {
								super({
									id: "notebook.cell.chat.focusNextCell",
									title: (0, E.localize)(7846, null),
									keybinding: [
										{
											when: u.$Kj.and(n.$o1b, c.$XKb),
											primary: i.KeyMod.CtrlCmd | i.KeyCode.DownArrow,
											weight: h.KeybindingWeight.WorkbenchContrib,
										},
									],
									f1: !1,
								});
							}
							async runWithContext(y, $) {
								g.$y1b.get($.notebookEditor)?.focusNext();
							}
						},
					),
					(0, d.$4X)(
						class extends p.$x5b {
							constructor() {
								super({
									id: "notebook.cell.chat.focusPreviousCell",
									title: (0, E.localize)(7847, null),
									keybinding: [
										{
											when: u.$Kj.and(n.$o1b, c.$XKb),
											primary: i.KeyMod.CtrlCmd | i.KeyCode.UpArrow,
											weight: h.KeybindingWeight.WorkbenchContrib,
										},
									],
									f1: !1,
								});
							}
							async runWithContext(y, $) {
								g.$y1b.get($.notebookEditor)?.focusAbove();
							}
						},
					),
					(0, d.$4X)(
						class extends p.$x5b {
							constructor() {
								super({
									id: "notebook.cell.chat.previousFromHistory",
									title: (0, E.localize2)(7852, "Previous From History"),
									precondition: u.$Kj.and(n.$o1b, c.$XKb),
									keybinding: {
										when: u.$Kj.and(n.$o1b, c.$XKb),
										weight: h.KeybindingWeight.EditorCore + 10,
										primary: i.KeyCode.UpArrow,
									},
									f1: !1,
								});
							}
							async runWithContext(y, $) {
								g.$y1b.get($.notebookEditor)?.populateHistory(!0);
							}
						},
					),
					(0, d.$4X)(
						class extends p.$x5b {
							constructor() {
								super({
									id: "notebook.cell.chat.nextFromHistory",
									title: (0, E.localize2)(7853, "Next From History"),
									precondition: u.$Kj.and(n.$o1b, c.$XKb),
									keybinding: {
										when: u.$Kj.and(n.$o1b, c.$XKb),
										weight: h.KeybindingWeight.EditorCore + 10,
										primary: i.KeyCode.DownArrow,
									},
									f1: !1,
								});
							}
							async runWithContext(y, $) {
								g.$y1b.get($.notebookEditor)?.populateHistory(!1);
							}
						},
					),
					(0, d.$4X)(
						class extends p.$z5b {
							constructor() {
								super({
									id: "notebook.cell.chat.restore",
									title: (0, E.localize2)(7854, "Generate"),
									icon: t.$ak.sparkle,
									menu: {
										id: d.$XX.NotebookCellTitle,
										group: p.$q5b,
										order: 0,
										when: u.$Kj.and(
											s.$tJb.isEqualTo(!0),
											n.$x1b,
											s.$QJb,
											u.$Kj.equals(`config.${b.$56.cellChat}`, !0),
										),
									},
									f1: !1,
								});
							}
							async runWithContext(y, $) {
								const v = $.cell;
								if (!v) return;
								const S = $.notebookEditor,
									I = g.$y1b.get(S);
								if (!I) return;
								const T = I.getPromptFromCache(v);
								T && I.restore(v, T);
							}
						},
					);
			},
		),
		