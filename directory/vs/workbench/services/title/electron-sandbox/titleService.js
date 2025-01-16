define(de[4057], he([1, 0, 20, 4053, 713]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(0, t.$lK)(w.$Wqc, i.$xdd, t.InstantiationType.Eager);
		}),
		define(
			de[4058],
			he([
				1, 0, 60, 8, 21, 53, 30, 3, 239, 102, 20, 6, 32, 47, 5, 3799, 11, 4, 34,
				149,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				var s;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qxc = void 0);
				function l($) {
					return `${$}.state`;
				}
				let y = class extends d.$1c {
					static {
						s = this;
					}
					static {
						this.a = "views.customizations";
					}
					static {
						this.b = "workbench.views.service";
					}
					get viewContainers() {
						return this.u.all;
					}
					constructor(v, S, I, T, P, k) {
						super(),
							(this.G = v),
							(this.H = S),
							(this.I = I),
							(this.J = T),
							(this.L = P),
							(this.c = this.D(new a.$re())),
							(this.onDidChangeContainer = this.c.event),
							(this.f = this.D(new a.$re())),
							(this.onDidChangeLocation = this.f.event),
							(this.g = this.D(new a.$re())),
							(this.onDidChangeContainerLocation = this.g.event),
							(this.h = this.D(new d.$0c())),
							(this.j = this.D(new d.$0c())),
							(this.m = !1),
							(this.C = this.D(new a.$re())),
							(this.onDidChangeViewContainers = this.C.event),
							(this.F = new b.$Y(() =>
								k.createLogger(t.$F1, { name: t.$G1, hidden: !0 }),
							)),
							(this.n = new Map()),
							(this.q = new Map()),
							(this.r = new Map()),
							(this.s = new Map()),
							(this.u = C.$Io.as(t.Extensions.ViewContainersRegistry)),
							(this.t = C.$Io.as(t.Extensions.ViewsRegistry)),
							this.M(),
							(this.w = new Map(
								Object.entries(this.gb.viewContainerLocations),
							)),
							(this.y = new Map(Object.entries(this.gb.viewLocations))),
							(this.z = new Map(
								Object.entries(this.gb.viewContainerBadgeEnablementStates),
							)),
							this.viewContainers.forEach((L) => this.kb(L)),
							this.D(this.t.onViewsRegistered((L) => this.Q(L))),
							this.D(
								this.t.onViewsDeregistered(({ views: L, viewContainer: D }) =>
									this.S(L, D),
								),
							),
							this.D(
								this.t.onDidChangeContainer(({ views: L, from: D, to: M }) =>
									this.W(L, D, M),
								),
							),
							this.D(
								this.u.onDidRegister(({ viewContainer: L }) => {
									this.kb(L),
										this.C.fire({
											added: [
												{
													container: L,
													location: this.getViewContainerLocation(L),
												},
											],
											removed: [],
										});
								}),
							),
							this.D(
								this.u.onDidDeregister(
									({ viewContainer: L, viewContainerLocation: D }) => {
										this.mb(L),
											this.C.fire({
												removed: [{ container: L, location: D }],
												added: [],
											});
									},
								),
							),
							this.D(
								this.I.onDidChangeValue(
									w.StorageScope.PROFILE,
									s.a,
									this.D(new d.$Zc()),
								)(() => this.bb()),
							),
							this.J.whenInstalledExtensionsRegistered().then(() =>
								this.whenExtensionsRegistered(),
							);
					}
					M() {
						if (this.I.get(s.a, w.StorageScope.PROFILE)) return;
						const v = this.I.get(
								"views.cachedViewContainerLocations",
								w.StorageScope.PROFILE,
							),
							S = this.I.get(
								"views.cachedViewPositions",
								w.StorageScope.PROFILE,
							);
						if (!v && !S) return;
						const I = v ? JSON.parse(v) : [],
							T = S ? JSON.parse(S) : [],
							P = {
								viewContainerLocations: I.reduce(
									(k, [L, D]) => ((k[L] = D), k),
									{},
								),
								viewLocations: T.reduce(
									(k, [L, { containerId: D }]) => ((k[L] = D), k),
									{},
								),
								viewContainerBadgeEnablementStates: {},
							};
						this.I.store(
							s.a,
							JSON.stringify(P),
							w.StorageScope.PROFILE,
							w.StorageTarget.USER,
						),
							this.I.remove(
								"views.cachedViewContainerLocations",
								w.StorageScope.PROFILE,
							),
							this.I.remove(
								"views.cachedViewPositions",
								w.StorageScope.PROFILE,
							);
					}
					N(v) {
						for (const [S, I] of v.entries()) {
							const T = this.u.get(S);
							if (!T || !this.h.has(T)) {
								if (this.R(S)) {
									const k = this.w.get(S);
									k !== void 0 && this.ab(k, S);
								}
								continue;
							}
							const P = I.filter(
								(k) =>
									this.getViewContainerModel(T).allViewDescriptors.filter(
										(L) => L.id === k.id,
									).length === 0,
							);
							this.sb(T, P);
						}
					}
					O(v) {
						for (const [S, I] of v.entries()) {
							const T = this.u.get(S);
							!T || !this.h.has(T) || this.tb(T, I);
						}
					}
					P() {
						for (const [v, S] of this.y.entries()) {
							if (this.u.get(S)) continue;
							const I = this.t.getViewContainer(v),
								T = this.getViewDescriptorById(v);
							I && T && this.sb(I, [T]);
						}
					}
					whenExtensionsRegistered() {
						this.P();
						for (const v of [...this.w.keys()]) this.$(v);
						this.eb();
						for (const [v, S] of this.h) this.pb(v, S);
						this.m = !0;
					}
					Q(v) {
						this.H.bufferChangeEvents(() => {
							v.forEach(({ views: S, viewContainer: I }) => {
								const T = this.U(I.id, S);
								this.N(T), S.forEach((P) => this.wb(P).set(!!P.canMoveView));
							});
						});
					}
					R(v) {
						return v.startsWith(s.b);
					}
					S(v, S) {
						const I = this.U(S.id, v);
						this.O(I),
							this.H.bufferChangeEvents(() => {
								v.forEach((T) => this.wb(T).set(!1));
							});
					}
					U(v, S) {
						const I = new Map();
						for (const T of S) {
							const P = this.y.get(T.id) ?? v;
							let k = I.get(P);
							k || I.set(P, (k = [])), k.push(T);
						}
						return I;
					}
					getViewDescriptorById(v) {
						return this.t.getView(v);
					}
					getViewLocationById(v) {
						const S = this.getViewContainerByViewId(v);
						return S === null ? null : this.getViewContainerLocation(S);
					}
					getViewContainerByViewId(v) {
						const S = this.y.get(v);
						return S
							? (this.u.get(S) ?? null)
							: this.getDefaultContainerById(v);
					}
					getViewContainerLocation(v) {
						return this.w.get(v.id) ?? this.getDefaultViewContainerLocation(v);
					}
					getDefaultViewContainerLocation(v) {
						return this.u.getViewContainerLocation(v);
					}
					getDefaultContainerById(v) {
						return this.t.getViewContainer(v) ?? null;
					}
					getViewContainerModel(v) {
						return this.lb(v);
					}
					getViewContainerById(v) {
						return this.u.get(v) || null;
					}
					getViewContainersByLocation(v) {
						return this.viewContainers.filter(
							(S) => this.getViewContainerLocation(S) === v,
						);
					}
					getDefaultViewContainer(v) {
						return this.u.getDefaultViewContainer(v);
					}
					moveViewContainerToLocation(v, S, I, T) {
						this.F.value.info(
							`moveViewContainerToLocation: viewContainer:${v.id} location:${S} reason:${T}`,
						),
							this.Z(v, S, I),
							this.eb();
					}
					getViewContainerBadgeEnablementState(v) {
						return this.z.get(v) ?? !0;
					}
					setViewContainerBadgeEnablementState(v, S) {
						this.z.set(v, S), this.eb();
					}
					moveViewToLocation(v, S, I) {
						this.F.value.info(
							`moveViewToLocation: view:${v.id} location:${S} reason:${I}`,
						);
						const T = this.ab(S);
						this.moveViewsToContainer([v], T);
					}
					moveViewsToContainer(v, S, I, T) {
						if (!v.length) return;
						this.F.value.info(
							`moveViewsToContainer: views:${v.map((L) => L.id).join(",")} viewContainer:${S.id} reason:${T}`,
						);
						const P = this.getViewContainerByViewId(v[0].id),
							k = S;
						P &&
							k &&
							P !== k &&
							(this.Y(v, P, k, I), this.$(P.id), this.eb(), this.X(v, P, k));
					}
					reset() {
						for (const v of this.viewContainers) {
							const S = this.getViewContainerModel(v);
							for (const P of S.allViewDescriptors) {
								const k = this.getDefaultContainerById(P.id),
									L = this.getViewContainerByViewId(P.id);
								L && k && L !== k && this.Y([P], L, k);
							}
							const I = this.getDefaultViewContainerLocation(v),
								T = this.getViewContainerLocation(v);
							I !== null && T !== I && this.Z(v, I), this.$(v.id);
						}
						this.w.clear(), this.y.clear(), this.eb();
					}
					isViewContainerRemovedPermanently(v) {
						return this.R(v) && !this.w.has(v);
					}
					W(v, S, I) {
						const T = v.filter(
							(P) =>
								!this.y.has(P.id) ||
								(!this.viewContainers.includes(S) && this.y.get(P.id) === S.id),
						);
						T.length && this.Y(T, S, I);
					}
					X(v, S, I) {
						const T = (R) =>
								R.id.startsWith(s.b)
									? "custom"
									: R.extensionId
										? "extension"
										: R.id,
							P = this.getViewContainerLocation(S),
							k = this.getViewContainerLocation(I),
							L = v.length,
							D = T(S),
							M = T(I),
							N = P === t.ViewContainerLocation.Panel ? "panel" : "sidebar",
							A = k === t.ViewContainerLocation.Panel ? "panel" : "sidebar";
						this.L.publicLog2("viewDescriptorService.moveViews", {
							viewCount: L,
							fromContainer: D,
							toContainer: M,
							fromLocation: N,
							toLocation: A,
						});
					}
					Y(v, S, I, T = t.ViewVisibilityState.Expand) {
						this.tb(S, v), this.sb(I, v, T);
						const P = this.getViewContainerLocation(S),
							k = this.getViewContainerLocation(I);
						P !== k && this.f.fire({ views: v, from: P, to: k }),
							this.c.fire({ views: v, from: S, to: I });
					}
					Z(v, S, I) {
						const T = this.getViewContainerLocation(v),
							P = S;
						if (T !== P) {
							const k = this.R(v.id),
								L = P === this.getDefaultViewContainerLocation(v);
							k || !L ? this.w.set(v.id, P) : this.w.delete(v.id),
								this.yb(v).set(k || L),
								(v.requestedIndex = I),
								this.g.fire({ viewContainer: v, from: T, to: P });
							const D = this.jb(v);
							this.f.fire({ views: D, from: T, to: P });
						}
					}
					$(v) {
						if (!this.R(v)) return;
						const S = this.getViewContainerById(v);
						(S && this.getViewContainerModel(S)?.allViewDescriptors.length) ||
							[...this.y.values()].includes(v) ||
							(S && this.u.deregisterViewContainer(S),
							this.w.delete(v),
							this.z.delete(v),
							this.I.remove(
								(0, g.$oxc)(S?.storageId || l(v)),
								w.StorageScope.PROFILE,
							));
					}
					ab(v, S) {
						const I = S || this.db(v),
							T = this.u.registerViewContainer(
								{
									id: I,
									ctorDescriptor: new r.$Ji(m.$ZSb, [
										I,
										{ mergeViewWithContainerWhenSingleView: !0 },
									]),
									title: { value: I, original: I },
									icon: v === t.ViewContainerLocation.Sidebar ? t.$H1 : void 0,
									storageId: l(I),
									hideIfEmpty: !0,
								},
								v,
								{ doNotRegisterOpenCommand: !0 },
							);
						return (
							this.w.get(T.id) !== v && this.w.set(T.id, v),
							this.yb(T).set(!0),
							T
						);
					}
					bb() {
						JSON.stringify(this.gb) !== this.hb() && this.cb();
					}
					cb() {
						this.fb = void 0;
						const v = new Map(Object.entries(this.gb.viewContainerLocations)),
							S = new Map(Object.entries(this.gb.viewLocations)),
							I = [],
							T = [];
						for (const [P, k] of v.entries()) {
							const L = this.getViewContainerById(P);
							L
								? k !== this.getViewContainerLocation(L) && I.push([L, k])
								: this.R(P) && this.ab(k, P);
						}
						for (const P of this.viewContainers)
							if (!v.has(P.id)) {
								const k = this.getViewContainerLocation(P),
									L = this.getDefaultViewContainerLocation(P);
								k !== L && I.push([P, L]);
							}
						for (const [P, k] of S.entries()) {
							const L = this.getViewDescriptorById(P);
							if (L) {
								const D = this.getViewContainerByViewId(P),
									M = this.u.get(k);
								D && M && M !== D && T.push({ views: [L], from: D, to: M });
							}
						}
						for (const P of this.viewContainers) {
							const k = this.getViewContainerModel(P);
							for (const L of k.allViewDescriptors)
								if (!S.has(L.id)) {
									const D = this.getViewContainerByViewId(L.id),
										M = this.getDefaultContainerById(L.id);
									D && M && D !== M && T.push({ views: [L], from: D, to: M });
								}
						}
						for (const [P, k] of I) this.Z(P, k);
						for (const { views: P, from: k, to: L } of T)
							this.Y(P, k, L, t.ViewVisibilityState.Default);
						(this.w = v), (this.y = S);
					}
					db(v) {
						return `${s.b}.${(0, t.$J1)(v)}.${(0, c.$9g)()}`;
					}
					eb() {
						const v = {
							viewContainerLocations: {},
							viewLocations: {},
							viewContainerBadgeEnablementStates: {},
						};
						for (const [S, I] of this.w) {
							const T = this.getViewContainerById(S);
							(T &&
								!this.R(S) &&
								I === this.getDefaultViewContainerLocation(T)) ||
								(v.viewContainerLocations[S] = I);
						}
						for (const [S, I] of this.y) {
							const T = this.getViewContainerById(I);
							(T && this.getDefaultContainerById(S)?.id === T.id) ||
								(v.viewLocations[S] = I);
						}
						for (const [S, I] of this.z)
							I === !1 && (v.viewContainerBadgeEnablementStates[S] = I);
						this.gb = v;
					}
					get gb() {
						return (
							this.fb ||
								((this.fb = JSON.parse(this.hb())),
								(this.fb.viewContainerLocations =
									this.fb.viewContainerLocations ?? {}),
								(this.fb.viewLocations = this.fb.viewLocations ?? {}),
								(this.fb.viewContainerBadgeEnablementStates =
									this.fb.viewContainerBadgeEnablementStates ?? {})),
							this.fb
						);
					}
					set gb(v) {
						const S = JSON.stringify(v);
						JSON.stringify(this.gb) !== S && ((this.fb = v), this.ib(S));
					}
					hb() {
						return this.I.get(s.a, w.StorageScope.PROFILE, "{}");
					}
					ib(v) {
						this.I.store(s.a, v, w.StorageScope.PROFILE, w.StorageTarget.USER);
					}
					jb(v) {
						const S = this.t
							.getViews(v)
							.filter((I) => (this.y.get(I.id) ?? v.id) === v.id);
						for (const [I, T] of this.y.entries()) {
							if (T !== v.id || this.t.getViewContainer(I) === v) continue;
							const P = this.getViewDescriptorById(I);
							P && S.push(P);
						}
						return S;
					}
					kb(v) {
						const S = this.R(v.id)
							? !0
							: this.getViewContainerLocation(v) ===
								this.getDefaultViewContainerLocation(v);
						this.yb(v).set(S), this.lb(v);
					}
					lb(v) {
						let S = this.h.get(v)?.viewContainerModel;
						if (!S) {
							const I = new d.$Zc();
							(S = I.add(this.G.createInstance(g.$pxc, v))),
								this.nb({ added: S.activeViewDescriptors, removed: [] }),
								S.onDidChangeActiveViewDescriptors((k) => this.nb(k), this, I),
								this.ob({ added: [...S.visibleViewDescriptors], removed: [] }),
								S.onDidAddVisibleViewDescriptors(
									(k) =>
										this.ob({
											added: k.map(({ viewDescriptor: L }) => L),
											removed: [],
										}),
									this,
									I,
								),
								S.onDidRemoveVisibleViewDescriptors(
									(k) =>
										this.ob({
											added: [],
											removed: k.map(({ viewDescriptor: L }) => L),
										}),
									this,
									I,
								),
								I.add((0, d.$Yc)(() => this.j.deleteAndDispose(v))),
								I.add(this.rb(v));
							const T = {
								viewContainerModel: S,
								disposables: I,
								dispose: () => I.dispose(),
							};
							this.h.set(v, T),
								this.Q([{ views: this.t.getViews(v), viewContainer: v }]);
							const P = this.jb(v).filter(
								(k) => this.getDefaultContainerById(k.id) !== v,
							);
							P.length &&
								(this.sb(v, P),
								this.H.bufferChangeEvents(() => {
									P.forEach((k) => this.wb(k).set(!!k.canMoveView));
								})),
								this.m && this.pb(v, T);
						}
						return S;
					}
					mb(v) {
						this.h.deleteAndDispose(v), this.j.deleteAndDispose(v);
					}
					nb({ added: v, removed: S }) {
						this.H.bufferChangeEvents(() => {
							v.forEach((I) => this.ub(I).set(!0)),
								S.forEach((I) => this.ub(I).set(!1));
						});
					}
					ob({ added: v, removed: S }) {
						this.H.bufferChangeEvents(() => {
							v.forEach((I) => this.vb(I).set(!0)),
								S.forEach((I) => this.vb(I).set(!1));
						});
					}
					pb(v, { viewContainerModel: S, disposables: I }) {
						this.j.deleteAndDispose(v),
							this.j.set(v, this.qb(S)),
							I.add(
								a.Event.any(
									S.onDidChangeActiveViewDescriptors,
									S.onDidAddVisibleViewDescriptors,
									S.onDidRemoveVisibleViewDescriptors,
									S.onDidMoveVisibleViewDescriptors,
								)((T) => {
									this.j.deleteAndDispose(v), this.j.set(v, this.qb(S));
								}),
							);
					}
					qb(v) {
						const S = new d.$Zc();
						return (
							v.activeViewDescriptors.forEach((I, T) => {
								I.remoteAuthority ||
									(S.add(
										(0, p.$4X)(
											class extends m.$1Sb {
												constructor() {
													super({
														id: `${I.id}.toggleVisibility`,
														viewPaneContainerId: v.viewContainer.id,
														precondition:
															I.canToggleVisibility &&
															(!v.isVisible(I.id) ||
																v.visibleViewDescriptors.length > 1)
																? i.$Kj.true()
																: i.$Kj.false(),
														toggled: i.$Kj.has(`${I.id}.visible`),
														title: I.name,
														menu: [
															{
																id: m.$YSb,
																when: i.$Kj.equals(
																	"viewContainer",
																	v.viewContainer.id,
																),
																order: T,
															},
															{
																id: p.$XX.ViewContainerTitleContext,
																when: i.$Kj.and(
																	i.$Kj.equals(
																		"viewContainer",
																		v.viewContainer.id,
																	),
																),
																order: T,
																group: "1_toggleVisibility",
															},
															{
																id: p.$XX.ViewTitleContext,
																when: i.$Kj.and(
																	i.$Kj.or(
																		...v.visibleViewDescriptors.map((P) =>
																			i.$Kj.equals("view", P.id),
																		),
																	),
																),
																order: T,
																group: "2_toggleVisibility",
															},
														],
													});
												}
												async runInViewPaneContainer(P, k) {
													k.toggleViewVisibility(I.id);
												}
											},
										),
									),
									S.add(
										(0, p.$4X)(
											class extends m.$1Sb {
												constructor() {
													super({
														id: `${I.id}.removeView`,
														viewPaneContainerId: v.viewContainer.id,
														title: (0, o.localize)(13001, null, I.name.value),
														precondition:
															I.canToggleVisibility &&
															(!v.isVisible(I.id) ||
																v.visibleViewDescriptors.length > 1)
																? i.$Kj.true()
																: i.$Kj.false(),
														menu: [
															{
																id: p.$XX.ViewTitleContext,
																when: i.$Kj.and(
																	i.$Kj.equals("view", I.id),
																	i.$Kj.has(`${I.id}.visible`),
																),
																group: "1_hide",
																order: 1,
															},
														],
													});
												}
												async runInViewPaneContainer(P, k) {
													k.toggleViewVisibility(I.id);
												}
											},
										),
									));
							}),
							S
						);
					}
					rb(v) {
						const S = this;
						return (0, p.$4X)(
							class extends p.$3X {
								constructor() {
									super({
										id: `${v.id}.resetViewContainerLocation`,
										title: (0, o.localize2)(13002, "Reset Location"),
										menu: [
											{
												id: p.$XX.ViewContainerTitleContext,
												when: i.$Kj.or(
													i.$Kj.and(
														i.$Kj.equals("viewContainer", v.id),
														i.$Kj.equals(
															`${v.id}.defaultViewContainerLocation`,
															!1,
														),
													),
												),
											},
										],
									});
								}
								run() {
									S.moveViewContainerToLocation(
										v,
										S.getDefaultViewContainerLocation(v),
										void 0,
										this.desc.id,
									);
								}
							},
						);
					}
					sb(v, S, I = t.ViewVisibilityState.Default) {
						this.H.bufferChangeEvents(() => {
							S.forEach((T) => {
								const P = this.getDefaultContainerById(T.id) === v;
								this.xb(T).set(P),
									P ? this.y.delete(T.id) : this.y.set(T.id, v.id);
							});
						}),
							this.getViewContainerModel(v).add(
								S.map((T) => ({
									viewDescriptor: T,
									collapsed: I === t.ViewVisibilityState.Default ? void 0 : !1,
									visible: I === t.ViewVisibilityState.Default ? void 0 : !0,
								})),
							);
					}
					tb(v, S) {
						this.H.bufferChangeEvents(() => {
							S.forEach((I) => {
								this.y.get(I.id) === v.id && this.y.delete(I.id),
									this.xb(I).set(!1);
							});
						}),
							this.getViewContainerModel(v).remove(S);
					}
					ub(v) {
						const S = `${v.id}.active`;
						let I = this.n.get(S);
						return (
							I || ((I = new i.$5j(S, !1).bindTo(this.H)), this.n.set(S, I)), I
						);
					}
					vb(v) {
						const S = `${v.id}.visible`;
						let I = this.n.get(S);
						return (
							I || ((I = new i.$5j(S, !1).bindTo(this.H)), this.n.set(S, I)), I
						);
					}
					wb(v) {
						const S = `${v.id}.canMove`;
						let I = this.q.get(S);
						return (
							I || ((I = new i.$5j(S, !1).bindTo(this.H)), this.q.set(S, I)), I
						);
					}
					xb(v) {
						const S = `${v.id}.defaultViewLocation`;
						let I = this.r.get(S);
						return (
							I || ((I = new i.$5j(S, !1).bindTo(this.H)), this.r.set(S, I)), I
						);
					}
					yb(v) {
						const S = `${v.id}.defaultViewContainerLocation`;
						let I = this.s.get(S);
						return (
							I || ((I = new i.$5j(S, !1).bindTo(this.H)), this.s.set(S, I)), I
						);
					}
				};
				(e.$qxc = y),
					(e.$qxc =
						y =
						s =
							Ne(
								[
									j(0, n.$Li),
									j(1, i.$6j),
									j(2, w.$lq),
									j(3, E.$q2),
									j(4, h.$km),
									j(5, f.$jk),
								],
								y,
							)),
					(0, u.$lK)(t.$K1, y, u.InstantiationType.Delayed);
			},
		),
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
		define(
			de[4059],
			he([1, 0, 145, 6, 3, 279, 96, 5, 107, 60, 117, 806, 7, 1352, 24]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$YUc = void 0);
				var g;
				(function (b) {
					(b[(b.SplitPaneMinSize = 80)] = "SplitPaneMinSize"),
						(b[(b.ResizePartCellCount = 4)] = "ResizePartCellCount");
				})(g || (g = {}));
				class p extends w.$1c {
					get onDidChange() {
						return this.m;
					}
					constructor(s, l) {
						super(),
							(this.n = s),
							(this.orientation = l),
							(this.g = this.D(new w.$Zc())),
							(this.h = []),
							(this.j = new Map()),
							(this.m = i.Event.None),
							(this.b = this.n.offsetWidth),
							(this.a = this.n.offsetHeight),
							this.q(),
							this.f.layout(
								this.orientation === E.Orientation.HORIZONTAL ? this.b : this.a,
							);
					}
					q() {
						(this.f = new E.$vob(this.n, { orientation: this.orientation })),
							this.g.clear(),
							this.g.add(
								this.f.onDidSashReset(() => this.f.distributeViewSizes()),
							);
					}
					split(s, l) {
						this.r(s, l);
					}
					resizePane(s, l, y) {
						if (this.h.length <= 1) return;
						const $ = [];
						for (let I = 0; I < this.f.length; I++)
							$.push(this.f.getViewSize(I));
						const v = s !== this.h.length - 1,
							S = v ? s + 1 : s - 1;
						((v && l === m.Direction.Left) ||
							(!v && l === m.Direction.Right) ||
							(v && l === m.Direction.Up) ||
							(!v && l === m.Direction.Down)) &&
							(y *= -1),
							$[s] + y < g.SplitPaneMinSize
								? (y = g.SplitPaneMinSize - $[s])
								: $[S] - y < g.SplitPaneMinSize &&
									(y = $[S] - g.SplitPaneMinSize),
							($[s] += y),
							($[S] -= y);
						for (let I = 0; I < this.f.length - 1; I++)
							this.f.resizeView(I, $[I]);
					}
					resizePanes(s) {
						if (this.h.length <= 1) return;
						s[s.length - 1] += 1 - s.reduce((y, $) => y + $, 0);
						let l = 0;
						for (let y = 0; y < this.f.length; y++) l += this.f.getViewSize(y);
						for (let y = 0; y < this.f.length; y++)
							this.f.resizeView(y, l * s[y]);
					}
					getPaneSize(s) {
						const l = this.j.get(s);
						if (!l) return 0;
						const y = this.h.indexOf(l);
						return this.f.getViewSize(y);
					}
					r(s, l) {
						const y = new o(
							s,
							this.orientation === E.Orientation.HORIZONTAL ? this.a : this.b,
						);
						(y.orientation = this.orientation),
							typeof l == "number" ? this.h.splice(l, 0, y) : this.h.push(y),
							this.j.set(s, this.h[this.h.indexOf(y)]),
							this.s(() => this.f.addView(y, E.Sizing.Distribute, l)),
							this.layout(this.b, this.a),
							(this.m = i.Event.any(...this.h.map(($) => $.onDidChange)));
					}
					remove(s) {
						let l = null;
						for (let y = 0; y < this.h.length; y++)
							this.h[y].instance === s && (l = y);
						l !== null &&
							(this.h.splice(l, 1),
							this.j.delete(s),
							this.f.removeView(l, E.Sizing.Distribute),
							s.detachFromElement());
					}
					layout(s, l) {
						(this.b = s),
							(this.a = l),
							this.orientation === E.Orientation.HORIZONTAL
								? (this.h.forEach((y) => y.orthogonalLayout(l)),
									this.f.layout(s))
								: (this.h.forEach((y) => y.orthogonalLayout(s)),
									this.f.layout(l));
					}
					setOrientation(s) {
						if (this.orientation !== s) {
							for (this.orientation = s; this.n.children.length > 0; )
								this.n.children[0].remove();
							this.g.clear(),
								this.f.dispose(),
								this.q(),
								this.s(() => {
									this.h.forEach((l) => {
										(l.orientation = s), this.f.addView(l, 1);
									});
								});
						}
					}
					s(s) {
						this.h.forEach((l) => (l.instance.disableLayout = !0)),
							s(),
							this.h.forEach((l) => (l.instance.disableLayout = !1));
					}
				}
				class o {
					get onDidChange() {
						return this.a;
					}
					constructor(s, l) {
						(this.instance = s),
							(this.orthogonalSize = l),
							(this.minimumSize = g.SplitPaneMinSize),
							(this.maximumSize = Number.MAX_VALUE),
							(this.a = i.Event.None),
							(this.element = document.createElement("div")),
							(this.element.className = "terminal-split-pane"),
							this.instance.attachToElement(this.element);
					}
					layout(s) {
						!s ||
							!this.orthogonalSize ||
							(this.orientation === E.Orientation.VERTICAL
								? this.instance.layout({
										width: this.orthogonalSize,
										height: s,
									})
								: this.instance.layout({
										width: s,
										height: this.orthogonalSize,
									}));
					}
					orthogonalLayout(s) {
						this.orthogonalSize = s;
					}
				}
				let f = class extends w.$1c {
					get terminalInstances() {
						return this.a;
					}
					constructor(s, l, y, $, v, S, I) {
						super(),
							(this.F = s),
							(this.G = y),
							(this.H = $),
							(this.I = v),
							(this.J = S),
							(this.L = I),
							(this.a = []),
							(this.g = C.Position.BOTTOM),
							(this.h = r.ViewContainerLocation.Panel),
							(this.j = new Map()),
							(this.m = -1),
							(this.q = !1),
							(this.r = this.D(new i.$re())),
							(this.onDidDisposeInstance = this.r.event),
							(this.s = this.D(new i.$re())),
							(this.onDidFocusInstance = this.s.event),
							(this.u = this.D(new i.$re())),
							(this.onDidChangeInstanceCapability = this.u.event),
							(this.w = this.D(new i.$re())),
							(this.onDisposed = this.w.event),
							(this.y = this.D(new i.$re())),
							(this.onInstancesChanged = this.y.event),
							(this.z = this.D(new i.$re())),
							(this.onDidChangeActiveInstance = this.z.event),
							(this.C = this.D(new i.$re())),
							(this.onPanelOrientationChanged = this.C.event),
							l && this.addInstance(l),
							this.F && this.attachToElement(this.F),
							this.C.fire(
								this.h === r.ViewContainerLocation.Panel && (0, C.$nEb)(this.g)
									? E.Orientation.HORIZONTAL
									: E.Orientation.VERTICAL,
							),
							this.D(
								(0, w.$Yc)(() => {
									this.F && this.f && (this.f.remove(), (this.f = void 0));
								}),
							);
					}
					addInstance(s, l) {
						let y;
						const $ = l ? this.a.findIndex((v) => v.instanceId === l) : this.m;
						"instanceId" in s
							? (y = s)
							: (y = this.H.createInstance(s, u.TerminalLocation.Panel)),
							this.a.length === 0
								? (this.a.push(y), (this.m = 0))
								: this.a.splice($ + 1, 0, y),
							this.M(y),
							this.b && this.b.split(y, $ + 1),
							this.y.fire();
					}
					dispose() {
						(this.a = []), this.y.fire(), super.dispose();
					}
					get activeInstance() {
						if (this.a.length !== 0) return this.a[this.m];
					}
					getLayoutInfo(s) {
						const l = this.terminalInstances.filter(
								($) =>
									typeof $.persistentProcessId == "number" && $.shouldPersist,
							),
							y = l
								.map(($) => this.b?.getPaneSize($) || 0)
								.reduce(($, v) => ($ += v), 0);
						return {
							isActive: s,
							activePersistentProcessId: this.activeInstance
								? this.activeInstance.persistentProcessId
								: void 0,
							terminals: l.map(($) => ({
								relativeSize: y > 0 ? this.b.getPaneSize($) / y : 0,
								terminal: $.persistentProcessId || 0,
							})),
						};
					}
					M(s) {
						this.j.set(s.instanceId, [
							s.onDisposed((l) => {
								this.r.fire(l), this.N(l);
							}),
							s.onDidFocus((l) => {
								this.P(l), this.s.fire(l);
							}),
							s.capabilities.onDidAddCapabilityType(() => this.u.fire(s)),
							s.capabilities.onDidRemoveCapabilityType(() => this.u.fire(s)),
						]);
					}
					N(s) {
						this.O(s);
					}
					removeInstance(s) {
						this.O(s);
					}
					O(s) {
						const l = this.a.indexOf(s);
						if (l === -1) return;
						const y = s === this.activeInstance;
						if ((this.a.splice(l, 1), y && this.a.length > 0)) {
							const v = l < this.a.length ? l : this.a.length - 1;
							this.setActiveInstanceByIndex(v), this.activeInstance?.focus(!0);
						} else l < this.m && this.m--;
						this.b?.remove(s),
							this.a.length === 0
								? (this.w.fire(this), this.dispose())
								: this.y.fire();
						const $ = this.j.get(s.instanceId);
						$ && ((0, w.$Vc)($), this.j.delete(s.instanceId));
					}
					moveInstance(s, l, y) {
						if (
							((s = (0, n.$6b)(s)),
							s.some((S) => !this.terminalInstances.includes(S)))
						)
							return;
						const v = y === "before" ? l : l + 1;
						this.a.splice(v, 0, ...s);
						for (const S of s) {
							const I =
								y === "after" ? this.a.indexOf(S) : this.a.lastIndexOf(S);
							this.a.splice(I, 1);
						}
						if (this.b)
							for (let S = 0; S < s.length; S++) {
								const I = s[S];
								this.b.remove(I), this.b.split(I, l + (y === "before" ? S : 0));
							}
						this.y.fire();
					}
					P(s) {
						this.setActiveInstanceByIndex(this.Q(s.instanceId));
					}
					Q(s) {
						let l = -1;
						if (
							(this.terminalInstances.forEach((y, $) => {
								y.instanceId === s && (l = $);
							}),
							l === -1)
						)
							throw new Error(
								`Terminal with ID ${s} does not exist (has it already been disposed?)`,
							);
						return l;
					}
					setActiveInstanceByIndex(s, l) {
						if (s < 0 || s >= this.a.length) return;
						const y = this.activeInstance;
						(this.m = s),
							(y !== this.activeInstance || l) &&
								(this.y.fire(), this.z.fire(this.activeInstance));
					}
					attachToElement(s) {
						if (
							((this.F = s),
							this.f ||
								((this.f = document.createElement("div")),
								this.f.classList.add("terminal-group")),
							this.F.appendChild(this.f),
							!this.b)
						) {
							(this.g = this.I.getPanelPosition()),
								(this.h = this.J.getViewLocationById(t.$geb));
							const l =
								this.h === r.ViewContainerLocation.Panel && (0, C.$nEb)(this.g)
									? E.Orientation.HORIZONTAL
									: E.Orientation.VERTICAL;
							(this.b = this.L.createInstance(p, this.f, l)),
								this.terminalInstances.forEach((y) =>
									this.b.split(y, this.m + 1),
								);
						}
					}
					get title() {
						if (this.a.length === 0) return "";
						let s =
							this.terminalInstances[0].title +
							this.R(this.terminalInstances[0]);
						this.terminalInstances[0].description &&
							(s += ` (${this.terminalInstances[0].description})`);
						for (let l = 1; l < this.terminalInstances.length; l++) {
							const y = this.terminalInstances[l];
							y.title &&
								((s += `, ${y.title + this.R(y)}`),
								y.description && (s += ` (${y.description})`));
						}
						return s;
					}
					R(s) {
						return this.G.config.enableBell &&
							s.statusList.statuses.some((l) => l.id === a.TerminalStatus.Bell)
							? "*"
							: "";
					}
					setVisible(s) {
						(this.q = s),
							this.f && (this.f.style.display = s ? "" : "none"),
							this.terminalInstances.forEach((l) => l.setVisible(s));
					}
					split(s) {
						const l = this.H.createInstance(s, u.TerminalLocation.Panel);
						return this.addInstance(l, s.parentTerminalId), this.P(l), l;
					}
					addDisposable(s) {
						this.D(s);
					}
					layout(s, l) {
						if (this.b) {
							const y = this.I.getPanelPosition(),
								$ = this.J.getViewLocationById(t.$geb);
							if (y !== this.g || $ !== this.h) {
								const S =
									$ === r.ViewContainerLocation.Panel && (0, C.$nEb)(y)
										? E.Orientation.HORIZONTAL
										: E.Orientation.VERTICAL;
								this.b.setOrientation(S),
									(this.g = y),
									(this.h = $),
									this.C.fire(this.b.orientation);
							}
							this.b.layout(s, l),
								this.n &&
									this.q &&
									(this.resizePanes(this.n), (this.n = void 0));
						}
					}
					focusPreviousPane() {
						const s = this.m === 0 ? this.a.length - 1 : this.m - 1;
						this.setActiveInstanceByIndex(s);
					}
					focusNextPane() {
						const s = this.m === this.a.length - 1 ? 0 : this.m + 1;
						this.setActiveInstanceByIndex(s);
					}
					S() {
						switch (this.h) {
							case r.ViewContainerLocation.Panel:
								return this.g;
							case r.ViewContainerLocation.Sidebar:
								return this.I.getSideBarPosition();
							case r.ViewContainerLocation.AuxiliaryBar:
								return this.I.getSideBarPosition() === C.Position.LEFT
									? C.Position.RIGHT
									: C.Position.LEFT;
						}
					}
					U() {
						return (0, C.$nEb)(this.S())
							? E.Orientation.HORIZONTAL
							: E.Orientation.VERTICAL;
					}
					resizePane(s) {
						if (!this.b) return;
						const l = s === m.Direction.Left || s === m.Direction.Right,
							y = this.U(),
							$ =
								(l && y === E.Orientation.VERTICAL) ||
								(!l && y === E.Orientation.HORIZONTAL),
							v = this.G.getFont((0, h.getWindow)(this.f)),
							S = l ? v.charWidth : v.charHeight;
						if (S) {
							let I = S * g.ResizePartCellCount;
							if ($) {
								const T = this.S();
								((T === C.Position.LEFT && s === m.Direction.Left) ||
									(T === C.Position.RIGHT && s === m.Direction.Right) ||
									(T === C.Position.BOTTOM && s === m.Direction.Down) ||
									(T === C.Position.TOP && s === m.Direction.Up)) &&
									(I *= -1),
									this.I.resizePart((0, c.$4uc)(this.h), I, I);
							} else this.b.resizePane(this.m, s, I);
						}
					}
					resizePanes(s) {
						if (!this.b) {
							this.n = s;
							return;
						}
						this.b.resizePanes(s);
					}
				};
				(e.$YUc = f),
					(e.$YUc = f =
						Ne(
							[
								j(2, m.$jIb),
								j(3, m.$mIb),
								j(4, C.$mEb),
								j(5, r.$K1),
								j(6, d.$Li),
							],
							f,
						));
			},
		),
		define(
			de[4060],
			he([1, 0, 15, 6, 3, 8, 5, 60, 89, 63, 4059, 690, 145, 237, 308, 24]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6Uc = void 0);
				let p = class extends w.$1c {
					get instances() {
						return this.groups.reduce(
							(f, b) => f.concat(b.terminalInstances),
							[],
						);
					}
					constructor(f, b, s, l, y, $) {
						super(),
							(this.C = f),
							(this.F = b),
							(this.G = s),
							(this.H = l),
							(this.I = y),
							(this.J = $),
							(this.groups = []),
							(this.activeGroupIndex = -1),
							(this.lastAccessedMenu = "inline-tab"),
							(this.j = !1),
							(this.m = this.D(new i.$re())),
							(this.onDidChangeActiveGroup = this.m.event),
							(this.n = this.D(new i.$re())),
							(this.onDidDisposeGroup = this.n.event),
							(this.q = this.D(new i.$re())),
							(this.onDidChangeGroups = this.q.event),
							(this.r = this.D(new i.$re())),
							(this.onDidShow = this.r.event),
							(this.s = this.D(new i.$re())),
							(this.onDidDisposeInstance = this.s.event),
							(this.t = this.D(new i.$re())),
							(this.onDidFocusInstance = this.t.event),
							(this.u = this.D(new i.$re())),
							(this.onDidChangeActiveInstance = this.u.event),
							(this.w = this.D(new i.$re())),
							(this.onDidChangeInstances = this.w.event),
							(this.y = this.D(new i.$re())),
							(this.onDidChangeInstanceCapability = this.y.event),
							(this.z = this.D(new i.$re())),
							(this.onDidChangePanelOrientation = this.z.event),
							(this.O = (v) =>
								new Set(
									v
										.map((S) => this.getGroupForInstance(S))
										.filter((S) => S !== void 0),
								)),
							(this.f = c.TerminalContextKeys.groupCount.bindTo(this.C)),
							this.D(this.onDidDisposeGroup((v) => this.M(v))),
							this.D(
								this.onDidChangeGroups(() => this.f.set(this.groups.length)),
							),
							this.D(
								i.Event.any(
									this.onDidChangeActiveGroup,
									this.onDidChangeInstances,
								)(() => this.updateVisibility()),
							),
							this.D(this.J.onShow(() => (this.j = !0))),
							this.D(this.J.onHide(() => (this.j = !1)));
					}
					hidePanel() {
						const f = this.H.getViewContainerByViewId(h.$geb);
						f &&
							this.H.getViewContainerModel(f).activeViewDescriptors.length ===
								1 &&
							(this.G.closeView(h.$geb),
							c.TerminalContextKeys.tabsMouse.bindTo(this.C).set(!1));
					}
					get activeGroup() {
						if (
							!(
								this.activeGroupIndex < 0 ||
								this.activeGroupIndex >= this.groups.length
							)
						)
							return this.groups[this.activeGroupIndex];
					}
					set activeGroup(f) {
						if (f === void 0) return;
						const b = this.groups.findIndex((s) => s === f);
						this.setActiveGroupByIndex(b);
					}
					get activeInstance() {
						return this.activeGroup?.activeInstance;
					}
					setActiveInstance(f) {
						this.setActiveInstanceByIndex(this.L(f.instanceId));
					}
					L(f) {
						const b = this.instances.findIndex((s) => s.instanceId === f);
						if (b === -1)
							throw new Error(
								`Terminal with ID ${f} does not exist (has it already been disposed?)`,
							);
						return b;
					}
					setContainer(f) {
						(this.h = f), this.groups.forEach((b) => b.attachToElement(f));
					}
					async focusTabs() {
						if (this.instances.length === 0) return;
						await this.showPanel(!0),
							this.G.getActiveViewWithId(
								h.$geb,
							)?.terminalTabbedView?.focusTabs();
					}
					async focusHover() {
						if (this.instances.length === 0) return;
						this.G.getActiveViewWithId(
							h.$geb,
						)?.terminalTabbedView?.focusHover();
					}
					async focusInstance(f) {
						return this.showPanel(!0);
					}
					async focusActiveInstance() {
						return this.showPanel(!0);
					}
					createGroup(f) {
						const b = this.F.createInstance(u.$YUc, this.h, f);
						return (
							this.groups.push(b),
							b.addDisposable(
								i.Event.forward(b.onPanelOrientationChanged, this.z),
							),
							b.addDisposable(i.Event.forward(b.onDidDisposeInstance, this.s)),
							b.addDisposable(i.Event.forward(b.onDidFocusInstance, this.t)),
							b.addDisposable(
								i.Event.forward(b.onDidChangeInstanceCapability, this.y),
							),
							b.addDisposable(i.Event.forward(b.onInstancesChanged, this.w)),
							b.addDisposable(i.Event.forward(b.onDisposed, this.n)),
							b.addDisposable(
								b.onDidChangeActiveInstance((s) => {
									b === this.activeGroup && this.u.fire(s);
								}),
							),
							b.terminalInstances.length > 0 && this.w.fire(),
							this.instances.length === 1 && this.setActiveInstanceByIndex(0),
							this.q.fire(),
							b
						);
					}
					async showPanel(f) {
						this.I.registerEvent("terminal.show");
						const b =
							this.G.getActiveViewWithId(h.$geb) ??
							(await this.G.openView(h.$geb, f));
						if ((b?.setExpanded(!0), f)) {
							await (0, t.$Nh)(0);
							const s = this.activeInstance;
							s &&
								(b && !b.isVisible() && (await this.G.openView(h.$geb, f)),
								await s.focusWhenReady(!0));
						}
						this.r.fire();
					}
					getInstanceFromResource(f) {
						return (0, a.$WUc)(this.instances, f);
					}
					M(f) {
						const b = this.activeGroup,
							s = f === b,
							l = this.groups.indexOf(f);
						if ((l !== -1 && (this.groups.splice(l, 1), this.q.fire()), s)) {
							if (this.groups.length > 0 && !this.j) {
								const y = l < this.groups.length ? l : this.groups.length - 1;
								this.setActiveGroupByIndex(y, !0),
									this.activeInstance?.focus(!0);
							}
						} else
							this.activeGroupIndex > l &&
								this.setActiveGroupByIndex(this.activeGroupIndex - 1);
						this.activeGroupIndex >= this.groups.length &&
							this.setActiveGroupByIndex(this.groups.length - 1),
							this.w.fire(),
							this.q.fire(),
							s &&
								(this.m.fire(this.activeGroup),
								this.u.fire(this.activeInstance));
					}
					setActiveGroupByIndex(f, b) {
						if (f === -1 && this.groups.length === 0) {
							this.activeGroupIndex !== -1 &&
								((this.activeGroupIndex = -1),
								this.m.fire(this.activeGroup),
								this.u.fire(this.activeInstance));
							return;
						}
						if (f < 0 || f >= this.groups.length) return;
						const s = this.activeGroup;
						(this.activeGroupIndex = f),
							(b || s !== this.activeGroup) &&
								(this.m.fire(this.activeGroup),
								this.u.fire(this.activeInstance));
					}
					N(f) {
						let b = 0;
						for (; f >= 0 && b < this.groups.length; ) {
							const s = this.groups[b],
								l = s.terminalInstances.length;
							if (f < l)
								return {
									group: s,
									groupIndex: b,
									instance: s.terminalInstances[f],
									instanceIndex: f,
								};
							(f -= l), b++;
						}
					}
					setActiveInstanceByIndex(f) {
						const b = this.activeInstance,
							s = this.N(f),
							l = s?.group.terminalInstances[s.instanceIndex];
						if (!s || b === l) return;
						const y = s.instanceIndex;
						(this.activeGroupIndex = s.groupIndex),
							this.m.fire(this.activeGroup),
							s.group.setActiveInstanceByIndex(y, !0);
					}
					setActiveGroupToNext() {
						if (this.groups.length <= 1) return;
						let f = this.activeGroupIndex + 1;
						f >= this.groups.length && (f = 0), this.setActiveGroupByIndex(f);
					}
					setActiveGroupToPrevious() {
						if (this.groups.length <= 1) return;
						let f = this.activeGroupIndex - 1;
						f < 0 && (f = this.groups.length - 1),
							this.setActiveGroupByIndex(f);
					}
					moveGroup(f, b) {
						f = (0, g.$6b)(f);
						const s = this.O(f),
							l = this.getGroupForInstance(b);
						if (!l || s.size === 0) return;
						if (s.size === 1 && s.has(l)) {
							const T = l.terminalInstances.indexOf(b),
								P = f.sort(
									(D, M) =>
										l.terminalInstances.indexOf(D) -
										l.terminalInstances.indexOf(M),
								),
								L = l.terminalInstances.indexOf(P[0]) < T ? "after" : "before";
							l.moveInstance(P, T, L), this.w.fire();
							return;
						}
						const y = this.groups.indexOf(l),
							$ = Array.from(s).sort(
								(T, P) => this.groups.indexOf(T) - this.groups.indexOf(P),
							),
							S = this.groups.indexOf($[0]) < y ? "after" : "before",
							I = S === "after" ? y + 1 : y;
						this.groups.splice(I, 0, ...$);
						for (const T of $) {
							const P =
								S === "after"
									? this.groups.indexOf(T)
									: this.groups.lastIndexOf(T);
							this.groups.splice(P, 1);
						}
						this.w.fire();
					}
					moveGroupToEnd(f) {
						f = (0, g.$6b)(f);
						const b = this.O(f);
						if (b.size === 0) return;
						const s = this.groups.length - 1,
							l = Array.from(b).sort(
								(y, $) => this.groups.indexOf(y) - this.groups.indexOf($),
							);
						this.groups.splice(s + 1, 0, ...l);
						for (const y of l) {
							const $ = this.groups.indexOf(y);
							this.groups.splice($, 1);
						}
						this.w.fire();
					}
					moveInstance(f, b, s) {
						const l = this.getGroupForInstance(f),
							y = this.getGroupForInstance(b);
						if (!l || !y) return;
						l !== y && (l.removeInstance(f), y.addInstance(f));
						const $ = y.terminalInstances.indexOf(b) + (s === "after" ? 1 : 0);
						y.moveInstance(f, $, s);
					}
					unsplitInstance(f) {
						const b = this.getGroupForInstance(f);
						!b ||
							b.terminalInstances.length < 2 ||
							(b.removeInstance(f), this.createGroup(f));
					}
					joinInstances(f) {
						const b = this.getGroupForInstance(f[0]);
						if (b) {
							let $ = !0;
							for (let v = 1; v < b.terminalInstances.length; v++)
								if (b.terminalInstances.includes(f[v])) {
									$ = !1;
									break;
								}
							if (!$ && b.terminalInstances.length === f.length) return;
						}
						let s, l;
						for (const $ of f) {
							const v = this.getGroupForInstance($);
							if (v?.terminalInstances.length === 1) {
								(s = $), (l = v);
								break;
							}
						}
						l || (l = this.createGroup());
						const y = this.activeGroup === l;
						for (const $ of f) {
							if ($ === s) continue;
							const v = this.getGroupForInstance($);
							v && (v.removeInstance($), l.addInstance($));
						}
						this.setActiveInstance(f[0]),
							this.w.fire(),
							y || this.m.fire(this.activeGroup);
					}
					instanceIsSplit(f) {
						const b = this.getGroupForInstance(f);
						return b ? b.terminalInstances.length > 1 : !1;
					}
					getGroupForInstance(f) {
						return this.groups.find((b) => b.terminalInstances.includes(f));
					}
					getGroupLabels() {
						return this.groups
							.filter((f) => f.terminalInstances.length > 0)
							.map((f, b) => `${b + 1}: ${f.title ? f.title : ""}`);
					}
					updateVisibility() {
						const f = this.G.isViewVisible(h.$geb);
						this.groups.forEach((b, s) =>
							b.setVisible(f && s === this.activeGroupIndex),
						);
					}
				};
				(e.$6Uc = p),
					(e.$6Uc = p =
						Ne(
							[
								j(0, E.$6j),
								j(1, C.$Li),
								j(2, m.$HMb),
								j(3, d.$K1),
								j(4, n.$5X),
								j(5, r.$DJ),
							],
							p,
						));
			},
		),
		define(
			de[1952],
			he([1, 0, 76, 19, 9, 20, 5, 781, 25]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$U1c = e.$T1c = void 0),
					(e.$T1c = (0, C.$Mi)("IWorkspaceIdentityService"));
				let r = class {
					constructor(a, h) {
						(this.a = a), (this.b = h);
					}
					async getWorkspaceStateFolders(a) {
						const h = [];
						for (const c of this.a.getWorkspace().folders) {
							const n = await this.b.getEditSessionIdentifier(c, a);
							n &&
								h.push({
									resourceUri: c.uri.toString(),
									workspaceFolderIdentity: n,
								});
						}
						return h;
					}
					async matches(a, h) {
						const c = {},
							n = {};
						for (const f of a) n[f.workspaceFolderIdentity] = f.resourceUri;
						const g = new Map();
						for (const f of this.a.getWorkspace().folders) {
							const b = await this.b.getEditSessionIdentifier(f, h);
							b && g.set(f, b);
						}
						for (const [f, b] of g.entries()) {
							const s = n[b];
							if (s) {
								c[s] = f.uri.toString();
								continue;
							}
							let l = !1;
							for (const [y, $] of Object.entries(n))
								if (
									(await this.b.provideEditSessionIdentityMatch(f, b, y, h)) ===
									d.EditSessionIdentityMatch.Complete
								) {
									(c[$] = f.uri.toString()), (l = !0);
									break;
								}
							if (!l) return !1;
						}
						const p = (f) => {
								for (const b of Object.keys(c)) {
									const s = w.URI.parse(b);
									if ((0, i.$hh)(s, f)) {
										const l = c[b],
											y = (0, i.$ph)(s, f);
										if (y) return (0, i.$nh)(w.URI.parse(l), y);
									}
								}
								return f;
							},
							o = (f, b = 0) => {
								if (
									!f ||
									b > 200 ||
									f instanceof t.$Te ||
									f instanceof Uint8Array
								)
									return f;
								if (w.URI.isUri(f)) return p(f);
								if (Array.isArray(f))
									for (let s = 0; s < f.length; ++s) f[s] = o(f[s], b + 1);
								else
									for (const s in f)
										Object.hasOwnProperty.call(f, s) && (f[s] = o(f[s], b + 1));
								return f;
							};
						return o;
					}
				};
				(e.$U1c = r),
					(e.$U1c = r = Ne([j(0, m.$Vi), j(1, d.$O8)], r)),
					(0, E.$lK)(e.$T1c, r, E.InstantiationType.Delayed);
			},
		),
		define(
			de[4061],
			he([1, 0, 33, 6, 197, 10, 113, 22, 21, 32, 68, 1222, 150, 685, 1952]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$V1c = void 0);
				class g {
					async writeResource() {}
					async getAllResourceRefs() {
						return [];
					}
					async resolveResourceContent() {
						return null;
					}
				}
				class p {
					constructor() {
						(this.a = new i.$re()),
							(this.onDidChangeEnablement = this.a.event),
							(this.b = new i.$re()),
							(this.onDidChangeResourceEnablement = this.b.event);
					}
					isEnabled() {
						return !0;
					}
					canToggleEnablement() {
						return !0;
					}
					setEnablement(b) {}
					isResourceEnabled(b) {
						return !0;
					}
					setResourceEnablement(b, s) {}
					getResourceSyncStateVersion(b) {}
				}
				let o = class extends a.$$xc {
					constructor(b, s, l, y, $, v, S, I, T, P, k, L) {
						const D = new g(),
							M = new p();
						super(
							{ syncResource: h.SyncResource.WorkspaceState, profile: b },
							s,
							$,
							v,
							T,
							l,
							D,
							M,
							S,
							y,
							I,
							P,
						),
							(this.vb = k),
							(this.wb = L),
							(this.pb = 1);
					}
					async sync() {
						const b = new t.$Ce(),
							s = await this.vb.getWorkspaceStateFolders(b.token);
						if (!s.length) return;
						await this.I.flush();
						const l = this.I.keys(
							m.StorageScope.WORKSPACE,
							m.StorageTarget.USER,
						);
						if (!l.length) return;
						const y = {};
						l.forEach((v) => {
							const S = this.I.get(v, m.StorageScope.WORKSPACE);
							S && (y[v] = S);
						});
						const $ = { folders: s, storage: y, version: this.pb };
						await this.wb.write("workspaceState", (0, w.$hi)($));
					}
					async apply() {
						const b = this.wb.lastReadResources.get("editSessions")?.content,
							s = b ? JSON.parse(b).workspaceStateId : void 0,
							l = await this.wb.read("workspaceState", s);
						if (!l) return null;
						const y = (0, w.$ii)(l.content);
						if (!y)
							return (
								this.O.info(
									"Skipping initializing workspace state because remote workspace state does not exist.",
								),
								null
							);
						const $ = new t.$Ce(),
							v = await this.vb.matches(y.folders, $.token);
						if (!v)
							return (
								this.O.info(
									"Skipping initializing workspace state because remote workspace state does not match current workspace.",
								),
								null
							);
						const S = {};
						for (const I of Object.keys(y.storage)) S[I] = y.storage[I];
						if (Object.keys(S).length) {
							const I = [];
							for (const T of Object.keys(S))
								try {
									const P = (0, w.$ii)(S[T]);
									v(P),
										I.push({
											key: T,
											value: P,
											scope: m.StorageScope.WORKSPACE,
											target: m.StorageTarget.USER,
										});
								} catch {
									I.push({
										key: T,
										value: S[T],
										scope: m.StorageScope.WORKSPACE,
										target: m.StorageTarget.USER,
									});
								}
							this.I.storeAll(I, !0);
						}
						return this.wb.delete("workspaceState", l.ref), null;
					}
					tb(b, s, l, y) {
						throw new Error("Method not implemented.");
					}
					async qb(b, s, l, y, $) {
						return [];
					}
					rb(b, s) {
						throw new Error("Method not implemented.");
					}
					sb(b, s, l, y) {
						throw new Error("Method not implemented.");
					}
					async ub(b) {
						return !0;
					}
					async hasLocalData() {
						return !1;
					}
					async resolveContent(b) {
						return null;
					}
				};
				(e.$V1c = o),
					(e.$V1c = o =
						Ne(
							[
								j(4, d.$ll),
								j(5, C.$Ti),
								j(6, r.$km),
								j(7, E.$gj),
								j(8, m.$lq),
								j(9, u.$Vl),
								j(10, n.$T1c),
								j(11, c.$z1c),
							],
							o,
						));
			},
		),
		define(
			de[4062],
			he([
				1, 0, 3, 55, 30, 52, 11, 4, 685, 258, 22, 25, 9, 19, 76, 10, 84, 3318,
				20, 150, 32, 40, 57, 62, 41, 113, 224, 81, 63, 175, 8, 31, 349, 23, 179,
				53, 3059, 60, 89, 102, 239, 5, 4020, 3058, 12, 100, 33, 82, 781, 26,
				297, 530, 21, 260, 18, 14, 29, 143, 141, 142, 4061, 129, 327, 3060, 68,
				1952,
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
				X,
				Y,
				ie,
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
			) {
				"use strict";
				var ue;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$W1c = void 0),
					(0, f.$lK)(m.$A1c, O.$Q1c, f.InstantiationType.Delayed),
					(0, f.$lK)(m.$z1c, o.$P1c, f.InstantiationType.Delayed);
				const fe = {
						id: "_workbench.editSessions.actions.continueEditSession",
						title: (0, d.localize2)(5960, "Continue Working On..."),
						precondition: G.$xPb.notEqualsTo("0"),
						f1: !0,
					},
					me = {
						id: "_workbench.editSessions.actions.continueEditSession.openLocalFolder",
						title: (0, d.localize2)(5961, "Open In Local Folder"),
						category: m.$y1c,
						precondition: L.$Kj.and(A.$7Lb.toNegated(), G.$DPb),
					},
					ve = {
						id: "workbench.editSessions.actions.showOutputChannel",
						title: (0, d.localize2)(5962, "Show Log"),
						category: m.$y1c,
					},
					ge = {
						id: "workbench.action.continueOn.extensions",
						title: (0, d.localize)(5914, null),
					};
				(0, C.$4X)(
					class extends C.$3X {
						constructor() {
							super({ ...ge, f1: !1 });
						}
						async run(Te) {
							(
								await Te.get(re.$6Sb).openPaneComposite(
									se.$LQb,
									B.ViewContainerLocation.Sidebar,
									!0,
								)
							)
								?.getViewPaneContainer()
								?.search("@tag:continueOn");
						}
					},
				);
				const be = `[${(0, d.localize)(5915, null)}](command:${ve.id})`,
					Ce = { location: p.ProgressLocation.Window, type: "syncing" },
					Le = "editSessionId",
					Fe = "workbench.editSessions.continueOn";
				let Oe = class extends t.$1c {
					static {
						ue = this;
					}
					static {
						this.h = "applicationLaunchedViaContinueOn";
					}
					constructor(
						Ee,
						Ie,
						Be,
						Se,
						ke,
						Ue,
						qe,
						Ae,
						Me,
						De,
						Re,
						je,
						Ve,
						Ze,
						et,
						rt,
						ft,
						bt,
						nt,
						lt,
						ct,
						gt,
						ht,
						Rt,
						Nt,
						jt,
						ti,
						kt,
						hi,
					) {
						super(),
							(this.r = Ee),
							(this.s = Ie),
							(this.t = Be),
							(this.u = Se),
							(this.w = ke),
							(this.y = Ue),
							(this.z = qe),
							(this.C = Ae),
							(this.F = Me),
							(this.G = De),
							(this.H = Re),
							(this.I = je),
							(this.J = Ve),
							(this.L = Ze),
							(this.M = et),
							(this.N = rt),
							(this.O = ft),
							(this.P = bt),
							(this.Q = nt),
							(this.R = lt),
							(this.S = ct),
							(this.U = gt),
							(this.W = ht),
							(this.X = Rt),
							(this.Y = Nt),
							(this.Z = jt),
							(this.$ = ti),
							(this.ab = kt),
							(this.bb = hi),
							(this.a = []),
							(this.j = this.D(new t.$2c())),
							(this.m = new Set()),
							(this.b = m.$K1c.bindTo(this.P)),
							(this.g = m.$F1c.bindTo(this.P)),
							this.g.set(!1),
							this.I["editSessions.store"]?.url &&
								((this.q = new pe.$x1c(
									h.URI.parse(this.I["editSessions.store"].url),
									this.I,
									this.Z,
									this.F,
									this.G,
									this.s,
									this.S,
								)),
								(this.r.storeClient = this.q),
								(this.n = new le.$V1c(
									this.$.defaultProfile,
									void 0,
									this.q,
									this.F,
									this.s,
									this.G,
									this.w,
									this.J,
									this.S,
									this.ab,
									this.bb,
									this.r,
								)),
								this.cb(),
								this.gb(),
								this.fb(),
								this.rb(),
								this.D(
									this.s.registerProvider(q.$S1c.SCHEMA, new q.$S1c(this.r)),
								),
								this.R.onWillShutdown((Kt) => {
									Kt.reason !== E.ShutdownReason.RELOAD &&
										this.r.isSignedIn &&
										this.J.getValue(
											"workbench.experimental.cloudChanges.autoStore",
										) === "onShutdown" &&
										!V.$r &&
										Kt.join(this.eb(), {
											id: "autoStoreWorkingChanges",
											label: (0, d.localize)(5916, null),
										});
								}),
								this.D(this.r.onDidSignIn(() => this.db())),
								this.D(this.r.onDidSignOut(() => this.db())));
					}
					async cb() {
						const Ee =
							this.J.getValue("workbench.cloudChanges.autoResume") ===
							"onReload";
						if (this.G.editSessionId !== void 0)
							this.F.info(
								`Resuming cloud changes, reason: found editSessionId ${this.G.editSessionId} in environment service...`,
							),
								await this.t.withProgress(
									Ce,
									async (Ie) =>
										await this.resumeEditSession(
											this.G.editSessionId,
											void 0,
											void 0,
											void 0,
											Ie,
										).finally(() => (this.G.editSessionId = void 0)),
								);
						else if (Ee && this.r.isSignedIn)
							this.F.info(
								"Resuming cloud changes, reason: cloud changes enabled...",
							),
								await this.t.withProgress(
									Ce,
									async (Ie) =>
										await this.resumeEditSession(
											void 0,
											!0,
											void 0,
											void 0,
											Ie,
										),
								);
						else if (Ee) {
							const Ie = this.S.getBoolean(
								ue.h,
								ne.StorageScope.APPLICATION,
								!1,
							);
							this.F.info(
								`Prompting to enable cloud changes, has application previously launched from Continue On flow: ${Ie}`,
							);
							const Be = () => {
								this.F.info(
									"Showing badge to enable cloud changes in accounts menu...",
								),
									this.db(),
									this.g.set(!0);
								const Se = this.r.onDidSignIn(async () => {
									Se.dispose(),
										this.F.info(
											"Showing badge to enable cloud changes in accounts menu succeeded, resuming cloud changes...",
										),
										await this.t.withProgress(
											Ce,
											async (ke) =>
												await this.resumeEditSession(
													void 0,
													!0,
													void 0,
													void 0,
													ke,
												),
										),
										this.S.remove(ue.h, ne.StorageScope.APPLICATION),
										(this.G.continueOn = void 0);
								});
							};
							this.G.continueOn !== void 0 && !this.r.isSignedIn && Ie === !1
								? (this.S.store(
										ue.h,
										!0,
										ne.StorageScope.APPLICATION,
										ne.StorageTarget.MACHINE,
									),
									this.F.info("Prompting to enable cloud changes..."),
									await this.r.initialize("read"),
									this.r.isSignedIn
										? (this.F.info(
												"Prompting to enable cloud changes succeeded, resuming cloud changes...",
											),
											await this.t.withProgress(
												Ce,
												async (Se) =>
													await this.resumeEditSession(
														void 0,
														!0,
														void 0,
														void 0,
														Se,
													),
											))
										: Be())
								: !this.r.isSignedIn && Ie === !0 && Be();
						} else this.F.debug("Auto resuming cloud changes disabled.");
					}
					db() {
						if (this.r.isSignedIn) return this.j.clear();
						const Ee = new ee.$8qc(1, () => (0, d.localize)(5917, null));
						this.j.value = this.U.showAccountsActivity({ badge: Ee });
					}
					async eb() {
						const Ee = new K.$Ce();
						await this.t.withProgress(
							{
								location: p.ProgressLocation.Window,
								type: "syncing",
								title: (0, d.localize)(5918, null),
							},
							async () => this.storeEditSession(!1, Ee.token),
							() => {
								Ee.cancel(), Ee.dispose();
							},
						);
					}
					fb() {
						const Ee = w.$Io
							.as(B.Extensions.ViewContainersRegistry)
							.registerViewContainer(
								{
									id: m.$G1c,
									title: m.$I1c,
									ctorDescriptor: new z.$Ji(F.$ZSb, [
										m.$G1c,
										{ mergeViewWithContainerWhenSingleView: !0 },
									]),
									icon: m.$J1c,
									hideIfEmpty: !0,
								},
								B.ViewContainerLocation.Sidebar,
								{ doNotRegisterOpenCommand: !0 },
							);
						this.D(this.H.createInstance(H.$R1c, Ee));
					}
					gb() {
						this.jb(), this.kb(), this.lb(), this.tb(), this.ib(), this.hb();
					}
					hb() {
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super(ve);
									}
									run(Ie, ...Be) {
										Ie.get(Y.$o8).showChannel(m.$O1c);
									}
								},
							),
						);
					}
					ib() {
						const Ee = this;
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super({
											id: "workbench.editSessions.actions.showEditSessions",
											title: (0, d.localize2)(5963, "Show Cloud Changes"),
											category: m.$y1c,
											f1: !0,
										});
									}
									async run(Be) {
										Ee.b.set(!0), await Be.get(U.$HMb).openView(m.$H1c);
									}
								},
							),
						);
					}
					jb() {
						const Ee = this;
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super(fe);
									}
									async run(Be, Se, ke) {
										let Ue = Se;
										if (!ke && !Ue && ((ke = await Ee.ub()), !ke)) {
											Ee.w.publicLog2("continueOn.editSessions.pick.outcome", {
												outcome: "noSelection",
											});
											return;
										}
										const qe = await Ee.qb();
										let Ae;
										if (qe) {
											Ee.w.publicLog2("continueOn.editSessions.store");
											const Me = new K.$Ce();
											try {
												Ae = await Ee.t.withProgress(
													{
														location: p.ProgressLocation.Notification,
														cancellable: !0,
														type: "syncing",
														title: (0, d.localize)(5919, null),
													},
													async () => {
														const De = await Ee.storeEditSession(!1, Me.token);
														return (
															De !== void 0
																? Ee.w.publicLog2(
																		"continueOn.editSessions.store.outcome",
																		{
																			outcome: "storeSucceeded",
																			hashedId: (0, m.$N1c)(De),
																		},
																	)
																: Ee.w.publicLog2(
																		"continueOn.editSessions.store.outcome",
																		{ outcome: "storeSkipped" },
																	),
															De
														);
													},
													() => {
														Me.cancel(),
															Me.dispose(),
															Ee.w.publicLog2(
																"continueOn.editSessions.store.outcome",
																{ outcome: "storeCancelledByUser" },
															);
													},
												);
											} catch (De) {
												throw (
													(Ee.w.publicLog2(
														"continueOn.editSessions.store.outcome",
														{ outcome: "storeFailed" },
													),
													De)
												);
											}
										}
										if (((Ue = ke ? await Ee.vb(ke) : Ue), Ue !== void 0))
											if (Ae !== void 0 && Ue !== "noDestinationUri") {
												const Me = encodeURIComponent(Ae);
												(Ue = Ue.with({
													query:
														Ue.query.length > 0
															? Ue.query + `&${Le}=${Me}&continueOn=1`
															: `${Le}=${Me}&continueOn=1`,
												})),
													Ee.F.info(`Opening ${Ue.toString()}`),
													await Ee.u.open(Ue, { openExternal: !0 });
											} else
												!qe && Ue !== "noDestinationUri"
													? (Ee.F.info(`Opening ${Ue.toString()}`),
														await Ee.u.open(Ue, { openExternal: !0 }))
													: Ae === void 0 &&
														qe &&
														Ee.F.warn(
															`Failed to store working changes when invoking ${fe.id}.`,
														);
									}
								},
							),
						);
					}
					kb() {
						const Ee = this;
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super({
											id: "workbench.editSessions.actions.resumeLatest",
											title: (0, d.localize2)(
												5964,
												"Resume Latest Changes from Cloud",
											),
											category: m.$y1c,
											f1: !0,
										});
									}
									async run(Be, Se, ke) {
										await Ee.t.withProgress(
											{ ...Ce, title: be },
											async () => await Ee.resumeEditSession(Se, void 0, ke),
										);
									}
								},
							),
						),
							this.D(
								(0, C.$4X)(
									class extends C.$3X {
										constructor() {
											super({
												id: "workbench.editSessions.actions.resumeFromSerializedPayload",
												title: (0, d.localize2)(
													5965,
													"Resume Changes from Serialized Data",
												),
												category: "Developer",
												f1: !0,
											});
										}
										async run(Be, Se) {
											const ke = await Ee.N.input({
												prompt: "Enter serialized data",
											});
											ke &&
												Ee.r.lastReadResources.set("editSessions", {
													content: ke,
													ref: "",
												}),
												await Ee.t.withProgress(
													{ ...Ce, title: be },
													async () =>
														await Ee.resumeEditSession(
															Se,
															void 0,
															void 0,
															void 0,
															void 0,
															ke,
														),
												);
										}
									},
								),
							);
					}
					lb() {
						const Ee = this;
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super({
											id: "workbench.editSessions.actions.storeCurrent",
											title: (0, d.localize2)(
												5966,
												"Store Working Changes in Cloud",
											),
											category: m.$y1c,
											f1: !0,
										});
									}
									async run(Be) {
										const Se = new K.$Ce();
										await Ee.t.withProgress(
											{
												location: p.ProgressLocation.Notification,
												title: (0, d.localize)(5920, null),
											},
											async () => {
												Ee.w.publicLog2("editSessions.store"),
													await Ee.storeEditSession(!0, Se.token);
											},
											() => {
												Se.cancel(), Se.dispose();
											},
										);
									}
								},
							),
						);
					}
					async resumeEditSession(Ee, Ie, Be, Se, ke, Ue) {
						if (
							(await this.X.getEnvironment(),
							this.L.getWorkbenchState() === a.WorkbenchState.EMPTY ||
								(this.F.info(
									Ee !== void 0
										? `Resuming changes from cloud with ref ${Ee}...`
										: "Checking for pending cloud changes...",
								),
								Ie && !(await this.r.initialize("read", !0))))
						)
							return;
						this.w.publicLog2("editSessions.resume"),
							performance.mark("code/willResumeEditSessionFromIdentifier"),
							ke?.report({ message: (0, d.localize)(5921, null) });
						const qe = Ue
							? { content: Ue, ref: "" }
							: await this.r.read("editSessions", Ee);
						if (!qe) {
							Ee === void 0 && !Ie
								? this.z.info((0, d.localize)(5922, null))
								: Ee !== void 0 && this.z.warn((0, d.localize)(5923, null, Ee)),
								this.F.info(
									Ee !== void 0
										? `Aborting resuming changes from cloud as no edit session content is available to be applied from ref ${Ee}.`
										: "Aborting resuming edit session as no edit session content is available to be applied",
								);
							return;
						}
						ke?.report({ message: be });
						const Ae = JSON.parse(qe.content);
						if (((Ee = qe.ref), Ae.version > m.$B1c)) {
							this.z.error((0, d.localize)(5924, null, this.I.nameLong)),
								this.w.publicLog2("editSessions.resume.outcome", {
									hashedId: (0, m.$N1c)(Ee),
									outcome: "clientUpdateNeeded",
								});
							return;
						}
						try {
							const { changes: Me, conflictingChanges: De } = await this.mb(
								Ae,
								Ee,
								Be,
								Se,
							);
							if (Me.length === 0) return;
							if (De.length > 0) {
								const { confirmed: Re } = await this.C.confirm({
									type: l.Severity.Warning,
									message:
										De.length > 1
											? (0, d.localize)(5925, null, De.length)
											: (0, d.localize)(5926, null, (0, c.$kh)(De[0].uri)),
									detail:
										De.length > 1 ? (0, y.$JO)(De.map((je) => je.uri)) : void 0,
								});
								if (!Re) return;
							}
							for (const { uri: Re, type: je, contents: Ve } of Me)
								je === m.ChangeType.Addition
									? await this.s.writeFile(Re, (0, m.$M1c)(Ae.version, Ve))
									: je === m.ChangeType.Deletion &&
										(await this.s.exists(Re)) &&
										(await this.s.del(Re));
							await this.n?.apply(!1, {}),
								this.F.info(
									`Deleting edit session with ref ${Ee} after successfully applying it to current workspace...`,
								),
								await this.r.delete("editSessions", Ee),
								this.F.info(`Deleted edit session with ref ${Ee}.`),
								this.w.publicLog2("editSessions.resume.outcome", {
									hashedId: (0, m.$N1c)(Ee),
									outcome: "resumeSucceeded",
								});
						} catch (Me) {
							this.F.error(
								"Failed to resume edit session, reason: ",
								Me.toString(),
							),
								this.z.error((0, d.localize)(5927, null));
						}
						performance.mark("code/didResumeEditSessionFromIdentifier");
					}
					async mb(Ee, Ie, Be = !1, Se = !1) {
						const ke = [],
							Ue = [],
							qe = this.L.getWorkspace().folders,
							Ae = new K.$Ce();
						for (const Me of Ee.folders) {
							let De;
							if (Me.canonicalIdentity)
								for (const je of qe) {
									const Ve = await this.M.getEditSessionIdentifier(
										je,
										Ae.token,
									);
									if (
										(this.F.info(
											`Matching identity ${Ve} against edit session folder identity ${Me.canonicalIdentity}...`,
										),
										(0, J.$zo)(Ve, Me.canonicalIdentity) || Be)
									) {
										De = je;
										break;
									}
									if (Ve !== void 0) {
										const Ze = await this.M.provideEditSessionIdentityMatch(
											je,
											Ve,
											Me.canonicalIdentity,
											Ae.token,
										);
										if (Ze === W.EditSessionIdentityMatch.Complete) {
											De = je;
											break;
										} else if (
											Ze === W.EditSessionIdentityMatch.Partial &&
											this.J.getValue(
												"workbench.experimental.cloudChanges.partialMatches.enabled",
											) === !0
										)
											if (!Se)
												this.z.prompt(
													l.Severity.Info,
													(0, d.localize)(5928, null),
													[
														{
															label: (0, d.localize)(5929, null),
															run: () =>
																this.resumeEditSession(Ie, !1, void 0, !0),
														},
													],
												);
											else {
												De = je;
												break;
											}
									}
								}
							else De = qe.find((je) => je.name === Me.name);
							if (!De)
								return (
									this.F.info(
										`Skipping applying ${Me.workingChanges.length} changes from edit session with ref ${Ie} as no matching workspace folder was found.`,
									),
									{
										changes: [],
										conflictingChanges: [],
										contributedStateHandlers: [],
									}
								);
							const Re = new Set();
							for (const je of this.y.repositories)
								je.provider.rootUri !== void 0 &&
									this.L.getWorkspaceFolder(je.provider.rootUri)?.name ===
										Me.name &&
									this.ob(je).forEach((Ze) => Re.add(Ze.toString()));
							for (const je of Me.workingChanges) {
								const Ve = (0, c.$nh)(De.uri, je.relativeFilePath);
								ke.push({ uri: Ve, type: je.type, contents: je.contents }),
									(await this.nb(Re, Ve, je)) &&
										Ue.push({ uri: Ve, type: je.type, contents: je.contents });
							}
						}
						return { changes: ke, conflictingChanges: Ue };
					}
					async nb(Ee, Ie, Be) {
						if (!Ee.has(Ie.toString())) return !1;
						const { contents: Se, type: ke } = Be;
						switch (ke) {
							case m.ChangeType.Addition: {
								const [Ue, qe] = await Promise.all([
									(0, ie.$ojb)(Se),
									(0, ie.$ojb)((0, n.$cf)((await this.s.readFile(Ie)).value)),
								]);
								return Ue !== qe;
							}
							case m.ChangeType.Deletion:
								return await this.s.exists(Ie);
							default:
								throw new Error("Unhandled change type.");
						}
					}
					async storeEditSession(Ee, Ie) {
						const Be = [];
						let Se = 0,
							ke = !1;
						await this.W.saveAll();
						for (const qe of this.y.repositories) {
							const Ae = this.ob(qe),
								Me = [],
								{ rootUri: De } = qe.provider,
								Re = De ? this.L.getWorkspaceFolder(De) : void 0;
							let je = Re?.name;
							for (const Ze of Ae) {
								const et = this.L.getWorkspaceFolder(Ze);
								if (!et) {
									this.F.info(
										`Skipping working change ${Ze.toString()} as no associated workspace folder was found.`,
									);
									continue;
								}
								await this.M.onWillCreateEditSessionIdentity(et, Ie),
									(je = je ?? et.name);
								const rt = (0, c.$ph)(et.uri, Ze) ?? Ze.path;
								try {
									if (!(await this.s.stat(Ze)).isFile) continue;
								} catch {}
								if (((ke = !0), await this.s.exists(Ze))) {
									const ft = (0, n.$cf)((await this.s.readFile(Ze)).value);
									if (((Se += ft.length), Se > this.r.SIZE_LIMIT)) {
										this.z.error((0, d.localize)(5930, null));
										return;
									}
									Me.push({
										type: m.ChangeType.Addition,
										fileType: m.FileType.File,
										contents: ft,
										relativeFilePath: rt,
									});
								} else
									Me.push({
										type: m.ChangeType.Deletion,
										fileType: m.FileType.File,
										contents: void 0,
										relativeFilePath: rt,
									});
							}
							let Ve;
							Re != null &&
								(Ve = await this.M.getEditSessionIdentifier(Re, Ie)),
								Be.push({
									workingChanges: Me,
									name: je ?? "",
									canonicalIdentity: Ve ?? void 0,
									absoluteUri: Re?.uri.toString(),
								});
						}
						if ((await this.n?.sync(null, {}), !ke)) {
							this.F.info(
								"Skipped storing working changes in the cloud as there are no edits to store.",
							),
								Ee && this.z.info((0, d.localize)(5931, null));
							return;
						}
						const Ue = {
							folders: Be,
							version: 2,
							workspaceStateId:
								this.r.lastWrittenResources.get("workspaceState")?.ref,
						};
						try {
							this.F.info("Storing edit session...");
							const qe = await this.r.write("editSessions", Ue);
							return this.F.info(`Stored edit session with ref ${qe}.`), qe;
						} catch (qe) {
							if (
								(this.F.error(
									"Failed to store edit session, reason: ",
									qe.toString(),
								),
								qe instanceof b.$ZRb)
							)
								switch (qe.code) {
									case b.UserDataSyncErrorCode.TooLarge:
										this.w.publicLog2("editSessions.upload.failed", {
											reason: "TooLarge",
										}),
											this.z.error((0, d.localize)(5932, null));
										break;
									default:
										this.w.publicLog2("editSessions.upload.failed", {
											reason: "unknown",
										}),
											this.z.error((0, d.localize)(5933, null));
										break;
								}
						}
					}
					ob(Ee) {
						return Ee.provider.groups.reduce(
							(Ie, Be) => (
								Be.resources.forEach((Se) => Ie.add(Se.sourceUri)), Ie
							),
							new Set(),
						);
					}
					pb() {
						for (const Ee of this.y.repositories)
							if (this.ob(Ee).size > 0) return !0;
						return !1;
					}
					async qb() {
						if (this.r.isSignedIn) return this.pb();
						if (this.J.getValue(Fe) === "off")
							return (
								this.w.publicLog2("continueOn.editSessions.canStore.outcome", {
									outcome: "disabledEditSessionsViaSetting",
								}),
								!1
							);
						if (this.pb()) {
							const Ee = new t.$Zc(),
								Ie = Ee.add(this.N.createQuickPick());
							(Ie.placeholder = (0, d.localize)(5934, null)),
								(Ie.ok = !1),
								(Ie.ignoreFocusOut = !0);
							const Be = { label: (0, d.localize)(5935, null) },
								Se = { label: (0, d.localize)(5936, null) };
							Ie.items = [Be, Se];
							const ke = await new Promise((qe, Ae) => {
								Ee.add(
									Ie.onDidAccept(() => {
										qe(Ie.selectedItems[0] === Be), Ee.dispose();
									}),
								),
									Ee.add(
										Ie.onDidHide(() => {
											Ae(new Q.$9()), Ee.dispose();
										}),
									),
									Ie.show();
							});
							if (!ke)
								return (
									this.w.publicLog2(
										"continueOn.editSessions.canStore.outcome",
										{ outcome: "didNotEnableEditSessionsWhenPrompted" },
									),
									ke
								);
							const Ue = await this.r.initialize("write");
							return (
								Ue ||
									this.w.publicLog2(
										"continueOn.editSessions.canStore.outcome",
										{ outcome: "didNotEnableEditSessionsWhenPrompted" },
									),
								Ue
							);
						}
						return !1;
					}
					rb() {
						Ke.setHandler((Ee) => {
							const Ie = [];
							for (const Be of Ee)
								if (
									(0, R.$t2)(Be.description, "contribEditSessions") &&
									Array.isArray(Be.value)
								)
									for (const Se of Be.value) {
										const ke = C.$ZX.getCommand(Se.command);
										if (!ke) return;
										const Ue = ke.icon,
											qe =
												typeof ke.title == "string" ? ke.title : ke.title.value,
											Ae = L.$Kj.deserialize(Se.when);
										Ie.push(
											new He(
												X.ThemeIcon.isThemeIcon(Ue) ? `$(${Ue.id}) ${qe}` : qe,
												ke.id,
												ke.source?.title,
												Ae,
												Se.documentation,
											),
										),
											Se.qualifiedName &&
												this.sb(
													ke.id,
													Se.qualifiedName,
													Se.category ?? ke.category,
													Ae,
													Se.remoteGroup,
												);
									}
							this.a = Ie;
						});
					}
					sb(Ee, Ie, Be, Se, ke) {
						const Ue = {
							id: `${fe.id}.${Ee}`,
							title: { original: Ie, value: Ie },
							category:
								typeof Be == "string" ? { original: Be, value: Be } : Be,
							precondition: Se,
							f1: !0,
						};
						this.m.has(Ue.id) ||
							(this.m.add(Ue.id),
							this.D(
								(0, C.$4X)(
									class extends C.$3X {
										constructor() {
											super(Ue);
										}
										async run(Ae) {
											return Ae.get(D.$ek).executeCommand(fe.id, void 0, Ee);
										}
									},
								),
							),
							ke !== void 0 &&
								C.$ZX.appendMenuItem(C.$XX.StatusBarRemoteIndicatorMenu, {
									group: ke,
									command: Ue,
									when: Ue.precondition,
								}));
					}
					tb() {
						const Ee = this;
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super(me);
									}
									async run(Be) {
										const Se = await Ee.Q.showOpenDialog({
											title: (0, d.localize)(5937, null),
											canSelectFolders: !0,
											canSelectMany: !1,
											canSelectFiles: !1,
											availableFileSystems: [N.Schemas.file],
										});
										return Se?.length !== 1
											? void 0
											: h.URI.from({
													scheme: Ee.I.urlProtocol,
													authority: N.Schemas.file,
													path: Se[0].path,
												});
									}
								},
							),
						),
							(0, M.$E8)(this.L.getWorkspace()) !== void 0 &&
								V.$p &&
								this.sb(
									me.id,
									(0, d.localize)(5938, null),
									void 0,
									me.precondition,
									void 0,
								);
					}
					async ub() {
						const Ee = new t.$Zc(),
							Ie = Ee.add(this.N.createQuickPick({ useSeparators: !0 })),
							Be =
								this.L.getWorkbenchState() === a.WorkbenchState.FOLDER
									? this.L.getWorkspace().folders[0].name
									: this.L.getWorkspace()
											.folders.map((ke) => ke.name)
											.join(", ");
						(Ie.placeholder = (0, d.localize)(5939, null, `'${Be}'`)),
							(Ie.items = this.wb()),
							this.Y.onDidChangeExtensions(() => {
								Ie.items = this.wb();
							});
						const Se = await new Promise((ke, Ue) => {
							Ee.add(
								Ie.onDidHide(() => {
									Ee.dispose(), ke(void 0);
								}),
							),
								Ee.add(
									Ie.onDidAccept((qe) => {
										const Ae = Ie.activeItems[0].command;
										Ae === ge.id
											? this.O.executeCommand(ge.id)
											: (ke(Ae), Ie.hide());
									}),
								),
								Ie.show(),
								Ee.add(
									Ie.onDidTriggerItemButton(async (qe) => {
										if (qe.item.documentation !== void 0) {
											const Ae = h.URI.isUri(qe.item.documentation)
												? h.URI.parse(qe.item.documentation)
												: await this.O.executeCommand(qe.item.documentation);
											this.u.open(Ae, { openExternal: !0 });
										}
									}),
								);
						});
						return Ie.dispose(), Se;
					}
					async vb(Ee) {
						try {
							const Ie = await this.O.executeCommand(Ee);
							if (Ie === void 0)
								return (
									this.w.publicLog2("continueOn.openDestination.outcome", {
										selection: Ee,
										outcome: "noDestinationUri",
									}),
									"noDestinationUri"
								);
							if (h.URI.isUri(Ie))
								return (
									this.w.publicLog2("continueOn.openDestination.outcome", {
										selection: Ee,
										outcome: "resolvedUri",
									}),
									Ie
								);
							this.w.publicLog2("continueOn.openDestination.outcome", {
								selection: Ee,
								outcome: "invalidDestination",
							});
							return;
						} catch (Ie) {
							Ie instanceof Q.$9
								? this.w.publicLog2("continueOn.openDestination.outcome", {
										selection: Ee,
										outcome: "cancelled",
									})
								: this.w.publicLog2("continueOn.openDestination.outcome", {
										selection: Ee,
										outcome: "unknownError",
									});
							return;
						}
					}
					wb() {
						const Ee = [...this.a].filter(
							(Be) => Be.when === void 0 || this.P.contextMatchesRules(Be.when),
						);
						return (
							(0, M.$E8)(this.L.getWorkspace()) !== void 0 &&
								V.$p &&
								Ee.push(
									new He(
										"$(folder) " + (0, d.localize)(5940, null),
										me.id,
										(0, d.localize)(5941, null),
									),
								),
							Ee.sort((Be, Se) => Be.label.localeCompare(Se.label)).concat(
								{ type: "separator" },
								new He(ge.title, ge.id),
							)
						);
					}
				};
				(e.$W1c = Oe),
					(e.$W1c =
						Oe =
						ue =
							Ne(
								[
									j(0, m.$z1c),
									j(1, u.$ll),
									j(2, p.$8N),
									j(3, v.$7rb),
									j(4, s.$km),
									j(5, r.$c7),
									j(6, l.$4N),
									j(7, y.$GO),
									j(8, m.$A1c),
									j(9, S.$Ti),
									j(10, x.$Li),
									j(11, $.$Bk),
									j(12, g.$gj),
									j(13, a.$Vi),
									j(14, W.$O8),
									j(15, P.$DJ),
									j(16, D.$ek),
									j(17, L.$6j),
									j(18, y.$IO),
									j(19, E.$n6),
									j(20, ne.$lq),
									j(21, ee.$7qc),
									j(22, _.$IY),
									j(23, Z.$$m),
									j(24, R.$q2),
									j(25, ae.$Aq),
									j(26, oe.$Xl),
									j(27, $e.$Vl),
									j(28, ye.$T1c),
								],
								Oe,
							));
				const xe = X.ThemeIcon.asClassName(te.$ak.info);
				class He {
					constructor(Ee, Ie, Be, Se, ke) {
						(this.label = Ee),
							(this.command = Ie),
							(this.description = Be),
							(this.when = Se),
							(this.documentation = ke),
							ke !== void 0 &&
								(this.buttons = [
									{ iconClass: xe, tooltip: (0, d.localize)(5942, null) },
								]);
					}
				}
				const Ke = k.$n2.registerExtensionPoint({
					extensionPoint: "continueEditSession",
					jsonSchema: {
						description: (0, d.localize)(5943, null),
						type: "array",
						items: {
							type: "object",
							properties: {
								command: {
									description: (0, d.localize)(5944, null),
									type: "string",
								},
								group: {
									description: (0, d.localize)(5945, null),
									type: "string",
								},
								qualifiedName: {
									description: (0, d.localize)(5946, null),
									type: "string",
								},
								description: {
									description: (0, d.localize)(5947, null),
									type: "string",
								},
								remoteGroup: {
									description: (0, d.localize)(5948, null),
									type: "string",
								},
								when: {
									description: (0, d.localize)(5949, null),
									type: "string",
								},
							},
							required: ["command"],
						},
					},
				});
				w.$Io
					.as(i.Extensions.Workbench)
					.registerWorkbenchContribution(Oe, E.LifecyclePhase.Restored),
					w.$Io
						.as(T.$No.Configuration)
						.registerConfiguration({
							...I.$v6,
							properties: {
								"workbench.experimental.cloudChanges.autoStore": {
									enum: ["onShutdown", "off"],
									enumDescriptions: [
										(0, d.localize)(5950, null),
										(0, d.localize)(5951, null),
									],
									type: "string",
									tags: ["experimental", "usesOnlineServices"],
									default: "off",
									markdownDescription: (0, d.localize)(5952, null),
								},
								"workbench.cloudChanges.autoResume": {
									enum: ["onReload", "off"],
									enumDescriptions: [
										(0, d.localize)(5953, null),
										(0, d.localize)(5954, null),
									],
									type: "string",
									tags: ["usesOnlineServices"],
									default: "onReload",
									markdownDescription: (0, d.localize)(5955, null),
								},
								"workbench.cloudChanges.continueOn": {
									enum: ["prompt", "off"],
									enumDescriptions: [
										(0, d.localize)(5956, null),
										(0, d.localize)(5957, null),
									],
									type: "string",
									tags: ["usesOnlineServices"],
									default: "prompt",
									markdownDescription: (0, d.localize)(5958, null),
								},
								"workbench.experimental.cloudChanges.partialMatches.enabled": {
									type: "boolean",
									tags: ["experimental", "usesOnlineServices"],
									default: !1,
									markdownDescription: (0, d.localize)(5959, null),
								},
							},
						});
			},
		),
		define(
			de[1059],
			he([
				1, 0, 6, 3, 273, 23, 9, 10, 20, 211, 438, 349, 21, 25, 174, 282, 78, 68,
				19, 12, 22, 15,
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
					(e.$ISb =
						e.$HSb =
						e.$GSb =
						e.$FSb =
						e.$ESb =
						e.$DSb =
						e.$CSb =
						e.$BSb =
						e.$ASb =
						e.$zSb =
						e.$ySb =
							void 0),
					(e.$ySb = "security.workspace.trust.enabled"),
					(e.$zSb = "security.workspace.trust.startupPrompt"),
					(e.$ASb = "security.workspace.trust.banner"),
					(e.$BSb = "security.workspace.trust.untrustedFiles"),
					(e.$CSb = "security.workspace.trust.emptyWindow"),
					(e.$DSb = "extensions.supportUntrustedWorkspaces"),
					(e.$ESb = "content.trust.model.key");
				class y {
					constructor(k, L, D) {
						(this.a = k), (this.b = L), (this.c = D);
					}
					get folders() {
						return this.a.folders.map((k, L) => ({
							index: k.index,
							name: k.name,
							toResource: k.toResource,
							uri: this.b[L],
						}));
					}
					get transient() {
						return this.a.transient;
					}
					get configuration() {
						return this.c ?? this.a.configuration;
					}
					get id() {
						return this.a.id;
					}
				}
				e.$FSb = y;
				let $ = class extends i.$1c {
					constructor(k, L) {
						super(), (this.a = k), (this.b = L);
					}
					isWorkspaceTrustEnabled() {
						return this.b.disableWorkspaceTrust
							? !1
							: !!this.a.getValue(e.$ySb);
					}
				};
				(e.$GSb = $), (e.$GSb = $ = Ne([j(0, d.$gj), j(1, p.$r8)], $));
				let v = class extends i.$1c {
					constructor(k, L, D, M, N, A, R, O) {
						super(),
							(this.C = k),
							(this.F = L),
							(this.G = D),
							(this.H = M),
							(this.I = N),
							(this.J = A),
							(this.L = R),
							(this.M = O),
							(this.a = e.$ESb),
							(this.j = this.D(new t.$re())),
							(this.onDidChangeTrust = this.j.event),
							(this.m = this.D(new t.$re())),
							(this.onDidChangeTrustedFolders = this.m.event),
							(this.n = []),
							(this.r = !1),
							(this.q = this.J.getWorkspace()),
							({ promise: this.b, resolve: this.c } = (0, l.$Fh)()),
							({ promise: this.g, resolve: this.h } = (0, l.$Fh)()),
							(this.y = new T(b.$r && this.ab() ? void 0 : this.G)),
							(this.z = this.D(new I())),
							(this.t = this.R()),
							(this.s = this.W()),
							this.N(),
							this.O();
					}
					N() {
						this.Q()
							.then(async () => {
								(this.r = !0), await this.X();
							})
							.finally(() => {
								this.c(), this.I.remoteAuthority || this.h();
							}),
							this.I.remoteAuthority &&
								this.F.resolveAuthority(this.I.remoteAuthority)
									.then(async (k) => {
										(this.w = k),
											await this.M.activateProvider(E.Schemas.vscodeRemote),
											await this.X();
									})
									.finally(() => {
										this.h();
									}),
							this.ab() &&
								this.g.then(() => {
									this.y.isEmptyWorkspaceTrusted === void 0 &&
										(this.y.isEmptyWorkspaceTrusted =
											this.isWorkspaceTrusted());
								});
					}
					O() {
						this.D(
							this.J.onDidChangeWorkspaceFolders(async () => await this.X()),
						),
							this.D(
								this.G.onDidChangeValue(
									h.StorageScope.APPLICATION,
									this.a,
									this.D(new i.$Zc()),
								)(async () => {
									JSON.stringify(this.t) !== JSON.stringify(this.R()) &&
										((this.t = this.R()), this.m.fire(), await this.X());
								}),
							);
					}
					async P(k) {
						let L = k;
						if (this.I.remoteAuthority && k.scheme === E.Schemas.vscodeRemote)
							L = await this.F.getCanonicalURI(k);
						else if (k.scheme === "vscode-vfs") {
							const D = k.authority.indexOf("+");
							D !== -1 && (L = k.with({ authority: k.authority.substr(0, D) }));
						}
						return L.with({ query: null, fragment: null });
					}
					async Q() {
						const k = [];
						if (
							(this.I.filesToOpenOrCreate &&
								k.push(...this.I.filesToOpenOrCreate),
							this.I.filesToDiff && k.push(...this.I.filesToDiff),
							this.I.filesToMerge && k.push(...this.I.filesToMerge),
							k.length)
						) {
							const N = k.filter((R) => !!R.fileUri).map((R) => R.fileUri),
								A = await Promise.all(N.map((R) => this.P(R)));
							this.n.push(
								...A.filter((R) =>
									this.n.every((O) => !this.H.extUri.isEqual(R, O)),
								),
							);
						}
						const L = this.J.getWorkspace().folders.map((N) => N.uri),
							D = await Promise.all(L.map((N) => this.P(N)));
						let M = this.J.getWorkspace().configuration;
						M && (0, c.$ej)(M, this.I) && (M = await this.P(M)),
							(this.q = new y(this.J.getWorkspace(), D, M));
					}
					R() {
						const k = this.G.get(this.a, h.StorageScope.APPLICATION);
						let L;
						try {
							k && (L = JSON.parse(k));
						} catch {}
						return (
							L || (L = { uriTrustInfo: [] }),
							L.uriTrustInfo || (L.uriTrustInfo = []),
							(L.uriTrustInfo = L.uriTrustInfo.map((D) => ({
								uri: C.URI.revive(D.uri),
								trusted: D.trusted,
							}))),
							(L.uriTrustInfo = L.uriTrustInfo.filter((D) => D.trusted)),
							L
						);
					}
					async S() {
						this.G.store(
							this.a,
							JSON.stringify(this.t),
							h.StorageScope.APPLICATION,
							h.StorageTarget.MACHINE,
						),
							this.m.fire(),
							await this.X();
					}
					U() {
						const k = this.q.folders.map((D) => D.uri),
							L = this.q.configuration;
						return L && (0, c.$ej)(L, this.I) && k.push(L), k;
					}
					W() {
						return this.L.isWorkspaceTrustEnabled()
							? this.r
								? this.I.remoteAuthority && this.w?.options?.isTrusted
									? this.w.options.isTrusted
									: this.ab()
										? this.y.isEmptyWorkspaceTrusted !== void 0
											? this.y.isEmptyWorkspaceTrusted
											: this.n.length
												? this.Y(this.n)
												: !!this.C.getValue(e.$CSb)
										: this.Y(this.U())
								: !1
							: !0;
					}
					async X(k) {
						this.L.isWorkspaceTrustEnabled() &&
							(k === void 0 && (await this.Q(), (k = this.W())),
							this.isWorkspaceTrusted() !== k &&
								((this.db = k), await this.z.participate(k), this.j.fire(k)));
					}
					Y(k) {
						let L = !0;
						for (const D of k) {
							const { trusted: M } = this.Z(D);
							if (!M) return (L = M), L;
						}
						return L;
					}
					Z(k) {
						if (!this.L.isWorkspaceTrustEnabled())
							return { trusted: !0, uri: k };
						if (this.bb(k)) return { trusted: !0, uri: k };
						if (this.cb(k)) return { trusted: !0, uri: k };
						let L = !1,
							D = -1,
							M = k;
						for (const N of this.t.uriTrustInfo)
							if (this.H.extUri.isEqualOrParent(k, N.uri)) {
								const A = N.uri.fsPath;
								A.length > D && ((D = A.length), (L = N.trusted), (M = N.uri));
							}
						return { trusted: L, uri: M };
					}
					async $(k, L) {
						let D = !1;
						for (const M of k)
							if (L) {
								if (this.bb(M) || this.cb(M)) continue;
								this.t.uriTrustInfo.find((A) =>
									this.H.extUri.isEqual(A.uri, M),
								) ||
									(this.t.uriTrustInfo.push({ uri: M, trusted: !0 }), (D = !0));
							} else {
								const N = this.t.uriTrustInfo.length;
								(this.t.uriTrustInfo = this.t.uriTrustInfo.filter(
									(A) => !this.H.extUri.isEqual(A.uri, M),
								)),
									N !== this.t.uriTrustInfo.length && (D = !0);
							}
						D && (await this.S());
					}
					ab() {
						if (this.J.getWorkbenchState() === c.WorkbenchState.EMPTY)
							return !0;
						const k = this.J.getWorkspace();
						return k
							? (0, c.$bj)(this.J.getWorkspace()) && k.folders.length === 0
							: !1;
					}
					bb(k) {
						return (0, a.$D8)(k) && k.scheme !== "vscode-vfs";
					}
					cb(k) {
						return !this.I.remoteAuthority || !this.w
							? !1
							: (0, f.$sh)((0, u.$wn)(k), this.w.authority.authority) &&
									!!this.w.options?.isTrusted;
					}
					set db(k) {
						(this.s = k),
							k || (this.y.acceptsOutOfWorkspaceFiles = !1),
							this.ab() && (this.y.isEmptyWorkspaceTrusted = k);
					}
					get workspaceResolved() {
						return this.b;
					}
					get workspaceTrustInitialized() {
						return this.g;
					}
					get acceptsOutOfWorkspaceFiles() {
						return this.y.acceptsOutOfWorkspaceFiles;
					}
					set acceptsOutOfWorkspaceFiles(k) {
						this.y.acceptsOutOfWorkspaceFiles = k;
					}
					isWorkspaceTrusted() {
						return this.s;
					}
					isWorkspaceTrustForced() {
						return !!(
							(this.I.remoteAuthority &&
								this.w &&
								this.w.options?.isTrusted !== void 0) ||
							this.U().filter((L) => !this.bb(L)).length === 0
						);
					}
					canSetParentFolderTrust() {
						const k = (0, c.$1i)(this.q);
						if (
							!(0, c.$Wi)(k) ||
							(k.uri.scheme !== E.Schemas.file &&
								k.uri.scheme !== E.Schemas.vscodeRemote)
						)
							return !1;
						const L = this.H.extUri.dirname(k.uri);
						return !this.H.extUri.isEqual(k.uri, L);
					}
					async setParentFolderTrust(k) {
						if (this.canSetParentFolderTrust()) {
							const L = (0, c.$1i)(this.q).uri,
								D = this.H.extUri.dirname(L);
							await this.setUrisTrust([D], k);
						}
					}
					canSetWorkspaceTrust() {
						if (
							this.I.remoteAuthority &&
							(!this.w || this.w.options?.isTrusted !== void 0)
						)
							return !1;
						if (this.ab()) return !0;
						if (this.U().filter((M) => !this.bb(M)).length === 0) return !1;
						if (!this.isWorkspaceTrusted()) return !0;
						const L = (0, c.$1i)(this.q);
						if (
							!(0, c.$Wi)(L) ||
							(L.uri.scheme !== E.Schemas.file && L.uri.scheme !== "vscode-vfs")
						)
							return !1;
						const D = this.Z(L.uri);
						if (!D.trusted || !this.H.extUri.isEqual(L.uri, D.uri)) return !1;
						if (this.canSetParentFolderTrust()) {
							const M = this.H.extUri.dirname(L.uri);
							if (this.Z(M).trusted) return !1;
						}
						return !0;
					}
					async setWorkspaceTrust(k) {
						if (this.ab()) {
							await this.X(k);
							return;
						}
						const L = this.U();
						await this.setUrisTrust(L, k);
					}
					async getUriTrustInfo(k) {
						return this.L.isWorkspaceTrustEnabled()
							? this.cb(k)
								? { trusted: !0, uri: k }
								: this.Z(await this.P(k))
							: { trusted: !0, uri: k };
					}
					async setUrisTrust(k, L) {
						this.$(await Promise.all(k.map((D) => this.P(D))), L);
					}
					getTrustedUris() {
						return this.t.uriTrustInfo.map((k) => k.uri);
					}
					async setTrustedUris(k) {
						this.t.uriTrustInfo = [];
						for (const L of k) {
							const D = await this.P(L),
								M = this.H.extUri.removeTrailingPathSeparator(D);
							let N = !1;
							for (const A of this.t.uriTrustInfo)
								if (this.H.extUri.isEqual(A.uri, M)) {
									N = !0;
									break;
								}
							N || this.t.uriTrustInfo.push({ trusted: !0, uri: M });
						}
						await this.S();
					}
					addWorkspaceTrustTransitionParticipant(k) {
						return this.z.addWorkspaceTrustTransitionParticipant(k);
					}
				};
				(e.$HSb = v),
					(e.$HSb = v =
						Ne(
							[
								j(0, d.$gj),
								j(1, r.$3l),
								j(2, h.$lq),
								j(3, o.$Vl),
								j(4, p.$r8),
								j(5, c.$Vi),
								j(6, n.$oO),
								j(7, s.$ll),
							],
							v,
						));
				let S = class extends i.$1c {
					constructor(k, L) {
						super(),
							(this.n = k),
							(this.q = L),
							(this.h = this.D(new t.$re())),
							(this.onDidInitiateOpenFilesTrustRequest = this.h.event),
							(this.j = this.D(new t.$re())),
							(this.onDidInitiateWorkspaceTrustRequest = this.j.event),
							(this.m = this.D(new t.$re())),
							(this.onDidInitiateWorkspaceTrustRequestOnStartup = this.m.event);
					}
					get r() {
						return this.n.getValue(e.$BSb);
					}
					set r(k) {
						this.n.updateValue(e.$BSb, k);
					}
					async completeOpenFilesTrustRequest(k, L) {
						this.b &&
							(k === n.WorkspaceTrustUriResponse.Open &&
								(this.q.acceptsOutOfWorkspaceFiles = !0),
							L &&
								(k === n.WorkspaceTrustUriResponse.Open && (this.r = "open"),
								k === n.WorkspaceTrustUriResponse.OpenInNewWindow &&
									(this.r = "newWindow")),
							this.b(k),
							(this.b = void 0),
							(this.a = void 0));
					}
					async requestOpenFilesTrust(k) {
						if (
							!this.q.isWorkspaceTrusted() ||
							(await Promise.all(k.map((D) => this.q.getUriTrustInfo(D))))
								.map((D) => D.trusted)
								.every((D) => D)
						)
							return n.WorkspaceTrustUriResponse.Open;
						if (this.r !== "prompt") {
							if (this.r === "newWindow")
								return n.WorkspaceTrustUriResponse.OpenInNewWindow;
							if (this.r === "open") return n.WorkspaceTrustUriResponse.Open;
						}
						if (this.q.acceptsOutOfWorkspaceFiles)
							return n.WorkspaceTrustUriResponse.Open;
						if (!this.a)
							this.a = new Promise((D) => {
								this.b = D;
							});
						else return this.a;
						return this.h.fire(), this.a;
					}
					s(k) {
						this.g &&
							(this.g(k ?? this.q.isWorkspaceTrusted()),
							(this.g = void 0),
							(this.c = void 0));
					}
					cancelWorkspaceTrustRequest() {
						this.g && (this.g(void 0), (this.g = void 0), (this.c = void 0));
					}
					async completeWorkspaceTrustRequest(k) {
						if (k === void 0 || k === this.q.isWorkspaceTrusted()) {
							this.s(k);
							return;
						}
						t.Event.once(this.q.onDidChangeTrust)((L) => this.s(L)),
							await this.q.setWorkspaceTrust(k);
					}
					async requestWorkspaceTrust(k) {
						if (this.q.isWorkspaceTrusted()) return this.q.isWorkspaceTrusted();
						if (!this.c)
							this.c = new Promise((L) => {
								this.g = L;
							});
						else return this.c;
						return this.j.fire(k), this.c;
					}
					requestWorkspaceTrustOnStartup() {
						this.c ||
							(this.c = new Promise((k) => {
								this.g = k;
							})),
							this.m.fire();
					}
				};
				(e.$ISb = S), (e.$ISb = S = Ne([j(0, d.$gj), j(1, n.$pO)], S));
				class I extends i.$1c {
					constructor() {
						super(...arguments), (this.a = new w.$$c());
					}
					addWorkspaceTrustTransitionParticipant(k) {
						const L = this.a.push(k);
						return (0, i.$Yc)(() => L());
					}
					async participate(k) {
						for (const L of this.a) await L.participate(k);
					}
					dispose() {
						this.a.clear(), super.dispose();
					}
				}
				class T {
					constructor(k) {
						(this.c = "acceptsOutOfWorkspaceFiles"),
							(this.d = "isEmptyWorkspaceTrusted"),
							k
								? ((this.a = new g.$eEb("workspaceTrust", k)),
									(this.b = this.a.getMemento(
										h.StorageScope.WORKSPACE,
										h.StorageTarget.MACHINE,
									)))
								: (this.b = {});
					}
					get acceptsOutOfWorkspaceFiles() {
						return this.b[this.c] ?? !1;
					}
					set acceptsOutOfWorkspaceFiles(k) {
						(this.b[this.c] = k), this.a?.saveMemento();
					}
					get isEmptyWorkspaceTrusted() {
						return this.b[this.d];
					}
					set isEmptyWorkspaceTrusted(k) {
						(this.b[this.d] = k), this.a?.saveMemento();
					}
				}
				(0, m.$lK)(n.$qO, S, m.InstantiationType.Delayed);
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[1953],
		he([
			1, 0, 4, 372, 4017, 1951, 139, 7, 29, 9, 3780, 151, 128, 34, 3650, 25,
			261, 21, 3, 230, 371, 3621, 2788, 211, 3787, 143, 2742, 22, 3588, 3250,
			952, 62, 68, 2880, 1826, 2732, 1620, 305, 3461, 1059, 174, 82, 1904, 12,
			23, 3384, 2883, 129, 1696, 2746, 940, 3791, 133, 2785, 773, 2787, 676, 75,
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
			X,
			Y,
			ie,
			ne,
			ee,
			_,
			te,
			Q,
			Z,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Xcd = void 0),
				(e.main = re),
				(i = xi(i));
			class se extends f.$1c {
				constructor(oe) {
					super(), (this.a = oe), this.b();
				}
				b() {
					this.c(), (0, C.$Lfb)(!!this.a.fullscreen, Z.$Bfb);
				}
				c() {
					const oe = (0, g.$3i)(this.a.workspace);
					((0, g.$2i)(oe) || (0, g.$Wi)(oe)) && (this.a.workspace = oe);
					const ae = this.a.filesToWait,
						pe = ae?.paths;
					for (const $e of [
						pe,
						this.a.filesToOpenOrCreate,
						this.a.filesToDiff,
						this.a.filesToMerge,
					])
						if (Array.isArray($e))
							for (const ye of $e)
								ye.fileUri && (ye.fileUri = r.URI.revive(ye.fileUri));
					ae && (ae.waitMarkerFileUri = r.URI.revive(ae.waitMarkerFileUri));
				}
				async open() {
					const [oe] = await Promise.all([this.j(), (0, d.$phb)(Z.$Bfb)]);
					this.f(oe.configurationService);
					const ae = new w.$q3c(
						Z.$Bfb.document.body,
						{ extraClasses: this.g() },
						oe.serviceCollection,
						oe.logService,
					);
					this.h(ae, oe.storageService);
					const pe = ae.startup();
					this.D(pe.createInstance(E.$Ocd));
				}
				f(oe) {
					let ae;
					if (this.a.isCustomZoomLevel && typeof this.a.zoomLevel == "number")
						ae = this.a.zoomLevel;
					else {
						const pe = oe.getValue();
						ae =
							typeof pe.window?.zoomLevel == "number" ? pe.window.zoomLevel : 0;
					}
					(0, Q.$28c)(ae, Z.$Bfb);
				}
				g() {
					return q.$m && (0, q.$M)(this.a.os.release)
						? ["macos-bigsur-or-newer"]
						: [];
				}
				h(oe, ae) {
					this.D(
						oe.onWillShutdown((pe) =>
							pe.join(ae.close(), {
								id: "join.closeStorage",
								label: (0, t.localize)(11899, null),
							}),
						),
					),
						this.D(oe.onDidShutdown(() => this.dispose()));
				}
				async j() {
					const oe = new h.$Ki(),
						ae = this.D(new R.$X8c(this.a.windowId));
					oe.set(s.$V8c, ae);
					const pe = this.a.policiesData
						? new X.$l8c(this.a.policiesData, ae.getChannel("policy"))
						: new Y.$Mo();
					oe.set(Y.$Ko, pe);
					const $e = { _serviceBrand: void 0, ...i.default };
					oe.set(D.$Bk, $e);
					const ye = new a.$vcd(this.a, $e);
					oe.set(a.$ucd, ye);
					const ue = [
							...this.a.loggers.global.map((ke) => ({
								...ke,
								resource: r.URI.revive(ke.resource),
							})),
							...this.a.loggers.window.map((ke) => ({
								...ke,
								resource: r.URI.revive(ke.resource),
								hidden: !0,
							})),
						],
						fe = new O.$ZJ(
							this.a.windowId,
							this.a.logLevel,
							ye.windowLogsPath,
							ue,
							ae.getChannel("logger"),
						);
					oe.set(c.$jk, fe);
					const me = this.D(new U.$Ucd(fe, ye));
					oe.set(c.$ik, me),
						q.$w && me.info("workbench#open()"),
						me.getLevel() === c.LogLevel.Trace &&
							me.trace(
								"workbench#open(): with configuration",
								(0, x.$Ao)({ ...this.a, nls: void 0 }),
							);
					const ve = new l.$Qcd(this.a.windowId, me);
					oe.set(b.$Vbd, ve);
					const ge = new H.$xcd(this.a.windowId, me, ae);
					oe.set(H.$wcd, ge);
					const be = B.ProxyChannel.toService(ae.getChannel("sign"));
					oe.set(L.$$l, be);
					const Ce = this.D(new I.$sr(me));
					oe.set(T.$ll, Ce);
					const Le = new y.$dcd($e, new te.$ccd(ye.window.id, ae, Ce));
					oe.set($.$3l, Le);
					const Fe = this.D(new G.$Wcd(ae, ge, me, fe));
					Ce.registerProvider(V.Schemas.file, Fe);
					const Oe = new N.$oK(Ce);
					oe.set(M.$Vl, Oe);
					const xe = new W.$gfb(
						this.a.profiles.all,
						r.URI.revive(this.a.profiles.home).with({
							scheme: ye.userRoamingDataHome.scheme,
						}),
						ae.getChannel("userDataProfiles"),
					);
					oe.set(J.$Xl, xe);
					const He = new ie.$R3c(
						(0, J.$Yl)(this.a.profiles.profile, xe.profilesHome.scheme),
					);
					oe.set(ne.$P8, He),
						Ce.registerProvider(
							V.Schemas.vscodeUserData,
							this.D(
								new K.$T8c(
									V.Schemas.file,
									Fe,
									V.Schemas.vscodeUserData,
									xe,
									Oe,
									me,
								),
							),
						);
					const Ke = new _.$9l();
					Ke.register($.RemoteConnectionType.WebSocket, new ee.$1rb(null)),
						oe.set(_.$8l, Ke);
					const Je = this.D(new v.$Rcd(Ke, He, ye, $e, Le, be, me));
					oe.set(S.$$m, Je), this.D(P.$Web.register(Je, Ce, me));
					const Te = this.m(ye),
						[Ee, Ie] = await Promise.all([
							this.n(Te, ye, He, xe, Ce, Je, Oe, me, pe).then(
								(ke) => (oe.set(g.$Vi, ke), oe.set(p.$RZ, ke), ke),
							),
							this.q(Te, ye, He, xe, ae).then((ke) => (oe.set(o.$lq, ke), ke)),
							this.r(ae).then((ke) => (oe.set(A.$Scd, ke), ke)),
						]),
						Be = new z.$GSb(Ee, ye);
					oe.set(F.$oO, Be);
					const Se = new z.$HSb(Ee, Le, Ie, Oe, ye, Ee, Be, Ce);
					return (
						oe.set(F.$pO, Se),
						Ee.updateWorkspaceTrust(Se.isWorkspaceTrusted()),
						this.D(
							Se.onDidChangeTrust(() =>
								Ee.updateWorkspaceTrust(Se.isWorkspaceTrusted()),
							),
						),
						{
							serviceCollection: oe,
							logService: me,
							storageService: Ie,
							configurationService: Ee,
						}
					);
				}
				m(oe) {
					return this.a.workspace
						? this.a.workspace
						: (0, g.$1i)(this.a.backupPath, oe.isExtensionDevelopment);
				}
				async n(oe, ae, pe, $e, ye, ue, fe, me, ve) {
					const ge = new k.$G3c(
							[V.Schemas.file, V.Schemas.vscodeUserData],
							ae,
							ye,
						),
						be = new u.$F3c(
							{ remoteAuthority: ae.remoteAuthority, configurationCache: ge },
							ae,
							pe,
							$e,
							ye,
							ue,
							fe,
							me,
							ve,
						);
					try {
						return await be.initialize(oe), be;
					} catch (Ce) {
						return (0, m.$4)(Ce), be;
					}
				}
				async q(oe, ae, pe, $e, ye) {
					const ue = new n.$Pcd(oe, pe, $e, ye, ae);
					try {
						return await ue.initialize(), ue;
					} catch (fe) {
						return (0, m.$4)(fe), ue;
					}
				}
				async r(oe) {
					const ae = new A.$Tcd(oe);
					try {
						return await ae.initialize(), ae;
					} catch (pe) {
						return (0, m.$4)(pe), ae;
					}
				}
			}
			e.$Xcd = se;
			function re(le) {
				return new se(le).open();
			}
		},
	),
		define(
			de[384],
			he([1, 0, 10, 109, 175, 154, 24, 62, 5, 20, 3, 1059, 28, 174, 34, 12]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$KSb = e.$JSb = void 0),
					(e.$JSb = (0, m.$Mi)("extensionManifestPropertiesService"));
				let p = class extends u.$1c {
					constructor(f, b, s, l) {
						super(),
							(this.m = f),
							(this.n = b),
							(this.q = s),
							(this.s = l),
							(this.a = null),
							(this.b = null),
							(this.c = null),
							(this.f = null),
							(this.g = null),
							(this.h = new i.$In());
						const y = b.inspect(a.$DSb).userValue || {};
						for (const $ of Object.keys(y)) this.h.set($, y[$]);
						if (((this.j = new Map()), f.extensionUntrustedWorkspaceSupport))
							for (const $ of Object.keys(f.extensionUntrustedWorkspaceSupport))
								this.j.set($, f.extensionUntrustedWorkspaceSupport[$]);
					}
					prefersExecuteOnUI(f) {
						const b = this.getExtensionKind(f);
						return b.length > 0 && b[0] === "ui";
					}
					prefersExecuteOnWorkspace(f) {
						const b = this.getExtensionKind(f);
						return b.length > 0 && b[0] === "workspace";
					}
					prefersExecuteOnWeb(f) {
						const b = this.getExtensionKind(f);
						return b.length > 0 && b[0] === "web";
					}
					canExecuteOnUI(f) {
						return this.getExtensionKind(f).some((s) => s === "ui");
					}
					canExecuteOnWorkspace(f) {
						return this.getExtensionKind(f).some((s) => s === "workspace");
					}
					canExecuteOnWeb(f) {
						return this.getExtensionKind(f).some((s) => s === "web");
					}
					getExtensionKind(f) {
						const b = this.t(f),
							s = this.w(f);
						if (s && s.length > 0) {
							const l = [];
							for (const y of s) y !== "-web" && l.push(y);
							return (
								s.includes("-web") &&
									!l.length &&
									(l.push("ui"), l.push("workspace")),
								g.$r &&
									!s.includes("-web") &&
									!s.includes("web") &&
									b.includes("web") &&
									l.push("web"),
								l
							);
						}
						return b;
					}
					getUserConfiguredExtensionKind(f) {
						if (this.c === null) {
							const s = new i.$In(),
								l = this.n.getValue("remote.extensionKind") || {};
							for (const y of Object.keys(l)) s.set(y, l[y]);
							this.c = s;
						}
						const b = this.c.get(f.id);
						return b ? this.H(b) : void 0;
					}
					getExtensionUntrustedWorkspaceSupportType(f) {
						if (!this.q.isWorkspaceTrustEnabled() || !f.main) return !0;
						const b = this.F(f),
							s = this.G(f);
						return b !== void 0
							? b
							: s?.override !== void 0
								? s.override
								: f.capabilities?.untrustedWorkspaces?.supported !== void 0
									? f.capabilities.untrustedWorkspaces.supported
									: s?.default !== void 0
										? s.default
										: !1;
					}
					getExtensionVirtualWorkspaceSupportType(f) {
						const b = this.C(f);
						if (b !== void 0) return b;
						const s = this.z(f);
						if (s?.override !== void 0) return s.override;
						const l = f.capabilities?.virtualWorkspaces;
						if ((0, h.$rg)(l)) return l;
						if (l) {
							const y = l.supported;
							if ((0, h.$rg)(y) || y === "limited") return y;
						}
						return s?.default !== void 0 ? s.default : !0;
					}
					t(f) {
						if (f.main)
							return f.browser
								? g.$r
									? ["workspace", "web"]
									: ["workspace"]
								: ["workspace"];
						if (f.browser) return ["web"];
						let b = [...i.$Dn];
						if (
							(((0, C.$Pb)(f.extensionPack) ||
								(0, C.$Pb)(f.extensionDependencies)) &&
								(b = g.$r ? ["workspace", "web"] : ["workspace"]),
							f.contributes)
						)
							for (const s of Object.keys(f.contributes)) {
								const l = this.u(s);
								l.length && (b = b.filter((y) => l.includes(y)));
							}
						return (
							b.length ||
								this.s.warn(
									"Cannot deduce extensionKind for extension",
									(0, E.$_p)(f.publisher, f.name),
								),
							b
						);
					}
					u(f) {
						if (this.a === null) {
							const s = new Map();
							w.$n2
								.getExtensionPoints()
								.forEach((l) => s.set(l.name, l.defaultExtensionKind || [])),
								(this.a = s);
						}
						let b = this.a.get(f);
						return b ||
							((b = this.m.extensionPointExtensionKind
								? this.m.extensionPointExtensionKind[f]
								: void 0),
							b)
							? b
							: g.$r
								? ["workspace", "web"]
								: ["workspace"];
					}
					w(f) {
						const b = { id: (0, E.$_p)(f.publisher, f.name) };
						let s = this.getUserConfiguredExtensionKind(b);
						return typeof s < "u"
							? this.H(s)
							: ((s = this.y(f)),
								typeof s < "u"
									? s
									: ((s = f.extensionKind),
										typeof s < "u"
											? ((s = this.H(s)),
												s.filter((l) => ["ui", "workspace"].includes(l)))
											: null));
					}
					y(f) {
						if (this.b === null) {
							const s = new i.$In();
							if (this.m.extensionKind)
								for (const l of Object.keys(this.m.extensionKind))
									s.set(l, this.m.extensionKind[l]);
							this.b = s;
						}
						const b = (0, E.$_p)(f.publisher, f.name);
						return this.b.get(b);
					}
					z(f) {
						if (this.f === null) {
							const s = new i.$In();
							if (this.m.extensionVirtualWorkspacesSupport)
								for (const l of Object.keys(
									this.m.extensionVirtualWorkspacesSupport,
								))
									s.set(l, this.m.extensionVirtualWorkspacesSupport[l]);
							this.f = s;
						}
						const b = (0, E.$_p)(f.publisher, f.name);
						return this.f.get(b);
					}
					C(f) {
						if (this.g === null) {
							const s = new i.$In(),
								l =
									this.n.getValue("extensions.supportVirtualWorkspaces") || {};
							for (const y of Object.keys(l)) l[y] !== void 0 && s.set(y, l[y]);
							this.g = s;
						}
						const b = (0, E.$_p)(f.publisher, f.name);
						return this.g.get(b);
					}
					F(f) {
						const b = (0, E.$_p)(f.publisher, f.name),
							s = this.h.get(b);
						if (s && (s.version === void 0 || s.version === f.version))
							return s.supported;
					}
					G(f) {
						const b = (0, E.$_p)(f.publisher, f.name);
						return this.j.get(b);
					}
					H(f) {
						return Array.isArray(f)
							? f
							: f === "ui"
								? ["ui", "workspace"]
								: [f];
					}
				};
				(e.$KSb = p),
					(e.$KSb = p =
						Ne([j(0, d.$Bk), j(1, t.$gj), j(2, c.$oO), j(3, n.$ik)], p)),
					(0, r.$lK)(e.$JSb, p, r.InstantiationType.Delayed);
			},
		),
		define(
			de[4063],
			he([
				1, 0, 23, 12, 28, 9, 4, 31, 119, 2817, 154, 5, 128, 73, 34, 41, 78, 157,
				384,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					d.$fk.registerCommand("_remoteCLI.openExternal", function (s, l) {
						return s
							.get(g.$7rb)
							.open((0, w.$lg)(l) ? l : E.URI.revive(l), {
								openExternal: !0,
								allowTunneling: !0,
							});
					}),
					d.$fk.registerCommand("_remoteCLI.windowOpen", function (s, l, y) {
						const $ = s.get(d.$ek);
						return l.length
							? $.executeCommand("_files.windowOpen", l, y)
							: $.executeCommand("_files.newWindow", y);
					}),
					d.$fk.registerCommand("_remoteCLI.getSystemStatus", function (s) {
						return s.get(d.$ek).executeCommand("_issues.getSystemStatus");
					}),
					d.$fk.registerCommand(
						"_remoteCLI.manageExtensions",
						async function (s, l) {
							const y = s.get(a.$Li),
								v = s.get(o.$EQb).remoteExtensionManagementServer
									?.extensionManagementService;
							if (!v) return;
							const S = [],
								I = new (class extends n.$ok {
									g(P, k) {
										S.push(k);
									}
								})(),
								T = y.createChild(new h.$Ki([m.$Hp, v])).createInstance(b, I);
							if (l.list)
								await T.listExtensions(
									!!l.list.showVersions,
									l.list.category,
									void 0,
								);
							else {
								const P = (k) =>
									k.map((L) => ((0, w.$lg)(L) ? L : E.URI.revive(L)));
								if (Array.isArray(l.install) && l.install.length)
									try {
										await T.installExtensions(
											P(l.install),
											[],
											{ isMachineScoped: !0 },
											!!l.force,
										);
									} catch (k) {
										S.push(k.message);
									}
								if (Array.isArray(l.uninstall) && l.uninstall.length)
									try {
										await T.uninstallExtensions(
											P(l.uninstall),
											!!l.force,
											void 0,
										);
									} catch (k) {
										S.push(k.message);
									}
							}
							return S.join(`
`);
						},
					);
				let b = class extends r.$Yq {
					constructor(l, y, $, v, S, I) {
						super(l, y, $), (this.o = I);
						const T = S.remoteAuthority;
						this.n = T ? v.getHostLabel(t.Schemas.vscodeRemote, T) : void 0;
					}
					get f() {
						return this.n;
					}
					k(l) {
						return !this.o.canExecuteOnWorkspace(l) &&
							!(i.$r && this.o.canExecuteOnWeb(l))
							? (this.a.info(
									(0, C.localize)(2535, null, (0, u.$0p)(l.publisher, l.name)),
								),
								!1)
							: !0;
					}
				};
				b = Ne(
					[j(1, m.$Hp), j(2, m.$Ep), j(3, c.$3N), j(4, p.$r8), j(5, f.$JSb)],
					b,
				);
			},
		),
		define(
			de[404],
			he([
				1, 0, 4, 50, 15, 7, 6, 187, 49, 3, 141, 1731, 119, 157, 314, 154, 109,
				5, 22, 25, 87, 53, 9, 31, 10, 35, 26, 51, 423, 42, 8, 11, 633, 40, 41,
				18, 63, 33, 127, 333, 73, 85, 62, 57, 84, 198, 828, 29, 150, 34, 466,
				12, 384, 174, 349, 94, 142, 60, 275, 131, 672, 704, 28, 705, 32, 782,
				244, 30, 415, 437, 2435,
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
				X,
				Y,
				ie,
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
			) {
				"use strict";
				var ge,
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
					Ae,
					Me,
					De,
					Re,
					je,
					Ve,
					Ze,
					et,
					rt,
					ft,
					bt;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1Tb =
						e.$ZTb =
						e.$YTb =
						e.$XTb =
						e.$WTb =
						e.$VTb =
						e.$UTb =
						e.$TTb =
						e.$STb =
						e.$RTb =
						e.$QTb =
						e.$PTb =
						e.$OTb =
						e.$NTb =
						e.$MTb =
						e.$LTb =
						e.$KTb =
						e.$JTb =
						e.$ITb =
						e.$HTb =
						e.$GTb =
						e.$FTb =
						e.$ETb =
						e.$DTb =
						e.$CTb =
						e.$BTb =
						e.$ATb =
						e.$zTb =
						e.$yTb =
						e.$xTb =
						e.$wTb =
						e.$vTb =
						e.$uTb =
						e.$tTb =
						e.$sTb =
						e.$qTb =
						e.$pTb =
						e.$oTb =
						e.$nTb =
						e.$mTb =
						e.$lTb =
						e.$kTb =
						e.$jTb =
						e.$iTb =
						e.$hTb =
						e.$gTb =
						e.$fTb =
						e.$eTb =
						e.$dTb =
						e.$cTb =
						e.$bTb =
						e.$aTb =
						e.$_Sb =
							void 0),
					(e.$rTb = Bt),
					(E = mt(E)),
					(d = mt(d));
				let nt = class extends i.$rj {
					constructor(Tt, qt, At, Yt, ni, bi, fi, Ti, wt, We, _e, Si, gi, ki) {
						super("extension.promptExtensionInstallFailure"),
							(this.f = Tt),
							(this.g = qt),
							(this.h = At),
							(this.t = Yt),
							(this.L = ni),
							(this.M = bi),
							(this.N = fi),
							(this.O = Ti),
							(this.P = wt),
							(this.Q = We),
							(this.R = _e),
							(this.S = Si),
							(this.U = gi),
							(this.W = ki);
					}
					async run() {
						if ((0, J.$8)(this.t)) return;
						if (
							(this.Q.error(this.t),
							this.t.name === h.ExtensionManagementErrorCode.Unsupported)
						) {
							const bi = ie.$r
									? (0, t.localize)(6238, null, this.L.nameLong)
									: this.L.nameLong,
								fi = (0, t.localize)(
									6239,
									null,
									this.f.displayName || this.f.identifier.id,
									bi,
								),
								{ confirmed: Ti } = await this.O.confirm({
									type: N.Severity.Info,
									message: fi,
									primaryButton: (0, t.localize)(6240, null),
									cancelButton: (0, t.localize)(6241, null),
								});
							Ti &&
								this.M.open(
									ie.$r
										? y.URI.parse("https://aka.ms/vscode-web-extensions-guide")
										: y.URI.parse("https://aka.ms/vscode-remote"),
								);
							return;
						}
						if (
							h.ExtensionManagementErrorCode.ReleaseVersionNotFound ===
							this.t.name
						) {
							await this.O.prompt({
								type: "error",
								message: (0, J.$bb)(this.t),
								buttons: [
									{
										label: (0, t.localize)(6242, null),
										run: () => {
											const bi = this.S.createInstance(ht, {
												installPreReleaseVersion: !0,
											});
											return (bi.extension = this.f), bi.run();
										},
									},
								],
								cancelButton: (0, t.localize)(6243, null),
							});
							return;
						}
						if (
							[
								h.ExtensionManagementErrorCode.Incompatible,
								h.ExtensionManagementErrorCode.IncompatibleApi,
								h.ExtensionManagementErrorCode.IncompatibleTargetPlatform,
								h.ExtensionManagementErrorCode.Malicious,
								h.ExtensionManagementErrorCode.Deprecated,
							].includes(this.t.name)
						) {
							await this.O.info((0, J.$bb)(this.t));
							return;
						}
						if (h.ExtensionManagementErrorCode.Signature === this.t.name) {
							await this.O.prompt({
								type: "error",
								message: (0, t.localize)(
									6244,
									null,
									this.L.nameLong,
									this.f.displayName || this.f.identifier.id,
								),
								buttons: [
									{
										label: (0, t.localize)(6245, null),
										run: () => {
											const bi = this.S.createInstance(ht, {
												donotVerifySignature: !0,
											});
											return (bi.extension = this.f), bi.run();
										},
									},
								],
								cancelButton: (0, t.localize)(6246, null),
							});
							return;
						}
						const Tt =
							this.h === h.InstallOperation.Update
								? (0, t.localize)(
										6247,
										null,
										this.f.displayName || this.f.identifier.id,
									)
								: (0, t.localize)(
										6248,
										null,
										this.f.displayName || this.f.identifier.id,
									);
						let qt;
						const At = [],
							Yt = await this.X();
						Yt &&
							((qt = (0, t.localize)(6249, null, `command:${pe.$0Sb}`)),
							At.push({
								label: (0, t.localize)(6250, null),
								run: () =>
									this.M.open(Yt).then(() => {
										this.N.prompt(
											N.Severity.Info,
											(0, t.localize)(6251, null, this.f.identifier.id),
											[
												{
													label: (0, t.localize)(6252, null),
													run: () => this.P.executeCommand(u.$WQb),
												},
											],
										);
									}),
							}));
						const ni = `${Tt}${qt ? ` ${qt}` : ""}`;
						this.N.prompt(N.Severity.Error, ni, At);
					}
					async X() {
						if (
							ie.$u ||
							!this.f.gallery ||
							!this.L.extensionsGallery ||
							(!this.R.localExtensionManagementServer &&
								!this.R.remoteExtensionManagementServer)
						)
							return;
						let Tt = this.f.gallery.properties.targetPlatform;
						if (
							Tt !== p.TargetPlatform.UNIVERSAL &&
							Tt !== p.TargetPlatform.UNDEFINED &&
							this.R.remoteExtensionManagementServer
						)
							try {
								const qt = await this.U.getManifest(
									this.f.gallery,
									B.CancellationToken.None,
								);
								qt &&
									this.W.prefersExecuteOnWorkspace(qt) &&
									(Tt =
										await this.R.remoteExtensionManagementServer.extensionManagementService.getTargetPlatform());
							} catch (qt) {
								this.Q.error(qt);
								return;
							}
						if (Tt !== p.TargetPlatform.UNKNOWN)
							return y.URI.parse(
								`${this.L.extensionsGallery.serviceUrl}/publishers/${this.f.publisher}/vsextensions/${this.f.name}/${this.g}/vspackage${Tt !== p.TargetPlatform.UNDEFINED ? `?targetPlatform=${Tt}` : ""}`,
							);
					}
				};
				(e.$_Sb = nt),
					(e.$_Sb = nt =
						Ne(
							[
								j(4, H.$Bk),
								j(5, A.$7rb),
								j(6, N.$4N),
								j(7, q.$GO),
								j(8, $.$ek),
								j(9, X.$ik),
								j(10, c.$EQb),
								j(11, o.$Li),
								j(12, h.$Ep),
								j(13, ne.$JSb),
							],
							nt,
						));
				class lt extends i.$rj {
					constructor() {
						super(...arguments),
							(this.j = this.D(new C.$re())),
							(this.onDidChange = this.j.event),
							(this.g = null),
							(this.h = !1),
							(this.L = !0);
					}
					static {
						this.EXTENSION_ACTION_CLASS = "extension-action";
					}
					static {
						this.TEXT_ACTION_CLASS = `${lt.EXTENSION_ACTION_CLASS} text`;
					}
					static {
						this.LABEL_ACTION_CLASS = `${lt.EXTENSION_ACTION_CLASS} label`;
					}
					static {
						this.PROMINENT_LABEL_ACTION_CLASS = `${lt.LABEL_ACTION_CLASS} prominent`;
					}
					static {
						this.ICON_ACTION_CLASS = `${lt.EXTENSION_ACTION_CLASS} icon`;
					}
					get extension() {
						return this.g;
					}
					set extension(Tt) {
						(this.g = Tt), this.update();
					}
					get hidden() {
						return this.h;
					}
					set hidden(Tt) {
						this.h !== Tt && ((this.h = Tt), this.j.fire({ hidden: Tt }));
					}
					I(Tt) {
						super.I(Tt), this.L && (this.hidden = !Tt);
					}
				}
				e.$aTb = lt;
				class ct extends lt {
					get menuActions() {
						return [...this.N];
					}
					get extension() {
						return super.extension;
					}
					set extension(Tt) {
						this.O.forEach((qt) => (qt.extension = Tt)), (super.extension = Tt);
					}
					constructor(Tt, qt, At) {
						(qt = `${qt} action-dropdown`),
							super(Tt, void 0, qt),
							(this.P = At),
							(this.menuActionClassNames = []),
							(this.N = []),
							(this.menuActionClassNames = qt.split(" ")),
							(this.L = !1),
							(this.O = At.flat()),
							this.update(),
							this.D(
								C.Event.any(...this.O.map((Yt) => Yt.onDidChange))(() =>
									this.update(!0),
								),
							),
							this.O.forEach((Yt) => this.D(Yt));
					}
					update(Tt) {
						Tt || this.O.forEach((Yt) => Yt.update());
						const qt = this.P.map((Yt) => Yt.filter((ni) => !ni.hidden));
						let At = [];
						for (const Yt of qt)
							Yt.length && (At = [...At, ...Yt, new i.$tj()]);
						(At = At.length ? At.slice(0, At.length - 1) : At),
							(this.M = At[0]),
							(this.N = At.length > 1 ? At : []),
							this.j.fire({ menuActions: this.N }),
							this.M
								? ((this.hidden = !1),
									(this.enabled = this.M.enabled),
									(this.label = this.Q(this.M)),
									(this.tooltip = this.M.tooltip))
								: ((this.hidden = !0), (this.enabled = !1));
					}
					async run() {
						this.enabled && (await this.M?.run());
					}
					Q(Tt) {
						return Tt.label;
					}
				}
				e.$bTb = ct;
				class gt extends ve.$Qob {
					constructor(Tt, qt, At) {
						super(null, Tt, qt, At),
							this.D(
								Tt.onDidChange((Yt) => {
									(Yt.hidden !== void 0 || Yt.menuActions !== void 0) &&
										this.G();
								}),
							);
					}
					render(Tt) {
						super.render(Tt), this.G();
					}
					G() {
						if ((super.G(), this.element && this.g?.element)) {
							this.element.classList.toggle("hide", this._action.hidden);
							const Tt = this._action.menuActions.length === 0;
							this.element.classList.toggle("empty", Tt),
								this.g.element.classList.toggle("hide", Tt);
						}
					}
				}
				e.$cTb = gt;
				let ht = class extends lt {
					static {
						ge = this;
					}
					static {
						this.CLASS = `${this.LABEL_ACTION_CLASS} prominent install`;
					}
					static {
						this.M = `${this.CLASS} hide`;
					}
					set manifest(Tt) {
						(this.N = Tt), this.db();
					}
					constructor(Tt, qt, At, Yt, ni, bi, fi, Ti, wt, We) {
						super(
							"extensions.install",
							(0, t.localize)(6253, null),
							ge.CLASS,
							!1,
						),
							(this.P = qt),
							(this.Q = At),
							(this.R = Yt),
							(this.S = ni),
							(this.U = bi),
							(this.W = fi),
							(this.X = Ti),
							(this.Y = wt),
							(this.Z = We),
							(this.N = null),
							(this.O = new w.$Gh()),
							(this.L = !1),
							(this.options = { isMachineScoped: !1, ...Tt }),
							this.update(),
							this.D(this.U.onDidChangeFormatters(() => this.db(), this));
					}
					update() {
						this.O.queue(() => this.$());
					}
					async $() {
						(this.enabled = !1),
							(this.class = ge.M),
							(this.hidden = !0),
							this.extension &&
								(this.extension.isBuiltin ||
									this.P.canSetLanguage(this.extension) ||
									(this.extension.state === u.ExtensionState.Uninstalled &&
										((this.options.installPreReleaseVersion &&
											!this.extension.hasPreReleaseVersion) ||
											(!this.options.installPreReleaseVersion &&
												!this.extension.hasReleaseVersion) ||
											((this.hidden = !1),
											(this.class = ge.CLASS),
											(await this.P.canInstall(this.extension)) &&
												((this.enabled = !0), this.db())))));
					}
					async run() {
						if (!this.extension) return;
						if (this.extension.deprecationInfo) {
							let qt = (0, t.localize)(6254, null),
								At;
							(function (bi) {
								(bi[(bi.InstallAnyway = 0)] = "InstallAnyway"),
									(bi[(bi.ShowAlternateExtension = 1)] =
										"ShowAlternateExtension"),
									(bi[(bi.ConfigureSettings = 2)] = "ConfigureSettings"),
									(bi[(bi.Cancel = 3)] = "Cancel");
							})(At || (At = {}));
							const Yt = [
								{
									label: (0, t.localize)(6255, null),
									run: () => At.InstallAnyway,
								},
							];
							if (this.extension.deprecationInfo.extension) {
								qt = (0, t.localize)(
									6256,
									null,
									this.extension.deprecationInfo.extension.displayName,
								);
								const bi = this.extension.deprecationInfo.extension;
								Yt.push({
									label: (0, t.localize)(
										6257,
										null,
										this.extension.deprecationInfo.extension.displayName,
									),
									run: async () => {
										const [fi] = await this.P.getExtensions(
											[{ id: bi.id, preRelease: bi.preRelease }],
											B.CancellationToken.None,
										);
										return await this.P.open(fi), At.ShowAlternateExtension;
									},
								});
							} else if (this.extension.deprecationInfo.settings) {
								qt = (0, t.localize)(6258, null);
								const bi = this.extension.deprecationInfo.settings;
								Yt.push({
									label: (0, t.localize)(6259, null),
									run: async () => (
										await this.X.openSettings({
											query: bi.map((fi) => `@id:${fi}`).join(" "),
										}),
										At.ConfigureSettings
									),
								});
							} else
								this.extension.deprecationInfo.additionalInfo &&
									(qt = new te.$cl(
										`${qt} ${this.extension.deprecationInfo.additionalInfo}`,
									));
							const { result: ni } = await this.W.prompt({
								type: N.Severity.Warning,
								message: (0, t.localize)(
									6260,
									null,
									this.extension.displayName,
								),
								detail: (0, ae.$lg)(qt) ? qt : void 0,
								custom: (0, ae.$lg)(qt)
									? void 0
									: { markdownDetails: [{ markdown: qt }] },
								buttons: Yt,
								cancelButton: { run: () => At.Cancel },
							});
							if (ni !== At.InstallAnyway) return;
						}
						this.P.open(this.extension, {
							showPreReleaseVersion: this.options.installPreReleaseVersion,
						}),
							(0, U.$oib)(
								(0, t.localize)(6261, null, this.extension.displayName),
							),
							this.Y.publicLog("extensions:action:install", {
								...this.extension.telemetryData,
								actionId: this.id,
							});
						const Tt = await this.bb(this.extension);
						if (Tt?.local) {
							(0, U.$oib)(
								(0, t.localize)(6262, null, this.extension.displayName),
							);
							const qt = await this.cb(Tt.local);
							if (
								qt &&
								!(
									qt.activationEvents &&
									qt.activationEvents.some((At) => At.startsWith("onLanguage"))
								)
							) {
								const At = await this.ab(Tt);
								if (At) {
									At.extension = Tt;
									try {
										return At.run({
											showCurrentTheme: !0,
											ignoreFocusLost: !0,
										});
									} finally {
										At.dispose();
									}
								}
							}
						}
					}
					async ab(Tt) {
						if ((await this.S.getColorThemes()).some((ni) => $i(ni, Tt)))
							return this.Q.createInstance(tt);
						if ((await this.S.getFileIconThemes()).some((ni) => $i(ni, Tt)))
							return this.Q.createInstance(at);
						if ((await this.S.getProductIconThemes()).some((ni) => $i(ni, Tt)))
							return this.Q.createInstance(pi);
					}
					async bb(Tt) {
						try {
							return await this.P.install(Tt, this.options);
						} catch (qt) {
							await this.Q.createInstance(
								nt,
								Tt,
								Tt.latestVersion,
								h.InstallOperation.Install,
								qt,
							).run();
							return;
						}
					}
					async cb(Tt) {
						const qt = await this.R.getExtension(Tt.identifier.id);
						return (
							qt ||
							(this.R.canAddExtension((0, l.$y2)(Tt))
								? new Promise((At, Yt) => {
										const ni = this.R.onDidChangeExtensions(async () => {
											const bi = await this.R.getExtension(Tt.identifier.id);
											bi && (ni.dispose(), At(bi));
										});
									})
								: null)
						);
					}
					db() {
						this.label = this.getLabel();
					}
					getLabel(Tt) {
						return this.extension?.isWorkspaceScoped &&
							this.extension.resourceExtension &&
							this.Z.isInsideWorkspace(
								this.extension.resourceExtension.location,
							)
							? (0, t.localize)(6263, null)
							: this.options.installPreReleaseVersion &&
									this.extension?.hasPreReleaseVersion
								? Tt
									? (0, t.localize)(6264, null)
									: (0, t.localize)(6265, null)
								: this.extension?.hasPreReleaseVersion
									? Tt
										? (0, t.localize)(6266, null)
										: (0, t.localize)(6267, null)
									: (0, t.localize)(6268, null);
					}
				};
				(e.$dTb = ht),
					(e.$dTb =
						ht =
						ge =
							Ne(
								[
									j(1, u.$MQb),
									j(2, o.$Li),
									j(3, l.$q2),
									j(4, z.$rRb),
									j(5, F.$3N),
									j(6, q.$GO),
									j(7, re.$7Z),
									j(8, $e.$km),
									j(9, b.$Vi),
								],
								ht,
							));
				let Rt = class extends ct {
					set manifest(Tt) {
						this.O.forEach((qt) => (qt.manifest = Tt)), this.update();
					}
					constructor(Tt, qt) {
						super("extensions.installActions", ht.CLASS, [
							[
								Tt.createInstance(ht, {
									installPreReleaseVersion: qt.preferPreReleases,
								}),
								Tt.createInstance(ht, {
									installPreReleaseVersion: !qt.preferPreReleases,
								}),
							],
						]);
					}
					Q(Tt) {
						return Tt.getLabel(!0);
					}
				};
				(e.$eTb = Rt), (e.$eTb = Rt = Ne([j(0, o.$Li), j(1, u.$MQb)], Rt));
				class Nt extends lt {
					static {
						this.M = (0, t.localize)(6269, null);
					}
					static {
						this.N = `${lt.LABEL_ACTION_CLASS} install installing`;
					}
					constructor() {
						super("extension.installing", Nt.M, Nt.N, !1);
					}
					update() {
						this.class = `${Nt.N}${this.extension && this.extension.state === u.ExtensionState.Installing ? "" : " hide"}`;
					}
				}
				e.$fTb = Nt;
				let jt = class extends lt {
					static {
						be = this;
					}
					static {
						this.M = (0, t.localize)(6270, null);
					}
					static {
						this.N = (0, t.localize)(6271, null);
					}
					static {
						this.O = `${lt.LABEL_ACTION_CLASS} prominent install-other-server`;
					}
					static {
						this.P = `${lt.LABEL_ACTION_CLASS} install-other-server installing`;
					}
					constructor(Tt, qt, At, Yt, ni, bi) {
						super(Tt, be.M, be.O, !1),
							(this.Q = qt),
							(this.R = At),
							(this.S = Yt),
							(this.U = ni),
							(this.W = bi),
							(this.updateWhenCounterExtensionChanges = !0),
							this.update();
					}
					update() {
						if (((this.enabled = !1), (this.class = be.O), this.X())) {
							const Tt = this.S.installed.filter(
								(qt) =>
									(0, g.$7p)(qt.identifier, this.extension.identifier) &&
									qt.server === this.Q,
							)[0];
							Tt
								? Tt.state === u.ExtensionState.Installing &&
									!Tt.local &&
									((this.enabled = !0),
									(this.label = be.N),
									(this.class = be.P))
								: ((this.enabled = !0), (this.label = this.Y()));
						}
					}
					X() {
						return !this.extension ||
							!this.Q ||
							!this.extension.local ||
							this.extension.state !== u.ExtensionState.Installed ||
							this.extension.type !== p.ExtensionType.User ||
							this.extension.enablementState ===
								c.EnablementState.DisabledByEnvironment ||
							this.extension.enablementState ===
								c.EnablementState.DisabledByTrustRequirement ||
							this.extension.enablementState ===
								c.EnablementState.DisabledByVirtualWorkspace
							? !1
							: !!(
									(0, p.$Kn)(this.extension.local.manifest) ||
									(this.Q === this.U.localExtensionManagementServer &&
										this.W.prefersExecuteOnUI(this.extension.local.manifest)) ||
									(this.Q === this.U.remoteExtensionManagementServer &&
										this.W.prefersExecuteOnWorkspace(
											this.extension.local.manifest,
										)) ||
									(this.Q === this.U.webExtensionManagementServer &&
										this.W.prefersExecuteOnWeb(
											this.extension.local.manifest,
										)) ||
									(this.R &&
										((this.Q === this.U.localExtensionManagementServer &&
											this.W.canExecuteOnUI(this.extension.local.manifest)) ||
											(this.Q === this.U.remoteExtensionManagementServer &&
												this.W.canExecuteOnWorkspace(
													this.extension.local.manifest,
												))))
								);
					}
					async run() {
						if (this.extension?.local && this.extension?.server && this.Q)
							return (
								this.S.open(this.extension),
								(0, U.$oib)(
									(0, t.localize)(6272, null, this.extension.displayName),
								),
								this.S.installInServer(this.extension, this.Q)
							);
					}
				};
				(e.$gTb = jt),
					(e.$gTb =
						jt =
						be =
							Ne([j(3, u.$MQb), j(4, c.$EQb), j(5, ne.$JSb)], jt));
				let ti = class extends jt {
					constructor(Tt, qt, At, Yt) {
						super(
							"extensions.remoteinstall",
							At.remoteExtensionManagementServer,
							Tt,
							qt,
							At,
							Yt,
						);
					}
					Y() {
						return this.U.remoteExtensionManagementServer
							? (0, t.localize)(
									6273,
									null,
									this.U.remoteExtensionManagementServer.label,
								)
							: jt.M;
					}
				};
				(e.$hTb = ti),
					(e.$hTb = ti = Ne([j(1, u.$MQb), j(2, c.$EQb), j(3, ne.$JSb)], ti));
				let kt = class extends jt {
					constructor(Tt, qt, At) {
						super(
							"extensions.localinstall",
							qt.localExtensionManagementServer,
							!1,
							Tt,
							qt,
							At,
						);
					}
					Y() {
						return (0, t.localize)(6274, null);
					}
				};
				(e.$iTb = kt),
					(e.$iTb = kt = Ne([j(0, u.$MQb), j(1, c.$EQb), j(2, ne.$JSb)], kt));
				let hi = class extends jt {
					constructor(Tt, qt, At) {
						super(
							"extensions.webInstall",
							qt.webExtensionManagementServer,
							!1,
							Tt,
							qt,
							At,
						);
					}
					Y() {
						return (0, t.localize)(6275, null);
					}
				};
				(e.$jTb = hi),
					(e.$jTb = hi = Ne([j(0, u.$MQb), j(1, c.$EQb), j(2, ne.$JSb)], hi));
				let Kt = class extends lt {
					static {
						Ce = this;
					}
					static {
						this.UninstallLabel = (0, t.localize)(6276, null);
					}
					static {
						this.M = (0, t.localize)(6277, null);
					}
					static {
						this.UninstallClass = `${lt.LABEL_ACTION_CLASS} uninstall`;
					}
					static {
						this.N = `${lt.LABEL_ACTION_CLASS} uninstall uninstalling`;
					}
					constructor(Tt, qt) {
						super(
							"extensions.uninstall",
							Ce.UninstallLabel,
							Ce.UninstallClass,
							!1,
						),
							(this.O = Tt),
							(this.P = qt),
							this.update();
					}
					update() {
						if (!this.extension) {
							this.enabled = !1;
							return;
						}
						const Tt = this.extension.state;
						if (Tt === u.ExtensionState.Uninstalling) {
							(this.label = Ce.M), (this.class = Ce.N), (this.enabled = !1);
							return;
						}
						if (
							((this.label = Ce.UninstallLabel),
							(this.class = Ce.UninstallClass),
							(this.tooltip = Ce.UninstallLabel),
							Tt !== u.ExtensionState.Installed)
						) {
							this.enabled = !1;
							return;
						}
						if (this.extension.isBuiltin) {
							this.enabled = !1;
							return;
						}
						this.enabled = !0;
					}
					async run() {
						if (this.extension) {
							(0, U.$oib)(
								(0, t.localize)(6278, null, this.extension.displayName),
							);
							try {
								await this.O.uninstall(this.extension),
									(0, U.$oib)(
										(0, t.localize)(6279, null, this.extension.displayName),
									);
							} catch (Tt) {
								(0, J.$8)(Tt) || this.P.error((0, J.$bb)(Tt));
							}
						}
					}
				};
				(e.$kTb = Kt), (e.$kTb = Kt = Ce = Ne([j(0, u.$MQb), j(1, q.$GO)], Kt));
				let di = class extends lt {
					static {
						Le = this;
					}
					static {
						this.M = `${this.LABEL_ACTION_CLASS} prominent update`;
					}
					static {
						this.N = `${this.M} disabled`;
					}
					constructor(Tt, qt, At, Yt, ni) {
						super("extensions.update", (0, t.localize)(6280, null), Le.N, !1),
							(this.P = Tt),
							(this.Q = qt),
							(this.R = At),
							(this.S = Yt),
							(this.U = ni),
							(this.O = new w.$Gh()),
							this.update();
					}
					update() {
						this.O.queue(() => this.W()),
							this.extension &&
								(this.label = this.P
									? (0, t.localize)(6281, null, this.extension.latestVersion)
									: (0, t.localize)(6282, null));
					}
					async W() {
						if (
							((this.enabled = !1),
							(this.class = Le.N),
							!this.extension || this.extension.deprecationInfo)
						)
							return;
						const Tt = await this.Q.canInstall(this.extension),
							qt = this.extension.state === u.ExtensionState.Installed;
						(this.enabled = Tt && qt && this.extension.outdated),
							(this.class = this.enabled ? Le.M : Le.N);
					}
					async run() {
						if (!this.extension) return;
						const Tt = await this.Q.shouldRequireConsentToUpdate(
							this.extension,
						);
						if (Tt) {
							const { result: qt } = await this.R.prompt({
								type: "warning",
								title: (0, t.localize)(6283, null, this.extension.displayName),
								message: (0, t.localize)(6284, null, Tt),
								buttons: [
									{ label: (0, t.localize)(6285, null), run: () => "update" },
									{ label: (0, t.localize)(6286, null), run: () => "review" },
									{ label: (0, t.localize)(6287, null), run: () => "cancel" },
								],
							});
							if (qt === "cancel") return;
							if (qt === "review")
								return this.extension.hasChangelog()
									? this.Q.open(this.extension, {
											tab: u.ExtensionEditorTab.Changelog,
										})
									: this.extension.repository
										? this.S.open(this.extension.repository)
										: this.Q.open(this.extension);
						}
						return (
							(0, U.$oib)(
								(0, t.localize)(
									6288,
									null,
									this.extension.displayName,
									this.extension.latestVersion,
								),
							),
							this.X(this.extension)
						);
					}
					async X(Tt) {
						try {
							await this.Q.install(
								Tt,
								Tt.local?.preRelease
									? { installPreReleaseVersion: !0 }
									: void 0,
							),
								(0, U.$oib)(
									(0, t.localize)(6289, null, Tt.displayName, Tt.latestVersion),
								);
						} catch (qt) {
							this.U.createInstance(
								nt,
								Tt,
								Tt.latestVersion,
								h.InstallOperation.Update,
								qt,
							).run();
						}
					}
				};
				(e.$lTb = di),
					(e.$lTb =
						di =
						Le =
							Ne([j(1, u.$MQb), j(2, q.$GO), j(3, A.$7rb), j(4, o.$Li)], di));
				let Ye = class extends lt {
					static {
						Fe = this;
					}
					static {
						this.ID =
							"workbench.extensions.action.toggleAutoUpdateForExtension";
					}
					static {
						this.LABEL = (0, t.localize2)(6405, "Auto Update");
					}
					static {
						this.M = `${lt.EXTENSION_ACTION_CLASS} auto-update`;
					}
					static {
						this.N = `${this.M} hide`;
					}
					constructor(Tt, qt, At) {
						super(Fe.ID, Fe.LABEL.value, Fe.N),
							(this.O = Tt),
							(this.P = qt),
							this.D(
								At.onDidChangeConfiguration((Yt) => {
									Yt.affectsConfiguration(u.$OQb) && this.update();
								}),
							),
							this.update();
					}
					update() {
						(this.enabled = !1),
							(this.class = Fe.N),
							this.extension &&
								(this.extension.isBuiltin ||
									this.extension.deprecationInfo?.disallowInstall ||
									(this.O.getAutoUpdateValue() === "onlyEnabledExtensions" &&
										!this.P.isEnabledEnablementState(
											this.extension.enablementState,
										)) ||
									((this.enabled = !0),
									(this.class = Fe.M),
									(this.checked = this.O.isAutoUpdateEnabledFor(
										this.extension,
									))));
					}
					async run() {
						if (!this.extension) return;
						const Tt = !this.O.isAutoUpdateEnabledFor(this.extension);
						await this.O.updateAutoUpdateEnablementFor(this.extension, Tt),
							Tt
								? (0, U.$oib)(
										(0, t.localize)(6290, null, this.extension.displayName),
									)
								: (0, U.$oib)(
										(0, t.localize)(6291, null, this.extension.displayName),
									);
					}
				};
				(e.$mTb = Ye),
					(e.$mTb =
						Ye =
						Fe =
							Ne([j(0, u.$MQb), j(1, c.$IQb), j(2, v.$gj)], Ye));
				let ze = class extends lt {
					static {
						Oe = this;
					}
					static {
						this.ID =
							"workbench.extensions.action.toggleAutoUpdatesForPublisher";
					}
					static {
						this.LABEL = (0, t.localize)(6292, null);
					}
					constructor(Tt) {
						super(Oe.ID, Oe.LABEL), (this.M = Tt);
					}
					update() {}
					async run() {
						if (!this.extension) return;
						(0, U.$oib)(
							(0, t.localize)(6293, null, this.extension.publisherDisplayName),
						);
						const Tt = !this.M.isAutoUpdateEnabledFor(this.extension.publisher);
						await this.M.updateAutoUpdateEnablementFor(
							this.extension.publisher,
							Tt,
						),
							Tt
								? (0, U.$oib)(
										(0, t.localize)(6294, null, this.extension.displayName),
									)
								: (0, U.$oib)(
										(0, t.localize)(6295, null, this.extension.displayName),
									);
					}
				};
				(e.$nTb = ze), (e.$nTb = ze = Oe = Ne([j(0, u.$MQb)], ze));
				let Xe = class extends lt {
					static {
						xe = this;
					}
					static {
						this.M = `${lt.LABEL_ACTION_CLASS} migrate`;
					}
					static {
						this.N = `${this.M} disabled`;
					}
					constructor(Tt, qt) {
						super(
							"extensionsAction.migrateDeprecatedExtension",
							(0, t.localize)(6296, null),
							xe.N,
							!1,
						),
							(this.O = Tt),
							(this.P = qt),
							this.update();
					}
					update() {
						if (
							((this.enabled = !1),
							(this.class = xe.N),
							!this.extension?.local ||
								this.extension.state !== u.ExtensionState.Installed ||
								!this.extension.deprecationInfo?.extension)
						)
							return;
						const Tt = this.extension.deprecationInfo.extension.id;
						this.P.local.some((qt) => (0, g.$7p)(qt.identifier, { id: Tt })) ||
							((this.enabled = !0),
							(this.class = xe.M),
							(this.tooltip = (0, t.localize)(
								6297,
								null,
								this.extension.deprecationInfo.extension.displayName,
							)),
							(this.label = this.O
								? (0, t.localize)(6298, null)
								: this.tooltip));
					}
					async run() {
						if (!this.extension?.deprecationInfo?.extension) return;
						const Tt = this.extension.local;
						await this.P.uninstall(this.extension);
						const [qt] = await this.P.getExtensions(
							[
								{
									id: this.extension.deprecationInfo.extension.id,
									preRelease:
										this.extension.deprecationInfo?.extension?.preRelease,
								},
							],
							B.CancellationToken.None,
						);
						await this.P.install(qt, { isMachineScoped: Tt?.isMachineScoped });
					}
				};
				(e.$oTb = Xe), (e.$oTb = Xe = xe = Ne([j(1, u.$MQb)], Xe));
				let It = class extends lt {
					constructor(Tt, qt, At, Yt, ni) {
						super(Tt, qt, At, Yt), (this.M = ni), (this.N = null);
					}
					createActionViewItem(Tt) {
						return (this.N = this.M.createInstance(Lt, this, Tt)), this.N;
					}
					run({ actionGroups: Tt, disposeActionsOnHide: qt }) {
						return this.N?.showMenu(Tt, qt), Promise.resolve();
					}
				};
				(e.$pTb = It), (e.$pTb = It = Ne([j(4, o.$Li)], It));
				let Lt = class extends G.$_ib {
					constructor(Tt, qt, At) {
						super(null, Tt, { ...qt, icon: !0, label: !0 }), (this.g = At);
					}
					showMenu(Tt, qt) {
						if (this.element) {
							const At = this.h(Tt),
								Yt = E.$tgb(this.element),
								ni = { x: Yt.left, y: Yt.top + Yt.height + 10 };
							this.g.showContextMenu({
								getAnchor: () => ni,
								getActions: () => At,
								actionRunner: this.actionRunner,
								onHide: () => {
									qt && (0, r.$Wc)(At);
								},
							});
						}
					}
					h(Tt) {
						let qt = [];
						for (const At of Tt) qt = [...qt, ...At, new i.$tj()];
						return qt.length ? qt.slice(0, qt.length - 1) : qt;
					}
				};
				(e.$qTb = Lt), (e.$qTb = Lt = Ne([j(2, m.$Xxb)], Lt));
				async function xt(Et, Tt, qt) {
					return qt.invokeFunction(async (At) => {
						const Yt = At.get(u.$MQb),
							ni = At.get(c.$IQb),
							bi = At.get(D.$YX),
							fi = At.get(n.$9Qb),
							Ti = At.get(n.$0Qb),
							wt = At.get(z.$rRb),
							We = [];
						if (Et) {
							switch (
								(We.push(["extension", Et.identifier.id]),
								We.push(["isBuiltinExtension", Et.isBuiltin]),
								We.push([
									"isDefaultApplicationScopedExtension",
									Et.local && (0, p.$Jn)(Et.local.manifest),
								]),
								We.push([
									"isApplicationScopedExtension",
									Et.local && Et.local.isApplicationScoped,
								]),
								We.push(["isWorkspaceScopedExtension", Et.isWorkspaceScoped]),
								We.push(["isGalleryExtension", !!Et.identifier.uuid]),
								Et.local && We.push(["extensionSource", Et.local.source]),
								We.push([
									"extensionHasConfiguration",
									Et.local &&
										!!Et.local.manifest.contributes &&
										!!Et.local.manifest.contributes.configuration,
								]),
								We.push([
									"extensionHasKeybindings",
									Et.local &&
										!!Et.local.manifest.contributes &&
										!!Et.local.manifest.contributes.keybindings,
								]),
								We.push([
									"extensionHasCommands",
									Et.local &&
										!!Et.local.manifest.contributes &&
										!!Et.local.manifest.contributes?.commands,
								]),
								We.push([
									"isExtensionRecommended",
									!!fi.getAllRecommendationsWithReason()[
										Et.identifier.id.toLowerCase()
									],
								]),
								We.push([
									"isExtensionWorkspaceRecommended",
									fi.getAllRecommendationsWithReason()[
										Et.identifier.id.toLowerCase()
									]?.reasonId === n.ExtensionRecommendationReason.Workspace,
								]),
								We.push([
									"isUserIgnoredRecommendation",
									Ti.globalIgnoredRecommendations.some(
										(Pi) => Pi === Et.identifier.id.toLowerCase(),
									),
								]),
								We.push(["isExtensionPinned", Et.pinned]),
								We.push([
									"isExtensionEnabled",
									ni.isEnabledEnablementState(Et.enablementState),
								]),
								Et.state)
							) {
								case u.ExtensionState.Installing:
									We.push(["extensionStatus", "installing"]);
									break;
								case u.ExtensionState.Installed:
									We.push(["extensionStatus", "installed"]);
									break;
								case u.ExtensionState.Uninstalling:
									We.push(["extensionStatus", "uninstalling"]);
									break;
								case u.ExtensionState.Uninstalled:
									We.push(["extensionStatus", "uninstalled"]);
									break;
							}
							We.push([
								"installedExtensionIsPreReleaseVersion",
								!!Et.local?.isPreReleaseVersion,
							]),
								We.push([
									"installedExtensionIsOptedToPreRelease",
									!!Et.local?.preRelease,
								]),
								We.push([
									"galleryExtensionIsPreReleaseVersion",
									!!Et.gallery?.properties.isPreReleaseVersion,
								]),
								We.push([
									"galleryExtensionHasPreReleaseVersion",
									Et.gallery?.hasPreReleaseVersion,
								]),
								We.push([
									"extensionHasPreReleaseVersion",
									Et.hasPreReleaseVersion,
								]),
								We.push(["extensionHasReleaseVersion", Et.hasReleaseVersion]),
								We.push([
									"extensionDisallowInstall",
									!!Et.deprecationInfo?.disallowInstall,
								]);
							const [Si, gi, ki] = await Promise.all([
								wt.getColorThemes(),
								wt.getFileIconThemes(),
								wt.getProductIconThemes(),
							]);
							We.push(["extensionHasColorThemes", Si.some((Pi) => $i(Pi, Et))]),
								We.push([
									"extensionHasFileIconThemes",
									gi.some((Pi) => $i(Pi, Et)),
								]),
								We.push([
									"extensionHasProductIconThemes",
									ki.some((Pi) => $i(Pi, Et)),
								]),
								We.push(["canSetLanguage", Yt.canSetLanguage(Et)]),
								We.push([
									"isActiveLanguagePackExtension",
									Et.gallery && ie.$z === (0, le.$EJ)(Et.gallery),
								]);
						}
						return bi.getMenuActions(
							D.$XX.ExtensionContext,
							Tt.createOverlay(We),
							{ shouldForwardArgs: !0 },
						);
					});
				}
				function Vt(Et, Tt) {
					const qt = [];
					for (const [, At] of Et)
						qt.push(
							At.map((Yt) =>
								Yt instanceof i.$uj ? Yt : Tt.createInstance(Ut, Yt),
							),
						);
					return qt;
				}
				async function Bt(Et, Tt, qt) {
					const At = await xt(Et, Tt, qt);
					return Vt(At, qt);
				}
				let Gt = class extends It {
					static {
						He = this;
					}
					static {
						this.ID = "extensions.manage";
					}
					static {
						this.O =
							`${lt.ICON_ACTION_CLASS} manage ` +
							I.ThemeIcon.asClassName(Y.$bSb);
					}
					static {
						this.P = `${this.O} hide`;
					}
					constructor(Tt, qt, At) {
						super(He.ID, "", "", !0, Tt),
							(this.Q = qt),
							(this.R = At),
							(this.tooltip = (0, t.localize)(6299, null)),
							this.update();
					}
					async getActionGroups() {
						const Tt = [],
							qt = await xt(this.extension, this.R, this.M),
							At = [],
							Yt = [],
							ni = [],
							bi = [];
						for (const [fi, Ti] of qt)
							fi === u.$3Qb
								? Yt.push(...Vt([[fi, Ti]], this.M)[0])
								: fi === u.$4Qb
									? ni.push(...Vt([[fi, Ti]], this.M)[0])
									: fi === u.$2Qb
										? At.push(...Vt([[fi, Ti]], this.M)[0])
										: bi.push(...Vt([[fi, Ti]], this.M));
						return (
							At.length && Tt.push(At),
							Tt.push([this.M.createInstance(Dt), this.M.createInstance(ii)]),
							Tt.push([this.M.createInstance(si), this.M.createInstance(Jt)]),
							ni.length && Tt.push(ni),
							Tt.push([
								...(Yt.length ? Yt : []),
								this.M.createInstance(mi, this.extension, !1),
								this.M.createInstance(Kt),
							]),
							bi.forEach((fi) => Tt.push(fi)),
							Tt.forEach((fi) =>
								fi.forEach((Ti) => {
									Ti instanceof lt && (Ti.extension = this.extension);
								}),
							),
							Tt
						);
					}
					async run() {
						return (
							await this.Q.whenInstalledExtensionsRegistered(),
							super.run({
								actionGroups: await this.getActionGroups(),
								disposeActionsOnHide: !0,
							})
						);
					}
					update() {
						if (((this.class = He.P), (this.enabled = !1), this.extension)) {
							const Tt = this.extension.state;
							(this.enabled = Tt === u.ExtensionState.Installed),
								(this.class =
									this.enabled || Tt === u.ExtensionState.Uninstalling
										? He.O
										: He.P);
						}
					}
				};
				(e.$sTb = Gt),
					(e.$sTb = Gt = He = Ne([j(0, o.$Li), j(1, l.$q2), j(2, L.$6j)], Gt));
				class Mt extends It {
					constructor(Tt, qt) {
						super(
							"extensionEditor.manageExtension",
							"",
							`${lt.ICON_ACTION_CLASS} manage ${I.ThemeIcon.asClassName(Y.$bSb)}`,
							!0,
							qt,
						),
							(this.O = Tt),
							(this.tooltip = (0, t.localize)(6300, null));
					}
					update() {}
					async run() {
						const Tt = [];
						return (
							(await Bt(this.extension, this.O, this.M)).forEach((qt) =>
								Tt.push(qt),
							),
							Tt.forEach((qt) =>
								qt.forEach((At) => {
									At instanceof lt && (At.extension = this.extension);
								}),
							),
							super.run({ actionGroups: Tt, disposeActionsOnHide: !0 })
						);
					}
				}
				e.$tTb = Mt;
				let Ut = class extends lt {
					constructor(Tt, qt) {
						super(Tt.id, Tt.label), (this.M = Tt), (this.N = qt);
					}
					get enabled() {
						return this.M.enabled;
					}
					set enabled(Tt) {
						this.M.enabled = Tt;
					}
					update() {
						this.extension &&
							(this.M.id === u.$VQb
								? (this.checked = !this.N.isExtensionIgnoredToSync(
										this.extension,
									))
								: this.M.id === Ye.ID
									? (this.checked = this.N.isAutoUpdateEnabledFor(
											this.extension,
										))
									: this.M.id === ze.ID
										? (this.checked = this.N.isAutoUpdateEnabledFor(
												this.extension.publisher,
											))
										: (this.checked = this.M.checked));
					}
					async run() {
						if (this.extension) {
							const Tt = this.extension.local
									? (0, g.$0p)(
											this.extension.local.manifest.publisher,
											this.extension.local.manifest.name,
										)
									: this.extension.gallery
										? (0, g.$0p)(
												this.extension.gallery.publisher,
												this.extension.gallery.name,
											)
										: this.extension.identifier.id,
								qt = {
									id: this.extension.identifier.id,
									version: this.extension.version,
									location: this.extension.local?.location,
								};
							await this.M.run(Tt, qt);
						}
					}
				};
				(e.$uTb = Ut), (e.$uTb = Ut = Ne([j(1, u.$MQb)], Ut));
				let ei = class extends lt {
					static {
						Ke = this;
					}
					static {
						this.ID = "workbench.extensions.action.togglePreRlease";
					}
					static {
						this.LABEL = (0, t.localize)(6301, null);
					}
					static {
						this.M = `${lt.LABEL_ACTION_CLASS} pre-release`;
					}
					static {
						this.N = `${this.M} hide`;
					}
					constructor(Tt) {
						super(Ke.ID, Ke.LABEL, Ke.N), (this.O = Tt), this.update();
					}
					update() {
						(this.enabled = !1),
							(this.class = Ke.N),
							this.extension &&
								(this.extension.isBuiltin ||
									(this.extension.state === u.ExtensionState.Installed &&
										this.extension.hasPreReleaseVersion &&
										this.extension.gallery &&
										((this.extension.preRelease &&
											!this.extension.isPreReleaseVersion) ||
											(!this.extension.preRelease &&
												!this.extension.gallery.hasPreReleaseVersion) ||
											((this.enabled = !0),
											(this.class = Ke.M),
											this.extension.preRelease
												? ((this.label = (0, t.localize)(6302, null)),
													(this.tooltip = (0, t.localize)(6303, null)))
												: ((this.label = (0, t.localize)(6304, null)),
													(this.tooltip = (0, t.localize)(6305, null)))))));
					}
					async run() {
						this.extension &&
							(this.O.open(this.extension, {
								showPreReleaseVersion: !this.extension.preRelease,
							}),
							await this.O.togglePreRelease(this.extension));
					}
				};
				(e.$vTb = ei), (e.$vTb = ei = Ke = Ne([j(0, u.$MQb)], ei));
				let mi = class extends lt {
					static {
						Je = this;
					}
					static {
						this.ID = "workbench.extensions.action.install.anotherVersion";
					}
					static {
						this.LABEL = (0, t.localize)(6306, null);
					}
					constructor(Tt, qt, At, Yt, ni, bi, fi, Ti) {
						super(Je.ID, Je.LABEL, lt.LABEL_ACTION_CLASS),
							(this.M = qt),
							(this.N = At),
							(this.O = Yt),
							(this.P = ni),
							(this.Q = bi),
							(this.R = fi),
							(this.S = Ti),
							(this.extension = Tt),
							this.update();
					}
					update() {
						(this.enabled =
							!!this.extension &&
							!this.extension.isBuiltin &&
							!!this.extension.identifier.uuid &&
							!this.extension.deprecationInfo),
							this.enabled &&
								this.M &&
								(this.enabled =
									!!this.extension?.local &&
									!!this.extension.server &&
									this.extension.state === u.ExtensionState.Installed);
					}
					async run() {
						if (!this.enabled || !this.extension) return;
						const Tt = this.extension.server
								? await this.extension.server.extensionManagementService.getTargetPlatform()
								: await this.O.getTargetPlatform(),
							qt = await this.P.getAllCompatibleVersions(
								this.extension.identifier,
								this.extension.local?.preRelease ??
									this.extension.gallery?.properties.isPreReleaseVersion ??
									!1,
								Tt,
								this.extension.gallery?.queryContext,
							);
						if (!qt.length) {
							await this.S.info((0, t.localize)(6307, null));
							return;
						}
						const At = qt.map((ni, bi) => ({
								id: ni.version,
								label: ni.version,
								description: `${(0, se.$dn)(new Date(Date.parse(ni.date)), !0)}${ni.isPreReleaseVersion ? ` (${(0, t.localize)(6308, null)})` : ""}${ni.version === this.extension?.local?.manifest.version ? ` (${(0, t.localize)(6309, null)})` : ""}`,
								ariaLabel: `${ni.isPreReleaseVersion ? "Pre-Release version" : "Release version"} ${ni.version}`,
								isPreReleaseVersion: ni.isPreReleaseVersion,
							})),
							Yt = await this.Q.pick(At, {
								placeHolder: (0, t.localize)(6310, null),
								matchOnDetail: !0,
							});
						if (Yt) {
							if (this.extension.local?.manifest.version === Yt.id) return;
							try {
								await this.N.install(this.extension, {
									installPreReleaseVersion: Yt.isPreReleaseVersion,
									version: Yt.id,
								});
							} catch (ni) {
								this.R.createInstance(
									nt,
									this.extension,
									Yt.id,
									h.InstallOperation.Install,
									ni,
								).run();
							}
						}
						return null;
					}
				};
				(e.$wTb = mi),
					(e.$wTb =
						mi =
						Je =
							Ne(
								[
									j(2, u.$MQb),
									j(3, c.$GQb),
									j(4, h.$Ep),
									j(5, O.$DJ),
									j(6, o.$Li),
									j(7, q.$GO),
								],
								mi,
							));
				let ii = class extends lt {
					static {
						Te = this;
					}
					static {
						this.ID = "extensions.enableForWorkspace";
					}
					static {
						this.LABEL = (0, t.localize)(6311, null);
					}
					constructor(Tt, qt) {
						super(Te.ID, Te.LABEL, lt.LABEL_ACTION_CLASS),
							(this.M = Tt),
							(this.N = qt),
							(this.tooltip = (0, t.localize)(6312, null)),
							this.update();
					}
					update() {
						(this.enabled = !1),
							this.extension &&
								this.extension.local &&
								!this.extension.isWorkspaceScoped &&
								(this.enabled =
									this.extension.state === u.ExtensionState.Installed &&
									!this.N.isEnabled(this.extension.local) &&
									this.N.canChangeWorkspaceEnablement(this.extension.local));
					}
					async run() {
						if (this.extension)
							return this.M.setEnablement(
								this.extension,
								c.EnablementState.EnabledWorkspace,
							);
					}
				};
				(e.$xTb = ii),
					(e.$xTb = ii = Te = Ne([j(0, u.$MQb), j(1, c.$IQb)], ii));
				let Dt = class extends lt {
					static {
						Ee = this;
					}
					static {
						this.ID = "extensions.enableGlobally";
					}
					static {
						this.LABEL = (0, t.localize)(6313, null);
					}
					constructor(Tt, qt) {
						super(Ee.ID, Ee.LABEL, lt.LABEL_ACTION_CLASS),
							(this.M = Tt),
							(this.N = qt),
							(this.tooltip = (0, t.localize)(6314, null)),
							this.update();
					}
					update() {
						(this.enabled = !1),
							this.extension &&
								this.extension.local &&
								!this.extension.isWorkspaceScoped &&
								(this.enabled =
									this.extension.state === u.ExtensionState.Installed &&
									this.N.isDisabledGlobally(this.extension.local) &&
									this.N.canChangeEnablement(this.extension.local));
					}
					async run() {
						if (this.extension)
							return this.M.setEnablement(
								this.extension,
								c.EnablementState.EnabledGlobally,
							);
					}
				};
				(e.$yTb = Dt),
					(e.$yTb = Dt = Ee = Ne([j(0, u.$MQb), j(1, c.$IQb)], Dt));
				let Jt = class extends lt {
					static {
						Ie = this;
					}
					static {
						this.ID = "extensions.disableForWorkspace";
					}
					static {
						this.LABEL = (0, t.localize)(6315, null);
					}
					constructor(Tt, qt, At, Yt) {
						super(Ie.ID, Ie.LABEL, lt.LABEL_ACTION_CLASS),
							(this.M = Tt),
							(this.N = qt),
							(this.O = At),
							(this.P = Yt),
							(this.tooltip = (0, t.localize)(6316, null)),
							this.update(),
							this.D(this.P.onDidChangeExtensions(() => this.update()));
					}
					update() {
						(this.enabled = !1),
							this.extension &&
								this.extension.local &&
								!this.extension.isWorkspaceScoped &&
								this.P.extensions.some(
									(Tt) =>
										(0, g.$7p)(
											{ id: Tt.identifier.value, uuid: Tt.uuid },
											this.extension.identifier,
										) && this.M.getWorkbenchState() !== b.WorkbenchState.EMPTY,
								) &&
								(this.enabled =
									this.extension.state === u.ExtensionState.Installed &&
									(this.extension.enablementState ===
										c.EnablementState.EnabledGlobally ||
										this.extension.enablementState ===
											c.EnablementState.EnabledWorkspace) &&
									this.O.canChangeWorkspaceEnablement(this.extension.local));
					}
					async run() {
						if (this.extension)
							return this.N.setEnablement(
								this.extension,
								c.EnablementState.DisabledWorkspace,
							);
					}
				};
				(e.$zTb = Jt),
					(e.$zTb =
						Jt =
						Ie =
							Ne([j(0, b.$Vi), j(1, u.$MQb), j(2, c.$IQb), j(3, l.$q2)], Jt));
				let si = class extends lt {
					static {
						Be = this;
					}
					static {
						this.ID = "extensions.disableGlobally";
					}
					static {
						this.LABEL = (0, t.localize)(6317, null);
					}
					constructor(Tt, qt, At) {
						super(Be.ID, Be.LABEL, lt.LABEL_ACTION_CLASS),
							(this.M = Tt),
							(this.N = qt),
							(this.O = At),
							(this.tooltip = (0, t.localize)(6318, null)),
							this.update(),
							this.D(this.O.onDidChangeExtensions(() => this.update()));
					}
					update() {
						(this.enabled = !1),
							this.extension &&
								this.extension.local &&
								!this.extension.isWorkspaceScoped &&
								this.O.extensions.some((Tt) =>
									(0, g.$7p)(
										{ id: Tt.identifier.value, uuid: Tt.uuid },
										this.extension.identifier,
									),
								) &&
								(this.enabled =
									this.extension.state === u.ExtensionState.Installed &&
									(this.extension.enablementState ===
										c.EnablementState.EnabledGlobally ||
										this.extension.enablementState ===
											c.EnablementState.EnabledWorkspace) &&
									this.N.canChangeEnablement(this.extension.local));
					}
					async run() {
						if (this.extension)
							return this.M.setEnablement(
								this.extension,
								c.EnablementState.DisabledGlobally,
							);
					}
				};
				(e.$ATb = si),
					(e.$ATb =
						si =
						Be =
							Ne([j(0, u.$MQb), j(1, c.$IQb), j(2, l.$q2)], si));
				let Zt = class extends ct {
					constructor(Tt) {
						super("extensions.enable", lt.LABEL_ACTION_CLASS, [
							[Tt.createInstance(Dt), Tt.createInstance(ii)],
						]);
					}
				};
				(e.$BTb = Zt), (e.$BTb = Zt = Ne([j(0, o.$Li)], Zt));
				let ci = class extends ct {
					constructor(Tt) {
						super("extensions.disable", lt.LABEL_ACTION_CLASS, [
							[Tt.createInstance(si), Tt.createInstance(Jt)],
						]);
					}
				};
				(e.$CTb = ci), (e.$CTb = ci = Ne([j(0, o.$Li)], ci));
				let ri = class extends lt {
					static {
						Se = this;
					}
					static {
						this.M = `${lt.LABEL_ACTION_CLASS} reload`;
					}
					static {
						this.N = `${this.M} disabled`;
					}
					constructor(Tt, qt, At, Yt, ni, bi) {
						super("extensions.runtimeState", "", Se.N, !1),
							(this.O = Tt),
							(this.P = qt),
							(this.Q = At),
							(this.R = Yt),
							(this.S = ni),
							(this.U = bi),
							(this.updateWhenCounterExtensionChanges = !0),
							this.D(this.R.onDidChangeExtensions(() => this.update())),
							this.update();
					}
					update() {
						if (
							((this.enabled = !1),
							(this.tooltip = ""),
							(this.class = Se.N),
							!this.extension)
						)
							return;
						const Tt = this.extension.state;
						if (
							Tt === u.ExtensionState.Installing ||
							Tt === u.ExtensionState.Uninstalling ||
							(this.extension.local &&
								this.extension.local.manifest &&
								this.extension.local.manifest.contributes &&
								this.extension.local.manifest.contributes.localizations &&
								this.extension.local.manifest.contributes.localizations.length >
									0)
						)
							return;
						const qt = this.extension.runtimeState;
						qt &&
							((this.enabled = !0),
							(this.class = Se.M),
							(this.tooltip = qt.reason),
							(this.label =
								qt.action === u.ExtensionRuntimeActionType.ReloadWindow
									? (0, t.localize)(6319, null)
									: qt.action === u.ExtensionRuntimeActionType.RestartExtensions
										? (0, t.localize)(6320, null)
										: qt.action === u.ExtensionRuntimeActionType.QuitAndInstall
											? (0, t.localize)(6321, null)
											: qt.action ===
														u.ExtensionRuntimeActionType.ApplyUpdate ||
													qt.action ===
														u.ExtensionRuntimeActionType.DownloadUpdate
												? (0, t.localize)(6322, null, this.S.nameShort)
												: ""));
					}
					async run() {
						const Tt = this.extension?.runtimeState;
						if (Tt?.action) {
							if (
								(this.U.publicLog2("extensions:runtimestate:action", {
									action: Tt.action,
								}),
								Tt?.action === u.ExtensionRuntimeActionType.ReloadWindow)
							)
								return this.O.reload();
							if (Tt?.action === u.ExtensionRuntimeActionType.RestartExtensions)
								return this.P.updateRunningExtensions();
							if (Tt?.action === u.ExtensionRuntimeActionType.DownloadUpdate)
								return this.Q.downloadUpdate();
							if (Tt?.action === u.ExtensionRuntimeActionType.ApplyUpdate)
								return this.Q.applyUpdate();
							if (Tt?.action === u.ExtensionRuntimeActionType.QuitAndInstall)
								return this.Q.quitAndInstall();
						}
					}
				};
				(e.$DTb = ri),
					(e.$DTb =
						ri =
						Se =
							Ne(
								[
									j(0, s.$asb),
									j(1, u.$MQb),
									j(2, me.$_rb),
									j(3, l.$q2),
									j(4, H.$Bk),
									j(5, $e.$km),
								],
								ri,
							));
				function $i(Et, Tt) {
					return !!(
						Tt &&
						Et.extensionData &&
						p.$Gn.equals(Et.extensionData.extensionId, Tt.identifier.id)
					);
				}
				function Wt(Et, Tt, qt, At) {
					const Yt = [];
					for (const ni of Et)
						$i(ni, qt) &&
							!(At && ni === Tt) &&
							Yt.push({ label: ni.label, id: ni.id });
					return (
						At &&
							(Yt.push({
								type: "separator",
								label: (0, t.localize)(6323, null),
							}),
							Yt.push({ label: Tt.label, id: Tt.id })),
						Yt
					);
				}
				let tt = class extends lt {
					static {
						ke = this;
					}
					static {
						this.ID = "workbench.extensions.action.setColorTheme";
					}
					static {
						this.TITLE = (0, t.localize2)(6406, "Set Color Theme");
					}
					static {
						this.M = `${lt.LABEL_ACTION_CLASS} theme`;
					}
					static {
						this.N = `${this.M} disabled`;
					}
					constructor(Tt, qt, At, Yt) {
						super(ke.ID, ke.TITLE.value, ke.N, !1),
							(this.O = qt),
							(this.P = At),
							(this.Q = Yt),
							this.D(
								C.Event.any(Tt.onDidChangeExtensions, qt.onDidColorThemeChange)(
									() => this.update(),
									this,
								),
							),
							this.update();
					}
					update() {
						this.O.getColorThemes().then((Tt) => {
							(this.enabled = this.R(Tt)),
								(this.class = this.enabled ? ke.M : ke.N);
						});
					}
					R(Tt) {
						return (
							!!this.extension &&
							this.extension.state === u.ExtensionState.Installed &&
							this.Q.isEnabledEnablementState(this.extension.enablementState) &&
							Tt.some((qt) => $i(qt, this.extension))
						);
					}
					async run(
						{ showCurrentTheme: Tt, ignoreFocusLost: qt } = {
							showCurrentTheme: !1,
							ignoreFocusLost: !1,
						},
					) {
						const At = await this.O.getColorThemes();
						if (!this.R(At)) return;
						const Yt = this.O.getColorTheme(),
							ni = new w.$Jh(100),
							bi = Wt(At, Yt, this.extension, Tt),
							fi = await this.P.pick(bi, {
								placeHolder: (0, t.localize)(6324, null),
								onDidFocus: (Ti) =>
									ni.trigger(() => this.O.setColorTheme(Ti.id, void 0)),
								ignoreFocusLost: qt,
							});
						return this.O.setColorTheme(fi ? fi.id : Yt.id, "auto");
					}
				};
				(e.$ETb = tt),
					(e.$ETb =
						tt =
						ke =
							Ne([j(0, l.$q2), j(1, z.$rRb), j(2, O.$DJ), j(3, c.$IQb)], tt));
				let at = class extends lt {
					static {
						Ue = this;
					}
					static {
						this.ID = "workbench.extensions.action.setFileIconTheme";
					}
					static {
						this.TITLE = (0, t.localize2)(6407, "Set File Icon Theme");
					}
					static {
						this.M = `${lt.LABEL_ACTION_CLASS} theme`;
					}
					static {
						this.N = `${this.M} disabled`;
					}
					constructor(Tt, qt, At, Yt) {
						super(Ue.ID, Ue.TITLE.value, Ue.N, !1),
							(this.O = qt),
							(this.P = At),
							(this.Q = Yt),
							this.D(
								C.Event.any(
									Tt.onDidChangeExtensions,
									qt.onDidFileIconThemeChange,
								)(() => this.update(), this),
							),
							this.update();
					}
					update() {
						this.O.getFileIconThemes().then((Tt) => {
							(this.enabled = this.R(Tt)),
								(this.class = this.enabled ? Ue.M : Ue.N);
						});
					}
					R(Tt) {
						return (
							!!this.extension &&
							this.extension.state === u.ExtensionState.Installed &&
							this.Q.isEnabledEnablementState(this.extension.enablementState) &&
							Tt.some((qt) => $i(qt, this.extension))
						);
					}
					async run(
						{ showCurrentTheme: Tt, ignoreFocusLost: qt } = {
							showCurrentTheme: !1,
							ignoreFocusLost: !1,
						},
					) {
						const At = await this.O.getFileIconThemes();
						if (!this.R(At)) return;
						const Yt = this.O.getFileIconTheme(),
							ni = new w.$Jh(100),
							bi = Wt(At, Yt, this.extension, Tt),
							fi = await this.P.pick(bi, {
								placeHolder: (0, t.localize)(6325, null),
								onDidFocus: (Ti) =>
									ni.trigger(() => this.O.setFileIconTheme(Ti.id, void 0)),
								ignoreFocusLost: qt,
							});
						return this.O.setFileIconTheme(fi ? fi.id : Yt.id, "auto");
					}
				};
				(e.$FTb = at),
					(e.$FTb =
						at =
						Ue =
							Ne([j(0, l.$q2), j(1, z.$rRb), j(2, O.$DJ), j(3, c.$IQb)], at));
				let pi = class extends lt {
					static {
						qe = this;
					}
					static {
						this.ID = "workbench.extensions.action.setProductIconTheme";
					}
					static {
						this.TITLE = (0, t.localize2)(6408, "Set Product Icon Theme");
					}
					static {
						this.M = `${lt.LABEL_ACTION_CLASS} theme`;
					}
					static {
						this.N = `${this.M} disabled`;
					}
					constructor(Tt, qt, At, Yt) {
						super(qe.ID, qe.TITLE.value, qe.N, !1),
							(this.O = qt),
							(this.P = At),
							(this.Q = Yt),
							this.D(
								C.Event.any(
									Tt.onDidChangeExtensions,
									qt.onDidProductIconThemeChange,
								)(() => this.update(), this),
							),
							this.update();
					}
					update() {
						this.O.getProductIconThemes().then((Tt) => {
							(this.enabled = this.R(Tt)),
								(this.class = this.enabled ? qe.M : qe.N);
						});
					}
					R(Tt) {
						return (
							!!this.extension &&
							this.extension.state === u.ExtensionState.Installed &&
							this.Q.isEnabledEnablementState(this.extension.enablementState) &&
							Tt.some((qt) => $i(qt, this.extension))
						);
					}
					async run(
						{ showCurrentTheme: Tt, ignoreFocusLost: qt } = {
							showCurrentTheme: !1,
							ignoreFocusLost: !1,
						},
					) {
						const At = await this.O.getProductIconThemes();
						if (!this.R(At)) return;
						const Yt = this.O.getProductIconTheme(),
							ni = new w.$Jh(100),
							bi = Wt(At, Yt, this.extension, Tt),
							fi = await this.P.pick(bi, {
								placeHolder: (0, t.localize)(6326, null),
								onDidFocus: (Ti) =>
									ni.trigger(() => this.O.setProductIconTheme(Ti.id, void 0)),
								ignoreFocusLost: qt,
							});
						return this.O.setProductIconTheme(fi ? fi.id : Yt.id, "auto");
					}
				};
				(e.$GTb = pi),
					(e.$GTb =
						pi =
						qe =
							Ne([j(0, l.$q2), j(1, z.$rRb), j(2, O.$DJ), j(3, c.$IQb)], pi));
				let Li = class extends lt {
					static {
						Ae = this;
					}
					static {
						this.ID = "workbench.extensions.action.setDisplayLanguage";
					}
					static {
						this.TITLE = (0, t.localize2)(6409, "Set Display Language");
					}
					static {
						this.M = `${lt.LABEL_ACTION_CLASS} language`;
					}
					static {
						this.N = `${this.M} disabled`;
					}
					constructor(Tt) {
						super(Ae.ID, Ae.TITLE.value, Ae.N, !1),
							(this.O = Tt),
							this.update();
					}
					update() {
						(this.enabled = !1),
							(this.class = Ae.N),
							this.extension &&
								this.O.canSetLanguage(this.extension) &&
								((this.extension.gallery &&
									ie.$z === (0, le.$EJ)(this.extension.gallery)) ||
									((this.enabled = !0), (this.class = Ae.M)));
					}
					async run() {
						return this.extension && this.O.setLanguage(this.extension);
					}
				};
				(e.$HTb = Li), (e.$HTb = Li = Ae = Ne([j(0, u.$MQb)], Li));
				let Di = class extends lt {
					static {
						Me = this;
					}
					static {
						this.ID = "workbench.extensions.action.clearLanguage";
					}
					static {
						this.TITLE = (0, t.localize2)(6410, "Clear Display Language");
					}
					static {
						this.M = `${lt.LABEL_ACTION_CLASS} language`;
					}
					static {
						this.N = `${this.M} disabled`;
					}
					constructor(Tt, qt) {
						super(Me.ID, Me.TITLE.value, Me.N, !1),
							(this.O = Tt),
							(this.P = qt),
							this.update();
					}
					update() {
						(this.enabled = !1),
							(this.class = Me.N),
							this.extension &&
								this.O.canSetLanguage(this.extension) &&
								((this.extension.gallery &&
									ie.$z !== (0, le.$EJ)(this.extension.gallery)) ||
									((this.enabled = !0), (this.class = Me.M)));
					}
					async run() {
						return this.extension && this.P.clearLocalePreference();
					}
				};
				(e.$ITb = Di),
					(e.$ITb = Di = Me = Ne([j(0, u.$MQb), j(1, oe.$7Sb)], Di));
				let Ui = class extends i.$rj {
					static {
						De = this;
					}
					static {
						this.ID = "workbench.extensions.action.showRecommendedExtension";
					}
					static {
						this.LABEL = (0, t.localize)(6327, null);
					}
					constructor(Tt, qt, At) {
						super(De.ID, De.LABEL, void 0, !1),
							(this.g = qt),
							(this.h = At),
							(this.f = Tt);
					}
					async run() {
						const qt = (
							await this.g.openPaneComposite(
								u.$LQb,
								Z.ViewContainerLocation.Sidebar,
								!0,
							)
						)?.getViewPaneContainer();
						qt.search(`@id:${this.f}`), qt.focus();
						const [At] = await this.h.getExtensions(
							[{ id: this.f }],
							{ source: "install-recommendation" },
							B.CancellationToken.None,
						);
						return At ? this.h.open(At) : null;
					}
				};
				(e.$JTb = Ui),
					(e.$JTb = Ui = De = Ne([j(1, Q.$6Sb), j(2, u.$MQb)], Ui));
				let Wi = class extends i.$rj {
					static {
						Re = this;
					}
					static {
						this.ID = "workbench.extensions.action.installRecommendedExtension";
					}
					static {
						this.LABEL = (0, t.localize)(6328, null);
					}
					constructor(Tt, qt, At, Yt) {
						super(Re.ID, Re.LABEL, void 0, !1),
							(this.g = qt),
							(this.h = At),
							(this.t = Yt),
							(this.f = Tt);
					}
					async run() {
						const qt = (
							await this.g.openPaneComposite(
								u.$LQb,
								Z.ViewContainerLocation.Sidebar,
								!0,
							)
						)?.getViewPaneContainer();
						qt.search(`@id:${this.f}`), qt.focus();
						const [At] = await this.t.getExtensions(
							[{ id: this.f }],
							{ source: "install-recommendation" },
							B.CancellationToken.None,
						);
						if (At) {
							await this.t.open(At);
							try {
								await this.t.install(At);
							} catch (Yt) {
								this.h
									.createInstance(
										nt,
										At,
										At.latestVersion,
										h.InstallOperation.Install,
										Yt,
									)
									.run();
							}
						}
					}
				};
				(e.$KTb = Wi),
					(e.$KTb =
						Wi =
						Re =
							Ne([j(1, Q.$6Sb), j(2, o.$Li), j(3, u.$MQb)], Wi));
				let Gi = class extends i.$rj {
					static {
						je = this;
					}
					static {
						this.ID = "extensions.ignore";
					}
					static {
						this.f = `${lt.LABEL_ACTION_CLASS} ignore`;
					}
					constructor(Tt, qt) {
						super(je.ID, "Ignore Recommendation"),
							(this.g = Tt),
							(this.h = qt),
							(this.class = je.f),
							(this.tooltip = (0, t.localize)(6329, null)),
							(this.enabled = !0);
					}
					run() {
						return (
							this.h.toggleGlobalIgnoredRecommendation(
								this.g.identifier.id,
								!0,
							),
							Promise.resolve()
						);
					}
				};
				(e.$LTb = Gi), (e.$LTb = Gi = je = Ne([j(1, n.$0Qb)], Gi));
				let qi = class extends i.$rj {
					static {
						Ve = this;
					}
					static {
						this.ID = "extensions.ignore";
					}
					static {
						this.f = `${lt.LABEL_ACTION_CLASS} undo-ignore`;
					}
					constructor(Tt, qt) {
						super(Ve.ID, "Undo"),
							(this.g = Tt),
							(this.h = qt),
							(this.class = Ve.f),
							(this.tooltip = (0, t.localize)(6330, null)),
							(this.enabled = !0);
					}
					run() {
						return (
							this.h.toggleGlobalIgnoredRecommendation(
								this.g.identifier.id,
								!1,
							),
							Promise.resolve()
						);
					}
				};
				(e.$MTb = qi), (e.$MTb = qi = Ve = Ne([j(1, n.$0Qb)], qi));
				let Oi = class extends i.$rj {
					constructor(Tt, qt) {
						super(
							"extensions.searchExtensions",
							(0, t.localize)(6331, null),
							void 0,
							!0,
						),
							(this.f = Tt),
							(this.g = qt);
					}
					async run() {
						const Tt = (
							await this.g.openPaneComposite(
								u.$LQb,
								Z.ViewContainerLocation.Sidebar,
								!0,
							)
						)?.getViewPaneContainer();
						Tt.search(this.f), Tt.focus();
					}
				};
				(e.$NTb = Oi), (e.$NTb = Oi = Ne([j(1, Q.$6Sb)], Oi));
				let yi = class extends i.$rj {
					constructor(Tt, qt, At, Yt, ni, bi, fi, Ti) {
						super(Tt, qt),
							(this.f = At),
							(this.g = Yt),
							(this.h = ni),
							(this.t = bi),
							(this.L = fi),
							(this.M = Ti);
					}
					N(Tt) {
						return this.R(Tt).then(
							({ created: qt, content: At }) =>
								this.Q(At, Tt, ["recommendations"]).then((Yt) =>
									this.t.openEditor({
										resource: Tt,
										options: { pinned: qt, selection: Yt },
									}),
								),
							(qt) =>
								Promise.reject(new Error((0, t.localize)(6332, null, qt))),
						);
					}
					O(Tt) {
						return this.P(Tt)
							.then((qt) =>
								this.Q(qt.value.toString(), qt.resource, [
									"extensions",
									"recommendations",
								]),
							)
							.then((qt) =>
								this.t.openEditor({
									resource: Tt,
									options: { selection: qt, forceReload: !0 },
								}),
							);
					}
					P(Tt) {
						return Promise.resolve(this.g.readFile(Tt)).then((qt) => {
							const At = d.$do(qt.value.toString()).extensions;
							return !At || !At.recommendations
								? this.L.write(
										Tt,
										[{ path: ["extensions"], value: { recommendations: [] } }],
										!0,
									).then(() => this.g.readFile(Tt))
								: qt;
						});
					}
					Q(Tt, qt, At) {
						const Yt = d.$eo(Tt),
							ni = d.$fo(Yt, At);
						if (ni && ni.parent && ni.parent.children) {
							const bi = ni.parent.children[1],
								fi =
									bi.children && bi.children.length
										? bi.children[bi.children.length - 1]
										: null,
								Ti = fi ? fi.offset + fi.length : bi.offset + 1;
							return Promise.resolve(this.M.createModelReference(qt)).then(
								(wt) => {
									const We = wt.object.textEditorModel.getPositionAt(Ti);
									return (
										wt.dispose(),
										{
											startLineNumber: We.lineNumber,
											startColumn: We.column,
											endLineNumber: We.lineNumber,
											endColumn: We.column,
										}
									);
								},
							);
						}
						return Promise.resolve(void 0);
					}
					R(Tt) {
						return Promise.resolve(this.g.readFile(Tt)).then(
							(qt) => ({
								created: !1,
								extensionsFileResource: Tt,
								content: qt.value.toString(),
							}),
							(qt) =>
								this.h
									.write(Tt, a.$8Qb)
									.then(() => ({
										created: !0,
										extensionsFileResource: Tt,
										content: a.$8Qb,
									})),
						);
					}
				};
				(e.$OTb = yi),
					(e.$OTb = yi =
						Ne(
							[
								j(2, b.$Vi),
								j(3, f.$ll),
								j(4, x.$kZ),
								j(5, R.$IY),
								j(6, P.$$Qb),
								j(7, k.$MO),
							],
							yi,
						));
				let Ai = class extends yi {
					static {
						this.ID =
							"workbench.extensions.action.configureWorkspaceRecommendedExtensions";
					}
					static {
						this.LABEL = (0, t.localize)(6333, null);
					}
					constructor(Tt, qt, At, Yt, ni, bi, fi, Ti) {
						super(Tt, qt, ni, At, Yt, bi, fi, Ti),
							this.D(this.f.onDidChangeWorkbenchState(() => this.S(), this)),
							this.S();
					}
					S() {
						this.enabled =
							this.f.getWorkbenchState() !== b.WorkbenchState.EMPTY;
					}
					run() {
						switch (this.f.getWorkbenchState()) {
							case b.WorkbenchState.FOLDER:
								return this.N(
									this.f.getWorkspace().folders[0].toResource(K.$CRb),
								);
							case b.WorkbenchState.WORKSPACE:
								return this.O(this.f.getWorkspace().configuration);
						}
						return Promise.resolve();
					}
				};
				(e.$PTb = Ai),
					(e.$PTb = Ai =
						Ne(
							[
								j(2, f.$ll),
								j(3, x.$kZ),
								j(4, b.$Vi),
								j(5, R.$IY),
								j(6, P.$$Qb),
								j(7, k.$MO),
							],
							Ai,
						));
				let li = class extends yi {
					static {
						this.ID =
							"workbench.extensions.action.configureWorkspaceFolderRecommendedExtensions";
					}
					static {
						this.LABEL = (0, t.localize)(6334, null);
					}
					constructor(Tt, qt, At, Yt, ni, bi, fi, Ti, wt) {
						super(Tt, qt, ni, At, Yt, bi, fi, Ti), (this.S = wt);
					}
					run() {
						const qt =
							this.f.getWorkspace().folders.length === 1
								? Promise.resolve(this.f.getWorkspace().folders[0])
								: this.S.executeCommand(M.$qRb);
						return Promise.resolve(qt).then((At) =>
							At ? this.N(At.toResource(K.$CRb)) : null,
						);
					}
				};
				(e.$QTb = li),
					(e.$QTb = li =
						Ne(
							[
								j(2, f.$ll),
								j(3, x.$kZ),
								j(4, b.$Vi),
								j(5, R.$IY),
								j(6, P.$$Qb),
								j(7, k.$MO),
								j(8, $.$ek),
							],
							li,
						));
				let Vi = class extends i.$rj {
					static {
						Ze = this;
					}
					static {
						this.f = `${lt.TEXT_ACTION_CLASS} extension-status-label`;
					}
					static {
						this.g = `${this.f} hide`;
					}
					get extension() {
						return this.N;
					}
					set extension(Tt) {
						(this.N && Tt && (0, g.$7p)(this.N.identifier, Tt.identifier)) ||
							((this.h = null), (this.t = null), (this.M = null)),
							(this.N = Tt),
							this.update();
					}
					constructor(Tt, qt, At) {
						super("extensions.action.statusLabel", "", Ze.g, !1),
							(this.O = Tt),
							(this.P = qt),
							(this.Q = At),
							(this.h = null),
							(this.t = null),
							(this.L = null),
							(this.M = null),
							(this.N = null);
					}
					update() {
						const Tt = this.R();
						(this.label = Tt || ""), (this.class = Tt ? Ze.f : Ze.g);
					}
					R() {
						if (!this.extension) return null;
						const Tt = this.t,
							qt = this.L,
							At = this.M;
						(this.t = this.extension.state),
							(this.L = this.extension.version),
							this.h === null && (this.h = this.t),
							(this.M = this.extension.enablementState);
						const Yt = () => {
								const bi = this.O.extensions.filter((fi) =>
									(0, g.$7p)(
										{ id: fi.identifier.value, uuid: fi.uuid },
										this.extension.identifier,
									),
								)[0];
								return this.extension.local
									? bi && this.extension.version === bi.version
										? !0
										: this.O.canAddExtension((0, l.$y2)(this.extension.local))
									: !1;
							},
							ni = () =>
								this.extension.local
									? this.O.extensions.every(
											(bi) =>
												!(
													(0, g.$7p)(
														{ id: bi.identifier.value, uuid: bi.uuid },
														this.extension.identifier,
													) &&
													this.extension.server ===
														this.P.getExtensionManagementServer((0, l.$x2)(bi))
												),
										)
										? !0
										: this.O.canRemoveExtension(
												(0, l.$y2)(this.extension.local),
											)
									: !1;
						if (Tt !== null) {
							if (
								Tt === u.ExtensionState.Installing &&
								this.t === u.ExtensionState.Installed
							)
								return Yt()
									? this.h === u.ExtensionState.Installed && this.L !== qt
										? (0, t.localize)(6335, null)
										: (0, t.localize)(6336, null)
									: null;
							if (
								Tt === u.ExtensionState.Uninstalling &&
								this.t === u.ExtensionState.Uninstalled
							)
								return (
									(this.h = this.t), ni() ? (0, t.localize)(6337, null) : null
								);
						}
						if (At !== null) {
							const bi = this.Q.isEnabledEnablementState(At),
								fi = this.Q.isEnabledEnablementState(this.M);
							if (!bi && fi) return Yt() ? (0, t.localize)(6338, null) : null;
							if (bi && !fi) return ni() ? (0, t.localize)(6339, null) : null;
						}
						return null;
					}
					run() {
						return Promise.resolve();
					}
				};
				(e.$RTb = Vi),
					(e.$RTb =
						Vi =
						Ze =
							Ne([j(0, l.$q2), j(1, c.$EQb), j(2, c.$IQb)], Vi));
				let wi = class extends It {
					static {
						et = this;
					}
					static {
						this.O = `${lt.ICON_ACTION_CLASS} extension-sync ${I.ThemeIcon.asClassName(Y.$jSb)}`;
					}
					static {
						this.P = `${this.ICON_ACTION_CLASS} extension-sync ${I.ThemeIcon.asClassName(Y.$iSb)}`;
					}
					constructor(Tt, qt, At, Yt) {
						super("extensions.sync", "", et.P, !1, Yt),
							(this.Q = Tt),
							(this.R = qt),
							(this.S = At),
							this.D(
								C.Event.filter(this.Q.onDidChangeConfiguration, (ni) =>
									ni.affectsConfiguration("settingsSync.ignoredExtensions"),
								)(() => this.update()),
							),
							this.D(At.onDidChangeEnablement(() => this.update())),
							this.update();
					}
					update() {
						if (
							((this.enabled =
								!!this.extension &&
								this.S.isEnabled() &&
								this.extension.state === u.ExtensionState.Installed),
							this.extension)
						) {
							const Tt = this.R.isExtensionIgnoredToSync(this.extension);
							(this.class = Tt ? et.O : et.P),
								(this.tooltip = Tt
									? (0, t.localize)(6340, null)
									: (0, t.localize)(6341, null));
						}
					}
					async run() {
						return super.run({
							actionGroups: [
								[
									new i.$rj(
										"extensions.syncignore",
										this.R.isExtensionIgnoredToSync(this.extension)
											? (0, t.localize)(6342, null)
											: (0, t.localize)(6343, null),
										void 0,
										!0,
										() => this.R.toggleExtensionIgnoredToSync(this.extension),
									),
								],
							],
							disposeActionsOnHide: !0,
						});
					}
				};
				(e.$STb = wi),
					(e.$STb =
						wi =
						et =
							Ne([j(0, v.$gj), j(1, u.$MQb), j(2, W.$4Rb), j(3, o.$Li)], wi));
				let _t = class extends lt {
					static {
						rt = this;
					}
					static {
						this.M = `${lt.ICON_ACTION_CLASS} extension-status`;
					}
					get status() {
						return this.N;
					}
					constructor(Tt, qt, At, Yt, ni, bi, fi, Ti, wt, We, _e, Si) {
						super("extensions.status", "", `${rt.M} hide`, !1),
							(this.Q = Tt),
							(this.R = qt),
							(this.S = At),
							(this.U = Yt),
							(this.W = ni),
							(this.X = bi),
							(this.Y = fi),
							(this.Z = Ti),
							(this.$ = wt),
							(this.ab = We),
							(this.bb = _e),
							(this.cb = Si),
							(this.updateWhenCounterExtensionChanges = !0),
							(this.N = []),
							(this.O = this.D(new C.$re())),
							(this.onDidChangeStatus = this.O.event),
							(this.P = new w.$Gh()),
							this.D(this.R.onDidChangeFormatters(() => this.update(), this)),
							this.D(this.Y.onDidChangeExtensions(() => this.update())),
							this.D(this.cb.onDidChangeAccessData(() => this.update())),
							this.update();
					}
					update() {
						this.P.queue(() => this.db());
					}
					async db() {
						if ((this.eb(void 0, !0), (this.enabled = !1), !this.extension))
							return;
						if (this.extension.isMalicious) {
							this.eb(
								{
									icon: Y.$uSb,
									message: new te.$cl((0, t.localize)(6344, null)),
								},
								!0,
							);
							return;
						}
						if (this.extension.deprecationInfo) {
							if (this.extension.deprecationInfo.extension) {
								const ni = `[${this.extension.deprecationInfo.extension.displayName}](${y.URI.parse(`command:extension.open?${encodeURIComponent(JSON.stringify([this.extension.deprecationInfo.extension.id]))}`)})`;
								this.eb(
									{
										icon: Y.$uSb,
										message: new te.$cl((0, t.localize)(6345, null, ni)),
									},
									!0,
								);
							} else if (this.extension.deprecationInfo.settings) {
								const ni = `[${(0, t.localize)(6346, null)}](${y.URI.parse(`command:workbench.action.openSettings?${encodeURIComponent(JSON.stringify([this.extension.deprecationInfo.settings.map((bi) => `@id:${bi}`).join(" ")]))}`)})`;
								this.eb(
									{
										icon: Y.$uSb,
										message: new te.$cl((0, t.localize)(6347, null, ni)),
									},
									!0,
								);
							} else {
								const ni = new te.$cl((0, t.localize)(6348, null));
								this.extension.deprecationInfo.additionalInfo &&
									ni.appendMarkdown(
										` ${this.extension.deprecationInfo.additionalInfo}`,
									),
									this.eb({ icon: Y.$uSb, message: ni }, !0);
							}
							return;
						}
						if (this.X.canSetLanguage(this.extension)) return;
						if (
							this.extension.outdated &&
							this.X.isAutoUpdateEnabledFor(this.extension)
						) {
							const ni = await this.X.shouldRequireConsentToUpdate(
								this.extension,
							);
							if (ni) {
								const bi = new te.$cl();
								bi.appendMarkdown(`${ni} `),
									bi.appendMarkdown(
										(0, t.localize)(
											6349,
											null,
											this.extension.hasChangelog()
												? y.URI.parse(
														`command:extension.open?${encodeURIComponent(JSON.stringify([this.extension.identifier.id, u.ExtensionEditorTab.Changelog]))}`,
													).toString()
												: this.extension.repository
													? this.extension.repository
													: y.URI.parse(
															`command:extension.open?${encodeURIComponent(JSON.stringify([this.extension.identifier.id]))}`,
														).toString(),
										),
									),
									this.eb({ icon: Y.$uSb, message: bi }, !0);
							}
						}
						if (
							this.extension.gallery &&
							this.extension.state === u.ExtensionState.Uninstalled &&
							!(await this.X.canInstall(this.extension))
						) {
							if (
								this.Q.localExtensionManagementServer ||
								this.Q.remoteExtensionManagementServer
							) {
								const ni = await (this.Q.localExtensionManagementServer
										? this.Q.localExtensionManagementServer.extensionManagementService.getTargetPlatform()
										: this.Q.remoteExtensionManagementServer.extensionManagementService.getTargetPlatform()),
									bi = (0, ye.$Oq)(this.extension)
										? new te.$cl(
												(0, ye.$Pq)(this.extension) ??
													"Extension is unsupported in Cursor.",
											)
										: new te.$cl(
												`${(0, t.localize)(6350, null, this.extension.displayName || this.extension.identifier.id, this.ab.nameLong, (0, h.$yp)(ni))} [${(0, t.localize)(6351, null)}](https://aka.ms/vscode-platform-specific-extensions)`,
											);
								this.eb({ icon: Y.$uSb, message: bi }, !0);
								return;
							}
							if (this.Q.webExtensionManagementServer) {
								const ni = (0, t.localize)(6352, null, this.ab.nameLong),
									bi = new te.$cl(
										`${(0, t.localize)(6353, null, this.extension.displayName || this.extension.identifier.id, ni)} [${(0, t.localize)(6354, null)}](https://aka.ms/vscode-web-extensions-guide)`,
									);
								this.eb({ icon: Y.$uSb, message: bi }, !0);
								return;
							}
						}
						if (
							!this.extension.local ||
							!this.extension.server ||
							this.extension.state !== u.ExtensionState.Installed
						)
							return;
						if (
							this.extension.enablementState ===
							c.EnablementState.DisabledByEnvironment
						) {
							this.eb({ message: new te.$cl((0, t.localize)(6355, null)) }, !0);
							return;
						}
						if (
							this.extension.enablementState ===
							c.EnablementState.EnabledByEnvironment
						) {
							this.eb({ message: new te.$cl((0, t.localize)(6356, null)) }, !0);
							return;
						}
						if (
							this.extension.enablementState ===
							c.EnablementState.DisabledByVirtualWorkspace
						) {
							const ni = (0, p.$En)(
								this.extension.local.manifest.capabilities?.virtualWorkspaces,
							);
							this.eb(
								{
									icon: Y.$vSb,
									message: new te.$cl(
										ni ? (0, te.$gl)(ni) : (0, t.localize)(6357, null),
									),
								},
								!0,
							);
							return;
						}
						if ((0, _.$H8)(this.$.getWorkspace())) {
							const ni = this.Z.getExtensionVirtualWorkspaceSupportType(
									this.extension.local.manifest,
								),
								bi = (0, p.$En)(
									this.extension.local.manifest.capabilities?.virtualWorkspaces,
								);
							if (ni === "limited" || bi) {
								this.eb(
									{
										icon: Y.$uSb,
										message: new te.$cl(
											bi ? (0, te.$gl)(bi) : (0, t.localize)(6358, null),
										),
									},
									!0,
								);
								return;
							}
						}
						if (
							this.extension.enablementState ===
								c.EnablementState.DisabledByTrustRequirement ||
							(this.extension.enablementState ===
								c.EnablementState.DisabledByExtensionDependency &&
								this.bb
									.getDependenciesEnablementStates(this.extension.local)
									.every(
										([, ni]) =>
											this.bb.isEnabledEnablementState(ni) ||
											ni === c.EnablementState.DisabledByTrustRequirement,
									))
						) {
							this.enabled = !0;
							const ni = (0, p.$En)(
								this.extension.local.manifest.capabilities?.untrustedWorkspaces,
							);
							this.eb(
								{
									icon: Y.$wSb,
									message: new te.$cl(
										ni ? (0, te.$gl)(ni) : (0, t.localize)(6359, null),
									),
								},
								!0,
							);
							return;
						}
						if (
							this.U.isWorkspaceTrustEnabled() &&
							!this.W.isWorkspaceTrusted()
						) {
							const ni = this.Z.getExtensionUntrustedWorkspaceSupportType(
									this.extension.local.manifest,
								),
								bi = (0, p.$En)(
									this.extension.local.manifest.capabilities
										?.untrustedWorkspaces,
								);
							if (ni === "limited" || bi) {
								(this.enabled = !0),
									this.eb(
										{
											icon: Y.$wSb,
											message: new te.$cl(
												bi ? (0, te.$gl)(bi) : (0, t.localize)(6360, null),
											),
										},
										!0,
									);
								return;
							}
						}
						if (
							this.extension.enablementState ===
								c.EnablementState.DisabledByExtensionKind &&
							!this.X.installed.some(
								(ni) =>
									(0, g.$7p)(ni.identifier, this.extension.identifier) &&
									ni.server !== this.extension.server,
							)
						) {
							let ni;
							this.Q.localExtensionManagementServer === this.extension.server
								? this.Z.prefersExecuteOnWorkspace(
										this.extension.local.manifest,
									) &&
									this.Q.remoteExtensionManagementServer &&
									(ni = new te.$cl(
										`${(0, t.localize)(6361, null, this.Q.remoteExtensionManagementServer.label)} [${(0, t.localize)(6362, null)}](https://code.visualstudio.com/api/advanced-topics/remote-extensions#architecture-and-extension-kinds)`,
									))
								: this.Q.remoteExtensionManagementServer ===
										this.extension.server
									? this.Z.prefersExecuteOnUI(this.extension.local.manifest) &&
										(this.Q.localExtensionManagementServer
											? (ni = new te.$cl(
													`${(0, t.localize)(6363, null, this.Q.remoteExtensionManagementServer.label)} [${(0, t.localize)(6364, null)}](https://code.visualstudio.com/api/advanced-topics/remote-extensions#architecture-and-extension-kinds)`,
												))
											: ie.$r &&
												(ni = new te.$cl(
													`${(0, t.localize)(6365, null, this.ab.nameLong)} [${(0, t.localize)(6366, null)}](https://code.visualstudio.com/api/advanced-topics/remote-extensions#architecture-and-extension-kinds)`,
												)))
									: this.Q.webExtensionManagementServer ===
											this.extension.server &&
										(ni = new te.$cl(
											`${(0, t.localize)(6367, null, this.ab.nameLong)} [${(0, t.localize)(6368, null)}](https://code.visualstudio.com/api/advanced-topics/remote-extensions#architecture-and-extension-kinds)`,
										)),
								ni && this.eb({ icon: Y.$uSb, message: ni }, !0);
							return;
						}
						const Tt = new p.$Gn(this.extension.identifier.id),
							qt = fe.$Io
								.as(ue.Extensions.ExtensionFeaturesRegistry)
								.getExtensionFeatures();
						for (const ni of qt) {
							const bi = this.cb.getAccessData(Tt, ni.id)?.current?.status,
								fi = `[${(0, t.localize)(6369, null)}](${y.URI.parse(`command:extension.open?${encodeURIComponent(JSON.stringify([this.extension.identifier.id, u.ExtensionEditorTab.Features, !1, ni.id]))}`)})`;
							if (bi?.severity === N.Severity.Error) {
								this.eb(
									{
										icon: Y.$tSb,
										message: new te.$cl()
											.appendText(bi.message)
											.appendMarkdown(` ${fi}`),
									},
									!0,
								);
								return;
							}
							if (bi?.severity === N.Severity.Warning) {
								this.eb(
									{
										icon: Y.$uSb,
										message: new te.$cl()
											.appendText(bi.message)
											.appendMarkdown(` ${fi}`),
									},
									!0,
								);
								return;
							}
						}
						if (this.Q.remoteExtensionManagementServer) {
							if ((0, p.$Kn)(this.extension.local.manifest)) {
								if (
									!this.X.installed.some(
										(fi) =>
											(0, g.$7p)(fi.identifier, this.extension.identifier) &&
											fi.server !== this.extension.server,
									)
								) {
									const fi =
										this.extension.server ===
										this.Q.localExtensionManagementServer
											? new te.$cl(
													(0, t.localize)(
														6370,
														null,
														this.Q.remoteExtensionManagementServer.label,
													),
												)
											: new te.$cl((0, t.localize)(6371, null));
									this.eb({ icon: Y.$vSb, message: fi }, !0);
								}
								return;
							}
							const ni = this.Y.extensions.filter((fi) =>
									(0, g.$7p)(
										{ id: fi.identifier.value, uuid: fi.uuid },
										this.extension.identifier,
									),
								)[0],
								bi = ni
									? this.Q.getExtensionManagementServer((0, l.$x2)(ni))
									: null;
							if (
								this.extension.server ===
									this.Q.localExtensionManagementServer &&
								bi === this.Q.remoteExtensionManagementServer
							) {
								this.Z.prefersExecuteOnWorkspace(
									this.extension.local.manifest,
								) &&
									this.eb(
										{
											icon: Y.$vSb,
											message: new te.$cl(
												`${(0, t.localize)(6372, null)} [${(0, t.localize)(6373, null)}](https://code.visualstudio.com/api/advanced-topics/remote-extensions#architecture-and-extension-kinds)`,
											),
										},
										!0,
									);
								return;
							}
							if (
								this.extension.server ===
									this.Q.remoteExtensionManagementServer &&
								bi === this.Q.localExtensionManagementServer
							) {
								this.Z.prefersExecuteOnUI(this.extension.local.manifest) &&
									this.eb(
										{
											icon: Y.$vSb,
											message: new te.$cl(
												`${(0, t.localize)(6374, null)} [${(0, t.localize)(6375, null)}](https://code.visualstudio.com/api/advanced-topics/remote-extensions#architecture-and-extension-kinds)`,
											),
										},
										!0,
									);
								return;
							}
							if (
								this.extension.server ===
									this.Q.remoteExtensionManagementServer &&
								bi === this.Q.webExtensionManagementServer
							) {
								this.Z.canExecuteOnWeb(this.extension.local.manifest) &&
									this.eb(
										{
											icon: Y.$vSb,
											message: new te.$cl(
												`${(0, t.localize)(6376, null)} [${(0, t.localize)(6377, null)}](https://code.visualstudio.com/api/advanced-topics/remote-extensions#architecture-and-extension-kinds)`,
											),
										},
										!0,
									);
								return;
							}
						}
						if (
							this.extension.enablementState ===
							c.EnablementState.DisabledByExtensionDependency
						) {
							this.eb(
								{
									icon: Y.$uSb,
									message: new te.$cl((0, t.localize)(6378, null)),
								},
								!0,
							);
							return;
						}
						const At = this.bb.isEnabled(this.extension.local),
							Yt = this.Y.extensions.some((ni) =>
								(0, g.$7p)(
									{ id: ni.identifier.value, uuid: ni.uuid },
									this.extension.identifier,
								),
							);
						if (!this.extension.isWorkspaceScoped && At && Yt) {
							if (
								this.extension.enablementState ===
								c.EnablementState.EnabledWorkspace
							) {
								this.eb(
									{ message: new te.$cl((0, t.localize)(6379, null)) },
									!0,
								);
								return;
							}
							if (
								this.Q.localExtensionManagementServer &&
								this.Q.remoteExtensionManagementServer &&
								this.extension.server === this.Q.remoteExtensionManagementServer
							) {
								this.eb(
									{
										message: new te.$cl(
											(0, t.localize)(6380, null, this.extension.server.label),
										),
									},
									!0,
								);
								return;
							}
							if (
								this.extension.enablementState ===
								c.EnablementState.EnabledGlobally
							)
								return;
						}
						if (!At && !Yt) {
							if (
								this.extension.enablementState ===
								c.EnablementState.DisabledGlobally
							) {
								this.eb(
									{ message: new te.$cl((0, t.localize)(6381, null)) },
									!0,
								);
								return;
							}
							if (
								this.extension.enablementState ===
								c.EnablementState.DisabledWorkspace
							) {
								this.eb(
									{ message: new te.$cl((0, t.localize)(6382, null)) },
									!0,
								);
								return;
							}
						}
						if (At && !Yt && !this.extension.local.isValid) {
							const ni = this.extension.local.validations
								.filter(([bi]) => bi === N.Severity.Error)
								.map(([, bi]) => bi);
							this.eb(
								{ icon: Y.$tSb, message: new te.$cl(ni.join(" ").trim()) },
								!0,
							);
						}
					}
					eb(Tt, qt) {
						if (Tt) {
							if (
								this.N.some(
									(At) =>
										At.message.value === Tt.message.value &&
										At.icon?.id === Tt.icon?.id,
								)
							)
								return;
						} else {
							if (this.N.length === 0) return;
							this.N = [];
						}
						Tt &&
							(this.N.push(Tt),
							this.N.sort((At, Yt) =>
								Yt.icon === Y.$wSb
									? -1
									: At.icon === Y.$wSb
										? 1
										: Yt.icon === Y.$tSb
											? -1
											: At.icon === Y.$tSb
												? 1
												: Yt.icon === Y.$uSb
													? -1
													: At.icon === Y.$uSb
														? 1
														: Yt.icon === Y.$vSb
															? -1
															: At.icon === Y.$vSb
																? 1
																: 0,
							)),
							qt &&
								(Tt?.icon === Y.$tSb
									? (this.class = `${rt.M} extension-status-error ${I.ThemeIcon.asClassName(Y.$tSb)}`)
									: Tt?.icon === Y.$uSb
										? (this.class = `${rt.M} extension-status-warning ${I.ThemeIcon.asClassName(Y.$uSb)}`)
										: Tt?.icon === Y.$vSb
											? (this.class = `${rt.M} extension-status-info ${I.ThemeIcon.asClassName(Y.$vSb)}`)
											: Tt?.icon === Y.$wSb
												? (this.class = `${rt.M} ${I.ThemeIcon.asClassName(Y.$wSb)}`)
												: (this.class = `${rt.M} hide`)),
							this.O.fire();
					}
					async run() {
						if (this.N[0]?.icon === Y.$wSb)
							return this.S.executeCommand("workbench.trust.manage");
					}
				};
				(e.$TTb = _t),
					(e.$TTb =
						_t =
						rt =
							Ne(
								[
									j(0, c.$EQb),
									j(1, F.$3N),
									j(2, $.$ek),
									j(3, ee.$oO),
									j(4, ee.$pO),
									j(5, u.$MQb),
									j(6, l.$q2),
									j(7, ne.$JSb),
									j(8, b.$Vi),
									j(9, H.$Bk),
									j(10, c.$IQb),
									j(11, ue.$$Sb),
								],
								_t,
							));
				let ai = class extends i.$rj {
					static {
						ft = this;
					}
					static {
						this.ID = "workbench.extensions.action.reinstall";
					}
					static {
						this.LABEL = (0, t.localize)(6383, null);
					}
					constructor(Tt = ft.ID, qt = ft.LABEL, At, Yt, ni, bi, fi, Ti, wt) {
						super(Tt, qt),
							(this.f = At),
							(this.g = Yt),
							(this.h = ni),
							(this.t = bi),
							(this.L = fi),
							(this.M = Ti),
							(this.N = wt);
					}
					get enabled() {
						return (
							this.f.local.filter((Tt) => !Tt.isBuiltin && Tt.local).length > 0
						);
					}
					run() {
						return this.h
							.pick(this.O(), { placeHolder: (0, t.localize)(6384, null) })
							.then((Tt) => Tt && this.P(Tt.extension));
					}
					O() {
						return this.f
							.queryLocal()
							.then((Tt) =>
								Tt.filter(
									(At) =>
										!At.isBuiltin &&
										At.server !== this.g.webExtensionManagementServer,
								).map((At) => ({
									id: At.identifier.id,
									label: At.displayName,
									description: At.identifier.id,
									extension: At,
								})),
							);
					}
					P(Tt) {
						return this.M.createInstance(Oi, "@installed ")
							.run()
							.then(() =>
								this.f.reinstall(Tt).then(
									(qt) => {
										const At = !(
												qt.local && this.N.canAddExtension((0, l.$y2)(qt.local))
											),
											Yt = At
												? (0, t.localize)(6385, null, qt.identifier.id)
												: (0, t.localize)(6386, null, qt.identifier.id),
											ni = At
												? [
														{
															label: (0, t.localize)(6387, null),
															run: () => this.L.reload(),
														},
													]
												: [];
										this.t.prompt(N.Severity.Info, Yt, ni, { sticky: !0 });
									},
									(qt) => this.t.error(qt),
								),
							);
					}
				};
				(e.$UTb = ai),
					(e.$UTb =
						ai =
						ft =
							Ne(
								[
									j(2, u.$MQb),
									j(3, c.$EQb),
									j(4, O.$DJ),
									j(5, N.$4N),
									j(6, s.$asb),
									j(7, o.$Li),
									j(8, l.$q2),
								],
								ai,
							));
				let Ft = class extends i.$rj {
					static {
						bt = this;
					}
					static {
						this.ID = "workbench.extensions.action.install.specificVersion";
					}
					static {
						this.LABEL = (0, t.localize)(6388, null);
					}
					constructor(Tt = bt.ID, qt = bt.LABEL, At, Yt, ni, bi) {
						super(Tt, qt),
							(this.f = At),
							(this.g = Yt),
							(this.h = ni),
							(this.t = bi);
					}
					get enabled() {
						return this.f.local.some((Tt) => this.L(Tt));
					}
					async run() {
						const Tt = await this.g.pick(this.M(), {
							placeHolder: (0, t.localize)(6389, null),
							matchOnDetail: !0,
						});
						Tt &&
							Tt.extension &&
							(await this.h.createInstance(mi, Tt.extension, !0).run(),
							await this.h
								.createInstance(Oi, Tt.extension.identifier.id)
								.run());
					}
					L(Tt) {
						return (
							this.h.createInstance(mi, Tt, !0).enabled &&
							!!Tt.local &&
							this.t.isEnabled(Tt.local)
						);
					}
					async M() {
						const Tt = await this.f.queryLocal(),
							qt = [];
						for (const At of Tt)
							this.L(At) &&
								qt.push({
									id: At.identifier.id,
									label: At.displayName || At.identifier.id,
									description: At.identifier.id,
									extension: At,
								});
						return qt.sort((At, Yt) =>
							At.extension.displayName.localeCompare(Yt.extension.displayName),
						);
					}
				};
				(e.$VTb = Ft),
					(e.$VTb =
						Ft =
						bt =
							Ne([j(2, u.$MQb), j(3, O.$DJ), j(4, o.$Li), j(5, c.$IQb)], Ft));
				let Xt = class extends i.$rj {
					constructor(Tt, qt, At, Yt, ni) {
						super(Tt),
							(this.g = qt),
							(this.h = At),
							(this.t = Yt),
							(this.L = ni),
							(this.f = void 0),
							this.N(),
							this.g.queryLocal().then(() => this.M()),
							this.D(
								this.g.onChange(() => {
									this.f && this.M();
								}),
							);
					}
					M() {
						(this.f = this.g.local), this.N();
					}
					N() {
						(this.enabled = !!this.f && this.S(this.f).length > 0),
							(this.tooltip = this.label);
					}
					async run() {
						return this.P();
					}
					async O() {
						const Tt = await this.g.queryLocal();
						return this.S(Tt);
					}
					async P() {
						const Tt = this.h.createQuickPick();
						Tt.busy = !0;
						const qt = Tt.onDidAccept(() => {
							qt.dispose(), Tt.hide(), Tt.dispose(), this.Q(Tt.selectedItems);
						});
						Tt.show();
						const At = await this.O();
						(Tt.busy = !1),
							At.length
								? ((Tt.title = this.R()),
									(Tt.placeholder = (0, t.localize)(6390, null)),
									(Tt.canSelectMany = !0),
									At.sort((Yt, ni) =>
										Yt.displayName.localeCompare(ni.displayName),
									),
									(Tt.items = At.map((Yt) => ({
										extension: Yt,
										label: Yt.displayName,
										description: Yt.version,
									}))))
								: (Tt.hide(),
									Tt.dispose(),
									this.t.notify({
										severity: N.Severity.Info,
										message: (0, t.localize)(6391, null),
									}));
					}
					async Q(Tt) {
						if (Tt.length) {
							const qt = Tt.filter((At) => !!At.extension).map(
								(At) => At.extension,
							);
							qt.length &&
								(await this.L.withProgress(
									{
										location: V.ProgressLocation.Notification,
										title: (0, t.localize)(6392, null),
									},
									() => this.U(qt),
								),
								this.t.info((0, t.localize)(6393, null)));
						}
					}
				};
				(e.$WTb = Xt),
					(e.$WTb = Xt =
						Ne([j(1, u.$MQb), j(2, O.$DJ), j(3, N.$4N), j(4, V.$8N)], Xt));
				let $t = class extends Xt {
					constructor(Tt, qt, At, Yt, ni, bi, fi, Ti, wt) {
						super(
							"workbench.extensions.actions.installLocalExtensionsInRemote",
							Tt,
							qt,
							Yt,
							At,
						),
							(this.W = ni),
							(this.X = bi),
							(this.Y = fi),
							(this.Z = Ti),
							(this.$ = wt);
					}
					get label() {
						return this.W && this.W.remoteExtensionManagementServer
							? (0, t.localize)(
									6394,
									null,
									this.W.remoteExtensionManagementServer.label,
								)
							: "";
					}
					R() {
						return (0, t.localize)(
							6395,
							null,
							this.W.remoteExtensionManagementServer.label,
						);
					}
					S(Tt) {
						return Tt.filter((qt) => {
							const At = this.Y.createInstance(ti, !0);
							return (At.extension = qt), At.enabled;
						});
					}
					async U(Tt) {
						const qt = [],
							At = [],
							Yt =
								await this.W.remoteExtensionManagementServer.extensionManagementService.getTargetPlatform();
						await w.Promises.settled(
							Tt.map(async (ni) => {
								if (this.X.isEnabled()) {
									const fi = (
										await this.X.getExtensions(
											[
												{
													...ni.identifier,
													preRelease: !!ni.local?.preRelease,
												},
											],
											{ targetPlatform: Yt, compatible: !0 },
											B.CancellationToken.None,
										)
									)[0];
									if (fi) {
										qt.push(fi);
										return;
									}
								}
								const bi =
									await this.W.localExtensionManagementServer.extensionManagementService.zip(
										ni.local,
									);
								At.push(bi);
							}),
						),
							await w.Promises.settled(
								qt.map((ni) =>
									this.W.remoteExtensionManagementServer.extensionManagementService.installFromGallery(
										ni,
									),
								),
							);
						try {
							await w.Promises.settled(
								At.map((ni) =>
									this.W.remoteExtensionManagementServer.extensionManagementService.install(
										ni,
									),
								),
							);
						} finally {
							try {
								await Promise.allSettled(At.map((ni) => this.Z.del(ni)));
							} catch (ni) {
								this.$.error(ni);
							}
						}
					}
				};
				(e.$XTb = $t),
					(e.$XTb = $t =
						Ne(
							[
								j(0, u.$MQb),
								j(1, O.$DJ),
								j(2, V.$8N),
								j(3, N.$4N),
								j(4, c.$EQb),
								j(5, h.$Ep),
								j(6, o.$Li),
								j(7, f.$ll),
								j(8, X.$ik),
							],
							$t,
						));
				let ut = class extends Xt {
					constructor(Tt, qt, At, Yt, ni, bi, fi, Ti, wt) {
						super(Tt, qt, At, ni, Yt),
							(this.W = bi),
							(this.X = fi),
							(this.Y = Ti),
							(this.Z = wt);
					}
					get label() {
						return (0, t.localize)(6396, null);
					}
					R() {
						return (0, t.localize)(6397, null);
					}
					S(Tt) {
						return Tt.filter(
							(qt) =>
								qt.type === p.ExtensionType.User &&
								qt.server !== this.W.localExtensionManagementServer &&
								!this.g.installed.some(
									(At) =>
										At.server === this.W.localExtensionManagementServer &&
										(0, g.$7p)(At.identifier, qt.identifier),
								),
						);
					}
					async U(Tt) {
						const qt = [],
							At = [],
							Yt =
								await this.W.localExtensionManagementServer.extensionManagementService.getTargetPlatform();
						await w.Promises.settled(
							Tt.map(async (ni) => {
								if (this.X.isEnabled()) {
									const fi = (
										await this.X.getExtensions(
											[
												{
													...ni.identifier,
													preRelease: !!ni.local?.preRelease,
												},
											],
											{ targetPlatform: Yt, compatible: !0 },
											B.CancellationToken.None,
										)
									)[0];
									if (fi) {
										qt.push(fi);
										return;
									}
								}
								const bi =
									await this.W.remoteExtensionManagementServer.extensionManagementService.zip(
										ni.local,
									);
								At.push(bi);
							}),
						),
							await w.Promises.settled(
								qt.map((ni) =>
									this.W.localExtensionManagementServer.extensionManagementService.installFromGallery(
										ni,
									),
								),
							);
						try {
							await w.Promises.settled(
								At.map((ni) =>
									this.W.localExtensionManagementServer.extensionManagementService.install(
										ni,
									),
								),
							);
						} finally {
							try {
								await Promise.allSettled(At.map((ni) => this.Y.del(ni)));
							} catch (ni) {
								this.Z.error(ni);
							}
						}
					}
				};
				(e.$YTb = ut),
					(e.$YTb = ut =
						Ne(
							[
								j(1, u.$MQb),
								j(2, O.$DJ),
								j(3, V.$8N),
								j(4, N.$4N),
								j(5, c.$EQb),
								j(6, h.$Ep),
								j(7, f.$ll),
								j(8, X.$ik),
							],
							ut,
						)),
					$.$fk.registerCommand(
						"workbench.extensions.action.showExtensionsForLanguage",
						function (Et, Tt) {
							return Et.get(Q.$6Sb)
								.openPaneComposite(u.$LQb, Z.ViewContainerLocation.Sidebar, !0)
								.then((At) => At?.getViewPaneContainer())
								.then((At) => {
									At.search(`ext:${Tt.replace(/^\./, "")}`), At.focus();
								});
						},
					),
					(e.$ZTb = "workbench.extensions.action.showExtensionsWithIds"),
					$.$fk.registerCommand(e.$ZTb, function (Et, Tt) {
						return Et.get(Q.$6Sb)
							.openPaneComposite(u.$LQb, Z.ViewContainerLocation.Sidebar, !0)
							.then((At) => At?.getViewPaneContainer())
							.then((At) => {
								const Yt = Tt.map((ni) => `@id:${ni}`).join(" ");
								At.search(Yt), At.focus();
							});
					}),
					(0, T.$wP)(
						"extensionButton.background",
						{ dark: T.$eS, light: T.$eS, hcDark: null, hcLight: null },
						(0, t.localize)(6398, null),
					),
					(0, T.$wP)(
						"extensionButton.foreground",
						{ dark: T.$cS, light: T.$cS, hcDark: null, hcLight: null },
						(0, t.localize)(6399, null),
					),
					(0, T.$wP)(
						"extensionButton.hoverBackground",
						{ dark: T.$fS, light: T.$fS, hcDark: null, hcLight: null },
						(0, t.localize)(6400, null),
					),
					(0, T.$wP)(
						"extensionButton.separator",
						T.$dS,
						(0, t.localize)(6401, null),
					),
					(e.$1Tb = (0, T.$wP)(
						"extensionButton.prominentBackground",
						{ dark: T.$eS, light: T.$eS, hcDark: null, hcLight: null },
						(0, t.localize)(6402, null),
					)),
					(0, T.$wP)(
						"extensionButton.prominentForeground",
						{ dark: T.$cS, light: T.$cS, hcDark: null, hcLight: null },
						(0, t.localize)(6403, null),
					),
					(0, T.$wP)(
						"extensionButton.prominentHoverBackground",
						{ dark: T.$fS, light: T.$fS, hcDark: null, hcLight: null },
						(0, t.localize)(6404, null),
					),
					(0, S.$oP)((Et, Tt) => {
						const qt = Et.getColor(T.$gQ);
						qt &&
							(Tt.addRule(
								`.extension-editor .header .actions-status-container > .status ${I.ThemeIcon.asCSSSelector(Y.$tSb)} { color: ${qt}; }`,
							),
							Tt.addRule(
								`.extension-editor .body .subcontent .runtime-status ${I.ThemeIcon.asCSSSelector(Y.$tSb)} { color: ${qt}; }`,
							),
							Tt.addRule(
								`.monaco-hover.extension-hover .markdown-hover .hover-contents ${I.ThemeIcon.asCSSSelector(Y.$tSb)} { color: ${qt}; }`,
							));
						const At = Et.getColor(T.$jQ);
						At &&
							(Tt.addRule(
								`.extension-editor .header .actions-status-container > .status ${I.ThemeIcon.asCSSSelector(Y.$uSb)} { color: ${At}; }`,
							),
							Tt.addRule(
								`.extension-editor .body .subcontent .runtime-status ${I.ThemeIcon.asCSSSelector(Y.$uSb)} { color: ${At}; }`,
							),
							Tt.addRule(
								`.monaco-hover.extension-hover .markdown-hover .hover-contents ${I.ThemeIcon.asCSSSelector(Y.$uSb)} { color: ${At}; }`,
							));
						const Yt = Et.getColor(T.$mQ);
						Yt &&
							(Tt.addRule(
								`.extension-editor .header .actions-status-container > .status ${I.ThemeIcon.asCSSSelector(Y.$vSb)} { color: ${Yt}; }`,
							),
							Tt.addRule(
								`.extension-editor .body .subcontent .runtime-status ${I.ThemeIcon.asCSSSelector(Y.$vSb)} { color: ${Yt}; }`,
							),
							Tt.addRule(
								`.monaco-hover.extension-hover .markdown-hover .hover-contents ${I.ThemeIcon.asCSSSelector(Y.$vSb)} { color: ${Yt}; }`,
							));
					});
			},
		),
		define(
			de[1353],
			he([1, 0, 7, 182, 33, 14, 6, 3, 23, 26, 9, 4, 153, 404, 466, 141]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2Tb = void 0),
					(e.$3Tb = o),
					(t = mt(t));
				let p = class extends d.$1c {
					constructor(b, s, l) {
						super(),
							(this.m = b),
							(this.n = s),
							(this.q = l),
							(this.j = this.D(new C.$re())),
							(this.onDidChangeContents = this.j.event);
						const y = t.h(".chat-agent-hover@root", [
							t.h(".chat-agent-hover-header", [
								t.h(".chat-agent-hover-icon@icon"),
								t.h(".chat-agent-hover-details", [
									t.h(".chat-agent-hover-name@name"),
									t.h(".chat-agent-hover-extension", [
										t.h(".chat-agent-hover-extension-name@extensionName"),
										t.h(".chat-agent-hover-separator@separator"),
										t.h(".chat-agent-hover-publisher@publisher"),
									]),
								]),
							]),
							t.h(".chat-agent-hover-warning@warning"),
							t.h("span.chat-agent-hover-description@description"),
						]);
						(this.domNode = y.root),
							(this.a = y.icon),
							(this.b = y.name),
							(this.c = y.extensionName),
							(this.g = y.description),
							(y.separator.textContent = "|");
						const $ = t.$(
							"span.extension-verified-publisher",
							void 0,
							(0, i.$Tib)(n.$nSb),
						);
						(this.f = t.$("span.chat-agent-hover-publisher-name")),
							t.$fhb(y.publisher, $, this.f),
							y.warning.appendChild((0, i.$Tib)(E.$ak.warning)),
							y.warning.appendChild(
								t.$("span", void 0, (0, a.localize)(4645, null)),
							);
					}
					setAgent(b) {
						const s = this.m.getAgent(b);
						if (s.metadata.icon instanceof u.URI) {
							const $ = t.$("img.icon");
							($.src = m.$7g.uriToBrowserUri(s.metadata.icon).toString(!0)),
								this.a.replaceChildren(t.$(".avatar", void 0, $));
						} else if (s.metadata.themeIcon) {
							const $ = t.$(r.ThemeIcon.asCSSSelector(s.metadata.themeIcon));
							this.a.replaceChildren(t.$(".avatar.codicon-avatar", void 0, $));
						}
						this.domNode.classList.toggle("noExtensionName", !!s.isDynamic);
						const l = this.q.getAgentNameRestriction(s);
						(this.b.textContent = l ? `@${s.name}` : (0, h.$h3)(s)),
							(this.c.textContent = s.extensionDisplayName),
							(this.f.textContent =
								s.publisherDisplayName ?? s.extensionPublisherId);
						let y = s.description ?? "";
						if (
							(y && (y.match(/[\.\?\!] *$/) || (y += ".")),
							(this.g.textContent = y),
							this.domNode.classList.toggle("allowedName", l),
							this.domNode.classList.toggle("verifiedPublisher", !1),
							!s.isDynamic)
						) {
							const $ = this.D(new w.$Ce());
							this.n
								.getExtensions([{ id: s.extensionId.value }], $.token)
								.then((v) => {
									$.dispose(),
										v[0]?.publisherDomain?.verified &&
											(this.domNode.classList.toggle("verifiedPublisher", !0),
											this.j.fire());
								});
						}
					}
				};
				(e.$2Tb = p),
					(e.$2Tb = p = Ne([j(0, h.$c3), j(1, g.$MQb), j(2, h.$f3)], p));
				function o(f, b) {
					return {
						actions: [
							{
								commandId: c.$ZTb,
								label: (0, a.localize)(4646, null),
								run: () => {
									const s = f();
									s && b.executeCommand(c.$ZTb, [s.extensionId.value]);
								},
							},
						],
					};
				}
			},
		),
		define(
			de[1354],
			he([
				1, 0, 7, 183, 95, 163, 149, 3, 197, 9, 31, 72, 5, 39, 73, 34, 306, 208,
				1353, 153, 980, 329, 218, 982, 503, 569,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qUb = void 0),
					(e.$oUb = k),
					(e.$pUb = L),
					(t = mt(t));
				const I = "http://_vscodedecoration_",
					T = "http://_chatagent_",
					P = "http://_chatslash_";
				function k(M, N, A) {
					const R = A.get(b.$f3),
						O = A.get(b.$c3),
						B = R.getAgentNameRestriction(M);
					let U = `${B ? M.name : ((0, b.$h3))(M)}`;
					B &&
						O.agentHasDupeName(M.id) &&
						(U += ` (${M.publisherDisplayName})`);
					const F = { agentId: M.id, name: U, isClickable: N };
					return `[${M.name}](${T}?${encodeURIComponent(JSON.stringify(F))})`;
				}
				function L(M, N) {
					const A = `${l.$R2}${N.name}`,
						R = { agentId: M.id, command: N.name };
					return `[${A}](${P}?${encodeURIComponent(JSON.stringify(R))})`;
				}
				let D = class {
					constructor(N, A, R, O, B, U, z, F, x, H, q) {
						(this.b = N),
							(this.d = A),
							(this.f = R),
							(this.g = O),
							(this.h = B),
							(this.i = U),
							(this.j = z),
							(this.k = F),
							(this.l = x),
							(this.m = H),
							(this.n = q);
					}
					convertParsedRequestToMarkdown(N) {
						let A = "";
						for (const R of N.parts)
							R instanceof l.$O2
								? (A += R.text)
								: R instanceof l.$U2
									? (A += this.h.invokeFunction((O) => k(R.agent, !1, O)))
									: (A += this.o(R));
						return A;
					}
					o(N) {
						const A =
								N instanceof l.$X2 && N.data instanceof r.URI ? N.data : void 0,
							O = {
								title: A
									? this.d.getUriLabel(A, { relative: !0 })
									: N instanceof l.$W2
										? N.slashCommand.detail
										: N instanceof l.$V2
											? N.command.description
											: N instanceof l.$S2
												? this.m.getVariable(N.variableName)?.description
												: N instanceof l.$T2
													? this.n.getTool(N.toolId)?.userDescription
													: "",
							};
						return `[${N.text}](${I}?${encodeURIComponent(JSON.stringify(O))})`;
					}
					walkTreeAndAnnotateReferenceLinks(N) {
						const A = new d.$Zc();
						return (
							N.querySelectorAll("a").forEach((R) => {
								const O = R.getAttribute("data-href");
								if (O)
									if (O.startsWith(T)) {
										let B;
										try {
											B = JSON.parse(decodeURIComponent(O.slice(T.length + 1)));
										} catch (U) {
											this.f.error(
												"Invalid chat widget render data JSON",
												(0, E.$xj)(U),
											);
										}
										B && R.parentElement.replaceChild(this.p(B, A), R);
									} else if (O.startsWith(P)) {
										let B;
										try {
											B = JSON.parse(decodeURIComponent(O.slice(T.length + 1)));
										} catch (U) {
											this.f.error(
												"Invalid chat slash command render data JSON",
												(0, E.$xj)(U),
											);
										}
										B &&
											R.parentElement.replaceChild(
												this.q(R.textContent, B, A),
												R,
											);
									} else if (O.startsWith(I)) {
										let B;
										try {
											B = JSON.parse(decodeURIComponent(O.slice(I.length + 1)));
										} catch {}
										R.parentElement.replaceChild(
											this.s(R.textContent, B, A),
											R,
										);
									} else
										O.startsWith($.$5Tb)
											? this.r(O, R)
											: O.startsWith("command:") && this.t(R, O, this.b);
							}),
							A
						);
					}
					p(N, A) {
						const R = `${l.$Q2}${N.name}`;
						let O;
						if (N.isClickable) {
							O = t.$("span.chat-agent-widget");
							const z = A.add(
								new i.$oob(O, {
									buttonBackground: (0, p.$rP)(s.$kUb),
									buttonForeground: (0, p.$rP)(s.$lUb),
									buttonHoverBackground: void 0,
								}),
							);
							(z.label = R),
								A.add(
									z.onDidClick(() => {
										const F = this.g.getAgent(N.agentId),
											x = this.k.lastFocusedWidget;
										!x ||
											!F ||
											this.j.sendRequest(
												x.viewModel.sessionId,
												F.metadata.sampleRequest ?? "",
												{ location: x.location, agentId: F.id },
											);
									}),
								);
						} else O = this.s(R, void 0, A);
						const B = this.g.getAgent(N.agentId),
							U = new C.$Y(() => A.add(this.h.createInstance(f.$2Tb)));
						return (
							A.add(
								this.i.setupManagedHover(
									(0, w.$cib)("element"),
									O,
									() => (U.value.setAgent(N.agentId), U.value.domNode),
									B && (0, f.$3Tb)(() => B, this.l),
								),
							),
							O
						);
					}
					q(N, A, R) {
						const O = t.$("span.chat-agent-widget.chat-command-widget"),
							B = this.g.getAgent(A.agentId),
							U = R.add(
								new i.$oob(O, {
									buttonBackground: (0, p.$rP)(s.$kUb),
									buttonForeground: (0, p.$rP)(s.$lUb),
									buttonHoverBackground: void 0,
								}),
							);
						return (
							(U.label = N),
							R.add(
								U.onDidClick(() => {
									const z = this.k.lastFocusedWidget;
									if (!z || !B) return;
									const F = B.slashCommands.find((x) => x.name === A.command);
									this.j.sendRequest(
										z.viewModel.sessionId,
										F?.sampleRequest ?? "",
										{
											location: z.location,
											agentId: B.id,
											slashCommand: A.command,
										},
									);
								}),
							),
							O
						);
					}
					r(N, A) {
						const R = r.URI.parse(N);
						let O;
						try {
							O = (0, m.$ji)(JSON.parse(R.fragment));
						} catch (z) {
							this.f.error(
								"Invalid chat widget render data JSON",
								(0, E.$xj)(z),
							);
							return;
						}
						if (!O.uri || !r.URI.isUri(O.uri)) {
							this.f.error(`Invalid chat widget render data: ${R.fragment}`);
							return;
						}
						const B = O.range
							? `${O.range.startLineNumber}-${O.range.endLineNumber}`
							: "";
						A.setAttribute("data-href", O.uri.with({ fragment: B }).toString());
						const U = this.d.getUriLabel(O.uri, { relative: !0 });
						A.title = O.range
							? `${U}#${O.range.startLineNumber}-${O.range.endLineNumber}`
							: U;
					}
					s(N, A, R) {
						const O = t.$("span.chat-resource-widget"),
							B = t.$("span", void 0, N);
						return (
							A?.title &&
								R.add(
									this.i.setupManagedHover((0, w.$cib)("element"), O, A.title),
								),
							O.appendChild(B),
							O
						);
					}
					t(N, A, R) {
						const O = A.match(/command:([^\)]+)/)?.[1];
						if (O) {
							const B = R.lookupKeybinding(O);
							if (B) {
								const U = B.getLabel();
								U && (N.textContent = `${N.textContent} (${U})`);
							}
						}
					}
				};
				(e.$qUb = D),
					(e.$qUb = D =
						Ne(
							[
								j(0, c.$uZ),
								j(1, n.$3N),
								j(2, g.$ik),
								j(3, b.$c3),
								j(4, h.$Li),
								j(5, a.$Uyb),
								j(6, y.$J2),
								j(7, o.$GYb),
								j(8, u.$ek),
								j(9, v.$D2),
								j(10, S.$E2),
							],
							D,
						));
			},
		),
		define(
			de[4064],
			he([1, 0, 7, 6, 3, 37, 17, 42, 11, 8, 5, 979, 1354, 845, 283]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tUb = e.$sUb = void 0),
					(t = mt(t));
				const g = t.$;
				let p = class extends w.$1c {
					constructor(b, s, l, y = !1, $ = 0, v, S, I, T, P, k, L) {
						super(),
							(this.c = b),
							(this.f = l),
							(this.g = I),
							(this.h = k),
							(this.a = []),
							(this.b = this.D(new i.$re())),
							(this.onDidChangeHeight = this.b.event),
							(this.codeblocks = []);
						const D = s.element,
							M = L.createInstance(h.$qUb),
							N = [];
						let A = $;
						const R = this.D(
							v.render(b, {
								fillInIncompleteTokens: y,
								codeBlockRendererSync: (O, B) => {
									const U = A++;
									let z, F, x;
									if ((0, E.$Mf)(O, c.$AYb))
										try {
											const G = (0, c.$BYb)(B);
											(F = G.range && C.$iL.lift(G.range)),
												(z = this.h
													.createModelReference(G.uri)
													.then((K) => K.object));
										} catch {
											return g("div");
										}
									else {
										if (!(0, n.$0Tb)(D) && !(0, n.$$Tb)(D))
											return (
												console.error(
													"Trying to render code block in welcome",
													D.id,
													U,
												),
												g("div")
											);
										const G =
												(0, n.$$Tb)(D) || (0, n.$0Tb)(D) ? D.sessionId : "",
											K = this.g.getOrCreate(G, D, U);
										(x = K.vulns), (z = K.model);
									}
									const H =
											(0, n.$$Tb)(D) && D.errorDetails?.responseIsFiltered,
										q = this.j(
											{
												languageId: O,
												textModel: z,
												codeBlockIndex: U,
												element: D,
												range: F,
												hideToolbar: H,
												parentContextKeyService: P,
												vulns: x,
											},
											B,
											S,
											T.editableCodeBlock,
										);
									this.a.push(q),
										this.D(
											q.object.onDidChangeContentHeight(() => this.b.fire()),
										);
									const V = {
										codeBlockIndex: U,
										element: D,
										focus() {
											q.object.focus();
										},
										uri: q.object.uri,
									};
									return this.codeblocks.push(V), N.push(q), q.object.element;
								},
								asyncRenderCallback: () => this.b.fire(),
							}),
						);
						this.D(M.walkTreeAndAnnotateReferenceLinks(R.element)),
							N.reverse().forEach((O) => this.D(O)),
							(this.domNode = R.element);
					}
					j(b, s, l, y) {
						const $ = this.f.get(),
							v = $.object;
						return (
							(0, n.$$Tb)(b.element) &&
								this.g.update(
									b.element.sessionId,
									b.element,
									b.codeBlockIndex,
									{ text: s, languageId: b.languageId },
								),
							v.render(b, l, y),
							$
						);
					}
					hasSameContent(b) {
						return (
							b.kind === "markdownContent" && b.content.value === this.c.value
						);
					}
					layout(b) {
						this.a.forEach((s) => s.object.layout(b));
					}
					addDisposable(b) {
						this.D(b);
					}
				};
				(e.$sUb = p),
					(e.$sUb = p = Ne([j(9, r.$6j), j(10, d.$MO), j(11, u.$Li)], p));
				let o = class extends w.$1c {
					inUse() {
						return this.a.inUse;
					}
					constructor(b, s, l, y) {
						super(),
							(this.a = this.D(
								new a.$hUb(() =>
									y.createInstance(c.$CYb, b, m.$XX.ChatCodeBlock, s, l),
								),
							));
					}
					get() {
						const b = this.a.get();
						let s = !1;
						return {
							object: b,
							isStale: () => s,
							dispose: () => {
								b.reset(), (s = !0), this.a.release(b);
							},
						};
					}
				};
				(e.$tUb = o), (e.$tUb = o = Ne([j(3, u.$Li)], o));
			},
		),
		define(
			de[1954],
			he([
				1, 0, 7, 595, 114, 437, 95, 24, 14, 6, 94, 27, 3, 59, 23, 201, 77, 26,
				9, 4, 92, 173, 11, 31, 10, 8, 49, 72, 5, 128, 34, 212, 35, 1328, 208,
				1353, 3679, 3262, 3014, 3015, 4064, 1721, 1946, 4023, 3762, 4024, 3008,
				1720, 1354, 3277, 845, 207, 329, 218, 283, 790, 376, 982,
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
				X,
				Y,
				ie,
				ne,
				ee,
				_,
				te,
				Q,
				Z,
			) {
				"use strict";
				var se;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$Xb = e.$0Xb = e.$9Xb = void 0),
					(t = mt(t));
				const re = t.$,
					le = !1;
				let oe = class extends h.$1c {
					static {
						se = this;
					}
					static {
						this.ID = "item";
					}
					constructor(ue, fe, me, ve, ge, be, Ce, Le, Fe, Oe, xe, He, Ke) {
						super(),
							(this.z = fe),
							(this.C = me),
							(this.F = ve),
							(this.G = ge),
							(this.H = Ce),
							(this.I = Fe),
							(this.J = Oe),
							(this.L = xe),
							(this.M = He),
							(this.N = Ke),
							(this.a = new Map()),
							(this.b = new c.$Gc()),
							(this.c = new Map()),
							(this.f = new Map()),
							(this.j = this.D(new r.$re())),
							(this.onDidClickFollowup = this.j.event),
							(this.m = new r.$re()),
							(this.onDidClickRerunWithAgentOrCommandDetection = this.m.event),
							(this.n = this.D(new r.$re())),
							(this.onDidChangeItemHeight = this.n.event),
							(this.u = 0),
							(this.w = !0),
							(this.y = this.D(new r.$re())),
							(this.g = this.D(this.H.createInstance(X.$3Xb, void 0))),
							(this.h = this.H.createInstance(W.$qUb)),
							(this.q = this.D(this.H.createInstance(F.$tUb, ue, ve, be))),
							(this.r = this.D(this.H.createInstance(V.$NXb, ue, ve, be))),
							(this.s = this.D(this.H.createInstance(G.$PXb, this.y.event))),
							(this.t = this.D(this.H.createInstance(H.$KXb, this.y.event))),
							this.D(this.H.createInstance(Y.$DYb));
					}
					get templateId() {
						return se.ID;
					}
					editorsInUse() {
						return this.q.inUse();
					}
					O(ue, fe) {
						le
							? this.I.info(`ChatListItemRenderer#${ue}: ${fe}`)
							: this.I.trace(`ChatListItemRenderer#${ue}: ${fe}`);
					}
					P(ue) {
						if (ue.isComplete) return 80;
						if (
							ue.contentUpdateTimings &&
							ue.contentUpdateTimings.impliedWordLoadRate
						) {
							const ve = ue.contentUpdateTimings.impliedWordLoadRate;
							return (0, g.$Zm)(ve, 5, 80);
						}
						return 8;
					}
					getCodeBlockInfosForResponse(ue) {
						return this.a.get(ue.id) ?? [];
					}
					getCodeBlockInfoForEditor(ue) {
						return this.b.get(ue);
					}
					getFileTreeInfosForResponse(ue) {
						return this.c.get(ue.id) ?? [];
					}
					getLastFocusedFileTreeForResponse(ue) {
						const fe = this.c.get(ue.id),
							me = this.f.get(ue.id);
						if (fe?.length && me !== void 0 && me < fe.length) return fe[me];
					}
					setVisible(ue) {
						(this.w = ue), this.y.fire(ue);
					}
					layout(ue) {
						this.u = ue - (this.C.noPadding ? 0 : 40);
						for (const fe of this.q.inUse()) fe.layout(this.u);
						for (const fe of this.r.inUse()) fe.layout(this.u);
					}
					renderTemplate(ue) {
						const fe = new h.$Zc(),
							me = t.$fhb(ue, re(".interactive-item-container"));
						this.C.renderStyle === "compact" &&
							me.classList.add("interactive-item-compact"),
							this.C.noPadding && me.classList.add("no-padding");
						let ve = me,
							ge = me,
							be,
							Ce;
						if (this.C.renderStyle === "minimal") {
							me.classList.add("interactive-item-compact"),
								me.classList.add("minimal");
							const qe = t.$fhb(me, re(".column.left")),
								Ae = t.$fhb(me, re(".column.right"));
							(ve = qe), (be = Ae), (ge = Ae), (Ce = t.$fhb(me, re(".header")));
						}
						const Le = t.$fhb(ve, re(".header")),
							Fe = t.$fhb(Le, re(".user"));
						(Fe.tabIndex = 0), (Fe.role = "toolbar");
						const Oe = t.$fhb(Fe, re(".avatar-container")),
							xe = t.$fhb(Fe, re("h3.username")),
							He = t.$fhb(be ?? Fe, re("span.detail-container")),
							Ke = t.$fhb(He, re("span.detail"));
						t.$fhb(He, re("span.chat-animated-ellipsis"));
						const Je = t.$fhb(ge, re(".value")),
							Te = new h.$Zc(),
							Ee = fe.add(this.J.createScoped(me)),
							Ie = fe.add(this.H.createChild(new k.$Ki([S.$6j, Ee]))),
							Be = fe.add(this.H.createInstance(R.$2Tb)),
							Se = () => {
								if (
									(0, _.$$Tb)(Ue.currentElement) &&
									Ue.currentElement.agent &&
									!Ue.currentElement.agent.isDefault
								)
									return Be.setAgent(Ue.currentElement.agent.id), Be.domNode;
							},
							ke = (0, R.$3Tb)(
								() =>
									(0, _.$$Tb)(Ue.currentElement)
										? Ue.currentElement.agent
										: void 0,
								this.M,
							);
						fe.add(
							this.N.setupManagedHover((0, C.$cib)("element"), Fe, Se, ke),
						),
							fe.add(
								t.$0fb(Fe, t.$$gb.KEY_DOWN, (qe) => {
									const Ae = new w.$7fb(qe);
									if (
										Ae.equals(a.KeyCode.Space) ||
										Ae.equals(a.KeyCode.Enter)
									) {
										const Me = Se();
										Me &&
											this.N.showHover(
												{
													content: Me,
													target: Fe,
													trapFocus: !0,
													actions: ke.actions,
												},
												!0,
											);
									} else Ae.equals(a.KeyCode.Escape) && this.N.hideHover();
								}),
							);
						const Ue = {
							avatarContainer: Oe,
							username: xe,
							detail: Ke,
							value: Je,
							rowContainer: me,
							elementDisposables: Te,
							templateDisposables: fe,
							contextKeyService: Ee,
							instantiationService: Ie,
							agentHover: Be,
						};
						return (
							this.C.noHeader
								? Le.classList.add("hidden")
								: (Ue.titleToolbar = fe.add(
										Ie.createInstance(
											l.$Tyb,
											Ce ?? Le,
											y.$XX.ChatMessageTitle,
											{
												menuOptions: { shouldForwardArgs: !0 },
												toolbarOptions: {
													shouldInlineSubmenu: (qe) => qe.actions.length <= 1,
												},
												actionViewItemProvider: (qe, Ae) => {
													const Me = Ue.currentElement;
													return qe instanceof y.$2X &&
														qe.item.id === N.$7Yb &&
														(0, _.$$Tb)(Me)
														? Ie.createInstance($e, qe, Ae)
														: (0, s.$Pyb)(Ie, qe, Ae);
												},
											},
										),
									)),
							Ue
						);
					}
					renderElement(ue, fe, me) {
						this.renderChatTreeItem(ue.element, fe, me);
					}
					renderChatTreeItem(ue, fe, me) {
						me.currentElement = ue;
						const ve = (0, _.$0Tb)(ue)
							? "request"
							: (0, _.$$Tb)(ue)
								? "response"
								: "welcome";
						this.O("renderElement", `${ve}, index=${fe}`),
							ie.$X1.bindTo(me.contextKeyService).set((0, _.$$Tb)(ue)),
							ie.$Y1.bindTo(me.contextKeyService).set((0, _.$0Tb)(ue)),
							ie.$S1
								.bindTo(me.contextKeyService)
								.set((0, _.$$Tb)(ue) && ue.agentOrSlashCommandDetected),
							(0, _.$$Tb)(ue)
								? (ie.$T1
										.bindTo(me.contextKeyService)
										.set(!!ue.agent?.metadata.supportIssueReporting),
									ie.$Q1
										.bindTo(me.contextKeyService)
										.set(
											ue.vote === ee.ChatAgentVoteDirection.Up
												? "up"
												: ue.vote === ee.ChatAgentVoteDirection.Down
													? "down"
													: "",
										))
								: ie.$Q1.bindTo(me.contextKeyService).set(""),
							me.titleToolbar && (me.titleToolbar.context = ue),
							ie.$V1
								.bindTo(me.contextKeyService)
								.set((0, _.$$Tb)(ue) && !!ue.errorDetails);
						const ge = !!(
							(0, _.$$Tb)(ue) && ue.errorDetails?.responseIsFiltered
						);
						if (
							(ie.$U1.bindTo(me.contextKeyService).set(ge),
							me.rowContainer.classList.toggle(
								"interactive-request",
								(0, _.$0Tb)(ue),
							),
							me.rowContainer.classList.toggle(
								"interactive-response",
								(0, _.$$Tb)(ue),
							),
							me.rowContainer.classList.toggle(
								"interactive-welcome",
								(0, _.$_Tb)(ue),
							),
							me.rowContainer.classList.toggle(
								"show-detail-progress",
								(0, _.$$Tb)(ue) &&
									!ue.isComplete &&
									!ue.progressMessages.length,
							),
							(me.username.textContent = ue.username),
							this.C.noHeader || this.U(ue, me),
							t.$9fb(me.detail),
							(0, _.$$Tb)(ue) && this.Q(ue, me),
							(0, _.$0Tb)(ue) && ue.confirmation && this.S(ue, me),
							(0, _.$$Tb)(ue) &&
								fe === this.F.getListLength() - 1 &&
								(!ue.isComplete || ue.renderData) &&
								ue.response.value.length)
						) {
							this.O(
								"renderElement",
								`start progressive render ${ve}, index=${fe}`,
							);
							const be = me.elementDisposables.add(new t.$jgb()),
								Ce = (Le) => {
									try {
										this.ab(ue, fe, me, !!Le) && be.cancel();
									} catch (Fe) {
										be.cancel(), this.I.error(Fe);
									}
								};
							be.cancelAndSet(Ce, 50, t.getWindow(me.rowContainer)), Ce(!0);
						} else
							(0, _.$$Tb)(ue)
								? this.X(ue, fe, me)
								: (0, _.$0Tb)(ue)
									? this.X(ue, fe, me)
									: this.Z(ue, me);
					}
					Q(ue, fe) {
						fe.elementDisposables.add(
							(0, p.autorun)((me) => {
								this.R(ue, fe);
							}),
						);
					}
					R(ue, fe) {
						if ((t.$9fb(fe.detail), ue.agentOrSlashCommandDetected)) {
							const me = ue.slashCommand
								? (0, b.localize)(
										4678,
										null,
										`${ne.$R2}${ue.slashCommand.name}`,
									)
								: (0, b.localize)(4679, null);
							t.$hhb(
								fe.detail,
								(0, i.$kib)(me, {
									className: "agentOrSlashCommandDetected",
									inline: !0,
									actionHandler: {
										disposables: fe.elementDisposables,
										callback: (ve) => {
											this.m.fire(ue);
										},
									},
								}),
							);
						} else ue.isComplete || (fe.detail.textContent = A.$LYb);
					}
					S(ue, fe) {
						t.$9fb(fe.detail),
							ue.confirmation &&
								(fe.detail.textContent = (0, b.localize)(
									4680,
									null,
									ue.confirmation,
								));
					}
					U(ue, fe) {
						const me = (0, _.$$Tb)(ue)
							? this.W(ue.agent?.metadata)
							: (ue.avatarIcon ?? m.$ak.account);
						if (me instanceof f.URI) {
							const ve = t.$("img.icon");
							(ve.src = n.$7g.uriToBrowserUri(me).toString(!0)),
								fe.avatarContainer.replaceChildren(t.$(".avatar", void 0, ve));
						} else {
							const ve = t.$(o.ThemeIcon.asCSSSelector(me));
							fe.avatarContainer.replaceChildren(
								t.$(".avatar.codicon-avatar", void 0, ve),
							);
						}
					}
					W(ue) {
						return ue?.themeIcon
							? ue.themeIcon
							: ue?.iconDark &&
									this.L.getColorTheme().type === D.ColorScheme.DARK
								? ue.iconDark
								: ue?.icon
									? ue.icon
									: m.$ak.copilot;
					}
					X(ue, fe, me) {
						let ve = [];
						if ((0, _.$0Tb)(ue) && !ue.confirmation) {
							const Fe =
								"message" in ue.message
									? ue.message.message
									: this.h.convertParsedRequestToMarkdown(ue.message);
							ve = [{ content: new u.$cl(Fe), kind: "markdownContent" }];
						} else
							(0, _.$$Tb)(ue) &&
								(ue.contentReferences.length &&
									ve.push({
										kind: "references",
										references: ue.contentReferences,
									}),
								ve.push(...(0, Z.$6Tb)(ue.response.value)),
								ue.codeCitations.length &&
									ve.push({
										kind: "codeCitations",
										citations: ue.codeCitations,
									}));
						t.$9fb(me.value), (0, _.$$Tb)(ue) && this.Q(ue, me);
						const ge = !!(
								(0, _.$$Tb)(ue) && ue.errorDetails?.responseIsFiltered
							),
							be = [];
						if (
							(ge ||
								ve.forEach((Fe, Oe) => {
									const xe = {
											element: ue,
											index: Oe,
											content: ve,
											preceedingContentParts: be,
										},
										He = this.fb(Fe, me, xe);
									He && (me.value.appendChild(He.domNode), be.push(He));
								}),
							me.renderedParts && (0, h.$Vc)(me.renderedParts),
							(me.renderedParts = be),
							!ge && (0, _.$0Tb)(ue) && ue.variables.length)
						) {
							const Fe = this.lb(ue.variables, ue.contentReferences, me);
							Fe &&
								(me.value.appendChild(Fe.domNode),
								me.elementDisposables.add(Fe));
						}
						if ((0, _.$$Tb)(ue) && ue.errorDetails?.message) {
							const Fe = this.H.createInstance(
								K.$QXb,
								ue.errorDetails.responseIsFiltered ? "info" : "error",
								new u.$cl(ue.errorDetails.message),
								this.g,
							);
							me.elementDisposables.add(Fe), me.value.appendChild(Fe.domNode);
						}
						const Ce = me.rowContainer.offsetHeight,
							Le = !ue.currentRenderedHeight || ue.currentRenderedHeight !== Ce;
						if (((ue.currentRenderedHeight = Ce), Le)) {
							const Fe = me.elementDisposables.add(
								t.$hgb(t.getWindow(me.value), () => {
									(ue.currentRenderedHeight = me.rowContainer.offsetHeight),
										Fe.dispose(),
										this.n.fire({
											element: ue,
											height: ue.currentRenderedHeight,
										});
								}),
							);
						}
					}
					Y(ue) {
						if (!ue.currentElement) return;
						const fe = ue.rowContainer.offsetHeight;
						(ue.currentElement.currentRenderedHeight = fe),
							this.n.fire({ element: ue.currentElement, height: fe });
					}
					Z(ue, fe) {
						t.$9fb(fe.value),
							ue.content.forEach((ge, be) => {
								if (Array.isArray(ge)) {
									const Ce = fe.elementDisposables.add(
										this.H.createChild(
											new k.$Ki([S.$6j, fe.contextKeyService]),
										),
									);
									fe.elementDisposables.add(
										Ce.createInstance(
											J.$RXb,
											fe.value,
											ge,
											this.z,
											void 0,
											(Le) => this.j.fire(Le),
										),
									);
								} else {
									const Ce = {
											element: ue,
											index: be,
											content: [],
											preceedingContentParts: [],
										},
										Le = this.nb(ge, fe, Ce);
									fe.value.appendChild(Le.domNode),
										fe.elementDisposables.add(Le);
								}
							});
						const me = fe.rowContainer.offsetHeight,
							ve = !ue.currentRenderedHeight || ue.currentRenderedHeight !== me;
						if (((ue.currentRenderedHeight = me), ve)) {
							const ge = fe.elementDisposables.add(
								t.$hgb(t.getWindow(fe.value), () => {
									(ue.currentRenderedHeight = fe.rowContainer.offsetHeight),
										ge.dispose(),
										this.n.fire({
											element: ue,
											height: ue.currentRenderedHeight,
										});
								}),
							);
						}
					}
					ab(ue, fe, me, ve) {
						if (!this.w) return !0;
						if (ue.isCanceled)
							return (
								this.O("doNextProgressiveRender", `canceled, index=${fe}`),
								(ue.renderData = void 0),
								this.X(ue, fe, me),
								!0
							);
						let ge = !1;
						this.O(
							"doNextProgressiveRender",
							`START progressive render, index=${fe}, renderData=${JSON.stringify(ue.renderData)}`,
						);
						const be = this.cb(ue),
							Ce = this.eb(me.renderedParts ?? [], be, ue);
						if (((ge = Ce.every((Fe) => Fe === null)), ge))
							return ue.isComplete
								? (this.O(
										"doNextProgressiveRender",
										`END progressive render, index=${fe} and clearing renderData, response is complete`,
									),
									(ue.renderData = void 0),
									this.X(ue, fe, me),
									!0)
								: (this.O(
										"doNextProgressiveRender",
										"caught up with the stream- no new content to render",
									),
									!1);
						this.O(
							"doNextProgressiveRender",
							`doing progressive render, ${Ce.length} parts to render`,
						),
							this.bb(Ce, be, ue, me);
						const Le = me.rowContainer.offsetHeight;
						return (
							(ue.currentRenderedHeight = Le),
							ve ||
								this.n.fire({
									element: ue,
									height: me.rowContainer.offsetHeight,
								}),
							!1
						);
					}
					bb(ue, fe, me, ve) {
						const ge = ve.renderedParts ?? [];
						(ve.renderedParts = ge),
							ue.forEach((be, Ce) => {
								if (!be) return;
								const Le = ve.renderedParts?.[Ce];
								Le && Le.dispose();
								const Fe = ge.slice(0, Ce),
									Oe = {
										element: me,
										content: fe,
										preceedingContentParts: Fe,
										index: Ce,
									},
									xe = this.fb(be, ve, Oe);
								if (xe) {
									if (Le)
										try {
											Le.domNode.replaceWith(xe.domNode);
										} catch (He) {
											this.I.error(
												"ChatListItemRenderer#renderChatContentDiff: error replacing part",
												He,
											);
										}
									else ve.value.appendChild(xe.domNode);
									ge[Ce] = xe;
								} else Le && Le.domNode.remove();
							});
					}
					cb(ue) {
						const fe = this.db(ue),
							me = (0, Z.$6Tb)(ue.response.value);
						this.O(
							"getNextProgressiveRenderContent",
							`Want to render ${fe.numWordsToRender} at ${fe.rate} words/s, counting...`,
						);
						let ve = fe.numWordsToRender;
						const ge = [];
						ue.contentReferences.length &&
							ge.push({ kind: "references", references: ue.contentReferences });
						for (let Fe = 0; Fe < me.length; Fe++) {
							const Oe = me[Fe];
							if (ve <= 0) break;
							if (Oe.kind === "markdownContent") {
								const xe = (0, te.$RKb)(Oe.content.value, ve);
								xe.isFullString
									? ge.push(Oe)
									: ge.push({
											kind: "markdownContent",
											content: new u.$cl(xe.value, Oe.content),
										}),
									this.O(
										"getNextProgressiveRenderContent",
										`  Chunk ${Fe}: Want to render ${ve} words and found ${xe.returnedWordCount} words. Total words in chunk: ${xe.totalWordCount}`,
									),
									(ve -= xe.returnedWordCount);
							} else ge.push(Oe);
						}
						const be = ue.contentUpdateTimings?.lastWordCount ?? 0,
							Ce = fe.numWordsToRender - ve,
							Le = be - Ce;
						return (
							this.O(
								"getNextProgressiveRenderContent",
								`Want to render ${fe.numWordsToRender} words. Rendering ${Ce} words. Buffer: ${Le} words`,
							),
							Ce > 0 &&
								Ce !== ue.renderData?.renderedWordCount &&
								(ue.renderData = {
									lastRenderTime: Date.now(),
									renderedWordCount: Ce,
									renderedParts: ge,
								}),
							ge
						);
					}
					db(ue) {
						const fe = ue.renderData ?? {
								lastRenderTime: 0,
								renderedWordCount: 0,
							},
							me = this.P(ue);
						return {
							numWordsToRender:
								fe.lastRenderTime === 0
									? 1
									: fe.renderedWordCount +
										Math.floor(((Date.now() - fe.lastRenderTime) / 1e3) * me),
							rate: me,
						};
					}
					eb(ue, fe, me) {
						const ve = [];
						for (let ge = 0; ge < fe.length; ge++) {
							const be = fe[ge],
								Ce = ue[ge];
							!Ce || !Ce.hasSameContent(be, fe.slice(ge + 1), me)
								? ve.push(be)
								: ve.push(null);
						}
						return ve;
					}
					fb(ue, fe, me) {
						if (ue.kind === "treeData") return this.gb(ue, fe, me);
						if (ue.kind === "progressMessage")
							return this.H.createInstance(x.$uUb, ue, this.g, me);
						if (ue.kind === "progressTask") return this.jb(ue, fe, me);
						if (ue.kind === "command")
							return this.H.createInstance(U.$eUb, ue, me);
						if (ue.kind === "textEditGroup") return this.mb(me, ue, fe);
						if (ue.kind === "confirmation") return this.kb(me, ue, fe);
						if (ue.kind === "warning")
							return this.H.createInstance(
								K.$QXb,
								"warning",
								ue.content,
								this.g,
							);
						if (ue.kind === "markdownContent")
							return this.nb(ue.content, fe, me);
						if (ue.kind === "references") return this.hb(ue, void 0, me, fe);
						if (ue.kind === "codeCitations") return this.ib(ue, me, fe);
					}
					gb(ue, fe, me) {
						const ve = ue.treeData,
							ge = me.preceedingContentParts.filter(
								(Ce) => Ce instanceof G.$OXb,
							).length,
							be = this.H.createInstance(G.$OXb, ve, me.element, this.s, ge);
						if (
							(be.addDisposable(
								be.onDidChangeHeight(() => {
									this.Y(fe);
								}),
							),
							(0, _.$$Tb)(me.element))
						) {
							const Ce = {
								treeDataId: ve.uri.toString(),
								treeIndex: ge,
								focus() {
									be.domFocus();
								},
							};
							be.addDisposable(
								be.onDidFocus(() => {
									this.f.set(me.element.id, Ce.treeIndex);
								}),
							);
							const Le = this.c.get(me.element.id) ?? [];
							Le.push(Ce),
								this.c.set(
									me.element.id,
									(0, d.$Qb)(Le, (Fe) => Fe.treeDataId),
								),
								be.addDisposable(
									(0, h.$Yc)(() =>
										this.c.set(
											me.element.id,
											Le.filter((Fe) => Fe.treeDataId !== ve.uri.toString()),
										),
									),
								);
						}
						return be;
					}
					hb(ue, fe, me, ve) {
						const ge = this.H.createInstance(
							H.$JXb,
							ue.references,
							fe,
							me.element,
							this.t,
						);
						return (
							ge.addDisposable(
								ge.onDidChangeHeight(() => {
									this.Y(ve);
								}),
							),
							ge
						);
					}
					ib(ue, fe, me) {
						return this.H.createInstance(B.$dUb, ue, fe);
					}
					jb(ue, fe, me) {
						if (!(0, _.$$Tb)(me.element)) return;
						const ve = this.H.createInstance(q.$LXb, ue, this.t, this.g, me);
						return (
							ve.addDisposable(
								ve.onDidChangeHeight(() => {
									this.Y(fe);
								}),
							),
							ve
						);
					}
					kb(ue, fe, me) {
						const ve = this.H.createInstance(z.$gUb, fe, ue);
						return ve.addDisposable(ve.onDidChangeHeight(() => this.Y(me))), ve;
					}
					lb(ue, fe, me) {
						return this.H.createInstance(O.$4Tb, ue, fe, void 0);
					}
					mb(ue, fe, me) {
						const ve = this.H.createInstance(
							V.$MXb,
							fe,
							ue,
							this.C,
							this.r,
							this.u,
						);
						return (
							ve.addDisposable(
								ve.onDidChangeHeight(() => {
									ve.layout(this.u), this.Y(me);
								}),
							),
							ve
						);
					}
					nb(ue, fe, me) {
						const ve = me.element,
							ge =
								(0, _.$$Tb)(ve) &&
								(!ve.isComplete ||
									ve.isCanceled ||
									ve.errorDetails?.responseIsFiltered ||
									ve.errorDetails?.responseIsIncomplete ||
									!!ve.renderData),
							be = me.preceedingContentParts.reduce(
								(Fe, Oe) =>
									Fe + (Oe instanceof F.$sUb ? Oe.codeblocks.length : 0),
								0,
							),
							Ce = this.H.createInstance(
								F.$sUb,
								ue,
								me,
								this.q,
								ge,
								be,
								this.g,
								this.u,
								this.G,
								this.C,
							);
						Ce.addDisposable(
							Ce.onDidChangeHeight(() => {
								Ce.layout(this.u), this.Y(fe);
							}),
						);
						const Le = this.a.get(ve.id) ?? [];
						return (
							this.a.set(ve.id, Le),
							Ce.addDisposable(
								(0, h.$Yc)(() => {
									const Fe = this.a.get(ve.id);
									Fe && Ce.codeblocks.forEach((Oe, xe) => delete Fe[be + xe]);
								}),
							),
							Ce.codeblocks.forEach((Fe, Oe) => {
								if (((Le[be + Oe] = Fe), Fe.uri)) {
									const xe = Fe.uri;
									this.b.set(xe, Fe),
										Ce.addDisposable((0, h.$Yc)(() => this.b.delete(xe)));
								}
							}),
							Ce
						);
					}
					disposeElement(ue, fe, me) {
						if (
							(this.O("disposeElement", `Disposing element, index=${fe}`),
							me.renderedParts)
						)
							try {
								(0, h.$Vc)((0, d.$Lb)(me.renderedParts)),
									(me.renderedParts = void 0),
									t.$9fb(me.value);
							} catch (ve) {
								throw ve;
							}
						(me.currentElement = void 0), me.elementDisposables.clear();
					}
					disposeTemplate(ue) {
						ue.templateDisposables.dispose();
					}
				};
				(e.$9Xb = oe),
					(e.$9Xb =
						oe =
						se =
							Ne(
								[
									j(6, P.$Li),
									j(7, v.$gj),
									j(8, L.$ik),
									j(9, S.$6j),
									j(10, M.$iP),
									j(11, $.$ek),
									j(12, T.$Uyb),
								],
								oe,
							));
				let ae = class {
					constructor(ue, fe) {
						(this.a = ue), (this.b = fe);
					}
					c(ue, fe) {
						le
							? this.b.info(`ChatListDelegate#${ue}: ${fe}`)
							: this.b.trace(`ChatListDelegate#${ue}: ${fe}`);
					}
					getHeight(ue) {
						const fe = (0, _.$0Tb)(ue) ? "request" : "response",
							me =
								("currentRenderedHeight" in ue
									? ue.currentRenderedHeight
									: void 0) ?? this.a;
						return this.c("getHeight", `${fe}, height=${me}`), me;
					}
					getTemplateId(ue) {
						return oe.ID;
					}
					hasDynamicHeight(ue) {
						return !0;
					}
				};
				(e.$0Xb = ae), (e.$0Xb = ae = Ne([j(1, L.$ik)], ae));
				const pe = {
					[ee.ChatAgentVoteDownReason.IncorrectCode]: (0, b.localize)(
						4681,
						null,
					),
					[ee.ChatAgentVoteDownReason.DidNotFollowInstructions]: (0,
					b.localize)(4682, null),
					[ee.ChatAgentVoteDownReason.MissingContext]: (0, b.localize)(
						4683,
						null,
					),
					[ee.ChatAgentVoteDownReason.OffensiveOrUnsafe]: (0, b.localize)(
						4684,
						null,
					),
					[ee.ChatAgentVoteDownReason.PoorlyWrittenOrFormatted]: (0,
					b.localize)(4685, null),
					[ee.ChatAgentVoteDownReason.RefusedAValidRequest]: (0, b.localize)(
						4686,
						null,
					),
					[ee.ChatAgentVoteDownReason.IncompleteCode]: (0, b.localize)(
						4687,
						null,
					),
					[ee.ChatAgentVoteDownReason.WillReportIssue]: (0, b.localize)(
						4688,
						null,
					),
					[ee.ChatAgentVoteDownReason.Other]: (0, b.localize)(4689, null),
				};
				let $e = class extends E.$Pob {
					constructor(ue, fe, me, ve, ge, be) {
						super(ue, { getActions: () => this.getActions() }, be, {
							...fe,
							classNames: o.ThemeIcon.asClassNameArray(m.$ak.thumbsdown),
						}),
							(this.a = me),
							(this.g = ve),
							(this.r = ge);
					}
					getActions() {
						return [
							this.O(ee.ChatAgentVoteDownReason.IncorrectCode),
							this.O(ee.ChatAgentVoteDownReason.DidNotFollowInstructions),
							this.O(ee.ChatAgentVoteDownReason.IncompleteCode),
							this.O(ee.ChatAgentVoteDownReason.MissingContext),
							this.O(ee.ChatAgentVoteDownReason.PoorlyWrittenOrFormatted),
							this.O(ee.ChatAgentVoteDownReason.RefusedAValidRequest),
							this.O(ee.ChatAgentVoteDownReason.OffensiveOrUnsafe),
							this.O(ee.ChatAgentVoteDownReason.Other),
							{
								id: "reportIssue",
								label: pe[ee.ChatAgentVoteDownReason.WillReportIssue],
								tooltip: "",
								enabled: !0,
								class: void 0,
								run: async (ue) => {
									if (!(0, _.$$Tb)(ue)) {
										this.r.error("ChatVoteDownButton#run: invalid context");
										return;
									}
									await this.a.executeCommand(
										N.$7Yb,
										ue,
										ee.ChatAgentVoteDownReason.WillReportIssue,
									),
										await this.g.openReporter({
											extensionId: ue.agent?.extensionId.value,
										});
								},
							},
						];
					}
					render(ue) {
						super.render(ue),
							this.element?.classList.toggle("checked", this.action.checked);
					}
					O(ue) {
						const fe = pe[ue];
						return {
							id: N.$7Yb,
							label: fe,
							tooltip: "",
							enabled: !0,
							checked: this._context.voteDownReason === ue,
							class: void 0,
							run: async (me) => {
								if (!(0, _.$$Tb)(me)) {
									this.r.error(
										"ChatVoteDownButton#getVoteDownDetailAction: invalid context",
									);
									return;
								}
								await this.a.executeCommand(N.$7Yb, me, ue);
							},
						};
					}
				};
				(e.$$Xb = $e),
					(e.$$Xb = $e =
						Ne([j(2, $.$ek), j(3, Q.$7Xb), j(4, L.$ik), j(5, I.$Xxb)], $e));
			},
		),
		define(
			de[481],
			he([
				1, 0, 7, 15, 163, 6, 3, 23, 19, 28, 65, 11, 8, 49, 5, 128, 93, 34, 35,
				208, 3548, 1329, 1954, 3009, 153, 207, 441, 329, 1022, 218, 829, 283,
				3016, 2393, 2394,
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
			) {
				"use strict";
				var N;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$YYb = e.$XYb = void 0),
					(e.$WYb = O),
					(t = mt(t));
				const A = t.$;
				function R(z) {
					z.scrollTop = z.scrollHeight - z.renderHeight;
				}
				function O(z) {
					return (
						"viewContext" in z &&
						"isQuickChat" in z.viewContext &&
						!!z.viewContext.isQuickChat
					);
				}
				let B = class extends C.$1c {
					static {
						N = this;
					}
					static {
						this.CONTRIBS = [];
					}
					get visible() {
						return this.R;
					}
					set viewModel(F) {
						this.W !== F &&
							(this.U.clear(), (this.W = F), F && this.U.add(F), this.g.fire());
					}
					get viewModel() {
						return this.W;
					}
					get parsedInput() {
						return (
							this.X === void 0 &&
								((this.X = this.cb
									.createInstance(P.$G2)
									.parseChatRequest(
										this.viewModel.sessionId,
										this.getInput(),
										this.location,
										{ selectedAgent: this.kb },
									)),
								this.Q.set(!!this.X.parts.find((F) => F instanceof T.$U2))),
							this.X
						);
					}
					get scopedContextKeyService() {
						return this.bb;
					}
					get location() {
						return this.Y.location;
					}
					constructor(F, x, H, q, V, G, K, J, W, X, Y, ie, ne, ee, _) {
						super(),
							(this.Z = H),
							(this.ab = q),
							(this.bb = G),
							(this.cb = K),
							(this.db = J),
							(this.eb = W),
							(this.fb = Y),
							(this.gb = ie),
							(this.hb = ne),
							(this.ib = ee),
							(this.jb = _),
							(this.a = this.D(new E.$re())),
							(this.onDidSubmitAgent = this.a.event),
							(this.b = this.D(new E.$re())),
							(this.onDidChangeAgent = this.b.event),
							(this.f = this.D(new E.$re())),
							(this.onDidFocus = this.f.event),
							(this.g = this.D(new E.$re())),
							(this.onDidChangeViewModel = this.g.event),
							(this.h = this.D(new E.$re())),
							(this.onDidScroll = this.h.event),
							(this.j = this.D(new E.$re())),
							(this.onDidClear = this.j.event),
							(this.n = this.D(new E.$re())),
							(this.onDidAcceptInput = this.n.event),
							(this.q = this.D(new E.$re())),
							(this.onDidChangeContext = this.q.event),
							(this.r = this.D(new E.$re())),
							(this.onDidHide = this.r.event),
							(this.t = this.D(new E.$re())),
							(this.onDidChangeParsedInput = this.t.event),
							(this.u = new E.$re()),
							(this.onWillMaybeChangeHeight = this.u.event),
							(this.y = this.D(new E.$re())),
							(this.onDidChangeHeight = this.y.event),
							(this.z = new E.$re()),
							(this.onDidChangeContentHeight = this.z.event),
							(this.C = []),
							(this.O = 0),
							(this.R = !1),
							(this.S = 0),
							(this.U = this.D(new C.$Zc())),
							(this.viewContext = x ?? {}),
							typeof F == "object" ? (this.Y = F) : (this.Y = { location: F }),
							S.$41.bindTo(G).set(!0),
							S.$01.bindTo(G).set(this.Y.location),
							S.$$1.bindTo(G).set(O(this)),
							(this.Q = S.$91.bindTo(G)),
							(this.P = S.$W1.bindTo(G)),
							this.D(X.register(this)),
							(this.H = this.D(K.createInstance(M.$9Tb))),
							this.D(
								V.registerCodeEditorOpenHandler(async (te, Q, Z) => {
									const se = te.resource;
									if (se.scheme !== d.Schemas.vscodeChatCodeBlock) return null;
									const re = se.path.split("/").at(1);
									if (!re) return null;
									const le = this.viewModel
										?.getItems()
										.find((oe) => oe.id === re);
									if (!le) return null;
									this.reveal(le), await (0, i.$Nh)(0);
									for (const oe of this.G.editorsInUse())
										if (m.$dh.isEqual(oe.uri, se, !0)) {
											const ae = oe.editor;
											let pe = 0;
											const $e = ae.getDomNode();
											if ($e) {
												const ye = t.$Egb($e, "monaco-list-row");
												ye && (pe = t.$qgb($e).top - t.$qgb(ye).top);
											}
											if (te.options?.selection) {
												const ye = ae.getTopForPosition(
													te.options.selection.startLineNumber,
													te.options.selection.startColumn,
												);
												(pe += ye),
													ae.focus(),
													ae.setSelection({
														startLineNumber:
															te.options.selection.startLineNumber,
														startColumn: te.options.selection.startColumn,
														endLineNumber:
															te.options.selection.endLineNumber ??
															te.options.selection.startLineNumber,
														endColumn:
															te.options.selection.endColumn ??
															te.options.selection.startColumn,
													});
											}
											return this.reveal(le, pe), ae;
										}
									return null;
								}),
							);
					}
					set lastSelectedAgent(F) {
						(this.X = void 0), (this.kb = F), this.t.fire();
					}
					get lastSelectedAgent() {
						return this.kb;
					}
					get supportsFileReferences() {
						return !!this.Z.supportsFileReferences;
					}
					get input() {
						return this.I;
					}
					get inputEditor() {
						return this.I.inputEditor;
					}
					get inputUri() {
						return this.I.inputUri;
					}
					get contentHeight() {
						return this.I.contentHeight + this.F.contentHeight;
					}
					render(F) {
						const x =
							"viewId" in this.viewContext ? this.viewContext.viewId : void 0;
						this.J = this.D(
							this.cb.createInstance(
								$.$rUb,
								x,
								this.ab.listForeground,
								this.ab.inputEditorBackground,
								this.ab.resultEditorBackground,
							),
						);
						const H = this.Z.renderInputOnTop ?? !1,
							q = this.Z.renderFollowups ?? !H,
							V = this.Z.renderStyle;
						(this.M = t.$fhb(F, A(".interactive-session"))),
							H
								? (this.qb(this.M, { renderFollowups: q, renderStyle: V }),
									(this.L = t.$fhb(this.M, A(".interactive-list"))))
								: ((this.L = t.$fhb(this.M, A(".interactive-list"))),
									this.qb(this.M, { renderFollowups: q, renderStyle: V })),
							this.nb(this.L, { ...this.Z.rendererOptions, renderStyle: V }),
							this.D(this.J.onDidChange(() => this.rb())),
							this.rb(),
							this.viewModel && (this.lb(), R(this.F)),
							(this.C = N.CONTRIBS.map((G) => {
								try {
									return this.D(this.cb.createInstance(G, this));
								} catch (K) {
									this.hb.error(
										"Failed to instantiate chat widget contrib",
										(0, w.$xj)(K),
									);
									return;
								}
							}).filter(r.$tg));
					}
					getContrib(F) {
						return this.C.find((x) => x.id === F);
					}
					focusInput() {
						this.I.focus();
					}
					hasInputFocus() {
						return this.I.hasFocus();
					}
					getSibling(F, x) {
						if (!(0, D.$$Tb)(F)) return;
						const H = this.viewModel?.getItems();
						if (!H) return;
						const q = H.filter((K) => (0, D.$$Tb)(K)),
							V = q.indexOf(F);
						if (V === void 0) return;
						const G = x === "next" ? V + 1 : V - 1;
						if (!(G < 0 || G > q.length - 1)) return q[G];
					}
					clear() {
						this.ub && (this.ub.enabled = !0), this.j.fire();
					}
					lb(F) {
						if (this.F && this.R) {
							const x = (this.viewModel?.getItems() ?? []).map((q) => ({
								element: q,
								collapsed: !1,
								collapsible: !1,
							}));
							this.u.fire(),
								this.F.setChildren(null, x, {
									diffIdentityProvider: {
										getId: (q) =>
											((0, D.$$Tb)(q) || (0, D.$0Tb)(q) ? q.dataId : q.id) +
											((0, D.$_Tb)(q) && this.viewModel
												? `_${I.ChatModelInitState[this.viewModel.initState]}`
												: "") +
											`${((0, D.$0Tb))(q) || ((0, D.$_Tb))(q)}${(0, D.$$Tb)(q) && q.renderData ? `_${this.O}` : ""}` +
											((0, D.$$Tb)(q) ? `_${q.contentReferences.length}` : "") +
											((0, D.$0Tb)(q) && q.contentReferences
												? `_${q.contentReferences?.length}`
												: ""),
									},
								}),
								!F && this.ub && this.layoutDynamicChatTreeItemMode();
							const H = x[x.length - 1]?.element;
							H && (0, D.$$Tb)(H) && H.isComplete
								? this.mb(H.replyFollowups, H)
								: H && (0, D.$_Tb)(H)
									? this.mb(H.sampleQuestions)
									: this.mb(void 0);
						}
					}
					async mb(F, x) {
						this.I.renderFollowups(F, x),
							this.N && this.layout(this.N.height, this.N.width);
					}
					setVisible(F) {
						const x = this.R;
						(this.R = F),
							this.O++,
							this.G.setVisible(F),
							this.input.setVisible(F),
							F
								? this.D(
										(0, i.$Oh)(() => {
											this.R && this.lb(!0);
										}, 0),
									)
								: x && this.r.fire();
					}
					nb(F, x) {
						const H = this.D(
								this.D(this.cb.createChild(new g.$Ki([h.$6j, this.bb]))),
							),
							q = H.createInstance(y.$0Xb, this.Z.defaultElementHeight ?? 200),
							V = {
								getListLength: () => this.F.getNode(null).visibleChildrenCount,
								onDidScroll: this.onDidScroll,
							},
							G = document.createElement("div");
						G.classList.add("chat-overflow-widget-container", "monaco-editor"),
							F.append(G),
							(this.G = this.D(
								H.createInstance(
									y.$9Xb,
									this.J,
									this.location,
									x,
									V,
									this.H,
									G,
								),
							)),
							this.D(
								this.G.onDidClickFollowup((K) => {
									this.acceptInput(K.message);
								}),
							),
							this.D(
								this.G.onDidClickRerunWithAgentOrCommandDetection((K) => {
									const J = this.db
										.getSession(K.sessionId)
										?.getRequests()
										.find((W) => W.id === K.requestId);
									J &&
										this.db
											.resendRequest(J, {
												noCommandDetection: !0,
												attempt: J.attempt + 1,
												location: this.location,
											})
											.catch((W) =>
												this.hb.error("FAILED to rerun request", W),
											);
								}),
							),
							(this.F = H.createInstance(p.$CMb, "Chat", F, q, [this.G], {
								identityProvider: { getId: (K) => K.id },
								horizontalScrolling: !1,
								alwaysConsumeMouseWheel: !1,
								supportDynamicHeights: !0,
								hideTwistiesOfChildlessElements: !0,
								accessibilityProvider: this.cb.createInstance(s.$NYb),
								keyboardNavigationLabelProvider: {
									getKeyboardNavigationLabel: (K) =>
										(0, D.$0Tb)(K)
											? K.message
											: (0, D.$$Tb)(K)
												? K.response.value
												: "",
								},
								setRowLineHeight: !1,
								filter: this.Z.filter
									? { filter: this.Z.filter.bind(this.Z) }
									: void 0,
								overrideStyles: {
									listFocusBackground: this.ab.listBackground,
									listInactiveFocusBackground: this.ab.listBackground,
									listActiveSelectionBackground: this.ab.listBackground,
									listFocusAndSelectionBackground: this.ab.listBackground,
									listInactiveSelectionBackground: this.ab.listBackground,
									listHoverBackground: this.ab.listBackground,
									listBackground: this.ab.listBackground,
									listFocusForeground: this.ab.listForeground,
									listHoverForeground: this.ab.listForeground,
									listInactiveFocusForeground: this.ab.listForeground,
									listInactiveSelectionForeground: this.ab.listForeground,
									listActiveSelectionForeground: this.ab.listForeground,
									listFocusAndSelectionForeground: this.ab.listForeground,
								},
							})),
							this.D(this.F.onContextMenu((K) => this.ob(K))),
							this.D(
								this.F.onDidChangeContentHeight(() => {
									this.pb();
								}),
							),
							this.D(
								this.G.onDidChangeItemHeight((K) => {
									this.F.updateElementHeight(K.element, K.height);
								}),
							),
							this.D(
								this.F.onDidFocus(() => {
									this.f.fire();
								}),
							),
							this.D(
								this.F.onDidScroll(() => {
									this.h.fire();
								}),
							);
					}
					ob(F) {
						F.browserEvent.preventDefault(), F.browserEvent.stopPropagation();
						const x = F.element,
							H = this.bb.createOverlay([
								[
									S.$U1.key,
									(0, D.$$Tb)(x) && !!x.errorDetails?.responseIsFiltered,
								],
							]);
						this.fb.showContextMenu({
							menuId: a.$XX.ChatContext,
							menuActionOptions: { shouldForwardArgs: !0 },
							contextKeyService: H,
							getAnchor: () => F.anchor,
							getActionsContext: () => x,
						});
					}
					pb() {
						this.F.scrollHeight !== this.S &&
							this.F.scrollTop + this.F.renderHeight >= this.S - 2 &&
							t.$hgb(
								t.getWindow(this.L),
								() => {
									R(this.F);
								},
								0,
							),
							(this.S = this.F.scrollHeight),
							this.z.fire();
					}
					qb(F, x) {
						(this.I = this.D(
							this.cb.createInstance(
								l.$VYb,
								this.location,
								{
									renderFollowups: x?.renderFollowups ?? !0,
									renderStyle:
										x?.renderStyle === "minimal" ? "compact" : x?.renderStyle,
									menus: { executeToolbar: a.$XX.ChatExecute, ...this.Z.menus },
									editorOverflowWidgetsDomNode:
										this.Z.editorOverflowWidgetsDomNode,
								},
								() => this.sb(),
							),
						)),
							this.I.render(F, "", this),
							this.D(
								this.I.onDidLoadInputState((H) => {
									this.C.forEach((q) => {
										if (q.setInputState) {
											const V = (typeof H == "object" && H?.[q.id]) ?? {};
											q.setInputState(V);
										}
									});
								}),
							),
							this.D(this.I.onDidFocus(() => this.f.fire())),
							this.D(this.I.onDidChangeContext((H) => this.q.fire(H))),
							this.D(
								this.I.onDidAcceptFollowup((H) => {
									if (!this.viewModel) return;
									let q = "";
									if (
										H.followup.agentId &&
										H.followup.agentId !==
											this.eb.getDefaultAgent(this.location)?.id
									) {
										const V = this.eb.getAgent(H.followup.agentId);
										if (!V) return;
										(this.lastSelectedAgent = V),
											(q = `${T.$Q2}${V.name} `),
											H.followup.subCommand &&
												(q += `${T.$R2}${H.followup.subCommand} `);
									} else
										!H.followup.agentId &&
											H.followup.subCommand &&
											this.jb.hasCommand(H.followup.subCommand) &&
											(q = `${T.$R2}${H.followup.subCommand} `);
									(q += H.followup.message),
										this.acceptInput(q),
										H.response &&
											this.db.notifyUserAction({
												sessionId: this.viewModel.sessionId,
												requestId: H.response.requestId,
												agentId: H.response.agent?.id,
												command: H.response.slashCommand?.name,
												result: H.response.result,
												action: { kind: "followUp", followup: H.followup },
											});
								}),
							),
							this.D(
								this.I.onDidChangeHeight(() => {
									this.N && this.layout(this.N.height, this.N.width),
										this.z.fire();
								}),
							),
							this.D(
								this.inputEditor.onDidChangeModelContent(
									() => (this.X = void 0),
								),
							),
							this.D(this.eb.onDidChangeAgents(() => (this.X = void 0)));
					}
					rb() {
						this.M.style.setProperty(
							"--vscode-interactive-result-editor-background-color",
							this.J.configuration.resultEditor.backgroundColor?.toString() ??
								"",
						),
							this.M.style.setProperty(
								"--vscode-interactive-session-foreground",
								this.J.configuration.foreground?.toString() ?? "",
							),
							this.M.style.setProperty(
								"--vscode-chat-list-background",
								this.ib
									.getColorTheme()
									.getColor(this.ab.listBackground)
									?.toString() ?? "",
							);
					}
					setModel(F, x) {
						if (!this.M) throw new Error("Call render() before setModel()");
						this.H.clear(),
							this.M.setAttribute("data-session-id", F.sessionId),
							(this.viewModel = this.cb.createInstance(D.$aUb, F, this.H)),
							this.U.add(
								E.Event.accumulate(
									this.viewModel.onDidChange,
									0,
								)((H) => {
									this.viewModel &&
										(this.P.set(this.viewModel.requestInProgress),
										this.lb(),
										H.some((q) => q?.kind === "addRequest") &&
											this.visible &&
											(R(this.F), this.focusInput()));
								}),
							),
							this.U.add(
								this.viewModel.onDidDisposeModel(() => {
									this.I.saveState(), (this.viewModel = void 0), this.lb();
								}),
							),
							this.I.initForNewChatModel(
								x.inputValue,
								x.inputState ?? this.sb(),
							),
							this.C.forEach((H) => {
								H.setInputState &&
									x.inputState?.[H.id] &&
									H.setInputState(x.inputState?.[H.id]);
							}),
							this.U.add(
								F.onDidChange((H) => {
									H.kind === "setAgent" &&
										this.b.fire({ agent: H.agent, slashCommand: H.command });
								}),
							),
							this.F && (this.lb(), R(this.F));
					}
					getFocus() {
						return this.F.getFocus()[0] ?? void 0;
					}
					reveal(F, x) {
						this.F.reveal(F, x);
					}
					focus(F) {
						const H = this.F.getNode(null).children.find(
							(q) => q.element?.id === F.id,
						);
						H && (this.F.setFocus([H.element]), this.F.domFocus());
					}
					refilter() {
						this.F.refilter();
					}
					setInputPlaceholder(F) {
						this.viewModel?.setInputPlaceholder(F);
					}
					resetInputPlaceholder() {
						this.viewModel?.resetInputPlaceholder();
					}
					setInput(F = "") {
						this.I.setValue(F, !1);
					}
					getInput() {
						return this.I.inputEditor.getValue();
					}
					logInputHistory() {
						this.I.logInputHistory();
					}
					async acceptInput(F) {
						return this.tb(F ? { query: F } : void 0);
					}
					async acceptInputWithPrefix(F) {
						this.tb({ prefix: F });
					}
					sb() {
						const F = {};
						return (
							this.C.forEach((x) => {
								x.getInputState && (F[x.id] = x.getInputState());
							}),
							F
						);
					}
					async tb(F) {
						if (this.viewModel) {
							this.n.fire();
							const x = this.getInput(),
								H = this.gb.acceptRequest(),
								q = F ? ("query" in F ? F.query : `${F.prefix} ${x}`) : x,
								V = !F || "prefix" in F,
								G = await this.db.sendRequest(this.viewModel.sessionId, q, {
									location: this.location,
									locationData: this.Y.resolveData?.(),
									parserContext: { selectedAgent: this.kb },
									attachedContext: [...this.I.attachedContext.values()],
								});
							if (G)
								return (
									this.I.acceptInput(V),
									this.a.fire({ agent: G.agent, slashCommand: G.slashCommand }),
									G.responseCompletePromise.then(() => {
										const K = this.viewModel?.getItems().filter(D.$$Tb),
											J = K?.[K.length - 1];
										if (
											(this.gb.acceptResponse(J, H), J?.result?.nextQuestion)
										) {
											const {
													prompt: W,
													participant: X,
													command: Y,
												} = J.result.nextQuestion,
												ie = (0, T.$12)(this.eb, this.location, W, X, Y);
											ie && this.input.setValue(ie, !1);
										}
									}),
									G.responseCreatedPromise
								);
						}
					}
					setContext(F, ...x) {
						this.I.attachContext(F, ...x);
					}
					getCodeBlockInfosForResponse(F) {
						return this.G.getCodeBlockInfosForResponse(F);
					}
					getCodeBlockInfoForEditor(F) {
						return this.G.getCodeBlockInfoForEditor(F);
					}
					getFileTreeInfosForResponse(F) {
						return this.G.getFileTreeInfosForResponse(F);
					}
					getLastFocusedFileTreeForResponse(F) {
						return this.G.getLastFocusedFileTreeForResponse(F);
					}
					focusLastMessage() {
						if (!this.viewModel) return;
						const F = this.F.getNode(null).children,
							x = F[F.length - 1];
						x && (this.F.setFocus([x.element]), this.F.domFocus());
					}
					layout(F, x) {
						(x = Math.min(x, 850)),
							(this.N = new t.$pgb(x, F)),
							this.I.layout(F, x);
						const H = this.I.inputPartHeight,
							q = this.F.scrollTop + this.F.renderHeight >= this.F.scrollHeight,
							V = F - H;
						this.F.layout(V, x),
							(this.F.getHTMLElement().style.height = `${V}px`),
							this.G.layout(x),
							q && R(this.F),
							(this.L.style.height = `${F - H}px`),
							this.y.fire(F);
					}
					setDynamicChatTreeItemLayout(F, x) {
						(this.ub = { numOfMessages: F, maxHeight: x, enabled: !0 }),
							this.D(
								this.G.onDidChangeItemHeight(() =>
									this.layoutDynamicChatTreeItemMode(),
								),
							);
						const H = this.D(new C.$2c());
						this.D(
							this.F.onDidScroll((q) => {
								this.ub?.enabled &&
									(H.value = t.$hgb(t.getWindow(this.L), () => {
										if (
											!q.scrollTopChanged ||
											q.heightChanged ||
											q.scrollHeightChanged
										)
											return;
										const V = q.height,
											G = q.scrollHeight - V - q.scrollTop;
										if (G === 0) return;
										const K = this.ub?.maxHeight ?? x,
											J = this.N?.width ?? this.M.offsetWidth;
										this.I.layout(K, J);
										const W = this.I.inputPartHeight,
											X = Math.min(V + G, K - W);
										this.layout(X + W, J);
									}));
							}),
						);
					}
					updateDynamicChatTreeItemLayout(F, x) {
						this.ub = { numOfMessages: F, maxHeight: x, enabled: !0 };
						let H = !1,
							q = this.N.height,
							V = this.N.width;
						x < this.N.height && ((q = x), (H = !0));
						const G = this.M.offsetWidth;
						this.N?.width !== G && ((V = G), (H = !0)), H && this.layout(q, V);
					}
					get isDynamicChatTreeItemLayoutEnabled() {
						return this.ub?.enabled ?? !1;
					}
					set isDynamicChatTreeItemLayoutEnabled(F) {
						this.ub && (this.ub.enabled = F);
					}
					layoutDynamicChatTreeItemMode() {
						if (!this.viewModel || !this.ub?.enabled) return;
						const F = this.N?.width ?? this.M.offsetWidth;
						this.I.layout(this.ub.maxHeight, F);
						const x = this.I.inputPartHeight,
							H = this.viewModel.getItems(),
							q = H.slice(-this.ub.numOfMessages),
							V = q.some((K) => K.currentRenderedHeight === void 0),
							G = V
								? this.ub.maxHeight
								: q.reduce((K, J) => K + J.currentRenderedHeight, 0);
						this.layout(
							Math.min(x + G + (H.length > 2 ? 18 : 0), this.ub.maxHeight),
							F,
						),
							(V || !G) && R(this.F);
					}
					saveState() {
						this.I.saveState();
					}
					getViewState() {
						return { inputValue: this.getInput(), inputState: this.sb() };
					}
				};
				(e.$XYb = B),
					(e.$XYb =
						B =
						N =
							Ne(
								[
									j(4, u.$dtb),
									j(5, h.$6j),
									j(6, n.$Li),
									j(7, k.$J2),
									j(8, v.$c3),
									j(9, b.$GYb),
									j(10, c.$Xxb),
									j(11, b.$JYb),
									j(12, o.$ik),
									j(13, f.$iP),
									j(14, L.$L2),
								],
								B,
							));
				class U {
					get lastFocusedWidget() {
						return this.b;
					}
					constructor() {
						(this.a = []), (this.b = void 0);
					}
					getWidgetByInputUri(F) {
						return this.a.find((x) => (0, m.$gh)(x.inputUri, F));
					}
					getWidgetBySessionId(F) {
						return this.a.find((x) => x.viewModel?.sessionId === F);
					}
					d(F) {
						F !== this.b && (this.b = F);
					}
					register(F) {
						if (this.a.some((x) => x === F))
							throw new Error("Cannot register the same widget multiple times");
						return (
							this.a.push(F),
							(0, C.$Xc)(
								F.onDidFocus(() => this.d(F)),
								(0, C.$Yc)(() => this.a.splice(this.a.indexOf(F), 1)),
							)
						);
					}
				}
				e.$YYb = U;
			},
		),
		define(
			de[4065],
			he([1, 0, 8, 5, 128, 21, 32, 51, 35, 217, 282, 1288, 552, 481, 153, 981]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ZYb = void 0);
				let p = class extends r.$JEb {
					get scopedContextKeyService() {
						return this.b;
					}
					constructor(f, b, s, l, y, $) {
						super(h.$cMb.EditorID, f, b, s, y),
							(this.g = l),
							(this.j = y),
							(this.m = $);
					}
					async r() {
						if (this.input) return this.g.invokeFunction(a.$1Yb, this.input);
					}
					Y(f) {
						this.b = this.D(this.m.createScoped(f));
						const b = this.D(
							this.g.createChild(
								new w.$Ki([t.$6j, this.scopedContextKeyService]),
							),
						);
						(this.a = this.D(
							b.createInstance(
								c.$XYb,
								n.ChatAgentLocation.Panel,
								void 0,
								{ supportsFileReferences: !0 },
								{
									listForeground: d.$9P,
									listBackground: d.$8P,
									inputEditorBackground: d.$TR,
									resultEditorBackground: d.$8P,
								},
							),
						)),
							this.D(this.a.onDidClear(() => this.r())),
							this.a.render(f),
							this.a.setVisible(!0);
					}
					Z(f) {
						super.Z(f), this.a?.setVisible(f);
					}
					focus() {
						super.focus(), this.a?.focusInput();
					}
					clearInput() {
						this.I(), super.clearInput();
					}
					async setInput(f, b, s, l) {
						super.setInput(f, b, s, l);
						const y = await f.resolve();
						if (!y)
							throw new Error(
								`Failed to get model for chat editor. id: ${f.sessionId}`,
							);
						if (!this.a)
							throw new Error("ChatEditor lifecycle issue: no editor widget");
						this.$(y.model, b?.viewState ?? f.options.viewState);
					}
					$(f, b) {
						(this.c = new u.$eEb(
							"interactive-session-editor-" + g.$b3,
							this.j,
						)),
							(this.f =
								b ??
								this.c.getMemento(
									E.StorageScope.WORKSPACE,
									E.StorageTarget.MACHINE,
								)),
							this.a.setModel(f, { ...this.f });
					}
					I() {
						if ((this.a?.saveState(), this.c && this.f)) {
							const f = this.a.getViewState();
							(this.f.inputValue = f.inputValue), this.c.saveMemento();
						}
					}
					layout(f, b) {
						this.a && this.a.layout(f.height, f.width);
					}
				};
				(e.$ZYb = p),
					(e.$ZYb = p =
						Ne(
							[j(1, C.$km), j(2, m.$iP), j(3, i.$Li), j(4, E.$lq), j(5, t.$6j)],
							p,
						));
			},
		),
		define(
			de[4066],
			he([
				1, 0, 7, 277, 15, 33, 6, 3, 11, 8, 5, 128, 180, 63, 51, 208, 481, 153,
				218, 89,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				var s;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$PIc = void 0),
					(t = mt(t));
				let l = class extends d.$1c {
					constructor(v, S, I) {
						super(),
							(this.g = v),
							(this.h = S),
							(this.j = I),
							(this.a = this.D(new C.$re())),
							(this.onDidClose = this.a.event);
					}
					get enabled() {
						return !!this.h.isEnabled(o.ChatAgentLocation.Panel);
					}
					get focused() {
						const v = this.b?.widget;
						return v ? t.$Lgb(v) : !1;
					}
					toggle(v) {
						if (this.focused && !v?.query) this.close();
						else if ((this.open(v), v?.isPartialQuery)) {
							const S = this.B.add(
								C.Event.once(this.onDidClose)(() => {
									this.c?.clearValue(), this.B.delete(S);
								}),
							);
						}
					}
					open(v) {
						if (this.b) {
							if (this.c && v?.query) {
								this.c.focus(),
									this.c.setValue(v.query, v.selection),
									v.isPartialQuery || this.c.acceptInput();
								return;
							}
							return this.focus();
						}
						const S = new d.$Zc();
						(this.b = this.g.createQuickWidget()),
							(this.b.contextKey = "chatInputVisible"),
							(this.b.ignoreFocusOut = !0),
							S.add(this.b),
							(this.f ??= t.$(".interactive-session")),
							(this.b.widget = this.f),
							this.b.show(),
							this.c
								? this.c.show()
								: ((this.c = this.j.createInstance(y)), this.c.render(this.f)),
							S.add(
								this.b.onDidHide(() => {
									S.dispose(), this.c.hide(), (this.b = void 0), this.a.fire();
								}),
							),
							this.c.focus(),
							v?.query &&
								(this.c.setValue(v.query, v.selection),
								v.isPartialQuery || this.c.acceptInput());
					}
					focus() {
						this.c?.focus();
					}
					close() {
						this.b?.dispose(), (this.b = void 0);
					}
					async openInChatView() {
						await this.c?.openChatView(), this.close();
					}
				};
				(e.$PIc = l),
					(e.$PIc = l = Ne([j(0, c.$DJ), j(1, f.$J2), j(2, u.$Li)], l));
				let y = class extends d.$1c {
					static {
						s = this;
					}
					static {
						this.DEFAULT_MIN_HEIGHT = 200;
					}
					static {
						this.a = 100;
					}
					constructor(v, S, I, T, P) {
						super(),
							(this.m = v),
							(this.n = S),
							(this.q = I),
							(this.r = T),
							(this.s = P),
							(this.h = this.D(new d.$2c())),
							(this.j = !1);
					}
					clear() {
						this.f?.dispose(),
							(this.f = void 0),
							this.w(),
							this.b.inputEditor.setValue("");
					}
					focus(v) {
						if (this.b) {
							this.b.focusInput();
							const S = this.b.inputEditor.getValue();
							S &&
								this.b.inputEditor.setSelection(
									v ?? {
										startLineNumber: 1,
										startColumn: 1,
										endLineNumber: 1,
										endColumn: S.length + 1,
									},
								);
						}
					}
					hide() {
						this.b.setVisible(!1),
							(this.h.value = (0, w.$Oh)(() => {
								this.h.clear();
							}, 30 * 1e3));
					}
					show() {
						this.b.setVisible(!0),
							this.j &&
								((this.j = !1),
								this.b.updateDynamicChatTreeItemLayout(2, this.t)),
							this.h.value || this.b.layoutDynamicChatTreeItemMode();
					}
					render(v) {
						if (this.b) throw new Error("Cannot render quick chat twice");
						const S = this.D(
							this.m.createChild(
								new a.$Ki([r.$6j, this.D(this.n.createScoped(v))]),
							),
						);
						(this.b = this.D(
							S.createInstance(
								p.$XYb,
								o.ChatAgentLocation.Panel,
								{ isQuickChat: !0 },
								{
									renderInputOnTop: !0,
									renderStyle: "compact",
									menus: { inputSideToolbar: m.$XX.ChatInputSide },
								},
								{
									listForeground: n.$gT,
									listBackground: n.$fT,
									inputEditorBackground: n.$TR,
									resultEditorBackground: n.$8P,
								},
							),
						)),
							this.b.render(v),
							this.b.setVisible(!0),
							this.b.setDynamicChatTreeItemLayout(2, this.t),
							this.w(),
							(this.c = this.D(
								new i.Sash(
									v,
									{ getHorizontalSashTop: () => v.offsetHeight },
									{ orientation: i.Orientation.HORIZONTAL },
								),
							)),
							this.u(v);
					}
					get t() {
						return this.r.mainContainerDimension.height - s.a;
					}
					u(v) {
						this.D(
							this.r.onDidLayoutMainContainer(() => {
								this.b.visible
									? this.b.updateDynamicChatTreeItemLayout(2, this.t)
									: (this.j = !0);
							}),
						),
							this.D(
								this.b.inputEditor.onDidChangeModelContent((I) => {
									this.g = this.b.inputEditor.getValue();
								}),
							),
							this.D(this.b.onDidClear(() => this.clear())),
							this.D(this.b.onDidChangeHeight((I) => this.c.layout()));
						const S = v.offsetWidth;
						this.D(
							this.c.onDidStart(() => {
								this.b.isDynamicChatTreeItemLayoutEnabled = !1;
							}),
						),
							this.D(
								this.c.onDidChange((I) => {
									I.currentY < s.DEFAULT_MIN_HEIGHT ||
										I.currentY > this.t ||
										(this.b.layout(I.currentY, S), this.c.layout());
								}),
							),
							this.D(
								this.c.onDidReset(() => {
									(this.b.isDynamicChatTreeItemLayoutEnabled = !0),
										this.b.layoutDynamicChatTreeItemMode();
								}),
							);
					}
					async acceptInput() {
						return this.b.acceptInput();
					}
					async openChatView() {
						const v = await (0, g.$HYb)(this.s);
						if (!v?.viewModel || !this.f) return;
						for (const I of this.f.getRequests())
							if (I.response?.response.value || I.response?.result) {
								const T = [];
								for (const P of I.response.response.value)
									if (P.kind === "textEditGroup")
										for (const k of P.edits)
											T.push({ kind: "textEdit", edits: k, uri: P.uri });
									else T.push(P);
								this.q.addCompleteRequest(
									v.viewModel.sessionId,
									I.message,
									I.variableData,
									I.attempt,
									{
										message: T,
										result: I.response.result,
										followups: I.response.followups,
									},
								);
							} else I.message;
						const S = this.b.inputEditor.getValue();
						S && v.inputEditor.setValue(S), v.focusInput();
					}
					setValue(v, S) {
						this.b.inputEditor.setValue(v), this.focus(S);
					}
					clearValue() {
						this.b.inputEditor.setValue("");
					}
					w() {
						if (
							((this.f ??= this.q.startSession(
								o.ChatAgentLocation.Panel,
								E.CancellationToken.None,
							)),
							!this.f)
						)
							throw new Error("Could not start chat session");
						this.b.setModel(this.f, { inputValue: this.g });
					}
				};
				y = s = Ne(
					[j(0, u.$Li), j(1, r.$6j), j(2, f.$J2), j(3, h.$jEb), j(4, b.$HMb)],
					y,
				);
			},
		),
		define(
			de[4067],
			he([
				1, 0, 33, 3, 10, 8, 49, 72, 5, 128, 39, 34, 41, 21, 32, 51, 35, 146,
				282, 123, 60, 481, 153, 981, 441, 218,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$YMb = e.$XMb = void 0),
					(e.$XMb = "workbench.panel.chatSidebar");
				let I = class extends o.$TMb {
					get widget() {
						return this.a;
					}
					constructor(P, k, L, D, M, N, A, R, O, B, U, z, F, x, H) {
						super(P, k, L, D, M, N, A, R, O, B, U),
							(this.j = z),
							(this.m = F),
							(this.n = x),
							(this.r = H),
							(this.b = this.D(new i.$Zc())),
							(this.g = !1),
							(this.h = !1),
							(this.c = new f.$eEb(
								"interactive-session-view-" + $.$b3,
								this.j,
							)),
							(this.f = this.c.getMemento(
								c.StorageScope.WORKSPACE,
								c.StorageTarget.MACHINE,
							)),
							this.D(
								this.n.onDidChangeAgents(() => {
									if (this.n.getDefaultAgent(y.ChatAgentLocation.Panel)) {
										if (!this.a?.viewModel) {
											const q = this.t(),
												V = q ? this.m.getOrRestoreSession(q) : void 0;
											try {
												this.a.setVisible(!1),
													this.s(V),
													(this.g = !1),
													(this.h = !1),
													this.eb.fire();
											} finally {
												this.widget.setVisible(!0);
											}
										}
									} else
										this.a?.viewModel?.initState ===
											v.ChatModelInitState.Initialized && (this.h = !0);
									this.eb.fire();
								}),
							);
					}
					getActionsContext() {
						return { chatView: this };
					}
					s(P) {
						if (
							(this.b.clear(),
							(P =
								P ??
								(this.m.transferredSessionData?.sessionId
									? this.m.getOrRestoreSession(
											this.m.transferredSessionData.sessionId,
										)
									: this.m.startSession(
											y.ChatAgentLocation.Panel,
											t.CancellationToken.None,
										))),
							!P)
						)
							throw new Error("Could not start chat session");
						this.a.setModel(P, { ...this.f }), (this.f.sessionId = P.sessionId);
					}
					shouldShowWelcome() {
						if (!this.n.getContributedDefaultAgent(y.ChatAgentLocation.Panel))
							return !0;
						const P = !this.m.hasSessions();
						return this.h || (!this.a?.viewModel && (P || this.g));
					}
					t() {
						let P;
						return (
							this.m.transferredSessionData
								? ((P = this.m.transferredSessionData.sessionId),
									(this.f.inputValue =
										this.m.transferredSessionData.inputValue))
								: (P = this.f.sessionId),
							P
						);
					}
					W(P) {
						try {
							super.W(P);
							const k = this.D(
									this.Db.createChild(new r.$Ki([E.$6j, this.xb])),
								),
								L = this.Zb();
							(this.a = this.D(
								k.createInstance(
									l.$XYb,
									y.ChatAgentLocation.Panel,
									{ viewId: this.id },
									{ supportsFileReferences: !0 },
									{
										listForeground: b.$xGb,
										listBackground: L.background,
										inputEditorBackground: L.background,
										resultEditorBackground: g.$8P,
									},
								),
							)),
								this.D(
									this.onDidChangeBodyVisibility((A) => {
										this.a.setVisible(A);
									}),
								),
								this.D(this.a.onDidClear(() => this.ab())),
								this.a.render(P);
							const D = this.t(),
								M = D
									? this.D(
											this.m.onDidDisposeSession((A) => {
												A.reason === "initializationFailed" &&
													((this.g = !0), M?.dispose(), this.eb.fire());
											}),
										)
									: void 0,
								N = D ? this.m.getOrRestoreSession(D) : void 0;
							this.s(N);
						} catch (k) {
							throw (this.r.error(k), k);
						}
					}
					acceptInput(P) {
						this.a.acceptInput(P);
					}
					ab() {
						this.widget.viewModel &&
							this.m.clearSession(this.widget.viewModel.sessionId),
							this.cc(),
							this.s(void 0);
					}
					loadSession(P) {
						this.widget.viewModel &&
							this.m.clearSession(this.widget.viewModel.sessionId);
						const k = this.m.getOrRestoreSession(P);
						this.s(k);
					}
					focusInput() {
						this.a.focusInput();
					}
					focus() {
						super.focus(), this.a.focusInput();
					}
					X(P, k) {
						super.X(P, k), this.a.layout(P, k);
					}
					saveState() {
						this.a && (this.a.saveState(), this.cc(), this.c.saveMemento()),
							super.saveState();
					}
					cc() {
						const P = this.a.getViewState();
						(this.f.inputValue = P.inputValue),
							(this.f.inputState = P.inputState);
					}
				};
				(e.$YMb = I),
					(e.$YMb = I =
						Ne(
							[
								j(1, u.$uZ),
								j(2, C.$Xxb),
								j(3, w.$gj),
								j(4, E.$6j),
								j(5, s.$K1),
								j(6, m.$Li),
								j(7, h.$7rb),
								j(8, p.$iP),
								j(9, n.$km),
								j(10, d.$Uyb),
								j(11, c.$lq),
								j(12, S.$J2),
								j(13, y.$c3),
								j(14, a.$ik),
							],
							I,
						));
			},
		),
		define(
			de[4068],
			he([
				1, 0, 24, 14, 3, 37, 4, 8, 102, 34, 40, 62, 30, 239, 60, 208, 4067, 153,
				207, 404, 141, 53, 175,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$OIc = e.$NIc = void 0),
					(E = mt(E)),
					(y = mt(y));
				const $ = y.$n2.registerExtensionPoint({
					extensionPoint: "chatParticipants",
					jsonSchema: {
						description: (0, C.localize)(4690, null),
						type: "array",
						items: {
							additionalProperties: !1,
							type: "object",
							defaultSnippets: [{ body: { name: "", description: "" } }],
							required: ["name", "id"],
							properties: {
								id: {
									description: (0, C.localize)(4691, null),
									type: "string",
								},
								name: {
									description: (0, C.localize)(4692, null),
									type: "string",
									pattern: "^[\\w-]+$",
								},
								fullName: {
									markdownDescription: (0, C.localize)(4693, null, "`name`"),
									type: "string",
								},
								description: {
									description: (0, C.localize)(4694, null),
									type: "string",
								},
								isSticky: {
									description: (0, C.localize)(4695, null),
									type: "boolean",
								},
								sampleRequest: {
									description: (0, C.localize)(4696, null),
									type: "string",
								},
								when: {
									description: (0, C.localize)(4697, null),
									type: "string",
								},
								disambiguation: {
									description: (0, C.localize)(4698, null),
									type: "array",
									items: {
										additionalProperties: !1,
										type: "object",
										defaultSnippets: [
											{
												body: {
													categoryName: "",
													description: "",
													examples: [],
												},
											},
										],
										required: ["categoryName", "description", "examples"],
										properties: {
											categoryName: {
												markdownDescription: (0, C.localize)(4699, null),
												type: "string",
											},
											description: {
												description: (0, C.localize)(4700, null),
												type: "string",
											},
											examples: {
												description: (0, C.localize)(4701, null),
												type: "array",
											},
										},
									},
								},
								commands: {
									markdownDescription: (0, C.localize)(4702, null),
									type: "array",
									items: {
										additionalProperties: !1,
										type: "object",
										defaultSnippets: [{ body: { name: "", description: "" } }],
										required: ["name"],
										properties: {
											name: {
												description: (0, C.localize)(4703, null),
												type: "string",
											},
											description: {
												description: (0, C.localize)(4704, null),
												type: "string",
											},
											when: {
												description: (0, C.localize)(4705, null),
												type: "string",
											},
											sampleRequest: {
												description: (0, C.localize)(4706, null),
												type: "string",
											},
											isSticky: {
												description: (0, C.localize)(4707, null),
												type: "boolean",
											},
											disambiguation: {
												description: (0, C.localize)(4708, null),
												type: "array",
												items: {
													additionalProperties: !1,
													type: "object",
													defaultSnippets: [
														{
															body: {
																categoryName: "",
																description: "",
																examples: [],
															},
														},
													],
													required: ["categoryName", "description", "examples"],
													properties: {
														categoryName: {
															markdownDescription: (0, C.localize)(4709, null),
															type: "string",
														},
														description: {
															description: (0, C.localize)(4710, null),
															type: "string",
														},
														examples: {
															description: (0, C.localize)(4711, null),
															type: "array",
														},
													},
												},
											},
										},
									},
								},
								supportsToolReferences: {
									description: (0, C.localize)(
										4712,
										null,
										"ChatRequest#toolReferences",
									),
									type: "boolean",
								},
							},
						},
					},
					activationEventsGenerator: (T, P) => {
						for (const k of T) P.push(`onChatParticipant:${k.id}`);
					},
				});
				let v = class {
					static {
						this.ID = "workbench.contrib.chatExtensionPointHandler";
					}
					constructor(P, k) {
						(this.c = P),
							(this.d = k),
							(this.b = new w.$0c()),
							(this.a = this.f()),
							this.g(),
							this.e();
					}
					e() {
						$.setHandler((P, k) => {
							for (const L of k.added)
								for (const D of L.value) {
									if (!D.name?.match(/^[\w-]+$/)) {
										this.d.error(
											`Extension '${L.description.identifier.value}' CANNOT register participant with invalid name: ${D.name}. Name must match /^[\\w-]+$/.`,
										);
										continue;
									}
									if (
										D.fullName &&
										E.$jg
											.getInstance(new Set())
											.containsAmbiguousCharacter(D.fullName)
									) {
										this.d.error(
											`Extension '${L.description.identifier.value}' CANNOT register participant with fullName that contains ambiguous characters: ${D.fullName}.`,
										);
										continue;
									}
									if (
										D.fullName &&
										E.$kg.containsInvisibleCharacter(
											D.fullName.replace(/ /g, ""),
										)
									) {
										this.d.error(
											`Extension '${L.description.identifier.value}' CANNOT register participant with fullName that contains invisible characters: ${D.fullName}.`,
										);
										continue;
									}
									if (
										D.isDefault &&
										!(0, l.$t2)(L.description, "defaultChatParticipant")
									) {
										this.d.error(
											`Extension '${L.description.identifier.value}' CANNOT use API proposal: defaultChatParticipant.`,
										);
										continue;
									}
									if (
										(D.defaultImplicitVariables || D.locations) &&
										!(0, l.$t2)(L.description, "chatParticipantAdditions")
									) {
										this.d.error(
											`Extension '${L.description.identifier.value}' CANNOT use API proposal: chatParticipantAdditions.`,
										);
										continue;
									}
									if (!D.id || !D.name) {
										this.d.error(
											`Extension '${L.description.identifier.value}' CANNOT register participant without both id and name.`,
										);
										continue;
									}
									const M = [];
									let N = !1;
									if (
										(D.disambiguation?.length &&
											((0, l.$t2)(
												L.description,
												"contribChatParticipantDetection",
											)
												? M.push(...D.disambiguation)
												: N ||
													(this.d.warn(
														`'${L.description.identifier.value}' must add API proposal: 'contribChatParticipantDetection' to 'enabledApiProposals' to contribute disambiguation metadata.`,
													),
													(N = !0))),
										D.commands)
									)
										for (const R of D.commands)
											R.disambiguation?.length &&
												((0, l.$t2)(
													L.description,
													"contribChatParticipantDetection",
												)
													? M.push(...R.disambiguation)
													: N ||
														(this.d.warn(
															`'${L.description.identifier.value}' must add API proposal: 'contribChatParticipantDetection' to 'enabledApiProposals' to contribute disambiguation metadata.`,
														),
														(N = !0)));
									const A = new w.$Zc();
									A.add(
										this.c.registerAgent(D.id, {
											extensionId: L.description.identifier,
											publisherDisplayName:
												L.description.publisherDisplayName ??
												L.description.publisher,
											extensionPublisherId: L.description.publisher,
											extensionDisplayName:
												L.description.displayName ?? L.description.name,
											id: D.id,
											description: D.description,
											when: D.when,
											metadata: {
												isSticky: D.isSticky,
												sampleRequest: D.sampleRequest,
											},
											name: D.name,
											fullName: D.fullName,
											isDefault: D.isDefault,
											locations: (0, t.$Pb)(D.locations)
												? D.locations.map(o.ChatAgentLocation.fromRaw)
												: [o.ChatAgentLocation.Panel],
											slashCommands: D.commands ?? [],
											disambiguation: (0, t.$Lb)(M.flat()),
											supportsToolReferences: D.supportsToolReferences,
										}),
									),
										this.b.set(S(L.description.identifier, D.id), A);
								}
							for (const L of k.removed)
								for (const D of L.value)
									this.b.deleteAndDispose(S(L.description.identifier, D.id));
						});
					}
					f() {
						const P = (0, C.localize2)(4715, "Chat"),
							k = i.$ak.commentDiscussion,
							L = p.$XMb;
						return h.$Io
							.as(n.Extensions.ViewContainersRegistry)
							.registerViewContainer(
								{
									id: L,
									title: P,
									icon: k,
									ctorDescriptor: new m.$Ji(c.$ZSb, [
										L,
										{ mergeViewWithContainerWhenSingleView: !0 },
									]),
									storageId: L,
									hideIfEmpty: !0,
									order: 100,
								},
								n.ViewContainerLocation.Sidebar,
							);
					}
					g() {
						const P = "GitHub Copilot",
							k = [
								{
									id: g.$MYb,
									containerIcon: this.a.icon,
									containerTitle: this.a.title.value,
									singleViewPaneContainerTitle: this.a.title.value,
									name: { value: P, original: P },
									canToggleVisibility: !1,
									canMoveView: !0,
									ctorDescriptor: new m.$Ji(p.$YMb),
									when: d.$Kj.or(f.$61, f.$71),
								},
							];
						return (
							h.$Io.as(n.Extensions.ViewsRegistry).registerViews(k, this.a),
							(0, w.$Yc)(() => {
								h.$Io.as(n.Extensions.ViewsRegistry).deregisterViews(k, this.a);
							})
						);
					}
				};
				(e.$NIc = v), (e.$NIc = v = Ne([j(0, o.$c3), j(1, r.$ik)], v));
				function S(T, P) {
					return `${T.value}_${P}`;
				}
				let I = class {
					static {
						this.ID = "workbench.contrib.chatCompatNotifier";
					}
					constructor(P, k, L, D) {
						const M = f.$71.bindTo(k);
						P.queryLocal().then((A) => {
							const R = A.find(
								(O) => O.identifier.id === "github.copilot-chat",
							);
							if (
								R?.local?.validations.some((O) => O[0] === u.Severity.Error)
							) {
								const O = (0, C.localize)(4713, null),
									B = (0, C.localize)(
										4714,
										null,
										"GitHub Copilot Chat",
										D.nameLong,
									),
									U = `[${O}](command:${b.$ZTb}?${encodeURIComponent(JSON.stringify([["GitHub.copilot-chat"]]))})`,
									z = `GitHub Copilot Chat version: ${R.version}`;
								h.$Io
									.as(n.Extensions.ViewsRegistry)
									.registerViewWelcomeContent(g.$MYb, {
										content: [B, U, z].join(`

`),
										when: f.$71,
									}),
									M.set(!0);
							}
						});
						const N = L.onDidChangeAgents(() => {
							L.getDefaultAgent(o.ChatAgentLocation.Panel) &&
								(M.set(!1), N.dispose());
						});
					}
				};
				(e.$OIc = I),
					(e.$OIc = I =
						Ne([j(0, s.$MQb), j(1, d.$6j), j(2, o.$c3), j(3, a.$Bk)], I));
			},
		),
		