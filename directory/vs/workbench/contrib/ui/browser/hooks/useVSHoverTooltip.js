define(de[422], he([1, 0, 317, 13]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$z$b = w);
			function w(E) {
				const [C, d] = (0, i.createSignal)(void 0),
					m = (0, t.$1ib)();
				let r;
				const u = (h) => {
						clearTimeout(r);
						const c = () => {
							const n = m.showHover(h);
							n && d(n);
						};
						E ? (r = setTimeout(c, E)) : c();
					},
					a = () => {
						clearTimeout(r), m.hideHover(), d(void 0);
					};
				return (
					(0, i.onCleanup)(() => {
						clearTimeout(r), a();
					}),
					{ showHover: u, hideHover: a, hoverWidget: C }
				);
			}
		}),
		