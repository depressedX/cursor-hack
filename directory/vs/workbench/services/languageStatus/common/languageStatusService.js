define(de[1024], he([1, 0, 37, 945, 20, 5]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$c8 = void 0),
				(e.$c8 = (0, E.$Mi)("ILanguageStatusService"));
			class C {
				constructor() {
					(this.c = new i.$N1()), (this.onDidChange = this.c.onDidChange);
				}
				addStatus(m) {
					return this.c.register(m.selector, m);
				}
				getLanguageStatus(m) {
					return this.c.ordered(m).sort((r, u) => {
						let a = u.severity - r.severity;
						return (
							a === 0 && (a = (0, t.$Ff)(r.source, u.source)),
							a === 0 && (a = (0, t.$Ff)(r.id, u.id)),
							a
						);
					});
				}
			}
			(0, w.$lK)(e.$c8, C, w.InstantiationType.Delayed);
		}),
		define(
			de[3400],
			he([1, 0, 9, 61, 67, 88, 101, 17, 42, 1024, 3]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9nc = void 0);
				let a = class {
					constructor(c, n, g, p, o) {
						(this.d = n),
							(this.e = g),
							(this.f = p),
							(this.g = o),
							(this.a = new u.$Zc()),
							(this.c = new u.$0c()),
							(this.b = c.getProxy(E.$mbb.ExtHostLanguages)),
							this.b.$acceptLanguageIds(n.getRegisteredLanguageIds()),
							this.a.add(
								n.onDidChange((f) => {
									this.b.$acceptLanguageIds(n.getRegisteredLanguageIds());
								}),
							);
					}
					dispose() {
						this.a.dispose(), this.c.dispose();
					}
					async $changeLanguage(c, n) {
						if (!this.d.isRegisteredLanguageId(n))
							return Promise.reject(new Error(`Unknown language id: ${n}`));
						const g = t.URI.revive(c),
							p = await this.f.createModelReference(g);
						try {
							p.object.textEditorModel.setLanguage(this.d.createById(n));
						} finally {
							p.dispose();
						}
					}
					async $tokensAtPosition(c, n) {
						const g = t.URI.revive(c),
							p = this.e.getModel(g);
						if (!p) return;
						p.tokenization.tokenizeIfCheap(n.lineNumber);
						const o = p.tokenization.getLineTokens(n.lineNumber),
							f = o.findTokenIndexAtOffset(n.column - 1);
						return {
							type: o.getStandardTokenType(f),
							range: new d.$iL(
								n.lineNumber,
								1 + o.getStartOffset(f),
								n.lineNumber,
								1 + o.getEndOffset(f),
							),
						};
					}
					$setLanguageStatus(c, n) {
						this.c.get(c)?.dispose(), this.c.set(c, this.g.addStatus(n));
					}
					$removeLanguageStatus(c) {
						this.c.get(c)?.dispose();
					}
				};
				(e.$9nc = a),
					(e.$9nc = a =
						Ne(
							[
								(0, C.$tmc)(E.$lbb.MainThreadLanguages),
								j(1, i.$nM),
								j(2, w.$QO),
								j(3, m.$MO),
								j(4, r.$c8),
							],
							a,
						));
			},
		),
		define(
			de[96],
			he([1, 0, 5, 180, 12, 75, 253, 139]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.PanelOpensMaximizedOptions =
						e.Position =
						e.EditorActionsLocation =
						e.EditorTabsMode =
						e.ActivityBarPosition =
						e.LayoutSettings =
						e.ZenModeSettings =
						e.Parts =
						e.$mEb =
							void 0),
					(e.$nEb = g),
					(e.$oEb = o),
					(e.$pEb = b),
					(e.$qEb = y),
					(e.$rEb = $),
					(e.$mEb = (0, t.$Ni)(i.$jEb));
				var m;
				(function (S) {
					(S.TITLEBAR_PART = "workbench.parts.titlebar"),
						(S.BANNER_PART = "workbench.parts.banner"),
						(S.ACTIVITYBAR_PART = "workbench.parts.activitybar"),
						(S.SIDEBAR_PART = "workbench.parts.sidebar"),
						(S.PANEL_PART = "workbench.parts.panel"),
						(S.AUXILIARYBAR_PART = "workbench.parts.auxiliarybar"),
						(S.EDITOR_PART = "workbench.parts.editor"),
						(S.STATUSBAR_PART = "workbench.parts.statusbar");
				})(m || (e.Parts = m = {}));
				var r;
				(function (S) {
					(S.SHOW_TABS = "zenMode.showTabs"),
						(S.HIDE_LINENUMBERS = "zenMode.hideLineNumbers"),
						(S.HIDE_STATUSBAR = "zenMode.hideStatusBar"),
						(S.HIDE_ACTIVITYBAR = "zenMode.hideActivityBar"),
						(S.CENTER_LAYOUT = "zenMode.centerLayout"),
						(S.FULLSCREEN = "zenMode.fullScreen"),
						(S.RESTORE = "zenMode.restore"),
						(S.SILENT_NOTIFICATIONS = "zenMode.silentNotifications");
				})(r || (e.ZenModeSettings = r = {}));
				var u;
				(function (S) {
					(S.ACTIVITY_BAR_LOCATION = "workbench.activityBar.location"),
						(S.EDITOR_TABS_MODE = "workbench.editor.showTabs"),
						(S.EDITOR_ACTIONS_LOCATION =
							"workbench.editor.editorActionsLocation"),
						(S.COMMAND_CENTER = "window.commandCenter"),
						(S.LAYOUT_ACTIONS = "workbench.layoutControl.enabled");
				})(u || (e.LayoutSettings = u = {}));
				var a;
				(function (S) {
					(S.DEFAULT = "default"),
						(S.TOP = "top"),
						(S.BOTTOM = "bottom"),
						(S.HIDDEN = "hidden");
				})(a || (e.ActivityBarPosition = a = {}));
				var h;
				(function (S) {
					(S.MULTIPLE = "multiple"), (S.SINGLE = "single"), (S.NONE = "none");
				})(h || (e.EditorTabsMode = h = {}));
				var c;
				(function (S) {
					(S.DEFAULT = "default"),
						(S.TITLEBAR = "titleBar"),
						(S.HIDDEN = "hidden");
				})(c || (e.EditorActionsLocation = c = {}));
				var n;
				(function (S) {
					(S[(S.LEFT = 0)] = "LEFT"),
						(S[(S.RIGHT = 1)] = "RIGHT"),
						(S[(S.BOTTOM = 2)] = "BOTTOM"),
						(S[(S.TOP = 3)] = "TOP");
				})(n || (e.Position = n = {}));
				function g(S) {
					return S === n.BOTTOM || S === n.TOP;
				}
				var p;
				(function (S) {
					(S[(S.ALWAYS = 0)] = "ALWAYS"),
						(S[(S.NEVER = 1)] = "NEVER"),
						(S[(S.REMEMBER_LAST = 2)] = "REMEMBER_LAST");
				})(p || (e.PanelOpensMaximizedOptions = p = {}));
				function o(S) {
					switch (S) {
						case n.LEFT:
							return "left";
						case n.RIGHT:
							return "right";
						case n.BOTTOM:
							return "bottom";
						case n.TOP:
							return "top";
						default:
							return "bottom";
					}
				}
				const f = {
					[o(n.LEFT)]: n.LEFT,
					[o(n.RIGHT)]: n.RIGHT,
					[o(n.BOTTOM)]: n.BOTTOM,
					[o(n.TOP)]: n.TOP,
				};
				function b(S) {
					return f[S];
				}
				function s(S) {
					switch (S) {
						case p.ALWAYS:
							return "always";
						case p.NEVER:
							return "never";
						case p.REMEMBER_LAST:
							return "preserve";
						default:
							return "preserve";
					}
				}
				const l = {
					[s(p.ALWAYS)]: p.ALWAYS,
					[s(p.NEVER)]: p.NEVER,
					[s(p.REMEMBER_LAST)]: p.REMEMBER_LAST,
				};
				function y(S) {
					return l[S];
				}
				function $(S, I, T, P) {
					if (!(0, C.$xY)(S)) return !1;
					const k = (0, d.$Mfb)(I),
						L = (0, C.$yY)(S);
					if (!w.$r) {
						const M = S.getValue(C.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY);
						if (
							(M === C.CustomTitleBarVisibility.NEVER && L) ||
							(M === C.CustomTitleBarVisibility.WINDOWED && k)
						)
							return !1;
					}
					if (!v(S)) return !0;
					if (L) return !1;
					if (w.$m && w.$p) return !k;
					if ((w.$p && !k) || ((0, d.$Wfb)() && !k)) return !0;
					switch ((0, E.$Dfb)(I) ? "hidden" : (0, C.$wY)(S)) {
						case "classic":
							return !k || !!T;
						case "compact":
						case "hidden":
							return !1;
						case "toggle":
							return !!T;
						case "visible":
							return !0;
						default:
							return w.$r ? !1 : !k || !!T;
					}
				}
				function v(S) {
					if (S.getValue(u.COMMAND_CENTER)) return !1;
					const I = S.getValue(u.ACTIVITY_BAR_LOCATION);
					if (I === a.TOP || I === a.BOTTOM) return !1;
					const T = S.getValue(u.EDITOR_ACTIONS_LOCATION),
						P = S.getValue(u.EDITOR_TABS_MODE);
					return !(
						T === c.TITLEBAR ||
						(T === c.DEFAULT && P === h.NONE) ||
						S.getValue(u.LAYOUT_ACTIONS)
					);
				}
			},
		),
		define(
			de[3401],
			he([
				1, 0, 4, 7, 105, 20, 5, 21, 35, 26, 550, 96, 50, 497, 6, 823, 251, 11,
				99, 43, 27, 8, 9, 79, 100, 2337,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_uc = void 0);
				let S = class extends u.Part {
					get minimumHeight() {
						return this.y ? this.height : 0;
					}
					get maximumHeight() {
						return this.y ? this.height : 0;
					}
					get onDidChange() {
						return this.a.event;
					}
					constructor(P, k, L, D, M) {
						super(a.Parts.BANNER_PART, { hasTitle: !1 }, P, L, k),
							(this.eb = D),
							(this.fb = M),
							(this.height = 26),
							(this.minimumWidth = 0),
							(this.maximumWidth = Number.POSITIVE_INFINITY),
							(this.a = this.D(new n.$re())),
							(this.y = !1),
							(this.db = -1),
							(this.c = this.fb.createInstance(p.$Qzb, {}));
					}
					Q(P) {
						(this.element = P),
							(this.element.tabIndex = 0),
							this.D(
								(0, i.$0fb)(this.element, i.$$gb.FOCUS, () => {
									this.db !== -1 && this.ib();
								}),
							);
						const k = this.D(this.eb.createScoped(this.element));
						return v.$mQb.bindTo(k).set(!0), this.element;
					}
					hb(P) {
						this.lb(!1),
							(0, i.$9fb)(this.element),
							typeof P.onClose == "function" && P.onClose(),
							(this.b = void 0);
					}
					ib() {
						const P = this.b?.actions?.length ?? 0;
						if (this.db < P) {
							const k = this.cb?.children[this.db];
							(0, i.$Ygb)(k) && (this.bb?.setFocusable(!1), k.focus());
						} else this.bb?.focus(0);
					}
					jb(P) {
						if (P.ariaLabel) return P.ariaLabel;
						if (typeof P.message == "string") return P.message;
					}
					kb(P) {
						if (typeof P == "string") {
							const k = (0, i.$)("span");
							return (k.innerText = P), k;
						}
						return this.c.render(P).element;
					}
					lb(P) {
						P !== this.y &&
							((this.y = P),
							(this.db = -1),
							this.M.setPartHidden(!P, a.Parts.BANNER_PART),
							this.a.fire(void 0));
					}
					focus() {
						(this.db = -1), this.element.focus();
					}
					focusNextAction() {
						const P = this.b?.actions?.length ?? 0;
						(this.db = this.db < P ? this.db + 1 : 0), this.ib();
					}
					focusPreviousAction() {
						const P = this.b?.actions?.length ?? 0;
						(this.db = this.db > 0 ? this.db - 1 : P), this.ib();
					}
					hide(P) {
						this.b?.id === P && this.lb(!1);
					}
					show(P) {
						if (P.id === this.b?.id) {
							this.lb(!0);
							return;
						}
						(0, i.$9fb)(this.element);
						const k = this.jb(P);
						k && this.element.setAttribute("aria-label", k);
						const L = (0, i.$fhb)(this.element, (0, i.$)("div.icon-container"));
						L.setAttribute("aria-hidden", "true"),
							r.ThemeIcon.isThemeIcon(P.icon)
								? L.appendChild(
										(0, i.$)(`div${r.ThemeIcon.asCSSSelector(P.icon)}`),
									)
								: (L.classList.add("custom-icon"),
									y.URI.isUri(P.icon) &&
										(L.style.backgroundImage = (0, i.$vhb)(P.icon)));
						const D = (0, i.$fhb)(
							this.element,
							(0, i.$)("div.message-container"),
						);
						if (
							(D.setAttribute("aria-hidden", "true"),
							D.appendChild(this.kb(P.message)),
							(this.cb = (0, i.$fhb)(
								this.element,
								(0, i.$)("div.message-actions-container"),
							)),
							P.actions)
						)
							for (const R of P.actions)
								this.D(
									this.fb.createInstance(
										c.Link,
										this.cb,
										{ ...R, tabIndex: -1 },
										{},
									),
								);
						const M = (0, i.$fhb)(
							this.element,
							(0, i.$)("div.action-container"),
						);
						this.bb = this.D(new w.$eib(M));
						const N = P.closeLabel ?? "Close Banner",
							A = this.D(
								new h.$rj(
									"banner.close",
									N,
									r.ThemeIcon.asClassName($.$bP),
									!0,
									() => this.hb(P),
								),
							);
						this.bb.push(A, { icon: !0, label: !1 }),
							this.bb.setFocusable(!1),
							this.lb(!0),
							(this.b = P);
					}
					toJSON() {
						return { type: a.Parts.BANNER_PART };
					}
				};
				(e.$_uc = S),
					(e.$_uc = S =
						Ne(
							[
								j(0, m.$iP),
								j(1, a.$mEb),
								j(2, d.$lq),
								j(3, l.$6j),
								j(4, C.$Li),
							],
							S,
						)),
					(0, E.$lK)(g.$$uc, S, E.InstantiationType.Eager),
					b.$TX.registerCommandAndKeybindingRule({
						id: "workbench.banner.focusBanner",
						weight: b.KeybindingWeight.WorkbenchContrib,
						primary: s.KeyCode.Escape,
						when: v.$mQb,
						handler: (T) => {
							T.get(g.$$uc).focus();
						},
					}),
					b.$TX.registerCommandAndKeybindingRule({
						id: "workbench.banner.focusNextAction",
						weight: b.KeybindingWeight.WorkbenchContrib,
						primary: s.KeyCode.RightArrow,
						secondary: [s.KeyCode.DownArrow],
						when: v.$mQb,
						handler: (T) => {
							T.get(g.$$uc).focusNextAction();
						},
					}),
					b.$TX.registerCommandAndKeybindingRule({
						id: "workbench.banner.focusPreviousAction",
						weight: b.KeybindingWeight.WorkbenchContrib,
						primary: s.KeyCode.LeftArrow,
						secondary: [s.KeyCode.UpArrow],
						when: v.$mQb,
						handler: (T) => {
							T.get(g.$$uc).focusPreviousAction();
						},
					});
				class I extends o.$3X {
					static {
						this.ID = "workbench.action.focusBanner";
					}
					static {
						this.LABEL = (0, t.localize2)(3044, "Focus Banner");
					}
					constructor() {
						super({ id: I.ID, title: I.LABEL, category: f.$ck.View, f1: !0 });
					}
					async run(P) {
						P.get(a.$mEb).focusPart(a.Parts.BANNER_PART);
					}
				}
				(0, o.$4X)(I);
			},
		),
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
		define(
			de[3403],
			he([1, 0, 4, 10, 21, 96, 11, 8, 968, 100, 253]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$stc = e.$rtc = void 0);
				class a extends C.$3X {
					constructor(n, g, p, o, f) {
						const b = f ? r.$GPb.toNegated() : d.$Kj.true();
						super({
							id: `toggle.${n}`,
							title: g,
							metadata: p ? { description: p } : void 0,
							toggled: d.$Kj.equals(`config.${n}`, !0),
							menu: [
								{
									id: C.$XX.TitleBarContext,
									when: b,
									order: o,
									group: "2_config",
								},
								{
									id: C.$XX.TitleBarTitleContext,
									when: b,
									order: o,
									group: "2_config",
								},
							],
						}),
							(this.a = n);
					}
					run(n, ...g) {
						const p = n.get(i.$gj),
							o = p.getValue(this.a);
						p.updateValue(this.a, !o);
					}
				}
				(0, C.$4X)(
					class extends a {
						constructor() {
							super(
								E.LayoutSettings.COMMAND_CENTER,
								(0, t.localize)(3714, null),
								(0, t.localize)(3715, null),
								1,
								!1,
							);
						}
					},
				),
					(0, C.$4X)(
						class extends a {
							constructor() {
								super(
									"workbench.layoutControl.enabled",
									(0, t.localize)(3716, null),
									(0, t.localize)(3717, null),
									2,
									!0,
								);
							}
						},
					),
					(0, C.$4X)(
						class extends C.$3X {
							constructor() {
								super({
									id: `toggle.${u.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY}`,
									title: (0, t.localize)(3718, null),
									menu: [
										{
											id: C.$XX.TitleBarContext,
											order: 0,
											when: d.$Kj.equals(r.$kQb.key, u.TitlebarStyle.NATIVE),
											group: "3_toggle",
										},
										{
											id: C.$XX.TitleBarTitleContext,
											order: 0,
											when: d.$Kj.equals(r.$kQb.key, u.TitlebarStyle.NATIVE),
											group: "3_toggle",
										},
									],
								});
							}
							run(n, ...g) {
								n.get(i.$gj).updateValue(
									u.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY,
									u.CustomTitleBarVisibility.NEVER,
								);
							}
						},
					),
					(0, C.$4X)(
						class extends C.$3X {
							constructor() {
								super({
									id: `toggle.${u.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY}.windowed`,
									title: (0, t.localize)(3719, null),
									menu: [
										{
											id: C.$XX.TitleBarContext,
											order: 1,
											when: r.$FPb,
											group: "3_toggle",
										},
										{
											id: C.$XX.TitleBarTitleContext,
											order: 1,
											when: r.$FPb,
											group: "3_toggle",
										},
									],
								});
							}
							run(n, ...g) {
								n.get(i.$gj).updateValue(
									u.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY,
									u.CustomTitleBarVisibility.WINDOWED,
								);
							}
						},
					);
				class h extends C.$3X {
					constructor() {
						super({
							id: "toggle.toggleCustomTitleBar",
							title: (0, t.localize)(3720, null),
							toggled: r.$lQb,
							menu: [
								{
									id: C.$XX.MenubarAppearanceMenu,
									order: 6,
									when: d.$Kj.or(
										d.$Kj.and(
											d.$Kj.equals(r.$kQb.key, u.TitlebarStyle.NATIVE),
											d.$Kj
												.and(
													d.$Kj.equals(
														"config.workbench.layoutControl.enabled",
														!1,
													),
													d.$Kj.equals("config.window.commandCenter", !1),
													d.$Kj.notEquals(
														"config.workbench.editor.editorActionsLocation",
														"titleBar",
													),
													d.$Kj.notEquals(
														"config.workbench.activityBar.location",
														"top",
													),
													d.$Kj.notEquals(
														"config.workbench.activityBar.location",
														"bottom",
													),
												)
												?.negate(),
										),
										r.$FPb,
									),
									group: "2_workbench_layout",
								},
							],
						});
					}
					run(n, ...g) {
						const p = n.get(i.$gj),
							o = n.get(d.$6j);
						switch (p.getValue(u.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY)) {
							case u.CustomTitleBarVisibility.NEVER:
								p.updateValue(
									u.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY,
									u.CustomTitleBarVisibility.AUTO,
								);
								break;
							case u.CustomTitleBarVisibility.WINDOWED: {
								r.$FPb.evaluate(o.getContext(null))
									? p.updateValue(
											u.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY,
											u.CustomTitleBarVisibility.AUTO,
										)
									: p.updateValue(
											u.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY,
											u.CustomTitleBarVisibility.NEVER,
										);
								break;
							}
							case u.CustomTitleBarVisibility.AUTO:
							default:
								p.updateValue(
									u.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY,
									u.CustomTitleBarVisibility.NEVER,
								);
								break;
						}
					}
				}
				(0, C.$4X)(h),
					(0, C.$4X)(
						class extends C.$3X {
							constructor() {
								super({
									id: "showCustomTitleBar",
									title: (0, t.localize2)(3726, "Show Custom Title Bar"),
									precondition: r.$lQb.negate(),
									f1: !0,
								});
							}
							run(n, ...g) {
								n.get(i.$gj).updateValue(
									u.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY,
									u.CustomTitleBarVisibility.AUTO,
								);
							}
						},
					),
					(0, C.$4X)(
						class extends C.$3X {
							constructor() {
								super({
									id: "hideCustomTitleBar",
									title: (0, t.localize2)(3727, "Hide Custom Title Bar"),
									precondition: r.$lQb,
									f1: !0,
								});
							}
							run(n, ...g) {
								n.get(i.$gj).updateValue(
									u.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY,
									u.CustomTitleBarVisibility.NEVER,
								);
							}
						},
					),
					(0, C.$4X)(
						class extends C.$3X {
							constructor() {
								super({
									id: "hideCustomTitleBarInFullScreen",
									title: (0, t.localize2)(
										3728,
										"Hide Custom Title Bar In Full Screen",
									),
									precondition: d.$Kj.and(r.$lQb, r.$FPb),
									f1: !0,
								});
							}
							run(n, ...g) {
								n.get(i.$gj).updateValue(
									u.TitleBarSetting.CUSTOM_TITLE_BAR_VISIBILITY,
									u.CustomTitleBarVisibility.WINDOWED,
								);
							}
						},
					),
					(0, C.$4X)(
						class Ao extends C.$3X {
							static {
								this.settingsID = "workbench.editor.editorActionsLocation";
							}
							constructor() {
								const n = d.$Kj
									.and(
										d.$Kj
											.equals("config.workbench.editor.showTabs", "none")
											.negate(),
										d.$Kj.equals(`config.${Ao.settingsID}`, "default"),
									)
									?.negate();
								super({
									id: `toggle.${Ao.settingsID}`,
									title: (0, t.localize)(3721, null),
									toggled: d.$Kj
										.equals(`config.${Ao.settingsID}`, "hidden")
										.negate(),
									menu: [
										{
											id: C.$XX.TitleBarContext,
											order: 3,
											when: n,
											group: "2_config",
										},
										{
											id: C.$XX.TitleBarTitleContext,
											order: 3,
											when: n,
											group: "2_config",
										},
									],
								});
							}
							run(n, ...g) {
								const p = n.get(i.$gj),
									o = n.get(w.$lq),
									f = p.getValue(Ao.settingsID);
								if (f === "hidden") {
									if (p.getValue(E.LayoutSettings.EDITOR_TABS_MODE) !== "none")
										p.updateValue(Ao.settingsID, "titleBar");
									else {
										const s = o.get(Ao.settingsID, w.StorageScope.PROFILE);
										p.updateValue(Ao.settingsID, s ?? "default");
									}
									o.remove(Ao.settingsID, w.StorageScope.PROFILE);
								} else
									p.updateValue(Ao.settingsID, "hidden"),
										o.store(
											Ao.settingsID,
											f,
											w.StorageScope.PROFILE,
											w.StorageTarget.USER,
										);
							}
						},
					),
					(e.$rtc = {
						id: m.$6qc,
						label: (0, t.localize)(3722, null),
						tooltip: (0, t.localize)(3723, null),
						class: void 0,
						enabled: !0,
						run: function () {},
					}),
					(e.$stc = {
						id: m.$5qc,
						label: (0, t.localize)(3724, null),
						tooltip: (0, t.localize)(3725, null),
						class: void 0,
						enabled: !0,
						run: function () {},
					});
			},
		),
		define(
			de[447],
			he([1, 0, 5, 6, 3, 17, 33, 3028, 96, 10, 791, 8, 21, 505, 34, 983, 67]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$72b = e.$62b = void 0),
					(e.$62b = (0, t.$Mi)("commentService"));
				const o = "comments.continueOnComments";
				let f = class extends w.$1c {
					constructor(s, l, y, $, v, S, I) {
						super(),
							(this.H = s),
							(this.I = l),
							(this.J = y),
							(this.L = v),
							(this.M = S),
							(this.N = I),
							(this.a = this.D(new i.$re())),
							(this.onDidSetDataProvider = this.a.event),
							(this.b = this.D(new i.$re())),
							(this.onDidDeleteDataProvider = this.b.event),
							(this.c = this.D(new i.$re())),
							(this.onDidSetResourceCommentInfos = this.c.event),
							(this.f = this.D(new i.$re())),
							(this.onDidSetAllCommentThreads = this.f.event),
							(this.g = this.D(new i.$re())),
							(this.onDidUpdateCommentThreads = this.g.event),
							(this.h = this.D(new i.$re())),
							(this.onDidUpdateNotebookCommentThreads = this.h.event),
							(this.j = this.D(new i.$re())),
							(this.onDidUpdateCommentingRanges = this.j.event),
							(this.m = this.D(new i.$re())),
							(this.onDidChangeActiveEditingCommentThread = this.m.event),
							(this.n = this.D(new i.$re())),
							(this.onDidChangeCurrentCommentThread = this.n.event),
							(this.q = this.D(new i.$re())),
							(this.onDidChangeCommentingEnabled = this.q.event),
							(this.r = this.D(new i.$re())),
							(this.onDidChangeActiveCommentingRange = this.r.event),
							(this.s = new Map()),
							(this.t = new Map()),
							(this.u = !0),
							(this.y = new Map()),
							(this.z = new Set()),
							(this.C = this.D(new g.$52b())),
							(this.commentsModel = this.C),
							(this.F = new Set()),
							(this.G = new Set()),
							this.P(),
							this.Q(),
							(this.w = c.CommentContextKeys.WorkspaceHasCommenting.bindTo($));
						const T = this.D(new w.$Zc()),
							P = i.Event.debounce(
								this.L.onDidChangeValue(h.StorageScope.WORKSPACE, o, T),
								(k, L) => (k?.external ? k : L),
								500,
							);
						T.add(
							P((k) => {
								if (!k.external) return;
								const L = this.L.getObject(o, h.StorageScope.WORKSPACE);
								if (!L) return;
								this.M.debug(
									`Comments: URIs of continue on comments from storage ${L.map((M) => M.uri.toString()).join(", ")}.`,
								);
								const D = this.Y(L, this.y);
								for (const M of D) {
									const N = this.s.get(M);
									if (!N) continue;
									const A = {
										uniqueOwner: M,
										owner: N.owner,
										ownerLabel: N.label,
										pending: this.y.get(M) || [],
										added: [],
										removed: [],
										changed: [],
									};
									this.W(A);
								}
							}),
						),
							this.D(
								v.onWillSaveState(() => {
									const k = new Map();
									for (const L of this.z) {
										const D = L.provideContinueOnComments();
										this.Y(D, k);
									}
									this.X(k);
								}),
							),
							this.D(
								this.N.onModelAdded((k) => {
									this.F.has(k.uri.toString()) ||
										this.getDocumentComments(k.uri);
								}),
							);
					}
					O(s, l) {
						for (const y of l)
							y &&
								(y.commentingRanges.ranges.length > 0 ||
									y.threads.length > 0) &&
								this.F.add(s.toString());
					}
					P() {
						(this.u = this.R),
							this.D(
								this.J.onDidChangeConfiguration((s) => {
									s.affectsConfiguration("comments.visible") &&
										this.enableCommenting(this.R);
								}),
							);
					}
					Q() {
						let s = this.u;
						this.D(
							this.I.onDidChangeZenMode((l) => {
								l
									? ((s = this.u), this.enableCommenting(!1))
									: this.enableCommenting(s);
							}),
						);
					}
					get R() {
						return !!this.J.getValue(u.$32b)?.visible;
					}
					get isCommentingEnabled() {
						return this.u;
					}
					enableCommenting(s) {
						s !== this.u && ((this.u = s), this.q.fire(s));
					}
					setCurrentCommentThread(s) {
						this.n.fire(s);
					}
					setActiveEditingCommentThread(s) {
						this.m.fire(s);
					}
					async setActiveCommentAndThread(s, l) {
						const y = this.s.get(s);
						if (y)
							return (
								y !== this.S &&
									(await this.S?.setActiveCommentAndThread(void 0)),
								(this.S = y),
								y.setActiveCommentAndThread(l)
							);
					}
					setDocumentComments(s, l) {
						this.c.fire({ resource: s, commentInfos: l });
					}
					U(s, l, y, $) {
						this.C.setCommentThreads(s, l, y, $),
							this.f.fire({ ownerId: s, ownerLabel: y, commentThreads: $ });
					}
					W(s) {
						this.C.updateCommentThreads(s), this.g.fire(s);
					}
					setWorkspaceComments(s, l) {
						l.length && this.w.set(!0);
						const y = this.s.get(s);
						y && this.U(s, y.owner, y.label, l);
					}
					removeWorkspaceComments(s) {
						const l = this.s.get(s);
						l && this.U(s, l.owner, l.label, []);
					}
					registerCommentController(s, l) {
						this.s.set(s, l), this.a.fire();
					}
					unregisterCommentController(s) {
						s ? this.s.delete(s) : this.s.clear(),
							this.C.deleteCommentsByOwner(s),
							this.b.fire(s);
					}
					getCommentController(s) {
						return this.s.get(s);
					}
					async createCommentThreadTemplate(s, l, y, $) {
						const v = this.s.get(s);
						if (v) return v.createCommentThreadTemplate(l, y, $);
					}
					async updateCommentThreadTemplate(s, l, y) {
						const $ = this.s.get(s);
						$ && (await $.updateCommentThreadTemplate(l, y));
					}
					disposeCommentThread(s, l) {
						this.getCommentController(s)?.deleteCommentThreadMain(l);
					}
					getCommentMenus(s) {
						if (this.t.get(s)) return this.t.get(s);
						const l = this.H.createInstance(d.$22b);
						return this.t.set(s, l), l;
					}
					updateComments(s, l) {
						const y = this.s.get(s);
						if (y) {
							const $ = Object.assign({}, l, {
								uniqueOwner: s,
								ownerLabel: y.label,
								owner: y.owner,
							});
							this.W($);
						}
					}
					updateNotebookComments(s, l) {
						const y = Object.assign({}, l, { uniqueOwner: s });
						this.h.fire(y);
					}
					updateCommentingRanges(s, l) {
						if (l?.schemes && l.schemes.length > 0)
							for (const y of l.schemes) this.G.add(y);
						this.w.set(!0), this.j.fire({ uniqueOwner: s });
					}
					async toggleReaction(s, l, y, $, v) {
						const S = this.s.get(s);
						if (S)
							return S.toggleReaction(l, y, $, v, C.CancellationToken.None);
						throw new Error("Not supported");
					}
					hasReactionHandler(s) {
						const l = this.s.get(s);
						return l ? !!l.features.reactionHandler : !1;
					}
					async getDocumentComments(s) {
						const l = [];
						for (const $ of this.s.values())
							l.push(
								$.getDocumentComments(s, C.CancellationToken.None)
									.then((v) => {
										for (const I of v.threads)
											I.comments?.length === 0 &&
												I.range &&
												this.removeContinueOnComment({
													range: I.range,
													uri: s,
													uniqueOwner: v.uniqueOwner,
												});
										const S = this.y.get(v.uniqueOwner);
										return (
											(v.pendingCommentThreads = S?.filter(
												(I) => I.uri.toString() === s.toString(),
											)),
											v
										);
									})
									.catch((v) => null),
							);
						const y = await Promise.all(l);
						return this.O(s, y), y;
					}
					async getNotebookComments(s) {
						const l = [];
						return (
							this.s.forEach((y) => {
								l.push(
									y
										.getNotebookComments(s, C.CancellationToken.None)
										.catch(($) => null),
								);
							}),
							Promise.all(l)
						);
					}
					registerContinueOnCommentProvider(s) {
						return (
							this.z.add(s),
							{
								dispose: () => {
									this.z.delete(s);
								},
							}
						);
					}
					X(s) {
						const l = [];
						for (const y of s.values()) l.push(...y);
						this.M.debug(
							`Comments: URIs of continue on comments to add to storage ${l.map((y) => y.uri.toString()).join(", ")}.`,
						),
							this.L.store(
								o,
								l,
								h.StorageScope.WORKSPACE,
								h.StorageTarget.USER,
							);
					}
					removeContinueOnComment(s) {
						const l = this.y.get(s.uniqueOwner);
						if (l) {
							const y = l.findIndex(
								($) =>
									$.uri.toString() === s.uri.toString() &&
									E.$iL.equalsRange($.range, s.range) &&
									(s.isReply === void 0 || $.isReply === s.isReply),
							);
							if (y > -1) return l.splice(y, 1)[0];
						}
					}
					Y(s, l) {
						const y = new Set();
						for (const $ of s)
							if (!l.has($.uniqueOwner))
								l.set($.uniqueOwner, [$]), y.add($.uniqueOwner);
							else {
								const v = l.get($.uniqueOwner);
								v.every(
									(S) =>
										S.uri.toString() !== $.uri.toString() ||
										!E.$iL.equalsRange(S.range, $.range),
								) && (v.push($), y.add($.uniqueOwner));
							}
						return y;
					}
					resourceHasCommentingRanges(s) {
						return this.G.has(s.scheme) || this.F.has(s.toString());
					}
				};
				(e.$72b = f),
					(e.$72b = f =
						Ne(
							[
								j(0, t.$Li),
								j(1, m.$mEb),
								j(2, r.$gj),
								j(3, a.$6j),
								j(4, h.$lq),
								j(5, n.$ik),
								j(6, p.$QO),
							],
							f,
						));
			},
		),
		define(
			de[3404],
			he([1, 0, 3, 77, 10, 326, 21, 614, 258, 66, 96]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hQc = void 0);
				let a = class extends t.$1c {
					static {
						this.ID = "workbench.contrib.scmWorkingSets";
					}
					constructor(c, n, g, p, o) {
						super(),
							(this.f = c),
							(this.g = n),
							(this.h = g),
							(this.j = p),
							(this.m = o),
							(this.b = (0, E.$Mwb)("scm.workingSets.enabled", !1, this.f)),
							(this.c = new t.$0c()),
							this.B.add(
								(0, i.autorunWithStore)((f, b) => {
									if (!this.b.read(f)) {
										this.j.remove("scm.workingSets", C.StorageScope.WORKSPACE),
											this.c.clearAndDisposeAll();
										return;
									}
									(this.a = this.r()),
										this.h.onDidAddRepository(this.n, this, b),
										this.h.onDidRemoveRepository(this.q, this, b);
									for (const s of this.h.repositories) this.n(s);
								}),
							);
					}
					n(c) {
						const n = new t.$Zc();
						n.add(
							(0, i.autorun)(async (g) => {
								const o = c.provider.historyProvider
									.read(g)
									?.currentHistoryItemGroupId.read(g);
								if (!o) return;
								const f = (0, d.$HPc)(c.provider),
									b = this.a.get(f);
								if (!b) {
									this.a.set(f, {
										currentHistoryItemGroupId: o,
										editorWorkingSets: new Map(),
									});
									return;
								}
								b.currentHistoryItemGroupId !== o &&
									(this.s(f, o, b), await this.t(f, o));
							}),
						),
							this.c.set(c, n);
					}
					q(c) {
						this.c.deleteAndDispose(c);
					}
					r() {
						const c = new Map(),
							n = this.j.get("scm.workingSets", C.StorageScope.WORKSPACE);
						if (!n) return c;
						for (const g of JSON.parse(n))
							c.set(g.providerKey, {
								currentHistoryItemGroupId: g.currentHistoryItemGroupId,
								editorWorkingSets: new Map(g.editorWorkingSets),
							});
						return c;
					}
					s(c, n, g) {
						const p = g.currentHistoryItemGroupId,
							o = g.editorWorkingSets,
							f = this.g.saveWorkingSet(p);
						this.a.set(c, {
							currentHistoryItemGroupId: n,
							editorWorkingSets: o.set(p, f),
						});
						const b = [];
						for (const [
							s,
							{ currentHistoryItemGroupId: l, editorWorkingSets: y },
						] of this.a)
							b.push({
								providerKey: s,
								currentHistoryItemGroupId: l,
								editorWorkingSets: [...y],
							});
						this.j.store(
							"scm.workingSets",
							JSON.stringify(b),
							C.StorageScope.WORKSPACE,
							C.StorageTarget.MACHINE,
						);
					}
					async t(c, n) {
						const g = this.a.get(c);
						if (!g) return;
						let p = g.editorWorkingSets.get(n);
						if (
							(!p &&
								this.f.getValue("scm.workingSets.default") === "empty" &&
								(p = "empty"),
							p)
						) {
							const o = this.m.hasFocus(u.Parts.PANEL_PART);
							await this.g.applyWorkingSet(p, { preserveFocus: o });
						}
					}
					dispose() {
						this.c.dispose(), super.dispose();
					}
				};
				(e.$hQc = a),
					(e.$hQc = a =
						Ne(
							[
								j(0, w.$gj),
								j(1, r.$EY),
								j(2, m.$c7),
								j(3, C.$lq),
								j(4, u.$mEb),
							],
							a,
						));
			},
		),
		define(
			de[3405],
			he([
				1, 0, 7, 50, 607, 11, 8, 49, 5, 21, 32, 35, 217, 107, 1017, 145, 616,
				18, 96, 3,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$RUc = void 0),
					(t = mt(t));
				let s = class extends h.$JEb {
					constructor(y, $, v, S, I, T, P, k, L, D, M, N, A, R) {
						super(c.$pIb, y, $, v, S),
							(this.u = I),
							(this.cb = T),
							(this.db = P),
							(this.eb = k),
							(this.fb = M),
							(this.gb = N),
							(this.hb = A),
							(this.ib = R),
							(this.f = void 0),
							(this.r = !1),
							(this.s = this.D(new b.$Zc())),
							(this.j = this.D(
								D.createMenu(E.$XX.TerminalNewDropdownContext, L),
							)),
							(this.m = this.D(D.createMenu(E.$XX.TerminalInstanceContext, L)));
					}
					async setInput(y, $, v, S) {
						this.f?.terminalInstance?.detachFromElement(),
							(this.f = y),
							await super.setInput(y, $, v, S),
							this.f.terminalInstance?.attachToElement(this.c),
							this.g && this.layout(this.g),
							this.f.terminalInstance?.setVisible(
								this.isVisible() &&
									this.ib.isVisible(f.Parts.EDITOR_PART, this.window),
							),
							this.f.terminalInstance &&
								(this.D(this.f.terminalInstance.onDidFocus(() => this.jb())),
								this.f.setCopyLaunchConfig(
									this.f.terminalInstance.shellLaunchConfig,
								));
					}
					clearInput() {
						super.clearInput(),
							this.c &&
								this.f?.terminalInstance?.domElement.parentElement === this.c &&
								this.f.terminalInstance?.detachFromElement(),
							(this.f = void 0);
					}
					jb() {
						this.f?.terminalInstance &&
							this.u.setActiveInstance(this.f.terminalInstance);
					}
					focus() {
						super.focus(), this.f?.terminalInstance?.focus(!0);
					}
					Y(y) {
						(this.b = y),
							(this.c = t.$(".terminal-overflow-guard.terminal-editor")),
							this.b.appendChild(this.c),
							this.lb();
					}
					lb() {
						this.b &&
							(this.D(
								t.$0fb(this.b, "mousedown", async (y) => {
									const $ = this.u.activeInstance;
									if (this.u.instances.length > 0 && $) {
										const v = await $.handleMouseEvent(y, this.m);
										typeof v == "object" &&
											v.cancelContextMenu &&
											(this.r = !0);
									}
								}),
							),
							this.D(
								t.$0fb(this.b, "contextmenu", (y) => {
									const $ = this.eb.config.rightClickBehavior;
									if ($ === "nothing" && !y.shiftKey) {
										y.preventDefault(),
											y.stopImmediatePropagation(),
											(this.r = !1);
										return;
									} else
										!this.r &&
											$ !== "copyPaste" &&
											$ !== "paste" &&
											(this.r ||
												(0, p.$zUc)(
													this.window,
													y,
													this.f?.terminalInstance,
													this.m,
													this.gb,
												),
											y.preventDefault(),
											y.stopImmediatePropagation(),
											(this.r = !1));
								}),
							));
					}
					layout(y) {
						const $ = this.f?.terminalInstance;
						$ && ($.attachToElement(this.c), $.layout(y)), (this.g = y);
					}
					setVisible(y) {
						super.setVisible(y),
							this.f?.terminalInstance?.setVisible(
								y && this.ib.isVisible(f.Parts.EDITOR_PART, this.window),
							);
					}
					getActionViewItem(y, $) {
						switch (y.id) {
							case g.TerminalCommandId.CreateTerminalEditor:
								if (y instanceof E.$2X) {
									const v = { viewColumn: o.$JY },
										S = (0, n.$QUc)(
											v,
											this.hb.availableProfiles,
											this.nb(),
											this.hb.contributedProfiles,
											this.db,
											this.j,
										);
									return (
										this.mb(S.dropdownAction, S.dropdownMenuActions),
										this.fb.createInstance(
											w.$OYb,
											y,
											S.dropdownAction,
											S.dropdownMenuActions,
											S.className,
											this.gb,
											{ hoverDelegate: $.hoverDelegate },
										)
									);
								}
						}
						return super.getActionViewItem(y, $);
					}
					mb(y, $) {
						this.s.clear(),
							y instanceof i.$rj && this.s.add(y),
							$.filter((v) => v instanceof i.$rj).forEach((v) => this.s.add(v));
					}
					nb() {
						let y;
						try {
							y = this.hb.getDefaultProfileName();
						} catch {
							y = this.cb.defaultProfileName;
						}
						return y;
					}
				};
				(e.$RUc = s),
					(e.$RUc = s =
						Ne(
							[
								j(1, u.$km),
								j(2, a.$iP),
								j(3, r.$lq),
								j(4, c.$kIb),
								j(5, g.$reb),
								j(6, c.$iIb),
								j(7, c.$jIb),
								j(8, C.$6j),
								j(9, E.$YX),
								j(10, m.$Li),
								j(11, d.$Xxb),
								j(12, g.$teb),
								j(13, f.$mEb),
							],
							s,
						));
			},
		),
		define(
			de[3406],
			he([1, 0, 7, 194, 6, 3, 47, 8, 96, 355]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$g6c = void 0);
				let u = class extends E.$1c {
					get y() {
						return (0, t.getWindowById)(this.w, !0).window;
					}
					constructor(c, n, g, p) {
						super(),
							(this.I = n),
							(this.J = g),
							(this.L = p),
							(this.a = !0),
							(this.b = new Set()),
							(this.c = this.D(new E.$2c())),
							(this.g = this.D(new E.$Zc())),
							(this.h = ""),
							(this.m = 0),
							(this.n = void 0),
							(this.u = void 0),
							(this.w = void 0),
							(this.z = this.D(new E.$2c())),
							(this.G = !1),
							(this.M = !1),
							(this.N = this.D(new w.$re())),
							(this.onDidDispose = this.N.event),
							(this.Q = this.D(new w.$re())),
							(this.onDidFocus = this.Q.event),
							(this.R = this.D(new w.$re())),
							(this.onDidBlur = this.R.event),
							(this.S = this.D(new w.$re())),
							(this.onDidClickLink = this.S.event),
							(this.U = this.D(new w.$re())),
							(this.onDidReload = this.U.event),
							(this.W = this.D(new w.$re())),
							(this.onDidScroll = this.W.event),
							(this.X = this.D(new w.$re())),
							(this.onDidUpdateState = this.X.event),
							(this.Y = this.D(new w.$re())),
							(this.onMessage = this.Y.event),
							(this.Z = this.D(new w.$re())),
							(this.onMissingCsp = this.Z.event),
							(this.$ = this.D(new w.$re())),
							(this.onDidWheel = this.$.event),
							(this.ab = this.D(new w.$re())),
							(this.onFatalError = this.ab.event),
							(this.providedViewType = c.providedViewType),
							(this.origin = c.origin ?? (0, C.$9g)()),
							(this.j = c.title),
							(this.q = c.extension),
							(this.t = c.options),
							(this.s = c.contentOptions);
					}
					get isFocused() {
						return !!this.c.value?.isFocused;
					}
					dispose() {
						(this.M = !0), this.H?.domNode.remove(), (this.H = void 0);
						for (const c of this.b) c.resolve(!1);
						this.b.clear(), this.N.fire(), super.dispose();
					}
					get container() {
						if (this.M) throw new Error("OverlayWebview has been disposed");
						if (!this.H) {
							const c = document.createElement("div");
							(c.style.position = "absolute"),
								(c.style.overflow = "hidden"),
								(this.H = new i.$Rhb(c)),
								this.H.setVisibility("hidden"),
								this.I.getContainer(this.y).appendChild(c);
						}
						return this.H.domNode;
					}
					claim(c, n, g) {
						if (this.M) return;
						const p = this.u;
						if (
							(this.w !== n.vscodeWindowId &&
								(this.release(p),
								this.c.clear(),
								this.g.clear(),
								this.H?.domNode.remove(),
								(this.H = void 0)),
							(this.u = c),
							(this.w = n.vscodeWindowId),
							this.P(n),
							p !== c)
						) {
							const o = g || this.L;
							this.z.clear(), (this.z.value = o.createScoped(this.container));
							const f = this.C?.get();
							this.C?.reset(),
								(this.C = r.$ZIb.bindTo(o)),
								this.C.set(!!f),
								this.F?.reset(),
								(this.F = r.$2Ib.bindTo(o)),
								this.F.set(!!this.options.enableFindWidget),
								this.c.value?.setContextKeyService(this.z.value);
						}
					}
					release(c) {
						this.u === c &&
							(this.z.clear(),
							(this.u = void 0),
							this.H && this.H.setVisibility("hidden"),
							this.t.retainContextWhenHidden
								? ((this.G = !!this.C?.get()), this.hideFind(!1))
								: (this.c.clear(), this.g.clear()));
					}
					layoutWebviewOverElement(c, n, g) {
						if (!this.H || !this.H.domNode.parentElement) return;
						const p = this.I.whenContainerStylesLoaded(this.y);
						p ? p.then(() => this.O(c, n, g)) : this.O(c, n, g);
					}
					O(c, n, g) {
						if (!this.H || !this.H.domNode.parentElement) return;
						const p = c.getBoundingClientRect(),
							o = this.H.domNode.parentElement.getBoundingClientRect(),
							f = (o.height - this.H.domNode.parentElement.clientHeight) / 2,
							b = (o.width - this.H.domNode.parentElement.clientWidth) / 2;
						if (
							(this.H.setTop(p.top - o.top - f),
							this.H.setLeft(p.left - o.left - b),
							this.H.setWidth(n ? n.width : p.width),
							this.H.setHeight(n ? n.height : p.height),
							g)
						) {
							const { top: s, left: l, right: y, bottom: $ } = a(p, g);
							this.H.domNode.style.clipPath = `polygon(${l}px ${s}px, ${y}px ${s}px, ${y}px ${$}px, ${l}px ${$}px)`;
						}
					}
					P(c) {
						if (this.M) throw new Error("OverlayWebview is disposed");
						if (!this.c.value) {
							const n = this.J.createWebviewElement({
								providedViewType: this.providedViewType,
								origin: this.origin,
								title: this.j,
								options: this.t,
								contentOptions: this.s,
								extension: this.extension,
							});
							(this.c.value = n),
								(n.state = this.n),
								this.z.value && this.c.value.setContextKeyService(this.z.value),
								this.h && n.setHtml(this.h),
								this.t.tryRestoreScrollPosition &&
									(n.initialScrollProgress = this.m),
								this.F?.set(!!this.options.enableFindWidget),
								n.mountTo(this.container, c),
								this.g.clear(),
								this.g.add(
									n.onDidFocus(() => {
										this.Q.fire();
									}),
								),
								this.g.add(
									n.onDidBlur(() => {
										this.R.fire();
									}),
								),
								this.g.add(
									n.onDidClickLink((g) => {
										this.S.fire(g);
									}),
								),
								this.g.add(
									n.onMessage((g) => {
										this.Y.fire(g);
									}),
								),
								this.g.add(
									n.onMissingCsp((g) => {
										this.Z.fire(g);
									}),
								),
								this.g.add(
									n.onDidWheel((g) => {
										this.$.fire(g);
									}),
								),
								this.g.add(
									n.onDidReload(() => {
										this.U.fire();
									}),
								),
								this.g.add(
									n.onFatalError((g) => {
										this.ab.fire(g);
									}),
								),
								this.g.add(
									n.onDidScroll((g) => {
										(this.m = g.scrollYPercentage), this.W.fire(g);
									}),
								),
								this.g.add(
									n.onDidUpdateState((g) => {
										(this.n = g), this.X.fire(g);
									}),
								),
								this.a &&
									this.b.forEach(async (g) => {
										g.resolve(await n.postMessage(g.message, g.transfer));
									}),
								(this.a = !1),
								this.b.clear();
						}
						this.options.retainContextWhenHidden &&
							this.G &&
							(this.showFind(!1), (this.G = !1)),
							this.H?.setVisibility("visible");
					}
					setHtml(c) {
						(this.h = c), this.bb((n) => n.setHtml(c));
					}
					setTitle(c) {
						(this.j = c), this.bb((n) => n.setTitle(c));
					}
					get initialScrollProgress() {
						return this.m;
					}
					set initialScrollProgress(c) {
						(this.m = c), this.bb((n) => (n.initialScrollProgress = c));
					}
					get state() {
						return this.n;
					}
					set state(c) {
						(this.n = c), this.bb((n) => (n.state = c));
					}
					get extension() {
						return this.q;
					}
					set extension(c) {
						(this.q = c), this.bb((n) => (n.extension = c));
					}
					get options() {
						return this.t;
					}
					set options(c) {
						this.t = { customClasses: this.t.customClasses, ...c };
					}
					get contentOptions() {
						return this.s;
					}
					set contentOptions(c) {
						(this.s = c), this.bb((n) => (n.contentOptions = c));
					}
					set localResourcesRoot(c) {
						this.bb((n) => (n.localResourcesRoot = c));
					}
					async postMessage(c, n) {
						if (this.c.value) return this.c.value.postMessage(c, n);
						if (this.a) {
							let g;
							const p = new Promise((o) => (g = o));
							return this.b.add({ message: c, transfer: n, resolve: g }), p;
						}
						return !1;
					}
					focus() {
						this.c.value?.focus();
					}
					reload() {
						this.c.value?.reload();
					}
					selectAll() {
						this.c.value?.selectAll();
					}
					copy() {
						this.c.value?.copy();
					}
					paste() {
						this.c.value?.paste();
					}
					cut() {
						this.c.value?.cut();
					}
					undo() {
						this.c.value?.undo();
					}
					redo() {
						this.c.value?.redo();
					}
					showFind(c = !0) {
						this.c.value && (this.c.value.showFind(c), this.C?.set(!0));
					}
					hideFind(c = !0) {
						this.C?.reset(), this.c.value?.hideFind(c);
					}
					runFindAction(c) {
						this.c.value?.runFindAction(c);
					}
					bb(c) {
						this.c.value && c(this.c.value);
					}
					windowDidDragStart() {
						this.c.value?.windowDidDragStart();
					}
					windowDidDragEnd() {
						this.c.value?.windowDidDragEnd();
					}
					setContextKeyService(c) {
						this.c.value?.setContextKeyService(c);
					}
				};
				(e.$g6c = u),
					(e.$g6c = u = Ne([j(1, m.$mEb), j(2, r.$3Ib), j(3, d.$6j)], u));
				function a(h, c) {
					const n = c.getBoundingClientRect(),
						g = Math.max(n.top - h.top, 0),
						p = Math.max(h.width - (h.right - n.right), 0),
						o = Math.max(h.height - (h.bottom - n.bottom), 0),
						f = Math.max(n.left - h.left, 0);
					return { top: g, right: p, bottom: o, left: f };
				}
			},
		),
		define(
			de[1025],
			he([
				1, 0, 7, 6, 3, 12, 47, 4, 8, 21, 32, 35, 217, 1274, 566, 66, 18, 87, 96,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pnc = e.$onc = void 0),
					(t = mt(t)),
					(d = mt(d)),
					(e.$onc = new m.$5j("activeWebviewPanelId", "", {
						type: "string",
						description: d.localize(11378, null),
					}));
				let s = class extends h.$JEb {
					static {
						b = this;
					}
					static {
						this.ID = "WebviewEditor";
					}
					get onDidFocus() {
						return this.m.event;
					}
					constructor(y, $, v, S, I, T, P, k, L) {
						super(b.ID, y, $, v, S),
							(this.s = I),
							(this.u = T),
							(this.$ = P),
							(this.cb = k),
							(this.db = L),
							(this.c = !1),
							(this.f = !1),
							(this.g = this.D(new w.$Zc())),
							(this.j = this.D(new w.$2c())),
							(this.m = this.D(new i.$re())),
							(this.r = this.D(new w.$2c()));
						const D = I.getPart(y);
						this.D(
							i.Event.any(
								D.onDidScroll,
								D.onDidAddGroup,
								D.onDidRemoveGroup,
								D.onDidMoveGroup,
							)(() => {
								this.eb && this.c && this.ib(this.eb);
							}),
						);
					}
					get eb() {
						return this.input instanceof n.$W4b ? this.input.webview : void 0;
					}
					get scopedContextKeyService() {
						return this.r.value;
					}
					Y(y) {
						const $ = document.createElement("div");
						(this.a = $),
							(this.a.id = `webview-editor-element-${(0, C.$9g)()}`),
							y.appendChild($),
							(this.r.value = this.D(this.db.createScoped($)));
					}
					dispose() {
						(this.f = !0), this.a?.remove(), (this.a = void 0), super.dispose();
					}
					layout(y) {
						(this.b = y), this.eb && this.c && this.ib(this.eb, y);
					}
					focus() {
						super.focus(),
							!this.j.value &&
								!E.$r &&
								(this.j.value = this.cb.onDidChangeFocus((y) => {
									y &&
										this.u.activeEditorPane === this &&
										this.$.hasFocus(f.Parts.EDITOR_PART) &&
										this.focus();
								})),
							this.eb?.focus();
					}
					Z(y) {
						(this.c = y),
							this.input instanceof n.$W4b &&
								this.eb &&
								(y ? this.hb(this.input) : this.eb.release(this)),
							super.Z(y);
					}
					clearInput() {
						this.eb && (this.eb.release(this), this.g.clear()),
							super.clearInput();
					}
					async setInput(y, $, v, S) {
						if (this.input && y.matches(this.input)) return;
						const I = y instanceof n.$W4b && y.webview === this.eb;
						this.eb && !I && this.eb.release(this),
							await super.setInput(y, $, v, S),
							await y.resolve(),
							!(S.isCancellationRequested || this.f) &&
								y instanceof n.$W4b &&
								(y.updateGroup(this.group.id),
								I || this.hb(y),
								this.b && this.layout(this.b));
					}
					hb(y) {
						y.claim(this, this.window, this.scopedContextKeyService),
							this.a &&
								(this.a.setAttribute("aria-flowto", y.webview.container.id),
								t.$Cgb(y.webview.container, this.a)),
							this.g.clear(),
							this.g.add(
								this.s.createEditorDropTarget(y.webview.container, {
									containsGroup: ($) => this.group.id === $.id,
								}),
							),
							this.g.add(new c.$R2b(this.window, () => this.eb)),
							this.ib(y.webview),
							this.g.add(this.jb(y.webview));
					}
					ib(y, $) {
						if (!this.a?.isConnected) return;
						const v = this.$.getContainer(this.window, f.Parts.EDITOR_PART);
						y.layoutWebviewOverElement(this.a.parentElement, $, v);
					}
					jb(y) {
						const $ = new w.$Zc(),
							v = t.$dhb(y.container);
						return (
							$.add(v),
							$.add(v.onDidFocus(() => this.m.fire())),
							$.add(y.onDidFocus(() => this.m.fire())),
							$
						);
					}
				};
				(e.$pnc = s),
					(e.$pnc =
						s =
						b =
							Ne(
								[
									j(1, u.$km),
									j(2, a.$iP),
									j(3, r.$lq),
									j(4, g.$EY),
									j(5, p.$IY),
									j(6, f.$mEb),
									j(7, o.$asb),
									j(8, m.$6j),
								],
								s,
							));
			},
		),
		define(
			de[3407],
			he([1, 0, 27, 71, 4, 11, 8, 43, 99, 355, 1025, 566, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ySc = e.$xSc = e.$wSc = e.$vSc = e.$uSc = void 0),
					(w = mt(w));
				const c = C.$Kj.and(
					C.$Kj.equals("activeEditor", u.$pnc.ID),
					i.EditorContextKeys.focus.toNegated(),
				);
				class n extends E.$3X {
					static {
						this.ID = "editor.action.webvieweditor.showFind";
					}
					static {
						this.LABEL = w.localize(11373, null);
					}
					constructor() {
						super({
							id: n.ID,
							title: n.LABEL,
							keybinding: {
								when: C.$Kj.and(c, r.$2Ib),
								primary: t.KeyMod.CtrlCmd | t.KeyCode.KeyF,
								weight: d.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(l) {
						b(l)?.showFind();
					}
				}
				e.$uSc = n;
				class g extends E.$3X {
					static {
						this.ID = "editor.action.webvieweditor.hideFind";
					}
					static {
						this.LABEL = w.localize(11374, null);
					}
					constructor() {
						super({
							id: g.ID,
							title: g.LABEL,
							keybinding: {
								when: C.$Kj.and(c, r.$ZIb),
								primary: t.KeyCode.Escape,
								weight: d.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(l) {
						b(l)?.hideFind();
					}
				}
				e.$vSc = g;
				class p extends E.$3X {
					static {
						this.ID = "editor.action.webvieweditor.findNext";
					}
					static {
						this.LABEL = w.localize(11375, null);
					}
					constructor() {
						super({
							id: p.ID,
							title: p.LABEL,
							keybinding: {
								when: C.$Kj.and(c, r.$1Ib),
								primary: t.KeyCode.Enter,
								weight: d.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(l) {
						b(l)?.runFindAction(!1);
					}
				}
				e.$wSc = p;
				class o extends E.$3X {
					static {
						this.ID = "editor.action.webvieweditor.findPrevious";
					}
					static {
						this.LABEL = w.localize(11376, null);
					}
					constructor() {
						super({
							id: o.ID,
							title: o.LABEL,
							keybinding: {
								when: C.$Kj.and(c, r.$1Ib),
								primary: t.KeyMod.Shift | t.KeyCode.Enter,
								weight: d.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(l) {
						b(l)?.runFindAction(!0);
					}
				}
				e.$xSc = o;
				class f extends E.$3X {
					static {
						this.ID = "workbench.action.webview.reloadWebviewAction";
					}
					static {
						this.LABEL = w.localize2(11377, "Reload Webviews");
					}
					constructor() {
						super({
							id: f.ID,
							title: f.LABEL,
							category: m.$ck.Developer,
							menu: [{ id: E.$XX.CommandPalette }],
						});
					}
					async run(l) {
						const y = l.get(r.$3Ib);
						for (const $ of y.webviews) $.reload();
					}
				}
				e.$ySc = f;
				function b(s) {
					const y = s.get(h.$IY).activeEditor;
					return y instanceof a.$W4b ? y.webview : void 0;
				}
			},
		),
		