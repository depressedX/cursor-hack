import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/async.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/marshalling.js';
import '../../../base/common/strings.js';
import '../../../base/common/themables.js';
import '../../../base/common/uri.js';
import '../../../editor/common/core/range.js';
import '../../../editor/common/core/wordHelper.js';
import '../../../editor/common/languages.js';
import '../../../editor/common/services/languageFeatures.js';
import '../../../platform/extensions/common/extensions.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../../platform/log/common/log.js';
import '../common/extHost.protocol.js';
import '../../contrib/chat/browser/chat.js';
import '../../contrib/chat/browser/chatInputPart.js';
import '../../contrib/chat/browser/contrib/chatDynamicVariables.js';
import '../../contrib/chat/common/chatAgents.js';
import '../../contrib/chat/common/chatParserTypes.js';
import '../../contrib/chat/common/chatRequestParser.js';
import '../../contrib/chat/common/chatService.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../services/extensions/common/extensions.js';
define(
			de[4069],
			he([
				1, 0, 15, 6, 3, 197, 37, 26, 9, 17, 409, 74, 69, 109, 5, 34, 88, 208,
				1329, 1060, 153, 329, 1022, 218, 101, 53,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Fmc = void 0);
				class I {
					get onDidAddProgress() {
						return this.a.event;
					}
					constructor(L) {
						(this.content = L),
							(this.kind = "progressTask"),
							(this.deferred = new t.$0h()),
							(this.a = new i.$re()),
							(this.progress = []);
					}
					task() {
						return this.deferred.p;
					}
					isSettled() {
						return this.deferred.isSettled;
					}
					complete(L) {
						this.deferred.complete(L);
					}
					add(L) {
						this.progress.push(L), this.a.fire(L);
					}
				}
				let T = class extends w.$1c {
					constructor(L, D, M, N, A, R, O, B) {
						super(),
							(this.q = D),
							(this.r = M),
							(this.s = N),
							(this.t = A),
							(this.u = R),
							(this.w = O),
							(this.y = B),
							(this.a = this.D(new w.$0c())),
							(this.b = this.D(new w.$0c())),
							(this.f = this.D(new w.$0c())),
							(this.g = this.D(new w.$0c())),
							(this.h = new Map()),
							(this.m = 0),
							(this.n = new Map()),
							(this.j = L.getProxy(p.$mbb.ExtHostChatAgents2)),
							this.D(
								this.r.onDidDisposeSession((U) => {
									this.j.$releaseSession(U.sessionId);
								}),
							),
							this.D(
								this.r.onDidPerformUserAction((U) => {
									if (typeof U.agentId == "string") {
										for (const [z, F] of this.a)
											if (F.id === U.agentId) {
												U.action.kind === "vote"
													? this.j.$acceptFeedback(z, U.result ?? {}, U.action)
													: this.j.$acceptAction(z, U.result || {}, U);
												break;
											}
									}
								}),
							);
					}
					$unregisterAgent(L) {
						this.a.deleteAndDispose(L);
					}
					$transferActiveChatSession(L) {
						const D = this.t.lastFocusedWidget,
							M = D?.viewModel?.model.sessionId;
						if (!M) {
							this.w.error(
								"MainThreadChat#$transferActiveChatSession: No active chat session found",
							);
							return;
						}
						const N = D?.inputEditor.getValue() ?? "";
						this.r.transferChatSession(
							{ sessionId: M, inputValue: N },
							m.URI.revive(L),
						);
					}
					$registerAgent(L, D, M, N, A) {
						const R = this.q.getAgent(M);
						if (!R && !A)
							throw this.q.getAgentsByName(M).length
								? new Error(
										`chatParticipant must be declared with an ID in package.json. The "id" property may be missing! "${M}"`,
									)
								: new Error(
										`chatParticipant must be declared in package.json: ${M}`,
									);
						const O = {
							invoke: async (U, z, F, x) => {
								this.h.set(U.requestId, z);
								try {
									return (
										(await this.j.$invokeAgent(L, U, { history: F }, x)) ?? {}
									);
								} finally {
									this.h.delete(U.requestId);
								}
							},
							provideFollowups: async (U, z, F, x) =>
								this.a.get(L)?.hasFollowups
									? this.j.$provideFollowups(U, L, z, { history: F }, x)
									: [],
							provideWelcomeMessage: (U, z) =>
								this.j.$provideWelcomeMessage(L, U, z),
							provideChatTitle: (U, z) => this.j.$provideChatTitle(L, U, z),
							provideSampleQuestions: (U, z) =>
								this.j.$provideSampleQuestions(L, U, z),
						};
						let B;
						if (!R && A) {
							const U = this.y.extensions.find((z) =>
								c.$Gn.equals(z.identifier, D),
							);
							B = this.q.registerDynamicAgent(
								{
									id: M,
									name: A.name,
									description: A.description,
									extensionId: D,
									extensionDisplayName: U?.displayName ?? D.value,
									extensionPublisherId: U?.publisher ?? "",
									publisherDisplayName: A.publisherName,
									fullName: A.fullName,
									metadata: (0, E.$ji)(N),
									slashCommands: [],
									disambiguation: [],
									locations: [s.ChatAgentLocation.Panel],
								},
								O,
							);
						} else B = this.q.registerAgentImplementation(M, O);
						this.a.set(L, {
							id: M,
							extensionId: D,
							dispose: B.dispose,
							hasFollowups: N.hasFollowups,
						});
					}
					$updateAgent(L, D) {
						const M = this.a.get(L);
						if (!M) {
							this.w.error(
								`MainThreadChatAgents2#$updateAgent: No agent with handle ${L} registered`,
							);
							return;
						}
						(M.hasFollowups = D.hasFollowups),
							this.q.updateAgent(M.id, (0, E.$ji)(D));
					}
					async $handleProgressChunk(L, D, M) {
						const N = (0, E.$ji)(D);
						if (N.kind === "progressTask") {
							const A = ++this.m,
								R = `${L}_${A}`,
								O = new I(N.content);
							return this.n.set(R, O), this.h.get(L)?.(O), A;
						} else if (M !== void 0) {
							const A = `${L}_${M}`,
								R = this.n.get(A);
							switch (N.kind) {
								case "progressTaskResult":
									return (
										R && N.content
											? (R.complete(N.content.value), this.n.delete(A))
											: R?.complete(void 0),
										M
									);
								case "warning":
								case "reference":
									R?.add(N);
									return;
							}
						}
						this.h.get(L)?.(N);
					}
					$registerAgentCompletionsProvider(L, D, M) {
						const N = async (A, R) =>
							(await this.j.$invokeCompletionProvider(L, A, R)).map((B) => ({
								...B,
								icon: B.icon ? d.ThemeIcon.fromId(B.icon) : void 0,
							}));
						this.f.set(D, this.q.registerAgentCompletionProvider(D, N)),
							this.b.set(
								L,
								this.s.completionProvider.register(
									{ scheme: f.$VYb.INPUT_SCHEME, hasAccessToAllModels: !0 },
									{
										_debugDisplayName: "chatAgentCompletions:" + L,
										triggerCharacters: M,
										provideCompletionItems: async (A, R, O, B) => {
											const U = this.t.getWidgetByInputUri(A.uri);
											if (!U || !U.viewModel) return;
											const z = M.map((W) => (0, C.$of)(W)).join(""),
												F = new RegExp(`[${z}]\\S*`, "g"),
												x =
													(0, u.$WK)(
														R.column,
														F,
														A.getLineContent(R.lineNumber),
														0,
													)?.word ?? "";
											if (x && !M.some((W) => x.startsWith(W))) return;
											const q = this.u
													.createInstance(y.$G2)
													.parseChatRequest(U.viewModel.sessionId, A.getValue())
													.parts.find((W) => W instanceof l.$U2),
												V = this.a.get(L)?.id;
											if (q?.agent.id !== V) return;
											const G = P(A, R, F);
											return G
												? {
														suggestions: (await N(x, B)).map((W) => {
															const X =
																	W.insertText ??
																	(typeof W.label == "string"
																		? W.label
																		: W.label.label),
																Y = new r.$iL(
																	G.insert.startLineNumber,
																	G.insert.startColumn,
																	G.insert.endLineNumber,
																	G.insert.startColumn + X.length,
																);
															return {
																label: W.label,
																range: G,
																insertText: X + " ",
																kind: a.CompletionItemKind.Text,
																detail: W.detail,
																documentation: W.documentation,
																command: {
																	id: b.$Emc.ID,
																	title: "",
																	arguments: [
																		{
																			id: W.id,
																			widget: U,
																			range: Y,
																			variableData: (0, E.$ji)(W.value),
																			command: W.command,
																		},
																	],
																},
															};
														}),
													}
												: null;
										},
									},
								),
							);
					}
					$unregisterAgentCompletionsProvider(L, D) {
						this.b.deleteAndDispose(L), this.f.deleteAndDispose(D);
					}
					$registerChatParticipantDetectionProvider(L) {
						this.g.set(
							L,
							this.q.registerChatParticipantDetectionProvider(L, {
								provideParticipantDetection: async (D, M, N, A) =>
									await this.j.$detectChatParticipant(
										L,
										D,
										{ history: M },
										N,
										A,
									),
							}),
						);
					}
					$unregisterChatParticipantDetectionProvider(L) {
						this.g.deleteAndDispose(L);
					}
				};
				(e.$Fmc = T),
					(e.$Fmc = T =
						Ne(
							[
								(0, v.$tmc)(p.$lbb.MainThreadChatAgents2),
								j(1, s.$c3),
								j(2, $.$J2),
								j(3, h.$k3),
								j(4, o.$GYb),
								j(5, n.$Li),
								j(6, g.$ik),
								j(7, S.$q2),
							],
							T,
						));
				function P(k, L, D) {
					const M = (0, u.$WK)(L.column, D, k.getLineContent(L.lineNumber), 0);
					if (!M && k.getWordUntilPosition(L).word) return;
					let N, A;
					return (
						M
							? ((N = new r.$iL(
									L.lineNumber,
									M.startColumn,
									L.lineNumber,
									L.column,
								)),
								(A = new r.$iL(
									L.lineNumber,
									M.startColumn,
									L.lineNumber,
									M.endColumn,
								)))
							: (N = A = r.$iL.fromPositions(L)),
						{ insert: N, replace: A }
					);
				}
			},
		),
		