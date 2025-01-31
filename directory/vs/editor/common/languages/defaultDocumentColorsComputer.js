import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/color.js';
define(de[2559], he([1, 0, 97]), function (ce /*require*/,
 e /*exports*/,
 t /*color*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$sxb = a);
			function i(h) {
				const c = [];
				for (const n of h) {
					const g = Number(n);
					(g || (g === 0 && n.replace(/\s/g, "") !== "")) && c.push(g);
				}
				return c;
			}
			function w(h, c, n, g) {
				return { red: h / 255, blue: n / 255, green: c / 255, alpha: g };
			}
			function E(h, c) {
				const n = c.index,
					g = c[0].length;
				if (!n) return;
				const p = h.positionAt(n);
				return {
					startLineNumber: p.lineNumber,
					startColumn: p.column,
					endLineNumber: p.lineNumber,
					endColumn: p.column + g,
				};
			}
			function C(h, c) {
				if (!h) return;
				const n = t.$UL.Format.CSS.parseHex(c);
				if (n)
					return { range: h, color: w(n.rgba.r, n.rgba.g, n.rgba.b, n.rgba.a) };
			}
			function d(h, c, n) {
				if (!h || c.length !== 1) return;
				const p = c[0].values(),
					o = i(p);
				return { range: h, color: w(o[0], o[1], o[2], n ? o[3] : 1) };
			}
			function m(h, c, n) {
				if (!h || c.length !== 1) return;
				const p = c[0].values(),
					o = i(p),
					f = new t.$UL(new t.$SL(o[0], o[1] / 100, o[2] / 100, n ? o[3] : 1));
				return { range: h, color: w(f.rgba.r, f.rgba.g, f.rgba.b, f.rgba.a) };
			}
			function r(h, c) {
				return typeof h == "string" ? [...h.matchAll(c)] : h.findMatches(c);
			}
			function u(h) {
				const c = [],
					g = r(
						h,
						/\b(rgb|rgba|hsl|hsla)(\([0-9\s,.\%]*\))|(#)([A-Fa-f0-9]{3})\b|(#)([A-Fa-f0-9]{4})\b|(#)([A-Fa-f0-9]{6})\b|(#)([A-Fa-f0-9]{8})\b/gm,
					);
				if (g.length > 0)
					for (const p of g) {
						const o = p.filter((l) => l !== void 0),
							f = o[1],
							b = o[2];
						if (!b) continue;
						let s;
						if (f === "rgb") {
							const l =
								/^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*\)$/gm;
							s = d(E(h, p), r(b, l), !1);
						} else if (f === "rgba") {
							const l =
								/^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
							s = d(E(h, p), r(b, l), !0);
						} else if (f === "hsl") {
							const l =
								/^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*\)$/gm;
							s = m(E(h, p), r(b, l), !1);
						} else if (f === "hsla") {
							const l =
								/^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
							s = m(E(h, p), r(b, l), !0);
						} else f === "#" && (s = C(E(h, p), f + b));
						s && c.push(s);
					}
				return c;
			}
			function a(h) {
				return !h ||
					typeof h.getValue != "function" ||
					typeof h.positionAt != "function"
					? []
					: u(h);
			}
		})
