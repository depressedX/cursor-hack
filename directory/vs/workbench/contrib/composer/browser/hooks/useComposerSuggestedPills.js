define(
			de[4151],
			he([1, 0, 13, 9, 15, 1273, 299, 1007, 9, 36, 270, 58, 19]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.useComposerSuggestedPills = p);
				const c = 10,
					n = 300,
					g = !1;
				function p(o, f, b, s) {
					const l = (0, r.$odc)(),
						y = l.analyticsService,
						[$, v] = (0, t.createSignal)([]),
						[S, I] = (0, t.createSignal)(!1);
					let T;
					const [P] = (0, u.$K0b)(a.$DW, l.configurationService, !1),
						k = () => {
							T && T.dispose(),
								I(!0),
								(T = (0, w.$Oh)(() => {
									o().isDisposed ||
										(g
											? l.composerService
													.getSortedCandidateFiles(o().data.composerId, {
														skipSemSearch: !1,
													})
													.then((D) => {
														const M = D.slice(0, c).map((N) => ({
															uri: N.uri,
														}));
														v(M), I(!1);
													})
											: l.composerDataService
													.getContextGraphFilesFromFileSelections(
														o().data.composerId,
													)
													.then((D) => {
														v(D.slice(0, c)), I(!1);
													}));
								}, n));
						};
					return (
						(0, t.createEffect)(
							(0, t.on)([() => f().fileSelections, () => o().data.text], () => {
								!P() || s?.() || k();
							}),
						),
						{
							suggestedPills: (0, t.createMemo)(() => {
								if (
									!P() ||
									l.workspaceContextService.getWorkspace().folders.length === 0
								)
									return [];
								const D = $(),
									M = (0, E.$j$b)(D, (A) => i.URI.parse(A.uri.path ?? ""), {
										renderFolder: (A) => A,
										rootFolder:
											l.workspaceContextService.getWorkspace().folders[0].uri
												.fsPath,
									}),
									N = [];
								return (
									M.slice(0, d.$k0b).forEach((A, R) => {
										const O = D[R];
										if (
											f().fileSelections.find((U) => (0, m.$Ac)(U.uri, O.uri))
										)
											return;
										const B = l.workspaceContextService.asRelativePath(
											(0, h.$mh)(i.URI.revive(O.uri)),
										);
										N.push({
											type: "gitGraphFileSuggestion",
											extraString: (0, C.$$gc)(O.uri.path ?? ""),
											isLoading: S(),
											hoverText: `${B ? B + "/" : "/"} (Suggested, click to add)`,
											fileName: O.uri.path ?? "",
											onClick: () => {
												y.trackEvent("composer.suggested_pill_clicked", {
													isBubble: !!b,
												}),
													b
														? l.composerService.addBubbleContext({
																composerId: o().data.composerId,
																bubbleId: b,
																contextType: "fileSelections",
																value: O,
																shouldShowPreview: !1,
															})
														: l.composerService.addContext({
																composerId: o().data.composerId,
																contextType: "fileSelections",
																value: O,
																shouldShowPreview: !1,
															}),
													v($().filter((U, z) => z !== R));
											},
											onAdd: () => {
												b
													? l.composerService.addBubbleContext({
															composerId: o().data.composerId,
															bubbleId: b,
															contextType: "fileSelections",
															value: O,
															shouldShowPreview: !1,
														})
													: l.composerService.addContext({
															composerId: o().data.composerId,
															contextType: "fileSelections",
															value: O,
															shouldShowPreview: !1,
														});
											},
											onRemove: () => {
												v($().filter((U, z) => z !== R));
											},
											data: O,
										});
									}),
									N
								);
							}),
							isLoading: S,
						}
					);
				}
			},
		),
		