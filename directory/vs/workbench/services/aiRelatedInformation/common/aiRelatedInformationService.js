import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../base/common/stopwatch.js';
import '../../../../platform/log/common/log.js';
import './aiRelatedInformation.js';
define(
			de[3244],
			he([1, 0, 15, 20, 162, 34, 1013]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*extensions*/,
 w /*stopwatch*/,
 E /*log*/,
 C /*aiRelatedInformation*/) {
				"use strict";
				var d;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Bvc = void 0);
				let m = class {
					static {
						d = this;
					}
					static {
						this.DEFAULT_TIMEOUT = 1e3 * 10;
					}
					constructor(u) {
						(this.b = u), (this.a = new Map());
					}
					isEnabled() {
						return this.a.size > 0;
					}
					registerAiRelatedInformationProvider(u, a) {
						const h = this.a.get(u) ?? [];
						return (
							h.push(a),
							this.a.set(u, h),
							{
								dispose: () => {
									const c = this.a.get(u) ?? [],
										n = c.indexOf(a);
									n !== -1 && c.splice(n, 1),
										c.length === 0 && this.a.delete(u);
								},
							}
						);
					}
					async getRelatedInformation(u, a, h) {
						if (this.a.size === 0)
							throw new Error("No related information providers registered");
						const c = [];
						for (const p of a) {
							const o = this.a.get(p);
							o && c.push(...o);
						}
						if (c.length === 0)
							throw new Error(
								"No related information providers registered for the given types",
							);
						const n = w.$le.create(),
							g = c.map((p) =>
								(0, t.$zh)(async (o) => {
									try {
										return (await p.provideAiRelatedInformation(u, o)).filter(
											(b) => a.includes(b.type),
										);
									} catch {}
									return [];
								}),
							);
						try {
							const p = await (0, t.$Dh)(
								Promise.allSettled(g),
								d.DEFAULT_TIMEOUT,
								() => {
									g.forEach((f) => f.cancel()),
										this.b.warn(
											"[AiRelatedInformationService]: Related information provider timed out",
										);
								},
							);
							return p
								? p
										.filter((f) => f.status === "fulfilled")
										.flatMap((f) => f.value)
								: [];
						} finally {
							n.stop(),
								this.b.trace(
									`[AiRelatedInformationService]: getRelatedInformation took ${n.elapsed()}ms`,
								);
						}
					}
				};
				(e.$Bvc = m),
					(e.$Bvc = m = d = Ne([j(0, E.$ik)], m)),
					(0, i.$lK)(C.$97, m, i.InstantiationType.Delayed);
			},
		)
