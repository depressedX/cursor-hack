import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/actions.js';
import '../../../../nls.js';
define(de[2592], he([1, 0, 50, 4]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Jpb = void 0),
				(i = mt(i));
			class w extends t.$rj {
				constructor(C, d) {
					super("vs.tree.collapse", i.localize(40, null), "collapse-all", d),
						(this.a = C);
				}
				async run() {
					this.a.collapseAll(), this.a.setSelection([]), this.a.setFocus([]);
				}
			}
			e.$Jpb = w;
		}),
		