import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/composer_pb.js';
import '../../../../../../proto/aiserver/v1/tools_pb.js';
import '../../../../../base/common/map.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../../contrib/composer/browser/composer.js';
import '../../../../contrib/composer/browser/composerDataService.js';
import '../../../../contrib/composer/browser/composerUtilsService.js';
import '../../../../../editor/common/languages/language.js';
import '../../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../../base/common/lifecycle.js';
import './errors.js';
import '../../../../../platform/markers/common/markers.js';
import './linterErrorHandler.js';
import '../../../../../platform/markers/browser/markerService.js';
import '../../../selectedContext/browser/selectedContext.js';
import '../../../textfile/common/textfiles.js';
import '../../../../contrib/prettyDialog/browser/prettyDialog.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../base/common/constants.js';
import '../../../../../editor/common/services/resolverService.js';
define(
			de[3977],
			he([
				1, 0, 167, 124, 59, 25, 219, 209, 426, 61, 45, 3, 821, 90, 1283, 770,
				271, 85, 559, 10, 58, 42,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$8yc = void 0);
				let y = class {
					constructor(v, S, I, T, P, k, L, D, M, N, A, R) {
						(this.b = v),
							(this.c = S),
							(this.d = I),
							(this.e = T),
							(this.f = P),
							(this.g = k),
							(this.h = L),
							(this.i = D),
							(this.j = M),
							(this.k = N),
							(this.l = A),
							(this.m = R),
							(this.a = new w.$Jc(100));
					}
					async setup(v, S, I, T) {}
					async firstStreamCall(v, S, I, T) {}
					async streamedCall(v, S, I, T, P) {
						const { capability: k, aiBubbleId: L } = this.n(T, I),
							D = this.o(v),
							M = this.d.resolveRelativePath(D.relativeWorkspacePath);
						if (!M || this.i.shouldIgnoreUri(M))
							throw new Error(
								`Could not find file ${D.relativeWorkspacePath} in the workspace.`,
							);
						const N = k.getBubbleData(L),
							A = await this.p(T, M, D.contents ?? "", D.language, k, L, N),
							R = this.b.getLastAiBubbleWhere(T, (O) => O.text !== "");
						k.setBubbleData(L, {
							additionalData: {
								version: A.version,
								previousBubbleText: R?.text,
							},
						});
					}
					async finishStream(v, S, I, T) {
						const { capability: P, aiBubbleId: k } = this.n(T, I),
							L = this.o(v);
						if (!this.b.getComposerBubble(T, k))
							throw new Error("[composer] ToolFormer: No ai bubble found");
						const M = this.d.resolveRelativePath(L.relativeWorkspacePath),
							N = P.getBubbleData(k),
							A = this.b.getComposerForceMode(T),
							R = await this.p(T, M, L.contents ?? "", L.language, P, k, N),
							O = this.b.getLastAiBubbleWhere(T, (U) => U.text !== "");
						P.setBubbleData(k, {
							additionalData: {
								version: R.version,
								instructions: L.instructions,
								previousBubbleText: O?.text,
							},
						});
						const B = this.h
							.read({ resource: M, severities: c.MarkerSeverity.Error })
							.map(g.$P7b);
						if (
							(P.setBubbleData(k, { additionalData: { startingLints: B } }),
							L.blocking)
						) {
							const U = new a.$Zc();
							try {
								let z;
								const F =
										this.f.guessLanguageIdByFilepathOrFirstLine(R.uri) || "",
									x = (0, n.$7yc)({
										uri: M,
										markerService: this.h,
										workspaceContext: this.d,
										composerId: T,
										bubbleId: k,
										composerDataService: this.b,
										capability: P,
									}),
									H = this.e.getShouldAutoSaveAgenticEdits(),
									V =
										(this.l.getValue(s.$JW) ?? !0)
											? x.shouldProcessDiagnostics(F, H)
											: !1;
								V && ((z = x.startTracking()), U.add(z));
								let G,
									K = "";
								try {
									const ee = await this.m.createModelReference(M);
									U.add(ee),
										(G = ee.object.textEditorModel),
										(K = G.getValue());
								} catch {}
								if (
									(await this.c.runFastApplyOnCodeBlock(
										T,
										{
											uri: R.uri,
											version: R.version,
											content: L.contents ?? "",
											status: "generating",
										},
										{ shouldAutoApply: A !== "chat" },
									),
									(this.e.getShouldAutoSaveAgenticEdits() ||
										P.shouldUseYoloMode()) &&
										!(await this.c.saveFile(R.uri, {
											force: !0,
											waitForEditorToOpen: !0,
										})) &&
										this.k.isDialogOpen() &&
										(await new Promise((_) => {
											const te = this.k.onDidCloseDialog(() => {
												te.dispose(), _(void 0);
											});
										})),
									this.c.shouldShowAcceptRejectAll(T))
								) {
									const ee = P.addPendingDecision(
											k,
											i.ClientSideToolV2.EDIT_FILE,
											I,
											(te) => {
												te
													? this.c.accept(T, R.uri, R.version)
													: this.c.reject(T, R.uri, R.version);
											},
											!1,
										),
										_ = this.g.onChangeEffectManuallyDisposed({
											deps: [() => this.b.getInlineDiff(T, R.uri, R.version)],
											onChange: ({ deps: te }) => {
												te[0] || (ee(), _.dispose());
											},
										});
								}
								let J;
								if (G === void 0) {
									const ee = await this.m.createModelReference(M);
									U.add(ee),
										(G = ee.object.textEditorModel),
										(J = G.getValue());
								} else J = G.getValue();
								let W,
									X = Promise.resolve(!1);
								V && (X = x.waitForLinterSettling().then(() => !0));
								let Y,
									ie = !1;
								const ne = await this.e.computeDiff(
									K,
									J,
									L.relativeWorkspacePath,
								);
								return (
									(Y = i.$Rx.fromJsonString(JSON.stringify(ne))),
									V &&
										P.setBubbleData(k, {
											additionalData: { lintingStatus: "linting" },
										}),
									(await X) &&
										((W = x.getNewLinterErrors()),
										P.setBubbleData(k, {
											additionalData: { lintingStatus: "linted" },
										})),
									this.c.handleAiEditToolCallFinished(),
									new i.$Qx({
										isApplied: !0,
										diff: Y,
										applyFailed: ie,
										linterErrors: W,
									})
								);
							} finally {
								U.dispose();
							}
						} else
							return (
								this.c
									.runFastApplyOnCodeBlock(
										T,
										{
											uri: R.uri,
											version: R.version,
											content: L.contents ?? "",
											status: "generating",
										},
										{ shouldAutoApply: !0 },
									)
									.catch((U) => {
										console.error(
											"[composer] error in non-blocking runFastApplyOnCodeBlock",
											U,
										);
									}),
								new i.$Qx({ isApplied: !1 })
							);
					}
					async call(v, S, I, T) {
						return new i.$Qx({ isApplied: !1 });
					}
					n(v, S) {
						const T = this.b.getComposerData(v)
							? this.b.getComposerCapability(
									v,
									t.ComposerCapabilityRequest_ComposerCapabilityType
										.TOOL_FORMER,
								)
							: void 0;
						if (!T)
							throw new h.$3yc({
								clientVisibleErrorMessage: "Internal Error on Edit Tool",
								modelVisibleErrorMessage: "Internal server error on tool call",
								actualErrorMessage: "Capability not found",
							});
						const P = T.getBubbleIdByToolCallId(S);
						if (!P)
							throw new h.$3yc({
								clientVisibleErrorMessage: "Internal Error on Edit Tool",
								modelVisibleErrorMessage: "Internal server error on tool call",
								actualErrorMessage: `No ai bubble id found for tool call id ${S}`,
							});
						return { capability: T, aiBubbleId: P };
					}
					o(v) {
						if (!v)
							throw new h.$3yc({
								clientVisibleErrorMessage: "Tool args not properly passed in",
								modelVisibleErrorMessage: "Tool args not properly passed in",
								actualErrorMessage: "Tool args are undefined",
							});
						return v;
					}
					async p(v, S, I, T, P, k, L) {
						const D = this.b.getComposerForceMode(v);
						if (L?.additionalData?.version !== void 0) {
							this.b.updateComposerCodeBlock(v, S, L.additionalData.version, {
								content: I,
							});
							const N = this.b.getComposerCodeBlock(
								v,
								S,
								L.additionalData.version,
							);
							if (!N)
								throw new h.$3yc({
									clientVisibleErrorMessage: "Internal Error on Edit Tool",
									modelVisibleErrorMessage:
										"Internal server error on tool call",
									actualErrorMessage: "potential code block not found",
								});
							return N;
						}
						const { languageId: M } =
							this.f.createByLanguageNameOrFilepathOrFirstLine(
								T ?? null,
								S,
								void 0,
							);
						return this.c.registerNewCodeBlock(v, S, I, 0, {
							languageId: M,
							status: "generating",
							isNotApplied: D === "chat",
							bubbleId: k,
						});
					}
				};
				(e.$8yc = y),
					(e.$8yc = y =
						Ne(
							[
								j(0, d.IComposerDataService),
								j(1, C.IComposerService),
								j(2, E.$Vi),
								j(3, m.IComposerUtilsService),
								j(4, r.$nM),
								j(5, u.$0zb),
								j(6, c.$aM),
								j(7, p.$Q9b),
								j(8, o.$kZ),
								j(9, f.$hdc),
								j(10, b.$gj),
								j(11, l.$MO),
							],
							y,
						));
			},
		),
		