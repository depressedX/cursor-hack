import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/uri.js';
define(de[2706], he([1, 0, 9]), function (ce /*require*/,
 e /*exports*/,
 t /*uri*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$ip = e.$hp = void 0);
			class i {
				constructor(C) {
					this.a = C;
				}
				listen(C, d, m) {
					throw new Error("Invalid listen");
				}
				call(C, d, m) {
					switch (d) {
						case "download":
							return this.a.download(t.URI.revive(m[0]), t.URI.revive(m[1]));
					}
					throw new Error("Invalid call");
				}
			}
			e.$hp = i;
			class w {
				constructor(C, d) {
					(this.a = C), (this.b = d);
				}
				async download(C, d) {
					const m = this.b();
					m &&
						((C = m.transformOutgoingURI(C)), (d = m.transformOutgoingURI(d))),
						await this.a.call("download", [C, d]);
				}
			}
			e.$ip = w;
		}),
		