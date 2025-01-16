define(
			de[667],
			he([1, 0, 24, 6, 103, 59, 23, 9, 90]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lic = e.$kic = e.$jic = void 0),
					(e.$jic = new Set([
						C.Schemas.inMemory,
						C.Schemas.vscodeSourceControl,
						C.Schemas.walkThrough,
						C.Schemas.walkThroughSnippet,
						C.Schemas.vscodeChatCodeBlock,
					])),
					(e.$kic = "ai_lint_bug_");
				class r {
					constructor() {
						(this.a = new E.$Gc()), (this.b = new Map());
					}
					set(c, n, g) {
						let p = this.a.get(c);
						p || ((p = new Map()), this.a.set(c, p)), p.set(n, g);
						let o = this.b.get(n);
						o || ((o = new E.$Gc()), this.b.set(n, o)), o.set(c, g);
					}
					get(c, n) {
						return this.a.get(c)?.get(n);
					}
					delete(c, n) {
						let g = !1,
							p = !1;
						const o = this.a.get(c);
						o && (g = o.delete(n));
						const f = this.b.get(n);
						if ((f && (p = f.delete(c)), g !== p))
							throw new Error("illegal state");
						return g && p;
					}
					values(c) {
						return typeof c == "string"
							? (this.b.get(c)?.values() ?? w.Iterable.empty())
							: d.URI.isUri(c)
								? (this.a.get(c)?.values() ?? w.Iterable.empty())
								: w.Iterable.map(
										w.Iterable.concat(...this.b.values()),
										(n) => n[1],
									);
					}
				}
				class u {
					constructor(c) {
						(this.errors = 0),
							(this.infos = 0),
							(this.warnings = 0),
							(this.unknowns = 0),
							(this.a = new E.$Gc()),
							(this.b = c),
							(this.c = c.onMarkerChanged(this.d, this));
					}
					dispose() {
						this.c.dispose();
					}
					d(c) {
						for (const n of c) {
							const g = this.a.get(n);
							g && this.f(g);
							const p = this.e(n);
							this.g(p), this.a.set(n, p);
						}
					}
					e(c) {
						const n = { errors: 0, warnings: 0, infos: 0, unknowns: 0 };
						if (e.$jic.has(c.scheme)) return n;
						for (const { severity: g } of this.b.read({ resource: c }))
							g === m.MarkerSeverity.Error
								? (n.errors += 1)
								: g === m.MarkerSeverity.Warning
									? (n.warnings += 1)
									: g === m.MarkerSeverity.Info
										? (n.infos += 1)
										: (n.unknowns += 1);
						return n;
					}
					f(c) {
						(this.errors -= c.errors),
							(this.warnings -= c.warnings),
							(this.infos -= c.infos),
							(this.unknowns -= c.unknowns);
					}
					g(c) {
						(this.errors += c.errors),
							(this.warnings += c.warnings),
							(this.infos += c.infos),
							(this.unknowns += c.unknowns);
					}
				}
				class a {
					constructor() {
						(this.a = new i.$ve({ delay: 0, merge: a.f })),
							(this.onMarkerChanged = this.a.event),
							(this.b = new r()),
							(this.c = new u(this));
					}
					dispose() {
						this.c.dispose(), this.a.dispose();
					}
					getStatistics() {
						return this.c;
					}
					remove(c, n) {
						for (const g of n || []) this.changeOne(c, g, []);
					}
					changeOne(c, n, g) {
						if ((0, t.$Ob)(g)) this.b.delete(n, c) && this.a.fire([n]);
						else {
							const p = [];
							for (const o of g) {
								const f = a.d(c, n, o);
								f && p.push(f);
							}
							this.b.set(n, c, p), this.a.fire([n]);
						}
					}
					static d(c, n, g) {
						let {
							code: p,
							severity: o,
							message: f,
							source: b,
							startLineNumber: s,
							startColumn: l,
							endLineNumber: y,
							endColumn: $,
							relatedInformation: v,
							tags: S,
							aiLintBugData: I,
						} = g;
						if (f)
							return (
								(s = s > 0 ? s : 1),
								(l = l > 0 ? l : 1),
								(y = y >= s ? y : s),
								($ = $ > 0 ? $ : l),
								{
									resource: n,
									owner: c,
									code: p,
									severity: o,
									message: f,
									source: b,
									startLineNumber: s,
									startColumn: l,
									endLineNumber: y,
									endColumn: $,
									relatedInformation: v,
									tags: S,
									aiLintBugData: I,
								}
							);
					}
					changeAll(c, n) {
						const g = [],
							p = this.b.values(c);
						if (p)
							for (const o of p) {
								const f = w.Iterable.first(o);
								f && (g.push(f.resource), this.b.delete(f.resource, c));
							}
						if ((0, t.$Pb)(n)) {
							const o = new E.$Gc();
							for (const { resource: f, marker: b } of n) {
								const s = a.d(c, f, b);
								if (!s) continue;
								const l = o.get(f);
								l ? l.push(s) : (o.set(f, [s]), g.push(f));
							}
							for (const [f, b] of o) this.b.set(f, c, b);
						}
						g.length > 0 && this.a.fire(g);
					}
					read(c = Object.create(null)) {
						let { owner: n, resource: g, severities: p, take: o } = c;
						if (((!o || o < 0) && (o = -1), n && g)) {
							const f = this.b.get(g, n);
							if (f) {
								const b = [];
								for (const s of f)
									if (a.e(s, p)) {
										const l = b.push(s);
										if (o > 0 && l === o) break;
									}
								return b;
							} else return [];
						} else if (!n && !g) {
							const f = [];
							for (const b of this.b.values())
								for (const s of b)
									if (a.e(s, p)) {
										const l = f.push(s);
										if (o > 0 && l === o) return f;
									}
							return f;
						} else {
							const f = this.b.values(g ?? n),
								b = [];
							for (const s of f)
								for (const l of s)
									if (a.e(l, p)) {
										const y = b.push(l);
										if (o > 0 && y === o) return b;
									}
							return b;
						}
					}
					static e(c, n) {
						return n === void 0 || (n & c.severity) === c.severity;
					}
					static f(c) {
						const n = new E.$Gc();
						for (const g of c) for (const p of g) n.set(p, !0);
						return Array.from(n.keys());
					}
				}
				e.$lic = a;
			},
		),
		