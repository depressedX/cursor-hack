define(de[4], he([1, 0, 1558, 1558]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.getNLSMessages = e.getNLSLanguage = void 0),
				(e.localize = C),
				(e.localize2 = m),
				Object.defineProperty(e, "getNLSLanguage", {
					enumerable: !0,
					get: function () {
						return i.$b;
					},
				}),
				Object.defineProperty(e, "getNLSMessages", {
					enumerable: !0,
					get: function () {
						return i.$a;
					},
				});
			const w =
				(0, t.$b)() === "pseudo" ||
				(typeof document < "u" &&
					document.location &&
					document.location.hash.indexOf("pseudo=true") >= 0);
			function E(r, u) {
				let a;
				return (
					u.length === 0
						? (a = r)
						: (a = r.replace(/\{(\d+)\}/g, (h, c) => {
								const n = c[0],
									g = u[n];
								let p = h;
								return (
									typeof g == "string"
										? (p = g)
										: (typeof g == "number" ||
												typeof g == "boolean" ||
												g === void 0 ||
												g === null) &&
											(p = String(g)),
									p
								);
							})),
					w && (a = "\uFF3B" + a.replace(/[aouei]/g, "$&$&") + "\uFF3D"),
					a
				);
			}
			function C(r, u, ...a) {
				return E(typeof r == "number" ? d(r, u) : u, a);
			}
			function d(r, u) {
				const a = (0, t.$a)()?.[r];
				if (typeof a != "string") {
					if (typeof u == "string") return u;
					throw new Error(`!!! NLS MISSING: ${r} !!!`);
				}
				return a;
			}
			function m(r, u, ...a) {
				let h;
				typeof r == "number" ? (h = d(r, u)) : (h = u);
				const c = E(h, a);
				return { value: c, original: u === h ? c : E(u, a) };
			}
		}),
		