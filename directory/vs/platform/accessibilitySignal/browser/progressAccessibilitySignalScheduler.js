define(de[1650], he([1, 0, 15, 3, 184]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$LIc = void 0);
			const E = 5e3;
			let C = class extends i.$1c {
				constructor(m, r, u) {
					super(),
						(this.c = u),
						(this.a = new t.$Yh(() => {
							this.b = this.c.playSignalLoop(w.$Twb.progress, r ?? E);
						}, m)),
						this.a.schedule();
				}
				dispose() {
					super.dispose(), this.b?.dispose(), this.a.dispose();
				}
			};
			(e.$LIc = C), (e.$LIc = C = Ne([j(2, w.$Owb)], C));
		}),
		define(
			de[1651],
			he([1, 0, 540, 20, 5, 34, 2747, 32]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$acd = e.ProfilingOutput = void 0);
				var m;
				(function (u) {
					(u[(u.Failure = 0)] = "Failure"),
						(u[(u.Irrelevant = 1)] = "Irrelevant"),
						(u[(u.Interesting = 2)] = "Interesting");
				})(m || (e.ProfilingOutput = m = {})),
					(e.$acd = (0, w.$Mi)("IProfileAnalysisWorkerService"));
				let r = class {
					constructor(a, h) {
						(this.a = a), (this.b = h);
					}
					async c(a) {
						const h = (0, t.$ijb)(
							"vs/platform/profiling/electron-sandbox/profileAnalysisWorker",
							"CpuProfileAnalysisWorker",
						);
						try {
							return await a(h.proxy);
						} finally {
							h.dispose();
						}
					}
					async analyseBottomUp(a, h, c, n) {
						return this.c(async (g) => {
							const p = await g.$analyseBottomUp(a);
							if (p.kind === m.Interesting)
								for (const o of p.samples)
									(0, C.$_bd)(
										{ sample: o, perfBaseline: c, source: h(o.url) },
										this.a,
										this.b,
										n,
									);
							return p.kind;
						});
					}
					async analyseByLocation(a, h) {
						return this.c(async (c) => await c.$analyseByUrlCategory(a, h));
					}
				};
				(r = Ne([j(0, d.$km), j(1, E.$ik)], r)),
					(0, i.$lK)(e.$acd, r, i.InstantiationType.Delayed);
			},
		),
		