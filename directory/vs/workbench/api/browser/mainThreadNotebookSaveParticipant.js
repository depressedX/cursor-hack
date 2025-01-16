define(
			de[3908],
			he([1, 0, 4, 5, 101, 88, 15, 336, 1343]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Qpc = void 0);
				class r {
					constructor(h) {
						this.a = h.getProxy(E.$mbb.ExtHostNotebookDocumentSaveParticipant);
					}
					async participate(h, c, n, g) {
						if (!h.model || !(h.model instanceof m.$Opc)) return;
						let p;
						const o = new Promise((f, b) => {
							(p = setTimeout(
								() => b(new Error((0, t.localize)(2576, null))),
								1750,
							)),
								this.a
									.$participateInSave(h.resource, c.reason, g)
									.then((s) => {
										clearTimeout(p);
									})
									.then(f, b);
						});
						return (0, C.$Bh)(o, g);
					}
				}
				let u = class {
					constructor(h, c, n) {
						(this.b = n),
							(this.a = this.b.addSaveParticipant(c.createInstance(r, h)));
					}
					dispose() {
						this.a.dispose();
					}
				};
				(e.$Qpc = u), (e.$Qpc = u = Ne([w.$umc, j(1, i.$Li), j(2, d.$iZ)], u));
			},
		),
		