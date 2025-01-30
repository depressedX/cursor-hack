import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/uri.js';
define(de[819], he([1, 0, 9]), function (ce /*require*/,
 e /*exports*/,
 t /*uri*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$N_b = w),
				(e.$O_b = E),
				(e.$P_b = C),
				(e.$Q_b = d),
				(e.$R_b = m),
				(e.$S_b = r),
				(e.$T_b = u);
			var i;
			(function (a) {
				(a[(a.None = 0)] = "None"),
					(a[(a.NoncontiguousSubstring = 1)] = "NoncontiguousSubstring"),
					(a[(a.Substring = 2)] = "Substring"),
					(a[(a.StartsWith = 3)] = "StartsWith"),
					(a[(a.Exact = 4)] = "Exact");
			})(i || (i = {}));
			function w(a, h) {
				const c = h.toLowerCase(),
					n = a.toLowerCase();
				let g = 0;
				for (let p = 0; p < n.length; p++)
					if ((n[p] === c[g] && g++, g === c.length)) return !0;
				return !1;
			}
			function E(a, h, c = !0) {
				h = h.toLowerCase();
				const g = a
					.toLowerCase()
					.split(" ")
					.map((p) =>
						p === h
							? i.Exact
							: h.startsWith(p)
								? i.StartsWith
								: h.includes(p)
									? i.Substring
									: w(h, p)
										? i.NoncontiguousSubstring
										: i.None,
					);
				return c
					? g.some((p) => p === i.None)
						? i.None
						: Math.max(...g)
					: g.reduce((p, o) => p + o, 0) / g.length;
			}
			async function C(a, h) {
				return (
					await Promise.all(
						a.map(async (n) => {
							try {
								return (await h.fileService.exists(n.uri)) ? n : null;
							} catch (g) {
								return (
									console.error(`Error checking file existence: ${g}`), null
								);
							}
						}),
					)
				).filter((n) => n !== null);
			}
			function d(a, h) {
				let c = [];
				for (let n of h) {
					const g = a.workspaceContextService.asRelativePath(n);
					if (!g) continue;
					let p = g.split("/");
					for (let o = 1; o < p.length; o++) {
						const f = p.slice(0, o).join("/");
						f !== "/" && f !== "" && c.push(t.URI.parse(f));
					}
				}
				return (
					(c = [...new Set(c.map((n) => n.toString()))].map((n) =>
						t.URI.parse(n),
					)),
					c
				);
			}
			function m(a) {
				const h = a;
				return !!h.picks && h.additionalPicks instanceof Promise;
			}
			function r(a) {
				const h = a;
				return Array.isArray(h.items);
			}
			function u(a) {
				return (r(a) ? a.items : a)
					.map((c) => (c.type === void 0 ? c.resource : void 0))
					.filter((c) => c !== void 0);
			}
		}),
		