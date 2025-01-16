define(de[1619], he([1, 0, 15]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$G4c = i);
			function i(w, E) {
				if (w.length === 0) return Promise.resolve(!1);
				const C = [];
				let d = !1;
				for (const m of w) {
					if (m === !0) return Promise.resolve(!0);
					(0, t.$yh)(m) &&
						C.push(
							m.then(
								(r) => {
									r && (d = !0);
								},
								(r) => {
									E(r), (d = !0);
								},
							),
						);
				}
				return t.Promises.settled(C).then(() => d);
			}
		}),
		define(
			de[34],
			he([1, 0, 4, 163, 6, 136, 3, 59, 12, 19, 28, 9, 8, 5]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ak =
						e.$vk =
						e.$uk =
						e.$tk =
						e.$sk =
						e.$rk =
						e.$qk =
						e.$pk =
						e.$ok =
						e.$nk =
						e.$lk =
						e.LogLevel =
						e.$jk =
						e.$ik =
							void 0),
					(e.$kk = g),
					(e.log = o),
					(e.$wk = P),
					(e.$xk = k),
					(e.$yk = L),
					(e.$zk = D),
					(t = mt(t)),
					(e.$ik = (0, c.$Mi)("logService")),
					(e.$jk = (0, c.$Mi)("loggerService"));
				function n() {
					return new Date().toISOString();
				}
				function g(M) {
					return (0, u.$pg)(M);
				}
				var p;
				(function (M) {
					(M[(M.Off = 0)] = "Off"),
						(M[(M.Trace = 1)] = "Trace"),
						(M[(M.Debug = 2)] = "Debug"),
						(M[(M.Info = 3)] = "Info"),
						(M[(M.Warning = 4)] = "Warning"),
						(M[(M.Error = 5)] = "Error");
				})(p || (e.LogLevel = p = {})),
					(e.$lk = p.Info);
				function o(M, N, A) {
					switch (N) {
						case p.Trace:
							M.trace(A);
							break;
						case p.Debug:
							M.debug(A);
							break;
						case p.Info:
							M.info(A);
							break;
						case p.Warning:
							M.warn(A);
							break;
						case p.Error:
							M.error(A);
							break;
						case p.Off:
							break;
						default:
							throw new Error(`Invalid log level ${N}`);
					}
				}
				function f(M, N = !1) {
					let A = "";
					for (let R = 0; R < M.length; R++) {
						let O = M[R];
						if (
							(O instanceof Error && (O = (0, i.$xj)(O, N)),
							typeof O == "object")
						)
							try {
								O = JSON.stringify(O);
							} catch {}
						A += (R > 0 ? " " : "") + O;
					}
					return A;
				}
				class b extends C.$1c {
					constructor() {
						super(...arguments),
							(this.b = e.$lk),
							(this.c = this.D(new w.$re())),
							(this.onDidChangeLogLevel = this.c.event);
					}
					setLevel(N) {
						this.b !== N && ((this.b = N), this.c.fire(this.b));
					}
					getLevel() {
						return this.b;
					}
					f(N) {
						return this.b !== p.Off && this.b <= N;
					}
				}
				e.$nk = b;
				class s extends b {
					constructor(N) {
						super(), (this.h = N);
					}
					f(N) {
						return this.h || super.f(N);
					}
					trace(N, ...A) {
						this.f(p.Trace) && this.g(p.Trace, f([N, ...A], !0));
					}
					debug(N, ...A) {
						this.f(p.Debug) && this.g(p.Debug, f([N, ...A]));
					}
					info(N, ...A) {
						this.f(p.Info) && this.g(p.Info, f([N, ...A]));
					}
					warn(N, ...A) {
						this.f(p.Warning) && this.g(p.Warning, f([N, ...A]));
					}
					error(N, ...A) {
						if (this.f(p.Error))
							if (N instanceof Error) {
								const R = Array.prototype.slice.call(arguments);
								(R[0] = N.stack), this.g(p.Error, f(R));
							} else this.g(p.Error, f([N, ...A]));
					}
					flush() {}
				}
				e.$ok = s;
				class l extends b {
					constructor(N = e.$lk) {
						super(), this.setLevel(N), (this.g = !m.$l);
					}
					trace(N, ...A) {
						this.f(p.Trace) &&
							(this.g
								? console.log(`\x1B[90m[main ${n()}]\x1B[0m`, N, ...A)
								: console.log(`[main ${n()}]`, N, ...A));
					}
					debug(N, ...A) {
						this.f(p.Debug) &&
							(this.g
								? console.log(`\x1B[90m[main ${n()}]\x1B[0m`, N, ...A)
								: console.log(`[main ${n()}]`, N, ...A));
					}
					info(N, ...A) {
						this.f(p.Info) &&
							(this.g
								? console.log(`\x1B[90m[main ${n()}]\x1B[0m`, N, ...A)
								: console.log(`[main ${n()}]`, N, ...A));
					}
					warn(N, ...A) {
						this.f(p.Warning) &&
							(this.g
								? console.warn(`\x1B[93m[main ${n()}]\x1B[0m`, N, ...A)
								: console.warn(`[main ${n()}]`, N, ...A));
					}
					error(N, ...A) {
						this.f(p.Error) &&
							(this.g
								? console.error(`\x1B[91m[main ${n()}]\x1B[0m`, N, ...A)
								: console.error(`[main ${n()}]`, N, ...A));
					}
					flush() {}
				}
				e.$pk = l;
				class y extends b {
					constructor(N = e.$lk, A = !0) {
						super(), (this.g = A), this.setLevel(N);
					}
					trace(N, ...A) {
						this.f(p.Trace) &&
							(this.g
								? console.log("%cTRACE", "color: #888", N, ...A)
								: console.log(N, ...A));
					}
					debug(N, ...A) {
						this.f(p.Debug) &&
							(this.g
								? console.log(
										"%cDEBUG",
										"background: #eee; color: #888",
										N,
										...A,
									)
								: console.log(N, ...A));
					}
					info(N, ...A) {
						this.f(p.Info) &&
							(this.g
								? console.log("%c INFO", "color: #33f", N, ...A)
								: console.log(N, ...A));
					}
					warn(N, ...A) {
						this.f(p.Warning) &&
							(this.g
								? console.log("%c WARN", "color: #993", N, ...A)
								: console.log(N, ...A));
					}
					error(N, ...A) {
						this.f(p.Error) &&
							(this.g
								? console.log("%c  ERR", "color: #f33", N, ...A)
								: console.error(N, ...A));
					}
					flush() {}
				}
				e.$qk = y;
				class $ extends b {
					constructor(N, A = e.$lk) {
						super(), (this.g = N), this.setLevel(A);
					}
					trace(N, ...A) {
						this.f(p.Trace) && this.g.log(p.Trace, [this.h(N), ...A]);
					}
					debug(N, ...A) {
						this.f(p.Debug) && this.g.log(p.Debug, [this.h(N), ...A]);
					}
					info(N, ...A) {
						this.f(p.Info) && this.g.log(p.Info, [this.h(N), ...A]);
					}
					warn(N, ...A) {
						this.f(p.Warning) && this.g.log(p.Warning, [this.h(N), ...A]);
					}
					error(N, ...A) {
						this.f(p.Error) && this.g.log(p.Error, [this.h(N), ...A]);
					}
					h(N) {
						return typeof N == "string" ? N : (0, i.$xj)(N, this.f(p.Trace));
					}
					flush() {}
				}
				e.$rk = $;
				class v extends b {
					constructor(N) {
						super(), (this.g = N), N.length && this.setLevel(N[0].getLevel());
					}
					setLevel(N) {
						for (const A of this.g) A.setLevel(N);
						super.setLevel(N);
					}
					trace(N, ...A) {
						for (const R of this.g) R.trace(N, ...A);
					}
					debug(N, ...A) {
						for (const R of this.g) R.debug(N, ...A);
					}
					info(N, ...A) {
						for (const R of this.g) R.info(N, ...A);
					}
					warn(N, ...A) {
						for (const R of this.g) R.warn(N, ...A);
					}
					error(N, ...A) {
						for (const R of this.g) R.error(N, ...A);
					}
					flush() {
						for (const N of this.g) N.flush();
					}
					dispose() {
						for (const N of this.g) N.dispose();
						super.dispose();
					}
				}
				e.$sk = v;
				class S extends C.$1c {
					constructor(N, A, R) {
						if (
							(super(),
							(this.h = N),
							(this.j = A),
							(this.b = new d.$Gc()),
							(this.c = this.D(new w.$re())),
							(this.onDidChangeLoggers = this.c.event),
							(this.f = this.D(new w.$re())),
							(this.onDidChangeLogLevel = this.f.event),
							(this.g = this.D(new w.$re())),
							(this.onDidChangeVisibility = this.g.event),
							R)
						)
							for (const O of R)
								this.b.set(O.resource, { logger: void 0, info: O });
					}
					m(N) {
						return (0, u.$lg)(N)
							? [...this.b.values()].find((A) => A.info.id === N)
							: this.b.get(N);
					}
					getLogger(N) {
						return this.m(N)?.logger;
					}
					createLogger(N, A) {
						const R = this.n(N),
							O = (0, u.$lg)(N)
								? N
								: (A?.id ?? (0, E.$Aj)(R.toString()).toString(16));
						let B = this.b.get(R)?.logger;
						const U = A?.logLevel === "always" ? p.Trace : A?.logLevel;
						B ||
							(B = this.q(R, U ?? this.getLogLevel(R) ?? this.h, {
								...A,
								id: O,
							}));
						const z = {
							logger: B,
							info: {
								resource: R,
								id: O,
								logLevel: U,
								name: A?.name,
								hidden: A?.hidden,
								extensionId: A?.extensionId,
								when: A?.when,
							},
						};
						return this.registerLogger(z.info), this.b.set(R, z), B;
					}
					n(N) {
						return (0, u.$lg)(N) ? (0, r.$nh)(this.j, `${N}.log`) : N;
					}
					setLogLevel(N, A) {
						if (a.URI.isUri(N)) {
							const R = N,
								O = A,
								B = this.b.get(R);
							B &&
								O !== B.info.logLevel &&
								((B.info.logLevel = O === this.h ? void 0 : O),
								B.logger?.setLevel(O),
								this.b.set(B.info.resource, B),
								this.f.fire([R, O]));
						} else {
							this.h = N;
							for (const [R, O] of this.b.entries())
								this.b.get(R)?.info.logLevel === void 0 &&
									O.logger?.setLevel(this.h);
							this.f.fire(this.h);
						}
					}
					setVisibility(N, A) {
						const R = this.m(N);
						R &&
							A !== !R.info.hidden &&
							((R.info.hidden = !A),
							this.b.set(R.info.resource, R),
							this.g.fire([R.info.resource, A]));
					}
					getLogLevel(N) {
						let A;
						return N && (A = this.b.get(N)?.info.logLevel), A ?? this.h;
					}
					registerLogger(N) {
						const A = this.b.get(N.resource);
						A
							? A.info.hidden !== N.hidden &&
								this.setVisibility(N.resource, !N.hidden)
							: (this.b.set(N.resource, { info: N, logger: void 0 }),
								this.c.fire({ added: [N], removed: [] }));
					}
					deregisterLogger(N) {
						const A = this.b.get(N);
						A &&
							(A.logger && A.logger.dispose(),
							this.b.delete(N),
							this.c.fire({ added: [], removed: [A.info] }));
					}
					*getRegisteredLoggers() {
						for (const N of this.b.values()) yield N.info;
					}
					getRegisteredLogger(N) {
						return this.b.get(N)?.info;
					}
					dispose() {
						this.b.forEach((N) => N.logger?.dispose()),
							this.b.clear(),
							super.dispose();
					}
				}
				e.$tk = S;
				class I {
					constructor() {
						this.onDidChangeLogLevel = new w.$re().event;
					}
					setLevel(N) {}
					getLevel() {
						return p.Info;
					}
					trace(N, ...A) {}
					debug(N, ...A) {}
					info(N, ...A) {}
					warn(N, ...A) {}
					error(N, ...A) {}
					critical(N, ...A) {}
					dispose() {}
					flush() {}
				}
				e.$uk = I;
				class T extends I {}
				e.$vk = T;
				function P(M) {
					if (M.verbose) return p.Trace;
					if (typeof M.logLevel == "string") {
						const N = D(M.logLevel.toLowerCase());
						if (N !== void 0) return N;
					}
					return e.$lk;
				}
				function k(M) {
					switch (M) {
						case p.Trace:
							return "trace";
						case p.Debug:
							return "debug";
						case p.Info:
							return "info";
						case p.Warning:
							return "warn";
						case p.Error:
							return "error";
						case p.Off:
							return "off";
					}
				}
				function L(M) {
					switch (M) {
						case p.Trace:
							return { original: "Trace", value: t.localize(1971, null) };
						case p.Debug:
							return { original: "Debug", value: t.localize(1972, null) };
						case p.Info:
							return { original: "Info", value: t.localize(1973, null) };
						case p.Warning:
							return { original: "Warning", value: t.localize(1974, null) };
						case p.Error:
							return { original: "Error", value: t.localize(1975, null) };
						case p.Off:
							return { original: "Off", value: t.localize(1976, null) };
					}
				}
				function D(M) {
					switch (M) {
						case "trace":
							return p.Trace;
						case "debug":
							return p.Debug;
						case "info":
							return p.Info;
						case "warn":
							return p.Warning;
						case "error":
							return p.Error;
						case "critical":
							return p.Error;
						case "off":
							return p.Off;
					}
				}
				e.$Ak = new h.$5j("logLevel", k(p.Info));
			},
		),
		define(
			de[391],
			he([1, 0, 136, 59, 201, 113, 20, 5, 34, 23]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$QBb = e.$PBb = void 0),
					(e.$PBb = (0, d.$Mi)("ILanguageFeatureDebounceService"));
				var u;
				(function (n) {
					const g = new WeakMap();
					let p = 0;
					function o(f) {
						let b = g.get(f);
						return b === void 0 && ((b = ++p), g.set(f, b)), b;
					}
					n.of = o;
				})(u || (u = {}));
				class a {
					constructor(g) {
						this.a = g;
					}
					get(g) {
						return this.a;
					}
					update(g, p) {
						return this.a;
					}
					default() {
						return this.a;
					}
				}
				class h {
					constructor(g, p, o, f, b, s) {
						(this.b = g),
							(this.c = p),
							(this.d = o),
							(this.e = f),
							(this.f = b),
							(this.g = s),
							(this.a = new i.$Jc(50, 0.7));
					}
					h(g) {
						return (
							g.id + this.d.all(g).reduce((p, o) => (0, t.$Bj)(u.of(o), p), 0)
						);
					}
					get(g) {
						const p = this.h(g),
							o = this.a.get(p);
						return o ? (0, w.$Zm)(o.value, this.f, this.g) : this.default();
					}
					update(g, p) {
						const o = this.h(g);
						let f = this.a.get(o);
						f || ((f = new w.$4m(6)), this.a.set(o, f));
						const b = (0, w.$Zm)(f.update(p), this.f, this.g);
						return (
							(0, r.$Vg)(g.uri, "output") ||
								this.b.trace(
									`[DEBOUNCE: ${this.c}] for ${g.uri.toString()} is ${b}ms`,
								),
							b
						);
					}
					i() {
						const g = new w.$3m();
						for (const [, p] of this.a) g.update(p.value);
						return g.value;
					}
					default() {
						const g = this.i() | 0 || this.e;
						return (0, w.$Zm)(g, this.f, this.g);
					}
				}
				let c = class {
					constructor(g, p) {
						(this.c = g),
							(this.a = new Map()),
							(this.b = p.isExtensionDevelopment || !p.isBuilt);
					}
					for(g, p, o) {
						const f = o?.min ?? 50,
							b = o?.max ?? f ** 2,
							s = o?.key ?? void 0,
							l = `${u.of(g)},${f}${s ? "," + s : ""}`;
						let y = this.a.get(l);
						return (
							y ||
								(this.b
									? (this.c.debug(
											`[DEBOUNCE: ${p}] is disabled in developed mode`,
										),
										(y = new a(f * 1.5)))
									: (y = new h(this.c, p, g, this.d() | 0 || f * 1.5, f, b)),
								this.a.set(l, y)),
							y
						);
					}
					d() {
						const g = new w.$3m();
						for (const p of this.a.values()) g.update(p.default());
						return g.value;
					}
				};
				(e.$QBb = c),
					(e.$QBb = c = Ne([j(0, m.$ik), j(1, E.$Ti)], c)),
					(0, C.$lK)(e.$PBb, c, C.InstantiationType.Delayed);
			},
		),
		define(
			de[204],
			he([1, 0, 24, 33, 29, 103, 59, 37, 48, 17, 391, 5, 20, 67, 3, 69]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0Db = e.$9Db = e.$8Db = e.$7Db = e.$6Db = e.$5Db = void 0);
				class p {
					remove() {
						this.parent?.children.delete(this.id);
					}
					static findId(y, $) {
						let v;
						typeof y == "string"
							? (v = `${$.id}/${y}`)
							: ((v = `${$.id}/${y.name}`),
								$.children.get(v) !== void 0 &&
									(v = `${$.id}/${y.name}_${y.range.startLineNumber}_${y.range.startColumn}`));
						let S = v;
						for (let I = 0; $.children.get(S) !== void 0; I++) S = `${v}_${I}`;
						return S;
					}
					static getElementById(y, $) {
						if (!y) return;
						const v = (0, d.$Of)(y, $.id);
						if (v === y.length) return $;
						if (!(v < $.id.length))
							for (const [, S] of $.children) {
								const I = p.getElementById(y, S);
								if (I) return I;
							}
					}
					static size(y) {
						let $ = 1;
						for (const [, v] of y.children) $ += p.size(v);
						return $;
					}
					static empty(y) {
						return y.children.size === 0;
					}
				}
				e.$5Db = p;
				class o extends p {
					constructor(y, $, v) {
						super(),
							(this.id = y),
							(this.parent = $),
							(this.symbol = v),
							(this.children = new Map());
					}
					getAllSymbols(y) {
						const $ = [];
						$.push(this.symbol);
						for (const [, v] of this.children) $.push(...v.getAllSymbols(y));
						return $;
					}
				}
				e.$6Db = o;
				class f extends p {
					constructor(y, $, v, S) {
						super(),
							(this.id = y),
							(this.parent = $),
							(this.label = v),
							(this.order = S),
							(this.children = new Map());
					}
					getAllSymbols(y) {
						const $ = [];
						for (const [, v] of this.children) $.push(...v.getAllSymbols(y));
						return $;
					}
					getItemEnclosingPosition(y, $ = !1) {
						return y ? this.c(y, this.children, $) : void 0;
					}
					c(y, $, v) {
						for (const [, S] of $)
							if (
								!(!S.symbol.range || !r.$iL.containsPosition(S.symbol.range, y))
							)
								return v ? S : this.c(y, S.children, v) || S;
					}
					updateMarker(y) {
						for (const [, $] of this.children) this.d(y, $);
					}
					d(y, $) {
						$.marker = void 0;
						const v = (0, t.$Ab)(
							y,
							$.symbol.range,
							r.$iL.compareRangesUsingStarts,
						);
						let S;
						v < 0
							? ((S = ~v),
								S > 0 &&
									r.$iL.areIntersecting(y[S - 1], $.symbol.range) &&
									(S -= 1))
							: (S = v);
						const I = [];
						let T;
						for (
							;
							S < y.length && r.$iL.areIntersecting($.symbol.range, y[S]);
							S++
						) {
							const P = y[S];
							I.push(P),
								(y[S] = void 0),
								(!T || P.severity > T) && (T = P.severity);
						}
						for (const [, P] of $.children) this.d(I, P);
						T && ($.marker = { count: I.length, topSev: T }), (0, t.$Mb)(y);
					}
				}
				e.$7Db = f;
				class b extends p {
					static create(y, $, v) {
						const S = new i.$Ce(v),
							I = new b($.uri),
							T = y.ordered($),
							P = T.map((L, D) => {
								const M = p.findId(`provider_${D}`, I),
									N = new f(
										M,
										I,
										L.displayName ?? "Unknown Outline Provider",
										D,
									);
								return Promise.resolve(L.provideDocumentSymbols($, S.token))
									.then(
										(A) => {
											for (const R of A || []) b.c(R, N);
											return N;
										},
										(A) => ((0, w.$5)(A), N),
									)
									.then((A) => {
										p.empty(A) ? A.remove() : I.e.set(M, A);
									});
							}),
							k = y.onDidChange(() => {
								const L = y.ordered($);
								(0, t.$yb)(L, T) || S.cancel();
							});
						return Promise.all(P)
							.then(() =>
								S.token.isCancellationRequested && !v.isCancellationRequested
									? b.create(y, $, v)
									: I.f(),
							)
							.finally(() => {
								S.dispose(), k.dispose(), S.dispose();
							});
					}
					static c(y, $) {
						const v = p.findId(y, $),
							S = new o(v, $, y);
						if (y.children) for (const I of y.children) b.c(I, S);
						$.children.set(S.id, S);
					}
					static get(y) {
						for (; y; ) {
							if (y instanceof b) return y;
							y = y.parent;
						}
					}
					constructor(y) {
						super(),
							(this.uri = y),
							(this.id = "root"),
							(this.parent = void 0),
							(this.e = new Map()),
							(this.children = new Map()),
							(this.id = "root"),
							(this.parent = void 0);
					}
					f() {
						let y = 0;
						for (const [$, v] of this.e)
							v.children.size === 0 ? this.e.delete($) : (y += 1);
						if (y !== 1) this.children = this.e;
						else {
							const $ = E.Iterable.first(this.e.values());
							for (const [, v] of $.children)
								(v.parent = this), this.children.set(v.id, v);
						}
						return this;
					}
					merge(y) {
						return this.uri.toString() !== y.uri.toString() ||
							this.e.size !== y.e.size
							? !1
							: ((this.e = y.e), (this.children = y.children), !0);
					}
					getAllSymbols(y) {
						const $ = [];
						for (const [, v] of this.e) $.push(...v.getAllSymbols(y));
						return $;
					}
					getGlobalItemEnclosingPosition(y) {
						let $;
						for (const [, v] of this.e)
							if ((($ = v.getItemEnclosingPosition(y, !0)), $)) break;
						return $;
					}
					getItemEnclosingPosition(y, $) {
						let v;
						if ($) {
							let I = $.parent;
							for (; I && !v; ) I instanceof f && (v = I), (I = I.parent);
						}
						let S;
						for (const [, I] of this.e)
							if (((S = I.getItemEnclosingPosition(y)), S && (!v || v === I)))
								break;
						return S;
					}
					getItemById(y) {
						return p.getElementById(y, this);
					}
					updateMarker(y) {
						y.sort(r.$iL.compareRangesUsingStarts);
						for (const [, $] of this.e) $.updateMarker(y.slice(0));
					}
					getTopLevelSymbols() {
						const y = [];
						for (const $ of this.children.values())
							$ instanceof o
								? y.push($.symbol)
								: y.push(
										...E.Iterable.map($.children.values(), (v) => v.symbol),
									);
						return y.sort(($, v) =>
							r.$iL.compareRangesUsingStarts($.range, v.range),
						);
					}
					asListOfDocumentSymbols() {
						const y = this.getTopLevelSymbols(),
							$ = [];
						return (
							b.g($, y, ""),
							$.sort(
								(v, S) =>
									m.$hL.compare(
										r.$iL.getStartPosition(v.range),
										r.$iL.getStartPosition(S.range),
									) ||
									m.$hL.compare(
										r.$iL.getEndPosition(S.range),
										r.$iL.getEndPosition(v.range),
									),
							)
						);
					}
					static g(y, $, v) {
						for (const S of $)
							y.push({
								kind: S.kind,
								tags: S.tags,
								name: S.name,
								detail: S.detail,
								containerName: S.containerName || v,
								range: S.range,
								selectionRange: S.selectionRange,
								children: void 0,
							}),
								S.children && b.g(y, S.children, S.name);
					}
				}
				(e.$8Db = b), (e.$9Db = (0, a.$Mi)("IOutlineModelService"));
				let s = class {
					constructor(y, $, v) {
						(this.f = y),
							(this.c = new n.$Zc()),
							(this.e = new C.$Jc(10, 0.7)),
							(this.d = $.for(y.documentSymbolProvider, "DocumentSymbols", {
								min: 350,
							})),
							this.c.add(
								v.onModelRemoved((S) => {
									this.e.delete(S.id);
								}),
							);
					}
					dispose() {
						this.c.dispose();
					}
					async getOrCreate(y, $) {
						const v = this.f.documentSymbolProvider,
							S = v.ordered(y);
						let I = this.e.get(y.id);
						if (
							!I ||
							I.versionId !== y.getVersionId() ||
							!(0, t.$yb)(I.provider, S)
						) {
							const P = new i.$Ce();
							(I = {
								versionId: y.getVersionId(),
								provider: S,
								promiseCnt: 0,
								source: P,
								promise: b.create(v, y, P.token),
								model: void 0,
							}),
								this.e.set(y.id, I);
							const k = Date.now();
							I.promise
								.then((L) => {
									(I.model = L), this.d.update(y, Date.now() - k);
								})
								.catch((L) => {
									this.e.delete(y.id);
								});
						}
						if (I.model) return I.model;
						I.promiseCnt += 1;
						const T = $.onCancellationRequested(() => {
							--I.promiseCnt === 0 && (I.source.cancel(), this.e.delete(y.id));
						});
						try {
							return await I.promise;
						} finally {
							T.dispose();
						}
					}
					getDebounceValue(y) {
						return this.d.get(y);
					}
				};
				(e.$0Db = s),
					(e.$0Db = s = Ne([j(0, g.$k3), j(1, u.$PBb), j(2, c.$QO)], s)),
					(0, h.$lK)(e.$9Db, s, h.InstantiationType.Delayed);
			},
		),
		define(
			de[2740],
			he([1, 0, 33, 28, 9, 42, 204, 31]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					d.$fk.registerCommand(
						"_executeDocumentSymbolProvider",
						async function (m, ...r) {
							const [u] = r;
							(0, i.$vg)(w.URI.isUri(u));
							const a = m.get(C.$9Db),
								c = await m.get(E.$MO).createModelReference(u);
							try {
								return (
									await a.getOrCreate(
										c.object.textEditorModel,
										t.CancellationToken.None,
									)
								).getTopLevelSymbols();
							} finally {
								c.dispose();
							}
						},
					);
			},
		),
		define(
			de[2741],
			he([1, 0, 24, 15, 29, 6, 249, 3, 54, 938, 34]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Er = void 0);
				class a extends d.$1c {
					constructor(c, n) {
						super(),
							(this.a = c),
							(this.b = n),
							(this.c = this.D(new E.$re())),
							(this.onDidChangeFile = this.c.event),
							(this.g = this.D(new E.$re())),
							(this.onDidWatchError = this.g.event),
							(this.j = []),
							(this.m = this.D(new i.$Kh(0))),
							(this.u = []),
							(this.w = this.D(new i.$Kh(0)));
					}
					watch(c, n) {
						return n.recursive || this.b?.watcher?.forceUniversal
							? this.n(c, n)
							: this.y(c, n);
					}
					n(c, n) {
						const g = {
								path: this.J(c),
								excludes: n.excludes,
								includes: n.includes,
								recursive: n.recursive,
								filter: n.filter,
								correlationId: n.correlationId,
							},
							p = (0, t.$Xb)(this.j, g);
						return (
							this.q(),
							(0, d.$Yc)(() => {
								p(), this.q();
							})
						);
					}
					q() {
						this.m.trigger(() => this.r()).catch((c) => (0, w.$4)(c));
					}
					r() {
						this.h ||
							((this.h = this.D(
								this.s(
									(n) => this.c.fire((0, r.$yr)(n)),
									(n) => this.G(n),
									this.a.getLevel() === u.LogLevel.Trace,
								),
							)),
							this.D(
								this.a.onDidChangeLogLevel(() => {
									this.h?.setVerboseLogging(
										this.a.getLevel() === u.LogLevel.Trace,
									);
								}),
							));
						const c = this.b?.watcher?.recursive?.usePolling;
						if (c === !0)
							for (const n of this.j)
								(0, r.$ur)(n) &&
									(n.pollingInterval =
										this.b?.watcher?.recursive?.pollingInterval ?? 5e3);
						else if (Array.isArray(c))
							for (const n of this.j)
								(0, r.$ur)(n) &&
									c.includes(n.path) &&
									(n.pollingInterval =
										this.b?.watcher?.recursive?.pollingInterval ?? 5e3);
						return this.h.watch(this.j);
					}
					y(c, n) {
						const g = {
								path: this.J(c),
								excludes: n.excludes,
								includes: n.includes,
								recursive: !1,
								filter: n.filter,
								correlationId: n.correlationId,
							},
							p = (0, t.$Xb)(this.u, g);
						return (
							this.z(),
							(0, d.$Yc)(() => {
								p(), this.z();
							})
						);
					}
					z() {
						this.w.trigger(() => this.C()).catch((c) => (0, w.$4)(c));
					}
					C() {
						return (
							this.t ||
								((this.t = this.D(
									this.F(
										(c) => this.c.fire((0, r.$yr)(c)),
										(c) => this.G(c),
										this.a.getLevel() === u.LogLevel.Trace,
									),
								)),
								this.D(
									this.a.onDidChangeLogLevel(() => {
										this.t?.setVerboseLogging(
											this.a.getLevel() === u.LogLevel.Trace,
										);
									}),
								)),
							this.t.watch(this.u)
						);
					}
					G(c) {
						c.type === "error" && this.g.fire(c.message), this.H(c);
					}
					H(c) {
						this.a[c.type](c.message);
					}
					I(c) {
						return (0, m.$mc)(c.fsPath);
					}
					J(c) {
						const n = this.I(c);
						return (0, C.$Og)(n);
					}
				}
				e.$Er = a;
			},
		),
		define(
			de[2742],
			he([
				1, 0, 24, 15, 76, 33, 6, 136, 103, 3, 387, 23, 240, 19, 408, 4, 22,
				2731, 34, 29,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				var s;
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$sr = void 0);
				let l = class extends r.$1c {
					static {
						s = this;
					}
					constructor($) {
						super(),
							(this.b = $),
							(this.a = 256 * 1024),
							(this.c = this.D(new C.$re())),
							(this.onDidChangeFileSystemProviderRegistrations = this.c.event),
							(this.f = this.D(new C.$re())),
							(this.onWillActivateFileSystemProvider = this.f.event),
							(this.g = this.D(new C.$re())),
							(this.onDidChangeFileSystemProviderCapabilities = this.g.event),
							(this.h = new Map()),
							(this.q = this.D(new C.$re())),
							(this.onDidRunOperation = this.q.event),
							(this.X = this.D(new C.$re())),
							(this.Y = this.D(new C.$re())),
							(this.onDidFilesChange = this.Y.event),
							(this.Z = this.D(new C.$re())),
							(this.onDidWatchError = this.Z.event),
							(this.$ = new Map()),
							(this.cb = this.D(new i.$Vh()));
					}
					registerProvider($, v) {
						if (this.h.has($))
							throw new Error(
								`A filesystem provider for the scheme '${$}' is already registered.`,
							);
						(0, h.mark)(`code/registerFilesystem/${$}`);
						const S = new r.$Zc();
						return (
							this.h.set($, v),
							this.c.fire({ added: !0, scheme: $, provider: v }),
							S.add(
								v.onDidChangeFile((I) => {
									const T = new p.$El(I, !this.S(v));
									this.X.fire(T), T.hasCorrelation() || this.Y.fire(T);
								}),
							),
							typeof v.onDidWatchError == "function" &&
								S.add(v.onDidWatchError((I) => this.Z.fire(new Error(I)))),
							S.add(
								v.onDidChangeCapabilities(() =>
									this.g.fire({ provider: v, scheme: $ }),
								),
							),
							(0, r.$Yc)(() => {
								this.c.fire({ added: !1, scheme: $, provider: v }),
									this.h.delete($),
									(0, r.$Vc)(S);
							})
						);
					}
					getProvider($) {
						return this.h.get($);
					}
					async activateProvider($) {
						const v = [];
						this.f.fire({
							scheme: $,
							join(S) {
								v.push(S);
							},
						}),
							!this.h.has($) && (await i.Promises.settled(v));
					}
					async canHandleResource($) {
						return await this.activateProvider($.scheme), this.hasProvider($);
					}
					hasProvider($) {
						return this.h.has($.scheme);
					}
					hasCapability($, v) {
						const S = this.h.get($.scheme);
						return !!(S && S.capabilities & v);
					}
					listCapabilities() {
						return m.Iterable.map(this.h, ([$, v]) => ({
							scheme: $,
							capabilities: v.capabilities,
						}));
					}
					async j($) {
						if (!(0, c.$rh)($))
							throw new p.$Gl(
								(0, g.localize)(1883, null, this.sb($)),
								p.FileOperationResult.FILE_INVALID_PATH,
							);
						await this.activateProvider($.scheme);
						const v = this.h.get($.scheme);
						if (!v) {
							const S = new b.$fb();
							throw (
								((S.message = (0, g.localize)(1884, null, $.toString())), S)
							);
						}
						return v;
					}
					async m($) {
						const v = await this.j($);
						if ((0, p.$rl)(v) || (0, p.$ol)(v) || (0, p.$sl)(v)) return v;
						throw new Error(
							`Filesystem provider for scheme '${$.scheme}' neither has FileReadWrite, FileReadStream nor FileOpenReadWriteClose capability which is needed for the read operation.`,
						);
					}
					async n($) {
						const v = await this.j($);
						if ((0, p.$rl)(v) || (0, p.$ol)(v)) return v;
						throw new Error(
							`Filesystem provider for scheme '${$.scheme}' neither has FileReadWrite nor FileOpenReadWriteClose capability which is needed for the write operation.`,
						);
					}
					async resolve($, v) {
						try {
							return await this.r($, v);
						} catch (S) {
							throw (0, p.$Bl)(S) === p.FileSystemProviderErrorCode.FileNotFound
								? new p.$Gl(
										(0, g.localize)(1885, null, this.sb($)),
										p.FileOperationResult.FILE_NOT_FOUND,
									)
								: (0, p.$zl)(S);
						}
					}
					async r($, v) {
						const S = await this.j($),
							I = this.S(S),
							T = v?.resolveTo,
							P = v?.resolveSingleChildDescendants,
							k = v?.resolveMetadata,
							L = await S.stat($);
						let D;
						return this.s(
							S,
							$,
							L,
							void 0,
							!!k,
							(M, N) => (
								D ||
									((D = u.$Si.forUris(() => !I)),
									D.set($, !0),
									T && D.fill(!0, T)),
								D.get(M.resource) ||
								D.findSuperstr(M.resource.with({ query: null, fragment: null }))
									? !0
									: M.isDirectory && P
										? N === 1
										: !1
							),
						);
					}
					async s($, v, S, I, T, P) {
						const { providerExtUri: k } = this.R($),
							L = {
								resource: v,
								name: k.basename(v),
								isFile: (S.type & p.FileType.File) !== 0,
								isDirectory: (S.type & p.FileType.Directory) !== 0,
								isSymbolicLink: (S.type & p.FileType.SymbolicLink) !== 0,
								mtime: S.mtime,
								ctime: S.ctime,
								size: S.size,
								readonly:
									!!((S.permissions ?? 0) & p.FilePermission.Readonly) ||
									!!(
										$.capabilities & p.FileSystemProviderCapabilities.Readonly
									),
								locked: !!((S.permissions ?? 0) & p.FilePermission.Locked),
								etag: (0, p.$Rl)({ mtime: S.mtime, size: S.size }),
								children: void 0,
							};
						if (L.isDirectory && P(L, I)) {
							try {
								const D = await $.readdir(v),
									M = await i.Promises.settled(
										D.map(async ([N, A]) => {
											try {
												const R = k.joinPath(v, N),
													O = T ? await $.stat(R) : { type: A };
												return await this.s($, R, O, D.length, T, P);
											} catch (R) {
												return this.b.trace(R), null;
											}
										}),
									);
								L.children = (0, t.$Lb)(M);
							} catch (D) {
								this.b.trace(D), (L.children = []);
							}
							return L;
						}
						return L;
					}
					async resolveAll($) {
						return i.Promises.settled(
							$.map(async (v) => {
								try {
									return {
										stat: await this.r(v.resource, v.options),
										success: !0,
									};
								} catch (S) {
									return this.b.trace(S), { stat: void 0, success: !1 };
								}
							}),
						);
					}
					async stat($) {
						const v = await this.j($),
							S = await v.stat($);
						return this.s(v, $, S, void 0, !0, () => !1);
					}
					async exists($) {
						const v = await this.j($);
						try {
							return !!(await v.stat($));
						} catch {
							return !1;
						}
					}
					async canCreateFile($, v) {
						try {
							await this.t($, v);
						} catch (S) {
							return S;
						}
						return !0;
					}
					async t($, v) {
						if (!v?.overwrite && (await this.exists($)))
							throw new p.$Gl(
								(0, g.localize)(1886, null, this.sb($)),
								p.FileOperationResult.FILE_MODIFIED_SINCE,
								v,
							);
					}
					async createFile($, v = w.$Te.fromString(""), S) {
						await this.t($, S);
						const I = await this.writeFile($, v);
						return this.q.fire(new p.$Dl($, p.FileOperation.CREATE, I)), I;
					}
					async writeFile($, v, S) {
						const I = this.qb(await this.n($), $),
							{ providerExtUri: T } = this.R(I);
						let P = S;
						if ((0, p.$ul)(I) && !P?.atomic) {
							const k = I.enforceAtomicWriteFile?.($);
							k && (P = { ...S, atomic: k });
						}
						try {
							(await this.u(I, $, P)) || (await this.U(I, T.dirname($)));
							let L;
							if ((0, p.$ol)(I) && !(v instanceof w.$Te))
								if ((0, n.$Fe)(v)) {
									const D = await (0, n.$Me)(v, 3);
									D.ended ? (L = w.$Te.concat(D.buffer)) : (L = D);
								} else L = (0, n.$Je)(v, (D) => w.$Te.concat(D), 3);
							else L = v;
							!(0, p.$rl)(I) ||
							((0, p.$ol)(I) && L instanceof w.$Te) ||
							((0, p.$ol)(I) && (0, p.$ul)(I) && P?.atomic)
								? await this.hb(I, $, P, L)
								: await this.db(
										I,
										$,
										P,
										L instanceof w.$Te ? (0, w.$5e)(L) : L,
									),
								this.q.fire(new p.$Dl($, p.FileOperation.WRITE));
						} catch (k) {
							throw new p.$Gl(
								(0, g.localize)(
									1887,
									null,
									this.sb($),
									(0, p.$zl)(k).toString(),
								),
								(0, p.$Cl)(k),
								P,
							);
						}
						return this.resolve($, { resolveMetadata: !0 });
					}
					async u($, v, S) {
						const I = !!S?.unlock;
						if (
							I &&
							!(
								$.capabilities &
								p.FileSystemProviderCapabilities.FileWriteUnlock
							)
						)
							throw new Error((0, g.localize)(1888, null, this.sb(v)));
						if (!!S?.atomic) {
							if (
								!(
									$.capabilities &
									p.FileSystemProviderCapabilities.FileAtomicWrite
								)
							)
								throw new Error((0, g.localize)(1889, null, this.sb(v)));
							if (
								!(
									$.capabilities &
									p.FileSystemProviderCapabilities.FileReadWrite
								)
							)
								throw new Error((0, g.localize)(1890, null, this.sb(v)));
							if (I) throw new Error((0, g.localize)(1891, null, this.sb(v)));
						}
						let P;
						try {
							P = await $.stat(v);
						} catch {
							return;
						}
						if (P.type & p.FileType.Directory)
							throw new p.$Gl(
								(0, g.localize)(1892, null, this.sb(v)),
								p.FileOperationResult.FILE_IS_DIRECTORY,
								S,
							);
						if (
							(this.rb(v, P),
							typeof S?.mtime == "number" &&
								typeof S.etag == "string" &&
								S.etag !== p.$Ql &&
								typeof P.mtime == "number" &&
								typeof P.size == "number" &&
								S.mtime < P.mtime &&
								S.etag !== (0, p.$Rl)({ mtime: S.mtime, size: P.size }))
						)
							throw new p.$Gl(
								(0, g.localize)(1893, null),
								p.FileOperationResult.FILE_MODIFIED_SINCE,
								S,
							);
						return P;
					}
					async readFile($, v, S) {
						const I = await this.m($);
						return v?.atomic ? this.w(I, $, v, S) : this.z(I, $, v, S);
					}
					async w($, v, S, I) {
						return new Promise((T, P) => {
							this.cb.queueFor(
								v,
								async () => {
									try {
										const k = await this.z($, v, S, I);
										T(k);
									} catch (k) {
										P(k);
									}
								},
								this.R($).providerExtUri,
							);
						});
					}
					async z($, v, S, I) {
						const T = await this.C($, v, { ...S, preferUnbuffered: !0 }, I);
						return { ...T, value: await (0, w.$6e)(T.value) };
					}
					async readFileStream($, v, S) {
						const I = await this.m($);
						return this.C(I, $, v, S);
					}
					async C($, v, S, I) {
						const T = new E.$Ce(I);
						let P = S;
						(0, p.$tl)($) &&
							$.enforceAtomicReadFile?.(v) &&
							(P = { ...S, atomic: !0 });
						const k = this.J(v, P).then(
							(D) => D,
							(D) => {
								throw (T.dispose(!0), D);
							},
						);
						let L;
						try {
							return (
								typeof P?.etag == "string" && P.etag !== p.$Ql && (await k),
								(P?.atomic && (0, p.$tl)($)) ||
								!((0, p.$rl)($) || (0, p.$sl)($)) ||
								((0, p.$ol)($) && P?.preferUnbuffered)
									? (L = this.I($, v, P))
									: (0, p.$sl)($)
										? (L = this.G($, v, T.token, P))
										: (L = this.H($, v, T.token, P)),
								L.on("end", () => T.dispose()),
								L.on("error", () => T.dispose()),
								{ ...(await k), value: L }
							);
						} catch (D) {
							throw (L && (await (0, n.$Ke)(L)), this.F(D, v, P));
						}
					}
					F($, v, S) {
						const I = (0, g.localize)(
							1894,
							null,
							this.sb(v),
							(0, p.$zl)($).toString(),
						);
						return $ instanceof p.$Il
							? new p.$Il(I, $.stat, S)
							: $ instanceof p.$Hl
								? new p.$Hl(I, $.fileOperationResult, $.size, $.options)
								: new p.$Gl(I, (0, p.$Cl)($), S);
					}
					G($, v, S, I = Object.create(null)) {
						const T = $.readFileStream(v, I, S);
						return (0, n.$Qe)(
							T,
							{
								data: (P) => (P instanceof w.$Te ? P : w.$Te.wrap(P)),
								error: (P) => this.F(P, v, I),
							},
							(P) => w.$Te.concat(P),
						);
					}
					H($, v, S, I = Object.create(null)) {
						const T = (0, w.$0e)();
						return (
							(0, o.$rr)(
								$,
								v,
								T,
								(P) => P,
								{
									...I,
									bufferSize: this.a,
									errorTransformer: (P) => this.F(P, v, I),
								},
								S,
							),
							T
						);
					}
					I($, v, S) {
						const I = (0, n.$He)((T) => w.$Te.concat(T));
						return (
							(async () => {
								try {
									let T;
									S?.atomic && (0, p.$tl)($)
										? (T = await $.readFile(v, { atomic: !0 }))
										: (T = await $.readFile(v)),
										typeof S?.position == "number" && (T = T.slice(S.position)),
										typeof S?.length == "number" && (T = T.slice(0, S.length)),
										this.L(v, T.byteLength, S),
										I.end(w.$Te.wrap(T));
								} catch (T) {
									I.error(T), I.end();
								}
							})(),
							I
						);
					}
					async J($, v) {
						const S = await this.resolve($, { resolveMetadata: !0 });
						if (S.isDirectory)
							throw new p.$Gl(
								(0, g.localize)(1895, null, this.sb($)),
								p.FileOperationResult.FILE_IS_DIRECTORY,
								v,
							);
						if (
							typeof v?.etag == "string" &&
							v.etag !== p.$Ql &&
							v.etag === S.etag
						)
							throw new p.$Il((0, g.localize)(1896, null), S, v);
						return this.L($, S.size, v), S;
					}
					L($, v, S) {
						if (typeof S?.limits?.size == "number" && v > S.limits.size)
							throw new p.$Hl(
								(0, g.localize)(1897, null, this.sb($)),
								p.FileOperationResult.FILE_TOO_LARGE,
								v,
								S,
							);
					}
					async canMove($, v, S) {
						return this.M($, v, "move", S);
					}
					async canCopy($, v, S) {
						return this.M($, v, "copy", S);
					}
					async M($, v, S, I) {
						if ($.toString() !== v.toString())
							try {
								const T =
										S === "move"
											? this.qb(await this.n($), $)
											: await this.m($),
									P = this.qb(await this.n(v), v);
								await this.Q(T, $, P, v, S, I);
							} catch (T) {
								return T;
							}
						return !0;
					}
					async move($, v, S) {
						const I = this.qb(await this.n($), $),
							T = this.qb(await this.n(v), v),
							P = await this.N(I, $, T, v, "move", !!S),
							k = await this.resolve(v, { resolveMetadata: !0 });
						return (
							this.q.fire(
								new p.$Dl(
									$,
									P === "move" ? p.FileOperation.MOVE : p.FileOperation.COPY,
									k,
								),
							),
							k
						);
					}
					async copy($, v, S) {
						const I = await this.m($),
							T = this.qb(await this.n(v), v),
							P = await this.N(I, $, T, v, "copy", !!S),
							k = await this.resolve(v, { resolveMetadata: !0 });
						return (
							this.q.fire(
								new p.$Dl(
									$,
									P === "copy" ? p.FileOperation.COPY : p.FileOperation.MOVE,
									k,
								),
							),
							k
						);
					}
					async N($, v, S, I, T, P) {
						if (v.toString() === I.toString()) return T;
						const { exists: k, isSameResourceWithDifferentPathCase: L } =
							await this.Q($, v, S, I, T, P);
						if (
							(k && !L && P && (await this.del(I, { recursive: !0 })),
							await this.U(S, this.R(S).providerExtUri.dirname(I)),
							T === "copy")
						) {
							if ($ === S && (0, p.$pl)($))
								await $.copy(v, I, { overwrite: P });
							else {
								const D = await this.resolve(v);
								D.isDirectory
									? await this.P($, D, S, I)
									: await this.O($, v, S, I);
							}
							return T;
						} else
							return $ === S
								? (await $.rename(v, I, { overwrite: P }), T)
								: (await this.N($, v, S, I, "copy", P),
									await this.del(v, { recursive: !0 }),
									"copy");
					}
					async O($, v, S, I) {
						if ((0, p.$rl)($) && (0, p.$rl)(S)) return this.jb($, v, S, I);
						if ((0, p.$rl)($) && (0, p.$ol)(S)) return this.pb($, v, S, I);
						if ((0, p.$ol)($) && (0, p.$rl)(S)) return this.nb($, v, S, I);
						if ((0, p.$ol)($) && (0, p.$ol)(S)) return this.lb($, v, S, I);
					}
					async P($, v, S, I) {
						await S.mkdir(I),
							Array.isArray(v.children) &&
								(await i.Promises.settled(
									v.children.map(async (T) => {
										const P = this.R(S).providerExtUri.joinPath(I, T.name);
										return T.isDirectory
											? this.P($, await this.resolve(T.resource), S, P)
											: this.O($, T.resource, S, P);
									}),
								));
					}
					async Q($, v, S, I, T, P) {
						let k = !1;
						if ($ === S) {
							const { providerExtUri: D, isPathCaseSensitive: M } = this.R($);
							if ((M || (k = D.isEqual(v, I)), k && T === "copy"))
								throw new Error(
									(0, g.localize)(1898, null, this.sb(v), this.sb(I)),
								);
							if (!k && D.isEqualOrParent(I, v))
								throw new Error(
									(0, g.localize)(1899, null, this.sb(v), this.sb(I)),
								);
						}
						const L = await this.exists(I);
						if (L && !k) {
							if (!P)
								throw new p.$Gl(
									(0, g.localize)(1900, null, this.sb(v), this.sb(I)),
									p.FileOperationResult.FILE_MOVE_CONFLICT,
								);
							if ($ === S) {
								const { providerExtUri: D } = this.R($);
								if (D.isEqualOrParent(v, I))
									throw new Error(
										(0, g.localize)(1901, null, this.sb(v), this.sb(I)),
									);
							}
						}
						return { exists: L, isSameResourceWithDifferentPathCase: k };
					}
					R($) {
						const v = this.S($);
						return {
							providerExtUri: v ? c.$dh : c.$fh,
							isPathCaseSensitive: v,
						};
					}
					S($) {
						return !!(
							$.capabilities &
							p.FileSystemProviderCapabilities.PathCaseSensitive
						);
					}
					async createFolder($) {
						const v = this.qb(await this.j($), $);
						await this.U(v, $);
						const S = await this.resolve($, { resolveMetadata: !0 });
						return this.q.fire(new p.$Dl($, p.FileOperation.CREATE, S)), S;
					}
					async U($, v) {
						const S = [],
							{ providerExtUri: I } = this.R($);
						for (; !I.isEqual(v, I.dirname(v)); )
							try {
								if (!((await $.stat(v)).type & p.FileType.Directory))
									throw new Error((0, g.localize)(1902, null, this.sb(v)));
								break;
							} catch (T) {
								if (
									(0, p.$Bl)(T) !== p.FileSystemProviderErrorCode.FileNotFound
								)
									throw T;
								S.push(I.basename(v)), (v = I.dirname(v));
							}
						for (let T = S.length - 1; T >= 0; T--) {
							v = I.joinPath(v, S[T]);
							try {
								await $.mkdir(v);
							} catch (P) {
								if ((0, p.$Bl)(P) !== p.FileSystemProviderErrorCode.FileExists)
									throw P;
							}
						}
					}
					async canDelete($, v) {
						try {
							await this.W($, v);
						} catch (S) {
							return S;
						}
						return !0;
					}
					async W($, v) {
						const S = this.qb(await this.j($), $),
							I = !!v?.useTrash;
						if (I && !(S.capabilities & p.FileSystemProviderCapabilities.Trash))
							throw new Error((0, g.localize)(1903, null, this.sb($)));
						const T = v?.atomic;
						if (
							T &&
							!(
								S.capabilities &
								p.FileSystemProviderCapabilities.FileAtomicDelete
							)
						)
							throw new Error((0, g.localize)(1904, null, this.sb($)));
						if (I && T)
							throw new Error((0, g.localize)(1905, null, this.sb($)));
						let P;
						try {
							P = await S.stat($);
						} catch {}
						if (P) this.rb($, P);
						else
							throw new p.$Gl(
								(0, g.localize)(1906, null, this.sb($)),
								p.FileOperationResult.FILE_NOT_FOUND,
							);
						if (!!!v?.recursive) {
							const L = await this.resolve($);
							if (
								L.isDirectory &&
								Array.isArray(L.children) &&
								L.children.length > 0
							)
								throw new Error((0, g.localize)(1907, null, this.sb($)));
						}
						return S;
					}
					async del($, v) {
						const S = await this.W($, v);
						let I = v;
						if ((0, p.$vl)(S) && !I?.atomic) {
							const L = S.enforceAtomicDelete?.($);
							L && (I = { ...v, atomic: L });
						}
						const T = !!I?.useTrash,
							P = !!I?.recursive,
							k = I?.atomic ?? !1;
						await S.delete($, { recursive: P, useTrash: T, atomic: k }),
							this.q.fire(new p.$Dl($, p.FileOperation.DELETE));
					}
					async cloneFile($, v) {
						const S = await this.j($),
							I = this.qb(await this.n(v), v);
						if (!(S === I && this.R(S).providerExtUri.isEqual($, v)))
							return S === I && (0, p.$ql)(S)
								? S.cloneFile($, v)
								: (await this.U(I, this.R(I).providerExtUri.dirname(v)),
									S === I && (0, p.$pl)(S)
										? this.cb.queueFor(
												$,
												() => S.copy($, v, { overwrite: !0 }),
												this.R(S).providerExtUri,
											)
										: this.cb.queueFor(
												$,
												() => this.O(S, $, I, v),
												this.R(S).providerExtUri,
											));
					}
					static {
						this.ab = 0;
					}
					createWatcher($, v) {
						return this.watch($, { ...v, correlationId: s.ab++ });
					}
					watch($, v = { recursive: !1, excludes: [] }) {
						const S = new r.$Zc();
						let I = !1,
							T = () => {
								I = !0;
							};
						S.add((0, r.$Yc)(() => T())),
							(async () => {
								try {
									const k = await this.bb($, v);
									I ? (0, r.$Vc)(k) : (T = () => (0, r.$Vc)(k));
								} catch (k) {
									this.b.error(k);
								}
							})();
						const P = v.correlationId;
						if (typeof P == "number") {
							const k = S.add(new C.$re());
							return (
								S.add(
									this.X.event((D) => {
										D.correlates(P) && k.fire(D);
									}),
								),
								{ onDidChange: k.event, dispose: () => S.dispose() }
							);
						}
						return S;
					}
					async bb($, v) {
						const S = await this.j($),
							I = (0, d.$Aj)([this.R(S).providerExtUri.getComparisonKey($), v]);
						let T = this.$.get(I);
						return (
							T ||
								((T = { count: 0, disposable: S.watch($, v) }),
								this.$.set(I, T)),
							(T.count += 1),
							(0, r.$Yc)(() => {
								T &&
									(T.count--,
									T.count === 0 &&
										((0, r.$Vc)(T.disposable), this.$.delete(I)));
							})
						);
					}
					dispose() {
						super.dispose();
						for (const [, $] of this.$) (0, r.$Vc)($.disposable);
						this.$.clear();
					}
					async db($, v, S, I) {
						return this.cb.queueFor(
							v,
							async () => {
								const T = await $.open(v, {
									create: !0,
									unlock: S?.unlock ?? !1,
								});
								try {
									(0, n.$Fe)(I) || (0, n.$Ge)(I)
										? await this.eb($, T, I)
										: await this.fb($, T, I);
								} catch (P) {
									throw (0, p.$zl)(P);
								} finally {
									await $.close(T);
								}
							},
							this.R($).providerExtUri,
						);
					}
					async eb($, v, S) {
						let I = 0,
							T;
						if ((0, n.$Ge)(S)) {
							if (S.buffer.length > 0) {
								const P = w.$Te.concat(S.buffer);
								await this.gb($, v, P, P.byteLength, I, 0), (I += P.byteLength);
							}
							if (S.ended) return;
							T = S.stream;
						} else T = S;
						return new Promise((P, k) => {
							(0, n.$Le)(T, {
								onData: async (L) => {
									T.pause();
									try {
										await this.gb($, v, L, L.byteLength, I, 0);
									} catch (D) {
										return k(D);
									}
									(I += L.byteLength), setTimeout(() => T.resume());
								},
								onError: (L) => k(L),
								onEnd: () => P(),
							});
						});
					}
					async fb($, v, S) {
						let I = 0,
							T;
						for (; (T = S.read()) !== null; )
							await this.gb($, v, T, T.byteLength, I, 0), (I += T.byteLength);
					}
					async gb($, v, S, I, T, P) {
						let k = 0;
						for (; k < I; ) {
							const L = await $.write(v, T + k, S.buffer, P + k, I - k);
							k += L;
						}
					}
					async hb($, v, S, I) {
						return this.cb.queueFor(
							v,
							() => this.ib($, v, S, I),
							this.R($).providerExtUri,
						);
					}
					async ib($, v, S, I) {
						let T;
						I instanceof w.$Te
							? (T = I)
							: (0, n.$Fe)(I)
								? (T = await (0, w.$6e)(I))
								: (0, n.$Ge)(I)
									? (T = await (0, w.$7e)(I))
									: (T = (0, w.$4e)(I)),
							await $.writeFile(v, T.buffer, {
								create: !0,
								overwrite: !0,
								unlock: S?.unlock ?? !1,
								atomic: S?.atomic ?? !1,
							});
					}
					async jb($, v, S, I) {
						return this.cb.queueFor(
							I,
							() => this.kb($, v, S, I),
							this.R(S).providerExtUri,
						);
					}
					async kb($, v, S, I) {
						let T, P;
						try {
							(T = await $.open(v, { create: !1 })),
								(P = await S.open(I, { create: !0, unlock: !1 }));
							const k = w.$Te.alloc(this.a);
							let L = 0,
								D = 0,
								M = 0;
							do
								(M = await $.read(T, L, k.buffer, D, k.byteLength - D)),
									await this.gb(S, P, k, M, L, D),
									(L += M),
									(D += M),
									D === k.byteLength && (D = 0);
							while (M > 0);
						} catch (k) {
							throw (0, p.$zl)(k);
						} finally {
							await i.Promises.settled([
								typeof T == "number" ? $.close(T) : Promise.resolve(),
								typeof P == "number" ? S.close(P) : Promise.resolve(),
							]);
						}
					}
					async lb($, v, S, I) {
						return this.cb.queueFor(
							I,
							() => this.mb($, v, S, I),
							this.R(S).providerExtUri,
						);
					}
					async mb($, v, S, I) {
						return S.writeFile(I, await $.readFile(v), {
							create: !0,
							overwrite: !0,
							unlock: !1,
							atomic: !1,
						});
					}
					async nb($, v, S, I) {
						return this.cb.queueFor(
							I,
							() => this.ob($, v, S, I),
							this.R(S).providerExtUri,
						);
					}
					async ob($, v, S, I) {
						const T = await S.open(I, { create: !0, unlock: !1 });
						try {
							const P = await $.readFile(v);
							await this.gb(S, T, w.$Te.wrap(P), P.byteLength, 0, 0);
						} catch (P) {
							throw (0, p.$zl)(P);
						} finally {
							await S.close(T);
						}
					}
					async pb($, v, S, I) {
						const T = await (0, w.$6e)(this.H($, v, E.CancellationToken.None));
						await this.hb(S, I, void 0, T);
					}
					qb($, v) {
						if ($.capabilities & p.FileSystemProviderCapabilities.Readonly)
							throw new p.$Gl(
								(0, g.localize)(1908, null, this.sb(v)),
								p.FileOperationResult.FILE_PERMISSION_DENIED,
							);
						return $;
					}
					rb($, v) {
						if ((v.permissions ?? 0) & p.FilePermission.Readonly)
							throw new p.$Gl(
								(0, g.localize)(1909, null, this.sb($)),
								p.FileOperationResult.FILE_PERMISSION_DENIED,
							);
					}
					sb($) {
						return $.scheme === a.Schemas.file ? $.fsPath : $.toString(!0);
					}
				};
				(e.$sr = l), (e.$sr = l = s = Ne([j(0, f.$ik)], l));
			},
		),
		