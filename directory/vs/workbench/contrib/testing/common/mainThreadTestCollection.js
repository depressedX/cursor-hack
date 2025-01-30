import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/iterator.js';
import '../../../../base/common/map.js';
import './testTypes.js';
define(de[3179], he([1, 0, 6, 103, 59, 185]), function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*iterator*/,
 w /*map*/,
 E /*testTypes*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$KLc = void 0);
			class C extends E.$t4 {
				get busyProviders() {
					return this.j;
				}
				get rootItems() {
					return this.h;
				}
				get all() {
					return this.o();
				}
				get rootIds() {
					return i.Iterable.map(this.h.values(), (m) => m.item.extId);
				}
				constructor(m, r) {
					super(m),
						(this.d = r),
						(this.a = new w.$Gc()),
						(this.b = new t.$re()),
						(this.c = new WeakMap()),
						(this.onBusyProvidersChange = this.b.event),
						(this.i = {
							add: (u) => {
								if (!u.item.uri) return;
								const a = this.a.get(u.item.uri);
								a ? a.add(u) : this.a.set(u.item.uri, new Set([u]));
							},
							remove: (u) => {
								if (!u.item.uri) return;
								const a = this.a.get(u.item.uri);
								a && (a.delete(u), a.size === 0 && this.a.delete(u.item.uri));
							},
						});
				}
				expand(m, r) {
					const u = this.g.get(m);
					if (!u) return Promise.resolve();
					const a = this.c.get(u);
					if (a && a.pendingLvl >= r) return a.prom;
					const h = this.d(u.item.extId, r),
						c = { doneLvl: a ? a.doneLvl : -1, pendingLvl: r, prom: h };
					return (
						this.c.set(u, c),
						h.then(() => {
							c.doneLvl = r;
						})
					);
				}
				getNodeById(m) {
					return this.g.get(m);
				}
				getNodeByUrl(m) {
					return this.a.get(m) || i.Iterable.empty();
				}
				getReviverDiff() {
					const m = [
							{ op: E.TestDiffOpType.IncrementPendingExtHosts, amount: this.k },
						],
						r = [this.rootIds];
					for (; r.length; )
						for (const u of r.pop()) {
							const a = this.g.get(u);
							m.push({
								op: E.TestDiffOpType.Add,
								item: {
									controllerId: a.controllerId,
									expand: a.expand,
									item: a.item,
								},
							}),
								r.push(a.children);
						}
					return m;
				}
				apply(m) {
					const r = this.j;
					super.apply(m), r !== this.j && this.b.fire(this.j);
				}
				clear() {
					const m = [];
					for (const r of this.h)
						m.push({ op: E.TestDiffOpType.Remove, itemId: r.item.extId });
					return this.h.clear(), this.g.clear(), m;
				}
				y(m) {
					return { ...m, children: new Set() };
				}
				x() {
					return this.i;
				}
				*o() {
					const m = [this.rootIds];
					for (; m.length; )
						for (const r of m.pop()) {
							const u = this.getNodeById(r);
							yield u, m.push(u.children);
						}
				}
			}
			e.$KLc = C;
		}),
		define(
			de[1e3],
			he([1, 0, 33, 59, 82, 77, 743, 9, 185]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$K4 = e.$J4 = e.$I4 = e.$H4 = e.$G4 = e.$F4 = e.$E4 = void 0);
				let r = 0;
				class u {
					constructor(f, b, s, l) {
						(this.result = f),
							(this.fromTaskId = b),
							(this.b = s),
							(this.c = l),
							(this.a = new i.$Gc()),
							(this.didAddCoverage = (0, E.observableSignal)(this)),
							(this.tree = new C.$j4()),
							(this.associatedData = new Map());
					}
					*allPerTestIDs() {
						const f = new Set();
						for (const b of this.tree.nodes)
							if (b.value && b.value.perTestData)
								for (const s of b.value.perTestData)
									f.has(s) || (f.add(s), yield s);
					}
					append(f, b) {
						const s = this.getComputedForUri(f.uri),
							l = this.result,
							y = (S, I) => {
								I[S]
									? ((I[S].covered +=
											(f[S]?.covered || 0) - (s?.[S]?.covered || 0)),
										(I[S].total += (f[S]?.total || 0) - (s?.[S]?.total || 0)))
									: f[S] && (I[S] = { ...f[S] });
							},
							$ = [...this.f(f.uri, !0)],
							v = [];
						this.tree.mutatePath(this.f(f.uri, !1), (S) => {
							if ((v.push(S), v.length === $.length))
								if (S.value) {
									const I = S.value;
									(I.id = f.id),
										(I.statement = f.statement),
										(I.branch = f.branch),
										(I.declaration = f.declaration);
								} else {
									const I = (S.value = new g(f, l, this.c));
									this.a.set(f.uri, I);
								}
							else if (S.value)
								y("statement", S.value),
									y("branch", S.value),
									y("declaration", S.value),
									S.value.didChange.trigger(b);
							else {
								const I = (0, w.$vo)(f);
								(I.id = String(r++)),
									(I.uri = this.g($.slice(0, v.length))),
									(S.value = new c(I, l));
							}
							if (f.testIds) {
								S.value.perTestData ??= new Set();
								for (const I of f.testIds) S.value.perTestData.add(I);
							}
						}),
							v && this.didAddCoverage.trigger(b, v);
					}
					filterTreeForTest(f) {
						const b = new C.$j4();
						for (const s of this.tree.values())
							if (s instanceof g) {
								if (!s.perTestData?.has(f.toString())) continue;
								const l = [...this.f(s.uri, !0)],
									y = [];
								b.mutatePath(this.f(s.uri, !1), ($) => {
									y.push($),
										($.value ??= new n(
											this.g(l.slice(0, y.length)),
											s.fromResult,
										));
								});
							}
						return b;
					}
					getAllFiles() {
						return this.a;
					}
					getUri(f) {
						return this.a.get(f);
					}
					getComputedForUri(f) {
						return this.tree.find(this.f(f, !1));
					}
					*f(f, b) {
						yield f.scheme,
							yield f.authority,
							yield* (
								!b && this.b.extUri.ignorePathCasing(f)
									? f.path.toLowerCase()
									: f.path
							).split("/");
					}
					g(f) {
						return d.URI.from({
							scheme: f[0],
							authority: f[1],
							path: f.slice(2).join("/"),
						});
					}
				}
				e.$E4 = u;
				const a = (o, f, b) => {
					let s = o.covered,
						l = o.total;
					return (
						f && ((s += f.covered), (l += f.total)),
						b && ((s += b.covered), (l += b.total)),
						l === 0 ? 1 : s / l
					);
				};
				e.$F4 = a;
				class h {
					get tpc() {
						return (0, e.$F4)(this.statement, this.branch, this.declaration);
					}
					constructor(f, b) {
						(this.fromResult = b),
							(this.didChange = (0, E.observableSignal)(this)),
							(this.id = f.id),
							(this.uri = f.uri),
							(this.statement = f.statement),
							(this.branch = f.branch),
							(this.declaration = f.declaration);
					}
				}
				e.$G4 = h;
				class c extends h {}
				e.$H4 = c;
				class n extends c {
					constructor(f, b) {
						super(
							{ id: String(r++), uri: f, statement: { covered: 0, total: 0 } },
							b,
						);
					}
				}
				e.$I4 = n;
				class g extends h {
					get hasSynchronousDetails() {
						return this.a instanceof Array || this.b;
					}
					constructor(f, b, s) {
						super(f, b), (this.f = s);
					}
					async detailsForTest(f, b = t.CancellationToken.None) {
						this.c ??= new Map();
						const s = f.toString(),
							l = this.c.get(s);
						if (l) return l;
						const y = (async () => {
							try {
								return await this.f.getCoverageDetails(this.id, s, b);
							} catch ($) {
								throw (this.c?.delete(s), $);
							}
						})();
						return this.c.set(s, y), y;
					}
					async details(f = t.CancellationToken.None) {
						this.a ??= this.f.getCoverageDetails(this.id, void 0, f);
						try {
							const b = await this.a;
							return (this.b = !0), b;
						} catch (b) {
							throw ((this.a = void 0), b);
						}
					}
				}
				e.$J4 = g;
				const p = (o, f) => {
					const b = { id: "", uri: o, statement: m.ICoverageCount.empty() };
					for (const s of f)
						if (s.type === m.DetailType.Statement) {
							b.statement.total++, (b.statement.total += s.count ? 1 : 0);
							for (const l of s.branches || [])
								(b.branch ??= m.ICoverageCount.empty()),
									b.branch.total++,
									(b.branch.covered += l.count ? 1 : 0);
						} else
							(b.declaration ??= m.ICoverageCount.empty()),
								b.declaration.total++,
								(b.declaration.covered += s.count ? 1 : 0);
					return b;
				};
				e.$K4 = p;
			},
		),
		