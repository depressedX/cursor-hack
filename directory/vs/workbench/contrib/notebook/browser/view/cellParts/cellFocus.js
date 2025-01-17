import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/browser/dom.js';
import '../cellPart.js';
define(de[3097], he([1, 0, 7, 294]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$L3b = void 0),
				(t = mt(t));
			class w extends i.$A1b {
				constructor(C, d, m) {
					super(),
						this.D(
							t.$0fb(
								C,
								t.$$gb.FOCUS,
								() => {
									this.c && m.focusElement(this.c);
								},
								!0,
							),
						),
						d &&
							this.D(
								t.$0fb(d, t.$$gb.FOCUS, () => {
									this.c &&
										this.c.outputsViewModels.length &&
										m.focusNotebookCell(this.c, "output");
								}),
							);
				}
			}
			e.$L3b = w;
		}),
		