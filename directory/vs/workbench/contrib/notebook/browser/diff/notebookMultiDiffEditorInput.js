define(
			de[1319],
			he([1, 0, 9, 42, 125, 5, 712, 800, 1305, 360, 85]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				var a;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3Ec = e.$2Ec = e.$1Ec = void 0),
					(e.$1Ec = "multi-cell-notebook-diff-editor");
				class h extends m.$rEc {
					static {
						this.ID = "workbench.input.multiDiffNotebookInput";
					}
					static create(g, p, o, f, b, s) {
						const l = r.$TIb.getOrCreate(g, b, void 0, s),
							y = r.$TIb.getOrCreate(g, p, void 0, s);
						return g.createInstance(h, o, f, l, y, s);
					}
				}
				e.$2Ec = h;
				let c = (a = class extends C.$Lnc {
					static createInput(g, p) {
						const o = t.URI.parse(
							`${e.$1Ec}:${new Date().getMilliseconds().toString() + Math.random().toString()}`,
						);
						return p.createInstance(a, o, g);
					}
					constructor(g, p, o, f, b, s, l) {
						super(g, void 0, void 0, !0, o, f, b, s, l),
							(this.H = p),
							this.D(s.registerResolver(this));
					}
					canHandleUri(g) {
						return g.toString() === this.multiDiffSource.toString();
					}
					async resolveDiffSource(g) {
						return { resources: this.H };
					}
				});
				(e.$3Ec = c),
					(e.$3Ec =
						c =
						a =
							Ne(
								[
									j(2, i.$MO),
									j(3, w.$XO),
									j(4, E.$Li),
									j(5, d.$Inc),
									j(6, u.$kZ),
								],
								c,
							));
			},
		),
		