import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
import '../../../base/common/async.js';
import '../../../base/common/errorMessage.js';
import '../../../base/common/event.js';
import '../../../base/common/iterator.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/marshalling.js';
import '../../../base/common/stopwatch.js';
import '../../../base/common/types.js';
import '../../../base/common/uri.js';
import '../../../platform/extensions/common/extensions.js';
import './extHost.protocol.js';
import './extHostTypeConverters.js';
import './extHostTypes.js';
import '../../contrib/chat/common/chatAgents.js';
import '../../contrib/chat/common/chatService.js';
import '../../services/extensions/common/extensions.js';
define(
			Pe[562],
			Ne([
				1, 0, 20, 9, 73, 4, 54, 3, 50, 57, 19, 2, 25, 6, 17, 11, 289, 522, 29,
			]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d, k, g, c, h, $, T) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$hhd = void 0),
					(g = tt(g)),
					(c = tt(c));
				class a {
					constructor(o, w, m, E, R) {
						(this.j = o),
							(this.k = w),
							(this.l = m),
							(this.m = E),
							(this.n = R),
							(this.b = n.$le.create(!1)),
							(this.c = !1);
					}
					close() {
						this.c = !0;
					}
					get timings() {
						return { firstProgress: this.d, totalElapsed: this.b.elapsed() };
					}
					get apiObject() {
						if (!this.g) {
							let w = function (E) {
								if (o.c) {
									const R = new Error("Response stream has been closed");
									throw (Error.captureStackTrace(R, E), R);
								}
							};
							const o = this;
							this.b.reset();
							const m = (E, R) => {
								if (
									(typeof this.d > "u" &&
										(E.kind === "markdownContent" ||
											E.kind === "markdownVuln") &&
										(this.d = this.b.elapsed()),
									R)
								) {
									const C = this.l.$handleProgressChunk(this.k.requestId, E),
										O = {
											report: (A) => {
												C?.then((J) => {
													J &&
														(c.$Rbb.isMarkdownString(A.value)
															? this.l.$handleProgressChunk(
																	this.k.requestId,
																	g.ChatResponseWarningPart.from(A),
																	J,
																)
															: this.l.$handleProgressChunk(
																	this.k.requestId,
																	g.ChatResponseReferencePart.from(A),
																	J,
																));
												});
											},
										};
									Promise.all([C, R?.(O)]).then(([A, J]) => {
										A !== void 0 &&
											this.l.$handleProgressChunk(
												this.k.requestId,
												g.ChatTaskResult.from(J),
												A,
											);
									});
								} else this.l.$handleProgressChunk(this.k.requestId, E);
							};
							this.g = {
								markdown(E) {
									w(this.markdown);
									const R = new c.$ndb(E),
										C = g.ChatResponseMarkdownPart.from(R);
									return m(C), this;
								},
								markdownWithVulnerabilities(E, R) {
									w(this.markdown),
										R && (0, T.$u2)(o.j, "chatParticipantAdditions");
									const C = new c.$odb(E, R),
										O = g.ChatResponseMarkdownWithVulnerabilitiesPart.from(C);
									return m(O), this;
								},
								filetree(E, R) {
									w(this.filetree);
									const C = new c.$rdb(E, R),
										O = g.ChatResponseFilesPart.from(C);
									return m(O), this;
								},
								anchor(E, R) {
									w(this.anchor);
									const C = new c.$sdb(E, R),
										O = g.ChatResponseAnchorPart.from(C);
									return m(O), this;
								},
								button(E) {
									w(this.anchor);
									const R = new c.$wdb(E),
										C = g.ChatResponseCommandButtonPart.from(R, o.m, o.n);
									return m(C), this;
								},
								progress(E, R) {
									w(this.progress);
									const C = new c.$udb(E, R),
										O = R
											? g.ChatTask.from(C)
											: g.ChatResponseProgressPart.from(C);
									return m(O, R), this;
								},
								warning(E) {
									w(this.progress), (0, T.$u2)(o.j, "chatParticipantAdditions");
									const R = new c.$vdb(E),
										C = g.ChatResponseWarningPart.from(R);
									return m(C), this;
								},
								reference(E, R) {
									return this.reference2(E, R);
								},
								reference2(E, R, C) {
									if (
										(w(this.reference),
										typeof E == "object" &&
											"variableName" in E &&
											(0, T.$u2)(o.j, "chatParticipantAdditions"),
										typeof E == "object" && "variableName" in E && !E.value)
									) {
										const O = o.k.variables.variables.find(
											(A) => A.name === E.variableName,
										);
										if (O) {
											let A;
											if (O.references?.length)
												A = O.references.map((J) => ({
													kind: "reference",
													reference: {
														variableName: E.variableName,
														value: J.reference,
													},
												}));
											else {
												const J = new c.$xdb(E, R, C);
												A = [g.ChatResponseReferencePart.from(J)];
											}
											return A.forEach((J) => m(J)), this;
										}
									} else {
										const O = new c.$xdb(E, R, C),
											A = g.ChatResponseReferencePart.from(O);
										m(A);
									}
									return this;
								},
								codeCitation(E, R, C) {
									w(this.codeCitation),
										(0, T.$u2)(o.j, "chatParticipantAdditions");
									const O = new c.$ydb(E, R, C),
										A = g.ChatResponseCodeCitationPart.from(O);
									m(A);
								},
								textEdit(E, R) {
									w(this.textEdit), (0, T.$u2)(o.j, "chatParticipantAdditions");
									const C = new c.$Adb(E, R),
										O = g.ChatResponseTextEditPart.from(C);
									return m(O), this;
								},
								detectedParticipant(E, R) {
									w(this.detectedParticipant),
										(0, T.$u2)(o.j, "chatParticipantAdditions");
									const C = new c.$pdb(E, R),
										O = g.ChatResponseDetectedParticipantPart.from(C);
									return m(O), this;
								},
								confirmation(E, R, C, O) {
									w(this.confirmation),
										(0, T.$u2)(o.j, "chatParticipantAdditions");
									const A = new c.$qdb(E, R, C, O),
										J = g.ChatResponseConfirmationPart.from(A);
									return m(J), this;
								},
								push(E) {
									if (
										(w(this.push),
										(E instanceof c.$Adb ||
											E instanceof c.$odb ||
											E instanceof c.$pdb ||
											E instanceof c.$vdb ||
											E instanceof c.$qdb ||
											E instanceof c.$ydb ||
											E instanceof c.$zdb) &&
											(0, T.$u2)(o.j, "chatParticipantAdditions"),
										E instanceof c.$xdb)
									)
										this.reference2(E.value, E.iconPath, E.options);
									else {
										const R = g.ChatResponsePart.from(E, o.m, o.n);
										m(R);
									}
									return this;
								},
							};
						}
						return this.g;
					}
				}
				class u extends I.$1c {
					static {
						this.b = 0;
					}
					static {
						this.j = 0;
					}
					constructor(o, w, m, E) {
						super(),
							(this.s = w),
							(this.t = m),
							(this.u = E),
							(this.c = new Map()),
							(this.m = new Map()),
							(this.n = this.D(new I.$0c())),
							(this.q = this.D(new I.$0c())),
							(this.g = o.getProxy(k.$lbb.MainThreadChatAgents2));
					}
					transferActiveChat(o) {
						this.g.$transferActiveChatSession(o);
					}
					createChatAgent(o, w, m) {
						const E = u.b++,
							R = new s(o, w, this.g, E, m);
						return (
							this.c.set(E, R),
							this.g.$registerAgent(E, o.identifier, w, {}, void 0),
							R.apiAgent
						);
					}
					createDynamicChatAgent(o, w, m, E) {
						const R = u.b++,
							C = new s(o, w, this.g, R, E);
						return (
							this.c.set(R, C),
							this.g.$registerAgent(R, o.identifier, w, { isSticky: !0 }, m),
							C.apiAgent
						);
					}
					registerChatParticipantDetectionProvider(o) {
						const w = u.j++;
						return (
							this.m.set(w, o),
							this.g.$registerChatParticipantDetectionProvider(w),
							(0, I.$Yc)(() => {
								this.m.delete(w),
									this.g.$unregisterChatParticipantDetectionProvider(w);
							})
						);
					}
					async $detectChatParticipant(o, w, m, E, R) {
						const { request: C, location: O, history: A } = await this.w(w, m),
							J = this.m.get(o);
						if (J)
							return J.provideParticipantDetection(
								g.ChatAgentRequest.to(C, O),
								{ history: A },
								{
									participants: E.participants,
									location: g.ChatLocation.to(E.location),
								},
								R,
							);
					}
					async w(o, w) {
						const m = (0, l.$ji)(o),
							E = await this.y(m.agentId, w);
						let R;
						if (m.locationData?.type === h.ChatAgentLocation.Editor) {
							const C = this.u.getDocument(m.locationData.document);
							R = new c.$Ddb(
								C,
								g.Selection.to(m.locationData.selection),
								g.Range.to(m.locationData.wholeRange),
							);
						} else if (m.locationData?.type === h.ChatAgentLocation.Notebook) {
							const C = this.u.getDocument(m.locationData.sessionInputUri);
							R = new c.$Edb(C);
						} else m.locationData?.type, h.ChatAgentLocation.Terminal;
						return { request: m, location: R, history: E };
					}
					async $invokeAgent(o, w, m, E) {
						const R = this.c.get(o);
						if (!R)
							throw new Error(
								`[CHAT](${o}) CANNOT invoke agent because the agent is not registered`,
							);
						let C;
						try {
							const {
								request: O,
								location: A,
								history: J,
							} = await this.w(w, m);
							let L = this.n.get(O.sessionId);
							L || ((L = new I.$Zc()), this.n.set(O.sessionId, L)),
								(C = new a(R.extension, O, this.g, this.t.converter, L));
							const b = R.invoke(
								g.ChatAgentRequest.to(O, A),
								{ history: J },
								C.apiObject,
								E,
							);
							return await (0, r.$Ah)(
								Promise.resolve(b).then((F) => {
									if (F?.metadata)
										try {
											JSON.stringify(F.metadata);
										} catch (M) {
											const z = `result.metadata MUST be JSON.stringify-able. Got error: ${M.message}`;
											return (
												this.s.error(
													`[${R.extension.identifier.value}] [@${R.id}] ${z}`,
													R.extension,
												),
												{
													errorDetails: { message: z },
													timings: C?.timings,
													nextQuestion: F.nextQuestion,
												}
											);
										}
									let D;
									return (
										F?.errorDetails &&
											(D = { ...F.errorDetails, responseIsIncomplete: !0 }),
										D?.responseIsRedacted &&
											(0, T.$u2)(R.extension, "chatParticipantPrivate"),
										{
											errorDetails: D,
											timings: C?.timings,
											metadata: F?.metadata,
											nextQuestion: F?.nextQuestion,
										}
									);
								}),
								E,
							);
						} catch (O) {
							return (
								this.s.error(O, R.extension),
								O instanceof c.$Mdb && O.cause && (O = O.cause),
								{
									errorDetails: {
										message: (0, S.$xj)(O),
										responseIsIncomplete: !0,
									},
								}
							);
						} finally {
							C?.close();
						}
					}
					async y(o, w) {
						const m = [];
						for (const E of w.history) {
							const R = g.ChatAgentResult.to(E.result),
								C = o === E.request.agentId ? R : { ...R, metadata: void 0 },
								O = E.request.variables.variables
									.filter((b) => !b.isTool)
									.map(g.ChatPromptReference.to),
								A = E.request.variables.variables
									.filter((b) => b.isTool)
									.map(g.ChatLanguageModelToolReference.to),
								J = new c.$Bdb(
									E.request.message,
									E.request.command,
									O,
									E.request.agentId,
								);
							(J.toolReferences = A), m.push(J);
							const L = (0, e.$Lb)(
								E.response.map((b) =>
									g.ChatResponsePart.toContent(b, this.t.converter),
								),
							);
							m.push(new c.$Cdb(L, C, E.request.agentId, E.request.command));
						}
						return m;
					}
					$releaseSession(o) {
						this.n.deleteAndDispose(o);
					}
					async $provideFollowups(o, w, m, E, R) {
						const C = this.c.get(w);
						if (!C) return Promise.resolve([]);
						const O = (0, l.$ji)(o),
							A = await this.y(C.id, E),
							J = g.ChatAgentResult.to(m);
						return (await C.provideFollowups(J, { history: A }, R))
							.filter((L) => {
								const b =
									!L.participant ||
									P.Iterable.some(
										this.c.values(),
										(F) =>
											F.id === L.participant &&
											d.$Gn.equals(
												F.extension.identifier,
												C.extension.identifier,
											),
									);
								return (
									b ||
										this.s.warn(
											`[@${C.id}] ChatFollowup refers to an unknown participant: ${L.participant}`,
										),
									b
								);
							})
							.map((L) => g.ChatFollowup.from(L, O));
					}
					$acceptFeedback(o, w, m) {
						const E = this.c.get(o);
						if (!E) return;
						const R = g.ChatAgentResult.to(w);
						let C;
						switch (m.direction) {
							case $.ChatAgentVoteDirection.Down:
								C = c.ChatResultFeedbackKind.Unhelpful;
								break;
							case $.ChatAgentVoteDirection.Up:
								C = c.ChatResultFeedbackKind.Helpful;
								break;
						}
						const O = {
							result: R,
							kind: C,
							unhelpfulReason: (0, T.$t2)(
								E.extension,
								"chatParticipantAdditions",
							)
								? m.reason
								: void 0,
						};
						E.acceptFeedback(Object.freeze(O));
					}
					$acceptAction(o, w, m) {
						const E = this.c.get(o);
						if (!E || m.action.kind === "vote") return;
						const R = g.ChatAgentUserActionEvent.to(w, m, this.t.converter);
						R && E.acceptAction(Object.freeze(R));
					}
					async $invokeCompletionProvider(o, w, m) {
						const E = this.c.get(o);
						if (!E) return [];
						let R = this.q.get(o);
						return (
							R ? R.clear() : ((R = new I.$Zc()), this.q.set(o, R)),
							(await E.invokeCompletionProvider(w, m)).map((O) =>
								g.ChatAgentCompletionItem.from(O, this.t.converter, R),
							)
						);
					}
					async $provideWelcomeMessage(o, w, m) {
						const E = this.c.get(o);
						if (E)
							return await E.provideWelcomeMessage(g.ChatLocation.to(w), m);
					}
					async $provideChatTitle(o, w, m) {
						const E = this.c.get(o);
						if (!E) return;
						const R = await this.y(E.id, { history: w });
						return await E.provideTitle({ history: R }, m);
					}
					async $provideSampleQuestions(o, w, m) {
						const E = this.c.get(o);
						if (E)
							return (
								await E.provideSampleQuestions(g.ChatLocation.to(w), m)
							).map((R) => g.ChatFollowup.from(R, void 0));
					}
				}
				t.$hhd = u;
				class s {
					constructor(o, w, m, E, R) {
						(this.extension = o),
							(this.id = w),
							(this.w = m),
							(this.x = E),
							(this.y = R),
							(this.l = new N.$re()),
							(this.m = new N.$re());
					}
					acceptFeedback(o) {
						this.l.fire(o);
					}
					acceptAction(o) {
						this.m.fire(o);
					}
					async invokeCompletionProvider(o, w) {
						return this.o
							? ((await this.o.provider.provideCompletionItems(o, w)) ?? [])
							: [];
					}
					async provideFollowups(o, w, m) {
						if (!this.b) return [];
						const E = await this.b.provideFollowups(o, w, m);
						return E
							? E.filter((R) => !(R && "commandId" in R)).filter(
									(R) => !(R && "message" in R),
								)
							: [];
					}
					async provideWelcomeMessage(o, w) {
						if (!this.q) return [];
						const m = await this.q.provideWelcomeMessage(o, w);
						return m
							? m.map((E) =>
									typeof E == "string" ? E : g.MarkdownString.from(E),
								)
							: [];
					}
					async provideTitle(o, w) {
						if (this.s) return (await this.s.provideChatTitle(o, w)) ?? void 0;
					}
					async provideSampleQuestions(o, w) {
						if (!this.q || !this.q.provideSampleQuestions) return [];
						const m = await this.q.provideSampleQuestions(o, w);
						return m || [];
					}
					get apiAgent() {
						let o = !1,
							w = !1;
						const m = () => {
								o ||
									w ||
									((w = !0),
									queueMicrotask(() => {
										this.w.$updateAgent(this.x, {
											icon: this.c
												? this.c instanceof y.URI
													? this.c
													: "light" in this.c
														? this.c.light
														: void 0
												: void 0,
											iconDark:
												this.c && "dark" in this.c ? this.c.dark : void 0,
											themeIcon: this.c instanceof c.$mcb ? this.c : void 0,
											hasFollowups: this.b !== void 0,
											isSecondary: this.k,
											helpTextPrefix:
												!this.d || typeof this.d == "string"
													? this.d
													: g.MarkdownString.from(this.d),
											helpTextVariablesPrefix:
												!this.g || typeof this.g == "string"
													? this.g
													: g.MarkdownString.from(this.g),
											helpTextPostfix:
												!this.j || typeof this.j == "string"
													? this.j
													: g.MarkdownString.from(this.j),
											supportIssueReporting: this.n,
											requester: this.t,
											supportsSlowVariables: this.u,
										}),
											(w = !1);
									}));
							},
							E = this;
						return {
							get id() {
								return E.id;
							},
							get iconPath() {
								return E.c;
							},
							set iconPath(R) {
								(E.c = R), m();
							},
							get requestHandler() {
								return E.y;
							},
							set requestHandler(R) {
								(0, p.$vg)(typeof R == "function", "Invalid request handler"),
									(E.y = R);
							},
							get followupProvider() {
								return E.b;
							},
							set followupProvider(R) {
								(E.b = R), m();
							},
							get helpTextPrefix() {
								return (0, T.$u2)(E.extension, "defaultChatParticipant"), E.d;
							},
							set helpTextPrefix(R) {
								(0, T.$u2)(E.extension, "defaultChatParticipant"),
									(E.d = R),
									m();
							},
							get helpTextVariablesPrefix() {
								return (0, T.$u2)(E.extension, "defaultChatParticipant"), E.g;
							},
							set helpTextVariablesPrefix(R) {
								(0, T.$u2)(E.extension, "defaultChatParticipant"),
									(E.g = R),
									m();
							},
							get helpTextPostfix() {
								return (0, T.$u2)(E.extension, "defaultChatParticipant"), E.j;
							},
							set helpTextPostfix(R) {
								(0, T.$u2)(E.extension, "defaultChatParticipant"),
									(E.j = R),
									m();
							},
							get isSecondary() {
								return (0, T.$u2)(E.extension, "defaultChatParticipant"), E.k;
							},
							set isSecondary(R) {
								(0, T.$u2)(E.extension, "defaultChatParticipant"),
									(E.k = R),
									m();
							},
							get supportIssueReporting() {
								return (0, T.$u2)(E.extension, "chatParticipantPrivate"), E.n;
							},
							set supportIssueReporting(R) {
								(0, T.$u2)(E.extension, "chatParticipantPrivate"),
									(E.n = R),
									m();
							},
							get onDidReceiveFeedback() {
								return E.l.event;
							},
							set participantVariableProvider(R) {
								if (
									((0, T.$u2)(E.extension, "chatParticipantAdditions"),
									(E.o = R),
									R)
								) {
									if (!R.triggerCharacters.length)
										throw new Error("triggerCharacters are required");
									E.w.$registerAgentCompletionsProvider(
										E.x,
										E.id,
										R.triggerCharacters,
									);
								} else E.w.$unregisterAgentCompletionsProvider(E.x, E.id);
							},
							get participantVariableProvider() {
								return (0, T.$u2)(E.extension, "chatParticipantAdditions"), E.o;
							},
							set welcomeMessageProvider(R) {
								(0, T.$u2)(E.extension, "defaultChatParticipant"),
									(E.q = R),
									m();
							},
							get welcomeMessageProvider() {
								return (0, T.$u2)(E.extension, "defaultChatParticipant"), E.q;
							},
							set titleProvider(R) {
								(0, T.$u2)(E.extension, "defaultChatParticipant"),
									(E.s = R),
									m();
							},
							get titleProvider() {
								return (0, T.$u2)(E.extension, "defaultChatParticipant"), E.s;
							},
							onDidPerformAction: (0, T.$t2)(
								this.extension,
								"chatParticipantAdditions",
							)
								? this.m.event
								: void 0,
							set requester(R) {
								(E.t = R), m();
							},
							get requester() {
								return E.t;
							},
							set supportsSlowReferences(R) {
								(0, T.$u2)(E.extension, "chatParticipantPrivate"),
									(E.u = R),
									m();
							},
							get supportsSlowReferences() {
								return (0, T.$u2)(E.extension, "chatParticipantPrivate"), E.u;
							},
							dispose() {
								(o = !0),
									(E.b = void 0),
									E.l.dispose(),
									E.w.$unregisterAgent(E.x);
							},
						};
					}
					invoke(o, w, m, E) {
						return this.y(o, w, m, E);
					}
				}
			},
		),
		