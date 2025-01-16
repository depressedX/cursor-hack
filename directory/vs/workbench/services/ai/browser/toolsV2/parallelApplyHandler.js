define(
			de[3978],
			he([
				1, 0, 124, 25, 398, 219, 209, 167, 821, 45, 426, 9, 61, 42, 285, 1112,
				5, 191, 47, 118, 90, 1283, 3, 85, 559,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$bzc = void 0);
				let S = class extends w.$Xyc {
					constructor(T, P, k, L, D, M, N, A, R, O, B, U) {
						super(),
							(this.b = T),
							(this.c = P),
							(this.d = k),
							(this.e = L),
							(this.f = D),
							(this.g = M),
							(this.h = N),
							(this.i = A),
							(this.j = R),
							(this.k = O),
							(this.l = B),
							(this.m = U),
							(this.a = this.i.createInstance(n.$q6b, { service: g.$cbb }));
					}
					async call(T, P, k, L) {
						const { capability: D, aiBubbleId: M } = this.p(L, k);
						if (!T) throw new Error("No parallel apply parameters provided.");
						if (!T.fileRegions || T.fileRegions.length === 0)
							throw new Error("No edit files provided for parallel apply.");
						if (T.editPlan.length === 0)
							throw new Error("No edit plan provided for parallel apply.");
						const N = T.editPlan,
							A = new Map(),
							R = [];
						for (const U of T.fileRegions) {
							const z = U.relativeWorkspacePath,
								F = A.get(z) ?? 0;
							A.set(z, F + 1);
							const x = this.n({
								composerId: L,
								fileRegion: U,
								codeBlockIndex: F,
								aiBubbleId: M,
							});
							R.push(x);
						}
						const O = await Promise.all(
								R.map(({ codeBlock: U, fileRegion: z }) =>
									this.o({
										codeBlock: U,
										fileRegion: z,
										composerId: L,
										editPlan: N,
										capability: D,
										aiBubbleId: M,
										toolId: k,
										abortController: P,
									}),
								),
							),
							B = new Map();
						for (const { codeBlock: U } of O) {
							const z = U.uri.toString();
							B.has(z)
								? B.get(z).add(U.version)
								: B.set(z, new Set([U.version]));
						}
						if (
							((D.shouldUseYoloMode() ||
								this.f.getShouldAutoSaveAgenticEdits()) &&
								(await this.c.saveFiles(
									Array.from(B.keys()).map((U) => a.URI.parse(U)),
									{ force: !0, waitForEditorToOpen: !0 },
								)),
							this.c.shouldShowAcceptRejectAll(L))
						) {
							const U = D.addPendingDecision(
									M,
									t.ClientSideToolV2.PARALLEL_APPLY,
									k,
									(F) => {
										const x = Array.from(B.keys()).map((H) => a.URI.parse(H));
										if (F)
											for (const H of x) {
												const q = this.d.getInlineDiff(L, H);
												q?.composerMetadata &&
													B.get(H.toString())?.has(
														q.composerMetadata.version,
													) &&
													this.c.accept(L, H, q.composerMetadata.version);
											}
										else
											for (const H of x) {
												const q = this.d.getInlineDiff(L, H);
												q?.composerMetadata &&
													B.get(H.toString())?.has(
														q.composerMetadata.version,
													) &&
													this.c.reject(L, H, q.composerMetadata.version);
											}
									},
									!1,
								),
								z = this.e.onChangeEffectManuallyDisposed({
									deps: [() => this.d.getAllInlineDiffs(L)],
									onChange: ({ deps: F }) => {
										F[0]
											.filter((H) => B.has(H.uri.toString()))
											.some(
												(H) =>
													H.composerMetadata &&
													B.get(H.uri.toString())?.has(
														H.composerMetadata.version,
													),
											) || (U(), z.dispose());
									},
								});
						}
						return new t.$Pz({
							fileResults: O.map(({ editFileResult: U }) => U),
						});
					}
					n({
						composerId: T,
						fileRegion: P,
						codeBlockIndex: k,
						aiBubbleId: L,
					}) {
						if (!P.range) throw new Error("No range provided for file region.");
						const D = this.b.resolveRelativePath(P.relativeWorkspacePath),
							M = (0, f.$9g)();
						return { codeBlock: this.q(T, D, "", M, k, L), fileRegion: P };
					}
					async o({
						codeBlock: T,
						fileRegion: P,
						composerId: k,
						editPlan: L,
						capability: D,
						aiBubbleId: M,
						toolId: N,
						abortController: A,
					}) {
						if (!P.range) throw new Error("No range provided for file region.");
						const { startLineNumber: R, endLineNumberInclusive: O } = P.range;
						if (!T.codeBlockIdentifier)
							throw new Error("Code block identifier not set.");
						const B = new y.$Zc();
						try {
							let U,
								z = "",
								F = "";
							try {
								const re = await this.h.createModelReference(T.uri);
								B.add(re),
									(U = re.object.textEditorModel),
									(z = U.getValueInRange({
										startLineNumber: R,
										startColumn: 1,
										endLineNumber: O,
										endColumn: 1 / 0,
									})),
									(F = U.getValue());
							} catch {}
							const x = await this.a.get();
							let H = "";
							A.signal.addEventListener("abort", () => {
								G.abort();
							});
							const q = (0, f.$9g)(),
								[V, G] = this.j.registerNewGeneration({
									generationUUID: q,
									metadata: void 0,
								}),
								K = x.streamParallelApply(
									{
										codeBlock: {
											relativeWorkspacePath: P.relativeWorkspacePath,
											range: {
												startPosition: { line: R },
												endPosition: { line: O },
											},
											contents: z,
										},
										file: {
											relativeWorkspacePath: P.relativeWorkspacePath,
											contents: z,
										},
										editPlan: L,
									},
									{ signal: G.signal, headers: (0, o.$m6b)(q) },
								);
							for await (const re of K) H += re.text;
							const J = H.match(/```[^\n]*\n([\s\S]*)\n```/);
							let W = H;
							J && (W = J[1]),
								this.d.updateComposerCodeBlock(k, T.uri, T.version, {
									content: W,
								});
							const X = D.getBubbleData(M);
							D.setBubbleData(M, {
								additionalData: {
									codeBlockIdentifierToRawMessage: {
										...(X?.additionalData?.codeBlockIdentifierToRawMessage ||
											{}),
										[T.codeBlockIdentifier]: H,
									},
								},
							});
							let Y;
							const ie =
									this.g.guessLanguageIdByFilepathOrFirstLine(T.uri) || "",
								ne = (0, l.$7yc)({
									uri: T.uri,
									markerService: this.k,
									workspaceContext: this.b,
									composerId: k,
									bubbleId: M,
									composerDataService: this.d,
									capability: D,
								}),
								ee = ne.shouldProcessDiagnostics(
									ie,
									this.f.getShouldAutoSaveAgenticEdits(),
								);
							ee && ((Y = ne.startTracking()), B.add(Y)),
								await this.c.runFastApplyOnCodeBlock(
									k,
									{ ...T, status: "generating" },
									{ shouldAutoApply: !0, isReapply: !0 },
								);
							let _;
							if (U === void 0) {
								const re = await this.h.createModelReference(T.uri);
								B.add(re), (U = re.object.textEditorModel), (_ = U.getValue());
							} else _ = U.getValue();
							let te;
							ee &&
								(await ne.waitForLinterSettling(),
								(te = ne.getNewLinterErrors()));
							let Q,
								Z = !1;
							const se = await this.f.computeDiff(
								F,
								_,
								P.relativeWorkspacePath,
							);
							return (
								(Q = t.$Rx.fromJsonString(JSON.stringify(se))),
								this.c.handleAiEditToolCallFinished(),
								{
									editFileResult: new t.$Qx({
										isApplied: !0,
										diff: Q,
										applyFailed: Z,
										linterErrors: te,
									}),
									codeBlock: T,
								}
							);
						} finally {
							B.dispose();
						}
					}
					p(T, P) {
						const L = this.d.getComposerData(T)
							? this.d.getComposerCapability(
									T,
									d.ComposerCapabilityRequest_ComposerCapabilityType
										.TOOL_FORMER,
								)
							: void 0;
						if (!L)
							throw new m.$3yc({
								clientVisibleErrorMessage:
									"Internal Error on Parallel Apply Tool",
								modelVisibleErrorMessage: "Internal server error on tool call",
								actualErrorMessage: "Capability not found",
							});
						const D = L.getBubbleIdByToolCallId(P);
						if (!D)
							throw new m.$3yc({
								clientVisibleErrorMessage:
									"Internal Error on Parallel Apply Tool",
								modelVisibleErrorMessage: "Internal server error on tool call",
								actualErrorMessage: `No ai bubble id found for tool call id ${P}`,
							});
						return { capability: L, aiBubbleId: D };
					}
					q(T, P, k, L, D, M) {
						const N = this.d.getComposerForceMode(T),
							{ languageId: A } =
								this.g.createByLanguageNameOrFilepathOrFirstLine(
									null,
									P,
									void 0,
								);
						return this.c.registerNewCodeBlock(T, P, k, D, {
							languageId: A,
							status: "generating",
							isNotApplied: N === "chat",
							codeBlockIdentifier: L,
							bubbleId: M,
						});
					}
				};
				(e.$bzc = S),
					(e.$bzc = S =
						Ne(
							[
								j(0, i.$Vi),
								j(1, E.IComposerService),
								j(2, C.IComposerDataService),
								j(3, r.$0zb),
								j(4, u.IComposerUtilsService),
								j(5, h.$nM),
								j(6, c.$MO),
								j(7, p.$Li),
								j(8, b.$Nfc),
								j(9, s.$aM),
								j(10, $.$kZ),
								j(11, v.$hdc),
							],
							S,
						));
			},
		),
		