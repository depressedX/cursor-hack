define(de[507], he([1, 0, 24, 29, 210, 17]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$bZb = void 0);
			class C {
				static {
					this.compareByStart = (0, t.$0b)((m) => m.startLineNumber, t.$_b);
				}
				static join(m) {
					if (m.length === 0) return;
					let r = Number.MAX_SAFE_INTEGER,
						u = 0;
					for (const a of m)
						(r = Math.min(r, a.startLineNumber)),
							(u = Math.max(u, a.startLineNumber + a.lineCount));
					return new C(r, u - r);
				}
				static fromLineNumbers(m, r) {
					return new C(m, r - m);
				}
				constructor(m, r) {
					if (((this.startLineNumber = m), (this.lineCount = r), r < 0))
						throw new i.$gb();
				}
				join(m) {
					return new C(
						Math.min(this.startLineNumber, m.startLineNumber),
						Math.max(this.endLineNumberExclusive, m.endLineNumberExclusive) -
							this.startLineNumber,
					);
				}
				get endLineNumberExclusive() {
					return this.startLineNumber + this.lineCount;
				}
				get isEmpty() {
					return this.lineCount === 0;
				}
				touches(m) {
					return (
						this.endLineNumberExclusive >= m.startLineNumber &&
						m.endLineNumberExclusive >= this.startLineNumber
					);
				}
				isAfter(m) {
					return this.startLineNumber >= m.endLineNumberExclusive;
				}
				isBefore(m) {
					return m.startLineNumber >= this.endLineNumberExclusive;
				}
				delta(m) {
					return new C(this.startLineNumber + m, this.lineCount);
				}
				toString() {
					return `[${this.startLineNumber},${this.endLineNumberExclusive})`;
				}
				equals(m) {
					return (
						this.startLineNumber === m.startLineNumber &&
						this.lineCount === m.lineCount
					);
				}
				contains(m) {
					return this.startLineNumber <= m && m < this.endLineNumberExclusive;
				}
				deltaEnd(m) {
					return new C(this.startLineNumber, this.lineCount + m);
				}
				deltaStart(m) {
					return new C(this.startLineNumber + m, this.lineCount - m);
				}
				getLines(m) {
					const r = new Array(this.lineCount);
					for (let u = 0; u < this.lineCount; u++)
						r[u] = m.getLineContent(this.startLineNumber + u);
					return r;
				}
				containsRange(m) {
					return (
						this.startLineNumber <= m.startLineNumber &&
						m.endLineNumberExclusive <= this.endLineNumberExclusive
					);
				}
				toRange() {
					return new E.$iL(
						this.startLineNumber,
						1,
						this.endLineNumberExclusive,
						1,
					);
				}
				toInclusiveRange() {
					if (!this.isEmpty)
						return new E.$iL(
							this.startLineNumber,
							1,
							this.endLineNumberExclusive - 1,
							w.Constants.MAX_SAFE_SMALL_INTEGER,
						);
				}
				toInclusiveRangeOrEmpty() {
					return this.isEmpty
						? new E.$iL(this.startLineNumber, 1, this.startLineNumber, 1)
						: new E.$iL(
								this.startLineNumber,
								1,
								this.endLineNumberExclusive - 1,
								w.Constants.MAX_SAFE_SMALL_INTEGER,
							);
				}
				intersects(m) {
					return (
						this.startLineNumber <= m.endLineNumberExclusive &&
						m.startLineNumber <= this.endLineNumberExclusive
					);
				}
			}
			e.$bZb = C;
		}),
		define(
			de[3076],
			he([1, 0, 7, 3, 77, 507, 4]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Anc = e.$znc = void 0),
					(C = mt(C)),
					(e.$znc = { start: "<<<<<<<", end: ">>>>>>>" });
				class d extends i.$1c {
					constructor(a, h) {
						super(),
							(this.editor = a),
							(this.mergeEditorViewModel = h),
							(this.a = []),
							(this.f = new i.$Zc()),
							this.D(
								a.onDidChangeModelContent((c) => {
									this.g();
								}),
							),
							this.D(
								a.onDidChangeModel((c) => {
									this.g();
								}),
							),
							this.g();
					}
					g() {
						const a = this.editor.getModel(),
							h = a
								? m(a, {
										blockToRemoveStartLinePrefix: e.$znc.start,
										blockToRemoveEndLinePrefix: e.$znc.end,
									})
								: { blocks: [] };
						this.editor.setHiddenAreas(
							h.blocks.map((c) => c.lineRange.deltaEnd(-1).toRange()),
							this,
						),
							this.editor.changeViewZones((c) => {
								this.f.clear();
								for (const n of this.a) c.removeZone(n);
								this.a.length = 0;
								for (const n of h.blocks) {
									const g = a
											.getLineContent(n.lineRange.startLineNumber)
											.substring(0, 20),
										p = a
											.getLineContent(n.lineRange.endLineNumberExclusive - 1)
											.substring(0, 20),
										o = n.lineRange.lineCount - 2,
										f = (0, t.h)("div", [
											(0, t.h)("div.conflict-zone-root", [
												(0, t.h)("pre", [g]),
												(0, t.h)("span.dots", ["..."]),
												(0, t.h)("pre", [p]),
												(0, t.h)("span.text", [
													o === 1
														? C.localize(7622, null)
														: C.localize(7623, null, o),
												]),
											]),
										]).root;
									this.a.push(
										c.addZone({
											afterLineNumber: n.lineRange.endLineNumberExclusive - 1,
											domNode: f,
											heightInLines: 1.5,
										}),
									);
									const b = () => {
										const s = this.editor.getLayoutInfo();
										f.style.width = `${s.contentWidth - s.verticalScrollbarWidth}px`;
									};
									this.f.add(
										this.editor.onDidLayoutChange(() => {
											b();
										}),
									),
										b(),
										this.f.add(
											(0, w.autorun)((s) => {
												const l = this.mergeEditorViewModel.read(s);
												if (!l) return;
												const y = l.activeModifiedBaseRange.read(s),
													$ = [];
												$.push("conflict-zone"),
													y &&
														l.model
															.getLineRangeInResult(y.baseRange, s)
															.intersects(n.lineRange) &&
														$.push("focused"),
													(f.className = $.join(" "));
											}),
										);
								}
							});
					}
				}
				e.$Anc = d;
				function m(u, a) {
					const h = [],
						c = [];
					let n = !1,
						g = -1,
						p = 0;
					for (const o of u.getLinesContent())
						p++,
							n
								? o.startsWith(a.blockToRemoveEndLinePrefix) &&
									((n = !1),
									h.push(new r(new E.$bZb(g, p - g + 1))),
									c.push(""))
								: o.startsWith(a.blockToRemoveStartLinePrefix)
									? ((n = !0), (g = p))
									: c.push(o);
					return {
						blocks: h,
						transformedContent: c.join(`
`),
					};
				}
				class r {
					constructor(a) {
						this.lineRange = a;
					}
				}
			},
		),
		