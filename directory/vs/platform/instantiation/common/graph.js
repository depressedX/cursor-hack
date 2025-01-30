import '../../../../require.js';
import '../../../../exports.js';
define(de[2708], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Xr = e.$Wr = void 0);
			class t {
				constructor(E, C) {
					(this.key = E),
						(this.data = C),
						(this.incoming = new Map()),
						(this.outgoing = new Map());
				}
			}
			e.$Wr = t;
			class i {
				constructor(E) {
					(this.b = E), (this.a = new Map());
				}
				roots() {
					const E = [];
					for (const C of this.a.values()) C.outgoing.size === 0 && E.push(C);
					return E;
				}
				insertEdge(E, C) {
					const d = this.lookupOrInsertNode(E),
						m = this.lookupOrInsertNode(C);
					d.outgoing.set(m.key, m), m.incoming.set(d.key, d);
				}
				removeNode(E) {
					const C = this.b(E);
					this.a.delete(C);
					for (const d of this.a.values())
						d.outgoing.delete(C), d.incoming.delete(C);
				}
				lookupOrInsertNode(E) {
					const C = this.b(E);
					let d = this.a.get(C);
					return d || ((d = new t(C, E)), this.a.set(C, d)), d;
				}
				lookup(E) {
					return this.a.get(this.b(E));
				}
				isEmpty() {
					return this.a.size === 0;
				}
				toString() {
					const E = [];
					for (const [C, d] of this.a)
						E.push(`${C}
	(-> incoming)[${[...d.incoming.keys()].join(", ")}]
	(outgoing ->)[${[...d.outgoing.keys()].join(",")}]
`);
					return E.join(`
`);
				}
				findCycleSlow() {
					for (const [E, C] of this.a) {
						const d = new Set([E]),
							m = this.c(C, d);
						if (m) return m;
					}
				}
				c(E, C) {
					for (const [d, m] of E.outgoing) {
						if (C.has(d)) return [...C, d].join(" -> ");
						C.add(d);
						const r = this.c(m, C);
						if (r) return r;
						C.delete(d);
					}
				}
			}
			e.$Xr = i;
		}),
		