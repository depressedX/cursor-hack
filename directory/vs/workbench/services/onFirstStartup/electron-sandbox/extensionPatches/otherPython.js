import '../../../../../../require.js';
import '../../../../../../exports.js';
define(de[3512], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Dcd = void 0);
			const t = "/*",
				i = "*/";
			e.$Dcd = {
				extensionId: "ms-python.vscode-pylance",
				extensionMinVersionToFixInclusive: "2024.4.1",
				fixes: [{ relativeFilePath: "dist/extension.bundle.js", replaceFn: w }],
			};
			function w(d) {
				const m = E(d);
				if (!m) return d;
				const [r, u] = m;
				return d.slice(0, r) + t + d.slice(r, u) + i + d.slice(u);
			}
			function E(d) {
				const m = C(d);
				if (!m) throw new Error("Expected pattern not found in file");
				const [r, u] = m;
				return d.slice(0, r).endsWith(t) || d.slice(u).startsWith(i)
					? null
					: [r, u];
			}
			function C(d) {
				const m = "disposables",
					r = "return(0x0",
					u = "};";
				let a = 1 / 0,
					h = null,
					c = d.indexOf(m);
				for (; c !== -1; ) {
					const n = d.indexOf(u, c);
					if (n !== -1) {
						const g = d.lastIndexOf(r, c);
						if (g !== -1) {
							const p = n + u.length - g;
							p < a && ((a = p), (h = [g, n + u.length]));
						}
					}
					c = d.indexOf(m, c + 1);
				}
				return h;
			}
		}),
		