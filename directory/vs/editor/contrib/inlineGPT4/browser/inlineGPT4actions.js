import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/editorContextKeys.js';
import '../../../browser/editorExtensions.js';
import './inlineGPT4Controller.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import './cancel/renderInlineGPT4CancelVZ.js';
import '../../../../css!vs/editor/contrib/inlineGPT4/browser/inlineGPT4Widget.js';
define(
			de[3934],
			he([1, 0, 71, 46, 1344, 27, 43, 1595, 2310]),
			function (ce /*require*/,
 e /*exports*/,
 t /*editorContextKeys*/,
 i /*editorExtensions*/,
 w /*inlineGPT4Controller*/,
 E /*keyCodes*/,
 C /*keybindingsRegistry*/,
 d /*renderInlineGPT4CancelVZ*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0lc = e.$9lc = e.$8lc = e.$7lc = e.$6lc = e.$5lc = void 0);
				class m extends i.$itb {
					constructor() {
						super({
							id: "editor.action.acceptGPT4",
							label: "Accept GPT-4 Suggestion",
							alias: "Accept GPT-4 Suggestion",
							precondition: t.EditorContextKeys.hasGPT4InlineCompletion,
							kbOpts: { weight: 100, primary: E.KeyCode.Tab },
						});
					}
					run(g, p) {
						w.$8dc.get(p)?.acceptSuggestion();
					}
				}
				e.$5lc = m;
				class r extends i.$itb {
					constructor() {
						super({
							id: "editor.action.rejectGPT4",
							label: "Reject GPT-4 Suggestion",
							alias: "Reject GPT-4 Suggestion",
							precondition: t.EditorContextKeys.hasGPT4InlineCompletion,
							kbOpts: {
								kbExpr: t.EditorContextKeys.editorTextFocus,
								weight: C.KeybindingWeight.EditorContrib + 1e3,
								primary: E.KeyMod.CtrlCmd | E.KeyCode.KeyN,
							},
						});
					}
					run(g, p) {
						w.$8dc.get(p)?.rejectSuggestion();
					}
				}
				e.$6lc = r;
				class u extends i.$itb {
					constructor() {
						super({
							id: "editor.action.acceptPartialGPT4",
							label: "Accept Partial GPT-4 Suggestion",
							alias: "Accept Partial GPT-4 Suggestion",
							precondition: t.EditorContextKeys.hasGPT4InlineCompletion,
						});
					}
					run(g, p) {
						w.$8dc.get(p)?.acceptSuggestion();
					}
				}
				e.$7lc = u;
				class a extends i.$itb {
					constructor() {
						super({
							id: "editor.action.rejectPartialGPT4",
							label: "Reject Partial GPT-4 Suggestion",
							alias: "Reject Partial GPT-4 Suggestion",
							precondition: t.EditorContextKeys.hasGPT4InlineCompletion,
						});
					}
					run(g, p) {
						w.$8dc.get(p)?.rejectSuggestion();
					}
				}
				e.$8lc = a;
				class h extends i.$itb {
					constructor() {
						super({
							id: "editor.action.cancelGPT4WithCmdDelete",
							label: "Cancel GPT-4 Suggestion",
							alias: "Cancel GPT-4 Suggestion",
							precondition: t.EditorContextKeys.hasGPT4ActivelyGenerating,
							kbOpts: {
								weight: C.KeybindingWeight.EditorContrib + 1e3,
								primary: d.$4dc,
								secondary: [E.KeyCode.Escape],
							},
						});
					}
					run(g, p) {
						w.$8dc.get(p)?.cancel();
					}
				}
				e.$9lc = h;
				class c extends i.$itb {
					constructor() {
						super({
							id: "editor.action.triggerGPT4",
							label: "Trigger GPT-4 Suggestion",
							alias: "Trigger GPT-4 Suggestion",
							precondition: t.EditorContextKeys.writable,
						});
					}
					async run(g, p) {
						w.$8dc.get(p)?.triggerExplicitly();
					}
				}
				e.$0lc = c;
			},
		)
