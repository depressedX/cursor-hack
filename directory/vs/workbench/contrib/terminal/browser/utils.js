import '../../../../../require.js';
import '../../../../../exports.js';
define(de[1759], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$kVc = void 0);
			const t = !0,
				i = (w, E = [90, 90, 90], C) => {
					const [d, m, r] = E,
						u = `\x1B[38;2;${d};${m};${r}m`,
						a = C ? `\x1B[48;2;${C[0]};${C[1]};${C[2]}m` : "";
					return `${u}${a}${w}\x1B[0m`;
				};
			e.$kVc = i;
		})
