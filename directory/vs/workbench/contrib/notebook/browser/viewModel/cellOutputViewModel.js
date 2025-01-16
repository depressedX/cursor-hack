define(de[1840], he([1, 0, 6, 3, 77, 70]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$D1b = void 0);
			let C = 0;
			class d extends i.$1c {
				setVisible(r = !0, u = !1) {
					(!r && this.b) ||
						(u && r && (this.b = !0), this.visible.set(r, void 0));
				}
				get model() {
					return this.f;
				}
				get pickedMimeType() {
					return this.c;
				}
				set pickedMimeType(r) {
					this.c = r;
				}
				constructor(r, u, a) {
					super(),
						(this.cellViewModel = r),
						(this.f = u),
						(this.g = a),
						(this.a = this.D(new t.$re())),
						(this.onDidResetRenderer = this.a.event),
						(this.b = !1),
						(this.visible = (0, w.observableValue)("outputVisible", !1)),
						(this.outputHandle = C++);
				}
				hasMultiMimeType() {
					if (this.f.outputs.length < 2) return !1;
					const r = this.f.outputs[0].mime;
					return this.f.outputs.some((u) => u.mime !== r);
				}
				resolveMimeTypes(r, u) {
					const a = this.g.getOutputMimeTypeInfo(r, u, this.model),
						h = a.findIndex((c) => c.rendererId !== E.$X6 && c.isTrusted);
					return [a, Math.max(h, 0)];
				}
				resetRenderer() {
					(this.c = void 0), this.model.bumpVersion(), this.a.fire();
				}
				toRawJSON() {
					return { outputs: this.f.outputs };
				}
			}
			e.$D1b = d;
		}),
		define(
			de[3478],
			he([1, 0, 6, 3, 47, 589, 1840, 161]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$JEc = void 0);
				let m = class extends i.$1c {
					get id() {
						return this.a;
					}
					get outputs() {
						return this.textModel.outputs;
					}
					get language() {
						return this.textModel.language;
					}
					get metadata() {
						return this.textModel.metadata;
					}
					get uri() {
						return this.textModel.uri;
					}
					get handle() {
						return this.textModel.handle;
					}
					get outputIsHovered() {
						return this.c;
					}
					set outputIsHovered(u) {
						(this.c = u), this.b.fire({ outputIsHoveredChanged: !0 });
					}
					get outputIsFocused() {
						return this.f;
					}
					set outputIsFocused(u) {
						(this.f = u), this.b.fire({ outputIsFocusedChanged: !0 });
					}
					get inputInOutputIsFocused() {
						return this.g;
					}
					set inputInOutputIsFocused(u) {
						this.g = u;
					}
					get outputsViewModels() {
						return this.h;
					}
					constructor(u, a) {
						super(),
							(this.textModel = u),
							(this.q = a),
							(this.b = this.D(new t.$re())),
							(this.c = !1),
							(this.f = !1),
							(this.g = !1),
							(this.j = []),
							(this.m = null),
							(this.n = this.D(new t.$re())),
							(this.onDidChangeOutputLayout = this.n.event),
							(this.a = (0, w.$9g)()),
							(this.h = this.textModel.outputs.map(
								(h) => new C.$D1b(this, h, this.q),
							)),
							this.D(
								this.textModel.onDidChangeOutputs((h) => {
									this.j.splice(
										h.start,
										h.deleteCount,
										...h.newOutputs.map(() => 0),
									),
										this.h
											.splice(
												h.start,
												h.deleteCount,
												...h.newOutputs.map((n) => new C.$D1b(this, n, this.q)),
											)
											.forEach((n) => n.dispose()),
										(this.m = null),
										this.n.fire();
								}),
							),
							(this.j = new Array(this.textModel.outputs.length));
					}
					r() {
						if (!this.m) {
							const u = new Uint32Array(this.j.length);
							for (let a = 0; a < this.j.length; a++) u[a] = this.j[a];
							this.m = new E.$WN(u);
						}
					}
					getOutputOffset(u) {
						if ((this.r(), u >= this.j.length))
							throw new Error("Output index out of range!");
						return this.m.getPrefixSum(u - 1);
					}
					updateOutputHeight(u, a) {
						if (u >= this.j.length)
							throw new Error("Output index out of range!");
						this.r(), (this.j[u] = a), this.m.setValue(u, a) && this.n.fire();
					}
					getOutputTotalHeight() {
						return this.r(), this.m?.getTotalSum() ?? 0;
					}
					dispose() {
						super.dispose(),
							this.h.forEach((u) => {
								u.dispose();
							});
					}
				};
				(e.$JEc = m), (e.$JEc = m = Ne([j(1, d.$MIb)], m));
			},
		),
		define(
			de[1841],
			he([1, 0, 267, 6, 3, 434, 64, 659, 660, 70, 442]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3Nb = void 0),
					(e.$4Nb = c),
					(e.$5Nb = n);
				const a = { limit: 5e3, update: () => {} };
				class h {
					get regions() {
						return this.c;
					}
					constructor() {
						(this.a = null),
							(this.b = new w.$Zc()),
							(this.d = new i.$re()),
							(this.onDidFoldingRegionChanged = this.d.event),
							(this.e = []),
							(this.c = new d.$ANb(new Uint32Array(0), new Uint32Array(0)));
					}
					dispose() {
						this.d.dispose(), this.b.dispose();
					}
					detachViewModel() {
						this.b.clear(), (this.a = null);
					}
					attachViewModel(p) {
						(this.a = p),
							this.b.add(
								this.a.onDidChangeViewCells(() => {
									this.recompute();
								}),
							),
							this.b.add(
								this.a.onDidChangeSelection(() => {
									if (!this.a) return;
									const o = (0, u.$j6)(this.a.getSelections());
									let f = !1;
									o.forEach((b) => {
										let s = this.regions.findRange(b + 1);
										for (; s !== -1; )
											this.c.isCollapsed(s) &&
												b > this.c.getStartLineNumber(s) - 1 &&
												(this.c.setCollapsed(s, !1), (f = !0)),
												(s = this.c.getParentIndex(s));
									}),
										f && this.d.fire();
								}),
							),
							this.recompute();
					}
					getRegionAtLine(p) {
						if (this.c) {
							const o = this.c.findRange(p);
							if (o >= 0) return this.c.toRegion(o);
						}
						return null;
					}
					getRegionsInside(p, o) {
						const f = [],
							b = p ? p.regionIndex + 1 : 0,
							s = p ? p.endLineNumber : Number.MAX_VALUE;
						if (o && o.length === 2) {
							const l = [];
							for (let y = b, $ = this.c.length; y < $; y++) {
								const v = this.c.toRegion(y);
								if (this.c.getStartLineNumber(y) < s) {
									for (; l.length > 0 && !v.containedBy(l[l.length - 1]); )
										l.pop();
									l.push(v), o(v, l.length) && f.push(v);
								} else break;
							}
						} else
							for (let l = b, y = this.c.length; l < y; l++) {
								const $ = this.c.toRegion(l);
								if (this.c.getStartLineNumber(l) < s) (!o || o($)) && f.push($);
								else break;
							}
						return f;
					}
					getAllRegionsAtLine(p, o) {
						const f = [];
						if (this.c) {
							let b = this.c.findRange(p),
								s = 1;
							for (; b >= 0; ) {
								const l = this.c.toRegion(b);
								(!o || o(l, s)) && f.push(l), s++, (b = l.parentIndex);
							}
						}
						return f;
					}
					setCollapsed(p, o) {
						this.c.setCollapsed(p, o);
					}
					recompute() {
						if (!this.a) return;
						const p = this.a,
							o = p.viewCells,
							f = [];
						for (let I = 0; I < o.length; I++) {
							const T = o[I];
							if (T.cellKind !== r.CellKind.Markup || T.language !== "markdown")
								continue;
							const P = Math.min(
								7,
								...Array.from(n(T.getText()), (k) => k.depth),
							);
							P < 7 && f.push({ index: I, level: P, endIndex: 0 });
						}
						const b = f
								.map((I, T) => {
									let P;
									for (let L = T + 1; L < f.length; ++L)
										if (f[L].level <= I.level) {
											P = f[L].index - 1;
											break;
										}
									const k = P !== void 0 ? P : o.length - 1;
									return { start: I.index + 1, end: k + 1, rank: 1 };
								})
								.filter((I) => I.start !== I.end),
							s = (0, m.$YNb)(b, a);
						let l = 0;
						const y = () => {
							for (; l < this.c.length; ) {
								const I = this.c.isCollapsed(l);
								if ((l++, I)) return l - 1;
							}
							return -1;
						};
						let $ = 0,
							v = y();
						for (; v !== -1 && $ < s.length; ) {
							const I = p.getTrackedRange(this.e[v]);
							if (I) {
								const T = I.start;
								for (; $ < s.length; ) {
									const P = s.getStartLineNumber($) - 1;
									if (T >= P) s.setCollapsed($, T === P), $++;
									else break;
								}
							}
							v = y();
						}
						for (; $ < s.length; ) s.setCollapsed($, !1), $++;
						const S = [];
						for (let I = 0; I < s.length; I++) {
							const T = s.toRegion(I);
							S.push({
								start: T.startLineNumber - 1,
								end: T.endLineNumber - 1,
							});
						}
						this.e.forEach((I) =>
							p.setTrackedRange(
								I,
								null,
								C.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter,
							),
						),
							(this.e = S.map((I) =>
								p.setTrackedRange(
									null,
									I,
									C.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter,
								),
							).filter((I) => I !== null)),
							(this.c = s),
							this.d.fire();
					}
					getMemento() {
						const p = [];
						let o = 0;
						for (; o < this.c.length; ) {
							if (this.c.isCollapsed(o)) {
								const b = this.c.toRegion(o);
								p.push({
									start: b.startLineNumber - 1,
									end: b.endLineNumber - 1,
								});
							}
							o++;
						}
						return p;
					}
					applyMemento(p) {
						if (!this.a) return !1;
						let o = 0,
							f = 0;
						for (; f < p.length && o < this.c.length; ) {
							if (this.a.getTrackedRange(this.e[o])) {
								const s = p[f].start;
								for (; o < this.c.length; ) {
									const l = this.c.getStartLineNumber(o) - 1;
									if (s >= l) this.c.setCollapsed(o, s === l), o++;
									else break;
								}
							}
							f++;
						}
						for (; o < this.c.length; ) this.c.setCollapsed(o, !1), o++;
						return !0;
					}
				}
				e.$3Nb = h;
				function c(g, p, o) {
					const f = g.regions.findRange(p + 1);
					g.setCollapsed(f, o);
				}
				function* n(g) {
					for (const p of E.marked.lexer(g, { gfm: !0 }))
						p.type === "heading" &&
							(yield {
								depth: p.depth,
								text: (0, t.$Xib)({ value: p.raw }).trim(),
							});
				}
			},
		),
		define(
			de[1301],
			he([1, 0, 267, 4, 1841, 3477, 70]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wOb = e.NotebookOutlineConstants = void 0),
					(e.$xOb = u);
				var d;
				(function (h) {
					h[(h.NonHeaderOutlineLevel = 7)] = "NonHeaderOutlineLevel";
				})(d || (e.NotebookOutlineConstants = d = {}));
				function m(h) {
					const c = Array.from((0, w.$5Nb)(h));
					if (c.length) return c;
					const n = h.match(/<h([1-6]).*>(.*)<\/h\1>/i);
					if (n) {
						const g = parseInt(n[1]),
							p = n[2].trim();
						c.push({ depth: g, text: p });
					}
					return c;
				}
				class r {
					constructor(c) {
						(this.c = c), (this.a = {}), (this.b = new WeakMap());
					}
					getOutlineEntries(c, n) {
						const g = [],
							p = c.cellKind === C.CellKind.Markup;
						let o = a(c),
							f = !1;
						if (p) {
							const b = c.getText().substring(0, 1e4),
								s = this.b.get(c),
								l =
									s?.alternativeId === c.getAlternativeId()
										? s.headers
										: Array.from(m(b));
							this.b.set(c, {
								alternativeId: c.getAlternativeId(),
								headers: l,
							});
							for (const { depth: y, text: $ } of l)
								(f = !0), g.push(new E.$vOb(n++, y, c, $, !1, !1));
							f || (o = (0, t.$Xib)({ value: o }));
						}
						if (!f) {
							const b = !p && this.c.getCellExecution(c.uri);
							let s = o.trim();
							if (!p && c.model.textModel) {
								const l = this.a[c.model.textModel.id];
								l &&
									(g.push(
										new E.$vOb(
											n++,
											d.NonHeaderOutlineLevel,
											c,
											s,
											!!b,
											b ? b.isPaused : !1,
										),
									),
									l.forEach((y) => {
										g.push(
											new E.$vOb(
												n++,
												y.level,
												c,
												y.name,
												!1,
												!1,
												y.range,
												y.kind,
											),
										);
									}));
							}
							g.length === 0 &&
								(s.length === 0 && (s = (0, i.localize)(8215, null)),
								g.push(
									new E.$vOb(
										n++,
										d.NonHeaderOutlineLevel,
										c,
										s,
										!!b,
										b ? b.isPaused : !1,
									),
								));
						}
						return g;
					}
					async cacheSymbols(c, n, g) {
						const p = await c.resolveTextModel(),
							o = await n.getOrCreate(p, g),
							f = u(o.getTopLevelSymbols(), 8);
						this.a[p.id] = f;
					}
				}
				e.$wOb = r;
				function u(h, c) {
					const n = [];
					return (
						h.forEach((g) => {
							n.push({ name: g.name, range: g.range, level: c, kind: g.kind }),
								g.children && n.push(...u(g.children, c + 1));
						}),
						n
					);
				}
				function a(h) {
					const c = h.textBuffer;
					for (let n = 0; n < c.getLineCount(); n++) {
						const g = c.getLineFirstNonWhitespaceColumn(n + 1),
							p = c.getLineLength(n + 1);
						if (g < p) return c.getLineContent(n + 1);
					}
					return h.getText().substring(0, 100);
				}
			},
		),
		