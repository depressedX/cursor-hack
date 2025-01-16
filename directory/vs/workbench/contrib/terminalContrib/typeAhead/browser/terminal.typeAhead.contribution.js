define(
			de[3174],
			he([1, 0, 3, 10, 5, 378, 3173, 145, 1264]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				var r;
				Object.defineProperty(e, "__esModule", { value: !0 });
				let u = class extends t.$Zc {
					static {
						r = this;
					}
					static {
						this.ID = "terminal.typeAhead";
					}
					static get(h) {
						return h.getContribution(r.ID);
					}
					constructor(h, c, n, g, p) {
						super(),
							(this.b = c),
							(this.c = g),
							(this.h = p),
							this.add((0, t.$Yc)(() => this.a?.dispose()));
					}
					xtermReady(h) {
						this.j(h.raw),
							this.add(
								this.c.onDidChangeConfiguration((c) => {
									c.affectsConfiguration(
										m.TerminalTypeAheadSettingId.LocalEchoEnabled,
									) && this.j(h.raw);
								}),
							),
							this.add(
								this.b.onProcessReady(() => {
									this.a?.reset();
								}),
							);
					}
					j(h) {
						const c = this.c.getValue(d.$ieb).localEchoEnabled,
							n = !!this.b.remoteAuthority;
						if (c === "off" || (c === "auto" && !n)) {
							this.a?.dispose(), (this.a = void 0);
							return;
						}
						this.a ||
							((c === "on" || (c === "auto" && n)) &&
								((this.a = this.h.createInstance(C.$RWc, this.b)),
								h.loadAddon(this.a)));
					}
				};
				(u = r = Ne([j(3, i.$gj), j(4, w.$Li)], u)), (0, E.$qLc)(u.ID, u);
			},
		),
		