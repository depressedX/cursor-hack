define(
			de[1995],
			he([1, 0, 3, 8, 4322, 832, 1715, 3, 20, 445, 180, 151, 110, 5]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zfd = void 0);
				let n = class extends d.$1c {
					constructor(p, o, f, b, s, l) {
						super(),
							(this.f = o),
							(this.g = f),
							(this.h = b),
							(this.j = s),
							(this.m = l),
							(this.a = new t.$Zc()),
							(this.c = new C.$sfd()),
							this.g.activate();
					}
					renderModal() {
						let p = this.f.mainContainer;
						p &&
							((this.b = (0, w.$yfd)({
								container: p,
								homeDir: this.h.userHome.fsPath,
								pickFolder: async () => {
									const o = { defaultPath: this.h.userHome.fsPath },
										f = await this.j.pickFolder(o);
									return f ? f[0] : void 0;
								},
								instantiationService: this.m,
								onClose: () => {
									console.log("CLOSED HERE"), this.close();
								},
							})),
							this.c.onFocus());
					}
					dispose() {
						console.log("DISPOSING HERE"),
							super.dispose(),
							this.a.dispose(),
							this.b?.dispose();
					}
					close() {
						console.log("CLOSING HERE"), this.b?.dispose();
					}
				};
				(e.$zfd = n),
					(e.$zfd = n =
						Ne(
							[
								j(0, i.$6j),
								j(1, u.$jEb),
								j(2, E.$u0b),
								j(3, a.$ucd),
								j(4, h.$y7c),
								j(5, c.$Li),
							],
							n,
						)),
					(0, m.$lK)(r.$38b, n, m.InstantiationType.Delayed);
			},
		),
		