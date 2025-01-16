define(de[975], he([1, 0, 17, 3, 901]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.RangeWhereIs = e.$59b = void 0),
				(e.$49b = E),
				(e.$69b = m),
				(e.$79b = u);
			async function E(a, h) {
				const c = await new Promise((o) => {
						const f = setTimeout(() => {
							o([]);
						}, 1e3);
						(0, w.$gqb)(a, h, (b, s) => {
							clearTimeout(f), o(s);
						});
					}),
					n = [];
				let g = 1,
					p = 1;
				for (const o of c)
					if (o.added) {
						const f = p,
							b = p + o.count - 1,
							l =
								h.split(`
`)[b - 1].length + 1;
						n.push(new t.$iL(f, 1, b, l)), (p += o.count);
					} else o.removed ? (g += o.count) : ((g += o.count), (p += o.count));
				return n;
			}
			class C extends i.$1c {
				constructor(h, c) {
					super(), (this.a = {});
					for (const n of c)
						for (let g = n.startLineNumber; g <= n.endLineNumber; g++) {
							const p = new t.$iL(g, 1, g, 1),
								o = new d(p);
							this.a[g] && this.a[g].dispose(), (this.a[g] = o), this.D(o);
						}
					this.D(
						h.object.textEditorModel.onDidChangeContent((n) => {
							for (const [g, p] of Object.entries(this.a)) p.handleNewChange(n);
						}),
					);
				}
				getUpdatedLineNumber(h) {
					const c = this.a[h];
					return c ? c.range.startLineNumber : null;
				}
				getUpdatedRange(h) {
					const c = this.getUpdatedLineNumber(h.startLineNumber),
						n = this.getUpdatedLineNumber(h.endLineNumber);
					return c === null || n === null
						? null
						: new t.$iL(c, h.startColumn, n, h.endColumn);
				}
				dispose() {
					super.dispose();
				}
			}
			e.$59b = C;
			class d extends i.$1c {
				constructor(h) {
					super(), (this.range = h);
				}
				handleNewChange(h) {
					for (const c of h.changes)
						switch (m(this.range, c.range)) {
							case r.After:
								break;
							case r.Before: {
								const g =
									c.text.split(`
`).length -
									(c.range.endLineNumber - c.range.startLineNumber + 1);
								this.range = new t.$iL(
									this.range.startLineNumber + g,
									this.range.startColumn,
									this.range.endLineNumber + g,
									this.range.endColumn,
								);
								break;
							}
							case r.Overlap:
								break;
						}
				}
				dispose() {
					super.dispose();
				}
			}
			function m(a, h) {
				return a.endLineNumber < h.startLineNumber
					? r.After
					: a.startLineNumber > h.endLineNumber ||
							(h.endLineNumber === a.startLineNumber &&
								h.endColumn <= a.startColumn)
						? r.Before
						: h.startLineNumber === a.endLineNumber &&
								h.startColumn >= a.endColumn
							? r.After
							: r.Overlap;
			}
			var r;
			(function (a) {
				(a[(a.Before = 0)] = "Before"),
					(a[(a.Overlap = 1)] = "Overlap"),
					(a[(a.After = 2)] = "After");
			})(r || (e.RangeWhereIs = r = {}));
			function u(a) {
				if (a)
					return new t.$iL(
						a.startLineNumber,
						a.startColumn,
						a.endLineNumberInclusive,
						a.endColumn,
					);
			}
		}),
		define(
			de[2999],
			he([1, 0, 64, 3, 90, 25, 83, 975, 667, 45]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ced = void 0);
				let u = class extends i.$1c {
					g(h, c) {
						this.j.setNonPersistentStorage("lintState", "bugs", (n) =>
							n.map(
								(g) => (
									g.bug.uuid === this.h.bug.uuid &&
										((g.bug.replaceRange = new C.$Fs({
											startLineNumber: h.startLineNumber,
											startColumn: h.startColumn,
											endLineNumberInclusive: h.endLineNumber,
											endColumn: h.endColumn,
										})),
										(g.bug.reevaluateRange = c
											? new C.$Fs({
													startLineNumber: c.startLineNumber,
													startColumn: c.startColumn,
													endLineNumberInclusive: c.endLineNumber,
													endColumn: c.endColumn,
												})
											: void 0)),
									g
								),
							),
						);
					}
					getMarker() {
						return this.m.read({ owner: this.b })[0];
					}
					constructor(h, c, n, g, p) {
						if (
							(super(),
							(this.h = c),
							(this.j = n),
							(this.m = g),
							(this.n = p),
							(this.a = !1),
							(this.modelRef = h),
							this.D(this.modelRef),
							(this.b = m.$kic + this.h.bug.uuid),
							!this.h.bug.replaceRange)
						)
							throw new Error("BUG DOES NOT HAVE A RANGE");
						const o = this.modelRef.object.textEditorModel.deltaDecorations(
							[],
							[
								{
									range: {
										startLineNumber: this.h.bug.replaceRange.startLineNumber,
										startColumn: this.h.bug.replaceRange.startColumn,
										endLineNumber:
											this.h.bug.replaceRange.endLineNumberInclusive,
										endColumn: this.h.bug.replaceRange.endColumn,
									},
									options: {
										description: "ai lint bug",
										stickiness:
											t.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
									},
								},
							],
						);
						if (o.length !== 1)
							throw new Error("Expected exactly one decoration");
						if (((this.c = o[0]), this.h.bug.reevaluateRange)) {
							const f = this.modelRef.object.textEditorModel.deltaDecorations(
								[],
								[
									{
										range: {
											startLineNumber:
												this.h.bug.reevaluateRange.startLineNumber,
											startColumn: this.h.bug.reevaluateRange.startColumn,
											endLineNumber:
												this.h.bug.reevaluateRange.endLineNumberInclusive,
											endColumn: this.h.bug.reevaluateRange.endColumn,
										},
										options: {
											description: "ai lint bug",
											stickiness:
												t.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
										},
									},
								],
							);
							if (f.length !== 1)
								throw new Error("Expected exactly one decoration");
							this.f = f[0];
						}
						this.D(
							h.object.textEditorModel.onDidChangeContent((f) => {
								const b = this.q(),
									s = this.r();
								for (const l of f.changes) {
									const y = (0, d.$69b)(b, l.range);
									d.RangeWhereIs.Overlap;
									const $ = s ? (0, d.$69b)(s, l.range) : d.RangeWhereIs.After;
									d.RangeWhereIs.Overlap;
								}
								this.s(), this.g(b, s);
							}),
						),
							this.s();
					}
					q() {
						const h = this.modelRef.object.textEditorModel.getDecorationRange(
							this.c,
						);
						if (!h) throw new Error("Expected a decoration range");
						return h;
					}
					r() {
						if (!this.f) return;
						const h = this.modelRef.object.textEditorModel.getDecorationRange(
							this.f,
						);
						if (h) return h;
					}
					s() {
						if (this.a) return;
						const h = this.q();
						this.m.changeOne(this.b, this.h.uri, [
							{
								severity: w.MarkerSeverity.AI,
								message: this.h.bug.message,
								startLineNumber: h.startLineNumber,
								startColumn: h.startColumn,
								endLineNumber: h.endLineNumber,
								endColumn: h.endColumn,
								source: "cursor-ai-linter",
								aiLintBugData: {
									replaceText: this.h.bug.replaceText,
									originalText: this.h.bug.replaceInitialText,
									bugUuid: this.h.bug.uuid,
									bug: this.h.bug,
								},
							},
						]);
					}
					dispose() {
						(this.a = !0),
							super.dispose(),
							this.m.changeOne(this.b, this.h.uri, []);
					}
				};
				(e.$Ced = u),
					(e.$Ced = u = Ne([j(2, r.$0zb), j(3, w.$aM), j(4, E.$Vi)], u));
			},
		),
		