define(de[52], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.LifecyclePhase =
					e.StartupKind =
					e.ShutdownReason =
					e.WillShutdownJoinerOrder =
					e.$n6 =
						void 0),
				(e.$o6 = C),
				(e.$p6 = m),
				(e.$n6 = (0, t.$Mi)("lifecycleService"));
			var i;
			(function (r) {
				(r[(r.Default = 1)] = "Default"), (r[(r.Last = 2)] = "Last");
			})(i || (e.WillShutdownJoinerOrder = i = {}));
			var w;
			(function (r) {
				(r[(r.CLOSE = 1)] = "CLOSE"),
					(r[(r.QUIT = 2)] = "QUIT"),
					(r[(r.RELOAD = 3)] = "RELOAD"),
					(r[(r.LOAD = 4)] = "LOAD");
			})(w || (e.ShutdownReason = w = {}));
			var E;
			(function (r) {
				(r[(r.NewWindow = 1)] = "NewWindow"),
					(r[(r.ReloadedWindow = 3)] = "ReloadedWindow"),
					(r[(r.ReopenedWindow = 4)] = "ReopenedWindow");
			})(E || (e.StartupKind = E = {}));
			function C(r) {
				switch (r) {
					case E.NewWindow:
						return "NewWindow";
					case E.ReloadedWindow:
						return "ReloadedWindow";
					case E.ReopenedWindow:
						return "ReopenedWindow";
				}
			}
			var d;
			(function (r) {
				(r[(r.Starting = 1)] = "Starting"),
					(r[(r.Ready = 2)] = "Ready"),
					(r[(r.Restored = 3)] = "Restored"),
					(r[(r.Eventually = 4)] = "Eventually");
			})(d || (e.LifecyclePhase = d = {}));
			function m(r) {
				switch (r) {
					case d.Starting:
						return "Starting";
					case d.Ready:
						return "Ready";
					case d.Restored:
						return "Restored";
					case d.Eventually:
						return "Eventually";
				}
			}
		}),
		define(
			de[3410],
			he([
				1, 0, 4, 610, 3, 7, 5, 1702, 6, 96, 123, 35, 51, 66, 8, 40, 195, 52, 87,
				15, 28, 100, 75, 45, 10, 58, 2352,
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
					(e.$k3c = void 0);
				var T;
				(function (k) {
					(k[(k.HIDDEN_OR_VISIBLE = 0)] = "HIDDEN_OR_VISIBLE"),
						(k[(k.HIDDEN = 1)] = "HIDDEN"),
						(k[(k.VISIBLE = 2)] = "VISIBLE");
				})(T || (T = {}));
				let P = class extends a.$pP {
					static {
						I = this;
					}
					static {
						this.a = 450;
					}
					static {
						this.b = 3;
					}
					static {
						this.c = {
							[g.Severity.Info]: 15e3,
							[g.Severity.Warning]: 18e3,
							[g.Severity.Error]: 2e4,
						};
					}
					static {
						this.f = { interval: 800, limit: this.b };
					}
					get isVisible() {
						return !!this.j;
					}
					constructor(L, D, M, N, A, R, O, B, U, z, F) {
						super(A),
							(this.C = L),
							(this.F = D),
							(this.G = M),
							(this.H = N),
							(this.I = R),
							(this.J = O),
							(this.L = B),
							(this.M = U),
							(this.N = z),
							(this.O = F),
							(this.g = this.D(new m.$re())),
							(this.onDidChangeVisibility = this.g.event),
							(this.j = !1),
							(this.t = new Map()),
							(this.u = new Map()),
							(this.y = l.$pQb.bindTo(this.J)),
							(this.z = new b.$9h(I.f.interval)),
							this.P();
					}
					P() {
						this.D(
							this.H.onDidLayoutMainContainer((L) =>
								this.layout(E.$pgb.lift(L)),
							),
						),
							this.L.when(o.LifecyclePhase.Restored).then(() => {
								this.F.notifications.forEach((L) => this.R(L)),
									this.D(this.F.onDidChangeNotification((L) => this.Q(L)));
							}),
							this.D(
								this.F.onDidChangeFilter(({ global: L, sources: D }) => {
									if (L === g.NotificationsFilter.ERROR) this.hide();
									else if (D)
										for (const [M] of this.t)
											typeof M.sourceId == "string" &&
												D.get(M.sourceId) === g.NotificationsFilter.ERROR &&
												M.severity !== g.Severity.Error &&
												M.priority !== g.NotificationPriority.URGENT &&
												this.W(M);
								}),
							),
							this.D(
								this.N.onChangeEffectManuallyDisposed({
									deps: [
										() =>
											this.N.nonPersistentStorage.reactivePrimaryBarLocation,
									],
									onChange: () => {
										this.eb();
									},
								}),
							),
							this.D(
								this.O.onDidChangeConfiguration((L) => {
									L.affectsConfiguration(S.$XV) && this.eb();
								}),
							),
							this.eb();
					}
					Q(L) {
						switch (L.kind) {
							case i.NotificationChangeType.ADD:
								return this.R(L.item);
							case i.NotificationChangeType.REMOVE:
								return this.W(L.item);
						}
					}
					R(L) {
						if (
							this.s ||
							L.priority === g.NotificationPriority.SILENT ||
							this.z.increment() > I.f.limit
						)
							return;
						const D = new w.$Zc();
						this.u.set(L, D),
							D.add((0, E.$hgb)((0, E.getWindow)(this.C), () => this.S(L, D)));
					}
					S(L, D) {
						if (this.shouldHideUntil && this.shouldHideUntil > Date.now())
							return;
						let M = this.m;
						M ||
							((M = this.m = document.createElement("div")),
							M.classList.add("notifications-toasts"),
							this.C.appendChild(M),
							this.eb()),
							M.classList.add("visible");
						const N = document.createElement("div");
						N.classList.add("notification-toast-container");
						const A = M.firstChild;
						A ? M.insertBefore(N, A) : M.appendChild(N);
						const R = document.createElement("div");
						R.classList.add("notification-toast"), N.appendChild(R);
						const O = this.G.createInstance(d.$g3c, R, {
							verticalScrollMode: p.ScrollbarVisibility.Hidden,
							widgetAriaLabel: L.source
								? (0, t.localize)(3630, null, L.message.raw, L.source)
								: (0, t.localize)(3629, null, L.message.raw),
						});
						D.add(O);
						const B = { item: L, list: O, container: N, toast: R };
						this.t.set(L, B), D.add((0, w.$Yc)(() => this.cb(B, !1))), O.show();
						const U = this.$();
						this.ab(U.width),
							O.updateNotificationsList(0, 0, [L]),
							this.bb(U.height),
							D.add(
								L.onDidChangeExpansion(() => {
									O.updateNotificationsList(0, 1, [L]);
								}),
							),
							D.add(
								L.onDidChangeContent((z) => {
									switch (z.kind) {
										case i.NotificationViewItemContentChangeKind.ACTIONS:
											O.updateNotificationsList(0, 1, [L]);
											break;
										case i.NotificationViewItemContentChangeKind.MESSAGE:
											L.expanded && O.updateNotificationHeight(L);
											break;
									}
								}),
							),
							m.Event.once(L.onDidClose)(() => {
								this.W(L);
							}),
							this.U(L, N, O, D),
							this.updateStyles(),
							this.y.set(!0),
							R.classList.add("notification-fade-in"),
							D.add(
								(0, E.$0fb)(R, "transitionend", () => {
									R.classList.remove("notification-fade-in"),
										R.classList.add("notification-fade-in-done");
								}),
							),
							L.updateVisibility(!0),
							this.j || ((this.j = !0), this.g.fire());
					}
					U(L, D, M, N) {
						let A = !1;
						N.add((0, E.$0fb)(D, E.$$gb.MOUSE_OVER, () => (A = !0))),
							N.add((0, E.$0fb)(D, E.$$gb.MOUSE_OUT, () => (A = !1)));
						let R, O;
						const B = () => {
							R = setTimeout(() => {
								this.M.hasFocus
									? L.sticky || M.hasFocus() || A
										? B()
										: this.W(L)
									: O ||
										((O = this.M.onDidChangeFocus((U) => {
											U && B();
										})),
										N.add(O));
							}, I.c[L.severity]);
						};
						B(), N.add((0, w.$Yc)(() => clearTimeout(R)));
					}
					W(L) {
						let D = !1;
						const M = this.t.get(L);
						M &&
							((0, E.$Lgb)(M.container) &&
								(D = !(this.focusNext() || this.focusPrevious())),
							this.t.delete(L));
						const N = this.u.get(L);
						N && ((0, w.$Vc)(N), this.u.delete(L)),
							this.t.size > 0
								? this.layout(this.r)
								: (this.Y(), D && this.I.activeGroup.focus());
					}
					X() {
						this.t.clear(),
							this.u.forEach((L) => (0, w.$Vc)(L)),
							this.u.clear(),
							this.Y();
					}
					Y() {
						this.m?.classList.remove("visible"),
							this.y.set(!1),
							this.j && ((this.j = !1), this.g.fire());
					}
					hide() {
						const L = this.m ? (0, E.$Lgb)(this.m) : !1;
						this.X(), L && this.I.activeGroup.focus();
					}
					hideForMs(L) {
						(this.shouldHideUntil = Date.now() + L), this.hide();
					}
					focus() {
						const L = this.Z(T.VISIBLE);
						return L.length > 0 ? (L[0].list.focusFirst(), !0) : !1;
					}
					focusNext() {
						const L = this.Z(T.VISIBLE);
						for (let D = 0; D < L.length; D++)
							if (L[D].list.hasFocus()) {
								const N = L[D + 1];
								if (N) return N.list.focusFirst(), !0;
								break;
							}
						return !1;
					}
					focusPrevious() {
						const L = this.Z(T.VISIBLE);
						for (let D = 0; D < L.length; D++)
							if (L[D].list.hasFocus()) {
								const N = L[D - 1];
								if (N) return N.list.focusFirst(), !0;
								break;
							}
						return !1;
					}
					focusFirst() {
						const L = this.Z(T.VISIBLE)[0];
						return L ? (L.list.focusFirst(), !0) : !1;
					}
					focusLast() {
						const L = this.Z(T.VISIBLE);
						return L.length > 0 ? (L[L.length - 1].list.focusFirst(), !0) : !1;
					}
					update(L) {
						this.s !== L && ((this.s = L), this.s && this.X());
					}
					updateStyles() {
						this.t.forEach(({ toast: L }) => {
							const D = this.w(u.$3Gb);
							L.style.background = D || "";
							const M = this.w(h.$bR);
							L.style.boxShadow = M ? `0 0 8px 2px ${M}` : "";
							const N = this.w(u.$1Gb);
							L.style.border = N ? `1px solid ${N}` : "";
						});
					}
					Z(L) {
						const D = [];
						return (
							this.t.forEach((M) => {
								switch (L) {
									case T.HIDDEN_OR_VISIBLE:
										D.push(M);
										break;
									case T.HIDDEN:
										this.db(M) || D.push(M);
										break;
									case T.VISIBLE:
										this.db(M) && D.push(M);
										break;
								}
							}),
							D.reverse()
						);
					}
					layout(L) {
						this.r = L;
						const D = this.$();
						D.height && this.bb(D.height), this.ab(D.width);
					}
					$() {
						const L = I.a;
						let D = L,
							M;
						return (
							this.r &&
								((D = this.r.width),
								(D -= 2 * 8),
								(M = this.r.height),
								this.H.isVisible(r.Parts.STATUSBAR_PART, y.$Bfb) && (M -= 22),
								this.H.isVisible(r.Parts.TITLEBAR_PART, y.$Bfb) && (M -= 22),
								(M -= 2 * 12)),
							(M = typeof M == "number" ? Math.round(M * 0.618) : 0),
							new E.$pgb(Math.min(L, D), M)
						);
					}
					ab(L) {
						this.t.forEach(({ list: D }) => D.layout(L));
					}
					bb(L) {
						let D = 0;
						for (const M of this.Z(T.HIDDEN_OR_VISIBLE)) {
							(M.container.style.opacity = "0"),
								this.cb(M, !0),
								(L -= M.container.offsetHeight);
							let N = !1;
							D === I.b ? (N = !1) : L >= 0 && (N = !0),
								this.cb(M, N),
								(M.container.style.opacity = ""),
								N && D++;
						}
					}
					cb(L, D) {
						if (this.db(L) === D) return;
						const M = (0, s.$wg)(this.m);
						D ? M.appendChild(L.container) : L.container.remove(),
							L.item.updateVisibility(D);
					}
					db(L) {
						return !!L.container.parentElement;
					}
					eb() {
						const L = this.m,
							D = this.O.getValue(S.$XV);
						if (!L) return;
						(this.N.nonPersistentStorage.reactivePrimaryBarLocation === "left"
							? "right"
							: "left") === "left"
							? D
								? ((L.style.left = "3px"), (L.style.right = "unset"))
								: ((L.style.left = "unset"), (L.style.right = "3px"))
							: D
								? ((L.style.left = "unset"), (L.style.right = "3px"))
								: ((L.style.left = "3px"), (L.style.right = "unset"));
					}
				};
				(e.$k3c = P),
					(e.$k3c =
						P =
						I =
							Ne(
								[
									j(2, C.$Li),
									j(3, r.$mEb),
									j(4, a.$iP),
									j(5, c.$EY),
									j(6, n.$6j),
									j(7, o.$n6),
									j(8, f.$asb),
									j(9, $.$0zb),
									j(10, v.$gj),
								],
								P,
							));
			},
		),
		define(
			de[55],
			he([1, 0, 5, 52, 30, 15, 240, 34, 113, 59, 3, 1798]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$t6 = e.$s6 = e.$r6 = e.WorkbenchPhase = e.Extensions = void 0);
				var h;
				(function (f) {
					f.Workbench = "workbench.contributions.kind";
				})(h || (e.Extensions = h = {}));
				var c;
				(function (f) {
					(f[(f.BlockStartup = 1)] = "BlockStartup"),
						(f[(f.BlockRestore = 2)] = "BlockRestore"),
						(f[(f.AfterRestored = 3)] = "AfterRestored"),
						(f[(f.Eventually = 4)] = "Eventually");
				})(c || (e.WorkbenchPhase = c = {}));
				function n(f) {
					const b = f;
					return !!b && typeof b.editorTypeId == "string";
				}
				function g(f) {
					switch (f) {
						case i.LifecyclePhase.Restored:
							return c.AfterRestored;
						case i.LifecyclePhase.Eventually:
							return c.Eventually;
					}
				}
				function p(f) {
					switch (f) {
						case c.BlockStartup:
							return i.LifecyclePhase.Starting;
						case c.BlockRestore:
							return i.LifecyclePhase.Ready;
						case c.AfterRestored:
							return i.LifecyclePhase.Restored;
						case c.Eventually:
							return i.LifecyclePhase.Eventually;
					}
				}
				class o extends u.$1c {
					constructor() {
						super(...arguments),
							(this.m = new Map()),
							(this.n = new Map()),
							(this.q = new Map()),
							(this.r = new Map()),
							(this.s = this.D(new u.$Zc())),
							(this.t = new Map()),
							(this.u = new E.$0h()),
							(this.whenRestored = this.u.p);
					}
					static {
						this.INSTANCE = new o();
					}
					static {
						this.a = 20;
					}
					static {
						this.b = 100;
					}
					get timings() {
						return this.t;
					}
					registerWorkbenchContribution2(b, s, l) {
						const y = { id: b, ctor: s };
						this.c &&
						this.f &&
						this.g &&
						this.h &&
						this.j &&
						((typeof l == "number" && this.f.phase >= l) ||
							(typeof b == "string" &&
								n(l) &&
								this.j.didInstantiateEditorPane(l.editorTypeId)))
							? this.F(
									this.c,
									this.g,
									this.h,
									y,
									typeof l == "number" ? p(l) : this.f.phase,
								)
							: (typeof l == "number" && (0, r.$Dc)(this.m, p(l), []).push(y),
								typeof b == "string" &&
									(this.q.has(b)
										? console.error(
												`IWorkbenchContributionsRegistry#registerWorkbenchContribution(): Can't register multiple contributions with same id '${b}'`,
											)
										: this.q.set(b, y),
									n(l) && (0, r.$Dc)(this.n, l.editorTypeId, []).push(y)));
					}
					registerWorkbenchContribution(b, s) {
						this.registerWorkbenchContribution2(void 0, b, g(s));
					}
					getWorkbenchContribution(b) {
						if (this.r.has(b)) return this.r.get(b);
						const s = this.c,
							l = this.f,
							y = this.g,
							$ = this.h;
						if (!s || !l || !y || !$)
							throw new Error(
								`IWorkbenchContributionsRegistry#getContribution('${b}'): cannot be called before registry started`,
							);
						const v = this.q.get(b);
						if (!v)
							throw new Error(
								`IWorkbenchContributionsRegistry#getContribution('${b}'): contribution with that identifier is unknown.`,
							);
						l.phase < i.LifecyclePhase.Restored &&
							y.warn(
								`IWorkbenchContributionsRegistry#getContribution('${b}'): contribution instantiated before LifecyclePhase.Restored!`,
							),
							this.F(s, y, $, v, l.phase);
						const S = this.r.get(b);
						if (!S)
							throw new Error(
								`IWorkbenchContributionsRegistry#getContribution('${b}'): failed to create contribution.`,
							);
						return S;
					}
					start(b) {
						const s = (this.c = b.get(t.$Li)),
							l = (this.f = b.get(i.$n6)),
							y = (this.g = b.get(d.$ik)),
							$ = (this.h = b.get(m.$Ti)),
							v = (this.j = b.get(a.$q6));
						this.D(
							l.onDidShutdown(() => {
								this.s.clear();
							}),
						);
						for (const S of [
							i.LifecyclePhase.Starting,
							i.LifecyclePhase.Ready,
							i.LifecyclePhase.Restored,
							i.LifecyclePhase.Eventually,
						])
							this.y(s, l, y, $, S);
						for (const S of this.n.keys())
							v.didInstantiateEditorPane(S) && this.w(S, s, l, y, $);
						this.D(
							v.onWillInstantiateEditorPane((S) =>
								this.w(S.typeId, s, l, y, $),
							),
						);
					}
					w(b, s, l, y, $) {
						const v = this.n.get(b);
						if (v) {
							this.n.delete(b);
							for (const S of v) this.F(s, y, $, S, l.phase);
						}
					}
					y(b, s, l, y, $) {
						s.phase >= $
							? this.z(b, l, y, $)
							: s.when($).then(() => this.z(b, l, y, $));
					}
					async z(b, s, l, y) {
						const $ = this.m.get(y);
						if ($)
							switch ((this.m.delete(y), y)) {
								case i.LifecyclePhase.Starting:
								case i.LifecyclePhase.Ready: {
									(0, C.mark)(`code/willCreateWorkbenchContributions/${y}`);
									for (const v of $) this.F(b, s, l, v, y);
									(0, C.mark)(`code/didCreateWorkbenchContributions/${y}`);
									break;
								}
								case i.LifecyclePhase.Restored:
								case i.LifecyclePhase.Eventually: {
									y === i.LifecyclePhase.Eventually && (await this.u.p),
										this.C($, b, s, l, y);
									break;
								}
							}
					}
					C(b, s, l, y, $) {
						(0, C.mark)(`code/willCreateWorkbenchContributions/${$}`);
						let v = 0;
						const S = $ === i.LifecyclePhase.Eventually ? 3e3 : 500,
							I = (T) => {
								for (; v < b.length; ) {
									const P = b[v++];
									if ((this.F(s, l, y, P, $), T.timeRemaining() < 1)) {
										(0, E.$3h)(I, S);
										break;
									}
								}
								v === b.length &&
									((0, C.mark)(`code/didCreateWorkbenchContributions/${$}`),
									$ === i.LifecyclePhase.Restored && this.u.complete());
							};
						(0, E.$3h)(I, S);
					}
					F(b, s, l, y, $) {
						if (typeof y.id == "string" && this.r.has(y.id)) return;
						const v = Date.now();
						try {
							typeof y.id == "string" &&
								(0, C.mark)(
									`code/willCreateWorkbenchContribution/${$}/${y.id}`,
								);
							const S = b.createInstance(y.ctor);
							typeof y.id == "string" &&
								(this.r.set(y.id, S), this.q.delete(y.id)),
								(0, u.$Uc)(S) && this.s.add(S);
						} catch (S) {
							s.error(
								`Unable to create workbench contribution '${y.id ?? y.ctor.name}'.`,
								S,
							);
						} finally {
							typeof y.id == "string" &&
								(0, C.mark)(`code/didCreateWorkbenchContribution/${$}/${y.id}`);
						}
						if (typeof y.id == "string" || !l.isBuilt) {
							const S = Date.now() - v;
							if (
								(S > ($ < i.LifecyclePhase.Restored ? o.a : o.b) &&
									s.warn(
										`Creation of workbench contribution '${y.id ?? y.ctor.name}' took ${S}ms.`,
									),
								typeof y.id == "string")
							) {
								let I = this.t.get($);
								I || ((I = []), this.t.set($, I)), I.push([y.id, S]);
							}
						}
					}
				}
				(e.$r6 = o),
					(e.$s6 = o.INSTANCE.registerWorkbenchContribution2.bind(o.INSTANCE)),
					(e.$t6 = o.INSTANCE.getWorkbenchContribution.bind(o.INSTANCE)),
					w.$Io.add(h.Workbench, o.INSTANCE);
			},
		),
		define(
			de[3411],
			he([1, 0, 50, 4, 96, 49, 3, 7, 55, 12, 121, 168, 6, 149]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Btc = void 0);
				let n = class extends C.$1c {
					static {
						this.ID = "workbench.contrib.textInputActionsProvider";
					}
					constructor(p, o, f) {
						super(),
							(this.b = p),
							(this.c = o),
							(this.f = f),
							(this.a = new c.$Y(() => this.g())),
							this.h();
					}
					g() {
						return [
							new t.$rj(
								"undo",
								(0, i.localize)(2945, null),
								void 0,
								!0,
								async () => (0, d.$Ngb)().execCommand("undo"),
							),
							new t.$rj(
								"redo",
								(0, i.localize)(2946, null),
								void 0,
								!0,
								async () => (0, d.$Ngb)().execCommand("redo"),
							),
							new t.$tj(),
							new t.$rj(
								"editor.action.clipboardCutAction",
								(0, i.localize)(2947, null),
								void 0,
								!0,
								async () => (0, d.$Ngb)().execCommand("cut"),
							),
							new t.$rj(
								"editor.action.clipboardCopyAction",
								(0, i.localize)(2948, null),
								void 0,
								!0,
								async () => (0, d.$Ngb)().execCommand("copy"),
							),
							new t.$rj(
								"editor.action.clipboardPasteAction",
								(0, i.localize)(2949, null),
								void 0,
								!0,
								async (p) => {
									if (r.$p) (0, d.$Ngb)().execCommand("paste");
									else {
										const o = await this.f.readText();
										if ((0, d.$2gb)(p) || (0, d.$3gb)(p)) {
											const f = p.selectionStart || 0,
												b = p.selectionEnd || 0;
											(p.value = `${p.value.substring(0, f)}${o}${p.value.substring(b, p.value.length)}`),
												(p.selectionStart = f + o.length),
												(p.selectionEnd = p.selectionStart),
												p.dispatchEvent(
													new Event("input", { bubbles: !0, cancelable: !0 }),
												);
										}
									}
								},
							),
							new t.$tj(),
							new t.$rj(
								"editor.action.selectAll",
								(0, i.localize)(2950, null),
								void 0,
								!0,
								async () => (0, d.$Ngb)().execCommand("selectAll"),
							),
						];
					}
					h() {
						this.D(
							h.Event.runAndSubscribe(
								this.b.onDidAddContainer,
								({ container: p, disposables: o }) => {
									o.add(
										(0, d.$0fb)(p, "contextmenu", (f) =>
											this.j((0, d.getWindow)(p), f),
										),
									);
								},
								{ container: this.b.mainContainer, disposables: this.B },
							),
						);
					}
					j(p, o) {
						if (o.defaultPrevented) return;
						const f = o.target;
						if (
							!(0, d.$Ygb)(f) ||
							(f.nodeName.toLowerCase() !== "input" &&
								f.nodeName.toLowerCase() !== "textarea")
						)
							return;
						d.$ahb.stop(o, !0);
						const b = new a.$2fb(p, o);
						this.c.showContextMenu({
							getAnchor: () => b,
							getActions: () => this.a.value,
							getActionsContext: () => f,
						});
					}
				};
				(e.$Btc = n),
					(e.$Btc = n = Ne([j(0, w.$mEb), j(1, E.$Xxb), j(2, u.$Vxb)], n)),
					(0, m.$s6)(n.ID, n, m.WorkbenchPhase.BlockRestore);
			},
		),
		define(
			de[518],
			he([1, 0, 27, 8, 43, 93, 3, 55, 34, 10]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				var u;
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$D3b = n);
				function a(g, p, o) {
					const f = new Set();
					return (0, C.$Xc)(
						...g.map((b, s) =>
							(0, C.$Xc)(
								b.onDidFocus(() => {
									o?.(s, "focus"), f.size || p(!0), f.add(s);
								}),
								b.onDidBlur(() => {
									o?.(s, "blur"), f.delete(s), f.size || p(!1);
								}),
							),
						),
					);
				}
				const h = new i.$5j("navigableContainerFocused", !1);
				let c = class {
					static {
						u = this;
					}
					static {
						this.ID = "workbench.contrib.navigableContainerManager";
					}
					constructor(p, o, f) {
						(this.e = o),
							(this.f = f),
							(this.b = new Set()),
							(this.d = h.bindTo(p)),
							(u.a = this);
					}
					dispose() {
						this.b.clear(), this.d.reset(), (u.a = void 0);
					}
					get g() {
						return this.f.getValue("workbench.navigibleContainer.enableDebug");
					}
					h(p, ...o) {
						this.g && this.e.debug(p, ...o);
					}
					static register(p) {
						const o = this.a;
						return o
							? (o.b.add(p),
								o.h("NavigableContainerManager.register", p.name),
								(0, C.$Xc)(
									a(
										p.focusNotifiers,
										(f) => {
											f
												? (o.h("NavigableContainerManager.focus", p.name),
													o.d.set(!0),
													(o.c = p))
												: (o.h(
														"NavigableContainerManager.blur",
														p.name,
														o.c?.name,
													),
													o.c === p && (o.d.set(!1), (o.c = void 0)));
										},
										(f, b) => {
											o.h(
												"NavigableContainerManager.partFocusChange",
												p.name,
												f,
												b,
											);
										},
									),
									(0, C.$Yc)(() => {
										o.b.delete(p),
											o.h(
												"NavigableContainerManager.unregister",
												p.name,
												o.c?.name,
											),
											o.c === p && (o.d.set(!1), (o.c = void 0));
									}),
								))
							: C.$1c.None;
					}
					static getActive() {
						return this.a?.c;
					}
				};
				c = u = Ne([j(0, i.$6j), j(1, m.$ik), j(2, r.$gj)], c);
				function n(g) {
					return c.register(g);
				}
				(0, d.$s6)(c.ID, c, d.WorkbenchPhase.BlockStartup),
					w.$TX.registerCommandAndKeybindingRule({
						id: "widgetNavigation.focusPrevious",
						weight: w.KeybindingWeight.WorkbenchContrib,
						when: i.$Kj.and(h, i.$Kj.or(E.$nMb?.negate(), E.$iMb)),
						primary: t.KeyMod.CtrlCmd | t.KeyCode.UpArrow,
						handler: () => {
							c.getActive()?.focusPreviousWidget();
						},
					}),
					w.$TX.registerCommandAndKeybindingRule({
						id: "widgetNavigation.focusNext",
						weight: w.KeybindingWeight.WorkbenchContrib,
						when: i.$Kj.and(h, i.$Kj.or(E.$nMb?.negate(), E.$jMb)),
						primary: t.KeyMod.CtrlCmd | t.KeyCode.DownArrow,
						handler: () => {
							c.getActive()?.focusNextWidget();
						},
					});
			},
		),
		define(
			de[3412],
			he([
				1, 0, 3, 37, 4, 11, 31, 8, 102, 30, 55, 3245, 357, 286, 244, 175, 3305,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$b1c = void 0);
				const o = C.$fk.registerCommand(
						"workbench.getCodeExchangeProxyEndpoints",
						function ($, v) {
							return $.get(c.$5rb).options?.codeExchangeProxyEndpoints;
						},
					),
					f = {
						type: "object",
						additionalProperties: !1,
						properties: {
							id: { type: "string", description: (0, w.localize)(4449, null) },
							label: {
								type: "string",
								description: (0, w.localize)(4450, null),
							},
						},
					},
					b = g.$n2.registerExtensionPoint({
						extensionPoint: "authentication",
						jsonSchema: {
							description: (0, w.localize)(4451, null),
							type: "array",
							items: f,
						},
						activationEventsGenerator: ($, v) => {
							for (const S of $)
								S.id && v.push(`onAuthenticationRequest:${S.id}`);
						},
					});
				class s extends t.$1c {
					constructor() {
						super(...arguments), (this.type = "table");
					}
					shouldRender(v) {
						return !!v.contributes?.authentication;
					}
					render(v) {
						const S = v.contributes?.authentication || [];
						if (!S.length)
							return { data: { headers: [], rows: [] }, dispose: () => {} };
						const I = [
								(0, w.localize)(4452, null),
								(0, w.localize)(4453, null),
							],
							T = S.sort((P, k) => P.label.localeCompare(k.label)).map((P) => [
								P.label,
								P.id,
							]);
						return { data: { headers: I, rows: T }, dispose: () => {} };
					}
				}
				const l = r.$Io
					.as(n.Extensions.ExtensionFeaturesRegistry)
					.registerExtensionFeature({
						id: "authentication",
						label: (0, w.localize)(4454, null),
						access: { canToggle: !1 },
						renderer: new m.$Ji(s),
					});
				let y = class extends t.$1c {
					static {
						this.ID = "workbench.contrib.authentication";
					}
					constructor(v, S) {
						super(),
							(this.f = v),
							(this.g = S),
							(this.c = E.$ZX.appendMenuItem(E.$XX.AccountsContext, {
								command: {
									id: "noAuthenticationProviders",
									title: (0, w.localize)(4455, null),
									precondition: d.$Kj.false(),
								},
							})),
							this.D(o),
							this.D(l),
							v.getProviderIds().length && this.q(),
							this.m(),
							this.h(),
							this.j(),
							this.n();
					}
					h() {
						b.setHandler((v, { added: S, removed: I }) => {
							S.forEach((P) => {
								for (const k of P.value) {
									if ((0, i.$jf)(k.id)) {
										P.collector.error((0, w.localize)(4456, null));
										continue;
									}
									if ((0, i.$jf)(k.label)) {
										P.collector.error((0, w.localize)(4457, null));
										continue;
									}
									this.f.declaredProviders.some((L) => L.id === k.id)
										? P.collector.error((0, w.localize)(4458, null, k.id))
										: this.f.registerDeclaredAuthenticationProvider(k);
								}
							}),
								I.flatMap((P) => P.value).forEach((P) => {
									const k = this.f.declaredProviders.find((L) => L.id === P.id);
									k && this.f.unregisterDeclaredAuthenticationProvider(k.id);
								});
						});
					}
					j() {
						if (this.g.options?.authenticationProviders?.length)
							for (const v of this.g.options.authenticationProviders)
								this.f.registerAuthenticationProvider(v.id, v);
					}
					m() {
						this.D(
							this.f.onDidRegisterAuthenticationProvider((v) => {
								this.q();
							}),
						),
							this.D(
								this.f.onDidUnregisterAuthenticationProvider((v) => {
									this.f.getProviderIds().length ||
										(this.c = E.$ZX.appendMenuItem(E.$XX.AccountsContext, {
											command: {
												id: "noAuthenticationProviders",
												title: (0, w.localize)(4459, null),
												precondition: d.$Kj.false(),
											},
										}));
								}),
							);
					}
					n() {
						this.D((0, E.$4X)(a.$_Zc)), this.D((0, E.$4X)(p.$a1c));
					}
					q() {
						this.c?.dispose(), (this.c = void 0);
					}
				};
				(e.$b1c = y),
					(e.$b1c = y = Ne([j(0, h.$$7), j(1, c.$5rb)], y)),
					(0, u.$s6)(y.ID, y, u.WorkbenchPhase.AfterRestored);
			},
		),
		define(
			de[3413],
			he([1, 0, 29, 10, 30, 32, 55, 141, 157, 52]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let u = class {
					constructor(h, c, n) {
						(this.a = h), (this.b = c), (this.c = n), this.d().catch(t.$4);
					}
					async d() {
						const h = "coenraads.bracket-pair-colorizer-2";
						await this.b.queryLocal();
						const c = this.b.installed.find((p) => p.identifier.id === h);
						if (
							!c ||
							(c.enablementState !== m.EnablementState.EnabledGlobally &&
								c.enablementState !== m.EnablementState.EnabledWorkspace)
						)
							return;
						const g = !!this.a.getValue(
							"editor.bracketPairColorization.enabled",
						);
						this.c.publicLog2("bracketPairColorizerTwoUsage", {
							nativeColorizationEnabled: g,
						});
					}
				};
				(u = Ne([j(0, i.$gj), j(1, d.$MQb), j(2, E.$km)], u)),
					w.$Io
						.as(C.Extensions.Workbench)
						.registerWorkbenchContribution(u, r.LifecyclePhase.Restored);
			},
		),
		define(
			de[3414],
			he([1, 0, 81, 5, 30, 55, 3396, 3397, 175, 52, 3017, 3018]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				const h = m.$n2.registerExtensionPoint(C.$X1c),
					c = m.$n2.registerExtensionPoint(d.$Y1c);
				w.$Io.as(t.$No.Configuration).registerConfiguration(u.$Z1c),
					w.$Io.as(t.$No.Configuration).registerConfiguration(u.$11c);
				let n = class {
					constructor(p) {
						p.createInstance(u.$21c, h), p.createInstance(a.$31c, c);
					}
				};
				(n = Ne([j(0, i.$Li)], n)),
					w.$Io
						.as(E.Extensions.Workbench)
						.registerWorkbenchContribution(n, r.LifecyclePhase.Eventually);
			},
		),
		define(
			de[3415],
			he([1, 0, 29, 3, 65, 588, 5, 55]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let m = class extends i.$1c {
					static {
						this.ID = "workbench.contrib.editorFeaturesInstantiator";
					}
					constructor(u, a) {
						super(),
							(this.b = a),
							(this.a = !1),
							this.D(u.onWillCreateCodeEditor(() => this.c())),
							this.D(u.onWillCreateDiffEditor(() => this.c())),
							(u.listCodeEditors().length > 0 ||
								u.listDiffEditors().length > 0) &&
								this.c();
					}
					c() {
						if (this.a) return;
						this.a = !0;
						const u = (0, E.$TBb)();
						for (const a of u)
							try {
								const h = this.b.createInstance(a);
								typeof h.dispose == "function" && this.D(h);
							} catch (h) {
								(0, t.$4)(h);
							}
					}
				};
				(m = Ne([j(0, w.$dtb), j(1, C.$Li)], m)),
					(0, d.$s6)(m.ID, m, d.WorkbenchPhase.BlockRestore);
			},
		),
		define(
			de[3416],
			he([1, 0, 3, 12, 4, 11, 10, 8, 30, 55, 52]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$YXc = void 0);
				class a extends E.$3X {
					static {
						this.ID = "workbench.action.toggleMultiCursorModifier";
					}
					static {
						this.a = "editor.multiCursorModifier";
					}
					constructor() {
						super({
							id: a.ID,
							title: (0, w.localize2)(4910, "Toggle Multi-Cursor Modifier"),
							f1: !0,
						});
					}
					run(g) {
						const p = g.get(C.$gj),
							f =
								p.getValue("editor").multiCursorModifier === "ctrlCmd"
									? "alt"
									: "ctrlCmd";
						return p.updateValue(a.a, f);
					}
				}
				e.$YXc = a;
				const h = new d.$5j("multiCursorModifier", "altKey");
				let c = class extends t.$1c {
					constructor(g, p) {
						super(),
							(this.b = g),
							(this.a = h.bindTo(p)),
							this.c(),
							this.D(
								g.onDidChangeConfiguration((o) => {
									o.affectsConfiguration("editor.multiCursorModifier") &&
										this.c();
								}),
							);
					}
					c() {
						const p =
							this.b.getValue("editor").multiCursorModifier === "ctrlCmd"
								? "ctrlCmd"
								: "altKey";
						this.a.set(p);
					}
				};
				(c = Ne([j(0, C.$gj), j(1, d.$6j)], c)),
					m.$Io
						.as(r.Extensions.Workbench)
						.registerWorkbenchContribution(c, u.LifecyclePhase.Restored),
					(0, E.$4X)(a),
					E.$ZX.appendMenuItem(E.$XX.MenubarSelectionMenu, {
						group: "4_config",
						command: { id: a.ID, title: (0, w.localize)(4907, null) },
						when: h.isEqualTo("ctrlCmd"),
						order: 1,
					}),
					E.$ZX.appendMenuItem(E.$XX.MenubarSelectionMenu, {
						group: "4_config",
						command: {
							id: a.ID,
							title: i.$m
								? (0, w.localize)(4908, null)
								: (0, w.localize)(4909, null),
						},
						when: h.isEqualTo("altKey"),
						order: 1,
					});
			},
		),
		define(
			de[1026],
			he([1, 0, 7, 75, 14, 6, 27, 3, 46, 65, 38, 71, 4, 11, 8, 43, 55, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$G1b = $),
					(e.$H1b = v),
					(h = mt(h));
				const f = "transientWordWrapState",
					b = "isWordWrapMinified",
					s = "isDominatedByLongLines",
					l = new n.$5j("canToggleWordWrap", !1, !0),
					y = new n.$5j("editorWordWrap", !1, h.localize(4915, null));
				function $(M, N, A) {
					A.setTransientModelProperty(M, f, N);
				}
				function v(M, N) {
					return N.getTransientModelProperty(M, f);
				}
				const S = "editor.action.toggleWordWrap";
				class I extends m.$itb {
					constructor() {
						super({
							id: S,
							label: h.localize(4916, null),
							alias: "View: Toggle Word Wrap",
							precondition: void 0,
							kbOpts: {
								kbExpr: null,
								primary: C.KeyMod.Alt | C.KeyCode.KeyZ,
								weight: g.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(N, A) {
						const R = N.get(r.$dtb);
						if (!L(R, A)) return;
						const O = A.getModel(),
							B = v(O, R);
						let U;
						B
							? (U = null)
							: (U = {
									wordWrapOverride:
										A.getOption(u.EditorOption.wrappingInfo).wrappingColumn ===
										-1
											? "on"
											: "off",
								}),
							$(O, U, R);
						const z = T(A, R);
						if (z) {
							const F = z.getOriginalEditor(),
								x = z.getModifiedEditor(),
								H = F === A ? x : F;
							L(R, H) && ($(H.getModel(), U, R), z.updateOptions({}));
						}
					}
				}
				function T(M, N) {
					if (!M.getOption(u.EditorOption.inDiffEditor)) return null;
					for (const A of N.listDiffEditors()) {
						const R = A.getOriginalEditor(),
							O = A.getModifiedEditor();
						if (R === M || O === M) return A;
					}
					return null;
				}
				let P = class extends d.$1c {
					static {
						this.ID = "editor.contrib.toggleWordWrapController";
					}
					constructor(N, A, R) {
						super(), (this.a = N), (this.b = A), (this.c = R);
						const B = this.a.getOptions().get(u.EditorOption.wrappingInfo),
							U = this.b.createKey(b, B.isWordWrapMinified),
							z = this.b.createKey(s, B.isDominatedByLongLines);
						let F = !1;
						this.D(
							N.onDidChangeConfiguration((H) => {
								if (!H.hasChanged(u.EditorOption.wrappingInfo)) return;
								const V = this.a.getOptions().get(u.EditorOption.wrappingInfo);
								U.set(V.isWordWrapMinified),
									z.set(V.isDominatedByLongLines),
									F || x();
							}),
						),
							this.D(
								N.onDidChangeModel((H) => {
									x();
								}),
							),
							this.D(
								R.onDidChangeTransientModelProperty(() => {
									x();
								}),
							);
						const x = () => {
							if (!L(this.c, this.a)) return;
							const H = v(this.a.getModel(), this.c);
							try {
								(F = !0), this.f(H);
							} finally {
								F = !1;
							}
						};
					}
					f(N) {
						const A = N ? N.wordWrapOverride : "inherit";
						this.a.updateOptions({ wordWrapOverride2: A });
					}
				};
				P = Ne([j(1, n.$6j), j(2, r.$dtb)], P);
				let k = class extends d.$1c {
					static {
						this.ID = "diffeditor.contrib.toggleWordWrapController";
					}
					constructor(N, A) {
						super(),
							(this.a = N),
							(this.b = A),
							this.D(
								this.a.onDidChangeModel(() => {
									this.c();
								}),
							);
					}
					c() {
						const N = this.a.getOriginalEditor(),
							A = this.a.getModifiedEditor();
						if (!N.hasModel() || !A.hasModel()) return;
						const R = v(N.getModel(), this.b),
							O = v(A.getModel(), this.b);
						R &&
							!O &&
							L(this.b, N) &&
							($(A.getModel(), R, this.b), this.a.updateOptions({})),
							!R &&
								O &&
								L(this.b, A) &&
								($(N.getModel(), O, this.b), this.a.updateOptions({}));
					}
				};
				k = Ne([j(1, r.$dtb)], k);
				function L(M, N) {
					if (!N || N.isSimpleWidget || !N.getModel()) return !1;
					if (N.getOption(u.EditorOption.inDiffEditor)) {
						for (const R of M.listDiffEditors())
							if (R.getOriginalEditor() === N && !R.renderSideBySide) return !1;
					}
					return !0;
				}
				let D = class extends d.$1c {
					static {
						this.ID = "workbench.contrib.editorWordWrapContextKeyTracker";
					}
					constructor(N, A, R) {
						super(),
							(this.g = N),
							(this.h = A),
							(this.j = R),
							this.D(
								E.Event.runAndSubscribe(
									t.onDidRegisterWindow,
									({ window: O, disposables: B }) => {
										B.add((0, t.$0fb)(O, "focus", () => this.m(), !0)),
											B.add((0, t.$0fb)(O, "blur", () => this.m(), !0));
									},
									{ window: i.$Bfb, disposables: this.B },
								),
							),
							this.D(this.g.onDidActiveEditorChange(() => this.m())),
							(this.a = l.bindTo(this.j)),
							(this.b = y.bindTo(this.j)),
							(this.c = null),
							(this.f = new d.$Zc()),
							this.m();
					}
					m() {
						const N =
							this.h.getFocusedCodeEditor() || this.h.getActiveCodeEditor();
						this.c !== N &&
							(this.f.clear(),
							(this.c = N),
							N &&
								(this.f.add(N.onDidChangeModel(() => this.n())),
								this.f.add(
									N.onDidChangeConfiguration((A) => {
										A.hasChanged(u.EditorOption.wrappingInfo) && this.n();
									}),
								),
								this.n()));
					}
					n() {
						if (L(this.h, this.c)) {
							const N = this.c.getOption(u.EditorOption.wrappingInfo);
							this.q(!0, N.wrappingColumn !== -1);
						} else return this.q(!1, !1);
					}
					q(N, A) {
						this.a.set(N), this.b.set(A);
					}
				};
				(D = Ne([j(0, o.$IY), j(1, r.$dtb), j(2, n.$6j)], D)),
					(0, p.$s6)(D.ID, D, p.WorkbenchPhase.AfterRestored),
					(0, m.$qtb)(P.ID, P, m.EditorContributionInstantiation.Eager),
					(0, m.$rtb)(k.ID, k),
					(0, m.$ntb)(I),
					c.$ZX.appendMenuItem(c.$XX.EditorTitle, {
						command: {
							id: S,
							title: h.localize(4917, null),
							icon: w.$ak.wordWrap,
						},
						group: "navigation",
						order: 1,
						when: n.$Kj.and(n.$Kj.has(s), n.$Kj.has(b)),
					}),
					c.$ZX.appendMenuItem(c.$XX.EditorTitle, {
						command: {
							id: S,
							title: h.localize(4918, null),
							icon: w.$ak.wordWrap,
						},
						group: "navigation",
						order: 1,
						when: n.$Kj.and(
							a.EditorContextKeys.inDiffEditor.negate(),
							n.$Kj.has(s),
							n.$Kj.not(b),
						),
					}),
					c.$ZX.appendMenuItem(c.$XX.MenubarViewMenu, {
						command: {
							id: S,
							title: h.localize(4919, null),
							toggled: y,
							precondition: l,
						},
						order: 1,
						group: "5_editor",
					});
			},
		),
		define(
			de[3417],
			he([1, 0, 3, 600, 110, 30, 55, 52]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let m = class extends t.$1c {
					constructor(u) {
						super(),
							this.D(
								u.onDidChangeDisplay(() => {
									i.$osb.clearAllFontInfos();
								}),
							);
					}
				};
				(m = Ne([j(0, w.$y7c)], m)),
					E.$Io
						.as(C.Extensions.Workbench)
						.registerWorkbenchContribution(m, d.LifecyclePhase.Eventually);
			},
		),
		define(
			de[3418],
			he([
				1, 0, 4, 15, 3, 12, 46, 38, 17, 98, 64, 121, 504, 55, 10, 71, 75, 6, 7,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Vfd = void 0),
					(t = mt(t)),
					(E = mt(E));
				let s = class extends w.$1c {
					static {
						b = this;
					}
					static {
						this.a = 65536;
					}
					constructor(v, S) {
						if ((super(), E.$n)) {
							let I = v.getOption(d.EditorOption.selectionClipboard);
							this.D(
								v.onDidChangeConfiguration((P) => {
									P.hasChanged(d.EditorOption.selectionClipboard) &&
										(I = v.getOption(d.EditorOption.selectionClipboard));
								}),
							);
							const T = this.D(
								new i.$Yh(() => {
									if (!v.hasModel()) return;
									const P = v.getModel();
									let k = v.getSelections();
									(k = k.slice(0)), k.sort(m.$iL.compareRangesUsingStarts);
									let L = 0;
									for (const N of k) {
										if (N.isEmpty()) return;
										L += P.getValueLengthInRange(N);
									}
									if (L > b.a) return;
									const D = [];
									for (const N of k)
										D.push(
											P.getValueInRange(N, u.EndOfLinePreference.TextDefined),
										);
									const M = D.join(P.getEOL());
									S.writeText(M, "selection");
								}, 100),
							);
							this.D(
								v.onDidChangeCursorSelection((P) => {
									I && P.source !== "restoreState" && T.schedule();
								}),
							);
						}
					}
					dispose() {
						super.dispose();
					}
				};
				(e.$Vfd = s), (e.$Vfd = s = b = Ne([j(1, a.$Vxb)], s));
				let l = class extends w.$1c {
					static {
						this.ID = "workbench.contrib.linuxSelectionClipboardPastePreventer";
					}
					constructor(v) {
						super(),
							this.D(
								o.Event.runAndSubscribe(
									f.onDidRegisterWindow,
									({ window: S, disposables: I }) => {
										I.add(
											(0, f.$0fb)(S.document, "mouseup", (T) => {
												T.button === 1 &&
													(v.getValue("editor").selectionClipboard ||
														T.preventDefault());
											}),
										);
									},
									{ window: p.$Bfb, disposables: this.B },
								),
							);
					}
				};
				l = Ne([j(0, n.$gj)], l);
				class y extends C.$itb {
					constructor() {
						super({
							id: "editor.action.selectionClipboardPaste",
							label: t.localize(4983, null),
							alias: "Paste Selection Clipboard",
							precondition: g.EditorContextKeys.writable,
						});
					}
					async run(v, S, I) {
						const P = await v.get(a.$Vxb).readText("selection");
						S.trigger("keyboard", r.Handler.Paste, {
							text: P,
							pasteOnNewLine: !1,
							multicursorText: null,
						});
					}
				}
				(0, C.$qtb)(h.$aYb, s, C.EditorContributionInstantiation.Eager),
					E.$n &&
						((0, c.$s6)(l.ID, l, c.WorkbenchPhase.BlockRestore),
						(0, C.$ntb)(y));
			},
		),
		define(
			de[3419],
			he([1, 0, 52, 30, 55, 65, 110, 3]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let m = class extends d.$1c {
					constructor(u, a) {
						super(),
							this.D(
								a.onDidResumeOS(() => {
									u.listCodeEditors().forEach((h) => h.render(!0));
								}),
							);
					}
				};
				(m = Ne([j(0, E.$dtb), j(1, C.$y7c)], m)),
					i.$Io
						.as(w.Extensions.Workbench)
						.registerWorkbenchContribution(m, t.LifecyclePhase.Eventually);
			},
		),
		define(
			de[3420],
			he([1, 0, 55, 30, 5, 52, 151, 3307]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jgd = void 0);
				let m = class {
					constructor(u, a) {
						a.args["export-default-configuration"] && u.createInstance(d.$igd);
					}
				};
				(e.$jgd = m),
					(e.$jgd = m = Ne([j(0, w.$Li), j(1, C.$ucd)], m)),
					i.$Io
						.as(t.Extensions.Workbench)
						.registerWorkbenchContribution(m, E.LifecyclePhase.Restored);
			},
		),
		define(
			de[3421],
			he([1, 0, 3, 49, 180, 30, 55, 52]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let m = class extends t.$1c {
					constructor(u, a) {
						super();
						const h = (c) =>
							u.activeContainer.classList.toggle("context-menu-visible", c);
						this.D(a.onDidShowContextMenu(() => h(!0))),
							this.D(a.onDidHideContextMenu(() => h(!1)));
					}
				};
				(m = Ne([j(0, w.$jEb), j(1, i.$Xxb)], m)),
					E.$Io
						.as(C.Extensions.Workbench)
						.registerWorkbenchContribution(m, d.LifecyclePhase.Eventually);
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3422],
		he([
			1, 0, 15, 6, 3, 111, 37, 56, 61, 4, 11, 31, 10, 8, 57, 5, 250, 63, 30,
			3049, 112, 3280, 1812, 699, 419, 261, 18, 53, 52,
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
				(e.$TQc = void 0),
				(E = xi(E)),
				(C = mt(C)),
				(r = mt(r));
			const k = f.$Io.as(p.$Jo.JSONContribution);
			let L = class extends w.$1c {
				constructor(M, N, A, R, O, B, U, z, F, x, H, q, V) {
					super(),
						(this.y = N),
						(this.z = A),
						(this.C = R),
						(this.F = O),
						(this.G = B),
						(this.H = U),
						(this.I = z),
						(this.J = F),
						(this.L = x),
						(this.M = H),
						(this.N = q),
						(this.O = V),
						(this.g = new Map()),
						(this.m = new i.$re()),
						(this.n = new i.$re()),
						(this.q = []),
						(this.r = new Set()),
						(this.t = []),
						(this.w = new Set()),
						(this.f = []),
						(this.b = []),
						this.P(),
						this.I.bufferChangeEvents(() => {
							(this.h = s.$y5.bindTo(z)), (this.j = s.$z5.bindTo(z));
						}),
						this.D(
							this.I.onDidChangeContext((K) => {
								K.affectsSome(this.r) &&
									(this.h.set(this.hasEnabledDebuggers()), this.R());
							}),
						),
						this.D(
							this.onDidDebuggersExtPointRead(() => {
								this.j.set(this.b.length > 0);
							}),
						);
					const G = this.D(new t.$Yh(() => this.Q(), 5e3));
					this.D(
						i.Event.any(
							q.onDidChangeTaskConfig,
							q.onDidChangeTaskProviders,
						)(() => {
							G.cancel(), G.schedule();
						}),
					),
						this.M.when(P.LifecyclePhase.Eventually).then(() =>
							this.j.set(this.b.length > 0),
						),
						this.D(
							M.onDidNewSession((K) => {
								this.w.add(K.configuration.type);
							}),
						),
						G.schedule();
				}
				P() {
					y.$PQc.setHandler((M, N) => {
						N.added.forEach((A) => {
							A.value.forEach((R) => {
								if (
									((!R.type || typeof R.type != "string") &&
										A.collector.error(r.localize(5405, null)),
									R.type !== "*")
								) {
									const O = this.getDebugger(R.type);
									if (O) O.merge(R, A.description);
									else {
										const B = this.F.createInstance(
											l.$NQc,
											this,
											R,
											A.description,
										);
										B.when?.keys().forEach((U) => this.r.add(U)),
											this.b.push(B);
									}
								}
							});
						}),
							M.forEach((A) => {
								A.value.forEach((R) => {
									R.type === "*" &&
										this.b.forEach((O) => O.merge(R, A.description));
								});
							}),
							N.removed.forEach((A) => {
								const R = A.value.map((O) => O.type);
								this.b = this.b.filter((O) => R.indexOf(O.type) === -1);
							}),
							this.R(),
							this.n.fire();
					}),
						y.$QQc.setHandler((M) => {
							this.q = M.flatMap((N) =>
								N.value.map((A) => this.F.createInstance(b.$LQc, A)),
							);
						});
				}
				Q() {
					this.N.getKnownTasks().then((M) => {
						(this.t = M.map((N) => N._label)), this.R();
					});
				}
				R() {
					const M = y.$SQc.properties.configurations.items,
						N = $.$$3.getJsonSchema(),
						A = {
							common: {
								properties: {
									name: {
										type: "string",
										description: r.localize(5406, null),
										default: "Launch",
									},
									debugServer: {
										type: "number",
										description: r.localize(5407, null),
										default: 4711,
									},
									preLaunchTask: {
										anyOf: [N, { type: ["string"] }],
										default: "",
										defaultSnippets: [{ body: { task: "", type: "" } }],
										description: r.localize(5408, null),
										examples: this.t,
									},
									postDebugTask: {
										anyOf: [N, { type: ["string"] }],
										default: "",
										defaultSnippets: [{ body: { task: "", type: "" } }],
										description: r.localize(5409, null),
										examples: this.t,
									},
									presentation: y.$RQc,
									internalConsoleOptions: s.$35,
									suppressMultipleSessionWarning: {
										type: "boolean",
										description: r.localize(5410, null),
										default: !0,
									},
								},
							},
						};
					(y.$SQc.definitions = A),
						(M.oneOf = []),
						(M.defaultSnippets = []),
						this.b.forEach((R) => {
							const O = R.getSchemaAttributes(A);
							O && M.oneOf && M.oneOf.push(...O);
							const B = R.configurationSnippets;
							B && M.defaultSnippets && M.defaultSnippets.push(...B);
						}),
						k.registerSchema(S.$EZ, y.$SQc);
				}
				registerDebugAdapterFactory(M, N) {
					return (
						M.forEach((A) => this.g.set(A, N)),
						this.h.set(this.hasEnabledDebuggers()),
						this.m.fire(),
						{
							dispose: () => {
								M.forEach((A) => this.g.delete(A));
							},
						}
					);
				}
				hasEnabledDebuggers() {
					for (const [M] of this.g) {
						const N = this.getDebugger(M);
						if (N && N.enabled) return !0;
					}
					return !1;
				}
				createDebugAdapter(M) {
					const N = this.g.get(M.configuration.type);
					if (N) return N.createDebugAdapter(M);
				}
				substituteVariables(M, N, A) {
					const R = this.g.get(M);
					return R ? R.substituteVariables(N, A) : Promise.resolve(A);
				}
				runInTerminal(M, N, A) {
					const R = this.g.get(M);
					return R ? R.runInTerminal(N, A) : Promise.resolve(void 0);
				}
				registerDebugAdapterDescriptorFactory(M) {
					return (
						this.f.push(M),
						{
							dispose: () => {
								this.unregisterDebugAdapterDescriptorFactory(M);
							},
						}
					);
				}
				unregisterDebugAdapterDescriptorFactory(M) {
					const N = this.f.indexOf(M);
					N >= 0 && this.f.splice(N, 1);
				}
				getDebugAdapterDescriptor(M) {
					const N = M.configuration,
						A = this.f.filter(
							(R) => R.type === N.type && R.createDebugAdapterDescriptor,
						);
					return A.length === 1
						? A[0].createDebugAdapterDescriptor(M)
						: Promise.resolve(void 0);
				}
				getDebuggerLabel(M) {
					const N = this.getDebugger(M);
					if (N) return N.label;
				}
				get onDidRegisterDebugger() {
					return this.m.event;
				}
				get onDidDebuggersExtPointRead() {
					return this.n.event;
				}
				canSetBreakpointsIn(M) {
					const N = M.getLanguageId();
					return !N || N === "jsonc" || N === "log"
						? !1
						: this.z.getValue("debug").allowBreakpointsEverywhere
							? !0
							: this.q.some((A) => A.language === N && A.enabled);
				}
				getDebugger(M) {
					return this.b.find((N) => C.$Mf(N.type, M));
				}
				getEnabledDebugger(M) {
					const N = this.getDebugger(M);
					return N && N.enabled ? N : void 0;
				}
				someDebuggerInterestedInLanguage(M) {
					return !!this.b
						.filter((N) => N.enabled)
						.find((N) => N.interestedInLanguage(M));
				}
				async guessDebugger(M) {
					const N = this.y.activeTextEditorControl;
					let A = [],
						R = null,
						O = null;
					if ((0, d.$0sb)(N)) {
						O = N.getModel();
						const H = O ? O.getLanguageId() : void 0;
						H && (R = this.J.getLanguageName(H));
						const q = this.b
							.filter((V) => V.enabled)
							.filter((V) => H && V.interestedInLanguage(H));
						if (q.length === 1) return q[0];
						q.length > 1 && (A = q);
					}
					if (
						((!R || M || (O && this.canSetBreakpointsIn(O))) &&
							A.length === 0 &&
							(await this.activateDebuggers("onDebugInitialConfigurations"),
							(A = this.b
								.filter((H) => H.enabled)
								.filter(
									(H) =>
										H.hasInitialConfiguration() ||
										H.hasDynamicConfigurationProviders() ||
										H.hasConfigurationProvider(),
								))),
						A.length === 0 && R)
					) {
						R.indexOf(" ") >= 0 && (R = `'${R}'`);
						const { confirmed: H } = await this.L.confirm({
							type: E.default.Warning,
							message: r.localize(5411, null, R),
							primaryButton: r.localize(5412, null, R),
						});
						H &&
							(await this.G.executeCommand(
								"debug.installAdditionalDebuggers",
								R,
							));
						return;
					}
					this.S(),
						A.sort((H, q) => H.label.localeCompare(q.label)),
						(A = A.filter((H) => !H.isHiddenFromDropdown));
					const B = [],
						U = [];
					A.forEach((H) => {
						const q = H.getMainExtensionDescriptor();
						(q.id && this.u?.has(q.id)) || this.w.has(H.type)
							? B.push(H)
							: U.push(H);
					});
					const z = [];
					B.length > 0 &&
						z.push(
							{ type: "separator", label: r.localize(5413, null) },
							...B.map((H) => ({ label: H.label, debugger: H })),
						),
						U.length > 0 &&
							(z.length > 0 && z.push({ type: "separator", label: "" }),
							z.push(...U.map((H) => ({ label: H.label, debugger: H })))),
						z.push(
							{ type: "separator", label: "" },
							{ label: R ? r.localize(5414, null, R) : r.localize(5415, null) },
						);
					const F = this.O.getMenuActions(
						u.$XX.DebugCreateConfiguration,
						this.I,
					);
					for (const [, H] of F) for (const q of H) z.push(q);
					const x = r.localize(5416, null);
					return this.C.pick(z, { activeItem: z[0], placeHolder: x }).then(
						async (H) => {
							if (H && "debugger" in H && H.debugger) return H.debugger;
							if (H instanceof u.$2X) {
								H.run();
								return;
							}
							H && this.G.executeCommand("debug.installAdditionalDebuggers", R);
						},
					);
				}
				S() {
					if (!this.u) {
						this.u = new Set();
						const M = this.H.getExtensionsStatus();
						for (const N in M) M[N].activationTimes && this.u.add(N);
					}
				}
				async activateDebuggers(M, N) {
					this.S();
					const A = [
						this.H.activateByEvent(M),
						this.H.activateByEvent("onDebug"),
					];
					N && A.push(this.H.activateByEvent(`${M}:${N}`)),
						await Promise.all(A);
				}
			};
			(e.$TQc = L),
				(e.$TQc = L =
					Ne(
						[
							j(1, I.$IY),
							j(2, h.$gj),
							j(3, o.$DJ),
							j(4, g.$Li),
							j(5, a.$ek),
							j(6, T.$q2),
							j(7, c.$6j),
							j(8, m.$nM),
							j(9, n.$GO),
							j(10, P.$n6),
							j(11, v.$Zpc),
							j(12, u.$YX),
						],
						L,
					));
		},
	),
		define(
			de[3423],
			he([1, 0, 4, 10, 57, 112, 52]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kRc = void 0),
					(t = mt(t));
				let d = class {
					constructor(r, u, a, h) {
						(this.b = u),
							(this.c = a),
							(this.d = h),
							(this.a = r.onBeforeShutdown(async (c) =>
								c.veto(this.f(c.reason), "veto.debug"),
							));
					}
					f(r) {
						const u = this.b
							.getModel()
							.getSessions()
							.filter((h) => h.parentSession === void 0);
						return u.length === 0 ||
							this.c.getValue("debug").confirmOnExit === "never"
							? !1
							: this.g(u.length);
					}
					dispose() {
						return this.a.dispose();
					}
					async g(r) {
						let u;
						return (
							r === 1
								? (u = t.localize(5847, null))
								: (u = t.localize(5848, null)),
							!(
								await this.d.confirm({
									message: u,
									type: "warning",
									primaryButton: t.localize(5849, null),
								})
							).confirmed
						);
					}
				};
				(e.$kRc = d),
					(e.$kRc = d =
						Ne([j(0, C.$n6), j(1, E.$75), j(2, i.$gj), j(3, w.$GO)], d));
			},
		),
		define(
			de[3424],
			he([1, 0, 50, 29, 28, 4, 10, 40, 41, 30, 21, 55, 141, 157, 52]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let g = class {
					constructor(o, f, b, s, l) {
						(this.a = o),
							(this.b = f),
							(this.c = b),
							(this.f = s),
							(this.g = l),
							(this.i = "deprecatedExtensionMigrator.state"),
							this.h().catch(i.$4);
					}
					async h() {
						const o = "coenraads.bracket-pair-colorizer";
						await this.b.queryLocal();
						const f = this.b.installed.find(($) => $.identifier.id === o);
						if (
							!f ||
							(f.enablementState !== c.EnablementState.EnabledGlobally &&
								f.enablementState !== c.EnablementState.EnabledWorkspace)
						)
							return;
						const b = await this.j();
						if (b.disablementLog.some(($) => $.extensionId === o)) return;
						b.disablementLog.push({
							extensionId: o,
							disablementDateTime: new Date().getTime(),
						}),
							await this.k(b),
							await this.b.setEnablement(f, c.EnablementState.DisabledGlobally);
						const l = "editor.bracketPairColorization.enabled",
							y = !!this.a.inspect(l).user;
						this.f.notify({
							message: (0, E.localize)(5910, null),
							severity: d.Severity.Info,
							actions: {
								primary: [
									new t.$rj(
										"",
										(0, E.localize)(5911, null),
										void 0,
										void 0,
										() => {
											this.b.uninstall(f);
										},
									),
								],
								secondary: [
									y
										? void 0
										: new t.$rj(
												"",
												(0, E.localize)(5912, null),
												void 0,
												void 0,
												() => {
													this.a.updateValue(l, !0, C.ConfigurationTarget.USER);
												},
											),
									new t.$rj(
										"",
										(0, E.localize)(5913, null),
										void 0,
										void 0,
										() => {
											this.g.open(
												"https://github.com/microsoft/vscode/issues/155179",
											);
										},
									),
								].filter(w.$tg),
							},
						});
					}
					async j() {
						const o = await this.c.get(this.i, u.StorageScope.APPLICATION, "");
						return o === "" ? { disablementLog: [] } : JSON.parse(o);
					}
					async k(o) {
						const f = JSON.stringify(o);
						await this.c.store(
							this.i,
							f,
							u.StorageScope.APPLICATION,
							u.StorageTarget.USER,
						);
					}
				};
				(g = Ne(
					[j(0, C.$gj), j(1, h.$MQb), j(2, u.$lq), j(3, d.$4N), j(4, m.$7rb)],
					g,
				)),
					r.$Io
						.as(a.Extensions.Workbench)
						.registerWorkbenchContribution(g, n.LifecyclePhase.Restored);
			},
		),
		define(
			de[3425],
			he([1, 0, 12, 3426, 113, 22, 30, 21, 55, 423, 52]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let a = class {
					constructor(c, n, g, p) {
						(this.a = c), (this.b = n), (this.c = g), (this.d = p), this.e();
					}
					async e() {
						if (
							!(
								!t.$n ||
								this.d.getBoolean(
									"encryption.migratedToGnomeLibsecret",
									d.StorageScope.APPLICATION,
									!1,
								)
							)
						)
							try {
								const c = await this.c.readFile(this.b.argvResource),
									n = (0, i.parse)(c.value.toString());
								(n["password-store"] === "gnome" ||
									n["password-store"] === "gnome-keyring") &&
									this.a.write(
										this.b.argvResource,
										[{ path: ["password-store"], value: "gnome-libsecret" }],
										!0,
									),
									this.d.store(
										"encryption.migratedToGnomeLibsecret",
										!0,
										d.StorageScope.APPLICATION,
										d.StorageTarget.USER,
									);
							} catch (c) {
								console.error(c);
							}
					}
				};
				(a = Ne([j(0, r.$$Qb), j(1, w.$Ti), j(2, E.$ll), j(3, d.$lq)], a)),
					C.$Io
						.as(m.Extensions.Workbench)
						.registerWorkbenchContribution(a, u.LifecyclePhase.Eventually);
			},
		),
		define(
			de[1829],
			he([1, 0, 4, 6, 29, 3, 119, 157, 314, 52, 5, 154, 40]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$NGc = void 0),
					(e.$OGc = g);
				let c = class extends E.$1c {
					constructor(f, b, s, l, y) {
						super(),
							(this.a = f),
							(this.b = b),
							(this.c = s),
							(this.f = y),
							this.D(l.onDidShutdown(() => this.dispose())),
							this.D(
								f.invokeFunction(n)(($) => {
									Promise.all($.map((v) => this.g(v))).then(void 0, w.$4);
								}),
							);
					}
					g(f) {
						return this.a.invokeFunction(g).then((b) => {
							const s = b.filter((y) => p(this.c, y)),
								l = s.find((y) => (0, a.$7p)(y.identifier, f));
							if (l && l.globallyEnabled) {
								const y = s.filter(
									($) => !(0, a.$7p)($.identifier, f) && $.globallyEnabled,
								);
								if (y.length) return this.h(l, y);
							}
						});
					}
					h(f, b) {
						const s = (l) => {
							l &&
								this.b.setEnablement(
									b.map((y) => y.local),
									d.EnablementState.DisabledGlobally,
								);
						};
						this.f.prompt(
							h.Severity.Info,
							(0, t.localize)(
								6592,
								null,
								b.map((l) => `'${l.local.manifest.displayName}'`).join(", "),
							),
							[
								{ label: (0, t.localize)(6593, null), run: () => s(!0) },
								{ label: (0, t.localize)(6594, null), run: () => s(!1) },
							],
						);
					}
				};
				(e.$NGc = c),
					(e.$NGc = c =
						Ne(
							[
								j(0, u.$Li),
								j(1, d.$IQb),
								j(2, m.$9Qb),
								j(3, r.$n6),
								j(4, h.$4N),
							],
							c,
						));
				function n(o) {
					const f = o.get(C.$Hp),
						b = o.get(d.$IQb),
						s = i.Event.chain(f.onDidInstallExtensions, (l) =>
							l
								.filter((y) =>
									y.some(
										({ operation: $ }) => $ === C.InstallOperation.Install,
									),
								)
								.map((y) => y.map(({ identifier: $ }) => $)),
						);
					return i.Event.debounce(
						i.Event.any(
							i.Event.any(
								s,
								i.Event.map(f.onDidUninstallExtension, (l) => [l.identifier]),
							),
							i.Event.map(b.onEnablementChanged, (l) =>
								l.map((y) => y.identifier),
							),
						),
						(l, y) => {
							l = l || [];
							for (const $ of y) l.some((v) => !(0, a.$7p)(v, $)) && l.push($);
							return l;
						},
					);
				}
				async function g(o) {
					const f = o.get(C.$Hp),
						b = o.get(d.$IQb);
					return (await f.getInstalled()).map((l) => ({
						identifier: l.identifier,
						local: l,
						globallyEnabled: b.isEnabled(l),
					}));
				}
				function p(o, f) {
					const b = f.local.manifest.categories;
					return (
						(b && b.indexOf("Keymaps") !== -1) ||
						o
							.getKeymapRecommendations()
							.some((s) => (0, a.$7p)({ id: s }, f.local.identifier))
					);
				}
			},
		),
		define(
			de[3427],
			he([
				1, 0, 4, 54, 1612, 11, 27, 245, 43, 23, 81, 30, 55, 2734, 10, 237, 211,
				52,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ExternalTerminalContribution = void 0),
					(t = mt(t)),
					(i = mt(i));
				const f = "workbench.action.terminal.openNativeConsole";
				m.$TX.registerCommandAndKeybindingRule({
					id: f,
					primary: C.KeyMod.CtrlCmd | C.KeyMod.Shift | C.KeyCode.KeyC,
					when: g.TerminalContextKeys.notFocus,
					weight: m.KeybindingWeight.WorkbenchContrib,
					handler: async (l) => {
						const y = l.get(d.$Feb),
							$ = l.get(c.IExternalTerminalService),
							v = l.get(n.$gj),
							S = l.get(p.$3l),
							I = y.getLastActiveWorkspaceRoot(),
							T = v.getValue("terminal.external");
						if (I?.scheme === r.Schemas.file) {
							$.openTerminal(T, I.fsPath);
							return;
						}
						try {
							if (I?.scheme === r.Schemas.vscodeRemote) {
								const k = await S.getCanonicalURI(I);
								if (k.scheme === r.Schemas.file) {
									$.openTerminal(T, k.fsPath);
									return;
								}
							}
						} catch {}
						const P = y.getLastActiveFile(r.Schemas.file);
						if (P?.scheme === r.Schemas.file) {
							$.openTerminal(T, i.$rc(P.fsPath));
							return;
						}
						try {
							if (P?.scheme === r.Schemas.vscodeRemote) {
								const k = await S.getCanonicalURI(P);
								if (k.scheme === r.Schemas.file) {
									$.openTerminal(T, k.fsPath);
									return;
								}
							}
						} catch {}
						$.openTerminal(T, void 0);
					},
				}),
					E.$ZX.appendMenuItem(E.$XX.CommandPalette, {
						command: {
							id: f,
							title: t.localize2(6645, "Open New External Terminal"),
						},
					});
				let b = class {
					constructor(y) {
						(this._externalTerminalService = y), this._updateConfiguration();
					}
					async _updateConfiguration() {
						const y =
							await this._externalTerminalService.getDefaultTerminalForPlatforms();
						a.$Io
							.as(u.$No.Configuration)
							.registerConfiguration({
								id: "externalTerminal",
								order: 100,
								title: t.localize(6633, null),
								type: "object",
								properties: {
									"terminal.explorerKind": {
										type: "string",
										enum: ["integrated", "external", "both"],
										enumDescriptions: [
											t.localize(6634, null),
											t.localize(6635, null),
											t.localize(6636, null),
										],
										description: t.localize(6637, null),
										default: "integrated",
									},
									"terminal.sourceControlRepositoriesKind": {
										type: "string",
										enum: ["integrated", "external", "both"],
										enumDescriptions: [
											t.localize(6638, null),
											t.localize(6639, null),
											t.localize(6640, null),
										],
										description: t.localize(6641, null),
										default: "integrated",
									},
									"terminal.external.windowsExec": {
										type: "string",
										description: t.localize(6642, null),
										default: y.windows,
										scope: u.ConfigurationScope.APPLICATION,
									},
									"terminal.external.osxExec": {
										type: "string",
										description: t.localize(6643, null),
										default: w.DEFAULT_TERMINAL_OSX,
										scope: u.ConfigurationScope.APPLICATION,
									},
									"terminal.external.linuxExec": {
										type: "string",
										description: t.localize(6644, null),
										default: y.linux,
										scope: u.ConfigurationScope.APPLICATION,
									},
								},
							});
					}
				};
				(e.ExternalTerminalContribution = b),
					(e.ExternalTerminalContribution = b =
						Ne([j(0, c.IExternalTerminalService)], b)),
					a.$Io
						.as(h.Extensions.Workbench)
						.registerWorkbenchContribution(b, o.LifecyclePhase.Restored);
			},
		),
		define(
			de[3428],
			he([1, 0, 3, 350, 4, 30, 55, 81, 602, 52, 53, 10]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				var h;
				Object.defineProperty(e, "__esModule", { value: !0 }), (w = mt(w));
				let c = class extends t.$1c {
					static {
						h = this;
					}
					static {
						this.configName = "editor.defaultFoldingRangeProvider";
					}
					static {
						this.extensionIds = [];
					}
					static {
						this.extensionItemLabels = [];
					}
					static {
						this.extensionDescriptions = [];
					}
					constructor(g, p) {
						super(),
							(this.c = g),
							(this.f = p),
							this.B.add(this.c.onDidChangeExtensions(this.g, this)),
							this.B.add(
								i.$ZNb.setFoldingRangeProviderSelector(this.h.bind(this)),
							),
							this.g();
					}
					async g() {
						await this.c.whenInstalledExtensionsRegistered(),
							(h.extensionIds.length = 0),
							(h.extensionItemLabels.length = 0),
							(h.extensionDescriptions.length = 0),
							h.extensionIds.push(null),
							h.extensionItemLabels.push(w.localize(7040, null)),
							h.extensionDescriptions.push(w.localize(7041, null));
						const g = [],
							p = [];
						for (const f of this.c.extensions)
							(f.main || f.browser) &&
								(f.categories?.find((b) => b === "Programming Languages")
									? g.push(f)
									: p.push(f));
						const o = (f, b) => f.name.localeCompare(b.name);
						for (const f of g.sort(o))
							h.extensionIds.push(f.identifier.value),
								h.extensionItemLabels.push(f.displayName ?? ""),
								h.extensionDescriptions.push(f.description ?? "");
						for (const f of p.sort(o))
							h.extensionIds.push(f.identifier.value),
								h.extensionItemLabels.push(f.displayName ?? ""),
								h.extensionDescriptions.push(f.description ?? "");
					}
					h(g, p) {
						const o = this.f.getValue(h.configName, {
							overrideIdentifier: p.getLanguageId(),
						});
						if (o) return g.filter((f) => f.id === o);
					}
				};
				(c = h = Ne([j(0, u.$q2), j(1, a.$gj)], c)),
					E.$Io
						.as(d.$No.Configuration)
						.registerConfiguration({
							...m.$DAb,
							properties: {
								[c.configName]: {
									description: w.localize(7042, null),
									type: ["string", "null"],
									default: null,
									enum: c.extensionIds,
									enumItemLabels: c.extensionItemLabels,
									markdownEnumDescriptions: c.extensionDescriptions,
								},
							},
						}),
					E.$Io
						.as(C.Extensions.Workbench)
						.registerWorkbenchContribution(c, r.LifecyclePhase.Restored);
			},
		),
		define(
			de[1830],
			he([
				1, 0, 56, 46, 71, 4, 8, 63, 33, 5, 674, 17, 32, 109, 30, 81, 55, 52, 53,
				3, 10, 40, 61, 157, 602, 57, 69, 1024, 18, 31, 47,
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
			) {
				"use strict";
				var D;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sIc = void 0),
					(E = mt(E));
				let M = class extends b.$1c {
					static {
						D = this;
					}
					static {
						this.configName = "editor.defaultFormatter";
					}
					static {
						this.extensionIds = [];
					}
					static {
						this.extensionItemLabels = [];
					}
					static {
						this.extensionDescriptions = [];
					}
					constructor(O, B, U, z, F, x, H, q, V, G) {
						super(),
							(this.f = O),
							(this.g = B),
							(this.h = U),
							(this.j = z),
							(this.m = F),
							(this.n = x),
							(this.q = H),
							(this.r = q),
							(this.t = V),
							(this.u = G),
							(this.c = this.B.add(new b.$Zc())),
							this.B.add(this.f.onDidChangeExtensions(this.w, this)),
							this.B.add(
								u.$Khc.setFormatterSelector((K, J, W, X) => this.z(K, J, W, X)),
							),
							this.B.add(G.onDidActiveEditorChange(this.F, this)),
							this.B.add(
								q.documentFormattingEditProvider.onDidChange(this.F, this),
							),
							this.B.add(
								q.documentRangeFormattingEditProvider.onDidChange(this.F, this),
							),
							this.B.add(
								U.onDidChangeConfiguration(
									(K) => K.affectsConfiguration(D.configName) && this.F(),
								),
							),
							this.w();
					}
					async w() {
						await this.f.whenInstalledExtensionsRegistered();
						let O = [...this.f.extensions];
						(O = O.sort((B, U) => {
							const z = B.categories?.find(
									(x) => x === "Formatters" || x === "Programming Languages",
								),
								F = U.categories?.find(
									(x) => x === "Formatters" || x === "Programming Languages",
								);
							return z && !F ? -1 : !z && F ? 1 : B.name.localeCompare(U.name);
						})),
							(D.extensionIds.length = 0),
							(D.extensionItemLabels.length = 0),
							(D.extensionDescriptions.length = 0),
							D.extensionIds.push(null),
							D.extensionItemLabels.push(E.localize(7043, null)),
							D.extensionDescriptions.push(E.localize(7044, null));
						for (const B of O)
							(B.main || B.browser) &&
								(D.extensionIds.push(B.identifier.value),
								D.extensionItemLabels.push(B.displayName ?? ""),
								D.extensionDescriptions.push(B.description ?? ""));
					}
					static _maybeQuotes(O) {
						return O.match(/\s/) ? `'${O}'` : O;
					}
					async y(O, B, U) {
						const z = this.h.getValue(D.configName, {
							resource: U.uri,
							overrideIdentifier: U.getLanguageId(),
						});
						if (z) {
							const H = B.find((V) => c.$Gn.equals(V.extensionId, z));
							if (H) return H;
							const q = await this.f.getExtension(z);
							if (q && this.g.isEnabled((0, f.$x2)(q))) {
								const V =
									this.q.getLanguageName(U.getLanguageId()) ||
									U.getLanguageId();
								return O === u.FormattingKind.File
									? E.localize(7045, null, q.displayName || q.name, V)
									: E.localize(7046, null, q.displayName || q.name, V);
							}
						} else if (B.length === 1) return B[0];
						const F =
							this.q.getLanguageName(U.getLanguageId()) || U.getLanguageId();
						return z
							? E.localize(7048, null, z)
							: E.localize(7047, null, D._maybeQuotes(F));
					}
					async z(O, B, U, z) {
						const F = await this.y(z, O, B);
						if (typeof F != "string") return F;
						if (U !== u.FormattingMode.Silent) {
							const { confirmed: x } = await this.m.confirm({
								message: E.localize(7049, null),
								detail: F,
								primaryButton: E.localize(7050, null),
							});
							if (x) return this.C(O, B);
						} else
							this.j.prompt(
								l.Severity.Info,
								F,
								[{ label: E.localize(7051, null), run: () => this.C(O, B) }],
								{ priority: l.NotificationPriority.SILENT },
							);
					}
					async C(O, B) {
						const U = O.map((x, H) => ({
								index: H,
								label:
									x.displayName || (x.extensionId ? x.extensionId.value : "?"),
								description: x.extensionId && x.extensionId.value,
							})),
							z =
								this.q.getLanguageName(B.getLanguageId()) || B.getLanguageId(),
							F = await this.n.pick(U, {
								placeHolder: E.localize(7052, null, D._maybeQuotes(z)),
							});
						if (!(!F || !O[F.index].extensionId))
							return (
								this.h.updateValue(D.configName, O[F.index].extensionId.value, {
									resource: B.uri,
									overrideIdentifier: B.getLanguageId(),
								}),
								O[F.index]
							);
					}
					F() {
						this.c.clear();
						const O = (0, t.$btb)(this.u.activeTextEditorControl);
						if (!O || !O.hasModel()) return;
						const B = O.getModel(),
							U = (0, u.$Jhc)(
								this.r.documentFormattingEditProvider,
								this.r.documentRangeFormattingEditProvider,
								B,
							);
						if (U.length === 0) return;
						const z = new m.$Ce();
						this.c.add((0, b.$Yc)(() => z.dispose(!0))),
							this.y(u.FormattingKind.File, U, B).then((F) => {
								if (z.token.isCancellationRequested || typeof F != "string")
									return;
								const x = {
									id: `formatter/configure/dfl/${(0, L.$9g)()}`,
									title: E.localize(7053, null),
								};
								this.c.add(k.$fk.registerCommand(x.id, () => this.C(U, B))),
									this.c.add(
										this.t.addStatus({
											id: "formatter.conflict",
											name: E.localize(7054, null),
											selector: {
												language: B.getLanguageId(),
												pattern: B.uri.fsPath,
											},
											severity: l.Severity.Error,
											label: E.localize(7055, null),
											detail: F,
											busy: !1,
											source: "",
											command: x,
											accessibilityInfo: void 0,
										}),
									);
							});
					}
				};
				(e.$sIc = M),
					(e.$sIc =
						M =
						D =
							Ne(
								[
									j(0, f.$q2),
									j(1, $.$IQb),
									j(2, s.$gj),
									j(3, l.$4N),
									j(4, S.$GO),
									j(5, d.$DJ),
									j(6, y.$nM),
									j(7, I.$k3),
									j(8, T.$c8),
									j(9, P.$IY),
								],
								M,
							)),
					n.$Io
						.as(p.Extensions.Workbench)
						.registerWorkbenchContribution(M, o.LifecyclePhase.Restored),
					n.$Io
						.as(g.$No.Configuration)
						.registerConfiguration({
							...v.$DAb,
							properties: {
								[M.configName]: {
									description: E.localize(7056, null),
									type: ["string", "null"],
									default: null,
									enum: M.extensionIds,
									enumItemLabels: M.extensionItemLabels,
									markdownEnumDescriptions: M.extensionDescriptions,
								},
							},
						});
				function N(R, O, B, U) {
					function z(F) {
						return F.extensionId ? c.$Gn.toKey(F.extensionId) : "unknown";
					}
					R.publicLog2("formatterpick", {
						mode: O,
						extensions: B.map(z),
						pick: U ? z(U) : "none",
					});
				}
				async function A(R, O, B) {
					const U = R.get(d.$DJ),
						z = R.get(s.$gj),
						F = R.get(y.$nM),
						x = { resource: O.uri, overrideIdentifier: O.getLanguageId() },
						H = z.getValue(M.configName, x);
					let q;
					const V = B.map((J, W) => {
							const X = c.$Gn.equals(J.extensionId, H),
								Y = {
									index: W,
									label: J.displayName || "",
									description: X ? E.localize(7057, null) : void 0,
								};
							return X && (q = Y), Y;
						}),
						G = { label: E.localize(7058, null) },
						K = await U.pick([...V, { type: "separator" }, G], {
							placeHolder: E.localize(7059, null),
							activeItem: q,
						});
					if (K)
						if (K === G) {
							const J =
									F.getLanguageName(O.getLanguageId()) || O.getLanguageId(),
								W = await U.pick(V, {
									placeHolder: E.localize(7060, null, M._maybeQuotes(J)),
								});
							W &&
								B[W.index].extensionId &&
								z.updateValue(M.configName, B[W.index].extensionId.value, x);
							return;
						} else return K.index;
					else return;
				}
				(0, i.$ntb)(
					class extends i.$itb {
						constructor() {
							super({
								id: "editor.action.formatDocument.multiple",
								label: E.localize(7061, null),
								alias: "Format Document...",
								precondition: C.$Kj.and(
									w.EditorContextKeys.writable,
									w.EditorContextKeys.hasMultipleDocumentFormattingProvider,
								),
								contextMenuOpts: { group: "1_modification", order: 1.3 },
							});
						}
						async run(O, B, U) {
							if (!B.hasModel()) return;
							const z = O.get(r.$Li),
								F = O.get(h.$km),
								x = O.get(I.$k3),
								H = B.getModel(),
								q = (0, u.$Jhc)(
									x.documentFormattingEditProvider,
									x.documentRangeFormattingEditProvider,
									H,
								),
								V = await z.invokeFunction(A, H, q);
							typeof V == "number" &&
								(await z.invokeFunction(
									u.$Ohc,
									q[V],
									B,
									u.FormattingMode.Explicit,
									m.CancellationToken.None,
								)),
								N(F, "document", q, (typeof V == "number" && q[V]) || void 0);
						}
					},
				),
					(0, i.$ntb)(
						class extends i.$itb {
							constructor() {
								super({
									id: "editor.action.formatSelection.multiple",
									label: E.localize(7062, null),
									alias: "Format Code...",
									precondition: C.$Kj.and(
										C.$Kj.and(w.EditorContextKeys.writable),
										w.EditorContextKeys
											.hasMultipleDocumentSelectionFormattingProvider,
									),
									contextMenuOpts: {
										when: C.$Kj.and(w.EditorContextKeys.hasNonEmptySelection),
										group: "1_modification",
										order: 1.31,
									},
								});
							}
							async run(O, B) {
								if (!B.hasModel()) return;
								const U = O.get(r.$Li),
									z = O.get(I.$k3),
									F = O.get(h.$km),
									x = B.getModel();
								let H = B.getSelection();
								H.isEmpty() &&
									(H = new a.$iL(
										H.startLineNumber,
										1,
										H.startLineNumber,
										x.getLineMaxColumn(H.startLineNumber),
									));
								const q = z.documentRangeFormattingEditProvider.ordered(x),
									V = await U.invokeFunction(A, x, q);
								typeof V == "number" &&
									(await U.invokeFunction(
										u.$Mhc,
										q[V],
										B,
										H,
										m.CancellationToken.None,
										!0,
									)),
									N(F, "range", q, (typeof V == "number" && q[V]) || void 0);
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
		de[3429],
		he([1, 0, 3, 111, 56, 18, 1024, 30, 55, 52, 4, 350, 785]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$8Xc = void 0),
				(i = xi(i)),
				(u = mt(u));
			const c = "workbench.action.openSettings",
				n = u.localize(7341, null);
			let g = class extends t.$1c {
				constructor(s, l) {
					super();
					const $ = [new p(), new o()].map((I) => new f(l, I));
					$.forEach((I) => this.D(I));
					let v;
					const S = () => {
						const I = s.activeTextEditorControl;
						if (I === v) return;
						v = I;
						const T = (0, w.$btb)(I);
						$.forEach((P) => P.onActiveEditorChanged(T));
					};
					this.D(s.onDidActiveEditorChange(S)), S();
				}
			};
			(e.$8Xc = g), (e.$8Xc = g = Ne([j(0, E.$IY), j(1, C.$c8)], g));
			class p {
				constructor() {
					(this.id = "decoratorsLimitInfo"),
						(this.name = u.localize(7342, null)),
						(this.label = u.localize(7343, null)),
						(this.source = u.localize(7344, null)),
						(this.settingsId = "editor.colorDecoratorsLimit");
				}
				getLimitReporter(s) {
					return h.$YBb.get(s)?.limitReporter;
				}
			}
			class o {
				constructor() {
					(this.id = "foldingLimitInfo"),
						(this.name = u.localize(7345, null)),
						(this.label = u.localize(7346, null)),
						(this.source = u.localize(7347, null)),
						(this.settingsId = "editor.foldingMaximumRegions");
				}
				getLimitReporter(s) {
					return a.$ZNb.get(s)?.limitReporter;
				}
			}
			class f {
				constructor(s, l) {
					(this.c = s), (this.d = l);
				}
				onActiveEditorChanged(s) {
					this.b && (this.b.dispose(), (this.b = void 0));
					let l;
					return (
						s && (l = this.d.getLimitReporter(s)),
						this.e(l),
						l
							? ((this.b = l.onDidChange((y) => {
									this.e(l);
								})),
								!0)
							: !1
					);
				}
				e(s) {
					if (
						(this.a && (this.a.dispose(), (this.a = void 0)),
						s && s.limited !== !1)
					) {
						const l = {
							id: this.d.id,
							selector: "*",
							name: this.d.name,
							severity: i.default.Warning,
							label: this.d.label,
							detail: u.localize(7348, null, s.limited),
							command: { id: c, arguments: [this.d.settingsId], title: n },
							accessibilityInfo: void 0,
							source: this.d.source,
							busy: !1,
						};
						this.a = this.c.addStatus(l);
					}
				}
				dispose() {
					this.a?.dispose,
						(this.a = void 0),
						this.b?.dispose,
						(this.b = void 0);
				}
			}
			d.$Io
				.as(m.Extensions.Workbench)
				.registerWorkbenchContribution(g, r.LifecyclePhase.Restored);
		},
	),
		