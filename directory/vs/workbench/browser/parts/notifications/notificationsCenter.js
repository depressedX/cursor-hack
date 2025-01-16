define(
			de[3402],
			he([
				1, 0, 123, 35, 610, 96, 6, 8, 682, 1702, 5, 7, 51, 66, 4, 105, 1227, 50,
				39, 28, 100, 40, 75, 49, 437, 184, 2350, 1516,
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
			) {
				"use strict";
				var I;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$h3c = void 0);
				let T = class extends i.$pP {
					static {
						I = this;
					}
					static {
						this.c = new a.$pgb(450, 400);
					}
					static {
						this.f = 10;
					}
					constructor(k, L, D, M, N, A, R, O, B, U, z) {
						super(D),
							(this.F = k),
							(this.G = L),
							(this.H = M),
							(this.I = N),
							(this.J = A),
							(this.L = R),
							(this.M = O),
							(this.N = B),
							(this.O = U),
							(this.P = z),
							(this.g = this.D(new C.$re())),
							(this.onDidChangeVisibility = this.g.event),
							(this.y = s.$oQb.bindTo(this.J)),
							(this.y = s.$oQb.bindTo(A)),
							this.Q();
					}
					Q() {
						this.D(this.G.onDidChangeNotification((k) => this.X(k))),
							this.D(
								this.I.onDidLayoutMainContainer((k) =>
									this.layout(a.$pgb.lift(k)),
								),
							),
							this.D(this.N.onDidChangeFilter(() => this.R()));
					}
					R() {
						this.N.getFilter() === l.NotificationsFilter.ERROR && this.hide();
					}
					get isVisible() {
						return !!this.t;
					}
					show() {
						if (this.t) {
							const D = (0, b.$wg)(this.s);
							D.show(), D.focusFirst();
							return;
						}
						this.j || this.U(), this.S();
						const [k, L] = (0, b.$xg)(this.s, this.j);
						(this.t = !0),
							L.classList.add("visible"),
							k.show(),
							this.layout(this.u),
							k.updateNotificationsList(0, 0, this.G.notifications),
							k.focusFirst(),
							this.updateStyles(),
							this.G.notifications.forEach((D) => D.updateVisibility(!0)),
							this.y.set(!0),
							this.g.fire();
					}
					S() {
						const [k, L] = (0, b.$xg)(this.r, this.z);
						this.G.notifications.length === 0
							? ((k.textContent = (0, n.localize)(3593, null)),
								(L.enabled = !1))
							: ((k.textContent = (0, n.localize)(3594, null)),
								(L.enabled = this.G.notifications.some((D) => !D.hasProgress)));
					}
					U() {
						(this.j = document.createElement("div")),
							this.j.classList.add("notifications-center"),
							(this.m = document.createElement("div")),
							this.m.classList.add("notifications-center-header"),
							this.j.appendChild(this.m),
							(this.r = document.createElement("span")),
							this.r.classList.add("notifications-center-header-title"),
							this.m.appendChild(this.r);
						const k = document.createElement("div");
						k.classList.add("notifications-center-header-toolbar"),
							this.m.appendChild(k);
						const L = this.D(this.H.createInstance(m.$52c)),
							D = this,
							M = this.D(
								new g.$eib(k, {
									ariaLabel: (0, n.localize)(3595, null),
									actionRunner: L,
									actionViewItemProvider: (A, R) => {
										if (A.id === p.$02c.ID)
											return this.D(
												this.H.createInstance(
													v.$Pob,
													A,
													{
														getActions() {
															const O = [
																	(0, o.$wj)({
																		id: p.$82c.ID,
																		label:
																			D.N.getFilter() ===
																			l.NotificationsFilter.OFF
																				? (0, n.localize)(3596, null)
																				: (0, n.localize)(3597, null),
																		run: () =>
																			D.N.setFilter(
																				D.N.getFilter() ===
																					l.NotificationsFilter.OFF
																					? l.NotificationsFilter.ERROR
																					: l.NotificationsFilter.OFF,
																			),
																	}),
																],
																B = D.N.getFilters().sort((U, z) =>
																	U.label.localeCompare(z.label),
																);
															for (const U of B.slice(0, I.f))
																O.length === 1 && O.push(new o.$tj()),
																	O.push(
																		(0, o.$wj)({
																			id: `${p.$82c.ID}.${U.id}`,
																			label: U.label,
																			checked:
																				U.filter !==
																				l.NotificationsFilter.ERROR,
																			run: () =>
																				D.N.setFilter({
																					...U,
																					filter:
																						U.filter ===
																						l.NotificationsFilter.ERROR
																							? l.NotificationsFilter.OFF
																							: l.NotificationsFilter.ERROR,
																				}),
																		}),
																	);
															return (
																B.length > I.f &&
																	(O.push(new o.$tj()),
																	O.push(
																		D.D(
																			D.H.createInstance(
																				p.$92c,
																				p.$92c.ID,
																				(0, n.localize)(3598, null),
																			),
																		),
																	)),
																O
															);
														},
													},
													this.P,
													{
														...R,
														actionRunner: L,
														classNames: A.class,
														keybindingProvider: (O) =>
															this.M.lookupKeybinding(O.id),
													},
												),
											);
									},
								}),
							);
						(this.z = this.D(
							this.H.createInstance(p.$72c, p.$72c.ID, p.$72c.LABEL),
						)),
							M.push(this.z, {
								icon: !0,
								label: !1,
								keybinding: this.W(this.z),
							}),
							(this.C = this.D(
								this.H.createInstance(p.$02c, p.$02c.ID, p.$02c.LABEL),
							)),
							M.push(this.C, { icon: !0, label: !1 });
						const N = this.D(
							this.H.createInstance(p.$$2c, p.$$2c.ID, p.$$2c.LABEL),
						);
						M.push(N, { icon: !0, label: !1, keybinding: this.W(N) }),
							(this.s = this.H.createInstance(r.$g3c, this.j, {
								widgetAriaLabel: (0, n.localize)(3599, null),
							})),
							this.F.appendChild(this.j);
					}
					W(k) {
						const L = this.M.lookupKeybinding(k.id);
						return L ? L.getLabel() : null;
					}
					X(k) {
						if (!this.t) return;
						let L = !1;
						const [D, M] = (0, b.$xg)(this.s, this.j);
						switch (k.kind) {
							case w.NotificationChangeType.ADD:
								D.updateNotificationsList(k.index, 0, [k.item]),
									k.item.updateVisibility(!0);
								break;
							case w.NotificationChangeType.CHANGE:
								switch (k.detail) {
									case w.NotificationViewItemContentChangeKind.ACTIONS:
										D.updateNotificationsList(k.index, 1, [k.item]);
										break;
									case w.NotificationViewItemContentChangeKind.MESSAGE:
										k.item.expanded && D.updateNotificationHeight(k.item);
										break;
								}
								break;
							case w.NotificationChangeType.EXPAND_COLLAPSE:
								D.updateNotificationsList(k.index, 1, [k.item]);
								break;
							case w.NotificationChangeType.REMOVE:
								(L = (0, a.$Lgb)(M)),
									D.updateNotificationsList(k.index, 1),
									k.item.updateVisibility(!1);
								break;
						}
						this.S(),
							this.G.notifications.length === 0 &&
								(this.hide(), L && this.L.activeGroup.focus());
					}
					hide() {
						if (!this.t || !this.j || !this.s) return;
						const k = (0, a.$Lgb)(this.j);
						(this.t = !1),
							this.j.classList.remove("visible"),
							this.s.hide(),
							this.G.notifications.forEach((L) => L.updateVisibility(!1)),
							this.y.set(!1),
							this.g.fire(),
							k && this.L.activeGroup.focus();
					}
					updateStyles() {
						if (this.j && this.m) {
							const k = this.w(h.$bR);
							this.j.style.boxShadow = k ? `0 0 8px 2px ${k}` : "";
							const L = this.w(t.$ZGb);
							this.j.style.border = L ? `1px solid ${L}` : "";
							const D = this.w(t.$5Gb);
							this.m.style.color = D ?? "";
							const M = this.w(t.$6Gb);
							this.m.style.background = M ?? "";
						}
					}
					layout(k) {
						if (((this.u = k), this.t && this.j)) {
							const L = I.c.width,
								D = I.c.height;
							let M = L,
								N = D;
							this.u &&
								((M = this.u.width),
								(M -= 2 * 8),
								(N = this.u.height - 35),
								this.I.isVisible(E.Parts.STATUSBAR_PART, y.$Bfb) && (N -= 22),
								this.I.isVisible(E.Parts.TITLEBAR_PART, y.$Bfb) && (N -= 22),
								(N -= 2 * 12)),
								(0, b.$wg)(this.s).layout(Math.min(L, M), Math.min(D, N));
						}
					}
					clearAll() {
						this.hide();
						for (const k of [...this.G.notifications])
							k.hasProgress || k.close(), this.O.playSignal(S.$Twb.clear);
					}
				};
				(e.$h3c = T),
					(e.$h3c =
						T =
						I =
							Ne(
								[
									j(2, i.$iP),
									j(3, u.$Li),
									j(4, E.$mEb),
									j(5, d.$6j),
									j(6, c.$EY),
									j(7, f.$uZ),
									j(8, l.$4N),
									j(9, S.$Owb),
									j(10, $.$Xxb),
								],
								T,
							));
			},
		),
		