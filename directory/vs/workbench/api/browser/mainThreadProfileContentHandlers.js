import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/marshalling.js';
import '../common/extHost.protocol.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../services/userDataProfile/common/userDataProfile.js';
define(
			de[3753],
			he([1, 0, 3, 197, 88, 101, 133]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Qqc = void 0);
				let d = class extends t.$1c {
					constructor(r, u) {
						super(),
							(this.c = u),
							(this.b = this.D(new t.$0c())),
							(this.a = r.getProxy(w.$mbb.ExtHostProfileContentHandlers));
					}
					async $registerProfileContentHandler(r, u, a, h) {
						this.b.set(
							r,
							this.c.registerProfileContentHandler(r, {
								name: u,
								description: a,
								extensionId: h,
								saveProfile: async (c, n, g) => {
									const p = await this.a.$saveProfile(r, c, n, g);
									return p ? (0, i.$ji)(p) : null;
								},
								readProfile: async (c, n) => this.a.$readProfile(r, c, n),
							}),
						);
					}
					async $unregisterProfileContentHandler(r) {
						this.b.deleteAndDispose(r);
					}
				};
				(e.$Qqc = d),
					(e.$Qqc = d =
						Ne(
							[
								(0, E.$tmc)(w.$lbb.MainThreadProfileContentHandlers),
								j(1, C.$W8),
							],
							d,
						));
			},
		),
		