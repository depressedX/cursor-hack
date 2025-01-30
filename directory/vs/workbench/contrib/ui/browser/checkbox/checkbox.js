import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../css!vs/workbench/contrib/ui/browser/checkbox/checkbox.js';
define(
			de[1006],
			he([1, 0, 2, 2, 2, 13, 2512]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$XCc = void 0);
				const C = (0, t.template)("<div>"),
					d = (m) => {
						const r = (0, E.createMemo)(() => m.size || "medium");
						return (() => {
							const u = C();
							return (
								u.addEventListener("click", () => m.onChange(!m.value)),
								(0, w.effect)(() =>
									(0, i.className)(
										u,
										`cursor-setting-value-checkbox codicon codicon-check${m.value ? " checked" : ""} ${r}`,
									),
								),
								u
							);
						})();
					};
				e.$XCc = d;
			},
		),
		