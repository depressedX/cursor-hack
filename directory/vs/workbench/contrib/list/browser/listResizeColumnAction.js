import '../../../../../require.js';
import '../../../../../exports.js';
import './tableColumnResizeQuickPick.js';
import '../../../../base/browser/ui/table/tableWidget.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../nls.js';
define(
			de[3072],
			he([1, 0, 3071, 1167, 5, 93, 11, 4]),
			function (ce /*require*/,
 e /*exports*/,
 t /*tableColumnResizeQuickPick*/,
 i /*tableWidget*/,
 w /*instantiation*/,
 E /*listService*/,
 C /*actions*/,
 d /*nls*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$u2c = void 0);
				class m extends C.$3X {
					constructor() {
						super({
							id: "list.resizeColumn",
							title: {
								value: (0, d.localize)(7349, null),
								original: "Resize Column",
							},
							category: {
								value: (0, d.localize)(7350, null),
								original: "List",
							},
							precondition: E.$nMb,
							f1: !0,
						});
					}
					async run(u) {
						const a = u.get(E.$fMb),
							h = u.get(w.$Li),
							c = a.lastFocusedList;
						c instanceof i.$ipb && (await h.createInstance(t.$t2c, c).show());
					}
				}
				e.$u2c = m;
			},
		)
