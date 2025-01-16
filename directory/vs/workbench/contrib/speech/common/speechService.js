define(de[511], he([1, 0, 4, 8, 5, 12]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$17 =
					e.$Z7 =
					e.AccessibilityVoiceSettingId =
					e.KeywordRecognitionStatus =
					e.TextToSpeechStatus =
					e.SpeechToTextStatus =
					e.$Y7 =
					e.$X7 =
					e.$W7 =
					e.$V7 =
						void 0),
				(e.$27 = u),
				(e.$V7 = (0, w.$Mi)("speechService")),
				(e.$W7 = new i.$5j("hasSpeechProvider", !1, {
					type: "boolean",
					description: (0, t.localize)(9491, null),
				})),
				(e.$X7 = new i.$5j("speechToTextInProgress", !1, {
					type: "boolean",
					description: (0, t.localize)(9492, null),
				})),
				(e.$Y7 = new i.$5j("textToSpeechInProgress", !1, {
					type: "boolean",
					description: (0, t.localize)(9493, null),
				}));
			var C;
			(function (a) {
				(a[(a.Started = 1)] = "Started"),
					(a[(a.Recognizing = 2)] = "Recognizing"),
					(a[(a.Recognized = 3)] = "Recognized"),
					(a[(a.Stopped = 4)] = "Stopped"),
					(a[(a.Error = 5)] = "Error");
			})(C || (e.SpeechToTextStatus = C = {}));
			var d;
			(function (a) {
				(a[(a.Started = 1)] = "Started"),
					(a[(a.Stopped = 2)] = "Stopped"),
					(a[(a.Error = 3)] = "Error");
			})(d || (e.TextToSpeechStatus = d = {}));
			var m;
			(function (a) {
				(a[(a.Recognized = 1)] = "Recognized"),
					(a[(a.Stopped = 2)] = "Stopped"),
					(a[(a.Canceled = 3)] = "Canceled");
			})(m || (e.KeywordRecognitionStatus = m = {}));
			var r;
			(function (a) {
				(a.SpeechTimeout = "accessibility.voice.speechTimeout"),
					(a.AutoSynthesize = "accessibility.voice.autoSynthesize"),
					(a.SpeechLanguage = "accessibility.voice.speechLanguage");
			})(r || (e.AccessibilityVoiceSettingId = r = {})),
				(e.$Z7 = r.SpeechLanguage),
				(e.$17 = {
					"da-DK": { name: (0, t.localize)(9494, null) },
					"de-DE": { name: (0, t.localize)(9495, null) },
					"en-AU": { name: (0, t.localize)(9496, null) },
					"en-CA": { name: (0, t.localize)(9497, null) },
					"en-GB": { name: (0, t.localize)(9498, null) },
					"en-IE": { name: (0, t.localize)(9499, null) },
					"en-IN": { name: (0, t.localize)(9500, null) },
					"en-NZ": { name: (0, t.localize)(9501, null) },
					"en-US": { name: (0, t.localize)(9502, null) },
					"es-ES": { name: (0, t.localize)(9503, null) },
					"es-MX": { name: (0, t.localize)(9504, null) },
					"fr-CA": { name: (0, t.localize)(9505, null) },
					"fr-FR": { name: (0, t.localize)(9506, null) },
					"hi-IN": { name: (0, t.localize)(9507, null) },
					"it-IT": { name: (0, t.localize)(9508, null) },
					"ja-JP": { name: (0, t.localize)(9509, null) },
					"ko-KR": { name: (0, t.localize)(9510, null) },
					"nl-NL": { name: (0, t.localize)(9511, null) },
					"pt-PT": { name: (0, t.localize)(9512, null) },
					"pt-BR": { name: (0, t.localize)(9513, null) },
					"ru-RU": { name: (0, t.localize)(9514, null) },
					"sv-SE": { name: (0, t.localize)(9515, null) },
					"tr-TR": { name: (0, t.localize)(9516, null) },
					"zh-CN": { name: (0, t.localize)(9517, null) },
					"zh-HK": { name: (0, t.localize)(9518, null) },
					"zh-TW": { name: (0, t.localize)(9519, null) },
				});
			function u(a, h = E.$z) {
				if (typeof a == "string") {
					if (a === "auto") {
						if (h !== "en") {
							const c = h.split("-");
							return u(`${c[0]}-${(c[1] ?? c[0]).toUpperCase()}`);
						}
					} else if (e.$17[a]) return a;
				}
				return "en-US";
			}
		}),
		define(
			de[1755],
			he([1, 0, 4, 6, 3, 37, 8, 5, 153, 329, 511]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				var a;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2Ic = e.$1Ic = e.$ZIc = void 0),
					(e.$ZIc = (0, d.$Mi)("voiceChatService"));
				var h;
				(function (n) {
					(n[(n.AGENT = 1)] = "AGENT"),
						(n[(n.COMMAND = 2)] = "COMMAND"),
						(n[(n.AGENT_AND_COMMAND = 3)] = "AGENT_AND_COMMAND");
				})(h || (h = {})),
					(e.$1Ic = new C.$5j("voiceChatInProgress", !1, {
						type: "boolean",
						description: (0, t.localize)(4786, null),
					}));
				let c = class extends w.$1c {
					static {
						a = this;
					}
					static {
						this.a = r.$Q2;
					}
					static {
						this.b = r.$R2;
					}
					static {
						this.c = { [this.a]: "at", [this.b]: "slash" };
					}
					static {
						this.f = { [this.a]: "At", [this.b]: "Slash" };
					}
					static {
						this.g = new Map([["vscode", "code"]]);
					}
					constructor(g, p, o) {
						super(),
							(this.m = g),
							(this.n = p),
							(this.q = o),
							(this.h = e.$1Ic.bindTo(this.q)),
							(this.j = 0);
					}
					r(g) {
						const p = new Map();
						for (const o of this.n.getActivatedAgents()) {
							const f =
								`${a.c[a.a]} ${a.g.get(o.name) ?? o.name}`.toLowerCase();
							p.set(f, { agent: o.name });
							for (const b of o.slashCommands) {
								const s = `${a.c[a.b]} ${b.name}`.toLowerCase();
								p.set(s, { agent: o.name, command: b.name });
								const l = `${f} ${s}`.toLowerCase();
								p.set(l, { agent: o.name, command: b.name });
							}
						}
						return p;
					}
					s(g, p) {
						switch (p) {
							case h.AGENT:
								return `${a.a}${g.agent}`;
							case h.COMMAND:
								return `${a.b}${g.command}`;
							case h.AGENT_AND_COMMAND:
								return `${a.a}${g.agent} ${a.b}${g.command}`;
						}
					}
					async createVoiceChatSession(g, p) {
						const o = new w.$Zc(),
							f = (v) => {
								(this.j = Math.max(0, this.j - 1)),
									this.j === 0 && this.h.reset(),
									v && o.dispose();
							};
						o.add(g.onCancellationRequested(() => f(!0)));
						let b = !1,
							s = !1;
						const l = o.add(new i.$re()),
							y = await this.m.createSpeechToTextSession(g, "chat");
						g.isCancellationRequested && f(!0);
						const $ = this.r(p.model);
						return (
							o.add(
								y.onDidChange((v) => {
									switch (v.status) {
										case u.SpeechToTextStatus.Recognizing:
										case u.SpeechToTextStatus.Recognized: {
											let S = v;
											if (v.text) {
												const I =
														v.text.startsWith(a.f[a.a]) ||
														v.text.startsWith(a.c[a.a]),
													T =
														v.text.startsWith(a.f[a.b]) ||
														v.text.startsWith(a.c[a.b]);
												if (I || T) {
													const P = v.text.split(" ");
													let k,
														L = !1;
													if (p.usesAgents && I && !b && !s && P.length >= 4) {
														const D = $.get(
															P.slice(0, 4)
																.map((M) => this.t(M))
																.join(" "),
														);
														D &&
															((k = [
																this.s(D, h.AGENT_AND_COMMAND),
																...P.slice(4),
															]),
															(L = P.length === 4),
															v.status === u.SpeechToTextStatus.Recognized &&
																((b = !0), (s = !0)));
													}
													if (p.usesAgents && I && !b && !k && P.length >= 2) {
														const D = $.get(
															P.slice(0, 2)
																.map((M) => this.t(M))
																.join(" "),
														);
														D &&
															((k = [this.s(D, h.AGENT), ...P.slice(2)]),
															(L = P.length === 2),
															v.status === u.SpeechToTextStatus.Recognized &&
																(b = !0));
													}
													if (T && !s && !k && P.length >= 2) {
														const D = $.get(
															P.slice(0, 2)
																.map((M) => this.t(M))
																.join(" "),
														);
														D &&
															((k = [
																this.s(
																	D,
																	p.usesAgents && !b
																		? h.AGENT_AND_COMMAND
																		: h.COMMAND,
																),
																...P.slice(2),
															]),
															(L = P.length === 2),
															v.status === u.SpeechToTextStatus.Recognized &&
																(s = !0));
													}
													S = {
														status: v.status,
														text: (k ?? P).join(" "),
														waitingForInput: L,
													};
												}
											}
											l.fire(S);
											break;
										}
										case u.SpeechToTextStatus.Started:
											this.j++, this.h.set(!0), l.fire(v);
											break;
										case u.SpeechToTextStatus.Stopped:
											f(!1), l.fire(v);
											break;
										case u.SpeechToTextStatus.Error:
											l.fire(v);
											break;
									}
								}),
							),
							{ onDidChange: l.event }
						);
					}
					t(g) {
						return (
							(g = (0, E.$uf)(g, ".")),
							(g = (0, E.$uf)(g, ",")),
							(g = (0, E.$uf)(g, "?")),
							g.toLowerCase()
						);
					}
				};
				(e.$2Ic = c),
					(e.$2Ic = c = a = Ne([j(0, u.$V7), j(1, m.$c3), j(2, C.$6j)], c));
			},
		),
		define(
			de[1259],
			he([
				1, 0, 4, 33, 3, 56, 8, 511, 14, 38, 46, 71, 27, 43, 39, 188, 104, 48,
				17, 11, 28, 105, 50, 26, 12, 2397,
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
				var S;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_2b = e.$$2b = e.$02b = e.$92b = void 0);
				const I = new C.$5j("editorDictation.inProgress", !1),
					T = (0, t.localize2)(4849, "Voice");
				class P extends u.$ktb {
					constructor() {
						super({
							id: "workbench.action.editorDictation.start",
							title: (0, t.localize2)(4850, "Start Dictation in Editor"),
							category: T,
							precondition: C.$Kj.and(
								d.$W7,
								d.$X7.toNegated(),
								a.EditorContextKeys.readOnly.toNegated(),
							),
							f1: !0,
							keybinding: {
								primary: h.KeyMod.CtrlCmd | h.KeyMod.Alt | h.KeyCode.KeyV,
								weight: c.KeybindingWeight.WorkbenchContrib,
								secondary: v.$l ? [h.KeyMod.Alt | h.KeyCode.Backquote] : void 0,
							},
						});
					}
					runEditorCommand(N, A) {
						const O = N.get(n.$uZ).enableKeybindingHoldMode(this.desc.id);
						if (O) {
							let B = !1;
							const U = setTimeout(() => {
								B = !0;
							}, 500);
							O.finally(() => {
								clearTimeout(U), B && D.get(A)?.stop();
							});
						}
						D.get(A)?.start();
					}
				}
				e.$92b = P;
				class k extends u.$ktb {
					static {
						this.ID = "workbench.action.editorDictation.stop";
					}
					constructor() {
						super({
							id: k.ID,
							title: (0, t.localize2)(4851, "Stop Dictation in Editor"),
							category: T,
							precondition: I,
							f1: !0,
							keybinding: {
								primary: h.KeyCode.Escape,
								weight: c.KeybindingWeight.WorkbenchContrib + 100,
							},
						});
					}
					runEditorCommand(N, A) {
						D.get(A)?.stop();
					}
				}
				e.$02b = k;
				class L extends w.$1c {
					constructor(N, A) {
						super(),
							(this.b = N),
							(this.suppressMouseDown = !0),
							(this.allowEditorOverflow = !0),
							(this.a = document.createElement("div"));
						const R = this.D(new l.$eib(this.a)),
							O = A.lookupKeybinding(k.ID)?.getLabel();
						R.push(
							(0, y.$wj)({
								id: k.ID,
								label: O
									? (0, t.localize)(4847, null, O)
									: (0, t.localize)(4848, null),
								class: $.ThemeIcon.asClassName(m.$ak.micFilled),
								run: () => D.get(N)?.stop(),
							}),
							{ icon: !0, label: !1, keybinding: O },
						),
							this.a.classList.add("editor-dictation-widget"),
							this.a.appendChild(R.domNode);
					}
					getId() {
						return "editorDictation";
					}
					getDomNode() {
						return this.a;
					}
					getPosition() {
						if (!this.b.hasModel()) return null;
						const N = this.b.getSelection();
						return {
							position: N.getPosition(),
							preference: [
								N.getPosition().equals(N.getStartPosition())
									? E.ContentWidgetPositionPreference.ABOVE
									: E.ContentWidgetPositionPreference.BELOW,
								E.ContentWidgetPositionPreference.EXACT,
							],
						};
					}
					beforeRender() {
						const N = this.b.getOption(r.EditorOption.lineHeight),
							A = this.b.getLayoutInfo().contentWidth * 0.7;
						return (
							this.a.style.setProperty(
								"--vscode-editor-dictation-widget-height",
								`${N}px`,
							),
							this.a.style.setProperty(
								"--vscode-editor-dictation-widget-width",
								`${A}px`,
							),
							null
						);
					}
					show() {
						this.b.addContentWidget(this);
					}
					layout() {
						this.b.layoutContentWidget(this);
					}
					active() {
						this.a.classList.add("recording");
					}
					hide() {
						this.a.classList.remove("recording"),
							this.b.removeContentWidget(this);
					}
				}
				e.$$2b = L;
				let D = class extends w.$1c {
					static {
						S = this;
					}
					static {
						this.ID = "editorDictation";
					}
					static get(N) {
						return N.getContribution(S.ID);
					}
					constructor(N, A, R, O) {
						super(),
							(this.f = N),
							(this.g = A),
							(this.h = R),
							(this.j = O),
							(this.a = this.D(new L(this.f, this.j))),
							(this.b = I.bindTo(this.h)),
							(this.c = this.D(new w.$2c()));
					}
					async start() {
						const N = new w.$Zc();
						(this.c.value = N),
							this.a.show(),
							N.add((0, w.$Yc)(() => this.a.hide())),
							this.b.set(!0),
							N.add((0, w.$Yc)(() => this.b.reset()));
						const A = this.f.createDecorationsCollection();
						N.add((0, w.$Yc)(() => A.clear())),
							N.add(this.f.onDidChangeCursorPosition(() => this.a.layout()));
						let R,
							O = 0;
						const B = (F, x) => {
								R || (R = (0, s.$wg)(this.f.getPosition()));
								const H = new o.$hL(R.lineNumber, R.column + F.length);
								this.f.executeEdits(
									S.ID,
									[
										g.$jL.replace(
											f.$iL.fromPositions(R, R.with(void 0, R.column + O)),
											F,
										),
									],
									[p.$kL.fromPositions(H)],
								),
									x
										? A.set([
												{
													range: f.$iL.fromPositions(
														R,
														R.with(void 0, R.column + F.length),
													),
													options: {
														description: "editor-dictation-preview",
														inlineClassName: "ghost-text-decoration-preview",
													},
												},
											])
										: A.clear(),
									(O = F.length),
									x || ((R = void 0), (O = 0)),
									this.f.revealPositionInCenterIfOutsideViewport(H);
							},
							U = new i.$Ce();
						N.add((0, w.$Yc)(() => U.dispose(!0)));
						const z = await this.g.createSpeechToTextSession(U.token, "editor");
						N.add(
							z.onDidChange((F) => {
								if (!U.token.isCancellationRequested)
									switch (F.status) {
										case d.SpeechToTextStatus.Started:
											this.a.active();
											break;
										case d.SpeechToTextStatus.Stopped:
											N.dispose();
											break;
										case d.SpeechToTextStatus.Recognizing: {
											if (!F.text) return;
											B(F.text, !0);
											break;
										}
										case d.SpeechToTextStatus.Recognized: {
											if (!F.text) return;
											B(`${F.text} `, !1);
											break;
										}
									}
							}),
						);
					}
					stop() {
						this.c.clear();
					}
				};
				(e.$_2b = D),
					(e.$_2b = D = S = Ne([j(1, d.$V7), j(2, C.$6j), j(3, n.$uZ)], D)),
					(0, u.$qtb)(D.ID, D, u.EditorContributionInstantiation.Lazy),
					(0, b.$4X)(P),
					(0, b.$4X)(k);
			},
		),
		