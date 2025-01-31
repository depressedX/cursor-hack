import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
define(de[974], he([1, 0, 2, 2, 2, 2]), function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$eDc = d);
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
									height: "100%",
									padding: "18px",
									"padding-bottom": "64px",
									"padding-top": "18px",
									display: "flex",
									"box-sizing": "border-box",
									"flex-direction": "column",
									gap: "30px",
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
