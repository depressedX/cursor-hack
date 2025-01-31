import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/browser/dom.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../services/ai/browser/aiMiscServices.js';
import '../../../../base/common/uri.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/common/model.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../../proto/aiserver/v1/cpp_connectweb.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../editor/common/core/range.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../base/common/uuid.js';
import '../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../../../proto/aiserver/v1/cpp_pb.js';
import '../../../../base/common/cppUtils/utils.js';
import '../browser/cppView.js';
import '../../../../editor/contrib/inlineCompletions/browser/controller/inlineCompletionsController.js';
import '../../../services/cursorAuth/browser/authenticationService.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/markers/common/markers.js';
import '../../../../editor/common/core/position.js';
import '../../../services/ai/browser/backendClient.js';
import '../../../../../proto/aiserver/v1/aiserver_connectweb.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../services/ai/browser/metricsService.js';
import '../../../services/ai/browser/diffingService.js';
import '../../../../base/common/network.js';
import '../../../../editor/common/cursorEvents.js';
import '../../../services/themes/browser/workbenchThemeService.js';
import '../../../../base/common/cppUtils/mergedDiffUtils/modelSnapshot.js';
import '../../../../base/common/cppUtils/mergedDiffUtils/change.js';
import '../../../../base/common/cppUtils/mergedDiffUtils/range.js';
import '../browser/cppDebouncingService.js';
import '../../../../editor/contrib/cCppGhostText/browser/cppGhostTextController.js';
import '../browser/cachingUtils.js';
import '../browser/utils.js';
import '../../../../editor/contrib/lightweightModel/common/lightweightTextModel.js';
import '../browser/cppTypes.js';
import '../../notebook/browser/services/notebookEditorService.js';
import '../../notebook/common/notebookCommon.js';
import '../browser/cppEventLogger.js';
import '../common/cppUtils.js';
import '../../../../editor/contrib/parameterHints/browser/parameterHintsModel.js';
import '../../../../editor/common/services/languageFeatures.js';
import './cppTypeService.js';
import '../../../../platform/cursor/browser/aiEverythingProviderService.js';
import '../../../services/statusbar/browser/statusbar.js';
import '../../../../platform/actions/common/actions.js';
import '../../../services/editor/common/editorService.js';
import '../../../../base/browser/ui/toggle/toggle.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../base/common/constants.js';
import '../../aiFeatureStatusService/browser/aiFeatureStatusService.js';
import '../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../../../../editor/common/core/selection.js';
import '../../../../editor/contrib/gotoSymbol/browser/peek/referencesController.js';
import '../../../services/views/common/viewsService.js';
import '../../markers/common/markers.js';
import '../../../../editor/common/languages/languageConfigurationRegistry.js';
import './partialAcceptUtils.js';
import './editsCache.js';
import '../../../../platform/markers/browser/markerService.js';
import '../browser/eventListeners/linterListener.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/map.js';
import '../../../../base/browser/webConstants.js';
import './suggestionsCache.js';
import './badCppHeuristics.js';
import './cppSuggestionsService.js';
import '../../aiWatcher/browser/aiWatcherHelpers.js';
import './cppStreaming.js';
import '../../../../base/common/buffer.js';
import '../../../services/ai/browser/cursorCredsService.js';
import '../../../../editor/common/encodedTokenAttributes.js';
import '../../../../platform/product/common/productService.js';
import '../../../../base/common/resources.js';
import '../../../../platform/aiAssert/browser/aiAssertService.js';
import '../../../../base/browser/hash.js';
import '../../../services/environment/common/environmentService.js';
import '../../../../editor/contrib/find/browser/findController.js';
import '../../../../editor/contrib/cCppGhostText/common/cppGhostTextUtils.js';
import './utils.js';
define(
		de[1978],
		he([
			1, 0, 3, 7, 20, 137, 9, 65, 64, 42, 1108, 45, 83, 56, 31, 17, 25, 47, 148,
			367, 646, 1977, 501, 232, 32, 90, 48, 285, 341, 5, 619, 1010, 23, 248,
			1895, 2215, 2214, 1131, 551, 1345, 2958, 1228, 1155, 1704, 293, 70, 332,
			971, 1608, 69, 1300, 280, 166, 11, 18, 268, 14, 10, 58, 287, 134, 104,
			840, 89, 555, 152, 2961, 2960, 770, 1789, 7, 59, 740, 2962, 2963, 2964,
			975, 2959, 76, 477, 171, 62, 19, 668, 530, 78, 618, 1153, 1229,
		]),
		function (			ce /*require*/,
			e /*exports*/,
			t /*lifecycle*/,
			i /*dom*/,
			w /*extensions*/,
			E /*aiMiscServices*/,
			C /*uri*/,
			d /*codeEditorService*/,
			m /*model*/,
			r /*resolverService*/,
			u /*cpp_connectweb*/,
			a /*reactiveStorageService*/,
			h /*utils_pb*/,
			c /*editorBrowser*/,
			n /*commands*/,
			g /*range*/,
			p /*workspace*/,
			o /*uuid*/,
			f /*aiserver_pb*/,
			b /*cpp_pb*/,
			s /*utils*/,
			l /*cppView*/,
			y /*inlineCompletionsController*/,
			$ /*authenticationService*/,
			v /*telemetry*/,
			S /*markers*/,
			I /*position*/,
			T /*backendClient*/,
			P /*aiserver_connectweb*/,
			k /*instantiation*/,
			L /*metricsService*/,
			D /*diffingService*/,
			M /*network*/,
			N /*cursorEvents*/,
			A /*workbenchThemeService*/,
			R /*modelSnapshot*/,
			O /*change*/,
			B /*range*/,
			U /*cppDebouncingService*/,
			z /*cppGhostTextController*/,
			F /*cachingUtils*/,
			x /*utils*/,
			H /*lightweightTextModel*/,
			q /*cppTypes*/,
			V /*notebookEditorService*/,
			G /*notebookCommon*/,
			K /*cppEventLogger*/,
			J /*cppUtils*/,
			W /*parameterHintsModel*/,
			X /*languageFeatures*/,
			Y /*cppTypeService*/,
			ie /*aiEverythingProviderService*/,
			ne /*statusbar*/,
			ee /*actions*/,
			_ /*editorService*/,
			te /*toggle*/,
			Q /*codicons*/,
			Z /*configuration*/,
			se /*constants*/,
			re /*aiFeatureStatusService*/,
			le /*reactiveStorageTypes*/,
			oe /*selection*/,
			ae /*referencesController*/,
			pe /*viewsService*/,
			$e /*markers*/,
			ye /*languageConfigurationRegistry*/,
			ue /*partialAcceptUtils*/,
			fe /*editsCache*/,
			me /*markerService*/,
			ve /*linterListener*/,
			ge /*dom*/,
			be /*map*/,
			Ce /*webConstants*/,
			Le /*suggestionsCache*/,
			Fe /*badCppHeuristics*/,
			Oe /*cppSuggestionsService*/,
			xe /*aiWatcherHelpers*/,
			He /*cppStreaming*/,
			Ke /*buffer*/,
			Je /*cursorCredsService*/,
			Te /*encodedTokenAttributes*/,
			Ee /*productService*/,
			Ie /*resources*/,
			Be /*aiAssertService*/,
			Se /*hash*/,
			ke /*environmentService*/,
			Ue /*findController*/,
			qe /*cppGhostTextUtils*/,
			Ae /*utils*/,
) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$9ed = e.$8ed = e.$7ed = void 0),
				(i = mt(i)),
				(R = xi(R)),
				(ge = mt(ge));
			const Me = 25,
				De = 60,
				Re = 1e6,
				je = !1,
				Ve = je ? console.log : () => {},
				Ze = je ? console.error : () => {};
			function et(di) {
				return di.uri.scheme === "untitled"
					? di.uri.scheme
					: di.getLanguageId();
			}
			class rt extends ee.$3X {
				static {
					this.ID = "editor.cpp.login";
				}
				static {
					this.LABEL = "Log In to Cursor";
				}
				constructor() {
					super({
						id: rt.ID,
						title: { value: rt.LABEL, original: rt.LABEL },
						f1: !0,
					});
				}
				async run(Ye) {
					Ye.get($.$x6b).login();
				}
			}
			(0, ee.$4X)(rt), (e.$7ed = "git30_000_bounded_auto");
			const ft = "cpp-suggestion-text-decoration-showing",
				bt = "cpp-suggestion-text-decoration-showing-streaming",
				nt = "cpp-suggestion-text-decoration-showing-gutter",
				lt = 10,
				ct = 10,
				gt = 1e3 * 60 * 15,
				ht = 1e5,
				Rt = 1e4,
				Nt = 10;
			e.$8ed = 20;
			const jt = 3,
				ti = 300,
				kt = !1,
				hi = "m4CoTMbqtR9vV1zd";
			let Kt = class extends t.$1c {
				cppServerClient() {
					return this.g.get();
				}
				get dontTriggerCppBecauseChangeIsFromCpp() {
					return q.$Acc.current;
				}
				set dontTriggerCppBecauseChangeIsFromCpp(Ye) {
					q.$Acc.current = Ye;
				}
				F(Ye) {
					return `${Ye.id}-${Ye.getVersionId()}-${Ye.uri.fsPath}`;
				}
				H(Ye) {
					return `${Ye.id}-${Ye.uri.fsPath}`;
				}
				aiClient() {
					return this.P.get();
				}
				registerDiffingProvider(Ye) {
					this.S = Ye;
				}
				constructor(
					Ye,
					ze,
					Xe,
					It,
					Lt,
					xt,
					Vt,
					Bt,
					Gt,
					Mt,
					Ut,
					ei,
					mi,
					ii,
					Dt,
					Jt,
					si,
					Zt,
					ci,
					ri,
					$i,
					Wt,
					tt,
					at,
					pi,
					Li,
					Di,
					Ui,
					Wi,
					Gi,
				) {
					super(),
						(this.hb = Ye),
						(this.ib = ze),
						(this.jb = Xe),
						(this.kb = It),
						(this.lb = Lt),
						(this.mb = xt),
						(this.nb = Vt),
						(this.ob = Bt),
						(this.pb = Gt),
						(this.qb = Mt),
						(this.rb = Ut),
						(this.sb = ei),
						(this.tb = mi),
						(this.ub = ii),
						(this.vb = Dt),
						(this.wb = Jt),
						(this.xb = si),
						(this.yb = Zt),
						(this.zb = ci),
						(this.Ab = ri),
						(this.Bb = $i),
						(this.Cb = Wt),
						(this.Db = tt),
						(this.Eb = at),
						(this.Fb = pi),
						(this.Gb = Li),
						(this.Hb = Di),
						(this.Ib = Ui),
						(this.Jb = Wi),
						(this.Kb = Gi),
						(this.h = 0),
						(this.pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING =
							!1),
						(this.j = new be.$Jc(20)),
						(this.m = new Map()),
						(this.n = new Map()),
						(this.q = void 0),
						(this.u = void 0),
						(this.w = void 0),
						(this.y = void 0),
						(this.z = void 0),
						(this.C = new be.$Jc(10)),
						(this.G = new be.$Jc(3)),
						(this.I = []),
						(this.J = []),
						(this.L = new fe.$Oed(2)),
						(this.M = new Le.$Ued(5)),
						(this.N = new Le.$Ved(5, 6)),
						(this.O = new be.$Jc(3)),
						(this.Q = new be.$Jc(10)),
						(this.editorThatWeHidGhostTextOn = void 0),
						(this.R = []),
						(this.holdDownAbortController = void 0),
						(this.S = void 0),
						(this.numberOfClearedSuggestionsSinceLastAccept = 0),
						(this.lastEditTime = void 0),
						(this.U = void 0),
						(this.W = this.D(new t.$2c())),
						(this.Y = { fire: !1, acceptedRange: void 0 }),
						(this.$ = {}),
						(this.ab = !1),
						(this.bb = !1),
						(this.cb = []),
						(this.db = void 0),
						(this.eb = void 0),
						(this.fb = void 0),
						(this.gb = !1),
						(this.Lb = new t.$Zc()),
						(this.Mb = document.createElement("div")),
						(this.handleKeyDownForCppKeys = (yi) => {
							if (this.Nb().cppEnabled === !0) {
								if (yi.key === "Tab" && yi.shiftKey) {
									if (this.Nb().cppManualTriggerWithOpToken) {
										const li = this.hb.getActiveCodeEditor();
										if (li === null) return;
										const wi = li.getModel()?.uri;
										if (!wi) return;
										this.fireCppSuggestionFromTrigger(
											wi,
											li,
											le.CppSource.ManualTrigger,
										);
									} else
										this.Cb.maybeUndoCursorPrediction({
											event: yi,
											triggerCppCallback:
												this.fireCppSuggestionFromTrigger.bind(this),
											getLinterErrors:
												this.getRecentAndNearLocationLinterErrors.bind(this),
										});
									return;
								}
								if (
									yi.key === "Tab" &&
									yi.shiftKey === !1 &&
									yi.ctrlKey === !1 &&
									yi.altKey === !1 &&
									yi.metaKey === !1 &&
									this.selectionIsNotMultipleLines()
								) {
									if (this.Nb().cppAutoImportEnabled) {
										const Ai = this.getFocusedCodeEditor();
										if (Ai !== null && this.Jb.maybeAcceptShownImport(Ai)) {
											yi.preventDefault(),
												yi.stopImmediatePropagation(),
												yi.stopPropagation();
											return;
										}
									}
									if (!this.shouldTabInsteadOfAccepting()) {
										const Ai = this.Ob().cppState?.suggestion;
										if (
											Ai !== void 0 &&
											!this.Cb.tabToLineBeforeAcceptingCpp(Ai.source)
										)
											(this.dontTriggerCppBecauseChangeIsFromCpp = !0),
												yi.preventDefault(),
												yi.stopImmediatePropagation(),
												yi.stopPropagation(),
												this.acceptFullSuggestion(
													this.holdDownAbortController,
												).then(() => {
													const li = this.getFocusedCodeEditor();
													li !== null &&
														this.cleanupAfterAcceptSuggestion(li, Ai);
												}),
												this.Zb();
										else if (
											(this.Ob().cppState?.additionalSuggestions?.length ?? 0) >
											0
										) {
											const li = this.hb.getActiveCodeEditor(),
												Vi = li?.getModel() ?? void 0,
												wi = li?.getPosition(),
												_t = this.Ob().cppState?.additionalSuggestions.filter(
													(ai) => {
														if (Vi === void 0 || wi === void 0 || wi === null)
															return !1;
														const Ft = Vi.getDecorationRange(ai.decorationId);
														return (
															Ft !== null &&
															Ft.intersectRanges({
																startLineNumber: Math.max(0, wi.lineNumber - 5),
																startColumn: wi.column,
																endLineNumber: Math.min(
																	Vi.getLineCount(),
																	wi.lineNumber + 5,
																),
																endColumn: wi.column,
															})
														);
													},
												);
											if (_t !== void 0 && _t.length > 0) {
												(this.dontTriggerCppBecauseChangeIsFromCpp = !0),
													yi.preventDefault(),
													yi.stopImmediatePropagation(),
													yi.stopPropagation();
												const ai = _t[0];
												this.acceptFullSuggestion(
													this.holdDownAbortController,
													ai,
												)
													.then(() => {
														const Ft = this.getFocusedCodeEditor();
														Ft !== null &&
															(this.cleanupAfterAcceptSuggestion(Ft, ai),
															this.Nb().cppAutoImportEnabled &&
																this.Jb.showCorrectUI(Ft));
													})
													.catch((Ft) => {
														console.error(Ft);
													}),
													this.Zb();
											} else
												this.Cb.maybeAcceptCursorPrediction({
													event: yi,
													triggerCppCallback:
														this.fireCppSuggestionFromTrigger.bind(this),
												});
										} else
											this.Cb.maybeAcceptCursorPrediction({
												event: yi,
												triggerCppCallback:
													this.fireCppSuggestionFromTrigger.bind(this),
											});
									}
									return;
								}
								if (
									yi.key === "Escape" &&
									yi.ctrlKey === !1 &&
									yi.altKey === !1 &&
									yi.metaKey === !1 &&
									this.Ob().cppState?.suggestion !== void 0
								) {
									const Ai = this.getFocusedCodeEditor();
									Ai !== null && this.markEditAsRejected(Ai, !1),
										this.clearDecorationsSlowEnumeratesAllDecorations(),
										this.rejectAndResetAllCppSuggestions(),
										this.Cb.maybeShowHintLineWidget(),
										this.Cb.updateHintLineWidgetMarginLeft(void 0),
										Ai !== null && this.Jb.showCorrectUI(Ai);
								} else if (
									yi.key === "Escape" &&
									yi.ctrlKey === !1 &&
									yi.altKey === !1 &&
									yi.metaKey === !1
								)
									if (this.Nb().cppAutoImportEnabled) {
										const Ai = this.getFocusedCodeEditor();
										Ai !== null && this.Jb.maybeRejectShownImport(Ai)
											? (yi.preventDefault(),
												yi.stopImmediatePropagation(),
												yi.stopPropagation())
											: this.Ob().cursorPrediction !== void 0 &&
												this.Cb.clearCursorPrediction();
									} else
										this.Ob().cursorPrediction !== void 0 &&
											this.Cb.clearCursorPrediction();
							}
						}),
						(this.editorIdToParameterHintsModel = new Map()),
						(this.initializedGraphs = []),
						(this.triggerCppOnLintErrorAbortControllers = new Map()),
						(this.Vb = 6),
						(this.latestGenerationUUID = void 0),
						(this.Wb = void 0),
						(this.Xb = (yi, Ai, li, Vi) => {
							const wi = yi.split(li);
							if (wi.length < ti * 2) return yi;
							let _t = Math.max(0, Ai - ti),
								ai = Math.min(wi.length, Ai + ti);
							const Ft = ti - Ai,
								Xt = Ai - (wi.length - ti);
							Ft > 0
								? (ai = Math.min(wi.length, ai + Ft))
								: Xt > 0 && (_t = Math.max(0, _t - Xt));
							const $t = this.O.get(Vi.uri),
								ut = 20;
							if ($t && $t.length > 0) {
								let Et = !1;
								for (const { decorationId: Tt, originalWidth: qt } of $t) {
									const At = Vi.getDecorationRange(Tt);
									if (!At) continue;
									const Yt =
											Math.abs(At.startLineNumber - _t) < ut &&
											(_t !== 0 || At.startLineNumber === 1),
										ni =
											Math.abs(At.endLineNumber - ai) < ut &&
											(ai !== wi.length || At.endLineNumber === wi.length);
									if (At && Yt && ni && Math.abs(ai - _t - qt) < ut) {
										(_t = At.startLineNumber),
											(ai = At.endLineNumber),
											(Et = !0);
										break;
									}
								}
								if (!Et) {
									const Tt = Vi.deltaDecorations(
										[],
										[
											{
												range: new g.$iL(_t, 1, ai, 1),
												options: { description: "cpp-truncation-cache" },
											},
										],
									)[0];
									$t.push({ decorationId: Tt, originalWidth: ai - _t });
									for (const qt of $t.slice(0, -jt))
										Vi.deltaDecorations([qt.decorationId], []);
									this.O.set(Vi.uri, $t.slice(-jt));
								}
							} else {
								const Et = Vi.deltaDecorations(
									[],
									[
										{
											range: new g.$iL(_t, 1, ai, 1),
											options: { description: "cpp-truncation-cache" },
										},
									],
								)[0];
								this.O.set(Vi.uri, [
									{ decorationId: Et, originalWidth: ai - _t },
								]);
							}
							for (let Et = 0; Et < _t; Et++) wi[Et] = "";
							for (let Et = ai; Et < wi.length; Et++) wi[Et] = "";
							return wi.join(li);
						}),
						(this.decIdsThatAreNotInReactiveStorage = { green: [] }),
						(this.didShowGreenHighlights = !1),
						(this.removedCppNoopGenerationUUIDS = []),
						(this.generationStartTimes = {}),
						(this.c = this.D(this.ib.createScoped(this))),
						(this.W.value = this.vb.addEntry(
							this.statusBarElementProps(),
							"Cursor Tab",
							ne.StatusbarAlignment.RIGHT,
							100,
						)),
						this.updateStatusBarElement(),
						(this.P = this.tb.createInstance(T.$q6b, { service: P.$q0 })),
						(this.g = this.tb.createInstance(T.$q6b, { service: u.$K0 })),
						this.Ob().cppState === void 0 &&
							this.ib.setNonPersistentStorage("cppState", {}),
						this.loadCopilotPlusPlusConfigFromGithubCopilot(),
						this.D(
							i.onDidRegisterWindow(() => {
								this.mainRegisterCppListenersToEditorIfCppEnabled();
							}),
						),
						this.updateShouldNotTryToGetThemToNoticeCpp(),
						this.c.onChangeEffect({
							deps: [() => this.Nb().cppEnabled],
							onChange: async () => {
								this.sendCppEnabledUpdateRequest(),
									this.updateShouldNotTryToGetThemToNoticeCpp(),
									this.abortAllCppRequests();
								const yi = performance.now();
								this.mainRegisterCppListenersToEditorIfCppEnabled(),
									this.rejectAndResetAllCppSuggestions(),
									this.loadCppConfigIncludingHandlingProAccess(),
									this.updateStatusBarElement();
								const Ai = performance.now();
								this.ub.distribution({
									stat: "cppclient.reload",
									value: Ai - yi,
								});
							},
						}),
						this.c.onChangeEffect({
							deps: [() => this.Nb().cppConfig],
							onChange: async () => {
								this.updateStatusBarElement();
							},
						}),
						this.ob.onDidChangeSubscription(() => {
							this.updateStatusBarElement(),
								this.loadCppConfigIncludingHandlingProAccess();
						}),
						this.D(
							this.Ab.onDidActiveEditorChange(() => {
								this.updateStatusBarElement();
							}),
						),
						this.ob.addLoginChangedListener(() => {
							this.updateStatusBarElement();
						}),
						this.ob.addSubscriptionChangedListener(() => {
							this.updateStatusBarElement(),
								this.loadCppConfigIncludingHandlingProAccess();
						}),
						this.Bb.onDidChangeConfiguration((yi) => {
							yi.affectsConfiguration(le.$tJ) && this.updateStatusBarElement();
						}),
						this.loadCppConfigIncludingHandlingProAccess(),
						this.mainRegisterCppListenersToEditorIfCppEnabled(),
						this.N.addListener((yi, Ai, li) => {
							if (
								this.getCurrentSuggestion() === void 0 &&
								!(
									this.Nb().cppAutoImportEnabled &&
									this.Jb.isShowingImportSuggestion()
								)
							) {
								this.Ub(yi),
									this.displayCppSuggestion(li, Ai, yi),
									this.N.removeSuggestion(yi);
								return;
							}
						});
					const { clientDebounceDuration: qi, totalDebounceDuration: Oi } =
						this.getNewDebounceDurations();
					(this.Z = new U.$r6b(qi, Oi, 1e3)),
						(this.gb = !this.Kb.isBuilt || this.Kb.isExtensionDevelopment),
						this.Jb.registerCppMethods({
							getPartialCppRequest: this.getPartialCppRequest.bind(this),
							getModelName: this.getModelName.bind(this),
							getCurrentSuggestion: this.getCurrentSuggestion.bind(this),
							getRecentAndNearLocationLinterErrors:
								this.getRecentAndNearLocationLinterErrors.bind(this),
							truncateCurrentFile: this.Xb.bind(this),
							getFocusedCodeEditor: this.getFocusedCodeEditor.bind(this),
							isTextFocusedOrSimilarlyFocused:
								this.isTextFocusedOrSimilarlyFocused.bind(this),
						});
				}
				uponFusedCursorPredictionReady(Ye, ze) {
					if (
						ze !== null &&
						this.usingFusedCursorPredictionModel() &&
						((this.eb = { id: Ye, fusedCursorPrediction: ze }),
						this.fb?.fusedCursorPredictionId === Ye)
					) {
						const Xe = this.getFocusedCodeEditor();
						if (Xe === null) return;
						const It = Xe.getModel();
						if (It === null || It.uri.toString() !== this.fb.uri.toString())
							return;
						this.displayFusedCursorPrediction({
							editor: Xe,
							model: It,
							fusedCursorPrediction: ze,
							oldText: this.fb.oldText,
							newText: this.fb.newText,
						});
					}
				}
				getLastAcceptedSuggestionDetails() {
					return this.u;
				}
				getNewDebounceDurations() {
					const Ye = this.ib.applicationUserPersistentStorage.cppConfig;
					if (Ye === void 0)
						return { clientDebounceDuration: Me, totalDebounceDuration: De };
					const ze = Ye.clientDebounceDurationMillis,
						Xe = Ye.globalDebounceDurationMillis;
					return { clientDebounceDuration: ze, totalDebounceDuration: Xe };
				}
				setSuggestionType(Ye, ze) {
					this.Q.set(Ye, ze);
				}
				async dispose() {
					const Ye = new t.$Zc();
					try {
						for (const [ze, Xe] of this.O.entries()) {
							const It = await this.jb.createModelReference(ze);
							Ye.add(It),
								It.object.textEditorModel.deltaDecorations(
									Xe.map((Lt) => Lt.decorationId),
									[],
								);
						}
					} finally {
						Ye.dispose();
					}
				}
				sendCppEnabledUpdateRequest() {
					this.Nb().cppEnabled
						? this.pb.publicLogCapture("cpp.cppUpdate.cppEnabled")
						: this.pb.publicLogCapture("cpp.cppUpdate.cppDisabled");
				}
				async keepCppModelStateUpdated() {
					const Ye = await (await this.g.get()).availableModels({});
					this.ib.setApplicationUserPersistentStorage(
						"cppModelsState",
						(ze) => ({
							cppModels: Ye.models,
							defaultModel: Ye.defaultModel ?? ze.defaultCppModel,
						}),
					);
				}
				async updateShouldNotTryToGetThemToNoticeCpp() {
					this.Nb().cppEnabled === !0 &&
						this.ib.setApplicationUserPersistentStorage(
							"shouldNotTryToGetThemToNoticeCpp",
							!0,
						);
					const Ye = this.ob.isAuthenticated();
					await this.kb.maybeRefreshFeatureStatus(
						"cppExistingUserMarketingPopup",
					),
						Ye &&
							this.Nb().shouldNotTryToGetThemToNoticeCpp !== !0 &&
							this.kb.getCachedFeatureStatus(
								"cppExistingUserMarketingPopup",
							) === !0 &&
							this.isAllowedCpp() &&
							(this.pb.publicLogCapture("cppMarketingPopup.shownPopup"),
							this.ib.setApplicationUserPersistentStorage(
								"shouldNotTryToGetThemToNoticeCpp",
								!0,
							),
							this.ib.setNonPersistentStorage(
								"cppPopupState",
								"cardState",
								"first",
							));
				}
				isAllowedCpp() {
					return (0, le.$uJ)(
						this.Nb().cppConfig,
						this.ob.isAuthenticated(),
						(0, le.$sJ)(this.ob.membershipType()),
					);
				}
				isCppEnabledForEditor(Ye) {
					let ze;
					if (Ye !== null) {
						const It = Ye.getModel();
						if (It == null) return !1;
						ze = { languageId: et(It), fsPath: this.nb.asRelativePath(It.uri) };
					}
					let Xe;
					try {
						Xe = this.Bb.getValue(le.$tJ);
					} catch {
						Xe = [];
					}
					return (0, le.$vJ)(this.Nb().cppEnabled, ze, Xe);
				}
				setCppDisabledForLanguage(Ye, ze) {
					const Xe = this.Bb.getValue(le.$tJ);
					Array.isArray(Xe)
						? this.Bb.updateValue(
								le.$tJ,
								ze === "enabled" ? Xe.filter((It) => It !== Ye) : [...Xe, Ye],
								Z.ConfigurationTarget.USER,
							)
						: this.Bb.updateValue(
								le.$tJ,
								ze === "enabled" ? [] : [Ye],
								Z.ConfigurationTarget.USER,
							);
				}
				isCppDisabledForLanguage(Ye) {
					try {
						const ze = this.Bb.getValue(le.$tJ);
						return (0, le.$wJ)(Ye, ze);
					} catch {
						return !1;
					}
				}
				getRedDecorationIds(Ye) {
					return this.$[Ye];
				}
				setRedDecorationIds(Ye, ze) {
					this.$[Ye] = ze(this.$[Ye] || []);
				}
				pauseCppTriggeringUntilUnpaused() {
					return (
						(this.pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING =
							!0),
						this.rejectAndResetAllCppSuggestions(),
						{
							dispose: () => {
								this.pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING =
									!1;
							},
						}
					);
				}
				filterLinterErrors(Ye, ze = S.MarkerSeverity.Error) {
					return Ye.filter((Xe) => Xe.severity >= ze).filter(
						(Xe) =>
							Xe.startLineNumber < ht &&
							Xe.endLineNumber < ht &&
							Xe.startColumn < Rt &&
							Xe.endColumn < Rt,
					);
				}
				loadCopilotPlusPlusConfigFromGithubCopilot() {
					if (this.Nb().cppHasLoadedConfigFromCopilot !== !0)
						try {
							const Ye = this.Bb.getValue("github.copilot.enable");
							if (Ye !== null && typeof Ye == "object") {
								const ze = Object.keys(Ye)
									.filter((Xe) => Ye[Xe] === !1)
									.filter((Xe) => Xe !== "*");
								ze.length > 0 &&
									this.Bb.updateValue(le.$tJ, ze, Z.ConfigurationTarget.USER);
							}
						} catch {
						} finally {
							this.ib.setApplicationUserPersistentStorage(
								"cppHasLoadedConfigFromCopilot",
								!0,
							);
						}
				}
				_createTooltip(Ye, ze) {
					const Xe = ge.$Ogb(),
						It = Ce.$ujb.get(Xe) ?? Xe.document.body,
						Lt = Xe.document.getElementById(
							"cpp-cursor-prediction-tooltip-hover-over-element-1234",
						);
					Lt && Lt.remove();
					const xt = document.createElement("div");
					(xt.id = "cpp-cursor-prediction-tooltip-hover-over-element-1234"),
						(xt.textContent = ze),
						(xt.style.position = "absolute"),
						(xt.style.backgroundColor = "var(--vscode-sideBar-background)"),
						(xt.style.color = "var(--vscode-sideBar-foreground)"),
						(xt.style.padding = "5px"),
						(xt.style.borderRadius = "5px"),
						(xt.style.display = "none"),
						(xt.style.zIndex = "1000"),
						(xt.style.width = "200px"),
						(xt.style.marginLeft = "4px"),
						(xt.style.fontSize = "10px"),
						It.appendChild(xt),
						Ye.addEventListener("mouseenter", () => {
							Xe.requestAnimationFrame(() => {
								(xt.style.display = "block"),
									(xt.style.transform = "translate(-9999px, -9999px)"),
									Xe.requestAnimationFrame(() => {
										const Vt = xt.getBoundingClientRect(),
											Bt = Ye.getBoundingClientRect();
										xt.style.transform = `translate(${Bt.left}px, ${Bt.top - Vt.height - 5}px)`;
										const Gt = Xe.setInterval(() => {
											Ye.matches(":hover") ||
												((xt.style.display = "none"), Xe.clearInterval(Gt));
										}, 1e3);
										setTimeout(() => Xe.clearInterval(Gt), 6e4);
									});
							});
						}),
						Ye.addEventListener("mouseleave", () => {
							xt.style.display = "none";
						});
				}
				_renderCppToggleCursorPrediction(Ye) {
					const ze = document.createElement("div");
					ze.classList.add("cpp-status-bar-hover-element");
					const Xe = document.createElement("div");
					(Xe.style.display = "flex"),
						(Xe.style.alignItems = "center"),
						(Xe.style.justifyContent = "center"),
						(Xe.style.gap = "2px");
					const It = document.createElement("span");
					(It.textContent = "Cursor Prediction"), Xe.appendChild(It);
					const Lt = document.createElement("i");
					(Lt.className = "codicon codicon-info"),
						(Lt.style.color = "var(--vscode-descriptionForeground)"),
						(Lt.style.display = "flex"),
						(Lt.style.alignItems = "center"),
						(Lt.style.justifyContent = "center"),
						(Lt.style.marginRight = "10px"),
						(Lt.style.marginBottom = "-0.1rem"),
						(Lt.style.cursor = "pointer"),
						Xe.appendChild(Lt),
						this._createTooltip(
							Lt,
							"Predicts the next line your cursor will move to. Triggers after Cursor Tab suggestions and can be accepted using tab.",
						),
						ze.appendChild(Xe);
					const xt = document.createElement("div"),
						Vt = document.createElement("select"),
						Bt = this.Cb.isCursorPredictionEnabled() ? "enabled" : "disabled";
					["enabled", "disabled"].forEach((Ut) => {
						const ei = document.createElement("option");
						(ei.value = Ut),
							(ei.textContent = Ut),
							(ei.selected = Ut === Bt),
							Vt.appendChild(ei);
					}),
						Vt.addEventListener("change", (Ut) => {
							const ei = Ut.target.value;
							this.ib.setApplicationUserPersistentStorage(
								"cursorPredictionEnabled",
								ei === "enabled",
							);
						}),
						(Vt.style.background = "none"),
						(Vt.style.outline = "none"),
						(Vt.style.border = "none"),
						(Vt.style.color = "inherit"),
						(Vt.style.fontSize = "inherit"),
						xt.appendChild(Vt);
					const Mt = document.createElement("span");
					return (
						(Mt.textContent = "\u25BC"),
						(Mt.style.marginLeft = "4px"),
						xt.appendChild(Mt),
						(xt.style.border =
							"1px solid var(--vscode-settings-checkboxBorder)"),
						(xt.style.borderRadius = "4px"),
						(xt.style.padding = "2px 4px"),
						(xt.style.marginLeft = "4px"),
						ze.appendChild(xt),
						ze
					);
				}
				_renderCppModelSelect(Ye) {
					const ze = document.createElement("div");
					ze.classList.add("cpp-status-bar-hover-element");
					const Xe = document.createElement("span");
					(Xe.textContent = "Model"),
						(Xe.style.marginRight = "10px"),
						ze.appendChild(Xe);
					const It = document.createElement("div"),
						Lt = document.createElement("select"),
						xt = this.ib.applicationUserPersistentStorage.cppModel || se.$RX;
					[
						se.$RX,
						...this.ib.applicationUserPersistentStorage.cppModelsState
							.cppModels,
					].forEach((Gt) => {
						const Mt = document.createElement("option");
						(Mt.value = Gt),
							(Mt.textContent = Gt),
							(Mt.selected = Gt === xt),
							Lt.appendChild(Mt);
					}),
						Lt.addEventListener("change", (Gt) => {
							const Mt = Gt.target.value;
							Mt === se.$RX
								? this.ib.setApplicationUserPersistentStorage(
										"cppModel",
										void 0,
									)
								: this.ib.setApplicationUserPersistentStorage("cppModel", Mt),
								this.loadCppConfigIncludingHandlingProAccess();
						}),
						(Lt.style.background = "none"),
						(Lt.style.outline = "none"),
						(Lt.style.border = "none"),
						(Lt.style.color = "inherit"),
						(Lt.style.fontSize = "inherit"),
						It.appendChild(Lt);
					const Bt = document.createElement("span");
					return (
						(Bt.textContent = "\u25BC"),
						(Bt.style.marginLeft = "4px"),
						It.appendChild(Bt),
						(It.style.border =
							"1px solid var(--vscode-settings-checkboxBorder)"),
						(It.style.borderRadius = "4px"),
						(It.style.padding = "2px 4px"),
						(It.style.marginLeft = "4px"),
						ze.appendChild(It),
						ze
					);
				}
				_renderStatusCheckBox(Ye, ze) {
					const Xe = document.createElement("div");
					Xe.classList.add("cpp-status-bar-hover-element");
					const It = ze
							? this.isCppDisabledForLanguage(ze)
							: !this.Nb().cppEnabled,
						Lt = ze ? `Disable for ${ze}` : "Disable globally",
						xt = new te.$8ib({
							isChecked: It,
							title: Lt,
							icon: It ? Q.$ak.check : void 0,
							...te.$6ib,
							hoverDelegate: { showHover: () => {}, delay: 0 },
						});
					xt.domNode.classList.add("cpp-status-bar-toggle-checkbox"),
						Ye.add(xt),
						Ye.add(
							xt.onChange(() => {
								const Bt = xt.checked;
								ze
									? this.setCppDisabledForLanguage(
											ze,
											Bt ? "disabled" : "enabled",
										)
									: this.ib.setApplicationUserPersistentStorage(
											"cppEnabled",
											!Bt,
										);
							}),
						);
					const Vt = document.createElement("span");
					return (
						(Vt.textContent = Lt),
						(Vt.style.marginRight = "6px"),
						Xe.appendChild(Vt),
						Xe.appendChild(xt.domNode),
						Xe
					);
				}
				statusBarElementProps() {
					for (
						this.ob.refreshAuthService(), this.Lb.clear();
						this.Mb.firstChild;
					)
						this.Mb.removeChild(this.Mb.firstChild);
					const Ye = (0, c.$btb)(this.Ab.activeTextEditorControl);
					Ye?.onDidChangeModelLanguage(
						this.updateStatusBarElement,
						this,
						this.Lb,
					);
					const ze = Ye?.getModel(),
						Xe = this.ob.isAuthenticated(),
						It = this.isAllowedCpp(),
						Lt = this.isCppEnabledForEditor(Ye);
					if (It) {
						if (
							(this.Mb.appendChild(this._renderStatusCheckBox(this.Lb)),
							ze != null)
						) {
							const xt = et(ze);
							this.Mb.appendChild(this._renderStatusCheckBox(this.Lb, xt));
						}
						this.Mb.appendChild(this._renderCppModelSelect(this.Lb)),
							this.Mb.appendChild(
								this._renderCppToggleCursorPrediction(this.Lb),
							);
					} else if (Xe) {
						const xt = document.createElement("div");
						xt.classList.add("cpp-status-bar-hover-element"),
							xt.appendChild(
								document.createTextNode("Requires pro (custom model). "),
							);
						const Vt = document.createElement("a");
						(Vt.href = "#"),
							(Vt.textContent = "Upgrade here."),
							(Vt.style.marginLeft = "4px"),
							(Vt.onclick = (Bt) => {
								Bt.preventDefault(), this.ob.pay();
							}),
							xt.appendChild(Vt),
							this.Mb.appendChild(xt);
					} else {
						const xt = document.createElement("div");
						xt.classList.add("cpp-status-bar-hover-element"),
							xt.appendChild(document.createTextNode("Please log in")),
							this.Mb.appendChild(xt);
					}
					return {
						name: "Cursor Tab",
						text: "Cursor Tab",
						ariaLabel: "Cursor Tab",
						cssClass:
							It && Lt
								? "copilot-plus-plus-status-on"
								: "copilot-plus-plus-status-off",
						tooltip: this.Mb,
						dontHideHoverOnClick: !0,
						command: It ? se.$MX : Xe ? "" : rt.ID,
					};
				}
				updateStatusBarElement() {
					this.updateShouldNotTryToGetThemToNoticeCpp(),
						this.W.value?.update(this.statusBarElementProps());
				}
				getMostRecentShownRequestId() {
					return this.z;
				}
				getMostRecentNonAbortedRequestId() {
					return this.w;
				}
				eventShouldKillPrevCpp(Ye) {
					return Ye.altKey === !0;
				}
				Nb() {
					return this.ib.applicationUserPersistentStorage;
				}
				Ob() {
					return this.ib.nonPersistentStorage;
				}
				reallowCopilotIfWePreviousHidCopilotSuggestions() {
					this.editorThatWeHidGhostTextOn !== void 0 &&
						(this.unhideCopilotSuggestion(this.editorThatWeHidGhostTextOn),
						y.$O1b
							.get(this.editorThatWeHidGhostTextOn)
							?.model.get()
							?.triggerExplicitly(),
						(this.editorThatWeHidGhostTextOn = void 0));
				}
				isInVimNonInsertMode() {
					const Ye = this.vb.getViewModel();
					for (const ze of [
						...Ye.getEntries(ne.StatusbarAlignment.LEFT),
						...Ye.getEntries(ne.StatusbarAlignment.RIGHT),
					])
						if (
							ze.id === "vscodevim.vim.primary" &&
							!["INSERT"].some((Xe) => ze.container.innerText.includes(Xe))
						)
							return !0;
					return !1;
				}
				selectionIsNotMultipleLines() {
					const Ye = this.hb.getActiveCodeEditor(),
						ze = Ye?.getSelection();
					return (
						Ye === null ||
						ze === null ||
						ze === void 0 ||
						ze.startLineNumber === ze.endLineNumber
					);
				}
				shouldTabInsteadOfAccepting() {
					if (this.isInVimNonInsertMode()) return !1;
					const Ye = this.hb.getActiveCodeEditor();
					if (!Ye || (this.bb && this.Cb.isShowingCursorPrediction(Ye)))
						return !1;
					const ze = Ye.getPosition(),
						Xe = Ye.getModel();
					if (!ze || !Xe) return !1;
					const It = Xe.getEOL();
					if (Xe.getLineContent(ze.lineNumber).trim() !== "") return !1;
					const Lt = this.Ob().cppState?.suggestion;
					if (Lt === void 0) return !1;
					const xt = Lt.decorationId,
						Vt = Ye.getModel()?.getDecorationRange(xt);
					if (Vt == null) return !1;
					const Bt = Xe.getValueInRange({
						startLineNumber: Vt.startLineNumber,
						startColumn: Vt.startColumn,
						endLineNumber: ze.lineNumber,
						endColumn: ze.column,
					});
					if (Bt === void 0) return !1;
					let Gt = Lt.replaceText;
					ze.lineNumber === Vt.endLineNumber &&
						Vt.endColumn === 1 &&
						(Gt = Gt + (Xe.getLineContent(ze.lineNumber) ?? "") + It);
					const Mt = Bt.split(It).length - 1,
						Ut = Bt.split(It).at(-1)?.length;
					if (Ut === void 0) return !1;
					let ei = Gt.split(It)[Mt];
					return ei === void 0 ||
						ei.slice(0, Ut).trim() !== "" ||
						((ei = ei.slice(Ut)), ei === void 0)
						? !1
						: ei.trimStart() !== ei;
				}
				async acceptNextWord() {
					if (this.Bb.getValue(se.$zW) !== !0) return !1;
					const ze = this.Ob().cppState?.suggestion;
					if (ze !== void 0) {
						this.dontTriggerCppBecauseChangeIsFromCpp = !0;
						const Xe = await this.acceptNextWordSuggestion(
							this.holdDownAbortController,
						);
						if (Xe.type === J.AcceptResult.AcceptedWord) {
							const It = this.hb.getActiveCodeEditor();
							return (
								It !== null && this.cleanupAfterNextWordSuggestion(It, Xe.edit),
								!0
							);
						} else if (Xe.type === J.AcceptResult.AcceptedAll) {
							const It = this.hb.getActiveCodeEditor();
							return (
								It !== null && this.cleanupAfterAcceptSuggestion(It, ze), !0
							);
						}
					}
					return !1;
				}
				eventIsAccept(Ye) {
					return Ye.key === "Enter";
				}
				eventIsTriggered(Ye) {
					const ze = this.triggerKey();
					return ze.kind === "code" ? Ye.code === ze.code : Ye.key === ze.key;
				}
				triggerKey() {
					const Ye = this.Nb().cppTriggerKey ?? l.$3Cc;
					return Ye.includes("Left") || Ye.includes("Right")
						? { kind: "code", code: Ye }
						: { kind: "key", key: Ye };
				}
				markEditAsRejected(Ye, ze) {
					const Xe = this.Nb().cppConfig;
					if (
						Xe === void 0 ||
						Xe.heuristics.includes(
							f.CppConfigResponse_Heuristic.SUGGESTING_RECENTLY_REJECTED_EDIT,
						) === !1 ||
						Xe.recentlyRejectedEditThresholds === void 0
					)
						return;
					const It = Ye.getModel();
					if (It === null) return;
					const Lt = this.Ob().cppState?.suggestion;
					if (Lt === void 0) return;
					const xt = Lt.uri,
						Vt = this.nb.asRelativePath(xt);
					let { isNoOp: Bt } = (0, Ae.$Qed)(
						It,
						Lt.startingSuggestionRange,
						Lt.replaceText,
						It.getEOL(),
					);
					if (Bt) return;
					const Gt = (0, Ae.$Red)(
						It,
						Lt.startingSuggestionRange,
						Lt.replaceText,
						It.getEOL(),
						null,
					);
					for (const Mt of Gt)
						this.Eb.onlyLocalProvider?.runCommand(
							le.EditHistoryActions.RecordRejectedEdit,
							{ relativePath: Vt, modelValue: Mt, onlySoftRejected: ze },
						);
				}
				mainRegisterCppListenersToEditorIfCppEnabled() {
					this.clearEditorListeners(),
						this.Nb().cppEnabled === !0
							? this.registerAllCppListeners()
							: this.reallowCopilotIfWePreviousHidCopilotSuggestions();
				}
				clearEditorListeners() {
					this.n.forEach((Ye) => Ye.forEach((ze) => ze.dispose())),
						this.n.clear();
				}
				async registerAllCppListeners() {
					let Ye = 0;
					for (
						;
						(await this.Eb.onlyLocalProvider?.runCommand(
							le.EditHistoryActions.Ack,
							null,
						)) !== !0 && Ye < 1e3;
					)
						await new Promise((Xe) => setTimeout(Xe, 100));
					for (let Xe of this.hb.listCodeEditors())
						this.registerEditorListenersToEditor(Xe);
					this.n.set("global", [
						this.D(
							this.hb.onCodeEditorAdd((Xe) => {
								this.registerEditorListenersToEditor(Xe);
							}),
						),
					]),
						this.D(
							this.Ab.onDidActiveEditorChange(() => {
								Ve("onDidActiveEditorChange:");
								const Xe = this.hb.getActiveCodeEditor();
								if (Xe === null) {
									Ve("onDidActiveEditorChange: editor is null");
									return;
								}
								if (Xe.getModel() === null) {
									Ve("onDidActiveEditorChange: model is null");
									return;
								}
								if (this.Qb() || this.Rb()) {
									Ve(
										`onDidActiveEditorChange: Suppressing suggestion because ${this.Qb()} or ${this.Rb()}`,
									);
									return;
								}
								Ve("onDidActiveEditorChange: Triggering suggestion"),
									this.fireCppSuggestionDebounced(
										Xe,
										le.CppSource.EditorChange,
									);
							}),
						);
					const ze = i.getWindows();
					this.n.set("window", [
						this.D({
							dispose: () => {
								for (const Xe of ze)
									Xe.window.document.removeEventListener(
										"keydown",
										this.handleKeyDownForCppKeys,
									);
							},
						}),
					]);
					for (const Xe of ze)
						Xe.window.document.addEventListener(
							"keydown",
							this.handleKeyDownForCppKeys,
						);
				}
				async registerEditorListenersToEditor(Ye) {
					const ze = Ye.getId();
					this.n.set(ze, [
						Ye.onDidDispose(() => {
							this.n.get(ze)?.forEach((Xe) => Xe.dispose()), this.n.delete(ze);
						}),
					]);
					try {
						this.n.has(ze) || this.n.set(ze, []),
							this.n.get(ze).push(
								this.D(
									Ye.onDidBlurEditorText(() => {
										Ve("[Cpp] onDidBlurEditorText: resetting suggestions"),
											this.rejectAndResetAllCppSuggestions();
									}),
								),
							);
						const Xe = this.D(new W.$7jc(Ye, this.yb.signatureHelpProvider));
						this.editorIdToParameterHintsModel.set(ze, Xe),
							this.n.get(ze).push(Xe),
							Xe !== void 0 &&
								this.n.get(ze).push(
									this.D(
										Xe.onChangedHints((Lt) => {
											const xt = this.xb.getRelevantType(Ye);
											this.xb.onChangedHints(Ye, Lt),
												xt.length === 0 &&
													Lt !== void 0 &&
													this.fireCppSuggestionDebounced(
														Ye,
														le.CppSource.ParameterHints,
													);
										}),
									),
								);
						const It = Ye.getModel();
						It !== null &&
							(await this.registerModelListenerToEditorModel(Ye, It)),
							this.n.has(ze) || this.n.set(ze, []),
							this.n.get(ze).push(
								this.D(
									Ye.onDidChangeModel(() => {
										const Lt = Ye.getModel();
										Lt !== null &&
											this.registerModelListenerToEditorModel(Ye, Lt);
									}),
								),
							),
							this.n.has(ze) || this.n.set(ze, []),
							this.n.get(ze).push(
								this.D(
									Ye.onDidChangeCursorPosition((Lt) => {
										if (
											(Ve("[Cpp] onDidChangeCursorPosition"),
											this.hb.getActiveCodeEditor() !== Ye &&
												!this.isReferenceFocused(Ye) &&
												!this.isFindFocused(Ye))
										) {
											Ve(
												"[Cpp] onDidChangeCursorPosition: Suppressing trigger because editor is not active",
											);
											return;
										}
										if (
											((this.ab = Lt.source === se.$QX),
											Lt.source === se.$QX && this.Pb(Ye, Lt.position),
											Lt.source === "cpp-peek" ||
												Lt.source === "cpp-next-suggestion" ||
												Lt.source === "cpp-revert" ||
												Lt.source === se.$QX)
										) {
											Ve(
												`[Cpp] onDidChangeCursorPosition: suppress b/c source is ${Lt.source}`,
											);
											return;
										} else if (
											Lt.reason === N.CursorChangeReason.RecoverFromMarkers &&
											Lt.source === "modelChange"
										) {
											Ve(
												`[Cpp] onDidChangeCursorPosition: suppress b/c reason is ${Lt.reason} and source is ${Lt.source}`,
											);
											return;
										}
										(this.bb = !1),
											this.usingFusedCursorPredictionModel() &&
												((this.fb = void 0),
												(this.db = void 0),
												this.Cb.clearCursorPrediction());
										const xt = Ye.getModel()?.uri;
										if (
											xt === void 0 ||
											(this.updateRecentDiagnostics(xt, Lt.position),
											this.holdDownAbortController?.abort(),
											(this.holdDownAbortController = void 0),
											Lt.source === "restoreState")
										)
											return;
										let Gt = this.sb
											.read({ resource: xt })
											.filter(
												(Mt) =>
													[
														S.MarkerSeverity.Error,
														S.MarkerSeverity.Warning,
													].includes(Mt.severity) &&
													Math.abs(
														Mt.startLineNumber - Lt.position.lineNumber,
													) <= e.$8ed,
											)
											.filter(
												(Mt) =>
													Mt.severity === S.MarkerSeverity.Error &&
													Math.abs(
														Mt.startLineNumber - Lt.position.lineNumber,
													) <= 1,
											);
										if (this.Nb().cppEnabled === !0) {
											const Mt = Ye.getSelection();
											if (Mt === null) {
												Ve(
													"[Cpp] onDidChangeCursorPosition: selection is null",
												);
												return;
											}
											const Ut = this.getCurrentSuggestion();
											let ei = !1;
											const mi = Ye.getModel();
											if (mi === null) return;
											if (Ut === void 0)
												this.didShowGreenHighlights
													? ((this.didShowGreenHighlights = !1),
														this.clearDecorationsSlowEnumeratesAllDecorations())
													: this.clearDecorationsFast();
											else {
												const si = {
													range: mi.getDecorationRange(Ut.decorationId),
													id: Ut.decorationId,
												};
												if (si === void 0 || si.range === null) return;
												const Zt = {
													...si.range,
													endColumn: 1e4,
													startLineNumber:
														Ut.startingSuggestionRange.startLineNumber,
													startColumn: Ut.startingSuggestionRange.startColumn,
												};
												(ei = !!(si.range !== null && Mt.intersectRanges(Zt))),
													ei ||
														(this.markEditAsRejected(Ye, !1),
														this.rejectAndResetAllCppSuggestions(),
														this.Cb.maybeShowHintLineWidget());
											}
											if (
												!this.R.find(
													(Jt) =>
														Jt.modelId === mi.id &&
														Jt.modelVersion === mi.getVersionId() &&
														Jt.position !== void 0 &&
														Jt.position.equals(Lt.position),
												) &&
												!ei
											)
												if (this.Nb().cppFireOnEveryCursorChange === !0)
													this.fireCppSuggestionDebounced(
														Ye,
														le.CppSource.LineChange,
													);
												else if (
													(Gt.length > 0 || kt) &&
													this.q !== Lt.position.lineNumber
												)
													this.fireCppSuggestionDebounced(
														Ye,
														le.CppSource.LinterErrors,
													);
												else {
													const Jt = this.q === Lt.position.lineNumber,
														si = this.Qb(),
														Zt = this.Rb();
													!Jt && !si && !Zt
														? this.fireCppSuggestionDebounced(
																Ye,
																le.CppSource.LineChange,
															)
														: Ve(
																"[Cpp] Suppressed Trigger. Conditions (all should be false to trigger):",
																JSON.stringify({
																	linesAreTheSame: Jt,
																	hasRejectedTooManySuggestions: si,
																	isUserReadingCode: Zt,
																}),
															);
												}
											else
												Ve(
													"[Cpp] onDidChangeCursorPosition: suppress b/c shouldTrigger is false",
												);
											this.q = Lt.position.lineNumber;
										}
										this.Nb().cppAutoImportEnabled &&
											this.showNearLocationLintErrorsToImportPredictionService({
												editor: Ye,
												uri: xt,
												isFromCursorMovement: !0,
												source: "onDidChangeCursorPosition",
											});
									}),
								),
							),
							this.Sb(Ye);
					} catch (Xe) {
						console.error("Cpp: error", Xe);
					}
				}
				Pb(Ye, ze) {
					const Xe = Ye.getModel()?.uri,
						It = Ye.getModel()?.getVersionId();
					Xe !== void 0 &&
						It !== void 0 &&
						(this.cb = [
							...this.cb,
							{ uri: Xe, modelVersion: It, position: ze },
						]);
				}
				Qb() {
					return this.numberOfClearedSuggestionsSinceLastAccept > 5;
				}
				Rb() {
					return (
						this.lastEditTime === void 0 ||
						Date.now() - this.lastEditTime >= 6e4
					);
				}
				Sb(Ye) {
					const ze = Ye.getId(),
						Xe = this.Nb().cppConfig?.excludeRecentlyViewedFilesPatterns ?? [];
					this.n.has(ze) || this.n.set(ze, []),
						this.n.get(ze).push(
							this.D(
								Ye.onDidFocusEditorText(() => {
									const It = Ye.getModel();
									if (It == null) return;
									const Lt = this.nb.asRelativePath(It.uri),
										xt = [
											M.Schemas.file,
											M.Schemas.inMemory,
											M.Schemas.vscodeNotebookCell,
											M.Schemas.vscodeFileResource,
											M.Schemas.vscodeRemote,
											M.Schemas.vscodeRemoteResource,
											M.Schemas.vscodeManagedRemoteResource,
										];
									if (
										!(0, c.$0sb)(Ye) ||
										Xe.some((Gt) => Lt.includes(Gt)) ||
										!xt.some((Gt) => (0, M.$Vg)(It.uri, Gt))
									)
										return;
									const Vt = Ye.getVisibleRanges(),
										Bt = It.uri;
									this.j.set(Bt, {
										visibleRanges: Vt,
										lastViewedAt: Date.now(),
									}),
										this.Nb().cppAutoImportEnabled &&
											this.showNearLocationLintErrorsToImportPredictionService({
												editor: Ye,
												uri: Bt,
												isFromCursorMovement: !1,
												source: "onDidFocusEditorText",
											});
								}),
							),
						),
						this.n.has(ze) || this.n.set(ze, []),
						this.n.get(ze).push(
							this.D(
								Ye.onDidScrollChange(() => {
									const It = Ye.getModel(),
										Lt = It?.uri;
									if (It == null || Lt == null) return;
									const xt = this.nb.asRelativePath(Lt),
										Vt = [
											M.Schemas.file,
											M.Schemas.inMemory,
											M.Schemas.vscodeNotebookCell,
											M.Schemas.vscodeFileResource,
											M.Schemas.vscodeRemote,
											M.Schemas.vscodeRemoteResource,
											M.Schemas.vscodeManagedRemoteResource,
										];
									!(0, c.$0sb)(Ye) ||
										Xe.some((Bt) => xt.includes(Bt)) ||
										!Vt.some((Bt) => (0, M.$Vg)(Lt, Bt)) ||
										this.j.set(Lt, {
											visibleRanges: Ye.getVisibleRanges(),
											lastViewedAt: Date.now(),
										});
								}),
							),
						);
				}
				async fireOnCacheMiss(Ye, ze, Xe, It, Lt) {
					ze !== null
						? await this.fireCppSuggestionDebouncedDiffHistory(
								Ye,
								ze,
								le.CppSource.Typing,
								It,
							)
						: await this.formatDiffHistory(Ye, ze, Xe, It);
				}
				async triggerCppIfLintErrorComesUp(Ye, ze, Xe, It, Lt, xt) {
					const Vt = this.nb.asRelativePath(Xe?.uri ?? C.URI.file("")),
						Bt = new AbortController();
					this.triggerCppOnLintErrorAbortControllers.set(Vt, Bt);
					let Gt = !1;
					Bt.signal.addEventListener("abort", () => {
						Gt = !0;
					});
					let Mt = !1;
					for (let Ut = 0; Ut < Lt / 50; Ut++) {
						if ((await new Promise((Dt) => setTimeout(Dt, 50)), Gt)) return;
						const ei = this.sb.read({ resource: Xe.uri }),
							mi = ze.getPosition();
						if (mi === null) return;
						if (
							ei.filter(
								(Dt) =>
									Dt.severity === S.MarkerSeverity.Error &&
									Math.abs(Dt.startLineNumber - mi.lineNumber) <= 1,
							).length > 0
						) {
							(Mt = !0),
								this.continueModelChangeListener(
									Ye,
									ze,
									Xe,
									It,
									{ removeGreens: !1 },
									xt,
								);
							break;
						}
					}
				}
				async continueModelChangeListener(
					Ye,
					ze,
					Xe,
					It,
					Lt = { removeGreens: !0 },
					xt,
				) {
					if (this.Ob().cppState?.shouldNotTrigger === !0) {
						Ve("[Cpp] continueModelChangeListener - shouldNotTrigger is true");
						return;
					}
					if (Xe.getValueLength() > 100 * 1e4 || Xe.getLineCount() > 2e4)
						return;
					const Vt = async () => {
							await this.formatDiffHistory(Ye, ze, Xe, It),
								z.$Jlc.get(ze)?.update();
						},
						Bt = () => {
							const Ut = this.getCurrentSuggestion();
							if (Ut === void 0) return;
							const ei = Xe.getDecorationRange(Ut.decorationId);
							if (ei === null) return;
							const mi = Xe.getDecorationOptions(Ut.decorationId);
							if (
								mi === null ||
								ei.startLineNumber <= (ze.getPosition()?.lineNumber ?? 0)
							)
								return;
							const ii = { ...ei, startLineNumber: ei.startLineNumber - 1 };
							Xe.changeDecorations((Dt) => {
								Dt.removeDecoration(Ut.decorationId);
								const Jt = Dt.addDecoration(ii, mi);
								this.updateSuggestionState({ decorationId: Jt });
							});
						};
					if (this.isOnShortestEditPath({ event: Ye, model: Xe }, xt))
						return (0, F.$Jed)(Ye.changes) && Bt(), Vt();
					const Mt = this.Tb(Ye) || this.Nb().cppCachedTypeaheadEnabled !== !0;
					if (
						(this.markEditAsRejected(ze, !0),
						this.rejectAndResetAllCppSuggestions({
							removeGreens: !1,
							abortAll: Mt,
						}),
						(!this.Nb().cppAutoImportEnabled ||
							!this.Jb.isShowingImportSuggestion()) &&
							this.allowCppTriggerInComments(ze))
					) {
						const Ut = this.N.popCacheHit(Xe);
						if (Ut !== void 0)
							return this.Ub(Ut), this.displayCppSuggestion(ze, Xe, Ut), Vt();
					}
					await this.fireOnCacheMiss(Ye, ze, Xe, It, Lt);
				}
				Tb(Ye) {
					return Ye.changes.some(
						(ze) =>
							ze.text.includes(`
`) || ze.rangeLength > 0,
					);
				}
				Ub(Ye) {
					const ze =
							performance.now() +
							performance.timeOrigin -
							Ye.suggestionTriggerTime,
						Xe = performance.now() - (this.X ?? 0);
					console.info("[CPP TIMING]", `Time Since Start: ${ze}`),
						console.info("[CPP TIMING]", `Time Since Trigger: ${Xe}`),
						this.ub.distribution({
							stat: "cppclient.time_since_start",
							value: ze,
						}),
						this.ub.distribution({
							stat: "cppclient.time_since_trigger",
							value: Xe,
						});
				}
				onCommentLine(Ye, ze) {
					const Xe = Ye.getPosition();
					if (Xe === null) return;
					const It = Xe.lineNumber;
					return ze.getLineContent(It).trim().startsWith("//");
				}
				getPreviousModelValue(Ye) {
					const ze = this.H(Ye);
					return this.G.get(ze);
				}
				async registerModelListenerToEditorModel(Ye, ze) {
					const Xe = this.nb.asRelativePath(ze?.uri ?? C.URI.file(""));
					if (
						(await this.Eb.onlyLocalProvider?.runCommand(
							le.EditHistoryActions.GetModelValue,
							{ relativePath: Xe },
						)) === void 0
					) {
						let It;
						if (ze.uri.scheme === "vscode-notebook-cell") {
							const Lt = ze.getEOL(),
								xt = this.getNotebookCellInfo(ze, Ye, Lt);
							xt !== null && (It = xt.cellValues.join(Lt));
						} else It = ze.getValue();
						It !== void 0 &&
							(await this.Eb.onlyLocalProvider?.runCommand(
								le.EditHistoryActions.InitModel,
								{
									relativePath: Xe,
									currentModelValue: It,
									modelVersion: ze.getVersionId(),
								},
							));
					}
					if (
						ze &&
						(ze.uri.scheme === "vscode-notebook-cell" ||
							ze.uri.scheme === "file" ||
							ze.uri.scheme === "vscode-remote" ||
							ze.uri.scheme === "untitled")
					) {
						this.m.forEach((Vt) => {
							Vt.has(Ye.getId()) &&
								(Vt.get(Ye.getId())?.forEach((Bt) => Bt.dispose()),
								Vt.delete(Ye.getId()));
						});
						const It = [
							this.D(
								ze.onDidChangeContent(async (Vt) => {
									Ve(
										`[Cpp] onDidChangeModelContent for fspath ${ze.uri.fsPath}`,
									),
										(this.X = performance.now());
									const Bt = ze.getEOL();
									if (
										((this.lastEditTime = Date.now()),
										this.m.has(Xe) &&
											this.m.get(Xe).size > 1 &&
											Ye.getId() !== this.hb.getActiveCodeEditor()?.getId())
									) {
										Ve(
											"[Cpp] onDidChangeModelContent: Suppressing trigger because editor is not active",
										);
										return;
									}
									if (
										((this.cb = []),
										this.N.addEditAndUpdateCachedSuggestions(Vt, ze),
										this.triggerCppOnLintErrorAbortControllers.get(Xe)?.abort(),
										this.Nb().cppEnabled !== !1)
									) {
										if (
											this.Nb().cppAutoImportEnabled &&
											(this.Jb.markFileAsUpdated(ze.uri),
											Vt.changes.length === 1 &&
												Vt.changes[0].text.length > 20 &&
												Vt.changes[0].text.length < 5e3)
										) {
											const Gt = Vt.changes[0],
												Mt = Gt.text.split(`
`),
												Ut = {
													startLineNumber: Gt.range.startLineNumber,
													startColumn: Gt.range.startColumn,
													endLineNumber: Gt.range.endLineNumber + Mt.length - 1,
													endColumn:
														Mt.length === 1
															? Gt.range.endColumn + Mt[0].length
															: Mt[Mt.length - 1].length,
												};
											this.Jb.handleNewGreens(ze, [Ut]),
												this.showNearLocationLintErrorsToImportPredictionService(
													{
														editor: Ye,
														uri: ze.uri,
														isFromCursorMovement: !1,
														source: "onDidChangeContent",
													},
												);
										}
										if (
											(z.$Jlc.get(Ye)?.setChangesSinceLastUpdate(!0),
											this.dontTriggerCppBecauseChangeIsFromCpp === !0 ||
												this
													.pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING ===
													!0)
										) {
											const Gt = this.getPreviousModelValue(ze);
											if (
												(await this.formatDiffHistory(Vt, Ye, ze, Bt),
												(this.dontTriggerCppBecauseChangeIsFromCpp = !1),
												this
													.pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING ===
													!0 || this.getCurrentSuggestion() !== void 0)
											)
												return;
											this.triggerCppIfLintErrorComesUp(
												Vt,
												Ye,
												ze,
												Bt,
												2e3,
												Gt,
											);
											return;
										}
										this.isAllowedCpp() &&
											this.isCppEnabledForEditor(Ye) &&
											this.disableAndHideCopilotSuggestion(Ye),
											this.continueModelChangeListener(Vt, Ye, ze, Bt);
									}
								}),
							),
						];
						this.m.has(Xe) || this.m.set(Xe, new Map());
						const Lt = this.m.get(Xe),
							xt = Ye.getId();
						Lt?.has(xt) || Lt?.set(xt, []),
							Lt?.get(xt)?.push(...It),
							this.Nb().cppAutoImportEnabled &&
								Lt?.get(xt)?.push(
									this.D(
										this.sb.onMarkerChanged(async (Vt) => {
											this.hb.getActiveCodeEditor()?.getId() === Ye.getId() &&
												Vt.some((Bt) => Bt.toString() === ze.uri.toString()) &&
												this.showNearLocationLintErrorsToImportPredictionService(
													{
														editor: Ye,
														uri: ze.uri,
														isFromCursorMovement: !1,
														source: "onMarkerChanged",
													},
												);
										}),
									),
								);
					}
				}
				fireCppSuggestionDebounced(Ye, ze) {
					if (!Ye) return;
					const Xe = Ye.getModel(),
						It = Xe?.uri;
					if (!It) return;
					const { requestIdsToCancel: Lt, ...xt } = this.Z.runRequest();
					this.R.forEach((Bt) => {
						Lt.includes(Bt.generationUUID) && Bt.abortController.abort();
					});
					const Vt = Ye.getSelection();
					if (
						Vt !== null &&
						!this.isFindFocused(Ye) &&
						(Vt.startLineNumber !== Vt.endLineNumber ||
							Vt.startColumn !== Vt.endColumn)
					) {
						Ve(
							`[Cpp] fireCppSuggestionDebounced: suppress b/c selection isFindFocused:${this.isFindFocused(Ye)} ${JSON.stringify(Vt)}`,
						);
						return;
					}
					this.fireCppSuggestionFromTrigger(It, Ye, ze, void 0, {
						...xt,
						modelVersion: Xe.getVersionId(),
						modelId: Xe.id,
						position: Ye.getPosition() ?? void 0,
					});
				}
				async fireCppSuggestionDebouncedDiffHistory(Ye, ze, Xe, It) {
					if (!ze) return;
					const Lt = ze.getModel(),
						xt = Lt?.uri;
					if (!xt) return;
					const Vt = ze.getSelection();
					if (
						Vt !== null &&
						(Vt.startLineNumber !== Vt.endLineNumber ||
							Vt.startColumn !== Vt.endColumn)
					)
						return;
					const { requestIdsToCancel: Bt, ...Gt } = this.Z.runRequest();
					this.R.forEach((Mt) => {
						Bt.includes(Mt.generationUUID) && Mt.abortController.abort();
					}),
						await this.formatDiffHistory(Ye, ze, Lt, It),
						this.getCurrentSuggestion() === void 0 &&
							this.fireCppSuggestionFromTrigger(xt, ze, Xe, void 0, {
								...Gt,
								modelVersion: Lt.getVersionId(),
								modelId: Lt.id,
								position: ze.getPosition() ?? void 0,
							});
				}
				async fireCppSuggestionFromTrigger(Ye, ze, Xe, It, Lt) {
					if (!this.isCppEnabled(ze)) {
						this.reallowCopilotIfWePreviousHidCopilotSuggestions();
						return;
					}
					const xt = ze.getModel();
					if (xt === null) return;
					if (
						this.getCurrentSuggestion() !== void 0 &&
						Xe !== le.CppSource.LinterErrors &&
						Xe !== le.CppSource.CursorPrediction
					) {
						z.$Jlc.get(ze)?.update();
						return;
					}
					let Vt;
					try {
						if (
							(Xe !== le.CppSource.CursorPrediction &&
								this.Nb().cppCachedTypeaheadEnabled !== !0 &&
								(this.R.forEach((ii) => {
									ii.source !== le.CppSource.CursorPrediction &&
										ii.abortController.abort();
								}),
								(this.R = this.R.filter(
									(ii) => ii.source === le.CppSource.CursorPrediction,
								))),
							this.gb && this.R.length > this.Vb)
						) {
							const ii = performance.now() + performance.timeOrigin;
							Ve(
								`[Cpp] stream debug info: Too many streams (${this.R.length}) streams (now: ${ii})`,
								JSON.stringify(
									this.R.map((Dt) => ({
										uuid: Dt.generationUUID,
										source: Dt.source,
										startTime: Dt.startTime,
									})),
								),
							);
						}
						for (
							this.mb.assert(
								this.R.length <= this.Vb,
								`The size of cppService this.streams is too big! ${this.R.length}`,
							);
							this.R.length >= this.Vb;
						)
							this.R.shift()?.abortController.abort();
						let Bt, Gt, Mt, Ut, ei;
						Lt !== void 0
							? ((Bt = Lt.abortController),
								(Vt = Lt.generationUUID),
								(Gt = Lt.startTime),
								(Mt = Lt.modelVersion),
								(Ut = Lt.modelId),
								(ei = Lt.position),
								this.R.push({ ...Lt, source: Xe }))
							: ((Vt = (0, o.$9g)()),
								(Bt = new AbortController()),
								(Gt = performance.now() + performance.timeOrigin),
								(Mt = xt.getVersionId()),
								(Ut = xt.id),
								(ei = ze.getPosition() ?? void 0),
								this.R.push({
									startTime: Gt,
									generationUUID: Vt,
									abortController: Bt,
									source: Xe,
									modelVersion: Mt,
									modelId: Ut,
									position: ei,
								})),
							(this.latestGenerationUUID = Vt);
						let mi = !1;
						if (
							(Bt.signal.addEventListener("abort", () => {
								(mi = !0),
									(this.R = this.R.filter((ii) => ii.generationUUID !== Vt));
							}),
							mi)
						)
							return;
						await this.immediatelyFireCppFromTrigger(Ye, ze, Bt, Vt, Gt, Xe, {
							overridePosition: It,
						});
					} catch (Bt) {
						console.error("Cpp: error", Bt, Bt?.stack),
							(this.R = this.R.filter((Gt) => Gt.generationUUID !== Vt));
					}
				}
				isCppEnabled(Ye) {
					return this.isAllowedCpp() && this.isCppEnabledForEditor(Ye);
				}
				allowCppTriggerInComments(Ye, ze) {
					if (
						this.ib.applicationUserPersistentStorage.cppTriggerInComments === !1
					) {
						const Xe = Ye.getModel();
						if (Xe === null) return !0;
						const It = Xe.getValue(),
							Lt = ze ?? Ye.getPosition();
						if (Lt === null || It === void 0)
							return (
								Ve("[Cpp] Bad Case: position or modelValue is undefined"), !0
							);
						if (Xe.getLineContent(Lt.lineNumber).trim() === "") {
							let Vt = Lt.lineNumber - 1,
								Bt = Lt.lineNumber + 1;
							for (; Vt > 0 && Xe.getLineContent(Vt).trim() === ""; ) Vt--;
							for (
								;
								Bt <= Xe.getLineCount() && Xe.getLineContent(Bt).trim() === "";
							)
								Bt++;
							const Gt =
									Vt > 0
										? Xe.getTokenTypeAtPosition_DANGEROUS_BECAUSE_COSTS_1_MS(
												new I.$hL(Vt, Xe.getLineMaxColumn(Vt)),
											)
										: null,
								Mt =
									Bt <= Xe.getLineCount()
										? Xe.getTokenTypeAtPosition_DANGEROUS_BECAUSE_COSTS_1_MS(
												new I.$hL(Bt, 1),
											)
										: null;
							if (
								Gt === Te.StandardTokenType.Comment &&
								Mt === Te.StandardTokenType.Comment
							)
								return (
									Ve("[Cpp] suppressing trigger because we are in a comment"),
									!1
								);
						} else if (
							Xe.getTokenTypeAtPosition_DANGEROUS_BECAUSE_COSTS_1_MS(Lt) ===
							Te.StandardTokenType.Comment
						)
							return (
								Ve("[Cpp] suppressing trigger because we are in a comment"), !1
							);
					}
					return !0;
				}
				usingFusedCursorPredictionModel() {
					return !!this.Nb()?.cppConfig?.isFusedCursorPredictionModel;
				}
				async immediatelyFireCppFromTrigger(Ye, ze, Xe, It, Lt, xt, Vt) {
					if (
						this.ib.applicationUserPersistentStorage.oneTimeSettings
							.shouldDisableGithubCopilot === !0
					)
						try {
							const ii = this.Bb.getValue("github.copilot");
							ii !== null &&
								typeof ii == "object" &&
								ii.enable["*"] === !0 &&
								this.lb.executeCommand("github.copilot.toggleCopilot");
						} finally {
							this.ib.setApplicationUserPersistentStorage(
								"oneTimeSettings",
								"shouldDisableGithubCopilot",
								!1,
							);
						}
					this.disableAndHideCopilotSuggestion(ze);
					const Bt = ze.getModel();
					if (Bt === null) return;
					const Gt = Bt.getValue(),
						Mt = Bt.getVersionId(),
						Ut = Vt?.overridePosition ?? ze.getPosition();
					if (Ut === null || Gt === void 0) {
						Ve("[Cpp] Bad Case: position or modelValue is undefined"),
							this.reallowCopilotIfWePreviousHidCopilotSuggestions();
						return;
					}
					if (
						this.usingFusedCursorPredictionModel() &&
						this.Cb.isShowingCursorPrediction(ze) &&
						xt !== le.CppSource.CursorPrediction &&
						xt !== le.CppSource.LineChange
					) {
						Ve(
							`[Cpp] Skipping because there is a displayed cursor prediction (source: ${xt})`,
						);
						return;
					}
					if (
						!this.allowCppTriggerInComments(ze, Ut) &&
						xt !== le.CppSource.CursorPrediction
					)
						return;
					if (this.overlapsInlineDiff(Ye, Ut.lineNumber)) {
						Ve("[Cpp] Skipping because we are in an inline diff.");
						return;
					}
					const ei = performance.now(),
						{ success: mi } =
							await this.immediatelyFireCppWithSpecifiedPosition({
								uri: Ye,
								editor: ze,
								position: Ut,
								abortController: Xe,
								generationUUID: It,
								modelValue: Gt,
								modelVersion: Mt,
								context: { startOfCpp: Lt },
								source: xt,
							});
					mi
						? this.disableAndHideCopilotSuggestion(ze)
						: (this.latestGenerationUUID === It &&
								this.reallowCopilotIfWePreviousHidCopilotSuggestions(),
							(this.R = this.R.filter((ii) => ii.generationUUID !== It))),
						this.ub.distribution({
							stat: "cppclient.immediatelyFire.getExpandedRange",
							value: ei - Lt,
						});
				}
				overlapsInlineDiff(Ye, ze) {
					const Xe = this.ib.nonPersistentStorage.inlineDiffs;
					if (Xe === void 0) return !1;
					const It = this.ib.nonPersistentStorage.inprogressAIGenerations.map(
						(Lt) => Lt.generationUUID,
					);
					return Xe.some((Lt) => {
						const xt = It.includes(Lt.generationUUID),
							Vt =
								ze >= Lt.currentRange.startLineNumber &&
								ze <= Lt.currentRange.endLineNumberExclusive,
							Bt = Ie.$dh.isEqual(Lt.uri, Ye) || Ye.fsPath === Lt.uri.fsPath;
						return xt && Vt && Bt;
					});
				}
				getModelValueAfterChange(Ye, ze, Xe) {
					try {
						const It = new R.default("sample-path", Ye.getValue()),
							Lt = new B.$kqb(
								ze.startLineNumber,
								ze.startColumn,
								ze.endLineNumberInclusive,
								ze.endColumn,
							).asZeroIndexed();
						return (
							It.applyChange(new O.$2qb(Xe, Lt, "sample-path", new Date())),
							It.content
						);
					} catch (It) {
						return console.error("Cpp: error", It), "<ERRORED>";
					}
				}
				updateRecentDiagnostics(Ye, ze) {
					const Xe = this.sb.read({ resource: Ye });
					let It,
						Lt = this.filterLinterErrors(Xe).map((Bt) => ({
							message: Bt.message,
							relatedInformation: Bt.relatedInformation ?? [],
							source: Bt.source,
							severity: (0, me.$O7b)(Bt.severity),
							uri: Ye.toString(),
							range: {
								startPosition: {
									line: Bt.startLineNumber,
									column: Bt.startColumn,
								},
								endPosition: { line: Bt.endLineNumber, column: Bt.endColumn },
							},
						}));
					Lt.length > 0 &&
						((Lt = Lt.filter(
							(Bt, Gt, Mt) =>
								Gt ===
								Mt.findIndex(
									(Ut) =>
										Ut.range.startPosition.line ===
											Bt.range.startPosition.line &&
										Ut.range.startPosition.column ===
											Bt.range.startPosition.column &&
										Ut.range.endPosition.line === Bt.range.endPosition.line &&
										Ut.range.endPosition.column ===
											Bt.range.endPosition.column &&
										Ut.message === Bt.message,
								),
						)),
						(It = new h.$4s({
							relativeWorkspacePath: this.nb.asRelativePath(Ye),
							errors: Lt,
							fileContents: void 0,
						})));
					const xt = It;
					xt !== void 0 &&
						xt.errors.length > 0 &&
						this.J.push(
							...xt.errors
								.filter((Bt) => Bt.range !== void 0)
								.map((Bt) => ({
									errors: [
										{
											...Bt,
											source: "",
											uri: Ye.toString(),
											relatedInformation: Bt.relatedInformation,
											severity:
												Bt.severity ??
												h.Diagnostic_DiagnosticSeverity.UNSPECIFIED,
											range: {
												startPosition: {
													line: Bt.range?.startPosition?.line || 0,
													column: Bt.range?.startPosition?.column || 0,
												},
												endPosition: {
													line: Bt.range?.endPosition?.line || 0,
													column: Bt.range?.endPosition?.column || 0,
												},
											},
										},
									],
									timestamp: Date.now(),
								})),
						),
						this.J.sort((Bt, Gt) => Gt.timestamp - Bt.timestamp),
						(this.J = this.J.filter(
							(Bt, Gt, Mt) =>
								Gt ===
								Mt.findIndex(
									(Ut) =>
										Ut.errors[0].range.startPosition.line ===
											Bt.errors[0].range.startPosition.line &&
										Ut.errors[0].range.startPosition.column ===
											Bt.errors[0].range.startPosition.column &&
										Ut.errors[0].range.endPosition.line ===
											Bt.errors[0].range.endPosition.line &&
										Ut.errors[0].range.endPosition.column ===
											Bt.errors[0].range.endPosition.column &&
										Ut.errors[0].message === Bt.errors[0].message &&
										Ut.errors[0].uri === Bt.errors[0].uri,
								),
						));
					const Vt = Xe.map((Bt) => ({
						message: Bt.message,
						relatedInformation: (0, ve.$S7b)(Bt.relatedInformation),
						source: Bt.source,
						uri: Ye.toString(),
						range: {
							startPosition: {
								line: Bt.startLineNumber,
								column: Bt.startColumn,
							},
							endPosition: { line: Bt.endLineNumber, column: Bt.endColumn },
						},
					}));
					(this.J = this.J.filter((Bt) =>
						Vt.some(
							(Gt) =>
								Gt.message === Bt.errors[0].message &&
								Gt.uri === Bt.errors[0].uri &&
								Gt.range.startPosition.line ===
									Bt.errors[0].range.startPosition.line &&
								Gt.range.startPosition.column ===
									Bt.errors[0].range.startPosition.column &&
								Gt.range.endPosition.line ===
									Bt.errors[0].range.endPosition.line &&
								Gt.range.endPosition.column ===
									Bt.errors[0].range.endPosition.column,
						),
					)),
						(this.J = this.J.filter(
							(Bt) => Date.now() - Bt.timestamp < 1e3 * 20,
						)),
						(this.J = this.J.slice(0, Math.min(this.J.length, 10)));
				}
				getRecentAndNearLocationLinterErrors(Ye, ze) {
					const Xe = this.sb.read({ resource: Ye });
					let It;
					const Lt = this.filterLinterErrors(Xe);
					let Vt = (ze !== void 0 ? [ze, ...Lt.filter((Gt) => Gt !== ze)] : Lt)
						.map((Gt) => ({
							message: Gt.message,
							relatedInformation: (0, ve.$S7b)(Gt.relatedInformation),
							source: Gt.source,
							range: {
								startPosition: {
									line: Gt.startLineNumber,
									column: Gt.startColumn,
								},
								endPosition: { line: Gt.endLineNumber, column: Gt.endColumn },
							},
							severity: (0, me.$O7b)(Gt.severity),
							uri: Ye.toString(),
						}))
						.slice(0, ct);
					const Bt = Date.now() - 2e4;
					return (
						Vt.push(
							...this.J.filter((Gt) => Gt.timestamp > Bt)
								.map((Gt) => Gt.errors)
								.flat()
								.slice(0, lt),
						),
						(Vt = Vt.filter(
							(Gt, Mt, Ut) =>
								Mt ===
								Ut.findIndex(
									(ei) =>
										ei.range.startPosition.line ===
											Gt.range.startPosition.line &&
										ei.range.startPosition.column ===
											Gt.range.startPosition.column &&
										ei.range.endPosition.line === Gt.range.endPosition.line &&
										ei.range.endPosition.column ===
											Gt.range.endPosition.column &&
										ei.message === Gt.message &&
										ei.uri === Gt.uri,
								),
						)),
						Vt.length > 0 &&
							(It = new h.$4s({
								relativeWorkspacePath: this.nb.asRelativePath(Ye),
								errors: Vt,
								fileContents: void 0,
							})),
						It
					);
				}
				showNearLocationLintErrorsToImportPredictionService({
					editor: Ye,
					uri: ze,
					isFromCursorMovement: Xe,
					source: It,
				}) {
					const Lt = Ye.getPosition();
					if (Lt === null) return;
					const xt = this.sb.read({ resource: ze });
					let Bt = this.filterLinterErrors(xt, S.MarkerSeverity.Warning).filter(
						(Gt) => Math.abs(Gt.startLineNumber - Lt.lineNumber) <= e.$8ed,
					);
					this.Jb.handleUpdatedLintErrors({
						openEditor: Ye,
						uri: ze,
						position: Lt,
						allMarkers: Bt,
						alwaysHandle: !Xe,
						source: It,
					});
				}
				overrideDiffHistory(Ye) {
					this.Wb = Ye;
				}
				async getGlobalDiffTrajectoriesAllowEvalOverride() {
					return !1
						? this.Wb
							? (console.warn("NOTE: Using overridden diff history"), this.Wb)
							: this.getGlobalDiffTrajectories()
						: this.getGlobalDiffTrajectories();
				}
				async getGlobalDiffTrajectories() {
					return await this.Eb.onlyLocalProvider?.runCommand(
						le.EditHistoryActions.CompileGlobalDiffTrajectories,
						{},
					);
				}
				debugPrintDiffTrajectories(Ye) {
					Ve("[--------------------------------"),
						Ve("[Diff Trajectories]"),
						Ye?.forEach((ze) => {
							Ve(`File: ${ze.fileName}`),
								ze.diffHistory.forEach((Xe) => {
									Ve(Xe);
								}),
								Ve("---");
						});
				}
				async getPartialCppRequest({
					editor: Ye,
					uri: ze,
					modelValue: Xe,
					modelVersion: It,
					position: Lt,
					source: xt,
					shouldRelyOnFileSyncForFile: Vt,
				}) {
					const Bt = this.getRecentAndNearLocationLinterErrors(ze),
						Gt = Ye.getModel();
					if (Gt === null) throw new Error("Model is null");
					const Mt = Gt.getEOL();
					let Ut;
					if (
						(ze.scheme === "vscode-notebook-cell" && Lt !== null
							? (Ut = await this.fastCurrentFileInfoForNotebooks(
									Gt,
									Ye,
									Lt,
									Vt,
								))
							: (Ut = await this.fastCurrentFileInfoDoesNotWorkForNotebooks(
									ze,
									Xe,
									Lt,
									Vt,
									It,
								)),
						Ut !== void 0 && Ut.cursorPosition !== void 0)
					) {
						const at = !Vt
							? this.Xb(Ut?.contents ?? "", Ut.cursorPosition.line, Mt, Gt)
							: Ut?.contents;
						Ut.contents = at ?? "";
					}
					if (this.S === void 0)
						throw new Error("Diffing provider is undefined");
					let ei;
					const mi = performance.now();
					let ii;
					const Dt = this.C.get(this.F(Gt));
					if (Dt === void 0) {
						const tt = await this.getGlobalDiffTrajectories();
						if (tt === void 0)
							throw new Error(
								"Compile Diff Trajectories not registered in extension host",
							);
						(ii = tt), this.C.set(this.F(Gt), ii);
					} else ii = Dt;
					const Jt = this.nb.asRelativePath(Gt.uri),
						si = ii.find((tt) => tt.fileName === Jt);
					if (si) {
						const tt = si.diffHistory.at(-1);
					}
					ei = {
						fileDiffHistories: ii,
						diffHistory: [],
						blockDiffPatches: [],
						mergedDiffHistories: [],
					};
					const Zt = performance.now();
					this.ub.distribution({
						stat: "cppclient.immediatelyFire.diffHistory",
						value: Zt - mi,
					});
					const ci = performance.now(),
						ri =
							this.Nb().cppConfig?.enableRvfTracking === !0
								? await this.Yb(Ye, ze)
								: [],
						$i = performance.now();
					this.ub.distribution({
						stat: "cppclient.immediatelyFire.additionalFiles",
						value: $i - ci,
					});
					const Wt =
						xt === le.CppSource.ManualTrigger
							? f.StreamCppRequest_ControlToken.OP
							: (this.ib.applicationUserPersistentStorage.cppControlToken ??
								void 0);
					return {
						...ei,
						linterErrors: Bt,
						currentFile: Ut,
						enableMoreContext: this.Nb().cppExtraContextEnabled,
						additionalFiles: ri,
						controlToken: Wt,
						cppIntentInfo: { source: xt },
						clientTime: Date.now(),
						clientTimezoneOffset: new Date().getTimezoneOffset(),
					};
				}
				async Yb(Ye, ze) {
					try {
						const Xe = this.Ab.visibleEditorPanes,
							It = [],
							Lt = this.nb.asRelativePath(ze),
							xt = (Mt, Ut) =>
								Ut.map((ei) => ({
									startLineNumber: ei.startLineNumber,
									startColumn: ei.startColumn,
									endLineNumber: ei.endLineNumber,
									endColumn: ei.endColumn,
									content: Mt.getValueInRange(ei)
										.split(Mt.getEOL())
										.map((mi) =>
											mi.length > 512 ? mi.substring(0, 512) + "..." : mi,
										)
										.join(`
`),
								}));
						for (const Mt of Xe) {
							const Ut = Mt.getControl();
							if (Ut !== void 0 && (0, c.$0sb)(Ut)) {
								if (Ut.getId() === Ye.getId()) continue;
								const ei = Ut.getModel();
								if (ei === null) continue;
								const mi = xt(ei, Ut.getVisibleRanges());
								It.push({
									relativeWorkspacePath: this.nb.asRelativePath(ei.uri),
									visibleRangeContent: mi.map((ii) => ii.content),
									startLineNumberOneIndexed: mi.map((ii) => ii.startLineNumber),
									visibleRanges: mi.map((ii) => ({
										startLineNumber: ii.startLineNumber,
										endLineNumberInclusive: ii.endLineNumber,
									})),
									isOpen: !0,
									lastViewedAt: void 0,
								});
							}
						}
						const Vt = [],
							Bt = new t.$Zc();
						try {
							for (const [Mt, Ut] of this.j.entries())
								if (ze !== Mt)
									try {
										const ei = this.nb.asRelativePath(Mt);
										if (
											ei === void 0 ||
											It.find((mi) => mi.relativeWorkspacePath === ei) ||
											Lt === ei
										)
											continue;
										if (Ut.lastViewedAt < Date.now() - gt) Vt.push(Mt);
										else if (this.jb.canHandleResource(Mt)) {
											let mi;
											(mi = await this.jb.createModelReference(Mt)), Bt.add(mi);
											const ii = mi.object.textEditorModel;
											if (ii === void 0) continue;
											if (ii.getValueLength() > Re) {
												Vt.push(Mt);
												continue;
											}
											const Dt = xt(ii, Ut.visibleRanges);
											It.push({
												relativeWorkspacePath: ei,
												isOpen: !1,
												visibleRangeContent: Dt.map((Jt) => Jt.content),
												startLineNumberOneIndexed: Dt.map(
													(Jt) => Jt.startLineNumber,
												),
												visibleRanges: Dt.map((Jt) => ({
													startLineNumber: Jt.startLineNumber,
													endLineNumberInclusive: Jt.endLineNumber,
												})),
												lastViewedAt: Ut.lastViewedAt,
											});
										}
									} catch (ei) {
										Ze(
											`[Cpp] Additonal file info: error in recentlyViewedFileURI error: ${ei} ${ei.stack}`,
										),
											Vt.push(Mt);
										continue;
									}
						} finally {
							Bt.dispose();
						}
						for (const Mt of Vt) this.j.delete(Mt);
						return It.sort((Mt, Ut) =>
							Mt.isOpen !== Ut.isOpen
								? Mt.isOpen
									? 1
									: -1
								: Mt.lastViewedAt === void 0 || Ut.lastViewedAt === void 0
									? 0
									: Mt.lastViewedAt - Ut.lastViewedAt,
						);
					} catch (Xe) {
						return (
							Ze(
								`[Cpp] Bad Case: Error in getAdditionalFilesInfo: ${Xe} stack: ${Xe.stack}`,
							),
							[]
						);
					}
				}
				getWorkspaceId() {
					let Ye = this.ib.workspaceUserPersistentStorage.uniqueCppWorkspaceId;
					return (
						Ye === void 0 &&
							((Ye =
								Math.random().toString(36).substring(2, 15) +
								Math.random().toString(36).substring(2, 15)),
							this.ib.setWorkspaceUserPersistentStorage(
								"uniqueCppWorkspaceId",
								Ye,
							)),
						`${Ye}-${e.$7ed}`
					);
				}
				isReferenceFocused(Ye) {
					if (!this.ib.applicationUserPersistentStorage.cppInPeek) return !1;
					const ze = this.hb.getActiveCodeEditor();
					if (ze === null) return !1;
					const Xe = ae.$EOb.get(ze)?.getWidget();
					return Xe !== void 0 && Xe.hasFocus() && Xe.getPreviewEditor() === Ye;
				}
				isFindActive(Ye) {
					if (
						this.ib.applicationUserPersistentStorage.cppInCmdF !== !0 ||
						Ye === void 0
					)
						return !1;
					const ze = Ue.$ufc.get(Ye);
					return ze instanceof Ue.$vfc && ze.isActive();
				}
				isFindFocused(Ye) {
					if (!this.ib.applicationUserPersistentStorage.cppInCmdF)
						return (
							Ve("[Cpp] isFindFocused: suppress b/c cppInCmdF is false"), !1
						);
					if (Ye === void 0) return !1;
					const ze = Ue.$ufc.get(Ye);
					if (ze === null) return !1;
					try {
						if (!ze.isFindInputFocused()) return !1;
					} catch {
						return !1;
					}
					const Xe = Ye.getSelection();
					return Xe !== null && !Xe.isEmpty();
				}
				Zb() {
					if (!this.ib.applicationUserPersistentStorage.cppInCmdF) return;
					const Ye = this.hb.getActiveCodeEditor();
					if (Ye !== null && this.isFindActive(Ye)) {
						const ze = Ue.$ufc.get(Ye);
						ze instanceof Ue.$vfc && ze.focusFindInputWithoutSelecting();
					}
				}
				isProblemFocused(Ye) {
					if (!this.ib.applicationUserPersistentStorage.cppInPeek || !Ye)
						return !1;
					const ze = this.hb.getActiveCodeEditor();
					return Ye !== ze
						? !1
						: (this.Fb.getActiveViewWithId(
								$e.Markers.MARKERS_VIEW_ID,
							)?.isFocused() ?? !1);
				}
				isTextFocusedOrSimilarlyFocused(Ye) {
					return Ye
						? Ye.hasTextFocus() ||
								this.isReferenceFocused(Ye) ||
								this.isProblemFocused(Ye) ||
								this.isFindFocused(Ye)
						: !1;
				}
				getFocusedCodeEditor() {
					const Ye = this.hb.getActiveCodeEditor();
					return Ye?.hasTextFocus() === !0
						? Ye
						: (this.hb
								.listCodeEditors()
								.find((ze) => this.isTextFocusedOrSimilarlyFocused(ze)) ?? Ye);
				}
				getNotebookCellInfo(Ye, ze, Xe) {
					if (!Ye.uri.scheme.startsWith("vscode-notebook-cell")) return null;
					const It = G.CellUri.parse(Ye.uri),
						Lt = this.zb.getNotebookEditorByCellEditorId(ze.getId());
					if (!It || !Lt)
						return (
							Ve("[Cpp] Bad Case: cellUri or notebookEditor is undefined"), null
						);
					const xt = Lt.getCellByHandle(It.handle);
					if (!xt) return Ve("[Cpp] Bad Case: cell is undefined"), null;
					const Bt = Lt?.textModel?.cells?.map((ii) => ii.getValue()),
						Gt = Lt.getCellsBefore(xt),
						Ut = Lt.getCellsAfter(xt)?.map((ii) => ii.model.getValue()),
						ei = Gt?.map((ii) => ii.model.getValue());
					return ei === void 0
						? (Ve("[Cpp] Bad Case: prevCellValues is undefined"), null)
						: !Bt || !ei
							? (Ve(
									"[Cpp] Bad Case: cellValues or prevCellValues is undefined",
								),
								null)
							: {
									numLinesAddedBefore:
										ei.length === 0 ? 0 : ei.join(Xe).split(Xe).length,
									cellValues: Bt,
									prevCellValues: ei,
									cell: xt,
									afterCellValues: Ut,
								};
				}
				getModelName() {
					return this.Nb().cppModel !== "" ? this.Nb().cppModel : void 0;
				}
				async immediatelyFireCppWithSpecifiedPosition({
					uri: Ye,
					editor: ze,
					position: Xe,
					abortController: It,
					generationUUID: Lt,
					modelValue: xt,
					modelVersion: Vt,
					context: Bt,
					source: Gt,
				}) {
					if (this.S === void 0)
						return (
							Ve("[Cpp] Bad Case: diffingProvider is undefined"),
							{ success: !1 }
						);
					this.fastPeriodicallyReloadCppConfig();
					const Mt =
							(await this.Eb.onlyLocalProvider?.runCommand(
								le.FileSyncActions.ShouldRelyOnFileSyncForFile,
								{
									relativeWorkspacePath: this.nb.asRelativePath(Ye),
									modelVersion: Vt,
								},
							)) ?? !1,
						Ut = this.Nb().cppConfig;
					if (
						(!Mt || !Ut?.enableFilesyncDebounceSkipping) &&
						(await this.Z.shouldDebounce(Lt))
					)
						return { success: !1 };
					const ei = performance.now();
					let mi;
					try {
						mi = await this.getPartialCppRequest({
							editor: ze,
							uri: Ye,
							modelValue: xt,
							modelVersion: Vt,
							position: Xe,
							source: Gt,
							shouldRelyOnFileSyncForFile: Mt,
						});
					} catch (li) {
						return (
							Ve(`[Cpp] Bad Case: Error in getPartialCppRequest: ${li}`),
							{ success: !1 }
						);
					}
					const ii = ze.getModel();
					if (ii === null)
						return Ve("[Cpp] Bad Case: model is null"), { success: !1 };
					let Dt = this.ib.workspaceUserPersistentStorage.uniqueCppWorkspaceId;
					Dt === void 0 &&
						((Dt =
							Math.random().toString(36).substring(2, 15) +
							Math.random().toString(36).substring(2, 15)),
						this.ib.setWorkspaceUserPersistentStorage(
							"uniqueCppWorkspaceId",
							Dt,
						)),
						Gt !== le.CppSource.CursorPrediction &&
							!this.Cb.onlyTriggerOnCppAccept() &&
							this.Cb.getAndShowNextPrediction({
								editor: ze,
								triggerCppCallback:
									this.fireCppSuggestionFromTrigger.bind(this),
								getLinterErrors:
									this.getRecentAndNearLocationLinterErrors.bind(this),
								source: b.CursorPrediction_CursorPredictionSource.ALWAYS_ON,
							});
					const Jt = ii.getVersionId(),
						si = (0, H.$cfc)(ii);
					It.signal.addEventListener("abort", () => {
						this.S?.cancelCpp(Lt);
					}),
						this.X !== void 0 &&
							this.ub.distribution({
								stat: "cppclient.beforeStreamCpp",
								value: performance.now() - this.X,
							}),
						(this.y = Lt),
						await this.S.streamCpp(
							Ke.$Te.wrap(
								new f.$QG({
									...mi,
									modelName: this.getModelName(),
									diffHistoryKeys: [],
									contextItems: [],
									parameterHints: this.xb.getRelevantType(ze),
									lspContexts: [],
									filesyncUpdates: [],
									workspaceId: Dt,
									timeSinceRequestStart:
										performance.now() + performance.timeOrigin - Bt.startOfCpp,
									timeAtRequestSend: Date.now(),
								}).toBinary(),
							),
							{ generateUuid: Lt, startOfCpp: Bt.startOfCpp },
						);
					const Zt = this.S,
						ci = this.streamCpp(It, Zt, Lt, { startOfCpp: Bt.startOfCpp });
					if (ci == null)
						return (
							Ve("[Cpp] Bad Case: cppStream is null or undefined"),
							{ success: !1 }
						);
					const ri = ci[Symbol.asyncIterator]();
					let $i,
						Wt = null,
						tt,
						at,
						pi;
					for (;;) {
						const li = await ri.next();
						if (li.done) {
							if (It.signal.aborted) return { success: !1 };
							Ze("[Cpp] Bad Case: stream ended before finding range");
							break;
						}
						const Vi = li.value;
						if (Vi.case === "rangeToReplaceOneIndexed") {
							(at = new h.$Ms(Vi.range)),
								(pi = ii.getValueInRange({
									startLineNumber: at.startLineNumber,
									startColumn: 1,
									endLineNumber: at.endLineNumberInclusive,
									endColumn: ii.getLineMaxColumn(at.endLineNumberInclusive),
								}));
							break;
						}
					}
					if (pi === void 0 || at === void 0)
						return (
							Ze("[Cpp] Bad Case: did not find rewriteRange from stream"),
							{ success: !1 }
						);
					const Li = (0, o.$9g)();
					if (((this.db = Li), this.usingFusedCursorPredictionModel())) {
						const li = (0, He.$4ed)(ri);
						($i = await li.text), (Wt = li.fusedCursorPrediction);
					} else
						this.Nb().chunkedStreamingEnabledV2 === !0
							? ([$i, tt] = await (0, He.$2ed)(
									ri,
									pi,
									(Xe.lineNumber ?? 1) - at.startLineNumber,
								))
							: ($i = await (0, He.$3ed)(ri));
					Ve(
						`[cppService:immediatelyFire] modelOutputText: ${JSON.stringify($i)}`,
					);
					const Di = new h.$Fs({
						startLineNumber: at.startLineNumber,
						startColumn: 1,
						endLineNumberInclusive: at.endLineNumberInclusive,
						endColumn: ii.getLineMaxColumn(at.endLineNumberInclusive),
					});
					if (It.signal.aborted) return { success: !1 };
					if (
						((this.w = Lt),
						this.rb.recordCppTriggerEvent(
							ii,
							Lt,
							new b.$Ov({
								lineNumberOneIndexed: Xe.lineNumber,
								columnOneIndexed: Xe.column,
							}),
							Gt,
						),
						this
							.pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING ===
							!0)
					)
						return Ve("[Cpp] Bad Case: triggering is paused"), { success: !1 };
					const Ui = ii.getEOL(),
						Wi = this.getNotebookCellInfo(ii, ze, Ui),
						Gi = await this.Gb.isValidCppCase({
							model: ii,
							modelOutputText: $i,
							startingRange: new h.$Fs(Di),
							notebookInfo: Wi,
							eol: Ui,
						}),
						qi = (li) => {
							It.signal.aborted ||
								this.rb.recordFinishedCppGeneration(
									ii,
									this.createRecoverableData({
										requestId: Lt,
										diffText: li,
										startingRange: Di,
										selection: Di,
									}),
								);
						};
					if (!Gi.valid) {
						const li = await Wt;
						return Li !== this.db
							? { success: !1 }
							: (li !== null &&
									(this.ab
										? Ve(
												"[Cpp] Suppressing cursor prediction because the last cursor movement was a cursor prediction",
											)
										: this.isFusedCursorPredictionTooCloseToCursor(li, Xe)
											? Ve(
													"[Cpp] Suppressing cursor prediction because it is too close to the cursor",
												)
											: this.isFusedCursorPredictionTooCloseToPreviouslyAcceptedSuggestion(
														li,
													)
												? Ve(
														`[Cpp] Suppressing cursor prediction because it is too close to a previously accepted suggestion (previous: ${JSON.stringify(this.cb)})`,
													)
												: (Ve(
														"[Cpp] Showing cursor prediction immediately because the edit suggestion was suppressed",
													),
													await this.displayFusedCursorPrediction({
														editor: ze,
														model: ii,
														fusedCursorPrediction: li,
														oldText: "",
														newText: "",
													}))),
								{ success: !1 });
					}
					($i = Gi.modelOutputText),
						Wt?.then((li) => {
							this.uponFusedCursorPredictionReady(Li, li);
						});
					const Oi = this.Hb.createUnseenSuggestion({
						model: si,
						diffText: $i,
						startingRange: Di,
						eol: Ui,
						requestId: Lt,
						modelVersionWhenInvoked: Jt,
						selection: Di,
						source: Gt,
						suggestionTriggerTime: Bt.startOfCpp,
						fusedCursorPredictionId: Li,
					});
					if (Oi === void 0)
						return (
							Ve("[Cpp] Bad Case: cppSuggestion is undefined"), { success: !1 }
						);
					const yi = performance.now();
					this.ub.distribution({
						stat: "cppclient.immediatelyFire",
						value: yi - ei,
					});
					let Ai;
					return (
						this.y !== Lt ||
						this.getCurrentSuggestion() !== void 0 ||
						ii.getVersionId() !== Jt ||
						(this.Nb().cppAutoImportEnabled &&
							this.Jb.isShowingImportSuggestion())
							? ((Ai = !0),
								this.N.addSuggestion({ ...Oi, abortController: It }, ii, ze))
							: (this.Ub(Oi), (Ai = this.displayCppSuggestion(ze, ii, Oi))),
						tt !== void 0 && Ai && !It.signal.aborted
							? tt.then((li) => {
									It.signal.aborted ||
										(qi(li),
										this.generateFollowupSuggestion(ze, li, ii, Oi, Xe, Ui),
										(this.R = this.R.filter((Vi) => Vi.generationUUID !== Lt)));
								})
							: tt === void 0 &&
								(qi($i),
								(this.R = this.R.filter((li) => li.generationUUID !== Lt))),
						{ success: Ai }
					);
				}
				isFusedCursorPredictionTooCloseToCursor(Ye, ze) {
					return Math.abs(Ye.lineNumberOneIndexed - ze.lineNumber) < 5;
				}
				isFusedCursorPredictionTooCloseToPreviouslyAcceptedSuggestion(Ye) {
					return this.cb.some(
						(ze) =>
							Math.abs(ze.position.lineNumber - Ye.lineNumberOneIndexed) < 5 &&
							ze.uri.path.includes(Ye.relativePath),
					);
				}
				generateFollowupSuggestion(Ye, ze, Xe, It, Lt, xt) {
					const Vt = (0, H.$efc)(Xe, {
						range: (0, xe.$79b)(It.range),
						text: It.replaceText,
					});
					let Bt = It.startingSuggestionRange;
					const Gt = () => {
							if (
								Bt.endLineNumberInclusive >= Vt.getLineCount() &&
								Lt.lineNumber === Bt.endLineNumberInclusive
							) {
								const Ut = Vt.getLineCount(),
									ei = Vt.getValueInRange({
										startLineNumber: Ut,
										startColumn: 1,
										endLineNumber: Ut + 1,
										endColumn: 1,
									});
								return new h.$Fs({
									...Bt,
									endLineNumberInclusive: Ut,
									endColumn: ei.length,
								});
							}
							return Bt;
						},
						Mt = this.getCurrentSuggestion();
					if (
						Mt === void 0 &&
						this.u?.requestId === It.requestId &&
						this.u?.modelVersion === Xe.getVersionId() &&
						this.u?.modelId === Xe.id
					) {
						Bt = Gt();
						const Ut = this.Hb.createUnseenSuggestion({
							model: Vt,
							diffText: ze,
							startingRange: Bt,
							eol: xt,
							requestId: It.requestId,
							selection: It.selection,
							source: It.source,
							modelVersionWhenInvoked: It.modelVersionWhenInvoked,
							suggestionTriggerTime: It.suggestionTriggerTime,
							fusedCursorPredictionId: void 0,
						});
						if (Ut === void 0) return;
						this.displayCppSuggestion(Ye, Xe, Ut);
					} else if (Mt?.uniqueId !== It.uniqueId)
						if (this.N.getMatchingSuggestion(It.uniqueId) !== void 0) {
							const ei = this.Hb.createUnseenSuggestion({
								model: Xe,
								diffText: ze,
								source: It.source,
								eol: xt,
								requestId: It.requestId,
								selection: It.selection,
								startingRange: Bt,
								modelVersionWhenInvoked: It.modelVersionWhenInvoked,
								suggestionTriggerTime: It.suggestionTriggerTime,
								fusedCursorPredictionId: void 0,
							});
							if (ei === void 0) return;
							this.N.replaceSuggestionOnChunkedFollowup(It.uniqueId, ei);
						} else return;
					else {
						Bt = Gt();
						const Ut = this.Hb.createUnseenSuggestion({
							model: Vt,
							diffText: ze,
							startingRange: Bt,
							eol: xt,
							requestId: It.requestId,
							selection: It.selection,
							source: It.source,
							modelVersionWhenInvoked: It.modelVersionWhenInvoked,
							suggestionTriggerTime: It.suggestionTriggerTime,
							fusedCursorPredictionId: void 0,
						});
						if (Ut === void 0) return;
						this.M.addSuggestion(Ut),
							this.createOrUpdateSuggestionState({
								onAcceptDisplayId: Ut.uniqueId,
							});
					}
				}
				getCurrentReplaceText(Ye) {
					const ze = this.getCurrentSuggestion();
					if (ze === void 0) return;
					const Xe = (0, J.$87)(Ye, ze);
					return Xe === null
						? void 0
						: Ye.getValueInRange({
								startLineNumber: Xe.startLineNumber,
								startColumn: Xe.startColumn,
								endLineNumber: Xe.endLineNumber,
								endColumn: Xe.endColumn,
							});
				}
				updateVisibleSuggestionText(Ye, ze, Xe, It, Lt, xt) {
					let Vt = Xe.startLineNumber,
						Bt = 1,
						Gt = [];
					for (const Ut of ze) {
						const ei = Ut.value.split(xt),
							mi = Vt + ei.length - 1,
							ii =
								ei.length > 1
									? ei[ei.length - 1].length + 1
									: Bt + Ut.value.length;
						Ut.added === !0
							? Gt.push({ range: new g.$iL(Vt, Bt, Vt, Bt), text: Ut.value })
							: Ut.removed === !0 &&
								Gt.push({ range: new g.$iL(Vt, Bt, mi, ii), text: "" }),
							Ut.added !== !0 && ((Bt = ii), (Vt = mi));
					}
					const Mt = (0, x.$Ged)(Gt, It);
					if (
						(It.pushEditOperations([], Gt, () => null, Lt),
						Gt.every(
							(Ut) =>
								Ut.range.endLineNumber === Ut.range.startLineNumber &&
								Ut.range.endColumn === Ut.range.startColumn,
						))
					) {
						if (
							Mt.range.startLineNumber === Mt.range.endLineNumber &&
							!Mt.text.includes(`
`)
						)
							Ye.setPosition(
								new I.$hL(
									Mt.range.startLineNumber,
									Mt.range.startColumn + Mt.text.length,
								),
							);
						else if (Gt.length === 1) {
							const Ut = Ye.getPosition();
							if (Ut === null) return;
							const ei = g.$iL.fromPositions(
								Ut,
								new I.$hL(Mt.range.startLineNumber, Mt.range.startColumn),
							);
							if (It.getValueInRange(ei).trim().length === 0) {
								const mi = (0, x.$Hed)(Mt);
								Ye.setPosition(mi);
							}
						}
					}
				}
				getStreamingSuggestionRange(Ye, ze, Xe) {
					const It = Ye.split(Xe);
					return {
						startLineNumber: ze.startLineNumber,
						startColumn: ze.startColumn,
						endLineNumber: ze.startLineNumber + It.length + 1,
						endColumn: It[It.length - 1].length,
					};
				}
				createOrUpdateStreamingBackgroundDecoration(Ye, ze, Xe) {
					const It = Ye.getEOL(),
						Lt = this.getStreamingSuggestionRange(Xe.replaceText, ze, It);
					return Ye.deltaDecorations(
						[],
						[
							{
								range: Lt,
								options: {
									description: "cpp suggestion streaming indicator",
									className: bt,
									stickiness:
										m.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
								},
							},
						],
					)[0];
				}
				clearAllGreenHighlights(Ye) {
					this.decIdsThatAreNotInReactiveStorage.green.length > 0 &&
						(this.decIdsThatAreNotInReactiveStorage.green = Ye.deltaDecorations(
							this.decIdsThatAreNotInReactiveStorage.green,
							[],
						));
				}
				getSuggestionDecorationOptions(Ye, ze) {
					let Xe;
					return (
						(Xe = {
							description: "cpp suggestion",
							className:
								ze && this.Nb().cppConfig?.isGhostText !== !0
									? ft
									: "<NO_CLASS_DEFINED_CPP>",
							stickiness: m.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
						}),
						{
							range: {
								startLineNumber: Ye.startLineNumber,
								startColumn: Ye.startColumn,
								endLineNumber: Ye.endLineNumberInclusive,
								endColumn: Ye.endColumn,
							},
							options: Xe,
						}
					);
				}
				showCursorHighlight() {
					(0, A.$rwc)(
						`.monaco-editor .cursors-layer .cursor {
			background-color: var(--vscode-textLink-foreground) !important;
			border-color: var(--vscode-textLink-foreground) !important;
			color: var(--vscode-textLink-foreground) !important;
			animation: cursorBump 0.2s;
		}
		@keyframes cursorBump {
			0% { transform: scale(1) rotate(0deg); opacity: 1 !important; }
			50% { transform: scale(2) rotate(180deg); opacity: 1 !important; }
			100% { transform: scale(1) rotate(360deg); opacity: 1 !important; }
		}`,
						"cppCursorHighlightClassName",
					);
				}
				hideCursorHighlight() {
					(0, A.$rwc)("", "cppCursorHighlightClassName");
				}
				createSuggestionDecoration(Ye, ze, Xe) {
					return (
						this.Nb().cppHighlightCursor === !0 &&
							((Xe = !1), this.showCursorHighlight()),
						Ye.deltaDecorations(
							[],
							[this.getSuggestionDecorationOptions(ze, Xe)],
						)[0]
					);
				}
				removeStreamingBackgroundDecoration(Ye, ze) {
					Ye.deltaDecorations([ze], []);
				}
				updateSuggestionStateHalfSilently(Ye) {
					const ze = this.Ob().cppState;
					if (!(ze === void 0 || ze.suggestion === void 0))
						return this.createOrUpdateSuggestionStateHalfSilently(Ye);
				}
				createOrUpdateSuggestionStateHalfSilently(Ye) {
					this.Ob().cppState !== void 0 &&
						this.ib.setNonPersistentStorage("cppState", "suggestion", (Xe) =>
							Xe === void 0 ? Ye : { ...Xe, ...Ye },
						);
				}
				updateSuggestionState(Ye) {
					const ze = this.Ob().cppState;
					if (!(ze === void 0 || ze.suggestion === void 0))
						return this.createOrUpdateSuggestionState(Ye);
				}
				createOrUpdateSuggestionState(Ye) {
					this.Ob().cppState !== void 0 &&
						this.ib.setNonPersistentStorage("cppState", (Xe) => {
							if (Xe === void 0) return;
							const It = Xe.suggestion;
							return { ...Xe, suggestion: It ? { ...It, ...Ye } : Ye };
						});
				}
				textEqualsCurrentRange(Ye, ze, Xe) {
					return (
						Ye.getValueInRange({
							startLineNumber: Xe.startLineNumber,
							startColumn: Xe.startColumn,
							endLineNumber: Xe.endLineNumberInclusive,
							endColumn: Xe.endColumn,
						}) === ze
					);
				}
				createRecoverableData({
					requestId: Ye,
					diffText: ze,
					startingRange: Xe,
					selection: It,
				}) {
					return {
						requestId: Ye,
						suggestionText: ze,
						suggestionRange: {
							startLineNumber: Xe.startLineNumber,
							startColumn: Xe.startColumn,
							endLineNumber: Xe.endLineNumberInclusive,
							endColumn: Xe.endColumn,
						},
						position: {
							lineNumberOneIndexed: It.startLineNumber,
							columnOneIndexed: It.startColumn,
						},
					};
				}
				displayCppSuggestion(Ye, ze, Xe) {
					if (this.textEqualsCurrentRange(ze, Xe.replaceText, Xe.range))
						return (
							Ve("[Cpp] Bad Case: Suggestion text matches current text"), !1
						);
					if (
						this
							.pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING ===
						!0
					)
						return Ve("[Cpp] Bad Case: triggering is paused"), !1;
					const It = this.getCurrentSuggestion();
					if (
						It !== void 0 &&
						It.source !== le.CppSource.CursorPrediction &&
						Xe.source === le.CppSource.CursorPrediction
					)
						return !1;
					It !== void 0 &&
						(It.source !== le.CppSource.CursorPrediction &&
							console.info(
								"[Cpp] Bad Case: Clearing suggestion because it already exists",
							),
						this.clearSuggestions());
					const Lt = ze.getLineMaxColumn(
							Xe.startingSuggestionRange.endLineNumberInclusive,
						),
						xt = { ...Xe.startingSuggestionRange, endColumn: Lt },
						Vt = this.createSuggestionDecoration(ze, xt, !0),
						Bt = { ...Xe, decorationId: Vt };
					this.createOrUpdateSuggestionState(Bt);
					const Gt = this.getCurrentSuggestion(),
						Mt = Xe.startingSuggestionRange,
						Ut = this.createRecoverableData({
							requestId: Xe.requestId,
							diffText: Xe.diffText,
							startingRange: Mt,
							selection: Xe.selection,
						});
					return (
						Gt
							? this.rb.recordCppSuggestionEvent(ze, Gt, Ut)
							: this.rb.recordCppSuggestionEvent(ze, Bt, Ut),
						(this.z = Ut.requestId),
						this.Nb().cppAutoImportEnabled && this.Jb.showCorrectUI(Ye),
						!0
					);
				}
				getCurrentSuggestion() {
					return this.Ob().cppState?.suggestion;
				}
				updateSuggestionGreenHighlights(Ye, ze, Xe, It = !0) {
					const Lt = (0, J.$87)(Ye, ze);
					if (Lt === null) return;
					const { greenRanges: xt } = (0, s.$Eqb)(Xe, Lt, "post-change");
					this.getCurrentSuggestion() &&
						(this.updateSuggestionStateHalfSilently({ greens: xt }),
						this.Nb().cppAutoImportEnabled && this.Jb.handleNewGreens(Ye, xt),
						It &&
							((this.didShowGreenHighlights = !0),
							(this.decIdsThatAreNotInReactiveStorage.green =
								Ye.deltaDecorations(
									this.decIdsThatAreNotInReactiveStorage.green,
									xt.map((Bt) => ({
										range: {
											startLineNumber: Bt.startLineNumber,
											startColumn: Bt.startColumn,
											endLineNumber: Bt.endLineNumber,
											endColumn: Bt.endColumn,
										},
										options: {
											description: "green",
											className: q.$Bcc,
											stickiness:
												m.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
										},
									})),
								)),
							this.mb.assert(
								this.decIdsThatAreNotInReactiveStorage.green.length < 50,
								"Too many green decorations from cpp",
							)));
				}
				makeEditsForNextWordAccept({
					model: Ye,
					suggestion: ze,
					editor: Xe,
					changes: It,
				}) {
					const Lt = Xe.getPosition();
					if (Lt === null) return { type: J.AcceptResult.NotAccepted };
					const xt = ze.decorationId,
						Vt = Ye.getDecorationRange(xt);
					if (Vt === null) return { type: J.AcceptResult.NotAccepted };
					const Bt = this.Db.getLanguageConfiguration(Ye.getLanguageId()),
						Gt = (0, ue.$Ned)(It, Lt, Vt.getStartPosition(), Bt);
					if (Gt.type === J.AcceptResult.NotAccepted)
						return { type: J.AcceptResult.NotAccepted };
					{
						if (Gt.edit.text === Ye.getValueInRange(Gt.edit.range))
							return { type: J.AcceptResult.NotAccepted };
						const Mt = Ye.getValueInRange(
								g.$iL.fromPositions(
									Vt.getStartPosition(),
									Gt.edit.range.getStartPosition(),
								),
							),
							Ut = Ye.getValueInRange(
								g.$iL.fromPositions(
									Gt.edit.range.getEndPosition(),
									Vt.getEndPosition(),
								),
							);
						if (Mt + Gt.edit.text + Ut === ze.replaceText)
							return { type: J.AcceptResult.AcceptedAll };
						{
							const mi = Ye.pushEditOperations(
								[oe.$kL.fromPositions(Lt, Lt)],
								[Gt.edit],
								(ii) => {
									const Dt = ii[0].range.getEndPosition();
									return [oe.$kL.fromPositions(Dt, Dt)];
								},
							);
							return (
								this.L.addEdit(Gt.edit),
								mi && Xe.setPosition(mi[0].getSelectionStart()),
								Gt
							);
						}
					}
				}
				async makeChangesOnAcceptCppSuggestion({
					model: Ye,
					eol: ze,
					suggestion: Xe,
					editor: It,
					abortController: Lt,
					onlyAcceptFirstWord: xt,
				}) {
					let Vt = !1;
					Lt?.signal.addEventListener("abort", () => {
						Vt = !0;
					});
					let Bt = (0, J.$87)(Ye, Xe);
					if (!Bt) return { type: J.AcceptResult.NotAccepted };
					let Gt = Xe.originalText ?? "";
					const Mt = Xe.replaceText ?? "",
						{ changes: Ut } = await this.wb.wordDiff(Gt, Mt);
					if (Vt) return { type: J.AcceptResult.NotAccepted };
					const ei = async (ii) => {
							this.updateVisibleSuggestionText(
								It,
								Ut,
								ii,
								Ye,
								Xe.undoRedoGroup,
								ze,
							);
							const { wordDiffs: Dt, charDiffs: Jt } = (0, qe.$wlc)(
									Xe.originalText ?? "",
									Mt,
									ze,
								),
								Zt =
									this.Q.get(Xe.decorationId) === E.CppSuggestionType.PreviewBox
										? Dt
										: Jt;
							return (
								this.updateSuggestionGreenHighlights(Ye, Xe, Zt),
								this.updateSuggestionState({
									suggestionIsCurrentlyHidden: !1,
									hasBeenSeen: !0,
								}),
								{ type: J.AcceptResult.AcceptedAll }
							);
						},
						mi = async (ii) => {
							const Dt = this.makeEditsForNextWordAccept({
								model: Ye,
								suggestion: Xe,
								editor: It,
								changes: Ut,
							});
							if (Dt.type === J.AcceptResult.NotAccepted) return Dt;
							if (Dt.type === J.AcceptResult.AcceptedAll) return await ei(ii);
							{
								this.updateSuggestionState({
									suggestionIsCurrentlyHidden: !0,
									hasBeenSeen: !0,
								});
								const Jt = Ye.getValueInRange(ii),
									{ wordDiffs: si, charDiffs: Zt } = (0, qe.$wlc)(
										Xe.originalText ?? "",
										Jt,
										ze,
									),
									ri =
										this.Q.get(Xe.decorationId) ===
										E.CppSuggestionType.PreviewBox
											? si
											: Zt;
								return this.updateSuggestionGreenHighlights(Ye, Xe, ri), Dt;
							}
						};
					return xt ? await mi(Bt) : await ei(Bt);
				}
				increaseCppUsage() {
					this.ib.setApplicationUserPersistentStorage(
						"cppShown",
						(Ye) => (Ye ?? 0) + 1,
					);
				}
				getHiddenSuggestion(Ye, ze) {
					const Xe = this.getCurrentSuggestion();
					return Xe === void 0 || !Xe.suggestionIsCurrentlyHidden ? null : Xe;
				}
				getVisibleSuggestion() {
					const Ye = this.getCurrentSuggestion();
					return Ye === void 0 || Ye.suggestionIsCurrentlyHidden ? null : Ye;
				}
				disableAndHideCopilotSuggestion(Ye) {
					this.editorThatWeHidGhostTextOn !== void 0 &&
						this.unhideCopilotSuggestion(this.editorThatWeHidGhostTextOn),
						(this.editorThatWeHidGhostTextOn = Ye),
						y.$O1b
							.get(this.editorThatWeHidGhostTextOn)
							?.model.get()
							?.clearCopilotSuggestions(),
						y.$O1b
							.get(Ye)
							?.model.get()
							?.isHidden.set(!0, void 0);
				}
				unhideCopilotSuggestion(Ye) {
					y.$O1b
						.get(Ye)
						?.model.get()
						?.isHidden.set(!1, void 0);
				}
				saveEditorSelectionInSuggestion(Ye, ze, Xe) {
					const It = Ye.getSelection();
					this.updateSuggestionState({
						editorSelectionBeforePeek: It !== null ? It : void 0,
					});
				}
				saveCurrentTextIntoSuggestion(Ye, ze) {
					const Xe = (0, J.$87)(Ye, ze);
					if (Xe) {
						const It = Ye.getValueInRange(Xe),
							Lt = { ...ze, originalText: It };
						return this.updateSuggestionState(Lt), Lt;
					}
					return ze;
				}
				getEditorCurrentPositionRange(Ye) {
					const ze = Ye.getPosition();
					return ze === null
						? null
						: new h.$Fs({
								startLineNumber: ze.lineNumber,
								startColumn: ze.column,
								endLineNumberInclusive: ze.lineNumber,
								endColumn: ze.column,
							});
				}
				async acceptFullSuggestion(Ye, ze) {
					return await this.acceptSuggestion(!1, Ye, ze);
				}
				async acceptNextWordSuggestion(Ye, ze) {
					return await this.acceptSuggestion(!0, Ye, ze);
				}
				async acceptSuggestion(Ye, ze, Xe) {
					let It = !1;
					ze?.signal.addEventListener("abort", () => {
						It = !0;
					});
					const Lt = this.getFocusedCodeEditor(),
						xt = Lt?.getModel();
					if (!Lt || !xt) return { type: J.AcceptResult.NotAccepted };
					const Vt = xt.getEOL(),
						Bt = this.getEditorCurrentPositionRange(Lt);
					if (!this.isTextFocusedOrSimilarlyFocused(Lt) || Bt === null)
						return { type: J.AcceptResult.NotAccepted };
					let Gt = Xe ?? this.getHiddenSuggestion(xt, Bt);
					if (Gt === null) return { type: J.AcceptResult.NotAccepted };
					this.pb.publicLogCapture("cursor.peekcppsuggestion"),
						this.increaseCppUsage(),
						(Gt = this.saveCurrentTextIntoSuggestion(xt, Gt)),
						this.saveEditorSelectionInSuggestion(Lt, xt, Gt);
					const Mt = await this.makeChangesOnAcceptCppSuggestion({
						model: xt,
						eol: Vt,
						suggestion: Gt,
						abortController: ze,
						onlyAcceptFirstWord: Ye,
						editor: Lt,
					});
					return It
						? { type: J.AcceptResult.NotAccepted }
						: ((this.bb = !0),
							Gt.fusedCursorPredictionId &&
							this.eb?.id === Gt.fusedCursorPredictionId
								? this.displayFusedCursorPrediction({
										editor: Lt,
										model: xt,
										fusedCursorPrediction: this.eb.fusedCursorPrediction,
										oldText: Gt.originalText ?? "",
										newText: Gt.replaceText ?? "",
									})
								: (this.disableAndHideCopilotSuggestion(Lt),
									Gt.fusedCursorPredictionId &&
										(this.fb = {
											uri: xt.uri,
											fusedCursorPredictionId: Gt.fusedCursorPredictionId,
											oldText: Gt.originalText ?? "",
											newText: Gt.replaceText ?? "",
										})),
							Mt);
				}
				async displayFusedCursorPrediction({
					editor: Ye,
					model: ze,
					fusedCursorPrediction: Xe,
					oldText: It,
					newText: Lt,
				}) {
					const xt = this.nb.resolveRelativePath(Xe.relativePath);
					if (!xt) {
						Ve("[fusedCursorPrediction] Could not resolve predicted file path");
						return;
					}
					const Vt = await this.Cb.getMultifileCursorPredictionEditor(xt);
					if (!Vt) {
						Ve(
							"[fusedCursorPrediction] Could not get editor for predicted file",
						);
						return;
					}
					const Bt = Vt.getModel();
					if (!Bt) {
						Ve(
							"[fusedCursorPrediction] Could not get model for predicted file",
						);
						return;
					}
					let Gt = Xe.lineNumberOneIndexed;
					const Mt = Ye.getPosition(),
						Ut = Ie.$dh.isEqual(ze.uri, Bt.uri);
					if (Mt && Ut && Gt > Mt.lineNumber) {
						const ei = ze.getEOL();
						Gt += Lt.split(ei).length - It.split(ei).length;
					}
					this.overlapsInlineDiff(Bt.uri, Gt) ||
						this.Cb.manuallyCreateCursorPrediction({
							editor: Vt,
							model: Bt,
							lineNumber: Gt,
						});
				}
				removeSuggestion() {
					const Ye = this.Ob().cppState;
					Ye !== void 0 &&
						this.ib.setNonPersistentStorage("cppState", {
							...Ye,
							suggestion: void 0,
						});
				}
				cleanupAfterNextWordSuggestion(Ye, ze) {
					const Xe = Ye.getModel();
					if (!Xe) return;
					const It = this.getEditorCurrentPositionRange(Ye);
					if (It === null) return;
					const Lt = this.getHiddenSuggestion(Xe, It);
					Lt !== null && this.rb.recordPartialAcceptSuggestionEvent(Xe, Lt, ze);
				}
				cleanupAfterAcceptSuggestion(Ye, ze) {
					this.abortAllCppRequests(ze?.requestId);
					const Xe = this.getEditorCurrentPositionRange(Ye),
						It = Ye.getModel();
					if (!It || Xe === null) return;
					const Lt = ze ?? this.getVisibleSuggestion();
					if (Lt !== null) {
						if (
							((this.u = {
								requestId: Lt.requestId,
								modelVersion: It.getVersionId(),
								modelId: It.id,
							}),
							(this.numberOfClearedSuggestionsSinceLastAccept = 0),
							this.clearSuggestions(
								this.Nb().cppConfig?.isGhostText &&
									!this.Ob().cppState?.suggestion?.immediatelySeen,
							),
							this.rb.recordAcceptSuggestionEvent(It, Lt),
							this.ib.applicationUserPersistentStorage.checklistState
								?.doneAutoComplete !== !0)
						) {
							const xt =
								this.ib.applicationUserPersistentStorage.checklistState;
							this.ib.setApplicationUserPersistentStorage(
								"checklistState",
								(Vt) => ({ ...(Vt ?? {}), doneAutoComplete: !0 }),
							);
						}
						if (Lt.onAcceptDisplayId !== void 0) {
							const xt = this.M.getAndEvictMatchingSuggestion(
								Lt.onAcceptDisplayId,
							);
							if (xt) {
								this.displayCppSuggestion(Ye, It, xt);
								return;
							}
						}
						if (this.Cb.isCursorPredictionEnabled()) {
							const xt = It.getDecorationRange(Lt.decorationId) ?? void 0;
							let Vt = xt
								? {
										startLineNumber: xt.startLineNumber,
										startColumn: xt.startColumn,
										endLineNumberInclusive:
											xt.endColumn === 1
												? xt.endLineNumber - 1
												: xt.endLineNumber,
										endColumn: xt.endColumn,
									}
								: void 0;
							this.U?.modelVersion === It.getVersionId() &&
							this.U?.modelId === It.id
								? ((this.Y = { fire: !1, acceptedRange: void 0 }),
									this.Cb.getAndShowNextPrediction({
										editor: Ye,
										triggerCppCallback:
											this.fireCppSuggestionFromTrigger.bind(this),
										getLinterErrors:
											this.getRecentAndNearLocationLinterErrors.bind(this),
										source: b.CursorPrediction_CursorPredictionSource.ACCEPT,
										cppSuggestionRange: Vt,
									}))
								: (this.Y = { fire: !0, acceptedRange: Vt });
						} else this.Cb.periodicallyReloadCursorPredictionConfig(!1);
					}
				}
				revertSuggestion(Ye, ze = { removeGreens: !0 }) {
					const Xe = this.getVisibleSuggestion();
					if (Xe === null) return;
					const It = Ye.getModel(),
						Lt = this.getEditorCurrentPositionRange(Ye);
					Ye === null ||
						Ye.hasTextFocus() === !1 ||
						It === void 0 ||
						It === null ||
						Lt === null ||
						(this.pb.publicLogCapture("cursor.revertcppsuggestion"),
						this.rb.recordRejectSuggestionEvent(It, Xe),
						this.removeAllHighlights(It, ze),
						this.updateSuggestionStateHalfSilently({
							suggestionIsCurrentlyHidden: !0,
							hasBeenSeen: !0,
							editorSelectionBeforePeek: void 0,
						}),
						this.reallowCopilotIfWePreviousHidCopilotSuggestions());
				}
				abortAllCppRequests(Ye) {
					this.R.forEach((ze) => {
						ze.generationUUID !== Ye && ze.abortController.abort();
					}),
						(this.R = this.R.filter((ze) => ze.generationUUID === Ye)),
						this.holdDownAbortController?.abort(),
						(this.holdDownAbortController = void 0);
				}
				resetShownCppSuggestions() {
					const Ye = this.hb.getActiveCodeEditor();
					Ye != null && (this.revertSuggestion(Ye), this.clearSuggestions());
				}
				rejectSuggestionForTelemetryIfExists(Ye) {
					const ze = this.getCurrentSuggestion();
					if (ze === void 0) return;
					const Xe = Ye.getModel();
					Xe != null &&
						(this.rb.recordRejectSuggestionEvent(Xe, ze),
						this.pb.publicLogCapture("cursor.rejectcppsuggestion"));
				}
				rejectAndResetAllCppSuggestions(
					Ye = { removeGreens: !0, abortAll: !0 },
				) {
					Ye.abortAll && this.abortAllCppRequests();
					const ze = this.hb.getActiveCodeEditor();
					ze != null &&
						(this.rejectSuggestionForTelemetryIfExists(ze),
						this.revertSuggestion(ze, Ye),
						this.clearSuggestions(void 0, Ye));
				}
				clearDecorationsSlowEnumeratesAllDecorations() {
					const Ye = this.hb.getActiveCodeEditor(),
						ze = Ye?.getModel();
					if (Ye == null || ze === null || ze === void 0) return;
					this.removeAllHighlights(ze);
					const Xe = ze.getAllDecorations(),
						It = Xe.filter(
							(Vt) =>
								Vt.options.className === q.$Bcc ||
								Vt.options.className === ft ||
								Vt.options.className === bt ||
								Vt.options.className === nt ||
								Vt.options.className === bt,
						).map((Vt) => Vt.id);
					It.length > 0 && ze.deltaDecorations(It, []);
					const Lt = Xe.filter(
						(Vt) => Vt.options.description === "cpp-truncation-cache",
					).map((Vt) => Vt.id);
					Lt.length > 0 && ze.deltaDecorations(Lt, []), this.O.delete(ze.uri);
					const xt = this.getCurrentSuggestion();
					xt !== void 0 &&
						xt.decorationId !== void 0 &&
						ze.deltaDecorations([xt.decorationId], []);
				}
				clearDecorationsFast(Ye = { removeGreens: !0 }) {
					const Xe = this.hb.getActiveCodeEditor()?.getModel();
					if (Xe == null) return;
					const It = this.decIdsThatAreNotInReactiveStorage.green,
						Lt = Object.values(this.decIdsThatAreNotInReactiveStorage)
							.filter((Gt) => Gt !== It)
							.flat(),
						xt = Ye.removeGreens ? [...this.I, ...It, ...Lt] : [...Lt];
					Ye.removeGreens === !1 ? this.I.push(...It) : (this.I = []),
						xt.length > 0 && Xe.deltaDecorations(xt, []),
						(this.decIdsThatAreNotInReactiveStorage = Object.fromEntries(
							Object.keys(this.decIdsThatAreNotInReactiveStorage).map((Gt) => [
								Gt,
								[],
							]),
						));
					const Vt = this.getCurrentSuggestion();
					if (Vt === void 0) return;
					const Bt = [Vt.decorationId];
					Bt.length > 0 && Xe.deltaDecorations(Bt, []);
				}
				clearSuggestions(Ye, ze = { removeGreens: !0 }) {
					Ye !== !0 && this.clearDecorationsFast(ze),
						this.Ob().cppState?.suggestion !== void 0 &&
							(this.numberOfClearedSuggestionsSinceLastAccept += 1),
						this.ib.setNonPersistentStorage("cppState", "suggestion", void 0);
				}
				removeAllHighlights(Ye, ze = { removeGreens: !0 }) {
					this.hideCursorHighlight(),
						ze.removeGreens !== !1 && this.clearAllGreenHighlights(Ye);
				}
				isOnShortestEditPath({ event: Ye, model: ze }, Xe) {
					const It = this.hb.getActiveCodeEditor();
					if (It == null || It.getModel()?.id !== ze.id) return !1;
					const Lt = this.getCurrentSuggestion();
					if (Lt === void 0) return !1;
					let xt;
					if (Xe === void 0) {
						const Bt = this.getPreviousModelValue(ze);
						if (Bt === void 0) return !1;
						xt = Bt;
					} else xt = Xe;
					const Vt = (0, H.$bfc)(xt, ze.uri);
					return this.L.checkChangeExists(Ye, !0)
						? !0
						: (0, F.$Ked)({
								event: Ye,
								model: ze,
								proposedSuggestion: Lt,
								previousModelValue: Vt,
							});
				}
				async formatDiffHistory(Ye, ze, Xe, It) {
					if (Xe.getValueLength() > Re) return;
					const Lt = await this.Eb.onlyLocalProvider?.runCommand(
						le.EditHistoryActions.FormatDiffHistory,
						{
							uri: Xe.uri.toString(),
							changes: Ye.changes,
							behavior: this.Nb().cppConfig?.mergeBehavior,
							modelVersion: Xe.getVersionId(),
							eol: It,
						},
					);
					if (Lt === void 0)
						throw new Error(
							"Format Diff History not registered in extension host",
						);
					(this.U = { modelVersion: Xe.getVersionId(), modelId: Xe.id }),
						this.Y.fire === !0 &&
							(this.Cb.getAndShowNextPrediction({
								editor: ze,
								triggerCppCallback:
									this.fireCppSuggestionFromTrigger.bind(this),
								getLinterErrors:
									this.getRecentAndNearLocationLinterErrors.bind(this),
								source: b.CursorPrediction_CursorPredictionSource.ACCEPT,
								cppSuggestionRange: this.Y.acceptedRange,
							}),
							(this.Y = { fire: !1, acceptedRange: void 0 })),
						this.C.set(this.F(Xe), Lt),
						this.G.set(this.H(Xe), Xe.getValue());
				}
				checkOverlappingSuggestion(Ye, ze) {
					const Xe = this.getCurrentSuggestion();
					if (Xe === void 0 || Xe.uri.toString() !== Ye.uri.toString())
						return null;
					const It = Ye.getDecorationRange(Xe.decorationId);
					return It &&
						It.startLineNumber <= ze.endLineNumberInclusive &&
						It.endLineNumber >= ze.startLineNumber
						? Xe
						: null;
				}
				async *streamCpp(Ye, ze, Xe, It) {
					let Lt = !1,
						xt = !1;
					for (;;) {
						if (Ye.signal.aborted) return;
						const Vt = await ze.flushCpp(Xe);
						if (Vt.type === "failure") throw new Error(Vt.reason);
						!Lt &&
							Vt.rangeToReplaceOneIndexed !== void 0 &&
							((Lt = !0),
							yield {
								case: "rangeToReplaceOneIndexed",
								range: Vt.rangeToReplaceOneIndexed,
							});
						const Bt = Vt.buffer;
						for (const Gt of Bt) {
							if (Gt === hi) {
								xt = !0;
								break;
							}
							yield { case: "text", text: Gt };
						}
						if (
							(Vt.doneEdit && (yield { case: "doneEdit" }),
							Vt.cursorPredictionTarget !== void 0 &&
								(yield {
									case: "fusedCursorPrediction",
									prediction: Vt.cursorPredictionTarget,
								}),
							xt)
						)
							return;
						await new Promise((Gt) => setTimeout(Gt, 5));
					}
				}
				async $b(Ye, ze) {
					if (
						ze ||
						Math.random() < (this.Nb().cppConfig?.checkFilesyncHashPercent ?? 0)
					)
						return (0, Se.$pjb)(Ye);
				}
				async fastCurrentFileInfoForNotebooks(Ye, ze, Xe, It, Lt) {
					const xt = Ye.getEOL(),
						Vt = this.getNotebookCellInfo(Ye, ze, xt);
					if (Vt === null) return;
					const { numLinesAddedBefore: Bt, cellValues: Gt } = Vt;
					let Mt = 0;
					const Ut = [0];
					for (const ei of Gt.slice(0, -1))
						(Mt += ei.split(`
`).length),
							Ut.push(Mt);
					return new h.$Ws({
						relativeWorkspacePath: this.nb.asRelativePath(Ye.uri),
						contents: Gt.join(xt),
						sha256Hash: It ? await this.$b(Gt.join(xt), this.gb) : void 0,
						selection: void 0,
						cursorPosition: new h.$ys({
							line: Xe.lineNumber - 1 + Bt,
							column: Xe.column - 1,
						}),
						languageId: "",
						fileVersion: Lt,
						cellStartLines: Ut,
						workspaceRootPath: this.nb.getWorkspaceFolder(Ye.uri)?.uri.fsPath,
					});
				}
				async fastCurrentFileInfoDoesNotWorkForNotebooks(Ye, ze, Xe, It, Lt) {
					if (Ye.scheme !== M.Schemas.aiChat && Xe !== null)
						return new h.$Ws({
							relativeWorkspacePath: this.nb.asRelativePath(Ye),
							contents: ze,
							sha256Hash: It ? await this.$b(ze, this.gb) : void 0,
							cursorPosition: new h.$ys({
								line: Xe.lineNumber - 1,
								column: Xe.column - 1,
							}),
							selection: void 0,
							languageId: "",
							fileVersion: Lt,
							workspaceRootPath: this.nb.getWorkspaceFolder(Ye)?.uri.fsPath,
						});
				}
				async fastPeriodicallyReloadCppConfig() {
					Date.now() - this.h > 1e3 * 60 &&
						(await this.loadCppConfigIncludingHandlingProAccess(),
						this.Z.setDebouncingDurations(this.getNewDebounceDurations()),
						this.Jb.handleNewImportPredictionConfig());
				}
				async loadCppConfigIncludingHandlingProAccess() {
					(this.h = Date.now()), await this.keepCppModelStateUpdated();
					const ze = await (await this.aiClient()).cppConfig(
						new f.$YG({ model: this.Nb().cppModel ?? "" }),
					);
					this._applyConfig(ze),
						this.Ib.setGeoCppBackendUrl(ze.geoCppBackendUrl);
				}
				async forceApplyCppConfig() {
					const ze = await (await this.aiClient()).cppConfig(new f.$YG({}));
					this._applyConfig(ze);
				}
				async _applyConfig(Ye) {
					const ze =
						this.ib.applicationUserPersistentStorage.cppConfig
							?.shouldLetUserEnableCppEvenIfNotPro;
					this.Nb().cppEnabled === !0 &&
						Ye.shouldLetUserEnableCppEvenIfNotPro === !1 &&
						ze === !0 &&
						(0, le.$sJ)(this.ob.membershipType()) === !1 &&
						this.ib.setNonPersistentStorage("showingCppUpsell", !0),
						this.ib.setApplicationUserPersistentStorage("cppConfig", Ye),
						this.Eb.onlyLocalProvider?.runCommand(
							le.EditHistoryActions.SetEnableCppWhitespaceDiffHistoryMode,
							{ enabled: Ye.useWhitespaceDiffHistory },
						),
						this.Eb.onlyLocalProvider?.runCommand(
							le.EditHistoryActions.SetEnableCppIncludeUnchangedLines,
							{ enabled: Ye.includeUnchangedLines },
						);
				}
				async getCppReport() {
					if (this.S !== void 0) return await this.S.getCppReport();
				}
			};
			(e.$9ed = Kt),
				(e.$9ed = Kt =
					Ne(
						[
							j(0, d.$dtb),
							j(1, a.$0zb),
							j(2, r.$MO),
							j(3, re.$H7b),
							j(4, n.$ek),
							j(5, Be.$kcc),
							j(6, p.$Vi),
							j(7, $.$x6b),
							j(8, v.$km),
							j(9, Ee.$Bk),
							j(10, K.$V7b),
							j(11, S.$aM),
							j(12, k.$Li),
							j(13, L.$wcc),
							j(14, ne.$d6b),
							j(15, D.$ycc),
							j(16, Y.$Led),
							j(17, X.$k3),
							j(18, V.$n5b),
							j(19, _.$IY),
							j(20, Z.$gj),
							j(21, E.$kfc),
							j(22, ye.$aN),
							j(23, ie.$3Db),
							j(24, pe.$HMb),
							j(25, Fe.$Zed),
							j(26, Oe.$Sed),
							j(27, Je.$i6b),
							j(28, E.$lfc),
							j(29, ke.$r8),
						],
						Kt,
					)),
				(0, w.$lK)(E.$jfc, Kt, w.InstantiationType.Delayed);
		},
	)
