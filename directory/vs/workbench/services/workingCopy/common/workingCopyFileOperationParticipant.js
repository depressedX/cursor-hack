import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/log/common/log.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../base/common/linkedList.js';
define(de[3856], he([1, 0, 34, 3, 10, 273]), function (ce /*require*/,
 e /*exports*/,
 t /*log*/,
 i /*lifecycle*/,
 w /*configuration*/,
 E /*linkedList*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$9Y = void 0);
			let C = class extends i.$1c {
				constructor(m, r) {
					super(), (this.b = m), (this.c = r), (this.a = new E.$$c());
				}
				addFileOperationParticipant(m) {
					const r = this.a.push(m);
					return (0, i.$Yc)(() => r());
				}
				async participate(m, r, u, a) {
					const h = this.c.getValue("files.participants.timeout");
					if (!(typeof h != "number" || h <= 0))
						for (const c of this.a)
							try {
								await c.participate(m, r, u, h, a);
							} catch (n) {
								this.b.warn(n);
							}
				}
				dispose() {
					this.a.clear(), super.dispose();
				}
			};
			(e.$9Y = C), (e.$9Y = C = Ne([j(0, t.$ik), j(1, w.$gj)], C));
		}),
		