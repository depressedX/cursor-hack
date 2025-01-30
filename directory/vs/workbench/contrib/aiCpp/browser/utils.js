import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/common/core/position.js';
import '../../../../editor/common/core/range.js';
define(de[1228], he([1, 0, 48, 17]), function (ce /*require*/,
 e /*exports*/,
 t /*position*/,
 i /*range*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Fed = E),
				(e.$Ged = C),
				(e.$Hed = d);
			function w(m, r, u) {
				const a = new t.$hL(r.range.endLineNumber, r.range.endColumn),
					h = new t.$hL(m.range.startLineNumber, m.range.startColumn),
					c = i.$iL.fromPositions(a, h),
					n = u.getValueInRange(c);
				return {
					range: new i.$iL(
						r.range.startLineNumber,
						r.range.startColumn,
						m.range.endLineNumber,
						m.range.endColumn,
					),
					text: r.text + n + m.text,
				};
			}
			function E(m) {
				return [...m].sort((r, u) => {
					const a = new t.$hL(r.range.startLineNumber, r.range.startColumn),
						h = new t.$hL(u.range.startLineNumber, u.range.startColumn);
					return a.isBeforeOrEqual(h) ? 1 : -1;
				});
			}
			function C(m, r) {
				const u = E(m),
					a = u[0];
				return u.slice(1).reduce((h, c) => w(h, c, r), a);
			}
			function d(m) {
				const r = new t.$hL(m.range.startLineNumber, m.range.startColumn),
					u = m.text.trimEnd(),
					a = u.split(`
`);
				if (a.length === 1) return r.delta(0, u.length);
				{
					const h = a.length - 1,
						c = a[h].length + 1;
					return new t.$hL(r.lineNumber + h, c);
				}
			}
		}),
		