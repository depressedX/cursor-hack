define(
			de[1873],
			he([1, 0, 6, 3, 23, 4, 166, 1765]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$dUc = void 0);
				class m extends i.$1c {
					get isResponsive() {
						return !this.a;
					}
					constructor(u, a, h, c, n, g) {
						super(),
							(this.h = u),
							(this.j = a),
							(this.m = g),
							(this.a = !1),
							(this.b = this.D(new t.$re())),
							(this.onPtyHostConnected = this.b.event),
							(this.c = this.D(new t.$re())),
							(this.onPtyHostRestart = this.c.event),
							(this.f = this.D(new t.$re())),
							(this.onPtyHostUnresponsive = this.f.event),
							(this.g = this.D(new t.$re())),
							(this.onPtyHostResponsive = this.g.event);
						let p,
							o,
							f = !1;
						this.D(
							this.h.onPtyHostExit(() => {
								this.j.error(
									"The terminal's pty host process exited, the connection to all terminal processes was lost",
								);
							}),
						),
							this.D(this.onPtyHostConnected(() => (f = !0))),
							this.D(
								this.h.onPtyHostStart(() => {
									this.j.debug("The terminal's pty host process is starting"),
										f &&
											(this.j.trace("IPtyHostController#onPtyHostRestart"),
											this.c.fire()),
										o?.dispose(),
										(this.a = !1);
								}),
							),
							this.D(
								this.h.onPtyHostUnresponsive(() => {
									o?.dispose(),
										p ||
											(p = {
												name: (0, E.localize)(9961, null),
												text: `$(debug-disconnect) ${(0, E.localize)(9962, null)}`,
												tooltip: (0, E.localize)(9963, null),
												ariaLabel: (0, E.localize)(9964, null),
												command: d.TerminalDeveloperCommandId.RestartPtyHost,
												kind: "warning",
											}),
										(o = n.addEntry(
											p,
											"ptyHostStatus",
											C.StatusbarAlignment.LEFT,
										)),
										(this.a = !0),
										this.f.fire();
								}),
							),
							this.D(
								this.h.onPtyHostResponsive(() => {
									this.a &&
										(this.j.info("The pty host became responsive again"),
										o?.dispose(),
										(this.a = !1),
										this.g.fire());
								}),
							),
							this.D(
								this.h.onPtyHostRequestResolveVariables(async (b) => {
									if (b.workspaceId !== this.m.getWorkspace().id) return;
									const s = h.getLastActiveWorkspaceRoot(w.Schemas.file),
										l = s ? (this.m.getWorkspaceFolder(s) ?? void 0) : void 0,
										y = b.originalText.map((v) => c.resolveAsync(l, v)),
										$ = await Promise.all(y);
									this.h.acceptPtyHostResolvedVariables(b.requestId, $);
								}),
							);
					}
					restartPtyHost() {
						this.h.restartPtyHost();
					}
					n(u) {
						if (u === void 0) return;
						const a = JSON.parse(u);
						if (
							!("version" in a) ||
							!("state" in a) ||
							!Array.isArray(a.state)
						) {
							this.j.warn(
								"Could not revive serialized processes, wrong format",
								a,
							);
							return;
						}
						const h = a;
						if (h.version !== 1) {
							this.j.warn(
								`Could not revive serialized processes, wrong version "${h.version}"`,
								h,
							);
							return;
						}
						return h.state;
					}
					q() {
						return this.m.getWorkspace().id;
					}
				}
				e.$dUc = m;
			},
		),
		