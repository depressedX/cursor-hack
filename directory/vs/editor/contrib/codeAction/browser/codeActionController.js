define(
			de[500],
			he([
				1, 0, 7, 127, 29, 149, 3, 48, 98, 74, 122, 69, 393, 2807, 2834, 1685,
				440, 4, 1659, 31, 10, 8, 5, 90, 84, 51, 212, 35, 39, 45, 6, 291, 1642,
				318, 32, 38,
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
			) {
				"use strict";
				var O;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$BBb = void 0),
					(i = mt(i));
				const B = "quickfix-edit-highlight";
				let U = class extends C.$1c {
					static {
						O = this;
					}
					static {
						this.ID = "editor.contrib.codeActionController";
					}
					static get(F) {
						return F.getContribution(O.ID);
					}
					constructor(F, x, H, q, V, G, K, J, W, X, Y, ie, ne) {
						super(),
							(this.q = K),
							(this.r = J),
							(this.s = W),
							(this.t = X),
							(this.u = Y),
							(this.w = ie),
							(this.z = ne),
							(this.f = this.D(new C.$2c())),
							(this.g = !1),
							(this.h = this.D(new L.$re())),
							(this.onDidChangeCodeActions = this.h.event),
							(this.j = this.D(new L.$re())),
							(this.onDidApplyCodeAction = this.j.event),
							(this.n = !1),
							(this.a = F),
							(this.b = this.D(
								new M.$ABb(
									this.a,
									V.codeActionProvider,
									x,
									H,
									G,
									Y,
									J,
									ie,
									this.z,
								),
							)),
							this.D(this.b.onDidChangeState((ee) => this.H(ee))),
							(this.c = new E.$Y(() => {
								const ee = this.a.getContribution(g.$wBb.ID);
								return (
									ee && this.D(ee.onClick((_) => this.C(_.actions, _))), ee
								);
							})),
							(this.m = q.createInstance(c.$WAb)),
							this.D(this.a.onDidLayoutChange(() => this.s.hide()));
					}
					dispose() {
						(this.n = !0), super.dispose();
					}
					async C(F, x) {
						if (F.allAIFixes && F.validActions.length === 1) {
							const H = F.validActions[0],
								q = H.action.command;
							q &&
								q.id === "inlineChat.start" &&
								q.arguments &&
								q.arguments.length >= 1 &&
								(q.arguments[0] = { ...q.arguments[0], autoSend: !1 }),
								await this.G(
									H,
									!1,
									!1,
									h.ApplyCodeActionReason.FromAILightbulb,
								);
							return;
						}
						await this.showCodeActionList(F, x, {
							includeDisabledActions: !1,
							fromLightbulb: !0,
						});
					}
					showCodeActions(F, x, H) {
						return this.showCodeActionList(x, H, {
							includeDisabledActions: !1,
							fromLightbulb: !1,
						});
					}
					hideCodeActions() {
						this.s.hide();
					}
					manualTriggerAtCurrentPosition(F, x, H, q) {
						if (!this.a.hasModel()) return;
						p.$Szb.get(this.a)?.closeMessage();
						const V = this.a.getPosition();
						this.F({
							type: r.CodeActionTriggerType.Invoke,
							triggerAction: x,
							filter: H,
							autoApply: q,
							context: { notAvailableMessage: F, position: V },
						});
					}
					F(F) {
						return this.b.trigger(F);
					}
					async G(F, x, H, q) {
						this.j.fire(F);
						try {
							await this.t.invokeFunction(h.$VAb, F, q, {
								preview: H,
								editor: this.a,
							});
						} finally {
							x &&
								this.F({
									type: r.CodeActionTriggerType.Auto,
									triggerAction: D.CodeActionTriggerSource.QuickFix,
									filter: {},
								});
						}
					}
					hideLightBulbWidget() {
						this.c.rawValue?.hide(), this.c.rawValue?.gutterHide();
					}
					async H(F) {
						if (F.type !== M.CodeActionsState.Type.Triggered) {
							this.hideLightBulbWidget();
							return;
						}
						let x;
						try {
							x = await F.actions;
						} catch (q) {
							(0, w.$4)(q);
							return;
						}
						if (
							!(
								this.n ||
								this.a.getSelection()?.startLineNumber !== F.position.lineNumber
							)
						)
							if (
								(this.a.getOption(R.EditorOption.lightbulb).enabled !==
									R.ShowLightbulbIconMode.Off &&
									this.c.value?.update(x, F.trigger, F.position),
								F.trigger.type === r.CodeActionTriggerType.Invoke)
							) {
								if (F.trigger.filter?.include) {
									const V = this.J(F.trigger, x);
									if (V) {
										try {
											this.hideLightBulbWidget(),
												await this.G(
													V,
													!1,
													!1,
													h.ApplyCodeActionReason.FromCodeActions,
												);
										} finally {
											x.dispose();
										}
										return;
									}
									if (F.trigger.context) {
										const G = this.I(F.trigger, x);
										if (G && G.action.disabled) {
											p.$Szb
												.get(this.a)
												?.showMessage(
													G.action.disabled,
													F.trigger.context.position,
												),
												x.dispose();
											return;
										}
									}
								}
								const q = !!F.trigger.filter?.include;
								if (
									F.trigger.context &&
									(!x.allActions.length || (!q && !x.validActions.length))
								) {
									p.$Szb
										.get(this.a)
										?.showMessage(
											F.trigger.context.notAvailableMessage,
											F.trigger.context.position,
										),
										(this.f.value = x),
										this.h.fire(x),
										x.dispose();
									return;
								}
								(this.f.value = x),
									this.h.fire(x),
									this.showCodeActionList(x, this.M(F.position), {
										includeDisabledActions: q,
										fromLightbulb: !1,
									});
							} else
								this.s.isVisible
									? x.dispose()
									: ((this.f.value = x), this.h.fire(x));
					}
					I(F, x) {
						if (
							x.allActions.length &&
							((F.autoApply === D.CodeActionAutoApply.First &&
								x.validActions.length === 0) ||
								(F.autoApply === D.CodeActionAutoApply.IfSingle &&
									x.allActions.length === 1))
						)
							return x.allActions.find(({ action: H }) => H.disabled);
					}
					J(F, x) {
						if (
							x.validActions.length &&
							((F.autoApply === D.CodeActionAutoApply.First &&
								x.validActions.length > 0) ||
								(F.autoApply === D.CodeActionAutoApply.IfSingle &&
									x.validActions.length === 1))
						)
							return x.validActions[0];
					}
					static {
						this.L = u.$eY.register({
							description: "quickfix-highlight",
							className: B,
						});
					}
					async showCodeActionList(F, x, H) {
						const q = this.a.createDecorationsCollection(),
							V = this.a.getDomNode();
						if (!V) return;
						const G =
							H.includeDisabledActions &&
							(this.g || F.validActions.length === 0)
								? F.allActions
								: F.validActions;
						if (!G.length) return;
						const K = d.$hL.isIPosition(x) ? this.M(x) : x,
							J = {
								onSelect: async (W, X) => {
									this.G(
										W,
										!0,
										!!X,
										H.fromLightbulb
											? h.ApplyCodeActionReason.FromAILightbulb
											: h.ApplyCodeActionReason.FromCodeActions,
									),
										this.s.hide(!1),
										q.clear();
								},
								onHide: (W) => {
									this.a?.focus(), q.clear();
								},
								onHover: async (W, X) => {
									if (X.isCancellationRequested) return;
									let Y = !1;
									const ie = W.action.kind;
									if (ie) {
										const ne = new N.$1L(ie);
										Y = [
											D.$GAb.RefactorExtract,
											D.$GAb.RefactorInline,
											D.$GAb.RefactorRewrite,
											D.$GAb.RefactorMove,
											D.$GAb.Source,
										].some((_) => _.contains(ne));
									}
									return { canPreview: Y || !!W.action.edit?.edits.length };
								},
								onFocus: (W) => {
									if (W && W.action) {
										const X = W.action.ranges,
											Y = W.action.diagnostics;
										if ((q.clear(), X && X.length > 0)) {
											const ie =
												Y && Y?.length > 1
													? Y.map((ne) => ({ range: ne, options: O.L }))
													: X.map((ne) => ({ range: ne, options: O.L }));
											q.set(ie);
										} else if (Y && Y.length > 0) {
											const ie = Y.map((ee) => ({ range: ee, options: O.L }));
											q.set(ie);
											const ne = Y[0];
											if (ne.startLineNumber && ne.startColumn) {
												const ee = this.a
													.getModel()
													?.getWordAtPosition({
														lineNumber: ne.startLineNumber,
														column: ne.startColumn,
													})?.word;
												i.$pib(
													(0, o.localize)(
														929,
														null,
														ee,
														ne.startLineNumber,
														ne.startColumn,
													),
												);
											}
										}
									} else q.clear();
								},
							};
						this.s.show(
							"codeActionWidget",
							!0,
							(0, n.$vBb)(G, this.N(), this.m.getResolver()),
							J,
							K,
							V,
							this.O(F, x, H),
						);
					}
					M(F) {
						if (!this.a.hasModel()) return { x: 0, y: 0 };
						this.a.revealPosition(F, m.ScrollType.Immediate), this.a.render();
						const x = this.a.getScrolledVisiblePosition(F),
							H = (0, t.$tgb)(this.a.getDomNode()),
							q = H.left + x.left,
							V = H.top + x.top + x.height;
						return { x: q, y: V };
					}
					N() {
						const F = this.a?.getModel();
						return this.r.getValue("editor.codeActionWidget.showHeaders", {
							resource: F?.uri,
						});
					}
					O(F, x, H) {
						if (H.fromLightbulb) return [];
						const q = F.documentation.map((V) => ({
							id: V.id,
							label: V.title,
							tooltip: V.tooltip ?? "",
							class: void 0,
							enabled: !0,
							run: () => this.q.executeCommand(V.id, ...(V.arguments ?? [])),
						}));
						return (
							H.includeDisabledActions &&
								F.validActions.length > 0 &&
								F.allActions.length !== F.validActions.length &&
								q.push(
									this.g
										? {
												id: "hideMoreActions",
												label: (0, o.localize)(930, null),
												enabled: !0,
												tooltip: "",
												class: void 0,
												run: () => (
													(this.g = !1), this.showCodeActionList(F, x, H)
												),
											}
										: {
												id: "showMoreActions",
												label: (0, o.localize)(931, null),
												enabled: !0,
												tooltip: "",
												class: void 0,
												run: () => (
													(this.g = !0), this.showCodeActionList(F, x, H)
												),
											},
								),
							q
						);
					}
				};
				(e.$BBb = U),
					(e.$BBb =
						U =
						O =
							Ne(
								[
									j(1, $.$aM),
									j(2, l.$6j),
									j(3, y.$Li),
									j(4, a.$k3),
									j(5, v.$bO),
									j(6, b.$ek),
									j(7, s.$gj),
									j(8, f.$xBb),
									j(9, y.$Li),
									j(10, P.$uZ),
									j(11, k.$0zb),
									j(12, A.$km),
								],
								U,
							)),
					(0, T.$oP)((z, F) => {
						((q, V) => {
							V && F.addRule(`.monaco-editor ${q} { background-color: ${V}; }`);
						})(".quickfix-edit-highlight", z.getColor(S.$yQ));
						const H = z.getColor(S.$CQ);
						H &&
							F.addRule(
								`.monaco-editor .quickfix-edit-highlight { border: 1px ${((0, I.$gP))(z.type) ? "dotted" : "solid"} ${H}; box-sizing: border-box; }`,
							);
					});
			},
		),
		