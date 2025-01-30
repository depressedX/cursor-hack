import '../../../require.js';
import '../../../exports.js';
import './errors.js';
import './functional.js';
import './lifecycle.js';
import './linkedList.js';
import './stopwatch.js';
define(
			de[6],
			he([1, 0, 29, 288, 3, 273, 162]),
			function (ce /*require*/,
 e /*exports*/,
 t /*errors*/,
 i /*functional*/,
 w /*lifecycle*/,
 E /*linkedList*/,
 C /*stopwatch*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Be =
						e.$Ae =
						e.$ze =
						e.$ye =
						e.$xe =
						e.$we =
						e.$ve =
						e.$ue =
						e.$te =
						e.$se =
						e.$re =
						e.$qe =
						e.$pe =
						e.$ne =
						e.Event =
							void 0),
					(e.$oe = c);
				const d = !1,
					m = !1,
					r = !1;
				var u;
				(function (O) {
					O.None = () => w.$1c.None;
					function B(ue) {
						if (r) {
							const { onDidAddListener: fe } = ue,
								me = g.create();
							let ve = 0;
							ue.onDidAddListener = () => {
								++ve === 2 &&
									(console.warn(
										"snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here",
									),
									me.print()),
									fe?.();
							};
						}
					}
					function U(ue, fe) {
						return X(ue, () => {}, 0, void 0, !0, void 0, fe);
					}
					O.defer = U;
					function z(ue) {
						return (fe, me = null, ve) => {
							let ge = !1,
								be;
							return (
								(be = ue(
									(Ce) => {
										if (!ge)
											return be ? be.dispose() : (ge = !0), fe.call(me, Ce);
									},
									null,
									ve,
								)),
								ge && be.dispose(),
								be
							);
						};
					}
					O.once = z;
					function F(ue, fe) {
						return O.once(O.filter(ue, fe));
					}
					O.onceIf = F;
					function x(ue, fe, me) {
						return J(
							(ve, ge = null, be) => ue((Ce) => ve.call(ge, fe(Ce)), null, be),
							me,
						);
					}
					O.map = x;
					function H(ue, fe, me) {
						return J(
							(ve, ge = null, be) =>
								ue(
									(Ce) => {
										fe(Ce), ve.call(ge, Ce);
									},
									null,
									be,
								),
							me,
						);
					}
					O.forEach = H;
					function q(ue, fe, me) {
						return J(
							(ve, ge = null, be) =>
								ue((Ce) => fe(Ce) && ve.call(ge, Ce), null, be),
							me,
						);
					}
					O.filter = q;
					function V(ue) {
						return ue;
					}
					O.signal = V;
					function G(...ue) {
						return (fe, me = null, ve) => {
							const ge = (0, w.$Xc)(
								...ue.map((be) => be((Ce) => fe.call(me, Ce))),
							);
							return W(ge, ve);
						};
					}
					O.any = G;
					function K(ue, fe, me, ve) {
						let ge = me;
						return x(ue, (be) => ((ge = fe(ge, be)), ge), ve);
					}
					O.reduce = K;
					function J(ue, fe) {
						let me;
						const ve = {
							onWillAddFirstListener() {
								me = ue(ge.fire, ge);
							},
							onDidRemoveLastListener() {
								me?.dispose();
							},
						};
						fe || B(ve);
						const ge = new $(ve);
						return fe?.add(ge), ge.event;
					}
					function W(ue, fe) {
						return fe instanceof Array ? fe.push(ue) : fe && fe.add(ue), ue;
					}
					function X(ue, fe, me = 100, ve = !1, ge = !1, be, Ce) {
						let Le,
							Fe,
							Oe,
							xe = 0,
							He;
						const Ke = {
							leakWarningThreshold: be,
							onWillAddFirstListener() {
								Le = ue((Te) => {
									xe++,
										(Fe = fe(Fe, Te)),
										ve && !Oe && (Je.fire(Fe), (Fe = void 0)),
										(He = () => {
											const Ee = Fe;
											(Fe = void 0),
												(Oe = void 0),
												(!ve || xe > 1) && Je.fire(Ee),
												(xe = 0);
										}),
										typeof me == "number"
											? (clearTimeout(Oe), (Oe = setTimeout(He, me)))
											: Oe === void 0 && ((Oe = 0), queueMicrotask(He));
								});
							},
							onWillRemoveListener() {
								ge && xe > 0 && He?.();
							},
							onDidRemoveLastListener() {
								(He = void 0), Le.dispose();
							},
						};
						Ce || B(Ke);
						const Je = new $(Ke);
						return Ce?.add(Je), Je.event;
					}
					O.debounce = X;
					function Y(ue, fe = 0, me) {
						return O.debounce(
							ue,
							(ve, ge) => (ve ? (ve.push(ge), ve) : [ge]),
							fe,
							void 0,
							!0,
							void 0,
							me,
						);
					}
					O.accumulate = Y;
					function ie(ue, fe = (ve, ge) => ve === ge, me) {
						let ve = !0,
							ge;
						return q(
							ue,
							(be) => {
								const Ce = ve || !fe(be, ge);
								return (ve = !1), (ge = be), Ce;
							},
							me,
						);
					}
					O.latch = ie;
					function ne(ue, fe, me) {
						return [O.filter(ue, fe, me), O.filter(ue, (ve) => !fe(ve), me)];
					}
					O.split = ne;
					function ee(ue, fe = !1, me = [], ve) {
						let ge = me.slice(),
							be = ue((Fe) => {
								ge ? ge.push(Fe) : Le.fire(Fe);
							});
						ve && ve.add(be);
						const Ce = () => {
								ge?.forEach((Fe) => Le.fire(Fe)), (ge = null);
							},
							Le = new $({
								onWillAddFirstListener() {
									be || ((be = ue((Fe) => Le.fire(Fe))), ve && ve.add(be));
								},
								onDidAddFirstListener() {
									ge && (fe ? setTimeout(Ce) : Ce());
								},
								onDidRemoveLastListener() {
									be && be.dispose(), (be = null);
								},
							});
						return ve && ve.add(Le), Le.event;
					}
					O.buffer = ee;
					function _(ue, fe) {
						return (ve, ge, be) => {
							const Ce = fe(new Q());
							return ue(
								function (Le) {
									const Fe = Ce.evaluate(Le);
									Fe !== te && ve.call(ge, Fe);
								},
								void 0,
								be,
							);
						};
					}
					O.chain = _;
					const te = Symbol("HaltChainable");
					class Q {
						constructor() {
							this.f = [];
						}
						map(fe) {
							return this.f.push(fe), this;
						}
						forEach(fe) {
							return this.f.push((me) => (fe(me), me)), this;
						}
						filter(fe) {
							return this.f.push((me) => (fe(me) ? me : te)), this;
						}
						reduce(fe, me) {
							let ve = me;
							return this.f.push((ge) => ((ve = fe(ve, ge)), ve)), this;
						}
						latch(fe = (me, ve) => me === ve) {
							let me = !0,
								ve;
							return (
								this.f.push((ge) => {
									const be = me || !fe(ge, ve);
									return (me = !1), (ve = ge), be ? ge : te;
								}),
								this
							);
						}
						evaluate(fe) {
							for (const me of this.f) if (((fe = me(fe)), fe === te)) break;
							return fe;
						}
					}
					function Z(ue, fe, me = (ve) => ve) {
						const ve = (...Le) => Ce.fire(me(...Le)),
							ge = () => ue.on(fe, ve),
							be = () => ue.removeListener(fe, ve),
							Ce = new $({
								onWillAddFirstListener: ge,
								onDidRemoveLastListener: be,
							});
						return Ce.event;
					}
					O.fromNodeEventEmitter = Z;
					function se(ue, fe, me = (ve) => ve) {
						const ve = (...Le) => Ce.fire(me(...Le)),
							ge = () => ue.addEventListener(fe, ve),
							be = () => ue.removeEventListener(fe, ve),
							Ce = new $({
								onWillAddFirstListener: ge,
								onDidRemoveLastListener: be,
							});
						return Ce.event;
					}
					O.fromDOMEventEmitter = se;
					function re(ue) {
						return new Promise((fe) => z(ue)(fe));
					}
					O.toPromise = re;
					function le(ue) {
						const fe = new $();
						return (
							ue
								.then(
									(me) => {
										fe.fire(me);
									},
									() => {
										fe.fire(void 0);
									},
								)
								.finally(() => {
									fe.dispose();
								}),
							fe.event
						);
					}
					O.fromPromise = le;
					function oe(ue, fe) {
						return ue((me) => fe.fire(me));
					}
					O.forward = oe;
					function ae(ue, fe, me) {
						return fe(me), ue((ve) => fe(ve));
					}
					O.runAndSubscribe = ae;
					class pe {
						constructor(fe, me) {
							(this._observable = fe), (this.f = 0), (this.g = !1);
							const ve = {
								onWillAddFirstListener: () => {
									fe.addObserver(this), this._observable.reportChanges();
								},
								onDidRemoveLastListener: () => {
									fe.removeObserver(this);
								},
							};
							me || B(ve),
								(this.emitter = new $(ve)),
								me && me.add(this.emitter);
						}
						beginUpdate(fe) {
							this.f++;
						}
						handlePossibleChange(fe) {}
						handleChange(fe, me) {
							this.g = !0;
						}
						endUpdate(fe) {
							this.f--,
								this.f === 0 &&
									(this._observable.reportChanges(),
									this.g &&
										((this.g = !1), this.emitter.fire(this._observable.get())));
						}
					}
					function $e(ue, fe) {
						return new pe(ue, fe).emitter.event;
					}
					O.fromObservable = $e;
					function ye(ue) {
						return (fe, me, ve) => {
							let ge = 0,
								be = !1;
							const Ce = {
								beginUpdate() {
									ge++;
								},
								endUpdate() {
									ge--,
										ge === 0 &&
											(ue.reportChanges(), be && ((be = !1), fe.call(me)));
								},
								handlePossibleChange() {},
								handleChange() {
									be = !0;
								},
							};
							ue.addObserver(Ce), ue.reportChanges();
							const Le = {
								dispose() {
									ue.removeObserver(Ce);
								},
							};
							return (
								ve instanceof w.$Zc
									? ve.add(Le)
									: Array.isArray(ve) && ve.push(Le),
								Le
							);
						};
					}
					O.fromObservableLight = ye;
				})(u || (e.Event = u = {}));
				class a {
					static {
						this.all = new Set();
					}
					static {
						this.f = 0;
					}
					constructor(B) {
						(this.listenerCount = 0),
							(this.invocationCount = 0),
							(this.elapsedOverall = 0),
							(this.durations = []),
							(this.name = `${B}_${a.f++}`),
							a.all.add(this);
					}
					start(B) {
						(this.g = new C.$le()), (this.listenerCount = B);
					}
					stop() {
						if (this.g) {
							const B = this.g.elapsed();
							this.durations.push(B),
								(this.elapsedOverall += B),
								(this.invocationCount += 1),
								(this.g = void 0);
						}
					}
				}
				e.$ne = a;
				let h = -1;
				function c(O) {
					const B = h;
					return (
						(h = O),
						{
							dispose() {
								h = B;
							},
						}
					);
				}
				class n {
					static {
						this.f = 1;
					}
					constructor(B, U, z = (n.f++).toString(16).padStart(3, "0")) {
						(this.j = B), (this.threshold = U), (this.name = z), (this.h = 0);
					}
					dispose() {
						this.g?.clear();
					}
					check(B, U) {
						const z = this.threshold;
						if (z <= 0 || U < z) return;
						this.g || (this.g = new Map());
						const F = this.g.get(B.value) || 0;
						if ((this.g.set(B.value, F + 1), (this.h -= 1), this.h <= 0)) {
							this.h = z * 0.5;
							const [x, H] = this.getMostFrequentStack(),
								q = `[${this.name}] potential listener LEAK detected, having ${U} listeners already. MOST frequent listener (${H}):`;
							console.warn(q), console.warn(x);
							const V = new p(q, x);
							this.j(V);
						}
						return () => {
							const x = this.g.get(B.value) || 0;
							this.g.set(B.value, x - 1);
						};
					}
					getMostFrequentStack() {
						if (!this.g) return;
						let B,
							U = 0;
						for (const [z, F] of this.g)
							(!B || U < F) && ((B = [z, F]), (U = F));
						return B;
					}
				}
				class g {
					static create() {
						const B = new Error();
						return new g(B.stack ?? "");
					}
					constructor(B) {
						this.value = B;
					}
					print() {
						console.warn(
							this.value
								.split(`
`)
								.slice(2)
								.join(`
`),
						);
					}
				}
				class p extends Error {
					constructor(B, U) {
						super(B), (this.name = "ListenerLeakError"), (this.stack = U);
					}
				}
				e.$pe = p;
				class o extends Error {
					constructor(B, U) {
						super(B), (this.name = "ListenerRefusalError"), (this.stack = U);
					}
				}
				e.$qe = o;
				let f = 0;
				class b {
					constructor(B) {
						(this.value = B), (this.id = f++);
					}
				}
				const s = 2,
					l = (O, B) => {
						if (O instanceof b) B(O);
						else
							for (let U = 0; U < O.length; U++) {
								const z = O[U];
								z && B(z);
							}
					};
				let y;
				if (d) {
					const O = [];
					setInterval(() => {
						O.length !== 0 &&
							(console.warn(
								"[LEAKING LISTENERS] GC'ed these listeners that were NOT yet disposed:",
							),
							console.warn(
								O.join(`
`),
							),
							(O.length = 0));
					}, 3e3),
						(y = new FinalizationRegistry((B) => {
							typeof B == "string" && O.push(B);
						}));
				}
				class $ {
					constructor(B) {
						(this.z = 0),
							(this.f = B),
							(this.g =
								h > 0 || this.f?.leakWarningThreshold
									? new n(
											B?.onListenerError ?? t.$4,
											this.f?.leakWarningThreshold ?? h,
										)
									: void 0),
							(this.j = this.f?._profName ? new a(this.f._profName) : void 0),
							(this.w = this.f?.deliveryQueue);
					}
					dispose() {
						if (!this.m) {
							if (
								((this.m = !0),
								this.w?.current === this && this.w.reset(),
								this.u)
							) {
								if (m) {
									const B = this.u;
									queueMicrotask(() => {
										l(B, (U) => U.stack?.print());
									});
								}
								(this.u = void 0), (this.z = 0);
							}
							this.f?.onDidRemoveLastListener?.(), this.g?.dispose();
						}
					}
					get event() {
						return (
							(this.q ??= (B, U, z) => {
								if (this.g && this.z > this.g.threshold ** 2) {
									const V = `[${this.g.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this.z} vs ${this.g.threshold})`;
									console.warn(V);
									const G = this.g.getMostFrequentStack() ?? [
											"UNKNOWN stack",
											-1,
										],
										K = new o(
											`${V}. HINT: Stack shows most frequent listener (${G[1]}-times)`,
											G[0],
										);
									return (this.f?.onListenerError || t.$4)(K), w.$1c.None;
								}
								if (this.m) return w.$1c.None;
								U && (B = B.bind(U));
								const F = new b(B);
								let x, H;
								this.g &&
									this.z >= Math.ceil(this.g.threshold * 0.2) &&
									((F.stack = g.create()),
									(x = this.g.check(F.stack, this.z + 1))),
									m && (F.stack = H ?? g.create()),
									this.u
										? this.u instanceof b
											? ((this.w ??= new S()), (this.u = [this.u, F]))
											: this.u.push(F)
										: (this.f?.onWillAddFirstListener?.(this),
											(this.u = F),
											this.f?.onDidAddFirstListener?.(this)),
									this.z++;
								const q = (0, w.$Yc)(() => {
									y?.unregister(q), x?.(), this.A(F);
								});
								if (
									(z instanceof w.$Zc
										? z.add(q)
										: Array.isArray(z) && z.push(q),
									y)
								) {
									const V = new Error().stack
											.split(`
`)
											.slice(2, 3)
											.join(`
`)
											.trim(),
										G =
											/(file:|vscode-file:\/\/vscode-app)?(\/[^:]*:\d+:\d+)/.exec(
												V,
											);
									y.register(q, G?.[2] ?? V, q);
								}
								return q;
							}),
							this.q
						);
					}
					A(B) {
						if ((this.f?.onWillRemoveListener?.(this), !this.u)) return;
						if (this.z === 1) {
							(this.u = void 0),
								this.f?.onDidRemoveLastListener?.(this),
								(this.z = 0);
							return;
						}
						const U = this.u,
							z = U.indexOf(B);
						if (z === -1)
							throw (
								(console.log("disposed?", this.m),
								console.log("size?", this.z),
								console.log("arr?", JSON.stringify(this.u)),
								new Error("Attempted to dispose unknown listener"))
							);
						this.z--, (U[z] = void 0);
						const F = this.w.current === this;
						if (this.z * s <= U.length) {
							let x = 0;
							for (let H = 0; H < U.length; H++)
								U[H]
									? (U[x++] = U[H])
									: F && (this.w.end--, x < this.w.i && this.w.i--);
							U.length = x;
						}
					}
					B(B, U) {
						if (!B) return;
						const z = this.f?.onListenerError || t.$4;
						if (!z) {
							B.value(U);
							return;
						}
						try {
							B.value(U);
						} catch (F) {
							z(F);
						}
					}
					C(B) {
						const U = B.current.u;
						for (; B.i < B.end; ) this.B(U[B.i++], B.value);
						B.reset();
					}
					fire(B) {
						if (
							(this.w?.current && (this.C(this.w), this.j?.stop()),
							this.j?.start(this.z),
							this.u)
						)
							if (this.u instanceof b) this.B(this.u, B);
							else {
								const U = this.w;
								U.enqueue(this, B, this.u.length), this.C(U);
							}
						this.j?.stop();
					}
					hasListeners() {
						return this.z > 0;
					}
				}
				e.$re = $;
				const v = () => new S();
				e.$se = v;
				class S {
					constructor() {
						(this.i = -1), (this.end = 0);
					}
					enqueue(B, U, z) {
						(this.i = 0), (this.end = z), (this.current = B), (this.value = U);
					}
					reset() {
						(this.i = this.end), (this.current = void 0), (this.value = void 0);
					}
				}
				class I extends $ {
					async fireAsync(B, U, z) {
						if (this.u)
							for (
								this.h || (this.h = new E.$$c()),
									l(this.u, (F) => this.h.push([F.value, B]));
								this.h.size > 0 && !U.isCancellationRequested;
							) {
								const [F, x] = this.h.shift(),
									H = [],
									q = {
										...x,
										token: U,
										waitUntil: (V) => {
											if (Object.isFrozen(H))
												throw new Error(
													"waitUntil can NOT be called asynchronous",
												);
											z && (V = z(V, F)), H.push(V);
										},
									};
								try {
									F(q);
								} catch (V) {
									(0, t.$4)(V);
									continue;
								}
								Object.freeze(H),
									await Promise.allSettled(H).then((V) => {
										for (const G of V)
											G.status === "rejected" && (0, t.$4)(G.reason);
									});
							}
					}
				}
				e.$te = I;
				class T extends $ {
					get isPaused() {
						return this.h !== 0;
					}
					constructor(B) {
						super(B), (this.h = 0), (this.s = new E.$$c()), (this.t = B?.merge);
					}
					pause() {
						this.h++;
					}
					resume() {
						if (this.h !== 0 && --this.h === 0)
							if (this.t) {
								if (this.s.size > 0) {
									const B = Array.from(this.s);
									this.s.clear(), super.fire(this.t(B));
								}
							} else
								for (; !this.h && this.s.size !== 0; )
									super.fire(this.s.shift());
					}
					fire(B) {
						this.z && (this.h !== 0 ? this.s.push(B) : super.fire(B));
					}
				}
				e.$ue = T;
				class P extends T {
					constructor(B) {
						super(B), (this.k = B.delay ?? 100);
					}
					fire(B) {
						this.o ||
							(this.pause(),
							(this.o = setTimeout(() => {
								(this.o = void 0), this.resume();
							}, this.k))),
							super.fire(B);
					}
				}
				e.$ve = P;
				class k extends $ {
					constructor(B) {
						super(B), (this.h = []), (this.k = B?.merge);
					}
					fire(B) {
						this.hasListeners() &&
							(this.h.push(B),
							this.h.length === 1 &&
								queueMicrotask(() => {
									this.k
										? super.fire(this.k(this.h))
										: this.h.forEach((U) => super.fire(U)),
										(this.h = []);
								}));
					}
				}
				e.$we = k;
				class L {
					constructor() {
						(this.g = !1),
							(this.h = []),
							(this.f = new $({
								onWillAddFirstListener: () => this.j(),
								onDidRemoveLastListener: () => this.k(),
							}));
					}
					get event() {
						return this.f.event;
					}
					add(B) {
						const U = { event: B, listener: null };
						this.h.push(U), this.g && this.m(U);
						const z = () => {
							this.g && this.o(U);
							const F = this.h.indexOf(U);
							this.h.splice(F, 1);
						};
						return (0, w.$Yc)((0, i.$hb)(z));
					}
					j() {
						(this.g = !0), this.h.forEach((B) => this.m(B));
					}
					k() {
						(this.g = !1), this.h.forEach((B) => this.o(B));
					}
					m(B) {
						B.listener = B.event((U) => this.f.fire(U));
					}
					o(B) {
						B.listener?.dispose(), (B.listener = null);
					}
					dispose() {
						this.f.dispose();
						for (const B of this.h) B.listener?.dispose();
						this.h = [];
					}
				}
				e.$xe = L;
				class D {
					constructor(B, U, z, F) {
						this.f = new w.$Zc();
						const x = this.f.add(new L()),
							H = this.f.add(new w.$0c());
						function q(V) {
							H.set(V, x.add(F(V)));
						}
						for (const V of B) q(V);
						this.f.add(
							U((V) => {
								q(V);
							}),
						),
							this.f.add(
								z((V) => {
									H.deleteAndDispose(V);
								}),
							),
							(this.event = x.event);
					}
					dispose() {
						this.f.dispose();
					}
				}
				e.$ye = D;
				class M {
					constructor() {
						this.f = [];
					}
					wrapEvent(B, U, z) {
						return (F, x, H) =>
							B(
								(q) => {
									const V = this.f[this.f.length - 1];
									if (!U) {
										V ? V.buffers.push(() => F.call(x, q)) : F.call(x, q);
										return;
									}
									const G = V;
									if (!G) {
										F.call(x, U(z, q));
										return;
									}
									(G.items ??= []),
										G.items.push(q),
										G.buffers.length === 0 &&
											V.buffers.push(() => {
												(G.reducedResult ??= z
													? G.items.reduce(U, z)
													: G.items.reduce(U)),
													F.call(x, G.reducedResult);
											});
								},
								void 0,
								H,
							);
					}
					bufferEvents(B) {
						const U = { buffers: new Array() };
						this.f.push(U);
						const z = B();
						return this.f.pop(), U.buffers.forEach((F) => F()), z;
					}
				}
				e.$ze = M;
				class N {
					constructor() {
						(this.f = !1),
							(this.g = u.None),
							(this.h = w.$1c.None),
							(this.j = new $({
								onDidAddFirstListener: () => {
									(this.f = !0), (this.h = this.g(this.j.fire, this.j));
								},
								onDidRemoveLastListener: () => {
									(this.f = !1), this.h.dispose();
								},
							})),
							(this.event = this.j.event);
					}
					set input(B) {
						(this.g = B),
							this.f && (this.h.dispose(), (this.h = B(this.j.fire, this.j)));
					}
					dispose() {
						this.h.dispose(), this.j.dispose();
					}
				}
				e.$Ae = N;
				class A {
					static const(B) {
						return new R(B);
					}
					constructor(B) {
						(this.g = B), (this.f = new $()), (this.onDidChange = this.f.event);
					}
					get value() {
						return this.g;
					}
					set value(B) {
						B !== this.g && ((this.g = B), this.f.fire(void 0));
					}
				}
				e.$Be = A;
				class R {
					constructor(B) {
						(this.value = B), (this.onDidChange = u.None);
					}
				}
			},
		),
		