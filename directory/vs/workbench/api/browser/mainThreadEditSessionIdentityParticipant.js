import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../../base/common/async.js';
import '../../../platform/workspace/common/editSessions.js';
import '../common/extHost.protocol.js';
define(
			de[3348],
			he([1, 0, 4, 5, 101, 15, 781, 88]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*instantiation*/,
 w /*extHostCustomers*/,
 E /*async*/,
 C /*editSessions*/,
 d /*extHost.protocol*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$moc = void 0);
				class m {
					constructor(a) {
						(this.b = 1e4), (this.a = a.getProxy(d.$mbb.ExtHostWorkspace));
					}
					async participate(a, h) {
						const c = new Promise((n, g) => {
							setTimeout(
								() => g(new Error((0, t.localize)(2539, null))),
								this.b,
							),
								this.a
									.$onWillCreateEditSessionIdentity(a.uri, h, this.b)
									.then(n, g);
						});
						return (0, E.$Bh)(c, h);
					}
				}
				let r = class {
					constructor(a, h, c) {
						(this.b = c),
							(this.a = this.b.addEditSessionIdentityCreateParticipant(
								h.createInstance(m, a),
							));
					}
					dispose() {
						this.a.dispose();
					}
				};
				(e.$moc = r), (e.$moc = r = Ne([w.$umc, j(1, i.$Li), j(2, C.$O8)], r));
			},
		),
		