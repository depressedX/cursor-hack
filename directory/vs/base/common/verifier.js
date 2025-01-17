import '../../../require.js';
import '../../../exports.js';
import './types.js';
define(de[2225], he([1, 0, 28]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$bqb = e.$aqb = e.$_pb = e.$$pb = e.$0pb = void 0),
				(e.$cqb = r);
			class i {
				constructor(a) {
					this.a = a;
				}
				verify(a) {
					return this.b(a) ? a : this.a;
				}
			}
			class w extends i {
				b(a) {
					return typeof a == "boolean";
				}
			}
			e.$0pb = w;
			class E extends i {
				b(a) {
					return typeof a == "number";
				}
			}
			e.$$pb = E;
			class C extends i {
				b(a) {
					return a instanceof Set;
				}
			}
			e.$_pb = C;
			class d extends i {
				constructor(a, h) {
					super(a), (this.c = h);
				}
				b(a) {
					return this.c.includes(a);
				}
			}
			e.$aqb = d;
			class m extends i {
				constructor(a, h) {
					super(a), (this.c = h);
				}
				verify(a) {
					return this.b(a) ? r(this.c, a) : this.a;
				}
				b(a) {
					return (0, t.$ng)(a);
				}
			}
			e.$bqb = m;
			function r(u, a) {
				const h = Object.create(null);
				for (const c in u)
					if (Object.hasOwnProperty.call(u, c)) {
						const n = u[c];
						h[c] = n.verify(a[c]);
					}
				return h;
			}
		}),
		