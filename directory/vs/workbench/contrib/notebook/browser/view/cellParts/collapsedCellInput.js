import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/browser/dom.js';
import '../cellPart.js';
define(de[3101], he([1, 0, 7, 294]), function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*cellPart*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$63b = void 0),
				(t = mt(t));
			class w extends i.$A1b {
				constructor(C, d) {
					super(),
						(this.a = C),
						this.D(
							t.$0fb(d, t.$$gb.DBLCLICK, (m) => {
								!this.c ||
									!this.a.hasModel() ||
									(this.c.isInputCollapsed
										? (this.c.isInputCollapsed = !1)
										: (this.c.isOutputCollapsed = !1));
							}),
						),
						this.D(
							t.$0fb(d, t.$$gb.CLICK, (m) => {
								if (!this.c || !this.a.hasModel()) return;
								const r = m.target;
								r &&
									r.classList &&
									r.classList.contains("expandInputIcon") &&
									(this.c.isInputCollapsed = !1);
							}),
						);
				}
			}
			e.$63b = w;
		}),
		