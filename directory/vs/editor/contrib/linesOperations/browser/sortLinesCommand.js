import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/core/editOperation.js';
import '../../../common/core/range.js';
define(de[2589], he([1, 0, 188, 17]), function (ce /*require*/,
 e /*exports*/,
 t /*editOperation*/,
 i /*range*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Tic = void 0);
			class w {
				static {
					this.a = null;
				}
				static getCollator() {
					return w.a || (w.a = new Intl.Collator()), w.a;
				}
				constructor(m, r) {
					(this.b = m), (this.c = r), (this.d = null);
				}
				getEditOperations(m, r) {
					const u = C(m, this.b, this.c);
					u && r.addEditOperation(u.range, u.text),
						(this.d = r.trackSelection(this.b));
				}
				computeCursorState(m, r) {
					return r.getTrackedSelection(this.d);
				}
				static canRun(m, r, u) {
					if (m === null) return !1;
					const a = E(m, r, u);
					if (!a) return !1;
					for (let h = 0, c = a.before.length; h < c; h++)
						if (a.before[h] !== a.after[h]) return !0;
					return !1;
				}
			}
			e.$Tic = w;
			function E(d, m, r) {
				const u = m.startLineNumber;
				let a = m.endLineNumber;
				if ((m.endColumn === 1 && a--, u >= a)) return null;
				const h = [];
				for (let n = u; n <= a; n++) h.push(d.getLineContent(n));
				let c = h.slice(0);
				return (
					c.sort(w.getCollator().compare),
					r === !0 && (c = c.reverse()),
					{ startLineNumber: u, endLineNumber: a, before: h, after: c }
				);
			}
			function C(d, m, r) {
				const u = E(d, m, r);
				return u
					? t.$jL.replace(
							new i.$iL(
								u.startLineNumber,
								1,
								u.endLineNumber,
								d.getLineMaxColumn(u.endLineNumber),
							),
							u.after.join(`
`),
						)
					: null;
			}
		}),
		