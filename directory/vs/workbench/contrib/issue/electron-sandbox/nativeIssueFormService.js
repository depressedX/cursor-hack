define(
		de[3449],
		he([1, 0, 11, 8, 57, 113, 5, 34, 110, 372, 3448, 3070, 703, 87, 2447]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$ggd = void 0),
				(r = xi(r));
			let n = class extends u.$u6c {
				constructor(p, o, f, b, s, l, y, $, v) {
					super(p, o, s, l, f, b, y), (this.n = $), (this.o = v);
				}
				async openReporter(p) {
					if (this.hasToReload(p)) return;
					const o = await this.n.getActiveWindowPosition();
					if (!o) return;
					await this.openAuxIssueReporter(p, o);
					const {
						arch: f,
						release: b,
						type: s,
					} = await this.n.getOSProperties();
					(this.d = f),
						(this.e = b),
						(this.f = s),
						this.b &&
							this.g
								.createInstance(
									a.$fgd,
									!!this.o.disableExtensions,
									p,
									{ type: this.f, arch: this.d, release: this.e },
									r.default,
									this.b,
								)
								.render();
				}
			};
			(e.$ggd = n),
				(e.$ggd = n =
					Ne(
						[
							j(0, C.$Li),
							j(1, h.$AEb),
							j(2, d.$ik),
							j(3, w.$GO),
							j(4, t.$YX),
							j(5, i.$6j),
							j(6, c.$asb),
							j(7, m.$y7c),
							j(8, E.$Ui),
						],
						n,
					));
		},
	),
		