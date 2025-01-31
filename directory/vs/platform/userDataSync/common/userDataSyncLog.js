import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/resources.js';
import '../../../nls.js';
import '../../environment/common/environment.js';
import '../../log/common/log.js';
import './userDataSync.js';
define(
			de[2886],
			he([1, 0, 19, 4, 113, 34, 150]),
			function (ce /*require*/,
 e /*exports*/,
 t /*resources*/,
 i /*nls*/,
 w /*environment*/,
 E /*log*/,
 C /*userDataSync*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$WAc = void 0);
				let d = class extends E.$nk {
					constructor(r, u) {
						super(),
							(this.g = this.D(
								r.createLogger((0, t.$nh)(u.logsHome, `${C.$0Rb}.log`), {
									id: C.$0Rb,
									name: (0, i.localize)(2464, null),
								}),
							));
					}
					trace(r, ...u) {
						this.g.trace(r, ...u);
					}
					debug(r, ...u) {
						this.g.debug(r, ...u);
					}
					info(r, ...u) {
						this.g.info(r, ...u);
					}
					warn(r, ...u) {
						this.g.warn(r, ...u);
					}
					error(r, ...u) {
						this.g.error(r, ...u);
					}
					flush() {
						this.g.flush();
					}
				};
				(e.$WAc = d), (e.$WAc = d = Ne([j(0, E.$jk), j(1, w.$Ti)], d));
			},
		)
