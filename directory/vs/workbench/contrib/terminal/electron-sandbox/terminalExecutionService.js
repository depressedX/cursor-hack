import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/native/common/native.js';
import '../browser/terminal.js';
import '../common/terminal.js';
import '../browser/terminalExecutionService.js';
import '../../../../platform/terminal/common/capabilities/capabilities.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../base/common/uuid.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../services/ai/browser/aiService.js';
import '../../../../base/common/async.js';
import '../../../../base/common/map.js';
import '../../../../../proto/aiserver/v1/tools_pb.js';
define(
			de[3958],
			he([1, 0, 3, 110, 107, 145, 617, 189, 20, 47, 25, 118, 15, 59, 124]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pgd = void 0);
				class g {
					constructor(f) {
						(this.d = []), (this.c = f);
					}
					async wait() {
						return this.c > 0
							? (this.c--, Promise.resolve())
							: new Promise((f) => this.d.push(f));
					}
					release() {
						if ((this.c++, this.d.length > 0 && this.c > 0)) {
							this.c--;
							const f = this.d.shift();
							f && f();
						}
					}
				}
				let p = class extends t.$1c {
					constructor(f, b, s, l, y, $, v) {
						super(),
							(this.g = f),
							(this.h = b),
							(this.j = s),
							(this.m = l),
							(this.n = y),
							(this.q = $),
							(this.r = v),
							(this.c = new c.$Jc(20)),
							(this.f = new Map()),
							(this.cachedShellPath = void 0),
							(this.t = new c.$Jc(20));
					}
					dispose() {
						for (const [f, b] of this.c) b.dispose(), this.H(f);
						this.c.clear(), this.f.clear(), super.dispose();
					}
					getTerminalInstance(f) {
						if (!f) return;
						const b = this.c.get(f);
						if (b) return b;
						const s = this.t.get(f);
						if (s) return this.j.instances.find((l) => l.instanceId === s);
					}
					async createTerminal(f) {
						return await this.j.createTerminal({
							config: {
								executable: f,
								args: ["-l"],
								isFeatureTerminal: !0,
								isTransient: !0,
								hideFromUser: !0,
								forceShellIntegration: !0,
							},
						});
					}
					async tryCreateCommandDetectionTerminal(f) {
						const b = await this.createTerminal(f),
							s = await new Promise((l, y) => {
								if (b.capabilities.has(d.TerminalCapability.CommandDetection)) {
									l(!0);
									return;
								}
								let $;
								const v = setTimeout(() => {
									$?.dispose(), l(!1);
								}, 4e3);
								$ = b.capabilities.onDidAddCapability((S) => {
									S.id === d.TerminalCapability.CommandDetection &&
										(clearTimeout(v), $?.dispose(), l(!0));
								});
							});
						return { terminalInstance: b, hasShellIntegration: s };
					}
					async s(f, b) {
						const s = new g(b);
						let l, y;
						const $ = ["bash", "fish", "pwsh", "zsh", "git bash"],
							v = new t.$Zc();
						try {
							const S = await Promise.all(
								f.map(async (I) => {
									await s.wait();
									try {
										const T = await this.tryCreateCommandDetectionTerminal(
											I.path,
										);
										return v.add(T.terminalInstance), { profile: I, result: T };
									} finally {
										s.release();
									}
								}),
							);
							for (const { profile: I, result: T } of S) {
								if (T.hasShellIntegration)
									return (
										v.deleteAndLeak(T.terminalInstance),
										{ shellPath: I.path, terminalInstance: T.terminalInstance }
									);
								$.includes(T.terminalInstance.processName) &&
									!l &&
									(l = {
										shellPath: I.path,
										terminalInstance: T.terminalInstance,
									});
							}
							return l
								? (v.deleteAndLeak(l.terminalInstance),
									{
										shellPath: l.shellPath,
										terminalInstance: l.terminalInstance,
									})
								: { shellPath: void 0, terminalInstance: void 0 };
						} finally {
							v.dispose();
						}
					}
					async determineShellPath() {
						const f = ["bash", "fish", "pwsh", "zsh", "git bash"];
						await this.r.profilesReady;
						const b = this.r.availableProfiles
								.slice()
								.filter((y) => f.includes(y.profileName) || y.isDefault)
								.sort((y, $) =>
									y.isDefault
										? -1
										: $.isDefault
											? 1
											: f.includes(y.profileName)
												? -1
												: f.includes($.profileName)
													? 1
													: y.isAutoDetected
														? $.isAutoDetected
															? 0
															: 1
														: -1,
								),
							s = await this.s(b, 3);
						if (s.shellPath && s.terminalInstance) return s;
						console.error(
							"No shell integration found, falling back to default profile",
						);
						const l = this.r.getDefaultProfile();
						return l
							? {
									shellPath: l.path,
									terminalInstance: await this.createTerminal(l.path),
								}
							: { shellPath: void 0, terminalInstance: void 0 };
					}
					async createDefaultTerminalInstance() {
						let f;
						if (this.cachedShellPath === void 0) {
							const b = this.determineShellPath();
							this.cachedShellPath = b.then((l) => l.shellPath);
							const s = await b.then((l) => l.terminalInstance);
							if (s !== void 0) return s;
						}
						return (f = await this.cachedShellPath), this.createTerminal(f);
					}
					async startSession(f, b) {
						const s = await this.createDefaultTerminalInstance(),
							l = (0, r.$9g)();
						this.c.set(l, s);
						const y = b?.terminalStartupMaxAttempts ?? 10,
							$ = b?.terminalStartupRetryIntervalMs ?? 100;
						await new Promise((v) => setTimeout(v, 100));
						for (let v = 0; v < y; v++) {
							if (!this.w(s, 0)) return { sessionId: l, terminalInstance: s };
							await new Promise((S) => setTimeout(S, $));
						}
						return (
							console.warn("Terminal startup timeout, terminal is  empty"),
							{ sessionId: l, terminalInstance: s }
						);
					}
					leakSession(f) {
						const b = this.c.get(f);
						b && this.t.set(f, b.instanceId), this.c.delete(f);
					}
					leakTerminalInstance(f) {
						for (const [b, s] of this.c)
							if (s === f) {
								this.leakSession(b);
								return;
							}
					}
					endSession(f) {
						const b = this.c.get(f);
						if (!b)
							throw new Error(`Terminal instance for session ${f} not found`);
						b.dispose(), this.c.delete(f), this.H(f);
					}
					async execute(f, b, s) {
						const l = Date.now();
						try {
							const y = this.executeStream(f, b, { ...s });
							let $;
							for await (const I of y) $ = I;
							if (!$) throw new Error("No result from executeStream");
							const v = Date.now() - l;
							return {
								exitCode: this.F(f).exitCode ?? 0,
								duration: v,
								output: $.content,
								isAiEnded: $.isAiEnded,
								endedReason: $.endedReason,
							};
						} catch (y) {
							return (
								console.error("Error in execute:", y),
								{
									exitCode: 1,
									duration: Date.now() - l,
									output: `Error: ${y.message}`,
									isAiEnded: !1,
									endedReason: n.RunTerminalCommandEndedReason.EXECUTION_FAILED,
								}
							);
						}
					}
					getLastLineNumber(f) {
						let b = f.xterm?.getBufferLength() ?? 0,
							s = 0;
						for (
							;
							(f.xterm?.getBufferLines(b, b + 1).at(0)?.length ?? 0) === 0;
						) {
							if ((b--, b <= 0 || s > 50)) return 0;
							s++;
						}
						return b;
					}
					async *executeStream(f, b, s) {
						const l = Date.now(),
							y = this.F(f);
						y.rename(b);
						const $ = y.xterm?.raw.cols ?? 80,
							v = y.capabilities.get(d.TerminalCapability.CommandDetection);
						let S;
						const I = new Promise((A) => {
							v &&
								(S = v.onCommandFinished((R) => {
									let O = R.getOutput();
									if (O !== void 0) {
										const B = O.split(`
`);
										O = "";
										for (const U of B) {
											let z = U;
											for (; z.length > $; )
												(O +=
													z.substring(0, $).trimEnd() +
													`
`),
													(z = z.substring($));
											z.length < $
												? (O +=
														z +
														`
`)
												: z.endsWith("  ")
													? (O +=
															z.trimEnd() +
															`

`)
													: (O +=
															z +
															`
`);
										}
										O.at(-1) ===
											`
` && (O = O.slice(0, -1));
									}
									A({
										type: "terminal",
										output: O,
										exitCode: R.exitCode,
										cmd: R,
									});
								}));
						});
						let T;
						const P = new Promise((A) => {
								const R = () => {
									A("popout");
								};
								s?.stopListenSignal?.addEventListener("abort", R),
									(T = {
										dispose: () => {
											s?.stopListenSignal?.removeEventListener("abort", R);
										},
									});
							}),
							k = new AbortController();
						this.f.set(f, k);
						const L = () => {
							this.H(f), S?.dispose(), T?.dispose();
						};
						s?.signal &&
							s.signal.addEventListener("abort", () => {
								k.abort();
							});
						const D = this.getLastLineNumber(y);
						let M = "",
							N;
						try {
							await y.sendText(b, !0, !0), yield { content: "", isAiEnded: !1 };
							let A = s?.commandRunTimeoutMs ?? 1e3;
							const R = s?.commandChangeCheckIntervalMs ?? 500,
								O = s?.aiFinishCheckMaxAttempts ?? 15,
								B = s?.aiFinishCheckIntervalMs ?? 2e3,
								U = s?.delayerIntervalMs ?? 100;
							v && (A = 1e4);
							let z = Date.now(),
								F = 0,
								x = !1,
								H = !1;
							const q = new h.$Jh(U),
								V = () => {
									q.trigger(() => {
										(z = Date.now()), (F = 0), (H = !1);
									});
								},
								G = y.onData((K) => {
									V();
								});
							try {
								for (; !x; ) {
									if (k.signal.aborted) {
										k.signal.reason !== "Execution cancelled" &&
											(await this.G(y)),
											(x = !0);
										break;
									}
									if (s?.stopListenSignal?.aborted === !0) {
										console.log("[ian] Execution stopped listening"), (x = !0);
										break;
									}
									const K = this.y(y, D);
									K !== M && ((M = K), yield { content: K, isAiEnded: !1 });
									const J = Date.now() - z,
										W = H ? B : R,
										X = async () => {
											if (J > A && F < O) {
												if (!s?.skipAiCheck && !k.signal.aborted) {
													H = !0;
													const ie = await this.u(K);
													if (ie.isFinished)
														return (
															(x = !0),
															await this.G(y),
															{
																type: "ai",
																content: K,
																isAiEnded: !0,
																endedReason: ie.reason,
																exitCode: ie.exitCode,
															}
														);
													F++;
												}
											} else if (F >= O)
												return (
													await new Promise((ie) => setTimeout(ie, 1e4)),
													"timeout"
												);
											return (
												await new Promise((ie) => setTimeout(ie, W)), "timeout"
											);
										},
										Y = await Promise.race([X(), I, P]);
									if (Y === "popout") x = !0;
									else {
										if (Y === "timeout") continue;
										if (Y.type === "terminal") {
											(x = !0), (N = Y.exitCode);
											let ie = this.y(y, D),
												ne = Date.now();
											for (
												;
												!ie.includes(Y.output ?? "") && Date.now() - ne < 1e3;
											)
												await new Promise((ee) => setTimeout(ee, 100)),
													(ie = this.y(y, D));
											ie.includes(Y.output ?? "") ||
												((Y.output ?? "").length > 0 && (ie = Y.output ?? "")),
												ie !== M &&
													((M = ie), yield { content: ie, isAiEnded: !1 });
										} else (x = !0), yield Y;
									}
								}
							} finally {
								G.dispose(), q.dispose();
							}
							return {
								exitCode: N ?? y.exitCode,
								output: M,
								duration: Date.now() - l,
								isAiEnded: !0,
								endedReason: k.signal.aborted
									? n.RunTerminalCommandEndedReason.EXECUTION_ABORTED
									: n.RunTerminalCommandEndedReason.EXECUTION_COMPLETED,
							};
						} catch (A) {
							return (
								console.error("Error in executeStream:", A),
								{
									exitCode: 1,
									output: `Error: ${A.message}`,
									duration: Date.now() - l,
									isAiEnded: !1,
									endedReason: n.RunTerminalCommandEndedReason.EXECUTION_FAILED,
								}
							);
						} finally {
							L();
						}
					}
					async u(f) {
						try {
							const s = await (await this.q.aiClient()).isTerminalFinishedV2({
								terminalContent: f,
							});
							return {
								isFinished: !!s.isFinished,
								reason: s.endedReason,
								exitCode: s.exitCode,
							};
						} catch (b) {
							return (
								console.error("Error in _isTerminalFinished:", b),
								{
									isFinished: !0,
									reason:
										n.RunTerminalCommandEndedReason
											.ERROR_OCCURRED_CHECKING_REASON,
								}
							);
						}
					}
					w(f, b) {
						const s = f.xterm?.raw.buffer.normal;
						if (s === void 0) return !0;
						const l = f.xterm?.raw.buffer.normal.length ?? 0;
						if (!this.z(s, Math.min(l, b), l).every((I) => I.trim() === ""))
							return !1;
						const $ = f.xterm?.raw.buffer.alternate;
						if ($ === void 0) return !0;
						const v = f.xterm?.raw.buffer.alternate.length ?? 0;
						return !!this.z($, Math.min(v, b), v).every((I) => I.trim() === "");
					}
					y(f, b) {
						const s = f.xterm?.getBufferLength() ?? 0;
						return this.C(f, Math.min(s, b), s)
							.join(`
`)
							.trimEnd();
					}
					z(f, b, s) {
						const l = [];
						for (let y = b; y < s; y++) {
							let $ = f.getLine(y);
							if (!$) continue;
							let v = $.translateToString(!0);
							l.push(v);
						}
						return l;
					}
					C(f, b, s) {
						const l = f.xterm?.raw.buffer.active;
						return l ? this.z(l, b, s) : [];
					}
					F(f) {
						const b = this.c.get(f);
						if (!b)
							throw new Error(`Terminal instance for session ${f} not found`);
						return b;
					}
					async G(f) {
						f.interrupt();
					}
					cancelStream(f) {
						const b = this.F(f);
						this.G(b), this.H(f);
					}
					H(f) {
						const b = this.f.get(f);
						b && (b.abort("Execution cancelled"), this.f.delete(f));
					}
				};
				(e.$pgd = p),
					(e.$pgd = p =
						Ne(
							[
								j(0, E.$reb),
								j(1, w.$mIb),
								j(2, w.$iIb),
								j(3, i.$y7c),
								j(4, u.$Vi),
								j(5, a.$Nfc),
								j(6, E.$teb),
							],
							p,
						)),
					(0, m.$lK)(C.$Ycc, p, m.InstantiationType.Eager);
			},
		),
		