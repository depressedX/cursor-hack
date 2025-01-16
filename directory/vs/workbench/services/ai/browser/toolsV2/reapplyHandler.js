define(
			de[3979],
			he([
				1, 0, 124, 25, 398, 219, 209, 167, 821, 45, 426, 61, 90, 1283, 3, 271,
				85, 559,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$azc = void 0);
				let f = class extends w.$Xyc {
					constructor(s, l, y, $, v, S, I, T, P, k) {
						super(),
							(this.a = s),
							(this.b = l),
							(this.c = y),
							(this.d = $),
							(this.e = v),
							(this.f = S),
							(this.g = I),
							(this.h = T),
							(this.i = P),
							(this.j = k);
					}
					async call(s, l, y, $) {
						const { capability: v, aiBubbleId: S } = this.k($, y);
						if (!s)
							throw new Error(
								"No reapply parameters provided. Need to give at least the path.",
							);
						if (!s.relativeWorkspacePath)
							throw new Error(
								"relativeWorkspacePath is required to reapply an edit.",
							);
						const I = this.a.resolveRelativePath(s.relativeWorkspacePath);
						if (!I || this.h.shouldIgnoreUri(I))
							throw new Error(
								`Could not find file ${s.relativeWorkspacePath} in the workspace.`,
							);
						const T = this.c.getLatestCodeBlockForUri($, I);
						if (!T)
							throw new Error(`No code block found for uri ${I.toString()}`);
						const P = new n.$Zc();
						try {
							let k;
							const L =
									this.f.guessLanguageIdByFilepathOrFirstLine(T.uri) || "",
								D = (0, c.$7yc)({
									uri: I,
									markerService: this.g,
									workspaceContext: this.a,
									composerId: $,
									bubbleId: S,
									composerDataService: this.c,
									capability: v,
								}),
								M = D.shouldProcessDiagnostics(
									L,
									this.e.getShouldAutoSaveAgenticEdits(),
								);
							if (
								(M && ((k = D.startTracking()), P.add(k)),
								await this.b.reapply($, I),
								(v.shouldUseYoloMode() ||
									this.e.getShouldAutoSaveAgenticEdits()) &&
									!(await this.b.saveFile(T.uri, {
										force: !0,
										waitForEditorToOpen: !0,
									})) &&
									this.j.isDialogOpen() &&
									(await new Promise((z) => {
										const F = this.j.onDidCloseDialog(() => {
											F.dispose(), z(void 0);
										});
									})),
								this.b.shouldShowAcceptRejectAll($))
							) {
								const U = v.addPendingDecision(
										S,
										t.ClientSideToolV2.REAPPLY,
										y,
										(F) => {
											F
												? this.b.accept($, I, T.version)
												: this.b.reject($, I, T.version);
										},
										!1,
									),
									z = this.d.onChangeEffectManuallyDisposed({
										deps: [() => T.status],
										onChange: () => {
											["accepted", "rejected"].includes(T.status) &&
												(U(), z.dispose());
										},
									});
							}
							const N = this.e.getCodeBlockOriginalModelLines(
									$,
									T.uri,
									T.version,
								),
								A = this.e.getCodeBlockNewModelLines($, T.uri, T.version);
							let R;
							M &&
								(await D.waitForLinterSettling(), (R = D.getNewLinterErrors()));
							let O,
								B = !1;
							if (A && N) {
								const U = await this.e.computeDiff(
									N.join(`
`),
									A.join(`
`),
									I.toString(),
								);
								O = t.$Rx.fromJsonString(JSON.stringify(U));
							} else B = !0;
							return new t.$Dx({
								isApplied: !0,
								diff: O,
								applyFailed: B,
								linterErrors: R,
							});
						} finally {
							P.dispose();
						}
					}
					k(s, l) {
						const $ = this.c.getComposerData(s)
							? this.c.getComposerCapability(
									s,
									d.ComposerCapabilityRequest_ComposerCapabilityType
										.TOOL_FORMER,
								)
							: void 0;
						if (!$)
							throw new m.$3yc({
								clientVisibleErrorMessage: "Internal Error on Edit Tool",
								modelVisibleErrorMessage: "Internal server error on tool call",
								actualErrorMessage: "Capability not found",
							});
						const v = $.getBubbleIdByToolCallId(l);
						if (!v)
							throw new m.$3yc({
								clientVisibleErrorMessage: "Internal Error on Edit Tool",
								modelVisibleErrorMessage: "Internal server error on tool call",
								actualErrorMessage: `No ai bubble id found for tool call id ${l}`,
							});
						return { capability: $, aiBubbleId: v };
					}
				};
				(e.$azc = f),
					(e.$azc = f =
						Ne(
							[
								j(0, i.$Vi),
								j(1, E.IComposerService),
								j(2, C.IComposerDataService),
								j(3, r.$0zb),
								j(4, u.IComposerUtilsService),
								j(5, a.$nM),
								j(6, h.$aM),
								j(7, g.$Q9b),
								j(8, p.$kZ),
								j(9, o.$hdc),
							],
							f,
						));
			},
		),
		