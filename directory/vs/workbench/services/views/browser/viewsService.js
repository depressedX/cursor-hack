define(
			de[1352],
			he([
				1, 0, 3, 60, 100, 30, 21, 8, 6, 28, 11, 4, 43, 20, 5, 32, 35, 49, 53,
				25, 1056, 96, 9, 99, 66, 1941, 142, 18, 89,
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
					(e.$2uc = void 0),
					(e.$3uc = L),
					(e.$4uc = M);
				let k = class extends t.$1c {
					constructor(A, R, O, B, U) {
						super(),
							(this.q = A),
							(this.r = R),
							(this.s = O),
							(this.t = B),
							(this.u = U),
							(this.c = this.D(new m.$re())),
							(this.onDidChangeViewVisibility = this.c.event),
							(this.f = this.D(new m.$re())),
							(this.onDidChangeViewContainerVisibility = this.f.event),
							(this.g = this.D(new m.$re())),
							(this.onDidChangeFocusedView = this.g.event),
							(this.h = this.D(new t.$0c())),
							(this.a = new Map()),
							(this.j = new Map()),
							(this.m = new Map()),
							(this.b = new Map()),
							this.D(
								(0, t.$Yc)(() => {
									this.a.forEach((z) => z.dispose()), this.a.clear();
								}),
							),
							this.q.viewContainers.forEach((z) =>
								this.G(z, this.q.getViewContainerLocation(z)),
							),
							this.D(
								this.q.onDidChangeViewContainers(({ added: z, removed: F }) =>
									this.F(z, F),
								),
							),
							this.D(
								this.q.onDidChangeContainerLocation(
									({ viewContainer: z, from: F, to: x }) => this.I(z, F, x),
								),
							),
							this.D(
								this.r.onDidPaneCompositeOpen((z) =>
									this.f.fire({
										id: z.composite.getId(),
										visible: !0,
										location: z.viewContainerLocation,
									}),
								),
							),
							this.D(
								this.r.onDidPaneCompositeClose((z) =>
									this.f.fire({
										id: z.composite.getId(),
										visible: !1,
										location: z.viewContainerLocation,
									}),
								),
							),
							(this.n = w.$zQb.bindTo(O));
					}
					w(A) {
						for (const R of A) this.y(R, R.isBodyVisible());
					}
					y(A, R) {
						this.C(A).set(R), this.c.fire({ id: A.id, visible: R });
					}
					z(A) {
						for (const R of A) this.y(R, !1);
					}
					C(A) {
						const R = (0, w.$AQb)(A.id);
						let O = this.m.get(R);
						return (
							O || ((O = new d.$5j(R, !1).bindTo(this.s)), this.m.set(R, O)), O
						);
					}
					F(A, R) {
						for (const { container: O, location: B } of R) this.H(O, B);
						for (const { container: O, location: B } of A) this.G(O, B);
					}
					G(A, R) {
						this.X(A, R);
						const O = new t.$Zc(),
							B = this.q.getViewContainerModel(A);
						this.J(B.allViewDescriptors, A),
							O.add(
								B.onDidChangeAllViewDescriptors(({ added: U, removed: z }) => {
									this.J(U, A), this.L(z);
								}),
							),
							this.M(A),
							O.add(B.onDidChangeActiveViewDescriptors(() => this.M(A))),
							O.add(this.R(A)),
							this.h.set(A.id, O);
					}
					H(A, R) {
						this.Y(A, R), this.h.deleteAndDispose(A.id);
					}
					I(A, R, O) {
						this.Y(A, R),
							this.X(A, O),
							this.t.isVisible(M(O)) &&
								this.q.getViewContainersByLocation(O).length === 1 &&
								this.openViewContainer(A.id);
					}
					J(A, R) {
						if (this.q.getViewContainerLocation(R) !== null)
							for (const B of A) {
								const U = new t.$Zc();
								U.add(this.S(B)),
									U.add(this.U(B, R.title)),
									U.add(this.W(B)),
									this.a.set(B, U);
							}
					}
					L(A) {
						for (const R of A) {
							const O = this.a.get(R);
							O && (O.dispose(), this.a.delete(R));
						}
					}
					M(A) {
						let R = this.j.get(A.id);
						R || ((R = this.s.createKey(L(A.id), !1)), this.j.set(A.id, R)),
							R.set(
								!(
									A.hideIfEmpty &&
									this.q.getViewContainerModel(A).activeViewDescriptors
										.length === 0
								),
							);
					}
					async N(A, R, O) {
						return this.r.openPaneComposite(A, R, O);
					}
					O(A, R) {
						return this.r.getPaneComposite(A, R);
					}
					isViewContainerVisible(A) {
						const R = this.q.getViewContainerById(A);
						if (R) {
							const O = this.q.getViewContainerLocation(R);
							if (O !== null)
								return this.r.getActivePaneComposite(O)?.getId() === A;
						}
						return !1;
					}
					getVisibleViewContainer(A) {
						const R = this.r.getActivePaneComposite(A)?.getId();
						return R ? this.q.getViewContainerById(R) : null;
					}
					getActiveViewPaneContainerWithId(A) {
						const R = this.q.getViewContainerById(A);
						return R ? this.P(R) : null;
					}
					async openViewContainer(A, R) {
						const O = this.q.getViewContainerById(A);
						if (O) {
							const B = this.q.getViewContainerLocation(O);
							if (B !== null)
								return (await this.r.openPaneComposite(A, B, R)) || null;
						}
						return null;
					}
					async closeViewContainer(A) {
						const R = this.q.getViewContainerById(A);
						if (R) {
							const O = this.q.getViewContainerLocation(R),
								B = O !== null && this.r.getActivePaneComposite(O);
							if (O !== null)
								return B ? this.t.setPartHidden(!0, M(O)) : void 0;
						}
					}
					isViewVisible(A) {
						return this.getActiveViewWithId(A)?.isBodyVisible() || !1;
					}
					getActiveViewWithId(A) {
						const R = this.q.getViewContainerByViewId(A);
						if (R) {
							const O = this.P(R);
							if (O) return O.getView(A);
						}
						return null;
					}
					getViewWithId(A) {
						const R = this.q.getViewContainerByViewId(A);
						if (R) {
							const O = this.b.get(R.id);
							if (O) return O.getView(A);
						}
						return null;
					}
					getFocusedViewName() {
						const A = this.s.getContextKeyValue(w.$zQb.key) ?? "",
							R = this.u.activeTextEditorControl?.hasTextFocus()
								? (0, a.localize)(13003, null)
								: void 0;
						return (
							this.q.getViewDescriptorById(A.toString())?.name?.value ?? R ?? ""
						);
					}
					async openView(A, R) {
						const O = this.q.getViewContainerByViewId(A);
						if (
							!O ||
							!this.q
								.getViewContainerModel(O)
								.activeViewDescriptors.some((z) => z.id === A)
						)
							return null;
						const B = this.q.getViewContainerLocation(O),
							U = this.O(O.id, B);
						if (U) {
							const z = await this.N(U.id, B);
							if (z && z.openView) return z.openView(A, R) || null;
							R && z?.focus();
						}
						return null;
					}
					closeView(A) {
						const R = this.q.getViewContainerByViewId(A);
						if (R) {
							const O = this.P(R);
							if (O) {
								const B = O.getView(A);
								if (B)
									if (O.views.length === 1) {
										const U = this.q.getViewContainerLocation(R);
										U === i.ViewContainerLocation.Sidebar
											? this.t.setPartHidden(!0, l.Parts.SIDEBAR_PART)
											: (U === i.ViewContainerLocation.Panel ||
													U === i.ViewContainerLocation.AuxiliaryBar) &&
												this.r.hideActivePaneComposite(U),
											this.n.get() === A && this.n.reset();
									} else B.setExpanded(!1);
							}
						}
					}
					P(A) {
						const R = this.q.getViewContainerLocation(A);
						if (R === null) return null;
						const O = this.r.getActivePaneComposite(R);
						return (O?.getId() === A.id && O.getViewPaneContainer()) || null;
					}
					getViewProgressIndicator(A) {
						const R = this.q.getViewContainerByViewId(A);
						if (!R) return;
						const O = this.b.get(R.id);
						if (!O) return;
						const B = O.getView(A);
						if (B)
							return O.isViewMergedWithContainer()
								? this.Q(R)
								: B.getProgressIndicator();
					}
					Q(A) {
						const R = this.q.getViewContainerLocation(A);
						if (R !== null) return this.r.getProgressIndicator(A.id, R);
					}
					R(A) {
						const R = new t.$Zc();
						if (A.openCommandActionDescriptor) {
							const {
									id: O,
									mnemonicTitle: B,
									keybindings: U,
									order: z,
								} = A.openCommandActionDescriptor ?? { id: A.id },
								F = A.openCommandActionDescriptor.title ?? A.title,
								x = this;
							if (
								(R.add(
									(0, u.$4X)(
										class extends u.$3X {
											constructor() {
												super({
													id: O,
													get title() {
														const q = x.q.getViewContainerLocation(A),
															V = typeof F == "string" ? F : F.value,
															G = typeof F == "string" ? F : F.original;
														return q === i.ViewContainerLocation.Sidebar
															? {
																	value: (0, a.localize)(13004, null, V),
																	original: `Show ${G}`,
																}
															: {
																	value: (0, a.localize)(13005, null, V),
																	original: `Toggle ${G}`,
																};
													},
													category: $.$ck.View,
													precondition: d.$Kj.has(L(A.id)),
													keybinding: U
														? {
																...U,
																weight: h.KeybindingWeight.WorkbenchContrib,
															}
														: void 0,
													f1: !0,
												});
											}
											async run(q) {
												const V = q.get(v.$EY),
													G = q.get(i.$K1),
													K = q.get(l.$mEb),
													J = q.get(P.$HMb),
													W = G.getViewContainerLocation(A);
												switch (W) {
													case i.ViewContainerLocation.AuxiliaryBar:
													case i.ViewContainerLocation.Sidebar: {
														const X =
															W === i.ViewContainerLocation.Sidebar
																? l.Parts.SIDEBAR_PART
																: l.Parts.AUXILIARYBAR_PART;
														!J.isViewContainerVisible(A.id) || !K.hasFocus(X)
															? await J.openViewContainer(A.id, !0)
															: V.activeGroup.focus();
														break;
													}
													case i.ViewContainerLocation.Panel:
														!J.isViewContainerVisible(A.id) ||
														!K.hasFocus(l.Parts.PANEL_PART)
															? await J.openViewContainer(A.id, !0)
															: J.closeViewContainer(A.id);
														break;
												}
											}
										},
									),
								),
								B)
							) {
								const H = this.q.getDefaultViewContainerLocation(A);
								R.add(
									u.$ZX.appendMenuItem(u.$XX.MenubarViewMenu, {
										command: { id: O, title: B },
										group:
											H === i.ViewContainerLocation.Sidebar
												? "3_views"
												: "4_panels",
										when: d.$Kj.has(L(A.id)),
										order: z ?? Number.MAX_VALUE,
									}),
								);
							}
						}
						return R;
					}
					S(A) {
						const R = new t.$Zc();
						if (A.openCommandActionDescriptor) {
							const O = A.openCommandActionDescriptor.title ?? A.name,
								B = A.openCommandActionDescriptor.id,
								U = this;
							if (
								(R.add(
									(0, u.$4X)(
										class extends u.$3X {
											constructor() {
												super({
													id: B,
													get title() {
														const F = U.q.getViewLocationById(A.id),
															x = typeof O == "string" ? O : O.value,
															H = typeof O == "string" ? O : O.original;
														return F === i.ViewContainerLocation.Sidebar
															? {
																	value: (0, a.localize)(13006, null, x),
																	original: `Show ${H}`,
																}
															: {
																	value: (0, a.localize)(13007, null, x),
																	original: `Toggle ${H}`,
																};
													},
													category: $.$ck.View,
													precondition: d.$Kj.has(`${A.id}.active`),
													keybinding: A.openCommandActionDescriptor.keybindings
														? {
																...A.openCommandActionDescriptor.keybindings,
																weight: h.KeybindingWeight.WorkbenchContrib,
															}
														: void 0,
													f1: !0,
												});
											}
											async run(F) {
												const x = F.get(v.$EY),
													H = F.get(i.$K1),
													q = F.get(l.$mEb),
													V = F.get(P.$HMb),
													G = F.get(d.$6j);
												if (w.$zQb.getValue(G) === A.id) {
													const J = H.getViewLocationById(A.id);
													H.getViewLocationById(A.id) ===
													i.ViewContainerLocation.Sidebar
														? x.activeGroup.focus()
														: J !== null && q.setPartHidden(!0, M(J));
												} else V.openView(A.id, !0);
											}
										},
									),
								),
								A.openCommandActionDescriptor.mnemonicTitle)
							) {
								const z = this.q.getDefaultContainerById(A.id);
								if (z) {
									const F = this.q.getDefaultViewContainerLocation(z);
									R.add(
										u.$ZX.appendMenuItem(u.$XX.MenubarViewMenu, {
											command: {
												id: B,
												title: A.openCommandActionDescriptor.mnemonicTitle,
											},
											group:
												F === i.ViewContainerLocation.Sidebar
													? "3_views"
													: "4_panels",
											when: d.$Kj.has(`${A.id}.active`),
											order:
												A.openCommandActionDescriptor.order ?? Number.MAX_VALUE,
										}),
									);
								}
							}
						}
						return R;
					}
					U(A, R) {
						return (0, u.$4X)(
							class extends u.$3X {
								constructor() {
									const B = (0, a.localize2)(
										13008,
										"Focus on {0} View",
										A.name.value,
									);
									super({
										id: A.focusCommand ? A.focusCommand.id : `${A.id}.focus`,
										title: B,
										category: R,
										menu: [{ id: u.$XX.CommandPalette, when: A.when }],
										keybinding: {
											when: d.$Kj.has(`${A.id}.active`),
											weight: h.KeybindingWeight.WorkbenchContrib,
											primary: A.focusCommand?.keybindings?.primary,
											secondary: A.focusCommand?.keybindings?.secondary,
											linux: A.focusCommand?.keybindings?.linux,
											mac: A.focusCommand?.keybindings?.mac,
											win: A.focusCommand?.keybindings?.win,
										},
										metadata: {
											description: B.value,
											args: [
												{
													name: "focusOptions",
													description: "Focus Options",
													schema: {
														type: "object",
														properties: {
															preserveFocus: { type: "boolean", default: !1 },
														},
													},
												},
											],
										},
									});
								}
								run(B, U) {
									B.get(P.$HMb).openView(A.id, !U?.preserveFocus);
								}
							},
						);
					}
					W(A) {
						return (0, u.$4X)(
							class extends u.$3X {
								constructor() {
									super({
										id: `${A.id}.resetViewLocation`,
										title: (0, a.localize2)(13009, "Reset Location"),
										menu: [
											{
												id: u.$XX.ViewTitleContext,
												when: d.$Kj.or(
													d.$Kj.and(
														d.$Kj.equals("view", A.id),
														d.$Kj.equals(`${A.id}.defaultViewLocation`, !1),
													),
												),
												group: "1_hide",
												order: 2,
											},
										],
									});
								}
								run(O) {
									const B = O.get(i.$K1),
										U = B.getDefaultContainerById(A.id),
										z = B.getViewContainerModel(U);
									if (U.hideIfEmpty && z.visibleViewDescriptors.length === 0) {
										const F = B.getDefaultViewContainerLocation(U);
										B.moveViewContainerToLocation(U, F, void 0, this.desc.id);
									}
									B.moveViewsToContainer(
										[A],
										B.getDefaultContainerById(A.id),
										void 0,
										this.desc.id,
									),
										O.get(P.$HMb).openView(A.id, !0);
								}
							},
						);
					}
					X(A, R) {
						const O = this;
						let B = class extends s.$2Sb {
							constructor(z, F, x, H, q, V, G) {
								super(A.id, z, x, H, q, V, G, F);
							}
							m(z) {
								const F = this.D(new t.$Zc()),
									x = O.Z(z, A, R, F, this.c);
								return (
									x instanceof S.$XSb ||
										F.add(
											m.Event.any(
												x.onDidAddViews,
												x.onDidRemoveViews,
												x.onTitleAreaUpdate,
											)(() => {
												this.R();
											}),
										),
									x
								);
							}
						};
						(B = Ne(
							[
								j(0, g.$km),
								j(1, b.$Vi),
								j(2, C.$lq),
								j(3, n.$Li),
								j(4, p.$iP),
								j(5, o.$Xxb),
								j(6, f.$q2),
							],
							B,
						)),
							E.$Io
								.as(D(R))
								.registerPaneComposite(
									s.$3Sb.create(
										B,
										A.id,
										typeof A.title == "string" ? A.title : A.title.value,
										(0, r.$lg)(A.icon) ? A.icon : void 0,
										A.order,
										A.requestedIndex,
										A.icon instanceof y.URI ? A.icon : void 0,
									),
								);
					}
					Y(A, R) {
						E.$Io.as(D(R)).deregisterPaneComposite(A.id);
					}
					Z(A, R, O, B, U) {
						const z = U.createInstance(
							R.ctorDescriptor.ctor,
							...(R.ctorDescriptor.staticArguments || []),
						);
						return (
							this.b.set(z.getId(), z),
							B.add((0, t.$Yc)(() => this.b.delete(z.getId()))),
							B.add(z.onDidAddViews((F) => this.w(F))),
							B.add(
								z.onDidChangeViewVisibility((F) =>
									this.y(F, F.isBodyVisible()),
								),
							),
							B.add(z.onDidRemoveViews((F) => this.z(F))),
							B.add(
								z.onDidFocusView((F) => {
									this.n.get() !== F.id && (this.n.set(F.id), this.g.fire());
								}),
							),
							B.add(
								z.onDidBlurView((F) => {
									this.n.get() === F.id && (this.n.reset(), this.g.fire());
								}),
							),
							z
						);
					}
				};
				(e.$2uc = k),
					(e.$2uc = k =
						Ne(
							[
								j(0, i.$K1),
								j(1, I.$6Sb),
								j(2, d.$6j),
								j(3, l.$mEb),
								j(4, T.$IY),
							],
							k,
						));
				function L(N) {
					return `viewContainer.${N}.enabled`;
				}
				function D(N) {
					switch (N) {
						case i.ViewContainerLocation.AuxiliaryBar:
							return s.$4Sb.Auxiliary;
						case i.ViewContainerLocation.Panel:
							return s.$4Sb.Panels;
						case i.ViewContainerLocation.Sidebar:
						default:
							return s.$4Sb.Viewlets;
					}
				}
				function M(N) {
					switch (N) {
						case i.ViewContainerLocation.AuxiliaryBar:
							return l.Parts.AUXILIARYBAR_PART;
						case i.ViewContainerLocation.Panel:
							return l.Parts.PANEL_PART;
						case i.ViewContainerLocation.Sidebar:
						default:
							return l.Parts.SIDEBAR_PART;
					}
				}
				(0, c.$lK)(P.$HMb, k, c.InstantiationType.Eager);
			},
		),
		