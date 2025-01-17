import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import '../../../base/parts/storage/common/storage.js';
import '../../instantiation/common/instantiation.js';
import '../../storage/common/storage.js';
import '../../../base/common/event.js';
import '../../storage/common/storageIpc.js';
import './userDataProfile.js';
define(
			de[681],
			he([1, 0, 3, 1174, 5, 21, 6, 1639, 129]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_wc = e.$$wc = e.$0wc = void 0),
					(e.$0wc = (0, w.$Mi)("IUserDataProfileStorageService"));
				let r = class extends t.$1c {
					constructor(c, n) {
						super(), (this.b = n), c && (this.a = this.D(new t.$0c()));
					}
					async readStorageData(c) {
						return this.withProfileScopedStorageService(c, async (n) =>
							this.c(n),
						);
					}
					async updateStorageData(c, n, g) {
						return this.withProfileScopedStorageService(c, async (p) =>
							this.f(p, n, g),
						);
					}
					async withProfileScopedStorageService(c, n) {
						if (this.b.hasScope(c)) return n(this.b);
						let g = this.a?.get(c.id);
						if (!g) {
							(g = new a(this.g(c))), this.a?.set(c.id, g);
							try {
								await g.initialize();
							} catch (p) {
								throw (
									(this.a?.has(c.id)
										? this.a.deleteAndDispose(c.id)
										: g.dispose(),
									p)
								);
							}
						}
						try {
							const p = await n(g);
							return await g.flush(), p;
						} finally {
							this.a?.has(c.id) || g.dispose();
						}
					}
					c(c) {
						const n = new Map(),
							g = (p) => {
								for (const o of c.keys(E.StorageScope.PROFILE, p))
									n.set(o, {
										value: c.get(o, E.StorageScope.PROFILE),
										target: p,
									});
							};
						return g(E.StorageTarget.USER), g(E.StorageTarget.MACHINE), n;
					}
					f(c, n, g) {
						c.storeAll(
							Array.from(n.entries()).map(([p, o]) => ({
								key: p,
								value: o,
								scope: E.StorageScope.PROFILE,
								target: g,
							})),
							!0,
						);
					}
				};
				(e.$$wc = r), (e.$$wc = r = Ne([j(1, E.$lq)], r));
				class u extends r {
					constructor(c, n, g, p, o) {
						super(c, p), (this.j = n);
						const f = n.getChannel("profileStorageListener"),
							b = this.D(new t.$2c());
						(this.h = this.D(
							new C.$re({
								onWillAddFirstListener: () => {
									b.value = f.listen("onDidChange")((s) => {
										o.trace("profile storage changes", s),
											this.h.fire({
												targetChanges: s.targetChanges.map((l) =>
													(0, m.$Yl)(l, g.profilesHome.scheme),
												),
												valueChanges: s.valueChanges.map((l) => ({
													...l,
													profile: (0, m.$Yl)(l.profile, g.profilesHome.scheme),
												})),
											});
									});
								},
								onDidRemoveLastListener: () => (b.value = void 0),
							}),
						)),
							(this.onDidChange = this.h.event);
					}
					async g(c) {
						const n = this.j.getChannel("storage");
						return (0, E.$oq)(c) ? new d.$6wc(n) : new d.$7wc(n, c);
					}
				}
				e.$_wc = u;
				class a extends E.$nq {
					constructor(c) {
						super({ flushInterval: 100 }), (this.X = c);
					}
					async Q() {
						const c = await this.X,
							n = new i.$hq(c);
						return (
							this.D(
								n.onDidChangeStorage((g) => {
									this.u(E.StorageScope.PROFILE, g);
								}),
							),
							this.D(
								(0, t.$Yc)(() => {
									n.close(), n.dispose(), (0, t.$Uc)(c) && c.dispose();
								}),
							),
							(this.s = n),
							this.s.init()
						);
					}
					R(c) {
						return c === E.StorageScope.PROFILE ? this.s : void 0;
					}
					S() {}
					async U() {}
					async W() {}
					hasScope() {
						return !1;
					}
				}
			},
		),
		