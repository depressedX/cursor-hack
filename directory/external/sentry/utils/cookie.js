import '../../../require.js';
import '../../../exports.js';
define(de[2068], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.parseCookie = t);
			function t(i) {
				const w = {};
				let E = 0;
				for (; E < i.length; ) {
					const C = i.indexOf("=", E);
					if (C === -1) break;
					let d = i.indexOf(";", E);
					if (d === -1) d = i.length;
					else if (d < C) {
						E = i.lastIndexOf(";", C - 1) + 1;
						continue;
					}
					const m = i.slice(E, C).trim();
					if (w[m] === void 0) {
						let r = i.slice(C + 1, d).trim();
						r.charCodeAt(0) === 34 && (r = r.slice(1, -1));
						try {
							w[m] = r.indexOf("%") !== -1 ? decodeURIComponent(r) : r;
						} catch {
							w[m] = r;
						}
					}
					E = d + 1;
				}
				return w;
			}
		}),
		