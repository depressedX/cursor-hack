import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../child_process.js';
import '../../../../../net.js';
import '../../../../base/common/objects.js';
import '../../../../base/common/path.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/strings.js';
import '../../../../base/node/pfs.js';
import '../../../../nls.js';
import '../common/abstractDebugAdapter.js';
define(
			Pe[524],
			Ne([1, 0, 81, 105, 27, 18, 13, 15, 43, 10, 290]),
			function (we, t, e, r, S, N, P, I, l, n, p) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$ujd = t.$tjd = t.$sjd = t.$rjd = t.$qjd = void 0),
					(e = tt(e)),
					(r = tt(r)),
					(S = tt(S)),
					(N = tt(N)),
					(P = tt(P)),
					(I = tt(I)),
					(n = tt(n));
				class y extends p.$Wmc {
					static {
						this.b = `\r
\r
`;
					}
					static {
						this.i = /\r?\n/;
					}
					static {
						this.l = /: */;
					}
					constructor() {
						super(), (this.r = Buffer.allocUnsafe(0)), (this.t = -1);
					}
					v($, T) {
						(this.p = T),
							(this.r = Buffer.allocUnsafe(0)),
							(this.t = -1),
							$.on("data", (a) => this.x(a));
					}
					sendMessage($) {
						if (this.p) {
							const T = JSON.stringify($);
							this.p.write(
								`Content-Length: ${Buffer.byteLength(T, "utf8")}${y.b}${T}`,
								"utf8",
							);
						}
					}
					x($) {
						for (this.r = Buffer.concat([this.r, $]); ; ) {
							if (this.t >= 0) {
								if (this.r.length >= this.t) {
									const T = this.r.toString("utf8", 0, this.t);
									if (
										((this.r = this.r.slice(this.t)),
										(this.t = -1),
										T.length > 0)
									)
										try {
											this.acceptMessage(JSON.parse(T));
										} catch (a) {
											this.n.fire(
												new Error(
													(a.message || a) +
														`
` +
														T,
												),
											);
										}
									continue;
								}
							} else {
								const T = this.r.indexOf(y.b);
								if (T !== -1) {
									const u = this.r.toString("utf8", 0, T).split(y.i);
									for (const s of u) {
										const f = s.split(y.l);
										f[0] === "Content-Length" && (this.t = Number(f[1]));
									}
									this.r = this.r.slice(T + y.b.length);
									continue;
								}
							}
							break;
						}
					}
				}
				t.$qjd = y;
				class d extends y {
					startSession() {
						return new Promise(($, T) => {
							let a = !1;
							(this.y = this.z(() => {
								this.v(this.y, this.y), $(), (a = !0);
							})),
								this.y.on("close", () => {
									a
										? this.n.fire(new Error("connection closed"))
										: T(new Error("connection closed"));
								}),
								this.y.on("error", (u) => {
									a ? this.n.fire(u) : T(u);
								});
						});
					}
					async stopSession() {
						await this.w(), this.y && (this.y.end(), (this.y = void 0));
					}
				}
				t.$rjd = d;
				class k extends d {
					constructor($) {
						super(), (this.A = $);
					}
					z($) {
						return r.createConnection(
							this.A.port,
							this.A.host || "127.0.0.1",
							$,
						);
					}
				}
				t.$sjd = k;
				class g extends d {
					constructor($) {
						super(), (this.A = $);
					}
					z($) {
						return r.createConnection(this.A.path, $);
					}
				}
				t.$tjd = g;
				class c extends y {
					constructor($, T) {
						super(), (this.z = $), (this.A = T);
					}
					async startSession() {
						const $ = this.z.command,
							T = this.z.args,
							a = this.z.options || {};
						try {
							if ($)
								if (N.$nc($)) {
									if (!(await l.Promises.exists($)))
										throw new Error(n.localize(5906, null, $));
								} else $.indexOf("/") < 0 && $.indexOf("\\") < 0;
							else throw new Error(n.localize(5907, null, this.A));
							let u = process.env;
							if (
								(a.env &&
									Object.keys(a.env).length > 0 &&
									(u = S.$yo(S.$vo(process.env), a.env)),
								$ === "node")
							)
								if (Array.isArray(T) && T.length > 0) {
									const s =
											!!process.env.ELECTRON_RUN_AS_NODE ||
											!!process.versions.electron,
										f = {
											env: u,
											execArgv: s
												? [
														"-e",
														"delete process.env.ELECTRON_RUN_AS_NODE;require(process.argv[1])",
													]
												: [],
											silent: !0,
										};
									a.cwd && (f.cwd = a.cwd);
									const o = e.fork(T[0], T.slice(1), f);
									if (!o.pid) throw new Error(n.localize(5908, null, T[0]));
									this.y = o;
								} else throw new Error(n.localize(5909, null));
							else {
								let s = $,
									f = T;
								const o = { env: u };
								a.cwd && (o.cwd = a.cwd),
									P.$l &&
										($.endsWith(".bat") || $.endsWith(".cmd")) &&
										((o.shell = !0),
										(s = `"${$}"`),
										(f = T.map(
											(w) => ((w = w.replace(/"/g, '\\"')), `"${w}"`),
										))),
									(this.y = e.spawn(s, f, o));
							}
							this.y.on("error", (s) => {
								this.n.fire(s);
							}),
								this.y.on("exit", (s, f) => {
									this.o.fire(s);
								}),
								this.y.stdout.on("close", () => {
									this.n.fire(new Error("read error"));
								}),
								this.y.stdout.on("error", (s) => {
									this.n.fire(s);
								}),
								this.y.stdin.on("error", (s) => {
									this.n.fire(s);
								}),
								this.y.stderr.resume(),
								this.v(this.y.stdout, this.y.stdin);
						} catch (u) {
							this.n.fire(u);
						}
					}
					async stopSession() {
						return this.y
							? (await this.w(),
								P.$l
									? new Promise(($, T) => {
											const a = e.exec(
												`taskkill /F /T /PID ${this.y.pid}`,
												function (u, s, f) {
													if (u) return T(u);
												},
											);
											a.on("exit", $), a.on("error", T);
										})
									: (this.y.kill("SIGTERM"), Promise.resolve(void 0)))
							: Promise.resolve(void 0);
					}
					static B($, T) {
						if (!$) return;
						const a = Object.create(null);
						$.runtime &&
							($.runtime.indexOf("./") === 0
								? (a.runtime = N.$oc(T, $.runtime))
								: (a.runtime = $.runtime)),
							$.runtimeArgs && (a.runtimeArgs = $.runtimeArgs),
							$.program &&
								(N.$nc($.program)
									? (a.program = $.program)
									: (a.program = N.$oc(T, $.program))),
							$.args && (a.args = $.args);
						const u = $;
						return (
							u.win && (a.win = c.B(u.win, T)),
							u.winx86 && (a.winx86 = c.B(u.winx86, T)),
							u.windows && (a.windows = c.B(u.windows, T)),
							u.osx && (a.osx = c.B(u.osx, T)),
							u.linux && (a.linux = c.B(u.linux, T)),
							a
						);
					}
					static platformAdapterExecutable($, T) {
						let a = Object.create(null);
						T = T.toLowerCase();
						for (const m of $)
							if (m.contributes) {
								const E = m.contributes.debuggers;
								E &&
									E.length > 0 &&
									E.filter(
										(R) => typeof R.type == "string" && I.$Mf(R.type, T),
									).forEach((R) => {
										const C = c.B(R, m.extensionLocation.fsPath);
										a = S.$yo(a, C, m.isBuiltin);
									});
							}
						let u;
						P.$l && !process.env.hasOwnProperty("PROCESSOR_ARCHITEW6432")
							? (u = a.winx86 || a.win || a.windows)
							: P.$l
								? (u = a.win || a.windows)
								: P.$m
									? (u = a.osx)
									: P.$n && (u = a.linux),
							(u = u || a);
						const s = u.program || a.program,
							f = u.args || a.args,
							o = u.runtime || a.runtime,
							w = u.runtimeArgs || a.runtimeArgs;
						if (o)
							return {
								type: "executable",
								command: o,
								args: (w || [])
									.concat(typeof s == "string" ? [s] : [])
									.concat(f || []),
							};
						if (s) return { type: "executable", command: s, args: f || [] };
					}
				}
				t.$ujd = c;
			},
		),
		