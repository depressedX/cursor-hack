import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/contextkey/common/contextkey.js';
define(de[419], he([1, 0, 4, 5, 8]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Zpc = e.$Ypc = e.$Xpc = e.$Wpc = e.$Vpc = e.$Upc = e.$Tpc = void 0),
				(t = mt(t)),
				(e.$Tpc = new w.$5j(
					"customExecutionSupported",
					!1,
					t.localize(9948, null),
				)),
				(e.$Upc = new w.$5j(
					"shellExecutionSupported",
					!1,
					t.localize(9949, null),
				)),
				(e.$Vpc = new w.$5j(
					"taskCommandsRegistered",
					!1,
					t.localize(9950, null),
				)),
				(e.$Wpc = new w.$5j(
					"processExecutionSupported",
					!1,
					t.localize(9951, null),
				)),
				(e.$Xpc = new w.$5j(
					"serverlessWebContext",
					!1,
					t.localize(9952, null),
				)),
				(e.$Ypc = w.$Kj.or(w.$Kj.and(e.$Upc, e.$Wpc), e.$Tpc)),
				(e.$Zpc = (0, i.$Mi)("taskService"));
		}),
		