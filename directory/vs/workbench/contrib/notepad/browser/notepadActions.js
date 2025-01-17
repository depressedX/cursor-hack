import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/actions/common/actions.js';
import './constants.js';
import './notepad.js';
import '../../../../base/common/codicons.js';
define(
			de[1743],
			he([1, 0, 11, 558, 467, 14]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wAc = void 0);
				class C extends t.$3X {
					static {
						this.ID = "workbench.action.createAndOpenNotepad";
					}
					static {
						this.TITLE = "Notepad: Create and Open New Notepad";
					}
					constructor() {
						super({
							id: C.ID,
							title: { value: C.TITLE, original: C.TITLE },
							menu: { id: i.$C9b, group: "navigation", order: 10 },
							icon: E.$ak.plus,
							f1: !0,
						});
					}
					async run(m) {
						m.get(w.$z9b).createNotepad(void 0, { view: "editor" });
					}
				}
				(e.$wAc = C), (0, t.$4X)(C);
			},
		),
		