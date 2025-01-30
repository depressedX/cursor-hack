import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/cancellation.js';
import './ripgrepTextSearchEngine.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../base/common/network.js';
define(Pe[618], Ne([1, 0, 23, 310, 138, 16]), function (we, t, e, r, S, N) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$Sjd = void 0);
			class P {
				constructor(n, p) {
					(this.b = n),
						(this.c = p),
						(this.a = new Set()),
						process.once("exit", () => this.f());
				}
				async provideTextSearchResults(n, p, y, d) {
					const k = await this.c(),
						g = new r.$Ijd(this.b, k);
					return Promise.all(
						p.folderOptions.map((c) => {
							const h = {
								folderOptions: c,
								numThreads: k,
								maxResults: p.maxResults,
								previewOptions: p.previewOptions,
								maxFileSize: p.maxFileSize,
								surroundingContext: p.surroundingContext,
							};
							if (c.folder.scheme === N.Schemas.vscodeUserData) {
								const $ = {
										...h,
										folder: c.folder.with({ scheme: N.Schemas.file }),
									},
									T = new S.$0N((a) =>
										y.report({
											...a,
											uri: a.uri.with({ scheme: c.folder.scheme }),
										}),
									);
								return this.d(d, (a) =>
									g.provideTextSearchResultsWithRgOptions(n, $, T, a),
								);
							} else
								return this.d(d, ($) =>
									g.provideTextSearchResultsWithRgOptions(n, h, y, $),
								);
						}),
					).then((c) => ({ limitHit: c.some(($) => !!$ && $.limitHit) }));
				}
				async d(n, p) {
					const y = I(n);
					this.a.add(y);
					const d = await p(y.token);
					return this.a.delete(y), d;
				}
				f() {
					this.a.forEach((n) => n.cancel());
				}
			}
			t.$Sjd = P;
			function I(l) {
				const n = new e.$Ce();
				return l.onCancellationRequested(() => n.cancel()), n;
			}
		}),
		