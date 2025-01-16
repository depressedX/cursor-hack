define(
			de[1941],
			he([1, 0, 53, 49, 60, 32, 35, 5, 21, 25, 239, 10, 96]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$XSb = void 0);
				let c = class extends u.$ZSb {
					constructor(g, p, o, f, b, s, l, y, $, v, S, I) {
						super(
							g,
							{ mergeViewWithContainerWhenSingleView: !1 },
							l,
							o,
							f,
							$,
							b,
							v,
							y,
							s,
							S,
							I,
						),
							(this.c = new Map()),
							(this.r = new Map()),
							this.D(
								p((T) => {
									(this.t = T), this.Eb(T);
								}),
							),
							this.D(
								this.P.onDidChangeActiveViewDescriptors(() => {
									this.Ab(this.P.activeViewDescriptors);
								}),
							);
					}
					Ab(g) {
						g.forEach((p) => {
							const o = this.Cb(p);
							o &&
								(this.r.has(o) || this.r.set(o, new Map()),
								this.r.get(o).set(p.id, p),
								this.t &&
									!this.t.includes(o) &&
									this.panes.find((f) => f.id === p.id) &&
									this.P.setVisible(p.id, !1));
						});
					}
					Bb(g) {
						g.forEach((p) => this.c.set(p.id, p));
					}
					Eb(g) {
						this.r.size === 0 && this.Ab(this.P.activeViewDescriptors),
							this.Gb(g).forEach((p) => this.P.setVisible(p.id, !1)),
							this.Fb(g).forEach((p) => this.P.setVisible(p.id, !0));
					}
					Fb(g) {
						const p = [];
						for (let o = 0; o < g.length; o++)
							this.r.has(g[o]) &&
								p.push(...Array.from(this.r.get(g[o]).values()));
						return p;
					}
					Gb(g) {
						const p = this.r.keys();
						let o = p.next(),
							f = [];
						for (; !o.done; ) {
							let b = !1;
							g.forEach((s) => {
								o.value === s && (b = !0);
							}),
								b || (f = f.concat(this.Fb([o.value]))),
								(o = p.next());
						}
						return f;
					}
					tb(g) {
						const p = super.tb(g);
						for (let o = 0; o < g.length; o++)
							this.c.has(g[o].viewDescriptor.id) && p[o].setExpanded(!1);
						return (
							this.r.size === 0 && this.Ab(this.P.activeViewDescriptors), p
						);
					}
					openView(g, p) {
						const o = super.openView(g, p);
						if (o) {
							const f = Array.from(this.r.entries()).find((b) => b[1].has(g));
							f && !this.t?.includes(f[0]) && this.Db(f[1].get(g));
						}
						return o;
					}
				};
				(e.$XSb = c),
					(e.$XSb = c =
						Ne(
							[
								j(2, a.$gj),
								j(3, h.$mEb),
								j(4, E.$km),
								j(5, m.$lq),
								j(6, d.$Li),
								j(7, C.$iP),
								j(8, i.$Xxb),
								j(9, t.$q2),
								j(10, r.$Vi),
								j(11, w.$K1),
							],
							c,
						));
			},
		),
		