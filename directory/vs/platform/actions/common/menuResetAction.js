import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../action/common/actionCommonCategories.js';
import './actions.js';
import '../../log/common/log.js';
define(de[2779], he([1, 0, 4, 99, 11, 34]), function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*actionCommonCategories*/,
 w /*actions*/,
 E /*log*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$avc = void 0);
			class C extends w.$3X {
				constructor() {
					super({
						id: "menu.resetHiddenStates",
						title: (0, t.localize2)(1660, "Reset All Menus"),
						category: i.$ck.View,
						f1: !0,
					});
				}
				run(m) {
					m.get(w.$YX).resetHiddenStates(),
						m.get(E.$ik).info("did RESET all menu hidden states");
				}
			}
			e.$avc = C;
		}),
		