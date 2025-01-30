import '../../../../require.js';
import '../../../../exports.js';
import '../../contextkey/common/contextkey.js';
import '../../instantiation/common/instantiation.js';
define(de[91], he([1, 0, 8, 5]), function (ce /*require*/,
 e /*exports*/,
 t /*contextkey*/,
 i /*instantiation*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$1K = e.$YK = e.AccessibilitySupport = e.$XK = void 0),
				(e.$ZK = E),
				(e.$XK = (0, i.$Mi)("accessibilityService"));
			var w;
			(function (C) {
				(C[(C.Unknown = 0)] = "Unknown"),
					(C[(C.Disabled = 1)] = "Disabled"),
					(C[(C.Enabled = 2)] = "Enabled");
			})(w || (e.AccessibilitySupport = w = {})),
				(e.$YK = new t.$5j("accessibilityModeEnabled", !1));
			function E(C) {
				return (
					C &&
					typeof C == "object" &&
					typeof C.label == "string" &&
					(typeof C.role > "u" || typeof C.role == "string")
				);
			}
			e.$1K = "ACCESSIBLE_VIEW_SHOWN_";
		}),
		