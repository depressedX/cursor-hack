import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../nls.js';
define(de[996], he([1, 0, 4]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$AVc = e.TerminalAccessibilitySettingId = void 0);
			var i;
			(function (w) {
				(w.AccessibleViewPreserveCursorPosition =
					"terminal.integrated.accessibleViewPreserveCursorPosition"),
					(w.AccessibleViewFocusOnCommandExecution =
						"terminal.integrated.accessibleViewFocusOnCommandExecution");
			})(i || (e.TerminalAccessibilitySettingId = i = {})),
				(e.$AVc = {
					[i.AccessibleViewPreserveCursorPosition]: {
						markdownDescription: (0, t.localize)(10448, null),
						type: "boolean",
						default: !1,
					},
					[i.AccessibleViewFocusOnCommandExecution]: {
						markdownDescription: (0, t.localize)(10449, null),
						type: "boolean",
						default: !1,
					},
				});
		}),
		