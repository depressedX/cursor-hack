import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/platform.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/theme/common/iconRegistry.js';
define(
			de[1246],
			he([1, 0, 4, 14, 12, 8, 79]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$h2c = e.$g2c = e.$f2c = e.$e2c = void 0),
					(e.$d2c = m);
				let d;
				function m() {
					if (!d) {
						const r = {
							year: "numeric",
							month: "long",
							day: "numeric",
							hour: "numeric",
							minute: "numeric",
						};
						let u;
						try {
							u = new Intl.DateTimeFormat(w.$z, r);
						} catch {
							u = new Intl.DateTimeFormat(void 0, r);
						}
						d = { format: (a) => u.format(a) };
					}
					return d;
				}
				(e.$e2c = "localHistory:item"),
					(e.$f2c = E.$Kj.equals("timelineItem", e.$e2c)),
					(e.$g2c = (0, C.$$O)(
						"localHistory-icon",
						i.$ak.circleOutline,
						(0, t.localize)(7356, null),
					)),
					(e.$h2c = (0, C.$$O)(
						"localHistory-restore",
						i.$ak.check,
						(0, t.localize)(7357, null),
					));
			},
		),
		