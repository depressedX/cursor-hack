import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../../base/common/errorMessage.js';
import '../../../base/common/event.js';
import '../../../base/common/hash.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/map.js';
import '../../../base/common/platform.js';
import '../../../base/common/resources.js';
import '../../../base/common/types.js';
import '../../../base/common/uri.js';
import '../../contextkey/common/contextkey.js';
import '../../instantiation/common/instantiation.js';
define(
			de[34],
			he([1, 0, 4, 163, 6, 136, 3, 59, 12, 19, 28, 9, 8, 5]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*errorMessage*/,
 w /*event*/,
 E /*hash*/,
 C /*lifecycle*/,
 d /*map*/,
 m /*platform*/,
 r /*resources*/,
 u /*types*/,
 a /*uri*/,
 h /*contextkey*/,
 c /*instantiation*/) {
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
		