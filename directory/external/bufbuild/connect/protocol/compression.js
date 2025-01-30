import '../../../../require.js';
import '../../../../exports.js';
import '../connect-error.js';
import '../code.js';
define(de[869], he([1, 0, 213, 202]), function (ce /*require*/,
 e /*exports*/,
 t /*connect-error*/,
 i /*code*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.compressedFlag = void 0),
				(e.compressionNegotiate = w),
				(e.compressedFlag = 1);
			function w(E, C, d, m) {
				let r = null,
					u = null,
					a;
				if (C !== null && C !== "identity") {
					const h = E.find((c) => c.name === C);
					if (h) r = h;
					else {
						const c = E.map((n) => n.name).join(",");
						a = new t.ConnectError(
							`unknown compression "${C}": supported encodings are ${c}`,
							i.Code.Unimplemented,
							{ [m]: c },
						);
					}
				}
				if (d === null || d === "") u = r;
				else {
					const h = d.split(",").map((c) => c.trim());
					for (const c of h) {
						const n = E.find((g) => g.name === c);
						if (n) {
							u = n;
							break;
						}
					}
				}
				return { request: r, response: u, error: a };
			}
		}),
		