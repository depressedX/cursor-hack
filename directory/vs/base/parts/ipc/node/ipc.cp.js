import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../child_process.js';
import '../../../common/async.js';
import '../../../common/buffer.js';
import '../../../common/cancellation.js';
import '../../../common/console.js';
import '../../../common/errors.js';
import '../../../common/event.js';
import '../../../common/lifecycle.js';
import '../../../common/objects.js';
import '../../../node/processes.js';
import '../../../common/processes.js';
import '../common/ipc.js';
define(
			Pe[469],
			Ne([1, 0, 81, 9, 22, 23, 468, 12, 4, 3, 27, 177, 174, 136]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d, k) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Kr = t.$Jr = void 0),
					(I = tt(I));
				class g extends k.$oi {
					constructor($) {
						super(
							{
								send: (T) => {
									try {
										process.send?.(T.buffer.toString("base64"));
									} catch {}
								},
								onMessage: l.Event.fromNodeEventEmitter(
									process,
									"message",
									(T) => S.$Te.wrap(Buffer.from(T, "base64")),
								),
							},
							$,
						),
							process.once("disconnect", () => this.dispose());
					}
				}
				t.$Jr = g;
				class c {
					constructor($, T) {
						(this.i = $),
							(this.j = T),
							(this.c = new Set()),
							(this.g = new Map()),
							(this.h = new l.$re()),
							(this.onDidProcessExit = this.h.event);
						const a = T && T.timeout ? T.timeout : 6e4;
						(this.b = new r.$Jh(a)), (this.d = null), (this.f = null);
					}
					getChannel($) {
						const T = this;
						return {
							call(a, u, s) {
								return T.k($, a, u, s);
							},
							listen(a, u) {
								return T.l($, a, u);
							},
						};
					}
					k($, T, a, u = N.CancellationToken.None) {
						if (!this.b) return Promise.reject(new Error("disposed"));
						if (u.isCancellationRequested) return Promise.reject(I.$0());
						this.b.cancel();
						const s = this.n($),
							f = (0, r.$zh)((m) => s.call(T, a, m)),
							o = u.onCancellationRequested(() => f.cancel()),
							w = (0, n.$Yc)(() => f.cancel());
						return (
							this.c.add(w),
							f.finally(() => {
								o.dispose(),
									this.c.delete(w),
									this.c.size === 0 && this.b && this.b.trigger(() => this.o());
							}),
							f
						);
					}
					l($, T, a) {
						if (!this.b) return l.Event.None;
						this.b.cancel();
						let u;
						const s = new l.$re({
							onWillAddFirstListener: () => {
								(u = this.n($).listen(T, a)(s.fire, s)), this.c.add(u);
							},
							onDidRemoveLastListener: () => {
								this.c.delete(u),
									u.dispose(),
									this.c.size === 0 && this.b && this.b.trigger(() => this.o());
							},
						});
						return s.event;
					}
					get m() {
						if (!this.f) {
							const $ = this.j && this.j.args ? this.j.args : [],
								T = Object.create(null);
							(T.env = {
								...(0, p.$vo)(process.env),
								VSCODE_PARENT_PID: String(process.pid),
							}),
								this.j && this.j.env && (T.env = { ...T.env, ...this.j.env }),
								this.j && this.j.freshExecArgv && (T.execArgv = []),
								this.j &&
									typeof this.j.debug == "number" &&
									(T.execArgv = ["--nolazy", "--inspect=" + this.j.debug]),
								this.j &&
									typeof this.j.debugBrk == "number" &&
									(T.execArgv = [
										"--nolazy",
										"--inspect-brk=" + this.j.debugBrk,
									]),
								T.execArgv === void 0 &&
									(T.execArgv = process.execArgv
										.filter((R) => !/^--inspect(-brk)?=/.test(R))
										.filter((R) => !R.startsWith("--vscode-"))),
								(0, d.$Am)(T.env),
								(this.d = (0, e.fork)(this.i, $, T));
							const a = new l.$re(),
								s = l.Event.fromNodeEventEmitter(
									this.d,
									"message",
									(R) => R,
								)((R) => {
									if ((0, P.$Fr)(R)) {
										(0, P.log)(R, `IPC Library: ${this.j.serverName}`);
										return;
									}
									a.fire(S.$Te.wrap(Buffer.from(R, "base64")));
								}),
								f = this.j.useQueue ? (0, y.$Nm)(this.d) : this.d,
								o = (R) =>
									this.d &&
									this.d.connected &&
									f.send(R.buffer.toString("base64")),
								w = a.event,
								m = { send: o, onMessage: w };
							this.f = new k.$pi(m);
							const E = () => this.o();
							process.once("exit", E),
								this.d.on("error", (R) =>
									console.warn(
										'IPC "' + this.j.serverName + '" errored with ' + R,
									),
								),
								this.d.on("exit", (R, C) => {
									process.removeListener("exit", E),
										s.dispose(),
										this.c.forEach((O) => (0, n.$Vc)(O)),
										this.c.clear(),
										R !== 0 &&
											C !== "SIGTERM" &&
											console.warn(
												'IPC "' +
													this.j.serverName +
													'" crashed with exit code ' +
													R +
													" and signal " +
													C,
											),
										this.b?.cancel(),
										this.o(),
										this.h.fire({ code: R, signal: C });
								});
						}
						return this.f;
					}
					n($) {
						let T = this.g.get($);
						return T || ((T = this.m.getChannel($)), this.g.set($, T)), T;
					}
					o() {
						this.f &&
							(this.d && (this.d.kill(), (this.d = null)),
							(this.f = null),
							this.g.clear());
					}
					dispose() {
						this.h.dispose(),
							this.b?.cancel(),
							(this.b = void 0),
							this.o(),
							this.c.clear();
					}
				}
				t.$Kr = c;
			},
		),
		