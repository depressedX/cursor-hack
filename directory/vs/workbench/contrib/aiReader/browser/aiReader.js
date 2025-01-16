define(de[788], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Jcc = void 0),
				(e.$Jcc = (0, t.$Mi)("IAiReaderService"));
		}),
		define(
			de[1710],
			he([1, 0, 7, 58, 3, 21, 32, 35, 217, 223, 123, 9, 23, 788]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				var n;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sZc = e.$rZc = e.$qZc = e.$pZc = void 0);
				const g = "workbench.editor.aireader";
				class p {
					canSerialize(l) {
						return l instanceof o;
					}
					serialize(l) {
						if (l instanceof o) return JSON.stringify({ state: "reader" });
					}
					deserialize(l, y) {
						try {
							return l.createInstance(o);
						} catch {
							return;
						}
					}
				}
				e.$pZc = p;
				class o extends r.$LO {
					static {
						this.ID = "workbench.editor.aireader.input";
					}
					get typeId() {
						return o.ID;
					}
					get resource() {
						return a.URI.from({
							scheme: h.Schemas.aiReader,
							path: "cursor/aireader",
						});
					}
					constructor() {
						super();
					}
					matches(l) {
						return super.matches(l) ? !0 : l instanceof o;
					}
					getName() {
						return "AI Reader";
					}
				}
				e.$qZc = o;
				let f = class extends m.$JEb {
					static {
						n = this;
					}
					static {
						this.ID = g;
					}
					constructor(l, y, $, v, S) {
						super(n.ID, l, y, $, v), (this.f = S);
					}
					Y(l) {
						l.classList.add("aireader-pane"),
							(this.c = (0, t.$fhb)(l, (0, t.$)(`.${i.$cX}`))),
							(this.c.tabIndex = 0),
							(this.c.style.outline = "none"),
							this.c.setAttribute("role", "document"),
							(this.c.style.width = "100%"),
							(this.c.style.height = "100%"),
							(this.c.style.backgroundColor =
								this.n.getColorTheme().getColor(u.$wGb)?.toString() ?? ""),
							this.j();
					}
					async setInput(l, y, $, v) {
						await super.setInput(l, y, $, v), this.j();
					}
					layout(l, y) {
						this.a = l;
					}
					dispose() {
						this.b?.dispose(), super.dispose();
					}
					j() {
						this.c !== void 0 && (this.b || (this.b = this.f.render(this.c)));
					}
				};
				(e.$rZc = f),
					(e.$rZc =
						f =
						n =
							Ne([j(1, C.$km), j(2, d.$iP), j(3, E.$lq), j(4, c.$Jcc)], f));
				class b extends w.$1c {
					static {
						this.ID = "editor.contrib.aireader";
					}
					constructor(l) {
						super(), (this.a = l);
					}
				}
				e.$sZc = b;
			},
		),
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
		