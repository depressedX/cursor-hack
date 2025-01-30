import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../fs.js';
import '../../../../../base/common/async.js';
import '../../../../../base/common/cancellation.js';
import '../../../../../base/common/extpath.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/normalization.js';
import '../../../../../base/common/path.js';
import '../../../../../base/common/platform.js';
import '../../../../../base/common/resources.js';
import '../../../../../base/common/uri.js';
import '../../../../../base/node/extpath.js';
import '../../../../../base/node/pfs.js';
import '../../../common/files.js';
import '../../../common/watcher.js';
define(
			Pe[482],
			Ne([1, 0, 59, 9, 23, 42, 3, 132, 18, 13, 24, 2, 176, 43, 32, 109]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d, k, g, c) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$Rr = void 0),
					(t.$Sr = $);
				class h extends P.$1c {
					static {
						this.a = 100;
					}
					static {
						this.b = 75;
					}
					get isReusingRecursiveWatcher() {
						return this.n;
					}
					get failed() {
						return this.q;
					}
					constructor(a, u, s, f, o, w) {
						super(),
							(this.r = a),
							(this.s = u),
							(this.t = s),
							(this.u = f),
							(this.w = o),
							(this.y = w),
							(this.c = this.D(
								new r.$2h(
									{
										maxWorkChunkSize: 100,
										throttleDelay: 200,
										maxBufferedWork: 1e4,
									},
									(m) => this.t(m),
								),
							)),
							(this.f = this.D(new r.$1h((m) => this.M(m), h.b))),
							(this.g = (0, c.$Br)(this.r.path, this.r.excludes)),
							(this.h = this.r.includes
								? (0, c.$Br)(this.r.path, this.r.includes)
								: void 0),
							(this.j = (0, c.$tr)(this.r) ? this.r.filter : void 0),
							(this.m = new S.$Ce()),
							(this.ready = this.z()),
							(this.n = !1),
							(this.q = !1);
					}
					async z() {
						try {
							const a = await this.F(this.r);
							if (this.m.token.isCancellationRequested) return;
							const u = await e.promises.stat(a);
							if (this.m.token.isCancellationRequested) return;
							this.D(await this.G(a, u.isDirectory()));
						} catch (a) {
							a.code !== "ENOENT"
								? this.O(a)
								: this.Q(
										`ignoring a path for watching who's stat info failed to resolve: ${this.r.path} (error: ${a})`,
									),
								this.C();
						}
					}
					C() {
						(this.q = !0), this.u?.();
					}
					async F(a) {
						let u = a.path;
						try {
							(u = await k.Promises.realpath(a.path)),
								a.path === u &&
									(u = (await (0, d.$Or)(a.path, this.m.token)) ?? a.path),
								a.path !== u &&
									this.Q(
										`correcting a path to watch that seems to be a symbolic link or wrong casing (original: ${a.path}, real: ${u})`,
									);
						} catch {}
						return u;
					}
					async G(a, u) {
						const s = new P.$Zc();
						return (
							this.H(a, u, s)
								? (this.Q(
										`reusing an existing recursive watcher for ${this.r.path}`,
									),
									(this.n = !0))
								: ((this.n = !1), await this.I(a, u, s)),
							s
						);
					}
					H(a, u, s) {
						if (u) return !1;
						const f = y.URI.file(this.r.path),
							o = this.s?.subscribe(this.r.path, async (w, m) => {
								if (!s.isDisposed)
									if (w) {
										const E = await this.G(a, u);
										s.isDisposed ? E.dispose() : s.add(E);
									} else
										m &&
											(typeof m.cId == "number" ||
												typeof this.r.correlationId == "number") &&
											this.L(
												{
													resource: f,
													type: m.type,
													cId: this.r.correlationId,
												},
												!0,
											);
							});
						return o ? (s.add(o), !0) : !1;
					}
					async I(a, u, s) {
						if (n.$m && (0, N.$Lg)(a, "/Volumes/", !0)) {
							this.O(
								`Refusing to watch ${a} for changes using fs.watch() for possibly being a network share where watching is unreliable and unstable.`,
							);
							return;
						}
						const f = new S.$Ce(this.m.token);
						s.add((0, P.$Yc)(() => f.dispose(!0)));
						const o = new P.$Zc();
						s.add(o);
						try {
							const w = y.URI.file(this.r.path),
								m = (0, l.$sc)(a),
								E = (0, e.watch)(a);
							o.add(
								(0, P.$Yc)(() => {
									E.removeAllListeners(), E.close();
								}),
							),
								this.Q(`Started watching: '${a}'`);
							const R = new Set();
							if (u)
								try {
									for (const O of await k.Promises.readdir(a)) R.add(O);
								} catch (O) {
									this.O(O);
								}
							if (f.token.isCancellationRequested) return;
							const C = new Map();
							o.add(
								(0, P.$Yc)(() => {
									for (const [, O] of C) O.dispose();
									C.clear();
								}),
							),
								E.on("error", (O, A) => {
									f.token.isCancellationRequested ||
										(this.O(
											`Failed to watch ${a} for changes using fs.watch() (${O}, ${A})`,
										),
										this.C());
								}),
								E.on("change", (O, A) => {
									if (f.token.isCancellationRequested) return;
									this.y && this.R(`[raw] ["${O}"] ${A}`);
									let J = "";
									if (
										(A && ((J = A.toString()), n.$m && (J = (0, I.$Bm)(J))),
										!(!J || (O !== "change" && O !== "rename")))
									)
										if (u)
											if (O === "rename") {
												C.get(J)?.dispose();
												const L = setTimeout(async () => {
													if (
														(C.delete(J),
														J === m && !(await k.Promises.exists(a)))
													) {
														this.J(w);
														return;
													}
													if (f.token.isCancellationRequested) return;
													const b = await this.N((0, l.$oc)(a, J));
													if (f.token.isCancellationRequested) return;
													let F;
													b
														? R.has(J)
															? (F = g.FileChangeType.UPDATED)
															: ((F = g.FileChangeType.ADDED), R.add(J))
														: (R.delete(J), (F = g.FileChangeType.DELETED)),
														this.L({
															resource: (0, p.$nh)(w, J),
															type: F,
															cId: this.r.correlationId,
														});
												}, h.a);
												C.set(
													J,
													(0, P.$Yc)(() => clearTimeout(L)),
												);
											} else {
												let L;
												R.has(J)
													? (L = g.FileChangeType.UPDATED)
													: ((L = g.FileChangeType.ADDED), R.add(J)),
													this.L({
														resource: (0, p.$nh)(w, J),
														type: L,
														cId: this.r.correlationId,
													});
											}
										else if (O === "rename" || J !== m) {
											const L = setTimeout(async () => {
												const b = await k.Promises.exists(a);
												f.token.isCancellationRequested ||
													(b
														? (this.L(
																{
																	resource: w,
																	type: g.FileChangeType.UPDATED,
																	cId: this.r.correlationId,
																},
																!0,
															),
															o.add(await this.G(a, !1)))
														: this.J(w));
											}, h.a);
											o.clear(), o.add((0, P.$Yc)(() => clearTimeout(L)));
										} else
											this.L(
												{
													resource: w,
													type: g.FileChangeType.UPDATED,
													cId: this.r.correlationId,
												},
												!0,
											);
								});
						} catch (w) {
							f.token.isCancellationRequested ||
								this.O(
									`Failed to watch ${a} for changes using fs.watch() (${w.toString()})`,
								),
								this.C();
						}
					}
					J(a) {
						this.P("Watcher shutdown because watched path got deleted"),
							this.L(
								{
									resource: a,
									type: g.FileChangeType.DELETED,
									cId: this.r.correlationId,
								},
								!0,
							),
							this.f.flush(),
							this.C();
					}
					L(a, u = !1) {
						this.m.token.isCancellationRequested ||
							(this.y &&
								this.R(
									`${a.type === g.FileChangeType.ADDED ? "[ADDED]" : a.type === g.FileChangeType.DELETED ? "[DELETED]" : "[CHANGED]"} ${a.resource.fsPath}`,
								),
							!u && this.g.some((s) => s(a.resource.fsPath))
								? this.y &&
									this.R(` >> ignored (excluded) ${a.resource.fsPath}`)
								: !u &&
										this.h &&
										this.h.length > 0 &&
										!this.h.some((s) => s(a.resource.fsPath))
									? this.y &&
										this.R(` >> ignored (not included) ${a.resource.fsPath}`)
									: this.f.work(a));
					}
					M(a) {
						const u = (0, c.$zr)(a),
							s = [];
						for (const o of u) {
							if ((0, c.$Cr)(o, this.j)) {
								this.y && this.R(` >> ignored (filtered) ${o.resource.fsPath}`);
								continue;
							}
							s.push(o);
						}
						if (s.length === 0) return;
						if (this.y)
							for (const o of s)
								this.R(
									` >> normalized ${o.type === g.FileChangeType.ADDED ? "[ADDED]" : o.type === g.FileChangeType.DELETED ? "[DELETED]" : "[CHANGED]"} ${o.resource.fsPath}`,
								);
						this.c.work(s)
							? this.c.pending > 0 &&
								this.Q(
									`started throttling events due to large amount of file change events at once (pending: ${this.c.pending}, most recent change: ${s[0].resource.fsPath}). Use 'files.watcherExclude' setting to exclude folders with lots of changing files (e.g. compilation output).`,
								)
							: this.P(
									`started ignoring events due to too many file change events at once (incoming: ${s.length}, most recent change: ${s[0].resource.fsPath}). Use 'files.watcherExclude' setting to exclude folders with lots of changing files (e.g. compilation output).`,
								);
					}
					async N(a) {
						if (n.$n) return k.Promises.exists(a);
						try {
							const u = (0, l.$sc)(a);
							return (await k.Promises.readdir((0, l.$rc)(a))).some(
								(f) => f === u,
							);
						} catch (u) {
							return this.Q(u), !1;
						}
					}
					setVerboseLogging(a) {
						this.y = a;
					}
					O(a) {
						this.m.token.isCancellationRequested ||
							this.w?.({
								type: "error",
								message: `[File Watcher (node.js)] ${a}`,
							});
					}
					P(a) {
						this.m.token.isCancellationRequested ||
							this.w?.({
								type: "warn",
								message: `[File Watcher (node.js)] ${a}`,
							});
					}
					Q(a) {
						!this.m.token.isCancellationRequested &&
							this.y &&
							this.w?.({
								type: "trace",
								message: `[File Watcher (node.js)] ${a}`,
							});
					}
					R(a) {
						!this.m.token.isCancellationRequested &&
							this.y &&
							this.Q(
								`${a}${typeof this.r.correlationId == "number" ? ` <${this.r.correlationId}> ` : ""}`,
							);
					}
					dispose() {
						this.m.dispose(!0), super.dispose();
					}
				}
				t.$Rr = h;
				async function $(T, a, u, s, f = 512) {
					const o = await k.Promises.open(T, "r"),
						w = Buffer.allocUnsafe(f),
						m = new S.$Ce(s);
					let E,
						R = !1;
					const C = { path: T, excludes: [], recursive: !1 },
						O = new h(C, void 0, (A) => {
							(async () => {
								for (const { type: J } of A)
									if (J === g.FileChangeType.UPDATED) {
										if (R) return;
										R = !0;
										try {
											for (; !m.token.isCancellationRequested; ) {
												const { bytesRead: L } = await k.Promises.read(
													o,
													w,
													0,
													f,
													null,
												);
												if (!L || m.token.isCancellationRequested) break;
												a(w.slice(0, L));
											}
										} catch (L) {
											(E = new Error(L)), m.dispose(!0);
										} finally {
											R = !1;
										}
									}
							})();
						});
					return (
						await O.ready,
						u(),
						new Promise((A, J) => {
							m.token.onCancellationRequested(async () => {
								O.dispose();
								try {
									await k.Promises.close(o);
								} catch (L) {
									E = new Error(L);
								}
								E ? J(E) : A();
							});
						})
					);
				}
			},
		),
		