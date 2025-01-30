import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/node/pfs.js';
import '../common/search.js';
import './ripgrepTextSearchEngine.js';
import './textSearchManager.js';
define(Pe[619], Ne([1, 0, 43, 41, 310, 309]), function (we, t, e, r, S, N) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }),
				(t.$Qjd = void 0),
				(e = tt(e));
			class P {
				constructor(n, p) {
					(this.a = n), (this.b = p);
				}
				search(n, p, y) {
					if (
						(!this.a.folderQueries || !this.a.folderQueries.length) &&
						(!this.a.extraFileResources || !this.a.extraFileResources.length)
					)
						return Promise.resolve({
							type: "success",
							limitHit: !1,
							stats: { type: "searchProcess" },
							messages: [],
						});
					const d = {
							appendLine(g) {
								y({ message: g });
							},
						},
						k = new N.$Pjd(this.a, new S.$Ijd(d, this.b), e);
					return new Promise((g, c) =>
						k
							.search((h) => {
								p(h.map(I));
							}, n)
							.then(
								(h) =>
									g({
										limitHit: h.limitHit ?? !1,
										type: "success",
										stats: h.stats,
										messages: [],
									}),
								c,
							),
					);
				}
			}
			t.$Qjd = P;
			function I(l) {
				return {
					path: l.resource && l.resource.fsPath,
					results: l.results,
					numMatches: (l.results || []).reduce(
						(n, p) => ((0, r.$q7)(p) ? n + p.rangeLocations.length : n + 1),
						0,
					),
				};
			}
		}),
		