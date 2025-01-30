import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../base/common/lifecycle.js';
import '../../../services/ai/browser/aiMiscServices.js';
import '../../../../base/common/event.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../base/common/uuid.js';
import '../../../../../proto/aiserver/v1/cpp_pb.js';
import '../../../../platform/product/common/productService.js';
import '../../../../base/common/cppUtils/utils.js';
import '../../../../editor/common/services/model.js';
import '../../../services/ai/browser/metricsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../services/ai/common/dataScrubbingService.js';
import '../../../services/cursorAuth/browser/authenticationService.js';
import '../../../services/ai/browser/backendClient.js';
import '../../../../../proto/aiserver/v1/aiserver_connectweb.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../services/ai/browser/cursorCredsService.js';
import '../../../../platform/files/common/files.js';
import '../../../../editor/common/core/range.js';
import '../../../../platform/notification/common/notification.js';
import '../../../services/environment/common/environmentService.js';
import '../../../../base/common/path.js';
import '../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../../../../base/common/network.js';
import '../../../../editor/common/services/resolverService.js';
define(
			de[3639],
			he([
				1, 0, 20, 3, 137, 6, 45, 25, 47, 367, 62, 646, 67, 619, 18, 56, 356,
				232, 285, 341, 5, 477, 22, 17, 40, 78, 54, 134, 23, 42,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*extensions*/,
				i /*lifecycle*/,
				w /*aiMiscServices*/,
				E /*event*/,
				C /*reactiveStorageService*/,
				d /*workspace*/,
				m /*uuid*/,
				r /*cpp_pb*/,
				u /*productService*/,
				a /*utils*/,
				h /*model*/,
				c /*metricsService*/,
				n /*editorService*/,
				g /*editorBrowser*/,
				p /*dataScrubbingService*/,
				o /*authenticationService*/,
				f /*backendClient*/,
				b /*aiserver_connectweb*/,
				s /*instantiation*/,
				l /*cursorCredsService*/,
				y /*files*/,
				$ /*range*/,
				v /*notification*/,
				S /*environmentService*/,
				I /*path*/,
				T /*reactiveStorageTypes*/,
				P /*network*/,
				k /*resolverService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ifd = void 0);
				const L = [P.Schemas.file, P.Schemas.untitled, P.Schemas.vscodeRemote];
				var D;
				(function (H) {
					(H.StopTrackingModelForLargeChange =
						"stopTrackingModelForLargeChange"),
						(H.StopTrackingModelForLargeModel =
							"stopTrackingModelForLargeModel"),
						(H.UpdatedSettings = "updatedSettings"),
						(H.Ok = "ok");
				})(D || (D = {}));
				const M = 256e3,
					N = 1e6,
					A = 1e6;
				async function R(H, q) {
					return await Promise.race([
						H,
						new Promise((V) => setTimeout(() => V(void 0), q)),
					]);
				}
				const O = "<|SECRET_TEXT_OMITTED|>";
				class B extends i.$1c {
					getSessionId() {
						return this.c;
					}
					getChangeHistoryByRelativePath(q, V) {
						const G = this.changeHistoryByRelativePath[q];
						if (G === void 0) return;
						const K = G[V];
						if (K !== void 0) return K;
					}
					constructor(q, V, G, K, J, W, X) {
						super(),
							(this.g = q),
							(this.h = V),
							(this.j = G),
							(this.m = K),
							(this.n = J),
							(this.q = W),
							(this.s = X),
							(this.shouldExit = !1),
							(this.c = (0, m.$9g)()),
							(this.changeHistoryByRelativePath = {}),
							(this.sessionEvents = []),
							(this.monotonicallyIncreasingChangeCounter = 0),
							(this.runningPayloadSizeInBytes = 0),
							(this.lastPerformanceNowTimestamp = 0),
							(this.f = void 0),
							(this.u = !1),
							(this.w = !1),
							(this.modelsTooBig = new Set());
					}
					registerCppTelemProvider(q) {
						this.f = q;
					}
					dispose() {
						super.dispose(),
							(this.u = !0),
							(this.sessionEvents = []),
							(this.changeHistoryByRelativePath = {});
					}
					get flushing() {
						return this.w;
					}
					isCopyEventWithMaybeSecretText(q) {
						if (q.event.case !== "copyEvent") return !1;
						const V = q.event.value.clipboardContents;
						return !(V.length > 1e3 || V.length <= 3);
					}
					isDefinitelySecretText(q) {
						return q.clipboardContents.startsWith("sk-");
					}
					async secretTextIndices(q) {
						return (
							await this.m.tokenizeTexts(
								q.map((G) => G.clipboardContents.slice(0, 1e3)),
							)
						)
							.map((G, K) => {
								if (q[K].clipboardContents.length * 0.5 < G.length) return K;
							})
							.filter((G) => G !== void 0);
					}
					async removeSecretsInCopyEventsByMutation(q) {
						try {
							const V = q
								.filter((K) => this.isCopyEventWithMaybeSecretText(K))
								.map((K) => K.event.value);
							V.filter((K) => this.isDefinitelySecretText(K)).map(
								(K) => (K.clipboardContents = O),
							);
							const G = V.filter((K) => !this.isDefinitelySecretText(K));
							G.length > 0 &&
								(await this.secretTextIndices(G)).forEach(
									(J) => (G[J].clipboardContents = O),
								);
						} catch {}
					}
					y(q, ...V) {}
					async flush(q) {
						if (!this.w && !this.u) {
							this.lastPerformanceNowTimestamp = q;
							try {
								this.w = !0;
								for (const V in this.changeHistoryByRelativePath) {
									if (this.u) return;
									for (const G in this.changeHistoryByRelativePath[V]) {
										if (this.u) return;
										const K = this.getChangeHistoryByRelativePath(V, G);
										if (K === void 0) continue;
										const {
											startingModelValue: J,
											startingModelVersion: W,
											changes: X,
											modelUuid: Y,
											modelChangesMayBeOutOfOrder: ie,
											uri: ne,
										} = K;
										if (
											!(
												X.length === 0 &&
												this.sessionEvents.length === 0 &&
												J === void 0
											)
										)
											try {
												(K.changes = []), (K.startingModelValue = void 0);
												const ee = this.sessionEvents;
												(this.sessionEvents = []),
													(this.runningPayloadSizeInBytes = 0),
													this.y("Removing secrets..."),
													await this.removeSecretsInCopyEventsByMutation(ee),
													this.y("Done removing secrets..."),
													K.shouldBeCleanedUpAfterNextSend &&
														this.clearModel({ modelId: V, relativePath: G }),
													this.y("Cpp Telem ID", this.getSessionId());
												let _ = 0;
												for (
													;
													this.f === void 0 &&
													(await new Promise((te) => setTimeout(te, 1e3)),
													_++,
													!(_ > 60));
												);
												this.y("Appending cpp to exthost..."),
													await this.f?.appendCppTelem({
														sessionId: this.getSessionId(),
														modelUuid: Y,
														startingModelValue: J,
														startingModelVersion: W,
														relativePath: G,
														timeOrigin: performance.timeOrigin,
														modelChangesMayBeOutOfOrder: ie,
														clientVersion: this.g.version,
														clientCommit: this.g.commit,
														privacyModeStatus: this.z(),
														changes: X,
														sessionEvents: ee,
														uri: ne,
														events: [],
													});
											} catch (ee) {
												this.y("Error appending cpp to exthost", ee);
											}
									}
								}
								if (this.sessionEvents.length > 0) {
									const V = this.sessionEvents;
									(this.sessionEvents = []),
										(this.runningPayloadSizeInBytes = 0),
										await this.removeSecretsInCopyEventsByMutation(V),
										await this.f?.appendCppTelem({
											sessionId: this.getSessionId(),
											modelUuid: "",
											startingModelValue: void 0,
											startingModelVersion: void 0,
											relativePath: "",
											timeOrigin: performance.timeOrigin,
											modelChangesMayBeOutOfOrder: !1,
											clientVersion: this.g.version,
											clientCommit: this.g.commit,
											privacyModeStatus: this.z(),
											changes: [],
											sessionEvents: V,
											uri: "",
											events: [],
										});
								}
							} finally {
								this.w = !1;
							}
						}
					}
					z() {
						const q = this.q.reactivePrivacyMode();
						return q === !0
							? r.EditHistoryAppendChangesRequest_PrivacyModeStatus
									.PRIVACY_ENABLED
							: q === !1
								? r.EditHistoryAppendChangesRequest_PrivacyModeStatus
										.EXPLICIT_NO_PRIVACY
								: q === void 0
									? r.EditHistoryAppendChangesRequest_PrivacyModeStatus
											.IMPLICIT_NO_PRIVACY
									: r.EditHistoryAppendChangesRequest_PrivacyModeStatus
											.UNSPECIFIED;
					}
					clearModelContents({ modelId: q, relativePath: V }) {
						const G = this.getChangeHistoryByRelativePath(q, V);
						G !== void 0 && (G.startingModelValue = void 0);
					}
					clearModel({ modelId: q, relativePath: V }) {
						const G = this.changeHistoryByRelativePath[q];
						G !== void 0 &&
							(delete G[V],
							Object.keys(G).length === 0 &&
								delete this.changeHistoryByRelativePath[q]);
					}
					totalChanges() {
						let q = 0;
						for (const V in this.changeHistoryByRelativePath)
							for (const G in this.changeHistoryByRelativePath[V]) {
								const K = this.getChangeHistoryByRelativePath(V, G);
								K !== void 0 && (q += K.changes.length);
							}
						return (q += this.sessionEvents.length), q;
					}
					totalChangesOrSessionEventsEarlyExitIfTooBig(q) {
						let V = 0;
						for (const G in this.changeHistoryByRelativePath)
							for (const K in this.changeHistoryByRelativePath[G]) {
								const J = this.getChangeHistoryByRelativePath(G, K);
								if (J !== void 0 && ((V += J.changes.length), V > q)) return V;
							}
						return (V += this.sessionEvents.length), V;
					}
					async processFinalModelHash({
						hash: q,
						relativePath: V,
						modelId: G,
						modelVersion: K,
						performanceNowTimestamp: J,
						modelIsAttachedToEditor: W,
					}) {
						const X = this.getChangeHistoryByRelativePath(G, V);
						X !== void 0 &&
							(X.changes.push({
								text: "",
								range: {
									startColumn: 1,
									startLineNumber: 1,
									endColumn: 1,
									endLineNumber: 1,
								},
								finalModelHash: q,
								modelIsAttachedToEditor: W,
								modelVersionImmediatelyAfterThisChange: K,
								performanceNowTimestamp: J,
								modelIsAttachedToTheActiveEditor: !1,
								modelVersionAtMetadataRetrievalTime: K,
								cursorSelections: [],
							}),
							(X.shouldBeCleanedUpAfterNextSend = !0));
					}
					ensureModelExistsHelper({
						modelId: q,
						relativePath: V,
						model: G,
						onlyIfSmallEnough: K,
					}) {
						let J = (() => {
							const W = this.changeHistoryByRelativePath[q];
							if (W !== void 0) return W;
							{
								const X = {};
								return (this.changeHistoryByRelativePath[q] = X), X;
							}
						})();
						if (J[V] === void 0) {
							const W = F(G);
							if (K && W) {
								this.modelsTooBig.add(q);
								return;
							}
							J[V] = {
								startingModelValue: W || x(G) ? void 0 : G.getValue(),
								startingModelVersion: G.getVersionId(),
								changes: [],
								modelUuid: (0, m.$9g)(),
								shouldBeCleanedUpAfterNextSend: !1,
								totalChangeEventsCounterMonotonicallyIncreasing: 0,
								modelChangesMayBeOutOfOrder: !1,
								consistencyCounter: void 0,
								uri: G.uri.toString(),
							};
						}
					}
					ensureModelExists({ modelId: q, relativePath: V, model: G }) {
						return this.ensureModelExistsHelper({
							modelId: q,
							relativePath: V,
							model: G,
							onlyIfSmallEnough: !1,
						});
					}
					ensureModelExistsUnlessTooBig({
						modelId: q,
						relativePath: V,
						model: G,
					}) {
						return this.ensureModelExistsHelper({
							modelId: q,
							relativePath: V,
							model: G,
							onlyIfSmallEnough: !0,
						});
					}
					notifyOnDevModelStoppedTracking(q, V) {}
					nukeAndExit(q) {
						this.shouldExit = !0;
						for (const V in this.changeHistoryByRelativePath)
							delete this.changeHistoryByRelativePath[V];
						(this.sessionEvents = []),
							this.j.increment({
								stat: "cppclient.telem.somethingBadFlushedEverythingForever",
								tags: { from: q },
							});
					}
					async processModelChange({
						changeEvent: q,
						model: V,
						modelIsAttachedToEditor: G,
						modelVersionAtMetadataRetrievalTime: K,
						relativePath: J,
						modelIsAttachedToTheActiveEditor: W,
						modelId: X,
						consistencyCounter: Y,
						cursorSelections: ie,
						performanceNowTimestamp: ne,
					}) {
						if (q.changes.length === 0) return D.Ok;
						if (this.totalChangesOrSessionEventsEarlyExitIfTooBig(2e3) > 2e3)
							return (
								this.nukeAndExit("processModelChange-toobig"), D.UpdatedSettings
							);
						if (q.changes.some((Z) => Z.text.length > 5e4))
							return D.StopTrackingModelForLargeChange;
						const ee = this.totalChanges();
						this.ensureModelExistsUnlessTooBig({
							modelId: X,
							model: V,
							relativePath: J,
						});
						const _ = this.getChangeHistoryByRelativePath(X, J);
						if (_ === void 0) return D.StopTrackingModelForLargeModel;
						_.consistencyCounter === void 0 ||
							(_.consistencyCounter + 1 !== Y &&
								(_.modelChangesMayBeOutOfOrder = !0)),
							(_.consistencyCounter = Y);
						const te = [...q.changes].sort((Z, se) =>
							Z.range.startLineNumber === se.range.startLineNumber
								? se.range.startColumn - Z.range.startColumn
								: se.range.startLineNumber - Z.range.startLineNumber,
						);
						for (const Z of te)
							_.changes.push({
								text: Z.text,
								performanceNowTimestamp: ne,
								range: Z.range,
								modelIsAttachedToEditor: G,
								modelVersionAtMetadataRetrievalTime: K,
								modelIsAttachedToTheActiveEditor: W,
								cursorSelections: ie,
							}),
								(this.runningPayloadSizeInBytes += new r.$Qv(
									_.changes.at(_.changes.length - 1),
								).toBinary().byteLength);
						_.totalChangeEventsCounterMonotonicallyIncreasing++,
							this.monotonicallyIncreasingChangeCounter++;
						const Q = _.changes.at(_.changes.length - 1);
						return (
							Q !== void 0 &&
								((Q.isRedoing = q.isRedoing),
								(Q.isUndoing = q.isUndoing),
								(Q.modelVersionImmediatelyAfterThisChange = q.versionId),
								_.totalChangeEventsCounterMonotonicallyIncreasing % 500 === 0 &&
									(Q.finalModelHash = (0, a.$vqb)(V.getValue(), 0))),
							(this.monotonicallyIncreasingChangeCounter % 200 === 0 ||
								ee > 1e3 ||
								this.lastPerformanceNowTimestamp + 10 * 6e4 < ne ||
								this.runningPayloadSizeInBytes > M) &&
								(await this.flush(ne)),
							D.Ok
						);
					}
					async processCppTelemEvent(q, V, G) {
						try {
							if (this.totalChangesOrSessionEventsEarlyExitIfTooBig(2e3) > 2e3)
								return (
									this.nukeAndExit("processCppTelemEvent-toobig"),
									"updatedSettings"
								);
							let K;
							switch (q.case) {
								case "acceptCpp":
								case "rejectCpp":
								case "acceptCppPartial":
								case "suggestCpp":
								case "cppTrigger":
								case "finishedCppGeneration":
								case "debouncedCursorPosition":
								case "editorChanged":
								case "linterError":
								case "quickActionsChange":
								case "quickActionFired":
								case "cmdKEvent":
								case "modelOpened":
								case "scrollEvent":
								case "rejectCursorPredictionEvent":
								case "acceptCursorPredictionEvent":
								case "suggestCursorPredictionEvent":
								case "bugBotLinterEvent":
								case "manualTrigger": {
									const J = q.model.id,
										W = this.h.asRelativePath(q.model.uri);
									this.ensureModelExists({
										model: q.model,
										modelId: J,
										relativePath: W,
									});
									const X = this.getChangeHistoryByRelativePath(J, W);
									if (X === void 0) return "ok";
									const Y = {
										modelUuid: X.modelUuid,
										modelVersion: q.modelVersion,
										relativePath: W,
										modelId: J,
									};
									switch (q.case) {
										case "acceptCpp": {
											(K = {
												case: "acceptEvent",
												value: {
													cppSuggestion: q.currentlyShownCppSuggestion,
													pointInTimeModel: Y,
												},
											}),
												this.j.increment({ stat: "cppclient.telem.accepted" });
											break;
										}
										case "rejectCpp": {
											(K = {
												case: "rejectEvent",
												value: {
													cppSuggestion: q.currentlyShownCppSuggestion,
													pointInTimeModel: Y,
												},
											}),
												this.j.increment({ stat: "cppclient.telem.rejected" });
											break;
										}
										case "acceptCppPartial": {
											K = {
												case: "partialAcceptEvent",
												value: {
													cppSuggestion: q.currentlyShownCppSuggestion,
													edit: {
														text: q.edit.text ?? "",
														range: q.edit.range,
													},
													pointInTimeModel: Y,
												},
											};
											break;
										}
										case "suggestCpp": {
											K = {
												case: "suggestEvent",
												value: {
													cppSuggestion: q.currentlyShownCppSuggestion,
													pointInTimeModel: Y,
													recoverableCppData: q.recoverableData,
												},
											};
											break;
										}
										case "finishedCppGeneration": {
											K = {
												case: "finishedCppGenerationEvent",
												value: {
													pointInTimeModel: Y,
													recoverableCppData: q.recoverableData,
												},
											};
											break;
										}
										case "cppTrigger": {
											let ie;
											switch (q.source) {
												case T.CppSource.Unknown:
													ie = r.CppSource.UNSPECIFIED;
													break;
												case T.CppSource.LineChange:
													ie = r.CppSource.LINE_CHANGE;
													break;
												case T.CppSource.Typing:
													ie = r.CppSource.TYPING;
													break;
												case T.CppSource.OptionHold:
													ie = r.CppSource.OPTION_HOLD;
													break;
												case T.CppSource.LinterErrors:
													ie = r.CppSource.LINTER_ERRORS;
													break;
												case T.CppSource.ParameterHints:
													ie = r.CppSource.PARAMETER_HINTS;
													break;
												case T.CppSource.CursorPrediction:
													ie = r.CppSource.CURSOR_PREDICTION;
													break;
												case T.CppSource.ManualTrigger:
													ie = r.CppSource.MANUAL_TRIGGER;
													break;
												case T.CppSource.EditorChange:
													ie = r.CppSource.EDITOR_CHANGE;
													break;
											}
											K = {
												case: "cppTriggerEvent",
												value: {
													generationUuid: q.generationUUID,
													modelVersion: q.modelVersion,
													cursorPosition: q.cursorPosition,
													pointInTimeModel: Y,
													source: ie,
												},
											};
											break;
										}
										case "debouncedCursorPosition": {
											K = {
												case: "debouncedCursorMovementEvent",
												value: {
													cursorPosition: {
														lineNumberOneIndexed: q.position.lineNumber,
														columnOneIndexed: q.position.column,
													},
													pointInTimeModel: Y,
												},
											};
											break;
										}
										case "editorChanged": {
											K = {
												case: "editorChangedEvent",
												value: {
													pointInTimeModel: Y,
													cursorPosition: q.position
														? {
																lineNumberOneIndexed: q.position.lineNumber,
																columnOneIndexed: q.position.column,
															}
														: void 0,
													visibleRanges: q.visibleRanges,
													editorId: q.editorId,
												},
											};
											break;
										}
										case "manualTrigger": {
											(K = {
												case: "manualTriggerEvent",
												value: {
													lineNumberOneIndexed: q.lineNumberOneIndexed,
													columnNumberOneIndexed: q.columnNumberOneIndexed,
													pointInTimeModel: Y,
												},
											}),
												this.j.increment({
													stat: "cppclient.telem.manualTriggered",
												});
											break;
										}
										case "linterError": {
											K = {
												case: "linterErrorEvent",
												value: {
													addedErrors: [],
													removedErrors: [],
													errors: q.errors,
													pointInTimeModel: Y,
												},
											};
											break;
										}
										case "quickActionsChange": {
											K = {
												case: "quickActionEvent",
												value: {
													actions: q.actions,
													added: [],
													removed: [],
													pointInTimeModel: Y,
												},
											};
											break;
										}
										case "quickActionFired": {
											"command" in q
												? (K = {
														case: "quickActionFireEvent",
														value: {
															pointInTimeModel: Y,
															actionIdentifier: {
																case: "quickActionCommand",
																value: q.command,
															},
														},
													})
												: (K = {
														case: "quickActionFireEvent",
														value: {
															pointInTimeModel: Y,
															actionIdentifier: {
																case: "quickActionEvent",
																value: q.action,
															},
														},
													});
											break;
										}
										case "cmdKEvent": {
											K = {
												case: "cmdKEvent",
												value: { pointInTimeModel: Y, ...q.event },
											};
											break;
										}
										case "modelOpened": {
											K = {
												case: "modelOpenedEvent",
												value: { pointInTimeModel: Y },
											};
											break;
										}
										case "scrollEvent": {
											K = {
												case: "scrollEvent",
												value: {
													pointInTimeModel: Y,
													visibleRanges: q.visibleRanges,
													editorId: q.editorId,
												},
											};
											break;
										}
										case "acceptCursorPredictionEvent":
										case "rejectCursorPredictionEvent":
										case "suggestCursorPredictionEvent": {
											K = {
												case: q.case,
												value: {
													pointInTimeModel: Y,
													cursorPrediction: {
														requestId: q.prediction.requestId,
														predictionId:
															q.prediction.monotonicallyIncreasingPredictionId,
														lineNumber: q.prediction.lineNumber,
														source: q.prediction.source,
													},
												},
											};
											break;
										}
										case "bugBotLinterEvent": {
											K = {
												case: "bugBotLinterEvent",
												value: {
													requestId: q.requestId,
													eventType: q.eventType,
													pointInTimeModel: Y,
												},
											};
											break;
										}
										default: {
											const ie = q;
											throw new Error(`Unhandled case: ${ie}`);
										}
									}
									break;
								}
								case "tabClose": {
									const J = this.h.asRelativePath(q.model.uri),
										W = q.model.id;
									K = {
										case: "tabCloseEvent",
										value: {
											pointInTimeModel: {
												modelUuid: this.getChangeHistoryByRelativePath(W, J)
													?.modelUuid,
												modelVersion: q.modelVersion,
												relativePath: J,
												modelId: W,
											},
										},
									};
									break;
								}
								case "modelAdded": {
									const J = this.h.asRelativePath(q.model.uri),
										W = q.model.id;
									K = {
										case: "modelAddedEvent",
										value: {
											pointInTimeModel: {
												modelUuid: this.getChangeHistoryByRelativePath(W, J)
													?.modelUuid,
												modelVersion: q.modelVersion,
												relativePath: J,
												modelId: W,
											},
											fullUri: q.model.uri.toString(),
											uriScheme: q.model.uri.scheme,
											modelId: q.model.id,
											isTooLargeForSyncing: q.model.isTooLargeForSyncing(),
											isTooLargeForTokenization:
												q.model.isTooLargeForTokenization(),
											isTooLargeForHeapOperation:
												q.model.isTooLargeForHeapOperation(),
										},
									};
									break;
								}
								case "stoppedTrackingModelWhenModelTooLarge": {
									const J = q.model.id,
										W = this.h.asRelativePath(q.model.uri),
										X = this.getChangeHistoryByRelativePath(J, W);
									let Y;
									X !== void 0 ? (Y = X.modelUuid) : (Y = (0, m.$9g)()),
										this.clearModelContents({ modelId: J, relativePath: W }),
										(K = {
											case: "stoppedTrackingModelEvent",
											value: {
												modelUuid: Y,
												relativePath: W,
												reason:
													r
														.CppStoppedTrackingModelEvent_StoppedTrackingModelReason
														.FILE_TOO_BIG,
											},
										});
									break;
								}
								case "stoppedTrackingModelWhenChangeTooLarge": {
									const J = q.model.id,
										W = this.h.asRelativePath(q.model.uri),
										X = this.getChangeHistoryByRelativePath(J, W);
									let Y;
									X !== void 0 ? (Y = X.modelUuid) : (Y = (0, m.$9g)()),
										this.clearModel({ modelId: J, relativePath: W }),
										(K = {
											case: "stoppedTrackingModelEvent",
											value: {
												modelUuid: Y,
												relativePath: W,
												reason:
													r
														.CppStoppedTrackingModelEvent_StoppedTrackingModelReason
														.CHANGE_TOO_BIG,
											},
										});
									break;
								}
								case "clipboardChange": {
									K = {
										case: "copyEvent",
										value: { clipboardContents: q.text },
									};
									break;
								}
								case "chatEvent": {
									K = { case: "chatEvent", value: q.event };
									break;
								}
								case "aiEvent": {
									K = {
										case: "aiEvent",
										value: {
											requestId: q.requestId,
											requestType: q.startOrEnd,
										},
									};
									break;
								}
								case "cmdKEndEvent": {
									K = {
										case: "cmdKEvent",
										value: {
											requestId: q.requestId,
											eventType: { case: "endOfGeneration", value: {} },
										},
									};
									break;
								}
								case "editorClose": {
									K = {
										case: "editorCloseEvent",
										value: { editorId: q.editorId },
									};
									break;
								}
								case "bugBotEvent": {
									K = { case: "bugBotEvent", value: q.event };
									break;
								}
								case "anythingQuickAccessSelectionEvent": {
									const J = await Promise.all(
										q.items.map(async (W) => {
											if (W.type === "separator")
												return {
													item: { case: "separator", value: W.separatorLabel },
												};
											const X = {
												item: {
													case: "resource",
													value: { uri: W.resource.toString(), range: W.range },
												},
											};
											let Y;
											try {
												Y =
													W.textModelPromise !== void 0
														? await R(W.textModelPromise, 100)
														: void 0;
											} catch {
												return X;
											}
											if (Y === void 0) return X;
											const ie = Y.object.textEditorModel;
											this.ensureModelExists({
												model: ie,
												modelId: ie.id,
												relativePath: this.h.asRelativePath(ie.uri),
											});
											const ne = this.h.asRelativePath(ie.uri),
												ee = this.getChangeHistoryByRelativePath(ie.id, ne);
											if (ee === void 0) return X;
											const _ = {
												modelUuid: ee.modelUuid,
												modelVersion: ie.getVersionId(),
												relativePath: ne,
												modelId: ie.id,
											};
											return {
												item: {
													case: "resource",
													value: {
														uri: W.resource.toString(),
														range: W.range,
														pointInTimeModel: _,
													},
												},
											};
										}),
									);
									K = {
										case: "anythingQuickAccessSelectionEvent",
										value: {
											query: q.query,
											items: J,
											selectedIndices: q.selectedIndices,
										},
									};
									break;
								}
								default: {
									const J = q;
									throw new Error(`Unhandled case: ${J}`);
								}
							}
							if (K) {
								const J = {
										event: K,
										performanceNowTimestamp: V,
										performanceTimeOrigin: performance.timeOrigin,
									},
									W = new r.$$w(J).toBinary().byteLength;
								if (W > N) return "ok";
								this.sessionEvents.push(J),
									this.monotonicallyIncreasingChangeCounter++,
									(this.runningPayloadSizeInBytes += W);
							}
							return (
								(this.monotonicallyIncreasingChangeCounter % 200 === 0 ||
									this.lastPerformanceNowTimestamp + 10 * 6e4 < V ||
									this.runningPayloadSizeInBytes > M) &&
									(await this.flush(V)),
								"ok"
							);
						} finally {
							G.dispose();
						}
					}
				}
				let U = class extends i.$1c {
					registerCppTelemProvider(q) {
						this.c.registerCppTelemProvider(q);
					}
					getCurrentSessionId() {
						return this.c.getSessionId();
					}
					async flushAll() {
						this.c.flushing
							? await new Promise((q) => setTimeout(q, 1e3))
							: await this.c.flush(performance.now());
					}
					n(q = 60 * 1e3) {
						for (const V of Object.keys(this.m)) {
							const G = this.m[V];
							G && (this.m[V] = G.filter((K) => performance.now() - K < q));
						}
					}
					constructor(q, V, G, K, J, W, X, Y, ie, ne, ee, _, te, Q) {
						super(),
							(this.q = q),
							(this.s = K),
							(this.u = J),
							(this.w = W),
							(this.y = X),
							(this.z = Y),
							(this.C = ie),
							(this.F = ne),
							(this.G = ee),
							(this.H = _),
							(this.I = te),
							(this.J = Q),
							(this.f = !1),
							(this.g = this.D(new E.$re())),
							(this.onDidChangeCppSessionId = this.g.event),
							(this.h = this.D(new E.$re())),
							(this.onDidChangeCppTelemEnabled = this.h.event),
							(this.m = {}),
							(this.L = new r.$ex({ on: !0 })),
							(this.U = new Set()),
							(this.avgTimes = []),
							(this.lastModelChangeTimestamp = 0),
							(this.SHOULD_MEASURE_MODEL_CHANGE_PERF = !1),
							(this.W = new Map()),
							(this.P = 0),
							(this.c = new B(
								this.u,
								this.s,
								this.y,
								this.F,
								this.G,
								this.H,
								this.I,
							)),
							this.g.fire(this.c.getSessionId());
						const Z = V.createInstance(f.$q6b, { service: b.$q0 });
						this.j = Z;
					}
					get M() {
						return this.H.reactivePrivacyMode();
					}
					get N() {
						return this.c.shouldExit;
					}
					O() {
						return this.z.shadowWindowForWorkspaceId
							? !1
							: this.L.on === !0 && this.M === !1;
					}
					async pollTelemEnabled() {
						const q = await (await this.j.get()).cppEditHistoryStatus(
							new r.$dx({}),
						);
						(this.L = q), this.S(this.O()), this.X();
					}
					Q() {
						(this.c.shouldExit = !1),
							this.c.dispose(),
							(this.c = new B(
								this.u,
								this.s,
								this.y,
								this.F,
								this.G,
								this.H,
								this.I,
							)),
							this.g.fire(this.c.getSessionId());
					}
					async R() {
						if (Date.now() - this.P < 5 * 60 * 1e3) return;
						this.X();
						const q = this.O();
						q === !0
							? (q !== this.f || this.N === !0) && (this.S(q), this.Q())
							: this.S(!1);
					}
					S(q) {
						const V = this.f;
						(this.f = q), V !== q && this.h.fire(this.f);
					}
					async onStartupChangeWatcher() {
						try {
							this.pollTelemEnabled(),
								this.D(
									this.w.onModelAdded((q) => {
										if (
											(this.R(),
											this.recordCppSessionEvent({
												case: "modelAdded",
												model: q,
												modelVersion: q.getVersionId(),
											}),
											this.D(
												q.onWillDispose(() => {
													this.recordCppSessionEvent({
														case: "tabClose",
														model: q,
														modelVersion: q.getVersionId(),
													});
												}),
											),
											this.setModelTooBig(q.id, !1),
											q && L.includes(q.uri.scheme))
										) {
											if (
												q.isTooLargeForTokenization() ||
												q.isTooLargeForSyncing() ||
												x(q)
											)
												return;
											if (!this.U.has(q.id)) {
												this.U.add(q.id);
												let V = !1,
													G = (J) => {
														(V = J),
															this.setModelTooBig(q.id, J),
															V &&
																this.recordCppSessionEvent({
																	case: "stoppedTrackingModelWhenModelTooLarge",
																	model: q,
																});
													},
													K = this.D(
														q.onDidChangeContent((J) => {
															if (V === !0) {
																K.dispose(), this.U.delete(q.id);
																return;
															}
															if (
																q.isTooLargeForTokenization() ||
																q.isTooLargeForSyncing()
															) {
																G(!0);
																return;
															}
															if (
																this.SHOULD_MEASURE_MODEL_CHANGE_PERF === !0
															) {
																const W =
																	Date.now() - this.lastModelChangeTimestamp;
																this.lastModelChangeTimestamp !== 0 &&
																	W < 500 &&
																	this.avgTimes.push(W),
																	(this.lastModelChangeTimestamp = Date.now()),
																	this.avgTimes.length > 200 &&
																		this.avgTimes.shift(),
																	console.log(
																		"avgtime",
																		this.avgTimes.reduce((X, Y) => X + Y, 0) /
																			this.avgTimes.length,
																	);
															}
															if (!z(J))
																try {
																	this.processModelChangeTelemetry(J, q)
																		.then(
																			({ modelTooBig: W, changeTooBig: X }) => {
																				if ((G(V || W), X)) {
																					if (
																						(this.n(),
																						(this.m[q.id]?.length ?? 0) >= 2)
																					) {
																						G(!0), delete this.m[q.id];
																						return;
																					}
																					this.m[q.id] === void 0
																						? (this.m[q.id] = [
																								performance.now(),
																							])
																						: this.m[q.id]?.push(
																								performance.now(),
																							),
																						this.c.processCppTelemEvent(
																							{
																								case: "stoppedTrackingModelWhenChangeTooLarge",
																								model: q,
																							},
																							performance.now(),
																							i.$1c.None,
																						);
																				}
																			},
																		)
																		.catch((W) => {
																			this.c.nukeAndExit(
																				"processmodelchange-error",
																			),
																				this.S(!1),
																				this.X();
																		});
																} catch {
																	this.c.nukeAndExit(
																		"processmodelchange-supererror",
																	),
																		this.S(!1),
																		this.X();
																}
														}),
													);
												this.D(
													q.onWillDispose(() => {
														K.dispose(),
															this.U.delete(q.id),
															!V && this.processModelWillEnd(q);
													}),
												);
											}
										}
									}),
								);
						} catch (q) {
							console.error("Cpp: error", q);
						}
					}
					async processModelChangeTelemetry(q, V) {
						const G = V.isAttachedToEditor();
						let K = !1;
						const J = V.getVersionId();
						let W = [];
						const X = this.C.activeTextEditorControl;
						if (X !== void 0 && (0, g.$0sb)(X) && X.getModel()?.id === V.id) {
							K = !0;
							const ee = X.getSelections();
							ee !== null &&
								(W = ee.map((_) => ({
									positionColumn: _.positionColumn,
									positionLineNumber: _.positionLineNumber,
									selectionStartColumn: _.selectionStartColumn,
									selectionStartLineNumber: _.selectionStartLineNumber,
								})));
						}
						let Y = this.W.get(V.id);
						Y === void 0 && (Y = 1), this.W.set(V.id, Y + 1);
						const ie = performance.now();
						if ((await new Promise((ne) => setTimeout(ne, 0)), this.Y(V)))
							return { modelTooBig: !0, changeTooBig: !1 };
						if (this.canWeTrackTelem()) {
							const ne = await this.c.processModelChange({
								changeEvent: q,
								model: V,
								relativePath: this.s.asRelativePath(V.uri),
								modelId: V.id,
								modelIsAttachedToEditor: G,
								cursorSelections: W,
								modelIsAttachedToTheActiveEditor: K,
								modelVersionAtMetadataRetrievalTime: J,
								consistencyCounter: Y,
								performanceNowTimestamp: ie,
							});
							switch (ne) {
								case D.StopTrackingModelForLargeChange:
									return this.X(), { modelTooBig: !1, changeTooBig: !0 };
								case D.StopTrackingModelForLargeModel:
									return (
										this.X(),
										this.c.modelsTooBig.add(V.id),
										this.y.increment({
											stat: "cppclient.telem.somethingWeirdInTtracker",
										}),
										{ modelTooBig: !0, changeTooBig: !1 }
									);
								case D.UpdatedSettings: {
									this.X();
									break;
								}
								case D.Ok:
									return { modelTooBig: !1, changeTooBig: !1 };
								default: {
									const ee = ne;
									throw new Error(`Unhandled case: ${ee}`);
								}
							}
						}
						return { modelTooBig: !1, changeTooBig: !1 };
					}
					X() {
						this.P = Date.now();
					}
					Y(q) {
						return q.isDisposed() ? !0 : this.isModelTooBigFullCheck(q);
					}
					canWeTrackTelem() {
						return (
							this.f === !0 &&
							this.c.shouldExit === !1 &&
							this.H.reactivePrivacyMode() !== !0
						);
					}
					processModelWillEnd(q) {
						const V = performance.now();
						if (this.canWeTrackTelem()) {
							const G = (0, a.$vqb)(q.getValue(), 0);
							this.c
								.processFinalModelHash({
									relativePath: this.s.asRelativePath(q.uri),
									modelId: q.id,
									hash: G,
									modelVersion: q.getVersionId(),
									modelIsAttachedToEditor: q.isAttachedToEditor(),
									performanceNowTimestamp: V,
								})
								.catch((K) => {});
						}
					}
					recordCppSessionEvent(q, V = void 0) {
						const G = performance.now();
						this.recordCppSessionEventWithPerfProvided(q, G, V);
					}
					recordCppSessionEventWithPerfProvided(q, V, G = void 0) {
						const K = G ?? i.$1c.None;
						Promise.resolve().then(() => {
							const J = new i.$Zc();
							J.add(K);
							try {
								this.canWeTrackTelem() &&
									(J.deleteAndLeak(K),
									this.c
										.processCppTelemEvent(q, V, K)
										.then((W) => {
											W === "updatedSettings" && this.X();
										})
										.catch((W) => {}));
							} catch {
							} finally {
								J.dispose();
							}
						});
					}
					isModelTooBig(q) {
						return this.c.modelsTooBig.has(q);
					}
					markModelAsTooBig(q) {
						this.c.modelsTooBig.add(q);
					}
					setModelTooBig(q, V) {
						V ? this.c.modelsTooBig.add(q) : this.c.modelsTooBig.delete(q);
					}
					isModelTooBigFullCheck(q) {
						return this.isModelTooBig(q.id)
							? !0
							: F(q)
								? (this.markModelAsTooBig(q.id), !0)
								: !1;
					}
				};
				(e.$ifd = U),
					(e.$ifd = U =
						Ne(
							[
								j(0, C.$0zb),
								j(1, s.$Li),
								j(2, l.$i6b),
								j(3, d.$Vi),
								j(4, u.$Bk),
								j(5, h.$QO),
								j(6, c.$wcc),
								j(7, S.$r8),
								j(8, n.$IY),
								j(9, p.$zIb),
								j(10, v.$4N),
								j(11, o.$x6b),
								j(12, y.$ll),
								j(13, k.$MO),
							],
							U,
						));
				function z(H) {
					return (
						H.changes.length === 1 &&
						$.$iL.lift(H.changes[0].range).isEmpty() &&
						H.changes[0].text.length === 0
					);
				}
				function F(H) {
					return (
						H.isTooLargeForTokenization() ||
						H.isTooLargeForSyncing() ||
						H.getValueLength() > A
					);
				}
				function x(H) {
					if (!L.includes(H.uri.scheme)) return !1;
					const q = (0, I.$sc)(H.uri.fsPath).toLowerCase();
					return q.startsWith(".env") ||
						q.endsWith(".env") ||
						q.endsWith(".pem")
						? !0
						: [
								"id_rsa",
								"id_ed25519",
								"id_ecdsa",
								"id_dsa",
								"id_ecdsa_sk",
								"id_ed25519_sk",
								"id_rsa_sk",
								"id_dsa_sk",
								"id_ecdsa_sk",
								"id_ed25519_sk",
								"known_hosts",
								"password",
								"passphrase",
								"secret",
								"key",
								"token",
								"credentials",
								"private_key",
								"public_key",
							].some((G) => q === G || q.endsWith("." + G) || q === G + ".txt");
				}
				(0, t.$lK)(w.$hfc, U, t.InstantiationType.Delayed);
			},
		),
		