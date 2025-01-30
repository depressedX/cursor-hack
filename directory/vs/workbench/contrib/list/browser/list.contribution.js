import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../common/contributions.js';
import '../../../../platform/actions/common/actions.js';
import './listResizeColumnAction.js';
define(de[3430], he([1, 0, 8, 55, 11, 3072]), function (ce /*require*/,
 e /*exports*/,
 t /*contextkey*/,
 i /*contributions*/,
 w /*actions*/,
 E /*listResizeColumnAction*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$v2c = void 0);
			let C = class {
				static {
					this.ID = "workbench.contrib.listContext";
				}
				constructor(m) {
					m.createKey("listSupportsTypeNavigation", !0),
						m.createKey("listSupportsKeyboardNavigation", !0);
				}
			};
			(e.$v2c = C),
				(e.$v2c = C = Ne([j(0, t.$6j)], C)),
				(0, i.$s6)(C.ID, C, i.WorkbenchPhase.BlockStartup),
				(0, w.$4X)(E.$u2c);
		}),
		