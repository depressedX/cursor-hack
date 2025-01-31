import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/hierarchicalKind.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/strings.js';
import '../../../browser/editorExtensions.js';
import '../../../common/editorContextKeys.js';
import './codeAction.js';
import '../../../../nls.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../common/types.js';
import './codeActionController.js';
import './codeActionModel.js';
define(
			de[2907],
			he([1, 0, 318, 27, 37, 46, 71, 393, 4, 8, 43, 291, 500, 1642]),
			function (ce /*require*/,
 e /*exports*/,
 t /*hierarchicalKind*/,
 i /*keyCodes*/,
 w /*strings*/,
 E /*editorExtensions*/,
 C /*editorContextKeys*/,
 d /*codeAction*/,
 m /*nls*/,
 r /*contextkey*/,
 u /*keybindingsRegistry*/,
 a /*types*/,
 h /*codeActionController*/,
 c /*codeActionModel*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$IBb =
						e.$HBb =
						e.$GBb =
						e.$FBb =
						e.$EBb =
						e.$DBb =
						e.$CBb =
							void 0),
					(m = mt(m));
				function n(v) {
					return r.$Kj.regex(
						c.$yBb.keys()[0],
						new RegExp("(\\s|^)" + (0, w.$of)(v.value) + "\\b"),
					);
				}
				const g = {
					type: "object",
					defaultSnippets: [{ body: { kind: "" } }],
					properties: {
						kind: { type: "string", description: m.localize(898, null) },
						apply: {
							type: "string",
							description: m.localize(899, null),
							default: a.CodeActionAutoApply.IfSingle,
							enum: [
								a.CodeActionAutoApply.First,
								a.CodeActionAutoApply.IfSingle,
								a.CodeActionAutoApply.Never,
							],
							enumDescriptions: [
								m.localize(900, null),
								m.localize(901, null),
								m.localize(902, null),
							],
						},
						preferred: {
							type: "boolean",
							default: !1,
							description: m.localize(903, null),
						},
					},
				};
				function p(v, S, I, T, P = a.CodeActionTriggerSource.Default) {
					v.hasModel() &&
						h.$BBb.get(v)?.manualTriggerAtCurrentPosition(S, P, I, T);
				}
				class o extends E.$itb {
					constructor() {
						super({
							id: d.$MAb,
							label: m.localize(904, null),
							alias: "Quick Fix...",
							precondition: r.$Kj.and(
								C.EditorContextKeys.writable,
								C.EditorContextKeys.hasCodeActionsProvider,
							),
							kbOpts: {
								kbExpr: C.EditorContextKeys.textInputFocus,
								primary: i.KeyMod.CtrlCmd | i.KeyCode.Period,
								weight: u.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(S, I) {
						return p(
							I,
							m.localize(905, null),
							void 0,
							void 0,
							a.CodeActionTriggerSource.QuickFix,
						);
					}
				}
				e.$CBb = o;
				class f extends E.$htb {
					constructor() {
						super({
							id: d.$LAb,
							precondition: r.$Kj.and(
								C.EditorContextKeys.writable,
								C.EditorContextKeys.hasCodeActionsProvider,
							),
							metadata: {
								description: "Trigger a code action",
								args: [{ name: "args", schema: g }],
							},
						});
					}
					runEditorCommand(S, I, T) {
						const P = a.$JAb.fromUser(T, {
							kind: t.$1L.Empty,
							apply: a.CodeActionAutoApply.IfSingle,
						});
						return p(
							I,
							typeof T?.kind == "string"
								? P.preferred
									? m.localize(906, null, T.kind)
									: m.localize(907, null, T.kind)
								: P.preferred
									? m.localize(908, null)
									: m.localize(909, null),
							{
								include: P.kind,
								includeSourceActions: !0,
								onlyIncludePreferredActions: P.preferred,
							},
							P.apply,
						);
					}
				}
				e.$DBb = f;
				class b extends E.$itb {
					constructor() {
						super({
							id: d.$OAb,
							label: m.localize(910, null),
							alias: "Refactor...",
							precondition: r.$Kj.and(
								C.EditorContextKeys.writable,
								C.EditorContextKeys.hasCodeActionsProvider,
							),
							kbOpts: {
								kbExpr: C.EditorContextKeys.textInputFocus,
								primary: i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.KeyR,
								mac: {
									primary: i.KeyMod.WinCtrl | i.KeyMod.Shift | i.KeyCode.KeyR,
								},
								weight: u.KeybindingWeight.EditorContrib,
							},
							contextMenuOpts: {
								group: "1_modification",
								order: 2,
								when: r.$Kj.and(
									C.EditorContextKeys.writable,
									n(a.$GAb.Refactor),
								),
							},
							metadata: {
								description: "Refactor...",
								args: [{ name: "args", schema: g }],
							},
						});
					}
					run(S, I, T) {
						const P = a.$JAb.fromUser(T, {
							kind: a.$GAb.Refactor,
							apply: a.CodeActionAutoApply.Never,
						});
						return p(
							I,
							typeof T?.kind == "string"
								? P.preferred
									? m.localize(911, null, T.kind)
									: m.localize(912, null, T.kind)
								: P.preferred
									? m.localize(913, null)
									: m.localize(914, null),
							{
								include: a.$GAb.Refactor.contains(P.kind) ? P.kind : t.$1L.None,
								onlyIncludePreferredActions: P.preferred,
							},
							P.apply,
							a.CodeActionTriggerSource.Refactor,
						);
					}
				}
				e.$EBb = b;
				class s extends E.$itb {
					constructor() {
						super({
							id: d.$QAb,
							label: m.localize(915, null),
							alias: "Source Action...",
							precondition: r.$Kj.and(
								C.EditorContextKeys.writable,
								C.EditorContextKeys.hasCodeActionsProvider,
							),
							contextMenuOpts: {
								group: "1_modification",
								order: 2.1,
								when: r.$Kj.and(C.EditorContextKeys.writable, n(a.$GAb.Source)),
							},
							metadata: {
								description: "Source Action...",
								args: [{ name: "args", schema: g }],
							},
						});
					}
					run(S, I, T) {
						const P = a.$JAb.fromUser(T, {
							kind: a.$GAb.Source,
							apply: a.CodeActionAutoApply.Never,
						});
						return p(
							I,
							typeof T?.kind == "string"
								? P.preferred
									? m.localize(916, null, T.kind)
									: m.localize(917, null, T.kind)
								: P.preferred
									? m.localize(918, null)
									: m.localize(919, null),
							{
								include: a.$GAb.Source.contains(P.kind) ? P.kind : t.$1L.None,
								includeSourceActions: !0,
								onlyIncludePreferredActions: P.preferred,
							},
							P.apply,
							a.CodeActionTriggerSource.SourceAction,
						);
					}
				}
				e.$FBb = s;
				class l extends E.$itb {
					constructor() {
						super({
							id: d.$RAb,
							label: m.localize(920, null),
							alias: "Organize Imports",
							precondition: r.$Kj.and(
								C.EditorContextKeys.writable,
								n(a.$GAb.SourceOrganizeImports),
							),
							kbOpts: {
								kbExpr: C.EditorContextKeys.textInputFocus,
								primary: i.KeyMod.Shift | i.KeyMod.Alt | i.KeyCode.KeyO,
								weight: u.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(S, I) {
						return p(
							I,
							m.localize(921, null),
							{
								include: a.$GAb.SourceOrganizeImports,
								includeSourceActions: !0,
							},
							a.CodeActionAutoApply.IfSingle,
							a.CodeActionTriggerSource.OrganizeImports,
						);
					}
				}
				e.$GBb = l;
				class y extends E.$itb {
					constructor() {
						super({
							id: d.$SAb,
							label: m.localize(922, null),
							alias: "Fix All",
							precondition: r.$Kj.and(
								C.EditorContextKeys.writable,
								n(a.$GAb.SourceFixAll),
							),
						});
					}
					run(S, I) {
						return p(
							I,
							m.localize(923, null),
							{ include: a.$GAb.SourceFixAll, includeSourceActions: !0 },
							a.CodeActionAutoApply.IfSingle,
							a.CodeActionTriggerSource.FixAll,
						);
					}
				}
				e.$HBb = y;
				class $ extends E.$itb {
					constructor() {
						super({
							id: d.$NAb,
							label: m.localize(924, null),
							alias: "Auto Fix...",
							precondition: r.$Kj.and(
								C.EditorContextKeys.writable,
								n(a.$GAb.QuickFix),
							),
							kbOpts: {
								kbExpr: C.EditorContextKeys.textInputFocus,
								primary: i.KeyMod.Alt | i.KeyMod.Shift | i.KeyCode.Period,
								mac: {
									primary: i.KeyMod.CtrlCmd | i.KeyMod.Alt | i.KeyCode.Period,
								},
								weight: u.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(S, I) {
						return p(
							I,
							m.localize(925, null),
							{ include: a.$GAb.QuickFix, onlyIncludePreferredActions: !0 },
							a.CodeActionAutoApply.IfSingle,
							a.CodeActionTriggerSource.AutoFix,
						);
					}
				}
				e.$IBb = $;
			},
		)
