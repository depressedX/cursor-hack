define(de[1007], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$k0b = e.$j0b = e.$i0b = e.$h0b = void 0),
				(e.$l0b = w),
				(e.$h0b = 6),
				(e.$i0b = 4),
				(e.$j0b = 4),
				(e.$k0b = 2);
			function t(E) {
				return (
					E.rerankingScore +
					Math.pow(E.gitGraphWeight, 1.5) +
					E.semSearchWeight * 15 +
					E.recentlyViewedWeight * 0.5
				);
			}
			function i(E) {
				return Array.from(E.entries())
					.map(([d, m]) => ({ uri: d, score: t(m), ...m }))
					.sort((d, m) => m.score - d.score);
			}
			async function w(E, C, d, m, r, u, a, h, c, n) {
				return [];
			}
		}),
		