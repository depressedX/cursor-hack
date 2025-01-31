import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/hierarchicalKind.js';
import '../../../../base/common/keyCodes.js';
import '../../../browser/editorExtensions.js';
import '../../../common/editorContextKeys.js';
import '../../../common/editorFeatures.js';
import './copyPasteController.js';
import './defaultProviders.js';
import '../../../../nls.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
define(
			de[2918],
			he([1, 0, 318, 27, 46, 71, 588, 609, 1213, 4, 43]),
			function (ce /*require*/,
 e /*exports*/,
 t /*hierarchicalKind*/,
 i /*keyCodes*/,
 w /*editorExtensions*/,
 E /*editorContextKeys*/,
 C /*editorFeatures*/,
 d /*copyPasteController*/,
 m /*defaultProviders*/,
 r /*nls*/,
 u /*keybindingsRegistry*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(r = mt(r)),
					(0, w.$qtb)(
						d.$zAb.ID,
						d.$zAb,
						w.EditorContributionInstantiation.Eager,
					),
					(0, C.$SBb)(m.$xzb),
					(0, w.$mtb)(
						new (class extends w.$htb {
							constructor() {
								super({
									id: d.$xAb,
									precondition: d.$yAb,
									kbOpts: {
										weight: u.KeybindingWeight.EditorContrib,
										primary: i.KeyMod.CtrlCmd | i.KeyCode.Period,
									},
								});
							}
							runEditorCommand(a, h) {
								return d.$zAb.get(h)?.changePasteType();
							}
						})(),
					),
					(0, w.$mtb)(
						new (class extends w.$htb {
							constructor() {
								super({
									id: "editor.hidePasteWidget",
									precondition: d.$yAb,
									kbOpts: {
										weight: u.KeybindingWeight.EditorContrib,
										primary: i.KeyCode.Escape,
									},
								});
							}
							runEditorCommand(a, h) {
								d.$zAb.get(h)?.clearWidgets();
							}
						})(),
					),
					(0, w.$ntb)(
						class La extends w.$itb {
							static {
								this.d = {
									type: "object",
									properties: {
										kind: {
											type: "string",
											description: r.localize(979, null),
										},
									},
								};
							}
							constructor() {
								super({
									id: "editor.action.pasteAs",
									label: r.localize(980, null),
									alias: "Paste As...",
									precondition: E.EditorContextKeys.writable,
									metadata: {
										description: "Paste as",
										args: [{ name: "args", schema: La.d }],
									},
								});
							}
							run(h, c, n) {
								let g = typeof n?.kind == "string" ? n.kind : void 0;
								return (
									!g && n && (g = typeof n.id == "string" ? n.id : void 0),
									d.$zAb.get(c)?.pasteAs(g ? new t.$1L(g) : void 0)
								);
							}
						},
					),
					(0, w.$ntb)(
						class extends w.$itb {
							constructor() {
								super({
									id: "editor.action.pasteAsText",
									label: r.localize(981, null),
									alias: "Paste as Text",
									precondition: E.EditorContextKeys.writable,
								});
							}
							run(a, h) {
								return d.$zAb.get(h)?.pasteAs({ providerId: m.$vzb.id });
							}
						},
					);
			},
		)
