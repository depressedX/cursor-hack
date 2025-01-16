define(de[3179], he([1, 0, 6, 103, 59, 185]), function (ce, e, t, i, w, E) {
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
		define(
			de[1266],
			he([1, 0, 229, 201, 4, 51, 306, 443, 1e3]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.labels = e.$1Jc = e.$ZJc = e.$YJc = e.$XJc = void 0),
					(e.$2Jc = g);
				const r = (o) =>
					(0, i.$Zm)(o.total === 0 ? 1 : o.covered / o.total, 0, 1);
				e.$XJc = r;
				const u = [
						{ color: `var(${(0, C.$qP)(E.$NR)})`, key: "red" },
						{ color: `var(${(0, C.$qP)(E.$PR)})`, key: "yellow" },
						{ color: `var(${(0, C.$qP)(E.$RR)})`, key: "green" },
					],
					a = (o, f) => {
						let b = u[0].color,
							s = o;
						for (const { key: l, color: y } of u) {
							const $ = f[l] / 100;
							$ && o >= $ && o - $ < s && ((b = y), (s = o - $));
						}
						return b;
					};
				e.$YJc = a;
				const h = 1e-7,
					c = (o, f = 2) => {
						const b = (o * 100).toFixed(f);
						return o < 1 - h && b === "100" ? `${100 - 10 ** -f}%` : `${b}%`;
					};
				e.$ZJc = c;
				const n = (o, f) => {
					switch (f) {
						case d.TestingDisplayedCoveragePercent.Statement:
							return (0, e.$XJc)(o.statement);
						case d.TestingDisplayedCoveragePercent.Minimum: {
							let b = (0, e.$XJc)(o.statement);
							return (
								o.branch && (b = Math.min(b, (0, e.$XJc)(o.branch))),
								o.declaration && (b = Math.min(b, (0, e.$XJc)(o.declaration))),
								b
							);
						}
						case d.TestingDisplayedCoveragePercent.TotalCoverage:
							return (0, m.$F4)(o.statement, o.branch, o.declaration);
						default:
							(0, t.$kd)(f);
					}
				};
				e.$1Jc = n;
				function g(o, f, b) {
					const s = [];
					for (const l of f.idsFromRoot()) {
						const y = o.getTestById(l.toString());
						if (!y) break;
						s.push(y.label);
					}
					return s.slice(b).join(" \u203A ");
				}
				var p;
				(function (o) {
					(o.showingFilterFor = (f) => (0, w.localize)(10627, null, f)),
						(o.clickToChangeFiltering = (0, w.localize)(10628, null)),
						(o.percentCoverage = (f, b) =>
							(0, w.localize)(10629, null, (0, e.$ZJc)(f, b))),
						(o.allTests = (0, w.localize)(10630, null)),
						(o.pickShowCoverage = (0, w.localize)(10631, null));
				})(p || (e.labels = p = {}));
			},
		),
		define(
			de[1001],
			he([1, 0, 6, 215, 3, 5, 21, 810, 515, 185]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.TestFilterTerm = e.$yLc = e.$xLc = void 0),
					(e.$xLc = (0, E.$Mi)("testingFilterState"));
				const u = /!?@([^ ,:]+)/g,
					a = (g) => g.replace(/\s\s+/g, " ").trim();
				let h = class extends w.$1c {
					constructor(p) {
						super(),
							(this.c = p),
							(this.a = new t.$re()),
							(this.b = {}),
							(this.globList = []),
							(this.includeTags = new Set()),
							(this.excludeTags = new Set()),
							(this.text = this.D(new d.$qqc(""))),
							(this.fuzzy = this.D(
								d.$qqc.stored(
									new m.$oqc(
										{
											key: "testHistoryFuzzy",
											scope: C.StorageScope.PROFILE,
											target: C.StorageTarget.USER,
										},
										this.c,
									),
									!1,
								),
							)),
							(this.reveal = this.D(new d.$qqc(void 0))),
							(this.onDidRequestInputFocus = this.a.event);
					}
					focusInput() {
						this.a.fire();
					}
					setText(p) {
						if (p === this.text.value) return;
						(this.b = {}),
							(this.globList = []),
							this.includeTags.clear(),
							this.excludeTags.clear();
						let o = "",
							f = 0;
						for (const b of p.matchAll(u)) {
							let s = b.index + b[0].length;
							const l = b[0];
							if ((n.includes(l) && (this.b[l] = !0), p[s] === ":")) {
								s++;
								let y = p[s];
								y !== '"' && y !== "'" ? (y = " ") : s++;
								let $ = "";
								for (; s < p.length && p[s] !== y; )
									p[s] === "\\"
										? (($ += p[s + 1]), (s += 2))
										: (($ += p[s]), s++);
								b[0].startsWith("!")
									? this.excludeTags.add((0, r.$p4)(b[1], $))
									: this.includeTags.add((0, r.$p4)(b[1], $)),
									s++;
							}
							(o += p.slice(f, b.index)), (f = s);
						}
						if (((o += p.slice(f).trim()), o.length))
							for (const b of (0, i.$Hk)(o, ",")
								.map((s) => s.trim())
								.filter((s) => !!s.length))
								b.startsWith("!")
									? this.globList.push({
											include: !1,
											text: b.slice(1).toLowerCase(),
										})
									: this.globList.push({ include: !0, text: b.toLowerCase() });
						this.text.value = p;
					}
					isFilteringFor(p) {
						return !!this.b[p];
					}
					toggleFilteringFor(p, o) {
						const f = this.text.value.trim();
						o !== !1 && !this.b[p]
							? this.setText(f ? `${f} ${p}` : p)
							: o !== !0 && this.b[p] && this.setText(a(f.replace(p, "")));
					}
				};
				(e.$yLc = h), (e.$yLc = h = Ne([j(0, C.$lq)], h));
				var c;
				(function (g) {
					(g.Failed = "@failed"),
						(g.Executed = "@executed"),
						(g.CurrentDoc = "@doc"),
						(g.OpenedFiles = "@openedFiles"),
						(g.Hidden = "@hidden");
				})(c || (e.TestFilterTerm = c = {}));
				const n = [c.Failed, c.Executed, c.CurrentDoc, c.OpenedFiles, c.Hidden];
			},
		),
		define(
			de[3180],
			he([1, 0, 15, 6, 3, 229, 185, 259]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$d9 = e.$c9 = e.$b9 = e.$a9 = e.$_8 = e.TestItemEventOp = void 0);
				var m;
				(function (f) {
					(f[(f.Upsert = 0)] = "Upsert"),
						(f[(f.SetTags = 1)] = "SetTags"),
						(f[(f.UpdateCanResolveChildren = 2)] = "UpdateCanResolveChildren"),
						(f[(f.RemoveChild = 3)] = "RemoveChild"),
						(f[(f.SetProp = 4)] = "SetProp"),
						(f[(f.Bulk = 5)] = "Bulk"),
						(f[(f.DocumentSynced = 6)] = "DocumentSynced");
				})(m || (e.TestItemEventOp = m = {}));
				const r = (f, b) => f === b,
					a = Object.entries({
						range: (f, b) => (f === b ? !0 : !f || !b ? !1 : f.equalsRange(b)),
						busy: r,
						label: r,
						description: r,
						error: r,
						sortText: r,
						tags: (f, b) =>
							!(f.length !== b.length || f.some((s) => !b.includes(s))),
					}),
					h = (f, b) => {
						let s;
						for (const [l, y] of a)
							y(f[l], b[l]) || (s ? (s[l] = b[l]) : (s = { [l]: b[l] }));
						return s;
					};
				class c extends w.$1c {
					get root() {
						return this.q.root;
					}
					constructor(b) {
						super(),
							(this.q = b),
							(this.f = this.D(new t.$Yh(() => this.flushDiff(), 200))),
							(this.g = this.D(new i.$re())),
							(this.tree = new Map()),
							(this.j = new Map()),
							(this.m = []),
							(this.onDidGenerateDiff = this.g.event),
							(this.root.canResolveChildren = !0),
							this.y(this.root, void 0);
					}
					set resolveHandler(b) {
						this.h = b;
						for (const s of this.tree.values()) this.J(s);
					}
					get resolveHandler() {
						return this.h;
					}
					collectDiff() {
						const b = this.m;
						return (this.m = []), b;
					}
					pushDiff(b) {
						switch (b.op) {
							case C.TestDiffOpType.DocumentSynced: {
								for (const s of this.m)
									if (
										s.op === C.TestDiffOpType.DocumentSynced &&
										s.uri === b.uri
									) {
										s.docv = b.docv;
										return;
									}
								break;
							}
							case C.TestDiffOpType.Update: {
								const s = this.m[this.m.length - 1];
								if (s) {
									if (
										s.op === C.TestDiffOpType.Update &&
										s.item.extId === b.item.extId
									) {
										(0, C.$r4)(s.item, b.item);
										return;
									}
									if (
										s.op === C.TestDiffOpType.Add &&
										s.item.item.extId === b.item.extId
									) {
										(0, C.$r4)(s.item, b.item);
										return;
									}
								}
								break;
							}
						}
						this.m.push(b), this.f.isScheduled() || this.f.schedule();
					}
					expand(b, s) {
						const l = this.tree.get(b);
						if (l) {
							if (
								((l.expandLevels === void 0 || s > l.expandLevels) &&
									(l.expandLevels = s),
								l.expand === C.TestItemExpandState.Expandable)
							) {
								const y = this.M(l);
								return y.isOpen()
									? this.L(l, s - 1)
									: y.wait().then(() => this.L(l, s - 1));
							} else if (l.expand === C.TestItemExpandState.Expanded)
								return l.resolveBarrier?.isOpen() === !1
									? l.resolveBarrier.wait().then(() => this.L(l, s - 1))
									: this.L(l, s - 1);
						}
					}
					dispose() {
						for (const b of this.tree.values())
							this.q.getApiFor(b.actual).listener = void 0;
						this.tree.clear(), (this.m = []), super.dispose();
					}
					s(b, s) {
						switch (s.op) {
							case m.RemoveChild:
								this.O(d.$k4.joinToString(b.fullId, s.id));
								break;
							case m.Upsert:
								this.y(s.item, b);
								break;
							case m.Bulk:
								for (const l of s.ops) this.s(b, l);
								break;
							case m.SetTags:
								this.z(s.new, s.old, b.fullId.toString());
								break;
							case m.UpdateCanResolveChildren:
								this.J(b);
								break;
							case m.SetProp:
								this.pushDiff({
									op: C.TestDiffOpType.Update,
									item: { extId: b.fullId.toString(), item: s.update },
								});
								break;
							case m.DocumentSynced:
								this.w(b.actual.uri);
								break;
							default:
								(0, E.$kd)(s);
						}
					}
					w(b) {
						b &&
							this.pushDiff({
								op: C.TestDiffOpType.DocumentSynced,
								uri: b,
								docv: this.q.getDocumentVersion(b),
							});
					}
					y(b, s) {
						const l = d.$k4.fromExtHostTestItem(b, this.root.id, s?.actual),
							y = this.q.getApiFor(b);
						y.parent &&
							y.parent !== s?.actual &&
							this.q.getChildren(y.parent).delete(b.id);
						let $ = this.tree.get(l.toString());
						if (!$) {
							($ = {
								fullId: l,
								actual: b,
								expandLevels: s?.expandLevels ? s.expandLevels - 1 : void 0,
								expand: C.TestItemExpandState.NotExpandable,
							}),
								b.tags.forEach(this.C, this),
								this.tree.set($.fullId.toString(), $),
								this.G(b, s),
								this.pushDiff({
									op: C.TestDiffOpType.Add,
									item: {
										controllerId: this.q.controllerId,
										expand: $.expand,
										item: this.q.toITestItem(b),
									},
								}),
								this.I(b, $, s);
							return;
						}
						if ($.actual === b) {
							this.H(b, $, s);
							return;
						}
						if ($.actual.uri?.toString() !== b.uri?.toString())
							return this.O(l.toString()), this.y(b, s);
						const v = this.q.getChildren($.actual),
							S = $.actual,
							I = h(this.q.toITestItem(S), this.q.toITestItem(b));
						(this.q.getApiFor(S).listener = void 0),
							($.actual = b),
							($.resolveBarrier = void 0),
							($.expand = C.TestItemExpandState.NotExpandable),
							I &&
								(I.hasOwnProperty("tags") &&
									(this.z(b.tags, S.tags, l.toString()), delete I.tags),
								this.s($, { op: m.SetProp, update: I })),
							this.I(b, $, s);
						for (const [P, k] of v)
							this.q.getChildren(b).get(k.id) ||
								this.O(d.$k4.joinToString(l, k.id));
						const T = $.expandLevels;
						T !== void 0 &&
							queueMicrotask(() => {
								$.expand === C.TestItemExpandState.Expandable &&
									(($.expandLevels = void 0), this.expand(l.toString(), T));
							}),
							this.w($.actual.uri);
					}
					z(b, s, l) {
						const y = new Set(s.map(($) => $.id));
						for (const $ of b) y.delete($.id) || this.C($);
						this.pushDiff({
							op: C.TestDiffOpType.Update,
							item: {
								extId: l,
								item: {
									tags: b.map(($) => (0, C.$p4)(this.q.controllerId, $.id)),
								},
							},
						}),
							y.forEach(this.F, this);
					}
					C(b) {
						const s = this.j.get(b.id);
						s
							? s.refCount++
							: (this.j.set(b.id, { refCount: 1 }),
								this.pushDiff({
									op: C.TestDiffOpType.AddTag,
									tag: { id: (0, C.$p4)(this.q.controllerId, b.id) },
								}));
					}
					F(b) {
						const s = this.j.get(b);
						s &&
							!--s.refCount &&
							(this.j.delete(b),
							this.pushDiff({
								op: C.TestDiffOpType.RemoveTag,
								id: (0, C.$p4)(this.q.controllerId, b),
							}));
					}
					G(b, s) {
						this.q.getApiFor(b).parent =
							s && s.actual !== this.root ? s.actual : void 0;
					}
					H(b, s, l) {
						this.G(b, l);
						const y = this.q.getApiFor(b);
						(y.parent = l?.actual),
							(y.listener = ($) => this.s(s, $)),
							this.J(s);
					}
					I(b, s, l) {
						this.H(b, s, l);
						for (const [y, $] of this.q.getChildren(b)) this.y($, s);
					}
					J(b) {
						let s;
						this.h
							? b.resolveBarrier
								? (s = b.resolveBarrier.isOpen()
										? C.TestItemExpandState.Expanded
										: C.TestItemExpandState.BusyExpanding)
								: (s = b.actual.canResolveChildren
										? C.TestItemExpandState.Expandable
										: C.TestItemExpandState.NotExpandable)
							: (s = C.TestItemExpandState.NotExpandable),
							s !== b.expand &&
								((b.expand = s),
								this.pushDiff({
									op: C.TestDiffOpType.Update,
									item: { extId: b.fullId.toString(), expand: s },
								}),
								s === C.TestItemExpandState.Expandable &&
									b.expandLevels !== void 0 &&
									this.M(b));
					}
					L(b, s) {
						if (s < 0) return;
						const l = [];
						for (const [y, $] of this.q.getChildren(b.actual)) {
							const v = this.expand(d.$k4.joinToString(b.fullId, $.id), s);
							(0, t.$yh)(v) && l.push(v);
						}
						if (l.length) return Promise.all(l).then(() => {});
					}
					M(b) {
						if (b.resolveBarrier) return b.resolveBarrier;
						if (!this.h) {
							const $ = new t.$Lh();
							return $.open(), $;
						}
						(b.expand = C.TestItemExpandState.BusyExpanding), this.N(b);
						const s = (b.resolveBarrier = new t.$Lh()),
							l = ($) => {
								console.error(
									`Unhandled error in resolveHandler of test controller "${this.q.controllerId}"`,
									$,
								);
							};
						let y;
						try {
							y = this.h(b.actual === this.root ? void 0 : b.actual);
						} catch ($) {
							l($);
						}
						return (
							(0, t.$yh)(y)
								? y.catch(l).then(() => {
										s.open(), this.J(b);
									})
								: (s.open(), this.J(b)),
							b.resolveBarrier
						);
					}
					N(b) {
						this.pushDiff({
							op: C.TestDiffOpType.Update,
							item: { extId: b.fullId.toString(), expand: b.expand },
						});
					}
					O(b) {
						const s = this.tree.get(b);
						if (!s) throw new Error("attempting to remove non-existent child");
						this.pushDiff({ op: C.TestDiffOpType.Remove, itemId: b });
						const l = [s];
						for (; l.length; ) {
							const y = l.pop();
							if (y) {
								this.q.getApiFor(y.actual).listener = void 0;
								for (const $ of y.actual.tags) this.F($.id);
								this.tree.delete(y.fullId.toString());
								for (const [$, v] of this.q.getChildren(y.actual))
									l.push(this.tree.get(d.$k4.joinToString(y.fullId, v.id)));
							}
						}
					}
					flushDiff() {
						const b = this.collectDiff();
						b.length && this.g.fire(b);
					}
				}
				e.$_8 = c;
				class n extends Error {
					constructor(b) {
						super(`Attempted to insert a duplicate test item ID ${b}`);
					}
				}
				e.$a9 = n;
				class g extends Error {
					constructor(b) {
						super(
							`TestItem with ID "${b}" is invalid. Make sure to create it from the createTestItem method.`,
						);
					}
				}
				e.$b9 = g;
				class p extends Error {
					constructor(b, s, l) {
						super(
							`TestItem with ID "${b}" is from controller "${s}" and cannot be added as a child of an item from controller "${l}".`,
						);
					}
				}
				e.$c9 = p;
				const o = (f, b, s) => {
					let l = new Map();
					return {
						get size() {
							return l.size;
						},
						forEach(y, $) {
							for (const v of l.values()) y.call($, v, this);
						},
						[Symbol.iterator]() {
							return l.entries();
						},
						replace(y) {
							const $ = new Map(),
								v = new Set(l.keys()),
								S = { op: m.Bulk, ops: [] };
							for (const I of y) {
								if (!(I instanceof s)) throw new g(I.id);
								const T = b(I).controllerId;
								if (T !== f.controllerId) throw new p(I.id, T, f.controllerId);
								if ($.has(I.id)) throw new n(I.id);
								$.set(I.id, I),
									v.delete(I.id),
									S.ops.push({ op: m.Upsert, item: I });
							}
							for (const I of v.keys())
								S.ops.push({ op: m.RemoveChild, id: I });
							f.listener?.(S), (l = $);
						},
						add(y) {
							if (!(y instanceof s)) throw new g(y.id);
							l.set(y.id, y), f.listener?.({ op: m.Upsert, item: y });
						},
						delete(y) {
							l.delete(y) && f.listener?.({ op: m.RemoveChild, id: y });
						},
						get(y) {
							return l.get(y);
						},
						toJSON() {
							return Array.from(l.values());
						},
					};
				};
				e.$d9 = o;
			},
		),
		