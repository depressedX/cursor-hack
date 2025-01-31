import '../../../../require.js';
import '../../../../exports.js';
define(de[2783], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$E8c = e.$D8c = e.$C8c = void 0),
				(e.$C8c = "request"),
				(e.$D8c = "remoteResourceHandler");
			class t {
				async routeCall(w, E, C) {
					if (E !== e.$C8c) throw new Error(`Call not found: ${E}`);
					const d = C[0];
					if (d?.authority) {
						const m = w.connections.find((r) => r.ctx === d.authority);
						if (m) return m;
					}
					throw new Error("Caller not found");
				}
				routeEvent(w, E) {
					throw new Error(`Event not found: ${E}`);
				}
			}
			e.$E8c = t;
		})
