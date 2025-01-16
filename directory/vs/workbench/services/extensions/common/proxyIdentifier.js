define(de[622], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$uO = e.$rO = void 0),
				(e.$sO = w),
				(e.$tO = E);
			class t {
				static {
					this.count = 0;
				}
				constructor(m) {
					(this._proxyIdentifierBrand = void 0),
						(this.sid = m),
						(this.nid = ++t.count);
				}
			}
			e.$rO = t;
			const i = [];
			function w(d) {
				const m = new t(d);
				return (i[m.nid] = m), m;
			}
			function E(d) {
				return i[d].sid;
			}
			class C {
				constructor(m) {
					this.value = m;
				}
			}
			e.$uO = C;
		}),
		