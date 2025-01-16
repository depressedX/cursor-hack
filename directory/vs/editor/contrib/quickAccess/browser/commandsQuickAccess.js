define(de[2900], he([1, 0, 274, 599, 679]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$NMc = void 0);
			class E extends w.$P0b {
				constructor(d, m, r, u, a, h) {
					super(d, m, r, u, a, h);
				}
				L() {
					const d = this.J;
					if (!d) return [];
					const m = [];
					for (const r of d.getSupportedActions()) {
						let u;
						r.metadata?.description &&
							((0, i.$gk)(r.metadata.description)
								? (u = r.metadata.description)
								: (u = {
										original: r.metadata.description,
										value: r.metadata.description,
									})),
							m.push({
								commandId: r.id,
								commandAlias: r.alias,
								commandDescription: u,
								label: (0, t.$$k)(r.label) || r.id,
							});
					}
					return m;
				}
			}
			e.$NMc = E;
		}),
		define(
			de[1678],
			he([1, 0, 14, 4, 21, 26, 3]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$7Uc = u);
				const d = E.ThemeIcon.asClassName(t.$ak.pin),
					m = E.ThemeIcon.asClassName(t.$ak.pinned),
					r = [d, m];
				function u(o, f, b, s) {
					const l = b.items;
					let y = a(f, b, o, void 0, s);
					const $ = new C.$Zc();
					return (
						$.add(
							b.onDidTriggerItemButton(async (v) => {
								v.button.iconClass &&
									r.includes(v.button.iconClass) &&
									((b.items = l),
									(y = a(f, b, o, v.item, s)),
									(b.items = b.value ? l : y));
							}),
						),
						$.add(
							b.onDidChangeValue(async (v) => {
								b.items === y && v
									? (b.items = l)
									: b.items === l && !v && (b.items = y);
							}),
						),
						(b.items = b.value ? l : y),
						b.show(),
						$
					);
				}
				function a(o, f, b, s, l) {
					const y = [];
					let $;
					s ? ($ = g(o, s, b)) : ($ = p(o, b)),
						$.length &&
							y.push({ type: "separator", label: (0, i.localize)(2060, null) });
					const v = new Set();
					for (const S of $) {
						const I = f.items.find((T) => n(T, S));
						if (I) {
							const T = h(I),
								P = Object.assign({}, I);
							(!l || !v.has(T)) && (v.add(T), c(P, !1), y.push(P));
						}
					}
					for (const S of f.items) c(S, !0), y.push(S);
					return y;
				}
				function h(o) {
					return o.type === "separator"
						? ""
						: o.id || `${o.label}${o.description}${o.detail}}`;
				}
				function c(o, f) {
					if (o.type === "separator") return;
					const b =
						o.buttons?.filter((s) => s.iconClass && !r.includes(s.iconClass)) ??
						[];
					b.unshift({
						iconClass: f ? d : m,
						tooltip: f
							? (0, i.localize)(2061, null)
							: (0, i.localize)(2062, null),
						alwaysVisible: !1,
					}),
						(o.buttons = b);
				}
				function n(o, f) {
					return h(o) === h(f);
				}
				function g(o, f, b) {
					const s = f.buttons?.find((y) => y.iconClass === m);
					let l = p(o, b);
					return (
						s ? (l = l.filter((y) => h(y) !== h(f))) : l.push(f),
						b.store(
							o,
							JSON.stringify(l),
							w.StorageScope.WORKSPACE,
							w.StorageTarget.MACHINE,
						),
						l
					);
				}
				function p(o, f) {
					const b = f.get(o, w.StorageScope.WORKSPACE);
					return b ? JSON.parse(b) : [];
				}
			},
		),
		define(
			de[1679],
			he([1, 0, 45, 205, 193, 3, 21, 5, 59, 47, 58, 13, 34, 2729, 6]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				var g;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qec = void 0);
				let p = class extends E.$1c {
					static {
						g = this;
					}
					static {
						this.registeredActions = [];
					}
					static registerAction(f) {
						this.registeredActions.push(f);
					}
					constructor(f, b, s) {
						super(),
							(this.c = f),
							(this.f = b),
							(this.g = s),
							(this.DEV_ONLY_serverApplicationUserPersistentStorage = void 0),
							(this.set_DEV_ONLY_ServerApplicationUserPersistentStorage =
								void 0),
							(this.b = void 0),
							(this.n = new m.$Jc(10)),
							(this.y = this.D(new n.$re())),
							(this.z = this.y.event),
							([this.nonPersistentStorage, this.setNonPersistentStorage] =
								this.m()),
							([this.applicationUserPersistentStorage, this.a] = this.u(
								C.StorageScope.APPLICATION,
								C.StorageTarget.USER,
								u.$yX,
								t.$qAb,
								t.$pAb,
								i.$7zb,
							)),
							(this.setApplicationUserPersistentStorage = (...l) => {
								(0, a.batch)(() => {
									this.a(...l),
										this.a(
											"SPECIAL_KEY_lastUpdatedTimeInUnixSeconds",
											Date.now() / 1e3,
										);
								});
							}),
							([
								this.workspaceUserPersistentStorage,
								this.setWorkspaceUserPersistentStorage,
							] = this.u(
								C.StorageScope.WORKSPACE,
								C.StorageTarget.USER,
								u.$zX,
								t.$sAb,
								t.$rAb,
								i.$8zb,
							)),
							this.D(
								this.c.onWillSaveState(() => {
									this.q(
										this.applicationUserPersistentStorage,
										C.StorageScope.APPLICATION,
										C.StorageTarget.USER,
										u.$yX,
										i.$7zb,
									),
										this.q(
											this.workspaceUserPersistentStorage,
											C.StorageScope.WORKSPACE,
											C.StorageTarget.USER,
											u.$zX,
											i.$8zb,
										);
								}),
							),
							this.D(
								this.c.onDidChangeValue(
									C.StorageScope.APPLICATION,
									u.$yX,
									this.D(new E.$Zc()),
								)((l) => {
									this.r(
										this.setApplicationUserPersistentStorage,
										this.applicationUserPersistentStorage,
										C.StorageScope.APPLICATION,
										C.StorageTarget.USER,
										u.$yX,
										l,
										t.$qAb,
										i.$7zb,
									);
								}),
							),
							this.D(
								this.c.onDidChangeValue(
									C.StorageScope.WORKSPACE,
									u.$zX,
									this.D(new E.$Zc()),
								)((l) => {
									this.r(
										this.setWorkspaceUserPersistentStorage,
										this.workspaceUserPersistentStorage,
										C.StorageScope.WORKSPACE,
										C.StorageTarget.USER,
										u.$zX,
										l,
										t.$sAb,
										i.$8zb,
									);
								}),
							);
						for (const l of g.registeredActions) l(this, this.f);
					}
					h() {
						this.f.invokeFunction((f) => {
							try {
								const b = f.get(c.$pec);
								this.b = b;
							} catch {}
						});
					}
					j() {
						this.b &&
							this.set_DEV_ONLY_ServerApplicationUserPersistentStorage &&
							this.DEV_ONLY_serverApplicationUserPersistentStorage &&
							(this.b.registerKey(u.$yX, u.$AX),
							this.D(
								this.b.onDidChangeValue(
									u.$yX,
									this.D(new E.$Zc()),
								)((f) => {
									this.F(
										u.$yX,
										{
											key: f.key,
											scope: C.StorageScope.APPLICATION,
											target: C.StorageTarget.USER,
										},
										i.$7zb,
										this.set_DEV_ONLY_ServerApplicationUserPersistentStorage,
										this.DEV_ONLY_serverApplicationUserPersistentStorage,
									);
								}),
							),
							this.D(
								this.z(() => {
									this.DEV_ONLY_serverApplicationUserPersistentStorage &&
										this.G(
											this.DEV_ONLY_serverApplicationUserPersistentStorage,
											u.$yX,
											[],
										);
								}),
							));
					}
					m() {
						return (0, w.createStore)(t.$tAb, void 0);
					}
					manuallyDisposedWrapper(f) {
						const b = new t.$uAb(this);
						return (
							f(),
							{
								dispose: () => {
									b.dispose();
								},
							}
						);
					}
					onChangeEffectManuallyDisposed(f) {
						const b = new t.$uAb(this);
						return (
							b.onChangeEffect(f),
							{
								dispose: () => {
									b.dispose();
								},
							}
						);
					}
					q(f, b, s, l, y) {
						const $ = (0, r.$9g)();
						this.n.set(`${l}${b}`, $),
							this.c.store(
								l,
								g.stringifyStorage(f, y, (v) => this.g.warn(v), $),
								b,
								s,
							);
					}
					static stringifyStorage(f, b, s, l) {
						const y = (v, S) => {
								if (v === void 0) return;
								if (typeof v != "object" || v === null) return v;
								const I = S.filter((P) => P.length > 0),
									T = I.filter((P) => P.length === 1);
								if (Array.isArray(v))
									return T.some((L) => L[0] === !0)
										? []
										: (T.length > 0 &&
												s(
													`there is a path that ends in the wrong type! expected true because we are at an array, but got ${T[0][0]}`,
												),
											v.flatMap((L) => {
												const D = I.filter((M) => M[0] === !0);
												return typeof L == "object" &&
													L &&
													"SPECIAL_KEY_doNotPersist" in L &&
													L.SPECIAL_KEY_doNotPersist === !0
													? []
													: [
															y(
																L,
																D.map((M) => M.slice(1)),
															),
														];
											}));
								{
									const P = v;
									if (
										"SPECIAL_KEY_doNotPersist" in P &&
										P.SPECIAL_KEY_doNotPersist === !0
									)
										return;
									const k = {};
									for (const L in P)
										if (L in P) {
											const D = P[L],
												M = I.filter((N) => N[0] === L);
											if (M.some((N) => N.length === 1)) continue;
											k[L] = y(
												D,
												M.map((N) => N.slice(1)),
											);
										}
									return k;
								}
							},
							$ = y((0, w.unwrap)(f), b);
						return (
							l && typeof $ == "object" && ($.SPECIAL_KEY_id = l),
							JSON.stringify($)
						);
					}
					r(f, b, s, l, y, $, v, S) {
						if (
							$.scope === s &&
							($.target === void 0 || $.target === l) &&
							$.key === y
						)
							try {
								const T = this.t(s, y, v, b, S, {
									throwIfSavedObjectIsTheSame: !0,
								});
								if (
									"SPECIAL_KEY_lastUpdatedTimeInUnixSeconds" in T &&
									"SPECIAL_KEY_lastUpdatedTimeInUnixSeconds" in b &&
									typeof T.SPECIAL_KEY_lastUpdatedTimeInUnixSeconds ==
										"number" &&
									typeof b.SPECIAL_KEY_lastUpdatedTimeInUnixSeconds ==
										"number" &&
									b.SPECIAL_KEY_lastUpdatedTimeInUnixSeconds >=
										T.SPECIAL_KEY_lastUpdatedTimeInUnixSeconds
								)
									return;
								g.updateWithValue(f, T, S);
							} catch {}
					}
					static updateWithValue(f, b, s) {
						f((0, w.reconcile)(b));
					}
					static hydrateOldValue(f, b, s, l) {
						const y = ($, v) => {
							for (const S in v)
								if (!$.hasOwnProperty(S))
									l(
										`Missing property "${S}" in oldValue. Filling with value from initValue. Please add a migration if necessary.`,
									),
										($[S] = v[S]);
								else if (Array.isArray($[S])) {
									if (Array.isArray(v[S]))
										for (const I of v[S])
											typeof I == "object" &&
												I !== null &&
												"SPECIAL_KEY_doNotPersist" in I &&
												I.SPECIAL_KEY_doNotPersist === !0 &&
												$[S].push(I);
								} else
									typeof v[S] == "object" && v[S] !== null && y($[S], v[S]);
						};
						return y(b, f), JSON.parse(JSON.stringify(b));
					}
					t(f, b, s, l, y, $) {
						const v = this.c.get(b, f);
						let S = {};
						try {
							v && (S = JSON.parse(v));
						} catch {}
						if (
							$.throwIfSavedObjectIsTheSame === !0 &&
							typeof S == "object" &&
							"SPECIAL_KEY_id" in S &&
							this.n.get(`${b}${f}`) === S.SPECIAL_KEY_id
						)
							throw new Error(
								"this is the same object that we just saved! we should ignore it",
							);
						return (
							this.f.invokeFunction((I) => {
								for (const T of s) S = T(I, S);
							}),
							g.hydrateOldValue(l, S, y, (I) => this.g.warn(I))
						);
					}
					u(f, b, s, l, y, $) {
						return (0, w.createStore)(
							this.t(f, s, l, y, $, { throwIfSavedObjectIsTheSame: !1 }),
							void 0,
						);
					}
					w(f, b, s, l) {
						if (this.b === void 0) return b;
						const y = "server",
							$ = this.b.syncGetOnlyWorksForRegisteredKeys(f);
						let v = {};
						try {
							$ && (v = JSON.parse($));
						} catch {}
						if (
							l.throwIfSavedObjectIsTheSame === !0 &&
							typeof v == "object" &&
							"SPECIAL_KEY_id" in v &&
							this.n.get(`${f}${y}`) === v.SPECIAL_KEY_id
						)
							throw new Error(
								"this is the same object that we just saved! we should ignore it",
							);
						return g.hydrateOldValue(b, v, s, (S) => this.g.warn(S));
					}
					C(f, b, s, l, y, $) {
						const v = this.w(s, y, $, { throwIfSavedObjectIsTheSame: !1 }),
							S = (0, w.createStore)(v, void 0),
							I = S[0],
							T = S[1];
						return [
							I,
							(...k) => {
								const L = T(...k);
								return this.y.fire(!0), L;
							},
						];
					}
					F(f, b, s, l, y) {
						if (!(y === void 0 || l === void 0 || !(b.key === f)))
							try {
								const v = this.w(f, y, s, { throwIfSavedObjectIsTheSame: !0 });
								if (
									"SPECIAL_KEY_lastUpdatedTimeInUnixSeconds" in v &&
									"SPECIAL_KEY_lastUpdatedTimeInUnixSeconds" in y &&
									typeof v.SPECIAL_KEY_lastUpdatedTimeInUnixSeconds ==
										"number" &&
									typeof y.SPECIAL_KEY_lastUpdatedTimeInUnixSeconds ==
										"number" &&
									y.SPECIAL_KEY_lastUpdatedTimeInUnixSeconds >=
										v.SPECIAL_KEY_lastUpdatedTimeInUnixSeconds
								)
									return;
								g.updateWithValue(l, v, s);
							} catch {}
					}
					G(f, b, s) {
						const l = (0, r.$9g)();
						this.n.set(`${b}server`, l),
							this.b !== void 0 &&
								this.b.store(
									b,
									g.stringifyStorage(f, s, ($) => this.g.warn($), l),
								);
					}
					createScoped(f) {
						return this.D(new t.$uAb(f));
					}
				};
				(e.$qec = p),
					(e.$qec = p = g = Ne([j(0, C.$lq), j(1, d.$Li), j(2, h.$ik)], p));
			},
		),
		define(
			de[783],
			he([1, 0, 15, 1186, 5, 21, 6, 34, 3, 149]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Zrb = e.$Yrb = void 0),
					(e.$Yrb = (0, w.$Mi)("secretStorageService"));
				let u = class extends m.$1c {
					constructor(h, c, n, g) {
						super(),
							(this.h = h),
							(this.j = c),
							(this.m = n),
							(this.n = g),
							(this.a = "secret://"),
							(this.b = this.D(new C.$re())),
							(this.onDidChangeSecret = this.b.event),
							(this.c = new t.$Ih()),
							(this.f = "unknown"),
							(this.g = this.D(new m.$Zc())),
							(this.q = new r.$Y(() => this.s()));
					}
					get type() {
						return this.f;
					}
					get r() {
						return this.q.value;
					}
					get(h) {
						return this.c.queue(h, async () => {
							const c = await this.r,
								n = this.w(h);
							this.n.trace("[secrets] getting secret for key:", n);
							const g = c.get(n, E.StorageScope.APPLICATION);
							if (!g) {
								this.n.trace("[secrets] no secret found for key:", n);
								return;
							}
							try {
								this.n.trace("[secrets] decrypting gotten secret for key:", n);
								const p = this.f === "in-memory" ? g : await this.m.decrypt(g);
								return (
									this.n.trace("[secrets] decrypted secret for key:", n), p
								);
							} catch (p) {
								this.n.error(p), this.delete(h);
								return;
							}
						});
					}
					set(h, c) {
						return this.c.queue(h, async () => {
							const n = await this.r;
							this.n.trace("[secrets] encrypting secret for key:", h);
							let g;
							try {
								g = this.f === "in-memory" ? c : await this.m.encrypt(c);
							} catch (o) {
								throw (this.n.error(o), o);
							}
							const p = this.w(h);
							this.n.trace("[secrets] storing encrypted secret for key:", p),
								n.store(
									p,
									g,
									E.StorageScope.APPLICATION,
									E.StorageTarget.MACHINE,
								),
								this.n.trace("[secrets] stored encrypted secret for key:", p);
						});
					}
					delete(h) {
						return this.c.queue(h, async () => {
							const c = await this.r,
								n = this.w(h);
							this.n.trace("[secrets] deleting secret for key:", n),
								c.remove(n, E.StorageScope.APPLICATION),
								this.n.trace("[secrets] deleted secret for key:", n);
						});
					}
					async s() {
						let h;
						if (!this.h && (await this.m.isEncryptionAvailable()))
							this.n.trace(
								"[SecretStorageService] Encryption is available, using persisted storage",
							),
								(this.f = "persisted"),
								(h = this.j);
						else {
							if (this.f === "in-memory") return this.j;
							this.n.trace(
								"[SecretStorageService] Encryption is not available, falling back to in-memory storage",
							),
								(this.f = "in-memory"),
								(h = this.D(new E.$pq()));
						}
						return (
							this.g.clear(),
							this.g.add(
								h.onDidChangeValue(
									E.StorageScope.APPLICATION,
									void 0,
									this.g,
								)((c) => {
									this.u(c.key);
								}),
							),
							h
						);
					}
					t() {
						this.q = new r.$Y(() => this.s());
					}
					u(h) {
						if (!h.startsWith(this.a)) return;
						const c = h.slice(this.a.length);
						this.n.trace(
							`[SecretStorageService] Notifying change in value for secret: ${c}`,
						),
							this.b.fire(c);
					}
					w(h) {
						return `${this.a}${h}`;
					}
				};
				(e.$Zrb = u),
					(e.$Zrb = u = Ne([j(1, E.$lq), j(2, i.$Urb), j(3, d.$ik)], u));
			},
		),
		define(
			de[2901],
			he([1, 0, 15, 3, 23, 19, 1174, 21, 1639, 129]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$J9c = void 0);
				class u extends d.$nq {
					constructor(h, c, n, g) {
						super(),
							(this.db = h),
							(this.eb = c),
							(this.fb = n),
							(this.gb = g),
							(this.s = this.eb.defaultProfile),
							(this.X = this.hb()),
							(this.Y = this.eb.currentProfile),
							(this.Z = this.D(new i.$Zc())),
							(this.$ = this.ib(this.Y)),
							(this.ab = this.db?.id),
							(this.bb = this.D(new i.$Zc())),
							(this.cb = this.jb(this.db));
					}
					hb() {
						const h = this.D(new m.$6wc(this.fb.getChannel("storage"))),
							c = this.D(new C.$hq(h));
						return (
							this.D(
								c.onDidChangeStorage((n) =>
									this.u(d.StorageScope.APPLICATION, n),
								),
							),
							c
						);
					}
					ib(h) {
						this.Z.clear(), (this.Y = h);
						let c;
						if ((0, d.$oq)(h)) c = this.X;
						else {
							const n = this.Z.add(
								new m.$7wc(this.fb.getChannel("storage"), h),
							);
							c = this.Z.add(new C.$hq(n));
						}
						return (
							this.Z.add(
								c.onDidChangeStorage((n) => this.u(d.StorageScope.PROFILE, n)),
							),
							c
						);
					}
					jb(h) {
						this.bb.clear(), (this.ab = h?.id);
						let c;
						if (h) {
							const n = this.bb.add(
								new m.$8wc(this.fb.getChannel("storage"), h),
							);
							(c = this.bb.add(new C.$hq(n))),
								this.bb.add(
									c.onDidChangeStorage((g) =>
										this.u(d.StorageScope.WORKSPACE, g),
									),
								);
						}
						return c;
					}
					async Q() {
						await t.Promises.settled([
							this.X.init(),
							this.$.init(),
							this.cb?.init() ?? Promise.resolve(),
						]);
					}
					R(h) {
						switch (h) {
							case d.StorageScope.APPLICATION:
								return this.X;
							case d.StorageScope.PROFILE:
								return this.$;
							default:
								return this.cb;
						}
					}
					S(h) {
						switch (h) {
							case d.StorageScope.APPLICATION:
								return this.s.globalStorageHome.with({ scheme: w.Schemas.file })
									.fsPath;
							case d.StorageScope.PROFILE:
								return this.Y?.globalStorageHome.with({
									scheme: w.Schemas.file,
								}).fsPath;
							default:
								return this.ab
									? `${(0, E.$nh)(this.gb.workspaceStorageHome, this.ab, "state.vscdb").with({ scheme: w.Schemas.file }).fsPath}`
									: void 0;
						}
					}
					async close() {
						this.t(), this.w(d.WillSaveStateReason.SHUTDOWN);
						for (const h of this.N)
							try {
								await h();
							} catch (c) {
								console.error(c);
							}
						await t.Promises.settled([
							this.X.close(),
							this.$.close(),
							this.cb?.close() ?? Promise.resolve(),
						]);
					}
					async U(h) {
						if (!this.O(this.Y, h)) return;
						const c = this.$,
							n = c.items;
						c !== this.X && (await c.close()),
							(this.$ = this.ib(h)),
							await this.$.init(),
							this.P(n, this.$, d.StorageScope.PROFILE);
					}
					async W(h, c) {
						const n = this.cb,
							g = n?.items ?? new Map();
						await n?.close(),
							(this.cb = this.jb(h)),
							await this.cb.init(),
							this.P(g, this.cb, d.StorageScope.WORKSPACE);
					}
					hasScope(h) {
						return (0, r.$Wl)(h) ? this.Y.id === h.id : this.ab === h.id;
					}
				}
				e.$J9c = u;
			},
		),
		define(
			de[308],
			he([1, 0, 20, 5, 3, 21, 2869, 136, 31, 58, 11]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6X = e.$5X = void 0);
				const a = "tooltipServicePipelines",
					h = "lastShownTooltipTime",
					c = 4 * 60 * 60 * 1e3,
					n = 14 * 24 * 60 * 60 * 1e3,
					g = 60 * 60 * 1e3,
					p = !1,
					o = !1,
					f = !1,
					b = !1,
					s = [];
				e.$5X = (0, i.$Mi)("tooltipService");
				let l = class extends w.$1c {
					constructor($, v) {
						super(),
							(this.q = $),
							(this.r = v),
							(this.h = new Map()),
							(this.j = !1),
							(this.n = 0),
							(this.c = C.$sV),
							this.y();
					}
					s() {
						const $ = { state: [] };
						this.c.forEach((v) => {
							$.state.push({
								name: v.name,
								disableStatus: void 0,
								createdAt: Date.now(),
							});
						}),
							(this.f = $),
							this.t();
					}
					t() {
						const $ = { sequences: [] };
						this.c.forEach((v) => {
							v.showOn.sequences.forEach((S) => {
								$.sequences.push({
									activeEventIndices: [],
									sequenceHash: this.z(S),
								});
							}),
								v.disableOn.sequences.forEach((S) => {
									$.sequences.push({
										activeEventIndices: [],
										sequenceHash: this.z(S),
									});
								});
						}),
							(this.g = $);
					}
					u($) {
						if (f) return;
						const v = this.q.get(a, E.StorageScope.APPLICATION);
						if (!v || v === "") {
							o && console.log("[Tooltip][Initializing Empty Pipeline State]"),
								this.s();
							return;
						}
						return JSON.parse(v).state.find((T) => T.name === $);
					}
					w($) {
						if (f) return this.f?.state.find((P) => P.name === $);
						if (this.f === void 0) return;
						const v = this.f.state.findIndex((P) => P.name === $);
						if (v === -1) return;
						const S = this.u($),
							I = S?.disableStatus?.disabledUntil,
							T = this.f.state[v].disableStatus?.disabledUntil;
						return S === void 0 || I === void 0
							? this.f.state[v]
							: T !== void 0 && T >= I
								? this.f.state[v]
								: ((this.f.state[v] = S), S);
					}
					y() {
						try {
							const $ = this.q.get(a, E.StorageScope.APPLICATION);
							if (f || !$ || $ === "") {
								o &&
									console.log("[Tooltip][Initializing Empty Pipeline State]"),
									this.s();
								return;
							}
							o && console.log("[Tooltip][Loading Pipeline State]");
							const v = JSON.parse($);
							o && console.log("[Tooltip][Current Pipelines State]", v);
							const S = { state: [] };
							for (let I of this.c) {
								const T = v.state.find((P) => P.name === I.name);
								T
									? S.state.push(T)
									: S.state.push({
											name: I.name,
											disableStatus: void 0,
											createdAt: Date.now(),
										});
							}
							this.f = S;
						} catch ($) {
							o && console.log("[Tooltip][Error Loading Pipeline State]", $),
								this.s();
						} finally {
							this.t(), (this.j = !0);
						}
					}
					z($) {
						const v = { ...$ };
						return (
							"debug" in v && delete v.debug, (0, d.$Aj)(JSON.stringify(v))
						);
					}
					C($) {
						const v = { ...$ };
						"debug" in v && delete v.debug;
						let S = this.h.get(v);
						return (
							S === void 0 && ((S = this.z($)), this.h.set($, S)),
							this.g.sequences.find((I) => I.sequenceHash === S)
						);
					}
					F($) {
						const v = this.C($);
						v && (v.activeEventIndices = []);
					}
					G() {
						f ||
							(o && console.log("[Tooltip][Saving Pipeline State]", this.f),
							this.q.store(
								a,
								JSON.stringify(this.f),
								E.StorageScope.APPLICATION,
								E.StorageTarget.MACHINE,
							),
							(this.m = Date.now()));
					}
					H() {
						(this.m && Date.now() - this.m < g) || this.G();
					}
					I($) {
						if (this.f === void 0) return;
						$.showOn.sequences.forEach((S) => this.F(S));
						const v = this.f.state.find((S) => S.name === $.name);
						v &&
							((v.disableStatus = {
								disabledUntil: Date.now() + $.showOn.gracePeriod_ms,
							}),
							this.r.executeCommand(r.$NV, {
								location: $.popup.location,
								header: $.popup.header,
								subheader: $.popup.subheader,
								name: $.name,
							}),
							console.log(`[Tooltip][Show Tooltip]
${$.popup.header}
---
${$.popup.subheader}`),
							p ||
								this.q.store(
									h,
									new Date().getTime().toString(),
									E.StorageScope.APPLICATION,
									E.StorageTarget.MACHINE,
								),
							f || this.G());
					}
					J($) {
						if (this.f === void 0) return;
						const v = this.c.find((T) => T.name === $);
						let S = this.f.state.find((T) => T.name === $);
						if (
							!v ||
							!S ||
							(o &&
								console.log(`[Tooltip][Disable Tooltip]
${v.name}`),
							(S = this.w($)),
							!S)
						)
							return;
						const I = Date.now() + v.disableOn.gracePeriod_ms;
						(S?.disableStatus !== void 0 &&
							S.disableStatus.disabledUntil > I) ||
							(v.showOn.sequences.forEach((T) => this.F(T)),
							v.disableOn.sequences.forEach((T) => this.F(T)),
							(S.disableStatus = { disabledUntil: I }),
							this.G());
					}
					L($, v) {
						if (typeof v == "string")
							return {
								isEventAccepted: $.startsWith(v),
								shouldAllowMultipleOfCurrentEvent: !1,
								isSkippingAllowed: !1,
							};
						if (v.length == 2 && v[0] === "*" && v[1] === "*")
							return {
								isEventAccepted: !0,
								shouldAllowMultipleOfCurrentEvent: !0,
								isSkippingAllowed: !1,
							};
						if (
							v.length === 3 &&
							v.filter((k) => k === "*").length === 2 &&
							v.filter((k) => k === "_").length === 1
						)
							return {
								isEventAccepted: !0,
								shouldAllowMultipleOfCurrentEvent: !0,
								isSkippingAllowed: !0,
							};
						if (v.length === 1 && v[0] === "*")
							return {
								isEventAccepted: !0,
								shouldAllowMultipleOfCurrentEvent: !1,
								isSkippingAllowed: !1,
							};
						if (
							v.length == 2 &&
							v.filter((k) => k === "*").length === 1 &&
							v.filter((k) => k === "_").length === 1
						)
							return {
								isEventAccepted: !0,
								shouldAllowMultipleOfCurrentEvent: !1,
								isSkippingAllowed: !0,
							};
						const S = v.includes("!"),
							I = v.includes("*"),
							T = v.includes("_");
						return {
							isEventAccepted: S
								? !v.some((k) => $.startsWith(k))
								: v.some((k) => $.startsWith(k)),
							shouldAllowMultipleOfCurrentEvent: I,
							isSkippingAllowed: T,
						};
					}
					M($, v, S, I, T) {
						const P = this.C(v);
						if (!P) return;
						P.activeEventIndices.length === 0 && P.activeEventIndices.push(0),
							P.startTime &&
								Date.now() - P.startTime > v.timeout_ms &&
								this.F(v);
						const k = P.activeEventIndices;
						let L = !1,
							D = !1,
							M = [],
							N = [];
						for (let A = 0; A < k.length; A++) {
							const R = k[A],
								O = v.events[R],
								{
									shouldAllowMultipleOfCurrentEvent: B,
									isEventAccepted: U,
									isSkippingAllowed: z,
								} = this.L(S, O);
							if (z) {
								if (R + 1 === v.events.length) {
									(D = !0), I();
									break;
								}
								k.includes(R + 1) || k.push(R + 1);
							}
							if (
								U &&
								((L = !0),
								P.startTime === void 0 &&
									((P.activeEventIndices.length === 1 &&
										P.activeEventIndices[0] === 0 &&
										!B) ||
										P.activeEventIndices.some((F) => F > 0)) &&
									(P.startTime = Date.now()),
								P.activeEventIndices.includes(R + 1) ||
									(s.includes($) &&
										v.debug &&
										console.log(
											`[Accepted Event ${S} as Event ${O}. Adding index ${R + 1}]`,
										),
									M.push(R + 1)),
								B || N.push(A),
								R + 1 === v.events.length)
							) {
								(D = !0), I();
								break;
							}
						}
						if (!D) {
							N.sort((A, R) => R - A);
							for (const A of N)
								P.activeEventIndices.splice(A, 1),
									s.includes($) &&
										v.debug &&
										console.log("[Finished Removing]", P.activeEventIndices);
							for (const A of M)
								P.activeEventIndices.includes(A) ||
									P.activeEventIndices.push(A),
									s.includes($) &&
										v.debug &&
										console.log("[Finished Adding]", P.activeEventIndices);
							L ||
								(s.includes($) &&
									v.debug &&
									console.log(`[Failed Sequence], ${JSON.stringify(v)}`),
								T());
						}
					}
					async N($) {
						if (!(!this.j || this.f === void 0)) {
							o && console.log("[Tooltip][Registering event]", $);
							for (const v of this.c) {
								let S = this.f.state.find((P) => P.name === v.name);
								if (S === void 0) continue;
								for (const P of v.disableOn.sequences)
									this.M(
										v.name,
										P,
										$,
										() => {
											this.J(v.name);
										},
										() => {
											this.F(P);
										},
									);
								if (S.disableStatus)
									if (S.disableStatus.disabledUntil < Date.now())
										(S.disableStatus = void 0),
											v.showOn.sequences.forEach((P) => this.F(P));
									else continue;
								const I = S.createdAt ? Date.now() - S.createdAt : 0,
									T = v.initialDisabledPeriod_ms ?? n;
								if (!b && I <= T) {
									o &&
										console.log(
											"[Tooltip][Initial Disable Period]",
											v.name,
											I,
											T,
										);
									continue;
								}
								for (const P of v.showOn.sequences)
									this.M(
										v.name,
										P,
										$,
										() => {
											if (
												((S = this.w(v.name)),
												S?.disableStatus !== void 0 &&
													S.disableStatus.disabledUntil > Date.now())
											)
												return;
											const k = Number(
													this.q.get(h, E.StorageScope.APPLICATION),
												),
												L = Date.now() - k;
											(p || L > c || isNaN(L) || isNaN(k)) && this.I(v);
										},
										() => {
											this.F(P);
										},
									);
							}
							f || this.H();
						}
					}
					async registerEvent($) {
						if (this.n > 1e3) {
							console.error(
								"Too many active promises from tooltipservice. Possible leak",
							);
							return;
						}
						Promise.resolve()
							.then(async () => {
								const v = new Promise((S, I) =>
									setTimeout(() => I(new Error("Timeout")), 1),
								);
								this.n++,
									Promise.race([
										v,
										new Promise((S) => {
											this.N($).then(() => {
												S(!0);
											});
										}),
									])
										.then(() => {
											this.n--;
										})
										.catch((S) => {
											console.error(S), this.n--;
										});
							})
							.catch((v) => {
								console.error("tooltipservice timeout!");
							});
					}
					async registerUserCloseTooltip($) {
						if (this.f === void 0) return;
						const v = this.f.state.find((S) => S.name === $);
						v !== void 0 &&
							((v.disableStatus = {
								disabledUntil: Date.now() + 10 * 365 * 24 * 60 * 60 * 1e3,
							}),
							this.G());
					}
				};
				(e.$6X = l),
					(e.$6X = l = Ne([j(0, E.$lq), j(1, m.$ek)], l)),
					(0, t.$lK)(e.$5X, l, t.InstantiationType.Delayed),
					(0, u.$4X)(
						class extends u.$3X {
							constructor() {
								super({
									id: r.$OV,
									title: "Register Close Tooltip",
									category: "Tooltip",
									f1: !1,
								});
							}
							run(y, $) {
								const { tooltipName: v } = $;
								y.get(e.$5X).registerUserCloseTooltip(v);
							}
						},
					);
			},
		),
		define(
			de[122],
			he([
				1, 0, 24, 97, 29, 6, 3, 408, 37, 210, 9, 531, 1146, 48, 17, 104, 910,
				61, 152, 64, 2693, 2854, 780, 1543, 2566, 946, 1194, 1195, 543, 2772,
				1176, 590, 5, 155, 193, 308,
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
			) {
				"use strict";
				var O;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$fY = e.$eY = e.$dY = e.$cY = e.$bY = e.$aY = e.$$X = void 0),
					(e.$7X = B),
					(e.$8X = U),
					(e.$9X = z),
					(e.$0X = F),
					(e.$_X = W),
					(m = mt(m)),
					(b = mt(b));
				function B(ye) {
					const ue = new T.$0U();
					return ue.acceptChunk(ye), ue.finish();
				}
				function U(ye) {
					return new Promise((ue, fe) => {
						const me = new T.$0U();
						let ve = !1;
						(0, d.$Le)(ye, {
							onData: (ge) => {
								me.acceptChunk(typeof ge == "string" ? ge : ge.toString());
							},
							onError: (ge) => {
								ve || ((ve = !0), fe(ge));
							},
							onEnd: () => {
								ve || ((ve = !0), ue(me.finish()));
							},
						});
					});
				}
				function z(ye) {
					const ue = new T.$0U();
					let fe;
					for (; typeof (fe = ye.read()) == "string"; ) ue.acceptChunk(fe);
					return ue.finish();
				}
				function F(ye, ue) {
					let fe;
					return (
						typeof ye == "string"
							? (fe = B(ye))
							: b.$NN(ye)
								? (fe = z(ye))
								: (fe = ye),
						fe.create(ue)
					);
				}
				let x = 0;
				const H = 999,
					q = 1e4;
				class V {
					constructor(ue) {
						(this.a = ue), (this.b = !1);
					}
					read() {
						if (this.b) return null;
						const ue = [];
						let fe = 0,
							me = 0;
						do {
							const ve = this.a.read();
							if (ve === null)
								return (this.b = !0), fe === 0 ? null : ue.join("");
							if (
								(ve.length > 0 && ((ue[fe++] = ve), (me += ve.length)),
								me >= 64 * 1024)
							)
								return ue.join("");
						} while (!0);
					}
				}
				const G = () => {
					throw new Error("Invalid change accessor");
				};
				var K;
				(function (ye) {
					(ye[(ye.Relaxed = 0)] = "Relaxed"),
						(ye[(ye.SurrogatePairs = 1)] = "SurrogatePairs");
				})(K || (K = {}));
				let J = class extends C.$1c {
					static {
						O = this;
					}
					static {
						this._MODEL_SYNC_LIMIT = 50 * 1024 * 1024;
					}
					static {
						this.a = 20 * 1024 * 1024;
					}
					static {
						this.b = 300 * 1e3;
					}
					static {
						this.f = 256 * 1024 * 1024;
					}
					static {
						this.DEFAULT_CREATION_OPTIONS = {
							isForSimpleWidget: !1,
							tabSize: p.$RK.tabSize,
							indentSize: p.$RK.indentSize,
							insertSpaces: p.$RK.insertSpaces,
							detectIndentation: !1,
							defaultEOL: b.DefaultEndOfLine.LF,
							trimAutoWhitespace: p.$RK.trimAutoWhitespace,
							largeFileOptimizations: p.$RK.largeFileOptimizations,
							bracketPairColorizationOptions:
								p.$RK.bracketPairColorizationOptions,
						};
					}
					static resolveOptions(ue, fe) {
						if (fe.detectIndentation) {
							const me = (0, v.$EU)(ue, fe.tabSize, fe.insertSpaces);
							return new b.$LN({
								tabSize: me.tabSize,
								indentSize: "tabSize",
								insertSpaces: me.insertSpaces,
								trimAutoWhitespace: fe.trimAutoWhitespace,
								defaultEOL: fe.defaultEOL,
								bracketPairColorizationOptions:
									fe.bracketPairColorizationOptions,
							});
						}
						return new b.$LN(fe);
					}
					get onDidChangeLanguage() {
						return this.bb.onDidChangeLanguage;
					}
					get onDidChangeLanguageConfiguration() {
						return this.bb.onDidChangeLanguageConfiguration;
					}
					get onDidChangeTokens() {
						return this.bb.onDidChangeTokens;
					}
					onDidChangeContent(ue) {
						return this.u.slowEvent((fe) => ue(fe.contentChangedEvent));
					}
					onDidChangeContentOrInjectedText(ue) {
						return (0, C.$Xc)(
							this.u.fastEvent((fe) => ue(fe)),
							this.s.event((fe) => ue(fe)),
						);
					}
					_isDisposing() {
						return this.I;
					}
					get tokenization() {
						return this.bb;
					}
					get bracketPairs() {
						return this.cb;
					}
					get guides() {
						return this.db;
					}
					constructor(ue, fe, me, ve = null, ge, be, Ce, Le, Fe) {
						super(),
							(this.fb = ge),
							(this.gb = be),
							(this.hb = Ce),
							(this.ib = Le),
							(this.jb = Fe),
							(this.g = this.D(new E.$re())),
							(this.onWillDispose = this.g.event),
							(this.h = this.D(new ae((Te) => this.Bb(Te)))),
							(this.onDidChangeDecorations = this.h.event),
							(this.n = this.D(new E.$re())),
							(this.onDidChangeOptions = this.n.event),
							(this.q = this.D(new E.$re())),
							(this.onDidChangeAttached = this.q.event),
							(this.s = this.D(new E.$re())),
							(this.u = this.D(new pe())),
							(this.G = this.D(new C.$2c())),
							(this.X = 0),
							(this.eb = new L.$jV()),
							x++,
							(this.id = "$model" + x),
							(this.isForSimpleWidget = me.isForSimpleWidget),
							typeof ve > "u" || ve === null
								? (this.w = u.URI.parse("inmemory://model/" + x))
								: (this.w = ve),
							(this.y = 0);
						const { textBuffer: Oe, disposable: xe } = F(ue, me.defaultEOL);
						(this.z = Oe),
							(this.C = xe),
							(this.F = O.resolveOptions(this.z, me));
						const He = typeof fe == "string" ? fe : fe.languageId;
						typeof fe != "string" &&
							(this.G.value = fe.onDidChange(() => this.Ib(fe.languageId))),
							(this.cb = this.D(new s.$9O(this, this.hb))),
							(this.db = this.D(new $.$CU(this, this.hb))),
							(this.ab = this.D(new l.$uU(this))),
							(this.bb = this.jb.createInstance(
								k.$rV,
								this,
								this.cb,
								He,
								this.eb,
							));
						const Ke = this.z.getLineCount(),
							Je = this.z.getValueLengthInRange(
								new n.$iL(1, 1, Ke, this.z.getLineLength(Ke) + 1),
								b.EndOfLinePreference.TextDefined,
							);
						me.largeFileOptimizations
							? ((this.O = Je > O.a || Ke > O.b), (this.P = Je > O.f))
							: ((this.O = !1), (this.P = !1)),
							(this.N = Je > O._MODEL_SYNC_LIMIT),
							(this.J = 1),
							(this.L = 1),
							(this.M = null),
							(this.H = !1),
							(this.I = !1),
							(this.W = m.$fg(x)),
							(this.Y = 0),
							(this.Z = Object.create(null)),
							(this.$ = new ne()),
							(this.Q = new y.$zU(this, this.fb)),
							(this.R = !1),
							(this.S = !1),
							(this.U = null),
							this.D(
								this.ab.onDidChange(() => {
									this.h.beginDeferredEmit(),
										this.h.fire(),
										this.h.endDeferredEmit();
								}),
							),
							this.gb.requestRichLanguageFeatures(He),
							this.D(
								this.hb.onDidChange((Te) => {
									this.cb.handleLanguageConfigurationServiceChange(Te),
										this.bb.handleLanguageConfigurationServiceChange(Te);
								}),
							),
							(this.reactiveStorageReducers = new $e(this)),
							([
								this.nonPersistentReactiveStorage,
								this.setNonPersistentReactiveStorage,
							] = this.kb());
					}
					kb() {
						return (0, A.createStore)(b.$ON(), void 0);
					}
					dispose() {
						(this.I = !0),
							this.g.fire(),
							this.bb.dispose(),
							(this.H = !0),
							super.dispose(),
							this.C.dispose(),
							(this.I = !1);
						const ue = new I.$9U(
							[],
							"",
							`
`,
							!1,
							!1,
							!0,
							!0,
						);
						ue.dispose(), (this.z = ue), (this.C = C.$1c.None);
					}
					_hasListeners() {
						return (
							this.g.hasListeners() ||
							this.h.hasListeners() ||
							this.bb._hasListeners() ||
							this.n.hasListeners() ||
							this.q.hasListeners() ||
							this.s.hasListeners() ||
							this.u.hasListeners()
						);
					}
					lb() {
						if (this.H) throw new w.$gb("Model is disposed!");
					}
					equalsTextBuffer(ue) {
						return this.lb(), this.z.equals(ue);
					}
					getTextBuffer() {
						return this.lb(), this.z;
					}
					mb(ue, fe) {
						this.I ||
							(this.bb.handleDidChangeContent(fe),
							this.cb.handleDidChangeContent(fe),
							this.u.fire(new D.$BN(ue, fe)));
					}
					setValue(ue) {
						if ((this.lb(), ue == null)) throw (0, w.$$)();
						const { textBuffer: fe, disposable: me } = F(ue, this.F.defaultEOL);
						this.ob(fe, me);
					}
					nb(ue, fe, me, ve, ge, be, Ce, Le) {
						return {
							changes: [
								{ range: ue, rangeOffset: fe, rangeLength: me, text: ve },
							],
							eol: this.z.getEOL(),
							isEolChange: Le,
							versionId: this.getVersionId(),
							isUndoing: ge,
							isRedoing: be,
							isFlush: Ce,
						};
					}
					ob(ue, fe) {
						this.lb();
						const me = this.getFullModelRange(),
							ve = this.getValueLengthInRange(me),
							ge = this.getLineCount(),
							be = this.getLineMaxColumn(ge);
						(this.z = ue),
							this.C.dispose(),
							(this.C = fe),
							this.rb(),
							(this.Z = Object.create(null)),
							(this.$ = new ne()),
							this.Q.clear(),
							(this.U = null),
							this.mb(
								new D.$zN([new D.$tN()], this.J, !1, !1),
								this.nb(
									new n.$iL(1, 1, ge, be),
									0,
									ve,
									this.getValue(),
									!1,
									!1,
									!0,
									!1,
								),
							);
					}
					setEOL(ue) {
						this.lb();
						const fe =
							ue === b.EndOfLineSequence.CRLF
								? `\r
`
								: `
`;
						if (this.z.getEOL() === fe) return;
						const me = this.getFullModelRange(),
							ve = this.getValueLengthInRange(me),
							ge = this.getLineCount(),
							be = this.getLineMaxColumn(ge);
						this.pb(),
							this.z.setEOL(fe),
							this.rb(),
							this.qb(),
							this.mb(
								new D.$zN([new D.$yN()], this.J, !1, !1),
								this.nb(
									new n.$iL(1, 1, ge, be),
									0,
									ve,
									this.getValue(),
									!1,
									!1,
									!1,
									!0,
								),
							);
					}
					pb() {
						this.$.ensureAllNodesHaveRanges(this);
					}
					qb() {
						const ue = this.getVersionId(),
							fe = this.$.collectNodesPostOrder();
						for (let me = 0, ve = fe.length; me < ve; me++) {
							const ge = fe[me],
								be = ge.range,
								Ce = ge.cachedAbsoluteStart - ge.start,
								Le = this.z.getOffsetAt(be.startLineNumber, be.startColumn),
								Fe = this.z.getOffsetAt(be.endLineNumber, be.endColumn);
							(ge.cachedAbsoluteStart = Le),
								(ge.cachedAbsoluteEnd = Fe),
								(ge.cachedVersionId = ue),
								(ge.start = Le - Ce),
								(ge.end = Fe - Ce),
								(0, S.$LU)(ge);
						}
					}
					onBeforeAttached() {
						return (
							this.y++,
							this.y === 1 &&
								(this.bb.handleDidChangeAttached(), this.q.fire(void 0)),
							this.eb.attachView()
						);
					}
					onBeforeDetached(ue) {
						this.y--,
							this.y === 0 &&
								(this.bb.handleDidChangeAttached(), this.q.fire(void 0)),
							this.eb.detachView(ue);
					}
					isAttachedToEditor() {
						return this.y > 0;
					}
					getAttachedEditorCount() {
						return this.y;
					}
					isTooLargeForSyncing() {
						return this.N;
					}
					isTooLargeForTokenization() {
						return this.O;
					}
					isTooLargeForHeapOperation() {
						return this.P;
					}
					isDisposed() {
						return this.H;
					}
					isDominatedByLongLines() {
						if ((this.lb(), this.isTooLargeForTokenization())) return !1;
						let ue = 0,
							fe = 0;
						const me = this.z.getLineCount();
						for (let ve = 1; ve <= me; ve++) {
							const ge = this.z.getLineLength(ve);
							ge >= q ? (fe += ge) : (ue += ge);
						}
						return fe > ue;
					}
					get uri() {
						return this.w;
					}
					getOptions() {
						return this.lb(), this.F;
					}
					getFormattingOptions() {
						return {
							tabSize: this.F.indentSize,
							insertSpaces: this.F.insertSpaces,
						};
					}
					updateOptions(ue) {
						this.lb();
						const fe = typeof ue.tabSize < "u" ? ue.tabSize : this.F.tabSize,
							me =
								typeof ue.indentSize < "u"
									? ue.indentSize
									: this.F.originalIndentSize,
							ve =
								typeof ue.insertSpaces < "u"
									? ue.insertSpaces
									: this.F.insertSpaces,
							ge =
								typeof ue.trimAutoWhitespace < "u"
									? ue.trimAutoWhitespace
									: this.F.trimAutoWhitespace,
							be =
								typeof ue.bracketColorizationOptions < "u"
									? ue.bracketColorizationOptions
									: this.F.bracketPairColorizationOptions,
							Ce = new b.$LN({
								tabSize: fe,
								indentSize: me,
								insertSpaces: ve,
								defaultEOL: this.F.defaultEOL,
								trimAutoWhitespace: ge,
								bracketPairColorizationOptions: be,
							});
						if (this.F.equals(Ce)) return;
						const Le = this.F.createChangeEvent(Ce);
						(this.F = Ce),
							this.cb.handleDidChangeOptions(Le),
							this.ab.handleDidChangeOptions(Le),
							this.n.fire(Le);
					}
					detectIndentation(ue, fe) {
						this.lb();
						const me = (0, v.$EU)(this.z, fe, ue);
						this.updateOptions({
							insertSpaces: me.insertSpaces,
							tabSize: me.tabSize,
							indentSize: me.tabSize,
						});
					}
					normalizeIndentation(ue) {
						return (
							this.lb(), (0, h.$ZO)(ue, this.F.indentSize, this.F.insertSpaces)
						);
					}
					getVersionId() {
						return this.lb(), this.J;
					}
					mightContainRTL() {
						return this.z.mightContainRTL();
					}
					mightContainUnusualLineTerminators() {
						return this.z.mightContainUnusualLineTerminators();
					}
					removeUnusualLineTerminators(ue = null) {
						const fe = this.findMatches(
							m.$3f.source,
							!1,
							!0,
							!1,
							null,
							!1,
							r.Constants.MAX_SAFE_SMALL_INTEGER,
						);
						this.z.resetMightContainUnusualLineTerminators(),
							this.pushEditOperations(
								ue,
								fe.map((me) => ({ range: me.range, text: null })),
								() => null,
							);
					}
					mightContainNonBasicASCII() {
						return this.z.mightContainNonBasicASCII();
					}
					getAlternativeVersionId() {
						return this.lb(), this.L;
					}
					getInitialUndoRedoSnapshot() {
						return this.lb(), this.M;
					}
					getOffsetAt(ue) {
						this.lb();
						const fe = this.tb(ue.lineNumber, ue.column, K.Relaxed);
						return this.z.getOffsetAt(fe.lineNumber, fe.column);
					}
					getPositionAt(ue) {
						this.lb();
						const fe = Math.min(this.z.getLength(), Math.max(0, ue));
						return this.z.getPositionAt(fe);
					}
					rb() {
						(this.J = this.J + 1), (this.L = this.J);
					}
					_overwriteVersionId(ue) {
						this.J = ue;
					}
					_overwriteAlternativeVersionId(ue) {
						this.L = ue;
					}
					_overwriteInitialUndoRedoSnapshot(ue) {
						this.M = ue;
					}
					getValue(ue, fe = !1) {
						if ((this.lb(), this.isTooLargeForHeapOperation()))
							throw new w.$gb("Operation would exceed heap memory limits");
						const me = this.getFullModelRange(),
							ve = this.getValueInRange(me, ue);
						return fe ? this.z.getBOM() + ve : ve;
					}
					createSnapshot(ue = !1) {
						return new V(this.z.createSnapshot(ue));
					}
					getValueLength(ue, fe = !1) {
						this.lb();
						const me = this.getFullModelRange(),
							ve = this.getValueLengthInRange(me, ue);
						return fe ? this.z.getBOM().length + ve : ve;
					}
					getValueInRange(ue, fe = b.EndOfLinePreference.TextDefined) {
						return (
							this.lb(), this.z.getValueInRange(this.validateRange(ue), fe)
						);
					}
					getValueLengthInRange(ue, fe = b.EndOfLinePreference.TextDefined) {
						return (
							this.lb(),
							this.z.getValueLengthInRange(this.validateRange(ue), fe)
						);
					}
					getCharacterCountInRange(ue, fe = b.EndOfLinePreference.TextDefined) {
						return (
							this.lb(),
							this.z.getCharacterCountInRange(this.validateRange(ue), fe)
						);
					}
					getLineCount() {
						return this.lb(), this.z.getLineCount();
					}
					getLineContent(ue) {
						if ((this.lb(), ue < 1 || ue > this.getLineCount()))
							throw new w.$gb("Illegal value for lineNumber");
						return this.z.getLineContent(ue);
					}
					getLineLength(ue) {
						if ((this.lb(), ue < 1 || ue > this.getLineCount()))
							throw new w.$gb("Illegal value for lineNumber");
						return this.z.getLineLength(ue);
					}
					getLinesContent() {
						if ((this.lb(), this.isTooLargeForHeapOperation()))
							throw new w.$gb("Operation would exceed heap memory limits");
						return this.z.getLinesContent();
					}
					getEOL() {
						return this.lb(), this.z.getEOL();
					}
					getEndOfLineSequence() {
						return (
							this.lb(),
							this.z.getEOL() ===
							`
`
								? b.EndOfLineSequence.LF
								: b.EndOfLineSequence.CRLF
						);
					}
					getLineMinColumn(ue) {
						return this.lb(), 1;
					}
					getLineMaxColumn(ue) {
						if ((this.lb(), ue < 1 || ue > this.getLineCount()))
							throw new w.$gb("Illegal value for lineNumber");
						return this.z.getLineLength(ue) + 1;
					}
					getLineFirstNonWhitespaceColumn(ue) {
						if ((this.lb(), ue < 1 || ue > this.getLineCount()))
							throw new w.$gb("Illegal value for lineNumber");
						return this.z.getLineFirstNonWhitespaceColumn(ue);
					}
					getLineLastNonWhitespaceColumn(ue) {
						if ((this.lb(), ue < 1 || ue > this.getLineCount()))
							throw new w.$gb("Illegal value for lineNumber");
						return this.z.getLineLastNonWhitespaceColumn(ue);
					}
					_validateRangeRelaxedNoAllocations(ue) {
						const fe = this.z.getLineCount(),
							me = ue.startLineNumber,
							ve = ue.startColumn;
						let ge = Math.floor(typeof me == "number" && !isNaN(me) ? me : 1),
							be = Math.floor(typeof ve == "number" && !isNaN(ve) ? ve : 1);
						if (ge < 1) (ge = 1), (be = 1);
						else if (ge > fe) (ge = fe), (be = this.getLineMaxColumn(ge));
						else if (be <= 1) be = 1;
						else {
							const xe = this.getLineMaxColumn(ge);
							be >= xe && (be = xe);
						}
						const Ce = ue.endLineNumber,
							Le = ue.endColumn;
						let Fe = Math.floor(typeof Ce == "number" && !isNaN(Ce) ? Ce : 1),
							Oe = Math.floor(typeof Le == "number" && !isNaN(Le) ? Le : 1);
						if (Fe < 1) (Fe = 1), (Oe = 1);
						else if (Fe > fe) (Fe = fe), (Oe = this.getLineMaxColumn(Fe));
						else if (Oe <= 1) Oe = 1;
						else {
							const xe = this.getLineMaxColumn(Fe);
							Oe >= xe && (Oe = xe);
						}
						return me === ge &&
							ve === be &&
							Ce === Fe &&
							Le === Oe &&
							ue instanceof n.$iL &&
							!(ue instanceof g.$kL)
							? ue
							: new n.$iL(ge, be, Fe, Oe);
					}
					sb(ue, fe, me) {
						if (
							typeof ue != "number" ||
							typeof fe != "number" ||
							isNaN(ue) ||
							isNaN(fe) ||
							ue < 1 ||
							fe < 1 ||
							(ue | 0) !== ue ||
							(fe | 0) !== fe
						)
							return !1;
						const ve = this.z.getLineCount();
						if (ue > ve) return !1;
						if (fe === 1) return !0;
						const ge = this.getLineMaxColumn(ue);
						if (fe > ge) return !1;
						if (me === K.SurrogatePairs) {
							const be = this.z.getLineCharCode(ue, fe - 2);
							if (m.$Qf(be)) return !1;
						}
						return !0;
					}
					tb(ue, fe, me) {
						const ve = Math.floor(typeof ue == "number" && !isNaN(ue) ? ue : 1),
							ge = Math.floor(typeof fe == "number" && !isNaN(fe) ? fe : 1),
							be = this.z.getLineCount();
						if (ve < 1) return new c.$hL(1, 1);
						if (ve > be) return new c.$hL(be, this.getLineMaxColumn(be));
						if (ge <= 1) return new c.$hL(ve, 1);
						const Ce = this.getLineMaxColumn(ve);
						if (ge >= Ce) return new c.$hL(ve, Ce);
						if (me === K.SurrogatePairs) {
							const Le = this.z.getLineCharCode(ve, ge - 2);
							if (m.$Qf(Le)) return new c.$hL(ve, ge - 1);
						}
						return new c.$hL(ve, ge);
					}
					validatePosition(ue) {
						const fe = K.SurrogatePairs;
						return (
							this.lb(),
							ue instanceof c.$hL && this.sb(ue.lineNumber, ue.column, fe)
								? ue
								: this.tb(ue.lineNumber, ue.column, fe)
						);
					}
					ub(ue, fe) {
						const me = ue.startLineNumber,
							ve = ue.startColumn,
							ge = ue.endLineNumber,
							be = ue.endColumn;
						if (!this.sb(me, ve, K.Relaxed) || !this.sb(ge, be, K.Relaxed))
							return !1;
						if (fe === K.SurrogatePairs) {
							const Ce = ve > 1 ? this.z.getLineCharCode(me, ve - 2) : 0,
								Le =
									be > 1 && be <= this.z.getLineLength(ge)
										? this.z.getLineCharCode(ge, be - 2)
										: 0,
								Fe = m.$Qf(Ce),
								Oe = m.$Qf(Le);
							return !Fe && !Oe;
						}
						return !0;
					}
					validateRange(ue) {
						const fe = K.SurrogatePairs;
						if (
							(this.lb(),
							ue instanceof n.$iL && !(ue instanceof g.$kL) && this.ub(ue, fe))
						)
							return ue;
						const me = this.tb(ue.startLineNumber, ue.startColumn, K.Relaxed),
							ve = this.tb(ue.endLineNumber, ue.endColumn, K.Relaxed),
							ge = me.lineNumber,
							be = me.column,
							Ce = ve.lineNumber,
							Le = ve.column;
						if (fe === K.SurrogatePairs) {
							const Fe = be > 1 ? this.z.getLineCharCode(ge, be - 2) : 0,
								Oe =
									Le > 1 && Le <= this.z.getLineLength(Ce)
										? this.z.getLineCharCode(Ce, Le - 2)
										: 0,
								xe = m.$Qf(Fe),
								He = m.$Qf(Oe);
							return !xe && !He
								? new n.$iL(ge, be, Ce, Le)
								: ge === Ce && be === Le
									? new n.$iL(ge, be - 1, Ce, Le - 1)
									: xe && He
										? new n.$iL(ge, be - 1, Ce, Le + 1)
										: xe
											? new n.$iL(ge, be - 1, Ce, Le)
											: new n.$iL(ge, be, Ce, Le + 1);
						}
						return new n.$iL(ge, be, Ce, Le);
					}
					modifyPosition(ue, fe) {
						this.lb();
						const me = this.getOffsetAt(ue) + fe;
						return this.getPositionAt(
							Math.min(this.z.getLength(), Math.max(0, me)),
						);
					}
					getFullModelRange() {
						this.lb();
						const ue = this.getLineCount();
						return new n.$iL(1, 1, ue, this.getLineMaxColumn(ue));
					}
					vb(ue, fe, me, ve) {
						return this.z.findMatchesLineByLine(ue, fe, me, ve);
					}
					findMatches(ue, fe, me, ve, ge, be, Ce = H) {
						this.lb();
						let Le = null;
						fe !== null &&
							(Array.isArray(fe) || (fe = [fe]),
							fe.every((xe) => n.$iL.isIRange(xe)) &&
								(Le = fe.map((xe) => this.validateRange(xe)))),
							Le === null && (Le = [this.getFullModelRange()]),
							(Le = Le.sort(
								(xe, He) =>
									xe.startLineNumber - He.startLineNumber ||
									xe.startColumn - He.startColumn,
							));
						const Fe = [];
						Fe.push(
							Le.reduce((xe, He) =>
								n.$iL.areIntersecting(xe, He)
									? xe.plusRange(He)
									: (Fe.push(xe), He),
							),
						);
						let Oe;
						if (
							!me &&
							ue.indexOf(`
`) < 0
						) {
							const He = new P.$XU(ue, me, ve, ge).parseSearchRequest();
							if (!He) return [];
							Oe = (Ke) => this.vb(Ke, He, be, Ce);
						} else
							Oe = (xe) =>
								P.$1U.findMatches(this, new P.$XU(ue, me, ve, ge), xe, be, Ce);
						return Fe.map(Oe).reduce((xe, He) => xe.concat(He), []);
					}
					findNextMatch(ue, fe, me, ve, ge, be) {
						this.lb();
						const Ce = this.validatePosition(fe);
						if (
							!me &&
							ue.indexOf(`
`) < 0
						) {
							const Fe = new P.$XU(ue, me, ve, ge).parseSearchRequest();
							if (!Fe) return null;
							const Oe = this.getLineCount();
							let xe = new n.$iL(
									Ce.lineNumber,
									Ce.column,
									Oe,
									this.getLineMaxColumn(Oe),
								),
								He = this.vb(xe, Fe, be, 1);
							return (
								P.$1U.findNextMatch(this, new P.$XU(ue, me, ve, ge), Ce, be),
								He.length > 0 ||
								((xe = new n.$iL(
									1,
									1,
									Ce.lineNumber,
									this.getLineMaxColumn(Ce.lineNumber),
								)),
								(He = this.vb(xe, Fe, be, 1)),
								He.length > 0)
									? He[0]
									: null
							);
						}
						return P.$1U.findNextMatch(this, new P.$XU(ue, me, ve, ge), Ce, be);
					}
					findPreviousMatch(ue, fe, me, ve, ge, be) {
						this.lb();
						const Ce = this.validatePosition(fe);
						return P.$1U.findPreviousMatch(
							this,
							new P.$XU(ue, me, ve, ge),
							Ce,
							be,
						);
					}
					pushStackElement() {
						this.Q.pushStackElement();
					}
					popStackElement() {
						this.Q.popStackElement();
					}
					pushEOL(ue) {
						if (
							(this.getEOL() ===
							`
`
								? b.EndOfLineSequence.LF
								: b.EndOfLineSequence.CRLF) !== ue
						)
							try {
								this.h.beginDeferredEmit(),
									this.u.beginDeferredEmit(),
									this.M === null &&
										(this.M = this.fb.createSnapshot(this.uri)),
									this.Q.pushEOL(ue);
							} finally {
								this.u.endDeferredEmit(), this.h.endDeferredEmit();
							}
					}
					wb(ue) {
						return ue instanceof b.$QN
							? ue
							: new b.$QN(
									ue.identifier || null,
									this.validateRange(ue.range),
									ue.text,
									ue.forceMoveMarkers || !1,
									ue.isAutoWhitespaceEdit || !1,
									ue._isTracked || !1,
								);
					}
					xb(ue) {
						const fe = [];
						for (let me = 0, ve = ue.length; me < ve; me++)
							fe[me] = this.wb(ue[me]);
						return fe;
					}
					pushEditOperations(ue, fe, me, ve, ge) {
						try {
							return (
								this.h.beginDeferredEmit(),
								this.u.beginDeferredEmit(),
								this.yb(ue, this.xb(fe), me, ve, ge)
							);
						} finally {
							this.u.endDeferredEmit(), this.h.endDeferredEmit();
						}
					}
					yb(ue, fe, me, ve, ge) {
						if (
							(this.ib.registerEvent("editor.type.push_edit_operation"),
							this.F.trimAutoWhitespace && this.U)
						) {
							const be = fe.map((Le) => ({
								range: this.validateRange(Le.range),
								text: Le.text,
							}));
							let Ce = !0;
							if (ue)
								for (let Le = 0, Fe = ue.length; Le < Fe; Le++) {
									const Oe = ue[Le];
									let xe = !1;
									for (let He = 0, Ke = be.length; He < Ke; He++) {
										const Je = be[He].range,
											Te = Je.startLineNumber > Oe.endLineNumber,
											Ee = Oe.startLineNumber > Je.endLineNumber;
										if (!Te && !Ee) {
											xe = !0;
											break;
										}
									}
									if (!xe) {
										Ce = !1;
										break;
									}
								}
							if (Ce)
								for (let Le = 0, Fe = this.U.length; Le < Fe; Le++) {
									const Oe = this.U[Le],
										xe = this.getLineMaxColumn(Oe);
									let He = !0;
									for (let Ke = 0, Je = be.length; Ke < Je; Ke++) {
										const Te = be[Ke].range,
											Ee = be[Ke].text;
										if (
											!(Oe < Te.startLineNumber || Oe > Te.endLineNumber) &&
											!(
												Oe === Te.startLineNumber &&
												Te.startColumn === xe &&
												Te.isEmpty() &&
												Ee &&
												Ee.length > 0 &&
												Ee.charAt(0) ===
													`
`
											) &&
											!(
												Oe === Te.startLineNumber &&
												Te.startColumn === 1 &&
												Te.isEmpty() &&
												Ee &&
												Ee.length > 0 &&
												Ee.charAt(Ee.length - 1) ===
													`
`
											)
										) {
											He = !1;
											break;
										}
									}
									if (He) {
										const Ke = new n.$iL(Oe, 1, Oe, xe);
										fe.push(new b.$QN(null, Ke, null, !1, !1, !1));
									}
								}
							this.U = null;
						}
						return (
							this.M === null && (this.M = this.fb.createSnapshot(this.uri)),
							this.Q.pushEditOperation(ue, fe, me, ve, ge)
						);
					}
					_applyUndo(ue, fe, me, ve) {
						this.ib.registerEvent("editor.type.undo");
						const ge = ue.map((be) => {
							const Ce = this.getPositionAt(be.newPosition),
								Le = this.getPositionAt(be.newEnd);
							return {
								range: new n.$iL(
									Ce.lineNumber,
									Ce.column,
									Le.lineNumber,
									Le.column,
								),
								text: be.oldText,
							};
						});
						this.zb(ge, fe, !0, !1, me, ve);
					}
					_applyRedo(ue, fe, me, ve) {
						this.ib.registerEvent("editor.type.redo");
						const ge = ue.map((be) => {
							const Ce = this.getPositionAt(be.oldPosition),
								Le = this.getPositionAt(be.oldEnd);
							return {
								range: new n.$iL(
									Ce.lineNumber,
									Ce.column,
									Le.lineNumber,
									Le.column,
								),
								text: be.newText,
							};
						});
						this.zb(ge, fe, !1, !0, me, ve);
					}
					zb(ue, fe, me, ve, ge, be) {
						try {
							this.h.beginDeferredEmit(),
								this.u.beginDeferredEmit(),
								(this.R = me),
								(this.S = ve),
								this.applyEdits(ue, !1),
								this.setEOL(fe),
								this._overwriteAlternativeVersionId(ge);
						} finally {
							(this.R = !1),
								(this.S = !1),
								this.u.endDeferredEmit(be),
								this.h.endDeferredEmit();
						}
					}
					applyEdits(ue, fe = !1, me = !1) {
						try {
							this.h.beginDeferredEmit(), this.u.beginDeferredEmit();
							const ve = this.xb(ue),
								ge = this.Ab(ve, fe);
							if (me)
								for (const be of ve)
									this.fb.rebaseStack(
										this.uri,
										this.z.getOffsetAt(
											be.range.startLineNumber,
											be.range.startColumn,
										),
										this.z.getOffsetAt(
											be.range.endLineNumber,
											be.range.endColumn,
										),
										be.text?.length ?? 0,
										be.range.endLineNumber,
										be.range.endColumn,
										(be.text?.split(this.getEOL()).length ?? 1) -
											Math.max(
												1,
												be.range.endLineNumber - be.range.startLineNumber,
											),
										be.text?.split(this.getEOL())[
											be.text.split(this.getEOL()).length - 1
										].length ??
											0 -
												be.range.endColumn +
												(be.range.startLineNumber === be.range.endLineNumber
													? be.range.startColumn
													: 0),
									);
							return ge;
						} finally {
							this.u.endDeferredEmit(), this.h.endDeferredEmit();
						}
					}
					Ab(ue, fe) {
						const me = this.z.getLineCount(),
							ve = this.z.applyEdits(ue, this.F.trimAutoWhitespace, fe),
							ge = this.z.getLineCount(),
							be = ve.changes;
						if (
							((this.U = ve.trimAutoWhitespaceLineNumbers), be.length !== 0)
						) {
							for (let Fe = 0, Oe = be.length; Fe < Oe; Fe++) {
								const xe = be[Fe];
								this.$.acceptReplace(
									xe.rangeOffset,
									xe.rangeLength,
									xe.text.length,
									xe.forceMoveMarkers,
								);
							}
							const Ce = [];
							this.rb();
							let Le = me;
							for (let Fe = 0, Oe = be.length; Fe < Oe; Fe++) {
								const xe = be[Fe],
									[He] = (0, a.$6L)(xe.text);
								this.h.fire();
								const Ke = xe.range.startLineNumber,
									Je = xe.range.endLineNumber,
									Te = Je - Ke,
									Ee = He,
									Ie = Math.min(Te, Ee),
									Be = Ee - Te,
									Se = ge - Le - Be + Ke,
									ke = Se,
									Ue = Se + Ee,
									qe = this.$.getInjectedTextInInterval(
										this,
										this.getOffsetAt(new c.$hL(ke, 1)),
										this.getOffsetAt(new c.$hL(Ue, this.getLineMaxColumn(Ue))),
										0,
									),
									Ae = D.$uN.fromDecorations(qe),
									Me = new t.$cc(Ae);
								for (let De = Ie; De >= 0; De--) {
									const Re = Ke + De,
										je = Se + De;
									Me.takeFromEndWhile((Ze) => Ze.lineNumber > je);
									const Ve = Me.takeFromEndWhile((Ze) => Ze.lineNumber === je);
									Ce.push(new D.$vN(Re, this.getLineContent(je), Ve));
								}
								if (Ie < Te) {
									const De = Ke + Ie;
									Ce.push(new D.$wN(De + 1, Je));
								}
								if (Ie < Ee) {
									const De = new t.$cc(Ae),
										Re = Ke + Ie,
										je = Ee - Ie,
										Ve = ge - Le - je + Re + 1,
										Ze = [],
										et = [];
									for (let rt = 0; rt < je; rt++) {
										const ft = Ve + rt;
										(et[rt] = this.getLineContent(ft)),
											De.takeWhile((bt) => bt.lineNumber < ft),
											(Ze[rt] = De.takeWhile((bt) => bt.lineNumber === ft));
									}
									Ce.push(new D.$xN(Re + 1, Ke + Ee, et, Ze));
								}
								Le += Be;
							}
							this.mb(new D.$zN(Ce, this.getVersionId(), this.R, this.S), {
								changes: be,
								eol: this.z.getEOL(),
								isEolChange: !1,
								versionId: this.getVersionId(),
								isUndoing: this.R,
								isRedoing: this.S,
								isFlush: !1,
							});
						}
						return ve.reverseEdits === null ? void 0 : ve.reverseEdits;
					}
					undo() {
						return this.fb.undo(this.uri);
					}
					canUndo() {
						return this.fb.canUndo(this.uri);
					}
					redo() {
						return this.fb.redo(this.uri);
					}
					canRedo() {
						return this.fb.canRedo(this.uri);
					}
					Bb(ue) {
						if (ue === null || ue.size === 0) return;
						const me = Array.from(ue).map(
							(ve) => new D.$vN(ve, this.getLineContent(ve), this.Db(ve)),
						);
						this.s.fire(new D.$AN(me));
					}
					changeDecorations(ue, fe = 0) {
						this.lb();
						try {
							return this.h.beginDeferredEmit(), this.Cb(fe, ue);
						} finally {
							this.h.endDeferredEmit();
						}
					}
					Cb(ue, fe) {
						const me = {
							addDecoration: (ge, be) =>
								this.Hb(ue, [], [{ range: ge, options: be }])[0],
							changeDecoration: (ge, be) => {
								this.Fb(ge, be);
							},
							changeDecorationOptions: (ge, be) => {
								this.Gb(ge, oe(be));
							},
							removeDecoration: (ge) => {
								this.Hb(ue, [ge], []);
							},
							deltaDecorations: (ge, be) =>
								ge.length === 0 && be.length === 0 ? [] : this.Hb(ue, ge, be),
						};
						let ve = null;
						try {
							ve = fe(me);
						} catch (ge) {
							(0, w.$4)(ge);
						}
						return (
							(me.addDecoration = G),
							(me.changeDecoration = G),
							(me.changeDecorationOptions = G),
							(me.removeDecoration = G),
							(me.deltaDecorations = G),
							ve
						);
					}
					deltaDecorations(ue, fe, me = 0) {
						if (
							(this.lb(), ue || (ue = []), ue.length === 0 && fe.length === 0)
						)
							return [];
						try {
							return (
								this.X++,
								this.X > 1 &&
									(console.warn(
										"Invoking deltaDecorations recursively could lead to leaking decorations.",
									),
									(0, w.$4)(
										new Error(
											"Invoking deltaDecorations recursively could lead to leaking decorations.",
										),
									)),
								this.h.beginDeferredEmit(),
								this.Hb(me, ue, fe)
							);
						} finally {
							this.h.endDeferredEmit(), this.X--;
						}
					}
					_getTrackedRange(ue) {
						return this.getDecorationRange(ue);
					}
					_setTrackedRange(ue, fe, me) {
						const ve = ue ? this.Z[ue] : null;
						if (!ve)
							return fe
								? this.Hb(0, [], [{ range: fe, options: le[me] }], !0)[0]
								: null;
						if (!fe) return this.$.delete(ve), delete this.Z[ve.id], null;
						const ge = this._validateRangeRelaxedNoAllocations(fe),
							be = this.z.getOffsetAt(ge.startLineNumber, ge.startColumn),
							Ce = this.z.getOffsetAt(ge.endLineNumber, ge.endColumn);
						return (
							this.$.delete(ve),
							ve.reset(this.getVersionId(), be, Ce, ge),
							ve.setOptions(le[me]),
							this.$.insert(ve),
							ve.id
						);
					}
					removeAllDecorationsWithOwnerId(ue) {
						if (this.H) return;
						const fe = this.$.collectNodesFromOwner(ue);
						for (let me = 0, ve = fe.length; me < ve; me++) {
							const ge = fe[me];
							this.$.delete(ge), delete this.Z[ge.id];
						}
					}
					getDecorationOptions(ue) {
						const fe = this.Z[ue];
						return fe ? fe.options : null;
					}
					getDecorationRange(ue) {
						const fe = this.Z[ue];
						return fe ? this.$.getNodeRange(this, fe) : null;
					}
					getLineDecorations(ue, fe = 0, me = !1) {
						return ue < 1 || ue > this.getLineCount()
							? []
							: this.getLinesDecorations(ue, ue, fe, me);
					}
					getLinesDecorations(ue, fe, me = 0, ve = !1, ge = !1) {
						const be = this.getLineCount(),
							Ce = Math.min(be, Math.max(1, ue)),
							Le = Math.min(be, Math.max(1, fe)),
							Fe = this.getLineMaxColumn(Le),
							Oe = new n.$iL(Ce, 1, Le, Fe),
							xe = this.Eb(Oe, me, ve, ge);
						return (
							(0, t.$4b)(xe, this.ab.getDecorationsInRange(Oe, me, ve)), xe
						);
					}
					getDecorationsInRange(ue, fe = 0, me = !1, ve = !1, ge = !1) {
						const be = this.validateRange(ue),
							Ce = this.Eb(be, fe, me, ge);
						return (
							(0, t.$4b)(Ce, this.ab.getDecorationsInRange(be, fe, me, ve)), Ce
						);
					}
					getOverviewRulerDecorations(ue = 0, fe = !1) {
						return this.$.getAll(this, ue, fe, !0, !1);
					}
					getInjectedTextDecorations(ue = 0) {
						return this.$.getAllInjectedText(this, ue);
					}
					Db(ue) {
						const fe = this.z.getOffsetAt(ue, 1),
							me = fe + this.z.getLineLength(ue),
							ve = this.$.getInjectedTextInInterval(this, fe, me, 0);
						return D.$uN
							.fromDecorations(ve)
							.filter((ge) => ge.lineNumber === ue);
					}
					getAllDecorations(ue = 0, fe = !1) {
						let me = this.$.getAll(this, ue, fe, !1, !1);
						return (me = me.concat(this.ab.getAllDecorations(ue, fe))), me;
					}
					getAllMarginDecorations(ue = 0) {
						return this.$.getAll(this, ue, !1, !1, !0);
					}
					Eb(ue, fe, me, ve) {
						const ge = this.z.getOffsetAt(ue.startLineNumber, ue.startColumn),
							be = this.z.getOffsetAt(ue.endLineNumber, ue.endColumn);
						return this.$.getAllInInterval(this, ge, be, fe, me, ve);
					}
					getRangeAt(ue, fe) {
						return this.z.getRangeAt(ue, fe - ue);
					}
					Fb(ue, fe) {
						const me = this.Z[ue];
						if (!me) return;
						if (me.options.after) {
							const Ce = this.getDecorationRange(ue);
							this.h.recordLineAffectedByInjectedText(Ce.endLineNumber);
						}
						if (me.options.before) {
							const Ce = this.getDecorationRange(ue);
							this.h.recordLineAffectedByInjectedText(Ce.startLineNumber);
						}
						const ve = this._validateRangeRelaxedNoAllocations(fe),
							ge = this.z.getOffsetAt(ve.startLineNumber, ve.startColumn),
							be = this.z.getOffsetAt(ve.endLineNumber, ve.endColumn);
						this.$.delete(me),
							me.reset(this.getVersionId(), ge, be, ve),
							this.$.insert(me),
							this.h.checkAffectedAndFire(me.options),
							me.options.after &&
								this.h.recordLineAffectedByInjectedText(ve.endLineNumber),
							me.options.before &&
								this.h.recordLineAffectedByInjectedText(ve.startLineNumber);
					}
					Gb(ue, fe) {
						const me = this.Z[ue];
						if (!me) return;
						const ve = !!(
								me.options.overviewRuler && me.options.overviewRuler.color
							),
							ge = !!(fe.overviewRuler && fe.overviewRuler.color);
						if (
							(this.h.checkAffectedAndFire(me.options),
							this.h.checkAffectedAndFire(fe),
							me.options.after || fe.after)
						) {
							const Le = this.$.getNodeRange(this, me);
							this.h.recordLineAffectedByInjectedText(Le.endLineNumber);
						}
						if (me.options.before || fe.before) {
							const Le = this.$.getNodeRange(this, me);
							this.h.recordLineAffectedByInjectedText(Le.startLineNumber);
						}
						const be = ve !== ge,
							Ce = Y(fe) !== ie(me);
						be || Ce
							? (this.$.delete(me), me.setOptions(fe), this.$.insert(me))
							: me.setOptions(fe);
					}
					Hb(ue, fe, me, ve = !1) {
						const ge = this.getVersionId(),
							be = fe.length;
						let Ce = 0;
						const Le = me.length;
						let Fe = 0;
						this.h.beginDeferredEmit();
						try {
							const Oe = new Array(Le);
							for (; Ce < be || Fe < Le; ) {
								let xe = null;
								if (Ce < be) {
									do xe = this.Z[fe[Ce++]];
									while (!xe && Ce < be);
									if (xe) {
										if (xe.options.after) {
											const He = this.$.getNodeRange(this, xe);
											this.h.recordLineAffectedByInjectedText(He.endLineNumber);
										}
										if (xe.options.before) {
											const He = this.$.getNodeRange(this, xe);
											this.h.recordLineAffectedByInjectedText(
												He.startLineNumber,
											);
										}
										this.$.delete(xe),
											ve || this.h.checkAffectedAndFire(xe.options);
									}
								}
								if (Fe < Le) {
									if (!xe) {
										const Ie = ++this.Y,
											Be = `${this.W};${Ie}`;
										(xe = new S.$HU(Be, 0, 0)), (this.Z[Be] = xe);
									}
									const He = me[Fe],
										Ke = this._validateRangeRelaxedNoAllocations(He.range),
										Je = oe(He.options),
										Te = this.z.getOffsetAt(Ke.startLineNumber, Ke.startColumn),
										Ee = this.z.getOffsetAt(Ke.endLineNumber, Ke.endColumn);
									(xe.ownerId = ue),
										xe.reset(ge, Te, Ee, Ke),
										xe.setOptions(Je),
										xe.options.after &&
											this.h.recordLineAffectedByInjectedText(Ke.endLineNumber),
										xe.options.before &&
											this.h.recordLineAffectedByInjectedText(
												Ke.startLineNumber,
											),
										ve || this.h.checkAffectedAndFire(Je),
										this.$.insert(xe),
										(Oe[Fe] = xe.id),
										Fe++;
								} else xe && delete this.Z[xe.id];
							}
							return Oe;
						} finally {
							this.h.endDeferredEmit();
						}
					}
					getLanguageId() {
						return this.tokenization.getLanguageId();
					}
					setLanguage(ue, fe) {
						typeof ue == "string"
							? (this.G.clear(), this.Ib(ue, fe))
							: ((this.G.value = ue.onDidChange(() =>
									this.Ib(ue.languageId, fe),
								)),
								this.Ib(ue.languageId, fe));
					}
					Ib(ue, fe) {
						this.tokenization.setLanguageId(ue, fe),
							this.gb.requestRichLanguageFeatures(ue);
					}
					getLanguageIdAtPosition(ue, fe) {
						return this.tokenization.getLanguageIdAtPosition(ue, fe);
					}
					getWordAtPosition(ue) {
						return this.bb.getWordAtPosition(ue);
					}
					getTokenTypeAtPosition_DANGEROUS_BECAUSE_COSTS_1_MS(ue) {
						const fe = this.bb.getLineTokens(ue.lineNumber),
							me = fe.findTokenIndexAtOffset(ue.column - 1);
						return fe.getStandardTokenType(me);
					}
					getWordUntilPosition(ue) {
						return this.bb.getWordUntilPosition(ue);
					}
					getWordsUntilPosition(ue) {
						return this.bb.getWordsUntilPosition(ue);
					}
					normalizePosition(ue, fe) {
						return ue;
					}
					getLineIndentColumn(ue) {
						return W(this.getLineContent(ue)) + 1;
					}
				};
				(e.$$X = J),
					(e.$$X =
						J =
						O =
							Ne(
								[
									j(4, N.$GN),
									j(5, o.$nM),
									j(6, f.$aN),
									j(7, R.$5X),
									j(8, M.$Li),
								],
								J,
							));
				function W(ye) {
					let ue = 0;
					for (const fe of ye)
						if (fe === " " || fe === "	") ue++;
						else break;
					return ue;
				}
				function X(ye) {
					return !!(ye.options.overviewRuler && ye.options.overviewRuler.color);
				}
				function Y(ye) {
					return !!ye.after || !!ye.before;
				}
				function ie(ye) {
					return !!ye.options.after || !!ye.options.before;
				}
				class ne {
					constructor() {
						(this.a = new S.$JU()),
							(this.b = new S.$JU()),
							(this.d = new S.$JU());
					}
					ensureAllNodesHaveRanges(ue) {
						this.getAll(ue, 0, !1, !1, !1);
					}
					f(ue, fe) {
						for (const me of fe)
							me.range === null &&
								(me.range = ue.getRangeAt(
									me.cachedAbsoluteStart,
									me.cachedAbsoluteEnd,
								));
						return fe;
					}
					getAllInInterval(ue, fe, me, ve, ge, be) {
						const Ce = ue.getVersionId(),
							Le = this.g(fe, me, ve, ge, Ce, be);
						return this.f(ue, Le);
					}
					g(ue, fe, me, ve, ge, be) {
						const Ce = this.a.intervalSearch(ue, fe, me, ve, ge, be),
							Le = this.b.intervalSearch(ue, fe, me, ve, ge, be),
							Fe = this.d.intervalSearch(ue, fe, me, ve, ge, be);
						return Ce.concat(Le).concat(Fe);
					}
					getInjectedTextInInterval(ue, fe, me, ve) {
						const ge = ue.getVersionId(),
							be = this.d.intervalSearch(fe, me, ve, !1, ge, !1);
						return this.f(ue, be).filter(
							(Ce) => Ce.options.showIfCollapsed || !Ce.range.isEmpty(),
						);
					}
					getAllInjectedText(ue, fe) {
						const me = ue.getVersionId(),
							ve = this.d.search(fe, !1, me, !1);
						return this.f(ue, ve).filter(
							(ge) => ge.options.showIfCollapsed || !ge.range.isEmpty(),
						);
					}
					getAll(ue, fe, me, ve, ge) {
						const be = ue.getVersionId(),
							Ce = this.h(fe, me, ve, be, ge);
						return this.f(ue, Ce);
					}
					h(ue, fe, me, ve, ge) {
						if (me) return this.b.search(ue, fe, ve, ge);
						{
							const be = this.a.search(ue, fe, ve, ge),
								Ce = this.b.search(ue, fe, ve, ge),
								Le = this.d.search(ue, fe, ve, ge);
							return be.concat(Ce).concat(Le);
						}
					}
					collectNodesFromOwner(ue) {
						const fe = this.a.collectNodesFromOwner(ue),
							me = this.b.collectNodesFromOwner(ue),
							ve = this.d.collectNodesFromOwner(ue);
						return fe.concat(me).concat(ve);
					}
					collectNodesPostOrder() {
						const ue = this.a.collectNodesPostOrder(),
							fe = this.b.collectNodesPostOrder(),
							me = this.d.collectNodesPostOrder();
						return ue.concat(fe).concat(me);
					}
					insert(ue) {
						ie(ue)
							? this.d.insert(ue)
							: X(ue)
								? this.b.insert(ue)
								: this.a.insert(ue);
					}
					delete(ue) {
						ie(ue)
							? this.d.delete(ue)
							: X(ue)
								? this.b.delete(ue)
								: this.a.delete(ue);
					}
					getNodeRange(ue, fe) {
						const me = ue.getVersionId();
						return (
							fe.cachedVersionId !== me && this.k(fe, me),
							fe.range === null &&
								(fe.range = ue.getRangeAt(
									fe.cachedAbsoluteStart,
									fe.cachedAbsoluteEnd,
								)),
							fe.range
						);
					}
					k(ue, fe) {
						ie(ue)
							? this.d.resolveNode(ue, fe)
							: X(ue)
								? this.b.resolveNode(ue, fe)
								: this.a.resolveNode(ue, fe);
					}
					acceptReplace(ue, fe, me, ve) {
						this.a.acceptReplace(ue, fe, me, ve),
							this.b.acceptReplace(ue, fe, me, ve),
							this.d.acceptReplace(ue, fe, me, ve);
					}
				}
				function ee(ye) {
					return ye.replace(/[^a-z0-9\-_]/gi, " ");
				}
				class _ {
					constructor(ue) {
						(this.color = ue.color || ""),
							(this.darkColor = ue.darkColor || "");
					}
				}
				class te extends _ {
					constructor(ue) {
						super(ue),
							(this.a = null),
							(this.position =
								typeof ue.position == "number"
									? ue.position
									: b.OverviewRulerLane.Center);
					}
					getColor(ue) {
						return (
							this.a ||
								(ue.type !== "light" && this.darkColor
									? (this.a = this.b(this.darkColor, ue))
									: (this.a = this.b(this.color, ue))),
							this.a
						);
					}
					invalidateCachedColor() {
						this.a = null;
					}
					b(ue, fe) {
						if (typeof ue == "string") return ue;
						const me = ue ? fe.getColor(ue.id) : null;
						return me ? me.toString() : "";
					}
				}
				e.$aY = te;
				class Q {
					constructor(ue) {
						(this.position = ue?.position ?? b.GlyphMarginLane.Center),
							(this.persistLane = ue?.persistLane);
					}
				}
				e.$bY = Q;
				class Z extends _ {
					constructor(ue) {
						super(ue),
							(this.position = ue.position),
							(this.sectionHeaderStyle = ue.sectionHeaderStyle ?? null),
							(this.sectionHeaderText = ue.sectionHeaderText ?? null);
					}
					getColor(ue) {
						return (
							this.a ||
								(ue.type !== "light" && this.darkColor
									? (this.a = this.b(this.darkColor, ue))
									: (this.a = this.b(this.color, ue))),
							this.a
						);
					}
					invalidateCachedColor() {
						this.a = void 0;
					}
					b(ue, fe) {
						return typeof ue == "string"
							? i.$UL.fromHex(ue)
							: fe.getColor(ue.id);
					}
				}
				e.$cY = Z;
				class se {
					static from(ue) {
						return ue instanceof se ? ue : new se(ue);
					}
					constructor(ue) {
						(this.content = ue.content || ""),
							(this.inlineClassName = ue.inlineClassName || null),
							(this.inlineClassNameAffectsLetterSpacing =
								ue.inlineClassNameAffectsLetterSpacing || !1),
							(this.attachedData = ue.attachedData || null),
							(this.cursorStops = ue.cursorStops || null);
					}
				}
				e.$dY = se;
				class re {
					static register(ue) {
						return new re(ue);
					}
					static createDynamic(ue) {
						return new re(ue);
					}
					constructor(ue) {
						(this.description = ue.description),
							(this.blockClassName = ue.blockClassName
								? ee(ue.blockClassName)
								: null),
							(this.blockDoesNotCollapse = ue.blockDoesNotCollapse ?? null),
							(this.blockIsAfterEnd = ue.blockIsAfterEnd ?? null),
							(this.blockPadding = ue.blockPadding ?? null),
							(this.stickiness =
								ue.stickiness ||
								b.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges),
							(this.zIndex = ue.zIndex || 0),
							(this.className = ue.className ? ee(ue.className) : null),
							(this.shouldFillLineOnLineBreak =
								ue.shouldFillLineOnLineBreak ?? null),
							(this.hoverMessage = ue.hoverMessage || null),
							(this.glyphMarginHoverMessage =
								ue.glyphMarginHoverMessage || null),
							(this.lineNumberHoverMessage = ue.lineNumberHoverMessage || null),
							(this.isWholeLine = ue.isWholeLine || !1),
							(this.showIfCollapsed = ue.showIfCollapsed || !1),
							(this.collapseOnReplaceEdit = ue.collapseOnReplaceEdit || !1),
							(this.overviewRuler = ue.overviewRuler
								? new te(ue.overviewRuler)
								: null),
							(this.minimap = ue.minimap ? new Z(ue.minimap) : null),
							(this.glyphMargin = ue.glyphMarginClassName
								? new Q(ue.glyphMargin)
								: null),
							(this.glyphMarginClassName = ue.glyphMarginClassName
								? ee(ue.glyphMarginClassName)
								: null),
							(this.linesDecorationsClassName = ue.linesDecorationsClassName
								? ee(ue.linesDecorationsClassName)
								: null),
							(this.lineNumberClassName = ue.lineNumberClassName
								? ee(ue.lineNumberClassName)
								: null),
							(this.linesDecorationsTooltip = ue.linesDecorationsTooltip
								? m.$mf(ue.linesDecorationsTooltip)
								: null),
							(this.firstLineDecorationClassName =
								ue.firstLineDecorationClassName
									? ee(ue.firstLineDecorationClassName)
									: null),
							(this.marginClassName = ue.marginClassName
								? ee(ue.marginClassName)
								: null),
							(this.inlineClassName = ue.inlineClassName
								? ee(ue.inlineClassName)
								: null),
							(this.inlineClassNameAffectsLetterSpacing =
								ue.inlineClassNameAffectsLetterSpacing || !1),
							(this.beforeContentClassName = ue.beforeContentClassName
								? ee(ue.beforeContentClassName)
								: null),
							(this.afterContentClassName = ue.afterContentClassName
								? ee(ue.afterContentClassName)
								: null),
							(this.after = ue.after ? se.from(ue.after) : null),
							(this.before = ue.before ? se.from(ue.before) : null),
							(this.hideInCommentTokens = ue.hideInCommentTokens ?? !1),
							(this.hideInStringTokens = ue.hideInStringTokens ?? !1);
					}
				}
				(e.$eY = re), (re.EMPTY = re.register({ description: "empty" }));
				const le = [
					re.register({
						description: "tracked-range-always-grows-when-typing-at-edges",
						stickiness: b.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
					}),
					re.register({
						description: "tracked-range-never-grows-when-typing-at-edges",
						stickiness: b.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
					}),
					re.register({
						description: "tracked-range-grows-only-when-typing-before",
						stickiness: b.TrackedRangeStickiness.GrowsOnlyWhenTypingBefore,
					}),
					re.register({
						description: "tracked-range-grows-only-when-typing-after",
						stickiness: b.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter,
					}),
				];
				function oe(ye) {
					return ye instanceof re ? ye : re.createDynamic(ye);
				}
				class ae extends C.$1c {
					constructor(ue) {
						super(),
							(this.u = ue),
							(this.a = this.D(new E.$re())),
							(this.event = this.a.event),
							(this.n = null),
							(this.b = 0),
							(this.f = !1),
							(this.g = !1),
							(this.h = !1),
							(this.q = !1),
							(this.s = !1);
					}
					hasListeners() {
						return this.a.hasListeners();
					}
					beginDeferredEmit() {
						this.b++;
					}
					endDeferredEmit() {
						this.b--,
							this.b === 0 &&
								(this.f && this.y(), this.n?.clear(), (this.n = null));
					}
					recordLineAffectedByInjectedText(ue) {
						this.n || (this.n = new Set()), this.n.add(ue);
					}
					checkAffectedAndFire(ue) {
						(this.g ||= !!ue.minimap?.position),
							(this.h ||= !!ue.overviewRuler?.color),
							(this.q ||= !!ue.glyphMarginClassName),
							(this.s ||= !!ue.lineNumberClassName),
							this.w();
					}
					fire() {
						(this.g = !0), (this.h = !0), (this.q = !0), this.w();
					}
					w() {
						this.b === 0 ? this.y() : (this.f = !0);
					}
					y() {
						this.u(this.n);
						const ue = {
							affectsMinimap: this.g,
							affectsOverviewRuler: this.h,
							affectsGlyphMargin: this.q,
							affectsLineNumber: this.s,
						};
						(this.f = !1),
							(this.g = !1),
							(this.h = !1),
							(this.q = !1),
							this.a.fire(ue);
					}
				}
				class pe extends C.$1c {
					constructor() {
						super(),
							(this.a = this.D(new E.$re())),
							(this.fastEvent = this.a.event),
							(this.b = this.D(new E.$re())),
							(this.slowEvent = this.b.event),
							(this.f = 0),
							(this.g = null);
					}
					hasListeners() {
						return this.a.hasListeners() || this.b.hasListeners();
					}
					beginDeferredEmit() {
						this.f++;
					}
					endDeferredEmit(ue = null) {
						if ((this.f--, this.f === 0 && this.g !== null)) {
							this.g.rawContentChangedEvent.resultingSelection = ue;
							const fe = this.g;
							(this.g = null), this.a.fire(fe), this.b.fire(fe);
						}
					}
					fire(ue) {
						if (this.f > 0) {
							this.g ? (this.g = this.g.merge(ue)) : (this.g = ue);
							return;
						}
						this.a.fire(ue), this.b.fire(ue);
					}
				}
				class $e {
					constructor(ue) {
						this.a = ue;
					}
				}
				e.$fY = $e;
			},
		),
		define(
			de[608],
			he([1, 0, 14, 26, 122, 4, 51, 79]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Uxb =
						e.$Txb =
						e.$Sxb =
						e.$Rxb =
						e.$Qxb =
						e.$Pxb =
						e.$Oxb =
						e.$Nxb =
						e.$Mxb =
						e.$Lxb =
						e.$Kxb =
						e.$Jxb =
						e.$Ixb =
						e.$Hxb =
						e.$Gxb =
							void 0),
					(e.$Gxb = (0, C.$wP)(
						"diffEditor.move.border",
						"#8b8b8b9c",
						(0, E.localize)(243, null),
					)),
					(e.$Hxb = (0, C.$wP)(
						"diffEditor.moveActive.border",
						"#FFA500",
						(0, E.localize)(244, null),
					)),
					(e.$Ixb = (0, C.$wP)(
						"diffEditor.unchangedRegionShadow",
						{
							dark: "#000000",
							light: "#737373BF",
							hcDark: "#000000",
							hcLight: "#737373BF",
						},
						(0, E.localize)(245, null),
					)),
					(e.$Jxb = (0, d.$$O)(
						"diff-insert",
						t.$ak.add,
						(0, E.localize)(246, null),
					)),
					(e.$Kxb = (0, d.$$O)(
						"diff-remove",
						t.$ak.remove,
						(0, E.localize)(247, null),
					)),
					(e.$Lxb = w.$eY.register({
						className: "line-insert",
						description: "line-insert",
						isWholeLine: !0,
						linesDecorationsClassName:
							"insert-sign " + i.ThemeIcon.asClassName(e.$Jxb),
						marginClassName: "gutter-insert",
					})),
					(e.$Mxb = w.$eY.register({
						className: "line-delete",
						description: "line-delete",
						isWholeLine: !0,
						linesDecorationsClassName:
							"delete-sign " + i.ThemeIcon.asClassName(e.$Kxb),
						marginClassName: "gutter-delete",
					})),
					(e.$Nxb = w.$eY.register({
						className: "line-insert",
						description: "line-insert",
						isWholeLine: !0,
						marginClassName: "gutter-insert",
					})),
					(e.$Oxb = w.$eY.register({
						className: "line-delete",
						description: "line-delete",
						isWholeLine: !0,
						marginClassName: "gutter-delete",
					})),
					(e.$Pxb = w.$eY.register({
						className: "char-insert",
						description: "char-insert",
						shouldFillLineOnLineBreak: !0,
					})),
					(e.$Qxb = w.$eY.register({
						className: "char-insert",
						description: "char-insert",
						isWholeLine: !0,
					})),
					(e.$Rxb = w.$eY.register({
						className: "char-insert diff-range-empty",
						description: "char-insert diff-range-empty",
					})),
					(e.$Sxb = w.$eY.register({
						className: "char-delete",
						description: "char-delete",
						shouldFillLineOnLineBreak: !0,
					})),
					(e.$Txb = w.$eY.register({
						className: "char-delete",
						description: "char-delete",
						isWholeLine: !0,
					})),
					(e.$Uxb = w.$eY.register({
						className: "char-delete diff-range-empty",
						description: "char-delete diff-range-empty",
					}));
			},
		),
		define(
			de[1216],
			he([
				1, 0, 7, 24, 15, 14, 3, 77, 26, 28, 321, 608, 954, 2758, 1606, 370, 38,
				196, 48, 98, 916, 290, 121, 49, 17,
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
					(e.$3xb = void 0),
					(e.$4xb = P);
				let S = class extends C.$1c {
					constructor(D, M, N, A, R, O, B, U, z, F) {
						super(),
							(this.t = D),
							(this.u = M),
							(this.y = N),
							(this.z = A),
							(this.C = R),
							(this.F = O),
							(this.G = B),
							(this.H = U),
							(this.I = z),
							(this.J = F),
							(this.b = (0, d.observableValue)(this, 0)),
							(this.g = (0, d.observableValue)(this, 0)),
							(this.h = (0, g.$Bwb)(this.t, this.g, this.B)),
							(this.j = (0, d.observableValue)(this, 0)),
							(this.q = (0, d.observableValue)(this, 0)),
							(this.s = (0, g.$Bwb)(this.t, this.q, this.B));
						const x = (0, d.observableValue)("invalidateAlignmentsState", 0),
							H = this.D(
								new w.$Yh(() => {
									x.set(x.get() + 1, void 0);
								}, 0),
							);
						this.D(
							this.u.original.onDidChangeViewZones((X) => {
								this.F() || H.schedule();
							}),
						),
							this.D(
								this.u.modified.onDidChangeViewZones((X) => {
									this.F() || H.schedule();
								}),
							),
							this.D(
								this.u.original.onDidChangeConfiguration((X) => {
									(X.hasChanged(p.EditorOption.wrappingInfo) ||
										X.hasChanged(p.EditorOption.lineHeight)) &&
										H.schedule();
								}),
							),
							this.D(
								this.u.modified.onDidChangeConfiguration((X) => {
									(X.hasChanged(p.EditorOption.wrappingInfo) ||
										X.hasChanged(p.EditorOption.lineHeight)) &&
										H.schedule();
								}),
							);
						const q = this.y
								.map((X) =>
									X
										? (0, d.observableFromEvent)(
												this,
												X.model.original.onDidChangeTokens,
												() =>
													X.model.original.tokenization
														.backgroundTokenizationState ===
													s.BackgroundTokenizationState.Completed,
											)
										: void 0,
								)
								.map((X, Y) => X?.read(Y)),
							V = (0, d.derived)((X) => {
								const Y = this.y.read(X),
									ie = Y?.diff.read(X);
								if (!Y || !ie) return null;
								x.read(X);
								const ee = this.z.renderSideBySide.read(X);
								return I(
									this.u.original,
									this.u.modified,
									ie.mappings,
									this.G,
									this.H,
									ee,
								);
							}),
							G = (0, d.derived)((X) => {
								const Y = this.y.read(X)?.movedTextToCompare.read(X);
								if (!Y) return null;
								x.read(X);
								const ie = Y.changes.map((ne) => new h.$9xb(ne));
								return I(
									this.u.original,
									this.u.modified,
									ie,
									this.G,
									this.H,
									!0,
								);
							});
						function K() {
							const X = document.createElement("div");
							return (X.className = "diagonal-fill"), X;
						}
						const J = this.D(new C.$Zc());
						this.viewZones = (0, d.derivedWithStore)(this, (X, Y) => {
							J.clear();
							const ie = V.read(X) || [],
								ne = [],
								ee = [],
								_ = this.j.read(X);
							_ > 0 &&
								ee.push({
									afterLineNumber: 0,
									domNode: document.createElement("div"),
									heightInPx: _,
									showInHiddenAreas: !0,
									suppressMouseDown: !0,
								});
							const te = this.b.read(X);
							te > 0 &&
								ne.push({
									afterLineNumber: 0,
									domNode: document.createElement("div"),
									heightInPx: te,
									showInHiddenAreas: !0,
									suppressMouseDown: !0,
								});
							const Q = this.z.renderSideBySide.read(X),
								Z = Q
									? void 0
									: this.u.modified._getViewModel()?.createLineBreaksComputer();
							if (Z) {
								const ye = this.u.original.getModel();
								for (const ue of ie)
									if (ue.diff)
										for (
											let fe = ue.originalRange.startLineNumber;
											fe < ue.originalRange.endLineNumberExclusive;
											fe++
										) {
											if (fe > ye.getLineCount()) return { orig: ne, mod: ee };
											Z?.addRequest(ye.getLineContent(fe), null, null);
										}
							}
							const se = Z?.finalize() ?? [];
							let re = 0;
							const le = this.u.modified.getOption(p.EditorOption.lineHeight),
								oe = this.y.read(X)?.movedTextToCompare.read(X),
								ae =
									this.u.original.getModel()?.mightContainNonBasicASCII() ?? !1,
								pe = this.u.original.getModel()?.mightContainRTL() ?? !1,
								$e = n.$2xb.fromEditor(this.u.modified);
							for (const ye of ie)
								if (
									ye.diff &&
									!Q &&
									(!this.z.useTrueInlineDiffRendering.read(X) || !P(ye.diff))
								) {
									if (!ye.originalRange.isEmpty) {
										q.read(X);
										const fe = document.createElement("div");
										fe.classList.add(
											"view-lines",
											"line-delete",
											"monaco-mouse-cursor-text",
										);
										const me = this.u.original.getModel();
										if (
											ye.originalRange.endLineNumberExclusive - 1 >
											me.getLineCount()
										)
											return { orig: ne, mod: ee };
										const ve = new n.$1xb(
												ye.originalRange.mapToLineArray((Fe) =>
													me.tokenization.getLineTokens(Fe),
												),
												ye.originalRange.mapToLineArray((Fe) => se[re++]),
												ae,
												pe,
											),
											ge = [];
										for (const Fe of ye.diff.innerChanges || [])
											ge.push(
												new l.$3sb(
													Fe.originalRange.delta(
														-(ye.diff.original.startLineNumber - 1),
													),
													a.$Sxb.className,
													l.InlineDecorationType.Regular,
												),
											);
										const be = (0, n.$Zxb)(ve, $e, ge, fe),
											Ce = document.createElement("div");
										if (
											((Ce.className = "inline-deleted-margin-view-zone"),
											(0, u.$jsb)(Ce, $e.fontInfo),
											this.z.renderIndicators.read(X))
										)
											for (let Fe = 0; Fe < be.heightInLines; Fe++) {
												const Oe = document.createElement("div");
												(Oe.className = `delete-sign ${m.ThemeIcon.asClassName(a.$Kxb)}`),
													Oe.setAttribute(
														"style",
														`position:absolute;top:${Fe * le}px;width:${$e.lineDecorationsWidth}px;height:${le}px;right:0;`,
													),
													Ce.appendChild(Oe);
											}
										let Le;
										J.add(
											new c.$Yxb(
												() => (0, r.$wg)(Le),
												Ce,
												this.u.modified,
												ye.diff,
												this.C,
												be.viewLineCounts,
												this.u.original.getModel(),
												this.J,
												this.I,
											),
										);
										for (let Fe = 0; Fe < be.viewLineCounts.length; Fe++) {
											const Oe = be.viewLineCounts[Fe];
											Oe > 1 &&
												ne.push({
													afterLineNumber:
														ye.originalRange.startLineNumber + Fe,
													domNode: K(),
													heightInPx: (Oe - 1) * le,
													showInHiddenAreas: !0,
													suppressMouseDown: !0,
												});
										}
										ee.push({
											afterLineNumber: ye.modifiedRange.startLineNumber - 1,
											domNode: fe,
											heightInPx: be.heightInLines * le,
											minWidthInPx: be.minWidthInPx,
											marginDomNode: Ce,
											setZoneId(Fe) {
												Le = Fe;
											},
											showInHiddenAreas: !0,
											suppressMouseDown: !0,
										});
									}
									const ue = document.createElement("div");
									(ue.className = "gutter-delete"),
										ne.push({
											afterLineNumber:
												ye.originalRange.endLineNumberExclusive - 1,
											domNode: K(),
											heightInPx: ye.modifiedHeightInPx,
											marginDomNode: ue,
											showInHiddenAreas: !0,
											suppressMouseDown: !0,
										});
								} else {
									const ue = ye.modifiedHeightInPx - ye.originalHeightInPx;
									if (ue > 0) {
										if (
											oe?.lineRangeMapping.original
												.delta(-1)
												.deltaLength(2)
												.contains(ye.originalRange.endLineNumberExclusive - 1)
										)
											continue;
										ne.push({
											afterLineNumber:
												ye.originalRange.endLineNumberExclusive - 1,
											domNode: K(),
											heightInPx: ue,
											showInHiddenAreas: !0,
											suppressMouseDown: !0,
										});
									} else {
										let fe = function () {
											const ve = document.createElement("div");
											return (
												(ve.className =
													"arrow-revert-change " +
													m.ThemeIcon.asClassName(E.$ak.arrowRight)),
												Y.add(
													(0, t.$0fb)(ve, "mousedown", (ge) =>
														ge.stopPropagation(),
													),
												),
												Y.add(
													(0, t.$0fb)(ve, "click", (ge) => {
														ge.stopPropagation(), R.revert(ye.diff);
													}),
												),
												(0, t.$)("div", {}, ve)
											);
										};
										if (
											oe?.lineRangeMapping.modified
												.delta(-1)
												.deltaLength(2)
												.contains(ye.modifiedRange.endLineNumberExclusive - 1)
										)
											continue;
										let me;
										ye.diff &&
											ye.diff.modified.isEmpty &&
											this.z.shouldRenderOldRevertArrows.read(X) &&
											(me = fe()),
											ee.push({
												afterLineNumber:
													ye.modifiedRange.endLineNumberExclusive - 1,
												domNode: K(),
												heightInPx: -ue,
												marginDomNode: me,
												showInHiddenAreas: !0,
												suppressMouseDown: !0,
											});
									}
								}
							for (const ye of G.read(X) ?? []) {
								if (
									!oe?.lineRangeMapping.original.intersect(ye.originalRange) ||
									!oe?.lineRangeMapping.modified.intersect(ye.modifiedRange)
								)
									continue;
								const ue = ye.modifiedHeightInPx - ye.originalHeightInPx;
								ue > 0
									? ne.push({
											afterLineNumber:
												ye.originalRange.endLineNumberExclusive - 1,
											domNode: K(),
											heightInPx: ue,
											showInHiddenAreas: !0,
											suppressMouseDown: !0,
										})
									: ee.push({
											afterLineNumber:
												ye.modifiedRange.endLineNumberExclusive - 1,
											domNode: K(),
											heightInPx: -ue,
											showInHiddenAreas: !0,
											suppressMouseDown: !0,
										});
							}
							return { orig: ne, mod: ee };
						});
						let W = !1;
						this.D(
							this.u.original.onDidScrollChange((X) => {
								X.scrollLeftChanged &&
									!W &&
									((W = !0),
									this.u.modified.setScrollLeft(X.scrollLeft),
									(W = !1));
							}),
						),
							this.D(
								this.u.modified.onDidScrollChange((X) => {
									X.scrollLeftChanged &&
										!W &&
										((W = !0),
										this.u.original.setScrollLeft(X.scrollLeft),
										(W = !1));
								}),
							),
							(this.f = (0, d.observableFromEvent)(
								this.u.original.onDidScrollChange,
								() => this.u.original.getScrollTop(),
							)),
							(this.n = (0, d.observableFromEvent)(
								this.u.modified.onDidScrollChange,
								() => this.u.modified.getScrollTop(),
							)),
							this.D(
								(0, d.autorun)((X) => {
									const Y =
										this.f.read(X) -
										(this.h.get() - this.s.read(X)) -
										(this.b.get() - this.j.read(X));
									Y !== this.u.modified.getScrollTop() &&
										this.u.modified.setScrollTop(Y, b.ScrollType.Immediate);
								}),
							),
							this.D(
								(0, d.autorun)((X) => {
									const Y =
										this.n.read(X) -
										(this.s.get() - this.h.read(X)) -
										(this.j.get() - this.b.read(X));
									Y !== this.u.original.getScrollTop() &&
										this.u.original.setScrollTop(Y, b.ScrollType.Immediate);
								}),
							),
							this.D(
								(0, d.autorun)((X) => {
									const Y = this.y.read(X)?.movedTextToCompare.read(X);
									let ie = 0;
									if (Y) {
										const ne =
											this.u.original.getTopForLineNumber(
												Y.lineRangeMapping.original.startLineNumber,
												!0,
											) - this.b.get();
										ie =
											this.u.modified.getTopForLineNumber(
												Y.lineRangeMapping.modified.startLineNumber,
												!0,
											) -
											this.j.get() -
											ne;
									}
									ie > 0
										? (this.j.set(0, void 0), this.b.set(ie, void 0))
										: ie < 0
											? (this.j.set(-ie, void 0), this.b.set(0, void 0))
											: setTimeout(() => {
													this.j.set(0, void 0), this.b.set(0, void 0);
												}, 400),
										this.u.modified.hasTextFocus()
											? this.g.set(this.q.get() - ie, void 0, !0)
											: this.q.set(this.g.get() + ie, void 0, !0);
								}),
							);
					}
				};
				(e.$3xb = S), (e.$3xb = S = Ne([j(8, y.$Vxb), j(9, $.$Xxb)], S));
				function I(L, D, M, N, A, R) {
					const O = new i.$cc(T(L, N)),
						B = new i.$cc(T(D, A)),
						U = L.getOption(p.EditorOption.lineHeight),
						z = D.getOption(p.EditorOption.lineHeight),
						F = [];
					let x = 0,
						H = 0;
					function q(V, G) {
						for (;;) {
							let K = O.peek(),
								J = B.peek();
							if (
								(K && K.lineNumber >= V && (K = void 0),
								J && J.lineNumber >= G && (J = void 0),
								!K && !J)
							)
								break;
							const W = K ? K.lineNumber - x : Number.MAX_VALUE,
								X = J ? J.lineNumber - H : Number.MAX_VALUE;
							W < X
								? (O.dequeue(),
									(J = { lineNumber: K.lineNumber - x + H, heightInPx: 0 }))
								: W > X
									? (B.dequeue(),
										(K = { lineNumber: J.lineNumber - H + x, heightInPx: 0 }))
									: (O.dequeue(), B.dequeue()),
								F.push({
									originalRange: o.$rL.ofLength(K.lineNumber, 1),
									modifiedRange: o.$rL.ofLength(J.lineNumber, 1),
									originalHeightInPx: U + K.heightInPx,
									modifiedHeightInPx: z + J.heightInPx,
									diff: void 0,
								});
						}
					}
					for (const V of M) {
						let X = function (Y, ie, ne = !1) {
							if (Y < W || ie < J) return;
							if (K) K = !1;
							else if (!ne && (Y === W || ie === J)) return;
							const ee = new o.$rL(W, Y),
								_ = new o.$rL(J, ie);
							if (ee.isEmpty && _.isEmpty) return;
							const te =
									O.takeWhile((Z) => Z.lineNumber < Y)?.reduce(
										(Z, se) => Z + se.heightInPx,
										0,
									) ?? 0,
								Q =
									B.takeWhile((Z) => Z.lineNumber < ie)?.reduce(
										(Z, se) => Z + se.heightInPx,
										0,
									) ?? 0;
							F.push({
								originalRange: ee,
								modifiedRange: _,
								originalHeightInPx: ee.length * U + te,
								modifiedHeightInPx: _.length * z + Q,
								diff: V.lineRangeMapping,
							}),
								(W = Y),
								(J = ie);
						};
						const G = V.lineRangeMapping;
						q(G.original.startLineNumber, G.modified.startLineNumber);
						let K = !0,
							J = G.modified.startLineNumber,
							W = G.original.startLineNumber;
						if (R)
							for (const Y of G.innerChanges || []) {
								Y.originalRange.startColumn > 1 &&
									Y.modifiedRange.startColumn > 1 &&
									X(
										Y.originalRange.startLineNumber,
										Y.modifiedRange.startLineNumber,
									);
								const ie = L.getModel(),
									ne =
										Y.originalRange.endLineNumber <= ie.getLineCount()
											? ie.getLineMaxColumn(Y.originalRange.endLineNumber)
											: Number.MAX_SAFE_INTEGER;
								Y.originalRange.endColumn < ne &&
									X(
										Y.originalRange.endLineNumber,
										Y.modifiedRange.endLineNumber,
									);
							}
						X(
							G.original.endLineNumberExclusive,
							G.modified.endLineNumberExclusive,
							!0,
						),
							(x = G.original.endLineNumberExclusive),
							(H = G.modified.endLineNumberExclusive);
					}
					return q(Number.MAX_VALUE, Number.MAX_VALUE), F;
				}
				function T(L, D) {
					const M = [],
						N = [],
						A = L.getOption(p.EditorOption.wrappingInfo).wrappingColumn !== -1,
						R = L._getViewModel().coordinatesConverter,
						O = L.getOption(p.EditorOption.lineHeight);
					if (A)
						for (let U = 1; U <= L.getModel().getLineCount(); U++) {
							const z = R.getModelLineViewLineCount(U);
							z > 1 && N.push({ lineNumber: U, heightInPx: O * (z - 1) });
						}
					for (const U of L.getWhitespaces()) {
						if (D.has(U.id)) continue;
						const z =
							U.afterLineNumber === 0
								? 0
								: R.convertViewPositionToModelPosition(
										new f.$hL(U.afterLineNumber, 1),
									).lineNumber;
						M.push({ lineNumber: z, heightInPx: U.height });
					}
					return (0, g.$wwb)(
						M,
						N,
						(U) => U.lineNumber,
						(U, z) => ({
							lineNumber: U.lineNumber,
							heightInPx: U.heightInPx + z.heightInPx,
						}),
					);
				}
				function P(L) {
					return L.innerChanges
						? L.innerChanges.every(
								(D) =>
									(k(D.modifiedRange) && k(D.originalRange)) ||
									D.originalRange.equalsRange(new v.$iL(1, 1, 1, 1)),
							)
						: !1;
				}
				function k(L) {
					return L.startLineNumber === L.endLineNumber;
				}
			},
		),
		define(
			de[2902],
			he([1, 0, 3, 77, 1216, 1587, 608, 370]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$dyb = void 0);
				class m extends t.$1c {
					constructor(u, a, h, c) {
						super(),
							(this.a = u),
							(this.b = a),
							(this.c = h),
							(this.f = (0, i.derived)(this, (n) => {
								const g = this.b.read(n),
									p = g?.diff.read(n);
								if (!p) return null;
								const o = this.b.read(n).movedTextToCompare.read(n),
									f = this.c.renderIndicators.read(n),
									b = this.c.showEmptyDecorations.read(n),
									s = [],
									l = [];
								if (!o)
									for (const $ of p.mappings)
										if (
											($.lineRangeMapping.original.isEmpty ||
												s.push({
													range: $.lineRangeMapping.original.toInclusiveRange(),
													options: f ? C.$Mxb : C.$Oxb,
												}),
											$.lineRangeMapping.modified.isEmpty ||
												l.push({
													range: $.lineRangeMapping.modified.toInclusiveRange(),
													options: f ? C.$Lxb : C.$Nxb,
												}),
											$.lineRangeMapping.modified.isEmpty ||
												$.lineRangeMapping.original.isEmpty)
										)
											$.lineRangeMapping.original.isEmpty ||
												s.push({
													range: $.lineRangeMapping.original.toInclusiveRange(),
													options: C.$Txb,
												}),
												$.lineRangeMapping.modified.isEmpty ||
													l.push({
														range:
															$.lineRangeMapping.modified.toInclusiveRange(),
														options: C.$Qxb,
													});
										else {
											const v =
												this.c.useTrueInlineDiffRendering.read(n) &&
												(0, w.$4xb)($.lineRangeMapping);
											for (const S of $.lineRangeMapping.innerChanges || [])
												if (
													($.lineRangeMapping.original.contains(
														S.originalRange.startLineNumber,
													) &&
														s.push({
															range: S.originalRange,
															options:
																S.originalRange.isEmpty() && b
																	? C.$Uxb
																	: C.$Sxb,
														}),
													$.lineRangeMapping.modified.contains(
														S.modifiedRange.startLineNumber,
													) &&
														l.push({
															range: S.modifiedRange,
															options:
																S.modifiedRange.isEmpty() && b && !v
																	? C.$Rxb
																	: C.$Pxb,
														}),
													v)
												) {
													const I = g.model.original.getValueInRange(
														S.originalRange,
													);
													l.push({
														range: S.modifiedRange,
														options: {
															description: "deleted-text",
															before: {
																content: I,
																inlineClassName: "inline-deleted-text",
															},
															zIndex: 1e5,
															showIfCollapsed: !0,
														},
													});
												}
										}
								if (o)
									for (const $ of o.changes) {
										const v = $.original.toInclusiveRange();
										v && s.push({ range: v, options: f ? C.$Mxb : C.$Oxb });
										const S = $.modified.toInclusiveRange();
										S && l.push({ range: S, options: f ? C.$Lxb : C.$Nxb });
										for (const I of $.innerChanges || [])
											s.push({ range: I.originalRange, options: C.$Sxb }),
												l.push({ range: I.modifiedRange, options: C.$Pxb });
									}
								const y = this.b.read(n).activeMovedText.read(n);
								for (const $ of p.movedTexts)
									s.push({
										range: $.lineRangeMapping.original.toInclusiveRange(),
										options: {
											description: "moved",
											blockClassName:
												"movedOriginal" + ($ === y ? " currentMove" : ""),
											blockPadding: [
												E.$cyb.movedCodeBlockPadding,
												0,
												E.$cyb.movedCodeBlockPadding,
												E.$cyb.movedCodeBlockPadding,
											],
										},
									}),
										l.push({
											range: $.lineRangeMapping.modified.toInclusiveRange(),
											options: {
												description: "moved",
												blockClassName:
													"movedModified" + ($ === y ? " currentMove" : ""),
												blockPadding: [4, 0, 4, 4],
											},
										});
								return { originalDecorations: s, modifiedDecorations: l };
							})),
							this.D(
								(0, d.$xwb)(
									this.a.original,
									this.f.map((n) => n?.originalDecorations || []),
								),
							),
							this.D(
								(0, d.$xwb)(
									this.a.modified,
									this.f.map((n) => n?.modifiedDecorations || []),
								),
							);
					}
				}
				e.$dyb = m;
			},
		),
		define(
			de[1680],
			he([1, 0, 77, 457, 210, 1216, 1525, 38, 91]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6xb = void 0);
				let r = class {
					get editorOptions() {
						return this.a;
					}
					constructor(g, p) {
						(this.d = p),
							(this.b = (0, t.observableValue)(this, 0)),
							(this.c = (0, t.observableFromEvent)(
								this,
								this.d.onDidChangeScreenReaderOptimized,
								() => this.d.isScreenReaderOptimized(),
							)),
							(this.couldShowInlineViewBecauseOfSize = (0, t.derived)(
								this,
								(f) =>
									this.a.read(f).renderSideBySide &&
									this.b.read(f) <=
										this.a.read(f).renderSideBySideInlineBreakpoint,
							)),
							(this.renderOverviewRuler = (0, t.derived)(
								this,
								(f) => this.a.read(f).renderOverviewRuler,
							)),
							(this.renderSideBySide = (0, t.derived)(this, (f) =>
								this.compactMode.read(f) && this.g.read(f)
									? !1
									: this.a.read(f).renderSideBySide &&
										!(
											this.a.read(f).useInlineViewWhenSpaceIsLimited &&
											this.couldShowInlineViewBecauseOfSize.read(f) &&
											!this.c.read(f)
										),
							)),
							(this.readOnly = (0, t.derived)(
								this,
								(f) => this.a.read(f).readOnly,
							)),
							(this.shouldRenderOldRevertArrows = (0, t.derived)(
								this,
								(f) =>
									!(
										!this.a.read(f).renderMarginRevertIcon ||
										!this.renderSideBySide.read(f) ||
										this.readOnly.read(f) ||
										this.shouldRenderGutterMenu.read(f)
									),
							)),
							(this.shouldRenderGutterMenu = (0, t.derived)(
								this,
								(f) => this.a.read(f).renderGutterMenu,
							)),
							(this.renderIndicators = (0, t.derived)(
								this,
								(f) => this.a.read(f).renderIndicators,
							)),
							(this.enableSplitViewResizing = (0, t.derived)(
								this,
								(f) => this.a.read(f).enableSplitViewResizing,
							)),
							(this.splitViewDefaultRatio = (0, t.derived)(
								this,
								(f) => this.a.read(f).splitViewDefaultRatio,
							)),
							(this.ignoreTrimWhitespace = (0, t.derived)(
								this,
								(f) => this.a.read(f).ignoreTrimWhitespace,
							)),
							(this.maxComputationTimeMs = (0, t.derived)(
								this,
								(f) => this.a.read(f).maxComputationTime,
							)),
							(this.showMoves = (0, t.derived)(
								this,
								(f) =>
									this.a.read(f).experimental.showMoves &&
									this.renderSideBySide.read(f),
							)),
							(this.isInEmbeddedEditor = (0, t.derived)(
								this,
								(f) => this.a.read(f).isInEmbeddedEditor,
							)),
							(this.diffWordWrap = (0, t.derived)(
								this,
								(f) => this.a.read(f).diffWordWrap,
							)),
							(this.originalEditable = (0, t.derived)(
								this,
								(f) => this.a.read(f).originalEditable,
							)),
							(this.diffCodeLens = (0, t.derived)(
								this,
								(f) => this.a.read(f).diffCodeLens,
							)),
							(this.accessibilityVerbose = (0, t.derived)(
								this,
								(f) => this.a.read(f).accessibilityVerbose,
							)),
							(this.diffAlgorithm = (0, t.derived)(
								this,
								(f) => this.a.read(f).diffAlgorithm,
							)),
							(this.showEmptyDecorations = (0, t.derived)(
								this,
								(f) => this.a.read(f).experimental.showEmptyDecorations,
							)),
							(this.onlyShowAccessibleDiffViewer = (0, t.derived)(
								this,
								(f) => this.a.read(f).onlyShowAccessibleDiffViewer,
							)),
							(this.compactMode = (0, t.derived)(
								this,
								(f) => this.a.read(f).compactMode,
							)),
							(this.e = (0, t.derived)(
								this,
								(f) => this.a.read(f).experimental.useTrueInlineView,
							)),
							(this.useTrueInlineDiffRendering = (0, t.derived)(
								this,
								(f) => !this.renderSideBySide.read(f) && this.e.read(f),
							)),
							(this.hideUnchangedRegions = (0, t.derived)(
								this,
								(f) => this.a.read(f).hideUnchangedRegions.enabled,
							)),
							(this.hideUnchangedRegionsRevealLineCount = (0, t.derived)(
								this,
								(f) => this.a.read(f).hideUnchangedRegions.revealLineCount,
							)),
							(this.hideUnchangedRegionsContextLineCount = (0, t.derived)(
								this,
								(f) => this.a.read(f).hideUnchangedRegions.contextLineCount,
							)),
							(this.hideUnchangedRegionsMinimumLineCount = (0, t.derived)(
								this,
								(f) => this.a.read(f).hideUnchangedRegions.minimumLineCount,
							)),
							(this.f = (0, t.observableValue)(this, void 0)),
							(this.g = this.f
								.map(this, (f) =>
									(0, i.$Pd)(this, (b) => {
										const s = f?.diff.read(b);
										return s ? u(s, this.e.read(b)) : void 0;
									}),
								)
								.flatten()
								.map(this, (f) => !!f)),
							(this.inlineViewHideOriginalLineNumbers = this.compactMode);
						const o = { ...g, ...c(g, C.$5xb) };
						this.a = (0, t.observableValue)(this, o);
					}
					updateOptions(g) {
						const p = c(g, this.a.get()),
							o = { ...this.a.get(), ...g, ...p };
						this.a.set(o, void 0, { changedOptions: g });
					}
					setWidth(g) {
						this.b.set(g, void 0);
					}
					setModel(g) {
						this.f.set(g, void 0);
					}
				};
				(e.$6xb = r), (e.$6xb = r = Ne([j(1, m.$XK)], r));
				function u(n, g) {
					return n.mappings.every(
						(p) =>
							a(p.lineRangeMapping) ||
							h(p.lineRangeMapping) ||
							(g && (0, E.$4xb)(p.lineRangeMapping)),
					);
				}
				function a(n) {
					return n.original.length === 0;
				}
				function h(n) {
					return n.modified.length === 0;
				}
				function c(n, g) {
					return {
						enableSplitViewResizing: (0, d.boolean)(
							n.enableSplitViewResizing,
							g.enableSplitViewResizing,
						),
						splitViewDefaultRatio: (0, d.clampedFloat)(
							n.splitViewDefaultRatio,
							0.5,
							0.1,
							0.9,
						),
						renderSideBySide: (0, d.boolean)(
							n.renderSideBySide,
							g.renderSideBySide,
						),
						renderMarginRevertIcon: (0, d.boolean)(
							n.renderMarginRevertIcon,
							g.renderMarginRevertIcon,
						),
						maxComputationTime: (0, d.clampedInt)(
							n.maxComputationTime,
							g.maxComputationTime,
							0,
							w.Constants.MAX_SAFE_SMALL_INTEGER,
						),
						maxFileSize: (0, d.clampedInt)(
							n.maxFileSize,
							g.maxFileSize,
							0,
							w.Constants.MAX_SAFE_SMALL_INTEGER,
						),
						ignoreTrimWhitespace: (0, d.boolean)(
							n.ignoreTrimWhitespace,
							g.ignoreTrimWhitespace,
						),
						renderIndicators: (0, d.boolean)(
							n.renderIndicators,
							g.renderIndicators,
						),
						originalEditable: (0, d.boolean)(
							n.originalEditable,
							g.originalEditable,
						),
						diffCodeLens: (0, d.boolean)(n.diffCodeLens, g.diffCodeLens),
						renderOverviewRuler: (0, d.boolean)(
							n.renderOverviewRuler,
							g.renderOverviewRuler,
						),
						diffWordWrap: (0, d.stringSet)(n.diffWordWrap, g.diffWordWrap, [
							"off",
							"on",
							"inherit",
						]),
						diffAlgorithm: (0, d.stringSet)(
							n.diffAlgorithm,
							g.diffAlgorithm,
							["legacy", "advanced"],
							{ smart: "legacy", experimental: "advanced" },
						),
						accessibilityVerbose: (0, d.boolean)(
							n.accessibilityVerbose,
							g.accessibilityVerbose,
						),
						experimental: {
							showMoves: (0, d.boolean)(
								n.experimental?.showMoves,
								g.experimental.showMoves,
							),
							showEmptyDecorations: (0, d.boolean)(
								n.experimental?.showEmptyDecorations,
								g.experimental.showEmptyDecorations,
							),
							useTrueInlineView: (0, d.boolean)(
								n.experimental?.useTrueInlineView,
								g.experimental.useTrueInlineView,
							),
						},
						hideUnchangedRegions: {
							enabled: (0, d.boolean)(
								n.hideUnchangedRegions?.enabled ??
									n.experimental?.collapseUnchangedRegions,
								g.hideUnchangedRegions.enabled,
							),
							contextLineCount: (0, d.clampedInt)(
								n.hideUnchangedRegions?.contextLineCount,
								g.hideUnchangedRegions.contextLineCount,
								0,
								w.Constants.MAX_SAFE_SMALL_INTEGER,
							),
							minimumLineCount: (0, d.clampedInt)(
								n.hideUnchangedRegions?.minimumLineCount,
								g.hideUnchangedRegions.minimumLineCount,
								0,
								w.Constants.MAX_SAFE_SMALL_INTEGER,
							),
							revealLineCount: (0, d.clampedInt)(
								n.hideUnchangedRegions?.revealLineCount,
								g.hideUnchangedRegions.revealLineCount,
								0,
								w.Constants.MAX_SAFE_SMALL_INTEGER,
							),
						},
						isInEmbeddedEditor: (0, d.boolean)(
							n.isInEmbeddedEditor,
							g.isInEmbeddedEditor,
						),
						onlyShowAccessibleDiffViewer: (0, d.boolean)(
							n.onlyShowAccessibleDiffViewer,
							g.onlyShowAccessibleDiffViewer,
						),
						renderSideBySideInlineBreakpoint: (0, d.clampedInt)(
							n.renderSideBySideInlineBreakpoint,
							g.renderSideBySideInlineBreakpoint,
							0,
							w.Constants.MAX_SAFE_SMALL_INTEGER,
						),
						useInlineViewWhenSpaceIsLimited: (0, d.boolean)(
							n.useInlineViewWhenSpaceIsLimited,
							g.useInlineViewWhenSpaceIsLimited,
						),
						renderGutterMenu: (0, d.boolean)(
							n.renderGutterMenu,
							g.renderGutterMenu,
						),
						compactMode: (0, d.boolean)(n.compactMode, g.compactMode),
					};
				}
			},
		),
		define(
			de[1681],
			he([1, 0, 3, 77, 457, 1680, 954, 370, 67, 5]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Gnc = e.$Fnc = void 0);
				class u extends t.$1c {
					async waitForDiffs() {
						for (const c of this.items.get())
							await c.diffEditorViewModel.waitForDiff();
					}
					collapseAll() {
						(0, i.transaction)((c) => {
							for (const n of this.items.get()) n.collapsed.set(!0, c);
						});
					}
					expandAll() {
						(0, i.transaction)((c) => {
							for (const n of this.items.get()) n.collapsed.set(!1, c);
						});
					}
					get contextKeys() {
						return this.model.contextKeys;
					}
					constructor(c, n) {
						super(),
							(this.model = c),
							(this.b = n),
							(this.a = (0, w.$Nd)(this.model, this.model.documents)),
							(this.items = (0, w.$Ld)(this, this.a, (g, p) =>
								p.add(this.b.createInstance(a, g, this)),
							).recomputeInitiallyAndOnChange(this.B)),
							(this.focusedDiffItem = (0, i.derived)(this, (g) =>
								this.items.read(g).find((p) => p.isFocused.read(g)),
							)),
							(this.activeDiffItem = (0, w.$Kd)(
								this,
								(g, p) => this.focusedDiffItem.read(g) ?? p,
							));
					}
				}
				e.$Fnc = u;
				let a = class extends t.$1c {
					get diffEditorViewModel() {
						return this.diffEditorViewModelRef.object;
					}
					get originalUri() {
						return this.documentDiffItem.original?.uri;
					}
					get modifiedUri() {
						return this.documentDiffItem.modified?.uri;
					}
					setIsFocused(c, n) {
						this.a.set(c, n);
					}
					get documentDiffItem() {
						return this.b.object;
					}
					constructor(c, n, g, p) {
						super(),
							(this.c = n),
							(this.f = g),
							(this.g = p),
							(this.collapsed = (0, i.observableValue)(this, !1)),
							(this.lastTemplateData = (0, i.observableValue)(this, {
								contentHeight: 500,
								selections: void 0,
							})),
							(this.isActive = (0, i.derived)(
								this,
								(y) => this.c.activeDiffItem.read(y) === this,
							)),
							(this.a = (0, i.observableValue)(this, (0, w.$wd)(!1))),
							(this.isFocused = (0, i.derived)(this, (y) =>
								this.a.read(y).read(y),
							)),
							(this.isAlive = (0, i.observableValue)(this, !0)),
							this.D(
								(0, t.$Yc)(() => {
									this.isAlive.set(!1, void 0);
								}),
							),
							(this.b = this.D(c.createNewRef(this)));
						function o(y) {
							return { ...y, hideUnchangedRegions: { enabled: !0 } };
						}
						const f = this.f.createInstance(
							E.$6xb,
							o(this.documentDiffItem.options || {}),
						);
						this.documentDiffItem.onOptionsDidChange &&
							this.D(
								this.documentDiffItem.onOptionsDidChange(() => {
									f.updateOptions(o(this.documentDiffItem.options || {}));
								}),
							);
						const b = new t.$Zc(),
							s =
								this.documentDiffItem.original ??
								b.add(this.g.createModel("", null)),
							l =
								this.documentDiffItem.modified ??
								b.add(this.g.createModel("", null));
						b.add(this.b.createNewRef(this)),
							(this.diffEditorViewModelRef = this.D(
								d.$Lwb.createWithDisposable(
									this.f.createInstance(
										C.$7xb,
										{ original: s, modified: l },
										f,
									),
									b,
									this,
								),
							));
					}
					getKey() {
						return JSON.stringify([
							this.originalUri?.toString(),
							this.modifiedUri?.toString(),
						]);
					}
				};
				(e.$Gnc = a), (e.$Gnc = a = Ne([j(2, r.$Li), j(3, m.$QO)], a));
			},
		),
		define(
			de[960],
			he([
				1, 0, 6, 3, 12, 188, 17, 64, 122, 910, 172, 125, 10, 155, 136, 780, 23,
				82, 5,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1Mb = e.$ZMb = void 0),
					(w = mt(w));
				function s(I) {
					return I.toString();
				}
				class l {
					constructor(T, P, k) {
						(this.model = T),
							(this.c = new i.$Zc()),
							(this.model = T),
							this.c.add(T.onWillDispose(() => P(T))),
							this.c.add(T.onDidChangeLanguage((L) => k(T, L)));
					}
					dispose() {
						this.c.dispose();
					}
				}
				const y =
					w.$n || w.$m ? d.DefaultEndOfLine.LF : d.DefaultEndOfLine.CRLF;
				class $ {
					constructor(T, P, k, L, D, M, N, A) {
						(this.uri = T),
							(this.initialUndoRedoSnapshot = P),
							(this.time = k),
							(this.sharesUndoRedoStack = L),
							(this.heapSize = D),
							(this.sha1 = M),
							(this.versionId = N),
							(this.alternativeVersionId = A);
					}
				}
				let v = class extends i.$1c {
					static {
						b = this;
					}
					static {
						this.MAX_MEMORY_FOR_CLOSED_FILES_UNDO_STACK = 20 * 1024 * 1024;
					}
					constructor(T, P, k, L) {
						super(),
							(this.q = T),
							(this.r = P),
							(this.s = k),
							(this.t = L),
							(this.c = this.D(new t.$re())),
							(this.onModelAdded = this.c.event),
							(this.f = this.D(new t.$re())),
							(this.onModelRemoved = this.f.event),
							(this.g = this.D(new t.$re())),
							(this.onModelLanguageChanged = this.g.event),
							(this.h = Object.create(null)),
							(this.j = {}),
							(this.m = new Map()),
							(this.n = 0),
							this.D(this.q.onDidChangeConfiguration((D) => this.z(D))),
							this.z(void 0);
					}
					static u(T, P) {
						let k = r.$RK.tabSize;
						if (T.editor && typeof T.editor.tabSize < "u") {
							const U = parseInt(T.editor.tabSize, 10);
							isNaN(U) || (k = U), k < 1 && (k = 1);
						}
						let L = "tabSize";
						if (
							T.editor &&
							typeof T.editor.indentSize < "u" &&
							T.editor.indentSize !== "tabSize"
						) {
							const U = parseInt(T.editor.indentSize, 10);
							isNaN(U) || (L = Math.max(U, 1));
						}
						let D = r.$RK.insertSpaces;
						T.editor &&
							typeof T.editor.insertSpaces < "u" &&
							(D =
								T.editor.insertSpaces === "false"
									? !1
									: !!T.editor.insertSpaces);
						let M = y;
						const N = T.eol;
						N ===
						`\r
`
							? (M = d.DefaultEndOfLine.CRLF)
							: N ===
									`
` && (M = d.DefaultEndOfLine.LF);
						let A = r.$RK.trimAutoWhitespace;
						T.editor &&
							typeof T.editor.trimAutoWhitespace < "u" &&
							(A =
								T.editor.trimAutoWhitespace === "false"
									? !1
									: !!T.editor.trimAutoWhitespace);
						let R = r.$RK.detectIndentation;
						T.editor &&
							typeof T.editor.detectIndentation < "u" &&
							(R =
								T.editor.detectIndentation === "false"
									? !1
									: !!T.editor.detectIndentation);
						let O = r.$RK.largeFileOptimizations;
						T.editor &&
							typeof T.editor.largeFileOptimizations < "u" &&
							(O =
								T.editor.largeFileOptimizations === "false"
									? !1
									: !!T.editor.largeFileOptimizations);
						let B = r.$RK.bracketPairColorizationOptions;
						return (
							T.editor?.bracketPairColorization &&
								typeof T.editor.bracketPairColorization == "object" &&
								(B = {
									enabled: !!T.editor.bracketPairColorization.enabled,
									independentColorPoolPerBracketType:
										!!T.editor.bracketPairColorization
											.independentColorPoolPerBracketType,
								}),
							{
								isForSimpleWidget: P,
								tabSize: k,
								indentSize: L,
								insertSpaces: D,
								detectIndentation: R,
								defaultEOL: M,
								trimAutoWhitespace: A,
								largeFileOptimizations: O,
								bracketPairColorizationOptions: B,
							}
						);
					}
					w(T, P) {
						if (T) return this.r.getEOL(T, P);
						const k = this.q.getValue("files.eol", { overrideIdentifier: P });
						return k && typeof k == "string" && k !== "auto"
							? k
							: w.OS === w.OperatingSystem.Linux ||
									w.OS === w.OperatingSystem.Macintosh
								? `
`
								: `\r
`;
					}
					y() {
						const T = this.q.getValue("files.restoreUndoStack");
						return typeof T == "boolean" ? T : !0;
					}
					getCreationOptions(T, P, k) {
						const L = typeof T == "string" ? T : T.languageId;
						let D = this.h[L + P];
						if (!D) {
							const M = this.q.getValue("editor", {
									overrideIdentifier: L,
									resource: P,
								}),
								N = this.w(P, L);
							(D = b.u({ editor: M, eol: N }, k)), (this.h[L + P] = D);
						}
						return D;
					}
					z(T) {
						const P = this.h;
						this.h = Object.create(null);
						const k = Object.keys(this.j);
						for (let L = 0, D = k.length; L < D; L++) {
							const M = k[L],
								N = this.j[M],
								A = N.model.getLanguageId(),
								R = N.model.uri;
							if (
								T &&
								!T.affectsConfiguration("editor", {
									overrideIdentifier: A,
									resource: R,
								}) &&
								!T.affectsConfiguration("files.eol", {
									overrideIdentifier: A,
									resource: R,
								})
							)
								continue;
							const O = P[A + R],
								B = this.getCreationOptions(A, R, N.model.isForSimpleWidget);
							b.C(N.model, B, O);
						}
					}
					static C(T, P, k) {
						k &&
							k.defaultEOL !== P.defaultEOL &&
							T.getLineCount() === 1 &&
							T.setEOL(
								P.defaultEOL === d.DefaultEndOfLine.LF
									? d.EndOfLineSequence.LF
									: d.EndOfLineSequence.CRLF,
							),
							!(
								k &&
								k.detectIndentation === P.detectIndentation &&
								k.insertSpaces === P.insertSpaces &&
								k.tabSize === P.tabSize &&
								k.indentSize === P.indentSize &&
								k.trimAutoWhitespace === P.trimAutoWhitespace &&
								(0, o.$zo)(
									k.bracketPairColorizationOptions,
									P.bracketPairColorizationOptions,
								)
							) &&
								(P.detectIndentation
									? (T.detectIndentation(P.insertSpaces, P.tabSize),
										T.updateOptions({
											trimAutoWhitespace: P.trimAutoWhitespace,
											bracketColorizationOptions:
												P.bracketPairColorizationOptions,
										}))
									: T.updateOptions({
											insertSpaces: P.insertSpaces,
											tabSize: P.tabSize,
											indentSize: P.indentSize,
											trimAutoWhitespace: P.trimAutoWhitespace,
											bracketColorizationOptions:
												P.bracketPairColorizationOptions,
										}));
					}
					F(T) {
						this.m.set(s(T.uri), T), (this.n += T.heapSize);
					}
					G(T) {
						const P = this.m.get(s(T));
						return P && (this.n -= P.heapSize), this.m.delete(s(T)), P;
					}
					H(T) {
						if (this.n > T) {
							const P = [];
							for (
								this.m.forEach((k) => {
									k.sharesUndoRedoStack || P.push(k);
								}),
									P.sort((k, L) => k.time - L.time);
								P.length > 0 && this.n > T;
							) {
								const k = P.shift();
								this.G(k.uri),
									k.initialUndoRedoSnapshot !== null &&
										this.s.restoreSnapshot(k.initialUndoRedoSnapshot);
							}
						}
					}
					I(T, P, k, L) {
						const D = this.getCreationOptions(P, k, L),
							M = this.t.createInstance(m.$$X, T, P, D, k);
						if (k && this.m.has(s(k))) {
							const R = this.G(k),
								O = this.s.getElements(k),
								B = this.P(),
								U = B.canComputeSHA1(M) ? B.computeSHA1(M) === R.sha1 : !1;
							if (U || R.sharesUndoRedoStack) {
								for (const z of O.past)
									(0, g.$yU)(z) && z.matchesResource(k) && z.setModel(M);
								for (const z of O.future)
									(0, g.$yU)(z) && z.matchesResource(k) && z.setModel(M);
								this.s.setElementsValidFlag(
									k,
									!0,
									(z) => (0, g.$yU)(z) && z.matchesResource(k),
								),
									U &&
										(M._overwriteVersionId(R.versionId),
										M._overwriteAlternativeVersionId(R.alternativeVersionId),
										M._overwriteInitialUndoRedoSnapshot(
											R.initialUndoRedoSnapshot,
										));
							} else
								R.initialUndoRedoSnapshot !== null &&
									this.s.restoreSnapshot(R.initialUndoRedoSnapshot);
						}
						const N = s(M.uri);
						if (this.j[N])
							throw new Error(
								"ModelService: Cannot add model because it already exists!",
							);
						const A = new l(
							M,
							(R) => this.N(R),
							(R, O) => this.O(R, O),
						);
						return (this.j[N] = A), A;
					}
					updateModel(T, P) {
						const k = this.getCreationOptions(
								T.getLanguageId(),
								T.uri,
								T.isForSimpleWidget,
							),
							{ textBuffer: L, disposable: D } = (0, m.$0X)(P, k.defaultEOL);
						if (T.equalsTextBuffer(L)) {
							D.dispose();
							return;
						}
						T.pushStackElement(),
							T.pushEOL(
								L.getEOL() ===
									`\r
`
									? d.EndOfLineSequence.CRLF
									: d.EndOfLineSequence.LF,
							),
							T.pushEditOperations([], b._computeEdits(T, L), () => []),
							T.pushStackElement(),
							D.dispose();
					}
					static J(T, P, k, L, D, M) {
						const N = Math.min(P, D);
						let A = 0;
						for (
							let R = 0;
							R < N && T.getLineContent(k + R) === L.getLineContent(M + R);
							R++
						)
							A++;
						return A;
					}
					static L(T, P, k, L, D, M) {
						const N = Math.min(P, D);
						let A = 0;
						for (
							let R = 0;
							R < N &&
							T.getLineContent(k + P - R) === L.getLineContent(M + D - R);
							R++
						)
							A++;
						return A;
					}
					static _computeEdits(T, P) {
						const k = T.getLineCount(),
							L = P.getLineCount(),
							D = this.J(T, k, 1, P, L, 1);
						if (k === L && D === k) return [];
						const M = this.L(T, k - D, D, P, L - D, D);
						let N, A;
						return (
							M > 0
								? ((N = new C.$iL(D + 1, 1, k - M + 1, 1)),
									(A = new C.$iL(D + 1, 1, L - M + 1, 1)))
								: D > 0
									? ((N = new C.$iL(
											D,
											T.getLineMaxColumn(D),
											k,
											T.getLineMaxColumn(k),
										)),
										(A = new C.$iL(
											D,
											1 + P.getLineLength(D),
											L,
											1 + P.getLineLength(L),
										)))
									: ((N = new C.$iL(1, 1, k, T.getLineMaxColumn(k))),
										(A = new C.$iL(1, 1, L, 1 + P.getLineLength(L)))),
							[
								E.$jL.replaceMove(
									N,
									P.getValueInRange(A, d.EndOfLinePreference.TextDefined),
								),
							]
						);
					}
					createModel(T, P, k, L = !1) {
						let D;
						return (
							P ? (D = this.I(T, P, k, L)) : (D = this.I(T, u.$0M, k, L)),
							this.c.fire(D.model),
							D.model
						);
					}
					destroyModel(T) {
						const P = this.j[s(T)];
						P && P.model.dispose();
					}
					getModels() {
						const T = [],
							P = Object.keys(this.j);
						for (let k = 0, L = P.length; k < L; k++) {
							const D = P[k];
							T.push(this.j[D].model);
						}
						return T;
					}
					getModel(T) {
						const P = s(T),
							k = this.j[P];
						return k ? k.model : null;
					}
					M(T) {
						return (
							T.scheme === p.Schemas.file ||
							T.scheme === p.Schemas.vscodeRemote ||
							T.scheme === p.Schemas.vscodeUserData ||
							T.scheme === p.Schemas.vscodeNotebookCell ||
							T.scheme === "fake-fs"
						);
					}
					N(T) {
						const P = s(T.uri),
							k = this.j[P],
							L = this.s.getUriComparisonKey(T.uri) !== T.uri.toString();
						let D = !1,
							M = 0;
						if (L || (this.y() && this.M(T.uri))) {
							const R = this.s.getElements(T.uri);
							if (R.past.length > 0 || R.future.length > 0) {
								for (const O of R.past)
									(0, g.$yU)(O) &&
										O.matchesResource(T.uri) &&
										((D = !0), (M += O.heapSize(T.uri)), O.setModel(T.uri));
								for (const O of R.future)
									(0, g.$yU)(O) &&
										O.matchesResource(T.uri) &&
										((D = !0), (M += O.heapSize(T.uri)), O.setModel(T.uri));
							}
						}
						const N = b.MAX_MEMORY_FOR_CLOSED_FILES_UNDO_STACK,
							A = this.P();
						if (D)
							if (!L && (M > N || !A.canComputeSHA1(T))) {
								const R = k.model.getInitialUndoRedoSnapshot();
								R !== null && this.s.restoreSnapshot(R);
							} else
								this.H(N - M),
									this.s.setElementsValidFlag(
										T.uri,
										!1,
										(R) => (0, g.$yU)(R) && R.matchesResource(T.uri),
									),
									this.F(
										new $(
											T.uri,
											k.model.getInitialUndoRedoSnapshot(),
											Date.now(),
											L,
											M,
											A.computeSHA1(T),
											T.getVersionId(),
											T.getAlternativeVersionId(),
										),
									);
						else if (!L) {
							const R = k.model.getInitialUndoRedoSnapshot();
							R !== null && this.s.restoreSnapshot(R);
						}
						delete this.j[P],
							k.dispose(),
							delete this.h[T.getLanguageId() + T.uri],
							this.f.fire(T);
					}
					O(T, P) {
						const k = P.oldLanguage,
							L = T.getLanguageId(),
							D = this.getCreationOptions(k, T.uri, T.isForSimpleWidget),
							M = this.getCreationOptions(L, T.uri, T.isForSimpleWidget);
						b.C(T, M, D), this.g.fire({ model: T, oldLanguageId: k });
					}
					P() {
						return new S();
					}
				};
				(e.$ZMb = v),
					(e.$ZMb =
						v =
						b =
							Ne([j(0, h.$gj), j(1, a.$YO), j(2, c.$GN), j(3, f.$Li)], v));
				class S {
					static {
						this.MAX_MODEL_SIZE = 10 * 1024 * 1024;
					}
					canComputeSHA1(T) {
						return T.getValueLength() <= S.MAX_MODEL_SIZE;
					}
					computeSHA1(T) {
						const P = new n.$Gj(),
							k = T.createSnapshot();
						let L;
						for (; (L = k.read()); ) P.update(L);
						return P.digest();
					}
				}
				e.$1Mb = S;
			},
		),
		define(
			de[2903],
			he([1, 0, 24, 48, 17, 64, 1150, 122, 590, 493, 2766, 589, 290]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kwb = e.$jwb = void 0),
					(t = mt(t)),
					(r = mt(r));
				class c {
					constructor(y, $, v, S, I, T, P, k, L, D) {
						(this.c = y),
							(this.d = $),
							(this.e = -1),
							(this.f = v),
							(this.h = S),
							(this.k = I),
							(this.l = T),
							(this.q = P),
							(this.m = k),
							(this.n = L),
							(this.o = D),
							this.w(!0, null);
					}
					dispose() {
						this.v = this.d.deltaDecorations(this.v, []);
					}
					createCoordinatesConverter() {
						return new o(this);
					}
					w(y, $) {
						(this.s = []), y && (this.v = this.d.deltaDecorations(this.v, []));
						const v = this.d.getLinesContent(),
							S = this.d.getInjectedTextDecorations(this.c),
							I = v.length,
							T = this.createLineBreaksComputer(),
							P = new t.$cc(m.$uN.fromDecorations(S));
						for (let O = 0; O < I; O++) {
							const B = P.takeWhile((U) => U.lineNumber === O + 1);
							T.addRequest(v[O], B, $ ? $[O] : null);
						}
						const k = T.finalize(),
							L = [],
							D = this.v
								.map((O) => this.d.getDecorationRange(O))
								.sort(w.$iL.compareRangesUsingStarts);
						let M = 1,
							N = 0,
							A = -1,
							R = A + 1 < D.length ? N + 1 : I + 2;
						for (let O = 0; O < I; O++) {
							const B = O + 1;
							B === R &&
								(A++,
								(M = D[A].startLineNumber),
								(N = D[A].endLineNumber),
								(R = A + 1 < D.length ? N + 1 : I + 2));
							const U = B >= M && B <= N,
								z = (0, u.$iwb)(k[O], !U);
							(L[O] = z.getViewLineCount()), (this.s[O] = z);
						}
						(this.e = this.d.getVersionId()), (this.u = new a.$XN(L));
					}
					getHiddenAreas() {
						return this.v.map((y) => this.d.getDecorationRange(y));
					}
					setHiddenAreas(y) {
						const $ = y.map((N) => this.d.validateRange(N)),
							v = n($),
							S = this.v
								.map((N) => this.d.getDecorationRange(N))
								.sort(w.$iL.compareRangesUsingStarts);
						if (v.length === S.length) {
							let N = !1;
							for (let A = 0; A < v.length; A++)
								if (!v[A].equalsRange(S[A])) {
									N = !0;
									break;
								}
							if (!N) return !1;
						}
						const I = v.map((N) => ({ range: N, options: d.$eY.EMPTY }));
						this.v = this.d.deltaDecorations(this.v, I);
						const T = v;
						let P = 1,
							k = 0,
							L = -1,
							D = L + 1 < T.length ? k + 1 : this.s.length + 2,
							M = !1;
						for (let N = 0; N < this.s.length; N++) {
							const A = N + 1;
							A === D &&
								(L++,
								(P = T[L].startLineNumber),
								(k = T[L].endLineNumber),
								(D = L + 1 < T.length ? k + 1 : this.s.length + 2));
							let R = !1;
							if (
								(A >= P && A <= k
									? this.s[N].isVisible() &&
										((this.s[N] = this.s[N].setVisible(!1)), (R = !0))
									: ((M = !0),
										this.s[N].isVisible() ||
											((this.s[N] = this.s[N].setVisible(!0)), (R = !0))),
								R)
							) {
								const O = this.s[N].getViewLineCount();
								this.u.setValue(N, O);
							}
						}
						return M || this.setHiddenAreas([]), !0;
					}
					modelPositionIsVisible(y, $) {
						return y < 1 || y > this.s.length ? !1 : this.s[y - 1].isVisible();
					}
					getModelLineViewLineCount(y) {
						return y < 1 || y > this.s.length
							? 1
							: this.s[y - 1].getViewLineCount();
					}
					setTabSize(y) {
						return this.l === y ? !1 : ((this.l = y), this.w(!1, null), !0);
					}
					setWrappingSettings(y, $, v, S, I) {
						const T = this.k.equals(y),
							P = this.q === $,
							k = this.m === v,
							L = this.n === S,
							D = this.o === I;
						if (T && P && k && L && D) return !1;
						const M = T && P && !k && L && D;
						(this.k = y),
							(this.q = $),
							(this.m = v),
							(this.n = S),
							(this.o = I);
						let N = null;
						if (M) {
							N = [];
							for (let A = 0, R = this.s.length; A < R; A++)
								N[A] = this.s[A].getProjectionData();
						}
						return this.w(!1, N), !0;
					}
					createLineBreaksComputer() {
						return (
							this.q === "advanced" ? this.f : this.h
						).createLineBreaksComputer(this.k, this.l, this.m, this.n, this.o);
					}
					onModelFlushed() {
						this.w(!0, null);
					}
					onModelLinesDeleted(y, $, v) {
						if (!y || y <= this.e) return null;
						const S = $ === 1 ? 1 : this.u.getPrefixSum($ - 1) + 1,
							I = this.u.getPrefixSum(v);
						return (
							this.s.splice($ - 1, v - $ + 1),
							this.u.removeValues($ - 1, v - $ + 1),
							new r.$Psb(S, I)
						);
					}
					onModelLinesInserted(y, $, v, S) {
						if (!y || y <= this.e) return null;
						const I = $ > 2 && !this.s[$ - 2].isVisible(),
							T = $ === 1 ? 1 : this.u.getPrefixSum($ - 1) + 1;
						let P = 0;
						const k = [],
							L = [];
						for (let D = 0, M = S.length; D < M; D++) {
							const N = (0, u.$iwb)(S[D], !I);
							k.push(N);
							const A = N.getViewLineCount();
							(P += A), (L[D] = A);
						}
						return (
							(this.s = this.s
								.slice(0, $ - 1)
								.concat(k)
								.concat(this.s.slice($ - 1))),
							this.u.insertValues($ - 1, L),
							new r.$Qsb(T, T + P - 1)
						);
					}
					onModelLineChanged(y, $, v) {
						if (y !== null && y <= this.e) return [!1, null, null, null];
						const S = $ - 1,
							I = this.s[S].getViewLineCount(),
							T = this.s[S].isVisible(),
							P = (0, u.$iwb)(v, T);
						this.s[S] = P;
						const k = this.s[S].getViewLineCount();
						let L = !1,
							D = 0,
							M = -1,
							N = 0,
							A = -1,
							R = 0,
							O = -1;
						I > k
							? ((D = this.u.getPrefixSum($ - 1) + 1),
								(M = D + k - 1),
								(R = M + 1),
								(O = R + (I - k) - 1),
								(L = !0))
							: I < k
								? ((D = this.u.getPrefixSum($ - 1) + 1),
									(M = D + I - 1),
									(N = M + 1),
									(A = N + (k - I) - 1),
									(L = !0))
								: ((D = this.u.getPrefixSum($ - 1) + 1), (M = D + k - 1)),
							this.u.setValue(S, k);
						const B = D <= M ? new r.$Osb(D, M - D + 1) : null,
							U = N <= A ? new r.$Qsb(N, A) : null,
							z = R <= O ? new r.$Psb(R, O) : null;
						return [L, B, U, z];
					}
					acceptVersionId(y) {
						(this.e = y),
							this.s.length === 1 &&
								!this.s[0].isVisible() &&
								this.setHiddenAreas([]);
					}
					getViewLineCount() {
						return this.u.getTotalSum();
					}
					x(y) {
						if (y < 1) return 1;
						const $ = this.getViewLineCount();
						return y > $ ? $ : y | 0;
					}
					getActiveIndentGuide(y, $, v) {
						(y = this.x(y)), ($ = this.x($)), (v = this.x(v));
						const S = this.convertViewPositionToModelPosition(
								y,
								this.getViewLineMinColumn(y),
							),
							I = this.convertViewPositionToModelPosition(
								$,
								this.getViewLineMinColumn($),
							),
							T = this.convertViewPositionToModelPosition(
								v,
								this.getViewLineMinColumn(v),
							),
							P = this.d.guides.getActiveIndentGuide(
								S.lineNumber,
								I.lineNumber,
								T.lineNumber,
							),
							k = this.convertModelPositionToViewPosition(P.startLineNumber, 1),
							L = this.convertModelPositionToViewPosition(
								P.endLineNumber,
								this.d.getLineMaxColumn(P.endLineNumber),
							);
						return {
							startLineNumber: k.lineNumber,
							endLineNumber: L.lineNumber,
							indent: P.indent,
						};
					}
					y(y) {
						y = this.x(y);
						const $ = this.u.getIndexOf(y - 1),
							v = $.index,
							S = $.remainder;
						return new g(v + 1, S);
					}
					z(y) {
						return this.s[y.modelLineNumber - 1].getViewLineMinColumn(
							this.d,
							y.modelLineNumber,
							y.modelLineWrappedLineIdx,
						);
					}
					A(y) {
						return this.s[y.modelLineNumber - 1].getViewLineMaxColumn(
							this.d,
							y.modelLineNumber,
							y.modelLineWrappedLineIdx,
						);
					}
					B(y) {
						const $ = this.s[y.modelLineNumber - 1],
							v = $.getViewLineMinColumn(
								this.d,
								y.modelLineNumber,
								y.modelLineWrappedLineIdx,
							),
							S = $.getModelColumnOfViewPosition(y.modelLineWrappedLineIdx, v);
						return new i.$hL(y.modelLineNumber, S);
					}
					C(y) {
						const $ = this.s[y.modelLineNumber - 1],
							v = $.getViewLineMaxColumn(
								this.d,
								y.modelLineNumber,
								y.modelLineWrappedLineIdx,
							),
							S = $.getModelColumnOfViewPosition(y.modelLineWrappedLineIdx, v);
						return new i.$hL(y.modelLineNumber, S);
					}
					D(y, $) {
						const v = this.y(y),
							S = this.y($),
							I = new Array();
						let T = this.B(v),
							P = new Array();
						for (let k = v.modelLineNumber; k <= S.modelLineNumber; k++) {
							const L = this.s[k - 1];
							if (L.isVisible()) {
								const D =
										k === v.modelLineNumber ? v.modelLineWrappedLineIdx : 0,
									M =
										k === S.modelLineNumber
											? S.modelLineWrappedLineIdx + 1
											: L.getViewLineCount();
								for (let N = D; N < M; N++) P.push(new g(k, N));
							}
							if (!L.isVisible() && T) {
								const D = new i.$hL(k - 1, this.d.getLineMaxColumn(k - 1) + 1),
									M = w.$iL.fromPositions(T, D);
								I.push(new p(M, P)), (P = []), (T = null);
							} else L.isVisible() && !T && (T = new i.$hL(k, 1));
						}
						if (T) {
							const k = w.$iL.fromPositions(T, this.C(S));
							I.push(new p(k, P));
						}
						return I;
					}
					getViewLinesBracketGuides(y, $, v, S) {
						const I = v
								? this.convertViewPositionToModelPosition(
										v.lineNumber,
										v.column,
									)
								: null,
							T = [];
						for (const P of this.D(y, $)) {
							const k = P.modelRange.startLineNumber,
								L = this.d.guides.getLinesBracketGuides(
									k,
									P.modelRange.endLineNumber,
									I,
									S,
								);
							for (const D of P.viewLines) {
								const N = L[D.modelLineNumber - k].map((A) => {
									if (
										(A.forWrappedLinesAfterColumn !== -1 &&
											this.s[
												D.modelLineNumber - 1
											].getViewPositionOfModelPosition(
												0,
												A.forWrappedLinesAfterColumn,
											).lineNumber >= D.modelLineWrappedLineIdx) ||
										(A.forWrappedLinesBeforeOrAtColumn !== -1 &&
											this.s[
												D.modelLineNumber - 1
											].getViewPositionOfModelPosition(
												0,
												A.forWrappedLinesBeforeOrAtColumn,
											).lineNumber < D.modelLineWrappedLineIdx)
									)
										return;
									if (!A.horizontalLine) return A;
									let R = -1;
									if (A.column !== -1) {
										const U = this.s[
											D.modelLineNumber - 1
										].getViewPositionOfModelPosition(0, A.column);
										if (U.lineNumber === D.modelLineWrappedLineIdx)
											R = U.column;
										else if (U.lineNumber < D.modelLineWrappedLineIdx)
											R = this.z(D);
										else if (U.lineNumber > D.modelLineWrappedLineIdx) return;
									}
									const O = this.convertModelPositionToViewPosition(
											D.modelLineNumber,
											A.horizontalLine.endColumn,
										),
										B = this.s[
											D.modelLineNumber - 1
										].getViewPositionOfModelPosition(
											0,
											A.horizontalLine.endColumn,
										);
									return B.lineNumber === D.modelLineWrappedLineIdx
										? new C.$CN(
												A.visibleColumn,
												R,
												A.className,
												new C.$DN(A.horizontalLine.top, O.column),
												-1,
												-1,
											)
										: B.lineNumber < D.modelLineWrappedLineIdx ||
												A.visibleColumn !== -1
											? void 0
											: new C.$CN(
													A.visibleColumn,
													R,
													A.className,
													new C.$DN(A.horizontalLine.top, this.A(D)),
													-1,
													-1,
												);
								});
								T.push(N.filter((A) => !!A));
							}
						}
						return T;
					}
					getViewLinesIndentGuides(y, $) {
						(y = this.x(y)), ($ = this.x($));
						const v = this.convertViewPositionToModelPosition(
								y,
								this.getViewLineMinColumn(y),
							),
							S = this.convertViewPositionToModelPosition(
								$,
								this.getViewLineMaxColumn($),
							);
						let I = [];
						const T = [],
							P = [],
							k = v.lineNumber - 1,
							L = S.lineNumber - 1;
						let D = null;
						for (let R = k; R <= L; R++) {
							const O = this.s[R];
							if (O.isVisible()) {
								const B = O.getViewLineNumberOfModelPosition(
										0,
										R === k ? v.column : 1,
									),
									U = O.getViewLineNumberOfModelPosition(
										0,
										this.d.getLineMaxColumn(R + 1),
									),
									z = U - B + 1;
								let F = f.BlockNone;
								z > 1 &&
									O.getViewLineMinColumn(this.d, R + 1, U) === 1 &&
									(F = B === 0 ? f.BlockSubsequent : f.BlockAll),
									T.push(z),
									P.push(F),
									D === null && (D = new i.$hL(R + 1, 0));
							} else
								D !== null &&
									((I = I.concat(
										this.d.guides.getLinesIndentGuides(D.lineNumber, R),
									)),
									(D = null));
						}
						D !== null &&
							((I = I.concat(
								this.d.guides.getLinesIndentGuides(D.lineNumber, S.lineNumber),
							)),
							(D = null));
						const M = $ - y + 1,
							N = new Array(M);
						let A = 0;
						for (let R = 0, O = I.length; R < O; R++) {
							let B = I[R];
							const U = Math.min(M - A, T[R]),
								z = P[R];
							let F;
							z === f.BlockAll
								? (F = 0)
								: z === f.BlockSubsequent
									? (F = 1)
									: (F = U);
							for (let x = 0; x < U; x++) x === F && (B = 0), (N[A++] = B);
						}
						return N;
					}
					getViewLineContent(y) {
						const $ = this.y(y);
						return this.s[$.modelLineNumber - 1].getViewLineContent(
							this.d,
							$.modelLineNumber,
							$.modelLineWrappedLineIdx,
						);
					}
					getViewLineLength(y) {
						const $ = this.y(y);
						return this.s[$.modelLineNumber - 1].getViewLineLength(
							this.d,
							$.modelLineNumber,
							$.modelLineWrappedLineIdx,
						);
					}
					getViewLineMinColumn(y) {
						const $ = this.y(y);
						return this.s[$.modelLineNumber - 1].getViewLineMinColumn(
							this.d,
							$.modelLineNumber,
							$.modelLineWrappedLineIdx,
						);
					}
					getViewLineMaxColumn(y) {
						const $ = this.y(y);
						return this.s[$.modelLineNumber - 1].getViewLineMaxColumn(
							this.d,
							$.modelLineNumber,
							$.modelLineWrappedLineIdx,
						);
					}
					getViewLineData(y) {
						const $ = this.y(y);
						return this.s[$.modelLineNumber - 1].getViewLineData(
							this.d,
							$.modelLineNumber,
							$.modelLineWrappedLineIdx,
						);
					}
					getViewLinesData(y, $, v) {
						(y = this.x(y)), ($ = this.x($));
						const S = this.u.getIndexOf(y - 1);
						let I = y;
						const T = S.index,
							P = S.remainder,
							k = [];
						for (let L = T, D = this.d.getLineCount(); L < D; L++) {
							const M = this.s[L];
							if (!M.isVisible()) continue;
							const N = L === T ? P : 0;
							let A = M.getViewLineCount() - N,
								R = !1;
							if (
								(I + A > $ && ((R = !0), (A = $ - I + 1)),
								M.getViewLinesData(this.d, L + 1, N, A, I - y, v, k),
								(I += A),
								R)
							)
								break;
						}
						return k;
					}
					validateViewPosition(y, $, v) {
						y = this.x(y);
						const S = this.u.getIndexOf(y - 1),
							I = S.index,
							T = S.remainder,
							P = this.s[I],
							k = P.getViewLineMinColumn(this.d, I + 1, T),
							L = P.getViewLineMaxColumn(this.d, I + 1, T);
						$ < k && ($ = k), $ > L && ($ = L);
						const D = P.getModelColumnOfViewPosition(T, $);
						return this.d.validatePosition(new i.$hL(I + 1, D)).equals(v)
							? new i.$hL(y, $)
							: this.convertModelPositionToViewPosition(v.lineNumber, v.column);
					}
					validateViewRange(y, $) {
						const v = this.validateViewPosition(
								y.startLineNumber,
								y.startColumn,
								$.getStartPosition(),
							),
							S = this.validateViewPosition(
								y.endLineNumber,
								y.endColumn,
								$.getEndPosition(),
							);
						return new w.$iL(v.lineNumber, v.column, S.lineNumber, S.column);
					}
					convertViewPositionToModelPosition(y, $) {
						const v = this.y(y),
							S = this.s[v.modelLineNumber - 1].getModelColumnOfViewPosition(
								v.modelLineWrappedLineIdx,
								$,
							);
						return this.d.validatePosition(new i.$hL(v.modelLineNumber, S));
					}
					convertViewRangeToModelRange(y) {
						const $ = this.convertViewPositionToModelPosition(
								y.startLineNumber,
								y.startColumn,
							),
							v = this.convertViewPositionToModelPosition(
								y.endLineNumber,
								y.endColumn,
							);
						return new w.$iL($.lineNumber, $.column, v.lineNumber, v.column);
					}
					convertModelPositionToViewPosition(
						y,
						$,
						v = E.PositionAffinity.None,
						S = !1,
						I = !1,
					) {
						const T = this.d.validatePosition(new i.$hL(y, $)),
							P = T.lineNumber,
							k = T.column;
						let L = P - 1,
							D = !1;
						if (I)
							for (; L < this.s.length && !this.s[L].isVisible(); )
								L++, (D = !0);
						else for (; L > 0 && !this.s[L].isVisible(); ) L--, (D = !0);
						if (L === 0 && !this.s[L].isVisible())
							return new i.$hL(S ? 0 : 1, 1);
						const M = 1 + this.u.getPrefixSum(L);
						let N;
						return (
							D
								? I
									? (N = this.s[L].getViewPositionOfModelPosition(M, 1, v))
									: (N = this.s[L].getViewPositionOfModelPosition(
											M,
											this.d.getLineMaxColumn(L + 1),
											v,
										))
								: (N = this.s[P - 1].getViewPositionOfModelPosition(M, k, v)),
							N
						);
					}
					convertModelRangeToViewRange(y, $ = E.PositionAffinity.Left) {
						if (y.isEmpty()) {
							const v = this.convertModelPositionToViewPosition(
								y.startLineNumber,
								y.startColumn,
								$,
							);
							return w.$iL.fromPositions(v);
						} else {
							const v = this.convertModelPositionToViewPosition(
									y.startLineNumber,
									y.startColumn,
									E.PositionAffinity.Right,
								),
								S = this.convertModelPositionToViewPosition(
									y.endLineNumber,
									y.endColumn,
									E.PositionAffinity.Left,
								);
							return new w.$iL(v.lineNumber, v.column, S.lineNumber, S.column);
						}
					}
					getViewLineNumberOfModelPosition(y, $) {
						let v = y - 1;
						if (this.s[v].isVisible()) {
							const I = 1 + this.u.getPrefixSum(v);
							return this.s[v].getViewLineNumberOfModelPosition(I, $);
						}
						for (; v > 0 && !this.s[v].isVisible(); ) v--;
						if (v === 0 && !this.s[v].isVisible()) return 1;
						const S = 1 + this.u.getPrefixSum(v);
						return this.s[v].getViewLineNumberOfModelPosition(
							S,
							this.d.getLineMaxColumn(v + 1),
						);
					}
					getDecorationsInRange(y, $, v, S, I) {
						const T = this.convertViewPositionToModelPosition(
								y.startLineNumber,
								y.startColumn,
							),
							P = this.convertViewPositionToModelPosition(
								y.endLineNumber,
								y.endColumn,
							);
						if (
							P.lineNumber - T.lineNumber <=
							y.endLineNumber - y.startLineNumber
						)
							return this.d.getDecorationsInRange(
								new w.$iL(T.lineNumber, 1, P.lineNumber, P.column),
								$,
								v,
								S,
								I,
							);
						let k = [];
						const L = T.lineNumber - 1,
							D = P.lineNumber - 1;
						let M = null;
						for (let O = L; O <= D; O++)
							if (this.s[O].isVisible())
								M === null && (M = new i.$hL(O + 1, O === L ? T.column : 1));
							else if (M !== null) {
								const U = this.d.getLineMaxColumn(O);
								(k = k.concat(
									this.d.getDecorationsInRange(
										new w.$iL(M.lineNumber, M.column, O, U),
										$,
										v,
										S,
									),
								)),
									(M = null);
							}
						M !== null &&
							((k = k.concat(
								this.d.getDecorationsInRange(
									new w.$iL(M.lineNumber, M.column, P.lineNumber, P.column),
									$,
									v,
									S,
								),
							)),
							(M = null)),
							k.sort((O, B) => {
								const U = w.$iL.compareRangesUsingStarts(O.range, B.range);
								return U === 0 ? (O.id < B.id ? -1 : O.id > B.id ? 1 : 0) : U;
							});
						const N = [];
						let A = 0,
							R = null;
						for (const O of k) {
							const B = O.id;
							R !== B && ((R = B), (N[A++] = O));
						}
						return N;
					}
					getInjectedTextAt(y) {
						const $ = this.y(y.lineNumber);
						return this.s[$.modelLineNumber - 1].getInjectedTextAt(
							$.modelLineWrappedLineIdx,
							y.column,
						);
					}
					normalizePosition(y, $) {
						const v = this.y(y.lineNumber);
						return this.s[v.modelLineNumber - 1].normalizePosition(
							v.modelLineWrappedLineIdx,
							y,
							$,
						);
					}
					getLineIndentColumn(y) {
						const $ = this.y(y);
						return $.modelLineWrappedLineIdx === 0
							? this.d.getLineIndentColumn($.modelLineNumber)
							: 0;
					}
				}
				e.$jwb = c;
				function n(l) {
					if (l.length === 0) return [];
					const y = l.slice();
					y.sort(w.$iL.compareRangesUsingStarts);
					const $ = [];
					let v = y[0].startLineNumber,
						S = y[0].endLineNumber;
					for (let I = 1, T = y.length; I < T; I++) {
						const P = y[I];
						P.startLineNumber > S + 1
							? ($.push(new w.$iL(v, 1, S, 1)),
								(v = P.startLineNumber),
								(S = P.endLineNumber))
							: P.endLineNumber > S && (S = P.endLineNumber);
					}
					return $.push(new w.$iL(v, 1, S, 1)), $;
				}
				class g {
					get isWrappedLineContinuation() {
						return this.modelLineWrappedLineIdx > 0;
					}
					constructor(y, $) {
						(this.modelLineNumber = y), (this.modelLineWrappedLineIdx = $);
					}
				}
				class p {
					constructor(y, $) {
						(this.modelRange = y), (this.viewLines = $);
					}
				}
				class o {
					constructor(y) {
						this.c = y;
					}
					convertViewPositionToModelPosition(y) {
						return this.c.convertViewPositionToModelPosition(
							y.lineNumber,
							y.column,
						);
					}
					convertViewRangeToModelRange(y) {
						return this.c.convertViewRangeToModelRange(y);
					}
					validateViewPosition(y, $) {
						return this.c.validateViewPosition(y.lineNumber, y.column, $);
					}
					validateViewRange(y, $) {
						return this.c.validateViewRange(y, $);
					}
					convertModelPositionToViewPosition(y, $, v, S) {
						return this.c.convertModelPositionToViewPosition(
							y.lineNumber,
							y.column,
							$,
							v,
							S,
						);
					}
					convertModelRangeToViewRange(y, $) {
						return this.c.convertModelRangeToViewRange(y, $);
					}
					modelPositionIsVisible(y) {
						return this.c.modelPositionIsVisible(y.lineNumber, y.column);
					}
					getModelLineViewLineCount(y) {
						return this.c.getModelLineViewLineCount(y);
					}
					getViewLineNumberOfModelPosition(y, $) {
						return this.c.getViewLineNumberOfModelPosition(y, $);
					}
				}
				var f;
				(function (l) {
					(l[(l.BlockNone = 0)] = "BlockNone"),
						(l[(l.BlockSubsequent = 1)] = "BlockSubsequent"),
						(l[(l.BlockAll = 2)] = "BlockAll");
				})(f || (f = {}));
				class b {
					constructor(y) {
						this.model = y;
					}
					dispose() {}
					createCoordinatesConverter() {
						return new s(this);
					}
					getHiddenAreas() {
						return [];
					}
					setHiddenAreas(y) {
						return !1;
					}
					setTabSize(y) {
						return !1;
					}
					setWrappingSettings(y, $, v, S) {
						return !1;
					}
					createLineBreaksComputer() {
						const y = [];
						return {
							addRequest: ($, v, S) => {
								y.push(null);
							},
							finalize: () => y,
						};
					}
					onModelFlushed() {}
					onModelLinesDeleted(y, $, v) {
						return new r.$Psb($, v);
					}
					onModelLinesInserted(y, $, v, S) {
						return new r.$Qsb($, v);
					}
					onModelLineChanged(y, $, v) {
						return [!1, new r.$Osb($, 1), null, null];
					}
					acceptVersionId(y) {}
					getViewLineCount() {
						return this.model.getLineCount();
					}
					getActiveIndentGuide(y, $, v) {
						return { startLineNumber: y, endLineNumber: y, indent: 0 };
					}
					getViewLinesBracketGuides(y, $, v) {
						return new Array($ - y + 1).fill([]);
					}
					getViewLinesIndentGuides(y, $) {
						const v = $ - y + 1,
							S = new Array(v);
						for (let I = 0; I < v; I++) S[I] = 0;
						return S;
					}
					getViewLineContent(y) {
						return this.model.getLineContent(y);
					}
					getViewLineLength(y) {
						return this.model.getLineLength(y);
					}
					getViewLineMinColumn(y) {
						return this.model.getLineMinColumn(y);
					}
					getViewLineMaxColumn(y) {
						return this.model.getLineMaxColumn(y);
					}
					getViewLineData(y) {
						const $ = this.model.tokenization.getLineTokens(y),
							v = $.getLineContent();
						return new h.$1sb(v, !1, 1, v.length + 1, 0, $.inflate(), null);
					}
					getViewLinesData(y, $, v) {
						const S = this.model.getLineCount();
						(y = Math.min(Math.max(1, y), S)),
							($ = Math.min(Math.max(1, $), S));
						const I = [];
						for (let T = y; T <= $; T++) {
							const P = T - y;
							I[P] = v[P] ? this.getViewLineData(T) : null;
						}
						return I;
					}
					getDecorationsInRange(y, $, v, S, I) {
						return this.model.getDecorationsInRange(y, $, v, S, I);
					}
					normalizePosition(y, $) {
						return this.model.normalizePosition(y, $);
					}
					getLineIndentColumn(y) {
						return this.model.getLineIndentColumn(y);
					}
					getInjectedTextAt(y) {
						return null;
					}
				}
				e.$kwb = b;
				class s {
					constructor(y) {
						this.c = y;
					}
					d(y) {
						return this.c.model.validatePosition(y);
					}
					e(y) {
						return this.c.model.validateRange(y);
					}
					convertViewPositionToModelPosition(y) {
						return this.d(y);
					}
					convertViewRangeToModelRange(y) {
						return this.e(y);
					}
					validateViewPosition(y, $) {
						return this.d($);
					}
					validateViewRange(y, $) {
						return this.e($);
					}
					convertModelPositionToViewPosition(y) {
						return this.d(y);
					}
					convertModelRangeToViewRange(y) {
						return this.e(y);
					}
					modelPositionIsVisible(y) {
						const $ = this.c.model.getLineCount();
						return !(y.lineNumber < 1 || y.lineNumber > $);
					}
					modelRangeIsVisible(y) {
						const $ = this.c.model.getLineCount();
						return !(
							y.startLineNumber < 1 ||
							y.startLineNumber > $ ||
							y.endLineNumber < 1 ||
							y.endLineNumber > $
						);
					}
					getModelLineViewLineCount(y) {
						return 1;
					}
					getViewLineNumberOfModelPosition(y, $) {
						return y;
					}
				}
			},
		),
		define(
			de[2904],
			he([
				1, 0, 24, 15, 97, 3, 12, 37, 38, 1199, 346, 248, 48, 17, 98, 64, 590,
				74, 171, 172, 597, 493, 2724, 1592, 290, 1631, 751, 2903, 2765,
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
					(e.$qwb = void 0),
					(C = mt(C)),
					(d = mt(d)),
					(p = mt(p)),
					(l = mt(l));
				const k = !0;
				class L extends E.$1c {
					constructor(U, z, F, x, H, q, V, G, K, J) {
						if (
							(super(),
							(this.s = V),
							(this.t = G),
							(this.u = K),
							(this.w = J),
							(this.I = new N()),
							(this.J = []),
							(this.a = U),
							(this.b = z),
							(this.model = F),
							(this.c = new I.$Wvb()),
							(this.onEvent = this.c.onEvent),
							(this.cursorConfig = new u.$xsb(
								this.model.getLanguageId(),
								this.model.getOptions(),
								this.b,
								this.s,
							)),
							(this.f = this.D(new i.$Yh(() => this.y(), 0))),
							(this.g = !1),
							(this.h = D.create(this.model)),
							(this.glyphLanes = new P.$pwb(0)),
							k && this.model.isTooLargeForTokenization())
						)
							this.m = new T.$kwb(this.model);
						else {
							const W = this.b.options,
								X = W.get(m.EditorOption.fontInfo),
								Y = W.get(m.EditorOption.wrappingStrategy),
								ie = W.get(m.EditorOption.wrappingInfo),
								ne = W.get(m.EditorOption.wrappingIndent),
								ee = W.get(m.EditorOption.wordBreak);
							this.m = new T.$jwb(
								this.a,
								this.model,
								x,
								H,
								X,
								this.model.getOptions().tabSize,
								Y,
								ie.wrappingColumn,
								ne,
								ee,
							);
						}
						(this.coordinatesConverter = this.m.createCoordinatesConverter()),
							(this.n = this.D(
								new r.$_vb(
									F,
									this,
									this.coordinatesConverter,
									this.cursorConfig,
								),
							)),
							(this.viewLayout = this.D(
								new y.$hwb(this.b, this.getLineCount(), q),
							)),
							this.D(
								this.viewLayout.onDidScroll((W) => {
									W.scrollTopChanged && this.C(),
										W.scrollTopChanged && this.h.invalidate(),
										this.c.emitSingleViewEvent(new l.$Ssb(W)),
										this.c.emitOutgoingEvent(
											new I.$1vb(
												W.oldScrollWidth,
												W.oldScrollLeft,
												W.oldScrollHeight,
												W.oldScrollTop,
												W.scrollWidth,
												W.scrollLeft,
												W.scrollHeight,
												W.scrollTop,
											),
										);
								}),
							),
							this.D(
								this.viewLayout.onDidContentSizeChange((W) => {
									this.c.emitOutgoingEvent(W);
								}),
							),
							(this.q = new S.$lwb(
								this.a,
								this.model,
								this.b,
								this.m,
								this.coordinatesConverter,
							)),
							this.H(),
							this.D(
								this.b.onDidChangeFast((W) => {
									try {
										const X = this.c.beginEmitViewEvents();
										this.G(X, W);
									} finally {
										this.c.endEmitViewEvents();
									}
								}),
							),
							this.D(
								$.$Bvb.getInstance().onDidChange(() => {
									this.c.emitSingleViewEvent(new l.$Vsb());
								}),
							),
							this.D(
								this.t.onDidColorThemeChange((W) => {
									this.P(), this.c.emitSingleViewEvent(new l.$Tsb(W));
								}),
							),
							this.y();
					}
					dispose() {
						super.dispose(),
							this.q.dispose(),
							this.m.dispose(),
							this.h.dispose(),
							this.c.dispose();
					}
					createLineBreaksComputer() {
						return this.m.createLineBreaksComputer();
					}
					addViewEventHandler(U) {
						this.c.addViewEventHandler(U);
					}
					removeViewEventHandler(U) {
						this.c.removeViewEventHandler(U);
					}
					y() {
						this.b.setViewLineCount(this.m.getViewLineCount());
					}
					z() {
						const U = this.viewLayout.getLinesViewportData(),
							z = new c.$iL(
								U.startLineNumber,
								this.getLineMinColumn(U.startLineNumber),
								U.endLineNumber,
								this.getLineMaxColumn(U.endLineNumber),
							);
						return this.L(z);
					}
					visibleLinesStabilized() {
						const U = this.z();
						this.u.setVisibleLines(U, !0);
					}
					C() {
						const U = this.z();
						this.u.setVisibleLines(U, !1);
					}
					setHasFocus(U) {
						(this.g = U),
							this.n.setHasFocus(U),
							this.c.emitSingleViewEvent(new l.$Lsb(U)),
							this.c.emitOutgoingEvent(new I.$Zvb(!U, U));
					}
					onCompositionStart() {
						this.c.emitSingleViewEvent(new l.$Fsb());
					}
					onCompositionEnd() {
						this.c.emitSingleViewEvent(new l.$Gsb());
					}
					F() {
						if (this.h.isValid && this.viewLayout.getCurrentScrollTop() > 0) {
							const U = new h.$hL(
									this.h.viewLineNumber,
									this.getLineMinColumn(this.h.viewLineNumber),
								),
								z =
									this.coordinatesConverter.convertViewPositionToModelPosition(
										U,
									);
							return new O(z, this.h.startLineDelta);
						}
						return new O(null, 0);
					}
					G(U, z) {
						const F = this.F(),
							x = this.b.options,
							H = x.get(m.EditorOption.fontInfo),
							q = x.get(m.EditorOption.wrappingStrategy),
							V = x.get(m.EditorOption.wrappingInfo),
							G = x.get(m.EditorOption.wrappingIndent),
							K = x.get(m.EditorOption.wordBreak);
						this.m.setWrappingSettings(H, q, V.wrappingColumn, G, K) &&
							(U.emitViewEvent(new l.$Ksb()),
							U.emitViewEvent(new l.$Nsb()),
							U.emitViewEvent(new l.$Jsb(null)),
							this.n.onLineMappingChanged(U),
							this.q.onLineMappingChanged(),
							this.viewLayout.onFlushed(this.getLineCount()),
							this.f.schedule()),
							z.hasChanged(m.EditorOption.readOnly) &&
								(this.q.reset(), U.emitViewEvent(new l.$Jsb(null))),
							z.hasChanged(m.EditorOption.renderValidationDecorations) &&
								(this.q.reset(), U.emitViewEvent(new l.$Jsb(null))),
							U.emitViewEvent(new l.$Hsb(z)),
							this.viewLayout.onConfigurationChanged(z),
							F.recoverViewportStart(
								this.coordinatesConverter,
								this.viewLayout,
							),
							u.$xsb.shouldRecreate(z) &&
								((this.cursorConfig = new u.$xsb(
									this.model.getLanguageId(),
									this.model.getOptions(),
									this.b,
									this.s,
								)),
								this.n.updateConfiguration(this.cursorConfig));
					}
					H() {
						this.D(
							this.model.onDidChangeContentOrInjectedText((U) => {
								try {
									const F = this.c.beginEmitViewEvents();
									let x = !1,
										H = !1;
									const q =
											U instanceof p.$BN
												? U.rawContentChangedEvent.changes
												: U.changes,
										V =
											U instanceof p.$BN
												? U.rawContentChangedEvent.versionId
												: null,
										G = this.m.createLineBreaksComputer();
									for (const W of q)
										switch (W.changeType) {
											case p.RawContentChangedType.LinesInserted: {
												for (let X = 0; X < W.detail.length; X++) {
													const Y = W.detail[X];
													let ie = W.injectedTexts[X];
													ie &&
														(ie = ie.filter(
															(ne) => !ne.ownerId || ne.ownerId === this.a,
														)),
														G.addRequest(Y, ie, null);
												}
												break;
											}
											case p.RawContentChangedType.LineChanged: {
												let X = null;
												W.injectedText &&
													(X = W.injectedText.filter(
														(Y) => !Y.ownerId || Y.ownerId === this.a,
													)),
													G.addRequest(W.detail, X, null);
												break;
											}
										}
									const K = G.finalize(),
										J = new t.$cc(K);
									for (const W of q)
										switch (W.changeType) {
											case p.RawContentChangedType.Flush: {
												this.m.onModelFlushed(),
													F.emitViewEvent(new l.$Ksb()),
													this.q.reset(),
													this.viewLayout.onFlushed(this.getLineCount()),
													(x = !0);
												break;
											}
											case p.RawContentChangedType.LinesDeleted: {
												const X = this.m.onModelLinesDeleted(
													V,
													W.fromLineNumber,
													W.toLineNumber,
												);
												X !== null &&
													(F.emitViewEvent(X),
													this.viewLayout.onLinesDeleted(
														X.fromLineNumber,
														X.toLineNumber,
													)),
													(x = !0);
												break;
											}
											case p.RawContentChangedType.LinesInserted: {
												const X = J.takeCount(W.detail.length),
													Y = this.m.onModelLinesInserted(
														V,
														W.fromLineNumber,
														W.toLineNumber,
														X,
													);
												Y !== null &&
													(F.emitViewEvent(Y),
													this.viewLayout.onLinesInserted(
														Y.fromLineNumber,
														Y.toLineNumber,
													)),
													(x = !0);
												break;
											}
											case p.RawContentChangedType.LineChanged: {
												const X = J.dequeue(),
													[Y, ie, ne, ee] = this.m.onModelLineChanged(
														V,
														W.lineNumber,
														X,
													);
												(H = Y),
													ie && F.emitViewEvent(ie),
													ne &&
														(F.emitViewEvent(ne),
														this.viewLayout.onLinesInserted(
															ne.fromLineNumber,
															ne.toLineNumber,
														)),
													ee &&
														(F.emitViewEvent(ee),
														this.viewLayout.onLinesDeleted(
															ee.fromLineNumber,
															ee.toLineNumber,
														));
												break;
											}
											case p.RawContentChangedType.EOLChanged:
												break;
										}
									V !== null && this.m.acceptVersionId(V),
										this.viewLayout.onHeightMaybeChanged(),
										!x &&
											H &&
											(F.emitViewEvent(new l.$Nsb()),
											F.emitViewEvent(new l.$Jsb(null)),
											this.n.onLineMappingChanged(F),
											this.q.onLineMappingChanged());
								} finally {
									this.c.endEmitViewEvents();
								}
								const z = this.h.isValid;
								if (
									(this.h.invalidate(),
									this.b.setModelLineCount(this.model.getLineCount()),
									this.y(),
									!this.g && this.model.getAttachedEditorCount() >= 2 && z)
								) {
									const F = this.model._getTrackedRange(
										this.h.modelTrackedRange,
									);
									if (F) {
										const x =
												this.coordinatesConverter.convertModelPositionToViewPosition(
													F.getStartPosition(),
												),
											H = this.viewLayout.getVerticalOffsetForLineNumber(
												x.lineNumber,
											);
										this.viewLayout.setScrollPosition(
											{ scrollTop: H + this.h.startLineDelta },
											n.ScrollType.Immediate,
										);
									}
								}
								try {
									const F = this.c.beginEmitViewEvents();
									U instanceof p.$BN &&
										F.emitOutgoingEvent(new I.$9vb(U.contentChangedEvent)),
										this.n.onModelContentChanged(F, U);
								} finally {
									this.c.endEmitViewEvents();
								}
								this.C();
							}),
						),
							this.D(
								this.model.onDidChangeTokens((U) => {
									const z = [];
									for (let F = 0, x = U.ranges.length; F < x; F++) {
										const H = U.ranges[F],
											q =
												this.coordinatesConverter.convertModelPositionToViewPosition(
													new h.$hL(H.fromLineNumber, 1),
												).lineNumber,
											V =
												this.coordinatesConverter.convertModelPositionToViewPosition(
													new h.$hL(
														H.toLineNumber,
														this.model.getLineMaxColumn(H.toLineNumber),
													),
												).lineNumber;
										z[F] = { fromLineNumber: q, toLineNumber: V };
									}
									this.c.emitSingleViewEvent(new l.$Usb(z)),
										this.c.emitOutgoingEvent(new I.$$vb(U));
								}),
							),
							this.D(
								this.model.onDidChangeLanguageConfiguration((U) => {
									this.c.emitSingleViewEvent(new l.$Msb()),
										(this.cursorConfig = new u.$xsb(
											this.model.getLanguageId(),
											this.model.getOptions(),
											this.b,
											this.s,
										)),
										this.n.updateConfiguration(this.cursorConfig),
										this.c.emitOutgoingEvent(new I.$8vb(U));
								}),
							),
							this.D(
								this.model.onDidChangeLanguage((U) => {
									(this.cursorConfig = new u.$xsb(
										this.model.getLanguageId(),
										this.model.getOptions(),
										this.b,
										this.s,
									)),
										this.n.updateConfiguration(this.cursorConfig),
										this.c.emitOutgoingEvent(new I.$7vb(U));
								}),
							),
							this.D(
								this.model.onDidChangeOptions((U) => {
									if (this.m.setTabSize(this.model.getOptions().tabSize)) {
										try {
											const z = this.c.beginEmitViewEvents();
											z.emitViewEvent(new l.$Ksb()),
												z.emitViewEvent(new l.$Nsb()),
												z.emitViewEvent(new l.$Jsb(null)),
												this.n.onLineMappingChanged(z),
												this.q.onLineMappingChanged(),
												this.viewLayout.onFlushed(this.getLineCount());
										} finally {
											this.c.endEmitViewEvents();
										}
										this.f.schedule();
									}
									(this.cursorConfig = new u.$xsb(
										this.model.getLanguageId(),
										this.model.getOptions(),
										this.b,
										this.s,
									)),
										this.n.updateConfiguration(this.cursorConfig),
										this.c.emitOutgoingEvent(new I.$0vb(U));
								}),
							),
							this.D(
								this.model.onDidChangeDecorations((U) => {
									this.q.onModelDecorationsChanged(),
										this.c.emitSingleViewEvent(new l.$Jsb(U)),
										this.c.emitOutgoingEvent(new I.$6vb(U));
								}),
							);
					}
					setHiddenAreas(U, z) {
						this.I.setHiddenAreas(z, U);
						const F = this.I.getMergedRanges();
						if (F === this.J) return;
						this.J = F;
						const x = this.F();
						let H = !1;
						try {
							const q = this.c.beginEmitViewEvents();
							(H = this.m.setHiddenAreas(F)),
								H &&
									(q.emitViewEvent(new l.$Ksb()),
									q.emitViewEvent(new l.$Nsb()),
									q.emitViewEvent(new l.$Jsb(null)),
									this.n.onLineMappingChanged(q),
									this.q.onLineMappingChanged(),
									this.viewLayout.onFlushed(this.getLineCount()),
									this.viewLayout.onHeightMaybeChanged());
							const V = x.viewportStartModelPosition?.lineNumber;
							(V &&
								F.some(
									(K) => K.startLineNumber <= V && V <= K.endLineNumber,
								)) ||
								x.recoverViewportStart(
									this.coordinatesConverter,
									this.viewLayout,
								);
						} finally {
							this.c.endEmitViewEvents();
						}
						this.f.schedule(), H && this.c.emitOutgoingEvent(new I.$3vb());
					}
					getVisibleRangesPlusViewportAboveBelow() {
						const U = this.b.options.get(m.EditorOption.layoutInfo),
							z = this.b.options.get(m.EditorOption.lineHeight),
							F = Math.max(20, Math.round(U.height / z)),
							x = this.viewLayout.getLinesViewportData(),
							H = Math.max(1, x.completelyVisibleStartLineNumber - F),
							q = Math.min(
								this.getLineCount(),
								x.completelyVisibleEndLineNumber + F,
							);
						return this.L(
							new c.$iL(
								H,
								this.getLineMinColumn(H),
								q,
								this.getLineMaxColumn(q),
							),
						);
					}
					getVisibleRanges() {
						const U = this.getCompletelyVisibleViewRange();
						return this.L(U);
					}
					getHiddenAreas() {
						return this.m.getHiddenAreas();
					}
					L(U) {
						const z = this.coordinatesConverter.convertViewRangeToModelRange(U),
							F = this.m.getHiddenAreas();
						if (F.length === 0) return [z];
						const x = [];
						let H = 0,
							q = z.startLineNumber,
							V = z.startColumn;
						const G = z.endLineNumber,
							K = z.endColumn;
						for (let J = 0, W = F.length; J < W; J++) {
							const X = F[J].startLineNumber,
								Y = F[J].endLineNumber;
							Y < q ||
								X > G ||
								(q < X &&
									(x[H++] = new c.$iL(
										q,
										V,
										X - 1,
										this.model.getLineMaxColumn(X - 1),
									)),
								(q = Y + 1),
								(V = 1));
						}
						return (
							(q < G || (q === G && V < K)) && (x[H++] = new c.$iL(q, V, G, K)),
							x
						);
					}
					getCompletelyVisibleViewRange() {
						const U = this.viewLayout.getLinesViewportData(),
							z = U.completelyVisibleStartLineNumber,
							F = U.completelyVisibleEndLineNumber;
						return new c.$iL(
							z,
							this.getLineMinColumn(z),
							F,
							this.getLineMaxColumn(F),
						);
					}
					getCompletelyVisibleViewRangeAtScrollTop(U) {
						const z = this.viewLayout.getLinesViewportDataAtScrollTop(U),
							F = z.completelyVisibleStartLineNumber,
							x = z.completelyVisibleEndLineNumber;
						return new c.$iL(
							F,
							this.getLineMinColumn(F),
							x,
							this.getLineMaxColumn(x),
						);
					}
					saveState() {
						const U = this.viewLayout.saveState(),
							z = U.scrollTop,
							F = this.viewLayout.getLineNumberAtVerticalOffset(z),
							x = this.coordinatesConverter.convertViewPositionToModelPosition(
								new h.$hL(F, this.getLineMinColumn(F)),
							),
							H = this.viewLayout.getVerticalOffsetForLineNumber(F) - z;
						return {
							scrollLeft: U.scrollLeft,
							firstPosition: x,
							firstPositionDeltaTop: H,
						};
					}
					reduceRestoreState(U) {
						if (typeof U.firstPosition > "u") return this.M(U);
						const z = this.model.validatePosition(U.firstPosition),
							F =
								this.coordinatesConverter.convertModelPositionToViewPosition(z),
							x =
								this.viewLayout.getVerticalOffsetForLineNumber(F.lineNumber) -
								U.firstPositionDeltaTop;
						return { scrollLeft: U.scrollLeft, scrollTop: x };
					}
					M(U) {
						return {
							scrollLeft: U.scrollLeft,
							scrollTop: U.scrollTopWithoutViewZones,
						};
					}
					N() {
						return this.model.getOptions().tabSize;
					}
					getLineCount() {
						return this.m.getViewLineCount();
					}
					setViewport(U, z, F) {
						this.h.update(this, U);
					}
					getActiveIndentGuide(U, z, F) {
						return this.m.getActiveIndentGuide(U, z, F);
					}
					getLinesIndentGuides(U, z) {
						return this.m.getViewLinesIndentGuides(U, z);
					}
					getBracketGuidesInRangeByLine(U, z, F, x) {
						return this.m.getViewLinesBracketGuides(U, z, F, x);
					}
					getLineContent(U) {
						return this.m.getViewLineContent(U);
					}
					getLineLength(U) {
						return this.m.getViewLineLength(U);
					}
					getLineMinColumn(U) {
						return this.m.getViewLineMinColumn(U);
					}
					getLineMaxColumn(U) {
						return this.m.getViewLineMaxColumn(U);
					}
					getLineFirstNonWhitespaceColumn(U) {
						const z = d.$Bf(this.getLineContent(U));
						return z === -1 ? 0 : z + 1;
					}
					getLineLastNonWhitespaceColumn(U) {
						const z = d.$Df(this.getLineContent(U));
						return z === -1 ? 0 : z + 2;
					}
					getMinimapDecorationsInRange(U) {
						return this.q.getMinimapDecorationsInRange(U);
					}
					getDecorationsInViewport(U) {
						return this.q.getDecorationsViewportData(U).decorations;
					}
					getInjectedTextAt(U) {
						return this.m.getInjectedTextAt(U);
					}
					getViewportViewLineRenderingData(U, z) {
						const x =
							this.q.getDecorationsViewportData(U).inlineDecorations[
								z - U.startLineNumber
							];
						return this.O(z, x);
					}
					getViewLineRenderingData(U) {
						const z = this.q.getInlineDecorationsOnLine(U);
						return this.O(U, z);
					}
					O(U, z) {
						const F = this.model.mightContainRTL(),
							x = this.model.mightContainNonBasicASCII(),
							H = this.N(),
							q = this.m.getViewLineData(U);
						return (
							q.inlineDecorations &&
								(z = [
									...z,
									...q.inlineDecorations.map((V) => V.toInlineDecoration(U)),
								]),
							new v.$2sb(
								q.minColumn,
								q.maxColumn,
								q.content,
								q.continuesWithWrappedLine,
								F,
								x,
								q.tokens,
								z,
								H,
								q.startVisibleColumn,
							)
						);
					}
					getViewLineData(U) {
						return this.m.getViewLineData(U);
					}
					getMinimapLinesRenderingData(U, z, F) {
						const x = this.m.getViewLinesData(U, z, F);
						return new v.$Zsb(this.N(), x);
					}
					getAllOverviewRulerDecorations(U) {
						const z = this.model.getOverviewRulerDecorations(
								this.a,
								(0, m.filterValidationDecorations)(this.b.options),
							),
							F = new M();
						for (const x of z) {
							const H = x.options,
								q = H.overviewRuler;
							if (!q) continue;
							const V = q.position;
							if (V === 0) continue;
							const G = q.getColor(U.value),
								K = this.coordinatesConverter.getViewLineNumberOfModelPosition(
									x.range.startLineNumber,
									x.range.startColumn,
								),
								J = this.coordinatesConverter.getViewLineNumberOfModelPosition(
									x.range.endLineNumber,
									x.range.endColumn,
								);
							F.accept(G, H.zIndex, K, J, V);
						}
						return F.asArray;
					}
					P() {
						const U = this.model.getOverviewRulerDecorations();
						for (const z of U)
							z.options.overviewRuler?.invalidateCachedColor(),
								z.options.minimap?.invalidateCachedColor();
					}
					getValueInRange(U, z) {
						const F = this.coordinatesConverter.convertViewRangeToModelRange(U);
						return this.model.getValueInRange(F, z);
					}
					getValueLengthInRange(U, z) {
						const F = this.coordinatesConverter.convertViewRangeToModelRange(U);
						return this.model.getValueLengthInRange(F, z);
					}
					modifyPosition(U, z) {
						const F =
								this.coordinatesConverter.convertViewPositionToModelPosition(U),
							x = this.model.modifyPosition(F, z);
						return this.coordinatesConverter.convertModelPositionToViewPosition(
							x,
						);
					}
					deduceModelPositionRelativeToViewPosition(U, z, F) {
						const x =
							this.coordinatesConverter.convertViewPositionToModelPosition(U);
						this.model.getEOL().length === 2 && (z < 0 ? (z -= F) : (z += F));
						const q = this.model.getOffsetAt(x) + z;
						return this.model.getPositionAt(q);
					}
					getPlainTextToCopy(U, z, F) {
						const x = F
							? `\r
`
							: this.model.getEOL();
						(U = U.slice(0)), U.sort(c.$iL.compareRangesUsingStarts);
						let H = !1,
							q = !1;
						for (const G of U) G.isEmpty() ? (H = !0) : (q = !0);
						if (!q) {
							if (!z) return "";
							const G = U.map((J) => J.startLineNumber);
							let K = "";
							for (let J = 0; J < G.length; J++)
								(J > 0 && G[J - 1] === G[J]) ||
									(K += this.model.getLineContent(G[J]) + x);
							return K;
						}
						if (H && z) {
							const G = [];
							let K = 0;
							for (const J of U) {
								const W = J.startLineNumber;
								J.isEmpty()
									? W !== K && G.push(this.model.getLineContent(W))
									: G.push(
											this.model.getValueInRange(
												J,
												F
													? g.EndOfLinePreference.CRLF
													: g.EndOfLinePreference.TextDefined,
											),
										),
									(K = W);
							}
							return G.length === 1 ? G[0] : G;
						}
						const V = [];
						for (const G of U)
							G.isEmpty() ||
								V.push(
									this.model.getValueInRange(
										G,
										F
											? g.EndOfLinePreference.CRLF
											: g.EndOfLinePreference.TextDefined,
									),
								);
						return V.length === 1 ? V[0] : V;
					}
					getRichTextToCopy(U, z) {
						const F = this.model.getLanguageId();
						if (F === b.$0M || U.length !== 1) return null;
						let x = U[0];
						if (x.isEmpty()) {
							if (!z) return null;
							const J = x.startLineNumber;
							x = new c.$iL(
								J,
								this.model.getLineMinColumn(J),
								J,
								this.model.getLineMaxColumn(J),
							);
						}
						const H = this.b.options.get(m.EditorOption.fontInfo),
							q = this.R(),
							G =
								/[:;\\\/<>]/.test(H.fontFamily) ||
								H.fontFamily === m.EDITOR_FONT_DEFAULTS.fontFamily;
						let K;
						return (
							G
								? (K = m.EDITOR_FONT_DEFAULTS.fontFamily)
								: ((K = H.fontFamily),
									(K = K.replace(/"/g, "'")),
									/[,']/.test(K) || (/[+ ]/.test(K) && (K = `'${K}'`)),
									(K = `${K}, ${m.EDITOR_FONT_DEFAULTS.fontFamily}`)),
							{
								mode: F,
								html:
									`<div style="color: ${q[f.ColorId.DefaultForeground]};background-color: ${q[f.ColorId.DefaultBackground]};font-family: ${K};font-weight: ${H.fontWeight};font-size: ${H.fontSize}px;line-height: ${H.lineHeight}px;white-space: pre;">` +
									this.Q(x, q) +
									"</div>",
							}
						);
					}
					Q(U, z) {
						const F = U.startLineNumber,
							x = U.startColumn,
							H = U.endLineNumber,
							q = U.endColumn,
							V = this.N();
						let G = "";
						for (let K = F; K <= H; K++) {
							const J = this.model.tokenization.getLineTokens(K),
								W = J.getLineContent(),
								X = K === F ? x - 1 : 0,
								Y = K === H ? q - 1 : W.length;
							W === ""
								? (G += "<br>")
								: (G += (0, s.$dwb)(W, J.inflate(), z, X, Y, V, C.$l));
						}
						return G;
					}
					R() {
						const U = o.$lM.getColorMap(),
							z = ["#000000"];
						if (U)
							for (let F = 1, x = U.length; F < x; F++)
								z[F] = w.$UL.Format.CSS.formatHex(U[F]);
						return z;
					}
					getPrimaryCursorState() {
						return this.n.getPrimaryCursorState();
					}
					getLastAddedCursorIndex() {
						return this.n.getLastAddedCursorIndex();
					}
					getCursorStates() {
						return this.n.getCursorStates();
					}
					setCursorStates(U, z, F) {
						return this.U((x) => this.n.setStates(x, U, z, F));
					}
					getCursorColumnSelectData() {
						return this.n.getCursorColumnSelectData();
					}
					getCursorAutoClosedCharacters() {
						return this.n.getAutoClosedCharacters();
					}
					setCursorColumnSelectData(U) {
						this.n.setCursorColumnSelectData(U);
					}
					getPrevEditOperationType() {
						return this.n.getPrevEditOperationType();
					}
					setPrevEditOperationType(U) {
						this.n.setPrevEditOperationType(U);
					}
					getSelection() {
						return this.n.getSelection();
					}
					getSelections() {
						return this.n.getSelections();
					}
					getPosition() {
						return this.n.getPrimaryCursorState().modelState.position;
					}
					setSelections(U, z, F = a.CursorChangeReason.NotSet) {
						this.U((x) => this.n.setSelections(x, U, z, F));
					}
					saveCursorState() {
						return this.n.saveState();
					}
					restoreCursorState(U) {
						this.U((z) => this.n.restoreState(z, U));
					}
					S(U) {
						if (this.n.context.cursorConfig.readOnly) {
							this.c.emitOutgoingEvent(new I.$5vb());
							return;
						}
						this.U(U);
					}
					executeEdits(U, z, F) {
						this.S((x) => this.n.executeEdits(x, U, z, F));
					}
					startComposition() {
						this.S((U) => this.n.startComposition(U));
					}
					endComposition(U) {
						this.S((z) => this.n.endComposition(z, U));
					}
					type(U, z) {
						this.S((F) => this.n.type(F, U, z));
					}
					compositionType(U, z, F, x, H) {
						this.S((q) => this.n.compositionType(q, U, z, F, x, H));
					}
					paste(U, z, F, x) {
						this.S((H) => this.n.paste(H, U, z, F, x));
					}
					cut(U) {
						this.S((z) => this.n.cut(z, U));
					}
					executeCommand(U, z) {
						this.S((F) => this.n.executeCommand(F, U, z));
					}
					executeCommands(U, z) {
						this.S((F) => this.n.executeCommands(F, U, z));
					}
					revealAllCursors(U, z, F = !1) {
						this.U((x) =>
							this.n.revealAll(
								x,
								U,
								F,
								l.VerticalRevealType.Simple,
								z,
								n.ScrollType.Smooth,
							),
						);
					}
					revealPrimaryCursor(U, z, F = !1) {
						this.U((x) =>
							this.n.revealPrimary(
								x,
								U,
								F,
								l.VerticalRevealType.Simple,
								z,
								n.ScrollType.Smooth,
							),
						);
					}
					revealTopMostCursor(U) {
						const z = this.n.getTopMostViewPosition(),
							F = new c.$iL(z.lineNumber, z.column, z.lineNumber, z.column);
						this.U((x) =>
							x.emitViewEvent(
								new l.$Rsb(
									U,
									!1,
									F,
									null,
									l.VerticalRevealType.Simple,
									!0,
									n.ScrollType.Smooth,
								),
							),
						);
					}
					revealBottomMostCursor(U) {
						const z = this.n.getBottomMostViewPosition(),
							F = new c.$iL(z.lineNumber, z.column, z.lineNumber, z.column);
						this.U((x) =>
							x.emitViewEvent(
								new l.$Rsb(
									U,
									!1,
									F,
									null,
									l.VerticalRevealType.Simple,
									!0,
									n.ScrollType.Smooth,
								),
							),
						);
					}
					revealRange(U, z, F, x, H) {
						this.U((q) => q.emitViewEvent(new l.$Rsb(U, !1, F, null, x, z, H)));
					}
					changeWhitespace(U) {
						this.viewLayout.changeWhitespace(U) &&
							(this.c.emitSingleViewEvent(new l.$Wsb()),
							this.c.emitOutgoingEvent(new I.$2vb()));
					}
					U(U) {
						return this.w.batchChanges(() => {
							try {
								const z = this.c.beginEmitViewEvents();
								return U(z);
							} finally {
								this.c.endEmitViewEvents();
							}
						});
					}
					batchEvents(U) {
						this.U(() => {
							U();
						});
					}
					normalizePosition(U, z) {
						return this.m.normalizePosition(U, z);
					}
					getLineIndentColumn(U) {
						return this.m.getLineIndentColumn(U);
					}
				}
				e.$qwb = L;
				class D {
					static create(U) {
						const z = U._setTrackedRange(
							null,
							new c.$iL(1, 1, 1, 1),
							g.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
						);
						return new D(U, 1, !1, z, 0);
					}
					get viewLineNumber() {
						return this.b;
					}
					get isValid() {
						return this.c;
					}
					get modelTrackedRange() {
						return this.f;
					}
					get startLineDelta() {
						return this.g;
					}
					constructor(U, z, F, x, H) {
						(this.a = U),
							(this.b = z),
							(this.c = F),
							(this.f = x),
							(this.g = H);
					}
					dispose() {
						this.a._setTrackedRange(
							this.f,
							null,
							g.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
						);
					}
					update(U, z) {
						const F = U.coordinatesConverter.convertViewPositionToModelPosition(
								new h.$hL(z, U.getLineMinColumn(z)),
							),
							x = U.model._setTrackedRange(
								this.f,
								new c.$iL(F.lineNumber, F.column, F.lineNumber, F.column),
								g.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							),
							H = U.viewLayout.getVerticalOffsetForLineNumber(z),
							q = U.viewLayout.getCurrentScrollTop();
						(this.b = z), (this.c = !0), (this.f = x), (this.g = q - H);
					}
					invalidate() {
						this.c = !1;
					}
				}
				class M {
					constructor() {
						(this.a = Object.create(null)), (this.asArray = []);
					}
					accept(U, z, F, x, H) {
						const q = this.a[U];
						if (q) {
							const V = q.data,
								G = V[V.length - 3],
								K = V[V.length - 1];
							if (G === H && K + 1 >= F) {
								x > K && (V[V.length - 1] = x);
								return;
							}
							V.push(H, F, x);
						} else {
							const V = new v.$6sb(U, z, [H, F, x]);
							(this.a[U] = V), this.asArray.push(V);
						}
					}
				}
				class N {
					constructor() {
						(this.a = new Map()), (this.b = !1), (this.c = []);
					}
					setHiddenAreas(U, z) {
						const F = this.a.get(U);
						(F && R(F, z)) || (this.a.set(U, z), (this.b = !0));
					}
					getMergedRanges() {
						if (!this.b) return this.c;
						this.b = !1;
						const U = Array.from(this.a.values()).reduce((z, F) => A(z, F), []);
						return R(this.c, U) ? this.c : ((this.c = U), this.c);
					}
				}
				function A(B, U) {
					const z = [];
					let F = 0,
						x = 0;
					for (; F < B.length && x < U.length; ) {
						const H = B[F],
							q = U[x];
						if (H.endLineNumber < q.startLineNumber - 1) z.push(B[F++]);
						else if (q.endLineNumber < H.startLineNumber - 1) z.push(U[x++]);
						else {
							const V = Math.min(H.startLineNumber, q.startLineNumber),
								G = Math.max(H.endLineNumber, q.endLineNumber);
							z.push(new c.$iL(V, 1, G, 1)), F++, x++;
						}
					}
					for (; F < B.length; ) z.push(B[F++]);
					for (; x < U.length; ) z.push(U[x++]);
					return z;
				}
				function R(B, U) {
					if (B.length !== U.length) return !1;
					for (let z = 0; z < B.length; z++)
						if (!B[z].equalsRange(U[z])) return !1;
					return !0;
				}
				class O {
					constructor(U, z) {
						(this.viewportStartModelPosition = U), (this.startLineDelta = z);
					}
					recoverViewportStart(U, z) {
						if (!this.viewportStartModelPosition) return;
						const F = U.convertModelPositionToViewPosition(
								this.viewportStartModelPosition,
							),
							x = z.getVerticalOffsetForLineNumber(F.lineNumber);
						z.setScrollPosition(
							{ scrollTop: x + this.startLineDelta },
							n.ScrollType.Immediate,
						);
					}
				}
			},
		),
		define(
			de[206],
			he([
				1, 0, 7, 29, 6, 136, 3, 23, 321, 1607, 653, 46, 65, 2853, 2762, 1534,
				2799, 38, 435, 307, 48, 17, 104, 944, 248, 2556, 98, 71, 152, 64, 946,
				122, 69, 493, 2767, 2904, 751, 4, 91, 31, 8, 5, 128, 40, 51, 35, 11,
				308, 2796, 2279,
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
			) {
				"use strict";
				var W;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$twb = e.$swb = e.$rwb = void 0),
					(t = mt(t)),
					(I = mt(I)),
					(B = mt(B));
				let X = class extends C.$1c {
					static {
						W = this;
					}
					static {
						this.b = D.$eY.register({
							description: "workbench-dnd-target",
							className: "dnd-target",
						});
					}
					get isChatCodeblock() {
						return this.qb.isChatCodeblock;
					}
					get isHallucinatedFunctionPreviewBox() {
						return this.qb.isHallucinatedFunctionPreviewBox;
					}
					get cursorCodeBlockType() {
						return this.qb.cursorCodeBlockType;
					}
					get isSimpleWidget() {
						return this.qb.isSimpleWidget;
					}
					get contextMenuId() {
						return this.qb.contextMenuId;
					}
					get contextKeyService() {
						return this.vb;
					}
					constructor(ue, fe, me, ve, ge, be, Ce, Le, Fe, Oe, xe, He, Ke) {
						super(),
							(this.Ib = xe),
							(this.Jb = Ke),
							(this.c = (0, w.$se)()),
							(this.f = this.D(new p.$Qvb())),
							(this.g = this.D(new w.$re())),
							(this.onDidDispose = this.g.event),
							(this.h = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidChangeModelContent = this.h.event),
							(this.j = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidChangeModelLanguage = this.j.event),
							(this.m = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidChangeModelLanguageConfiguration = this.m.event),
							(this.n = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidChangeModelOptions = this.n.event),
							(this.q = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidChangeModelDecorations = this.q.event),
							(this.t = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidChangeModelTokens = this.t.event),
							(this.u = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidChangeConfiguration = this.u.event),
							(this.w = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onWillChangeModel = this.w.event),
							(this.y = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidChangeModel = this.y.event),
							(this.z = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidChangeCursorPosition = this.z.event),
							(this.C = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidChangeCursorSelection = this.C.event),
							(this.F = this.D(new _(this.f, this.c))),
							(this.onDidAttemptReadOnlyEdit = this.F.event),
							(this.G = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidLayoutChange = this.G.event),
							(this.H = this.D(new ee({ deliveryQueue: this.c }))),
							(this.onDidFocusEditorText = this.H.onDidChangeToTrue),
							(this.onDidBlurEditorText = this.H.onDidChangeToFalse),
							(this.I = this.D(new ee({ deliveryQueue: this.c }))),
							(this.onDidFocusEditorWidget = this.I.onDidChangeToTrue),
							(this.onDidBlurEditorWidget = this.I.onDidChangeToFalse),
							(this.J = this.D(new _(this.f, this.c))),
							(this.onWillType = this.J.event),
							(this.L = this.D(new _(this.f, this.c))),
							(this.onDidType = this.L.event),
							(this.M = this.D(new _(this.f, this.c))),
							(this.onDidCompositionStart = this.M.event),
							(this.N = this.D(new _(this.f, this.c))),
							(this.onDidCompositionEnd = this.N.event),
							(this.O = this.D(new _(this.f, this.c))),
							(this.onDidPaste = this.O.event),
							(this.P = this.D(new _(this.f, this.c))),
							(this.onMouseUp = this.P.event),
							(this.Q = this.D(new _(this.f, this.c))),
							(this.onMouseDown = this.Q.event),
							(this.R = this.D(new _(this.f, this.c))),
							(this.onMouseDrag = this.R.event),
							(this.S = this.D(new _(this.f, this.c))),
							(this.onMouseDrop = this.S.event),
							(this.U = this.D(new _(this.f, this.c))),
							(this.onMouseDropCanceled = this.U.event),
							(this.W = this.D(new _(this.f, this.c))),
							(this.onDropIntoEditor = this.W.event),
							(this.X = this.D(new _(this.f, this.c))),
							(this.onContextMenu = this.X.event),
							(this.Y = this.D(new _(this.f, this.c))),
							(this.onMouseMove = this.Y.event),
							(this.Z = this.D(new _(this.f, this.c))),
							(this.onMouseLeave = this.Z.event),
							(this.ab = this.D(new _(this.f, this.c))),
							(this.onMouseWheel = this.ab.event),
							(this.bb = this.D(new _(this.f, this.c))),
							(this.onKeyUp = this.bb.event),
							(this.db = this.D(new _(this.f, this.c))),
							(this.onKeyDown = this.db.event),
							(this.eb = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidContentSizeChange = this.eb.event),
							(this.fb = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidScrollChange = this.fb.event),
							(this.gb = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidChangeViewZones = this.gb.event),
							(this.hb = this.D(new w.$re({ deliveryQueue: this.c }))),
							(this.onDidChangeHiddenAreas = this.hb.event),
							(this.ib = 0),
							(this.jb = this.D(new w.$re())),
							(this.onBeginUpdate = this.jb.event),
							(this.lb = this.D(new w.$re())),
							(this.onEndUpdate = this.lb.event),
							(this.sb = new Map()),
							(this.Gb = null),
							(this.Hb = this.createDecorationsCollection()),
							ge.willCreateCodeEditor(),
							(this.shouldShowHover = !0);
						const Je = { ...fe };
						(this.nb = ue),
							(this.ob = Je.overflowWidgetsDomNode),
							delete Je.overflowWidgetsDomNode,
							(this.pb = ++Y),
							(this.Eb = {}),
							(this.Fb = {}),
							(this.mb = me.telemetryData),
							(this.qb = this.D(
								this.Kb(
									me.isSimpleWidget || !1,
									me.contextMenuId ??
										(me.isSimpleWidget
											? K.$XX.SimpleEditorContext
											: K.$XX.EditorContext),
									Je,
									Oe,
									me.isChatCodeblock ?? !1,
									me.isHallucinatedFunctionPreviewBox ?? !1,
									me.cursorCodeBlockType,
								),
							)),
							this.D(
								this.qb.onDidChange((Ie) => {
									this.u.fire(Ie);
									const Be = this.qb.options;
									if (Ie.hasChanged(o.EditorOption.layoutInfo)) {
										const Se = Be.get(o.EditorOption.layoutInfo);
										this.G.fire(Se);
									}
								}),
							),
							(this.vb = this.D(Ce.createScoped(this.nb))),
							(this.wb = Fe),
							(this.xb = ge),
							(this.yb = be),
							(this.zb = Le),
							this.D(new te(this, this.vb, this.Jb)),
							this.D(new Q(this, this.vb, He)),
							(this.ub = this.D(ve.createChild(new H.$Ki([F.$6j, this.vb])))),
							(this.tb = null),
							(this.Ab = new Z(ue, this.ob)),
							this.D(
								this.Ab.onChange(() => {
									this.I.setValue(this.Ab.hasFocus());
								}),
							),
							(this.Bb = {}),
							(this.Cb = {}),
							(this.Db = {});
						let Te;
						Array.isArray(me.contributions)
							? (Te = me.contributions)
							: (Te = a.EditorExtensionsRegistry.getEditorContributions()),
							this.f.initialize(this, Te, this.ub);
						for (const Ie of a.EditorExtensionsRegistry.getEditorActions()) {
							if (this.sb.has(Ie.id)) {
								(0, i.$4)(
									new Error(
										`Cannot have two actions with the same id ${Ie.id}`,
									),
								);
								continue;
							}
							const Be = new S.$Rvb(
								Ie.id,
								Ie.label,
								Ie.alias,
								Ie.metadata,
								Ie.precondition ?? void 0,
								(Se) =>
									this.ub.invokeFunction((ke) =>
										Promise.resolve(Ie.runEditorCommand(ke, this, Se)),
									),
								this.vb,
							);
							this.sb.set(Be.id, Be);
						}
						const Ee = () =>
							!this.qb.options.get(o.EditorOption.readOnly) &&
							this.qb.options.get(o.EditorOption.dropIntoEditor).enabled;
						this.D(
							new t.$Hhb(this.nb, {
								onDragOver: (Ie) => {
									if (!Ee()) return;
									const Be = this.getTargetAtClientPoint(
										Ie.clientX,
										Ie.clientY,
									);
									Be?.position && this.ic(Be.position);
								},
								onDrop: async (Ie) => {
									if (!Ee() || (this.jc(), !Ie.dataTransfer)) return;
									const Be = this.getTargetAtClientPoint(
										Ie.clientX,
										Ie.clientY,
									);
									Be?.position &&
										this.W.fire({ position: Be.position, event: Ie });
								},
								onDragLeave: () => {
									this.jc();
								},
								onDragEnd: () => {
									this.jc();
								},
							}),
						),
							this.xb.addCodeEditor(this);
					}
					writeScreenReaderContent(ue) {
						this.tb?.view.writeScreenReaderContent(ue);
					}
					Kb(ue, fe, me, ve, ge = !1, be = !1, Ce = void 0) {
						return new r.$ssb(ue, fe, me, this.nb, ve, ge, be, Ce);
					}
					getId() {
						return this.getEditorType() + ":" + this.pb;
					}
					getEditorType() {
						return I.EditorType.ICodeEditor;
					}
					dispose() {
						this.xb.removeCodeEditor(this),
							this.Ab.dispose(),
							this.sb.clear(),
							(this.Bb = {}),
							(this.Cb = {}),
							this.Lb(),
							this.dc(this.ec()),
							this.g.fire(),
							super.dispose();
					}
					invokeWithinContext(ue) {
						return this.ub.invokeFunction(ue);
					}
					updateOptions(ue) {
						this.qb.updateOptions(ue || {});
					}
					getOptions() {
						return this.qb.options;
					}
					getOption(ue) {
						return this.qb.options.get(ue);
					}
					getRawOptions() {
						return this.qb.getRawOptions();
					}
					getOverflowWidgetsDomNode() {
						return this.ob;
					}
					getConfiguredWordAtPosition(ue) {
						return this.tb
							? $.$Ftb.getWordAtPosition(
									this.tb.model,
									this.qb.options.get(o.EditorOption.wordSeparators),
									this.qb.options.get(o.EditorOption.wordSegmenterLocales),
									ue,
								)
							: null;
					}
					getValue(ue = null) {
						if (!this.tb) return "";
						const fe = !!(ue && ue.preserveBOM);
						let me = k.EndOfLinePreference.TextDefined;
						return (
							ue &&
							ue.lineEnding &&
							ue.lineEnding ===
								`
`
								? (me = k.EndOfLinePreference.LF)
								: ue &&
									ue.lineEnding &&
									ue.lineEnding ===
										`\r
` &&
									(me = k.EndOfLinePreference.CRLF),
							this.tb.model.getValue(me, fe)
						);
					}
					setValue(ue) {
						try {
							if ((this.kc(), !this.tb)) return;
							this.tb.model.setValue(ue);
						} finally {
							this.lc();
						}
					}
					getModel() {
						return this.tb ? this.tb.model : null;
					}
					setModel(ue = null) {
						try {
							this.kc();
							const fe = ue;
							if (
								(this.tb === null && fe === null) ||
								(this.tb && this.tb.model === fe)
							)
								return;
							const me = {
								oldModelUrl: this.tb?.model.uri || null,
								newModelUrl: fe?.uri || null,
							};
							this.w.fire(me);
							const ve = this.hasTextFocus(),
								ge = this.ec();
							this.bc(fe),
								ve && this.hasModel() && this.focus(),
								this.Lb(),
								this.y.fire(me),
								this.dc(ge),
								(this.rb = this.f.onAfterModelAttached());
						} finally {
							this.lc();
						}
					}
					Lb() {
						if (((this.Eb = {}), this.Fb)) {
							for (const ue in this.Fb) {
								const fe = this.Fb[ue];
								for (const me in fe) this.gc(ue + "-" + me);
							}
							this.Fb = {};
						}
					}
					getVisibleRanges() {
						return this.tb ? this.tb.viewModel.getVisibleRanges() : [];
					}
					getVisibleRangesPlusViewportAboveBelow() {
						return this.tb
							? this.tb.viewModel.getVisibleRangesPlusViewportAboveBelow()
							: [];
					}
					getWhitespaces() {
						return this.tb ? this.tb.viewModel.viewLayout.getWhitespaces() : [];
					}
					static Mb(ue, fe, me, ve) {
						const ge = ue.model.validatePosition({
								lineNumber: fe,
								column: me,
							}),
							be =
								ue.viewModel.coordinatesConverter.convertModelPositionToViewPosition(
									ge,
								);
						return ue.viewModel.viewLayout.getVerticalOffsetAfterLineNumber(
							be.lineNumber,
							ve,
						);
					}
					getTopForLineNumber(ue, fe = !1) {
						return this.tb ? W.Nb(this.tb, ue, 1, fe) : -1;
					}
					getTopForPosition(ue, fe) {
						return this.tb ? W.Nb(this.tb, ue, fe, !1) : -1;
					}
					static Nb(ue, fe, me, ve = !1) {
						const ge = ue.model.validatePosition({
								lineNumber: fe,
								column: me,
							}),
							be =
								ue.viewModel.coordinatesConverter.convertModelPositionToViewPosition(
									ge,
								);
						return ue.viewModel.viewLayout.getVerticalOffsetForLineNumber(
							be.lineNumber,
							ve,
						);
					}
					getBottomForLineNumber(ue, fe = !1) {
						if (!this.tb) return -1;
						const me = this.tb.model.getLineMaxColumn(ue);
						return W.Mb(this.tb, ue, me, fe);
					}
					setHiddenAreas(ue, fe) {
						this.tb?.viewModel.setHiddenAreas(
							ue.map((me) => l.$iL.lift(me)),
							fe,
						);
					}
					getVisibleColumnFromPosition(ue) {
						if (!this.tb) return ue.column;
						const fe = this.tb.model.validatePosition(ue),
							me = this.tb.model.getOptions().tabSize;
						return (
							f.$BM.visibleColumnFromColumn(
								this.tb.model.getLineContent(fe.lineNumber),
								fe.column,
								me,
							) + 1
						);
					}
					getStatusbarColumn(ue) {
						if (!this.tb) return ue.column;
						const fe = this.tb.model.validatePosition(ue),
							me = this.tb.model.getOptions().tabSize;
						return f.$BM.toStatusbarColumn(
							this.tb.model.getLineContent(fe.lineNumber),
							fe.column,
							me,
						);
					}
					getPosition() {
						return this.tb ? this.tb.viewModel.getPosition() : null;
					}
					setPosition(ue, fe = "api") {
						if (this.tb) {
							if (!s.$hL.isIPosition(ue)) throw new Error("Invalid arguments");
							this.tb.viewModel.setSelections(fe, [
								{
									selectionStartLineNumber: ue.lineNumber,
									selectionStartColumn: ue.column,
									positionLineNumber: ue.lineNumber,
									positionColumn: ue.column,
								},
							]);
						}
					}
					Ob(ue, fe, me, ve) {
						if (!this.tb) return;
						if (!l.$iL.isIRange(ue)) throw new Error("Invalid arguments");
						const ge = this.tb.model.validateRange(ue),
							be =
								this.tb.viewModel.coordinatesConverter.convertModelRangeToViewRange(
									ge,
								);
						this.tb.viewModel.revealRange("api", me, be, fe, ve);
					}
					revealLine(ue, fe = I.ScrollType.Smooth) {
						this.Pb(ue, N.VerticalRevealType.Simple, fe);
					}
					revealLineInCenter(ue, fe = I.ScrollType.Smooth) {
						this.Pb(ue, N.VerticalRevealType.Center, fe);
					}
					revealLineInCenterIfOutsideViewport(ue, fe = I.ScrollType.Smooth) {
						this.Pb(ue, N.VerticalRevealType.CenterIfOutsideViewport, fe);
					}
					revealLineNearTop(ue, fe = I.ScrollType.Smooth) {
						this.Pb(ue, N.VerticalRevealType.NearTop, fe);
					}
					Pb(ue, fe, me) {
						if (typeof ue != "number") throw new Error("Invalid arguments");
						this.Ob(new l.$iL(ue, 1, ue, 1), fe, !1, me);
					}
					revealPosition(ue, fe = I.ScrollType.Smooth) {
						this.Qb(ue, N.VerticalRevealType.Simple, !0, fe);
					}
					revealPositionInCenter(ue, fe = I.ScrollType.Smooth) {
						this.Qb(ue, N.VerticalRevealType.Center, !0, fe);
					}
					revealPositionInCenterIfOutsideViewport(
						ue,
						fe = I.ScrollType.Smooth,
					) {
						this.Qb(ue, N.VerticalRevealType.CenterIfOutsideViewport, !0, fe);
					}
					revealPositionNearTop(ue, fe = I.ScrollType.Smooth) {
						this.Qb(ue, N.VerticalRevealType.NearTop, !0, fe);
					}
					Qb(ue, fe, me, ve) {
						if (!s.$hL.isIPosition(ue)) throw new Error("Invalid arguments");
						this.Ob(
							new l.$iL(ue.lineNumber, ue.column, ue.lineNumber, ue.column),
							fe,
							me,
							ve,
						);
					}
					getSelection() {
						return this.tb ? this.tb.viewModel.getSelection() : null;
					}
					getSelections() {
						return this.tb ? this.tb.viewModel.getSelections() : null;
					}
					setSelection(ue, fe = "api") {
						const me = y.$kL.isISelection(ue),
							ve = l.$iL.isIRange(ue);
						if (!me && !ve) throw new Error("Invalid arguments");
						if (me) this.Rb(ue, fe);
						else if (ve) {
							const ge = {
								selectionStartLineNumber: ue.startLineNumber,
								selectionStartColumn: ue.startColumn,
								positionLineNumber: ue.endLineNumber,
								positionColumn: ue.endColumn,
							};
							this.Rb(ge, fe);
						}
					}
					Rb(ue, fe) {
						if (!this.tb) return;
						const me = new y.$kL(
							ue.selectionStartLineNumber,
							ue.selectionStartColumn,
							ue.positionLineNumber,
							ue.positionColumn,
						);
						this.tb.viewModel.setSelections(fe, [me]);
					}
					revealLines(ue, fe, me = I.ScrollType.Smooth) {
						this.Sb(ue, fe, N.VerticalRevealType.Simple, me);
					}
					revealLinesInCenter(ue, fe, me = I.ScrollType.Smooth) {
						this.Sb(ue, fe, N.VerticalRevealType.Center, me);
					}
					revealLinesInCenterIfOutsideViewport(
						ue,
						fe,
						me = I.ScrollType.Smooth,
					) {
						this.Sb(ue, fe, N.VerticalRevealType.CenterIfOutsideViewport, me);
					}
					revealLinesNearTop(ue, fe, me = I.ScrollType.Smooth) {
						this.Sb(ue, fe, N.VerticalRevealType.NearTop, me);
					}
					Sb(ue, fe, me, ve) {
						if (typeof ue != "number" || typeof fe != "number")
							throw new Error("Invalid arguments");
						this.Ob(new l.$iL(ue, 1, fe, 1), me, !1, ve);
					}
					revealRange(ue, fe = I.ScrollType.Smooth, me = !1, ve = !0) {
						this.Tb(
							ue,
							me ? N.VerticalRevealType.Center : N.VerticalRevealType.Simple,
							ve,
							fe,
						);
					}
					revealRangeInCenter(ue, fe = I.ScrollType.Smooth) {
						this.Tb(ue, N.VerticalRevealType.Center, !0, fe);
					}
					revealRangeInCenterIfOutsideViewport(ue, fe = I.ScrollType.Smooth) {
						this.Tb(ue, N.VerticalRevealType.CenterIfOutsideViewport, !0, fe);
					}
					revealRangeNearTop(ue, fe = I.ScrollType.Smooth) {
						this.Tb(ue, N.VerticalRevealType.NearTop, !0, fe);
					}
					revealRangeNearTopIfOutsideViewport(ue, fe = I.ScrollType.Smooth) {
						this.Tb(ue, N.VerticalRevealType.NearTopIfOutsideViewport, !0, fe);
					}
					revealRangeAtTop(ue, fe = I.ScrollType.Smooth) {
						this.Tb(ue, N.VerticalRevealType.Top, !0, fe);
					}
					Tb(ue, fe, me, ve) {
						if (!l.$iL.isIRange(ue)) throw new Error("Invalid arguments");
						this.Ob(l.$iL.lift(ue), fe, me, ve);
					}
					setSelections(ue, fe = "api", me = v.CursorChangeReason.NotSet) {
						if (this.tb) {
							if (!ue || ue.length === 0) throw new Error("Invalid arguments");
							for (let ve = 0, ge = ue.length; ve < ge; ve++)
								if (!y.$kL.isISelection(ue[ve]))
									throw new Error("Invalid arguments");
							this.tb.viewModel.setSelections(fe, ue, me);
						}
					}
					getContentWidth() {
						return this.tb
							? this.tb.viewModel.viewLayout.getContentWidth()
							: -1;
					}
					getScrollWidth() {
						return this.tb ? this.tb.viewModel.viewLayout.getScrollWidth() : -1;
					}
					getScrollLeft() {
						return this.tb
							? this.tb.viewModel.viewLayout.getCurrentScrollLeft()
							: -1;
					}
					getContentHeight() {
						return this.tb
							? this.tb.viewModel.viewLayout.getContentHeight()
							: -1;
					}
					getScrollHeight() {
						return this.tb
							? this.tb.viewModel.viewLayout.getScrollHeight()
							: -1;
					}
					getScrollTop() {
						return this.tb
							? this.tb.viewModel.viewLayout.getCurrentScrollTop()
							: -1;
					}
					setScrollLeft(ue, fe = I.ScrollType.Immediate) {
						if (this.tb) {
							if (typeof ue != "number") throw new Error("Invalid arguments");
							this.tb.viewModel.viewLayout.setScrollPosition(
								{ scrollLeft: ue },
								fe,
							);
						}
					}
					setScrollTop(ue, fe = I.ScrollType.Immediate) {
						if (this.tb) {
							if (typeof ue != "number") throw new Error("Invalid arguments");
							this.tb.viewModel.viewLayout.setScrollPosition(
								{ scrollTop: ue },
								fe,
							);
						}
					}
					setScrollPosition(ue, fe = I.ScrollType.Immediate) {
						this.tb && this.tb.viewModel.viewLayout.setScrollPosition(ue, fe);
					}
					hasPendingScrollAnimation() {
						return this.tb
							? this.tb.viewModel.viewLayout.hasPendingScrollAnimation()
							: !1;
					}
					saveViewState() {
						if (!this.tb) return null;
						const ue = this.f.saveViewState(),
							fe = this.tb.viewModel.saveCursorState(),
							me = this.tb.viewModel.saveState();
						return { cursorState: fe, viewState: me, contributionsState: ue };
					}
					restoreViewState(ue) {
						if (!this.tb || !this.tb.hasRealView) return;
						const fe = ue;
						if (fe && fe.cursorState && fe.viewState) {
							const me = fe.cursorState;
							Array.isArray(me)
								? me.length > 0 && this.tb.viewModel.restoreCursorState(me)
								: this.tb.viewModel.restoreCursorState([me]),
								this.f.restoreViewState(fe.contributionsState || {});
							const ve = this.tb.viewModel.reduceRestoreState(fe.viewState);
							this.tb.view.restoreState(ve);
						}
					}
					handleInitialized() {
						this._getViewModel()?.visibleLinesStabilized();
					}
					onVisible() {
						this.tb?.view.refreshFocusState();
					}
					onHide() {
						this.tb?.view.refreshFocusState(), this.Ab.refreshState();
					}
					getContribution(ue) {
						return this.f.get(ue);
					}
					getActions() {
						return Array.from(this.sb.values());
					}
					getSupportedActions() {
						let ue = this.getActions();
						return (ue = ue.filter((fe) => fe.isSupported())), ue;
					}
					getAction(ue) {
						return this.sb.get(ue) || null;
					}
					trigger(ue, fe, me) {
						me = me || {};
						try {
							switch ((this.kc(), fe)) {
								case I.Handler.CompositionStart:
									this.Vb();
									return;
								case I.Handler.CompositionEnd:
									this.Wb(ue);
									return;
								case I.Handler.Type: {
									const ge = me;
									this.Xb(ue, ge.text || "");
									return;
								}
								case I.Handler.ReplacePreviousChar: {
									const ge = me;
									this.Yb(ue, ge.text || "", ge.replaceCharCnt || 0, 0, 0);
									return;
								}
								case I.Handler.CompositionType: {
									const ge = me;
									this.Yb(
										ue,
										ge.text || "",
										ge.replacePrevCharCnt || 0,
										ge.replaceNextCharCnt || 0,
										ge.positionDelta || 0,
									);
									return;
								}
								case I.Handler.Paste: {
									const ge = me;
									this.Zb(
										ue,
										ge.text || "",
										ge.pasteOnNewLine || !1,
										ge.multicursorText || null,
										ge.mode || null,
										ge.clipboardEvent,
									);
									return;
								}
								case I.Handler.Cut:
									this.$b(ue);
									return;
							}
							const ve = this.getAction(fe);
							if (ve) {
								Promise.resolve(ve.run(me)).then(void 0, i.$4);
								return;
							}
							if (!this.tb || this.ac(ue, fe, me)) return;
							this.Ub(fe, me);
						} finally {
							this.lc();
						}
					}
					Ub(ue, fe) {
						this.yb.executeCommand(ue, fe);
					}
					Vb() {
						this.tb && (this.tb.viewModel.startComposition(), this.M.fire());
					}
					Wb(ue) {
						this.tb && (this.tb.viewModel.endComposition(ue), this.N.fire());
					}
					Xb(ue, fe) {
						!this.tb ||
							fe.length === 0 ||
							(ue === "keyboard" && this.J.fire(fe),
							this.tb.viewModel.type(fe, ue),
							ue === "keyboard" && this.L.fire(fe));
					}
					Yb(ue, fe, me, ve, ge) {
						this.tb && this.tb.viewModel.compositionType(fe, me, ve, ge, ue);
					}
					Zb(ue, fe, me, ve, ge, be) {
						if (!this.tb) return;
						const Ce = this.tb.viewModel,
							Le = Ce.getSelection().getStartPosition();
						Ce.paste(fe, me, ve, ue);
						const Fe = Ce.getSelection().getStartPosition();
						ue === "keyboard" &&
							this.O.fire({
								clipboardEvent: be,
								range: new l.$iL(
									Le.lineNumber,
									Le.column,
									Fe.lineNumber,
									Fe.column,
								),
								languageId: ge,
							});
					}
					$b(ue) {
						this.tb && this.tb.viewModel.cut(ue);
					}
					ac(ue, fe, me) {
						const ve = a.EditorExtensionsRegistry.getEditorCommand(fe);
						return ve
							? ((me = me || {}),
								(me.source = ue),
								this.ub.invokeFunction((ge) => {
									Promise.resolve(ve.runEditorCommand(ge, this, me)).then(
										void 0,
										i.$4,
									);
								}),
								!0)
							: !1;
					}
					_getViewModel() {
						return this.tb ? this.tb.viewModel : null;
					}
					pushUndoStop() {
						return !this.tb || this.qb.options.get(o.EditorOption.readOnly)
							? !1
							: (this.tb.model.pushStackElement(), !0);
					}
					popUndoStop() {
						return !this.tb || this.qb.options.get(o.EditorOption.readOnly)
							? !1
							: (this.tb.model.popStackElement(), !0);
					}
					executeEdits(ue, fe, me) {
						if (!this.tb || this.qb.options.get(o.EditorOption.readOnly))
							return !1;
						let ve;
						return (
							me
								? Array.isArray(me)
									? (ve = () => me)
									: (ve = me)
								: (ve = () => null),
							this.tb.viewModel.executeEdits(ue, fe, ve),
							!0
						);
					}
					executeCommand(ue, fe) {
						this.tb && this.tb.viewModel.executeCommand(fe, ue);
					}
					executeCommands(ue, fe) {
						this.tb && this.tb.viewModel.executeCommands(fe, ue);
					}
					createDecorationsCollection(ue) {
						return new se(this, ue);
					}
					changeDecorations(ue) {
						return this.tb
							? this.tb.model.changeDecorations(ue, this.pb)
							: null;
					}
					getLineDecorations(ue) {
						return this.tb
							? this.tb.model.getLineDecorations(
									ue,
									this.pb,
									(0, o.filterValidationDecorations)(this.qb.options),
								)
							: null;
					}
					getDecorationsInRange(ue) {
						return this.tb
							? this.tb.model.getDecorationsInRange(
									ue,
									this.pb,
									(0, o.filterValidationDecorations)(this.qb.options),
								)
							: null;
					}
					deltaDecorations(ue, fe) {
						return this.tb
							? ue.length === 0 && fe.length === 0
								? ue
								: this.tb.model.deltaDecorations(ue, fe, this.pb)
							: [];
					}
					removeDecorations(ue) {
						!this.tb ||
							ue.length === 0 ||
							this.tb.model.changeDecorations((fe) => {
								fe.deltaDecorations(ue, []);
							});
					}
					setDecorationsByType(ue, fe, me) {
						const ve = {},
							ge = this.Fb[fe] || {};
						this.Fb[fe] = ve;
						const be = [];
						for (const Le of me) {
							let Fe = fe;
							if (Le.renderOptions) {
								const xe = (0, E.$Aj)(Le.renderOptions).toString(16);
								(Fe = fe + "-" + xe),
									!ge[xe] && !ve[xe] && this.fc(ue, Fe, Le.renderOptions, fe),
									(ve[xe] = !0);
							}
							const Oe = this.hc(Fe, !!Le.hoverMessage);
							Le.hoverMessage && (Oe.hoverMessage = Le.hoverMessage),
								be.push({ range: Le.range, options: Oe });
						}
						for (const Le in ge) ve[Le] || this.gc(fe + "-" + Le);
						const Ce = this.Eb[fe] || [];
						this.changeDecorations(
							(Le) => (this.Eb[fe] = Le.deltaDecorations(Ce, be)),
						);
					}
					setDecorationsByTypeFast(ue, fe) {
						const me = this.Fb[ue] || {};
						for (const Ce in me) this.gc(ue + "-" + Ce);
						this.Fb[ue] = {};
						const ve = D.$eY.createDynamic(this.hc(ue, !1)),
							ge = new Array(fe.length);
						for (let Ce = 0, Le = fe.length; Ce < Le; Ce++)
							ge[Ce] = { range: fe[Ce], options: ve };
						const be = this.Eb[ue] || [];
						this.changeDecorations(
							(Ce) => (this.Eb[ue] = Ce.deltaDecorations(be, ge)),
						);
					}
					removeDecorationsByType(ue) {
						const fe = this.Eb[ue];
						fe && this.changeDecorations((me) => me.deltaDecorations(fe, [])),
							this.Eb.hasOwnProperty(ue) && delete this.Eb[ue],
							this.Fb.hasOwnProperty(ue) && delete this.Fb[ue];
					}
					getLayoutInfo() {
						return this.qb.options.get(o.EditorOption.layoutInfo);
					}
					createOverviewRuler(ue) {
						return !this.tb || !this.tb.hasRealView
							? null
							: this.tb.view.createOverviewRuler(ue);
					}
					getContainerDomNode() {
						return this.nb;
					}
					getDomNode() {
						return !this.tb || !this.tb.hasRealView
							? null
							: this.tb.view.domNode.domNode;
					}
					delegateVerticalScrollbarPointerDown(ue) {
						!this.tb ||
							!this.tb.hasRealView ||
							this.tb.view.delegateVerticalScrollbarPointerDown(ue);
					}
					delegateScrollFromMouseWheelEvent(ue) {
						!this.tb ||
							!this.tb.hasRealView ||
							this.tb.view.delegateScrollFromMouseWheelEvent(ue);
					}
					layout(ue, fe = !1) {
						this.qb.observeContainer(ue), fe || this.render();
					}
					focus() {
						!this.tb || !this.tb.hasRealView || this.tb.view.focus();
					}
					hasTextFocus() {
						return !this.tb || !this.tb.hasRealView
							? !1
							: this.tb.view.isFocused();
					}
					hasWidgetFocus() {
						return this.Ab && this.Ab.hasFocus();
					}
					addContentWidget(ue) {
						const fe = { widget: ue, position: ue.getPosition() };
						this.Bb.hasOwnProperty(ue.getId()) &&
							console.warn(
								"Overwriting a content widget with the same id:" + ue.getId(),
							),
							(this.Bb[ue.getId()] = fe),
							this.tb &&
								this.tb.hasRealView &&
								this.tb.view.addContentWidget(fe);
					}
					layoutContentWidget(ue) {
						const fe = ue.getId();
						if (this.Bb.hasOwnProperty(fe)) {
							const me = this.Bb[fe];
							(me.position = ue.getPosition()),
								this.tb &&
									this.tb.hasRealView &&
									this.tb.view.layoutContentWidget(me);
						}
					}
					removeContentWidget(ue) {
						const fe = ue.getId();
						if (this.Bb.hasOwnProperty(fe)) {
							const me = this.Bb[fe];
							delete this.Bb[fe],
								this.tb &&
									this.tb.hasRealView &&
									this.tb.view.removeContentWidget(me);
						}
					}
					addOverlayWidget(ue) {
						const fe = { widget: ue, position: ue.getPosition() };
						this.Cb.hasOwnProperty(ue.getId()) &&
							console.warn("Overwriting an overlay widget with the same id."),
							(this.Cb[ue.getId()] = fe),
							this.tb &&
								this.tb.hasRealView &&
								this.tb.view.addOverlayWidget(fe);
					}
					layoutOverlayWidget(ue) {
						const fe = ue.getId();
						if (this.Cb.hasOwnProperty(fe)) {
							const me = this.Cb[fe];
							(me.position = ue.getPosition()),
								this.tb &&
									this.tb.hasRealView &&
									this.tb.view.layoutOverlayWidget(me);
						}
					}
					removeOverlayWidget(ue) {
						const fe = ue.getId();
						if (this.Cb.hasOwnProperty(fe)) {
							const me = this.Cb[fe];
							delete this.Cb[fe],
								this.tb &&
									this.tb.hasRealView &&
									this.tb.view.removeOverlayWidget(me);
						}
					}
					addGlyphMarginWidget(ue) {
						const fe = { widget: ue, position: ue.getPosition() };
						this.Db.hasOwnProperty(ue.getId()) &&
							console.warn(
								"Overwriting a glyph margin widget with the same id.",
							),
							(this.Db[ue.getId()] = fe),
							this.tb &&
								this.tb.hasRealView &&
								this.tb.view.addGlyphMarginWidget(fe);
					}
					layoutGlyphMarginWidget(ue) {
						const fe = ue.getId();
						if (this.Db.hasOwnProperty(fe)) {
							const me = this.Db[fe];
							(me.position = ue.getPosition()),
								this.tb &&
									this.tb.hasRealView &&
									this.tb.view.layoutGlyphMarginWidget(me);
						}
					}
					removeGlyphMarginWidget(ue) {
						const fe = ue.getId();
						if (this.Db.hasOwnProperty(fe)) {
							const me = this.Db[fe];
							delete this.Db[fe],
								this.tb &&
									this.tb.hasRealView &&
									this.tb.view.removeGlyphMarginWidget(me);
						}
					}
					changeViewZones(ue) {
						!this.tb || !this.tb.hasRealView || this.tb.view.change(ue);
					}
					getTargetAtClientPoint(ue, fe) {
						return !this.tb || !this.tb.hasRealView
							? null
							: this.tb.view.getTargetAtClientPoint(ue, fe);
					}
					getScrolledVisiblePosition(ue) {
						if (!this.tb || !this.tb.hasRealView) return null;
						const fe = this.tb.model.validatePosition(ue),
							me = this.qb.options,
							ve = me.get(o.EditorOption.layoutInfo),
							ge =
								W.Nb(this.tb, fe.lineNumber, fe.column) - this.getScrollTop(),
							be =
								this.tb.view.getOffsetForColumn(fe.lineNumber, fe.column) +
								ve.glyphMarginWidth +
								ve.lineNumbersWidth +
								ve.decorationsWidth -
								this.getScrollLeft();
						return {
							top: ge,
							left: be,
							height: me.get(o.EditorOption.lineHeight),
						};
					}
					getOffsetForColumn(ue, fe) {
						return !this.tb || !this.tb.hasRealView
							? -1
							: this.tb.view.getOffsetForColumn(ue, fe);
					}
					render(ue = !1) {
						!this.tb ||
							!this.tb.hasRealView ||
							this.tb.viewModel.batchEvents(() => {
								this.tb.view.render(!0, ue);
							});
					}
					setAriaOptions(ue) {
						!this.tb || !this.tb.hasRealView || this.tb.view.setAriaOptions(ue);
					}
					applyFontInfo(ue) {
						(0, m.$jsb)(ue, this.qb.options.get(o.EditorOption.fontInfo));
					}
					setBanner(ue, fe) {
						this.Gb && this.nb.contains(this.Gb) && this.Gb.remove(),
							(this.Gb = ue),
							this.qb.setReservedHeight(ue ? fe : 0),
							this.Gb && this.nb.prepend(this.Gb);
					}
					bc(ue) {
						if (!ue) {
							this.tb = null;
							return;
						}
						const fe = [];
						this.nb.setAttribute("data-mode-id", ue.getLanguageId()),
							this.qb.setIsDominatedByLongLines(ue.isDominatedByLongLines()),
							this.qb.setModelLineCount(ue.getLineCount());
						const me = ue.onBeforeAttached(),
							ve = new R.$qwb(
								this.pb,
								this.qb,
								ue,
								n.$Pvb.create(t.getWindow(this.nb)),
								A.$Svb.create(this.qb.options),
								(Ce) => t.$hgb(t.getWindow(this.nb), Ce),
								this.Ib,
								this.zb,
								me,
								{
									batchChanges: (Ce) => {
										try {
											return this.kc(), Ce();
										} finally {
											this.lc();
										}
									},
								},
							);
						fe.push(ue.onWillDispose(() => this.setModel(null))),
							fe.push(
								ve.onEvent((Ce) => {
									switch (Ce.kind) {
										case O.OutgoingViewModelEventKind.ContentSizeChanged:
											this.eb.fire(Ce);
											break;
										case O.OutgoingViewModelEventKind.FocusChanged:
											this.H.setValue(Ce.hasFocus);
											break;
										case O.OutgoingViewModelEventKind.ScrollChanged:
											this.fb.fire(Ce);
											break;
										case O.OutgoingViewModelEventKind.ViewZonesChanged:
											this.gb.fire();
											break;
										case O.OutgoingViewModelEventKind.HiddenAreasChanged:
											this.hb.fire();
											break;
										case O.OutgoingViewModelEventKind.ReadOnlyEditAttempt:
											this.F.fire();
											break;
										case O.OutgoingViewModelEventKind.CursorStateChanged: {
											if (Ce.reachedMaxCursorCount) {
												const xe = this.getOption(
														o.EditorOption.multiCursorLimit,
													),
													He = B.localize(189, null, xe);
												this.wb.prompt(q.Severity.Warning, He, [
													{
														label: "Find and Replace",
														run: () => {
															this.yb.executeCommand(
																"editor.action.startFindReplaceAction",
															);
														},
													},
													{
														label: B.localize(190, null),
														run: () => {
															this.yb.executeCommand(
																"workbench.action.openSettings2",
																{ query: "editor.multiCursorLimit" },
															);
														},
													},
												]);
											}
											const Le = [];
											for (let xe = 0, He = Ce.selections.length; xe < He; xe++)
												Le[xe] = Ce.selections[xe].getPosition();
											const Fe = {
												position: Le[0],
												secondaryPositions: Le.slice(1),
												reason: Ce.reason,
												source: Ce.source,
											};
											this.z.fire(Fe);
											const Oe = {
												selection: Ce.selections[0],
												secondarySelections: Ce.selections.slice(1),
												modelVersionId: Ce.modelVersionId,
												oldSelections: Ce.oldSelections,
												oldModelVersionId: Ce.oldModelVersionId,
												source: Ce.source,
												reason: Ce.reason,
											};
											this.C.fire(Oe);
											break;
										}
										case O.OutgoingViewModelEventKind.ModelDecorationsChanged:
											this.q.fire(Ce.event);
											break;
										case O.OutgoingViewModelEventKind.ModelLanguageChanged:
											this.nb.setAttribute("data-mode-id", ue.getLanguageId()),
												this.j.fire(Ce.event);
											break;
										case O.OutgoingViewModelEventKind
											.ModelLanguageConfigurationChanged:
											this.m.fire(Ce.event);
											break;
										case O.OutgoingViewModelEventKind.ModelContentChanged:
											this.h.fire(Ce.event);
											break;
										case O.OutgoingViewModelEventKind.ModelOptionsChanged:
											this.n.fire(Ce.event);
											break;
										case O.OutgoingViewModelEventKind.ModelTokensChanged:
											this.t.fire(Ce.event);
											break;
									}
								}),
							);
						const [ge, be] = this.cc(ve);
						if (be) {
							this.nb.appendChild(ge.domNode.domNode);
							let Ce = Object.keys(this.Bb);
							for (let Le = 0, Fe = Ce.length; Le < Fe; Le++) {
								const Oe = Ce[Le];
								ge.addContentWidget(this.Bb[Oe]);
							}
							Ce = Object.keys(this.Cb);
							for (let Le = 0, Fe = Ce.length; Le < Fe; Le++) {
								const Oe = Ce[Le];
								ge.addOverlayWidget(this.Cb[Oe]);
							}
							Ce = Object.keys(this.Db);
							for (let Le = 0, Fe = Ce.length; Le < Fe; Le++) {
								const Oe = Ce[Le];
								ge.addGlyphMarginWidget(this.Db[Oe]);
							}
							ge.render(!1, !0),
								ge.domNode.domNode.setAttribute("data-uri", ue.uri.toString());
						}
						this.tb = new ie(ue, ve, ge, be, fe, me);
					}
					cc(ue) {
						let fe;
						this.isSimpleWidget
							? (fe = {
									paste: (ge, be, Ce, Le) => {
										this.Zb("keyboard", ge, be, Ce, Le);
									},
									type: (ge) => {
										this.Xb("keyboard", ge);
									},
									compositionType: (ge, be, Ce, Le) => {
										this.Yb("keyboard", ge, be, Ce, Le);
									},
									startComposition: () => {
										this.Vb();
									},
									endComposition: () => {
										this.Wb("keyboard");
									},
									cut: () => {
										this.$b("keyboard");
									},
								})
							: (fe = {
									paste: (ge, be, Ce, Le) => {
										const Fe = {
											text: ge,
											pasteOnNewLine: be,
											multicursorText: Ce,
											mode: Le,
										};
										this.yb.executeCommand(I.Handler.Paste, Fe);
									},
									type: (ge) => {
										const be = { text: ge };
										this.yb.executeCommand(I.Handler.Type, be);
									},
									compositionType: (ge, be, Ce, Le) => {
										if (Ce || Le) {
											const Fe = {
												text: ge,
												replacePrevCharCnt: be,
												replaceNextCharCnt: Ce,
												positionDelta: Le,
											};
											this.yb.executeCommand(I.Handler.CompositionType, Fe);
										} else {
											const Fe = { text: ge, replaceCharCnt: be };
											this.yb.executeCommand(I.Handler.ReplacePreviousChar, Fe);
										}
									},
									startComposition: () => {
										this.yb.executeCommand(I.Handler.CompositionStart, {});
									},
									endComposition: () => {
										this.yb.executeCommand(I.Handler.CompositionEnd, {});
									},
									cut: () => {
										this.yb.executeCommand(I.Handler.Cut, {});
									},
								});
						const me = new g.$Yub(ue.coordinatesConverter);
						return (
							(me.onKeyDown = (ge) => this.db.fire(ge)),
							(me.onKeyUp = (ge) => this.bb.fire(ge)),
							(me.onContextMenu = (ge) => this.X.fire(ge)),
							(me.onMouseMove = (ge) => this.Y.fire(ge)),
							(me.onMouseLeave = (ge) => this.Z.fire(ge)),
							(me.onMouseDown = (ge) => this.Q.fire(ge)),
							(me.onMouseUp = (ge) => this.P.fire(ge)),
							(me.onMouseDrag = (ge) => this.R.fire(ge)),
							(me.onMouseDrop = (ge) => this.S.fire(ge)),
							(me.onMouseDropCanceled = (ge) => this.U.fire(ge)),
							(me.onMouseWheel = (ge) => this.ab.fire(ge)),
							[
								new c.View(
									fe,
									this.qb,
									this.zb.getColorTheme(),
									ue,
									me,
									this.ob,
									this.ub,
								),
								!0,
							]
						);
					}
					dc(ue) {
						ue?.removeAllDecorationsWithOwnerId(this.pb);
					}
					ec() {
						if ((this.rb?.dispose(), (this.rb = void 0), !this.tb)) return null;
						const ue = this.tb.model,
							fe = this.tb.hasRealView ? this.tb.view.domNode.domNode : null;
						return (
							this.tb.dispose(),
							(this.tb = null),
							this.nb.removeAttribute("data-mode-id"),
							fe && this.nb.contains(fe) && fe.remove(),
							this.Gb && this.nb.contains(this.Gb) && this.Gb.remove(),
							ue
						);
					}
					fc(ue, fe, me, ve) {
						this.xb.registerDecorationType(ue, fe, me, ve, this);
					}
					gc(ue) {
						this.xb.removeDecorationType(ue);
					}
					hc(ue, fe) {
						return this.xb.resolveDecorationOptions(ue, fe);
					}
					getTelemetryData() {
						return this.mb;
					}
					hasModel() {
						return this.tb !== null;
					}
					ic(ue) {
						const fe = [
							{
								range: new l.$iL(
									ue.lineNumber,
									ue.column,
									ue.lineNumber,
									ue.column,
								),
								options: W.b,
							},
						];
						this.Hb.set(fe), this.revealPosition(ue, I.ScrollType.Immediate);
					}
					jc() {
						this.Hb.clear();
					}
					setContextValue(ue, fe) {
						this.vb.createKey(ue, fe);
					}
					kc() {
						this.ib++, this.ib === 1 && this.jb.fire();
					}
					lc() {
						this.ib--, this.ib === 0 && this.lb.fire();
					}
				};
				(e.$rwb = X),
					(e.$rwb =
						X =
						W =
							Ne(
								[
									j(3, x.$Li),
									j(4, h.$dtb),
									j(5, z.$ek),
									j(6, F.$6j),
									j(7, G.$iP),
									j(8, q.$4N),
									j(9, U.$XK),
									j(10, P.$aN),
									j(11, M.$k3),
									j(12, J.$5X),
								],
								X,
							));
				let Y = 0;
				class ie {
					constructor(ue, fe, me, ve, ge, be) {
						(this.model = ue),
							(this.viewModel = fe),
							(this.view = me),
							(this.hasRealView = ve),
							(this.listenersToRemove = ge),
							(this.attachedView = be);
					}
					dispose() {
						(0, C.$Vc)(this.listenersToRemove),
							this.model.onBeforeDetached(this.attachedView),
							this.hasRealView && this.view.dispose(),
							this.viewModel.dispose();
					}
				}
				var ne;
				(function (ye) {
					(ye[(ye.NotSet = 0)] = "NotSet"),
						(ye[(ye.False = 1)] = "False"),
						(ye[(ye.True = 2)] = "True");
				})(ne || (ne = {}));
				class ee extends C.$1c {
					constructor(ue) {
						super(),
							(this.g = ue),
							(this.b = this.D(new w.$re(this.g))),
							(this.onDidChangeToTrue = this.b.event),
							(this.c = this.D(new w.$re(this.g))),
							(this.onDidChangeToFalse = this.c.event),
							(this.f = ne.NotSet);
					}
					setValue(ue) {
						const fe = ue ? ne.True : ne.False;
						this.f !== fe &&
							((this.f = fe),
							this.f === ne.True
								? this.b.fire()
								: this.f === ne.False && this.c.fire());
					}
				}
				e.$swb = ee;
				class _ extends w.$re {
					constructor(ue, fe) {
						super({ deliveryQueue: fe }), (this.h = ue);
					}
					fire(ue) {
						this.h.onBeforeInteractionEvent(), super.fire(ue);
					}
				}
				class te extends C.$1c {
					constructor(ue, fe, me) {
						super(),
							(this.b = ue),
							fe.createKey("editorId", ue.getId()),
							(this.c = T.EditorContextKeys.editorSimpleInput.bindTo(fe)),
							(this.f = T.EditorContextKeys.focus.bindTo(fe)),
							(this.g = T.EditorContextKeys.textInputFocus.bindTo(fe)),
							(this.h = T.EditorContextKeys.editorTextFocus.bindTo(fe)),
							(this.j = T.EditorContextKeys.tabMovesFocus.bindTo(fe)),
							(this.m = T.EditorContextKeys.readOnly.bindTo(fe)),
							(this.n = T.EditorContextKeys.inDiffEditor.bindTo(fe)),
							(this.q = T.EditorContextKeys.columnSelection.bindTo(fe)),
							(this.t = T.EditorContextKeys.hasMultipleSelections.bindTo(fe)),
							(this.u = T.EditorContextKeys.hasNonEmptySelection.bindTo(fe)),
							(this.w = T.EditorContextKeys.canUndo.bindTo(fe)),
							(this.y = T.EditorContextKeys.canRedo.bindTo(fe)),
							this.D(this.b.onDidChangeConfiguration(() => this.z())),
							this.D(this.b.onDidChangeCursorSelection(() => this.C())),
							this.D(this.b.onDidFocusEditorWidget(() => this.F())),
							this.D(this.b.onDidBlurEditorWidget(() => this.F())),
							this.D(
								this.b.onDidFocusEditorText(() => {
									!this.m.get() &&
										!this.b.isChatCodeblock &&
										me.registerEvent("editor.focus"),
										this.F();
								}),
							),
							this.D(this.b.onDidBlurEditorText(() => this.F())),
							this.D(this.b.onDidChangeModel(() => this.G())),
							this.D(this.b.onDidChangeConfiguration(() => this.G())),
							this.D(u.$rsb.onDidChangeTabFocus((ve) => this.j.set(ve))),
							this.z(),
							this.C(),
							this.F(),
							this.G(),
							this.c.set(this.b.isSimpleWidget);
					}
					z() {
						const ue = this.b.getOptions();
						this.j.set(u.$rsb.getTabFocusMode()),
							this.m.set(ue.get(o.EditorOption.readOnly)),
							this.n.set(ue.get(o.EditorOption.inDiffEditor)),
							this.q.set(ue.get(o.EditorOption.columnSelection));
					}
					C() {
						const ue = this.b.getSelections();
						ue
							? (this.t.set(ue.length > 1),
								this.u.set(ue.some((fe) => !fe.isEmpty())))
							: (this.t.reset(), this.u.reset());
					}
					F() {
						this.f.set(this.b.hasWidgetFocus() && !this.b.isSimpleWidget),
							this.h.set(this.b.hasTextFocus() && !this.b.isSimpleWidget),
							this.g.set(this.b.hasTextFocus());
					}
					G() {
						const ue = this.b.getModel();
						this.w.set(!!(ue && ue.canUndo())),
							this.y.set(!!(ue && ue.canRedo()));
					}
				}
				class Q extends C.$1c {
					constructor(ue, fe, me) {
						super(),
							(this.L = ue),
							(this.M = fe),
							(this.N = me),
							(this.b = T.EditorContextKeys.languageId.bindTo(fe)),
							(this.c =
								T.EditorContextKeys.hasCompletionItemProvider.bindTo(fe)),
							(this.f = T.EditorContextKeys.hasCodeActionsProvider.bindTo(fe)),
							(this.g = T.EditorContextKeys.hasCodeLensProvider.bindTo(fe)),
							(this.h = T.EditorContextKeys.hasDefinitionProvider.bindTo(fe)),
							(this.j = T.EditorContextKeys.hasDeclarationProvider.bindTo(fe)),
							(this.m =
								T.EditorContextKeys.hasImplementationProvider.bindTo(fe)),
							(this.n =
								T.EditorContextKeys.hasTypeDefinitionProvider.bindTo(fe)),
							(this.q = T.EditorContextKeys.hasHoverProvider.bindTo(fe)),
							(this.t =
								T.EditorContextKeys.hasDocumentHighlightProvider.bindTo(fe)),
							(this.u =
								T.EditorContextKeys.hasDocumentSymbolProvider.bindTo(fe)),
							(this.w = T.EditorContextKeys.hasReferenceProvider.bindTo(fe)),
							(this.y = T.EditorContextKeys.hasRenameProvider.bindTo(fe)),
							(this.H =
								T.EditorContextKeys.hasSignatureHelpProvider.bindTo(fe)),
							(this.I = T.EditorContextKeys.hasInlayHintsProvider.bindTo(fe)),
							(this.z =
								T.EditorContextKeys.hasDocumentFormattingProvider.bindTo(fe)),
							(this.C =
								T.EditorContextKeys.hasDocumentSelectionFormattingProvider.bindTo(
									fe,
								)),
							(this.F =
								T.EditorContextKeys.hasMultipleDocumentFormattingProvider.bindTo(
									fe,
								)),
							(this.G =
								T.EditorContextKeys.hasMultipleDocumentSelectionFormattingProvider.bindTo(
									fe,
								)),
							(this.J = T.EditorContextKeys.isInEmbeddedEditor.bindTo(fe));
						const ve = () => this.O();
						this.D(ue.onDidChangeModel(ve)),
							this.D(ue.onDidChangeModelLanguage(ve)),
							this.D(me.completionProvider.onDidChange(ve)),
							this.D(me.codeActionProvider.onDidChange(ve)),
							this.D(me.codeLensProvider.onDidChange(ve)),
							this.D(me.definitionProvider.onDidChange(ve)),
							this.D(me.declarationProvider.onDidChange(ve)),
							this.D(me.implementationProvider.onDidChange(ve)),
							this.D(me.typeDefinitionProvider.onDidChange(ve)),
							this.D(me.hoverProvider.onDidChange(ve)),
							this.D(me.documentHighlightProvider.onDidChange(ve)),
							this.D(me.documentSymbolProvider.onDidChange(ve)),
							this.D(me.referenceProvider.onDidChange(ve)),
							this.D(me.renameProvider.onDidChange(ve)),
							this.D(me.documentFormattingEditProvider.onDidChange(ve)),
							this.D(me.documentRangeFormattingEditProvider.onDidChange(ve)),
							this.D(me.signatureHelpProvider.onDidChange(ve)),
							this.D(me.inlayHintsProvider.onDidChange(ve)),
							ve();
					}
					dispose() {
						super.dispose();
					}
					reset() {
						this.M.bufferChangeEvents(() => {
							this.b.reset(),
								this.c.reset(),
								this.f.reset(),
								this.g.reset(),
								this.h.reset(),
								this.j.reset(),
								this.m.reset(),
								this.n.reset(),
								this.q.reset(),
								this.t.reset(),
								this.u.reset(),
								this.w.reset(),
								this.y.reset(),
								this.z.reset(),
								this.C.reset(),
								this.H.reset(),
								this.J.reset();
						});
					}
					O() {
						const ue = this.L.getModel();
						if (!ue) {
							this.reset();
							return;
						}
						this.M.bufferChangeEvents(() => {
							this.b.set(ue.getLanguageId()),
								this.c.set(this.N.completionProvider.has(ue)),
								this.f.set(this.N.codeActionProvider.has(ue)),
								this.g.set(this.N.codeLensProvider.has(ue)),
								this.h.set(this.N.definitionProvider.has(ue)),
								this.j.set(this.N.declarationProvider.has(ue)),
								this.m.set(this.N.implementationProvider.has(ue)),
								this.n.set(this.N.typeDefinitionProvider.has(ue)),
								this.q.set(this.N.hoverProvider.has(ue)),
								this.t.set(this.N.documentHighlightProvider.has(ue)),
								this.u.set(this.N.documentSymbolProvider.has(ue)),
								this.w.set(this.N.referenceProvider.has(ue)),
								this.y.set(this.N.renameProvider.has(ue)),
								this.H.set(this.N.signatureHelpProvider.has(ue)),
								this.I.set(this.N.inlayHintsProvider.has(ue)),
								this.z.set(
									this.N.documentFormattingEditProvider.has(ue) ||
										this.N.documentRangeFormattingEditProvider.has(ue),
								),
								this.C.set(this.N.documentRangeFormattingEditProvider.has(ue)),
								this.F.set(
									this.N.documentFormattingEditProvider.all(ue).length +
										this.N.documentRangeFormattingEditProvider.all(ue).length >
										1,
								),
								this.G.set(
									this.N.documentRangeFormattingEditProvider.all(ue).length > 1,
								),
								this.J.set(
									ue.uri.scheme === d.Schemas.walkThroughSnippet ||
										ue.uri.scheme === d.Schemas.vscodeChatCodeBlock,
								);
						});
					}
				}
				e.$twb = Q;
				class Z extends C.$1c {
					constructor(ue, fe) {
						super(),
							(this.g = this.D(new w.$re())),
							(this.onChange = this.g.event),
							(this.j = void 0),
							(this.b = !1),
							(this.c = this.D(t.$dhb(ue))),
							(this.h = !1),
							this.D(
								this.c.onDidFocus(() => {
									(this.b = !0), this.m();
								}),
							),
							this.D(
								this.c.onDidBlur(() => {
									(this.b = !1), this.m();
								}),
							),
							fe &&
								((this.f = this.D(t.$dhb(fe))),
								this.D(
									this.f.onDidFocus(() => {
										(this.h = !0), this.m();
									}),
								),
								this.D(
									this.f.onDidBlur(() => {
										(this.h = !1), this.m();
									}),
								));
					}
					m() {
						const ue = this.b || this.h;
						this.j !== ue && ((this.j = ue), this.g.fire(void 0));
					}
					hasFocus() {
						return this.j ?? !1;
					}
					refreshState() {
						this.c.refreshState(), this.f?.refreshState?.();
					}
				}
				class se {
					get length() {
						return this.b.length;
					}
					constructor(ue, fe) {
						(this.d = ue),
							(this.b = []),
							(this.c = !1),
							Array.isArray(fe) && fe.length > 0 && this.set(fe);
					}
					onDidChange(ue, fe, me) {
						return this.d.onDidChangeModelDecorations((ve) => {
							this.c || ue.call(fe, ve);
						}, me);
					}
					getRange(ue) {
						return !this.d.hasModel() || ue >= this.b.length
							? null
							: this.d.getModel().getDecorationRange(this.b[ue]);
					}
					getRanges() {
						if (!this.d.hasModel()) return [];
						const ue = this.d.getModel(),
							fe = [];
						for (const me of this.b) {
							const ve = ue.getDecorationRange(me);
							ve && fe.push(ve);
						}
						return fe;
					}
					has(ue) {
						return this.b.includes(ue.id);
					}
					clear() {
						this.b.length !== 0 && this.set([]);
					}
					set(ue) {
						try {
							(this.c = !0),
								this.d.changeDecorations((fe) => {
									this.b = fe.deltaDecorations(this.b, ue);
								});
						} finally {
							this.c = !1;
						}
						return this.b;
					}
					append(ue) {
						let fe = [];
						try {
							(this.c = !0),
								this.d.changeDecorations((me) => {
									(fe = me.deltaDecorations([], ue)),
										(this.b = this.b.concat(fe));
								});
						} finally {
							this.c = !1;
						}
						return fe;
					}
				}
				const re = encodeURIComponent(
						"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 6 3' enable-background='new 0 0 6 3' height='3' width='6'><g fill='",
					),
					le = encodeURIComponent(
						"'><polygon points='5.5,0 2.5,3 1.1,3 4.1,0'/><polygon points='4,0 6,2 6,0.6 5.4,0'/><polygon points='0,2 1,3 2.4,3 0,0.6'/></g></svg>",
					);
				function oe(ye) {
					return re + encodeURIComponent(ye.toString()) + le;
				}
				const ae = encodeURIComponent(
						'<svg xmlns="http://www.w3.org/2000/svg" height="3" width="12"><g fill="',
					),
					pe = encodeURIComponent(
						'"><circle cx="1" cy="1" r="1"/><circle cx="5" cy="1" r="1"/><circle cx="9" cy="1" r="1"/></g></svg>',
					);
				function $e(ye) {
					return ae + encodeURIComponent(ye.toString()) + pe;
				}
				(0, G.$oP)((ye, ue) => {
					const fe = ye.getColor(V.$gQ);
					fe &&
						ue.addRule(
							`.monaco-editor .${L.ClassName.EditorErrorDecoration} { background: url("data:image/svg+xml,${oe(fe)}") repeat-x bottom left; }`,
						);
					const me = ye.getColor(V.$RP);
					me &&
						ue.addRule(
							`.monaco-editor .${L.ClassName.EditorAIDecoration} { background: url("data:image/svg+xml,${oe(me)}") repeat-x bottom left; }`,
						);
					const ve = ye.getColor(V.$jQ);
					ve &&
						(ue.addRule(
							`.monaco-editor .${L.ClassName.EditorWarningDecoration} { background: url("data:image/svg+xml,${oe(ve)}") repeat-x bottom left; }`,
						),
						ue.addRule(
							`.monaco-editor .cursor-squiggly-non-marker { background: url("data:image/svg+xml,${oe(ve)}") repeat-x bottom left; }`,
						));
					const ge = ye.getColor(V.$mQ);
					ge &&
						ue.addRule(
							`.monaco-editor .${L.ClassName.EditorInfoDecoration} { background: url("data:image/svg+xml,${oe(ge)}") repeat-x bottom left; }`,
						);
					const be = ye.getColor(V.$oQ);
					be &&
						ue.addRule(
							`.monaco-editor .${L.ClassName.EditorHintDecoration} { background: url("data:image/svg+xml,${$e(be)}") no-repeat bottom left; }`,
						);
					const Ce = ye.getColor(b.$4T);
					Ce &&
						ue.addRule(
							`.monaco-editor.showUnused .${L.ClassName.EditorUnnecessaryInlineDecoration} { opacity: ${Ce.rgba.a}; }`,
						);
				});
			},
		),
		define(
			de[281],
			he([1, 0, 82, 65, 206, 152, 69, 91, 31, 8, 5, 40, 35, 308]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wDb = void 0),
					(t = mt(t));
				let n = class extends w.$rwb {
					constructor(p, o, f, b, s, l, y, $, v, S, I, T, P, k) {
						super(
							p,
							{
								...b.getRawOptions(),
								overflowWidgetsDomNode: b.getOverflowWidgetsDomNode(),
							},
							f,
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
						),
							(this.$ = b),
							(this.kb = o),
							super.updateOptions(this.kb),
							this.D(b.onDidChangeConfiguration((L) => this.mc(L)));
					}
					getParentEditor() {
						return this.$;
					}
					mc(p) {
						super.updateOptions(this.$.getRawOptions()),
							super.updateOptions(this.kb);
					}
					updateOptions(p) {
						t.$yo(this.kb, p, !0), super.updateOptions(this.kb);
					}
				};
				(e.$wDb = n),
					(e.$wDb = n =
						Ne(
							[
								j(4, u.$Li),
								j(5, i.$dtb),
								j(6, m.$ek),
								j(7, r.$6j),
								j(8, h.$iP),
								j(9, a.$4N),
								j(10, d.$XK),
								j(11, E.$aN),
								j(12, C.$k3),
								j(13, c.$5X),
							],
							n,
						));
			},
		),
		define(
			de[309],
			he([
				1, 0, 7, 214, 29, 6, 3, 77, 319, 46, 65, 491, 206, 1660, 2902, 1586,
				1216, 2893, 1641, 1587, 1663, 2759, 370, 755, 326, 48, 17, 248, 98, 71,
				184, 8, 5, 128, 84, 2846, 2557, 1680, 954, 2281,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3yb = void 0);
				let z = class extends O.$2yb {
					static {
						this.ENTIRE_DIFF_OVERVIEW_WIDTH = s.$$xb.ENTIRE_DIFF_OVERVIEW_WIDTH;
					}
					get onDidContentSizeChange() {
						return this.L.onDidContentSizeChange;
					}
					get collapseUnchangedRegions() {
						return this.J.hideUnchangedRegions.get();
					}
					constructor(H, q, V, G, K, J, W, X) {
						super(),
							(this.P = H),
							(this.Q = G),
							(this.R = K),
							(this.S = W),
							(this.U = X),
							(this.j = (0, t.h)(
								"div.monaco-diff-editor.side-by-side",
								{ style: { position: "relative", height: "100%" } },
								[
									(0, t.h)("div.editor.original@original", {
										style: { position: "absolute", height: "100%" },
									}),
									(0, t.h)("div.editor.modified@modified", {
										style: { position: "absolute", height: "100%" },
									}),
									(0, t.h)("div.accessibleDiffViewer@accessibleDiffViewer", {
										style: { position: "absolute", height: "100%" },
									}),
								],
							)),
							(this.n = this.D((0, d.disposableObservableValue)(this, void 0))),
							(this.q = (0, d.derived)(this, (oe) => this.n.read(oe)?.object)),
							(this.onDidChangeModel = E.Event.fromObservableLight(this.q)),
							(this.t = this.D(this.Q.createScoped(this.P))),
							(this.u = this.D(this.R.createChild(new N.$Ki([D.$6j, this.t])))),
							(this.F = (0, d.observableValue)(this, void 0)),
							(this.custom = !1),
							(this.G = (0, d.observableValue)(this, !1)),
							(this.H = (0, d.derived)(this, (oe) =>
								this.J.onlyShowAccessibleDiffViewer.read(oe)
									? !0
									: this.G.read(oe),
							)),
							(this.N = (0, d.observableValue)(this, void 0)),
							(this.Y = (0, d.derived)(this, (oe) => {
								const ae = this.y.width.read(oe),
									pe = this.y.height.read(oe);
								this.y.automaticLayout
									? (this.j.root.style.height = "100%")
									: (this.j.root.style.height = pe + "px");
								const $e = this.C.read(oe),
									ye = this.O.read(oe),
									ue = ye?.width.read(oe) ?? 0,
									fe = this.M.read(oe)?.width ?? 0;
								let me, ve, ge, be, Ce;
								if (!!$e) {
									const Fe = $e.sashLeft.read(oe),
										Oe = this.N.read(oe)?.width.read(oe) ?? 0;
									(me = 0),
										(ve = Fe - ue - Oe),
										(Ce = Fe - ue),
										(ge = Fe),
										(be = ae - ge - fe);
								} else {
									Ce = 0;
									const Fe = this.J.inlineViewHideOriginalLineNumbers.read(oe);
									(me = ue),
										Fe
											? (ve = 0)
											: (ve = Math.max(
													5,
													this.L.originalObs.layoutInfoDecorationsLeft.read(oe),
												)),
										(ge = ue + ve),
										(be = ae - ge - fe);
								}
								return (
									(this.j.original.style.left = me + "px"),
									(this.j.original.style.width = ve + "px"),
									this.L.original.layout({ width: ve, height: pe }, !0),
									ye?.layout(Ce),
									(this.j.modified.style.left = ge + "px"),
									(this.j.modified.style.width = be + "px"),
									this.X(),
									this.L.modified.layout({ width: be, height: pe }, !0),
									{
										modifiedEditor: this.L.modified.getLayoutInfo(),
										originalEditor: this.L.original.getLayoutInfo(),
									}
								);
							})),
							(this.ab = this.q.map((oe, ae) => oe?.diff.read(ae))),
							(this.onDidUpdateDiff = E.Event.fromObservableLight(this.ab)),
							J.willCreateDiffEditor(),
							this.t.createKey("isInDiffEditor", !0),
							this.P.appendChild(this.j.root),
							this.D((0, C.$Yc)(() => this.j.root.remove())),
							(this.y = this.D(new y.$Awb(this.j.root, q.dimension))),
							this.y.setAutomaticLayout(q.automaticLayout ?? !1),
							(this.J = this.u.createInstance(B.$6xb, q)),
							this.D(
								(0, d.autorun)((oe) => {
									this.J.setWidth(this.y.width.read(oe));
								}),
							),
							this.t.createKey(
								k.EditorContextKeys.isEmbeddedDiffEditor.key,
								!1,
							),
							this.D(
								(0, v.$Nwb)(
									k.EditorContextKeys.isEmbeddedDiffEditor,
									this.t,
									(oe) => this.J.isInEmbeddedEditor.read(oe),
								),
							),
							this.D(
								(0, v.$Nwb)(
									k.EditorContextKeys.comparingMovedCode,
									this.t,
									(oe) => !!this.q.read(oe)?.movedTextToCompare.read(oe),
								),
							),
							this.D(
								(0, v.$Nwb)(
									k.EditorContextKeys
										.diffEditorRenderSideBySideInlineBreakpointReached,
									this.t,
									(oe) => this.J.couldShowInlineViewBecauseOfSize.read(oe),
								),
							),
							this.D(
								(0, v.$Nwb)(
									k.EditorContextKeys.diffEditorInlineMode,
									this.t,
									(oe) => !this.J.renderSideBySide.read(oe),
								),
							),
							this.D(
								(0, v.$Nwb)(
									k.EditorContextKeys.hasChanges,
									this.t,
									(oe) =>
										(this.q.read(oe)?.diff.read(oe)?.mappings.length ?? 0) > 0,
								),
							),
							(this.L = this.D(
								this.u.createInstance(
									R.$_xb,
									this.j.original,
									this.j.modified,
									this.J,
									V,
									(oe, ae, pe, $e) => this.W(oe, ae, pe, $e),
								),
							)),
							this.D(
								(0, v.$Nwb)(
									k.EditorContextKeys.diffEditorOriginalWritable,
									this.t,
									(oe) => this.J.originalEditable.read(oe),
								),
							),
							this.D(
								(0, v.$Nwb)(
									k.EditorContextKeys.diffEditorModifiedWritable,
									this.t,
									(oe) => !this.J.readOnly.read(oe),
								),
							),
							this.D(
								(0, v.$Nwb)(
									k.EditorContextKeys.diffEditorOriginalUri,
									this.t,
									(oe) => this.q.read(oe)?.model.original.uri.toString() ?? "",
								),
							),
							this.D(
								(0, v.$Nwb)(
									k.EditorContextKeys.diffEditorModifiedUri,
									this.t,
									(oe) => this.q.read(oe)?.model.modified.uri.toString() ?? "",
								),
							),
							(this.M = (0, m.$Yd)(this, (oe) =>
								this.J.renderOverviewRuler.read(oe)
									? this.u.createInstance(
											(0, $.$Tpb)(s.$$xb, oe),
											this.L,
											this.j.root,
											this.q,
											this.y.width,
											this.y.height,
											this.Y.map((ae) => ae.modifiedEditor),
										)
									: void 0,
							).recomputeInitiallyAndOnChange(this.B));
						const Y = {
							height: this.y.height,
							width: this.y.width.map(
								(oe, ae) => oe - (this.M.read(ae)?.width ?? 0),
							),
						};
						(this.z = new g.$eyb(this.J, Y)),
							(this.C = (0, m.$Yd)(this, (oe) => {
								const ae = this.J.renderSideBySide.read(oe);
								return (
									this.j.root.classList.toggle("side-by-side", ae),
									ae
										? new g.$fyb(
												this.j.root,
												Y,
												this.J.enableSplitViewResizing,
												this.F,
												this.z.sashLeft,
												() => this.z.resetSash(),
											)
										: void 0
								);
							}).recomputeInitiallyAndOnChange(this.B));
						const ie = (0, m.$Yd)(this, (oe) =>
							this.u.createInstance(
								(0, $.$Tpb)(f.$Yyb, oe),
								this.L,
								this.q,
								this.J,
							),
						).recomputeInitiallyAndOnChange(this.B);
						(0, m.$Yd)(this, (oe) =>
							this.u.createInstance(
								(0, $.$Tpb)(n.$dyb, oe),
								this.L,
								this.q,
								this.J,
								this,
							),
						).recomputeInitiallyAndOnChange(this.B);
						const ne = new Set(),
							ee = new Set();
						let _ = !1;
						const te = (0, m.$Yd)(this, (oe) =>
								this.u.createInstance(
									(0, $.$Tpb)(p.$3xb, oe),
									(0, t.getWindow)(this.P),
									this.L,
									this.q,
									this.J,
									this,
									() => _ || ie.get().isUpdatingHiddenAreas,
									ne,
									ee,
								),
							).recomputeInitiallyAndOnChange(this.B),
							Q = (0, d.derived)(this, (oe) => {
								const ae = te.read(oe).viewZones.read(oe).orig,
									pe = ie.read(oe).viewZones.read(oe).origViewZones;
								return ae.concat(pe);
							}),
							Z = (0, d.derived)(this, (oe) => {
								const ae = te.read(oe).viewZones.read(oe).mod,
									pe = ie.read(oe).viewZones.read(oe).modViewZones;
								return ae.concat(pe);
							});
						this.D(
							(0, y.$Hwb)(
								this.L.original,
								Q,
								(oe) => {
									_ = oe;
								},
								ne,
							),
						);
						let se;
						this.D(
							(0, y.$Hwb)(
								this.L.modified,
								Z,
								(oe) => {
									(_ = oe),
										_
											? (se = a.$uwb.capture(this.L.modified))
											: (se?.restore(this.L.modified), (se = void 0));
								},
								ee,
							),
						),
							(this.I = (0, m.$Yd)(this, (oe) =>
								this.u.createInstance(
									(0, $.$Tpb)(c.$ayb, oe),
									this.j.accessibleDiffViewer,
									this.H,
									(ae, pe) => this.G.set(ae, pe),
									this.J.onlyShowAccessibleDiffViewer.map((ae) => !ae),
									this.y.width,
									this.y.height,
									this.q.map((ae, pe) =>
										ae?.diff
											.read(pe)
											?.mappings.map(($e) => $e.lineRangeMapping),
									),
									new c.$byb(this.L),
								),
							).recomputeInitiallyAndOnChange(this.B));
						const re = this.H.map((oe) => (oe ? "hidden" : "visible"));
						this.D((0, y.$Gwb)(this.j.modified, { visibility: re })),
							this.D((0, y.$Gwb)(this.j.original, { visibility: re })),
							this.Z(),
							J.addDiffEditor(this),
							(this.O = (0, m.$Yd)(this, (oe) =>
								this.J.shouldRenderGutterMenu.read(oe)
									? this.u.createInstance(
											(0, $.$Tpb)(o.$Xyb, oe),
											this.j.root,
											this.q,
											this.L,
											this.J,
											this.z,
											this.F,
										)
									: void 0,
							)),
							this.D((0, d.recomputeInitiallyAndOnChange)(this.Y)),
							(0, m.$Yd)(
								this,
								(oe) =>
									new ((0, $.$Tpb)(b.$cyb, oe))(
										this.j.root,
										this.q,
										this.Y.map((ae) => ae.originalEditor),
										this.Y.map((ae) => ae.modifiedEditor),
										this.L,
									),
							).recomputeInitiallyAndOnChange(this.B, (oe) => {
								this.N.set(oe, void 0);
							}),
							this.D(
								E.Event.runAndSubscribe(
									this.L.modified.onDidChangeCursorPosition,
									(oe) => this.cb(oe, !0),
								),
							),
							this.D(
								E.Event.runAndSubscribe(
									this.L.original.onDidChangeCursorPosition,
									(oe) => this.cb(oe, !1),
								),
							);
						const le = this.q.map(this, (oe, ae) => {
							if (oe)
								return (
									oe.diff.read(ae) === void 0 && !oe.isDiffUpToDate.read(ae)
								);
						});
						this.D(
							(0, d.autorunWithStore)((oe, ae) => {
								if (le.read(oe) === !0) {
									const pe = this.U.show(!0, 1e3);
									ae.add((0, C.$Yc)(() => pe.done()));
								}
							}),
						),
							this.X(),
							this.D(
								(0, d.autorunWithStore)((oe, ae) => {
									ae.add(
										new ((0, $.$Tpb)(l.$Zyb, oe))(this.L, this.q, this.J, this),
									);
								}),
							),
							this.D(
								(0, d.autorunWithStore)((oe, ae) => {
									const pe = this.q.read(oe);
									if (pe)
										for (const $e of [pe.model.original, pe.model.modified])
											ae.add(
												$e.onWillDispose((ye) => {
													(0, w.$4)(
														new w.$gb(
															"TextModel got disposed before DiffEditorWidget model got reset",
														),
													),
														this.setModel(null);
												}),
											);
								}),
							),
							this.D(
								(0, d.autorun)((oe) => {
									this.J.setModel(this.q.read(oe));
								}),
							);
					}
					getViewWidth() {
						return this.y.width.get();
					}
					getContentHeight() {
						return this.L.modified.getContentHeight();
					}
					W(H, q, V, G) {
						return H.createInstance(h.$rwb, q, V, G);
					}
					X() {
						if (this.custom) {
							this.j.modified.style.left = "0px";
							const H = this.P.querySelectorAll(".line-delete");
							for (const q of H) {
								const V = q;
								(V.style.left = "-2.5px"), (V.style.lineHeight = "16px");
							}
							this.getOriginalEditor().updateOptions({
								scrollbar: {
									vertical: "hidden",
									verticalScrollbarSize: 0,
									horizontal: "hidden",
									handleMouseWheel: !1,
									alwaysConsumeMouseWheel: !1,
									horizontalScrollbarSize: 0,
								},
							});
						}
					}
					Z() {
						const H = r.EditorExtensionsRegistry.getDiffEditorContributions();
						for (const q of H)
							try {
								this.D(this.u.createInstance(q.ctor, this));
							} catch (V) {
								(0, w.$4)(V);
							}
					}
					get g() {
						return this.L.modified;
					}
					getEditorType() {
						return P.EditorType.IDiffEditor;
					}
					onVisible() {
						this.L.original.onVisible(), this.L.modified.onVisible();
					}
					onHide() {
						this.L.original.onHide(), this.L.modified.onHide();
					}
					layout(H) {
						this.X(), this.y.observe(H);
					}
					hasTextFocus() {
						return (
							this.L.original.hasTextFocus() || this.L.modified.hasTextFocus()
						);
					}
					saveViewState() {
						const H = this.L.original.saveViewState(),
							q = this.L.modified.saveViewState();
						return {
							original: H,
							modified: q,
							modelState: this.q.get()?.serializeState(),
						};
					}
					restoreViewState(H) {
						if (H && H.original && H.modified) {
							const q = H;
							this.L.original.restoreViewState(q.original),
								this.L.modified.restoreViewState(q.modified),
								q.modelState &&
									this.q.get()?.restoreSerializedState(q.modelState);
						}
					}
					handleInitialized() {
						this.L.original.handleInitialized(),
							this.L.modified.handleInitialized();
					}
					createViewModel(H) {
						return this.u.createInstance(U.$7xb, H, this.J);
					}
					getModel() {
						return this.q.get()?.model ?? null;
					}
					setModel(H) {
						const q = H
							? "model" in H
								? y.$Lwb.create(H).createNewRef(this)
								: y.$Lwb.create(this.createViewModel(H), this)
							: null;
						this.setDiffModel(q);
					}
					setDiffModel(H, q) {
						const V = this.q.get();
						!H && V && this.I.get().close(),
							this.q.get() !== H?.object &&
								(0, d.subtransaction)(q, (G) => {
									const K = H?.object;
									d.observableFromEvent.batchEventsGlobally(G, () => {
										this.L.original.setModel(K ? K.model.original : null),
											this.L.modified.setModel(K ? K.model.modified : null);
									});
									const J = this.n.get()?.createNewRef(this);
									this.n.set(H?.createNewRef(this), G),
										setTimeout(() => {
											J?.dispose();
										}, 0);
								});
					}
					updateOptions(H) {
						this.J.updateOptions(H);
					}
					getContainerDomNode() {
						return this.P;
					}
					getOriginalEditor() {
						return this.L.original;
					}
					getModifiedEditor() {
						return this.L.modified;
					}
					setBoundarySashes(H) {
						this.F.set(H, void 0);
					}
					get ignoreTrimWhitespace() {
						return this.J.ignoreTrimWhitespace.get();
					}
					get maxComputationTime() {
						return this.J.maxComputationTimeMs.get();
					}
					get renderSideBySide() {
						return this.J.renderSideBySide.get();
					}
					getLineChanges() {
						const H = this.q.get()?.diff.get();
						return H ? F(H) : null;
					}
					getDiffComputationResult() {
						const H = this.q.get()?.diff.get();
						return H
							? {
									changes: this.getLineChanges(),
									changes2: H.mappings.map((q) => q.lineRangeMapping),
									identical: H.identical,
									quitEarly: H.quitEarly,
								}
							: null;
					}
					revert(H) {
						const q = this.q.get();
						!q ||
							!q.isDiffUpToDate.get() ||
							this.L.modified.executeEdits("diffEditor", [
								{
									range: H.modified.toExclusiveRange(),
									text: q.model.original.getValueInRange(
										H.original.toExclusiveRange(),
									),
								},
							]);
					}
					revertRangeMappings(H) {
						const q = this.q.get();
						if (!q || !q.isDiffUpToDate.get()) return;
						const V = H.map((G) => ({
							range: G.modifiedRange,
							text: q.model.original.getValueInRange(G.originalRange),
						}));
						this.L.modified.executeEdits("diffEditor", V);
					}
					bb(H) {
						this.L.modified.setPosition(
							new S.$hL(H.lineRangeMapping.modified.startLineNumber, 1),
						),
							this.L.modified.revealRangeInCenter(
								H.lineRangeMapping.modified.toExclusiveRange(),
							);
					}
					goToDiff(H) {
						const q = this.q.get()?.diff.get()?.mappings;
						if (!q || q.length === 0) return;
						const V = this.L.modified.getPosition().lineNumber;
						let G;
						H === "next"
							? (G =
									q.find(
										(K) => K.lineRangeMapping.modified.startLineNumber > V,
									) ?? q[0])
							: (G =
									(0, i.$jb)(
										q,
										(K) => K.lineRangeMapping.modified.startLineNumber < V,
									) ?? q[q.length - 1]),
							this.bb(G),
							G.lineRangeMapping.modified.isEmpty
								? this.S.playSignal(L.$Twb.diffLineDeleted, {
										source: "diffEditor.goToDiff",
									})
								: G.lineRangeMapping.original.isEmpty
									? this.S.playSignal(L.$Twb.diffLineInserted, {
											source: "diffEditor.goToDiff",
										})
									: G &&
										this.S.playSignal(L.$Twb.diffLineModified, {
											source: "diffEditor.goToDiff",
										});
					}
					revealFirstDiff() {
						const H = this.q.get();
						H &&
							this.waitForDiff().then(() => {
								const q = H.diff.get()?.mappings;
								!q || q.length === 0 || this.bb(q[0]);
							});
					}
					accessibleDiffViewerNext() {
						this.I.get().next();
					}
					accessibleDiffViewerPrev() {
						this.I.get().prev();
					}
					async waitForDiff() {
						const H = this.q.get();
						H && (await H.waitForDiff());
					}
					mapToOtherSide() {
						const H = this.L.modified.hasWidgetFocus(),
							q = H ? this.L.modified : this.L.original,
							V = H ? this.L.original : this.L.modified;
						let G;
						const K = q.getSelection();
						if (K) {
							const J = this.q
								.get()
								?.diff.get()
								?.mappings.map((W) =>
									H ? W.lineRangeMapping.flip() : W.lineRangeMapping,
								);
							if (J) {
								const W = (0, y.$Jwb)(K.getStartPosition(), J),
									X = (0, y.$Jwb)(K.getEndPosition(), J);
								G = I.$iL.plusRange(W, X);
							}
						}
						return { destination: V, destinationSelection: G };
					}
					switchSide() {
						const { destination: H, destinationSelection: q } =
							this.mapToOtherSide();
						H.focus(), q && H.setSelection(q);
					}
					exitCompareMove() {
						const H = this.q.get();
						H && H.movedTextToCompare.set(void 0, void 0);
					}
					collapseAllUnchangedRegions() {
						const H = this.q.get()?.unchangedRegions.get();
						H &&
							(0, d.transaction)((q) => {
								for (const V of H) V.collapseAll(q);
							});
					}
					showAllUnchangedRegions() {
						const H = this.q.get()?.unchangedRegions.get();
						H &&
							(0, d.transaction)((q) => {
								for (const V of H) V.showAll(q);
							});
					}
					cb(H, q) {
						if (H?.reason === T.CursorChangeReason.Explicit) {
							const V = this.q
								.get()
								?.diff.get()
								?.mappings.find((G) =>
									q
										? G.lineRangeMapping.modified.contains(
												H.position.lineNumber,
											)
										: G.lineRangeMapping.original.contains(
												H.position.lineNumber,
											),
								);
							V?.lineRangeMapping.modified.isEmpty
								? this.S.playSignal(L.$Twb.diffLineDeleted, {
										source: "diffEditor.cursorPositionChanged",
									})
								: V?.lineRangeMapping.original.isEmpty
									? this.S.playSignal(L.$Twb.diffLineInserted, {
											source: "diffEditor.cursorPositionChanged",
										})
									: V &&
										this.S.playSignal(L.$Twb.diffLineModified, {
											source: "diffEditor.cursorPositionChanged",
										});
						}
					}
				};
				(e.$3yb = z),
					(e.$3yb = z =
						Ne(
							[
								j(3, D.$6j),
								j(4, M.$Li),
								j(5, u.$dtb),
								j(6, L.$Owb),
								j(7, A.$bO),
							],
							z,
						));
				function F(x) {
					return x.mappings.map((H) => {
						const q = H.lineRangeMapping;
						let V,
							G,
							K,
							J,
							W = q.innerChanges;
						return (
							q.original.isEmpty
								? ((V = q.original.startLineNumber - 1), (G = 0), (W = void 0))
								: ((V = q.original.startLineNumber),
									(G = q.original.endLineNumberExclusive - 1)),
							q.modified.isEmpty
								? ((K = q.modified.startLineNumber - 1), (J = 0), (W = void 0))
								: ((K = q.modified.startLineNumber),
									(J = q.modified.endLineNumberExclusive - 1)),
							{
								originalStartLineNumber: V,
								originalEndLineNumber: G,
								modifiedStartLineNumber: K,
								modifiedEndLineNumber: J,
								charChanges: W?.map((X) => ({
									originalStartLineNumber: X.originalRange.startLineNumber,
									originalStartColumn: X.originalRange.startColumn,
									originalEndLineNumber: X.originalRange.endLineNumber,
									originalEndColumn: X.originalRange.endColumn,
									modifiedStartLineNumber: X.modifiedRange.startLineNumber,
									modifiedStartColumn: X.modifiedRange.startColumn,
									modifiedEndLineNumber: X.modifiedRange.endLineNumber,
									modifiedEndColumn: X.modifiedRange.endColumn,
								})),
							}
						);
					});
				}
			},
		),
		define(
			de[1217],
			he([1, 0, 7, 14, 27, 46, 65, 309, 71, 4, 11, 10, 8, 43, 608]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$azb =
						e.$_yb =
						e.$$yb =
						e.$0yb =
						e.$9yb =
						e.$8yb =
						e.$7yb =
						e.$6yb =
						e.$5yb =
						e.$4yb =
							void 0),
					(e.$bzb = I),
					(e.$czb = T);
				class n extends u.$3X {
					constructor() {
						super({
							id: "diffEditor.toggleCollapseUnchangedRegions",
							title: (0, r.localize2)(191, "Toggle Collapse Unchanged Regions"),
							icon: i.$ak.map,
							toggled: h.$Kj.has(
								"config.diffEditor.hideUnchangedRegions.enabled",
							),
							precondition: h.$Kj.has("isInDiffEditor"),
							menu: {
								when: h.$Kj.has("isInDiffEditor"),
								id: u.$XX.EditorTitle,
								order: 22,
								group: "navigation",
							},
						});
					}
					run(L, ...D) {
						const M = L.get(a.$gj),
							N = !M.getValue("diffEditor.hideUnchangedRegions.enabled");
						M.updateValue("diffEditor.hideUnchangedRegions.enabled", N);
					}
				}
				e.$4yb = n;
				class g extends u.$3X {
					constructor() {
						super({
							id: "diffEditor.toggleShowMovedCodeBlocks",
							title: (0, r.localize2)(192, "Toggle Show Moved Code Blocks"),
							precondition: h.$Kj.has("isInDiffEditor"),
						});
					}
					run(L, ...D) {
						const M = L.get(a.$gj),
							N = !M.getValue("diffEditor.experimental.showMoves");
						M.updateValue("diffEditor.experimental.showMoves", N);
					}
				}
				e.$5yb = g;
				class p extends u.$3X {
					constructor() {
						super({
							id: "diffEditor.toggleUseInlineViewWhenSpaceIsLimited",
							title: (0, r.localize2)(
								193,
								"Toggle Use Inline View When Space Is Limited",
							),
							precondition: h.$Kj.has("isInDiffEditor"),
						});
					}
					run(L, ...D) {
						const M = L.get(a.$gj),
							N = !M.getValue("diffEditor.useInlineViewWhenSpaceIsLimited");
						M.updateValue("diffEditor.useInlineViewWhenSpaceIsLimited", N);
					}
				}
				e.$6yb = p;
				const o = (0, r.localize2)(194, "Diff Editor");
				class f extends E.$ktb {
					constructor() {
						super({
							id: "diffEditor.switchSide",
							title: (0, r.localize2)(195, "Switch Side"),
							icon: i.$ak.arrowSwap,
							precondition: h.$Kj.has("isInDiffEditor"),
							f1: !0,
							category: o,
						});
					}
					runEditorCommand(L, D, M) {
						const N = T(L);
						if (N instanceof d.$3yb) {
							if (M && M.dryRun)
								return {
									destinationSelection: N.mapToOtherSide().destinationSelection,
								};
							N.switchSide();
						}
					}
				}
				e.$7yb = f;
				class b extends E.$ktb {
					constructor() {
						super({
							id: "diffEditor.exitCompareMove",
							title: (0, r.localize2)(196, "Exit Compare Move"),
							icon: i.$ak.close,
							precondition: m.EditorContextKeys.comparingMovedCode,
							f1: !1,
							category: o,
							keybinding: { weight: 1e4, primary: w.KeyCode.Escape },
						});
					}
					runEditorCommand(L, D, ...M) {
						const N = T(L);
						N instanceof d.$3yb && N.exitCompareMove();
					}
				}
				e.$8yb = b;
				class s extends E.$ktb {
					constructor() {
						super({
							id: "diffEditor.collapseAllUnchangedRegions",
							title: (0, r.localize2)(197, "Collapse All Unchanged Regions"),
							icon: i.$ak.fold,
							precondition: h.$Kj.has("isInDiffEditor"),
							f1: !0,
							category: o,
						});
					}
					runEditorCommand(L, D, ...M) {
						const N = T(L);
						N instanceof d.$3yb && N.collapseAllUnchangedRegions();
					}
				}
				e.$9yb = s;
				class l extends E.$ktb {
					constructor() {
						super({
							id: "diffEditor.showAllUnchangedRegions",
							title: (0, r.localize2)(198, "Show All Unchanged Regions"),
							icon: i.$ak.unfold,
							precondition: h.$Kj.has("isInDiffEditor"),
							f1: !0,
							category: o,
						});
					}
					runEditorCommand(L, D, ...M) {
						const N = T(L);
						N instanceof d.$3yb && N.showAllUnchangedRegions();
					}
				}
				e.$0yb = l;
				class y extends u.$3X {
					constructor() {
						super({
							id: "diffEditor.revert",
							title: (0, r.localize2)(199, "Revert"),
							f1: !1,
							category: o,
						});
					}
					run(L, D) {
						const M = I(L, D.originalUri, D.modifiedUri);
						M instanceof d.$3yb &&
							M.revertRangeMappings(D.mapping.innerChanges ?? []);
					}
				}
				e.$$yb = y;
				const $ = (0, r.localize2)(200, "Accessible Diff Viewer");
				class v extends u.$3X {
					static {
						this.id = "editor.action.accessibleDiffViewer.next";
					}
					constructor() {
						super({
							id: v.id,
							title: (0, r.localize2)(201, "Go to Next Difference"),
							category: $,
							precondition: h.$Kj.has("isInDiffEditor"),
							keybinding: {
								primary: w.KeyCode.F7,
								weight: c.KeybindingWeight.EditorContrib,
							},
							f1: !0,
						});
					}
					run(L) {
						T(L)?.accessibleDiffViewerNext();
					}
				}
				e.$_yb = v;
				class S extends u.$3X {
					static {
						this.id = "editor.action.accessibleDiffViewer.prev";
					}
					constructor() {
						super({
							id: S.id,
							title: (0, r.localize2)(202, "Go to Previous Difference"),
							category: $,
							precondition: h.$Kj.has("isInDiffEditor"),
							keybinding: {
								primary: w.KeyMod.Shift | w.KeyCode.F7,
								weight: c.KeybindingWeight.EditorContrib,
							},
							f1: !0,
						});
					}
					run(L) {
						T(L)?.accessibleDiffViewerPrev();
					}
				}
				e.$azb = S;
				function I(k, L, D) {
					return (
						k
							.get(C.$dtb)
							.listDiffEditors()
							.find((A) => {
								const R = A.getModifiedEditor(),
									O = A.getOriginalEditor();
								return (
									R &&
									R.getModel()?.uri.toString() === D.toString() &&
									O &&
									O.getModel()?.uri.toString() === L.toString()
								);
							}) || null
					);
				}
				function T(k) {
					const D = k.get(C.$dtb).listDiffEditors(),
						M = (0, t.$Jgb)();
					if (M)
						for (const N of D) {
							const A = N.getContainerDomNode();
							if (P(A, M)) return N;
						}
					return null;
				}
				function P(k, L) {
					let D = L;
					for (; D; ) {
						if (D === k) return !0;
						D = D.parentElement;
					}
					return !1;
				}
			},
		),
		define(
			de[2905],
			he([1, 0, 14, 1217, 71, 4, 11, 31, 8, 608]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, C.$4X)(i.$4yb),
					(0, C.$4X)(i.$5yb),
					(0, C.$4X)(i.$6yb),
					C.$ZX.appendMenuItem(C.$XX.EditorTitle, {
						command: {
							id: new i.$6yb().desc.id,
							title: (0, E.localize)(225, null),
							toggled: m.$Kj.has(
								"config.diffEditor.useInlineViewWhenSpaceIsLimited",
							),
							precondition: m.$Kj.has("isInDiffEditor"),
						},
						order: 11,
						group: "1_diff",
						when: m.$Kj.and(
							w.EditorContextKeys
								.diffEditorRenderSideBySideInlineBreakpointReached,
							m.$Kj.has("isInDiffEditor"),
						),
					}),
					C.$ZX.appendMenuItem(C.$XX.EditorTitle, {
						command: {
							id: new i.$5yb().desc.id,
							title: (0, E.localize)(226, null),
							icon: t.$ak.move,
							toggled: m.$Rj.create(
								"config.diffEditor.experimental.showMoves",
								!0,
							),
							precondition: m.$Kj.has("isInDiffEditor"),
						},
						order: 10,
						group: "1_diff",
						when: m.$Kj.has("isInDiffEditor"),
					}),
					(0, C.$4X)(i.$$yb);
				for (const r of [
					{
						icon: t.$ak.arrowRight,
						key: w.EditorContextKeys.diffEditorInlineMode.toNegated(),
					},
					{
						icon: t.$ak.discard,
						key: w.EditorContextKeys.diffEditorInlineMode,
					},
				])
					C.$ZX.appendMenuItem(C.$XX.DiffEditorHunkToolbar, {
						command: {
							id: new i.$$yb().desc.id,
							title: (0, E.localize)(227, null),
							icon: r.icon,
						},
						when: m.$Kj.and(
							w.EditorContextKeys.diffEditorModifiedWritable,
							r.key,
						),
						order: 5,
						group: "primary",
					}),
						C.$ZX.appendMenuItem(C.$XX.DiffEditorSelectionToolbar, {
							command: {
								id: new i.$$yb().desc.id,
								title: (0, E.localize)(228, null),
								icon: r.icon,
							},
							when: m.$Kj.and(
								w.EditorContextKeys.diffEditorModifiedWritable,
								r.key,
							),
							order: 5,
							group: "primary",
						});
				(0, C.$4X)(i.$7yb),
					(0, C.$4X)(i.$8yb),
					(0, C.$4X)(i.$9yb),
					(0, C.$4X)(i.$0yb),
					C.$ZX.appendMenuItem(C.$XX.EditorTitle, {
						command: {
							id: i.$_yb.id,
							title: (0, E.localize)(229, null),
							precondition: m.$Kj.has("isInDiffEditor"),
						},
						order: 10,
						group: "2_diff",
						when: m.$Kj.and(
							w.EditorContextKeys.accessibleDiffViewerVisible.negate(),
							m.$Kj.has("isInDiffEditor"),
						),
					}),
					d.$fk.registerCommandAlias(
						"editor.action.diffReview.next",
						i.$_yb.id,
					),
					(0, C.$4X)(i.$_yb),
					d.$fk.registerCommandAlias(
						"editor.action.diffReview.prev",
						i.$azb.id,
					),
					(0, C.$4X)(i.$azb);
			},
		),
		define(
			de[784],
			he([1, 0, 82, 65, 309, 184, 8, 5, 84]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7mc = void 0),
					(t = mt(t));
				let r = class extends w.$3yb {
					constructor(a, h, c, n, g, p, o, f, b) {
						super(a, n.getRawOptions(), c, g, p, o, f, b),
							(this.db = n),
							(this.eb = h),
							super.updateOptions(this.eb),
							this.D(n.onDidChangeConfiguration((s) => this.fb(s)));
					}
					getParentEditor() {
						return this.db;
					}
					fb(a) {
						super.updateOptions(this.db.getRawOptions()),
							super.updateOptions(this.eb);
					}
					updateOptions(a) {
						t.$yo(this.eb, a, !0), super.updateOptions(this.eb);
					}
				};
				(e.$7mc = r),
					(e.$7mc = r =
						Ne(
							[
								j(4, C.$6j),
								j(5, d.$Li),
								j(6, i.$dtb),
								j(7, E.$Owb),
								j(8, m.$bO),
							],
							r,
						));
			},
		),
		define(
			de[1682],
			he([
				1, 0, 7, 183, 14, 3, 77, 407, 542, 309, 92, 173, 11, 5, 1588, 8, 128,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$DGc = e.$CGc = void 0);
				class o {
					constructor(s, l) {
						(this.viewModel = s), (this.deltaScrollVertical = l);
					}
					getId() {
						return this.viewModel;
					}
				}
				e.$CGc = o;
				let f = class extends E.$1c {
					constructor(s, l, y, $, v) {
						super(),
							(this.z = s),
							(this.C = l),
							(this.F = y),
							(this.G = $),
							(this.a = (0, d.$_d)(this, void 0)),
							(this.b = (0, C.derived)(this, (T) =>
								this.a.read(T)?.collapsed.read(T),
							)),
							(this.c = (0, d.$_d)(this, 500)),
							(this.contentHeight = (0, C.derived)(
								this,
								(T) => (this.b.read(T) ? 0 : this.c.read(T)) + this.w,
							)),
							(this.f = (0, d.$_d)(this, 0)),
							(this.j = (0, d.$_d)(this, 0)),
							(this.m = (0, d.$_d)(this, 0)),
							(this.n = (0, d.$_d)(this, 0)),
							(this.maxScroll = (0, C.derived)(this, (T) => {
								const P = this.f.read(T) - this.j.read(T),
									k = this.m.read(T) - this.n.read(T);
								return P > k
									? { maxScroll: P, width: this.j.read(T) }
									: { maxScroll: k, width: this.n.read(T) };
							})),
							(this.q = (0, t.h)("div.multiDiffEntry", [
								(0, t.h)("div.header@header", [
									(0, t.h)("div.header-content", [
										(0, t.h)("div.collapse-button@collapseButton"),
										(0, t.h)("div.file-path", [
											(0, t.h)(
												"div.title.modified.show-file-icons@primaryPath",
												[],
											),
											(0, t.h)("div.status.deleted@status", ["R"]),
											(0, t.h)(
												"div.title.original.show-file-icons@secondaryPath",
												[],
											),
										]),
										(0, t.h)("div.actions@actions"),
									]),
								]),
								(0, t.h)("div.editorParent", [
									(0, t.h)("div.editorContainer@editor"),
								]),
							])),
							(this.editor = this.D(
								this.G.createInstance(
									r.$3yb,
									this.q.editor,
									{ overflowWidgetsDomNode: this.C },
									{
										originalEditor: { contributions: [] },
										modifiedEditor: { contributions: [] },
									},
								),
							)),
							(this.r = (0, m.$Uwb)(this.editor.getModifiedEditor()).isFocused),
							(this.s = (0, m.$Uwb)(this.editor.getOriginalEditor()).isFocused),
							(this.isFocused = (0, C.derived)(
								this,
								(T) => this.r.read(T) || this.s.read(T),
							)),
							(this.t = this.F.createResourceLabel
								? this.D(this.F.createResourceLabel(this.q.primaryPath))
								: void 0),
							(this.u = this.F.createResourceLabel
								? this.D(this.F.createResourceLabel(this.q.secondaryPath))
								: void 0),
							(this.H = this.D(new E.$Zc())),
							(this.J = 40),
							(this.L = -1),
							(this.M = !1);
						const S = new i.$oob(this.q.collapseButton, {});
						this.D(
							(0, C.autorun)((T) => {
								(S.element.className = ""),
									(S.icon = this.b.read(T)
										? w.$ak.chevronRight
										: w.$ak.chevronDown);
							}),
						),
							this.D(
								S.onDidClick(() => {
									this.a.get()?.collapsed.set(!this.b.get(), void 0);
								}),
							),
							this.D(
								(0, C.autorun)((T) => {
									this.q.editor.style.display = this.b.read(T)
										? "none"
										: "block";
								}),
							),
							this.D(
								this.editor.getModifiedEditor().onDidLayoutChange((T) => {
									const P = this.editor
										.getModifiedEditor()
										.getLayoutInfo().contentWidth;
									this.j.set(P, void 0);
								}),
							),
							this.D(
								this.editor.getOriginalEditor().onDidLayoutChange((T) => {
									const P = this.editor
										.getOriginalEditor()
										.getLayoutInfo().contentWidth;
									this.n.set(P, void 0);
								}),
							),
							this.D(
								this.editor.onDidContentSizeChange((T) => {
									(0, d.$8d)((P) => {
										this.c.set(T.contentHeight, P),
											this.f.set(
												this.editor.getModifiedEditor().getContentWidth(),
												P,
											),
											this.m.set(
												this.editor.getOriginalEditor().getContentWidth(),
												P,
											);
									});
								}),
							),
							this.D(
								this.editor.getOriginalEditor().onDidScrollChange((T) => {
									if (this.M || !T.scrollTopChanged || !this.I) return;
									const P = T.scrollTop - this.L;
									this.I.deltaScrollVertical(P);
								}),
							),
							this.D(
								(0, C.autorun)((T) => {
									const P = this.a.read(T)?.isActive.read(T);
									this.q.root.classList.toggle("active", P);
								}),
							),
							this.z.appendChild(this.q.root),
							(this.w = this.J),
							(this.y = this.D(v.createScoped(this.q.actions)));
						const I = this.D(this.G.createChild(new p.$Ki([g.$6j, this.y])));
						this.D(
							I.createInstance(
								a.$Tyb,
								this.q.actions,
								h.$XX.MultiDiffEditorFileToolbar,
								{
									actionRunner: this.D(
										new n.$hyb(() => this.a.get()?.modifiedUri),
									),
									menuOptions: { shouldForwardArgs: !0 },
									toolbarOptions: {
										primaryGroup: (T) => T.startsWith("navigation"),
									},
									actionViewItemProvider: (T, P) => (0, u.$Pyb)(I, T, P),
								},
							),
						);
					}
					setScrollLeft(s) {
						this.f.get() - this.j.get() > this.m.get() - this.n.get()
							? this.editor.getModifiedEditor().setScrollLeft(s)
							: this.editor.getOriginalEditor().setScrollLeft(s);
					}
					setData(s) {
						this.I = s;
						function l($) {
							return {
								...$,
								scrollBeyondLastLine: !1,
								hideUnchangedRegions: { enabled: !0 },
								scrollbar: {
									vertical: "hidden",
									horizontal: "hidden",
									handleMouseWheel: !1,
									useShadows: !1,
								},
								renderOverviewRuler: !1,
								fixedOverflowWidgets: !0,
								overviewRulerBorder: !1,
							};
						}
						if (!s) {
							(0, d.$8d)(($) => {
								this.a.set(void 0, $),
									this.editor.setDiffModel(null, $),
									this.H.clear();
							});
							return;
						}
						const y = s.viewModel.documentDiffItem;
						if (
							((0, d.$8d)(($) => {
								this.t?.setUri(
									s.viewModel.modifiedUri ?? s.viewModel.originalUri,
									{ strikethrough: s.viewModel.modifiedUri === void 0 },
								);
								let v = !1,
									S = !1,
									I = !1,
									T = "";
								s.viewModel.modifiedUri &&
								s.viewModel.originalUri &&
								s.viewModel.modifiedUri.path !== s.viewModel.originalUri.path
									? ((T = "R"), (v = !0))
									: s.viewModel.modifiedUri
										? s.viewModel.originalUri || ((T = "A"), (I = !0))
										: ((T = "D"), (S = !0)),
									this.q.status.classList.toggle("renamed", v),
									this.q.status.classList.toggle("deleted", S),
									this.q.status.classList.toggle("added", I),
									(this.q.status.innerText = T),
									this.u?.setUri(v ? s.viewModel.originalUri : void 0, {
										strikethrough: !0,
									}),
									this.H.clear(),
									this.a.set(s.viewModel, $),
									this.editor.setDiffModel(
										s.viewModel.diffEditorViewModelRef,
										$,
									),
									this.editor.updateOptions(l(y.options ?? {}));
							}),
							y.onOptionsDidChange &&
								this.H.add(
									y.onOptionsDidChange(() => {
										this.editor.updateOptions(l(y.options ?? {}));
									}),
								),
							s.viewModel.isAlive.recomputeInitiallyAndOnChange(this.H, ($) => {
								$ || this.setData(void 0);
							}),
							s.viewModel.documentDiffItem.contextKeys)
						)
							for (const [$, v] of Object.entries(
								s.viewModel.documentDiffItem.contextKeys,
							))
								this.y.createKey($, v);
					}
					render(s, l, y, $) {
						(this.q.root.style.visibility = "visible"),
							(this.q.root.style.top = `${s.start}px`),
							(this.q.root.style.height = `${s.length}px`),
							(this.q.root.style.width = `${l}px`),
							(this.q.root.style.position = "absolute");
						const v = s.length - this.J,
							S = Math.max(0, Math.min($.start - s.start, v));
						(this.q.header.style.transform = `translateY(${S}px)`),
							(0, d.$8d)((I) => {
								this.editor.layout({
									width: l - 2 * 8 - 2 * 1,
									height: s.length - this.w,
								});
							});
						try {
							(this.M = !0),
								(this.L = y),
								this.editor.getOriginalEditor().setScrollTop(y);
						} finally {
							this.M = !1;
						}
						this.q.header.classList.toggle("shadow", S > 0 || y > 0),
							this.q.header.classList.toggle("collapsed", S === v);
					}
					hide() {
						(this.q.root.style.top = "-100000px"),
							(this.q.root.style.visibility = "hidden");
					}
				};
				(e.$DGc = f), (e.$DGc = f = Ne([j(3, c.$Li), j(4, g.$6j)], f));
			},
		),
		define(
			de[2906],
			he([
				1, 0, 7, 203, 24, 214, 29, 3, 77, 407, 195, 370, 289, 104, 71, 8, 5,
				128, 1682, 2548, 4, 2283,
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
					(e.$EGc = void 0);
				let l = class extends d.$1c {
					constructor(S, I, T, P, k, L) {
						super(),
							(this.w = S),
							(this.y = I),
							(this.z = T),
							(this.C = P),
							(this.F = k),
							(this.G = L),
							(this.a = (0, t.h)("div.scrollContent", [
								(0, t.h)("div@content", { style: { overflow: "hidden" } }),
								(0, t.h)("div.monaco-editor@overflowWidgetsDomNode", {}),
							])),
							(this.b = this.D(
								new u.$KK({
									forceIntegerValues: !1,
									scheduleAtNextAnimationFrame: (M) =>
										(0, t.$hgb)((0, t.getWindow)(this.w), M),
									smoothScrollDuration: 100,
								}),
							)),
							(this.c = this.D(
								new i.$6hb(
									this.a.root,
									{
										vertical: u.ScrollbarVisibility.Auto,
										horizontal: u.ScrollbarVisibility.Auto,
										useShadows: !1,
									},
									this.b,
								),
							)),
							(this.f = (0, t.h)("div.monaco-component.multiDiffEditor", {}, [
								(0, t.h)("div", {}, [this.c.getDomNode()]),
								(0, t.h)("div.placeholder@placeholder", {}, [
									(0, t.h)("div", [(0, s.localize)(251, null)]),
								]),
							])),
							(this.g = this.D(new a.$Awb(this.w, void 0))),
							(this.j = this.D(
								new b.$BGc((M) => {
									const N = this.u.createInstance(
										f.$DGc,
										this.a.content,
										this.a.overflowWidgetsDomNode,
										this.C,
									);
									return N.setData(M), N;
								}),
							)),
							(this.scrollTop = (0, m.observableFromEvent)(
								this,
								this.c.onScroll,
								() => this.c.getScrollPosition().scrollTop,
							)),
							(this.scrollLeft = (0, m.observableFromEvent)(
								this,
								this.c.onScroll,
								() => this.c.getScrollPosition().scrollLeft,
							)),
							(this.m = (0, m.derivedWithStore)(this, (M, N) => {
								const A = this.z.read(M);
								if (!A)
									return {
										items: [],
										getItem: (U) => {
											throw new C.$gb();
										},
									};
								const R = A.items.read(M),
									O = new Map();
								return {
									items: R.map((U) => {
										const z = N.add(
												new $(U, this.j, this.scrollLeft, (x) => {
													this.c.setScrollPosition({
														scrollTop: this.c.getScrollPosition().scrollTop + x,
													});
												}),
											),
											F = this.H?.[z.getKey()];
										return (
											F &&
												(0, r.$7d)((x) => {
													z.setViewState(F, x);
												}),
											O.set(U, z),
											z
										);
									}),
									getItem: (U) => O.get(U),
								};
							})),
							(this.n = this.m.map(this, (M) => M.items)),
							(this.q = 0),
							(this.s = this.n.map(this, (M, N) =>
								M.reduce((A, R) => A + R.contentHeight.read(N) + this.q, 0),
							)),
							(this.activeControl = (0, m.derived)(this, (M) => {
								const N = this.z.read(M)?.activeDiffItem.read(M);
								return N
									? this.m.read(M).getItem(N).template.read(M)?.editor
									: void 0;
							})),
							(this.t = this.D(this.F.createScoped(this.w))),
							(this.u = this.D(this.G.createChild(new o.$Ki([g.$6j, this.t])))),
							(this.H = {}),
							this.t.createKey(n.EditorContextKeys.inMultiDiffEditor.key, !0),
							this.D(
								(0, m.autorunWithStore)((M, N) => {
									const A = this.z.read(M);
									if (A && A.contextKeys)
										for (const [R, O] of Object.entries(A.contextKeys)) {
											const B = this.t.createKey(R, void 0);
											B.set(O), N.add((0, d.$Yc)(() => B.reset()));
										}
								}),
							);
						const D = this.F.createKey(
							n.EditorContextKeys.multiDiffEditorAllCollapsed.key,
							!1,
						);
						this.D(
							(0, m.autorun)((M) => {
								const N = this.z.read(M);
								if (N) {
									const A = N.items.read(M).every((R) => R.collapsed.read(M));
									D.set(A);
								}
							}),
						),
							this.D(
								(0, m.autorun)((M) => {
									const N = this.y.read(M);
									this.g.observe(N);
								}),
							),
							this.D(
								(0, m.autorun)((M) => {
									const N = this.n.read(M);
									this.f.placeholder.classList.toggle(
										"visible",
										N.length === 0,
									);
								}),
							),
							(this.a.content.style.position = "relative"),
							this.D(
								(0, m.autorun)((M) => {
									const N = this.g.height.read(M);
									this.a.root.style.height = `${N}px`;
									const A = this.s.read(M);
									this.a.content.style.height = `${A}px`;
									const R = this.g.width.read(M);
									let O = R;
									const B = this.n.read(M),
										U = (0, E.$rb)(
											B,
											(0, w.$0b)((z) => z.maxScroll.read(M).maxScroll, w.$_b),
										);
									if (U) {
										const z = U.maxScroll.read(M);
										O = R + z.maxScroll;
									}
									this.c.setScrollDimensions({
										width: R,
										height: N,
										scrollHeight: A,
										scrollWidth: O,
									});
								}),
							),
							S.replaceChildren(this.f.root),
							this.D(
								(0, d.$Yc)(() => {
									S.replaceChildren();
								}),
							),
							this.D(
								this.D(
									(0, m.autorun)((M) => {
										(0, r.$8d)((N) => {
											this.I(M);
										});
									}),
								),
							);
					}
					setScrollState(S) {
						this.c.setScrollPosition({ scrollLeft: S.left, scrollTop: S.top });
					}
					reveal(S, I) {
						const T = this.n.get(),
							P = T.findIndex(
								(N) =>
									N.viewModel.originalUri?.toString() ===
										S.original?.toString() &&
									N.viewModel.modifiedUri?.toString() ===
										S.modified?.toString(),
							);
						if (P === -1) throw new C.$gb("Resource not found in diff editor");
						const k = T[P];
						this.z.get().activeDiffItem.setCache(k.viewModel, void 0);
						let L = 0;
						for (let N = 0; N < P; N++) L += T[N].contentHeight.get() + this.q;
						this.c.setScrollPosition({ scrollTop: L });
						const D = k.template.get()?.editor,
							M =
								"original" in S
									? D?.getOriginalEditor()
									: D?.getModifiedEditor();
						M && I?.range && (M.revealRangeInCenter(I.range), y(M, I.range));
					}
					getViewState() {
						return {
							scrollState: {
								top: this.scrollTop.get(),
								left: this.scrollLeft.get(),
							},
							docStates: Object.fromEntries(
								this.n.get().map((S) => [S.getKey(), S.getViewState()]),
							),
						};
					}
					setViewState(S) {
						this.setScrollState(S.scrollState),
							(this.H = S.docStates),
							(0, r.$7d)((I) => {
								if (S.docStates)
									for (const T of this.n.get()) {
										const P = S.docStates[T.getKey()];
										P && T.setViewState(P, I);
									}
							});
					}
					findDocumentDiffItem(S) {
						return this.n
							.get()
							.find(
								(T) =>
									T.viewModel.diffEditorViewModel.model.modified.uri.toString() ===
										S.toString() ||
									T.viewModel.diffEditorViewModel.model.original.uri.toString() ===
										S.toString(),
							)?.viewModel.documentDiffItem;
					}
					tryGetCodeEditor(S) {
						const I = this.n
								.get()
								.find(
									(P) =>
										P.viewModel.diffEditorViewModel.model.modified.uri.toString() ===
											S.toString() ||
										P.viewModel.diffEditorViewModel.model.original.uri.toString() ===
											S.toString(),
								),
							T = I?.template.get()?.editor;
						if (T)
							return I.viewModel.diffEditorViewModel.model.modified.uri.toString() ===
								S.toString()
								? { diffEditor: T, editor: T.getModifiedEditor() }
								: { diffEditor: T, editor: T.getOriginalEditor() };
					}
					I(S) {
						const I = this.scrollTop.read(S);
						let T = 0,
							P = 0,
							k = 0;
						const L = this.g.height.read(S),
							D = h.$pL.ofStartAndLength(I, L),
							M = this.g.width.read(S);
						for (const N of this.n.read(S)) {
							const A = N.contentHeight.read(S),
								R = Math.min(A, L),
								O = h.$pL.ofStartAndLength(P, R),
								B = h.$pL.ofStartAndLength(k, A);
							if (B.isBefore(D)) (T -= A - R), N.hide();
							else if (B.isAfter(D)) N.hide();
							else {
								const U = Math.max(0, Math.min(D.start - B.start, A - R));
								T -= U;
								const z = h.$pL.ofStartAndLength(I + T, L);
								N.render(O, U, M, z);
							}
							(P += R + this.q), (k += A + this.q);
						}
						this.a.content.style.transform = `translateY(${-(I + T)}px)`;
					}
				};
				(e.$EGc = l), (e.$EGc = l = Ne([j(4, g.$6j), j(5, p.$Li)], l));
				function y(v, S) {
					const I = v.getModel(),
						T = v.createDecorationsCollection([
							{
								range: S,
								options: {
									description: "symbol-navigate-action-highlight",
									className: "symbolHighlight",
								},
							},
						]);
					setTimeout(() => {
						v.getModel() === I && T.clear();
					}, 350);
				}
				class $ extends d.$1c {
					constructor(S, I, T, P) {
						super(),
							(this.viewModel = S),
							(this.f = I),
							(this.g = T),
							(this.j = P),
							(this.a = this.D((0, r.$be)(this, void 0))),
							(this.contentHeight = (0, m.derived)(
								this,
								(k) =>
									this.a.read(k)?.object.contentHeight?.read(k) ??
									this.viewModel.lastTemplateData.read(k).contentHeight,
							)),
							(this.maxScroll = (0, m.derived)(
								this,
								(k) =>
									this.a.read(k)?.object.maxScroll.read(k) ?? {
										maxScroll: 0,
										scrollWidth: 0,
									},
							)),
							(this.template = (0, m.derived)(
								this,
								(k) => this.a.read(k)?.object,
							)),
							(this.b = (0, m.observableValue)(this, !1)),
							(this.c = (0, m.derived)(
								this,
								(k) => this.template.read(k)?.isFocused.read(k) ?? !1,
							)),
							this.viewModel.setIsFocused(this.c, void 0),
							this.D(
								(0, m.autorun)((k) => {
									const L = this.g.read(k);
									this.a.read(k)?.object.setScrollLeft(L);
								}),
							),
							this.D(
								(0, m.autorun)((k) => {
									const L = this.a.read(k);
									!L ||
										!this.b.read(k) ||
										L.object.isFocused.read(k) ||
										this.n();
								}),
							);
					}
					dispose() {
						this.n(), super.dispose();
					}
					toString() {
						return `VirtualViewItem(${this.viewModel.documentDiffItem.modified?.uri.toString()})`;
					}
					getKey() {
						return this.viewModel.getKey();
					}
					getViewState() {
						return (
							(0, r.$7d)((S) => {
								this.m(S);
							}),
							{
								collapsed: this.viewModel.collapsed.get(),
								selections: this.viewModel.lastTemplateData.get().selections,
							}
						);
					}
					setViewState(S, I) {
						this.viewModel.collapsed.set(S.collapsed, I), this.m(I);
						const T = this.viewModel.lastTemplateData.get(),
							P = S.selections?.map(c.$kL.liftSelection);
						this.viewModel.lastTemplateData.set({ ...T, selections: P }, I);
						const k = this.a.get();
						k && P && k.object.editor.setSelections(P);
					}
					m(S) {
						const I = this.a.get();
						I &&
							this.viewModel.lastTemplateData.set(
								{
									contentHeight: I.object.contentHeight.get(),
									selections: I.object.editor.getSelections() ?? void 0,
								},
								S,
							);
					}
					n() {
						const S = this.a.get();
						S &&
							(0, r.$7d)((I) => {
								this.m(I), S.object.hide(), this.a.set(void 0, I);
							});
					}
					hide() {
						this.b.set(!0, void 0);
					}
					render(S, I, T, P) {
						this.b.set(!1, void 0);
						let k = this.a.get();
						if (!k) {
							(k = this.f.getUnusedObj(new f.$CGc(this.viewModel, this.j))),
								this.a.set(k, void 0);
							const L = this.viewModel.lastTemplateData.get().selections;
							L && k.object.editor.setSelections(L);
						}
						k.object.render(S, T, I, P);
					}
				}
			},
		),
		define(
			de[1683],
			he([1, 0, 3, 77, 755, 2906, 1681, 5, 1682, 6, 2832]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$IGc = void 0);
				let u = class extends t.$1c {
					constructor(h, c, n) {
						super(),
							(this.f = h),
							(this.g = c),
							(this.h = n),
							(this.a = (0, i.observableValue)(this, void 0)),
							(this.b = (0, i.observableValue)(this, void 0)),
							(this.c = (0, i.derivedWithStore)(
								this,
								(g, p) => (
									(0, w.$Tpb)(m.$DGc, g),
									p.add(
										this.h.createInstance(
											(0, w.$Tpb)(E.$EGc, g),
											this.f,
											this.a,
											this.b,
											this.g,
										),
									)
								),
							)),
							(this.j = (0, i.derived)(this, (g) =>
								this.c.read(g).activeControl.read(g),
							)),
							(this.onDidChangeActiveControl = r.Event.fromObservableLight(
								this.j,
							)),
							this.D((0, i.recomputeInitiallyAndOnChange)(this.c));
					}
					reveal(h, c) {
						this.c.get().reveal(h, c);
					}
					createViewModel(h) {
						return new C.$Fnc(h, this.h);
					}
					setViewModel(h) {
						this.b.set(h, void 0);
					}
					layout(h) {
						this.a.set(h, void 0);
					}
					getActiveControl() {
						return this.j.get();
					}
					getViewState() {
						return this.c.get().getViewState();
					}
					setViewState(h) {
						this.c.get().setViewState(h);
					}
					tryGetCodeEditor(h) {
						return this.c.get().tryGetCodeEditor(h);
					}
					findDocumentDiffItem(h) {
						return this.c.get().findDocumentDiffItem(h);
					}
				};
				(e.$IGc = u), (e.$IGc = u = Ne([j(2, d.$Li)], u));
			},
		),
		define(
			de[1684],
			he([
				1, 0, 15, 27, 3, 46, 38, 48, 17, 104, 71, 64, 122, 4, 11, 43, 51, 35,
				2285,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ezb = void 0),
					(c = mt(c));
				const f = (0, p.$wP)(
					"editorOverviewRuler.bracketMatchForeground",
					"#A0A0A0",
					c.localize(865, null),
				);
				class b extends E.$itb {
					constructor() {
						super({
							id: "editor.action.jumpToBracket",
							label: c.localize(866, null),
							alias: "Go to Bracket",
							precondition: void 0,
							kbOpts: {
								kbExpr: u.EditorContextKeys.editorTextFocus,
								primary:
									i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.Backslash,
								weight: g.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(S, I) {
						$.get(I)?.jumpToBracket();
					}
				}
				class s extends E.$itb {
					constructor() {
						super({
							id: "editor.action.selectToBracket",
							label: c.localize(867, null),
							alias: "Select to Bracket",
							precondition: void 0,
							metadata: {
								description: c.localize2(
									870,
									"Select the text inside and including the brackets or curly braces",
								),
								args: [
									{
										name: "args",
										schema: {
											type: "object",
											properties: {
												selectBrackets: { type: "boolean", default: !0 },
											},
										},
									},
								],
							},
						});
					}
					run(S, I, T) {
						let P = !0;
						T && T.selectBrackets === !1 && (P = !1),
							$.get(I)?.selectToBracket(P);
					}
				}
				class l extends E.$itb {
					constructor() {
						super({
							id: "editor.action.removeBrackets",
							label: c.localize(868, null),
							alias: "Remove Brackets",
							precondition: void 0,
							kbOpts: {
								kbExpr: u.EditorContextKeys.editorTextFocus,
								primary: i.KeyMod.CtrlCmd | i.KeyMod.Alt | i.KeyCode.Backspace,
								weight: g.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(S, I) {
						$.get(I)?.removeBrackets(this.id);
					}
				}
				class y {
					constructor(S, I, T) {
						(this.position = S), (this.brackets = I), (this.options = T);
					}
				}
				class $ extends w.$1c {
					static {
						this.ID = "editor.contrib.bracketMatchingController";
					}
					static get(S) {
						return S.getContribution($.ID);
					}
					constructor(S) {
						super(),
							(this.a = S),
							(this.b = []),
							(this.c = 0),
							(this.f = this.a.createDecorationsCollection()),
							(this.g = this.D(new t.$Yh(() => this.n(), 50))),
							(this.h = this.a.getOption(C.EditorOption.matchBrackets)),
							this.g.schedule(),
							this.D(
								S.onDidChangeCursorPosition((I) => {
									this.h !== "never" && this.g.schedule();
								}),
							),
							this.D(
								S.onDidChangeModelContent((I) => {
									this.g.schedule();
								}),
							),
							this.D(
								S.onDidChangeModel((I) => {
									(this.b = []), this.g.schedule();
								}),
							),
							this.D(
								S.onDidChangeModelLanguageConfiguration((I) => {
									(this.b = []), this.g.schedule();
								}),
							),
							this.D(
								S.onDidChangeConfiguration((I) => {
									I.hasChanged(C.EditorOption.matchBrackets) &&
										((this.h = this.a.getOption(C.EditorOption.matchBrackets)),
										this.f.clear(),
										(this.b = []),
										(this.c = 0),
										this.g.schedule());
								}),
							),
							this.D(
								S.onDidBlurEditorWidget(() => {
									this.g.schedule();
								}),
							),
							this.D(
								S.onDidFocusEditorWidget(() => {
									this.g.schedule();
								}),
							);
					}
					jumpToBracket() {
						if (!this.a.hasModel()) return;
						const S = this.a.getModel(),
							I = this.a.getSelections().map((T) => {
								const P = T.getStartPosition(),
									k = S.bracketPairs.matchBracket(P);
								let L = null;
								if (k)
									k[0].containsPosition(P) && !k[1].containsPosition(P)
										? (L = k[1].getStartPosition())
										: k[1].containsPosition(P) && (L = k[0].getStartPosition());
								else {
									const D = S.bracketPairs.findEnclosingBrackets(P);
									if (D) L = D[1].getStartPosition();
									else {
										const M = S.bracketPairs.findNextBracket(P);
										M && M.range && (L = M.range.getStartPosition());
									}
								}
								return L
									? new r.$kL(L.lineNumber, L.column, L.lineNumber, L.column)
									: new r.$kL(P.lineNumber, P.column, P.lineNumber, P.column);
							});
						this.a.setSelections(I), this.a.revealRange(I[0]);
					}
					selectToBracket(S) {
						if (!this.a.hasModel()) return;
						const I = this.a.getModel(),
							T = [];
						this.a.getSelections().forEach((P) => {
							const k = P.getStartPosition();
							let L = I.bracketPairs.matchBracket(k);
							if (!L && ((L = I.bracketPairs.findEnclosingBrackets(k)), !L)) {
								const N = I.bracketPairs.findNextBracket(k);
								N &&
									N.range &&
									(L = I.bracketPairs.matchBracket(N.range.getStartPosition()));
							}
							let D = null,
								M = null;
							if (L) {
								L.sort(m.$iL.compareRangesUsingStarts);
								const [N, A] = L;
								if (
									((D = S ? N.getStartPosition() : N.getEndPosition()),
									(M = S ? A.getEndPosition() : A.getStartPosition()),
									A.containsPosition(k))
								) {
									const R = D;
									(D = M), (M = R);
								}
							}
							D &&
								M &&
								T.push(
									new r.$kL(D.lineNumber, D.column, M.lineNumber, M.column),
								);
						}),
							T.length > 0 &&
								(this.a.setSelections(T), this.a.revealRange(T[0]));
					}
					removeBrackets(S) {
						if (!this.a.hasModel()) return;
						const I = this.a.getModel();
						this.a.getSelections().forEach((T) => {
							const P = T.getPosition();
							let k = I.bracketPairs.matchBracket(P);
							k || (k = I.bracketPairs.findEnclosingBrackets(P)),
								k &&
									(this.a.pushUndoStop(),
									this.a.executeEdits(S, [
										{ range: k[0], text: "" },
										{ range: k[1], text: "" },
									]),
									this.a.pushUndoStop());
						});
					}
					static {
						this.j = h.$eY.register({
							description: "bracket-match-overview",
							stickiness: a.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							className: "bracket-match",
							overviewRuler: {
								color: (0, o.$jP)(f),
								position: a.OverviewRulerLane.Center,
							},
						});
					}
					static {
						this.m = h.$eY.register({
							description: "bracket-match-no-overview",
							stickiness: a.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							className: "bracket-match",
						});
					}
					n() {
						if (this.h === "never") return;
						this.q();
						const S = [];
						let I = 0;
						for (const T of this.b) {
							const P = T.brackets;
							P &&
								((S[I++] = { range: P[0], options: T.options }),
								(S[I++] = { range: P[1], options: T.options }));
						}
						this.f.set(S);
					}
					q() {
						if (!this.a.hasModel() || !this.a.hasWidgetFocus()) {
							(this.b = []), (this.c = 0);
							return;
						}
						const S = this.a.getSelections();
						if (S.length > 100) {
							(this.b = []), (this.c = 0);
							return;
						}
						const I = this.a.getModel(),
							T = I.getVersionId();
						let P = [];
						this.c === T && (P = this.b);
						const k = [];
						let L = 0;
						for (let R = 0, O = S.length; R < O; R++) {
							const B = S[R];
							B.isEmpty() && (k[L++] = B.getStartPosition());
						}
						k.length > 1 && k.sort(d.$hL.compare);
						const D = [];
						let M = 0,
							N = 0;
						const A = P.length;
						for (let R = 0, O = k.length; R < O; R++) {
							const B = k[R];
							for (; N < A && P[N].position.isBefore(B); ) N++;
							if (N < A && P[N].position.equals(B)) D[M++] = P[N];
							else {
								let U = I.bracketPairs.matchBracket(B, 20),
									z = $.j;
								!U &&
									this.h === "always" &&
									((U = I.bracketPairs.findEnclosingBrackets(B, 20)),
									(z = $.m)),
									(D[M++] = new y(B, U, z));
							}
						}
						(this.b = D), (this.c = T);
					}
				}
				(e.$ezb = $),
					(0, E.$qtb)(
						$.ID,
						$,
						E.EditorContributionInstantiation.AfterFirstRender,
					),
					(0, E.$ntb)(s),
					(0, E.$ntb)(b),
					(0, E.$ntb)(l),
					n.$ZX.appendMenuItem(n.$XX.MenubarGoMenu, {
						group: "5_infile_nav",
						command: {
							id: "editor.action.jumpToBracket",
							title: c.localize(869, null),
						},
						order: 2,
					});
			},
		),
		define(
			de[1685],
			he([
				1, 0, 7, 159, 14, 6, 3, 26, 56, 38, 64, 122, 1149, 393, 4, 39, 79, 17,
				2291,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				var f;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wBb = void 0),
					(t = mt(t)),
					(n = mt(n));
				const b = (0, p.$$O)(
						"gutter-lightbulb",
						w.$ak.lightBulb,
						n.localize(940, null),
					),
					s = (0, p.$$O)(
						"gutter-lightbulb-auto-fix",
						w.$ak.lightbulbAutofix,
						n.localize(941, null),
					),
					l = (0, p.$$O)(
						"gutter-lightbulb-sparkle",
						w.$ak.lightbulbSparkle,
						n.localize(942, null),
					),
					y = (0, p.$$O)(
						"gutter-lightbulb-aifix-auto-fix",
						w.$ak.lightbulbSparkleAutofix,
						n.localize(943, null),
					),
					$ = (0, p.$$O)(
						"gutter-lightbulb-sparkle-filled",
						w.$ak.sparkleFilled,
						n.localize(944, null),
					);
				var v;
				(function (I) {
					let T;
					(function (k) {
						(k[(k.Hidden = 0)] = "Hidden"), (k[(k.Showing = 1)] = "Showing");
					})((T = I.Type || (I.Type = {}))),
						(I.Hidden = { type: T.Hidden });
					class P {
						constructor(L, D, M, N) {
							(this.actions = L),
								(this.trigger = D),
								(this.editorPosition = M),
								(this.widgetPosition = N),
								(this.type = T.Showing);
						}
					}
					I.Showing = P;
				})(v || (v = {}));
				let S = class extends C.$1c {
					static {
						f = this;
					}
					static {
						this.b = a.$eY.register({
							description: "codicon-gutter-lightbulb-decoration",
							glyphMarginClassName: d.ThemeIcon.asClassName(w.$ak.lightBulb),
							glyphMargin: { position: u.GlyphMarginLane.Left },
							stickiness: u.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
						});
					}
					static {
						this.ID = "editor.contrib.lightbulbWidget";
					}
					static {
						this.c = [m.ContentWidgetPositionPreference.EXACT];
					}
					constructor(T, P) {
						super(),
							(this.t = T),
							(this.u = P),
							(this.g = this.D(new E.$re())),
							(this.onClick = this.g.event),
							(this.h = v.Hidden),
							(this.j = v.Hidden),
							(this.m = []),
							(this.n = [
								"codicon-" + b.id,
								"codicon-" + y.id,
								"codicon-" + s.id,
								"codicon-" + l.id,
								"codicon-" + $.id,
							]),
							(this.s = f.b),
							(this.f = t.$("div.lightBulbWidget")),
							(this.f.role = "listbox"),
							this.D(i.$Qhb.ignoreTarget(this.f)),
							this.t.addContentWidget(this),
							this.D(
								this.t.onDidChangeModelContent((k) => {
									const L = this.t.getModel();
									(this.w.type !== v.Type.Showing ||
										!L ||
										this.w.editorPosition.lineNumber >= L.getLineCount()) &&
										this.hide(),
										(this.z.type !== v.Type.Showing ||
											!L ||
											this.z.editorPosition.lineNumber >= L.getLineCount()) &&
											this.gutterHide();
								}),
							),
							this.D(
								t.$_fb(this.f, (k) => {
									if (this.w.type !== v.Type.Showing) return;
									this.t.focus(), k.preventDefault();
									const { top: L, height: D } = t.$tgb(this.f),
										M = this.t.getOption(r.EditorOption.lineHeight);
									let N = Math.floor(M / 3);
									this.w.widgetPosition.position !== null &&
										this.w.widgetPosition.position.lineNumber <
											this.w.editorPosition.lineNumber &&
										(N += M),
										this.g.fire({
											x: k.posx,
											y: L + D + N,
											actions: this.w.actions,
											trigger: this.w.trigger,
										});
								}),
							),
							this.D(
								t.$0fb(this.f, "mouseenter", (k) => {
									(k.buttons & 1) === 1 && this.hide();
								}),
							),
							this.D(
								E.Event.runAndSubscribe(this.u.onDidUpdateKeybindings, () => {
									(this.q =
										this.u.lookupKeybinding(c.$NAb)?.getLabel() ?? void 0),
										(this.r =
											this.u.lookupKeybinding(c.$MAb)?.getLabel() ?? void 0),
										this.C();
								}),
							),
							this.D(
								this.t.onMouseDown(async (k) => {
									if (
										!k.target.element ||
										!this.n.some(
											(A) =>
												k.target.element &&
												k.target.element.classList.contains(A),
										) ||
										this.z.type !== v.Type.Showing
									)
										return;
									this.t.focus();
									const { top: L, height: D } = t.$tgb(k.target.element),
										M = this.t.getOption(r.EditorOption.lineHeight);
									let N = Math.floor(M / 3);
									this.z.widgetPosition.position !== null &&
										this.z.widgetPosition.position.lineNumber <
											this.z.editorPosition.lineNumber &&
										(N += M),
										this.g.fire({
											x: k.event.posx,
											y: L + D + N,
											actions: this.z.actions,
											trigger: this.z.trigger,
										});
								}),
							);
					}
					dispose() {
						super.dispose(),
							this.t.removeContentWidget(this),
							this.a && this.I(this.a);
					}
					getId() {
						return "LightBulbWidget";
					}
					getDomNode() {
						return this.f;
					}
					getPosition() {
						return this.h.type === v.Type.Showing
							? this.h.widgetPosition
							: null;
					}
					update(T, P, k) {
						if (T.validActions.length <= 0)
							return this.gutterHide(), this.hide();
						if (!this.t.hasTextFocus()) return this.gutterHide(), this.hide();
						if (!this.t.getOptions().get(r.EditorOption.lightbulb).enabled)
							return this.gutterHide(), this.hide();
						const M = this.t.getModel();
						if (!M) return this.gutterHide(), this.hide();
						const { lineNumber: N, column: A } = M.validatePosition(k),
							R = M.getOptions().tabSize,
							O = this.t.getOptions().get(r.EditorOption.fontInfo),
							B = M.getLineContent(N),
							U = (0, h.$BU)(B, R),
							z = O.spaceWidth * U > 22,
							F = (J) =>
								J > 2 &&
								this.t.getTopForLineNumber(J) ===
									this.t.getTopForLineNumber(J - 1),
							x = this.t.getLineDecorations(N);
						let H = !1;
						if (x)
							for (const J of x) {
								const W = J.options.glyphMarginClassName;
								if (W && !this.n.some((X) => W.includes(X))) {
									H = !0;
									break;
								}
							}
						let q = N,
							V = 1;
						if (!z) {
							const J = (W) => {
								const X = M.getLineContent(W);
								return /^\s*$|^\s+/.test(X) || X.length <= V;
							};
							if (N > 1 && !F(N - 1)) {
								const W = M.getLineCount(),
									X = N === W,
									Y = N > 1 && J(N - 1),
									ie = !X && J(N + 1),
									ne = J(N),
									ee = !ie && !Y;
								if (!ie && !Y && !H)
									return (
										(this.z = new v.Showing(T, P, k, {
											position: { lineNumber: q, column: V },
											preference: f.c,
										})),
										this.G(),
										this.hide()
									);
								Y || X || (Y && !ne)
									? (q -= 1)
									: (ie || (ee && ne)) && (q += 1);
							} else if (
								N === 1 &&
								(N === M.getLineCount() || (!J(N + 1) && !J(N)))
							)
								if (
									((this.z = new v.Showing(T, P, k, {
										position: { lineNumber: q, column: V },
										preference: f.c,
									})),
									H)
								)
									this.gutterHide();
								else return this.G(), this.hide();
							else if (N < M.getLineCount() && !F(N + 1)) q += 1;
							else if (A * O.spaceWidth < 22) return this.hide();
							V = /^\S\s*$/.test(M.getLineContent(q)) ? 2 : 1;
						}
						(this.w = new v.Showing(T, P, k, {
							position: { lineNumber: q, column: V },
							preference: f.c,
						})),
							this.a && (this.I(this.a), this.gutterHide());
						const G = T.validActions,
							K = T.validActions[0].action.kind;
						if (G.length !== 1 || !K) {
							this.t.layoutContentWidget(this);
							return;
						}
						this.t.layoutContentWidget(this);
					}
					hide() {
						this.w !== v.Hidden &&
							((this.w = v.Hidden), this.t.layoutContentWidget(this));
					}
					gutterHide() {
						this.z !== v.Hidden &&
							(this.a && this.I(this.a), (this.z = v.Hidden));
					}
					get w() {
						return this.h;
					}
					set w(T) {
						(this.h = T), this.C();
					}
					get z() {
						return this.j;
					}
					set z(T) {
						(this.j = T), this.F();
					}
					C() {
						if (
							(this.f.classList.remove(...this.m),
							(this.m = []),
							this.w.type !== v.Type.Showing)
						)
							return;
						let T,
							P = !1;
						this.w.actions.allAIFixes
							? ((T = w.$ak.sparkleFilled),
								this.w.actions.validActions.length === 1 && (P = !0))
							: this.w.actions.hasAutoFix
								? this.w.actions.hasAIFix
									? (T = w.$ak.lightbulbSparkleAutofix)
									: (T = w.$ak.lightbulbAutofix)
								: this.w.actions.hasAIFix
									? (T = w.$ak.lightbulbSparkle)
									: (T = w.$ak.lightBulb),
							this.L(this.w.actions.hasAutoFix, P),
							(this.m = d.ThemeIcon.asClassNameArray(T)),
							this.f.classList.add(...this.m);
					}
					F() {
						if (this.z.type !== v.Type.Showing) return;
						let T,
							P = !1;
						this.z.actions.allAIFixes
							? ((T = $), this.z.actions.validActions.length === 1 && (P = !0))
							: this.z.actions.hasAutoFix
								? this.z.actions.hasAIFix
									? (T = y)
									: (T = s)
								: this.z.actions.hasAIFix
									? (T = l)
									: (T = b),
							this.L(this.z.actions.hasAutoFix, P);
						const k = a.$eY.register({
							description: "codicon-gutter-lightbulb-decoration",
							glyphMarginClassName: d.ThemeIcon.asClassName(T),
							glyphMargin: { position: u.GlyphMarginLane.Left },
							stickiness: u.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
						});
						this.s = k;
					}
					G() {
						const T = this.t.getSelection();
						T &&
							(this.a === void 0
								? this.H(T.startLineNumber)
								: this.J(this.a, T.startLineNumber));
					}
					H(T) {
						this.t.changeDecorations((P) => {
							this.a = P.addDecoration(new o.$iL(T, 0, T, 0), this.s);
						});
					}
					I(T) {
						this.t.changeDecorations((P) => {
							P.removeDecoration(T), (this.a = void 0);
						});
					}
					J(T, P) {
						this.t.changeDecorations((k) => {
							k.changeDecoration(T, new o.$iL(P, 0, P, 0)),
								k.changeDecorationOptions(T, this.s);
						});
					}
					L(T, P) {
						this.w.type === v.Type.Showing &&
							(P
								? (this.M = n.localize(
										945,
										null,
										this.w.actions.validActions[0].action.title,
									))
								: T && this.q
									? (this.M = n.localize(946, null, this.q))
									: !T && this.r
										? (this.M = n.localize(947, null, this.r))
										: T || (this.M = n.localize(948, null)));
					}
					set M(T) {
						this.f.title = T;
					}
				};
				(e.$wBb = S), (e.$wBb = S = f = Ne([j(1, g.$uZ)], S));
			},
		),
		define(
			de[500],
			he([
				1, 0, 7, 127, 29, 149, 3, 48, 98, 74, 122, 69, 393, 2807, 2834, 1685,
				440, 4, 1659, 31, 10, 8, 5, 90, 84, 51, 212, 35, 39, 45, 6, 291, 1642,
				318, 32, 38,
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
			) {
				"use strict";
				var O;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$BBb = void 0),
					(i = mt(i));
				const B = "quickfix-edit-highlight";
				let U = class extends C.$1c {
					static {
						O = this;
					}
					static {
						this.ID = "editor.contrib.codeActionController";
					}
					static get(F) {
						return F.getContribution(O.ID);
					}
					constructor(F, x, H, q, V, G, K, J, W, X, Y, ie, ne) {
						super(),
							(this.q = K),
							(this.r = J),
							(this.s = W),
							(this.t = X),
							(this.u = Y),
							(this.w = ie),
							(this.z = ne),
							(this.f = this.D(new C.$2c())),
							(this.g = !1),
							(this.h = this.D(new L.$re())),
							(this.onDidChangeCodeActions = this.h.event),
							(this.j = this.D(new L.$re())),
							(this.onDidApplyCodeAction = this.j.event),
							(this.n = !1),
							(this.a = F),
							(this.b = this.D(
								new M.$ABb(
									this.a,
									V.codeActionProvider,
									x,
									H,
									G,
									Y,
									J,
									ie,
									this.z,
								),
							)),
							this.D(this.b.onDidChangeState((ee) => this.H(ee))),
							(this.c = new E.$Y(() => {
								const ee = this.a.getContribution(g.$wBb.ID);
								return (
									ee && this.D(ee.onClick((_) => this.C(_.actions, _))), ee
								);
							})),
							(this.m = q.createInstance(c.$WAb)),
							this.D(this.a.onDidLayoutChange(() => this.s.hide()));
					}
					dispose() {
						(this.n = !0), super.dispose();
					}
					async C(F, x) {
						if (F.allAIFixes && F.validActions.length === 1) {
							const H = F.validActions[0],
								q = H.action.command;
							q &&
								q.id === "inlineChat.start" &&
								q.arguments &&
								q.arguments.length >= 1 &&
								(q.arguments[0] = { ...q.arguments[0], autoSend: !1 }),
								await this.G(
									H,
									!1,
									!1,
									h.ApplyCodeActionReason.FromAILightbulb,
								);
							return;
						}
						await this.showCodeActionList(F, x, {
							includeDisabledActions: !1,
							fromLightbulb: !0,
						});
					}
					showCodeActions(F, x, H) {
						return this.showCodeActionList(x, H, {
							includeDisabledActions: !1,
							fromLightbulb: !1,
						});
					}
					hideCodeActions() {
						this.s.hide();
					}
					manualTriggerAtCurrentPosition(F, x, H, q) {
						if (!this.a.hasModel()) return;
						p.$Szb.get(this.a)?.closeMessage();
						const V = this.a.getPosition();
						this.F({
							type: r.CodeActionTriggerType.Invoke,
							triggerAction: x,
							filter: H,
							autoApply: q,
							context: { notAvailableMessage: F, position: V },
						});
					}
					F(F) {
						return this.b.trigger(F);
					}
					async G(F, x, H, q) {
						this.j.fire(F);
						try {
							await this.t.invokeFunction(h.$VAb, F, q, {
								preview: H,
								editor: this.a,
							});
						} finally {
							x &&
								this.F({
									type: r.CodeActionTriggerType.Auto,
									triggerAction: D.CodeActionTriggerSource.QuickFix,
									filter: {},
								});
						}
					}
					hideLightBulbWidget() {
						this.c.rawValue?.hide(), this.c.rawValue?.gutterHide();
					}
					async H(F) {
						if (F.type !== M.CodeActionsState.Type.Triggered) {
							this.hideLightBulbWidget();
							return;
						}
						let x;
						try {
							x = await F.actions;
						} catch (q) {
							(0, w.$4)(q);
							return;
						}
						if (
							!(
								this.n ||
								this.a.getSelection()?.startLineNumber !== F.position.lineNumber
							)
						)
							if (
								(this.a.getOption(R.EditorOption.lightbulb).enabled !==
									R.ShowLightbulbIconMode.Off &&
									this.c.value?.update(x, F.trigger, F.position),
								F.trigger.type === r.CodeActionTriggerType.Invoke)
							) {
								if (F.trigger.filter?.include) {
									const V = this.J(F.trigger, x);
									if (V) {
										try {
											this.hideLightBulbWidget(),
												await this.G(
													V,
													!1,
													!1,
													h.ApplyCodeActionReason.FromCodeActions,
												);
										} finally {
											x.dispose();
										}
										return;
									}
									if (F.trigger.context) {
										const G = this.I(F.trigger, x);
										if (G && G.action.disabled) {
											p.$Szb
												.get(this.a)
												?.showMessage(
													G.action.disabled,
													F.trigger.context.position,
												),
												x.dispose();
											return;
										}
									}
								}
								const q = !!F.trigger.filter?.include;
								if (
									F.trigger.context &&
									(!x.allActions.length || (!q && !x.validActions.length))
								) {
									p.$Szb
										.get(this.a)
										?.showMessage(
											F.trigger.context.notAvailableMessage,
											F.trigger.context.position,
										),
										(this.f.value = x),
										this.h.fire(x),
										x.dispose();
									return;
								}
								(this.f.value = x),
									this.h.fire(x),
									this.showCodeActionList(x, this.M(F.position), {
										includeDisabledActions: q,
										fromLightbulb: !1,
									});
							} else
								this.s.isVisible
									? x.dispose()
									: ((this.f.value = x), this.h.fire(x));
					}
					I(F, x) {
						if (
							x.allActions.length &&
							((F.autoApply === D.CodeActionAutoApply.First &&
								x.validActions.length === 0) ||
								(F.autoApply === D.CodeActionAutoApply.IfSingle &&
									x.allActions.length === 1))
						)
							return x.allActions.find(({ action: H }) => H.disabled);
					}
					J(F, x) {
						if (
							x.validActions.length &&
							((F.autoApply === D.CodeActionAutoApply.First &&
								x.validActions.length > 0) ||
								(F.autoApply === D.CodeActionAutoApply.IfSingle &&
									x.validActions.length === 1))
						)
							return x.validActions[0];
					}
					static {
						this.L = u.$eY.register({
							description: "quickfix-highlight",
							className: B,
						});
					}
					async showCodeActionList(F, x, H) {
						const q = this.a.createDecorationsCollection(),
							V = this.a.getDomNode();
						if (!V) return;
						const G =
							H.includeDisabledActions &&
							(this.g || F.validActions.length === 0)
								? F.allActions
								: F.validActions;
						if (!G.length) return;
						const K = d.$hL.isIPosition(x) ? this.M(x) : x,
							J = {
								onSelect: async (W, X) => {
									this.G(
										W,
										!0,
										!!X,
										H.fromLightbulb
											? h.ApplyCodeActionReason.FromAILightbulb
											: h.ApplyCodeActionReason.FromCodeActions,
									),
										this.s.hide(!1),
										q.clear();
								},
								onHide: (W) => {
									this.a?.focus(), q.clear();
								},
								onHover: async (W, X) => {
									if (X.isCancellationRequested) return;
									let Y = !1;
									const ie = W.action.kind;
									if (ie) {
										const ne = new N.$1L(ie);
										Y = [
											D.$GAb.RefactorExtract,
											D.$GAb.RefactorInline,
											D.$GAb.RefactorRewrite,
											D.$GAb.RefactorMove,
											D.$GAb.Source,
										].some((_) => _.contains(ne));
									}
									return { canPreview: Y || !!W.action.edit?.edits.length };
								},
								onFocus: (W) => {
									if (W && W.action) {
										const X = W.action.ranges,
											Y = W.action.diagnostics;
										if ((q.clear(), X && X.length > 0)) {
											const ie =
												Y && Y?.length > 1
													? Y.map((ne) => ({ range: ne, options: O.L }))
													: X.map((ne) => ({ range: ne, options: O.L }));
											q.set(ie);
										} else if (Y && Y.length > 0) {
											const ie = Y.map((ee) => ({ range: ee, options: O.L }));
											q.set(ie);
											const ne = Y[0];
											if (ne.startLineNumber && ne.startColumn) {
												const ee = this.a
													.getModel()
													?.getWordAtPosition({
														lineNumber: ne.startLineNumber,
														column: ne.startColumn,
													})?.word;
												i.$pib(
													(0, o.localize)(
														929,
														null,
														ee,
														ne.startLineNumber,
														ne.startColumn,
													),
												);
											}
										}
									} else q.clear();
								},
							};
						this.s.show(
							"codeActionWidget",
							!0,
							(0, n.$vBb)(G, this.N(), this.m.getResolver()),
							J,
							K,
							V,
							this.O(F, x, H),
						);
					}
					M(F) {
						if (!this.a.hasModel()) return { x: 0, y: 0 };
						this.a.revealPosition(F, m.ScrollType.Immediate), this.a.render();
						const x = this.a.getScrolledVisiblePosition(F),
							H = (0, t.$tgb)(this.a.getDomNode()),
							q = H.left + x.left,
							V = H.top + x.top + x.height;
						return { x: q, y: V };
					}
					N() {
						const F = this.a?.getModel();
						return this.r.getValue("editor.codeActionWidget.showHeaders", {
							resource: F?.uri,
						});
					}
					O(F, x, H) {
						if (H.fromLightbulb) return [];
						const q = F.documentation.map((V) => ({
							id: V.id,
							label: V.title,
							tooltip: V.tooltip ?? "",
							class: void 0,
							enabled: !0,
							run: () => this.q.executeCommand(V.id, ...(V.arguments ?? [])),
						}));
						return (
							H.includeDisabledActions &&
								F.validActions.length > 0 &&
								F.allActions.length !== F.validActions.length &&
								q.push(
									this.g
										? {
												id: "hideMoreActions",
												label: (0, o.localize)(930, null),
												enabled: !0,
												tooltip: "",
												class: void 0,
												run: () => (
													(this.g = !1), this.showCodeActionList(F, x, H)
												),
											}
										: {
												id: "showMoreActions",
												label: (0, o.localize)(931, null),
												enabled: !0,
												tooltip: "",
												class: void 0,
												run: () => (
													(this.g = !0), this.showCodeActionList(F, x, H)
												),
											},
								),
							q
						);
					}
				};
				(e.$BBb = U),
					(e.$BBb =
						U =
						O =
							Ne(
								[
									j(1, $.$aM),
									j(2, l.$6j),
									j(3, y.$Li),
									j(4, a.$k3),
									j(5, v.$bO),
									j(6, b.$ek),
									j(7, s.$gj),
									j(8, f.$xBb),
									j(9, y.$Li),
									j(10, P.$uZ),
									j(11, k.$0zb),
									j(12, A.$km),
								],
								U,
							)),
					(0, T.$oP)((z, F) => {
						((q, V) => {
							V && F.addRule(`.monaco-editor ${q} { background-color: ${V}; }`);
						})(".quickfix-edit-highlight", z.getColor(S.$yQ));
						const H = z.getColor(S.$CQ);
						H &&
							F.addRule(
								`.monaco-editor .quickfix-edit-highlight { border: 1px ${((0, I.$gP))(z.type) ? "dotted" : "solid"} ${H}; box-sizing: border-box; }`,
							);
					});
			},
		),
		define(
			de[2907],
			he([1, 0, 318, 27, 37, 46, 71, 393, 4, 8, 43, 291, 500, 1642]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$IBb =
						e.$HBb =
						e.$GBb =
						e.$FBb =
						e.$EBb =
						e.$DBb =
						e.$CBb =
							void 0),
					(m = mt(m));
				function n(v) {
					return r.$Kj.regex(
						c.$yBb.keys()[0],
						new RegExp("(\\s|^)" + (0, w.$of)(v.value) + "\\b"),
					);
				}
				const g = {
					type: "object",
					defaultSnippets: [{ body: { kind: "" } }],
					properties: {
						kind: { type: "string", description: m.localize(898, null) },
						apply: {
							type: "string",
							description: m.localize(899, null),
							default: a.CodeActionAutoApply.IfSingle,
							enum: [
								a.CodeActionAutoApply.First,
								a.CodeActionAutoApply.IfSingle,
								a.CodeActionAutoApply.Never,
							],
							enumDescriptions: [
								m.localize(900, null),
								m.localize(901, null),
								m.localize(902, null),
							],
						},
						preferred: {
							type: "boolean",
							default: !1,
							description: m.localize(903, null),
						},
					},
				};
				function p(v, S, I, T, P = a.CodeActionTriggerSource.Default) {
					v.hasModel() &&
						h.$BBb.get(v)?.manualTriggerAtCurrentPosition(S, P, I, T);
				}
				class o extends E.$itb {
					constructor() {
						super({
							id: d.$MAb,
							label: m.localize(904, null),
							alias: "Quick Fix...",
							precondition: r.$Kj.and(
								C.EditorContextKeys.writable,
								C.EditorContextKeys.hasCodeActionsProvider,
							),
							kbOpts: {
								kbExpr: C.EditorContextKeys.textInputFocus,
								primary: i.KeyMod.CtrlCmd | i.KeyCode.Period,
								weight: u.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(S, I) {
						return p(
							I,
							m.localize(905, null),
							void 0,
							void 0,
							a.CodeActionTriggerSource.QuickFix,
						);
					}
				}
				e.$CBb = o;
				class f extends E.$htb {
					constructor() {
						super({
							id: d.$LAb,
							precondition: r.$Kj.and(
								C.EditorContextKeys.writable,
								C.EditorContextKeys.hasCodeActionsProvider,
							),
							metadata: {
								description: "Trigger a code action",
								args: [{ name: "args", schema: g }],
							},
						});
					}
					runEditorCommand(S, I, T) {
						const P = a.$JAb.fromUser(T, {
							kind: t.$1L.Empty,
							apply: a.CodeActionAutoApply.IfSingle,
						});
						return p(
							I,
							typeof T?.kind == "string"
								? P.preferred
									? m.localize(906, null, T.kind)
									: m.localize(907, null, T.kind)
								: P.preferred
									? m.localize(908, null)
									: m.localize(909, null),
							{
								include: P.kind,
								includeSourceActions: !0,
								onlyIncludePreferredActions: P.preferred,
							},
							P.apply,
						);
					}
				}
				e.$DBb = f;
				class b extends E.$itb {
					constructor() {
						super({
							id: d.$OAb,
							label: m.localize(910, null),
							alias: "Refactor...",
							precondition: r.$Kj.and(
								C.EditorContextKeys.writable,
								C.EditorContextKeys.hasCodeActionsProvider,
							),
							kbOpts: {
								kbExpr: C.EditorContextKeys.textInputFocus,
								primary: i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.KeyR,
								mac: {
									primary: i.KeyMod.WinCtrl | i.KeyMod.Shift | i.KeyCode.KeyR,
								},
								weight: u.KeybindingWeight.EditorContrib,
							},
							contextMenuOpts: {
								group: "1_modification",
								order: 2,
								when: r.$Kj.and(
									C.EditorContextKeys.writable,
									n(a.$GAb.Refactor),
								),
							},
							metadata: {
								description: "Refactor...",
								args: [{ name: "args", schema: g }],
							},
						});
					}
					run(S, I, T) {
						const P = a.$JAb.fromUser(T, {
							kind: a.$GAb.Refactor,
							apply: a.CodeActionAutoApply.Never,
						});
						return p(
							I,
							typeof T?.kind == "string"
								? P.preferred
									? m.localize(911, null, T.kind)
									: m.localize(912, null, T.kind)
								: P.preferred
									? m.localize(913, null)
									: m.localize(914, null),
							{
								include: a.$GAb.Refactor.contains(P.kind) ? P.kind : t.$1L.None,
								onlyIncludePreferredActions: P.preferred,
							},
							P.apply,
							a.CodeActionTriggerSource.Refactor,
						);
					}
				}
				e.$EBb = b;
				class s extends E.$itb {
					constructor() {
						super({
							id: d.$QAb,
							label: m.localize(915, null),
							alias: "Source Action...",
							precondition: r.$Kj.and(
								C.EditorContextKeys.writable,
								C.EditorContextKeys.hasCodeActionsProvider,
							),
							contextMenuOpts: {
								group: "1_modification",
								order: 2.1,
								when: r.$Kj.and(C.EditorContextKeys.writable, n(a.$GAb.Source)),
							},
							metadata: {
								description: "Source Action...",
								args: [{ name: "args", schema: g }],
							},
						});
					}
					run(S, I, T) {
						const P = a.$JAb.fromUser(T, {
							kind: a.$GAb.Source,
							apply: a.CodeActionAutoApply.Never,
						});
						return p(
							I,
							typeof T?.kind == "string"
								? P.preferred
									? m.localize(916, null, T.kind)
									: m.localize(917, null, T.kind)
								: P.preferred
									? m.localize(918, null)
									: m.localize(919, null),
							{
								include: a.$GAb.Source.contains(P.kind) ? P.kind : t.$1L.None,
								includeSourceActions: !0,
								onlyIncludePreferredActions: P.preferred,
							},
							P.apply,
							a.CodeActionTriggerSource.SourceAction,
						);
					}
				}
				e.$FBb = s;
				class l extends E.$itb {
					constructor() {
						super({
							id: d.$RAb,
							label: m.localize(920, null),
							alias: "Organize Imports",
							precondition: r.$Kj.and(
								C.EditorContextKeys.writable,
								n(a.$GAb.SourceOrganizeImports),
							),
							kbOpts: {
								kbExpr: C.EditorContextKeys.textInputFocus,
								primary: i.KeyMod.Shift | i.KeyMod.Alt | i.KeyCode.KeyO,
								weight: u.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(S, I) {
						return p(
							I,
							m.localize(921, null),
							{
								include: a.$GAb.SourceOrganizeImports,
								includeSourceActions: !0,
							},
							a.CodeActionAutoApply.IfSingle,
							a.CodeActionTriggerSource.OrganizeImports,
						);
					}
				}
				e.$GBb = l;
				class y extends E.$itb {
					constructor() {
						super({
							id: d.$SAb,
							label: m.localize(922, null),
							alias: "Fix All",
							precondition: r.$Kj.and(
								C.EditorContextKeys.writable,
								n(a.$GAb.SourceFixAll),
							),
						});
					}
					run(S, I) {
						return p(
							I,
							m.localize(923, null),
							{ include: a.$GAb.SourceFixAll, includeSourceActions: !0 },
							a.CodeActionAutoApply.IfSingle,
							a.CodeActionTriggerSource.FixAll,
						);
					}
				}
				e.$HBb = y;
				class $ extends E.$itb {
					constructor() {
						super({
							id: d.$NAb,
							label: m.localize(924, null),
							alias: "Auto Fix...",
							precondition: r.$Kj.and(
								C.EditorContextKeys.writable,
								n(a.$GAb.QuickFix),
							),
							kbOpts: {
								kbExpr: C.EditorContextKeys.textInputFocus,
								primary: i.KeyMod.Alt | i.KeyMod.Shift | i.KeyCode.Period,
								mac: {
									primary: i.KeyMod.CtrlCmd | i.KeyMod.Alt | i.KeyCode.Period,
								},
								weight: u.KeybindingWeight.EditorContrib,
							},
						});
					}
					run(S, I) {
						return p(
							I,
							m.localize(925, null),
							{ include: a.$GAb.QuickFix, onlyIncludePreferredActions: !0 },
							a.CodeActionAutoApply.IfSingle,
							a.CodeActionTriggerSource.AutoFix,
						);
					}
				}
				e.$IBb = $;
			},
		),
		define(
			de[2908],
			he([1, 0, 46, 602, 2907, 500, 1685, 4, 81, 30]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(d = mt(d)),
					(0, t.$qtb)(
						E.$BBb.ID,
						E.$BBb,
						t.EditorContributionInstantiation.Eventually,
					),
					(0, t.$qtb)(
						C.$wBb.ID,
						C.$wBb,
						t.EditorContributionInstantiation.Lazy,
					),
					(0, t.$ntb)(w.$CBb),
					(0, t.$ntb)(w.$EBb),
					(0, t.$ntb)(w.$FBb),
					(0, t.$ntb)(w.$GBb),
					(0, t.$ntb)(w.$IBb),
					(0, t.$ntb)(w.$HBb),
					(0, t.$mtb)(new w.$DBb()),
					r.$Io
						.as(m.$No.Configuration)
						.registerConfiguration({
							...i.$DAb,
							properties: {
								"editor.codeActionWidget.showHeaders": {
									type: "boolean",
									scope: m.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									description: d.localize(926, null),
									default: !0,
								},
							},
						}),
					r.$Io
						.as(m.$No.Configuration)
						.registerConfiguration({
							...i.$DAb,
							properties: {
								"editor.codeActionWidget.includeNearbyQuickFixes": {
									type: "boolean",
									scope: m.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									description: d.localize(927, null),
									default: !0,
								},
							},
						}),
					r.$Io
						.as(m.$No.Configuration)
						.registerConfiguration({
							...i.$DAb,
							properties: {
								"editor.codeActions.triggerOnFocusChange": {
									type: "boolean",
									scope: m.ConfigurationScope.LANGUAGE_OVERRIDABLE,
									markdownDescription: d.localize(
										928,
										null,
										"`#editor.codeActionsOnSave#`",
										"`#files.autoSave#`",
										"`afterDelay`",
										"`always`",
									),
									default: !1,
								},
							},
						});
			},
		),
		define(
			de[2909],
			he([1, 0, 7, 182, 210, 56, 17, 122, 2292]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$OBb = e.$NBb = void 0),
					(t = mt(t));
				class m {
					constructor(n, g, p) {
						(this.afterColumn = w.Constants.MAX_SAFE_SMALL_INTEGER),
							(this.afterLineNumber = n),
							(this.heightInPx = g),
							(this.b = p),
							(this.suppressMouseDown = !0),
							(this.domNode = document.createElement("div"));
					}
					onComputedHeight(n) {
						this.a === void 0
							? (this.a = n)
							: this.a !== n && ((this.a = n), this.b());
					}
					isVisible() {
						return (
							this.a !== 0 &&
							this.domNode.hasAttribute("monaco-visible-view-zone")
						);
					}
				}
				class r {
					static {
						this.a = 0;
					}
					constructor(n, g) {
						(this.allowEditorOverflow = !1),
							(this.suppressMouseDown = !0),
							(this.e = new Map()),
							(this.g = !0),
							(this.d = n),
							(this.b = `codelens.widget-${r.a++}`),
							this.updatePosition(g),
							(this.c = document.createElement("span")),
							(this.c.className = "codelens-decoration");
					}
					withCommands(n, g) {
						this.e.clear();
						const p = [];
						let o = !1;
						for (let f = 0; f < n.length; f++) {
							const b = n[f];
							if (b && ((o = !0), b.command)) {
								const s = (0, i.$Sib)(b.command.title.trim());
								if (b.command.id) {
									const l = `c${r.a++}`;
									p.push(
										t.$(
											"a",
											{ id: l, title: b.command.tooltip, role: "button" },
											...s,
										),
									),
										this.e.set(l, b.command);
								} else p.push(t.$("span", { title: b.command.tooltip }, ...s));
								f + 1 < n.length && p.push(t.$("span", void 0, "\xA0|\xA0"));
							}
						}
						o
							? (t.$hhb(this.c, ...p),
								this.g && g && this.c.classList.add("fadein"),
								(this.g = !1))
							: t.$hhb(this.c, t.$("span", void 0, "no commands"));
					}
					getCommand(n) {
						return n.parentElement === this.c ? this.e.get(n.id) : void 0;
					}
					getId() {
						return this.b;
					}
					getDomNode() {
						return this.c;
					}
					updatePosition(n) {
						const g = this.d.getModel().getLineFirstNonWhitespaceColumn(n);
						this.f = {
							position: { lineNumber: n, column: g },
							preference: [E.ContentWidgetPositionPreference.ABOVE],
						};
					}
					getPosition() {
						return this.f || null;
					}
				}
				class u {
					constructor() {
						(this.a = []), (this.b = []), (this.c = []);
					}
					addDecoration(n, g) {
						this.b.push(n), this.c.push(g);
					}
					removeDecoration(n) {
						this.a.push(n);
					}
					commit(n) {
						const g = n.deltaDecorations(this.a, this.b);
						for (let p = 0, o = g.length; p < o; p++) this.c[p](g[p]);
					}
				}
				e.$NBb = u;
				const a = d.$eY.register({
					collapseOnReplaceEdit: !0,
					description: "codelens",
				});
				class h {
					constructor(n, g, p, o, f, b) {
						(this.g = !1), (this.a = g), (this.f = n), (this.e = []);
						let s;
						const l = [];
						this.f.forEach((y, $) => {
							y.symbol.command && l.push(y.symbol),
								p.addDecoration(
									{ range: y.symbol.range, options: a },
									(v) => (this.e[$] = v),
								),
								s
									? (s = C.$iL.plusRange(s, y.symbol.range))
									: (s = C.$iL.lift(y.symbol.range));
						}),
							(this.b = new m(s.startLineNumber - 1, f, b)),
							(this.c = o.addZone(this.b)),
							l.length > 0 && (this.h(), this.d.withCommands(l, !1));
					}
					h() {
						this.d
							? this.a.layoutContentWidget(this.d)
							: ((this.d = new r(this.a, this.b.afterLineNumber + 1)),
								this.a.addContentWidget(this.d));
					}
					dispose(n, g) {
						this.e.forEach(n.removeDecoration, n),
							(this.e = []),
							g?.removeZone(this.c),
							this.d && (this.a.removeContentWidget(this.d), (this.d = void 0)),
							(this.g = !0);
					}
					isDisposed() {
						return this.g;
					}
					isValid() {
						return this.e.some((n, g) => {
							const p = this.a.getModel().getDecorationRange(n),
								o = this.f[g].symbol;
							return !!(p && C.$iL.isEmpty(o.range) === p.isEmpty());
						});
					}
					updateCodeLensSymbols(n, g) {
						this.e.forEach(g.removeDecoration, g),
							(this.e = []),
							(this.f = n),
							this.f.forEach((p, o) => {
								g.addDecoration(
									{ range: p.symbol.range, options: a },
									(f) => (this.e[o] = f),
								);
							});
					}
					updateHeight(n, g) {
						(this.b.heightInPx = n),
							g.layoutZone(this.c),
							this.d && this.a.layoutContentWidget(this.d);
					}
					computeIfNecessary(n) {
						if (!this.b.isVisible()) return null;
						for (let g = 0; g < this.e.length; g++) {
							const p = n.getDecorationRange(this.e[g]);
							p && (this.f[g].symbol.range = p);
						}
						return this.f;
					}
					updateCommands(n) {
						this.h(), this.d.withCommands(n, !0);
						for (let g = 0; g < this.f.length; g++) {
							const p = n[g];
							if (p) {
								const { symbol: o } = this.f[g];
								o.command = p.command || o.command;
							}
						}
					}
					getCommand(n) {
						return this.d?.getCommand(n);
					}
					getLineNumber() {
						const n = this.a.getModel().getDecorationRange(this.e[0]);
						return n ? n.startLineNumber : -1;
					}
					update(n) {
						if (this.isValid()) {
							const g = this.a.getModel().getDecorationRange(this.e[0]);
							g &&
								((this.b.afterLineNumber = g.startLineNumber - 1),
								n.layoutZone(this.c),
								this.d &&
									(this.d.updatePosition(g.startLineNumber),
									this.a.layoutContentWidget(this.d)));
						}
					}
					getItems() {
						return this.f;
					}
				}
				e.$OBb = h;
			},
		),
		define(
			de[1686],
			he([
				1, 0, 15, 29, 3, 491, 56, 46, 38, 71, 1601, 2892, 2909, 4, 31, 40, 63,
				391, 69,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$RBb = void 0);
				let b = class {
					static {
						this.ID = "css.editor.codeLens";
					}
					constructor(l, y, $, v, S, I) {
						(this.n = l),
							(this.o = y),
							(this.p = v),
							(this.q = S),
							(this.r = I),
							(this.a = new w.$Zc()),
							(this.b = new w.$Zc()),
							(this.c = []),
							(this.j = new w.$Zc()),
							(this.d = $.for(y.codeLensProvider, "CodeLensProvide", {
								min: 250,
							})),
							(this.f = $.for(y.codeLensProvider, "CodeLensResolve", {
								min: 250,
								salt: "resolve",
							})),
							(this.g = new t.$Yh(() => this.z(), this.f.default())),
							this.a.add(this.n.onDidChangeModel(() => this.v())),
							this.a.add(this.n.onDidChangeModelLanguage(() => this.v())),
							this.a.add(
								this.n.onDidChangeConfiguration((T) => {
									(T.hasChanged(m.EditorOption.fontInfo) ||
										T.hasChanged(m.EditorOption.codeLensFontSize) ||
										T.hasChanged(m.EditorOption.codeLensFontFamily)) &&
										this.t(),
										T.hasChanged(m.EditorOption.codeLens) && this.v();
								}),
							),
							this.a.add(y.codeLensProvider.onDidChange(this.v, this)),
							this.v(),
							this.t();
					}
					dispose() {
						this.u(), this.a.dispose(), this.j.dispose(), this.k?.dispose();
					}
					s() {
						const l = Math.max(
							1.3,
							this.n.getOption(m.EditorOption.lineHeight) /
								this.n.getOption(m.EditorOption.fontSize),
						);
						let y = this.n.getOption(m.EditorOption.codeLensFontSize);
						return (
							(!y || y < 5) &&
								(y = (this.n.getOption(m.EditorOption.fontSize) * 0.9) | 0),
							{ fontSize: y, codeLensHeight: (y * l) | 0 }
						);
					}
					t() {
						const { codeLensHeight: l, fontSize: y } = this.s(),
							$ = this.n.getOption(m.EditorOption.codeLensFontFamily),
							v = this.n.getOption(m.EditorOption.fontInfo),
							{ style: S } = this.n.getContainerDomNode();
						S.setProperty("--vscode-editorCodeLens-lineHeight", `${l}px`),
							S.setProperty("--vscode-editorCodeLens-fontSize", `${y}px`),
							S.setProperty(
								"--vscode-editorCodeLens-fontFeatureSettings",
								v.fontFeatureSettings,
							),
							$ &&
								(S.setProperty("--vscode-editorCodeLens-fontFamily", $),
								S.setProperty(
									"--vscode-editorCodeLens-fontFamilyDefault",
									m.EDITOR_FONT_DEFAULTS.fontFamily,
								)),
							this.n.changeViewZones((I) => {
								for (const T of this.c) T.updateHeight(l, I);
							});
					}
					u() {
						this.h?.cancel(),
							(this.h = void 0),
							this.m?.cancel(),
							(this.m = void 0),
							this.b.clear(),
							this.j.clear(),
							this.k?.dispose();
					}
					v() {
						this.u();
						const l = this.n.getModel();
						if (
							!l ||
							!this.n.getOption(m.EditorOption.codeLens) ||
							l.isTooLargeForTokenization()
						)
							return;
						const y = this.r.get(l);
						if ((y && this.x(y), !this.o.codeLensProvider.has(l))) {
							y &&
								(0, t.$Oh)(
									() => {
										const v = this.r.get(l);
										y === v && (this.r.delete(l), this.v());
									},
									30 * 1e3,
									this.b,
								);
							return;
						}
						for (const v of this.o.codeLensProvider.all(l))
							if (typeof v.onDidChange == "function") {
								const S = v.onDidChange(() => $.schedule());
								this.b.add(S);
							}
						const $ = new t.$Yh(() => {
							const v = Date.now();
							this.h?.cancel(),
								(this.h = (0, t.$zh)((S) =>
									(0, u.$KBb)(this.o.codeLensProvider, l, S),
								)),
								this.h.then((S) => {
									this.k && this.j.add(this.k), (this.k = S), this.r.put(l, S);
									const I = this.d.update(l, Date.now() - v);
									($.delay = I), this.x(S), this.y();
								}, i.$4);
						}, this.d.get(l));
						this.b.add($),
							this.b.add((0, w.$Yc)(() => this.g.cancel())),
							this.b.add(
								this.n.onDidChangeModelContent(() => {
									this.n.changeDecorations((v) => {
										this.n.changeViewZones((S) => {
											const I = [];
											let T = -1;
											this.c.forEach((k) => {
												!k.isValid() || T === k.getLineNumber()
													? I.push(k)
													: (k.update(S), (T = k.getLineNumber()));
											});
											const P = new h.$NBb();
											I.forEach((k) => {
												k.dispose(P, S), this.c.splice(this.c.indexOf(k), 1);
											}),
												P.commit(v);
										});
									}),
										$.schedule(),
										this.g.cancel(),
										this.m?.cancel(),
										(this.m = void 0);
								}),
							),
							this.b.add(
								this.n.onDidFocusEditorText(() => {
									$.schedule();
								}),
							),
							this.b.add(
								this.n.onDidBlurEditorText(() => {
									$.cancel();
								}),
							),
							this.b.add(
								this.n.onDidScrollChange((v) => {
									v.scrollTopChanged && this.c.length > 0 && this.y();
								}),
							),
							this.b.add(
								this.n.onDidLayoutChange(() => {
									this.y();
								}),
							),
							this.b.add(
								(0, w.$Yc)(() => {
									if (this.n.getModel()) {
										const v = E.$uwb.capture(this.n);
										this.n.changeDecorations((S) => {
											this.n.changeViewZones((I) => {
												this.w(S, I);
											});
										}),
											v.restore(this.n);
									} else this.w(void 0, void 0);
								}),
							),
							this.b.add(
								this.n.onMouseDown((v) => {
									if (v.target.type !== C.MouseTargetType.CONTENT_WIDGET)
										return;
									let S = v.target.element;
									if (
										(S?.tagName === "SPAN" && (S = S.parentElement),
										S?.tagName === "A")
									)
										for (const I of this.c) {
											const T = I.getCommand(S);
											if (T) {
												this.p
													.executeCommand(T.id, ...(T.arguments || []))
													.catch((P) => this.q.error(P));
												break;
											}
										}
								}),
							),
							$.schedule();
					}
					w(l, y) {
						const $ = new h.$NBb();
						for (const v of this.c) v.dispose($, y);
						l && $.commit(l), (this.c.length = 0);
					}
					x(l) {
						if (!this.n.hasModel()) return;
						const y = this.n.getModel().getLineCount(),
							$ = [];
						let v;
						for (const T of l.lenses) {
							const P = T.symbol.range.startLineNumber;
							P < 1 ||
								P > y ||
								(v && v[v.length - 1].symbol.range.startLineNumber === P
									? v.push(T)
									: ((v = [T]), $.push(v)));
						}
						if (!$.length && !this.c.length) return;
						const S = E.$uwb.capture(this.n),
							I = this.s();
						this.n.changeDecorations((T) => {
							this.n.changeViewZones((P) => {
								const k = new h.$NBb();
								let L = 0,
									D = 0;
								for (; D < $.length && L < this.c.length; ) {
									const M = $[D][0].symbol.range.startLineNumber,
										N = this.c[L].getLineNumber();
									N < M
										? (this.c[L].dispose(k, P), this.c.splice(L, 1))
										: N === M
											? (this.c[L].updateCodeLensSymbols($[D], k), D++, L++)
											: (this.c.splice(
													L,
													0,
													new h.$OBb($[D], this.n, k, P, I.codeLensHeight, () =>
														this.y(),
													),
												),
												L++,
												D++);
								}
								for (; L < this.c.length; )
									this.c[L].dispose(k, P), this.c.splice(L, 1);
								for (; D < $.length; )
									this.c.push(
										new h.$OBb($[D], this.n, k, P, I.codeLensHeight, () =>
											this.y(),
										),
									),
										D++;
								k.commit(T);
							});
						}),
							S.restore(this.n);
					}
					y() {
						this.n.getModel() && this.g.schedule();
					}
					z() {
						this.m?.cancel(), (this.m = void 0);
						const l = this.n.getModel();
						if (!l) return;
						const y = [],
							$ = [];
						if (
							(this.c.forEach((I) => {
								const T = I.computeIfNecessary(l);
								T && (y.push(T), $.push(I));
							}),
							y.length === 0)
						)
							return;
						const v = Date.now(),
							S = (0, t.$zh)((I) => {
								const T = y.map((P, k) => {
									const L = new Array(P.length),
										D = P.map((M, N) =>
											!M.symbol.command &&
											typeof M.provider.resolveCodeLens == "function"
												? Promise.resolve(
														M.provider.resolveCodeLens(l, M.symbol, I),
													).then((A) => {
														L[N] = A;
													}, i.$5)
												: ((L[N] = M.symbol), Promise.resolve(void 0)),
										);
									return Promise.all(D).then(() => {
										!I.isCancellationRequested &&
											!$[k].isDisposed() &&
											$[k].updateCommands(L);
									});
								});
								return Promise.all(T);
							});
						(this.m = S),
							this.m.then(
								() => {
									const I = this.f.update(l, Date.now() - v);
									(this.g.delay = I),
										this.k && this.r.put(l, this.k),
										this.j.clear(),
										S === this.m && (this.m = void 0);
								},
								(I) => {
									(0, i.$4)(I), S === this.m && (this.m = void 0);
								},
							);
					}
					async getModel() {
						return (
							await this.h, await this.m, this.k?.isDisposed ? void 0 : this.k
						);
					}
				};
				(e.$RBb = b),
					(e.$RBb = b =
						Ne(
							[
								j(1, f.$k3),
								j(2, o.$PBb),
								j(3, n.$ek),
								j(4, g.$4N),
								j(5, a.$LBb),
							],
							b,
						)),
					(0, d.$qtb)(
						b.ID,
						b,
						d.EditorContributionInstantiation.AfterFirstRender,
					),
					(0, d.$ntb)(
						class extends d.$itb {
							constructor() {
								super({
									id: "codelens.showLensesInCurrentLine",
									precondition: r.EditorContextKeys.hasCodeLensProvider,
									label: (0, c.localize)(949, null),
									alias: "Show CodeLens Commands For Current Line",
								});
							}
							async run(l, y) {
								if (!y.hasModel()) return;
								const $ = l.get(p.$DJ),
									v = l.get(n.$ek),
									S = l.get(g.$4N),
									I = y.getSelection().positionLineNumber,
									T = y.getContribution(b.ID);
								if (!T) return;
								const P = await T.getModel();
								if (!P) return;
								const k = [];
								for (const M of P.lenses)
									M.symbol.command &&
										M.symbol.range.startLineNumber === I &&
										k.push({
											label: M.symbol.command.title,
											command: M.symbol.command,
										});
								if (k.length === 0) return;
								const L = await $.pick(k, {
									canPickMany: !1,
									placeHolder: (0, c.localize)(950, null),
								});
								if (!L) return;
								let D = L.command;
								if (P.isDisposed) {
									const N = (await T.getModel())?.lenses.find(
										(A) =>
											A.symbol.range.startLineNumber === I &&
											A.symbol.command?.title === D.title,
									);
									if (!N || !N.symbol.command) return;
									D = N.symbol.command;
								}
								try {
									await v.executeCommand(D.id, ...(D.arguments || []));
								} catch (M) {
									S.error(M);
								}
							}
						},
					);
			},
		),
		define(
			de[785],
			he([
				1, 0, 15, 97, 29, 6, 3, 162, 37, 777, 46, 38, 17, 122, 391, 69, 1603,
				10,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				var f;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ZBb = e.$YBb = e.$XBb = void 0),
					(e.$XBb = Object.create({}));
				let b = class extends C.$1c {
					static {
						f = this;
					}
					static {
						this.ID = "editor.contrib.colorDetector";
					}
					static {
						this.RECOMPUTE_TIME = 1e3;
					}
					constructor(y, $, v, S) {
						super(),
							(this.z = y),
							(this.C = $),
							(this.F = v),
							(this.f = this.D(new C.$Zc())),
							(this.n = []),
							(this.q = new Map()),
							(this.s = this.z.createDecorationsCollection()),
							(this.w = new r.$oub(this.z)),
							(this.y = new s()),
							(this.L = this.D(new C.$Zc())),
							(this.m = S.for(v.colorProvider, "Document Colors", {
								min: f.RECOMPUTE_TIME,
							})),
							this.D(
								y.onDidChangeModel(() => {
									(this.t = this.isEnabled()), this.G();
								}),
							),
							this.D(y.onDidChangeModelLanguage(() => this.G())),
							this.D(v.colorProvider.onDidChange(() => this.G())),
							this.D(
								y.onDidChangeConfiguration((I) => {
									const T = this.t;
									(this.t = this.isEnabled()),
										(this.u = this.z.getOption(
											a.EditorOption.defaultColorDecorators,
										));
									const P =
											T !== this.t ||
											I.hasChanged(a.EditorOption.colorDecoratorsLimit),
										k = I.hasChanged(a.EditorOption.defaultColorDecorators);
									(P || k) && (this.t ? this.G() : this.N());
								}),
							),
							(this.j = null),
							(this.h = null),
							(this.t = this.isEnabled()),
							(this.u = this.z.getOption(
								a.EditorOption.defaultColorDecorators,
							)),
							this.G();
					}
					isEnabled() {
						const y = this.z.getModel();
						if (!y) return !1;
						const $ = y.getLanguageId(),
							v = this.C.getValue($);
						if (v && typeof v == "object") {
							const S = v.colorDecorators;
							if (S && S.enable !== void 0 && !S.enable) return S.enable;
						}
						return this.z.getOption(a.EditorOption.colorDecorators);
					}
					get limitReporter() {
						return this.y;
					}
					static get(y) {
						return y.getContribution(this.ID);
					}
					dispose() {
						this.I(), this.N(), super.dispose();
					}
					G() {
						if ((this.I(), !this.t)) return;
						const y = this.z.getModel();
						!y ||
							!this.F.colorProvider.has(y) ||
							(this.f.add(
								this.z.onDidChangeModelContent(() => {
									this.j ||
										((this.j = new t.$Wh()),
										this.j.cancelAndSet(() => {
											(this.j = null), this.H();
										}, this.m.get(y)));
								}),
							),
							this.H());
					}
					async H() {
						this.h = (0, t.$zh)(async (y) => {
							const $ = this.z.getModel();
							if (!$) return [];
							const v = new d.$le(!1),
								S = await (0, p.$VBb)(this.F.colorProvider, $, y, this.u);
							return this.m.update($, v.elapsed()), S;
						});
						try {
							const y = await this.h;
							this.J(y), this.M(y), (this.h = null);
						} catch (y) {
							(0, w.$4)(y);
						}
					}
					I() {
						this.j && (this.j.cancel(), (this.j = null)),
							this.h && (this.h.cancel(), (this.h = null)),
							this.f.clear();
					}
					J(y) {
						const $ = y.map((v) => ({
							range: {
								startLineNumber: v.colorInfo.range.startLineNumber,
								startColumn: v.colorInfo.range.startColumn,
								endLineNumber: v.colorInfo.range.endLineNumber,
								endColumn: v.colorInfo.range.endColumn,
							},
							options: c.$eY.EMPTY,
						}));
						this.z.changeDecorations((v) => {
							(this.n = v.deltaDecorations(this.n, $)),
								(this.q = new Map()),
								this.n.forEach((S, I) => this.q.set(S, y[I]));
						});
					}
					M(y) {
						this.L.clear();
						const $ = [],
							v = this.z.getOption(a.EditorOption.colorDecoratorsLimit);
						for (let I = 0; I < y.length && $.length < v; I++) {
							const {
									red: T,
									green: P,
									blue: k,
									alpha: L,
								} = y[I].colorInfo.color,
								D = new i.$RL(
									Math.round(T * 255),
									Math.round(P * 255),
									Math.round(k * 255),
									L,
								),
								M = `rgba(${D.r}, ${D.g}, ${D.b}, ${D.a})`,
								N = this.L.add(
									this.w.createClassNameRef({ backgroundColor: M }),
								);
							$.push({
								range: {
									startLineNumber: y[I].colorInfo.range.startLineNumber,
									startColumn: y[I].colorInfo.range.startColumn,
									endLineNumber: y[I].colorInfo.range.endLineNumber,
									endColumn: y[I].colorInfo.range.endColumn,
								},
								options: {
									description: "colorDetector",
									before: {
										content: m.$ig,
										inlineClassName: `${N.className} colorpicker-color-decoration`,
										inlineClassNameAffectsLetterSpacing: !0,
										attachedData: e.$XBb,
									},
								},
							});
						}
						const S = v < y.length ? v : !1;
						this.y.update(y.length, S), this.s.set($);
					}
					N() {
						this.z.removeDecorations(this.n),
							(this.n = []),
							this.s.clear(),
							this.L.clear();
					}
					getColorData(y) {
						const $ = this.z.getModel();
						if (!$) return null;
						const v = $.getDecorationsInRange(h.$iL.fromPositions(y, y)).filter(
							(S) => this.q.has(S.id),
						);
						return v.length === 0 ? null : this.q.get(v[0].id);
					}
					isColorDecoration(y) {
						return this.s.has(y);
					}
				};
				(e.$YBb = b),
					(e.$YBb = b = f = Ne([j(1, o.$gj), j(2, g.$k3), j(3, n.$PBb)], b));
				class s {
					constructor() {
						(this.f = new E.$re()),
							(this.onDidChange = this.f.event),
							(this.h = 0),
							(this.j = !1);
					}
					get computed() {
						return this.h;
					}
					get limited() {
						return this.j;
					}
					update(y, $) {
						(y !== this.h || $ !== this.j) &&
							((this.h = y), (this.j = $), this.f.fire());
					}
				}
				(e.$ZBb = s),
					(0, u.$qtb)(
						b.ID,
						b,
						u.EditorContributionInstantiation.AfterFirstRender,
					);
			},
		),
		define(
			de[1218],
			he([
				1, 0, 15, 33, 97, 3, 38, 17, 64, 1603, 785, 2581, 2836, 368, 35, 7, 4,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$aCb = e.$_Bb = e.$$Bb = e.$0Bb = void 0),
					(p = mt(p));
				class o {
					constructor(I, T, P, k) {
						(this.owner = I),
							(this.range = T),
							(this.model = P),
							(this.provider = k),
							(this.forceShowAtRange = !0);
					}
					isValidForHoverAnchor(I) {
						return (
							I.type === c.HoverAnchorType.Range &&
							this.range.startColumn <= I.range.startColumn &&
							this.range.endColumn >= I.range.endColumn
						);
					}
				}
				e.$0Bb = o;
				let f = class {
					constructor(I, T) {
						(this.f = I), (this.h = T), (this.hoverOrdinal = 2);
					}
					computeSync(I, T) {
						return [];
					}
					computeAsync(I, T, P) {
						return t.$ai.fromPromise(this.i(I, T, P));
					}
					async i(I, T, P) {
						if (!this.f.hasModel()) return [];
						const k = u.$YBb.get(this.f);
						if (!k) return [];
						for (const L of T) {
							if (!k.isColorDecoration(L)) continue;
							const D = k.getColorData(L.range.getStartPosition());
							if (D)
								return [
									await l(this, this.f.getModel(), D.colorInfo, D.provider),
								];
						}
						return [];
					}
					renderHoverParts(I, T) {
						const P = y(this, this.f, this.h, T, I);
						if (!P) return new c.$4Bb([]);
						this.c = P.colorPicker;
						const k = {
							hoverPart: P.hoverPart,
							hoverElement: this.c.domNode,
							dispose() {
								P.disposables.dispose();
							},
						};
						return new c.$4Bb([k]);
					}
					getAccessibleContent(I) {
						return p.localize(951, null);
					}
					handleResize() {
						this.c?.layout();
					}
					isColorPickerVisible() {
						return !!this.c;
					}
				};
				(e.$$Bb = f), (e.$$Bb = f = Ne([j(1, n.$iP)], f));
				class b {
					constructor(I, T, P, k) {
						(this.owner = I),
							(this.range = T),
							(this.model = P),
							(this.provider = k);
					}
				}
				e.$_Bb = b;
				let s = class {
					constructor(I, T) {
						(this.f = I),
							(this.h = T),
							(this.hoverOrdinal = 2),
							(this.c = null);
					}
					async createColorHover(I, T, P) {
						if (!this.f.hasModel() || !u.$YBb.get(this.f)) return null;
						const L = await (0, r.$VBb)(
							P,
							this.f.getModel(),
							i.CancellationToken.None,
						);
						let D = null,
							M = null;
						for (const O of L) {
							const B = O.colorInfo;
							d.$iL.containsRange(B.range, I.range) &&
								((D = B), (M = O.provider));
						}
						const N = D ?? I,
							A = M ?? T,
							R = !!D;
						return {
							colorHover: await l(this, this.f.getModel(), N, A),
							foundInEditor: R,
						};
					}
					async updateEditorModel(I) {
						if (!this.f.hasModel()) return;
						const T = I.model;
						let P = new d.$iL(
							I.range.startLineNumber,
							I.range.startColumn,
							I.range.endLineNumber,
							I.range.endColumn,
						);
						this.c &&
							(await v(this.f.getModel(), T, this.c, P, I),
							(P = $(this.f, P, T)));
					}
					renderHoverParts(I, T) {
						return y(this, this.f, this.h, T, I);
					}
					set color(I) {
						this.c = I;
					}
					get color() {
						return this.c;
					}
				};
				(e.$aCb = s), (e.$aCb = s = Ne([j(1, n.$iP)], s));
				async function l(S, I, T, P) {
					const k = I.getValueInRange(T.range),
						{ red: L, green: D, blue: M, alpha: N } = T.color,
						A = new w.$RL(
							Math.round(L * 255),
							Math.round(D * 255),
							Math.round(M * 255),
							N,
						),
						R = new w.$UL(A),
						O = await (0, r.$WBb)(I, T, P, i.CancellationToken.None),
						B = new a.$1Bb(R, [], 0);
					return (
						(B.colorPresentations = O || []),
						B.guessColorPresentation(R, k),
						S instanceof f
							? new o(S, d.$iL.lift(T.range), B, P)
							: new b(S, d.$iL.lift(T.range), B, P)
					);
				}
				function y(S, I, T, P, k) {
					if (P.length === 0 || !I.hasModel()) return;
					if (k.setMinimumDimensions) {
						const B = I.getOption(C.EditorOption.lineHeight) + 8;
						k.setMinimumDimensions(new g.$pgb(302, B));
					}
					const L = new E.$Zc(),
						D = P[0],
						M = I.getModel(),
						N = D.model,
						A = L.add(
							new h.$9Bb(
								k.fragment,
								N,
								I.getOption(C.EditorOption.pixelRatio),
								T,
								S instanceof s,
							),
						);
					let R = !1,
						O = new d.$iL(
							D.range.startLineNumber,
							D.range.startColumn,
							D.range.endLineNumber,
							D.range.endColumn,
						);
					if (S instanceof s) {
						const B = D.model.color;
						(S.color = B),
							v(M, N, B, O, D),
							L.add(
								N.onColorFlushed((U) => {
									S.color = U;
								}),
							);
					} else
						L.add(
							N.onColorFlushed(async (B) => {
								await v(M, N, B, O, D), (R = !0), (O = $(I, O, N));
							}),
						);
					return (
						L.add(
							N.onDidChangeColor((B) => {
								v(M, N, B, O, D);
							}),
						),
						L.add(
							I.onDidChangeModelContent((B) => {
								R ? (R = !1) : (k.hide(), I.focus());
							}),
						),
						{ hoverPart: D, colorPicker: A, disposables: L }
					);
				}
				function $(S, I, T) {
					const P = [],
						k = T.presentation.textEdit ?? {
							range: I,
							text: T.presentation.label,
							forceMoveMarkers: !1,
						};
					P.push(k),
						T.presentation.additionalTextEdits &&
							P.push(...T.presentation.additionalTextEdits);
					const L = d.$iL.lift(k.range),
						D = S.getModel()._setTrackedRange(
							null,
							L,
							m.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter,
						);
					return (
						S.executeEdits("colorpicker", P),
						S.pushUndoStop(),
						S.getModel()._getTrackedRange(D) ?? L
					);
				}
				async function v(S, I, T, P, k) {
					const L = await (0, r.$WBb)(
						S,
						{
							range: P,
							color: {
								red: T.rgba.r / 255,
								green: T.rgba.g / 255,
								blue: T.rgba.b / 255,
								alpha: T.rgba.a,
							},
						},
						k.provider,
						i.CancellationToken.None,
					);
					I.colorPresentations = L || [];
				}
			},
		),
		define(
			de[2910],
			he([
				1, 0, 3, 56, 64, 1218, 5, 1616, 39, 6, 38, 69, 46, 71, 8, 1599, 7, 200,
				1136,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				var f, b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zhc = e.$yhc = void 0),
					(p = mt(p));
				let s = class extends t.$1c {
					static {
						f = this;
					}
					static {
						this.ID = "editor.contrib.standaloneColorPickerController";
					}
					constructor(I, T, P) {
						super(),
							(this.f = I),
							(this.g = P),
							(this.a = null),
							(this.b =
								c.EditorContextKeys.standaloneColorPickerVisible.bindTo(T)),
							(this.c =
								c.EditorContextKeys.standaloneColorPickerFocused.bindTo(T));
					}
					showOrFocus() {
						this.f.hasModel() &&
							(this.b.get()
								? this.c.get() || this.a?.focus()
								: (this.a = this.g.createInstance($, this.f, this.b, this.c)));
					}
					hide() {
						this.c.set(!1), this.b.set(!1), this.a?.hide(), this.f.focus();
					}
					insertColor() {
						this.a?.updateEditor(), this.hide();
					}
					static get(I) {
						return I.getContribution(f.ID);
					}
				};
				(e.$yhc = s),
					(e.$yhc = s = f = Ne([j(1, n.$6j), j(2, C.$Li)], s)),
					(0, h.$qtb)(
						s.ID,
						s,
						h.EditorContributionInstantiation.AfterFirstRender,
					);
				const l = 8,
					y = 22;
				let $ = class extends t.$1c {
					static {
						b = this;
					}
					static {
						this.ID = "editor.contrib.standaloneColorPickerWidget";
					}
					constructor(I, T, P, k, L, D, M) {
						super(),
							(this.j = I),
							(this.m = T),
							(this.n = P),
							(this.q = L),
							(this.r = D),
							(this.s = M),
							(this.allowEditorOverflow = !0),
							(this.a = void 0),
							(this.c = document.createElement("div")),
							(this.f = null),
							(this.g = !1),
							(this.h = this.D(new r.$re())),
							(this.onResult = this.h.event),
							this.m.set(!0),
							(this.b = k.createInstance(E.$aCb, this.j)),
							(this.a = this.j
								._getViewModel()
								?.getPrimaryCursorState().modelState.position);
						const N = this.j.getSelection(),
							A = N
								? {
										startLineNumber: N.startLineNumber,
										startColumn: N.startColumn,
										endLineNumber: N.endLineNumber,
										endColumn: N.endColumn,
									}
								: {
										startLineNumber: 0,
										endLineNumber: 0,
										endColumn: 0,
										startColumn: 0,
									},
							R = this.D(p.$dhb(this.c));
						this.D(
							R.onDidBlur((O) => {
								this.hide();
							}),
						),
							this.D(
								R.onDidFocus((O) => {
									this.focus();
								}),
							),
							this.D(
								this.j.onDidChangeCursorPosition(() => {
									this.g ? (this.g = !1) : this.hide();
								}),
							),
							this.D(
								this.j.onMouseMove((O) => {
									const B = O.target.element?.classList;
									B &&
										B.contains("colorpicker-color-decoration") &&
										this.hide();
								}),
							),
							this.D(
								this.onResult((O) => {
									this.w(O.value, O.foundInEditor);
								}),
							),
							this.t(A),
							(this.c.style.zIndex = "50"),
							this.j.addContentWidget(this);
					}
					updateEditor() {
						this.f && this.b.updateEditorModel(this.f);
					}
					getId() {
						return b.ID;
					}
					getDomNode() {
						return this.c;
					}
					getPosition() {
						if (!this.a) return null;
						const I = this.j.getOption(u.EditorOption.hover).above;
						return {
							position: this.a,
							secondaryPosition: this.a,
							preference: I
								? [
										i.ContentWidgetPositionPreference.ABOVE,
										i.ContentWidgetPositionPreference.BELOW,
									]
								: [
										i.ContentWidgetPositionPreference.BELOW,
										i.ContentWidgetPositionPreference.ABOVE,
									],
							positionAffinity: w.PositionAffinity.None,
						};
					}
					hide() {
						this.dispose(),
							this.m.set(!1),
							this.n.set(!1),
							this.j.removeContentWidget(this),
							this.j.focus();
					}
					focus() {
						this.n.set(!0), this.c.focus();
					}
					async t(I) {
						const T = await this.u(I);
						T && this.h.fire(new v(T.result, T.foundInEditor));
					}
					async u(I) {
						if (!this.j.hasModel()) return null;
						const T = {
								range: I,
								color: { red: 0, green: 0, blue: 0, alpha: 1 },
							},
							P = await this.b.createColorHover(
								T,
								new g.$UBb(this.s),
								this.r.colorProvider,
							);
						return P
							? { result: P.colorHover, foundInEditor: P.foundInEditor }
							: null;
					}
					w(I, T) {
						const P = document.createDocumentFragment(),
							k = this.D(new d.$WDb(this.q)),
							L = {
								fragment: P,
								statusBar: k,
								onContentsChanged: () => {},
								hide: () => this.hide(),
							};
						this.f = I;
						const D = this.b.renderHoverParts(L, [I]);
						if (!D) return;
						this.D(D.disposables);
						const M = D.colorPicker;
						this.c.classList.add("standalone-colorpicker-body"),
							(this.c.style.maxHeight =
								Math.max(this.j.getLayoutInfo().height / 4, 250) + "px"),
							(this.c.style.maxWidth =
								Math.max(this.j.getLayoutInfo().width * 0.66, 500) + "px"),
							(this.c.tabIndex = 0),
							this.c.appendChild(P),
							M.layout();
						const N = M.body,
							A = N.saturationBox.domNode.clientWidth,
							R = N.domNode.clientWidth - A - y - l,
							O = M.body.enterButton;
						O?.onClicked(() => {
							this.updateEditor(), this.hide();
						});
						const B = M.header,
							U = B.pickedColorNode;
						U.style.width = A + l + "px";
						const z = B.originalColorNode;
						(z.style.width = R + "px"),
							M.header.closeButton?.onClicked(() => {
								this.hide();
							}),
							T &&
								(O && (O.button.textContent = "Replace"),
								(this.g = !0),
								this.j.setSelection(I.range)),
							this.j.layoutContentWidget(this);
					}
				};
				(e.$zhc = $),
					(e.$zhc =
						$ =
						b =
							Ne([j(3, C.$Li), j(4, m.$uZ), j(5, a.$k3), j(6, o.$Cxb)], $));
				class v {
					constructor(I, T) {
						(this.value = I), (this.foundInEditor = T);
					}
				}
			},
		),
		define(
			de[2911],
			he([1, 0, 46, 27, 4, 43, 2910, 71, 11, 1136]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ahc = void 0);
				class r extends t.$ktb {
					constructor() {
						super({
							id: "editor.action.showOrFocusStandaloneColorPicker",
							title: {
								...(0, w.localize2)(
									957,
									"Show or Focus Standalone Color Picker",
								),
								mnemonicTitle: (0, w.localize)(954, null),
							},
							precondition: void 0,
							menu: [{ id: m.$XX.CommandPalette }],
							metadata: {
								description: (0, w.localize2)(
									958,
									"Show or focus a standalone color picker which uses the default color provider. It displays hex/rgb/hsl colors.",
								),
							},
						});
					}
					runEditorCommand(c, n) {
						C.$yhc.get(n)?.showOrFocus();
					}
				}
				e.$Ahc = r;
				class u extends t.$itb {
					constructor() {
						super({
							id: "editor.action.hideColorPicker",
							label: (0, w.localize)(955, null),
							alias: "Hide the Color Picker",
							precondition:
								d.EditorContextKeys.standaloneColorPickerVisible.isEqualTo(!0),
							kbOpts: {
								primary: i.KeyCode.Escape,
								weight: E.KeybindingWeight.EditorContrib,
							},
							metadata: {
								description: (0, w.localize2)(
									959,
									"Hide the standalone color picker.",
								),
							},
						});
					}
					run(c, n) {
						C.$yhc.get(n)?.hide();
					}
				}
				class a extends t.$itb {
					constructor() {
						super({
							id: "editor.action.insertColorWithStandaloneColorPicker",
							label: (0, w.localize)(956, null),
							alias: "Insert Color with Standalone Color Picker",
							precondition:
								d.EditorContextKeys.standaloneColorPickerFocused.isEqualTo(!0),
							kbOpts: {
								primary: i.KeyCode.Enter,
								weight: E.KeybindingWeight.EditorContrib,
							},
							metadata: {
								description: (0, w.localize2)(
									960,
									"Insert hex/rgb/hsl colors with the focused standalone color picker.",
								),
							},
						});
					}
					run(c, n) {
						C.$yhc.get(n)?.insertColor();
					}
				}
				(0, t.$ntb)(u), (0, t.$ntb)(a), (0, m.$4X)(r);
			},
		),
		define(
			de[1687],
			he([1, 0, 27, 3, 12, 56, 46, 38, 248, 48, 17, 104, 98, 122, 2582, 2293]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Hhc = void 0);
				function g(o) {
					return w.$m ? o.altKey : o.ctrlKey;
				}
				class p extends i.$1c {
					static {
						this.ID = "editor.contrib.dragAndDrop";
					}
					static {
						this.TRIGGER_KEY_VALUE = w.$m ? t.KeyCode.Alt : t.KeyCode.Ctrl;
					}
					static get(f) {
						return f.getContribution(p.ID);
					}
					constructor(f) {
						super(),
							(this.a = f),
							(this.c = this.a.createDecorationsCollection()),
							this.D(this.a.onMouseDown((b) => this.n(b))),
							this.D(this.a.onMouseUp((b) => this.q(b))),
							this.D(this.a.onMouseDrag((b) => this.r(b))),
							this.D(this.a.onMouseDrop((b) => this.t(b))),
							this.D(this.a.onMouseDropCanceled(() => this.s())),
							this.D(this.a.onKeyDown((b) => this.j(b))),
							this.D(this.a.onKeyUp((b) => this.m(b))),
							this.D(this.a.onDidBlurEditorWidget(() => this.h())),
							this.D(this.a.onDidBlurEditorText(() => this.h())),
							(this.f = !1),
							(this.g = !1),
							(this.b = null);
					}
					h() {
						this.w(), (this.b = null), (this.f = !1), (this.g = !1);
					}
					j(f) {
						!this.a.getOption(d.EditorOption.dragAndDrop) ||
							this.a.getOption(d.EditorOption.columnSelection) ||
							(g(f) && (this.g = !0),
							this.f && g(f) && this.a.updateOptions({ mouseStyle: "copy" }));
					}
					m(f) {
						!this.a.getOption(d.EditorOption.dragAndDrop) ||
							this.a.getOption(d.EditorOption.columnSelection) ||
							(g(f) && (this.g = !1),
							this.f &&
								f.keyCode === p.TRIGGER_KEY_VALUE &&
								this.a.updateOptions({ mouseStyle: "default" }));
					}
					n(f) {
						this.f = !0;
					}
					q(f) {
						(this.f = !1), this.a.updateOptions({ mouseStyle: "text" });
					}
					r(f) {
						const b = f.target;
						if (this.b === null) {
							const l = (this.a.getSelections() || []).filter(
								(y) => b.position && y.containsPosition(b.position),
							);
							if (l.length === 1) this.b = l[0];
							else return;
						}
						g(f.event)
							? this.a.updateOptions({ mouseStyle: "copy" })
							: this.a.updateOptions({ mouseStyle: "default" }),
							b.position &&
								(this.b.containsPosition(b.position)
									? this.w()
									: this.showAt(b.position));
					}
					s() {
						this.a.updateOptions({ mouseStyle: "text" }),
							this.w(),
							(this.b = null),
							(this.f = !1);
					}
					t(f) {
						if (
							f.target &&
							(this.y(f.target) || this.z(f.target)) &&
							f.target.position
						) {
							const b = new r.$hL(
								f.target.position.lineNumber,
								f.target.position.column,
							);
							if (this.b === null) {
								let s = null;
								if (f.event.shiftKey) {
									const l = this.a.getSelection();
									if (l) {
										const {
											selectionStartLineNumber: y,
											selectionStartColumn: $,
										} = l;
										s = [new a.$kL(y, $, b.lineNumber, b.column)];
									}
								} else
									s = (this.a.getSelections() || []).map((l) =>
										l.containsPosition(b)
											? new a.$kL(
													b.lineNumber,
													b.column,
													b.lineNumber,
													b.column,
												)
											: l,
									);
								this.a.setSelections(
									s || [],
									"mouse",
									m.CursorChangeReason.Explicit,
								);
							} else
								(!this.b.containsPosition(b) ||
									((g(f.event) || this.g) &&
										(this.b.getEndPosition().equals(b) ||
											this.b.getStartPosition().equals(b)))) &&
									(this.a.pushUndoStop(),
									this.a.executeCommand(
										p.ID,
										new n.$Ghc(this.b, b, g(f.event) || this.g),
									),
									this.a.pushUndoStop());
						}
						this.a.updateOptions({ mouseStyle: "text" }),
							this.w(),
							(this.b = null),
							(this.f = !1);
					}
					static {
						this.u = c.$eY.register({
							description: "dnd-target",
							className: "dnd-target",
						});
					}
					showAt(f) {
						this.c.set([
							{
								range: new u.$iL(
									f.lineNumber,
									f.column,
									f.lineNumber,
									f.column,
								),
								options: p.u,
							},
						]),
							this.a.revealPosition(f, h.ScrollType.Immediate);
					}
					w() {
						this.c.clear();
					}
					y(f) {
						return (
							f.type === E.MouseTargetType.CONTENT_TEXT ||
							f.type === E.MouseTargetType.CONTENT_EMPTY
						);
					}
					z(f) {
						return (
							f.type === E.MouseTargetType.GUTTER_GLYPH_MARGIN ||
							f.type === E.MouseTargetType.GUTTER_LINE_NUMBERS ||
							f.type === E.MouseTargetType.GUTTER_LINE_DECORATIONS
						);
					}
					dispose() {
						this.w(),
							(this.b = null),
							(this.f = !1),
							(this.g = !1),
							super.dispose();
					}
				}
				(e.$Hhc = p),
					(0, C.$qtb)(
						p.ID,
						p,
						C.EditorContributionInstantiation.BeforeFirstInteraction,
					);
			},
		),
		define(
			de[1688],
			he([1, 0, 17, 64, 122, 51, 35]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$71b = void 0);
				class d {
					constructor(r) {
						(this.a = r),
							(this.b = []),
							(this.c = []),
							(this.d = []),
							(this.e = null),
							(this.f = null),
							(this.g = this.a.getPosition());
					}
					dispose() {
						this.a.removeDecorations(this.j()),
							(this.b = []),
							(this.c = []),
							(this.d = []),
							(this.e = null),
							(this.f = null);
					}
					reset() {
						(this.b = []),
							(this.c = []),
							(this.d = []),
							(this.e = null),
							(this.f = null);
					}
					getCount() {
						return this.b.length;
					}
					getFindScope() {
						return this.d[0]
							? this.a.getModel().getDecorationRange(this.d[0])
							: null;
					}
					getFindScopes() {
						if (this.d.length) {
							const r = this.d
								.map((u) => this.a.getModel().getDecorationRange(u))
								.filter((u) => !!u);
							if (r.length) return r;
						}
						return null;
					}
					getStartPosition() {
						return this.g;
					}
					setStartPosition(r) {
						(this.g = r), this.setCurrentFindMatch(null);
					}
					h(r) {
						const u = this.b.indexOf(r);
						return u >= 0 ? u + 1 : 1;
					}
					getDecorationRangeAt(r) {
						const u = r < this.b.length ? this.b[r] : null;
						return u ? this.a.getModel().getDecorationRange(u) : null;
					}
					getCurrentMatchesPosition(r) {
						const u = this.a.getModel().getDecorationsInRange(r);
						for (const a of u) {
							const h = a.options;
							if (
								h === d._FIND_MATCH_DECORATION ||
								h === d._CURRENT_FIND_MATCH_DECORATION
							)
								return this.h(a.id);
						}
						return 0;
					}
					setCurrentFindMatch(r) {
						let u = null,
							a = 0;
						if (r)
							for (let h = 0, c = this.b.length; h < c; h++) {
								const n = this.a.getModel().getDecorationRange(this.b[h]);
								if (r.equalsRange(n)) {
									(u = this.b[h]), (a = h + 1);
									break;
								}
							}
						return (
							(this.f !== null || u !== null) &&
								this.a.changeDecorations((h) => {
									if (
										(this.f !== null &&
											(h.changeDecorationOptions(
												this.f,
												d._FIND_MATCH_DECORATION,
											),
											(this.f = null)),
										u !== null &&
											((this.f = u),
											h.changeDecorationOptions(
												this.f,
												d._CURRENT_FIND_MATCH_DECORATION,
											)),
										this.e !== null &&
											(h.removeDecoration(this.e), (this.e = null)),
										u !== null)
									) {
										let c = this.a.getModel().getDecorationRange(u);
										if (
											c.startLineNumber !== c.endLineNumber &&
											c.endColumn === 1
										) {
											const n = c.endLineNumber - 1,
												g = this.a.getModel().getLineMaxColumn(n);
											c = new t.$iL(c.startLineNumber, c.startColumn, n, g);
										}
										this.e = h.addDecoration(c, d.l);
									}
								}),
							a
						);
					}
					set(r, u) {
						this.a.changeDecorations((a) => {
							let h = d._FIND_MATCH_DECORATION;
							const c = [];
							if (r.length > 1e3) {
								h = d._FIND_MATCH_NO_OVERVIEW_DECORATION;
								const g = this.a.getModel().getLineCount(),
									o = this.a.getLayoutInfo().height / g,
									f = Math.max(2, Math.ceil(3 / o));
								let b = r[0].range.startLineNumber,
									s = r[0].range.endLineNumber;
								for (let l = 1, y = r.length; l < y; l++) {
									const $ = r[l].range;
									s + f >= $.startLineNumber
										? $.endLineNumber > s && (s = $.endLineNumber)
										: (c.push({ range: new t.$iL(b, 1, s, 1), options: d.k }),
											(b = $.startLineNumber),
											(s = $.endLineNumber));
								}
								c.push({ range: new t.$iL(b, 1, s, 1), options: d.k });
							}
							const n = new Array(r.length);
							for (let g = 0, p = r.length; g < p; g++)
								n[g] = { range: r[g].range, options: h };
							(this.b = a.deltaDecorations(this.b, n)),
								(this.c = a.deltaDecorations(this.c, c)),
								this.e && (a.removeDecoration(this.e), (this.e = null)),
								this.d.length &&
									(this.d.forEach((g) => a.removeDecoration(g)), (this.d = [])),
								u?.length && (this.d = u.map((g) => a.addDecoration(g, d.m)));
						});
					}
					matchBeforePosition(r) {
						if (this.b.length === 0) return null;
						for (let u = this.b.length - 1; u >= 0; u--) {
							const a = this.b[u],
								h = this.a.getModel().getDecorationRange(a);
							if (!(!h || h.endLineNumber > r.lineNumber)) {
								if (h.endLineNumber < r.lineNumber) return h;
								if (!(h.endColumn > r.column)) return h;
							}
						}
						return this.a
							.getModel()
							.getDecorationRange(this.b[this.b.length - 1]);
					}
					matchAfterPosition(r) {
						if (this.b.length === 0) return null;
						for (let u = 0, a = this.b.length; u < a; u++) {
							const h = this.b[u],
								c = this.a.getModel().getDecorationRange(h);
							if (!(!c || c.startLineNumber < r.lineNumber)) {
								if (c.startLineNumber > r.lineNumber) return c;
								if (!(c.startColumn < r.column)) return c;
							}
						}
						return this.a.getModel().getDecorationRange(this.b[0]);
					}
					j() {
						let r = [];
						return (
							(r = r.concat(this.b)),
							(r = r.concat(this.c)),
							this.d.length && r.push(...this.d),
							this.e && r.push(this.e),
							r
						);
					}
					static {
						this._CURRENT_FIND_MATCH_DECORATION = w.$eY.register({
							description: "current-find-match",
							stickiness: i.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							zIndex: 13,
							className: "currentFindMatch",
							inlineClassName: "currentFindMatchInline",
							showIfCollapsed: !0,
							overviewRuler: {
								color: (0, C.$jP)(E.$vR),
								position: i.OverviewRulerLane.Center,
							},
							minimap: {
								color: (0, C.$jP)(E.$AR),
								position: i.MinimapPosition.Inline,
							},
						});
					}
					static {
						this._FIND_MATCH_DECORATION = w.$eY.register({
							description: "find-match",
							stickiness: i.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							zIndex: 10,
							className: "findMatch",
							inlineClassName: "findMatchInline",
							showIfCollapsed: !0,
							overviewRuler: {
								color: (0, C.$jP)(E.$vR),
								position: i.OverviewRulerLane.Center,
							},
							minimap: {
								color: (0, C.$jP)(E.$AR),
								position: i.MinimapPosition.Inline,
							},
						});
					}
					static {
						this._FIND_MATCH_NO_OVERVIEW_DECORATION = w.$eY.register({
							description: "find-match-no-overview",
							stickiness: i.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							className: "findMatch",
							showIfCollapsed: !0,
						});
					}
					static {
						this.k = w.$eY.register({
							description: "find-match-only-overview",
							stickiness: i.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							overviewRuler: {
								color: (0, C.$jP)(E.$vR),
								position: i.OverviewRulerLane.Center,
							},
						});
					}
					static {
						this.l = w.$eY.register({
							description: "find-range-highlight",
							stickiness: i.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							className: "rangeHighlight",
							isWholeLine: !0,
						});
					}
					static {
						this.m = w.$eY.register({
							description: "find-scope",
							className: "findScope",
							isWholeLine: !0,
						});
					}
				}
				e.$71b = d;
			},
		),
		define(
			de[547],
			he([
				1, 0, 214, 15, 27, 3, 210, 655, 38, 248, 48, 17, 104, 98, 64, 543, 1688,
				2583, 1550, 8,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$k2b =
						e.$j2b =
						e.$i2b =
						e.$h2b =
						e.$g2b =
						e.$f2b =
						e.$e2b =
						e.$d2b =
						e.$c2b =
						e.$b2b =
						e.$a2b =
						e.$_1b =
							void 0),
					(e.$_1b = new b.$5j("findWidgetVisible", !1)),
					(e.$a2b = e.$_1b.toNegated()),
					(e.$b2b = new b.$5j("findInputFocussed", !1)),
					(e.$c2b = new b.$5j("replaceInputFocussed", !1)),
					(e.$d2b = {
						primary: w.KeyMod.Alt | w.KeyCode.KeyC,
						mac: { primary: w.KeyMod.CtrlCmd | w.KeyMod.Alt | w.KeyCode.KeyC },
					}),
					(e.$e2b = {
						primary: w.KeyMod.Alt | w.KeyCode.KeyW,
						mac: { primary: w.KeyMod.CtrlCmd | w.KeyMod.Alt | w.KeyCode.KeyW },
					}),
					(e.$f2b = {
						primary: w.KeyMod.Alt | w.KeyCode.KeyR,
						mac: { primary: w.KeyMod.CtrlCmd | w.KeyMod.Alt | w.KeyCode.KeyR },
					}),
					(e.$g2b = {
						primary: w.KeyMod.Alt | w.KeyCode.KeyL,
						mac: { primary: w.KeyMod.CtrlCmd | w.KeyMod.Alt | w.KeyCode.KeyL },
					}),
					(e.$h2b = {
						primary: w.KeyMod.Alt | w.KeyCode.KeyP,
						mac: { primary: w.KeyMod.CtrlCmd | w.KeyMod.Alt | w.KeyCode.KeyP },
					}),
					(e.$i2b = {
						StartFindAction: "actions.find",
						StartFindWithSelection: "actions.findWithSelection",
						StartFindWithArgs: "editor.actions.findWithArgs",
						NextMatchFindAction: "editor.action.nextMatchFindAction",
						PreviousMatchFindAction: "editor.action.previousMatchFindAction",
						GoToMatchFindAction: "editor.action.goToMatchFindAction",
						NextSelectionMatchFindAction:
							"editor.action.nextSelectionMatchFindAction",
						PreviousSelectionMatchFindAction:
							"editor.action.previousSelectionMatchFindAction",
						StartFindReplaceAction: "editor.action.startFindReplaceAction",
						CloseFindWidgetCommand: "closeFindWidget",
						ToggleCaseSensitiveCommand: "toggleFindCaseSensitive",
						ToggleWholeWordCommand: "toggleFindWholeWord",
						ToggleRegexCommand: "toggleFindRegex",
						ToggleSearchScopeCommand: "toggleFindInSelection",
						TogglePreserveCaseCommand: "togglePreserveCase",
						ReplaceOneAction: "editor.action.replaceOne",
						ReplaceAllAction: "editor.action.replaceAll",
						SelectAllMatchesAction: "editor.action.selectAllMatches",
						StartAiInstantSearchAction: "editor.action.startAiInstantSearch",
					}),
					(e.$j2b = 19999);
				const s = 240;
				class l {
					constructor($, v) {
						(this.c = new E.$Zc()),
							(this.a = $),
							(this.b = v),
							(this.j = !1),
							(this.g = new i.$Wh()),
							(this.d = new p.$71b($)),
							this.c.add(this.d),
							(this.h = new i.$Yh(() => {
								if (this.a.hasModel()) return this.n(!1);
							}, 100)),
							this.c.add(this.h),
							this.c.add(
								this.a.onDidChangeCursorPosition((S) => {
									(S.reason === r.CursorChangeReason.Explicit ||
										S.reason === r.CursorChangeReason.Undo ||
										S.reason === r.CursorChangeReason.Redo) &&
										this.d.setStartPosition(this.a.getPosition());
								}),
							),
							(this.f = !1),
							this.c.add(
								this.a.onDidChangeModelContent((S) => {
									this.f ||
										(S.isFlush && this.d.reset(),
										this.d.setStartPosition(this.a.getPosition()),
										this.h.schedule());
								}),
							),
							this.c.add(this.b.onFindReplaceStateChange((S) => this.k(S))),
							this.n(!1, this.b.searchScope);
					}
					dispose() {
						(this.j = !0), (0, E.$Vc)(this.g), this.c.dispose();
					}
					k($) {
						this.j ||
							(this.a.hasModel() &&
								($.searchString ||
									$.isReplaceRevealed ||
									$.isRegex ||
									$.wholeWord ||
									$.matchCase ||
									$.searchScope) &&
								(this.a.getModel().isTooLargeForSyncing()
									? (this.g.cancel(),
										this.g.setIfNotSet(() => {
											$.searchScope
												? this.n($.moveCursor, this.b.searchScope)
												: this.n($.moveCursor);
										}, s))
									: $.searchScope
										? this.n($.moveCursor, this.b.searchScope)
										: this.n($.moveCursor)));
					}
					static l($, v) {
						return v || $.getFullModelRange();
					}
					n($, v) {
						let S = null;
						typeof v < "u"
							? v !== null && (Array.isArray(v) ? (S = v) : (S = [v]))
							: (S = this.d.getFindScopes()),
							S !== null &&
								(S = S.map((k) => {
									if (k.startLineNumber !== k.endLineNumber) {
										let L = k.endLineNumber;
										return (
											k.endColumn === 1 && (L = L - 1),
											new a.$iL(
												k.startLineNumber,
												1,
												L,
												this.a.getModel().getLineMaxColumn(L),
											)
										);
									}
									return k;
								}));
						const I = this.y(S, !1, e.$j2b);
						this.d.set(I, S);
						const T = this.a.getSelection();
						let P = this.d.getCurrentMatchesPosition(T);
						if (P === 0 && I.length > 0) {
							const k = (0, t.$ob)(
								I.map((L) => L.range),
								(L) => a.$iL.compareRangesUsingStarts(L, T) >= 0,
							);
							P = k > 0 ? k - 1 + 1 : P;
						}
						this.b.changeMatchInfo(P, this.d.getCount(), void 0),
							$ &&
								this.a.getOption(m.EditorOption.find).cursorMoveOnType &&
								this.u(this.d.getStartPosition());
					}
					o() {
						return this.b.matchesCount > 0;
					}
					p() {
						if (!this.o()) {
							const $ = this.d.getFindScope();
							return (
								$ &&
									this.a.revealRangeInCenterIfOutsideViewport(
										$,
										c.ScrollType.Smooth,
									),
								!0
							);
						}
						return !1;
					}
					q($) {
						const v = this.d.setCurrentFindMatch($);
						this.b.changeMatchInfo(v, this.d.getCount(), $),
							this.a.setSelection($),
							this.a.revealRangeInCenterIfOutsideViewport(
								$,
								c.ScrollType.Smooth,
							);
					}
					r($) {
						const v =
							this.b.isRegex &&
							(this.b.searchString.indexOf("^") >= 0 ||
								this.b.searchString.indexOf("$") >= 0);
						let { lineNumber: S, column: I } = $;
						const T = this.a.getModel();
						return (
							v || I === 1
								? (S === 1 ? (S = T.getLineCount()) : S--,
									(I = T.getLineMaxColumn(S)))
								: I--,
							new u.$hL(S, I)
						);
					}
					s($, v = !1) {
						if (!this.b.canNavigateBack()) {
							const M = this.d.matchAfterPosition($);
							M && this.q(M);
							return;
						}
						if (this.d.getCount() < e.$j2b) {
							let M = this.d.matchBeforePosition($);
							M &&
								M.isEmpty() &&
								M.getStartPosition().equals($) &&
								(($ = this.r($)), (M = this.d.matchBeforePosition($))),
								M && this.q(M);
							return;
						}
						if (this.p()) return;
						const S = this.d.getFindScope(),
							I = l.l(this.a.getModel(), S);
						I.getEndPosition().isBefore($) && ($ = I.getEndPosition()),
							$.isBefore(I.getStartPosition()) && ($ = I.getEndPosition());
						const { lineNumber: T, column: P } = $,
							k = this.a.getModel();
						let L = new u.$hL(T, P),
							D = k.findPreviousMatch(
								this.b.searchString,
								L,
								this.b.isRegex,
								this.b.matchCase,
								this.b.wholeWord
									? this.a.getOption(m.EditorOption.wordSeparators)
									: null,
								!1,
							);
						if (
							(D &&
								D.range.isEmpty() &&
								D.range.getStartPosition().equals(L) &&
								((L = this.r(L)),
								(D = k.findPreviousMatch(
									this.b.searchString,
									L,
									this.b.isRegex,
									this.b.matchCase,
									this.b.wholeWord
										? this.a.getOption(m.EditorOption.wordSeparators)
										: null,
									!1,
								))),
							!!D)
						) {
							if (!v && !I.containsRange(D.range))
								return this.s(D.range.getStartPosition(), !0);
							this.q(D.range);
						}
					}
					moveToPrevMatch() {
						this.s(this.a.getSelection().getStartPosition());
					}
					t($) {
						const v =
							this.b.isRegex &&
							(this.b.searchString.indexOf("^") >= 0 ||
								this.b.searchString.indexOf("$") >= 0);
						let { lineNumber: S, column: I } = $;
						const T = this.a.getModel();
						return (
							v || I === T.getLineMaxColumn(S)
								? (S === T.getLineCount() ? (S = 1) : S++, (I = 1))
								: I++,
							new u.$hL(S, I)
						);
					}
					u($) {
						if (!this.b.canNavigateForward()) {
							const S = this.d.matchBeforePosition($);
							S && this.q(S);
							return;
						}
						if (this.d.getCount() < e.$j2b) {
							let S = this.d.matchAfterPosition($);
							S &&
								S.isEmpty() &&
								S.getStartPosition().equals($) &&
								(($ = this.t($)), (S = this.d.matchAfterPosition($))),
								S && this.q(S);
							return;
						}
						const v = this.v($, !1, !0);
						v && this.q(v.range);
					}
					v($, v, S, I = !1) {
						if (this.p()) return null;
						const T = this.d.getFindScope(),
							P = l.l(this.a.getModel(), T);
						P.getEndPosition().isBefore($) && ($ = P.getStartPosition()),
							$.isBefore(P.getStartPosition()) && ($ = P.getStartPosition());
						const { lineNumber: k, column: L } = $,
							D = this.a.getModel();
						let M = new u.$hL(k, L),
							N = D.findNextMatch(
								this.b.searchString,
								M,
								this.b.isRegex,
								this.b.matchCase,
								this.b.wholeWord
									? this.a.getOption(m.EditorOption.wordSeparators)
									: null,
								v,
							);
						return (
							S &&
								N &&
								N.range.isEmpty() &&
								N.range.getStartPosition().equals(M) &&
								((M = this.t(M)),
								(N = D.findNextMatch(
									this.b.searchString,
									M,
									this.b.isRegex,
									this.b.matchCase,
									this.b.wholeWord
										? this.a.getOption(m.EditorOption.wordSeparators)
										: null,
									v,
								))),
							N
								? !I && !P.containsRange(N.range)
									? this.v(N.range.getEndPosition(), v, S, !0)
									: N
								: null
						);
					}
					moveToNextMatch() {
						this.u(this.a.getSelection().getEndPosition());
					}
					w($) {
						const v = this.d.getDecorationRangeAt($);
						v && this.q(v);
					}
					moveToMatch($) {
						this.w($);
					}
					x() {
						return this.b.isRegex
							? (0, f.$$1b)(this.b.replaceString)
							: f.$91b.fromStaticValue(this.b.replaceString);
					}
					replace() {
						if (!this.o()) return;
						const $ = this.x(),
							v = this.a.getSelection(),
							S = this.v(v.getStartPosition(), !0, !1);
						if (S)
							if (v.equalsRange(S.range)) {
								const I = $.buildReplaceString(S.matches, this.b.preserveCase),
									T = new d.$wtb(v, I);
								this.B("replace", T),
									this.d.setStartPosition(
										new u.$hL(v.startLineNumber, v.startColumn + I.length),
									),
									this.n(!0);
							} else
								this.d.setStartPosition(this.a.getPosition()), this.q(S.range);
					}
					y($, v, S) {
						const I = ($ || [null]).map((T) => l.l(this.a.getModel(), T));
						return this.a
							.getModel()
							.findMatches(
								this.b.searchString,
								I,
								this.b.isRegex,
								this.b.matchCase,
								this.b.wholeWord
									? this.a.getOption(m.EditorOption.wordSeparators)
									: null,
								v,
								S,
							);
					}
					replaceAll() {
						if (!this.o()) return;
						const $ = this.d.getFindScopes();
						$ === null && this.b.matchesCount >= e.$j2b ? this.z() : this.A($),
							this.n(!1);
					}
					z() {
						const v = new g.$XU(
							this.b.searchString,
							this.b.isRegex,
							this.b.matchCase,
							this.b.wholeWord
								? this.a.getOption(m.EditorOption.wordSeparators)
								: null,
						).parseSearchRequest();
						if (!v) return;
						let S = v.regex;
						if (!S.multiline) {
							let N = "mu";
							S.ignoreCase && (N += "i"),
								S.global && (N += "g"),
								(S = new RegExp(S.source, N));
						}
						const I = this.a.getModel(),
							T = I.getValue(n.EndOfLinePreference.LF),
							P = I.getFullModelRange(),
							k = this.x();
						let L;
						const D = this.b.preserveCase;
						k.hasReplacementPatterns || D
							? (L = T.replace(S, function () {
									return k.buildReplaceString(arguments, D);
								}))
							: (L = T.replace(S, k.buildReplaceString(null, D)));
						const M = new d.$Atb(P, L, this.a.getSelection());
						this.B("replaceAll", M);
					}
					A($) {
						const v = this.x(),
							S = this.y(
								$,
								v.hasReplacementPatterns || this.b.preserveCase,
								C.Constants.MAX_SAFE_SMALL_INTEGER,
							),
							I = [];
						for (let P = 0, k = S.length; P < k; P++)
							I[P] = v.buildReplaceString(S[P].matches, this.b.preserveCase);
						const T = new o.$81b(
							this.a.getSelection(),
							S.map((P) => P.range),
							I,
						);
						this.B("replaceAll", T);
					}
					selectAllMatches() {
						if (!this.o()) return;
						const $ = this.d.getFindScopes();
						let S = this.y($, !1, C.Constants.MAX_SAFE_SMALL_INTEGER).map(
							(T) =>
								new h.$kL(
									T.range.startLineNumber,
									T.range.startColumn,
									T.range.endLineNumber,
									T.range.endColumn,
								),
						);
						const I = this.a.getSelection();
						for (let T = 0, P = S.length; T < P; T++)
							if (S[T].equalsRange(I)) {
								S = [I].concat(S.slice(0, T)).concat(S.slice(T + 1));
								break;
							}
						this.a.setSelections(S);
					}
					B($, v) {
						try {
							(this.f = !0),
								this.a.pushUndoStop(),
								this.a.executeCommand($, v),
								this.a.pushUndoStop();
						} finally {
							this.f = !1;
						}
					}
				}
				e.$k2b = l;
			},
		),
		define(
			de[2912],
			he([1, 0, 7, 1581, 235, 15, 56, 547, 51, 95, 2295]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$6b = void 0),
					(t = mt(t));
				class u extends w.$Uhb {
					static {
						this.a = "editor.contrib.findOptionsWidget";
					}
					constructor(h, c, n) {
						super(),
							(this.w = this.D(new E.$Yh(() => this.O(), 2e3))),
							(this.M = !1),
							(this.b = h),
							(this.c = c),
							(this.g = n),
							(this.h = document.createElement("div")),
							(this.h.className = "findOptionsWidget"),
							(this.h.style.display = "none"),
							(this.h.style.top = "10px"),
							(this.h.style.zIndex = "12"),
							this.h.setAttribute("role", "presentation"),
							this.h.setAttribute("aria-hidden", "true");
						const g = {
								inputActiveOptionBorder: (0, m.$rP)(m.$WR),
								inputActiveOptionForeground: (0, m.$rP)(m.$ZR),
								inputActiveOptionBackground: (0, m.$rP)(m.$YR),
							},
							p = this.D((0, r.$dib)());
						(this.s = this.D(
							new i.$Rob({
								appendTitle: this.t(d.$i2b.ToggleCaseSensitiveCommand),
								isChecked: this.c.matchCase,
								hoverDelegate: p,
								...g,
							}),
						)),
							this.h.appendChild(this.s.domNode),
							this.D(
								this.s.onChange(() => {
									this.c.change({ matchCase: this.s.checked }, !1);
								}),
							),
							(this.r = this.D(
								new i.$Sob({
									appendTitle: this.t(d.$i2b.ToggleWholeWordCommand),
									isChecked: this.c.wholeWord,
									hoverDelegate: p,
									...g,
								}),
							)),
							this.h.appendChild(this.r.domNode),
							this.D(
								this.r.onChange(() => {
									this.c.change({ wholeWord: this.r.checked }, !1);
								}),
							),
							(this.n = this.D(
								new i.$Tob({
									appendTitle: this.t(d.$i2b.ToggleRegexCommand),
									isChecked: this.c.isRegex,
									hoverDelegate: p,
									...g,
								}),
							)),
							this.h.appendChild(this.n.domNode),
							this.D(
								this.n.onChange(() => {
									this.c.change({ isRegex: this.n.checked }, !1);
								}),
							),
							this.b.addOverlayWidget(this),
							this.D(
								this.c.onFindReplaceStateChange((o) => {
									let f = !1;
									o.isRegex && ((this.n.checked = this.c.isRegex), (f = !0)),
										o.wholeWord &&
											((this.r.checked = this.c.wholeWord), (f = !0)),
										o.matchCase &&
											((this.s.checked = this.c.matchCase), (f = !0)),
										!this.c.isRevealed && f && this.y();
								}),
							),
							this.D(t.$0fb(this.h, t.$$gb.MOUSE_LEAVE, (o) => this.J())),
							this.D(t.$0fb(this.h, "mouseover", (o) => this.L()));
					}
					t(h) {
						const c = this.g.lookupKeybinding(h);
						return c ? ` (${c.getLabel()})` : "";
					}
					dispose() {
						this.b.removeOverlayWidget(this), super.dispose();
					}
					getId() {
						return u.a;
					}
					getDomNode() {
						return this.h;
					}
					getPosition() {
						return {
							preference: C.OverlayWidgetPositionPreference.TOP_RIGHT_CORNER,
						};
					}
					highlightFindOptions() {
						this.y();
					}
					y() {
						this.N(), this.w.schedule();
					}
					J() {
						this.w.schedule();
					}
					L() {
						this.w.cancel();
					}
					N() {
						this.M || ((this.M = !0), (this.h.style.display = "block"));
					}
					O() {
						this.M && ((this.M = !1), (this.h.style.display = "none"));
					}
				}
				e.$$6b = u;
			},
		),
		