define(de[59], he([1, 0]), function (ce, e) {
			"use strict";
			var t, i, w;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Nc =
					e.$Mc =
					e.$Lc =
					e.$Kc =
					e.$Jc =
					e.$Ic =
					e.Touch =
					e.$Hc =
					e.$Gc =
						void 0),
				(e.$Dc = E),
				(e.$Ec = C),
				(e.$Fc = d),
				(e.$Oc = s);
			function E(l, y, $) {
				let v = l.get(y);
				return v === void 0 && ((v = $), l.set(y, v)), v;
			}
			function C(l) {
				const y = [];
				return (
					l.forEach(($, v) => {
						y.push(`${v} => ${$}`);
					}),
					`Map(${l.size}) {${y.join(", ")}}`
				);
			}
			function d(l) {
				const y = [];
				return (
					l.forEach(($) => {
						y.push($);
					}),
					`Set(${l.size}) {${y.join(", ")}}`
				);
			}
			class m {
				constructor(y, $) {
					(this.uri = y), (this.value = $);
				}
			}
			function r(l) {
				return Array.isArray(l);
			}
			class u {
				static {
					this.c = (y) => y.toString();
				}
				constructor(y, $) {
					if (((this[t] = "ResourceMap"), y instanceof u))
						(this.d = new Map(y.d)), (this.e = $ ?? u.c);
					else if (r(y)) {
						(this.d = new Map()), (this.e = $ ?? u.c);
						for (const [v, S] of y) this.set(v, S);
					} else (this.d = new Map()), (this.e = y ?? u.c);
				}
				set(y, $) {
					return this.d.set(this.e(y), new m(y, $)), this;
				}
				get(y) {
					return this.d.get(this.e(y))?.value;
				}
				has(y) {
					return this.d.has(this.e(y));
				}
				get size() {
					return this.d.size;
				}
				clear() {
					this.d.clear();
				}
				delete(y) {
					return this.d.delete(this.e(y));
				}
				forEach(y, $) {
					typeof $ < "u" && (y = y.bind($));
					for (const [v, S] of this.d) y(S.value, S.uri, this);
				}
				*values() {
					for (const y of this.d.values()) yield y.value;
				}
				*keys() {
					for (const y of this.d.values()) yield y.uri;
				}
				*entries() {
					for (const y of this.d.values()) yield [y.uri, y.value];
				}
				*[((t = Symbol.toStringTag), Symbol.iterator)]() {
					for (const [, y] of this.d) yield [y.uri, y.value];
				}
			}
			e.$Gc = u;
			class a {
				constructor(y, $) {
					(this[i] = "ResourceSet"),
						!y || typeof y == "function"
							? (this.c = new u(y))
							: ((this.c = new u($)), y.forEach(this.add, this));
				}
				get size() {
					return this.c.size;
				}
				add(y) {
					return this.c.set(y, y), this;
				}
				clear() {
					this.c.clear();
				}
				delete(y) {
					return this.c.delete(y);
				}
				forEach(y, $) {
					this.c.forEach((v, S) => y.call($, S, S, this));
				}
				has(y) {
					return this.c.has(y);
				}
				entries() {
					return this.c.entries();
				}
				keys() {
					return this.c.keys();
				}
				values() {
					return this.c.keys();
				}
				[((i = Symbol.toStringTag), Symbol.iterator)]() {
					return this.keys();
				}
			}
			e.$Hc = a;
			var h;
			(function (l) {
				(l[(l.None = 0)] = "None"),
					(l[(l.AsOld = 1)] = "AsOld"),
					(l[(l.AsNew = 2)] = "AsNew");
			})(h || (e.Touch = h = {}));
			class c {
				constructor() {
					(this[w] = "LinkedMap"),
						(this.c = new Map()),
						(this.d = void 0),
						(this.e = void 0),
						(this.f = 0),
						(this.g = 0);
				}
				clear() {
					this.c.clear(),
						(this.d = void 0),
						(this.e = void 0),
						(this.f = 0),
						this.g++;
				}
				isEmpty() {
					return !this.d && !this.e;
				}
				get size() {
					return this.f;
				}
				get first() {
					return this.d?.value;
				}
				get last() {
					return this.e?.value;
				}
				has(y) {
					return this.c.has(y);
				}
				get(y, $ = h.None) {
					const v = this.c.get(y);
					if (v) return $ !== h.None && this.m(v, $), v.value;
				}
				set(y, $, v = h.None) {
					let S = this.c.get(y);
					if (S) (S.value = $), v !== h.None && this.m(S, v);
					else {
						switch (
							((S = { key: y, value: $, next: void 0, previous: void 0 }), v)
						) {
							case h.None:
								this.k(S);
								break;
							case h.AsOld:
								this.j(S);
								break;
							case h.AsNew:
								this.k(S);
								break;
							default:
								this.k(S);
								break;
						}
						this.c.set(y, S), this.f++;
					}
					return this;
				}
				delete(y) {
					return !!this.remove(y);
				}
				remove(y) {
					const $ = this.c.get(y);
					if ($) return this.c.delete(y), this.l($), this.f--, $.value;
				}
				shift() {
					if (!this.d && !this.e) return;
					if (!this.d || !this.e) throw new Error("Invalid list");
					const y = this.d;
					return this.c.delete(y.key), this.l(y), this.f--, y.value;
				}
				forEach(y, $) {
					const v = this.g;
					let S = this.d;
					for (; S; ) {
						if (
							($ ? y.bind($)(S.value, S.key, this) : y(S.value, S.key, this),
							this.g !== v)
						)
							throw new Error("LinkedMap got modified during iteration.");
						S = S.next;
					}
				}
				keys() {
					const y = this,
						$ = this.g;
					let v = this.d;
					const S = {
						[Symbol.iterator]() {
							return S;
						},
						next() {
							if (y.g !== $)
								throw new Error("LinkedMap got modified during iteration.");
							if (v) {
								const I = { value: v.key, done: !1 };
								return (v = v.next), I;
							} else return { value: void 0, done: !0 };
						},
					};
					return S;
				}
				values() {
					const y = this,
						$ = this.g;
					let v = this.d;
					const S = {
						[Symbol.iterator]() {
							return S;
						},
						next() {
							if (y.g !== $)
								throw new Error("LinkedMap got modified during iteration.");
							if (v) {
								const I = { value: v.value, done: !1 };
								return (v = v.next), I;
							} else return { value: void 0, done: !0 };
						},
					};
					return S;
				}
				entries() {
					const y = this,
						$ = this.g;
					let v = this.d;
					const S = {
						[Symbol.iterator]() {
							return S;
						},
						next() {
							if (y.g !== $)
								throw new Error("LinkedMap got modified during iteration.");
							if (v) {
								const I = { value: [v.key, v.value], done: !1 };
								return (v = v.next), I;
							} else return { value: void 0, done: !0 };
						},
					};
					return S;
				}
				[((w = Symbol.toStringTag), Symbol.iterator)]() {
					return this.entries();
				}
				h(y) {
					if (y >= this.size) return;
					if (y === 0) {
						this.clear();
						return;
					}
					let $ = this.d,
						v = this.size;
					for (; $ && v > y; ) this.c.delete($.key), ($ = $.next), v--;
					(this.d = $), (this.f = v), $ && ($.previous = void 0), this.g++;
				}
				i(y) {
					if (y >= this.size) return;
					if (y === 0) {
						this.clear();
						return;
					}
					let $ = this.e,
						v = this.size;
					for (; $ && v > y; ) this.c.delete($.key), ($ = $.previous), v--;
					(this.e = $), (this.f = v), $ && ($.next = void 0), this.g++;
				}
				j(y) {
					if (!this.d && !this.e) this.e = y;
					else if (this.d) (y.next = this.d), (this.d.previous = y);
					else throw new Error("Invalid list");
					(this.d = y), this.g++;
				}
				k(y) {
					if (!this.d && !this.e) this.d = y;
					else if (this.e) (y.previous = this.e), (this.e.next = y);
					else throw new Error("Invalid list");
					(this.e = y), this.g++;
				}
				l(y) {
					if (y === this.d && y === this.e)
						(this.d = void 0), (this.e = void 0);
					else if (y === this.d) {
						if (!y.next) throw new Error("Invalid list");
						(y.next.previous = void 0), (this.d = y.next);
					} else if (y === this.e) {
						if (!y.previous) throw new Error("Invalid list");
						(y.previous.next = void 0), (this.e = y.previous);
					} else {
						const $ = y.next,
							v = y.previous;
						if (!$ || !v) throw new Error("Invalid list");
						($.previous = v), (v.next = $);
					}
					(y.next = void 0), (y.previous = void 0), this.g++;
				}
				m(y, $) {
					if (!this.d || !this.e) throw new Error("Invalid list");
					if (!($ !== h.AsOld && $ !== h.AsNew)) {
						if ($ === h.AsOld) {
							if (y === this.d) return;
							const v = y.next,
								S = y.previous;
							y === this.e
								? ((S.next = void 0), (this.e = S))
								: ((v.previous = S), (S.next = v)),
								(y.previous = void 0),
								(y.next = this.d),
								(this.d.previous = y),
								(this.d = y),
								this.g++;
						} else if ($ === h.AsNew) {
							if (y === this.e) return;
							const v = y.next,
								S = y.previous;
							y === this.d
								? ((v.previous = void 0), (this.d = v))
								: ((v.previous = S), (S.next = v)),
								(y.next = void 0),
								(y.previous = this.e),
								(this.e.next = y),
								(this.e = y),
								this.g++;
						}
					}
				}
				toJSON() {
					const y = [];
					return (
						this.forEach(($, v) => {
							y.push([v, $]);
						}),
						y
					);
				}
				fromJSON(y) {
					this.clear();
					for (const [$, v] of y) this.set($, v);
				}
			}
			e.$Ic = c;
			class n extends c {
				constructor(y, $ = 1) {
					super(), (this.n = y), (this.o = Math.min(Math.max(0, $), 1));
				}
				get limit() {
					return this.n;
				}
				set limit(y) {
					(this.n = y), this.p();
				}
				get ratio() {
					return this.o;
				}
				set ratio(y) {
					(this.o = Math.min(Math.max(0, y), 1)), this.p();
				}
				get(y, $ = h.AsNew) {
					return super.get(y, $);
				}
				peek(y) {
					return super.get(y, h.None);
				}
				set(y, $) {
					return super.set(y, $, h.AsNew), this;
				}
				p() {
					this.size > this.n && this.q(Math.round(this.n * this.o));
				}
			}
			class g extends n {
				constructor(y, $ = 1) {
					super(y, $);
				}
				q(y) {
					this.h(y);
				}
				set(y, $) {
					return super.set(y, $), this.p(), this;
				}
			}
			e.$Jc = g;
			class p extends n {
				constructor(y, $ = 1) {
					super(y, $);
				}
				q(y) {
					this.i(y);
				}
				set(y, $) {
					return (
						this.n <= this.size &&
							!this.has(y) &&
							this.q(Math.round(this.n * this.o) - 1),
						super.set(y, $),
						this
					);
				}
			}
			e.$Kc = p;
			class o {
				constructor() {
					this.c = new Map();
				}
				add(y) {
					return this.c.set(y, (this.c.get(y) || 0) + 1), this;
				}
				delete(y) {
					let $ = this.c.get(y) || 0;
					return $ === 0
						? !1
						: ($--, $ === 0 ? this.c.delete(y) : this.c.set(y, $), !0);
				}
				has(y) {
					return this.c.has(y);
				}
			}
			e.$Lc = o;
			class f {
				constructor(y) {
					if (((this.c = new Map()), (this.d = new Map()), y))
						for (const [$, v] of y) this.set($, v);
				}
				clear() {
					this.c.clear(), this.d.clear();
				}
				set(y, $) {
					this.c.set(y, $), this.d.set($, y);
				}
				get(y) {
					return this.c.get(y);
				}
				getKey(y) {
					return this.d.get(y);
				}
				delete(y) {
					const $ = this.c.get(y);
					return $ === void 0 ? !1 : (this.c.delete(y), this.d.delete($), !0);
				}
				forEach(y, $) {
					this.c.forEach((v, S) => {
						y.call($, v, S, this);
					});
				}
				keys() {
					return this.c.keys();
				}
				values() {
					return this.c.values();
				}
			}
			e.$Mc = f;
			class b {
				constructor() {
					this.c = new Map();
				}
				add(y, $) {
					let v = this.c.get(y);
					v || ((v = new Set()), this.c.set(y, v)), v.add($);
				}
				delete(y, $) {
					const v = this.c.get(y);
					v && (v.delete($), v.size === 0 && this.c.delete(y));
				}
				forEach(y, $) {
					const v = this.c.get(y);
					v && v.forEach($);
				}
				get(y) {
					const $ = this.c.get(y);
					return $ || new Set();
				}
			}
			e.$Nc = b;
			function s(l, y) {
				if (l === y) return !0;
				if (l.size !== y.size) return !1;
				for (const [$, v] of l) if (!y.has($) || y.get($) !== v) return !1;
				for (const [$] of y) if (!l.has($)) return !1;
				return !0;
			}
		}),
		define(
			de[3],
			he([1, 0, 24, 456, 59, 288, 103]),
			function (ce, e, t, i, w, E, C) {
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