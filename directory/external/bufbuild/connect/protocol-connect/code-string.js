import '../../../../require.js';
import '../../../../exports.js';
import '../code.js';
define(de[1387], he([1, 0, 202]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.codeToString = i),
				(e.codeFromString = E);
			function i(C) {
				const d = t.Code[C];
				return typeof d != "string"
					? C.toString()
					: d[0].toLowerCase() +
							d.substring(1).replace(/[A-Z]/g, (m) => "_" + m.toLowerCase());
			}
			let w;
			function E(C) {
				if (!w) {
					w = {};
					for (const d of Object.values(t.Code))
						typeof d != "string" && (w[i(d)] = d);
				}
				return w[C];
			}
		}),
		