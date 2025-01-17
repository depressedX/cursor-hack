import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../editor/common/core/range.js';
import '../../../../../editor/common/core/wordHelper.js';
import '../../../../../editor/common/languages.js';
import '../../../../../editor/common/services/languageFeatures.js';
import '../../../../../nls.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/registry/common/platform.js';
import '../../../../common/contributions.js';
import '../actions/chatExecuteActions.js';
import '../chat.js';
import '../chatInputPart.js';
import './chatDynamicVariables.js';
import '../../common/chatAgents.js';
import '../../common/chatParserTypes.js';
import '../../common/chatSlashCommands.js';
import '../../common/chatVariables.js';
import '../../common/languageModelToolsService.js';
import '../../../../services/lifecycle/common/lifecycle.js';
define(
			de[4072],
			he([
				1, 0, 3, 17, 409, 74, 69, 4, 11, 10, 30, 55, 1047, 208, 1329, 1060, 153,
				329, 829, 503, 569, 52,
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
			) {
				"use strict";
				var y, $;
				Object.defineProperty(e, "__esModule", { value: !0 });
				let v = class extends t.$1c {
					constructor(D, M, N) {
						super(),
							(this.b = D),
							(this.f = M),
							(this.g = N),
							this.D(
								this.b.completionProvider.register(
									{ scheme: n.$VYb.INPUT_SCHEME, hasAccessToAllModels: !0 },
									{
										_debugDisplayName: "globalSlashCommands",
										triggerCharacters: ["/"],
										provideCompletionItems: async (A, R, O, B) => {
											const U = this.f.getWidgetByInputUri(A.uri);
											if (!U || !U.viewModel || !P(A, R, /\/\w*/g)) return null;
											if (U.parsedInput.parts.find((q) => q instanceof o.$U2))
												return;
											const H = this.g.getCommands(U.location);
											return H
												? {
														suggestions: H.map((q, V) => {
															const G = `/${q.command}`;
															return {
																label: G,
																insertText: q.executeImmediately ? "" : `${G} `,
																detail: q.detail,
																range: new i.$iL(1, 1, 1, 1),
																sortText: q.sortText ?? "a".repeat(V + 1),
																kind: E.CompletionItemKind.Text,
																command: q.executeImmediately
																	? {
																			id: h.$PYb.ID,
																			title: G,
																			arguments: [
																				{ widget: U, inputValue: `${G} ` },
																			],
																		}
																	: void 0,
															};
														}),
													}
												: null;
										},
									},
								),
							);
					}
				};
				(v = Ne([j(0, C.$k3), j(1, c.$GYb), j(2, f.$L2)], v)),
					u.$Io
						.as(a.Extensions.Workbench)
						.registerWorkbenchContribution(v, l.LifecyclePhase.Eventually);
				let S = class extends t.$1c {
					constructor(D, M, N, A) {
						super(),
							(this.b = D),
							(this.f = M),
							(this.g = N),
							(this.h = A),
							this.D(
								this.b.completionProvider.register(
									{ scheme: n.$VYb.INPUT_SCHEME, hasAccessToAllModels: !0 },
									{
										_debugDisplayName: "chatAgent",
										triggerCharacters: ["@"],
										provideCompletionItems: async (R, O, B, U) => {
											const z = this.f.getWidgetByInputUri(R.uri);
											if (!z || !z.viewModel) return null;
											const x = z.parsedInput.parts.find(
												(V) => V instanceof o.$U2,
											);
											return x && !i.$iL.containsPosition(x.editorRange, O)
												? void 0
												: P(R, O, /@\w*/g)
													? {
															suggestions: this.g
																.getAgents()
																.filter((V) => !V.isDefault)
																.filter((V) => V.locations.includes(z.location))
																.map((V, G) => {
																	const { label: K, isDupe: J } = this.j(V);
																	return {
																		label: J
																			? {
																					label: K,
																					description: V.description,
																					detail: ` (${V.publisherDisplayName})`,
																				}
																			: K,
																		insertText: `${K} `,
																		detail: V.description,
																		range: new i.$iL(1, 1, 1, 1),
																		command: {
																			id: I.ID,
																			title: I.ID,
																			arguments: [{ agent: V, widget: z }],
																		},
																		kind: E.CompletionItemKind.Text,
																	};
																}),
														}
													: null;
										},
									},
								),
							),
							this.D(
								this.b.completionProvider.register(
									{ scheme: n.$VYb.INPUT_SCHEME, hasAccessToAllModels: !0 },
									{
										_debugDisplayName: "chatAgentSubcommand",
										triggerCharacters: ["/"],
										provideCompletionItems: async (R, O, B, U) => {
											const z = this.f.getWidgetByInputUri(R.uri);
											if (!z || !z.viewModel) return;
											const F = P(R, O, /\/\w*/g);
											if (!F) return null;
											const x = z.parsedInput.parts,
												H = x.findIndex((G) => G instanceof o.$U2);
											if (H < 0 || x.find((G) => G instanceof o.$V2)) return;
											for (const G of x.slice(H + 1))
												if (
													!(G instanceof o.$O2) ||
													!G.text.trim().match(/^(\/\w*)?$/)
												)
													return;
											return {
												suggestions: x[H].agent.slashCommands.map((G, K) => {
													const J = `/${G.name}`;
													return {
														label: J,
														insertText: `${J} `,
														detail: G.description,
														range: F,
														kind: E.CompletionItemKind.Text,
													};
												}),
											};
										},
									},
								),
							),
							this.D(
								this.b.completionProvider.register(
									{ scheme: n.$VYb.INPUT_SCHEME, hasAccessToAllModels: !0 },
									{
										_debugDisplayName: "chatAgentAndSubcommand",
										triggerCharacters: ["/"],
										provideCompletionItems: async (R, O, B, U) => {
											const z = this.f.getWidgetByInputUri(R.uri),
												F = z?.viewModel;
											if (!z || !F) return;
											if (!P(R, O, /\/\w*/g)) return null;
											const H = this.g
													.getAgents()
													.filter((G) => G.locations.includes(z.location)),
												q = (G, K) => {
													const J =
														G.id === "github.copilot.terminalPanel"
															? "0000"
															: "";
													return `${o.$R2}${J}${G.name}.${K}`;
												};
											return {
												suggestions: H.filter((G) => !G.isDefault)
													.map((G) => {
														const { label: K, isDupe: J } = this.j(G),
															W = G.description;
														return {
															label: J
																? {
																		label: K,
																		description: G.description,
																		detail: ` (${G.publisherDisplayName})`,
																	}
																: K,
															detail: W,
															filterText: `${o.$R2}${G.name}`,
															insertText: `${K} `,
															range: new i.$iL(1, 1, 1, 1),
															kind: E.CompletionItemKind.Text,
															sortText: `${o.$R2}${G.name}`,
															command: {
																id: I.ID,
																title: I.ID,
																arguments: [{ agent: G, widget: z }],
															},
														};
													})
													.concat(
														H.flatMap((G) =>
															G.slashCommands.map((K, J) => {
																const { label: W, isDupe: X } = this.j(G),
																	Y = `${o.$R2}${K.name}`,
																	ie = {
																		label: {
																			label: Y,
																			description: W,
																			detail: X
																				? ` (${G.publisherDisplayName})`
																				: void 0,
																		},
																		filterText: q(G, K.name),
																		commitCharacters: [" "],
																		insertText: `${W} ${Y} `,
																		detail: `(${W}) ${K.description ?? ""}`,
																		range: new i.$iL(1, 1, 1, 1),
																		kind: E.CompletionItemKind.Text,
																		sortText: `${o.$R2}${G.name}${K.name}`,
																		command: {
																			id: I.ID,
																			title: I.ID,
																			arguments: [{ agent: G, widget: z }],
																		},
																	};
																return (
																	G.isDefault &&
																		((ie.label = Y),
																		(ie.insertText = `${Y} `),
																		(ie.detail = K.description)),
																	ie
																);
															}),
														),
													),
											};
										},
									},
								),
							);
					}
					j(D) {
						const M = this.h.getAgentNameRestriction(D),
							N = `${o.$Q2}${M ? D.name : ((0, p.$h3))(D)}`,
							A = M && this.g.agentHasDupeName(D.id);
						return { label: N, isDupe: A };
					}
				};
				(S = Ne([j(0, C.$k3), j(1, c.$GYb), j(2, p.$c3), j(3, p.$f3)], S)),
					u.$Io
						.as(a.Extensions.Workbench)
						.registerWorkbenchContribution(S, l.LifecyclePhase.Eventually);
				class I extends m.$3X {
					static {
						this.ID = "workbench.action.chat.assignSelectedAgent";
					}
					constructor() {
						super({ id: I.ID, title: "" });
					}
					async run(D, ...M) {
						const N = M[0];
						!N ||
							!N.widget ||
							!N.agent ||
							(N.widget.lastSelectedAgent = N.agent);
					}
				}
				(0, m.$4X)(I);
				let T = class extends t.$1c {
					static {
						y = this;
					}
					static {
						this.b = new RegExp(`${o.$P2}\\w*`, "g");
					}
					constructor(D, M) {
						super(),
							(this.f = D),
							(this.g = M),
							this.D(
								this.f.completionProvider.register(
									{ scheme: n.$VYb.INPUT_SCHEME, hasAccessToAllModels: !0 },
									{
										_debugDisplayName: "chatDynamicCompletions",
										triggerCharacters: [o.$P2],
										provideCompletionItems: async (N, A, R, O) => {
											const B = this.g.getWidgetByInputUri(N.uri);
											if (!B || !B.supportsFileReferences) return null;
											const U = P(N, A, y.b, !0);
											if (!U) return null;
											const z = new i.$iL(
												A.lineNumber,
												U.replace.startColumn,
												A.lineNumber,
												U.replace.startColumn + 6,
											);
											return {
												suggestions: [
													{
														label: `${o.$P2}file`,
														insertText: `${o.$P2}file:`,
														detail: (0, d.localize)(4735, null),
														range: U,
														kind: E.CompletionItemKind.Text,
														command: {
															id: g.$Dmc.ID,
															title: g.$Dmc.ID,
															arguments: [{ widget: B, range: z }],
														},
														sortText: "z",
													},
												],
											};
										},
									},
								),
							);
					}
				};
				(T = y = Ne([j(0, C.$k3), j(1, c.$GYb)], T)),
					u.$Io
						.as(a.Extensions.Workbench)
						.registerWorkbenchContribution(T, l.LifecyclePhase.Eventually);
				function P(L, D, M, N = !1) {
					const A = (0, w.$WK)(D.column, M, L.getLineContent(D.lineNumber), 0);
					if (
						(!A && L.getWordUntilPosition(D).word) ||
						(A &&
							N &&
							L.getWordUntilPosition({
								lineNumber: D.lineNumber,
								column: A.startColumn,
							}).word)
					)
						return;
					let R, O;
					return (
						A
							? ((R = new i.$iL(
									D.lineNumber,
									A.startColumn,
									D.lineNumber,
									D.column,
								)),
								(O = new i.$iL(
									D.lineNumber,
									A.startColumn,
									D.lineNumber,
									A.endColumn,
								)))
							: (R = O = i.$iL.fromPositions(D)),
						{ insert: R, replace: O, varWord: A }
					);
				}
				let k = class extends t.$1c {
					static {
						$ = this;
					}
					static {
						this.b = new RegExp(`${o.$P2}\\w*`, "g");
					}
					constructor(D, M, N, A, R) {
						super(),
							(this.f = D),
							(this.g = M),
							(this.h = N),
							this.D(
								this.f.completionProvider.register(
									{ scheme: n.$VYb.INPUT_SCHEME, hasAccessToAllModels: !0 },
									{
										_debugDisplayName: "chatVariables",
										triggerCharacters: [o.$P2],
										provideCompletionItems: async (O, B, U, z) => {
											const F = new Set();
											F.add(p.ChatAgentLocation.Panel);
											for (const ie of Object.values(p.ChatAgentLocation))
												typeof ie == "string" &&
													A.getValue(`chat.experimental.variables.${ie}`) &&
													F.add(ie);
											const x = this.g.getWidgetByInputUri(O.uri);
											if (!x || !F.has(x.location)) return null;
											const H = P(O, B, $.b, !0);
											if (!H) return null;
											const q = x.parsedInput.parts.find(
													(ie) => ie instanceof o.$U2,
												),
												V = q ? q.agent.metadata.supportsSlowVariables : !0,
												G = x.parsedInput.parts.filter(
													(ie) => ie instanceof o.$S2,
												),
												K = new Set(G.map((ie) => ie.variableName)),
												J = Array.from(this.h.getVariables(x.location))
													.filter((ie) => !K.has(ie.name))
													.filter((ie) => !ie.isSlow || V)
													.map((ie) => {
														const ne = `${o.$P2}${ie.name}`;
														return {
															label: ne,
															range: H,
															insertText: ne + " ",
															detail: ie.description,
															kind: E.CompletionItemKind.Text,
															sortText: "z",
														};
													}),
												W = x.parsedInput.parts.filter(
													(ie) => ie instanceof o.$T2,
												),
												X = new Set(W.map((ie) => ie.toolName)),
												Y = [];
											return (
												(!q || q.agent.supportsToolReferences) &&
													Y.push(
														...Array.from(R.getTools())
															.filter((ie) => ie.canBeInvokedManually)
															.filter((ie) => !X.has(ie.name ?? ""))
															.map((ie) => {
																const ne = `${o.$P2}${ie.name}`;
																return {
																	label: ne,
																	range: H,
																	insertText: ne + " ",
																	detail: ie.userDescription,
																	kind: E.CompletionItemKind.Text,
																	sortText: "z",
																};
															}),
													),
												{ suggestions: [...J, ...Y] }
											);
										},
									},
								),
							);
					}
				};
				(k = $ =
					Ne(
						[j(0, C.$k3), j(1, c.$GYb), j(2, b.$D2), j(3, r.$gj), j(4, s.$E2)],
						k,
					)),
					u.$Io
						.as(a.Extensions.Workbench)
						.registerWorkbenchContribution(k, l.LifecyclePhase.Eventually);
			},
		),
		