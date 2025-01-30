import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/workspace/common/workspaceTrust.js';
import '../../../services/environment/common/environmentService.js';
import '../../../services/extensionManagement/common/extensionManagement.js';
import '../../../services/extensions/common/extensions.js';
import '../../../services/host/browser/host.js';
define(
			de[3385],
			he([1, 0, 4, 3, 174, 78, 157, 53, 87]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*lifecycle*/,
 w /*workspaceTrust*/,
 E /*environmentService*/,
 C /*extensionManagement*/,
 d /*extensions*/,
 m /*host*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$XTc = void 0);
				let r = class extends i.$1c {
					constructor(a, h, c, n, g, p) {
						super(),
							g.isWorkspaceTrustEnabled() &&
								p.workspaceTrustInitialized.then(() => {
									const o = new (class {
										async participate(f) {
											if (f)
												await n.updateExtensionsEnablementsWhenWorkspaceTrustChanges();
											else if (c.remoteAuthority) h.reload();
											else {
												const b = await a.stopExtensionHosts(
													(0, t.localize)(6062, null),
												);
												await n.updateExtensionsEnablementsWhenWorkspaceTrustChanges(),
													b && a.startExtensionHosts();
											}
										}
									})();
									this.D(p.addWorkspaceTrustTransitionParticipant(o));
								});
					}
				};
				(e.$XTc = r),
					(e.$XTc = r =
						Ne(
							[
								j(0, d.$q2),
								j(1, m.$asb),
								j(2, E.$r8),
								j(3, C.$IQb),
								j(4, w.$oO),
								j(5, w.$pO),
							],
							r,
						));
			},
		),
		