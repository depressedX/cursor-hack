define(
			de[4038],
			he([1, 0, 320, 9, 22, 4037, 143, 110, 3, 107, 7]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lgd = void 0);
				let a = class extends m.$1c {
					constructor(c, n, g, p) {
						super(),
							(this.a = c),
							(this.b = n),
							t.$P.on("vscode:openFiles", (f, b) => {
								this.f(b);
							}),
							this.D(p.onDidResumeOS(() => this.c())),
							this.b.setNativeDelegate({
								getWindowCount: () => p.getWindowCount(),
							});
						const o = g.getConnection();
						o && o.remoteAuthority && (0, E.$kgd)();
					}
					c() {
						for (const c of this.b.instances) c.xterm?.forceRedraw();
					}
					async f(c) {
						if (c.termProgram === "vscode" && c.filesToWait) {
							const n = i.URI.revive(c.filesToWait.waitMarkerFileUri);
							await this.g(n), this.b.activeInstance?.focus();
						}
					}
					g(c) {
						return new Promise((n) => {
							let g = !1;
							const p = (0, u.$igb)(
								(0, u.$Ogb)(),
								async () => {
									if (!g) {
										g = !0;
										const o = await this.a.exists(c);
										(g = !1), o || (p.dispose(), n(void 0));
									}
								},
								1e3,
							);
						});
					}
				};
				(e.$lgd = a),
					(e.$lgd = a =
						Ne([j(0, w.$ll), j(1, r.$iIb), j(2, C.$$m), j(3, d.$y7c)], a));
			},
		),
		