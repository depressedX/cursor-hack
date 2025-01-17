import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/views.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/event.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/types.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/themables.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../output/common/output.js';
import '../../../../base/common/map.js';
import '../../../../nls.js';
import '../../../../base/common/lazy.js';
define(
			de[3799],
			he([
				1, 0, 60, 8, 21, 30, 3, 6, 5, 9, 24, 28, 19, 26, 34, 11, 99, 297, 59, 4,
				149,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pxc = void 0),
					(e.$oxc = l),
					(0, g.$4X)(
						class extends g.$3X {
							constructor() {
								super({
									id: "_workbench.output.showViewsLog",
									title: (0, b.localize2)(13010, "Show Views Log"),
									category: p.$ck.Developer,
									f1: !0,
								});
							}
							async run(v) {
								const S = v.get(n.$jk),
									I = v.get(o.$o8);
								S.setVisibility(t.$F1, !0), I.showChannel(t.$F1);
							}
						},
					);
				function l(v) {
					return `${v}.hidden`;
				}
				let y = class extends C.$1c {
					constructor(S, I, T, P) {
						super(),
							(this.m = I),
							(this.n = T),
							(this.h = this.D(new d.$re())),
							(this.onDidChangeStoredState = this.h.event),
							(this.j = new s.$Y(() =>
								P.createLogger(t.$F1, { name: t.$G1, hidden: !0 }),
							)),
							(this.f = l(S)),
							(this.c = S),
							this.D(
								this.n.onDidChangeValue(
									w.StorageScope.PROFILE,
									this.f,
									this.D(new C.$Zc()),
								)(() => this.s()),
							),
							(this.g = this.t());
					}
					set(S, I) {
						this.g.set(S, I);
					}
					get(S) {
						return this.g.get(S);
					}
					updateState(S) {
						this.q(S), this.r(S);
					}
					q(S) {
						const I = this.u();
						for (const T of S) {
							const P = this.get(T.id);
							P &&
								(I[T.id] = {
									collapsed: !!P.collapsed,
									isHidden: !P.visibleWorkspace,
									size: P.size,
									order: T.workspace && P ? P.order : void 0,
								});
						}
						Object.keys(I).length > 0
							? this.n.store(
									this.c,
									JSON.stringify(I),
									w.StorageScope.WORKSPACE,
									w.StorageTarget.MACHINE,
								)
							: this.n.remove(this.c, w.StorageScope.WORKSPACE);
					}
					r(S) {
						const I = this.w();
						for (const T of S) {
							const P = this.get(T.id);
							I.set(T.id, {
								id: T.id,
								isHidden: P && T.canToggleVisibility ? !P.visibleGlobal : !1,
								order: !T.workspace && P ? P.order : void 0,
							});
						}
						this.y(I);
					}
					s() {
						if (this.F !== this.G()) {
							this.C = void 0;
							const S = this.w(),
								I = this.u(),
								T = [];
							for (const [P, k] of S) {
								const L = this.get(P);
								if (L)
									L.visibleGlobal !== !k.isHidden &&
										(k.isHidden ||
											this.j.value.info(
												`View visibility state changed: ${P} is now visible`,
												this.m,
											),
										T.push({ id: P, visible: !k.isHidden }));
								else {
									const D = I[P];
									this.set(P, {
										active: !1,
										visibleGlobal: !k.isHidden,
										visibleWorkspace: (0, a.$sg)(D?.isHidden)
											? void 0
											: !D?.isHidden,
										collapsed: D?.collapsed,
										order: D?.order,
										size: D?.size,
									});
								}
							}
							if (T.length) {
								this.h.fire(T);
								for (const P of T) {
									const k = this.get(P.id);
									k && (k.visibleGlobal = P.visible);
								}
							}
						}
					}
					t() {
						const S = new Map(),
							I = this.u();
						for (const D of Object.keys(I)) {
							const M = I[D];
							S.set(D, {
								active: !1,
								visibleGlobal: void 0,
								visibleWorkspace: (0, a.$sg)(M.isHidden) ? void 0 : !M.isHidden,
								collapsed: M.collapsed,
								order: M.order,
								size: M.size,
							});
						}
						const T = this.n.get(this.f, w.StorageScope.WORKSPACE, "[]"),
							{ state: P } = this.z(T);
						if (P.size > 0) {
							for (const { id: D, isHidden: M } of P.values()) {
								const N = S.get(D);
								N
									? (0, a.$sg)(N.visibleWorkspace) && (N.visibleWorkspace = !M)
									: S.set(D, {
											active: !1,
											collapsed: void 0,
											visibleGlobal: void 0,
											visibleWorkspace: !M,
										});
							}
							this.n.remove(this.f, w.StorageScope.WORKSPACE);
						}
						const { state: k, hasDuplicates: L } = this.z(this.F);
						L && this.y(k);
						for (const { id: D, isHidden: M, order: N } of k.values()) {
							const A = S.get(D);
							A
								? ((A.visibleGlobal = !M), (0, a.$sg)(N) || (A.order = N))
								: S.set(D, {
										active: !1,
										visibleGlobal: !M,
										order: N,
										collapsed: void 0,
										visibleWorkspace: void 0,
									});
						}
						return S;
					}
					u() {
						return JSON.parse(
							this.n.get(this.c, w.StorageScope.WORKSPACE, "{}"),
						);
					}
					w() {
						return this.z(this.F).state;
					}
					y(S) {
						this.F = JSON.stringify([...S.values()]);
					}
					z(S) {
						const I = JSON.parse(S);
						let T = !1;
						return {
							state: I.reduce(
								(k, L) => (
									typeof L == "string"
										? ((T = T || k.has(L)), k.set(L, { id: L, isHidden: !0 }))
										: ((T = T || k.has(L.id)), k.set(L.id, L)),
									k
								),
								new Map(),
							),
							hasDuplicates: T,
						};
					}
					get F() {
						return this.C || (this.C = this.G()), this.C;
					}
					set F(S) {
						this.F !== S && ((this.C = S), this.H(S));
					}
					G() {
						return this.n.get(this.f, w.StorageScope.PROFILE, "[]");
					}
					H(S) {
						this.n.store(
							this.f,
							S,
							w.StorageScope.PROFILE,
							w.StorageTarget.USER,
						);
					}
				};
				y = Ne([j(2, w.$lq), j(3, n.$jk)], y);
				let $ = class extends C.$1c {
					get title() {
						return this.h;
					}
					get icon() {
						return this.j;
					}
					get keybindingId() {
						return this.m;
					}
					get allViewDescriptors() {
						return this.f.map((S) => S.viewDescriptor);
					}
					get activeViewDescriptors() {
						return this.f
							.filter((S) => S.state.active)
							.map((S) => S.viewDescriptor);
					}
					get visibleViewDescriptors() {
						return this.f.filter((S) => this.N(S)).map((S) => S.viewDescriptor);
					}
					constructor(S, I, T, P) {
						super(),
							(this.viewContainer = S),
							(this.y = T),
							(this.c = new f.$Lc()),
							(this.f = []),
							(this.n = this.D(new d.$re())),
							(this.onDidChangeContainerInfo = this.n.event),
							(this.q = this.D(new d.$re())),
							(this.onDidChangeAllViewDescriptors = this.q.event),
							(this.r = this.D(new d.$re())),
							(this.onDidChangeActiveViewDescriptors = this.r.event),
							(this.s = this.D(new d.$re())),
							(this.onDidAddVisibleViewDescriptors = this.s.event),
							(this.t = this.D(new d.$re())),
							(this.onDidRemoveVisibleViewDescriptors = this.t.event),
							(this.u = this.D(new d.$re())),
							(this.onDidMoveVisibleViewDescriptors = this.u.event),
							(this.w = new s.$Y(() =>
								P.createLogger(t.$F1, { name: t.$G1, hidden: !0 }),
							)),
							this.D(
								d.Event.filter(T.onDidChangeContext, (k) =>
									k.affectsSome(this.c),
								)(() => this.H()),
							),
							(this.g = this.D(
								I.createInstance(
									y,
									S.storageId || `${S.id}.state`,
									typeof S.title == "string" ? S.title : S.title.original,
								),
							)),
							this.D(this.g.onDidChangeStoredState((k) => this.F(k))),
							this.z();
					}
					z() {
						const S =
								this.viewContainer.alwaysUseContainerInfo ||
								this.visibleViewDescriptors.length === 0 ||
								this.visibleViewDescriptors.some(
									(M) =>
										E.$Io
											.as(t.Extensions.ViewsRegistry)
											.getViewContainer(M.id) === this.viewContainer,
								),
							I = S
								? typeof this.viewContainer.title == "string"
									? this.viewContainer.title
									: this.viewContainer.title.value
								: this.visibleViewDescriptors[0]?.containerTitle ||
									this.visibleViewDescriptors[0]?.name?.value ||
									"";
						let T = !1;
						this.h !== I && ((this.h = I), (T = !0));
						const P = S
							? this.viewContainer.icon
							: this.visibleViewDescriptors[0]?.containerIcon || t.$H1;
						let k = !1;
						this.C(P) || ((this.j = P), (k = !0));
						const L =
							this.viewContainer.openCommandActionDescriptor?.id ??
							this.activeViewDescriptors.find(
								(M) => M.openCommandActionDescriptor,
							)?.openCommandActionDescriptor?.id;
						let D = !1;
						this.m !== L && ((this.m = L), (D = !0)),
							(T || k || D) &&
								this.n.fire({ title: T, icon: k, keybindingId: D });
					}
					C(S) {
						return r.URI.isUri(S)
							? r.URI.isUri(this.j) && (0, h.$gh)(S, this.j)
							: c.ThemeIcon.isThemeIcon(S)
								? c.ThemeIcon.isThemeIcon(this.j) &&
									c.ThemeIcon.isEqual(S, this.j)
								: S === this.j;
					}
					isVisible(S) {
						const I = this.f.find((T) => T.viewDescriptor.id === S);
						if (!I) throw new Error(`Unknown view ${S}`);
						return this.N(I);
					}
					setVisible(S, I) {
						this.F([{ id: S, visible: I }]);
					}
					F(S) {
						const I = (0, u.$Lb)(
								S.filter(({ visible: k }) => !k).map(({ id: k }) => this.Q(k)),
							),
							T = [];
						for (const { viewDescriptorItem: k, visibleIndex: L } of I)
							this.G(k, !1) &&
								T.push({ viewDescriptor: k.viewDescriptor, index: L });
						T.length && this.J(T);
						const P = [];
						for (const { id: k, visible: L } of S) {
							if (!L) continue;
							const D = this.Q(k);
							if (!D) continue;
							const { viewDescriptorItem: M, visibleIndex: N } = D;
							this.G(M, !0) &&
								P.push({
									index: N,
									viewDescriptor: M.viewDescriptor,
									size: M.state.size,
									collapsed: !!M.state.collapsed,
								});
						}
						P.length && this.I(P);
					}
					G(S, I) {
						return !S.viewDescriptor.canToggleVisibility || this.O(S) === I
							? !1
							: (S.viewDescriptor.workspace
									? (S.state.visibleWorkspace = I)
									: ((S.state.visibleGlobal = I),
										I &&
											this.w.value.info(
												`Showing view ${S.viewDescriptor.id} in the container ${this.viewContainer.id}`,
											)),
								this.N(S) === I);
					}
					isCollapsed(S) {
						return !!this.P(S).viewDescriptorItem.state.collapsed;
					}
					setCollapsed(S, I) {
						const { viewDescriptorItem: T } = this.P(S);
						T.state.collapsed !== I && (T.state.collapsed = I),
							this.g.updateState(this.allViewDescriptors);
					}
					getSize(S) {
						return this.P(S).viewDescriptorItem.state.size;
					}
					setSizes(S) {
						for (const { id: I, size: T } of S) {
							const { viewDescriptorItem: P } = this.P(I);
							P.state.size !== T && (P.state.size = T);
						}
						this.g.updateState(this.allViewDescriptors);
					}
					move(S, I) {
						const T = this.f.findIndex((D) => D.viewDescriptor.id === S),
							P = this.f.findIndex((D) => D.viewDescriptor.id === I),
							k = this.f[T],
							L = this.f[P];
						(0, u.$Nb)(this.f, T, P);
						for (let D = 0; D < this.f.length; D++) this.f[D].state.order = D;
						this.L(
							{ index: T, viewDescriptor: k.viewDescriptor },
							{ index: P, viewDescriptor: L.viewDescriptor },
						);
					}
					add(S) {
						const I = [];
						for (const k of S) {
							const L = k.viewDescriptor;
							if (L.when) for (const M of L.when.keys()) this.c.add(M);
							let D = this.g.get(L.id);
							if (D) {
								if (L.workspace)
									D.visibleWorkspace = (0, a.$ug)(k.visible)
										? (0, a.$ug)(D.visibleWorkspace)
											? !L.hideByDefault
											: D.visibleWorkspace
										: k.visible;
								else {
									const M = D.visibleGlobal;
									(D.visibleGlobal = (0, a.$ug)(k.visible)
										? (0, a.$ug)(D.visibleGlobal)
											? !L.hideByDefault
											: D.visibleGlobal
										: k.visible),
										D.visibleGlobal &&
											!M &&
											this.w.value.info(
												`Added view ${L.id} in the container ${this.viewContainer.id} and showing it.`,
												`${M}`,
												`${L.hideByDefault}`,
												`${k.visible}`,
											);
								}
								D.collapsed = (0, a.$ug)(k.collapsed)
									? (0, a.$ug)(D.collapsed)
										? !!L.collapsed
										: D.collapsed
									: k.collapsed;
							} else
								D = {
									active: !1,
									visibleGlobal: (0, a.$ug)(k.visible)
										? !L.hideByDefault
										: k.visible,
									visibleWorkspace: (0, a.$ug)(k.visible)
										? !L.hideByDefault
										: k.visible,
									collapsed: (0, a.$ug)(k.collapsed)
										? !!L.collapsed
										: k.collapsed,
								};
							this.g.set(L.id, D),
								(D.active = this.y.contextMatchesRules(L.when)),
								I.push({ viewDescriptor: L, state: D });
						}
						this.f.push(...I),
							this.f.sort(this.R.bind(this)),
							this.q.fire({
								added: I.map(({ viewDescriptor: k }) => k),
								removed: [],
							});
						const T = [];
						for (const k of I)
							k.state.active &&
								T.push({ viewDescriptorItem: k, visible: this.N(k) });
						T.length &&
							this.r.fire({
								added: T.map(({ viewDescriptorItem: k }) => k.viewDescriptor),
								removed: [],
							});
						const P = [];
						for (const { viewDescriptorItem: k, visible: L } of T)
							if (L && this.N(k)) {
								const { visibleIndex: D } = this.P(k.viewDescriptor.id);
								P.push({
									index: D,
									viewDescriptor: k.viewDescriptor,
									size: k.state.size,
									collapsed: !!k.state.collapsed,
								});
							}
						this.I(P);
					}
					remove(S) {
						const I = [],
							T = [],
							P = [],
							k = [];
						for (const L of S) {
							if (L.when) for (const M of L.when.keys()) this.c.delete(M);
							const D = this.f.findIndex((M) => M.viewDescriptor.id === L.id);
							if (D !== -1) {
								I.push(L);
								const M = this.f[D];
								if ((M.state.active && P.push(M.viewDescriptor), this.N(M))) {
									const { visibleIndex: N } = this.P(M.viewDescriptor.id);
									k.push({ index: N, viewDescriptor: M.viewDescriptor });
								}
								T.push(M);
							}
						}
						T.forEach((L) => this.f.splice(this.f.indexOf(L), 1)),
							this.J(k),
							P.length && this.r.fire({ added: [], removed: P }),
							I.length && this.q.fire({ added: [], removed: I });
					}
					H() {
						const S = [],
							I = [];
						for (const k of this.f) {
							const L = k.state.active,
								D = this.y.contextMatchesRules(k.viewDescriptor.when);
							L !== D &&
								(D
									? S.push({ item: k, visibleWhenActive: this.O(k) })
									: I.push(k));
						}
						const T = [];
						for (const k of I)
							if (this.N(k)) {
								const { visibleIndex: L } = this.P(k.viewDescriptor.id);
								T.push({ index: L, viewDescriptor: k.viewDescriptor });
							}
						I.forEach((k) => (k.state.active = !1)),
							S.forEach(({ item: k }) => (k.state.active = !0)),
							this.J(T),
							(S.length || I.length) &&
								this.r.fire({
									added: S.map(({ item: k }) => k.viewDescriptor),
									removed: I.map((k) => k.viewDescriptor),
								});
						const P = [];
						for (const { item: k, visibleWhenActive: L } of S)
							if (L && this.N(k)) {
								const { visibleIndex: D } = this.P(k.viewDescriptor.id);
								P.push({
									index: D,
									viewDescriptor: k.viewDescriptor,
									size: k.state.size,
									collapsed: !!k.state.collapsed,
								});
							}
						this.I(P);
					}
					I(S) {
						S.length &&
							(this.s.fire(S.sort((I, T) => I.index - T.index)),
							this.M(
								`Added views:${S.map((I) => I.viewDescriptor.id).join(",")} in ${this.viewContainer.id}`,
							));
					}
					J(S) {
						S.length &&
							(this.t.fire(S.sort((I, T) => T.index - I.index)),
							this.M(
								`Removed views:${S.map((I) => I.viewDescriptor.id).join(",")} from ${this.viewContainer.id}`,
							));
					}
					L(S, I) {
						this.u.fire({ from: S, to: I }),
							this.M(
								`Moved view ${S.viewDescriptor.id} to ${I.viewDescriptor.id} in ${this.viewContainer.id}`,
							);
					}
					M(S) {
						this.w.value.info(S),
							this.g.updateState(this.allViewDescriptors),
							this.z();
					}
					N(S) {
						return S.state.active ? this.O(S) : !1;
					}
					O(S) {
						return S.viewDescriptor.workspace
							? !!S.state.visibleWorkspace
							: !!S.state.visibleGlobal;
					}
					P(S) {
						const I = this.Q(S);
						if (I) return I;
						throw new Error(`view descriptor ${S} not found`);
					}
					Q(S) {
						for (let I = 0, T = 0; I < this.f.length; I++) {
							const P = this.f[I];
							if (P.viewDescriptor.id === S)
								return { index: I, visibleIndex: T, viewDescriptorItem: P };
							this.N(P) && T++;
						}
					}
					R(S, I) {
						return S.viewDescriptor.id === I.viewDescriptor.id
							? 0
							: this.S(S) - this.S(I) ||
									this.U(S.viewDescriptor, I.viewDescriptor);
					}
					S(S) {
						const I =
							typeof S.state.order == "number"
								? S.state.order
								: S.viewDescriptor.order;
						return typeof I == "number" ? I : Number.MAX_VALUE;
					}
					U(S, I) {
						return !S.group || !I.group || S.group === I.group
							? 0
							: S.group < I.group
								? -1
								: 1;
					}
				};
				(e.$pxc = $),
					(e.$pxc = $ = Ne([j(1, m.$Li), j(2, i.$6j), j(3, n.$jk)], $));
			},
		),
		