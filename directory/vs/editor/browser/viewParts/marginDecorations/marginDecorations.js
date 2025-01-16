define(de[2757], he([1, 0, 1191, 2271]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$wvb = void 0);
			class i extends t.$rvb {
				constructor(E) {
					super(), (this.g = E), (this.j = null), this.g.addEventHandler(this);
				}
				dispose() {
					this.g.removeEventHandler(this), (this.j = null), super.dispose();
				}
				onConfigurationChanged(E) {
					return !0;
				}
				onDecorationsChanged(E) {
					return !0;
				}
				onFlushed(E) {
					return !0;
				}
				onLinesChanged(E) {
					return !0;
				}
				onLinesDeleted(E) {
					return !0;
				}
				onLinesInserted(E) {
					return !0;
				}
				onScrollChanged(E) {
					return E.scrollTopChanged;
				}
				onZonesChanged(E) {
					return !0;
				}
				m(E) {
					const C = E.getDecorationsInViewport(),
						d = [];
					let m = 0;
					for (let r = 0, u = C.length; r < u; r++) {
						const a = C[r],
							h = a.options.marginClassName,
							c = a.options.zIndex;
						h &&
							(d[m++] = new t.$ovb(
								a.range.startLineNumber,
								a.range.endLineNumber,
								h,
								null,
								c,
							));
					}
					return d;
				}
				prepareRender(E) {
					const C = E.visibleRange.startLineNumber,
						d = E.visibleRange.endLineNumber,
						m = this.c(C, d, this.m(E)),
						r = [];
					for (let u = C; u <= d; u++) {
						const a = u - C,
							h = m[a].getDecorations();
						let c = "";
						for (const n of h)
							c += '<div class="cmdr ' + n.className + '" style=""></div>';
						r[a] = c;
					}
					this.j = r;
				}
				render(E, C) {
					return this.j ? this.j[C - E] : "";
				}
			}
			e.$wvb = i;
		}),
		define(
			de[2758],
			he([1, 0, 7, 50, 14, 3, 12, 26, 56, 38, 64, 4]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Yxb = void 0);
				class h extends E.$1c {
					get visibility() {
						return this.b;
					}
					set visibility(n) {
						this.b !== n &&
							((this.b = n),
							(this.a.style.visibility = n ? "visible" : "hidden"));
					}
					constructor(n, g, p, o, f, b, s, l, y) {
						super(),
							(this.c = n),
							(this.f = g),
							(this.g = p),
							(this.h = o),
							(this.j = f),
							(this.m = b),
							(this.n = s),
							(this.q = l),
							(this.r = y),
							(this.b = !1),
							(this.f.style.zIndex = "10"),
							(this.a = document.createElement("div")),
							(this.a.className =
								d.ThemeIcon.asClassName(w.$ak.lightBulb) + " lightbulb-glyph"),
							(this.a.style.position = "absolute");
						const $ = this.g.getOption(r.EditorOption.lineHeight);
						(this.a.style.right = "0px"),
							(this.a.style.visibility = "hidden"),
							(this.a.style.height = `${$}px`),
							(this.a.style.lineHeight = `${$}px`),
							this.f.appendChild(this.a);
						let v = 0;
						const S = p.getOption(r.EditorOption.useShadowDOM) && !C.$u,
							I = (T, P) => {
								this.q.showContextMenu({
									domForShadowRoot: S ? (p.getDomNode() ?? void 0) : void 0,
									getAnchor: () => ({ x: T, y: P }),
									getActions: () => {
										const k = [],
											L = o.modified.isEmpty;
										return (
											k.push(
												new i.$rj(
													"diff.clipboard.copyDeletedContent",
													L
														? o.original.length > 1
															? (0, a.localize)(218, null)
															: (0, a.localize)(219, null)
														: o.original.length > 1
															? (0, a.localize)(220, null)
															: (0, a.localize)(221, null),
													void 0,
													!0,
													async () => {
														const M = this.n.getValueInRange(
															o.original.toExclusiveRange(),
														);
														await this.r.writeText(M);
													},
												),
											),
											o.original.length > 1 &&
												k.push(
													new i.$rj(
														"diff.clipboard.copyDeletedLineContent",
														L
															? (0, a.localize)(
																	222,
																	null,
																	o.original.startLineNumber + v,
																)
															: (0, a.localize)(
																	223,
																	null,
																	o.original.startLineNumber + v,
																),
														void 0,
														!0,
														async () => {
															let M = this.n.getLineContent(
																o.original.startLineNumber + v,
															);
															M === "" &&
																(M =
																	this.n.getEndOfLineSequence() ===
																	u.EndOfLineSequence.LF
																		? `
`
																		: `\r
`),
																await this.r.writeText(M);
														},
													),
												),
											p.getOption(r.EditorOption.readOnly) ||
												k.push(
													new i.$rj(
														"diff.inline.revertChange",
														(0, a.localize)(224, null),
														void 0,
														!0,
														async () => {
															this.j.revert(this.h);
														},
													),
												),
											k
										);
									},
									autoSelectFirstItem: !0,
								});
							};
						this.D(
							(0, t.$$fb)(this.a, "mousedown", (T) => {
								if (!T.leftButton) return;
								const { top: P, height: k } = (0, t.$tgb)(this.a),
									L = Math.floor($ / 3);
								T.preventDefault(), I(T.posx, P + k + L);
							}),
						),
							this.D(
								p.onMouseMove((T) => {
									(T.target.type === m.MouseTargetType.CONTENT_VIEW_ZONE ||
										T.target.type === m.MouseTargetType.GUTTER_VIEW_ZONE) &&
									T.target.detail.viewZoneId === this.c()
										? ((v = this.s(this.f, T.event.browserEvent.y, $)),
											(this.visibility = !0))
										: (this.visibility = !1);
								}),
							),
							this.D(
								p.onMouseDown((T) => {
									T.event.leftButton &&
										(T.target.type === m.MouseTargetType.CONTENT_VIEW_ZONE ||
											T.target.type === m.MouseTargetType.GUTTER_VIEW_ZONE) &&
										T.target.detail.viewZoneId === this.c() &&
										(T.event.preventDefault(),
										(v = this.s(this.f, T.event.browserEvent.y, $)),
										I(T.event.posx, T.event.posy + $));
								}),
							);
					}
					s(n, g, p) {
						const { top: o } = (0, t.$tgb)(n),
							f = g - o,
							b = Math.floor(f / p),
							s = b * p;
						if (((this.a.style.top = `${s}px`), this.m)) {
							let l = 0;
							for (let y = 0; y < this.m.length; y++)
								if (((l += this.m[y]), b < l)) return y;
						}
						return b;
					}
				}
				e.$Yxb = h;
			},
		),
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
		define(
			de[1192],
			he([1, 0, 37, 210, 435, 48, 17, 1528, 346, 64]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Dtb = e.$Ctb = void 0),
					(t = mt(t));
				class u {
					constructor(c, n, g) {
						(this._cursorPositionBrand = void 0),
							(this.lineNumber = c),
							(this.column = n),
							(this.leftoverVisibleColumns = g);
					}
				}
				e.$Ctb = u;
				class a {
					static leftPosition(c, n) {
						if (n.column > c.getLineMinColumn(n.lineNumber))
							return n.delta(
								void 0,
								-t.$Xf(c.getLineContent(n.lineNumber), n.column - 1),
							);
						if (n.lineNumber > 1) {
							const g = n.lineNumber - 1;
							return new E.$hL(g, c.getLineMaxColumn(g));
						} else return n;
					}
					static a(c, n, g) {
						if (n.column <= c.getLineIndentColumn(n.lineNumber)) {
							const p = c.getLineMinColumn(n.lineNumber),
								o = c.getLineContent(n.lineNumber),
								f = d.$Btb.atomicPosition(o, n.column - 1, g, d.Direction.Left);
							if (f !== -1 && f + 1 >= p) return new E.$hL(n.lineNumber, f + 1);
						}
						return this.leftPosition(c, n);
					}
					static b(c, n, g) {
						const p = c.stickyTabStops
							? a.a(n, g, c.tabSize)
							: a.leftPosition(n, g);
						return new u(p.lineNumber, p.column, 0);
					}
					static moveLeft(c, n, g, p, o) {
						let f, b;
						if (g.hasSelection() && !p)
							(f = g.selection.startLineNumber), (b = g.selection.startColumn);
						else {
							const s = g.position.delta(void 0, -(o - 1)),
								l = n.normalizePosition(a.c(s, n), r.PositionAffinity.Left),
								y = a.b(c, n, l);
							(f = y.lineNumber), (b = y.column);
						}
						return g.move(p, f, b, 0);
					}
					static c(c, n) {
						return new E.$hL(
							c.lineNumber,
							a.d(
								c.column,
								n.getLineMinColumn(c.lineNumber),
								n.getLineMaxColumn(c.lineNumber),
							),
						);
					}
					static d(c, n, g) {
						return c < n ? n : c > g ? g : c;
					}
					static rightPosition(c, n, g) {
						return (
							g < c.getLineMaxColumn(n)
								? (g = g + t.$Wf(c.getLineContent(n), g - 1))
								: n < c.getLineCount() &&
									((n = n + 1), (g = c.getLineMinColumn(n))),
							new E.$hL(n, g)
						);
					}
					static rightPositionAtomicSoftTabs(c, n, g, p, o) {
						if (g < c.getLineIndentColumn(n)) {
							const f = c.getLineContent(n),
								b = d.$Btb.atomicPosition(f, g - 1, p, d.Direction.Right);
							if (b !== -1) return new E.$hL(n, b + 1);
						}
						return this.rightPosition(c, n, g);
					}
					static right(c, n, g) {
						const p = c.stickyTabStops
							? a.rightPositionAtomicSoftTabs(
									n,
									g.lineNumber,
									g.column,
									c.tabSize,
									c.indentSize,
								)
							: a.rightPosition(n, g.lineNumber, g.column);
						return new u(p.lineNumber, p.column, 0);
					}
					static moveRight(c, n, g, p, o) {
						let f, b;
						if (g.hasSelection() && !p)
							(f = g.selection.endLineNumber), (b = g.selection.endColumn);
						else {
							const s = g.position.delta(void 0, o - 1),
								l = n.normalizePosition(a.c(s, n), r.PositionAffinity.Right),
								y = a.right(c, n, l);
							(f = y.lineNumber), (b = y.column);
						}
						return g.move(p, f, b, 0);
					}
					static vertical(c, n, g, p, o, f, b, s) {
						const l =
								w.$BM.visibleColumnFromColumn(
									n.getLineContent(g),
									p,
									c.tabSize,
								) + o,
							y = n.getLineCount(),
							$ = g === 1 && p === 1,
							v = g === y && p === n.getLineMaxColumn(g),
							S = f < g ? $ : v;
						if (
							((g = f),
							g < 1
								? ((g = 1),
									b
										? (p = n.getLineMinColumn(g))
										: (p = Math.min(n.getLineMaxColumn(g), p)))
								: g > y
									? ((g = y),
										b
											? (p = n.getLineMaxColumn(g))
											: (p = Math.min(n.getLineMaxColumn(g), p)))
									: (p = c.columnFromVisibleColumn(n, g, l)),
							S
								? (o = 0)
								: (o =
										l -
										w.$BM.visibleColumnFromColumn(
											n.getLineContent(g),
											p,
											c.tabSize,
										)),
							s !== void 0)
						) {
							const I = new E.$hL(g, p),
								T = n.normalizePosition(I, s);
							(o = o + (p - T.column)), (g = T.lineNumber), (p = T.column);
						}
						return new u(g, p, o);
					}
					static down(c, n, g, p, o, f, b) {
						return this.vertical(
							c,
							n,
							g,
							p,
							o,
							g + f,
							b,
							r.PositionAffinity.RightOfInjectedText,
						);
					}
					static moveDown(c, n, g, p, o) {
						let f, b;
						g.hasSelection() && !p
							? ((f = g.selection.endLineNumber), (b = g.selection.endColumn))
							: ((f = g.position.lineNumber), (b = g.position.column));
						let s = 0,
							l;
						do
							if (
								((l = a.down(c, n, f + s, b, g.leftoverVisibleColumns, o, !0)),
								n.normalizePosition(
									new E.$hL(l.lineNumber, l.column),
									r.PositionAffinity.None,
								).lineNumber > f)
							)
								break;
						while (s++ < 10 && f + s < n.getLineCount());
						return g.move(p, l.lineNumber, l.column, l.leftoverVisibleColumns);
					}
					static translateDown(c, n, g) {
						const p = g.selection,
							o = a.down(
								c,
								n,
								p.selectionStartLineNumber,
								p.selectionStartColumn,
								g.selectionStartLeftoverVisibleColumns,
								1,
								!1,
							),
							f = a.down(
								c,
								n,
								p.positionLineNumber,
								p.positionColumn,
								g.leftoverVisibleColumns,
								1,
								!1,
							);
						return new m.$Bsb(
							new C.$iL(o.lineNumber, o.column, o.lineNumber, o.column),
							m.SelectionStartKind.Simple,
							o.leftoverVisibleColumns,
							new E.$hL(f.lineNumber, f.column),
							f.leftoverVisibleColumns,
						);
					}
					static up(c, n, g, p, o, f, b) {
						return this.vertical(
							c,
							n,
							g,
							p,
							o,
							g - f,
							b,
							r.PositionAffinity.LeftOfInjectedText,
						);
					}
					static moveUp(c, n, g, p, o) {
						let f, b;
						g.hasSelection() && !p
							? ((f = g.selection.startLineNumber),
								(b = g.selection.startColumn))
							: ((f = g.position.lineNumber), (b = g.position.column));
						const s = a.up(c, n, f, b, g.leftoverVisibleColumns, o, !0);
						return g.move(p, s.lineNumber, s.column, s.leftoverVisibleColumns);
					}
					static translateUp(c, n, g) {
						const p = g.selection,
							o = a.up(
								c,
								n,
								p.selectionStartLineNumber,
								p.selectionStartColumn,
								g.selectionStartLeftoverVisibleColumns,
								1,
								!1,
							),
							f = a.up(
								c,
								n,
								p.positionLineNumber,
								p.positionColumn,
								g.leftoverVisibleColumns,
								1,
								!1,
							);
						return new m.$Bsb(
							new C.$iL(o.lineNumber, o.column, o.lineNumber, o.column),
							m.SelectionStartKind.Simple,
							o.leftoverVisibleColumns,
							new E.$hL(f.lineNumber, f.column),
							f.leftoverVisibleColumns,
						);
					}
					static e(c, n) {
						return c.getLineFirstNonWhitespaceColumn(n) === 0;
					}
					static moveToPrevBlankLine(c, n, g, p) {
						let o = g.position.lineNumber;
						for (; o > 1 && this.e(n, o); ) o--;
						for (; o > 1 && !this.e(n, o); ) o--;
						return g.move(p, o, n.getLineMinColumn(o), 0);
					}
					static moveToNextBlankLine(c, n, g, p) {
						const o = n.getLineCount();
						let f = g.position.lineNumber;
						for (; f < o && this.e(n, f); ) f++;
						for (; f < o && !this.e(n, f); ) f++;
						return g.move(p, f, n.getLineMinColumn(f), 0);
					}
					static moveToBeginningOfLine(c, n, g, p) {
						const o = g.position.lineNumber,
							f = n.getLineMinColumn(o),
							b = n.getLineFirstNonWhitespaceColumn(o) || f;
						let s;
						return (
							g.position.column === b ? (s = f) : (s = b), g.move(p, o, s, 0)
						);
					}
					static moveToEndOfLine(c, n, g, p, o) {
						const f = g.position.lineNumber,
							b = n.getLineMaxColumn(f);
						return g.move(
							p,
							f,
							b,
							o ? i.Constants.MAX_SAFE_SMALL_INTEGER - b : 0,
						);
					}
					static moveToBeginningOfBuffer(c, n, g, p) {
						return g.move(p, 1, 1, 0);
					}
					static moveToEndOfBuffer(c, n, g, p) {
						const o = n.getLineCount(),
							f = n.getLineMaxColumn(o);
						return g.move(p, o, f, 0);
					}
				}
				e.$Dtb = a;
			},
		),
		define(
			de[943],
			he([1, 0, 37, 655, 346, 435, 1192, 17, 48]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Etb = void 0),
					(t = mt(t));
				class r {
					static deleteRight(a, h, c, n) {
						const g = [];
						let p = a !== w.EditOperationType.DeletingRight;
						for (let o = 0, f = n.length; o < f; o++) {
							const b = n[o];
							let s = b;
							if (s.isEmpty()) {
								const l = b.getPosition(),
									y = C.$Dtb.right(h, c, l);
								s = new d.$iL(y.lineNumber, y.column, l.lineNumber, l.column);
							}
							if (s.isEmpty()) {
								g[o] = null;
								continue;
							}
							s.startLineNumber !== s.endLineNumber && (p = !0),
								(g[o] = new i.$wtb(s, ""));
						}
						return [p, g];
					}
					static isAutoClosingPairDelete(a, h, c, n, g, p, o) {
						if ((h === "never" && c === "never") || a === "never") return !1;
						for (let f = 0, b = p.length; f < b; f++) {
							const s = p[f],
								l = s.getPosition();
							if (!s.isEmpty()) return !1;
							const y = g.getLineContent(l.lineNumber);
							if (l.column < 2 || l.column >= y.length + 1) return !1;
							const $ = y.charAt(l.column - 2),
								v = n.get($);
							if (!v) return !1;
							if ((0, w.$Dsb)($)) {
								if (c === "never") return !1;
							} else if (h === "never") return !1;
							const S = y.charAt(l.column - 1);
							let I = !1;
							for (const T of v) T.open === $ && T.close === S && (I = !0);
							if (!I) return !1;
							if (a === "auto") {
								let T = !1;
								for (let P = 0, k = o.length; P < k; P++) {
									const L = o[P];
									if (
										l.lineNumber === L.startLineNumber &&
										l.column === L.startColumn
									) {
										T = !0;
										break;
									}
								}
								if (!T) return !1;
							}
						}
						return !0;
					}
					static c(a, h, c) {
						const n = [];
						for (let g = 0, p = c.length; g < p; g++) {
							const o = c[g].getPosition(),
								f = new d.$iL(
									o.lineNumber,
									o.column - 1,
									o.lineNumber,
									o.column + 1,
								);
							n[g] = new i.$wtb(f, "");
						}
						return [!0, n];
					}
					static deleteLeft(a, h, c, n, g) {
						if (
							this.isAutoClosingPairDelete(
								h.autoClosingDelete,
								h.autoClosingBrackets,
								h.autoClosingQuotes,
								h.autoClosingPairs.autoClosingPairsOpenByEnd,
								c,
								n,
								g,
							)
						)
							return this.c(h, c, n);
						const p = [];
						let o = a !== w.EditOperationType.DeletingLeft;
						for (let f = 0, b = n.length; f < b; f++) {
							const s = r.d(n[f], c, h);
							if (s.isEmpty()) {
								p[f] = null;
								continue;
							}
							s.startLineNumber !== s.endLineNumber && (o = !0),
								(p[f] = new i.$wtb(s, ""));
						}
						return [o, p];
					}
					static d(a, h, c) {
						if (!a.isEmpty()) return a;
						const n = a.getPosition();
						if (c.useTabStops && n.column > 1) {
							const g = h.getLineContent(n.lineNumber),
								p = t.$Bf(g),
								o = p === -1 ? g.length + 1 : p + 1;
							if (n.column <= o) {
								const f = c.visibleColumnFromColumn(h, n),
									b = E.$BM.prevIndentTabStop(f, c.indentSize),
									s = c.columnFromVisibleColumn(h, n.lineNumber, b);
								return new d.$iL(n.lineNumber, s, n.lineNumber, n.column);
							}
						}
						return d.$iL.fromPositions(r.e(n, h), n);
					}
					static e(a, h) {
						if (a.column > 1) {
							const c = t.$hg(a.column - 1, h.getLineContent(a.lineNumber));
							return a.with(void 0, c + 1);
						} else if (a.lineNumber > 1) {
							const c = a.lineNumber - 1;
							return new m.$hL(c, h.getLineMaxColumn(c));
						} else return a;
					}
					static cut(a, h, c) {
						const n = [];
						let g = null;
						c.sort((p, o) =>
							m.$hL.compare(p.getStartPosition(), o.getEndPosition()),
						);
						for (let p = 0, o = c.length; p < o; p++) {
							const f = c[p];
							if (f.isEmpty())
								if (a.emptySelectionClipboard) {
									const b = f.getPosition();
									let s, l, y, $;
									b.lineNumber < h.getLineCount()
										? ((s = b.lineNumber),
											(l = 1),
											(y = b.lineNumber + 1),
											($ = 1))
										: b.lineNumber > 1 && g?.endLineNumber !== b.lineNumber
											? ((s = b.lineNumber - 1),
												(l = h.getLineMaxColumn(b.lineNumber - 1)),
												(y = b.lineNumber),
												($ = h.getLineMaxColumn(b.lineNumber)))
											: ((s = b.lineNumber),
												(l = 1),
												(y = b.lineNumber),
												($ = h.getLineMaxColumn(b.lineNumber)));
									const v = new d.$iL(s, l, y, $);
									(g = v),
										v.isEmpty() ? (n[p] = null) : (n[p] = new i.$wtb(v, ""));
								} else n[p] = null;
							else n[p] = new i.$wtb(f, "");
						}
						return new w.$Csb(w.EditOperationType.Other, n, {
							shouldPushStackElementBefore: !0,
							shouldPushStackElementAfter: !0,
						});
					}
				}
				e.$Etb = r;
			},
		),
		define(
			de[944],
			he([1, 0, 120, 37, 346, 943, 747, 48, 17]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Gtb = e.$Ftb = e.WordNavigationType = void 0),
					(i = mt(i));
				var r;
				(function (n) {
					(n[(n.None = 0)] = "None"),
						(n[(n.Regular = 1)] = "Regular"),
						(n[(n.Separator = 2)] = "Separator");
				})(r || (r = {}));
				var u;
				(function (n) {
					(n[(n.WordStart = 0)] = "WordStart"),
						(n[(n.WordStartFast = 1)] = "WordStartFast"),
						(n[(n.WordEnd = 2)] = "WordEnd"),
						(n[(n.WordAccessibility = 3)] = "WordAccessibility");
				})(u || (e.WordNavigationType = u = {}));
				class a {
					static a(g, p, o, f, b) {
						return { start: f, end: b, wordType: p, nextCharClass: o };
					}
					static b(g, p) {
						return {
							start: g.index,
							end: g.index + g.segment.length,
							wordType: r.Regular,
							nextCharClass: p,
						};
					}
					static c(g, p, o) {
						const f = p.getLineContent(o.lineNumber);
						return this.d(f, g, o);
					}
					static d(g, p, o) {
						let f = r.None;
						const b = p.findPrevIntlWordBeforeOrAtOffset(g, o.column - 2);
						for (let s = o.column - 2; s >= 0; s--) {
							const l = g.charCodeAt(s),
								y = p.get(l);
							if (b && s === b.index) return this.b(b, y);
							if (y === C.WordCharacterClass.Regular) {
								if (f === r.Separator)
									return this.a(g, f, y, s + 1, this.e(g, p, f, s + 1));
								f = r.Regular;
							} else if (y === C.WordCharacterClass.WordSeparator) {
								if (f === r.Regular)
									return this.a(g, f, y, s + 1, this.e(g, p, f, s + 1));
								f = r.Separator;
							} else if (y === C.WordCharacterClass.Whitespace && f !== r.None)
								return this.a(g, f, y, s + 1, this.e(g, p, f, s + 1));
						}
						return f !== r.None
							? this.a(
									g,
									f,
									C.WordCharacterClass.Whitespace,
									0,
									this.e(g, p, f, 0),
								)
							: null;
					}
					static e(g, p, o, f) {
						const b = p.findNextIntlWordAtOrAfterOffset(g, f),
							s = g.length;
						for (let l = f; l < s; l++) {
							const y = g.charCodeAt(l),
								$ = p.get(y);
							if (
								(b && l === b.index + b.segment.length) ||
								$ === C.WordCharacterClass.Whitespace ||
								(o === r.Regular && $ === C.WordCharacterClass.WordSeparator) ||
								(o === r.Separator && $ === C.WordCharacterClass.Regular)
							)
								return l;
						}
						return s;
					}
					static f(g, p, o) {
						const f = p.getLineContent(o.lineNumber);
						return this.g(f, g, o);
					}
					static g(g, p, o) {
						let f = r.None;
						const b = g.length,
							s = p.findNextIntlWordAtOrAfterOffset(g, o.column - 1);
						for (let l = o.column - 1; l < b; l++) {
							const y = g.charCodeAt(l),
								$ = p.get(y);
							if (s && l === s.index) return this.b(s, $);
							if ($ === C.WordCharacterClass.Regular) {
								if (f === r.Separator)
									return this.a(g, f, $, this.h(g, p, f, l - 1), l);
								f = r.Regular;
							} else if ($ === C.WordCharacterClass.WordSeparator) {
								if (f === r.Regular)
									return this.a(g, f, $, this.h(g, p, f, l - 1), l);
								f = r.Separator;
							} else if ($ === C.WordCharacterClass.Whitespace && f !== r.None)
								return this.a(g, f, $, this.h(g, p, f, l - 1), l);
						}
						return f !== r.None
							? this.a(
									g,
									f,
									C.WordCharacterClass.Whitespace,
									this.h(g, p, f, b - 1),
									b,
								)
							: null;
					}
					static h(g, p, o, f) {
						const b = p.findPrevIntlWordBeforeOrAtOffset(g, f);
						for (let s = f; s >= 0; s--) {
							const l = g.charCodeAt(s),
								y = p.get(l);
							if (b && s === b.index) return s;
							if (
								y === C.WordCharacterClass.Whitespace ||
								(o === r.Regular && y === C.WordCharacterClass.WordSeparator) ||
								(o === r.Separator && y === C.WordCharacterClass.Regular)
							)
								return s + 1;
						}
						return 0;
					}
					static moveWordLeft(g, p, o, f, b) {
						let s = o.lineNumber,
							l = o.column;
						l === 1 && s > 1 && ((s = s - 1), (l = p.getLineMaxColumn(s)));
						let y = a.c(g, p, new d.$hL(s, l));
						if (f === u.WordStart) return new d.$hL(s, y ? y.start + 1 : 1);
						if (f === u.WordStartFast)
							return (
								!b &&
									y &&
									y.wordType === r.Separator &&
									y.end - y.start === 1 &&
									y.nextCharClass === C.WordCharacterClass.Regular &&
									(y = a.c(g, p, new d.$hL(s, y.start + 1))),
								new d.$hL(s, y ? y.start + 1 : 1)
							);
						if (f === u.WordAccessibility) {
							for (; y && y.wordType === r.Separator; )
								y = a.c(g, p, new d.$hL(s, y.start + 1));
							return new d.$hL(s, y ? y.start + 1 : 1);
						}
						return (
							y && l <= y.end + 1 && (y = a.c(g, p, new d.$hL(s, y.start + 1))),
							new d.$hL(s, y ? y.end + 1 : 1)
						);
					}
					static _moveWordPartLeft(g, p) {
						const o = p.lineNumber,
							f = g.getLineMaxColumn(o);
						if (p.column === 1)
							return o > 1 ? new d.$hL(o - 1, g.getLineMaxColumn(o - 1)) : p;
						const b = g.getLineContent(o);
						for (let s = p.column - 1; s > 1; s--) {
							const l = b.charCodeAt(s - 2),
								y = b.charCodeAt(s - 1);
							if (l === t.CharCode.Underline && y !== t.CharCode.Underline)
								return new d.$hL(o, s);
							if (l === t.CharCode.Dash && y !== t.CharCode.Dash)
								return new d.$hL(o, s);
							if ((i.$Kf(l) || i.$Jf(l)) && i.$Lf(y)) return new d.$hL(o, s);
							if (i.$Lf(l) && i.$Lf(y) && s + 1 < f) {
								const $ = b.charCodeAt(s);
								if (i.$Kf($) || i.$Jf($)) return new d.$hL(o, s);
							}
						}
						return new d.$hL(o, 1);
					}
					static moveWordRight(g, p, o, f) {
						let b = o.lineNumber,
							s = o.column,
							l = !1;
						s === p.getLineMaxColumn(b) &&
							b < p.getLineCount() &&
							((l = !0), (b = b + 1), (s = 1));
						let y = a.f(g, p, new d.$hL(b, s));
						if (f === u.WordEnd)
							y &&
								y.wordType === r.Separator &&
								y.end - y.start === 1 &&
								y.nextCharClass === C.WordCharacterClass.Regular &&
								(y = a.f(g, p, new d.$hL(b, y.end + 1))),
								y ? (s = y.end + 1) : (s = p.getLineMaxColumn(b));
						else if (f === u.WordAccessibility) {
							for (
								l && (s = 0);
								y && (y.wordType === r.Separator || y.start + 1 <= s);
							)
								y = a.f(g, p, new d.$hL(b, y.end + 1));
							y ? (s = y.start + 1) : (s = p.getLineMaxColumn(b));
						} else
							y &&
								!l &&
								s >= y.start + 1 &&
								(y = a.f(g, p, new d.$hL(b, y.end + 1))),
								y ? (s = y.start + 1) : (s = p.getLineMaxColumn(b));
						return new d.$hL(b, s);
					}
					static _moveWordPartRight(g, p) {
						const o = p.lineNumber,
							f = g.getLineMaxColumn(o);
						if (p.column === f)
							return o < g.getLineCount() ? new d.$hL(o + 1, 1) : p;
						const b = g.getLineContent(o);
						for (let s = p.column + 1; s < f; s++) {
							const l = b.charCodeAt(s - 2),
								y = b.charCodeAt(s - 1);
							if (l !== t.CharCode.Underline && y === t.CharCode.Underline)
								return new d.$hL(o, s);
							if (l !== t.CharCode.Dash && y === t.CharCode.Dash)
								return new d.$hL(o, s);
							if ((i.$Kf(l) || i.$Jf(l)) && i.$Lf(y)) return new d.$hL(o, s);
							if (i.$Lf(l) && i.$Lf(y) && s + 1 < f) {
								const $ = b.charCodeAt(s);
								if (i.$Kf($) || i.$Jf($)) return new d.$hL(o, s);
							}
						}
						return new d.$hL(o, f);
					}
					static i(g, p) {
						const o = g.getLineContent(p.lineNumber),
							f = p.column - 2,
							b = i.$Df(o, f);
						return b + 1 < f
							? new m.$iL(p.lineNumber, b + 2, p.lineNumber, p.column)
							: null;
					}
					static deleteWordLeft(g, p) {
						const o = g.wordSeparators,
							f = g.model,
							b = g.selection,
							s = g.whitespaceHeuristics;
						if (!b.isEmpty()) return b;
						if (
							E.$Etb.isAutoClosingPairDelete(
								g.autoClosingDelete,
								g.autoClosingBrackets,
								g.autoClosingQuotes,
								g.autoClosingPairs.autoClosingPairsOpenByEnd,
								g.model,
								[g.selection],
								g.autoClosedCharacters,
							)
						) {
							const S = g.selection.getPosition();
							return new m.$iL(
								S.lineNumber,
								S.column - 1,
								S.lineNumber,
								S.column + 1,
							);
						}
						const l = new d.$hL(b.positionLineNumber, b.positionColumn);
						let y = l.lineNumber,
							$ = l.column;
						if (y === 1 && $ === 1) return null;
						if (s) {
							const S = this.i(f, l);
							if (S) return S;
						}
						let v = a.c(o, f, l);
						return (
							p === u.WordStart
								? v
									? ($ = v.start + 1)
									: $ > 1
										? ($ = 1)
										: (y--, ($ = f.getLineMaxColumn(y)))
								: (v &&
										$ <= v.end + 1 &&
										(v = a.c(o, f, new d.$hL(y, v.start + 1))),
									v
										? ($ = v.end + 1)
										: $ > 1
											? ($ = 1)
											: (y--, ($ = f.getLineMaxColumn(y)))),
							new m.$iL(y, $, l.lineNumber, l.column)
						);
					}
					static deleteInsideWord(g, p, o) {
						if (!o.isEmpty()) return o;
						const f = new d.$hL(o.positionLineNumber, o.positionColumn),
							b = this.k(p, f);
						return b || this.l(g, p, f);
					}
					static j(g, p) {
						const o = g.charCodeAt(p);
						return o === t.CharCode.Space || o === t.CharCode.Tab;
					}
					static k(g, p) {
						const o = g.getLineContent(p.lineNumber),
							f = o.length;
						if (f === 0) return null;
						let b = Math.max(p.column - 2, 0);
						if (!this.j(o, b)) return null;
						let s = Math.min(p.column - 1, f - 1);
						if (!this.j(o, s)) return null;
						for (; b > 0 && this.j(o, b - 1); ) b--;
						for (; s + 1 < f && this.j(o, s + 1); ) s++;
						return new m.$iL(p.lineNumber, b + 1, p.lineNumber, s + 2);
					}
					static l(g, p, o) {
						const f = p.getLineContent(o.lineNumber),
							b = f.length;
						if (b === 0)
							return o.lineNumber > 1
								? new m.$iL(
										o.lineNumber - 1,
										p.getLineMaxColumn(o.lineNumber - 1),
										o.lineNumber,
										1,
									)
								: o.lineNumber < p.getLineCount()
									? new m.$iL(o.lineNumber, 1, o.lineNumber + 1, 1)
									: new m.$iL(o.lineNumber, 1, o.lineNumber, 1);
						const s = (S) => S.start + 1 <= o.column && o.column <= S.end + 1,
							l = (S, I) => (
								(S = Math.min(S, o.column)),
								(I = Math.max(I, o.column)),
								new m.$iL(o.lineNumber, S, o.lineNumber, I)
							),
							y = (S) => {
								let I = S.start + 1,
									T = S.end + 1,
									P = !1;
								for (; T - 1 < b && this.j(f, T - 1); ) (P = !0), T++;
								if (!P) for (; I > 1 && this.j(f, I - 2); ) I--;
								return l(I, T);
							},
							$ = a.c(g, p, o);
						if ($ && s($)) return y($);
						const v = a.f(g, p, o);
						return v && s(v)
							? y(v)
							: $ && v
								? l($.end + 1, v.start + 1)
								: $
									? l($.start + 1, $.end + 1)
									: v
										? l(v.start + 1, v.end + 1)
										: l(1, b + 1);
					}
					static _deleteWordPartLeft(g, p) {
						if (!p.isEmpty()) return p;
						const o = p.getPosition(),
							f = a._moveWordPartLeft(g, o);
						return new m.$iL(o.lineNumber, o.column, f.lineNumber, f.column);
					}
					static m(g, p) {
						const o = g.length;
						for (let f = p; f < o; f++) {
							const b = g.charAt(f);
							if (b !== " " && b !== "	") return f;
						}
						return o;
					}
					static n(g, p) {
						const o = g.getLineContent(p.lineNumber),
							f = p.column - 1,
							b = this.m(o, f);
						return f + 1 < b
							? new m.$iL(p.lineNumber, p.column, p.lineNumber, b + 1)
							: null;
					}
					static deleteWordRight(g, p) {
						const o = g.wordSeparators,
							f = g.model,
							b = g.selection,
							s = g.whitespaceHeuristics;
						if (!b.isEmpty()) return b;
						const l = new d.$hL(b.positionLineNumber, b.positionColumn);
						let y = l.lineNumber,
							$ = l.column;
						const v = f.getLineCount(),
							S = f.getLineMaxColumn(y);
						if (y === v && $ === S) return null;
						if (s) {
							const T = this.n(f, l);
							if (T) return T;
						}
						let I = a.f(o, f, l);
						return (
							p === u.WordEnd
								? I
									? ($ = I.end + 1)
									: $ < S || y === v
										? ($ = S)
										: (y++,
											(I = a.f(o, f, new d.$hL(y, 1))),
											I ? ($ = I.start + 1) : ($ = f.getLineMaxColumn(y)))
								: (I &&
										$ >= I.start + 1 &&
										(I = a.f(o, f, new d.$hL(y, I.end + 1))),
									I
										? ($ = I.start + 1)
										: $ < S || y === v
											? ($ = S)
											: (y++,
												(I = a.f(o, f, new d.$hL(y, 1))),
												I ? ($ = I.start + 1) : ($ = f.getLineMaxColumn(y)))),
							new m.$iL(y, $, l.lineNumber, l.column)
						);
					}
					static _deleteWordPartRight(g, p) {
						if (!p.isEmpty()) return p;
						const o = p.getPosition(),
							f = a._moveWordPartRight(g, o);
						return new m.$iL(o.lineNumber, o.column, f.lineNumber, f.column);
					}
					static o(g, p, o) {
						const f = new m.$iL(p, o.start + 1, p, o.end + 1);
						return {
							word: g.getValueInRange(f),
							startColumn: f.startColumn,
							endColumn: f.endColumn,
						};
					}
					static getWordAtPosition(g, p, o, f) {
						const b = (0, C.$QL)(p, o),
							s = a.c(b, g, f);
						if (
							s &&
							s.wordType === r.Regular &&
							s.start <= f.column - 1 &&
							f.column - 1 <= s.end
						)
							return a.o(g, f.lineNumber, s);
						const l = a.f(b, g, f);
						return l &&
							l.wordType === r.Regular &&
							l.start <= f.column - 1 &&
							f.column - 1 <= l.end
							? a.o(g, f.lineNumber, l)
							: null;
					}
					static word(g, p, o, f, b) {
						const s = (0, C.$QL)(g.wordSeparators, g.wordSegmenterLocales),
							l = a.c(s, p, b),
							y = a.f(s, p, b);
						if (!f) {
							let T, P;
							return (
								l &&
								l.wordType === r.Regular &&
								l.start <= b.column - 1 &&
								b.column - 1 <= l.end
									? ((T = l.start + 1), (P = l.end + 1))
									: y &&
											y.wordType === r.Regular &&
											y.start <= b.column - 1 &&
											b.column - 1 <= y.end
										? ((T = y.start + 1), (P = y.end + 1))
										: (l ? (T = l.end + 1) : (T = 1),
											y
												? (P = y.start + 1)
												: (P = p.getLineMaxColumn(b.lineNumber))),
								new w.$Bsb(
									new m.$iL(b.lineNumber, T, b.lineNumber, P),
									w.SelectionStartKind.Word,
									0,
									new d.$hL(b.lineNumber, P),
									0,
								)
							);
						}
						let $, v;
						l &&
						l.wordType === r.Regular &&
						l.start < b.column - 1 &&
						b.column - 1 < l.end
							? (($ = l.start + 1), (v = l.end + 1))
							: y &&
									y.wordType === r.Regular &&
									y.start < b.column - 1 &&
									b.column - 1 < y.end
								? (($ = y.start + 1), (v = y.end + 1))
								: (($ = b.column), (v = b.column));
						const S = b.lineNumber;
						let I;
						if (o.selectionStart.containsPosition(b))
							I = o.selectionStart.endColumn;
						else if (b.isBeforeOrEqual(o.selectionStart.getStartPosition())) {
							I = $;
							const T = new d.$hL(S, I);
							o.selectionStart.containsPosition(T) &&
								(I = o.selectionStart.endColumn);
						} else {
							I = v;
							const T = new d.$hL(S, I);
							o.selectionStart.containsPosition(T) &&
								(I = o.selectionStart.startColumn);
						}
						return o.move(!0, S, I, 0);
					}
				}
				e.$Ftb = a;
				class h extends a {
					static deleteWordPartLeft(g) {
						const p = c([
							a.deleteWordLeft(g, u.WordStart),
							a.deleteWordLeft(g, u.WordEnd),
							a._deleteWordPartLeft(g.model, g.selection),
						]);
						return p.sort(m.$iL.compareRangesUsingEnds), p[2];
					}
					static deleteWordPartRight(g) {
						const p = c([
							a.deleteWordRight(g, u.WordStart),
							a.deleteWordRight(g, u.WordEnd),
							a._deleteWordPartRight(g.model, g.selection),
						]);
						return p.sort(m.$iL.compareRangesUsingStarts), p[0];
					}
					static moveWordPartLeft(g, p, o, f) {
						const b = c([
							a.moveWordLeft(g, p, o, u.WordStart, f),
							a.moveWordLeft(g, p, o, u.WordEnd, f),
							a._moveWordPartLeft(p, o),
						]);
						return b.sort(d.$hL.compare), b[2];
					}
					static moveWordPartRight(g, p, o) {
						const f = c([
							a.moveWordRight(g, p, o, u.WordStart),
							a.moveWordRight(g, p, o, u.WordEnd),
							a._moveWordPartRight(p, o),
						]);
						return f.sort(d.$hL.compare), f[0];
					}
				}
				e.$Gtb = h;
				function c(n) {
					return n.filter((g) => !!g);
				}
			},
		),
		define(
			de[1193],
			he([1, 0, 28, 346, 1192, 944, 48, 17]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.CursorMove = e.$Htb = void 0),
					(t = mt(t));
				class m {
					static addCursorDown(a, h, c) {
						const n = [];
						let g = 0;
						for (let p = 0, o = h.length; p < o; p++) {
							const f = h[p];
							(n[g++] = new i.$ysb(f.modelState, f.viewState)),
								c
									? (n[g++] = i.$ysb.fromModelState(
											w.$Dtb.translateDown(
												a.cursorConfig,
												a.model,
												f.modelState,
											),
										))
									: (n[g++] = i.$ysb.fromViewState(
											w.$Dtb.translateDown(a.cursorConfig, a, f.viewState),
										));
						}
						return n;
					}
					static addCursorUp(a, h, c) {
						const n = [];
						let g = 0;
						for (let p = 0, o = h.length; p < o; p++) {
							const f = h[p];
							(n[g++] = new i.$ysb(f.modelState, f.viewState)),
								c
									? (n[g++] = i.$ysb.fromModelState(
											w.$Dtb.translateUp(a.cursorConfig, a.model, f.modelState),
										))
									: (n[g++] = i.$ysb.fromViewState(
											w.$Dtb.translateUp(a.cursorConfig, a, f.viewState),
										));
						}
						return n;
					}
					static moveToBeginningOfLine(a, h, c) {
						const n = [];
						for (let g = 0, p = h.length; g < p; g++) {
							const o = h[g];
							n[g] = this.a(a, o, c);
						}
						return n;
					}
					static a(a, h, c) {
						const n = h.viewState.position.column,
							g = h.modelState.position.column,
							p = n === g,
							o = h.viewState.position.lineNumber,
							f = a.getLineFirstNonWhitespaceColumn(o);
						return !p && !(n === f) ? this.b(a, h, c) : this.c(a, h, c);
					}
					static b(a, h, c) {
						return i.$ysb.fromViewState(
							w.$Dtb.moveToBeginningOfLine(a.cursorConfig, a, h.viewState, c),
						);
					}
					static c(a, h, c) {
						return i.$ysb.fromModelState(
							w.$Dtb.moveToBeginningOfLine(
								a.cursorConfig,
								a.model,
								h.modelState,
								c,
							),
						);
					}
					static moveToEndOfLine(a, h, c, n) {
						const g = [];
						for (let p = 0, o = h.length; p < o; p++) {
							const f = h[p];
							g[p] = this.d(a, f, c, n);
						}
						return g;
					}
					static d(a, h, c, n) {
						const g = h.viewState.position,
							p = a.getLineMaxColumn(g.lineNumber),
							o = g.column === p,
							f = h.modelState.position,
							b = a.model.getLineMaxColumn(f.lineNumber),
							s = p - g.column === b - f.column;
						return o || s ? this.f(a, h, c, n) : this.e(a, h, c, n);
					}
					static e(a, h, c, n) {
						return i.$ysb.fromViewState(
							w.$Dtb.moveToEndOfLine(a.cursorConfig, a, h.viewState, c, n),
						);
					}
					static f(a, h, c, n) {
						return i.$ysb.fromModelState(
							w.$Dtb.moveToEndOfLine(
								a.cursorConfig,
								a.model,
								h.modelState,
								c,
								n,
							),
						);
					}
					static expandLineSelection(a, h) {
						const c = [];
						for (let n = 0, g = h.length; n < g; n++) {
							const p = h[n],
								o = p.modelState.selection.startLineNumber,
								f = a.model.getLineCount();
							let b = p.modelState.selection.endLineNumber,
								s;
							b === f ? (s = a.model.getLineMaxColumn(f)) : (b++, (s = 1)),
								(c[n] = i.$ysb.fromModelState(
									new i.$Bsb(
										new d.$iL(o, 1, o, 1),
										i.SelectionStartKind.Simple,
										0,
										new C.$hL(b, s),
										0,
									),
								));
						}
						return c;
					}
					static moveToBeginningOfBuffer(a, h, c) {
						const n = [];
						for (let g = 0, p = h.length; g < p; g++) {
							const o = h[g];
							n[g] = i.$ysb.fromModelState(
								w.$Dtb.moveToBeginningOfBuffer(
									a.cursorConfig,
									a.model,
									o.modelState,
									c,
								),
							);
						}
						return n;
					}
					static moveToEndOfBuffer(a, h, c) {
						const n = [];
						for (let g = 0, p = h.length; g < p; g++) {
							const o = h[g];
							n[g] = i.$ysb.fromModelState(
								w.$Dtb.moveToEndOfBuffer(
									a.cursorConfig,
									a.model,
									o.modelState,
									c,
								),
							);
						}
						return n;
					}
					static selectAll(a, h) {
						const c = a.model.getLineCount(),
							n = a.model.getLineMaxColumn(c);
						return i.$ysb.fromModelState(
							new i.$Bsb(
								new d.$iL(1, 1, 1, 1),
								i.SelectionStartKind.Simple,
								0,
								new C.$hL(c, n),
								0,
							),
						);
					}
					static line(a, h, c, n, g) {
						const p = a.model.validatePosition(n),
							o = g
								? a.coordinatesConverter.validateViewPosition(
										new C.$hL(g.lineNumber, g.column),
										p,
									)
								: a.coordinatesConverter.convertModelPositionToViewPosition(p);
						if (!c) {
							const b = a.model.getLineCount();
							let s = p.lineNumber + 1,
								l = 1;
							return (
								s > b && ((s = b), (l = a.model.getLineMaxColumn(s))),
								i.$ysb.fromModelState(
									new i.$Bsb(
										new d.$iL(p.lineNumber, 1, s, l),
										i.SelectionStartKind.Line,
										0,
										new C.$hL(s, l),
										0,
									),
								)
							);
						}
						const f = h.modelState.selectionStart.getStartPosition().lineNumber;
						if (p.lineNumber < f)
							return i.$ysb.fromViewState(
								h.viewState.move(!0, o.lineNumber, 1, 0),
							);
						if (p.lineNumber > f) {
							const b = a.getLineCount();
							let s = o.lineNumber + 1,
								l = 1;
							return (
								s > b && ((s = b), (l = a.getLineMaxColumn(s))),
								i.$ysb.fromViewState(h.viewState.move(!0, s, l, 0))
							);
						} else {
							const b = h.modelState.selectionStart.getEndPosition();
							return i.$ysb.fromModelState(
								h.modelState.move(!0, b.lineNumber, b.column, 0),
							);
						}
					}
					static word(a, h, c, n) {
						const g = a.model.validatePosition(n);
						return i.$ysb.fromModelState(
							E.$Ftb.word(a.cursorConfig, a.model, h.modelState, c, g),
						);
					}
					static cancelSelection(a, h) {
						if (!h.modelState.hasSelection())
							return new i.$ysb(h.modelState, h.viewState);
						const c = h.viewState.position.lineNumber,
							n = h.viewState.position.column;
						return i.$ysb.fromViewState(
							new i.$Bsb(
								new d.$iL(c, n, c, n),
								i.SelectionStartKind.Simple,
								0,
								new C.$hL(c, n),
								0,
							),
						);
					}
					static moveTo(a, h, c, n, g) {
						if (c) {
							if (h.modelState.selectionStartKind === i.SelectionStartKind.Word)
								return this.word(a, h, c, n);
							if (h.modelState.selectionStartKind === i.SelectionStartKind.Line)
								return this.line(a, h, c, n, g);
						}
						const p = a.model.validatePosition(n),
							o = g
								? a.coordinatesConverter.validateViewPosition(
										new C.$hL(g.lineNumber, g.column),
										p,
									)
								: a.coordinatesConverter.convertModelPositionToViewPosition(p);
						return i.$ysb.fromViewState(
							h.viewState.move(c, o.lineNumber, o.column, 0),
						);
					}
					static simpleMove(a, h, c, n, g, p) {
						switch (c) {
							case r.Direction.Left:
								return p === r.Unit.HalfLine
									? this.k(a, h, n)
									: this.j(a, h, n, g);
							case r.Direction.Right:
								return p === r.Unit.HalfLine
									? this.m(a, h, n)
									: this.l(a, h, n, g);
							case r.Direction.Up:
								return p === r.Unit.WrappedLine
									? this.p(a, h, n, g)
									: this.q(a, h, n, g);
							case r.Direction.Down:
								return p === r.Unit.WrappedLine
									? this.n(a, h, n, g)
									: this.o(a, h, n, g);
							case r.Direction.PrevBlankLine:
								return p === r.Unit.WrappedLine
									? h.map((o) =>
											i.$ysb.fromViewState(
												w.$Dtb.moveToPrevBlankLine(
													a.cursorConfig,
													a,
													o.viewState,
													n,
												),
											),
										)
									: h.map((o) =>
											i.$ysb.fromModelState(
												w.$Dtb.moveToPrevBlankLine(
													a.cursorConfig,
													a.model,
													o.modelState,
													n,
												),
											),
										);
							case r.Direction.NextBlankLine:
								return p === r.Unit.WrappedLine
									? h.map((o) =>
											i.$ysb.fromViewState(
												w.$Dtb.moveToNextBlankLine(
													a.cursorConfig,
													a,
													o.viewState,
													n,
												),
											),
										)
									: h.map((o) =>
											i.$ysb.fromModelState(
												w.$Dtb.moveToNextBlankLine(
													a.cursorConfig,
													a.model,
													o.modelState,
													n,
												),
											),
										);
							case r.Direction.WrappedLineStart:
								return this.t(a, h, n);
							case r.Direction.WrappedLineFirstNonWhitespaceCharacter:
								return this.u(a, h, n);
							case r.Direction.WrappedLineColumnCenter:
								return this.v(a, h, n);
							case r.Direction.WrappedLineEnd:
								return this.w(a, h, n);
							case r.Direction.WrappedLineLastNonWhitespaceCharacter:
								return this.x(a, h, n);
							default:
								return null;
						}
					}
					static viewportMove(a, h, c, n, g) {
						const p = a.getCompletelyVisibleViewRange(),
							o = a.coordinatesConverter.convertViewRangeToModelRange(p);
						switch (c) {
							case r.Direction.ViewPortTop: {
								const f = this.g(a.model, o, g),
									b = a.model.getLineFirstNonWhitespaceColumn(f);
								return [this.s(a, h[0], n, f, b)];
							}
							case r.Direction.ViewPortBottom: {
								const f = this.h(a.model, o, g),
									b = a.model.getLineFirstNonWhitespaceColumn(f);
								return [this.s(a, h[0], n, f, b)];
							}
							case r.Direction.ViewPortCenter: {
								const f = Math.round((o.startLineNumber + o.endLineNumber) / 2),
									b = a.model.getLineFirstNonWhitespaceColumn(f);
								return [this.s(a, h[0], n, f, b)];
							}
							case r.Direction.ViewPortIfOutside: {
								const f = [];
								for (let b = 0, s = h.length; b < s; b++) {
									const l = h[b];
									f[b] = this.findPositionInViewportIfOutside(a, l, p, n);
								}
								return f;
							}
							default:
								return null;
						}
					}
					static findPositionInViewportIfOutside(a, h, c, n) {
						const g = h.viewState.position.lineNumber;
						if (c.startLineNumber <= g && g <= c.endLineNumber - 1)
							return new i.$ysb(h.modelState, h.viewState);
						{
							let p;
							g > c.endLineNumber - 1
								? (p = c.endLineNumber - 1)
								: g < c.startLineNumber
									? (p = c.startLineNumber)
									: (p = g);
							const o = w.$Dtb.vertical(
								a.cursorConfig,
								a,
								g,
								h.viewState.position.column,
								h.viewState.leftoverVisibleColumns,
								p,
								!1,
							);
							return i.$ysb.fromViewState(
								h.viewState.move(
									n,
									o.lineNumber,
									o.column,
									o.leftoverVisibleColumns,
								),
							);
						}
					}
					static g(a, h, c) {
						let n = h.startLineNumber;
						return (
							h.startColumn !== a.getLineMinColumn(n) && n++,
							Math.min(h.endLineNumber, n + c - 1)
						);
					}
					static h(a, h, c) {
						let n = h.startLineNumber;
						return (
							h.startColumn !== a.getLineMinColumn(n) && n++,
							Math.max(n, h.endLineNumber - c + 1)
						);
					}
					static j(a, h, c, n) {
						return h.map((g) =>
							i.$ysb.fromViewState(
								w.$Dtb.moveLeft(a.cursorConfig, a, g.viewState, c, n),
							),
						);
					}
					static k(a, h, c) {
						const n = [];
						for (let g = 0, p = h.length; g < p; g++) {
							const o = h[g],
								f = o.viewState.position.lineNumber,
								b = Math.round(a.getLineLength(f) / 2);
							n[g] = i.$ysb.fromViewState(
								w.$Dtb.moveLeft(a.cursorConfig, a, o.viewState, c, b),
							);
						}
						return n;
					}
					static l(a, h, c, n) {
						return h.map((g) =>
							i.$ysb.fromViewState(
								w.$Dtb.moveRight(a.cursorConfig, a, g.viewState, c, n),
							),
						);
					}
					static m(a, h, c) {
						const n = [];
						for (let g = 0, p = h.length; g < p; g++) {
							const o = h[g],
								f = o.viewState.position.lineNumber,
								b = Math.round(a.getLineLength(f) / 2);
							n[g] = i.$ysb.fromViewState(
								w.$Dtb.moveRight(a.cursorConfig, a, o.viewState, c, b),
							);
						}
						return n;
					}
					static n(a, h, c, n) {
						const g = [];
						for (let p = 0, o = h.length; p < o; p++) {
							const f = h[p];
							g[p] = i.$ysb.fromViewState(
								w.$Dtb.moveDown(a.cursorConfig, a, f.viewState, c, n),
							);
						}
						return g;
					}
					static o(a, h, c, n) {
						const g = [];
						for (let p = 0, o = h.length; p < o; p++) {
							const f = h[p];
							g[p] = i.$ysb.fromModelState(
								w.$Dtb.moveDown(a.cursorConfig, a.model, f.modelState, c, n),
							);
						}
						return g;
					}
					static p(a, h, c, n) {
						const g = [];
						for (let p = 0, o = h.length; p < o; p++) {
							const f = h[p];
							g[p] = i.$ysb.fromViewState(
								w.$Dtb.moveUp(a.cursorConfig, a, f.viewState, c, n),
							);
						}
						return g;
					}
					static q(a, h, c, n) {
						const g = [];
						for (let p = 0, o = h.length; p < o; p++) {
							const f = h[p];
							g[p] = i.$ysb.fromModelState(
								w.$Dtb.moveUp(a.cursorConfig, a.model, f.modelState, c, n),
							);
						}
						return g;
					}
					static r(a, h, c, n, g) {
						return i.$ysb.fromViewState(h.viewState.move(c, n, g, 0));
					}
					static s(a, h, c, n, g) {
						return i.$ysb.fromModelState(h.modelState.move(c, n, g, 0));
					}
					static t(a, h, c) {
						const n = [];
						for (let g = 0, p = h.length; g < p; g++) {
							const o = h[g],
								f = o.viewState.position.lineNumber,
								b = a.getLineMinColumn(f);
							n[g] = this.r(a, o, c, f, b);
						}
						return n;
					}
					static u(a, h, c) {
						const n = [];
						for (let g = 0, p = h.length; g < p; g++) {
							const o = h[g],
								f = o.viewState.position.lineNumber,
								b = a.getLineFirstNonWhitespaceColumn(f);
							n[g] = this.r(a, o, c, f, b);
						}
						return n;
					}
					static v(a, h, c) {
						const n = [];
						for (let g = 0, p = h.length; g < p; g++) {
							const o = h[g],
								f = o.viewState.position.lineNumber,
								b = Math.round(
									(a.getLineMaxColumn(f) + a.getLineMinColumn(f)) / 2,
								);
							n[g] = this.r(a, o, c, f, b);
						}
						return n;
					}
					static w(a, h, c) {
						const n = [];
						for (let g = 0, p = h.length; g < p; g++) {
							const o = h[g],
								f = o.viewState.position.lineNumber,
								b = a.getLineMaxColumn(f);
							n[g] = this.r(a, o, c, f, b);
						}
						return n;
					}
					static x(a, h, c) {
						const n = [];
						for (let g = 0, p = h.length; g < p; g++) {
							const o = h[g],
								f = o.viewState.position.lineNumber,
								b = a.getLineLastNonWhitespaceColumn(f);
							n[g] = this.r(a, o, c, f, b);
						}
						return n;
					}
				}
				e.$Htb = m;
				var r;
				(function (u) {
					const a = function (g) {
						if (!t.$ng(g)) return !1;
						const p = g;
						return !(
							!t.$lg(p.to) ||
							(!t.$sg(p.select) && !t.$rg(p.select)) ||
							(!t.$sg(p.by) && !t.$lg(p.by)) ||
							(!t.$sg(p.value) && !t.$pg(p.value))
						);
					};
					(u.metadata = {
						description: "Move cursor to a logical position in the view",
						args: [
							{
								name: "Cursor move argument object",
								description: `Property-value pairs that can be passed through this argument:
					* 'to': A mandatory logical position value providing where to move the cursor.
						\`\`\`
						'left', 'right', 'up', 'down', 'prevBlankLine', 'nextBlankLine',
						'wrappedLineStart', 'wrappedLineEnd', 'wrappedLineColumnCenter'
						'wrappedLineFirstNonWhitespaceCharacter', 'wrappedLineLastNonWhitespaceCharacter'
						'viewPortTop', 'viewPortCenter', 'viewPortBottom', 'viewPortIfOutside'
						\`\`\`
					* 'by': Unit to move. Default is computed based on 'to' value.
						\`\`\`
						'line', 'wrappedLine', 'character', 'halfLine'
						\`\`\`
					* 'value': Number of units to move. Default is '1'.
					* 'select': If 'true' makes the selection. Default is 'false'.
				`,
								constraint: a,
								schema: {
									type: "object",
									required: ["to"],
									properties: {
										to: {
											type: "string",
											enum: [
												"left",
												"right",
												"up",
												"down",
												"prevBlankLine",
												"nextBlankLine",
												"wrappedLineStart",
												"wrappedLineEnd",
												"wrappedLineColumnCenter",
												"wrappedLineFirstNonWhitespaceCharacter",
												"wrappedLineLastNonWhitespaceCharacter",
												"viewPortTop",
												"viewPortCenter",
												"viewPortBottom",
												"viewPortIfOutside",
											],
										},
										by: {
											type: "string",
											enum: ["line", "wrappedLine", "character", "halfLine"],
										},
										value: { type: "number", default: 1 },
										select: { type: "boolean", default: !1 },
									},
								},
							},
						],
					}),
						(u.RawDirection = {
							Left: "left",
							Right: "right",
							Up: "up",
							Down: "down",
							PrevBlankLine: "prevBlankLine",
							NextBlankLine: "nextBlankLine",
							WrappedLineStart: "wrappedLineStart",
							WrappedLineFirstNonWhitespaceCharacter:
								"wrappedLineFirstNonWhitespaceCharacter",
							WrappedLineColumnCenter: "wrappedLineColumnCenter",
							WrappedLineEnd: "wrappedLineEnd",
							WrappedLineLastNonWhitespaceCharacter:
								"wrappedLineLastNonWhitespaceCharacter",
							ViewPortTop: "viewPortTop",
							ViewPortCenter: "viewPortCenter",
							ViewPortBottom: "viewPortBottom",
							ViewPortIfOutside: "viewPortIfOutside",
						}),
						(u.RawUnit = {
							Line: "line",
							WrappedLine: "wrappedLine",
							Character: "character",
							HalfLine: "halfLine",
						});
					function h(g) {
						if (!g.to) return null;
						let p;
						switch (g.to) {
							case u.RawDirection.Left:
								p = c.Left;
								break;
							case u.RawDirection.Right:
								p = c.Right;
								break;
							case u.RawDirection.Up:
								p = c.Up;
								break;
							case u.RawDirection.Down:
								p = c.Down;
								break;
							case u.RawDirection.PrevBlankLine:
								p = c.PrevBlankLine;
								break;
							case u.RawDirection.NextBlankLine:
								p = c.NextBlankLine;
								break;
							case u.RawDirection.WrappedLineStart:
								p = c.WrappedLineStart;
								break;
							case u.RawDirection.WrappedLineFirstNonWhitespaceCharacter:
								p = c.WrappedLineFirstNonWhitespaceCharacter;
								break;
							case u.RawDirection.WrappedLineColumnCenter:
								p = c.WrappedLineColumnCenter;
								break;
							case u.RawDirection.WrappedLineEnd:
								p = c.WrappedLineEnd;
								break;
							case u.RawDirection.WrappedLineLastNonWhitespaceCharacter:
								p = c.WrappedLineLastNonWhitespaceCharacter;
								break;
							case u.RawDirection.ViewPortTop:
								p = c.ViewPortTop;
								break;
							case u.RawDirection.ViewPortBottom:
								p = c.ViewPortBottom;
								break;
							case u.RawDirection.ViewPortCenter:
								p = c.ViewPortCenter;
								break;
							case u.RawDirection.ViewPortIfOutside:
								p = c.ViewPortIfOutside;
								break;
							default:
								return null;
						}
						let o = n.None;
						switch (g.by) {
							case u.RawUnit.Line:
								o = n.Line;
								break;
							case u.RawUnit.WrappedLine:
								o = n.WrappedLine;
								break;
							case u.RawUnit.Character:
								o = n.Character;
								break;
							case u.RawUnit.HalfLine:
								o = n.HalfLine;
								break;
						}
						return {
							direction: p,
							unit: o,
							select: !!g.select,
							value: g.value || 1,
						};
					}
					u.parse = h;
					let c;
					(function (g) {
						(g[(g.Left = 0)] = "Left"),
							(g[(g.Right = 1)] = "Right"),
							(g[(g.Up = 2)] = "Up"),
							(g[(g.Down = 3)] = "Down"),
							(g[(g.PrevBlankLine = 4)] = "PrevBlankLine"),
							(g[(g.NextBlankLine = 5)] = "NextBlankLine"),
							(g[(g.WrappedLineStart = 6)] = "WrappedLineStart"),
							(g[(g.WrappedLineFirstNonWhitespaceCharacter = 7)] =
								"WrappedLineFirstNonWhitespaceCharacter"),
							(g[(g.WrappedLineColumnCenter = 8)] = "WrappedLineColumnCenter"),
							(g[(g.WrappedLineEnd = 9)] = "WrappedLineEnd"),
							(g[(g.WrappedLineLastNonWhitespaceCharacter = 10)] =
								"WrappedLineLastNonWhitespaceCharacter"),
							(g[(g.ViewPortTop = 11)] = "ViewPortTop"),
							(g[(g.ViewPortCenter = 12)] = "ViewPortCenter"),
							(g[(g.ViewPortBottom = 13)] = "ViewPortBottom"),
							(g[(g.ViewPortIfOutside = 14)] = "ViewPortIfOutside");
					})((c = u.Direction || (u.Direction = {})));
					let n;
					(function (g) {
						(g[(g.None = 0)] = "None"),
							(g[(g.Line = 1)] = "Line"),
							(g[(g.WrappedLine = 2)] = "WrappedLine"),
							(g[(g.Character = 3)] = "Character"),
							(g[(g.HalfLine = 4)] = "HalfLine");
					})((n = u.Unit || (u.Unit = {})));
				})(r || (e.CursorMove = r = {}));
			},
		),
		define(
			de[2760],
			he([1, 0, 346, 48, 17, 104, 64]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Uvb = void 0);
				class d {
					constructor(r) {
						(this.a = null),
							(this.b = !0),
							this.g(
								r,
								new t.$Bsb(
									new w.$iL(1, 1, 1, 1),
									t.SelectionStartKind.Simple,
									0,
									new i.$hL(1, 1),
									0,
								),
								new t.$Bsb(
									new w.$iL(1, 1, 1, 1),
									t.SelectionStartKind.Simple,
									0,
									new i.$hL(1, 1),
									0,
								),
							);
					}
					dispose(r) {
						this.d(r);
					}
					startTrackingSelection(r) {
						(this.b = !0), this.c(r);
					}
					stopTrackingSelection(r) {
						(this.b = !1), this.d(r);
					}
					c(r) {
						this.b &&
							(this.a = r.model._setTrackedRange(
								this.a,
								this.modelState.selection,
								C.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
							));
					}
					d(r) {
						this.a = r.model._setTrackedRange(
							this.a,
							null,
							C.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
						);
					}
					asCursorState() {
						return new t.$ysb(this.modelState, this.viewState);
					}
					readSelectionFromMarkers(r) {
						const u = r.model._getTrackedRange(this.a);
						return this.modelState.selection.isEmpty() && !u.isEmpty()
							? E.$kL.fromRange(
									u.collapseToEnd(),
									this.modelState.selection.getDirection(),
								)
							: E.$kL.fromRange(u, this.modelState.selection.getDirection());
					}
					ensureValidState(r) {
						this.g(r, this.modelState, this.viewState);
					}
					setState(r, u, a) {
						this.g(r, u, a);
					}
					static e(r, u, a, h) {
						return u.equals(a)
							? h
							: r.normalizePosition(u, C.PositionAffinity.None);
					}
					static f(r, u) {
						const a = u.position,
							h = u.selectionStart.getStartPosition(),
							c = u.selectionStart.getEndPosition(),
							n = r.normalizePosition(a, C.PositionAffinity.None),
							g = this.e(r, h, a, n),
							p = this.e(r, c, h, g);
						return a.equals(n) && h.equals(g) && c.equals(p)
							? u
							: new t.$Bsb(
									w.$iL.fromPositions(g, p),
									u.selectionStartKind,
									u.selectionStartLeftoverVisibleColumns + h.column - g.column,
									n,
									u.leftoverVisibleColumns + a.column - n.column,
								);
					}
					g(r, u, a) {
						if ((a && (a = d.f(r.viewModel, a)), u)) {
							const h = r.model.validateRange(u.selectionStart),
								c = u.selectionStart.equalsRange(h)
									? u.selectionStartLeftoverVisibleColumns
									: 0,
								n = r.model.validatePosition(u.position),
								g = u.position.equals(n) ? u.leftoverVisibleColumns : 0;
							u = new t.$Bsb(h, u.selectionStartKind, c, n, g);
						} else {
							if (!a) return;
							const h = r.model.validateRange(
									r.coordinatesConverter.convertViewRangeToModelRange(
										a.selectionStart,
									),
								),
								c = r.model.validatePosition(
									r.coordinatesConverter.convertViewPositionToModelPosition(
										a.position,
									),
								);
							u = new t.$Bsb(
								h,
								a.selectionStartKind,
								a.selectionStartLeftoverVisibleColumns,
								c,
								a.leftoverVisibleColumns,
							);
						}
						if (a) {
							const h = r.coordinatesConverter.validateViewRange(
									a.selectionStart,
									u.selectionStart,
								),
								c = r.coordinatesConverter.validateViewPosition(
									a.position,
									u.position,
								);
							a = new t.$Bsb(
								h,
								u.selectionStartKind,
								u.selectionStartLeftoverVisibleColumns,
								c,
								u.leftoverVisibleColumns,
							);
						} else {
							const h =
									r.coordinatesConverter.convertModelPositionToViewPosition(
										new i.$hL(
											u.selectionStart.startLineNumber,
											u.selectionStart.startColumn,
										),
									),
								c = r.coordinatesConverter.convertModelPositionToViewPosition(
									new i.$hL(
										u.selectionStart.endLineNumber,
										u.selectionStart.endColumn,
									),
								),
								n = new w.$iL(h.lineNumber, h.column, c.lineNumber, c.column),
								g = r.coordinatesConverter.convertModelPositionToViewPosition(
									u.position,
								);
							a = new t.$Bsb(
								n,
								u.selectionStartKind,
								u.selectionStartLeftoverVisibleColumns,
								g,
								u.leftoverVisibleColumns,
							);
						}
						(this.modelState = u), (this.viewState = a), this.c(r);
					}
				}
				e.$Uvb = d;
			},
		),
		define(
			de[2761],
			he([1, 0, 24, 214, 346, 2760, 48, 17, 104]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Vvb = void 0);
				class r {
					constructor(a) {
						(this.a = a), (this.b = [new E.$Uvb(a)]), (this.d = 0);
					}
					dispose() {
						for (const a of this.b) a.dispose(this.a);
					}
					startTrackingSelections() {
						for (const a of this.b) a.startTrackingSelection(this.a);
					}
					stopTrackingSelections() {
						for (const a of this.b) a.stopTrackingSelection(this.a);
					}
					updateContext(a) {
						this.a = a;
					}
					ensureValidState() {
						for (const a of this.b) a.ensureValidState(this.a);
					}
					readSelectionFromMarkers() {
						return this.b.map((a) => a.readSelectionFromMarkers(this.a));
					}
					getAll() {
						return this.b.map((a) => a.asCursorState());
					}
					getViewPositions() {
						return this.b.map((a) => a.viewState.position);
					}
					getTopMostViewPosition() {
						return (0, i.$tb)(
							this.b,
							(0, t.$0b)((a) => a.viewState.position, C.$hL.compare),
						).viewState.position;
					}
					getBottomMostViewPosition() {
						return (0, i.$sb)(
							this.b,
							(0, t.$0b)((a) => a.viewState.position, C.$hL.compare),
						).viewState.position;
					}
					getSelections() {
						return this.b.map((a) => a.modelState.selection);
					}
					getViewSelections() {
						return this.b.map((a) => a.viewState.selection);
					}
					setSelections(a) {
						this.setStates(w.$ysb.fromModelSelections(a));
					}
					getPrimaryCursor() {
						return this.b[0].asCursorState();
					}
					setStates(a) {
						a !== null &&
							(this.b[0].setState(this.a, a[0].modelState, a[0].viewState),
							this.e(a.slice(1)));
					}
					e(a) {
						const h = this.b.length - 1,
							c = a.length;
						if (h < c) {
							const n = c - h;
							for (let g = 0; g < n; g++) this.f();
						} else if (h > c) {
							const n = h - c;
							for (let g = 0; g < n; g++) this.g(this.b.length - 2);
						}
						for (let n = 0; n < c; n++)
							this.b[n + 1].setState(this.a, a[n].modelState, a[n].viewState);
					}
					killSecondaryCursors() {
						this.e([]);
					}
					f() {
						this.b.push(new E.$Uvb(this.a)), (this.d = this.b.length - 1);
					}
					getLastAddedCursorIndex() {
						return this.b.length === 1 || this.d === 0 ? 0 : this.d;
					}
					g(a) {
						this.d >= a + 1 && this.d--,
							this.b[a + 1].dispose(this.a),
							this.b.splice(a + 1, 1);
					}
					normalize() {
						if (this.b.length === 1) return;
						const a = this.b.slice(0),
							h = [];
						for (let c = 0, n = a.length; c < n; c++)
							h.push({ index: c, selection: a[c].modelState.selection });
						h.sort(
							(0, t.$0b)((c) => c.selection, d.$iL.compareRangesUsingStarts),
						);
						for (let c = 0; c < h.length - 1; c++) {
							const n = h[c],
								g = h[c + 1],
								p = n.selection,
								o = g.selection;
							if (!this.a.cursorConfig.multiCursorMergeOverlapping) continue;
							let f;
							if (
								(o.isEmpty() || p.isEmpty()
									? (f = o
											.getStartPosition()
											.isBeforeOrEqual(p.getEndPosition()))
									: (f = o.getStartPosition().isBefore(p.getEndPosition())),
								f)
							) {
								const b = n.index < g.index ? c : c + 1,
									s = n.index < g.index ? c + 1 : c,
									l = h[s].index,
									y = h[b].index,
									$ = h[s].selection,
									v = h[b].selection;
								if (!$.equalsSelection(v)) {
									const S = $.plusRange(v),
										I =
											$.selectionStartLineNumber === $.startLineNumber &&
											$.selectionStartColumn === $.startColumn,
										T =
											v.selectionStartLineNumber === v.startLineNumber &&
											v.selectionStartColumn === v.startColumn;
									let P;
									l === this.d ? ((P = I), (this.d = y)) : (P = T);
									let k;
									P
										? (k = new m.$kL(
												S.startLineNumber,
												S.startColumn,
												S.endLineNumber,
												S.endColumn,
											))
										: (k = new m.$kL(
												S.endLineNumber,
												S.endColumn,
												S.startLineNumber,
												S.startColumn,
											)),
										(h[b].selection = k);
									const L = w.$ysb.fromModelSelection(k);
									a[y].setState(this.a, L.modelState, L.viewState);
								}
								for (const S of h) S.index > l && S.index--;
								a.splice(l, 1), h.splice(s, 1), this.g(l - 1), c--;
							}
						}
					}
				}
				e.$Vvb = r;
			},
		),
		