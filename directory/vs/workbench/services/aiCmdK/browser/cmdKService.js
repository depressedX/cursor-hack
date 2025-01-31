import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../editor/common/core/selection.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../ai/browser/aiService.js';
import '../../../../editor/common/services/resolverService.js';
import '../../ai/browser/aiUtilsService.js';
import '../../aiSettings/browser/aiSettingsService.js';
import '../../../../base/common/lifecycle.js';
import '../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../contrib/cursoreval/browser/cursorEvalService.js';
import '../../ai/browser/fastContextService.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/uuid.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../platform/markers/common/markers.js';
import '../../ai/browser/promptBarService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../aiContext/browser/aiContext.js';
import '../../../../../proto/aiserver/v1/cmdk_pb.js';
import '../../../../../proto/aiserver/v1/aiserver_connectweb.js';
import '../../ai/browser/utils.js';
import '../../cursorAuth/browser/authenticationService.js';
import '../../../../platform/files/common/files.js';
import '../../utils/browser/generateImageProtos.js';
import '../../../contrib/aiFeatureStatusService/browser/aiFeatureStatusService.js';
define(
			de[479],
			he([
				1, 0, 20, 104, 5, 45, 32, 118, 42, 567, 315, 3, 83, 25, 684, 400, 9, 47,
				65, 90, 620, 10, 471, 644, 341, 191, 232, 22, 1045, 287,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*extensions*/,
				i /*selection*/,
				w /*instantiation*/,
				E /*reactiveStorageService*/,
				C /*telemetry*/,
				d /*aiService*/,
				m /*resolverService*/,
				r /*aiUtilsService*/,
				u /*aiSettingsService*/,
				a /*lifecycle*/,
				h /*utils_pb*/,
				c /*workspace*/,
				n /*cursorEvalService*/,
				g /*fastContextService*/,
				p /*uri*/,
				o /*uuid*/,
				f /*codeEditorService*/,
				b /*markers*/,
				s /*promptBarService*/,
				l /*configuration*/,
				y /*aiContext*/,
				$ /*cmdk_pb*/,
				v /*aiserver_connectweb*/,
				S /*utils*/,
				I /*authenticationService*/,
				T /*files*/,
				P /*generateImageProtos*/,
				k /*aiFeatureStatusService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$J7b = void 0),
					(e.$K7b = D),
					(e.$L7b = M),
					(e.$M7b = R),
					(e.$N7b = O),
					(e.$J7b = (0, w.$Mi)("cmdKService"));
				let L = class extends a.$1c {
					constructor(U, z, F, x, H, q, V, G, K, J, W, X, Y, ie, ne, ee) {
						super(),
							(this.b = U),
							(this.c = z),
							(this.g = F),
							(this.h = x),
							(this.m = H),
							(this.n = q),
							(this.q = V),
							(this.r = G),
							(this.s = K),
							(this.t = J),
							(this.u = W),
							(this.w = X),
							(this.y = Y),
							(this.z = ie),
							(this.C = ne),
							(this.F = ee),
							(this.a = this.D(this.t.createScoped(this))),
							this.a.onChangeEffect({
								deps: [() => this.t.nonPersistentStorage.promptBars],
								onChange: ({ deps: _, prevDeps: te, prevReturnValue: Q }) => {
									const Z = _[0] ? Array.from(_[0].values()).flat() : [],
										se = te && te[0] ? Array.from(te[0].values()).flat() : [];
									se.length > 0 &&
										se
											.filter(
												(le) =>
													!Z.some(
														(oe) =>
															oe.contextSessionUuid === le.contextSessionUuid,
													),
											)
											.forEach((le) =>
												this.w.removeContextSession(le.contextSessionUuid),
											),
										Z.length > 0 &&
											Z.filter(
												(le) =>
													!se.some(
														(oe) =>
															oe.contextSessionUuid === le.contextSessionUuid,
													),
											).forEach((le) => {
												this.w.getReactiveReadonlyContextSession(
													le.contextSessionUuid,
												) === void 0 &&
													this.w.createContextSession({
														...(0, y.$D7b)(),
														explicitUuid: le.contextSessionUuid,
													});
											});
								},
							});
					}
					async rerankTerminalCmdK(U) {
						const z = await this.b.cmdKClient(),
							F = await this.b.getExplicitContext(),
							x = await (async () => new $.$DC({ explicitContext: F }))(),
							H = new $.$pC({
								contextItems: U,
								legacyContext: x,
								cmdKOptions: {
									modelDetails: this.b.getModelDetails({
										specificModelField: "terminal-cmd-k",
									}),
								},
							});
						return z.rerankTerminalCmdKContext(H, {
							headers: (0, S.$m6b)((0, o.$9g)()),
						});
					}
					async rerankCmdKWithCursorSmallCaching(U) {
						if (
							!this.t.applicationUserPersistentStorage.allowMultiCmdKGenerations
						) {
							console.warn(
								"WARN WARN WE TRIED TO CACHE ON RERANK WITHOUT MULTI GEN ENABLED",
							);
							return;
						}
						const z = await this.b.cmdKClient();
						this.F.maybeRefreshFeatureStatus("shouldUseReranking");
						const F = this.F.getCachedFeatureStatus("shouldUseReranking"),
							x = await this.b.getExplicitContext();
						x.context = x.context.trim() === "" ? "" : x.context;
						const H = await (async () => new $.$DC({ explicitContext: x }))(),
							q = this.b.getModelDetails({ specificModelField: "cmd-k" }),
							V = new $.$pC({
								contextItems: U,
								legacyContext: H,
								cmdKOptions: {
									modelDetails: new h.$Zs({ ...q, modelName: "cursor-small" }),
									useReranker: F,
								},
							});
						await void z.rerankCmdKContext(V, {
							headers: (0, S.$m6b)((0, o.$9g)()),
						});
					}
					async rerankCmdK(U) {
						const z = await this.b.cmdKClient();
						this.F.maybeRefreshFeatureStatus("shouldUseReranking");
						const F = this.F.getCachedFeatureStatus("shouldUseReranking"),
							x = await this.b.getExplicitContext();
						x.context = x.context.trim() === "" ? "" : x.context;
						const H = await (async () => new $.$DC({ explicitContext: x }))(),
							q = new $.$pC({
								contextItems: U,
								legacyContext: H,
								cmdKOptions: {
									modelDetails: this.b.getModelDetails({
										specificModelField: "cmd-k",
									}),
									useReranker: F,
								},
							});
						return z.rerankCmdKContext(q, {
							headers: (0, S.$m6b)((0, o.$9g)()),
						});
					}
					async getPreparedImagesData(U, z, F = 512) {
						const x = [];
						for (const H of U) {
							const q = await (0, P.$F7b)(H, () => z(H.uuid), this.C, F);
							x.push(q);
						}
						return x;
					}
					async getPreparedEditRequest({
						query: U,
						fastMode: z,
						lineRange: F,
						codeBlocks: x,
						docs: H,
						spoofedSelection: q,
						spoofedDiagnostics: V,
						spoofedCellId: G,
						originalRequest: K,
						modelUriForEdit: J,
						images: W,
						links: X,
					}) {
						const Y = U,
							ie = this.r.getActiveCodeEditor();
						if (!ie || !ie.hasModel())
							throw new Error("No model found, cannot edit.");
						J || (J = ie.getModel().uri);
						const ne = await this.y.createModelReference(J);
						try {
							const ee = ne.object.textEditorModel,
								_ = Math.min(
									Math.max(F.endLineNumberExclusive - 1, F.startLineNumber),
									ee.getLineCount(),
								),
								te = ee.getLineMaxColumn(_),
								Q = new i.$kL(F.startLineNumber, 1, _, te),
								Z = V ?? M(this.s, J, Q),
								se =
									await this.b.getCurrentFileInfoFromRawWithScrubbingAndNotebookHandling(
										J,
										ee.getValue(),
										Q,
										q,
										G,
									),
								re = new h.$4s({
									relativeWorkspacePath: this.g.asRelativePath(J),
									errors: Z,
									fileContents: se?.contents,
								}),
								[le, oe] = z
									? [[], []]
									: await Promise.all([
											this.m.getEmbeddingsFromCache(Y),
											this.m.getNonEmbeddingChunks(Y),
										]),
								ae =
									x === void 0
										? []
										: x.map((ye) => ({
												relativeWorkspacePath: this.g.asRelativePath(
													p.URI.revive(ye.uri),
												),
												range: {
													startPosition: {
														line: ye.range.selectionStartLineNumber,
														column: ye.range.selectionStartColumn,
													},
													endPosition: {
														line: ye.range.positionLineNumber,
														column: ye.range.positionColumn,
													},
												},
												contents: ye.rawText ?? ye.text,
												signatures: { ranges: [] },
												detailedLines: ye.rawText
													? ye.rawText
															.split(`
`)
															.map((ue, fe) => ({
																text: ue,
																lineNumber:
																	fe + ye.range.selectionStartLineNumber,
																isSignature: !1,
															}))
													: [],
											})),
								pe = await this.b.getExplicitContext();
							return (
								(pe.context = pe.context.trim() === "" ? "" : pe.context),
								{
									conversation: [],
									repositories: [],
									sessionId: "",
									fastMode: z,
									query: Y,
									currentFile: se,
									workspaceRootPath: this.n.getWorkspaceRootPath(),
									explicitContext: pe,
									linterErrors: re,
									promptCodeBlocks: ae,
									codeBlocks: [
										...le.map((ye) => (0, d.$Sfc)(ye)),
										...oe.map((ye) => (0, d.$Sfc)(ye)),
									],
									documentationIdentifiers:
										H === void 0 ? [] : H.map((ye) => ye.docId),
									originalRequest: K,
									images: W
										? await this.getPreparedImagesData(W, (ye) => {})
										: [],
									links: X ?? [],
								}
							);
						} finally {
							ne.dispose();
						}
					}
					async streamPreparedEdit(
						U,
						{ type: z, generationUUID: F, options: x },
					) {
						this.q.publicLogCapture(`Submitted ${z}`),
							this.q.publicLogCapture("Submitted Prompt");
						const H = await this.h.getCmdKDebugInfo(),
							q =
								x?.overrideModelDetails ||
								this.b.getModelDetails({ specificModelField: "cmd-k" });
						this.q.publicLogCapture(`submitted.${z}`, { model: q.modelName });
						const [V, G] = this.b.registerNewGeneration({
							metadata: void 0,
							generationUUID: F,
						});
						this.b.decrementBubbleTimesLeft();
						const K = { ...U, modelDetails: q, cmdKDebugInfo: H };
						this.b.addToPromptHistory({
							prompt: U.query,
							commandType: s.CommandType.EDIT,
						});
						const J = await this.b.aiClient(),
							X = (z === "edit" ? J.streamEdit : J.streamGenerate)(K, {
								signal: G.signal,
								headers: (0, S.$m6b)(F),
							});
						let Y = v.$q0.typeName + "/";
						z === "edit"
							? (Y += v.$q0.methods.streamEdit.name)
							: (Y += v.$q0.methods.streamGenerate.name);
						const ie = this.b.streamResponseText({
							streamer: (0, d.$Mfc)(X),
							streamerURL: Y,
							generationUUID: F,
							modelDetails: q,
							rethrowCancellation: !0,
							source: "cmd-k",
							rerun: x?.rerun,
						});
						return this.b.streamLines(ie);
					}
					getPromptBarCurrentRange(U, z) {
						if (U === void 0) return;
						const F = this.t.nonPersistentStorage.inlineDiffs.find(
							(H) => H.id === U.diffId,
						);
						if (F !== void 0) return F.currentRange;
						const x = z?.getDecorationRange(U.currentRangeDecorationId);
						if (x)
							return {
								startLineNumber: x.startLineNumber,
								endLineNumberExclusive: x.endLineNumber + 1,
							};
					}
				};
				(L = Ne(
					[
						j(0, d.$Nfc),
						j(1, u.$S6b),
						j(2, c.$Vi),
						j(3, n.$06b),
						j(4, g.$26b),
						j(5, r.$36b),
						j(6, C.$km),
						j(7, f.$dtb),
						j(8, b.$aM),
						j(9, E.$0zb),
						j(10, l.$gj),
						j(11, y.$B7b),
						j(12, m.$MO),
						j(13, I.$x6b),
						j(14, T.$ll),
						j(15, k.$H7b),
					],
					L,
				)),
					(0, t.$lK)(e.$J7b, L, t.InstantiationType.Delayed);
				function D(B) {
					const U = B.text,
						z = B.symbols;
					let F = "";
					for (let x of z) {
						const H =
								x.location.uri.path +
								":" +
								x.location.range.startLineNumber +
								":" +
								x.location.range.endLineNumber,
							q = x.location.uri.path.split(".").pop();
						(F +=
							"path: " +
							H +
							`
`),
							(F +=
								"```" +
								q +
								`
`),
							(F +=
								x.code +
								`
`),
							(F += "```\n\n");
					}
					return (F += U), F;
				}
				function M(B, U, z) {
					return B.read({ resource: U })
						.filter(
							(x) =>
								x.severity === b.MarkerSeverity.Error &&
								A(
									x.startLineNumber,
									x.endLineNumber,
									z.startLineNumber,
									z.endLineNumber,
								),
						)
						.map(
							(x) =>
								new h.$3s({
									message: x.message,
									range: new h.$Ns({
										startPosition: {
											line: x.startLineNumber,
											column: x.startColumn,
										},
										endPosition: { line: x.endLineNumber, column: x.endColumn },
									}),
								}),
						);
				}
				function N(B, U, z) {
					return B <= z && z <= U;
				}
				function A(B, U, z, F) {
					return N(B, U, z) || N(B, U, F) || N(z, F, B) || N(z, F, U);
				}
				function R(B) {
					return B.contents
						.replace(/\r$/, "")
						.split(`
`)
						.slice(
							B.selection?.startPosition?.line ?? 0,
							(B.selection?.endPosition?.line ?? 0) + 1,
						);
				}
				function O({
					req: B,
					options: U,
					previousStructuredTextsNewestFirst: z,
				}) {
					if (U?.structured === !0)
						try {
							if (z.length > 0) {
								const F = JSON.parse(z[0]);
								for (let x = 1; x < z.length; x++) {
									const H = JSON.parse(z[x]);
									F.root.children[0].children = [
										...H.root.children[0].children,
										{
											detail: 0,
											format: 0,
											mode: "normal",
											style: "",
											text: ", ",
											type: "text",
											version: 1,
										},
										...F.root.children[0].children,
									];
								}
								return JSON.stringify(F);
							}
						} catch (F) {
							console.warn(
								"Failed to parse structured text; defaulting to non-structured text",
								F,
							);
						}
					if (B.case === "originalRequest") {
						let F = B.req,
							x = F.query;
						for (; F.originalRequest !== void 0; )
							(F = F.originalRequest), (x = F.query + ", " + x);
						return x;
					} else {
						let F = B.queryHistory,
							x = F.query?.query ?? "";
						for (; F.queryHistory !== void 0; )
							(F = F.queryHistory), (x = (F.query?.query ?? "") + ", " + x);
						return x;
					}
				}
			},
		)
