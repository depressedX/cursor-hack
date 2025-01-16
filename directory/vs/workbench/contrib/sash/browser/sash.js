define(
			de[3127],
			he([1, 0, 201, 277, 6, 3, 10, 180]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lPc = e.$kPc = e.$jPc = void 0),
					(e.$jPc = 1),
					(e.$kPc = 20);
				let m = class {
					constructor(u, a) {
						(this.b = u),
							(this.c = a),
							(this.a = new E.$Zc()),
							w.Event.filter(u.onDidChangeConfiguration, (n) =>
								n.affectsConfiguration("workbench.sash.size"),
							)(this.d, this, this.a),
							this.d(),
							w.Event.filter(u.onDidChangeConfiguration, (n) =>
								n.affectsConfiguration("workbench.sash.hoverDelay"),
							)(this.f, this, this.a),
							this.f();
					}
					d() {
						const u = this.b.getValue("workbench.sash.size"),
							a = (0, t.$Zm)(u, 4, 20),
							h = (0, t.$Zm)(u, 1, 8);
						this.c.mainContainer.style.setProperty(
							"--vscode-sash-size",
							a + "px",
						),
							this.c.mainContainer.style.setProperty(
								"--vscode-sash-hover-size",
								h + "px",
							),
							(0, i.$sob)(a);
					}
					f() {
						(0, i.$tob)(this.b.getValue("workbench.sash.hoverDelay"));
					}
					dispose() {
						this.a.dispose();
					}
				};
				(e.$lPc = m), (e.$lPc = m = Ne([j(0, C.$gj), j(1, d.$jEb)], m));
			},
		),
		