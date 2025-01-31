import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
define(de[792], he([1, 0, 2, 2, 2, 2]), function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ComposerToolCallBlockContainer = d);
			const C = (0, t.template)("<div>");
			function d(m) {
				return (() => {
					const r = C();
					return (
						(0, E.insert)(r, () => m.children),
						(0, w.effect)((u) =>
							(0, i.style)(
								r,
								{
									background: "var(--vscode-editor-background)",
									"border-radius": "2px",
									border:
										"1px solid var(--vscode-commandCenter-inactiveBorder)",
									contain: "paint",
									padding: "6px 8px",
									width: "100%",
									"box-sizing": "border-box",
									"font-size": "12px",
									margin: "8px 0",
									...m.style,
								},
								u,
							),
						),
						r
					);
				})();
			}
		})
