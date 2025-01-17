import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../css!vs/workbench/contrib/aiSettings/browser/components/settings/settingsGroup.js';
define(
			de[2998],
			he([1, 0, 2, 2, 2, 2, 2372]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$UCc = d);
				const C = (0, t.template)('<div class="settings-group">');
				function d(m) {
					return (() => {
						const r = C();
						return (
							(0, E.insert)(r, () => m.children),
							(0, w.effect)((u) =>
								(0, i.style)(
									r,
									{
										"border-left":
											"1px dashed var(--vscode-commandCenter-inactiveBorder)",
										padding: "0px 12px",
										"padding-bottom": "4px",
										"margin-left": "8px",
										...m.style,
									},
									u,
								),
							),
							r
						);
					})();
				}
			},
		),
		