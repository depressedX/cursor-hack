define(de[3198], he([1, 0, 322, 63, 444]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$W_b = E);
			async function E(C, d, m) {
				let r = [],
					u = [];
				try {
					r = (await d.gitContextService.searchAllCommits(C)) ?? [];
				} catch (n) {
					console.error("Error searching commits:", n);
				}
				try {
					u = (await d.gitContextService.searchAllPrs(C)) ?? [];
				} catch (n) {
					console.error("Error searching PRs:", n);
				}
				const a = (0, t.$hs)(C),
					h = r.map((n) => {
						const { labelMatch: g, descriptionMatch: p } = (0, t.$fs)(
							{ label: n.message, description: n.sha },
							a,
							!0,
							i.$CJ,
							d.anythingQuickAccessProvider.scorerCache,
						);
						return {
							name: n.message,
							type: w.EverythingSearchOptionType.Git,
							score: 7,
							isPullRequest: !1,
							secondaryText: n.sha,
							labelMatches: g,
							descriptionMatches: p,
						};
					}),
					c = u.map((n) => {
						const {
							labelMatch: g,
							descriptionMatch: p,
							score: o,
						} = (0, t.$fs)(
							{ label: n.title, description: `#${n.number}` },
							a,
							!0,
							i.$CJ,
							d.anythingQuickAccessProvider.scorerCache,
						);
						return {
							name: n.title,
							type: w.EverythingSearchOptionType.Git,
							score: o,
							secondaryText: `#${n.number}`,
							isPullRequest: !0,
							labelMatches: g,
							descriptionMatches: p,
						};
					});
				return [...h, ...c];
			}
		}),
		