define(
			de[4282],
			he([1, 0, 2, 2, 2, 13, 36, 167, 4281, 28, 41, 177, 485]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerDiffReviewMessage = void 0);
				const c = (0, t.template)("<div>hi"),
					n = (0, t.template)(
						"<div><div>The AI failed to produce a diff review.</div><div>",
					),
					g = (p) => {
						const o = (0, C.$odc)(),
							{ inlineDiffService: f, reactiveStorageService: b } = o,
							s = (0, E.createMemo)(() => p.bubbleId),
							{ currentComposer: l } = (0, a.useComposerDataHandle)(
								() => p.composerDataHandle,
							),
							y = (0, E.createMemo)(() => {
								const O = l();
								if (!O) throw new Error("[composer] No composer selected");
								const B = O.capabilities.find(
									(U) =>
										U.type ===
										d.ComposerCapabilityRequest_ComposerCapabilityType
											.DIFF_REVIEW,
								);
								if (B) return B;
							}),
							$ = (0, E.createMemo)(() => {
								const O = y();
								return !O || !O.aiBubbleId() ? !0 : O.aiBubbleId() !== s();
							}),
							v = (0, E.createMemo)(() => y()?.currentStep() ?? 0),
							S = (0, E.createMemo)(() => {
								const O = y();
								return O
									? O.relevantUris()
											.map((U) => {
												const z = U.toString(),
													F = b.nonPersistentStorage.inlineDiffs.find(
														(x) => x.uri.toString() === z,
													);
												return !F || "isMultiInlineDiff" in F ? null : F.id;
											})
											.filter(r.$tg)
									: [];
							}),
							I = (0, E.createMemo)(() => S().length > 0),
							T = async () => {
								if (!l()) return;
								const B = y()?.relevantUris() ?? [];
								if (B.length !== 0)
									for (const U of B) {
										const z = b.nonPersistentStorage.inlineDiffs.find(
											(F) => F.uri.toString() === U.toString(),
										)?.id;
										z && (await f.acceptDiff(z));
									}
							},
							P = async () => {
								if (!l()) return;
								const B = y()?.relevantUris() ?? [];
								for (const U of B) {
									const z = b.nonPersistentStorage.inlineDiffs.find(
										(F) => F.uri.toString() === U.toString(),
									)?.id;
									z && (await f.rejectDiff(z));
								}
							},
							k = async (O, B) => {
								const U = y();
								U && U.acceptLeafChange(O, B);
							},
							L = async (O, B) => {
								const U = y();
								U && U.rejectLeafChange(O, B);
							},
							D = (O, B) => {
								o.openerService.open(O, {
									openToSide: B,
									editorOptions: { preserveFocus: !0 },
								});
							},
							M = (O, B, U) => {
								o.openerService.open(
									(0, u.$8rb)(O, {
										startLineNumber: B,
										startColumn: 1,
										endLineNumber: B,
										endColumn: 1,
									}),
									{ openToSide: U, editorOptions: { preserveFocus: !0 } },
								);
							},
							N = async () => {
								const O = y();
								O && (await O.abort());
							},
							A = async (O, B) => {
								const U = y();
								U && (await U.acceptGroupFileChanges(O, B));
							},
							R = async (O, B) => {
								const U = y();
								U && (await U.rejectGroupFileChanges(O, B));
							};
						return (0, w.createComponent)(E.Show, {
							get when() {
								return y();
							},
							get fallback() {
								return (() => {
									const O = c();
									return O.style.setProperty("display", "none"), O;
								})();
							},
							children: (O) =>
								(0, w.createComponent)(E.Show, {
									get when() {
										return y()?.status() === "completed";
									},
									get fallback() {
										return (0, w.createComponent)(E.Show, {
											get when() {
												return y()?.status() === "failed";
											},
											get children() {
												const B = n(),
													U = B.firstChild,
													z = U.nextSibling;
												return (
													B.style.setProperty("margin-bottom", "12px"),
													B.style.setProperty("margin-top", "16px"),
													B.style.setProperty("display", "flex"),
													B.style.setProperty("flex-direction", "column"),
													B.style.setProperty("align-items", "center"),
													B.style.setProperty("gap", "6px"),
													z.style.setProperty("display", "flex"),
													z.style.setProperty("flex-direction", "row"),
													z.style.setProperty("gap", "6px"),
													z.style.setProperty("align-items", "center"),
													(0, i.insert)(
														z,
														(0, w.createComponent)(
															h.ComposerToolbarSimpleButton,
															{
																onClick: () => {
																	y()?.tryAgain();
																},
																type: "secondary",
																children: "Try again",
															},
														),
														null,
													),
													(0, i.insert)(
														z,
														(0, w.createComponent)(
															h.ComposerToolbarSimpleButton,
															{
																onClick: () => {
																	y()?.tryAgain(!0);
																},
																type: "primary",
																children: "Try again with a Premium Model",
															},
														),
														null,
													),
													B
												);
											},
										});
									},
									get children() {
										return (0, w.createComponent)(m.ComposerDiffReviewPure, {
											get composerDataHandle() {
												return p.composerDataHandle;
											},
											get diffReviewData() {
												return y()?.diffReviewData ?? [];
											},
											get isStale() {
												return $();
											},
											get scrollable() {
												return p.scrollable;
											},
											get messagesContainerRef() {
												return p.messagesContainerRef;
											},
											onSelectChange: (B, U) => {
												if (B.groupIndex === -1) return;
												const z =
													y()?.diffReviewData?.[B.groupIndex]?.fileChanges;
												if (!z || B.changeIndex === -1) return;
												const F = z[B.changeIndex];
												if (!F) return;
												const x = o.workspaceContextService.resolveRelativePath(
													F.path,
												);
												if (
													!(
														!U &&
														x.toString() !==
															o.editorService.activeEditor?.resource?.toString()
													)
												)
													if (B.leafIndex !== -1 && F.changes[B.leafIndex]) {
														const H = F.changes[B.leafIndex].startLine;
														M(x, H, B.altKey);
													} else D(x, B.altKey);
											},
											onAcceptLeaf: (B, U, z) => {
												if (B > v()) {
													console.error(
														"[composer] Cannot accept change from future step",
													);
													return;
												}
												const F = y()?.diffReviewData?.[B]?.fileChanges;
												if (!F) return;
												const x = F[U];
												if (!x) return;
												const H = x.changes[z];
												!H || H.startLine === void 0 || k(x.path, H.startLine);
											},
											onRejectLeaf: (B, U, z) => {
												if (B > v()) {
													console.error(
														"[composer] Cannot reject change from future step",
													);
													return;
												}
												const F = y()?.diffReviewData?.[B]?.fileChanges;
												if (!F) return;
												const x = F[U];
												if (!x) return;
												const H = x.changes[z];
												!H || H.startLine === void 0 || L(x.path, H.startLine);
											},
											onAcceptAll: T,
											onRejectAll: P,
											shouldShowAcceptRejectAll: I,
											onAbort: N,
											onAcceptGroupFileChanges: A,
											onRejectGroupFileChanges: R,
										});
									},
								}),
						});
					};
				e.ComposerDiffReviewMessage = g;
			},
		),
		