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
		