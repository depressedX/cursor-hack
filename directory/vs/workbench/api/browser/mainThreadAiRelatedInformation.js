import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/lifecycle.js';
import '../common/extHost.protocol.js';
import '../../services/aiRelatedInformation/common/aiRelatedInformation.js';
import '../../services/extensions/common/extHostCustomers.js';
define(
			de[3337],
			he([1, 0, 33, 3, 88, 1013, 101]),
			function (ce /*require*/,
 e /*exports*/,
 t /*cancellation*/,
 i /*lifecycle*/,
 w /*extHost.protocol*/,
 E /*aiRelatedInformation*/,
 C /*extHostCustomers*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Rqc = void 0);
				let d = class extends i.$1c {
					constructor(r, u) {
						super(),
							(this.c = u),
							(this.b = this.D(new i.$0c())),
							(this.a = r.getProxy(w.$mbb.ExtHostAiRelatedInformation));
					}
					$getAiRelatedInformation(r, u) {
						return this.c.getRelatedInformation(r, u, t.CancellationToken.None);
					}
					$registerAiRelatedInformationProvider(r, u) {
						const a = {
							provideAiRelatedInformation: (h, c) =>
								this.a.$provideAiRelatedInformation(r, h, c),
						};
						this.b.set(r, this.c.registerAiRelatedInformationProvider(u, a));
					}
					$unregisterAiRelatedInformationProvider(r) {
						this.b.deleteAndDispose(r);
					}
				};
				(e.$Rqc = d),
					(e.$Rqc = d =
						Ne(
							[(0, C.$tmc)(w.$lbb.MainThreadAiRelatedInformation), j(1, E.$97)],
							d,
						));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	