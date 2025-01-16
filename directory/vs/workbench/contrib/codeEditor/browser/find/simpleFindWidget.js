define(
			de[1722],
			he([
				1, 0, 4, 7, 235, 15, 27, 786, 961, 413, 79, 35, 37, 664, 127, 106, 277,
				51, 2399,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$RVc = e.$QVc = void 0),
					(t = mt(t)),
					(i = mt(i)),
					(h = mt(h));
				const f = t.localize(4868, null),
					b = t.localize(4869, null),
					s = t.localize(4870, null),
					l = t.localize(4871, null),
					y = t.localize(4872, null),
					$ = 310,
					v = 73;
				class S extends w.$Uhb {
					constructor(T, P, k, L, D) {
						super(),
							(this.M = D),
							(this.y = !1),
							(this.J = !1),
							(this.L = 0),
							(this.state = new d.$l2b()),
							(this.t = T.matchesLimit ?? Number.MAX_SAFE_INTEGER),
							(this.a = this.D(
								new r.$WCb(
									null,
									P,
									{
										label: f,
										placeholder: b,
										validation: (A) => {
											if (A.length === 0 || !this.a.getRegex()) return null;
											try {
												return new RegExp(A), null;
											} catch (R) {
												return (
													(this.J = !1), this.bb(this.J), { content: R.message }
												);
											}
										},
										showCommonFindToggles: T.showCommonFindToggles,
										appendCaseSensitiveLabel: T.appendCaseSensitiveActionId
											? this.W(T.appendCaseSensitiveActionId)
											: void 0,
										appendRegexLabel: T.appendRegexActionId
											? this.W(T.appendRegexActionId)
											: void 0,
										appendWholeWordsLabel: T.appendWholeWordsActionId
											? this.W(T.appendWholeWordsActionId)
											: void 0,
										showHistoryHint: () => (0, c.$NMb)(D),
										inputBoxStyles: g.$wyb,
										toggleStyles: g.$pyb,
									},
									k,
								),
							)),
							(this.n = this.D(new E.$Jh(500))),
							this.D(
								this.a.onInput(async (A) => {
									(!T.checkImeCompletionState ||
										!this.a.isImeSessionInProgress) &&
										((this.J = this.N()),
										T.showResultCount && (await this.updateResultCount()),
										this.bb(this.J),
										this.cb(),
										this.X());
								}),
							),
							this.a.setRegex(!!this.state.isRegex),
							this.a.setCaseSensitive(!!this.state.matchCase),
							this.a.setWholeWords(!!this.state.wholeWord),
							this.D(
								this.a.onDidOptionChange(() => {
									this.state.change(
										{
											isRegex: this.a.getRegex(),
											wholeWord: this.a.getWholeWords(),
											matchCase: this.a.getCaseSensitive(),
										},
										!0,
									);
								}),
							),
							this.D(
								this.state.onFindReplaceStateChange(() => {
									this.a.setRegex(this.state.isRegex),
										this.a.setWholeWords(this.state.wholeWord),
										this.a.setCaseSensitive(this.state.matchCase),
										this.findFirst();
								}),
							),
							(this.r = this.D(
								new m.$i7b(
									{
										label:
											s +
											(T.previousMatchActionId
												? this.W(T.previousMatchActionId)
												: ""),
										icon: m.$c7b,
										onTrigger: () => {
											this.find(!0);
										},
									},
									L,
								),
							)),
							(this.s = this.D(
								new m.$i7b(
									{
										label:
											l +
											(T.nextMatchActionId ? this.W(T.nextMatchActionId) : ""),
										icon: m.$d7b,
										onTrigger: () => {
											this.find(!1);
										},
									},
									L,
								),
							));
						const M = this.D(
							new m.$i7b(
								{
									label:
										y +
										(T.closeWidgetActionId
											? this.W(T.closeWidgetActionId)
											: ""),
									icon: u.$bP,
									onTrigger: () => {
										this.hide();
									},
								},
								L,
							),
						);
						(this.c = document.createElement("div")),
							this.c.classList.add("simple-find-part"),
							this.c.appendChild(this.a.domNode),
							this.c.appendChild(this.r.domNode),
							this.c.appendChild(this.s.domNode),
							this.c.appendChild(M.domNode),
							(this.b = document.createElement("div")),
							this.b.classList.add("simple-find-part-wrapper"),
							this.b.appendChild(this.c),
							this.z(this.c, (A) => {
								if (A.equals(C.KeyCode.Escape)) {
									this.hide(), A.preventDefault();
									return;
								}
							}),
							(this.g = this.D(i.$dhb(this.c))),
							this.D(this.g.onDidFocus(this.O.bind(this))),
							this.D(this.g.onDidBlur(this.P.bind(this))),
							(this.h = this.D(i.$dhb(this.a.domNode))),
							this.D(this.h.onDidFocus(this.Q.bind(this))),
							this.D(this.h.onDidBlur(this.R.bind(this))),
							this.D(
								i.$0fb(this.c, "click", (A) => {
									A.stopPropagation();
								}),
							),
							T?.showResultCount &&
								(this.b.classList.add("result-count"),
								(this.w = document.createElement("div")),
								(this.w.className = "matchesCount"),
								this.a.domNode.insertAdjacentElement("afterend", this.w),
								this.D(
									this.a.onDidChange(async () => {
										await this.updateResultCount();
									}),
								),
								this.D(
									this.a.onDidOptionChange(async () => {
										(this.J = this.N()),
											await this.updateResultCount(),
											this.cb(),
											this.X();
									}),
								));
						let N = T?.initialWidth;
						if (
							(N && ((N = N < $ ? $ : N), (this.b.style.width = `${N}px`)),
							T?.enableSash)
						) {
							const A = N ?? $;
							let R = A;
							const O = this.D(
								new p.Sash(this.c, this, {
									orientation: p.Orientation.VERTICAL,
									size: 1,
								}),
							);
							this.D(
								O.onDidStart(() => {
									R = parseFloat(i.$ngb(this.b).width);
								}),
							),
								this.D(
									O.onDidChange((B) => {
										const U = R + B.startX - B.currentX;
										U < A || (this.b.style.width = `${U}px`);
									}),
								),
								this.D(
									O.onDidReset((B) => {
										parseFloat(i.$ngb(this.b).width) === A
											? (this.b.style.width = "100%")
											: (this.b.style.width = `${A}px`);
									}),
								);
						}
					}
					getVerticalSashLeft(T) {
						return 0;
					}
					get U() {
						return this.a.getValue();
					}
					get focusTracker() {
						return this.g;
					}
					W(T) {
						const P = this.M?.lookupKeybinding(T);
						return P ? ` (${P.getLabel()})` : "";
					}
					dispose() {
						super.dispose(), this.b?.remove();
					}
					isVisible() {
						return this.y;
					}
					getDomNode() {
						return this.b;
					}
					getFindInputDomNode() {
						return this.a.domNode;
					}
					reveal(T, P = !0) {
						if ((T && this.a.setValue(T), this.y)) {
							this.a.select();
							return;
						}
						(this.y = !0),
							this.updateResultCount(),
							this.layout(),
							setTimeout(() => {
								this.c.classList.toggle("suppress-transition", !P),
									this.c.classList.add("visible", "visible-transition"),
									this.c.setAttribute("aria-hidden", "false"),
									this.a.select(),
									P ||
										setTimeout(() => {
											this.c.classList.remove("suppress-transition");
										}, 0);
							}, 0);
					}
					show(T) {
						T && !this.y && this.a.setValue(T),
							(this.y = !0),
							this.layout(),
							setTimeout(() => {
								this.c.classList.add("visible", "visible-transition"),
									this.c.setAttribute("aria-hidden", "false");
							}, 0);
					}
					hide(T = !0) {
						this.y &&
							(this.c.classList.toggle("suppress-transition", !T),
							this.c.classList.remove("visible-transition"),
							this.c.setAttribute("aria-hidden", "true"),
							setTimeout(
								() => {
									(this.y = !1),
										this.bb(this.J),
										this.c.classList.remove("visible", "suppress-transition");
								},
								T ? 200 : 0,
							));
					}
					layout(T = this.L) {
						if (((this.L = T), !!this.y && this.w)) {
							let P = !1;
							$ + v + 28 >= T && (P = !0),
								this.c.classList.toggle("reduced-find-widget", P);
						}
					}
					X() {
						this.n.trigger(this.Y.bind(this));
					}
					Y() {
						this.a.inputBox.addToHistory();
					}
					Z() {
						return this.a.getRegex();
					}
					$() {
						return this.a.getWholeWords();
					}
					ab() {
						return this.a.getCaseSensitive();
					}
					bb(T) {
						const P = this.U.length > 0;
						this.r.setEnabled(this.y && P && T),
							this.s.setEnabled(this.y && P && T);
					}
					cb() {
						this.s.focus(), this.a.inputBox.focus();
					}
					async updateResultCount() {
						if (!this.w) {
							this.bb(this.J);
							return;
						}
						const T = await this.S();
						this.w.innerText = "";
						const P = this.U.length > 0 && T?.resultCount === 0;
						this.w.classList.toggle("no-results", P);
						let k = "";
						if (T?.resultCount) {
							let L = String(T.resultCount);
							T.resultCount >= this.t && (L += "+");
							let D = String(T.resultIndex + 1);
							D === "0" && (D = "?"), (k = h.$kf(m.$e7b, D, L));
						} else k = m.$f7b;
						(0, n.$pib)(this.db(k, this.U)),
							this.w.appendChild(document.createTextNode(k)),
							(this.J = !!T && T.resultCount > 0),
							this.bb(this.J);
					}
					changeState(T) {
						this.state.change(T, !1);
					}
					db(T, P) {
						return P
							? T === m.$f7b
								? P === ""
									? t.localize(4874, null, T)
									: t.localize(4875, null, T, P)
								: t.localize(4876, null, T, P)
							: t.localize(4873, null);
					}
				}
				(e.$QVc = S),
					(e.$RVc = (0, o.$wP)(
						"simpleFindWidget.sashBorder",
						{
							dark: "#454545",
							light: "#C8C8C8",
							hcDark: "#6FC3DF",
							hcLight: "#0F4A85",
						},
						t.localize(4877, null),
					)),
					(0, a.$oP)((I, T) => {
						const P = I.getColor(e.$RVc);
						T.addRule(
							`.monaco-workbench .simple-find-part .monaco-sash { background-color: ${P}; border-color: ${P} }`,
						);
					});
			},
		),
		