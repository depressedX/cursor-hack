import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/common/core/range.js';
import './search.js';
define(de[1866], he([1, 0, 17, 186]), function (ce /*require*/,
 e /*exports*/,
 t /*range*/,
 i /*search*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$CNc = E),
				(e.$DNc = C);
			function w(m, r, u) {
				const a = m[0].range.startLineNumber,
					h = m[m.length - 1].range.endLineNumber,
					c = [];
				for (let n = a; n <= h; n++) c.push(r.getLineContent(n));
				return new i.$u7(
					c.join(`
`) +
						`
`,
					m.map(
						(n) =>
							new t.$iL(
								n.range.startLineNumber - 1,
								n.range.startColumn - 1,
								n.range.endLineNumber - 1,
								n.range.endColumn - 1,
							),
					),
					u,
				);
			}
			function E(m, r, u) {
				let a = -1;
				const h = [];
				let c = [];
				return (
					m.forEach((n) => {
						n.range.startLineNumber !== a && ((c = []), h.push(c)),
							c.push(n),
							(a = n.range.endLineNumber);
					}),
					h.map((n) => w(n, r, u))
				);
			}
			function C(m, r, u) {
				const a = [];
				let h = -1;
				for (let c = 0; c < m.length; c++) {
					const { start: n, end: g } = d(m[c]);
					if (
						typeof u.surroundingContext == "number" &&
						u.surroundingContext > 0
					) {
						const f = Math.max(h + 1, n - u.surroundingContext);
						for (let b = f; b < n; b++)
							a.push({ text: r.getLineContent(b + 1), lineNumber: b + 1 });
					}
					a.push(m[c]);
					const p = m[c + 1],
						o = p ? d(p).start : Number.MAX_VALUE;
					if (
						typeof u.surroundingContext == "number" &&
						u.surroundingContext > 0
					) {
						const f = Math.min(
							o - 1,
							g + u.surroundingContext,
							r.getLineCount() - 1,
						);
						for (let b = g + 1; b <= f; b++)
							a.push({ text: r.getLineContent(b + 1), lineNumber: b + 1 });
					}
					h = g;
				}
				return a;
			}
			function d(m) {
				const r = m.rangeLocations.map((h) => h.source),
					u = r[0].startLineNumber,
					a = r[r.length - 1].endLineNumber;
				return { start: u, end: a };
			}
		}),
		