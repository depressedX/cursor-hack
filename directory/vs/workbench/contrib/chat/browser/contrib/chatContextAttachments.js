define(de[1355], he([1, 0, 3, 481]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$EIc = void 0);
			class w extends t.$1c {
				static {
					this.ID = "chatContextAttachments";
				}
				get id() {
					return w.ID;
				}
				constructor(C) {
					super(),
						(this.widget = C),
						(this.a = new Set()),
						this.D(
							this.widget.onDidChangeContext((d) => {
								d.removed && this.b(d.removed);
							}),
						),
						this.D(
							this.widget.onDidSubmitAgent(() => {
								this.c();
							}),
						);
				}
				getInputState() {
					return [...this.a.values()];
				}
				setInputState(C) {
					Array.isArray(C) || (C = []), this.a.clear();
					for (const d of C) this.a.add(d);
					this.widget.setContext(!0, ...C);
				}
				getContext() {
					return new Set([...this.a.values()].map((C) => C.id));
				}
				setContext(C, ...d) {
					C && this.a.clear();
					for (const m of d) this.a.add(m);
					this.widget.setContext(C, ...d);
				}
				b(C) {
					C.length && C.forEach(this.a.delete, this.a);
				}
				c() {
					this.a.clear();
				}
			}
			(e.$EIc = w), i.$XYb.CONTRIBS.push(w);
		}),
		define(
			de[1060],
			he([1, 0, 24, 94, 3, 19, 9, 17, 42, 4, 11, 31, 73, 34, 63, 481, 503]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Emc = e.$Dmc = e.$Cmc = e.$Bmc = void 0),
					(e.$Bmc = "chat-dynamic-variable");
				let f = class extends w.$1c {
					static {
						o = this;
					}
					static {
						this.ID = "chatDynamicVariableModel";
					}
					get variables() {
						return [...this.a];
					}
					get id() {
						return o.ID;
					}
					constructor(v, S) {
						super(),
							(this.b = v),
							(this.f = S),
							(this.a = []),
							this.D(
								v.inputEditor.onDidChangeModelContent((I) => {
									I.changes.forEach((T) => {
										this.a = (0, t.$Lb)(
											this.a.map((P) => {
												const k = d.$iL.intersectRanges(P.range, T.range);
												if (k && !k.isEmpty()) {
													if (!d.$iL.containsRange(T.range, P.range)) {
														const L = new d.$iL(
															P.range.startLineNumber,
															P.range.startColumn,
															P.range.endLineNumber,
															P.range.endColumn - 1,
														);
														this.b.inputEditor.executeEdits(this.id, [
															{ range: L, text: "" },
														]);
													}
													return null;
												} else if (
													d.$iL.compareRangesUsingStarts(P.range, T.range) > 0
												) {
													const L = T.text.length - T.rangeLength;
													return {
														...P,
														range: {
															startLineNumber: P.range.startLineNumber,
															startColumn: P.range.startColumn + L,
															endLineNumber: P.range.endLineNumber,
															endColumn: P.range.endColumn + L,
														},
													};
												}
												return P;
											}),
										);
									}),
										this.g();
								}),
							);
					}
					getInputState() {
						return this.variables;
					}
					setInputState(v) {
						Array.isArray(v) || (v = []), (this.a = v), this.g();
					}
					addReference(v) {
						this.a.push(v), this.g();
					}
					g() {
						this.b.inputEditor.setDecorationsByType(
							"chat",
							e.$Bmc,
							this.a.map((v) => ({ range: v.range, hoverMessage: this.h(v) })),
						);
					}
					h(v) {
						const S = v.data;
						if (C.URI.isUri(S))
							return new i.$cl(this.f.getUriLabel(S, { relative: !0 }));
					}
				};
				(e.$Cmc = f),
					(e.$Cmc = f = o = Ne([j(1, h.$3N)], f)),
					g.$XYb.CONTRIBS.push(f);
				function b($) {
					return "widget" in $ && "range" in $;
				}
				class s extends u.$3X {
					static {
						this.Name = "files";
					}
					static {
						this.Item = {
							label: (0, r.localize)(4733, null),
							description: (0, r.localize)(4734, null),
						};
					}
					static {
						this.ID = "workbench.action.chat.selectAndInsertFile";
					}
					constructor() {
						super({ id: s.ID, title: "" });
					}
					async run(v, ...S) {
						const I = v.get(m.$MO),
							T = v.get(c.$ik),
							P = v.get(n.$DJ),
							k = v.get(p.$D2),
							L = S[0];
						if (!b(L)) return;
						const D = () => {
							L.widget.inputEditor.executeEdits("chatInsertFile", [
								{ range: L.range, text: "" },
							]);
						};
						let M;
						k.hasVariable(s.Name) &&
							(M = {
								providerOptions: {
									additionPicks: [s.Item, { type: "separator" }],
								},
							});
						const N = await P.quickAccess.pick("", M);
						if (!N?.length) {
							T.trace("SelectAndInsertFileAction: no file selected"), D();
							return;
						}
						const A = L.widget.inputEditor,
							R = L.range;
						if (N[0] === s.Item) {
							const F = `#${s.Name}`;
							A.executeEdits("chatInsertFile", [{ range: R, text: F + " " }]) ||
								(T.trace(`SelectAndInsertFileAction: failed to insert "${F}"`),
								D());
							return;
						}
						const O = N[0].resource;
						if (!I.canHandleResource(O)) {
							T.trace("SelectAndInsertFileAction: non-text resource selected"),
								D();
							return;
						}
						const U = `#file:${(0, E.$kh)(O)}`;
						if (
							!A.executeEdits("chatInsertFile", [{ range: R, text: U + " " }])
						) {
							T.trace(`SelectAndInsertFileAction: failed to insert "${U}"`),
								D();
							return;
						}
						L.widget
							.getContrib(f.ID)
							?.addReference({
								id: "vscode.file",
								range: {
									startLineNumber: R.startLineNumber,
									startColumn: R.startColumn,
									endLineNumber: R.endLineNumber,
									endColumn: R.startColumn + U.length,
								},
								data: O,
							});
					}
				}
				(e.$Dmc = s), (0, u.$4X)(s);
				function l($) {
					return "widget" in $ && "range" in $ && "variableData" in $;
				}
				class y extends u.$3X {
					static {
						this.ID = "workbench.action.chat.addDynamicVariable";
					}
					constructor() {
						super({ id: y.ID, title: "" });
					}
					async run(v, ...S) {
						const I = S[0];
						if (!l(I)) return;
						let T = I.range;
						const P = I.variableData,
							k = () => {
								I.widget.inputEditor.executeEdits(
									"chatInsertDynamicVariableWithArguments",
									[{ range: I.range, text: "" }],
								);
							};
						if (I.command) {
							const D = await v
								.get(a.$ek)
								.executeCommand(I.command.id, ...(I.command.arguments ?? []));
							if (!D) {
								k();
								return;
							}
							const M = ":" + D,
								N = new d.$iL(
									T.startLineNumber,
									T.endColumn,
									T.endLineNumber,
									T.endColumn + M.length,
								);
							if (
								((T = new d.$iL(
									T.startLineNumber,
									T.startColumn,
									T.endLineNumber,
									T.endColumn + M.length,
								)),
								!I.widget.inputEditor.executeEdits(
									"chatInsertDynamicVariableWithArguments",
									[{ range: N, text: M + " " }],
								))
							) {
								k();
								return;
							}
						}
						I.widget
							.getContrib(f.ID)
							?.addReference({ id: I.id, range: T, data: P });
					}
				}
				(e.$Emc = y), (0, u.$4X)(y);
			},
		),
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
		define(
			de[4070],
			he([
				1, 0, 55, 5, 3324, 3709, 3710, 3715, 3306, 1872, 3356, 1303, 3355, 4069,
				3339, 3354, 3349, 3375, 4063, 3340, 3341, 3342, 3378, 3684, 3343, 3344,
				3345, 3346, 1342, 3898, 1820, 1913, 3876, 3350, 3731, 3351, 3899, 3484,
				3400, 3357, 3359, 3358, 3800, 3361, 3362, 3363, 3364, 3677, 3367, 3348,
				3446, 3594, 3622, 3368, 3370, 3543, 3465, 3372, 3801, 3347, 3452, 3555,
				3749, 3902, 4006, 4015, 3463, 3464, 3901, 3360, 3908, 3352, 3369, 3353,
				3589, 3338, 3944, 3373, 3371, 3365, 3366, 3753, 3337, 3336,
			]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Vqc = void 0);
				let u = class {
					static {
						this.ID = "workbench.contrib.extensionPoints";
					}
					constructor(h) {
						(this.a = h),
							this.a.createInstance(w.$hmc),
							this.a.createInstance(E.$imc),
							this.a.createInstance(C.$jmc),
							this.a.createInstance(d.$pmc),
							this.a.createInstance(m.$qmc),
							this.a.createInstance(r.$smc);
					}
				};
				(e.$Vqc = u),
					(e.$Vqc = u = Ne([j(0, i.$Li)], u)),
					(0, t.$s6)(u.ID, u, t.WorkbenchPhase.BlockStartup);
			},
		),
		define(
			de[4071],
			he([1, 0, 54, 24, 29, 103, 3, 9, 208, 1060, 153, 329, 1355, 89, 569, 26]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$RIc = void 0);
				let p = class {
					constructor(f, b, s) {
						(this.d = f), (this.e = b), (this.f = s), (this.c = new Map());
					}
					async resolveVariables(f, b, s, l, y) {
						let $ = [];
						const v = [];
						f.parts.forEach((I, T) => {
							if (I instanceof a.$S2) {
								const P = this.c.get(I.variableName.toLowerCase());
								if (P) {
									const k = [],
										L = (D) => {
											if (D.kind === "reference") {
												k.push(D);
												return;
											}
											l(D);
										};
									v.push(
										P.resolver(f.text, I.variableArg, s, L, y)
											.then((D) => {
												D &&
													($[T] = {
														id: P.data.id,
														modelDescription: P.data.modelDescription,
														name: I.variableName,
														range: I.range,
														value: D,
														references: k,
														fullName: P.data.fullName,
														icon: P.data.icon,
													});
											})
											.catch(w.$5),
									);
								}
							} else if (I instanceof a.$X2)
								$[T] = {
									id: I.id,
									name: I.referenceText,
									range: I.range,
									value: I.data,
								};
							else if (I instanceof a.$T2) {
								const P = this.f.getTool(I.toolId);
								P &&
									($[T] = {
										id: I.toolId,
										name: I.toolName,
										range: I.range,
										value: void 0,
										isTool: !0,
										icon: g.ThemeIcon.isThemeIcon(P.icon) ? P.icon : void 0,
										fullName: P.displayName,
									});
							}
						});
						const S = [];
						return (
							b?.forEach((I, T) => {
								const P = this.c.get(I.name?.toLowerCase());
								if (P) {
									const k = [],
										L = (D) => {
											if (D.kind === "reference") {
												k.push(D);
												return;
											}
											l(D);
										};
									v.push(
										P.resolver(f.text, "", s, L, y)
											.then((D) => {
												D &&
													(S[T] = {
														id: P.data.id,
														modelDescription: P.data.modelDescription,
														name: I.name,
														fullName: I.fullName,
														range: I.range,
														value: D,
														references: k,
														icon: I.icon,
													});
											})
											.catch(w.$5),
									);
								} else (I.isDynamic || I.isTool) && (S[T] = { ...I });
							}),
							await Promise.allSettled(v),
							($ = (0, i.$Lb)($)),
							$.sort((I, T) => T.range.start - I.range.start),
							$.push(...(0, i.$Lb)(S)),
							{ variables: $ }
						);
					}
					async resolveVariable(f, b, s, l, y) {
						const $ = this.c.get(f.toLowerCase());
						if ($) return await $.resolver(b, void 0, s, l, y);
					}
					hasVariable(f) {
						return this.c.has(f.toLowerCase());
					}
					getVariable(f) {
						return this.c.get(f.toLowerCase())?.data;
					}
					getVariables(f) {
						const b = E.Iterable.map(this.c.values(), (s) => s.data);
						return E.Iterable.filter(
							b,
							(s) =>
								f !== u.ChatAgentLocation.Editor ||
								!new Set(["selection", "editor"]).has(s.name),
						);
					}
					getDynamicVariables(f) {
						const b = this.d.getWidgetBySessionId(f);
						if (!b || !b.viewModel || !b.supportsFileReferences) return [];
						const s = b.getContrib(r.$Cmc.ID);
						return s ? s.variables : [];
					}
					registerVariable(f, b) {
						const s = f.name.toLowerCase();
						if (this.c.has(s))
							throw new Error(
								`A chat variable with the name '${f.name}' already exists.`,
							);
						return (
							this.c.set(s, { data: f, resolver: b }),
							(0, C.$Yc)(() => {
								this.c.delete(s);
							})
						);
					}
					async attachContext(f, b, s) {
						if (s !== u.ChatAgentLocation.Panel) return;
						const l = await (0, m.$HYb)(this.e);
						if (!l || !l.viewModel) return;
						const y = f.toLowerCase();
						if (y === "file" && typeof b != "string") {
							const v = d.URI.isUri(b) ? b : b.uri,
								S = "range" in b ? b.range : void 0;
							l.getContrib(h.$EIc.ID)?.setContext(!1, {
								value: b,
								id: v.toString() + (S?.toString() ?? ""),
								name: (0, t.$sc)(v.path),
								isFile: !0,
								isDynamic: !0,
							});
							return;
						}
						const $ = this.c.get(y);
						$ &&
							l.getContrib(h.$EIc.ID)?.setContext(!1, { ...$.data, value: b });
					}
				};
				(e.$RIc = p),
					(e.$RIc = p = Ne([j(0, m.$GYb), j(1, c.$HMb), j(2, n.$E2)], p));
			},
		),
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
		define(
			de[4073],
			he([1, 0, 94, 3, 65, 17, 5, 51, 35, 481, 1060, 153, 980, 329, 1022]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				const g = "chat",
					p = "chat-session-detail",
					o = "chat-session-text",
					f = "chat-variable-text";
				function b($, v) {
					return v ? `${$.id}__${v}` : $.id;
				}
				let s = class extends i.$1c {
					constructor(v, S, I, T) {
						super(),
							(this.c = v),
							(this.f = S),
							(this.g = I),
							(this.h = T),
							(this.id = "inputEditorDecorations"),
							(this.a = new Set()),
							(this.b = this.D(new i.$2c())),
							this.f.registerDecorationType(g, p, {}),
							this.D(this.g.onDidColorThemeChange(() => this.m())),
							this.m(),
							this.q(),
							this.D(
								this.c.inputEditor.onDidChangeModelContent(() => this.q()),
							),
							this.D(this.c.onDidChangeParsedInput(() => this.q())),
							this.D(
								this.c.onDidChangeViewModel(() => {
									this.j(), this.a.clear(), this.q();
								}),
							),
							this.D(
								this.c.onDidSubmitAgent((P) => {
									this.a.add(b(P.agent, P.slashCommand?.name));
								}),
							),
							this.D(this.h.onDidChangeAgents(() => this.q())),
							this.j();
					}
					j() {
						this.b.value = this.c.viewModel?.onDidChange((v) => {
							(v?.kind === "changePlaceholder" || v?.kind === "initialize") &&
								this.q();
						});
					}
					m() {
						this.f.removeDecorationType(f),
							this.f.removeDecorationType(u.$Bmc),
							this.f.removeDecorationType(o);
						const v = this.g.getColorTheme();
						this.f.registerDecorationType(g, o, {
							color: v.getColor(h.$lUb)?.toString(),
							backgroundColor: v.getColor(h.$kUb)?.toString(),
							borderRadius: "3px",
						}),
							this.f.registerDecorationType(g, f, {
								color: v.getColor(h.$lUb)?.toString(),
								backgroundColor: v.getColor(h.$kUb)?.toString(),
								borderRadius: "3px",
							}),
							this.f.registerDecorationType(g, u.$Bmc, {
								color: v.getColor(h.$lUb)?.toString(),
								backgroundColor: v.getColor(h.$kUb)?.toString(),
								borderRadius: "3px",
							}),
							this.q();
					}
					n() {
						return this.g.getColorTheme().getColor(d.$1R)?.toString();
					}
					async q() {
						const v = this.c.inputEditor.getValue(),
							S = this.c.viewModel;
						if (!S) return;
						if (!v) {
							const F = this.h.getDefaultAgent(this.c.location),
								x = [
									{
										range: {
											startLineNumber: 1,
											endLineNumber: 1,
											startColumn: 1,
											endColumn: 1e3,
										},
										renderOptions: {
											after: {
												contentText:
													S.inputPlaceholder || (F?.description ?? ""),
												color: this.n(),
											},
										},
									},
								];
							this.c.inputEditor.setDecorationsByType(g, p, x);
							return;
						}
						const I = this.c.parsedInput.parts;
						let T;
						const P = I.find((F) => F instanceof c.$U2),
							k = I.find((F) => F instanceof c.$V2),
							L = I.find((F) => F instanceof c.$W2),
							D = (F) => {
								const x = I.indexOf(F);
								if (I.length > x + 2) return !1;
								const H = I[x + 1];
								return H && H instanceof c.$O2 && H.text === " ";
							},
							M = (F) => ({
								startLineNumber: F.editorRange.startLineNumber,
								endLineNumber: F.editorRange.endLineNumber,
								startColumn: F.editorRange.endColumn + 1,
								endColumn: 1e3,
							});
						if (
							P &&
							I.every(
								(F) =>
									(F instanceof c.$O2 && !F.text.trim().length) ||
									F instanceof c.$U2,
							)
						) {
							const x =
								this.a.has(b(P.agent, void 0)) &&
								P.agent.metadata.followupPlaceholder;
							P.agent.description &&
								D(P) &&
								(T = [
									{
										range: M(P),
										renderOptions: {
											after: {
												contentText: x
													? P.agent.metadata.followupPlaceholder
													: P.agent.description,
												color: this.n(),
											},
										},
									},
								]);
						}
						if (
							P &&
							k &&
							I.every(
								(F) =>
									(F instanceof c.$O2 && !F.text.trim().length) ||
									F instanceof c.$U2 ||
									F instanceof c.$V2,
							)
						) {
							const x =
								this.a.has(b(P.agent, k.command.name)) &&
								k.command.followupPlaceholder;
							k?.command.description &&
								D(k) &&
								(T = [
									{
										range: M(k),
										renderOptions: {
											after: {
												contentText: x
													? k.command.followupPlaceholder
													: k.command.description,
												color: this.n(),
											},
										},
									},
								]);
						}
						k &&
							I.every(
								(F) =>
									(F instanceof c.$O2 && !F.text.trim().length) ||
									F instanceof c.$V2,
							) &&
							k?.command.description &&
							D(k) &&
							(T = [
								{
									range: M(k),
									renderOptions: {
										after: {
											contentText: k.command.description,
											color: this.n(),
										},
									},
								},
							]),
							this.c.inputEditor.setDecorationsByType(g, p, T ?? []);
						const O = [];
						P && O.push({ range: P.editorRange }),
							k &&
								O.push({
									range: k.editorRange,
									hoverMessage: new t.$cl(k.command.description),
								}),
							L && O.push({ range: L.editorRange }),
							this.c.inputEditor.setDecorationsByType(g, o, O);
						const B = [],
							U = I.filter((F) => F instanceof c.$S2);
						for (const F of U) B.push({ range: F.editorRange });
						const z = I.filter((F) => F instanceof c.$T2);
						for (const F of z) B.push({ range: F.editorRange });
						this.c.inputEditor.setDecorationsByType(g, f, B);
					}
				};
				s = Ne([j(1, w.$dtb), j(2, m.$iP), j(3, a.$c3)], s);
				class l extends i.$1c {
					constructor(v) {
						super(),
							(this.a = v),
							(this.id = "InputEditorSlashCommandMode"),
							this.D(
								this.a.onDidChangeAgent((S) => {
									((S.slashCommand && S.slashCommand.isSticky) ||
										(!S.slashCommand && S.agent.metadata.isSticky)) &&
										this.b(S.agent, S.slashCommand);
								}),
							),
							this.D(
								this.a.onDidSubmitAgent((S) => {
									this.b(S.agent, S.slashCommand);
								}),
							);
					}
					async b(v, S) {
						if (this.a.inputEditor.getValue().trim()) return;
						let I;
						S && S.isSticky
							? (I = `${c.$Q2}${v.name} ${c.$R2}${S.name} `)
							: v.metadata.isSticky && (I = `${c.$Q2}${v.name} `),
							I &&
								(this.a.inputEditor.setValue(I),
								this.a.inputEditor.setPosition({
									lineNumber: 1,
									column: I.length + 1,
								}));
					}
				}
				r.$XYb.CONTRIBS.push(s, l);
				let y = class extends i.$1c {
					constructor(v, S) {
						super(), (this.a = v), (this.b = S), (this.id = "chatTokenDeleter");
						const I = this.b.createInstance(n.$G2),
							T = this.a.inputEditor.getValue();
						let P, k;
						this.D(
							this.a.inputEditor.onDidChangeModelContent((L) => {
								P || ((P = T), (k = this.a.lastSelectedAgent));
								const D = L.changes[0];
								!D.text &&
									this.a.viewModel &&
									I.parseChatRequest(
										this.a.viewModel.sessionId,
										P,
										v.location,
										{ selectedAgent: k },
									)
										.parts.filter(
											(A) =>
												A instanceof c.$U2 ||
												A instanceof c.$V2 ||
												A instanceof c.$W2 ||
												A instanceof c.$S2 ||
												A instanceof c.$T2,
										)
										.forEach((A) => {
											const R = E.$iL.intersectRanges(A.editorRange, D.range);
											if (
												R &&
												E.$iL.compareRangesUsingStarts(A.editorRange, D.range) <
													0
											) {
												const O = R.endColumn - R.startColumn,
													B = new E.$iL(
														A.editorRange.startLineNumber,
														A.editorRange.startColumn,
														A.editorRange.endLineNumber,
														A.editorRange.endColumn - O,
													);
												this.a.inputEditor.executeEdits(this.id, [
													{ range: B, text: "" },
												]);
											}
										}),
									(P = this.a.inputEditor.getValue()),
									(k = this.a.lastSelectedAgent);
							}),
						);
					}
				};
				(y = Ne([j(1, C.$Li)], y)), r.$XYb.CONTRIBS.push(y);
			},
		),
		define(
			de[4074],
			he([1, 0, 3, 17, 368, 31, 5, 208, 1353, 3011, 329, 4]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$VIc = e.$UIc = void 0),
					(a = mt(a));
				let h = class {
					constructor(g, p, o, f) {
						(this.a = g),
							(this.b = p),
							(this.c = o),
							(this.d = f),
							(this.hoverOrdinal = 1);
					}
					computeSync(g, p) {
						if (!this.a.hasModel()) return [];
						const o = this.c.getWidgetByInputUri(this.a.getModel().uri);
						if (!o) return [];
						const { agentPart: f } = (0, u.$Z2)(o.parsedInput);
						return f
							? i.$iL.containsPosition(
									f.editorRange,
									g.range.getStartPosition(),
								)
								? [new c(this, i.$iL.lift(f.editorRange), f.agent)]
								: []
							: [];
					}
					renderHoverParts(g, p) {
						if (!p.length) return new w.$4Bb([]);
						const o = new t.$Zc(),
							f = o.add(this.b.createInstance(m.$2Tb));
						o.add(f.onDidChangeContents(() => g.onContentsChanged()));
						const b = p[0],
							s = b.agent;
						f.setAgent(s.id);
						const l = (0, m.$3Tb)(() => s, this.d).actions,
							$ = this.b.createInstance(r.$TIc, f.domNode, l).domNode;
						g.fragment.appendChild($);
						const v = {
							hoverPart: b,
							hoverElement: $,
							dispose() {
								o.dispose();
							},
						};
						return new w.$4Bb([v]);
					}
					getAccessibleContent(g) {
						return a.localize(4736, null);
					}
				};
				(e.$UIc = h),
					(e.$UIc = h = Ne([j(1, C.$Li), j(2, d.$GYb), j(3, E.$ek)], h));
				class c {
					constructor(g, p, o) {
						(this.owner = g), (this.range = p), (this.agent = o);
					}
					isValidForHoverAnchor(g) {
						return (
							g.type === w.HoverAnchorType.Range &&
							this.range.startColumn <= g.range.startColumn &&
							this.range.endColumn >= g.range.endColumn
						);
					}
				}
				(e.$VIc = c), w.$5Bb.register(h);
			},
		),
		define(
			de[4075],
			he([1, 0, 141, 40, 21, 4, 5, 404, 24, 3, 119, 154, 157]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2Tc = void 0);
				let c = class extends r.$1c {
					constructor(g, p, o, f, b, s) {
						super(),
							(this.a = g),
							(this.b = o),
							(this.c = f),
							(this.f = b),
							(this.g = s),
							this.h(),
							this.D(
								p.onDidInstallExtensions((l) => {
									const y = [];
									for (const { local: $ } of l)
										$ &&
											g.local.find((v) =>
												(0, a.$7p)(v.identifier, $.identifier),
											)?.deprecationInfo &&
											y.push($.identifier.id.toLowerCase());
									y.length && this.m(y);
								}),
							);
					}
					async h() {
						if (
							this.c.getBoolean(
								"extensionsAssistant/doNotCheckDeprecated",
								w.StorageScope.PROFILE,
								!1,
							)
						)
							return;
						const g = await this.a.queryLocal(),
							p = this.j(),
							o = g
								.filter(
									(f) =>
										!!f.deprecationInfo && f.local && this.b.isEnabled(f.local),
								)
								.filter((f) => !p.includes(f.identifier.id.toLowerCase()));
						o.length &&
							this.f.prompt(i.Severity.Warning, (0, E.localize)(6016, null), [
								{
									label: (0, E.localize)(6017, null),
									run: async () => {
										this.m(o.map((b) => b.identifier.id.toLowerCase()));
										const f = this.g.createInstance(
											d.$NTb,
											o.map((b) => `@id:${b.identifier.id}`).join(" "),
										);
										try {
											await f.run();
										} finally {
											f.dispose();
										}
									},
								},
								{
									label: (0, E.localize)(6018, null),
									isSecondary: !0,
									run: () =>
										this.c.store(
											"extensionsAssistant/doNotCheckDeprecated",
											!0,
											w.StorageScope.PROFILE,
											w.StorageTarget.USER,
										),
								},
							]);
					}
					j() {
						return JSON.parse(
							this.c.get(
								"extensionsAssistant/deprecated",
								w.StorageScope.PROFILE,
								"[]",
							),
						);
					}
					m(g) {
						this.c.store(
							"extensionsAssistant/deprecated",
							JSON.stringify((0, m.$Qb)([...this.j(), ...g])),
							w.StorageScope.PROFILE,
							w.StorageTarget.USER,
						);
					}
				};
				(e.$2Tc = c),
					(e.$2Tc = c =
						Ne(
							[
								j(0, t.$MQb),
								j(1, u.$Hp),
								j(2, h.$IQb),
								j(3, w.$lq),
								j(4, i.$4N),
								j(5, C.$Li),
							],
							c,
						));
			},
		),
		define(
			de[4076],
			he([
				1, 0, 24, 15, 33, 29, 6, 3, 28, 4, 10, 154, 666, 5, 40, 21, 32, 68, 150,
				404, 141, 78, 157, 314,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$TTc = void 0);
				const v = "extensionsAssistant/importantRecommendationsIgnore",
					S = "extensionsAssistant/workspaceRecommendationsIgnore";
				class I extends d.$1c {
					constructor(k, L, D, M) {
						super(),
							(this.h = k),
							(this.j = L),
							(this.m = D),
							(this.n = M),
							(this.a = this.D(new C.$re())),
							(this.onDidClose = this.a.event),
							(this.b = this.D(new C.$re())),
							(this.onDidChangeVisibility = this.b.event),
							(this.g = !1),
							(this.q = this.D(new d.$2c())),
							(this.s = this.D(new d.$2c()));
					}
					show() {
						this.f ||
							this.t(
								this.n.prompt(this.h, this.j, this.m, {
									sticky: !0,
									onCancel: () => (this.g = !0),
								}),
							);
					}
					hide() {
						this.f &&
							(this.q.clear(),
							this.f.close(),
							(this.g = !1),
							this.t(
								this.n.prompt(this.h, this.j, this.m, {
									priority: n.NotificationPriority.SILENT,
									onCancel: () => (this.g = !0),
								}),
							));
					}
					isCancelled() {
						return this.g;
					}
					t(k) {
						this.q.clear(),
							this.s.clear(),
							(this.f = k),
							(this.q.value = this.f.onDidClose(() => {
								this.q.dispose(),
									this.s.dispose(),
									this.a.fire(),
									this.a.dispose(),
									this.b.dispose();
							})),
							(this.s.value = this.f.onDidChangeVisibility((L) =>
								this.b.fire(L),
							));
					}
				}
				let T = class extends d.$1c {
					get ignoredRecommendations() {
						return (0, t.$Qb)(
							[...JSON.parse(this.m.get(v, g.StorageScope.PROFILE, "[]"))].map(
								(k) => k.toLowerCase(),
							),
						);
					}
					constructor(k, L, D, M, N, A, R, O, B, U, z, F) {
						super(),
							(this.j = k),
							(this.m = L),
							(this.n = D),
							(this.q = M),
							(this.s = N),
							(this.t = A),
							(this.u = R),
							(this.w = O),
							(this.y = B),
							(this.z = U),
							(this.C = z),
							(this.F = F),
							(this.a = []),
							(this.b = []),
							(this.h = []);
					}
					hasToIgnoreRecommendationNotifications() {
						const k = this.j.getValue("extensions");
						return (
							k.ignoreRecommendations || !!k.showRecommendationsOnlyOnDemand
						);
					}
					async promptImportantExtensionsInstallNotification(k) {
						const L = [
								...this.y.ignoredRecommendations,
								...this.ignoredRecommendations,
							],
							D = k.extensions.filter((M) => !L.includes(M));
						return D.length
							? this.G(
									{ ...k, extensions: D },
									{
										onDidInstallRecommendedExtensions: (M) =>
											M.forEach((N) =>
												this.q.publicLog2("extensionRecommendations:popup", {
													userReaction: "install",
													extensionId: N.identifier.id,
													source: (0, h.$GTc)(k.source),
												}),
											),
										onDidShowRecommendedExtensions: (M) =>
											M.forEach((N) =>
												this.q.publicLog2("extensionRecommendations:popup", {
													userReaction: "show",
													extensionId: N.identifier.id,
													source: (0, h.$GTc)(k.source),
												}),
											),
										onDidCancelRecommendedExtensions: (M) =>
											M.forEach((N) =>
												this.q.publicLog2("extensionRecommendations:popup", {
													userReaction: "cancelled",
													extensionId: N.identifier.id,
													source: (0, h.$GTc)(k.source),
												}),
											),
										onDidNeverShowRecommendedExtensionsAgain: (M) => {
											for (const N of M)
												this.R(N.identifier.id),
													this.q.publicLog2("extensionRecommendations:popup", {
														userReaction: "neverShowAgain",
														extensionId: N.identifier.id,
														source: (0, h.$GTc)(k.source),
													});
											this.n.prompt(
												n.Severity.Info,
												(0, r.localize)(6081, null),
												[
													{
														label: (0, r.localize)(6082, null),
														run: () => this.S(!0),
													},
													{
														label: (0, r.localize)(6083, null),
														run: () => this.S(!1),
													},
												],
											);
										},
									},
								)
							: h.RecommendationsNotificationResult.Ignored;
					}
					async promptWorkspaceRecommendations(k) {
						if (this.m.getBoolean(S, g.StorageScope.WORKSPACE, !1)) return;
						let L = await this.u.getInstalled();
						(L = L.filter(
							(D) =>
								this.w.getEnablementState(D) !==
								y.EnablementState.DisabledByExtensionKind,
						)),
							(k = k.filter((D) =>
								L.every((M) =>
									(0, m.$lg)(D)
										? !(0, a.$7p)({ id: D }, M.identifier)
										: !this.F.extUri.isEqual(D, M.location),
								),
							)),
							k.length &&
								(await this.G(
									{
										extensions: k,
										source: h.RecommendationSource.WORKSPACE,
										name: (0, r.localize)(6084, null),
									},
									{
										onDidInstallRecommendedExtensions: () =>
											this.q.publicLog2(
												"extensionWorkspaceRecommendations:popup",
												{ userReaction: "install" },
											),
										onDidShowRecommendedExtensions: () =>
											this.q.publicLog2(
												"extensionWorkspaceRecommendations:popup",
												{ userReaction: "show" },
											),
										onDidCancelRecommendedExtensions: () =>
											this.q.publicLog2(
												"extensionWorkspaceRecommendations:popup",
												{ userReaction: "cancelled" },
											),
										onDidNeverShowRecommendedExtensionsAgain: () => {
											this.q.publicLog2(
												"extensionWorkspaceRecommendations:popup",
												{ userReaction: "neverShowAgain" },
											),
												this.m.store(
													S,
													!0,
													g.StorageScope.WORKSPACE,
													g.StorageTarget.MACHINE,
												);
										},
									},
								));
					}
					async G({ extensions: k, source: L, name: D, searchValue: M }, N) {
						if (this.hasToIgnoreRecommendationNotifications())
							return h.RecommendationsNotificationResult.Ignored;
						if (L === h.RecommendationSource.EXE && this.C.remoteAuthority)
							return h.RecommendationsNotificationResult.IncompatibleWindow;
						if (
							L === h.RecommendationSource.EXE &&
							(this.b.includes(h.RecommendationSource.EXE) ||
								this.b.length >= 2)
						)
							return h.RecommendationsNotificationResult.TooMany;
						if (
							(this.b.push(L),
							L === h.RecommendationSource.EXE &&
								k.every((U) => (0, m.$lg)(U) && this.a.includes(U)))
						)
							return h.RecommendationsNotificationResult.Ignored;
						const A = await this.P(k);
						if (!A.length) return h.RecommendationsNotificationResult.Ignored;
						this.a = (0, t.$Qb)([...this.a, ...k.filter(m.$lg)]);
						let R = "";
						if (A.length === 1)
							R = (0, r.localize)(
								6085,
								null,
								A[0].displayName,
								A[0].publisherDisplayName,
							);
						else {
							const U = [
								...A.reduce((z, F) => z.add(F.publisherDisplayName), new Set()),
							];
							U.length > 2
								? (R = (0, r.localize)(6086, null, U[0], U[1]))
								: U.length === 2
									? (R = (0, r.localize)(6087, null, U[0], U[1]))
									: (R = (0, r.localize)(6088, null, U[0]));
						}
						let O = (0, r.localize)(6089, null, R, D);
						L === h.RecommendationSource.EXE &&
							(O = (0, r.localize)(6090, null, D, R)),
							M ||
								(M =
									L === h.RecommendationSource.WORKSPACE
										? "@recommended"
										: A.map((U) => `@id:${U.identifier.id}`).join(" "));
						const B =
							L === h.RecommendationSource.WORKSPACE
								? (0, r.localize)(6091, null)
								: A.length > 1
									? (0, r.localize)(6092, null)
									: (0, r.localize)(6093, null);
						return (0, i.$Ch)([
							this.U(this.H(A, O, M, B, L, N)),
							this.U(this.I(A)),
						]);
					}
					H(
						k,
						L,
						D,
						M,
						N,
						{
							onDidInstallRecommendedExtensions: A,
							onDidShowRecommendedExtensions: R,
							onDidCancelRecommendedExtensions: O,
							onDidNeverShowRecommendedExtensionsAgain: B,
						},
					) {
						return (0, i.$zh)(async (U) => {
							let z = !1;
							const F = [],
								x = async (H) => {
									this.Q(this.s.createInstance(b.$NTb, D)), A(k);
									const q = [],
										V = [];
									for (const G of k)
										G.gallery
											? q.push(G.gallery)
											: G.resourceExtension && V.push(G);
									await i.Promises.settled([
										i.Promises.settled(
											k.map((G) => this.t.open(G, { pinned: !0 })),
										),
										q.length
											? this.u.installGalleryExtensions(
													q.map((G) => ({
														extension: G,
														options: { isMachineScoped: H },
													})),
												)
											: Promise.resolve(),
										V.length
											? Promise.allSettled(V.map((G) => this.t.install(G)))
											: Promise.resolve(),
									]);
								};
							F.push({
								label: (0, r.localize)(6094, null),
								run: () => x(!1),
								menu:
									this.z.isEnabled() &&
									this.z.isResourceEnabled(f.SyncResource.Extensions)
										? [{ label: (0, r.localize)(6095, null), run: () => x(!0) }]
										: void 0,
							}),
								F.push(
									{
										label: (0, r.localize)(6096, null),
										run: async () => {
											R(k);
											for (const H of k) this.t.open(H, { pinned: !0 });
											this.Q(this.s.createInstance(b.$NTb, D));
										},
									},
									{
										label: M,
										isSecondary: !0,
										run: () => {
											B(k);
										},
									},
								);
							try {
								z = await this.J(n.Severity.Info, L, F, N, U);
							} catch (H) {
								if (!(0, E.$8)(H)) throw H;
							}
							return z
								? h.RecommendationsNotificationResult.Accepted
								: (O(k), h.RecommendationsNotificationResult.Cancelled);
						});
					}
					I(k) {
						const L = [],
							D = new d.$Zc();
						return (0, i.$zh)(
							async (M) => (
								D.add(M.onCancellationRequested((N) => D.dispose())),
								new Promise((N, A) => {
									D.add(
										this.u.onInstallExtension((R) => {
											L.push(R.identifier.id.toLowerCase()),
												k.every((O) =>
													L.includes(O.identifier.id.toLowerCase()),
												) && N(h.RecommendationsNotificationResult.Accepted);
										}),
									);
								})
							),
						);
					}
					async J(k, L, D, M, N) {
						const A = new d.$Zc();
						try {
							const R = A.add(new I(k, L, D, this.n));
							if (
								(A.add(
									C.Event.once(
										C.Event.filter(R.onDidChangeVisibility, (O) => !O),
									)(() => this.L()),
								),
								this.g)
							) {
								const O = this.h.length;
								A.add(N.onCancellationRequested(() => this.h.splice(O, 1))),
									this.h.push({
										recommendationsNotification: R,
										source: M,
										token: N,
									}),
									M !== h.RecommendationSource.EXE &&
										M <= this.g.source &&
										this.N(3e3);
							} else
								(this.g = {
									recommendationsNotification: R,
									source: M,
									from: Date.now(),
								}),
									R.show();
							return (
								await (0, i.$Ah)(
									new Promise((O) => A.add(C.Event.once(R.onDidClose)(O))),
									N,
								),
								!R.isCancelled()
							);
						} finally {
							A.dispose();
						}
					}
					L() {
						const k = this.M(),
							[L] = k > -1 ? this.h.splice(k, 1) : [];
						(0, i.$Nh)(L ? 500 : 0).then(() => {
							this.O(),
								L &&
									((this.g = {
										recommendationsNotification: L.recommendationsNotification,
										source: L.source,
										from: Date.now(),
									}),
									L.recommendationsNotification.show());
						});
					}
					M() {
						let k = this.h.length - 1;
						if (this.h.length)
							for (let L = 0; L < this.h.length; L++)
								this.h[L].source <= this.h[k].source && (k = L);
						return k;
					}
					N(k) {
						if (this.g && !this.f) {
							const L = this.g;
							(this.f = (0, i.$Nh)(Math.max(k - (Date.now() - L.from), 0))),
								this.f.then(() => L.recommendationsNotification.hide());
						}
					}
					O() {
						this.f?.cancel(), (this.f = void 0), (this.g = void 0);
					}
					async P(k) {
						const L = [];
						if (k.length) {
							const D = [],
								M = [];
							for (const N of k) typeof N == "string" ? D.push(N) : M.push(N);
							if (D.length) {
								const N = await this.t.getExtensions(
									D.map((A) => ({ id: A })),
									{ source: "install-recommendations" },
									w.CancellationToken.None,
								);
								for (const A of N)
									A.gallery &&
										(await this.u.canInstall(A.gallery)) &&
										L.push(A);
							}
							if (M.length) {
								const N = await this.t.getResourceExtensions(M, !0);
								for (const A of N) (await this.t.canInstall(A)) && L.push(A);
							}
						}
						return L;
					}
					async Q(k) {
						try {
							await k.run();
						} finally {
							(0, d.$Uc)(k) && k.dispose();
						}
					}
					R(k) {
						const L = [...this.ignoredRecommendations];
						L.includes(k.toLowerCase()) ||
							(L.push(k.toLowerCase()),
							this.m.store(
								v,
								JSON.stringify(L),
								g.StorageScope.PROFILE,
								g.StorageTarget.USER,
							));
					}
					S(k) {
						this.j.updateValue("extensions.ignoreRecommendations", k);
					}
					U(k) {
						return this.D((0, d.$Yc)(() => k.cancel())), k;
					}
				};
				(e.$TTc = T),
					(e.$TTc = T =
						Ne(
							[
								j(0, u.$gj),
								j(1, g.$lq),
								j(2, n.$4N),
								j(3, p.$km),
								j(4, c.$Li),
								j(5, s.$MQb),
								j(6, y.$GQb),
								j(7, y.$IQb),
								j(8, $.$0Qb),
								j(9, f.$4Rb),
								j(10, l.$r8),
								j(11, o.$Vl),
							],
							T,
						));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[1955],
		he([
			1, 0, 464, 3, 141, 7, 12, 4, 157, 314, 73, 404, 35, 26, 123, 6, 5, 495,
			10, 150, 466, 51, 72, 94, 9, 53, 154, 111, 97, 267, 41, 29, 182, 114, 27,
			32, 106, 782, 95, 25, 2438,
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
		) {
			"use strict";
			var F;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$WSc =
					e.$VSc =
					e.$USc =
					e.$TSc =
					e.$SSc =
					e.$RSc =
					e.$QSc =
					e.$PSc =
					e.$OSc =
					e.$NSc =
					e.$MSc =
					e.$LSc =
					e.$KSc =
					e.$JSc =
					e.$ISc =
					e.$HSc =
					e.$GSc =
					e.$ESc =
						void 0),
				(e.$FSc = H),
				(t = mt(t)),
				(C = mt(C)),
				(T = xi(T));
			class x extends i.$1c {
				constructor() {
					super(...arguments), (this.b = null);
				}
				get extension() {
					return this.b;
				}
				set extension(se) {
					(this.b = se), this.update();
				}
				update() {
					this.render();
				}
			}
			e.$ESc = x;
			function H(Z, se) {
				const re = new i.$Zc();
				return (
					re.add((0, E.$0fb)(Z, E.$$gb.CLICK, (0, E.$ohb)(se))),
					re.add(
						(0, E.$0fb)(Z, E.$$gb.KEY_UP, (le) => {
							const oe = new N.$7fb(le);
							(oe.equals(A.KeyCode.Space) || oe.equals(A.KeyCode.Enter)) &&
								(le.preventDefault(), le.stopPropagation(), se());
						}),
					),
					re
				);
			}
			class q extends x {
				constructor(se, re) {
					super(),
						(this.a = se),
						(this.c = re),
						se.classList.add("extension-install-count"),
						this.render();
				}
				render() {
					if (
						((this.a.innerText = ""),
						!this.extension ||
							(this.c && this.extension.state !== w.ExtensionState.Uninstalled))
					)
						return;
					const se = q.getInstallLabel(this.extension, this.c);
					if (!se) return;
					(0, E.$fhb)(
						this.a,
						(0, E.$)("span" + c.ThemeIcon.asCSSSelector(s.$lSb)),
					);
					const re = (0, E.$fhb)(this.a, (0, E.$)("span.count"));
					re.textContent = se;
				}
				static getInstallLabel(se, re) {
					const le = se.installCount;
					if (le === void 0) return;
					let oe;
					return (
						re
							? le > 1e6
								? (oe = `${Math.floor(le / 1e5) / 10}M`)
								: le > 1e3
									? (oe = `${Math.floor(le / 1e3)}K`)
									: (oe = String(le))
							: (oe = le.toLocaleString(C.$z)),
						oe
					);
				}
			}
			e.$GSc = q;
			let V = class extends x {
				constructor(se, re, le) {
					super(),
						(this.c = se),
						(this.f = re),
						se.classList.add("extension-ratings"),
						this.f && se.classList.add("small"),
						(this.a = this.D(
							le.setupManagedHover((0, U.$cib)("mouse"), se, ""),
						)),
						this.render();
				}
				render() {
					if (
						((this.c.innerText = ""),
						!this.extension ||
							(this.f &&
								this.extension.state !== w.ExtensionState.Uninstalled) ||
							this.extension.rating === void 0 ||
							(this.f && !this.extension.ratingCount))
					)
						return;
					const se = Math.round(this.extension.rating * 2) / 2;
					if ((this.a.update((0, d.localize)(6502, null, se)), this.f)) {
						(0, E.$fhb)(
							this.c,
							(0, E.$)("span" + c.ThemeIcon.asCSSSelector(s.$qSb)),
						);
						const re = (0, E.$fhb)(this.c, (0, E.$)("span.count"));
						re.textContent = String(se);
					} else {
						for (let re = 1; re <= 5; re++)
							se >= re
								? (0, E.$fhb)(
										this.c,
										(0, E.$)("span" + c.ThemeIcon.asCSSSelector(s.$qSb)),
									)
								: se >= re - 0.5
									? (0, E.$fhb)(
											this.c,
											(0, E.$)("span" + c.ThemeIcon.asCSSSelector(s.$rSb)),
										)
									: (0, E.$fhb)(
											this.c,
											(0, E.$)("span" + c.ThemeIcon.asCSSSelector(s.$sSb)),
										);
						if (this.extension.ratingCount) {
							const re = (0, E.$fhb)(
								this.c,
								(0, E.$)("span", void 0, ` (${this.extension.ratingCount})`),
							);
							re.style.paddingLeft = "1px";
						}
					}
				}
			};
			(e.$HSc = V), (e.$HSc = V = Ne([j(2, y.$Uyb)], V));
			let G = class extends x {
				constructor(se, re, le, oe) {
					super(),
						(this.f = se),
						(this.g = re),
						(this.h = oe),
						(this.a = this.D(new i.$Zc())),
						(this.c = this.D(
							le.setupManagedHover((0, U.$cib)("mouse"), se, ""),
						)),
						this.render();
				}
				render() {
					if (
						((0, E.$hhb)(this.f),
						this.a.clear(),
						!this.extension?.publisherDomain?.verified ||
							this.extension.resourceExtension ||
							this.extension.local?.source === "resource")
					)
						return;
					const se = v.URI.parse(this.extension.publisherDomain.link),
						re = (0, E.$fhb)(
							this.f,
							(0, E.$)("span.extension-verified-publisher.clickable"),
						);
					(0, E.$fhb)(re, (0, M.$Tib)(s.$nSb)),
						this.g ||
							((re.tabIndex = 0),
							this.c.update(
								`Verified Domain: ${this.extension.publisherDomain.link}`,
							),
							re.setAttribute("role", "link"),
							(0, E.$fhb)(
								re,
								(0, E.$)(
									"span.extension-verified-publisher-domain",
									void 0,
									se.authority.startsWith("www.")
										? se.authority.substring(4)
										: se.authority,
								),
							),
							this.a.add(H(re, () => this.h.open(se))));
				}
			};
			(e.$ISc = G), (e.$ISc = G = Ne([j(2, y.$Uyb), j(3, L.$7rb)], G));
			let K = class extends x {
				constructor(se, re, le, oe) {
					super(),
						(this.c = se),
						(this.f = re),
						(this.g = le),
						(this.h = oe),
						(this.a = this.D(new i.$Zc())),
						this.render();
				}
				render() {
					if (
						((0, E.$hhb)(this.c),
						this.a.clear(),
						!this.extension?.publisherSponsorLink)
					)
						return;
					const se = (0, E.$fhb)(
						this.c,
						(0, E.$)("span.sponsor.clickable", { tabIndex: 0 }),
					);
					this.a.add(
						this.f.setupManagedHover(
							(0, U.$cib)("mouse"),
							se,
							this.extension?.publisherSponsorLink.toString() ?? "",
						),
					),
						se.setAttribute("role", "link");
					const re = (0, M.$Tib)(s.$pSb),
						le = (0, E.$)("span", void 0, (0, d.localize)(6503, null));
					(0, E.$fhb)(se, re, le),
						this.a.add(
							H(se, () => {
								this.h.publicLog2("extensionsAction.sponsorExtension", {
									extensionId: this.extension.identifier.id,
								}),
									this.g.open(this.extension.publisherSponsorLink);
							}),
						);
				}
			};
			(e.$JSc = K),
				(e.$JSc = K = Ne([j(1, y.$Uyb), j(2, L.$7rb), j(3, R.$km)], K));
			let J = class extends x {
				constructor(se, re) {
					super(),
						(this.f = se),
						(this.g = re),
						(this.c = this.D(new i.$Zc())),
						this.render(),
						this.D((0, i.$Yc)(() => this.h())),
						this.D(this.g.onDidChangeRecommendations(() => this.render()));
				}
				h() {
					this.a?.remove(), (this.a = void 0), this.c.clear();
				}
				render() {
					if (
						(this.h(),
						!this.extension ||
							this.extension.state === w.ExtensionState.Installed ||
							this.extension.deprecationInfo ||
							(0, B.$Oq)(this.extension))
					)
						return;
					if (
						this.g.getAllRecommendationsWithReason()[
							this.extension.identifier.id.toLowerCase()
						]
					) {
						this.a = (0, E.$fhb)(this.f, (0, E.$)("div.extension-bookmark"));
						const re = (0, E.$fhb)(this.a, (0, E.$)(".recommendation"));
						(0, E.$fhb)(
							re,
							(0, E.$)("span" + c.ThemeIcon.asCSSSelector(s.$mSb)),
						);
					}
				}
			};
			(e.$KSc = J), (e.$KSc = J = Ne([j(1, r.$9Qb)], J));
			class W extends x {
				constructor(se) {
					super(),
						(this.f = se),
						(this.c = this.D(new i.$Zc())),
						this.render(),
						this.D((0, i.$Yc)(() => this.g()));
				}
				g() {
					this.a?.remove(), (this.a = void 0), this.c.clear();
				}
				render() {
					if (
						(this.g(),
						this.extension?.state === w.ExtensionState.Installed
							? this.extension.preRelease
							: this.extension?.hasPreReleaseVersion)
					) {
						this.a = (0, E.$fhb)(this.f, (0, E.$)("div.extension-bookmark"));
						const se = (0, E.$fhb)(this.a, (0, E.$)(".pre-release"));
						(0, E.$fhb)(
							se,
							(0, E.$)("span" + c.ThemeIcon.asCSSSelector(s.$oSb)),
						);
					}
				}
			}
			e.$LSc = W;
			let X = class extends x {
				constructor(se, re, le, oe) {
					super(),
						(this.f = re),
						(this.g = le),
						(this.h = oe),
						(this.a = this.D(new i.$2c())),
						(this.c = (0, E.$fhb)(
							se,
							(0, E.$)(".extension-remote-badge-container"),
						)),
						this.render(),
						this.D((0, i.$Yc)(() => this.j()));
				}
				j() {
					this.a.value?.element.remove(), this.a.clear();
				}
				render() {
					this.j(),
						!(
							!this.extension ||
							!this.extension.local ||
							!this.extension.server ||
							!(
								this.g.localExtensionManagementServer &&
								this.g.remoteExtensionManagementServer
							) ||
							this.extension.server !== this.g.remoteExtensionManagementServer
						) &&
							((this.a.value = this.h.createInstance(Y, this.f)),
							(0, E.$fhb)(this.c, this.a.value.element));
				}
			};
			(e.$MSc = X), (e.$MSc = X = Ne([j(2, m.$EQb), j(3, p.$Li)], X));
			let Y = class extends i.$1c {
				constructor(se, re, le, oe, ae) {
					super(),
						(this.a = se),
						(this.b = le),
						(this.c = oe),
						(this.f = ae),
						(this.element = (0, E.$)(
							"div.extension-badge.extension-remote-badge",
						)),
						(this.elementHover = this.D(
							re.setupManagedHover((0, U.$cib)("mouse"), this.element, ""),
						)),
						this.g();
				}
				g() {
					(0, E.$fhb)(
						this.element,
						(0, E.$)("span" + c.ThemeIcon.asCSSSelector(s.$kSb)),
					);
					const se = () => {
						if (!this.element) return;
						const re = this.c.getColorTheme().getColor(n.$uGb),
							le = this.c.getColorTheme().getColor(n.$vGb);
						(this.element.style.backgroundColor = re ? re.toString() : ""),
							(this.element.style.color = le ? le.toString() : "");
					};
					if (
						(se(), this.D(this.c.onDidColorThemeChange(() => se())), this.a)
					) {
						const re = () => {
							this.element &&
								this.f.remoteExtensionManagementServer &&
								this.elementHover.update(
									(0, d.localize)(
										6504,
										null,
										this.f.remoteExtensionManagementServer.label,
									),
								);
						};
						this.D(this.b.onDidChangeFormatters(() => re())), re();
					}
				}
			};
			Y = Ne([j(1, y.$Uyb), j(2, u.$3N), j(3, h.$iP), j(4, m.$EQb)], Y);
			class ie extends x {
				constructor(se) {
					super(),
						(this.c = se),
						this.render(),
						this.D((0, i.$Yc)(() => this.f()));
				}
				f() {
					this.a?.remove();
				}
				render() {
					if (
						(this.f(),
						!this.extension ||
							!this.extension.categories?.some(
								(re) => re.toLowerCase() === "extension packs",
							) ||
							!this.extension.extensionPack.length)
					)
						return;
					(this.a = (0, E.$fhb)(
						this.c,
						(0, E.$)(".extension-badge.extension-pack-badge"),
					)),
						new o.$Hob(this.a, {}, O.$zyb).setCount(
							this.extension.extensionPack.length,
						);
				}
			}
			e.$NSc = ie;
			let ne = class extends x {
				constructor(se, re, le, oe, ae) {
					super(),
						(this.c = se),
						(this.f = re),
						(this.g = le),
						(this.h = oe),
						(this.j = ae),
						(this.a = this.D(new i.$Zc())),
						this.D(
							g.Event.filter(this.f.onDidChangeConfiguration, (pe) =>
								pe.affectsConfiguration("settingsSync.ignoredExtensions"),
							)(() => this.render()),
						),
						this.D(ae.onDidChangeEnablement(() => this.update())),
						this.render();
				}
				render() {
					if (
						(this.a.clear(),
						(this.c.innerText = ""),
						this.extension &&
							this.extension.state === w.ExtensionState.Installed &&
							this.j.isEnabled() &&
							this.g.isExtensionIgnoredToSync(this.extension))
					) {
						const se = (0, E.$fhb)(
							this.c,
							(0, E.$)(
								"span.extension-sync-ignored" +
									c.ThemeIcon.asCSSSelector(s.$jSb),
							),
						);
						this.a.add(
							this.h.setupManagedHover(
								(0, U.$cib)("mouse"),
								se,
								(0, d.localize)(6505, null),
							),
						),
							se.classList.add(...c.ThemeIcon.asClassNameArray(s.$jSb));
					}
				}
			};
			(e.$OSc = ne),
				(e.$OSc = ne =
					Ne([j(1, f.$gj), j(2, w.$MQb), j(3, y.$Uyb), j(4, b.$4Rb)], ne));
			let ee = class extends x {
				constructor(se, re, le, oe) {
					super(),
						(this.a = se),
						(this.c = re),
						(this.f = oe),
						this.D(
							le.onDidChangeExtensionsStatus((ae) => {
								this.extension &&
									ae.some((pe) =>
										(0, I.$7p)({ id: pe.value }, this.extension.identifier),
									) &&
									this.update();
							}),
						);
				}
				render() {
					if (((this.a.innerText = ""), !this.extension)) return;
					const se = this.f.getExtensionStatus(this.extension);
					if (!se || !se.activationTimes) return;
					const re =
						se.activationTimes.codeLoadingTime +
						se.activationTimes.activateCallTime;
					if (this.c) {
						(0, E.$fhb)(
							this.a,
							(0, E.$)("span" + c.ThemeIcon.asCSSSelector(s.$xSb)),
						);
						const le = (0, E.$fhb)(this.a, (0, E.$)("span.activationTime"));
						le.textContent = `${re}ms`;
					} else {
						const le = (0, E.$fhb)(this.a, (0, E.$)("span.activationTime"));
						le.textContent = `${(0, d.localize)(6506, null)}${se.activationTimes.activationReason.startup ? ` (${(0, d.localize)(6507, null)})` : ""} : ${re}ms`;
					}
				}
			};
			(e.$PSc = ee), (e.$PSc = ee = Ne([j(2, S.$q2), j(3, w.$MQb)], ee));
			let _ = (F = class extends x {
				constructor(se, re, le, oe, ae, pe, $e, ye) {
					super(),
						(this.c = se),
						(this.f = re),
						(this.g = le),
						(this.h = oe),
						(this.j = ae),
						(this.m = pe),
						(this.n = $e),
						(this.q = ye),
						(this.a = this.D(new i.$2c()));
				}
				render() {
					(this.a.value = void 0),
						this.extension &&
							(this.a.value = this.h.setupManagedHover(
								{
									delay: this.j.getValue("workbench.hover.delay"),
									showHover: (se, re) =>
										this.h.showHover(
											{
												...se,
												additionalClasses: ["extension-hover"],
												position: {
													hoverPosition: this.c.position(),
													forcePosition: !0,
												},
												persistence: { hideOnKeyDown: !0 },
											},
											re,
										),
									placement: "element",
								},
								this.c.target,
								{
									markdown: () => Promise.resolve(this.r()),
									markdownNotSupportedFallback: void 0,
								},
								{ appearance: { showHoverHint: !0 } },
							));
				}
				r() {
					if (!this.extension) return;
					const se = new $.$cl("", { isTrusted: !0, supportThemeIcons: !0 });
					if (
						(se.appendMarkdown(`**${this.extension.displayName}**`),
						t.valid(this.extension.version) &&
							se.appendMarkdown(
								`&nbsp;<span style="background-color:#8080802B;">**&nbsp;_v${this.extension.version}${this.extension.isPreReleaseVersion ? " (pre-release)" : ""}_**&nbsp;</span>`,
							),
						se.appendText(`
`),
						this.extension.state === w.ExtensionState.Installed)
					) {
						let ye = !1;
						const ue = q.getInstallLabel(this.extension, !0);
						if (
							(ue &&
								(ye && se.appendText("  |  "),
								se.appendMarkdown(`$(${s.$lSb.id}) ${ue}`),
								(ye = !0)),
							this.extension.rating)
						) {
							ye && se.appendText("  |  ");
							const fe = Math.round(this.extension.rating * 2) / 2;
							se.appendMarkdown(
								`$(${s.$qSb.id}) [${fe}](${this.extension.url}&ssr=false#review-details)`,
							),
								(ye = !0);
						}
						this.extension.publisherSponsorLink &&
							(ye && se.appendText("  |  "),
							se.appendMarkdown(
								`$(${s.$pSb.id}) [${(0, d.localize)(6508, null)}](${this.extension.publisherSponsorLink})`,
							),
							(ye = !0)),
							ye &&
								se.appendText(`
`);
					}
					const re =
						this.extension.resourceExtension?.location ??
						(this.extension.local?.source === "resource"
							? this.extension.local?.location
							: void 0);
					if (
						(re &&
							(this.extension.isWorkspaceScoped && this.q.isInsideWorkspace(re)
								? se.appendMarkdown((0, d.localize)(6509, null))
								: se.appendMarkdown((0, d.localize)(6510, null)),
							se.appendText(`
`)),
						this.extension.description &&
							(se.appendMarkdown(`${this.extension.description}`),
							se.appendText(`
`)),
						this.extension.publisherDomain?.verified)
					) {
						const ye = this.n.getColorTheme().getColor(e.$USc),
							ue = (0, d.localize)(
								6511,
								null,
								`[${v.URI.parse(this.extension.publisherDomain.link).authority}](${this.extension.publisherDomain.link})`,
							);
						se.appendMarkdown(
							`<span style="color:${ye ? P.$UL.Format.CSS.formatHex(ye) : "#ffffff"};">$(${s.$nSb.id})</span>&nbsp;${ue}`,
						),
							se.appendText(`
`);
					}
					this.extension.outdated &&
						(se.appendMarkdown((0, d.localize)(6512, null)),
						se.appendMarkdown(
							`&nbsp;<span style="background-color:#8080802B;">**&nbsp;_v${this.extension.latestVersion}_**&nbsp;</span>`,
						),
						se.appendText(`
`));
					const le = F.getPreReleaseMessage(this.extension),
						oe = this.g.getExtensionStatus(this.extension),
						ae = this.f.status,
						pe = this.extension.runtimeState,
						$e = this.s(this.extension);
					if (oe || ae.length || pe || $e || le) {
						if (
							(se.appendMarkdown("---"),
							se.appendText(`
`),
							oe)
						) {
							if (oe.activationTimes) {
								const ye =
									oe.activationTimes.codeLoadingTime +
									oe.activationTimes.activateCallTime;
								se.appendMarkdown(
									`${(0, d.localize)(6513, null)}${oe.activationTimes.activationReason.startup ? ` (${(0, d.localize)(6514, null)})` : ""}: \`${ye}ms\``,
								),
									se.appendText(`
`);
							}
							if (oe.runtimeErrors.length || oe.messages.length) {
								const ye =
										oe.runtimeErrors.length ||
										oe.messages.some((ve) => ve.type === T.default.Error),
									ue = oe.messages.some((ve) => ve.type === T.default.Warning),
									fe = oe.runtimeErrors.length
										? `[${oe.runtimeErrors.length === 1 ? ((0, d.localize))(6515, null) : ((0, d.localize))(6516, null, oe.runtimeErrors.length)}](${v.URI.parse(`command:extension.open?${encodeURIComponent(JSON.stringify([this.extension.identifier.id, w.ExtensionEditorTab.Features]))}`)})`
										: void 0,
									me = oe.messages.length
										? `[${oe.messages.length === 1 ? ((0, d.localize))(6517, null) : ((0, d.localize))(6518, null, oe.messages.length)}](${v.URI.parse(`command:extension.open?${encodeURIComponent(JSON.stringify([this.extension.identifier.id, w.ExtensionEditorTab.Features]))}`)})`
										: void 0;
								se.appendMarkdown(
									`$(${ye ? s.$tSb.id : ue ? s.$uSb.id : s.$vSb.id}) This extension has reported `,
								),
									fe && me
										? se.appendMarkdown(`${fe} and ${me}`)
										: se.appendMarkdown(`${fe || me}`),
									se.appendText(`
`);
							}
						}
						for (const ye of ae)
							ye.icon && se.appendMarkdown(`$(${ye.icon.id})&nbsp;`),
								se.appendMarkdown(ye.message.value),
								this.extension.enablementState ===
									m.EnablementState.DisabledByExtensionDependency &&
									this.extension.local &&
									se.appendMarkdown(
										`&nbsp;[${(0, d.localize)(6519, null)}](${v.URI.parse(`command:extension.open?${encodeURIComponent(JSON.stringify([this.extension.identifier.id, w.ExtensionEditorTab.Dependencies]))}`)})`,
									),
								se.appendText(`
`);
						if (
							(pe &&
								(se.appendMarkdown(`$(${s.$vSb.id})&nbsp;`),
								se.appendMarkdown(`${pe.reason}`),
								se.appendText(`
`)),
							le)
						) {
							const ye = this.n.getColorTheme().getColor(e.$VSc);
							se.appendMarkdown(
								`<span style="color:${ye ? P.$UL.Format.CSS.formatHex(ye) : "#ffffff"};">$(${s.$oSb.id})</span>&nbsp;${le}`,
							),
								se.appendText(`
`);
						}
						$e &&
							(se.appendMarkdown($e),
							se.appendText(`
`));
					}
					return se;
				}
				s(se) {
					if (
						se.state === w.ExtensionState.Installed ||
						se.deprecationInfo ||
						(0, B.$Oq)(se)
					)
						return;
					const re =
						this.m.getAllRecommendationsWithReason()[
							se.identifier.id.toLowerCase()
						];
					if (!re?.reasonText) return;
					const le = this.n.getColorTheme().getColor(a.$1Tb);
					return `<span style="color:${le ? P.$UL.Format.CSS.formatHex(le) : "#ffffff"};">$(${s.$sSb.id})</span>&nbsp;${re.reasonText}`;
				}
				static getPreReleaseMessage(se) {
					if (
						!se.hasPreReleaseVersion ||
						se.isBuiltin ||
						se.isPreReleaseVersion ||
						se.preRelease
					)
						return;
					const re = `[${(0, d.localize)(6520, null)}](${v.URI.parse(`command:workbench.extensions.action.showPreReleaseVersion?${encodeURIComponent(JSON.stringify([se.identifier.id]))}`)})`;
					return (0, d.localize)(6521, null, re);
				}
			});
			(e.$QSc = _),
				(e.$QSc =
					_ =
					F =
						Ne(
							[
								j(2, w.$MQb),
								j(3, y.$Uyb),
								j(4, f.$gj),
								j(5, r.$9Qb),
								j(6, h.$iP),
								j(7, z.$Vi),
							],
							_,
						));
			let te = class extends x {
				constructor(se, re, le) {
					super(),
						(this.f = se),
						(this.g = re),
						(this.h = le),
						(this.a = this.D(new i.$2c())),
						(this.c = this.D(new g.$re())),
						(this.onDidRender = this.c.event),
						this.render(),
						this.D(re.onDidChangeStatus(() => this.render()));
				}
				render() {
					(0, E.$hhb)(this.f), (this.a.value = void 0);
					const se = new i.$Zc();
					this.a.value = se;
					const re = this.g.status;
					if (re.length) {
						const le = new $.$cl("", { isTrusted: !0, supportThemeIcons: !0 });
						for (let ae = 0; ae < re.length; ae++) {
							const pe = re[ae];
							pe.icon && le.appendMarkdown(`$(${pe.icon.id})&nbsp;`),
								le.appendMarkdown(pe.message.value),
								ae < re.length - 1 &&
									le.appendText(`
`);
						}
						const oe = se.add(
							(0, k.$Uib)(le, {
								actionHandler: {
									callback: (ae) => {
										this.h.open(ae, { allowCommands: !0 }).catch(D.$4);
									},
									disposables: se,
								},
							}),
						);
						(0, E.$fhb)(this.f, oe.element);
					}
					this.c.fire();
				}
			};
			(e.$RSc = te), (e.$RSc = te = Ne([j(2, L.$7rb)], te));
			let Q = class extends x {
				constructor(se, re, le) {
					super(),
						(this.c = se),
						(this.f = re),
						(this.g = le),
						(this.a = this.D(new g.$re())),
						(this.onDidRender = this.a.event),
						this.render(),
						this.D(this.f.onDidChangeRecommendations(() => this.render()));
				}
				render() {
					(0, E.$hhb)(this.c);
					const se = this.h();
					se &&
						(se.icon &&
							(0, E.$fhb)(
								this.c,
								(0, E.$)(`div${c.ThemeIcon.asCSSSelector(se.icon)}`),
							),
						(0, E.$fhb)(
							this.c,
							(0, E.$)("div.recommendation-text", void 0, se.message),
						)),
						this.a.fire();
				}
				h() {
					if (
						!this.extension ||
						this.extension.deprecationInfo ||
						(0, B.$Oq)(this.extension) ||
						this.extension.state === w.ExtensionState.Installed
					)
						return;
					const se = this.f.getAllRecommendationsWithReason();
					if (se[this.extension.identifier.id.toLowerCase()]) {
						const re =
							se[this.extension.identifier.id.toLowerCase()].reasonText;
						if (re) return { icon: s.$sSb, message: re };
					} else if (
						this.g.globalIgnoredRecommendations.indexOf(
							this.extension.identifier.id.toLowerCase(),
						) !== -1
					)
						return { icon: void 0, message: (0, d.localize)(6522, null) };
				}
			};
			(e.$SSc = Q),
				(e.$SSc = Q = Ne([j(1, r.$9Qb), j(2, r.$0Qb)], Q)),
				(e.$TSc = (0, l.$wP)(
					"extensionIcon.starForeground",
					{
						light: "#DF6100",
						dark: "#FF8E00",
						hcDark: "#FF8E00",
						hcLight: l.$RP,
					},
					(0, d.localize)(6523, null),
					!0,
				)),
				(e.$USc = (0, l.$wP)(
					"extensionIcon.verifiedForeground",
					l.$RP,
					(0, d.localize)(6524, null),
					!0,
				)),
				(e.$VSc = (0, l.$wP)(
					"extensionIcon.preReleaseForeground",
					{
						dark: "#1d9271",
						light: "#1d9271",
						hcDark: "#1d9271",
						hcLight: l.$RP,
					},
					(0, d.localize)(6525, null),
					!0,
				)),
				(e.$WSc = (0, l.$wP)(
					"extensionIcon.sponsorForeground",
					{
						light: "#B51E78",
						dark: "#D758B3",
						hcDark: null,
						hcLight: "#B51E78",
					},
					(0, d.localize)(6526, null),
					!0,
				)),
				(0, h.$oP)((Z, se) => {
					const re = Z.getColor(e.$TSc);
					re &&
						(se.addRule(
							`.extension-ratings .codicon-extensions-star-full, .extension-ratings .codicon-extensions-star-half { color: ${re}; }`,
						),
						se.addRule(
							`.monaco-hover.extension-hover .markdown-hover .hover-contents ${c.ThemeIcon.asCSSSelector(s.$qSb)} { color: ${re}; }`,
						));
					const le = Z.getColor(e.$USc);
					le &&
						se.addRule(
							`${c.ThemeIcon.asCSSSelector(s.$nSb)} { color: ${le}; }`,
						),
						se.addRule(
							`.monaco-hover.extension-hover .markdown-hover .hover-contents ${c.ThemeIcon.asCSSSelector(s.$pSb)} { color: var(--vscode-extensionIcon-sponsorForeground); }`,
						),
						se.addRule(
							`.extension-editor > .header > .details > .subtitle .sponsor ${c.ThemeIcon.asCSSSelector(s.$pSb)} { color: var(--vscode-extensionIcon-sponsorForeground); }`,
						);
				});
		},
	),
		define(
			de[1356],
			he([
				1, 0, 7, 3, 105, 5, 6, 141, 404, 154, 1955, 53, 157, 40, 35, 26, 123,
				49, 466, 2434,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$YSc = e.$XSc = void 0);
				const b = 72;
				class s {
					getHeight() {
						return b;
					}
					getTemplateId() {
						return "extension";
					}
				}
				e.$XSc = s;
				let l = class {
					constructor($, v, S, I, T, P, k, L) {
						(this.a = $),
							(this.b = v),
							(this.c = S),
							(this.d = I),
							(this.f = T),
							(this.g = P),
							(this.h = k),
							(this.i = L);
					}
					get templateId() {
						return "extension";
					}
					renderTemplate($) {
						const v = this.c.createInstance(
								u.$KSc,
								(0, t.$fhb)($, (0, t.$)(".extension-bookmark-container")),
							),
							S = this.c.createInstance(
								u.$LSc,
								(0, t.$fhb)($, (0, t.$)(".extension-bookmark-container")),
							),
							I = (0, t.$fhb)($, (0, t.$)(".extension-list-item")),
							T = (0, t.$fhb)(I, (0, t.$)(".icon-container")),
							P = (0, t.$fhb)(T, (0, t.$)("img.icon", { alt: "" })),
							k = this.c.createInstance(u.$MSc, T, !1),
							L = this.c.createInstance(u.$NSc, T),
							D = (0, t.$fhb)(I, (0, t.$)(".details")),
							M = (0, t.$fhb)(D, (0, t.$)(".header-container")),
							N = (0, t.$fhb)(M, (0, t.$)(".header")),
							A = (0, t.$fhb)(N, (0, t.$)("span.name")),
							R = (0, t.$fhb)(N, (0, t.$)("span.install-count")),
							O = (0, t.$fhb)(N, (0, t.$)("span.ratings")),
							B = (0, t.$fhb)(N, (0, t.$)("span.sync-ignored")),
							U = (0, t.$fhb)(N, (0, t.$)("span.activation-status")),
							z = this.c.createInstance(u.$MSc, N, !1),
							F = (0, t.$fhb)(D, (0, t.$)(".description.ellipsis")),
							x = (0, t.$fhb)(D, (0, t.$)(".footer")),
							H = (0, t.$fhb)(x, (0, t.$)(".author.ellipsis")),
							q = this.c.createInstance(
								u.$ISc,
								(0, t.$fhb)(H, (0, t.$)(".verified-publisher")),
								!0,
							),
							V = (0, t.$fhb)(H, (0, t.$)(".publisher-name.ellipsis")),
							G = new w.$eib(x, {
								actionViewItemProvider: (ne, ee) => {
									if (ne instanceof m.$bTb)
										return new m.$cTb(
											ne,
											{
												...ee,
												icon: !0,
												label: !0,
												menuActionsOrProvider: {
													getActions: () => ne.menuActions,
												},
												menuActionClassNames: ne.menuActionClassNames,
											},
											this.i,
										);
									if (ne instanceof m.$pTb) return ne.createActionViewItem(ee);
								},
								focusOnlyEnabledItems: !0,
							});
						G.setFocusable(!1),
							G.onDidRun(({ error: ne }) => ne && this.d.error(ne));
						const K = this.c.createInstance(m.$TTb),
							J = [
								this.c.createInstance(m.$RTb),
								this.c.createInstance(m.$oTb, !0),
								this.c.createInstance(m.$DTb),
								this.c.createInstance(m.$lTb, !1),
								this.c.createInstance(m.$eTb),
								this.c.createInstance(m.$fTb),
								this.c.createInstance(m.$HTb),
								this.c.createInstance(m.$ITb),
								this.c.createInstance(m.$hTb, !1),
								this.c.createInstance(m.$iTb),
								this.c.createInstance(m.$jTb),
								K,
								this.c.createInstance(m.$sTb),
							],
							W = this.c.createInstance(
								u.$QSc,
								{ target: $, position: this.b.hoverOptions.position },
								K,
							),
							X = [
								v,
								S,
								k,
								L,
								z,
								q,
								W,
								this.c.createInstance(u.$OSc, B),
								this.c.createInstance(u.$PSc, U, !0),
								this.c.createInstance(u.$GSc, R, !0),
								this.c.createInstance(u.$HSc, O, !0),
							],
							Y = this.c.createInstance(d.$SQb, [...J, ...X]);
						G.push(J, { icon: !0, label: !0 });
						const ie = (0, i.$Xc)(...J, ...X, G, Y);
						return {
							root: $,
							element: I,
							icon: P,
							name: A,
							installCount: R,
							ratings: O,
							description: F,
							publisherDisplayName: V,
							disposables: [ie],
							actionbar: G,
							extensionDisposables: [],
							set extension(ne) {
								Y.extension = ne;
							},
						};
					}
					renderPlaceholder($, v) {
						v.element.classList.add("loading"),
							v.root.removeAttribute("aria-label"),
							v.root.removeAttribute("data-extension-id"),
							(v.extensionDisposables = (0, i.$Vc)(v.extensionDisposables)),
							(v.icon.src = ""),
							(v.name.textContent = ""),
							(v.description.textContent = ""),
							(v.publisherDisplayName.textContent = ""),
							(v.installCount.style.display = "none"),
							(v.ratings.style.display = "none"),
							(v.extension = null);
					}
					renderElement($, v, S) {
						S.element.classList.remove("loading"),
							S.root.setAttribute("data-extension-id", $.identifier.id),
							$.state !== d.ExtensionState.Uninstalled &&
								!$.server &&
								($ =
									this.g.local.filter(
										(P) =>
											P.server === $.server &&
											(0, r.$7p)(P.identifier, $.identifier),
									)[0] || $),
							(S.extensionDisposables = (0, i.$Vc)(S.extensionDisposables));
						const I = () => {
							const P =
									$.state === d.ExtensionState.Installed &&
									$.local &&
									!this.h.isEnabled($.local),
								k = !!$.deprecationInfo;
							S.element.classList.toggle("deprecated", k),
								S.root.classList.toggle("disabled", P);
						};
						I(),
							this.f.onDidChangeExtensions(
								() => I(),
								this,
								S.extensionDisposables,
							),
							S.extensionDisposables.push(
								(0, t.$0fb)(
									S.icon,
									"error",
									() => (S.icon.src = $.iconUrlFallback),
									{ once: !0 },
								),
							),
							(S.icon.src = $.iconUrl),
							S.icon.complete
								? (S.icon.style.visibility = "inherit")
								: ((S.icon.style.visibility = "hidden"),
									(S.icon.onload = () =>
										(S.icon.style.visibility = "inherit"))),
							(S.name.textContent = $.displayName),
							(S.description.textContent = $.description);
						const T = () => {
							S.publisherDisplayName.textContent =
								!$.resourceExtension && $.local?.source !== "resource"
									? $.publisherDisplayName
									: "";
						};
						T(),
							C.Event.filter(
								this.g.onChange,
								(P) => !!P && (0, r.$7p)(P.identifier, $.identifier),
							)(() => T(), this, S.extensionDisposables),
							(S.installCount.style.display = ""),
							(S.ratings.style.display = ""),
							(S.extension = $),
							$.gallery &&
								$.gallery.properties &&
								$.gallery.properties.localizedLanguages &&
								$.gallery.properties.localizedLanguages.length &&
								(S.description.textContent =
									$.gallery.properties.localizedLanguages
										.map((P) => P[0].toLocaleUpperCase() + P.slice(1))
										.join(", ")),
							this.a.onFocus(
								(P) => {
									(0, r.$7p)($.identifier, P.identifier) &&
										S.actionbar.setFocusable(!0);
								},
								this,
								S.extensionDisposables,
							),
							this.a.onBlur(
								(P) => {
									(0, r.$7p)($.identifier, P.identifier) &&
										S.actionbar.setFocusable(!1);
								},
								this,
								S.extensionDisposables,
							);
					}
					disposeElement($, v, S) {
						S.extensionDisposables = (0, i.$Vc)(S.extensionDisposables);
					}
					disposeTemplate($) {
						($.extensionDisposables = (0, i.$Vc)($.extensionDisposables)),
							($.disposables = (0, i.$Vc)($.disposables));
					}
				};
				(e.$YSc = l),
					(e.$YSc = l =
						Ne(
							[
								j(2, E.$Li),
								j(3, c.$4N),
								j(4, a.$q2),
								j(5, d.$MQb),
								j(6, h.$IQb),
								j(7, o.$Xxb),
							],
							l,
						)),
					(0, n.$oP)((y, $) => {
						const v = y.getColor(u.$USc);
						if (v) {
							const S = v.transparent(0.5).makeOpaque((0, p.$LEb)(y));
							$.addRule(
								`.extensions-list .monaco-list .monaco-list-row.disabled:not(.selected) .author .verified-publisher ${g.ThemeIcon.asCSSSelector(f.$nSb)} { color: ${S}; }`,
							);
						}
					});
			},
		),
		define(
			de[4077],
			he([
				1, 0, 4, 464, 6, 24, 15, 29, 3, 1504, 32, 119, 157, 154, 5, 10, 87, 9,
				141, 18, 465, 1243, 34, 84, 40, 19, 33, 21, 22, 109, 61, 62, 23, 957,
				150, 8, 28, 384, 53, 12, 672, 704, 269, 52, 782, 133, 75, 57, 415, 772,
				68, 25, 1781, 30, 81,
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
				var te;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$STc = e.$RTc = void 0),
					(t = mt(t)),
					(i = mt(i)),
					(S = mt(S));
				let Q = class {
					constructor(ae, pe, $e, ye, ue, fe, me, ve, ge, be, Ce) {
						(this.b = ae),
							(this.f = pe),
							(this.server = $e),
							(this.local = ye),
							(this.g = ue),
							(this.h = fe),
							(this.j = me),
							(this.k = ve),
							(this.l = ge),
							(this.n = be),
							(this.o = Ce),
							(this.enablementState = h.EnablementState.EnabledGlobally),
							(this.a = new Map()),
							(this.isMalicious = !1);
					}
					get resourceExtension() {
						if (this.h) return this.h.resourceExtension;
						if (this.local?.isWorkspaceScoped)
							return {
								type: "resource",
								identifier: this.local.identifier,
								location: this.local.location,
								manifest: this.local.manifest,
								changelogUri: this.local.changelogUrl,
								readmeUri: this.local.readmeUrl,
							};
					}
					get gallery() {
						return this.g;
					}
					set gallery(ae) {
						(this.g = ae), this.a.clear();
					}
					get type() {
						return this.local ? this.local.type : k.ExtensionType.User;
					}
					get isBuiltin() {
						return this.local ? this.local.isBuiltin : !1;
					}
					get isWorkspaceScoped() {
						return this.local
							? this.local.isWorkspaceScoped
							: this.h
								? this.h.isWorkspaceScoped
								: !1;
					}
					get name() {
						return this.gallery ? this.gallery.name : (this.y()?.name ?? "");
					}
					get displayName() {
						return this.gallery
							? this.gallery.displayName || this.gallery.name
							: (this.y()?.displayName ?? this.name);
					}
					get identifier() {
						return this.gallery
							? this.gallery.identifier
							: this.resourceExtension
								? this.resourceExtension.identifier
								: this.local.identifier;
					}
					get uuid() {
						return this.gallery
							? this.gallery.identifier.uuid
							: this.local?.identifier.uuid;
					}
					get publisher() {
						return this.gallery
							? this.gallery.publisher
							: (this.y()?.publisher ?? "");
					}
					get publisherDisplayName() {
						return this.gallery
							? this.gallery.publisherDisplayName || this.gallery.publisher
							: this.local?.publisherDisplayName
								? this.local.publisherDisplayName
								: this.publisher;
					}
					get publisherUrl() {
						if (!(!this.o.extensionsGallery || !this.gallery))
							return S.$nh(
								o.URI.parse(this.o.extensionsGallery.publisherUrl),
								this.publisher,
							);
					}
					get publisherDomain() {
						return this.gallery?.publisherDomain;
					}
					get publisherSponsorLink() {
						return this.gallery?.publisherSponsorLink
							? o.URI.parse(this.gallery.publisherSponsorLink)
							: void 0;
					}
					get version() {
						return this.local
							? this.local.manifest.version
							: this.latestVersion;
					}
					get pinned() {
						return !!this.local?.pinned;
					}
					get latestVersion() {
						if (!this.gallery) return this.y()?.version ?? "";
						const ae = this.gallery.version;
						if ((0, V.$Jq)((0, c.$_p)(this.publisher, this.name))) {
							const pe = (0, V.$Kq)((0, c.$_p)(this.publisher, this.name));
							if (pe) return i.gt(ae, pe) ? pe : ae;
						}
						return ae;
					}
					get description() {
						return this.gallery
							? this.gallery.description
							: (this.y()?.description ?? "");
					}
					get url() {
						if (!(!this.o.extensionsGallery || !this.gallery))
							return `${this.o.extensionsGallery.itemUrl}?itemName=${this.publisher}.${this.name}`;
					}
					get iconUrl() {
						return this.t || this.s || this.q || this.v;
					}
					get iconUrlFallback() {
						return this.u || this.s || this.q || this.v;
					}
					get q() {
						return this.local && this.local.manifest.icon
							? M.$7g
									.uriToBrowserUri(
										S.$nh(this.local.location, this.local.manifest.icon),
									)
									.toString(!0)
							: null;
					}
					get s() {
						return this.resourceExtension?.manifest.icon
							? M.$7g
									.uriToBrowserUri(
										S.$nh(
											this.resourceExtension.location,
											this.resourceExtension.manifest.icon,
										),
									)
									.toString(!0)
							: null;
					}
					get t() {
						return this.gallery?.assets.icon
							? this.gallery.assets.icon.uri
							: null;
					}
					get u() {
						return this.gallery?.assets.icon
							? this.gallery.assets.icon.fallbackUri
							: null;
					}
					get v() {
						if (
							this.type === k.ExtensionType.System &&
							this.local &&
							this.local.manifest &&
							this.local.manifest.contributes
						) {
							if (
								Array.isArray(this.local.manifest.contributes.themes) &&
								this.local.manifest.contributes.themes.length
							)
								return M.$7g
									.asBrowserUri(
										"vs/workbench/contrib/extensions/browser/media/theme-icon.png",
									)
									.toString(!0);
							if (
								Array.isArray(this.local.manifest.contributes.grammars) &&
								this.local.manifest.contributes.grammars.length
							)
								return M.$7g
									.asBrowserUri(
										"vs/workbench/contrib/extensions/browser/media/language-icon.svg",
									)
									.toString(!0);
						}
						return h.$FQb;
					}
					get repository() {
						return this.gallery && this.gallery.assets.repository
							? this.gallery.assets.repository.uri
							: void 0;
					}
					get licenseUrl() {
						return this.gallery && this.gallery.assets.license
							? this.gallery.assets.license.uri
							: void 0;
					}
					get supportUrl() {
						return this.gallery && this.gallery.supportLink
							? this.gallery.supportLink
							: void 0;
					}
					get state() {
						return this.b(this);
					}
					get installCount() {
						return this.gallery ? this.gallery.installCount : void 0;
					}
					get rating() {
						return this.gallery ? this.gallery.rating : void 0;
					}
					get ratingCount() {
						return this.gallery ? this.gallery.ratingCount : void 0;
					}
					get outdated() {
						try {
							if (
								!this.gallery ||
								!this.local ||
								(this.type === k.ExtensionType.System &&
									this.o.quality === "stable") ||
								(!this.local.preRelease &&
									this.gallery.properties.isPreReleaseVersion)
							)
								return !1;
							if (
								i.gt(this.latestVersion, this.version) ||
								!(0, V.$Lq)({
									name: this.name,
									version: this.version,
									publisher: this.publisher,
								})
							)
								return !0;
							try {
								let ae =
									this.gallery?.properties.engine ??
									this.local.manifest.engines.vscode;
								if (
									ae &&
									ae.length >= 2 &&
									!(0, X.$yq)(ae, this.o.vscodeVersion, this.o.date)
								)
									return !0;
							} catch {}
							if (this.outdatedTargetPlatform) return !0;
						} catch {}
						return !1;
					}
					get outdatedTargetPlatform() {
						return (
							!!this.local &&
							!!this.gallery &&
							![k.TargetPlatform.UNDEFINED, k.TargetPlatform.WEB].includes(
								this.local.targetPlatform,
							) &&
							this.gallery.properties.targetPlatform !== k.TargetPlatform.WEB &&
							this.local.targetPlatform !==
								this.gallery.properties.targetPlatform &&
							i.eq(this.latestVersion, this.version)
						);
					}
					get runtimeState() {
						return this.f(this);
					}
					get telemetryData() {
						const { local: ae, gallery: pe } = this;
						return pe ? (0, c.$cq)(pe) : ae ? (0, c.$bq)(ae) : {};
					}
					get preview() {
						return this.local?.manifest.preview ?? this.gallery?.preview ?? !1;
					}
					get preRelease() {
						return !!this.local?.preRelease;
					}
					get isPreReleaseVersion() {
						return this.local
							? this.local.isPreReleaseVersion
							: !!this.gallery?.properties.isPreReleaseVersion;
					}
					get hasPreReleaseVersion() {
						return (0, V.$Jq)((0, c.$_p)(this.publisher, this.name))
							? !1
							: !!this.gallery?.hasPreReleaseVersion ||
									!!this.local?.hasPreReleaseVersion ||
									!!this.w;
					}
					get hasReleaseVersion() {
						return (
							!!this.resourceExtension || !!this.gallery?.hasReleaseVersion
						);
					}
					x() {
						return this.local && !this.outdated ? this.local : void 0;
					}
					async getManifest(ae) {
						const pe = this.x();
						return pe
							? pe.manifest
							: this.gallery
								? this.getGalleryManifest(ae)
								: this.resourceExtension
									? this.resourceExtension.manifest
									: null;
					}
					async getGalleryManifest(ae = I.CancellationToken.None) {
						if (this.gallery) {
							let pe = this.a.get("manifest");
							return (
								pe ||
									(this.gallery.assets.manifest
										? this.a.set(
												"manifest",
												(pe = this.j
													.getManifest(this.gallery, ae)
													.catch(($e) => {
														throw (this.a.delete("manifest"), $e);
													})),
											)
										: this.l.error(t.localize(6527, null), this.identifier.id)),
								pe
							);
						}
						return null;
					}
					hasReadme() {
						return (this.local && this.local.readmeUrl) ||
							(this.gallery && this.gallery.assets.readme) ||
							this.resourceExtension?.readmeUri
							? !0
							: this.type === k.ExtensionType.System;
					}
					async getReadme(ae) {
						const pe = this.x();
						if (pe?.readmeUrl)
							return (await this.n.readFile(pe.readmeUrl)).value.toString();
						if (this.gallery) {
							if (this.gallery.assets.readme)
								return this.j.getReadme(this.gallery, ae);
							this.k.publicLog("extensions:NotFoundReadMe", this.telemetryData);
						}
						return this.type === k.ExtensionType.System
							? Promise.resolve(`# ${this.displayName || this.name}
**Notice:** This extension is bundled with Visual Studio Code. It can be disabled but not uninstalled.
## Features
${this.description}
`)
							: this.resourceExtension?.readmeUri
								? (
										await this.n.readFile(this.resourceExtension?.readmeUri)
									).value.toString()
								: Promise.reject(new Error("not available"));
					}
					hasChangelog() {
						return (this.local && this.local.changelogUrl) ||
							(this.gallery && this.gallery.assets.changelog)
							? !0
							: this.type === k.ExtensionType.System;
					}
					async getChangelog(ae) {
						const pe = this.x();
						return pe?.changelogUrl
							? (await this.n.readFile(pe.changelogUrl)).value.toString()
							: this.gallery?.assets.changelog
								? this.j.getChangelog(this.gallery, ae)
								: this.type === k.ExtensionType.System
									? Promise.resolve(
											`Please check the [VS Code Release Notes](command:${ne.$PTc}) for changes to the built-in extensions.`,
										)
									: Promise.reject(new Error("not available"));
					}
					get categories() {
						const { local: ae, gallery: pe, resourceExtension: $e } = this;
						return ae && ae.manifest.categories && !this.outdated
							? ae.manifest.categories
							: pe
								? pe.categories
								: $e
									? ($e.manifest.categories ?? [])
									: [];
					}
					get tags() {
						const { gallery: ae } = this;
						return ae ? ae.tags.filter((pe) => !pe.startsWith("_")) : [];
					}
					get dependencies() {
						const { local: ae, gallery: pe, resourceExtension: $e } = this;
						return ae && ae.manifest.extensionDependencies && !this.outdated
							? ae.manifest.extensionDependencies
							: pe
								? pe.properties.dependencies || []
								: $e
									? $e.manifest.extensionDependencies || []
									: [];
					}
					get extensionPack() {
						const { local: ae, gallery: pe, resourceExtension: $e } = this;
						return ae && ae.manifest.extensionPack && !this.outdated
							? ae.manifest.extensionPack
							: pe
								? pe.properties.extensionPack || []
								: $e
									? $e.manifest.extensionPack || []
									: [];
					}
					setExtensionsControlManifest(ae) {
						(this.isMalicious = ae.malicious.some((pe) =>
							(0, c.$7p)(this.identifier, pe),
						)),
							(this.deprecationInfo = ae.deprecated
								? ae.deprecated[this.identifier.id.toLowerCase()]
								: void 0),
							(this.w = ae?.extensionsEnabledWithPreRelease?.includes(
								this.identifier.id.toLowerCase(),
							));
					}
					y() {
						return this.local
							? this.local.manifest
							: this.resourceExtension
								? this.resourceExtension.manifest
								: null;
					}
				};
				(e.$RTc = Q),
					(e.$RTc = Q =
						Ne(
							[
								j(6, a.$Ep),
								j(7, u.$km),
								j(8, y.$ik),
								j(9, P.$ll),
								j(10, D.$Bk),
							],
							Q,
						));
				const Z = "extensions.autoUpdate",
					se = "extensions.donotAutoUpdate";
				let re = class extends m.$1c {
					get onChange() {
						return this.a.event;
					}
					get onReset() {
						return this.b.event;
					}
					constructor(ae, pe, $e, ye, ue, fe, me, ve, ge, be) {
						super(),
							(this.server = ae),
							(this.j = pe),
							(this.n = $e),
							(this.q = ye),
							(this.s = ue),
							(this.t = fe),
							(this.u = me),
							(this.w = ve),
							(this.y = ge),
							(this.z = be),
							(this.a = this.D(new w.$re())),
							(this.b = this.D(new w.$re())),
							(this.f = []),
							(this.g = []),
							(this.h = []),
							this.D(
								ae.extensionManagementService.onInstallExtension((Ce) =>
									this.I(Ce),
								),
							),
							this.D(
								ae.extensionManagementService.onDidInstallExtensions((Ce) =>
									this.M(Ce),
								),
							),
							this.D(
								ae.extensionManagementService.onUninstallExtension((Ce) =>
									this.P(Ce.identifier),
								),
							),
							this.D(
								ae.extensionManagementService.onDidUninstallExtension((Ce) =>
									this.Q(Ce),
								),
							),
							this.D(
								ae.extensionManagementService.onDidUpdateExtensionMetadata(
									(Ce) => this.N(Ce.local),
								),
							),
							this.D(
								ae.extensionManagementService.onDidChangeProfile(() =>
									this.L(),
								),
							),
							this.D(fe.onEnablementChanged((Ce) => this.R(Ce))),
							this.D(
								w.Event.any(
									this.onChange,
									this.onReset,
								)(() => (this.C = void 0)),
							),
							this.q &&
								(this.D(
									this.u.onInstallExtension((Ce) => {
										Ce.workspaceScoped && this.I(Ce);
									}),
								),
								this.D(
									this.u.onDidInstallExtensions((Ce) => {
										const Le = Ce.filter((Fe) => Fe.workspaceScoped);
										Le.length && this.M(Le);
									}),
								),
								this.D(
									this.u.onUninstallExtension((Ce) => {
										Ce.workspaceScoped && this.P(Ce.identifier);
									}),
								),
								this.D(
									this.u.onDidUninstallExtension((Ce) => {
										Ce.workspaceScoped && this.Q(Ce);
									}),
								));
					}
					get local() {
						if (!this.C) {
							this.C = [];
							for (const ae of this.h) this.C.push(ae);
							for (const ae of this.f)
								this.h.some((pe) => (0, c.$7p)(pe.identifier, ae.identifier)) ||
									this.C.push(ae);
						}
						return this.C;
					}
					async queryInstalled(ae) {
						return await this.J(ae), this.a.fire(void 0), this.local;
					}
					async syncInstalledExtensionsWithGallery(ae, pe) {
						const $e = await this.F(ae, pe);
						for (const [ye, ue] of $e)
							ye.local &&
								!ye.local.identifier.uuid &&
								(ye.local = await this.H(ye.local, ue)),
								(!ye.gallery ||
									ye.gallery.version !== ue.version ||
									ye.gallery.properties.targetPlatform !==
										ue.properties.targetPlatform) &&
									((ye.gallery = ue), this.a.fire({ extension: ye }));
					}
					async F(ae, pe) {
						const $e = this.G(ae),
							ye =
								await this.server.extensionManagementService.getTargetPlatform(),
							ue = [],
							fe = [];
						if (
							(await Promise.allSettled(
								$e.map(async ([me, ve]) => {
									me.local &&
										((await this.s.isExtensionCompatible(
											ve,
											me.local.preRelease,
											ye,
											pe,
										))
											? ue.push(ve)
											: fe.push({
													...me.local.identifier,
													preRelease: me.local.preRelease,
												}));
								}),
							),
							fe.length)
						) {
							const me = await this.s.getExtensions(
								fe,
								{
									targetPlatform: ye,
									compatible: !0,
									queryAllVersions: !0,
									productVersion: pe,
								},
								I.CancellationToken.None,
							);
							ue.push(...me);
						}
						return this.G(ue);
					}
					G(ae) {
						const pe = [],
							$e = new Map(),
							ye = new Map();
						for (const ue of ae)
							$e.set(ue.identifier.uuid, ue),
								ye.set(ue.identifier.id.toLowerCase(), ue);
						for (const ue of this.h) {
							if (ue.uuid) {
								const fe = $e.get(ue.uuid);
								if (fe) {
									pe.push([ue, fe]);
									continue;
								}
							}
							if (ue.local?.source !== "resource") {
								const fe = ye.get(ue.identifier.id.toLowerCase());
								fe && pe.push([ue, fe]);
							}
						}
						return pe;
					}
					async H(ae, pe) {
						let $e = !1;
						return (
							ae.manifest.version !== pe.version &&
								(this.y.publicLog2("galleryService:updateMetadata"),
								($e = !!(
									await this.s.getExtensions(
										[{ ...ae.identifier, version: ae.manifest.version }],
										I.CancellationToken.None,
									)
								)[0]?.properties?.isPreReleaseVersion)),
							this.server.extensionManagementService.updateMetadata(
								ae,
								{
									id: pe.identifier.uuid,
									publisherDisplayName: pe.publisherDisplayName,
									publisherId: pe.publisherId,
									isPreReleaseVersion: $e,
								},
								this.w.currentProfile.extensionsResource,
							)
						);
					}
					canInstall(ae) {
						return this.server.extensionManagementService.canInstall(ae);
					}
					I(ae) {
						const { source: pe } = ae;
						if (pe && !o.URI.isUri(pe)) {
							const $e =
								this.h.find((ye) => (0, c.$7p)(ye.identifier, pe.identifier)) ??
								this.z.createInstance(
									Q,
									this.j,
									this.n,
									this.server,
									void 0,
									pe,
									void 0,
								);
							this.f.push($e), this.a.fire({ extension: $e });
						}
					}
					async J(ae) {
						const pe =
								await this.server.extensionManagementService.getExtensionsControlManifest(),
							$e = await this.server.extensionManagementService.getInstalled(
								void 0,
								void 0,
								ae,
							);
						this.q &&
							$e.push(...(await this.u.getInstalledWorkspaceExtensions(!0)));
						const ye = (0, c.$aq)($e, (fe) => fe.identifier).reduce(
								(fe, me) => {
									if (me.length === 1) fe.push(me[0]);
									else {
										let ve, ge, be;
										for (const Le of me)
											Le.isWorkspaceScoped
												? (ve = Le)
												: Le.type === k.ExtensionType.User
													? (ge = Le)
													: (be = Le);
										const Ce = ve ?? ge ?? be;
										Ce && fe.push(Ce);
									}
									return fe;
								},
								[],
							),
							ue = (0, E.$Wb)(this.h, (fe) =>
								fe.local ? fe.local.identifier.id : fe.identifier.id,
							);
						this.h = ye.map((fe) => {
							const me =
								ue[fe.identifier.id] ||
								this.z.createInstance(
									Q,
									this.j,
									this.n,
									this.server,
									fe,
									void 0,
									void 0,
								);
							return (
								(me.local = fe),
								(me.enablementState = this.t.getEnablementState(fe)),
								me.setExtensionsControlManifest(pe),
								me
							);
						});
					}
					async L() {
						(this.h = []),
							(this.f = []),
							(this.g = []),
							await this.J(),
							this.b.fire();
					}
					async M(ae) {
						for (const pe of ae) {
							const { local: $e, source: ye } = pe,
								ue = ye && !o.URI.isUri(ye) ? ye : void 0,
								fe = ye && o.URI.isUri(ye) ? ye : void 0,
								me = ue
									? this.f.filter((ge) =>
											(0, c.$7p)(ge.identifier, ue.identifier),
										)[0]
									: null;
							this.f = me ? this.f.filter((ge) => ge !== me) : this.f;
							let ve =
								me ||
								(fe || $e
									? this.z.createInstance(
											Q,
											this.j,
											this.n,
											this.server,
											$e,
											void 0,
											void 0,
										)
									: void 0);
							if (ve && $e) {
								const ge = this.h.filter((be) =>
									(0, c.$7p)(be.identifier, ve.identifier),
								)[0];
								ge ? (ve = ge) : this.h.push(ve),
									(ve.local = $e),
									ve.gallery || (ve.gallery = ue),
									ve.setExtensionsControlManifest(
										await this.server.extensionManagementService.getExtensionsControlManifest(),
									),
									(ve.enablementState = this.t.getEnablementState($e));
							}
							this.a.fire(
								!$e || !ve
									? void 0
									: { extension: ve, operation: pe.operation },
							),
								ve &&
									ve.local &&
									!ve.gallery &&
									ve.local.source !== "resource" &&
									(await this.O(ve));
						}
					}
					async N(ae) {
						const pe = this.h.find(($e) =>
							(0, c.$7p)($e.identifier, ae.identifier),
						);
						if (pe?.local) {
							const $e =
								pe.local.pinned !== ae.pinned ||
								pe.local.preRelease !== ae.preRelease;
							(pe.local = ae), $e && this.a.fire({ extension: pe });
						}
					}
					async O(ae) {
						if (!this.s.isEnabled()) return;
						this.y.publicLog2("galleryService:matchInstalledExtension");
						const [pe] = await this.s.getExtensions(
							[{ ...ae.identifier, preRelease: ae.local?.preRelease }],
							{
								compatible: !0,
								targetPlatform:
									await this.server.extensionManagementService.getTargetPlatform(),
							},
							I.CancellationToken.None,
						);
						pe && ((ae.gallery = pe), this.a.fire({ extension: ae }));
					}
					P(ae) {
						const pe = this.h.filter(($e) => (0, c.$7p)($e.identifier, ae))[0];
						if (pe) {
							const $e =
								this.g.filter((ye) => (0, c.$7p)(ye.identifier, ae))[0] || pe;
							(this.g = [
								$e,
								...this.g.filter((ye) => !(0, c.$7p)(ye.identifier, ae)),
							]),
								this.a.fire($e ? { extension: $e } : void 0);
						}
					}
					Q({ identifier: ae, error: pe }) {
						const $e =
							this.g.find((ye) => (0, c.$7p)(ye.identifier, ae)) ||
							this.h.find((ye) => (0, c.$7p)(ye.identifier, ae));
						(this.g = this.g.filter((ye) => !(0, c.$7p)(ye.identifier, ae))),
							pe ||
								(this.h = this.h.filter(
									(ye) => !(0, c.$7p)(ye.identifier, ae),
								)),
							$e && this.a.fire({ extension: $e });
					}
					R(ae) {
						const pe = this.local.filter(($e) =>
							ae.some((ye) => (0, c.$7p)($e.identifier, ye.identifier)),
						);
						for (const $e of pe)
							if ($e.local) {
								const ye = this.t.getEnablementState($e.local);
								ye !== $e.enablementState &&
									(($e.enablementState = ye), this.a.fire({ extension: $e }));
							}
					}
					getExtensionState(ae) {
						return ae.gallery &&
							this.f.some(
								($e) =>
									!!$e.gallery &&
									(0, c.$7p)($e.gallery.identifier, ae.gallery.identifier),
							)
							? f.ExtensionState.Installing
							: this.g.some(($e) => (0, c.$7p)($e.identifier, ae.identifier))
								? f.ExtensionState.Uninstalling
								: this.h.filter(
											($e) =>
												$e === ae ||
												($e.gallery &&
													ae.gallery &&
													(0, c.$7p)(
														$e.gallery.identifier,
														ae.gallery.identifier,
													)),
										)[0]
									? f.ExtensionState.Installed
									: f.ExtensionState.Uninstalled;
					}
				};
				re = Ne(
					[
						j(4, a.$Ep),
						j(5, h.$IQb),
						j(6, h.$GQb),
						j(7, G.$P8),
						j(8, u.$km),
						j(9, n.$Li),
					],
					re,
				);
				let le = class extends m.$1c {
					static {
						te = this;
					}
					static {
						this.a = 1e3 * 60 * 60 * 12;
					}
					get onChange() {
						return this.s.event;
					}
					get onReset() {
						return this.t.event;
					}
					constructor(
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
						be,
						Ce,
						Le,
						Fe,
						Oe,
						xe,
						He,
						Ke,
						Je,
						Te,
						Ee,
						Ie,
						Be,
						Se,
						ke,
						Ue,
						qe,
						Ae,
						Me,
						De,
						Re,
					) {
						super(),
							(this.z = ae),
							(this.C = pe),
							(this.F = $e),
							(this.G = ye),
							(this.H = ue),
							(this.I = fe),
							(this.J = me),
							(this.L = ge),
							(this.M = be),
							(this.N = Ce),
							(this.O = Le),
							(this.P = Fe),
							(this.Q = Oe),
							(this.R = xe),
							(this.S = He),
							(this.U = Je),
							(this.W = Te),
							(this.X = Ee),
							(this.Y = Ie),
							(this.Z = Be),
							(this.$ = Se),
							(this.ab = ke),
							(this.bb = Ue),
							(this.cb = qe),
							(this.db = Ae),
							(this.eb = Me),
							(this.fb = De),
							(this.gb = Re),
							(this.f = null),
							(this.g = null),
							(this.h = null),
							(this.j = []),
							(this.s = new w.$re()),
							(this.t = new w.$re()),
							(this.preferPreReleases = this.S.quality !== "stable"),
							(this.u = []),
							(this.w = []),
							(this.y = new Map()),
							(this.lb = this.D(new m.$2c()));
						const je = ue.getValue("_extensions.preferPreReleases");
						(0, O.$sg)(je) || (this.preferPreReleases = !!je),
							(this.b = f.$ZQb.bindTo(Ke)),
							Le.localExtensionManagementServer &&
								((this.f = this.D(
									ae.createInstance(
										re,
										Le.localExtensionManagementServer,
										(Ve) => this.Ab(Ve),
										(Ve) => this.yb(Ve),
										!Le.remoteExtensionManagementServer,
									),
								)),
								this.D(this.f.onChange((Ve) => this.rb(Ve?.extension))),
								this.D(this.f.onReset((Ve) => this.qb())),
								this.j.push(this.f)),
							Le.remoteExtensionManagementServer &&
								((this.g = this.D(
									ae.createInstance(
										re,
										Le.remoteExtensionManagementServer,
										(Ve) => this.Ab(Ve),
										(Ve) => this.yb(Ve),
										!0,
									),
								)),
								this.D(this.g.onChange((Ve) => this.rb(Ve?.extension))),
								this.D(this.g.onReset((Ve) => this.qb())),
								this.j.push(this.g)),
							Le.webExtensionManagementServer &&
								((this.h = this.D(
									ae.createInstance(
										re,
										Le.webExtensionManagementServer,
										(Ve) => this.Ab(Ve),
										(Ve) => this.yb(Ve),
										!(
											Le.remoteExtensionManagementServer ||
											Le.localExtensionManagementServer
										),
									),
								)),
								this.D(this.h.onChange((Ve) => this.rb(Ve?.extension))),
								this.D(this.h.onReset((Ve) => this.qb())),
								this.j.push(this.h)),
							(this.n = new C.$Kh(te.a)),
							(this.q = new C.$Kh(1e3)),
							this.D(
								(0, m.$Yc)(() => {
									this.n.cancel(), this.q.cancel();
								}),
							),
							this.D(
								this.onChange(async (Ve) => {
									if (Ve === void 0) return;
									const Ze = this.S.extensionMaxVersions;
									if (Ze !== void 0)
										try {
											if (
												Object.keys(Ze)
													.filter((rt) => Ze[rt]?.minVersion !== void 0)
													.includes(Ve.identifier.id)
											) {
												const rt = Ve.gallery;
												if (rt === void 0) return;
												const ft = Ze[Ve.identifier.id]?.minVersion;
												if (ft === void 0) return;
												if (rt.version !== Ve.version && i.lt(Ve.version, ft)) {
													if (this.y.has(Ve.identifier.id)) return;
													this.y.set(Ve.identifier.id, !0),
														this.y.size > 10 &&
															!1 &&
															K.$Bfb.alert(
																"The size of reinstallationLock is too big! this is BAD BAD BAD. this alert only shown in dev mode but please fix. there is probably a bug?",
															),
														await this.install(Ve),
														this.y.delete(Ve.identifier.id),
														this.updateRunningExtensions();
												}
											}
										} catch (et) {
											console.error(et);
										}
								}),
							),
							ve.registerHandler(this),
							this.S.quality !== "stable" && this.hb(),
							(this.whenInitialized = this.ib());
					}
					hb() {
						ee.$Io
							.as(_.$No.Configuration)
							.registerConfiguration({
								...h.$HQb,
								properties: {
									[f.$RQb]: {
										type: "boolean",
										description: t.localize(6528, null),
										default: !1,
									},
								},
							});
					}
					async ib() {
						await Promise.all([
							this.queryLocal(),
							this.X.whenInstalledExtensionsRegistered(),
						]),
							!this.B.isDisposed &&
								(this.ob(this.X.extensions, []),
								this.D(
									this.X.onDidChangeExtensions(({ added: ae, removed: pe }) =>
										this.ob(ae, pe),
									),
								),
								await this.Z.when(q.LifecyclePhase.Eventually),
								!this.B.isDisposed &&
									(this.jb(),
									this.nb(),
									this.D(
										w.Event.debounce(
											this.onChange,
											() => {},
											100,
										)(() => this.gc()),
									),
									this.D(
										this.bb.onDidChangeValue(
											T.StorageScope.APPLICATION,
											Z,
											this.B,
										)((ae) => this.Pb()),
									),
									this.D(
										this.bb.onDidChangeValue(
											T.StorageScope.APPLICATION,
											se,
											this.B,
										)((ae) => this.Pb()),
									)));
					}
					jb() {
						let ae = this.getAutoUpdateValue();
						this.D(
							this.H.onDidChangeConfiguration((pe) => {
								if (pe.affectsConfiguration(f.$OQb)) {
									const $e = ae !== !1;
									ae = this.getAutoUpdateValue();
									const ye = this.kb();
									$e !== ye &&
										(this.lc([]),
										this.qc([]),
										this.s.fire(void 0),
										this.pb(!ye)),
										ye && this.Fb();
								}
								pe.affectsConfiguration(f.$PQb) &&
									this.Cb() &&
									this.checkForUpdates();
							}),
						),
							this.D(
								this.L.onEnablementChanged((pe) => {
									this.getAutoUpdateValue() === "onlyEnabledExtensions" &&
										pe.some(($e) => this.L.isEnabled($e)) &&
										this.checkForUpdates();
								}),
							),
							this.D(
								w.Event.debounce(
									this.onChange,
									() => {},
									100,
								)(() => this.b.set(this.outdated.length > 0)),
							),
							this.D(
								this.eb.onStateChange((pe) => {
									((pe.type === W.StateType.CheckingForUpdates &&
										pe.explicit) ||
										pe.type === W.StateType.AvailableForDownload ||
										pe.type === W.StateType.Downloaded) &&
										(this.I.publicLog2("extensions:updatecheckonproductupdate"),
										this.Cb() && this.checkForUpdates());
								}),
							),
							this.b.set(this.outdated.length > 0),
							this.Db(!0),
							z.$r && (this.Ib(), this.kb() || this.Hb()),
							this.Gb(),
							this.mb(),
							this.D(
								this.H.onDidChangeConfiguration((pe) => {
									pe.affectsConfiguration(f.$RQb) && this.mb();
								}),
							);
					}
					kb() {
						return this.getAutoUpdateValue() !== !1;
					}
					getAutoUpdateValue() {
						const ae = this.H.getValue(f.$OQb);
						return ae === "onlySelectedExtensions"
							? !1
							: (0, O.$rg)(ae) || ae === "onlyEnabledExtensions"
								? ae
								: !0;
					}
					async updateAutoUpdateValue(ae) {
						const pe = this.kb(),
							$e = ae !== !1;
						(pe !== $e &&
							!(
								await this.cb.confirm({
									title: t.localize(6529, null),
									message: $e ? t.localize(6530, null) : t.localize(6531, null),
									detail: t.localize(6532, null),
								})
							).confirmed) ||
							(await this.H.updateValue(f.$OQb, ae));
					}
					mb() {
						(this.lb.value = void 0),
							this.H.getValue(f.$RQb) === !0 &&
								(this.lb.value = this.M.onDidChangeFocus((ae) => {
									!ae &&
										this.H.getValue(f.$RQb) === !0 &&
										this.updateRunningExtensions(!0);
								}));
					}
					nb() {
						const ae = this.installed
							.filter(
								(pe) =>
									!pe.isBuiltin &&
									(pe.enablementState === h.EnablementState.EnabledWorkspace ||
										pe.enablementState === h.EnablementState.EnabledGlobally),
							)
							.map((pe) => k.$Gn.toKey(pe.identifier.id));
						this.I.publicLog2("installedExtensions", {
							extensionIds: new H.$Qp(ae.join(";")),
							count: ae.length,
						});
					}
					async ob(ae, pe) {
						const $e = [],
							ye = [];
						for (const fe of ae) {
							const me = this.installed.find((ve) =>
								(0, c.$7p)(
									{ id: fe.identifier.value, uuid: fe.uuid },
									ve.identifier,
								),
							);
							me ? $e.push(me) : ye.push(fe);
						}
						const ue = [];
						for (const fe of pe)
							this.gb.isInsideWorkspace(fe.extensionLocation)
								? ue.push(fe)
								: ye.push(fe);
						if (ye.length) {
							const fe = await this.getExtensions(
								ye.map((me) => ({ id: me.identifier.value, uuid: me.uuid })),
								I.CancellationToken.None,
							);
							$e.push(...fe);
						}
						if (ue.length) {
							const fe = await this.getResourceExtensions(
								ue.map((me) => me.extensionLocation),
								!0,
							);
							$e.push(...fe);
						}
						for (const fe of $e) this.s.fire(fe);
					}
					pb(ae) {
						return this.N.withProgress(
							{
								location: $.ProgressLocation.Extensions,
								title: t.localize(6533, null),
							},
							() => this.F.resetPinnedStateForAllUserExtensions(ae),
						);
					}
					qb() {
						for (const ae of this.w) ae.cancel();
						(this.w = []), (this.u = []), this.rb(), this.t.fire();
					}
					rb(ae) {
						(this.tb = void 0), (this.sb = void 0), this.s.fire(ae);
					}
					get local() {
						if (!this.sb)
							if (this.j.length === 1) this.sb = this.installed;
							else {
								this.sb = [];
								const ae = (0, c.$aq)(this.installed, (pe) => pe.identifier);
								for (const pe of ae) this.sb.push(this.zb(pe));
							}
						return this.sb;
					}
					get installed() {
						if (!this.tb) {
							this.tb = [];
							for (const ae of this.j)
								for (const pe of ae.local) this.tb.push(pe);
						}
						return this.tb;
					}
					get outdated() {
						return this.installed.filter(
							(ae) =>
								ae.outdated &&
								ae.local &&
								ae.state === f.ExtensionState.Installed,
						);
					}
					async queryLocal(ae) {
						if (ae) {
							if (this.f && this.O.localExtensionManagementServer === ae)
								return this.f.queryInstalled(this.Kb());
							if (this.g && this.O.remoteExtensionManagementServer === ae)
								return this.g.queryInstalled(this.Kb());
							if (this.h && this.O.webExtensionManagementServer === ae)
								return this.h.queryInstalled(this.Kb());
						}
						if (this.f)
							try {
								await this.f.queryInstalled(this.Kb());
							} catch (pe) {
								this.W.error(pe);
							}
						if (this.g)
							try {
								await this.g.queryInstalled(this.Kb());
							} catch (pe) {
								this.W.error(pe);
							}
						if (this.h)
							try {
								await this.h.queryInstalled(this.Kb());
							} catch (pe) {
								this.W.error(pe);
							}
						return this.local;
					}
					async queryGallery(ae, pe) {
						if (!this.G.isEnabled()) return (0, r.$jp)([]);
						const $e = I.CancellationToken.isCancellationToken(ae) ? {} : ae,
							ye = I.CancellationToken.isCancellationToken(ae) ? ae : pe;
						($e.text = $e.text ? this.ub($e.text) : $e.text),
							($e.includePreRelease = (0, O.$sg)($e.includePreRelease)
								? this.preferPreReleases
								: $e.includePreRelease);
						const ue = await this.F.getExtensionsControlManifest(),
							fe = await this.G.query($e, ye);
						return (
							this.Bb(fe.firstPage),
							{
								firstPage: fe.firstPage.map((me) => this.vb(me, ue)),
								total: fe.total,
								pageSize: fe.pageSize,
								getPage: async (me, ve) => {
									const ge = await fe.getPage(me, ve);
									return this.Bb(ge), ge.map((be) => this.vb(be, ue));
								},
							}
						);
					}
					async getExtensions(ae, pe, $e) {
						if (!this.G.isEnabled()) return [];
						ae.forEach(
							(fe) => (fe.preRelease = fe.preRelease ?? this.preferPreReleases),
						);
						const ye = await this.F.getExtensionsControlManifest(),
							ue = await this.G.getExtensions(ae, pe, $e);
						return this.Bb(ue), ue.map((fe) => this.vb(fe, ye));
					}
					async getResourceExtensions(ae, pe) {
						return (await this.F.getExtensions(ae)).map(
							(ye) =>
								this.xb(ye.location) ??
								this.z.createInstance(
									Q,
									(ue) => this.Ab(ue),
									(ue) => this.yb(ue),
									void 0,
									void 0,
									void 0,
									{ resourceExtension: ye, isWorkspaceScoped: pe },
								),
						);
					}
					ub(ae) {
						ae = ae.replace(/@web/g, `tag:"${a.$tp}"`);
						const pe = /\bext:([^\s]+)\b/g;
						return (
							pe.test(ae) &&
								(ae = ae.replace(pe, ($e, ye) => {
									const fe = (this.S.extensionKeywords || {})[ye] || [],
										me = this.P.guessLanguageIdByFilepathOrFirstLine(
											o.URI.file(`.${ye}`),
										),
										ve = me && this.P.getLanguageName(me),
										ge = ve ? ` tag:"${ve}"` : "";
									return `tag:"__ext_${ye}" tag:"__ext_.${ye}" ${fe.map((be) => `tag:"${be}"`).join(" ")}${ge} tag:"${ye}"`;
								})),
							ae.substr(0, 350)
						);
					}
					vb(ae, pe) {
						let $e = this.wb(ae);
						return (
							$e ||
								(($e = this.z.createInstance(
									Q,
									(ye) => this.Ab(ye),
									(ye) => this.yb(ye),
									void 0,
									void 0,
									ae,
									void 0,
								)),
								$e.setExtensionsControlManifest(pe)),
							$e
						);
					}
					wb(ae) {
						for (const pe of this.local)
							if (pe.identifier.uuid) {
								if (pe.identifier.uuid === ae.identifier.uuid) return pe;
							} else if (
								pe.local?.source !== "resource" &&
								(0, c.$7p)(pe.identifier, ae.identifier)
							)
								return pe;
						return null;
					}
					xb(ae) {
						return (
							this.local.find(
								(pe) =>
									pe.local &&
									this.fb.extUri.isEqualOrParent(ae, pe.local?.location),
							) ?? null
						);
					}
					async open(ae, pe) {
						if (typeof ae == "string") {
							const $e = ae;
							ae =
								this.installed.find((ye) =>
									(0, c.$7p)(ye.identifier, { id: $e }),
								) ??
								(
									await this.getExtensions(
										[{ id: ae }],
										I.CancellationToken.None,
									)
								).filter(V.$Lq)[0];
						}
						if (!ae) throw new Error(`Extension not found. ${ae}`);
						await this.C.openEditor(
							this.z.createInstance(l.$KQb, ae),
							pe,
							pe?.sideByside ? b.$KY : b.$JY,
						);
					}
					getExtensionStatus(ae) {
						const pe = this.X.getExtensionsStatus();
						for (const $e of Object.keys(pe))
							if ((0, c.$7p)({ id: $e }, ae.identifier)) return pe[$e];
					}
					async updateRunningExtensions(ae = !1) {
						const pe = [],
							$e = [],
							ye = [...this.local];
						for (const ue of ye) {
							const fe = ue.runtimeState;
							if (
								!fe ||
								fe.action !== f.ExtensionRuntimeActionType.RestartExtensions
							)
								continue;
							if (ue.state === f.ExtensionState.Uninstalled) {
								$e.push(ue.identifier.id);
								continue;
							}
							if (!ue.local) continue;
							if (this.L.isEnabled(ue.local)) {
								const ve = this.X.extensions.find((ge) =>
									(0, c.$7p)(
										{ id: ge.identifier.value, uuid: ge.uuid },
										ue.identifier,
									),
								);
								ve && $e.push(ve.identifier.value), pe.push(ue.local);
							} else $e.push(ue.identifier.id);
						}
						for (const ue of this.X.extensions)
							ue.isUnderDevelopment ||
								ye.some((fe) =>
									(0, c.$7p)(
										{ id: ue.identifier.value, uuid: ue.uuid },
										fe.identifier,
									),
								) ||
								$e.push(ue.identifier.value);
						(pe.length || $e.length) &&
							(await this.X.stopExtensionHosts(t.localize(6534, null), ae)) &&
							(await this.X.startExtensionHosts({ toAdd: pe, toRemove: $e }),
							ae &&
								this.J.notify({
									severity: v.Severity.Info,
									message: t.localize(6535, null),
									priority: v.NotificationPriority.SILENT,
								}),
							this.I.publicLog2("extensions:autorestart", {
								count: pe.length + $e.length,
								auto: ae,
							}));
					}
					yb(ae) {
						const pe = ae.state === f.ExtensionState.Uninstalled,
							$e = this.X.extensions.find((fe) =>
								(0, c.$7p)({ id: fe.identifier.value }, ae.identifier),
							),
							ye = this.O.remoteExtensionManagementServer
								? f.ExtensionRuntimeActionType.ReloadWindow
								: f.ExtensionRuntimeActionType.RestartExtensions,
							ue =
								ye === f.ExtensionRuntimeActionType.ReloadWindow
									? t.localize(6536, null)
									: t.localize(6537, null);
						if (pe) {
							const fe = $e && this.X.canRemoveExtension($e),
								me =
									$e &&
									(!ae.server ||
										ae.server ===
											this.O.getExtensionManagementServer((0, U.$x2)($e))) &&
									(!ae.resourceExtension ||
										this.fb.extUri.isEqual(
											ae.resourceExtension.location,
											$e.extensionLocation,
										));
							return !fe && me && !$e.isUnderDevelopment
								? { action: ye, reason: t.localize(6538, null, ue) }
								: void 0;
						}
						if (ae.local) {
							const fe =
									$e &&
									ae.server ===
										this.O.getExtensionManagementServer((0, U.$x2)($e)),
								me = this.L.isEnabled(ae.local);
							if ($e) {
								if (me) {
									if (this.X.canAddExtension((0, U.$y2)(ae.local))) return;
									const ve = this.O.getExtensionManagementServer(
										(0, U.$x2)($e),
									);
									if (fe) {
										if (
											!$e.isUnderDevelopment &&
											(ae.version !== $e.version ||
												ae.local.targetPlatform !== $e.targetPlatform)
										) {
											const ge = this.Lb(),
												be = this.Mb();
											if (
												be &&
												!(0, X.$yq)(
													ae.local.manifest.engines.vscode,
													ge.vscodeVersion,
													ge.date,
												) &&
												(0, X.$yq)(
													ae.local.manifest.engines.vscode,
													be.vscodeVersion,
													be.date,
												)
											) {
												const Ce = this.eb.state;
												return Ce.type === W.StateType.AvailableForDownload
													? {
															action:
																f.ExtensionRuntimeActionType.DownloadUpdate,
															reason: t.localize(6539, null, this.S.nameLong),
														}
													: Ce.type === W.StateType.Downloaded
														? {
																action:
																	f.ExtensionRuntimeActionType.ApplyUpdate,
																reason: t.localize(6540, null, this.S.nameLong),
															}
														: Ce.type === W.StateType.Ready
															? {
																	action:
																		f.ExtensionRuntimeActionType.QuitAndInstall,
																	reason: t.localize(
																		6541,
																		null,
																		this.S.nameLong,
																	),
																}
															: void 0;
											}
											return { action: ye, reason: t.localize(6542, null, ue) };
										}
										if (this.j.length > 1) {
											const ge = this.installed.filter(
												(be) =>
													(0, c.$7p)(be.identifier, ae.identifier) &&
													be.server !== ae.server,
											)[0];
											if (ge) {
												if (
													ve === this.O.remoteExtensionManagementServer &&
													this.U.prefersExecuteOnUI(ae.local.manifest) &&
													ge.server === this.O.localExtensionManagementServer
												)
													return {
														action: ye,
														reason: t.localize(6543, null, ue),
													};
												if (
													ve === this.O.localExtensionManagementServer &&
													this.U.prefersExecuteOnWorkspace(ae.local.manifest) &&
													ge.server === this.O.remoteExtensionManagementServer
												)
													return {
														action: ye,
														reason: t.localize(
															6544,
															null,
															ue,
															this.O.remoteExtensionManagementServer?.label,
														),
													};
											}
										}
									} else {
										if (
											ae.server === this.O.localExtensionManagementServer &&
											ve === this.O.remoteExtensionManagementServer &&
											this.U.prefersExecuteOnUI(ae.local.manifest)
										)
											return { action: ye, reason: t.localize(6545, null, ue) };
										if (
											ae.server === this.O.remoteExtensionManagementServer &&
											ve === this.O.localExtensionManagementServer &&
											this.U.prefersExecuteOnWorkspace(ae.local.manifest)
										)
											return { action: ye, reason: t.localize(6546, null, ue) };
									}
									return;
								} else if (fe)
									return { action: ye, reason: t.localize(6547, null, ue) };
								return;
							} else {
								if (me && !this.X.canAddExtension((0, U.$y2)(ae.local)))
									return { action: ye, reason: t.localize(6548, null, ue) };
								const ve = ae.server
									? ae.server === this.O.localExtensionManagementServer
										? this.O.remoteExtensionManagementServer
										: this.O.localExtensionManagementServer
									: null;
								if (
									ve &&
									ae.enablementState ===
										h.EnablementState.DisabledByExtensionKind
								) {
									const ge = this.local.filter(
										(be) =>
											(0, c.$7p)(be.identifier, ae.identifier) &&
											be.server === ve,
									)[0];
									if (ge && ge.local && this.L.isEnabled(ge.local))
										return { action: ye, reason: t.localize(6549, null, ue) };
								}
							}
						}
					}
					zb(ae) {
						if (ae.length === 1) return ae[0];
						const pe = ae.filter(
							(me) => me.local && this.L.isEnabled(me.local),
						);
						if (pe.length === 1) return pe[0];
						const $e = pe.length ? pe : ae,
							ye = $e.find((me) => me.local && me.local.manifest)?.local
								?.manifest;
						if (!ye) return $e[0];
						const ue = this.U.getExtensionKind(ye);
						let fe = $e.find((me) => {
							for (const ve of ue)
								switch (ve) {
									case "ui":
										return me.server === this.O.localExtensionManagementServer;
									case "workspace":
										return me.server === this.O.remoteExtensionManagementServer;
									case "web":
										return me.server === this.O.webExtensionManagementServer;
								}
							return !1;
						});
						return (
							!fe &&
								this.O.localExtensionManagementServer &&
								(fe = $e.find((me) => {
									for (const ve of ue)
										switch (ve) {
											case "workspace":
												return (
													me.server === this.O.localExtensionManagementServer
												);
											case "web":
												return (
													me.server === this.O.localExtensionManagementServer
												);
										}
									return !1;
								})),
							!fe &&
								this.O.webExtensionManagementServer &&
								(fe = $e.find((me) => {
									for (const ve of ue)
										switch (ve) {
											case "web":
												return (
													me.server === this.O.webExtensionManagementServer
												);
										}
									return !1;
								})),
							!fe &&
								this.O.remoteExtensionManagementServer &&
								(fe = $e.find((me) => {
									for (const ve of ue)
										switch (ve) {
											case "web":
												return (
													me.server === this.O.remoteExtensionManagementServer
												);
										}
									return !1;
								})),
							fe || ae[0]
						);
					}
					Ab(ae) {
						if (
							this.u.some(
								(pe) =>
									(0, c.$7p)(pe.identifier, ae.identifier) &&
									(!ae.server || pe.server === ae.server),
							)
						)
							return f.ExtensionState.Installing;
						if (this.g) {
							const pe = this.g.getExtensionState(ae);
							if (pe !== f.ExtensionState.Uninstalled) return pe;
						}
						if (this.h) {
							const pe = this.h.getExtensionState(ae);
							if (pe !== f.ExtensionState.Uninstalled) return pe;
						}
						return this.f
							? this.f.getExtensionState(ae)
							: f.ExtensionState.Uninstalled;
					}
					async checkForUpdates(ae) {
						if (!this.G.isEnabled()) return;
						const pe = [];
						if (
							(this.f && pe.push(this.f),
							this.g && pe.push(this.g),
							this.h && pe.push(this.h),
							!pe.length)
						)
							return;
						const $e = [];
						for (const ye of this.local)
							(ae && !ye.isBuiltin) ||
								(ye.isBuiltin &&
									!ye.local?.pinned &&
									(ye.type === k.ExtensionType.System ||
										!ye.local?.identifier.uuid)) ||
								(ye.local?.source !== "resource" &&
									$e.push({
										...ye.identifier,
										preRelease: !!ye.local?.preRelease,
									}));
						if ($e.length) {
							const ye =
								await pe[0].server.extensionManagementService.getTargetPlatform();
							this.I.publicLog2("galleryService:checkingForUpdates", {
								count: $e.length,
							});
							const ue = await this.G.getExtensions(
								$e,
								{
									targetPlatform: ye,
									compatible: !0,
									productVersion: this.Kb(),
								},
								I.CancellationToken.None,
							);
							ue.length && (await this.Bb(ue));
						}
					}
					async updateAll() {
						const ae = [];
						return (
							this.outdated.forEach((pe) => {
								pe.gallery &&
									ae.push({
										extension: pe.gallery,
										options: {
											operation: a.InstallOperation.Update,
											installPreReleaseVersion: pe.local?.isPreReleaseVersion,
											profileLocation:
												this.ab.currentProfile.extensionsResource,
											isApplicationScoped: pe.local?.isApplicationScoped,
										},
									});
							}),
							this.F.installGalleryExtensions(ae)
						);
					}
					async Bb(ae) {
						const pe = [];
						this.f && pe.push(this.f),
							this.g && pe.push(this.g),
							this.h && pe.push(this.h),
							pe.length &&
								(await Promise.allSettled(
									pe.map(($e) =>
										$e.syncInstalledExtensionsWithGallery(ae, this.Kb()),
									),
								),
								this.outdated.length && this.Fb());
					}
					Cb() {
						return this.H.getValue(f.$PQb);
					}
					Db(ae = !1) {
						this.n.cancel(),
							this.n
								.trigger(
									async () => {
										this.Cb() && (await this.checkForUpdates()), this.Db();
									},
									ae ? 0 : this.Eb(),
								)
								.then(void 0, (pe) => null);
					}
					Eb() {
						return this.S.quality === "insider" && this.Mb()
							? 1e3 * 60 * 60 * 1
							: te.a;
					}
					Fb() {
						this.q.trigger(() => this.Jb()).then(void 0, (ae) => null);
					}
					async Gb() {
						const ae = (await this.F.getInstalled()).filter((pe) =>
							V.$Mq.includes(pe.identifier.id),
						);
						ae.length > 0 &&
							(await C.Promises.settled(
								ae.map(async (pe) => {
									await this.F.uninstall(pe, void 0);
								}),
							));
					}
					async Hb() {
						await this.checkForUpdates(!0);
						const ae = this.outdated.filter((pe) => pe.isBuiltin);
						await C.Promises.settled(
							ae.map((pe) =>
								this.install(
									pe,
									pe.local?.preRelease
										? { installPreReleaseVersion: !0 }
										: void 0,
								),
							),
						);
					}
					async Ib() {
						const ae = [];
						for (const pe of this.local)
							pe.isBuiltin &&
								pe.local?.pinned &&
								pe.local?.identifier.uuid &&
								ae.push({ ...pe.identifier, version: pe.version });
						if (ae.length) {
							const pe = await this.G.getExtensions(
								ae,
								I.CancellationToken.None,
							);
							pe.length && (await this.Bb(pe));
						}
					}
					async Jb() {
						const ae = [];
						for (const $e of this.outdated)
							this.Nb($e) &&
								((await this.shouldRequireConsentToUpdate($e)) || ae.push($e));
						if (!ae.length) return;
						const pe = this.Kb();
						await C.Promises.settled(
							ae.map(($e) =>
								this.install(
									$e,
									$e.local?.preRelease
										? { installPreReleaseVersion: !0, productVersion: pe }
										: { productVersion: pe },
								),
							),
						);
					}
					Kb() {
						return this.Mb() ?? this.Lb();
					}
					Lb() {
						return {
							version: this.S.version,
							date: this.S.date,
							vscodeVersion: this.S.vscodeVersion,
						};
					}
					Mb() {
						switch (this.eb.state.type) {
							case W.StateType.AvailableForDownload:
							case W.StateType.Downloaded:
							case W.StateType.Updating:
							case W.StateType.Ready: {
								const ae = this.eb.state.update.productVersion;
								if (ae && i.valid(ae))
									return {
										version: ae,
										date: this.eb.state.update.timestamp
											? new Date(this.eb.state.update.timestamp).toISOString()
											: void 0,
										vscodeVersion: this.S.vscodeVersion,
									};
							}
						}
					}
					Nb(ae) {
						if (ae.deprecationInfo?.disallowInstall) return !1;
						const pe = this.getAutoUpdateValue();
						if (pe === !1) {
							const ye = this.getEnabledAutoUpdateExtensions(),
								ue = ae.identifier.id.toLowerCase();
							return !!(
								ye.includes(ue) ||
								(this.Ob(ae.publisher) && !ye.includes(`-${ue}`))
							);
						}
						return ae.pinned ||
							this.getDisabledAutoUpdateExtensions().includes(
								ae.identifier.id.toLowerCase(),
							)
							? !1
							: pe === !0
								? !0
								: pe === "onlyEnabledExtensions"
									? this.L.isEnabledEnablementState(ae.enablementState)
									: !1;
					}
					async shouldRequireConsentToUpdate(ae) {
						if (
							ae.outdated &&
							!(ae.local?.manifest.main || ae.local?.manifest.browser) &&
							ae.gallery
						) {
							if ((0, O.$tg)(ae.gallery.properties?.executesCode)) {
								if (!ae.gallery.properties.executesCode) return;
							} else {
								const pe =
									ae instanceof Q
										? await ae.getGalleryManifest()
										: await this.G.getManifest(
												ae.gallery,
												I.CancellationToken.None,
											);
								if (!pe?.main && !pe?.browser) return;
							}
							return t.localize(6550, null, ae.displayName);
						}
					}
					isAutoUpdateEnabledFor(ae) {
						if ((0, O.$lg)(ae)) {
							if (a.$sp.test(ae))
								throw new Error(
									"Expected publisher string, found extension identifier",
								);
							return this.kb() ? !0 : this.Ob(ae);
						}
						return this.Nb(ae);
					}
					Ob(ae) {
						return this.kc().includes(ae.toLowerCase());
					}
					async updateAutoUpdateEnablementFor(ae, pe) {
						if (this.kb()) {
							if ((0, O.$lg)(ae))
								throw new Error("Expected extension, found publisher string");
							const $e = this.getDisabledAutoUpdateExtensions(),
								ye = ae.identifier.id.toLowerCase(),
								ue = $e.indexOf(ye);
							pe ? ue !== -1 && $e.splice(ue, 1) : ue === -1 && $e.push(ye),
								this.qc($e),
								pe &&
									ae.local &&
									ae.pinned &&
									(await this.F.updateMetadata(ae.local, { pinned: !1 })),
								this.s.fire(ae);
						} else {
							const $e = this.getEnabledAutoUpdateExtensions();
							if ((0, O.$lg)(ae)) {
								if (a.$sp.test(ae))
									throw new Error(
										"Expected publisher string, found extension identifier",
									);
								(ae = ae.toLowerCase()),
									this.isAutoUpdateEnabledFor(ae) !== pe &&
										(pe
											? $e.push(ae)
											: $e.includes(ae) && $e.splice($e.indexOf(ae), 1)),
									this.lc($e);
								for (const ye of this.installed)
									ye.publisher.toLowerCase() === ae && this.s.fire(ye);
							} else {
								const ye = ae.identifier.id.toLowerCase(),
									ue = this.isAutoUpdateEnabledFor(ae.publisher.toLowerCase()),
									fe = $e.includes(ye),
									me = $e.includes(`-${ye}`);
								pe
									? (me && $e.splice($e.indexOf(`-${ye}`), 1),
										ue ? fe && $e.splice($e.indexOf(ye), 1) : fe || $e.push(ye))
									: (fe && $e.splice($e.indexOf(ye), 1),
										ue
											? me || $e.push(`-${ye}`)
											: me && $e.splice($e.indexOf(`-${ye}`), 1)),
									this.lc($e),
									this.s.fire(ae);
							}
						}
						pe && this.Jb();
					}
					Pb() {
						if (this.nc !== this.oc() || this.sc !== this.tc()) {
							const ae = this.installed.filter((me) => !me.isBuiltin),
								pe = (me) => {
									const ve = [],
										ge = [];
									for (const be of me) this.Nb(be) ? ve.push(be) : ge.push(be);
									return [ve, ge];
								},
								[$e, ye] = pe(ae);
							(this.mc = void 0), (this.rc = void 0);
							const [ue, fe] = pe(ae);
							for (const me of $e ?? []) fe?.includes(me) && this.s.fire(me);
							for (const me of ye ?? []) ue?.includes(me) && this.s.fire(me);
						}
					}
					async canInstall(ae) {
						return !(ae instanceof Q) ||
							ae.isMalicious ||
							ae.deprecationInfo?.disallowInstall ||
							(0, V.$Oq)(ae)
							? !1
							: ae.gallery
								? !!(
										(this.f && (await this.f.canInstall(ae.gallery))) ||
										(this.g && (await this.g.canInstall(ae.gallery))) ||
										(this.h && (await this.h.canInstall(ae.gallery)))
									)
								: !!(
										ae.resourceExtension &&
										(await this.F.canInstall(ae.resourceExtension))
									);
					}
					async install(ae, pe = {}, $e) {
						let ye, ue;
						if (ae instanceof o.URI) ye = ae;
						else {
							let fe, me;
							if (
								((0, O.$lg)(ae)
									? ((ue = this.local.find((ve) =>
											(0, c.$7p)(ve.identifier, { id: ae }),
										)),
										ue?.isBuiltin ||
											(fe = {
												id: ae,
												version: pe.version,
												preRelease:
													pe.installPreReleaseVersion ?? this.preferPreReleases,
											}))
									: ae.gallery
										? ((ue = ae),
											(me = ae.gallery),
											pe.version &&
												pe.version !== me?.version &&
												(fe = { id: ue.identifier.id, version: pe.version }))
										: ae.resourceExtension &&
											((ue = ae), (ye = ae.resourceExtension)),
								fe)
							) {
								const ve = ue?.server
									? await ue.server.extensionManagementService.getTargetPlatform()
									: void 0;
								me = (0, E.$Sb)(
									await this.G.getExtensions(
										[fe],
										{ targetPlatform: ve },
										I.CancellationToken.None,
									),
								);
							}
							if (
								(!ue &&
									me &&
									((ue = this.z.createInstance(
										Q,
										(ve) => this.Ab(ve),
										(ve) => this.yb(ve),
										void 0,
										void 0,
										me,
										void 0,
									)),
									ue.setExtensionsControlManifest(
										await this.F.getExtensionsControlManifest(),
									)),
								ue?.isMalicious)
							)
								throw new Error(t.localize(6551, null));
							if (!(pe.enable && ue?.local)) {
								if (!ye) {
									if (!me) {
										const ve = (0, O.$lg)(ae) ? ae : ae.identifier.id;
										throw pe.version
											? new Error(t.localize(6552, null, ve, pe.version))
											: new Error(t.localize(6553, null, ve));
									}
									ye = me;
								}
								pe.version && (pe.installGivenVersion = !0),
									ue?.isWorkspaceScoped && (pe.isWorkspaceScoped = !0);
							}
						}
						if (ye) {
							if (pe.justification) {
								const fe =
										(0, O.$sg)(pe.isMachineScoped) &&
										this.db.isEnabled() &&
										this.db.isResourceEnabled(A.SyncResource.Extensions),
									me = [];
								me.push({
									label:
										(0, O.$lg)(pe.justification) || !pe.justification.action
											? t.localize(6554, null)
											: t.localize(6555, null, pe.justification.action),
									run: () => !0,
								}),
									ue ||
										me.push({
											label: t.localize(6556, null),
											run: () => (this.open(ue), !1),
										});
								const ve = await this.cb.prompt({
									title: t.localize(6557, null),
									message: ue
										? t.localize(
												6558,
												null,
												ue.displayName,
												ue.publisherDisplayName,
											)
										: t.localize(6559, null),
									detail: (0, O.$lg)(pe.justification)
										? pe.justification
										: pe.justification.reason,
									cancelButton: !0,
									buttons: me,
									checkbox: fe
										? { label: t.localize(6560, null), checked: !0 }
										: void 0,
								});
								if (!ve.result) throw new d.$9();
								fe && (pe.isMachineScoped = !ve.checkboxChecked);
							}
							ye instanceof o.URI
								? (ue = await this.Ub(void 0, () => this.Vb(ye, pe), $e))
								: ue &&
									(ue.resourceExtension
										? (ue = await this.Ub(
												ue,
												() => this.F.installResourceExtension(ye, pe),
												$e,
											))
										: (ue = await this.Ub(ue, () => this.Wb(ue, ye, pe), $e)));
						}
						if (!ue) throw new Error(t.localize(6561, null));
						if (pe.enable) {
							if (
								ue.enablementState === h.EnablementState.DisabledWorkspace ||
								ue.enablementState === h.EnablementState.DisabledGlobally
							) {
								if (
									pe.justification &&
									!(
										await this.cb.confirm({
											title: t.localize(6562, null),
											message: t.localize(6563, null, ue.displayName),
											detail: (0, O.$lg)(pe.justification)
												? pe.justification
												: pe.justification.reason,
											primaryButton: (0, O.$lg)(pe.justification)
												? t.localize(6564, null)
												: t.localize(6565, null, pe.justification.action),
										})
									).confirmed
								)
									throw new d.$9();
								await this.setEnablement(
									ue,
									ue.enablementState === h.EnablementState.DisabledWorkspace
										? h.EnablementState.EnabledWorkspace
										: h.EnablementState.EnabledGlobally,
								);
							}
							await this.Yb(ue);
						}
						return ue;
					}
					async installInServer(ae, pe) {
						await this.Ub(ae, async () => {
							const $e = ae.local;
							if (!$e) throw new Error("Extension not found");
							if (
								(ae.gallery ||
									(ae =
										(
											await this.getExtensions(
												[{ ...ae.identifier, preRelease: $e.preRelease }],
												I.CancellationToken.None,
											)
										)[0] ?? ae),
								ae.gallery)
							)
								return pe.extensionManagementService.installFromGallery(
									ae.gallery,
									{ installPreReleaseVersion: $e.preRelease },
								);
							const ye =
								await pe.extensionManagementService.getTargetPlatform();
							if (!(0, a.$Cp)($e.targetPlatform, [$e.targetPlatform], ye))
								throw new Error(t.localize(6566, null, ae.identifier.id));
							const ue = await this.F.zip($e);
							try {
								return await pe.extensionManagementService.install(ue);
							} finally {
								try {
									await this.$.del(ue);
								} catch (fe) {
									this.W.error(fe);
								}
							}
						});
					}
					canSetLanguage(ae) {
						return !(!z.$r || !ae.gallery || !(0, F.$EJ)(ae.gallery));
					}
					async setLanguage(ae) {
						if (!this.canSetLanguage(ae))
							throw new Error("Can not set language");
						const pe = (0, F.$EJ)(ae.gallery);
						if (pe === z.$z) return;
						const $e = ae.gallery?.properties?.localizedLanguages?.[0];
						return this.Y.setLocale({
							id: pe,
							galleryExtension: ae.gallery,
							extensionId: ae.identifier.id,
							label: $e ?? ae.displayName,
						});
					}
					setEnablement(ae, pe) {
						return (ae = Array.isArray(ae) ? ae : [ae]), this.Zb(ae, pe);
					}
					async uninstall(ae) {
						const pe = ae.local
							? ae
							: this.local.find((ue) =>
									(0, c.$7p)(ue.identifier, ae.identifier),
								);
						if (!pe?.local) throw new Error("Missing local");
						const $e = [{ extension: pe.local }];
						for (const ue of this.Qb(pe.local, this.local))
							$e.some((fe) =>
								(0, c.$7p)(fe.extension.identifier, ue.identifier),
							) || $e.push({ extension: ue });
						const ye = [];
						for (const { extension: ue } of $e)
							for (const fe of this.local)
								fe.local &&
									((0, c.$7p)(fe.identifier, ue.identifier) ||
										(fe.dependencies.length !== 0 &&
											(ue.manifest.extensionPack?.some((me) =>
												(0, c.$7p)({ id: me }, fe.identifier),
											) ||
												ye.some((me) =>
													me.extensionPack.some((ve) =>
														(0, c.$7p)({ id: ve }, fe.identifier),
													),
												) ||
												(fe.dependencies.some((me) =>
													(0, c.$7p)(ue.identifier, { id: me }),
												) &&
													(ye.push(fe), $e.push({ extension: fe.local }))))));
						if (ye.length) {
							const { result: ue } = await this.cb.prompt({
								title: t.localize(6567, null),
								type: v.Severity.Warning,
								message: this.Rb(pe, ye),
								buttons: [{ label: t.localize(6568, null), run: () => !0 }],
								cancelButton: { run: () => !1 },
							});
							if (!ue) throw new d.$9();
						}
						return this.hc(
							{
								location: $.ProgressLocation.Extensions,
								title: t.localize(6569, null),
								source: `${pe.identifier.id}`,
							},
							() => this.F.uninstallExtensions($e).then(() => {}),
						);
					}
					Qb(ae, pe, $e = []) {
						if ($e.some((ue) => (0, c.$7p)(ue.identifier, ae.identifier)))
							return [];
						$e.push(ae);
						const ye = ae.manifest.extensionPack ?? [];
						if (ye.length) {
							const ue = [];
							for (const me of pe)
								me.local &&
									!me.isBuiltin &&
									ye.some((ve) => (0, c.$7p)({ id: ve }, me.identifier)) &&
									ue.push(me.local);
							const fe = [];
							for (const me of ue) fe.push(...this.Qb(me, pe, $e));
							return [...ue, ...fe];
						}
						return [];
					}
					Rb(ae, pe) {
						return pe.length === 1
							? t.localize(6570, null, ae.displayName, pe[0].displayName)
							: pe.length === 2
								? t.localize(
										6571,
										null,
										ae.displayName,
										pe[0].displayName,
										pe[1].displayName,
									)
								: t.localize(
										6572,
										null,
										ae.displayName,
										pe[0].displayName,
										pe[1].displayName,
									);
					}
					reinstall(ae) {
						return this.Ub(ae, () => {
							const pe = ae.local
									? ae
									: this.local.filter((ye) =>
											(0, c.$7p)(ye.identifier, ae.identifier),
										)[0],
								$e = pe && pe.local ? pe.local : null;
							if (!$e) throw new Error("Missing local");
							return this.F.reinstallFromGallery($e);
						});
					}
					isExtensionIgnoredToSync(ae) {
						return ae.local
							? !this.Tb(ae.local)
							: this.Q.hasToNeverSyncExtension(ae.identifier.id);
					}
					async togglePreRelease(ae) {
						if (ae.local) {
							if (ae.preRelease !== ae.isPreReleaseVersion) {
								await this.F.updateMetadata(ae.local, {
									preRelease: !ae.preRelease,
								});
								return;
							}
							await this.install(ae, {
								installPreReleaseVersion: !ae.preRelease,
								preRelease: !ae.preRelease,
							});
						}
					}
					async toggleExtensionIgnoredToSync(ae) {
						const pe = this.isExtensionIgnoredToSync(ae);
						ae.local && pe
							? ((ae.local = await this.updateSynchronizingInstalledExtension(
									ae.local,
									!0,
								)),
								this.s.fire(ae))
							: this.Q.updateIgnoredExtensions(ae.identifier.id, !pe),
							await this.R.triggerSync(["IgnoredExtensionsUpdated"], !1, !1);
					}
					async toggleApplyExtensionToAllProfiles(ae) {
						if (!ae.local || (0, k.$Jn)(ae.local.manifest) || ae.isBuiltin)
							return;
						const pe = ae.local.isApplicationScoped;
						await Promise.all(
							this.Sb().map(async ($e) => {
								const ye = $e.local.find((ue) =>
									(0, c.$7p)(ue.identifier, ae.identifier),
								)?.local;
								ye &&
									ye.isApplicationScoped === pe &&
									(await this.F.toggleAppliationScope(
										ye,
										this.ab.currentProfile.extensionsResource,
									));
							}),
						);
					}
					Sb() {
						const ae = [];
						return (
							this.f && ae.push(this.f),
							this.g && ae.push(this.g),
							this.h && ae.push(this.h),
							ae
						);
					}
					Tb(ae) {
						return ae.isMachineScoped
							? !1
							: this.Q.hasToAlwaysSyncExtension(ae.identifier.id)
								? !0
								: !this.Q.hasToNeverSyncExtension(ae.identifier.id);
					}
					async updateSynchronizingInstalledExtension(ae, pe) {
						const $e = !pe;
						return (
							ae.isMachineScoped !== $e &&
								(ae = await this.F.updateMetadata(ae, { isMachineScoped: $e })),
							pe && this.Q.updateIgnoredExtensions(ae.identifier.id, !1),
							ae
						);
					}
					Ub(ae, pe, $e) {
						const ye = ae
							? t.localize(6573, null, ae.displayName)
							: t.localize(6574, null);
						return this.hc(
							{ location: $e ?? $.ProgressLocation.Extensions, title: ye },
							async () => {
								try {
									ae && (this.u.push(ae), this.s.fire(ae));
									const ue = await pe();
									return await this.Xb(ue.identifier);
								} finally {
									ae &&
										((this.u = this.u.filter((ue) => ue !== ae)),
										this.s.fire(void 0));
								}
							},
						);
					}
					async Vb(ae, pe) {
						const $e = await this.F.getManifest(ae),
							ye = this.local.find((ue) =>
								(0, c.$7p)(ue.identifier, {
									id: (0, c.$_p)($e.publisher, $e.name),
								}),
							);
						return (
							ye &&
								((pe = pe || {}),
								ye.latestVersion === $e.version
									? (pe.pinned = ye.local?.pinned || !this.Nb(ye))
									: (pe.installGivenVersion = !0)),
							this.F.installVSIX(ae, $e, pe)
						);
					}
					Wb(ae, pe, $e) {
						return (
							($e = $e ?? {}),
							($e.pinned = ae.local?.pinned || !this.Nb(ae)),
							ae.local
								? (($e.productVersion = this.Kb()),
									this.F.updateFromGallery(pe, ae.local, $e))
								: this.F.installFromGallery(pe, $e)
						);
					}
					async Xb(ae) {
						let pe = this.local.find(($e) => (0, c.$7p)($e.identifier, ae));
						if (
							(pe ||
								(await w.Event.toPromise(
									w.Event.filter(
										this.onChange,
										($e) =>
											!!$e &&
											this.local.some((ye) => (0, c.$7p)(ye.identifier, ae)),
									),
								)),
							(pe = this.local.find(($e) => (0, c.$7p)($e.identifier, ae))),
							!pe)
						)
							throw new Error("Extension should have been installed");
						return pe;
					}
					async Yb(ae) {
						this.X.extensions.find((pe) =>
							k.$Gn.equals(pe.identifier, ae.identifier.id),
						) ||
							!ae.local ||
							!this.X.canAddExtension((0, U.$y2)(ae.local)) ||
							(await new Promise((pe, $e) => {
								const ye = this.X.onDidChangeExtensions(() => {
									try {
										this.X.extensions.find((ue) =>
											k.$Gn.equals(ue.identifier, ae.identifier.id),
										) && (ye.dispose(), pe());
									} catch (ue) {
										$e(ue);
									}
								});
							}));
					}
					Zb(ae, pe) {
						if (
							pe === h.EnablementState.EnabledGlobally ||
							pe === h.EnablementState.EnabledWorkspace
						) {
							const ye = this.ac(ae, this.local, pe, {
								dependencies: !0,
								pack: !0,
							});
							return this.$b(ae, ye, pe);
						} else {
							const ye = this.ac(ae, this.local, pe, {
								dependencies: !1,
								pack: !0,
							});
							return ye.length ? this.$b(ae, ye, pe) : this.$b(ae, [], pe);
						}
					}
					async $b(ae, pe, $e) {
						const ye = [...ae, ...pe];
						if (
							!(
								$e === h.EnablementState.EnabledGlobally ||
								$e === h.EnablementState.EnabledWorkspace
							)
						)
							for (const fe of ae) {
								const me = this.bc(fe, ye, this.local);
								if (me.length) {
									const { result: ve } = await this.cb.prompt({
										title: t.localize(6575, null),
										type: v.Severity.Warning,
										message: this.cc(fe, ye, me),
										buttons: [{ label: t.localize(6576, null), run: () => !0 }],
										cancelButton: { run: () => !1 },
									});
									if (!ve) throw new d.$9();
									await this.$b(me, [fe], $e);
								}
							}
						return this.ec(ye, $e);
					}
					ac(ae, pe, $e, ye, ue = []) {
						const fe = ae.filter((me) => ue.indexOf(me) === -1);
						if (fe.length) {
							for (const ve of fe) ue.push(ve);
							const me = pe.filter((ve) => {
								if (ue.indexOf(ve) !== -1) return !1;
								const ge =
										$e === h.EnablementState.EnabledGlobally ||
										$e === h.EnablementState.EnabledWorkspace,
									be =
										ve.enablementState === h.EnablementState.EnabledGlobally ||
										ve.enablementState === h.EnablementState.EnabledWorkspace;
								return ge === be
									? !1
									: (ge || !ve.isBuiltin) &&
											(ye.dependencies || ye.pack) &&
											ae.some(
												(Ce) =>
													(ye.dependencies &&
														Ce.dependencies.some((Le) =>
															(0, c.$7p)({ id: Le }, ve.identifier),
														)) ||
													(ye.pack &&
														Ce.extensionPack.some((Le) =>
															(0, c.$7p)({ id: Le }, ve.identifier),
														)),
											);
							});
							return me.length && me.push(...this.ac(me, pe, $e, ye, ue)), me;
						}
						return [];
					}
					bc(ae, pe, $e) {
						return $e.filter((ye) =>
							ye.dependencies.length === 0 ||
							ye === ae ||
							!this.L.isEnabledEnablementState(ye.enablementState) ||
							pe.indexOf(ye) !== -1
								? !1
								: ye.dependencies.some((ue) =>
										[ae, ...pe].some((fe) =>
											(0, c.$7p)(fe.identifier, { id: ue }),
										),
									),
						);
					}
					cc(ae, pe, $e) {
						for (const ye of [ae, ...pe]) {
							const ue = $e.filter((fe) =>
								fe.dependencies.some((me) =>
									(0, c.$7p)({ id: me }, ye.identifier),
								),
							);
							if (ue.length) return this.dc(ye, ue);
						}
						return "";
					}
					dc(ae, pe) {
						return pe.length === 1
							? t.localize(6577, null, ae.displayName, pe[0].displayName)
							: pe.length === 2
								? t.localize(
										6578,
										null,
										ae.displayName,
										pe[0].displayName,
										pe[1].displayName,
									)
								: t.localize(
										6579,
										null,
										ae.displayName,
										pe[0].displayName,
										pe[1].displayName,
									);
					}
					async ec(ae, pe) {
						const $e = await this.L.setEnablement(
							ae.map((ye) => ye.local),
							pe,
						);
						for (let ye = 0; ye < $e.length; ye++)
							$e[ye] &&
								this.I.publicLog(
									pe === h.EnablementState.EnabledGlobally ||
										pe === h.EnablementState.EnabledWorkspace
										? "extension:enable"
										: "extension:disable",
									ae[ye].telemetryData,
								);
						return $e;
					}
					gc() {
						this.installed.some(
							(ae) =>
								ae.state === f.ExtensionState.Installing ||
								ae.state === f.ExtensionState.Uninstalling,
						)
							? this.fc ||
								this.hc(
									{ location: $.ProgressLocation.Extensions },
									() => new Promise((ae) => (this.fc = ae)),
								)
							: (this.fc?.(), (this.fc = void 0));
					}
					hc(ae, pe) {
						return this.N.withProgress(ae, async () => {
							const $e = (0, C.$zh)(() => pe());
							this.w.push($e);
							try {
								return await $e;
							} finally {
								const ye = this.w.indexOf($e);
								ye !== -1 && this.w.splice(ye, 1);
							}
						});
					}
					ic(ae) {
						if ((0, d.$8)(ae)) return;
						const pe = (ae && ae.message) || "";
						/getaddrinfo ENOTFOUND|getaddrinfo ENOENT|connect EACCES|connect ECONNREFUSED/.test(
							pe,
						) || this.J.error(ae);
					}
					handleURL(ae, pe) {
						return /^extension/.test(ae.path)
							? (this.jc(ae), Promise.resolve(!0))
							: Promise.resolve(!1);
					}
					jc(ae) {
						const pe = /^extension\/([^/]+)$/.exec(ae.path);
						if (!pe) return;
						const $e = pe[1];
						this.queryLocal()
							.then(async (ye) => {
								let ue = ye.find((fe) => (0, c.$7p)(fe.identifier, { id: $e }));
								ue ||
									([ue] = await this.getExtensions(
										[{ id: $e }],
										{ source: "uri" },
										I.CancellationToken.None,
									)),
									ue && (await this.M.focus(K.$Bfb), await this.open(ue));
							})
							.then(void 0, (ye) => this.ic(ye));
					}
					kc() {
						return this.getEnabledAutoUpdateExtensions().filter(
							(ae) => !a.$sp.test(ae),
						);
					}
					getEnabledAutoUpdateExtensions() {
						try {
							const ae = JSON.parse(this.nc);
							if (Array.isArray(ae)) return ae;
						} catch {}
						return [];
					}
					lc(ae) {
						this.nc = JSON.stringify(ae);
					}
					get nc() {
						return this.mc || (this.mc = this.oc()), this.mc;
					}
					set nc(ae) {
						this.nc !== ae && ((this.mc = ae), this.pc(ae));
					}
					oc() {
						return this.bb.get(Z, T.StorageScope.APPLICATION, "[]");
					}
					pc(ae) {
						this.bb.store(
							Z,
							ae,
							T.StorageScope.APPLICATION,
							T.StorageTarget.USER,
						);
					}
					getDisabledAutoUpdateExtensions() {
						try {
							const ae = JSON.parse(this.sc);
							if (Array.isArray(ae)) return ae;
						} catch {}
						return [];
					}
					qc(ae) {
						this.sc = JSON.stringify(ae);
					}
					get sc() {
						return this.rc || (this.rc = this.tc()), this.rc;
					}
					set sc(ae) {
						this.sc !== ae && ((this.rc = ae), this.uc(ae));
					}
					tc() {
						return this.bb.get(se, T.StorageScope.APPLICATION, "[]");
					}
					uc(ae) {
						this.bb.store(
							se,
							ae,
							T.StorageScope.APPLICATION,
							T.StorageTarget.USER,
						);
					}
				};
				(e.$STc = le),
					(e.$STc =
						le =
						te =
							Ne(
								[
									j(0, n.$Li),
									j(1, b.$IY),
									j(2, h.$GQb),
									j(3, a.$Ep),
									j(4, g.$gj),
									j(5, u.$km),
									j(6, v.$4N),
									j(7, s.$2rb),
									j(8, h.$IQb),
									j(9, p.$asb),
									j(10, $.$8N),
									j(11, h.$EQb),
									j(12, L.$nM),
									j(13, N.$UAc),
									j(14, A.$7Rb),
									j(15, D.$Bk),
									j(16, R.$6j),
									j(17, B.$JSb),
									j(18, y.$ik),
									j(19, U.$q2),
									j(20, x.$7Sb),
									j(21, q.$n6),
									j(22, P.$ll),
									j(23, G.$P8),
									j(24, T.$lq),
									j(25, J.$GO),
									j(26, A.$4Rb),
									j(27, W.$_rb),
									j(28, Y.$Vl),
									j(29, ie.$Vi),
								],
								le,
							));
			},
		),
		define(
			de[4078],
			he([
				1, 0, 33, 113, 119, 154, 22, 5, 128, 34, 211, 21, 68, 129, 2936, 957,
				150, 966, 357, 157, 384, 143,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0fd = void 0);
				let y = class {
					constructor(S, I, T, P, k, L, D, M, N) {
						(this.a = S),
							(this.b = I),
							(this.c = T),
							(this.d = P),
							(this.f = k),
							(this.g = L),
							(this.h = D),
							(this.i = M),
							(this.j = N),
							this.k();
					}
					async k() {
						const S = this.c.getConnection(),
							I = this.a.localExtensionManagementServer,
							T = this.a.remoteExtensionManagementServer;
						if (!S || !T || !I || !this.d.userDataSyncStore) return;
						const P = `${a.$jq}.${S.remoteAuthority}`;
						if (!this.b.getBoolean(P, a.StorageScope.APPLICATION, !0)) {
							this.g.trace(
								"Skipping initializing remote extensions because the window with this remote authority was opened before.",
							);
							return;
						}
						if (
							(this.b.store(
								P,
								!1,
								a.StorageScope.APPLICATION,
								a.StorageTarget.MACHINE,
							),
							!this.b.isNew(a.StorageScope.WORKSPACE))
						) {
							this.g.trace(
								"Skipping initializing remote extensions because this workspace was opened before.",
							);
							return;
						}
						if (!this.j.isEnabled()) return;
						const k = await this.i.resolveAuthority(S.remoteAuthority);
						if (!k.options?.authenticationSession) return;
						const D = (
							await this.h.getSessions(
								k.options?.authenticationSession.providerId,
							)
						).find((B) => B.id === k.options?.authenticationSession?.id);
						if (!D) {
							this.g.info(
								"Skipping initializing remote extensions because the account with given session id is not found",
								k.options.authenticationSession.id,
							);
							return;
						}
						const M = this.f.createInstance(
							o.$5xc,
							this.d.userDataSyncStore.url,
						);
						M.setAuthToken(
							D.accessToken,
							k.options.authenticationSession.providerId,
						);
						const N = await M.readResource(p.SyncResource.Extensions, null),
							A = new m.$Ki();
						A.set(w.$Hp, T.extensionManagementService),
							await this.f.createChild(A).createInstance($).initialize(N);
					}
				};
				(e.$0fd = y),
					(e.$0fd = y =
						Ne(
							[
								j(0, b.$EQb),
								j(1, a.$lq),
								j(2, l.$$m),
								j(3, p.$SRb),
								j(4, d.$Li),
								j(5, r.$ik),
								j(6, f.$$7),
								j(7, u.$3l),
								j(8, p.$4Rb),
							],
							y,
						));
				let $ = class extends n.$Z3c {
					constructor(S, I, T, P, k, L, D, M, N, A) {
						super(S, I, T, P, k, L, N, D), (this.c = M), (this.v = A);
					}
					async o(S) {
						const I = await this.t(S);
						if (!I) {
							this.j.info(
								"No synced extensions exist while initializing remote extensions.",
							);
							return;
						}
						const T = await this.p.getInstalled(),
							{ newExtensions: P } = this.u(I, T);
						if (!P.length) {
							this.j.trace("No new remote extensions to install.");
							return;
						}
						const k = await this.p.getTargetPlatform(),
							L = await this.c.getExtensions(
								P,
								{ targetPlatform: k, compatible: !0 },
								t.CancellationToken.None,
							);
						L.length &&
							(await Promise.allSettled(
								L.map(async (D) => {
									const M = await this.c.getManifest(
										D,
										t.CancellationToken.None,
									);
									if (M && this.v.canExecuteOnWorkspace(M)) {
										const N = I.find((A) =>
											(0, E.$7p)(A.identifier, A.identifier),
										);
										await this.p.installFromGallery(D, {
											installPreReleaseVersion: N?.preRelease,
											donotIncludePackAndDependencies: !0,
										});
									}
								}),
							));
					}
				};
				$ = Ne(
					[
						j(0, w.$Hp),
						j(1, g.$UAc),
						j(2, C.$ll),
						j(3, c.$Xl),
						j(4, i.$Ti),
						j(5, r.$ik),
						j(6, h.$Vl),
						j(7, w.$Ep),
						j(8, a.$lq),
						j(9, s.$JSb),
					],
					$,
				);
			},
		),
		define(
			de[4079],
			he([
				1, 0, 4, 30, 11, 55, 102, 31, 5, 192, 52, 1295, 3387, 44, 100, 985, 8,
				3285, 666, 230, 2707, 14, 4078, 20, 3631, 3732, 3,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, $.$lK)(a.$Yfd, v.$_fd, $.InstantiationType.Delayed),
					i.$Io
						.as(c.$a1.EditorPane)
						.registerEditorPane(
							r.$vVb.create(a.$2fd, a.$2fd.ID, (0, t.localize)(6612, null)),
							[new C.$Ji(g.$UTc)],
						);
				class T {
					canSerialize(D) {
						return !0;
					}
					serialize(D) {
						return "";
					}
					deserialize(D) {
						return g.$UTc.instance;
					}
				}
				i.$Io.as(c.$a1.EditorFactory).registerEditorSerializer(g.$UTc.ID, T);
				let P = class extends I.$1c {
					constructor(D, M) {
						super(),
							M.registerChannel(
								"extensionRecommendationNotification",
								new s.$G9c(D),
							),
							this.D((0, w.$4X)(o.$8fd)),
							this.D((0, w.$4X)(o.$9fd));
					}
				};
				P = Ne([j(0, f.$HTc), j(1, b.$Vbd)], P);
				const k = i.$Io.as(E.Extensions.Workbench);
				k.registerWorkbenchContribution(P, u.LifecyclePhase.Restored),
					k.registerWorkbenchContribution(S.$agd, u.LifecyclePhase.Eventually),
					k.registerWorkbenchContribution(y.$0fd, u.LifecyclePhase.Restored),
					k.registerWorkbenchContribution(h.$7fd, u.LifecyclePhase.Restored),
					d.$fk.registerCommand(h.$6fd.ID, (L, ...D) =>
						L.get(m.$Li).createInstance(h.$6fd).run(D),
					),
					d.$fk.registerCommand(a.$3fd.ID, (L) => {
						L.get(m.$Li).createInstance(a.$3fd, a.$3fd.ID, a.$3fd.LABEL).run();
					}),
					d.$fk.registerCommand(a.$4fd.ID, (L) => {
						L.get(m.$Li).createInstance(a.$4fd, a.$4fd.ID, a.$4fd.LABEL).run();
					}),
					d.$fk.registerCommand(a.$5fd.ID, (L) => {
						L.get(m.$Li).createInstance(a.$5fd, a.$5fd.ID, a.$5fd.LABEL).run();
					}),
					w.$ZX.appendMenuItem(w.$XX.EditorTitle, {
						command: {
							id: h.$6fd.ID,
							title: h.$6fd.LABEL,
							icon: l.$ak.debugStart,
						},
						group: "navigation",
						when: n.$TPb.isEqualTo(a.$2fd.ID),
					}),
					w.$ZX.appendMenuItem(w.$XX.CommandPalette, {
						command: {
							id: h.$6fd.ID,
							title: (0, t.localize)(6613, null),
							category: (0, t.localize)(6614, null),
							icon: l.$ak.debugStart,
						},
					}),
					w.$ZX.appendMenuItem(w.$XX.EditorTitle, {
						command: {
							id: a.$3fd.ID,
							title: a.$3fd.LABEL,
							icon: l.$ak.circleFilled,
						},
						group: "navigation",
						when: p.$Kj.and(
							n.$TPb.isEqualTo(a.$2fd.ID),
							a.$Zfd.notEqualsTo("running"),
						),
					}),
					w.$ZX.appendMenuItem(w.$XX.EditorTitle, {
						command: {
							id: a.$4fd.ID,
							title: a.$4fd.LABEL,
							icon: l.$ak.debugStop,
						},
						group: "navigation",
						when: p.$Kj.and(
							n.$TPb.isEqualTo(a.$2fd.ID),
							a.$Zfd.isEqualTo("running"),
						),
					}),
					w.$ZX.appendMenuItem(w.$XX.EditorTitle, {
						command: {
							id: a.$5fd.ID,
							title: a.$5fd.LABEL,
							icon: l.$ak.saveAll,
							precondition: a.$1fd,
						},
						group: "navigation",
						when: p.$Kj.and(n.$TPb.isEqualTo(a.$2fd.ID)),
					});
			},
		),
		define(
			de[4080],
			he([
				1, 0, 56, 7, 6, 3, 48, 5, 257, 481, 153, 51, 441, 17, 128, 8, 38, 98,
				173, 11, 92, 10, 63, 2443,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$P1b = void 0),
					(i = mt(i));
				let $ = class {
					constructor(S, I, T, P, k, L) {
						(this.k = I),
							(this.suppressMouseDown = !1),
							(this.allowEditorOverflow = !0),
							(this.a = new E.$Zc()),
							(this.b = document.createElement("div")),
							(this.c = document.createElement("div")),
							(this.d = document.createElement("div")),
							(this.f = this.a.add(new w.$re())),
							(this.onDidBlur = this.f.event),
							(this.g = !1),
							(this.h = !1),
							(this.i = this.a.add(
								T.createInstance(h.$82, void 0, u.ChatAgentLocation.Editor),
							));
						const D = T.createChild(
							new n.$Ki([g.$6j, this.a.add(P.createScoped(this.b))]),
							this.a,
						);
						(this.j = D.createInstance(
							r.$XYb,
							S,
							void 0,
							{
								defaultElementHeight: 32,
								editorOverflowWidgetsDomNode: I.getOverflowWidgetsDomNode(),
								renderStyle: "minimal",
								renderInputOnTop: !0,
								renderFollowups: !0,
								supportsFileReferences:
									k.getValue(`chat.experimental.variables.${S.location}`) ===
									!0,
								menus: {
									telemetrySource: "inlineChat-content",
									executeToolbar: b.$XX.ChatExecute,
								},
								filter: (R) => !1,
							},
							{
								listForeground: a.$9P,
								listBackground: m.$nLb,
								inputEditorBackground: a.$TR,
								resultEditorBackground: a.$8P,
							},
						)),
							this.a.add(this.j),
							this.j.render(this.c),
							this.j.setModel(this.i, {}),
							this.a.add(
								this.j.onDidChangeContentHeight(() =>
									I.layoutContentWidget(this),
								),
							),
							(this.b.tabIndex = -1),
							(this.b.className =
								"inline-chat-content-widget interactive-session"),
							this.b.appendChild(this.c),
							this.d.classList.add("toolbar"),
							this.b.appendChild(this.d);
						const M = this.a.add(
							D.createInstance(f.$Tyb, this.d, m.$iLb, {
								actionViewItemProvider: (R) =>
									R instanceof b.$2X
										? T.createInstance(s.$Myb, R, { conversational: !0 })
										: void 0,
								toolbarOptions: { primaryGroup: "0_main" },
								icon: !1,
								label: !0,
							}),
						);
						this.a.add(
							M.onDidChangeMenuItems(() => {
								this.b.classList.toggle("contents", M.getItemsLength() > 1);
							}),
						);
						let N = !1;
						this.a.add(
							this.j.inputEditor.onDidChangeModelContent(() => {
								N ||= this.j.inputEditor.getModel()?.getValueLength() !== 0;
							}),
						),
							this.a.add(
								this.j.onDidChangeContext(() => {
									(N ||= !0), I.layoutContentWidget(this);
								}),
							);
						const A = i.$dhb(this.b);
						this.a.add(
							A.onDidBlur(() => {
								this.g && !N && !L.currentQuickInput && this.f.fire();
							}),
						),
							this.a.add(A);
					}
					dispose() {
						this.a.dispose();
					}
					getId() {
						return "inline-chat-content-widget";
					}
					getDomNode() {
						return this.b;
					}
					getPosition() {
						return this.e ?? null;
					}
					beforeRender() {
						const S =
								this.j.input.inputEditor.getOption(p.EditorOption.lineHeight) *
								5,
							I = this.j.contentHeight,
							T = Math.min(S, I),
							P = 400;
						return this.j.layout(T, P), i.size(this.b, P, null), null;
					}
					afterRender() {
						this.h && ((this.h = !1), this.j.focusInput());
					}
					get chatWidget() {
						return this.j;
					}
					get isVisible() {
						return this.g;
					}
					get value() {
						return this.j.inputEditor.getValue();
					}
					show(S, I) {
						if (!this.g) {
							(this.g = !0),
								(this.h = !0),
								this.k.revealRangeNearTopIfOutsideViewport(
									c.$iL.fromPositions(S),
									o.ScrollType.Immediate,
								);
							const T = this.k.getModel()?.getWordAtPosition(S);
							(this.e = {
								position: T ? new C.$hL(S.lineNumber, T.startColumn) : S,
								preference: [
									I
										? t.ContentWidgetPositionPreference.BELOW
										: t.ContentWidgetPositionPreference.ABOVE,
								],
							}),
								this.k.addContentWidget(this),
								this.j.setContext(!0),
								this.j.setVisible(!0);
						}
					}
					hide() {
						this.g &&
							((this.g = !1),
							this.k.removeContentWidget(this),
							this.j.inputEditor.setValue(""),
							this.j.saveState(),
							this.j.setVisible(!1));
					}
					setSession(S) {
						this.j.setModel(S.chatModel, {}),
							this.j.setInputPlaceholder(S.agent.description ?? "");
					}
				};
				(e.$P1b = $),
					(e.$P1b = $ =
						Ne([j(2, d.$Li), j(3, g.$6j), j(4, l.$gj), j(5, y.$DJ)], $));
			},
		),
		define(
			de[1357],
			he([
				1, 0, 7, 95, 182, 24, 6, 94, 3, 77, 1660, 38, 196, 104, 342, 98, 42, 4,
				178, 91, 1675, 92, 173, 11, 10, 8, 72, 5, 128, 39, 51, 130, 417, 1328,
				1954, 481, 153, 980, 207, 441, 218, 283, 257, 2442,
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
			) {
				"use strict";
				var q;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0Yb = e.$9Yb = void 0);
				let V = class {
					constructor(Y, ie, ne, ee, _, te, Q, Z, se, re, le) {
						(this.m = ne),
							(this.n = ee),
							(this.o = _),
							(this.p = te),
							(this.q = Q),
							(this.s = Z),
							(this.t = se),
							(this.u = re),
							(this.v = le),
							(this.a = (0, t.h)("div.inline-chat@root", [
								(0, t.h)("div.chat-widget@chatWidget"),
								(0, t.h)("div.accessibleViewer@accessibleViewer"),
								(0, t.h)("div.status@status", [
									(0, t.h)("div.label.info.hidden@infoLabel"),
									(0, t.h)("div.actions.hidden@toolbar1"),
									(0, t.h)("div.label.status.hidden@statusLabel"),
									(0, t.h)("div.actions.secondary.hidden@toolbar2"),
								]),
							])),
							(this.b = new m.$Zc()),
							(this.j = this.b.add(new C.$re())),
							(this.onDidChangeHeight = C.Event.filter(
								this.j.event,
								(Le) => !this.l,
							)),
							(this.k = this.b.add(new C.$re())),
							(this.onDidChangeInput = this.k.event),
							(this.l = !1),
							(this.scopedContextKeyService = this.b.add(
								ee.createScoped(this.a.chatWidget),
							));
						const oe = ne.createChild(
							new P.$Ki([S.$6j, this.scopedContextKeyService]),
							this.b,
						);
						(this.g = oe.createInstance(
							R.$XYb,
							Y,
							void 0,
							{
								defaultElementHeight: 32,
								renderStyle: "minimal",
								renderInputOnTop: !1,
								renderFollowups: !0,
								supportsFileReferences:
									Q.getValue(`chat.experimental.variables.${Y.location}`) ===
									!0,
								filter: (Le) =>
									(0, x.$_Tb)(Le)
										? !1
										: (0, x.$$Tb)(Le) && Le.isComplete && !Le.errorDetails
											? !(
													(Le.response.value.length > 0 &&
														Le.response.value.every(
															(Fe) =>
																Fe.kind === "textEditGroup" &&
																ie.chatWidgetViewOptions?.rendererOptions?.renderTextEditsAsSummary?.(
																	Fe.uri,
																),
														)) ||
													Le.response.value.length === 0
												)
											: !0,
								...ie.chatWidgetViewOptions,
							},
							{
								listForeground: H.$mLb,
								listBackground: H.$nLb,
								inputEditorBackground: L.$TR,
								resultEditorBackground: L.$8P,
							},
						)),
							this.g.render(this.a.chatWidget),
							this.a.chatWidget.style.setProperty(
								(0, L.$qP)(B.$jUb),
								(0, L.$rP)(H.$nLb),
							),
							this.g.setVisible(!0),
							this.b.add(this.g);
						const ae = U.$X1.bindTo(this.scopedContextKeyService),
							pe = U.$Q1.bindTo(this.scopedContextKeyService),
							$e = U.$T1.bindTo(this.scopedContextKeyService),
							ye = U.$V1.bindTo(this.scopedContextKeyService),
							ue = U.$U1.bindTo(this.scopedContextKeyService),
							fe = this.b.add(new m.$Zc());
						this.b.add(
							this.g.onDidChangeViewModel(() => {
								fe.clear();
								const Le = this.g.viewModel;
								Le &&
									(fe.add(
										(0, m.$Yc)(() => {
											(Ce.context = void 0),
												ae.reset(),
												pe.reset(),
												ye.reset(),
												ue.reset(),
												$e.reset();
										}),
									),
									fe.add(
										Le.onDidChange(() => {
											const Fe = Le.getItems().at(-1);
											(Ce.context = Fe),
												ae.set((0, x.$$Tb)(Fe)),
												pe.set(
													(0, x.$$Tb)(Fe)
														? Fe.vote === F.ChatAgentVoteDirection.Down
															? "down"
															: Fe.vote === F.ChatAgentVoteDirection.Up
																? "up"
																: ""
														: "",
												),
												ye.set((0, x.$$Tb)(Fe) && Fe.errorDetails !== void 0),
												ue.set(
													!!(
														(0, x.$$Tb)(Fe) &&
														Fe.errorDetails?.responseIsFiltered
													),
												),
												$e.set(
													(0, x.$$Tb)(Fe) &&
														(Fe.agent?.metadata.supportIssueReporting ?? !1),
												),
												this.j.fire();
										}),
									),
									this.j.fire());
							}),
						),
							this.b.add(
								this.chatWidget.onDidChangeContentHeight(() => {
									this.j.fire();
								}),
							),
							(this.f = H.$ZKb.bindTo(this.n));
						const me = this.b.add((0, t.$dhb)(this.domNode));
						this.b.add(me.onDidBlur(() => this.f.set(!1))),
							this.b.add(me.onDidFocus(() => this.f.set(!0))),
							(this.d = H.$XKb.bindTo(ee)),
							this.b.add(
								this.g.inputEditor.onDidFocusEditorWidget(() => this.d.set(!0)),
							),
							this.b.add(
								this.g.inputEditor.onDidBlurEditorWidget(() => this.d.set(!1)),
							);
						const ve =
								ie.statusMenuId instanceof $.$XX
									? ie.statusMenuId
									: ie.statusMenuId.menu,
							ge =
								ie.statusMenuId instanceof $.$XX
									? void 0
									: ie.statusMenuId.options,
							be = oe.createInstance(s.$LLb, this.a.toolbar1, ve, {
								toolbarOptions: { primaryGroup: "0_main" },
								telemetrySource:
									ie.chatWidgetViewOptions?.menus?.telemetrySource,
								menuOptions: { renderShortTitle: !0 },
								...ge,
							});
						this.b.add(be.onDidChange(() => this.j.fire())), this.b.add(be);
						const Ce = oe.createInstance(
							y.$Tyb,
							this.a.toolbar2,
							ie.secondaryMenuId ?? $.$XX.for(""),
							{
								telemetrySource:
									ie.chatWidgetViewOptions?.menus?.telemetrySource,
								menuOptions: { renderShortTitle: !0, shouldForwardArgs: !0 },
								actionViewItemProvider: (Le, Fe) =>
									Le instanceof $.$2X && Le.item.id === N.$7Yb
										? oe.createInstance(A.$$Xb, Le, Fe)
										: (0, l.$Pyb)(oe, Le, Fe),
							},
						);
						this.b.add(Ce.onDidChangeMenuItems(() => this.j.fire())),
							this.b.add(Ce),
							this.b.add(
								this.q.onDidChangeConfiguration((Le) => {
									Le.affectsConfiguration(
										D.AccessibilityVerbositySettingId.InlineChat,
									) && this.w();
								}),
							),
							(this.a.root.tabIndex = 0),
							(this.a.statusLabel.tabIndex = 0),
							this.w(),
							this.b.add(
								this.v.setupManagedHover(
									(0, i.$cib)("element"),
									this.a.statusLabel,
									() => this.a.statusLabel.dataset.title,
								),
							),
							this.b.add(
								this.u.onDidPerformUserAction((Le) => {
									Le.sessionId === this.g.viewModel?.model.sessionId &&
										Le.action.kind === "vote" &&
										this.updateStatus("Thank you for your feedback!", {
											resetAfter: 1250,
										});
								}),
							),
							(this.c = this.b.add(
								this.m.createInstance(
									z.$82,
									void 0,
									O.ChatAgentLocation.Editor,
								),
							)),
							this.c.startInitialize(),
							this.c.initialize(void 0),
							this.setChatModel(this.c);
					}
					w() {
						if (
							((this.a.root.ariaLabel = this.s.getOpenAriaHint(
								D.AccessibilityVerbositySettingId.InlineChat,
							)),
							this.p.isScreenReaderOptimized())
						) {
							let Y = G;
							if (
								this.q.getValue(D.AccessibilityVerbositySettingId.InlineChat)
							) {
								const ie = this.o
									.lookupKeybinding(
										M.AccessibilityCommandId.OpenAccessibilityHelp,
									)
									?.getLabel();
								Y = ie
									? (0, o.localize)(7105, null, ie)
									: (0, o.localize)(7106, null);
							}
							this.g.inputEditor.updateOptions({ ariaLabel: Y });
						}
					}
					dispose() {
						this.b.dispose();
					}
					get domNode() {
						return this.a.root;
					}
					get chatWidget() {
						return this.g;
					}
					saveState() {
						this.g.saveState();
					}
					layout(Y) {
						this.l = !0;
						try {
							this.x(Y);
						} finally {
							this.l = !1;
						}
					}
					x(Y) {
						const ie = this.y(),
							ne = (0, t.$zgb)(this.a.status);
						(this.a.root.style.height = `${Y.height - ie}px`),
							(this.a.root.style.width = `${Y.width}px`),
							this.g.layout(Y.height - ne - ie, Y.width);
					}
					get contentHeight() {
						const Y = {
							chatWidgetContentHeight: this.g.contentHeight,
							statusHeight: (0, t.$zgb)(this.a.status),
							extraHeight: this.y(),
						};
						return Y.chatWidgetContentHeight + Y.statusHeight + Y.extraHeight;
					}
					get minHeight() {
						let Y = 100;
						for (const ne of this.g.viewModel?.getItems() ?? [])
							if (
								(0, x.$$Tb)(ne) &&
								ne.response.value.some(
									(ee) => ee.kind === "textEditGroup" && !ee.state?.applied,
								)
							) {
								Y = 270;
								break;
							}
						let ie = this.contentHeight;
						return (
							(ie -= this.g.contentHeight),
							(ie += Math.min(
								this.g.input.contentHeight + Y,
								this.g.contentHeight,
							)),
							ie
						);
					}
					y() {
						return 6;
					}
					get value() {
						return this.g.getInput();
					}
					set value(Y) {
						this.g.setInput(Y);
					}
					selectAll(Y = !0) {
						let ie = 1;
						if (!Y) {
							const ne = /^(\/\w+)\s*/.exec(
								this.g.inputEditor.getModel().getLineContent(1),
							);
							ne && (ie = ne[1].length + 1);
						}
						this.g.inputEditor.setSelection(
							new c.$kL(1, ie, Number.MAX_SAFE_INTEGER, 1),
						);
					}
					set placeholder(Y) {
						this.g.setInputPlaceholder(Y);
					}
					toggleStatus(Y) {
						this.a.toolbar1.classList.toggle("hidden", !Y),
							this.a.toolbar2.classList.toggle("hidden", !Y),
							this.a.status.classList.toggle("hidden", !Y),
							this.a.infoLabel.classList.toggle("hidden", !Y),
							this.j.fire();
					}
					updateToolbar(Y) {
						this.a.root.classList.toggle("toolbar", Y),
							this.a.toolbar1.classList.toggle("hidden", !Y),
							this.a.toolbar2.classList.toggle("hidden", !Y),
							this.a.status.classList.toggle("actions", Y),
							this.a.infoLabel.classList.toggle("hidden", Y),
							this.j.fire();
					}
					async getCodeBlockInfo(Y) {
						const { viewModel: ie } = this.g;
						if (!ie) return;
						const ne = ie.getItems().filter((_) => (0, x.$$Tb)(_));
						if (!ne.length) return;
						const ee = ne[ne.length - 1];
						return ie.codeBlockModelCollection.get(ie.sessionId, ee, Y)?.model;
					}
					get responseContent() {
						const Y = this.g.viewModel?.model.getRequests();
						if ((0, E.$Pb)(Y))
							return (0, E.$wb)(Y)?.response?.response.toString();
					}
					getChatModel() {
						return this.g.viewModel?.model ?? this.c;
					}
					setChatModel(Y) {
						this.g.setModel(Y, { inputValue: void 0 });
					}
					updateChatMessage(Y, ie, ne) {
						if (!this.g.viewModel || this.g.viewModel.model !== this.c) return;
						const ee = this.c;
						if (!Y?.message.value) {
							for (const te of ee.getRequests()) ee.removeRequest(te.id);
							return;
						}
						const _ = ee.addRequest(
							{ parts: [], text: "" },
							{ variables: [] },
							0,
						);
						if (
							(ee.acceptResponseProgress(_, {
								kind: "markdownContent",
								content: Y.message,
							}),
							!ie)
						) {
							ee.completeResponse(_);
							return;
						}
						return {
							cancel: () => ee.cancelRequest(_),
							complete: () => ee.completeResponse(_),
							appendContent: (te) => {
								ee.acceptResponseProgress(_, {
									kind: "markdownContent",
									content: new d.$cl(te),
								});
							},
						};
					}
					updateInfo(Y) {
						this.a.infoLabel.classList.toggle("hidden", !Y);
						const ie = (0, w.$Sib)(Y);
						(0, t.$hhb)(this.a.infoLabel, ...ie), this.j.fire();
					}
					updateStatus(Y, ie = {}) {
						const ne = typeof ie.resetAfter == "number";
						if (ne && !this.a.statusLabel.dataset.state) {
							const _ = this.a.statusLabel.innerText,
								te = this.a.statusLabel.dataset.title,
								Q = Array.from(this.a.statusLabel.classList.values());
							setTimeout(() => {
								this.updateStatus(_, {
									classes: Q,
									keepMessage: !0,
									title: te,
								});
							}, ie.resetAfter);
						}
						const ee = (0, w.$Sib)(Y);
						(0, t.$hhb)(this.a.statusLabel, ...ee),
							(this.a.statusLabel.className = `label status ${(ie.classes ?? []).join(" ")}`),
							this.a.statusLabel.classList.toggle("hidden", !Y),
							ne
								? (this.a.statusLabel.dataset.state = "temp")
								: delete this.a.statusLabel.dataset.state,
							ie.title
								? (this.a.statusLabel.dataset.title = ie.title)
								: delete this.a.statusLabel.dataset.title,
							this.j.fire();
					}
					reset() {
						this.g.setContext(!0),
							this.g.saveState(),
							this.updateChatMessage(void 0),
							(0, t.$hhb)(this.a.statusLabel),
							this.a.statusLabel.classList.toggle("hidden", !0),
							this.a.toolbar1.classList.add("hidden"),
							this.a.toolbar2.classList.add("hidden"),
							this.updateInfo(""),
							this.chatWidget.setModel(this.c, {}),
							this.a.accessibleViewer.classList.toggle("hidden", !0),
							this.j.fire();
					}
					focus() {
						this.g.focusInput();
					}
					hasFocus() {
						return this.domNode.contains((0, t.$Jgb)());
					}
				};
				(e.$9Yb = V),
					(e.$9Yb = V =
						Ne(
							[
								j(2, T.$Li),
								j(3, S.$6j),
								j(4, k.$uZ),
								j(5, b.$XK),
								j(6, v.$gj),
								j(7, f.$HLb),
								j(8, p.$MO),
								j(9, F.$J2),
								j(10, I.$Uyb),
							],
							V,
						));
				const G = (0, o.localize)(7107, null);
				let K = class extends V {
					constructor(Y, ie, ne, ee, _, te, Q, Z, se, re, le, oe) {
						super(
							Y,
							{
								...ne,
								chatWidgetViewOptions: {
									...ne.chatWidgetViewOptions,
									editorOverflowWidgetsDomNode: ie.getOverflowWidgetsDomNode(),
								},
							},
							te,
							ee,
							_,
							Q,
							Z,
							se,
							re,
							le,
							oe,
						),
							(this.A = ie),
							(this.z = this.b.add(new m.$2c()));
					}
					get contentHeight() {
						let Y = super.contentHeight;
						return this.z.value && (Y += this.z.value.height + 8), Y;
					}
					x(Y) {
						let ie = Y.height;
						this.z.value &&
							((this.z.value.width = Y.width - 12),
							(ie -= this.z.value.height + 8)),
							super.x(Y.with(void 0, ie)),
							(this.a.root.style.height = `${Y.height - this.y()}px`);
					}
					reset() {
						this.z.clear(), super.reset();
					}
					showAccessibleHunk(Y, ie) {
						this.a.accessibleViewer.classList.remove("hidden"),
							this.z.clear(),
							(this.z.value = this.m.createInstance(
								J,
								this.a.accessibleViewer,
								Y,
								ie,
								new W(this.A, Y, ie),
							)),
							this.j.fire();
					}
				};
				(e.$0Yb = K),
					(e.$0Yb = K =
						Ne(
							[
								j(3, S.$6j),
								j(4, k.$uZ),
								j(5, T.$Li),
								j(6, b.$XK),
								j(7, v.$gj),
								j(8, f.$HLb),
								j(9, p.$MO),
								j(10, F.$J2),
								j(11, I.$Uyb),
							],
							K,
						));
				let J = (q = class extends u.$ayb {
					set width(Y) {
						this.y.set(Y, void 0);
					}
					constructor(Y, ie, ne, ee, _) {
						const te = (0, r.observableValue)("width", 0),
							Q = (0, r.observableValue)("diff", q.z(ne)),
							Z = (0, r.derived)((le) => [Q.read(le)]),
							se = Math.min(10, 8 + Q.get().changedLineCount),
							re = ee.getModifiedOptions().get(a.EditorOption.lineHeight) * se;
						super(
							Y,
							(0, r.constObservable)(!0),
							() => {},
							(0, r.constObservable)(!1),
							te,
							(0, r.constObservable)(re),
							Z,
							ee,
							_,
						),
							(this.height = re),
							(this.y = te),
							this.B.add(
								ie.textModelN.onDidChangeContent(() => {
									Q.set(q.z(ne), void 0);
								}),
							);
					}
					static z(Y) {
						const ie = Y.getRanges0(),
							ne = Y.getRangesN(),
							ee = h.$rL.fromRangeInclusive(ie[0]),
							_ = h.$rL.fromRangeInclusive(ne[0]),
							te = [];
						for (let Q = 1; Q < ie.length; Q++)
							te.push(new n.$DL(ie[Q], ne[Q]));
						return new n.$CL(ee, _, te);
					}
				});
				J = q = Ne([j(4, T.$Li)], J);
				class W {
					constructor(Y, ie, ne) {
						(this.a = Y), (this.b = ie), (this.c = ne);
					}
					getOriginalModel() {
						return this.b.textModel0;
					}
					getModifiedModel() {
						return this.b.textModelN;
					}
					getOriginalOptions() {
						return this.a.getOptions();
					}
					getModifiedOptions() {
						return this.a.getOptions();
					}
					originalReveal(Y) {}
					modifiedReveal(Y) {
						this.a.revealRangeInCenterIfOutsideViewport(
							Y || this.c.getRangesN()[0],
							g.ScrollType.Smooth,
						);
					}
					modifiedSetSelection(Y) {}
					modifiedFocus() {
						this.a.focus();
					}
					getModifiedPosition() {
						return this.c.getRangesN()[0].getStartPosition();
					}
				}
			},
		),
		define(
			de[4081],
			he([
				1, 0, 7, 127, 3, 28, 38, 680, 4, 8, 5, 257, 1357, 19, 491, 98, 10, 34,
				11, 283,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$Yb = void 0),
					(i = mt(i));
				let s = class extends d.$FLb {
					constructor($, v, S, I, T, P) {
						super(v, {
							showFrame: !1,
							showArrow: !1,
							isAccessible: !0,
							className: "inline-chat-widget",
							keepEditorSelection: !0,
							showInHiddenAreas: !0,
							ordinal: 5e4,
						}),
							(this.d = S),
							(this.i = I),
							(this.a = this.o.add(new l(this.editor))),
							(this.b = a.$6Kb.bindTo(T)),
							this.o.add(
								(0, w.$Yc)(() => {
									this.b.reset();
								}),
							),
							(this.widget = this.d.createInstance(h.$0Yb, $, this.editor, {
								statusMenuId: {
									menu: a.$jLb,
									options: {
										buttonConfigProvider: (D, M) => {
											const N = M > 0;
											return new Set([a.$eLb, a.$gLb, a.$hLb]).has(D.id)
												? { isSecondary: N, showIcon: !0, showLabel: !1 }
												: { isSecondary: N };
										},
									},
								},
								secondaryMenuId: a.$kLb,
								chatWidgetViewOptions: {
									menus: {
										executeToolbar: f.$XX.ChatExecute,
										telemetrySource: "interactiveEditorWidget-toolbar",
									},
									rendererOptions: {
										renderTextEditsAsSummary: (D) =>
											(0, c.$gh)(D, v.getModel()?.uri) &&
											P.getValue(a.InlineChatConfigKeys.Mode) ===
												a.EditMode.Live,
									},
								},
							})),
							this.o.add(this.widget);
						let k;
						this.o.add(
							this.widget.chatWidget.onWillMaybeChangeHeight(() => {
								this.position && (k = this.r(this.position));
							}),
						),
							this.o.add(
								this.widget.onDidChangeHeight(() => {
									if (this.position) {
										k ??= this.r(this.position);
										const D = this.m();
										this.F(D.linesValue), k(), (k = void 0);
									}
								}),
							),
							this.create(),
							this.o.add(
								(0, t.$0fb)(
									this.domNode,
									"click",
									(D) => {
										!this.editor.hasWidgetFocus() &&
											!this.widget.hasFocus() &&
											this.editor.focus();
									},
									!0,
								),
							);
						const L = () => {
							!this.position || !this.editor.hasModel()
								? this.b.reset()
								: this.position.lineNumber ===
										this.editor.getPosition().lineNumber
									? this.b.set("above")
									: this.position.lineNumber + 1 ===
											this.editor.getPosition().lineNumber
										? this.b.set("below")
										: this.b.reset();
						};
						this.o.add(this.editor.onDidChangeCursorPosition((D) => L())),
							this.o.add(this.editor.onDidFocusEditorText((D) => L())),
							L();
					}
					C($) {
						$.appendChild(this.widget.domNode);
					}
					E($) {
						const v = this.editor.getLayoutInfo();
						let S = v.contentWidth - (v.glyphMarginWidth + v.decorationsWidth);
						(S = Math.min(640, S)),
							(this.c = new t.$pgb(S, $)),
							this.widget.layout(this.c);
					}
					m() {
						const $ = this.widget.contentHeight,
							v = this.editor.getLayoutInfo().height,
							S = Math.min($, Math.max(this.widget.minHeight, v * 0.42));
						return {
							linesValue: S / this.editor.getOption(C.EditorOption.lineHeight),
							pixelsValue: S,
						};
					}
					D($) {
						this.c && this.E(this.c.height);
					}
					show($) {
						(0, E.$vg)(this.container);
						const v = this.editor.getLayoutInfo(),
							S = v.glyphMarginWidth + v.decorationsWidth + v.lineNumbersWidth;
						this.container.style.marginLeft = `${S}px`;
						const I = this.r($);
						super.show($, this.m().linesValue),
							this.widget.chatWidget.setVisible(!0),
							this.widget.focus(),
							I(),
							this.a.enable();
					}
					updatePositionAndHeight($) {
						const v = this.r($);
						super.updatePositionAndHeight($, this.m().linesValue), v();
					}
					r($) {
						const v = n.$vwb.capture(this.editor),
							S = $.lineNumber <= 1 ? 1 : 1 + $.lineNumber,
							I = this.editor.getScrollTop(),
							P = this.editor.getTopForLineNumber(S) - this.m().pixelsValue;
						return (this.widget.chatWidget.viewModel
							?.getItems()
							.find((L) => (0, b.$$Tb)(L) && L.response.value.length > 0) &&
							P < I) ||
							this.a.didScrollUpOrDown
							? this.a.runIgnored(() => {
									v.restore(this.editor);
								})
							: this.a.runIgnored(() => {
									v.restore(this.editor);
									const L = this.editor.getScrollTop(),
										D = this.editor.getTopForLineNumber(S),
										M = D - this.m().pixelsValue,
										N = this.editor.getLayoutInfo().height,
										A = this.editor.getBottomForLineNumber(S);
									let R = M,
										O = !1;
									A >= L + N && ((R = A - N), (O = !0)),
										(R < L || O) &&
											(this.i.trace("[IE] REVEAL zone", {
												zoneTop: M,
												lineTop: D,
												lineBottom: A,
												scrollTop: L,
												newScrollTop: R,
												forceScrollTop: O,
											}),
											this.editor.setScrollTop(R, g.ScrollType.Immediate));
								});
					}
					A($, v) {}
					t($) {
						return $.width - $.minimap.minimapWidth;
					}
					hide() {
						const $ = n.$vwb.capture(this.editor);
						this.a.disable(),
							this.b.reset(),
							this.widget.reset(),
							this.widget.chatWidget.setVisible(!1),
							super.hide(),
							i.$pib((0, m.localize)(7108, null)),
							$.restore(this.editor);
					}
				};
				(e.$$Yb = s),
					(e.$$Yb = s =
						Ne([j(2, u.$Li), j(3, o.$ik), j(4, r.$6j), j(5, p.$gj)], s));
				class l {
					constructor($) {
						(this.d = $), (this.b = !1), (this.c = new w.$2c());
					}
					dispose() {
						this.c.dispose();
					}
					enable() {
						(this.a = void 0),
							(this.c.value = this.d.onDidScrollChange(($) => {
								!$.scrollTopChanged ||
									this.b ||
									(this.c.clear(), (this.a = !0));
							}));
					}
					disable() {
						this.c.clear(), (this.a = void 0);
					}
					runIgnored($) {
						return () => {
							this.b = !0;
							try {
								return $();
							} finally {
								this.b = !1;
							}
						};
					}
					get didScrollUpOrDown() {
						return this.a;
					}
				}
			},
		),
		define(
			de[427],
			he([
				1, 0, 127, 15, 33, 163, 29, 6, 149, 3, 201, 19, 162, 28, 47, 56, 48, 17,
				104, 74, 200, 960, 501, 440, 4, 10, 8, 57, 5, 34, 208, 153, 441, 218,
				4080, 1244, 1893, 3770, 257, 293, 18, 89, 1733, 798, 4081, 207,
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
			) {
				"use strict";
				var K;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Z1b = e.$Y1b = e.State = void 0),
					(t = mt(t));
				var J;
				(function (ne) {
					(ne.CREATE_SESSION = "CREATE_SESSION"),
						(ne.INIT_UI = "INIT_UI"),
						(ne.WAIT_FOR_INPUT = "WAIT_FOR_INPUT"),
						(ne.SHOW_REQUEST = "SHOW_REQUEST"),
						(ne.PAUSE = "PAUSE"),
						(ne.CANCEL = "CANCEL"),
						(ne.ACCEPT = "DONE");
				})(J || (e.State = J = {}));
				var W;
				(function (ne) {
					(ne[(ne.NONE = 0)] = "NONE"),
						(ne[(ne.ACCEPT_SESSION = 1)] = "ACCEPT_SESSION"),
						(ne[(ne.CANCEL_SESSION = 2)] = "CANCEL_SESSION"),
						(ne[(ne.PAUSE_SESSION = 4)] = "PAUSE_SESSION"),
						(ne[(ne.CANCEL_REQUEST = 8)] = "CANCEL_REQUEST"),
						(ne[(ne.CANCEL_INPUT = 16)] = "CANCEL_INPUT"),
						(ne[(ne.ACCEPT_INPUT = 32)] = "ACCEPT_INPUT");
				})(W || (W = {}));
				class X {
					static isInlineChatRunOptions(ee) {
						const {
							initialSelection: _,
							initialRange: te,
							message: Q,
							autoSend: Z,
							position: se,
							existingSession: re,
						} = ee;
						return !(
							(typeof Q < "u" && typeof Q != "string") ||
							(typeof Z < "u" && typeof Z != "boolean") ||
							(typeof te < "u" && !o.$iL.isIRange(te)) ||
							(typeof _ < "u" && !f.$kL.isISelection(_)) ||
							(typeof se < "u" && !p.$hL.isIPosition(se)) ||
							(typeof re < "u" && !(re instanceof R.$BLb))
						);
					}
				}
				e.$Y1b = X;
				let Y = (K = class {
					static get(ee) {
						return ee.getContribution(U.$TKb);
					}
					get chatWidget() {
						return this.c.value.content.isVisible
							? this.c.value.content.chatWidget
							: this.c.value.zone.widget.chatWidget;
					}
					constructor(ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e) {
						(this.v = ee),
							(this.w = _),
							(this.x = te),
							(this.y = Q),
							(this.z = Z),
							(this.A = se),
							(this.B = re),
							(this.C = le),
							(this.D = ae),
							(this.E = pe),
							(this.a = !1),
							(this.b = new r.$Zc()),
							(this.l = this.b.add(new d.$re())),
							(this.n = this.b.add(new d.$re())),
							(this.onDidEnterState = this.n.event),
							(this.o = this.b.add(new d.$re())),
							(this.onWillStartSession = this.o.event),
							(this.q = this.b.add(new r.$Zc())),
							(this.s = this.b.add(new r.$2c())),
							(this.O = void 0),
							(this.f = U.$WKb.bindTo(oe)),
							(this.g = U.$YKb.bindTo(oe)),
							(this.i = U.$8Kb.bindTo(oe)),
							(this.h = U.$bLb.bindTo(oe)),
							(this.j = U.$aLb.bindTo(oe)),
							(this.k = G.$X1.bindTo(oe)),
							G.$V1.bindTo(oe),
							(this.c = new m.$Y(() => {
								const ye = {
									location: D.ChatAgentLocation.Editor,
									resolveData: () => (
										(0, c.$vg)(this.v.hasModel()),
										(0, c.$vg)(this.t),
										{
											type: D.ChatAgentLocation.Editor,
											selection: this.v.getSelection(),
											document: this.t.textModelN.uri,
											wholeRange: this.t?.wholeRange.trackedInitialRange,
										}
									),
								};
								for (const me of $e.listNotebookEditors())
									for (const [, ve] of me.codeEditors)
										if (ve === this.v) {
											ye.location = D.ChatAgentLocation.Notebook;
											break;
										}
								const ue = this.b.add(_.createInstance(A.$P1b, ye, this.v)),
									fe = this.b.add(_.createInstance(V.$$Yb, ye, this.v));
								return { content: ue, zone: fe };
							})),
							this.b.add(
								this.v.onDidChangeModel(async (ye) => {
									if (this.t || !ye.newModelUrl) return;
									const ue = this.x.getSession(this.v, ye.newModelUrl);
									ue &&
										(this.F("session RESUMING after model change", ye),
										await this.run({ existingSession: ue }));
								}),
							),
							this.b.add(
								this.x.onDidEndSession((ye) => {
									ye.session === this.t &&
										ye.endedByExternalCause &&
										(this.F("session ENDED by external cause"),
										(this.t = void 0),
										this.u?.cancel(),
										this.K(),
										this.cancelSession());
								}),
							),
							this.b.add(
								this.x.onDidMoveSession(async (ye) => {
									ye.editor === this.v &&
										(this.F("session RESUMING after move", ye),
										await this.run({ existingSession: ye.session }));
								}),
							),
							this.F("NEW controller");
					}
					dispose() {
						this.H &&
							this.l.fire(
								this.t?.chatModel.hasRequests
									? W.PAUSE_SESSION
									: W.CANCEL_SESSION,
							),
							this.b.dispose(),
							(this.a = !0),
							this.F("DISPOSED controller");
					}
					F(ee, ..._) {
						ee instanceof Error
							? this.A.error(ee, ..._)
							: this.A.trace(`[IE] (editor:${this.v.getId()}) ${ee}`, ..._);
					}
					getMessage() {
						return this.c.value.zone.widget.responseContent;
					}
					getId() {
						return U.$TKb;
					}
					G() {
						return this.B.getValue(U.InlineChatConfigKeys.Mode);
					}
					getWidgetPosition() {
						return this.c.value.zone.position;
					}
					async run(ee = {}) {
						try {
							this.finishExistingSession(),
								this.H && (await this.H),
								ee.initialSelection && this.v.setSelection(ee.initialSelection),
								this.s.clear(),
								this.o.fire(),
								(this.H = this.I(J.CREATE_SESSION, ee)),
								await this.H;
						} catch (_) {
							this.F("error during run", _),
								(0, C.$4)(_),
								this.t && this.x.releaseSession(this.t),
								this[J.PAUSE]();
						} finally {
							this.H = void 0;
						}
					}
					async I(ee, _) {
						let te = ee;
						for (; te && !this.a; ) {
							this.F("setState to ", te);
							const Q = this[te](_);
							this.n.fire(te), (te = await Q);
						}
					}
					async [J.CREATE_SESSION](ee) {
						(0, c.$vg)(this.t === void 0), (0, c.$vg)(this.v.hasModel());
						let _ = ee.existingSession,
							te;
						ee.position &&
							((te = p.$hL.lift(ee.position).delta(-1)), delete ee.position);
						const Q = this.J(ee.headless ?? _?.headless, !0, te);
						let Z = (0, v.localize)(7095, null);
						if (!_) {
							const se = new w.$Ce(),
								re = d.Event.once(this.l.event)((le) => {
									this.F("state=_createSession) message received", le),
										le === W.ACCEPT_INPUT
											? ((ee.autoSend = !0),
												this.c.value.zone.widget.updateInfo(
													(0, v.localize)(7096, null),
												))
											: se.cancel();
								});
							try {
								_ = await this.x.createSession(
									this.v,
									{ editMode: this.G(), wholeRange: ee.initialRange },
									se.token,
								);
							} catch (le) {
								(le instanceof O.$U1b || le?.name === O.$U1b.code) &&
									(Z = le.message);
							}
							if (
								(se.dispose(), re.dispose(), se.token.isCancellationRequested)
							)
								return _ && this.x.releaseSession(_), J.CANCEL;
						}
						if ((delete ee.initialRange, delete ee.existingSession, !_))
							return (
								$.$Szb.get(this.v)?.showMessage(Z, Q),
								this.F("Failed to start editor chat"),
								J.CANCEL
							);
						switch ((await _.chatModel.waitForInitialization(), _.editMode)) {
							case U.EditMode.Preview:
								this.u = this.w.createInstance(
									B.$m1b,
									_,
									this.v,
									this.c.value.zone,
								);
								break;
							case U.EditMode.Live:
							default:
								this.u = this.w.createInstance(
									B.$n1b,
									_,
									this.v,
									this.c.value.zone,
									_.headless ||
										this.B.getValue(U.InlineChatConfigKeys.ZoneToolbar),
								);
								break;
						}
						return (this.t = _), J.INIT_UI;
					}
					async [J.INIT_UI](ee) {
						(0, c.$vg)(this.t),
							(0, c.$vg)(this.u),
							y.$O1b.get(this.v)?.hide(),
							this.q.clear();
						const _ = this.v.createDecorationsCollection(),
							te = () => {
								const le = this.u?.getWholeRangeDecoration() ?? [];
								_.set(le),
									this.g.set(!this.t?.wholeRange.trackedInitialRange.isEmpty());
							};
						this.q.add(
							(0, r.$Yc)(() => {
								_.clear(), this.g.reset();
							}),
						),
							this.q.add(this.t.wholeRange.onDidChange(te)),
							te(),
							this.q.add(
								this.c.value.content.onDidBlur(() => this.cancelSession()),
							),
							this.c.value.content.setSession(this.t),
							this.c.value.zone.widget.setChatModel(this.t.chatModel),
							this.P();
						const Q = !this.t.chatModel.hasRequests;
						this.c.value.zone.widget.updateToolbar(!0),
							this.c.value.zone.widget.toggleStatus(!Q),
							this.J(this.t.headless, Q),
							this.q.add(
								this.v.onDidChangeModel((le) => {
									const oe = this.t?.chatModel.hasRequests
										? W.PAUSE_SESSION
										: W.CANCEL_SESSION;
									this.F("model changed, pause or cancel session", oe, le),
										this.l.fire(oe);
								}),
							);
						const Z = this.v.getModel()?.getAlternativeVersionId();
						this.q.add(
							this.v.onDidChangeModelContent((le) => {
								if (
									(this.t?.hunkData.ignoreTextModelNChanges ||
										this.i.set(
											Z !== this.v.getModel()?.getAlternativeVersionId(),
										),
									this.t?.hunkData.ignoreTextModelNChanges ||
										this.u?.hasFocus())
								)
									return;
								const oe = this.t.wholeRange;
								let ae = !1;
								if (this.B.getValue(U.InlineChatConfigKeys.FinishOnType))
									for (const { range: pe } of le.changes)
										ae = !o.$iL.areIntersectingOrTouching(pe, oe.value);
								this.t.recordExternalEditOccurred(ae),
									ae &&
										(this.F(
											"text changed outside of whole range, FINISH session",
										),
										this.finishExistingSession());
							}),
						),
							this.q.add(
								this.t.chatModel.onDidChange(async (le) => {
									le.kind === "removeRequest" &&
										(await this.t.undoChangesUntil(le.requestId));
								}),
							);
						const se = this.M();
						let re = !1;
						for (const le of this.t.chatModel.getRequests()) {
							if (!le.response) break;
							for (const oe of le.response.response.value)
								if (
									!(
										oe.kind !== "textEditGroup" ||
										!(0, a.$gh)(oe.uri, this.t.textModelN.uri)
									) &&
									!oe.state?.applied
								) {
									for (const ae of oe.edits) this.N(ae, void 0, !re), (re = !0);
									oe.state ??= se;
								}
						}
						if (re) {
							const le = await this.z.computeDiff(
								this.t.textModel0.uri,
								this.t.textModelN.uri,
								{
									computeMoves: !1,
									maxComputationTimeMs: Number.MAX_SAFE_INTEGER,
									ignoreTrimWhitespace: !1,
								},
								"advanced",
							);
							this.t.wholeRange.fixup(le?.changes ?? []),
								await this.t.hunkData.recompute(se, le),
								this.L();
						}
						return (
							(ee.position = await this.u.renderChanges()),
							this.t.chatModel.requestInProgress
								? J.SHOW_REQUEST
								: J.WAIT_FOR_INPUT
						);
					}
					async [J.WAIT_FOR_INPUT](ee) {
						(0, c.$vg)(this.t),
							(0, c.$vg)(this.u),
							this.P(),
							ee.message &&
								(this.updateInput(ee.message),
								t.$oib(ee.message),
								delete ee.message,
								this.J(this.t.headless, !1));
						let _ = W.NONE,
							te;
						const Q = new i.$Lh(),
							Z = new r.$Zc();
						return (
							Z.add(
								this.t.chatModel.onDidChange((se) => {
									se.kind === "addRequest" &&
										((te = se.request), (_ = W.ACCEPT_INPUT), Q.open());
								}),
							),
							Z.add(this.u.onDidAccept(() => this.acceptSession())),
							Z.add(this.u.onDidDiscard(() => this.cancelSession())),
							Z.add(
								d.Event.once(this.l.event)((se) => {
									this.F("state=_waitForInput) message received", se),
										(_ = se),
										Q.open();
								}),
							),
							ee.autoSend &&
								(delete ee.autoSend,
								this.J(this.t.headless, !1),
								this.c.value.zone.widget.chatWidget.acceptInput()),
							await Q.wait(),
							Z.dispose(),
							_ & (W.CANCEL_INPUT | W.CANCEL_SESSION)
								? J.CANCEL
								: _ & W.PAUSE_SESSION
									? J.PAUSE
									: _ & W.ACCEPT_SESSION
										? (this.c.value.zone.widget.selectAll(!1), J.ACCEPT)
										: te?.message.text
											? J.SHOW_REQUEST
											: J.WAIT_FOR_INPUT
						);
					}
					async [J.SHOW_REQUEST](ee) {
						(0, c.$vg)(this.t),
							(0, c.$vg)(this.u),
							(0, c.$vg)(this.t.chatModel.requestInProgress),
							this.j.set(!0);
						const { chatModel: _ } = this.t,
							te = _.lastRequest;
						(0, c.$vg)(te),
							(0, c.$vg)(te.response),
							this.J(this.t.headless, !1),
							this.c.value.zone.widget.selectAll(!1),
							this.c.value.zone.widget.updateInfo(""),
							this.c.value.zone.widget.toggleStatus(!0);
						const { response: Q } = te,
							Z = new i.$0h(),
							se = new r.$Zc(),
							re = se.add(new w.$Ce()),
							le = new u.$3m(),
							oe = h.$le.create(),
							ae = new i.$Th();
						let pe = J.WAIT_FOR_INPUT;
						se.add(
							d.Event.once(this.l.event)((Ce) => {
								this.F("state=_makeRequest) message received", Ce),
									this.D.cancelCurrentRequestForSession(_.sessionId),
									Ce & W.CANCEL_SESSION
										? (pe = J.CANCEL)
										: Ce & W.PAUSE_SESSION
											? (pe = J.PAUSE)
											: Ce & W.ACCEPT_SESSION && (pe = J.ACCEPT);
							}),
						),
							se.add(
								_.onDidChange(async (Ce) => {
									if (Ce.kind === "removeRequest" && Ce.requestId === te.id) {
										re.cancel(),
											Z.complete(),
											Ce.reason === M.ChatRequestRemovalReason.Resend
												? (pe = J.SHOW_REQUEST)
												: (pe = J.CANCEL);
										return;
									}
									if (Ce.kind === "move") {
										(0, c.$vg)(this.t);
										const Le = (Ke, ...Je) =>
											this.F(
												"state=_showRequest) moving inline chat",
												Ke,
												...Je,
											);
										Le("move was requested", Ce.target, Ce.range);
										const Fe = f.$kL.fromRange(
												o.$iL.lift(Ce.range),
												f.SelectionDirection.LTR,
											),
											Oe = await this.E.openEditor(
												{ resource: Ce.target, options: { selection: Fe } },
												F.$KY,
											);
										if (!Oe) {
											Le("opening editor failed");
											return;
										}
										const xe = Oe.getControl();
										if (!(0, g.$0sb)(xe) || !xe.hasModel()) {
											Le(
												"new editor is either missing or not a code editor or does not have a model",
											);
											return;
										}
										if (this.x.getSession(xe, Ce.target)) {
											Le("new editor ALREADY has a session");
											return;
										}
										const He = await this.x.createSession(
											xe,
											{ editMode: this.G(), session: this.t },
											w.CancellationToken.None,
										);
										K.get(xe)?.run({ existingSession: He }),
											(pe = J.CANCEL),
											Z.complete();
										return;
									}
								}),
							),
							se.add(
								this.c.value.zone.widget.chatWidget.inputEditor.onDidChangeModelContent(
									() => {
										this.D.cancelCurrentRequestForSession(_.sessionId);
									},
								),
							);
						let $e = 0,
							ye = !0;
						const ue = this.M();
						let fe;
						const me = () => {
							if (
								(this.L(),
								fe ||
									(fe = Q.response.value.find(
										(Ce) =>
											Ce.kind === "textEditGroup" &&
											(0, a.$gh)(Ce.uri, this.t?.textModelN.uri),
									)),
								fe)
							) {
								fe.state ??= ue;
								const Ce = fe.edits,
									Le = Ce.slice($e);
								Le.length > 0 &&
									(this.F(
										`${this.t?.textModelN.uri.toString()} received ${Le.length} edits`,
									),
									($e = Ce.length),
									le.update(oe.elapsed()),
									oe.reset(),
									ae.queue(async () => {
										const Fe = this.t.wholeRange.value.getStartPosition();
										for (const xe of Le)
											await this.N(
												xe,
												{ duration: le.value, token: re.token },
												ye,
											),
												(ye = !1);
										const Oe = this.t.wholeRange.value.getStartPosition();
										(!Oe.equals(Fe) ||
											!this.c.value.zone.position?.equals(Oe)) &&
											this.J(this.t.headless, !1, Oe.delta(-1));
									}));
							}
							Q.isCanceled
								? (re.cancel(), Z.complete())
								: Q.isComplete && Z.complete();
						};
						se.add(Q.onDidChange(me)),
							me(),
							await Z.p,
							await ae.whenIdle(),
							Q.result?.errorDetails &&
								(await this.t.undoChangesUntil(Q.requestId)),
							se.dispose();
						const ve = await this.z.computeDiff(
							this.t.textModel0.uri,
							this.t.textModelN.uri,
							{
								computeMoves: !1,
								maxComputationTimeMs: Number.MAX_SAFE_INTEGER,
								ignoreTrimWhitespace: !1,
							},
							"advanced",
						);
						this.t.wholeRange.fixup(ve?.changes ?? []),
							await this.t.hunkData.recompute(ue, ve),
							this.j.set(!1);
						let ge;
						if (!Q.result?.errorDetails)
							if (Q.response.value.length === 0) {
								const Ce = (0, v.localize)(7097, null);
								this.c.value.zone.widget.updateStatus(Ce, {
									classes: ["warn"],
								});
							} else this.c.value.zone.widget.updateStatus("");
						const be = await this.u.renderChanges();
						if (be) {
							const Ce = this.v.getSelection();
							Ce?.containsPosition(be)
								? be.lineNumber - Ce.startLineNumber > 8 && (ge = be)
								: (ge = be);
						}
						return this.J(this.t.headless, !1, ge), pe;
					}
					async [J.PAUSE]() {
						this.K(), this.u?.dispose?.(), (this.t = void 0);
					}
					async [J.ACCEPT]() {
						(0, c.$vg)(this.t), (0, c.$vg)(this.u), this.q.clear();
						try {
							await this.u.apply();
						} catch (ee) {
							this.C.error((0, v.localize)(7098, null, (0, E.$xj)(ee))),
								this.F("FAILED to apply changes"),
								this.F(ee);
						}
						this.x.releaseSession(this.t),
							this.K(),
							this.u?.dispose(),
							(this.u = void 0),
							(this.t = void 0);
					}
					async [J.CANCEL]() {
						if (this.t) {
							(0, c.$vg)(this.u), this.q.clear();
							const ee =
								!this.t.isUnstashed &&
								this.t.chatModel.hasRequests &&
								this.t.hunkData.size === this.t.hunkData.pending;
							let _ = [];
							try {
								_ = this.u.cancel();
							} catch (te) {
								this.C.error((0, v.localize)(7099, null, (0, E.$xj)(te))),
									this.F("FAILED to discard changes"),
									this.F(te);
							}
							this.s.clear(),
								ee
									? (this.s.value = this.x.stashSession(this.t, this.v, _))
									: this.x.releaseSession(this.t);
						}
						this.K(), this.u?.dispose(), (this.u = void 0), (this.t = void 0);
					}
					J(ee = !1, _ = !1, te) {
						(0, c.$vg)(this.v.hasModel()), this.f.set(!0);
						let Q;
						if (
							(te
								? (Q = te)
								: this.c.rawValue?.zone?.position
									? this.c.rawValue?.zone.position.lineNumber === 1
										? (Q = this.c.rawValue?.zone.position.delta(-1))
										: (Q = this.c.rawValue?.zone.position)
									: (Q = this.v.getSelection().getStartPosition().delta(-1)),
							this.t &&
								!te &&
								(this.t.hasChangedText || this.t.chatModel.hasRequests) &&
								(Q = this.t.wholeRange.trackedInitialRange
									.getStartPosition()
									.delta(-1)),
							!ee)
						)
							if (this.c.rawValue?.zone?.position)
								this.c.value.zone.updatePositionAndHeight(Q);
							else if (
								_ &&
								this.B.getValue(U.InlineChatConfigKeys.StartWithOverlayWidget)
							) {
								const Z = this.v.getSelection();
								(Q = Z.getStartPosition()),
									this.c.value.content.show(Q, Z.isEmpty());
							} else this.c.value.content.hide(), this.c.value.zone.show(Q);
						return Q;
					}
					K() {
						this.q.clear(),
							this.f.reset(),
							this.i.reset(),
							this.c.rawValue?.content.hide(),
							this.c.rawValue?.zone?.hide(),
							this.v.hasWidgetFocus() && this.v.focus();
					}
					L() {
						if (!this.t) {
							this.h.set(U.InlineChatResponseType.None);
							return;
						}
						const ee = (te) =>
							te.value.some(
								(Q) =>
									Q.kind === "textEditGroup" &&
									(0, a.$gh)(Q.uri, this.t?.textModelN.uri),
							);
						let _ = U.InlineChatResponseType.None;
						for (const te of this.t.chatModel.getRequests())
							if (
								!(!te.response || te.response.isCanceled) &&
								((_ = U.InlineChatResponseType.Messages),
								ee(te.response.response))
							) {
								_ = U.InlineChatResponseType.MessagesAndEdits;
								break;
							}
						this.h.set(_), this.k.set(_ !== U.InlineChatResponseType.None);
					}
					M() {
						(0, c.$vg)(this.t);
						const ee = new l.$1Mb();
						return {
							sha1: ee.canComputeSHA1(this.t.textModel0)
								? ee.computeSHA1(this.t.textModel0)
								: (0, n.$9g)(),
							applied: 0,
						};
					}
					async N(ee, _, te) {
						(0, c.$vg)(this.t), (0, c.$vg)(this.u);
						const Q = await this.z.computeMoreMinimalEdits(
							this.t.textModelN.uri,
							ee,
						);
						if (
							(this.F(
								"edits from PROVIDER and after making them MORE MINIMAL",
								this.t.agent.extensionId,
								ee,
								Q,
							),
							Q?.length === 0)
						)
							return;
						const se = (!_ && Q ? Q : ee).map(b.$iM.asEditOperation),
							re = {
								start: () => (this.t.hunkData.ignoreTextModelNChanges = !0),
								stop: () => (this.t.hunkData.ignoreTextModelNChanges = !1),
							};
						this.y.markChanged(this.t),
							_
								? await this.u.makeProgressiveChanges(se, re, _, te)
								: await this.u.makeChanges(se, re, te);
					}
					P() {
						this.c.value.zone.widget.placeholder = this.Q();
					}
					Q() {
						return this.O ?? this.t?.agent.description ?? "";
					}
					showSaveHint() {
						if (!this.t) return;
						const ee = (0, v.localize)(7100, null);
						if (
							(this.c.value.zone.widget.updateStatus(ee, { classes: ["warn"] }),
							this.c.value.zone.position)
						)
							this.v.revealLineInCenterIfOutsideViewport(
								this.c.value.zone.position.lineNumber,
							);
						else {
							const _ = this.t.hunkData
								.getInfo()
								.find((te) => te.getState() === R.HunkState.Pending);
							_ &&
								this.v.revealLineInCenterIfOutsideViewport(
									_.getRangesN()[0].startLineNumber,
								);
						}
					}
					acceptInput() {
						return this.chatWidget.acceptInput();
					}
					updateInput(ee, _ = !0) {
						if (
							(this.c.value.content.chatWidget.setInput(ee),
							this.c.value.zone.widget.chatWidget.setInput(ee),
							_)
						) {
							const te = new f.$kL(1, 1, Number.MAX_SAFE_INTEGER, 1);
							this.c.value.content.chatWidget.inputEditor.setSelection(te),
								this.c.value.zone.widget.chatWidget.inputEditor.setSelection(
									te,
								);
						}
					}
					cancelCurrentRequest() {
						this.l.fire(W.CANCEL_INPUT | W.CANCEL_REQUEST);
					}
					arrowOut(ee) {
						if (this.c.value.zone.position && this.v.hasModel()) {
							const { column: _ } = this.v.getPosition(),
								{ lineNumber: te } = this.c.value.zone.position,
								Q = ee ? te : te + 1;
							this.v.setPosition({ lineNumber: Q, column: _ }), this.v.focus();
						}
					}
					focus() {
						this.c.value.zone.widget.focus();
					}
					hasFocus() {
						return this.c.value.zone.widget.hasFocus();
					}
					async viewInChat() {
						if (!this.u || !this.t) return;
						let ee = !1,
							_;
						const te = this.v.getModel()?.uri,
							Q = this.t.chatModel.getRequests();
						for (const se of Q)
							if (se.response)
								for (const re of se.response.response.value)
									re.kind === "textEditGroup" &&
										(0, a.$gh)(re.uri, te) &&
										((ee = ee || !!re.state?.applied), (_ = re));
						const Z = this.u.cancel();
						ee && ((0, c.$vg)(_), (_.edits = [Z]), (_.state.applied = 0)),
							await this.w.invokeFunction(ie, this.t?.chatModel),
							this.cancelSession();
					}
					acceptSession() {
						const ee = this.t?.chatModel.getRequests().at(-1)?.response;
						ee &&
							this.D.notifyUserAction({
								sessionId: ee.session.sessionId,
								requestId: ee.requestId,
								agentId: ee.agent?.id,
								command: ee.slashCommand?.name,
								result: ee.result,
								action: { kind: "inlineChat", action: "accepted" },
							}),
							this.l.fire(W.ACCEPT_SESSION);
					}
					acceptHunk(ee) {
						return this.u?.performHunkAction(ee, B.HunkAction.Accept);
					}
					discardHunk(ee) {
						return this.u?.performHunkAction(ee, B.HunkAction.Discard);
					}
					toggleDiff(ee) {
						return this.u?.performHunkAction(ee, B.HunkAction.ToggleDiff);
					}
					moveHunk(ee) {
						this.focus(),
							this.u?.performHunkAction(
								void 0,
								ee ? B.HunkAction.MoveNext : B.HunkAction.MovePrev,
							);
					}
					async cancelSession() {
						const ee = this.t?.chatModel.lastRequest?.response;
						ee &&
							this.D.notifyUserAction({
								sessionId: ee.session.sessionId,
								requestId: ee.requestId,
								agentId: ee.agent?.id,
								command: ee.slashCommand?.name,
								result: ee.result,
								action: { kind: "inlineChat", action: "discarded" },
							}),
							this.l.fire(W.CANCEL_SESSION);
					}
					finishExistingSession() {
						this.t &&
							(this.t.editMode === U.EditMode.Preview
								? (this.F(
										"finishing existing session, using CANCEL",
										this.t.editMode,
									),
									this.cancelSession())
								: (this.F(
										"finishing existing session, using APPLY",
										this.t.editMode,
									),
									this.acceptSession()));
					}
					reportIssue() {
						const ee = this.t?.chatModel.lastRequest?.response;
						ee &&
							this.D.notifyUserAction({
								sessionId: ee.session.sessionId,
								requestId: ee.requestId,
								agentId: ee.agent?.id,
								command: ee.slashCommand?.name,
								result: ee.result,
								action: { kind: "bug" },
							});
					}
					unstashLastSession() {
						const ee = this.s.value?.unstash();
						return ee && this.y.markChanged(ee), ee;
					}
					joinCurrentRun() {
						return this.H;
					}
					async reviewEdits(ee, _, te) {
						if (!this.v.hasModel()) return !1;
						const Q = await this.x.createSession(
							this.v,
							{ editMode: U.EditMode.Live, wholeRange: ee, headless: !0 },
							te,
						);
						if (!Q) return !1;
						const Z = Q.chatModel.addRequest(
								{ text: "DUMMY", parts: [] },
								{ variables: [] },
								0,
							),
							se = this.run({ existingSession: Q, headless: !0 });
						await d.Event.toPromise(
							d.Event.filter(this.n.event, (re) => re === J.SHOW_REQUEST),
						);
						for await (const re of _)
							Q.chatModel.acceptResponseProgress(Z, {
								kind: "textEdit",
								uri: this.v.getModel().uri,
								edits: [re],
							});
						return (
							te.isCancellationRequested
								? Q.chatModel.cancelRequest(Z)
								: Q.chatModel.completeResponse(Z),
							await se,
							!0
						);
					}
				});
				(e.$Z1b = Y),
					(e.$Z1b =
						Y =
						K =
							Ne(
								[
									j(1, P.$Li),
									j(2, q.$zLb),
									j(3, H.$X1b),
									j(4, s.$Cxb),
									j(5, k.$ik),
									j(6, S.$gj),
									j(7, T.$GO),
									j(8, I.$6j),
									j(9, N.$J2),
									j(10, F.$IY),
									j(11, z.$n5b),
								],
								Y,
							));
				async function ie(ne, ee) {
					const _ = ne.get(x.$HMb),
						te = ne.get(N.$J2),
						Q = await (0, L.$HYb)(_);
					if (Q && Q.viewModel && ee) {
						for (const Z of ee.getRequests().slice())
							await te.adoptRequest(Q.viewModel.model.sessionId, Z);
						Q.focusLastMessage();
					}
				}
			},
		),
		define(
			de[4082],
			he([
				1, 0, 33, 14, 27, 19, 56, 199, 65, 17, 71, 61, 69, 787, 4, 11, 121, 8,
				5, 43, 40, 84, 117, 130, 402, 208, 845, 207, 218, 283, 624, 70, 107, 18,
				85, 37, 120, 427, 24, 15,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$AIc = F),
					(e.$BIc = x),
					(e.$CIc = W),
					(e.$DIc = Y),
					(R = mt(R));
				function F(ie) {
					return (
						typeof ie == "object" &&
						ie !== null &&
						"code" in ie &&
						"element" in ie
					);
				}
				function x(ie) {
					return typeof ie == "object" && ie !== null && "element" in ie;
				}
				function H(ie) {
					return (
						(0, k.$$Tb)(ie.element) &&
						ie.element.errorDetails?.responseIsFiltered
					);
				}
				function q(ie) {
					return (0, k.$$Tb)(ie.element)
						? ie.element.usedContext?.documents
						: void 0;
				}
				class V extends g.$3X {
					run(ne, ...ee) {
						let _ = ee[0];
						if (!F(_)) {
							const te = ne.get(m.$dtb),
								Q = te.getFocusedCodeEditor() || te.getActiveCodeEditor();
							if (!Q || ((_ = X(Q, ne)), !F(_))) return;
						}
						return this.runWithContext(ne, _);
					}
				}
				class G extends V {
					async runWithContext(ne, ee) {
						const _ = ne.get(N.$IY),
							te = ne.get(A.$kZ);
						if (H(ee)) return;
						if (_.activeEditorPane?.getId() === D.$O6)
							return this.a(ne, _.activeEditorPane.getControl(), ee);
						let Q = _.activeTextEditorControl;
						if (
							((0, C.$$sb)(Q) &&
								(Q = Q.getOriginalEditor().hasTextFocus()
									? Q.getOriginalEditor()
									: Q.getModifiedEditor()),
							!(0, C.$0sb)(Q) || !Q.hasModel())
						)
							return;
						const Z = Q.getModel().uri,
							se = te.files.get(Z) ?? te.untitled.get(Z);
						!se || se.isReadonly() || (await this.d(ne, Q, ee));
					}
					async a(ne, ee, _) {
						if (!ee.hasModel() || ee.isReadOnly) return;
						if (ee.activeCodeEditor?.hasTextFocus()) {
							const re = ee.activeCodeEditor;
							if (re.hasModel()) return this.d(ne, re, _);
						}
						const te = ne.get(a.$nM),
							Q = ne.get(P.$J2),
							Z = ee.getFocus(),
							se = Math.max(Z.end - 1, 0);
						(0, L.$M5b)(te, ee, se, D.CellKind.Code, "below", _.code, !0),
							this.g(Q, _);
					}
					async b(ne, ee, _) {
						const te = ee.getModel(),
							Q =
								ee.getSelection() ??
								new r.$iL(te.getLineCount(), 1, te.getLineCount(), 1),
							Z = K(_.code, te, Q.startLineNumber);
						return { edits: [new d.$tzb(te.uri, { range: Q, text: Z })] };
					}
					get c() {
						return !1;
					}
					async d(ne, ee, _) {
						const te = ne.get(d.$rzb),
							Q = ne.get(m.$dtb),
							Z = ne.get(P.$J2),
							se = await this.b(ne, ee, _);
						if ((this.g(Z, _, se), this.c)) {
							if (!(await this.f(Q, se.edits, ee))) {
								await te.apply(se.edits, { showPreview: !0 });
								const le = ee.getModel();
								Q.listCodeEditors()
									.find(
										(oe) => oe.getModel()?.uri.toString() === le.uri.toString(),
									)
									?.focus();
							}
						} else {
							await te.apply(se.edits);
							const re = ee.getModel();
							Q.listCodeEditors()
								.find(
									(le) => le.getModel()?.uri.toString() === re.uri.toString(),
								)
								?.focus();
						}
					}
					async f(ne, ee, _) {
						const te = ee[0];
						if (!d.$tzb.is(te)) return !1;
						const Q = te.resource,
							Z = (0, U.$Lb)(
								ee.map((re) =>
									d.$tzb.is(re) && (0, E.$gh)(Q, re.resource)
										? re.textEdit
										: void 0,
								),
							);
						if (Z.length !== ee.length) return !1;
						const se = await ne.openCodeEditor({ resource: Q }, _);
						if (se) {
							const re = B.$Z1b.get(se);
							if (re) {
								const le = new t.$Ce();
								try {
									return await re.reviewEdits(
										Z[0].range,
										z.$ai.fromArray(Z),
										le.token,
									);
								} finally {
									le.dispose();
								}
							}
						}
						return !1;
					}
					g(ne, ee, _) {
						(0, k.$$Tb)(ee.element) &&
							ne.notifyUserAction({
								agentId: ee.element.agent?.id,
								command: ee.element.slashCommand?.name,
								sessionId: ee.element.sessionId,
								requestId: ee.element.requestId,
								result: ee.element.result,
								action: {
									kind: "insert",
									codeBlockIndex: ee.codeBlockIndex,
									totalCharacters: ee.code.length,
									userAction: this.desc.id,
									codeMapper: _?.codeMapper,
								},
							});
					}
				}
				function K(ie, ne, ee) {
					const _ = R.$zf(ie);
					if (_.length === 0) return ie;
					const te = ne.getFormattingOptions(),
						Q = J(ne.getLineContent(ee), te.tabSize).level,
						Z = _.map((le) => J(le, te.tabSize)),
						se = Z.reduce(
							(le, oe, ae) =>
								oe.length !== _[ae].length ? Math.min(oe.level, le) : le,
							Number.MAX_VALUE,
						);
					if (se === Number.MAX_VALUE || se === Q) return ie;
					const re = [];
					for (let le = 0; le < _.length; le++) {
						const { level: oe, length: ae } = Z[le],
							pe = Math.max(0, Q + oe - se),
							$e = te.insertSpaces
								? " ".repeat(te.tabSize * pe)
								: "	".repeat(pe);
						re.push($e + _[le].substring(ae));
					}
					return re.join(`
`);
				}
				function J(ie, ne) {
					let ee = 0,
						_ = 0,
						te = 0,
						Q = 0;
					const Z = ie.length;
					for (; te < Z; ) {
						const se = ie.charCodeAt(te);
						if (se === O.CharCode.Space)
							ee++, ee === ne && (_++, (ee = 0), (Q = te + 1));
						else if (se === O.CharCode.Tab) _++, (ee = 0), (Q = te + 1);
						else break;
						te++;
					}
					return { level: _, length: Q };
				}
				function W() {
					(0, g.$4X)(
						class extends g.$3X {
							constructor() {
								super({
									id: "workbench.action.chat.copyCodeBlock",
									title: (0, n.localize2)(4577, "Copy"),
									f1: !1,
									category: v.$3Yb,
									icon: i.$ak.copy,
									menu: {
										id: g.$XX.ChatCodeBlock,
										group: "navigation",
										order: 30,
									},
								});
							}
							run(_, ...te) {
								const Q = te[0];
								if (!F(Q) || H(Q)) return;
								_.get(p.$Vxb).writeText(Q.code),
									(0, k.$$Tb)(Q.element) &&
										_.get(P.$J2).notifyUserAction({
											agentId: Q.element.agent?.id,
											command: Q.element.slashCommand?.name,
											sessionId: Q.element.sessionId,
											requestId: Q.element.requestId,
											result: Q.element.result,
											action: {
												kind: "copy",
												codeBlockIndex: Q.codeBlockIndex,
												copyKind: P.ChatCopyKind.Toolbar,
												copiedCharacters: Q.code.length,
												totalCharacters: Q.code.length,
												copiedText: Q.code,
											},
										});
							}
						},
					),
						c.$BAb?.addImplementation(5e4, "chat-codeblock", (ee) => {
							const _ = ee.get(m.$dtb).getFocusedCodeEditor();
							if (!_) return !1;
							const te = _.getModel();
							if (!te) return !1;
							const Q = X(_, ee);
							if (!Q) return !1;
							const Z =
									_.getSelections()?.length === 1 &&
									_.getSelection()?.isEmpty(),
								se = Z
									? te.getValue()
									: (_.getSelections()?.reduce(
											(ae, pe) => ae + te.getValueInRange(pe),
											"",
										) ?? ""),
								re = te.getValueLength(),
								le = ee.get(P.$J2),
								oe = Q.element;
							return (
								oe &&
									le.notifyUserAction({
										agentId: oe.agent?.id,
										command: oe.slashCommand?.name,
										sessionId: oe.sessionId,
										requestId: oe.requestId,
										result: oe.result,
										action: {
											kind: "copy",
											codeBlockIndex: Q.codeBlockIndex,
											copyKind: P.ChatCopyKind.Action,
											copiedText: se,
											copiedCharacters: se.length,
											totalCharacters: re,
										},
									}),
								Z ? (ee.get(p.$Vxb).writeText(Q.code), !0) : !1
							);
						}),
						(0, g.$4X)(
							class extends G {
								constructor() {
									super({
										id: "workbench.action.chat.applyInEditor",
										title: (0, n.localize2)(4578, "Apply in Editor"),
										precondition: T.$51,
										f1: !0,
										category: v.$3Yb,
										icon: i.$ak.sparkle,
										menu: {
											id: g.$XX.ChatCodeBlock,
											group: "navigation",
											when: T.$41,
											order: 10,
										},
										keybinding: {
											when: o.$Kj.or(o.$Kj.and(T.$41, T.$31.negate()), $.$TLb),
											primary: w.KeyMod.CtrlCmd | w.KeyCode.Enter,
											mac: { primary: w.KeyMod.WinCtrl | w.KeyCode.Enter },
											weight: b.KeybindingWeight.ExternalExtension + 1,
										},
									});
								}
								async b(_, te, Q) {
									const Z = _.get(l.$8N),
										se = _.get(s.$4N),
										re = te.getModel(),
										le = _.get(h.$k3).mappedEditsProvider.ordered(re);
									if (le.length > 0) {
										const oe = [],
											ae = re.uri,
											pe = re.getVersionId(),
											$e = te.getSelections();
										$e.length > 0 &&
											oe.push([{ uri: ae, version: pe, ranges: $e }]);
										const ye = q(Q);
										ye && oe.push(ye);
										const ue = new t.$Ce();
										try {
											const fe = await Z.withProgress(
												{
													location: l.ProgressLocation.Notification,
													delay: 500,
													sticky: !0,
													cancellable: !0,
												},
												async (me) => {
													for (const ve of le) {
														me.report({
															message: (0, n.localize)(
																4575,
																null,
																ve.displayName,
															),
														});
														const ge = await ve.provideMappedEdits(
															re,
															[Q.code],
															{ documents: oe },
															ue.token,
														);
														if (ge)
															return {
																edits: ge.edits,
																codeMapper: ve.displayName,
															};
													}
												},
												() => ue.cancel(),
											);
											if (fe) return fe;
										} catch (fe) {
											se.notify({
												severity: s.Severity.Error,
												message: (0, n.localize)(4576, null, fe.message),
											});
										} finally {
											ue.dispose();
										}
									}
									return super.b(_, te, Q);
								}
								get c() {
									return !0;
								}
							},
						),
						(0, g.$4X)(
							class extends G {
								constructor() {
									super({
										id: "workbench.action.chat.insertCodeBlock",
										title: (0, n.localize2)(4579, "Insert At Cursor"),
										precondition: T.$51,
										f1: !0,
										category: v.$3Yb,
										icon: i.$ak.insert,
										menu: {
											id: g.$XX.ChatCodeBlock,
											group: "navigation",
											when: T.$41,
											order: 20,
										},
										keybinding: {
											when: o.$Kj.or(o.$Kj.and(T.$41, T.$31.negate()), $.$TLb),
											primary: w.KeyMod.CtrlCmd | w.KeyCode.Enter,
											mac: { primary: w.KeyMod.WinCtrl | w.KeyCode.Enter },
											weight: b.KeybindingWeight.ExternalExtension + 1,
										},
									});
								}
							},
						),
						(0, g.$4X)(
							class extends V {
								constructor() {
									super({
										id: "workbench.action.chat.insertIntoNewFile",
										title: (0, n.localize2)(4580, "Insert into New File"),
										precondition: T.$51,
										f1: !0,
										category: v.$3Yb,
										icon: i.$ak.newFile,
										menu: {
											id: g.$XX.ChatCodeBlock,
											group: "navigation",
											isHiddenByDefault: !0,
											order: 40,
										},
									});
								}
								async runWithContext(_, te) {
									if (H(te)) return;
									const Q = _.get(N.$IY),
										Z = _.get(P.$J2);
									Q.openEditor({
										contents: te.code,
										languageId: te.languageId,
										resource: void 0,
									}),
										(0, k.$$Tb)(te.element) &&
											Z.notifyUserAction({
												agentId: te.element.agent?.id,
												command: te.element.slashCommand?.name,
												sessionId: te.element.sessionId,
												requestId: te.element.requestId,
												result: te.element.result,
												action: {
													kind: "insert",
													codeBlockIndex: te.codeBlockIndex,
													totalCharacters: te.code.length,
													newFile: !0,
													userAction: this.desc.id,
												},
											});
								}
							},
						);
					const ie = [
						"fish",
						"ps1",
						"pwsh",
						"powershell",
						"sh",
						"shellscript",
						"zsh",
					];
					(0, g.$4X)(
						class extends V {
							constructor() {
								super({
									id: "workbench.action.chat.runInTerminal",
									title: (0, n.localize2)(4581, "Insert into Terminal"),
									precondition: T.$51,
									f1: !0,
									category: v.$3Yb,
									icon: i.$ak.terminal,
									menu: [
										{
											id: g.$XX.ChatCodeBlock,
											group: "navigation",
											when: o.$Kj.and(
												T.$41,
												o.$Kj.or(
													...ie.map((_) =>
														o.$Kj.equals(u.EditorContextKeys.languageId.key, _),
													),
												),
											),
										},
										{
											id: g.$XX.ChatCodeBlock,
											group: "navigation",
											isHiddenByDefault: !0,
											when: o.$Kj.and(
												T.$41,
												...ie.map((_) =>
													o.$Kj.notEquals(
														u.EditorContextKeys.languageId.key,
														_,
													),
												),
											),
										},
									],
									keybinding: [
										{
											primary:
												w.KeyMod.CtrlCmd | w.KeyMod.Alt | w.KeyCode.Enter,
											mac: {
												primary:
													w.KeyMod.WinCtrl | w.KeyMod.Alt | w.KeyCode.Enter,
											},
											weight: b.KeybindingWeight.EditorContrib,
											when: o.$Kj.or(T.$41, $.$TLb),
										},
									],
								});
							}
							async runWithContext(_, te) {
								if (H(te)) return;
								const Q = _.get(P.$J2),
									Z = _.get(M.$iIb),
									se = _.get(N.$IY),
									re = _.get(M.$kIb),
									le = _.get(M.$lIb);
								let oe = await Z.getActiveOrCreateInstance();
								if (
									((oe =
										oe.xterm?.isStdinDisabled ||
										oe.shellLaunchConfig.isFeatureTerminal
											? await Z.createTerminal()
											: oe),
									Z.setActiveInstance(oe),
									await oe.focusWhenReady(!0),
									oe.target === y.TerminalLocation.Editor)
								) {
									const pe = se.findEditors(oe.resource);
									re.openEditor(oe, { viewColumn: pe?.[0].groupId });
								} else le.showPanel(!0);
								oe.runCommand(te.code, !1),
									(0, k.$$Tb)(te.element) &&
										Q.notifyUserAction({
											agentId: te.element.agent?.id,
											command: te.element.slashCommand?.name,
											sessionId: te.element.sessionId,
											requestId: te.element.requestId,
											result: te.element.result,
											action: {
												kind: "runInTerminal",
												codeBlockIndex: te.codeBlockIndex,
												languageId: te.languageId,
											},
										});
							}
						},
					);
					function ne(ee, _) {
						const te = ee.get(m.$dtb),
							Z = ee.get(S.$GYb).lastFocusedWidget;
						if (!Z) return;
						const re = te.getFocusedCodeEditor()?.getModel()?.uri,
							le = re ? Z.getCodeBlockInfoForEditor(re) : void 0,
							oe = !Z.inputEditor.hasWidgetFocus() && Z.getFocus(),
							ae = (0, k.$$Tb)(oe) ? oe : void 0,
							pe = le
								? le.element
								: (ae ??
									Z.viewModel
										?.getItems()
										.reverse()
										.find((ue) => (0, k.$$Tb)(ue)));
						if (!pe || !(0, k.$$Tb)(pe)) return;
						Z.reveal(pe);
						const $e = Z.getCodeBlockInfosForResponse(pe),
							ye = le
								? (le.codeBlockIndex + (_ ? -1 : 1) + $e.length) % $e.length
								: _
									? $e.length - 1
									: 0;
						$e[ye]?.focus();
					}
					(0, g.$4X)(
						class extends g.$3X {
							constructor() {
								super({
									id: "workbench.action.chat.nextCodeBlock",
									title: (0, n.localize2)(4582, "Next Code Block"),
									keybinding: {
										primary:
											w.KeyMod.CtrlCmd | w.KeyMod.Alt | w.KeyCode.PageDown,
										mac: {
											primary:
												w.KeyMod.CtrlCmd | w.KeyMod.Alt | w.KeyCode.PageDown,
										},
										weight: b.KeybindingWeight.WorkbenchContrib,
										when: T.$41,
									},
									precondition: T.$51,
									f1: !0,
									category: v.$3Yb,
								});
							}
							run(_, ...te) {
								ne(_);
							}
						},
					),
						(0, g.$4X)(
							class extends g.$3X {
								constructor() {
									super({
										id: "workbench.action.chat.previousCodeBlock",
										title: (0, n.localize2)(4583, "Previous Code Block"),
										keybinding: {
											primary:
												w.KeyMod.CtrlCmd | w.KeyMod.Alt | w.KeyCode.PageUp,
											mac: {
												primary:
													w.KeyMod.CtrlCmd | w.KeyMod.Alt | w.KeyCode.PageUp,
											},
											weight: b.KeybindingWeight.WorkbenchContrib,
											when: T.$41,
										},
										precondition: T.$51,
										f1: !0,
										category: v.$3Yb,
									});
								}
								run(_, ...te) {
									ne(_, !0);
								}
							},
						);
				}
				function X(ie, ne) {
					const ee = ne.get(S.$GYb),
						_ = ne.get(S.$KYb),
						te = ie.getModel();
					if (!te) return;
					const Z = ee.lastFocusedWidget?.getCodeBlockInfoForEditor(te.uri);
					if (!Z) {
						for (const se of _.providers) {
							const re = se.getCodeBlockContext(ie);
							if (re) return re;
						}
						return;
					}
					return {
						element: Z.element,
						codeBlockIndex: Z.codeBlockIndex,
						code: ie.getValue(),
						languageId: ie.getModel().getLanguageId(),
					};
				}
				function Y() {
					class ie extends g.$3X {
						run(ee, ..._) {
							const te = _[0];
							if (x(te)) return this.runWithContext(ee, te);
						}
					}
					(0, g.$4X)(
						class extends ie {
							constructor() {
								super({
									id: "workbench.action.chat.applyCompareEdits",
									title: (0, n.localize2)(4584, "Apply Edits"),
									f1: !1,
									category: v.$3Yb,
									icon: i.$ak.check,
									precondition: o.$Kj.and(
										u.EditorContextKeys.hasChanges,
										T.$Z1.negate(),
									),
									menu: {
										id: g.$XX.ChatCompareBlock,
										group: "navigation",
										order: 1,
									},
								});
							}
							async runWithContext(ee, _) {
								const te = ee.get(N.$IY);
								await ee
									.get(f.$Li)
									.createInstance(I.$FYb)
									.apply(_.element, _.edit, _.diffEditor),
									await te.openEditor({
										resource: _.edit.uri,
										options: { revealIfVisible: !0 },
									});
							}
						},
					),
						(0, g.$4X)(
							class extends ie {
								constructor() {
									super({
										id: "workbench.action.chat.discardCompareEdits",
										title: (0, n.localize2)(4585, "Discard Edits"),
										f1: !1,
										category: v.$3Yb,
										icon: i.$ak.trash,
										precondition: o.$Kj.and(
											u.EditorContextKeys.hasChanges,
											T.$Z1.negate(),
										),
										menu: {
											id: g.$XX.ChatCompareBlock,
											group: "navigation",
											order: 2,
										},
									});
								}
								async runWithContext(ee, _) {
									ee.get(f.$Li)
										.createInstance(I.$FYb)
										.discard(_.element, _.edit);
								}
							},
						);
				}
			},
		),
		define(
			de[1358],
			he([1, 0, 14, 27, 65, 104, 4, 11, 43, 402, 208, 207, 427]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$o9b = void 0),
					(e.$p9b = c),
					(e.$o9b = "workbench.action.quickchat.toggle");
				function c() {
					(0, d.$4X)(n),
						(0, d.$4X)(g),
						(0, d.$4X)(
							class extends d.$3X {
								constructor() {
									super({
										id: "workbench.action.quickchat.openInChatView",
										title: (0, C.localize2)(4610, "Open in Chat View"),
										f1: !1,
										category: r.$3Yb,
										icon: t.$ak.commentDiscussion,
										menu: {
											id: d.$XX.ChatInputSide,
											group: "navigation",
											order: 10,
										},
									});
								}
								run(o) {
									o.get(u.$IYb).openInChatView();
								}
							},
						),
						(0, d.$4X)(
							class extends d.$3X {
								constructor() {
									super({
										id: "workbench.action.quickchat.close",
										title: (0, C.localize2)(4611, "Close Quick Chat"),
										f1: !1,
										category: r.$3Yb,
										icon: t.$ak.close,
										menu: {
											id: d.$XX.ChatInputSide,
											group: "navigation",
											order: 20,
										},
									});
								}
								run(o) {
									o.get(u.$IYb).close();
								}
							},
						),
						(0, d.$4X)(
							class extends d.$3X {
								constructor() {
									super({
										id: "workbench.action.quickchat.launchInlineChat",
										title: (0, C.localize2)(4612, "Launch Inline Chat"),
										f1: !1,
										category: r.$3Yb,
									});
								}
								async run(o) {
									const f = o.get(u.$IYb),
										b = o.get(w.$dtb);
									f.focused && f.close();
									const s = b.getActiveCodeEditor();
									if (!s) return;
									const l = h.$Z1b.get(s);
									l && (await l.run(), l.focus());
								}
							},
						);
				}
				class n extends d.$3X {
					constructor() {
						super({
							id: e.$o9b,
							title: (0, C.localize2)(4613, "Quick Chat"),
							precondition: a.$51,
							icon: t.$ak.commentDiscussion,
							f1: !1,
							category: r.$3Yb,
							keybinding: {
								weight: m.KeybindingWeight.WorkbenchContrib,
								primary: i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.KeyI,
								linux: {
									primary:
										i.KeyMod.CtrlCmd |
										i.KeyMod.Shift |
										i.KeyMod.Alt |
										i.KeyCode.KeyI,
								},
							},
							metadata: {
								description: (0, C.localize)(4606, null),
								args: [
									{
										name: "args",
										schema: {
											anyOf: [
												{
													type: "object",
													required: ["query"],
													properties: {
														query: {
															description: (0, C.localize)(4607, null),
															type: "string",
														},
														isPartialQuery: {
															description: (0, C.localize)(4608, null),
															type: "boolean",
														},
													},
												},
												{
													type: "string",
													description: (0, C.localize)(4609, null),
												},
											],
										},
									},
								],
							},
						});
					}
					run(o, f) {
						const b = o.get(u.$IYb);
						let s;
						switch (typeof f) {
							case "string":
								s = { query: f };
								break;
							case "object":
								s = f;
								break;
						}
						s?.query &&
							(s.selection = new E.$kL(
								1,
								s.query.length + 1,
								1,
								s.query.length + 1,
							)),
							b.toggle(s);
					}
				}
				class g extends d.$3X {
					constructor() {
						super({
							id: "workbench.action.openQuickChat",
							category: r.$3Yb,
							title: (0, C.localize2)(4614, "Open Quick Chat"),
							f1: !0,
						});
					}
					run(o, f) {
						o.get(u.$IYb).toggle(
							f
								? {
										query: f,
										selection: new E.$kL(1, f.length + 1, 1, f.length + 1),
									}
								: void 0,
						);
					}
				}
			},
		),
		define(
			de[4083],
			he([1, 0, 427, 257, 65, 8, 178, 94, 267, 130]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lJc = void 0);
				class u {
					constructor() {
						(this.priority = 100),
							(this.name = "inlineChat"),
							(this.when = E.$Kj.or(i.$XKb, i.$ZKb)),
							(this.type = C.AccessibleViewType.View);
					}
					getProvider(h) {
						const c = h.get(w.$dtb),
							n = c.getActiveCodeEditor() || c.getFocusedCodeEditor();
						if (!n) return;
						const g = t.$Z1b.get(n);
						if (!g) return;
						const p = g?.getMessage();
						if (p)
							return new C.$ILb(
								C.AccessibleViewProviderId.InlineChat,
								{ type: C.AccessibleViewType.View },
								() => (0, m.$Xib)(new d.$cl(p), !0),
								() => g.focus(),
								r.AccessibilityVerbositySettingId.InlineChat,
							);
					}
				}
				e.$lJc = u;
			},
		),
		define(
			de[1061],
			he([
				1, 0, 14, 27, 56, 46, 784, 281, 71, 427, 257, 4, 8, 5, 43, 18, 65, 91,
				31, 79, 131, 34, 218, 207,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iJc =
						e.$hJc =
						e.$gJc =
						e.$fJc =
						e.$eJc =
						e.$dJc =
						e.$cJc =
						e.$bJc =
						e.$aJc =
						e.$_Ic =
						e.$$Ic =
						e.$0Ic =
						e.$9Ic =
						e.$8Ic =
						e.$7Ic =
						e.$6Ic =
						e.$4Ic =
						e.$3Ic =
							void 0),
					(e.$5Ic = S),
					f.$fk.registerCommandAlias(
						"interactiveEditor.start",
						"inlineChat.start",
					),
					f.$fk.registerCommandAlias("interactive.acceptChanges", u.$cLb),
					(e.$3Ic = (0, a.localize2)(7085, "Start in Editor")),
					(e.$4Ic = (0, b.$$O)(
						"start-inline-chat",
						t.$ak.sparkle,
						(0, a.localize)(7076, null),
					));
				let v;
				function S(H) {
					v = H;
				}
				class I extends E.$ktb {
					constructor() {
						super({
							id: "inlineChat.start",
							title: e.$3Ic,
							category: P.category,
							f1: !0,
							precondition: h.$Kj.and(u.$VKb, m.EditorContextKeys.writable),
							keybinding: {
								when: m.EditorContextKeys.focus,
								weight: n.KeybindingWeight.WorkbenchContrib,
								primary: i.KeyMod.CtrlCmd | i.KeyCode.KeyI,
								secondary: [(0, i.$os)(i.$ps, i.KeyCode.KeyI)],
								mac: {
									primary: i.KeyMod.CtrlCmd | i.KeyCode.KeyI,
									secondary: [(0, i.$os)(i.$qs, i.KeyCode.KeyI)],
								},
							},
							icon: e.$4Ic,
						});
					}
					runEditorCommand(q, V, ...G) {
						const K = r.$Z1b.get(V);
						if (!K) return;
						v && q.get(c.$Li).invokeFunction(v, K, this);
						let J;
						const W = G[0];
						W && r.$Y1b.isInlineChatRunOptions(W) && (J = W),
							r.$Z1b.get(V)?.run({ ...J });
					}
				}
				e.$6Ic = I;
				class T extends E.$ktb {
					constructor() {
						super({
							id: "inlineChat.unstash",
							title: (0, a.localize2)(
								7086,
								"Resume Last Dismissed Inline Chat",
							),
							category: P.category,
							precondition: h.$Kj.and(u.$7Kb, m.EditorContextKeys.writable),
							keybinding: {
								weight: n.KeybindingWeight.WorkbenchContrib,
								primary: i.KeyMod.CtrlCmd | i.KeyCode.KeyZ,
							},
						});
					}
					async runEditorCommand(q, V, ...G) {
						const K = r.$Z1b.get(V);
						if (K) {
							const J = K.unstashLastSession();
							J && K.run({ existingSession: J, isUnstashed: !0 });
						}
					}
				}
				e.$7Ic = T;
				class P extends E.$ktb {
					static {
						this.category = (0, a.localize2)(7087, "Inline Chat");
					}
					constructor(q) {
						super({
							...q,
							category: P.category,
							precondition: h.$Kj.and(u.$VKb, q.precondition),
						});
					}
					runEditorCommand(q, V, ...G) {
						const K = q.get(g.$IY),
							J = q.get(l.$ik);
						let W = r.$Z1b.get(V);
						if (!W) {
							const { activeTextEditorControl: X } = K;
							(0, w.$0sb)(X)
								? (V = X)
								: (0, w.$$sb)(X) && (V = X.getModifiedEditor()),
								(W = r.$Z1b.get(V));
						}
						if (!W) {
							J.warn(
								"[IE] NO controller found for action",
								this.desc.id,
								V.getModel()?.uri,
							);
							return;
						}
						if ((V instanceof d.$wDb && (V = V.getParentEditor()), !W)) {
							for (const X of q.get(p.$dtb).listDiffEditors())
								(X.getOriginalEditor() === V || X.getModifiedEditor() === V) &&
									X instanceof C.$7mc &&
									this.runEditorCommand(q, X.getParentEditor(), ...G);
							return;
						}
						this.runInlineChatCommand(q, W, V, ...G);
					}
				}
				e.$8Ic = P;
				class k extends P {
					constructor() {
						super({
							id: "inlineChat.arrowOutUp",
							title: (0, a.localize)(7077, null),
							precondition: h.$Kj.and(
								u.$XKb,
								u.$2Kb,
								m.EditorContextKeys.isEmbeddedDiffEditor.negate(),
								o.$YK.negate(),
							),
							keybinding: {
								weight: n.KeybindingWeight.EditorCore,
								primary: i.KeyMod.CtrlCmd | i.KeyCode.UpArrow,
							},
						});
					}
					runInlineChatCommand(q, V, G, ...K) {
						V.arrowOut(!0);
					}
				}
				e.$9Ic = k;
				class L extends P {
					constructor() {
						super({
							id: "inlineChat.arrowOutDown",
							title: (0, a.localize)(7078, null),
							precondition: h.$Kj.and(
								u.$XKb,
								u.$3Kb,
								m.EditorContextKeys.isEmbeddedDiffEditor.negate(),
								o.$YK.negate(),
							),
							keybinding: {
								weight: n.KeybindingWeight.EditorCore,
								primary: i.KeyMod.CtrlCmd | i.KeyCode.DownArrow,
							},
						});
					}
					runInlineChatCommand(q, V, G, ...K) {
						V.arrowOut(!1);
					}
				}
				e.$0Ic = L;
				class D extends E.$ktb {
					constructor() {
						super({
							id: "inlineChat.focus",
							title: (0, a.localize2)(7088, "Focus Input"),
							f1: !0,
							category: P.category,
							precondition: h.$Kj.and(
								m.EditorContextKeys.editorTextFocus,
								u.$WKb,
								u.$XKb.negate(),
								o.$YK.negate(),
							),
							keybinding: [
								{
									weight: n.KeybindingWeight.EditorCore + 10,
									when: h.$Kj.and(
										u.$6Kb.isEqualTo("above"),
										m.EditorContextKeys.isEmbeddedDiffEditor.negate(),
									),
									primary: i.KeyMod.CtrlCmd | i.KeyCode.DownArrow,
								},
								{
									weight: n.KeybindingWeight.EditorCore + 10,
									when: h.$Kj.and(
										u.$6Kb.isEqualTo("below"),
										m.EditorContextKeys.isEmbeddedDiffEditor.negate(),
									),
									primary: i.KeyMod.CtrlCmd | i.KeyCode.UpArrow,
								},
							],
						});
					}
					runEditorCommand(q, V, ...G) {
						r.$Z1b.get(V)?.focus();
					}
				}
				e.$$Ic = D;
				class M extends P {
					constructor() {
						super({
							id: "inlineChat.discard",
							title: (0, a.localize)(7079, null),
							icon: t.$ak.discard,
							precondition: u.$WKb,
							keybinding: {
								weight: n.KeybindingWeight.EditorContrib - 1,
								primary: i.KeyCode.Escape,
								when: u.$8Kb.negate(),
							},
						});
					}
					async runInlineChatCommand(q, V, G, ...K) {
						await V.cancelSession();
					}
				}
				e.$_Ic = M;
				class N extends P {
					constructor() {
						super({
							id: u.$cLb,
							title: (0, a.localize2)(7089, "Accept Changes"),
							shortTitle: (0, a.localize)(7080, null),
							icon: t.$ak.check,
							f1: !0,
							precondition: h.$Kj.and(
								u.$WKb,
								h.$Kj.or(
									u.$9Kb.toNegated(),
									u.$_Kb.notEqualsTo(u.EditMode.Preview),
								),
							),
							keybinding: [
								{
									weight: n.KeybindingWeight.WorkbenchContrib + 10,
									primary: i.KeyMod.CtrlCmd | i.KeyCode.Enter,
								},
							],
							menu: [
								{
									id: u.$jLb,
									group: "0_main",
									order: 1,
									when: h.$Kj.and(
										$.$11.toNegated(),
										u.$aLb.toNegated(),
										u.$bLb.isEqualTo(u.InlineChatResponseType.MessagesAndEdits),
									),
								},
								{ id: u.$lLb, group: "navigation", order: 1 },
							],
						});
					}
					async runInlineChatCommand(q, V, G, K) {
						V.acceptHunk(K);
					}
				}
				e.$aJc = N;
				class A extends P {
					constructor() {
						super({
							id: u.$dLb,
							title: (0, a.localize)(7081, null),
							icon: t.$ak.chromeClose,
							precondition: u.$WKb,
							menu: [
								{
									id: u.$jLb,
									group: "0_main",
									order: 2,
									when: h.$Kj.and(
										$.$11.toNegated(),
										u.$aLb.negate(),
										u.$bLb.isEqualTo(u.InlineChatResponseType.MessagesAndEdits),
										u.$_Kb.isEqualTo(u.EditMode.Live),
									),
								},
								{ id: u.$lLb, group: "navigation", order: 2 },
							],
							keybinding: {
								weight: n.KeybindingWeight.WorkbenchContrib,
								primary: i.KeyCode.Escape,
								when: u.$bLb.isEqualTo(
									u.InlineChatResponseType.MessagesAndEdits,
								),
							},
						});
					}
					async runInlineChatCommand(q, V, G, K) {
						return V.discardHunk(K);
					}
				}
				e.$bJc = A;
				class R extends P {
					constructor() {
						super({
							id: u.$eLb,
							title: (0, a.localize2)(7090, "Rerun Request"),
							shortTitle: (0, a.localize)(7082, null),
							f1: !1,
							icon: t.$ak.refresh,
							precondition: u.$WKb,
							menu: {
								id: u.$jLb,
								group: "0_main",
								order: 5,
								when: h.$Kj.and(
									$.$11.toNegated(),
									u.$aLb.negate(),
									u.$bLb.notEqualsTo(u.InlineChatResponseType.None),
								),
							},
							keybinding: {
								weight: n.KeybindingWeight.WorkbenchContrib,
								primary: i.KeyMod.CtrlCmd | i.KeyCode.KeyR,
							},
						});
					}
					async runInlineChatCommand(q, V, G, ...K) {
						const J = q.get(y.$J2),
							X = V.chatWidget.viewModel?.model?.getRequests().at(-1);
						X &&
							(await J.resendRequest(X, {
								noCommandDetection: !1,
								attempt: X.attempt + 1,
								location: V.chatWidget.location,
							}));
					}
				}
				e.$cJc = R;
				class O extends P {
					constructor() {
						super({
							id: "inlineChat.close",
							title: (0, a.localize)(7083, null),
							icon: t.$ak.close,
							precondition: u.$WKb,
							keybinding: {
								weight: n.KeybindingWeight.WorkbenchContrib,
								primary: i.KeyCode.Escape,
							},
							menu: [
								{ id: u.$iLb, group: "0_main", order: 10 },
								{
									id: u.$jLb,
									group: "0_main",
									order: 1,
									when: h.$Kj.and(
										u.$aLb.negate(),
										h.$Kj.or(
											u.$bLb.isEqualTo(u.InlineChatResponseType.Messages),
											u.$_Kb.isEqualTo(u.EditMode.Preview),
										),
									),
								},
							],
						});
					}
					async runInlineChatCommand(q, V, G, ...K) {
						V.cancelSession();
					}
				}
				e.$dJc = O;
				class B extends P {
					constructor() {
						super({
							id: "inlineChat.configure",
							title: (0, a.localize2)(7091, "Configure Inline Chat"),
							icon: t.$ak.settingsGear,
							precondition: u.$WKb,
							f1: !0,
							menu: { id: u.$jLb, group: "zzz", order: 5 },
						});
					}
					async runInlineChatCommand(q, V, G, ...K) {
						q.get(s.$7Z).openSettings({ query: "inlineChat" });
					}
				}
				e.$eJc = B;
				class U extends P {
					constructor() {
						super({
							id: "inlineChat.moveToNextHunk",
							title: (0, a.localize2)(7092, "Move to Next Change"),
							precondition: u.$WKb,
							f1: !0,
							keybinding: {
								weight: n.KeybindingWeight.WorkbenchContrib,
								primary: i.KeyCode.F7,
							},
						});
					}
					runInlineChatCommand(q, V, G, ...K) {
						V.moveHunk(!0);
					}
				}
				e.$fJc = U;
				class z extends P {
					constructor() {
						super({
							id: "inlineChat.moveToPreviousHunk",
							title: (0, a.localize2)(7093, "Move to Previous Change"),
							f1: !0,
							precondition: u.$WKb,
							keybinding: {
								weight: n.KeybindingWeight.WorkbenchContrib,
								primary: i.KeyMod.Shift | i.KeyCode.F7,
							},
						});
					}
					runInlineChatCommand(q, V, G, ...K) {
						V.moveHunk(!1);
					}
				}
				e.$gJc = z;
				class F extends P {
					constructor() {
						super({
							id: u.$fLb,
							title: (0, a.localize)(7084, null),
							icon: t.$ak.commentDiscussion,
							precondition: u.$WKb,
							menu: [
								{
									id: u.$jLb,
									group: "more",
									order: 1,
									when: u.$bLb.notEqualsTo(u.InlineChatResponseType.Messages),
								},
								{
									id: u.$jLb,
									group: "0_main",
									order: 1,
									when: h.$Kj.and(
										$.$11.toNegated(),
										u.$bLb.isEqualTo(u.InlineChatResponseType.Messages),
										u.$aLb.negate(),
									),
								},
							],
							keybinding: {
								weight: n.KeybindingWeight.WorkbenchContrib,
								primary: i.KeyMod.CtrlCmd | i.KeyCode.DownArrow,
								when: $.$31,
							},
						});
					}
					runInlineChatCommand(q, V, G, ...K) {
						return V.viewInChat();
					}
				}
				e.$hJc = F;
				class x extends P {
					constructor() {
						super({
							id: u.$gLb,
							precondition: h.$Kj.and(
								u.$WKb,
								u.$_Kb.isEqualTo(u.EditMode.Live),
								u.$0Kb,
							),
							title: (0, a.localize2)(7094, "Toggle Changes"),
							icon: t.$ak.diffSingle,
							toggled: { condition: u.$$Kb },
							menu: [
								{
									id: u.$jLb,
									group: "zzz",
									when: h.$Kj.and(u.$_Kb.isEqualTo(u.EditMode.Live)),
									order: 1,
								},
								{ id: u.$lLb, group: "navigation", when: u.$0Kb, order: 2 },
							],
						});
					}
					runInlineChatCommand(q, V, G, K) {
						V.toggleDiff(K);
					}
				}
				e.$iJc = x;
			},
		),
		define(
			de[4084],
			he([1, 0, 3, 248, 4, 8, 153, 427, 257, 46, 188, 17, 48, 1061, 71]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pJc = e.$oJc = e.$nJc = void 0),
					(e.$nJc = new E.$5j(
						"inlineChatExpansion",
						!1,
						(0, w.localize)(7101, null),
					));
				let g = class {
					static {
						this.Id = "editor.inlineChatExpansion";
					}
					constructor(f, b, s) {
						(this.a = new t.$Zc()),
							(this.b = this.a.add(new t.$2c())),
							(this.c = e.$nJc.bindTo(b));
						const l = () => {
							f.hasModel() && s.getAgents().length > 0 ? this.f(f) : this.g();
						};
						this.a.add(s.onDidChangeAgents(l)),
							this.a.add(f.onDidChangeModel(l)),
							l();
					}
					dispose() {
						this.c.reset(), this.a.dispose();
					}
					f(f) {
						const b = new t.$Zc();
						this.b.value = b;
						const s = f.getModel(),
							l = [];
						b.add(
							f.onDidChangeCursorPosition((y) => {
								let $ = !1;
								if (y.reason === i.CursorChangeReason.NotSet) {
									const v = f.getPosition(),
										S = s.getOffsetAt(v),
										I = s.getLineLength(v.lineNumber);
									s.getLineFirstNonWhitespaceColumn(v.lineNumber) !== 0 &&
										v.column > I &&
										l.includes(S) &&
										($ = !0);
								}
								(l.length = 0), this.c.set($);
							}),
						),
							b.add(
								f.onDidChangeModelContent((y) => {
									l.length = 0;
									for (const $ of y.changes) {
										const v = $.rangeOffset + $.text.length;
										l.push(v);
									}
									queueMicrotask(() => {
										l.length > 0 && this.c.set(!1);
									});
								}),
							);
					}
					g() {
						this.b.clear();
					}
				};
				(e.$oJc = g), (e.$oJc = g = Ne([j(1, E.$6j), j(2, C.$c3)], g));
				class p extends r.$ktb {
					constructor() {
						super({
							id: "inlineChat.startWithCurrentLine",
							category: c.$8Ic.category,
							title: (0, w.localize2)(
								7102,
								"Start in Editor with Current Line",
							),
							f1: !0,
							precondition: E.$Kj.and(
								m.$WKb.negate(),
								m.$VKb,
								n.EditorContextKeys.writable,
							),
						});
					}
					async runEditorCommand(f, b) {
						const s = d.$Z1b.get(b);
						if (!s || !b.hasModel()) return;
						const l = b.getModel(),
							y = b.getSelection().positionLineNumber,
							$ = l.getLineContent(y),
							v = l.getLineFirstNonWhitespaceColumn(y),
							S = l.getLineMaxColumn(y);
						let I = [];
						l.pushEditOperations(
							null,
							[u.$jL.replace(new a.$iL(y, v, y, S), "")],
							(k) => ((I = k), null),
						);
						let T;
						const P = s.onDidEnterState((k) => (T = k));
						try {
							await s.run({
								autoSend: !0,
								message: $.trim(),
								position: new h.$hL(y, v),
							});
						} finally {
							P.dispose();
						}
						T === d.State.CANCEL && l.pushEditOperations(null, I, () => null);
					}
				}
				e.$pJc = p;
			},
		),
		define(
			de[4085],
			he([
				1, 0, 15, 3, 56, 4, 10, 44, 798, 257, 66, 18, 170, 85, 103, 23, 70, 108,
				37, 336, 34, 6, 427,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kJc = void 0);
				let $ = class {
					constructor(S, I, T, P, k, L, D, M) {
						(this.g = S),
							(this.h = I),
							(this.i = T),
							(this.j = P),
							(this.k = k),
							(this.l = L),
							(this.m = D),
							(this.n = M),
							(this.c = new i.$Zc()),
							(this.d = this.c.add(new i.$2c())),
							(this.f = new Map()),
							this.c.add(
								l.Event.any(
									k.onDidEndSession,
									k.onDidStashSession,
								)((N) => {
									this.f.get(N.session)?.dispose();
								}),
							);
					}
					dispose() {
						this.c.dispose(), (0, i.$Vc)(this.f.values());
					}
					markChanged(S) {
						if (!this.f.has(S)) {
							let I = S.targetUri;
							if (I.scheme === g.Schemas.vscodeNotebookCell) {
								const P = p.CellUri.parse(I);
								if (!P) return;
								I = P?.notebook;
							}
							this.f.size === 0 && this.o();
							const T = this.g.disableAutoSave(I);
							this.f.set(S, {
								resourceUri: I,
								groupCandidate: this.h.activeGroup,
								session: S,
								dispose: () => {
									T.dispose(),
										this.f.delete(S),
										this.f.size === 0 && this.d.clear();
								},
							});
						}
					}
					o() {
						const S = new t.$Th(),
							I = this.i.files.addSaveParticipant({
								participate: (P, k, L, D) =>
									S.queue(() =>
										this.p(
											k.savedFrom ?? P.textEditorModel?.uri,
											k.reason,
											L,
											D,
										),
									),
							}),
							T = this.m.addSaveParticipant({
								participate: (P, k, L, D) =>
									S.queue(() =>
										this.p(k.savedFrom ?? P.resource, k.reason, L, D),
									),
							});
						this.d.value = (0, i.$Xc)(I, T, S);
					}
					async p(S, I, T, P) {
						if (
							I !== d.SaveReason.EXPLICIT ||
							!this.l.getValue(
								r.InlineChatConfigKeys.AcceptedOrDiscardBeforeSave,
							)
						)
							return;
						const k = new Map();
						for (const [A, R] of this.f)
							S?.toString() === R.resourceUri.toString() && k.set(A, R);
						if (k.size === 0) return;
						T.report({
							message:
								k.size === 1
									? (0, E.localize)(7103, null)
									: (0, E.localize)(7104, null, k.size),
						});
						const { groups: L, orphans: D } = this.q(k.values()),
							M = this.r(L, P).then(() => {
								if (!P.isCancellationRequested)
									return this.r(
										n.Iterable.map(D, (A) => [this.h.activeGroup, A]),
										P,
									);
							}),
							N = this.t(
								n.Iterable.concat(
									L.map((A) => A[1]),
									D,
								),
								P,
							);
						await Promise.race([N, M]);
					}
					q(S) {
						const I = new Map();
						for (const k of this.h.getGroups(
							u.GroupsOrder.MOST_RECENTLY_ACTIVE,
						)) {
							const L = k.activeEditorPane?.getControl();
							(0, w.$0sb)(L) && I.set(L, k);
						}
						const T = [],
							P = new Set();
						for (const k of S) {
							const L = this.k.getCodeEditor(k.session),
								D = I.get(L);
							D
								? T.push([D, k])
								: this.h.groups.includes(k.groupCandidate)
									? T.push([k.groupCandidate, k])
									: P.add(k);
						}
						return { groups: T, orphans: P };
					}
					async r(S, I) {
						const T = new Map();
						for (const [P, k] of S) {
							let L = T.get(P);
							L || ((L = []), T.set(P, L)), L.push(k);
						}
						for (const [P, k] of T) {
							if (I.isCancellationRequested) break;
							k.sort((L, D) =>
								(0, f.$Ff)(
									L.session.targetUri.toString(),
									D.session.targetUri.toString(),
								),
							);
							for (const L of k) {
								const D = { resource: L.resourceUri },
									M = await this.j.openEditor(D, P);
								let N;
								if (
									L.session.targetUri.scheme === g.Schemas.vscodeNotebookCell
								) {
									const A = (0, o.$eJb)(M),
										R = p.CellUri.parse(L.session.targetUri);
									if (A && A.hasModel() && R) {
										const O = A.getCellByHandle(R.handle);
										O &&
											(await A.revealRangeInCenterIfOutsideViewportAsync(
												O,
												L.session.wholeRange.value,
											)),
											(N = A.codeEditors.find(
												(U) =>
													U[1].getModel()?.uri.toString() ===
													L.session.targetUri.toString(),
											)?.[1]);
									}
								} else (0, w.$0sb)(M?.getControl()) && (N = M.getControl());
								if (!N) break;
								this.k.moveSession(L.session, N),
									y.$Z1b.get(N)?.showSaveHint(),
									this.n.info(
										"WAIT for session to end",
										N.getId(),
										L.session.targetUri.toString(),
									),
									await this.t(n.Iterable.single(L), I);
							}
						}
					}
					async t(S, I) {
						const T = new Map();
						for (const L of S) T.set(L.session, L);
						if (T.size === 0) return;
						let P;
						const k = new Promise((L) => {
							P = l.Event.any(
								this.k.onDidEndSession,
								this.k.onDidStashSession,
							)((D) => {
								const M = T.get(D.session);
								M && (M.dispose(), T.delete(D.session), T.size === 0 && L());
							});
						});
						try {
							await (0, t.$Ah)(k, I);
						} finally {
							P?.dispose();
						}
					}
				};
				(e.$kJc = $),
					(e.$kJc = $ =
						Ne(
							[
								j(0, h.$_Y),
								j(1, u.$EY),
								j(2, c.$kZ),
								j(3, a.$IY),
								j(4, m.$zLb),
								j(5, C.$gj),
								j(6, b.$iZ),
								j(7, s.$ik),
							],
							$,
						));
			},
		),
		define(
			de[1956],
			he([
				1, 0, 15, 27, 46, 71, 4, 91, 11, 81, 8, 179, 43, 30, 427, 688, 238, 108,
				70, 176,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ZFc = void 0);
				const s = "notebook.focusTop",
					l = "notebook.focusBottom",
					y = "notebook.focusPreviousEditor",
					$ = "notebook.focusNextEditor",
					v = "notebook.cell.focusInOutput",
					S = "notebook.cell.focusOutOutput";
				e.$ZFc = "notebook.centerActiveCell";
				const I = "notebook.cell.cursorPageUp",
					T = "notebook.cell.cursorPageUpSelect",
					P = "notebook.cell.cursorPageDown",
					k = "notebook.cell.cursorPageDownSelect";
				(0, m.$4X)(
					class extends m.$3X {
						constructor() {
							super({
								id: "notebook.cell.nullAction",
								title: (0, C.localize)(7781, null),
								keybinding: [
									{
										when: b.$sJb,
										primary: i.KeyCode.DownArrow,
										weight: h.KeybindingWeight.WorkbenchContrib + 1,
									},
									{
										when: b.$sJb,
										primary: i.KeyCode.UpArrow,
										weight: h.KeybindingWeight.WorkbenchContrib + 1,
									},
								],
								f1: !1,
							});
						}
						run() {}
					},
				),
					(0, m.$4X)(
						class extends p.$z5b {
							constructor() {
								super({
									id: $,
									title: (0, C.localize)(7782, null),
									keybinding: [
										{
											when: u.$Kj.and(
												b.$pJb,
												d.$YK.negate(),
												u.$Kj.equals(
													"config.notebook.navigation.allowNavigateToSurroundingCells",
													!0,
												),
												u.$Kj.and(
													u.$Kj.has(a.$aMb),
													E.EditorContextKeys.editorTextFocus,
													f.$16.notEqualsTo("top"),
													f.$16.notEqualsTo("none"),
												),
												E.EditorContextKeys.isEmbeddedDiffEditor.negate(),
											),
											primary: i.KeyCode.DownArrow,
											weight: p.$s5b,
										},
										{
											when: u.$Kj.and(
												b.$pJb,
												d.$YK.negate(),
												u.$Kj.equals(
													"config.notebook.navigation.allowNavigateToSurroundingCells",
													!0,
												),
												u.$Kj.and(
													b.$CJb.isEqualTo("markup"),
													b.$GJb.isEqualTo(!1),
													b.$zJb,
												),
												E.EditorContextKeys.isEmbeddedDiffEditor.negate(),
											),
											primary: i.KeyCode.DownArrow,
											weight: h.KeybindingWeight.WorkbenchContrib,
										},
										{
											when: u.$Kj.and(b.$pJb, b.$rJb),
											primary: i.KeyMod.CtrlCmd | i.KeyCode.DownArrow,
											mac: {
												primary:
													i.KeyMod.WinCtrl |
													i.KeyMod.CtrlCmd |
													i.KeyCode.DownArrow,
											},
											weight: h.KeybindingWeight.WorkbenchContrib,
										},
										{
											when: u.$Kj.and(b.$FJb, d.$YK),
											primary: i.KeyMod.CtrlCmd | i.KeyCode.PageDown,
											mac: { primary: i.KeyMod.WinCtrl | i.KeyCode.PageUp },
											weight: h.KeybindingWeight.WorkbenchContrib + 1,
										},
									],
								});
							}
							async runWithContext(M, N) {
								const A = N.notebookEditor,
									R = N.cell,
									O = A.getCellIndex(R);
								if (typeof O != "number" || O >= A.getLength() - 1) return;
								const B = R.textBuffer.getLineCount(),
									U = N.cell ?? N.selectedCells?.[0],
									z = U ? (0, p.$w5b)(N, U) : void 0;
								if (
									z &&
									z.hasTextFocus() &&
									n.$Z1b.get(z)?.getWidgetPosition()?.lineNumber === B
								)
									n.$Z1b.get(z)?.focus();
								else {
									const F = A.cellAt(O + 1),
										x =
											F.cellKind === f.CellKind.Markup &&
											F.getEditState() === o.CellEditState.Preview
												? "container"
												: "editor";
									await A.focusNotebookCell(F, x, { focusEditorLine: 1 });
								}
							}
						},
					),
					(0, m.$4X)(
						class extends p.$z5b {
							constructor() {
								super({
									id: y,
									title: (0, C.localize)(7783, null),
									keybinding: [
										{
											when: u.$Kj.and(
												b.$pJb,
												d.$YK.negate(),
												u.$Kj.equals(
													"config.notebook.navigation.allowNavigateToSurroundingCells",
													!0,
												),
												u.$Kj.and(
													u.$Kj.has(a.$aMb),
													E.EditorContextKeys.editorTextFocus,
													f.$16.notEqualsTo("bottom"),
													f.$16.notEqualsTo("none"),
												),
												E.EditorContextKeys.isEmbeddedDiffEditor.negate(),
											),
											primary: i.KeyCode.UpArrow,
											weight: p.$s5b,
										},
										{
											when: u.$Kj.and(
												b.$pJb,
												d.$YK.negate(),
												u.$Kj.equals(
													"config.notebook.navigation.allowNavigateToSurroundingCells",
													!0,
												),
												u.$Kj.and(
													b.$CJb.isEqualTo("markup"),
													b.$GJb.isEqualTo(!1),
													b.$zJb,
												),
												E.EditorContextKeys.isEmbeddedDiffEditor.negate(),
											),
											primary: i.KeyCode.UpArrow,
											weight: h.KeybindingWeight.WorkbenchContrib,
										},
										{
											when: u.$Kj.and(b.$FJb, d.$YK),
											primary: i.KeyMod.CtrlCmd | i.KeyCode.PageUp,
											mac: { primary: i.KeyMod.WinCtrl | i.KeyCode.PageUp },
											weight: h.KeybindingWeight.WorkbenchContrib + 1,
										},
									],
								});
							}
							async runWithContext(M, N) {
								const A = N.notebookEditor,
									R = N.cell,
									O = A.getCellIndex(R);
								if (typeof O != "number" || O < 1 || A.getLength() === 0)
									return;
								const B = A.cellAt(O - 1),
									U =
										B.cellKind === f.CellKind.Markup &&
										B.getEditState() === o.CellEditState.Preview
											? "container"
											: "editor",
									z = B.textBuffer.getLineCount();
								await A.focusNotebookCell(B, U, { focusEditorLine: z });
								const F = (0, p.$w5b)(N, B);
								F &&
									n.$Z1b.get(F)?.getWidgetPosition()?.lineNumber === z &&
									n.$Z1b.get(F)?.focus();
							}
						},
					),
					(0, m.$4X)(
						class extends p.$x5b {
							constructor() {
								super({
									id: s,
									title: (0, C.localize)(7784, null),
									keybinding: [
										{
											when: u.$Kj.and(b.$pJb, u.$Kj.not(a.$aMb)),
											primary: i.KeyMod.CtrlCmd | i.KeyCode.Home,
											weight: h.KeybindingWeight.WorkbenchContrib,
										},
										{
											when: u.$Kj.and(
												b.$pJb,
												u.$Kj.not(a.$aMb),
												g.$r1b.isEqualTo(""),
											),
											mac: { primary: i.KeyMod.CtrlCmd | i.KeyCode.UpArrow },
											weight: h.KeybindingWeight.WorkbenchContrib,
										},
									],
								});
							}
							async runWithContext(D, M) {
								const N = M.notebookEditor;
								if (N.getLength() === 0) return;
								const A = N.cellAt(0);
								await N.focusNotebookCell(A, "container");
							}
						},
					),
					(0, m.$4X)(
						class extends p.$x5b {
							constructor() {
								super({
									id: l,
									title: (0, C.localize)(7785, null),
									keybinding: [
										{
											when: u.$Kj.and(b.$pJb, u.$Kj.not(a.$aMb)),
											primary: i.KeyMod.CtrlCmd | i.KeyCode.End,
											mac: void 0,
											weight: h.KeybindingWeight.WorkbenchContrib,
										},
										{
											when: u.$Kj.and(
												b.$pJb,
												u.$Kj.not(a.$aMb),
												g.$r1b.isEqualTo(""),
											),
											mac: { primary: i.KeyMod.CtrlCmd | i.KeyCode.DownArrow },
											weight: h.KeybindingWeight.WorkbenchContrib,
										},
									],
								});
							}
							async runWithContext(D, M) {
								const N = M.notebookEditor;
								if (!N.hasModel() || N.getLength() === 0) return;
								const A = N.getLength() - 1,
									R = N.getPreviousVisibleCellIndex(A);
								if (R) {
									const O = N.cellAt(R);
									await N.focusNotebookCell(O, "container");
								}
							}
						},
					),
					(0, m.$4X)(
						class extends p.$z5b {
							constructor() {
								super({
									id: v,
									title: (0, C.localize)(7786, null),
									keybinding: {
										when: u.$Kj.and(b.$pJb, b.$KJb),
										primary: i.KeyMod.CtrlCmd | i.KeyCode.DownArrow,
										mac: {
											primary:
												i.KeyMod.WinCtrl |
												i.KeyMod.CtrlCmd |
												i.KeyCode.DownArrow,
										},
										weight: h.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							async runWithContext(D, M) {
								const N = M.notebookEditor,
									A = M.cell;
								return (0, t.$Nh)(0).then(() =>
									N.focusNotebookCell(A, "output"),
								);
							}
						},
					),
					(0, m.$4X)(
						class extends p.$z5b {
							constructor() {
								super({
									id: S,
									title: (0, C.localize)(7787, null),
									keybinding: {
										when: u.$Kj.and(b.$pJb, b.$rJb),
										primary: i.KeyMod.CtrlCmd | i.KeyCode.UpArrow,
										mac: {
											primary:
												i.KeyMod.WinCtrl | i.KeyMod.CtrlCmd | i.KeyCode.UpArrow,
										},
										weight: h.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							async runWithContext(D, M) {
								const N = M.notebookEditor,
									A = M.cell;
								await N.focusNotebookCell(A, "editor");
							}
						},
					),
					(0, m.$4X)(
						class extends p.$z5b {
							constructor() {
								super({
									id: e.$ZFc,
									title: (0, C.localize)(7788, null),
									keybinding: {
										when: b.$pJb,
										primary: i.KeyMod.CtrlCmd | i.KeyCode.Alt | i.KeyCode.KeyL,
										mac: { primary: i.KeyMod.WinCtrl | i.KeyCode.KeyL },
										weight: h.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							async runWithContext(M, N) {
								return N.notebookEditor.revealInCenter(N.cell);
							}
						},
					),
					(0, m.$4X)(
						class extends p.$z5b {
							constructor() {
								super({
									id: I,
									title: (0, C.localize)(7789, null),
									keybinding: [
										{
											when: u.$Kj.and(
												b.$pJb,
												u.$Kj.has(a.$aMb),
												E.EditorContextKeys.editorTextFocus,
											),
											primary: i.KeyCode.PageUp,
											weight: p.$s5b,
										},
									],
								});
							}
							async runWithContext(D, M) {
								w.EditorExtensionsRegistry.getEditorCommand(
									"cursorPageUp",
								).runCommand(D, { pageSize: L(M) });
							}
						},
					),
					(0, m.$4X)(
						class extends p.$z5b {
							constructor() {
								super({
									id: T,
									title: (0, C.localize)(7790, null),
									keybinding: [
										{
											when: u.$Kj.and(
												b.$pJb,
												u.$Kj.has(a.$aMb),
												E.EditorContextKeys.editorTextFocus,
												b.$rJb.negate(),
											),
											primary: i.KeyMod.Shift | i.KeyCode.PageUp,
											weight: p.$s5b,
										},
									],
								});
							}
							async runWithContext(D, M) {
								w.EditorExtensionsRegistry.getEditorCommand(
									"cursorPageUpSelect",
								).runCommand(D, { pageSize: L(M) });
							}
						},
					),
					(0, m.$4X)(
						class extends p.$z5b {
							constructor() {
								super({
									id: P,
									title: (0, C.localize)(7791, null),
									keybinding: [
										{
											when: u.$Kj.and(
												b.$pJb,
												u.$Kj.has(a.$aMb),
												E.EditorContextKeys.editorTextFocus,
											),
											primary: i.KeyCode.PageDown,
											weight: p.$s5b,
										},
									],
								});
							}
							async runWithContext(D, M) {
								w.EditorExtensionsRegistry.getEditorCommand(
									"cursorPageDown",
								).runCommand(D, { pageSize: L(M) });
							}
						},
					),
					(0, m.$4X)(
						class extends p.$z5b {
							constructor() {
								super({
									id: k,
									title: (0, C.localize)(7792, null),
									keybinding: [
										{
											when: u.$Kj.and(
												b.$pJb,
												u.$Kj.has(a.$aMb),
												E.EditorContextKeys.editorTextFocus,
												b.$rJb.negate(),
											),
											primary: i.KeyMod.Shift | i.KeyCode.PageDown,
											weight: p.$s5b,
										},
									],
								});
							}
							async runWithContext(D, M) {
								w.EditorExtensionsRegistry.getEditorCommand(
									"cursorPageDownSelect",
								).runCommand(D, { pageSize: L(M) });
							}
						},
					);
				function L(D) {
					const N = D.notebookEditor.getViewModel().layoutInfo,
						A = N?.fontInfo.lineHeight || 17;
					return Math.max(1, Math.floor((N?.height || 0) / A) - 2);
				}
				c.$Io
					.as(r.$No.Configuration)
					.registerConfiguration({
						id: "notebook",
						order: 100,
						type: "object",
						properties: {
							"notebook.navigation.allowNavigateToSurroundingCells": {
								type: "boolean",
								default: !0,
								markdownDescription: (0, C.localize)(7793, null),
							},
						},
					});
			},
		),
		define(
			de[1359],
			he([
				1, 0, 7, 15, 33, 6, 3, 59, 23, 201, 19, 162, 28, 9, 206, 104, 74, 61,
				200, 67, 4, 8, 5, 21, 153, 218, 790, 1357, 1734, 624, 688, 330, 70, 190,
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
			) {
				"use strict";
				var A;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$z1b = e.$y1b = void 0);
				class R extends C.$1c {
					set afterModelPosition(F) {
						this.notebookViewZone.afterModelPosition = F;
					}
					get afterModelPosition() {
						return this.notebookViewZone.afterModelPosition;
					}
					set heightInPx(F) {
						this.notebookViewZone.heightInPx = F;
					}
					get heightInPx() {
						return this.notebookViewZone.heightInPx;
					}
					get editingCell() {
						return this.a;
					}
					constructor(F, x, H, q, V, G, K, J) {
						super(),
							(this.b = F),
							(this.id = x),
							(this.notebookViewZone = H),
							(this.domNode = q),
							(this.widgetContainer = V),
							(this.inlineChatWidget = G),
							(this.parentEditor = K),
							(this.c = J),
							(this.a = null);
						const W = () => {
							this.heightInPx !== G.contentHeight &&
								((this.heightInPx = G.contentHeight),
								this.b.changeViewZones((X) => {
									X.layoutZone(x);
								}),
								this.f(G, V));
						};
						this.D(
							G.onDidChangeHeight(() => {
								W();
							}),
						),
							this.D(
								G.chatWidget.onDidChangeHeight(() => {
									W();
								}),
							),
							(this.heightInPx = G.contentHeight),
							this.f(G, V);
					}
					layout() {
						this.f(this.inlineChatWidget, this.widgetContainer);
					}
					restoreEditingCell(F) {
						this.a = F;
						const x = this.b.deltaCellDecorations(
							[],
							[
								{
									handle: this.a.handle,
									options: {
										className: "nb-chatGenerationHighlight",
										outputClassName: "nb-chatGenerationHighlight",
									},
								},
							],
						);
						this.D(
							(0, C.$Yc)(() => {
								this.b.deltaCellDecorations(x, []);
							}),
						);
					}
					hasFocus() {
						return this.inlineChatWidget.hasFocus();
					}
					focus() {
						this.updateNotebookEditorFocusNSelections(),
							this.inlineChatWidget.focus();
					}
					updateNotebookEditorFocusNSelections() {
						this.b.focusContainer(!0),
							this.b.setFocus({
								start: this.afterModelPosition,
								end: this.afterModelPosition,
							}),
							this.b.setSelections([
								{
									start: this.afterModelPosition,
									end: this.afterModelPosition,
								},
							]);
					}
					getEditingCell() {
						return this.a;
					}
					async getOrCreateEditingCell() {
						if (this.a) {
							const q = this.b.codeEditors.find((V) => V[0] === this.a)?.[1];
							return q?.hasModel() ? { cell: this.a, editor: q } : void 0;
						}
						if (!this.b.hasModel()) return;
						const F = this.inlineChatWidget.hasFocus();
						if (
							((this.a = (0, k.$M5b)(
								this.c,
								this.b,
								this.afterModelPosition,
								M.CellKind.Code,
								"above",
							)),
							!this.a)
						)
							return;
						await this.b.revealFirstLineIfOutsideViewport(this.a);
						const x = this.b.deltaCellDecorations(
							[],
							[
								{
									handle: this.a.handle,
									options: {
										className: "nb-chatGenerationHighlight",
										outputClassName: "nb-chatGenerationHighlight",
									},
								},
							],
						);
						this.D(
							(0, C.$Yc)(() => {
								this.b.deltaCellDecorations(x, []);
							}),
						),
							F && this.focus();
						const H = this.b.codeEditors.find((q) => q[0] === this.a)?.[1];
						if (H?.hasModel()) return { cell: this.a, editor: H };
					}
					async discardChange() {
						this.b.hasModel() && this.a && (0, k.$F5b)(this.b, this.a);
					}
					f(F, x) {
						const q =
								this.b.notebookOptions.getLayoutConfiguration().cellRightMargin,
							V = this.b.notebookOptions.getCellEditorContainerLeftMargin(),
							K = Math.min(640, this.b.getLayoutInfo().width - V - q);
						F.layout(new t.$pgb(K, this.heightInPx)),
							(F.domNode.style.width = `${K}px`),
							(x.style.left = `${V}px`);
					}
					dispose() {
						this.b.changeViewZones((F) => {
							F.removeZone(this.id);
						}),
							this.domNode.remove(),
							super.dispose();
					}
				}
				class O {
					static str(F) {
						return `${F.viewType}/${F.uri.toString()}`;
					}
					static obj(F) {
						const x = F.indexOf("/");
						return {
							viewType: F.substring(0, x),
							uri: c.URI.parse(F.substring(x + 1)),
						};
					}
				}
				let B = class extends C.$1c {
					static {
						A = this;
					}
					static {
						this.id = "workbench.notebook.chatController";
					}
					static {
						this.counter = 0;
					}
					static get(F) {
						return F.getContribution(A.id);
					}
					static {
						this.a = "inline-chat-history";
					}
					static {
						this.b = [];
					}
					constructor(F, x, H, q, V, G, K, J, W) {
						super(),
							(this.I = F),
							(this.J = x),
							(this.L = H),
							(this.M = q),
							(this.N = V),
							(this.O = G),
							(this.P = K),
							(this.Q = J),
							(this.R = W),
							(this.c = -1),
							(this.f = ""),
							(this.h = new d.$Jc(1e3, 0.7)),
							(this.j = this.D(new E.$re())),
							(this.onDidChangePromptCache = this.j.event),
							(this.z = this.D(new C.$Zc())),
							(this.C = this.D(new C.$Zc())),
							(this.H = this.D(new C.$2c())),
							(this.t = L.$p1b.bindTo(this.L)),
							(this.u = L.$o1b.bindTo(this.L)),
							(this.w = L.$q1b.bindTo(this.L)),
							(this.y = L.$r1b.bindTo(this.L)),
							this.S(),
							(A.b = JSON.parse(this.Q.get(A.a, $.StorageScope.PROFILE, "[]"))),
							(this.g = (X) => {
								const Y = A.b.indexOf(X);
								Y >= 0 && A.b.splice(Y, 1),
									A.b.unshift(X),
									(this.c = -1),
									(this.f = ""),
									this.Q.store(
										A.a,
										JSON.stringify(A.b),
										$.StorageScope.PROFILE,
										$.StorageTarget.USER,
									);
							});
					}
					S() {
						this.D(
							this.I.onDidChangeFocus(() => {
								if (!this.G) {
									this.y.set("");
									return;
								}
								const F = this.G.afterModelPosition,
									x = this.I.getFocus().start;
								x + 1 === F
									? this.y.set("above")
									: x === F
										? this.y.set("below")
										: this.y.set("");
							}),
						);
					}
					run(F, x, H) {
						if (this.G) {
							if (this.G.afterModelPosition !== F) {
								const q = (0, t.getWindow)(this.G.domNode);
								this.U(),
									(0, t.$hgb)(q, () => {
										this.W(F, x, H, void 0);
									});
							}
							return;
						}
						this.W(F, x, H, void 0);
					}
					restore(F, x) {
						if (!this.I.hasModel()) return;
						const H = this.I.textModel.cells.indexOf(F.model);
						if (!(H < 0)) {
							if (this.G) {
								if (this.G.afterModelPosition !== H) {
									this.U();
									const q = (0, t.getWindow)(this.G.domNode);
									(0, t.$hgb)(q, () => {
										this.W(H, x, !1, F);
									});
								}
								return;
							}
							this.W(H, x, !1, F);
						}
					}
					U() {
						this.G?.dispose(),
							(this.G = void 0),
							this.C.clear(),
							(this.c = -1),
							(this.f = "");
					}
					W(F, x, H, q) {
						if (!this.I.hasModel()) return;
						this.C.clear();
						const V = document.createElement("div");
						V.classList.add("monaco-editor");
						const G = document.createElement("div");
						(G.style.position = "absolute"),
							V.appendChild(G),
							(this.F = this.C.add((0, t.$dhb)(V))),
							this.C.add(
								this.F.onDidFocus(() => {
									this.$();
								}),
							);
						const K = document.createElement("div"),
							J = this.C.add(
								this.J.createInstance(n.$rwb, K, {}, { isSimpleWidget: !0 }),
							),
							W = `notebook-chat-input-${A.counter++}`,
							Y = this.I.textModel.uri.with({
								scheme: m.Schemas.untitled,
								fragment: W,
							}),
							ie = this.N.createModel("", null, Y, !1);
						J.setModel(ie);
						const ne = this.C.add(
							this.J.createInstance(
								T.$9Yb,
								{
									location: v.ChatAgentLocation.Notebook,
									resolveData: () => {
										const ee = this.getSessionInputUri();
										if (ee)
											return {
												type: v.ChatAgentLocation.Notebook,
												sessionInputUri: ee,
											};
									},
								},
								{
									statusMenuId: L.$u1b,
									chatWidgetViewOptions: {
										rendererOptions: {
											renderTextEditsAsSummary: (ee) =>
												(0, u.$gh)(ee, this.G?.parentEditor.getModel()?.uri) ||
												(0, u.$gh)(ee, this.I.textModel?.uri),
										},
										menus: { telemetrySource: "notebook-generate-cell" },
									},
								},
							),
						);
						(ne.placeholder = (0, s.localize)(7860, null)),
							ne.updateInfo((0, s.localize)(7861, null)),
							G.appendChild(ne.domNode),
							this.C.add(
								ne.onDidChangeInput(() => {
									this.q?.dispose(!0), (this.q = void 0);
								}),
							),
							this.I.changeViewZones((ee) => {
								const _ = { afterModelPosition: F, heightInPx: 80, domNode: V },
									te = ee.addZone(_);
								this.Y(F),
									(this.G = new R(this.I, te, _, V, G, ne, J, this.O)),
									q && (this.G.restoreEditingCell(q), this.bb()),
									this.u.set(!0),
									(0, i.$Oh)(
										() => {
											this.Z();
										},
										0,
										this.B,
									),
									(this.n = (0, i.$zh)(async (Q) => {
										await this.X(Q), (0, h.$vg)(this.H.value);
										const Z = this.H.value;
										this.G?.inlineChatWidget.setChatModel(Z),
											J.hasModel() &&
												(this.G && this.Z(),
												this.G &&
													x &&
													((this.G.inlineChatWidget.value = x),
													H && this.acceptInput()));
									}));
							});
					}
					async X(F) {
						if (
							!this.H.value &&
							((this.H.value = this.R.startSession(
								v.ChatAgentLocation.Editor,
								F,
							)),
							!this.H.value)
						)
							throw new Error("Failed to start chat session");
						this.m = new U();
					}
					Y(F) {
						if (F === 0 || this.I.getLength() === 0)
							this.I.revealOffsetInCenterIfOutsideViewport(0);
						else {
							const x = this.I.cellAt(Math.min(F - 1, this.I.getLength() - 1));
							if (x) {
								const H = this.I.getAbsoluteTopOfElement(x),
									q = this.I.getHeightOfElement(x);
								this.I.revealOffsetInCenterIfOutsideViewport(H + q + 48);
							}
						}
					}
					Z() {
						this.G && (this.$(), this.G.focus());
					}
					$() {
						this.G && this.G.updateNotebookEditorFocusNSelections();
					}
					hasSession(F) {
						return this.H.value === F;
					}
					getSessionInputUri() {
						return this.G?.parentEditor.getModel()?.uri;
					}
					async acceptInput() {
						(0, h.$vg)(this.G),
							await this.n,
							(0, h.$vg)(this.H.value),
							(0, h.$vg)(this.m);
						const F = this.G.inlineChatWidget.value;
						this.g(F);
						const x = this.G.parentEditor,
							H = x.getModel();
						if (!x.hasModel() || !H) return;
						this.G.editingCell &&
							this.G.editingCell.textBuffer.getLength() > 0 &&
							(await this.G.editingCell.resolveTextModel()).setValue("");
						const q = this.G.editingCell
							? this.I.getCellIndex(this.G.editingCell)
							: void 0;
						q !== void 0
							? this.I.setSelections([{ start: q, end: q + 1 }])
							: this.I.setSelections([
									{
										start: this.G.afterModelPosition,
										end: this.G.afterModelPosition,
									},
								]),
							this.t.set(!0),
							this.r?.cancel(),
							(this.r = new w.$Ce());
						const V = new C.$Zc();
						try {
							this.t.set(!0);
							const G = new i.$Th(),
								K = a.$le.create(),
								J = new r.$3m(),
								W = new w.$Ce(this.r.token),
								X = new i.$0h(),
								Y = await this.G.inlineChatWidget.chatWidget.acceptInput();
							if (Y) {
								let ne = 0;
								V.add(
									Y.onDidChange((ee) => {
										if (Y.isCanceled) {
											W.cancel(), X.complete();
											return;
										}
										if (Y.isComplete) {
											X.complete();
											return;
										}
										const _ = Y.response.value
												.map((Q) => (Q.kind === "textEditGroup" ? Q.edits : []))
												.flat(),
											te = _.slice(ne);
										te.length !== 0 &&
											((ne = _.length),
											J.update(K.elapsed()),
											K.reset(),
											G.queue(async () => {
												for (const Q of te)
													await this.ab(Q, {
														duration: J.value,
														token: W.token,
													});
											}));
									}),
								);
							}
							await X.p, await G.whenIdle(), this.z.clear();
							const ie = this.G.getEditingCell();
							ie &&
								(this.z.add(ie.model.onDidChangeContent(() => this.bb())),
								this.z.add(ie.model.onDidChangeLanguage(() => this.bb())),
								this.z.add(ie.model.onDidChangeMetadata(() => this.bb())),
								this.z.add(
									ie.model.onDidChangeInternalMetadata(() => this.bb()),
								),
								this.z.add(ie.model.onDidChangeOutputs(() => this.bb())),
								this.z.add(
									this.P.onDidChangeExecution((ne) => {
										ne.type === N.NotebookExecutionType.cell &&
											ne.affectsCell(ie.uri) &&
											this.bb();
									}),
								));
						} catch {
						} finally {
							V.dispose(),
								this.t.set(!1),
								this.G.inlineChatWidget.updateInfo(""),
								this.G.inlineChatWidget.updateToolbar(!0);
						}
					}
					async ab(F, x) {
						(0, h.$vg)(this.m), (0, h.$vg)(this.G);
						const H = await this.G.getOrCreateEditingCell();
						if (!H) return;
						const q = H.editor,
							V = await this.M.computeMoreMinimalEdits(q.getModel().uri, F);
						if (V?.length === 0) return;
						const K = (!x && V ? V : F).map(p.$iM.asEditOperation);
						try {
							x
								? await this.m.makeProgressiveChanges(q, K, x)
								: await this.m.makeChanges(q, K);
						} finally {
						}
					}
					bb() {
						this.w.set(!0);
					}
					async acceptSession() {
						if (
							((0, h.$vg)(this.H),
							(0, h.$vg)(this.m),
							!this.G?.parentEditor?.hasModel())
						)
							return;
						const x = this.G?.getEditingCell();
						if (x && this.I.hasModel()) {
							const H = O.str({
								uri: x.uri,
								viewType: this.I.textModel.viewType,
							});
							this.G?.inlineChatWidget.value &&
								this.h.set(H, this.G.inlineChatWidget.value),
								this.j.fire({ cell: x.uri });
						}
						try {
							this.H.clear();
						} catch {}
						this.dismiss(!1);
					}
					async focusAbove() {
						if (!this.G) return;
						const x = this.G.afterModelPosition - 1;
						if (x < 0) return;
						const H = this.I.cellAt(x);
						H && (await this.I.focusNotebookCell(H, "editor"));
					}
					async focusNext() {
						if (!this.G) return;
						const F = this.G.afterModelPosition,
							x = this.I.cellAt(F);
						x && (await this.I.focusNotebookCell(x, "editor"));
					}
					hasFocus() {
						return this.G?.hasFocus() ?? !1;
					}
					focus() {
						this.Z();
					}
					focusNearestWidget(F, x) {
						switch (x) {
							case "above":
								this.G?.afterModelPosition === F && this.Z();
								break;
							case "below":
								this.G?.afterModelPosition === F + 1 && this.Z();
								break;
							default:
								break;
						}
					}
					populateHistory(F) {
						if (!this.G) return;
						const x = A.b.length;
						if (x === 0) return;
						this.c === -1 && (this.f = this.G.inlineChatWidget.value);
						const H = this.c + (F ? 1 : -1);
						if (H >= x) return;
						let q;
						H < 0
							? ((q = this.f), (this.c = -1))
							: ((q = A.b[H]), (this.c = H)),
							(this.G.inlineChatWidget.value = q),
							this.G.inlineChatWidget.selectAll();
					}
					async cancelCurrentRequest(F) {
						this.r?.cancel();
					}
					getEditingCell() {
						return this.G?.getEditingCell();
					}
					discard() {
						this.r?.cancel(), this.G?.discardChange(), this.dismiss(!0);
					}
					dismiss(F) {
						const x = this.G,
							H = x?.afterModelPosition,
							q = this.I.getFocus(),
							V = q.start === H && q.end === H;
						if (x && V) {
							const G = x.getEditingCell(),
								K = G && !F,
								J = H === 0 && this.I.getLength() > 0,
								W = H !== 0 && this.I.cellAt(H - 1);
							K
								? this.I.focusNotebookCell(G, "container")
								: J
									? this.I.focusNotebookCell(this.I.cellAt(0), "container")
									: W &&
										this.I.focusNotebookCell(this.I.cellAt(H - 1), "container");
						}
						this.u.set(!1),
							this.w.set(!1),
							this.n?.cancel(),
							(this.n = void 0),
							this.H.clear(),
							this.G?.dispose(),
							(this.G = void 0),
							this.C.clear();
					}
					isCellGeneratedByChat(F) {
						if (!this.I.hasModel()) return !1;
						const x = O.str({
							uri: F.uri,
							viewType: this.I.textModel.viewType,
						});
						return this.h.has(x);
					}
					getPromptFromCache(F) {
						if (!this.I.hasModel()) return;
						const x = O.str({
							uri: F.uri,
							viewType: this.I.textModel.viewType,
						});
						return this.h.get(x);
					}
					dispose() {
						this.dismiss(!1), super.dispose();
					}
				};
				(e.$y1b = B),
					(e.$y1b =
						B =
						A =
							Ne(
								[
									j(1, y.$Li),
									j(2, l.$6j),
									j(3, f.$Cxb),
									j(4, b.$QO),
									j(5, o.$nM),
									j(6, N.$d6),
									j(7, $.$lq),
									j(8, S.$J2),
								],
								B,
							));
				class U {
					constructor() {
						this.a = 0;
					}
					async makeProgressiveChanges(F, x, H) {
						++this.a === 1 && F.pushUndoStop();
						const q = H.duration / 1e3;
						for (const V of x) {
							const K = (0, I.$SKb)(V.text ?? "") / q;
							await (0, P.$_Yb)(
								F.getModel(),
								(0, P.$aZb)(new t.$jgb(), V, K, H.token),
							);
						}
					}
					async makeChanges(F, x) {
						const H = (q) => {
							let V = null;
							for (const G of q)
								V =
									!V || V.isBefore(G.range.getEndPosition())
										? G.range.getEndPosition()
										: V;
							return V && [g.$kL.fromPositions(V)];
						};
						++this.a === 1 && F.pushUndoStop(),
							F.executeEdits("inline-chat-live", x, H);
					}
				}
				(e.$z1b = U), (0, D.$PKb)(B.id, B);
			},
		),
		define(
			de[4086],
			he([
				1, 0, 14, 27, 71, 4, 91, 11, 31, 10, 8, 179, 43, 257, 688, 1359, 238,
				1846, 108, 70, 176,
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
		define(
			de[4087],
			he([1, 0, 3, 8, 55, 153, 688, 4086]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let d = class extends t.$1c {
					static {
						this.ID = "workbench.contrib.notebookChatContribution";
					}
					constructor(r, u) {
						super(), (this.a = C.$x1b.bindTo(r));
						const a = () => {
							const h = !!u.getDefaultAgent(E.ChatAgentLocation.Notebook);
							this.a.set(h);
						};
						a(), this.D(u.onDidChangeAgents(a));
					}
				};
				(d = Ne([j(0, i.$6j), j(1, E.$c3)], d)),
					(0, w.$s6)(d.ID, d, w.WorkbenchPhase.BlockRestore);
			},
		),
		define(
			de[1957],
			he([
				1, 0, 27, 266, 9, 104, 1199, 71, 61, 152, 64, 252, 67, 1549, 4, 11, 10,
				8, 179, 57, 5, 43, 40, 63, 427, 257, 624, 238, 3482, 108, 284, 70, 176,
				190, 243, 18, 474,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$EFc = e.$DFc = e.$CFc = void 0),
					(L = mt(L));
				const B = "notebook.clearAllCellsOutputs",
					U = "notebook.cell.edit",
					z = "notebook.cell.delete";
				(e.$CFc = "notebook.cell.clearOutputs"),
					(e.$DFc = "notebook.selectIndentation"),
					(e.$EFc = "notebook.commentSelectedCells"),
					(0, g.$4X)(
						class extends T.$z5b {
							constructor() {
								super({
									id: U,
									title: (0, n.localize)(7866, null),
									keybinding: {
										when: o.$Kj.and(
											M.$qJb,
											o.$Kj.not(f.$aMb),
											M.$tJb.isEqualTo(!0),
											d.EditorContextKeys.hoverFocused.toNegated(),
											M.$sJb.toNegated(),
										),
										primary: t.KeyCode.Enter,
										weight: l.KeybindingWeight.WorkbenchContrib,
									},
									menu: {
										id: g.$XX.NotebookCellTitle,
										when: o.$Kj.and(
											M.$tJb.isEqualTo(!0),
											M.$CJb.isEqualTo("markup"),
											M.$GJb.toNegated(),
											M.$DJb,
										),
										order: T.CellToolbarOrder.EditCell,
										group: T.$q5b,
									},
									icon: L.$aOb,
								});
							}
							async runWithContext(q, V) {
								if (!V.notebookEditor.hasModel() || V.notebookEditor.isReadOnly)
									return;
								await V.notebookEditor.focusNotebookCell(V.cell, "editor");
								const G = V.cell ? (0, T.$w5b)(V, V.cell) : void 0;
								G &&
									G.hasTextFocus() &&
									v.$Z1b.get(G)?.getWidgetPosition()?.lineNumber ===
										G.getPosition()?.lineNumber &&
									v.$Z1b.get(G)?.focus();
							}
						},
					);
				const F = o.$Kj.and(M.$pJb, f.$bMb, S.$XKb.toNegated());
				(0, g.$4X)(
					class extends T.$z5b {
						constructor() {
							super({
								id: k.$$Ib,
								title: (0, n.localize)(7867, null),
								menu: {
									id: g.$XX.NotebookCellTitle,
									when: o.$Kj.and(M.$CJb.isEqualTo("markup"), M.$GJb, M.$DJb),
									order: T.CellToolbarOrder.SaveCell,
									group: T.$q5b,
								},
								icon: L.$bOb,
								keybinding: [
									{
										when: o.$Kj.and(
											F,
											d.EditorContextKeys.hoverVisible.toNegated(),
											d.EditorContextKeys.hasNonEmptySelection.toNegated(),
											d.EditorContextKeys.hasMultipleSelections.toNegated(),
										),
										primary: t.KeyCode.Escape,
										weight: T.$s5b - 5,
									},
									{
										when: o.$Kj.and(M.$pJb, M.$rJb),
										primary: t.KeyCode.Escape,
										weight: l.KeybindingWeight.WorkbenchContrib + 5,
									},
									{
										when: o.$Kj.and(F, M.$CJb.isEqualTo("markup")),
										primary: t.KeyMod.WinCtrl | t.KeyCode.Enter,
										win: {
											primary:
												t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.Enter,
										},
										weight: T.$s5b - 5,
									},
								],
							});
						}
						async runWithContext(q, V) {
							V.cell.cellKind === D.CellKind.Markup &&
								V.cell.updateEditState(k.CellEditState.Preview, k.$$Ib),
								await V.notebookEditor.focusNotebookCell(V.cell, "container", {
									skipReveal: !0,
								});
						}
					},
				),
					(0, g.$4X)(
						class extends T.$z5b {
							constructor() {
								super({
									id: z,
									title: (0, n.localize)(7868, null),
									keybinding: {
										primary: t.KeyCode.Delete,
										mac: { primary: t.KeyMod.CtrlCmd | t.KeyCode.Backspace },
										when: o.$Kj.and(
											M.$pJb,
											o.$Kj.not(f.$aMb),
											M.$sJb.toNegated(),
										),
										weight: l.KeybindingWeight.WorkbenchContrib,
									},
									menu: [
										{
											id: g.$XX.NotebookCellDelete,
											when: M.$tJb,
											group: T.$q5b,
										},
										{ id: g.$XX.InteractiveCellDelete, group: T.$q5b },
									],
									icon: L.$$Nb,
								});
							}
							async runWithContext(q, V) {
								if (!V.notebookEditor.hasModel()) return;
								let G;
								const J = q.get(N.$d6).getCellExecution(V.cell.uri)?.state,
									W = q.get(p.$gj);
								if (
									J === D.NotebookCellExecutionState.Executing &&
									W.getValue(D.$56.confirmDeleteRunningCell)
								) {
									const X = q.get(b.$GO),
										Y = (0, n.localize)(7869, null);
									G = await X.confirm({
										type: "question",
										message: (0, n.localize)(7870, null),
										primaryButton: Y,
										checkbox: { label: (0, n.localize)(7871, null) },
									});
								} else G = { confirmed: !0 };
								G.confirmed &&
									(G.checkboxChecked === !0 &&
										(await W.updateValue(D.$56.confirmDeleteRunningCell, !1)),
									(0, I.$F5b)(V.notebookEditor, V.cell));
							}
						},
					),
					(0, g.$4X)(
						class extends T.$z5b {
							constructor() {
								super({
									id: e.$CFc,
									title: (0, n.localize)(7872, null),
									menu: [
										{
											id: g.$XX.NotebookCellTitle,
											when: o.$Kj.and(
												M.$CJb.isEqualTo("code"),
												T.$A5b,
												M.$KJb,
												M.$tJb,
												M.$DJb,
												M.$wJb.toNegated(),
											),
											order: T.CellToolbarOrder.ClearCellOutput,
											group: T.$r5b,
										},
										{
											id: g.$XX.NotebookOutputToolbar,
											when: o.$Kj.and(M.$KJb, M.$tJb, M.$DJb, M.$LJb, M.$wJb),
										},
									],
									keybinding: {
										when: o.$Kj.and(
											M.$pJb,
											o.$Kj.not(f.$aMb),
											M.$KJb,
											M.$tJb,
											M.$DJb,
										),
										primary: t.KeyMod.Alt | t.KeyCode.Delete,
										weight: l.KeybindingWeight.WorkbenchContrib,
									},
									icon: L.$eOb,
								});
							}
							async runWithContext(q, V) {
								const G = q.get(N.$d6),
									K = V.notebookEditor;
								if (!K.hasModel() || !K.textModel.length) return;
								const J = V.cell,
									W = K.textModel.cells.indexOf(J.model);
								if (W < 0) return;
								const X = !K.isReadOnly;
								K.textModel.applyEdits(
									[{ editType: D.CellEditType.Output, index: W, outputs: [] }],
									!0,
									void 0,
									() => {},
									void 0,
									X,
								),
									G.getCellExecution(V.cell.uri)?.state !==
										D.NotebookCellExecutionState.Executing &&
										V.notebookEditor.textModel.applyEdits(
											[
												{
													editType: D.CellEditType.PartialInternalMetadata,
													index: W,
													internalMetadata: {
														runStartTime: null,
														runStartTimeAdjustment: null,
														runEndTime: null,
														executionOrder: null,
														lastRunSuccess: null,
													},
												},
											],
											!0,
											void 0,
											() => {},
											void 0,
											X,
										);
							}
						},
					),
					(0, g.$4X)(
						class extends T.$x5b {
							constructor() {
								super({
									id: B,
									title: (0, n.localize)(7873, null),
									precondition: M.$YJb,
									menu: [
										{
											id: g.$XX.EditorTitle,
											when: o.$Kj.and(
												M.$mJb,
												o.$Kj.notEquals("config.notebook.globalToolbar", !0),
											),
											group: "navigation",
											order: 0,
										},
										{
											id: g.$XX.NotebookToolbar,
											when: o.$Kj.and(
												T.$A5b,
												o.$Kj.equals("config.notebook.globalToolbar", !0),
											),
											group: "navigation/execute",
											order: 10,
										},
									],
									icon: L.$eOb,
								});
							}
							async runWithContext(q, V) {
								const G = q.get(N.$d6),
									K = V.notebookEditor;
								if (!K.hasModel() || !K.textModel.length) return;
								const J = !K.isReadOnly;
								K.textModel.applyEdits(
									K.textModel.cells.map((X, Y) => ({
										editType: D.CellEditType.Output,
										index: Y,
										outputs: [],
									})),
									!0,
									void 0,
									() => {},
									void 0,
									J,
								);
								const W = K.textModel.cells
									.map((X, Y) => {
										if (
											G.getCellExecution(X.uri)?.state !==
											D.NotebookCellExecutionState.Executing
										)
											return {
												editType: D.CellEditType.PartialInternalMetadata,
												index: Y,
												internalMetadata: {
													runStartTime: null,
													runStartTimeAdjustment: null,
													runEndTime: null,
													executionOrder: null,
													lastRunSuccess: null,
												},
											};
									})
									.filter((X) => !!X);
								W.length &&
									V.notebookEditor.textModel.applyEdits(
										W,
										!0,
										void 0,
										() => {},
										void 0,
										J,
									);
							}
						},
					),
					(0, g.$4X)(
						class extends T.$z5b {
							constructor() {
								super({
									id: k.$0Ib,
									title: (0, n.localize)(7874, null),
									metadata: {
										description: (0, n.localize)(7875, null),
										args: [
											{
												name: "range",
												description: "The cell range",
												schema: {
													type: "object",
													required: ["start", "end"],
													properties: {
														start: { type: "number" },
														end: { type: "number" },
													},
												},
											},
											{
												name: "language",
												description: "The target cell language",
												schema: { type: "string" },
											},
										],
									},
								});
							}
							e(q, V, ...G) {
								if (
									!V ||
									typeof V.start != "number" ||
									typeof V.end != "number" ||
									V.start >= V.end
								)
									return;
								const K = G.length && typeof G[0] == "string" ? G[0] : void 0,
									J = this.getEditorContextFromArgsOrActive(q);
								if (
									!(
										!J ||
										!J.notebookEditor.hasModel() ||
										V.start >= J.notebookEditor.getLength()
									)
								)
									return {
										notebookEditor: J.notebookEditor,
										cell: J.notebookEditor.cellAt(V.start),
										language: K,
									};
							}
							async runWithContext(q, V) {
								V.language ? await this.h(V, V.language) : await this.g(q, V);
							}
							async g(q, V) {
								const G = [],
									K = [],
									J = q.get(m.$nM),
									W = q.get(h.$QO),
									X = q.get($.$DJ),
									Y = q.get(O.$RO),
									ie = q.get(A.$f6);
								let ne = V.notebookEditor.activeKernel?.supportedLanguages;
								if (!ne) {
									const re = ie
										.getMatchingKernel(V.notebookEditor.textModel)
										.all.flatMap((le) => le.supportedLanguages);
									ne = re.length > 0 ? re : J.getRegisteredLanguageIds();
								}
								new Set([...ne, "markdown"]).forEach((se) => {
									let re;
									(
										V.cell.cellKind === D.CellKind.Markup
											? se === "markdown"
											: se === V.cell.language
									)
										? (re = (0, n.localize)(7876, null, se))
										: (re = (0, n.localize)(7877, null, se));
									const le = J.getLanguageName(se);
									if (!le) return;
									const oe = {
										label: le,
										iconClasses: (0, a.$BDb)(W, J, this.j(le, J)),
										description: re,
										languageId: se,
									};
									se === "markdown" || se === V.cell.language
										? G.push(oe)
										: K.push(oe);
								}),
									K.sort((se, re) =>
										se.description.localeCompare(re.description),
									);
								const _ = { label: (0, n.localize)(7878, null) },
									te = [
										_,
										{ type: "separator", label: (0, n.localize)(7879, null) },
										...G,
										{ type: "separator" },
										...K,
									],
									Q = await X.pick(te, {
										placeHolder: (0, n.localize)(7880, null),
									}),
									Z =
										Q === _
											? await Y.detectLanguage(V.cell.uri)
											: Q?.languageId;
								Z && (await this.h(V, Z));
							}
							async h(q, V) {
								await x(V, q);
							}
							j(q, V) {
								let G;
								const K = V.getLanguageIdByLanguageName(q);
								if (K) {
									const J = V.getExtensions(K);
									if (J.length) G = w.URI.file(J[0]);
									else {
										const W = V.getFilenames(K);
										W.length && (G = w.URI.file(W[0]));
									}
								}
								return G;
							}
						},
					),
					(0, g.$4X)(
						class extends T.$z5b {
							constructor() {
								super({
									id: k.$9Ib,
									title: (0, n.localize2)(
										7888,
										"Accept Detected Language for Cell",
									),
									f1: !0,
									precondition: o.$Kj.and(M.$tJb, M.$DJb),
									keybinding: {
										primary: t.KeyCode.KeyD | t.KeyMod.Alt | t.KeyMod.Shift,
										weight: l.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							async runWithContext(q, V) {
								const G = q.get(O.$RO),
									K = q.get(y.$4N),
									X = [
										...(q
											.get(A.$f6)
											.getSelectedOrSuggestedKernel(V.notebookEditor.textModel)
											?.supportedLanguages ?? []),
									];
								X.push("markdown");
								const Y = await G.detectLanguage(V.cell.uri, X);
								Y ? x(Y, V) : K.warn((0, n.localize)(7881, null));
							}
						},
					);
				async function x(H, q) {
					if (H === "markdown" && q.cell?.language !== "markdown") {
						const V = q.notebookEditor.getCellIndex(q.cell);
						await (0, I.$E5b)(
							D.CellKind.Markup,
							{ cell: q.cell, notebookEditor: q.notebookEditor, ui: !0 },
							"markdown",
							i.$EK.markdown,
						);
						const G = q.notebookEditor.cellAt(V);
						G && (await q.notebookEditor.focusNotebookCell(G, "editor"));
					} else if (H !== "markdown" && q.cell?.cellKind === D.CellKind.Markup)
						await (0, I.$E5b)(
							D.CellKind.Code,
							{ cell: q.cell, notebookEditor: q.notebookEditor, ui: !0 },
							H,
						);
					else {
						const V = q.notebookEditor.textModel.cells.indexOf(q.cell.model);
						q.notebookEditor.textModel.applyEdits(
							[
								{
									editType: D.CellEditType.CellLanguage,
									index: V,
									language: H,
								},
							],
							!0,
							void 0,
							() => {},
							void 0,
							!q.notebookEditor.isReadOnly,
						);
					}
				}
				(0, g.$4X)(
					class extends T.$x5b {
						constructor() {
							super({
								id: e.$DFc,
								title: (0, n.localize2)(7889, "Select Indentation"),
								f1: !0,
								precondition: o.$Kj.and(M.$mJb, M.$tJb, M.$DJb),
							});
						}
						async runWithContext(q, V) {
							await this.d(q, V);
						}
						async d(q, V) {
							const G = q.get($.$DJ),
								K = q.get(R.$IY),
								J = q.get(s.$Li),
								W = (0, k.$eJb)(K.activeEditorPane);
							if (!W || W.isDisposed)
								return G.pick([{ label: (0, n.localize)(7882, null) }]);
							if (W.isReadOnly)
								return G.pick([{ label: (0, n.localize)(7883, null) }]);
							const X = [
								new P.$xFc(),
								new P.$yFc(),
								new P.$zFc(),
								new P.$BFc(),
								new P.$AFc(),
							].map((ie) => ({
								id: ie.desc.id,
								label: ie.desc.title.toString(),
								run: () => {
									J.invokeFunction(ie.run);
								},
							}));
							X.splice(3, 0, {
								type: "separator",
								label: (0, n.localize)(7884, null),
							}),
								X.unshift({
									type: "separator",
									label: (0, n.localize)(7885, null),
								});
							const Y = await G.pick(X, {
								placeHolder: (0, n.localize)(7886, null),
								matchOnDetail: !0,
							});
							Y && (Y.run(), V.notebookEditor.focus());
						}
					},
				),
					(0, g.$4X)(
						class extends T.$y5b {
							constructor() {
								super({
									id: e.$EFc,
									title: (0, n.localize)(7887, null),
									keybinding: {
										when: o.$Kj.and(M.$pJb, M.$tJb, o.$Kj.not(f.$aMb)),
										primary: t.KeyMod.CtrlCmd | t.KeyCode.Slash,
										weight: l.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							async runWithContext(q, V) {
								const G = q.get(r.$aN);
								V.selectedCells.forEach(async (K) => {
									const J = await K.resolveTextModel(),
										W = K.commentOptions,
										X = new c.$Chc(
											G,
											new E.$kL(
												1,
												1,
												J.getLineCount(),
												J.getLineMaxColumn(J.getLineCount()),
											),
											J.getOptions().tabSize,
											c.Type.Toggle,
											W.insertSpace ?? !0,
											W.ignoreEmptyLines ?? !0,
											!1,
										),
										Y = K.getSelections(),
										ie = Y.map((ee) =>
											J._setTrackedRange(
												null,
												ee,
												u.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
											),
										);
									C.$awb.executeCommands(J, Y, [X]);
									const ne = ie
										.map((ee) => J._getTrackedRange(ee))
										.filter((ee) => !!ee)
										.map(
											(ee) =>
												new E.$kL(
													ee.startLineNumber,
													ee.startColumn,
													ee.endLineNumber,
													ee.endColumn,
												),
										);
									K.setSelections(ne ?? []);
								});
							}
						},
					);
			},
		),
		define(
			de[4088],
			he([
				1, 0, 4, 3, 23, 69, 10, 5, 34, 55, 1956, 238, 1957, 108, 70, 243, 18,
				166, 66, 6,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0Fc = e.$9Fc = e.$8Fc = e.$7Fc = void 0),
					(t = mt(t));
				let s = class {
					constructor(I, T, P, k, L) {
						const D = new i.$Zc();
						this.dispose = D.dispose.bind(D);
						const M = () => {
							D.clear(), P.selectKernelForNotebook(T, I);
						};
						D.add(
							I.onDidChangeContent((N) => {
								for (const A of N.rawEvents)
									switch (A.kind) {
										case n.NotebookCellsChangeType.ChangeCellContent:
										case n.NotebookCellsChangeType.ModelChange:
										case n.NotebookCellsChangeType.Move:
										case n.NotebookCellsChangeType.ChangeCellLanguage:
											L.trace(
												"IMPLICIT kernel selection because of change event",
												A.kind,
											),
												M();
											break;
									}
							}),
						),
							D.add(
								k.hoverProvider.register(
									{ scheme: w.Schemas.vscodeNotebookCell, pattern: I.uri.path },
									{
										provideHover() {
											L.trace("IMPLICIT kernel selection because of hover"),
												M();
										},
									},
								),
							);
					}
				};
				s = Ne([j(2, g.$f6), j(3, E.$k3), j(4, m.$ik)], s);
				let l = class extends i.$1c {
					constructor(I, T, P, k) {
						super(),
							(this.c = I),
							(this.f = T),
							(this.g = P),
							(this.h = k),
							(this.a = this.D(new i.$Zc())),
							(this.b = this.D(new i.$Zc())),
							this.D(this.c.onDidActiveEditorChange(() => this.j()));
					}
					j() {
						this.a.clear();
						const I = (0, c.$eJb)(this.c.activeEditorPane);
						if (!I) {
							this.b.clear();
							return;
						}
						const T = () => {
							if (I.notebookOptions.getDisplayOptions().globalToolbar) {
								this.b.clear();
								return;
							}
							const P = I.textModel;
							P ? this.m(P) : this.b.clear();
						};
						this.a.add(this.g.onDidAddKernel(T)),
							this.a.add(this.g.onDidChangeSelectedNotebooks(T)),
							this.a.add(this.g.onDidChangeNotebookAffinity(T)),
							this.a.add(I.onDidChangeModel(T)),
							this.a.add(I.notebookOptions.onDidChangeOptions(T)),
							T();
					}
					m(I) {
						this.b.clear();
						const {
								selected: T,
								suggestions: P,
								all: k,
							} = this.g.getMatchingKernel(I),
							L =
								((P.length === 1 ? P[0] : void 0) ?? k.length === 1)
									? k[0]
									: void 0;
						let D = !1;
						if (k.length !== 0)
							if (T || L) {
								let M = T;
								M ||
									((M = L),
									(D = !0),
									this.b.add(this.h.createInstance(s, I, M)));
								const N = M.description ?? M.detail ?? M.label;
								this.b.add(
									this.f.addEntry(
										{
											name: t.localize(7740, null),
											text: `$(notebook-kernel-select) ${M.label}`,
											ariaLabel: M.label,
											tooltip: D ? t.localize(7741, null, N) : N,
											command: a.$o5b,
										},
										a.$o5b,
										o.StatusbarAlignment.RIGHT,
										10,
									),
								),
									this.b.add(M.onDidChange(() => this.m(I)));
							} else
								this.b.add(
									this.f.addEntry(
										{
											name: t.localize(7742, null),
											text: t.localize(7743, null),
											ariaLabel: t.localize(7744, null),
											command: a.$o5b,
											kind: "prominent",
										},
										a.$o5b,
										o.StatusbarAlignment.RIGHT,
										10,
									),
								);
					}
				};
				(e.$7Fc = l),
					(e.$7Fc = l =
						Ne([j(0, p.$IY), j(1, o.$d6b), j(2, g.$f6), j(3, d.$Li)], l));
				let y = class extends i.$1c {
					constructor(I, T) {
						super(),
							(this.c = I),
							(this.f = T),
							(this.a = this.D(new i.$Zc())),
							(this.b = this.D(new i.$2c())),
							this.D(this.c.onDidActiveEditorChange(() => this.g()));
					}
					g() {
						this.a.clear();
						const I = (0, c.$eJb)(this.c.activeEditorPane);
						I
							? (this.a.add(I.onDidChangeSelection(() => this.h(I))),
								this.a.add(I.onDidChangeActiveCell(() => this.h(I))),
								this.h(I))
							: this.b.clear();
					}
					h(I) {
						if (!I.hasModel()) {
							this.b.clear();
							return;
						}
						const T = this.j(I);
						if (!T) {
							this.b.clear();
							return;
						}
						const P = {
							name: t.localize(7745, null),
							text: T,
							ariaLabel: T,
							command: u.$ZFc,
						};
						this.b.value
							? this.b.value.update(P)
							: (this.b.value = this.f.addEntry(
									P,
									"notebook.activeCellStatus",
									o.StatusbarAlignment.RIGHT,
									100,
								));
					}
					j(I) {
						if (!I.hasModel()) return;
						const T = I.getActiveCell();
						if (!T) return;
						const P = I.getCellIndex(T) + 1,
							k = I.getSelections().reduce((D, M) => D + (M.end - M.start), 0),
							L = I.getLength();
						return k > 1
							? t.localize(7746, null, P, k)
							: t.localize(7747, null, P, L);
					}
				};
				(e.$8Fc = y), (e.$8Fc = y = Ne([j(0, p.$IY), j(1, o.$d6b)], y));
				let $ = class extends i.$1c {
					static {
						this.ID = "selectNotebookIndentation";
					}
					constructor(I, T, P) {
						super(),
							(this.c = I),
							(this.f = T),
							(this.g = P),
							(this.a = this.D(new i.$Zc())),
							(this.b = this.D(new i.$2c())),
							this.D(this.c.onDidActiveEditorChange(() => this.h())),
							this.D(
								this.g.onDidChangeConfiguration((k) => {
									(k.affectsConfiguration("editor") ||
										k.affectsConfiguration("notebook")) &&
										this.h();
								}),
							);
					}
					h() {
						this.a.clear();
						const I = (0, c.$eJb)(this.c.activeEditorPane);
						I
							? (this.j(I),
								this.a.add(
									I.onDidChangeSelection(() => {
										this.b.clear(), this.j(I);
									}),
								))
							: this.b.clear();
					}
					j(I) {
						if (!I.hasModel()) {
							this.b.clear();
							return;
						}
						const T = I.getActiveCell()?.textModel?.getOptions();
						if (!T) {
							this.b.clear();
							return;
						}
						const P =
								I.notebookOptions.getDisplayOptions()
									.editorOptionsCustomizations,
							k = P?.["editor.indentSize"] ?? T?.indentSize,
							L = P?.["editor.insertSpaces"] ?? T?.insertSpaces,
							D = P?.["editor.tabSize"] ?? T?.tabSize,
							M = typeof k == "number" ? k : D,
							A = L ? `Spaces: ${M}` : `Tab Size: ${M}`;
						if (!A) {
							this.b.clear();
							return;
						}
						const R = {
							name: t.localize(7748, null),
							text: A,
							ariaLabel: A,
							tooltip: t.localize(7749, null),
							command: h.$DFc,
						};
						this.b.value
							? this.b.value.update(R)
							: (this.b.value = this.f.addEntry(
									R,
									"notebook.status.indentation",
									o.StatusbarAlignment.RIGHT,
									100.4,
								));
					}
				};
				(e.$9Fc = $),
					(e.$9Fc = $ = Ne([j(0, p.$IY), j(1, o.$d6b), j(2, C.$gj)], $));
				let v = class extends i.$1c {
					static {
						this.ID = "notebook.contrib.editorStatus";
					}
					constructor(I) {
						super(), (this.a = I);
						for (const T of I.parts) this.b(T);
						this.D(I.onDidCreateAuxiliaryEditorPart((T) => this.b(T)));
					}
					b(I) {
						const T = new i.$Zc();
						b.Event.once(I.onWillDispose)(() => T.dispose());
						const P = this.a.getScopedInstantiationService(I);
						T.add(P.createInstance(l)),
							T.add(P.createInstance(y)),
							T.add(P.createInstance($));
					}
				};
				(e.$0Fc = v),
					(e.$0Fc = v = Ne([j(0, f.$EY)], v)),
					(0, r.$s6)(v.ID, v, r.WorkbenchPhase.AfterRestored);
			},
		),
		define(
			de[4089],
			he([
				1, 0, 103, 27, 19, 26, 61, 4, 11, 10, 8, 44, 112, 257, 624, 688, 1359,
				238, 108, 284, 70, 176, 360, 190, 66, 18,
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
					(e.$wFc = e.$vFc = void 0),
					(b = mt(b));
				const I = "notebook.execute",
					T = "notebook.cancelExecution",
					P = "notebook.interruptExecution",
					k = "notebook.cell.cancelExecution",
					L = "notebook.cell.executeAndFocusContainer",
					D = "notebook.cell.executeAndSelectBelow",
					M = "notebook.cell.executeAndInsertBelow",
					N = "notebook.cell.executeCellAndBelow",
					A = "notebook.cell.executeCellsAbove",
					R = "notebook.renderAllMarkdownCells",
					O = "notebook.revealRunningCell",
					B = "notebook.revealLastFailedCell";
				(e.$vFc = u.$Kj.and(
					l.$CJb.isEqualTo("code"),
					u.$Kj.or(
						u.$Kj.greater(l.$TJb.key, 0),
						u.$Kj.greater(l.$UJb.key, 0),
						l.$XJb,
					),
				)),
					(e.$wFc = u.$Kj.and(e.$vFc, l.$JJb.toNegated()));
				function U(H) {
					for (let q = 0; q < H.notebookEditor.getLength(); q++) {
						const V = H.notebookEditor.cellAt(q);
						V.cellKind === s.CellKind.Markup &&
							V.updateEditState(
								f.CellEditState.Preview,
								"renderAllMarkdownCells",
							);
					}
				}
				async function z(H, q) {
					const V = H.activeGroup;
					if (
						(V && V.activeEditor && V.pinEditor(V.activeEditor), q.ui && q.cell)
					) {
						if (
							(await q.notebookEditor.executeNotebookCells(
								t.Iterable.single(q.cell),
							),
							q.autoReveal)
						) {
							const K = q.notebookEditor.getCellIndex(q.cell);
							q.notebookEditor.revealCellRangeInView({ start: K, end: K + 1 });
						}
					} else if (q.selectedCells?.length || q.cell) {
						const K = q.selectedCells?.length ? q.selectedCells : [q.cell];
						await q.notebookEditor.executeNotebookCells(K);
						const J = K[0];
						if (J && q.autoReveal) {
							const W = q.notebookEditor.getCellIndex(J);
							q.notebookEditor.revealCellRangeInView({ start: W, end: W + 1 });
						}
					}
					let G;
					for (const [, K] of q.notebookEditor.codeEditors)
						if (
							(0, w.$gh)(
								K.getModel()?.uri,
								(q.cell ?? q.selectedCells?.[0])?.uri,
							)
						) {
							G = K;
							break;
						}
				}
				(0, m.$4X)(
					class extends o.$x5b {
						constructor() {
							super({ id: R, title: (0, d.localize)(7890, null) });
						}
						async runWithContext(q, V) {
							U(V);
						}
					},
				),
					(0, m.$4X)(
						class extends o.$x5b {
							constructor() {
								super({
									id: I,
									title: (0, d.localize)(7891, null),
									icon: b.$_Nb,
									metadata: {
										description: (0, d.localize)(7892, null),
										args: [{ name: "uri", description: "The document uri" }],
									},
									menu: [
										{
											id: m.$XX.EditorTitle,
											order: -1,
											group: "navigation",
											when: u.$Kj.and(
												l.$mJb,
												o.$A5b,
												u.$Kj.or(l.$WJb.toNegated(), l.$vJb.toNegated()),
												u.$Kj.notEquals("config.notebook.globalToolbar", !0),
											),
										},
										{
											id: m.$XX.NotebookToolbar,
											order: -1,
											group: "navigation/execute",
											when: u.$Kj.and(
												o.$A5b,
												u.$Kj.or(l.$WJb.toNegated(), l.$vJb.toNegated()),
												u.$Kj.and(l.$vJb, l.$WJb.toNegated())?.negate(),
												u.$Kj.equals("config.notebook.globalToolbar", !0),
											),
										},
									],
								});
							}
							getEditorContextFromArgsOrActive(q, V) {
								return (0, o.$v5b)(q, V) ?? (0, o.$u5b)(q.get(S.$IY));
							}
							async runWithContext(q, V) {
								U(V);
								const K = q
										.get(S.$IY)
										.getEditors(a.EditorsOrder.MOST_RECENTLY_ACTIVE)
										.find(
											(W) =>
												W.editor instanceof y.$TIb &&
												W.editor.viewType ===
													V.notebookEditor.textModel.viewType &&
												W.editor.resource.toString() ===
													V.notebookEditor.textModel.uri.toString(),
										),
									J = q.get(v.$EY);
								return (
									K && J.getGroup(K.groupId)?.pinEditor(K.editor),
									V.notebookEditor.executeNotebookCells()
								);
							}
						},
					),
					(0, m.$4X)(
						class extends o.$y5b {
							constructor() {
								super({
									id: f.$8Ib,
									precondition: e.$wFc,
									title: (0, d.localize)(7893, null),
									keybinding: {
										when: u.$Kj.or(l.$qJb, u.$Kj.and(g.$o1b, c.$XKb)),
										primary: i.KeyMod.WinCtrl | i.KeyCode.Enter,
										win: {
											primary:
												i.KeyMod.CtrlCmd | i.KeyMod.Alt | i.KeyCode.Enter,
										},
										weight: o.$s5b,
									},
									menu: {
										id: m.$XX.NotebookCellExecutePrimary,
										when: e.$wFc,
										group: "inline",
									},
									metadata: {
										description: (0, d.localize)(7894, null),
										args: o.$D5b,
									},
									icon: b.$7Nb,
								});
							}
							parseArgs(q, ...V) {
								return (0, o.$C5b)(q, ...V);
							}
							async runWithContext(q, V) {
								const G = q.get(v.$EY);
								V.ui &&
									(await V.notebookEditor.focusNotebookCell(
										V.cell,
										"container",
										{ skipReveal: !0 },
									));
								const K = p.$y1b.get(V.notebookEditor),
									J = K?.getEditingCell();
								if (K?.hasFocus() && J) {
									const W = G.activeGroup;
									W && W.activeEditor && W.pinEditor(W.activeEditor),
										await V.notebookEditor.executeNotebookCells([J]);
									return;
								}
								await z(G, V);
							}
						},
					),
					(0, m.$4X)(
						class extends o.$y5b {
							constructor() {
								super({
									id: A,
									precondition: e.$vFc,
									title: (0, d.localize)(7895, null),
									menu: [
										{
											id: m.$XX.NotebookCellExecute,
											when: u.$Kj.and(
												e.$vFc,
												u.$Kj.equals(
													`config.${s.$56.consolidatedRunButton}`,
													!0,
												),
											),
										},
										{
											id: m.$XX.NotebookCellTitle,
											order: o.CellToolbarOrder.ExecuteAboveCells,
											group: o.$q5b,
											when: u.$Kj.and(
												e.$vFc,
												u.$Kj.equals(
													`config.${s.$56.consolidatedRunButton}`,
													!1,
												),
											),
										},
									],
									icon: b.$8Nb,
								});
							}
							parseArgs(q, ...V) {
								return (0, o.$C5b)(q, ...V);
							}
							async runWithContext(q, V) {
								let G;
								if (
									(V.ui
										? ((G = V.notebookEditor.getCellIndex(V.cell)),
											await V.notebookEditor.focusNotebookCell(
												V.cell,
												"container",
												{ skipReveal: !0 },
											))
										: (G = Math.min(
												...V.selectedCells.map((K) =>
													V.notebookEditor.getCellIndex(K),
												),
											)),
									typeof G == "number")
								) {
									const K = { start: 0, end: G },
										J = V.notebookEditor.getCellsInRange(K);
									V.notebookEditor.executeNotebookCells(J);
								}
							}
						},
					),
					(0, m.$4X)(
						class extends o.$y5b {
							constructor() {
								super({
									id: N,
									precondition: e.$vFc,
									title: (0, d.localize)(7896, null),
									menu: [
										{
											id: m.$XX.NotebookCellExecute,
											when: u.$Kj.and(
												e.$vFc,
												u.$Kj.equals(
													`config.${s.$56.consolidatedRunButton}`,
													!0,
												),
											),
										},
										{
											id: m.$XX.NotebookCellTitle,
											order: o.CellToolbarOrder.ExecuteCellAndBelow,
											group: o.$q5b,
											when: u.$Kj.and(
												e.$vFc,
												u.$Kj.equals(
													`config.${s.$56.consolidatedRunButton}`,
													!1,
												),
											),
										},
									],
									icon: b.$9Nb,
								});
							}
							parseArgs(q, ...V) {
								return (0, o.$C5b)(q, ...V);
							}
							async runWithContext(q, V) {
								let G;
								if (
									(V.ui
										? ((G = V.notebookEditor.getCellIndex(V.cell)),
											await V.notebookEditor.focusNotebookCell(
												V.cell,
												"container",
												{ skipReveal: !0 },
											))
										: (G = Math.min(
												...V.selectedCells.map((K) =>
													V.notebookEditor.getCellIndex(K),
												),
											)),
									typeof G == "number")
								) {
									const K = { start: G, end: V.notebookEditor.getLength() },
										J = V.notebookEditor.getCellsInRange(K);
									V.notebookEditor.executeNotebookCells(J);
								}
							}
						},
					),
					(0, m.$4X)(
						class extends o.$y5b {
							constructor() {
								super({
									id: L,
									precondition: e.$wFc,
									title: (0, d.localize)(7897, null),
									metadata: {
										description: (0, d.localize)(7898, null),
										args: o.$D5b,
									},
									icon: b.$7Nb,
								});
							}
							parseArgs(q, ...V) {
								return (0, o.$C5b)(q, ...V);
							}
							async runWithContext(q, V) {
								const G = q.get(v.$EY);
								if (V.ui)
									await V.notebookEditor.focusNotebookCell(
										V.cell,
										"container",
										{ skipReveal: !0 },
									);
								else {
									const K = V.selectedCells[0];
									K &&
										(await V.notebookEditor.focusNotebookCell(K, "container", {
											skipReveal: !0,
										}));
								}
								await z(G, V);
							}
						},
					);
				const F = u.$Kj.or(
					u.$Kj.equals(l.$IJb.key, "executing"),
					u.$Kj.equals(l.$IJb.key, "pending"),
				);
				(0, m.$4X)(
					class extends o.$y5b {
						constructor() {
							super({
								id: k,
								precondition: F,
								title: (0, d.localize)(7899, null),
								icon: b.$0Nb,
								menu: {
									id: m.$XX.NotebookCellExecutePrimary,
									when: F,
									group: "inline",
								},
								metadata: {
									description: (0, d.localize)(7900, null),
									args: [
										{
											name: "options",
											description: "The cell range options",
											schema: {
												type: "object",
												required: ["ranges"],
												properties: {
													ranges: {
														type: "array",
														items: [
															{
																type: "object",
																required: ["start", "end"],
																properties: {
																	start: { type: "number" },
																	end: { type: "number" },
																},
															},
														],
													},
													document: {
														type: "object",
														description: "The document uri",
													},
												},
											},
										},
									],
								},
							});
						}
						parseArgs(q, ...V) {
							return (0, o.$C5b)(q, ...V);
						}
						async runWithContext(q, V) {
							return V.ui
								? (await V.notebookEditor.focusNotebookCell(
										V.cell,
										"container",
										{ skipReveal: !0 },
									),
									V.notebookEditor.cancelNotebookCells(
										t.Iterable.single(V.cell),
									))
								: V.notebookEditor.cancelNotebookCells(V.selectedCells);
						}
					},
				),
					(0, m.$4X)(
						class extends o.$z5b {
							constructor() {
								super({
									id: D,
									precondition: u.$Kj.or(e.$wFc, l.$CJb.isEqualTo("markup")),
									title: (0, d.localize)(7901, null),
									keybinding: {
										when: u.$Kj.and(l.$qJb, c.$XKb.negate()),
										primary: i.KeyMod.Shift | i.KeyCode.Enter,
										weight: o.$s5b,
									},
								});
							}
							async runWithContext(q, V) {
								const G = q.get(v.$EY),
									K = V.notebookEditor.getCellIndex(V.cell);
								if (typeof K != "number") return;
								const J = q.get(C.$nM),
									X = q.get(r.$gj).getValue(s.$56.scrollToRevealCell);
								let Y;
								if (
									(X === "none"
										? (Y = { skipReveal: !0 })
										: (Y = {
												revealBehavior:
													X === "fullCell"
														? f.ScrollToRevealBehavior.fullCell
														: f.ScrollToRevealBehavior.firstLine,
											}),
									V.cell.cellKind === s.CellKind.Markup)
								) {
									const ie = V.notebookEditor.cellAt(K + 1);
									if ((V.cell.updateEditState(f.CellEditState.Preview, D), ie))
										await V.notebookEditor.focusNotebookCell(
											ie,
											"container",
											Y,
										);
									else {
										const ne = (0, n.$M5b)(
											J,
											V.notebookEditor,
											K,
											s.CellKind.Markup,
											"below",
										);
										ne &&
											(await V.notebookEditor.focusNotebookCell(
												ne,
												"editor",
												Y,
											));
									}
									return;
								} else {
									const ie = V.notebookEditor.cellAt(K + 1);
									if (ie)
										await V.notebookEditor.focusNotebookCell(
											ie,
											"container",
											Y,
										);
									else {
										const ne = (0, n.$M5b)(
											J,
											V.notebookEditor,
											K,
											s.CellKind.Code,
											"below",
										);
										ne &&
											(await V.notebookEditor.focusNotebookCell(
												ne,
												"editor",
												Y,
											));
									}
									return z(G, V);
								}
							}
						},
					),
					(0, m.$4X)(
						class extends o.$z5b {
							constructor() {
								super({
									id: M,
									precondition: u.$Kj.or(e.$wFc, l.$CJb.isEqualTo("markup")),
									title: (0, d.localize)(7902, null),
									keybinding: {
										when: l.$qJb,
										primary: i.KeyMod.Alt | i.KeyCode.Enter,
										weight: o.$s5b,
									},
								});
							}
							async runWithContext(q, V) {
								const G = q.get(v.$EY),
									K = V.notebookEditor.getCellIndex(V.cell),
									J = q.get(C.$nM),
									W =
										V.cell.focusMode === f.CellFocusMode.Editor
											? "editor"
											: "container",
									X = (0, n.$M5b)(
										J,
										V.notebookEditor,
										K,
										V.cell.cellKind,
										"below",
									);
								X && (await V.notebookEditor.focusNotebookCell(X, W)),
									V.cell.cellKind === s.CellKind.Markup
										? V.cell.updateEditState(f.CellEditState.Preview, M)
										: z(G, V);
							}
						},
					);
				class x extends o.$x5b {
					getEditorContextFromArgsOrActive(q, V) {
						return (0, o.$v5b)(q, V) ?? (0, o.$u5b)(q.get(S.$IY));
					}
					async runWithContext(q, V) {
						return V.notebookEditor.cancelNotebookCells();
					}
				}
				(0, m.$4X)(
					class extends x {
						constructor() {
							super({
								id: T,
								title: (0, d.localize2)(7910, "Stop Execution"),
								icon: b.$0Nb,
								menu: [
									{
										id: m.$XX.EditorTitle,
										order: -1,
										group: "navigation",
										when: u.$Kj.and(
											l.$mJb,
											l.$vJb,
											l.$WJb.toNegated(),
											u.$Kj.notEquals("config.notebook.globalToolbar", !0),
										),
									},
									{
										id: m.$XX.NotebookToolbar,
										order: -1,
										group: "navigation/execute",
										when: u.$Kj.and(
											l.$vJb,
											l.$WJb.toNegated(),
											u.$Kj.equals("config.notebook.globalToolbar", !0),
										),
									},
								],
							});
						}
					},
				),
					(0, m.$4X)(
						class extends x {
							constructor() {
								super({
									id: P,
									title: (0, d.localize2)(7911, "Interrupt"),
									precondition: u.$Kj.and(l.$vJb, l.$WJb),
									icon: b.$0Nb,
									menu: [
										{
											id: m.$XX.EditorTitle,
											order: -1,
											group: "navigation",
											when: u.$Kj.and(
												l.$mJb,
												l.$vJb,
												l.$WJb,
												u.$Kj.notEquals("config.notebook.globalToolbar", !0),
											),
										},
										{
											id: m.$XX.NotebookToolbar,
											order: -1,
											group: "navigation/execute",
											when: u.$Kj.and(
												l.$vJb,
												l.$WJb,
												u.$Kj.equals("config.notebook.globalToolbar", !0),
											),
										},
										{
											id: m.$XX.InteractiveToolbar,
											group: "navigation/execute",
										},
									],
								});
							}
						},
					),
					m.$ZX.appendMenuItem(m.$XX.NotebookToolbar, {
						title: (0, d.localize)(7903, null),
						submenu: m.$XX.NotebookCellExecuteGoTo,
						group: "navigation/execute",
						order: 20,
						icon: E.ThemeIcon.modify(b.$jOb, "spin"),
					}),
					(0, m.$4X)(
						class extends o.$x5b {
							constructor() {
								super({
									id: O,
									title: (0, d.localize)(7904, null),
									tooltip: (0, d.localize)(7905, null),
									shortTitle: (0, d.localize)(7906, null),
									precondition: l.$uJb,
									menu: [
										{
											id: m.$XX.EditorTitle,
											when: u.$Kj.and(
												l.$mJb,
												l.$uJb,
												u.$Kj.notEquals("config.notebook.globalToolbar", !0),
											),
											group: "navigation",
											order: 0,
										},
										{
											id: m.$XX.NotebookCellExecuteGoTo,
											when: u.$Kj.and(
												l.$mJb,
												l.$uJb,
												u.$Kj.equals("config.notebook.globalToolbar", !0),
											),
											group: "navigation/execute",
											order: 20,
										},
										{
											id: m.$XX.InteractiveToolbar,
											when: u.$Kj.and(
												l.$uJb,
												u.$Kj.equals(
													"activeEditor",
													"workbench.editor.interactive",
												),
											),
											group: "navigation",
											order: 10,
										},
									],
									icon: E.ThemeIcon.modify(b.$jOb, "spin"),
								});
							}
							async runWithContext(q, V) {
								const G = q.get($.$d6),
									K = V.notebookEditor.textModel.uri,
									J = G.getCellExecutionsForNotebook(K);
								if (J[0]) {
									const X = this.a(q, K) ?? J[0].cellHandle,
										Y = V.notebookEditor.getCellByHandle(X);
									Y && V.notebookEditor.focusNotebookCell(Y, "container");
								}
							}
							a(q, V) {
								const G = q.get(h.$75);
								for (const K of G.getModel().getSessions())
									for (const J of K.getAllThreads()) {
										const W = J.getTopStackFrame();
										if (W) {
											const X = s.CellUri.parse(W.source.uri);
											if (X && X.notebook.toString() === V.toString())
												return X.handle;
										}
									}
							}
						},
					),
					(0, m.$4X)(
						class extends o.$x5b {
							constructor() {
								super({
									id: B,
									title: (0, d.localize)(7907, null),
									tooltip: (0, d.localize)(7908, null),
									shortTitle: (0, d.localize)(7909, null),
									precondition: l.$AJb,
									menu: [
										{
											id: m.$XX.EditorTitle,
											when: u.$Kj.and(
												l.$mJb,
												l.$AJb,
												l.$uJb.toNegated(),
												u.$Kj.notEquals("config.notebook.globalToolbar", !0),
											),
											group: "navigation",
											order: 0,
										},
										{
											id: m.$XX.NotebookCellExecuteGoTo,
											when: u.$Kj.and(
												l.$mJb,
												l.$AJb,
												l.$uJb.toNegated(),
												u.$Kj.equals("config.notebook.globalToolbar", !0),
											),
											group: "navigation/execute",
											order: 20,
										},
									],
									icon: b.$hOb,
								});
							}
							async runWithContext(q, V) {
								const G = q.get($.$d6),
									K = V.notebookEditor.textModel.uri,
									J = G.getLastFailedCellForNotebook(K);
								if (J !== void 0) {
									const W = V.notebookEditor.getCellByHandle(J);
									W && V.notebookEditor.focusNotebookCell(W, "container");
								}
							}
						},
					);
			},
		),
		define(
			de[1360],
			he([
				1, 0, 7, 50, 15, 6, 3, 19, 47, 125, 4, 8, 22, 5, 21, 32, 35, 217, 44,
				238, 293, 1855, 70, 360, 3116, 66, 18, 84, 404, 161, 141, 157, 335, 76,
				34, 992, 131, 162,
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
			) {
				"use strict";
				var U;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$B4b = void 0),
					(t = mt(t));
				const z = "NotebookEditorViewState";
				let F = class extends o.$JEb {
					static {
						U = this;
					}
					static {
						this.ID = y.$O6;
					}
					get onDidFocus() {
						return this.r.event;
					}
					get onDidBlur() {
						return this.s.event;
					}
					constructor(
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
						te,
						Q,
						Z,
						se,
						re,
						le,
					) {
						super(U.ID, q, V, G, J),
							(this.eb = K),
							(this.fb = W),
							(this.gb = X),
							(this.hb = Y),
							(this.ib = ie),
							(this.jb = ne),
							(this.kb = _),
							(this.lb = te),
							(this.mb = Q),
							(this.nb = Z),
							(this.ob = se),
							(this.pb = re),
							(this.qb = le),
							(this.b = this.D(new C.$Zc())),
							(this.c = this.D(new C.$Zc())),
							(this.f = { value: void 0 }),
							(this.m = this.D(new C.$2c())),
							(this.r = this.D(new E.$re())),
							(this.s = this.D(new E.$re())),
							(this.u = this.D(new E.$re())),
							(this.onDidChangeModel = this.u.event),
							(this.cb = this.D(new E.$re())),
							(this.onDidChangeSelection = this.cb.event),
							(this.db = this.D(new E.$re())),
							(this.onDidChangeScroll = this.db.event),
							(this.a = this.ab(X, ee, z)),
							this.D(
								this.jb.onDidChangeFileSystemProviderCapabilities((oe) =>
									this.rb(oe.scheme),
								),
							),
							this.D(
								this.jb.onDidChangeFileSystemProviderRegistrations((oe) =>
									this.rb(oe.scheme),
								),
							);
					}
					rb(q) {
						this.input instanceof $.$TIb &&
							this.input.resource?.scheme === q &&
							this.tb(this.input);
					}
					sb(q) {
						this.input === q && this.tb(q);
					}
					tb(q) {
						this.f.value?.setOptions({ isReadOnly: !!q.isReadonly() });
					}
					get textModel() {
						return this.f.value?.textModel;
					}
					get minimumWidth() {
						return 220;
					}
					get maximumWidth() {
						return Number.POSITIVE_INFINITY;
					}
					set minimumWidth(q) {}
					set maximumWidth(q) {}
					get scopedContextKeyService() {
						return this.f.value?.scopedContextKeyService;
					}
					Y(q) {
						(this.g = t.$fhb(q, t.$(".notebook-editor"))),
							(this.g.id = `notebook-editor-element-${(0, m.$9g)()}`);
					}
					getActionViewItem(q, V) {
						if (q.id === b.$o5b)
							return this.eb.createInstance(l.$c4b, q, this, V);
					}
					getControl() {
						return this.f.value;
					}
					setVisible(q) {
						super.setVisible(q), q || this.f.value?.onWillHide();
					}
					Z(q) {
						super.Z(q),
							this.b.clear(),
							this.b.add(
								this.group.onWillCloseEditor((V) => this.zb(V.editor)),
							),
							this.b.add(
								this.group.onDidModelChange(() => {
									this.gb.activeGroup !== this.group &&
										this.f?.value?.updateEditorFocus();
								}),
							),
							q ||
								(this.zb(this.input),
								this.input && this.f.value && this.f.value.onWillHide());
					}
					focus() {
						super.focus(), this.f.value?.focus();
					}
					hasFocus() {
						const q = this.f.value;
						return q
							? !!q &&
									t.$Lgb(
										q.getDomNode() || t.$Lgb(q.getOverflowContainerDomNode()),
									)
							: !1;
					}
					async setInput(q, V, G, K, J) {
						try {
							let W = !1;
							const X = (0, w.$Nh)(1e4);
							X.then(() => {
								(W = !0), this.wb(Y, q);
							});
							const Y = new v.$SIb();
							Y.mark("startTime"),
								(this.m.value = q.onDidChangeCapabilities(() => this.sb(q))),
								this.c.clear(),
								this.f.value?.onWillHide(),
								(this.f = this.eb.invokeFunction(
									this.hb.retrieveWidget,
									this.group.id,
									q,
									void 0,
									this.j?.dimension,
									this.window,
								)),
								this.g &&
									this.f.value.getDomNode() &&
									(this.g.setAttribute(
										"aria-flowto",
										this.f.value.getDomNode().id || "",
									),
									t.$Cgb(this.f.value.getDomNode(), this.g)),
								this.c.add(this.f.value.onDidChangeModel(() => this.u.fire())),
								this.c.add(
									this.f.value.onDidChangeActiveCell(() =>
										this.cb.fire({
											reason: f.EditorPaneSelectionChangeReason.USER,
										}),
									),
								),
								this.j &&
									this.f.value.layout(
										this.j.dimension,
										this.g,
										this.j.position,
									),
								await super.setInput(q, V, G, K);
							const ie = await q.resolve(V, Y);
							if ((Y.mark("inputLoaded"), K.isCancellationRequested)) return;
							if (!this.f.value)
								return J ? void 0 : this.setInput(q, V, G, K, !0);
							if (ie === null) {
								const _ = this.lb.getViewTypeProvider(q.viewType);
								if (!_)
									throw new Error((0, u.localize)(8084, null, q.viewType));
								await this.mb.whenInitialized;
								const te = this.mb.local.find((Q) => Q.identifier.id === _);
								throw (0, f.$E1)(
									new Error((0, u.localize)(8085, null, q.viewType)),
									[
										(0, i.$wj)({
											id: "workbench.notebook.action.installOrEnableMissing",
											label: te
												? (0, u.localize)(8086, null, q.viewType)
												: (0, u.localize)(8087, null, q.viewType),
											run: async () => {
												const Q = this.lb.onAddViewType((se) => {
														se === q.viewType &&
															(this.fb.openEditor({ resource: q.resource }),
															Q.dispose());
													}),
													Z = this.mb.local.find(
														(se) => se.identifier.id === _,
													);
												try {
													Z
														? await this.mb.setEnablement(
																Z,
																Z.enablementState ===
																	D.EnablementState.DisabledWorkspace
																	? D.EnablementState.EnabledWorkspace
																	: D.EnablementState.EnabledGlobally,
															)
														: await this.eb.createInstance(P.$KTb, _).run();
												} catch (se) {
													this.ob.error(
														`Failed to install or enable extension ${_}`,
														se,
													),
														Q.dispose();
												}
											},
										}),
										(0, i.$wj)({
											id: "workbench.notebook.action.openAsText",
											label: (0, u.localize)(8088, null),
											run: async () => {
												const Q = await this.nb.resolve({
													resource: q.resource,
													typeId: y.$66.create(q.viewType),
												});
												if (Q) {
													const Z = await (0, N.$6e)(Q.value);
													this.fb.openEditor({
														resource: void 0,
														contents: Z.toString(),
													});
												} else
													this.fb.openEditor({
														resource: q.resource,
														options: { override: f.$b1.id, pinned: !0 },
													});
											},
										}),
									],
									{ allowDialog: !0 },
								);
							}
							this.c.add(
								ie.notebook.onDidChangeContent(() =>
									this.cb.fire({
										reason: f.EditorPaneSelectionChangeReason.EDIT,
									}),
								),
							);
							const ne = V?.viewState ?? this.Ab(q);
							this.f.value.setParentContextKeyService(this.ib),
								this.f.value.setEditorProgressService(this.kb),
								await this.f.value.setModel(ie.notebook, ne, Y);
							const ee = !!q.isReadonly();
							if (
								(await this.f.value.setOptions({ ...V, isReadOnly: ee }),
								this.c.add(this.f.value.onDidFocusWidget(() => this.r.fire())),
								this.c.add(this.f.value.onDidBlurWidget(() => this.s.fire())),
								this.c.add(
									this.gb.createEditorDropTarget(this.f.value.getDomNode(), {
										containsGroup: (_) => this.group.id === _.id,
									}),
								),
								this.c.add(
									this.f.value.onDidScroll(() => {
										this.db.fire();
									}),
								),
								Y.mark("editorLoaded"),
								X.cancel(),
								W)
							)
								return;
							this.wb(Y, q, ie.notebook), this.xb(ie.notebook);
						} catch (W) {
							if (
								(this.ob.warn("NotebookEditorWidget#setInput failed", W),
								(0, f.$D1)(W))
							)
								throw W;
							if (
								W.fileOperationResult === h.FileOperationResult.FILE_TOO_LARGE
							) {
								let Y;
								throw (
									(W instanceof h.$Hl
										? (Y = (0, u.localize)(
												8089,
												null,
												h.$Tl.formatSize(W.size),
											))
										: (Y = (0, u.localize)(8090, null)),
									(0, f.$u1)(this.group, q, V, Y, this.qb))
								);
							}
							throw (0, f.$E1)(
								W instanceof Error ? W : new Error(W ? W.message : ""),
								[
									(0, i.$wj)({
										id: "workbench.notebook.action.openInTextEditor",
										label: (0, u.localize)(8091, null),
										run: async () => {
											const Y = this.fb.activeEditorPane;
											if (!Y) return;
											const ie = f.$A1.getCanonicalUri(Y.input);
											if (ie && ie.toString() === q.resource?.toString())
												return this.fb.openEditor({
													resource: ie,
													options: { override: f.$b1.id, pinned: !0 },
												});
										},
									}),
								],
								{ allowDialog: !0 },
							);
						}
					}
					wb(q, V, G) {
						const K = q.value,
							J = K.startTime,
							W = K.extensionActivated,
							X = K.inputLoaded,
							Y = K.webviewCommLoaded,
							ie = K.customMarkdownLoaded,
							ne = K.editorLoaded;
						let ee = -1,
							_ = -1,
							te = -1,
							Q = -1,
							Z = -1;
						J !== void 0 &&
							W !== void 0 &&
							((ee = W - J),
							X !== void 0 && (_ = X - W),
							Y !== void 0 && (te = Y - W),
							ie !== void 0 && (Q = ie - J),
							ne !== void 0 && (Z = ne - J));
						let se, re, le, oe, ae, pe, $e;
						if (G) {
							const ye = new B.$le();
							for (const ue of G.cells)
								ue.cellKind === y.CellKind.Code
									? ((se = (se || 0) + 1),
										(ae = (ae || 0) + ue.getTextLength()),
										(le = (le || 0) + ue.outputs.length),
										(oe =
											(oe || 0) +
											ue.outputs.reduce(
												(fe, me) =>
													fe +
													me.outputs.reduce(
														(ve, ge) => ve + ge.data.byteLength,
														0,
													),
												0,
											)))
									: ((re = (re || 0) + 1),
										(pe = (ae || 0) + ue.getTextLength()));
							$e = ye.elapsed();
						}
						this.ob.trace(
							`[NotebookEditor] open notebook perf ${G?.uri.toString() ?? ""} - extensionActivation: ${ee}, inputLoad: ${_}, webviewComm: ${te}, customMarkdown: ${Q}, editorLoad: ${Z}`,
						),
							this.Q.publicLog2("notebook/editorOpenPerf", {
								scheme: V.resource.scheme,
								ext: (0, d.$lh)(V.resource),
								viewType: V.viewType,
								extensionActivated: ee,
								inputLoaded: _,
								webviewCommLoaded: te,
								customMarkdownLoaded: Q,
								editorLoaded: Z,
								codeCellCount: se,
								mdCellCount: re,
								outputCount: le,
								outputBytes: oe,
								codeLength: ae,
								markdownLength: pe,
								notebookStatsLoaded: $e,
							});
					}
					xb(q) {
						this.pb.canPromptRecommendation(q.uri).then((V) => {
							this.Q.publicLog2("notebook/shouldPromptRecommendation", {
								shouldPrompt: V,
							});
						});
					}
					clearInput() {
						this.m.clear(),
							this.f.value && (this.zb(this.input), this.f.value.onWillHide()),
							super.clearInput();
					}
					setOptions(q) {
						this.f.value?.setOptions(q), super.setOptions(q);
					}
					I() {
						this.zb(this.input), super.I();
					}
					getViewState() {
						const q = this.input;
						if (q instanceof $.$TIb) return this.zb(q), this.Ab(q);
					}
					getSelection() {
						if (this.f.value) {
							const q = this.f.value.getActiveCell();
							if (q) {
								const V = q.uri;
								return new x(V, q.getSelections());
							}
						}
					}
					getScrollPosition() {
						const q = this.getControl();
						if (!q)
							throw new Error("Notebook widget has not yet been initialized");
						return { scrollTop: q.scrollTop, scrollLeft: 0 };
					}
					setScrollPosition(q) {
						const V = this.getControl();
						if (!V) throw new Error("Control has not yet been initialized");
						V.setScrollTop(q.scrollTop);
					}
					zb(q) {
						if (this.f.value && q instanceof $.$TIb) {
							if (this.f.value.isDisposed) return;
							const V = this.f.value.getEditorViewState();
							this.a.saveEditorState(this.group, q.resource, V);
						}
					}
					Ab(q) {
						const V = this.a.loadEditorState(this.group, q.resource);
						if (V) return V;
						for (const G of this.gb.getGroups(
							S.GroupsOrder.MOST_RECENTLY_ACTIVE,
						))
							if (
								G.activeEditorPane !== this &&
								G.activeEditorPane instanceof U &&
								G.activeEditor?.matches(q)
							)
								return G.activeEditorPane.f.value?.getEditorViewState();
					}
					layout(q, V) {
						this.g.classList.toggle(
							"mid-width",
							q.width < 1e3 && q.width >= 600,
						),
							this.g.classList.toggle("narrow-width", q.width < 600),
							(this.j = { dimension: q, position: V }),
							!(!this.f.value || !(this.input instanceof $.$TIb)) &&
								((this.input.resource.toString() !==
									this.textModel?.uri.toString() &&
									this.f.value?.hasModel()) ||
									(this.isVisible() && this.f.value.layout(q, this.g, V)));
					}
				};
				(e.$B4b = F),
					(e.$B4b =
						F =
						U =
							Ne(
								[
									j(1, g.$km),
									j(2, p.$iP),
									j(3, c.$Li),
									j(4, n.$lq),
									j(5, I.$IY),
									j(6, S.$EY),
									j(7, s.$n5b),
									j(8, a.$6j),
									j(9, h.$ll),
									j(10, r.$XO),
									j(11, T.$bO),
									j(12, k.$MIb),
									j(13, L.$MQb),
									j(14, M.$WO),
									j(15, A.$ik),
									j(16, R.$A4b),
									j(17, O.$7Z),
								],
								F,
							));
				class x {
					constructor(q, V) {
						(this.a = q), (this.b = V);
					}
					compare(q) {
						return q instanceof x && (0, d.$gh)(this.a, q.a)
							? f.EditorPaneSelectionCompareResult.IDENTICAL
							: f.EditorPaneSelectionCompareResult.DIFFERENT;
					}
					restore(q) {
						const V = {
							cellOptions: {
								resource: this.a,
								options: { selection: this.b[0] },
							},
						};
						return Object.assign(V, q), V;
					}
					log() {
						return this.a.fragment;
					}
				}
			},
		),
		define(
			de[1958],
			he([
				1, 0, 4, 7, 461, 325, 6, 132, 3, 26, 252, 10, 81, 5, 90, 30, 51, 35, 55,
				108, 1360, 70, 18, 52, 475, 33, 17, 75, 49, 11, 8, 92, 15, 802, 14, 176,
				1301, 1306, 190, 69,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$N4b = e.$M4b = e.$L4b = e.$K4b = e.$J4b = e.$I4b = void 0),
					(i = mt(i));
				class F {
					static {
						this.templateId = "NotebookOutlineRenderer";
					}
					constructor(ee, _, te, Q, Z, se) {
						(this.container = ee),
							(this.iconClass = _),
							(this.iconLabel = te),
							(this.decoration = Q),
							(this.actionMenu = Z),
							(this.elementDisposables = se);
					}
				}
				let x = class {
					constructor(ee, _, te, Q, Z, se, re, le) {
						(this.d = ee),
							(this.f = _),
							(this.g = te),
							(this.h = Q),
							(this.j = Z),
							(this.k = se),
							(this.l = re),
							(this.m = le),
							(this.templateId = F.templateId);
					}
					renderTemplate(ee) {
						const _ = new m.$Zc();
						ee.classList.add("notebook-outline-element", "show-file-icons");
						const te = document.createElement("div");
						ee.append(te);
						const Q = new E.$Xob(ee, { supportHighlights: !0 }),
							Z = document.createElement("div");
						(Z.className = "element-decoration"), ee.append(Z);
						const se = document.createElement("div");
						return (
							(se.className = "action-menu"),
							ee.append(se),
							new F(ee, te, Q, Z, se, _)
						);
					}
					renderElement(ee, _, te, Q) {
						const Z = [],
							se = {
								matches: (0, d.$3k)(ee.filterData),
								labelEscapeNewLines: !0,
								extraClasses: Z,
							},
							re = ee.element.cell.cellKind === l.CellKind.Code;
						ee.element.level >= 8
							? (te.iconClass.className =
									"element-icon " +
									r.ThemeIcon.asClassNameArray(ee.element.icon).join(" "))
							: re &&
									this.g.getFileIconTheme().hasFileIcons &&
									!ee.element.isExecuting
								? ((te.iconClass.className = ""),
									Z.push(...(0, u.$CDb)(ee.element.cell.language ?? "")))
								: (te.iconClass.className =
										"element-icon " +
										r.ThemeIcon.asClassNameArray(ee.element.icon).join(" ")),
							te.iconLabel.setLabel(" " + ee.element.label, void 0, se);
						const { markerInfo: le } = ee.element;
						if (
							(te.container.style.removeProperty("--outline-element-color"),
							(te.decoration.innerText = ""),
							le)
						) {
							const oe = this.h.getValue("problems.visibility");
							!this.h.getValue(v.OutlineConfigKeys.problemsBadges) || !oe
								? (te.decoration.classList.remove("bubble"),
									(te.decoration.innerText = ""))
								: le.count === 0
									? (te.decoration.classList.add("bubble"),
										(te.decoration.innerText = "\uEA71"))
									: (te.decoration.classList.remove("bubble"),
										(te.decoration.innerText =
											le.count > 9 ? "9+" : String(le.count)));
							const pe = this.g
								.getColorTheme()
								.getColor(le.topSev === n.MarkerSeverity.Error ? p.$TS : p.$US);
							if (oe === void 0) return;
							!this.h.getValue(v.OutlineConfigKeys.problemsColors) || !oe
								? (te.container.style.removeProperty("--outline-element-color"),
									te.decoration.style.setProperty(
										"--outline-element-color",
										pe?.toString() ?? "inherit",
									))
								: te.container.style.setProperty(
										"--outline-element-color",
										pe?.toString() ?? "inherit",
									);
						}
						if (this.f === v.OutlineTarget.OutlinePane) {
							const oe = ee.element.cell,
								ae = this.d?.getViewModel();
							if (!ae) return;
							const pe = ae.getCellIndex(oe),
								$e = re ? 0 : ae.getFoldedLength(pe),
								ye = te.elementDisposables.add(
									this.k.createScoped(te.container),
								);
							e.$N4b.CellKind.bindTo(ye).set(
								re ? l.CellKind.Code : l.CellKind.Markup,
							),
								e.$N4b.CellHasChildren.bindTo(ye).set($e > 0),
								e.$N4b.CellHasHeader.bindTo(ye).set(
									ee.element.level !==
										O.NotebookOutlineConstants.NonHeaderOutlineLevel,
								),
								e.$N4b.OutlineElementTarget.bindTo(ye).set(this.f),
								this.n(re, ae, ye, te, oe);
							const ue = te.elementDisposables.add(
									new w.$jpb(te.actionMenu, this.j, {
										actionViewItemProvider: (ve) => {
											if (ve instanceof k.$2X)
												return this.m.createInstance(D.$Lyb, ve, void 0);
										},
									}),
								),
								fe = te.elementDisposables.add(
									this.l.createMenu(k.$XX.NotebookOutlineActionMenu, ye),
								),
								me = H(fe, {
									notebookEditor: this.d,
									outlineEntry: ee.element,
								});
							ue.setActions(me.primary, me.secondary),
								this.o(ue, fe, me, ee.element, te),
								(te.actionMenu.style.padding = "0 0.8em 0 0.4em");
						}
					}
					disposeTemplate(ee) {
						ee.iconLabel.dispose(), ee.elementDisposables.clear();
					}
					disposeElement(ee, _, te, Q) {
						te.elementDisposables.clear(), i.$9fb(te.actionMenu);
					}
					n(ee, _, te, Q, Z) {
						const se = ee ? b.CellFoldingState.None : Z.foldingState,
							re = e.$N4b.CellFoldingState.bindTo(te);
						re.set(se),
							ee ||
								Q.elementDisposables.add(
									_.onDidFoldingStateChanged(() => {
										const le = Z.foldingState;
										e.$N4b.CellFoldingState.bindTo(te).set(le), re.set(le);
									}),
								);
					}
					o(ee, _, te, Q, Z) {
						let se = !1,
							re;
						ee.setActions(te.primary, te.secondary),
							Z.elementDisposables.add(
								_.onDidChange(() => {
									if (se) {
										const oe = H(_, {
											notebookEditor: this.d,
											outlineEntry: Q,
										});
										re = () => ee.setActions(oe.primary, oe.secondary);
										return;
									}
									const le = H(_, { notebookEditor: this.d, outlineEntry: Q });
									ee.setActions(le.primary, le.secondary);
								}),
							),
							Z.container.classList.remove(
								"notebook-outline-toolbar-dropdown-active",
							),
							Z.elementDisposables.add(
								ee.onDidChangeDropdownVisibility((le) => {
									(se = le),
										le
											? Z.container.classList.add(
													"notebook-outline-toolbar-dropdown-active",
												)
											: Z.container.classList.remove(
													"notebook-outline-toolbar-dropdown-active",
												),
										re &&
											!le &&
											((0, M.$Oh)(
												() => {
													re?.();
												},
												0,
												Z.elementDisposables,
											),
											(re = void 0));
								}),
							);
					}
				};
				x = Ne(
					[
						j(2, o.$iP),
						j(3, a.$gj),
						j(4, P.$Xxb),
						j(5, L.$6j),
						j(6, k.$YX),
						j(7, c.$Li),
					],
					x,
				);
				function H(ne, ee) {
					const Q = { primary: [], secondary: [] };
					return (0, D.$Kyb)(ne, { shouldForwardArgs: !0, arg: ee }, Q), Q;
				}
				class q {
					getAriaLabel(ee) {
						return ee.label;
					}
					getWidgetAriaLabel() {
						return "";
					}
				}
				class V {
					getKeyboardNavigationLabel(ee) {
						return ee.label;
					}
				}
				class G {
					getHeight(ee) {
						return 22;
					}
					getTemplateId(ee) {
						return F.templateId;
					}
				}
				let K = class {
					constructor(ee, _, te) {
						(this.g = ee),
							(this.h = _),
							(this.j = te),
							(this.d = new m.$Zc()),
							(this.f = this.h.getValue(l.$56.gotoSymbolsAllSymbols)),
							this.d.add(
								this.h.onDidChangeConfiguration((Q) => {
									Q.affectsConfiguration(l.$56.gotoSymbolsAllSymbols) &&
										(this.f = this.h.getValue(l.$56.gotoSymbolsAllSymbols));
								}),
							);
					}
					getQuickPickElements() {
						const ee = [];
						for (const se of this.g?.object?.entries ?? []) se.asFlatList(ee);
						const _ = [],
							{ hasFileIcons: te } = this.j.getFileIconTheme(),
							Q = (se) => !!se.symbolKind,
							Z = (se) =>
								se.cell.cellKind === l.CellKind.Code &&
								se.level === O.NotebookOutlineConstants.NonHeaderOutlineLevel;
						for (let se = 0; se < ee.length; se++) {
							const re = ee[se],
								le = ee[se + 1];
							if ((!this.f && Q(re)) || (this.f && Z(re) && le && Q(le)))
								continue;
							const oe = te && !re.symbolKind;
							_.push({
								element: re,
								label: oe ? re.label : `$(${re.icon.id}) ${re.label}`,
								ariaLabel: re.label,
								iconClasses: oe ? (0, u.$CDb)(re.cell.language ?? "") : void 0,
							});
						}
						return _;
					}
					dispose() {
						this.d.dispose();
					}
				};
				(e.$I4b = K), (e.$I4b = K = Ne([j(1, a.$gj), j(2, o.$iP)], K));
				let J = class {
					constructor(ee, _) {
						(this.j = ee),
							(this.k = _),
							(this.d = new m.$Zc()),
							(this.f = this.k.getValue(l.$56.outlineShowCodeCells)),
							(this.g = this.k.getValue(l.$56.outlineShowCodeCellSymbols)),
							(this.h = this.k.getValue(l.$56.outlineShowMarkdownHeadersOnly)),
							this.d.add(
								this.k.onDidChangeConfiguration((te) => {
									te.affectsConfiguration(l.$56.outlineShowCodeCells) &&
										(this.f = this.k.getValue(l.$56.outlineShowCodeCells)),
										te.affectsConfiguration(l.$56.outlineShowCodeCellSymbols) &&
											(this.g = this.k.getValue(
												l.$56.outlineShowCodeCellSymbols,
											)),
										te.affectsConfiguration(
											l.$56.outlineShowMarkdownHeadersOnly,
										) &&
											(this.h = this.k.getValue(
												l.$56.outlineShowMarkdownHeadersOnly,
											));
								}),
							);
					}
					getActiveEntry() {
						const ee = this.j?.object?.activeElement;
						if (!ee) return;
						if (!this.l(ee)) return ee;
						let _ = ee.parent;
						for (; _; )
							if (this.l(_)) _ = _.parent;
							else return _;
					}
					l(ee) {
						return !!(
							(this.h &&
								ee.cell.cellKind === l.CellKind.Markup &&
								ee.level ===
									O.NotebookOutlineConstants.NonHeaderOutlineLevel) ||
							(!this.f && ee.cell.cellKind === l.CellKind.Code) ||
							(!this.g &&
								ee.cell.cellKind === l.CellKind.Code &&
								ee.level > O.NotebookOutlineConstants.NonHeaderOutlineLevel)
						);
					}
					*getChildren(ee) {
						const te =
							ee instanceof Y ? (this.j?.object?.entries ?? []) : ee.children;
						for (const Q of te)
							Q.cell.cellKind === l.CellKind.Markup
								? this.h
									? Q.level <
											O.NotebookOutlineConstants.NonHeaderOutlineLevel &&
										(yield Q)
									: yield Q
								: this.f &&
									Q.cell.cellKind === l.CellKind.Code &&
									(this.g
										? yield Q
										: Q.level ===
												O.NotebookOutlineConstants.NonHeaderOutlineLevel &&
											(yield Q));
					}
					dispose() {
						this.d.dispose();
					}
				};
				(e.$J4b = J), (e.$J4b = J = Ne([j(1, a.$gj)], J));
				let W = class {
					constructor(ee, _) {
						(this.g = ee),
							(this.h = _),
							(this.d = new m.$Zc()),
							(this.f = this.h.getValue(l.$56.breadcrumbsShowCodeCells)),
							this.d.add(
								this.h.onDidChangeConfiguration((te) => {
									te.affectsConfiguration(l.$56.breadcrumbsShowCodeCells) &&
										(this.f = this.h.getValue(l.$56.breadcrumbsShowCodeCells));
								}),
							);
					}
					getBreadcrumbElements() {
						const ee = [];
						let _ = this.g?.object?.activeElement;
						for (; _; )
							(this.f || _.cell.cellKind !== l.CellKind.Code) && ee.unshift(_),
								(_ = _.parent);
						return ee;
					}
					dispose() {
						this.d.dispose();
					}
				};
				(e.$K4b = W), (e.$K4b = W = Ne([j(1, a.$gj)], W));
				class X {
					constructor() {
						this.d = new i.$fgb(
							T.$Bfb,
							() => new Intl.Collator(void 0, { numeric: !0 }),
						);
					}
					compareByPosition(ee, _) {
						return ee.index - _.index;
					}
					compareByType(ee, _) {
						return (
							ee.cell.cellKind - _.cell.cellKind ||
							this.d.value.compare(ee.label, _.label)
						);
					}
					compareByName(ee, _) {
						return this.d.value.compare(ee.label, _.label);
					}
				}
				let Y = class {
					get activeElement() {
						if ((this.s(), this.u === v.OutlineTarget.OutlinePane))
							return this.config.treeDataSource.getActiveEntry();
						console.error(
							"activeElement should not be called outside of the OutlinePane",
						);
					}
					get entries() {
						return this.s(), this.m?.object?.entries ?? [];
					}
					get uri() {
						return this.m?.object?.uri;
					}
					get isEmpty() {
						return this.m?.object?.isEmpty ?? !0;
					}
					s() {
						this.j.isTriggered() && (this.j.cancel(), this.G());
					}
					constructor(ee, _, te, Q, Z, se, re, le) {
						(this.t = ee),
							(this.u = _),
							(this.v = te),
							(this.w = Q),
							(this.x = Z),
							(this.y = se),
							(this.z = re),
							(this.A = le),
							(this.outlineKind = "notebookCells"),
							(this.d = new m.$Zc()),
							(this.f = new m.$Zc()),
							(this.g = new m.$Zc()),
							(this.h = new C.$re()),
							(this.onDidChange = this.h.event),
							(this.j = this.d.add(new M.$Jh(300))),
							(this.k = this.d.add(new M.$Jh(200))),
							(this.l = this.d.add(new M.$Jh(2e3))),
							(this.q = this.y.getValue(l.$56.gotoSymbolsAllSymbols)),
							(this.r = this.y.getValue(l.$56.outlineShowCodeCellSymbols)),
							this.B();
						const oe = new G(),
							ae = [this.x.createInstance(x, this.t.getControl(), this.u)],
							pe = new X(),
							$e = {
								collapseByDefault:
									this.u === v.OutlineTarget.Breadcrumbs ||
									(this.u === v.OutlineTarget.OutlinePane &&
										this.y.getValue(v.OutlineConfigKeys.collapseItems) ===
											v.OutlineConfigCollapseItemsValues.Collapsed),
								expandOnlyOnTwistieClick: !0,
								multipleSelectionSupport: !1,
								accessibilityProvider: new q(),
								identityProvider: { getId: (ye) => ye.cell.uri.toString() },
								keyboardNavigationLabelProvider: new V(),
							};
						this.config = {
							treeDataSource: this.n,
							quickPickDataSource: this.o,
							breadcrumbsDataSource: this.p,
							delegate: oe,
							renderers: ae,
							comparator: pe,
							options: $e,
						};
					}
					B() {
						this.C(),
							this.D(),
							this.d.add(
								this.t.onDidChangeModel(() => {
									this.C(), this.D(), this.E();
								}),
							),
							this.d.add(
								this.z.documentSymbolProvider.onDidChange(() => {
									this.F();
								}),
							),
							this.d.add(
								this.t.onDidChangeSelection(() => {
									this.J();
								}),
							),
							this.d.add(
								this.y.onDidChangeConfiguration((ee) => {
									(ee.affectsConfiguration(
										l.$56.outlineShowMarkdownHeadersOnly,
									) ||
										ee.affectsConfiguration(l.$56.outlineShowCodeCells) ||
										ee.affectsConfiguration(l.$56.outlineShowCodeCellSymbols) ||
										ee.affectsConfiguration(l.$56.breadcrumbsShowCodeCells)) &&
										this.H();
								}),
							),
							this.d.add(
								this.A.onDidChangeExecution((ee) => {
									ee.type === U.NotebookExecutionType.cell &&
										this.t.textModel &&
										ee.affectsNotebook(this.t.textModel?.uri) &&
										this.H();
								}),
							),
							this.d.add(
								this.y.onDidChangeConfiguration((ee) => {
									(ee.affectsConfiguration(l.$56.gotoSymbolsAllSymbols) ||
										ee.affectsConfiguration(
											l.$56.outlineShowCodeCellSymbols,
										)) &&
										((this.q = this.y.getValue(l.$56.gotoSymbolsAllSymbols)),
										(this.r = this.y.getValue(
											l.$56.outlineShowCodeCellSymbols,
										)),
										this.E());
								}),
							),
							this.d.add(
								this.v.onDidFileIconThemeChange(() => {
									this.h.fire({});
								}),
							),
							this.G();
					}
					C() {
						const ee = this.t.getControl();
						this.m?.dispose(),
							this.g.clear(),
							ee?.hasModel()
								? ((this.m = this.g.add(
										this.x.invokeFunction((_) => _.get(B.$G4b).getOrCreate(ee)),
									)),
									this.g.add(
										this.m.object.onDidChange(() => {
											this.h.fire({});
										}),
									))
								: (this.m = void 0),
							(this.n = this.g.add(this.x.createInstance(J, this.m))),
							(this.o = this.g.add(this.x.createInstance(K, this.m))),
							(this.p = this.g.add(this.x.createInstance(W, this.m)));
					}
					D() {
						this.f.clear(),
							this.t.textModel &&
								(this.entries.length || this.E(),
								this.f.add(
									this.t.textModel.onDidChangeContent((ee) => {
										ee.rawEvents.some(
											(_) =>
												_.kind ===
													l.NotebookCellsChangeType.ChangeCellContent ||
												_.kind ===
													l.NotebookCellsChangeType
														.ChangeCellInternalMetadata ||
												_.kind === l.NotebookCellsChangeType.Move ||
												_.kind === l.NotebookCellsChangeType.ModelChange,
										) && this.H();
									}),
								));
					}
					async E(ee = S.CancellationToken.None) {
						this.u === v.OutlineTarget.QuickPick && this.q
							? await this.m?.object?.computeFullSymbols(ee)
							: this.u === v.OutlineTarget.OutlinePane &&
								this.r &&
								this.m?.object?.computeFullSymbols(ee);
					}
					async F() {
						this.j.cancel(),
							this.k.cancel(),
							this.l.trigger(() => {
								this.E();
							});
					}
					G() {
						this.m?.object?.recomputeState();
					}
					H() {
						this.k.cancel(),
							this.j.trigger(() => {
								this.G();
							});
					}
					I() {
						this.m?.object?.recomputeActive();
					}
					J() {
						this.k.trigger(() => {
							this.I();
						});
					}
					async reveal(ee, _, te) {
						const Q = {
							..._,
							override: this.t.input?.editorId,
							cellRevealType: b.CellRevealType.NearTopIfOutsideViewport,
							selection: ee.position,
							viewState: void 0,
						};
						await this.w.openEditor(
							{ resource: ee.cell.uri, options: Q },
							te ? y.$KY : void 0,
						);
					}
					preview(ee) {
						const _ = this.t.getControl();
						if (!_) return m.$1c.None;
						if (ee.range) {
							const Z = I.$iL.lift(ee.range);
							_.revealRangeInCenterIfOutsideViewportAsync(ee.cell, Z);
						} else _.revealInCenterIfOutsideViewport(ee.cell);
						const te = _.deltaCellDecorations(
							[],
							[
								{
									handle: ee.cell.handle,
									options: {
										className: "nb-symbolHighlight",
										outputClassName: "nb-symbolHighlight",
									},
								},
							],
						);
						let Q;
						return (
							_.changeModelDecorations((Z) => {
								if (ee.range) {
									const se = [
											{
												range: ee.range,
												options: {
													description:
														"document-symbols-outline-range-highlight",
													className: "rangeHighlight",
													isWholeLine: !0,
												},
											},
										],
										re = { ownerId: ee.cell.handle, decorations: se };
									Q = Z.deltaDecorations([], [re]);
								}
							}),
							(0, m.$Yc)(() => {
								_.deltaCellDecorations(te, []),
									Q?.length &&
										_.changeModelDecorations((Z) => {
											Z.deltaDecorations(Q, []);
										});
							})
						);
					}
					captureViewState() {
						const ee = this.t.getControl(),
							_ = ee?.getEditorViewState();
						return (0, m.$Yc)(() => {
							_ && ee?.restoreListViewState(_);
						});
					}
					dispose() {
						this.h.dispose(),
							this.d.dispose(),
							this.f.dispose(),
							this.g.dispose(),
							this.m?.dispose();
					}
				};
				(e.$L4b = Y),
					(e.$L4b = Y =
						Ne(
							[
								j(2, o.$iP),
								j(3, y.$IY),
								j(4, c.$Li),
								j(5, a.$gj),
								j(6, z.$k3),
								j(7, U.$d6),
							],
							Y,
						));
				let ie = class {
					constructor(ee, _) {
						this.d = _;
						const te = ee.registerOutlineCreator(this);
						this.dispose = () => te.dispose();
					}
					matches(ee) {
						return ee.getId() === s.$B4b.ID;
					}
					async createOutline(ee, _, te) {
						return this.d.createInstance(Y, ee, _);
					}
				};
				(e.$M4b = ie),
					(e.$M4b = ie = Ne([j(0, v.$x4b), j(1, c.$Li)], ie)),
					(e.$N4b = {
						CellKind: new L.$5j("notebookCellKind", void 0),
						CellHasChildren: new L.$5j("notebookCellHasChildren", !1),
						CellHasHeader: new L.$5j("notebookCellHasHeader", !1),
						CellFoldingState: new L.$5j(
							"notebookCellFoldingState",
							b.CellFoldingState.None,
						),
						OutlineElementTarget: new L.$5j(
							"notebookOutlineElementTarget",
							void 0,
						),
					}),
					g.$Io
						.as(f.Extensions.Workbench)
						.registerWorkbenchContribution(ie, $.LifecyclePhase.Eventually),
					g.$Io
						.as(h.$No.Configuration)
						.registerConfiguration({
							id: "notebook",
							order: 100,
							type: "object",
							properties: {
								[l.$56.outlineShowMarkdownHeadersOnly]: {
									type: "boolean",
									default: !0,
									markdownDescription: (0, t.localize)(7801, null),
								},
								[l.$56.outlineShowCodeCells]: {
									type: "boolean",
									default: !1,
									markdownDescription: (0, t.localize)(7802, null),
								},
								[l.$56.outlineShowCodeCellSymbols]: {
									type: "boolean",
									default: !0,
									markdownDescription: (0, t.localize)(7803, null),
								},
								[l.$56.breadcrumbsShowCodeCells]: {
									type: "boolean",
									default: !0,
									markdownDescription: (0, t.localize)(7804, null),
								},
								[l.$56.gotoSymbolsAllSymbols]: {
									type: "boolean",
									default: !0,
									markdownDescription: (0, t.localize)(7805, null),
								},
							},
						}),
					k.$ZX.appendMenuItem(k.$XX.ViewTitle, {
						submenu: k.$XX.NotebookOutlineFilter,
						title: (0, t.localize)(7806, null),
						icon: A.$ak.filter,
						group: "navigation",
						order: -1,
						when: L.$Kj.and(L.$Kj.equals("view", N.IOutlinePane.Id), R.$mJb),
					}),
					(0, k.$4X)(
						class extends k.$3X {
							constructor() {
								super({
									id: "notebook.outline.toggleShowMarkdownHeadersOnly",
									title: (0, t.localize)(7807, null),
									f1: !1,
									toggled: {
										condition: L.$Kj.equals(
											"config.notebook.outline.showMarkdownHeadersOnly",
											!0,
										),
									},
									menu: {
										id: k.$XX.NotebookOutlineFilter,
										group: "0_markdown_cells",
									},
								});
							}
							run(ee, ..._) {
								const te = ee.get(a.$gj),
									Q = te.getValue(l.$56.outlineShowMarkdownHeadersOnly);
								te.updateValue(l.$56.outlineShowMarkdownHeadersOnly, !Q);
							}
						},
					),
					(0, k.$4X)(
						class extends k.$3X {
							constructor() {
								super({
									id: "notebook.outline.toggleCodeCells",
									title: (0, t.localize)(7808, null),
									f1: !1,
									toggled: {
										condition: L.$Kj.equals(
											"config.notebook.outline.showCodeCells",
											!0,
										),
									},
									menu: {
										id: k.$XX.NotebookOutlineFilter,
										order: 1,
										group: "1_code_cells",
									},
								});
							}
							run(ee, ..._) {
								const te = ee.get(a.$gj),
									Q = te.getValue(l.$56.outlineShowCodeCells);
								te.updateValue(l.$56.outlineShowCodeCells, !Q);
							}
						},
					),
					(0, k.$4X)(
						class extends k.$3X {
							constructor() {
								super({
									id: "notebook.outline.toggleCodeCellSymbols",
									title: (0, t.localize)(7809, null),
									f1: !1,
									toggled: {
										condition: L.$Kj.equals(
											"config.notebook.outline.showCodeCellSymbols",
											!0,
										),
									},
									menu: {
										id: k.$XX.NotebookOutlineFilter,
										order: 2,
										group: "1_code_cells",
									},
								});
							}
							run(ee, ..._) {
								const te = ee.get(a.$gj),
									Q = te.getValue(l.$56.outlineShowCodeCellSymbols);
								te.updateValue(l.$56.outlineShowCodeCellSymbols, !Q);
							}
						},
					);
			},
		),
		define(
			de[4090],
			he([1, 0, 4, 11, 8, 1958, 1031, 108, 284, 70, 475]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$R4b = e.$Q4b = e.$P4b = e.$O4b = void 0),
					(m = mt(m));
				class a extends i.$3X {
					constructor() {
						super({
							id: "notebook.section.runSingleCell",
							title: {
								...(0, t.localize2)(7971, "Run Cell"),
								mnemonicTitle: (0, t.localize)(7963, null),
							},
							shortTitle: (0, t.localize)(7964, null),
							icon: m.$7Nb,
							menu: [
								{
									id: i.$XX.NotebookOutlineActionMenu,
									group: "inline",
									order: 1,
									when: w.$Kj.and(
										E.$N4b.CellKind.isEqualTo(r.CellKind.Code),
										E.$N4b.OutlineElementTarget.isEqualTo(
											u.OutlineTarget.OutlinePane,
										),
										E.$N4b.CellHasChildren.toNegated(),
										E.$N4b.CellHasHeader.toNegated(),
									),
								},
							],
						});
					}
					async run(o, f) {
						g(f) &&
							f.notebookEditor.executeNotebookCells([f.outlineEntry.cell]);
					}
				}
				e.$O4b = a;
				class h extends i.$3X {
					constructor() {
						super({
							id: "notebook.section.runCells",
							title: {
								...(0, t.localize2)(7972, "Run Cells In Section"),
								mnemonicTitle: (0, t.localize)(7965, null),
							},
							shortTitle: (0, t.localize)(7966, null),
							menu: [
								{
									id: i.$XX.NotebookStickyScrollContext,
									group: "notebookExecution",
									order: 1,
								},
								{
									id: i.$XX.NotebookOutlineActionMenu,
									group: "inline",
									order: 1,
									when: w.$Kj.and(
										E.$N4b.CellKind.isEqualTo(r.CellKind.Markup),
										E.$N4b.OutlineElementTarget.isEqualTo(
											u.OutlineTarget.OutlinePane,
										),
										E.$N4b.CellHasChildren,
										E.$N4b.CellHasHeader,
									),
								},
							],
						});
					}
					async run(o, f) {
						if (!g(f)) return;
						const b = f.outlineEntry.cell,
							s = f.notebookEditor.getViewModel()?.getCellIndex(b);
						if (s === void 0) return;
						const l = f.notebookEditor.getViewModel()?.getFoldedLength(s);
						if (l === void 0) return;
						const y = f.notebookEditor.getCellsInRange({
							start: s,
							end: s + l + 1,
						});
						f.notebookEditor.executeNotebookCells(y);
					}
				}
				e.$P4b = h;
				class c extends i.$3X {
					constructor() {
						super({
							id: "notebook.section.foldSection",
							title: {
								...(0, t.localize2)(7973, "Fold Section"),
								mnemonicTitle: (0, t.localize)(7967, null),
							},
							shortTitle: (0, t.localize)(7968, null),
							menu: [
								{
									id: i.$XX.NotebookOutlineActionMenu,
									group: "notebookFolding",
									order: 2,
									when: w.$Kj.and(
										E.$N4b.CellKind.isEqualTo(r.CellKind.Markup),
										E.$N4b.OutlineElementTarget.isEqualTo(
											u.OutlineTarget.OutlinePane,
										),
										E.$N4b.CellHasChildren,
										E.$N4b.CellHasHeader,
										E.$N4b.CellFoldingState.isEqualTo(
											d.CellFoldingState.Expanded,
										),
									),
								},
							],
						});
					}
					async run(o, f) {
						g(f) && this.a(f.outlineEntry, f.notebookEditor);
					}
					a(o, f) {
						const b = f.getContribution(C.$83b.id),
							s = o.index,
							l = o.level,
							y = d.CellFoldingState.Collapsed;
						b.setFoldingStateDown(s, y, l);
					}
				}
				e.$Q4b = c;
				class n extends i.$3X {
					constructor() {
						super({
							id: "notebook.section.expandSection",
							title: {
								...(0, t.localize2)(7974, "Expand Section"),
								mnemonicTitle: (0, t.localize)(7969, null),
							},
							shortTitle: (0, t.localize)(7970, null),
							menu: [
								{
									id: i.$XX.NotebookOutlineActionMenu,
									group: "notebookFolding",
									order: 2,
									when: w.$Kj.and(
										E.$N4b.CellKind.isEqualTo(r.CellKind.Markup),
										E.$N4b.OutlineElementTarget.isEqualTo(
											u.OutlineTarget.OutlinePane,
										),
										E.$N4b.CellHasChildren,
										E.$N4b.CellHasHeader,
										E.$N4b.CellFoldingState.isEqualTo(
											d.CellFoldingState.Collapsed,
										),
									),
								},
							],
						});
					}
					async run(o, f) {
						g(f) && this.a(f.outlineEntry, f.notebookEditor);
					}
					a(o, f) {
						const b = f.getContribution(C.$83b.id),
							s = o.index,
							l = o.level,
							y = d.CellFoldingState.Expanded;
						b.setFoldingStateDown(s, y, l);
					}
				}
				e.$R4b = n;
				function g(p) {
					return !!(p && p.notebookEditor && p.outlineEntry);
				}
				(0, i.$4X)(a), (0, i.$4X)(h), (0, i.$4X)(c), (0, i.$4X)(n);
			},
		),
		define(
			de[4091],
			he([
				1, 0, 4, 50, 163, 6, 103, 149, 3, 59, 23, 19, 28, 9, 91, 10, 22, 5, 21,
				282, 3471, 1305, 3479, 70, 360, 509, 3505, 1849, 161, 231, 53, 404, 68,
				834, 711, 76, 1319,
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
			) {
				"use strict";
				var B, U;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6Ec = e.$5Ec = e.$4Ec = void 0);
				let z = class extends m.$1c {
					static {
						B = this;
					}
					static {
						this.c = "notebookEditors";
					}
					static {
						this.f = "editors";
					}
					constructor(V, G, K, J, W, X, Y, ie, ne) {
						super(),
							(this.n = K),
							(this.q = J),
							(this.s = W),
							(this.t = X),
							(this.u = Y),
							(this.w = ie),
							(this.y = ne),
							(this.h = !1),
							(this.j = new Map()),
							(this.m = this.D(new m.$Zc())),
							(this.g = new b.$eEb(B.c, V));
						const ee = this.g.getMemento(
							f.StorageScope.PROFILE,
							f.StorageTarget.MACHINE,
						);
						this.n.bufferChangeEvents(() => {
							for (const _ of ee[B.f] || []) this.add(new T.$LIb(_), !1);
						}),
							this.D(
								G.onDidRegisterExtensions(() => {
									this.h || (this.G(), (ee[B.f] = []), this.g.saveMemento());
								}),
							),
							s.$oEc.setHandler((_) => this.z(_));
					}
					dispose() {
						this.G(), super.dispose();
					}
					z(V) {
						this.h = !0;
						const G = [...this.j.values()].filter((W) => !W.extension);
						this.G();
						const K = new Map();
						G.forEach((W) => {
							K.set(W.id, this.add(W));
						});
						for (const W of V)
							for (const X of W.value) {
								if (!X.type) {
									W.collector.error("Notebook does not specify type-property");
									continue;
								}
								const Y = this.get(X.type);
								if (Y)
									if (
										!Y.extension &&
										W.description.isBuiltin &&
										G.find((ie) => ie.id === X.type)
									)
										K.get(X.type)?.dispose();
									else {
										W.collector.error(`Notebook type '${X.type}' already used`);
										continue;
									}
								this.add(
									new T.$LIb({
										extension: W.description.identifier,
										id: X.type,
										displayName: X.displayName,
										selectors: X.selector || [],
										priority: this.C(X.priority),
										providerDisplayName:
											W.description.displayName ??
											W.description.identifier.value,
									}),
								);
							}
						const J = this.g.getMemento(
							f.StorageScope.PROFILE,
							f.StorageTarget.MACHINE,
						);
						(J[B.f] = Array.from(this.j.values())), this.g.saveMemento();
					}
					clearEditorCache() {
						const V = this.g.getMemento(
							f.StorageScope.PROFILE,
							f.StorageTarget.MACHINE,
						);
						(V[B.f] = []), this.g.saveMemento();
					}
					C(V) {
						return !V || V === $.NotebookEditorPriority.default
							? k.RegisteredEditorPriority.default
							: k.RegisteredEditorPriority.option;
					}
					F(V) {
						const G = new m.$Zc();
						for (const K of V.selectors) {
							const J = K.include || K,
								W = {
									id: V.id,
									label: V.displayName,
									detail: V.providerDisplayName,
									priority: V.priority,
								},
								X = {
									canHandleDiff: () =>
										!!this.q.getValue($.$56.textDiffEditorPreview) &&
										!this.s.isScreenReaderOptimized(),
									canSupportResource: (Q) =>
										Q.scheme === u.Schemas.untitled ||
										Q.scheme === u.Schemas.vscodeNotebookCell ||
										this.u.hasProvider(Q),
								},
								Y = ({ resource: Q, options: Z }) => {
									const se = $.CellUri.parse(Q);
									let re,
										le,
										oe = Q;
									se
										? ((re = this.y.asCanonicalUri(se.notebook)),
											(oe = se.notebook),
											(le = { resource: Q, options: Z }))
										: (re = this.y.asCanonicalUri(Q)),
										le || (le = Z?.cellOptions);
									const ae = { ...Z, cellOptions: le, viewState: void 0 };
									return {
										editor: v.$TIb.getOrCreate(this.t, re, oe, V.id),
										options: ae,
									};
								},
								ie = async ({ resource: Q, options: Z }) => {
									const se = await this.w.resolve(
										{ untitledResource: Q },
										V.id,
									);
									return (
										se.object.notebook.onWillDispose(() => {
											se.dispose();
										}),
										{
											editor: v.$TIb.getOrCreate(
												this.t,
												se.object.resource,
												void 0,
												V.id,
											),
											options: Z,
										}
									);
								},
								ne = (Q, Z) => {
									const {
										modified: se,
										original: re,
										label: le,
										description: oe,
									} = Q;
									return this.q.getValue(
										"notebook.experimental.enableNewDiffEditor",
									)
										? {
												editor: O.$2Ec.create(
													this.t,
													se.resource,
													le,
													oe,
													re.resource,
													V.id,
												),
											}
										: {
												editor: l.$rEc.create(
													this.t,
													se.resource,
													le,
													oe,
													re.resource,
													V.id,
												),
											};
								},
								_ = {
									createEditorInput: Y,
									createDiffEditorInput: ne,
									createUntitledEditorInput: ie,
									createMergeEditorInput: (Q) => ({
										editor: this.t.createInstance(
											A.$Enc,
											Q.base.resource,
											{
												uri: Q.input1.resource,
												title: Q.input1.label ?? (0, a.$kh)(Q.input1.resource),
												description: Q.input1.description ?? "",
												detail: Q.input1.detail,
											},
											{
												uri: Q.input2.resource,
												title: Q.input2.label ?? (0, a.$kh)(Q.input2.resource),
												description: Q.input2.description ?? "",
												detail: Q.input2.detail,
											},
											Q.result.resource,
										),
									}),
								},
								te = { createEditorInput: Y, createDiffEditorInput: ne };
							G.add(
								this.q.onDidChangeConfiguration((Q) => {
									Q.affectsConfiguration($.$56.textDiffEditorPreview) &&
										(!!this.q.getValue($.$56.textDiffEditorPreview) &&
										!this.s.isScreenReaderOptimized()
											? ((_.createDiffEditorInput = ne),
												(te.createDiffEditorInput = ne))
											: ((_.createDiffEditorInput = void 0),
												(te.createDiffEditorInput = void 0)));
								}),
							),
								G.add(
									this.s.onDidChangeScreenReaderOptimized(() => {
										!!this.q.getValue($.$56.textDiffEditorPreview) &&
										!this.s.isScreenReaderOptimized()
											? ((_.createDiffEditorInput = ne),
												(te.createDiffEditorInput = ne))
											: ((_.createDiffEditorInput = void 0),
												(te.createDiffEditorInput = void 0));
									}),
								),
								G.add(this.n.registerEditor(J, W, X, _)),
								G.add(
									this.n.registerEditor(
										`${u.Schemas.vscodeNotebookCell}:/**/${J}`,
										{ ...W, priority: k.RegisteredEditorPriority.exclusive },
										X,
										te,
									),
								);
						}
						return G;
					}
					G() {
						this.j.clear(), this.m.clear();
					}
					get(V) {
						return this.j.get(V);
					}
					add(V, G = !0) {
						if (this.j.has(V.id))
							throw new Error(`notebook type '${V.id}' ALREADY EXISTS`);
						this.j.set(V.id, V);
						let K;
						if ((V.extension && ((K = this.F(V)), this.m.add(K)), G)) {
							const J = this.g.getMemento(
								f.StorageScope.PROFILE,
								f.StorageTarget.MACHINE,
							);
							(J[B.f] = Array.from(this.j.values())), this.g.saveMemento();
						}
						return this.D(
							(0, m.$Yc)(() => {
								const J = this.g.getMemento(
									f.StorageScope.PROFILE,
									f.StorageTarget.MACHINE,
								);
								(J[B.f] = Array.from(this.j.values())),
									this.g.saveMemento(),
									K?.dispose(),
									this.j.delete(V.id);
							}),
						);
					}
					getContributedNotebook(V) {
						const G = [];
						for (const K of this.j.values()) K.matches(V) && G.push(K);
						return G.length === 0 && V.scheme === u.Schemas.untitled
							? Array.from(this.j.values())
							: G;
					}
					[Symbol.iterator]() {
						return this.j.values();
					}
				};
				(e.$4Ec = z),
					(e.$4Ec =
						z =
						B =
							Ne(
								[
									j(0, f.$lq),
									j(1, L.$q2),
									j(2, k.$E6),
									j(3, g.$gj),
									j(4, n.$XK),
									j(5, o.$Li),
									j(6, p.$ll),
									j(7, S.$OIb),
									j(8, M.$Vl),
								],
								z,
							));
				let F = class {
					constructor(V) {
						(this.c = new Map()),
							(this.f = new d.$Y(() =>
								this.d.getMemento(
									f.StorageScope.WORKSPACE,
									f.StorageTarget.MACHINE,
								),
							)),
							(this.d = new b.$eEb(
								"workbench.editor.notebook.preferredRenderer2",
								V,
							));
					}
					clear() {
						this.c.clear();
					}
					get(V) {
						return this.c.get(V);
					}
					getAll() {
						return Array.from(this.c.values());
					}
					add(V) {
						this.c.has(V.id) || this.c.set(V.id, V);
					}
					setPreferred(V, G, K) {
						const J = this.f.value,
							W = J[V.id];
						W ? (W[G] = K) : (J[V.id] = { [G]: K }), this.d.saveMemento();
					}
					findBestRenderers(V, G, K) {
						let J;
						(function (ne) {
							(ne[(ne.PreviouslySelected = 256)] = "PreviouslySelected"),
								(ne[(ne.SameExtensionAsNotebook = 512)] =
									"SameExtensionAsNotebook"),
								(ne[(ne.OtherRenderer = 768)] = "OtherRenderer"),
								(ne[(ne.BuiltIn = 1024)] = "BuiltIn");
						})(J || (J = {}));
						const W = V && this.f.value[V.id]?.[G],
							X = V?.extension?.value,
							Y = V?.id,
							ie = Array.from(this.c.values())
								.map((ne) => {
									const ee =
										K === void 0
											? ne.matchesWithoutKernel(G)
											: ne.matches(G, K);
									if (ee === $.NotebookRendererMatch.Never) return;
									const _ = ne.extensionId.value,
										te =
											W === ne.id
												? J.PreviouslySelected
												: _ === X || $.$W6.get(_)?.has(Y)
													? J.SameExtensionAsNotebook
													: ne.isBuiltin
														? J.BuiltIn
														: J.OtherRenderer;
									return {
										ordered: { mimeType: G, rendererId: ne.id, isTrusted: !0 },
										score: te | ee,
									};
								})
								.filter(h.$tg);
						return ie.length === 0
							? [{ mimeType: G, rendererId: $.$X6, isTrusted: !0 }]
							: ie
									.sort((ne, ee) => ne.score - ee.score)
									.map((ne) => ne.ordered);
					}
				};
				(e.$5Ec = F), (e.$5Ec = F = Ne([j(0, f.$lq)], F));
				class x {
					get uri() {
						return this.model.uri;
					}
					constructor(V, G) {
						(this.model = V),
							(this.c = new m.$Zc()),
							this.c.add(V.onWillDispose(() => G(V)));
					}
					getCellIndex(V) {
						return this.model.cells.findIndex((G) => (0, a.$gh)(G.uri, V));
					}
					dispose() {
						this.c.dispose();
					}
				}
				let H = class extends m.$1c {
					static {
						U = this;
					}
					static {
						this.c = "notebook.viewTypeProvider";
					}
					get m() {
						return (
							this.j || (this.j = this.D(this.O.createInstance(z))), this.j
						);
					}
					constructor(V, G, K, J, W, X) {
						super(),
							(this.L = V),
							(this.M = G),
							(this.N = K),
							(this.O = J),
							(this.P = W),
							(this.Q = X),
							(this.h = new Map()),
							(this.j = void 0),
							(this.n = this.O.createInstance(F)),
							(this.q = this.D(new E.$re())),
							(this.onDidChangeOutputRenderers = this.q.event),
							(this.s = new Set()),
							(this.t = new r.$Gc()),
							(this.u = this.D(new E.$re())),
							(this.w = this.D(new E.$re())),
							(this.y = this.D(new E.$re())),
							(this.z = this.D(new E.$re())),
							(this.onWillAddNotebookDocument = this.u.event),
							(this.onDidAddNotebookDocument = this.w.event),
							(this.onDidRemoveNotebookDocument = this.z.event),
							(this.onWillRemoveNotebookDocument = this.y.event),
							(this.C = this.D(new E.$re())),
							(this.onAddViewType = this.C.event),
							(this.F = this.D(new E.$re())),
							(this.onWillRemoveViewType = this.F.event),
							(this.G = this.D(new E.$re())),
							(this.onDidChangeEditorTypes = this.G.event),
							(this.I = !0),
							s.$pEc.setHandler((ie) => {
								this.n.clear();
								for (const ne of ie)
									for (const ee of ne.value) {
										if (!ee.entrypoint) {
											ne.collector.error(
												"Notebook renderer does not specify entry point",
											);
											continue;
										}
										const _ = ee.id;
										if (!_) {
											ne.collector.error(
												"Notebook renderer does not specify id-property",
											);
											continue;
										}
										this.n.add(
											new I.$sEc({
												id: _,
												extension: ne.description,
												entrypoint: ee.entrypoint,
												displayName: ee.displayName,
												mimeTypes: ee.mimeTypes || [],
												dependencies: ee.dependencies,
												optionalDependencies: ee.optionalDependencies,
												requiresMessaging: ee.requiresMessaging,
											}),
										);
									}
								this.q.fire();
							}),
							s.$qEc.setHandler((ie) => {
								this.s.clear();
								for (const ne of ie)
									if (
										(0, L.$t2)(ne.description, "contribNotebookStaticPreloads")
									)
										for (const ee of ne.value) {
											if (!ee.entrypoint) {
												ne.collector.error(
													"Notebook preload does not specify entry point",
												);
												continue;
											}
											const _ = ee.type;
											if (!_) {
												ne.collector.error(
													"Notebook preload does not specify type-property",
												);
												continue;
											}
											this.s.add(
												new I.$tEc({
													type: _,
													extension: ne.description,
													entrypoint: ee.entrypoint,
													localResourceRoots: ee.localResourceRoots ?? [],
												}),
											);
										}
							});
						const Y = () => {
							this.J = new $.$Y6(
								this.M.getValue($.$56.displayOrder) || [],
								this.N.isScreenReaderOptimized() ? $.$V6 : $.$U6,
							);
						};
						Y(),
							this.D(
								this.M.onDidChangeConfiguration((ie) => {
									ie.affectsConfiguration($.$56.displayOrder) && Y();
								}),
							),
							this.D(
								this.N.onDidChangeScreenReaderOptimized(() => {
									Y();
								}),
							),
							(this.f = new b.$eEb(U.c, this.P)),
							(this.g = this.f.getMemento(
								f.StorageScope.WORKSPACE,
								f.StorageTarget.MACHINE,
							));
					}
					getEditorTypes() {
						return [...this.m].map((V) => ({
							id: V.id,
							displayName: V.displayName,
							providerDisplayName: V.providerDisplayName,
						}));
					}
					clearEditorCache() {
						this.m.clearEditorCache();
					}
					R(V) {
						this.L.activateByEvent(`onNotebook:${V}`),
							this.L.activateByEvent("onNotebook:*");
					}
					async canResolve(V) {
						return this.h.has(V)
							? !0
							: (await this.L.whenInstalledExtensionsRegistered(),
								await this.L.activateByEvent(`onNotebookSerializer:${V}`),
								this.h.has(V));
					}
					registerContributedNotebookType(V, G) {
						const K = new T.$LIb({
							extension: G.extension,
							id: V,
							displayName: G.displayName,
							providerDisplayName: G.providerDisplayName,
							priority: G.priority || k.RegisteredEditorPriority.default,
							selectors: [],
						});
						K.update({ selectors: G.filenamePattern });
						const J = this.m.add(K);
						return (
							this.G.fire(),
							(0, m.$Yc)(() => {
								J.dispose(), this.G.fire();
							})
						);
					}
					S(V, G) {
						if (this.h.has(V))
							throw new Error(
								`notebook provider for viewtype '${V}' already exists`,
							);
						return (
							this.h.set(V, G),
							this.C.fire(V),
							(0, m.$Yc)(() => {
								this.F.fire(V), this.h.delete(V);
							})
						);
					}
					registerNotebookSerializer(V, G, K) {
						return (
							this.m.get(V)?.update({ options: K.options }),
							(this.g[V] = G.id.value),
							this.U(),
							this.S(V, new P.$NIb(V, K, G))
						);
					}
					async withNotebookDataProvider(V) {
						const G = this.m.get(V);
						if (!G) {
							const J = this.getViewTypeProvider(V),
								W = J
									? [
											(0, i.$wj)({
												id: "workbench.notebook.action.installMissingViewType",
												label: (0, t.localize)(8183, null, V),
												run: async () => {
													await this.O.createInstance(D.$KTb, J).run();
												},
											}),
										]
									: [];
							throw (0, w.$zj)(`UNKNOWN notebook type '${V}'`, W);
						}
						await this.canResolve(G.id);
						const K = this.h.get(G.id);
						if (!K)
							throw new Error(
								`NO provider registered for view type: '${G.id}'`,
							);
						return K;
					}
					tryGetDataProviderSync(V) {
						const G = this.m.get(V);
						if (G) return this.h.get(G.id);
					}
					U() {
						this.f.saveMemento();
					}
					getViewTypeProvider(V) {
						return this.g[V];
					}
					getRendererInfo(V) {
						return this.n.get(V);
					}
					updateMimePreferredRenderer(V, G, K, J) {
						const W = this.m.get(V);
						W && this.n.setPreferred(W, G, K), this.J.prioritize(G, J);
					}
					saveMimeDisplayOrder(V) {
						this.M.updateValue($.$56.displayOrder, this.J.toArray(), V);
					}
					getRenderers() {
						return this.n.getAll();
					}
					*getStaticPreloads(V) {
						for (const G of this.s) G.type === V && (yield G);
					}
					async createNotebookTextModel(V, G, K) {
						if (this.t.has(G))
							throw new Error(`notebook for ${G} already exists`);
						const J = await this.withNotebookDataProvider(V);
						if (!(J instanceof P.$NIb))
							throw new Error("CANNOT open file notebook with this provider");
						const W = K ? await (0, R.$6e)(K) : R.$Te.fromByteArray([]),
							X = await J.serializer.dataToNotebook(W),
							Y = this.O.createInstance(
								y.$b6,
								J.viewType,
								G,
								X.cells,
								X.metadata,
								J.serializer.options,
							),
							ie = new x(Y, this.W.bind(this));
						return (
							this.t.set(G, ie),
							this.Q.addNotebookDocument(ie),
							this.u.fire(Y),
							this.w.fire(Y),
							this.R(J.viewType),
							Y
						);
					}
					getNotebookTextModel(V) {
						return this.t.get(V)?.model;
					}
					getNotebookTextModels() {
						return C.Iterable.map(this.t.values(), (V) => V.model);
					}
					listNotebookDocuments() {
						return [...this.t].map((V) => V[1].model);
					}
					W(V) {
						const G = this.t.get(V.uri);
						G &&
							(this.y.fire(G.model),
							this.t.delete(V.uri),
							this.Q.removeNotebookDocument(G),
							G.dispose(),
							this.z.fire(G.model));
					}
					getOutputMimeTypeInfo(V, G, K) {
						const J = this.J.sort(new Set(K.outputs.map((X) => X.mime))),
							W = this.m.get(V.viewType);
						return J.flatMap((X) => this.n.findBestRenderers(W, X, G)).sort(
							(X, Y) =>
								(X.rendererId === $.$X6 ? 1 : 0) -
								(Y.rendererId === $.$X6 ? 1 : 0),
						);
					}
					getContributedNotebookTypes(V) {
						return V ? this.m.getContributedNotebook(V) : [...this.m];
					}
					getContributedNotebookType(V) {
						return this.m.get(V);
					}
					getNotebookProviderResourceRoots() {
						const V = [];
						return (
							this.h.forEach((G) => {
								G.extensionData.location &&
									V.push(c.URI.revive(G.extensionData.location));
							}),
							V
						);
					}
					setToCopy(V, G) {
						(this.H = V), (this.I = G);
					}
					getToCopy() {
						if (this.H) return { items: this.H, isCopy: this.I };
					}
				};
				(e.$6Ec = H),
					(e.$6Ec =
						H =
						U =
							Ne(
								[
									j(0, L.$q2),
									j(1, g.$gj),
									j(2, n.$XK),
									j(3, o.$Li),
									j(4, f.$lq),
									j(5, N.$I6),
								],
								H,
							));
			},
		),
		define(
			de[1959],
			he([1, 0, 6, 3, 266, 17, 104, 98, 543, 1026, 427, 108]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$11b = void 0),
					(d = mt(d));
				class h extends i.$1c {
					get handle() {
						return this.model.handle;
					}
					get uri() {
						return this.model.uri;
					}
					get lineCount() {
						return this.model.textBuffer.getLineCount();
					}
					get metadata() {
						return this.model.metadata;
					}
					get internalMetadata() {
						return this.model.internalMetadata;
					}
					get language() {
						return this.model.language;
					}
					get mime() {
						if (typeof this.model.mime == "string") return this.model.mime;
						switch (this.language) {
							case "markdown":
								return w.$EK.markdown;
							default:
								return w.$EK.text;
						}
					}
					get lineNumbers() {
						return this.f;
					}
					set lineNumbers(n) {
						n !== this.f &&
							((this.f = n), this.b.fire({ cellLineNumberChanged: !0 }));
					}
					get commentOptions() {
						return this.g;
					}
					set commentOptions(n) {
						this.g = n;
					}
					get focusMode() {
						return this.h;
					}
					set focusMode(n) {
						this.h !== n &&
							((this.h = n), this.b.fire({ focusModeChanged: !0 }));
					}
					get editorAttached() {
						return !!this.j;
					}
					get textModel() {
						return this.model.textModel;
					}
					hasModel() {
						return !!this.textModel;
					}
					get dragging() {
						return this.G;
					}
					set dragging(n) {
						(this.G = n), this.b.fire({ dragStateChanged: !0 });
					}
					get isInputCollapsed() {
						return this.I;
					}
					set isInputCollapsed(n) {
						(this.I = n), this.b.fire({ inputCollapsedChanged: !0 });
					}
					get isOutputCollapsed() {
						return this.J;
					}
					set isOutputCollapsed(n) {
						(this.J = n), this.b.fire({ outputCollapsedChanged: !0 });
					}
					set commentHeight(n) {
						this.L !== n &&
							((this.L = n),
							this.layoutChange(
								{ commentHeight: !0 },
								"BaseCellViewModel#commentHeight",
							));
					}
					constructor(n, g, p, o, f, b, s, l) {
						super(),
							(this.viewType = n),
							(this.model = g),
							(this.id = p),
							(this.N = o),
							(this.O = f),
							(this.P = b),
							(this.Q = s),
							(this.R = l),
							(this.a = this.D(new t.$re())),
							(this.onDidChangeEditorAttachState = this.a.event),
							(this.b = this.D(new t.$re())),
							(this.onDidChangeState = this.b.event),
							(this.c = a.CellEditState.Preview),
							(this.f = "inherit"),
							(this.h = a.CellFocusMode.Container),
							(this.m = []),
							(this.n = null),
							(this.q = null),
							(this.r = new Map()),
							(this.t = this.D(new i.$2c())),
							(this.u = this.D(new t.$re())),
							(this.onCellDecorationsChanged = this.u.event),
							(this.w = new Map()),
							(this.y = 0),
							(this.z = new Map()),
							(this.C = this.D(new t.$re())),
							(this.onDidChangeCellStatusBarItems = this.C.event),
							(this.F = 0),
							(this.G = !1),
							(this.I = !1),
							(this.J = !1),
							(this.L = 0),
							(this.M = !1),
							(this.Z = ""),
							this.D(
								g.onDidChangeMetadata(() => {
									this.b.fire({ metadataChanged: !0 });
								}),
							),
							this.D(
								g.onDidChangeInternalMetadata((y) => {
									this.b.fire({ internalMetadataChanged: !0 }),
										y.lastRunSuccessChanged && this.layoutChange({});
								}),
							),
							this.D(
								this.O.onDidChangeConfiguration((y) => {
									y.affectsConfiguration("notebook.lineNumbers") &&
										(this.lineNumbers = "inherit");
								}),
							),
							this.model.collapseState?.inputCollapsed && (this.I = !0),
							this.model.collapseState?.outputCollapsed && (this.J = !0),
							(this.g = this.O.getValue("editor.comments", {
								overrideIdentifier: this.language,
							})),
							this.D(
								this.O.onDidChangeConfiguration((y) => {
									y.affectsConfiguration("editor.comments") &&
										(this.g = this.O.getValue("editor.comments", {
											overrideIdentifier: this.language,
										}));
								}),
							);
					}
					assertTextModelAttached() {
						return !!(
							this.textModel &&
							this.j &&
							this.j.getModel() === this.textModel
						);
					}
					attachTextEditor(n, g) {
						if (!n.hasModel())
							throw new Error("Invalid editor: model is missing");
						if (this.j === n) {
							this.m.length === 0 &&
								(this.m.push(
									this.j.onDidChangeCursorSelection(() => {
										this.b.fire({ selectionChanged: !0 });
									}),
								),
								this.b.fire({ selectionChanged: !0 }));
							return;
						}
						if (
							((this.j = n),
							this.n
								? this.W(this.n)
								: g &&
									this.W({
										contributionsState: {},
										cursorState: [],
										viewState: {
											scrollLeft: 0,
											firstPosition: { lineNumber: 1, column: 1 },
											firstPositionDeltaTop:
												this.N.notebookOptions.getLayoutConfiguration()
													.editorTopPadding,
										},
									}),
							this.q && (0, r.$G1b)(n.getModel(), this.q, this.R),
							this.M)
						)
							return;
						n.changeDecorations((o) => {
							this.w.forEach((f, b) => {
								if (b.startsWith("_lazy_")) {
									const s = o.addDecoration(f.options.range, f.options.options);
									this.w.get(b).id = s;
								} else {
									const s = o.addDecoration(f.options.range, f.options.options);
									this.w.get(b).id = s;
								}
							});
						}),
							this.m.push(
								n.onDidChangeCursorSelection(() => {
									this.b.fire({ selectionChanged: !0 });
								}),
							);
						const p = u.$Z1b.get(this.j);
						p &&
							this.m.push(
								p.onWillStartSession(() => {
									this.textBuffer.getLength() === 0 &&
										this.enableAutoLanguageDetection();
								}),
							),
							this.b.fire({ selectionChanged: !0 }),
							this.a.fire();
					}
					detachTextEditor() {
						this.S(),
							this.U(),
							this.j?.changeDecorations((n) => {
								this.w.forEach((g) => {
									const p = g.id;
									p && n.removeDecoration(p);
								});
							}),
							(this.j = void 0),
							(0, i.$Vc)(this.m),
							(this.m = []),
							this.a.fire(),
							this.H && (this.H.dispose(), (this.H = void 0)),
							this.t.clear();
					}
					getText() {
						return this.model.getValue();
					}
					getAlternativeId() {
						return this.model.alternativeId;
					}
					getTextLength() {
						return this.model.getTextLength();
					}
					enableAutoLanguageDetection() {
						this.model.enableAutoLanguageDetection();
					}
					S() {
						this.j && (this.n = this.j.saveViewState());
					}
					U() {
						!this.j ||
							!this.j.hasModel() ||
							(this.q = (0, r.$H1b)(this.j.getModel(), this.R));
					}
					saveEditorViewState() {
						return this.j && (this.n = this.j.saveViewState()), this.n;
					}
					restoreEditorViewState(n, g) {
						this.n = n;
					}
					W(n) {
						n && this.j?.restoreViewState(n);
					}
					addModelDecoration(n) {
						if (!this.j) {
							const p = ++this.y,
								o = `_lazy_${this.id};${p}`;
							return this.w.set(o, { options: n }), o;
						}
						let g;
						return (
							this.j.changeDecorations((p) => {
								(g = p.addDecoration(n.range, n.options)),
									this.w.set(g, { id: g, options: n });
							}),
							g
						);
					}
					removeModelDecoration(n) {
						const g = this.w.get(n);
						this.j &&
							g &&
							g.id !== void 0 &&
							this.j.changeDecorations((p) => {
								p.removeDecoration(g.id);
							}),
							this.w.delete(n);
					}
					deltaModelDecorations(n, g) {
						return (
							n.forEach((o) => {
								this.removeModelDecoration(o);
							}),
							g.map((o) => this.addModelDecoration(o))
						);
					}
					X(n) {
						const g = this.r.get(n);
						if ((this.r.delete(n), g)) {
							for (const p of this.r.values())
								g.className === p.className && (g.className = void 0),
									g.outputClassName === p.outputClassName &&
										(g.outputClassName = void 0),
									g.gutterClassName === p.gutterClassName &&
										(g.gutterClassName = void 0),
									g.topClassName === p.topClassName &&
										(g.topClassName = void 0);
							this.u.fire({ added: [], removed: [g] });
						}
					}
					Y(n) {
						const g = ++this.y,
							p = `_cell_${this.id};${g}`;
						return (
							this.r.set(p, n), this.u.fire({ added: [n], removed: [] }), p
						);
					}
					getCellDecorations() {
						return [...this.r.values()];
					}
					getCellDecorationRange(n) {
						return this.j
							? (this.j.getModel()?.getDecorationRange(n) ?? null)
							: null;
					}
					deltaCellDecorations(n, g) {
						return (
							n.forEach((o) => {
								this.X(o);
							}),
							g.map((o) => this.Y(o))
						);
					}
					deltaCellStatusBarItems(n, g) {
						n.forEach((o) => {
							this.z.get(o) && this.z.delete(o);
						});
						const p = g.map((o) => {
							const f = ++this.F,
								b = `_cell_${this.id};${f}`;
							return this.z.set(b, o), b;
						});
						return this.C.fire(), p;
					}
					getCellStatusBarItems() {
						return Array.from(this.z.values());
					}
					revealRangeInCenter(n) {
						this.j?.revealRangeInCenter(n, d.ScrollType.Immediate);
					}
					setSelection(n) {
						this.j?.setSelection(n);
					}
					setSelections(n) {
						n.length &&
							(this.j
								? this.j?.setSelections(n)
								: this.n &&
									(this.n.cursorState = n.map((g) => ({
										inSelectionMode: !g.isEmpty(),
										selectionStart: g.getStartPosition(),
										position: g.getEndPosition(),
									}))));
					}
					getSelections() {
						return (
							this.j?.getSelections() ??
							this.n?.cursorState.map(
								(n) =>
									new C.$kL(
										n.selectionStart.lineNumber,
										n.selectionStart.column,
										n.position.lineNumber,
										n.position.column,
									),
							) ??
							[]
						);
					}
					getSelectionsStartPosition() {
						return this.j
							? this.j.getSelections()?.map((g) => g.getStartPosition())
							: this.n?.cursorState?.map((g) => g.selectionStart);
					}
					getLineScrollTopOffset(n) {
						if (!this.j) return 0;
						const g = this.N.notebookOptions.computeEditorPadding(
							this.internalMetadata,
							this.uri,
						);
						return this.j.getTopForLineNumber(n) + g.top;
					}
					getPositionScrollTopOffset(n) {
						if (!this.j) return 0;
						const g =
								n instanceof C.$kL ? n.getPosition() : n.getStartPosition(),
							p = this.N.notebookOptions.computeEditorPadding(
								this.internalMetadata,
								this.uri,
							);
						return this.j.getTopForPosition(g.lineNumber, g.column) + p.top;
					}
					cursorAtLineBoundary() {
						if (!this.j || !this.textModel || !this.j.hasTextFocus())
							return a.CursorAtLineBoundary.None;
						const n = this.j.getSelection();
						if (!n || !n.isEmpty()) return a.CursorAtLineBoundary.None;
						const g = this.textModel.getLineLength(n.startLineNumber);
						if (g === 0) return a.CursorAtLineBoundary.Both;
						switch (n.startColumn) {
							case 1:
								return a.CursorAtLineBoundary.Start;
							case g + 1:
								return a.CursorAtLineBoundary.End;
							default:
								return a.CursorAtLineBoundary.None;
						}
					}
					cursorAtBoundary() {
						if (!this.j || !this.textModel) return a.CursorAtBoundary.None;
						const n = this.j.getSelection();
						if (!n || !n.isEmpty()) return a.CursorAtBoundary.None;
						const g = this.j.getTopForPosition(1, 1),
							p = this.j.getTopForPosition(
								this.textModel.getLineCount(),
								this.textModel.getLineLength(this.textModel.getLineCount()),
							),
							o = this.j.getTopForPosition(n.startLineNumber, n.startColumn);
						return o === p
							? o === g
								? a.CursorAtBoundary.Both
								: a.CursorAtBoundary.Bottom
							: o === g
								? a.CursorAtBoundary.Top
								: a.CursorAtBoundary.None;
					}
					get editStateSource() {
						return this.Z;
					}
					updateEditState(n, g) {
						(this.Z = g),
							n !== this.c &&
								((this.c = n),
								this.b.fire({ editStateChanged: !0 }),
								this.c === a.CellEditState.Preview &&
									(this.focusMode = a.CellFocusMode.Container));
					}
					getEditState() {
						return this.c;
					}
					get textBuffer() {
						return this.model.textBuffer;
					}
					async resolveTextModel() {
						if (!this.H || !this.textModel) {
							if (
								((this.H = await this.P.createModelReference(this.uri)), this.M)
							)
								return this.textModel;
							if (!this.H)
								throw new Error(`Cannot resolve text model for ${this.uri}`);
							this.t.value = this.textModel.onDidChangeContent(() => this.$());
						}
						return this.textModel;
					}
					ab(n, g) {
						let p = [];
						const o = this.textBuffer.getLineCount(),
							f = g.findScope?.selectedTextRanges ?? [
								new E.$iL(1, 1, o, this.textBuffer.getLineLength(o) + 1),
							];
						if (this.assertTextModelAttached())
							p = this.textModel.findMatches(
								n,
								f,
								g.regex || !1,
								g.caseSensitive || !1,
								(g.wholeWord && g.wordSeparators) || null,
								g.regex || !1,
							);
						else {
							const s = new m.$XU(
								n,
								g.regex || !1,
								g.caseSensitive || !1,
								(g.wholeWord && g.wordSeparators) || null,
							).parseSearchRequest();
							if (!s) return null;
							f.forEach((l) => {
								p.push(
									...this.textBuffer.findMatchesLineByLine(
										new E.$iL(
											l.startLineNumber,
											l.startColumn,
											l.endLineNumber,
											l.endColumn,
										),
										s,
										g.regex || !1,
										1e3,
									),
								);
							});
						}
						return p;
					}
					dispose() {
						(this.M = !0),
							super.dispose(),
							(0, i.$Vc)(this.m),
							this.Q.getUriComparisonKey(this.uri) === this.uri.toString() &&
								this.Q.removeElements(this.uri),
							this.H?.dispose();
					}
					toJSON() {
						return { handle: this.handle };
					}
				}
				e.$11b = h;
			},
		),
		define(
			de[482],
			he([
				1, 0, 6, 3, 77, 47, 65, 589, 42, 10, 5, 155, 108, 1840, 70, 161, 1959,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$31b = e.$21b = void 0),
					(E = mt(E)),
					(e.$21b = 500);
				let o = class extends p.$11b {
					set editorHeight(b) {
						this.jb !== b &&
							((this.jb = b),
							this.layoutChange(
								{ editorHeight: !0 },
								"CodeCellViewModel#editorHeight",
							));
					}
					get editorHeight() {
						throw new Error("editorHeight is write-only");
					}
					set chatHeight(b) {
						this.kb !== b &&
							((this.kb = b),
							this.layoutChange(
								{ chatHeight: !0 },
								"CodeCellViewModel#chatHeight",
							));
					}
					get chatHeight() {
						return this.kb;
					}
					get outputIsHovered() {
						return this.lb;
					}
					set outputIsHovered(b) {
						(this.lb = b), this.b.fire({ outputIsHoveredChanged: !0 });
					}
					get outputIsFocused() {
						return this.mb;
					}
					set outputIsFocused(b) {
						(this.mb = b), this.b.fire({ outputIsFocusedChanged: !0 });
					}
					get inputInOutputIsFocused() {
						return this.nb;
					}
					set inputInOutputIsFocused(b) {
						this.nb = b;
					}
					get pb() {
						return this.ob;
					}
					set pb(b) {
						this.ob = b;
					}
					get layoutInfo() {
						return this.qb;
					}
					get outputsViewModels() {
						return this.rb;
					}
					constructor(b, s, l, y, $, v, S, I, T, P) {
						super(b, s, E.$9g(), y, $, S, I, T),
							(this.viewContext = y),
							(this.sb = v),
							(this.cellKind = n.CellKind.Code),
							(this.bb = this.D(new t.$re())),
							(this.onLayoutInfoRead = this.bb.event),
							(this.cb = this.D(new t.$re())),
							(this.onDidStartExecution = this.cb.event),
							(this.db = this.D(new t.$re())),
							(this.onDidStopExecution = this.db.event),
							(this.eb = this.D(new t.$re())),
							(this.onDidChangeOutputs = this.eb.event),
							(this.fb = this.D(new t.$re())),
							(this.onDidRemoveOutputs = this.fb.event),
							(this.gb = []),
							(this.hb = null),
							(this.ib = this.D(new t.$ue())),
							(this.onDidChangeLayout = this.ib.event),
							(this.jb = 0),
							(this.kb = 0),
							(this.lb = !1),
							(this.mb = !1),
							(this.nb = !1),
							(this.ob = 0),
							(this.excecutionError = (0, w.observableValue)(
								"excecutionError",
								void 0,
							)),
							(this.yb = this.D(new t.$re())),
							(this.hasFindResult = this.yb.event),
							(this.rb = this.model.outputs.map(
								(k) => new c.$D1b(this, k, this.sb),
							)),
							this.D(
								this.model.onDidChangeOutputs((k) => {
									const L = [];
									let D = !1;
									for (let M = k.start; M < k.start + k.deleteCount; M++)
										this.gb[M] !== void 0 && this.gb[M] !== 0 && (D = !0);
									this.gb.splice(
										k.start,
										k.deleteCount,
										...k.newOutputs.map(() => 0),
									),
										L.push(
											...this.rb.splice(
												k.start,
												k.deleteCount,
												...k.newOutputs.map(
													(M) => new c.$D1b(this, M, this.sb),
												),
											),
										),
										(this.hb = null),
										this.eb.fire(k),
										this.fb.fire(L),
										D &&
											this.layoutChange(
												{ outputHeight: !0 },
												"CodeCellViewModel#model.onDidChangeOutputs",
											),
										(0, i.$Vc)(L);
								}),
							),
							(this.gb = new Array(this.model.outputs.length)),
							(this.qb = {
								fontInfo: l?.fontInfo || null,
								editorHeight: 0,
								editorWidth: l
									? this.viewContext.notebookOptions.computeCodeCellEditorWidth(
											l.width,
										)
									: 0,
								chatHeight: 0,
								statusBarHeight: 0,
								commentOffset: 0,
								commentHeight: 0,
								outputContainerOffset: 0,
								outputTotalHeight: 0,
								outputShowMoreContainerHeight: 0,
								outputShowMoreContainerOffset: 0,
								totalHeight: this.vb(17, 0, 0, 0),
								codeIndicatorHeight: 0,
								outputIndicatorHeight: 0,
								bottomToolbarOffset: 0,
								layoutState: h.CellLayoutState.Uninitialized,
								estimatedHasHorizontalScrolling: !1,
							});
					}
					updateExecutionState(b) {
						b.changed ? this.cb.fire(b) : this.db.fire(b);
					}
					updateOptions(b) {
						(b.cellStatusBarVisibility ||
							b.insertToolbarPosition ||
							b.cellToolbarLocation) &&
							this.layoutChange({});
					}
					pauseLayout() {
						this.ib.pause();
					}
					resumeLayout() {
						this.ib.resume();
					}
					layoutChange(b, s) {
						this.xb();
						const l = this.viewContext.notebookOptions.getLayoutConfiguration(),
							y =
								this.viewContext.notebookOptions.computeBottomToolbarDimensions(
									this.viewType,
								),
							$ = b.outputShowMoreContainerHeight
								? b.outputShowMoreContainerHeight
								: this.qb.outputShowMoreContainerHeight,
							v = Math.max(
								this.ob,
								this.isOutputCollapsed
									? l.collapsedIndicatorHeight
									: this.hb.getTotalSum(),
							),
							S = b.commentHeight ? this.L : this.qb.commentHeight,
							I = this.layoutInfo;
						if (this.isInputCollapsed) {
							const T = l.collapsedIndicatorHeight,
								P = v + $,
								k = b.chatHeight ? this.kb : this.qb.chatHeight,
								L = l.cellTopMargin + l.collapsedIndicatorHeight,
								D =
									l.cellTopMargin +
									l.collapsedIndicatorHeight +
									l.cellBottomMargin +
									y.bottomToolbarGap +
									k +
									S +
									v +
									$,
								M = D - y.bottomToolbarGap - y.bottomToolbarHeight / 2 - $,
								N = this.viewContext.notebookOptions.computeBottomToolbarOffset(
									D,
									this.viewType,
								),
								A =
									b.outerWidth !== void 0
										? this.viewContext.notebookOptions.computeCodeCellEditorWidth(
												b.outerWidth,
											)
										: this.qb?.editorWidth;
							this.qb = {
								fontInfo: b.font ?? this.qb.fontInfo ?? null,
								editorHeight: this.qb.editorHeight,
								editorWidth: A,
								chatHeight: k,
								statusBarHeight: 0,
								outputContainerOffset: L,
								outputTotalHeight: v,
								outputShowMoreContainerHeight: $,
								outputShowMoreContainerOffset: M,
								commentOffset: L + v,
								commentHeight: S,
								totalHeight: D,
								codeIndicatorHeight: T,
								outputIndicatorHeight: P,
								bottomToolbarOffset: N,
								layoutState: this.qb.layoutState,
								estimatedHasHorizontalScrolling: !1,
							};
						} else {
							let T,
								P,
								k,
								L = !1;
							const D = b.chatHeight ? this.kb : this.qb.chatHeight;
							if (
								!b.editorHeight &&
								this.qb.layoutState === h.CellLayoutState.FromCache &&
								!b.outputHeight
							) {
								const z = this.ub(
									b.font?.lineHeight ?? this.qb.fontInfo?.lineHeight,
								);
								(P = z.editorHeight),
									(L = z.hasHorizontalScrolling),
									(k = this.qb.totalHeight),
									(T = h.CellLayoutState.FromCache);
							} else if (
								b.editorHeight ||
								this.qb.layoutState === h.CellLayoutState.Measured
							)
								(P = this.jb),
									(k = this.vb(this.jb, v, $, D)),
									(T = h.CellLayoutState.Measured),
									(L = this.qb.estimatedHasHorizontalScrolling);
							else {
								const z = this.ub(
									b.font?.lineHeight ?? this.qb.fontInfo?.lineHeight,
								);
								(P = z.editorHeight),
									(L = z.hasHorizontalScrolling),
									(k = this.vb(P, v, $, D)),
									(T = h.CellLayoutState.Estimated);
							}
							const M =
									this.viewContext.notebookOptions.computeEditorStatusbarHeight(
										this.internalMetadata,
										this.uri,
									),
								N = P + M,
								A = v + $,
								R = l.editorToolbarHeight + l.cellTopMargin + D + P + M,
								O = k - y.bottomToolbarGap - y.bottomToolbarHeight / 2 - $,
								B = this.viewContext.notebookOptions.computeBottomToolbarOffset(
									k,
									this.viewType,
								),
								U =
									b.outerWidth !== void 0
										? this.viewContext.notebookOptions.computeCodeCellEditorWidth(
												b.outerWidth,
											)
										: this.qb?.editorWidth;
							this.qb = {
								fontInfo: b.font ?? this.qb.fontInfo ?? null,
								chatHeight: D,
								editorHeight: P,
								editorWidth: U,
								statusBarHeight: M,
								outputContainerOffset: R,
								outputTotalHeight: v,
								outputShowMoreContainerHeight: $,
								outputShowMoreContainerOffset: O,
								commentOffset: R + v,
								commentHeight: S,
								totalHeight: k,
								codeIndicatorHeight: N,
								outputIndicatorHeight: A,
								bottomToolbarOffset: B,
								layoutState: T,
								estimatedHasHorizontalScrolling: L,
							};
						}
						this.tb({
							...b,
							totalHeight: this.layoutInfo.totalHeight !== I.totalHeight,
							source: s,
						});
					}
					tb(b) {
						this.ib.fire(b);
					}
					restoreEditorViewState(b, s) {
						super.restoreEditorViewState(b),
							s !== void 0 &&
								this.qb.layoutState !== h.CellLayoutState.Measured &&
								(this.qb = {
									...this.qb,
									totalHeight: s,
									layoutState: h.CellLayoutState.FromCache,
								});
					}
					getDynamicHeight() {
						return this.bb.fire(), this.qb.totalHeight;
					}
					getHeight(b) {
						if (this.qb.layoutState === h.CellLayoutState.Uninitialized) {
							const s = this.ub(b);
							return this.vb(s.editorHeight, 0, 0, 0);
						} else return this.qb.totalHeight;
					}
					ub(b = 20) {
						let s = !1;
						const l = this.viewContext.getBaseCellEditorOptions(this.language);
						if (this.layoutInfo.fontInfo && l.value.wordWrap === "off") {
							for (let S = 0; S < this.lineCount; S++)
								if (
									this.textBuffer.getLineLastNonWhitespaceColumn(S + 1) *
										(this.layoutInfo.fontInfo.typicalHalfwidthCharacterWidth +
											this.layoutInfo.fontInfo.letterSpacing) >
									this.layoutInfo.editorWidth
								) {
									s = !0;
									break;
								}
						}
						const y = s ? 12 : 0,
							$ = this.viewContext.notebookOptions.computeEditorPadding(
								this.internalMetadata,
								this.uri,
							);
						return {
							editorHeight: this.lineCount * b + $.top + $.bottom + y,
							hasHorizontalScrolling: s,
						};
					}
					vb(b, s, l, y) {
						const $ = this.viewContext.notebookOptions.getLayoutConfiguration(),
							{ bottomToolbarGap: v } =
								this.viewContext.notebookOptions.computeBottomToolbarDimensions(
									this.viewType,
								);
						return (
							$.editorToolbarHeight +
							$.cellTopMargin +
							y +
							b +
							this.viewContext.notebookOptions.computeEditorStatusbarHeight(
								this.internalMetadata,
								this.uri,
							) +
							this.L +
							s +
							l +
							v +
							$.cellBottomMargin
						);
					}
					$() {
						this.getEditState() !== h.CellEditState.Editing &&
							(this.updateEditState(
								h.CellEditState.Editing,
								"onDidChangeTextModelContent",
							),
							this.b.fire({ contentChanged: !0 }));
					}
					onDeselect() {
						this.updateEditState(h.CellEditState.Preview, "onDeselect");
					}
					updateOutputShowMoreContainerHeight(b) {
						this.layoutChange(
							{ outputShowMoreContainerHeight: b },
							"CodeCellViewModel#updateOutputShowMoreContainerHeight",
						);
					}
					updateOutputMinHeight(b) {
						this.pb = b;
					}
					unlockOutputHeight() {
						(this.pb = 0), this.layoutChange({ outputHeight: !0 });
					}
					updateOutputHeight(b, s, l) {
						if (b >= this.gb.length)
							throw new Error("Output index out of range!");
						this.xb(),
							b === 0 || s > 0
								? this.rb[b].setVisible(!0)
								: s === 0 && this.rb[b].setVisible(!1),
							this.rb[b].visible.get() && s < 28 && (s = 28),
							(this.gb[b] = s),
							this.hb.setValue(b, s) &&
								this.layoutChange({ outputHeight: !0 }, l);
					}
					getOutputOffsetInContainer(b) {
						if ((this.xb(), b >= this.gb.length))
							throw new Error("Output index out of range!");
						return this.hb.getPrefixSum(b - 1);
					}
					getOutputOffset(b) {
						return (
							this.layoutInfo.outputContainerOffset +
							this.getOutputOffsetInContainer(b)
						);
					}
					spliceOutputHeights(b, s, l) {
						if ((this.xb(), this.hb.removeValues(b, s), l.length)) {
							const y = new Uint32Array(l.length);
							for (let $ = 0; $ < l.length; $++) y[$] = l[$];
							this.hb.insertValues(b, y);
						}
						this.layoutChange(
							{ outputHeight: !0 },
							"CodeCellViewModel#spliceOutputs",
						);
					}
					xb() {
						if (!this.hb) {
							const b = new Uint32Array(this.gb.length);
							for (let s = 0; s < this.gb.length; s++) b[s] = this.gb[s];
							this.hb = new d.$WN(b);
						}
					}
					startFind(b, s) {
						const l = super.ab(b, s);
						return l === null ? null : { cell: this, contentMatches: l };
					}
					dispose() {
						super.dispose(),
							(this.gb = []),
							(this.hb = null),
							(0, i.$Vc)(this.rb);
					}
				};
				(e.$31b = o),
					(e.$31b = o =
						Ne(
							[
								j(4, r.$gj),
								j(5, g.$MIb),
								j(6, m.$MO),
								j(7, a.$GN),
								j(8, C.$dtb),
								j(9, u.$Li),
							],
							o,
						));
			},
		),
		define(
			de[4092],
			he([1, 0, 3, 90, 190, 10, 70, 330, 103, 482, 6, 153]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				var h;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wGc = void 0);
				let c = class extends t.$1c {
					static {
						h = this;
					}
					static {
						this.ID = "workbench.notebook.cellDiagnostics";
					}
					constructor(g, p, o, f, b) {
						super(),
							(this.f = g),
							(this.g = p),
							(this.h = o),
							(this.j = f),
							(this.m = b),
							(this.a = !1),
							(this.b = !1),
							(this.c = new Map()),
							this.n(),
							this.D(f.onDidChangeAgents(() => this.n())),
							this.D(
								b.onDidChangeConfiguration((s) => {
									s.affectsConfiguration(C.$56.cellFailureDiagnostics) &&
										this.n();
								}),
							);
					}
					n() {
						const g = this.m.getValue(C.$56.cellFailureDiagnostics);
						this.a && (!g || m.Iterable.isEmpty(this.j.getAgents()))
							? ((this.a = !1), this.r())
							: !this.a &&
								g &&
								!m.Iterable.isEmpty(this.j.getAgents()) &&
								((this.a = !0),
								this.b ||
									((this.b = !0),
									this.D(
										u.Event.accumulate(
											this.g.onDidChangeExecution,
											200,
										)((p) => this.q(p)),
									)));
					}
					q(g) {
						if (!this.a) return;
						const p = new Set();
						for (const o of g.reverse()) {
							const f = this.f.textModel?.uri;
							o.type === w.NotebookExecutionType.cell &&
								f &&
								o.affectsNotebook(f) &&
								!p.has(o.cellHandle) &&
								(p.add(o.cellHandle),
								o.changed ? this.clear(o.cellHandle) : this.s(o.cellHandle));
						}
					}
					r() {
						for (const g of this.c.keys()) this.clear(g);
					}
					clear(g) {
						const p = this.c.get(g);
						if (p) {
							for (const o of p.disposables) o.dispose();
							this.c.delete(g);
						}
					}
					s(g) {
						if (this.c.has(g)) return;
						const p = this.f.getCellByHandle(g);
						if (!p || p.cellKind !== C.CellKind.Code) return;
						const o = p.model.internalMetadata;
						if (
							p instanceof r.$31b &&
							!o.lastRunSuccess &&
							o?.error?.location
						) {
							const f = [],
								b = this.t(o.error.message, o.error.location);
							this.h.changeOne(h.ID, p.uri, [b]),
								f.push((0, t.$Yc)(() => this.h.changeOne(h.ID, p.uri, []))),
								p.excecutionError.set(o.error, void 0),
								f.push((0, t.$Yc)(() => p.excecutionError.set(void 0, void 0))),
								f.push(
									p.model.onDidChangeOutputs(() => {
										p.model.outputs.length === 0 && this.clear(g);
									}),
								),
								f.push(
									p.model.onDidChangeContent(() => {
										this.clear(g);
									}),
								),
								this.c.set(g, {
									cellUri: p.uri,
									error: o.error,
									disposables: f,
								});
						}
					}
					t(g, p) {
						return {
							severity: 8,
							message: g,
							startLineNumber: p.startLineNumber + 1,
							startColumn: p.startColumn + 1,
							endLineNumber: p.endLineNumber + 1,
							endColumn: p.endColumn + 1,
							source: "Cell Execution Error",
						};
					}
					dispose() {
						super.dispose(), this.r();
					}
				};
				(e.$wGc = c),
					(e.$wGc =
						c =
						h =
							Ne([j(1, w.$d6), j(2, i.$aM), j(3, a.$c3), j(4, E.$gj)], c)),
					(0, d.$PKb)(c.ID, c);
			},
		),
		define(
			de[1960],
			he([1, 0, 27, 17, 500, 291, 4, 11, 8, 43, 238, 482, 176]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xGc = void 0),
					(e.$xGc = "notebook.cell.openFailureActions"),
					(0, d.$4X)(
						class extends u.$z5b {
							constructor() {
								super({
									id: e.$xGc,
									title: (0, C.localize2)(7723, "Show Cell Failure Actions"),
									precondition: m.$Kj.and(h.$EJb, h.$RJb, h.$FJb.toNegated()),
									f1: !0,
									keybinding: {
										when: m.$Kj.and(h.$EJb, h.$RJb, h.$FJb.toNegated()),
										primary: t.KeyMod.CtrlCmd | t.KeyCode.Period,
										weight: r.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							async runWithContext(c, n) {
								if (n.cell instanceof a.$31b) {
									const g = n.cell.excecutionError.get();
									if (g?.location) {
										const p = i.$iL.lift({
											startLineNumber: g.location.startLineNumber + 1,
											startColumn: g.location.startColumn + 1,
											endLineNumber: g.location.endLineNumber + 1,
											endColumn: g.location.endColumn + 1,
										});
										n.notebookEditor.setCellEditorSelection(
											n.cell,
											i.$iL.lift(p),
										);
										const o = (0, u.$w5b)(n, n.cell);
										o &&
											w.$BBb
												.get(o)
												?.manualTriggerAtCurrentPosition(
													(0, C.localize)(7722, null),
													E.CodeActionTriggerSource.Default,
													{ include: E.$GAb.QuickFix },
												);
									}
								}
							}
						},
					);
			},
		),
		define(
			de[4093],
			he([1, 0, 15, 3, 91, 108, 330, 482, 70, 442, 161]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let a = class extends i.$1c {
					static {
						this.id = "workbench.notebook.viewportWarmup";
					}
					constructor(c, n, g) {
						super(),
							(this.c = c),
							(this.f = n),
							(this.b = null),
							(this.a = new t.$Yh(() => this.h(), 200)),
							this.D(this.a),
							this.D(
								this.c.onDidScroll(() => {
									this.a.schedule();
								}),
							),
							(this.b = new t.$Yh(() => this.g(), 200)),
							this.D(this.b),
							this.D(
								this.c.onDidAttachViewModel(() => {
									this.c.hasModel() && this.b?.schedule();
								}),
							),
							this.c.hasModel() && this.b?.schedule();
					}
					g() {
						if (this.c.hasModel())
							for (let c = 0; c < this.c.getLength(); c++) {
								const n = this.c.cellAt(c);
								(n?.cellKind === m.CellKind.Markup &&
									n?.getEditState() === E.CellEditState.Preview &&
									!n.isInputCollapsed) ||
									(n?.cellKind === m.CellKind.Code && this.j(n));
							}
					}
					h() {
						if (this.c.isDisposed || !this.c.hasModel()) return;
						const c = this.c.getVisibleRangesPlusViewportAboveAndBelow();
						(0, r.$j6)(c).forEach((n) => {
							const g = this.c.cellAt(n);
							g?.cellKind === m.CellKind.Markup &&
							g?.getEditState() === E.CellEditState.Preview &&
							!g.isInputCollapsed
								? this.c.createMarkupPreview(g)
								: g?.cellKind === m.CellKind.Code && this.j(g);
						});
					}
					j(c) {
						if (c.isOutputCollapsed) return;
						const n = c.outputsViewModels;
						for (const g of n.slice(0, d.$21b)) {
							const [p, o] = g.resolveMimeTypes(this.c.textModel, void 0);
							if (!p.find((l) => l.isTrusted) || p.length === 0) continue;
							const f = p[o];
							if (!f || !this.c.hasModel()) return;
							const b = this.f.getRendererInfo(f.rendererId);
							if (!b) return;
							const s = {
								type: E.RenderOutputType.Extension,
								renderer: b,
								source: g,
								mimeType: f.mimeType,
							};
							this.c.createOutput(c, s, 0, !0);
						}
					}
				};
				(a = Ne([j(1, u.$MIb), j(2, w.$XK)], a)), (0, C.$PKb)(a.id, a);
			},
		),
		define(
			de[4094],
			he([1, 0, 7, 15, 3, 201, 294, 482, 190]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$K3b = void 0),
					(t = mt(t));
				const r = 200;
				let u = class extends C.$A1b {
					constructor(h, c, n) {
						super(),
							(this.b = h),
							(this.g = c),
							(this.h = n),
							(this.a = this.D(new w.$Zc())),
							this.D(
								this.b.onDidChangeActiveKernel(() => {
									this.c &&
										(this.a.clear(),
										this.b.activeKernel &&
											this.a.add(
												this.b.activeKernel.onDidChange(() => {
													this.c && this.j(this.c.internalMetadata);
												}),
											),
										this.j(this.c.internalMetadata));
								}),
							),
							this.D(
								this.b.onDidScroll(() => {
									this.m();
								}),
							);
					}
					didRenderCell(h) {
						this.j(h.internalMetadata, !0);
					}
					j(h, c = !1) {
						if (
							this.b.activeKernel?.implementsExecutionOrder ||
							(!this.b.activeKernel && typeof h.executionOrder == "number")
						) {
							if (
								typeof h.executionOrder != "number" &&
								!c &&
								this.h.getCellExecution(this.c.uri)
							) {
								const g = this.c;
								(0, i.$Oh)(
									() => {
										this.c === g && this.j(this.c.internalMetadata, !0);
									},
									r,
									this.f,
								);
								return;
							}
							const n =
								typeof h.executionOrder == "number"
									? `[${h.executionOrder}]`
									: "[ ]";
							this.g.innerText = n;
						} else this.g.innerText = "";
					}
					updateState(h, c) {
						c.internalMetadataChanged && this.j(h.internalMetadata);
					}
					updateInternalLayoutNow(h) {
						this.m();
					}
					m() {
						if (this.c)
							if (this.c.isInputCollapsed) t.hide(this.g);
							else {
								t.show(this.g);
								let h =
									this.c.layoutInfo.editorHeight -
									22 +
									this.c.layoutInfo.statusBarHeight;
								if (this.c instanceof d.$31b) {
									const n =
											this.b.getAbsoluteTopOfElement(this.c) +
											this.c.layoutInfo.outputContainerOffset,
										g = this.b.scrollBottom,
										p = 22;
									if (g <= n) {
										const o = n - g;
										(h -= o),
											(h = (0, E.$Zm)(
												h,
												p + 12,
												this.c.layoutInfo.editorHeight -
													p +
													this.c.layoutInfo.statusBarHeight,
											));
									}
								}
								this.g.style.top = `${h}px`;
							}
					}
				};
				(e.$K3b = u), (e.$K3b = u = Ne([j(2, m.$d6)], u));
			},
		),
		define(
			de[4095],
			he([
				1, 0, 7, 114, 758, 163, 6, 274, 27, 3, 221, 98, 31, 5, 40, 32, 35, 108,
				294, 3099, 482, 70, 72, 10, 160,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$U3b = void 0),
					(t = mt(t));
				const S = t.$;
				let I = class extends f.$A1b {
					constructor(k, L, D, M, N, A, R, O) {
						super(),
							(this.s = k),
							(this.t = L),
							(this.u = M),
							(this.w = N),
							(this.y = O),
							(this.h = []),
							(this.j = []),
							(this.m = 0),
							(this.q = this.D(new C.$re())),
							(this.onDidClick = this.q.event),
							(this.statusBarContainer = t.$fhb(
								D,
								S(".cell-statusbar-container"),
							)),
							(this.statusBarContainer.tabIndex = -1);
						const B = t.$fhb(this.statusBarContainer, S(".cell-status-left")),
							U = t.$fhb(this.statusBarContainer, S(".cell-status-right"));
						(this.a = t.$fhb(
							B,
							S(".cell-contributed-items.cell-contributed-items-left"),
						)),
							(this.b = t.$fhb(
								U,
								S(".cell-contributed-items.cell-contributed-items-right"),
							)),
							(this.g = this.D(new r.$Zc())),
							(this.r = new (class {
								constructor() {
									(this.a = 0),
										(this.showHover = (z) => (
											(z.position = z.position ?? {}),
											(z.position.hoverPosition = v.HoverPosition.ABOVE),
											A.showHover(z)
										)),
										(this.placement = "element");
								}
								get delay() {
									return Date.now() - this.a < 200
										? 0
										: R.getValue("workbench.hover.delay");
								}
								onDidHideHover() {
									this.a = Date.now();
								}
							})()),
							this.D(
								this.y.onDidColorThemeChange(
									() => this.n && this.updateContext(this.n),
								),
							),
							this.D(
								t.$0fb(this.statusBarContainer, t.$$gb.CLICK, (z) => {
									z.target === B ||
									z.target === U ||
									z.target === this.statusBarContainer
										? this.q.fire({
												type: b.ClickTargetType.Container,
												event: z,
											})
										: z.target.classList.contains(
													"cell-status-item-has-command",
												)
											? this.q.fire({
													type: b.ClickTargetType.ContributedCommandItem,
													event: z,
												})
											: this.q.fire({
													type: b.ClickTargetType.ContributedTextItem,
													event: z,
												});
								}),
							);
					}
					didRenderCell(k) {
						if (this.s.hasModel()) {
							const L = {
								ui: !0,
								cell: k,
								notebookEditor: this.s,
								$mid: u.MarshalledId.NotebookCellActionContext,
							};
							this.updateContext(L);
						}
						if (this.u) {
							const L = () => {
								if (
									this.u &&
									(this.u.hasWidgetFocus() ||
										(this.statusBarContainer.ownerDocument.activeElement &&
											this.statusBarContainer.contains(
												this.statusBarContainer.ownerDocument.activeElement,
											)))
								)
									k.focusMode = o.CellFocusMode.Editor;
								else {
									const D = k.focusMode;
									D === o.CellFocusMode.ChatInput
										? (k.focusMode = o.CellFocusMode.ChatInput)
										: D === o.CellFocusMode.Output && this.s.hasWebviewFocus()
											? (k.focusMode = o.CellFocusMode.Output)
											: (k.focusMode = o.CellFocusMode.Container);
								}
							};
							this.f.add(
								this.u.onDidFocusEditorWidget(() => {
									L();
								}),
							),
								this.f.add(
									this.u.onDidBlurEditorWidget(() => {
										this.s.hasEditorFocus() &&
											!(
												this.statusBarContainer.ownerDocument.activeElement &&
												this.statusBarContainer.contains(
													this.statusBarContainer.ownerDocument.activeElement,
												)
											) &&
											L();
									}),
								),
								this.f.add(
									this.onDidClick((D) => {
										if (
											this.c instanceof s.$31b &&
											D.type !== b.ClickTargetType.ContributedCommandItem &&
											this.u
										) {
											const M = this.u.getTargetAtClientPoint(
												D.event.clientX,
												D.event.clientY -
													this.s.notebookOptions.computeEditorStatusbarHeight(
														this.c.internalMetadata,
														this.c.uri,
													),
											);
											M?.position &&
												(this.u.setPosition(M.position), this.u.focus());
										}
									}),
								);
						}
					}
					updateInternalLayoutNow(k) {
						this.t.classList.toggle(
							"cell-statusbar-hidden",
							this.s.notebookOptions.computeEditorStatusbarHeight(
								k.internalMetadata,
								k.uri,
							) === 0,
						);
						const D = k.layoutInfo.editorWidth;
						if (!D) return;
						(this.m = D), (this.statusBarContainer.style.width = `${D}px`);
						const M = this.z();
						this.h.forEach((N) => (N.maxWidth = M)),
							this.j.forEach((N) => (N.maxWidth = M));
					}
					z() {
						return this.m / 2;
					}
					updateContext(k) {
						(this.n = k),
							this.g.clear(),
							this.n &&
								(this.g.add(
									this.n.cell.onDidChangeLayout(() => {
										this.n && this.updateInternalLayoutNow(this.n.cell);
									}),
								),
								this.g.add(
									this.n.cell.onDidChangeCellStatusBarItems(() => this.F()),
								),
								this.g.add(
									this.n.notebookEditor.onDidChangeActiveCell(() => this.C()),
								),
								this.updateInternalLayoutNow(this.n.cell),
								this.C(),
								this.F());
					}
					C() {
						const k = this.n.notebookEditor.getActiveCell() === this.n?.cell;
						this.statusBarContainer.classList.toggle("is-active-cell", k);
					}
					F() {
						const k = this.n.cell.getCellStatusBarItems();
						k.sort((A, R) => (R.priority ?? 0) - (A.priority ?? 0));
						const L = this.z(),
							D = k.filter(
								(A) => A.alignment === l.CellStatusbarAlignment.Left,
							),
							M = k
								.filter((A) => A.alignment === l.CellStatusbarAlignment.Right)
								.reverse(),
							N = (A, R, O) => {
								if (A.length > R.length) {
									const B = A.splice(R.length, A.length - R.length);
									for (const U of B) U.container.remove(), U.dispose();
								}
								R.forEach((B, U) => {
									const z = A[U];
									if (z) z.updateItem(B, L);
									else {
										const F = this.w.createInstance(
											T,
											this.n,
											this.r,
											this.u,
											B,
											L,
										);
										A.push(F), O.appendChild(F.container);
									}
								});
							};
						N(this.h, D, this.a), N(this.j, M, this.b);
					}
					dispose() {
						super.dispose(), (0, r.$Vc)(this.h), (0, r.$Vc)(this.j);
					}
				};
				(e.$U3b = I),
					(e.$U3b = I =
						Ne([j(4, c.$Li), j(5, y.$Uyb), j(6, $.$gj), j(7, p.$iP)], I));
				let T = class extends r.$1c {
					set maxWidth(k) {
						this.container.style.maxWidth = k + "px";
					}
					constructor(k, L, D, M, N, A, R, O, B, U) {
						super(),
							(this.c = k),
							(this.f = L),
							(this.g = D),
							(this.h = A),
							(this.j = R),
							(this.m = O),
							(this.n = B),
							(this.q = U),
							(this.container = S(".cell-status-item")),
							(this.b = this.D(new r.$Zc())),
							this.updateItem(M, N);
					}
					updateItem(k, L) {
						this.b.clear(),
							(!this.a || this.a.text !== k.text) &&
								(this.b.add(new w.$Yob(this.container)).text = k.text.replace(
									/\n/g,
									" ",
								));
						const D = (A) =>
							(0, a.isThemeColor)(A)
								? this.n.getColorTheme().getColor(A.id)?.toString() || ""
								: A;
						(this.container.style.color = k.color ? D(k.color) : ""),
							(this.container.style.backgroundColor = k.backgroundColor
								? D(k.backgroundColor)
								: ""),
							(this.container.style.opacity = k.opacity ? k.opacity : ""),
							this.container.classList.toggle(
								"cell-status-item-show-when-active",
								!!k.onlyShowWhenActive,
							),
							typeof L == "number" && (this.maxWidth = L);
						let M, N;
						if (
							(k.accessibilityInformation
								? ((M = k.accessibilityInformation.label),
									(N = k.accessibilityInformation.role))
								: (M = k.text ? (0, d.$$k)(k.text).trim() : ""),
							this.container.setAttribute("aria-label", M),
							this.container.setAttribute("role", N || ""),
							k.tooltip)
						) {
							const A =
								typeof k.tooltip == "string"
									? k.tooltip
									: {
											markdown: k.tooltip,
											markdownNotSupportedFallback: void 0,
										};
							this.b.add(this.q.setupManagedHover(this.f, this.container, A));
						}
						this.container.classList.toggle(
							"cell-status-item-has-command",
							!!k.command,
						),
							k.command
								? ((this.container.tabIndex = 0),
									this.b.add(
										t.$0fb(this.container, t.$$gb.CLICK, (A) => {
											this.r();
										}),
									),
									this.b.add(
										t.$0fb(this.container, t.$$gb.KEY_DOWN, (A) => {
											const R = new i.$7fb(A);
											(R.equals(m.KeyCode.Space) ||
												R.equals(m.KeyCode.Enter)) &&
												this.r();
										}),
									))
								: this.container.removeAttribute("tabIndex"),
							(this.a = k);
					}
					async r() {
						const k = this.a.command;
						if (!k) return;
						const L = typeof k == "string" ? k : k.id,
							D = typeof k == "string" ? [] : (k.arguments ?? []);
						(typeof k == "string" ||
							!k.arguments ||
							!Array.isArray(k.arguments) ||
							k.arguments.length === 0) &&
							D.unshift(this.c),
							this.h.publicLog2("workbenchActionExecuted", {
								id: L,
								from: "cell status bar",
							});
						try {
							this.g?.focus(), await this.j.executeCommand(L, ...D);
						} catch (M) {
							this.m.error((0, E.$xj)(M));
						}
					}
				};
				T = Ne(
					[j(5, g.$km), j(6, h.$ek), j(7, n.$4N), j(8, p.$iP), j(9, y.$Uyb)],
					T,
				);
			},
		),
		define(
			de[4096],
			he([
				1, 0, 7, 15, 33, 14, 26, 6, 3, 201, 37, 38, 61, 597, 4, 10, 5, 39, 41,
				108, 836, 3530, 3476, 482, 190, 964, 500,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$33b = void 0),
					(t = mt(t)),
					(u = mt(u));
				let T = class extends m.$1c {
					constructor(k, L, D, M, N, A, R, O, B, U) {
						super(),
							(this.q = k),
							(this.r = L),
							(this.s = D),
							(this.t = M),
							(this.u = N),
							(this.w = A),
							(this.y = O),
							(this.z = B),
							(this.g = !1),
							(this.n = this.D(
								new s.$J3b(
									this.q.getBaseCellEditorOptions(L.language),
									this.q.notebookOptions,
									this.z,
								),
							)),
							(this.a = this.u.createInstance(l.$Z3b, k, L, D, {
								limit: $.$21b,
							})),
							(this.h = this.D(
								D.cellParts.concatContentPart(
									[this.n, this.a],
									t.getWindow(k.getDomNode()),
								),
							));
						const z = this.J();
						this.L(z),
							(this.c = !1),
							this.O(),
							this.Q(),
							this.R(),
							this.U(),
							this.W(),
							this.D(
								d.Event.any(
									this.r.onDidStartExecution,
									this.r.onDidStopExecution,
								)((x) => {
									this.h.updateForExecutionState(this.r, x);
								}),
							),
							this.D(
								this.r.onDidChangeState((x) => {
									if (
										(this.h.updateState(this.r, x),
										x.outputIsHoveredChanged && this.H(),
										x.outputIsFocusedChanged && this.I(),
										(x.metadataChanged || x.internalMetadataChanged) &&
											this.N(),
										x.inputCollapsedChanged || x.outputCollapsedChanged)
									) {
										this.r.pauseLayout();
										const H = this.Z();
										this.r.resumeLayout(), H && this.relayoutCell();
									}
									x.focusModeChanged && this.Y(!0);
								}),
							),
							this.h.scheduleRenderCell(this.r),
							this.D(
								(0, m.$Yc)(() => {
									this.h.unrenderCell(this.r);
								}),
							),
							this.N(),
							this.Y(!1),
							this.H(),
							this.I(),
							(this.r.editorHeight = z),
							this.a.render(),
							(this.f = !1),
							this.jb(),
							this.D(
								this.r.onLayoutInfoRead(() => {
									this.h.prepareLayout();
								}),
							);
						const F = t.$fhb(
							this.s.cellInputCollapsedContainer,
							t.$(".collapsed-execution-icon"),
						);
						this.D(
							(0, m.$Yc)(() => {
								F.remove();
							}),
						),
							(this.m = this.D(
								this.u.createInstance(y.$13b, this.q, this.r, F),
							)),
							this.Z(),
							this.D(
								d.Event.runAndSubscribe(
									L.onDidChangeOutputs,
									this.M.bind(this),
								),
							),
							this.D(
								d.Event.runAndSubscribe(L.onDidChangeLayout, this.G.bind(this)),
							),
							this.n.setLineNumbers(this.r.lineNumbers),
							D.editor.updateOptions(
								this.n.getUpdatedValue(this.r.internalMetadata, this.r.uri),
							);
					}
					C(k) {
						k.editor.updateOptions(
							this.n.getUpdatedValue(this.r.internalMetadata, this.r.uri),
						);
						const L = new w.$Ce();
						this.D({
							dispose() {
								L.dispose(!0);
							},
						}),
							(0, i.$Ah)(this.r.resolveTextModel(), L.token).then((D) => {
								this.g ||
									(D &&
										D.updateOptions({
											indentSize: this.n.indentSize,
											tabSize: this.n.tabSize,
											insertSpaces: this.n.insertSpaces,
										}));
							});
					}
					G() {
						this.F?.dispose(),
							(this.F = t.$lgb(t.getWindow(this.q.getDomNode()), () => {
								this.h.updateInternalLayoutNow(this.r);
							}));
					}
					H() {
						this.s.container.classList.toggle(
							"cell-output-hover",
							this.r.outputIsHovered,
						);
					}
					I() {
						this.s.container.classList.toggle(
							"cell-output-focus",
							this.r.outputIsFocused,
						);
					}
					J() {
						const k = this.r.lineCount,
							L = this.r.layoutInfo.fontInfo?.lineHeight || 17,
							D = this.q.notebookOptions.computeEditorPadding(
								this.r.internalMetadata,
								this.r.uri,
							);
						return this.r.layoutInfo.editorHeight === 0
							? k * L + D.top + D.bottom
							: this.r.layoutInfo.editorHeight;
					}
					L(k) {
						const L = this.r.layoutInfo.editorWidth;
						this.kb({ width: L, height: k });
						const D = new w.$Ce();
						this.D({
							dispose() {
								D.dispose(!0);
							},
						}),
							(0, i.$Ah)(this.r.resolveTextModel(), D.token).then((M) => {
								if (!this.g) {
									if (M && this.s.editor) {
										if ((this.S(M), this.s.editor.setModel(M), this.g)) return;
										M.updateOptions({
											indentSize: this.n.indentSize,
											tabSize: this.n.tabSize,
											insertSpaces: this.n.insertSpaces,
										}),
											this.r.attachTextEditor(
												this.s.editor,
												this.r.layoutInfo.estimatedHasHorizontalScrolling,
											);
										const N = () => {
											this.q.getActiveCell() === this.r &&
												this.r.focusMode === b.CellFocusMode.Editor &&
												(this.q.hasEditorFocus() ||
													this.q.getDomNode().ownerDocument.activeElement ===
														this.q.getDomNode().ownerDocument.body) &&
												this.s.editor?.focus();
										};
										N();
										const A = this.s.editor?.getContentHeight();
										if ((A !== void 0 && A !== k && this.mb(A), this.g)) return;
										N();
									}
									this.D(this.n.onDidChange(() => this.C(this.s)));
								}
							});
					}
					M() {
						t.$khb(
							this.r.outputsViewModels.length > 0,
							this.s.focusSinkElement,
						);
					}
					N() {
						const k = this.s.editor;
						if (!k) return;
						const L = this.q.isReadOnly,
							D = this.q.notebookOptions.computeEditorPadding(
								this.r.internalMetadata,
								this.r.uri,
							),
							M = k.getOptions();
						(M.get(a.EditorOption.readOnly) !== L ||
							M.get(a.EditorOption.padding) !== D) &&
							k.updateOptions({
								readOnly: this.q.isReadOnly,
								padding: this.q.notebookOptions.computeEditorPadding(
									this.r.internalMetadata,
									this.r.uri,
								),
							});
					}
					O() {
						this.D(
							this.q.onDidScroll(() => {
								this.P();
							}),
						),
							this.D(
								this.q.onDidChangeLayout(() => {
									this.P(), this.lb();
								}),
							);
					}
					P() {
						const D = this.q.scrollTop,
							M = this.q.getAbsoluteTopOfElement(this.r),
							N = D - M + -7,
							A = this.q.getLayoutInfo(),
							R = A.height - A.stickyHeight - 26,
							O = this.r.layoutInfo.editorHeight - R,
							B = O > 20 ? (0, r.$Zm)(0, N, O) : 0;
						(this.s.editorPart.style.top = `${B}px`),
							this.s.editor?.setScrollTop(B);
					}
					Q() {
						this.D(
							this.r.onDidChangeLayout((k) => {
								k.outerWidth !== void 0 &&
									this.s.editor.getLayoutInfo().width !==
										this.r.layoutInfo.editorWidth &&
									(this.lb(), this.P());
							}),
						);
					}
					R() {
						this.D(
							this.s.editor.onDidContentSizeChange((k) => {
								k.contentHeightChanged &&
									this.r.layoutInfo.editorHeight !== k.contentHeight &&
									(this.mb(k.contentHeight), this.P());
							}),
						),
							this.D(
								this.s.editor.onDidChangeCursorSelection((k) => {
									if (k.source === "restoreState" || k.oldModelVersionId === 0)
										return;
									const L = this.s.editor.getSelections();
									if (L?.length) {
										const D = this.s.editor.getContentHeight(),
											M = this.r.layoutInfo.editorHeight;
										if (D !== M && (this.mb(D), this.g)) return;
										const N = L[L.length - 1];
										this.q.revealRangeInViewAsync(this.r, N);
									}
								}),
							),
							this.D(
								this.s.editor.onDidBlurEditorWidget(() => {
									S.$rPb.get(this.s.editor)?.stopHighlighting(),
										I.$BBb.get(this.s.editor)?.hideCodeActions(),
										I.$BBb.get(this.s.editor)?.hideLightBulbWidget();
								}),
							),
							this.D(
								this.s.editor.onDidFocusEditorWidget(() => {
									S.$rPb.get(this.s.editor)?.restoreViewState(!0);
								}),
							);
					}
					S(k) {
						this.D(
							k.onDidChangeTokens(() => {
								if (this.r.isInputCollapsed && this.b) {
									const L = this.eb(k);
									t.$Dhb(this.b, L), this.bb(this.b);
								}
							}),
						);
					}
					U() {
						this.D(
							this.r.onCellDecorationsChanged((k) => {
								k.added.forEach((L) => {
									L.className &&
										this.s.rootContainer.classList.add(L.className),
										L.outputClassName &&
											this.q.deltaCellContainerClassNames(
												this.r.id,
												[L.outputClassName],
												[],
											);
								}),
									k.removed.forEach((L) => {
										L.className &&
											this.s.rootContainer.classList.remove(L.className),
											L.outputClassName &&
												this.q.deltaCellContainerClassNames(
													this.r.id,
													[],
													[L.outputClassName],
												);
									});
							}),
						),
							this.r.getCellDecorations().forEach((k) => {
								k.className && this.s.rootContainer.classList.add(k.className),
									k.outputClassName &&
										this.q.deltaCellContainerClassNames(
											this.r.id,
											[k.outputClassName],
											[],
										);
							});
					}
					W() {
						this.D(
							this.s.editor.onMouseDown((k) => {
								k.event.rightButton && k.event.preventDefault();
							}),
						);
					}
					X() {
						return (
							this.q.getActiveCell() === this.r &&
							this.r.focusMode === b.CellFocusMode.Editor &&
							(this.q.hasEditorFocus() ||
								this.q.getDomNode().ownerDocument.activeElement ===
									this.q.getDomNode().ownerDocument.body)
						);
					}
					Y(k) {
						this.X() &&
							(k
								? this.s.editor?.focus()
								: this.D(
										t.$ggb(t.getWindow(this.s.container), () => {
											this.s.editor?.focus();
										}),
									)),
							this.s.container.classList.toggle(
								"cell-editor-focus",
								this.r.focusMode === b.CellFocusMode.Editor,
							),
							this.s.container.classList.toggle(
								"cell-output-focus",
								this.r.focusMode === b.CellFocusMode.Output,
							);
					}
					Z() {
						return this.r.isOutputCollapsed === this.f &&
							this.r.isInputCollapsed === this.c
							? !1
							: (this.r.layoutChange({ editorHeight: !0 }),
								this.r.isInputCollapsed ? this.ab() : this.cb(),
								this.r.isOutputCollapsed ? this.hb() : this.ib(!1),
								this.relayoutCell(),
								(this.f = this.r.isOutputCollapsed),
								(this.c = this.r.isInputCollapsed),
								!0);
					}
					ab() {
						t.hide(this.s.editorPart),
							this.s.container.classList.toggle("input-collapsed", !0),
							this.fb(),
							this.m.setVisibility(!0);
						const k = this.s.editor.hasModel()
								? this.eb(this.s.editor.getModel())
								: this.db(this.r.textBuffer, this.r.language),
							L = t.$("div.cell-collapse-preview");
						t.$Dhb(L, k),
							(this.b = L),
							this.s.cellInputCollapsedContainer.appendChild(L),
							this.bb(L),
							t.show(this.s.cellInputCollapsedContainer);
					}
					bb(k) {
						const L = t.$("span.expandInputIcon"),
							D = this.w.lookupKeybinding(b.$7Ib);
						D &&
							((k.title = (0, n.localize)(8196, null, D.getLabel())),
							(L.title = (0, n.localize)(8197, null, D.getLabel()))),
							L.classList.add(...C.ThemeIcon.asClassNameArray(E.$ak.more)),
							k.appendChild(L);
					}
					cb() {
						this.m.setVisibility(!1),
							t.show(this.s.editorPart),
							t.hide(this.s.cellInputCollapsedContainer);
					}
					db(k, L) {
						return (0, c.$bwb)(this.y, k.getLineContent(1), L);
					}
					eb(k) {
						let L = '<div class="monaco-tokenized-source">';
						const M = k.tokenization.getLineTokens(1).inflate(),
							N = k.getLineContent(1);
						let A = 0;
						for (let R = 0, O = M.getCount(); R < O; R++) {
							const B = M.getClassName(R),
								U = M.getEndOffset(R);
							(L += `<span class="${B}">${u.$nf(N.substring(A, U))}</span>`),
								(A = U);
						}
						return (L += "</div>"), L;
					}
					fb() {
						const k = this.s.cellInputCollapsedContainer.children,
							L = [];
						for (let D = 0; D < k.length; D++)
							k[D].classList.contains("cell-collapse-preview") && L.push(k[D]);
						L.forEach((D) => {
							D.remove();
						});
					}
					gb(k) {
						const L = this.s.outputContainer.domNode.children;
						for (let D = 0; D < L.length; D++)
							L[D].classList.contains("output-inner-container") &&
								t.$khb(!k, L[D]);
					}
					hb() {
						this.s.container.classList.toggle("output-collapsed", !0),
							t.show(this.s.cellOutputCollapsedContainer),
							this.gb(!0),
							this.a.viewUpdateHideOuputs();
					}
					ib(k) {
						this.s.container.classList.toggle("output-collapsed", !1),
							t.hide(this.s.cellOutputCollapsedContainer),
							this.gb(!1),
							this.a.viewUpdateShowOutputs(k);
					}
					jb() {
						this.s.container.classList.toggle("input-collapsed", !1),
							t.show(this.s.editorPart),
							t.hide(this.s.cellInputCollapsedContainer),
							this.s.container.classList.toggle("output-collapsed", !1),
							this.ib(!0);
					}
					kb(k) {
						const L = this.q.getLayoutInfo(),
							D = Math.min(L.height - L.stickyHeight - 26, k.height);
						this.s.editor?.layout({ width: k.width, height: D }, !0);
					}
					lb() {
						if (!this.s.editor.hasModel()) return;
						const k = this.s.editor.getContentHeight();
						(this.r.editorHeight = k),
							this.relayoutCell(),
							this.kb({ width: this.r.layoutInfo.editorWidth, height: k });
					}
					mb(k) {
						const L = this.s.editor.getLayoutInfo();
						(this.r.editorHeight = k),
							this.relayoutCell(),
							this.kb({ width: L.width, height: k });
					}
					relayoutCell() {
						this.q.layoutNotebookCell(this.r, this.r.layoutInfo.totalHeight);
					}
					dispose() {
						(this.g = !0),
							this.X() && this.t.preserveFocusedEditor(this.r),
							this.r.detachTextEditor(),
							this.fb(),
							this.a.dispose(),
							this.F?.dispose(),
							super.dispose();
					}
				};
				(e.$33b = T),
					(e.$33b = T =
						Ne(
							[
								j(4, p.$Li),
								j(5, o.$uZ),
								j(6, f.$7rb),
								j(7, h.$nM),
								j(8, g.$gj),
								j(9, v.$d6),
							],
							T,
						));
			},
		),
		define(
			de[855],
			he([1, 0, 6, 47, 10, 108, 1959, 70, 42, 155, 65, 990]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$41b = void 0),
					(i = mt(i));
				let h = class extends C.$11b {
					get renderedHtml() {
						return this.cb;
					}
					set renderedHtml(n) {
						this.cb !== n &&
							((this.cb = n), this.b.fire({ contentChanged: !0 }));
					}
					get layoutInfo() {
						return this.bb;
					}
					set renderedMarkdownHeight(n) {
						(this.db = n), this.nb(this.lb());
					}
					set chatHeight(n) {
						(this.eb = n), this.nb(this.lb());
					}
					get chatHeight() {
						return this.eb;
					}
					set editorHeight(n) {
						(this.fb = n),
							(this.gb =
								this.viewContext.notebookOptions.computeStatusBarHeight()),
							this.nb(this.lb());
					}
					get editorHeight() {
						throw new Error("MarkdownCellViewModel.editorHeight is write only");
					}
					get foldingState() {
						return this.foldingDelegate.getFoldingState(
							this.foldingDelegate.getCellIndex(this),
						);
					}
					get outputIsHovered() {
						return this.ib;
					}
					set outputIsHovered(n) {
						this.ib = n;
					}
					get outputIsFocused() {
						return this.jb;
					}
					set outputIsFocused(n) {
						this.jb = n;
					}
					get inputInOutputIsFocused() {
						return !1;
					}
					set inputInOutputIsFocused(n) {}
					get cellIsHovered() {
						return this.kb;
					}
					set cellIsHovered(n) {
						(this.kb = n), this.b.fire({ cellIsHoveredChanged: !0 });
					}
					constructor(n, g, p, o, f, b, s, l, y) {
						super(n, g, i.$9g(), f, b, s, l, y),
							(this.foldingDelegate = o),
							(this.viewContext = f),
							(this.cellKind = d.CellKind.Markup),
							(this.db = 0),
							(this.eb = 0),
							(this.fb = 0),
							(this.gb = 0),
							(this.hb = this.D(new t.$re())),
							(this.onDidChangeLayout = this.hb.event),
							(this.ib = !1),
							(this.jb = !1),
							(this.kb = !1),
							(this.outputsViewModels = []),
							(this.pb = this.D(new t.$re())),
							(this.hasFindResult = this.pb.event);
						const { bottomToolbarGap: $ } =
							this.viewContext.notebookOptions.computeBottomToolbarDimensions(
								this.viewType,
							);
						(this.bb = {
							chatHeight: 0,
							editorHeight: 0,
							previewHeight: 0,
							fontInfo: p?.fontInfo || null,
							editorWidth: p?.width
								? this.viewContext.notebookOptions.computeMarkdownCellEditorWidth(
										p.width,
									)
								: 0,
							commentOffset: 0,
							commentHeight: 0,
							bottomToolbarOffset: $,
							totalHeight: 100,
							layoutState: E.CellLayoutState.Uninitialized,
							foldHintHeight: 0,
							statusBarHeight: 0,
						}),
							this.D(
								this.onDidChangeState((v) => {
									this.viewContext.eventDispatcher.emit([
										new a.$KIb(v, this.model),
									]),
										v.foldingStateChanged &&
											this.nb(this.lb(), E.CellLayoutContext.Fold);
								}),
							);
					}
					lb() {
						const n = this.viewContext.notebookOptions.getLayoutConfiguration(),
							{ bottomToolbarGap: g } =
								this.viewContext.notebookOptions.computeBottomToolbarDimensions(
									this.viewType,
								),
							p = this.mb();
						return this.getEditState() === E.CellEditState.Editing
							? this.fb +
									n.markdownCellTopMargin +
									n.markdownCellBottomMargin +
									g +
									this.gb +
									this.L
							: Math.max(1, this.db + g + p + this.L);
					}
					mb() {
						return this.getEditState() === E.CellEditState.Editing ||
							this.foldingState !== E.CellFoldingState.Collapsed
							? 0
							: this.viewContext.notebookOptions.getLayoutConfiguration()
									.markdownFoldHintHeight;
					}
					updateOptions(n) {
						(n.cellStatusBarVisibility ||
							n.insertToolbarPosition ||
							n.cellToolbarLocation) &&
							this.nb(this.lb());
					}
					getOutputOffset(n) {
						return -1;
					}
					updateOutputHeight(n, g) {}
					triggerFoldingStateChange() {
						this.b.fire({ foldingStateChanged: !0 });
					}
					nb(n, g) {
						n !== this.layoutInfo.totalHeight &&
							this.layoutChange({ totalHeight: n, context: g });
					}
					layoutChange(n) {
						let g, p;
						this.isInputCollapsed
							? ((g =
									this.viewContext.notebookOptions.computeCollapsedMarkdownCellHeight(
										this.viewType,
									)),
								(n.totalHeight = g),
								(p = 0))
							: ((g =
									n.totalHeight === void 0
										? this.bb.layoutState === E.CellLayoutState.Uninitialized
											? 100
											: this.bb.totalHeight
										: n.totalHeight),
								(p = this.mb()));
						let o;
						if (this.getEditState() === E.CellEditState.Editing) {
							const f =
								this.viewContext.notebookOptions.getLayoutConfiguration();
							o =
								f.editorToolbarHeight +
								f.cellTopMargin +
								this.eb +
								this.fb +
								this.gb;
						} else o = this.db;
						(this.bb = {
							fontInfo: n.font || this.bb.fontInfo,
							editorWidth:
								n.outerWidth !== void 0
									? this.viewContext.notebookOptions.computeMarkdownCellEditorWidth(
											n.outerWidth,
										)
									: this.bb.editorWidth,
							chatHeight: this.eb,
							editorHeight: this.fb,
							statusBarHeight: this.gb,
							previewHeight: this.db,
							bottomToolbarOffset:
								this.viewContext.notebookOptions.computeBottomToolbarOffset(
									g,
									this.viewType,
								),
							totalHeight: g,
							layoutState: E.CellLayoutState.Measured,
							foldHintHeight: p,
							commentOffset: o,
							commentHeight: n.commentHeight ? this.L : this.bb.commentHeight,
						}),
							this.hb.fire(n);
					}
					restoreEditorViewState(n, g) {
						super.restoreEditorViewState(n),
							g !== void 0 &&
								this.layoutInfo.layoutState ===
									E.CellLayoutState.Uninitialized &&
								((this.bb = {
									...this.layoutInfo,
									totalHeight: g,
									chatHeight: this.eb,
									editorHeight: this.fb,
									statusBarHeight: this.gb,
									layoutState: E.CellLayoutState.FromCache,
								}),
								this.layoutChange({}));
					}
					getDynamicHeight() {
						return null;
					}
					getHeight(n) {
						return this.bb.layoutState === E.CellLayoutState.Uninitialized
							? 100
							: this.bb.totalHeight;
					}
					$() {
						this.b.fire({ contentChanged: !0 });
					}
					onDeselect() {}
					startFind(n, g) {
						const p = super.ab(n, g);
						return p === null ? null : { cell: this, contentMatches: p };
					}
					dispose() {
						super.dispose(), (this.foldingDelegate = null);
					}
				};
				(e.$41b = h),
					(e.$41b = h =
						Ne([j(5, w.$gj), j(6, m.$MO), j(7, r.$GN), j(8, u.$dtb)], h));
			},
		),
		define(
			de[1961],
			he([1, 0, 3, 77, 8, 5, 1359, 108, 294, 482, 855, 70, 176, 190]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$61b = e.$51b = void 0);
				let n = class extends m.$A1b {
					constructor(o, f) {
						super(),
							(this.b = f),
							(this.a = this.D(this.b.createInstance(g, o, void 0)));
					}
					didRenderCell(o) {
						this.a.updateForElement(o);
					}
				};
				(e.$51b = n), (e.$51b = n = Ne([j(1, E.$Li)], n));
				let g = class extends t.$1c {
					constructor(o, f, b, s) {
						super(),
							(this.y = o),
							(this.z = f),
							(this.C = b),
							(this.F = s),
							(this.w = this.D(new t.$Zc())),
							this.C.bufferChangeEvents(() => {
								(this.a = h.$CJb.bindTo(this.C)),
									(this.b = h.$DJb.bindTo(this.C)),
									(this.c = h.$EJb.bindTo(this.C)),
									(this.f = h.$FJb.bindTo(this.C)),
									(this.u = h.$GJb.bindTo(this.C)),
									(this.g = h.$IJb.bindTo(this.C)),
									(this.h = h.$JJb.bindTo(this.C)),
									(this.j = h.$KJb.bindTo(this.C)),
									(this.m = h.$NJb.bindTo(this.C)),
									(this.n = h.$OJb.bindTo(this.C)),
									(this.q = h.$HJb.bindTo(this.C)),
									(this.s = h.$QJb.bindTo(this.C)),
									(this.r = h.$PJb.bindTo(this.C)),
									(this.t = h.$RJb.bindTo(this.C)),
									f && this.updateForElement(f);
							}),
							this.D(
								this.F.onDidChangeExecution((l) => {
									l.type === c.NotebookExecutionType.cell &&
										this.z &&
										l.affectsCell(this.z.uri) &&
										this.I();
								}),
							);
					}
					updateForElement(o) {
						if ((this.w.clear(), (this.z = o), !o)) return;
						this.w.add(o.onDidChangeState((b) => this.G(b))),
							o instanceof r.$31b &&
								(this.w.add(o.onDidChangeOutputs(() => this.M())),
								this.w.add(
									(0, i.autorun)((b) => {
										this.t.set(!!b.readObservable(o.excecutionError));
									}),
								)),
							this.w.add(this.y.onDidChangeActiveCell(() => this.H())),
							this.z instanceof u.$41b
								? this.a.set("markup")
								: this.z instanceof r.$31b && this.a.set("code"),
							this.C.bufferChangeEvents(() => {
								this.H(),
									this.I(),
									this.J(),
									this.L(),
									this.M(),
									this.N(),
									this.q.set(this.z.lineNumbers),
									this.r.set(this.z.uri.toString());
							});
						const f = C.$y1b.get(this.y);
						f &&
							this.w.add(
								f.onDidChangePromptCache((b) => {
									b.cell.toString() === this.z.uri.toString() && this.N();
								}),
							);
					}
					G(o) {
						this.C.bufferChangeEvents(() => {
							o.internalMetadataChanged && this.I(),
								o.editStateChanged && this.J(),
								o.focusModeChanged && this.H(),
								o.cellLineNumberChanged && this.q.set(this.z.lineNumbers),
								(o.inputCollapsedChanged || o.outputCollapsedChanged) &&
									this.L();
						});
					}
					H() {
						if (!this.z) return;
						const o = this.y.getActiveCell();
						this.c.set(this.y.getActiveCell() === this.z),
							o === this.z
								? this.f.set(this.z.focusMode === d.CellFocusMode.Editor)
								: this.f.set(!1);
					}
					I() {
						if (!this.z) return;
						const o = this.z.internalMetadata;
						this.b.set(!this.y.isReadOnly);
						const f = this.F.getCellExecution(this.z.uri);
						this.z instanceof u.$41b
							? (this.g.reset(), this.h.reset())
							: f?.state === a.NotebookCellExecutionState.Executing
								? (this.g.set("executing"), this.h.set(!0))
								: f?.state === a.NotebookCellExecutionState.Pending ||
										f?.state === a.NotebookCellExecutionState.Unconfirmed
									? (this.g.set("pending"), this.h.set(!0))
									: o.lastRunSuccess === !0
										? (this.g.set("succeeded"), this.h.set(!1))
										: o.lastRunSuccess === !1
											? (this.g.set("failed"), this.h.set(!1))
											: (this.g.set("idle"), this.h.set(!1));
					}
					J() {
						this.z &&
							(this.z instanceof u.$41b
								? this.u.set(this.z.getEditState() === d.CellEditState.Editing)
								: this.u.set(!1));
					}
					L() {
						this.z &&
							(this.m.set(!!this.z.isInputCollapsed),
							this.n.set(!!this.z.isOutputCollapsed));
					}
					M() {
						this.z instanceof r.$31b
							? this.j.set(this.z.outputsViewModels.length > 0)
							: this.j.set(!1);
					}
					N() {
						const o = C.$y1b.get(this.y);
						if (!o || !this.z) {
							this.s.set(!1);
							return;
						}
						this.s.set(o.isCellGeneratedByChat(this.z));
					}
				};
				(e.$61b = g), (e.$61b = g = Ne([j(2, w.$6j), j(3, c.$d6)], g));
			},
		),
		define(
			de[1962],
			he([
				1, 0, 7, 431, 6, 3, 12, 64, 589, 10, 93, 108, 70, 442, 176, 201, 194,
				855, 5, 3102, 190, 3501, 3111,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$C2b = e.$B2b = e.$A2b = void 0),
					(t = mt(t));
				var $;
				(function (k) {
					(k[(k.Top = 0)] = "Top"),
						(k[(k.Center = 1)] = "Center"),
						(k[(k.Bottom = 2)] = "Bottom"),
						(k[(k.NearTop = 3)] = "NearTop");
				})($ || ($ = {}));
				function v(k, L) {
					if (!L.length) return k;
					let D = 0,
						M = 0;
					const N = [];
					for (; D < k.length && M < L.length; )
						D < L[M].start && N.push(...k.slice(D, L[M].start)),
							(D = L[M].end + 1),
							M++;
					return D < k.length && N.push(...k.slice(D)), N;
				}
				e.$A2b = 5e3;
				function S(k) {
					const L = 0 - (parseInt(k.style.top, 10) || 0);
					return L >= 0 && L <= e.$A2b * 2;
				}
				let I = class extends u.$yMb {
					get onWillScroll() {
						return this.k.onWillScroll;
					}
					get rowsContainer() {
						return this.k.containerDomNode;
					}
					get scrollableElement() {
						return this.k.scrollableElementDomNode;
					}
					get viewModel() {
						return this.ab;
					}
					get visibleRanges() {
						return this.eb;
					}
					set visibleRanges(L) {
						(0, c.$l6)(this.eb, L) || ((this.eb = L), this.db.fire());
					}
					get isDisposed() {
						return this.fb;
					}
					get webviewElement() {
						return this.hb;
					}
					get inRenderingTransaction() {
						return this.k.inRenderingTransaction;
					}
					constructor(L, D, M, N, A, R, O, B, U, z, F) {
						super(L, D, N, A, O, R, B, U, z),
							(this.ib = L),
							(this.jb = M),
							(this.R = []),
							(this.S = new E.$Zc()),
							(this.U = new E.$Zc()),
							(this.X = this.S.add(new w.$re())),
							(this.onDidRemoveOutputs = this.X.event),
							(this.Y = this.S.add(new w.$re())),
							(this.onDidHideOutputs = this.Y.event),
							(this.Z = this.S.add(new w.$re())),
							(this.onDidRemoveCellsFromView = this.Z.event),
							(this.ab = null),
							(this.bb = []),
							(this.cb = null),
							(this.db = this.S.add(new w.$re())),
							(this.onDidChangeVisibleRanges = this.db.event),
							(this.eb = []),
							(this.fb = !1),
							(this.gb = !1),
							(this.hb = null),
							n.$qJb.bindTo(this.contextKeyService).set(!0),
							(this.R = this.getFocusedElements()),
							this.S.add(
								this.onDidChangeFocus((J) => {
									this.R.forEach((W) => {
										J.elements.indexOf(W) < 0 && W.onDeselect();
									}),
										(this.R = J.elements);
								}),
							);
						const x = h.$16.bindTo(R);
						x.set("none");
						const H = h.$26.bindTo(R);
						H.set("none");
						const q = this.S.add(new E.$2c()),
							V = this.S.add(new E.$2c());
						this.W = new l.$y2b(F, U, this.onDidScroll);
						const G = (J) => {
							switch (J.cursorAtBoundary()) {
								case a.CursorAtBoundary.Both:
									x.set("both");
									break;
								case a.CursorAtBoundary.Top:
									x.set("top");
									break;
								case a.CursorAtBoundary.Bottom:
									x.set("bottom");
									break;
								default:
									x.set("none");
									break;
							}
							switch (J.cursorAtLineBoundary()) {
								case a.CursorAtLineBoundary.Both:
									H.set("both");
									break;
								case a.CursorAtLineBoundary.Start:
									H.set("start");
									break;
								case a.CursorAtLineBoundary.End:
									H.set("end");
									break;
								default:
									H.set("none");
									break;
							}
						};
						this.S.add(
							this.onDidChangeFocus((J) => {
								if (J.elements.length) {
									const W = J.elements[0];
									(q.value = W.onDidChangeState((X) => {
										X.selectionChanged && G(W);
									})),
										(V.value = W.onDidChangeEditorAttachState(() => {
											W.editorAttached && G(W);
										})),
										G(W);
									return;
								}
								x.set("none");
							}),
						),
							this.S.add(
								this.k.onMouseDblClick(() => {
									const J = this.getFocusedElements()[0];
									if (
										J &&
										J.cellKind === h.CellKind.Markup &&
										!J.isInputCollapsed &&
										!this.ab?.options.isReadOnly
									) {
										const W = this.ob(J);
										W >= 0 && this.qb(W),
											J.updateEditState(a.CellEditState.Editing, "dbclick"),
											(J.focusMode = a.CellFocusMode.Editor);
									}
								}),
							);
						const K = () => {
							if (!this.k.length) return;
							const J = this.getViewScrollTop(),
								W = this.getViewScrollBottom();
							if (J >= W) return;
							const X = (0, g.$Zm)(this.k.indexAt(J), 0, this.k.length - 1),
								Y = this.k.element(X),
								ie = this.ab.getCellIndex(Y),
								ne = (0, g.$Zm)(this.k.indexAt(W), 0, this.k.length - 1),
								ee = this.k.element(ne),
								_ = this.ab.getCellIndex(ee);
							_ - ie === ne - X
								? (this.visibleRanges = [{ start: ie, end: _ + 1 }])
								: (this.visibleRanges = this.nb(X, ie, ne, _));
						};
						this.S.add(
							this.k.onDidChangeContentHeight(() => {
								this.gb &&
									t.$hgb(t.getWindow(D), () => {
										K();
									}),
									K();
							}),
						),
							this.S.add(
								this.k.onDidScroll(() => {
									this.gb &&
										t.$hgb(t.getWindow(D), () => {
											K();
										}),
										K();
								}),
							);
					}
					C(L, D, M, N) {
						const A = new b.$x2b(L, D, M, N);
						return (this.s = new y.$z2b(A, this)), A;
					}
					_getView() {
						return this.k;
					}
					attachWebview(L) {
						(L.style.top = `-${e.$A2b}px`),
							this.rowsContainer.insertAdjacentElement("afterbegin", L),
							(this.hb = new p.$Rhb(L));
					}
					elementAt(L) {
						if (!this.k.length) return;
						const D = this.k.indexAt(L),
							M = (0, g.$Zm)(D, 0, this.k.length - 1);
						return this.element(M);
					}
					elementHeight(L) {
						const D = this.ob(L);
						if (D === void 0 || D < 0 || D >= this.length)
							throw (this.ob(L), new i.$Bib(this.ib, `Invalid index ${D}`));
						return this.k.elementHeight(D);
					}
					detachViewModel() {
						this.U.clear(), (this.ab = null), (this.cb = null);
					}
					attachViewModel(L) {
						(this.ab = L),
							this.U.add(
								L.onDidChangeViewCells((A) => {
									if (this.fb) return;
									this.s.onCellsChanged(A);
									const R = this.bb
											.map((F) => this.ab.getTrackedRange(F))
											.filter((F) => F !== null),
										O = v(this.ab.viewCells, R),
										B = [],
										U = new Set();
									for (let F = 0; F < this.length; F++)
										B.push(this.element(F)),
											U.add(this.element(F).uri.toString());
									const z = (0, h.$Z6)(B, O, (F) => U.has(F.uri.toString()));
									A.synchronous
										? this.lb(z)
										: this.U.add(
												t.$hgb(t.getWindow(this.rowsContainer), () => {
													this.fb || this.lb(z);
												}),
											);
								}),
							),
							this.U.add(
								L.onDidChangeSelection((A) => {
									if (A === "view") return;
									const R = (0, c.$j6)(L.getSelections())
										.map((B) => L.cellAt(B))
										.filter((B) => !!B)
										.map((B) => this.ob(B));
									this.setSelection(R, void 0, !0);
									const O = (0, c.$j6)([L.getFocus()])
										.map((B) => L.cellAt(B))
										.filter((B) => !!B)
										.map((B) => this.ob(B));
									O.length && this.setFocus(O, void 0, !0);
								}),
							);
						const D = L.getHiddenRanges();
						this.setHiddenAreas(D, !1);
						const M = (0, c.$k6)(D),
							N = L.viewCells.slice(0);
						M.reverse().forEach((A) => {
							const R = N.splice(A.start, A.end - A.start + 1);
							this.Z.fire(R);
						}),
							this.splice2(0, 0, N);
					}
					lb(L) {
						L.reverse().forEach((D) => {
							const M = [],
								N = [],
								A = [];
							for (let R = D.start; R < D.start + D.deleteCount; R++) {
								const O = this.element(R);
								O.cellKind === h.CellKind.Code
									? this.ab.hasCell(O)
										? M.push(...O?.outputsViewModels)
										: N.push(...O?.outputsViewModels)
									: A.push(O);
							}
							this.splice2(D.start, D.deleteCount, D.toInsert),
								this.Y.fire(M),
								this.X.fire(N),
								this.Z.fire(A);
						});
					}
					clear() {
						super.splice(0, this.length);
					}
					setHiddenAreas(L, D) {
						if (!this.ab) return !1;
						const M = (0, c.$k6)(L),
							N = this.bb
								.map((R) => this.ab.getTrackedRange(R))
								.filter((R) => R !== null);
						if (M.length === N.length) {
							let R = !1;
							for (let O = 0; O < M.length; O++)
								if (!(M[O].start === N[O].start && M[O].end === N[O].end)) {
									R = !0;
									break;
								}
							if (!R)
								return (
									this.mb(M), this.s.onHiddenRangesChange(), this.s.layout(), !1
								);
						}
						this.bb.forEach((R) =>
							this.ab.setTrackedRange(
								R,
								null,
								d.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter,
							),
						);
						const A = M.map((R) =>
							this.ab.setTrackedRange(
								null,
								R,
								d.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter,
							),
						).filter((R) => R !== null);
						return (
							(this.bb = A),
							this.mb(M),
							this.s.onHiddenRangesChange(),
							D && this.updateHiddenAreasInView(N, M),
							this.s.layout(),
							!0
						);
					}
					mb(L) {
						let D = 0,
							M = 0;
						const N = [];
						for (; M < L.length; ) {
							for (let R = D; R < L[M].start - 1; R++) N.push(1);
							N.push(L[M].end - L[M].start + 1 + 1), (D = L[M].end + 1), M++;
						}
						for (let R = D; R < this.ab.length; R++) N.push(1);
						const A = new Uint32Array(N.length);
						for (let R = 0; R < N.length; R++) A[R] = N[R];
						this.cb = new m.$WN(A);
					}
					updateHiddenAreasInView(L, D) {
						const M = v(this.ab.viewCells, L),
							N = new Set();
						M.forEach((O) => {
							N.add(O.uri.toString());
						});
						const A = v(this.ab.viewCells, D),
							R = (0, h.$Z6)(M, A, (O) => N.has(O.uri.toString()));
						this.lb(R);
					}
					splice2(L, D, M = []) {
						if (L < 0 || L > this.k.length) return;
						const N = t.$Lgb(this.rowsContainer);
						super.splice(L, D, M), N && this.domFocus();
						const A = [];
						this.getSelectedElements().forEach((R) => {
							this.ab.hasCell(R) && A.push(R.handle);
						}),
							!A.length &&
								this.ab.viewCells.length &&
								this.ab.updateSelectionsState({
									kind: h.SelectionStateType.Index,
									focus: { start: 0, end: 1 },
									selections: [{ start: 0, end: 1 }],
								}),
							this.s.layout();
					}
					getModelIndex(L) {
						const D = this.indexOf(L);
						return this.getModelIndex2(D);
					}
					getModelIndex2(L) {
						return this.cb ? this.cb.getPrefixSum(L - 1) : L;
					}
					getViewIndex(L) {
						const D = this.ab.getCellIndex(L);
						return this.getViewIndex2(D);
					}
					getViewIndex2(L) {
						if (!this.cb) return L;
						const D = this.cb.getIndexOf(L);
						return D.remainder !== 0
							? L >= this.cb.getTotalSum()
								? L - (this.cb.getTotalSum() - this.cb.getCount())
								: void 0
							: D.index;
					}
					convertModelIndexToViewIndex(L) {
						return this.cb
							? L >= this.cb.getTotalSum()
								? Math.min(this.length, this.cb.getTotalSum())
								: this.cb.getIndexOf(L).index
							: L;
					}
					modelIndexIsVisible(L) {
						return this.cb && this.cb.getIndexOf(L).remainder !== 0
							? L >= this.cb.getTotalSum()
							: !0;
					}
					nb(L, D, M, N) {
						const A = [],
							R = [];
						let O = L,
							B = D;
						for (; O <= M; ) {
							const U = this.cb.getPrefixSum(O);
							U === B + 1
								? (A.length &&
										(A[A.length - 1] === B - 1
											? R.push({ start: A[A.length - 1], end: B + 1 })
											: R.push({
													start: A[A.length - 1],
													end: A[A.length - 1] + 1,
												})),
									A.push(B),
									O++,
									B++)
								: (A.length &&
										(A[A.length - 1] === B - 1
											? R.push({ start: A[A.length - 1], end: B + 1 })
											: R.push({
													start: A[A.length - 1],
													end: A[A.length - 1] + 1,
												})),
									A.push(B),
									O++,
									(B = U));
						}
						return (
							A.length &&
								R.push({ start: A[A.length - 1], end: A[A.length - 1] + 1 }),
							(0, c.$k6)(R)
						);
					}
					getVisibleRangesPlusViewportAboveAndBelow() {
						if (this.k.length <= 0) return [];
						const L = Math.max(this.getViewScrollTop() - this.renderHeight, 0),
							D = this.k.indexAt(L),
							M = this.k.element(D),
							N = this.ab.getCellIndex(M),
							A = (0, g.$Zm)(
								this.getViewScrollBottom() + this.renderHeight,
								0,
								this.scrollHeight,
							),
							R = (0, g.$Zm)(this.k.indexAt(A), 0, this.k.length - 1),
							O = this.k.element(R),
							B = this.ab.getCellIndex(O);
						return B - N === R - D
							? [{ start: N, end: B }]
							: this.nb(D, N, R, B);
					}
					ob(L) {
						if (!this.ab) return -1;
						const D = this.ab.getCellIndex(L);
						if (D === -1) return -1;
						if (!this.cb) return D;
						const M = this.cb.getIndexOf(D);
						return M.remainder !== 0 && D >= this.cb.getTotalSum()
							? D - (this.cb.getTotalSum() - this.cb.getCount())
							: M.index;
					}
					pb(L) {
						if (!this.cb) return L;
						const D = this.cb.getIndexOf(L);
						return D.remainder !== 0 && L >= this.cb.getTotalSum()
							? L - (this.cb.getTotalSum() - this.cb.getCount())
							: D.index;
					}
					focusElement(L) {
						const D = this.ob(L);
						if (D >= 0 && this.ab) {
							const M = this.element(D).handle;
							this.ab.updateSelectionsState(
								{
									kind: h.SelectionStateType.Handle,
									primary: M,
									selections: [M],
								},
								"view",
							),
								this.setFocus([D], void 0, !1);
						}
					}
					selectElements(L) {
						const D = L.map((M) => this.ob(M)).filter((M) => M >= 0);
						this.setSelection(D);
					}
					getCellViewScrollTop(L) {
						const D = this.ob(L);
						if (D === void 0 || D < 0 || D >= this.length)
							throw new i.$Bib(this.ib, `Invalid index ${D}`);
						return this.k.elementTop(D);
					}
					getCellViewScrollBottom(L) {
						const D = this.ob(L);
						if (D === void 0 || D < 0 || D >= this.length)
							throw new i.$Bib(this.ib, `Invalid index ${D}`);
						const M = this.k.elementTop(D),
							N = this.k.elementHeight(D);
						return M + N;
					}
					setFocus(L, D, M) {
						if (M) {
							super.setFocus(L, D);
							return;
						}
						if (L.length) {
							if (this.ab) {
								const N = this.element(L[0]).handle;
								this.ab.updateSelectionsState(
									{
										kind: h.SelectionStateType.Handle,
										primary: N,
										selections: this.getSelection().map(
											(A) => this.element(A).handle,
										),
									},
									"view",
								);
							}
						} else if (this.ab) {
							if (this.length) return;
							this.ab.updateSelectionsState(
								{
									kind: h.SelectionStateType.Handle,
									primary: null,
									selections: [],
								},
								"view",
							);
						}
						super.setFocus(L, D);
					}
					setSelection(L, D, M) {
						if (M) {
							super.setSelection(L, D);
							return;
						}
						L.length
							? this.ab &&
								this.ab.updateSelectionsState(
									{
										kind: h.SelectionStateType.Handle,
										primary: this.getFocusedElements()[0]?.handle ?? null,
										selections: L.map((N) => this.element(N)).map(
											(N) => N.handle,
										),
									},
									"view",
								)
							: this.ab &&
								this.ab.updateSelectionsState(
									{
										kind: h.SelectionStateType.Handle,
										primary: this.getFocusedElements()[0]?.handle ?? null,
										selections: [],
									},
									"view",
								),
							super.setSelection(L, D);
					}
					revealCells(L) {
						const D = this.pb(L.start);
						if (D < 0) return;
						const M = this.pb(L.end - 1),
							N = this.getViewScrollTop(),
							A = this.getViewScrollBottom(),
							R = this.k.elementTop(D);
						if (R >= N && R < A) {
							const O = this.k.elementTop(M),
								B = this.k.elementHeight(M);
							if (O + B <= A) return;
							if (O >= A) return this.rb(M, !1, $.Bottom);
							if (O < A)
								return O + B - A < R - N
									? this.k.setScrollTop(N + O + B - A)
									: this.rb(D, !1, $.Top);
						}
						this.qb(D);
					}
					qb(L, D) {
						const M = this.k.firstMostlyVisibleIndex,
							N = this.k.elementHeight(L);
						L <= M || (!D && N >= this.k.renderHeight)
							? this.rb(L, !0, $.Top)
							: this.rb(L, !0, $.Bottom, D);
					}
					scrollToBottom() {
						const L = this.k.scrollHeight,
							D = this.getViewScrollTop(),
							M = this.getViewScrollBottom();
						this.k.setScrollTop(L - (M - D));
					}
					async revealCell(L, D) {
						const M = this.ob(L);
						if (!(M < 0)) {
							switch (D) {
								case a.CellRevealType.Top:
									this.rb(M, !1, $.Top);
									break;
								case a.CellRevealType.Center:
									this.rb(M, !1, $.Center);
									break;
								case a.CellRevealType.CenterIfOutsideViewport:
									this.rb(M, !0, $.Center);
									break;
								case a.CellRevealType.NearTopIfOutsideViewport:
									this.rb(M, !0, $.NearTop);
									break;
								case a.CellRevealType.FirstLineIfOutsideViewport:
									this.qb(M, !0);
									break;
								case a.CellRevealType.Default:
									this.qb(M);
									break;
							}
							if (
								(L.getEditState() === a.CellEditState.Editing ||
									(D === a.CellRevealType.FirstLineIfOutsideViewport &&
										L.cellKind === h.CellKind.Code)) &&
								!L.editorAttached
							)
								return P(L);
						}
					}
					rb(L, D, M, N) {
						if (L >= this.k.length) return;
						const A = this.getViewScrollTop(),
							R = this.getViewScrollBottom(),
							O = this.k.elementTop(L),
							B = this.k.elementHeight(L) + O;
						if (!(D && O >= A && B < R))
							switch (M) {
								case $.Top:
									this.k.setScrollTop(O),
										this.k.setScrollTop(this.k.elementTop(L));
									break;
								case $.Center:
								case $.NearTop:
									{
										this.k.setScrollTop(O - this.k.renderHeight / 2);
										const U = this.k.elementTop(L),
											z = this.k.elementHeight(L),
											F = this.getViewScrollBottom() - this.getViewScrollTop();
										z >= F
											? this.k.setScrollTop(U)
											: M === $.Center
												? this.k.setScrollTop(U + z / 2 - F / 2)
												: M === $.NearTop && this.k.setScrollTop(U - F / 5);
									}
									break;
								case $.Bottom:
									if (N) {
										const U =
												this.viewModel?.layoutInfo?.fontInfo.lineHeight ?? 15,
											z =
												this.jb.getLayoutConfiguration().cellTopMargin +
												this.jb.getLayoutConfiguration().editorTopPadding,
											F = O + U + z;
										if (F < R) return;
										this.k.setScrollTop(this.scrollTop + (F - R));
										break;
									}
									this.k.setScrollTop(this.scrollTop + (B - R)),
										this.k.setScrollTop(
											this.scrollTop +
												(this.k.elementTop(L) +
													this.k.elementHeight(L) -
													this.getViewScrollBottom()),
										);
									break;
								default:
									break;
							}
					}
					async revealRangeInCell(L, D, M) {
						const N = this.ob(L);
						if (!(N < 0))
							switch (M) {
								case a.CellRevealRangeType.Default:
									return this.sb(N, D);
								case a.CellRevealRangeType.Center:
									return this.tb(N, D);
								case a.CellRevealRangeType.CenterIfOutsideViewport:
									return this.ub(N, D);
							}
					}
					async sb(L, D) {
						const M = this.getViewScrollTop(),
							N = this.getViewScrollBottom(),
							A = this.k.elementTop(L),
							R = this.k.element(L);
						if (R.editorAttached) this.vb(L, D);
						else {
							const O = this.k.elementHeight(L);
							let B;
							return (
								A + O <= M
									? (this.k.setScrollTop(A), (B = "top"))
									: A >= N &&
										(this.k.setScrollTop(A - this.k.renderHeight / 2),
										(B = "bottom")),
								new Promise((z, F) => {
									R.onDidChangeEditorAttachState(() => {
										R.editorAttached ? z() : F();
									});
								}).then(() => {
									this.vb(L, D, B);
								})
							);
						}
					}
					async tb(L, D) {
						const M = (O, B) => {
								const U = this.k.element(O),
									z = U.getPositionScrollTopOffset(B),
									F = this.k.elementTop(O) + z;
								this.k.setScrollTop(F - this.k.renderHeight / 2),
									U.revealRangeInCenter(B);
							},
							A = this.k.elementTop(L);
						this.k.setScrollTop(A - this.k.renderHeight / 2);
						const R = this.k.element(L);
						if (R.editorAttached) M(L, D);
						else return P(R).then(() => M(L, D));
					}
					async ub(L, D) {
						const M = (z, F) => {
								const x = this.k.element(z),
									H = x.getPositionScrollTopOffset(F),
									q = this.k.elementTop(z) + H;
								this.k.setScrollTop(q - this.k.renderHeight / 2),
									x.revealRangeInCenter(F);
							},
							N = this.getViewScrollTop(),
							A = this.getViewScrollBottom(),
							O = this.k.elementTop(L),
							B = this.k.element(L),
							U = O + B.getPositionScrollTopOffset(D);
						if (U < N || U > A) {
							this.k.setScrollTop(U - this.k.renderHeight / 2);
							const z = this.k.elementTop(L) + B.getPositionScrollTopOffset(D);
							if (
								(this.k.setScrollTop(z - this.k.renderHeight / 2),
								!B.editorAttached)
							)
								return P(B).then(() => M(L, D));
						} else if (B.editorAttached) B.revealRangeInCenter(D);
						else return P(B).then(() => M(L, D));
					}
					vb(L, D, M) {
						const N = this.k.element(L),
							A = this.getViewScrollTop(),
							R = this.getViewScrollBottom(),
							O = N.getPositionScrollTopOffset(D),
							B = this.k.elementHeight(L);
						if (O >= B) {
							const F = N.layoutInfo.totalHeight;
							this.updateElementHeight(L, F);
						}
						const z = this.k.elementTop(L) + O;
						z < A
							? this.k.setScrollTop(z - 30)
							: z > R
								? this.k.setScrollTop(A + z - R + 30)
								: M === "bottom"
									? this.k.setScrollTop(A + z - R + 30)
									: M === "top" && this.k.setScrollTop(z - 30);
					}
					revealCellOffsetInCenter(L, D) {
						const M = this.ob(L);
						if (M >= 0) {
							const N = this.k.element(M),
								A = this.k.elementTop(M);
							if (N instanceof o.$41b) return this.wb(M);
							{
								const R =
									N.layoutInfo.outputContainerOffset +
									Math.min(D, N.layoutInfo.outputTotalHeight);
								this.k.setScrollTop(A - this.k.renderHeight / 2),
									this.k.setScrollTop(A + R - this.k.renderHeight / 2);
							}
						}
					}
					revealOffsetInCenterIfOutsideViewport(L) {
						const D = this.getViewScrollTop(),
							M = this.getViewScrollBottom();
						(L < D || L > M) &&
							this.k.setScrollTop(L - this.k.renderHeight / 2);
					}
					wb(L) {
						this.rb(L, !0, $.Center);
					}
					domElementOfElement(L) {
						const D = this.ob(L);
						return D >= 0 ? this.k.domElement(D) : null;
					}
					focusView() {
						this.k.domNode.focus();
					}
					triggerScrollFromMouseWheelEvent(L) {
						this.k.delegateScrollFromMouseWheelEvent(L);
					}
					delegateVerticalScrollbarPointerDown(L) {
						this.k.delegateVerticalScrollbarPointerDown(L);
					}
					xb(L) {
						return (
							this.k.elementTop(L) + this.k.elementHeight(L) < this.scrollTop
						);
					}
					updateElementHeight2(L, D, M = null) {
						const N = this.ob(L);
						if (N === void 0 || N < 0 || N >= this.length) return;
						if (this.xb(N)) {
							const B = this.elementHeight(L) - D;
							this.hb &&
								w.Event.once(this.k.onWillScroll)(() => {
									const U = parseInt(this.hb.domNode.style.top, 10);
									S(this.hb.domNode)
										? this.hb.setTop(U - B)
										: this.hb.setTop(-e.$A2b);
								}),
								this.k.updateElementHeight(N, D, M),
								this.s.layout();
							return;
						}
						if (M !== null) {
							this.k.updateElementHeight(N, D, M), this.s.layout();
							return;
						}
						const A = this.getFocus(),
							R = A.length ? A[0] : null;
						if (R) {
							const O = D - this.k.elementHeight(N);
							if (this.W.shouldAnchor(this.k, R, O, this.element(N))) {
								this.k.updateElementHeight(N, D, R), this.s.layout();
								return;
							}
						}
						this.k.updateElementHeight(N, D, null), this.s.layout();
					}
					changeViewZones(L) {
						this.s.changeViewZones(L) && this.s.layout();
					}
					domFocus() {
						const L = this.getFocusedElements()[0],
							D = L && this.domElementOfElement(L);
						(this.k.domNode.ownerDocument.activeElement &&
							D &&
							D.contains(this.k.domNode.ownerDocument.activeElement)) ||
							(!C.$m &&
								this.k.domNode.ownerDocument.activeElement &&
								t.$Egb(
									this.k.domNode.ownerDocument.activeElement,
									"context-view",
								)) ||
							super.domFocus();
					}
					focusContainer(L) {
						L &&
							(this.ab?.updateSelectionsState(
								{
									kind: h.SelectionStateType.Handle,
									primary: null,
									selections: [],
								},
								"view",
							),
							this.setFocus([], void 0, !0),
							this.setSelection([], void 0, !0)),
							super.domFocus();
					}
					getViewScrollTop() {
						return this.k.getScrollTop();
					}
					getViewScrollBottom() {
						return this.getViewScrollTop() + this.k.renderHeight;
					}
					setCellEditorSelection(L, D) {
						const M = L;
						M.editorAttached
							? M.setSelection(D)
							: P(M).then(() => {
									M.setSelection(D);
								});
					}
					style(L) {
						const D = this.k.domId;
						this.V || (this.V = t.$Rgb(this.k.domNode));
						const M = D && `.${D}`,
							N = [];
						L.listBackground &&
							N.push(
								`.monaco-list${M} > div.monaco-scrollable-element > .monaco-list-rows { background: ${L.listBackground}; }`,
							),
							L.listFocusBackground &&
								(N.push(
									`.monaco-list${M}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { background-color: ${L.listFocusBackground}; }`,
								),
								N.push(
									`.monaco-list${M}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused:hover { background-color: ${L.listFocusBackground}; }`,
								)),
							L.listFocusForeground &&
								N.push(
									`.monaco-list${M}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { color: ${L.listFocusForeground}; }`,
								),
							L.listActiveSelectionBackground &&
								(N.push(
									`.monaco-list${M}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { background-color: ${L.listActiveSelectionBackground}; }`,
								),
								N.push(
									`.monaco-list${M}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected:hover { background-color: ${L.listActiveSelectionBackground}; }`,
								)),
							L.listActiveSelectionForeground &&
								N.push(
									`.monaco-list${M}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { color: ${L.listActiveSelectionForeground}; }`,
								),
							L.listFocusAndSelectionBackground &&
								N.push(`
				.monaco-drag-image,
				.monaco-list${M}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected.focused { background-color: ${L.listFocusAndSelectionBackground}; }
			`),
							L.listFocusAndSelectionForeground &&
								N.push(`
				.monaco-drag-image,
				.monaco-list${M}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected.focused { color: ${L.listFocusAndSelectionForeground}; }
			`),
							L.listInactiveFocusBackground &&
								(N.push(
									`.monaco-list${M} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { background-color:  ${L.listInactiveFocusBackground}; }`,
								),
								N.push(
									`.monaco-list${M} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused:hover { background-color:  ${L.listInactiveFocusBackground}; }`,
								)),
							L.listInactiveSelectionBackground &&
								(N.push(
									`.monaco-list${M} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { background-color:  ${L.listInactiveSelectionBackground}; }`,
								),
								N.push(
									`.monaco-list${M} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected:hover { background-color:  ${L.listInactiveSelectionBackground}; }`,
								)),
							L.listInactiveSelectionForeground &&
								N.push(
									`.monaco-list${M} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { color: ${L.listInactiveSelectionForeground}; }`,
								),
							L.listHoverBackground &&
								N.push(
									`.monaco-list${M}:not(.drop-target) > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row:hover:not(.selected):not(.focused) { background-color:  ${L.listHoverBackground}; }`,
								),
							L.listHoverForeground &&
								N.push(
									`.monaco-list${M} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row:hover:not(.selected):not(.focused) { color:  ${L.listHoverForeground}; }`,
								),
							L.listSelectionOutline &&
								N.push(
									`.monaco-list${M} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.selected { outline: 1px dotted ${L.listSelectionOutline}; outline-offset: -1px; }`,
								),
							L.listFocusOutline &&
								N.push(`
				.monaco-drag-image,
				.monaco-list${M}:focus > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { outline: 1px solid ${L.listFocusOutline}; outline-offset: -1px; }
			`),
							L.listInactiveFocusOutline &&
								N.push(
									`.monaco-list${M} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row.focused { outline: 1px dotted ${L.listInactiveFocusOutline}; outline-offset: -1px; }`,
								),
							L.listHoverOutline &&
								N.push(
									`.monaco-list${M} > div.monaco-scrollable-element > .monaco-list-rows > .monaco-list-row:hover { outline: 1px dashed ${L.listHoverOutline}; outline-offset: -1px; }`,
								),
							L.listDropOverBackground &&
								N.push(`
				.monaco-list${M}.drop-target,
				.monaco-list${M} > div.monaco-scrollable-element > .monaco-list-rows.drop-target,
				.monaco-list${M} > div.monaco-scrollable-element > .monaco-list-row.drop-target { background-color: ${L.listDropOverBackground} !important; color: inherit !important; }
			`);
						const A = N.join(`
`);
						A !== this.V.textContent && (this.V.textContent = A);
					}
					getRenderHeight() {
						return this.k.renderHeight;
					}
					getScrollHeight() {
						return this.k.scrollHeight;
					}
					layout(L, D) {
						(this.gb = !0),
							super.layout(L, D),
							this.renderHeight === 0
								? (this.k.domNode.style.visibility = "hidden")
								: (this.k.domNode.style.visibility = "initial"),
							(this.gb = !1);
					}
					dispose() {
						(this.fb = !0),
							this.U.dispose(),
							this.S.dispose(),
							this.W.dispose(),
							this.s.dispose(),
							super.dispose(),
							(this.R = []),
							(this.ab = null),
							(this.bb = []),
							(this.cb = null),
							(this.eb = []);
					}
				};
				(e.$B2b = I),
					(e.$B2b = I =
						Ne([j(7, u.$fMb), j(8, r.$gj), j(9, f.$Li), j(10, s.$d6)], I));
				class T extends E.$1c {
					constructor(L) {
						super(), (this.list = L);
					}
					getViewIndex(L) {
						return this.list.getViewIndex(L) ?? -1;
					}
					getViewHeight(L) {
						return this.list.viewModel ? this.list.elementHeight(L) : -1;
					}
					getCellRangeFromViewRange(L, D) {
						if (!this.list.viewModel) return;
						const M = this.list.getModelIndex2(L);
						if (M === void 0)
							throw new Error(`startIndex ${L} out of boundary`);
						if (D >= this.list.length) {
							const N = this.list.viewModel.length;
							return { start: M, end: N };
						} else {
							const N = this.list.getModelIndex2(D);
							if (N === void 0)
								throw new Error(`endIndex ${D} out of boundary`);
							return { start: M, end: N };
						}
					}
					getCellsFromViewRange(L, D) {
						if (!this.list.viewModel) return [];
						const M = this.getCellRangeFromViewRange(L, D);
						return M ? this.list.viewModel.getCellsInRange(M) : [];
					}
					getCellsInRange(L) {
						return this.list.viewModel?.getCellsInRange(L) ?? [];
					}
					getVisibleRangesPlusViewportAboveAndBelow() {
						return this.list?.getVisibleRangesPlusViewportAboveAndBelow() ?? [];
					}
				}
				e.$C2b = T;
				function P(k) {
					return new Promise((L, D) => {
						w.Event.once(k.onDidChangeEditorAttachState)(() =>
							k.editorAttached ? L() : D(),
						);
					});
				}
			},
		),
		define(
			de[1963],
			he([
				1, 0, 7, 24, 15, 76, 6, 266, 23, 82, 54, 12, 19, 9, 47, 74, 61, 913,
				597, 4, 11, 10, 8, 49, 57, 22, 41, 21, 32, 51, 35, 25, 174, 108, 1962,
				3103, 3104, 855, 70, 557, 161, 355, 1274, 1784, 66, 78, 165,
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
			) {
				"use strict";
				var J;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$X2b = void 0),
					(u = mt(u)),
					(n = mt(n)),
					(b = mt(b));
				const W = /:([\d]+)(?::([\d]+))?$/,
					X = /line=(\d+)$/,
					Y = /^(.*)#([^#]*)$/;
				let ie = class extends L.$pP {
					static {
						J = this;
					}
					static b(Q) {
						return (
							(this.a ??= new x.$5Ib("notebook.backlayerWebview.origins", Q)),
							this.a
						);
					}
					constructor(
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
						be,
						Ce,
						Le,
						Fe,
						Oe,
						xe,
						He,
						Ke,
						Je,
						Te,
					) {
						super(Je),
							(this.notebookEditor = Q),
							(this.F = Z),
							(this.notebookViewType = se),
							(this.documentUri = re),
							(this.G = le),
							(this.H = oe),
							(this.I = ae),
							(this.J = pe),
							(this.L = $e),
							(this.M = ye),
							(this.N = ue),
							(this.O = fe),
							(this.P = me),
							(this.Q = ve),
							(this.R = ge),
							(this.S = be),
							(this.U = Ce),
							(this.W = Le),
							(this.X = Fe),
							(this.Y = Oe),
							(this.Z = xe),
							(this.$ = He),
							(this.ab = Ke),
							(this.bb = Te),
							(this.webview = void 0),
							(this.insetMapping = new Map()),
							(this.pendingWebviewIdleCreationRequest = new Map()),
							(this.pendingWebviewIdleInsetMapping = new Map()),
							(this.c = new Map()),
							(this.markupPreviewMapping = new Map()),
							(this.f = new Set()),
							(this.g = new Map()),
							(this.j = void 0),
							(this.m = this.D(new C.$re())),
							(this.r = new Set()),
							(this.onMessage = this.m.event),
							(this.s = !1),
							(this.u = !0),
							(this.C = n.$9g()),
							this.cb("Creating backlayer webview for notebook"),
							(this.element = document.createElement("div")),
							(this.element.style.height = "1400px"),
							(this.element.style.position = "absolute"),
							oe &&
								(this.D(oe),
								(oe.receiveMessageHandler = (Ee, Ie) =>
									!this.webview || this.s
										? Promise.resolve(!1)
										: (this.Eb({
												__vscode_notebook_message: !0,
												type: "customRendererMessage",
												rendererId: Ee,
												message: Ie,
											}),
											Promise.resolve(!0)))),
							this.D(
								be.onDidChangeTrust((Ee) => {
									const Ie = this.jb(this.lb(), void 0),
										Be = this.gb(Ie.toString());
									this.webview?.setHtml(Be);
								}),
							),
							this.D(
								g.$lM.onDidChange(() => {
									this.Eb({ type: "tokenizedStylesChanged", css: ee() });
								}),
							);
					}
					updateOptions(Q) {
						(this.G = Q), this.db(), this.eb();
					}
					cb(Q) {
						this.ab.debug(
							"BacklayerWebview",
							`${this.documentUri} (${this.F}) - ${Q}`,
						);
					}
					db() {
						this.Eb({ type: "notebookStyles", styles: this.fb() });
					}
					eb() {
						this.Eb({
							type: "notebookOptions",
							options: { dragAndDropEnabled: this.G.dragAndDropEnabled },
							renderOptions: {
								lineLimit: this.G.outputLineLimit,
								outputScrolling: this.G.outputScrolling,
								outputWordWrap: this.G.outputWordWrap,
								linkifyFilePaths: this.G.outputLinkifyFilePaths,
								minimalError: this.G.minimalError,
							},
						});
					}
					fb() {
						return {
							"notebook-output-left-margin": `${this.G.leftMargin + this.G.runGutter}px`,
							"notebook-output-width": `calc(100% - ${this.G.leftMargin + this.G.rightMargin + this.G.runGutter}px)`,
							"notebook-output-node-padding": `${this.G.outputNodePadding}px`,
							"notebook-run-gutter": `${this.G.runGutter}px`,
							"notebook-preview-node-padding": `${this.G.previewNodePadding}px`,
							"notebook-markdown-left-margin": `${this.G.markdownLeftMargin}px`,
							"notebook-output-node-left-padding": `${this.G.outputNodeLeftPadding}px`,
							"notebook-markdown-min-height": `${this.G.previewNodePadding * 2}px`,
							"notebook-markup-font-size":
								typeof this.G.markupFontSize == "number" &&
								this.G.markupFontSize > 0
									? `${this.G.markupFontSize}px`
									: `calc(${this.G.fontSize}px * 1.2)`,
							"notebook-markdown-line-height":
								typeof this.G.markdownLineHeight == "number" &&
								this.G.markdownLineHeight > 0
									? `${this.G.markdownLineHeight}px`
									: "normal",
							"notebook-cell-output-font-size": `${this.G.outputFontSize || this.G.fontSize}px`,
							"notebook-cell-output-line-height": `${this.G.outputLineHeight}px`,
							"notebook-cell-output-max-height": `${this.G.outputLineHeight * this.G.outputLineLimit + 2}px`,
							"notebook-cell-output-font-family":
								this.G.outputFontFamily || this.G.fontFamily,
							"notebook-cell-markup-empty-content": b.localize(8210, null),
							"notebook-cell-renderer-not-found-error": b.localize(8211, null),
							"notebook-cell-renderer-fallbacks-exhausted": b.localize(
								8212,
								null,
							),
						};
					}
					gb(Q) {
						const Z = this.hb(),
							se = this.ib(),
							re = {
								lineLimit: this.G.outputLineLimit,
								outputScrolling: this.G.outputScrolling,
								outputWordWrap: this.G.outputWordWrap,
								linkifyFilePaths: this.G.outputLinkifyFilePaths,
								minimalError: this.G.minimalError,
							},
							le = (0, R.$N2b)(
								{ ...this.G, tokenizationCss: ee() },
								{ dragAndDropEnabled: this.G.dragAndDropEnabled },
								re,
								Z,
								se,
								this.S.isWorkspaceTrusted(),
								this.C,
							),
							oe = this.U.getValue("notebook.experimental.enableCsp"),
							ae = this.w(k.$wQ),
							pe = this.w(k.$yQ);
						return `
		<html lang="en">
			<head>
				<meta charset="UTF-8">
				<base href="${Q}/" />
				${
					oe
						? `<meta http-equiv="Content-Security-Policy" content="
					default-src 'none';
					script-src ${q.$U2b} 'unsafe-inline' 'unsafe-eval';
					style-src ${q.$U2b} 'unsafe-inline';
					img-src ${q.$U2b} https: http: data:;
					font-src ${q.$U2b} https:;
					connect-src https:;
					child-src https: data:;
				">`
						: ""
				}
				<style nonce="${this.C}">
					::highlight(find-highlight) {
						background-color: var(--vscode-editor-findMatchBackground, ${pe});
					}

					::highlight(current-find-highlight) {
						background-color: var(--vscode-editor-findMatchHighlightBackground, ${ae});
					}

					#container .cell_container {
						width: 100%;
					}

					#container .output_container {
						width: 100%;
					}

					#container > div > div > div.output {
						font-size: var(--notebook-cell-output-font-size);
						width: var(--notebook-output-width);
						margin-left: var(--notebook-output-left-margin);
						background-color: var(--theme-notebook-output-background);
						padding-top: var(--notebook-output-node-padding);
						padding-right: var(--notebook-output-node-padding);
						padding-bottom: var(--notebook-output-node-padding);
						padding-left: var(--notebook-output-node-left-padding);
						box-sizing: border-box;
						border-top: none;
					}

					/* markdown */
					#container div.preview {
						width: 100%;
						padding-right: var(--notebook-preview-node-padding);
						padding-left: var(--notebook-markdown-left-margin);
						padding-top: var(--notebook-preview-node-padding);
						padding-bottom: var(--notebook-preview-node-padding);

						box-sizing: border-box;
						white-space: nowrap;
						overflow: hidden;
						white-space: initial;

						font-size: var(--notebook-markup-font-size);
						line-height: var(--notebook-markdown-line-height);
						color: var(--theme-ui-foreground);
					}

					#container div.preview.draggable {
						user-select: none;
						-webkit-user-select: none;
						-ms-user-select: none;
						cursor: grab;
					}

					#container div.preview.selected {
						background: var(--theme-notebook-cell-selected-background);
					}

					#container div.preview.dragging {
						background-color: var(--theme-background);
						opacity: 0.5 !important;
					}

					.monaco-workbench.vs-dark .notebookOverlay .cell.markdown .latex img,
					.monaco-workbench.vs-dark .notebookOverlay .cell.markdown .latex-block img {
						filter: brightness(0) invert(1)
					}

					#container .markup > div.nb-symbolHighlight {
						background-color: var(--theme-notebook-symbol-highlight-background);
					}

					#container .nb-symbolHighlight .output_container .output {
						background-color: var(--theme-notebook-symbol-highlight-background);
					}

					#container .markup > div.nb-multiCellHighlight {
						background-color: var(--theme-notebook-symbol-highlight-background);
					}

					#container .nb-multiCellHighlight .output_container .output {
						background-color: var(--theme-notebook-symbol-highlight-background);
					}

					#container .nb-chatGenerationHighlight .output_container .output {
						background-color: var(--vscode-notebook-selectedCellBackground);
					}

					#container > div.nb-cellDeleted .output_container {
						background-color: var(--theme-notebook-diff-removed-background);
					}

					#container > div.nb-cellAdded .output_container {
						background-color: var(--theme-notebook-diff-inserted-background);
					}

					#container > div > div:not(.preview) > div {
						overflow-x: auto;
					}

					#container .no-renderer-error {
						color: var(--vscode-editorError-foreground);
					}

					body {
						padding: 0px;
						height: 100%;
						width: 100%;
					}

					table, thead, tr, th, td, tbody {
						border: none;
						border-color: transparent;
						border-spacing: 0;
						border-collapse: collapse;
					}

					table, th, tr {
						vertical-align: middle;
						text-align: right;
					}

					thead {
						font-weight: bold;
						background-color: rgba(130, 130, 130, 0.16);
					}

					th, td {
						padding: 4px 8px;
					}

					tr:nth-child(even) {
						background-color: rgba(130, 130, 130, 0.08);
					}

					tbody th {
						font-weight: normal;
					}

					.find-match {
						background-color: var(--vscode-editor-findMatchHighlightBackground);
					}

					.current-find-match {
						background-color: var(--vscode-editor-findMatchBackground);
					}

					#_defaultColorPalatte {
						color: var(--vscode-editor-findMatchHighlightBackground);
						background-color: var(--vscode-editor-findMatchBackground);
					}
				</style>
			</head>
			<body style="overflow: hidden;">
				<div id='findStart' tabIndex=-1></div>
				<div id='container' class="widgetarea" style="position: absolute;width:100%;top: 0px"></div>
				<div id="_defaultColorPalatte"></div>
				<script type="module">${le}</script>
			</body>
		</html>`;
					}
					hb() {
						return this.L.getRenderers().map((Q) => {
							const Z = {
								extends: Q.entrypoint.extends,
								path: this.jb(
									Q.entrypoint.path,
									Q.extensionLocation,
								).toString(),
							};
							return {
								id: Q.id,
								entrypoint: Z,
								mimeTypes: Q.mimeTypes,
								messaging: Q.messaging !== U.RendererMessagingSpec.Never,
								isBuiltin: Q.isBuiltin,
							};
						});
					}
					ib() {
						return Array.from(
							this.L.getStaticPreloads(this.notebookViewType),
							(Q) => ({
								entrypoint: this.jb(Q.entrypoint, Q.extensionLocation)
									.toString()
									.toString(),
							}),
						);
					}
					jb(Q, Z) {
						return (0, q.$V2b)(
							Q,
							Z?.scheme === m.Schemas.vscodeRemote
								? { isRemote: !0, authority: Z.authority }
								: void 0,
						);
					}
					postKernelMessage(Q) {
						this.Eb({
							__vscode_notebook_message: !0,
							type: "customKernelMessage",
							message: Q,
						});
					}
					kb(Q) {
						const Z = this.g.get(Q);
						return Z
							? { cellInfo: this.insetMapping.get(Z).cellInfo, output: Z }
							: void 0;
					}
					isResolved() {
						return !!this.webview;
					}
					createWebview(Q) {
						const Z = this.jb(this.lb(), void 0),
							se = this.gb(Z.toString());
						return this.nb(se, Q);
					}
					lb() {
						if (this.documentUri.scheme === m.Schemas.untitled) {
							const Q = this.X.getWorkspaceFolder(this.documentUri);
							if (Q) return Q.uri;
							const Z = this.X.getWorkspace().folders;
							if (Z.length) return Z[0].uri;
						}
						return (0, h.$mh)(this.documentUri);
					}
					mb() {
						return this.documentUri.path.toLowerCase().endsWith(".ipynb")
							? a.$r
								? []
								: [(0, h.$mh)(m.$7g.asFileUri("vs/loader.js"))]
							: [];
					}
					nb(Q, Z) {
						if (
							!(0, t.getWindow)(this.element).document.body.contains(
								this.element,
							)
						)
							throw new Error("Element is already detached from the DOM tree");
						(this.webview = this.ub(this.I, Q)),
							this.webview.mountTo(this.element, Z),
							this.D(this.webview),
							this.D(new H.$R2b(Z, () => this.webview));
						const se = new w.$0h();
						return (
							this.D(
								this.webview.onFatalError((re) => {
									se.error(
										new Error(`Could not initialize webview: ${re.message}}`),
									);
								}),
							),
							this.D(
								this.webview.onMessage(async (re) => {
									const le = re.message;
									if (!this.s && le.__vscode_notebook_message)
										switch (le.type) {
											case "initialized": {
												se.complete(), this.wb();
												break;
											}
											case "initializedMarkup": {
												this.z?.requestId === le.requestId &&
													(this.z?.p.complete(), (this.z = void 0));
												break;
											}
											case "dimension": {
												for (const oe of le.updates) {
													const ae = oe.height;
													if (oe.isOutput) {
														const pe = this.kb(oe.id);
														if (pe) {
															const { cellInfo: $e, output: ye } = pe;
															this.notebookEditor.updateOutputHeight(
																$e,
																ye,
																ae,
																!!oe.init,
																"webview#dimension",
															),
																this.notebookEditor.scheduleOutputHeightAck(
																	$e,
																	oe.id,
																	ae,
																);
														} else if (oe.init) {
															const $e = this.c.get(oe.id);
															if ($e) {
																const ye =
																	this.pendingWebviewIdleInsetMapping.get($e);
																this.pendingWebviewIdleCreationRequest.delete(
																	$e,
																),
																	this.pendingWebviewIdleCreationRequest.delete(
																		$e,
																	);
																const ue = ye.cellInfo;
																this.g.set(oe.id, $e),
																	this.insetMapping.set($e, ye),
																	this.notebookEditor.updateOutputHeight(
																		ue,
																		$e,
																		ae,
																		!!oe.init,
																		"webview#dimension",
																	),
																	this.notebookEditor.scheduleOutputHeightAck(
																		ue,
																		oe.id,
																		ae,
																	);
															}
															this.c.delete(oe.id);
														}
														{
															if (!oe.init) continue;
															const $e = this.g.get(oe.id);
															if (!$e) continue;
															const ye = this.insetMapping.get($e);
															ye.initialized = !0;
														}
													} else
														this.notebookEditor.updateMarkupCellHeight(
															oe.id,
															ae,
															!!oe.init,
														);
												}
												break;
											}
											case "mouseenter": {
												const oe = this.kb(le.id);
												if (oe) {
													const ae = this.notebookEditor.getCellByInfo(
														oe.cellInfo,
													);
													ae && (ae.outputIsHovered = !0);
												}
												break;
											}
											case "mouseleave": {
												const oe = this.kb(le.id);
												if (oe) {
													const ae = this.notebookEditor.getCellByInfo(
														oe.cellInfo,
													);
													ae && (ae.outputIsHovered = !1);
												}
												break;
											}
											case "outputFocus": {
												const oe = this.kb(le.id);
												if (oe) {
													const ae = this.notebookEditor.getCellByInfo(
														oe.cellInfo,
													);
													ae &&
														((ae.outputIsFocused = !0),
														this.notebookEditor.focusNotebookCell(
															ae,
															"output",
															{
																outputId: oe.output.model.outputId,
																skipReveal: !0,
																outputWebviewFocused: !0,
															},
														));
												}
												break;
											}
											case "outputBlur": {
												const oe = this.kb(le.id);
												if (oe) {
													const ae = this.notebookEditor.getCellByInfo(
														oe.cellInfo,
													);
													ae &&
														((ae.outputIsFocused = !1),
														(ae.inputInOutputIsFocused = !1));
												}
												break;
											}
											case "scroll-ack":
												break;
											case "scroll-to-reveal": {
												this.notebookEditor.setScrollTop(le.scrollTop - A.$A2b);
												break;
											}
											case "did-scroll-wheel": {
												this.notebookEditor.triggerScroll({
													...le.payload,
													preventDefault: () => {},
													stopPropagation: () => {},
												});
												break;
											}
											case "focus-editor": {
												const oe = this.notebookEditor.getCellById(le.cellId);
												oe &&
													(le.focusNext
														? this.notebookEditor.focusNextNotebookCell(
																oe,
																"editor",
															)
														: await this.notebookEditor.focusNotebookCell(
																oe,
																"editor",
															));
												break;
											}
											case "clicked-data-url": {
												this.tb(le);
												break;
											}
											case "clicked-link": {
												if ((0, m.$Vg)(le.href, m.Schemas.command)) {
													const oe = c.URI.parse(le.href);
													if (oe.path === "workbench.action.openLargeOutput") {
														const pe = oe.query,
															$e = this.Y.activeGroup;
														$e &&
															$e.activeEditor &&
															$e.pinEditor($e.activeEditor),
															this.J.open(
																U.CellUri.generateCellOutputUri(
																	this.documentUri,
																	pe,
																),
															);
														return;
													}
													if (oe.path === "cellOutput.enableScrolling") {
														const pe = oe.query,
															$e = this.g.get(pe);
														$e &&
															(this.bb.publicLog2("workbenchActionExecuted", {
																id: "notebook.cell.toggleOutputScrolling",
																from: "inlineLink",
															}),
															$e.cellViewModel.outputsViewModels.forEach(
																(ye) => {
																	ye.model.metadata &&
																		((ye.model.metadata.scrollable = !0),
																		ye.resetRenderer());
																},
															));
														return;
													}
													this.J.open(le.href, {
														fromUserGesture: !0,
														fromWorkspace: !0,
														allowCommands: !1
															? !0
															: [
																	"github-issues.authNow",
																	"workbench.extensions.search",
																	"workbench.action.openSettings",
																	"_notebook.selectKernel",
																	"jupyter.viewOutput",
																],
													});
													return;
												}
												if (
													(0, m.$Wg)(
														le.href,
														m.Schemas.http,
														m.Schemas.https,
														m.Schemas.mailto,
													)
												)
													this.J.open(le.href, {
														fromUserGesture: !0,
														fromWorkspace: !0,
													});
												else if (
													(0, m.$Vg)(le.href, m.Schemas.vscodeNotebookCell)
												) {
													const oe = c.URI.parse(le.href);
													await this.pb(oe);
												} else
													/^[\w\-]+:/.test(le.href)
														? u.$nc(le.href)
															? this.rb(c.URI.file(le.href))
															: this.rb(c.URI.parse(le.href))
														: await this.qb(_(le.href));
												break;
											}
											case "customKernelMessage": {
												this.m.fire({ message: le.message });
												break;
											}
											case "customRendererMessage": {
												this.H?.postMessage(le.rendererId, le.message);
												break;
											}
											case "clickMarkupCell": {
												const oe = this.notebookEditor.getCellById(le.cellId);
												oe &&
													(le.shiftKey || (a.$m ? le.metaKey : le.ctrlKey)
														? this.notebookEditor.toggleNotebookCellSelection(
																oe,
																le.shiftKey,
															)
														: await this.notebookEditor.focusNotebookCell(
																oe,
																"container",
																{ skipReveal: !0 },
															));
												break;
											}
											case "contextMenuMarkupCell": {
												const oe = this.notebookEditor.getCellById(le.cellId);
												if (oe) {
													await this.notebookEditor.focusNotebookCell(
														oe,
														"container",
														{ skipReveal: !0 },
													);
													const ae = this.element.getBoundingClientRect();
													this.Q.showContextMenu({
														menuId: s.$XX.NotebookCellTitle,
														contextKeyService: this.R,
														getAnchor: () => ({
															x: ae.x + le.clientX,
															y: ae.y + le.clientY,
														}),
													});
												}
												break;
											}
											case "toggleMarkupPreview": {
												const oe = this.notebookEditor.getCellById(le.cellId);
												oe &&
													!this.notebookEditor.creationOptions.isReadOnly &&
													(this.notebookEditor.setMarkupCellEditState(
														le.cellId,
														N.CellEditState.Editing,
													),
													await this.notebookEditor.focusNotebookCell(
														oe,
														"editor",
														{ skipReveal: !0 },
													));
												break;
											}
											case "mouseEnterMarkupCell": {
												const oe = this.notebookEditor.getCellById(le.cellId);
												oe instanceof B.$41b && (oe.cellIsHovered = !0);
												break;
											}
											case "mouseLeaveMarkupCell": {
												const oe = this.notebookEditor.getCellById(le.cellId);
												oe instanceof B.$41b && (oe.cellIsHovered = !1);
												break;
											}
											case "cell-drag-start": {
												this.notebookEditor.didStartDragMarkupCell(
													le.cellId,
													le,
												);
												break;
											}
											case "cell-drag": {
												this.notebookEditor.didDragMarkupCell(le.cellId, le);
												break;
											}
											case "cell-drop": {
												this.notebookEditor.didDropMarkupCell(le.cellId, {
													dragOffsetY: le.dragOffsetY,
													ctrlKey: le.ctrlKey,
													altKey: le.altKey,
												});
												break;
											}
											case "cell-drag-end": {
												this.notebookEditor.didEndDragMarkupCell(le.cellId);
												break;
											}
											case "renderedMarkup": {
												const oe = this.notebookEditor.getCellById(le.cellId);
												oe instanceof B.$41b && (oe.renderedHtml = le.html),
													this.sb(le.codeBlocks);
												break;
											}
											case "renderedCellOutput": {
												this.sb(le.codeBlocks);
												break;
											}
											case "outputResized": {
												this.notebookEditor.didResizeOutput(le.cellId);
												break;
											}
											case "getOutputItem": {
												const ae = this.kb(
													le.outputId,
												)?.output.model.outputs.find(
													(pe) => pe.mime === le.mime,
												);
												this.Eb({
													type: "returnOutputItem",
													requestId: le.requestId,
													output: ae
														? { mime: ae.mime, valueBytes: ae.data.buffer }
														: void 0,
												});
												break;
											}
											case "logRendererDebugMessage": {
												this.cb(
													`${le.message}${le.data ? " " + JSON.stringify(le.data, null, 4) : ""}`,
												);
												break;
											}
											case "notebookPerformanceMessage": {
												this.notebookEditor.updatePerformanceMetadata(
													le.cellId,
													le.executionId,
													le.duration,
													le.rendererId,
												),
													le.mimeType &&
														le.outputSize &&
														le.rendererId === "vscode.builtin-renderer" &&
														this.ob(le.mimeType, le.outputSize, le.duration);
												break;
											}
											case "outputInputFocus": {
												const oe = this.kb(le.id);
												if (oe) {
													const ae = this.notebookEditor.getCellByInfo(
														oe.cellInfo,
													);
													ae && (ae.inputInOutputIsFocused = le.inputFocused);
												}
												this.notebookEditor.didFocusOutputInputChange(
													le.inputFocused,
												);
											}
										}
								}),
							),
							se.p
						);
					}
					ob(Q, Z, se) {
						const re = { mimeType: Q, outputSize: Z, renderTime: se };
						this.bb.publicLog2("NotebookCellOutputRender", re);
					}
					pb(Q) {
						const Z = Q.path.length > 0 ? Q : this.documentUri,
							se = /(?:^|&)line=([^&]+)/.exec(Q.query);
						let re;
						if (se) {
							const ae = parseInt(se[1], 10);
							isNaN(ae) ||
								(re = { selection: { startLineNumber: ae, startColumn: 1 } });
						}
						const le = /(?:^|&)execution_count=([^&]+)/.exec(Q.query);
						if (le) {
							const ae = parseInt(le[1], 10);
							if (!isNaN(ae)) {
								const $e = this.L.getNotebookTextModel(Z)
									?.cells.slice()
									.reverse()
									.find((ye) => ye.internalMetadata.executionOrder === ae);
								if ($e?.uri)
									return this.J.open($e.uri, {
										fromUserGesture: !0,
										fromWorkspace: !0,
										editorOptions: re,
									});
							}
						}
						const oe = /\?line=(\d+)$/.exec(Q.fragment);
						if (oe) {
							const ae = parseInt(oe[1], 10);
							if (!isNaN(ae)) {
								const pe = ae + 1,
									$e = Q.fragment.substring(0, oe.index),
									ye = {
										selection: {
											startLineNumber: pe,
											startColumn: 1,
											endLineNumber: pe,
											endColumn: 1,
										},
									};
								return this.J.open(Z.with({ fragment: $e }), {
									fromUserGesture: !0,
									fromWorkspace: !0,
									editorOptions: ye,
								});
							}
						}
						return this.J.open(Z, { fromUserGesture: !0, fromWorkspace: !0 });
					}
					async qb(Q) {
						let Z, se;
						const re = Y.exec(Q);
						if ((re && ((Q = re[1]), (se = re[2])), Q.startsWith("/"))) {
							Z = await this.$.fileURI(Q);
							const le = this.X.getWorkspace().folders;
							le.length &&
								(Z = Z.with({
									scheme: le[0].uri.scheme,
									authority: le[0].uri.authority,
								}));
						} else if (Q.startsWith("~")) {
							const le = await this.$.userHome();
							le && (Z = c.URI.joinPath(le, Q.substring(2)));
						} else if (this.documentUri.scheme === m.Schemas.untitled) {
							const le = this.X.getWorkspace().folders;
							if (!le.length) return;
							Z = c.URI.joinPath(le[0].uri, Q);
						} else Z = c.URI.joinPath((0, h.$mh)(this.documentUri), Q);
						Z && (se && (Z = Z.with({ fragment: se })), this.rb(Z));
					}
					rb(Q) {
						let Z, se;
						const re = W.exec(Q.path);
						re &&
							((Q = Q.with({
								path: Q.path.slice(0, re.index),
								fragment: `L${re[0].slice(1)}`,
							})),
							(Z = parseInt(re[1], 10)),
							(se = parseInt(re[2], 10)));
						const le = X.exec(Q.query);
						if (le) {
							const ae = parseInt(le[1], 10);
							isNaN(ae) ||
								((Z = ae + 1), (se = 1), (Q = Q.with({ fragment: `L${Z}` })));
						}
						Q = Q.with({ query: null });
						let oe;
						for (const ae of this.Y.groups) {
							const pe = ae.editors.find(
								($e) => $e.resource && (0, h.$gh)($e.resource, Q, !0),
							);
							if (pe) {
								oe = { group: ae, editor: pe };
								break;
							}
						}
						if (oe) {
							const ae =
									Z !== void 0 && se !== void 0
										? { startLineNumber: Z, startColumn: se }
										: void 0,
								pe = { selection: ae };
							oe.group.openEditor(oe.editor, ae ? pe : void 0);
						} else this.J.open(Q, { fromUserGesture: !0, fromWorkspace: !0 });
					}
					sb(Q) {
						for (const { id: Z, value: se, lang: re } of Q) {
							const le = this.W.getLanguageIdByLanguageName(re);
							le &&
								(0, f.$cwb)(this.W, se, le).then((oe) => {
									this.s ||
										this.Eb({
											type: "tokenizedCodeBlock",
											html: oe,
											codeBlockId: Z,
										});
								});
						}
					}
					async tb(Q) {
						if (typeof Q.data != "string") return;
						const [Z, se] = Q.data.split(";base64,");
						if (!se || !Z) return;
						const re =
							(0, h.$lh)(this.documentUri) === ".interactive"
								? (this.X.getWorkspace().folders[0]?.uri ??
									(await this.O.defaultFilePath()))
								: (0, h.$mh)(this.documentUri);
						let le;
						if (Q.downloadName) le = Q.downloadName;
						else {
							const $e = Z.replace(/^data:/, ""),
								ye = $e && (0, d.$HK)($e);
							le = ye ? `download${ye}` : "download";
						}
						const oe = (0, h.$nh)(re, le),
							ae = await this.O.showSaveDialog({ defaultUri: oe });
						if (!ae) return;
						const pe = (0, E.$af)(se);
						await this.P.writeFile(ae, pe), await this.J.open(ae);
					}
					ub(Q, Z) {
						this.j = this.vb();
						const se = Q.createWebviewElement({
							origin: J.b(this.Z).getOrigin(this.notebookViewType, void 0),
							title: b.localize(8213, null),
							options: {
								purpose: x.WebviewContentPurpose.NotebookRenderer,
								enableFindWidget: !1,
								transformCssVariables: O.$O2b,
							},
							contentOptions: {
								allowMultipleAPIAcquire: !0,
								allowScripts: !0,
								localResourceRoots: this.j,
							},
							extension: void 0,
							providedViewType: "notebook.output",
						});
						return se.setHtml(Z), se.setContextKeyService(this.R), se;
					}
					vb() {
						const Q = this.M.getWorkspace().folders.map((se) => se.uri),
							Z = this.lb();
						return [
							this.L.getNotebookProviderResourceRoots(),
							this.L.getRenderers().map((se) => (0, h.$mh)(se.entrypoint.path)),
							...Array.from(
								this.L.getStaticPreloads(this.notebookViewType),
								(se) => [(0, h.$mh)(se.entrypoint), ...se.localResourceRoots],
							),
							Q,
							Z,
							this.mb(),
						].flat();
					}
					wb() {
						this.r.clear(), this.t && this.Cb(this.t);
						for (const [Q, Z] of this.insetMapping.entries())
							this.Eb({ ...Z.cachedCreation, initiallyHidden: this.f.has(Q) });
						if (!this.z?.isFirstInit) {
							const Q = [...this.markupPreviewMapping.values()];
							this.markupPreviewMapping.clear(), this.initializeMarkup(Q);
						}
						this.db(), this.eb();
					}
					xb(Q, Z, se, re) {
						if (this.s || ("isOutputCollapsed" in Q && Q.isOutputCollapsed))
							return !1;
						if (this.f.has(Z)) return !0;
						const le = this.insetMapping.get(Z);
						return !(
							!le ||
							(re === le.cachedCreation.outputOffset &&
								se === le.cachedCreation.cellTop)
						);
					}
					ackHeight(Q) {
						this.Eb({ type: "ack-dimension", updates: Q });
					}
					updateScrollTops(Q, Z) {
						if (this.s) return;
						const se = (0, i.$Lb)(
							Q.map((re) => {
								const le = this.insetMapping.get(re.output);
								if (
									!le ||
									(!re.forceDisplay &&
										!this.xb(re.cell, re.output, re.cellTop, re.outputOffset))
								)
									return;
								const oe = le.outputId;
								return (
									(le.cachedCreation.cellTop = re.cellTop),
									(le.cachedCreation.outputOffset = re.outputOffset),
									this.f.delete(re.output),
									{
										cellId: re.cell.id,
										outputId: oe,
										cellTop: re.cellTop,
										outputOffset: re.outputOffset,
										forceDisplay: re.forceDisplay,
									}
								);
							}),
						);
						(!se.length && !Z.length) ||
							this.Eb({ type: "view-scroll", widgets: se, markupCells: Z });
					}
					async yb(Q) {
						if (!this.s) {
							if (this.markupPreviewMapping.has(Q.cellId)) {
								console.error(
									"Trying to create markup preview that already exists",
								);
								return;
							}
							this.markupPreviewMapping.set(Q.cellId, Q),
								this.Eb({ type: "createMarkupCell", cell: Q });
						}
					}
					async showMarkupPreview(Q) {
						if (this.s) return;
						const Z = this.markupPreviewMapping.get(Q.cellId);
						if (!Z) return this.yb(Q);
						const se = Q.content === Z.content,
							re = (0, r.$zo)(Q.metadata, Z.metadata);
						(!se || !re || !Z.visible) &&
							this.Eb({
								type: "showMarkupCell",
								id: Q.cellId,
								handle: Q.cellHandle,
								content: se ? void 0 : Q.content,
								top: Q.offset,
								metadata: re ? void 0 : Q.metadata,
							}),
							(Z.metadata = Q.metadata),
							(Z.content = Q.content),
							(Z.offset = Q.offset),
							(Z.visible = !0);
					}
					async hideMarkupPreviews(Q) {
						if (this.s) return;
						const Z = [];
						for (const se of Q) {
							const re = this.markupPreviewMapping.get(se);
							re && re.visible && (Z.push(se), (re.visible = !1));
						}
						Z.length && this.Eb({ type: "hideMarkupCells", ids: Z });
					}
					async unhideMarkupPreviews(Q) {
						if (this.s) return;
						const Z = [];
						for (const se of Q) {
							const re = this.markupPreviewMapping.get(se);
							re
								? re.visible || ((re.visible = !0), Z.push(se))
								: console.error(
										`Trying to unhide a preview that does not exist: ${se}`,
									);
						}
						this.Eb({ type: "unhideMarkupCells", ids: Z });
					}
					async deleteMarkupPreviews(Q) {
						if (!this.s) {
							for (const Z of Q)
								this.markupPreviewMapping.has(Z) ||
									console.error(
										`Trying to delete a preview that does not exist: ${Z}`,
									),
									this.markupPreviewMapping.delete(Z);
							Q.length && this.Eb({ type: "deleteMarkupCell", ids: Q });
						}
					}
					async updateMarkupPreviewSelections(Q) {
						this.s ||
							this.Eb({
								type: "updateSelectedMarkupCells",
								selectedCellIds: Q.filter((Z) =>
									this.markupPreviewMapping.has(Z),
								),
							});
					}
					async initializeMarkup(Q) {
						if (this.s) return;
						this.z?.p.complete();
						const Z = n.$9g();
						(this.z = { p: new w.$0h(), requestId: Z, isFirstInit: this.u }),
							(this.u = !1);
						for (const se of Q) this.markupPreviewMapping.set(se.cellId, se);
						return (
							this.Eb({ type: "initializeMarkup", cells: Q, requestId: Z }),
							this.z.p.p
						);
					}
					zb(Q, Z) {
						return Z.type === N.RenderOutputType.Extension
							? Q.renderer?.id === Z.renderer.id
							: Q.cachedCreation.type === "html";
					}
					requestCreateOutputWhenWebviewIdle(Q, Z, se, re) {
						this.s ||
							this.insetMapping.has(Z.source) ||
							this.pendingWebviewIdleCreationRequest.has(Z.source) ||
							this.pendingWebviewIdleInsetMapping.has(Z.source) ||
							this.pendingWebviewIdleCreationRequest.set(
								Z.source,
								(0, w.$3h)(() => {
									const {
										message: le,
										renderer: oe,
										transfer: ae,
									} = this.Bb(Q, Z, se, re, !0, !0);
									this.Eb(le, ae),
										this.pendingWebviewIdleInsetMapping.set(Z.source, {
											outputId: le.outputId,
											versionId: Z.source.model.versionId,
											cellInfo: Q,
											renderer: oe,
											cachedCreation: le,
										}),
										this.c.set(le.outputId, Z.source),
										this.pendingWebviewIdleCreationRequest.delete(Z.source);
								}),
							);
					}
					createOutput(Q, Z, se, re) {
						if (this.s) return;
						const le = this.insetMapping.get(Z.source);
						if (
							(this.pendingWebviewIdleCreationRequest.get(Z.source)?.dispose(),
							this.pendingWebviewIdleCreationRequest.delete(Z.source),
							this.pendingWebviewIdleInsetMapping.delete(Z.source),
							le && this.c.delete(le.outputId),
							le && this.zb(le, Z))
						) {
							this.f.delete(Z.source),
								this.Eb({
									type: "showOutput",
									cellId: le.cellInfo.cellId,
									outputId: le.outputId,
									cellTop: se,
									outputOffset: re,
								});
							return;
						}
						const {
							message: oe,
							renderer: ae,
							transfer: pe,
						} = this.Bb(Q, Z, se, re, !1, !1);
						this.Eb(oe, pe),
							this.insetMapping.set(Z.source, {
								outputId: oe.outputId,
								versionId: Z.source.model.versionId,
								cellInfo: Q,
								renderer: ae,
								cachedCreation: oe,
							}),
							this.f.delete(Z.source),
							this.g.set(oe.outputId, Z.source);
					}
					Ab(Q, Z) {
						if (Z.startsWith("image")) {
							const se = Q.outputs.find((re) => re.mime === "text/plain")?.data
								.buffer;
							if (se?.length && se?.length > 0) {
								const re = new TextDecoder().decode(se);
								return { ...Q.metadata, vscode_altText: re };
							}
						}
						return Q.metadata;
					}
					Bb(Q, Z, se, re, le, oe) {
						const ae = {
								type: "html",
								executionId: Q.executionId,
								cellId: Q.cellId,
								cellTop: se,
								outputOffset: re,
								left: 0,
								requiredPreloads: [],
								createOnIdle: le,
							},
							pe = [];
						let $e, ye;
						if (Z.type === N.RenderOutputType.Extension) {
							const ue = Z.source.model;
							ye = Z.renderer;
							const fe = ue.outputs.find((ge) => ge.mime === Z.mimeType),
								me = this.Ab(ue, Z.mimeType),
								ve = ne(fe.data.buffer, pe);
							$e = {
								...ae,
								outputId: ue.outputId,
								rendererId: Z.renderer.id,
								content: {
									type: N.RenderOutputType.Extension,
									outputId: ue.outputId,
									metadata: me,
									output: { mime: fe.mime, valueBytes: ve },
									allOutputs: ue.outputs.map((ge) => ({ mime: ge.mime })),
								},
								initiallyHidden: oe,
							};
						} else
							$e = {
								...ae,
								outputId: n.$9g(),
								content: { type: Z.type, htmlContent: Z.htmlContent },
								initiallyHidden: oe,
							};
						return { message: $e, renderer: ye, transfer: pe };
					}
					updateOutput(Q, Z, se, re) {
						if (this.s) return;
						if (!this.insetMapping.has(Z.source)) {
							this.createOutput(Q, Z, se, re);
							return;
						}
						const le = this.insetMapping.get(Z.source);
						if (le.versionId === Z.source.model.versionId) return;
						this.f.delete(Z.source);
						let oe;
						const ae = [];
						if (Z.type === N.RenderOutputType.Extension) {
							const pe = Z.source.model,
								$e = pe.outputs.find((me) => me.mime === Z.mimeType),
								ye = pe.appendedSinceVersion(le.versionId, Z.mimeType),
								ue = ye
									? { valueBytes: ye.buffer, previousVersion: le.versionId }
									: void 0,
								fe = ne($e.data.buffer, ae);
							oe = {
								type: N.RenderOutputType.Extension,
								outputId: le.outputId,
								metadata: pe.metadata,
								output: { mime: Z.mimeType, valueBytes: fe, appended: ue },
								allOutputs: pe.outputs.map((me) => ({ mime: me.mime })),
							};
						}
						this.Eb(
							{
								type: "showOutput",
								cellId: le.cellInfo.cellId,
								outputId: le.outputId,
								cellTop: se,
								outputOffset: re,
								content: oe,
							},
							ae,
						),
							(le.versionId = Z.source.model.versionId);
					}
					async copyImage(Q) {
						this.Eb({
							type: "copyImage",
							outputId: Q.model.outputId,
							altOutputId: Q.model.alternativeOutputId,
						});
					}
					removeInsets(Q) {
						if (!this.s)
							for (const Z of Q) {
								const se = this.insetMapping.get(Z);
								if (!se) continue;
								const re = se.outputId;
								this.Eb({
									type: "clearOutput",
									rendererId: se.cachedCreation.rendererId,
									cellUri: se.cellInfo.cellUri.toString(),
									outputId: re,
									cellId: se.cellInfo.cellId,
								}),
									this.insetMapping.delete(Z),
									this.pendingWebviewIdleCreationRequest.get(Z)?.dispose(),
									this.pendingWebviewIdleCreationRequest.delete(Z),
									this.pendingWebviewIdleInsetMapping.delete(Z),
									this.c.delete(re),
									this.g.delete(re);
							}
					}
					hideInset(Q) {
						if (this.s) return;
						const Z = this.insetMapping.get(Q);
						Z &&
							(this.f.add(Q),
							this.Eb({
								type: "hideOutput",
								outputId: Z.outputId,
								cellId: Z.cellInfo.cellId,
							}));
					}
					focusWebview() {
						this.s || this.webview?.focus();
					}
					selectOutputContents(Q) {
						if (this.s) return;
						const Z = Q.outputsViewModels.find(
								(re) => re.model.outputId === Q.focusedOutputId,
							),
							se = Z ? this.insetMapping.get(Z)?.outputId : void 0;
						this.Eb({
							type: "select-output-contents",
							cellOrOutputId: se || Q.id,
						});
					}
					selectInputContents(Q) {
						if (this.s) return;
						const Z = Q.outputsViewModels.find(
								(re) => re.model.outputId === Q.focusedOutputId,
							),
							se = Z ? this.insetMapping.get(Z)?.outputId : void 0;
						this.Eb({
							type: "select-input-contents",
							cellOrOutputId: se || Q.id,
						});
					}
					focusOutput(Q, Z, se) {
						this.s ||
							(se || this.webview?.focus(),
							this.Eb({
								type: "focus-output",
								cellOrOutputId: Q,
								alternateId: Z,
							}));
					}
					blurOutput() {
						this.s || this.Eb({ type: "blur-output" });
					}
					async find(Q, Z) {
						if (Q === "")
							return this.Eb({ type: "findStop", ownerID: Z.ownerID }), [];
						const se = new Promise((le) => {
							const oe = this.webview?.onMessage((ae) => {
								ae.message.type === "didFind" &&
									(le(ae.message.matches), oe?.dispose());
							});
						});
						return this.Eb({ type: "find", query: Q, options: Z }), await se;
					}
					findStop(Q) {
						this.Eb({ type: "findStop", ownerID: Q });
					}
					async findHighlightCurrent(Q, Z) {
						const se = new Promise((le) => {
							const oe = this.webview?.onMessage((ae) => {
								ae.message.type === "didFindHighlightCurrent" &&
									(le(ae.message.offset), oe?.dispose());
							});
						});
						return (
							this.Eb({ type: "findHighlightCurrent", index: Q, ownerID: Z }),
							await se
						);
					}
					async findUnHighlightCurrent(Q, Z) {
						this.Eb({ type: "findUnHighlightCurrent", index: Q, ownerID: Z });
					}
					deltaCellContainerClassNames(Q, Z, se) {
						this.Eb({
							type: "decorations",
							cellId: Q,
							addedClassNames: Z,
							removedClassNames: se,
						});
					}
					updateOutputRenderers() {
						if (!this.webview) return;
						const Q = this.hb();
						this.j = this.vb();
						const Z = [
							...(this.j || []),
							...(this.t ? [this.t.localResourceRoot] : []),
						];
						(this.webview.localResourcesRoot = Z),
							this.Eb({ type: "updateRenderers", rendererData: Q });
					}
					async updateKernelPreloads(Q) {
						if (this.s || Q === this.t) return;
						const Z = this.t;
						(this.t = Q),
							Z && Z.preloadUris.length > 0
								? this.webview?.reload()
								: Q && this.Cb(Q);
					}
					Cb(Q) {
						const Z = [];
						for (const se of Q.preloadUris) {
							const re =
								this.N.isExtensionDevelopment &&
								(se.scheme === "http" || se.scheme === "https")
									? se
									: this.jb(se, void 0);
							this.r.has(re.toString()) ||
								(Z.push({ uri: re.toString(), originalUri: se.toString() }),
								this.r.add(re.toString()));
						}
						Z.length && this.Db(Z);
					}
					Db(Q) {
						if (!this.webview) return;
						const Z = [
							...(this.j || []),
							...(this.t ? [this.t.localResourceRoot] : []),
						];
						(this.webview.localResourcesRoot = Z),
							this.Eb({ type: "preload", resources: Q });
					}
					Eb(Q, Z) {
						this.s || this.webview?.postMessage(Q, Z);
					}
					dispose() {
						(this.s = !0),
							this.webview?.dispose(),
							(this.webview = void 0),
							(this.notebookEditor = null),
							this.insetMapping.clear(),
							this.pendingWebviewIdleCreationRequest.clear(),
							super.dispose();
					}
				};
				(e.$X2b = ie),
					(e.$X2b =
						ie =
						J =
							Ne(
								[
									j(6, x.$3Ib),
									j(7, I.$7rb),
									j(8, F.$MIb),
									j(9, D.$Vi),
									j(10, G.$r8),
									j(11, v.$IO),
									j(12, S.$ll),
									j(13, $.$Xxb),
									j(14, y.$6j),
									j(15, M.$pO),
									j(16, l.$gj),
									j(17, p.$nM),
									j(18, D.$Vi),
									j(19, V.$EY),
									j(20, T.$lq),
									j(21, K.$I8),
									j(22, z.$P2b),
									j(23, L.$iP),
									j(24, P.$km),
								],
								ie,
							));
				function ne(te, Q) {
					if (te.byteLength === te.buffer.byteLength) return te;
					{
						const Z = new Uint8Array(te);
						return Q.push(Z.buffer), Z;
					}
				}
				function ee() {
					const te = g.$lM.getColorMap();
					return te ? (0, o.$M2b)(te) : "";
				}
				function _(te) {
					try {
						return decodeURIComponent(te);
					} catch {
						return te;
					}
				}
			},
		),
		define(
			de[4097],
			he([
				1, 0, 345, 7, 194, 3, 206, 463, 71, 172, 4, 11, 10, 8, 49, 5, 128, 39,
				40, 294, 3100, 3773, 1961, 3095, 1848, 3096, 836, 4094, 3097, 3474,
				3475, 4095, 3098, 4096, 3480, 3101, 3498, 3499, 3500, 70, 190,
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
			) {
				"use strict";
				var x, H;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$a4b = e.$_3b = e.$$3b = void 0),
					(i = mt(i));
				const q = i.$;
				let V = class extends E.$1c {
					constructor(X, Y) {
						super(), (this.b = Y);
						const ie = this.b.getValue("editor");
						this.a = d.$OK.createFromRawSettings(
							ie,
							t.$sjb.getInstance(X).value,
						).lineHeight;
					}
					getHeight(X) {
						return X.getHeight(this.a);
					}
					getDynamicHeight(X) {
						return X.getDynamicHeight();
					}
					getTemplateId(X) {
						return X.cellKind === z.CellKind.Markup
							? K.TEMPLATE_ID
							: J.TEMPLATE_ID;
					}
				};
				(e.$$3b = V), (e.$$3b = V = Ne([j(1, h.$gj)], V));
				class G {
					constructor(X, Y, ie, ne, ee, _, te, Q, Z, se) {
						(this.b = X),
							(this.c = Y),
							(this.d = ie),
							(this.e = ne),
							(this.f = _),
							(this.g = te),
							(this.h = Q),
							(this.i = se),
							(this.a = new I.$J3b(
								this.c.getBaseCellEditorOptions(Z),
								this.c.notebookOptions,
								ee,
							));
					}
					dispose() {
						this.a.dispose(), (this.i = void 0);
					}
				}
				let K = class extends G {
					static {
						x = this;
					}
					static {
						this.TEMPLATE_ID = "markdown_cell";
					}
					constructor(X, Y, ie, ne, ee, _, te, Q, Z, se, re) {
						super(_, X, te, Q, ee, Z, se, ne, "markdown", Y),
							(this.k = ie),
							(this.j = re);
					}
					get templateId() {
						return x.TEMPLATE_ID;
					}
					renderTemplate(X) {
						X.classList.add("markdown-cell-row");
						const Y = i.$fhb(X, i.$(".cell-inner-container")),
							ie = new E.$Zc(),
							ne = ie.add(this.h(Y)),
							ee = i.$fhb(X, q(".cell-decoration")),
							_ = i.$fhb(Y, q(".cell-title-toolbar")),
							te = new w.$Rhb(
								i.$fhb(Y, q(".cell-focus-indicator.cell-focus-indicator-top")),
							),
							Q = new w.$Rhb(
								i.$fhb(
									Y,
									i.$(
										".cell-focus-indicator.cell-focus-indicator-side.cell-focus-indicator-left",
									),
								),
							),
							Z = i.$fhb(Q.domNode, i.$(".notebook-folding-indicator")),
							se = new w.$Rhb(
								i.$fhb(
									Y,
									i.$(
										".cell-focus-indicator.cell-focus-indicator-side.cell-focus-indicator-right",
									),
								),
							),
							re = i.$fhb(Y, q(".cell.code")),
							le = i.$fhb(re, q(".cell-editor-part")),
							oe = i.$fhb(le, q(".cell-chat-part")),
							ae = i.$fhb(re, q(".input-collapse-container"));
						ae.style.display = "none";
						const pe = i.$fhb(le, q(".cell-editor-container"));
						le.style.display = "none";
						const $e = i.$fhb(Y, q(".cell-comment-container")),
							ye = i.$fhb(Y, q(".cell.markdown")),
							ue = i.$fhb(Y, q(".cell-bottom-toolbar-container")),
							fe = ie.add(this.b.createChild(new p.$Ki([c.$6j, ne]))),
							me = { toggle: (Le, Fe) => Y.classList.toggle(Le, Fe) },
							ve = ie.add(
								fe.createInstance(
									M.$R3b,
									_,
									me,
									this.c.creationOptions.menuIds.cellTitleToolbar,
									this.c.creationOptions.menuIds.cellDeleteToolbar,
									this.c,
								),
							),
							ge = new w.$Rhb(
								i.$fhb(
									Y,
									q(".cell-focus-indicator.cell-focus-indicator-bottom"),
								),
							),
							be = new b.$C1b(
								i.getWindow(X),
								[
									ie.add(fe.createInstance(s.$Y2b, this.c, oe)),
									ie.add(fe.createInstance(D.$U3b, this.c, Y, le, void 0)),
									ie.add(new k.$S3b(this.c, ve, te, Q, se, ge)),
									ie.add(
										new B.$93b(
											this.c,
											i.$fhb(Y, q(".notebook-folded-hint")),
											this.j,
										),
									),
									ie.add(new $.$H3b(X, ee)),
									ie.add(fe.createInstance(l.$G3b, this.c, $e)),
									ie.add(new R.$63b(this.c, ae)),
									ie.add(new P.$L3b(Y, void 0, this.c)),
									ie.add(new v.$t2b(Y)),
									ie.add(fe.createInstance(y.$51b, this.c)),
								],
								[ve, ie.add(fe.createInstance(M.$Q3b, this.c, _, ue))],
							);
						return (
							ie.add(be),
							{
								rootContainer: X,
								cellInputCollapsedContainer: ae,
								instantiationService: fe,
								container: Y,
								cellContainer: ye,
								editorPart: le,
								editorContainer: pe,
								foldingIndicator: Z,
								templateDisposables: ie,
								elementDisposables: new E.$Zc(),
								cellParts: be,
								toJSON: () => ({}),
							}
						);
					}
					renderElement(X, Y, ie, ne) {
						if (!this.c.hasModel())
							throw new Error(
								"The notebook editor is not attached with view model yet.",
							);
						(ie.currentRenderedCell = X),
							(ie.currentEditor = void 0),
							(ie.editorPart.style.display = "none"),
							(ie.cellContainer.innerText = ""),
							ne !== void 0 &&
								ie.elementDisposables.add(
									ie.instantiationService.createInstance(
										U.$03b,
										this.c,
										X,
										ie,
										this.k,
									),
								);
					}
					disposeTemplate(X) {
						X.elementDisposables.dispose(), X.templateDisposables.dispose();
					}
					disposeElement(X, Y, ie) {
						ie.elementDisposables.clear();
					}
				};
				(e.$_3b = K),
					(e.$_3b =
						K =
						x =
							Ne(
								[
									j(4, h.$gj),
									j(5, g.$Li),
									j(6, n.$Xxb),
									j(7, a.$YX),
									j(8, o.$uZ),
									j(9, f.$4N),
									j(10, F.$d6),
								],
								K,
							));
				let J = class extends G {
					static {
						H = this;
					}
					static {
						this.TEMPLATE_ID = "code_cell";
					}
					constructor(X, Y, ie, ne, ee, _, te, Q, Z, se, re) {
						super(Z, X, te, Q, _, se, re, ee, r.$0M, ne),
							(this.j = Y),
							(this.k = ie);
					}
					get templateId() {
						return H.TEMPLATE_ID;
					}
					renderTemplate(X) {
						X.classList.add("code-cell-row");
						const Y = i.$fhb(X, i.$(".cell-inner-container")),
							ie = new E.$Zc(),
							ne = ie.add(this.h(Y)),
							ee = i.$fhb(X, q(".cell-decoration")),
							_ = new w.$Rhb(
								i.$fhb(Y, q(".cell-focus-indicator.cell-focus-indicator-top")),
							),
							te = i.$fhb(Y, q(".cell-title-toolbar")),
							Q = new w.$Rhb(
								i.$fhb(
									Y,
									i.$(
										".cell-focus-indicator.cell-focus-indicator-side.cell-focus-indicator-left",
									),
								),
							),
							Z = i.$fhb(Y, q(".cell-chat-part")),
							se = i.$fhb(Y, q(".cell.code")),
							re = i.$fhb(se, q(".run-button-container")),
							le = i.$fhb(se, q(".input-collapse-container"));
						le.style.display = "none";
						const oe = i.$fhb(Q.domNode, q("div.execution-count-label"));
						oe.title = (0, u.localize)(8214, null);
						const ae = i.$fhb(se, q(".cell-editor-part")),
							pe = i.$fhb(ae, q(".cell-editor-container")),
							$e = i.$fhb(Y, q(".cell-comment-container")),
							ye = ie.add(this.h(ae)),
							ue = ie.add(this.b.createChild(new p.$Ki([c.$6j, ye])));
						m.EditorContextKeys.inCompositeEditor.bindTo(ye).set(!0);
						const fe = ue.createInstance(
							C.$rwb,
							pe,
							{
								...this.a.getDefaultValue(),
								dimension: { width: 0, height: 0 },
								scrollbar: {
									vertical: "hidden",
									horizontal: "auto",
									handleMouseWheel: !1,
									useShadows: !1,
								},
							},
							{ contributions: this.c.creationOptions.cellEditorContributions },
						);
						ie.add(fe);
						const me = new w.$Rhb(i.$fhb(Y, q(".output"))),
							ve = i.$fhb(me.domNode, q(".output-collapse-container")),
							ge = new w.$Rhb(i.$fhb(Y, q(".output-show-more-container"))),
							be = new w.$Rhb(
								i.$fhb(
									Y,
									i.$(
										".cell-focus-indicator.cell-focus-indicator-side.cell-focus-indicator-right",
									),
								),
							),
							Ce = i.$fhb(Y, q(".cell-editor-focus-sink"));
						Ce.setAttribute("tabindex", "0");
						const Le = i.$fhb(Y, q(".cell-bottom-toolbar-container")),
							Fe = new w.$Rhb(
								i.$fhb(
									Y,
									q(".cell-focus-indicator.cell-focus-indicator-bottom"),
								),
							),
							Oe = ie.add(this.b.createChild(new p.$Ki([c.$6j, ne]))),
							xe = { toggle: (Ie, Be) => Y.classList.toggle(Ie, Be) },
							He = ie.add(
								Oe.createInstance(
									M.$R3b,
									te,
									xe,
									this.c.creationOptions.menuIds.cellTitleToolbar,
									this.c.creationOptions.menuIds.cellDeleteToolbar,
									this.c,
								),
							),
							Ke = ie.add(new k.$S3b(this.c, He, _, Q, be, Fe)),
							Je = new b.$C1b(
								i.getWindow(X),
								[
									Ke,
									ie.add(Oe.createInstance(s.$Y2b, this.c, Z)),
									ie.add(Oe.createInstance(D.$U3b, this.c, Y, ae, fe)),
									ie.add(Oe.createInstance(L.$T3b, ae, le)),
									ie.add(Oe.createInstance(A.$43b, this.c, ne, Y, re)),
									ie.add(new $.$H3b(X, ee)),
									ie.add(Oe.createInstance(l.$G3b, this.c, $e)),
									ie.add(Oe.createInstance(T.$K3b, this.c, oe)),
									ie.add(Oe.createInstance(O.$73b, this.c, ve)),
									ie.add(new R.$63b(this.c, le)),
									ie.add(new P.$L3b(Y, Ce, this.c)),
									ie.add(new v.$t2b(Y)),
									ie.add(Oe.createInstance(y.$51b, this.c)),
								],
								[He, ie.add(Oe.createInstance(M.$Q3b, this.c, te, Le))],
							);
						ie.add(Je);
						const Te = {
								rootContainer: X,
								editorPart: ae,
								cellInputCollapsedContainer: le,
								cellOutputCollapsedContainer: ve,
								instantiationService: Oe,
								container: Y,
								cellContainer: se,
								focusSinkElement: Ce,
								outputContainer: me,
								outputShowMoreContainer: ge,
								editor: fe,
								templateDisposables: ie,
								elementDisposables: new E.$Zc(),
								cellParts: Je,
								toJSON: () => ({}),
							},
							Ee = [
								Q.domNode,
								Ke.codeFocusIndicator.domNode,
								Ke.outputFocusIndicator.domNode,
							];
						return (
							this.i?.registerDragHandle(Te, X, Ee, () =>
								new S.$I3b().getDragImage(Te, Te.editor, "code"),
							),
							Te
						);
					}
					renderElement(X, Y, ie, ne) {
						if (!this.c.hasModel())
							throw new Error(
								"The notebook editor is not attached with view model yet.",
							);
						(ie.currentRenderedCell = X),
							ne !== void 0 &&
								((ie.outputContainer.domNode.innerText = ""),
								ie.outputContainer.domNode.appendChild(
									ie.cellOutputCollapsedContainer,
								),
								ie.elementDisposables.add(
									ie.instantiationService.createInstance(
										N.$33b,
										this.c,
										X,
										ie,
										this.k,
									),
								),
								this.j.set(X, ie.editor));
					}
					disposeTemplate(X) {
						X.templateDisposables.clear();
					}
					disposeElement(X, Y, ie, ne) {
						ie.elementDisposables.clear(), this.j.delete(X);
					}
				};
				(e.$a4b = J),
					(e.$a4b =
						J =
						H =
							Ne(
								[
									j(5, h.$gj),
									j(6, n.$Xxb),
									j(7, a.$YX),
									j(8, g.$Li),
									j(9, o.$uZ),
									j(10, f.$4N),
								],
								J,
							));
			},
		),
		define(
			de[4098],
			he([
				1, 0, 456, 29, 6, 3, 201, 37, 199, 17, 64, 780, 946, 122, 42, 5, 155,
				1030, 108, 990, 3106, 482, 855, 70, 190, 442,
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
					(e.$r2b = void 0),
					(e.$s2b = M),
					(d = mt(d));
				const I = () => {
					throw new Error("Invalid change accessor");
				};
				class T {
					constructor() {
						this.a = new h.$JU();
					}
					intervalSearch(A, R, O, B, U, z = !1) {
						return this.a.intervalSearch(A, R, O, B, U, z);
					}
					search(A, R, O, B, U) {
						return this.a.search(A, R, B, U);
					}
					collectNodesFromOwner(A) {
						return this.a.collectNodesFromOwner(A);
					}
					collectNodesPostOrder() {
						return this.a.collectNodesPostOrder();
					}
					insert(A) {
						this.a.insert(A);
					}
					delete(A) {
						this.a.delete(A);
					}
					resolveNode(A, R) {
						this.a.resolveNode(A, R);
					}
					acceptReplace(A, R, O, B) {
						this.a.acceptReplace(A, R, O, B);
					}
				}
				const P = [
					c.$eY.register({
						description:
							"notebook-view-model-tracked-range-always-grows-when-typing-at-edges",
						stickiness: u.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
					}),
					c.$eY.register({
						description:
							"notebook-view-model-tracked-range-never-grows-when-typing-at-edges",
						stickiness: u.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
					}),
					c.$eY.register({
						description:
							"notebook-view-model-tracked-range-grows-only-when-typing-before",
						stickiness: u.TrackedRangeStickiness.GrowsOnlyWhenTypingBefore,
					}),
					c.$eY.register({
						description:
							"notebook-view-model-tracked-range-grows-only-when-typing-after",
						stickiness: u.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter,
					}),
				];
				function k(N) {
					return N instanceof c.$eY ? N : c.$eY.createDynamic(N);
				}
				let L = 0,
					D = class extends E.$1c {
						get options() {
							return this.L;
						}
						get onDidChangeOptions() {
							return this.c.event;
						}
						get viewCells() {
							return this.f;
						}
						get length() {
							return this.f.length;
						}
						get notebookDocument() {
							return this.H;
						}
						get uri() {
							return this.H.uri;
						}
						get metadata() {
							return this.H.metadata;
						}
						get onDidChangeViewCells() {
							return this.h.event;
						}
						get lastNotebookEditResource() {
							return this.j.length ? this.j[this.j.length - 1] : null;
						}
						get layoutInfo() {
							return this.J;
						}
						get onDidChangeSelection() {
							return this.m.event;
						}
						get q() {
							const A = new Set(),
								R = [];
							return (
								(0, S.$j6)(this.n.selections)
									.map((O) => (O < this.length ? this.cellAt(O) : void 0))
									.forEach((O) => {
										O && !A.has(O.handle) && R.push(O.handle);
									}),
								R
							);
						}
						set q(A) {
							const R = A.map((O) => this.f.findIndex((B) => B.handle === O));
							this.n.setSelections((0, S.$i6)(R), !0, "model");
						}
						get focused() {
							return this.C;
						}
						constructor(A, R, O, B, U, z, F, x, H, q) {
							super(),
								(this.viewType = A),
								(this.H = R),
								(this.I = O),
								(this.J = B),
								(this.L = U),
								(this.M = z),
								(this.N = F),
								(this.O = x),
								(this.P = H),
								(this.a = this.D(new E.$Zc())),
								(this.b = new Map()),
								(this.c = this.D(new w.$re())),
								(this.f = []),
								(this.h = this.D(new w.$re())),
								(this.j = []),
								(this.m = this.D(new w.$re())),
								(this.n = this.D(new s.$q2b())),
								(this.r = new T()),
								(this.s = Object.create(null)),
								(this.t = 0),
								(this.w = null),
								(this.y = new w.$re()),
								(this.onDidFoldingStateChanged = this.y.event),
								(this.z = []),
								(this.C = !0),
								(this.F = new Map()),
								(this.G = new Map()),
								L++,
								(this.id = "$notebookViewModel" + L),
								(this.u = d.$fg(L)),
								(this.g = !!this.options.inRepl);
							const V = (K, J) => {
								const W = K.map((ne) => [
									ne[0],
									ne[1],
									ne[2].map((ee) => M(this.M, this, ee, this.I)),
								]);
								W.reverse().forEach((ne) => {
									const ee = this.f.splice(ne[0], ne[1], ...ne[2]);
									this.r.acceptReplace(ne[0], ne[1], ne[2].length, !0),
										ee.forEach((_) => {
											this.b.delete(_.handle), _.dispose();
										}),
										ne[2].forEach((_) => {
											this.b.set(_.handle, _), this.a.add(_);
										});
								});
								const X = this.q;
								this.h.fire({ synchronous: J, splices: W });
								let Y = [];
								if (X.length) {
									const ne = X[0],
										ee = this.f.indexOf(this.getCellByHandle(ne));
									Y = [ne];
									let _ = 0;
									for (let te = 0; te < W.length; te++) {
										const Q = W[0];
										if (Q[0] + Q[1] <= ee) {
											_ += Q[2].length - Q[1];
											continue;
										}
										if (Q[0] > ee) {
											Y = [ne];
											break;
										}
										if (Q[0] + Q[1] > ee) {
											Y = [this.f[Q[0] + _].handle];
											break;
										}
									}
								}
								const ie = Y.map((ne) =>
									this.f.findIndex((ee) => ee.handle === ne),
								);
								this.n.setState(
									(0, S.$i6)([ie[0]])[0],
									(0, S.$i6)(ie),
									!0,
									"model",
								);
							};
							this.D(
								this.H.onDidChangeContent((K) => {
									for (let J = 0; J < K.rawEvents.length; J++) {
										const W = K.rawEvents[J];
										let X = [];
										const Y = K.synchronous ?? !0;
										if (
											W.kind === $.NotebookCellsChangeType.ModelChange ||
											W.kind === $.NotebookCellsChangeType.Initialize
										) {
											(X = W.changes), V(X, Y);
											continue;
										} else if (W.kind === $.NotebookCellsChangeType.Move)
											V([[W.index, W.length, []]], Y),
												V([[W.newIdx, 0, W.cells]], Y);
										else continue;
									}
								}),
							),
								this.D(
									this.H.onDidChangeContent((K) => {
										K.rawEvents.forEach((J) => {
											J.kind ===
												$.NotebookCellsChangeType.ChangeDocumentMetadata &&
												this.I.eventDispatcher.emit([
													new b.$JIb(this.H.metadata),
												]);
										}),
											K.endSelectionState &&
												this.updateSelectionsState(K.endSelectionState);
									}),
								),
								this.D(
									this.I.eventDispatcher.onDidChangeLayout((K) => {
										(this.J = K.value),
											this.f.forEach((J) => {
												J.cellKind === $.CellKind.Markup
													? (K.source.width || K.source.fontInfo) &&
														J.layoutChange({
															outerWidth: K.value.width,
															font: K.value.fontInfo,
														})
													: K.source.width !== void 0 &&
														J.layoutChange({
															outerWidth: K.value.width,
															font: K.value.fontInfo,
														});
											});
									}),
								),
								this.D(
									this.I.notebookOptions.onDidChangeOptions((K) => {
										for (let J = 0; J < this.length; J++)
											this.f[J].updateOptions(K);
									}),
								),
								this.D(
									q.onDidChangeExecution((K) => {
										if (K.type !== v.NotebookExecutionType.cell) return;
										const J = this.getCellByHandle(K.cellHandle);
										J instanceof l.$31b && J.updateExecutionState(K);
									}),
								),
								this.D(
									this.n.onDidChangeSelection((K) => {
										this.m.fire(K);
									}),
								);
							const G = this.g ? this.H.cells.length - 1 : this.H.cells.length;
							for (let K = 0; K < G; K++)
								this.f.push(M(this.M, this, this.H.cells[K], this.I));
							this.f.forEach((K) => {
								this.b.set(K.handle, K);
							});
						}
						updateOptions(A) {
							(this.L = { ...this.L, ...A }), this.c.fire();
						}
						getFocus() {
							return this.n.focus;
						}
						getSelections() {
							return this.n.selections;
						}
						setEditorFocus(A) {
							this.C = A;
						}
						getCellsBefore(A) {
							const R = this.getCellIndex(A);
							if (R !== -1) return this.f.slice(0, R);
						}
						getCellsAfter(A) {
							const R = this.getCellIndex(A);
							if (R !== -1) return this.f.slice(R + 1);
						}
						validateRange(A) {
							if (!A) return null;
							const R = (0, C.$Zm)(A.start, 0, this.length),
								O = (0, C.$Zm)(A.end, 0, this.length);
							return R <= O ? { start: R, end: O } : { start: O, end: R };
						}
						updateSelectionsState(A, R = "model") {
							if (this.C || R === "model")
								if (A.kind === $.SelectionStateType.Handle) {
									const O =
											A.primary !== null
												? this.getCellIndexByHandle(A.primary)
												: null,
										B =
											O !== null
												? this.validateRange({ start: O, end: O + 1 })
												: null,
										U = (0, S.$i6)(
											A.selections.map((z) => this.getCellIndexByHandle(z)),
										)
											.map((z) => this.validateRange(z))
											.filter((z) => z !== null);
									this.n.setState(B, (0, S.$k6)(U), !0, R);
								} else {
									const O = this.validateRange(A.focus),
										B = A.selections
											.map((U) => this.validateRange(U))
											.filter((U) => U !== null);
									this.n.setState(O, (0, S.$k6)(B), !0, R);
								}
						}
						getFoldingStartIndex(A) {
							if (!this.w) return -1;
							const R = this.w.findRange(A + 1);
							return this.w.getStartLineNumber(R) - 1;
						}
						getFoldingState(A) {
							if (!this.w) return f.CellFoldingState.None;
							const R = this.w.findRange(A + 1);
							return this.w.getStartLineNumber(R) - 1 !== A
								? f.CellFoldingState.None
								: this.w.isCollapsed(R)
									? f.CellFoldingState.Collapsed
									: f.CellFoldingState.Expanded;
						}
						getFoldedLength(A) {
							if (!this.w) return 0;
							const R = this.w.findRange(A + 1),
								O = this.w.getStartLineNumber(R) - 1;
							return this.w.getEndLineNumber(R) - 1 - O;
						}
						updateFoldingRanges(A) {
							this.w = A;
							let R = !1;
							const O = [];
							let B = 0,
								U = 0,
								z = Number.MAX_VALUE,
								F = -1;
							for (; B < A.length; B++) {
								if (!A.isCollapsed(B)) continue;
								const x = A.getStartLineNumber(B) + 1,
									H = A.getEndLineNumber(B);
								(z <= x && H <= F) ||
									(!R &&
									U < this.z.length &&
									this.z[U].start + 1 === x &&
									this.z[U].end + 1 === H
										? (O.push(this.z[U]), U++)
										: ((R = !0), O.push({ start: x - 1, end: H - 1 })),
									(z = x),
									(F = H));
							}
							(R || U < this.z.length) && ((this.z = O), this.y.fire()),
								this.f.forEach((x) => {
									x.cellKind === $.CellKind.Markup &&
										x.triggerFoldingStateChange();
								});
						}
						getHiddenRanges() {
							return this.z;
						}
						getCellByHandle(A) {
							return this.b.get(A);
						}
						getCellIndexByHandle(A) {
							return this.f.findIndex((R) => R.handle === A);
						}
						getCellIndex(A) {
							return this.f.indexOf(A);
						}
						cellAt(A) {
							return this.f[A];
						}
						getCellsInRange(A) {
							if (!A) return this.f.slice(0);
							const R = this.validateRange(A);
							if (R) {
								const O = [];
								for (let B = R.start; B < R.end; B++) O.push(this.f[B]);
								return O;
							}
							return [];
						}
						getNearestVisibleCellIndexUpwards(A) {
							for (let R = this.z.length - 1; R >= 0; R--) {
								const O = this.z[R],
									B = O.start - 1,
									U = O.end;
								if (!(B > A)) {
									if (B <= A && U >= A) return A;
									break;
								}
							}
							return A;
						}
						getNextVisibleCellIndex(A) {
							for (let R = 0; R < this.z.length; R++) {
								const O = this.z[R],
									B = O.start - 1,
									U = O.end;
								if (!(U < A)) {
									if (B <= A) return U + 1;
									break;
								}
							}
							return A + 1;
						}
						getPreviousVisibleCellIndex(A) {
							for (let R = this.z.length - 1; R >= 0; R--) {
								const O = this.z[R],
									B = O.start - 1;
								if (O.end < A) return A;
								if (B <= A) return B;
							}
							return A;
						}
						hasCell(A) {
							return this.b.has(A.handle);
						}
						getVersionId() {
							return this.H.versionId;
						}
						getAlternativeId() {
							return this.H.alternativeVersionId;
						}
						getTrackedRange(A) {
							return this.Q(A);
						}
						Q(A) {
							const R = this.s[A];
							if (!R) return null;
							const O = this.getVersionId();
							return (
								R.cachedVersionId !== O && this.r.resolveNode(R, O),
								R.range === null
									? {
											start: R.cachedAbsoluteStart - 1,
											end: R.cachedAbsoluteEnd - 1,
										}
									: {
											start: R.range.startLineNumber - 1,
											end: R.range.endLineNumber - 1,
										}
							);
						}
						setTrackedRange(A, R, O) {
							const B = A ? this.s[A] : null;
							return B
								? R
									? (this.r.delete(B),
										B.reset(
											this.getVersionId(),
											R.start,
											R.end + 1,
											new r.$iL(R.start + 1, 1, R.end + 1, 1),
										),
										B.setOptions(P[O]),
										this.r.insert(B),
										B.id)
									: (this.r.delete(B), delete this.s[B.id], null)
								: R
									? this.R(
											0,
											[],
											[
												{
													range: new r.$iL(R.start + 1, 1, R.end + 1, 1),
													options: P[O],
												},
											],
										)[0]
									: null;
						}
						R(A, R, O) {
							const B = this.getVersionId(),
								U = R.length;
							let z = 0;
							const F = O.length;
							let x = 0;
							const H = new Array(F);
							for (; z < U || x < F; ) {
								let q = null;
								if (z < U) {
									do q = this.s[R[z++]];
									while (!q && z < U);
									q && this.r.delete(q);
								}
								if (x < F) {
									if (!q) {
										const J = ++this.t,
											W = `${this.u};${J}`;
										(q = new h.$HU(W, 0, 0)), (this.s[W] = q);
									}
									const V = O[x],
										G = V.range,
										K = k(V.options);
									(q.ownerId = A),
										q.reset(
											B,
											G.startLineNumber,
											G.endLineNumber,
											r.$iL.lift(G),
										),
										q.setOptions(K),
										this.r.insert(q),
										(H[x] = q.id),
										x++;
								} else q && delete this.s[q.id];
							}
							return H;
						}
						deltaCellDecorations(A, R) {
							A.forEach((B) => {
								const U = this.F.get(B);
								U !== void 0 &&
									(this.getCellByHandle(U)?.deltaCellDecorations([B], []),
									this.F.delete(B));
							});
							const O = [];
							return (
								R.forEach((B) => {
									const z =
										this.getCellByHandle(B.handle)?.deltaCellDecorations(
											[],
											[B.options],
										) || [];
									z.forEach((F) => {
										this.F.set(F, B.handle);
									}),
										O.push(...z);
								}),
								O
							);
						}
						deltaCellStatusBarItems(A, R) {
							const O = (0, t.$e)(A, (U) => this.G.get(U) ?? -1),
								B = [];
							R.forEach((U) => {
								const z = this.getCellByHandle(U.handle),
									F = O[U.handle] ?? [];
								delete O[U.handle], F.forEach((H) => this.G.delete(H));
								const x = z?.deltaCellStatusBarItems(F, U.items) || [];
								x.forEach((H) => {
									this.G.set(H, U.handle);
								}),
									B.push(...x);
							});
							for (const U in O) {
								const z = parseInt(U),
									F = O[z];
								this.getCellByHandle(z)?.deltaCellStatusBarItems(F, []),
									F.forEach((H) => this.G.delete(H));
							}
							return B;
						}
						nearestCodeCellIndex(A) {
							const R = this.viewCells
								.slice(0, A)
								.reverse()
								.findIndex((O) => O.cellKind === $.CellKind.Code);
							if (R > -1) return A - R - 1;
							{
								const O = this.viewCells
									.slice(A + 1)
									.findIndex((B) => B.cellKind === $.CellKind.Code);
								return O > -1 ? A + 1 + O : -1;
							}
						}
						getEditorViewState() {
							const A = {},
								R = {},
								O = {},
								B = {};
							this.f.forEach((z, F) => {
								z.getEditState() === f.CellEditState.Editing && (A[F] = !0),
									z.isInputCollapsed && (R[F] = !0),
									z instanceof l.$31b && z.isOutputCollapsed && (O[F] = !0),
									z.lineNumbers !== "inherit" && (B[F] = z.lineNumbers);
							});
							const U = {};
							return (
								this.f
									.map((z) => ({
										handle: z.model.handle,
										state: z.saveEditorViewState(),
									}))
									.forEach((z, F) => {
										z.state && (U[F] = z.state);
									}),
								{
									editingCells: A,
									editorViewStates: U,
									cellLineNumberStates: B,
									collapsedInputCells: R,
									collapsedOutputCells: O,
								}
							);
						}
						restoreEditorViewState(A) {
							A &&
								this.f.forEach((R, O) => {
									const B = A.editingCells && A.editingCells[O],
										U = A.editorViewStates && A.editorViewStates[O];
									R.updateEditState(
										B ? f.CellEditState.Editing : f.CellEditState.Preview,
										"viewState",
									);
									const z = A.cellTotalHeights ? A.cellTotalHeights[O] : void 0;
									R.restoreEditorViewState(U, z),
										A.collapsedInputCells &&
											A.collapsedInputCells[O] &&
											(R.isInputCollapsed = !0),
										A.collapsedOutputCells &&
											A.collapsedOutputCells[O] &&
											R instanceof l.$31b &&
											(R.isOutputCollapsed = !0),
										A.cellLineNumberStates &&
											A.cellLineNumberStates[O] &&
											(R.lineNumbers = A.cellLineNumberStates[O]);
								});
						}
						changeModelDecorations(A) {
							const R = { deltaDecorations: (B, U) => this.S(B, U) };
							let O = null;
							try {
								O = A(R);
							} catch (B) {
								(0, i.$4)(B);
							}
							return (R.deltaDecorations = I), O;
						}
						S(A, R) {
							const O = new Map();
							A.forEach((U) => {
								const z = U.ownerId;
								if (!O.has(z)) {
									const x = this.f.find((H) => H.handle === z);
									x &&
										O.set(z, {
											cell: x,
											oldDecorations: [],
											newDecorations: [],
										});
								}
								const F = O.get(z);
								F && (F.oldDecorations = U.decorations);
							}),
								R.forEach((U) => {
									const z = U.ownerId;
									if (!O.has(z)) {
										const x = this.f.find((H) => H.handle === z);
										x &&
											O.set(z, {
												cell: x,
												oldDecorations: [],
												newDecorations: [],
											});
									}
									const F = O.get(z);
									F && (F.newDecorations = U.decorations);
								});
							const B = [];
							return (
								O.forEach((U, z) => {
									const F = U.cell.deltaModelDecorations(
										U.oldDecorations,
										U.newDecorations,
									);
									B.push({ ownerId: z, decorations: F });
								}),
								B
							);
						}
						find(A, R) {
							const O = [];
							let B = [];
							if (
								R.findScope &&
								(R.findScope.findScopeType === $.NotebookFindScopeType.Cells ||
									R.findScope.findScopeType === $.NotebookFindScopeType.Text)
							) {
								const U =
									R.findScope.selectedCellRanges
										?.map((F) => this.validateRange(F))
										.filter((F) => !!F) ?? [];
								B = (0, S.$j6)(U).map((F) => this.f[F]);
							} else B = this.f;
							return (
								B.forEach((U, z) => {
									const F = U.startFind(A, R);
									F && O.push(new o.$o2b(F.cell, z, F.contentMatches, []));
								}),
								O.filter((U) =>
									U.cell.cellKind === $.CellKind.Code
										? R.includeCodeInput
										: (U.cell.getEditState() === f.CellEditState.Editing ||
												!R.includeMarkupPreview) &&
											R.includeMarkupInput,
								)
							);
						}
						replaceOne(A, R, O) {
							const B = A;
							return (
								this.j.push(B.uri),
								B.resolveTextModel().then(() => {
									this.N.apply([new m.$tzb(A.uri, { range: R, text: O })], {
										quotableLabel: "Notebook Replace",
									});
								})
							);
						}
						async replaceAll(A, R) {
							if (!A.length) return;
							const O = [];
							return (
								this.j.push(A[0].cell.uri),
								A.forEach((B) => {
									B.contentMatches.forEach((U, z) => {
										O.push({
											versionId: void 0,
											textEdit: { range: U.range, text: R[z] },
											resource: B.cell.uri,
										});
									});
								}),
								Promise.all(A.map((B) => B.cell.resolveTextModel())).then(
									async () => {
										this.N.apply(
											{ edits: O },
											{ quotableLabel: "Notebook Replace All" },
										);
									},
								)
							);
						}
						async U(A, R) {
							const O = this.f.filter((U) => A.matchesResource(U.uri)),
								B = await Promise.all(
									O.map((U) => this.P.createModelReference(U.uri)),
								);
							await R(), B.forEach((U) => U.dispose());
						}
						async undo() {
							const A = this.O.getElements(this.uri),
								R = A.past.length ? A.past[A.past.length - 1] : void 0;
							return (R && R instanceof a.$wU) || R instanceof a.$xU
								? (await this.U(R, async () => {
										await this.O.undo(this.uri);
									}),
									R instanceof a.$wU ? [R.resource] : R.resources)
								: (await this.O.undo(this.uri), []);
						}
						async redo() {
							const R = this.O.getElements(this.uri).future[0];
							return (R && R instanceof a.$wU) || R instanceof a.$xU
								? (await this.U(R, async () => {
										await this.O.redo(this.uri);
									}),
									R instanceof a.$wU ? [R.resource] : R.resources)
								: (await this.O.redo(this.uri), []);
						}
						equal(A) {
							return this.H === A;
						}
						dispose() {
							this.a.clear(),
								this.f.forEach((A) => {
									A.dispose();
								}),
								super.dispose();
						}
					};
				(e.$r2b = D),
					(e.$r2b = D =
						Ne(
							[
								j(5, g.$Li),
								j(6, m.$rzb),
								j(7, p.$GN),
								j(8, n.$MO),
								j(9, v.$d6),
							],
							D,
						));
				function M(N, A, R, O) {
					return R.cellKind === $.CellKind.Code
						? N.createInstance(l.$31b, A.viewType, R, A.layoutInfo, O)
						: N.createInstance(y.$41b, A.viewType, R, A.layoutInfo, A, O);
				}
			},
		),
		define(
			de[856],
			he([
				1, 0, 7, 75, 15, 97, 29, 6, 3, 12, 19, 47, 600, 463, 17, 328, 4, 11, 10,
				8, 49, 5, 128, 180, 1618, 84, 32, 51, 123, 984, 108, 330, 293, 3092,
				990, 1961, 1848, 1962, 1963, 4097, 482, 3107, 855, 4098, 3108, 3574,
				3503, 3504, 3110, 70, 176, 611, 190, 243, 835, 442, 1255, 161, 46, 66,
				3105, 824, 1030, 557, 23, 962, 609, 3521, 130, 39, 345, 1803, 3559,
				3109, 3502, 2455, 2456, 2457, 2458, 2460, 2461, 2464, 2468, 2462, 2465,
				2459, 2463, 2466, 2467,
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
				te,
				Q,
				Z,
				se,
				re,
				le,
				oe,
				ae,
				pe,
				$e,
				ye,
				ue,
				fe,
				me,
				ve,
				ge,
				be,
				Ce,
				Le,
				Fe,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$m5b =
						e.$l5b =
						e.$k5b =
						e.$j5b =
						e.$i5b =
						e.$h5b =
						e.$g5b =
						e.$f5b =
						e.$e5b =
						e.$d5b =
						e.$c5b =
						e.$b5b =
						e.$a5b =
						e.$_4b =
						e.$$4b =
						e.$04b =
						e.$94b =
						e.$84b =
						e.$74b =
						e.$64b =
						e.$54b =
						e.$44b =
						e.$34b =
						e.$24b =
							void 0),
					(e.$14b = xe),
					(t = mt(t)),
					(p = mt(p));
				const Oe = t.$;
				function xe() {
					const Je = [
							"editor.contrib.review",
							oe.$w4b.ID,
							"editor.contrib.dirtydiff",
							"editor.contrib.testingOutputPeek",
							"editor.contrib.testingDecorations",
							"store.contrib.stickyScrollController",
							"editor.contrib.findController",
							"editor.contrib.emptyTextEditorHint",
						],
						Te = se.EditorExtensionsRegistry.getEditorContributions().filter(
							(Ee) => Je.indexOf(Ee.id) === -1,
						);
					return {
						menuIds: {
							notebookToolbar: o.$XX.NotebookToolbar,
							cellTitleToolbar: o.$XX.NotebookCellTitle,
							cellDeleteToolbar: o.$XX.NotebookCellDelete,
							cellInsertToolbar: o.$XX.NotebookCellBetween,
							cellTopInsertToolbar: o.$XX.NotebookCellListTop,
							cellExecuteToolbar: o.$XX.NotebookCellExecute,
							cellExecutePrimary: o.$XX.NotebookCellExecutePrimary,
						},
						cellEditorContributions: Te,
					};
				}
				let He = class extends m.$1c {
					get isVisible() {
						return this.Ib;
					}
					get isDisposed() {
						return this.Jb;
					}
					set viewModel(Te) {
						this.h.fire(this.ob?.notebookDocument),
							(this.ob = Te),
							this.j.fire(Te?.notebookDocument);
					}
					get viewModel() {
						return this.ob;
					}
					get textModel() {
						return this.ob?.notebookDocument;
					}
					get isReadOnly() {
						return this.ob?.options.isReadOnly ?? !1;
					}
					get activeCodeEditor() {
						if (this.Jb) return;
						const [Te] = this.hb.getFocusedElements();
						return this.lb.get(Te);
					}
					get activeCellAndCodeEditor() {
						if (this.Jb) return;
						const [Te] = this.hb.getFocusedElements(),
							Ee = this.lb.get(Te);
						if (Ee) return [Te, Ee];
					}
					get codeEditors() {
						return [...this.lb];
					}
					get visibleRanges() {
						return this.hb.visibleRanges || [];
					}
					get notebookOptions() {
						return this.Ob;
					}
					constructor(
						Te,
						Ee,
						Ie,
						Be,
						Se,
						ke,
						Ue,
						qe,
						Ae,
						Me,
						De,
						Re,
						je,
						Ve,
						Ze,
						et,
						rt,
						ft,
					) {
						super(),
							(this.creationOptions = Te),
							(this.Qb = Se),
							(this.Rb = ke),
							(this.Sb = Ue),
							(this.Tb = qe),
							(this.Ub = Ae),
							(this.Vb = De),
							(this.Wb = Re),
							(this.Xb = je),
							(this.Yb = Ve),
							(this.Zb = Ze),
							(this.$b = et),
							(this.ac = rt),
							(this.bc = ft),
							(this.f = this.D(new d.$re())),
							(this.onDidChangeCellState = this.f.event),
							(this.g = this.D(new d.$re())),
							(this.onDidChangeViewCells = this.g.event),
							(this.h = this.D(new d.$re())),
							(this.onWillChangeModel = this.h.event),
							(this.j = this.D(new d.$re())),
							(this.onDidChangeModel = this.j.event),
							(this.m = this.D(new d.$re())),
							(this.onDidAttachViewModel = this.m.event),
							(this.n = this.D(new d.$re())),
							(this.onDidChangeOptions = this.n.event),
							(this.q = this.D(new d.$re())),
							(this.onDidChangeDecorations = this.q.event),
							(this.r = this.D(new d.$re())),
							(this.onDidScroll = this.r.event),
							(this.t = this.D(new d.$re())),
							(this.onDidChangeLayout = this.t.event),
							(this.u = this.D(new d.$re())),
							(this.onDidChangeActiveCell = this.u.event),
							(this.w = this.D(new d.$re())),
							(this.onDidChangeFocus = this.w.event),
							(this.y = this.D(new d.$re())),
							(this.onDidChangeSelection = this.y.event),
							(this.z = this.D(new d.$re())),
							(this.onDidChangeVisibleRanges = this.z.event),
							(this.C = this.D(new d.$re())),
							(this.onDidFocusWidget = this.C.event),
							(this.F = this.D(new d.$re())),
							(this.onDidBlurWidget = this.F.event),
							(this.G = this.D(new d.$re())),
							(this.onDidChangeActiveEditor = this.G.event),
							(this.H = this.D(new d.$re())),
							(this.onDidChangeActiveKernel = this.H.event),
							(this.I = this.D(new d.$re())),
							(this.onMouseUp = this.I.event),
							(this.J = this.D(new d.$re())),
							(this.onMouseDown = this.J.event),
							(this.L = this.D(new d.$re())),
							(this.onDidReceiveMessage = this.L.event),
							(this.M = this.D(new d.$re())),
							(this.N = this.M.event),
							(this.O = this.D(new d.$re())),
							(this.P = this.O.event),
							(this.Q = this.D(new d.$re())),
							(this.onDidResizeOutput = this.Q.event),
							(this.db = null),
							(this.eb = null),
							(this.fb = null),
							(this.gb = null),
							(this.jb = null),
							(this.kb = null),
							(this.lb = new Map()),
							(this.pb = this.D(new m.$Zc())),
							(this.qb = []),
							(this.vb = null),
							(this.Bb = new Map()),
							(this.Db = new w.$Ih()),
							(this.Eb = null),
							(this.Fb = (0, a.$9g)()),
							(this.Hb = !1),
							(this.Ib = !1),
							(this.Jb = !1),
							(this.Kb = new Map()),
							(this.cc = !1),
							(this.pc = !1),
							(this.Bc = null),
							(this.Qc = new WeakMap()),
							(this.Zc = new Map()),
							(this.sb = Ee),
							(this.isEmbedded = Te.isEmbedded ?? !1),
							(this.Lb = Te.isReadOnly ?? !1),
							(this.Mb = Te.forRepl ?? !1),
							(this.R = document.createElement("div")),
							(this.scopedContextKeyService = this.D(Me.createScoped(this.R))),
							(this.Nb = this.D(
								Ie.createChild(
									new y.$Ki([b.$6j, this.scopedContextKeyService]),
								),
							)),
							(this.Ob =
								Te.options ??
								this.Nb.createInstance(
									_.$XIb,
									this.creationOptions?.codeWindow ?? i.$Bfb,
									this.Lb,
									void 0,
								)),
							this.D(this.Ob);
						const bt = this.D(new x.$E1b());
						(this.nb = new V.$F1b(this.Ob, bt, (gt) =>
							this.getBaseCellEditorOptions(gt),
						)),
							this.D(
								this.nb.eventDispatcher.onDidChangeLayout(() => {
									this.t.fire();
								}),
							),
							this.D(
								this.nb.eventDispatcher.onDidChangeCellState((gt) => {
									this.f.fire(gt);
								}),
							),
							this.D(
								qe.onDidChangeOutputRenderers(() => {
									this.oc();
								}),
							),
							this.D(this.Nb.createInstance(K.$n4b, this)),
							this.D(
								Ue.onDidChangeSelectedNotebooks((gt) => {
									(0, u.$gh)(gt.notebook, this.viewModel?.uri) &&
										(this.Pc(), this.H.fire());
								}),
							),
							(this.Cb = this.Ub.getValue("editor.scrollBeyondLastLine")),
							this.D(
								this.Ub.onDidChangeConfiguration((gt) => {
									gt.affectsConfiguration("editor.scrollBeyondLastLine") &&
										((this.Cb = this.Ub.getValue(
											"editor.scrollBeyondLastLine",
										)),
										this.sb && this.Ib && this.layout(this.sb));
								}),
							),
							this.D(
								this.Ob.onDidChangeOptions((gt) => {
									(gt.cellStatusBarVisibility ||
										gt.cellToolbarLocation ||
										gt.cellToolbarInteraction) &&
										this.ec(),
										gt.fontFamily && this.fc(),
										(gt.compactView ||
											gt.focusIndicator ||
											gt.insertToolbarPosition ||
											gt.cellToolbarLocation ||
											gt.dragAndDropEnabled ||
											gt.fontSize ||
											gt.markupFontSize ||
											gt.markdownLineHeight ||
											gt.fontFamily ||
											gt.insertToolbarAlignment ||
											gt.outputFontSize ||
											gt.outputLineHeight ||
											gt.outputFontFamily ||
											gt.outputWordWrap ||
											gt.outputScrolling ||
											gt.outputLinkifyFilePaths ||
											gt.minimalError) &&
											(this.bb?.remove(),
											this.ic(),
											this.db?.updateOptions({
												...this.notebookOptions.computeWebviewOptions(),
												fontFamily: this.hc(),
											})),
										this.sb && this.Ib && this.layout(this.sb);
								}),
							);
						const nt = Te.codeWindow
							? this.Vb.getContainer(Te.codeWindow)
							: this.Vb.mainContainer;
						this.D(
							Be.getPart(nt).onDidScroll((gt) => {
								!this.ub ||
									!this.Ib ||
									(this.Kc(this.ub, this.sb), this.Lc(this.sb, this.tb));
							}),
						),
							this.Rb.addNotebookEditor(this);
						const lt = (0, a.$9g)();
						(this.R.id = `notebook-${lt}`),
							(this.R.className = "notebookOverlay"),
							this.R.classList.add("notebook-editor"),
							(this.R.inert = !0),
							(this.R.style.visibility = "hidden"),
							nt.appendChild(this.R),
							this.gc(this.R),
							this.fc(),
							(this.Ib = !0),
							(this.wb = Y.$pJb.bindTo(this.scopedContextKeyService)),
							(this.xb = Y.$rJb.bindTo(this.scopedContextKeyService)),
							(this.Ab = Y.$sJb.bindTo(this.scopedContextKeyService)),
							(this.yb = Y.$tJb.bindTo(this.scopedContextKeyService)),
							(this.zb = Y.$zJb.bindTo(this.scopedContextKeyService)),
							new b.$5j(be.$X4b, !1)
								.bindTo(this.scopedContextKeyService)
								.set(!0),
							this.yb.set(!Te.isReadOnly);
						let ct;
						Array.isArray(this.creationOptions.contributions)
							? (ct = this.creationOptions.contributions)
							: (ct =
									D.NotebookEditorExtensionsRegistry.getEditorContributions());
						for (const gt of ct) {
							let ht;
							try {
								ht = this.Nb.createInstance(gt.ctor, this);
							} catch (Rt) {
								(0, C.$4)(Rt);
							}
							if (ht)
								if (!this.Bb.has(gt.id)) this.Bb.set(gt.id, ht);
								else
									throw (
										(ht.dispose(),
										new Error(
											`DUPLICATE notebook editor contribution: '${gt.id}'`,
										))
									);
						}
						this.ec();
					}
					dc(...Te) {
						this.cc && (0, N.$QKb)(...Te);
					}
					getId() {
						return this.Fb;
					}
					getViewModel() {
						return this.viewModel;
					}
					getLength() {
						return this.viewModel?.length ?? 0;
					}
					getSelections() {
						return this.viewModel?.getSelections() ?? [];
					}
					setSelections(Te) {
						if (!this.viewModel) return;
						const Ee = this.viewModel.getFocus();
						this.viewModel.updateSelectionsState({
							kind: X.SelectionStateType.Index,
							focus: Ee,
							selections: Te,
						});
					}
					getFocus() {
						return this.viewModel?.getFocus() ?? { start: 0, end: 0 };
					}
					setFocus(Te) {
						if (!this.viewModel) return;
						const Ee = this.viewModel.getSelections();
						this.viewModel.updateSelectionsState({
							kind: X.SelectionStateType.Index,
							focus: Te,
							selections: Ee,
						});
					}
					getSelectionViewModels() {
						if (!this.viewModel) return [];
						const Te = new Set();
						return this.viewModel
							.getSelections()
							.map((Ee) => this.viewModel.viewCells.slice(Ee.start, Ee.end))
							.reduce(
								(Ee, Ie) => (
									Ie.forEach((Be) => {
										Te.has(Be.handle) || (Te.add(Be.handle), Ee.push(Be));
									}),
									Ee
								),
								[],
							);
					}
					hasModel() {
						return !!this.ob;
					}
					showProgress() {
						this.Pb = this.$b.show(!0);
					}
					hideProgress() {
						this.Pb && (this.Pb.done(), (this.Pb = void 0));
					}
					getBaseCellEditorOptions(Te) {
						const Ee = this.Kb.get(Te);
						if (Ee) return Ee;
						{
							const Ie = new le.$q4b(this, this.notebookOptions, this.Ub, Te);
							return this.Kb.set(Te, Ie), Ie;
						}
					}
					ec() {
						if (!this.R) return;
						this.R.classList.remove("cell-title-toolbar-left"),
							this.R.classList.remove("cell-title-toolbar-right"),
							this.R.classList.remove("cell-title-toolbar-hidden");
						const Te = this.Ob.computeCellToolbarLocation(
							this.viewModel?.viewType,
						);
						this.R.classList.add(`cell-title-toolbar-${Te}`);
						const Ee = this.Ob.getDisplayOptions().cellToolbarInteraction;
						let Ie = "hover";
						this.R.classList.remove("cell-toolbar-hover"),
							this.R.classList.remove("cell-toolbar-click"),
							(Ee === "hover" || Ee === "click") && (Ie = Ee),
							this.R.classList.add(`cell-toolbar-${Ie}`);
					}
					fc() {
						const Te = this.Ub.getValue("editor"),
							Ee = t.getWindow(this.getDomNode());
						this.rb = h.$osb.readFontInfo(
							Ee,
							c.$OK.createFromRawSettings(Te, ge.$sjb.getInstance(Ee).value),
						);
					}
					gc(Te) {
						(this.S = document.createElement("div")),
							this.S.classList.add("notebook-toolbar-container"),
							(this.S.style.display = "none"),
							t.$fhb(Te, this.S),
							(this.W = document.createElement("div")),
							this.W.classList.add("notebook-sticky-scroll-container"),
							t.$fhb(Te, this.W),
							(this.ab = document.createElement("div")),
							t.$fhb(Te, this.ab),
							this.ab.classList.add("cell-list-container"),
							this.ic(),
							this.jc(),
							(this.Y = document.createElement("div")),
							this.Y.classList.add("notebook-overview-ruler-container"),
							this.hb.scrollableElement.appendChild(this.Y),
							this.lc(),
							this.D(
								this.Nb.createInstance(
									Le.$Z4b,
									this,
									this.hb.scrollableElement,
								),
							),
							(this.cb = document.createElement("div")),
							this.cb.classList.add(
								"notebook-overflow-widget-container",
								"monaco-editor",
							),
							t.$fhb(Te, this.cb);
					}
					hc() {
						return (
							this.rb?.fontFamily ??
							'"SF Mono", Monaco, Menlo, Consolas, "Ubuntu Mono", "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace'
						);
					}
					ic() {
						this.bb = t.$Rgb(this.ab);
						const {
								cellRightMargin: Te,
								cellTopMargin: Ee,
								cellRunGutter: Ie,
								cellBottomMargin: Be,
								codeCellLeftMargin: Se,
								markdownCellGutter: ke,
								markdownCellLeftMargin: Ue,
								markdownCellBottomMargin: qe,
								markdownCellTopMargin: Ae,
								collapsedIndicatorHeight: Me,
								focusIndicator: De,
								insertToolbarPosition: Re,
								outputFontSize: je,
								focusIndicatorLeftMargin: Ve,
								focusIndicatorGap: Ze,
							} = this.Ob.getLayoutConfiguration(),
							{
								insertToolbarAlignment: et,
								compactView: rt,
								fontSize: ft,
							} = this.Ob.getDisplayOptions(),
							bt = this.Ob.getCellEditorContainerLeftMargin(),
							{ bottomToolbarGap: nt, bottomToolbarHeight: lt } =
								this.Ob.computeBottomToolbarDimensions(
									this.viewModel?.viewType,
								),
							ct = [];
						this.rb || this.fc();
						const gt = this.hc();
						ct.push(`
		.notebook-editor {
			--notebook-cell-output-font-size: ${je}px;
			--notebook-cell-input-preview-font-size: ${ft}px;
			--notebook-cell-input-preview-font-family: ${gt};
		}
		`),
							rt
								? ct.push(
										`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .markdown-cell-row div.cell.code { margin-left: ${bt}px; }`,
									)
								: ct.push(
										`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .markdown-cell-row div.cell.code { margin-left: ${Se}px; }`,
									),
							De === "border"
								? (ct.push(`
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-top:before,
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-bottom:before,
			.monaco-workbench .notebookOverlay .monaco-list .markdown-cell-row .cell-inner-container:before,
			.monaco-workbench .notebookOverlay .monaco-list .markdown-cell-row .cell-inner-container:after {
				content: "";
				position: absolute;
				width: 100%;
				height: 1px;
			}

			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-left:before,
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-right:before {
				content: "";
				position: absolute;
				width: 1px;
				height: 100%;
				z-index: 10;
			}

			/* top border */
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-top:before {
				border-top: 1px solid transparent;
			}

			/* left border */
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-left:before {
				border-left: 1px solid transparent;
			}

			/* bottom border */
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-bottom:before {
				border-bottom: 1px solid transparent;
			}

			/* right border */
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-right:before {
				border-right: 1px solid transparent;
			}
			`),
									ct.push(`
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row.code-cell-row.focused .cell-focus-indicator-left:before,
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row.code-cell-row.focused .cell-focus-indicator-right:before,
			.monaco-workbench .notebookOverlay .monaco-list.selection-multiple .monaco-list-row.code-cell-row.selected .cell-focus-indicator-left:before,
			.monaco-workbench .notebookOverlay .monaco-list.selection-multiple .monaco-list-row.code-cell-row.selected .cell-focus-indicator-right:before {
				top: -${Ee}px; height: calc(100% + ${Ee + Be}px)
			}`))
								: (ct.push(`
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-left .codeOutput-focus-indicator {
				border-left: 3px solid transparent;
				border-radius: 4px;
				width: 0px;
				margin-left: ${Ve}px;
				border-color: var(--vscode-notebook-inactiveFocusedCellBorder) !important;
			}

			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row.focused .cell-focus-indicator-left .codeOutput-focus-indicator-container,
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-output-hover .cell-focus-indicator-left .codeOutput-focus-indicator-container,
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .markdown-cell-hover .cell-focus-indicator-left .codeOutput-focus-indicator-container,
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row:hover .cell-focus-indicator-left .codeOutput-focus-indicator-container {
				display: block;
			}

			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-left .codeOutput-focus-indicator-container:hover .codeOutput-focus-indicator {
				border-left: 5px solid transparent;
				margin-left: ${Ve - 1}px;
			}
			`),
									ct.push(`
			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row.focused .cell-inner-container.cell-output-focus .cell-focus-indicator-left .codeOutput-focus-indicator,
			.monaco-workbench .notebookOverlay .monaco-list:focus-within .monaco-list-row.focused .cell-inner-container .cell-focus-indicator-left .codeOutput-focus-indicator {
				border-color: var(--vscode-notebook-focusedCellBorder) !important;
			}

			.monaco-workbench .notebookOverlay .monaco-list .monaco-list-row .cell-inner-container .cell-focus-indicator-left .output-focus-indicator {
				margin-top: ${Ze}px;
			}
			`)),
							Re === "betweenCells" || Re === "both"
								? (ct.push(
										".monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-bottom-toolbar-container { display: flex; }",
									),
									ct.push(
										".monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .view-zones .cell-list-top-cell-toolbar-container { display: flex; }",
									))
								: (ct.push(
										".monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-bottom-toolbar-container { display: none; }",
									),
									ct.push(
										".monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .view-zones .cell-list-top-cell-toolbar-container { display: none; }",
									)),
							et === "left" &&
								(ct.push(`
			.monaco-workbench .notebookOverlay .cell-list-top-cell-toolbar-container .action-item:first-child,
			.monaco-workbench .notebookOverlay .cell-list-top-cell-toolbar-container .action-item:first-child, .monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-bottom-toolbar-container .action-item:first-child {
				margin-right: 0px !important;
			}`),
								ct.push(`
			.monaco-workbench .notebookOverlay .cell-list-top-cell-toolbar-container .monaco-toolbar .action-label,
			.monaco-workbench .notebookOverlay .cell-list-top-cell-toolbar-container .monaco-toolbar .action-label, .monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-bottom-toolbar-container .monaco-toolbar .action-label {
				padding: 0px !important;
				justify-content: center;
				border-radius: 4px;
			}`),
								ct.push(`
			.monaco-workbench .notebookOverlay .cell-list-top-cell-toolbar-container,
			.monaco-workbench .notebookOverlay .cell-list-top-cell-toolbar-container, .monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-bottom-toolbar-container {
				align-items: flex-start;
				justify-content: left;
				margin: 0 16px 0 ${8 + Se}px;
			}`),
								ct.push(`
			.monaco-workbench .notebookOverlay .cell-list-top-cell-toolbar-container,
			.notebookOverlay .cell-bottom-toolbar-container .action-item {
				border: 0px;
			}`)),
							ct.push(
								`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .code-cell-row div.cell.code { margin-left: ${bt}px; }`,
							),
							ct.push(
								`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row div.cell { margin-right: ${Te}px; }`,
							),
							ct.push(
								`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row > .cell-inner-container { padding-top: ${Ee}px; }`,
							),
							ct.push(
								`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .markdown-cell-row > .cell-inner-container { padding-bottom: ${qe}px; padding-top: ${Ae}px; }`,
							),
							ct.push(
								".notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .markdown-cell-row > .cell-inner-container.webview-backed-markdown-cell { padding: 0; }",
							),
							ct.push(
								`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .markdown-cell-row > .webview-backed-markdown-cell.markdown-cell-edit-mode .cell.code { padding-bottom: ${qe}px; padding-top: ${Ae}px; }`,
							),
							ct.push(
								`.notebookOverlay .output { margin: 0px ${Te}px 0px ${bt}px; }`,
							),
							ct.push(
								`.notebookOverlay .output { width: calc(100% - ${bt + Te}px); }`,
							),
							ct.push(
								`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-comment-container { left: ${bt}px; }`,
							),
							ct.push(
								`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-comment-container { width: calc(100% - ${bt + Te}px); }`,
							),
							ct.push(
								`.monaco-workbench .notebookOverlay .output .output-collapse-container .expandButton { left: -${Ie}px; }`,
							),
							ct.push(`.monaco-workbench .notebookOverlay .output .output-collapse-container .expandButton {
			position: absolute;
			width: ${Ie}px;
			padding: 6px 0px;
		}`),
							ct.push(
								`.notebookOverlay .output-show-more-container { margin: 0px ${Te}px 0px ${bt}px; }`,
							),
							ct.push(
								`.notebookOverlay .output-show-more-container { width: calc(100% - ${bt + Te}px); }`,
							),
							ct.push(
								`.notebookOverlay .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row div.cell.markdown { padding-left: ${Ie}px; }`,
							),
							ct.push(
								`.monaco-workbench .notebookOverlay > .cell-list-container .notebook-folding-indicator { left: ${(ke - 20) / 2 + Ue}px; }`,
							),
							ct.push(
								`.notebookOverlay > .cell-list-container .notebook-folded-hint { left: ${ke + Ue + 8}px; }`,
							),
							ct.push(
								`.notebookOverlay .monaco-list .monaco-list-row :not(.webview-backed-markdown-cell) .cell-focus-indicator-top { height: ${Ee}px; }`,
							),
							ct.push(
								`.notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-side { bottom: ${nt}px; }`,
							),
							ct.push(
								`.notebookOverlay .monaco-list .monaco-list-row.code-cell-row .cell-focus-indicator-left { width: ${bt}px; }`,
							),
							ct.push(
								`.notebookOverlay .monaco-list .monaco-list-row.markdown-cell-row .cell-focus-indicator-left { width: ${Se}px; }`,
							),
							ct.push(
								`.notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator.cell-focus-indicator-right { width: ${Te}px; }`,
							),
							ct.push(
								`.notebookOverlay .monaco-list .monaco-list-row .cell-focus-indicator-bottom { height: ${Be}px; }`,
							),
							ct.push(
								`.notebookOverlay .monaco-list .monaco-list-row .cell-shadow-container-bottom { top: ${Be}px; }`,
							),
							ct.push(`
			.notebookOverlay .monaco-list .monaco-list-row:has(+ .monaco-list-row.selected) .cell-focus-indicator-bottom {
				height: ${nt + Be}px;
			}
		`),
							ct.push(`
			.notebookOverlay .monaco-list .monaco-list-row.code-cell-row.nb-multiCellHighlight:has(+ .monaco-list-row.nb-multiCellHighlight) .cell-focus-indicator-bottom {
				height: ${nt + Be}px;
				background-color: var(--vscode-notebook-symbolHighlightBackground) !important;
			}

			.notebookOverlay .monaco-list .monaco-list-row.markdown-cell-row.nb-multiCellHighlight:has(+ .monaco-list-row.nb-multiCellHighlight) .cell-focus-indicator-bottom {
				height: ${nt + Be - 6}px;
				background-color: var(--vscode-notebook-symbolHighlightBackground) !important;
			}
		`),
							ct.push(`
			.monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .input-collapse-container .cell-collapse-preview {
				line-height: ${Me}px;
			}

			.monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .input-collapse-container .cell-collapse-preview .monaco-tokenized-source {
				max-height: ${Me}px;
			}
		`),
							ct.push(
								`.monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-bottom-toolbar-container .monaco-toolbar { height: ${lt}px }`,
							),
							ct.push(
								`.monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .view-zones .cell-list-top-cell-toolbar-container .monaco-toolbar { height: ${lt}px }`,
							),
							ct.push(`.monaco-workbench .notebookOverlay.cell-title-toolbar-right > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-title-toolbar {
			right: ${Te + 26}px;
		}
		.monaco-workbench .notebookOverlay.cell-title-toolbar-left > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-title-toolbar {
			left: ${bt + 16}px;
		}
		.monaco-workbench .notebookOverlay.cell-title-toolbar-hidden > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .cell-title-toolbar {
			display: none;
		}`),
							ct.push(`
		.monaco-workbench .notebookOverlay .output > div.foreground.output-inner-container {
			padding: ${_.$WIb}px 8px;
		}
		.monaco-workbench .notebookOverlay > .cell-list-container > .monaco-list > .monaco-scrollable-element > .monaco-list-rows > .monaco-list-row .output-collapse-container {
			padding: ${_.$WIb}px 8px;
		}
		`),
							ct.push(`
		.monaco-workbench .notebookOverlay .cell-chat-part {
			margin: 0 ${Te}px 6px 4px;
		}
		`),
							(this.bb.textContent = ct.join(`
`));
					}
					jc() {
						this.ab.classList.add("cell-list-container"),
							(this.jb = this.D(new O.$u2b(this, this.ab)));
						const Te = (Be) => this.hb.contextKeyService.createScoped(Be);
						this.mb = this.D(this.Nb.createInstance(Fe.$23b, this, Te));
						const Ee = [
							this.Nb.createInstance(
								z.$a4b,
								this,
								this.lb,
								this.mb,
								this.jb,
								Te,
							),
							this.Nb.createInstance(z.$_3b, this, this.jb, this.lb, Te),
						];
						Ee.forEach((Be) => {
							this.D(Be);
						}),
							(this.gb = this.Nb.createInstance(
								z.$$3b,
								t.getWindow(this.getDomNode()),
							)),
							this.D(this.gb);
						const Ie = new Ce.$Y4b(
							this.Zb,
							() => this.viewModel,
							this.bc,
							this.Ub,
						);
						this.D(Ie),
							(this.hb = this.Nb.createInstance(
								B.$B2b,
								"NotebookCellList",
								this.ab,
								this.nb.notebookOptions,
								this.gb,
								Ee,
								this.scopedContextKeyService,
								{
									setRowLineHeight: !1,
									setRowHeight: !1,
									supportDynamicHeights: !0,
									horizontalScrolling: !1,
									keyboardSupport: !1,
									mouseSupport: !0,
									multipleSelectionSupport: !0,
									selectionNavigation: !0,
									typeNavigationEnabled: !0,
									paddingTop: 0,
									paddingBottom: 0,
									transformOptimization: !1,
									initialSize: this.sb,
									styleController: (Be) => this.hb,
									overrideStyles: {
										listBackground: Ke,
										listActiveSelectionBackground: Ke,
										listActiveSelectionForeground: T.$IP,
										listFocusAndSelectionBackground: Ke,
										listFocusAndSelectionForeground: T.$IP,
										listFocusBackground: Ke,
										listFocusForeground: T.$IP,
										listHoverForeground: T.$IP,
										listHoverBackground: Ke,
										listHoverOutline: T.$NP,
										listFocusOutline: T.$NP,
										listInactiveSelectionBackground: Ke,
										listInactiveSelectionForeground: T.$IP,
										listInactiveFocusBackground: Ke,
										listInactiveFocusOutline: Ke,
									},
									accessibilityProvider: Ie,
								},
							)),
							this.jb.setList(this.hb),
							this.D(this.hb),
							(this.ib = new B.$C2b(this.hb)),
							this.D(this.ib),
							this.D((0, m.$Xc)(...Ee)),
							(this.kb = this.D(
								this.Nb.createInstance(W.$p4b, this, this.notebookOptions),
							)),
							(this.fb = t.$fhb(this.hb.rowsContainer, Oe(".webview-cover"))),
							(this.fb.style.display = "none"),
							this.D(
								t.$_fb(this.R, (Be) => {
									Be.target.classList.contains("slider") &&
										this.fb &&
										(this.fb.style.display = "block");
								}),
							),
							this.D(
								t.$agb(this.R, () => {
									this.fb && (this.fb.style.display = "none");
								}),
							),
							this.D(
								this.hb.onMouseDown((Be) => {
									Be.element &&
										this.J.fire({ event: Be.browserEvent, target: Be.element });
								}),
							),
							this.D(
								this.hb.onMouseUp((Be) => {
									Be.element &&
										this.I.fire({ event: Be.browserEvent, target: Be.element });
								}),
							),
							this.D(
								this.hb.onDidChangeFocus((Be) => {
									this.G.fire(this),
										this.u.fire(),
										this.w.fire(),
										this.zb.set(!1);
								}),
							),
							this.D(
								this.hb.onContextMenu((Be) => {
									this.kc(Be);
								}),
							),
							this.D(
								this.hb.onDidChangeVisibleRanges(() => {
									this.z.fire();
								}),
							),
							this.D(
								this.hb.onDidScroll((Be) => {
									Be.scrollTop !== Be.oldScrollTop &&
										(this.r.fire(), this.Nc());
								}),
							),
							(this.Gb = this.D(t.$dhb(this.getDomNode()))),
							this.D(
								this.Gb.onDidBlur(() => {
									this.wb.set(!1),
										this.viewModel?.setEditorFocus(!1),
										this.F.fire();
								}),
							),
							this.D(
								this.Gb.onDidFocus(() => {
									this.wb.set(!0),
										this.viewModel?.setEditorFocus(!0),
										this.C.fire();
								}),
							),
							this.mc(),
							this.nc(),
							this.D(
								this.Ub.onDidChangeConfiguration((Be) => {
									Be.affectsConfiguration(
										me.AccessibilityVerbositySettingId.Notebook,
									) && (this.hb.ariaLabel = Ie?.getWidgetAriaLabel());
								}),
							);
					}
					kc(Te) {
						this.Wb.showContextMenu({
							menuId: o.$XX.NotebookCellTitle,
							contextKeyService: this.scopedContextKeyService,
							getAnchor: () => Te.anchor,
						});
					}
					lc() {
						this.Z = this.D(this.Nb.createInstance(J.$o4b, this, this.Y));
					}
					mc() {
						(this.U = this.D(
							this.Nb.createInstance(
								G.$k4b,
								this,
								this.scopedContextKeyService,
								this.Ob,
								this.S,
							),
						)),
							this.D(
								this.U.onDidChangeVisibility(() => {
									this.sb && this.Ib && this.layout(this.sb);
								}),
							);
					}
					nc() {
						this.X = this.D(
							this.Nb.createInstance(fe.$T4b, this.W, this, this.hb, (Te) => {
								this.isDisposed ||
									(this.sb &&
										this.Ib &&
										(Te > 0
											? (this.layout(this.sb),
												this.setScrollTop(this.scrollTop + Te))
											: Te < 0 &&
												(this.setScrollTop(this.scrollTop + Te),
												this.layout(this.sb))),
									this.r.fire());
							}),
						);
					}
					oc() {
						!this.viewModel ||
							!this.db ||
							(this.db.updateOutputRenderers(),
							this.viewModel.viewCells.forEach((Te) => {
								Te.outputsViewModels.forEach((Ee) => {
									Ee.pickedMimeType?.rendererId === X.$X6 && Ee.resetRenderer();
								});
							}));
					}
					getDomNode() {
						return this.R;
					}
					getOverflowContainerDomNode() {
						return this.cb;
					}
					getInnerWebview() {
						return this.db?.webview;
					}
					setEditorProgressService(Te) {
						this.$b = Te;
					}
					setParentContextKeyService(Te) {
						this.scopedContextKeyService.updateParent(Te);
					}
					async setModel(Te, Ee, Ie) {
						if (this.viewModel === void 0 || !this.viewModel.equal(Te)) {
							const Be = this.Ob.computeBottomToolbarDimensions(
								this.viewModel?.viewType,
							);
							this.uc(), await this.zc(Te, Ee, Ie);
							const Se = this.Ob.computeBottomToolbarDimensions(
								this.viewModel?.viewType,
							);
							(Be.bottomToolbarGap !== Se.bottomToolbarGap ||
								Be.bottomToolbarHeight !== Se.bottomToolbarHeight) &&
								(this.bb?.remove(),
								this.ic(),
								this.db?.updateOptions({
									...this.notebookOptions.computeWebviewOptions(),
									fontFamily: this.hc(),
								})),
								this.Xb.publicLog2("notebook/editorOpened", {
									scheme: Te.uri.scheme,
									ext: (0, u.$lh)(Te.uri),
									viewType: Te.viewType,
								});
						} else this.restoreListViewState(Ee);
						this.Gc(Ee),
							this.Pc(),
							this.jb?.clearGlobalDragState(),
							this.pb.add(
								this.hb.onDidChangeFocus(() => {
									this.sc();
								}),
							),
							this.sc(),
							this.qc();
					}
					qc() {
						this.pc ||
							((this.pc = !0),
							t.$egb(t.getWindow(this.getDomNode()), (Te) => {
								this.rc(Te);
							}));
					}
					rc(Te) {
						const Ee = Date.now() + Te.timeRemaining(),
							Ie = () => {
								try {
									if (((this.pc = !0), this.Jb || !this.viewModel)) return;
									const Be = this.viewModel.viewCells.find(
										(Se) =>
											Se.cellKind === X.CellKind.Markup &&
											!this.db?.markupPreviewMapping.has(Se.id) &&
											!this.Vc(Se),
									);
									if (!Be) return;
									this.createMarkupPreview(Be);
								} finally {
									this.pc = !1;
								}
								Date.now() < Ee ? (0, r.$E)(Ie) : this.qc();
							};
						Ie();
					}
					sc() {
						if (!this.viewModel) return;
						const Te = this.hb.getFocusedElements()[0];
						Te &&
							(this.Eb ||
								(this.Eb = this.pb.add(
									this.Nb.createInstance(R.$61b, this, Te),
								)),
							this.Eb.updateForElement(Te));
					}
					async setOptions(Te) {
						if (
							(Te?.isReadOnly !== void 0 && (this.Lb = Te?.isReadOnly),
							!this.viewModel)
						)
							return;
						this.viewModel.updateOptions({ isReadOnly: this.Lb }),
							this.notebookOptions.updateOptions(this.Lb);
						const Ee = Te?.cellOptions ?? this.tc(Te);
						if (Ee) {
							const Ie = this.viewModel.viewCells.find(
								(Be) => Be.uri.toString() === Ee.resource.toString(),
							);
							if (Ie) {
								this.focusElement(Ie);
								const Be = Ee.options?.selection;
								Be
									? (Ie.updateEditState(L.CellEditState.Editing, "setOptions"),
										(Ie.focusMode = L.CellFocusMode.Editor),
										await this.revealRangeInCenterIfOutsideViewportAsync(
											Ie,
											new n.$iL(
												Be.startLineNumber,
												Be.startColumn,
												Be.endLineNumber || Be.startLineNumber,
												Be.endColumn || Be.startColumn,
											),
										))
									: this.hb.revealCell(
											Ie,
											Te?.cellRevealType ??
												L.CellRevealType.CenterIfOutsideViewport,
										);
								const Se = this.lb.get(Ie);
								if (Se) {
									if (Ee.options?.selection) {
										const { selection: ke } = Ee.options,
											Ue = new n.$iL(
												ke.startLineNumber,
												ke.startColumn,
												ke.endLineNumber || ke.startLineNumber,
												ke.endColumn || ke.startColumn,
											);
										Se.setSelection(Ue),
											Se.revealPositionInCenterIfOutsideViewport({
												lineNumber: ke.startLineNumber,
												column: ke.startColumn,
											}),
											await this.revealRangeInCenterIfOutsideViewportAsync(
												Ie,
												Ue,
											);
									}
									Ee.options?.preserveFocus || Se.focus();
								}
							}
						}
						if (Te?.cellSelections) {
							const Ie = Te.cellSelections[0].start,
								Be = this.viewModel.cellAt(Ie);
							Be &&
								(this.viewModel.updateSelectionsState({
									kind: X.SelectionStateType.Index,
									focus: { start: Ie, end: Ie + 1 },
									selections: Te.cellSelections,
								}),
								this.revealInCenterIfOutsideViewport(Be));
						}
						this.wc(), this.n.fire();
					}
					tc(Te) {
						if (Te?.indexedCellOptions) {
							const Ee = this.cellAt(Te.indexedCellOptions.index);
							if (Ee)
								return {
									resource: Ee.uri,
									options: {
										selection: Te.indexedCellOptions.selection,
										preserveFocus: !1,
									},
								};
						}
					}
					uc() {
						this.pb.clear(),
							(0, m.$Vc)(this.qb),
							this.hb.detachViewModel(),
							this.viewModel?.dispose(),
							(this.viewModel = void 0),
							this.db?.dispose(),
							this.db?.element.remove(),
							(this.db = null),
							this.hb.clear();
					}
					wc() {
						this.viewModel &&
							(this.yb.set(!this.viewModel.options.isReadOnly),
							this.cb.classList.toggle(
								"notebook-editor-editable",
								!this.viewModel.options.isReadOnly,
							),
							this.getDomNode().classList.toggle(
								"notebook-editor-editable",
								!this.viewModel.options.isReadOnly,
							));
					}
					async xc() {
						return this.textModel
							? this.eb
								? this.eb
								: (this.db ||
										this.yc(
											this.getId(),
											this.textModel.viewType,
											this.textModel.uri,
										),
									(this.eb = (async () => {
										if (!this.db)
											throw new Error(
												"Notebook output webview object is not created successfully.",
											);
										if (
											(await this.db.createWebview(
												this.creationOptions.codeWindow ?? i.$Bfb,
											),
											!this.db.webview)
										)
											throw new Error(
												"Notebook output webview element was not created successfully.",
											);
										return (
											this.pb.add(
												this.db.webview.onDidBlur(() => {
													this.xb.set(!1),
														(this.Hb = !1),
														this.updateEditorFocus(),
														this.updateCellFocusMode();
												}),
											),
											this.pb.add(
												this.db.webview.onDidFocus(() => {
													this.xb.set(!0),
														this.updateEditorFocus(),
														(this.Hb = !0);
												}),
											),
											this.pb.add(
												this.db.onMessage((Te) => {
													this.L.fire(Te);
												}),
											),
											this.db
										);
									})()),
									this.eb)
							: null;
					}
					yc(Te, Ee, Ie) {
						if (this.db) return;
						const Be = this;
						(this.db = this.Nb.createInstance(
							U.$X2b,
							{
								get creationOptions() {
									return Be.creationOptions;
								},
								setScrollTop(Se) {
									Be.hb.scrollTop = Se;
								},
								triggerScroll(Se) {
									Be.hb.triggerScrollFromMouseWheelEvent(Se);
								},
								getCellByInfo: Be.getCellByInfo.bind(Be),
								getCellById: Be.ad.bind(Be),
								toggleNotebookCellSelection: Be.Rc.bind(Be),
								focusNotebookCell: Be.focusNotebookCell.bind(Be),
								focusNextNotebookCell: Be.focusNextNotebookCell.bind(Be),
								updateOutputHeight: Be.Yc.bind(Be),
								scheduleOutputHeightAck: Be.$c.bind(Be),
								updateMarkupCellHeight: Be.bd.bind(Be),
								setMarkupCellEditState: Be.cd.bind(Be),
								didStartDragMarkupCell: Be.dd.bind(Be),
								didDragMarkupCell: Be.ed.bind(Be),
								didDropMarkupCell: Be.fd.bind(Be),
								didEndDragMarkupCell: Be.gd.bind(Be),
								didResizeOutput: Be.hd.bind(Be),
								updatePerformanceMetadata: Be.jd.bind(Be),
								didFocusOutputInputChange:
									Be._didFocusOutputInputChange.bind(Be),
							},
							Te,
							Ee,
							Ie,
							{ ...this.Ob.computeWebviewOptions(), fontFamily: this.hc() },
							this.Qb.getScoped(this.Fb),
						)),
							(this.db.element.style.width = "100%"),
							this.hb.attachWebview(this.db.element);
					}
					async zc(Te, Ee, Ie) {
						this.yc(this.getId(), Te.viewType, Te.uri),
							(this.viewModel = this.Nb.createInstance(
								q.$r2b,
								Te.viewType,
								Te,
								this.nb,
								this.getLayoutInfo(),
								{ isReadOnly: this.Lb, inRepl: this.Mb },
							)),
							this.nb.eventDispatcher.emit([
								new A.$IIb({ width: !0, fontInfo: !0 }, this.getLayoutInfo()),
							]),
							this.notebookOptions.updateOptions(this.Lb),
							this.wc(),
							this.ec();
						{
							this.viewModel.restoreEditorViewState(Ee);
							const Se = Ee?.contributionsState || {};
							for (const [ke, Ue] of this.Bb)
								typeof Ue.restoreViewState == "function" &&
									Ue.restoreViewState(Se[ke]);
						}
						this.pb.add(
							this.viewModel.onDidChangeViewCells((Se) => {
								this.g.fire(Se);
							}),
						),
							this.pb.add(
								this.viewModel.onDidChangeSelection(() => {
									this.y.fire(), this.Wc();
								}),
							),
							this.pb.add(
								this.hb.onWillScroll((Se) => {
									this.db?.isResolved() &&
										(this.fb.style.transform = `translateY(${Se.scrollTop})`);
								}),
							);
						let Be = !1;
						this.pb.add(
							this.hb.onDidChangeContentHeight(() => {
								Be ||
									((Be = !0),
									this.pb.add(
										t.$hgb(
											t.getWindow(this.getDomNode()),
											() => {
												(Be = !1), this.Xc();
											},
											100,
										),
									));
							}),
						),
							this.pb.add(
								this.hb.onDidRemoveOutputs((Se) => {
									Se.forEach((ke) => this.removeInset(ke));
								}),
							),
							this.pb.add(
								this.hb.onDidHideOutputs((Se) => {
									Se.forEach((ke) => this.hideInset(ke));
								}),
							),
							this.pb.add(
								this.hb.onDidRemoveCellsFromView((Se) => {
									const ke = [],
										Ue = [];
									for (const qe of Se)
										if (qe.cellKind === X.CellKind.Markup) {
											const Ae = qe;
											this.viewModel?.viewCells.find(
												(Me) => Me.handle === Ae.handle,
											)
												? ke.push(Ae)
												: Ue.push(Ae);
										}
									this.hideMarkupPreviews(ke), this.deleteMarkupPreviews(Ue);
								}),
							),
							await this.Dc(this.viewModel, Ee, Ie),
							Ie?.mark("customMarkdownLoaded"),
							(this.qb = this.viewModel.viewCells.map((Se) => this.Ac(Se))),
							(this.Bc =
								this.viewModel.viewCells.find(
									(Se) =>
										this.getActiveCell() === Se &&
										Se.focusMode === L.CellFocusMode.Editor,
								) ?? null),
							this.pb.add(
								this.viewModel.onDidChangeViewCells((Se) => {
									this.Jb ||
										([...Se.splices].reverse().forEach((ke) => {
											const [Ue, qe, Ae] = ke,
												Me = this.qb.splice(
													Ue,
													qe,
													...Ae.map((De) => this.Ac(De)),
												);
											(0, m.$Vc)(Me);
										}),
										Se.splices.some((ke) =>
											ke[2].some((Ue) => Ue.cellKind === X.CellKind.Markup),
										) && this.qc());
								}),
							),
							this.sb
								? this.hb.layout(this.Ic(this.sb.height), this.sb.width)
								: this.hb.layout(),
							this.jb?.clearGlobalDragState(),
							this.restoreListViewState(Ee);
					}
					Ac(Te) {
						const Ee = new m.$Zc();
						return (
							Ee.add(
								Te.onDidChangeLayout((Ie) => {
									(Ie.totalHeight || Ie.outerWidth) &&
										this.layoutNotebookCell(
											Te,
											Te.layoutInfo.totalHeight,
											Ie.context,
										);
								}),
							),
							Te.cellKind === X.CellKind.Code &&
								Ee.add(
									Te.onDidRemoveOutputs((Ie) => {
										Ie.forEach((Be) => this.removeInset(Be));
									}),
								),
							Ee.add(
								Te.onDidChangeState((Ie) => {
									Ie.inputCollapsedChanged &&
										Te.isInputCollapsed &&
										Te.cellKind === X.CellKind.Markup &&
										this.hideMarkupPreviews([Te]),
										Ie.outputCollapsedChanged &&
											Te.isOutputCollapsed &&
											Te.cellKind === X.CellKind.Code &&
											Te.outputsViewModels.forEach((Be) => this.hideInset(Be)),
										Ie.focusModeChanged && this.Cc(Te);
								}),
							),
							Ee
						);
					}
					Cc(Te) {
						Te.focusMode === L.CellFocusMode.Editor &&
							(this.Bc &&
								this.Bc !== Te &&
								(this.Bc.focusMode = L.CellFocusMode.Container),
							(this.Bc = Te));
					}
					async Dc(Te, Ee, Ie) {
						this.ac.debug(
							"NotebookEditorWidget",
							"warmup " + this.viewModel?.uri.toString(),
						),
							await this.xc(),
							Ie?.mark("webviewCommLoaded"),
							this.ac.debug(
								"NotebookEditorWidget",
								"warmup - webview resolved",
							),
							(this.db.element.style.visibility = "hidden"),
							await this.Ec(Te, Ee),
							this.ac.debug(
								"NotebookEditorWidget",
								"warmup - viewport warmed up",
							),
							this.hb.layout(0, 0),
							this.hb.attachViewModel(Te),
							(this.hb.scrollTop = Ee?.scrollPosition?.top ?? 0),
							this.dc("finish initial viewport warmup and view state restore."),
							(this.db.element.style.visibility = "visible"),
							this.ac.debug(
								"NotebookEditorWidget",
								"warmup - list view model attached, set to visible",
							),
							this.m.fire();
					}
					async Ec(Te, Ee) {
						if (Ee && Ee.cellTotalHeights) {
							const Ie = Ee.cellTotalHeights,
								Be = Ee.scrollPosition?.top ?? 0,
								Se = Be + Math.max(this.sb?.height ?? 0, 1080);
							let ke = 0;
							const Ue = [];
							for (let qe = 0; qe < Te.length; qe++) {
								const Ae = Te.cellAt(qe),
									Me = Ie[qe] ?? 0;
								if (ke + Me < Be) {
									ke += Me;
									continue;
								}
								if (
									(Ae.cellKind === X.CellKind.Markup && Ue.push([Ae, ke]),
									(ke += Me),
									ke > Se)
								)
									break;
							}
							await this.db.initializeMarkup(
								Ue.map(([qe, Ae]) => this.Fc(qe, Ae)),
							);
						} else {
							const Ie = Te.viewCells
								.filter((Ue) => Ue.cellKind === X.CellKind.Markup)
								.slice(0, 5)
								.map((Ue) => this.Fc(Ue, -1e4));
							await this.db.initializeMarkup(Ie);
							let Be = 0;
							const Se = [],
								ke = Math.max(this.sb?.height ?? 0, 1080);
							for (const Ue of Te.viewCells)
								if (
									(Ue.cellKind === X.CellKind.Markup &&
										Se.push({ id: Ue.id, top: Be }),
									(Be += Ue.getHeight(
										this.getLayoutInfo().fontInfo.lineHeight,
									)),
									Be > ke)
								)
									break;
							this.db?.updateScrollTops([], Se);
						}
					}
					Fc(Te, Ee) {
						return {
							mime: Te.mime,
							cellId: Te.id,
							cellHandle: Te.handle,
							content: Te.getText(),
							offset: Ee,
							visible: !1,
							metadata: Te.metadata,
						};
					}
					restoreListViewState(Te) {
						if (!this.viewModel) return;
						Te?.scrollPosition !== void 0
							? ((this.hb.scrollTop = Te.scrollPosition.top),
								(this.hb.scrollLeft = Te.scrollPosition.left))
							: ((this.hb.scrollTop = 0), (this.hb.scrollLeft = 0));
						const Ee = typeof Te?.focus == "number" ? Te.focus : 0;
						if (Ee < this.viewModel.length) {
							const Ie = this.viewModel.cellAt(Ee);
							Ie &&
								this.viewModel?.updateSelectionsState({
									kind: X.SelectionStateType.Handle,
									primary: Ie.handle,
									selections: [Ie.handle],
								});
						} else
							this.hb.length > 0 &&
								this.viewModel.updateSelectionsState({
									kind: X.SelectionStateType.Index,
									focus: { start: 0, end: 1 },
									selections: [{ start: 0, end: 1 }],
								});
						if (Te?.editorFocused) {
							const Ie = this.viewModel.cellAt(Ee);
							Ie && (Ie.focusMode = L.CellFocusMode.Editor);
						}
					}
					Gc(Te) {
						if (Te?.selectedKernelId && this.textModel) {
							const Ee = this.Sb.getMatchingKernel(this.textModel),
								Ie = Ee.all.find((Be) => Be.id === Te.selectedKernelId);
							Ie &&
								!Ee.selected &&
								this.Sb.selectKernelForNotebook(Ie, this.textModel);
						}
					}
					getEditorViewState() {
						const Te = this.viewModel?.getEditorViewState();
						if (!Te)
							return {
								editingCells: {},
								cellLineNumberStates: {},
								editorViewStates: {},
								collapsedInputCells: {},
								collapsedOutputCells: {},
							};
						if (this.hb) {
							Te.scrollPosition = {
								left: this.hb.scrollLeft,
								top: this.hb.scrollTop,
							};
							const Ie = {};
							for (let Be = 0; Be < this.viewModel.length; Be++) {
								const Se = this.viewModel.cellAt(Be);
								Ie[Be] = Se.layoutInfo.totalHeight;
							}
							if (((Te.cellTotalHeights = Ie), this.viewModel)) {
								const Be = this.viewModel.getFocus(),
									Se = this.viewModel.cellAt(Be.start);
								if (Se) {
									const ke = this.hb.domElementOfElement(Se),
										Ue =
											Se.getEditState() === L.CellEditState.Editing &&
											!!(
												ke &&
												ke.ownerDocument.activeElement &&
												ke.contains(ke.ownerDocument.activeElement)
											);
									(Te.editorFocused = Ue), (Te.focus = Be.start);
								}
							}
						}
						const Ee = {};
						for (const [Ie, Be] of this.Bb)
							typeof Be.saveViewState == "function" &&
								(Ee[Ie] = Be.saveViewState());
						return (
							(Te.contributionsState = Ee),
							this.textModel?.uri.scheme === $e.Schemas.untitled &&
								(Te.selectedKernelId = this.activeKernel?.id),
							Te
						);
					}
					Hc() {
						return this.Cb && !this.isEmbedded;
					}
					Ic(Te) {
						return Math.max(Te - (this.U?.useGlobalToolbar ? 26 : 0), 0);
					}
					layout(Te, Ee, Ie) {
						if (!Ee && this.vb === null) {
							(this.sb = Te), (this.tb = Ie);
							return;
						}
						if (Te.width <= 0 || Te.height <= 0) {
							this.onWillHide();
							return;
						}
						const Be = this.Vb.whenContainerStylesLoaded(
							t.getWindow(this.getDomNode()),
						);
						Be ? Be.then(() => this.Jc(Te, Ee, Ie)) : this.Jc(Te, Ee, Ie);
					}
					Jc(Te, Ee, Ie) {
						if (
							(Ee && this.Kc(Ee, Te, Ie),
							this.vb && this.vb.width <= 0 && this.vb.height <= 0)
						) {
							this.onWillHide();
							return;
						}
						(this.sb = Te), (this.tb = Ie);
						const Be = this.Ic(Te.height) - this.getLayoutInfo().stickyHeight;
						t.size(this.ab, Te.width, Be);
						const Se = Be;
						this.hb.getRenderHeight() < Se
							? (this.hb.updateOptions({
									paddingBottom: this.Hc() ? Math.max(0, Se - 50) : 0,
									paddingTop: 0,
								}),
								this.hb.layout(Se, Te.width))
							: (this.hb.layout(Se, Te.width),
								this.hb.updateOptions({
									paddingBottom: this.Hc() ? Math.max(0, Se - 50) : 0,
									paddingTop: 0,
								})),
							(this.R.inert = !1),
							(this.R.style.visibility = "visible"),
							(this.R.style.display = "block"),
							(this.R.style.position = "absolute"),
							(this.R.style.overflow = "hidden"),
							this.Lc(Te, Ie),
							this.fb &&
								((this.fb.style.height = `${Te.height}px`),
								(this.fb.style.width = `${Te.width}px`)),
							this.U.layout(this.sb),
							this.Z.layout(),
							this.nb?.eventDispatcher.emit([
								new A.$IIb({ width: !0, fontInfo: !0 }, this.getLayoutInfo()),
							]);
					}
					Kc(Te, Ee, Ie) {
						if (((this.ub = Te), Ee && Ie))
							this.vb = {
								height: Ee.height,
								width: Ee.width,
								top: Ie.top,
								left: Ie.left,
							};
						else {
							const Be = Te.getBoundingClientRect();
							this.vb = {
								height: Be.height,
								width: Be.width,
								top: Be.top,
								left: Be.left,
							};
						}
					}
					Lc(Te, Ee) {
						if (Te && Ee) {
							(this.R.style.top = `${Ee.top}px`),
								(this.R.style.left = `${Ee.left}px`),
								(this.R.style.width = `${Te.width}px`),
								(this.R.style.height = `${Te.height}px`);
							return;
						}
						if (!this.vb) return;
						const Ie = this.R.parentElement?.getBoundingClientRect();
						(this.R.style.top = `${this.vb.top - (Ie?.top || 0)}px`),
							(this.R.style.left = `${this.vb.left - (Ie?.left || 0)}px`),
							(this.R.style.width = `${Te ? Te.width : this.vb.width}px`),
							(this.R.style.height = `${Te ? Te.height : this.vb.height}px`);
					}
					focus() {
						if (((this.Ib = !0), this.wb.set(!0), this.Hb))
							this.db?.focusWebview();
						else {
							if (this.viewModel) {
								const Te = this.viewModel.getFocus(),
									Ee = this.viewModel.cellAt(Te.start);
								if (
									(this.hasEditorFocus() ||
										(this.focusContainer(), this.updateEditorFocus()),
									Ee && Ee.focusMode === L.CellFocusMode.Editor)
								) {
									Ee.updateEditState(
										L.CellEditState.Editing,
										"editorWidget.focus",
									),
										(Ee.focusMode = L.CellFocusMode.Editor),
										this.Mc(Ee);
									return;
								}
							}
							this.hb.domFocus();
						}
						this.Pb && this.showProgress();
					}
					onShow() {
						this.Ib = !0;
					}
					Mc(Te) {
						for (const [Ee, Ie] of this.lb.entries())
							if (Ee === Te) {
								Ie.focus();
								return;
							}
					}
					focusContainer(Te = !1) {
						this.Hb ? this.db?.focusWebview() : this.hb.focusContainer(Te);
					}
					selectOutputContent(Te) {
						this.db?.selectOutputContents(Te);
					}
					selectInputContents(Te) {
						this.db?.selectInputContents(Te);
					}
					onWillHide() {
						(this.Ib = !1),
							this.wb.set(!1),
							(this.R.inert = !0),
							(this.R.style.visibility = "hidden"),
							(this.R.style.left = "-50000px"),
							(this.S.style.display = "none"),
							this.Nc();
					}
					Nc() {
						this.lb.forEach((Te, Ee) => {
							this.getActiveCell() === Ee &&
								Te &&
								(g.$KDb.get(Te)?.cancelSuggestWidget(),
								ye.$g3b.get(Te)?.clearWidgets(),
								ue.$zAb.get(Te)?.clearWidgets());
						});
					}
					Oc() {
						return t.$Lgb(this.getDomNode());
					}
					updateEditorFocus() {
						this.Gb.refreshState();
						const Te = this.Oc();
						this.wb.set(Te), this.viewModel?.setEditorFocus(Te);
					}
					updateCellFocusMode() {
						const Te = this.getActiveCell();
						Te?.focusMode === L.CellFocusMode.Output &&
							!this.Hb &&
							(Te.focusMode = L.CellFocusMode.Container);
					}
					hasEditorFocus() {
						return this.updateEditorFocus(), this.Oc();
					}
					hasWebviewFocus() {
						return this.Hb;
					}
					hasOutputTextSelection() {
						if (!this.hasEditorFocus()) return !1;
						const Te = t.getWindow(this.getDomNode()).getSelection();
						if (Te?.rangeCount !== 1) return !1;
						const Ee = Te.getRangeAt(0);
						if (
							Ee.startContainer === Ee.endContainer &&
							Ee.endOffset - Ee.startOffset === 0
						)
							return !1;
						let Ie = Ee.commonAncestorContainer;
						if (!this.ab.contains(Ie)) return !1;
						for (; Ie && Ie !== this.ab; ) {
							if (Ie.classList && Ie.classList.contains("output")) return !0;
							Ie = Ie.parentNode;
						}
						return !1;
					}
					_didFocusOutputInputChange(Te) {
						this.Ab.set(Te);
					}
					focusElement(Te) {
						this.viewModel?.updateSelectionsState({
							kind: X.SelectionStateType.Handle,
							primary: Te.handle,
							selections: [Te.handle],
						});
					}
					get scrollTop() {
						return this.hb.scrollTop;
					}
					get scrollBottom() {
						return this.hb.scrollTop + this.hb.getRenderHeight();
					}
					getAbsoluteTopOfElement(Te) {
						return this.hb.getCellViewScrollTop(Te);
					}
					getHeightOfElement(Te) {
						return this.hb.elementHeight(Te);
					}
					scrollToBottom() {
						this.hb.scrollToBottom();
					}
					setScrollTop(Te) {
						this.hb.scrollTop = Te;
					}
					revealCellRangeInView(Te) {
						return this.hb.revealCells(Te);
					}
					revealInView(Te) {
						return this.hb.revealCell(Te, L.CellRevealType.Default);
					}
					revealInViewAtTop(Te) {
						this.hb.revealCell(Te, L.CellRevealType.Top);
					}
					revealInCenter(Te) {
						this.hb.revealCell(Te, L.CellRevealType.Center);
					}
					async revealInCenterIfOutsideViewport(Te) {
						await this.hb.revealCell(
							Te,
							L.CellRevealType.CenterIfOutsideViewport,
						);
					}
					async revealFirstLineIfOutsideViewport(Te) {
						await this.hb.revealCell(
							Te,
							L.CellRevealType.FirstLineIfOutsideViewport,
						);
					}
					async revealLineInViewAsync(Te, Ee) {
						return this.hb.revealRangeInCell(
							Te,
							new n.$iL(Ee, 1, Ee, 1),
							L.CellRevealRangeType.Default,
						);
					}
					async revealLineInCenterAsync(Te, Ee) {
						return this.hb.revealRangeInCell(
							Te,
							new n.$iL(Ee, 1, Ee, 1),
							L.CellRevealRangeType.Center,
						);
					}
					async revealLineInCenterIfOutsideViewportAsync(Te, Ee) {
						return this.hb.revealRangeInCell(
							Te,
							new n.$iL(Ee, 1, Ee, 1),
							L.CellRevealRangeType.CenterIfOutsideViewport,
						);
					}
					async revealRangeInViewAsync(Te, Ee) {
						return this.hb.revealRangeInCell(
							Te,
							Ee,
							L.CellRevealRangeType.Default,
						);
					}
					async revealRangeInCenterAsync(Te, Ee) {
						return this.hb.revealRangeInCell(
							Te,
							Ee,
							L.CellRevealRangeType.Center,
						);
					}
					async revealRangeInCenterIfOutsideViewportAsync(Te, Ee) {
						return this.hb.revealRangeInCell(
							Te,
							Ee,
							L.CellRevealRangeType.CenterIfOutsideViewport,
						);
					}
					revealCellOffsetInCenter(Te, Ee) {
						return this.hb.revealCellOffsetInCenter(Te, Ee);
					}
					revealOffsetInCenterIfOutsideViewport(Te) {
						return this.hb.revealOffsetInCenterIfOutsideViewport(Te);
					}
					getViewIndexByModelIndex(Te) {
						if (!this.ib) return -1;
						const Ee = this.viewModel?.viewCells[Te];
						return Ee ? this.ib.getViewIndex(Ee) : -1;
					}
					getViewHeight(Te) {
						return this.ib ? this.ib.getViewHeight(Te) : -1;
					}
					getCellRangeFromViewRange(Te, Ee) {
						return this.ib.getCellRangeFromViewRange(Te, Ee);
					}
					getCellsInRange(Te) {
						return this.ib.getCellsInRange(Te);
					}
					setCellEditorSelection(Te, Ee) {
						this.hb.setCellEditorSelection(Te, Ee);
					}
					setHiddenAreas(Te) {
						return this.hb.setHiddenAreas(Te, !0);
					}
					getVisibleRangesPlusViewportAboveAndBelow() {
						return this.ib.getVisibleRangesPlusViewportAboveAndBelow();
					}
					deltaCellDecorations(Te, Ee) {
						const Ie = this.viewModel?.deltaCellDecorations(Te, Ee) || [];
						return this.q.fire(), Ie;
					}
					deltaCellContainerClassNames(Te, Ee, Ie) {
						this.db?.deltaCellContainerClassNames(Te, Ee, Ie);
					}
					changeModelDecorations(Te) {
						return this.viewModel?.changeModelDecorations(Te) || null;
					}
					changeViewZones(Te) {
						this.hb.changeViewZones(Te);
					}
					async Pc() {
						if (!this.hasModel()) return;
						const { selected: Te } = this.Sb.getMatchingKernel(this.textModel);
						this.db?.isResolved() || (await this.xc()),
							this.db?.updateKernelPreloads(Te);
					}
					get activeKernel() {
						return (
							this.textModel &&
							this.Sb.getSelectedOrSuggestedKernel(this.textModel)
						);
					}
					async cancelNotebookCells(Te) {
						if (!(!this.viewModel || !this.hasModel()))
							return (
								Te || (Te = this.viewModel.viewCells),
								this.Yb.cancelNotebookCellHandles(
									this.textModel,
									Array.from(Te).map((Ee) => Ee.handle),
								)
							);
					}
					async executeNotebookCells(Te) {
						if (!this.viewModel || !this.hasModel()) {
							this.ac.info(
								"notebookEditorWidget",
								"No NotebookViewModel, cannot execute cells",
							);
							return;
						}
						return (
							Te || (Te = this.viewModel.viewCells),
							this.Yb.executeNotebookCells(
								this.textModel,
								Array.from(Te).map((Ee) => Ee.model),
								this.scopedContextKeyService,
							)
						);
					}
					async layoutNotebookCell(Te, Ee, Ie) {
						if (
							(this.dc("layout cell", Te.handle, Ee),
							this.hb.getViewIndex(Te) === void 0)
						)
							return;
						this.Qc?.has(Te) && this.Qc?.get(Te).dispose();
						const Se = new w.$0h(),
							ke = () => {
								if (
									!this.Jb &&
									this.viewModel?.hasCell(Te) &&
									this.hb.getViewIndex(Te) !== void 0 &&
									this.hb.elementHeight(Te) !== Ee
								) {
									if ((this.Qc?.delete(Te), !this.hasEditorFocus())) {
										const Ue = this.viewModel?.getCellIndex(Te),
											qe = this.visibleRanges;
										if (
											Ue !== void 0 &&
											qe &&
											qe.length &&
											qe[0].start === Ue &&
											this.hb.scrollTop > this.getAbsoluteTopOfElement(Te)
										)
											return this.hb.updateElementHeight2(
												Te,
												Ee,
												Math.min(Ue + 1, this.getLength() - 1),
											);
									}
									this.hb.updateElementHeight2(Te, Ee), Se.complete(void 0);
								}
							};
						if (this.hb.inRenderingTransaction) {
							const Ue = t.$hgb(t.getWindow(this.getDomNode()), ke);
							this.Qc?.set(
								Te,
								(0, m.$Yc)(() => {
									Ue.dispose(), Se.complete(void 0);
								}),
							);
						} else ke();
						return Se.p;
					}
					getActiveCell() {
						const Te = this.hb.getFocusedElements();
						if (Te && Te.length) return Te[0];
					}
					Rc(Te, Ee) {
						const Ie = this.hb.getSelectedElements(),
							Be = Ie.includes(Te),
							Se = Ee ? (Ie[Ie.length - 1] ?? Te) : Te,
							ke = this.hb.getViewIndex(Te),
							Ue = this.hb.getViewIndex(Se),
							qe = this.Sc(ke, Ue);
						Be
							? this.hb.selectElements(Ie.filter((Ae) => !qe.includes(Ae)))
							: (this.focusElement(Te),
								this.hb.selectElements([
									...Ie.filter((Ae) => !qe.includes(Ae)),
									...qe,
								]));
					}
					Sc(Te, Ee) {
						const Ie = [];
						for (let Be = 0; Be < this.hb.length; ++Be) {
							const Se = this.hb.element(Be);
							Se &&
								((Be >= Te && Be <= Ee) || (Be >= Ee && Be <= Te)) &&
								Ie.push(Se);
						}
						return Ie;
					}
					async focusNotebookCell(Te, Ee, Ie) {
						if (!this.Jb)
							if (((Te.focusedOutputId = void 0), Ee === "editor")) {
								if (
									(this.focusElement(Te),
									this.hb.focusView(),
									Te.updateEditState(
										L.CellEditState.Editing,
										"focusNotebookCell",
									),
									(Te.focusMode = L.CellFocusMode.Editor),
									!Ie?.skipReveal)
								)
									if (typeof Ie?.focusEditorLine == "number") {
										this.zb.set(!0),
											await this.revealLineInViewAsync(Te, Ie.focusEditorLine);
										const Be = this.lb.get(Te),
											Se = Ie.focusEditorLine;
										Be?.setSelection({
											startLineNumber: Se,
											startColumn: 1,
											endLineNumber: Se,
											endColumn: 1,
										});
									} else {
										const Be = Te.getSelectionsStartPosition();
										if (Be?.length) {
											const Se = Be[0];
											await this.revealRangeInViewAsync(
												Te,
												n.$iL.fromPositions(Se, Se),
											);
										} else await this.revealInView(Te);
									}
							} else if (Ee === "output") {
								if (
									(this.focusElement(Te),
									this.hasEditorFocus() || this.hb.focusView(),
									!this.db)
								)
									return;
								const Be = Te.outputsViewModels.find(
										(ke) => ke.model.alternativeOutputId,
									)?.model.alternativeOutputId,
									Se = Ie?.outputId ?? Be ?? Te.id;
								this.db.focusOutput(
									Se,
									Ie?.altOutputId,
									Ie?.outputWebviewFocused || this.Hb,
								),
									Te.updateEditState(
										L.CellEditState.Preview,
										"focusNotebookCell",
									),
									(Te.focusMode = L.CellFocusMode.Output),
									(Te.focusedOutputId = Ie?.outputId),
									this.xb.set(!0),
									Ie?.skipReveal || this.revealInCenterIfOutsideViewport(Te);
							} else {
								const Be = this.hb.domElementOfElement(Te);
								Be &&
									Be.ownerDocument.activeElement &&
									Be.contains(Be.ownerDocument.activeElement) &&
									Be.ownerDocument.activeElement.blur(),
									this.db?.blurOutput(),
									Te.updateEditState(
										L.CellEditState.Preview,
										"focusNotebookCell",
									),
									(Te.focusMode = L.CellFocusMode.Container),
									this.focusElement(Te),
									Ie?.skipReveal ||
										(typeof Ie?.focusEditorLine == "number"
											? (this.zb.set(!0), await this.revealInView(Te))
											: Ie?.revealBehavior ===
													L.ScrollToRevealBehavior.firstLine
												? await this.revealFirstLineIfOutsideViewport(Te)
												: Ie?.revealBehavior ===
														L.ScrollToRevealBehavior.fullCell
													? await this.revealInView(Te)
													: await this.revealInCenterIfOutsideViewport(Te)),
									this.hb.focusView(),
									this.updateEditorFocus();
							}
					}
					async focusNextNotebookCell(Te, Ee) {
						const Ie = this.viewModel?.getCellIndex(Te);
						if (typeof Ie != "number") return;
						const Be = this.viewModel?.cellAt(Ie + 1);
						Be && (await this.focusNotebookCell(Be, Ee));
					}
					async Tc(Te) {
						if (Te.isOutputCollapsed) return;
						const Ee = Te.outputsViewModels;
						for (const Ie of Ee.slice(0, F.$21b)) {
							const [Be, Se] = Ie.resolveMimeTypes(this.textModel, void 0);
							if (!Be.find((Me) => Me.isTrusted) || Be.length === 0) continue;
							const ke = Be[Se];
							if (!ke) return;
							const Ue = this.Tb.getRendererInfo(ke.rendererId);
							if (!Ue) return;
							const qe = {
									type: L.RenderOutputType.Extension,
									renderer: Ue,
									source: Ie,
									mimeType: ke.mimeType,
								},
								Ae = this.db?.insetMapping.get(qe.source);
							if (!Ae || !Ae.initialized) {
								const Me = new Promise((De) => {
									this.D(
										d.Event.any(
											this.N,
											this.P,
										)((Re) => {
											Re.model === qe.source.model && De();
										}),
									);
								});
								this.createOutput(Te, qe, 0, !1), await Me;
							} else this.createOutput(Te, qe, 0, !1);
							return;
						}
					}
					async Uc(Te) {
						if (!this.hasModel() || !this.viewModel) return;
						const Ee = this.viewModel.viewCells,
							Ie = [];
						for (let Be = 0; Be < Ee.length; Be++)
							Ee[Be].cellKind === X.CellKind.Markup &&
								!this.db.markupPreviewMapping.has(Ee[Be].id) &&
								Ie.push(this.createMarkupPreview(Ee[Be]));
						if (Te && this.hb)
							for (let Be = 0; Be < this.hb.length; Be++) {
								const Se = this.hb.element(Be);
								Se?.cellKind === X.CellKind.Code && Ie.push(this.Tc(Se));
							}
						return Promise.all(Ie);
					}
					async find(Te, Ee, Ie, Be = !1, Se = !1, ke) {
						if (!this.ob) return [];
						ke || (ke = this.getId());
						const Ue = this.ob.find(Te, Ee).filter((Me) => Me.length > 0);
						if (
							(!Ee.includeMarkupPreview && !Ee.includeOutput) ||
							Ee.findScope?.findScopeType === X.NotebookFindScopeType.Text
						)
							return this.db?.findStop(ke), Ue;
						const qe = {};
						if (
							(Ue.forEach((Me) => {
								qe[Me.cell.id] = Me;
							}),
							this.db)
						) {
							const Me = Date.now();
							await this.Uc(!!Ee.includeOutput);
							const De = Date.now();
							if (
								(this.ac.debug("Find", `Warmup time: ${De - Me}ms`),
								Ie.isCancellationRequested)
							)
								return [];
							let Re = [];
							Ee.findScope &&
								Ee.findScope.findScopeType === X.NotebookFindScopeType.Cells &&
								Ee.findScope.selectedCellRanges &&
								(Re = (0, te.$j6)(Ee.findScope.selectedCellRanges).map(
									(Ze) => this.ob?.viewCells[Ze].id ?? "",
								));
							const je = await this.db.find(Te, {
								caseSensitive: Ee.caseSensitive,
								wholeWord: Ee.wholeWord,
								includeMarkup: !!Ee.includeMarkupPreview,
								includeOutput: !!Ee.includeOutput,
								shouldGetSearchPreviewInfo: Se,
								ownerID: ke,
								findIds: Re,
							});
							if (Ie.isCancellationRequested) return [];
							je.forEach((Ve) => {
								const Ze = this.ob.viewCells.find((rt) => rt.id === Ve.cellId);
								if (!Ze) return;
								if (Ve.type === "preview") {
									if (
										(Ze.getEditState() === L.CellEditState.Preview &&
											!Ee.includeMarkupPreview) ||
										(Ze.getEditState() === L.CellEditState.Editing &&
											Ee.includeMarkupInput)
									)
										return;
								} else if (!Ee.includeOutput) return;
								const et = qe[Ve.cellId];
								et
									? et.webviewMatches.push(Ve)
									: (qe[Ve.cellId] = new ae.$o2b(
											this.ob.viewCells.find((rt) => rt.id === Ve.cellId),
											this.ob.viewCells.findIndex((rt) => rt.id === Ve.cellId),
											[],
											[Ve],
										));
							});
						}
						const Ae = [];
						return (
							this.ob.viewCells.forEach((Me, De) => {
								qe[Me.id] &&
									Ae.push(
										new ae.$o2b(
											Me,
											De,
											qe[Me.id].contentMatches,
											qe[Me.id].webviewMatches,
										),
									);
							}),
							Ae
						);
					}
					async findHighlightCurrent(Te, Ee) {
						return this.db
							? this.db?.findHighlightCurrent(Te, Ee ?? this.getId())
							: 0;
					}
					async findUnHighlightCurrent(Te, Ee) {
						if (this.db)
							return this.db?.findUnHighlightCurrent(Te, Ee ?? this.getId());
					}
					findStop(Te) {
						this.db?.findStop(Te ?? this.getId());
					}
					getLayoutInfo() {
						if (!this.hb)
							throw new Error("Editor is not initalized successfully");
						return (
							this.rb || this.fc(),
							{
								width: this.sb?.width ?? 0,
								height: this.sb?.height ?? 0,
								scrollHeight: this.hb?.getScrollHeight() ?? 0,
								fontInfo: this.rb,
								stickyHeight: this.X?.getCurrentStickyHeight() ?? 0,
							}
						);
					}
					async createMarkupPreview(Te) {
						if (
							!this.db ||
							(this.db.isResolved() || (await this.xc()),
							!this.db || !this.hb.webviewElement) ||
							!this.viewModel ||
							!this.hb.viewModel ||
							this.viewModel.getCellIndex(Te) === -1 ||
							this.Vc(Te)
						)
							return;
						const Ee = parseInt(this.hb.webviewElement.domNode.style.top, 10),
							Ie = Ee ? 0 - Ee : 0,
							Be = this.hb.getCellViewScrollTop(Te);
						await this.db.showMarkupPreview({
							mime: Te.mime,
							cellHandle: Te.handle,
							cellId: Te.id,
							content: Te.getText(),
							offset: Be + Ie,
							visible: !0,
							metadata: Te.metadata,
						});
					}
					Vc(Te) {
						const Ee = this.viewModel.getCellIndex(Te);
						return this.viewModel
							.getHiddenRanges()
							.some((Be) => Ee >= Be.start && Ee <= Be.end);
					}
					async unhideMarkupPreviews(Te) {
						this.db &&
							(this.db.isResolved() || (await this.xc()),
							await this.db?.unhideMarkupPreviews(Te.map((Ee) => Ee.id)));
					}
					async hideMarkupPreviews(Te) {
						!this.db ||
							!Te.length ||
							(this.db.isResolved() || (await this.xc()),
							await this.db?.hideMarkupPreviews(Te.map((Ee) => Ee.id)));
					}
					async deleteMarkupPreviews(Te) {
						this.db &&
							(this.db.isResolved() || (await this.xc()),
							await this.db?.deleteMarkupPreviews(Te.map((Ee) => Ee.id)));
					}
					async Wc() {
						if (!this.db) return;
						this.db.isResolved() || (await this.xc());
						const Te = this.getSelectionViewModels().map((Ee) => Ee.id);
						await this.db?.updateMarkupPreviewSelections(
							Te.length > 1 ? Te : [],
						);
					}
					async createOutput(Te, Ee, Ie, Be) {
						this.Db.queue(Ee.source.model.outputId, async () => {
							if (
								this.Jb ||
								!this.db ||
								(this.db.isResolved() || (await this.xc()), !this.db) ||
								!this.hb.webviewElement
							)
								return;
							Ee.type === L.RenderOutputType.Extension &&
								this.Qb.prepare(Ee.renderer.id);
							const Se = parseInt(this.hb.webviewElement.domNode.style.top, 10),
								ke = Se ? 0 - Se : 0,
								Ue = this.hb.getCellViewScrollTop(Te) + ke,
								qe = this.db.insetMapping.get(Ee.source);
							if (
								!qe ||
								(!qe.renderer && Ee.type === L.RenderOutputType.Extension)
							)
								Be
									? this.db.requestCreateOutputWhenWebviewIdle(
											{
												cellId: Te.id,
												cellHandle: Te.handle,
												cellUri: Te.uri,
												executionId: Te.internalMetadata.executionId,
											},
											Ee,
											Ue,
											Ie,
										)
									: this.db.createOutput(
											{
												cellId: Te.id,
												cellHandle: Te.handle,
												cellUri: Te.uri,
												executionId: Te.internalMetadata.executionId,
											},
											Ee,
											Ue,
											Ie,
										);
							else if (
								qe.renderer &&
								Ee.type === L.RenderOutputType.Extension &&
								qe.renderer.id !== Ee.renderer.id
							)
								this.db.removeInsets([Ee.source]),
									this.db.createOutput(
										{ cellId: Te.id, cellHandle: Te.handle, cellUri: Te.uri },
										Ee,
										Ue,
										Ie,
									);
							else if (qe.versionId !== Ee.source.model.versionId)
								this.db.updateOutput(
									{
										cellId: Te.id,
										cellHandle: Te.handle,
										cellUri: Te.uri,
										executionId: Te.internalMetadata.executionId,
									},
									Ee,
									Ue,
									Ie,
								);
							else {
								const Ae = Te.outputsViewModels.indexOf(Ee.source),
									Me = Te.getOutputOffset(Ae);
								this.db.updateScrollTops(
									[
										{
											cell: Te,
											output: Ee.source,
											cellTop: Ue,
											outputOffset: Me,
											forceDisplay: !Te.isOutputCollapsed,
										},
									],
									[],
								);
							}
						});
					}
					async updateOutput(Te, Ee, Ie) {
						this.Db.queue(Ee.source.model.outputId, async () => {
							if (
								this.Jb ||
								!this.db ||
								Te.isOutputCollapsed ||
								(this.db.isResolved() || (await this.xc()),
								!this.db || !this.hb.webviewElement)
							)
								return;
							if (!this.db.insetMapping.has(Ee.source))
								return this.createOutput(Te, Ee, Ie, !1);
							Ee.type === L.RenderOutputType.Extension &&
								this.Qb.prepare(Ee.renderer.id);
							const Be = parseInt(this.hb.webviewElement.domNode.style.top, 10),
								Se = Be ? 0 - Be : 0,
								ke = this.hb.getCellViewScrollTop(Te) + Se;
							this.db.updateOutput(
								{ cellId: Te.id, cellHandle: Te.handle, cellUri: Te.uri },
								Ee,
								ke,
								Ie,
							);
						});
					}
					async copyOutputImage(Te) {
						this.db?.copyImage(Te);
					}
					removeInset(Te) {
						this.Db.queue(Te.model.outputId, async () => {
							this.Jb ||
								!this.db ||
								(this.db?.isResolved() && this.db.removeInsets([Te]),
								this.O.fire(Te));
						});
					}
					hideInset(Te) {
						this.Db.queue(Te.model.outputId, async () => {
							this.Jb ||
								!this.db ||
								(this.db?.isResolved() && this.db.hideInset(Te));
						});
					}
					postMessage(Te) {
						this.db?.isResolved() && this.db.postKernelMessage(Te);
					}
					addClassName(Te) {
						this.R.classList.add(Te);
					}
					removeClassName(Te) {
						this.R.classList.remove(Te);
					}
					cellAt(Te) {
						return this.viewModel?.cellAt(Te);
					}
					getCellByInfo(Te) {
						const { cellHandle: Ee } = Te;
						return this.viewModel?.viewCells.find((Ie) => Ie.handle === Ee);
					}
					getCellByHandle(Te) {
						return this.viewModel?.getCellByHandle(Te);
					}
					getCellsBefore(Te) {
						return this.viewModel?.getCellsBefore(Te);
					}
					getCellsAfter(Te) {
						return this.viewModel?.getCellsAfter(Te);
					}
					getCellIndex(Te) {
						return this.viewModel?.getCellIndexByHandle(Te.handle);
					}
					getNextVisibleCellIndex(Te) {
						return this.viewModel?.getNextVisibleCellIndex(Te);
					}
					getPreviousVisibleCellIndex(Te) {
						return this.viewModel?.getPreviousVisibleCellIndex(Te);
					}
					Xc() {
						if (this.Jb || !this.db?.isResolved() || !this.hb.webviewElement)
							return;
						const Te = this.hb.scrollHeight;
						this.db.element.style.height = `${Te + B.$A2b * 2}px`;
						const Ee = parseInt(this.hb.webviewElement.domNode.style.top, 10),
							Ie = Ee ? 0 - Ee : 0,
							Be = [],
							Se = [];
						this.db?.insetMapping.forEach((Ue, qe) => {
							const Ae = this.viewModel?.getCellByHandle(
								Ue.cellInfo.cellHandle,
							);
							if (
								!Ae ||
								!(Ae instanceof F.$31b) ||
								(this.viewModel?.viewCells.find(
									(Ve) => Ve.handle === Ue.cellInfo.cellHandle,
								),
								this.hb.getViewIndex(Ae) === void 0)
							)
								return;
							Ae.outputsViewModels.indexOf(qe) < 0 && Se.push(qe);
							const De = this.hb.getCellViewScrollTop(Ae),
								Re = Ae.outputsViewModels.indexOf(qe),
								je = Ae.getOutputOffset(Re);
							Be.push({
								cell: Ae,
								output: qe,
								cellTop: De + Ie,
								outputOffset: je,
								forceDisplay: !1,
							});
						}),
							this.db.removeInsets(Se);
						const ke = [];
						for (const Ue of this.db.markupPreviewMapping.keys()) {
							const qe = this.viewModel?.viewCells.find((Ae) => Ae.id === Ue);
							if (qe) {
								const Ae = this.hb.getCellViewScrollTop(qe);
								ke.push({ id: Ue, top: Ae + Ie });
							}
						}
						(ke.length || Be.length) &&
							(this.dc("_list.onDidChangeContentHeight/markdown", ke),
							this.db?.updateScrollTops(Be, ke));
					}
					Yc(Te, Ee, Ie, Be, Se) {
						const ke = this.viewModel?.viewCells.find(
							(Ue) => Ue.handle === Te.cellHandle,
						);
						if (ke && ke instanceof F.$31b) {
							const Ue = ke.outputsViewModels.indexOf(Ee);
							this.dc("update cell output", ke.handle, Ie),
								ke.updateOutputHeight(Ue, Ie, Se),
								this.layoutNotebookCell(ke, ke.layoutInfo.totalHeight),
								Be && this.M.fire(Ee);
						}
					}
					$c(Te, Ee, Ie) {
						const Be = this.Zc.size === 0;
						this.Zc.set(Ee, { cellId: Te.cellId, outputId: Ee, height: Ie }),
							Be &&
								t.$hgb(
									t.getWindow(this.getDomNode()),
									() => {
										this.dc("ack height"),
											this.Xc(),
											this.db?.ackHeight([...this.Zc.values()]),
											this.Zc.clear();
									},
									-1,
								);
					}
					ad(Te) {
						return this.viewModel?.viewCells.find((Ee) => Ee.id === Te);
					}
					bd(Te, Ee, Ie) {
						const Be = this.ad(Te);
						if (Be && Be instanceof H.$41b) {
							const { bottomToolbarGap: Se } =
								this.Ob.computeBottomToolbarDimensions(
									this.viewModel?.viewType,
								);
							this.dc("updateMarkdownCellHeight", Be.handle, Ee + Se, Ie),
								(Be.renderedMarkdownHeight = Ee);
						}
					}
					cd(Te, Ee) {
						const Ie = this.ad(Te);
						Ie instanceof H.$41b &&
							(this.revealInView(Ie),
							Ie.updateEditState(Ee, "setMarkdownCellEditState"));
					}
					dd(Te, Ee) {
						const Ie = this.ad(Te);
						if (Ie instanceof H.$41b) {
							const Be = this.hb.webviewElement
								? -parseInt(this.hb.webviewElement.domNode.style.top, 10)
								: 0;
							this.jb?.startExplicitDrag(Ie, Ee.dragOffsetY - Be);
						}
					}
					ed(Te, Ee) {
						const Ie = this.ad(Te);
						if (Ie instanceof H.$41b) {
							const Be = this.hb.webviewElement
								? -parseInt(this.hb.webviewElement.domNode.style.top, 10)
								: 0;
							this.jb?.explicitDrag(Ie, Ee.dragOffsetY - Be);
						}
					}
					fd(Te, Ee) {
						const Ie = this.ad(Te);
						if (Ie instanceof H.$41b) {
							const Be = this.hb.webviewElement
								? -parseInt(this.hb.webviewElement.domNode.style.top, 10)
								: 0;
							(Ee.dragOffsetY -= Be), this.jb?.explicitDrop(Ie, Ee);
						}
					}
					gd(Te) {
						const Ee = this.ad(Te);
						Ee instanceof H.$41b && this.jb?.endExplicitDrag(Ee);
					}
					hd(Te) {
						const Ee = this.ad(Te);
						Ee && this.Q.fire(Ee);
					}
					jd(Te, Ee, Ie, Be) {
						if (!this.hasModel()) return;
						const Se = this.ad(Te),
							ke = Se ? this.getCellIndex(Se) : void 0;
						if (Se?.internalMetadata.executionId === Ee && ke !== void 0) {
							const Ue = Se.internalMetadata.renderDuration || {};
							(Ue[Be] = (Ue[Be] ?? 0) + Ie),
								this.textModel.applyEdits(
									[
										{
											editType: X.CellEditType.PartialInternalMetadata,
											index: ke,
											internalMetadata: { executionId: Ee, renderDuration: Ue },
										},
									],
									!0,
									void 0,
									() => {},
									void 0,
									!1,
								);
						}
					}
					getContribution(Te) {
						return this.Bb.get(Te) || null;
					}
					dispose() {
						(this.Jb = !0),
							this.db?.dispose(),
							(this.db = null),
							this.Rb.removeNotebookEditor(this),
							(0, m.$Vc)(this.Bb.values()),
							this.Bb.clear(),
							this.pb.clear(),
							(0, m.$Vc)(this.qb),
							this.hb.dispose(),
							this.kb?.dispose(),
							this.R.remove(),
							this.viewModel?.dispose(),
							this.lb.clear(),
							this.Kb.forEach((Te) => Te.dispose()),
							this.Kb.clear(),
							this.Y.remove(),
							super.dispose(),
							(this.db = null),
							(this.eb = null),
							(this.fb = null),
							(this.jb = null),
							(this.kb = null),
							(this.ob = void 0),
							(this.Eb = null),
							(this.U = null),
							(this.hb = null),
							(this.ib = null),
							(this.Qc = null),
							(this.gb = null);
					}
					toJSON() {
						return { notebookUri: this.viewModel?.uri };
					}
				};
				(e.$24b = He),
					(e.$24b = He =
						Ne(
							[
								j(2, l.$Li),
								j(3, re.$EY),
								j(4, Q.$Q2b),
								j(5, M.$n5b),
								j(6, ee.$f6),
								j(7, Z.$MIb),
								j(8, f.$gj),
								j(9, b.$6j),
								j(10, $.$jEb),
								j(11, s.$Xxb),
								j(12, I.$km),
								j(13, ie.$c6),
								j(14, ne.$d6),
								j(15, S.$bO),
								j(16, pe.$P2b),
								j(17, ve.$uZ),
							],
							He,
						)),
					(0, v.$ZJb)(v.ZIndex.Base, 5, "notebook-progress-bar"),
					(0, v.$ZJb)(v.ZIndex.Base, 10, "notebook-list-insertion-indicator"),
					(0, v.$ZJb)(v.ZIndex.Base, 20, "notebook-cell-editor-outline"),
					(0, v.$ZJb)(v.ZIndex.Base, 25, "notebook-scrollbar"),
					(0, v.$ZJb)(v.ZIndex.Base, 26, "notebook-cell-status"),
					(0, v.$ZJb)(v.ZIndex.Base, 26, "notebook-folding-indicator"),
					(0, v.$ZJb)(v.ZIndex.Base, 27, "notebook-output"),
					(0, v.$ZJb)(
						v.ZIndex.Base,
						28,
						"notebook-cell-bottom-toolbar-container",
					),
					(0, v.$ZJb)(v.ZIndex.Base, 29, "notebook-run-button-container"),
					(0, v.$ZJb)(v.ZIndex.Base, 29, "notebook-input-collapse-condicon"),
					(0, v.$ZJb)(v.ZIndex.Base, 30, "notebook-cell-output-toolbar"),
					(0, v.$ZJb)(v.ZIndex.Sash, 1, "notebook-cell-expand-part-button"),
					(0, v.$ZJb)(v.ZIndex.Sash, 2, "notebook-cell-toolbar"),
					(0, v.$ZJb)(
						v.ZIndex.Sash,
						3,
						"notebook-cell-toolbar-dropdown-active",
					),
					(e.$34b = (0, T.$wP)(
						"notebook.cellBorderColor",
						{
							dark: (0, T.$BP)(T.$HS, 1),
							light: (0, T.$BP)(T.$HS, 1),
							hcDark: P.$rFb,
							hcLight: P.$rFb,
						},
						p.localize(8092, null),
					)),
					(e.$44b = (0, T.$wP)(
						"notebook.focusedEditorBorder",
						T.$NP,
						p.localize(8093, null),
					)),
					(e.$54b = (0, T.$wP)(
						"notebookStatusSuccessIcon.foreground",
						k.$NKb,
						p.localize(8094, null),
					)),
					(e.$64b = (0, T.$wP)(
						"notebookEditorOverviewRuler.runningCellForeground",
						k.$NKb,
						p.localize(8095, null),
					)),
					(e.$74b = (0, T.$wP)(
						"notebookStatusErrorIcon.foreground",
						T.$KP,
						p.localize(8096, null),
					)),
					(e.$84b = (0, T.$wP)(
						"notebookStatusRunningIcon.foreground",
						T.$IP,
						p.localize(8097, null),
					)),
					(e.$94b = (0, T.$wP)(
						"notebook.outputContainerBorderColor",
						null,
						p.localize(8098, null),
					)),
					(e.$04b = (0, T.$wP)(
						"notebook.outputContainerBackgroundColor",
						null,
						p.localize(8099, null),
					)),
					(e.$$4b = (0, T.$wP)(
						"notebook.cellToolbarSeparator",
						{
							dark: E.$UL.fromHex("#808080").transparent(0.35),
							light: E.$UL.fromHex("#808080").transparent(0.35),
							hcDark: T.$OP,
							hcLight: T.$OP,
						},
						p.localize(8100, null),
					)),
					(e.$_4b = (0, T.$wP)(
						"notebook.focusedCellBackground",
						null,
						p.localize(8101, null),
					)),
					(e.$a5b = (0, T.$wP)(
						"notebook.selectedCellBackground",
						{ dark: T.$HS, light: T.$HS, hcDark: null, hcLight: null },
						p.localize(8102, null),
					)),
					(e.$b5b = (0, T.$wP)(
						"notebook.cellHoverBackground",
						{
							dark: (0, T.$BP)(e.$_4b, 0.5),
							light: (0, T.$BP)(e.$_4b, 0.7),
							hcDark: null,
							hcLight: null,
						},
						p.localize(8103, null),
					)),
					(e.$c5b = (0, T.$wP)(
						"notebook.selectedCellBorder",
						{ dark: e.$34b, light: e.$34b, hcDark: T.$OP, hcLight: T.$OP },
						p.localize(8104, null),
					)),
					(e.$d5b = (0, T.$wP)(
						"notebook.inactiveSelectedCellBorder",
						{ dark: null, light: null, hcDark: T.$NP, hcLight: T.$NP },
						p.localize(8105, null),
					)),
					(e.$e5b = (0, T.$wP)(
						"notebook.focusedCellBorder",
						T.$NP,
						p.localize(8106, null),
					)),
					(e.$f5b = (0, T.$wP)(
						"notebook.inactiveFocusedCellBorder",
						e.$34b,
						p.localize(8107, null),
					)),
					(e.$g5b = (0, T.$wP)(
						"notebook.cellStatusBarItemHoverBackground",
						{
							light: new E.$UL(new E.$RL(0, 0, 0, 0.08)),
							dark: new E.$UL(new E.$RL(255, 255, 255, 0.15)),
							hcDark: new E.$UL(new E.$RL(255, 255, 255, 0.15)),
							hcLight: new E.$UL(new E.$RL(0, 0, 0, 0.08)),
						},
						p.localize(8108, null),
					)),
					(e.$h5b = (0, T.$wP)(
						"notebook.cellInsertionIndicator",
						T.$NP,
						p.localize(8109, null),
					)),
					(e.$i5b = (0, T.$wP)(
						"notebookScrollbarSlider.background",
						T.$4P,
						p.localize(8110, null),
					)),
					(e.$j5b = (0, T.$wP)(
						"notebookScrollbarSlider.hoverBackground",
						T.$5P,
						p.localize(8111, null),
					)),
					(e.$k5b = (0, T.$wP)(
						"notebookScrollbarSlider.activeBackground",
						T.$6P,
						p.localize(8112, null),
					)),
					(e.$l5b = (0, T.$wP)(
						"notebook.symbolHighlightBackground",
						{
							dark: E.$UL.fromHex("#ffffff0b"),
							light: E.$UL.fromHex("#fdff0033"),
							hcDark: null,
							hcLight: null,
						},
						p.localize(8113, null),
					)),
					(e.$m5b = (0, T.$wP)(
						"notebook.cellEditorBackground",
						{ light: P.$wGb, dark: P.$wGb, hcDark: null, hcLight: null },
						p.localize(8114, null),
					));
				const Ke = (0, T.$wP)(
					"notebook.editorBackground",
					{ light: P.$cFb, dark: P.$cFb, hcDark: null, hcLight: null },
					p.localize(8115, null),
				);
			},
		),
		define(
			de[1062],
			he([1, 0, 15, 3, 12, 4, 5, 35, 26, 1742, 330, 856, 284, 70, 190, 161]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				var p, o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6Fc = e.$5Fc = e.$4Fc = void 0),
					(e.$3Fc = f);
				function f(S, I = !0) {
					if (I && S < 1e3) return `${S}ms`;
					const T = Math.floor(S / 1e3 / 60),
						P = Math.floor(S / 1e3) % 60,
						k = Math.floor((S % 1e3) / 100);
					return T > 0 ? `${T}m ${P}.${k}s` : `${P}.${k}s`;
				}
				class b extends i.$1c {
					constructor(I, T) {
						super(),
							(this.c = I),
							(this.f = T),
							(this.a = new Map()),
							(this.b = this.D(new r.$1Fc(this.c))),
							this.D(this.b.onDidChangeVisibleCells(this.h, this)),
							this.g();
					}
					g() {
						this.a.forEach(i.$Vc),
							this.a.clear(),
							this.h({ added: this.b.visibleCells, removed: [] });
					}
					h(I) {
						const T = this.c.getViewModel();
						if (T) {
							for (const P of I.removed)
								this.a.get(P.handle)?.dispose(), this.a.delete(P.handle);
							for (const P of I.added) this.a.set(P.handle, this.f(T, P));
						}
					}
					dispose() {
						super.dispose(), this.a.forEach(i.$Vc), this.a.clear();
					}
				}
				e.$4Fc = b;
				let s = class extends i.$1c {
					static {
						this.id = "workbench.notebook.statusBar.execState";
					}
					constructor(I, T) {
						super(), this.D(new b(I, (P, k) => T.createInstance(l, P, k)));
					}
				};
				(e.$5Fc = s), (e.$5Fc = s = Ne([j(1, C.$Li)], s)), (0, u.$PKb)(s.id, s);
				let l = class extends i.$1c {
					static {
						p = this;
					}
					static {
						this.a = 500;
					}
					constructor(I, T, P) {
						super(),
							(this.g = I),
							(this.h = T),
							(this.j = P),
							(this.b = []),
							(this.f = this.D(new i.$2c())),
							this.m(),
							this.D(
								this.j.onDidChangeExecution((k) => {
									k.type === n.NotebookExecutionType.cell &&
										k.affectsCell(this.h.uri) &&
										this.m();
								}),
							),
							this.D(this.h.model.onDidChangeInternalMetadata(() => this.m()));
					}
					async m() {
						const I = this.n();
						Array.isArray(I) &&
							(this.b = this.g.deltaCellStatusBarItems(this.b, [
								{ handle: this.h.handle, items: I },
							]));
					}
					n() {
						const I = this.j.getCellExecution(this.h.uri);
						if (
							I?.state === c.NotebookCellExecutionState.Executing &&
							typeof this.c != "number"
						)
							this.c = Date.now();
						else if (
							I?.state !== c.NotebookCellExecutionState.Executing &&
							typeof this.c == "number"
						) {
							const P = p.a - (Date.now() - this.c);
							if (P > 0) {
								this.f.value ||
									(this.f.value = (0, t.$Oh)(() => {
										(this.c = void 0), this.f.clear(), this.m();
									}, P));
								return;
							} else this.c = void 0;
						}
						return this.q(I, this.h.internalMetadata);
					}
					q(I, T) {
						const P = I?.state,
							{ lastRunSuccess: k } = T;
						return !P && k
							? [
									{
										text: `$(${h.$gOb.id})`,
										color: (0, d.$jP)(a.$54b),
										tooltip: (0, E.localize)(7725, null),
										alignment: c.CellStatusbarAlignment.Left,
										priority: Number.MAX_SAFE_INTEGER,
									},
								]
							: !P && k === !1
								? [
										{
											text: `$(${h.$hOb.id})`,
											color: (0, d.$jP)(a.$74b),
											tooltip: (0, E.localize)(7726, null),
											alignment: c.CellStatusbarAlignment.Left,
											priority: Number.MAX_SAFE_INTEGER,
										},
									]
								: P === c.NotebookCellExecutionState.Pending ||
										P === c.NotebookCellExecutionState.Unconfirmed
									? [
											{
												text: `$(${h.$iOb.id})`,
												tooltip: (0, E.localize)(7727, null),
												alignment: c.CellStatusbarAlignment.Left,
												priority: Number.MAX_SAFE_INTEGER,
											},
										]
									: P === c.NotebookCellExecutionState.Executing
										? [
												{
													text: `$(${(I?.didPause ? h.$jOb : m.ThemeIcon.modify(h.$jOb, "spin")).id})`,
													tooltip: (0, E.localize)(7728, null),
													alignment: c.CellStatusbarAlignment.Left,
													priority: Number.MAX_SAFE_INTEGER,
												},
											]
										: [];
					}
					dispose() {
						super.dispose(),
							this.g.deltaCellStatusBarItems(this.b, [
								{ handle: this.h.handle, items: [] },
							]);
					}
				};
				l = p = Ne([j(2, n.$d6)], l);
				let y = class extends i.$1c {
					static {
						this.id = "workbench.notebook.statusBar.execTimer";
					}
					constructor(I, T) {
						super(), this.D(new b(I, (P, k) => T.createInstance(v, P, k)));
					}
				};
				(e.$6Fc = y), (e.$6Fc = y = Ne([j(1, C.$Li)], y)), (0, u.$PKb)(y.id, y);
				const $ = 200;
				let v = class extends i.$1c {
					static {
						o = this;
					}
					static {
						this.a = 100;
					}
					constructor(I, T, P, k) {
						super(),
							(this.g = I),
							(this.h = T),
							(this.j = P),
							(this.m = k),
							(this.b = []),
							(this.c = this.D(new t.$Yh(() => this.n(), o.a))),
							this.n(),
							this.D(this.h.model.onDidChangeInternalMetadata(() => this.n()));
					}
					async n() {
						let I;
						const T = this.j.getCellExecution(this.h.uri),
							P = T?.state,
							k = this.h.internalMetadata.runStartTime,
							L = this.h.internalMetadata.runStartTimeAdjustment ?? 0,
							D = this.h.internalMetadata.runEndTime;
						if (T?.didPause) I = void 0;
						else if (P === c.NotebookCellExecutionState.Executing)
							typeof k == "number" &&
								((I = this.q(k, Date.now(), L)), this.c.schedule());
						else if (!P && typeof k == "number" && typeof D == "number") {
							const N = Date.now() - k + L,
								A = D - k,
								R = this.h.internalMetadata.renderDuration ?? {};
							I = this.q(k, D, void 0, {
								timerDuration: N,
								executionDuration: A,
								renderDuration: R,
							});
						}
						const M = I ? [I] : [];
						!M.length && T
							? this.f ||
								(this.f = (0, t.$Oh)(() => {
									(this.f = void 0),
										(this.b = this.g.deltaCellStatusBarItems(this.b, [
											{ handle: this.h.handle, items: M },
										]));
								}, $))
							: (this.f?.dispose(),
								(this.f = void 0),
								(this.b = this.g.deltaCellStatusBarItems(this.b, [
									{ handle: this.h.handle, items: M },
								])));
					}
					q(I, T, P = 0, k) {
						const L = T - I + P;
						let D;
						if (k) {
							const M = new Date(T).toLocaleTimeString(w.$z),
								{
									renderDuration: N,
									executionDuration: A,
									timerDuration: R,
								} = k;
							let O = "";
							for (const B in N) {
								const U = this.m.getRendererInfo(B),
									z = encodeURIComponent(
										JSON.stringify({
											extensionId: U?.extensionId.value ?? "",
											issueBody: `Auto-generated text from notebook cell performance. The duration for the renderer, ${U?.displayName ?? B}, is slower than expected.
Execution Time: ${f(A)}
Renderer Duration: ${f(N[B])}
`,
										}),
									);
								O += `- [${U?.displayName ?? B}](command:workbench.action.openIssueReporter?${z}) ${f(N[B])}
`;
							}
							(O += `
*${(0, E.localize)(7729, null)}*
`),
								(D = {
									value: (0, E.localize)(7730, null, M, f(A), f(R - A), O),
									isTrusted: !0,
								});
						}
						return {
							text: f(L, !1),
							alignment: c.CellStatusbarAlignment.Left,
							priority: Number.MAX_SAFE_INTEGER - 5,
							tooltip: D,
						};
					}
					dispose() {
						super.dispose(),
							this.f?.dispose(),
							this.g.deltaCellStatusBarItems(this.b, [
								{ handle: this.h.handle, items: [] },
							]);
					}
				};
				v = o = Ne([j(2, n.$d6), j(3, g.$MIb)], v);
			},
		),
		define(
			de[4099],
			he([1, 0, 3, 77, 4, 5, 39, 1960, 1062, 330, 482, 70]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$yGc = void 0);
				let h = class extends t.$1c {
					static {
						this.id = "workbench.notebook.statusBar.diagtnostic";
					}
					constructor(g, p) {
						super(),
							this.D(
								new m.$4Fc(g, (o, f) =>
									f instanceof u.$31b ? p.createInstance(c, o, f) : t.$1c.None,
								),
							);
					}
				};
				(e.$yGc = h), (e.$yGc = h = Ne([j(1, E.$Li)], h)), (0, r.$PKb)(h.id, h);
				let c = class extends t.$1c {
					constructor(g, p, o) {
						super(),
							(this.b = g),
							(this.c = p),
							(this.f = o),
							(this.a = []),
							this.D(
								(0, i.autorun)((f) =>
									this.g(f.readObservable(p.excecutionError)),
								),
							);
					}
					async g(g) {
						let p;
						if (g?.location) {
							const f = this.f.lookupKeybinding(d.$xGc)?.getLabel();
							p = {
								text: "$(sparkle)",
								tooltip: (0, w.localize)(7724, null, `(${f})`),
								alignment: a.CellStatusbarAlignment.Left,
								command: d.$xGc,
								priority: Number.MAX_SAFE_INTEGER - 1,
							};
						}
						const o = p ? [p] : [];
						this.a = this.b.deltaCellStatusBarItems(this.a, [
							{ handle: this.c.handle, items: o },
						]);
					}
					dispose() {
						super.dispose(),
							this.b.deltaCellStatusBarItems(this.a, [
								{ handle: this.c.handle, items: [] },
							]);
					}
				};
				c = Ne([j(2, C.$uZ)], c);
			},
		),
		