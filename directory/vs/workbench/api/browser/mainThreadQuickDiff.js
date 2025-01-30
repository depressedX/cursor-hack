import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/uri.js';
import '../common/extHost.protocol.js';
import '../../contrib/scm/common/quickDiff.js';
import '../../services/extensions/common/extHostCustomers.js';
define(
			de[3362],
			he([1, 0, 33, 3, 9, 88, 803, 101]),
			function (ce /*require*/,
 e /*exports*/,
 t /*cancellation*/,
 i /*lifecycle*/,
 w /*uri*/,
 E /*extHost.protocol*/,
 C /*quickDiff*/,
 d /*extHostCustomers*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hoc = void 0);
				let m = class {
					constructor(u, a) {
						(this.c = a),
							(this.b = new i.$0c()),
							(this.a = u.getProxy(E.$mbb.ExtHostQuickDiff));
					}
					async $registerQuickDiffProvider(u, a, h, c) {
						const n = {
								label: h,
								rootUri: w.URI.revive(c),
								selector: a,
								isSCM: !1,
								getOriginalResource: async (p) =>
									w.URI.revive(
										await this.a.$provideOriginalResource(
											u,
											p,
											t.CancellationToken.None,
										),
									),
							},
							g = this.c.addQuickDiffProvider(n);
						this.b.set(u, g);
					}
					async $unregisterQuickDiffProvider(u) {
						this.b.has(u) && this.b.deleteAndDispose(u);
					}
					dispose() {
						this.b.dispose();
					}
				};
				(e.$hoc = m),
					(e.$hoc = m =
						Ne([(0, d.$tmc)(E.$lbb.MainThreadQuickDiff), j(1, C.$8mc)], m));
			},
		),
		