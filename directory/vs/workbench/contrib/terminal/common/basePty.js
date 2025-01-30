import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/performance.js';
import '../../../../base/common/uri.js';
import '../../../../platform/terminal/common/terminal.js';
define(
			de[1762],
			he([1, 0, 6, 3, 240, 9, 117]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*performance*/,
 E /*uri*/,
 C /*terminal*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$eUc = void 0);
				class d extends i.$1c {
					constructor(r, u) {
						super(),
							(this.id = r),
							(this.shouldPersist = u),
							(this.a = {
								cwd: "",
								initialCwd: "",
								fixedDimensions: { cols: void 0, rows: void 0 },
								title: "",
								shellType: void 0,
								hasChildProcesses: !0,
								resolvedShellLaunchConfig: {},
								overrideDimensions: void 0,
								failedShellIntegrationActivation: !1,
								usedShellIntegrationInjection: void 0,
							}),
							(this.b = { cols: -1, rows: -1 }),
							(this.c = !1),
							(this.f = this.D(new t.$re())),
							(this.onProcessData = this.f.event),
							(this.g = this.D(new t.$re())),
							(this.onProcessReplayComplete = this.g.event),
							(this.h = this.D(new t.$re())),
							(this.onProcessReady = this.h.event),
							(this.j = this.D(new t.$re())),
							(this.onDidChangeProperty = this.j.event),
							(this.m = this.D(new t.$re())),
							(this.onProcessExit = this.m.event),
							(this.n = this.D(new t.$re())),
							(this.onRestoreCommands = this.n.event);
					}
					async getInitialCwd() {
						return this.a.initialCwd;
					}
					async getCwd() {
						return this.a.cwd || this.a.initialCwd;
					}
					handleData(r) {
						this.f.fire(r);
					}
					handleExit(r) {
						this.m.fire(r);
					}
					handleReady(r) {
						this.h.fire(r);
					}
					handleDidChangeProperty({ type: r, value: u }) {
						switch (r) {
							case C.ProcessPropertyType.Cwd:
								this.a.cwd = u;
								break;
							case C.ProcessPropertyType.InitialCwd:
								this.a.initialCwd = u;
								break;
							case C.ProcessPropertyType.ResolvedShellLaunchConfig:
								u.cwd &&
									typeof u.cwd != "string" &&
									(u.cwd = E.URI.revive(u.cwd));
						}
						this.j.fire({ type: r, value: u });
					}
					async handleReplay(r) {
						(0, w.mark)(`code/terminal/willHandleReplay/${this.id}`);
						try {
							this.c = !0;
							for (const u of r.events) {
								(u.cols !== 0 || u.rows !== 0) &&
									this.j.fire({
										type: C.ProcessPropertyType.OverrideDimensions,
										value: { cols: u.cols, rows: u.rows, forceExactSize: !0 },
									});
								const a = { data: u.data, trackCommit: !0 };
								this.f.fire(a), await a.writePromise;
							}
						} finally {
							this.c = !1;
						}
						r.commands && this.n.fire(r.commands),
							this.j.fire({
								type: C.ProcessPropertyType.OverrideDimensions,
								value: void 0,
							}),
							(0, w.mark)(`code/terminal/didHandleReplay/${this.id}`),
							this.g.fire();
					}
				}
				e.$eUc = d;
			},
		),
		