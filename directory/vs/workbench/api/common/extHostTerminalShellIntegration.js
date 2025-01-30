import '../../../../require.js';
import '../../../../exports.js';
import './extHostTypes.js';
import '../../../base/common/lifecycle.js';
import '../../../platform/instantiation/common/instantiation.js';
import './extHost.protocol.js';
import './extHostRpcService.js';
import './extHostTerminalService.js';
import '../../../base/common/event.js';
import '../../../base/common/uri.js';
import '../../../base/common/async.js';
define(
			Pe[304],
			Ne([1, 0, 11, 3, 5, 6, 21, 62, 4, 2, 9]),
			function (we, t, e, r, S, N, P, I, l, n, p) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$0id = t.$9id = void 0),
					(t.$9id = (0, S.$Mi)("IExtHostTerminalShellIntegration"));
				let y = class extends r.$1c {
					constructor(h, $) {
						super(),
							(this.h = $),
							(this.b = new Map()),
							(this.c = new l.$re()),
							(this.onDidChangeTerminalShellIntegration = this.c.event),
							(this.f = new l.$re()),
							(this.onDidStartTerminalShellExecution = this.f.event),
							(this.g = new l.$re()),
							(this.onDidEndTerminalShellExecution = this.g.event),
							(this.a = h.getProxy(N.$lbb.MainThreadTerminalShellIntegration)),
							this.D(
								(0, r.$Yc)(() => {
									for (const [T, a] of this.b) a.dispose();
									this.b.clear();
								}),
							);
					}
					$shellIntegrationChange(h) {
						const $ = this.h.getTerminalById(h);
						if (!$) return;
						const T = $.value;
						let a = this.b.get(h);
						a ||
							((a = new d($.value, this.f)),
							this.b.set(h, a),
							a.store.add($.onWillDispose(() => this.b.get(h)?.dispose())),
							a.store.add(
								a.onDidRequestShellExecution((u) =>
									this.a.$executeCommand(h, u),
								),
							),
							a.store.add(a.onDidRequestEndExecution((u) => this.g.fire(u))),
							a.store.add(
								a.onDidRequestChangeShellIntegration((u) => this.c.fire(u)),
							),
							($.shellIntegration = a.value)),
							this.c.fire({ terminal: T, shellIntegration: a.value });
					}
					$shellExecutionStart(h, $, T, a, u) {
						this.b.has(h) || this.$shellIntegrationChange(h);
						const s = { value: $, confidence: T, isTrusted: a };
						this.b.get(h)?.startShellExecution(s, n.URI.revive(u));
					}
					$shellExecutionEnd(h, $, T, a, u) {
						const s = { value: $, confidence: T, isTrusted: a };
						this.b.get(h)?.endShellExecution(s, u);
					}
					$shellExecutionData(h, $) {
						this.b.get(h)?.emitData($);
					}
					$cwdChange(h, $) {
						this.b.get(h)?.setCwd(n.URI.revive($));
					}
					$closeTerminal(h) {
						this.b.get(h)?.dispose(), this.b.delete(h);
					}
				};
				(t.$0id = y), (t.$0id = y = wt([rt(0, P.$08), rt(1, I.$Qhd)], y));
				class d extends r.$1c {
					get currentExecution() {
						return this.a;
					}
					constructor(h, $) {
						super(),
							(this.j = h),
							(this.m = $),
							(this.b = !1),
							(this.store = this.D(new r.$Zc())),
							(this.f = this.D(new l.$re())),
							(this.onDidRequestChangeShellIntegration = this.f.event),
							(this.g = this.D(new l.$re())),
							(this.onDidRequestShellExecution = this.g.event),
							(this.h = this.D(new l.$re())),
							(this.onDidRequestEndExecution = this.h.event);
						const T = this;
						this.value = {
							get cwd() {
								return T.c;
							},
							executeCommand(a, u) {
								let s = a;
								u &&
									(s += ` "${u.map((w) => `${w.replaceAll('"', '\\"')}`).join('" "')}"`),
									T.g.fire(s);
								const f = {
										value: s,
										confidence:
											e.TerminalShellExecutionCommandLineConfidence.High,
										isTrusted: !0,
									},
									o = T.startShellExecution(f, T.c, !0).value;
								return (T.b = !0), o;
							},
						};
					}
					startShellExecution(h, $, T) {
						if (this.b && this.a) this.b = !1;
						else {
							this.a &&
								(this.a.endExecution(void 0),
								this.h.fire({
									terminal: this.j,
									shellIntegration: this.value,
									execution: this.a.value,
									exitCode: void 0,
								}));
							const a = (this.a = new k(h, $ ?? this.c));
							T
								? queueMicrotask(() =>
										this.m.fire({
											terminal: this.j,
											shellIntegration: this.value,
											execution: a.value,
										}),
									)
								: this.m.fire({
										terminal: this.j,
										shellIntegration: this.value,
										execution: this.a.value,
									});
						}
						return this.a;
					}
					emitData(h) {
						this.currentExecution?.emitData(h);
					}
					endShellExecution(h, $) {
						this.a &&
							(this.a.endExecution(h),
							this.h.fire({
								terminal: this.j,
								shellIntegration: this.value,
								execution: this.a.value,
								exitCode: $,
							}),
							(this.a = void 0));
					}
					setCwd(h) {
						let $ = !1;
						n.URI.isUri(this.c)
							? ($ = !n.URI.isUri(h) || this.c.toString() !== h.toString())
							: this.c !== h && ($ = !0),
							$ &&
								((this.c = h),
								this.f.fire({
									terminal: this.j,
									shellIntegration: this.value,
								}));
					}
				}
				class k {
					constructor(h, $) {
						(this.c = h), (this.cwd = $), (this.b = !1);
						const T = this;
						this.value = {
							get commandLine() {
								return T.c;
							},
							get cwd() {
								return T.cwd;
							},
							read() {
								return T.d();
							},
						};
					}
					d() {
						if (!this.a) {
							if (this.b) return p.$ai.EMPTY;
							this.a = new g();
						}
						return this.a.createIterable();
					}
					emitData(h) {
						this.a?.emitData(h);
					}
					endExecution(h) {
						h && (this.c = h),
							this.a?.endExecution(),
							(this.a = void 0),
							(this.b = !0);
					}
				}
				class g extends r.$1c {
					constructor() {
						super(...arguments), (this.b = []);
					}
					createIterable() {
						this.a || (this.a = new p.$Lh());
						const h = this.a;
						return new p.$ai(async (T) => {
							this.b.push(T), await h.wait();
						});
					}
					emitData(h) {
						for (const $ of this.b) $.emitOne(h);
					}
					endExecution() {
						this.a?.open(), (this.a = void 0);
					}
				}
			},
		),
		