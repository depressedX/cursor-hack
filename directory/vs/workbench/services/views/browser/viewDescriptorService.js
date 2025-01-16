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
		