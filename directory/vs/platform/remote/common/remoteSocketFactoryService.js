import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/lifecycle.js';
import '../../instantiation/common/instantiation.js';
define(de[773], he([1, 0, 3, 5]), function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*instantiation*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$9l = e.$8l = void 0),
				(e.$8l = (0, i.$Mi)("remoteSocketFactoryService"));
			class w {
				constructor() {
					this.a = {};
				}
				register(C, d) {
					return (
						(this.a[C] ??= []),
						this.a[C].push(d),
						(0, t.$Yc)(() => {
							const m = this.a[C]?.indexOf(d);
							typeof m == "number" && m >= 0 && this.a[C]?.splice(m, 1);
						})
					);
				}
				b(C) {
					return (this.a[C.type] || []).find((m) => m.supports(C));
				}
				connect(C, d, m, r) {
					const u = this.b(C);
					if (!u) throw new Error(`No socket factory found for ${C}`);
					return u.connect(C, d, m, r);
				}
			}
			e.$9l = w;
		}),
		