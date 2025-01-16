define(
			de[932],
			he([1, 0, 7, 1581, 292, 235, 6, 27, 4, 3, 95, 1510]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Uob = void 0),
					(t = mt(t)),
					(m = mt(m));
				const a = m.localize(9, null);
				class h extends E.$Uhb {
					static {
						this.OPTION_CHANGE = "optionChange";
					}
					constructor(n, g, p) {
						super(),
							(this.n = !0),
							(this.s = !1),
							(this.w = this.D(new r.$2c())),
							(this.N = []),
							(this.O = this.D(new C.$re())),
							(this.onDidOptionChange = this.O.event),
							(this.P = this.D(new C.$re())),
							(this.onKeyDown = this.P.event),
							(this.Q = this.D(new C.$re())),
							(this.onMouseDown = this.Q.event),
							(this.R = this.D(new C.$re())),
							(this.onInput = this.R.event),
							(this.S = this.D(new C.$re())),
							(this.onKeyUp = this.S.event),
							(this.U = this.D(new C.$re())),
							(this.onCaseSensitiveKeyDown = this.U.event),
							(this.W = this.D(new C.$re())),
							(this.onRegexKeyDown = this.W.event),
							(this.Y = 0),
							(this.a = p.placeholder || ""),
							(this.b = p.validation),
							(this.c = p.label || a),
							(this.h = !!p.showCommonFindToggles);
						const o = p.appendCaseSensitiveLabel || "",
							f = p.appendWholeWordsLabel || "",
							b = p.appendRegexLabel || "",
							s = p.history || [],
							l = !!p.flexibleHeight,
							y = !!p.flexibleWidth,
							$ = p.flexibleMaxHeight;
						(this.domNode = document.createElement("div")),
							this.domNode.classList.add("monaco-findInput"),
							(this.inputBox = this.D(
								new w.$Nob(this.domNode, g, {
									placeholder: this.a || "",
									ariaLabel: this.c || "",
									validationOptions: { validation: this.b },
									history: s,
									showHistoryHint: p.showHistoryHint,
									flexibleHeight: l,
									flexibleWidth: y,
									flexibleMaxHeight: $,
									inputBoxStyles: p.inputBoxStyles,
								}),
							));
						const v = this.D((0, u.$dib)());
						if (this.h) {
							(this.J = this.D(
								new i.$Tob({
									appendTitle: b,
									isChecked: !1,
									hoverDelegate: v,
									...p.toggleStyles,
								}),
							)),
								this.D(
									this.J.onChange((I) => {
										this.O.fire(I),
											!I && this.n && this.inputBox.focus(),
											this.validate();
									}),
								),
								this.D(
									this.J.onKeyDown((I) => {
										this.W.fire(I);
									}),
								),
								(this.L = this.D(
									new i.$Sob({
										appendTitle: f,
										isChecked: !1,
										hoverDelegate: v,
										...p.toggleStyles,
									}),
								)),
								this.D(
									this.L.onChange((I) => {
										this.O.fire(I),
											!I && this.n && this.inputBox.focus(),
											this.validate();
									}),
								),
								(this.M = this.D(
									new i.$Rob({
										appendTitle: o,
										isChecked: !1,
										hoverDelegate: v,
										...p.toggleStyles,
									}),
								)),
								this.D(
									this.M.onChange((I) => {
										this.O.fire(I),
											!I && this.n && this.inputBox.focus(),
											this.validate();
									}),
								),
								this.D(
									this.M.onKeyDown((I) => {
										this.U.fire(I);
									}),
								);
							const S = [this.M.domNode, this.L.domNode, this.J.domNode];
							this.u(this.domNode, (I) => {
								if (
									I.equals(d.KeyCode.LeftArrow) ||
									I.equals(d.KeyCode.RightArrow) ||
									I.equals(d.KeyCode.Escape)
								) {
									const T = S.indexOf(this.domNode.ownerDocument.activeElement);
									if (T >= 0) {
										let P = -1;
										I.equals(d.KeyCode.RightArrow)
											? (P = (T + 1) % S.length)
											: I.equals(d.KeyCode.LeftArrow) &&
												(T === 0 ? (P = S.length - 1) : (P = T - 1)),
											I.equals(d.KeyCode.Escape)
												? (S[T].blur(), this.inputBox.focus())
												: P >= 0 && S[P].focus(),
											t.$ahb.stop(I, !0);
									}
								}
							});
						}
						(this.y = document.createElement("div")),
							(this.y.className = "controls"),
							(this.y.style.display = this.h ? "" : "none"),
							this.M && this.y.append(this.M.domNode),
							this.L && this.y.appendChild(this.L.domNode),
							this.J && this.y.appendChild(this.J.domNode),
							this.setAdditionalToggles(p?.additionalToggles),
							this.y && this.domNode.appendChild(this.y),
							n?.appendChild(this.domNode),
							this.D(
								t.$0fb(this.inputBox.inputElement, "compositionstart", (S) => {
									this.s = !0;
								}),
							),
							this.D(
								t.$0fb(this.inputBox.inputElement, "compositionend", (S) => {
									(this.s = !1), this.R.fire();
								}),
							),
							this.u(this.inputBox.inputElement, (S) => this.P.fire(S)),
							this.z(this.inputBox.inputElement, (S) => this.S.fire(S)),
							this.C(this.inputBox.inputElement, (S) => this.R.fire()),
							this.j(this.inputBox.inputElement, (S) => this.Q.fire(S));
					}
					get isImeSessionInProgress() {
						return this.s;
					}
					get onDidChange() {
						return this.inputBox.onDidChange;
					}
					layout(n) {
						this.inputBox.layout(), this.X(n.collapsedFindWidget);
					}
					enable() {
						this.domNode.classList.remove("disabled"),
							this.inputBox.enable(),
							this.J?.enable(),
							this.L?.enable(),
							this.M?.enable();
						for (const n of this.N) n.enable();
					}
					disable() {
						this.domNode.classList.add("disabled"),
							this.inputBox.disable(),
							this.J?.disable(),
							this.L?.disable(),
							this.M?.disable();
						for (const n of this.N) n.disable();
					}
					setFocusInputOnOptionClick(n) {
						this.n = n;
					}
					setEnabled(n) {
						n ? this.enable() : this.disable();
					}
					setAdditionalToggles(n) {
						for (const g of this.N) g.domNode.remove();
						(this.N = []), (this.w.value = new r.$Zc());
						for (const g of n ?? [])
							this.w.value.add(g),
								this.y.appendChild(g.domNode),
								this.w.value.add(
									g.onChange((p) => {
										this.O.fire(p), !p && this.n && this.inputBox.focus();
									}),
								),
								this.N.push(g);
						this.N.length > 0 && (this.y.style.display = ""), this.X();
					}
					X(n = !1) {
						n
							? (this.inputBox.paddingRight = 0)
							: (this.inputBox.paddingRight =
									(this.M?.width() ?? 0) +
									(this.L?.width() ?? 0) +
									(this.J?.width() ?? 0) +
									this.N.reduce((g, p) => g + p.width(), 0));
					}
					clear() {
						this.Z(), this.setValue(""), this.focus();
					}
					getValue() {
						return this.inputBox.value;
					}
					setValue(n) {
						this.inputBox.value !== n && (this.inputBox.value = n);
					}
					onSearchSubmit() {
						this.inputBox.addToHistory();
					}
					select() {
						this.inputBox.select();
					}
					focus() {
						this.inputBox.focus();
					}
					getCaseSensitive() {
						return this.M?.checked ?? !1;
					}
					setCaseSensitive(n) {
						this.M && (this.M.checked = n);
					}
					getWholeWords() {
						return this.L?.checked ?? !1;
					}
					setWholeWords(n) {
						this.L && (this.L.checked = n);
					}
					getRegex() {
						return this.J?.checked ?? !1;
					}
					setRegex(n) {
						this.J && ((this.J.checked = n), this.validate());
					}
					focusOnCaseSensitive() {
						this.M?.focus();
					}
					focusOnRegex() {
						this.J?.focus();
					}
					highlightFindOptions() {
						this.domNode.classList.remove("highlight-" + this.Y),
							(this.Y = 1 - this.Y),
							this.domNode.classList.add("highlight-" + this.Y);
					}
					validate() {
						this.inputBox.validate();
					}
					showMessage(n) {
						this.inputBox.showMessage(n);
					}
					clearMessage() {
						this.inputBox.hideMessage();
					}
					Z() {
						this.inputBox.hideMessage();
					}
				}
				e.$Uob = h;
			},
		),
		