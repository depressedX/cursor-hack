define(de[1502], he([1, 0, 6]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.IME = e.$Vpb = void 0);
			class i {
				constructor() {
					(this.a = new t.$re()),
						(this.onDidChange = this.a.event),
						(this.b = !0);
				}
				get enabled() {
					return this.b;
				}
				enable() {
					(this.b = !0), this.a.fire();
				}
				disable() {
					(this.b = !1), this.a.fire();
				}
			}
			(e.$Vpb = i), (e.IME = new i());
		}),
		define(
			de[1503],
			he([1, 0, 1133, 407, 319, 33, 648, 433, 29]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ge = e.$fe = e.$ee = e.$de = void 0),
					(e.$he = c),
					(e.$ie = n);
				class r {
					get cachedValue() {
						return this.a;
					}
					constructor(p) {
						(this.b = p), (this.a = (0, i.$_d)(this, void 0));
					}
					getValue() {
						let p = this.a.get();
						return p || ((p = this.b()), this.a.set(p, void 0)), p;
					}
				}
				e.$de = r;
				class u {
					static fromFn(p) {
						return new u(p());
					}
					constructor(p) {
						(this.a = (0, i.$_d)(this, void 0)),
							(this.promiseResult = this.a),
							(this.promise = p.then(
								(o) => (
									(0, i.$7d)((f) => {
										this.a.set(new a(o, void 0), f);
									}),
									o
								),
								(o) => {
									throw (
										((0, i.$7d)((f) => {
											this.a.set(new a(void 0, o), f);
										}),
										o)
									);
								},
							));
					}
				}
				e.$ee = u;
				class a {
					constructor(p, o) {
						(this.data = p), (this.error = o);
					}
					getDataOrThrow() {
						if (this.error) throw this.error;
						return this.data;
					}
				}
				e.$fe = a;
				class h {
					constructor(p) {
						(this.b = p),
							(this.a = new r(() => new u(this.b()))),
							(this.cachedPromiseResult = (0, w.$Td)(this, (o) =>
								this.a.cachedValue.read(o)?.promiseResult.read(o),
							));
					}
					getPromise() {
						return this.a.getValue().promise;
					}
				}
				e.$ge = h;
				function c(g, p, o, f) {
					return (
						p || (p = (b) => b != null),
						new Promise((b, s) => {
							let l = !0,
								y = !1;
							const $ = g.map((S) => ({
									isFinished: p(S),
									error: o ? o(S) : !1,
									state: S,
								})),
								v = (0, t.$pd)((S) => {
									const { isFinished: I, error: T, state: P } = $.read(S);
									(I || T) &&
										(l ? (y = !0) : v.dispose(),
										T ? s(T === !0 ? P : T) : b(P));
								});
							if (f) {
								const S = f.onCancellationRequested(() => {
									v.dispose(), S.dispose(), s(new m.$9());
								});
								if (f.isCancellationRequested) {
									v.dispose(), S.dispose(), s(new m.$9());
									return;
								}
							}
							(l = !1), y && v.dispose();
						})
					);
				}
				function n(g, p) {
					let o, f;
					p === void 0 ? ((o = g), (f = void 0)) : ((f = g), (o = p));
					let b;
					return new w.$Zd(
						new C.$gd(f, void 0, o),
						(s) => (b && b.dispose(!0), (b = new E.$Ce()), o(s, b.token)),
						void 0,
						void 0,
						() => b?.dispose(),
						d.$_c,
					);
				}
			},
		),
		define(
			de[457],
			he([1, 0, 6, 3, 1133, 407, 648, 319, 742, 29, 433]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
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
		),
		define(
			de[77],
			he([1, 0, 407, 319, 1133, 457, 1503, 2221, 742]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.observableValueOpts =
						e.derivedWithCancellationToken =
						e.waitForState =
						e.PromiseResult =
						e.ObservablePromise =
						e.ObservableLazyPromise =
						e.ObservableLazy =
						e.wasEventTriggeredRecently =
						e.observableSignalFromEvent =
						e.observableSignal =
						e.observableFromPromise =
						e.observableFromEvent =
						e.recomputeInitiallyAndOnChange =
						e.keepObserved =
						e.derivedObservableWithWritableCache =
						e.derivedObservableWithCache =
						e.debouncedObservable =
						e.constObservable =
						e.autorunWithStoreHandleChanges =
						e.autorunOpts =
						e.autorunWithStore =
						e.autorunHandleChanges =
						e.autorunDelta =
						e.autorun =
						e.derivedWithStore =
						e.derivedHandleChanges =
						e.derivedOpts =
						e.derived =
						e.subtransaction =
						e.transaction =
						e.disposableObservableValue =
						e.observableValue =
							void 0),
					Object.defineProperty(e, "observableValue", {
						enumerable: !0,
						get: function () {
							return t.$_d;
						},
					}),
					Object.defineProperty(e, "disposableObservableValue", {
						enumerable: !0,
						get: function () {
							return t.$be;
						},
					}),
					Object.defineProperty(e, "transaction", {
						enumerable: !0,
						get: function () {
							return t.$7d;
						},
					}),
					Object.defineProperty(e, "subtransaction", {
						enumerable: !0,
						get: function () {
							return t.$0d;
						},
					}),
					Object.defineProperty(e, "derived", {
						enumerable: !0,
						get: function () {
							return i.$Td;
						},
					}),
					Object.defineProperty(e, "derivedOpts", {
						enumerable: !0,
						get: function () {
							return i.$Vd;
						},
					}),
					Object.defineProperty(e, "derivedHandleChanges", {
						enumerable: !0,
						get: function () {
							return i.$Wd;
						},
					}),
					Object.defineProperty(e, "derivedWithStore", {
						enumerable: !0,
						get: function () {
							return i.$Xd;
						},
					}),
					Object.defineProperty(e, "autorun", {
						enumerable: !0,
						get: function () {
							return w.$pd;
						},
					}),
					Object.defineProperty(e, "autorunDelta", {
						enumerable: !0,
						get: function () {
							return w.$ud;
						},
					}),
					Object.defineProperty(e, "autorunHandleChanges", {
						enumerable: !0,
						get: function () {
							return w.$rd;
						},
					}),
					Object.defineProperty(e, "autorunWithStore", {
						enumerable: !0,
						get: function () {
							return w.$td;
						},
					}),
					Object.defineProperty(e, "autorunOpts", {
						enumerable: !0,
						get: function () {
							return w.$qd;
						},
					}),
					Object.defineProperty(e, "autorunWithStoreHandleChanges", {
						enumerable: !0,
						get: function () {
							return w.$sd;
						},
					}),
					Object.defineProperty(e, "constObservable", {
						enumerable: !0,
						get: function () {
							return E.$wd;
						},
					}),
					Object.defineProperty(e, "debouncedObservable", {
						enumerable: !0,
						get: function () {
							return E.$Dd;
						},
					}),
					Object.defineProperty(e, "derivedObservableWithCache", {
						enumerable: !0,
						get: function () {
							return E.$Jd;
						},
					}),
					Object.defineProperty(e, "derivedObservableWithWritableCache", {
						enumerable: !0,
						get: function () {
							return E.$Kd;
						},
					}),
					Object.defineProperty(e, "keepObserved", {
						enumerable: !0,
						get: function () {
							return E.$Gd;
						},
					}),
					Object.defineProperty(e, "recomputeInitiallyAndOnChange", {
						enumerable: !0,
						get: function () {
							return E.$Hd;
						},
					}),
					Object.defineProperty(e, "observableFromEvent", {
						enumerable: !0,
						get: function () {
							return E.$yd;
						},
					}),
					Object.defineProperty(e, "observableFromPromise", {
						enumerable: !0,
						get: function () {
							return E.$xd;
						},
					}),
					Object.defineProperty(e, "observableSignal", {
						enumerable: !0,
						get: function () {
							return E.$Cd;
						},
					}),
					Object.defineProperty(e, "observableSignalFromEvent", {
						enumerable: !0,
						get: function () {
							return E.$Bd;
						},
					}),
					Object.defineProperty(e, "wasEventTriggeredRecently", {
						enumerable: !0,
						get: function () {
							return E.$Fd;
						},
					}),
					Object.defineProperty(e, "ObservableLazy", {
						enumerable: !0,
						get: function () {
							return C.$de;
						},
					}),
					Object.defineProperty(e, "ObservableLazyPromise", {
						enumerable: !0,
						get: function () {
							return C.$ge;
						},
					}),
					Object.defineProperty(e, "ObservablePromise", {
						enumerable: !0,
						get: function () {
							return C.$ee;
						},
					}),
					Object.defineProperty(e, "PromiseResult", {
						enumerable: !0,
						get: function () {
							return C.$fe;
						},
					}),
					Object.defineProperty(e, "waitForState", {
						enumerable: !0,
						get: function () {
							return C.$he;
						},
					}),
					Object.defineProperty(e, "derivedWithCancellationToken", {
						enumerable: !0,
						get: function () {
							return C.$ie;
						},
					}),
					Object.defineProperty(e, "observableValueOpts", {
						enumerable: !0,
						get: function () {
							return d.$ke;
						},
					}),
					!1 && (0, m.$Qd)(new m.$Sd());
			},
		),
		