import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/network.js';
import '../../files/common/files.js';
import '../../request/common/request.js';
define(de[2791], he([1, 0, 33, 23, 22, 327]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$qfb = void 0);
			let C = class {
				constructor(m, r) {
					(this.a = m), (this.b = r);
				}
				async download(m, r, u = t.CancellationToken.None) {
					if (
						m.scheme === i.Schemas.file ||
						m.scheme === i.Schemas.vscodeRemote
					) {
						await this.b.copy(m, r);
						return;
					}
					const a = { type: "GET", url: m.toString(!0) },
						h = await this.a.request(a, u);
					if (h.res.statusCode === 200) await this.b.writeFile(r, h.stream);
					else {
						const c = await (0, E.$Fq)(h);
						throw new Error(`Expected 200, got back ${h.res.statusCode} instead.

${c}`);
					}
				}
			};
			(e.$qfb = C), (e.$qfb = C = Ne([j(0, E.$Aq), j(1, w.$ll)], C));
		}),
		