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
		