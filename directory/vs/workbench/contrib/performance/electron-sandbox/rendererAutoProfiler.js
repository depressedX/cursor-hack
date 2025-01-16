define(
			de[3735],
			he([1, 0, 15, 76, 19, 47, 10, 22, 34, 110, 1651, 151, 698, 520]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Cgd = void 0);
				let n = class {
					constructor(p, o, f, b, s, l, y) {
						(this.b = p),
							(this.d = o),
							(this.f = f),
							!(0, h.$Umc)(p).isExtensionDevTestFromCli &&
								s.perfBaseline.then((v) => {
									if (
										(f.info(`[perf] Render performance baseline is ${v}ms`),
										v < 0)
									)
										return;
									const S = v * 10,
										I = new PerformanceObserver(async (T) => {
											I.takeRecords();
											const P = T.getEntries()
												.map((L) => L.duration)
												.reduce((L, D) => Math.max(L, D), 0);
											if (P < S) return;
											if (
												!l.getValue(
													"application.experimental.rendererProfiling",
												)
											) {
												f.debug(
													`[perf] SLOW task detected (${P}ms) but renderer profiling is disabled via 'application.experimental.rendererProfiling'`,
												);
												return;
											}
											const k = (0, E.$9g)();
											f.warn(
												`[perf] Renderer reported VERY LONG TASK (${P}ms), starting profiling session '${k}'`,
											),
												I.disconnect();
											for (let L = 0; L < 3; L++)
												try {
													const D = await b.profileRenderer(k, 5e3);
													if (
														(await y.analyseBottomUp(
															D,
															(N) => "<<renderer>>",
															v,
															!0,
														)) === u.ProfilingOutput.Interesting
													) {
														this.g(D, k);
														break;
													}
													(0, t.$Nh)(15e3);
												} catch (D) {
													f.error(D);
													break;
												}
											I.observe({ entryTypes: ["longtask"] });
										});
									I.observe({ entryTypes: ["longtask"] }), (this.a = I);
								});
					}
					dispose() {
						this.a?.disconnect();
					}
					async g(p, o) {
						const f = (0, w.$nh)(
							this.b.tmpDir,
							`renderer-${Math.random().toString(16).slice(2, 8)}.cpuprofile.json`,
						);
						await this.d.writeFile(f, i.$Te.fromString(JSON.stringify(p))),
							this.f.info(`[perf] stored profile to DISK '${f}'`, o);
					}
				};
				(e.$Cgd = n),
					(e.$Cgd = n =
						Ne(
							[
								j(0, a.$ucd),
								j(1, d.$ll),
								j(2, m.$ik),
								j(3, r.$y7c),
								j(4, c.$Xnc),
								j(5, C.$gj),
								j(6, u.$acd),
							],
							n,
						));
			},
		),
		