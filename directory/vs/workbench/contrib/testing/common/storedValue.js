import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/storage/common/storage.js';
define(de[515], he([1, 0, 3, 21]), function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*storage*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$oqc = void 0);
			const w = {
				deserialize: (C) => JSON.parse(C),
				serialize: (C) => JSON.stringify(C),
			};
			let E = class extends t.$1c {
				constructor(d, m) {
					super(),
						(this.h = m),
						(this.b = d.key),
						(this.c = d.scope),
						(this.f = d.target),
						(this.a = d.serialization ?? w),
						(this.onDidChange = this.h.onDidChangeValue(
							this.c,
							this.b,
							this.D(new t.$Zc()),
						));
				}
				get(d) {
					if (this.g === void 0) {
						const m = this.h.get(this.b, this.c);
						this.g = m === void 0 ? d : this.a.deserialize(m);
					}
					return this.g;
				}
				store(d) {
					(this.g = d),
						this.h.store(this.b, this.a.serialize(d), this.c, this.f);
				}
				delete() {
					this.h.remove(this.b, this.c);
				}
			};
			(e.$oqc = E), (e.$oqc = E = Ne([j(1, i.$lq)], E));
		}),
		