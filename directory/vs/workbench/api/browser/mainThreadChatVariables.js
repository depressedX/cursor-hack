import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/marshalling.js';
import '../common/extHost.protocol.js';
import '../../contrib/chat/common/chatVariables.js';
import '../../services/extensions/common/extHostCustomers.js';
define(
			de[3339],
			he([1, 0, 3, 197, 88, 503, 101]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*marshalling*/,
 w /*extHost.protocol*/,
 E /*chatVariables*/,
 C /*extHostCustomers*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Gmc = void 0);
				let d = class {
					constructor(r, u) {
						(this.d = u),
							(this.b = new t.$0c()),
							(this.c = new Map()),
							(this.a = r.getProxy(w.$mbb.ExtHostChatVariables));
					}
					dispose() {
						this.b.clearAndDisposeAll();
					}
					$registerVariable(r, u) {
						const a = this.d.registerVariable(u, async (h, c, n, g, p) => {
							const o = `${n.sessionId}-${r}`;
							this.c.set(o, g);
							const f = (0, i.$ji)(await this.a.$resolveVariable(r, o, h, p));
							return this.c.delete(o), f;
						});
						this.b.set(r, a);
					}
					async $handleProgressChunk(r, u) {
						const a = (0, i.$ji)(u);
						this.c.get(r)?.(a);
					}
					$unregisterVariable(r) {
						this.b.deleteAndDispose(r);
					}
				};
				(e.$Gmc = d),
					(e.$Gmc = d =
						Ne([(0, C.$tmc)(w.$lbb.MainThreadChatVariables), j(1, E.$D2)], d));
			},
		)
