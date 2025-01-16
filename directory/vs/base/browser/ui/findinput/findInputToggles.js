define(de[1581], he([1, 0, 95, 268, 14, 4]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Tob = e.$Sob = e.$Rob = void 0),
				(E = mt(E));
			const C = E.localize(10, null),
				d = E.localize(11, null),
				m = E.localize(12, null);
			class r extends i.$8ib {
				constructor(c) {
					super({
						icon: w.$ak.caseSensitive,
						title: C + c.appendTitle,
						isChecked: c.isChecked,
						hoverDelegate: c.hoverDelegate ?? (0, t.$cib)("element"),
						inputActiveOptionBorder: c.inputActiveOptionBorder,
						inputActiveOptionForeground: c.inputActiveOptionForeground,
						inputActiveOptionBackground: c.inputActiveOptionBackground,
					});
				}
			}
			e.$Rob = r;
			class u extends i.$8ib {
				constructor(c) {
					super({
						icon: w.$ak.wholeWord,
						title: d + c.appendTitle,
						isChecked: c.isChecked,
						hoverDelegate: c.hoverDelegate ?? (0, t.$cib)("element"),
						inputActiveOptionBorder: c.inputActiveOptionBorder,
						inputActiveOptionForeground: c.inputActiveOptionForeground,
						inputActiveOptionBackground: c.inputActiveOptionBackground,
					});
				}
			}
			e.$Sob = u;
			class a extends i.$8ib {
				constructor(c) {
					super({
						icon: w.$ak.regex,
						title: m + c.appendTitle,
						isChecked: c.isChecked,
						hoverDelegate: c.hoverDelegate ?? (0, t.$cib)("element"),
						inputActiveOptionBorder: c.inputActiveOptionBorder,
						inputActiveOptionForeground: c.inputActiveOptionForeground,
						inputActiveOptionBackground: c.inputActiveOptionBackground,
					});
				}
			}
			e.$Tob = a;
		}),
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
		define(
			de[2687],
			he([1, 0, 7, 268, 292, 235, 14, 6, 27, 4, 95, 1510]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Vob = void 0),
					(t = mt(t)),
					(r = mt(r));
				const a = r.localize(13, null),
					h = r.localize(14, null);
				class c extends i.$8ib {
					constructor(p) {
						super({
							icon: C.$ak.preserveCase,
							title: h + p.appendTitle,
							isChecked: p.isChecked,
							hoverDelegate: p.hoverDelegate ?? (0, u.$cib)("element"),
							inputActiveOptionBorder: p.inputActiveOptionBorder,
							inputActiveOptionForeground: p.inputActiveOptionForeground,
							inputActiveOptionBackground: p.inputActiveOptionBackground,
						});
					}
				}
				class n extends E.$Uhb {
					static {
						this.OPTION_CHANGE = "optionChange";
					}
					constructor(p, o, f, b) {
						super(),
							(this.M = f),
							(this.h = !0),
							(this.r = 0),
							(this.s = this.D(new d.$re())),
							(this.onDidOptionChange = this.s.event),
							(this.t = this.D(new d.$re())),
							(this.onKeyDown = this.t.event),
							(this.w = this.D(new d.$re())),
							(this.onMouseDown = this.w.event),
							(this.y = this.D(new d.$re())),
							(this.onInput = this.y.event),
							(this.J = this.D(new d.$re())),
							(this.onKeyUp = this.J.event),
							(this.L = this.D(new d.$re())),
							(this.onPreserveCaseKeyDown = this.L.event),
							(this.O = 0),
							(this.a = o),
							(this.b = b.placeholder || ""),
							(this.c = b.validation),
							(this.g = b.label || a);
						const s = b.appendPreserveCaseLabel || "",
							l = b.history || [],
							y = !!b.flexibleHeight,
							$ = !!b.flexibleWidth,
							v = b.flexibleMaxHeight;
						(this.domNode = document.createElement("div")),
							this.domNode.classList.add("monaco-findInput"),
							(this.inputBox = this.D(
								new w.$Nob(this.domNode, this.a, {
									ariaLabel: this.g || "",
									placeholder: this.b || "",
									validationOptions: { validation: this.c },
									history: l,
									showHistoryHint: b.showHistoryHint,
									flexibleHeight: y,
									flexibleWidth: $,
									flexibleMaxHeight: v,
									inputBoxStyles: b.inputBoxStyles,
								}),
							)),
							(this.n = this.D(
								new c({ appendTitle: s, isChecked: !1, ...b.toggleStyles }),
							)),
							this.D(
								this.n.onChange((T) => {
									this.s.fire(T),
										!T && this.h && this.inputBox.focus(),
										this.validate();
								}),
							),
							this.D(
								this.n.onKeyDown((T) => {
									this.L.fire(T);
								}),
							),
							this.M ? (this.r = this.n.width()) : (this.r = 0);
						const S = [this.n.domNode];
						this.u(this.domNode, (T) => {
							if (
								T.equals(m.KeyCode.LeftArrow) ||
								T.equals(m.KeyCode.RightArrow) ||
								T.equals(m.KeyCode.Escape)
							) {
								const P = S.indexOf(this.domNode.ownerDocument.activeElement);
								if (P >= 0) {
									let k = -1;
									T.equals(m.KeyCode.RightArrow)
										? (k = (P + 1) % S.length)
										: T.equals(m.KeyCode.LeftArrow) &&
											(P === 0 ? (k = S.length - 1) : (k = P - 1)),
										T.equals(m.KeyCode.Escape)
											? (S[P].blur(), this.inputBox.focus())
											: k >= 0 && S[k].focus(),
										t.$ahb.stop(T, !0);
								}
							}
						});
						const I = document.createElement("div");
						(I.className = "controls"),
							(I.style.display = this.M ? "block" : "none"),
							I.appendChild(this.n.domNode),
							this.domNode.appendChild(I),
							p?.appendChild(this.domNode),
							this.u(this.inputBox.inputElement, (T) => this.t.fire(T)),
							this.z(this.inputBox.inputElement, (T) => this.J.fire(T)),
							this.C(this.inputBox.inputElement, (T) => this.y.fire()),
							this.j(this.inputBox.inputElement, (T) => this.w.fire(T));
					}
					enable() {
						this.domNode.classList.remove("disabled"),
							this.inputBox.enable(),
							this.n.enable();
					}
					disable() {
						this.domNode.classList.add("disabled"),
							this.inputBox.disable(),
							this.n.disable();
					}
					setFocusInputOnOptionClick(p) {
						this.h = p;
					}
					setEnabled(p) {
						p ? this.enable() : this.disable();
					}
					clear() {
						this.P(), this.setValue(""), this.focus();
					}
					getValue() {
						return this.inputBox.value;
					}
					setValue(p) {
						this.inputBox.value !== p && (this.inputBox.value = p);
					}
					onSearchSubmit() {
						this.inputBox.addToHistory();
					}
					N() {}
					select() {
						this.inputBox.select();
					}
					focus() {
						this.inputBox.focus();
					}
					getPreserveCase() {
						return this.n.checked;
					}
					setPreserveCase(p) {
						this.n.checked = p;
					}
					focusOnPreserve() {
						this.n.focus();
					}
					highlightFindOptions() {
						this.domNode.classList.remove("highlight-" + this.O),
							(this.O = 1 - this.O),
							this.domNode.classList.add("highlight-" + this.O);
					}
					validate() {
						this.inputBox?.validate();
					}
					showMessage(p) {
						this.inputBox?.showMessage(p);
					}
					clearMessage() {
						this.inputBox?.hideMessage();
					}
					P() {
						this.inputBox?.hideMessage();
					}
					set width(p) {
						(this.inputBox.paddingRight = this.r),
							(this.domNode.style.width = p + "px");
					}
					dispose() {
						super.dispose();
					}
				}
				e.$Vob = n;
			},
		),
		define(
			de[461],
			he([1, 0, 105, 437, 50, 14, 26, 6, 3, 4, 95, 2258]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kpb = e.$jpb = void 0),
					(r = mt(r));
				class a extends m.$1c {
					constructor(
						n,
						g,
						p = { orientation: t.ActionsOrientation.HORIZONTAL },
					) {
						super(),
							(this.t = []),
							(this.u = !1),
							(this.y = this.D(new d.$xe())),
							(this.onDidChangeDropdownVisibility = this.y.event),
							(this.z = this.D(new m.$Zc())),
							(p.hoverDelegate = p.hoverDelegate ?? this.D((0, u.$dib)())),
							(this.f = p),
							(this.n = this.D(new h(() => this.q?.show(), p.toggleMenuTitle))),
							(this.w = document.createElement("div")),
							(this.w.className = "monaco-toolbar"),
							n.appendChild(this.w),
							(this.m = this.D(
								new t.$eib(this.w, {
									orientation: p.orientation,
									ariaLabel: p.ariaLabel,
									actionRunner: p.actionRunner,
									allowContextMenu: p.allowContextMenu,
									highlightToggledItems: p.highlightToggledItems,
									hoverDelegate: p.hoverDelegate,
									actionViewItemProvider: (o, f) => {
										if (o.id === h.ID)
											return (
												(this.q = new i.$Pob(o, o.menuActions, g, {
													actionViewItemProvider: this.f.actionViewItemProvider,
													actionRunner: this.actionRunner,
													keybindingProvider: this.f.getKeyBinding,
													classNames: C.ThemeIcon.asClassNameArray(
														p.moreIcon ?? E.$ak.toolBarMore,
													),
													anchorAlignmentProvider:
														this.f.anchorAlignmentProvider,
													menuAsChild: !!this.f.renderDropdownAsChildElement,
													skipTelemetry: this.f.skipTelemetry,
													isMenu: !0,
													hoverDelegate: this.f.hoverDelegate,
												})),
												this.q.setActionContext(this.m.context),
												this.z.add(this.y.add(this.q.onDidChangeVisibility)),
												this.q
											);
										if (p.actionViewItemProvider) {
											const b = p.actionViewItemProvider(o, f);
											if (b) return b;
										}
										if (o instanceof w.$uj) {
											const b = new i.$Pob(o, o.actions, g, {
												actionViewItemProvider: this.f.actionViewItemProvider,
												actionRunner: this.actionRunner,
												keybindingProvider: this.f.getKeyBinding,
												classNames: o.class,
												anchorAlignmentProvider: this.f.anchorAlignmentProvider,
												menuAsChild: !!this.f.renderDropdownAsChildElement,
												skipTelemetry: this.f.skipTelemetry,
												hoverDelegate: this.f.hoverDelegate,
											});
											return (
												b.setActionContext(this.m.context),
												this.t.push(b),
												this.z.add(this.y.add(b.onDidChangeVisibility)),
												b
											);
										}
									},
								}),
							));
					}
					set actionRunner(n) {
						this.m.actionRunner = n;
					}
					get actionRunner() {
						return this.m.actionRunner;
					}
					set context(n) {
						(this.m.context = n), this.q?.setActionContext(n);
						for (const g of this.t) g.setActionContext(n);
					}
					getElement() {
						return this.w;
					}
					focus() {
						this.m.focus();
					}
					getItemsWidth() {
						let n = 0;
						for (let g = 0; g < this.m.length(); g++) n += this.m.getWidth(g);
						return n;
					}
					getItemAction(n) {
						return this.m.getAction(n);
					}
					getItemWidth(n) {
						return this.m.getWidth(n);
					}
					getItemsLength() {
						return this.m.length();
					}
					setAriaLabel(n) {
						this.m.setAriaLabel(n);
					}
					setActions(n, g) {
						this.F();
						const p = n ? n.slice(0) : [];
						(this.u = !!(g && g.length > 0)),
							this.u &&
								g &&
								((this.n.menuActions = g.slice(0)), p.push(this.n)),
							p.forEach((o) => {
								this.m.push(o, {
									icon: this.f.icon ?? !0,
									label: this.f.label ?? !1,
									keybinding: this.C(o),
								});
							});
					}
					isEmpty() {
						return this.m.isEmpty();
					}
					C(n) {
						return this.f.getKeyBinding?.(n)?.getLabel() ?? void 0;
					}
					F() {
						(this.t = []), this.z.clear(), this.m.clear();
					}
					dispose() {
						this.F(), this.z.dispose(), super.dispose();
					}
				}
				e.$jpb = a;
				class h extends w.$rj {
					static {
						this.ID = "toolbar.toggle.more";
					}
					constructor(n, g) {
						(g = g || r.localize(30, null)),
							super(h.ID, g, void 0, !0),
							(this.a = []),
							(this.b = n);
					}
					async run() {
						this.b();
					}
					get menuActions() {
						return this.a;
					}
					set menuActions(n) {
						this.a = n;
					}
				}
				e.$kpb = h;
			},
		),
		define(
			de[411],
			he([
				1, 0, 7, 265, 114, 105, 932, 292, 539, 278, 268, 1165, 264, 50, 24, 15,
				14, 26, 59, 6, 132, 27, 3, 201, 28, 4, 95, 77, 127, 2259,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wpb =
						e.AbstractTreePart =
						e.TreeFindMatchType =
						e.TreeFindMode =
						e.$vpb =
						e.$upb =
						e.$tpb =
						e.RenderIndentGuides =
						e.$spb =
						e.$rpb =
							void 0);
				class k extends m.$wib {
					set context(pe) {
						this.c.context = pe;
					}
					get context() {
						return this.c.context;
					}
					constructor(pe) {
						super(pe.elements.map(($e) => $e.element)), (this.c = pe);
					}
				}
				function L(ae) {
					return ae instanceof m.$wib ? new k(ae) : ae;
				}
				class D {
					constructor(pe, $e) {
						(this.d = pe),
							(this.f = $e),
							(this.b = y.$1c.None),
							(this.c = new y.$Zc());
					}
					getDragURI(pe) {
						return this.f.getDragURI(pe.element);
					}
					getDragLabel(pe, $e) {
						if (this.f.getDragLabel)
							return this.f.getDragLabel(
								pe.map((ye) => ye.element),
								$e,
							);
					}
					onDragStart(pe, $e) {
						this.f.onDragStart?.(L(pe), $e);
					}
					onDragOver(pe, $e, ye, ue, fe, me = !0) {
						const ve = this.f.onDragOver(L(pe), $e && $e.element, ye, ue, fe),
							ge = this.a !== $e;
						if ((ge && (this.b.dispose(), (this.a = $e)), typeof $e > "u"))
							return ve;
						if (
							(ge &&
								typeof ve != "boolean" &&
								ve.autoExpand &&
								(this.b = (0, g.$Oh)(
									() => {
										const Oe = this.d(),
											xe = Oe.getNodeLocation($e);
										Oe.isCollapsed(xe) && Oe.setCollapsed(xe, !1),
											(this.a = void 0);
									},
									500,
									this.c,
								)),
							typeof ve == "boolean" ||
								!ve.accept ||
								typeof ve.bubble > "u" ||
								ve.feedback)
						) {
							if (!me) {
								const Oe = typeof ve == "boolean" ? ve : ve.accept,
									xe = typeof ve == "boolean" ? void 0 : ve.effect;
								return { accept: Oe, effect: xe, feedback: [ye] };
							}
							return ve;
						}
						if (ve.bubble === h.TreeDragOverBubble.Up) {
							const Oe = this.d(),
								xe = Oe.getNodeLocation($e),
								He = Oe.getParentNodeLocation(xe),
								Ke = Oe.getNode(He),
								Je = He && Oe.getListIndex(He);
							return this.onDragOver(pe, Ke, Je, ue, fe, !1);
						}
						const be = this.d(),
							Ce = be.getNodeLocation($e),
							Le = be.getListIndex(Ce),
							Fe = be.getListRenderCount(Ce);
						return { ...ve, feedback: (0, n.$Vb)(Le, Le + Fe) };
					}
					drop(pe, $e, ye, ue, fe) {
						this.b.dispose(),
							(this.a = void 0),
							this.f.drop(L(pe), $e && $e.element, ye, ue, fe);
					}
					onDragEnd(pe) {
						this.f.onDragEnd?.(pe);
					}
					dispose() {
						this.c.dispose(), this.f.dispose();
					}
				}
				function M(ae, pe) {
					return (
						pe && {
							...pe,
							identityProvider: pe.identityProvider && {
								getId($e) {
									return pe.identityProvider.getId($e.element);
								},
							},
							dnd: pe.dnd && new D(ae, pe.dnd),
							multipleSelectionController: pe.multipleSelectionController && {
								isSelectionSingleChangeEvent($e) {
									return pe.multipleSelectionController.isSelectionSingleChangeEvent(
										{ ...$e, element: $e.element },
									);
								},
								isSelectionRangeChangeEvent($e) {
									return pe.multipleSelectionController.isSelectionRangeChangeEvent(
										{ ...$e, element: $e.element },
									);
								},
							},
							accessibilityProvider: pe.accessibilityProvider && {
								...pe.accessibilityProvider,
								getSetSize($e) {
									const ye = ae(),
										ue = ye.getNodeLocation($e),
										fe = ye.getParentNodeLocation(ue);
									return ye.getNode(fe).visibleChildrenCount;
								},
								getPosInSet($e) {
									return $e.visibleChildIndex + 1;
								},
								isChecked:
									pe.accessibilityProvider && pe.accessibilityProvider.isChecked
										? ($e) => pe.accessibilityProvider.isChecked($e.element)
										: void 0,
								getRole:
									pe.accessibilityProvider && pe.accessibilityProvider.getRole
										? ($e) => pe.accessibilityProvider.getRole($e.element)
										: () => "treeitem",
								getAriaLabel($e) {
									return pe.accessibilityProvider.getAriaLabel($e.element);
								},
								getWidgetAriaLabel() {
									return pe.accessibilityProvider.getWidgetAriaLabel();
								},
								getWidgetRole:
									pe.accessibilityProvider &&
									pe.accessibilityProvider.getWidgetRole
										? () => pe.accessibilityProvider.getWidgetRole()
										: () => "tree",
								getAriaLevel:
									pe.accessibilityProvider &&
									pe.accessibilityProvider.getAriaLevel
										? ($e) => pe.accessibilityProvider.getAriaLevel($e.element)
										: ($e) => $e.depth,
								getActiveDescendantId:
									pe.accessibilityProvider.getActiveDescendantId &&
									(($e) =>
										pe.accessibilityProvider.getActiveDescendantId($e.element)),
							},
							keyboardNavigationLabelProvider:
								pe.keyboardNavigationLabelProvider && {
									...pe.keyboardNavigationLabelProvider,
									getKeyboardNavigationLabel($e) {
										return pe.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(
											$e.element,
										);
									},
								},
						}
					);
				}
				class N {
					constructor(pe) {
						this.a = pe;
					}
					getHeight(pe) {
						return this.a.getHeight(pe.element);
					}
					getTemplateId(pe) {
						return this.a.getTemplateId(pe.element);
					}
					hasDynamicHeight(pe) {
						return (
							!!this.a.hasDynamicHeight && this.a.hasDynamicHeight(pe.element)
						);
					}
					setDynamicHeight(pe, $e) {
						this.a.setDynamicHeight?.(pe.element, $e);
					}
				}
				e.$rpb = N;
				class A {
					static lift(pe) {
						return pe instanceof A ? pe : new A(pe);
					}
					static empty(pe = 0) {
						return new A({
							focus: [],
							selection: [],
							expanded: Object.create(null),
							scrollTop: pe,
						});
					}
					constructor(pe) {
						if (
							((this.focus = new Set(pe.focus)),
							(this.selection = new Set(pe.selection)),
							pe.expanded instanceof Array)
						) {
							this.expanded = Object.create(null);
							for (const $e of pe.expanded) this.expanded[$e] = 1;
						} else this.expanded = pe.expanded;
						(this.expanded = pe.expanded), (this.scrollTop = pe.scrollTop);
					}
					toJSON() {
						return {
							focus: Array.from(this.focus),
							selection: Array.from(this.selection),
							expanded: this.expanded,
							scrollTop: this.scrollTop,
						};
					}
				}
				e.$spb = A;
				var R;
				(function (ae) {
					(ae.None = "none"), (ae.OnHover = "onHover"), (ae.Always = "always");
				})(R || (e.RenderIndentGuides = R = {}));
				class O {
					get elements() {
						return this.b;
					}
					constructor(pe, $e = []) {
						(this.b = $e),
							(this.a = new y.$Zc()),
							(this.onDidChange = b.Event.forEach(
								pe,
								(ye) => (this.b = ye),
								this.a,
							));
					}
					dispose() {
						this.a.dispose();
					}
				}
				class B {
					static {
						this.a = 8;
					}
					constructor(pe, $e, ye, ue, fe, me = {}) {
						(this.o = pe),
							(this.p = $e),
							(this.q = ue),
							(this.s = fe),
							(this.b = new Map()),
							(this.c = new Map()),
							(this.d = B.a),
							(this.f = !1),
							(this.g = !1),
							(this.j = new Set()),
							(this.k = y.$1c.None),
							(this.m = new y.$Zc()),
							(this.templateId = pe.templateId),
							this.updateOptions(me),
							b.Event.map(ye, (ve) => ve.node)(this.u, this, this.m),
							pe.onDidChangeTwistieState?.(this.t, this, this.m);
					}
					updateOptions(pe = {}) {
						if (typeof pe.indent < "u") {
							const $e = (0, $.$Zm)(pe.indent, 0, 40);
							if ($e !== this.d) {
								this.d = $e;
								for (const [ye, ue] of this.c) this.v(ye, ue);
							}
						}
						if (typeof pe.renderIndentGuides < "u") {
							const $e = pe.renderIndentGuides !== R.None;
							if ($e !== this.g) {
								this.g = $e;
								for (const [ye, ue] of this.c) this.w(ye, ue);
								if ((this.k.dispose(), $e)) {
									const ye = new y.$Zc();
									this.q.onDidChange(this.x, this, ye),
										(this.k = ye),
										this.x(this.q.elements);
								}
							}
						}
						typeof pe.hideTwistiesOfChildlessElements < "u" &&
							(this.f = pe.hideTwistiesOfChildlessElements);
					}
					renderTemplate(pe) {
						const $e = (0, t.$fhb)(pe, (0, t.$)(".monaco-tl-row")),
							ye = (0, t.$fhb)($e, (0, t.$)(".monaco-tl-indent")),
							ue = (0, t.$fhb)($e, (0, t.$)(".monaco-tl-twistie")),
							fe = (0, t.$fhb)($e, (0, t.$)(".monaco-tl-contents")),
							me = this.o.renderTemplate(fe);
						return {
							container: pe,
							indent: ye,
							twistie: ue,
							indentGuidesDisposable: y.$1c.None,
							templateData: me,
						};
					}
					renderElement(pe, $e, ye, ue) {
						this.c.set(pe, ye),
							this.b.set(pe.element, pe),
							this.v(pe, ye),
							this.o.renderElement(pe, $e, ye.templateData, ue);
					}
					disposeElement(pe, $e, ye, ue) {
						ye.indentGuidesDisposable.dispose(),
							this.o.disposeElement?.(pe, $e, ye.templateData, ue),
							typeof ue == "number" &&
								(this.c.delete(pe), this.b.delete(pe.element));
					}
					disposeTemplate(pe) {
						this.o.disposeTemplate(pe.templateData);
					}
					t(pe) {
						const $e = this.b.get(pe);
						$e && this.u($e);
					}
					u(pe) {
						const $e = this.c.get(pe);
						$e && (this.x(this.q.elements), this.v(pe, $e));
					}
					v(pe, $e) {
						const ye = B.a + (pe.depth - 1) * this.d;
						($e.twistie.style.paddingLeft = `${ye}px`),
							($e.indent.style.width = `${ye + this.d - 16}px`),
							pe.collapsible
								? $e.container.setAttribute(
										"aria-expanded",
										String(!pe.collapsed),
									)
								: $e.container.removeAttribute("aria-expanded"),
							$e.twistie.classList.remove(
								...o.ThemeIcon.asClassNameArray(p.$ak.treeItemExpanded),
							);
						let ue = !1;
						this.o.renderTwistie &&
							(ue = this.o.renderTwistie(pe.element, $e.twistie)),
							pe.collapsible && (!this.f || pe.visibleChildrenCount > 0)
								? (ue ||
										$e.twistie.classList.add(
											...o.ThemeIcon.asClassNameArray(p.$ak.treeItemExpanded),
										),
									$e.twistie.classList.add("collapsible"),
									$e.twistie.classList.toggle("collapsed", pe.collapsed))
								: $e.twistie.classList.remove("collapsible", "collapsed"),
							this.w(pe, $e);
					}
					w(pe, $e) {
						if (
							((0, t.$9fb)($e.indent),
							$e.indentGuidesDisposable.dispose(),
							!this.g)
						)
							return;
						const ye = new y.$Zc(),
							ue = this.p();
						for (;;) {
							const fe = ue.getNodeLocation(pe),
								me = ue.getParentNodeLocation(fe);
							if (!me) break;
							const ve = ue.getNode(me),
								ge = (0, t.$)(".indent-guide", { style: `width: ${this.d}px` });
							this.j.has(ve) && ge.classList.add("active"),
								$e.indent.childElementCount === 0
									? $e.indent.appendChild(ge)
									: $e.indent.insertBefore(ge, $e.indent.firstElementChild),
								this.s.add(ve, ge),
								ye.add((0, y.$Yc)(() => this.s.delete(ve, ge))),
								(pe = ve);
						}
						$e.indentGuidesDisposable = ye;
					}
					x(pe) {
						if (!this.g) return;
						const $e = new Set(),
							ye = this.p();
						pe.forEach((ue) => {
							const fe = ye.getNodeLocation(ue);
							try {
								const me = ye.getParentNodeLocation(fe);
								ue.collapsible && ue.children.length > 0 && !ue.collapsed
									? $e.add(ue)
									: me && $e.add(ye.getNode(me));
							} catch {}
						}),
							this.j.forEach((ue) => {
								$e.has(ue) ||
									this.s.forEach(ue, (fe) => fe.classList.remove("active"));
							}),
							$e.forEach((ue) => {
								this.j.has(ue) ||
									this.s.forEach(ue, (fe) => fe.classList.add("active"));
							}),
							(this.j = $e);
					}
					dispose() {
						this.c.clear(),
							this.b.clear(),
							this.k.dispose(),
							(0, y.$Vc)(this.m);
					}
				}
				e.$tpb = B;
				class U {
					get totalCount() {
						return this.a;
					}
					get matchCount() {
						return this.b;
					}
					set pattern(pe) {
						(this.c = pe), (this.d = pe.toLowerCase());
					}
					constructor(pe, $e, ye) {
						(this.g = pe),
							(this.j = $e),
							(this.k = ye),
							(this.a = 0),
							(this.b = 0),
							(this.c = ""),
							(this.d = ""),
							(this.f = new y.$Zc()),
							pe.onWillRefilter(this.m, this, this.f);
					}
					filter(pe, $e) {
						let ye = h.TreeVisibility.Visible;
						if (this.k) {
							const me = this.k.filter(pe, $e);
							if (
								(typeof me == "boolean"
									? (ye = me
											? h.TreeVisibility.Visible
											: h.TreeVisibility.Hidden)
									: (0, a.$opb)(me)
										? (ye = (0, a.$ppb)(me.visibility))
										: (ye = me),
								ye === h.TreeVisibility.Hidden)
							)
								return !1;
						}
						if ((this.a++, !this.c))
							return this.b++, { data: s.FuzzyScore.Default, visibility: ye };
						const ue = this.j.getKeyboardNavigationLabel(pe),
							fe = Array.isArray(ue) ? ue : [ue];
						for (const me of fe) {
							const ve = me && me.toString();
							if (typeof ve > "u")
								return { data: s.FuzzyScore.Default, visibility: ye };
							let ge;
							if (this.g.findMatchType === q.Contiguous) {
								const be = ve.toLowerCase().indexOf(this.d);
								if (be > -1) {
									ge = [Number.MAX_SAFE_INTEGER, 0];
									for (let Ce = this.d.length; Ce > 0; Ce--)
										ge.push(be + Ce - 1);
								}
							} else
								ge = (0, s.$6k)(this.c, this.d, 0, ve, ve.toLowerCase(), 0, {
									firstMatchCanBeWeak: !0,
									boostFullMatch: !0,
								});
							if (ge)
								return (
									this.b++,
									fe.length === 1
										? { data: ge, visibility: ye }
										: { data: { label: ve, score: ge }, visibility: ye }
								);
						}
						return this.g.findMode === H.Filter
							? typeof this.g.options.defaultFindVisibility == "number"
								? this.g.options.defaultFindVisibility
								: this.g.options.defaultFindVisibility
									? this.g.options.defaultFindVisibility(pe)
									: h.TreeVisibility.Recurse
							: { data: s.FuzzyScore.Default, visibility: ye };
					}
					m() {
						(this.a = 0), (this.b = 0);
					}
					dispose() {
						(0, y.$Vc)(this.f);
					}
				}
				class z extends u.$8ib {
					constructor(pe) {
						super({
							icon: p.$ak.listFilter,
							title: (0, S.localize)(31, null),
							isChecked: pe.isChecked ?? !1,
							hoverDelegate: pe.hoverDelegate ?? (0, I.$cib)("element"),
							inputActiveOptionBorder: pe.inputActiveOptionBorder,
							inputActiveOptionForeground: pe.inputActiveOptionForeground,
							inputActiveOptionBackground: pe.inputActiveOptionBackground,
						});
					}
				}
				e.$upb = z;
				class F extends u.$8ib {
					constructor(pe) {
						super({
							icon: p.$ak.searchFuzzy,
							title: (0, S.localize)(32, null),
							isChecked: pe.isChecked ?? !1,
							hoverDelegate: pe.hoverDelegate ?? (0, I.$cib)("element"),
							inputActiveOptionBorder: pe.inputActiveOptionBorder,
							inputActiveOptionForeground: pe.inputActiveOptionForeground,
							inputActiveOptionBackground: pe.inputActiveOptionBackground,
						});
					}
				}
				e.$vpb = F;
				const x = {
					inputBoxStyles: d.$Lob,
					toggleStyles: u.$6ib,
					listFilterWidgetBackground: void 0,
					listFilterWidgetNoMatchesOutline: void 0,
					listFilterWidgetOutline: void 0,
					listFilterWidgetShadow: void 0,
				};
				var H;
				(function (ae) {
					(ae[(ae.Highlight = 0)] = "Highlight"),
						(ae[(ae.Filter = 1)] = "Filter");
				})(H || (e.TreeFindMode = H = {}));
				var q;
				(function (ae) {
					(ae[(ae.Fuzzy = 0)] = "Fuzzy"),
						(ae[(ae.Contiguous = 1)] = "Contiguous");
				})(q || (e.TreeFindMatchType = q = {}));
				class V extends y.$1c {
					set mode(pe) {
						(this.b.checked = pe === H.Filter),
							this.f.inputBox.setPlaceHolder(
								pe === H.Filter
									? (0, S.localize)(33, null)
									: (0, S.localize)(34, null),
							);
					}
					set matchType(pe) {
						this.c.checked = pe === q.Fuzzy;
					}
					get value() {
						return this.f.inputBox.value;
					}
					set value(pe) {
						this.f.inputBox.value = pe;
					}
					constructor(pe, $e, ye, ue, fe, me) {
						super(),
							(this.s = $e),
							(this.a = (0, t.h)(".monaco-tree-type-filter", [
								(0, t.h)(
									".monaco-tree-type-filter-grab.codicon.codicon-debug-gripper@grab",
									{ tabIndex: 0 },
								),
								(0, t.h)(".monaco-tree-type-filter-input@findInput"),
								(0, t.h)(".monaco-tree-type-filter-actionbar@actionbar"),
							])),
							(this.j = 0),
							(this.m = 0),
							(this.q = 0),
							(this._onDidDisable = new b.$re()),
							(this.onDidDisable = this._onDidDisable.event),
							pe.appendChild(this.a.root),
							this.D((0, y.$Yc)(() => this.a.root.remove()));
						const ve = me?.styles ?? x;
						ve.listFilterWidgetBackground &&
							(this.a.root.style.backgroundColor =
								ve.listFilterWidgetBackground),
							ve.listFilterWidgetShadow &&
								(this.a.root.style.boxShadow = `0 0 8px 2px ${ve.listFilterWidgetShadow}`);
						const ge = this.D((0, I.$dib)());
						(this.b = this.D(
							new z({
								...ve.toggleStyles,
								isChecked: ue === H.Filter,
								hoverDelegate: ge,
							}),
						)),
							(this.c = this.D(
								new F({
									...ve.toggleStyles,
									isChecked: fe === q.Fuzzy,
									hoverDelegate: ge,
								}),
							)),
							(this.onDidChangeMode = b.Event.map(
								this.b.onChange,
								() => (this.b.checked ? H.Filter : H.Highlight),
								this.B,
							)),
							(this.onDidChangeMatchType = b.Event.map(
								this.c.onChange,
								() => (this.c.checked ? q.Fuzzy : q.Contiguous),
								this.B,
							)),
							(this.f = this.D(
								new C.$Uob(this.a.findInput, ye, {
									label: (0, S.localize)(35, null),
									additionalToggles: [this.b, this.c],
									showCommonFindToggles: !1,
									inputBoxStyles: ve.inputBoxStyles,
									toggleStyles: ve.toggleStyles,
									history: me?.history,
								}),
							)),
							(this.g = this.D(new E.$eib(this.a.actionbar))),
							(this.mode = ue);
						const be = this.D(
								new i.$mib(this.f.inputBox.inputElement, "keydown"),
							),
							Ce = b.Event.chain(be.event, (xe) =>
								xe.map((He) => new w.$7fb(He)),
							);
						this.D(
							Ce((xe) => {
								if (xe.equals(l.KeyCode.Enter)) {
									xe.preventDefault(),
										xe.stopPropagation(),
										this.f.inputBox.addToHistory(),
										this.s.domFocus();
									return;
								}
								if (xe.equals(l.KeyCode.DownArrow)) {
									xe.preventDefault(),
										xe.stopPropagation(),
										this.f.inputBox.isAtLastInHistory() ||
										this.f.inputBox.isNowhereInHistory()
											? (this.f.inputBox.addToHistory(), this.s.domFocus())
											: this.f.inputBox.showNextValue();
									return;
								}
								if (xe.equals(l.KeyCode.UpArrow)) {
									xe.preventDefault(),
										xe.stopPropagation(),
										this.f.inputBox.showPreviousValue();
									return;
								}
							}),
						);
						const Le = this.D(
							new c.$rj(
								"close",
								(0, S.localize)(36, null),
								"codicon codicon-close",
								!0,
								() => this.dispose(),
							),
						);
						this.g.push(Le, { icon: !0, label: !1 });
						const Fe = this.D(new i.$mib(this.a.grab, "mousedown"));
						this.D(
							Fe.event((xe) => {
								const He = new y.$Zc(),
									Ke = He.add(new i.$mib((0, t.getWindow)(xe), "mousemove")),
									Je = He.add(new i.$mib((0, t.getWindow)(xe), "mouseup")),
									Te = this.m,
									Ee = xe.pageX,
									Ie = this.q,
									Be = xe.pageY;
								this.a.grab.classList.add("grabbing");
								const Se = this.a.root.style.transition;
								this.a.root.style.transition = "unset";
								const ke = (Ue) => {
									const qe = Ue.pageX - Ee;
									this.m = Te - qe;
									const Ae = Ue.pageY - Be;
									(this.q = Ie + Ae), this.layout();
								};
								He.add(Ke.event(ke)),
									He.add(
										Je.event((Ue) => {
											ke(Ue),
												this.a.grab.classList.remove("grabbing"),
												(this.a.root.style.transition = Se),
												He.dispose();
										}),
									);
							}),
						);
						const Oe = b.Event.chain(
							this.D(new i.$mib(this.a.grab, "keydown")).event,
							(xe) => xe.map((He) => new w.$7fb(He)),
						);
						this.D(
							Oe((xe) => {
								let He, Ke;
								if (
									(xe.keyCode === l.KeyCode.LeftArrow
										? (He = Number.POSITIVE_INFINITY)
										: xe.keyCode === l.KeyCode.RightArrow
											? (He = 0)
											: xe.keyCode === l.KeyCode.Space &&
												(He = this.m === 0 ? Number.POSITIVE_INFINITY : 0),
									xe.keyCode === l.KeyCode.UpArrow
										? (Ke = 0)
										: xe.keyCode === l.KeyCode.DownArrow &&
											(Ke = Number.POSITIVE_INFINITY),
									He !== void 0 &&
										(xe.preventDefault(),
										xe.stopPropagation(),
										(this.m = He),
										this.layout()),
									Ke !== void 0)
								) {
									xe.preventDefault(), xe.stopPropagation(), (this.q = Ke);
									const Je = this.a.root.style.transition;
									(this.a.root.style.transition = "unset"),
										this.layout(),
										setTimeout(() => {
											this.a.root.style.transition = Je;
										}, 0);
								}
							}),
						),
							(this.onDidChangeValue = this.f.onDidChange);
					}
					getHistory() {
						return this.f.inputBox.getHistory();
					}
					focus() {
						this.f.focus();
					}
					select() {
						this.f.select(), this.f.inputBox.addToHistory(!0);
					}
					layout(pe = this.j) {
						(this.j = pe),
							(this.m = (0, $.$Zm)(this.m, 0, Math.max(0, pe - 212))),
							(this.a.root.style.right = `${this.m}px`),
							(this.q = (0, $.$Zm)(this.q, 0, 24)),
							(this.a.root.style.top = `${this.q}px`);
					}
					showMessage(pe) {
						this.f.showMessage(pe);
					}
					clearMessage() {
						this.f.clearMessage();
					}
					async dispose() {
						this._onDidDisable.fire(),
							this.a.root.classList.add("disabled"),
							await (0, g.$Nh)(300),
							super.dispose();
					}
				}
				class G {
					get pattern() {
						return this.b;
					}
					get mode() {
						return this.d;
					}
					set mode(pe) {
						pe !== this.d &&
							((this.d = pe),
							this.g && (this.g.mode = this.d),
							this.t.refilter(),
							this.A(),
							this.k.fire(pe));
					}
					get matchType() {
						return this.f;
					}
					set matchType(pe) {
						pe !== this.f &&
							((this.f = pe),
							this.g && (this.g.matchType = this.f),
							this.t.refilter(),
							this.A(),
							this.m.fire(pe));
					}
					constructor(pe, $e, ye, ue, fe, me = {}) {
						(this.t = pe),
							(this.u = ye),
							(this.v = ue),
							(this.w = fe),
							(this.x = me),
							(this.b = ""),
							(this.c = ""),
							(this.j = 0),
							(this.k = new b.$re()),
							(this.onDidChangeMode = this.k.event),
							(this.m = new b.$re()),
							(this.onDidChangeMatchType = this.m.event),
							(this.o = new b.$re()),
							(this.onDidChangePattern = this.o.event),
							(this.p = new b.$re()),
							(this.onDidChangeOpenState = this.p.event),
							(this.q = new y.$Zc()),
							(this.s = new y.$Zc()),
							(this.d = pe.options.defaultFindMode ?? H.Highlight),
							(this.f = pe.options.defaultFindMatchType ?? q.Fuzzy),
							$e.onDidSplice(this.z, this, this.s);
					}
					updateOptions(pe = {}) {
						pe.defaultFindMode !== void 0 && (this.mode = pe.defaultFindMode),
							pe.defaultFindMatchType !== void 0 &&
								(this.matchType = pe.defaultFindMatchType);
					}
					open() {
						if (this.g) {
							this.g.focus(), this.g.select();
							return;
						}
						(this.g = new V(
							this.u.getHTMLElement(),
							this.t,
							this.w,
							this.mode,
							this.matchType,
							{ ...this.x, history: this.a },
						)),
							this.q.add(this.g),
							this.g.onDidChangeValue(this.y, this, this.q),
							this.g.onDidChangeMode((pe) => (this.mode = pe), void 0, this.q),
							this.g.onDidChangeMatchType(
								(pe) => (this.matchType = pe),
								void 0,
								this.q,
							),
							this.g.onDidDisable(this.close, this, this.q),
							this.g.layout(this.j),
							this.g.focus(),
							(this.g.value = this.c),
							this.g.select(),
							this.p.fire(!0);
					}
					close() {
						this.g &&
							((this.a = this.g.getHistory()),
							(this.g = void 0),
							this.q.clear(),
							(this.c = this.pattern),
							this.y(""),
							this.t.domFocus(),
							this.p.fire(!1));
					}
					y(pe) {
						(this.b = pe),
							this.o.fire(pe),
							(this.v.pattern = pe),
							this.t.refilter(),
							pe &&
								this.t.focusNext(
									0,
									!0,
									void 0,
									(ye) => !s.FuzzyScore.isDefault(ye.filterData),
								);
						const $e = this.t.getFocus();
						if ($e.length > 0) {
							const ye = $e[0];
							this.t.getRelativeTop(ye) === null && this.t.reveal(ye, 0.5);
						}
						this.A();
					}
					z() {
						!this.g ||
							this.pattern.length === 0 ||
							(this.t.refilter(), this.A());
					}
					A() {
						const pe = this.v.totalCount > 0 && this.v.matchCount === 0;
						this.pattern && pe
							? ((0, P.$oib)((0, S.localize)(37, null)),
								(this.t.options.showNotFoundMessage ?? !0)
									? this.g?.showMessage({
											type: d.MessageType.WARNING,
											content: (0, S.localize)(38, null),
										})
									: this.g?.showMessage({ type: d.MessageType.WARNING }))
							: (this.g?.clearMessage(),
								this.pattern &&
									(0, P.$oib)((0, S.localize)(39, null, this.v.matchCount)));
					}
					shouldAllowFocus(pe) {
						return !this.g ||
							!this.pattern ||
							(this.v.totalCount > 0 && this.v.matchCount <= 1)
							? !0
							: !s.FuzzyScore.isDefault(pe.filterData);
					}
					layout(pe) {
						(this.j = pe), this.g?.layout(pe);
					}
					dispose() {
						(this.a = void 0),
							this.o.dispose(),
							this.q.dispose(),
							this.s.dispose();
					}
				}
				function K(ae, pe) {
					return ae.position === pe.position && J(ae, pe);
				}
				function J(ae, pe) {
					return (
						ae.node.element === pe.node.element &&
						ae.startIndex === pe.startIndex &&
						ae.height === pe.height &&
						ae.endIndex === pe.endIndex
					);
				}
				class W {
					constructor(pe = []) {
						this.stickyNodes = pe;
					}
					get count() {
						return this.stickyNodes.length;
					}
					equal(pe) {
						return (0, n.$yb)(this.stickyNodes, pe.stickyNodes, K);
					}
					lastNodePartiallyVisible() {
						if (this.count === 0) return !1;
						const pe = this.stickyNodes[this.count - 1];
						if (this.count === 1) return pe.position !== 0;
						const $e = this.stickyNodes[this.count - 2];
						return $e.position + $e.height !== pe.position;
					}
					animationStateChanged(pe) {
						if (
							!(0, n.$yb)(this.stickyNodes, pe.stickyNodes, J) ||
							this.count === 0
						)
							return !1;
						const $e = this.stickyNodes[this.count - 1],
							ye = pe.stickyNodes[pe.count - 1];
						return $e.position !== ye.position;
					}
				}
				class X {
					constrainStickyScrollNodes(pe, $e, ye) {
						for (let ue = 0; ue < pe.length; ue++) {
							const fe = pe[ue];
							if (fe.position + fe.height > ye || ue >= $e)
								return pe.slice(0, ue);
						}
						return pe;
					}
				}
				class Y extends y.$1c {
					constructor(pe, $e, ye, ue, fe, me = {}) {
						super(),
							(this.g = pe),
							(this.j = $e),
							(this.m = ye),
							(this.q = fe),
							(this.c = 0.4);
						const ve = this.validateStickySettings(me);
						(this.b = ve.stickyScrollMaxItemCount),
							(this.a = me.stickyScrollDelegate ?? new X()),
							(this.f = this.D(
								new ie(
									ye.getScrollableElement(),
									ye,
									pe,
									ue,
									fe,
									me.accessibilityProvider,
								),
							)),
							(this.onDidChangeHasFocus = this.f.onDidChangeHasFocus),
							(this.onContextMenu = this.f.onContextMenu),
							this.D(ye.onDidScroll(() => this.t())),
							this.D(ye.onDidChangeContentHeight(() => this.t())),
							this.D(pe.onDidChangeCollapseState(() => this.t())),
							this.t();
					}
					get height() {
						return this.f.height;
					}
					get count() {
						return this.f.count;
					}
					getNode(pe) {
						return this.f.getNode(pe);
					}
					s(pe) {
						let $e;
						if (
							(pe === 0
								? ($e = this.m.firstVisibleIndex)
								: ($e = this.m.indexAt(pe + this.m.scrollTop)),
							!($e < 0 || $e >= this.m.length))
						)
							return this.m.element($e);
					}
					t() {
						const pe = this.s(0);
						if (!pe || this.g.scrollTop === 0) {
							this.f.setState(void 0);
							return;
						}
						const $e = this.u(pe);
						this.f.setState($e);
					}
					u(pe) {
						const $e = [];
						let ye = pe,
							ue = 0,
							fe = this.y(ye, void 0, ue);
						for (
							;
							fe &&
							($e.push(fe),
							(ue += fe.height),
							!($e.length <= this.b && ((ye = this.w(fe)), !ye)));
						)
							fe = this.y(ye, fe.node, ue);
						const me = this.H($e);
						return me.length ? new W(me) : void 0;
					}
					w(pe) {
						return this.s(pe.position + pe.height);
					}
					y(pe, $e, ye) {
						const ue = this.F(pe, $e);
						if (ue && !(ue === pe && (!this.J(pe) || this.z(pe, ye))))
							return this.C(ue, ye);
					}
					z(pe, $e) {
						const ye = this.L(pe),
							ue = this.m.getElementTop(ye),
							fe = $e;
						return this.m.scrollTop === ue - fe;
					}
					C(pe, $e) {
						const ye = this.q.getHeight(pe),
							{ startIndex: ue, endIndex: fe } = this.M(pe),
							me = this.G(fe, $e, ye);
						return {
							node: pe,
							position: me,
							height: ye,
							startIndex: ue,
							endIndex: fe,
						};
					}
					F(pe, $e = void 0) {
						let ye = pe,
							ue = this.I(ye);
						for (; ue; ) {
							if (ue === $e) return ye;
							(ye = ue), (ue = this.I(ye));
						}
						if ($e === void 0) return ye;
					}
					G(pe, $e, ye) {
						let ue = this.m.getRelativeTop(pe);
						if (
							ue === null &&
							this.m.firstVisibleIndex === pe &&
							pe + 1 < this.m.length
						) {
							const be = this.q.getHeight(this.m.element(pe)),
								Ce = this.m.getRelativeTop(pe + 1);
							ue = Ce ? Ce - be / this.m.renderHeight : null;
						}
						if (ue === null) return $e;
						const fe = this.m.element(pe),
							me = this.q.getHeight(fe),
							ge = ue * this.m.renderHeight + me;
						return $e + ye > ge && $e <= ge ? ge - ye : $e;
					}
					H(pe) {
						if (pe.length === 0) return [];
						const $e = this.m.renderHeight * this.c,
							ye = pe[pe.length - 1];
						if (pe.length <= this.b && ye.position + ye.height <= $e) return pe;
						const ue = this.a.constrainStickyScrollNodes(pe, this.b, $e);
						if (!ue.length) return [];
						const fe = ue[ue.length - 1];
						if (ue.length > this.b || fe.position + fe.height > $e)
							throw new Error("stickyScrollDelegate violates constraints");
						return ue;
					}
					I(pe) {
						const $e = this.j.getNodeLocation(pe),
							ye = this.j.getParentNodeLocation($e);
						return ye ? this.j.getNode(ye) : void 0;
					}
					J(pe) {
						const $e = this.j.getNodeLocation(pe);
						return this.j.getListRenderCount($e) > 1;
					}
					L(pe) {
						const $e = this.j.getNodeLocation(pe);
						return this.j.getListIndex($e);
					}
					M(pe) {
						const $e = this.j.getNodeLocation(pe),
							ye = this.j.getListIndex($e);
						if (ye < 0) throw new Error("Node not found in tree");
						const ue = this.j.getListRenderCount($e),
							fe = ye + ue - 1;
						return { startIndex: ye, endIndex: fe };
					}
					nodePositionTopBelowWidget(pe) {
						const $e = [];
						let ye = this.I(pe);
						for (; ye; ) $e.push(ye), (ye = this.I(ye));
						let ue = 0;
						for (let fe = 0; fe < $e.length && fe < this.b; fe++)
							ue += this.q.getHeight($e[fe]);
						return ue;
					}
					getFocus() {
						return this.f.getFocus();
					}
					domFocus() {
						this.f.domFocus();
					}
					focusedLast() {
						return this.f.focusedLast();
					}
					updateOptions(pe = {}) {
						if (!pe.stickyScrollMaxItemCount) return;
						const $e = this.validateStickySettings(pe);
						this.b !== $e.stickyScrollMaxItemCount &&
							((this.b = $e.stickyScrollMaxItemCount), this.t());
					}
					validateStickySettings(pe) {
						let $e = 7;
						return (
							typeof pe.stickyScrollMaxItemCount == "number" &&
								($e = Math.max(pe.stickyScrollMaxItemCount, 1)),
							{ stickyScrollMaxItemCount: $e }
						);
					}
				}
				class ie {
					constructor(pe, $e, ye, ue, fe, me) {
						(this.g = $e),
							(this.j = ye),
							(this.k = ue),
							(this.m = fe),
							(this.o = me),
							(this.c = []),
							(this.d = new y.$Zc()),
							(this.a = (0, t.$)(".monaco-tree-sticky-container.empty")),
							pe.appendChild(this.a);
						const ve = (0, t.$)(".monaco-tree-sticky-container-shadow");
						this.a.appendChild(ve),
							(this.f = new ne(this.a, $e)),
							(this.onDidChangeHasFocus = this.f.onDidChangeHasFocus),
							(this.onContextMenu = this.f.onContextMenu);
					}
					get height() {
						if (!this.b) return 0;
						const pe = this.b.stickyNodes[this.b.count - 1];
						return pe.position + pe.height;
					}
					get count() {
						return this.b?.count ?? 0;
					}
					getNode(pe) {
						return this.b?.stickyNodes.find(($e) => $e.node === pe);
					}
					setState(pe) {
						const $e = !!this.b && this.b.count > 0,
							ye = !!pe && pe.count > 0;
						if ((!$e && !ye) || ($e && ye && this.b.equal(pe))) return;
						if (($e !== ye && this.s(ye), !ye)) {
							(this.b = void 0), (this.c = []), this.d.clear();
							return;
						}
						const ue = pe.stickyNodes[pe.count - 1];
						if (this.b && pe.animationStateChanged(this.b))
							this.c[this.b.count - 1].style.top = `${ue.position}px`;
						else {
							this.d.clear();
							const fe = Array(pe.count);
							for (let me = pe.count - 1; me >= 0; me--) {
								const ve = pe.stickyNodes[me],
									{ element: ge, disposable: be } = this.p(ve, me, pe.count);
								(fe[me] = ge), this.a.appendChild(ge), this.d.add(be);
							}
							this.f.updateElements(fe, pe), (this.c = fe);
						}
						(this.b = pe),
							(this.a.style.height = `${ue.position + ue.height}px`);
					}
					p(pe, $e, ye) {
						const ue = pe.startIndex,
							fe = document.createElement("div");
						(fe.style.top = `${pe.position}px`),
							this.j.options.setRowHeight !== !1 &&
								(fe.style.height = `${pe.height}px`),
							this.j.options.setRowLineHeight !== !1 &&
								(fe.style.lineHeight = `${pe.height}px`),
							fe.classList.add("monaco-tree-sticky-row"),
							fe.classList.add("monaco-list-row"),
							fe.setAttribute("data-index", `${ue}`),
							fe.setAttribute("data-parity", ue % 2 === 0 ? "even" : "odd"),
							fe.setAttribute("id", this.g.getElementID(ue));
						const me = this.q(fe, pe.node.element, $e, ye),
							ve = this.m.getTemplateId(pe.node),
							ge = this.k.find((Fe) => Fe.templateId === ve);
						if (!ge) throw new Error(`No renderer found for template id ${ve}`);
						let be = pe.node;
						be === this.j.getNode(this.j.getNodeLocation(pe.node)) &&
							(be = new Proxy(pe.node, {}));
						const Ce = ge.renderTemplate(fe);
						ge.renderElement(be, pe.startIndex, Ce, pe.height);
						const Le = (0, y.$Yc)(() => {
							me.dispose(),
								ge.disposeElement(be, pe.startIndex, Ce, pe.height),
								ge.disposeTemplate(Ce),
								fe.remove();
						});
						return { element: fe, disposable: Le };
					}
					q(pe, $e, ye, ue) {
						if (!this.o) return y.$1c.None;
						this.o.getSetSize &&
							pe.setAttribute(
								"aria-setsize",
								String(this.o.getSetSize($e, ye, ue)),
							),
							this.o.getPosInSet &&
								pe.setAttribute(
									"aria-posinset",
									String(this.o.getPosInSet($e, ye)),
								),
							this.o.getRole &&
								pe.setAttribute("role", this.o.getRole($e) ?? "treeitem");
						const fe = this.o.getAriaLabel($e),
							me =
								fe && typeof fe != "string" ? fe : (0, T.constObservable)(fe),
							ve = (0, T.autorun)((be) => {
								const Ce = be.readObservable(me);
								Ce
									? pe.setAttribute("aria-label", Ce)
									: pe.removeAttribute("aria-label");
							});
						typeof fe == "string" ||
							(fe && pe.setAttribute("aria-label", fe.get()));
						const ge = this.o.getAriaLevel && this.o.getAriaLevel($e);
						return (
							typeof ge == "number" && pe.setAttribute("aria-level", `${ge}`),
							pe.setAttribute("aria-selected", String(!1)),
							ve
						);
					}
					s(pe) {
						this.a.classList.toggle("empty", !pe),
							pe || this.f.updateElements([], void 0);
					}
					getFocus() {
						return this.f.getFocus();
					}
					domFocus() {
						this.f.domFocus();
					}
					focusedLast() {
						return this.f.focusedLast();
					}
					dispose() {
						this.f.dispose(), this.d.dispose(), this.a.remove();
					}
				}
				class ne extends y.$1c {
					get m() {
						return this.j;
					}
					set m(pe) {
						pe !== this.j && (this.f.fire(pe), (this.j = pe));
					}
					constructor(pe, $e) {
						super(),
							(this.q = pe),
							(this.s = $e),
							(this.a = -1),
							(this.b = []),
							(this.f = new b.$re()),
							(this.onDidChangeHasFocus = this.f.event),
							(this.g = new b.$re()),
							(this.onContextMenu = this.g.event),
							(this.j = !1),
							this.D((0, t.$0fb)(this.q, "focus", () => this.M())),
							this.D((0, t.$0fb)(this.q, "blur", () => this.O())),
							this.D(this.s.onDidFocus(() => this.L(!1))),
							this.D(this.s.onKeyDown((ye) => this.u(ye))),
							this.D(this.s.onMouseDown((ye) => this.w(ye))),
							this.D(this.s.onContextMenu((ye) => this.t(ye)));
					}
					t(pe) {
						const $e = pe.browserEvent.target;
						if (!(0, r.$Jib)($e) && !(0, r.$Iib)($e)) {
							this.focusedLast() && this.s.domFocus();
							return;
						}
						if (!(0, t.$8gb)(pe.browserEvent)) {
							if (!this.c)
								throw new Error(
									"Context menu should not be triggered when state is undefined",
								);
							const me = this.c.stickyNodes.findIndex(
								(ve) => ve.node.element === pe.element?.element,
							);
							if (me === -1)
								throw new Error(
									"Context menu should not be triggered when element is not in sticky scroll widget",
								);
							this.q.focus(), this.F(me);
							return;
						}
						if (!this.c || this.a < 0)
							throw new Error(
								"Context menu key should not be triggered when focus is not in sticky scroll widget",
							);
						const ue = this.c.stickyNodes[this.a].node.element,
							fe = this.b[this.a];
						this.g.fire({
							element: ue,
							anchor: fe,
							browserEvent: pe.browserEvent,
							isStickyScroll: !0,
						});
					}
					u(pe) {
						if (this.m && this.c) {
							if (pe.key === "ArrowUp")
								this.y(Math.max(0, this.a - 1)),
									pe.preventDefault(),
									pe.stopPropagation();
							else if (pe.key === "ArrowDown" || pe.key === "ArrowRight") {
								if (this.a >= this.c.count - 1) {
									const $e =
										this.c.stickyNodes[this.c.count - 1].startIndex + 1;
									this.s.domFocus(), this.s.setFocus([$e]), this.z($e, this.c);
								} else this.y(this.a + 1);
								pe.preventDefault(), pe.stopPropagation();
							}
						}
					}
					w(pe) {
						const $e = pe.browserEvent.target;
						(!(0, r.$Jib)($e) && !(0, r.$Iib)($e)) ||
							(pe.browserEvent.preventDefault(),
							pe.browserEvent.stopPropagation());
					}
					updateElements(pe, $e) {
						if ($e && $e.count === 0)
							throw new Error(
								"Sticky scroll state must be undefined when there are no sticky nodes",
							);
						if ($e && $e.count !== pe.length)
							throw new Error("Sticky scroll focus received illigel state");
						const ye = this.a;
						if ((this.C(), (this.b = pe), (this.c = $e), $e)) {
							const ue = (0, $.$Zm)(ye, 0, $e.count - 1);
							this.F(ue);
						} else this.m && this.s.domFocus();
						this.q.tabIndex = $e ? 0 : -1;
					}
					y(pe) {
						const $e = this.c;
						if (!$e)
							throw new Error("Cannot set focus when state is undefined");
						if (
							(this.F(pe),
							!(pe < $e.count - 1) && $e.lastNodePartiallyVisible())
						) {
							const ye = $e.stickyNodes[pe];
							this.z(ye.endIndex + 1, $e);
						}
					}
					z(pe, $e) {
						const ye = $e.stickyNodes[$e.count - 1],
							ue = $e.count > 1 ? $e.stickyNodes[$e.count - 2] : void 0,
							fe = this.s.getElementTop(pe),
							me = ue ? ue.position + ue.height + ye.height : ye.height;
						this.s.scrollTop = fe - me;
					}
					getFocus() {
						if (!(!this.c || this.a === -1))
							return this.c.stickyNodes[this.a].node.element;
					}
					domFocus() {
						if (!this.c)
							throw new Error("Cannot focus when state is undefined");
						this.q.focus();
					}
					focusedLast() {
						return this.c
							? this.s
									.getHTMLElement()
									.classList.contains("sticky-scroll-focused")
							: !1;
					}
					C() {
						this.a !== -1 && (this.G(this.b[this.a], !1), (this.a = -1));
					}
					F(pe) {
						if (0 > pe) throw new Error("addFocus() can not remove focus");
						if (!this.c && pe >= 0)
							throw new Error("Cannot set focus index when state is undefined");
						if (this.c && pe >= this.c.count)
							throw new Error(
								"Cannot set focus index to an index that does not exist",
							);
						const $e = this.a;
						$e >= 0 && this.G(this.b[$e], !1),
							pe >= 0 && this.G(this.b[pe], !0),
							(this.a = pe);
					}
					G(pe, $e) {
						this.I(pe, $e && this.m), this.J(pe, $e);
					}
					H(pe) {
						this.a !== -1 && this.I(this.b[this.a], pe);
					}
					I(pe, $e) {
						pe.classList.toggle("focused", $e);
					}
					J(pe, $e) {
						pe.classList.toggle("passive-focused", $e);
					}
					L(pe) {
						this.s
							.getHTMLElement()
							.classList.toggle("sticky-scroll-focused", pe);
					}
					M() {
						if (!this.c || this.b.length === 0)
							throw new Error(
								"Cannot focus when state is undefined or elements are empty",
							);
						(this.m = !0), this.L(!0), this.H(!0), this.a === -1 && this.F(0);
					}
					O() {
						(this.m = !1), this.H(!1);
					}
					dispose() {
						this.L(!1), this.f.fire(!1), super.dispose();
					}
				}
				function ee(ae) {
					let pe = h.TreeMouseEventTarget.Unknown;
					return (
						(0, t.$Fgb)(
							ae.browserEvent.target,
							"monaco-tl-twistie",
							"monaco-tl-row",
						)
							? (pe = h.TreeMouseEventTarget.Twistie)
							: (0, t.$Fgb)(
										ae.browserEvent.target,
										"monaco-tl-contents",
										"monaco-tl-row",
									)
								? (pe = h.TreeMouseEventTarget.Element)
								: (0, t.$Fgb)(
										ae.browserEvent.target,
										"monaco-tree-type-filter",
										"monaco-list",
									) && (pe = h.TreeMouseEventTarget.Filter),
						{
							browserEvent: ae.browserEvent,
							element: ae.element ? ae.element.element : null,
							target: pe,
						}
					);
				}
				function _(ae) {
					const pe = (0, r.$Jib)(ae.browserEvent.target);
					return {
						element: ae.element ? ae.element.element : null,
						browserEvent: ae.browserEvent,
						anchor: ae.anchor,
						isStickyScroll: pe,
					};
				}
				function te(ae, pe) {
					pe(ae), ae.children.forEach(($e) => te($e, pe));
				}
				class Q {
					get f() {
						return this.d || (this.d = this.m()), this.d;
					}
					constructor(pe, $e) {
						(this.g = pe),
							(this.j = $e),
							(this.a = []),
							(this.c = new b.$re()),
							(this.onDidChange = this.c.event);
					}
					set(pe, $e) {
						(!$e?.__forceEvent && (0, n.$yb)(this.a, pe)) || this.k(pe, !1, $e);
					}
					k(pe, $e, ye) {
						if (
							((this.a = [...pe]), (this.b = void 0), (this.d = void 0), !$e)
						) {
							const ue = this;
							this.c.fire({
								get elements() {
									return ue.get();
								},
								browserEvent: ye,
							});
						}
					}
					get() {
						return (
							this.b || (this.b = this.a.map((pe) => pe.element)), [...this.b]
						);
					}
					getNodes() {
						return this.a;
					}
					has(pe) {
						return this.f.has(pe);
					}
					onDidModelSplice({ insertedNodes: pe, deletedNodes: $e }) {
						if (!this.j) {
							const ge = this.m(),
								be = (Ce) => ge.delete(Ce);
							$e.forEach((Ce) => te(Ce, be)), this.set([...ge.values()]);
							return;
						}
						const ye = new Set(),
							ue = (ge) => ye.add(this.j.getId(ge.element).toString());
						$e.forEach((ge) => te(ge, ue));
						const fe = new Map(),
							me = (ge) => fe.set(this.j.getId(ge.element).toString(), ge);
						pe.forEach((ge) => te(ge, me));
						const ve = [];
						for (const ge of this.a) {
							const be = this.j.getId(ge.element).toString();
							if (!ye.has(be)) ve.push(ge);
							else {
								const Le = fe.get(be);
								Le && Le.visible && ve.push(Le);
							}
						}
						if (this.a.length > 0 && ve.length === 0) {
							const ge = this.g();
							ge && ve.push(ge);
						}
						this.k(ve, !0);
					}
					m() {
						const pe = new Set();
						for (const $e of this.a) pe.add($e);
						return pe;
					}
				}
				class Z extends r.$Oib {
					constructor(pe, $e, ye) {
						super(pe), (this.x = $e), (this.y = ye);
					}
					u(pe) {
						if (
							(0, r.$Kib)(pe.browserEvent.target) ||
							(0, r.$Dib)(pe.browserEvent.target) ||
							(0, r.$Eib)(pe.browserEvent.target) ||
							pe.browserEvent.isHandledByList
						)
							return;
						const $e = pe.element;
						if (!$e) return super.u(pe);
						if (this.p(pe) || this.o(pe)) return super.u(pe);
						const ye = pe.browserEvent.target,
							ue =
								ye.classList.contains("monaco-tl-twistie") ||
								(ye.classList.contains("monaco-icon-label") &&
									ye.classList.contains("folder-icon") &&
									pe.browserEvent.offsetX < 16),
							fe = (0, r.$Iib)(pe.browserEvent.target);
						let me = !1;
						if (
							(fe
								? (me = !0)
								: typeof this.x.expandOnlyOnTwistieClick == "function"
									? (me = this.x.expandOnlyOnTwistieClick($e.element))
									: (me = !!this.x.expandOnlyOnTwistieClick),
							fe)
						)
							this.A(pe, $e);
						else {
							if (me && !ue && pe.browserEvent.detail !== 2) return super.u(pe);
							if (!this.x.expandOnDoubleClick && pe.browserEvent.detail === 2)
								return super.u(pe);
						}
						if ($e.collapsible && (!fe || ue)) {
							const ve = this.x.getNodeLocation($e),
								ge = pe.browserEvent.altKey;
							if ((this.x.setFocus([ve]), this.x.toggleCollapsed(ve, ge), ue)) {
								pe.browserEvent.isHandledByList = !0;
								return;
							}
						}
						fe || super.u(pe);
					}
					A(pe, $e) {
						if (
							(0, r.$Fib)(pe.browserEvent.target) ||
							(0, r.$Gib)(pe.browserEvent.target)
						)
							return;
						const ye = this.y();
						if (!ye) throw new Error("Sticky scroll controller not found");
						const ue = this.k.indexOf($e),
							fe = this.k.getElementTop(ue),
							me = ye.nodePositionTopBelowWidget($e);
						(this.x.scrollTop = fe - me),
							this.k.domFocus(),
							this.k.setFocus([ue]),
							this.k.setSelection([ue]);
					}
					v(pe) {
						pe.browserEvent.target.classList.contains("monaco-tl-twistie") ||
							!this.x.expandOnDoubleClick ||
							pe.browserEvent.isHandledByList ||
							super.v(pe);
					}
					s(pe) {
						const $e = pe.browserEvent.target;
						if (!(0, r.$Jib)($e) && !(0, r.$Iib)($e)) {
							super.s(pe);
							return;
						}
					}
					t(pe) {
						const $e = pe.browserEvent.target;
						if (!(0, r.$Jib)($e) && !(0, r.$Iib)($e)) {
							super.t(pe);
							return;
						}
					}
				}
				class se extends r.List {
					constructor(pe, $e, ye, ue, fe, me, ve, ge) {
						super(pe, $e, ye, ue, ge),
							(this.p = fe),
							(this.s = me),
							(this.K = ve);
					}
					D(pe) {
						return new Z(this, pe.tree, pe.stickyScrollProvider);
					}
					splice(pe, $e, ye = []) {
						if ((super.splice(pe, $e, ye), ye.length === 0)) return;
						const ue = [],
							fe = [];
						let me;
						ye.forEach((ve, ge) => {
							this.p.has(ve) && ue.push(pe + ge),
								this.s.has(ve) && fe.push(pe + ge),
								this.K.has(ve) && (me = pe + ge);
						}),
							ue.length > 0 &&
								super.setFocus((0, n.$Qb)([...super.getFocus(), ...ue])),
							fe.length > 0 &&
								super.setSelection(
									(0, n.$Qb)([...super.getSelection(), ...fe]),
								),
							typeof me == "number" && super.setAnchor(me);
					}
					setFocus(pe, $e, ye = !1) {
						super.setFocus(pe, $e),
							ye ||
								this.p.set(
									pe.map((ue) => this.element(ue)),
									$e,
								);
					}
					setSelection(pe, $e, ye = !1) {
						super.setSelection(pe, $e),
							ye ||
								this.s.set(
									pe.map((ue) => this.element(ue)),
									$e,
								);
					}
					setAnchor(pe, $e = !1) {
						super.setAnchor(pe),
							$e ||
								(typeof pe > "u"
									? this.K.set([])
									: this.K.set([this.element(pe)]));
					}
				}
				var re;
				(function (ae) {
					(ae[(ae.Tree = 0)] = "Tree"),
						(ae[(ae.StickyScroll = 1)] = "StickyScroll");
				})(re || (e.AbstractTreePart = re = {}));
				class le {
					get onDidScroll() {
						return this.j.onDidScroll;
					}
					get onDidChangeFocus() {
						return this.y.wrapEvent(this.q.onDidChange);
					}
					get onDidChangeSelection() {
						return this.y.wrapEvent(this.w.onDidChange);
					}
					get onMouseClick() {
						return b.Event.map(this.j.onMouseClick, ee);
					}
					get onMouseDblClick() {
						return b.Event.filter(
							b.Event.map(this.j.onMouseDblClick, ee),
							(pe) => pe.target !== h.TreeMouseEventTarget.Filter,
						);
					}
					get onMouseOver() {
						return b.Event.map(this.j.onMouseOver, ee);
					}
					get onMouseOut() {
						return b.Event.map(this.j.onMouseOut, ee);
					}
					get onContextMenu() {
						return b.Event.any(
							b.Event.filter(
								b.Event.map(this.j.onContextMenu, _),
								(pe) => !pe.isStickyScroll,
							),
							this.B?.onContextMenu ?? b.Event.None,
						);
					}
					get onTap() {
						return b.Event.map(this.j.onTap, ee);
					}
					get onPointer() {
						return b.Event.map(this.j.onPointer, ee);
					}
					get onKeyDown() {
						return this.j.onKeyDown;
					}
					get onKeyUp() {
						return this.j.onKeyUp;
					}
					get onKeyPress() {
						return this.j.onKeyPress;
					}
					get onDidFocus() {
						return this.j.onDidFocus;
					}
					get onDidBlur() {
						return this.j.onDidBlur;
					}
					get onDidChangeModel() {
						return b.Event.signal(this.o.onDidSplice);
					}
					get onDidChangeCollapseState() {
						return this.o.onDidChangeCollapseState;
					}
					get onDidChangeRenderNodeCount() {
						return this.o.onDidChangeRenderNodeCount;
					}
					get findMode() {
						return this.z?.mode ?? H.Highlight;
					}
					set findMode(pe) {
						this.z && (this.z.mode = pe);
					}
					get findMatchType() {
						return this.z?.matchType ?? q.Fuzzy;
					}
					set findMatchType(pe) {
						this.z && (this.z.matchType = pe);
					}
					get onDidChangeFindPattern() {
						return this.z ? this.z.onDidChangePattern : b.Event.None;
					}
					get expandOnDoubleClick() {
						return typeof this.H.expandOnDoubleClick > "u"
							? !0
							: this.H.expandOnDoubleClick;
					}
					get expandOnlyOnTwistieClick() {
						return typeof this.H.expandOnlyOnTwistieClick > "u"
							? !0
							: this.H.expandOnlyOnTwistieClick;
					}
					get onDidDispose() {
						return this.j.onDidDispose;
					}
					constructor(pe, $e, ye, ue, fe = {}) {
						(this.G = pe),
							(this.H = fe),
							(this.y = new b.$ze()),
							(this.onDidChangeFindOpenState = b.Event.None),
							(this.onDidChangeStickyScrollFocused = b.Event.None),
							(this.D = new y.$Zc()),
							(this.E = new b.$re()),
							(this.onWillRefilter = this.E.event),
							(this.F = new b.$re()),
							(this.onDidUpdateOptions = this.F.event),
							(this.p = new N(ye));
						const me = new b.$Ae(),
							ve = new b.$Ae(),
							ge = this.D.add(new O(ve.event)),
							be = new f.$Nc();
						this.k = ue.map(
							(xe) => new B(xe, () => this.o, me.event, ge, be, fe),
						);
						for (const xe of this.k) this.D.add(xe);
						let Ce;
						fe.keyboardNavigationLabelProvider &&
							((Ce = new U(
								this,
								fe.keyboardNavigationLabelProvider,
								fe.filter,
							)),
							(fe = { ...fe, filter: Ce }),
							this.D.add(Ce)),
							(this.q = new Q(
								() => this.j.getFocusedElements()[0],
								fe.identityProvider,
							)),
							(this.w = new Q(
								() => this.j.getSelectedElements()[0],
								fe.identityProvider,
							)),
							(this.x = new Q(
								() => this.j.getAnchorElement(),
								fe.identityProvider,
							)),
							(this.j = new se(pe, $e, this.p, this.k, this.q, this.w, this.x, {
								...M(() => this.o, fe),
								tree: this,
								stickyScrollProvider: () => this.B,
							})),
							(this.o = this.M(pe, this.j, fe)),
							(me.input = this.o.onDidChangeCollapseState);
						const Le = b.Event.forEach(
							this.o.onDidSplice,
							(xe) => {
								this.y.bufferEvents(() => {
									this.q.onDidModelSplice(xe), this.w.onDidModelSplice(xe);
								});
							},
							this.D,
						);
						Le(() => null, null, this.D);
						const Fe = this.D.add(new b.$re()),
							Oe = this.D.add(new g.$Jh(0));
						if (
							(this.D.add(
								b.Event.any(
									Le,
									this.q.onDidChange,
									this.w.onDidChange,
								)(() => {
									Oe.trigger(() => {
										const xe = new Set();
										for (const He of this.q.getNodes()) xe.add(He);
										for (const He of this.w.getNodes()) xe.add(He);
										Fe.fire([...xe.values()]);
									});
								}),
							),
							(ve.input = Fe.event),
							fe.keyboardSupport !== !1)
						) {
							const xe = b.Event.chain(this.j.onKeyDown, (He) =>
								He.filter((Ke) => !(0, r.$Dib)(Ke.target)).map(
									(Ke) => new w.$7fb(Ke),
								),
							);
							b.Event.chain(xe, (He) =>
								He.filter((Ke) => Ke.keyCode === l.KeyCode.LeftArrow),
							)(this.J, this, this.D),
								b.Event.chain(xe, (He) =>
									He.filter((Ke) => Ke.keyCode === l.KeyCode.RightArrow),
								)(this.K, this, this.D),
								b.Event.chain(xe, (He) =>
									He.filter((Ke) => Ke.keyCode === l.KeyCode.Space),
								)(this.L, this, this.D);
						}
						if (
							(fe.findWidgetEnabled ?? !0) &&
							fe.keyboardNavigationLabelProvider &&
							fe.contextViewProvider
						) {
							const xe = this.options.findWidgetStyles
								? { styles: this.options.findWidgetStyles }
								: void 0;
							(this.z = new G(
								this,
								this.o,
								this.j,
								Ce,
								fe.contextViewProvider,
								xe,
							)),
								(this.A = (He) => this.z.shouldAllowFocus(He)),
								(this.onDidChangeFindOpenState = this.z.onDidChangeOpenState),
								this.D.add(this.z),
								(this.onDidChangeFindMode = this.z.onDidChangeMode),
								(this.onDidChangeFindMatchType = this.z.onDidChangeMatchType);
						} else
							(this.onDidChangeFindMode = b.Event.None),
								(this.onDidChangeFindMatchType = b.Event.None);
						fe.enableStickyScroll &&
							((this.B = new Y(this, this.o, this.j, this.k, this.p, fe)),
							(this.onDidChangeStickyScrollFocused =
								this.B.onDidChangeHasFocus)),
							(this.C = (0, t.$Rgb)(this.j.getHTMLElement())),
							this.getHTMLElement().classList.toggle(
								"always",
								this.H.renderIndentGuides === R.Always,
							);
					}
					updateOptions(pe = {}) {
						this.H = { ...this.H, ...pe };
						for (const $e of this.k) $e.updateOptions(pe);
						this.j.updateOptions(this.H),
							this.z?.updateOptions(pe),
							this.I(pe),
							this.F.fire(this.H),
							this.getHTMLElement().classList.toggle(
								"always",
								this.H.renderIndentGuides === R.Always,
							);
					}
					get options() {
						return this.H;
					}
					I(pe) {
						!this.B && this.H.enableStickyScroll
							? ((this.B = new Y(this, this.o, this.j, this.k, this.p, this.H)),
								(this.onDidChangeStickyScrollFocused =
									this.B.onDidChangeHasFocus))
							: this.B &&
								!this.H.enableStickyScroll &&
								((this.onDidChangeStickyScrollFocused = b.Event.None),
								this.B.dispose(),
								(this.B = void 0)),
							this.B?.updateOptions(pe);
					}
					updateWidth(pe) {
						const $e = this.o.getListIndex(pe);
						$e !== -1 && this.j.updateWidth($e);
					}
					getHTMLElement() {
						return this.j.getHTMLElement();
					}
					get contentHeight() {
						return this.j.contentHeight;
					}
					get contentWidth() {
						return this.j.contentWidth;
					}
					get onDidChangeContentHeight() {
						return this.j.onDidChangeContentHeight;
					}
					get onDidChangeContentWidth() {
						return this.j.onDidChangeContentWidth;
					}
					get scrollTop() {
						return this.j.scrollTop;
					}
					set scrollTop(pe) {
						this.j.scrollTop = pe;
					}
					get scrollLeft() {
						return this.j.scrollLeft;
					}
					set scrollLeft(pe) {
						this.j.scrollLeft = pe;
					}
					get scrollHeight() {
						return this.j.scrollHeight;
					}
					get renderHeight() {
						return this.j.renderHeight;
					}
					get firstVisibleElement() {
						let pe = this.j.firstVisibleIndex;
						return (
							this.B && (pe += this.B.count),
							pe < 0 || pe >= this.j.length
								? void 0
								: this.j.element(pe).element
						);
					}
					get lastVisibleElement() {
						const pe = this.j.lastVisibleIndex;
						return this.j.element(pe).element;
					}
					get ariaLabel() {
						return this.j.ariaLabel;
					}
					set ariaLabel(pe) {
						this.j.ariaLabel = pe;
					}
					get selectionSize() {
						return this.w.getNodes().length;
					}
					domFocus() {
						this.B?.focusedLast() ? this.B.domFocus() : this.j.domFocus();
					}
					isDOMFocused() {
						return (0, t.$Kgb)(this.getHTMLElement());
					}
					layout(pe, $e) {
						this.j.layout(pe, $e), (0, v.$pg)($e) && this.z?.layout($e);
					}
					style(pe) {
						const $e = `.${this.j.domId}`,
							ye = [];
						pe.treeIndentGuidesStroke &&
							(ye.push(
								`.monaco-list${$e}:hover .monaco-tl-indent > .indent-guide, .monaco-list${$e}.always .monaco-tl-indent > .indent-guide  { border-color: ${pe.treeInactiveIndentGuidesStroke}; }`,
							),
							ye.push(
								`.monaco-list${$e} .monaco-tl-indent > .indent-guide.active { border-color: ${pe.treeIndentGuidesStroke}; }`,
							));
						const ue = pe.treeStickyScrollBackground ?? pe.listBackground;
						ue &&
							(ye.push(
								`.monaco-list${$e} .monaco-scrollable-element .monaco-tree-sticky-container { background-color: ${ue}; }`,
							),
							ye.push(
								`.monaco-list${$e} .monaco-scrollable-element .monaco-tree-sticky-container .monaco-tree-sticky-row { background-color: ${ue}; }`,
							)),
							pe.treeStickyScrollBorder &&
								ye.push(
									`.monaco-list${$e} .monaco-scrollable-element .monaco-tree-sticky-container { border-bottom: 1px solid ${pe.treeStickyScrollBorder}; }`,
								),
							pe.treeStickyScrollShadow &&
								ye.push(
									`.monaco-list${$e} .monaco-scrollable-element .monaco-tree-sticky-container .monaco-tree-sticky-container-shadow { box-shadow: ${pe.treeStickyScrollShadow} 0 6px 6px -6px inset; height: 3px; }`,
								),
							pe.listFocusForeground &&
								(ye.push(
									`.monaco-list${$e}.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container:focus .monaco-list-row.focused { color: ${pe.listFocusForeground}; }`,
								),
								ye.push(
									`.monaco-list${$e}:not(.sticky-scroll-focused) .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.focused { color: inherit; }`,
								));
						const fe = (0, t.$xhb)(
							pe.listFocusAndSelectionOutline,
							(0, t.$xhb)(pe.listSelectionOutline, pe.listFocusOutline ?? ""),
						);
						fe &&
							(ye.push(
								`.monaco-list${$e}.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container:focus .monaco-list-row.focused.selected { outline: 1px solid ${fe}; outline-offset: -1px;}`,
							),
							ye.push(
								`.monaco-list${$e}:not(.sticky-scroll-focused) .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.focused.selected { outline: inherit;}`,
							)),
							pe.listFocusOutline &&
								(ye.push(
									`.monaco-list${$e}.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container:focus .monaco-list-row.focused { outline: 1px solid ${pe.listFocusOutline}; outline-offset: -1px; }`,
								),
								ye.push(
									`.monaco-list${$e}:not(.sticky-scroll-focused) .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.focused { outline: inherit; }`,
								),
								ye.push(
									`.monaco-workbench.context-menu-visible .monaco-list${$e}.last-focused.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.passive-focused { outline: 1px solid ${pe.listFocusOutline}; outline-offset: -1px; }`,
								),
								ye.push(
									`.monaco-workbench.context-menu-visible .monaco-list${$e}.last-focused.sticky-scroll-focused .monaco-list-rows .monaco-list-row.focused { outline: inherit; }`,
								),
								ye.push(
									`.monaco-workbench.context-menu-visible .monaco-list${$e}.last-focused:not(.sticky-scroll-focused) .monaco-tree-sticky-container .monaco-list-rows .monaco-list-row.focused { outline: inherit; }`,
								)),
							(this.C.textContent = ye.join(`
`)),
							this.j.style(pe);
					}
					getParentElement(pe) {
						const $e = this.o.getParentNodeLocation(pe);
						return this.o.getNode($e).element;
					}
					getFirstElementChild(pe) {
						return this.o.getFirstElementChild(pe);
					}
					getNode(pe) {
						return this.o.getNode(pe);
					}
					getNodeLocation(pe) {
						return this.o.getNodeLocation(pe);
					}
					collapse(pe, $e = !1) {
						return this.o.setCollapsed(pe, !0, $e);
					}
					expand(pe, $e = !1) {
						return this.o.setCollapsed(pe, !1, $e);
					}
					toggleCollapsed(pe, $e = !1) {
						return this.o.setCollapsed(pe, void 0, $e);
					}
					expandAll() {
						this.o.setCollapsed(this.o.rootRef, !1, !0);
					}
					collapseAll() {
						this.o.setCollapsed(this.o.rootRef, !0, !0);
					}
					isCollapsible(pe) {
						return this.o.isCollapsible(pe);
					}
					setCollapsible(pe, $e) {
						return this.o.setCollapsible(pe, $e);
					}
					isCollapsed(pe) {
						return this.o.isCollapsed(pe);
					}
					expandTo(pe) {
						this.o.expandTo(pe);
					}
					triggerTypeNavigation() {
						this.j.triggerTypeNavigation();
					}
					openFind() {
						this.z?.open();
					}
					closeFind() {
						this.z?.close();
					}
					refilter() {
						this.E.fire(void 0), this.o.refilter();
					}
					setAnchor(pe) {
						if (typeof pe > "u") return this.j.setAnchor(void 0);
						this.y.bufferEvents(() => {
							const $e = this.o.getNode(pe);
							this.x.set([$e]);
							const ye = this.o.getListIndex(pe);
							ye > -1 && this.j.setAnchor(ye, !0);
						});
					}
					getAnchor() {
						return (0, n.$Sb)(this.x.get(), void 0);
					}
					setSelection(pe, $e) {
						this.y.bufferEvents(() => {
							const ye = pe.map((fe) => this.o.getNode(fe));
							this.w.set(ye, $e);
							const ue = pe
								.map((fe) => this.o.getListIndex(fe))
								.filter((fe) => fe > -1);
							this.j.setSelection(ue, $e, !0);
						});
					}
					getSelection() {
						return this.w.get();
					}
					setFocus(pe, $e) {
						this.y.bufferEvents(() => {
							const ye = pe.map((fe) => this.o.getNode(fe));
							this.q.set(ye, $e);
							const ue = pe
								.map((fe) => this.o.getListIndex(fe))
								.filter((fe) => fe > -1);
							this.j.setFocus(ue, $e, !0);
						});
					}
					focusNext(
						pe = 1,
						$e = !1,
						ye,
						ue = (0, t.$8gb)(ye) && ye.altKey ? void 0 : this.A,
					) {
						this.j.focusNext(pe, $e, ye, ue);
					}
					focusPrevious(
						pe = 1,
						$e = !1,
						ye,
						ue = (0, t.$8gb)(ye) && ye.altKey ? void 0 : this.A,
					) {
						this.j.focusPrevious(pe, $e, ye, ue);
					}
					focusNextPage(
						pe,
						$e = (0, t.$8gb)(pe) && pe.altKey ? void 0 : this.A,
					) {
						return this.j.focusNextPage(pe, $e);
					}
					focusPreviousPage(
						pe,
						$e = (0, t.$8gb)(pe) && pe.altKey ? void 0 : this.A,
					) {
						return this.j.focusPreviousPage(pe, $e, () => this.B?.height ?? 0);
					}
					focusLast(pe, $e = (0, t.$8gb)(pe) && pe.altKey ? void 0 : this.A) {
						this.j.focusLast(pe, $e);
					}
					focusFirst(pe, $e = (0, t.$8gb)(pe) && pe.altKey ? void 0 : this.A) {
						this.j.focusFirst(pe, $e);
					}
					getFocus() {
						return this.q.get();
					}
					getStickyScrollFocus() {
						const pe = this.B?.getFocus();
						return pe !== void 0 ? [pe] : [];
					}
					getFocusedPart() {
						return this.B?.focusedLast() ? re.StickyScroll : re.Tree;
					}
					reveal(pe, $e) {
						this.o.expandTo(pe);
						const ye = this.o.getListIndex(pe);
						if (ye !== -1)
							if (!this.B) this.j.reveal(ye, $e);
							else {
								const ue = this.B.nodePositionTopBelowWidget(this.getNode(pe));
								this.j.reveal(ye, $e, ue);
							}
					}
					getRelativeTop(pe) {
						const $e = this.o.getListIndex(pe);
						if ($e === -1) return null;
						const ye = this.B?.getNode(this.getNode(pe));
						return this.j.getRelativeTop($e, ye?.position ?? this.B?.height);
					}
					getViewState(pe = this.options.identityProvider) {
						if (!pe)
							throw new h.$mpb(
								this.G,
								"Can't get tree view state without an identity provider",
							);
						const $e = (me) => pe.getId(me).toString(),
							ye = A.empty(this.scrollTop);
						for (const me of this.getFocus()) ye.focus.add($e(me));
						for (const me of this.getSelection()) ye.selection.add($e(me));
						const ue = this.o.getNode(),
							fe = [ue];
						for (; fe.length > 0; ) {
							const me = fe.shift();
							me !== ue &&
								me.collapsible &&
								(ye.expanded[$e(me.element)] = me.collapsed ? 0 : 1),
								fe.push(...me.children);
						}
						return ye;
					}
					J(pe) {
						pe.preventDefault(), pe.stopPropagation();
						const $e = this.j.getFocusedElements();
						if ($e.length === 0) return;
						const ye = $e[0],
							ue = this.o.getNodeLocation(ye);
						if (!this.o.setCollapsed(ue, !0)) {
							const me = this.o.getParentNodeLocation(ue);
							if (!me) return;
							const ve = this.o.getListIndex(me);
							this.j.reveal(ve), this.j.setFocus([ve]);
						}
					}
					K(pe) {
						pe.preventDefault(), pe.stopPropagation();
						const $e = this.j.getFocusedElements();
						if ($e.length === 0) return;
						const ye = $e[0],
							ue = this.o.getNodeLocation(ye);
						if (!this.o.setCollapsed(ue, !1)) {
							if (!ye.children.some((ge) => ge.visible)) return;
							const [me] = this.j.getFocus(),
								ve = me + 1;
							this.j.reveal(ve), this.j.setFocus([ve]);
						}
					}
					L(pe) {
						pe.preventDefault(), pe.stopPropagation();
						const $e = this.j.getFocusedElements();
						if ($e.length === 0) return;
						const ye = $e[0],
							ue = this.o.getNodeLocation(ye),
							fe = pe.browserEvent.altKey;
						this.o.setCollapsed(ue, void 0, fe);
					}
					navigate(pe) {
						return new oe(this.j, this.o, pe);
					}
					dispose() {
						(0, y.$Vc)(this.D), this.B?.dispose(), this.j.dispose();
					}
				}
				e.$wpb = le;
				class oe {
					constructor(pe, $e, ye) {
						(this.b = pe),
							(this.c = $e),
							ye ? (this.a = this.c.getListIndex(ye)) : (this.a = -1);
					}
					current() {
						return this.a < 0 || this.a >= this.b.length
							? null
							: this.b.element(this.a).element;
					}
					previous() {
						return this.a--, this.current();
					}
					next() {
						return this.a++, this.current();
					}
					first() {
						return (this.a = 0), this.current();
					}
					last() {
						return (this.a = this.b.length - 1), this.current();
					}
				}
			},
		),
		define(
			de[1582],
			he([1, 0, 411, 931, 264, 103]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Hpb = void 0);
				class C extends t.$wpb {
					constructor(m, r, u, a, h, c = {}) {
						super(m, r, u, a, c),
							(this.f = m),
							(this.g = h),
							(this.d = new Map()),
							(this.c = c.identityProvider);
					}
					getInput() {
						return this.b;
					}
					setInput(m, r) {
						if (r && !this.c)
							throw new w.$mpb(
								this.f,
								"Can't restore tree view state without an identity provider",
							);
						if (((this.b = m), !m)) {
							this.d.clear(), this.o.setChildren(null, E.Iterable.empty());
							return;
						}
						if (!r) {
							this.m(m);
							return;
						}
						const u = [],
							a = [],
							h = (n) => {
								const g = this.c.getId(n).toString();
								return !r.expanded[g];
							},
							c = (n) => {
								const g = this.c.getId(n.element).toString();
								r.focus.has(g) && u.push(n.element),
									r.selection.has(g) && a.push(n.element);
							};
						this.m(m, h, c),
							this.setFocus(u),
							this.setSelection(a),
							r &&
								typeof r.scrollTop == "number" &&
								(this.scrollTop = r.scrollTop);
					}
					updateChildren(m = this.b) {
						if (typeof this.b > "u")
							throw new w.$mpb(this.f, "Tree input not set");
						let r;
						this.c &&
							(r = (u) => {
								const a = this.c.getId(u).toString(),
									h = this.d.get(a);
								if (h) return h.collapsed;
							}),
							this.m(m, r);
					}
					resort(m = this.b, r = !0) {
						this.o.resort(m === this.b ? null : m, r);
					}
					refresh(m) {
						if (m === void 0) {
							this.j.rerender();
							return;
						}
						this.o.rerender(m);
					}
					m(m, r, u) {
						let a;
						if (this.c) {
							const h = new Set(),
								c = u;
							(u = (n) => {
								const g = this.c.getId(n.element).toString();
								h.add(g), this.d.set(g, n), c?.(n);
							}),
								(a = (n) => {
									const g = this.c.getId(n.element).toString();
									h.has(g) || this.d.delete(g);
								});
						}
						this.o.setChildren(m === this.b ? null : m, this.s(m, r).elements, {
							onDidCreateNode: u,
							onDidDeleteNode: a,
						});
					}
					s(m, r) {
						const u = [...this.g.getChildren(m)];
						return {
							elements: E.Iterable.map(u, (h) => {
								const { elements: c, size: n } = this.s(h, r),
									g = this.g.hasChildren ? this.g.hasChildren(h) : void 0,
									p = n === 0 ? void 0 : r && r(h);
								return {
									element: h,
									children: c,
									collapsible: g,
									collapsed: p,
								};
							}),
							size: u.length,
						};
					}
					M(m, r, u) {
						return new i.$xpb(m, r, u);
					}
				}
				e.$Hpb = C;
			},
		),
		define(
			de[1169],
			he([1, 0, 411, 2678, 931, 138, 103]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Epb = e.$Dpb = void 0);
				class d extends t.$wpb {
					get onDidChangeCollapseState() {
						return this.o.onDidChangeCollapseState;
					}
					constructor(c, n, g, p, o = {}) {
						super(c, n, g, p, o), (this.P = c);
					}
					setChildren(c, n = C.Iterable.empty(), g) {
						this.o.setChildren(c, n, g);
					}
					rerender(c) {
						if (c === void 0) {
							this.j.rerender();
							return;
						}
						this.o.rerender(c);
					}
					updateElementHeight(c, n) {
						this.o.updateElementHeight(c, n);
					}
					resort(c, n = !0) {
						this.o.resort(c, n);
					}
					hasElement(c) {
						return this.o.has(c);
					}
					M(c, n, g) {
						return new w.$xpb(c, n, g);
					}
				}
				e.$Dpb = d;
				class m {
					get a() {
						return this.b();
					}
					constructor(c, n, g) {
						(this.b = c),
							(this.c = n),
							(this.d = g),
							(this.templateId = g.templateId),
							g.onDidChangeTwistieState &&
								(this.onDidChangeTwistieState = g.onDidChangeTwistieState);
					}
					renderTemplate(c) {
						return {
							compressedTreeNode: void 0,
							data: this.d.renderTemplate(c),
						};
					}
					renderElement(c, n, g, p) {
						let o = this.c.getCompressedNode(c);
						o || (o = this.a.getCompressedTreeNode(c.element)),
							o.element.elements.length === 1
								? ((g.compressedTreeNode = void 0),
									this.d.renderElement(c, n, g.data, p))
								: ((g.compressedTreeNode = o),
									this.d.renderCompressedElements(o, n, g.data, p));
					}
					disposeElement(c, n, g, p) {
						g.compressedTreeNode
							? this.d.disposeCompressedElements?.(
									g.compressedTreeNode,
									n,
									g.data,
									p,
								)
							: this.d.disposeElement?.(c, n, g.data, p);
					}
					disposeTemplate(c) {
						this.d.disposeTemplate(c.data);
					}
					renderTwistie(c, n) {
						return this.d.renderTwistie ? this.d.renderTwistie(c, n) : !1;
					}
				}
				Ne([E.$ei], m.prototype, "a", null);
				class r {
					constructor(c) {
						(this.b = c), (this.a = new Map());
					}
					getCompressedNode(c) {
						return this.a.get(c);
					}
					constrainStickyScrollNodes(c, n, g) {
						if ((this.a.clear(), c.length === 0)) return [];
						for (let p = 0; p < c.length; p++) {
							const o = c[p],
								f = o.position + o.height;
							if (
								(p + 1 < c.length && f + c[p + 1].height > g) ||
								(p >= n - 1 && n < c.length)
							) {
								const s = c.slice(0, p),
									l = c.slice(p),
									y = this.c(l);
								return [...s, y];
							}
						}
						return c;
					}
					c(c) {
						if (c.length === 0)
							throw new Error("Can't compress empty sticky nodes");
						const n = this.b();
						if (!n.isCompressionEnabled()) return c[0];
						const g = [];
						for (let l = 0; l < c.length; l++) {
							const y = c[l],
								$ = n.getCompressedTreeNode(y.node.element);
							if ($.element) {
								if (l !== 0 && $.element.incompressible) break;
								g.push(...$.element.elements);
							}
						}
						if (g.length < 2) return c[0];
						const p = c[c.length - 1],
							o = { elements: g, incompressible: !1 },
							f = { ...p.node, children: [], element: o },
							b = new Proxy(c[0].node, {}),
							s = {
								node: b,
								startIndex: c[0].startIndex,
								endIndex: p.endIndex,
								position: c[0].position,
								height: c[0].height,
							};
						return this.a.set(b, f), s;
					}
				}
				function u(h, c) {
					return (
						c && {
							...c,
							keyboardNavigationLabelProvider:
								c.keyboardNavigationLabelProvider && {
									getKeyboardNavigationLabel(n) {
										let g;
										try {
											g = h().getCompressedTreeNode(n);
										} catch {
											return c.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(
												n,
											);
										}
										return g.element.elements.length === 1
											? c.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(
													n,
												)
											: c.keyboardNavigationLabelProvider.getCompressedNodeKeyboardNavigationLabel(
													g.element.elements,
												);
									},
								},
						}
					);
				}
				class a extends d {
					constructor(c, n, g, p, o = {}) {
						const f = () => this,
							b = new r(() => this.o),
							s = p.map((l) => new m(f, b, l));
						super(c, n, g, s, { ...u(f, o), stickyScrollDelegate: b });
					}
					setChildren(c, n = C.Iterable.empty(), g) {
						this.o.setChildren(c, n, g);
					}
					M(c, n, g) {
						return new i.$Cpb(c, n, g);
					}
					updateOptions(c = {}) {
						super.updateOptions(c),
							typeof c.compressionEnabled < "u" &&
								this.o.setCompressionEnabled(c.compressionEnabled);
					}
					getCompressedTreeNode(c = null) {
						return this.o.getCompressedTreeNode(c);
					}
				}
				e.$Epb = a;
			},
		),
		define(
			de[1170],
			he([1, 0, 539, 411, 1165, 1169, 264, 15, 14, 26, 29, 6, 103, 3, 28]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Gpb = e.$Fpb = void 0);
				function g(A) {
					return {
						...A,
						children: [],
						refreshPromise: void 0,
						stale: !0,
						slow: !1,
						forceExpanded: !1,
					};
				}
				function p(A, R) {
					return R.parent ? (R.parent === A ? !0 : p(A, R.parent)) : !1;
				}
				function o(A, R) {
					return A === R || p(A, R) || p(R, A);
				}
				class f {
					get element() {
						return this.a.element.element;
					}
					get children() {
						return this.a.children.map((R) => new f(R));
					}
					get depth() {
						return this.a.depth;
					}
					get visibleChildrenCount() {
						return this.a.visibleChildrenCount;
					}
					get visibleChildIndex() {
						return this.a.visibleChildIndex;
					}
					get collapsible() {
						return this.a.collapsible;
					}
					get collapsed() {
						return this.a.collapsed;
					}
					get visible() {
						return this.a.visible;
					}
					get filterData() {
						return this.a.filterData;
					}
					constructor(R) {
						this.a = R;
					}
				}
				class b {
					constructor(R, O, B) {
						(this.b = R),
							(this.d = O),
							(this.onDidChangeTwistieState = B),
							(this.a = new Map()),
							(this.templateId = R.templateId);
					}
					renderTemplate(R) {
						return { templateData: this.b.renderTemplate(R) };
					}
					renderElement(R, O, B, U) {
						this.b.renderElement(this.d.map(R), O, B.templateData, U);
					}
					renderTwistie(R, O) {
						return R.slow
							? (O.classList.add(
									...r.ThemeIcon.asClassNameArray(m.$ak.treeItemLoading),
								),
								!0)
							: (O.classList.remove(
									...r.ThemeIcon.asClassNameArray(m.$ak.treeItemLoading),
								),
								!1);
					}
					disposeElement(R, O, B, U) {
						this.b.disposeElement?.(this.d.map(R), O, B.templateData, U);
					}
					disposeTemplate(R) {
						this.b.disposeTemplate(R.templateData);
					}
					dispose() {
						this.a.clear();
					}
				}
				function s(A) {
					return {
						browserEvent: A.browserEvent,
						elements: A.elements.map((R) => R.element),
					};
				}
				function l(A) {
					return {
						browserEvent: A.browserEvent,
						element: A.element && A.element.element,
						target: A.target,
					};
				}
				function y(A) {
					return {
						browserEvent: A.browserEvent,
						element: A.element && A.element.element,
						anchor: A.anchor,
						isStickyScroll: A.isStickyScroll,
					};
				}
				class $ extends t.$wib {
					set context(R) {
						this.f.context = R;
					}
					get context() {
						return this.f.context;
					}
					constructor(R) {
						super(R.elements.map((O) => O.element)), (this.f = R);
					}
				}
				function v(A) {
					return A instanceof t.$wib ? new $(A) : A;
				}
				class S {
					constructor(R) {
						this.a = R;
					}
					getDragURI(R) {
						return this.a.getDragURI(R.element);
					}
					getDragLabel(R, O) {
						if (this.a.getDragLabel)
							return this.a.getDragLabel(
								R.map((B) => B.element),
								O,
							);
					}
					onDragStart(R, O) {
						this.a.onDragStart?.(v(R), O);
					}
					onDragOver(R, O, B, U, z, F = !0) {
						return this.a.onDragOver(v(R), O && O.element, B, U, z);
					}
					drop(R, O, B, U, z) {
						this.a.drop(v(R), O && O.element, B, U, z);
					}
					onDragEnd(R) {
						this.a.onDragEnd?.(R);
					}
					dispose() {
						this.a.dispose();
					}
				}
				function I(A) {
					return (
						A && {
							...A,
							collapseByDefault: !0,
							identityProvider: A.identityProvider && {
								getId(R) {
									return A.identityProvider.getId(R.element);
								},
							},
							dnd: A.dnd && new S(A.dnd),
							multipleSelectionController: A.multipleSelectionController && {
								isSelectionSingleChangeEvent(R) {
									return A.multipleSelectionController.isSelectionSingleChangeEvent(
										{ ...R, element: R.element },
									);
								},
								isSelectionRangeChangeEvent(R) {
									return A.multipleSelectionController.isSelectionRangeChangeEvent(
										{ ...R, element: R.element },
									);
								},
							},
							accessibilityProvider: A.accessibilityProvider && {
								...A.accessibilityProvider,
								getPosInSet: void 0,
								getSetSize: void 0,
								getRole: A.accessibilityProvider.getRole
									? (R) => A.accessibilityProvider.getRole(R.element)
									: () => "treeitem",
								isChecked: A.accessibilityProvider.isChecked
									? (R) => !!A.accessibilityProvider?.isChecked(R.element)
									: void 0,
								getAriaLabel(R) {
									return A.accessibilityProvider.getAriaLabel(R.element);
								},
								getWidgetAriaLabel() {
									return A.accessibilityProvider.getWidgetAriaLabel();
								},
								getWidgetRole: A.accessibilityProvider.getWidgetRole
									? () => A.accessibilityProvider.getWidgetRole()
									: () => "tree",
								getAriaLevel:
									A.accessibilityProvider.getAriaLevel &&
									((R) => A.accessibilityProvider.getAriaLevel(R.element)),
								getActiveDescendantId:
									A.accessibilityProvider.getActiveDescendantId &&
									((R) =>
										A.accessibilityProvider.getActiveDescendantId(R.element)),
							},
							filter: A.filter && {
								filter(R, O) {
									return A.filter.filter(R.element, O);
								},
							},
							keyboardNavigationLabelProvider:
								A.keyboardNavigationLabelProvider && {
									...A.keyboardNavigationLabelProvider,
									getKeyboardNavigationLabel(R) {
										return A.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(
											R.element,
										);
									},
								},
							sorter: void 0,
							expandOnlyOnTwistieClick:
								typeof A.expandOnlyOnTwistieClick > "u"
									? void 0
									: typeof A.expandOnlyOnTwistieClick != "function"
										? A.expandOnlyOnTwistieClick
										: (R) => A.expandOnlyOnTwistieClick(R.element),
							defaultFindVisibility: (R) =>
								R.hasChildren && R.stale
									? C.TreeVisibility.Visible
									: typeof A.defaultFindVisibility == "number"
										? A.defaultFindVisibility
										: typeof A.defaultFindVisibility > "u"
											? C.TreeVisibility.Recurse
											: A.defaultFindVisibility(R.element),
						}
					);
				}
				function T(A, R) {
					R(A), A.children.forEach((O) => T(O, R));
				}
				class P {
					get onDidScroll() {
						return this.b.onDidScroll;
					}
					get onDidChangeFocus() {
						return a.Event.map(this.b.onDidChangeFocus, s);
					}
					get onDidChangeSelection() {
						return a.Event.map(this.b.onDidChangeSelection, s);
					}
					get onKeyDown() {
						return this.b.onKeyDown;
					}
					get onMouseClick() {
						return a.Event.map(this.b.onMouseClick, l);
					}
					get onMouseDblClick() {
						return a.Event.map(this.b.onMouseDblClick, l);
					}
					get onContextMenu() {
						return a.Event.map(this.b.onContextMenu, y);
					}
					get onTap() {
						return a.Event.map(this.b.onTap, l);
					}
					get onPointer() {
						return a.Event.map(this.b.onPointer, l);
					}
					get onDidFocus() {
						return this.b.onDidFocus;
					}
					get onDidBlur() {
						return this.b.onDidBlur;
					}
					get onDidChangeModel() {
						return this.b.onDidChangeModel;
					}
					get onDidChangeCollapseState() {
						return this.b.onDidChangeCollapseState;
					}
					get onDidUpdateOptions() {
						return this.b.onDidUpdateOptions;
					}
					get onDidChangeFindOpenState() {
						return this.b.onDidChangeFindOpenState;
					}
					get onDidChangeStickyScrollFocused() {
						return this.b.onDidChangeStickyScrollFocused;
					}
					get findMode() {
						return this.b.findMode;
					}
					set findMode(R) {
						this.b.findMode = R;
					}
					get findMatchType() {
						return this.b.findMatchType;
					}
					set findMatchType(R) {
						this.b.findMatchType = R;
					}
					get expandOnlyOnTwistieClick() {
						if (typeof this.b.expandOnlyOnTwistieClick == "boolean")
							return this.b.expandOnlyOnTwistieClick;
						const R = this.b.expandOnlyOnTwistieClick;
						return (O) =>
							R(this.f.get(O === this.d.element ? null : O) || null);
					}
					get onDidDispose() {
						return this.b.onDidDispose;
					}
					constructor(R, O, B, U, z, F = {}) {
						(this.w = R),
							(this.y = z),
							(this.f = new Map()),
							(this.j = new Map()),
							(this.k = new Map()),
							(this.p = new a.$re()),
							(this.q = new a.$re()),
							(this.t = new C.$npb((x) => new f(x))),
							(this.u = new c.$Zc()),
							(this.m = F.identityProvider),
							(this.o =
								typeof F.autoExpandSingleChildren > "u"
									? !1
									: F.autoExpandSingleChildren),
							(this.g = F.sorter),
							(this.h = (x) =>
								F.collapseByDefault
									? F.collapseByDefault(x)
										? C.ObjectTreeElementCollapseState.PreserveOrCollapsed
										: C.ObjectTreeElementCollapseState.PreserveOrExpanded
									: void 0),
							(this.b = this.z(R, O, B, U, F)),
							(this.onDidChangeFindMode = this.b.onDidChangeFindMode),
							(this.onDidChangeFindMatchType = this.b.onDidChangeFindMatchType),
							(this.d = g({
								element: void 0,
								parent: null,
								hasChildren: !0,
								defaultCollapseState: void 0,
							})),
							this.m && (this.d = { ...this.d, id: null }),
							this.f.set(null, this.d),
							this.b.onDidChangeCollapseState(this.H, this, this.u);
					}
					z(R, O, B, U, z) {
						const F = new i.$rpb(B),
							x = U.map((q) => new b(q, this.t, this.q.event)),
							H = I(z) || {};
						return new E.$Dpb(R, O, F, x, H);
					}
					updateOptions(R = {}) {
						this.b.updateOptions(R);
					}
					get options() {
						return this.b.options;
					}
					getHTMLElement() {
						return this.b.getHTMLElement();
					}
					get contentHeight() {
						return this.b.contentHeight;
					}
					get contentWidth() {
						return this.b.contentWidth;
					}
					get onDidChangeContentHeight() {
						return this.b.onDidChangeContentHeight;
					}
					get onDidChangeContentWidth() {
						return this.b.onDidChangeContentWidth;
					}
					get scrollTop() {
						return this.b.scrollTop;
					}
					set scrollTop(R) {
						this.b.scrollTop = R;
					}
					get scrollLeft() {
						return this.b.scrollLeft;
					}
					set scrollLeft(R) {
						this.b.scrollLeft = R;
					}
					get scrollHeight() {
						return this.b.scrollHeight;
					}
					get renderHeight() {
						return this.b.renderHeight;
					}
					get lastVisibleElement() {
						return this.b.lastVisibleElement.element;
					}
					get ariaLabel() {
						return this.b.ariaLabel;
					}
					set ariaLabel(R) {
						this.b.ariaLabel = R;
					}
					domFocus() {
						this.b.domFocus();
					}
					layout(R, O) {
						this.b.layout(R, O);
					}
					style(R) {
						this.b.style(R);
					}
					getInput() {
						return this.d.element;
					}
					async setInput(R, O) {
						this.k.forEach((U) => U.cancel()),
							this.k.clear(),
							(this.d.element = R);
						const B = O && { viewState: O, focus: [], selection: [] };
						await this.A(R, !0, !1, B),
							B && (this.b.setFocus(B.focus), this.b.setSelection(B.selection)),
							O &&
								typeof O.scrollTop == "number" &&
								(this.scrollTop = O.scrollTop);
					}
					async updateChildren(R = this.d.element, O = !0, B = !1, U) {
						await this.A(R, O, B, void 0, U);
					}
					async A(R = this.d.element, O = !0, B = !1, U, z) {
						if (typeof this.d.element > "u")
							throw new C.$mpb(this.w, "Tree input not set");
						this.d.refreshPromise &&
							(await this.d.refreshPromise,
							await a.Event.toPromise(this.p.event));
						const F = this.B(R);
						if ((await this.C(F, O, U, z), B))
							try {
								this.b.rerender(F);
							} catch {}
					}
					resort(R = this.d.element, O = !0) {
						this.b.resort(this.B(R), O);
					}
					hasNode(R) {
						return R === this.d.element || this.f.has(R);
					}
					rerender(R) {
						if (R === void 0 || R === this.d.element) {
							this.b.rerender();
							return;
						}
						const O = this.B(R);
						this.b.rerender(O);
					}
					updateElementHeight(R, O) {
						const B = this.B(R);
						this.b.updateElementHeight(B, O);
					}
					updateWidth(R) {
						const O = this.B(R);
						this.b.updateWidth(O);
					}
					getNode(R = this.d.element) {
						const O = this.B(R),
							B = this.b.getNode(O === this.d ? null : O);
						return this.t.map(B);
					}
					collapse(R, O = !1) {
						const B = this.B(R);
						return this.b.collapse(B === this.d ? null : B, O);
					}
					async expand(R, O = !1) {
						if (typeof this.d.element > "u")
							throw new C.$mpb(this.w, "Tree input not set");
						this.d.refreshPromise &&
							(await this.d.refreshPromise,
							await a.Event.toPromise(this.p.event));
						const B = this.B(R);
						if (
							(this.b.hasElement(B) && !this.b.isCollapsible(B)) ||
							(B.refreshPromise &&
								(await this.d.refreshPromise,
								await a.Event.toPromise(this.p.event)),
							B !== this.d && !B.refreshPromise && !this.b.isCollapsed(B))
						)
							return !1;
						const U = this.b.expand(B === this.d ? null : B, O);
						return (
							B.refreshPromise &&
								(await this.d.refreshPromise,
								await a.Event.toPromise(this.p.event)),
							U
						);
					}
					toggleCollapsed(R, O = !1) {
						return this.b.toggleCollapsed(this.B(R), O);
					}
					expandAll() {
						this.b.expandAll();
					}
					async expandTo(R) {
						if (!this.y.getParent)
							throw new Error(
								"Can't expand to element without getParent method",
							);
						const O = [];
						for (; !this.hasNode(R); )
							(R = this.y.getParent(R)), R !== this.d.element && O.push(R);
						for (const B of h.Iterable.reverse(O)) await this.expand(B);
						this.b.expandTo(this.B(R));
					}
					collapseAll() {
						this.b.collapseAll();
					}
					isCollapsible(R) {
						return this.b.isCollapsible(this.B(R));
					}
					isCollapsed(R) {
						return this.b.isCollapsed(this.B(R));
					}
					triggerTypeNavigation() {
						this.b.triggerTypeNavigation();
					}
					openFind() {
						this.b.openFind();
					}
					closeFind() {
						this.b.closeFind();
					}
					refilter() {
						this.b.refilter();
					}
					setAnchor(R) {
						this.b.setAnchor(typeof R > "u" ? void 0 : this.B(R));
					}
					getAnchor() {
						return this.b.getAnchor()?.element;
					}
					setSelection(R, O) {
						const B = R.map((U) => this.B(U));
						this.b.setSelection(B, O);
					}
					getSelection() {
						return this.b.getSelection().map((O) => O.element);
					}
					setFocus(R, O) {
						const B = R.map((U) => this.B(U));
						this.b.setFocus(B, O);
					}
					focusNext(R = 1, O = !1, B) {
						this.b.focusNext(R, O, B);
					}
					focusPrevious(R = 1, O = !1, B) {
						this.b.focusPrevious(R, O, B);
					}
					focusNextPage(R) {
						return this.b.focusNextPage(R);
					}
					focusPreviousPage(R) {
						return this.b.focusPreviousPage(R);
					}
					focusLast(R) {
						this.b.focusLast(R);
					}
					focusFirst(R) {
						this.b.focusFirst(R);
					}
					getFocus() {
						return this.b.getFocus().map((O) => O.element);
					}
					getStickyScrollFocus() {
						return this.b.getStickyScrollFocus().map((O) => O.element);
					}
					getFocusedPart() {
						return this.b.getFocusedPart();
					}
					reveal(R, O) {
						this.b.reveal(this.B(R), O);
					}
					getRelativeTop(R) {
						return this.b.getRelativeTop(this.B(R));
					}
					getParentElement(R) {
						const O = this.b.getParentElement(this.B(R));
						return O && O.element;
					}
					getFirstElementChild(R = this.d.element) {
						const O = this.B(R),
							B = this.b.getFirstElementChild(O === this.d ? null : O);
						return B && B.element;
					}
					B(R) {
						const O = this.f.get(R === this.d.element ? null : R);
						if (!O) throw new C.$mpb(this.w, `Data tree node not found: ${R}`);
						return O;
					}
					async C(R, O, B, U) {
						await this.D(R, O, B), !this.u.isDisposed && this.J(R, B, U);
					}
					async D(R, O, B) {
						let U;
						if (
							(this.j.forEach((z, F) => {
								!U && o(F, R) && (U = z.then(() => this.D(R, O, B)));
							}),
							U)
						)
							return U;
						if (R !== this.d && this.b.getNode(R).collapsed) {
							(R.hasChildren = !!this.y.hasChildren(R.element)),
								(R.stale = !0),
								this.I(R, [], O, B);
							return;
						}
						return this.E(R, O, B);
					}
					async E(R, O, B) {
						let U;
						(R.refreshPromise = new Promise((z) => (U = z))),
							this.j.set(R, R.refreshPromise),
							R.refreshPromise.finally(() => {
								(R.refreshPromise = void 0), this.j.delete(R);
							});
						try {
							const z = await this.F(R, O, B);
							(R.stale = !1),
								await d.Promises.settled(z.map((F) => this.E(F, O, B)));
						} finally {
							U();
						}
					}
					async F(R, O, B) {
						R.hasChildren = !!this.y.hasChildren(R.element);
						let U;
						if (!R.hasChildren) U = Promise.resolve(h.Iterable.empty());
						else {
							const z = this.G(R);
							if ((0, n.$qg)(z)) U = Promise.resolve(z);
							else {
								const F = (0, d.$Nh)(800);
								F.then(
									() => {
										(R.slow = !0), this.q.fire(R);
									},
									(x) => null,
								),
									(U = z.finally(() => F.cancel()));
							}
						}
						try {
							const z = await U;
							return this.I(R, z, O, B);
						} catch (z) {
							if (
								(R !== this.d && this.b.hasElement(R) && this.b.collapse(R),
								(0, u.$8)(z))
							)
								return [];
							throw z;
						} finally {
							R.slow && ((R.slow = !1), this.q.fire(R));
						}
					}
					G(R) {
						let O = this.k.get(R);
						if (O) return O;
						const B = this.y.getChildren(R.element);
						return (0, n.$qg)(B)
							? this.L(B)
							: ((O = (0, d.$zh)(async () => this.L(await B))),
								this.k.set(R, O),
								O.finally(() => {
									this.k.delete(R);
								}));
					}
					H({ node: R, deep: O }) {
						R.element !== null &&
							!R.collapsed &&
							R.element.stale &&
							(O
								? this.collapse(R.element.element)
								: this.C(R.element, !1).catch(u.$4));
					}
					I(R, O, B, U) {
						const z = [...O];
						if (R.children.length === 0 && z.length === 0) return [];
						const F = new Map(),
							x = new Map();
						for (const V of R.children)
							F.set(V.element, V),
								this.m &&
									x.set(V.id, {
										node: V,
										collapsed: this.b.hasElement(V) && this.b.isCollapsed(V),
									});
						const H = [],
							q = z.map((V) => {
								const G = !!this.y.hasChildren(V);
								if (!this.m) {
									const X = g({
										element: V,
										parent: R,
										hasChildren: G,
										defaultCollapseState: this.h(V),
									});
									return (
										G &&
											X.defaultCollapseState ===
												C.ObjectTreeElementCollapseState.PreserveOrExpanded &&
											H.push(X),
										X
									);
								}
								const K = this.m.getId(V).toString(),
									J = x.get(K);
								if (J) {
									const X = J.node;
									return (
										F.delete(X.element),
										this.f.delete(X.element),
										this.f.set(V, X),
										(X.element = V),
										(X.hasChildren = G),
										B
											? J.collapsed
												? (X.children.forEach((Y) =>
														T(Y, (ie) => this.f.delete(ie.element)),
													),
													X.children.splice(0, X.children.length),
													(X.stale = !0))
												: H.push(X)
											: G && !J.collapsed && H.push(X),
										X
									);
								}
								const W = g({
									element: V,
									parent: R,
									id: K,
									hasChildren: G,
									defaultCollapseState: this.h(V),
								});
								return (
									U &&
										U.viewState.focus &&
										U.viewState.focus.indexOf(K) > -1 &&
										U.focus.push(W),
									U &&
										U.viewState.selection &&
										U.viewState.selection.indexOf(K) > -1 &&
										U.selection.push(W),
									((U &&
										U.viewState.expanded &&
										U.viewState.expanded.indexOf(K) > -1) ||
										(G &&
											W.defaultCollapseState ===
												C.ObjectTreeElementCollapseState.PreserveOrExpanded)) &&
										H.push(W),
									W
								);
							});
						for (const V of F.values()) T(V, (G) => this.f.delete(G.element));
						for (const V of q) this.f.set(V.element, V);
						return (
							R.children.splice(0, R.children.length, ...q),
							R !== this.d &&
								this.o &&
								q.length === 1 &&
								H.length === 0 &&
								((q[0].forceExpanded = !0), H.push(q[0])),
							H
						);
					}
					J(R, O, B) {
						const U = R.children.map((F) => this.K(F, O)),
							z = B && {
								...B,
								diffIdentityProvider: B.diffIdentityProvider && {
									getId(F) {
										return B.diffIdentityProvider.getId(F.element);
									},
								},
							};
						this.b.setChildren(R === this.d ? null : R, U, z),
							R !== this.d && this.b.setCollapsible(R, R.hasChildren),
							this.p.fire();
					}
					K(R, O) {
						if (R.stale)
							return { element: R, collapsible: R.hasChildren, collapsed: !0 };
						let B;
						return (
							O &&
							O.viewState.expanded &&
							R.id &&
							O.viewState.expanded.indexOf(R.id) > -1
								? (B = !1)
								: R.forceExpanded
									? ((B = !1), (R.forceExpanded = !1))
									: (B = R.defaultCollapseState),
							{
								element: R,
								children: R.hasChildren
									? h.Iterable.map(R.children, (U) => this.K(U, O))
									: [],
								collapsible: R.hasChildren,
								collapsed: B,
							}
						);
					}
					L(R) {
						return this.g && (R = [...R].sort(this.g.compare.bind(this.g))), R;
					}
					getViewState() {
						if (!this.m)
							throw new C.$mpb(
								this.w,
								"Can't get tree view state without an identity provider",
							);
						const R = (x) => this.m.getId(x).toString(),
							O = this.getFocus().map(R),
							B = this.getSelection().map(R),
							U = [],
							z = this.b.getNode(),
							F = [z];
						for (; F.length > 0; ) {
							const x = F.pop();
							x !== z &&
								x.collapsible &&
								!x.collapsed &&
								U.push(R(x.element.element)),
								F.push(...x.children);
						}
						return {
							focus: O,
							selection: B,
							expanded: U,
							scrollTop: this.scrollTop,
						};
					}
					dispose() {
						this.u.dispose(), this.b.dispose();
					}
				}
				e.$Fpb = P;
				class k {
					get element() {
						return {
							elements: this.a.element.elements.map((R) => R.element),
							incompressible: this.a.element.incompressible,
						};
					}
					get children() {
						return this.a.children.map((R) => new k(R));
					}
					get depth() {
						return this.a.depth;
					}
					get visibleChildrenCount() {
						return this.a.visibleChildrenCount;
					}
					get visibleChildIndex() {
						return this.a.visibleChildIndex;
					}
					get collapsible() {
						return this.a.collapsible;
					}
					get collapsed() {
						return this.a.collapsed;
					}
					get visible() {
						return this.a.visible;
					}
					get filterData() {
						return this.a.filterData;
					}
					constructor(R) {
						this.a = R;
					}
				}
				class L {
					constructor(R, O, B, U) {
						(this.d = R),
							(this.f = O),
							(this.g = B),
							(this.onDidChangeTwistieState = U),
							(this.a = new Map()),
							(this.b = []),
							(this.templateId = R.templateId);
					}
					renderTemplate(R) {
						return { templateData: this.d.renderTemplate(R) };
					}
					renderElement(R, O, B, U) {
						this.d.renderElement(this.f.map(R), O, B.templateData, U);
					}
					renderCompressedElements(R, O, B, U) {
						this.d.renderCompressedElements(
							this.g().map(R),
							O,
							B.templateData,
							U,
						);
					}
					renderTwistie(R, O) {
						return R.slow
							? (O.classList.add(
									...r.ThemeIcon.asClassNameArray(m.$ak.treeItemLoading),
								),
								!0)
							: (O.classList.remove(
									...r.ThemeIcon.asClassNameArray(m.$ak.treeItemLoading),
								),
								!1);
					}
					disposeElement(R, O, B, U) {
						this.d.disposeElement?.(this.f.map(R), O, B.templateData, U);
					}
					disposeCompressedElements(R, O, B, U) {
						this.d.disposeCompressedElements?.(
							this.g().map(R),
							O,
							B.templateData,
							U,
						);
					}
					disposeTemplate(R) {
						this.d.disposeTemplate(R.templateData);
					}
					dispose() {
						this.a.clear(), (this.b = (0, c.$Vc)(this.b));
					}
				}
				function D(A) {
					const R = A && I(A);
					return (
						R && {
							...R,
							keyboardNavigationLabelProvider:
								R.keyboardNavigationLabelProvider && {
									...R.keyboardNavigationLabelProvider,
									getCompressedNodeKeyboardNavigationLabel(O) {
										return A.keyboardNavigationLabelProvider.getCompressedNodeKeyboardNavigationLabel(
											O.map((B) => B.element),
										);
									},
								},
						}
					);
				}
				class M extends P {
					constructor(R, O, B, U, z, F, x = {}) {
						super(R, O, B, z, F, x),
							(this.x = U),
							(this.s = new C.$npb((H) => new k(H))),
							(this.v = x.filter);
					}
					z(R, O, B, U, z) {
						const F = new i.$rpb(B),
							x = U.map((q) => new L(q, this.t, () => this.s, this.q.event)),
							H = D(z) || {};
						return new E.$Epb(R, O, F, x, H);
					}
					K(R, O) {
						return {
							incompressible: this.x.isIncompressible(R.element),
							...super.K(R, O),
						};
					}
					updateOptions(R = {}) {
						this.b.updateOptions(R);
					}
					getViewState() {
						if (!this.m)
							throw new C.$mpb(
								this.w,
								"Can't get tree view state without an identity provider",
							);
						const R = (x) => this.m.getId(x).toString(),
							O = this.getFocus().map(R),
							B = this.getSelection().map(R),
							U = [],
							z = this.b.getCompressedTreeNode(),
							F = [z];
						for (; F.length > 0; ) {
							const x = F.pop();
							if (x !== z && x.collapsible && !x.collapsed)
								for (const H of x.element.elements) U.push(R(H.element));
							F.push(...x.children);
						}
						return {
							focus: O,
							selection: B,
							expanded: U,
							scrollTop: this.scrollTop,
						};
					}
					J(R, O, B) {
						if (!this.m) return super.J(R, O);
						const U = (J) => this.m.getId(J).toString(),
							z = (J) => {
								const W = new Set();
								for (const X of J) {
									const Y = this.b.getCompressedTreeNode(
										X === this.d ? null : X,
									);
									if (Y.element)
										for (const ie of Y.element.elements) W.add(U(ie.element));
								}
								return W;
							},
							F = z(this.b.getSelection()),
							x = z(this.b.getFocus());
						super.J(R, O, B);
						const H = this.getSelection();
						let q = !1;
						const V = this.getFocus();
						let G = !1;
						const K = (J) => {
							const W = J.element;
							if (W)
								for (let X = 0; X < W.elements.length; X++) {
									const Y = U(W.elements[X].element),
										ie = W.elements[W.elements.length - 1].element;
									F.has(Y) && H.indexOf(ie) === -1 && (H.push(ie), (q = !0)),
										x.has(Y) && V.indexOf(ie) === -1 && (V.push(ie), (G = !0));
								}
							J.children.forEach(K);
						};
						K(this.b.getCompressedTreeNode(R === this.d ? null : R)),
							q && this.setSelection(H),
							G && this.setFocus(V);
					}
					L(R) {
						return (
							this.v &&
								(R = h.Iterable.filter(R, (O) => {
									const B = this.v.filter(O, C.TreeVisibility.Visible),
										U = N(B);
									if (U === C.TreeVisibility.Recurse)
										throw new Error(
											"Recursive tree visibility not supported in async data compressed trees",
										);
									return U === C.TreeVisibility.Visible;
								})),
							super.L(R)
						);
					}
				}
				e.$Gpb = M;
				function N(A) {
					return typeof A == "boolean"
						? A
							? C.TreeVisibility.Visible
							: C.TreeVisibility.Hidden
						: (0, w.$opb)(A)
							? (0, w.$ppb)(A.visibility)
							: (0, w.$ppb)(A);
				}
			},
		),
		define(
			de[222],
			he([1, 0, 24, 249, 54, 12, 19, 37]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wO = m),
					(e.$xO = u),
					(e.$yO = h),
					(e.$zO = c),
					(e.$AO = o),
					(e.$BO = b),
					(e.$CO = s),
					(e.$DO = l),
					(e.$EO = y),
					(e.$FO = $);
				function m(S, I) {
					const { os: T, tildify: P, relative: k } = I;
					if (k) {
						const M = r(S, k, T);
						if (typeof M == "string") return M;
					}
					let L = S.fsPath;
					if (
						(T === E.OperatingSystem.Windows && !E.$l
							? (L = L.replace(/\//g, "\\"))
							: T !== E.OperatingSystem.Windows &&
								E.$l &&
								(L = L.replace(/\\/g, "/")),
						T !== E.OperatingSystem.Windows && P?.userHome)
					) {
						const M = P.userHome.fsPath;
						let N;
						S.scheme !== P.userHome.scheme &&
						S.path[0] === w.$lc.sep &&
						S.path[1] !== w.$lc.sep
							? (N = P.userHome.with({ path: S.path }).fsPath)
							: (N = L),
							(L = h(N, M, T));
					}
					return (T === E.OperatingSystem.Windows ? w.$kc : w.$lc).normalize(
						u(L, T === E.OperatingSystem.Windows),
					);
				}
				function r(S, I, T) {
					const P = T === E.OperatingSystem.Windows ? w.$kc : w.$lc,
						k = T === E.OperatingSystem.Linux ? C.$dh : C.$fh,
						L = I.getWorkspace(),
						D = (0, t.$Sb)(L.folders);
					if (!D) return;
					S.scheme !== D.uri.scheme &&
						S.path[0] === w.$lc.sep &&
						S.path[1] !== w.$lc.sep &&
						(S = D.uri.with({ path: S.path }));
					const M = I.getWorkspaceFolder(S);
					if (!M) return;
					let N;
					if (
						(k.isEqual(M.uri, S)
							? (N = "")
							: (N = k.relativePath(M.uri, S) ?? ""),
						N && (N = P.normalize(N)),
						L.folders.length > 1 && !I.noPrefix)
					) {
						const A = M.name ? M.name : k.basenameOrAuthority(M.uri);
						N = N ? `${A} \u2022 ${N}` : A;
					}
					return N;
				}
				function u(S, I = E.$l) {
					return (0, i.$Qg)(S, I) ? S.charAt(0).toUpperCase() + S.slice(1) : S;
				}
				let a = Object.create(null);
				function h(S, I, T = E.OS) {
					if (T === E.OperatingSystem.Windows || !S || !I) return S;
					let P = a.original === I ? a.normalized : void 0;
					P ||
						((P = I),
						E.$l && (P = (0, i.$Fg)(P)),
						(P = `${(0, d.$uf)(P, w.$lc.sep)}${w.$lc.sep}`),
						(a = { original: I, normalized: P }));
					let k = S;
					return (
						E.$l && (k = (0, i.$Fg)(k)),
						(T === E.OperatingSystem.Linux ? k.startsWith(P) : (0, d.$Nf)(k, P))
							? `~/${k.substr(P.length)}`
							: S
					);
				}
				function c(S, I) {
					return S.replace(/^~($|\/|\\)/, `${I}$1`);
				}
				const n = "\u2026",
					g = "\\\\",
					p = "~";
				function o(S, I = w.sep) {
					const T = new Array(S.length);
					let P = !1;
					for (let k = 0; k < S.length; k++) {
						const L = S[k];
						if (L === "") {
							T[k] = `.${I}`;
							continue;
						}
						if (!L) {
							T[k] = L;
							continue;
						}
						P = !0;
						let D = "",
							M = L;
						M.indexOf(g) === 0
							? ((D = M.substr(0, M.indexOf(g) + g.length)),
								(M = M.substr(M.indexOf(g) + g.length)))
							: M.indexOf(I) === 0
								? ((D = M.substr(0, M.indexOf(I) + I.length)),
									(M = M.substr(M.indexOf(I) + I.length)))
								: M.indexOf(p) === 0 &&
									((D = M.substr(0, M.indexOf(p) + p.length)),
									(M = M.substr(M.indexOf(p) + p.length)));
						const N = M.split(I);
						for (let A = 1; P && A <= N.length; A++)
							for (let R = N.length - A; P && R >= 0; R--) {
								P = !1;
								let O = N.slice(R, R + A).join(I);
								for (let B = 0; !P && B < S.length; B++)
									if (B !== k && S[B] && S[B].indexOf(O) > -1) {
										const U = R + A === N.length,
											z = R > 0 && S[B].indexOf(I) > -1 ? I + O : O,
											F = S[B].endsWith(z);
										P = !U || F;
									}
								if (!P) {
									let B = "";
									(N[0].endsWith(":") || D !== "") &&
										(R === 1 && ((R = 0), A++, (O = N[0] + I + O)),
										R > 0 && (B = N[0] + I),
										(B = D + B)),
										R > 0 && (B = B + n + I),
										(B = B + O),
										R + A < N.length && (B = B + I + n),
										(T[k] = B);
								}
							}
						P && (T[k] = L);
					}
					return T;
				}
				var f;
				(function (S) {
					(S[(S.TEXT = 0)] = "TEXT"),
						(S[(S.VARIABLE = 1)] = "VARIABLE"),
						(S[(S.SEPARATOR = 2)] = "SEPARATOR");
				})(f || (f = {}));
				function b(S, I = Object.create(null)) {
					const T = [];
					let P = !1,
						k = "";
					for (const L of S)
						if (L === "$" || (P && L === "{"))
							k && T.push({ value: k, type: f.TEXT }), (k = ""), (P = !0);
						else if (L === "}" && P) {
							const D = I[k];
							if (typeof D == "string")
								D.length && T.push({ value: D, type: f.VARIABLE });
							else if (D) {
								const M = T[T.length - 1];
								(!M || M.type !== f.SEPARATOR) &&
									T.push({ value: D.label, type: f.SEPARATOR });
							}
							(k = ""), (P = !1);
						} else k += L;
					return (
						k && !P && T.push({ value: k, type: f.TEXT }),
						T.filter((L, D) => {
							if (L.type === f.SEPARATOR) {
								const M = T[D - 1],
									N = T[D + 1];
								return [M, N].every(
									(A) =>
										A &&
										(A.type === f.VARIABLE || A.type === f.TEXT) &&
										A.value.length > 0,
								);
							}
							return !0;
						})
							.map((L) => L.value)
							.join("")
					);
				}
				function s(S, I) {
					return E.$m || I
						? S.replace(/\(&&\w\)|&&/g, "").replace(/&/g, E.$m ? "&" : "&&")
						: S.replace(/&&|&/g, (T) => (T === "&" ? "&&" : "&"));
				}
				function l(S, I) {
					return E.$m || I
						? S.replace(/\(&&\w\)|&&/g, "")
						: E.$l
							? S.replace(/&&|&/g, (T) => (T === "&" ? "&&" : "&"))
							: S.replace(/&&/g, "_");
				}
				function y(S) {
					return S.replace(/&/g, "&&");
				}
				function $(S) {
					if (S.endsWith("]")) {
						const I = S.lastIndexOf(" [", S.length - 2);
						if (I !== -1) {
							const T = v(S.substring(0, I)),
								P = S.substring(I);
							return { name: T.name + P, parentPath: T.parentPath };
						}
					}
					return v(S);
				}
				function v(S) {
					const I = S.indexOf("/") !== -1 ? w.$lc : w.$kc,
						T = I.basename(S),
						P = I.dirname(S);
					return T.length
						? { name: T, parentPath: P }
						: { name: P, parentPath: "" };
				}
			},
		),
		define(
			de[1583],
			he([
				1, 0, 7, 114, 105, 183, 268, 292, 50, 14, 26, 27, 222, 3, 12, 4, 2238,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Oob = void 0),
					(g = mt(g));
				class p extends c.$1c {
					constructor(f, b, s, l) {
						super(),
							(this.w = f),
							(this.y = b),
							(this.z = l),
							(this.c = this.w.appendChild(
								(0, t.$)(".monaco-dialog-modal-block.dimmed"),
							)),
							(this.b = this.c.appendChild((0, t.$)(".dialog-shadow"))),
							(this.a = this.b.appendChild((0, t.$)(".monaco-dialog-box"))),
							this.a.setAttribute("role", "dialog"),
							(this.a.tabIndex = -1),
							(0, t.hide)(this.a),
							(this.u = l.buttonStyles),
							Array.isArray(s) && s.length > 0
								? (this.t = s)
								: this.z.disableDefaultAction
									? (this.t = [])
									: (this.t = [g.localize(2, null)]);
						const y = this.a.appendChild((0, t.$)(".dialog-buttons-row"));
						this.f = y.appendChild((0, t.$)(".dialog-buttons"));
						const $ = this.a.appendChild((0, t.$)(".dialog-message-row"));
						if (
							((this.j = $.appendChild(
								(0, t.$)("#monaco-dialog-icon.dialog-icon"),
							)),
							this.j.setAttribute("aria-label", this.C()),
							(this.h = $.appendChild((0, t.$)(".dialog-message-container"))),
							this.z.detail || this.z.renderBody)
						) {
							const I = this.h
								.appendChild((0, t.$)(".dialog-message"))
								.appendChild(
									(0, t.$)("#monaco-dialog-message-text.dialog-message-text"),
								);
							I.innerText = this.y;
						}
						if (
							((this.g = this.h.appendChild(
								(0, t.$)("#monaco-dialog-message-detail.dialog-message-detail"),
							)),
							this.z.detail || !this.z.renderBody
								? (this.g.innerText = this.z.detail ? this.z.detail : b)
								: (this.g.style.display = "none"),
							this.z.renderBody)
						) {
							const S = this.h.appendChild(
								(0, t.$)("#monaco-dialog-message-body.dialog-message-body"),
							);
							this.z.renderBody(S);
							for (const I of this.h.querySelectorAll("a")) I.tabIndex = 0;
						}
						if (
							(this.z.inputs
								? (this.s = this.z.inputs.map((S) => {
										const I = this.h.appendChild(
												(0, t.$)(".dialog-message-input"),
											),
											T = this.D(
												new d.$Mob(I, void 0, {
													placeholder: S.placeholder,
													type: S.type ?? "text",
													inputBoxStyles: l.inputBoxStyles,
												}),
											);
										return S.value && (T.value = S.value), T;
									}))
								: (this.s = []),
							this.z.checkboxLabel)
						) {
							const S = this.h.appendChild((0, t.$)(".dialog-checkbox-row")),
								I = (this.m = this.D(
									new C.$9ib(
										this.z.checkboxLabel,
										!!this.z.checkboxChecked,
										l.checkboxStyles,
									),
								));
							S.appendChild(I.domNode);
							const T = S.appendChild((0, t.$)(".dialog-checkbox-message"));
							(T.innerText = this.z.checkboxLabel),
								this.D(
									(0, t.$0fb)(T, t.$$gb.CLICK, () => (I.checked = !I.checked)),
								);
						}
						const v = this.a.appendChild((0, t.$)(".dialog-toolbar-row"));
						(this.n = v.appendChild((0, t.$)(".dialog-toolbar"))), this.F();
					}
					C() {
						let f = g.localize(3, null);
						switch (this.z.type) {
							case "error":
								f = g.localize(4, null);
								break;
							case "warning":
								f = g.localize(5, null);
								break;
							case "pending":
								f = g.localize(6, null);
								break;
							case "none":
							case "info":
							case "question":
							default:
								break;
						}
						return f;
					}
					updateMessage(f) {
						this.g.innerText = f;
					}
					async show() {
						return (
							(this.r = this.w.ownerDocument.activeElement),
							new Promise((f) => {
								(0, t.$9fb)(this.f);
								const b = (this.q = this.D(new E.$rob(this.f))),
									s = this.G(this.t, this.z.cancelId);
								s.forEach(($, v) => {
									const S = s[v].index === 0,
										I = this.z.buttonDetails
											? this.D(
													b.addButtonWithDescription({
														secondary: !S,
														...this.u,
													}),
												)
											: this.D(b.addButton({ secondary: !S, ...this.u }));
									(I.label = (0, h.$DO)(s[v].label, !0)),
										I instanceof E.$qob &&
											(I.description = this.z.buttonDetails[s[v].index]),
										this.D(
											I.onDidClick((T) => {
												T && t.$ahb.stop(T),
													f({
														button: s[v].index,
														checkboxChecked: this.m ? this.m.checked : void 0,
														values:
															this.s.length > 0
																? this.s.map((P) => P.value)
																: void 0,
													});
											}),
										);
								});
								const l = (0, t.getWindow)(this.w);
								this.D(
									(0, t.$0fb)(
										l,
										"keydown",
										($) => {
											const v = new i.$7fb($);
											if (
												(v.equals(a.KeyMod.Alt) && v.preventDefault(),
												v.equals(a.KeyCode.Enter))
											) {
												this.s.some((I) => I.hasFocus()) &&
													(t.$ahb.stop($),
													f({
														button:
															s.find((I) => I.index !== this.z.cancelId)
																?.index ?? 0,
														checkboxChecked: this.m ? this.m.checked : void 0,
														values:
															this.s.length > 0
																? this.s.map((I) => I.value)
																: void 0,
													}));
												return;
											}
											if (v.equals(a.KeyCode.Space)) return;
											let S = !1;
											if (
												v.equals(a.KeyCode.Tab) ||
												v.equals(a.KeyCode.RightArrow) ||
												v.equals(a.KeyMod.Shift | a.KeyCode.Tab) ||
												v.equals(a.KeyCode.LeftArrow)
											) {
												const I = [];
												let T = -1;
												if (this.h) {
													const P = this.h.querySelectorAll("a");
													for (const k of P)
														I.push(k), (0, t.$Kgb)(k) && (T = I.length - 1);
												}
												for (const P of this.s)
													I.push(P), P.hasFocus() && (T = I.length - 1);
												if (
													(this.m &&
														(I.push(this.m),
														this.m.hasFocus() && (T = I.length - 1)),
													this.q)
												)
													for (const P of this.q.buttons)
														I.push(P), P.hasFocus() && (T = I.length - 1);
												if (
													v.equals(a.KeyCode.Tab) ||
													v.equals(a.KeyCode.RightArrow)
												) {
													T === -1 && (T = 0);
													const P = (T + 1) % I.length;
													I[P].focus();
												} else {
													T === -1 && (T = I.length);
													let P = T - 1;
													P === -1 && (P = I.length - 1), I[P].focus();
												}
												S = !0;
											}
											S
												? t.$ahb.stop($, !0)
												: this.z.keyEventProcessor &&
													this.z.keyEventProcessor(v);
										},
										!0,
									),
								),
									this.D(
										(0, t.$0fb)(
											l,
											"keyup",
											($) => {
												t.$ahb.stop($, !0);
												const v = new i.$7fb($);
												!this.z.disableCloseAction &&
													v.equals(a.KeyCode.Escape) &&
													f({
														button: this.z.cancelId || 0,
														checkboxChecked: this.m ? this.m.checked : void 0,
													});
											},
											!0,
										),
									),
									this.D(
										(0, t.$0fb)(
											this.a,
											"focusout",
											($) => {
												$.relatedTarget &&
													this.a &&
													((0, t.$Bgb)($.relatedTarget, this.a) ||
														((this.r = $.relatedTarget),
														$.target &&
															($.target.focus(), t.$ahb.stop($, !0))));
											},
											!1,
										),
									);
								const y = "codicon-modifier-spin";
								if (
									(this.j.classList.remove(
										...u.ThemeIcon.asClassNameArray(r.$ak.dialogError),
										...u.ThemeIcon.asClassNameArray(r.$ak.dialogWarning),
										...u.ThemeIcon.asClassNameArray(r.$ak.dialogInfo),
										...u.ThemeIcon.asClassNameArray(r.$ak.loading),
										y,
									),
									this.z.icon)
								)
									this.j.classList.add(
										...u.ThemeIcon.asClassNameArray(this.z.icon),
									);
								else
									switch (this.z.type) {
										case "error":
											this.j.classList.add(
												...u.ThemeIcon.asClassNameArray(r.$ak.dialogError),
											);
											break;
										case "warning":
											this.j.classList.add(
												...u.ThemeIcon.asClassNameArray(r.$ak.dialogWarning),
											);
											break;
										case "pending":
											this.j.classList.add(
												...u.ThemeIcon.asClassNameArray(r.$ak.loading),
												y,
											);
											break;
										case "none":
											this.j.classList.add("no-codicon");
											break;
										case "info":
										case "question":
										default:
											this.j.classList.add(
												...u.ThemeIcon.asClassNameArray(r.$ak.dialogInfo),
											);
											break;
									}
								if (!this.z.disableCloseAction) {
									const $ = this.D(new w.$eib(this.n, {})),
										v = this.D(
											new m.$rj(
												"dialog.close",
												g.localize(7, null),
												u.ThemeIcon.asClassName(r.$ak.dialogClose),
												!0,
												async () => {
													f({
														button: this.z.cancelId || 0,
														checkboxChecked: this.m ? this.m.checked : void 0,
													});
												},
											),
										);
									$.push(v, { icon: !0, label: !1 });
								}
								this.F(),
									this.a.setAttribute("aria-modal", "true"),
									this.a.setAttribute(
										"aria-labelledby",
										"monaco-dialog-icon monaco-dialog-message-text",
									),
									this.a.setAttribute(
										"aria-describedby",
										"monaco-dialog-icon monaco-dialog-message-text monaco-dialog-message-detail monaco-dialog-message-body",
									),
									(0, t.show)(this.a),
									this.s.length > 0
										? (this.s[0].focus(), this.s[0].select())
										: s.forEach(($, v) => {
												$.index === 0 && b.buttons[v].focus();
											});
							})
						);
					}
					F() {
						const f = this.z.dialogStyles,
							b = f.dialogForeground,
							s = f.dialogBackground,
							l = f.dialogShadow ? `0 0px 8px ${f.dialogShadow}` : "",
							y = f.dialogBorder ? `1px solid ${f.dialogBorder}` : "",
							$ = f.textLinkForeground;
						if (
							((this.b.style.boxShadow = l),
							(this.a.style.color = b ?? ""),
							(this.a.style.backgroundColor = s ?? ""),
							(this.a.style.border = y),
							$)
						)
							for (const S of this.h.getElementsByTagName("a"))
								S.style.color = $;
						let v;
						switch (this.z.type) {
							case "error":
								v = f.errorIconForeground;
								break;
							case "warning":
								v = f.warningIconForeground;
								break;
							default:
								v = f.infoIconForeground;
								break;
						}
						v && (this.j.style.color = v);
					}
					dispose() {
						super.dispose(),
							this.c && (this.c.remove(), (this.c = void 0)),
							this.r &&
								(0, t.$Bgb)(this.r, this.w.ownerDocument.body) &&
								(this.r.focus(), (this.r = void 0));
					}
					G(f, b) {
						const s = f.map((l, y) => ({ label: l, index: y }));
						if (f.length < 2) return s;
						if (n.$m || n.$n) {
							if (typeof b == "number" && s[b]) {
								const l = s.splice(b, 1)[0];
								s.splice(1, 0, l);
							}
							s.reverse();
						} else if (n.$l && typeof b == "number" && s[b]) {
							const l = s.splice(b, 1)[0];
							s.push(l);
						}
						return s;
					}
				}
				e.$Oob = p;
			},
		),
		define(
			de[1171],
			he([1, 0, 138, 387, 54, 19, 9]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$06 = void 0),
					(w = mt(w));
				class d {
					get childrenCount() {
						return this.a.size;
					}
					get children() {
						return this.a.values();
					}
					get name() {
						return w.$lc.basename(this.relativePath);
					}
					constructor(a, h, c, n = void 0, g = void 0) {
						(this.uri = a),
							(this.relativePath = h),
							(this.context = c),
							(this.element = n),
							(this.parent = g),
							(this.a = new Map());
					}
					get(a) {
						return this.a.get(a);
					}
					set(a, h) {
						this.a.set(a, h);
					}
					delete(a) {
						this.a.delete(a);
					}
					clear() {
						this.a.clear();
					}
				}
				Ne([t.$ei], d.prototype, "name", null);
				function m(u, a) {
					typeof u.element < "u" && a.push(u.element);
					for (const h of u.children) m(h, a);
					return a;
				}
				class r {
					static getRoot(a) {
						for (; a.parent; ) a = a.parent;
						return a;
					}
					static collect(a) {
						return m(a, []);
					}
					static isResourceNode(a) {
						return a instanceof d;
					}
					constructor(a, h = C.URI.file("/"), c = E.$dh) {
						(this.a = c), (this.root = new d(h, "", a));
					}
					add(a, h) {
						const c = this.a.relativePath(this.root.uri, a) || a.path,
							n = new i.$Qi(!1).reset(c);
						let g = this.root,
							p = "";
						for (;;) {
							const o = n.value();
							p = p + "/" + o;
							let f = g.get(o);
							if (
								(f
									? n.hasNext() || (f.element = h)
									: ((f = new d(
											this.a.joinPath(this.root.uri, p),
											p,
											this.root.context,
											n.hasNext() ? void 0 : h,
											g,
										)),
										g.set(o, f)),
								(g = f),
								!n.hasNext())
							)
								return;
							n.next();
						}
					}
					delete(a) {
						const h = this.a.relativePath(this.root.uri, a) || a.path,
							c = new i.$Qi(!1).reset(h);
						return this.b(this.root, c);
					}
					b(a, h) {
						const c = h.value(),
							n = a.get(c);
						if (n) {
							if (h.hasNext()) {
								const g = this.b(n, h.next());
								return (
									typeof g < "u" && n.childrenCount === 0 && a.delete(c), g
								);
							}
							return a.delete(c), n.element;
						}
					}
					clear() {
						this.root.clear();
					}
					getNode(a) {
						const h = this.a.relativePath(this.root.uri, a) || a.path,
							c = new i.$Qi(!1).reset(h);
						let n = this.root;
						for (;;) {
							const g = c.value(),
								p = n.get(g);
							if (!p || !c.hasNext()) return p;
							(n = p), c.next();
						}
					}
				}
				e.$06 = r;
			},
		),
		