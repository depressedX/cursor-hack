import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/filters.js';
import '../../../../base/common/strings.js';
define(de[1725], he([1, 0, 132, 37]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$0oc = void 0),
				(i = mt(i));
			class w {
				static {
					this._filter = t.$1k;
				}
				static {
					this._messageFilter = t.$Zk;
				}
				constructor(C, d, m) {
					(this.filter = C),
						(this.showResolved = !0),
						(this.showUnresolved = !0),
						(C = C.trim()),
						(this.showResolved = d),
						(this.showUnresolved = m);
					const r = C.startsWith("!");
					this.textFilter = { text: (r ? i.$tf(C, "!") : C).trim(), negate: r };
				}
			}
			e.$0oc = w;
		}),
		