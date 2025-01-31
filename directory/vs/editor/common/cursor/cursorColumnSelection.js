import '../../../../require.js';
import '../../../../exports.js';
import '../cursorCommon.js';
import '../core/position.js';
import '../core/range.js';
define(de[2722], he([1, 0, 346, 48, 17]), function (ce /*require*/,
 e /*exports*/,
 t /*cursorCommon*/,
 i /*position*/,
 w /*range*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$vtb = void 0);
			class E {
				static columnSelect(d, m, r, u, a, h) {
					const c = Math.abs(a - r) + 1,
						n = r > a,
						g = u > h,
						p = u < h,
						o = [];
					for (let f = 0; f < c; f++) {
						const b = r + (n ? -f : f),
							s = d.columnFromVisibleColumn(m, b, u),
							l = d.columnFromVisibleColumn(m, b, h),
							y = d.visibleColumnFromColumn(m, new i.$hL(b, s)),
							$ = d.visibleColumnFromColumn(m, new i.$hL(b, l));
						(p && (y > h || $ < u)) ||
							(g && ($ > u || y < h)) ||
							o.push(
								new t.$Bsb(
									new w.$iL(b, s, b, s),
									t.SelectionStartKind.Simple,
									0,
									new i.$hL(b, l),
									0,
								),
							);
					}
					if (o.length === 0)
						for (let f = 0; f < c; f++) {
							const b = r + (n ? -f : f),
								s = m.getLineMaxColumn(b);
							o.push(
								new t.$Bsb(
									new w.$iL(b, s, b, s),
									t.SelectionStartKind.Simple,
									0,
									new i.$hL(b, s),
									0,
								),
							);
						}
					return {
						viewStates: o,
						reversed: n,
						fromLineNumber: r,
						fromVisualColumn: u,
						toLineNumber: a,
						toVisualColumn: h,
					};
				}
				static columnSelectLeft(d, m, r) {
					let u = r.toViewVisualColumn;
					return (
						u > 0 && u--,
						E.columnSelect(
							d,
							m,
							r.fromViewLineNumber,
							r.fromViewVisualColumn,
							r.toViewLineNumber,
							u,
						)
					);
				}
				static columnSelectRight(d, m, r) {
					let u = 0;
					const a = Math.min(r.fromViewLineNumber, r.toViewLineNumber),
						h = Math.max(r.fromViewLineNumber, r.toViewLineNumber);
					for (let n = a; n <= h; n++) {
						const g = m.getLineMaxColumn(n),
							p = d.visibleColumnFromColumn(m, new i.$hL(n, g));
						u = Math.max(u, p);
					}
					let c = r.toViewVisualColumn;
					return (
						c < u && c++,
						this.columnSelect(
							d,
							m,
							r.fromViewLineNumber,
							r.fromViewVisualColumn,
							r.toViewLineNumber,
							c,
						)
					);
				}
				static columnSelectUp(d, m, r, u) {
					const a = u ? d.pageSize : 1,
						h = Math.max(1, r.toViewLineNumber - a);
					return this.columnSelect(
						d,
						m,
						r.fromViewLineNumber,
						r.fromViewVisualColumn,
						h,
						r.toViewVisualColumn,
					);
				}
				static columnSelectDown(d, m, r, u) {
					const a = u ? d.pageSize : 1,
						h = Math.min(m.getLineCount(), r.toViewLineNumber + a);
					return this.columnSelect(
						d,
						m,
						r.fromViewLineNumber,
						r.fromViewVisualColumn,
						h,
						r.toViewVisualColumn,
					);
				}
			}
			e.$vtb = E;
		})
