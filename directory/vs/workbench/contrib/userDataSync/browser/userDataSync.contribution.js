import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/contributions.js';
import '../../../../platform/registry/common/platform.js';
import '../../../services/lifecycle/common/lifecycle.js';
import './userDataSync.js';
import '../../../../platform/userDataSync/common/userDataSync.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../base/common/lifecycle.js';
import '../../../../nls.js';
import '../../../../base/common/platform.js';
import './userDataSyncTrigger.js';
import '../../../../base/common/actions.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/commands/common/commands.js';
import '../../../services/host/browser/host.js';
import '../../../services/userDataSync/common/userDataSync.js';
define(
			de[4052],
			he([
				1, 0, 55, 30, 52, 4051, 150, 40, 3, 4, 12, 3848, 50, 62, 31, 87, 522,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*contributions*/,
 i /*platform*/,
 w /*lifecycle*/,
 E /*userDataSync*/,
 C /*userDataSync*/,
 d /*notification*/,
 m /*lifecycle*/,
 r /*nls*/,
 u /*platform*/,
 a /*userDataSyncTrigger*/,
 h /*actions*/,
 c /*productService*/,
 n /*commands*/,
 g /*host*/,
 p /*userDataSync*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let o = class extends m.$1c {
					constructor(s, l, y, $, v) {
						super(),
							(this.a = l),
							(this.b = y),
							(this.c = $),
							(this.f = v),
							this.D(s.onError((S) => this.g(S)));
					}
					g(s) {
						switch (s.code) {
							case C.UserDataSyncErrorCode.LocalTooManyRequests: {
								const l = u.$r
									? (0, r.localize)(11234, null, this.b.nameLong)
									: (0, r.localize)(11235, null, this.b.nameLong);
								this.a.notify({
									severity: d.Severity.Error,
									message: l,
									actions: {
										primary: [
											new h.$rj(
												"Show Sync Logs",
												(0, r.localize)(11236, null),
												void 0,
												!0,
												() => this.c.executeCommand(p.$Yxc),
											),
											new h.$rj(
												"Restart",
												u.$r
													? (0, r.localize)(11237, null)
													: (0, r.localize)(11238, null),
												void 0,
												!0,
												() => this.f.restart(),
											),
										],
									},
								});
								return;
							}
							case C.UserDataSyncErrorCode.TooManyRequests: {
								const l = s.operationId
										? (0, r.localize)(11239, null, s.operationId)
										: void 0,
									y = (0, r.localize)(11240, null);
								this.a.notify({
									severity: d.Severity.Error,
									message: l ? `${y} ${l}` : y,
									source: s.operationId
										? (0, r.localize)(11241, null, s.operationId)
										: void 0,
									actions: {
										primary: [
											new h.$rj(
												"Show Sync Logs",
												(0, r.localize)(11242, null),
												void 0,
												!0,
												() => this.c.executeCommand(p.$Yxc),
											),
										],
									},
								});
								return;
							}
						}
					}
				};
				o = Ne(
					[j(0, C.$7Rb), j(1, d.$4N), j(2, c.$Bk), j(3, n.$ek), j(4, g.$asb)],
					o,
				);
				const f = i.$Io.as(t.Extensions.Workbench);
				f.registerWorkbenchContribution(E.$e1c, w.LifecyclePhase.Restored),
					f.registerWorkbenchContribution(a.$f1c, w.LifecyclePhase.Eventually),
					f.registerWorkbenchContribution(o, w.LifecyclePhase.Eventually);
			},
		)
