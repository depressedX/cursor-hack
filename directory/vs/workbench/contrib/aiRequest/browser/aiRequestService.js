define(
			de[2995],
			he([1, 0, 340, 875, 83, 3, 42, 204, 20, 5]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iqc = e.$hqc = void 0),
					(e.$hqc = (0, r.$Mi)("aiRequestService"));
				let u = class extends E.$1c {
					constructor(h, c) {
						super(), (this.c = h), (this.f = c);
					}
					registerRequesterProvider(h) {
						this.g = h;
					}
					async streamRequest(h, c, n, g) {
						const p = new Promise((l, y) => {
								g.signal?.addEventListener("abort", () =>
									y(new Error("Aborted")),
								);
							}),
							o = this.g?.request(h, { input: c.toJson(), headers: g.headers }),
							f = await Promise.race([o, p]);
						if (f instanceof Error)
							throw new t.ConnectError(
								"aborted",
								t.Code.Aborted,
								void 0,
								void 0,
							);
						if (f == null || typeof f != "string")
							return (async function* () {})();
						const b = this;
						return (async function* () {
							for (;;) {
								g.signal?.aborted && (await b.g?.cancel(f));
								const l = await b.g?.flush(f);
								if (l === void 0 || (l.length > 0 && l[0] === null)) return;
								if (
									l.length === 1 &&
									"isErrorRequesterService" in l[0] &&
									"error" in l[0] &&
									l[0].isErrorRequesterService
								)
									if (l[0].isErrorRequesterServiceConnectError) {
										const y = l[0].error,
											$ = new t.ConnectError(
												y.rawMessage,
												y.code,
												void 0,
												void 0,
											);
										throw (
											("details" in $ &&
												($.details = y.details.map((v) => {
													const S = w.$at.fromJson(v),
														I = new i.Any(void 0);
													return I.packFrom(S), I;
												})),
											$)
										);
									} else {
										const y = l[0].error,
											$ = new Error(y?.message);
										throw (($.name = y?.name), $);
									}
								else for (const y of l) yield n.fromJson(y);
								await new Promise((y) => setTimeout(y, 50));
							}
						})();
					}
				};
				(e.$iqc = u),
					(e.$iqc = u = Ne([j(0, d.$9Db), j(1, C.$MO)], u)),
					(0, m.$lK)(e.$hqc, u, m.InstantiationType.Delayed);
			},
		),
		