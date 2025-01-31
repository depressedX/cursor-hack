import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/codicons.js';
import '../../../base/common/themables.js';
import '../../../base/common/severity.js';
import '../../../css!vs/platform/severityIcon/browser/media/severityIcon.js';
define(de[673], he([1, 0, 14, 26, 111, 2330]), function (ce /*require*/,
 e /*exports*/,
 t /*codicons*/,
 i /*themables*/,
 w /*severity*/) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.SeverityIcon = void 0),
			(w = xi(w));
		var E;
		(function (C) {
			function d(m) {
				switch (m) {
					case w.default.Ignore:
						return "severity-ignore " + i.ThemeIcon.asClassName(t.$ak.info);
					case w.default.Info:
						return i.ThemeIcon.asClassName(t.$ak.info);
					case w.default.Warning:
						return i.ThemeIcon.asClassName(t.$ak.warning);
					case w.default.Error:
						return i.ThemeIcon.asClassName(t.$ak.error);
					default:
						return "";
				}
			}
			C.className = d;
		})(E || (e.SeverityIcon = E = {}));
	})
