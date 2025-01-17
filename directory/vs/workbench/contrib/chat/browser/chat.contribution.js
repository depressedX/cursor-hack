import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/htmlContent.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../base/common/platform.js';
import '../../../../nls.js';
import '../../../../platform/accessibility/browser/accessibleViewRegistry.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/registry/common/platform.js';
import '../../../browser/editor.js';
import '../../../common/contributions.js';
import '../../../common/editor.js';
import './actions/chatAccessibilityHelp.js';
import './actions/chatActions.js';
import './actions/chatClearActions.js';
import './actions/chatCodeblockActions.js';
import './actions/chatContextActions.js';
import './actions/chatCopyActions.js';
import './actions/chatDeveloperActions.js';
import './actions/chatExecuteActions.js';
import './actions/chatFileTreeActions.js';
import './actions/chatImportExport.js';
import './actions/chatMoveActions.js';
import './actions/chatQuickInputActions.js';
import './actions/chatTitleActions.js';
import './chat.js';
import './chatAccessibilityService.js';
import './chatEditor.js';
import './chatEditorInput.js';
import './chatMarkdownDecorationsRenderer.js';
import './chatParticipantContributions.js';
import './chatQuick.js';
import './chatResponseAccessibleView.js';
import './chatVariables.js';
import './chatWidget.js';
import './codeBlockContextProviderService.js';
import '../common/chatAgents.js';
import '../common/chatParserTypes.js';
import '../common/chatService.js';
import '../common/chatServiceImpl.js';
import '../common/chatSlashCommands.js';
import '../common/chatVariables.js';
import '../common/chatWidgetHistoryService.js';
import '../common/languageModels.js';
import '../common/languageModelStats.js';
import '../common/languageModelToolsService.js';
import '../common/tools/languageModelToolsContribution.js';
import '../common/voiceChatService.js';
import '../../../services/editor/common/editorResolverService.js';
import '../../../services/lifecycle/common/lifecycle.js';
import './contrib/chatContextAttachments.js';
import './contrib/chatInputCompletions.js';
import './contrib/chatInputEditorContrib.js';
import './contrib/chatInputEditorHover.js';
import '../common/chatColors.js';
define(
			de[4111],
			he([
				1, 0, 94, 3, 23, 12, 4, 412, 31, 81, 102, 20, 5, 30, 192, 55, 44, 1857,
				402, 3806, 4082, 4110, 3807, 3012, 1047, 3808, 3809, 3810, 1358, 1328,
				208, 3549, 4065, 552, 1354, 4068, 4066, 3550, 4071, 481, 3010, 153, 329,
				218, 3572, 829, 503, 1235, 1023, 1807, 569, 3325, 1755, 231, 52, 1355,
				4072, 4073, 4074, 980,
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
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
				V,
				G,
				K,
				J,
				W,
				X,
				Y,
				ie,
				ne,
				ee,
				_,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(C = mt(C)),
					c.$Io
						.as(r.$No.Configuration)
						.registerConfiguration({
							id: "chatSidebar",
							title: C.localize(4620, null),
							type: "object",
							properties: {
								"chat.editor.fontSize": {
									type: "number",
									description: C.localize(4621, null),
									default: E.$m ? 12 : 14,
								},
								"chat.editor.fontFamily": {
									type: "string",
									description: C.localize(4622, null),
									default: "default",
								},
								"chat.editor.fontWeight": {
									type: "string",
									description: C.localize(4623, null),
									default: "default",
								},
								"chat.editor.wordWrap": {
									type: "string",
									description: C.localize(4624, null),
									default: "off",
									enum: ["on", "off"],
								},
								"chat.editor.lineHeight": {
									type: "number",
									description: C.localize(4625, null),
									default: 0,
								},
								"chat.experimental.implicitContext": {
									type: "boolean",
									description: C.localize(4626, null),
									deprecated: !0,
									default: !1,
								},
								"chat.experimental.variables.editor": {
									type: "boolean",
									description: C.localize(4627, null),
									default: !0,
								},
								"chat.experimental.variables.notebook": {
									type: "boolean",
									description: C.localize(4628, null),
									default: !1,
								},
								"chat.experimental.variables.terminal": {
									type: "boolean",
									description: C.localize(4629, null),
									default: !1,
								},
								"chat.experimental.detectParticipant.enabled": {
									type: "boolean",
									description: C.localize(4630, null),
									default: null,
								},
							},
						}),
					c.$Io
						.as(p.$a1.EditorPane)
						.registerEditorPane(
							n.$vVb.create(M.$ZYb, N.$cMb.EditorID, C.localize(4631, null)),
							[new u.$Ji(N.$cMb)],
						);
				let Q = class extends i.$1c {
					static {
						this.ID = "workbench.contrib.chatResolver";
					}
					constructor(le, oe) {
						super(),
							this.D(
								le.registerEditor(
									`${w.Schemas.vscodeChatSesssion}:**/**`,
									{
										id: N.$cMb.EditorID,
										label: C.localize(4632, null),
										priority: ee.RegisteredEditorPriority.builtin,
									},
									{
										singlePerResource: !0,
										canSupportResource: (ae) =>
											ae.scheme === w.Schemas.vscodeChatSesssion,
									},
									{
										createEditorInput: ({ resource: ae, options: pe }) => ({
											editor: oe.createInstance(N.$cMb, ae, pe),
											options: pe,
										}),
									},
								),
							);
					}
				};
				(Q = Ne([j(0, ee.$E6), j(1, h.$Li)], Q)),
					d.$Whc.register(new B.$QIc()),
					d.$Whc.register(new o.$vIc());
				let Z = class extends i.$1c {
					constructor(le, oe, ae, pe, $e) {
						super(),
							this.B.add(
								le.registerSlashCommand(
									{
										command: "clear",
										detail: C.localize(4633, null),
										sortText: "z2_clear",
										executeImmediately: !0,
										locations: [x.ChatAgentLocation.Panel],
									},
									async () => {
										oe.executeCommand(b.$yIc);
									},
								),
							),
							this.B.add(
								le.registerSlashCommand(
									{
										command: "help",
										detail: "",
										sortText: "z1_help",
										executeImmediately: !0,
										locations: [x.ChatAgentLocation.Panel],
									},
									async (ye, ue) => {
										const fe = ae.getDefaultAgent(x.ChatAgentLocation.Panel),
											me = ae.getAgents();
										fe?.metadata.helpTextPrefix &&
											((0, t.$el)(fe.metadata.helpTextPrefix)
												? ue.report({
														content: fe.metadata.helpTextPrefix,
														kind: "markdownContent",
													})
												: ue.report({
														content: new t.$cl(fe.metadata.helpTextPrefix),
														kind: "markdownContent",
													}),
											ue.report({
												content: new t.$cl(`

`),
												kind: "markdownContent",
											}));
										const ve = (
											await Promise.all(
												me
													.filter((ge) => ge.id !== fe?.id)
													.filter((ge) =>
														ge.locations.includes(x.ChatAgentLocation.Panel),
													)
													.map(async (ge) => {
														const be = ge.description
																? `- ${ge.description}`
																: "",
															Le = `- ${$e.invokeFunction((Oe) => (0, A.$oUb)(ge, !0, Oe))} ${be}`,
															Fe = ge.slashCommands
																.map((Oe) => {
																	const xe = Oe.description
																		? `- ${Oe.description}`
																		: "";
																	return `	* ${(0, A.$pUb)(ge, Oe)} ${xe}`;
																})
																.join(`
`);
														return (
															Le +
															`
` +
															Fe
														).trim();
													}),
											)
										).join(`
`);
										if (
											(ue.report({
												content: new t.$cl(ve, {
													isTrusted: { enabledCommands: [v.$PYb.ID] },
												}),
												kind: "markdownContent",
											}),
											fe?.metadata.helpTextVariablesPrefix)
										) {
											ue.report({
												content: new t.$cl(`

`),
												kind: "markdownContent",
											}),
												(0, t.$el)(fe.metadata.helpTextVariablesPrefix)
													? ue.report({
															content: fe.metadata.helpTextVariablesPrefix,
															kind: "markdownContent",
														})
													: ue.report({
															content: new t.$cl(
																fe.metadata.helpTextVariablesPrefix,
															),
															kind: "markdownContent",
														});
											const be = [
												...pe.getVariables(x.ChatAgentLocation.Panel),
												{ name: "file", description: C.localize(4634, null) },
											]
												.map(
													(Ce) =>
														`* \`${H.$P2}${Ce.name}\` - ${Ce.description}`,
												)
												.join(`
`);
											ue.report({
												content: new t.$cl(
													`
` + be,
												),
												kind: "markdownContent",
											});
										}
										fe?.metadata.helpTextPostfix &&
											(ue.report({
												content: new t.$cl(`

`),
												kind: "markdownContent",
											}),
											(0, t.$el)(fe.metadata.helpTextPostfix)
												? ue.report({
														content: fe.metadata.helpTextPostfix,
														kind: "markdownContent",
													})
												: ue.report({
														content: new t.$cl(fe.metadata.helpTextPostfix),
														kind: "markdownContent",
													}));
									},
								),
							);
					}
				};
				Z = Ne(
					[j(0, G.$L2), j(1, m.$ek), j(2, x.$c3), j(3, K.$D2), j(4, h.$Li)],
					Z,
				);
				const se = c.$Io.as(g.Extensions.Workbench);
				(0, g.$s6)(Q.ID, Q, g.WorkbenchPhase.BlockStartup),
					se.registerWorkbenchContribution(Z, _.LifecyclePhase.Eventually),
					c.$Io
						.as(p.$a1.EditorFactory)
						.registerEditorSerializer(N.$cMb.TypeID, N.$eMb),
					(0, g.$s6)(R.$NIc.ID, R.$NIc, g.WorkbenchPhase.BlockStartup),
					(0, g.$s6)(ie.$YIc.ID, ie.$YIc, g.WorkbenchPhase.BlockRestore),
					(0, g.$s6)(R.$OIc.ID, R.$OIc, g.WorkbenchPhase.Eventually),
					(0, f.$5Yb)(),
					(0, y.$GIc)(),
					(0, s.$CIc)(),
					(0, s.$DIc)(),
					(0, S.$IIc)(),
					(0, k.$8Yb)(),
					(0, v.$SYb)(),
					(0, P.$p9b)(),
					(0, I.$JIc)(),
					(0, T.$KIc)(),
					(0, b.$zIc)(),
					(0, l.$FIc)(),
					(0, $.$HIc)(),
					(0, a.$lK)(q.$J2, V.$XIc, a.InstantiationType.Delayed),
					(0, a.$lK)(L.$GYb, z.$YYb, a.InstantiationType.Delayed),
					(0, a.$lK)(L.$IYb, O.$PIc, a.InstantiationType.Delayed),
					(0, a.$lK)(L.$JYb, D.$MIc, a.InstantiationType.Delayed),
					(0, a.$lK)(J.$TYb, J.$UYb, a.InstantiationType.Delayed),
					(0, a.$lK)(W.$A2, W.$C2, a.InstantiationType.Delayed),
					(0, a.$lK)(X.$ymc, X.$zmc, a.InstantiationType.Delayed),
					(0, a.$lK)(G.$L2, G.$M2, a.InstantiationType.Delayed),
					(0, a.$lK)(x.$c3, x.$d3, a.InstantiationType.Delayed),
					(0, a.$lK)(x.$f3, x.$g3, a.InstantiationType.Delayed),
					(0, a.$lK)(K.$D2, U.$RIc, a.InstantiationType.Delayed),
					(0, a.$lK)(Y.$E2, Y.$F2, a.InstantiationType.Delayed),
					(0, a.$lK)(ne.$ZIc, ne.$2Ic, a.InstantiationType.Delayed),
					(0, a.$lK)(L.$KYb, F.$SIc, a.InstantiationType.Delayed);
			},
		),
		