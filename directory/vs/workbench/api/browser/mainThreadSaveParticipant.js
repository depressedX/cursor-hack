import '../../../../require.js';
import '../../../../exports.js';
import '../../../editor/common/model.js';
import '../../../nls.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../services/textfile/common/textfiles.js';
import '../common/extHost.protocol.js';
import '../../../base/common/async.js';
define(
			de[3677],
			he([1, 0, 64, 4, 5, 101, 85, 88, 15]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$koc = void 0);
				class r {
					constructor(h) {
						this.a = h.getProxy(d.$mbb.ExtHostDocumentSaveParticipant);
					}
					async participate(h, c, n, g) {
						if (!h.textEditorModel || !(0, t.$TN)(h.textEditorModel)) return;
						const p = new Promise((o, f) => {
							setTimeout(() => f(new Error((0, i.localize)(2578, null))), 1750),
								this.a
									.$participateInSave(h.resource, c.reason)
									.then((b) => {
										if (!b.every((s) => s))
											return Promise.reject(new Error("listener failed"));
									})
									.then(o, f);
						});
						return (0, m.$Bh)(p, g);
					}
				}
				let u = class {
					constructor(h, c, n) {
						(this.b = n),
							(this.a = this.b.files.addSaveParticipant(
								c.createInstance(r, h),
							));
					}
					dispose() {
						this.a.dispose();
					}
				};
				(e.$koc = u), (e.$koc = u = Ne([E.$umc, j(1, w.$Li), j(2, C.$kZ)], u));
			},
		),
		