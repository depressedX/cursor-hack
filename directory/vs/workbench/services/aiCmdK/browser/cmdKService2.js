import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../editor/common/core/lineRange.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/core/selection.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../ai/browser/aiService.js';
import '../../../../editor/common/services/resolverService.js';
import '../../ai/browser/aiUtilsService.js';
import '../../../../editor/browser/services/inlineDiffService.js';
import '../../../../platform/commands/common/commands.js';
import '../../aiSettings/browser/aiSettingsService.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/reactivestorage/common/reactiveStorageTypes2.js';
import '../../ai/browser/fastContextService.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/uuid.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../platform/markers/common/markers.js';
import './cmdKService.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageTypes.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../editor/browser/services/inlineDiffUndoRedoElement.js';
import '../../../contrib/cursoreval/browser/cursorEvalService.js';
import '../../aiContext/browser/aiContext.js';
import '../../../../../proto/aiserver/v1/cmdk_pb.js';
import '../../../../../proto/aiserver/v1/context_pb.js';
import '../../ai/browser/promptBarService.js';
import '../../ai/browser/utils.js';
import '../../../../../proto/aiserver/v1/cmdk_connectweb.js';
import '../../ai/browser/repositoryService.js';
import '../../history/common/history.js';
import '../../../../base/common/constants.js';
import '../../../../editor/contrib/gotoSymbol/browser/goToSymbol.js';
import '../../../../editor/common/services/languageFeatures.js';
import '../../ai/browser/lspSubgraphService.js';
import '../../../../editor/common/core/position.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/browser/window.js';
import '../../../../editor/contrib/documentSymbols/browser/outlineModel.js';
import '../../../contrib/aiCpp/browser/cppEventLogger.js';
import '../../aiErrors/browser/aiErrorService.js';
import '../../../../platform/cursor/browser/aiEverythingProviderService.js';
define(
			de[720],
			he([
				1, 0, 20, 196, 17, 104, 5, 32, 118, 42, 567, 383, 31, 315, 3, 25, 670,
				400, 9, 47, 65, 90, 479, 205, 45, 779, 684, 471, 644, 228, 620, 191,
				1113, 226, 245, 58, 414, 69, 1281, 48, 33, 75, 204, 332, 401, 280,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*extensions*/,
				i /*lineRange*/,
				w /*range*/,
				E /*selection*/,
				C /*instantiation*/,
				d /*telemetry*/,
				m /*aiService*/,
				r /*resolverService*/,
				u /*aiUtilsService*/,
				a /*inlineDiffService*/,
				h /*commands*/,
				c /*aiSettingsService*/,
				n /*lifecycle*/,
				g /*workspace*/,
				p /*reactiveStorageTypes2*/,
				o /*fastContextService*/,
				f /*uri*/,
				b /*uuid*/,
				s /*codeEditorService*/,
				l /*markers*/,
				y /*cmdKService*/,
				$ /*reactiveStorageTypes*/,
				v /*reactiveStorageService*/,
				S /*inlineDiffUndoRedoElement*/,
				I /*cursorEvalService*/,
				T /*aiContext*/,
				P /*cmdk_pb*/,
				k /*context_pb*/,
				L /*promptBarService*/,
				D /*utils*/,
				M /*cmdk_connectweb*/,
				N /*repositoryService*/,
				A /*history*/,
				R /*constants*/,
				O /*goToSymbol*/,
				B /*languageFeatures*/,
				U /*lspSubgraphService*/,
				z /*position*/,
				F /*cancellation*/,
				x /*window*/,
				H /*outlineModel*/,
				q /*cppEventLogger*/,
				V /*aiErrorService*/,
				G /*aiEverythingProviderService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$d0b = void 0),
					(e.$d0b = (0, C.$Mi)("cmdKService2"));
				function K(W) {
					const X = [];
					let Y = !0;
					return (
						(async () => {
							for await (const ne of W) {
								const ee = { value: ne, done: !1 };
								X.forEach((_) => _(ee));
							}
							const ie = { value: void 0, done: !0 };
							X.forEach((ne) => ne(ie)), (Y = !1);
						})(),
						function () {
							let ne = [],
								ee = null;
							const _ = (Q) => {
								ee ? (ee(Q), (ee = null)) : ne.push(Q);
							};
							X.push(_);
							async function* te() {
								try {
									for (; Y || ne.length; )
										ne.length
											? yield ne.shift().value
											: await new Promise((Q) => {
													ee = (Z) => {
														Q(), Z.done || ne.push(Z);
													};
												});
								} finally {
									const Q = X.indexOf(_);
									Q !== -1 && X.splice(Q, 1);
								}
							}
							return {
								[Symbol.asyncIterator]() {
									return te();
								},
							};
						}
					);
				}
				let J = class extends n.$1c {
					constructor(
						X,
						Y,
						ie,
						ne,
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
						be,
					) {
						super(),
							(this.c = X),
							(this.f = Y),
							(this.g = ie),
							(this.h = ne),
							(this.j = ee),
							(this.m = _),
							(this.n = te),
							(this.q = Q),
							(this.t = Z),
							(this.u = se),
							(this.w = re),
							(this.z = le),
							(this.C = oe),
							(this.F = ae),
							(this.G = pe),
							(this.H = $e),
							(this.I = ye),
							(this.J = ue),
							(this.L = fe),
							(this.M = me),
							(this.N = ve),
							(this.O = ge),
							(this.P = be);
					}
					async preloadEditWithSelection(X, Y, ie, ne) {
						const ee = await this.w.getPreparedEditRequest({
							query: "",
							fastMode: !0,
							lineRange: Y,
							codeBlocks: [],
							docs: [],
							spoofedCellId: ne,
							modelUriForEdit: ie,
						});
						X(ee);
						const _ = await this.c.aiClient();
						try {
							const te = this.c.getModelDetails({
								specificModelField: "cmd-k",
							});
							await _.preloadEdit(
								{ req: { ...ee, modelDetails: te } },
								{ headers: (0, D.$m6b)((0, b.$9g)()) },
							);
						} catch (te) {
							console.error(te);
							return;
						}
					}
					Q(X, Y) {
						return (
							X.positionColumn === Y.positionColumn &&
							X.positionLineNumber === Y.positionLineNumber &&
							X.selectionStartColumn === Y.selectionStartColumn &&
							X.selectionStartLineNumber === Y.selectionStartLineNumber
						);
					}
					R(X, Y) {
						return X.text === Y.text && this.Q(X.range, Y.range);
					}
					addContextToBackground(X) {
						this.z.nonPersistentStorage.cmdkBackgroundContextSelections.find(
							(ne) => ne.uri.toString() === X.uri.toString(),
						)
							? this.z.setNonPersistentStorage(
									"cmdkBackgroundContextSelections",
									(ne) => ne.uri.toString() === X.uri.toString(),
									"selections",
									(ne) =>
										ne.find((_) => this.R(_, X.selection))
											? ne
											: [...ne, X.selection],
								)
							: this.z.setNonPersistentStorage(
									"cmdkBackgroundContextSelections",
									(ne) => [...ne, { uri: X.uri, selections: [X.selection] }],
								),
							x.$Bfb.setTimeout(
								() => {
									this.z.setNonPersistentStorage(
										"cmdkBackgroundContextSelections",
										(ne) => ne.uri.toString() === X.uri.toString(),
										"selections",
										[],
									);
								},
								10 * 60 * 1e3,
							);
					}
					removeTerminalFollowup({ data: X, setData: Y }) {
						Y("chatResponse", void 0);
						const ie = X.queryHistory;
						if (ie === void 0) return;
						const ne = {
								case: "terminalCmdKQueryHistory",
								queryHistory: ie.current,
							},
							_ = [...X.previousStructuredTextsNewestFirst],
							te = (0, y.$N7b)({
								req: ne,
								previousStructuredTextsNewestFirst: _,
								options: { structured: !0 },
							});
						Y("plainText", te),
							Y("richText", te),
							Y("delegate", new p.$KN()),
							Y("inputBoxDelegate", new $.$Zzb()),
							Y("queryHistory", void 0),
							Y("previousStructuredTextsNewestFirst", []),
							Y("forceRerenderInputBox", (Q) => Q + 1),
							setTimeout(() => {
								X.inputBoxDelegate.focus();
							}, 10);
					}
					addTerminalFollowup({
						req: X,
						structuredQuery: Y,
						data: ie,
						setData: ne,
					}) {
						if (
							this.z.nonPersistentStorage.promptBars.find(
								(_) => _.id === ie.uuid,
							)?.preventFollowupFromBeingAdded === !0
						)
							return;
						X.case === "chatHistory"
							? ne("chatHistory", new v.$wAb(X.chatHistory))
							: ne("queryHistory", new v.$wAb(X.queryHistory)),
							X.case !== "chatHistory" &&
								ne("previousStructuredTextsNewestFirst", (_) =>
									typeof Y == "string" ? [Y, ..._] : [...Y, ..._],
								);
						const ee = ie.inputBoxDelegate.isFocused();
						ne("plainText", ""),
							ne("richText", ""),
							ne("delegate", new p.$KN()),
							ne("inputBoxDelegate", new $.$Zzb()),
							ne("forceRerenderInputBox", (_) => _ + 1),
							setTimeout(() => {
								ee && ie.inputBoxDelegate.focus();
							}, 10);
					}
					addFollowup({
						promptBarId: X,
						req: Y,
						options: ie,
						structuredQuery: ne,
					}) {
						const ee = this.z.nonPersistentStorage.promptBars.find(
							(le) => le.id === X,
						);
						if (ee?.preventFollowupFromBeingAdded === !0) return;
						const _ = ee?.originalRequest,
							te = ee?.queryHistory;
						Y.case === "originalRequest"
							? this.z.setNonPersistentStorage(
									"promptBars",
									(le) => le.id === X,
									"originalRequest",
									new v.$wAb(Y.req),
								)
							: Y.case === "chatHistory"
								? this.z.setNonPersistentStorage(
										"promptBars",
										(le) => le.id === X,
										"inlineChatHistory",
										new v.$wAb(Y.chatHistory),
									)
								: this.z.setNonPersistentStorage(
										"promptBars",
										(le) => le.id === X,
										"queryHistory",
										new v.$wAb(Y.queryHistory),
									),
							Y.case !== "chatHistory" &&
								this.z.setNonPersistentStorage(
									"promptBars",
									(le) => le.id === X,
									"previousStructuredTextsNewestFirst",
									(le) =>
										typeof ne == "string" ? [ne, ...le] : [...ne, ...le],
								);
						const Q = ee?.data.inputBoxDelegate.isFocused(),
							Z = ee?.data.delegate.getRichText() ?? "";
						this.z.setNonPersistentStorage(
							"promptBars",
							(le) => le.id === X,
							"data",
							"initText",
							"",
						),
							this.z.setNonPersistentStorage(
								"promptBars",
								(le) => le.id === X,
								"data",
								"delegate",
								new p.$KN(),
							),
							this.z.setNonPersistentStorage(
								"promptBars",
								(le) => le.id === X,
								"data",
								"inputBoxDelegate",
								new $.$Zzb(),
							);
						const se = this.z.nonPersistentStorage.promptBars.find(
							(le) => le.id === X,
						);
						if (
							(this.z.setNonPersistentStorage(
								"promptBars",
								(le) => le.id === X,
								"forceRerenderInputBox",
								(le) => le + 1,
							),
							setTimeout(() => {
								if (Q) {
									const le = this.z.nonPersistentStorage.promptBars.find(
										(oe) => oe.id === X,
									);
									if (!le) return;
									le.data.inputBoxDelegate.focus();
								}
							}, 10),
							Y.case === "chatHistory")
						)
							return;
						const re = ee?.uri;
						re &&
							ie?.pushUndoRedo !== !1 &&
							this.u.pushUndoElement(
								new S.$y7b(
									"Undo Add Followup",
									"undo-add-followup",
									ee.diffId,
									re,
									() => {
										this.z.setNonPersistentStorage(
											"promptBars",
											(le) => le.id === X,
											"originalRequest",
											_,
										),
											this.z.setNonPersistentStorage(
												"promptBars",
												(le) => le.id === X,
												"queryHistory",
												te,
											),
											this.z.setNonPersistentStorage(
												"promptBars",
												(le) => le.id === X,
												"data",
												"initText",
												Z,
											),
											this.z.setNonPersistentStorage(
												"promptBars",
												(le) => le.id === X,
												"data",
												"delegate",
												new p.$KN(),
											),
											this.z.setNonPersistentStorage(
												"promptBars",
												(le) => le.id === X,
												"data",
												"inputBoxDelegate",
												new $.$Zzb(),
											),
											this.z.setNonPersistentStorage(
												"promptBars",
												(le) => le.id === X,
												"forceRerenderInputBox",
												(le) => le + 1,
											),
											setTimeout(() => {
												const le = this.z.nonPersistentStorage.promptBars.find(
													(oe) => oe.id === X,
												);
												le && le.data.inputBoxDelegate.focus();
											}, 10);
									},
									() => {
										this.addFollowup({
											promptBarId: X,
											req: Y,
											structuredQuery: ne,
											options: { pushUndoRedo: !1 },
										});
									},
								),
								{ breakConsolidation: !1 },
							);
					}
					removeFollowup(X, Y) {
						this.z.setNonPersistentStorage(
							"promptBars",
							(re) => re.id === X,
							"chatResponse",
							void 0,
						),
							this.z.setNonPersistentStorage(
								"promptBars",
								(re) => re.id === X,
								"errorDetails",
								void 0,
							);
						const ie = this.z.nonPersistentStorage.promptBars.find(
								(re) => re.id === X,
							),
							ne = ie?.originalRequest,
							ee = ie?.queryHistory;
						if (ne === void 0 && ee === void 0) return;
						const _ = ne
								? { case: "originalRequest", req: ne.current }
								: { case: "cmdKQueryHistory", queryHistory: ee.current },
							te = ie?.previousStructuredTextsNewestFirst;
						if (te === void 0) return;
						const Q = [...te],
							Z = (0, y.$N7b)({
								req: _,
								previousStructuredTextsNewestFirst: Q,
								options: { structured: !0 },
							});
						this.z.setNonPersistentStorage(
							"promptBars",
							(re) => re.id === X,
							"data",
							"initText",
							Z,
						),
							this.z.setNonPersistentStorage(
								"promptBars",
								(re) => re.id === X,
								"data",
								"delegate",
								new p.$KN(),
							),
							this.z.setNonPersistentStorage(
								"promptBars",
								(re) => re.id === X,
								"data",
								"inputBoxDelegate",
								new $.$Zzb(),
							),
							this.z.setNonPersistentStorage(
								"promptBars",
								(re) => re.id === X,
								"originalRequest",
								void 0,
							),
							this.z.setNonPersistentStorage(
								"promptBars",
								(re) => re.id === X,
								"queryHistory",
								void 0,
							),
							this.z.setNonPersistentStorage(
								"promptBars",
								(re) => re.id === X,
								"previousStructuredTextsNewestFirst",
								[],
							),
							this.z.setNonPersistentStorage(
								"promptBars",
								(re) => re.id === X,
								"forceRerenderInputBox",
								(re) => re + 1,
							),
							setTimeout(() => {
								const re = this.z.nonPersistentStorage.promptBars.find(
									(le) => le.id === X,
								);
								re && re.data.inputBoxDelegate.focus();
							}, 10);
						const se = ie?.uri;
						se &&
							Y?.pushUndoRedo !== !1 &&
							this.u.pushUndoElement(
								new S.$y7b(
									"Undo Remove Followup",
									"undo-remove-followup",
									ie?.diffId,
									se,
									() => {
										this.addFollowup({
											promptBarId: X,
											req: _,
											structuredQuery: Q,
											options: { pushUndoRedo: !1 },
										});
									},
									() => {
										this.removeFollowup(X, { pushUndoRedo: !1 });
									},
								),
								{ breakConsolidation: !1 },
							);
					}
					async getPromptBarCurrentRange(X) {
						const Y = await this.J.createModelReference(X.uri);
						try {
							return Y === void 0
								? void 0
								: this.w.getPromptBarCurrentRange(X, Y.object.textEditorModel);
						} finally {
							Y.dispose();
						}
					}
					submitContextSessionEditWithMultipleGenerations(
						X,
						Y,
						ie,
						ne,
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
					) {
						const ve = X.contextSessionUuid,
							ge =
								this.z.applicationUserPersistentStorage.cmdKGenerationConfigs;
						let be = this.z.nonPersistentStorage.promptBars.find(
							(He) => He.id === Y,
						);
						be?.multiGenerationConfigs ||
							(this.z.setNonPersistentStorage(
								"promptBars",
								(He) => He.id === Y,
								"multiGenerationConfigs",
								ge,
							),
							(be = this.z.nonPersistentStorage.promptBars.find(
								(He) => He.id === Y,
							))),
							be?.multiGenerationConfigs ||
								console.error("promptBar missing multiGenerationConfigs", Y);
						const Ce = be?.multiGenerationConfigs ?? ge;
						if (!Ce)
							throw new Error("promptBar missing multiGenerationConfigs");
						const Le = Ce[0].generationUUID,
							Fe = Ce.length > 1 ? Ce[1].generationUUID : Le;
						let Oe = new AbortController();
						return {
							abortController: Oe,
							generationUUID: Fe,
							promise: (async () => {
								this.m.publicLogCapture("Submitted cmd-k"),
									this.m.publicLogCapture("Submitted Prompt"),
									this.z.setNonPersistentStorage(
										"promptBars",
										(qe) => qe.id === Y,
										"chatResponse",
										void 0,
									),
									this.z.setNonPersistentStorage(
										"promptBars",
										(qe) => qe.id === Y,
										"errorDetails",
										void 0,
									);
								const He = this.q.getActiveCodeEditor();
								if (!He) return;
								if (!He.hasModel()) {
									console.error("No model found, cannot edit.");
									return;
								}
								const Ke = He.getModel(),
									Je = new i.$rL(
										ee.startLineNumber,
										ee.endLineNumberExclusive,
									).toExclusiveRange();
								for (let qe of Ce.map((Ae) => Ae.generationUUID))
									this.n.recordCmdKEvent(Ke, {
										requestId: qe,
										promptBarId: Y,
										eventType: {
											case: "submitPrompt",
											value: {
												prompt: ie,
												originalRange: Je,
												originalText: Ke.getValueInRange(Je),
											},
										},
									});
								He.setPosition({ lineNumber: ee.startLineNumber, column: 1 });
								const Te = await this.C.getCmdKDebugInfo(),
									Ee = Ce.map(({ generationUUID: qe }) => qe);
								console.log("GENERATION CONFIGS", Ce);
								let Ie = !1,
									Be = !1;
								const Se = (qe) => {
									Be || ((Be = !0), re?.(qe));
								};
								let ke = !0;
								const Ue = await Promise.all(
									Ce.map(
										async ({ modelDetails: qe, generationUUID: Ae }, Me) => {
											let De = new AbortController();
											this.m.publicLogCapture("submitted.cmd-k", {
												model: qe.modelName,
											});
											const [Re, je] = this.c.registerNewGeneration({
												metadata: { type: "cmdk" },
												generationUUID: Ae,
											});
											Oe.signal.addEventListener("abort", () => {
												De.abort();
											}),
												De.signal.addEventListener("abort", () => {
													je.abort();
												});
											let Ve = [];
											je.signal.addEventListener("abort", () => {
												Ve.at(-1)?.response?.case !== "editEnd" &&
													(console.log("inner abort", Ae, Ve),
													console.error(
														"aborting cmd-k generation even though it's not finished. you should def tell andrew abt this, this is a spooky abortcontroller bug",
														Ae,
													));
											}),
												this.c.decrementBubbleTimesLeft(),
												this.c.addToPromptHistory({
													prompt: ie,
													commandType: L.CommandType.EDIT,
												});
											const Ze = await this.J.createModelReference(X.fileUri);
											try {
												const et = Ze.object.textEditorModel,
													rt = await this.c.cmdKClient(),
													ft = await this.w.getPreparedEditRequest({
														query: ie,
														fastMode: !1,
														lineRange: ee,
														codeBlocks: _,
														docs: te,
														spoofedSelection: pe,
														spoofedDiagnostics: $e,
														spoofedCellId: ye,
														images: Q,
														links: Z,
														originalRequest: X.originalRequest,
														modelUriForEdit: X.fileUri,
													}),
													bt = await (async () =>
														new P.$DC({
															explicitContext: ft.explicitContext,
															promptCodeBlocks: ft.promptCodeBlocks,
															documentationIdentifiers:
																ft.documentationIdentifiers,
														}))();
												let nt = this.z.nonPersistentStorage.promptBars.find(
													(ri) => ri.id === Y,
												);
												if (nt === void 0) return;
												let lt = [];
												await Promise.all(
													this.z.nonPersistentStorage.promptBars
														.filter((ri) => ri.id !== Y)
														.map(async (ri) => {
															if (ri.dependencyPromptBarIds.includes(nt.id)) {
																const $i =
																	this.z.nonPersistentStorage.inlineDiffs.find(
																		(Wt) => Wt.id === ri.diffId,
																	);
																if ($i !== void 0)
																	lt.push(
																		new P.$vC({
																			relativePath: this.g.asRelativePath(
																				ri.uri,
																				!1,
																			),
																			originalLines: $i.originalTextLines,
																			extraContextAbove:
																				$i.extraContextLinesAbove,
																			extraContextBelow:
																				$i.extraContextLinesBelow,
																		}),
																	);
																else {
																	const Wt =
																		await this.getPromptBarCurrentRange(ri);
																	if (Wt) {
																		const at = (
																				await this.J.createModelReference(
																					ri.uri,
																				)
																			).object.textEditorModel,
																			pi = Math.min(
																				Math.max(
																					Wt.endLineNumberExclusive - 1,
																					Wt.startLineNumber,
																				),
																				et.getLineCount(),
																			),
																			Li = et.getLineMaxColumn(pi),
																			Di = new E.$kL(
																				Wt.startLineNumber,
																				1,
																				pi,
																				Li,
																			),
																			Ui = at.getLineMaxColumn(
																				Di.endLineNumber,
																			),
																			Wi = new w.$iL(
																				Di.startLineNumber,
																				1,
																				Di.endLineNumber,
																				Ui,
																			),
																			Gi = at.getValueInRange(Wi),
																			qi = at.getValueInRange(
																				w.$iL.getRangeAbove(new w.$iL(Wi), 5),
																			),
																			Oi = at.getValueInRange(
																				w.$iL.getRangeOnBelow(
																					new w.$iL(Wi),
																					5,
																					at.getLineCount(),
																				),
																			),
																			yi =
																				Gi.trim() === ""
																					? []
																					: Gi.split(at.getEOL()),
																			Ai =
																				qi.trim() === ""
																					? []
																					: qi.split(at.getEOL()),
																			li =
																				Oi.trim() === ""
																					? []
																					: Oi.split(at.getEOL());
																		lt.push(
																			new P.$vC({
																				relativePath: this.g.asRelativePath(
																					ri.uri,
																					!1,
																				),
																				originalLines: yi,
																				extraContextAbove: Ai,
																				extraContextBelow: li,
																			}),
																		);
																	}
																}
															}
														}),
												);
												let ct = [];
												nt.dependencyPromptBarIds.length > 0 &&
													nt.dependencyPromptBarIds
														.map((Wt) =>
															this.z.nonPersistentStorage.promptBars.find(
																(tt) => tt.id === Wt,
															),
														)
														.map((Wt) =>
															this.z.nonPersistentStorage.inlineDiffs.find(
																(tt) => tt.id === Wt?.diffId,
															),
														)
														.forEach((Wt) => {
															Wt !== void 0 &&
																ct.push(
																	new P.$wC({
																		relativePath: this.g.asRelativePath(Wt.uri),
																		originalLines: Wt.originalTextLines,
																		newLines: (0, a.$57b)(Wt),
																		extraContextAbove:
																			Wt.extraContextLinesAbove,
																		extraContextBelow:
																			Wt.extraContextLinesBelow,
																	}),
																);
														});
												let gt = [];
												const ht = X.isHyperMode ?? !1;
												if (
													this.z.applicationUserPersistentStorage.checklistState
														?.doneCommandK !== !0
												) {
													const ri =
														this.z.applicationUserPersistentStorage
															.checklistState;
													this.z.setApplicationUserPersistentStorage(
														"checklistState",
														($i) => ({ ...($i ?? {}), doneCommandK: !0 }),
													);
												}
												const Rt = await this.F.streamRequestWithContextWrapped(
													ve,
													{
														request: {
															cmdKOptions: {
																modelDetails: qe,
																chatMode: X.chatMode,
																adaCmdKContext: !1,
																useReranker: X.useReranker,
																useWeb: X.useWeb,
															},
															cmdKDebugInfo: Te,
															legacyContext: bt,
															sessionId: Y,
															previousEdits: ct ?? [],
															upcomingEdits: lt ?? [],
															images: ft.images,
															links: ft.links,
															hyperModel: ht ? X.hyperModel : void 0,
															diffHistory: gt,
															diffToBaseBranch: void 0,
														},
														finalInput: {
															case: "cmd-k",
															fileUri: X.fileUri,
															query: ie,
															replaceRange: X.diffRange ?? ee,
															queryHistory: X.queryHistory,
															chatHistory: nt?.inlineChatHistory?.current,
														},
														endpoint: async (ri, $i) =>
															ht
																? rt.streamHypermode(new P.$xC(ri), $i)
																: rt.streamCmdK(new P.$yC(ri), $i),
														generationUUID: Ae,
														abortSignal: je.signal,
														frozenDesire: "unfreezeOnStreamCompletion",
													},
												);
												if (!Rt.ok()) return;
												const Nt =
														M.$J0.typeName +
														"/" +
														M.$J0.methods.streamCmdK.name,
													jt = this.c.streamResponse({
														modelDetails: qe,
														streamer: Rt.v,
														generationUUID: Ae,
														streamerURL: Nt,
														rethrowCancellation: !0,
														rerun: ue,
														source: ht ? "other" : "cmd-k",
													}),
													ti = this.O,
													kt = this.z,
													hi = (async function* () {
														try {
															let ri = 0;
															for await (const $i of jt)
																yield $i, Ve.push($i), ri++;
														} catch (ri) {
															if (ti.shouldShowImmediateErrorMessage(ri)) {
																const $i = (0, V.$X6b)(ri);
																kt.setNonPersistentStorage(
																	"promptBars",
																	(Wt, tt) => Wt.id === Y,
																	"errorDetails",
																	{
																		generationUUID: Ae,
																		error: $i,
																		message: ri?.rawMessage,
																		rerun: void 0,
																	},
																);
															}
															throw ri;
														}
													})(),
													Kt = this.F.getReactiveReadonlyContextSession(ve);
												if (!Kt)
													throw new Error(
														"BIG ARVID BUG: context session is undefined",
													);
												const di = Kt.intents
													.find(
														(ri) => ri.intent.intent.case === "cmdKCurrentFile",
													)
													?.items.find(
														(ri) => ri.item.item.case === "cmdKSelection",
													)?.item.item.value;
												if (!di)
													throw new Error(
														"BIG ARVID BUG: cmdKSelectionItem is undefined",
													);
												let Ye = di.lines;
												const ze = Kt.intents
													.find(
														(ri) => ri.intent.intent.case === "cmdKQueryEtc",
													)
													?.items.find(
														(ri) => ri.item.item.case === "cmdKQuery",
													)?.item.item.value;
												if (!ze)
													throw new Error(
														"BIG ARVID BUG: cmdKQuery is undefined",
													);
												const Xe = Kt.intents
													.find(
														(ri) => ri.intent.intent.case === "cmdKCurrentFile",
													)
													?.items.find(
														(ri) =>
															ri.item.item.case === "cmdKImmediateContext",
													)?.item.item.value;
												if (!Xe)
													throw new Error(
														"BIG ARVID BUG: cmdKImmediateContext is undefined",
													);
												const It = Kt.intents
														.find(
															(ri) => ri.intent.intent.case === "cmdKQueryEtc",
														)
														?.items.find(
															(ri) => ri.item.item.case === "chatHistory",
														)?.item.item.value,
													Lt = Kt.intents
														.find(
															(ri) => ri.intent.intent.case === "cmdKQueryEtc",
														)
														?.items.find(
															(ri) => ri.item.item.case === "cmdKQueryHistory",
														)?.item.item.value;
												let xt = Lt;
												for (; xt !== void 0; )
													(Ye = xt.selection?.lines ?? []),
														(xt = xt.queryHistory);
												const Vt = {
														query: ze,
														immediateContext: Xe,
														selection: di,
														queryHistory: Lt,
														contextItemHashes: Kt.intents.flatMap((ri) =>
															ri.items.map(($i) => $i.itemHash),
														),
													},
													Bt = () => {
														console.log(
															"real done callback being called. you should only ever see this message once",
														),
															console.log("adding followup..."),
															Ie ||
																((Ie = !0),
																this.addFollowup({
																	promptBarId: Y,
																	req: {
																		case: "cmdKQueryHistory",
																		queryHistory: Vt,
																	},
																	structuredQuery: ne,
																})),
															console.log("calling the done callback arg"),
															le?.();
													};
												if (X.chatMode === !0) {
													await this.handleChatResponse({
														promptBarId: Y,
														stream: hi,
														generationUUID: Ae,
														doneCallback: () => {
															Bt();
														},
													});
													return;
												}
												ke && (X.rejectCurrentDiff(), (ke = !1));
												const Gt = et.getEOL(),
													Mt = (ri) => {
														this.z.setNonPersistentStorage(
															"promptBars",
															($i) => $i.id === Y,
															"statusUpdate",
															ri,
														);
													},
													Ut = this.c.streamLines(
														(async function* () {
															for await (const ri of hi)
																ri.response.case === "editStream"
																	? yield ri.response.value.text.replace(
																			`
`,
																			Gt,
																		)
																	: ri.response.case === "statusUpdate" &&
																		Mt(ri.response.value.messages);
														})(),
													);
												let ei = Ut;
												if (fe) {
													const ri = K(Ut);
													(ei = ri()), fe(ri());
												}
												if (De.signal.aborted) return;
												const mi = Ye.every((ri) => ri.trim() === "");
												nt = this.z.nonPersistentStorage.promptBars.find(
													(ri) => ri.id === Y,
												);
												const ii =
														this.w.getPromptBarCurrentRange(nt, et) ?? ee,
													Dt = et.getValueInRange(
														w.$iL.getRangeAbove(new w.$iL(ii), 5),
													),
													Jt = et.getValueInRange(
														w.$iL.getRangeOnBelow(
															new w.$iL(ii),
															5,
															et.getLineCount(),
														),
													),
													si = Dt.split(et.getEOL()),
													Zt = Jt.split(et.getEOL()),
													ci = [];
												for (
													let ri = ii.startLineNumber;
													ri < ii.endLineNumberExclusive;
													ri++
												)
													et.tokenization.forceTokenization(ri),
														ci.push(
															et.tokenization.getLineTokens(ri).extractObject(),
														);
												if (
													X.isHeadless_onlyAvailableWithUseContextSession === !0
												) {
													let ri = [];
													for await (const $i of ei) ri.push($i);
													return ri.join(Gt);
												}
												return (
													console.log(
														`calling streammultidiff for generation ${Ae}. is main generation? ${Le === Ae}`,
													),
													await this.u.streamMultiDiff({
														abortController: De,
														uri: X.fileUri,
														originalLineRange: new i.$rL(
															ii.startLineNumber,
															ii.endLineNumberExclusive,
														),
														generationUUID: Ae,
														orderedGenerationUUIDs: Ee,
														streamingLines: ei,
														prompt: ie,
														originalTextLines: et
															.getValueInRange({
																startLineNumber: ii.startLineNumber,
																startColumn: 1,
																endLineNumber: ii.endLineNumberExclusive - 1,
																endColumn: et.getLineMaxColumn(
																	ii.endLineNumberExclusive - 1,
																),
															})
															.split(Gt),
														originalLineTokens: ci,
														extraContextLinesAbove: si,
														extraContextLinesBelow: Zt,
														hideDeletionViewZones: mi,
														isHidden: !1,
														undoRedo: {
															undo: () => {
																se();
															},
															redo: () => {},
														},
														diffIdCallback: (ri) => {
															if (De.signal.aborted) {
																this.u.cancelDiff(ri, Ae);
																return;
															} else
																De.signal.addEventListener("abort", () => {
																	this.u.cancelDiff(ri, Ae);
																});
															Se?.(ri);
														},
														doneCallback: (ri) => {
															console.log("calling done callback");
														},
														globalDoneCallback: Bt,
														cancelGenerationWithNoChangesCallback: oe,
														rejectCallback: ae,
														promptBarId: Y,
													})
												);
											} catch (et) {
												console.error(et),
													this.z.setNonPersistentStorage(
														"inprogressAIGenerations",
														(rt) => rt.filter((ft) => ft.generationUUID !== Ae),
													);
											} finally {
												Ze.dispose();
											}
										},
									),
								);
							})(),
						};
					}
					submitContextSessionEdit(
						X,
						Y,
						ie,
						ne,
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
					) {
						if (ve) {
							if (
								X.chatMode !== !0 &&
								this.z.applicationUserPersistentStorage
									.allowMultiCmdKGenerations
							)
								return this.submitContextSessionEditWithMultipleGenerations(
									X,
									Y,
									ie,
									ne,
									ee,
									_,
									te,
									Q,
									Z,
									se,
									re,
									le,
									oe,
									ae,
									pe,
									$e,
									ye,
									ue,
									fe,
									me,
								);
							console.error(
								"Tried to do multiple generations, but they're banned!",
							);
						}
						const ge = X.contextSessionUuid,
							be = (0, b.$9g)();
						let Ce = new AbortController();
						return {
							abortController: Ce,
							generationUUID: be,
							promise: (async () => {
								this.m.publicLogCapture("Submitted cmd-k"),
									this.m.publicLogCapture("Submitted Prompt"),
									this.z.setNonPersistentStorage(
										"promptBars",
										(Ie) => Ie.id === Y,
										"chatResponse",
										void 0,
									),
									this.z.setNonPersistentStorage(
										"promptBars",
										(Ie) => Ie.id === Y,
										"errorDetails",
										void 0,
									);
								const Fe = this.q.getActiveCodeEditor();
								if (!Fe) return;
								if (!Fe.hasModel()) {
									console.error("No model found, cannot edit.");
									return;
								}
								const Oe = Fe.getModel(),
									xe = new i.$rL(
										ee.startLineNumber,
										ee.endLineNumberExclusive,
									).toExclusiveRange();
								this.n.recordCmdKEvent(Oe, {
									requestId: be,
									promptBarId: Y,
									eventType: {
										case: "submitPrompt",
										value: {
											prompt: ie,
											originalRange: xe,
											originalText: Oe.getValueInRange(xe),
										},
									},
								}),
									Fe.setPosition({ lineNumber: ee.startLineNumber, column: 1 });
								const He = await this.C.getCmdKDebugInfo(),
									Ke = this.c.getModelDetails({ specificModelField: "cmd-k" });
								this.m.publicLogCapture("submitted.cmd-k", {
									model: Ke.modelName,
								});
								const [Je, Te] = this.c.registerNewGeneration({
									metadata: { type: "cmdk" },
									generationUUID: be,
								});
								Ce.signal.addEventListener("abort", () => {
									Te.abort();
								}),
									this.c.decrementBubbleTimesLeft(),
									this.c.addToPromptHistory({
										prompt: ie,
										commandType: L.CommandType.EDIT,
									});
								const Ee = await this.J.createModelReference(X.fileUri);
								try {
									const Ie = Ee.object.textEditorModel,
										Be = await this.c.cmdKClient(),
										Se = await this.w.getPreparedEditRequest({
											query: ie,
											fastMode: !1,
											lineRange: ee,
											codeBlocks: _,
											docs: te,
											spoofedSelection: pe,
											spoofedDiagnostics: $e,
											spoofedCellId: ye,
											images: Q,
											links: Z,
											originalRequest: X.originalRequest,
											modelUriForEdit: X.fileUri,
										}),
										ke = await (async () =>
											new P.$DC({
												explicitContext: Se.explicitContext,
												promptCodeBlocks: Se.promptCodeBlocks,
												documentationIdentifiers: Se.documentationIdentifiers,
											}))();
									let Ue = this.z.nonPersistentStorage.promptBars.find(
										(Bt) => Bt.id === Y,
									);
									if (Ue === void 0) return;
									let qe = [];
									await Promise.all(
										this.z.nonPersistentStorage.promptBars
											.filter((Bt) => Bt.id !== Y)
											.map(async (Bt) => {
												if (Bt.dependencyPromptBarIds.includes(Ue.id)) {
													const Gt =
														this.z.nonPersistentStorage.inlineDiffs.find(
															(Mt) => Mt.id === Bt.diffId,
														);
													if (Gt !== void 0)
														qe.push(
															new P.$vC({
																relativePath: this.g.asRelativePath(Bt.uri, !1),
																originalLines: Gt.originalTextLines,
																extraContextAbove: Gt.extraContextLinesAbove,
																extraContextBelow: Gt.extraContextLinesBelow,
															}),
														);
													else {
														const Mt = await this.getPromptBarCurrentRange(Bt);
														if (Mt) {
															const ei = (
																	await this.J.createModelReference(Bt.uri)
																).object.textEditorModel,
																mi = Math.min(
																	Math.max(
																		Mt.endLineNumberExclusive - 1,
																		Mt.startLineNumber,
																	),
																	Ie.getLineCount(),
																),
																ii = Ie.getLineMaxColumn(mi),
																Dt = new E.$kL(Mt.startLineNumber, 1, mi, ii),
																Jt = ei.getLineMaxColumn(Dt.endLineNumber),
																si = new w.$iL(
																	Dt.startLineNumber,
																	1,
																	Dt.endLineNumber,
																	Jt,
																),
																Zt = ei.getValueInRange(si),
																ci = ei.getValueInRange(
																	w.$iL.getRangeAbove(new w.$iL(si), 5),
																),
																ri = ei.getValueInRange(
																	w.$iL.getRangeOnBelow(
																		new w.$iL(si),
																		5,
																		ei.getLineCount(),
																	),
																),
																$i =
																	Zt.trim() === "" ? [] : Zt.split(ei.getEOL()),
																Wt =
																	ci.trim() === "" ? [] : ci.split(ei.getEOL()),
																tt =
																	ri.trim() === "" ? [] : ri.split(ei.getEOL());
															qe.push(
																new P.$vC({
																	relativePath: this.g.asRelativePath(
																		Bt.uri,
																		!1,
																	),
																	originalLines: $i,
																	extraContextAbove: Wt,
																	extraContextBelow: tt,
																}),
															);
														}
													}
												}
											}),
									);
									let Ae = [];
									Ue.dependencyPromptBarIds.length > 0 &&
										Ue.dependencyPromptBarIds
											.map((Mt) =>
												this.z.nonPersistentStorage.promptBars.find(
													(Ut) => Ut.id === Mt,
												),
											)
											.map((Mt) =>
												this.z.nonPersistentStorage.inlineDiffs.find(
													(Ut) => Ut.id === Mt?.diffId,
												),
											)
											.forEach((Mt) => {
												Mt !== void 0 &&
													Ae.push(
														new P.$wC({
															relativePath: this.g.asRelativePath(Mt.uri),
															originalLines: Mt.originalTextLines,
															newLines: (0, a.$57b)(Mt),
															extraContextAbove: Mt.extraContextLinesAbove,
															extraContextBelow: Mt.extraContextLinesBelow,
														}),
													);
											});
									let Me = [],
										De;
									const Re = X.isHyperMode ?? !1;
									if (
										this.z.applicationUserPersistentStorage.checklistState
											?.doneCommandK !== !0
									) {
										const Bt =
											this.z.applicationUserPersistentStorage.checklistState;
										this.z.setApplicationUserPersistentStorage(
											"checklistState",
											(Gt) => ({ ...(Gt ?? {}), doneCommandK: !0 }),
										);
									}
									const je = await this.F.streamRequestWithContextWrapped(ge, {
										request: {
											cmdKOptions: {
												modelDetails: Ke,
												chatMode: X.chatMode,
												adaCmdKContext: !1,
												useReranker: X.useReranker,
												useWeb: X.useWeb,
											},
											cmdKDebugInfo: He,
											legacyContext: ke,
											sessionId: Y,
											previousEdits: Ae ?? [],
											upcomingEdits: qe ?? [],
											images: Se.images,
											links: Se.links,
											hyperModel: Re ? X.hyperModel : void 0,
											diffHistory: Me,
											diffToBaseBranch: De,
											timingInfo:
												me === void 0
													? void 0
													: { userInputTime: me, streamCmdkTime: Date.now() },
										},
										finalInput: {
											case: "cmd-k",
											fileUri: X.fileUri,
											query: ie,
											replaceRange: X.diffRange ?? ee,
											queryHistory: X.queryHistory,
											chatHistory: Ue?.inlineChatHistory?.current,
										},
										endpoint: async (Bt, Gt) =>
											Re
												? Be.streamHypermode(new P.$xC(Bt), Gt)
												: Be.streamCmdK(new P.$yC(Bt), Gt),
										generationUUID: be,
										abortSignal: Te.signal,
										frozenDesire: "unfreezeOnStreamCompletion",
									});
									if (!je.ok()) return;
									const Ve =
											M.$J0.typeName + "/" + M.$J0.methods.streamCmdK.name,
										Ze = this.c.streamResponse({
											modelDetails: Ke,
											streamer: je.v,
											generationUUID: be,
											streamerURL: Ve,
											rethrowCancellation: !0,
											rerun: ue,
											source: Re ? "other" : "cmd-k",
										}),
										et = this.O,
										rt = this.z,
										ft = (async function* () {
											try {
												let Bt = 0;
												for await (const Gt of Ze) yield Gt, Bt++;
											} catch (Bt) {
												if (et.shouldShowImmediateErrorMessage(Bt)) {
													const Gt = (0, V.$X6b)(Bt);
													rt.setNonPersistentStorage(
														"promptBars",
														(Mt, Ut) => Mt.id === Y,
														"errorDetails",
														{
															generationUUID: be,
															error: Gt,
															message: Bt?.rawMessage,
															rerun: void 0,
														},
													);
												}
												throw Bt;
											}
										})(),
										bt = this.F.getReactiveReadonlyContextSession(ge);
									if (!bt)
										throw new Error(
											"BIG ARVID BUG: context session is undefined",
										);
									const nt = bt.intents
										.find((Bt) => Bt.intent.intent.case === "cmdKCurrentFile")
										?.items.find((Bt) => Bt.item.item.case === "cmdKSelection")
										?.item.item.value;
									if (!nt)
										throw new Error(
											"BIG ARVID BUG: cmdKSelectionItem is undefined",
										);
									let lt = nt.lines;
									const ct = bt.intents
										.find((Bt) => Bt.intent.intent.case === "cmdKQueryEtc")
										?.items.find((Bt) => Bt.item.item.case === "cmdKQuery")
										?.item.item.value;
									if (!ct)
										throw new Error("BIG ARVID BUG: cmdKQuery is undefined");
									const gt = bt.intents
										.find((Bt) => Bt.intent.intent.case === "cmdKCurrentFile")
										?.items.find(
											(Bt) => Bt.item.item.case === "cmdKImmediateContext",
										)?.item.item.value;
									if (!gt)
										throw new Error(
											"BIG ARVID BUG: cmdKImmediateContext is undefined",
										);
									const ht = bt.intents
											.find((Bt) => Bt.intent.intent.case === "cmdKQueryEtc")
											?.items.find((Bt) => Bt.item.item.case === "chatHistory")
											?.item.item.value,
										Rt = bt.intents
											.find((Bt) => Bt.intent.intent.case === "cmdKQueryEtc")
											?.items.find(
												(Bt) => Bt.item.item.case === "cmdKQueryHistory",
											)?.item.item.value;
									let Nt = Rt;
									for (; Nt !== void 0; )
										(lt = Nt.selection?.lines ?? []), (Nt = Nt.queryHistory);
									const jt = {
											query: ct,
											immediateContext: gt,
											selection: nt,
											queryHistory: Rt,
											contextItemHashes: bt.intents.flatMap((Bt) =>
												Bt.items.map((Gt) => Gt.itemHash),
											),
										},
										ti = () => {
											Ce.abort();
											const Bt =
													X.chatMode === !0
														? (() => {
																const ei =
																	this.z.nonPersistentStorage.promptBars.find(
																		(ii) => ii.id === Y,
																	)?.chatResponse;
																return {
																	case: "chatHistory",
																	chatHistory: {
																		userMessage: ie,
																		assistantResponse: ei ?? "",
																		chatHistory: ht,
																		activeForCmdK: !1,
																	},
																};
															})()
														: { case: "cmdKQueryHistory", queryHistory: jt },
												Gt = this.z.nonPersistentStorage.promptBars.find(
													(Ut) => Ut.id === Y,
												),
												Mt = this.z.nonPersistentStorage.inlineDiffs.find(
													(Ut) => Ut.id === Gt?.diffId,
												);
											this.addFollowup({
												promptBarId: Y,
												req: Bt,
												structuredQuery: ne,
											}),
												le?.();
										};
									if (X.chatMode === !0) {
										await this.handleChatResponse({
											promptBarId: Y,
											stream: ft,
											generationUUID: be,
											doneCallback: () => {
												ti();
											},
										});
										return;
									}
									X.rejectCurrentDiff();
									const kt = Ie.getEOL(),
										hi = (Bt) => {
											this.z.setNonPersistentStorage(
												"promptBars",
												(Gt) => Gt.id === Y,
												"statusUpdate",
												Bt,
											);
										},
										Kt = this.c.streamLines(
											(async function* () {
												for await (const Bt of ft)
													Bt.response.case === "editStream"
														? yield Bt.response.value.text.replace(
																`
`,
																kt,
															)
														: Bt.response.case === "statusUpdate" &&
															hi(Bt.response.value.messages);
											})(),
										);
									let di = Kt;
									if (fe) {
										const Bt = K(Kt);
										(di = Bt()), fe(Bt());
									}
									if (Ce.signal.aborted) return;
									const Ye = lt.every((Bt) => Bt.trim() === "");
									Ue = this.z.nonPersistentStorage.promptBars.find(
										(Bt) => Bt.id === Y,
									);
									const ze = this.w.getPromptBarCurrentRange(Ue, Ie) ?? ee,
										Xe = Ie.getValueInRange(
											w.$iL.getRangeAbove(new w.$iL(ze), 5),
										),
										It = Ie.getValueInRange(
											w.$iL.getRangeOnBelow(
												new w.$iL(ze),
												5,
												Ie.getLineCount(),
											),
										),
										Lt = Xe.split(Ie.getEOL()),
										xt = It.split(Ie.getEOL()),
										Vt = [];
									for (
										let Bt = ze.startLineNumber;
										Bt < ze.endLineNumberExclusive;
										Bt++
									)
										Ie.tokenization.forceTokenization(Bt),
											Vt.push(
												Ie.tokenization.getLineTokens(Bt).extractObject(),
											);
									if (X.isHeadless_onlyAvailableWithUseContextSession === !0) {
										let Bt = [];
										for await (const Gt of di) Bt.push(Gt);
										return Bt.join(kt);
									}
									return await this.u.streamDiff({
										uri: X.fileUri,
										originalLineRange: new i.$rL(
											ze.startLineNumber,
											ze.endLineNumberExclusive,
										),
										generationUUID: be,
										streamingLines: di,
										prompt: ie,
										originalTextLines: Ie.getValueInRange({
											startLineNumber: ze.startLineNumber,
											startColumn: 1,
											endLineNumber: ze.endLineNumberExclusive - 1,
											endColumn: Ie.getLineMaxColumn(
												ze.endLineNumberExclusive - 1,
											),
										}).split(kt),
										originalLineTokens: Vt,
										extraContextLinesAbove: Lt,
										extraContextLinesBelow: xt,
										hideDeletionViewZones: Ye,
										isHidden: !1,
										undoRedo: {
											undo: () => {
												se();
											},
											redo: () => {},
										},
										diffIdCallback: (Bt) => {
											if (Ce.signal.aborted) {
												this.u.cancelDiff(Bt);
												return;
											} else
												Ce.signal.addEventListener("abort", () => {
													this.u.cancelDiff(Bt);
												});
											re?.(Bt);
										},
										doneCallback: (Bt) => {
											ti();
										},
										cancelGenerationWithNoChangesCallback: oe,
										rejectCallback: ae,
										promptBarId: Y,
									});
								} catch (Ie) {
									console.error(Ie),
										this.z.setNonPersistentStorage(
											"inprogressAIGenerations",
											(Be) => Be.filter((Se) => Se.generationUUID !== be),
										);
								} finally {
									Ee.dispose();
								}
							})(),
						};
					}
					async submitTerminalCmdK(X, Y, ie, ne) {
						this.m.publicLogCapture("Submitted cmd-k in terminal"),
							this.m.publicLogCapture("Submitted Prompt"),
							Y("chatResponse", void 0);
						const ee = this.c.getModelDetails({
							specificModelField: "terminal-cmd-k",
						});
						this.m.publicLogCapture("submitted.cmd-k-terminal", {
							model: ee.modelName,
						});
						const [_, te] = this.c.registerNewGeneration({
							metadata: { type: "cmdk" },
							generationUUID: ie,
						});
						this.c.addToPromptHistory({
							prompt: X.plainText,
							commandType: L.CommandType.EDIT,
						});
						try {
							Y("abortController", te);
							const Q = await this.c.cmdKClient(),
								Z = X.richText,
								se = X.plainText,
								re = await (async () =>
									new P.$DC({
										explicitContext: await this.c.getExplicitContext(),
									}))(),
								le = await this.F.streamRequestWithContextWrapped(
									X.contextSessionUuid,
									{
										request: {
											cmdKOptions: {
												modelDetails: ee,
												chatMode: ne.chatMode,
												adaCmdKContext: !1,
												useWeb: !!X.useWeb,
											},
											legacyContext: re,
											sessionId: X.uuid,
										},
										finalInput: {
											case: "terminal-cmd-k",
											query: se,
											instanceId: X.instanceId,
											queryHistory: X.queryHistory?.current,
											chatHistory: X.chatHistory?.current,
										},
										endpoint: async (me, ve) =>
											Q.streamTerminalCmdK(new P.$CC(me), ve),
										generationUUID: ie,
										abortSignal: te.signal,
										frozenDesire: "unfreezeOnStreamCompletion",
									},
								);
							if (!le.ok()) return ie;
							const oe =
									M.$J0.typeName + "/" + M.$J0.methods.streamTerminalCmdK.name,
								ae = this.c.streamResponse({
									modelDetails: ee,
									streamer: le.v,
									generationUUID: ie,
									rethrowCancellation: !0,
									streamerURL: oe,
									rerun: () => {},
									source: "other",
								}),
								pe = this.F.getReactiveReadonlyContextSession(
									X.contextSessionUuid,
								);
							if (!pe)
								throw new Error("BIG ARVID BUG: context session is undefined");
							const $e = pe.intents
								.find((me) => me.intent.intent.case === "terminalCmdKDefaults")
								?.items.find((me) => me.item.item.case === "terminalCmdKQuery")
								?.item.item.value;
							if (!$e) throw new Error("BIG ARVID BUG: cmdKQuery is undefined");
							const ye = pe.intents
									.find(
										(me) => me.intent.intent.case === "terminalCmdKDefaults",
									)
									?.items.find((me) => me.item.item.case === "chatHistory")
									?.item.item.value,
								ue = pe.intents
									.find(
										(me) => me.intent.intent.case === "terminalCmdKDefaults",
									)
									?.items.find(
										(me) => me.item.item.case === "terminalCmdKQueryHistory",
									)?.item.item.value,
								fe = () => {
									te.abort();
									const me =
										ne.chatMode === !0
											? (() => {
													const ve = X.chatResponse;
													return {
														case: "chatHistory",
														chatHistory: {
															userMessage: se,
															assistantResponse: ve ?? "",
															chatHistory: ye,
															activeForCmdK: !1,
														},
													};
												})()
											: (() => {
													const ve = X.suggestedCommand;
													return {
														case: "terminalCmdKQueryHistory",
														queryHistory: {
															query: $e,
															queryHistory: ue,
															contextItemHashes: pe.intents.flatMap((be) =>
																be.items.map((Ce) => Ce.itemHash),
															),
															suggestedCommand: ve,
														},
													};
												})();
									this.addTerminalFollowup({
										req: me,
										structuredQuery: Z,
										setData: Y,
										data: X,
									});
								};
							if (
								(ne.chatMode !== !0 && Y("suggestedCommand", ""),
								te.signal.aborted)
							)
								return ie;
							try {
								for await (const me of ae)
									if (me.response.case === "chat") {
										const ve = me.response.value.text;
										Y("chatResponse", (ge) => (ge === void 0 ? ve : ge + ve));
									} else if (me.response.case === "terminalCommand") {
										const ve = me.response.value.partialCommand;
										Y("suggestedCommand", (ge) => ge + ve);
									} else if (me.response.case === "statusUpdate") {
										const ve =
											me.response.value.messages.length > 0
												? me.response.value.messages[0]
												: void 0;
										Y("statusUpdate", ve);
									}
							} finally {
								fe(),
									this.z.setNonPersistentStorage(
										"inprogressAIGenerations",
										(me) => me.filter((ve) => ve.generationUUID !== ie),
									);
							}
						} catch (Q) {
							Y("abortController", void 0),
								console.error(Q),
								this.z.setNonPersistentStorage("inprogressAIGenerations", (Z) =>
									Z.filter((se) => se.generationUUID !== ie),
								);
						}
						return ie;
					}
					submitEditWithSelection(X) {
						try {
							if (X.options.useContextSession === !0)
								return this.submitContextSessionEdit(
									X.options,
									X.promptBarId,
									X.query,
									X.structuredQuery,
									X.lineRange,
									X.codeBlocks,
									X.docs,
									X.images ?? [],
									X.selectedLinks ?? [],
									X.focusEditor,
									X.diffIdCallback,
									X.doneCallback,
									X.cancelGenerationWithNoChangesCallback,
									X.rejectCallback,
									X.spoofedSelection,
									X.spoofedDiagnostics,
									X.spoofedCellId,
									X.rerun,
									X.inspectLineStream,
									X.startTime,
									this.z.applicationUserPersistentStorage
										.allowMultiCmdKGenerations,
								);
							X.options.rejectCurrentDiff();
							const Y = (0, b.$9g)();
							let ie = new AbortController();
							return {
								abortController: ie,
								generationUUID: Y,
								promise: (async () => {
									const ee = this.q.getActiveCodeEditor();
									if (!ee) return;
									if (!ee.hasModel()) {
										console.error("No model found, cannot edit.");
										return;
									}
									const _ = ee.getModel(),
										te = Math.min(
											Math.max(
												X.lineRange.endLineNumberExclusive - 1,
												X.lineRange.startLineNumber,
											),
											_.getLineCount(),
										),
										Q = _.getLineMaxColumn(te),
										Z = new E.$kL(X.lineRange.startLineNumber, 1, te, Q),
										se = ee.getModel().uri,
										re = ee.getModel(),
										le = re.getLineMaxColumn(Z.endLineNumber),
										oe = new w.$iL(Z.startLineNumber, 1, Z.endLineNumber, le),
										ae = re.getValueInRange(oe),
										pe = re.getValueInRange(
											w.$iL.getRangeAbove(new w.$iL(oe), 5),
										),
										$e = re.getValueInRange(
											w.$iL.getRangeOnBelow(new w.$iL(oe), 5, _.getLineCount()),
										),
										ye = ae.trim() === "",
										ue = ae.trim() === "" ? [] : ae.split(re.getEOL()),
										fe = pe.trim() === "" ? [] : pe.split(re.getEOL()),
										me = $e.trim() === "" ? [] : $e.split(re.getEOL());
									let ve,
										ge = await (async () =>
											X.options.fastMode && X.options.preloadedRequest
												? {
														...X.options.preloadedRequest,
														query: X.query,
														fastMode: !0,
													}
												: await this.w.getPreparedEditRequest({
														query: X.query,
														fastMode: !1,
														lineRange: X.lineRange,
														codeBlocks: X.codeBlocks,
														docs: X.docs,
														spoofedSelection: X.spoofedSelection,
														spoofedDiagnostics: X.spoofedDiagnostics,
														spoofedCellId: X.spoofedCellId,
														originalRequest: X.options.originalRequest,
														modelUriForEdit: X.options.fileUri,
														images: X.images,
														links: X.selectedLinks,
													}))();
									const Ce = await this.w.streamPreparedEdit(ge, {
										type: ye ? "generate" : "edit",
										generationUUID: Y,
										options: { rerun: X.rerun },
									});
									if (X.inspectLineStream) {
										const Fe = K(Ce);
										(ve = Fe()), X.inspectLineStream?.(Fe());
									} else ve = Ce;
									ee.setPosition({ lineNumber: oe.startLineNumber, column: 1 });
									const Le = [];
									for (
										let Fe = Z.startLineNumber;
										Fe <= Z.endLineNumber;
										Fe++
									) {
										_.tokenization.forceTokenization(Fe);
										const Oe = _.tokenization.getLineTokens(Fe);
										Le.push(Oe.extractObject());
									}
									if (!ie.signal.aborted)
										return await this.u.streamDiff({
											uri: se,
											originalLineRange: new i.$rL(
												Z.startLineNumber,
												ye ? Z.endLineNumber : Z.endLineNumber + 1,
											),
											generationUUID: Y,
											streamingLines: ve,
											extraContextLinesAbove: fe,
											extraContextLinesBelow: me,
											prompt: X.query,
											originalTextLines: ue,
											originalLineTokens: Le,
											isHidden: !1,
											hideDeletionViewZones: !1,
											undoRedo: {
												undo: () => {
													X.focusEditor();
												},
												redo: () => {},
											},
											diffIdCallback: (Fe) => {
												if (ie.signal.aborted) {
													this.u.cancelDiff(Fe);
													return;
												} else
													ie.signal.addEventListener("abort", () => {
														this.u.cancelDiff(Fe);
													});
												X.diffIdCallback?.(Fe);
											},
											doneCallback: (Fe) => {
												ie.abort(),
													this.addFollowup({
														promptBarId: X.promptBarId,
														req: {
															case: "originalRequest",
															req: {
																...ge,
																originalRequest: X.options.originalRequest,
															},
														},
														structuredQuery: X.structuredQuery,
													}),
													X.doneCallback?.();
											},
											promptBarId: X.promptBarId,
										});
								})(),
							};
						} catch (Y) {
							throw (console.error("[Submitting]", "[Error]", Y), Y);
						}
					}
					async handleChatResponse({
						promptBarId: X,
						stream: Y,
						doneCallback: ie,
						generationUUID: ne,
					}) {
						try {
							for await (const ee of Y)
								if (ee.response.case === "chat") {
									const _ = ee.response.value.text;
									this.z.setNonPersistentStorage(
										"promptBars",
										(te) => te.id === X,
										"chatResponse",
										(te) => (te === void 0 ? _ : te + _),
									);
								} else
									ee.response.case === "statusUpdate"
										? this.z.setNonPersistentStorage(
												"promptBars",
												(_) => _.id === X,
												"statusUpdate",
												ee.response.value.messages,
											)
										: console.warn(
												"Not supported yet; mixing modes in stream; got in chat response: ",
												ee.response.case,
											);
						} finally {
							ie?.(),
								this.z.setNonPersistentStorage(
									"inprogressAIGenerations",
									(ee) => ee.filter((_) => _.generationUUID !== ne),
								);
						}
					}
					async getFilesForMultiFileEdit({
						promptBarId: X,
						topK: Y,
						query: ie,
					}) {
						const ne = this.z.nonPersistentStorage.promptBars.find(
							(Fe) => Fe.id === X,
						);
						if (!ne) return [];
						const ee = [],
							_ = this.F.getReactiveReadonlyContextSession(
								ne.contextSessionUuid,
							);
						if (_ !== void 0)
							for (const Fe of _.intents)
								(Fe.intent.intent.case === "file" ||
									Fe.intent.intent.case === "codeSelection") &&
									Fe.intent.type === k.ContextIntent_Type.USER_ADDED &&
									ee.push(Fe.intent.intent.value.relativeWorkspacePath);
						for (const Fe of ne.data.selections) {
							const Oe = f.URI.revive(Fe.uri);
							ee.push(this.g.asRelativePath(Oe));
						}
						let te = "";
						const Q = [],
							Z = await this.J.createModelReference(ne.uri);
						try {
							const Fe = Z.object.textEditorModel,
								Oe = this.w.getPromptBarCurrentRange(ne, Fe);
							if (Oe) {
								te = Fe.getValueInRange({
									startLineNumber: Oe.startLineNumber,
									startColumn: 1,
									endLineNumber: Oe.endLineNumberExclusive,
									endColumn: 1,
								});
								const He = (
										await this.N.getOrCreate(
											Z.object.textEditorModel,
											F.CancellationToken.None,
										)
									).getAllSymbols(),
									Ke = [];
								for (const Te of He)
									if (
										Oe.startLineNumber <= Te.range.endLineNumber &&
										Oe.endLineNumberExclusive > Te.range.startLineNumber
									) {
										const Ee = new z.$hL(
											Te.range.startLineNumber,
											Te.range.startColumn,
										);
										Ke.push(
											(0, O.$TOb)(
												this.L.referenceProvider,
												Fe,
												Ee,
												!0,
												!1,
												F.CancellationToken.None,
											),
										),
											Ke.push(
												(0, O.$POb)(
													this.L.definitionProvider,
													Fe,
													Ee,
													!1,
													F.CancellationToken.None,
												),
											);
									}
								(await Promise.all(Ke)).forEach((Te) => {
									Te.forEach((Ee) => {
										Q.push(this.g.asRelativePath(Ee.uri));
									});
								});
							}
						} finally {
							Z.dispose();
						}
						const se = `Query: ${ie}

Selected Code:
${te}`,
							re = this.H.getRecentLocations(500),
							oe =
								"{" +
								[...new Set(re.map((Fe) => this.g.asRelativePath(Fe.uri)))]
									.map((Fe) => (Fe ? "*" + Fe : void 0))
									.join(",") +
								"}",
							ae = this.G.parallelSearch(se, Y, Y, { globFilter: oe }),
							$e =
								"{" +
								[...new Set(Q)]
									.map((Fe) => (Fe ? "*" + Fe : void 0))
									.join(",") +
								"}",
							ye = this.G.parallelSearch(se, Y, Y, { globFilter: $e }),
							ue = this.G.parallelSearch(se, Y, Y),
							[fe, me, ve] = await Promise.all([ae, ue, ye]);
						let ge = new Map();
						[...me, ...fe, ...ve].forEach((Fe) => {
							let Oe = `${Fe.codeBlock?.relativeWorkspacePath}-${Fe.codeBlock?.range?.startPosition?.line}`;
							ge.has(Oe) || ge.set(Oe, Fe);
						});
						let Ce = Array.from(ge.values())
							.sort((Fe, Oe) => Oe.score - Fe.score)
							.map((Fe) => Fe.codeBlock)
							.filter((Fe) => Fe !== void 0 && Fe.contents.length < 2e4);
						return (
							console.info(
								`found ${Ce.length} code blocks from the embedding search`,
							),
							[
								...new Set([
									...ee,
									...Ce.map((Fe) => Fe.relativeWorkspacePath),
								]),
							].map((Fe) => ({
								relativeWorkspacePath: Fe,
								userAdded: !!ee.includes(Fe),
							}))
						);
					}
					async *getRelevantChunksForMultiFileEdit({
						promptBarId: X,
						query: Y,
						codeBlocks: ie,
						lineRange: ne,
						docs: ee,
						contextSessionUuid: _,
						uri: te,
						selectedFiles: Q,
						spoofedSelection: Z,
						spoofedDiagnostics: se,
						spoofedCellId: re,
					}) {
						const oe = this.z.nonPersistentStorage.promptBars.find(
							(Te) => Te.id === X,
						);
						if (!oe)
							return new P.$SC({
								response: { case: "codeBlocks", value: { codeBlocks: [] } },
							});
						let ae = "";
						const pe = await this.J.createModelReference(oe.uri);
						try {
							const Te = pe.object.textEditorModel,
								Ee = this.w.getPromptBarCurrentRange(oe, Te);
							Ee &&
								(ae = Te.getValueInRange({
									startLineNumber: Ee.startLineNumber,
									startColumn: 1,
									endLineNumber: Ee.endLineNumberExclusive,
									endColumn: 1,
								}));
						} finally {
							pe.dispose();
						}
						const $e = `Query: ${Y}

Selected Code:
${ae}`,
							ue =
								"{" +
								[...new Set(Q)]
									.map((Te) => (Te ? "*" + Te : void 0))
									.join(",") +
								"}",
							me = (await this.G.parallelSearch($e, 32, 32, { globFilter: ue }))
								.sort((Te, Ee) => Ee.score - Te.score)
								.map((Te) => Te.codeBlock)
								.filter((Te) => Te !== void 0 && Te.contents.length < 2e4),
							ve = (0, b.$9g)(),
							[ge, be] = this.c.registerNewGeneration({
								metadata: void 0,
								generationUUID: ve,
							});
						new AbortController().signal.addEventListener("abort", () => {
							be.abort();
						});
						const Le = await (async () => {
								const Te = await this.w.getPreparedEditRequest({
									query: Y,
									fastMode: !1,
									lineRange: ne,
									codeBlocks: ie,
									docs: ee,
									spoofedSelection: Z,
									spoofedDiagnostics: se,
									spoofedCellId: re,
									originalRequest: void 0,
									modelUriForEdit: te,
								});
								return new P.$DC({
									explicitContext: Te.explicitContext,
									promptCodeBlocks: Te.promptCodeBlocks,
									documentationIdentifiers: Te.documentationIdentifiers,
								});
							})(),
							Fe = this.c.getModelDetails({ specificModelField: "cmd-k" }),
							Oe = await this.c.cmdKClient(),
							xe = await this.F.streamRequestWithContextWrapped(_, {
								request: {
									cmdKOptions: {
										modelDetails: Fe,
										chatMode: !1,
										adaCmdKContext: !1,
									},
									legacyContext: Le,
									sessionId: X,
									codeBlocks: me,
								},
								finalInput: {
									case: "cmd-k",
									fileUri: te,
									query: Y,
									replaceRange: ne,
									queryHistory: void 0,
									chatHistory: void 0,
								},
								endpoint: async (Te, Ee) => Oe.getRelevantChunks(Te, Ee),
								generationUUID: ve,
								abortSignal: be.signal,
								frozenDesire: "unfreezeOnStreamCompletion",
							});
						if (!xe.ok())
							return new P.$SC({
								response: { case: "codeBlocks", value: { codeBlocks: [] } },
							});
						const He = M.$J0.typeName + "/" + M.$J0.methods.streamCmdK.name,
							Ke = this.c.streamResponse({
								modelDetails: Fe,
								streamer: xe.v,
								generationUUID: ve,
								streamerURL: He,
								rethrowCancellation: !0,
								rerun: () => {},
								source: "cmd-k",
							});
						let Je = [];
						for await (let Te of Ke)
							if ((Je.push(Te), Te.response.case === "chainOfThoughtStream"))
								yield Te.response.value.text;
							else if (Te.response.case === "codeBlocks") {
								yield Te.response.value.codeBlocks;
								return;
							}
					}
					async submitMultiFileEditsFromScratch({
						query: X,
						editGroups: Y,
						generationUUID: ie,
					}) {
						let ne = [];
						const ee = [];
						for (const _ of Y) {
							let te = [];
							for (const Q of _) {
								const Z = Q.codeBlock;
								if (!Z.range?.startPosition || !Z.range?.endPosition) continue;
								const se = Q.promptBarId ?? (0, b.$9g)();
								te.push(se);
								const re = {
									id: se,
									initText: X,
									filePath: Z.relativeWorkspacePath,
									selection: {
										selectionStartLineNumber: Z.range?.startPosition?.line,
										selectionStartColumn: Z.range?.startPosition?.column,
										positionLineNumber: Z.range?.endPosition?.line,
										positionColumn: Z.range?.endPosition?.column,
									},
									dependencyPromptBarIds: [...ne],
									waitForDependencies: !0,
									visible: !1,
								};
								if (Q.promptBarId && Z.range && Q.previousDiff) {
									const le = this.g.resolveRelativePath(
											Z.relativeWorkspacePath,
										),
										oe = await this.J.createModelReference(le),
										ae = oe.object.textEditorModel;
									try {
										const pe = {
												startLineNumber: Z.range.startPosition.line,
												endLineNumber: Z.range.endPosition.line,
												endColumn: Z.range.endPosition.column,
												startColumn: Z.range.startPosition.column,
											},
											$e = {
												currentRange: {
													startLineNumber: Z.range.startPosition.line,
													endLineNumberExclusive: Z.range.endPosition.line + 1,
												},
												originalTextLines: Q.previousDiff.originalTextLines,
												newTextLines: ae.getValueInRange(pe).split(ae.getEOL()),
												prompt: Q.previousDiff.prompt ?? "",
												generationUUID: (0, b.$9g)(),
												attachedToPromptBar: !0,
												isHidden: !1,
												uri: le,
												hideDeletionViewZones: !1,
												changes: [],
											};
										if (
											(($e.changes = (0, a.getDiffState)(
												Q.previousDiff.originalTextLines,
												$e.newTextLines,
												!0,
												!1,
											).changes),
											await this.u.addDiff($e, se),
											Q.previousDiff.prompt)
										) {
											const ye = {
												query: { query: Q.previousDiff.prompt },
												immediateContext: void 0,
												selection: void 0,
												queryHistory: void 0,
												contextItemHashes: [],
											};
											this.addFollowup({
												promptBarId: se,
												req: { case: "cmdKQueryHistory", queryHistory: ye },
												structuredQuery: X,
											});
										}
									} finally {
										oe.dispose();
									}
								} else ee.push(re);
							}
							ne.push(...te);
						}
						await this.I.executeCommand(R.$fW, ee);
					}
					async submitMultiFileEdits({
						parentPromptBarId: X,
						query: Y,
						editLocations: ie,
					}) {
						const ne = [];
						if (
							this.z.nonPersistentStorage.promptBars.find((_) => _.id === X)
						) {
							for (const _ of ie)
								!_.range?.startPosition ||
									!_.range?.endPosition ||
									ne.push({
										dependencyPromptBarIds: [X],
										initText: Y,
										filePath: _.relativeWorkspacePath,
										selection: {
											selectionStartLineNumber: _.range?.startPosition?.line,
											selectionStartColumn: _.range?.startPosition?.column,
											positionLineNumber: _.range?.endPosition?.line,
											positionColumn: _.range?.endPosition?.column,
										},
										waitForDependencies: !1,
									});
							await this.I.executeCommand(R.$fW, ne);
						}
					}
				};
				(J = Ne(
					[
						j(0, m.$Nfc),
						j(1, c.$S6b),
						j(2, g.$Vi),
						j(3, o.$26b),
						j(4, u.$36b),
						j(5, d.$km),
						j(6, q.$V7b),
						j(7, s.$dtb),
						j(8, l.$aM),
						j(9, a.$27b),
						j(10, y.$J7b),
						j(11, v.$0zb),
						j(12, I.$06b),
						j(13, T.$B7b),
						j(14, N.$J6b),
						j(15, A.$Feb),
						j(16, h.$ek),
						j(17, r.$MO),
						j(18, B.$k3),
						j(19, U.$b0b),
						j(20, H.$9Db),
						j(21, V.$W6b),
						j(22, G.$3Db),
					],
					J,
				)),
					(0, t.$lK)(e.$d0b, J, t.InstantiationType.Delayed);
			},
		)
