define(de[819], he([1, 0, 9]), function (ce, e, t) {
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
		define(
			de[3202],
			he([1, 0, 322, 3, 19, 63, 1271, 444, 819]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$U_b = r);
				async function r(u, a, h, c) {
					const n = (0, t.$hs)(u);
					let g = [];
					if (!(c?.autoPopulate ?? !0) && !u) return [];
					const o = a.anythingQuickAccessProvider.doGetPicksPublic(
						u,
						{
							enableEditorSymbolSearch: !1,
							excludeNotepads: !0,
							excludeSemanticSearch: !0,
							excludeCursorIgnore: !0,
						},
						new i.$Zc(),
						h.token,
					);
					if ((0, m.$R_b)(o)) {
						const [b, s] = await Promise.all([
							Promise.resolve(o.picks),
							o.additionalPicks,
						]);
						g = [
							...(0, m.$T_b)(b).map((l) => ({ uri: l, type: "fast" })),
							...(0, m.$T_b)(s).map((l) => ({ uri: l, type: "slow" })),
						];
					} else if (o instanceof Promise) {
						const b = await o;
						g = (0, m.$T_b)(b).map((s) => ({ uri: s, type: "slow" }));
					} else g = (0, m.$T_b)(o).map((b) => ({ uri: b, type: "slow" }));
					return (
						(g = g.filter((b) => !C.$I_b.has(b.uri.scheme))),
						(
							await (0, m.$P_b)(
								g.map((b) => {
									const l =
											a.customEditorLabelService.getName(b.uri) ??
											(0, w.$kh)(b.uri),
										y = a.workspaceContextService.asRelativePath(b.uri),
										{
											labelMatch: $,
											descriptionMatch: v,
											score: S,
										} = (0, t.$fs)(
											{ label: l, description: y },
											n,
											!0,
											E.$CJ,
											a.anythingQuickAccessProvider.scorerCache,
										);
									return {
										name: l,
										type: d.EverythingSearchOptionType.File,
										score: S / (b.type === "fast" ? 1 : C.$M_b),
										uri: b.uri,
										secondaryText: y,
										labelMatches: $,
										descriptionMatches: v,
									};
								}),
								a,
							)
						).sort((b, s) => s.score - b.score)
					);
				}
			},
		),
		