define(
			de[2866],
			he([
				1, 0, 7, 6, 264, 4, 5, 93, 35, 3, 63, 114, 27, 12, 138, 325, 460, 105,
				212, 9, 1625, 149, 274, 160, 535, 37, 411, 15, 29, 91, 77, 24,
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
			) {
				"use strict";
				var M;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$uxc = void 0),
					(t = mt(t));
				const N = t.$;
				class A {
					constructor(W, X, Y) {
						(this.index = W),
							(this.hasCheckbox = X),
							(this.c = !1),
							(this.a = new l.$Y(() => {
								const ie = Y.label ?? "",
									ne = (0, y.$al)(ie).text.trim(),
									ee =
										Y.ariaLabel ||
										[ie, this.saneDescription, this.saneDetail]
											.map((_) => (0, y.$_k)(_))
											.filter((_) => !!_)
											.join(", ");
								return { saneLabel: ie, saneSortLabel: ne, saneAriaLabel: ee };
							})),
							(this.d = Y.description),
							(this.h = Y.tooltip);
					}
					get saneLabel() {
						return this.a.value.saneLabel;
					}
					get saneSortLabel() {
						return this.a.value.saneSortLabel;
					}
					get saneAriaLabel() {
						return this.a.value.saneAriaLabel;
					}
					get element() {
						return this.b;
					}
					set element(W) {
						this.b = W;
					}
					get hidden() {
						return this.c;
					}
					set hidden(W) {
						this.c = W;
					}
					get saneDescription() {
						return this.d;
					}
					set saneDescription(W) {
						this.d = W;
					}
					get saneDetail() {
						return this.f;
					}
					set saneDetail(W) {
						this.f = W;
					}
					get saneBreadcrumbPath() {
						return this.g;
					}
					set saneBreadcrumbPath(W) {
						this.g = W;
					}
					get saneTooltip() {
						return this.h;
					}
					set saneTooltip(W) {
						this.h = W;
					}
					get labelHighlights() {
						return this.j;
					}
					set labelHighlights(W) {
						this.j = W;
					}
					get descriptionHighlights() {
						return this.k;
					}
					set descriptionHighlights(W) {
						this.k = W;
					}
					get detailHighlights() {
						return this.l;
					}
					set detailHighlights(W) {
						this.l = W;
					}
				}
				class R extends A {
					constructor(W, X, Y, ie, ne, ee) {
						super(W, X, ne),
							(this.fireButtonTriggered = Y),
							(this.m = ie),
							(this.item = ne),
							(this.o = ee),
							(this.p = !1),
							(this.onChecked = X
								? i.Event.map(
										i.Event.filter(this.m.event, (_) => _.element === this),
										(_) => _.checked,
									)
								: i.Event.None),
							(this.f = ne.detail),
							(this.g = ne.semSearchData?.outlineBreadcrumbs),
							(this.j = ne.highlights?.label),
							(this.k = ne.highlights?.description),
							(this.l = ne.highlights?.detail);
					}
					get separator() {
						return this.o;
					}
					set separator(W) {
						this.o = W;
					}
					get checked() {
						return this.p;
					}
					set checked(W) {
						W !== this.p &&
							((this.p = W), this.m.fire({ element: this, checked: W }));
					}
					get checkboxDisabled() {
						return !!this.item.disabled;
					}
				}
				var O;
				(function (J) {
					(J[(J.NONE = 0)] = "NONE"),
						(J[(J.MOUSE_HOVER = 1)] = "MOUSE_HOVER"),
						(J[(J.ACTIVE_ITEM = 2)] = "ACTIVE_ITEM");
				})(O || (O = {}));
				class B extends A {
					constructor(W, X, Y) {
						super(W, !1, Y),
							(this.fireSeparatorButtonTriggered = X),
							(this.separator = Y),
							(this.children = new Array()),
							(this.focusInsideSeparator = O.NONE);
					}
				}
				class U {
					getHeight(W) {
						return W instanceof B
							? 30
							: W.saneDetail || W.saneBreadcrumbPath
								? 44
								: 22;
					}
					getTemplateId(W) {
						return W instanceof R ? x.ID : H.ID;
					}
				}
				class z {
					getWidgetAriaLabel() {
						return (0, E.localize)(2058, null);
					}
					getAriaLabel(W) {
						return W.separator?.label
							? `${W.saneAriaLabel}, ${W.separator.label}`
							: W.saneAriaLabel;
					}
					getWidgetRole() {
						return "listbox";
					}
					getRole(W) {
						return W.hasCheckbox ? "checkbox" : "option";
					}
					isChecked(W) {
						if (!(!W.hasCheckbox || !(W instanceof R)))
							return {
								get value() {
									return W.checked;
								},
								onDidChange: (X) => W.onChecked(() => X()),
							};
					}
				}
				class F {
					constructor(W) {
						this.a = W;
					}
					renderTemplate(W) {
						const X = Object.create(null);
						(X.toDisposeElement = new r.$Zc()),
							(X.toDisposeTemplate = new r.$Zc()),
							(X.entry = t.$fhb(W, N(".quick-input-list-entry")));
						const Y = t.$fhb(X.entry, N("label.quick-input-list-label"));
						X.toDisposeTemplate.add(
							t.$$fb(Y, t.$$gb.CLICK, (se) => {
								X.checkbox.offsetParent || se.preventDefault();
							}),
						),
							(X.checkbox = t.$fhb(Y, N("input.quick-input-list-checkbox"))),
							(X.checkbox.type = "checkbox");
						const ie = t.$fhb(Y, N(".quick-input-list-rows")),
							ne = t.$fhb(ie, N(".quick-input-list-row")),
							ee = t.$fhb(ie, N(".quick-input-list-row")),
							_ = t.$fhb(ie, N(".quick-input-list-row"));
						(X.label = new g.$Xob(ne, {
							supportHighlights: !0,
							supportDescriptionHighlights: !0,
							supportIcons: !0,
							hoverDelegate: this.a,
						})),
							X.toDisposeTemplate.add(X.label),
							(X.icon = t.$ghb(X.label.element, N(".quick-input-list-icon")));
						const te = t.$fhb(ne, N(".quick-input-list-entry-keybinding"));
						(X.keybinding = new p.$7ob(te, c.OS)),
							X.toDisposeTemplate.add(X.keybinding);
						const Q = t.$fhb(ee, N(".quick-input-list-label-meta"));
						(X.detail = new g.$Xob(Q, {
							supportHighlights: !0,
							supportIcons: !0,
							hoverDelegate: this.a,
						})),
							X.toDisposeTemplate.add(X.detail);
						const Z = t.$fhb(_, N(".quick-input-list-outline-breadcrumbs"));
						return (
							(X.outlineBreadcrumbs = Z),
							X.toDisposeTemplate.add({
								dispose: () => {
									t.$9fb(X.outlineBreadcrumbs), X.outlineBreadcrumbs.remove();
								},
							}),
							(X.separator = t.$fhb(X.entry, N(".quick-input-list-separator"))),
							(X.actionBar = new o.$eib(
								X.entry,
								this.a ? { hoverDelegate: this.a } : void 0,
							)),
							X.actionBar.domNode.classList.add(
								"quick-input-list-entry-action-bar",
							),
							X.toDisposeTemplate.add(X.actionBar),
							X
						);
					}
					disposeTemplate(W) {
						W.toDisposeElement.dispose(), W.toDisposeTemplate.dispose();
					}
					disposeElement(W, X, Y) {
						Y.toDisposeElement.clear(), Y.actionBar.clear();
					}
				}
				let x = class extends F {
					static {
						M = this;
					}
					static {
						this.ID = "quickpickitem";
					}
					constructor(W, X) {
						super(W), (this.c = X), (this.b = new Map());
					}
					get templateId() {
						return M.ID;
					}
					renderTemplate(W) {
						const X = super.renderTemplate(W);
						return (
							X.toDisposeTemplate.add(
								t.$$fb(X.checkbox, t.$$gb.CHANGE, (Y) => {
									X.element.checked = X.checkbox.checked;
								}),
							),
							X
						);
					}
					renderElement(W, X, Y) {
						const ie = W.element;
						(Y.element = ie), (ie.element = Y.entry ?? void 0);
						const ne = ie.item;
						(Y.checkbox.checked = ie.checked),
							Y.toDisposeElement.add(
								ie.onChecked((re) => (Y.checkbox.checked = re)),
							),
							(Y.checkbox.disabled = ie.checkboxDisabled);
						const {
							labelHighlights: ee,
							descriptionHighlights: _,
							detailHighlights: te,
						} = ie;
						if (ne.iconPath) {
							const re = (0, f.$hP)(this.c.getColorTheme().type)
									? ne.iconPath.dark
									: (ne.iconPath.light ?? ne.iconPath.dark),
								le = b.URI.revive(re);
							(Y.icon.className = "quick-input-list-icon"),
								(Y.icon.style.backgroundImage = t.$vhb(le));
						} else
							(Y.icon.style.backgroundImage = ""),
								(Y.icon.className = ne.iconClass
									? `quick-input-list-icon ${ne.iconClass}`
									: "");
						let Q;
						!ie.saneTooltip &&
							ie.saneDescription &&
							(Q = {
								markdown: { value: ie.saneDescription, supportThemeIcons: !0 },
								markdownNotSupportedFallback: ie.saneDescription,
							});
						const Z = {
							matches: ee || [],
							descriptionTitle: Q,
							descriptionMatches: _ || [],
							labelEscapeNewLines: !0,
						};
						if (
							((Z.extraClasses = ne.iconClasses),
							(Z.italic = ne.italic),
							(Z.strikethrough = ne.strikethrough),
							Y.entry.classList.remove("quick-input-list-separator-as-item"),
							Y.label.setLabel(ie.saneLabel, ie.saneDescription, Z),
							Y.keybinding.set(ne.keybinding),
							ie.saneDetail)
						) {
							let re;
							ie.saneTooltip ||
								(re = {
									markdown: { value: ie.saneDetail, supportThemeIcons: !0 },
									markdownNotSupportedFallback: ie.saneDetail,
								}),
								(Y.detail.element.style.display = ""),
								Y.detail.setLabel(ie.saneDetail, void 0, {
									matches: te,
									title: re,
									labelEscapeNewLines: !0,
								});
						} else Y.detail.element.style.display = "none";
						this.g(ie, Y),
							ie.separator?.label
								? ((Y.separator.textContent = ie.separator.label),
									(Y.separator.style.display = ""),
									this.d(ie))
								: (Y.separator.style.display = "none"),
							Y.entry.classList.toggle(
								"quick-input-list-separator-border",
								!!ie.separator,
							);
						const se = ne.buttons;
						se && se.length
							? (Y.actionBar.push(
									se.map((re, le) =>
										(0, s.$sxc)(re, `id-${le}`, () =>
											ie.fireButtonTriggered({ button: re, item: ie.item }),
										),
									),
									{ icon: !0, label: !1 },
								),
								Y.entry.classList.add("has-actions"))
							: Y.entry.classList.remove("has-actions");
					}
					disposeElement(W, X, Y) {
						this.f(W.element), super.disposeElement(W, X, Y);
					}
					isItemWithSeparatorVisible(W) {
						return this.b.has(W);
					}
					d(W) {
						this.b.set(W, (this.b.get(W) || 0) + 1);
					}
					f(W) {
						const X = this.b.get(W) || 0;
						X > 1 ? this.b.set(W, X - 1) : this.b.delete(W);
					}
					g(W, X) {
						if (W.saneBreadcrumbPath) {
							t.$9fb(X.outlineBreadcrumbs),
								(X.outlineBreadcrumbs.style.display = "flex"),
								(X.outlineBreadcrumbs.style.alignItems = "center"),
								(X.outlineBreadcrumbs.style.fontSize = "12px"),
								(X.outlineBreadcrumbs.style.marginBottom = "4px"),
								(X.outlineBreadcrumbs.style.overflow = "hidden"),
								(X.outlineBreadcrumbs.style.whiteSpace = "nowrap"),
								(X.outlineBreadcrumbs.style.fontFamily =
									"var(--vscode-font-family)"),
								(X.outlineBreadcrumbs.style.width = "fit-content"),
								(X.outlineBreadcrumbs.style.paddingLeft = "1px"),
								(X.outlineBreadcrumbs.style.padding = "0px 10px");
							for (let Y = 0; Y < W.saneBreadcrumbPath.length; Y++) {
								const ie = W.saneBreadcrumbPath[Y],
									ne = Y === W.saneBreadcrumbPath.length - 1,
									ee = t.$fhb(X.outlineBreadcrumbs, N(".outline-item"));
								(ee.style.display = "inline-flex"),
									(ee.style.alignItems = "center"),
									(ee.style.justifyContent = "flex-end"),
									(ee.style.flexShrink = "0"),
									(ee.style.overflow = "hidden"),
									(ee.style.textOverflow = "ellipsis"),
									(ee.style.color = ne
										? "var(--vscode-editor-foreground)"
										: "var(--vscode-descriptionForeground)"),
									(ee.style.fontWeight = ne ? "500" : "normal"),
									(ee.style.cursor = "pointer"),
									(ee.style.padding = "0px 2px"),
									(ee.style.color = "auto");
								const _ = t.$fhb(ee, N(".icon"));
								(_.className = ie.className + " important"),
									(_.style.marginRight = "4px"),
									(_.style.fontSize = "14px");
								const te = t.$fhb(ee, N("span"));
								if (((te.textContent = ie.label), !ne)) {
									const Q = t.$fhb(X.outlineBreadcrumbs, N("span"));
									(Q.textContent = ">"),
										(Q.style.margin = "0 2px"),
										(Q.style.color = "var(--vscode-descriptionForeground)"),
										(Q.style.opacity = "0.6");
								}
							}
						} else X.outlineBreadcrumbs.style.display = "none";
					}
				};
				x = M = Ne([j(1, m.$iP)], x);
				class H extends F {
					constructor() {
						super(...arguments), (this.b = new Map());
					}
					static {
						this.ID = "quickpickseparator";
					}
					get templateId() {
						return H.ID;
					}
					get visibleSeparators() {
						return [...this.b.keys()];
					}
					isSeparatorVisible(W) {
						return this.b.has(W);
					}
					renderTemplate(W) {
						const X = super.renderTemplate(W);
						return (X.checkbox.style.display = "none"), X;
					}
					renderElement(W, X, Y) {
						const ie = W.element;
						(Y.element = ie),
							(ie.element = Y.entry ?? void 0),
							ie.element.classList.toggle(
								"focus-inside",
								!!ie.focusInsideSeparator,
							);
						const ne = ie.separator,
							{
								labelHighlights: ee,
								descriptionHighlights: _,
								detailHighlights: te,
							} = ie;
						(Y.icon.style.backgroundImage = ""), (Y.icon.className = "");
						let Q;
						!ie.saneTooltip &&
							ie.saneDescription &&
							(Q = {
								markdown: { value: ie.saneDescription, supportThemeIcons: !0 },
								markdownNotSupportedFallback: ie.saneDescription,
							});
						const Z = {
							matches: ee || [],
							descriptionTitle: Q,
							descriptionMatches: _ || [],
							labelEscapeNewLines: !0,
						};
						if (
							(Y.entry.classList.add("quick-input-list-separator-as-item"),
							Y.label.setLabel(ie.saneLabel, ie.saneDescription, Z),
							ie.saneDetail)
						) {
							let re;
							ie.saneTooltip ||
								(re = {
									markdown: { value: ie.saneDetail, supportThemeIcons: !0 },
									markdownNotSupportedFallback: ie.saneDetail,
								}),
								(Y.detail.element.style.display = ""),
								Y.detail.setLabel(ie.saneDetail, void 0, {
									matches: te,
									title: re,
									labelEscapeNewLines: !0,
								});
						} else Y.detail.element.style.display = "none";
						(Y.separator.style.display = "none"),
							Y.entry.classList.add("quick-input-list-separator-border");
						const se = ne.buttons;
						se && se.length
							? (Y.actionBar.push(
									se.map((re, le) =>
										(0, s.$sxc)(re, `id-${le}`, () =>
											ie.fireSeparatorButtonTriggered({
												button: re,
												separator: ie.separator,
											}),
										),
									),
									{ icon: !0, label: !1 },
								),
								Y.entry.classList.add("has-actions"))
							: Y.entry.classList.remove("has-actions"),
							this.c(ie);
					}
					disposeElement(W, X, Y) {
						this.d(W.element),
							this.isSeparatorVisible(W.element) ||
								W.element.element?.classList.remove("focus-inside"),
							super.disposeElement(W, X, Y);
					}
					c(W) {
						this.b.set(W, (this.b.get(W) || 0) + 1);
					}
					d(W) {
						const X = this.b.get(W) || 0;
						X > 1 ? this.b.set(W, X - 1) : this.b.delete(W);
					}
				}
				let q = class extends r.$1c {
					constructor(W, X, Y, ie, ne, ee) {
						super(),
							(this.M = W),
							(this.N = X),
							(this.O = Y),
							(this.P = ee),
							(this.a = new i.$re()),
							(this.onKeyDown = this.a.event),
							(this.b = new i.$re()),
							(this.onLeave = this.b.event),
							(this.c = (0, L.observableValue)("VisibleCount", 0)),
							(this.onChangedVisibleCount = i.Event.fromObservable(
								this.c,
								this.B,
							)),
							(this.f = (0, L.observableValue)("AllVisibleChecked", !1)),
							(this.onChangedAllVisibleChecked = i.Event.fromObservable(
								this.f,
								this.B,
							)),
							(this.g = (0, L.observableValue)("CheckedCount", 0)),
							(this.onChangedCheckedCount = i.Event.fromObservable(
								this.g,
								this.B,
							)),
							(this.h = (0, L.observableValueOpts)(
								{ equalsFn: D.$yb },
								new Array(),
							)),
							(this.onChangedCheckedElements = i.Event.fromObservable(
								this.h,
								this.B,
							)),
							(this.j = new i.$re()),
							(this.onButtonTriggered = this.j.event),
							(this.m = new i.$re()),
							(this.onSeparatorButtonTriggered = this.m.event),
							(this.q = new i.$re()),
							(this.r = new i.$ze()),
							(this.t = !1),
							(this.F = new Array()),
							(this.G = new Array()),
							(this.H = new Array()),
							(this.I = this.D(new r.$Zc())),
							(this.Q = !1),
							(this.R = !1),
							(this.S = !0),
							(this.U = "fuzzy"),
							(this.W = !0),
							(this.X = !0),
							(this.Y = !0),
							(this.u = t.$fhb(this.M, N(".quick-input-list"))),
							(this.z = new H(X)),
							(this.C = ne.createInstance(x, X)),
							(this.w = this.D(
								ne.createInstance(
									d.$CMb,
									"QuickInput",
									this.u,
									new U(),
									[this.C, this.z],
									{
										filter: {
											filter(_) {
												return _.hidden
													? w.TreeVisibility.Hidden
													: _ instanceof B
														? w.TreeVisibility.Recurse
														: w.TreeVisibility.Visible;
											},
										},
										sorter: {
											compare: (_, te) => {
												if (!this.sortByLabel || !this.L) return 0;
												const Q = this.L.toLowerCase();
												return K(_, te, Q);
											},
										},
										accessibilityProvider: new z(),
										setRowLineHeight: !1,
										multipleSelectionSupport: !1,
										hideTwistiesOfChildlessElements: !0,
										renderIndentGuides: I.RenderIndentGuides.None,
										findWidgetEnabled: !1,
										indent: 0,
										horizontalScrolling: !1,
										allowNonCollapsibleParents: !0,
										alwaysConsumeMouseWheel: !0,
									},
								),
							)),
							(this.w.getHTMLElement().id = ie),
							this.Z();
					}
					get onDidChangeFocus() {
						return i.Event.map(
							this.w.onDidChangeFocus,
							(W) =>
								W.elements.filter((X) => X instanceof R).map((X) => X.item),
							this.B,
						);
					}
					get onDidChangeSelection() {
						return i.Event.map(
							this.w.onDidChangeSelection,
							(W) => ({
								items: W.elements
									.filter((X) => X instanceof R)
									.map((X) => X.item),
								event: W.browserEvent,
							}),
							this.B,
						);
					}
					get displayed() {
						return this.u.style.display !== "none";
					}
					set displayed(W) {
						this.u.style.display = W ? "" : "none";
					}
					get scrollTop() {
						return this.w.scrollTop;
					}
					set scrollTop(W) {
						this.w.scrollTop = W;
					}
					get ariaLabel() {
						return this.w.ariaLabel;
					}
					set ariaLabel(W) {
						this.w.ariaLabel = W ?? "";
					}
					set enabled(W) {
						this.w.getHTMLElement().style.pointerEvents = W ? "" : "none";
					}
					get matchOnDescription() {
						return this.Q;
					}
					set matchOnDescription(W) {
						this.Q = W;
					}
					get matchOnDetail() {
						return this.R;
					}
					set matchOnDetail(W) {
						this.R = W;
					}
					get matchOnLabel() {
						return this.S;
					}
					set matchOnLabel(W) {
						this.S = W;
					}
					get matchOnLabelMode() {
						return this.U;
					}
					set matchOnLabelMode(W) {
						this.U = W;
					}
					get matchOnMeta() {
						return this.W;
					}
					set matchOnMeta(W) {
						this.W = W;
					}
					get sortByLabel() {
						return this.X;
					}
					set sortByLabel(W) {
						this.X = W;
					}
					get shouldLoop() {
						return this.Y;
					}
					set shouldLoop(W) {
						this.Y = W;
					}
					Z() {
						this.ab(),
							this.bb(),
							this.cb(),
							this.db(),
							this.eb(),
							this.fb(),
							this.gb(),
							this.ib(),
							this.hb();
					}
					ab() {
						this.D(
							this.w.onKeyDown((W) => {
								const X = new a.$7fb(W);
								switch (X.keyCode) {
									case h.KeyCode.Space:
										this.toggleCheckbox();
										break;
								}
								this.a.fire(X);
							}),
						);
					}
					bb() {
						this.D(
							t.$0fb(this.u, t.$$gb.CLICK, (W) => {
								(W.x || W.y) && this.b.fire();
							}),
						);
					}
					cb() {
						this.D(
							t.$0fb(this.u, t.$$gb.AUXCLICK, (W) => {
								W.button === 1 && this.b.fire();
							}),
						);
					}
					db() {
						this.D(
							this.w.onDidChangeModel(() => {
								const W = this.H.filter((X) => !X.hidden).length;
								this.c.set(W, void 0), this.t && this.lb();
							}),
						);
					}
					eb() {
						this.D(
							this.r.wrapEvent(this.q.event, (W, X) => X)((W) => this.lb()),
						);
					}
					fb() {
						this.D(
							this.w.onContextMenu((W) => {
								W.element &&
									(W.browserEvent.preventDefault(),
									this.w.setSelection([W.element]));
							}),
						);
					}
					gb() {
						const W = this.D(new T.$Kh(this.N.delay));
						this.D(
							this.w.onMouseOver(async (X) => {
								if (t.$Zgb(X.browserEvent.target)) {
									W.cancel();
									return;
								}
								if (
									!(
										!t.$Zgb(X.browserEvent.relatedTarget) &&
										t.$Bgb(X.browserEvent.relatedTarget, X.element?.element)
									)
								)
									try {
										await W.trigger(async () => {
											X.element instanceof R && this.mb(X.element);
										});
									} catch (Y) {
										if (!(0, P.$8)(Y)) throw Y;
									}
							}),
						),
							this.D(
								this.w.onMouseOut((X) => {
									t.$Bgb(X.browserEvent.relatedTarget, X.element?.element) ||
										W.cancel();
								}),
							);
					}
					hb() {
						this.D(
							this.w.onDidChangeFocus((W) => {
								const X = W.elements[0]
									? this.w.getParentElement(W.elements[0])
									: null;
								for (const Y of this.z.visibleSeparators) {
									const ie = Y === X;
									!!(Y.focusInsideSeparator & O.ACTIVE_ITEM) !== ie &&
										(ie
											? (Y.focusInsideSeparator |= O.ACTIVE_ITEM)
											: (Y.focusInsideSeparator &= ~O.ACTIVE_ITEM),
										this.w.rerender(Y));
								}
							}),
						),
							this.D(
								this.w.onMouseOver((W) => {
									const X = W.element
										? this.w.getParentElement(W.element)
										: null;
									for (const Y of this.z.visibleSeparators) {
										if (Y !== X) continue;
										!!(Y.focusInsideSeparator & O.MOUSE_HOVER) ||
											((Y.focusInsideSeparator |= O.MOUSE_HOVER),
											this.w.rerender(Y));
									}
								}),
							),
							this.D(
								this.w.onMouseOut((W) => {
									const X = W.element
										? this.w.getParentElement(W.element)
										: null;
									for (const Y of this.z.visibleSeparators) {
										if (Y !== X) continue;
										!!(Y.focusInsideSeparator & O.MOUSE_HOVER) &&
											((Y.focusInsideSeparator &= ~O.MOUSE_HOVER),
											this.w.rerender(Y));
									}
								}),
							);
					}
					ib() {
						this.D(
							this.w.onDidChangeSelection((W) => {
								const X = W.elements.filter((Y) => Y instanceof R);
								X.length !== W.elements.length &&
									(W.elements.length === 1 &&
										W.elements[0] instanceof B &&
										(this.w.setFocus([W.elements[0].children[0]]),
										this.w.reveal(W.elements[0], 0)),
									this.w.setSelection(X));
							}),
						);
					}
					setAllVisibleChecked(W) {
						this.r.bufferEvents(() => {
							this.H.forEach((X) => {
								!X.hidden && !X.checkboxDisabled && (X.checked = W);
							});
						});
					}
					setElements(W) {
						this.I.clear(),
							(this.L = void 0),
							(this.F = W),
							(this.t = this.M.classList.contains("show-checkboxes"));
						let X;
						(this.H = new Array()),
							(this.G = W.reduce((Y, ie, ne) => {
								let ee;
								if (ie.type === "separator") {
									if (!ie.buttons) return Y;
									(X = new B(ne, (_) => this.m.fire(_), ie)), (ee = X);
								} else {
									const _ = ne > 0 ? W[ne - 1] : void 0;
									let te;
									_ &&
										_.type === "separator" &&
										!_.buttons &&
										((X = void 0), (te = _));
									const Q = new R(
										ne,
										this.t,
										(Z) => this.j.fire(Z),
										this.q,
										ie,
										te,
									);
									if ((this.H.push(Q), X)) return X.children.push(Q), Y;
									ee = Q;
								}
								return Y.push(ee), Y;
							}, new Array())),
							this.jb(this.G),
							this.P.isScreenReaderOptimized() &&
								setTimeout(() => {
									const Y = this.w
											.getHTMLElement()
											.querySelector(".monaco-list-row.focused"),
										ie = Y?.parentNode;
									if (Y && ie) {
										const ne = Y.nextSibling;
										Y.remove(), ie.insertBefore(Y, ne);
									}
								}, 0);
					}
					setFocusedElements(W) {
						const X = W.map((Y) => this.H.find((ie) => ie.item === Y))
							.filter((Y) => !!Y)
							.filter((Y) => !Y.hidden);
						if ((this.w.setFocus(X), W.length > 0)) {
							const Y = this.w.getFocus()[0];
							Y && this.w.reveal(Y);
						}
					}
					getActiveDescendant() {
						return this.w
							.getHTMLElement()
							.getAttribute("aria-activedescendant");
					}
					setSelectedElements(W) {
						const X = W.map((Y) => this.H.find((ie) => ie.item === Y)).filter(
							(Y) => !!Y,
						);
						this.w.setSelection(X);
					}
					getCheckedElements() {
						return this.H.filter((W) => W.checked).map((W) => W.item);
					}
					setCheckedElements(W) {
						this.r.bufferEvents(() => {
							const X = new Set();
							for (const Y of W) X.add(Y);
							for (const Y of this.H) Y.checked = X.has(Y.item);
						});
					}
					focus(W) {
						if (this.H.length)
							switch (
								(W === u.QuickPickFocus.Second &&
									this.H.length < 2 &&
									(W = u.QuickPickFocus.First),
								W)
							) {
								case u.QuickPickFocus.First:
									(this.w.scrollTop = 0),
										this.w.focusFirst(void 0, (X) => X.element instanceof R);
									break;
								case u.QuickPickFocus.Second: {
									this.w.scrollTop = 0;
									let X = !1;
									this.w.focusFirst(void 0, (Y) =>
										Y.element instanceof R ? (X ? !0 : ((X = !X), !1)) : !1,
									);
									break;
								}
								case u.QuickPickFocus.Last:
									(this.w.scrollTop = this.w.scrollHeight),
										this.w.focusLast(void 0, (X) => X.element instanceof R);
									break;
								case u.QuickPickFocus.Next: {
									const X = this.w.getFocus();
									this.w.focusNext(void 0, this.Y, void 0, (ie) =>
										ie.element instanceof R
											? (this.w.reveal(ie.element), !0)
											: !1,
									);
									const Y = this.w.getFocus();
									X.length &&
										X[0] === Y[0] &&
										X[0] === this.H[this.H.length - 1] &&
										this.b.fire();
									break;
								}
								case u.QuickPickFocus.Previous: {
									const X = this.w.getFocus();
									this.w.focusPrevious(void 0, this.Y, void 0, (ie) => {
										if (!(ie.element instanceof R)) return !1;
										const ne = this.w.getParentElement(ie.element);
										return (
											ne === null || ne.children[0] !== ie.element
												? this.w.reveal(ie.element)
												: this.w.reveal(ne),
											!0
										);
									});
									const Y = this.w.getFocus();
									X.length &&
										X[0] === Y[0] &&
										X[0] === this.H[0] &&
										this.b.fire();
									break;
								}
								case u.QuickPickFocus.NextPage:
									this.w.focusNextPage(void 0, (X) =>
										X.element instanceof R
											? (this.w.reveal(X.element), !0)
											: !1,
									);
									break;
								case u.QuickPickFocus.PreviousPage:
									this.w.focusPreviousPage(void 0, (X) => {
										if (!(X.element instanceof R)) return !1;
										const Y = this.w.getParentElement(X.element);
										return (
											Y === null || Y.children[0] !== X.element
												? this.w.reveal(X.element)
												: this.w.reveal(Y),
											!0
										);
									});
									break;
								case u.QuickPickFocus.NextSeparator: {
									let X = !1;
									const Y = this.w.getFocus()[0];
									this.w.focusNext(void 0, !0, void 0, (ne) => {
										if (X) return !0;
										if (ne.element instanceof B)
											(X = !0),
												this.z.isSeparatorVisible(ne.element)
													? this.w.reveal(ne.element.children[0])
													: this.w.reveal(ne.element, 0);
										else if (ne.element instanceof R) {
											if (ne.element.separator)
												return (
													this.C.isItemWithSeparatorVisible(ne.element)
														? this.w.reveal(ne.element)
														: this.w.reveal(ne.element, 0),
													!0
												);
											if (ne.element === this.G[0])
												return this.w.reveal(ne.element, 0), !0;
										}
										return !1;
									});
									const ie = this.w.getFocus()[0];
									Y === ie &&
										((this.w.scrollTop = this.w.scrollHeight),
										this.w.focusLast(void 0, (ne) => ne.element instanceof R));
									break;
								}
								case u.QuickPickFocus.PreviousSeparator: {
									let X,
										Y = !!this.w.getFocus()[0]?.separator;
									this.w.focusPrevious(void 0, !0, void 0, (ie) => {
										if (ie.element instanceof B)
											Y
												? X ||
													(this.z.isSeparatorVisible(ie.element)
														? this.w.reveal(ie.element)
														: this.w.reveal(ie.element, 0),
													(X = ie.element.children[0]))
												: (Y = !0);
										else if (ie.element instanceof R && !X) {
											if (ie.element.separator)
												this.C.isItemWithSeparatorVisible(ie.element)
													? this.w.reveal(ie.element)
													: this.w.reveal(ie.element, 0),
													(X = ie.element);
											else if (ie.element === this.G[0])
												return this.w.reveal(ie.element, 0), !0;
										}
										return !1;
									}),
										X && this.w.setFocus([X]);
									break;
								}
							}
					}
					clearFocus() {
						this.w.setFocus([]);
					}
					domFocus() {
						this.w.domFocus();
					}
					layout(W) {
						(this.w.getHTMLElement().style.maxHeight = W
							? `${Math.floor(W / 44) * 44 + 6}px`
							: ""),
							this.w.layout();
					}
					filter(W) {
						if (((this.L = W), !(this.X || this.S || this.Q || this.R)))
							return this.w.layout(), !1;
						const X = W;
						if (
							((W = W.trim()),
							!W ||
								!(
									this.matchOnLabel ||
									this.matchOnDescription ||
									this.matchOnDetail
								))
						)
							this.H.forEach((Y) => {
								(Y.labelHighlights = void 0),
									(Y.descriptionHighlights = void 0),
									(Y.detailHighlights = void 0),
									(Y.hidden = !1);
								const ie = Y.index && this.F[Y.index - 1];
								Y.item &&
									(Y.separator =
										ie && ie.type === "separator" && !ie.buttons ? ie : void 0);
							});
						else {
							let Y;
							this.H.forEach((ie) => {
								let ne;
								this.matchOnLabelMode === "fuzzy"
									? (ne = this.matchOnLabel
											? ((0, y.$bl)(W, (0, y.$al)(ie.saneLabel)) ?? void 0)
											: void 0)
									: (ne = this.matchOnLabel
											? (V(X, (0, y.$al)(ie.saneLabel)) ?? void 0)
											: void 0);
								const ee = this.matchOnDescription
										? ((0, y.$bl)(W, (0, y.$al)(ie.saneDescription || "")) ??
											void 0)
										: void 0,
									_ = this.matchOnDetail
										? ((0, y.$bl)(W, (0, y.$al)(ie.saneDetail || "")) ?? void 0)
										: void 0;
								if (
									(ne || ee || _
										? ((ie.labelHighlights = ne),
											(ie.descriptionHighlights = ee),
											(ie.detailHighlights = _),
											(ie.hidden = !1))
										: ((ie.labelHighlights = void 0),
											(ie.descriptionHighlights = void 0),
											(ie.detailHighlights = void 0),
											(ie.hidden = ie.item ? !ie.item.alwaysShow : !0)),
									ie.item
										? (ie.separator = void 0)
										: ie.separator && (ie.hidden = !0),
									!this.sortByLabel)
								) {
									const te = (ie.index && this.F[ie.index - 1]) || void 0;
									te?.type === "separator" && !te.buttons && (Y = te),
										Y && !ie.hidden && ((ie.separator = Y), (Y = void 0));
								}
							});
						}
						return this.jb(this.X && W ? this.H : this.G), this.w.layout(), !0;
					}
					toggleCheckbox() {
						this.r.bufferEvents(() => {
							const W = this.w.getFocus().filter((Y) => Y instanceof R),
								X = this.kb(W);
							for (const Y of W) Y.checkboxDisabled || (Y.checked = !X);
						});
					}
					style(W) {
						this.w.style(W);
					}
					toggleHover() {
						const W = this.w.getFocus()[0];
						if (!W?.saneTooltip || !(W instanceof R)) return;
						if (this.J && !this.J.isDisposed) {
							this.J.dispose();
							return;
						}
						this.mb(W);
						const X = new r.$Zc();
						X.add(
							this.w.onDidChangeFocus((Y) => {
								Y.elements[0] instanceof R && this.mb(Y.elements[0]);
							}),
						),
							this.J && X.add(this.J),
							this.I.add(X);
					}
					jb(W) {
						const X = new Array();
						for (const Y of W)
							Y instanceof B
								? X.push({
										element: Y,
										collapsible: !1,
										collapsed: !1,
										children: Y.children.map((ie) => ({
											element: ie,
											collapsible: !1,
											collapsed: !1,
										})),
									})
								: X.push({ element: Y, collapsible: !1, collapsed: !1 });
						this.w.setChildren(null, X);
					}
					kb(W, X = !0) {
						for (let Y = 0, ie = W.length; Y < ie; Y++) {
							const ne = W[Y];
							if (!ne.hidden)
								if (ne.checked) X = !0;
								else return !1;
						}
						return X;
					}
					lb() {
						(0, L.transaction)((W) => {
							this.f.set(this.kb(this.H, !1), W);
							const X = this.H.filter((Y) => Y.checked).length;
							this.g.set(X, W), this.h.set(this.getCheckedElements(), W);
						});
					}
					mb(W) {
						this.J &&
							!this.J.isDisposed &&
							(this.N.onDidHideHover?.(), this.J?.dispose()),
							!(!W.element || !W.saneTooltip) &&
								(this.J = this.N.showHover(
									{
										content: W.saneTooltip,
										target: W.element,
										linkHandler: (X) => {
											this.O(X);
										},
										appearance: { showPointer: !0 },
										container: this.u,
										position: { hoverPosition: $.HoverPosition.RIGHT },
									},
									!1,
								));
					}
					getItemElement(W) {
						return this.H.find((Y) => Y.item === W)?.element;
					}
				};
				(e.$uxc = q),
					Ne([n.$ei], q.prototype, "onDidChangeFocus", null),
					Ne([n.$ei], q.prototype, "onDidChangeSelection", null),
					(e.$uxc = q = Ne([j(4, C.$Li), j(5, k.$XK)], q));
				function V(J, W) {
					const { text: X, iconOffsets: Y } = W;
					if (!Y || Y.length === 0) return G(J, X);
					const ie = (0, S.$tf)(X, " "),
						ne = X.length - ie.length,
						ee = G(J, ie);
					if (ee)
						for (const _ of ee) {
							const te = Y[_.start + ne] + ne;
							(_.start += te), (_.end += te);
						}
					return ee;
				}
				function G(J, W) {
					const X = W.toLowerCase().indexOf(J.toLowerCase());
					return X !== -1 ? [{ start: X, end: X + J.length }] : null;
				}
				function K(J, W, X) {
					const Y = J.labelHighlights || [],
						ie = W.labelHighlights || [];
					return Y.length && !ie.length
						? -1
						: !Y.length && ie.length
							? 1
							: Y.length === 0 && ie.length === 0
								? 0
								: (0, v.$bs)(J.saneSortLabel, W.saneSortLabel, X);
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	