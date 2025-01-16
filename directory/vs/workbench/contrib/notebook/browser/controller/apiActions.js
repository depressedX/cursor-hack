define(
			de[3470],
			he([1, 0, 215, 9, 31, 70, 243, 161]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(t = mt(t)),
					w.$fk.registerCommand("_resolveNotebookContentProvider", (m) =>
						m
							.get(d.$MIb)
							.getContributedNotebookTypes()
							.map((a) => {
								const h = a.selectors
									.map((c) =>
										typeof c == "string" || t.$Kk(c)
											? c
											: (0, E.$36)(c)
												? { include: c.include, exclude: c.exclude }
												: null,
									)
									.filter((c) => c !== null);
								return {
									viewType: a.id,
									displayName: a.displayName,
									filenamePattern: h,
									options: {
										transientCellMetadata: a.options.transientCellMetadata,
										transientDocumentMetadata:
											a.options.transientDocumentMetadata,
										transientOutputs: a.options.transientOutputs,
									},
								};
							}),
					),
					w.$fk.registerCommand("_resolveNotebookKernels", async (m, r) => {
						const u = m.get(C.$f6),
							a = i.URI.revive(r.uri);
						return u
							.getMatchingKernel({ uri: a, notebookType: r.viewType })
							.all.map((c) => ({
								id: c.id,
								label: c.label,
								description: c.description,
								detail: c.detail,
								isPreferred: !1,
								preloads: c.preloadUris,
							}));
					});
			},
		),
		