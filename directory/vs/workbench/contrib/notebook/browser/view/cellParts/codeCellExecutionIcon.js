define(
			de[3476],
			he([1, 0, 7, 182, 3, 4, 26, 284, 70, 190]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$13b = void 0),
					(t = mt(t));
				let u = class extends w.$1c {
					constructor(h, c, n, g) {
						super(),
							(this.b = c),
							(this.c = n),
							(this.f = g),
							(this.a = !1),
							this.g(),
							this.D(
								this.f.onDidChangeExecution((p) => {
									p.type === r.NotebookExecutionType.cell &&
										p.affectsCell(this.b.uri) &&
										this.g();
								}),
							),
							this.D(this.b.model.onDidChangeInternalMetadata(() => this.g()));
					}
					setVisibility(h) {
						(this.a = h), this.g();
					}
					g() {
						if (!this.a) return;
						const h = this.f.getCellExecution(this.b.uri),
							c = this.h(h, this.b.model.internalMetadata);
						c
							? ((this.c.style.display = ""),
								t.$hhb(this.c, ...(0, i.$Sib)(c.text)),
								(this.c.title = c.tooltip ?? ""))
							: ((this.c.style.display = "none"), t.$hhb(this.c));
					}
					h(h, c) {
						const n = h?.state,
							{ lastRunSuccess: g } = c;
						if (!n && g)
							return {
								text: `$(${d.$gOb.id})`,
								tooltip: (0, E.localize)(8198, null),
							};
						if (!n && g === !1)
							return {
								text: `$(${d.$hOb.id})`,
								tooltip: (0, E.localize)(8199, null),
							};
						if (
							n === m.NotebookCellExecutionState.Pending ||
							n === m.NotebookCellExecutionState.Unconfirmed
						)
							return {
								text: `$(${d.$iOb.id})`,
								tooltip: (0, E.localize)(8200, null),
							};
						if (n === m.NotebookCellExecutionState.Executing)
							return {
								text: `$(${C.ThemeIcon.modify(d.$jOb, "spin").id})`,
								tooltip: (0, E.localize)(8201, null),
							};
					}
				};
				(e.$13b = u), (e.$13b = u = Ne([j(3, r.$d6)], u));
			},
		),
		