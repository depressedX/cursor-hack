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
		