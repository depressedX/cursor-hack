import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
define(de[166], he([1, 0, 5]), function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$h6b = e.$g6b = e.StatusbarAlignment = e.$d6b = void 0),
				(e.$e6b = w),
				(e.$f6b = E),
				(e.$d6b = (0, t.$Mi)("statusbarService"));
			var i;
			(function (C) {
				(C[(C.LEFT = 0)] = "LEFT"), (C[(C.RIGHT = 1)] = "RIGHT");
			})(i || (e.StatusbarAlignment = i = {}));
			function w(C) {
				const d = C;
				return typeof d?.id == "string" && typeof d.alignment == "number";
			}
			function E(C) {
				const d = C;
				return (
					(typeof d?.primary == "number" || w(d?.primary)) &&
					typeof d?.secondary == "number"
				);
			}
			(e.$g6b = { id: "statusBar.entry.showTooltip", title: "" }),
				(e.$h6b = [
					"standard",
					"warning",
					"error",
					"prominent",
					"remote",
					"offline",
				]);
		})
