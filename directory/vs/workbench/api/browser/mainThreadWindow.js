import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/uri.js';
import '../../../platform/opener/common/opener.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../common/extHost.protocol.js';
import '../../services/host/browser/host.js';
import '../../services/userActivity/common/userActivityService.js';
define(
			de[3749],
			he([1, 0, 6, 3, 9, 41, 101, 88, 87, 1040]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*uri*/,
 E /*opener*/,
 C /*extHostCustomers*/,
 d /*extHost.protocol*/,
 m /*host*/,
 r /*userActivityService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Roc = void 0);
				let u = class {
					constructor(h, c, n, g) {
						(this.c = c),
							(this.d = n),
							(this.e = g),
							(this.b = new i.$Zc()),
							(this.a = h.getProxy(d.$mbb.ExtHostWindow)),
							t.Event.latch(c.onDidChangeFocus)(
								this.a.$onDidChangeWindowFocus,
								this.a,
								this.b,
							),
							g.onDidChangeIsActive(
								this.a.$onDidChangeWindowActive,
								this.a,
								this.b,
							);
					}
					dispose() {
						this.b.dispose();
					}
					$getInitialState() {
						return Promise.resolve({
							isFocused: this.c.hasFocus,
							isActive: this.e.isActive,
						});
					}
					async $openUri(h, c, n) {
						const g = w.URI.from(h);
						let p;
						return (
							c && w.URI.parse(c).toString() === g.toString()
								? (p = c)
								: (p = g),
							this.d.open(p, {
								openExternal: !0,
								allowTunneling: n.allowTunneling,
								allowContributedOpeners: n.allowContributedOpeners,
							})
						);
					}
					async $asExternalUri(h, c) {
						return (await this.d.resolveExternalUri(w.URI.revive(h), c))
							.resolved;
					}
				};
				(e.$Roc = u),
					(e.$Roc = u =
						Ne(
							[
								(0, C.$tmc)(d.$lbb.MainThreadWindow),
								j(1, m.$asb),
								j(2, E.$7rb),
								j(3, r.$Poc),
							],
							u,
						));
			},
		),
		