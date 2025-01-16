define(
			de[3498],
			he([1, 0, 7, 14, 26, 4, 39, 108, 294]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$73b = void 0),
					(t = mt(t));
				const r = t.$;
				let u = class extends m.$A1b {
					constructor(h, c, n) {
						super(), (this.a = h);
						const g = t.$fhb(c, r("span.expandOutputPlaceholder"));
						g.textContent = (0, E.localize)(8203, null);
						const p = t.$fhb(c, r("span.expandOutputIcon"));
						p.classList.add(...w.ThemeIcon.asClassNameArray(i.$ak.more));
						const o = n.lookupKeybinding(d.$_Ib);
						o &&
							((g.title = (0, E.localize)(8204, null, o.getLabel())),
							(c.title = (0, E.localize)(8205, null, o.getLabel()))),
							t.hide(c),
							this.D(t.$0fb(p, t.$$gb.CLICK, () => this.b())),
							this.D(t.$0fb(c, t.$$gb.DBLCLICK, () => this.b()));
					}
					b() {
						!this.c ||
							!this.c ||
							this.a.textModel.cells.indexOf(this.c.model) < 0 ||
							(this.c.isOutputCollapsed = !this.c.isOutputCollapsed);
					}
				};
				(e.$73b = u), (e.$73b = u = Ne([j(2, C.$uZ)], u));
			},
		),
		