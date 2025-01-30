import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
define(de[886], he([1, 0, 80]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.getBucketKey = i),
				(e.simpleHash = w),
				(e.serializeMetricBuckets = E),
				(e.sanitizeUnit = C),
				(e.sanitizeMetricKey = d),
				(e.sanitizeTags = h);
			function i(c, n, g, p) {
				const o = Object.entries((0, t.dropUndefinedKeys)(p)).sort((f, b) =>
					f[0].localeCompare(b[0]),
				);
				return `${c}${n}${g}${o}`;
			}
			function w(c) {
				let n = 0;
				for (let g = 0; g < c.length; g++) {
					const p = c.charCodeAt(g);
					(n = (n << 5) - n + p), (n &= n);
				}
				return n >>> 0;
			}
			function E(c) {
				let n = "";
				for (const g of c) {
					const p = Object.entries(g.tags),
						o =
							p.length > 0
								? `|#${p.map(([f, b]) => `${f}:${b}`).join(",")}`
								: "";
					n += `${g.name}@${g.unit}:${g.metric}|${g.metricType}${o}|T${g.timestamp}
`;
				}
				return n;
			}
			function C(c) {
				return c.replace(/[^\w]+/gi, "_");
			}
			function d(c) {
				return c.replace(/[^\w\-.]+/gi, "_");
			}
			function m(c) {
				return c.replace(/[^\w\-./]+/gi, "");
			}
			const r = [
				[
					`
`,
					"\\n",
				],
				["\r", "\\r"],
				["	", "\\t"],
				["\\", "\\\\"],
				["|", "\\u{7c}"],
				[",", "\\u{2c}"],
			];
			function u(c) {
				for (const [n, g] of r) if (c === n) return g;
				return c;
			}
			function a(c) {
				return [...c].reduce((n, g) => n + u(g), "");
			}
			function h(c) {
				const n = {};
				for (const g in c)
					if (Object.prototype.hasOwnProperty.call(c, g)) {
						const p = m(g);
						n[p] = a(String(c[g]));
					}
				return n;
			}
		}),
		