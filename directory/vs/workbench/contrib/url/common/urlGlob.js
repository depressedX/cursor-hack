import '../../../../../require.js';
import '../../../../../exports.js';
define(de[1783], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$YXb = void 0);
			const t = (w, E) => {
				let C = w.with({ query: null, fragment: null }).toString(!0);
				const d = (u) => u.replace(/\/+$/, "");
				(E = d(E)), (C = d(C));
				const m = Array.from({ length: C.length + 1 }).map(() =>
					Array.from({ length: E.length + 1 }).map(() => {}),
				);
				if (/^[^./:]*:\/\//.test(E)) return i(m, C, E, 0, 0);
				const r = /^(https?):\/\//.exec(C)?.[1];
				return r ? i(m, C, `${r}://${E}`, 0, 0) : !1;
			};
			e.$YXb = t;
			const i = (w, E, C, d, m) => {
				if (w[d]?.[m] !== void 0) return w[d][m];
				const r = [];
				if (d === E.length) return m === C.length;
				if (m === C.length) return E.slice(d)[0] === "/";
				if (
					(E[d] === C[m] && r.push(i(w, E, C, d + 1, m + 1)),
					C[m] + C[m + 1] === "*." &&
						(["/", ":"].includes(E[d]) || r.push(i(w, E, C, d + 1, m)),
						r.push(i(w, E, C, d, m + 2))),
					C[m] === "*" &&
						(d + 1 === E.length
							? r.push(i(w, E, C, d + 1, m + 1))
							: r.push(i(w, E, C, d + 1, m)),
						r.push(i(w, E, C, d, m + 1))),
					C[m] + C[m + 1] === ":*")
				)
					if (E[d] === ":") {
						let u = d + 1;
						do u++;
						while (/[0-9]/.test(E[u]));
						r.push(i(w, E, C, u, m + 2));
					} else r.push(i(w, E, C, d, m + 2));
				return (w[d][m] = r.some((u) => u === !0));
			};
		}),
		