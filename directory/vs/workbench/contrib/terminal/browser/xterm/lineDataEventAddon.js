define(de[3147], he([1, 0, 6, 3, 12]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$9Uc = void 0);
			class E extends i.$1c {
				constructor(d) {
					super(),
						(this.f = d),
						(this.b = !1),
						(this.c = this.D(new t.$re())),
						(this.onLineData = this.c.event);
				}
				async activate(d) {
					this.a = d;
					const m = d.buffer;
					await this.f,
						this.D(
							d.onLineFeed(() => {
								const r = m.active.getLine(m.active.baseY + m.active.cursorY);
								r &&
									!r.isWrapped &&
									this.g(m.active, m.active.baseY + m.active.cursorY - 1);
							}),
						),
						this.D(
							(0, i.$Yc)(() => {
								this.g(m.active, m.active.baseY + m.active.cursorY);
							}),
						);
				}
				setOperatingSystem(d) {
					if (
						!(this.b || !this.a) &&
						((this.b = !0), d === w.OperatingSystem.Windows)
					) {
						const m = this.a;
						this.D(
							m.parser.registerCsiHandler({ final: "H" }, () => {
								const r = m.buffer;
								return this.g(r.active, r.active.baseY + r.active.cursorY), !1;
							}),
						);
					}
				}
				g(d, m) {
					let r = d.getLine(m);
					if (!r) return;
					let u = r.translateToString(!0);
					for (; m > 0 && r.isWrapped && ((r = d.getLine(--m)), !!r); )
						u = r.translateToString(!1) + u;
					this.c.fire(u);
				}
			}
			e.$9Uc = E;
		}),
		define(
			de[1762],
			he([1, 0, 6, 3, 240, 9, 117]),
			function (ce, e, t, i, w, E, C) {
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
		