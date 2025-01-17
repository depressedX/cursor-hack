import '../../../require.js';
import '../../../exports.js';
define(de[47], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$9g = void 0),
				(e.$8g = i);
			const t =
				/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
			function i(w) {
				return t.test(w);
			}
			e.$9g = (function () {
				if (typeof crypto == "object" && typeof crypto.randomUUID == "function")
					return crypto.randomUUID.bind(crypto);
				let w;
				typeof crypto == "object" && typeof crypto.getRandomValues == "function"
					? (w = crypto.getRandomValues.bind(crypto))
					: (w = function (d) {
							for (let m = 0; m < d.length; m++)
								d[m] = Math.floor(Math.random() * 256);
							return d;
						});
				const E = new Uint8Array(16),
					C = [];
				for (let d = 0; d < 256; d++) C.push(d.toString(16).padStart(2, "0"));
				return function () {
					w(E), (E[6] = (E[6] & 15) | 64), (E[8] = (E[8] & 63) | 128);
					let m = 0,
						r = "";
					return (
						(r += C[E[m++]]),
						(r += C[E[m++]]),
						(r += C[E[m++]]),
						(r += C[E[m++]]),
						(r += "-"),
						(r += C[E[m++]]),
						(r += C[E[m++]]),
						(r += "-"),
						(r += C[E[m++]]),
						(r += C[E[m++]]),
						(r += "-"),
						(r += C[E[m++]]),
						(r += C[E[m++]]),
						(r += "-"),
						(r += C[E[m++]]),
						(r += C[E[m++]]),
						(r += C[E[m++]]),
						(r += C[E[m++]]),
						(r += C[E[m++]]),
						(r += C[E[m++]]),
						r
					);
				};
			})();
		}),
		