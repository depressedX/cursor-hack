import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../nls.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../platform/log/common/log.js';
define(de[3094], he([1, 0, 4, 3, 34]), function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*lifecycle*/,
 w /*log*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$SGc = void 0),
				(t = mt(t));
			const E = "notebook.rendering";
			let C = class extends i.$1c {
				static {
					this.ID = "notebook";
				}
				constructor(m) {
					super(),
						(this.a = this.D(
							m.createLogger(E, { name: t.localize(8182, null) }),
						));
				}
				debug(m, r) {
					this.a.debug(`[${m}] ${r}`);
				}
				info(m, r) {
					this.a.info(`[${m}] ${r}`);
				}
				warn(m, r) {
					this.a.warn(`[${m}] ${r}`);
				}
				error(m, r) {
					this.a.error(`[${m}] ${r}`);
				}
			};
			(e.$SGc = C), (e.$SGc = C = Ne([j(0, w.$jk)], C));
		})
