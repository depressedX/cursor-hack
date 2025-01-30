import '../../../../require.js';
import '../../../../exports.js';
import './autorun.js';
import './base.js';
import './derived.js';
import '../cancellation.js';
import './debugName.js';
import '../equals.js';
import '../errors.js';
define(
			de[1503],
			he([1, 0, 1133, 407, 319, 33, 648, 433, 29]),
			function (ce /*require*/,
 e /*exports*/,
 t /*autorun*/,
 i /*base*/,
 w /*derived*/,
 E /*cancellation*/,
 C /*debugName*/,
 d /*equals*/,
 m /*errors*/) {
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
		