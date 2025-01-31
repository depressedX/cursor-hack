import '../../../../require.js';
import '../../../../exports.js';
import '../event.js';
import '../lifecycle.js';
import './autorun.js';
import './base.js';
import './debugName.js';
import './derived.js';
import './logging.js';
import '../errors.js';
import '../equals.js';
define(
			de[457],
			he([1, 0, 6, 3, 1133, 407, 648, 319, 742, 29, 433]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*autorun*/,
 E /*base*/,
 C /*debugName*/,
 d /*derived*/,
 m /*logging*/,
 r /*errors*/,
 u /*equals*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Md = e.$Id = e.$Ad = void 0),
					(e.$wd = a),
					(e.$xd = c),
					(e.$yd = n),
					(e.$zd = g),
					(e.$Bd = o),
					(e.$Cd = b),
					(e.$Dd = l),
					(e.$Ed = y),
					(e.$Fd = $),
					(e.$Gd = v),
					(e.$Hd = S),
					(e.$Jd = T),
					(e.$Kd = P),
					(e.$Ld = k),
					(e.$Nd = M),
					(e.$Od = N),
					(e.$Pd = A);
				function a(R) {
					return new h(R);
				}
				class h extends E.$5d {
					constructor(O) {
						super(), (this.b = O);
					}
					get debugName() {
						return this.toString();
					}
					get() {
						return this.b;
					}
					addObserver(O) {}
					removeObserver(O) {}
					toString() {
						return `Const: ${this.b}`;
					}
				}
				function c(R) {
					const O = (0, E.$_d)("promiseValue", {});
					return (
						R.then((B) => {
							O.set({ value: B }, void 0);
						}),
						O
					);
				}
				function n(...R) {
					let O, B, U;
					return (
						R.length === 3 ? ([O, B, U] = R) : ([B, U] = R),
						new p(
							new C.$gd(O, void 0, U),
							B,
							U,
							() => p.globalTransaction,
							u.$_c,
						)
					);
				}
				function g(R, O, B) {
					return new p(
						new C.$gd(R.owner, R.debugName, R.debugReferenceFn ?? B),
						O,
						B,
						() => p.globalTransaction,
						R.equalsFn ?? u.$_c,
					);
				}
				class p extends E.$6d {
					constructor(O, B, U, z, F) {
						super(),
							(this.j = O),
							(this.k = B),
							(this._getValue = U),
							(this.l = z),
							(this.n = F),
							(this.g = !1),
							(this.r = (x) => {
								const H = this._getValue(x),
									q = this.e,
									V = !this.g || !this.n(q, H);
								let G = !1;
								V &&
									((this.e = H),
									this.g &&
										((G = !0),
										(0, E.$0d)(
											this.l(),
											(K) => {
												(0, m.$Rd)()?.handleFromEventObservableTriggered(this, {
													oldValue: q,
													newValue: H,
													change: void 0,
													didChange: V,
													hadValue: this.g,
												});
												for (const J of this.b)
													K.updateObserver(J, this),
														J.handleChange(this, void 0);
											},
											() => {
												const K = this.p();
												return "Event fired" + (K ? `: ${K}` : "");
											},
										)),
									(this.g = !0)),
									G ||
										(0, m.$Rd)()?.handleFromEventObservableTriggered(this, {
											oldValue: q,
											newValue: H,
											change: void 0,
											didChange: V,
											hadValue: this.g,
										});
							});
					}
					p() {
						return this.j.getDebugName(this);
					}
					get debugName() {
						const O = this.p();
						return "From Event" + (O ? `: ${O}` : "");
					}
					c() {
						this.h = this.k(this.r);
					}
					f() {
						this.h.dispose(),
							(this.h = void 0),
							(this.g = !1),
							(this.e = void 0);
					}
					get() {
						return this.h
							? (this.g || this.r(void 0), this.e)
							: this._getValue(void 0);
					}
				}
				(e.$Ad = p),
					(function (R) {
						R.Observer = p;
						function O(B, U) {
							let z = !1;
							p.globalTransaction === void 0 &&
								((p.globalTransaction = B), (z = !0));
							try {
								U();
							} finally {
								z && (p.globalTransaction = void 0);
							}
						}
						R.batchEventsGlobally = O;
					})(n || (e.$yd = n = {}));
				function o(R, O) {
					return new f(R, O);
				}
				class f extends E.$6d {
					constructor(O, B) {
						super(),
							(this.debugName = O),
							(this.g = B),
							(this.j = () => {
								(0, E.$7d)(
									(U) => {
										for (const z of this.b)
											U.updateObserver(z, this), z.handleChange(this, void 0);
									},
									() => this.debugName,
								);
							});
					}
					c() {
						this.e = this.g(this.j);
					}
					f() {
						this.e.dispose(), (this.e = void 0);
					}
					get() {}
				}
				function b(R) {
					return typeof R == "string" ? new s(R) : new s(void 0, R);
				}
				class s extends E.$6d {
					get debugName() {
						return (
							new C.$gd(this.g, this.e, void 0).getDebugName(this) ??
							"Observable Signal"
						);
					}
					toString() {
						return this.debugName;
					}
					constructor(O, B) {
						super(), (this.e = O), (this.g = B);
					}
					trigger(O, B) {
						if (!O) {
							(0, E.$7d)(
								(U) => {
									this.trigger(U, B);
								},
								() => `Trigger signal ${this.debugName}`,
							);
							return;
						}
						for (const U of this.b)
							O.updateObserver(U, this), U.handleChange(this, B);
					}
					get() {}
				}
				function l(R, O, B) {
					const U = (0, E.$_d)("debounced", void 0);
					let z;
					return (
						B.add(
							(0, w.$pd)((F) => {
								const x = R.read(F);
								z && clearTimeout(z),
									(z = setTimeout(() => {
										(0, E.$7d)((H) => {
											U.set(x, H);
										});
									}, O));
							}),
						),
						U
					);
				}
				function y(R, O) {
					let B = !1,
						U,
						z;
					return n(
						(F) => {
							const x = (0, w.$pd)((H) => {
								const q = R.read(H);
								B
									? (z && clearTimeout(z),
										(z = setTimeout(() => {
											(U = q), F();
										}, O)))
									: ((B = !0), (U = q));
							});
							return {
								dispose() {
									x.dispose(), (B = !1), (U = void 0);
								},
							};
						},
						() => (B ? U : R.get()),
					);
				}
				function $(R, O, B) {
					const U = (0, E.$_d)("triggeredRecently", !1);
					let z;
					return (
						B.add(
							R(() => {
								U.set(!0, void 0),
									z && clearTimeout(z),
									(z = setTimeout(() => {
										U.set(!1, void 0);
									}, O));
							}),
						),
						U
					);
				}
				function v(R) {
					const O = new I(!1, void 0);
					return (
						R.addObserver(O),
						(0, i.$Yc)(() => {
							R.removeObserver(O);
						})
					);
				}
				(0, E.$3d)(v);
				function S(R, O) {
					const B = new I(!0, O);
					return (
						R.addObserver(B),
						O ? O(R.get()) : R.reportChanges(),
						(0, i.$Yc)(() => {
							R.removeObserver(B);
						})
					);
				}
				(0, E.$2d)(S);
				class I {
					constructor(O, B) {
						(this.b = O), (this.c = B), (this.a = 0);
					}
					beginUpdate(O) {
						this.a++;
					}
					endUpdate(O) {
						this.a--,
							this.a === 0 &&
								this.b &&
								(this.c ? this.c(O.get()) : O.reportChanges());
					}
					handlePossibleChange(O) {}
					handleChange(O, B) {}
				}
				e.$Id = I;
				function T(R, O) {
					let B;
					return (0, d.$Vd)(
						{ owner: R, debugReferenceFn: O },
						(z) => ((B = O(z, B)), B),
					);
				}
				function P(R, O) {
					let B;
					const U = b("derivedObservableWithWritableCache"),
						z = (0, d.$Td)(R, (F) => (U.read(F), (B = O(F, B)), B));
					return Object.assign(z, {
						clearCache: (F) => {
							(B = void 0), U.trigger(F);
						},
						setCache: (F, x) => {
							(B = F), U.trigger(x);
						},
					});
				}
				function k(R, O, B, U) {
					let z = new L(B, U);
					return (0, d.$Vd)(
						{
							debugReferenceFn: B,
							owner: R,
							onLastObserverRemoved: () => {
								z.dispose(), (z = new L(B));
							},
						},
						(x) => (z.setItems(O.read(x)), z.getItems()),
					);
				}
				class L {
					constructor(O, B) {
						(this.c = O), (this.e = B), (this.a = new Map()), (this.b = []);
					}
					dispose() {
						this.a.forEach((O) => O.store.dispose()), this.a.clear();
					}
					setItems(O) {
						const B = [],
							U = new Set(this.a.keys());
						for (const z of O) {
							const F = this.e ? this.e(z) : z;
							let x = this.a.get(F);
							if (x) U.delete(F);
							else {
								const H = new i.$Zc();
								(x = { out: this.c(z, H), store: H }), this.a.set(F, x);
							}
							B.push(x.out);
						}
						for (const z of U) this.a.get(z).store.dispose(), this.a.delete(z);
						this.b = B;
					}
					getItems() {
						return this.b;
					}
				}
				class D {
					constructor(O) {
						this.observable = O;
					}
					get onDidChange() {
						return t.Event.fromObservableLight(this.observable);
					}
					get value() {
						return this.observable.get();
					}
				}
				e.$Md = D;
				function M(R, O) {
					return O instanceof D
						? O.observable
						: n(R, O.onDidChange, () => O.value);
				}
				function N(R, O) {
					if (O.length === 0) throw new r.$gb();
					let B = !1,
						U;
					const z = n(
						R,
						(F) => {
							const x = new i.$Zc();
							for (const H of O)
								x.add(
									(0, w.$qd)(
										{
											debugName: () =>
												(0, C.$hd)(z, new C.$gd(R, void 0, void 0)) +
												".updateLastChangedValue",
										},
										(q) => {
											(B = !0), (U = H.read(q)), F();
										},
									),
								);
							return (
								x.add({
									dispose() {
										(B = !1), (U = void 0);
									},
								}),
								x
							);
						},
						() => (B ? U : O[O.length - 1].get()),
					);
					return z;
				}
				function A(R, O) {
					return T(R, (B, U) => U ?? O(B));
				}
			},
		)
