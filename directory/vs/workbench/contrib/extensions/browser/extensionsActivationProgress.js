import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../services/extensions/common/extensions.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../nls.js';
import '../../../../base/common/async.js';
import '../../../../platform/log/common/log.js';
import '../../../../base/common/cancellation.js';
define(
			de[3309],
			he([1, 0, 53, 84, 4, 15, 34, 33]),
			function (ce /*require*/,
 e /*exports*/,
 t /*extensions*/,
 i /*progress*/,
 w /*nls*/,
 E /*async*/,
 C /*log*/,
 d /*cancellation*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zTc = void 0);
				let m = class {
					constructor(u, a, h) {
						const c = {
							location: i.ProgressLocation.Window,
							title: (0, w.localize)(6411, null),
						};
						let n,
							g = 0;
						this.a = u.onWillActivateByEvent((p) => {
							h.trace("onWillActivateByEvent: ", p.event),
								n || ((n = new E.$0h()), a.withProgress(c, (o) => n.p)),
								g++,
								Promise.race([
									p.activation,
									(0, E.$Nh)(5e3, d.CancellationToken.None),
								]).finally(() => {
									--g === 0 && (n.complete(void 0), (n = void 0));
								});
						});
					}
					dispose() {
						this.a.dispose();
					}
				};
				(e.$zTc = m),
					(e.$zTc = m = Ne([j(0, t.$q2), j(1, i.$8N), j(2, C.$ik)], m));
			},
		)
