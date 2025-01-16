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
		