define(
			de[2005],
			he([
				1, 0, 15, 33, 14, 6, 27, 3, 28, 56, 71, 4, 11, 31, 10, 81, 8, 5, 39, 43,
				84, 30, 51, 79, 212, 35, 100, 123, 130, 402, 208, 153, 207, 218, 283,
				1755, 141, 427, 257, 176, 511, 107, 1384, 18, 87, 96, 166, 89, 91, 267,
				2395,
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
			) {
				"use strict";
				var Y, ie, ne, ee;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5gd =
						e.$4gd =
						e.$3gd =
						e.$2gd =
						e.$1gd =
						e.$Zgd =
						e.$Xgd =
						e.$Wgd =
						e.$Vgd =
						e.$Ugd =
						e.$Tgd =
						e.$Sgd =
						e.$Rgd =
						e.$Qgd =
							void 0),
					(e.$Ygd = Te);
				const _ = ["view", "inline", "terminal", "quick", "editor"],
					te = h.$XX.for("terminalChatInput"),
					Q = p.$Kj.and(M.$51, F.$W7),
					Z = p.$Kj.or(U.$XKb, M.$31),
					se = p.$Kj.or(M.$W1, H.TerminalChatContextKeys.requestActive),
					re = new p.$5j("scopedVoiceChatGettingReady", !1, {
						type: "boolean",
						description: (0, a.localize)(4787, null),
					}),
					le = new p.$5j("scopedVoiceChatInProgress", void 0, {
						type: "string",
						description: (0, a.localize)(4788, null),
					}),
					oe = p.$Kj.or(..._.map((Re) => le.isEqualTo(Re)));
				var ae;
				(function (Re) {
					(Re[(Re.Stopped = 1)] = "Stopped"),
						(Re[(Re.GettingReady = 2)] = "GettingReady"),
						(Re[(Re.Started = 3)] = "Started");
				})(ae || (ae = {}));
				class pe {
					static async create(je, Ve) {
						const Ze = je.get(L.$GYb),
							et = je.get(L.$IYb),
							rt = je.get(G.$mEb),
							ft = je.get(q.$IY),
							bt = je.get(x.$iIb),
							nt = je.get(J.$HMb);
						switch (Ve) {
							case "focused":
								return pe.a(bt, Ze, rt) ?? pe.create(je, "view");
							case "view": {
								const lt = await (0, L.$HYb)(nt);
								if (lt) return pe.c("view", lt);
								break;
							}
							case "inline": {
								const lt = (0, r.$btb)(ft.activeTextEditorControl);
								if (lt) {
									const ct = B.$Z1b.get(lt);
									if (ct)
										return (
											ct.joinCurrentRun() || ct.run(),
											pe.c("inline", ct.chatWidget)
										);
								}
								break;
							}
							case "quick":
								return et.open(), pe.create(je, "focused");
						}
					}
					static a(je, Ve, Ze) {
						const et = je.activeInstance;
						if (et) {
							const ft =
								H.TerminalChatController.activeChatWidget ||
								H.TerminalChatController.get(et);
							if (ft?.hasFocus()) return pe.d(ft);
						}
						const rt = Ve.lastFocusedWidget;
						if (rt?.hasInputFocus()) {
							let ft;
							return (
								Ze.hasFocus(G.Parts.EDITOR_PART)
									? (ft =
											rt.location === D.ChatAgentLocation.Panel
												? "editor"
												: "inline")
									: [
												G.Parts.SIDEBAR_PART,
												G.Parts.PANEL_PART,
												G.Parts.AUXILIARYBAR_PART,
												G.Parts.TITLEBAR_PART,
												G.Parts.STATUSBAR_PART,
												G.Parts.BANNER_PART,
												G.Parts.ACTIVITYBAR_PART,
											].some((bt) => Ze.hasFocus(bt))
										? (ft = "view")
										: (ft = "quick"),
								pe.c(ft, rt)
							);
						}
					}
					static b(je, Ve) {
						const Ze = re.bindTo(je),
							et = le.bindTo(je);
						return (rt) => {
							switch (rt) {
								case ae.GettingReady:
									Ze.set(!0), et.reset();
									break;
								case ae.Started:
									Ze.reset(), et.set(Ve);
									break;
								case ae.Stopped:
									Ze.reset(), et.reset();
									break;
							}
						};
					}
					static c(je, Ve) {
						return {
							context: je,
							scopedContextKeyService: Ve.scopedContextKeyService,
							onDidAcceptInput: Ve.onDidAcceptInput,
							onDidHideInput: Ve.onDidHide,
							focusInput: () => Ve.focusInput(),
							acceptInput: () => Ve.acceptInput(),
							updateInput: (Ze) => Ve.setInput(Ze),
							getInput: () => Ve.getInput(),
							setInputPlaceholder: (Ze) => Ve.setInputPlaceholder(Ze),
							clearInputPlaceholder: () => Ve.resetInputPlaceholder(),
							updateState: pe.b(Ve.scopedContextKeyService, je),
						};
					}
					static d(je) {
						const Ve = "terminal";
						return {
							context: Ve,
							scopedContextKeyService: je.scopedContextKeyService,
							onDidAcceptInput: je.onDidAcceptInput,
							onDidHideInput: je.onDidHide,
							focusInput: () => je.focus(),
							acceptInput: () => je.acceptInput(),
							updateInput: (Ze) => je.updateInput(Ze, !1),
							getInput: () => je.getInput(),
							setInputPlaceholder: (Ze) => je.setPlaceholder(Ze),
							clearInputPlaceholder: () => je.resetPlaceholder(),
							updateState: pe.b(je.scopedContextKeyService, Ve),
						};
					}
				}
				let $e = class {
					static {
						Y = this;
					}
					static {
						this.a = void 0;
					}
					static getInstance(je) {
						return Y.a || (Y.a = je.createInstance(Y)), Y.a;
					}
					constructor(je, Ve, Ze, et) {
						(this.d = je),
							(this.f = Ve),
							(this.g = Ze),
							(this.h = et),
							(this.b = void 0),
							(this.c = 0);
					}
					async start(je, Ve) {
						this.stop(), xe.getInstance(this.g).stop();
						let Ze = !1;
						const et = ++this.c,
							rt = (this.b = {
								id: et,
								controller: je,
								disposables: new d.$Zc(),
								setTimeoutDisabled: (gt) => {
									Ze = gt;
								},
								accept: () => this.accept(et),
								stop: () => this.stop(et, je.context),
							}),
							ft = new i.$Ce();
						rt.disposables.add((0, d.$Yc)(() => ft.dispose(!0))),
							rt.disposables.add(
								je.onDidAcceptInput(() => this.stop(et, je.context)),
							),
							rt.disposables.add(
								je.onDidHideInput(() => this.stop(et, je.context)),
							),
							je.focusInput(),
							je.updateState(ae.GettingReady);
						const bt = await this.d.createVoiceChatSession(ft.token, {
							usesAgents: je.context !== "inline",
							model: Ve?.widget?.viewModel?.model,
						});
						let nt = je.getInput(),
							lt = this.f.getValue(P.AccessibilityVoiceSettingId.SpeechTimeout);
						(!(0, m.$pg)(lt) || lt < 0) && (lt = P.$2Lb);
						const ct = rt.disposables.add(new t.$Yh(() => this.accept(et), lt));
						return (
							rt.disposables.add(
								bt.onDidChange(
									({ status: gt, text: ht, waitingForInput: Rt }) => {
										if (!ft.token.isCancellationRequested)
											switch (gt) {
												case F.SpeechToTextStatus.Started:
													this.j(je, rt.disposables);
													break;
												case F.SpeechToTextStatus.Recognizing:
													ht &&
														(rt.controller.updateInput(
															nt ? [nt, ht].join(" ") : ht,
														),
														lt > 0 &&
															Ve?.voice?.disableTimeout !== !0 &&
															!Ze &&
															ct.cancel());
													break;
												case F.SpeechToTextStatus.Recognized:
													ht &&
														((nt = nt ? [nt, ht].join(" ") : ht),
														rt.controller.updateInput(nt),
														lt > 0 &&
															Ve?.voice?.disableTimeout !== !0 &&
															!Rt &&
															!Ze &&
															ct.schedule());
													break;
												case F.SpeechToTextStatus.Stopped:
													this.stop(rt.id, je.context);
													break;
											}
									},
								),
							),
							rt
						);
					}
					j(je, Ve) {
						je.updateState(ae.Started);
						let Ze = 0;
						const et = () => {
								(Ze = (Ze + 1) % 4),
									je.setInputPlaceholder(
										`${(0, a.localize)(4789, null)}${".".repeat(Ze)}`,
									),
									rt.schedule();
							},
							rt = Ve.add(new t.$Yh(et, 500));
						et();
					}
					stop(je = this.c, Ve) {
						!this.b ||
							this.c !== je ||
							(Ve && this.b.controller.context !== Ve) ||
							(this.b.controller.clearInputPlaceholder(),
							this.b.controller.updateState(ae.Stopped),
							this.b.disposables.dispose(),
							(this.b = void 0));
					}
					async accept(je = this.c) {
						if (!this.b || this.c !== je) return;
						const Ve = this.b.controller,
							Ze = await Ve.acceptInput();
						if (!Ze) return;
						const et = this.f.getValue(
							P.AccessibilityVoiceSettingId.AutoSynthesize,
						);
						if (
							et === "on" ||
							(et === "auto" && !this.h.isScreenReaderOptimized())
						) {
							let rt;
							Ve.context === "inline" ? (rt = "focused") : (rt = Ve),
								xe
									.getInstance(this.g)
									.start(this.g.invokeFunction((ft) => Oe.create(ft, rt, Ze)));
						}
					}
				};
				($e = Y =
					Ne([j(0, R.$ZIc), j(1, n.$gj), j(2, o.$Li), j(3, W.$XK)], $e)),
					(e.$Qgd = 500);
				async function ye(Re, je, Ve, Ze) {
					const et = je.get(o.$Li),
						ft = je.get(f.$uZ).enableKeybindingHoldMode(Re),
						bt = await pe.create(je, Ve);
					if (!bt) return;
					const nt = await $e.getInstance(et).start(bt, Ze);
					let lt = !1;
					const ct = (0, t.$Oh)(() => {
						(lt = !0), nt?.setTimeoutDisabled(!0);
					}, e.$Qgd);
					await ft, ct.dispose(), lt && nt.accept();
				}
				class ue extends h.$3X {
					constructor(je, Ve) {
						super(je), (this.a = Ve);
					}
					run(je, Ve) {
						return ye(this.desc.id, je, this.a, Ve);
					}
				}
				class fe extends ue {
					static {
						this.ID = "workbench.action.chat.voiceChatInChatView";
					}
					constructor() {
						super(
							{
								id: fe.ID,
								title: (0, a.localize2)(4802, "Voice Chat in Chat View"),
								category: k.$3Yb,
								precondition: p.$Kj.and(Q, M.$W1.negate()),
								f1: !0,
							},
							"view",
						);
					}
				}
				e.$Rgd = fe;
				class me extends h.$3X {
					static {
						this.ID = "workbench.action.chat.holdToVoiceChatInChatView";
					}
					constructor() {
						super({
							id: me.ID,
							title: (0, a.localize2)(4803, "Hold to Voice Chat in Chat View"),
							keybinding: {
								weight: b.KeybindingWeight.WorkbenchContrib,
								when: p.$Kj.and(
									Q,
									M.$W1.negate(),
									Z?.negate(),
									u.EditorContextKeys.focus.negate(),
									z.$pJb.negate(),
								),
								primary: C.KeyMod.CtrlCmd | C.KeyCode.KeyI,
							},
						});
					}
					async run(je, Ve) {
						const Ze = je.get(o.$Li),
							et = je.get(f.$uZ),
							rt = je.get(J.$HMb),
							ft = et.enableKeybindingHoldMode(me.ID);
						let bt;
						const nt = (0, t.$Oh)(async () => {
							const lt = await pe.create(je, "view");
							lt &&
								((bt = await $e.getInstance(Ze).start(lt, Ve)),
								bt.setTimeoutDisabled(!0));
						}, e.$Qgd);
						(await (0, L.$HYb)(rt))?.focusInput(),
							await ft,
							nt.dispose(),
							bt && bt.accept();
					}
				}
				e.$Sgd = me;
				class ve extends ue {
					static {
						this.ID = "workbench.action.chat.inlineVoiceChat";
					}
					constructor() {
						super(
							{
								id: ve.ID,
								title: (0, a.localize2)(4804, "Inline Voice Chat"),
								category: k.$3Yb,
								precondition: p.$Kj.and(Q, I.$TPb, M.$W1.negate()),
								f1: !0,
							},
							"inline",
						);
					}
				}
				e.$Tgd = ve;
				class ge extends ue {
					static {
						this.ID = "workbench.action.chat.quickVoiceChat";
					}
					constructor() {
						super(
							{
								id: ge.ID,
								title: (0, a.localize2)(4805, "Quick Voice Chat"),
								category: k.$3Yb,
								precondition: p.$Kj.and(Q, M.$W1.negate()),
								f1: !0,
							},
							"quick",
						);
					}
				}
				e.$Ugd = ge;
				class be extends h.$3X {
					static {
						this.ID = "workbench.action.chat.startVoiceChat";
					}
					constructor() {
						super({
							id: be.ID,
							title: (0, a.localize2)(4806, "Start Voice Chat"),
							category: k.$3Yb,
							f1: !0,
							keybinding: {
								weight: b.KeybindingWeight.WorkbenchContrib,
								when: p.$Kj.and(
									Z,
									u.EditorContextKeys.focus.negate(),
									z.$pJb.negate(),
								),
								primary: C.KeyMod.CtrlCmd | C.KeyCode.KeyI,
							},
							icon: w.$ak.mic,
							precondition: p.$Kj.and(
								Q,
								re.negate(),
								se?.negate(),
								F.$X7.negate(),
							),
							menu: [
								{
									id: h.$XX.ChatExecute,
									when: p.$Kj.and(F.$W7, Fe.negate(), oe?.negate()),
									group: "navigation",
									order: -1,
								},
								{
									id: te,
									when: p.$Kj.and(F.$W7, Fe.negate(), oe?.negate()),
									group: "navigation",
									order: -1,
								},
							],
						});
					}
					async run(je, Ve) {
						const Ze = Ve?.widget;
						return Ze && Ze.focusInput(), ye(this.desc.id, je, "focused", Ve);
					}
				}
				e.$Vgd = be;
				class Ce extends h.$3X {
					static {
						this.ID = "workbench.action.chat.stopListening";
					}
					constructor() {
						super({
							id: Ce.ID,
							title: (0, a.localize2)(4807, "Stop Listening"),
							category: k.$3Yb,
							f1: !0,
							keybinding: {
								weight: b.KeybindingWeight.WorkbenchContrib + 100,
								primary: C.KeyCode.Escape,
								when: oe,
							},
							icon: $.$fP,
							precondition: R.$1Ic,
							menu: [
								{
									id: h.$XX.ChatExecute,
									when: oe,
									group: "navigation",
									order: -1,
								},
								{ id: te, when: oe, group: "navigation", order: -1 },
							],
						});
					}
					async run(je) {
						$e.getInstance(je.get(o.$Li)).stop();
					}
				}
				e.$Wgd = Ce;
				class Le extends h.$3X {
					static {
						this.ID = "workbench.action.chat.stopListeningAndSubmit";
					}
					constructor() {
						super({
							id: Le.ID,
							title: (0, a.localize2)(4808, "Stop Listening and Submit"),
							category: k.$3Yb,
							f1: !0,
							keybinding: {
								weight: b.KeybindingWeight.WorkbenchContrib,
								when: p.$Kj.and(Z, oe),
								primary: C.KeyMod.CtrlCmd | C.KeyCode.KeyI,
							},
							precondition: R.$1Ic,
						});
					}
					run(je) {
						$e.getInstance(je.get(o.$Li)).accept();
					}
				}
				e.$Xgd = Le;
				const Fe = new p.$5j("scopedChatSynthesisInProgress", !1, {
					type: "boolean",
					description: (0, a.localize)(4790, null),
				});
				class Oe {
					static create(je, Ve, Ze) {
						return Ve === "focused"
							? Oe.a(je, Ze)
							: {
									onDidHideChat: Ve.onDidHideInput,
									contextKeyService: Ve.scopedContextKeyService,
									response: Ze,
								};
					}
					static a(je, Ve) {
						const Ze = je.get(L.$GYb),
							et = je.get(p.$6j),
							ft = je.get(x.$iIb).activeInstance;
						if (ft) {
							const nt =
								H.TerminalChatController.activeChatWidget ||
								H.TerminalChatController.get(ft);
							if (nt?.hasFocus())
								return {
									onDidHideChat: nt.onDidHide,
									contextKeyService: nt.scopedContextKeyService,
									response: Ve,
								};
						}
						let bt = Ze.getWidgetBySessionId(Ve.session.sessionId);
						return (
							bt?.location === D.ChatAgentLocation.Editor &&
								(bt = Ze.lastFocusedWidget),
							{
								onDidHideChat: bt?.onDidHide ?? E.Event.None,
								contextKeyService: bt?.scopedContextKeyService ?? et,
								response: Ve,
							}
						);
					}
				}
				let xe = class {
					static {
						ie = this;
					}
					static {
						this.a = void 0;
					}
					static getInstance(je) {
						return ie.a || (ie.a = je.createInstance(ie)), ie.a;
					}
					constructor(je, Ve) {
						(this.c = je), (this.d = Ve), (this.b = void 0);
					}
					async start(je) {
						this.stop(), $e.getInstance(this.d).stop();
						const Ve = (this.b = new i.$Ce()),
							Ze = new d.$Zc();
						Ve.token.onCancellationRequested(() => Ze.dispose());
						const et = await this.c.createTextToSpeechSession(Ve.token, "chat");
						if (Ve.token.isCancellationRequested) return;
						Ze.add(je.onDidHideChat(() => this.stop()));
						const rt = Fe.bindTo(je.contextKeyService);
						Ze.add((0, d.$Yc)(() => rt.reset())),
							Ze.add(
								et.onDidChange((ft) => {
									switch (ft.status) {
										case F.TextToSpeechStatus.Started:
											rt.set(!0);
											break;
										case F.TextToSpeechStatus.Stopped:
											rt.reset();
											break;
									}
								}),
							);
						for await (const ft of this.f(je.response, Ve.token)) {
							if (Ve.token.isCancellationRequested) return;
							await (0, t.$Ah)(et.synthesize(ft), Ve.token);
						}
					}
					async *f(je, Ve) {
						let Ze = 0,
							et = !1;
						do {
							const rt = je.response.toString().length,
								{ chunk: ft, offset: bt } = this.g(je, Ze);
							if (
								((Ze = bt),
								(et = je.isComplete),
								ft && (yield ft),
								Ve.isCancellationRequested)
							)
								return;
							!et &&
								rt === je.response.toString().length &&
								(await (0, t.$Ah)(E.Event.toPromise(je.onDidChange), Ve));
						} while (!Ve.isCancellationRequested && !et);
					}
					g(je, Ve) {
						let Ze;
						const et = je.response.toString();
						if (je.isComplete) (Ze = et.substring(Ve)), (Ve = et.length + 1);
						else {
							const rt = Te(et, Ve);
							(Ze = rt.chunk), (Ve = rt.offset);
						}
						return { chunk: Ze && (0, X.$Wib)({ value: Ze }), offset: Ve };
					}
					stop() {
						this.b?.dispose(!0), (this.b = void 0);
					}
				};
				xe = ie = Ne([j(0, F.$V7), j(1, o.$Li)], xe);
				const He = [".", "!", "?", ":"],
					Ke = `
`,
					Je = " ";
				function Te(Re, je) {
					let Ve;
					for (let Ze = Re.length - 1; Ze >= je; Ze--) {
						const et = Re[Ze],
							rt = Re[Ze + 1];
						if ((He.includes(et) && rt === Je) || Ke === et) {
							(Ve = Re.substring(je, Ze + 1).trim()), (je = Ze + 1);
							break;
						}
					}
					return { chunk: Ve, offset: je };
				}
				class Ee extends h.$3X {
					constructor() {
						super({
							id: "workbench.action.chat.readChatResponseAloud",
							title: (0, a.localize2)(4809, "Read Aloud"),
							icon: w.$ak.unmute,
							precondition: Q,
							menu: [
								{
									id: h.$XX.ChatMessageTitle,
									when: p.$Kj.and(Q, M.$X1, Fe.negate(), M.$U1.negate()),
									group: "navigation",
								},
								{
									id: U.$kLb,
									when: p.$Kj.and(Q, M.$X1, Fe.negate(), M.$U1.negate()),
									group: "navigation",
								},
							],
						});
					}
					run(je, ...Ve) {
						const Ze = je.get(o.$Li),
							et = Ve[0];
						if (!(0, A.$$Tb)(et)) return;
						const rt = Oe.create(je, "focused", et.model);
						xe.getInstance(Ze).start(rt);
					}
				}
				e.$Zgd = Ee;
				class Ie extends h.$3X {
					static {
						this.ID = "workbench.action.speech.stopReadAloud";
					}
					constructor() {
						super({
							id: Ie.ID,
							icon: $.$eP,
							title: (0, a.localize2)(4810, "Stop Reading Aloud"),
							f1: !0,
							category: k.$3Yb,
							precondition: F.$Y7,
							keybinding: {
								weight: b.KeybindingWeight.WorkbenchContrib + 100,
								primary: C.KeyCode.Escape,
								when: Fe,
							},
							menu: [
								{
									id: h.$XX.ChatExecute,
									when: Fe,
									group: "navigation",
									order: -1,
								},
								{ id: te, when: Fe, group: "navigation", order: -1 },
							],
						});
					}
					async run(je) {
						xe.getInstance(je.get(o.$Li)).stop();
					}
				}
				e.$1gd = Ie;
				class Be extends h.$3X {
					static {
						this.ID = "workbench.action.chat.stopReadChatItemAloud";
					}
					constructor() {
						super({
							id: Be.ID,
							icon: w.$ak.mute,
							title: (0, a.localize2)(4811, "Stop Reading Aloud"),
							precondition: Fe,
							keybinding: {
								weight: b.KeybindingWeight.WorkbenchContrib + 100,
								primary: C.KeyCode.Escape,
							},
							menu: [
								{
									id: h.$XX.ChatMessageTitle,
									when: p.$Kj.and(Fe, M.$X1, M.$U1.negate()),
									group: "navigation",
								},
								{
									id: U.$kLb,
									when: p.$Kj.and(Fe, M.$X1, M.$U1.negate()),
									group: "navigation",
								},
							],
						});
					}
					async run(je, ...Ve) {
						xe.getInstance(je.get(o.$Li)).stop();
					}
				}
				e.$2gd = Be;
				function Se(Re, je, Ve) {
					if (
						!je.hasSpeechProvider ||
						!Ve.getDefaultAgent(D.ChatAgentLocation.Panel)
					)
						return !1;
					const Ze = Re.getValue(N.$K2);
					return typeof Ze == "string" && Ze !== ke.SETTINGS_VALUE.OFF;
				}
				let ke = class extends d.$1c {
					static {
						ne = this;
					}
					static {
						this.ID = "workbench.contrib.keywordActivation";
					}
					static {
						this.SETTINGS_VALUE = {
							OFF: "off",
							INLINE_CHAT: "inlineChat",
							QUICK_CHAT: "quickChat",
							VIEW_CHAT: "chatInView",
							CHAT_IN_CONTEXT: "chatInContext",
						};
					}
					constructor(je, Ve, Ze, et, rt, ft, bt) {
						super(),
							(this.b = je),
							(this.c = Ve),
							(this.f = Ze),
							(this.g = rt),
							(this.h = ft),
							(this.j = bt),
							(this.a = void 0),
							this.D(et.createInstance(Ue)),
							this.m();
					}
					m() {
						this.D(
							E.Event.runAndSubscribe(
								this.b.onDidChangeHasSpeechProvider,
								() => {
									this.n(), this.q();
								},
							),
						);
						const je = this.D(
							this.j.onDidChangeAgents(() => {
								this.j.getDefaultAgent(D.ChatAgentLocation.Panel) &&
									(this.n(), this.q(), je.dispose());
							}),
						);
						this.D(this.b.onDidStartSpeechToTextSession(() => this.q())),
							this.D(this.b.onDidEndSpeechToTextSession(() => this.q())),
							this.D(
								this.c.onDidChangeConfiguration((Ve) => {
									Ve.affectsConfiguration(N.$K2) && this.q();
								}),
							);
					}
					n() {
						if (
							!this.b.hasSpeechProvider ||
							!this.j.getDefaultAgent(D.ChatAgentLocation.Panel)
						)
							return;
						l.$Io
							.as(g.$No.Configuration)
							.registerConfiguration({
								...P.$XLb,
								properties: {
									[N.$K2]: {
										type: "string",
										enum: [
											ne.SETTINGS_VALUE.OFF,
											ne.SETTINGS_VALUE.VIEW_CHAT,
											ne.SETTINGS_VALUE.QUICK_CHAT,
											ne.SETTINGS_VALUE.INLINE_CHAT,
											ne.SETTINGS_VALUE.CHAT_IN_CONTEXT,
										],
										enumDescriptions: [
											(0, a.localize)(4791, null),
											(0, a.localize)(4792, null),
											(0, a.localize)(4793, null),
											(0, a.localize)(4794, null),
											(0, a.localize)(4795, null),
										],
										description: (0, a.localize)(4796, null),
										default: "off",
										tags: ["accessibility"],
									},
								},
							});
					}
					q() {
						const je =
							Se(this.c, this.b, this.j) &&
							!this.b.hasActiveSpeechToTextSession;
						(je && this.a) || (!je && !this.a) || (je ? this.r() : this.t());
					}
					async r() {
						const je = (this.a = new i.$Ce()),
							Ve = await this.b.recognizeKeyword(je.token);
						je.token.isCancellationRequested ||
							je !== this.a ||
							((this.a = void 0),
							Ve === F.KeywordRecognitionStatus.Recognized &&
								(this.h.hasFocus && this.f.executeCommand(this.s()), this.q()));
					}
					s() {
						switch (this.c.getValue(N.$K2)) {
							case ne.SETTINGS_VALUE.INLINE_CHAT:
								return ve.ID;
							case ne.SETTINGS_VALUE.QUICK_CHAT:
								return ge.ID;
							case ne.SETTINGS_VALUE.CHAT_IN_CONTEXT:
								if (
									(0, r.$btb)(this.g.activeTextEditorControl)?.hasWidgetFocus()
								)
									return ve.ID;
							default:
								return fe.ID;
						}
					}
					t() {
						this.a?.dispose(!0), (this.a = void 0);
					}
					dispose() {
						this.a?.dispose(), super.dispose();
					}
				};
				(e.$3gd = ke),
					(e.$3gd =
						ke =
						ne =
							Ne(
								[
									j(0, F.$V7),
									j(1, n.$gj),
									j(2, c.$ek),
									j(3, o.$Li),
									j(4, q.$IY),
									j(5, V.$asb),
									j(6, D.$c3),
								],
								ke,
							));
				let Ue = class extends d.$1c {
					static {
						ee = this;
					}
					static {
						this.b = (0, a.localize)(4797, null);
					}
					static {
						this.c = "keywordActivation.status.command";
					}
					static {
						this.f = (0, a.localize)(4798, null);
					}
					static {
						this.g = (0, a.localize)(4799, null);
					}
					constructor(je, Ve, Ze, et, rt) {
						super(),
							(this.h = je),
							(this.j = Ve),
							(this.m = Ze),
							(this.n = et),
							(this.q = rt),
							(this.a = this.D(new d.$2c())),
							this.D(
								c.$fk.registerCommand(ee.c, () =>
									this.m.executeCommand("workbench.action.openSettings", N.$K2),
								),
							),
							this.r(),
							this.s();
					}
					r() {
						this.D(this.h.onDidStartKeywordRecognition(() => this.s())),
							this.D(this.h.onDidEndKeywordRecognition(() => this.s())),
							this.D(
								this.n.onDidChangeConfiguration((je) => {
									je.affectsConfiguration(N.$K2) && this.s();
								}),
							);
					}
					s() {
						Se(this.n, this.h, this.q)
							? (this.a.value || this.t(), this.w())
							: this.a.clear();
					}
					t() {
						this.a.value = this.j.addEntry(
							this.u(),
							"status.voiceKeywordActivation",
							K.StatusbarAlignment.RIGHT,
							103,
						);
					}
					u() {
						return {
							name: ee.b,
							text: this.h.hasActiveKeywordRecognition
								? "$(mic-filled)"
								: "$(mic)",
							tooltip: this.h.hasActiveKeywordRecognition ? ee.f : ee.g,
							ariaLabel: this.h.hasActiveKeywordRecognition ? ee.f : ee.g,
							command: ee.c,
							kind: "prominent",
							showInAllWindows: !0,
						};
					}
					w() {
						this.a.value?.update(this.u());
					}
				};
				Ue = ee = Ne(
					[j(0, F.$V7), j(1, K.$d6b), j(2, c.$ek), j(3, n.$gj), j(4, D.$c3)],
					Ue,
				);
				const qe = new p.$5j("installingSpeechProvider", !1, !0);
				class Ae extends h.$3X {
					static {
						this.a = "ms-vscode.vscode-speech";
					}
					async run(je) {
						const Ve = je.get(p.$6j),
							Ze = je.get(O.$MQb);
						try {
							qe.bindTo(Ve).set(!0),
								await Ze.install(
									Ae.a,
									{ justification: this.b(), enable: !0 },
									s.ProgressLocation.Notification,
								);
						} finally {
							qe.bindTo(Ve).reset();
						}
					}
				}
				class Me extends Ae {
					static {
						this.ID = "workbench.action.chat.installProviderForVoiceChat";
					}
					constructor() {
						super({
							id: Me.ID,
							title: (0, a.localize2)(4812, "Start Voice Chat"),
							icon: w.$ak.mic,
							precondition: qe.negate(),
							menu: [
								{
									id: h.$XX.ChatExecute,
									when: F.$W7.negate(),
									group: "navigation",
									order: -1,
								},
								{
									id: te,
									when: F.$W7.negate(),
									group: "navigation",
									order: -1,
								},
							],
						});
					}
					b() {
						return (0, a.localize)(4800, null);
					}
				}
				e.$4gd = Me;
				class De extends Ae {
					static {
						this.ID = "workbench.action.chat.installProviderForSynthesis";
					}
					constructor() {
						super({
							id: De.ID,
							title: (0, a.localize2)(4813, "Read Aloud"),
							icon: w.$ak.unmute,
							precondition: qe.negate(),
							menu: [
								{
									id: h.$XX.ChatMessageTitle,
									when: F.$W7.negate(),
									group: "navigation",
								},
							],
						});
					}
					b() {
						return (0, a.localize)(4801, null);
					}
				}
				(e.$5gd = De),
					(0, S.$oP)((Re, je) => {
						let Ve, Ze;
						Re.type === v.ColorScheme.LIGHT || Re.type === v.ColorScheme.DARK
							? ((Ve = Re.getColor(T.$cGb) ?? Re.getColor(y.$NP)),
								(Ze = Ve?.transparent(0.38)))
							: ((Ve = Re.getColor(y.$OP)), (Ze = Re.getColor(y.$OP))),
							je.addRule(`
		.monaco-workbench:not(.reduce-motion) .interactive-input-part .monaco-action-bar .action-label.codicon-sync.codicon-modifier-spin:not(.disabled),
		.monaco-workbench:not(.reduce-motion) .interactive-input-part .monaco-action-bar .action-label.codicon-loading.codicon-modifier-spin:not(.disabled) {
			color: ${Ve};
			outline: 1px solid ${Ve};
			outline-offset: -1px;
			animation: pulseAnimation 1s infinite;
			border-radius: 50%;
		}

		.monaco-workbench:not(.reduce-motion) .interactive-input-part .monaco-action-bar .action-label.codicon-sync.codicon-modifier-spin:not(.disabled)::before,
		.monaco-workbench:not(.reduce-motion) .interactive-input-part .monaco-action-bar .action-label.codicon-loading.codicon-modifier-spin:not(.disabled)::before {
			position: absolute;
			outline: 1px solid ${Ve};
			outline-offset: 2px;
			border-radius: 50%;
			width: 16px;
			height: 16px;
		}

		.monaco-workbench:not(.reduce-motion) .interactive-input-part .monaco-action-bar .action-label.codicon-sync.codicon-modifier-spin:not(.disabled)::after,
		.monaco-workbench:not(.reduce-motion) .interactive-input-part .monaco-action-bar .action-label.codicon-loading.codicon-modifier-spin:not(.disabled)::after {
			outline: 2px solid ${Ve};
			outline-offset: -1px;
			animation: pulseAnimation 1500ms cubic-bezier(0.75, 0, 0.25, 1) infinite;
		}

		.monaco-workbench:not(.reduce-motion) .interactive-input-part .monaco-action-bar .action-label.codicon-sync.codicon-modifier-spin:not(.disabled)::before,
		.monaco-workbench:not(.reduce-motion) .interactive-input-part .monaco-action-bar .action-label.codicon-loading.codicon-modifier-spin:not(.disabled)::before {
			position: absolute;
			outline: 1px solid ${Ve};
			outline-offset: 2px;
			border-radius: 50%;
			width: 16px;
			height: 16px;
		}

		@keyframes pulseAnimation {
			0% {
				outline-width: 2px;
			}
			62% {
				outline-width: 5px;
				outline-color: ${Ze};
			}
			100% {
				outline-width: 2px;
			}
		}
	`);
					});
			},
		),
		