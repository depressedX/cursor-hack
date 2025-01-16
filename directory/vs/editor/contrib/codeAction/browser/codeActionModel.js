define(
			de[1642],
			he([1, 0, 15, 29, 6, 3, 19, 38, 48, 104, 74, 8, 84, 291, 393, 318, 162]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ABb = e.CodeActionsState = e.$zBb = e.$yBb = void 0),
					(e.$yBb = new a.$5j("supportedCodeAction", "")),
					(e.$zBb = "_typescript.applyFixAllCodeAction");
				class o extends E.$1c {
					constructor(y, $, v, S = 250) {
						super(),
							(this.f = y),
							(this.g = $),
							(this.h = v),
							(this.j = S),
							(this.c = this.D(new t.$Wh())),
							this.D(this.g.onMarkerChanged((I) => this.m(I))),
							this.D(this.f.onDidChangeCursorPosition(() => this.n()));
					}
					trigger(y) {
						const $ = this.q(y);
						this.h($ ? { trigger: y, selection: $ } : void 0);
					}
					m(y) {
						const $ = this.f.getModel();
						$ && y.some((v) => (0, C.$gh)(v, $.uri)) && this.n();
					}
					n() {
						this.c.cancelAndSet(() => {
							this.trigger({
								type: u.CodeActionTriggerType.Auto,
								triggerAction: c.CodeActionTriggerSource.Default,
							});
						}, this.j);
					}
					q(y) {
						if (!this.f.hasModel()) return;
						const $ = this.f.getSelection();
						if (y.type === u.CodeActionTriggerType.Invoke) return $;
						const v = this.f.getOption(d.EditorOption.lightbulb).enabled;
						if (v !== d.ShowLightbulbIconMode.Off) {
							{
								if (v === d.ShowLightbulbIconMode.On) return $;
								if (v === d.ShowLightbulbIconMode.OnCode) {
									if (!$.isEmpty()) return $;
									const I = this.f.getModel(),
										{ lineNumber: T, column: P } = $.getPosition(),
										k = I.getLineContent(T);
									if (k.length === 0) return;
									if (P === 1) {
										if (/\s/.test(k[0])) return;
									} else if (P === I.getLineMaxColumn(T)) {
										if (/\s/.test(k[k.length - 1])) return;
									} else if (/\s/.test(k[P - 2]) && /\s/.test(k[P - 1])) return;
								}
							}
							return $;
						}
					}
				}
				var f;
				(function (l) {
					let y;
					(function (v) {
						(v[(v.Empty = 0)] = "Empty"), (v[(v.Triggered = 1)] = "Triggered");
					})((y = l.Type || (l.Type = {}))),
						(l.Empty = { type: y.Empty });
					class $ {
						constructor(S, I, T) {
							(this.trigger = S),
								(this.position = I),
								(this.c = T),
								(this.type = y.Triggered),
								(this.actions = T.catch((P) => {
									if ((0, i.$8)(P)) return b;
									throw P;
								}));
						}
						cancel() {
							this.c.cancel();
						}
					}
					l.Triggered = $;
				})(f || (e.CodeActionsState = f = {}));
				const b = Object.freeze({
					allActions: [],
					validActions: [],
					dispose: () => {},
					documentation: [],
					hasAutoFix: !1,
					hasAIFix: !1,
					allAIFixes: !1,
				});
				class s extends E.$1c {
					constructor(y, $, v, S, I, T, P, k, L) {
						super(),
							(this.m = y),
							(this.n = $),
							(this.q = v),
							(this.r = I),
							(this.s = T),
							(this.t = P),
							(this.u = k),
							(this.w = L),
							(this.c = this.D(new E.$2c())),
							(this.f = f.Empty),
							(this.h = this.D(new w.$re())),
							(this.onDidChangeState = this.h.event),
							(this.j = !1),
							(this.g = e.$yBb.bindTo(S)),
							this.D(this.m.onDidChangeModel(() => this.z())),
							this.D(this.m.onDidChangeModelLanguage(() => this.z())),
							this.D(this.n.onDidChange(() => this.z())),
							this.D(
								this.m.onDidChangeConfiguration((D) => {
									D.hasChanged(d.EditorOption.lightbulb) && this.z();
								}),
							),
							this.z();
					}
					dispose() {
						this.j || ((this.j = !0), super.dispose(), this.C(f.Empty, !0));
					}
					y() {
						const y = this.m?.getModel();
						return this.t
							? this.t.getValue(
									"editor.codeActionWidget.includeNearbyQuickFixes",
									{ resource: y?.uri },
								)
							: !1;
					}
					z() {
						if (this.j) return;
						(this.c.value = void 0), this.C(f.Empty);
						const y = this.m.getModel();
						if (
							y &&
							this.n.has(y) &&
							!this.m.getOption(d.EditorOption.readOnly)
						) {
							const $ = this.n
								.all(y)
								.flatMap((v) => v.providedCodeActionKinds ?? []);
							this.g.set($.join(" ")),
								(this.c.value = new o(
									this.m,
									this.q,
									(v) => {
										if (!v) {
											this.C(f.Empty);
											return;
										}
										const S = v.selection.getStartPosition(),
											I = (0, t.$zh)(async (k) => {
												if (
													this.y() &&
													v.trigger.type === u.CodeActionTriggerType.Invoke &&
													(v.trigger.triggerAction ===
														c.CodeActionTriggerSource.QuickFix ||
														v.trigger.filter?.include?.contains(
															c.$GAb.QuickFix,
														))
												) {
													const L = await (0, n.$UAb)(
															this.n,
															y,
															v.selection,
															v.trigger,
															h.$0N.None,
															k,
															this.s,
														),
														D = [...L.allActions];
													if (k.isCancellationRequested) return b;
													const M = L.validActions?.some((A) =>
															A.action.kind
																? c.$GAb.QuickFix.contains(
																		new g.$1L(A.action.kind),
																	)
																: !1,
														),
														N = this.q.read({ resource: y.uri });
													if (M) {
														for (const A of L.validActions)
															A.action.command?.arguments?.some(
																(R) =>
																	typeof R == "string" && R.includes(e.$zBb),
															) &&
																(A.action.diagnostics = [
																	...N.filter((R) => R.relatedInformation),
																]);
														return {
															validActions: L.validActions,
															allActions: D,
															documentation: L.documentation,
															hasAutoFix: L.hasAutoFix,
															hasAIFix: L.hasAIFix,
															allAIFixes: L.allAIFixes,
															dispose: () => {
																L.dispose();
															},
														};
													} else if (!M && N.length > 0) {
														const A = v.selection.getPosition();
														let R = A,
															O = Number.MAX_VALUE;
														const B = [...L.validActions];
														for (const z of N) {
															const F = z.endColumn,
																x = z.endLineNumber,
																H = z.startLineNumber;
															if (x === A.lineNumber || H === A.lineNumber) {
																R = new m.$hL(x, F);
																const q = {
																		type: v.trigger.type,
																		triggerAction: v.trigger.triggerAction,
																		filter: {
																			include: v.trigger.filter?.include
																				? v.trigger.filter?.include
																				: c.$GAb.QuickFix,
																		},
																		autoApply: v.trigger.autoApply,
																		context: {
																			notAvailableMessage:
																				v.trigger.context
																					?.notAvailableMessage || "",
																			position: R,
																		},
																	},
																	V = new r.$kL(
																		R.lineNumber,
																		R.column,
																		R.lineNumber,
																		R.column,
																	),
																	G = await (0, n.$UAb)(
																		this.n,
																		y,
																		V,
																		q,
																		h.$0N.None,
																		k,
																	);
																if (G.validActions.length !== 0) {
																	for (const K of G.validActions)
																		K.action.command?.arguments?.some(
																			(J) =>
																				typeof J == "string" &&
																				J.includes(e.$zBb),
																		) &&
																			(K.action.diagnostics = [
																				...N.filter(
																					(J) => J.relatedInformation,
																				),
																			]);
																	L.allActions.length === 0 &&
																		D.push(...G.allActions),
																		Math.abs(A.column - F) < O
																			? B.unshift(...G.validActions)
																			: B.push(...G.validActions);
																}
																O = Math.abs(A.column - F);
															}
														}
														const U = B.filter(
															(z, F, x) =>
																x.findIndex(
																	(H) => H.action.title === z.action.title,
																) === F,
														);
														return (
															U.sort((z, F) =>
																z.action.isPreferred && !F.action.isPreferred
																	? -1
																	: (!z.action.isPreferred &&
																				F.action.isPreferred) ||
																			(z.action.isAI && !F.action.isAI)
																		? 1
																		: !z.action.isAI && F.action.isAI
																			? -1
																			: 0,
															),
															{
																validActions: U,
																allActions: D,
																documentation: L.documentation,
																hasAutoFix: L.hasAutoFix,
																hasAIFix: L.hasAIFix,
																allAIFixes: L.allAIFixes,
																dispose: () => {
																	L.dispose();
																},
															}
														);
													}
												}
												if (v.trigger.type === u.CodeActionTriggerType.Invoke) {
													const L = new p.$le(),
														D = await (0, n.$UAb)(
															this.n,
															y,
															v.selection,
															v.trigger,
															h.$0N.None,
															k,
															void 0,
															this.u?.applicationUserPersistentStorage
																.turnOnCopilotChat !== !0,
														);
													return (
														this.w &&
															this.w.publicLog2("codeAction.invokedDurations", {
																codeActions: D.validActions.length,
																duration: L.elapsed(),
															}),
														D
													);
												}
												return (0, n.$UAb)(
													this.n,
													y,
													v.selection,
													v.trigger,
													h.$0N.None,
													k,
													void 0,
													this.u?.applicationUserPersistentStorage
														.turnOnCopilotChat !== !0,
												);
											});
										v.trigger.type === u.CodeActionTriggerType.Invoke &&
											this.r?.showWhile(I, 250);
										const T = new f.Triggered(v.trigger, S, I);
										let P = !1;
										this.f.type === f.Type.Triggered &&
											(P =
												this.f.trigger.type ===
													u.CodeActionTriggerType.Invoke &&
												T.type === f.Type.Triggered &&
												T.trigger.type === u.CodeActionTriggerType.Auto &&
												this.f.position !== T.position),
											P
												? setTimeout(() => {
														this.C(T);
													}, 500)
												: this.C(T);
									},
									void 0,
								)),
								this.c.value.trigger({
									type: u.CodeActionTriggerType.Auto,
									triggerAction: c.CodeActionTriggerSource.Default,
								});
						} else this.g.reset();
					}
					trigger(y) {
						this.c.value?.trigger(y);
					}
					C(y, $) {
						y !== this.f &&
							(this.f.type === f.Type.Triggered && this.f.cancel(),
							(this.f = y),
							!$ && !this.j && this.h.fire(y));
					}
				}
				e.$ABb = s;
			},
		),
		