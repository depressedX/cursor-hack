define(de[3590], he([1, 0, 3, 286, 519]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$oXc = void 0);
			let E = class extends t.$1c {
				static {
					this.ID = "workbench.contrib.showPortCandidate";
				}
				constructor(d, m) {
					super();
					const r = m.options?.tunnelProvider?.showPortCandidate;
					r &&
						this.D(
							d.setCandidateFilter(async (u) => {
								const a = await Promise.all(
										u.map((c) => r(c.host, c.port, c.detail ?? "")),
									),
									h = [];
								if (a.length !== u.length) return u;
								for (let c = 0; c < u.length; c++) a[c] && h.push(u[c]);
								return h;
							}),
						);
				}
			};
			(e.$oXc = E), (e.$oXc = E = Ne([j(0, w.$5pc), j(1, i.$5rb)], E));
		}),
		