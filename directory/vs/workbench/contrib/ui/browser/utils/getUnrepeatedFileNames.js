import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/path.js';
define(de[1273], he([1, 0, 54]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$j$b = i);
			function i(C, d, m = {}) {
				const { renderFolder: r = (c) => c } = m,
					u = C.map((c) => d(c).fsPath),
					a = new Map(),
					h = m.rootFolder ? (0, t.$mc)(m.rootFolder.trim()) : void 0;
				return (
					u.forEach((c) => {
						const n = (0, t.$mc)(c),
							g = (0, t.$sc)(n);
						a.has(g) || a.set(g, []), a.get(g).push(n);
					}),
					u.map((c) => {
						const n = (0, t.$sc)(c),
							g = a.get(n);
						if (g.length === 1) return { fileName: n };
						if (new Set(g).size === 1) return { fileName: n };
						let p;
						if (h) {
							const o = g.map((s) => (0, t.$qc)(h, s)),
								f = w(o),
								b = (0, t.$qc)(f, (0, t.$qc)(h, (0, t.$rc)(c)));
							p = b ? r(b) : void 0;
						} else {
							const o = w(g),
								f = (0, t.$qc)(o, (0, t.$rc)(c));
							p = f ? r(f) : void 0;
						}
						return { fileName: n, folderPath: p || void 0 };
					})
				);
			}
			function w(C) {
				if (C.length === 0) return "";
				if (C.length === 1) return (0, t.$rc)(C[0]);
				let d = C[0].split(t.sep);
				for (let m = 1; m < C.length; m++) {
					const r = C[m].split(t.sep);
					let u = 0;
					for (; u < d.length && u < r.length && d[u] === r[u]; ) u++;
					d = d.slice(0, u);
				}
				return d.join(t.sep);
			}
			function E(C, d) {
				const m = (0, t.$qc)(C, d);
				return m !== "" && !m.startsWith("..") && !m.startsWith(t.sep);
			}
		}),
		