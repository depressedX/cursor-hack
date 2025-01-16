define(
			de[1688],
			he([1, 0, 17, 64, 122, 51, 35]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$71b = void 0);
				class d {
					constructor(r) {
						(this.a = r),
							(this.b = []),
							(this.c = []),
							(this.d = []),
							(this.e = null),
							(this.f = null),
							(this.g = this.a.getPosition());
					}
					dispose() {
						this.a.removeDecorations(this.j()),
							(this.b = []),
							(this.c = []),
							(this.d = []),
							(this.e = null),
							(this.f = null);
					}
					reset() {
						(this.b = []),
							(this.c = []),
							(this.d = []),
							(this.e = null),
							(this.f = null);
					}
					getCount() {
						return this.b.length;
					}
					getFindScope() {
						return this.d[0]
							? this.a.getModel().getDecorationRange(this.d[0])
							: null;
					}
					getFindScopes() {
						if (this.d.length) {
							const r = this.d
								.map((u) => this.a.getModel().getDecorationRange(u))
								.filter((u) => !!u);
							if (r.length) return r;
						}
						return null;
					}
					getStartPosition() {
						return this.g;
					}
					setStartPosition(r) {
						(this.g = r), this.setCurrentFindMatch(null);
					}
					h(r) {
						const u = this.b.indexOf(r);
						return u >= 0 ? u + 1 : 1;
					}
					getDecorationRangeAt(r) {
						const u = r < this.b.length ? this.b[r] : null;
						return u ? this.a.getModel().getDecorationRange(u) : null;
					}
					getCurrentMatchesPosition(r) {
						const u = this.a.getModel().getDecorationsInRange(r);
						for (const a of u) {
							const h = a.options;
							if (
								h === d._FIND_MATCH_DECORATION ||
								h === d._CURRENT_FIND_MATCH_DECORATION
							)
								return this.h(a.id);
						}
						return 0;
					}
					setCurrentFindMatch(r) {
						let u = null,
							a = 0;
						if (r)
							for (let h = 0, c = this.b.length; h < c; h++) {
								const n = this.a.getModel().getDecorationRange(this.b[h]);
								if (r.equalsRange(n)) {
									(u = this.b[h]), (a = h + 1);
									break;
								}
							}
						return (
							(this.f !== null || u !== null) &&
								this.a.changeDecorations((h) => {
									if (
										(this.f !== null &&
											(h.changeDecorationOptions(
												this.f,
												d._FIND_MATCH_DECORATION,
											),
											(this.f = null)),
										u !== null &&
											((this.f = u),
											h.changeDecorationOptions(
												this.f,
												d._CURRENT_FIND_MATCH_DECORATION,
											)),
										this.e !== null &&
											(h.removeDecoration(this.e), (this.e = null)),
										u !== null)
									) {
										let c = this.a.getModel().getDecorationRange(u);
										if (
											c.startLineNumber !== c.endLineNumber &&
											c.endColumn === 1
										) {
											const n = c.endLineNumber - 1,
												g = this.a.getModel().getLineMaxColumn(n);
											c = new t.$iL(c.startLineNumber, c.startColumn, n, g);
										}
										this.e = h.addDecoration(c, d.l);
									}
								}),
							a
						);
					}
					set(r, u) {
						this.a.changeDecorations((a) => {
							let h = d._FIND_MATCH_DECORATION;
							const c = [];
							if (r.length > 1e3) {
								h = d._FIND_MATCH_NO_OVERVIEW_DECORATION;
								const g = this.a.getModel().getLineCount(),
									o = this.a.getLayoutInfo().height / g,
									f = Math.max(2, Math.ceil(3 / o));
								let b = r[0].range.startLineNumber,
									s = r[0].range.endLineNumber;
								for (let l = 1, y = r.length; l < y; l++) {
									const $ = r[l].range;
									s + f >= $.startLineNumber
										? $.endLineNumber > s && (s = $.endLineNumber)
										: (c.push({ range: new t.$iL(b, 1, s, 1), options: d.k }),
											(b = $.startLineNumber),
											(s = $.endLineNumber));
								}
								c.push({ range: new t.$iL(b, 1, s, 1), options: d.k });
							}
							const n = new Array(r.length);
							for (let g = 0, p = r.length; g < p; g++)
								n[g] = { range: r[g].range, options: h };
							(this.b = a.deltaDecorations(this.b, n)),
								(this.c = a.deltaDecorations(this.c, c)),
								this.e && (a.removeDecoration(this.e), (this.e = null)),
								this.d.length &&
									(this.d.forEach((g) => a.removeDecoration(g)), (this.d = [])),
								u?.length && (this.d = u.map((g) => a.addDecoration(g, d.m)));
						});
					}
					matchBeforePosition(r) {
						if (this.b.length === 0) return null;
						for (let u = this.b.length - 1; u >= 0; u--) {
							const a = this.b[u],
								h = this.a.getModel().getDecorationRange(a);
							if (!(!h || h.endLineNumber > r.lineNumber)) {
								if (h.endLineNumber < r.lineNumber) return h;
								if (!(h.endColumn > r.column)) return h;
							}
						}
						return this.a
							.getModel()
							.getDecorationRange(this.b[this.b.length - 1]);
					}
					matchAfterPosition(r) {
						if (this.b.length === 0) return null;
						for (let u = 0, a = this.b.length; u < a; u++) {
							const h = this.b[u],
								c = this.a.getModel().getDecorationRange(h);
							if (!(!c || c.startLineNumber < r.lineNumber)) {
								if (c.startLineNumber > r.lineNumber) return c;
								if (!(c.startColumn < r.column)) return c;
							}
						}
						return this.a.getModel().getDecorationRange(this.b[0]);
					}
					j() {
						let r = [];
						return (
							(r = r.concat(this.b)),
							(r = r.concat(this.c)),
							this.d.length && r.push(...this.d),
							this.e && r.push(this.e),
							r
						);
					}
					static {
						this._CURRENT_FIND_MATCH_DECORATION = w.$eY.register({
							description: "current-find-match",
							stickiness: i.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							zIndex: 13,
							className: "currentFindMatch",
							inlineClassName: "currentFindMatchInline",
							showIfCollapsed: !0,
							overviewRuler: {
								color: (0, C.$jP)(E.$vR),
								position: i.OverviewRulerLane.Center,
							},
							minimap: {
								color: (0, C.$jP)(E.$AR),
								position: i.MinimapPosition.Inline,
							},
						});
					}
					static {
						this._FIND_MATCH_DECORATION = w.$eY.register({
							description: "find-match",
							stickiness: i.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							zIndex: 10,
							className: "findMatch",
							inlineClassName: "findMatchInline",
							showIfCollapsed: !0,
							overviewRuler: {
								color: (0, C.$jP)(E.$vR),
								position: i.OverviewRulerLane.Center,
							},
							minimap: {
								color: (0, C.$jP)(E.$AR),
								position: i.MinimapPosition.Inline,
							},
						});
					}
					static {
						this._FIND_MATCH_NO_OVERVIEW_DECORATION = w.$eY.register({
							description: "find-match-no-overview",
							stickiness: i.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							className: "findMatch",
							showIfCollapsed: !0,
						});
					}
					static {
						this.k = w.$eY.register({
							description: "find-match-only-overview",
							stickiness: i.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							overviewRuler: {
								color: (0, C.$jP)(E.$vR),
								position: i.OverviewRulerLane.Center,
							},
						});
					}
					static {
						this.l = w.$eY.register({
							description: "find-range-highlight",
							stickiness: i.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							className: "rangeHighlight",
							isWholeLine: !0,
						});
					}
					static {
						this.m = w.$eY.register({
							description: "find-scope",
							className: "findScope",
							isWholeLine: !0,
						});
					}
				}
				e.$71b = d;
			},
		),
		