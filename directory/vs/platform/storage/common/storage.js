define(
			de[21],
			he([1, 0, 15, 6, 3, 240, 28, 1174, 5, 129]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pq =
						e.$nq =
						e.StorageTarget =
						e.StorageScope =
						e.WillSaveStateReason =
						e.$lq =
						e.$kq =
						e.$jq =
							void 0),
					(e.$mq = c),
					(e.$oq = g),
					(e.$qq = o),
					(e.$jq = "__$__isNewStorageMarker"),
					(e.$kq = "__$__targetStorageMarker"),
					(e.$lq = (0, m.$Mi)("storageService"));
				var u;
				(function (f) {
					(f[(f.NONE = 0)] = "NONE"), (f[(f.SHUTDOWN = 1)] = "SHUTDOWN");
				})(u || (e.WillSaveStateReason = u = {}));
				var a;
				(function (f) {
					(f[(f.APPLICATION = -1)] = "APPLICATION"),
						(f[(f.PROFILE = 0)] = "PROFILE"),
						(f[(f.WORKSPACE = 1)] = "WORKSPACE");
				})(a || (e.StorageScope = a = {}));
				var h;
				(function (f) {
					(f[(f.USER = 0)] = "USER"), (f[(f.MACHINE = 1)] = "MACHINE");
				})(h || (e.StorageTarget = h = {}));
				function c(f) {
					const b = f.get(e.$kq);
					if (b)
						try {
							return JSON.parse(b);
						} catch {}
					return Object.create(null);
				}
				class n extends w.$1c {
					static {
						this.a = 60 * 1e3;
					}
					constructor(b = { flushInterval: n.a }) {
						super(),
							(this.n = b),
							(this.b = this.D(new i.$ue())),
							(this.f = this.D(new i.$ue())),
							(this.onDidChangeTarget = this.f.event),
							(this.g = this.D(new i.$re())),
							(this.onWillSaveState = this.g.event),
							(this.j = this.D(
								new t.$Yh(() => this.q(), this.n.flushInterval),
							)),
							(this.m = this.D(new w.$2c())),
							(this.C = void 0),
							(this.G = void 0),
							(this.I = void 0),
							(this.N = []);
					}
					onDidChangeValue(b, s, l) {
						return i.Event.filter(
							this.b.event,
							(y) => y.scope === b && (s === void 0 || y.key === s),
							l,
						);
					}
					q() {
						this.m.value = (0, t.$3h)(() => {
							this.r() && this.flush(), this.j.schedule();
						});
					}
					r() {
						return !0;
					}
					t() {
						(0, w.$Vc)([this.m, this.j]);
					}
					initialize() {
						return (
							this.h ||
								(this.h = (async () => {
									(0, E.mark)("code/willInitStorage");
									try {
										await this.Q();
									} finally {
										(0, E.mark)("code/didInitStorage");
									}
									this.j.schedule();
								})()),
							this.h
						);
					}
					u(b, s) {
						const { key: l, external: y } = s;
						if (l === e.$kq) {
							switch (b) {
								case a.APPLICATION:
									this.I = void 0;
									break;
								case a.PROFILE:
									this.G = void 0;
									break;
								case a.WORKSPACE:
									this.C = void 0;
									break;
							}
							this.f.fire({ scope: b });
						} else
							this.b.fire({
								scope: b,
								key: l,
								target: this.L(b)[l],
								external: y,
							});
					}
					w(b) {
						this.g.fire({ reason: b });
					}
					get(b, s, l) {
						return this.R(s)?.get(b, l);
					}
					getBoolean(b, s, l) {
						return this.R(s)?.getBoolean(b, l);
					}
					getNumber(b, s, l) {
						return this.R(s)?.getNumber(b, l);
					}
					getObject(b, s, l) {
						return this.R(s)?.getObject(b, l);
					}
					storeAll(b, s) {
						this.y(() => {
							for (const l of b)
								this.store(l.key, l.value, l.scope, l.target, s);
						});
					}
					store(b, s, l, y, $ = !1) {
						if ((0, C.$ug)(s)) {
							this.remove(b, l, $);
							return;
						}
						this.y(() => {
							this.z(b, l, y), this.R(l)?.set(b, s, $);
						});
					}
					remove(b, s, l = !1) {
						this.y(() => {
							this.z(b, s, void 0), this.R(s)?.delete(b, l);
						});
					}
					y(b) {
						this.b.pause(), this.f.pause();
						try {
							b();
						} finally {
							this.b.resume(), this.f.resume();
						}
					}
					keys(b, s) {
						const l = [],
							y = this.L(b);
						for (const $ of Object.keys(y)) y[$] === s && l.push($);
						return l;
					}
					z(b, s, l, y = !1) {
						const $ = this.L(s);
						typeof l == "number"
							? $[b] !== l &&
								(($[b] = l), this.R(s)?.set(e.$kq, JSON.stringify($), y))
							: typeof $[b] == "number" &&
								(delete $[b], this.R(s)?.set(e.$kq, JSON.stringify($), y));
					}
					get F() {
						return this.C || (this.C = this.M(a.WORKSPACE)), this.C;
					}
					get H() {
						return this.G || (this.G = this.M(a.PROFILE)), this.G;
					}
					get J() {
						return this.I || (this.I = this.M(a.APPLICATION)), this.I;
					}
					L(b) {
						switch (b) {
							case a.APPLICATION:
								return this.J;
							case a.PROFILE:
								return this.H;
							default:
								return this.F;
						}
					}
					M(b) {
						const s = this.R(b);
						return s ? c(s) : Object.create(null);
					}
					isNew(b) {
						return this.getBoolean(e.$jq, b) === !0;
					}
					async cursorDiskKVGet(b) {
						return this.R(a.APPLICATION)?.cursorDiskKVGet(b);
					}
					async cursorDiskKVSet(b, s) {
						return this.R(a.APPLICATION)?.cursorDiskKVSet(b, s);
					}
					cursorDiskKVOnShouldSave(b) {
						return (
							this.N.push(b),
							{
								dispose: () => {
									this.N = this.N.filter((s) => s !== b);
								},
							}
						);
					}
					async flush(b = u.NONE) {
						this.g.fire({ reason: b });
						const s = this.R(a.APPLICATION),
							l = this.R(a.PROFILE),
							y = this.R(a.WORKSPACE);
						switch (b) {
							case u.NONE:
								for (const $ of this.N)
									try {
										$().catch(console.error);
									} catch {}
								await t.Promises.settled([
									s?.whenFlushed() ?? Promise.resolve(),
									l?.whenFlushed() ?? Promise.resolve(),
									y?.whenFlushed() ?? Promise.resolve(),
								]);
								break;
							case u.SHUTDOWN:
								for (const $ of this.N)
									try {
										await $();
									} catch (v) {
										console.error(v);
									}
								await t.Promises.settled([
									s?.flush(0) ?? Promise.resolve(),
									l?.flush(0) ?? Promise.resolve(),
									y?.flush(0) ?? Promise.resolve(),
								]);
								break;
						}
					}
					async log() {
						const b = this.R(a.APPLICATION)?.items ?? new Map(),
							s = this.R(a.PROFILE)?.items ?? new Map(),
							l = this.R(a.WORKSPACE)?.items ?? new Map();
						return o(
							b,
							s,
							l,
							this.S(a.APPLICATION) ?? "",
							this.S(a.PROFILE) ?? "",
							this.S(a.WORKSPACE) ?? "",
						);
					}
					async optimize(b) {
						return await this.flush(), this.R(b)?.optimize();
					}
					async switch(b, s) {
						return this.w(u.NONE), (0, r.$Wl)(b) ? this.U(b, s) : this.W(b, s);
					}
					O(b, s) {
						return !(b.id === s.id || (g(s) && g(b)));
					}
					P(b, s, l) {
						this.y(() => {
							const y = new Set();
							for (const [$, v] of b)
								y.add($), s.get($) !== v && this.u(l, { key: $, external: !0 });
							for (const [$] of s.items)
								y.has($) || this.u(l, { key: $, external: !0 });
						});
					}
				}
				e.$nq = n;
				function g(f) {
					return f.isDefault || !!f.useDefaultFlags?.globalState;
				}
				class p extends n {
					constructor() {
						super(),
							(this.X = this.D(
								new d.$hq(new d.$iq(), {
									hint: d.StorageHint.STORAGE_IN_MEMORY,
								}),
							)),
							(this.Y = this.D(
								new d.$hq(new d.$iq(), {
									hint: d.StorageHint.STORAGE_IN_MEMORY,
								}),
							)),
							(this.Z = this.D(
								new d.$hq(new d.$iq(), {
									hint: d.StorageHint.STORAGE_IN_MEMORY,
								}),
							)),
							this.D(this.Z.onDidChangeStorage((b) => this.u(a.WORKSPACE, b))),
							this.D(this.Y.onDidChangeStorage((b) => this.u(a.PROFILE, b))),
							this.D(
								this.X.onDidChangeStorage((b) => this.u(a.APPLICATION, b)),
							);
					}
					R(b) {
						switch (b) {
							case a.APPLICATION:
								return this.X;
							case a.PROFILE:
								return this.Y;
							default:
								return this.Z;
						}
					}
					S(b) {
						switch (b) {
							case a.APPLICATION:
								return "inMemory (application)";
							case a.PROFILE:
								return "inMemory (profile)";
							default:
								return "inMemory (workspace)";
						}
					}
					async Q() {}
					async U() {}
					async W() {}
					r() {
						return !1;
					}
					hasScope(b) {
						return !1;
					}
				}
				e.$pq = p;
				async function o(f, b, s, l, y, $) {
					const v = (N) => {
							try {
								return JSON.parse(N);
							} catch {
								return N;
							}
						},
						S = new Map(),
						I = new Map();
					f.forEach((N, A) => {
						S.set(A, N), I.set(A, v(N));
					});
					const T = new Map(),
						P = new Map();
					b.forEach((N, A) => {
						T.set(A, N), P.set(A, v(N));
					});
					const k = new Map(),
						L = new Map();
					s.forEach((N, A) => {
						k.set(A, N), L.set(A, v(N));
					}),
						console.group(
							l !== y
								? `Storage: Application (path: ${l})`
								: `Storage: Application & Profile (path: ${l}, default profile)`,
						);
					const D = [];
					if (
						(S.forEach((N, A) => {
							D.push({ key: A, value: N });
						}),
						console.table(D),
						console.groupEnd(),
						console.log(I),
						l !== y)
					) {
						console.group(`Storage: Profile (path: ${y}, profile specific)`);
						const N = [];
						T.forEach((A, R) => {
							N.push({ key: R, value: A });
						}),
							console.table(N),
							console.groupEnd(),
							console.log(P);
					}
					console.group(`Storage: Workspace (path: ${$})`);
					const M = [];
					k.forEach((N, A) => {
						M.push({ key: A, value: N });
					}),
						console.table(M),
						console.groupEnd(),
						console.log(L);
				}
			},
		),
		