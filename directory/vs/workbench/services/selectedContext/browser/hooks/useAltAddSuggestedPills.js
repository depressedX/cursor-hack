import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/lexical/lexical/lexical.js';
import '../../../../../../external/solid/solid.js';
define(de[3603], he([1, 0, 158, 13]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$9bc = E);
			const w = {
				1: t.KEY_ALT_1_COMMAND,
				2: t.KEY_ALT_2_COMMAND,
				3: t.KEY_ALT_3_COMMAND,
				4: t.KEY_ALT_4_COMMAND,
				5: t.KEY_ALT_5_COMMAND,
			};
			function E(C) {
				return (0, i.createMemo)(() =>
					Array.from({ length: C.count }).map((r, u) => ({
						command: w[u + 1],
						callback: (a) => {
							const c = C.suggestedPills().filter(
								(n) => n.type === "gitGraphFileSuggestion",
							)[u];
							return !c || !c?.onClick ? !1 : (c.onClick?.(), !0);
						},
					})),
				);
			}
		}),
		