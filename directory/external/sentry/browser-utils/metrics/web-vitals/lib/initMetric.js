import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../types.js';
import './generateUniqueID.js';
import './getActivationStart.js';
import './getNavigationEntry.js';
define(
			de[637],
			he([1, 0, 366, 2056, 728, 883]),
			function (ce /*require*/,
 e /*exports*/,
 t /*types*/,
 i /*generateUniqueID*/,
 w /*getActivationStart*/,
 E /*getNavigationEntry*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.initMetric = void 0);
				const C = (d, m) => {
					const r = (0, E.getNavigationEntry)();
					let u = "navigate";
					return (
						r &&
							((t.WINDOW.document && t.WINDOW.document.prerendering) ||
							(0, w.getActivationStart)() > 0
								? (u = "prerender")
								: t.WINDOW.document && t.WINDOW.document.wasDiscarded
									? (u = "restore")
									: r.type && (u = r.type.replace(/_/g, "-"))),
						{
							name: d,
							value: typeof m > "u" ? -1 : m,
							rating: "good",
							delta: 0,
							entries: [],
							id: (0, i.generateUniqueID)(),
							navigationType: u,
						}
					);
				};
				e.initMetric = C;
			},
		)
