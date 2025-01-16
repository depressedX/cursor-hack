define(
			de[3988],
			he([1, 0, 228, 3, 47, 65, 31, 25, 499, 17, 45, 471, 479, 720, 58, 193]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0ec = void 0);
				let p = class extends i.$1c {
					constructor(f, b, s, l, y, $, v) {
						super(),
							(this.a = f),
							(this.b = b),
							(this.c = s),
							(this.f = l),
							(this.g = y),
							(this.h = $),
							(this.j = v);
					}
					async run(f, b) {
						const { uri: s } = f,
							l = f.getRangeToGenerate(),
							y = this.b.getActiveCodeEditor(),
							$ = y?.getModel()?.uri,
							v = y?.saveViewState();
						let S;
						const I = new Promise((k) => {
								S = k;
							}),
							T = new Promise((k, L) => {
								const D = this.c.asRelativePath(s),
									M = new t.$6B({
										type: t.ContextIntent_Type.UNSPECIFIED,
										uuid: (0, w.$9g)(),
										intent: {
											case: "file",
											value: {
												mode: t.ContextIntent_File_Mode.CHUNKS,
												relativeWorkspacePath: D,
											},
										},
									}),
									N = {
										startLineNumber: l.startLineNumber,
										endLineNumberExclusive: l.endLineNumber + 1,
									};
								this.a
									.executeCommand(m.$t7b, {
										visible: !1,
										isHeadless: !0,
										invocationType: "new",
										dependencyPromptBarIds: [],
										overrideRange: new r.$iL(
											l.startLineNumber,
											0,
											l.endLineNumber,
											0,
										),
										overrideUri: s,
										insertNewLine: !1,
									})
									.then(async (A) => {
										b.setPromptBarId?.(A);
										const R = this.m(A);
										if (R === void 0) {
											L("Prompt Bar Not Found");
											return;
										}
										this.g.updateContextSession(R.contextSessionUuid, {
											removedIntentUuids: [],
											upsertedIntents: [M],
											rerankEndpoint: (z) => this.h.rerankCmdK(z),
										});
										const O = () => {
											this.a.executeCommand(n.$6W, R.id),
												b.onAbort(),
												L("Aborted");
										};
										b.abortController.signal.addEventListener("abort", O);
										const B =
												this.f.applicationUserPersistentStorage
													.aiHyperModeModel,
											{ promise: U } = this.j.submitEditWithSelection({
												options: {
													fastMode: !1,
													chatMode: !1,
													useContextSession: !0,
													preloadedRequest: (0, g.unwrap)(R.preloadedRequest),
													originalRequest: R.originalRequest?.current,
													contextSessionUuid: R.contextSessionUuid,
													queryHistory: R.queryHistory?.current,
													fileUri: R.uri,
													diffRange: void 0,
													rejectCurrentDiff: () => {},
													isMultiFileEdit: !0,
													isHyperMode: !0,
													useReranker: !1,
													isHeadless_onlyAvailableWithUseContextSession: !0,
													forceUseDiffHistory: !0,
													hyperModel: B,
												},
												promptBarId: R.id,
												query: f.options.instruction ?? "",
												images: R.data.images,
												selectedLinks: R.data.selectedLinks,
												structuredQuery:
													R.data.initText ?? f.options.instruction,
												lineRange: N,
												codeBlocks: R.data.selections,
												docs: R.data.selectedDocs ?? [],
												focusEditor: () => {},
												diffIdCallback: (z) => {
													this.f.setNonPersistentStorage(
														"promptBars",
														(F) => F.id === R.id,
														"diffId",
														z,
													);
												},
												doneCallback: () => {
													this.f.setNonPersistentStorage(
														"promptBars",
														(z) => z.id === R.id,
														"generating",
														!1,
													);
												},
												cancelGenerationWithNoChangesCallback: () => {},
												rejectCallback: () => {
													b.abortController.signal.removeEventListener(
														"abort",
														O,
													),
														L("Aborted");
												},
												spoofedSelection: void 0,
												spoofedDiagnostics: void 0,
												spoofedCellId: R?.cellId,
												rerun: () => {},
												inspectLineStream: async (z) => {
													S(z);
												},
											});
										$ &&
											this.b.openCodeEditor(
												{ resource: $ },
												this.b.getActiveCodeEditor(),
											),
											v && y?.restoreViewState(v),
											U.then(async (z) => {
												if (
													(b.abortController.signal.removeEventListener(
														"abort",
														O,
													),
													z === void 0)
												) {
													L("Final content is undefined");
													return;
												}
												R.id &&
													this.a.executeCommand("cmdK.clearPromptBar", R.id),
													this.a
														.executeCommand(n.$5W, R.id, {
															removeFollowupToo: !0,
														})
														.then(() => {
															this.a
																.executeCommand(n.$RW, R.id, !0)
																.then(() => {
																	k(z.replace(/\n$/, ""));
																});
														});
											});
									});
							}),
							P = await I;
						return { finalResultPromise: T, lineStream: P };
					}
					m(f) {
						return this.f.nonPersistentStorage.promptBars.find(
							(b) => b.id === f,
						);
					}
				};
				(e.$0ec = p),
					(e.$0ec = p =
						Ne(
							[
								j(0, C.$ek),
								j(1, E.$dtb),
								j(2, d.$Vi),
								j(3, u.$0zb),
								j(4, a.$B7b),
								j(5, h.$J7b),
								j(6, c.$d0b),
							],
							p,
						));
			},
		),
		