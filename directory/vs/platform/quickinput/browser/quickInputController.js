define(
		de[2867],
		he([
			1, 0, 7, 105, 183, 495, 436, 33, 6, 27, 3, 111, 28, 4, 63, 2750, 1189,
			180, 75, 5, 2866, 8, 2751, 45, 2781,
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
			var v;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Kxc = void 0),
				(t = mt(t)),
				(a = xi(a));
			const S = t.$;
			let I = class extends u.$1c {
				static {
					v = this;
				}
				static {
					this.a = 600;
				}
				get currentQuickInput() {
					return this.s ?? void 0;
				}
				get container() {
					return this.t;
				}
				constructor(P, k, L, D, M) {
					super(),
						(this.J = P),
						(this.L = k),
						(this.M = L),
						(this.N = D),
						(this.P = M),
						(this.j = !0),
						(this.m = this.D(new m.$re())),
						(this.n = this.D(new m.$re())),
						(this.q = this.D(new m.$re())),
						(this.r = { ctrlCmd: !1, alt: !1 }),
						(this.s = null),
						(this.w = this.D(new m.$re())),
						(this.onShow = this.w.event),
						(this.z = this.D(new m.$re())),
						(this.onHide = this.z.event),
						(this.F = p.$wxc.bindTo(this.N)),
						(this.G = p.$zxc.bindTo(this.N)),
						(this.H = p.$Bxc.bindTo(this.N)),
						(this.backButton = p.$Dxc),
						(this.b = P.idPrefix),
						(this.t = P.container),
						(this.u = P.styles),
						this.D(
							m.Event.runAndSubscribe(
								t.onDidRegisterWindow,
								({ window: N, disposables: A }) => this.Q(N, A),
								{ window: f.$Bfb, disposables: this.B },
							),
						),
						this.D(
							t.onWillUnregisterWindow((N) => {
								this.f &&
									t.getWindow(this.f.container) === N &&
									(this.X(this.L.mainContainer),
									this.layout(
										this.L.mainContainerDimension,
										this.L.mainContainerOffset.quickPickTop,
									));
							}),
						);
				}
				Q(P, k) {
					const L = (D) => {
						(this.r.ctrlCmd = D.ctrlKey || D.metaKey), (this.r.alt = D.altKey);
					};
					for (const D of [t.$$gb.KEY_DOWN, t.$$gb.KEY_UP, t.$$gb.MOUSE_DOWN])
						k.add(t.$0fb(P, D, L, !0));
				}
				S(P) {
					const k = this.W().list.getItemElement(P);
					k && (this.I = (0, y.$Jxc)(k, P, this.P));
				}
				U() {
					this.I &&
						(this.I.dispose(),
						f.$Bfb.document
							.querySelectorAll(".quick-input-preview-box")
							.forEach((k) => {
								k.parentElement && k.parentElement.removeChild(k);
							}),
						(this.I = void 0));
				}
				W(P) {
					if (this.f)
						return (
							P &&
								t.getWindow(this.t) !== t.getWindow(this.L.activeContainer) &&
								(this.X(this.L.activeContainer),
								this.layout(
									this.L.activeContainerDimension,
									this.L.activeContainerOffset.quickPickTop,
								)),
							this.f
						);
					const k = t.$fhb(this.t, S(".quick-input-widget.show-file-icons"));
					(k.tabIndex = -1), (k.style.display = "none");
					const L = t.$Rgb(k),
						D = t.$fhb(k, S(".quick-input-titlebar")),
						M = this.D(new i.$eib(D, { hoverDelegate: this.J.hoverDelegate }));
					M.domNode.classList.add("quick-input-left-action-bar");
					const N = t.$fhb(D, S(".quick-input-title")),
						A = this.D(new i.$eib(D, { hoverDelegate: this.J.hoverDelegate }));
					A.domNode.classList.add("quick-input-right-action-bar");
					const R = t.$fhb(k, S(".quick-input-header")),
						O = t.$fhb(R, S("input.quick-input-check-all"));
					(O.type = "checkbox"),
						O.setAttribute("aria-label", (0, c.localize)(2051, null)),
						this.D(
							t.$$fb(O, t.$$gb.CHANGE, (Z) => {
								const se = O.checked;
								te.setAllVisibleChecked(se);
							}),
						),
						this.D(
							t.$0fb(O, t.$$gb.CLICK, (Z) => {
								(Z.x || Z.y) && F.setFocus();
							}),
						);
					const B = t.$fhb(R, S(".quick-input-description")),
						U = t.$fhb(R, S(".quick-input-and-message")),
						z = t.$fhb(U, S(".quick-input-filter")),
						F = this.D(new g.$rxc(z, this.u.inputBox, this.u.toggle));
					F.setAttribute("aria-describedby", `${this.b}message`);
					const x = t.$fhb(z, S(".quick-input-visible-count"));
					x.setAttribute("aria-live", "polite"),
						x.setAttribute("aria-atomic", "true");
					const H = new E.$Hob(
							x,
							{ countFormat: (0, c.localize)(2052, null) },
							this.u.countBadge,
						),
						q = t.$fhb(z, S(".quick-input-count"));
					q.setAttribute("aria-live", "polite");
					const V = new E.$Hob(
							q,
							{ countFormat: (0, c.localize)(2053, null) },
							this.u.countBadge,
						),
						G = this.D(new i.$eib(R, { hoverDelegate: this.J.hoverDelegate }));
					G.domNode.classList.add("quick-input-inline-action-bar");
					const K = t.$fhb(R, S(".quick-input-action")),
						J = this.D(new w.$oob(K, this.u.button));
					(J.label = (0, c.localize)(2054, null)),
						this.D(
							J.onDidClick((Z) => {
								this.m.fire();
							}),
						);
					const W = t.$fhb(R, S(".quick-input-action")),
						X = this.D(new w.$oob(W, { ...this.u.button, supportIcons: !0 }));
					(X.label = (0, c.localize)(2055, null)),
						this.D(
							X.onDidClick((Z) => {
								this.n.fire();
							}),
						);
					const Y = t.$fhb(U, S(`#${this.b}message.quick-input-message`)),
						ie = this.D(new C.$bpb(k, this.u.progressBar));
					ie.getContainer().classList.add("quick-input-progress");
					const ne = t.$fhb(k, S(".quick-input-html-widget"));
					ne.tabIndex = -1;
					const ee = t.$fhb(k, S(".quick-input-description")),
						_ = this.b + "list",
						te = this.D(
							this.M.createInstance(
								s.$uxc,
								k,
								this.J.hoverDelegate,
								this.J.linkOpenerDelegate,
								_,
							),
						);
					F.setAttribute("aria-controls", _),
						this.D(
							te.onDidChangeFocus(() => {
								F.setAttribute(
									"aria-activedescendant",
									te.getActiveDescendant() ?? "",
								);
							}),
						),
						this.D(
							te.onChangedAllVisibleChecked((Z) => {
								O.checked = Z;
							}),
						),
						this.D(
							te.onChangedVisibleCount((Z) => {
								H.setCount(Z);
							}),
						),
						this.D(
							te.onChangedCheckedCount((Z) => {
								V.setCount(Z);
							}),
						),
						this.D(
							te.onLeave(() => {
								setTimeout(() => {
									this.s &&
										(F.setFocus(),
										this.s instanceof p.$Exc &&
											this.s.canSelectMany &&
											te.clearFocus());
								}, 0);
							}),
						);
					const Q = t.$dhb(k);
					return (
						this.D(Q),
						this.D(
							t.$0fb(
								k,
								t.$$gb.FOCUS,
								(Z) => {
									const se = this.W();
									if (t.$Bgb(Z.relatedTarget, se.inputContainer)) {
										const re = se.inputBox.isSelectionAtEnd();
										this.H.get() !== re && this.H.set(re);
									}
									t.$Bgb(Z.relatedTarget, se.container) ||
										(this.F.set(!0),
										(this.C = t.$Ygb(Z.relatedTarget)
											? Z.relatedTarget
											: void 0));
								},
								!0,
							),
						),
						this.D(
							Q.onDidBlur(() => {
								!this.W().ignoreFocusOut &&
									!this.J.ignoreFocusOut() &&
									this.hide(n.QuickInputHideReason.Blur),
									this.F.set(!1),
									this.H.set(!1),
									(this.C = void 0);
							}),
						),
						this.D(
							F.onKeyDown((Z) => {
								const se = this.W().inputBox.isSelectionAtEnd();
								this.H.get() !== se && this.H.set(se);
							}),
						),
						this.D(
							t.$0fb(k, t.$$gb.FOCUS, (Z) => {
								F.setFocus();
							}),
						),
						this.D(
							t.$$fb(k, t.$$gb.KEY_DOWN, (Z) => {
								if (!t.$Bgb(Z.target, ne))
									switch (Z.keyCode) {
										case r.KeyCode.Enter:
											t.$ahb.stop(Z, !0), this.j && this.m.fire();
											break;
										case r.KeyCode.Escape:
											t.$ahb.stop(Z, !0),
												this.hide(n.QuickInputHideReason.Gesture);
											break;
										case r.KeyCode.Tab:
											if (!Z.altKey && !Z.ctrlKey && !Z.metaKey) {
												const se = [
													".quick-input-list .monaco-action-bar .always-visible",
													".quick-input-list-entry:hover .monaco-action-bar",
													".monaco-list-row.focused .monaco-action-bar",
												];
												if (
													(k.classList.contains("show-checkboxes")
														? se.push("input")
														: se.push("input[type=text]"),
													this.W().list.displayed && se.push(".monaco-list"),
													this.W().message && se.push(".quick-input-message a"),
													this.W().widget)
												) {
													if (t.$Bgb(Z.target, this.W().widget)) break;
													se.push(".quick-input-html-widget");
												}
												const re = k.querySelectorAll(se.join(", "));
												Z.shiftKey && Z.target === re[0]
													? (t.$ahb.stop(Z, !0), te.clearFocus())
													: !Z.shiftKey &&
														t.$Bgb(Z.target, re[re.length - 1]) &&
														(t.$ahb.stop(Z, !0), re[0].focus());
											}
											break;
										case r.KeyCode.Space:
											Z.ctrlKey &&
												(t.$ahb.stop(Z, !0), this.W().list.toggleHover());
											break;
									}
							}),
						),
						(this.f = {
							container: k,
							styleSheet: L,
							leftActionBar: M,
							titleBar: D,
							title: N,
							description1: ee,
							description2: B,
							widget: ne,
							rightActionBar: A,
							inlineActionBar: G,
							checkAll: O,
							inputContainer: U,
							filterContainer: z,
							inputBox: F,
							visibleCountContainer: x,
							visibleCount: H,
							countContainer: q,
							count: V,
							okContainer: K,
							ok: J,
							message: Y,
							customButtonContainer: W,
							customButton: X,
							list: te,
							progressBar: ie,
							onDidAccept: this.m.event,
							onDidCustom: this.n.event,
							onDidTriggerButton: this.q.event,
							ignoreFocusOut: !1,
							keyMods: this.r,
							show: (Z) => this.Z(Z),
							hide: () => this.hide(),
							setVisibilities: (Z) => this.ab(Z),
							setEnabled: (Z) => this.bb(Z),
							setContextKey: (Z) => this.J.setContextKey(Z),
							linkOpenerDelegate: (Z) => this.J.linkOpenerDelegate(Z),
						}),
						this.db(),
						this.f
					);
				}
				X(P) {
					this.f && ((this.t = P), t.$fhb(this.t, this.f.container));
				}
				pick(P, k = {}, L = d.CancellationToken.None) {
					return new Promise((D, M) => {
						let N = (B) => {
							(N = D), k.onKeyMods?.(A.keyMods), D(B);
						};
						if (L.isCancellationRequested) {
							N(void 0);
							return;
						}
						const A = this.createQuickPick({ useSeparators: !0 });
						let R;
						const O = [
							A,
							A.onDidAccept(() => {
								if (A.canSelectMany) N(A.selectedItems.slice()), A.hide();
								else {
									const B = A.activeItems[0];
									B && (N(B), A.hide());
								}
							}),
							A.onDidChangeActive((B) => {
								const U = B[0];
								U && k.onDidFocus && k.onDidFocus(U);
							}),
							A.onDidChangeSelection((B) => {
								if (!A.canSelectMany) {
									const U = B[0];
									U && (N(U), A.hide());
								}
							}),
							A.onDidTriggerItemButton(
								(B) =>
									k.onDidTriggerItemButton &&
									k.onDidTriggerItemButton({
										...B,
										removeItem: () => {
											const U = A.items.indexOf(B.item);
											if (U !== -1) {
												const z = A.items.slice(),
													F = z.splice(U, 1),
													x = A.activeItems.filter((q) => q !== F[0]),
													H = A.keepScrollPosition;
												(A.keepScrollPosition = !0),
													(A.items = z),
													x && (A.activeItems = x),
													(A.keepScrollPosition = H);
											}
										},
									}),
							),
							A.onDidTriggerSeparatorButton((B) =>
								k.onDidTriggerSeparatorButton?.(B),
							),
							A.onDidChangeValue((B) => {
								R &&
									!B &&
									(A.activeItems.length !== 1 || A.activeItems[0] !== R) &&
									(A.activeItems = [R]);
							}),
							L.onCancellationRequested(() => {
								A.hide();
							}),
							A.onDidHide(() => {
								(0, u.$Vc)(O), N(void 0);
							}),
						];
						(A.title = k.title),
							k.value && (A.value = k.value),
							(A.canSelectMany = !!k.canPickMany),
							(A.placeholder = k.placeHolder),
							(A.ignoreFocusOut = !!k.ignoreFocusLost),
							(A.matchOnDescription = !!k.matchOnDescription),
							(A.matchOnDetail = !!k.matchOnDetail),
							(A.matchOnLabel = k.matchOnLabel === void 0 || k.matchOnLabel),
							(A.quickNavigate = k.quickNavigate),
							(A.hideInput = !!k.hideInput),
							(A.contextKey = k.contextKey),
							(A.busy = !0),
							Promise.all([P, k.activeItem]).then(([B, U]) => {
								(R = U),
									(A.busy = !1),
									(A.items = B),
									A.canSelectMany &&
										(A.selectedItems = B.filter(
											(z) => z.type !== "separator" && z.picked,
										)),
									R && (A.activeItems = [R]);
							}),
							A.show(),
							Promise.resolve(P).then(void 0, (B) => {
								M(B), A.hide();
							});
					});
				}
				Y(P, k) {
					k && (0, h.$lg)(k)
						? ((P.severity = a.default.Error), (P.validationMessage = k))
						: k && !(0, h.$lg)(k)
							? ((P.severity = k.severity), (P.validationMessage = k.content))
							: ((P.severity = a.default.Ignore),
								(P.validationMessage = void 0));
				}
				input(P = {}, k = d.CancellationToken.None) {
					return new Promise((L) => {
						if (k.isCancellationRequested) {
							L(void 0);
							return;
						}
						const D = this.createInputBox(),
							M = P.validateInput || (() => Promise.resolve(void 0)),
							N = m.Event.debounce(D.onDidChangeValue, (B, U) => U, 100);
						let A = P.value || "",
							R = Promise.resolve(M(A));
						const O = [
							D,
							N((B) => {
								B !== A && ((R = Promise.resolve(M(B))), (A = B)),
									R.then((U) => {
										B === A && this.Y(D, U);
									});
							}),
							D.onDidAccept(() => {
								const B = D.value;
								B !== A && ((R = Promise.resolve(M(B))), (A = B)),
									R.then((U) => {
										!U || (!(0, h.$lg)(U) && U.severity !== a.default.Error)
											? (L(B), D.hide())
											: B === A && this.Y(D, U);
									});
							}),
							k.onCancellationRequested(() => {
								D.hide();
							}),
							D.onDidHide(() => {
								(0, u.$Vc)(O), L(void 0);
							}),
						];
						(D.title = P.title),
							(D.value = P.value || ""),
							(D.valueSelection = P.valueSelection),
							(D.prompt = P.prompt),
							(D.placeholder = P.placeHolder),
							(D.password = !!P.password),
							(D.ignoreFocusOut = !!P.ignoreFocusLost),
							D.show();
					});
				}
				createQuickPick(P = { useSeparators: !1 }) {
					const k = this.W(!0),
						L = new p.$Exc(k);
					return (
						this.D(
							L.onDidChangeActive((D) => {
								this.U(), D.length > 0 && this.S(D[0]);
							}),
						),
						this.D(
							L.onDidHide(() => {
								this.U();
							}),
						),
						L
					);
				}
				createInputBox() {
					const P = this.W(!0);
					return new p.$Fxc(P);
				}
				createQuickWidget() {
					const P = this.W(!0);
					return new p.$Gxc(P);
				}
				Z(P) {
					const k = this.W(!0);
					this.w.fire();
					const L = this.s;
					(this.s = P),
						L?.didHide(),
						this.bb(!0),
						k.leftActionBar.clear(),
						(k.title.textContent = ""),
						(k.description1.textContent = ""),
						(k.description2.textContent = ""),
						t.$hhb(k.widget),
						k.rightActionBar.clear(),
						k.inlineActionBar.clear(),
						(k.checkAll.checked = !1),
						(k.inputBox.placeholder = ""),
						(k.inputBox.password = !1),
						k.inputBox.showDecoration(a.default.Ignore),
						k.visibleCount.setCount(0),
						k.count.setCount(0),
						t.$hhb(k.message),
						k.progressBar.stop(),
						k.list.setElements([]),
						(k.list.matchOnDescription = !1),
						(k.list.matchOnDetail = !1),
						(k.list.matchOnLabel = !0),
						(k.list.sortByLabel = !0),
						(k.ignoreFocusOut = !1),
						(k.inputBox.toggles = void 0);
					const D = this.J.backKeybindingLabel();
					(p.$Dxc.tooltip = D
						? (0, c.localize)(2056, null, D)
						: (0, c.localize)(2057, null)),
						(k.container.style.display = ""),
						this.cb(),
						k.inputBox.setFocus(),
						this.G.set(P.type);
				}
				isVisible() {
					return !!this.f && this.f.container.style.display !== "none";
				}
				ab(P) {
					const k = this.W();
					(k.title.style.display = P.title ? "" : "none"),
						(k.description1.style.display =
							P.description && (P.inputBox || P.checkAll) ? "" : "none"),
						(k.description2.style.display =
							P.description && !(P.inputBox || P.checkAll) ? "" : "none"),
						(k.checkAll.style.display = P.checkAll ? "" : "none"),
						(k.inputContainer.style.display = P.inputBox ? "" : "none"),
						(k.filterContainer.style.display = P.inputBox ? "" : "none"),
						(k.visibleCountContainer.style.display = P.visibleCount
							? ""
							: "none"),
						(k.countContainer.style.display = P.count ? "" : "none"),
						(k.okContainer.style.display = P.ok ? "" : "none"),
						(k.customButtonContainer.style.display = P.customButton
							? ""
							: "none"),
						(k.message.style.display = P.message ? "" : "none"),
						(k.progressBar.getContainer().style.display = P.progressBar
							? ""
							: "none"),
						(k.list.displayed = !!P.list),
						k.container.classList.toggle("show-checkboxes", !!P.checkBox),
						k.container.classList.toggle(
							"hidden-input",
							!P.inputBox && !P.description,
						),
						this.cb();
				}
				bb(P) {
					if (P !== this.j) {
						this.j = P;
						for (const k of this.W().leftActionBar.viewItems)
							k.action.enabled = P;
						for (const k of this.W().rightActionBar.viewItems)
							k.action.enabled = P;
						(this.W().checkAll.disabled = !P),
							(this.W().inputBox.enabled = P),
							(this.W().ok.enabled = P),
							(this.W().list.enabled = P);
					}
				}
				hide(P) {
					this.U();
					const k = this.s;
					if (!k) return;
					k.willHide(P);
					const L = this.f?.container,
						D = L && !t.$Lgb(L);
					if (
						((this.s = null),
						this.z.fire(),
						L && (L.style.display = "none"),
						!D)
					) {
						let M = this.C;
						for (; M && !M.offsetParent; ) M = M.parentElement ?? void 0;
						M?.offsetParent
							? (M.focus(), (this.C = void 0))
							: this.J.returnFocus();
					}
					k.didHide(P);
				}
				focus() {
					if (this.isVisible()) {
						const P = this.W();
						P.inputBox.enabled ? P.inputBox.setFocus() : P.list.domFocus();
					}
				}
				toggle() {
					this.isVisible() &&
						this.s instanceof p.$Exc &&
						this.s.canSelectMany &&
						this.W().list.toggleCheckbox();
				}
				navigate(P, k) {
					this.isVisible() &&
						this.W().list.displayed &&
						(this.W().list.focus(
							P ? n.QuickPickFocus.Next : n.QuickPickFocus.Previous,
						),
						k && this.s instanceof p.$Exc && (this.s.quickNavigate = k));
				}
				async accept(P = { alt: !1, ctrlCmd: !1 }) {
					(this.r.alt = P.alt), (this.r.ctrlCmd = P.ctrlCmd), this.m.fire();
				}
				async back() {
					this.q.fire(this.backButton);
				}
				async cancel() {
					this.hide();
				}
				layout(P, k) {
					(this.g = P), (this.h = k), this.cb();
				}
				cb() {
					if (this.f && this.isVisible()) {
						this.f.container.style.top = `${this.h}px`;
						const P = this.f.container.style,
							k = Math.min(this.g.width * 0.62, v.a);
						(P.width = k + "px"),
							(P.marginLeft = "-" + k / 2 + "px"),
							this.f.inputBox.layout(),
							this.f.list.layout(this.g && this.g.height * 0.4);
					}
				}
				applyStyles(P) {
					(this.u = P), this.db();
				}
				db() {
					if (this.f) {
						const {
							quickInputTitleBackground: P,
							quickInputBackground: k,
							quickInputForeground: L,
							widgetBorder: D,
							widgetShadow: M,
						} = this.u.widget;
						(this.f.titleBar.style.backgroundColor = P ?? ""),
							(this.f.container.style.backgroundColor = k ?? ""),
							(this.f.container.style.color = L ?? ""),
							(this.f.container.style.border = D ? `1px solid ${D}` : ""),
							(this.f.container.style.boxShadow = M ? `0 0 8px 2px ${M}` : ""),
							this.f.list.style(this.u.list);
						const N = [];
						this.u.pickerGroup.pickerGroupBorder &&
							N.push(
								`.quick-input-list .quick-input-list-entry { border-top-color:  ${this.u.pickerGroup.pickerGroupBorder}; }`,
							),
							this.u.pickerGroup.pickerGroupForeground &&
								N.push(
									`.quick-input-list .quick-input-list-separator { color:  ${this.u.pickerGroup.pickerGroupForeground}; }`,
								),
							this.u.pickerGroup.pickerGroupForeground &&
								N.push(
									".quick-input-list .quick-input-list-separator-as-item { color: var(--vscode-descriptionForeground); }",
								),
							(this.u.keybindingLabel.keybindingLabelBackground ||
								this.u.keybindingLabel.keybindingLabelBorder ||
								this.u.keybindingLabel.keybindingLabelBottomBorder ||
								this.u.keybindingLabel.keybindingLabelShadow ||
								this.u.keybindingLabel.keybindingLabelForeground) &&
								(N.push(
									".quick-input-list .monaco-keybinding > .monaco-keybinding-key {",
								),
								this.u.keybindingLabel.keybindingLabelBackground &&
									N.push(
										`background-color: ${this.u.keybindingLabel.keybindingLabelBackground};`,
									),
								this.u.keybindingLabel.keybindingLabelBorder &&
									N.push(
										`border-color: ${this.u.keybindingLabel.keybindingLabelBorder};`,
									),
								this.u.keybindingLabel.keybindingLabelBottomBorder &&
									N.push(
										`border-bottom-color: ${this.u.keybindingLabel.keybindingLabelBottomBorder};`,
									),
								this.u.keybindingLabel.keybindingLabelShadow &&
									N.push(
										`box-shadow: inset 0 -1px 0 ${this.u.keybindingLabel.keybindingLabelShadow};`,
									),
								this.u.keybindingLabel.keybindingLabelForeground &&
									N.push(
										`color: ${this.u.keybindingLabel.keybindingLabelForeground};`,
									),
								N.push("}"));
						const A = N.join(`
`);
						A !== this.f.styleSheet.textContent &&
							(this.f.styleSheet.textContent = A);
					}
				}
			};
			(e.$Kxc = I),
				(e.$Kxc =
					I =
					v =
						Ne([j(1, o.$jEb), j(2, b.$Li), j(3, l.$6j), j(4, $.$0zb)], I));
		},
	),
		