define(
			de[2951],
			he([
				1, 0, 7, 41, 9, 4, 183, 105, 50, 5, 3, 49, 610, 1227, 39, 436, 40, 24,
				14, 26, 437, 265, 159, 6, 106, 27, 114, 95, 72,
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
				var k, L;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$f3c = e.$e3c = e.$d3c = void 0);
				class D {
					static {
						this.a = 42;
					}
					static {
						this.b = 22;
					}
					constructor(O) {
						this.c = this.d(O);
					}
					d(O) {
						const B = document.createElement("div");
						return (
							B.classList.add("notification-offset-helper"), O.appendChild(B), B
						);
					}
					getHeight(O) {
						if (!O.expanded) return D.a;
						let B = D.a;
						const U = this.f(O);
						if (D.b < U) {
							const F = U - D.b;
							B += F;
						}
						return (
							(O.source || (0, o.$Pb)(O.actions && O.actions.primary)) &&
								(B += D.a),
							B === D.a && O.collapse(!0),
							B
						);
					}
					f(O) {
						let B = 0;
						O.hasProgress || B++,
							O.canCollapse && B++,
							(0, o.$Pb)(O.actions && O.actions.secondary) && B++,
							(this.c.style.width = `${450 - (40 + B * 30 - Math.max(B - 1, 0) * 4)}px`);
						const U = M.render(O.message);
						this.c.appendChild(U);
						const z = Math.max(this.c.offsetHeight, this.c.scrollHeight);
						return (0, t.$9fb)(this.c), z;
					}
					getTemplateId(O) {
						if (O instanceof h.$Fwc) return N.TEMPLATE_ID;
						throw new Error("unknown element type: " + O);
					}
				}
				e.$d3c = D;
				class M {
					static render(O, B) {
						const U = document.createElement("span");
						for (const z of O.linkedText.nodes)
							if (typeof z == "string")
								U.appendChild(document.createTextNode(z));
							else {
								let F = z.title;
								!F && z.href.startsWith("command:")
									? (F = (0, E.localize)(3631, null, z.href.substr(8)))
									: F || (F = z.href);
								const x = (0, t.$)(
									"a",
									{ href: z.href, title: F, tabIndex: 0 },
									z.label,
								);
								if (B) {
									const H = (J) => {
											(0, t.$_gb)(J) && t.$ahb.stop(J, !0), B.callback(z.href);
										},
										q = B.toDispose.add(new l.$mib(x, t.$$gb.CLICK)).event,
										V = B.toDispose.add(new l.$mib(x, t.$$gb.KEY_DOWN)).event,
										G = $.Event.chain(V, (J) =>
											J.filter((W) => {
												const X = new I.$7fb(W);
												return (
													X.equals(S.KeyCode.Space) || X.equals(S.KeyCode.Enter)
												);
											}),
										);
									B.toDispose.add(y.$Qhb.addTarget(x));
									const K = B.toDispose.add(
										new l.$mib(x, y.EventType.Tap),
									).event;
									$.Event.any(q, K, G)(H, null, B.toDispose);
								}
								U.appendChild(x);
							}
						return U;
					}
				}
				let N = class {
					static {
						k = this;
					}
					static {
						this.TEMPLATE_ID = "notification";
					}
					constructor(O, B, U, z) {
						(this.a = O), (this.b = B), (this.c = U), (this.d = z);
					}
					get templateId() {
						return k.TEMPLATE_ID;
					}
					renderTemplate(O) {
						const B = Object.create(null);
						(B.toDispose = new u.$Zc()),
							(B.container = document.createElement("div")),
							B.container.classList.add("notification-list-item"),
							(B.mainRow = document.createElement("div")),
							B.mainRow.classList.add("notification-list-item-main-row"),
							(B.icon = document.createElement("div")),
							B.icon.classList.add("notification-list-item-icon", "codicon"),
							(B.message = document.createElement("div")),
							B.message.classList.add("notification-list-item-message");
						const U = this,
							z = document.createElement("div");
						return (
							z.classList.add("notification-list-item-toolbar-container"),
							(B.toolbar = new d.$eib(z, {
								ariaLabel: (0, E.localize)(3632, null),
								actionViewItemProvider: (F, x) => {
									if (F instanceof c.$b3c)
										return B.toDispose.add(
											new s.$Pob(
												F,
												{
													getActions() {
														const H = [],
															q = {
																id: F.notification.sourceId,
																label: F.notification.source,
															};
														if ((0, p.$5N)(q)) {
															const V =
																U.d.getFilter(q) ===
																p.NotificationsFilter.ERROR;
															H.push(
																(0, m.$wj)({
																	id: q.id,
																	label: V
																		? (0, E.localize)(3633, null, q.label)
																		: (0, E.localize)(3634, null, q.label),
																	run: () =>
																		U.d.setFilter({
																			...q,
																			filter: V
																				? p.NotificationsFilter.OFF
																				: p.NotificationsFilter.ERROR,
																		}),
																}),
															),
																F.notification.actions?.secondary?.length &&
																	H.push(new m.$tj());
														}
														return (
															Array.isArray(
																F.notification.actions?.secondary,
															) && H.push(...F.notification.actions.secondary),
															H
														);
													},
												},
												this.b,
												{ ...x, actionRunner: this.a, classNames: F.class },
											),
										);
								},
								actionRunner: this.a,
							})),
							B.toDispose.add(B.toolbar),
							(B.detailsRow = document.createElement("div")),
							B.detailsRow.classList.add("notification-list-item-details-row"),
							(B.source = document.createElement("div")),
							B.source.classList.add("notification-list-item-source"),
							(B.buttonsContainer = document.createElement("div")),
							B.buttonsContainer.classList.add(
								"notification-list-item-buttons-container",
							),
							O.appendChild(B.container),
							B.container.appendChild(B.detailsRow),
							B.detailsRow.appendChild(B.source),
							B.detailsRow.appendChild(B.buttonsContainer),
							B.container.appendChild(B.mainRow),
							B.mainRow.appendChild(B.icon),
							B.mainRow.appendChild(B.message),
							B.mainRow.appendChild(z),
							(B.progress = new g.$bpb(O, v.$nyb)),
							B.toDispose.add(B.progress),
							(B.renderer = this.c.createInstance(A, B, this.a)),
							B.toDispose.add(B.renderer),
							B
						);
					}
					renderElement(O, B, U) {
						U.renderer.setInput(O);
					}
					disposeTemplate(O) {
						(0, u.$Vc)(O.toDispose);
					}
				};
				(e.$e3c = N),
					(e.$e3c = N = k = Ne([j(1, a.$Xxb), j(2, r.$Li), j(3, p.$4N)], N));
				let A = class extends u.$1c {
					static {
						L = this;
					}
					static {
						this.f = [p.Severity.Info, p.Severity.Warning, p.Severity.Error];
					}
					constructor(O, B, U, z, F, x, H) {
						super(),
							(this.h = O),
							(this.j = B),
							(this.m = U),
							(this.n = z),
							(this.q = F),
							(this.r = x),
							(this.s = H),
							(this.g = this.D(new u.$Zc())),
							L.a ||
								((L.a = z.createInstance(c.$62c, c.$62c.ID, c.$62c.LABEL)),
								(L.b = z.createInstance(c.$_2c, c.$_2c.ID, c.$_2c.LABEL)),
								(L.c = z.createInstance(c.$a3c, c.$a3c.ID, c.$a3c.LABEL)));
					}
					setInput(O) {
						this.g.clear(), this.t(O);
					}
					t(O) {
						this.h.container.classList.toggle("expanded", O.expanded),
							this.g.add(
								(0, t.$0fb)(this.h.container, t.$$gb.MOUSE_UP, (F) => {
									F.button === 1 && t.$ahb.stop(F, !0);
								}),
							),
							this.g.add(
								(0, t.$0fb)(this.h.container, t.$$gb.AUXCLICK, (F) => {
									!O.hasProgress &&
										F.button === 1 &&
										(t.$ahb.stop(F, !0), O.close());
								}),
							),
							this.u(O);
						const B = this.g.add(
								this.s.setupManagedHover(
									(0, T.$cib)("mouse"),
									this.h.message,
									"",
								),
							),
							U = this.w(O, B);
						this.y(O, U);
						const z = this.g.add(
							this.s.setupManagedHover((0, T.$cib)("mouse"), this.h.source, ""),
						);
						this.z(O, z),
							this.C(O),
							this.F(O),
							this.g.add(
								O.onDidChangeContent((F) => {
									switch (F.kind) {
										case h.NotificationViewItemContentChangeKind.SEVERITY:
											this.u(O);
											break;
										case h.NotificationViewItemContentChangeKind.PROGRESS:
											this.F(O);
											break;
										case h.NotificationViewItemContentChangeKind.MESSAGE:
											this.w(O, B);
											break;
									}
								}),
							);
					}
					u(O) {
						L.f.forEach((B) => {
							O.severity !== B &&
								this.h.icon.classList.remove(
									...b.ThemeIcon.asClassNameArray(this.G(B)),
								);
						}),
							this.h.icon.classList.add(
								...b.ThemeIcon.asClassNameArray(this.G(O.severity)),
							);
					}
					w(O, B) {
						(0, t.$9fb)(this.h.message),
							this.h.message.appendChild(
								M.render(O.message, {
									callback: (z) =>
										this.m.open(w.URI.parse(z), { allowCommands: !0 }),
									toDispose: this.g,
								}),
							);
						const U =
							O.canCollapse &&
							!O.expanded &&
							this.h.message.scrollWidth > this.h.message.clientWidth;
						return B.update(U ? this.h.message.textContent + "" : ""), U;
					}
					y(O, B) {
						const U = [];
						if ((0, o.$Pb)(O.actions?.secondary)) {
							const F = this.n.createInstance(
								c.$b3c,
								c.$b3c.ID,
								c.$b3c.LABEL,
								O,
							);
							U.push(F), this.g.add(F);
						}
						let z = !1;
						O.canCollapse && (O.expanded || O.source || B) && (z = !0),
							z && U.push(O.expanded ? L.c : L.b),
							O.hasProgress || U.push(L.a),
							this.h.toolbar.clear(),
							(this.h.toolbar.context = O),
							U.forEach((F) =>
								this.h.toolbar.push(F, {
									icon: !0,
									label: !1,
									keybinding: this.H(F),
								}),
							);
					}
					z(O, B) {
						O.expanded && O.source
							? ((this.h.source.textContent = (0, E.localize)(
									3635,
									null,
									O.source,
								)),
								B.update(O.source))
							: ((this.h.source.textContent = ""), B.update(""));
					}
					C(O) {
						(0, t.$9fb)(this.h.buttonsContainer);
						const B = O.actions ? O.actions.primary : void 0;
						if (O.expanded && (0, o.$Pb)(B)) {
							const U = this,
								z = new (class extends m.$sj {
									async q(x) {
										U.j.run(x, O),
											(!(x instanceof h.$Gwc) || !x.keepOpen) && O.close();
									}
								})(),
								F = this.g.add(new C.$rob(this.h.buttonsContainer));
							for (let x = 0; x < B.length; x++) {
								const H = B[x],
									q = { title: !0, secondary: x > 0, ...v.$lyb },
									V = H instanceof h.$Gwc ? H.menu : void 0,
									G = this.g.add(
										V
											? F.addButtonWithDropdown({
													...q,
													contextMenuProvider: this.r,
													actions: V,
													actionRunner: z,
												})
											: F.addButton(q),
									);
								(G.label = H.label),
									this.g.add(
										G.onDidClick((K) => {
											K && t.$ahb.stop(K, !0), z.run(H);
										}),
									);
							}
						}
					}
					F(O) {
						if (!O.hasProgress) {
							this.h.progress.stop().hide();
							return;
						}
						const B = O.progress.state;
						B.infinite
							? this.h.progress.infinite().show()
							: typeof B.total == "number" || typeof B.worked == "number"
								? (typeof B.total == "number" &&
										!this.h.progress.hasTotal() &&
										this.h.progress.total(B.total),
									typeof B.worked == "number" &&
										this.h.progress.setWorked(B.worked).show())
								: this.h.progress.done().hide();
					}
					G(O) {
						switch (O) {
							case p.Severity.Warning:
								return f.$ak.warning;
							case p.Severity.Error:
								return f.$ak.error;
						}
						return f.$ak.info;
					}
					H(O) {
						const B = this.q.lookupKeybinding(O.id);
						return B ? B.getLabel() : null;
					}
				};
				(e.$f3c = A),
					(e.$f3c =
						A =
						L =
							Ne(
								[
									j(2, i.$7rb),
									j(3, r.$Li),
									j(4, n.$uZ),
									j(5, a.$Xxb),
									j(6, P.$Uyb),
								],
								A,
							));
			},
		),
		