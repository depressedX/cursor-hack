define(
			de[2759],
			he([1, 0, 7, 182, 14, 3, 77, 196, 17, 342, 64, 4]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1yb = e.$Zyb = void 0);
				const h = [];
				class c extends E.$1c {
					constructor(p, o, f, b) {
						super(),
							(this.a = p),
							(this.b = o),
							(this.f = f),
							(this.g = b),
							(this.j = (0, C.derived)(this, (s) => {
								const y = this.b.read(s)?.diff.read(s);
								if (!y) return h;
								const $ = this.a.modifiedSelections.read(s);
								if ($.every((T) => T.isEmpty())) return h;
								const v = new d.$sL($.map((T) => d.$rL.fromRangeInclusive(T))),
									I = y.mappings
										.filter(
											(T) =>
												T.lineRangeMapping.innerChanges &&
												v.intersects(T.lineRangeMapping.modified),
										)
										.map((T) => ({
											mapping: T,
											rangeMappings: T.lineRangeMapping.innerChanges.filter(
												(P) =>
													$.some((k) =>
														m.$iL.areIntersecting(P.modifiedRange, k),
													),
											),
										}));
								return I.length === 0 ||
									I.every((T) => T.rangeMappings.length === 0)
									? h
									: I;
							})),
							this.D(
								(0, C.autorunWithStore)((s, l) => {
									if (!this.f.shouldRenderOldRevertArrows.read(s)) return;
									const y = this.b.read(s),
										$ = y?.diff.read(s);
									if (!y || !$ || y.movedTextToCompare.read(s)) return;
									const v = [],
										S = this.j.read(s),
										I = new Set(S.map((T) => T.mapping));
									if (S.length > 0) {
										const T = this.a.modifiedSelections.read(s),
											P = l.add(
												new n(
													T[T.length - 1].positionLineNumber,
													this.g,
													S.flatMap((k) => k.rangeMappings),
													!0,
												),
											);
										this.a.modified.addGlyphMarginWidget(P), v.push(P);
									}
									for (const T of $.mappings)
										if (
											!I.has(T) &&
											!T.lineRangeMapping.modified.isEmpty &&
											T.lineRangeMapping.innerChanges
										) {
											const P = l.add(
												new n(
													T.lineRangeMapping.modified.startLineNumber,
													this.g,
													T.lineRangeMapping,
													!1,
												),
											);
											this.a.modified.addGlyphMarginWidget(P), v.push(P);
										}
									l.add(
										(0, E.$Yc)(() => {
											for (const T of v)
												this.a.modified.removeGlyphMarginWidget(T);
										}),
									);
								}),
							);
					}
				}
				e.$Zyb = c;
				class n extends E.$1c {
					static {
						this.counter = 0;
					}
					getId() {
						return this.a;
					}
					constructor(p, o, f, b) {
						super(),
							(this.f = p),
							(this.g = o),
							(this.j = f),
							(this.n = b),
							(this.a = `revertButton${n.counter++}`),
							(this.b = (0, t.h)(
								"div.revertButton",
								{
									title: this.n
										? (0, a.localize)(241, null)
										: (0, a.localize)(242, null),
								},
								[(0, i.$Tib)(w.$ak.arrowRight)],
							).root),
							this.D(
								(0, t.$0fb)(this.b, t.$$gb.MOUSE_DOWN, (s) => {
									s.button !== 2 && (s.stopPropagation(), s.preventDefault());
								}),
							),
							this.D(
								(0, t.$0fb)(this.b, t.$$gb.MOUSE_UP, (s) => {
									s.stopPropagation(), s.preventDefault();
								}),
							),
							this.D(
								(0, t.$0fb)(this.b, t.$$gb.CLICK, (s) => {
									this.j instanceof r.$BL
										? this.g.revert(this.j)
										: this.g.revertRangeMappings(this.j),
										s.stopPropagation(),
										s.preventDefault();
								}),
							);
					}
					getDomNode() {
						return this.b;
					}
					getPosition() {
						return {
							lane: u.GlyphMarginLane.Right,
							range: {
								startColumn: 1,
								startLineNumber: this.f,
								endColumn: 1,
								endLineNumber: this.f,
							},
							zIndex: 10001,
						};
					}
				}
				e.$1yb = n;
			},
		),
		