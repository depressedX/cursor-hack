define(
			de[1049],
			he([
				1, 0, 7, 159, 105, 95, 325, 292, 279, 50, 24, 15, 14, 94, 27, 3, 19, 26,
				210, 56, 61, 4, 92, 11, 10, 8, 49, 116, 72, 5, 39, 73, 93, 41, 63, 32,
				106, 35, 146, 60, 352, 112, 300, 797, 18, 40, 89,
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
			) {
				"use strict";
				var J, W, X, Y;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mGc = void 0),
					(e.$lGc = _),
					(e.$nGc = fe),
					(e.$oGc = me),
					(t = mt(t)),
					(p = mt(p)),
					(F = mt(F));
				const ie = t.$;
				function ne(ge) {
					const be = ie("input");
					return (
						(be.type = "checkbox"),
						(be.tabIndex = -1),
						ge.push(i.$Qhb.ignoreTarget(be)),
						be
					);
				}
				const ee = 9;
				function _(ge, be, Ce) {
					const Le =
						ge.getBreakpoints().length +
						ge.getExceptionBreakpointsForSession(be).length +
						ge.getFunctionBreakpoints().length +
						ge.getDataBreakpoints().length +
						ge.getInstructionBreakpoints().length;
					return Math.min(Ce, Le) * 22;
				}
				let te = class extends U.$TMb {
					constructor(
						be,
						Ce,
						Le,
						Fe,
						Oe,
						xe,
						He,
						Ke,
						Je,
						Te,
						Ee,
						Ie,
						Be,
						Se,
						ke,
						Ue,
						qe,
					) {
						super(be, Fe, Ce, Je, Ee, Te, Oe, Ie, xe, Be, Ue),
							(this.cc = Le),
							(this.dc = He),
							(this.ec = Ke),
							(this.fc = Se),
							(this.Hb = Ue),
							(this.hc = qe),
							(this.b = !1),
							(this.c = !1),
							(this.f = !1),
							(this.L = -1),
							(this.g = ke.createMenu($.$XX.DebugBreakpointsContext, Ee)),
							this.D(this.g),
							(this.h = x.$k5.bindTo(Ee)),
							(this.j = x.$l5.bindTo(Ee)),
							(this.m = x.$m5.bindTo(Ee)),
							(this.s = x.$n5.bindTo(Ee)),
							(this.breakpointInputFocused = x.$d5.bindTo(Ee)),
							this.D(
								this.cc.getModel().onDidChangeBreakpoints(() => this.oc()),
							),
							this.D(this.cc.getViewModel().onDidFocusSession(() => this.oc())),
							this.D(this.cc.onDidChangeState(() => this.pc())),
							(this.sb = this.D(new a.$Yh(() => this.nc(!0), 4e3)));
					}
					W(be) {
						super.W(be),
							this.element.classList.add("debug-pane"),
							be.classList.add("debug-breakpoints");
						const Ce = new Q(this);
						(this.a = this.Db.createInstance(
							M.$yMb,
							"Breakpoints",
							be,
							Ce,
							[
								this.Db.createInstance(se, this.g, this.m, this.s, this.h),
								new re(this.g, this.m, this.s, this.h, this.cc, this.Hb),
								new ye(this, this.cc, this.ec),
								this.Db.createInstance(le, this.g, this.s, this.h),
								new pe(this, this.cc, this.ec, this.Hb, this.fc),
								this.Db.createInstance(
									oe,
									this.g,
									this.m,
									this.s,
									this.h,
									this.j,
								),
								new $e(this, this.cc, this.ec, this.Hb, this.fc),
								this.Db.createInstance(ae),
							],
							{
								identityProvider: { getId: (Fe) => Fe.getId() },
								multipleSelectionSupport: !1,
								keyboardNavigationLabelProvider: {
									getKeyboardNavigationLabel: (Fe) => Fe,
								},
								accessibilityProvider: new ue(this.cc, this.fc),
								overrideStyles: this.Zb().listOverrideStyles,
							},
						)),
							x.$$4.bindTo(this.a.contextKeyService),
							this.D(this.a.onContextMenu(this.lc, this)),
							this.a.onMouseMiddleClick(async ({ element: Fe }) => {
								Fe instanceof H.$T3
									? await this.cc.removeBreakpoints(Fe.getId())
									: Fe instanceof H.$U3
										? await this.cc.removeFunctionBreakpoints(Fe.getId())
										: Fe instanceof H.$V3
											? await this.cc.removeDataBreakpoints(Fe.getId())
											: Fe instanceof H.$X3 &&
												(await this.cc.removeInstructionBreakpoints(
													Fe.instructionReference,
													Fe.offset,
												));
							}),
							this.D(
								this.a.onDidOpen(async (Fe) => {
									Fe.element &&
										((t.$7gb(Fe.browserEvent) &&
											Fe.browserEvent.button === 1) ||
											(Fe.element instanceof H.$T3 &&
												fe(
													Fe.element,
													Fe.sideBySide,
													Fe.editorOptions.preserveFocus || !1,
													Fe.editorOptions.pinned ||
														!Fe.editorOptions.preserveFocus,
													this.cc,
													this.dc,
												),
											Fe.element instanceof H.$X3 &&
												(
													await this.dc.openEditor(q.$G3.instance)
												).goToInstructionAndOffset(
													Fe.element.instructionReference,
													Fe.element.offset,
													t.$7gb(Fe.browserEvent) &&
														Fe.browserEvent.detail === 2,
												),
											t.$7gb(Fe.browserEvent) &&
												Fe.browserEvent.detail === 2 &&
												Fe.element instanceof H.$U3 &&
												Fe.element !== this.inputBoxData?.breakpoint &&
												this.renderInputBox({
													breakpoint: Fe.element,
													type: "name",
												})));
								}),
							),
							this.a.splice(0, this.a.length, this.qc),
							this.D(
								this.onDidChangeBodyVisibility((Fe) => {
									Fe && (this.b && this.oc(), this.c && this.pc());
								}),
							);
						const Le = this.Cb.getViewContainerModel(
							this.Cb.getViewContainerByViewId(this.id),
						);
						this.D(
							Le.onDidChangeAllViewDescriptors(() => {
								this.mc();
							}),
						);
					}
					Qb(be, Ce) {
						super.Qb(be, Ce);
						const Le = t.$fhb(be, ie("span.breakpoint-warning"));
						(this.ab = this.D(
							new C.$Xob(Le, {
								supportIcons: !0,
								hoverDelegate: {
									showHover: (Fe, Oe) =>
										this.Hb.showHover(
											{ content: Fe.content, target: this.ab.element },
											Oe,
										),
									delay: this.Ab.getValue("workbench.hover.delay"),
								},
							}),
						)),
							t.hide(this.ab.element);
					}
					focus() {
						super.focus(), this.a?.domFocus();
					}
					renderInputBox(be) {
						(this.t = be), this.oc(), (this.t = void 0);
					}
					get inputBoxData() {
						return this.t;
					}
					X(be, Ce) {
						if (!this.f) {
							super.X(be, Ce), this.a?.layout(be, Ce);
							try {
								(this.f = !0), this.mc();
							} finally {
								this.f = !1;
							}
						}
					}
					lc(be) {
						const Ce = be.element,
							Le =
								Ce instanceof H.$T3
									? "breakpoint"
									: Ce instanceof H.$W3
										? "exceptionBreakpoint"
										: Ce instanceof H.$U3
											? "functionBreakpoint"
											: Ce instanceof H.$V3
												? "dataBreakpoint"
												: Ce instanceof H.$X3
													? "instructionBreakpoint"
													: void 0;
						this.h.set(Le);
						const Fe = this.cc.getViewModel().focusedSession,
							Oe =
								Ce instanceof H.$W3
									? Ce.supportsCondition
									: !Fe || !!Fe.capabilities.supportsConditionalBreakpoints;
						this.s.set(Oe),
							this.j.set(
								Ce instanceof H.$V3 &&
									Ce.src.type === x.DataBreakpointSetType.Address,
							);
						const xe = [];
						(0, y.$Jyb)(
							this.g,
							{ arg: be.element, shouldForwardArgs: !1 },
							{ primary: [], secondary: xe },
							"inline",
						),
							this.zb.showContextMenu({
								getAnchor: () => be.anchor,
								getActions: () => xe,
								getActionsContext: () => Ce,
							});
					}
					mc() {
						const be = this.Cb.getViewContainerModel(
								this.Cb.getViewContainerByViewId(this.id),
							),
							Ce = this.cc.getViewModel().focusedSession?.getId();
						(this.minimumBodySize =
							this.orientation === m.Orientation.VERTICAL
								? _(this.cc.getModel(), Ce, ee)
								: 170),
							(this.maximumBodySize =
								this.orientation === m.Orientation.VERTICAL &&
								be.visibleViewDescriptors.length > 1
									? _(this.cc.getModel(), Ce, Number.POSITIVE_INFINITY)
									: Number.POSITIVE_INFINITY);
					}
					nc(be = !1) {
						if (!this.ab) return;
						const Ce =
								this.cc.getViewModel().focusedSession?.configuration.type,
							Le = Ce ? this.cc.getAdapterManager().getDebugger(Ce) : void 0,
							Fe = Le?.strings?.[x.DebuggerString.UnverifiedBreakpoints],
							Oe =
								Fe &&
								this.cc
									.getModel()
									.getBreakpoints()
									.filter((xe) => {
										if (xe.verified || !xe.enabled) return !1;
										const He = this.hc.guessLanguageIdByFilepathOrFirstLine(
											xe.uri,
										);
										return He && Le.interestedInLanguage(He);
									});
						if (
							Fe &&
							Oe?.length &&
							this.cc.getModel().areBreakpointsActivated()
						)
							if (be) {
								const xe = new c.$cl(void 0, { isTrusted: !0 }).appendMarkdown(
									Fe,
								);
								this.ab.setLabel("$(warning)", void 0, {
									title: { markdown: xe, markdownNotSupportedFallback: Fe },
								}),
									t.show(this.ab.element);
							} else this.sb.schedule();
						else t.hide(this.ab.element);
					}
					oc() {
						if (this.isBodyVisible()) {
							if ((this.mc(), this.a)) {
								const be = this.a.getFocus()[0],
									Ce = be && !this.qc.includes(this.a.element(be));
								this.a.splice(0, this.a.length, this.qc),
									(this.b = !1),
									Ce && this.a.focusNth(Math.min(be, this.a.length - 1));
							}
							this.nc();
						} else this.b = !0;
					}
					pc() {
						if (this.isBodyVisible()) {
							this.c = !1;
							const be = this.cc.getViewModel().focusedThread;
							let Ce = !1;
							if (
								be &&
								be.stoppedDetails &&
								be.stoppedDetails.hitBreakpointIds &&
								be.stoppedDetails.hitBreakpointIds.length > 0
							) {
								const Le = be.stoppedDetails.hitBreakpointIds,
									Oe = this.qc.findIndex((xe) => {
										const He = xe.getIdFromAdapter(be.session.getId());
										return typeof He == "number" && Le.indexOf(He) !== -1;
									});
								Oe >= 0 &&
									(this.a.setFocus([Oe]),
									this.a.setSelection([Oe]),
									(Ce = !0),
									(this.L = Oe));
							}
							if (!Ce) {
								const Le = this.a.getFocus(),
									Fe = this.a.getSelection();
								this.L >= 0 &&
									(0, u.$yb)(Le, Fe) &&
									Le.indexOf(this.L) >= 0 &&
									(this.a.setFocus([]), this.a.setSelection([])),
									(this.L = -1);
							}
							this.nc();
						} else this.c = !0;
					}
					get qc() {
						const be = this.cc.getModel(),
							Ce = this.cc.getViewModel().focusedSession?.getId();
						return be
							.getExceptionBreakpointsForSession(Ce)
							.concat(be.getFunctionBreakpoints())
							.concat(be.getDataBreakpoints())
							.concat(be.getBreakpoints())
							.concat(be.getInstructionBreakpoints());
					}
				};
				(e.$mGc = te),
					(e.$mGc = te =
						Ne(
							[
								j(1, I.$Xxb),
								j(2, x.$75),
								j(3, L.$uZ),
								j(4, k.$Li),
								j(5, B.$iP),
								j(6, V.$IY),
								j(7, I.$Wxb),
								j(8, v.$gj),
								j(9, z.$K1),
								j(10, S.$6j),
								j(11, N.$7rb),
								j(12, R.$km),
								j(13, D.$3N),
								j(14, $.$YX),
								j(15, P.$Uyb),
								j(16, s.$nM),
							],
							te,
						));
				class Q {
					constructor(be) {
						this.a = be;
					}
					getHeight(be) {
						return 22;
					}
					getTemplateId(be) {
						if (be instanceof H.$T3) return se.ID;
						if (be instanceof H.$U3) {
							const Ce = this.a.inputBoxData?.breakpoint;
							return !be.name || (Ce && Ce.getId() === be.getId())
								? pe.ID
								: le.ID;
						}
						if (be instanceof H.$W3) {
							const Ce = this.a.inputBoxData?.breakpoint;
							return Ce && Ce.getId() === be.getId() ? ye.ID : re.ID;
						}
						if (be instanceof H.$V3) {
							const Ce = this.a.inputBoxData?.breakpoint;
							return Ce && Ce.getId() === be.getId() ? $e.ID : oe.ID;
						}
						return be instanceof H.$X3 ? ae.ID : "";
					}
				}
				const Z = new Map();
				let se = class {
					static {
						J = this;
					}
					constructor(be, Ce, Le, Fe, Oe, xe, He) {
						(this.a = be),
							(this.b = Ce),
							(this.c = Le),
							(this.d = Fe),
							(this.f = Oe),
							(this.g = xe),
							(this.h = He);
					}
					static {
						this.ID = "breakpoints";
					}
					get templateId() {
						return J.ID;
					}
					renderTemplate(be) {
						const Ce = Object.create(null);
						(Ce.toDispose = []),
							(Ce.breakpoint = t.$fhb(be, ie(".breakpoint"))),
							(Ce.icon = ie(".icon")),
							(Ce.checkbox = ne(Ce.toDispose)),
							Ce.toDispose.push(
								t.$$fb(Ce.checkbox, "change", (Fe) => {
									this.f.enableOrDisableBreakpoints(
										!Ce.context.enabled,
										Ce.context,
									);
								}),
							),
							t.$fhb(Ce.breakpoint, Ce.icon),
							t.$fhb(Ce.breakpoint, Ce.checkbox),
							(Ce.name = t.$fhb(Ce.breakpoint, ie("span.name"))),
							(Ce.filePath = t.$fhb(Ce.breakpoint, ie("span.file-path"))),
							(Ce.actionBar = new w.$eib(Ce.breakpoint)),
							Ce.toDispose.push(Ce.actionBar);
						const Le = t.$fhb(Ce.breakpoint, ie(".badge-container"));
						return (
							(Ce.badge = t.$fhb(
								Le,
								ie("span.line-number.monaco-count-badge"),
							)),
							Ce
						);
					}
					renderElement(be, Ce, Le) {
						(Le.context = be),
							Le.breakpoint.classList.toggle(
								"disabled",
								!this.f.getModel().areBreakpointsActivated(),
							),
							(Le.name.textContent = p.$jh(be.uri));
						let Fe = be.lineNumber.toString();
						be.column && (Fe += `:${be.column}`),
							be.modeLabel && (Fe = `${be.modeLabel}: ${Fe}`),
							(Le.badge.textContent = Fe),
							(Le.filePath.textContent = this.h.getUriLabel(p.$mh(be.uri), {
								relative: !0,
							})),
							(Le.checkbox.checked = be.enabled);
						const { message: Oe, icon: xe } = me(
							this.f.state,
							this.f.getModel().areBreakpointsActivated(),
							be,
							this.h,
							this.f.getModel(),
						);
						(Le.icon.className = o.ThemeIcon.asClassName(xe)),
							Le.toDispose.push(
								this.g.setupManagedHover(
									(0, E.$cib)("mouse"),
									Le.breakpoint,
									be.message || Oe || "",
								),
							),
							(this.f.state === x.State.Running ||
								this.f.state === x.State.Stopped) &&
								!be.verified &&
								Le.breakpoint.classList.add("disabled");
						const Ke = [],
							Je = this.f.getViewModel().focusedSession;
						this.c.set(!Je || !!Je.capabilities.supportsConditionalBreakpoints),
							this.d.set("breakpoint"),
							this.b.set(
								this.f.getModel().getBreakpointModes("source").length > 1,
							),
							(0, y.$Kyb)(
								this.a,
								{ arg: be, shouldForwardArgs: !0 },
								{ primary: Ke, secondary: [] },
								"inline",
							),
							Le.actionBar.clear(),
							Le.actionBar.push(Ke, { icon: !0, label: !1 }),
							Z.set(be.getId(), Le.actionBar.domNode);
					}
					disposeTemplate(be) {
						(0, g.$Vc)(be.toDispose);
					}
				};
				se = J = Ne([j(4, x.$75), j(5, P.$Uyb), j(6, D.$3N)], se);
				class re {
					constructor(be, Ce, Le, Fe, Oe, xe) {
						(this.a = be),
							(this.b = Ce),
							(this.c = Le),
							(this.d = Fe),
							(this.f = Oe),
							(this.g = xe);
					}
					static {
						this.ID = "exceptionbreakpoints";
					}
					get templateId() {
						return re.ID;
					}
					renderTemplate(be) {
						const Ce = Object.create(null);
						(Ce.toDispose = []),
							(Ce.breakpoint = t.$fhb(be, ie(".breakpoint"))),
							(Ce.checkbox = ne(Ce.toDispose)),
							Ce.toDispose.push(
								t.$$fb(Ce.checkbox, "change", (Fe) => {
									this.f.enableOrDisableBreakpoints(
										!Ce.context.enabled,
										Ce.context,
									);
								}),
							),
							t.$fhb(Ce.breakpoint, Ce.checkbox),
							(Ce.name = t.$fhb(Ce.breakpoint, ie("span.name"))),
							(Ce.condition = t.$fhb(Ce.breakpoint, ie("span.condition"))),
							Ce.breakpoint.classList.add("exception"),
							(Ce.actionBar = new w.$eib(Ce.breakpoint)),
							Ce.toDispose.push(Ce.actionBar);
						const Le = t.$fhb(Ce.breakpoint, ie(".badge-container"));
						return (
							(Ce.badge = t.$fhb(
								Le,
								ie("span.line-number.monaco-count-badge"),
							)),
							Ce
						);
					}
					renderElement(be, Ce, Le) {
						(Le.context = be),
							(Le.name.textContent = be.label || `${be.filter} exceptions`);
						const Fe = be.verified
							? be.description || Le.name.textContent
							: be.message || (0, l.localize)(5180, null);
						Le.toDispose.push(
							this.g.setupManagedHover((0, E.$cib)("mouse"), Le.breakpoint, Fe),
						),
							Le.breakpoint.classList.toggle("disabled", !be.verified),
							(Le.checkbox.checked = be.enabled),
							(Le.condition.textContent = be.condition || ""),
							Le.toDispose.push(
								this.g.setupManagedHover(
									(0, E.$cib)("mouse"),
									Le.condition,
									(0, l.localize)(5181, null, be.condition),
								),
							),
							be.modeLabel
								? ((Le.badge.textContent = be.modeLabel),
									(Le.badge.style.display = "block"))
								: (Le.badge.style.display = "none");
						const Oe = [];
						this.c.set(be.supportsCondition),
							this.d.set("exceptionBreakpoint"),
							this.b.set(
								this.f.getModel().getBreakpointModes("exception").length > 1,
							),
							(0, y.$Kyb)(
								this.a,
								{ arg: be, shouldForwardArgs: !0 },
								{ primary: Oe, secondary: [] },
								"inline",
							),
							Le.actionBar.clear(),
							Le.actionBar.push(Oe, { icon: !0, label: !1 }),
							Z.set(be.getId(), Le.actionBar.domNode);
					}
					disposeTemplate(be) {
						(0, g.$Vc)(be.toDispose);
					}
				}
				let le = class {
					static {
						W = this;
					}
					constructor(be, Ce, Le, Fe, Oe, xe) {
						(this.a = be),
							(this.b = Ce),
							(this.c = Le),
							(this.d = Fe),
							(this.f = Oe),
							(this.g = xe);
					}
					static {
						this.ID = "functionbreakpoints";
					}
					get templateId() {
						return W.ID;
					}
					renderTemplate(be) {
						const Ce = Object.create(null);
						(Ce.toDispose = []),
							(Ce.breakpoint = t.$fhb(be, ie(".breakpoint"))),
							(Ce.icon = ie(".icon")),
							(Ce.checkbox = ne(Ce.toDispose)),
							Ce.toDispose.push(
								t.$$fb(Ce.checkbox, "change", (Fe) => {
									this.d.enableOrDisableBreakpoints(
										!Ce.context.enabled,
										Ce.context,
									);
								}),
							),
							t.$fhb(Ce.breakpoint, Ce.icon),
							t.$fhb(Ce.breakpoint, Ce.checkbox),
							(Ce.name = t.$fhb(Ce.breakpoint, ie("span.name"))),
							(Ce.condition = t.$fhb(Ce.breakpoint, ie("span.condition"))),
							(Ce.actionBar = new w.$eib(Ce.breakpoint)),
							Ce.toDispose.push(Ce.actionBar);
						const Le = t.$fhb(Ce.breakpoint, ie(".badge-container"));
						return (
							(Ce.badge = t.$fhb(
								Le,
								ie("span.line-number.monaco-count-badge"),
							)),
							Ce
						);
					}
					renderElement(be, Ce, Le) {
						(Le.context = be), (Le.name.textContent = be.name);
						const { icon: Fe, message: Oe } = me(
							this.d.state,
							this.d.getModel().areBreakpointsActivated(),
							be,
							this.g,
							this.d.getModel(),
						);
						(Le.icon.className = o.ThemeIcon.asClassName(Fe)),
							Le.toDispose.push(
								this.f.setupManagedHover(
									(0, E.$cib)("mouse"),
									Le.icon,
									Oe || "",
								),
							),
							(Le.checkbox.checked = be.enabled),
							Le.toDispose.push(
								this.f.setupManagedHover(
									(0, E.$cib)("mouse"),
									Le.breakpoint,
									Oe || "",
								),
							),
							be.condition && be.hitCondition
								? (Le.condition.textContent = (0, l.localize)(
										5182,
										null,
										be.condition,
										be.hitCondition,
									))
								: (Le.condition.textContent =
										be.condition || be.hitCondition || ""),
							be.modeLabel
								? ((Le.badge.textContent = be.modeLabel),
									(Le.badge.style.display = "block"))
								: (Le.badge.style.display = "none");
						const xe = this.d.getViewModel().focusedSession;
						Le.breakpoint.classList.toggle(
							"disabled",
							(xe && !xe.capabilities.supportsFunctionBreakpoints) ||
								!this.d.getModel().areBreakpointsActivated(),
						),
							xe &&
								!xe.capabilities.supportsFunctionBreakpoints &&
								Le.toDispose.push(
									this.f.setupManagedHover(
										(0, E.$cib)("mouse"),
										Le.breakpoint,
										(0, l.localize)(5183, null),
									),
								);
						const He = [];
						this.b.set(!xe || !!xe.capabilities.supportsConditionalBreakpoints),
							this.c.set("functionBreakpoint"),
							(0, y.$Kyb)(
								this.a,
								{ arg: be, shouldForwardArgs: !0 },
								{ primary: He, secondary: [] },
								"inline",
							),
							Le.actionBar.clear(),
							Le.actionBar.push(He, { icon: !0, label: !1 }),
							Z.set(be.getId(), Le.actionBar.domNode);
					}
					disposeTemplate(be) {
						(0, g.$Vc)(be.toDispose);
					}
				};
				le = W = Ne([j(3, x.$75), j(4, P.$Uyb), j(5, D.$3N)], le);
				let oe = class {
					static {
						X = this;
					}
					constructor(be, Ce, Le, Fe, Oe, xe, He, Ke) {
						(this.a = be),
							(this.b = Ce),
							(this.c = Le),
							(this.d = Fe),
							(this.f = Oe),
							(this.g = xe),
							(this.h = He),
							(this.i = Ke);
					}
					static {
						this.ID = "databreakpoints";
					}
					get templateId() {
						return X.ID;
					}
					renderTemplate(be) {
						const Ce = Object.create(null);
						(Ce.breakpoint = t.$fhb(be, ie(".breakpoint"))),
							(Ce.toDispose = []),
							(Ce.icon = ie(".icon")),
							(Ce.checkbox = ne(Ce.toDispose)),
							Ce.toDispose.push(
								t.$$fb(Ce.checkbox, "change", (Fe) => {
									this.g.enableOrDisableBreakpoints(
										!Ce.context.enabled,
										Ce.context,
									);
								}),
							),
							t.$fhb(Ce.breakpoint, Ce.icon),
							t.$fhb(Ce.breakpoint, Ce.checkbox),
							(Ce.name = t.$fhb(Ce.breakpoint, ie("span.name"))),
							(Ce.accessType = t.$fhb(Ce.breakpoint, ie("span.access-type"))),
							(Ce.condition = t.$fhb(Ce.breakpoint, ie("span.condition"))),
							(Ce.actionBar = new w.$eib(Ce.breakpoint)),
							Ce.toDispose.push(Ce.actionBar);
						const Le = t.$fhb(Ce.breakpoint, ie(".badge-container"));
						return (
							(Ce.badge = t.$fhb(
								Le,
								ie("span.line-number.monaco-count-badge"),
							)),
							Ce
						);
					}
					renderElement(be, Ce, Le) {
						(Le.context = be), (Le.name.textContent = be.description);
						const { icon: Fe, message: Oe } = me(
							this.g.state,
							this.g.getModel().areBreakpointsActivated(),
							be,
							this.i,
							this.g.getModel(),
						);
						(Le.icon.className = o.ThemeIcon.asClassName(Fe)),
							Le.toDispose.push(
								this.h.setupManagedHover(
									(0, E.$cib)("mouse"),
									Le.icon,
									Oe || "",
								),
							),
							(Le.checkbox.checked = be.enabled),
							Le.toDispose.push(
								this.h.setupManagedHover(
									(0, E.$cib)("mouse"),
									Le.breakpoint,
									Oe || "",
								),
							),
							be.modeLabel
								? ((Le.badge.textContent = be.modeLabel),
									(Le.badge.style.display = "block"))
								: (Le.badge.style.display = "none");
						const xe = this.g.getViewModel().focusedSession;
						if (
							(Le.breakpoint.classList.toggle(
								"disabled",
								(xe && !xe.capabilities.supportsDataBreakpoints) ||
									!this.g.getModel().areBreakpointsActivated(),
							),
							xe &&
								!xe.capabilities.supportsDataBreakpoints &&
								Le.toDispose.push(
									this.h.setupManagedHover(
										(0, E.$cib)("mouse"),
										Le.breakpoint,
										(0, l.localize)(5184, null),
									),
								),
							be.accessType)
						) {
							const Ke =
								be.accessType === "read"
									? (0, l.localize)(5185, null)
									: be.accessType === "write"
										? (0, l.localize)(5186, null)
										: (0, l.localize)(5187, null);
							Le.accessType.textContent = Ke;
						} else Le.accessType.textContent = "";
						be.condition && be.hitCondition
							? (Le.condition.textContent = (0, l.localize)(
									5188,
									null,
									be.condition,
									be.hitCondition,
								))
							: (Le.condition.textContent =
									be.condition || be.hitCondition || "");
						const He = [];
						this.c.set(!xe || !!xe.capabilities.supportsConditionalBreakpoints),
							this.b.set(
								this.g.getModel().getBreakpointModes("data").length > 1,
							),
							this.d.set("dataBreakpoint"),
							this.f.set(be.src.type === x.DataBreakpointSetType.Address),
							(0, y.$Kyb)(
								this.a,
								{ arg: be, shouldForwardArgs: !0 },
								{ primary: He, secondary: [] },
								"inline",
							),
							Le.actionBar.clear(),
							Le.actionBar.push(He, { icon: !0, label: !1 }),
							Z.set(be.getId(), Le.actionBar.domNode),
							this.f.reset();
					}
					disposeTemplate(be) {
						(0, g.$Vc)(be.toDispose);
					}
				};
				oe = X = Ne([j(5, x.$75), j(6, P.$Uyb), j(7, D.$3N)], oe);
				let ae = class {
					static {
						Y = this;
					}
					constructor(be, Ce, Le) {
						(this.a = be), (this.b = Ce), (this.c = Le);
					}
					static {
						this.ID = "instructionBreakpoints";
					}
					get templateId() {
						return Y.ID;
					}
					renderTemplate(be) {
						const Ce = Object.create(null);
						(Ce.toDispose = []),
							(Ce.breakpoint = t.$fhb(be, ie(".breakpoint"))),
							(Ce.icon = ie(".icon")),
							(Ce.checkbox = ne(Ce.toDispose)),
							Ce.toDispose.push(
								t.$$fb(Ce.checkbox, "change", (Fe) => {
									this.a.enableOrDisableBreakpoints(
										!Ce.context.enabled,
										Ce.context,
									);
								}),
							),
							t.$fhb(Ce.breakpoint, Ce.icon),
							t.$fhb(Ce.breakpoint, Ce.checkbox),
							(Ce.name = t.$fhb(Ce.breakpoint, ie("span.name"))),
							(Ce.address = t.$fhb(Ce.breakpoint, ie("span.file-path"))),
							(Ce.actionBar = new w.$eib(Ce.breakpoint)),
							Ce.toDispose.push(Ce.actionBar);
						const Le = t.$fhb(Ce.breakpoint, ie(".badge-container"));
						return (
							(Ce.badge = t.$fhb(
								Le,
								ie("span.line-number.monaco-count-badge"),
							)),
							Ce
						);
					}
					renderElement(be, Ce, Le) {
						(Le.context = be),
							Le.breakpoint.classList.toggle(
								"disabled",
								!this.a.getModel().areBreakpointsActivated(),
							),
							(Le.name.textContent = "0x" + be.address.toString(16)),
							Le.toDispose.push(
								this.b.setupManagedHover(
									(0, E.$cib)("mouse"),
									Le.name,
									"Decimal address: breakpoint.address.toString()",
								),
							),
							(Le.checkbox.checked = be.enabled);
						const { message: Fe, icon: Oe } = me(
							this.a.state,
							this.a.getModel().areBreakpointsActivated(),
							be,
							this.c,
							this.a.getModel(),
						);
						(Le.icon.className = o.ThemeIcon.asClassName(Oe)),
							Le.toDispose.push(
								this.b.setupManagedHover(
									(0, E.$cib)("mouse"),
									Le.breakpoint,
									be.message || Fe || "",
								),
							),
							(this.a.state === x.State.Running ||
								this.a.state === x.State.Stopped) &&
								!be.verified &&
								Le.breakpoint.classList.add("disabled"),
							be.modeLabel
								? ((Le.badge.textContent = be.modeLabel),
									(Le.badge.style.display = "block"))
								: (Le.badge.style.display = "none");
					}
					disposeTemplate(be) {
						(0, g.$Vc)(be.toDispose);
					}
				};
				ae = Y = Ne([j(0, x.$75), j(1, P.$Uyb), j(2, D.$3N)], ae);
				class pe {
					constructor(be, Ce, Le, Fe, Oe) {
						(this.a = be),
							(this.b = Ce),
							(this.c = Le),
							(this.d = Fe),
							(this.f = Oe);
					}
					static {
						this.ID = "functionbreakpointinput";
					}
					get templateId() {
						return pe.ID;
					}
					renderTemplate(be) {
						const Ce = Object.create(null),
							Le = [],
							Fe = t.$fhb(be, ie(".breakpoint"));
						(Ce.icon = ie(".icon")),
							(Ce.checkbox = ne(Le)),
							t.$fhb(Fe, Ce.icon),
							t.$fhb(Fe, Ce.checkbox),
							this.a.breakpointInputFocused.set(!0);
						const Oe = t.$fhb(Fe, ie(".inputBoxContainer")),
							xe = new d.$Mob(Oe, this.c, { inputBoxStyles: O.$wyb }),
							He = (Ke) => {
								Ce.updating = !0;
								try {
									this.a.breakpointInputFocused.set(!1);
									const Je = Ce.breakpoint.getId();
									Ke
										? (Ce.type === "name" &&
												this.b.updateFunctionBreakpoint(Je, { name: xe.value }),
											Ce.type === "condition" &&
												this.b.updateFunctionBreakpoint(Je, {
													condition: xe.value,
												}),
											Ce.type === "hitCount" &&
												this.b.updateFunctionBreakpoint(Je, {
													hitCondition: xe.value,
												}))
										: Ce.type === "name" && !Ce.breakpoint.name
											? this.b.removeFunctionBreakpoints(Je)
											: this.a.renderInputBox(void 0);
								} finally {
									Ce.updating = !1;
								}
							};
						return (
							Le.push(
								t.$$fb(xe.inputElement, "keydown", (Ke) => {
									const Je = Ke.equals(n.KeyCode.Escape),
										Te = Ke.equals(n.KeyCode.Enter);
									(Je || Te) &&
										(Ke.preventDefault(), Ke.stopPropagation(), He(Te));
								}),
							),
							Le.push(
								t.$0fb(xe.inputElement, "blur", () => {
									Ce.updating || He(!!xe.value);
								}),
							),
							(Ce.inputBox = xe),
							(Ce.toDispose = Le),
							Ce
						);
					}
					renderElement(be, Ce, Le) {
						(Le.breakpoint = be),
							(Le.type = this.a.inputBoxData?.type || "name");
						const { icon: Fe, message: Oe } = me(
							this.b.state,
							this.b.getModel().areBreakpointsActivated(),
							be,
							this.f,
							this.b.getModel(),
						);
						(Le.icon.className = o.ThemeIcon.asClassName(Fe)),
							Le.toDispose.push(
								this.d.setupManagedHover(
									(0, E.$cib)("mouse"),
									Le.icon,
									Oe || "",
								),
							),
							(Le.checkbox.checked = be.enabled),
							(Le.checkbox.disabled = !0),
							(Le.inputBox.value = be.name || "");
						let xe = (0, l.localize)(5189, null),
							He = (0, l.localize)(5190, null);
						Le.type === "condition"
							? ((Le.inputBox.value = be.condition || ""),
								(xe = (0, l.localize)(5191, null)),
								(He = (0, l.localize)(5192, null)))
							: Le.type === "hitCount" &&
								((Le.inputBox.value = be.hitCondition || ""),
								(xe = (0, l.localize)(5193, null)),
								(He = (0, l.localize)(5194, null))),
							Le.inputBox.setAriaLabel(He),
							Le.inputBox.setPlaceHolder(xe),
							setTimeout(() => {
								Le.inputBox.focus(), Le.inputBox.select();
							}, 0);
					}
					disposeTemplate(be) {
						(0, g.$Vc)(be.toDispose);
					}
				}
				class $e {
					constructor(be, Ce, Le, Fe, Oe) {
						(this.a = be),
							(this.b = Ce),
							(this.c = Le),
							(this.d = Fe),
							(this.f = Oe);
					}
					static {
						this.ID = "databreakpointinput";
					}
					get templateId() {
						return $e.ID;
					}
					renderTemplate(be) {
						const Ce = Object.create(null),
							Le = [],
							Fe = t.$fhb(be, ie(".breakpoint"));
						(Ce.icon = ie(".icon")),
							(Ce.checkbox = ne(Le)),
							t.$fhb(Fe, Ce.icon),
							t.$fhb(Fe, Ce.checkbox),
							this.a.breakpointInputFocused.set(!0);
						const Oe = t.$fhb(Fe, ie(".inputBoxContainer")),
							xe = new d.$Mob(Oe, this.c, { inputBoxStyles: O.$wyb }),
							He = (Ke) => {
								Ce.updating = !0;
								try {
									this.a.breakpointInputFocused.set(!1);
									const Je = Ce.breakpoint.getId();
									Ke
										? (Ce.type === "condition" &&
												this.b.updateDataBreakpoint(Je, {
													condition: xe.value,
												}),
											Ce.type === "hitCount" &&
												this.b.updateDataBreakpoint(Je, {
													hitCondition: xe.value,
												}))
										: this.a.renderInputBox(void 0);
								} finally {
									Ce.updating = !1;
								}
							};
						return (
							Le.push(
								t.$$fb(xe.inputElement, "keydown", (Ke) => {
									const Je = Ke.equals(n.KeyCode.Escape),
										Te = Ke.equals(n.KeyCode.Enter);
									(Je || Te) &&
										(Ke.preventDefault(), Ke.stopPropagation(), He(Te));
								}),
							),
							Le.push(
								t.$0fb(xe.inputElement, "blur", () => {
									Ce.updating || He(!!xe.value);
								}),
							),
							(Ce.inputBox = xe),
							(Ce.toDispose = Le),
							Ce
						);
					}
					renderElement(be, Ce, Le) {
						(Le.breakpoint = be),
							(Le.type = this.a.inputBoxData?.type || "condition");
						const { icon: Fe, message: Oe } = me(
							this.b.state,
							this.b.getModel().areBreakpointsActivated(),
							be,
							this.f,
							this.b.getModel(),
						);
						(Le.icon.className = o.ThemeIcon.asClassName(Fe)),
							Le.toDispose.push(
								this.d.setupManagedHover(
									(0, E.$cib)("mouse"),
									Le.icon,
									Oe ?? "",
								),
							),
							(Le.checkbox.checked = be.enabled),
							(Le.checkbox.disabled = !0),
							(Le.inputBox.value = "");
						let xe = "",
							He = "";
						Le.type === "condition"
							? ((Le.inputBox.value = be.condition || ""),
								(xe = (0, l.localize)(5195, null)),
								(He = (0, l.localize)(5196, null)))
							: Le.type === "hitCount" &&
								((Le.inputBox.value = be.hitCondition || ""),
								(xe = (0, l.localize)(5197, null)),
								(He = (0, l.localize)(5198, null))),
							Le.inputBox.setAriaLabel(He),
							Le.inputBox.setPlaceHolder(xe),
							setTimeout(() => {
								Le.inputBox.focus(), Le.inputBox.select();
							}, 0);
					}
					disposeTemplate(be) {
						(0, g.$Vc)(be.toDispose);
					}
				}
				class ye {
					constructor(be, Ce, Le) {
						(this.a = be), (this.b = Ce), (this.c = Le);
					}
					static {
						this.ID = "exceptionbreakpointinput";
					}
					get templateId() {
						return ye.ID;
					}
					renderTemplate(be) {
						const Ce = Object.create(null),
							Le = [],
							Fe = t.$fhb(be, ie(".breakpoint"));
						Fe.classList.add("exception"),
							(Ce.checkbox = ne(Le)),
							t.$fhb(Fe, Ce.checkbox),
							this.a.breakpointInputFocused.set(!0);
						const Oe = t.$fhb(Fe, ie(".inputBoxContainer")),
							xe = new d.$Mob(Oe, this.c, {
								ariaLabel: (0, l.localize)(5199, null),
								inputBoxStyles: O.$wyb,
							}),
							He = (Ke) => {
								this.a.breakpointInputFocused.set(!1);
								let Je = Ce.breakpoint.condition;
								Ke && (Je = xe.value !== "" ? xe.value : void 0),
									this.b.setExceptionBreakpointCondition(Ce.breakpoint, Je);
							};
						return (
							Le.push(
								t.$$fb(xe.inputElement, "keydown", (Ke) => {
									const Je = Ke.equals(n.KeyCode.Escape),
										Te = Ke.equals(n.KeyCode.Enter);
									(Je || Te) &&
										(Ke.preventDefault(), Ke.stopPropagation(), He(Te));
								}),
							),
							Le.push(
								t.$0fb(xe.inputElement, "blur", () => {
									setTimeout(() => {
										He(!0);
									});
								}),
							),
							(Ce.inputBox = xe),
							(Ce.toDispose = Le),
							Ce
						);
					}
					renderElement(be, Ce, Le) {
						const Fe = be.conditionDescription || (0, l.localize)(5200, null);
						Le.inputBox.setPlaceHolder(Fe),
							(Le.breakpoint = be),
							(Le.checkbox.checked = be.enabled),
							(Le.checkbox.disabled = !0),
							(Le.inputBox.value = be.condition || ""),
							setTimeout(() => {
								Le.inputBox.focus(), Le.inputBox.select();
							}, 0);
					}
					disposeTemplate(be) {
						(0, g.$Vc)(be.toDispose);
					}
				}
				class ue {
					constructor(be, Ce) {
						(this.a = be), (this.b = Ce);
					}
					getWidgetAriaLabel() {
						return (0, l.localize)(5201, null);
					}
					getRole() {
						return "checkbox";
					}
					isChecked(be) {
						return be.enabled;
					}
					getAriaLabel(be) {
						if (be instanceof H.$W3) return be.toString();
						const { message: Ce } = me(
								this.a.state,
								this.a.getModel().areBreakpointsActivated(),
								be,
								this.b,
								this.a.getModel(),
							),
							Le = be.toString();
						return Ce ? `${Le}, ${Ce}` : Le;
					}
				}
				function fe(ge, be, Ce, Le, Fe, Oe) {
					if (ge.uri.scheme === x.$25 && Fe.state === x.State.Inactive)
						return Promise.resolve(void 0);
					const xe = ge.endLineNumber
						? {
								startLineNumber: ge.lineNumber,
								endLineNumber: ge.endLineNumber,
								startColumn: ge.column || 1,
								endColumn: ge.endColumn || f.Constants.MAX_SAFE_SMALL_INTEGER,
							}
						: {
								startLineNumber: ge.lineNumber,
								startColumn: ge.column || 1,
								endLineNumber: ge.lineNumber,
								endColumn: ge.column || f.Constants.MAX_SAFE_SMALL_INTEGER,
							};
					return Oe.openEditor(
						{
							resource: ge.uri,
							options: {
								preserveFocus: Ce,
								selection: xe,
								revealIfOpened: !0,
								selectionRevealType:
									T.TextEditorSelectionRevealType.CenterIfOutsideViewport,
								pinned: Le,
							},
						},
						be ? V.$KY : V.$JY,
					);
				}
				function me(ge, be, Ce, Le, Fe) {
					const Oe = ge === x.State.Running || ge === x.State.Stopped,
						xe =
							Ce instanceof H.$V3
								? F.$$Jb
								: Ce instanceof H.$U3
									? F.$9Jb
									: Ce.logMessage
										? F.$_Jb
										: F.$8Jb;
					if (!Ce.enabled || !be)
						return {
							icon: xe.disabled,
							message: Ce.logMessage
								? (0, l.localize)(5202, null)
								: (0, l.localize)(5203, null),
						};
					const He = (Te) =>
						"message" in Ce && Ce.message ? Te.concat(", " + Ce.message) : Te;
					if (Oe && Ce instanceof H.$T3 && Ce.pending)
						return { icon: F.$8Jb.pending };
					if (Oe && !Ce.verified)
						return {
							icon: xe.unverified,
							message:
								"message" in Ce && Ce.message
									? Ce.message
									: Ce.logMessage
										? (0, l.localize)(5204, null)
										: (0, l.localize)(5205, null),
							showAdapterUnverifiedMessage: !0,
						};
					if (Ce instanceof H.$V3)
						return Ce.supported
							? {
									icon: xe.regular,
									message: Ce.message || (0, l.localize)(5207, null),
								}
							: { icon: xe.unverified, message: (0, l.localize)(5206, null) };
					if (Ce instanceof H.$U3) {
						if (!Ce.supported)
							return {
								icon: xe.unverified,
								message: (0, l.localize)(5208, null),
							};
						const Te = [];
						return (
							Te.push(Ce.message || (0, l.localize)(5209, null)),
							Ce.condition &&
								Te.push((0, l.localize)(5210, null, Ce.condition)),
							Ce.hitCondition &&
								Te.push((0, l.localize)(5211, null, Ce.hitCondition)),
							{
								icon: xe.regular,
								message: He(
									Te.join(`
`),
								),
							}
						);
					}
					if (Ce instanceof H.$X3) {
						if (!Ce.supported)
							return {
								icon: xe.unverified,
								message: (0, l.localize)(5212, null),
							};
						const Te = [];
						return (
							Ce.message
								? Te.push(Ce.message)
								: Ce.instructionReference
									? Te.push(
											(0, l.localize)(5213, null, Ce.instructionReference),
										)
									: Te.push((0, l.localize)(5214, null)),
							Ce.hitCondition &&
								Te.push((0, l.localize)(5215, null, Ce.hitCondition)),
							{
								icon: xe.regular,
								message: He(
									Te.join(`
`),
								),
							}
						);
					}
					let Ke;
					if (
						(Ce instanceof H.$T3 &&
							Ce.triggeredBy &&
							(Ke = Fe.getBreakpoints().find(
								(Te) => Te.getId() === Ce.triggeredBy,
							)),
						Ce.logMessage || Ce.condition || Ce.hitCondition || Ke)
					) {
						const Te = [];
						let Ee = Ce.logMessage ? F.$_Jb.regular : F.$0Jb.regular;
						return (
							Ce.supported ||
								((Ee = F.$bKb), Te.push((0, l.localize)(5216, null))),
							Ce.logMessage &&
								Te.push((0, l.localize)(5217, null, Ce.logMessage)),
							Ce.condition &&
								Te.push((0, l.localize)(5218, null, Ce.condition)),
							Ce.hitCondition &&
								Te.push((0, l.localize)(5219, null, Ce.hitCondition)),
							Ke &&
								Te.push(
									(0, l.localize)(
										5220,
										null,
										`${Le.getUriLabel(Ke.uri, { relative: !0 })}: ${Ke.lineNumber}`,
									),
								),
							{
								icon: Ee,
								message: He(
									Te.join(`
`),
								),
							}
						);
					}
					const Je =
						"message" in Ce && Ce.message
							? Ce.message
							: Ce instanceof H.$T3 && Le
								? Le.getUriLabel(Ce.uri)
								: (0, l.localize)(5221, null);
					return { icon: xe.regular, message: Je };
				}
				(0, $.$4X)(
					class extends $.$3X {
						constructor() {
							super({
								id: "workbench.debug.viewlet.action.addFunctionBreakpointAction",
								title: {
									...(0, l.localize2)(5241, "Add Function Breakpoint"),
									mnemonicTitle: (0, l.localize)(5222, null),
								},
								f1: !0,
								icon: F.$EKb,
								menu: [
									{
										id: $.$XX.ViewTitle,
										group: "navigation",
										order: 10,
										when: S.$Kj.equals("view", x.$V4),
									},
									{
										id: $.$XX.MenubarNewBreakpointMenu,
										group: "1_breakpoints",
										order: 3,
										when: x.$y5,
									},
								],
							});
						}
						async run(ge) {
							const be = ge.get(x.$75);
							await ge.get(K.$HMb).openView(x.$V4), be.addFunctionBreakpoint();
						}
					},
				);
				class ve extends $.$3X {
					async run(be, Ce) {
						const Le = be.get(x.$75),
							Fe = Le.getViewModel().focusedSession;
						if (!Fe) return;
						let Oe;
						Ce &&
							Ce.src.type === x.DataBreakpointSetType.Address &&
							(Oe = `${Ce.src.address} + ${Ce.src.bytes}`);
						const xe = be.get(A.$DJ),
							He = be.get(G.$4N),
							Ke = await this.a(xe, Oe);
						if (!Ke) return;
						let Je;
						try {
							Je = await Fe.dataBytesBreakpointInfo(Ke.address, Ke.bytes);
						} catch (Ie) {
							He.error((0, l.localize)(5223, null, Ke.address, Ie.message));
						}
						if (!Je?.dataId) return;
						let Te = "write";
						if (Je.accessTypes && Je.accessTypes?.length > 1) {
							const Ie = Je.accessTypes.map((Se) => ({ label: Se })),
								Be = await xe.pick(Ie, {
									placeHolder: (0, l.localize)(5224, null),
								});
							if (!Be) return;
							Te = Be.label;
						}
						const Ee = { type: x.DataBreakpointSetType.Address, ...Ke };
						Ce && (await Le.removeDataBreakpoints(Ce.getId())),
							await Le.addDataBreakpoint({
								description: Je.description,
								src: Ee,
								canPersist: !0,
								accessTypes: Je.accessTypes,
								accessType: Te,
								initialSessionData: { session: Fe, dataId: Je.dataId },
							});
					}
					a(be, Ce) {
						return new Promise((Le) => {
							const Fe = new g.$Zc(),
								Oe = Fe.add(be.createInputBox());
							(Oe.prompt = (0, l.localize)(5225, null)),
								(Oe.placeholder = (0, l.localize)(5226, null)),
								Ce && ((Oe.value = Ce), (Oe.valueSelection = [0, Ce.length])),
								Fe.add(
									Oe.onDidChangeValue((xe) => {
										const He = this.b(xe, !1);
										Oe.validationMessage = He?.error;
									}),
								),
								Fe.add(
									Oe.onDidAccept(() => {
										const xe = this.b(Oe.value, !0);
										"error" in xe ? (Oe.validationMessage = xe.error) : Le(xe),
											Oe.dispose();
									}),
								),
								Fe.add(
									Oe.onDidHide(() => {
										Le(void 0), Fe.dispose();
									}),
								),
								(Oe.ignoreFocusOut = !0),
								Oe.show();
						});
					}
					b(be, Ce) {
						const Le = /^(\S+)\s*(?:([+-])\s*(\S+))?/.exec(be);
						if (!Le) return { error: (0, l.localize)(5227, null) };
						const Fe = (Ee) =>
								Ce
									? /^0x[0-9a-f]*|[0-9]*$/i.test(Ee)
									: /^0x[0-9a-f]+|[0-9]+$/i.test(Ee),
							[, Oe, xe = "+", He = "1"] = Le;
						for (const Ee of [Oe, He])
							if (!Fe(Ee)) return { error: (0, l.localize)(5228, null, Ee) };
						if (!Ce) return;
						const Ke = BigInt(Oe),
							Je = BigInt(He),
							Te = `0x${Ke.toString(16)}`;
						return xe === "-"
							? { address: Te, bytes: Number(Ke - Je) }
							: { address: Te, bytes: Number(Je) };
					}
				}
				(0, $.$4X)(
					class extends ve {
						constructor() {
							super({
								id: "workbench.debug.viewlet.action.addDataBreakpointOnAddress",
								title: {
									...(0, l.localize2)(5242, "Add Data Breakpoint at Address"),
									mnemonicTitle: (0, l.localize)(5229, null),
								},
								f1: !0,
								icon: F.$FKb,
								menu: [
									{
										id: $.$XX.ViewTitle,
										group: "navigation",
										order: 11,
										when: S.$Kj.and(x.$C5, S.$Kj.equals("view", x.$V4)),
									},
									{
										id: $.$XX.MenubarNewBreakpointMenu,
										group: "1_breakpoints",
										order: 4,
										when: x.$C5,
									},
								],
							});
						}
					},
				),
					(0, $.$4X)(
						class extends ve {
							constructor() {
								super({
									id: "workbench.debug.viewlet.action.editDataBreakpointOnAddress",
									title: (0, l.localize2)(5243, "Edit Address..."),
									menu: [
										{
											id: $.$XX.DebugBreakpointsContext,
											when: S.$Kj.and(x.$C5, x.$l5),
											group: "navigation",
											order: 15,
										},
									],
								});
							}
						},
					),
					(0, $.$4X)(
						class extends $.$3X {
							constructor() {
								super({
									id: "workbench.debug.viewlet.action.toggleBreakpointsActivatedAction",
									title: (0, l.localize2)(5244, "Toggle Activate Breakpoints"),
									f1: !0,
									icon: F.$HKb,
									menu: {
										id: $.$XX.ViewTitle,
										group: "navigation",
										order: 20,
										when: S.$Kj.equals("view", x.$V4),
									},
								});
							}
							run(ge) {
								const be = ge.get(x.$75);
								be.setBreakpointsActivated(
									!be.getModel().areBreakpointsActivated(),
								);
							}
						},
					),
					(0, $.$4X)(
						class extends $.$3X {
							constructor() {
								super({
									id: "workbench.debug.viewlet.action.removeBreakpoint",
									title: (0, l.localize)(5230, null),
									icon: h.$ak.removeClose,
									menu: [
										{
											id: $.$XX.DebugBreakpointsContext,
											group: "3_modification",
											order: 10,
											when: x.$k5.notEqualsTo("exceptionBreakpoint"),
										},
										{
											id: $.$XX.DebugBreakpointsContext,
											group: "inline",
											order: 20,
											when: x.$k5.notEqualsTo("exceptionBreakpoint"),
										},
									],
								});
							}
							async run(ge, be) {
								const Ce = ge.get(x.$75);
								be instanceof H.$T3
									? await Ce.removeBreakpoints(be.getId())
									: be instanceof H.$U3
										? await Ce.removeFunctionBreakpoints(be.getId())
										: be instanceof H.$V3
											? await Ce.removeDataBreakpoints(be.getId())
											: be instanceof H.$X3 &&
												(await Ce.removeInstructionBreakpoints(
													be.instructionReference,
													be.offset,
												));
							}
						},
					),
					(0, $.$4X)(
						class extends $.$3X {
							constructor() {
								super({
									id: "workbench.debug.viewlet.action.removeAllBreakpoints",
									title: {
										...(0, l.localize2)(5245, "Remove All Breakpoints"),
										mnemonicTitle: (0, l.localize)(5231, null),
									},
									f1: !0,
									icon: F.$GKb,
									menu: [
										{
											id: $.$XX.ViewTitle,
											group: "navigation",
											order: 30,
											when: S.$Kj.equals("view", x.$V4),
										},
										{
											id: $.$XX.DebugBreakpointsContext,
											group: "3_modification",
											order: 20,
											when: S.$Kj.and(
												x.$x5,
												x.$k5.notEqualsTo("exceptionBreakpoint"),
											),
										},
										{
											id: $.$XX.MenubarDebugMenu,
											group: "5_breakpoints",
											order: 3,
											when: x.$y5,
										},
									],
								});
							}
							run(ge) {
								const be = ge.get(x.$75);
								be.removeBreakpoints(),
									be.removeFunctionBreakpoints(),
									be.removeDataBreakpoints(),
									be.removeInstructionBreakpoints();
							}
						},
					),
					(0, $.$4X)(
						class extends $.$3X {
							constructor() {
								super({
									id: "workbench.debug.viewlet.action.enableAllBreakpoints",
									title: {
										...(0, l.localize2)(5246, "Enable All Breakpoints"),
										mnemonicTitle: (0, l.localize)(5232, null),
									},
									f1: !0,
									precondition: x.$y5,
									menu: [
										{
											id: $.$XX.DebugBreakpointsContext,
											group: "z_commands",
											order: 10,
											when: S.$Kj.and(
												x.$x5,
												x.$k5.notEqualsTo("exceptionBreakpoint"),
											),
										},
										{
											id: $.$XX.MenubarDebugMenu,
											group: "5_breakpoints",
											order: 1,
											when: x.$y5,
										},
									],
								});
							}
							async run(ge) {
								await ge.get(x.$75).enableOrDisableBreakpoints(!0);
							}
						},
					),
					(0, $.$4X)(
						class extends $.$3X {
							constructor() {
								super({
									id: "workbench.debug.viewlet.action.disableAllBreakpoints",
									title: {
										...(0, l.localize2)(5247, "Disable All Breakpoints"),
										mnemonicTitle: (0, l.localize)(5233, null),
									},
									f1: !0,
									precondition: x.$y5,
									menu: [
										{
											id: $.$XX.DebugBreakpointsContext,
											group: "z_commands",
											order: 20,
											when: S.$Kj.and(
												x.$x5,
												x.$k5.notEqualsTo("exceptionBreakpoint"),
											),
										},
										{
											id: $.$XX.MenubarDebugMenu,
											group: "5_breakpoints",
											order: 2,
											when: x.$y5,
										},
									],
								});
							}
							async run(ge) {
								await ge.get(x.$75).enableOrDisableBreakpoints(!1);
							}
						},
					),
					(0, $.$4X)(
						class extends $.$3X {
							constructor() {
								super({
									id: "workbench.debug.viewlet.action.reapplyBreakpointsAction",
									title: (0, l.localize2)(5248, "Reapply All Breakpoints"),
									f1: !0,
									precondition: x.$74,
									menu: [
										{
											id: $.$XX.DebugBreakpointsContext,
											group: "z_commands",
											order: 30,
											when: S.$Kj.and(
												x.$x5,
												x.$k5.notEqualsTo("exceptionBreakpoint"),
											),
										},
									],
								});
							}
							async run(ge) {
								await ge.get(x.$75).setBreakpointsActivated(!0);
							}
						},
					),
					(0, $.$4X)(
						class extends U.$WMb {
							constructor() {
								super({
									id: "debug.editBreakpoint",
									viewId: x.$V4,
									title: (0, l.localize)(5234, null),
									icon: h.$ak.edit,
									precondition: x.$n5,
									menu: [
										{
											id: $.$XX.DebugBreakpointsContext,
											when: x.$k5.notEqualsTo("functionBreakpoint"),
											group: "navigation",
											order: 10,
										},
										{
											id: $.$XX.DebugBreakpointsContext,
											group: "inline",
											order: 10,
										},
									],
								});
							}
							async runInView(ge, be, Ce) {
								const Le = ge.get(x.$75),
									Fe = ge.get(V.$IY);
								if (Ce instanceof H.$T3) {
									const Oe = await fe(Ce, !1, !1, !0, Le, Fe);
									if (Oe) {
										const xe = Oe.getControl();
										(0, b.$0sb)(xe) &&
											xe
												.getContribution(x.$15)
												?.showBreakpointWidget(Ce.lineNumber, Ce.column);
									}
								} else if (Ce instanceof H.$U3) {
									const Oe = ge.get(I.$Xxb),
										xe = [
											new r.$rj(
												"breakpoint.editCondition",
												(0, l.localize)(5235, null),
												void 0,
												!0,
												async () =>
													be.renderInputBox({
														breakpoint: Ce,
														type: "condition",
													}),
											),
											new r.$rj(
												"breakpoint.editCondition",
												(0, l.localize)(5236, null),
												void 0,
												!0,
												async () =>
													be.renderInputBox({
														breakpoint: Ce,
														type: "hitCount",
													}),
											),
										],
										He = Z.get(Ce.getId());
									He &&
										Oe.showContextMenu({
											getActions: () => xe,
											getAnchor: () => He,
											onHide: () => (0, g.$Vc)(xe),
										});
								} else be.renderInputBox({ breakpoint: Ce, type: "condition" });
							}
						},
					),
					(0, $.$4X)(
						class extends U.$WMb {
							constructor() {
								super({
									id: "debug.editFunctionBreakpoint",
									viewId: x.$V4,
									title: (0, l.localize)(5237, null),
									menu: [
										{
											id: $.$XX.DebugBreakpointsContext,
											group: "navigation",
											order: 10,
											when: x.$k5.isEqualTo("functionBreakpoint"),
										},
									],
								});
							}
							runInView(ge, be, Ce) {
								be.renderInputBox({ breakpoint: Ce, type: "name" });
							}
						},
					),
					(0, $.$4X)(
						class extends U.$WMb {
							constructor() {
								super({
									id: "debug.editFunctionBreakpointHitCount",
									viewId: x.$V4,
									title: (0, l.localize)(5238, null),
									precondition: x.$n5,
									menu: [
										{
											id: $.$XX.DebugBreakpointsContext,
											group: "navigation",
											order: 20,
											when: S.$Kj.or(
												x.$k5.isEqualTo("functionBreakpoint"),
												x.$k5.isEqualTo("dataBreakpoint"),
											),
										},
									],
								});
							}
							runInView(ge, be, Ce) {
								be.renderInputBox({ breakpoint: Ce, type: "hitCount" });
							}
						},
					),
					(0, $.$4X)(
						class extends U.$WMb {
							constructor() {
								super({
									id: "debug.editBreakpointMode",
									viewId: x.$V4,
									title: (0, l.localize)(5239, null),
									menu: [
										{
											id: $.$XX.DebugBreakpointsContext,
											group: "navigation",
											order: 20,
											when: S.$Kj.and(
												x.$m5,
												S.$Kj.or(
													x.$k5.isEqualTo("breakpoint"),
													x.$k5.isEqualTo("exceptionBreakpoint"),
													x.$k5.isEqualTo("instructionBreakpoint"),
												),
											),
										},
									],
								});
							}
							async runInView(ge, be, Ce) {
								const Le =
										Ce instanceof H.$T3
											? "source"
											: Ce instanceof H.$X3
												? "instruction"
												: "exception",
									Fe = ge.get(x.$75),
									Oe = Fe.getModel().getBreakpointModes(Le),
									xe = await ge.get(A.$DJ).pick(
										Oe.map((He) => ({
											label: He.label,
											description: He.description,
											mode: He.mode,
										})),
										{ placeHolder: (0, l.localize)(5240, null) },
									);
								if (xe)
									if (Le === "source") {
										const He = new Map();
										He.set(Ce.getId(), { mode: xe.mode, modeLabel: xe.label }),
											Fe.updateBreakpoints(Ce.originalUri, He, !1);
									} else
										Ce instanceof H.$X3
											? (Fe.removeInstructionBreakpoints(
													Ce.instructionReference,
													Ce.offset,
												),
												Fe.addInstructionBreakpoint({
													...Ce.toJSON(),
													mode: xe.mode,
													modeLabel: xe.label,
												}))
											: Ce instanceof H.$W3 &&
												((Ce.mode = xe.mode),
												(Ce.modeLabel = xe.label),
												Fe.setExceptionBreakpointCondition(Ce, Ce.condition));
							}
						},
					);
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	