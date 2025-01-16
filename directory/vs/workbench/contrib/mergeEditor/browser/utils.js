define(
			de[508],
			he([1, 0, 24, 29, 3, 77, 21]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oZb = void 0),
					(e.$fZb = d),
					(e.$gZb = r),
					(e.$hZb = u),
					(e.join = a),
					(e.$jZb = h),
					(e.$kZb = c),
					(e.$lZb = n),
					(e.$mZb = g),
					(e.$nZb = p);
				function d(f, b) {
					Object.entries(b).forEach(([s, l]) => {
						f.style.setProperty(s, m(l));
					});
				}
				function m(f) {
					return typeof f == "number" ? `${f}px` : f;
				}
				function r(f, b) {
					const s = new w.$Zc();
					let l = [];
					return (
						s.add(
							(0, E.autorunOpts)(
								{ debugName: () => `Apply decorations from ${b.debugName}` },
								(y) => {
									const $ = b.read(y);
									f.changeDecorations((v) => {
										l = v.deltaDecorations(l, $);
									});
								},
							),
						),
						s.add({
							dispose: () => {
								f.changeDecorations((y) => {
									l = y.deltaDecorations(l, []);
								});
							},
						}),
						s
					);
				}
				function* u(f, b, s) {
					const l = new t.$cc(b);
					for (const y of f) {
						l.takeWhile((v) => t.CompareResult.isGreaterThan(s(y, v)));
						const $ = l.takeWhile((v) =>
							t.CompareResult.isNeitherLessOrGreaterThan(s(y, v)),
						);
						yield { left: y, rights: $ || [] };
					}
				}
				function* a(f, b, s) {
					const l = new t.$cc(b);
					for (const y of f) {
						const $ = l.takeWhile((S) =>
							t.CompareResult.isGreaterThan(s(y, S)),
						);
						$ && (yield { rights: $ });
						const v = l.takeWhile((S) =>
							t.CompareResult.isNeitherLessOrGreaterThan(s(y, S)),
						);
						yield { left: y, rights: v || [] };
					}
				}
				function h(...f) {
					return [].concat(...f);
				}
				function c(f, b) {
					return f[b];
				}
				function n(f, b) {
					let s = !1;
					return (
						f.then(() => {
							s || b();
						}),
						(0, w.$Yc)(() => {
							s = !0;
						})
					);
				}
				function g(f, b) {
					return Object.assign(f, b);
				}
				function p(f, b) {
					const s = {};
					for (const l in f) s[l] = f[l];
					for (const l in b) {
						const y = b[l];
						typeof s[l] == "object" && y && typeof y == "object"
							? (s[l] = p(s[l], y))
							: (s[l] = y);
					}
					return s;
				}
				let o = class {
					constructor(b, s) {
						(this.f = b), (this.g = s), (this.b = !1), (this.c = void 0);
					}
					get() {
						if (!this.b) {
							const b = this.g.get(this.f, C.StorageScope.PROFILE);
							if (b !== void 0)
								try {
									this.c = JSON.parse(b);
								} catch (s) {
									(0, i.$4)(s);
								}
							this.b = !0;
						}
						return this.c;
					}
					set(b) {
						(this.c = b),
							this.g.store(
								this.f,
								JSON.stringify(this.c),
								C.StorageScope.PROFILE,
								C.StorageTarget.USER,
							);
					}
				};
				(e.$oZb = o), (e.$oZb = o = Ne([j(1, C.$lq)], o));
			},
		),
		