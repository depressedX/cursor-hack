import '../../../require.js';
import '../../../exports.js';
import './arrays.js';
import './collections.js';
import './map.js';
import './functional.js';
import './iterator.js';
define(
			de[3],
			he([1, 0, 24, 456, 59, 288, 103]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*collections*/,
 w /*map*/,
 E /*functional*/,
 C /*iterator*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0c =
						e.$8c =
						e.$7c =
						e.$6c =
						e.$5c =
						e.$4c =
						e.$3c =
						e.$2c =
						e.$1c =
						e.$Zc =
						e.$Pc =
							void 0),
					(e.$Qc = u),
					(e.$Rc = a),
					(e.$Sc = h),
					(e.$Tc = g),
					(e.$Uc = p),
					(e.$Vc = o),
					(e.$Wc = f),
					(e.$Xc = b),
					(e.$Yc = s),
					(e.$9c = L);
				const d = !1;
				let m = null;
				class r {
					constructor() {
						this.b = new Map();
					}
					static {
						this.a = 0;
					}
					c(N) {
						let A = this.b.get(N);
						return (
							A ||
								((A = {
									parent: null,
									source: null,
									isSingleton: !1,
									value: N,
									idx: r.a++,
								}),
								this.b.set(N, A)),
							A
						);
					}
					trackDisposable(N) {
						const A = this.c(N);
						A.source || (A.source = new Error().stack);
					}
					setParent(N, A) {
						const R = this.c(N);
						R.parent = A;
					}
					markAsDisposed(N) {
						this.b.delete(N);
					}
					markAsSingleton(N) {
						this.c(N).isSingleton = !0;
					}
					f(N, A) {
						const R = A.get(N);
						if (R) return R;
						const O = N.parent ? this.f(this.c(N.parent), A) : N;
						return A.set(N, O), O;
					}
					getTrackedDisposables() {
						const N = new Map();
						return [...this.b.entries()]
							.filter(([, R]) => R.source !== null && !this.f(R, N).isSingleton)
							.flatMap(([R]) => R);
					}
					computeLeakingDisposables(N = 10, A) {
						let R;
						if (A) R = A;
						else {
							const F = new Map(),
								x = [...this.b.values()].filter(
									(q) => q.source !== null && !this.f(q, F).isSingleton,
								);
							if (x.length === 0) return;
							const H = new Set(x.map((q) => q.value));
							if (
								((R = x.filter((q) => !(q.parent && H.has(q.parent)))),
								R.length === 0)
							)
								throw new Error("There are cyclic diposable chains!");
						}
						if (!R) return;
						function O(F) {
							function x(q, V) {
								for (
									;
									q.length > 0 &&
									V.some((G) =>
										typeof G == "string" ? G === q[0] : q[0].match(G),
									);
								)
									q.shift();
							}
							const H = F.source
								.split(`
`)
								.map((q) => q.trim().replace("at ", ""))
								.filter((q) => q !== "");
							return (
								x(H, [
									"Error",
									/^trackDisposable \(.*\)$/,
									/^DisposableTracker.trackDisposable \(.*\)$/,
								]),
								H.reverse()
							);
						}
						const B = new w.$Nc();
						for (const F of R) {
							const x = O(F);
							for (let H = 0; H <= x.length; H++)
								B.add(
									x.slice(0, H).join(`
`),
									F,
								);
						}
						R.sort((0, t.$0b)((F) => F.idx, t.$_b));
						let U = "",
							z = 0;
						for (const F of R.slice(0, N)) {
							z++;
							const x = O(F),
								H = [];
							for (let q = 0; q < x.length; q++) {
								let V = x[q];
								V = `(shared with ${
									B.get(
										x.slice(0, q + 1).join(`
`),
									).size
								}/${R.length} leaks) at ${V}`;
								const K = B.get(
										x.slice(0, q).join(`
`),
									),
									J = (0, i.$e)(
										[...K].map((W) => O(W)[q]),
										(W) => W,
									);
								delete J[x[q]];
								for (const [W, X] of Object.entries(J))
									H.unshift(
										`    - stacktraces of ${X.length} other leaks continue with ${W}`,
									);
								H.unshift(V);
							}
							U += `


==================== Leaking disposable ${z}/${R.length}: ${F.value.constructor.name} ====================
${H.join(`
`)}
============================================================

`;
						}
						return (
							R.length > N &&
								(U += `


... and ${R.length - N} more leaking disposables

`),
							{ leaks: R, details: U }
						);
					}
				}
				e.$Pc = r;
				function u(M) {
					m = M;
				}
				if (d) {
					const M = "__is_disposable_tracked__";
					u(
						new (class {
							trackDisposable(N) {
								const A = new Error("Potentially leaked disposable").stack;
								setTimeout(() => {
									N[M] || console.log(A);
								}, 3e3);
							}
							setParent(N, A) {
								if (N && N !== y.None)
									try {
										N[M] = !0;
									} catch {}
							}
							markAsDisposed(N) {
								if (N && N !== y.None)
									try {
										N[M] = !0;
									} catch {}
							}
							markAsSingleton(N) {}
						})(),
					);
				}
				function a(M) {
					return m?.trackDisposable(M), M;
				}
				function h(M) {
					m?.markAsDisposed(M);
				}
				function c(M, N) {
					m?.setParent(M, N);
				}
				function n(M, N) {
					if (m) for (const A of M) m.setParent(A, N);
				}
				function g(M) {
					return m?.markAsSingleton(M), M;
				}
				function p(M) {
					return (
						typeof M == "object" &&
						M !== null &&
						typeof M.dispose == "function" &&
						M.dispose.length === 0
					);
				}
				function o(M) {
					if (C.Iterable.is(M)) {
						const N = [];
						for (const A of M)
							if (A)
								try {
									A.dispose();
								} catch (R) {
									N.push(R);
								}
						if (N.length === 1) throw N[0];
						if (N.length > 1)
							throw new AggregateError(
								N,
								"Encountered errors while disposing of store",
							);
						return Array.isArray(M) ? [] : M;
					} else if (M) return M.dispose(), M;
				}
				function f(M) {
					for (const N of M) p(N) && N.dispose();
					return [];
				}
				function b(...M) {
					const N = s(() => o(M));
					return n(M, N), N;
				}
				function s(M) {
					const N = a({
						dispose: (0, E.$hb)(() => {
							h(N), M();
						}),
					});
					return N;
				}
				class l {
					static {
						this.DISABLE_DISPOSED_WARNING = !1;
					}
					constructor() {
						(this.f = new Set()), (this.g = !1), a(this);
					}
					dispose() {
						this.g || (h(this), (this.g = !0), this.clear());
					}
					get isDisposed() {
						return this.g;
					}
					clear() {
						if (this.f.size !== 0)
							try {
								o(this.f);
							} finally {
								this.f.clear();
							}
					}
					add(N) {
						if (!N) return N;
						if (N === this)
							throw new Error("Cannot register a disposable on itself!");
						return (
							c(N, this),
							this.g
								? l.DISABLE_DISPOSED_WARNING ||
									console.warn(
										new Error(
											"Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!",
										).stack,
									)
								: this.f.add(N),
							N
						);
					}
					delete(N) {
						if (N) {
							if (N === this)
								throw new Error("Cannot dispose a disposable on itself!");
							this.f.delete(N), N.dispose();
						}
					}
					deleteAndLeak(N) {
						N && this.f.has(N) && (this.f.delete(N), c(N, null));
					}
				}
				e.$Zc = l;
				class y {
					static {
						this.None = Object.freeze({ dispose() {} });
					}
					constructor() {
						(this.B = new l()), a(this), c(this.B, this);
					}
					dispose() {
						h(this), this.B.dispose();
					}
					D(N) {
						if (N === this)
							throw new Error("Cannot register a disposable on itself!");
						return this.B.add(N);
					}
				}
				e.$1c = y;
				class $ {
					constructor() {
						(this.b = !1), a(this);
					}
					get value() {
						return this.b ? void 0 : this.a;
					}
					set value(N) {
						this.b ||
							N === this.a ||
							(this.a?.dispose(), N && c(N, this), (this.a = N));
					}
					clear() {
						this.value = void 0;
					}
					dispose() {
						(this.b = !0), h(this), this.a?.dispose(), (this.a = void 0);
					}
					clearAndLeak() {
						const N = this.a;
						return (this.a = void 0), N && c(N, null), N;
					}
				}
				e.$2c = $;
				class v {
					constructor(N) {
						(this.a = new $()), (this.b = !1), (this.a.value = N);
					}
					get value() {
						return this.a.value;
					}
					set value(N) {
						this.b || N === this.a.value || (this.a.value = N);
					}
					dispose() {
						(this.b = !0), this.a.dispose();
					}
				}
				e.$3c = v;
				class S {
					constructor(N) {
						(this.b = N), (this.a = 1);
					}
					acquire() {
						return this.a++, this;
					}
					release() {
						return --this.a === 0 && this.b.dispose(), this;
					}
				}
				e.$4c = S;
				class I {
					constructor() {
						(this.dispose = () => {}),
							(this.unset = () => {}),
							(this.isset = () => !1),
							a(this);
					}
					set(N) {
						let A = N;
						return (
							(this.unset = () => (A = void 0)),
							(this.isset = () => A !== void 0),
							(this.dispose = () => {
								A && (A(), (A = void 0), h(this));
							}),
							this
						);
					}
				}
				e.$5c = I;
				class T {
					constructor() {
						this.a = new Map();
					}
					acquire(N, ...A) {
						let R = this.a.get(N);
						R ||
							((R = { counter: 0, object: this.b(N, ...A) }), this.a.set(N, R));
						const { object: O } = R,
							B = (0, E.$hb)(() => {
								--R.counter === 0 && (this.c(N, R.object), this.a.delete(N));
							});
						return R.counter++, { object: O, dispose: B };
					}
				}
				e.$6c = T;
				class P {
					constructor(N) {
						this.a = N;
					}
					async acquire(N, ...A) {
						const R = this.a.acquire(N, ...A);
						try {
							return { object: await R.object, dispose: () => R.dispose() };
						} catch (O) {
							throw (R.dispose(), O);
						}
					}
				}
				e.$7c = P;
				class k {
					constructor(N) {
						this.object = N;
					}
					dispose() {}
				}
				e.$8c = k;
				function L(M) {
					const N = new l();
					try {
						M(N);
					} finally {
						N.dispose();
					}
				}
				class D {
					constructor() {
						(this.a = new Map()), (this.b = !1), a(this);
					}
					dispose() {
						h(this), (this.b = !0), this.clearAndDisposeAll();
					}
					clearAndDisposeAll() {
						if (this.a.size)
							try {
								o(this.a.values());
							} finally {
								this.a.clear();
							}
					}
					has(N) {
						return this.a.has(N);
					}
					get size() {
						return this.a.size;
					}
					get(N) {
						return this.a.get(N);
					}
					set(N, A, R = !1) {
						this.b &&
							console.warn(
								new Error(
									"Trying to add a disposable to a DisposableMap that has already been disposed of. The added object will be leaked!",
								).stack,
							),
							R || this.a.get(N)?.dispose(),
							this.a.set(N, A);
					}
					deleteAndDispose(N) {
						this.a.get(N)?.dispose(), this.a.delete(N);
					}
					deleteAndLeak(N) {
						const A = this.a.get(N);
						return this.a.delete(N), A;
					}
					keys() {
						return this.a.keys();
					}
					values() {
						return this.a.values();
					}
					[Symbol.iterator]() {
						return this.a[Symbol.iterator]();
					}
				}
				e.$0c = D;
			},
		),
		(function (ce, e) {
			typeof define == "function" && define.amd
				? 