import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../../../../platform/log/common/log.js';
import './debug.js';
define(de[3056], he([1, 0, 3, 91, 34, 112]), function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*accessibility*/,
 w /*log*/,
 E /*debug*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$oRc = void 0);
			let C = class extends t.$1c {
				static {
					this.ID = "debug.replAccessibilityAnnouncer";
				}
				constructor(m, r, u) {
					super();
					const a = m.getViewModel();
					this.D(
						a.onDidFocusSession((h) => {
							h &&
								this.D(
									h.onDidChangeReplElements((c) => {
										if (!c || !("originalExpression" in c)) return;
										const n = c.toString();
										r.status(n),
											u.trace(
												"ReplAccessibilityAnnouncer#onDidChangeReplElements",
												c.originalExpression + ": " + n,
											);
									}),
								);
						}),
					);
				}
			};
			(e.$oRc = C),
				(e.$oRc = C = Ne([j(0, E.$75), j(1, i.$XK), j(2, w.$ik)], C));
		})
