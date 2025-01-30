import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/uuid.js';
define(de[1718], he([1, 0, 47]), function (ce /*require*/,
 e /*exports*/,
 t /*uuid*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$_cc = i);
			function i(w) {
				return {
					bugbotId: w ?? (0, t.$9g)(),
					requestId: void 0,
					isBackground: !1,
					status: { type: "none" },
					text: "",
					createdAt: Date.now(),
					fileSnapshots: {},
					fileSnapshotsPreDiff: {},
					resolvedBugs: {},
					bugFeedback: {},
				};
			}
		}),
		