import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/core/editOperation.js';
import '../../../common/core/range.js';
import '../../../browser/stableEditorScroll.js';
define(de[1552], he([1, 0, 188, 17, 491]), function (ce /*require*/,
 e /*exports*/,
 t /*editOperation*/,
 i /*range*/,
 w /*stableEditorScroll*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Ihc = void 0);
			class E {
				static a(d, m) {
					let r;
					const u = [];
					for (const a of m)
						typeof a.eol == "number" && (r = a.eol),
							a.range && typeof a.text == "string" && u.push(a);
					return (
						typeof r == "number" && d.hasModel() && d.getModel().pushEOL(r), u
					);
				}
				static b(d, m) {
					if (!d.hasModel()) return !1;
					const r = d.getModel(),
						u = r.validateRange(m.range);
					return r.getFullModelRange().equalsRange(u);
				}
				static execute(d, m, r) {
					r && d.pushUndoStop();
					const u = w.$uwb.capture(d),
						a = E.a(d, m);
					a.length === 1 && E.b(d, a[0])
						? d.executeEdits(
								"formatEditsCommand",
								a.map((h) => t.$jL.replace(i.$iL.lift(h.range), h.text)),
							)
						: d.executeEdits(
								"formatEditsCommand",
								a.map((h) => t.$jL.replaceMove(i.$iL.lift(h.range), h.text)),
							),
						r && d.pushUndoStop(),
						u.restoreRelativeVerticalPositionOfCursor(d);
				}
			}
			e.$Ihc = E;
		})
