import '../../../require.js';
import '../../../exports.js';
import './cancellation.js';
import './errors.js';
import './event.js';
import './lifecycle.js';
import './resources.js';
import './platform.js';
import './symbols.js';
import './lazy.js';
define(
			de[15],
			he([1, 0, 33, 29, 6, 3, 19, 12, 649, 149]),
			function (ce /*require*/,
 e /*exports*/,
 t /*cancellation*/,
 i /*errors*/,
 w /*event*/,
 E /*lifecycle*/,
 C /*resources*/,
 d /*platform*/,
 m /*symbols*/,
 r /*lazy*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$di =
						e.$bi =
						e.$ai =
						e.$_h =
						e.$$h =
						e.Promises =
						e.$0h =
						e.$9h =
						e.$8h =
						e.$6h =
						e.$5h =
						e.$4h =
						e.$3h =
						e.$2h =
						e.$1h =
						e.$Zh =
						e.$Yh =
						e.$Xh =
						e.$Wh =
						e.$Vh =
						e.$Uh =
						e.$Th =
						e.$Sh =
						e.$Mh =
						e.$Lh =
						e.$Kh =
						e.$Jh =
						e.$Ih =
						e.$Hh =
						e.$Gh =
							void 0),
					(e.$yh = u),
					(e.$zh = a),
					(e.$Ah = h),
					(e.$Bh = c),
					(e.$Ch = n),
					(e.$Dh = g),
					(e.$Eh = p),
					(e.$Fh = o),
					(e.$Nh = T),
					(e.$Oh = P),
					(e.$Ph = k),
					(e.$Qh = L),
					(e.$Rh = D),
					(e.$7h = V),
					(e.$ci = te);
				function u(Z) {
					return !!Z && typeof Z.then == "function";
				}
				function a(Z) {
					const se = new t.$Ce(),
						re = Z(se.token),
						le = new Promise((oe, ae) => {
							const pe = se.token.onCancellationRequested(() => {
								pe.dispose(), ae(new i.$9());
							});
							Promise.resolve(re).then(
								($e) => {
									pe.dispose(), se.dispose(), oe($e);
								},
								($e) => {
									pe.dispose(), se.dispose(), ae($e);
								},
							);
						});
					return new (class {
						cancel() {
							se.cancel(), se.dispose();
						}
						then(oe, ae) {
							return le.then(oe, ae);
						}
						catch(oe) {
							return this.then(void 0, oe);
						}
						finally(oe) {
							return le.finally(oe);
						}
					})();
				}
				function h(Z, se, re) {
					return new Promise((le, oe) => {
						const ae = se.onCancellationRequested(() => {
							ae.dispose(), le(re);
						});
						Z.then(le, oe).finally(() => ae.dispose());
					});
				}
				function c(Z, se) {
					return new Promise((re, le) => {
						const oe = se.onCancellationRequested(() => {
							oe.dispose(), le(new i.$9());
						});
						Z.then(re, le).finally(() => oe.dispose());
					});
				}
				async function n(Z) {
					let se = -1;
					const re = Z.map((le, oe) => le.then((ae) => ((se = oe), ae)));
					try {
						return await Promise.race(re);
					} finally {
						Z.forEach((le, oe) => {
							oe !== se && le.cancel();
						});
					}
				}
				function g(Z, se, re) {
					let le;
					const oe = setTimeout(() => {
						le?.(void 0), re?.();
					}, se);
					return Promise.race([
						Z.finally(() => clearTimeout(oe)),
						new Promise((ae) => (le = ae)),
					]);
				}
				function p(Z) {
					return new Promise((se, re) => {
						const le = Z();
						u(le) ? le.then(se, re) : se(le);
					});
				}
				function o() {
					let Z, se;
					return {
						promise: new Promise((le, oe) => {
							(Z = le), (se = oe);
						}),
						resolve: Z,
						reject: se,
					};
				}
				class f {
					constructor() {
						(this.f = !1), (this.a = null), (this.b = null), (this.d = null);
					}
					queue(se) {
						if (this.f)
							return Promise.reject(new Error("Throttler is disposed"));
						if (this.a) {
							if (((this.d = se), !this.b)) {
								const re = () => {
									if (((this.b = null), this.f)) return;
									const le = this.queue(this.d);
									return (this.d = null), le;
								};
								this.b = new Promise((le) => {
									this.a.then(re, re).then(le);
								});
							}
							return new Promise((re, le) => {
								this.b.then(re, le);
							});
						}
						return (
							(this.a = se()),
							new Promise((re, le) => {
								this.a.then(
									(oe) => {
										(this.a = null), re(oe);
									},
									(oe) => {
										(this.a = null), le(oe);
									},
								);
							})
						);
					}
					dispose() {
						this.f = !0;
					}
				}
				e.$Gh = f;
				class b {
					constructor() {
						this.a = Promise.resolve(null);
					}
					queue(se) {
						return (this.a = this.a.then(
							() => se(),
							() => se(),
						));
					}
				}
				e.$Hh = b;
				class s {
					constructor() {
						this.a = new Map();
					}
					queue(se, re) {
						const oe = (this.a.get(se) ?? Promise.resolve())
							.catch(() => {})
							.then(re)
							.finally(() => {
								this.a.get(se) === oe && this.a.delete(se);
							});
						return this.a.set(se, oe), oe;
					}
				}
				e.$Ih = s;
				const l = (Z, se) => {
						let re = !0;
						const le = setTimeout(() => {
							(re = !1), se();
						}, Z);
						return {
							isTriggered: () => re,
							dispose: () => {
								clearTimeout(le), (re = !1);
							},
						};
					},
					y = (Z) => {
						let se = !0;
						return (
							queueMicrotask(() => {
								se && ((se = !1), Z());
							}),
							{
								isTriggered: () => se,
								dispose: () => {
									se = !1;
								},
							}
						);
					};
				class $ {
					constructor(se) {
						(this.defaultDelay = se),
							(this.a = null),
							(this.b = null),
							(this.d = null),
							(this.f = null),
							(this.g = null);
					}
					trigger(se, re = this.defaultDelay) {
						(this.g = se),
							this.h(),
							this.b ||
								(this.b = new Promise((oe, ae) => {
									(this.d = oe), (this.f = ae);
								}).then(() => {
									if (((this.b = null), (this.d = null), this.g)) {
										const oe = this.g;
										return (this.g = null), oe();
									}
								}));
						const le = () => {
							(this.a = null), this.d?.(null);
						};
						return (this.a = re === m.$me ? y(le) : l(re, le)), this.b;
					}
					isTriggered() {
						return !!this.a?.isTriggered();
					}
					cancel() {
						this.h(), this.b && (this.f?.(new i.$9()), (this.b = null));
					}
					h() {
						this.a?.dispose(), (this.a = null);
					}
					dispose() {
						this.cancel();
					}
				}
				e.$Jh = $;
				class v {
					constructor(se) {
						(this.a = new $(se)), (this.b = new f());
					}
					trigger(se, re) {
						return this.a.trigger(() => this.b.queue(se), re);
					}
					isTriggered() {
						return this.a.isTriggered();
					}
					cancel() {
						this.a.cancel();
					}
					dispose() {
						this.a.dispose(), this.b.dispose();
					}
				}
				e.$Kh = v;
				class S {
					constructor() {
						(this.a = !1),
							(this.b = new Promise((se, re) => {
								this.d = se;
							}));
					}
					isOpen() {
						return this.a;
					}
					open() {
						(this.a = !0), this.d(!0);
					}
					wait() {
						return this.b;
					}
				}
				e.$Lh = S;
				class I extends S {
					constructor(se) {
						super(), (this.f = setTimeout(() => this.open(), se));
					}
					open() {
						clearTimeout(this.f), super.open();
					}
				}
				e.$Mh = I;
				function T(Z, se) {
					return se
						? new Promise((re, le) => {
								const oe = setTimeout(() => {
										ae.dispose(), re();
									}, Z),
									ae = se.onCancellationRequested(() => {
										clearTimeout(oe), ae.dispose(), le(new i.$9());
									});
							})
						: a((re) => T(Z, re));
				}
				function P(Z, se = 0, re) {
					const le = setTimeout(() => {
							Z(), re && oe.dispose();
						}, se),
						oe = (0, E.$Yc)(() => {
							clearTimeout(le), re?.deleteAndLeak(oe);
						});
					return re?.add(oe), oe;
				}
				function k(Z) {
					const se = [];
					let re = 0;
					const le = Z.length;
					function oe() {
						return re < le ? Z[re++]() : null;
					}
					function ae(pe) {
						pe != null && se.push(pe);
						const $e = oe();
						return $e ? $e.then(ae) : Promise.resolve(se);
					}
					return Promise.resolve(null).then(ae);
				}
				function L(Z, se = (le) => !!le, re = null) {
					let le = 0;
					const oe = Z.length,
						ae = () => {
							if (le >= oe) return Promise.resolve(re);
							const pe = Z[le++];
							return Promise.resolve(pe()).then((ye) =>
								se(ye) ? Promise.resolve(ye) : ae(),
							);
						};
					return ae();
				}
				function D(Z, se = (le) => !!le, re = null) {
					if (Z.length === 0) return Promise.resolve(re);
					let le = Z.length;
					const oe = () => {
						le = -1;
						for (const ae of Z) ae.cancel?.();
					};
					return new Promise((ae, pe) => {
						for (const $e of Z)
							$e.then((ye) => {
								--le >= 0 && se(ye) ? (oe(), ae(ye)) : le === 0 && ae(re);
							}).catch((ye) => {
								--le >= 0 && (oe(), pe(ye));
							});
					});
				}
				class M {
					constructor(se) {
						(this.a = 0),
							(this.b = !1),
							(this.f = se),
							(this.g = []),
							(this.d = 0),
							(this.h = new w.$re());
					}
					whenIdle() {
						return this.size > 0
							? w.Event.toPromise(this.onDrained)
							: Promise.resolve();
					}
					get onDrained() {
						return this.h.event;
					}
					get size() {
						return this.a;
					}
					queue(se) {
						if (this.b) throw new Error("Object has been disposed");
						return (
							this.a++,
							new Promise((re, le) => {
								this.g.push({ factory: se, c: re, e: le }), this.j();
							})
						);
					}
					j() {
						for (; this.g.length && this.d < this.f; ) {
							const se = this.g.shift();
							this.d++;
							const re = se.factory();
							re.then(se.c, se.e),
								re.then(
									() => this.k(),
									() => this.k(),
								);
						}
					}
					k() {
						this.b ||
							(this.d--,
							--this.a === 0 && this.h.fire(),
							this.g.length > 0 && this.j());
					}
					clear() {
						if (this.b) throw new Error("Object has been disposed");
						(this.g.length = 0), (this.a = this.d);
					}
					dispose() {
						(this.b = !0), (this.g.length = 0), (this.a = 0), this.h.dispose();
					}
				}
				e.$Sh = M;
				class N extends M {
					constructor() {
						super(1);
					}
				}
				e.$Th = N;
				class A {
					constructor() {
						(this.a = new G()), (this.b = 0);
					}
					queue(se) {
						return this.a.isRunning()
							? this.a.queue(() => this.a.run(this.b++, se()))
							: this.a.run(this.b++, se());
					}
				}
				e.$Uh = A;
				class R {
					constructor() {
						(this.a = new Map()),
							(this.b = new Set()),
							(this.d = void 0),
							(this.f = 0);
					}
					async whenDrained() {
						if (this.g()) return;
						const se = new W();
						return this.b.add(se), se.p;
					}
					g() {
						for (const [, se] of this.a) if (se.size > 0) return !1;
						return !0;
					}
					queueSize(se, re = C.$dh) {
						const le = re.getComparisonKey(se);
						return this.a.get(le)?.size ?? 0;
					}
					queueFor(se, re, le = C.$dh) {
						const oe = le.getComparisonKey(se);
						let ae = this.a.get(oe);
						if (!ae) {
							ae = new N();
							const pe = this.f++,
								$e = w.Event.once(ae.onDrained)(() => {
									ae?.dispose(),
										this.a.delete(oe),
										this.h(),
										this.d?.deleteAndDispose(pe),
										this.d?.size === 0 && (this.d.dispose(), (this.d = void 0));
								});
							this.d || (this.d = new E.$0c()),
								this.d.set(pe, $e),
								this.a.set(oe, ae);
						}
						return ae.queue(re);
					}
					h() {
						this.g() && this.j();
					}
					j() {
						for (const se of this.b) se.complete();
						this.b.clear();
					}
					dispose() {
						for (const [, se] of this.a) se.dispose();
						this.a.clear(), this.j(), this.d?.dispose();
					}
				}
				e.$Vh = R;
				class O {
					constructor(se, re) {
						(this.b = !1),
							(this.a = -1),
							typeof se == "function" &&
								typeof re == "number" &&
								this.setIfNotSet(se, re);
					}
					dispose() {
						this.cancel(), (this.b = !0);
					}
					cancel() {
						this.a !== -1 && (clearTimeout(this.a), (this.a = -1));
					}
					cancelAndSet(se, re) {
						if (this.b)
							throw new i.$gb(
								"Calling 'cancelAndSet' on a disposed TimeoutTimer",
							);
						this.cancel(),
							(this.a = setTimeout(() => {
								(this.a = -1), se();
							}, re));
					}
					setIfNotSet(se, re) {
						if (this.b)
							throw new i.$gb(
								"Calling 'setIfNotSet' on a disposed TimeoutTimer",
							);
						this.a === -1 &&
							(this.a = setTimeout(() => {
								(this.a = -1), se();
							}, re));
					}
				}
				e.$Wh = O;
				class B {
					constructor() {
						(this.d = void 0), (this.f = !1);
					}
					cancel() {
						this.d?.dispose(), (this.d = void 0);
					}
					cancelAndSet(se, re, le = globalThis) {
						if (this.f)
							throw new i.$gb(
								"Calling 'cancelAndSet' on a disposed IntervalTimer",
							);
						this.cancel();
						const oe = le.setInterval(() => {
							se();
						}, re);
						this.d = (0, E.$Yc)(() => {
							le.clearInterval(oe), (this.d = void 0);
						});
					}
					dispose() {
						this.cancel(), (this.f = !0);
					}
				}
				e.$Xh = B;
				class U {
					constructor(se, re) {
						(this.b = -1),
							(this.a = se),
							(this.d = re),
							(this.f = this.g.bind(this));
					}
					dispose() {
						this.cancel(), (this.a = null);
					}
					cancel() {
						this.isScheduled() && (clearTimeout(this.b), (this.b = -1));
					}
					schedule(se = this.d) {
						this.cancel(), (this.b = setTimeout(this.f, se));
					}
					get delay() {
						return this.d;
					}
					set delay(se) {
						this.d = se;
					}
					isScheduled() {
						return this.b !== -1;
					}
					flush() {
						this.isScheduled() && (this.cancel(), this.h());
					}
					g() {
						(this.b = -1), this.a && this.h();
					}
					h() {
						this.a?.();
					}
				}
				e.$Yh = U;
				class z {
					constructor(se, re) {
						re % 1e3 !== 0 &&
							console.warn(
								`ProcessTimeRunOnceScheduler resolution is 1s, ${re}ms is not a multiple of 1000ms.`,
							),
							(this.a = se),
							(this.b = re),
							(this.d = 0),
							(this.f = -1),
							(this.g = this.h.bind(this));
					}
					dispose() {
						this.cancel(), (this.a = null);
					}
					cancel() {
						this.isScheduled() && (clearInterval(this.f), (this.f = -1));
					}
					schedule(se = this.b) {
						se % 1e3 !== 0 &&
							console.warn(
								`ProcessTimeRunOnceScheduler resolution is 1s, ${se}ms is not a multiple of 1000ms.`,
							),
							this.cancel(),
							(this.d = Math.ceil(se / 1e3)),
							(this.f = setInterval(this.g, 1e3));
					}
					isScheduled() {
						return this.f !== -1;
					}
					h() {
						this.d--,
							!(this.d > 0) &&
								(clearInterval(this.f), (this.f = -1), this.a?.());
					}
				}
				e.$Zh = z;
				class F extends U {
					constructor(se, re) {
						super(se, re), (this.j = []);
					}
					work(se) {
						this.j.push(se), this.isScheduled() || this.schedule();
					}
					h() {
						const se = this.j;
						(this.j = []), this.a?.(se);
					}
					dispose() {
						(this.j = []), super.dispose();
					}
				}
				e.$1h = F;
				class x extends E.$1c {
					constructor(se, re) {
						super(),
							(this.g = se),
							(this.h = re),
							(this.a = []),
							(this.b = this.D(new E.$2c())),
							(this.f = !1);
					}
					get pending() {
						return this.a.length;
					}
					work(se) {
						if (this.f) return !1;
						if (typeof this.g.maxBufferedWork == "number") {
							if (this.b.value) {
								if (this.pending + se.length > this.g.maxBufferedWork)
									return !1;
							} else if (
								this.pending + se.length - this.g.maxWorkChunkSize >
								this.g.maxBufferedWork
							)
								return !1;
						}
						for (const re of se) this.a.push(re);
						return this.b.value || this.j(), !0;
					}
					j() {
						this.h(this.a.splice(0, this.g.maxWorkChunkSize)),
							this.a.length > 0 &&
								((this.b.value = new U(() => {
									this.b.clear(), this.j();
								}, this.g.throttleDelay)),
								this.b.value.schedule());
					}
					dispose() {
						super.dispose(), (this.f = !0);
					}
				}
				(e.$2h = x),
					(function () {
						typeof globalThis.requestIdleCallback != "function" ||
						typeof globalThis.cancelIdleCallback != "function"
							? (e.$4h = (Z, se) => {
									(0, d.$E)(() => {
										if (re) return;
										const le = Date.now() + 15;
										se(
											Object.freeze({
												didTimeout: !0,
												timeRemaining() {
													return Math.max(0, le - Date.now());
												},
											}),
										);
									});
									let re = !1;
									return {
										dispose() {
											re || (re = !0);
										},
									};
								})
							: (e.$4h = (Z, se, re) => {
									const le = Z.requestIdleCallback(
										se,
										typeof re == "number" ? { timeout: re } : void 0,
									);
									let oe = !1;
									return {
										dispose() {
											oe || ((oe = !0), Z.cancelIdleCallback(le));
										},
									};
								}),
							(e.$3h = (Z) => (0, e.$4h)(globalThis, Z));
					})();
				class H {
					constructor(se, re) {
						(this.g = !1),
							(this.d = () => {
								try {
									this.j = re();
								} catch (le) {
									this.l = le;
								} finally {
									this.g = !0;
								}
							}),
							(this.f = (0, e.$4h)(se, () => this.d()));
					}
					dispose() {
						this.f.dispose();
					}
					get value() {
						if ((this.g || (this.f.dispose(), this.d()), this.l)) throw this.l;
						return this.j;
					}
					get isInitialized() {
						return this.g;
					}
				}
				e.$5h = H;
				class q extends H {
					constructor(se) {
						super(globalThis, se);
					}
				}
				e.$6h = q;
				async function V(Z, se, re) {
					let le;
					for (let oe = 0; oe < re; oe++)
						try {
							return await Z();
						} catch (ae) {
							(le = ae), await T(se);
						}
					throw le;
				}
				class G {
					isRunning(se) {
						return typeof se == "number" ? this.a?.taskId === se : !!this.a;
					}
					get running() {
						return this.a?.promise;
					}
					cancelRunning() {
						this.a?.cancel();
					}
					run(se, re, le) {
						return (
							(this.a = { taskId: se, cancel: () => le?.(), promise: re }),
							re.then(
								() => this.d(se),
								() => this.d(se),
							),
							re
						);
					}
					d(se) {
						this.a && se === this.a.taskId && ((this.a = void 0), this.f());
					}
					f() {
						if (this.b) {
							const se = this.b;
							(this.b = void 0),
								se.run().then(se.promiseResolve, se.promiseReject);
						}
					}
					queue(se) {
						if (this.b) this.b.run = se;
						else {
							const { promise: re, resolve: le, reject: oe } = o();
							this.b = {
								run: se,
								promise: re,
								promiseResolve: le,
								promiseReject: oe,
							};
						}
						return this.b.promise;
					}
					hasQueued() {
						return !!this.b;
					}
					async join() {
						return this.b?.promise ?? this.a?.promise;
					}
				}
				e.$8h = G;
				class K {
					constructor(se, re = () => Date.now()) {
						(this.d = se), (this.f = re), (this.a = 0), (this.b = 0);
					}
					increment() {
						const se = this.f();
						return (
							se - this.a > this.d && ((this.a = se), (this.b = 0)),
							this.b++,
							this.b
						);
					}
				}
				e.$9h = K;
				var J;
				(function (Z) {
					(Z[(Z.Resolved = 0)] = "Resolved"),
						(Z[(Z.Rejected = 1)] = "Rejected");
				})(J || (J = {}));
				class W {
					get isRejected() {
						return this.d?.outcome === J.Rejected;
					}
					get isResolved() {
						return this.d?.outcome === J.Resolved;
					}
					get isSettled() {
						return !!this.d;
					}
					get value() {
						return this.d?.outcome === J.Resolved ? this.d?.value : void 0;
					}
					constructor() {
						this.p = new Promise((se, re) => {
							(this.a = se), (this.b = re);
						});
					}
					complete(se) {
						return new Promise((re) => {
							this.a(se), (this.d = { outcome: J.Resolved, value: se }), re();
						});
					}
					error(se) {
						return new Promise((re) => {
							this.b(se), (this.d = { outcome: J.Rejected, value: se }), re();
						});
					}
					cancel() {
						return this.error(new i.$9());
					}
				}
				e.$0h = W;
				var X;
				(function (Z) {
					async function se(le) {
						let oe;
						const ae = await Promise.all(
							le.map((pe) =>
								pe.then(
									($e) => $e,
									($e) => {
										oe || (oe = $e);
									},
								),
							),
						);
						if (typeof oe < "u") throw oe;
						return ae;
					}
					Z.settled = se;
					function re(le) {
						return new Promise(async (oe, ae) => {
							try {
								await le(oe, ae);
							} catch (pe) {
								ae(pe);
							}
						});
					}
					Z.withAsyncBody = re;
				})(X || (e.Promises = X = {}));
				class Y {
					get value() {
						return this.a;
					}
					get error() {
						return this.b;
					}
					get isResolved() {
						return this.d;
					}
					constructor(se) {
						(this.a = void 0),
							(this.b = void 0),
							(this.d = !1),
							(this.promise = se.then(
								(re) => ((this.a = re), (this.d = !0), re),
								(re) => {
									throw ((this.b = re), (this.d = !0), re);
								},
							));
					}
					requireValue() {
						if (!this.d) throw new i.$gb("Promise is not resolved yet");
						if (this.b) throw this.b;
						return this.a;
					}
				}
				e.$$h = Y;
				class ie {
					constructor(se) {
						(this.b = se), (this.a = new r.$Y(() => new Y(this.b())));
					}
					requireValue() {
						return this.a.value.requireValue();
					}
					getPromise() {
						return this.a.value.promise;
					}
					get currentValue() {
						return this.a.rawValue?.value;
					}
				}
				e.$_h = ie;
				var ne;
				(function (Z) {
					(Z[(Z.Initial = 0)] = "Initial"),
						(Z[(Z.DoneOK = 1)] = "DoneOK"),
						(Z[(Z.DoneError = 2)] = "DoneError");
				})(ne || (ne = {}));
				class ee {
					static fromArray(se) {
						return new ee((re) => {
							re.emitMany(se);
						});
					}
					static fromPromise(se) {
						return new ee(async (re) => {
							re.emitMany(await se);
						});
					}
					static fromPromises(se) {
						return new ee(async (re) => {
							await Promise.all(se.map(async (le) => re.emitOne(await le)));
						});
					}
					static merge(se) {
						return new ee(async (re) => {
							await Promise.all(
								se.map(async (le) => {
									for await (const oe of le) re.emitOne(oe);
								}),
							);
						});
					}
					static {
						this.EMPTY = ee.fromArray([]);
					}
					constructor(se, re) {
						(this.a = ne.Initial),
							(this.b = []),
							(this.d = null),
							(this.f = re),
							(this.g = new w.$re()),
							queueMicrotask(async () => {
								const le = {
									emitOne: (oe) => this.h(oe),
									emitMany: (oe) => this.j(oe),
									reject: (oe) => this.l(oe),
								};
								try {
									await Promise.resolve(se(le)), this.k();
								} catch (oe) {
									this.l(oe);
								} finally {
									(le.emitOne = void 0),
										(le.emitMany = void 0),
										(le.reject = void 0);
								}
							});
					}
					[Symbol.asyncIterator]() {
						let se = 0;
						return {
							next: async () => {
								do {
									if (this.a === ne.DoneError) throw this.d;
									if (se < this.b.length)
										return { done: !1, value: this.b[se++] };
									if (this.a === ne.DoneOK) return { done: !0, value: void 0 };
									await w.Event.toPromise(this.g.event);
								} while (!0);
							},
							return: async () => (this.f?.(), { done: !0, value: void 0 }),
						};
					}
					static map(se, re) {
						return new ee(async (le) => {
							for await (const oe of se) le.emitOne(re(oe));
						});
					}
					map(se) {
						return ee.map(this, se);
					}
					static filter(se, re) {
						return new ee(async (le) => {
							for await (const oe of se) re(oe) && le.emitOne(oe);
						});
					}
					filter(se) {
						return ee.filter(this, se);
					}
					static coalesce(se) {
						return ee.filter(se, (re) => !!re);
					}
					coalesce() {
						return ee.coalesce(this);
					}
					static async toPromise(se) {
						const re = [];
						for await (const le of se) re.push(le);
						return re;
					}
					toPromise() {
						return ee.toPromise(this);
					}
					h(se) {
						this.a === ne.Initial && (this.b.push(se), this.g.fire());
					}
					j(se) {
						this.a === ne.Initial &&
							((this.b = this.b.concat(se)), this.g.fire());
					}
					k() {
						this.a === ne.Initial && ((this.a = ne.DoneOK), this.g.fire());
					}
					l(se) {
						this.a === ne.Initial &&
							((this.a = ne.DoneError), (this.d = se), this.g.fire());
					}
				}
				e.$ai = ee;
				class _ extends ee {
					constructor(se, re) {
						super(re), (this.m = se);
					}
					cancel() {
						this.m.cancel();
					}
				}
				e.$bi = _;
				function te(Z) {
					const se = new t.$Ce(),
						re = Z(se.token);
					return new _(se, async (le) => {
						const oe = se.token.onCancellationRequested(() => {
							oe.dispose(), se.dispose(), le.reject(new i.$9());
						});
						try {
							for await (const ae of re) {
								if (se.token.isCancellationRequested) return;
								le.emitOne(ae);
							}
							oe.dispose(), se.dispose();
						} catch (ae) {
							oe.dispose(), se.dispose(), le.reject(ae);
						}
					});
				}
				class Q {
					constructor(se) {
						(this.a = new W()),
							(this.b = new ee((oe) => {
								if (re) {
									oe.reject(re);
									return;
								}
								return (
									le && oe.emitMany(le),
									(this.d = (ae) => oe.reject(ae)),
									(this.f = (ae) => oe.emitOne(ae)),
									this.a.p
								);
							}, se));
						let re, le;
						(this.f = (oe) => {
							le || (le = []), le.push(oe);
						}),
							(this.d = (oe) => {
								re || (re = oe);
							});
					}
					get asyncIterable() {
						return this.b;
					}
					resolve() {
						this.a.complete();
					}
					reject(se) {
						this.d(se), this.a.complete();
					}
					emitOne(se) {
						this.f(se);
					}
				}
				e.$di = Q;
			},
		)
