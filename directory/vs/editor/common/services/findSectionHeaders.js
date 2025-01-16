define(de[2569], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$txb = w);
			const t = new RegExp("\\bMARK:\\s*(.*)$", "d"),
				i = /^-+|-+$/g;
			function w(r, u) {
				let a = [];
				if (u.findRegionSectionHeaders && u.foldingRules?.markers) {
					const h = E(r, u);
					a = a.concat(h);
				}
				if (u.findMarkSectionHeaders) {
					const h = C(r);
					a = a.concat(h);
				}
				return a;
			}
			function E(r, u) {
				const a = [],
					h = r.getLineCount();
				for (let c = 1; c <= h; c++) {
					const n = r.getLineContent(c),
						g = n.match(u.foldingRules.markers.start);
					if (g) {
						const p = {
							startLineNumber: c,
							startColumn: g[0].length + 1,
							endLineNumber: c,
							endColumn: n.length + 1,
						};
						if (p.endColumn > p.startColumn) {
							const o = {
								range: p,
								...m(n.substring(g[0].length)),
								shouldBeInComments: !1,
							};
							(o.text || o.hasSeparatorLine) && a.push(o);
						}
					}
				}
				return a;
			}
			function C(r) {
				const u = [],
					a = r.getLineCount();
				for (let h = 1; h <= a; h++) {
					const c = r.getLineContent(h);
					d(c, h, u);
				}
				return u;
			}
			function d(r, u, a) {
				t.lastIndex = 0;
				const h = t.exec(r);
				if (h) {
					const c = h.indices[1][0] + 1,
						n = h.indices[1][1] + 1,
						g = {
							startLineNumber: u,
							startColumn: c,
							endLineNumber: u,
							endColumn: n,
						};
					if (g.endColumn > g.startColumn) {
						const p = { range: g, ...m(h[1]), shouldBeInComments: !0 };
						(p.text || p.hasSeparatorLine) && a.push(p);
					}
				}
			}
			function m(r) {
				r = r.trim();
				const u = r.startsWith("-");
				return (r = r.replace(i, "")), { text: r, hasSeparatorLine: u };
			}
		}),
		