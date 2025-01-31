import '../../../../require.js';
import '../../../../exports.js';
import '../../../platform/progress/common/progress.js';
import '../common/extHost.protocol.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../../base/common/actions.js';
import '../../../platform/commands/common/commands.js';
import '../../../nls.js';
define(
			de[3361],
			he([1, 0, 84, 88, 101, 50, 31, 4]),
			function (ce /*require*/,
 e /*exports*/,
 t /*progress*/,
 i /*extHost.protocol*/,
 w /*extHostCustomers*/,
 E /*actions*/,
 C /*commands*/,
 d /*nls*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$goc = void 0);
				class m extends E.$rj {
					constructor(a, h, c) {
						super(a, h, void 0, !0, () =>
							c.executeCommand("_extensions.manage", a),
						);
					}
				}
				let r = class {
					constructor(a, h, c) {
						(this.d = c),
							(this.b = new Map()),
							(this.c = a.getProxy(i.$mbb.ExtHostProgress)),
							(this.a = h);
					}
					dispose() {
						this.b.forEach((a) => a.resolve()), this.b.clear();
					}
					async $startProgress(a, h, c) {
						const n = this.e(a);
						h.location === t.ProgressLocation.Notification &&
							c &&
							(h = {
								...h,
								location: t.ProgressLocation.Notification,
								secondaryActions: [
									new m(c, (0, d.localize)(2577, null), this.d),
								],
							}),
							this.a.withProgress(h, n, () =>
								this.c.$acceptProgressCanceled(a),
							);
					}
					$progressReport(a, h) {
						this.b.get(a)?.progress.report(h);
					}
					$progressEnd(a) {
						const h = this.b.get(a);
						h && (h.resolve(), this.b.delete(a));
					}
					e(a) {
						return (h) =>
							new Promise((c) => {
								this.b.set(a, { resolve: c, progress: h });
							});
					}
				};
				(e.$goc = r),
					(e.$goc = r =
						Ne(
							[
								(0, w.$tmc)(i.$lbb.MainThreadProgress),
								j(1, t.$8N),
								j(2, C.$ek),
							],
							r,
						));
			},
		)
