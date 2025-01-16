define(
			de[204],
			he([1, 0, 24, 33, 29, 103, 59, 37, 48, 17, 391, 5, 20, 67, 3, 69]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0Db = e.$9Db = e.$8Db = e.$7Db = e.$6Db = e.$5Db = void 0);
				class p {
					remove() {
						this.parent?.children.delete(this.id);
					}
					static findId(y, $) {
						let v;
						typeof y == "string"
							? (v = `${$.id}/${y}`)
							: ((v = `${$.id}/${y.name}`),
								$.children.get(v) !== void 0 &&
									(v = `${$.id}/${y.name}_${y.range.startLineNumber}_${y.range.startColumn}`));
						let S = v;
						for (let I = 0; $.children.get(S) !== void 0; I++) S = `${v}_${I}`;
						return S;
					}
					static getElementById(y, $) {
						if (!y) return;
						const v = (0, d.$Of)(y, $.id);
						if (v === y.length) return $;
						if (!(v < $.id.length))
							for (const [, S] of $.children) {
								const I = p.getElementById(y, S);
								if (I) return I;
							}
					}
					static size(y) {
						let $ = 1;
						for (const [, v] of y.children) $ += p.size(v);
						return $;
					}
					static empty(y) {
						return y.children.size === 0;
					}
				}
				e.$5Db = p;
				class o extends p {
					constructor(y, $, v) {
						super(),
							(this.id = y),
							(this.parent = $),
							(this.symbol = v),
							(this.children = new Map());
					}
					getAllSymbols(y) {
						const $ = [];
						$.push(this.symbol);
						for (const [, v] of this.children) $.push(...v.getAllSymbols(y));
						return $;
					}
				}
				e.$6Db = o;
				class f extends p {
					constructor(y, $, v, S) {
						super(),
							(this.id = y),
							(this.parent = $),
							(this.label = v),
							(this.order = S),
							(this.children = new Map());
					}
					getAllSymbols(y) {
						const $ = [];
						for (const [, v] of this.children) $.push(...v.getAllSymbols(y));
						return $;
					}
					getItemEnclosingPosition(y, $ = !1) {
						return y ? this.c(y, this.children, $) : void 0;
					}
					c(y, $, v) {
						for (const [, S] of $)
							if (
								!(!S.symbol.range || !r.$iL.containsPosition(S.symbol.range, y))
							)
								return v ? S : this.c(y, S.children, v) || S;
					}
					updateMarker(y) {
						for (const [, $] of this.children) this.d(y, $);
					}
					d(y, $) {
						$.marker = void 0;
						const v = (0, t.$Ab)(
							y,
							$.symbol.range,
							r.$iL.compareRangesUsingStarts,
						);
						let S;
						v < 0
							? ((S = ~v),
								S > 0 &&
									r.$iL.areIntersecting(y[S - 1], $.symbol.range) &&
									(S -= 1))
							: (S = v);
						const I = [];
						let T;
						for (
							;
							S < y.length && r.$iL.areIntersecting($.symbol.range, y[S]);
							S++
						) {
							const P = y[S];
							I.push(P),
								(y[S] = void 0),
								(!T || P.severity > T) && (T = P.severity);
						}
						for (const [, P] of $.children) this.d(I, P);
						T && ($.marker = { count: I.length, topSev: T }), (0, t.$Mb)(y);
					}
				}
				e.$7Db = f;
				class b extends p {
					static create(y, $, v) {
						const S = new i.$Ce(v),
							I = new b($.uri),
							T = y.ordered($),
							P = T.map((L, D) => {
								const M = p.findId(`provider_${D}`, I),
									N = new f(
										M,
										I,
										L.displayName ?? "Unknown Outline Provider",
										D,
									);
								return Promise.resolve(L.provideDocumentSymbols($, S.token))
									.then(
										(A) => {
											for (const R of A || []) b.c(R, N);
											return N;
										},
										(A) => ((0, w.$5)(A), N),
									)
									.then((A) => {
										p.empty(A) ? A.remove() : I.e.set(M, A);
									});
							}),
							k = y.onDidChange(() => {
								const L = y.ordered($);
								(0, t.$yb)(L, T) || S.cancel();
							});
						return Promise.all(P)
							.then(() =>
								S.token.isCancellationRequested && !v.isCancellationRequested
									? b.create(y, $, v)
									: I.f(),
							)
							.finally(() => {
								S.dispose(), k.dispose(), S.dispose();
							});
					}
					static c(y, $) {
						const v = p.findId(y, $),
							S = new o(v, $, y);
						if (y.children) for (const I of y.children) b.c(I, S);
						$.children.set(S.id, S);
					}
					static get(y) {
						for (; y; ) {
							if (y instanceof b) return y;
							y = y.parent;
						}
					}
					constructor(y) {
						super(),
							(this.uri = y),
							(this.id = "root"),
							(this.parent = void 0),
							(this.e = new Map()),
							(this.children = new Map()),
							(this.id = "root"),
							(this.parent = void 0);
					}
					f() {
						let y = 0;
						for (const [$, v] of this.e)
							v.children.size === 0 ? this.e.delete($) : (y += 1);
						if (y !== 1) this.children = this.e;
						else {
							const $ = E.Iterable.first(this.e.values());
							for (const [, v] of $.children)
								(v.parent = this), this.children.set(v.id, v);
						}
						return this;
					}
					merge(y) {
						return this.uri.toString() !== y.uri.toString() ||
							this.e.size !== y.e.size
							? !1
							: ((this.e = y.e), (this.children = y.children), !0);
					}
					getAllSymbols(y) {
						const $ = [];
						for (const [, v] of this.e) $.push(...v.getAllSymbols(y));
						return $;
					}
					getGlobalItemEnclosingPosition(y) {
						let $;
						for (const [, v] of this.e)
							if ((($ = v.getItemEnclosingPosition(y, !0)), $)) break;
						return $;
					}
					getItemEnclosingPosition(y, $) {
						let v;
						if ($) {
							let I = $.parent;
							for (; I && !v; ) I instanceof f && (v = I), (I = I.parent);
						}
						let S;
						for (const [, I] of this.e)
							if (((S = I.getItemEnclosingPosition(y)), S && (!v || v === I)))
								break;
						return S;
					}
					getItemById(y) {
						return p.getElementById(y, this);
					}
					updateMarker(y) {
						y.sort(r.$iL.compareRangesUsingStarts);
						for (const [, $] of this.e) $.updateMarker(y.slice(0));
					}
					getTopLevelSymbols() {
						const y = [];
						for (const $ of this.children.values())
							$ instanceof o
								? y.push($.symbol)
								: y.push(
										...E.Iterable.map($.children.values(), (v) => v.symbol),
									);
						return y.sort(($, v) =>
							r.$iL.compareRangesUsingStarts($.range, v.range),
						);
					}
					asListOfDocumentSymbols() {
						const y = this.getTopLevelSymbols(),
							$ = [];
						return (
							b.g($, y, ""),
							$.sort(
								(v, S) =>
									m.$hL.compare(
										r.$iL.getStartPosition(v.range),
										r.$iL.getStartPosition(S.range),
									) ||
									m.$hL.compare(
										r.$iL.getEndPosition(S.range),
										r.$iL.getEndPosition(v.range),
									),
							)
						);
					}
					static g(y, $, v) {
						for (const S of $)
							y.push({
								kind: S.kind,
								tags: S.tags,
								name: S.name,
								detail: S.detail,
								containerName: S.containerName || v,
								range: S.range,
								selectionRange: S.selectionRange,
								children: void 0,
							}),
								S.children && b.g(y, S.children, S.name);
					}
				}
				(e.$8Db = b), (e.$9Db = (0, a.$Mi)("IOutlineModelService"));
				let s = class {
					constructor(y, $, v) {
						(this.f = y),
							(this.c = new n.$Zc()),
							(this.e = new C.$Jc(10, 0.7)),
							(this.d = $.for(y.documentSymbolProvider, "DocumentSymbols", {
								min: 350,
							})),
							this.c.add(
								v.onModelRemoved((S) => {
									this.e.delete(S.id);
								}),
							);
					}
					dispose() {
						this.c.dispose();
					}
					async getOrCreate(y, $) {
						const v = this.f.documentSymbolProvider,
							S = v.ordered(y);
						let I = this.e.get(y.id);
						if (
							!I ||
							I.versionId !== y.getVersionId() ||
							!(0, t.$yb)(I.provider, S)
						) {
							const P = new i.$Ce();
							(I = {
								versionId: y.getVersionId(),
								provider: S,
								promiseCnt: 0,
								source: P,
								promise: b.create(v, y, P.token),
								model: void 0,
							}),
								this.e.set(y.id, I);
							const k = Date.now();
							I.promise
								.then((L) => {
									(I.model = L), this.d.update(y, Date.now() - k);
								})
								.catch((L) => {
									this.e.delete(y.id);
								});
						}
						if (I.model) return I.model;
						I.promiseCnt += 1;
						const T = $.onCancellationRequested(() => {
							--I.promiseCnt === 0 && (I.source.cancel(), this.e.delete(y.id));
						});
						try {
							return await I.promise;
						} finally {
							T.dispose();
						}
					}
					getDebounceValue(y) {
						return this.d.get(y);
					}
				};
				(e.$0Db = s),
					(e.$0Db = s = Ne([j(0, g.$k3), j(1, u.$PBb), j(2, c.$QO)], s)),
					(0, h.$lK)(e.$9Db, s, h.InstantiationType.Delayed);
			},
		),
		