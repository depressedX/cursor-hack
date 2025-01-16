define(de[121], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Vxb = void 0),
				(e.$Vxb = (0, t.$Mi)("clipboardService"));
		}),
		define(
			de[31],
			he([1, 0, 6, 103, 3, 273, 28, 5]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$fk = e.$ek = void 0),
					(e.$ek = (0, d.$Mi)("commandService")),
					(e.$fk = new (class {
						constructor() {
							(this.a = new Map()),
								(this.b = new t.$re()),
								(this.onDidRegisterCommand = this.b.event);
						}
						registerCommand(m, r) {
							if (!m) throw new Error("invalid command");
							if (typeof m == "string") {
								if (!r) throw new Error("invalid command");
								return this.registerCommand({ id: m, handler: r });
							}
							if (m.metadata && Array.isArray(m.metadata.args)) {
								const n = [];
								for (const p of m.metadata.args) n.push(p.constraint);
								const g = m.handler;
								m.handler = function (p, ...o) {
									return (0, C.$Bg)(o, n), g(p, ...o);
								};
							}
							const { id: u } = m;
							let a = this.a.get(u);
							a || ((a = new E.$$c()), this.a.set(u, a));
							const h = a.unshift(m),
								c = (0, w.$Yc)(() => {
									h(), this.a.get(u)?.isEmpty() && this.a.delete(u);
								});
							return this.b.fire(u), c;
						}
						registerCommandAlias(m, r) {
							return e.$fk.registerCommand(m, (u, ...a) =>
								u.get(e.$ek).executeCommand(r, ...a),
							);
						}
						getCommand(m) {
							const r = this.a.get(m);
							if (!(!r || r.isEmpty())) return i.Iterable.first(r);
						}
						getCommands() {
							const m = new Map();
							for (const r of this.a.keys()) {
								const u = this.getCommand(r);
								u && m.set(r, u);
							}
							return m;
						}
					})()),
					e.$fk.registerCommand("noop", () => {});
			},
		),
		define(
			de[1601],
			he([1, 0, 33, 29, 3, 28, 9, 67, 31, 69]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$JBb = void 0),
					(e.$KBb = a);
				class u {
					constructor() {
						(this.lenses = []), (this.c = new w.$Zc());
					}
					dispose() {
						this.c.dispose();
					}
					get isDisposed() {
						return this.c.isDisposed;
					}
					add(c, n) {
						this.c.add(c);
						for (const g of c.lenses)
							this.lenses.push({ symbol: g, provider: n });
					}
				}
				e.$JBb = u;
				async function a(h, c, n) {
					const g = h.ordered(c),
						p = new Map(),
						o = new u(),
						f = g.map(async (b, s) => {
							p.set(b, s);
							try {
								const l = await Promise.resolve(b.provideCodeLenses(c, n));
								l && o.add(l, b);
							} catch (l) {
								(0, i.$5)(l);
							}
						});
					return (
						await Promise.all(f),
						(o.lenses = o.lenses.sort((b, s) =>
							b.symbol.range.startLineNumber < s.symbol.range.startLineNumber
								? -1
								: b.symbol.range.startLineNumber >
										s.symbol.range.startLineNumber
									? 1
									: p.get(b.provider) < p.get(s.provider)
										? -1
										: p.get(b.provider) > p.get(s.provider)
											? 1
											: b.symbol.range.startColumn < s.symbol.range.startColumn
												? -1
												: b.symbol.range.startColumn >
														s.symbol.range.startColumn
													? 1
													: 0,
						)),
						o
					);
				}
				m.$fk.registerCommand("_executeCodeLensProvider", function (h, ...c) {
					let [n, g] = c;
					(0, E.$vg)(C.URI.isUri(n)), (0, E.$vg)(typeof g == "number" || !g);
					const { codeLensProvider: p } = h.get(r.$k3),
						o = h.get(d.$QO).getModel(n);
					if (!o) throw (0, i.$$)();
					const f = [],
						b = new w.$Zc();
					return a(p, o, t.CancellationToken.None)
						.then((s) => {
							b.add(s);
							const l = [];
							for (const y of s.lenses)
								g == null || y.symbol.command
									? f.push(y.symbol)
									: g-- > 0 &&
										y.provider.resolveCodeLens &&
										l.push(
											Promise.resolve(
												y.provider.resolveCodeLens(
													o,
													y.symbol,
													t.CancellationToken.None,
												),
											).then(($) => f.push($ || y.symbol)),
										);
							return Promise.all(l);
						})
						.then(() => f)
						.finally(() => {
							setTimeout(() => b.dispose(), 100);
						});
				});
			},
		),
		define(
			de[2710],
			he([1, 0, 24, 33, 29, 3, 28, 9, 17, 67, 31, 69]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4Ob = e.Link = void 0),
					(e.$5Ob = n);
				class h {
					constructor(p, o) {
						(this.a = p), (this.b = o);
					}
					toJSON() {
						return { range: this.range, url: this.url, tooltip: this.tooltip };
					}
					get range() {
						return this.a.range;
					}
					get url() {
						return this.a.url;
					}
					get tooltip() {
						return this.a.tooltip;
					}
					async resolve(p) {
						return this.a.url
							? this.a.url
							: typeof this.b.resolveLink == "function"
								? Promise.resolve(this.b.resolveLink(this.a, p)).then(
										(o) => (
											(this.a = o || this.a),
											this.a.url
												? this.resolve(p)
												: Promise.reject(new Error("missing"))
										),
									)
								: Promise.reject(new Error("missing"));
					}
				}
				e.Link = h;
				class c {
					constructor(p) {
						this.a = new E.$Zc();
						let o = [];
						for (const [f, b] of p) {
							const s = f.links.map((l) => new h(l, b));
							(o = c.b(o, s)), (0, E.$Uc)(f) && this.a.add(f);
						}
						this.links = o;
					}
					dispose() {
						this.a.dispose(), (this.links.length = 0);
					}
					static b(p, o) {
						const f = [];
						let b, s, l, y;
						for (b = 0, l = 0, s = p.length, y = o.length; b < s && l < y; ) {
							const $ = p[b],
								v = o[l];
							if (m.$iL.areIntersectingOrTouching($.range, v.range)) {
								b++;
								continue;
							}
							m.$iL.compareRangesUsingStarts($.range, v.range) < 0
								? (f.push($), b++)
								: (f.push(v), l++);
						}
						for (; b < s; b++) f.push(p[b]);
						for (; l < y; l++) f.push(o[l]);
						return f;
					}
				}
				e.$4Ob = c;
				function n(g, p, o) {
					const f = [],
						b = g
							.ordered(p)
							.reverse()
							.map((s, l) =>
								Promise.resolve(s.provideLinks(p, o)).then((y) => {
									y && (f[l] = [y, s]);
								}, w.$5),
							);
					return Promise.all(b).then(() => {
						const s = new c((0, t.$Lb)(f));
						return o.isCancellationRequested ? (s.dispose(), new c([])) : s;
					});
				}
				u.$fk.registerCommand("_executeLinkProvider", async (g, ...p) => {
					let [o, f] = p;
					(0, C.$vg)(o instanceof d.URI), typeof f != "number" && (f = 0);
					const { linkProvider: b } = g.get(a.$k3),
						s = g.get(r.$QO).getModel(o);
					if (!s) return [];
					const l = await n(b, s, i.CancellationToken.None);
					if (!l) return [];
					for (let $ = 0; $ < Math.min(f, l.links.length); $++)
						await l.links[$].resolve(i.CancellationToken.None);
					const y = l.links.slice(0);
					return l.dispose(), y;
				});
			},
		),
		define(
			de[1602],
			he([1, 0, 33, 29, 9, 67, 31, 28, 1591, 17, 69]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$Ob = void 0),
					(e.$9Ob = a),
					(e.$0Ob = h),
					(e.$_Ob = n),
					(e.$aPb = p),
					(e.$bPb = b),
					(e.$cPb = l);
				function a(y) {
					return y && !!y.data;
				}
				function h(y) {
					return y && Array.isArray(y.edits);
				}
				class c {
					constructor($, v, S) {
						(this.provider = $), (this.tokens = v), (this.error = S);
					}
				}
				e.$$Ob = c;
				function n(y, $) {
					return y.has($);
				}
				function g(y, $) {
					const v = y.orderedGroups($);
					return v.length > 0 ? v[0] : [];
				}
				async function p(y, $, v, S, I) {
					const T = g(y, $),
						P = await Promise.all(
							T.map(async (k) => {
								let L,
									D = null;
								try {
									L = await k.provideDocumentSemanticTokens(
										$,
										k === v ? S : null,
										I,
									);
								} catch (M) {
									(D = M), (L = null);
								}
								return (!L || (!a(L) && !h(L))) && (L = null), new c(k, L, D);
							}),
						);
					for (const k of P) {
						if (k.error) throw k.error;
						if (k.tokens) return k;
					}
					return P.length > 0 ? P[0] : null;
				}
				function o(y, $) {
					const v = y.orderedGroups($);
					return v.length > 0 ? v[0] : null;
				}
				class f {
					constructor($, v) {
						(this.provider = $), (this.tokens = v);
					}
				}
				function b(y, $) {
					return y.has($);
				}
				function s(y, $) {
					const v = y.orderedGroups($);
					return v.length > 0 ? v[0] : [];
				}
				async function l(y, $, v, S) {
					const I = s(y, $),
						T = await Promise.all(
							I.map(async (P) => {
								let k;
								try {
									k = await P.provideDocumentRangeSemanticTokens($, v, S);
								} catch (L) {
									(0, i.$5)(L), (k = null);
								}
								return (!k || !a(k)) && (k = null), new f(P, k);
							}),
						);
					for (const P of T) if (P.tokens) return P;
					return T.length > 0 ? T[0] : null;
				}
				C.$fk.registerCommand(
					"_provideDocumentSemanticTokensLegend",
					async (y, ...$) => {
						const [v] = $;
						(0, d.$vg)(v instanceof w.URI);
						const S = y.get(E.$QO).getModel(v);
						if (!S) return;
						const { documentSemanticTokensProvider: I } = y.get(u.$k3),
							T = o(I, S);
						return T
							? T[0].getLegend()
							: y
									.get(C.$ek)
									.executeCommand(
										"_provideDocumentRangeSemanticTokensLegend",
										v,
									);
					},
				),
					C.$fk.registerCommand(
						"_provideDocumentSemanticTokens",
						async (y, ...$) => {
							const [v] = $;
							(0, d.$vg)(v instanceof w.URI);
							const S = y.get(E.$QO).getModel(v);
							if (!S) return;
							const { documentSemanticTokensProvider: I } = y.get(u.$k3);
							if (!n(I, S))
								return y
									.get(C.$ek)
									.executeCommand(
										"_provideDocumentRangeSemanticTokens",
										v,
										S.getFullModelRange(),
									);
							const T = await p(I, S, null, null, t.CancellationToken.None);
							if (!T) return;
							const { provider: P, tokens: k } = T;
							if (!k || !a(k)) return;
							const L = (0, m.$7Ob)({ id: 0, type: "full", data: k.data });
							return (
								k.resultId && P.releaseDocumentSemanticTokens(k.resultId), L
							);
						},
					),
					C.$fk.registerCommand(
						"_provideDocumentRangeSemanticTokensLegend",
						async (y, ...$) => {
							const [v, S] = $;
							(0, d.$vg)(v instanceof w.URI);
							const I = y.get(E.$QO).getModel(v);
							if (!I) return;
							const { documentRangeSemanticTokensProvider: T } = y.get(u.$k3),
								P = s(T, I);
							if (P.length === 0) return;
							if (P.length === 1) return P[0].getLegend();
							if (!S || !r.$iL.isIRange(S))
								return (
									console.warn(
										"provideDocumentRangeSemanticTokensLegend might be out-of-sync with provideDocumentRangeSemanticTokens unless a range argument is passed in",
									),
									P[0].getLegend()
								);
							const k = await l(T, I, r.$iL.lift(S), t.CancellationToken.None);
							if (k) return k.provider.getLegend();
						},
					),
					C.$fk.registerCommand(
						"_provideDocumentRangeSemanticTokens",
						async (y, ...$) => {
							const [v, S] = $;
							(0, d.$vg)(v instanceof w.URI), (0, d.$vg)(r.$iL.isIRange(S));
							const I = y.get(E.$QO).getModel(v);
							if (!I) return;
							const { documentRangeSemanticTokensProvider: T } = y.get(u.$k3),
								P = await l(T, I, r.$iL.lift(S), t.CancellationToken.None);
							if (!(!P || !P.tokens))
								return (0, m.$7Ob)({
									id: 0,
									type: "full",
									data: P.tokens.data,
								});
						},
					);
			},
		),
		