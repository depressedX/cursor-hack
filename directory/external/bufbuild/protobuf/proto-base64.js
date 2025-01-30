import '../../../require.js';
import '../../../exports.js';
define(de[1084], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.protoBase64 = void 0);
			let t =
					"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
						"",
					),
				i = [];
			for (let w = 0; w < t.length; w++) i[t[w].charCodeAt(0)] = w;
			(i[45] = t.indexOf("+")),
				(i[95] = t.indexOf("/")),
				(e.protoBase64 = {
					dec(w) {
						let E = (w.length * 3) / 4;
						w[w.length - 2] == "="
							? (E -= 2)
							: w[w.length - 1] == "=" && (E -= 1);
						let C = new Uint8Array(E),
							d = 0,
							m = 0,
							r,
							u = 0;
						for (let a = 0; a < w.length; a++) {
							if (((r = i[w.charCodeAt(a)]), r === void 0))
								switch (w[a]) {
									case "=":
										m = 0;
									case `
`:
									case "\r":
									case "	":
									case " ":
										continue;
									default:
										throw Error("invalid base64 string.");
								}
							switch (m) {
								case 0:
									(u = r), (m = 1);
									break;
								case 1:
									(C[d++] = (u << 2) | ((r & 48) >> 4)), (u = r), (m = 2);
									break;
								case 2:
									(C[d++] = ((u & 15) << 4) | ((r & 60) >> 2)),
										(u = r),
										(m = 3);
									break;
								case 3:
									(C[d++] = ((u & 3) << 6) | r), (m = 0);
									break;
							}
						}
						if (m == 1) throw Error("invalid base64 string.");
						return C.subarray(0, d);
					},
					enc(w) {
						let E = "",
							C = 0,
							d,
							m = 0;
						for (let r = 0; r < w.length; r++)
							switch (((d = w[r]), C)) {
								case 0:
									(E += t[d >> 2]), (m = (d & 3) << 4), (C = 1);
									break;
								case 1:
									(E += t[m | (d >> 4)]), (m = (d & 15) << 2), (C = 2);
									break;
								case 2:
									(E += t[m | (d >> 6)]), (E += t[d & 63]), (C = 0);
									break;
							}
						return C && ((E += t[m]), (E += "="), C == 1 && (E += "=")), E;
					},
				});
		}),
		