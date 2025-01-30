import '../../../require.js';
import '../../../exports.js';
import './buffer.js';
import './marshallingIds.js';
import './uri.js';
define(de[1172], he([1, 0, 76, 221, 9]), function (ce /*require*/,
 e /*exports*/,
 t /*buffer*/,
 i /*marshallingIds*/,
 w /*uri*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$3n = e.$2n = void 0),
				(e.$4n = m),
				(e.$5n = u),
				(e.$6n = a);
			function E(h) {
				return h.toJSON();
			}
			class C {
				constructor(c) {
					this.a = c;
				}
				transformIncoming(c) {
					const n = this.a.transformIncoming(c);
					return n === c ? c : E(w.URI.from(n));
				}
				transformOutgoing(c) {
					const n = this.a.transformOutgoing(c);
					return n === c ? c : E(w.URI.from(n));
				}
				transformOutgoingURI(c) {
					const n = this.a.transformOutgoing(c);
					return n === c ? c : w.URI.from(n);
				}
				transformOutgoingScheme(c) {
					return this.a.transformOutgoingScheme(c);
				}
			}
			(e.$2n = C),
				(e.$3n = new (class {
					transformIncoming(h) {
						return h;
					}
					transformOutgoing(h) {
						return h;
					}
					transformOutgoingURI(h) {
						return h;
					}
					transformOutgoingScheme(h) {
						return h;
					}
				})());
			function d(h, c, n) {
				if (!h || n > 200) return null;
				if (typeof h == "object") {
					if (h instanceof w.URI) return c.transformOutgoing(h);
					for (const g in h)
						if (Object.hasOwnProperty.call(h, g)) {
							const p = d(h[g], c, n + 1);
							p !== null && (h[g] = p);
						}
				}
				return null;
			}
			function m(h, c) {
				const n = d(h, c, 0);
				return n === null ? h : n;
			}
			function r(h, c, n, g) {
				if (!h || g > 200) return null;
				if (typeof h == "object") {
					if (h.$mid === i.MarshalledId.Uri)
						return n
							? w.URI.revive(c.transformIncoming(h))
							: c.transformIncoming(h);
					if (h instanceof t.$Te) return null;
					for (const p in h)
						if (Object.hasOwnProperty.call(h, p)) {
							const o = r(h[p], c, n, g + 1);
							o !== null && (h[p] = o);
						}
				}
				return null;
			}
			function u(h, c) {
				const n = r(h, c, !1, 0);
				return n === null ? h : n;
			}
			function a(h, c) {
				const n = r(h, c, !0, 0);
				return n === null ? h : n;
			}
		}),
		