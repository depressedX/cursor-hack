define(
			de[4022],
			he([1, 0, 6, 4, 25, 51, 3, 1945, 382, 163]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$FXb = void 0),
					(e.$EXb = u);
				function u(h) {
					if (h.isRoot && h.error)
						return {
							tooltip: (0, i.localize)(6983, null, (0, r.$xj)(h.error)),
							letter: "!",
							color: E.$SS,
						};
					if (h.isSymbolicLink)
						return { tooltip: (0, i.localize)(6984, null), letter: "\u2937" };
					if (h.isUnknown)
						return { tooltip: (0, i.localize)(6985, null), letter: "?" };
					if (h.isExcluded) return { color: E.$2S };
				}
				let a = class {
					constructor(c, n) {
						(this.c = c),
							(this.label = (0, i.localize)(6986, null)),
							(this.a = new t.$re()),
							(this.b = new C.$Zc()),
							this.b.add(this.a),
							this.b.add(
								n.onDidChangeWorkspaceFolders((g) => {
									this.a.fire(g.changed.concat(g.added).map((p) => p.uri));
								}),
							),
							this.b.add(
								d.$vXb.event((g) => {
									this.a.fire([g]);
								}),
							);
					}
					get onDidChange() {
						return this.a.event;
					}
					async provideDecorations(c) {
						const n = this.c.findClosest(c);
						if (!n) throw new Error("ExplorerItem not found");
						return u(n);
					}
					dispose() {
						this.b.dispose();
					}
				};
				(e.$FXb = a), (e.$FXb = a = Ne([j(0, m.$LWb), j(1, w.$Vi)], a));
			},
		),
		