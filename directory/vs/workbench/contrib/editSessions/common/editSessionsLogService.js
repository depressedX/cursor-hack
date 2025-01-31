import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/resources.js';
import '../../../../nls.js';
import '../../../../platform/environment/common/environment.js';
import '../../../../platform/log/common/log.js';
import './editSessions.js';
define(
			de[3059],
			he([1, 0, 19, 4, 113, 34, 685]),
			function (ce /*require*/,
 e /*exports*/,
 t /*resources*/,
 i /*nls*/,
 w /*environment*/,
 E /*log*/,
 C /*editSessions*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Q1c = void 0);
				let d = class extends E.$nk {
					constructor(r, u) {
						super(),
							(this.g = this.D(
								r.createLogger((0, t.$nh)(u.logsHome, `${C.$O1c}.log`), {
									id: C.$O1c,
									name: (0, i.localize)(5994, null),
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
				(e.$Q1c = d), (e.$Q1c = d = Ne([j(0, E.$jk), j(1, w.$Ti)], d));
			},
		)
