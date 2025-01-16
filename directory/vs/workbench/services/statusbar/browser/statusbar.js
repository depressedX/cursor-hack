define(de[166], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$h6b = e.$g6b = e.StatusbarAlignment = e.$d6b = void 0),
				(e.$e6b = w),
				(e.$f6b = E),
				(e.$d6b = (0, t.$Mi)("statusbarService"));
			var i;
			(function (C) {
				(C[(C.LEFT = 0)] = "LEFT"), (C[(C.RIGHT = 1)] = "RIGHT");
			})(i || (e.StatusbarAlignment = i = {}));
			function w(C) {
				const d = C;
				return typeof d?.id == "string" && typeof d.alignment == "number";
			}
			function E(C) {
				const d = C;
				return (
					(typeof d?.primary == "number" || w(d?.primary)) &&
					typeof d?.secondary == "number"
				);
			}
			(e.$g6b = { id: "statusBar.entry.showTooltip", title: "" }),
				(e.$h6b = [
					"standard",
					"warning",
					"error",
					"prominent",
					"remote",
					"offline",
				]);
		}),
		define(
			de[1872],
			he([
				1, 0, 3, 4, 5, 53, 175, 166, 91, 274, 136, 6, 20, 103, 109, 1028, 123,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$smc = e.StatusBarUpdateKind = e.$rmc = void 0),
					(e.$rmc = (0, w.$Mi)("IExtensionStatusBarItemService"));
				var o;
				(function (v) {
					(v[(v.DidDefine = 0)] = "DidDefine"),
						(v[(v.DidUpdate = 1)] = "DidUpdate");
				})(o || (e.StatusBarUpdateKind = o = {}));
				let f = class {
					constructor(S) {
						(this.c = S),
							(this.a = new Map()),
							(this.b = new a.$re()),
							(this.onDidChange = this.b.event);
					}
					dispose() {
						this.a.forEach((S) => S.accessor.dispose()),
							this.a.clear(),
							this.b.dispose();
					}
					setOrUpdateEntry(S, I, T, P, k, L, D, M, N, A, R, O) {
						let B, U;
						if (O) (B = O.label), (U = O.role);
						else if (((B = (0, r.$_k)(k)), L)) {
							const q = typeof L == "string" ? L : L.value;
							B += `, ${q}`;
						}
						let z;
						switch (N?.id) {
							case p.$YFb:
							case p.$3Fb:
								(z = N.id === p.$YFb ? "error" : "warning"),
									(M = void 0),
									(N = void 0);
						}
						const F = {
							name: P,
							text: k,
							tooltip: L,
							command: D,
							color: M,
							backgroundColor: N,
							ariaLabel: B,
							role: U,
							kind: z,
						};
						typeof R > "u" && (R = 0);
						let x = A ? d.StatusbarAlignment.LEFT : d.StatusbarAlignment.RIGHT;
						const H = this.a.get(S);
						if ((H && ((x = H.alignment), (R = H.priority)), H))
							return H.accessor.update(F), (H.entry = F), o.DidUpdate;
						{
							let q;
							typeof T == "string"
								? (q = { primary: R, secondary: (0, u.$Aj)(T) })
								: (q = R);
							const V = this.c.addEntry(F, I, x, q);
							return (
								this.a.set(S, {
									accessor: V,
									entry: F,
									alignment: x,
									priority: R,
									disposable: (0, t.$Yc)(() => {
										V.dispose(), this.a.delete(S), this.b.fire({ removed: S });
									}),
								}),
								this.b.fire({
									added: [S, { entry: F, alignment: x, priority: R }],
								}),
								o.DidDefine
							);
						}
					}
					unsetEntry(S) {
						this.a.get(S)?.disposable.dispose(), this.a.delete(S);
					}
					getEntries() {
						return this.a.entries();
					}
				};
				(f = Ne([j(0, d.$d6b)], f)),
					(0, h.$lK)(e.$rmc, f, h.InstantiationType.Delayed);
				function b(v) {
					const S = v;
					return (
						typeof S.id == "string" &&
						S.id.length > 0 &&
						typeof S.name == "string" &&
						typeof S.text == "string" &&
						(S.alignment === "left" || S.alignment === "right") &&
						(S.command === void 0 || typeof S.command == "string") &&
						(S.tooltip === void 0 || typeof S.tooltip == "string") &&
						(S.priority === void 0 || typeof S.priority == "number") &&
						(S.accessibilityInformation === void 0 ||
							(0, m.$ZK)(S.accessibilityInformation))
					);
				}
				const s = {
						type: "object",
						required: ["id", "text", "alignment", "name"],
						properties: {
							id: {
								type: "string",
								markdownDescription: (0, i.localize)(2590, null),
							},
							name: {
								type: "string",
								description: (0, i.localize)(2591, null),
							},
							text: {
								type: "string",
								description: (0, i.localize)(2592, null),
							},
							tooltip: {
								type: "string",
								description: (0, i.localize)(2593, null),
							},
							command: {
								type: "string",
								description: (0, i.localize)(2594, null),
							},
							alignment: {
								type: "string",
								enum: ["left", "right"],
								description: (0, i.localize)(2595, null),
							},
							priority: {
								type: "number",
								description: (0, i.localize)(2596, null),
							},
							accessibilityInformation: {
								type: "object",
								description: (0, i.localize)(2597, null),
								properties: {
									role: {
										type: "string",
										description: (0, i.localize)(2598, null),
									},
									label: {
										type: "string",
										description: (0, i.localize)(2599, null),
									},
								},
							},
						},
					},
					l = {
						description: (0, i.localize)(2600, null),
						oneOf: [s, { type: "array", items: s }],
					},
					y = C.$n2.registerExtensionPoint({
						extensionPoint: "statusBarItems",
						jsonSchema: l,
					});
				let $ = class {
					constructor(S) {
						const I = new t.$Zc();
						y.setHandler((T) => {
							I.clear();
							for (const P of T) {
								if (!(0, E.$t2)(P.description, "contribStatusBarItems")) {
									P.collector.error(`The ${y.name} is proposed API`);
									continue;
								}
								const { value: k, collector: L } = P;
								for (const D of c.Iterable.wrap(k)) {
									if (!b(D)) {
										L.error((0, i.localize)(2601, null));
										continue;
									}
									const M = (0, g.$2bb)(P.description.identifier, D.id);
									S.setOrUpdateEntry(
										M,
										M,
										n.$Gn.toKey(P.description.identifier),
										D.name ?? P.description.displayName ?? P.description.name,
										D.text,
										D.tooltip,
										D.command ? { id: D.command, title: D.name } : void 0,
										void 0,
										void 0,
										D.alignment === "left",
										D.priority,
										D.accessibilityInformation,
									) === o.DidDefine && I.add((0, t.$Yc)(() => S.unsetEntry(M)));
								}
							}
						});
					}
				};
				(e.$smc = $), (e.$smc = $ = Ne([j(0, e.$rmc)], $));
			},
		),
		define(
			de[3622],
			he([1, 0, 88, 101, 3, 1872, 166]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qoc = void 0);
				let d = class {
					constructor(r, u) {
						(this.b = u), (this.a = new w.$Zc());
						const a = r.getProxy(t.$mbb.ExtHostStatusBar),
							h = [];
						for (const [n, g] of u.getEntries()) h.push(c(n, g));
						a.$acceptStaticEntries(h),
							this.a.add(
								u.onDidChange((n) => {
									n.added &&
										a.$acceptStaticEntries([c(n.added[0], n.added[1])]);
								}),
							);
						function c(n, g) {
							return {
								entryId: n,
								name: g.entry.name,
								text: g.entry.text,
								tooltip: g.entry.tooltip,
								command:
									typeof g.entry.command == "string"
										? g.entry.command
										: typeof g.entry.command == "object"
											? g.entry.command.id
											: void 0,
								priority: g.priority,
								alignLeft: g.alignment === C.StatusbarAlignment.LEFT,
								accessibilityInformation: g.entry.ariaLabel
									? { label: g.entry.ariaLabel, role: g.entry.role }
									: void 0,
							};
						}
					}
					dispose() {
						this.a.dispose();
					}
					$setEntry(r, u, a, h, c, n, g, p, o, f, b, s) {
						this.b.setOrUpdateEntry(r, u, a, h, c, n, g, p, o, f, b, s) ===
							E.StatusBarUpdateKind.DidDefine &&
							this.a.add((0, w.$Yc)(() => this.b.unsetEntry(r)));
					}
					$disposeEntry(r) {
						this.b.unsetEntry(r);
					}
				};
				(e.$qoc = d),
					(e.$qoc = d =
						Ne([(0, i.$tmc)(t.$lbb.MainThreadStatusBar), j(1, E.$rmc)], d));
			},
		),
		define(
			de[3623],
			he([1, 0, 610, 166, 3, 682, 4, 40]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$j3c = void 0);
				let m = class extends w.$1c {
					constructor(u, a, h) {
						super(),
							(this.h = u),
							(this.j = a),
							(this.m = h),
							(this.b = 0),
							(this.f = !1),
							(this.g = !1),
							this.r(),
							u.statusMessage && this.u(u.statusMessage),
							this.n();
					}
					n() {
						this.D(this.h.onDidChangeNotification((u) => this.q(u))),
							this.D(this.h.onDidChangeStatusMessage((u) => this.t(u))),
							this.D(this.m.onDidChangeFilter(() => this.r()));
					}
					q(u) {
						this.f ||
							(u.kind === t.NotificationChangeType.ADD
								? this.b++
								: u.kind === t.NotificationChangeType.REMOVE &&
									this.b > 0 &&
									this.b--),
							this.r();
					}
					r() {
						let u = 0;
						if (!this.f && !this.g)
							for (const h of this.h.notifications) h.hasProgress && u++;
						let a = {
							name: (0, C.localize)(3616, null),
							text: `${u > 0 || this.b > 0 ? "$(bell-dot)" : "$(bell)"}`,
							ariaLabel: (0, C.localize)(3617, null),
							command: this.f ? E.$T2c : E.$S2c,
							tooltip: this.s(u),
							showBeak: this.f,
						};
						this.m.getFilter() === d.NotificationsFilter.ERROR &&
							(a = {
								...a,
								text: `${u > 0 || this.b > 0 ? "$(bell-slash-dot)" : "$(bell-slash)"}`,
								ariaLabel: (0, C.localize)(3618, null),
								tooltip: (0, C.localize)(3619, null),
							}),
							this.a
								? this.a.update(a)
								: (this.a = this.j.addEntry(
										a,
										"status.notifications",
										i.StatusbarAlignment.RIGHT,
										-Number.MAX_VALUE,
									));
					}
					s(u) {
						return this.f
							? (0, C.localize)(3620, null)
							: this.h.notifications.length === 0
								? (0, C.localize)(3621, null)
								: u === 0
									? this.b === 0
										? (0, C.localize)(3622, null)
										: this.b === 1
											? (0, C.localize)(3623, null)
											: (0, C.localize)(3624, null, this.b)
									: this.b === 0
										? (0, C.localize)(3625, null, u)
										: this.b === 1
											? (0, C.localize)(3626, null, u)
											: (0, C.localize)(3627, null, this.b, u);
					}
					update(u, a) {
						let h = !1;
						this.f !== u && ((this.f = u), (this.b = 0), (h = !0)),
							this.g !== a && ((this.g = a), (h = !0)),
							h && this.r();
					}
					t(u) {
						const a = u.item;
						switch (u.kind) {
							case t.StatusMessageChangeType.ADD:
								this.u(a);
								break;
							case t.StatusMessageChangeType.REMOVE:
								this.c &&
									this.c[0] === a &&
									((0, w.$Vc)(this.c[1]), (this.c = void 0));
								break;
						}
					}
					u(u) {
						const a = u.message,
							h =
								u.options && typeof u.options.showAfter == "number"
									? u.options.showAfter
									: 0,
							c =
								u.options && typeof u.options.hideAfter == "number"
									? u.options.hideAfter
									: -1;
						this.c && (0, w.$Vc)(this.c[1]);
						let n,
							g = setTimeout(() => {
								(n = this.j.addEntry(
									{ name: (0, C.localize)(3628, null), text: a, ariaLabel: a },
									"status.message",
									i.StatusbarAlignment.LEFT,
									-Number.MAX_VALUE,
								)),
									(g = null);
							}, h),
							p;
						const o = {
							dispose: () => {
								g && clearTimeout(g), p && clearTimeout(p), n?.dispose();
							},
						};
						c > 0 && (p = setTimeout(() => o.dispose(), c)), (this.c = [u, o]);
					}
				};
				(e.$j3c = m), (e.$j3c = m = Ne([j(1, i.$d6b), j(2, d.$4N)], m));
			},
		),
		define(
			de[3624],
			he([1, 0, 4, 166, 50, 96, 27, 43, 11, 99, 18, 100, 7]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$05b = e.$95b = void 0);
				class c extends w.$rj {
					constructor(o, f, b) {
						super(o, f, void 0, !0),
							(this.a = b),
							(this.checked = !b.isHidden(o));
					}
					async run() {
						this.a.isHidden(this.id)
							? this.a.show(this.id)
							: this.a.hide(this.id);
					}
				}
				e.$95b = c;
				class n extends w.$rj {
					constructor(o, f, b) {
						super(o, (0, t.localize)(3687, null, f), void 0, !0), (this.a = b);
					}
					async run() {
						this.a.hide(this.id);
					}
				}
				(e.$05b = n),
					d.$TX.registerCommandAndKeybindingRule({
						id: "workbench.statusBar.focusPrevious",
						weight: d.KeybindingWeight.WorkbenchContrib,
						primary: C.KeyCode.LeftArrow,
						secondary: [C.KeyCode.UpArrow],
						when: a.$jQb,
						handler: (p) => {
							p.get(i.$d6b).focusPreviousEntry();
						},
					}),
					d.$TX.registerCommandAndKeybindingRule({
						id: "workbench.statusBar.focusNext",
						weight: d.KeybindingWeight.WorkbenchContrib,
						primary: C.KeyCode.RightArrow,
						secondary: [C.KeyCode.DownArrow],
						when: a.$jQb,
						handler: (p) => {
							p.get(i.$d6b).focusNextEntry();
						},
					}),
					d.$TX.registerCommandAndKeybindingRule({
						id: "workbench.statusBar.focusFirst",
						weight: d.KeybindingWeight.WorkbenchContrib,
						primary: C.KeyCode.Home,
						when: a.$jQb,
						handler: (p) => {
							const o = p.get(i.$d6b);
							o.focus(!1), o.focusNextEntry();
						},
					}),
					d.$TX.registerCommandAndKeybindingRule({
						id: "workbench.statusBar.focusLast",
						weight: d.KeybindingWeight.WorkbenchContrib,
						primary: C.KeyCode.End,
						when: a.$jQb,
						handler: (p) => {
							const o = p.get(i.$d6b);
							o.focus(!1), o.focusPreviousEntry();
						},
					}),
					d.$TX.registerCommandAndKeybindingRule({
						id: "workbench.statusBar.clearFocus",
						weight: d.KeybindingWeight.WorkbenchContrib,
						primary: C.KeyCode.Escape,
						when: a.$jQb,
						handler: (p) => {
							const o = p.get(i.$d6b),
								f = p.get(u.$IY);
							o.isEntryFocused()
								? o.focus(!1)
								: f.activeEditorPane && f.activeEditorPane.focus();
						},
					});
				class g extends m.$3X {
					constructor() {
						super({
							id: "workbench.action.focusStatusBar",
							title: (0, t.localize2)(3688, "Focus Status Bar"),
							category: r.$ck.View,
							f1: !0,
						});
					}
					async run(o) {
						o.get(E.$mEb).focusPart(E.Parts.STATUSBAR_PART, (0, h.$Ogb)());
					}
				}
				(0, m.$4X)(g);
			},
		),
		define(
			de[3625],
			he([
				1, 0, 163, 3, 758, 31, 32, 166, 35, 98, 7, 40, 28, 114, 27, 182, 79, 94,
				159, 72,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$5b = void 0);
				let s = class extends i.$1c {
					get name() {
						return (0, h.$wg)(this.b).name;
					}
					get hasCommand() {
						return typeof this.b?.command < "u";
					}
					constructor($, v, S, I, T, P, k, L) {
						super(),
							(this.r = $),
							(this.s = S),
							(this.t = I),
							(this.u = T),
							(this.w = P),
							(this.y = k),
							(this.z = L),
							(this.b = void 0),
							(this.c = this.D(new i.$2c())),
							(this.f = this.D(new i.$2c())),
							(this.g = this.D(new i.$2c())),
							(this.h = this.D(new i.$2c())),
							(this.j = this.D(new i.$2c())),
							(this.m = this.D(new i.$2c())),
							(this.n = this.D(new i.$2c())),
							(this.q = void 0),
							(this.labelContainer = document.createElement("a")),
							(this.labelContainer.tabIndex = -1),
							this.labelContainer.setAttribute("role", "button"),
							(this.labelContainer.className = "statusbar-item-label"),
							this.D(f.$Qhb.addTarget(this.labelContainer)),
							(this.a = this.D(new l(this.labelContainer))),
							this.r.appendChild(this.labelContainer),
							(this.beakContainer = document.createElement("div")),
							(this.beakContainer.className = "status-bar-item-beak-container"),
							this.r.appendChild(this.beakContainer),
							this.update(v);
					}
					update($) {
						if (
							((this.a.showProgress = $.showProgress ?? !1),
							(!this.b || $.text !== this.b.text) &&
								((this.a.text = $.text),
								$.text
									? (0, u.show)(this.labelContainer)
									: (0, u.hide)(this.labelContainer)),
							(!this.b || $.cssClass !== this.b.cssClass) &&
								(this.a.cssClass = $.cssClass),
							(!this.b || $.ariaLabel !== this.b.ariaLabel) &&
								(this.r.setAttribute("aria-label", $.ariaLabel),
								this.labelContainer.setAttribute("aria-label", $.ariaLabel)),
							(!this.b || $.role !== this.b.role) &&
								this.labelContainer.setAttribute("role", $.role || "button"),
							!this.b || !this.C(this.b, $))
						) {
							const S = (0, o.$el)($.tooltip)
								? { markdown: $.tooltip, markdownNotSupportedFallback: void 0 }
								: $.tooltip;
							this.q
								? this.q.update(S)
								: (this.q = this.D(
										this.u.setupManagedHover(this.s, this.r, S, {
											dontHideHoverOnClick: $?.dontHideHoverOnClick,
										}),
									));
							const I = $?.dontHideHoverOnClick;
							$.command !== d.$g6b &&
								((this.m.value = (0, u.$0fb)(
									this.labelContainer,
									u.$$gb.FOCUS,
									(T) => {
										u.$ahb.stop(T), I !== !0 && this.q?.show(!1);
									},
								)),
								(this.n.value = (0, u.$0fb)(
									this.labelContainer,
									u.$$gb.FOCUS_OUT,
									(T) => {
										u.$ahb.stop(T), I !== !0 && this.q?.hide();
									},
								)));
						}
						if (!this.b || $.command !== this.b.command) {
							this.g.clear(), this.h.clear(), this.j.clear();
							const S = $.command;
							S && (S !== d.$g6b || this.q)
								? ((this.g.value = (0, u.$0fb)(
										this.labelContainer,
										u.$$gb.CLICK,
										() => this.F(S),
									)),
									(this.h.value = (0, u.$0fb)(
										this.labelContainer,
										f.EventType.Tap,
										() => this.F(S),
									)),
									(this.j.value = (0, u.$0fb)(
										this.labelContainer,
										u.$$gb.KEY_DOWN,
										(I) => {
											const T = new c.$7fb(I);
											T.equals(n.KeyCode.Space) || T.equals(n.KeyCode.Enter)
												? (u.$ahb.stop(I), this.F(S))
												: (T.equals(n.KeyCode.Escape) ||
														T.equals(n.KeyCode.LeftArrow) ||
														T.equals(n.KeyCode.RightArrow)) &&
													(u.$ahb.stop(I), this.q?.hide());
										},
									)),
									this.labelContainer.classList.remove("disabled"))
								: this.labelContainer.classList.add("disabled");
						}
						(!this.b || $.showBeak !== this.b.showBeak) &&
							($.showBeak
								? this.r.classList.add("has-beak")
								: this.r.classList.remove("has-beak"));
						const v = !!$.backgroundColor || ($.kind && $.kind !== "standard");
						if (!this.b || $.kind !== this.b.kind) {
							for (const S of d.$h6b) this.r.classList.remove(`${S}-kind`);
							$.kind &&
								$.kind !== "standard" &&
								this.r.classList.add(`${$.kind}-kind`),
								this.r.classList.toggle("has-background-color", v);
						}
						(!this.b || $.color !== this.b.color) &&
							this.G(this.labelContainer, $.color),
							(!this.b || $.backgroundColor !== this.b.backgroundColor) &&
								(this.r.classList.toggle("has-background-color", v),
								this.G(this.r, $.backgroundColor, !0)),
							(this.b = $);
					}
					C({ tooltip: $ }, { tooltip: v }) {
						return $ === void 0
							? v === void 0
							: (0, o.$el)($)
								? (0, o.$el)(v) && (0, o.$fl)($, v)
								: $ === v;
					}
					async F($) {
						if ($ === d.$g6b) this.q?.show(!0);
						else {
							const v = typeof $ == "string" ? $ : $.id,
								S = typeof $ == "string" ? [] : ($.arguments ?? []);
							this.y.publicLog2("workbenchActionExecuted", {
								id: v,
								from: "status bar",
							});
							try {
								await this.t.executeCommand(v, ...S);
							} catch (I) {
								this.w.error((0, t.$xj)(I));
							}
						}
					}
					G($, v, S) {
						let I;
						if ((S ? this.f.clear() : this.c.clear(), v))
							if ((0, r.isThemeColor)(v)) {
								I = this.z.getColorTheme().getColor(v.id)?.toString();
								const T = this.z.onDidColorThemeChange((P) => {
									const k = P.getColor(v.id)?.toString();
									S
										? ($.style.backgroundColor = k ?? "")
										: ($.style.color = k ?? "");
								});
								S ? (this.f.value = T) : (this.c.value = T);
							} else I = v;
						S ? ($.style.backgroundColor = I ?? "") : ($.style.color = I ?? "");
					}
				};
				(e.$$5b = s),
					(e.$$5b = s =
						Ne(
							[
								j(3, E.$ek),
								j(4, b.$Uyb),
								j(5, a.$4N),
								j(6, C.$km),
								j(7, m.$iP),
							],
							s,
						));
				class l extends w.$Yob {
					constructor($) {
						super($),
							(this.h = $),
							(this.c = (0, g.$Tib)(p.$eP)),
							(this.d = ""),
							(this.f = !1);
					}
					set showProgress($) {
						this.f !== $ &&
							((this.f = $),
							(this.c = (0, g.$Tib)($ === "syncing" ? p.$eP : p.$fP)),
							(this.text = this.d));
					}
					set cssClass($) {
						this.g !== $ &&
							(this.g && this.h.classList.remove(this.g),
							$ && this.h.classList.add($),
							(this.g = $));
					}
					set text($) {
						if (this.f) {
							this.h.firstChild !== this.c && this.h.appendChild(this.c);
							for (const S of Array.from(this.h.childNodes))
								S !== this.c && S.remove();
							let v = $ ?? "";
							v && (v = ` ${v}`), (0, u.$fhb)(this.h, ...(0, g.$Sib)(v));
						} else super.text = $;
					}
				}
			},
		),
		define(
			de[3626],
			he([1, 0, 3, 166, 7, 21, 6]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$85b = void 0);
				class d extends t.$1c {
					static {
						this.a = "workbench.statusbar.hidden";
					}
					get entries() {
						return this.c.slice(0);
					}
					get lastFocusedEntry() {
						return this.f && !this.isHidden(this.f.id) ? this.f : void 0;
					}
					constructor(r) {
						super(),
							(this.h = r),
							(this.b = this.D(new C.$re())),
							(this.onDidChangeEntryVisibility = this.b.event),
							(this.c = []),
							(this.g = new Set()),
							this.j(),
							this.m();
					}
					j() {
						const r = this.h.get(d.a, E.StorageScope.PROFILE);
						if (r)
							try {
								this.g = new Set(JSON.parse(r));
							} catch {}
					}
					m() {
						this.D(
							this.h.onDidChangeValue(
								E.StorageScope.PROFILE,
								d.a,
								this.D(new t.$Zc()),
							)(() => this.n()),
						);
					}
					n() {
						const r = new Set(this.g);
						this.g.clear(), this.j();
						const u = new Set();
						for (const a of r) this.g.has(a) || u.add(a);
						for (const a of this.g) r.has(a) || u.add(a);
						if (u.size > 0)
							for (const a of this.c)
								u.has(a.id) && (this.s(a.id, !0), u.delete(a.id));
					}
					add(r) {
						this.c.push(r), this.s(r, !1), this.u(), this.w();
					}
					remove(r) {
						const u = this.c.indexOf(r);
						u >= 0 &&
							(this.c.splice(u, 1),
							this.c.some(
								(a) =>
									(0, i.$e6b)(a.priority.primary) &&
									a.priority.primary.id === r.id,
							) && this.u(),
							this.w());
					}
					isHidden(r) {
						return this.g.has(r);
					}
					hide(r) {
						this.g.has(r) || (this.g.add(r), this.s(r, !0), this.t());
					}
					show(r) {
						this.g.has(r) && (this.g.delete(r), this.s(r, !0), this.t());
					}
					findEntry(r) {
						return this.c.find((u) => u.container === r);
					}
					getEntries(r) {
						return this.c.filter((u) => u.alignment === r);
					}
					focusNextEntry() {
						this.r(1, 0);
					}
					focusPreviousEntry() {
						this.r(-1, this.entries.length - 1);
					}
					isEntryFocused() {
						return !!this.q();
					}
					q() {
						return this.c.find((r) => (0, w.$Lgb)(r.container));
					}
					r(r, u) {
						const a = (n) => {
								let g = n,
									p = g >= 0 && g < this.c.length ? this.c[g] : void 0;
								for (; p && this.isHidden(p.id); )
									(g += r),
										(p = g >= 0 && g < this.c.length ? this.c[g] : void 0);
								return p;
							},
							h = this.q();
						if (h) {
							const n = a(this.c.indexOf(h) + r);
							if (n) {
								(this.f = n), n.labelContainer.focus();
								return;
							}
						}
						const c = a(u);
						c && ((this.f = c), c.labelContainer.focus());
					}
					s(r, u) {
						if (typeof r == "string") {
							const a = r;
							for (const h of this.c) h.id === a && this.s(h, u);
						} else {
							const a = r,
								h = this.isHidden(a.id);
							h ? (0, w.hide)(a.container) : (0, w.show)(a.container),
								u && this.b.fire({ id: a.id, visible: !h }),
								this.w();
						}
					}
					t() {
						this.g.size > 0
							? this.h.store(
									d.a,
									JSON.stringify(Array.from(this.g.values())),
									E.StorageScope.PROFILE,
									E.StorageTarget.USER,
								)
							: this.h.remove(d.a, E.StorageScope.PROFILE);
					}
					u() {
						const r = new Map(),
							u = new Map();
						for (let c = 0; c < this.c.length; c++) {
							const n = this.c[c];
							if (typeof n.priority.primary == "number") r.set(n, c);
							else {
								const g = n.priority.primary.id;
								let p = u.get(g);
								if (!p) {
									for (const o of u.values())
										if (o.has(g)) {
											p = o;
											break;
										}
									p || ((p = new Map()), u.set(g, p));
								}
								p.set(n.id, n);
							}
						}
						const a = Array.from(r.keys());
						a.sort((c, n) =>
							c.alignment === n.alignment
								? c.priority.primary !== n.priority.primary
									? Number(n.priority.primary) - Number(c.priority.primary)
									: c.priority.secondary !== n.priority.secondary
										? n.priority.secondary - c.priority.secondary
										: r.get(c) - r.get(n)
								: c.alignment === i.StatusbarAlignment.LEFT
									? -1
									: n.alignment === i.StatusbarAlignment.LEFT
										? 1
										: 0,
						);
						let h;
						if (u.size > 0) {
							h = [];
							for (const c of a) {
								const n = u.get(c.id),
									g = n ? Array.from(n.values()) : void 0;
								g &&
									h.push(
										...g.filter(
											(p) =>
												(0, i.$e6b)(p.priority.primary) &&
												p.priority.primary.alignment ===
													i.StatusbarAlignment.LEFT,
										),
									),
									h.push(c),
									g &&
										h.push(
											...g.filter(
												(p) =>
													(0, i.$e6b)(p.priority.primary) &&
													p.priority.primary.alignment ===
														i.StatusbarAlignment.RIGHT,
											),
										),
									u.delete(c.id);
							}
							for (const [, c] of u) h.push(...c.values());
						} else h = a;
						this.c = h;
					}
					w() {
						this.y(this.getEntries(i.StatusbarAlignment.LEFT)),
							this.y(this.getEntries(i.StatusbarAlignment.RIGHT));
					}
					y(r) {
						let u, a;
						for (const h of r)
							h.container.classList.remove(
								"first-visible-item",
								"last-visible-item",
							),
								!this.isHidden(h.id) && (u || (u = h), (a = h));
						u?.container.classList.add("first-visible-item"),
							a?.container.classList.add("last-visible-item");
					}
				}
				e.$85b = d;
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3627],
		he([1, 0, 3, 6, 111, 4, 91, 31, 10, 40, 166]),
		function (ce, e, t, i, w, E, C, d, m, r, u) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$B2c = void 0),
				(w = xi(w));
			let a = class extends t.$1c {
				static {
					this.ID = "workbench.contrib.accessibilityStatus";
				}
				constructor(c, n, g, p) {
					super(),
						(this.g = c),
						(this.h = n),
						(this.j = g),
						(this.m = p),
						(this.a = null),
						(this.b = !1),
						(this.f = this.D(new t.$2c())),
						this.D(
							d.$fk.registerCommand({
								id: "showEditorScreenReaderNotification",
								handler: () => this.q(),
							}),
						),
						this.r(this.j.isScreenReaderOptimized()),
						this.n();
				}
				n() {
					this.D(this.j.onDidChangeScreenReaderOptimized(() => this.s())),
						this.D(
							this.g.onDidChangeConfiguration((c) => {
								c.affectsConfiguration("editor.accessibilitySupport") &&
									this.s();
							}),
						);
				}
				q() {
					(this.a = this.h.prompt(
						w.default.Info,
						(0, E.localize)(4371, null),
						[
							{
								label: (0, E.localize)(4372, null),
								run: () => {
									this.g.updateValue(
										"editor.accessibilitySupport",
										"on",
										m.ConfigurationTarget.USER,
									);
								},
							},
							{
								label: (0, E.localize)(4373, null),
								run: () => {
									this.g.updateValue(
										"editor.accessibilitySupport",
										"off",
										m.ConfigurationTarget.USER,
									);
								},
							},
						],
						{ sticky: !0, priority: r.NotificationPriority.URGENT },
					)),
						i.Event.once(this.a.onDidClose)(() => (this.a = null));
				}
				r(c) {
					if (c) {
						if (!this.f.value) {
							const n = (0, E.localize)(4374, null);
							this.f.value = this.m.addEntry(
								{
									name: (0, E.localize)(4375, null),
									text: n,
									ariaLabel: n,
									command: "showEditorScreenReaderNotification",
									kind: "prominent",
									showInAllWindows: !0,
								},
								"status.editor.screenReaderMode",
								u.StatusbarAlignment.RIGHT,
								100.6,
							);
						}
					} else this.f.clear();
				}
				s() {
					this.j.isScreenReaderOptimized() &&
						this.g.getValue("editor.accessibilitySupport") === "auto" &&
						(this.b || ((this.b = !0), setTimeout(() => this.q(), 100))),
						this.a && this.a.close(),
						this.r(this.j.isScreenReaderOptimized());
				}
			};
			(e.$B2c = a),
				(e.$B2c = a =
					Ne([j(0, m.$gj), j(1, r.$4N), j(2, C.$XK), j(3, u.$d6b)], a));
		},
	);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3628],
		he([
			1, 0, 341, 1474, 3, 285, 137, 45, 25, 90, 5, 619, 1300, 280, 56, 148, 134,
			83, 48, 23, 20, 64, 65, 42, 367, 19, 58, 2965, 2967, 166, 2968, 193, 332,
			47, 2966, 1483, 3615, 22, 41, 66, 116, 7, 2359,
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
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$gfd = void 0),
				(L = xi(L));
			const H = !1,
				q = H ? console.log : () => {},
				V = H ? console.error : () => {},
				G = async (X, Y, ie, ne) => {
					(await Y.exists(X)) &&
						(await ie.open(X, {
							openToSide: ne?.inNewTab ?? !1,
							editorOptions: {
								revealIfVisible: !0,
								revealIfOpened: !0,
								source: F.EditorOpenSource.USER,
								preserveFocus: !0,
							},
							fromUserGesture: !0,
						}));
				};
			function K(X) {
				return { "X-Request-ID": X, "X-Amzn-Trace-Id": `Root=${X}` };
			}
			const J = 5;
			let W = class extends w.$1c {
				aiClient() {
					return this.a.get();
				}
				cursorPredictionClient() {
					return this.b.get();
				}
				constructor(Y, ie, ne, ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e) {
					super(),
						(this.F = Y),
						(this.G = ie),
						(this.H = ne),
						(this.I = ee),
						(this.J = _),
						(this.L = te),
						(this.M = Q),
						(this.N = Z),
						(this.O = se),
						(this.P = re),
						(this.Q = le),
						(this.R = oe),
						(this.S = ae),
						(this.U = pe),
						(this.W = $e),
						(this.c = !1),
						(this.g = []),
						(this.h = void 0),
						(this.j = new Map()),
						(this.q = void 0),
						(this.r = !1),
						(this.s = 0),
						(this.t = void 0),
						(this.w = void 0),
						(this.y = void 0),
						(this.z = 1),
						(this.C = !1),
						(this.a = this.I.createInstance(E.$q6b, { service: t.$q0 })),
						(this.b = this.I.createInstance(E.$q6b, { service: i.$Mab })),
						this.periodicallyReloadCursorPredictionConfig(),
						this.D(
							(0, x.$0fb)((0, x.$Ogb)(), x.$$gb.RESIZE, () => {
								this.cb();
							}),
						);
				}
				clearCursorPrediction() {
					const Y = this.N.getActiveCodeEditor();
					Y && this.clearPrediction({ editor: Y, registerReject: !0 });
				}
				set X(Y) {
					(this.c = Y), Y || (this.g = []);
				}
				get X() {
					return this.c;
				}
				Y() {
					return this.F.applicationUserPersistentStorage;
				}
				get Z() {
					return (
						this.F.applicationUserPersistentStorage
							.cursorPredictionUIExperiments ?? []
					);
				}
				async periodicallyReloadCursorPredictionConfig(Y = !1) {
					(Date.now() - this.s < 1e3 * 60 * 30 && !Y) ||
						((this.s = Date.now()), this._refreshConfig());
				}
				cursorPredictionModel() {
					return (
						this.Y().cursorPredictionState?.model ??
						this.Y().cursorPredictionModel
					);
				}
				cursorPredictionTabToLineFirst() {
					return (
						this.Y().cursorPredictionTabToLineFirst !== !1 ||
						this.Y().cursorPredictionState?.tabToLineFirst !== !1
					);
				}
				isCursorPredictionEnabled() {
					return (
						this.Y().cursorPredictionEnabled !== !1 &&
						this.Y().cursorPredictionState?.backendEnabled !== !1
					);
				}
				onlyTriggerOnCppAccept() {
					return !this.Z.includes("cursor-pred-always-on");
				}
				tabToLineBeforeAcceptingCpp(Y) {
					return (
						this.isCursorPredictionEnabled() &&
						Y === p.CppSource.CursorPrediction &&
						this.cursorPredictionTabToLineFirst() &&
						this.F.nonPersistentStorage.cursorPrediction !== void 0
					);
				}
				maybeUndoCursorPrediction({
					event: Y,
					triggerCppCallback: ie,
					getLinterErrors: ne,
				}) {
					if (!this.isCursorPredictionEnabled() || !this.X) return;
					const ee = this.N.getActiveCodeEditor(),
						_ = ee?.getModel();
					if (ee && _) {
						if (this.shouldTabInsteadOfAccepting(ee, _)) return;
						const te = this.g.pop();
						te &&
							(ee.setPosition(te.position),
							ee.revealLineInCenterIfOutsideViewport(te.position.lineNumber),
							this.getAndShowNextPrediction({
								editor: ee,
								triggerCppCallback: ie,
								getLinterErrors: ne,
								source: v.CursorPrediction_CursorPredictionSource.UNDO,
							}),
							Y.stopPropagation(),
							Y.stopImmediatePropagation(),
							Y.preventDefault(),
							this.clearPrediction({ editor: ee, registerReject: !0 }),
							(this.r = !1));
					}
				}
				async maybeAcceptCursorPrediction({
					event: Y,
					triggerCppCallback: ie,
				}) {
					if (!this.isCursorPredictionEnabled()) return;
					const ne = this.F.nonPersistentStorage.cursorPrediction;
					if (ne === void 0) return;
					const ee = ne.lineNumber;
					let _;
					const te = this.N.getActiveCodeEditor();
					if (te && te.getModel() && S.$dh.isEqual(te.getModel().uri, ne.uri))
						_ = te;
					else {
						const Z = this.W.groups.find(
							(se) =>
								se.activeEditor?.resource &&
								S.$dh.isEqual(se.activeEditor.resource, ne.uri),
						);
						if (((_ = Z?.activeEditorPane?.getControl()), !Z || !_)) {
							await G(ne.uri, this.S, this.U, { inNewTab: !1 });
							const se = this.W.groups.find(
								(re) =>
									re.activeEditor?.resource &&
									S.$dh.isEqual(re.activeEditor.resource, ne.uri),
							);
							if (((_ = se?.activeEditorPane?.getControl()), !se || !_)) {
								q("[CURSOR PREDICTION] Failed to open predicted file");
								return;
							}
						}
					}
					const Q = _.getModel();
					if (
						(q("[CURSOR PREDICTION] model.uri", Q?.uri),
						q("[CURSOR PREDICTION] prediction.uri", ne.uri),
						Q && S.$dh.isEqual(Q.uri, ne.uri))
					) {
						if (
							(q("[CURSOR PREDICTION] Continuing to accept cursor prediction"),
							this.shouldTabInsteadOfAccepting(_, Q))
						)
							return;
						const Z = Math.max(1, Q.getLineFirstNonWhitespaceColumn(ee)),
							se = _.getPosition();
						se && this.g.push({ position: se, prediction: (0, D.unwrap)(ne) }),
							_.hasTextFocus() || _.focus(),
							_.setPosition({ lineNumber: ee, column: Z }, I.$QX),
							_.revealLineInCenterIfOutsideViewport(ee),
							Y.stopPropagation(),
							Y.stopImmediatePropagation(),
							Y.preventDefault(),
							(this.X = !0),
							this.clearPrediction({ editor: _, registerReject: !1 }),
							this.Q.recordAcceptCursorPredictionEvent(Q, ne),
							this.r && ie?.(Q.uri, _, p.CppSource.CursorPrediction),
							(this.r = !1);
					}
				}
				isInVimNonInsertMode() {
					const Y = this.P.getViewModel();
					for (const ie of [
						...Y.getEntries(k.StatusbarAlignment.LEFT),
						...Y.getEntries(k.StatusbarAlignment.RIGHT),
					])
						if (
							ie.id === "vscodevim.vim.primary" &&
							!["INSERT"].some((ne) => ie.container.innerText.includes(ne))
						)
							return !0;
					return !1;
				}
				shouldTabInsteadOfAccepting(Y, ie) {
					if (this.isInVimNonInsertMode()) return !1;
					const ne = Y.getPosition()?.lineNumber;
					return ne === void 0
						? !1
						: ie.getLineFirstNonWhitespaceColumn(ne) === 0;
				}
				fastCurrentFileInfoDoesNotWorkForNotebooks(Y, ie, ne, ee) {
					if (Y.scheme !== b.Schemas.aiChat)
						return new o.$Ws({
							relativeWorkspacePath: this.G.asRelativePath(Y),
							contents: ie,
							cursorPosition: new o.$ys({
								line: ee.lineNumber,
								column: ee.column,
							}),
							languageId: "",
							fileVersion: ne,
							workspaceRootPath: this.G.getWorkspaceFolder(Y)?.uri.fsPath,
						});
				}
				async getPartialCursorPredictionRequest({
					editor: Y,
					uri: ie,
					modelValue: ne,
					getLinterErrors: ee,
					modelVersion: _,
				}) {
					const te = ee(ie),
						Q = Y.getModel();
					if (Q === null) throw new Error("Model is null");
					Q.pushStackElement();
					const Z = ($e, ye) => {
							const ue = $e.split(`
`);
							let fe = Math.max(0, ye - P.$$ed),
								me = Math.min(ue.length, ye + P.$$ed);
							const ve = P.$$ed - ye,
								ge = ye - (ue.length - P.$$ed);
							ve > 0
								? (me = Math.min(ue.length, me + ve))
								: ge > 0 && (fe = Math.max(0, fe - ge));
							for (let be = 0; be < fe; be++) ue[be] = "";
							for (let be = me; be < ue.length; be++) ue[be] = "";
							return ue.join(`
`);
						},
						se = Y.getPosition();
					if (se === null)
						throw new Error("[CURSOR PREDICTION] Cursor position is undefined");
					ne.split(`
`).length >
						P.$$ed * 2 && (ne = Z(ne, se.lineNumber));
					const re = this.fastCurrentFileInfoDoesNotWorkForNotebooks(
						ie,
						ne,
						_,
						se,
					);
					let le;
					const oe = performance.now(),
						ae = await this.M.onlyLocalProvider?.runCommand(
							p.EditHistoryActions.CompileGlobalDiffTrajectories,
							{},
						);
					if (ae === void 0)
						throw new Error(
							"Compile Diff Trajectories not registered in extension host",
						);
					le = {
						fileDiffHistories: ae,
						diffHistory: [],
						blockDiffPatches: [],
						mergedDiffHistories: ae,
					};
					const pe = performance.now();
					return (
						this.J.distribution({
							stat: "cursorpredclient.immediatelyFire.diffHistory",
							value: pe - oe,
						}),
						{
							...le,
							linterErrors: te,
							currentFile: re,
							enableMoreContext:
								this.F.applicationUserPersistentStorage.cppExtraContextEnabled,
							cppIntentInfo: { source: "line_change" },
						}
					);
				}
				async getAndShowNextPrediction({
					editor: Y,
					triggerCppCallback: ie,
					getLinterErrors: ne,
					source: ee,
					cppSuggestionRange: _,
				}) {
					if (
						(await this.periodicallyReloadCursorPredictionConfig(),
						q("[CURSOR PREDICTION] createPrediction: called"),
						!this.isCursorPredictionEnabled() || this.C === !0)
					) {
						q(
							"[CURSOR PREDICTION] createPrediction: not enabled or currently clearing prediction",
						);
						return;
					}
					if (this.Y()?.cppConfig?.isFusedCursorPredictionModel) {
						q(
							"[CURSOR PREDICTION] createPrediction: skipping because fused cursor prediction model is enabled",
						);
						return;
					}
					try {
						q("[CURSOR PREDICTION] createPrediction: clearing prediction"),
							await this.clearPrediction({ editor: Y, registerReject: !0 }),
							q("[CURSOR PREDICTION] createPrediction: cleared prediction");
						const te = Y.getModel();
						if (!te) {
							q("[CURSOR PREDICTION] createPrediction: model is null");
							return;
						}
						const Q = Y.getSelection();
						if (Q === null) {
							q("[CURSOR PREDICTION] createPrediction: selection is null");
							return;
						}
						if (this.overlapsInlineDiff(te.uri, Q.startLineNumber) === !0) {
							q("[CURSOR PREDICTION] createPrediction: overlapsInlineDiff");
							return;
						}
						if (te.getLineCount() < J) {
							q(
								"[CURSOR PREDICTION] createPrediction: model.getLineCount() < CURSOR_PREDICTION_MIN_FILE_LINES",
							);
							return;
						}
						let Z =
							this.F.applicationUserPersistentStorage.cursorPredictionState
								?.model;
						Z === void 0 && (Z = P.$afd);
						let se = this.F.workspaceUserPersistentStorage.uniqueCppWorkspaceId;
						if (
							(se === void 0 &&
								((se =
									Math.random().toString(36).substring(2, 15) +
									Math.random().toString(36).substring(2, 15)),
								this.F.setWorkspaceUserPersistentStorage(
									"uniqueCppWorkspaceId",
									se,
								)),
							te.uri.scheme === b.Schemas.vscodeNotebookCell)
						)
							return;
						let re = [];
						const le = await this.shouldRelyOnFileSyncForFile(
							this.G.asRelativePath(te.uri),
							te.getVersionId(),
						);
						le &&
							(re = await this.getFileSyncUpdates(
								this.G.asRelativePath(te.uri),
								te.getVersionId(),
							)),
							q(
								"[CURSOR PREDICTION] createPrediction: getting partial cursor prediction request",
							);
						const oe = await this.getPartialCursorPredictionRequest({
							editor: Y,
							uri: te.uri,
							modelVersion: te.getVersionId(),
							modelValue: le ? "" : te.getValue(),
							getLinterErrors: ne,
						});
						oe.currentFile !== void 0 && (oe.currentFile.relyOnFilesync = le);
						const ae = {
							...oe,
							modelName: Z,
							diffHistoryKeys: [],
							contextItems: [],
							parameterHints: this.L.getRelevantType(Y),
							lspContexts: [],
							workspaceId: se,
							fileSyncUpdates: re,
							fileVisibleRanges: this.getOpenVisibleRanges(),
						};
						this.h !== void 0 && this.h.abort(),
							(this.h = new AbortController());
						const pe = await this.aiClient(),
							$e = await this.$();
						let ye = "",
							ue,
							fe = !1;
						const me = (0, N.$9g)(),
							ve = pe.streamNextCursorPrediction(ae, {
								signal: this.h.signal,
								headers: { ...K(me), ...$e },
							});
						let ge;
						q("[CURSOR PREDICTION] createPrediction: starting to stream");
						for await (const Ce of ve) {
							const Le = Ce.response;
							if (
								(Le.case === "fileName" &&
									((ge = this.G.resolveRelativePath(Le.value)),
									ge === void 0 &&
										q("[CURSOR PREDICTION] predictedUri is undefined")),
								Le.case === "lineNumber")
							) {
								ue = Le.value;
								break;
							}
							if (Le.case === "isNotInRange") {
								fe = !0;
								break;
							}
						}
						if ((this.h?.abort(), (this.h = void 0), fe)) {
							q("[CURSOR PREDICTION] createPrediction: isNoOp");
							return;
						}
						if (ue === void 0) {
							q("[CURSOR PREDICTION] predictedLineNumberInRange is undefined.");
							return;
						}
						const be = await this.createPrediction({
							editor: Y,
							model: te,
							predictedLineNumberInRange: ue,
							predictionText: ye,
							generationUuid: me,
							source: ee,
							cppSuggestionRange: _,
							predictedUri: ge,
						});
						if (
							ie !== void 0 &&
							be?.lineNumber !== void 0 &&
							this.F.nonPersistentStorage.cppState?.suggestion === void 0
						) {
							const Ce = new f.$hL(be.lineNumber, 1);
							ie(te.uri, Y, p.CppSource.CursorPrediction, Ce);
						}
					} catch {}
				}
				async getFileSyncUpdates(Y, ie) {
					try {
						return (
							(
								await this.M.onlyLocalProvider?.runCommand(
									p.FileSyncActions.GetFileSyncUpdates,
									{ relativeWorkspacePath: Y, requestedModelVersion: ie },
								)
							)?.map((ee) => R.$mB.fromJson(ee)) ?? []
						);
					} catch (ne) {
						return (
							ne("[CURSOR PREDICTION] error getting file sync updates", ne), []
						);
					}
				}
				async shouldRelyOnFileSyncForFile(Y, ie) {
					try {
						const ne = await this.M.onlyLocalProvider?.runCommand(
							p.FileSyncActions.ShouldRelyOnFileSyncForFile,
							{ relativeWorkspacePath: Y, modelVersion: ie },
						);
						return (
							q("[CURSOR PREDICTION] should rely on file sync for file", Y, ne),
							ne ?? !1
						);
					} catch (ne) {
						return (
							ne(
								"[CURSOR PREDICTION] error checking if should rely on file sync for file",
								ne,
							),
							!1
						);
					}
				}
				async $() {
					const Y = await this.M.onlyLocalProvider?.runCommand(
						p.FileSyncActions.GetFileSyncEncryptionHeader,
						null,
					);
					if (Y === void 0)
						throw new Error("Could not retrieve file sync encryption header");
					return Y;
				}
				overlapsInlineDiff(Y, ie) {
					const ne = this.F.nonPersistentStorage.inlineDiffs;
					if (ne === void 0) return !1;
					const ee = this.F.nonPersistentStorage.inprogressAIGenerations.map(
						(_) => _.generationUUID,
					);
					return ne.some((_) => {
						const te = ee.includes(_.generationUUID),
							Q =
								ie >= _.currentRange.startLineNumber &&
								ie <= _.currentRange.endLineNumberExclusive,
							Z = S.$dh.isEqual(_.uri, Y) || Y.fsPath === _.uri.fsPath;
						return te && Q && Z;
					});
				}
				doesPredictionMatchUniqueLineInRange({
					model: Y,
					range: ie,
					predictionText: ne,
				}) {
					const ee = Y.getValue()
						.split(`
`)
						.slice(ie.startLineNumber - 1, ie.endLineNumberExclusive + 2);
					let _ = 0,
						te = !1;
					for (_ = 0; _ < ee.length - 2; _++)
						if (
							ee
								.slice(_, _ + 3)
								.join(`
`)
								.startsWith(ne)
						) {
							if (te) return !1;
							te = !0;
						}
					return te;
				}
				async clearPrediction({
					editor: Y,
					onlyRemoveOverlayWidget: ie,
					registerReject: ne,
				}) {
					const ee = this.F.nonPersistentStorage.cursorPrediction;
					if (ee !== void 0) {
						this.C = !0;
						try {
							if ((this.m?.dispose(), (this.m = void 0), ie === !0)) return;
							const _ = Y.getModel();
							if (_ !== null && S.$dh.isEqual(_.uri, ee.uri))
								_.deltaDecorations([ee.decorationId], []),
									this.t !== void 0 &&
										(_.deltaDecorations([this.t], []), (this.t = void 0)),
									this.w !== void 0 &&
										(_.deltaDecorations([this.w], []), (this.w = void 0)),
									ne &&
										ee !== void 0 &&
										this.Q.recordRejectCursorPredictionEvent(_, ee);
							else {
								const te = await this.O.createModelReference(ee.uri);
								try {
									const Q = te.object.textEditorModel;
									Q.deltaDecorations([ee.decorationId], []),
										ne &&
											ee !== void 0 &&
											this.Q.recordRejectCursorPredictionEvent(Q, ee);
								} finally {
									te.dispose();
								}
							}
							this.n && (this.n.dispose(), (this.n = void 0)),
								this.y?.dispose(),
								(this.y = void 0),
								this.F.setNonPersistentStorage("cursorPrediction", void 0);
						} catch (_) {
							_("[CURSOR PREDICTION] error clearing prediction", _);
						} finally {
							this.C = !1;
						}
					}
				}
				hideWidgetsIfConflictsWithCppSuggestion(Y, ie) {
					if (!this.isCursorPredictionEnabled()) return;
					const ne = this.F.nonPersistentStorage.cursorPrediction;
					if (ne === void 0) return;
					const ee = Y.getModel();
					ee !== null &&
						S.$dh.isEqual(ee.uri, ne.uri) &&
						ne.lineNumber >= ie.startLineNumber &&
						ne.lineNumber < ie.endLineNumberExclusive &&
						(this.clearPrediction({
							editor: Y,
							onlyRemoveOverlayWidget: !0,
							registerReject: !1,
						}),
						this.n?.hide());
				}
				maybeShowHintLineWidget() {
					this.isCursorPredictionEnabled() &&
						(this.F.nonPersistentStorage.cursorPrediction === void 0 ||
							this.n === void 0 ||
							(this.n.show(), (this.r = !0)));
				}
				async getMultifileCursorPredictionEditor(Y) {
					if (
						(q("[CursorPredictionService] createPredictionMultifile: called"),
						this.C === !0 || Y === void 0)
					)
						return;
					const ie = this.G.asRelativePath(Y);
					q("[CURSOR PREDICTION] createPredictionMultifile: to", ie);
					const ne = this.N.getActiveCodeEditor();
					if (ne && S.$dh.isEqual(ne.getModel()?.uri, Y)) return ne;
					const ee = this.N.listCodeEditors();
					for (const _ of ee) if (S.$dh.isEqual(_.getModel()?.uri, Y)) return _;
				}
				ab(Y, ie, ne, ee) {
					q(
						"[CURSOR PREDICTION] Updating non-visible editor indicator",
						ie.toString(),
					),
						this.y instanceof O.$ffd
							? (q("[CURSOR PREDICTION] Updating existing indicator"),
								this.y.updateContent(ie, ne))
							: (q("[CURSOR PREDICTION] Creating new indicator"),
								this.y?.dispose(),
								(this.y = this.I.createInstance(O.$ffd, Y, ie, ne)));
				}
				async createPrediction(Y) {
					const {
						predictionText: ie,
						generationUuid: ne,
						source: ee,
						cppSuggestionRange: _,
						predictedUri: te,
					} = Y;
					let Q = Y.editor,
						Z = Y.model,
						se = Z.uri;
					if (te !== void 0) {
						se = te;
						const ue = await this.getMultifileCursorPredictionEditor(te);
						if (ue !== void 0) {
							Q = ue;
							const fe = Q.getModel();
							if (fe === null) return;
							Z = fe;
						}
					}
					let re = Y.predictedLineNumberInRange;
					if (this.C === !0) return;
					await this.clearPrediction({ editor: Q, registerReject: !0 });
					const le = Q.getPosition();
					if (
						re === void 0 ||
						le === null ||
						Math.abs(le.lineNumber - re) <= 1 ||
						this.overlapsInlineDiff(Z.uri, re) === !0 ||
						this.R.isValidCursorPredictionCase({
							predictedLineNumber: re,
							cppSuggestionRange: _,
						}).valid === !1
					)
						return;
					const oe = this.getDecoration({ model: Z, lineNumber: re });
					if (oe === void 0) return;
					const ae = Z.deltaDecorations([], [oe]).at(0);
					if (ae === void 0) return;
					this.q !== void 0 && clearTimeout(this.q),
						q("[CURSOR PREDICTION] predictedUri", te),
						q("[CURSOR PREDICTION] editor.getModel()?.uri", Q.getModel()?.uri);
					const pe = S.$dh.isEqual(Q.getModel()?.uri, se);
					if (
						(q("[CURSOR PREDICTION] areUrisEqual", pe),
						pe
							? ((this.y = this.I.createInstance(L.default, Q, ae)),
								(this.n = this.I.createInstance(T.$0ed, Q, ae)))
							: (q("[CURSOR PREDICTION] Prediction is in a non-visible editor"),
								this.ab(Q, se, re, ie)),
						this.j.get(Q.getId()) === void 0)
					) {
						const ue = this.D(
								Q.onDidChangeModel((ge) => {
									(this.X = !1),
										this.clearPrediction({ editor: Q, registerReject: !0 });
								}),
							),
							fe = this.D(
								Q.onDidBlurEditorText(() => {
									(this.X = !1),
										this.clearPrediction({ editor: Q, registerReject: !0 });
								}),
							),
							me = this.D(
								Q.onDidChangeModelContent(() => {
									(this.X = !1),
										this.clearPrediction({ editor: Q, registerReject: !0 });
								}),
							),
							ve = this.D(
								Q.onDidChangeCursorPosition((ge) => {
									this.X && (this.X = !1);
								}),
							);
						this.j.set(Q.getId(), [ue, fe, me, ve]);
					}
					const ye = {
						source: ee,
						monotonicallyIncreasingPredictionId: this.z++,
						requestId: ne,
						decorationId: ae,
						uri: se,
						lineNumber: re,
						text: ie,
					};
					return (
						q(`Created Prediction with RequestId ${ye.requestId}`),
						this.Q.recordSuggestCursorPredictionEvent(Z, ye),
						this.F.setNonPersistentStorage("cursorPrediction", ye),
						ye
					);
				}
				isShowingCursorPrediction(Y) {
					const ie = this.F.nonPersistentStorage.cursorPrediction;
					return ie === void 0 ? !1 : S.$dh.isEqual(ie.uri, Y.getModel()?.uri);
				}
				manuallyCreateCursorPrediction(Y) {
					if (!S.$dh.isEqual(Y.editor.getModel()?.uri, Y.model.uri)) {
						q(
							"TODO IAN: IMPLEMENT CROSS-FILE CURSOR-PREDICTION FOR MANUAL CREATION",
						);
						return;
					}
					this.isCursorPredictionEnabled() &&
						((this.r = !0),
						this.createPrediction({
							editor: Y.editor,
							model: Y.model,
							predictedLineNumberInRange: Y.lineNumber,
							predictionText: "",
							generationUuid: (0, N.$9g)(),
							source: v.CursorPrediction_CursorPredictionSource.UNSPECIFIED,
						}));
				}
				getDecoration({ model: Y, lineNumber: ie }) {
					return {
						range: {
							startLineNumber: ie,
							startColumn: 1,
							endLineNumber: ie,
							endColumn: Y.getLineMaxColumn(ie),
						},
						options: {
							description: "next cursor prediction",
							stickiness: l.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
						},
					};
				}
				dispose() {
					this.j.forEach((Y) => Y.forEach((ie) => ie.dispose())),
						this.j.clear(),
						super.dispose();
				}
				getModel() {
					return (
						this.Y().cursorPredictionState?.model ??
						this.Y().cursorPredictionModel
					);
				}
				async _refreshConfig() {
					const ie = await (
							await this.cursorPredictionClient()
						).cursorPredictionConfig({}),
						ne = ie.models.filter((ee) => ee.name && ee.radius);
					this.F.setApplicationUserPersistentStorage(
						"cursorPredictionState",
						(ee) => ({
							...(ee ?? {}),
							modelConfigs: ne,
							defaultModel: ie.defaultModel,
							heuristics: ie.heuristics,
						}),
					);
				}
				updateHintLineWidgetMarginLeft(Y) {
					this.n?.updateMarginLeft(Y);
				}
				getOpenVisibleRanges() {
					const Y = [],
						ie = this.Y().cppConfig?.excludeRecentlyViewedFilesPatterns ?? [];
					for (const ne of this.N.listCodeEditors()) {
						const ee = ne.getModel();
						if ((0, n.$0sb)(ne) && ee) {
							const _ = ee.uri,
								te = this.G.asRelativePath(_),
								Q = [
									b.Schemas.file,
									b.Schemas.inMemory,
									b.Schemas.vscodeNotebookCell,
									b.Schemas.vscodeFileResource,
									b.Schemas.vscodeRemote,
									b.Schemas.vscodeRemoteResource,
									b.Schemas.vscodeManagedRemoteResource,
								];
							if (
								te === void 0 ||
								te === "" ||
								te.includes("anysphere") ||
								!Q.some((se) => (0, b.$Vg)(ee.uri, se)) ||
								ie.some((se) => te.includes(se))
							)
								continue;
							const Z = ne
								.getVisibleRanges()
								.map(
									(se) =>
										new g.$WE({
											startLineNumberInclusive: se.startLineNumber,
											endLineNumberExclusive: se.endLineNumber,
										}),
								);
							Y.push(new g.$XE({ filename: te, visibleRanges: Z }));
						}
					}
					return Y;
				}
				async bb(Y, ie) {
					const ne = await this.O.createModelReference(Y);
					try {
						return ne.object.textEditorModel.getLineContent(ie);
					} finally {
						ne.dispose();
					}
				}
				cb() {
					for (const Y of this.N.listCodeEditors())
						this.clearPrediction({ editor: Y, registerReject: !1 });
				}
			};
			(e.$gfd = W),
				(e.$gfd = W =
					Ne(
						[
							j(0, d.$0zb),
							j(1, m.$Vi),
							j(2, r.$aM),
							j(3, u.$Li),
							j(4, a.$wcc),
							j(5, h.$Led),
							j(6, c.$3Db),
							j(7, y.$dtb),
							j(8, $.$MO),
							j(9, k.$d6b),
							j(10, M.$V7b),
							j(11, A.$dfd),
							j(12, B.$ll),
							j(13, U.$7rb),
							j(14, z.$EY),
						],
						W,
					)),
				(0, s.$lK)(C.$kfc, W, s.InstantiationType.Delayed);
		},
	),
		define(
			de[3629],
			he([1, 0, 4, 3, 112, 10, 166]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5Qc = void 0),
					(t = mt(t));
				let d = class {
					constructor(r, u, a) {
						(this.d = r), (this.f = u), (this.b = []);
						const h = () => {
								this.c = this.d.addEntry(
									this.g,
									"status.debug",
									C.StatusbarAlignment.LEFT,
									30,
								);
							},
							c = () => {
								(this.a = a.getValue("debug").showInStatusBar),
									this.a === "always" && !this.c && h();
							};
						c(),
							this.b.push(
								this.f.onDidChangeState((n) => {
									n !== w.State.Inactive &&
										this.a === "onFirstSessionStart" &&
										!this.c &&
										h();
								}),
							),
							this.b.push(
								a.onDidChangeConfiguration((n) => {
									n.affectsConfiguration("debug.showInStatusBar") &&
										(c(),
										this.c &&
											this.a === "never" &&
											(this.c.dispose(), (this.c = void 0)));
								}),
							),
							this.b.push(
								this.f
									.getConfigurationManager()
									.onDidSelectConfiguration((n) => {
										this.c?.update(this.g);
									}),
							);
					}
					get g() {
						let r = "";
						const u = this.f.getConfigurationManager(),
							a = u.selectedConfiguration.name || "";
						return (
							a &&
								u.selectedConfiguration.launch &&
								(r =
									u.getLaunches().length > 1
										? `${a} (${u.selectedConfiguration.launch.name})`
										: a),
							{
								name: t.localize(5635, null),
								text: "$(debug-alt-small) " + r,
								ariaLabel: t.localize(5636, null, r),
								tooltip: t.localize(5637, null),
								command: "workbench.action.debug.selectandstart",
							}
						);
					}
					dispose() {
						this.c?.dispose(), (0, i.$Vc)(this.b);
					}
				};
				(e.$5Qc = d),
					(e.$5Qc = d = Ne([j(0, C.$d6b), j(1, w.$75), j(2, E.$gj)], d));
			},
		),
		define(
			de[3630],
			he([1, 0, 4, 51, 112, 25, 123, 3, 166, 10, 180]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cRc = e.$bRc = e.$aRc = e.$_Qc = e.$$Qc = void 0),
					(e.$dRc = h),
					(e.$$Qc = (0, i.$wP)(
						"statusBar.debuggingBackground",
						{
							dark: "#CC6633",
							light: "#CC6633",
							hcDark: "#BA592C",
							hcLight: "#B5200D",
						},
						(0, t.localize)(5739, null),
					)),
					(e.$_Qc = (0, i.$wP)(
						"statusBar.debuggingForeground",
						{ dark: C.$IFb, light: C.$IFb, hcDark: C.$IFb, hcLight: "#FFFFFF" },
						(0, t.localize)(5740, null),
					)),
					(e.$aRc = (0, i.$wP)(
						"statusBar.debuggingBorder",
						C.$MFb,
						(0, t.localize)(5741, null),
					)),
					(e.$bRc = (0, i.$wP)(
						"commandCenter.debuggingBackground",
						(0, i.$BP)(e.$$Qc, 0.258),
						(0, t.localize)(5742, null),
						!0,
					));
				let a = class {
					set c(n) {
						n !== !!this.b &&
							(n
								? (this.b = this.g.overrideStyle({
										priority: 10,
										foreground: e.$_Qc,
										background: e.$$Qc,
										border: e.$aRc,
									}))
								: (this.b.dispose(), (this.b = void 0)));
					}
					constructor(n, g, p, o, f) {
						(this.d = n),
							(this.f = g),
							(this.g = p),
							(this.h = o),
							(this.i = f),
							(this.a = new d.$Zc()),
							this.d.onDidChangeState(this.j, this, this.a),
							this.f.onDidChangeWorkbenchState(this.j, this, this.a),
							this.i.onDidChangeConfiguration(
								(b) => {
									(b.affectsConfiguration("debug.enableStatusBarColor") ||
										b.affectsConfiguration("debug.toolBarLocation")) &&
										this.j();
								},
								void 0,
								this.a,
							),
							this.j();
					}
					j() {
						const n = this.i.getValue("debug"),
							g = h(this.d.state, this.d.getModel().getSessions());
						n.enableStatusBarColor ? (this.c = g) : (this.c = !1);
						const p = n.toolBarLocation === "commandCenter";
						this.h.mainContainer.style.setProperty(
							(0, i.$qP)(C.$UGb),
							p && g ? (0, i.$rP)(e.$bRc) : "",
						);
					}
					dispose() {
						this.b?.dispose(), this.a.dispose();
					}
				};
				(e.$cRc = a),
					(e.$cRc = a =
						Ne(
							[
								j(0, w.$75),
								j(1, E.$Vi),
								j(2, m.$d6b),
								j(3, u.$jEb),
								j(4, r.$gj),
							],
							a,
						));
				function h(c, n) {
					return !(
						c === w.State.Inactive ||
						c === w.State.Initializing ||
						n.every((g) => g.suppressDebugStatusbar || g.configuration?.noDebug)
					);
				}
			},
		),
		define(
			de[3631],
			he([
				1, 0, 7, 75, 29, 6, 3, 1501, 4, 31, 57, 109, 5, 110, 62, 985, 1295, 18,
				517, 53, 1823, 166,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_fd = void 0),
					(m = mt(m));
				let y = class extends C.$1c {
					get state() {
						return this.h;
					}
					get lastProfile() {
						return this.f;
					}
					constructor(v, S, I, T, P, k, L) {
						super(),
							(this.n = v),
							(this.q = S),
							(this.r = I),
							(this.s = T),
							(this.t = P),
							(this.u = k),
							(this.w = L),
							(this.a = this.D(new E.$re())),
							(this.onDidChangeState = this.a.event),
							(this.b = this.D(new E.$re())),
							(this.onDidChangeLastProfile = this.b.event),
							(this.c = new a.$In()),
							(this.h = p.ProfileSessionState.None),
							(this.m = this.D(new C.$2c())),
							(this.f = null),
							(this.g = null),
							this.y(p.ProfileSessionState.None),
							r.$fk.registerCommand(
								"workbench.action.extensionHostProfiler.stop",
								() => {
									this.stopProfiling(),
										this.q.openEditor(g.$UTc.instance, { pinned: !0 });
								},
							);
					}
					y(v) {
						this.h !== v &&
							((this.h = v),
							this.h === p.ProfileSessionState.Running
								? this.z(!0)
								: this.h === p.ProfileSessionState.Stopping && this.z(!1),
							this.a.fire(void 0));
					}
					z(v) {
						if ((this.m.clear(), v)) {
							const S = {
									name: m.localize(6604, null),
									text: m.localize(6605, null),
									showProgress: !0,
									ariaLabel: m.localize(6606, null),
									tooltip: m.localize(6607, null),
									command: "workbench.action.extensionHostProfiler.stop",
								},
								I = Date.now(),
								T = (0, t.$igb)(
									i.$Bfb,
									() => {
										this.j?.update({
											...S,
											text: m.localize(
												6608,
												null,
												Math.round((new Date().getTime() - I) / 1e3),
											),
										});
									},
									1e3,
								);
							(this.m.value = T),
								this.j
									? this.j.update(S)
									: (this.j = this.u.addEntry(
											S,
											"status.profiler",
											l.StatusbarAlignment.RIGHT,
										));
						} else this.j && (this.j.dispose(), (this.j = void 0));
					}
					async startProfiling() {
						if (this.h !== p.ProfileSessionState.None) return null;
						const v = await this.n.getInspectPorts(
							f.ExtensionHostKind.LocalProcess,
							!0,
						);
						return v.length === 0
							? this.t
									.confirm({
										type: "info",
										message: m.localize(6609, null),
										detail: m.localize(6610, null, this.w.nameLong),
										primaryButton: m.localize(6611, null),
									})
									.then((S) => {
										S.confirmed &&
											this.s.relaunch({
												addArgs: [`--inspect-extensions=${(0, d.$1pb)()}`],
											});
									})
							: (v.length > 1 &&
									console.warn(
										"There are multiple extension hosts available for profiling. Picking the first one...",
									),
								this.y(p.ProfileSessionState.Starting),
								this.r
									.createInstance(s.$$fd, v[0].host, v[0].port)
									.start()
									.then(
										(S) => {
											(this.g = S), this.y(p.ProfileSessionState.Running);
										},
										(S) => {
											(0, w.$4)(S), this.y(p.ProfileSessionState.None);
										},
									));
					}
					stopProfiling() {
						this.h !== p.ProfileSessionState.Running ||
							!this.g ||
							(this.y(p.ProfileSessionState.Stopping),
							this.g.stop().then(
								(v) => {
									this.C(v), this.y(p.ProfileSessionState.None);
								},
								(v) => {
									(0, w.$4)(v), this.y(p.ProfileSessionState.None);
								},
							),
							(this.g = null));
					}
					C(v) {
						(this.f = v), this.b.fire(void 0);
					}
					getUnresponsiveProfile(v) {
						return this.c.get(v);
					}
					setUnresponsiveProfile(v, S) {
						this.c.set(v, S), this.C(S);
					}
				};
				(e.$_fd = y),
					(e.$_fd = y =
						Ne(
							[
								j(0, b.$q2),
								j(1, o.$IY),
								j(2, h.$Li),
								j(3, c.$y7c),
								j(4, u.$GO),
								j(5, l.$d6b),
								j(6, n.$Bk),
							],
							y,
						));
			},
		),
		define(
			de[3632],
			he([
				1, 0, 3, 56, 4, 30, 55, 18, 52, 166, 474, 15, 61, 39, 11, 40, 8, 43,
				176, 27, 71, 23, 10,
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
			) {
				"use strict";
				var $;
				Object.defineProperty(e, "__esModule", { value: !0 });
				const v = "editor.detectLanguage";
				let S = class {
					static {
						$ = this;
					}
					static {
						this.a = "status.languageDetectionStatus";
					}
					constructor(T, P, k, L, D, M) {
						(this.f = T),
							(this.g = P),
							(this.h = k),
							(this.i = L),
							(this.j = D),
							(this.k = M),
							(this.b = new t.$Zc()),
							(this.d = new a.$Kh(1e3)),
							(this.e = new t.$Zc()),
							L.onDidActiveEditorChange(() => this.l(!0), this, this.b),
							this.l(!1);
					}
					dispose() {
						this.b.dispose(),
							this.d.dispose(),
							this.c?.dispose(),
							this.e.dispose();
					}
					l(T) {
						T && (this.c?.dispose(), (this.c = void 0)),
							this.d.trigger(() => this.m());
					}
					async m() {
						const T = (0, i.$btb)(this.i.activeTextEditorControl);
						this.e.clear(),
							T?.onDidChangeModelLanguage(() => this.l(!0), this, this.e),
							T?.onDidChangeModelContent(() => this.l(!1), this, this.e);
						const P = T?.getModel(),
							k = P?.uri,
							L = P?.getLanguageId(),
							D = this.h.getValue("workbench.editor.languageDetectionHints");
						if (
							!(typeof D == "object" && D?.untitledEditors) ||
							k?.scheme !== l.Schemas.untitled ||
							!L ||
							!k
						)
							this.c?.dispose(), (this.c = void 0);
						else {
							const A = await this.f.detectLanguage(k),
								R = { jsonc: "json" },
								O = P.getLanguageId();
							if (A && A !== O && R[O] !== A) {
								const B = this.j.getLanguageName(A) || A;
								let U = (0, w.localize)(7328, null, B);
								const F = this.k.lookupKeybinding(v)?.getLabel();
								F && (U += ` (${F})`);
								const x = {
									name: (0, w.localize)(7329, null),
									ariaLabel: (0, w.localize)(7330, null, A),
									tooltip: U,
									command: v,
									text: "$(lightbulb-autofix)",
								};
								this.c
									? this.c.update(x)
									: (this.c = this.g.addEntry(
											x,
											$.a,
											r.StatusbarAlignment.RIGHT,
											{
												id: "status.editor.mode",
												alignment: r.StatusbarAlignment.RIGHT,
												compact: !0,
											},
										));
							} else this.c?.dispose(), (this.c = void 0);
						}
					}
				};
				(S = $ =
					Ne(
						[
							j(0, u.$RO),
							j(1, r.$d6b),
							j(2, y.$gj),
							j(3, d.$IY),
							j(4, h.$nM),
							j(5, c.$uZ),
						],
						S,
					)),
					E.$Io
						.as(C.Extensions.Workbench)
						.registerWorkbenchContribution(S, m.LifecyclePhase.Restored),
					(0, n.$4X)(
						class extends n.$3X {
							constructor() {
								super({
									id: v,
									title: (0, w.localize2)(7332, "Detect Language from Content"),
									f1: !0,
									precondition: p.$Kj.and(
										f.$tJb.toNegated(),
										s.EditorContextKeys.editorTextFocus,
									),
									keybinding: {
										primary: b.KeyCode.KeyD | b.KeyMod.Alt | b.KeyMod.Shift,
										weight: o.KeybindingWeight.WorkbenchContrib,
									},
								});
							}
							async run(I) {
								const T = I.get(d.$IY),
									P = I.get(u.$RO),
									k = (0, i.$btb)(T.activeTextEditorControl),
									L = I.get(g.$4N),
									D = k?.getModel()?.uri;
								if (D) {
									const M = await P.detectLanguage(D);
									M
										? k.getModel()?.setLanguage(M, u.$SO)
										: L.warn((0, w.localize)(7331, null));
								}
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
	define(
		de[3633],
		he([
			1, 0, 7, 182, 3, 111, 56, 4, 30, 26, 55, 18, 1024, 52, 166, 488, 497, 41,
			94, 105, 50, 14, 21, 24, 9, 11, 99, 66, 72, 6, 2448,
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
		) {
			"use strict";
			var L;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(t = mt(t)),
				(E = xi(E));
			class D {
				constructor(O, B) {
					(this.combined = O), (this.dedicated = B);
				}
				isEqual(O) {
					return (
						(0, $.$yb)(this.combined, O.combined) &&
						(0, $.$yb)(this.dedicated, O.dedicated)
					);
				}
			}
			let M = class {
				constructor(O, B) {
					(this.a = O), (this.b = B);
				}
				get value() {
					return this.a.getNumber(this.b, y.StorageScope.PROFILE, 0);
				}
				increment() {
					const O = this.value + 1;
					return (
						this.a.store(
							this.b,
							O,
							y.StorageScope.PROFILE,
							y.StorageTarget.MACHINE,
						),
						O
					);
				}
			};
			M = Ne([j(0, y.$lq)], M);
			let N = class extends w.$1c {
				constructor(O) {
					super(), (this.a = O);
					for (const B of O.parts) this.b(B);
					this.D(O.onDidCreateAuxiliaryEditorPart((B) => this.b(B)));
				}
				b(O) {
					const B = new w.$Zc();
					k.Event.once(O.onWillDispose)(() => B.dispose());
					const U = this.a.getScopedInstantiationService(O);
					B.add(U.createInstance(A));
				}
			};
			N = Ne([j(0, T.$EY)], N);
			let A = class {
				static {
					L = this;
				}
				static {
					this.a = "status.languageStatus";
				}
				static {
					this.b = "languageStatus.dedicated";
				}
				constructor(O, B, U, z, F, x) {
					(this.k = O),
						(this.l = B),
						(this.m = U),
						(this.o = z),
						(this.p = F),
						(this.q = x),
						(this.c = new w.$Zc()),
						(this.f = new Set()),
						(this.i = new Map()),
						(this.j = new w.$Zc()),
						x.onDidChangeValue(y.StorageScope.PROFILE, L.b, this.c)(
							this.r,
							this,
							this.c,
						),
						this.s(),
						(this.d = new M(x, "languageStatus.interactCount")),
						O.onDidChange(this.v, this, this.c),
						U.onDidActiveEditorChange(this.v, this, this.c),
						this.v(),
						B.onDidChangeEntryVisibility(
							(H) => {
								!H.visible &&
									this.f.has(H.id) &&
									(this.f.delete(H.id), this.v(), this.t());
							},
							void 0,
							this.c,
						);
				}
				dispose() {
					this.c.dispose(),
						this.h?.dispose(),
						(0, w.$Vc)(this.i.values()),
						this.j.dispose();
				}
				r() {
					this.s(), this.v();
				}
				s() {
					const O = this.q.get(L.b, y.StorageScope.PROFILE, "[]");
					try {
						const B = JSON.parse(O);
						this.f = new Set(B);
					} catch {
						this.f.clear();
					}
				}
				t() {
					if (this.f.size === 0) this.q.remove(L.b, y.StorageScope.PROFILE);
					else {
						const O = JSON.stringify(Array.from(this.f.keys()));
						this.q.store(L.b, O, y.StorageScope.PROFILE, y.StorageTarget.USER);
					}
				}
				u(O) {
					if (!O?.hasModel()) return new D([], []);
					const B = this.k.getLanguageStatus(O.getModel()),
						U = [],
						z = [];
					for (const F of B) this.f.has(F.id) && z.push(F), U.push(F);
					return new D(U, z);
				}
				v() {
					const O = (0, C.$btb)(this.m.activeTextEditorControl),
						B = this.u(O);
					if (this.g?.isEqual(B)) return;
					if (
						(this.j.clear(),
						(this.g = B),
						O?.onDidChangeModelLanguage(this.v, this, this.j),
						B.combined.length === 0)
					)
						this.h?.dispose(), (this.h = void 0);
					else {
						const [z] = B.combined,
							F = z.severity >= E.default.Warning,
							x = L.x(z.severity);
						let H = !1;
						const q = [],
							V = document.createElement("div");
						for (const Y of B.combined) {
							const ie = B.dedicated.includes(Y);
							V.appendChild(this.w(Y, F, ie, this.j)),
								q.push(L.A(Y).label),
								(H = H || (!ie && Y.busy));
						}
						const G = {
							name: (0, d.localize)(7333, null),
							ariaLabel: (0, d.localize)(7334, null, q.join(", next: ")),
							tooltip: V,
							command: n.$g6b,
							text: H ? `${x}\xA0\xA0$(sync~spin)` : x,
						};
						this.h
							? this.h.update(G)
							: (this.h = this.l.addEntry(G, L.a, n.StatusbarAlignment.RIGHT, {
									id: "status.editor.mode",
									alignment: n.StatusbarAlignment.LEFT,
									compact: !0,
								}));
						const K = this.d.value >= 3,
							J = t.getWindow(O?.getContainerDomNode()),
							W = J.document.querySelector(
								".monaco-workbench .statusbar DIV#status\\.languageStatus A>SPAN.codicon",
							),
							X = J.document.querySelector(
								".monaco-workbench .statusbar DIV#status\\.languageStatus",
							);
						if (t.$Ygb(W) && X) {
							const Y = "wiggle",
								ie = "flash";
							H
								? (W.classList.remove(Y), X.classList.remove(ie))
								: (W.classList.toggle(Y, F || !K),
									this.j.add(
										t.$0fb(W, "animationend", (ne) => W.classList.remove(Y)),
									),
									X.classList.toggle(ie, F),
									this.j.add(
										t.$0fb(X, "animationend", (ne) => X.classList.remove(ie)),
									));
						}
						if (!K) {
							const Y = J.document.querySelector(
								".monaco-workbench .context-view",
							);
							if (t.$Ygb(Y)) {
								const ie = new MutationObserver(() => {
									J.document.contains(V) &&
										(this.d.increment(), ie.disconnect());
								});
								ie.observe(Y, { childList: !0, subtree: !0 }),
									this.j.add((0, w.$Yc)(() => ie.disconnect()));
							}
						}
					}
					const U = new Map();
					for (const z of B.dedicated) {
						const F = L.B(z);
						let x = this.i.get(z.id);
						x
							? (x.update(F), this.i.delete(z.id))
							: (x = this.l.addEntry(F, z.id, n.StatusbarAlignment.RIGHT, {
									id: "status.editor.mode",
									alignment: n.StatusbarAlignment.RIGHT,
								})),
							U.set(z.id, x);
					}
					(0, w.$Vc)(this.i.values()), (this.i = U);
				}
				w(O, B, U, z) {
					const F = document.createElement("div");
					F.classList.add("hover-language-status");
					const x = document.createElement("div");
					x.classList.add("severity", `sev${O.severity}`),
						x.classList.toggle("show", B);
					const H = L.y(O.severity);
					t.$fhb(x, ...(0, i.$Sib)(H)), F.appendChild(x);
					const q = document.createElement("div");
					q.classList.add("element"), F.appendChild(q);
					const V = document.createElement("div");
					V.classList.add("left"), q.appendChild(V);
					const G = document.createElement("span");
					G.classList.add("label");
					const K = typeof O.label == "string" ? O.label : O.label.value;
					t.$fhb(G, ...(0, i.$Sib)(O.busy ? `$(sync~spin)\xA0\xA0${K}` : K)),
						V.appendChild(G);
					const J = document.createElement("span");
					J.classList.add("detail"), this.z(J, O.detail, z), V.appendChild(J);
					const W = document.createElement("div");
					W.classList.add("right"), q.appendChild(W);
					const { command: X } = O;
					X &&
						z.add(
							new p.Link(
								W,
								{
									label: X.title,
									title: X.tooltip,
									href: v.URI.from({
										scheme: "command",
										path: X.id,
										query: X.arguments && JSON.stringify(X.arguments),
									}).toString(),
								},
								{ hoverDelegate: P.$Wyb },
								this.o,
								this.p,
							),
						);
					const Y = new b.$eib(W, { hoverDelegate: P.$Wyb });
					z.add(Y);
					let ie;
					return (
						U
							? (ie = new s.$rj(
									"unpin",
									(0, d.localize)(7336, null),
									r.ThemeIcon.asClassName(l.$ak.pinned),
									!0,
									() => {
										this.f.delete(O.id),
											this.l.updateEntryVisibility(O.id, !1),
											this.v(),
											this.t();
									},
								))
							: (ie = new s.$rj(
									"pin",
									(0, d.localize)(7335, null),
									r.ThemeIcon.asClassName(l.$ak.pin),
									!0,
									() => {
										this.f.add(O.id),
											this.l.updateEntryVisibility(O.id, !0),
											this.v(),
											this.t();
									},
								)),
						Y.push(ie, { icon: !0, label: !1 }),
						z.add(ie),
						F
					);
				}
				static x(O) {
					switch (O) {
						case E.default.Error:
							return "$(bracket-error)";
						case E.default.Warning:
							return "$(bracket-dot)";
						default:
							return "$(bracket)";
					}
				}
				static y(O) {
					switch (O) {
						case E.default.Error:
							return "$(error)";
						case E.default.Warning:
							return "$(info)";
						default:
							return "$(check)";
					}
				}
				z(O, B, U) {
					for (const z of (0, g.$Zpb)(B).nodes)
						if (typeof z == "string") {
							const F = (0, i.$Sib)(z);
							t.$fhb(O, ...F);
						} else U.add(new p.Link(O, z, void 0, this.o, this.p));
				}
				static A(O) {
					if (O.accessibilityInfo) return O.accessibilityInfo;
					const B = typeof O.label == "string" ? O.label : O.label.value;
					return O.detail
						? { label: (0, d.localize)(7337, null, B, O.detail) }
						: { label: (0, d.localize)(7338, null, B) };
				}
				static B(O) {
					let B;
					O.severity === E.default.Warning
						? (B = "warning")
						: O.severity === E.default.Error && (B = "error");
					const U = typeof O.label == "string" ? O.label : O.label.shortValue;
					return {
						name: (0, d.localize)(7339, null, O.name),
						text: O.busy ? `${U}\xA0\xA0$(sync~spin)` : U,
						ariaLabel: L.A(O).label,
						role: O.accessibilityInfo?.role,
						tooltip:
							O.command?.tooltip ||
							new f.$cl(O.detail, { isTrusted: !0, supportThemeIcons: !0 }),
						kind: B,
						command: O.command,
					};
				}
			};
			(A = L =
				Ne(
					[
						j(0, h.$c8),
						j(1, n.$d6b),
						j(2, a.$IY),
						j(3, P.$Uyb),
						j(4, o.$7rb),
						j(5, y.$lq),
					],
					A,
				)),
				m.$Io
					.as(u.Extensions.Workbench)
					.registerWorkbenchContribution(N, c.LifecyclePhase.Restored),
				(0, S.$4X)(
					class extends S.$3X {
						constructor() {
							super({
								id: "editor.inlayHints.Reset",
								title: (0, d.localize2)(
									7340,
									"Reset Language Status Interaction Counter",
								),
								category: I.$ck.View,
								f1: !0,
							});
						}
						run(R) {
							R.get(y.$lq).remove(
								"languageStatus.interactCount",
								y.StorageScope.PROFILE,
							);
						}
					},
				);
		},
	),
		define(
			de[3634],
			he([
				1, 0, 4, 143, 15, 6, 3, 11, 166, 73, 8, 31, 23, 53, 63, 286, 604, 211,
				87, 12, 37, 25, 438, 349, 274, 34, 571, 119, 141, 94, 100, 142, 60, 32,
				43, 27, 62, 265, 109, 33, 26, 466, 41, 9, 75, 30, 81, 224, 10,
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
				J,
				W,
			) {
				"use strict";
				var X;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$GXc = void 0),
					(t = mt(t));
				let Y = class extends C.$1c {
					static {
						X = this;
					}
					static {
						this.ID = "workbench.contrib.remoteStatusIndicator";
					}
					static {
						this.b = "workbench.action.remote.showMenu";
					}
					static {
						this.c = "workbench.action.remote.close";
					}
					static {
						this.f = !b.$r;
					}
					static {
						this.g = "workbench.action.remote.extensions";
					}
					static {
						this.h = 40;
					}
					static {
						this.j = 60 * 1e3;
					}
					static {
						this.m = 10 * 1e3;
					}
					get I() {
						if (!this.H) {
							const ne = {
								...this.db.remoteExtensionTips,
								...this.db.virtualWorkspaceExtensionTips,
							};
							(this.H = Object.values(ne)
								.filter((ee) => ee.startEntry !== void 0)
								.map((ee) => ({
									id: ee.extensionId,
									installed: !1,
									friendlyName: ee.friendlyName,
									isPlatformCompatible: !1,
									dependencies: [],
									helpLink: ee.startEntry?.helpLink ?? "",
									startConnectLabel: ee.startEntry?.startConnectLabel ?? "",
									startCommand: ee.startEntry?.startCommand ?? "",
									priority: ee.startEntry?.priority ?? 10,
									supportedPlatforms: ee.supportedPlatforms,
								}))),
								this.I.sort((ee, _) => ee.priority - _.priority);
						}
						return this.H;
					}
					constructor(
						ne,
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
					) {
						super(),
							(this.N = ne),
							(this.O = ee),
							(this.P = _),
							(this.Q = te),
							(this.R = Q),
							(this.S = Z),
							(this.U = se),
							(this.W = re),
							(this.X = le),
							(this.Y = oe),
							(this.Z = ae),
							(this.$ = pe),
							(this.ab = $e),
							(this.bb = ye),
							(this.cb = ue),
							(this.db = fe),
							(this.eb = me),
							(this.fb = ve),
							(this.gb = ge),
							(this.q = this.D(
								this.R.createMenu(d.$XX.StatusBarWindowIndicatorMenu, this.Q),
							)),
							(this.r = this.D(
								this.R.createMenu(d.$XX.StatusBarRemoteIndicatorMenu, this.Q),
							)),
							(this.t = this.O.remoteAuthority),
							(this.u = void 0),
							(this.w = void 0),
							(this.y = void 0),
							(this.z = new u.$5j("remoteConnectionState", "").bindTo(this.Q)),
							(this.C = void 0),
							(this.F = void 0),
							(this.G = Object.create(null)),
							(this.H = void 0),
							(this.J = !1),
							(this.L = this.D(new E.$re())),
							(this.M = this.L.event),
							this.t
								? ((this.w = "initializing"), this.z.set(this.w))
								: this.kb(),
							this.hb(),
							this.ib(),
							this.lb(),
							this.tb();
					}
					hb() {
						const ne = t.localize2(8802, "Remote"),
							ee = this;
						this.D(
							(0, d.$4X)(
								class extends d.$3X {
									constructor() {
										super({
											id: X.b,
											category: ne,
											title: t.localize2(8803, "Show Remote Menu"),
											f1: !0,
											keybinding: {
												weight: A.KeybindingWeight.WorkbenchContrib,
												primary:
													R.KeyMod.CtrlCmd | R.KeyMod.Alt | R.KeyCode.KeyO,
											},
										}),
											(this.run = () => ee.zb());
									}
								},
							),
						),
							X.f &&
								(this.D(
									(0, d.$4X)(
										class extends d.$3X {
											constructor() {
												super({
													id: X.c,
													category: ne,
													title: t.localize2(8804, "Close Remote Connection"),
													f1: !0,
													precondition: u.$Kj.or(L.$CPb, L.$DPb),
												}),
													(this.run = () =>
														ee.Z.openWindow({
															forceReuseWindow: !0,
															remoteAuthority: null,
														}));
											}
										},
									),
								),
								this.t &&
									d.$ZX.appendMenuItem(d.$XX.MenubarFileMenu, {
										group: "6_close",
										command: { id: X.c, title: t.localize(8782, null) },
										order: 3.5,
									})),
							this.bb.isEnabled() &&
								this.D(
									(0, d.$4X)(
										class extends d.$3X {
											constructor() {
												super({
													id: X.g,
													category: ne,
													title: t.localize2(
														8805,
														"Install Remote Development Extensions",
													),
													f1: !0,
												}),
													(this.run = (_, te) =>
														_.get(D.$6Sb)
															.openPaneComposite(
																P.$LQb,
																M.ViewContainerLocation.Sidebar,
																!0,
															)
															.then((Z) => {
																Z &&
																	((Z?.getViewPaneContainer()).search(
																		"@recommended:remotes",
																	),
																	Z.focus());
															}));
											}
										},
									),
								);
					}
					ib() {
						const ne = () => {
							(this.s = void 0), this.tb();
						};
						this.D(this.q.onDidChange(ne)),
							this.D(this.r.onDidChange(ne)),
							this.D(this.P.onDidChangeFormatters(() => this.tb()));
						const ee = this.O.options?.windowIndicator;
						if (
							(ee && ee.onDidChange && this.D(ee.onDidChange(() => this.tb())),
							this.t)
						) {
							const _ = this.X.getConnection();
							_ &&
								this.D(
									_.onDidStateChange((te) => {
										switch (te.type) {
											case p.PersistentConnectionEventType.ConnectionLost:
											case p.PersistentConnectionEventType.ReconnectionRunning:
											case p.PersistentConnectionEventType.ReconnectionWait:
												this.mb("reconnecting");
												break;
											case p.PersistentConnectionEventType
												.ReconnectionPermanentFailure:
												this.mb("disconnected");
												break;
											case p.PersistentConnectionEventType.ConnectionGain:
												this.mb("connected");
												break;
										}
									}),
								);
						} else
							this.D(
								this.$.onDidChangeWorkbenchState(() => {
									this.kb(), this.tb();
								}),
							);
						b.$r &&
							this.D(
								E.Event.any(
									this.D(new B.$mib(V.$Bfb, "online")).event,
									this.D(new B.$mib(V.$Bfb, "offline")).event,
								)(() => this.pb(navigator.onLine ? "online" : "offline")),
							),
							this.D(
								this.W.onDidChangeExtensions(async (_) => {
									for (const te of _.added) {
										const Q = this.I.findIndex((Z) =>
											U.$Gn.equals(Z.id, te.identifier),
										);
										Q > -1 && (this.I[Q].installed = !0);
									}
								}),
							),
							this.D(
								this.eb.onDidUninstallExtension(async (_) => {
									const te = this.I.findIndex((Q) =>
										U.$Gn.equals(Q.id, _.identifier.id),
									);
									te > -1 && (this.I[te].installed = !1);
								}),
							);
					}
					async jb() {
						if (this.J) return;
						const ne = (0, b.$k)(b.$x);
						for (let ee = 0; ee < this.I.length; ee++) {
							const _ = this.I[ee].id,
								te = this.I[ee].supportedPlatforms,
								Q = !!(await this.eb.getInstalled()).find((Z) =>
									U.$Gn.equals(Z.identifier.id, _),
								);
							(this.I[ee].installed = Q),
								Q
									? (this.I[ee].isPlatformCompatible = !0)
									: te && !te.includes(ne)
										? (this.I[ee].isPlatformCompatible = !1)
										: (this.I[ee].isPlatformCompatible = !0);
						}
						(this.J = !0), this.L.fire(), this.tb();
					}
					kb() {
						this.u = (0, $.$E8)(this.$.getWorkspace());
					}
					async lb() {
						await this.W.whenInstalledExtensionsRegistered();
						const ne = this.t;
						ne &&
							(async () => {
								try {
									const { authority: ee } = await this.Y.resolveAuthority(ne);
									(this.y = ee.connectionToken), this.mb("connected");
								} catch {
									this.mb("disconnected");
								}
							})(),
							this.tb(),
							this.jb();
					}
					mb(ne) {
						this.w !== ne &&
							((this.w = ne),
							this.w === "reconnecting"
								? this.z.set("disconnected")
								: this.z.set(this.w),
							this.tb(),
							ne === "connected" && this.nb());
					}
					nb() {
						!this.t ||
							this.F ||
							((this.F = this.D(new w.$Yh(() => this.ob(), X.j))),
							this.F.schedule(X.m));
					}
					async ob() {
						if (this.Z.hasFocus && this.C !== "offline") {
							const ne = await i.$_m.measure(this.X);
							ne &&
								(ne.high
									? this.pb("high-latency")
									: this.C === "high-latency" && this.pb("online"));
						}
						this.F?.schedule();
					}
					pb(ne) {
						if (this.C !== ne) {
							const ee = this.C;
							(this.C = ne),
								ne === "high-latency" &&
									this.ab.warn(
										`Remote network connection appears to have high latency (${i.$_m.latency?.current?.toFixed(2)}ms last, ${i.$_m.latency?.average?.toFixed(2)}ms average)`,
									),
								this.y &&
									(ne === "online" && ee === "high-latency"
										? this.qb(this.y, "good")
										: ne === "high-latency" &&
											ee === "online" &&
											this.qb(this.y, "poor")),
								this.tb();
						}
					}
					qb(ne, ee) {
						this.cb.publicLog2("remoteConnectionHealth", {
							remoteName: (0, y.$xn)(this.t),
							reconnectionToken: ne,
							connectionHealth: ee,
						});
					}
					rb(ne) {
						return ne.match(
							/^(remote|virtualfs)_(\d\d)_(([a-z][a-z0-9+.-]*)_(.*))$/,
						)
							? !0
							: (this.G[ne] ||
									((this.G[ne] = !0),
									this.ab.warn(
										`Invalid group name used in "statusBar/remoteIndicator" menu contribution: ${ne}. Entries ignored. Expected format: 'remote_$ORDER_$REMOTENAME_$GROUPING or 'virtualfs_$ORDER_$FILESCHEME_$GROUPING.`,
									)),
								!1);
					}
					sb(ne) {
						return (
							(!this.s || ne) &&
								(this.s = this.r
									.getActions()
									.filter((ee) => this.rb(ee[0]))
									.concat(this.q.getActions())),
							this.s
						);
					}
					tb() {
						const ne = this.O.options?.windowIndicator;
						if (ne) {
							let ee = ne.label.trim();
							ee.startsWith("$(") || (ee = `$(remote) ${ee}`),
								this.ub((0, s.$qf)(ee, X.h), ne.tooltip, ne.command);
							return;
						}
						if (this.t) {
							const ee =
								this.P.getHostLabel(h.Schemas.vscodeRemote, this.t) || this.t;
							switch (this.w) {
								case "initializing":
									this.ub(
										t.localize(8783, null),
										t.localize(8784, null),
										void 0,
										!0,
									);
									break;
								case "reconnecting":
									this.ub(
										`${t.localize(8785, null, (0, s.$qf)(ee, X.h))}`,
										void 0,
										void 0,
										!0,
									);
									break;
								case "disconnected":
									this.ub(
										`$(alert) ${t.localize(8786, null, (0, s.$qf)(ee, X.h))}`,
									);
									break;
								default: {
									const _ = new k.$cl("", {
											isTrusted: !0,
											supportThemeIcons: !0,
										}),
										te = this.P.getHostTooltip(h.Schemas.vscodeRemote, this.t);
									te
										? _.appendMarkdown(te)
										: _.appendText(t.localize(8787, null, ee)),
										this.ub(`$(remote) ${(0, s.$qf)(ee, X.h)}`, _);
								}
							}
							return;
						}
						if (this.u) {
							const ee = this.P.getHostLabel(this.u.scheme, this.u.authority);
							if (ee) {
								const _ = new k.$cl("", {
										isTrusted: !0,
										supportThemeIcons: !0,
									}),
									te = this.P.getHostTooltip(this.u.scheme, this.u.authority);
								te
									? _.appendMarkdown(te)
									: _.appendText(t.localize(8788, null, ee)),
									(!b.$r || this.t) &&
										(_.appendMarkdown(`

`),
										_.appendMarkdown(
											t.localize(8789, null, `command:${P.$YQb}`),
										)),
									this.ub(`$(remote) ${(0, s.$qf)(ee, X.h)}`, _);
								return;
							}
						}
						this.ub("$(remote)", t.localize(8790, null));
					}
					ub(ne, ee, _, te) {
						const { text: Q, tooltip: Z, ariaLabel: se } = this.vb(ne, ee, te),
							re = {
								name: t.localize(8791, null),
								kind: this.C === "offline" ? "offline" : "remote",
								ariaLabel: se,
								text: Q,
								showProgress: te,
								tooltip: Z,
								command: _ ?? X.b,
							};
						this.n
							? this.n.update(re)
							: (this.n = this.N.addEntry(
									re,
									"status.host",
									m.StatusbarAlignment.LEFT,
									Number.MAX_VALUE,
								));
					}
					vb(ne, ee, _) {
						let te = ne,
							Q = ee,
							Z = (0, v.$_k)(te);
						function se() {
							return !_ && ne.startsWith("$(remote)")
								? ne.replace("$(remote)", "$(alert)")
								: ne;
						}
						switch (this.C) {
							case "offline": {
								const re = t.localize(8792, null);
								(te = se()), (Q = this.wb(Q, re)), (Z = `${Z}, ${re}`);
								break;
							}
							case "high-latency":
								(te = se()),
									(Q = this.wb(
										Q,
										t.localize(
											8793,
											null,
											i.$_m.latency?.current?.toFixed(2),
											i.$_m.latency?.average?.toFixed(2),
										),
									));
								break;
						}
						return { text: te, tooltip: Q, ariaLabel: Z };
					}
					wb(ne, ee) {
						let _;
						return (
							typeof ne == "string"
								? (_ = new k.$cl(ne, { isTrusted: !0, supportThemeIcons: !0 }))
								: (_ =
										ne ??
										new k.$cl("", { isTrusted: !0, supportThemeIcons: !0 })),
							_.value.length > 0 &&
								_.appendMarkdown(`

`),
							_.appendMarkdown(ee),
							_
						);
					}
					async xb(ne) {
						const ee = (
							await this.bb.getExtensions(
								[{ id: ne }],
								z.CancellationToken.None,
							)
						)[0];
						await this.eb.installFromGallery(ee, {
							isMachineScoped: !1,
							donotIncludePackAndDependencies: !1,
							context: { [T.$up]: !0 },
						});
					}
					async yb(ne, ee) {
						await (0, w.$7h)(
							async () => {
								const _ = await this.W.getExtension(ne);
								if (!_)
									throw Error("Failed to find installed remote extension");
								return _;
							},
							300,
							10,
						),
							this.U.executeCommand(ee),
							this.cb.publicLog2("workbenchActionExecuted", {
								id: "remoteInstallAndRun",
								detail: ne,
								from: "remote indicator",
							});
					}
					zb() {
						const ne = (Z) => {
								if (Z.item.category)
									return typeof Z.item.category == "string"
										? Z.item.category
										: Z.item.category.value;
							},
							ee = () => {
								if (this.t)
									return new RegExp(`^remote_\\d\\d_${(0, y.$xn)(this.t)}_`);
								if (this.u)
									return new RegExp(`^virtualfs_\\d\\d_${this.u.scheme}_`);
							},
							_ = () => {
								let Z = this.sb(!0);
								const se = [],
									re = ee();
								re &&
									(Z = Z.sort((pe, $e) => {
										const ye = re.test(pe[0]),
											ue = re.test($e[0]);
										return ye !== ue
											? ye
												? -1
												: 1
											: pe[0] !== "" && $e[0] === ""
												? -1
												: pe[0] === "" && $e[0] !== ""
													? 1
													: pe[0].localeCompare($e[0]);
									}));
								let le;
								for (const pe of Z) {
									let $e = !1;
									for (const ye of pe[1])
										if (ye instanceof d.$2X) {
											if (!$e) {
												const fe = ne(ye);
												fe !== le &&
													(se.push({ type: "separator", label: fe }),
													(le = fe)),
													($e = !0);
											}
											const ue =
												typeof ye.item.title == "string"
													? ye.item.title
													: ye.item.title.value;
											se.push({ type: "item", id: ye.item.id, label: ue });
										}
								}
								if (
									this.gb.getValue(
										"workbench.remoteIndicator.showExtensionRecommendations",
									) &&
									this.bb.isEnabled() &&
									this.J
								) {
									const pe = [];
									for (const $e of this.I)
										if (!$e.installed && $e.isPlatformCompatible) {
											const ye = $e.startConnectLabel,
												ue = [
													{
														iconClass: F.ThemeIcon.asClassName(x.$vSb),
														tooltip: t.localize(8794, null),
													},
												];
											pe.push({
												type: "item",
												id: $e.id,
												label: ye,
												buttons: ue,
											});
										}
									se.push({ type: "separator", label: t.localize(8795, null) }),
										se.push(...pe);
								}
								se.push({ type: "separator" });
								const ae = se.length;
								return (
									X.f &&
										(this.t
											? (se.push({
													type: "item",
													id: X.c,
													label: t.localize(8796, null),
												}),
												this.w === "disconnected" &&
													se.push({
														type: "item",
														id: I.$Zqc.ID,
														label: t.localize(8797, null),
													}))
											: this.u &&
												se.push({
													type: "item",
													id: X.c,
													label: t.localize(8798, null),
												})),
									se.length === ae && se.pop(),
									se
								);
							},
							te = new C.$Zc(),
							Q = te.add(this.S.createQuickPick({ useSeparators: !0 }));
						(Q.placeholder = t.localize(8799, null)),
							(Q.items = _()),
							(Q.sortByLabel = !1),
							(Q.canSelectMany = !1),
							te.add(
								E.Event.once(Q.onDidAccept)(async (Z) => {
									const se = Q.selectedItems;
									if (se.length === 1) {
										const re = se[0].id,
											le = this.I.find((oe) => U.$Gn.equals(oe.id, re));
										le
											? ((Q.items = []),
												(Q.busy = !0),
												(Q.placeholder = t.localize(8800, null)),
												await this.xb(le.id),
												Q.hide(),
												await this.yb(le.id, le.startCommand))
											: (this.cb.publicLog2("workbenchActionExecuted", {
													id: re,
													from: "remote indicator",
												}),
												this.U.executeCommand(re),
												Q.hide());
									}
								}),
							),
							te.add(
								E.Event.once(Q.onDidTriggerItemButton)(async (Z) => {
									const se = this.I.find((re) =>
										U.$Gn.equals(re.id, Z.item.id),
									);
									se && (await this.fb.open(q.URI.parse(se.helpLink)));
								}),
							),
							te.add(this.q.onDidChange(() => (Q.items = _()))),
							te.add(this.r.onDidChange(() => (Q.items = _()))),
							te.add(Q.onDidHide(() => te.dispose())),
							this.J ||
								((Q.busy = !0),
								this.D(
									this.M(() => {
										(Q.busy = !1), (Q.items = _());
									}),
								)),
							Q.show();
					}
				};
				(e.$GXc = Y),
					(e.$GXc =
						Y =
						X =
							Ne(
								[
									j(0, m.$d6b),
									j(1, g.$5rb),
									j(2, r.$3N),
									j(3, u.$6j),
									j(4, d.$YX),
									j(5, n.$DJ),
									j(6, a.$ek),
									j(7, c.$q2),
									j(8, i.$$m),
									j(9, o.$3l),
									j(10, f.$asb),
									j(11, l.$Vi),
									j(12, S.$ik),
									j(13, T.$Ep),
									j(14, N.$km),
									j(15, O.$Bk),
									j(16, T.$Hp),
									j(17, H.$7rb),
									j(18, W.$gj),
								],
								Y,
							)),
					G.$Io
						.as(K.$No.Configuration)
						.registerConfiguration({
							...J.$v6,
							properties: {
								"workbench.remoteIndicator.showExtensionRecommendations": {
									type: "boolean",
									markdownDescription: t.localize(8801, null),
									default: !0,
								},
							},
						});
			},
		),
		define(
			de[3635],
			he([1, 0, 3, 4, 99, 11, 39, 825, 44, 1132, 18, 166]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$N2c = void 0);
				let h = class extends t.$1c {
					static {
						this.ID = "workbench.contrib.syncScrolling";
					}
					constructor(n, g) {
						super(),
							(this.h = n),
							(this.j = g),
							(this.a = new Map()),
							(this.b = this.D(new t.$Zc())),
							(this.c = new t.$Zc()),
							(this.f = this.D(new t.$2c())),
							(this.g = !1),
							(this.q = new r.$Lpb()),
							this.y();
					}
					m() {
						this.b.add(this.h.onDidVisibleEditorsChange(() => this.r()));
					}
					n() {
						this.m(), this.r();
					}
					toggle() {
						this.g ? this.u() : this.n(), (this.g = !this.g), this.w(this.g);
					}
					r() {
						this.c.clear(), this.a.clear();
						for (const n of this.t())
							(0, m.$g1)(n) &&
								(this.a.set(n, n.getScrollPosition()),
								this.c.add(
									n.onDidChangeScroll(() =>
										this.q.runExclusivelyOrSkip(() => {
											this.s(n);
										}),
									),
								));
					}
					s(n) {
						const g = this.a.get(n);
						if (g === void 0) throw new Error("Scrolled pane not tracked");
						if (!(0, m.$g1)(n))
							throw new Error("Scrolled pane does not support scrolling");
						const p = n.getScrollPosition(),
							o = {
								scrollTop: p.scrollTop - g.scrollTop,
								scrollLeft:
									p.scrollLeft !== void 0 && g.scrollLeft !== void 0
										? p.scrollLeft - g.scrollLeft
										: void 0,
							};
						for (const f of this.t()) {
							if (f === n || !(0, m.$g1)(f)) continue;
							const b = this.a.get(f);
							if (b === void 0)
								throw new Error("Could not find initial offset for pane");
							const s = f.getScrollPosition(),
								l = {
									scrollTop: b.scrollTop + o.scrollTop,
									scrollLeft:
										b.scrollLeft !== void 0 && o.scrollLeft !== void 0
											? b.scrollLeft + o.scrollLeft
											: void 0,
								};
							(s.scrollTop === l.scrollTop && s.scrollLeft === l.scrollLeft) ||
								f.setScrollPosition(l);
						}
					}
					t() {
						const n = [];
						for (const g of this.h.visibleEditorPanes) {
							if (g instanceof d.$AVb) {
								const p = g.getPrimaryEditorPane(),
									o = g.getSecondaryEditorPane();
								p && n.push(p), o && n.push(o);
								continue;
							}
							n.push(g);
						}
						return n;
					}
					u() {
						this.c.clear(), this.b.clear(), this.a.clear();
					}
					w(n) {
						if (n) {
							if (!this.f.value) {
								const g = (0, i.localize)(9118, null),
									p = (0, i.localize)(9119, null);
								this.f.value = this.j.addEntry(
									{
										name: g,
										text: g,
										tooltip: p,
										ariaLabel: g,
										command: {
											id: "workbench.action.toggleLockedScrolling",
											title: "",
										},
										kind: "prominent",
										showInAllWindows: !0,
									},
									"status.scrollLockingEnabled",
									a.StatusbarAlignment.RIGHT,
									102,
								);
							}
						} else this.f.clear();
					}
					y() {
						const n = this;
						this.D(
							(0, E.$4X)(
								class extends E.$3X {
									constructor() {
										super({
											id: "workbench.action.toggleLockedScrolling",
											title: {
												...(0, i.localize2)(
													9123,
													"Toggle Locked Scrolling Across Editors",
												),
												mnemonicTitle: (0, i.localize)(9120, null),
											},
											category: w.$ck.View,
											f1: !0,
											metadata: { description: (0, i.localize)(9121, null) },
										});
									}
									run() {
										n.toggle();
									}
								},
							),
						),
							this.D(
								(0, E.$4X)(
									class extends E.$3X {
										constructor() {
											super({
												id: "workbench.action.holdLockedScrolling",
												title: {
													...(0, i.localize2)(
														9124,
														"Hold Locked Scrolling Across Editors",
													),
													mnemonicTitle: (0, i.localize)(9122, null),
												},
												category: w.$ck.View,
											});
										}
										run(g) {
											const p = g.get(C.$uZ);
											n.toggle();
											const o = p.enableKeybindingHoldMode(
												"workbench.action.holdLockedScrolling",
											);
											o &&
												o.finally(() => {
													n.toggle();
												});
										}
									},
								),
							);
					}
					dispose() {
						this.u(), super.dispose();
					}
				};
				(e.$N2c = h), (e.$N2c = h = Ne([j(0, u.$IY), j(1, a.$d6b)], h));
			},
		),
		