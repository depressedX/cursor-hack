define(de[2882], he([1, 0, 15, 3, 9, 62]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$4rb = e.$3rb = void 0);
			class C extends i.$1c {
				constructor() {
					super(...arguments), (this.a = new Set());
				}
				open(r, u) {
					const a = [...this.a.values()];
					return (0, t.$Qh)(
						a.map((h) => () => h.handleURL(r, u)),
						void 0,
						!1,
					).then((h) => h || !1);
				}
				registerHandler(r) {
					return this.a.add(r), (0, i.$Yc)(() => this.a.delete(r));
				}
			}
			e.$3rb = C;
			let d = class extends C {
				constructor(r) {
					super(), (this.b = r);
				}
				create(r) {
					let {
						authority: u,
						path: a,
						query: h,
						fragment: c,
					} = r || {
						authority: void 0,
						path: void 0,
						query: void 0,
						fragment: void 0,
					};
					return (
						u && a && a.indexOf("/") !== 0 && (a = `/${a}`),
						w.URI.from({
							scheme: this.b.urlProtocol,
							authority: u,
							path: a,
							query: h,
							fragment: c,
						})
					);
				}
			};
			(e.$4rb = d), (e.$4rb = d = Ne([j(0, E.$Bk)], d));
		}),
		