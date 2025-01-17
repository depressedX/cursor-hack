import '../../../../require.js';
import '../../../../exports.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../../platform/log/common/log.js';
import '../../../base/common/lifecycle.js';
import '../common/extHost.protocol.js';
import '../../../base/common/uri.js';
import '../../../platform/commands/common/commands.js';
import '../../../platform/environment/common/environment.js';
define(
			de[3357],
			he([1, 0, 101, 34, 3, 88, 9, 31, 113]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0nc = void 0);
				let r = class {
					constructor(a, h) {
						(this.b = h), (this.a = new w.$Zc());
						const c = a.getProxy(E.$mbb.ExtHostLogLevelServiceShape);
						this.a.add(
							h.onDidChangeLogLevel((n) => {
								(0, i.$kk)(n) ? c.$setLogLevel(n) : c.$setLogLevel(n[1], n[0]);
							}),
						);
					}
					$log(a, h) {
						const c = this.b.getLogger(C.URI.revive(a));
						if (!c) throw new Error("Create the logger before logging");
						for (const [n, g] of h) (0, i.log)(c, n, g);
					}
					async $createLogger(a, h) {
						this.b.createLogger(C.URI.revive(a), h);
					}
					async $registerLogger(a) {
						this.b.registerLogger({ ...a, resource: C.URI.revive(a.resource) });
					}
					async $deregisterLogger(a) {
						this.b.deregisterLogger(C.URI.revive(a));
					}
					async $setVisibility(a, h) {
						this.b.setVisibility(C.URI.revive(a), h);
					}
					$flush(a) {
						const h = this.b.getLogger(C.URI.revive(a));
						if (!h) throw new Error("Create the logger before flushing");
						h.flush();
					}
					dispose() {
						this.a.dispose();
					}
				};
				(e.$0nc = r),
					(e.$0nc = r =
						Ne([(0, t.$tmc)(E.$lbb.MainThreadLogger), j(1, i.$jk)], r)),
					d.$fk.registerCommand("_extensionTests.setLogLevel", function (u, a) {
						const h = u.get(i.$jk),
							c = u.get(m.$Ti);
						if (c.isExtensionDevelopment && c.extensionTestsLocationURI) {
							const n = (0, i.$zk)(a);
							n !== void 0 && h.setLogLevel(n);
						}
					}),
					d.$fk.registerCommand("_extensionTests.getLogLevel", function (u) {
						const a = u.get(i.$ik);
						return (0, i.$xk)(a.getLevel());
					});
			},
		),
		