define(de[326], he([1, 0, 77, 457]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Mwb = w),
				(e.$Nwb = E);
			function w(C, d, m) {
				return (0, i.$zd)(
					{ debugName: () => `Configuration Key "${C}"` },
					(r) =>
						m.onDidChangeConfiguration((u) => {
							u.affectsConfiguration(C) && r(u);
						}),
					() => m.getValue(C) ?? d,
				);
			}
			function E(C, d, m) {
				const r = C.bindTo(d);
				return (0, t.autorunOpts)(
					{ debugName: () => `Set Context Key "${C.key}"` },
					(u) => {
						r.set(m(u));
					},
				);
			}
		}),
		define(
			de[1624],
			he([1, 0, 1559, 755, 77, 5]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$jc = C),
					(e.$_jc = u);
				function C(h) {
					return (0, t.$Rpb)() ? m(h, r) : h();
				}
				class d {
					constructor(c) {
						this.instantiationService = c;
					}
					init(...c) {}
				}
				function m(h, c) {
					return class extends c {
						constructor() {
							super(...arguments), (this.a = void 0);
						}
						init(...g) {
							this.a = (0, w.autorunWithStore)((p, o) => {
								const f = (0, i.$Tpb)(h(), p);
								o.add(this.instantiationService.createInstance(f, ...g));
							});
						}
						dispose() {
							this.a?.dispose();
						}
					};
				}
				let r = class extends d {
					constructor(c) {
						super(c), this.init();
					}
				};
				r = Ne([j(0, E.$Li)], r);
				function u(h) {
					return (0, t.$Rpb)() ? m(h, a) : h();
				}
				let a = class extends d {
					constructor(c, n) {
						super(n), this.init(c);
					}
				};
				a = Ne([j(1, E.$Li)], a);
			},
		),
		