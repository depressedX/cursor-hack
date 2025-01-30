import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/buffer.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/errors.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/network.js';
import '../../../base/common/severity.js';
import '../../../base/common/uri.js';
import '../../../editor/common/config/editorOptions.js';
import '../../../editor/common/languageSelector.js';
import '../../../editor/common/languages/languageConfiguration.js';
import '../../../editor/common/model.js';
import '../../../platform/extensions/common/extensions.js';
import '../../../platform/files/common/files.js';
import '../../../platform/log/common/log.js';
import '../../../platform/product/common/product.js';
import '../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../../../platform/remote/common/remoteHosts.js';
import '../../../platform/telemetry/common/telemetryUtils.js';
import '../../../platform/workspace/common/editSessions.js';
import './extHost.protocol.js';
import './extHostAiRelatedInformation.js';
import './extHostApiCommands.js';
import './extHostApiDeprecationService.js';
import './extHostAuthentication.js';
import './extHostBulkEdits.js';
import './extHostChatAgents2.js';
import './extHostChatVariables.js';
import './extHostClipboard.js';
import './extHostCodeInsets.js';
import './extHostCommands.js';
import './extHostComments.js';
import './extHostConfiguration.js';
import './extHostCursor.js';
import './extHostCustomEditors.js';
import './extHostDebugService.js';
import './extHostDecorations.js';
import './extHostDiagnostics.js';
import './extHostDialogs.js';
import './extHostDocumentContentProviders.js';
import './extHostDocumentSaveParticipant.js';
import './extHostDocuments.js';
import './extHostDocumentsAndEditors.js';
import './extHostEditorTabs.js';
import './extHostEmbedding.js';
import './extHostEmbeddingVector.js';
import './extHostExtensionService.js';
import './extHostFileSystem.js';
import './extHostFileSystemConsumer.js';
import './extHostFileSystemEventService.js';
import './extHostFileSystemInfo.js';
import './extHostInitDataService.js';
import './extHostInteractive.js';
import './extHostLabelService.js';
import './extHostLanguageFeatures.js';
import './extHostLanguageModelTools.js';
import './extHostLanguageModels.js';
import './extHostLanguages.js';
import './extHostLocalizationService.js';
import './extHostManagedSockets.js';
import './extHostMessageService.js';
import './extHostNotebook.js';
import './extHostNotebookDocumentSaveParticipant.js';
import './extHostNotebookDocuments.js';
import './extHostNotebookEditors.js';
import './extHostNotebookKernels.js';
import './extHostNotebookRenderers.js';
import './extHostOutput.js';
import './extHostProfileContentHandler.js';
import './extHostProgress.js';
import './extHostQuickDiff.js';
import './extHostQuickOpen.js';
import './extHostRpcService.js';
import './extHostSCM.js';
import './extHostSearch.js';
import './extHostSecretState.js';
import './extHostShare.js';
import './extHostSpeech.js';
import './extHostStatusBar.js';
import './extHostStorage.js';
import './extHostStoragePaths.js';
import './extHostTask.js';
import './extHostTelemetry.js';
import './extHostTerminalService.js';
import './extHostTerminalShellIntegration.js';
import './extHostTesting.js';
import './extHostTextEditors.js';
import './extHostTheming.js';
import './extHostTimeline.js';
import './extHostTracingService.js';
import './extHostTreeViews.js';
import './extHostTunnelService.js';
import './extHostTypeConverters.js';
import './extHostTypes.js';
import './extHostUriOpener.js';
import './extHostUriTransformerService.js';
import './extHostUrls.js';
import './extHostWebview.js';
import './extHostWebviewPanels.js';
import './extHostWebviewView.js';
import './extHostWindow.js';
import './extHostWorkspace.js';
import '../../contrib/debug/common/debug.js';
import '../../services/extensions/common/extensionHostProtocol.js';
import '../../services/extensions/common/extensions.js';
import '../../services/search/common/searchExtTypes.js';
import '../../../platform/tracing/common/tracing.js';
define(
		Pe[611],
		Ne([
			1, 0, 22, 23, 12, 4, 3, 16, 58, 2, 179, 473, 459, 82, 25, 32, 14, 181,
			492, 139, 140, 511, 6, 557, 584, 144, 195, 561, 562, 563, 541, 530, 44,
			564, 56, 543, 565, 149, 300, 566, 544, 558, 567, 568, 93, 117, 545, 559,
			75, 569, 115, 570, 92, 34, 585, 546, 571, 572, 196, 573, 190, 191, 547,
			602, 575, 515, 576, 586, 577, 306, 548, 578, 579, 580, 21, 581, 150, 192,
			582, 549, 583, 193, 146, 148, 143, 62, 304, 147, 587, 560, 588, 298, 589,
			116, 17, 11, 550, 112, 551, 145, 590, 591, 299, 63, 187, 142, 29, 83, 284,
		]),
		function (
			we,
			t,
			e,
			r,
			S,
			N,
			P,
			I,
			l,
			n,
			p,
			y,
			d,
			k,
			g,
			c,
			h,
			$,
			T,
			a,
			u,
			s,
			f,
			o,
			w,
			m,
			E,
			R,
			C,
			O,
			A,
			J,
			L,
			b,
			F,
			D,
			M,
			z,
			Q,
			H,
			B,
			U,
			Z,
			W,
			G,
			fe,
			ae,
			Se,
			he,
			_,
			oe,
			ke,
			ge,
			ee,
			me,
			ne,
			de,
			Le,
			Ce,
			je,
			We,
			pe,
			Re,
			lt,
			Ye,
			Ze,
			Ge,
			se,
			re,
			x,
			V,
			te,
			Me,
			ze,
			et,
			ot,
			gt,
			St,
			Et,
			pt,
			dt,
			ve,
			Ee,
			Ae,
			j,
			X,
			Je,
			Oe,
			qe,
			$e,
			Ie,
			Ue,
			at,
			ut,
			Tt,
			He,
			kt,
			Ot,
			Jt,
			Vt,
			Ht,
			At,
			jt,
			zt,
			Yt,
			Mt,
			yt,
			Gt,
			qt,
		) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }),
				(t.$hjd = Qt),
				(S = tt(S)),
				(l = On(l)),
				(d = tt(d)),
				(c = tt(c)),
				($ = On($)),
				(Tt = tt(Tt)),
				(He = tt(He)),
				(qt = tt(qt));
			function Qt(Nt) {
				const Lt = Nt.get(ee.$98),
					it = Nt.get(ge.$88),
					ce = Nt.get(oe.$uhd),
					ye = Nt.get(he.$6hd),
					Dt = Nt.get(zt.$m9),
					on = Nt.get(j.$6db),
					vn = Nt.get(F.$phd),
					rn = Nt.get(Ot.$j9),
					ft = Nt.get(et.$08),
					un = Nt.get(ve.$Nhd),
					gn = Nt.get(Ee.$vhd),
					wn = Nt.get(h.$jk),
					Bt = Nt.get(h.$ik),
					an = Nt.get(ut.$3pc),
					Zt = Nt.get(m.$9gd),
					cn = Nt.get(jt.$gjd),
					dn = Nt.get(St.$Xhd),
					ln = Nt.get(fe.$Ehd),
					Xt = Nt.get(pe.$2hd),
					xt = Nt.get(E.$ehd),
					_t = Nt.get(Ce.$Uhd),
					$n = Nt.get(Ue.$rhd);
				ft.set(f.$mbb.ExtHostFileSystemInfo, it),
					ft.set(f.$mbb.ExtHostLogLevelServiceShape, wn),
					ft.set(f.$mbb.ExtHostWorkspace, Dt),
					ft.set(f.$mbb.ExtHostConfiguration, vn),
					ft.set(f.$mbb.ExtHostExtensionService, ye),
					ft.set(f.$mbb.ExtHostStorage, un),
					ft.set(f.$mbb.ExtHostTunnelService, an),
					ft.set(f.$mbb.ExtHostWindow, cn),
					ft.set(f.$mbb.ExtHostSecretState, dn),
					ft.set(f.$mbb.ExtHostTelemetry, on),
					ft.set(f.$mbb.ExtHostEditorTabs, ln),
					ft.set(f.$mbb.ExtHostManagedSockets, Xt),
					ft.set(f.$mbb.ExtHostAuthentication, xt),
					ft.set(f.$mbb.ExtHostChatProvider, _t);
				const mt = ft.set(f.$mbb.ExtHostDecorations, Nt.get(Q.$jid)),
					K = ft.set(f.$mbb.ExtHostDocumentsAndEditors, Nt.get(G.$Xdb)),
					ie = ft.set(f.$mbb.ExtHostCommands, Nt.get(L.$8db)),
					hn = ft.set(f.$mbb.ExtHostTerminalService, Nt.get(X.$Qhd)),
					Ln = ft.set(f.$mbb.ExtHostTerminalShellIntegration, Nt.get(Je.$9id)),
					Kt = ft.set(f.$mbb.ExtHostDebugService, Nt.get(z.$did)),
					En = ft.set(f.$mbb.ExtHostSearch, Nt.get(gt.$Eid)),
					mn = ft.set(f.$mbb.ExtHostTask, Nt.get(Ae.$8id)),
					bn = ft.set(f.$mbb.ExtHostOutputService, Nt.get(x.$Uid)),
					In = ft.set(f.$mbb.ExtHostLocalization, Nt.get(We.$1hd)),
					Pn = ft.set(f.$mbb.ExtHostUrls, new Jt.$djd(ft)),
					yn = ft.set(f.$mbb.ExtHostDocuments, new W.$bhd(ft, K)),
					An = ft.set(
						f.$mbb.ExtHostDocumentContentProviders,
						new U.$lid(ft, K, Bt),
					),
					kn = ft.set(
						f.$mbb.ExtHostDocumentSaveParticipant,
						new Z.$mid(Bt, yn, ft.getProxy(f.$lbb.MainThreadBulkEdits)),
					),
					sn = ft.set(
						f.$mbb.ExtHostNotebook,
						new lt.$Hid(ft, ie, K, yn, ce, En, Bt),
					),
					Nn = ft.set(f.$mbb.ExtHostNotebookDocuments, new Ze.$Oid(sn)),
					Cn = ft.set(f.$mbb.ExtHostNotebookEditors, new Ge.$Pid(Bt, sn)),
					Rn = ft.set(
						f.$mbb.ExtHostNotebookKernels,
						new se.$Qid(ft, Lt, sn, ie, Bt),
					),
					Ve = ft.set(f.$mbb.ExtHostNotebookRenderers, new re.$Sid(ft, sn)),
					Qe = ft.set(
						f.$mbb.ExtHostNotebookDocumentSaveParticipant,
						new Ye.$Nid(Bt, sn, ft.getProxy(f.$lbb.MainThreadBulkEdits)),
					),
					Fe = ft.set(f.$mbb.ExtHostEditors, new qe.$khd(ft, K)),
					Te = ft.set(
						f.$mbb.ExtHostTreeViews,
						new at.$bjd(ft.getProxy(f.$lbb.MainThreadTreeViews), ie, Bt),
					),
					Xe = ft.set(
						f.$mbb.ExtHostEditorInsets,
						new J.$lhd(
							ft.getProxy(f.$lbb.MainThreadEditorInsets),
							Fe,
							Lt.remote,
						),
					),
					ct = ft.set(f.$mbb.ExtHostDiagnostics, new H.$ahd(ft, Bt, it, K)),
					$t = ft.set(
						f.$mbb.ExtHostLanguages,
						new je.$Lid(ft, yn, ie.converter, rn),
					),
					st = ft.set(
						f.$mbb.ExtHostLanguageFeatures,
						new de.$chd(ft, rn, yn, ie, ct, Bt, Zt, on),
					),
					It = ft.set(f.$mbb.ExtHostFileSystem, new _.$pid(ft, st)),
					bt = ft.set(
						f.$mbb.ExtHostFileSystemEventService,
						new ke.$qid(ft, Bt, K),
					),
					pn = ft.set(f.$mbb.ExtHostQuickOpen, (0, ze.$Yid)(ft, Dt, ie)),
					fn = ft.set(f.$mbb.ExtHostSCM, new ot.$1id(ft, ie, yn, Bt)),
					Sn = ft.set(f.$mbb.ExtHostQuickDiff, new Me.$Xid(ft, rn)),
					ht = ft.set(f.$mbb.ExtHostShare, new Et.$2id(ft, rn)),
					q = ft.set(f.$mbb.ExtHostComments, (0, b.$mhd)(ft, ie, yn)),
					Y = ft.set(
						f.$mbb.ExtHostProgress,
						new te.$Wid(ft.getProxy(f.$lbb.MainThreadProgress)),
					),
					_n = ft.set(f.$mbb.ExtHostLabelService, new ne.$Jid(ft)),
					ei = ft.set(f.$mbb.ExtHostTheming, new $e.$$id(ft)),
					Wt = ft.set(f.$mbb.ExtHostCursor, new D.$shd(ft, $n)),
					di = ft.set(f.$mbb.ExtHostTimeline, new Ie.$ajd(ft, ie)),
					Hn = ft.set(
						f.$mbb.ExtHostWebviews,
						new Vt.$zhd(ft, Lt.remote, Dt, Bt, Zt),
					),
					Kn = ft.set(f.$mbb.ExtHostWebviewPanels, new Ht.$Chd(ft, Hn, Dt)),
					hi = ft.set(
						f.$mbb.ExtHostCustomEditors,
						new M.$Dhd(ft, yn, gn, Hn, Kn),
					),
					mi = ft.set(f.$mbb.ExtHostWebviewViews, new At.$ejd(ft, Hn)),
					zn = ft.set(f.$mbb.ExtHostTesting, Nt.get(Oe.$$hd)),
					Ai = ft.set(f.$mbb.ExtHostUriOpeners, new kt.$cjd(ft)),
					ti = ft.set(f.$mbb.ExtHostProfileContentHandlers, new V.$Vid(ft));
				ft.set(f.$mbb.ExtHostInteractive, new me.$Iid(ft, sn, K, ie, Bt));
				const Wn = ft.set(
						f.$mbb.ExtHostChatAgents2,
						new C.$hhd(ft, Bt, ie, yn),
					),
					$i = ft.set(f.$mbb.ExtHostChatVariables, new O.$ihd(ft)),
					ni = ft.set(f.$mbb.ExtHostLanguageModelTools, new Le.$Kid(ft)),
					ii = ft.set(f.$mbb.ExtHostAiRelatedInformation, new o.$8gd(ft)),
					Mi = ft.set(f.$mbb.ExtHostAiEmbeddingVector, new Se.$oid(ft)),
					fi = ft.set(f.$mbb.ExtHostStatusBar, new dt.$5id(ft, ie.converter)),
					si = ft.set(f.$mbb.ExtHostSpeech, new pt.$3id(ft)),
					Vn = ft.set(f.$mbb.ExtHostEmbeddings, new ae.$nid(ft)),
					Ei = Object.values(f.$mbb);
				ft.assertRegistered(Ei);
				const ki = new R.$ghd(ft, K),
					Fi = new A.$jhd(ft),
					Yn = new Re.$Mid(ft, Bt),
					gi = new B.$kid(ft);
				return (
					w.$dhd.register(ie),
					function (_e, Mn, Ii) {
						function Rt(be) {
							return (Be, xe, Ct) => {
								const tn = be((Tn) => {
									try {
										Be.call(xe, Tn);
									} catch (ci) {
										S.$5(
											new Error(
												`[ExtensionListenerError] Extension '${_e.identifier.value}' FAILED to handle event: ${ci.toString()}`,
												{ cause: ci },
											),
										),
											on.onExtensionError(_e.identifier, ci);
									}
								});
								return Ct?.push(tn), tn;
							};
						}
						const en = (function () {
							let be = !_e.isUnderDevelopment;
							function Be() {
								be ||
									(Bt.info(
										`Extension '${_e.identifier.value}' uses a document selector without scheme. Learn more about this: https://go.microsoft.com/fwlink/?linkid=872305`,
									),
									(be = !0));
							}
							return function xe(Ct) {
								if (Array.isArray(Ct)) Ct.forEach(xe);
								else if (typeof Ct == "string") Be();
								else {
									const tn = Ct;
									typeof tn.scheme > "u" && Be(),
										typeof tn.exclusive == "boolean" &&
											(0, yt.$u2)(_e, "documentFiltersExclusive");
								}
								return Ct;
							};
						})();
						function ri(be, Be, ...xe) {
							return (0, yt.$u2)(_e, be), Be(...xe);
						}
						const Fn = {
							get onDidChangeCursorCreds() {
								return Wt.onDidChangeCursorCreds;
							},
							get productCommit() {
								return Lt.commit;
							},
							get rendererPerformanceTimeOrigin() {
								return Lt.rendererPerformanceTimeOrigin;
							},
							get onDidChangePrivacyMode() {
								return Wt.onDidChangePrivacyMode;
							},
							get onDidChangeCursorAuthToken() {
								return Wt.onDidChangeCursorAuthToken;
							},
							get onDidRequestRepoIndex() {
								return Wt.onDidRequestRepoIndex;
							},
							get onDidRequestRepoInterrupt() {
								return Wt.onDidRequestRepoInterrupt;
							},
							get onDidChangeFileSyncClientEnabled() {
								return Wt.onDidChangeFileSyncClientEnabled;
							},
							get onDidChangeCppEnabled() {
								return Wt.onDidChangeCppEnabled;
							},
							get onDidChangeCppConfig() {
								return Wt.onDidChangeCppConfig;
							},
							get onDidChangeMembershipType() {
								return Wt.onDidChangeMembershipType;
							},
							triggerRefreshCursorAuthToken: () =>
								Wt.triggerRefreshCursorAuthToken(),
							onDidChangeIndexingStatus: () => Wt.onDidChangeIndexingStatus(),
							getCppSessionId: () => Wt.getCppSessionId(),
							getCppTelemEnabled: () => Wt.getCppTelemEnabled(),
							getCursorCreds: () => Wt.getCursorCreds(),
							getPrivacyMode: () => Wt.getPrivacyMode(),
							isFileSyncClientEnabled: () => Wt.isFileSyncClientEnabled(),
							cppEnabled: () => Wt.cppEnabled(),
							cppConfig: () => Wt.cppConfig(),
							membershipType: () => Wt.membershipType(),
							preferredEmbeddingModel: () => Wt.preferredEmbeddingModel(),
							shouldIndexNewRepos: () => Wt.shouldIndex(),
							getCursorAuthToken: () => Wt.getCursorAuthToken(),
							updateUploadProgress(be, Be, xe = !1) {
								return Wt.updateUploadProgress(be, Be, xe);
							},
							showWebCmdKInputBox(be) {
								return Wt.showWebCmdKInputBox(be);
							},
							processAiReaderMessage(be) {
								return Wt.processAiReaderMessage(be);
							},
							registerIndexProvider(be) {
								return Wt.registerIndexProvider(be);
							},
							registerExtHostEventLogger(be) {
								return Wt.registerExtHostEventLogger(be);
							},
							registerRequesterProvider(be) {
								return Wt.registerRequesterProvider(be);
							},
							registerIsNewIndexProvider(be) {
								return Wt.registerIsNewIndexProvider(be);
							},
							registerShadowClientProvider(be) {
								return Wt.registerShadowClientProvider(be);
							},
							registerShadowServerProvider(be) {
								return Wt.registerShadowServerProvider(be);
							},
							registerMetricsProvider(be) {
								return Wt.registerMetricsProvider(be);
							},
							registerDiffingProvider(be) {
								return Wt.registerDiffingProvider(be);
							},
							registerEverythingProvider(be) {
								return Wt.registerEverythingProvider(be);
							},
							registerEverythingProviderAllLocal(be) {
								return Wt.registerEverythingProviderAllLocal(be);
							},
							registerEditHistoryProvider(be) {
								return Wt.registerEditHistoryProvider(be);
							},
							registerLspSubgraphProvider(be) {
								return Wt.registerLspSubgraphProvider(be);
							},
							registerConnectTransportProvider: (be) =>
								Wt.registerConnectTransportProvider(be),
							getAllRequestHeadersExceptAccessToken: (be) => {
								(0, T.$rJ)({
									req: be.req,
									machineId: ai.machineId,
									macMachineId: ai.macMachineId,
									base64Fn: (Be) => (0, e.$cf)(e.$Te.wrap(Be), !1, !0),
									cursorVersion: Lt.version,
									privacyMode: Wt.getPrivacyMode(),
									backupRequestId: be.requestId,
									clientKey: be.clientKey,
								});
								try {
									be.req.header.has(qt.$HOb) ||
										be.req.header.set(qt.$HOb, qt.$NOb());
								} catch {}
							},
							getAllFiles() {
								return Wt.getRepoFiles();
							},
							publicLogCapture(be) {
								Wt.publicLogCapture(be);
							},
							getSemanticSearchResultsFromServer: (be) =>
								Wt.getSemanticSearchResultsFromServer(be),
						};
						for (const be of Object.keys(Fn)) {
							const Be = be;
							let xe = Object.getOwnPropertyDescriptor(Fn, Be);
							if (xe?.get) {
								let Ct = xe.get;
								Object.defineProperty(Fn, Be, {
									get: () => ri("cursor", Ct.bind(Fn)),
									enumerable: !0,
									configurable: !0,
								});
							} else if (typeof Fn[Be] == "function") {
								let Ct = Fn[Be];
								if (typeof Ct == "function") {
									const tn = Ct;
									Object.defineProperty(Fn, Be, {
										value: (...Tn) => ri("cursor", tn.bind(Fn), ...Tn),
										enumerable: !0,
										configurable: !0,
									});
								}
							}
						}
						const Gn = {
							addBreadcrumb: qt.$LOb,
							captureException: qt.$MOb,
							getTraceparent: qt.$NOb,
							runInSpan: qt.$JOb,
							span: qt.span,
							withSpan: qt.$KOb,
						};
						for (const be of Object.keys(Gn)) {
							const Be = be,
								xe = Gn[Be];
							typeof xe == "function" &&
								(Gn[Be] = (...Ct) => ri("cursor", xe, ...Ct));
						}
						const Pi = {
								getSession(be, Be, xe) {
									return (
										typeof xe?.forceNewSession == "object" &&
											xe.forceNewSession.learnMore &&
											(0, yt.$u2)(_e, "authLearnMore"),
										xt.getSession(_e, be, Be, xe)
									);
								},
								getAccounts(be) {
									return xt.getAccounts(be);
								},
								async hasSession(be, Be) {
									return (
										(0, yt.$u2)(_e, "authSession"),
										!!(await xt.getSession(_e, be, Be, { silent: !0 }))
									);
								},
								get onDidChangeSessions() {
									return Rt(xt.onDidChangeSessions);
								},
								registerAuthenticationProvider(be, Be, xe, Ct) {
									return xt.registerAuthenticationProvider(be, Be, xe, Ct);
								},
							},
							Ni = {
								registerCommand(be, Be, xe) {
									return ie.registerCommand(!0, be, Be, xe, void 0, _e);
								},
								registerTextEditorCommand(be, Be, xe) {
									return ie.registerCommand(
										!0,
										be,
										(...Ct) => {
											const tn = Fe.getActiveTextEditor();
											if (!tn) {
												Bt.warn(
													"Cannot execute " +
														be +
														" because there is no active text editor.",
												);
												return;
											}
											return tn
												.edit((Tn) => {
													Be.apply(xe, [tn, Tn, ...Ct]);
												})
												.then(
													(Tn) => {
														Tn ||
															Bt.warn(
																"Edits from command " +
																	be +
																	" were not applied.",
															);
													},
													(Tn) => {
														Bt.warn(
															"An error occurred while running command " + be,
															Tn,
														);
													},
												);
										},
										void 0,
										void 0,
										_e,
									);
								},
								registerDiffInformationCommand: (be, Be, xe) => (
									(0, yt.$u2)(_e, "diffCommand"),
									ie.registerCommand(
										!0,
										be,
										async (...Ct) => {
											const tn = K.activeEditor(!0);
											if (!tn) {
												Bt.warn(
													"Cannot execute " +
														be +
														" because there is no active text editor.",
												);
												return;
											}
											const Tn = await Fe.getDiffInformation(tn.id);
											Be.apply(xe, [Tn, ...Ct]);
										},
										void 0,
										void 0,
										_e,
									)
								),
								executeCommand(be, ...Be) {
									return ie.executeCommand(be, ...Be);
								},
								getCommands(be = !1) {
									return ie.getCommands(be);
								},
							},
							Ji = _e.identifier.value === "ms-python.python",
							Ri = _e.identifier.value === "ms-python.vscode-pylance",
							ai = {
								get machineId() {
									return Lt.telemetryInfo.machineId;
								},
								get macMachineId() {
									return Lt.telemetryInfo.macMachineId;
								},
								get sessionId() {
									return Lt.telemetryInfo.sessionId;
								},
								get language() {
									return Lt.environment.appLanguage;
								},
								get appName() {
									return Ri || Ji
										? "Visual Studio Code"
										: Lt.environment.appName;
								},
								get appRoot() {
									return Lt.environment.appRoot?.fsPath ?? "";
								},
								get appHost() {
									return Lt.environment.appHost;
								},
								get uriScheme() {
									return Lt.environment.appUriScheme;
								},
								get clipboard() {
									return Fi.value;
								},
								get shell() {
									return hn.getDefaultShell(!1);
								},
								get onDidChangeShell() {
									return Rt(hn.onDidChangeShell);
								},
								get isTelemetryEnabled() {
									return on.getTelemetryConfiguration();
								},
								get onDidChangeTelemetryEnabled() {
									return Rt(on.onDidChangeTelemetryEnabled);
								},
								get telemetryConfiguration() {
									return (0, yt.$u2)(_e, "telemetry"), on.getTelemetryDetails();
								},
								get onDidChangeTelemetryConfiguration() {
									return (
										(0, yt.$u2)(_e, "telemetry"),
										Rt(on.onDidChangeTelemetryConfiguration)
									);
								},
								get isNewAppInstall() {
									return (0, j.$5db)(Lt.telemetryInfo.firstSessionDate);
								},
								createTelemetryLogger(be, Be) {
									return (
										j.$4db.validateSender(be), on.instantiateLogger(_e, be, Be)
									);
								},
								openExternal(be, Be) {
									return cn.openUri(be, {
										allowTunneling: !!Lt.remote.authority,
										allowContributedOpeners: Be?.allowContributedOpeners,
									});
								},
								async asExternalUri(be) {
									if (be.scheme === Lt.environment.appUriScheme)
										return Pn.createAppUri(be);
									try {
										return await cn.asExternalUri(be, {
											allowTunneling: !!Lt.remote.authority,
										});
									} catch (Be) {
										if (
											(0, I.$Vg)(be, I.Schemas.http) ||
											(0, I.$Vg)(be, I.Schemas.https)
										)
											return be;
										throw Be;
									}
								},
								get remoteName() {
									return (0, a.$xn)(Lt.remote.authority);
								},
								get remoteAuthority() {
									return (0, yt.$u2)(_e, "resolvers"), Lt.remote.authority;
								},
								get uiKind() {
									return Lt.uiKind;
								},
								get logLevel() {
									return Bt.getLevel();
								},
								get onDidChangeLogLevel() {
									return Rt(Bt.onDidChangeLogLevel);
								},
								get appQuality() {
									return (0, yt.$u2)(_e, "resolvers"), Lt.quality;
								},
								get appCommit() {
									return (0, yt.$u2)(_e, "resolvers"), Lt.commit;
								},
							};
						Lt.environment.extensionTestsLocationURI || Object.freeze(ai);
						const bi = {
								createTestController(be, Be, xe) {
									return zn.createTestController(_e, be, Be, xe);
								},
								createTestObserver() {
									return (
										(0, yt.$u2)(_e, "testObserver"), zn.createTestObserver()
									);
								},
								runTests(be) {
									return (0, yt.$u2)(_e, "testObserver"), zn.runTests(be);
								},
								registerTestFollowupProvider(be) {
									return (
										(0, yt.$u2)(_e, "testObserver"),
										zn.registerTestFollowupProvider(be)
									);
								},
								get onDidChangeTestResults() {
									return (
										(0, yt.$u2)(_e, "testObserver"), Rt(zn.onResultsChanged)
									);
								},
								get testResults() {
									return (0, yt.$u2)(_e, "testObserver"), zn.results;
								},
							},
							Xn = Lt.remote.isRemote
								? He.ExtensionKind.Workspace
								: He.ExtensionKind.UI,
							wi = {
								getExtension(be, Be) {
									if ($.default.modifiedExtensionDependencies?.[be]) {
										const Ct = $.default.modifiedExtensionDependencies[be];
										be !== Ct && (be = Ct);
									}
									(0, yt.$t2)(_e, "extensionsAny") || (Be = !1);
									const xe = Mn.mine.getExtensionDescription(be);
									if (xe) return new he.$7hd(ye, _e.identifier, xe, Xn, !1);
									if (Be) {
										const Ct = Mn.all.getExtensionDescription(be);
										if (Ct) return new he.$7hd(ye, _e.identifier, Ct, Xn, !0);
									}
								},
								get all() {
									_e.identifier.value;
									const be = [];
									for (const Be of Mn.mine.getAllExtensionDescriptions())
										be.push(new he.$7hd(ye, _e.identifier, Be, Xn, !1));
									return be;
								},
								get allAcrossExtensionHosts() {
									(0, yt.$u2)(_e, "extensionsAny");
									const be = new g.$Hn(
											Mn.mine
												.getAllExtensionDescriptions()
												.map((xe) => xe.identifier),
										),
										Be = [];
									for (const xe of Mn.all.getAllExtensionDescriptions()) {
										const Ct = !be.has(xe.identifier);
										Be.push(new he.$7hd(ye, _e.identifier, xe, Xn, Ct));
									}
									return Be;
								},
								get onDidChange() {
									return (0, yt.$t2)(_e, "extensionsAny")
										? Rt(N.Event.any(Mn.mine.onDidChange, Mn.all.onDidChange))
										: Rt(Mn.mine.onDidChange);
								},
							},
							Bi = {
								createDiagnosticCollection(be) {
									return ct.createDiagnosticCollection(_e.identifier, be);
								},
								get onDidChangeDiagnostics() {
									return Rt(ct.onDidChangeDiagnostics);
								},
								getDiagnostics: (be) => ct.getDiagnostics(be),
								getLanguages() {
									return $t.getLanguages();
								},
								setTextDocumentLanguage(be, Be) {
									return $t.changeLanguage(be.uri, Be);
								},
								match(be, Be) {
									const xe = Tt.LanguageSelector.from(be);
									let Ct;
									return (
										(0, y.$4L)(xe) &&
											(Ct = sn.notebookDocuments.find((tn) =>
												tn.apiNotebook
													.getCells()
													.find((Tn) => Tn.document === Be),
											)?.apiNotebook),
										(0, y.$3L)(
											xe,
											Be.uri,
											Be.languageId,
											!0,
											Ct?.uri,
											Ct?.notebookType,
										)
									);
								},
								registerCodeActionsProvider(be, Be, xe) {
									return st.registerCodeActionProvider(_e, en(be), Be, xe);
								},
								registerDocumentPasteEditProvider(be, Be, xe) {
									return (
										(0, yt.$u2)(_e, "documentPaste"),
										st.registerDocumentPasteEditProvider(_e, en(be), Be, xe)
									);
								},
								registerCodeLensProvider(be, Be) {
									return st.registerCodeLensProvider(_e, en(be), Be);
								},
								registerDefinitionProvider(be, Be) {
									return st.registerDefinitionProvider(_e, en(be), Be);
								},
								registerDeclarationProvider(be, Be) {
									return st.registerDeclarationProvider(_e, en(be), Be);
								},
								registerImplementationProvider(be, Be) {
									return st.registerImplementationProvider(_e, en(be), Be);
								},
								registerTypeDefinitionProvider(be, Be) {
									return st.registerTypeDefinitionProvider(_e, en(be), Be);
								},
								registerHoverProvider(be, Be) {
									return st.registerHoverProvider(
										_e,
										en(be),
										Be,
										_e.identifier,
									);
								},
								registerEvaluatableExpressionProvider(be, Be) {
									return st.registerEvaluatableExpressionProvider(
										_e,
										en(be),
										Be,
										_e.identifier,
									);
								},
								registerInlineValuesProvider(be, Be) {
									return st.registerInlineValuesProvider(
										_e,
										en(be),
										Be,
										_e.identifier,
									);
								},
								registerDocumentHighlightProvider(be, Be) {
									return st.registerDocumentHighlightProvider(_e, en(be), Be);
								},
								registerMultiDocumentHighlightProvider(be, Be) {
									return st.registerMultiDocumentHighlightProvider(
										_e,
										en(be),
										Be,
									);
								},
								registerLinkedEditingRangeProvider(be, Be) {
									return st.registerLinkedEditingRangeProvider(_e, en(be), Be);
								},
								registerReferenceProvider(be, Be) {
									return st.registerReferenceProvider(_e, en(be), Be);
								},
								registerRenameProvider(be, Be) {
									return st.registerRenameProvider(_e, en(be), Be);
								},
								registerNewSymbolNamesProvider(be, Be) {
									return (
										(0, yt.$u2)(_e, "newSymbolNamesProvider"),
										st.registerNewSymbolNamesProvider(_e, en(be), Be)
									);
								},
								registerDocumentSymbolProvider(be, Be, xe) {
									return st.registerDocumentSymbolProvider(_e, en(be), Be, xe);
								},
								registerWorkspaceSymbolProvider(be) {
									return st.registerWorkspaceSymbolProvider(_e, be);
								},
								registerDocumentFormattingEditProvider(be, Be) {
									return st.registerDocumentFormattingEditProvider(
										_e,
										en(be),
										Be,
									);
								},
								registerDocumentRangeFormattingEditProvider(be, Be) {
									return st.registerDocumentRangeFormattingEditProvider(
										_e,
										en(be),
										Be,
									);
								},
								registerOnTypeFormattingEditProvider(be, Be, xe, ...Ct) {
									return st.registerOnTypeFormattingEditProvider(
										_e,
										en(be),
										Be,
										[xe].concat(Ct),
									);
								},
								registerDocumentSemanticTokensProvider(be, Be, xe) {
									return st.registerDocumentSemanticTokensProvider(
										_e,
										en(be),
										Be,
										xe,
									);
								},
								registerDocumentRangeSemanticTokensProvider(be, Be, xe) {
									return st.registerDocumentRangeSemanticTokensProvider(
										_e,
										en(be),
										Be,
										xe,
									);
								},
								registerSignatureHelpProvider(be, Be, xe, ...Ct) {
									return typeof xe == "object"
										? st.registerSignatureHelpProvider(_e, en(be), Be, xe)
										: st.registerSignatureHelpProvider(
												_e,
												en(be),
												Be,
												typeof xe > "u" ? [] : [xe, ...Ct],
											);
								},
								registerCompletionItemProvider(be, Be, ...xe) {
									return st.registerCompletionItemProvider(_e, en(be), Be, xe);
								},
								registerInlineCompletionItemProvider(be, Be, xe) {
									return (
										Be.handleDidShowCompletionItem &&
											(0, yt.$u2)(_e, "inlineCompletionsAdditions"),
										Be.handleDidPartiallyAcceptCompletionItem &&
											(0, yt.$u2)(_e, "inlineCompletionsAdditions"),
										xe && (0, yt.$u2)(_e, "inlineCompletionsAdditions"),
										st.registerInlineCompletionsProvider(_e, en(be), Be, xe)
									);
								},
								registerInlineEditProvider(be, Be) {
									return (
										(0, yt.$u2)(_e, "inlineEdit"),
										st.registerInlineEditProvider(_e, en(be), Be)
									);
								},
								registerDocumentLinkProvider(be, Be) {
									return st.registerDocumentLinkProvider(_e, en(be), Be);
								},
								registerColorProvider(be, Be) {
									return st.registerColorProvider(_e, en(be), Be);
								},
								registerFoldingRangeProvider(be, Be) {
									return st.registerFoldingRangeProvider(_e, en(be), Be);
								},
								registerSelectionRangeProvider(be, Be) {
									return st.registerSelectionRangeProvider(_e, be, Be);
								},
								registerCallHierarchyProvider(be, Be) {
									return st.registerCallHierarchyProvider(_e, be, Be);
								},
								registerTypeHierarchyProvider(be, Be) {
									return st.registerTypeHierarchyProvider(_e, be, Be);
								},
								setLanguageConfiguration: (be, Be) =>
									st.setLanguageConfiguration(_e, be, Be),
								getTokenInformationAtPosition(be, Be) {
									return (
										(0, yt.$u2)(_e, "tokenInformation"),
										$t.tokenAtPosition(be, Be)
									);
								},
								registerInlayHintsProvider(be, Be) {
									return st.registerInlayHintsProvider(_e, be, Be);
								},
								createLanguageStatusItem(be, Be) {
									return $t.createLanguageStatusItem(_e, be, Be);
								},
								registerDocumentDropEditProvider(be, Be, xe) {
									return st.registerDocumentOnDropEditProvider(
										_e,
										be,
										Be,
										(0, yt.$t2)(_e, "documentPaste") ? xe : void 0,
									);
								},
							},
							Ci = {
								get activeTextEditor() {
									return Fe.getActiveTextEditor();
								},
								get visibleTextEditors() {
									return Fe.getVisibleTextEditors();
								},
								get activeTerminal() {
									return hn.activeTerminal;
								},
								get terminals() {
									return hn.terminals;
								},
								async showTextDocument(be, Be, xe) {
									n.URI.isUri(be) &&
										be.scheme === I.Schemas.vscodeRemote &&
										!be.authority &&
										Zt.report(
											"workspace.showTextDocument",
											_e,
											"A URI of 'vscode-remote' scheme requires an authority.",
										);
									const Ct = await (n.URI.isUri(be)
										? Promise.resolve(Qn.openTextDocument(be))
										: Promise.resolve(be));
									return Fe.showTextDocument(Ct, Be, xe);
								},
								createTextEditorDecorationType(be) {
									return Fe.createTextEditorDecorationType(_e, be);
								},
								onDidChangeActiveTextEditor(be, Be, xe) {
									return Rt(Fe.onDidChangeActiveTextEditor)(be, Be, xe);
								},
								onDidChangeVisibleTextEditors(be, Be, xe) {
									return Rt(Fe.onDidChangeVisibleTextEditors)(be, Be, xe);
								},
								onDidChangeTextEditorSelection(be, Be, xe) {
									return Rt(Fe.onDidChangeTextEditorSelection)(be, Be, xe);
								},
								onDidChangeTextEditorOptions(be, Be, xe) {
									return Rt(Fe.onDidChangeTextEditorOptions)(be, Be, xe);
								},
								onDidChangeTextEditorVisibleRanges(be, Be, xe) {
									return Rt(Fe.onDidChangeTextEditorVisibleRanges)(be, Be, xe);
								},
								onDidChangeTextEditorViewColumn(be, Be, xe) {
									return Rt(Fe.onDidChangeTextEditorViewColumn)(be, Be, xe);
								},
								onDidCloseTerminal(be, Be, xe) {
									return Rt(hn.onDidCloseTerminal)(be, Be, xe);
								},
								onDidOpenTerminal(be, Be, xe) {
									return Rt(hn.onDidOpenTerminal)(be, Be, xe);
								},
								onDidChangeActiveTerminal(be, Be, xe) {
									return Rt(hn.onDidChangeActiveTerminal)(be, Be, xe);
								},
								onDidChangeTerminalDimensions(be, Be, xe) {
									return (
										(0, yt.$u2)(_e, "terminalDimensions"),
										Rt(hn.onDidChangeTerminalDimensions)(be, Be, xe)
									);
								},
								onDidChangeTerminalState(be, Be, xe) {
									return Rt(hn.onDidChangeTerminalState)(be, Be, xe);
								},
								onDidWriteTerminalData(be, Be, xe) {
									return (
										(0, yt.$u2)(_e, "terminalDataWriteEvent"),
										Rt(hn.onDidWriteTerminalData)(be, Be, xe)
									);
								},
								onDidExecuteTerminalCommand(be, Be, xe) {
									return (
										(0, yt.$u2)(_e, "terminalExecuteCommandEvent"),
										Rt(hn.onDidExecuteTerminalCommand)(be, Be, xe)
									);
								},
								onDidChangeTerminalShellIntegration(be, Be, xe) {
									return Rt(Ln.onDidChangeTerminalShellIntegration)(be, Be, xe);
								},
								onDidStartTerminalShellExecution(be, Be, xe) {
									return Rt(Ln.onDidStartTerminalShellExecution)(be, Be, xe);
								},
								onDidEndTerminalShellExecution(be, Be, xe) {
									return Rt(Ln.onDidEndTerminalShellExecution)(be, Be, xe);
								},
								get state() {
									return cn.getState();
								},
								onDidChangeWindowState(be, Be, xe) {
									return Rt(cn.onDidChangeWindowState)(be, Be, xe);
								},
								showInformationMessage(be, ...Be) {
									return Yn.showMessage(
										_e,
										l.default.Info,
										be,
										Be[0],
										Be.slice(1),
									);
								},
								showWarningMessage(be, ...Be) {
									return Yn.showMessage(
										_e,
										l.default.Warning,
										be,
										Be[0],
										Be.slice(1),
									);
								},
								showErrorMessage(be, ...Be) {
									return Yn.showMessage(
										_e,
										l.default.Error,
										be,
										Be[0],
										Be.slice(1),
									);
								},
								showQuickPick(be, Be, xe) {
									return pn.showQuickPick(_e, be, Be, xe);
								},
								showWorkspaceFolderPick(be) {
									return pn.showWorkspaceFolderPick(be);
								},
								showInputBox(be, Be) {
									return pn.showInput(be, Be);
								},
								showOpenDialog(be) {
									return gi.showOpenDialog(_e, be);
								},
								showSaveDialog(be) {
									return gi.showSaveDialog(be);
								},
								createStatusBarItem(be, Be, xe) {
									let Ct, tn, Tn;
									return (
										typeof be == "string"
											? ((Ct = be), (tn = Be), (Tn = xe))
											: ((tn = be), (Tn = Be)),
										fi.createStatusBarEntry(_e, Ct, tn, Tn)
									);
								},
								setStatusBarMessage(be, Be) {
									return fi.setStatusBarMessage(be, Be);
								},
								withScmProgress(be) {
									return (
										Zt.report(
											"window.withScmProgress",
											_e,
											"Use 'withProgress' instead.",
										),
										Y.withProgress(
											_e,
											{ location: He.ProgressLocation.SourceControl },
											(Be, xe) => be({ report(Ct) {} }),
										)
									);
								},
								withProgress(be, Be) {
									return Y.withProgress(_e, be, Be);
								},
								createOutputChannel(be, Be) {
									return bn.createOutputChannel(be, Be, _e);
								},
								createWebviewPanel(be, Be, xe, Ct) {
									return Kn.createWebviewPanel(_e, be, Be, xe, Ct);
								},
								createWebviewTextEditorInset(be, Be, xe, Ct) {
									return (
										(0, yt.$u2)(_e, "editorInsets"),
										Xe.createWebviewEditorInset(be, Be, xe, Ct, _e)
									);
								},
								createTerminal(be, Be, xe) {
									return typeof be == "object"
										? "pty" in be
											? hn.createExtensionTerminal(be)
											: hn.createTerminalFromOptions(be)
										: hn.createTerminal(be, Be, xe);
								},
								registerTerminalLinkProvider(be) {
									return hn.registerLinkProvider(be);
								},
								registerTerminalProfileProvider(be, Be) {
									return hn.registerProfileProvider(_e, be, Be);
								},
								registerTerminalQuickFixProvider(be, Be) {
									return (
										(0, yt.$u2)(_e, "terminalQuickFixProvider"),
										hn.registerTerminalQuickFixProvider(
											be,
											_e.identifier.value,
											Be,
										)
									);
								},
								registerTreeDataProvider(be, Be) {
									return Te.registerTreeDataProvider(be, Be, _e);
								},
								createTreeView(be, Be) {
									return Te.createTreeView(be, Be, _e);
								},
								registerWebviewPanelSerializer: (be, Be) =>
									Kn.registerWebviewPanelSerializer(_e, be, Be),
								registerCustomEditorProvider: (be, Be, xe = {}) =>
									hi.registerCustomEditorProvider(_e, be, Be, xe),
								registerFileDecorationProvider(be) {
									return mt.registerFileDecorationProvider(be, _e);
								},
								registerUriHandler(be) {
									return Pn.registerUriHandler(_e, be);
								},
								createQuickPick() {
									return pn.createQuickPick(_e);
								},
								createInputBox() {
									return pn.createInputBox(_e);
								},
								get activeColorTheme() {
									return ei.activeColorTheme;
								},
								onDidChangeActiveColorTheme(be, Be, xe) {
									return Rt(ei.onDidChangeActiveColorTheme)(be, Be, xe);
								},
								registerWebviewViewProvider(be, Be, xe) {
									return mi.registerWebviewViewProvider(
										_e,
										be,
										Be,
										xe?.webviewOptions,
									);
								},
								get activeNotebookEditor() {
									return sn.activeNotebookEditor;
								},
								onDidChangeActiveNotebookEditor(be, Be, xe) {
									return Rt(sn.onDidChangeActiveNotebookEditor)(be, Be, xe);
								},
								get visibleNotebookEditors() {
									return sn.visibleNotebookEditors;
								},
								get onDidChangeVisibleNotebookEditors() {
									return Rt(sn.onDidChangeVisibleNotebookEditors);
								},
								onDidChangeNotebookEditorSelection(be, Be, xe) {
									return Rt(Cn.onDidChangeNotebookEditorSelection)(be, Be, xe);
								},
								onDidChangeNotebookEditorVisibleRanges(be, Be, xe) {
									return Rt(Cn.onDidChangeNotebookEditorVisibleRanges)(
										be,
										Be,
										xe,
									);
								},
								showNotebookDocument(be, Be) {
									return sn.showNotebookDocument(be, Be);
								},
								registerExternalUriOpener(be, Be, xe) {
									return (
										(0, yt.$u2)(_e, "externalUriOpener"),
										Ai.registerExternalUriOpener(_e.identifier, be, Be, xe)
									);
								},
								registerProfileContentHandler(be, Be) {
									return (
										(0, yt.$u2)(_e, "profileContentHandlers"),
										ti.registerProfileContentHandler(_e, be, Be)
									);
								},
								registerQuickDiffProvider(be, Be, xe, Ct) {
									return (
										(0, yt.$u2)(_e, "quickDiffProvider"),
										Sn.registerQuickDiffProvider(en(be), Be, xe, Ct)
									);
								},
								get tabGroups() {
									return ln.tabGroups;
								},
								registerShareProvider(be, Be) {
									return (
										(0, yt.$u2)(_e, "shareProvider"),
										ht.registerShareProvider(en(be), Be)
									);
								},
							},
							Qn = {
								get rootPath() {
									return (
										Zt.report(
											"workspace.rootPath",
											_e,
											"Please use 'workspace.workspaceFolders' instead. More details: https://aka.ms/vscode-eliminating-rootpath",
										),
										Dt.getPath()
									);
								},
								set rootPath(be) {
									throw new S.$ab("rootPath");
								},
								getWorkspaceFolder(be) {
									return Dt.getWorkspaceFolder(be);
								},
								get workspaceFolders() {
									return Dt.getWorkspaceFolders();
								},
								get name() {
									return Dt.name;
								},
								set name(be) {
									throw new S.$ab("name");
								},
								get workspaceFile() {
									return Dt.workspaceFile;
								},
								set workspaceFile(be) {
									throw new S.$ab("workspaceFile");
								},
								updateWorkspaceFolders: (be, Be, ...xe) =>
									Dt.updateWorkspaceFolders(_e, be, Be || 0, ...xe),
								onDidChangeWorkspaceFolders: function (be, Be, xe) {
									return Rt(Dt.onDidChangeWorkspace)(be, Be, xe);
								},
								asRelativePath: (be, Be) => Dt.getRelativePath(be, Be),
								findFiles: (be, Be, xe, Ct) =>
									Dt.findFiles(be, Be, xe, _e.identifier, Ct),
								findFiles2: (be, Be, xe) => (
									(0, yt.$u2)(_e, "findFiles2"),
									Dt.findFiles2(be, Be, _e.identifier, xe)
								),
								findFiles2New: (be, Be, xe) => (
									(0, yt.$u2)(_e, "findFiles2New"),
									Dt.findFiles2New(be, Be, _e.identifier, xe)
								),
								findTextInFiles: (be, Be, xe, Ct) => {
									(0, yt.$u2)(_e, "findTextInFiles");
									let tn, Tn;
									return (
										typeof Be == "object"
											? ((tn = Be), (Tn = xe))
											: ((tn = {}), (Tn = Be), (Ct = xe)),
										Dt.findTextInFiles(be, tn || {}, Tn, _e.identifier, Ct)
									);
								},
								findTextInFilesNew: (be, Be, xe) => (
									(0, yt.$u2)(_e, "findTextInFilesNew"),
									(0, yt.$u2)(_e, "textSearchProviderNew"),
									Dt.findTextInFilesNew(be, _e.identifier, Be || {}, xe)
								),
								save: (be) => Dt.save(be),
								saveAs: (be) => Dt.saveAs(be),
								saveAll: (be) => Dt.saveAll(be),
								applyEdit(be, Be) {
									return ki.applyWorkspaceEdit(be, _e, Be);
								},
								createFileSystemWatcher: (be, Be, xe, Ct) => {
									let tn;
									return (
										typeof Be == "boolean"
											? (tn = {
													ignoreCreateEvents: !!Be,
													ignoreChangeEvents: !!xe,
													ignoreDeleteEvents: !!Ct,
													correlate: !1,
												})
											: Be &&
												((0, yt.$u2)(_e, "createFileSystemWatcher"),
												(tn = { ...Be, correlate: !0 })),
										bt.createFileSystemWatcher(Dt, _e, be, tn)
									);
								},
								get textDocuments() {
									return yn.getAllDocumentData().map((be) => be.document);
								},
								set textDocuments(be) {
									throw new S.$ab("textDocuments");
								},
								openTextDocument(be) {
									let Be;
									const xe = be;
									if (typeof be == "string")
										Be = Promise.resolve(n.URI.file(be));
									else if (n.URI.isUri(be)) Be = Promise.resolve(be);
									else if (!xe || typeof xe == "object")
										Be = yn.createDocumentData(xe);
									else
										throw new Error(
											"illegal argument - uriOrFileNameOrOptions",
										);
									return Be.then(
										(Ct) => (
											Bt.trace(`openTextDocument from ${_e.identifier}`),
											Ct.scheme === I.Schemas.vscodeRemote &&
												!Ct.authority &&
												Zt.report(
													"workspace.openTextDocument",
													_e,
													"A URI of 'vscode-remote' scheme requires an authority.",
												),
											yn.ensureDocumentData(Ct).then((tn) => tn.document)
										),
									);
								},
								onDidOpenTextDocument: (be, Be, xe) =>
									Rt(yn.onDidAddDocument)(be, Be, xe),
								onDidCloseTextDocument: (be, Be, xe) =>
									Rt(yn.onDidRemoveDocument)(be, Be, xe),
								onDidChangeTextDocument: (be, Be, xe) =>
									Rt(yn.onDidChangeDocument)(be, Be, xe),
								onDidSaveTextDocument: (be, Be, xe) =>
									Rt(yn.onDidSaveDocument)(be, Be, xe),
								onWillSaveTextDocument: (be, Be, xe) =>
									Rt(kn.getOnWillSaveTextDocumentEvent(_e))(be, Be, xe),
								get notebookDocuments() {
									return sn.notebookDocuments.map((be) => be.apiNotebook);
								},
								async openNotebookDocument(be, Be) {
									let xe;
									if (n.URI.isUri(be))
										(xe = be), await sn.openNotebookDocument(be);
									else if (typeof be == "string")
										xe = n.URI.revive(
											await sn.createNotebookDocument({
												viewType: be,
												content: Be,
											}),
										);
									else throw new Error("Invalid arguments");
									return sn.getNotebookDocument(xe).apiNotebook;
								},
								onDidSaveNotebookDocument(be, Be, xe) {
									return Rt(Nn.onDidSaveNotebookDocument)(be, Be, xe);
								},
								onDidChangeNotebookDocument(be, Be, xe) {
									return Rt(Nn.onDidChangeNotebookDocument)(be, Be, xe);
								},
								onWillSaveNotebookDocument(be, Be, xe) {
									return Rt(Qe.getOnWillSaveNotebookDocumentEvent(_e))(
										be,
										Be,
										xe,
									);
								},
								get onDidOpenNotebookDocument() {
									return Rt(sn.onDidOpenNotebookDocument);
								},
								get onDidCloseNotebookDocument() {
									return Rt(sn.onDidCloseNotebookDocument);
								},
								registerNotebookSerializer(be, Be, xe, Ct) {
									return sn.registerNotebookSerializer(
										_e,
										be,
										Be,
										xe,
										(0, yt.$t2)(_e, "notebookLiveShare") ? Ct : void 0,
									);
								},
								onDidChangeConfiguration: (be, Be, xe) =>
									Rt(Ii.onDidChangeConfiguration)(be, Be, xe),
								getConfiguration(be, Be) {
									return (
										(Be = arguments.length === 1 ? void 0 : Be),
										Ii.getConfiguration(be, Be, _e)
									);
								},
								registerTextDocumentContentProvider(be, Be) {
									return An.registerTextDocumentContentProvider(be, Be);
								},
								registerTaskProvider: (be, Be) => (
									Zt.report(
										"window.registerTaskProvider",
										_e,
										"Use the corresponding function on the 'tasks' namespace instead",
									),
									mn.registerTaskProvider(_e, be, Be)
								),
								registerFileSystemProvider(be, Be, xe) {
									return (0, P.$Xc)(
										It.registerFileSystemProvider(_e, be, Be, xe),
										ce.addFileSystemProvider(be, Be, xe),
									);
								},
								get fs() {
									return ce.value;
								},
								registerFileSearchProvider: (be, Be) => (
									(0, yt.$u2)(_e, "fileSearchProvider"),
									En.registerFileSearchProviderOld(be, Be)
								),
								registerTextSearchProvider: (be, Be) => (
									(0, yt.$u2)(_e, "textSearchProvider"),
									En.registerTextSearchProviderOld(be, Be)
								),
								registerAITextSearchProvider: (be, Be) => (
									(0, yt.$u2)(_e, "aiTextSearchProvider"),
									(0, yt.$u2)(_e, "textSearchProvider"),
									En.registerAITextSearchProviderOld(be, Be)
								),
								registerFileSearchProviderNew: (be, Be) => (
									(0, yt.$u2)(_e, "fileSearchProviderNew"),
									En.registerFileSearchProvider(be, Be)
								),
								registerTextSearchProviderNew: (be, Be) => (
									(0, yt.$u2)(_e, "textSearchProviderNew"),
									En.registerTextSearchProvider(be, Be)
								),
								registerAITextSearchProviderNew: (be, Be) => (
									(0, yt.$u2)(_e, "aiTextSearchProviderNew"),
									(0, yt.$u2)(_e, "textSearchProviderNew"),
									En.registerAITextSearchProvider(be, Be)
								),
								registerRemoteAuthorityResolver: (be, Be) => (
									(0, yt.$u2)(_e, "resolvers"),
									ye.registerRemoteAuthorityResolver(be, Be)
								),
								registerResourceLabelFormatter: (be) => (
									(0, yt.$u2)(_e, "resolvers"),
									_n.$registerResourceLabelFormatter(be)
								),
								getRemoteExecServer: (be) => (
									(0, yt.$u2)(_e, "resolvers"), ye.getRemoteExecServer(be)
								),
								onDidCreateFiles: (be, Be, xe) =>
									Rt(bt.onDidCreateFile)(be, Be, xe),
								onDidDeleteFiles: (be, Be, xe) =>
									Rt(bt.onDidDeleteFile)(be, Be, xe),
								onDidRenameFiles: (be, Be, xe) =>
									Rt(bt.onDidRenameFile)(be, Be, xe),
								onWillCreateFiles: (be, Be, xe) =>
									Rt(bt.getOnWillCreateFileEvent(_e))(be, Be, xe),
								onWillDeleteFiles: (be, Be, xe) =>
									Rt(bt.getOnWillDeleteFileEvent(_e))(be, Be, xe),
								onWillRenameFiles: (be, Be, xe) =>
									Rt(bt.getOnWillRenameFileEvent(_e))(be, Be, xe),
								openTunnel: (be) => (
									(0, yt.$u2)(_e, "tunnels"),
									an.openTunnel(_e, be).then((Be) => {
										if (!Be) throw new Error("cannot open tunnel");
										return Be;
									})
								),
								get tunnels() {
									return (0, yt.$u2)(_e, "tunnels"), an.getTunnels();
								},
								onDidChangeTunnels: (be, Be, xe) => (
									(0, yt.$u2)(_e, "tunnels"),
									Rt(an.onDidChangeTunnels)(be, Be, xe)
								),
								registerPortAttributesProvider: (be, Be) => (
									(0, yt.$u2)(_e, "portsAttributes"),
									an.registerPortsAttributesProvider(be, Be)
								),
								registerTunnelProvider: (be, Be) => (
									(0, yt.$u2)(_e, "tunnelFactory"),
									an.registerTunnelProvider(be, Be)
								),
								registerTimelineProvider: (be, Be) => (
									(0, yt.$u2)(_e, "timeline"),
									di.registerTimelineProvider(
										be,
										Be,
										_e.identifier,
										ie.converter,
									)
								),
								get isTrusted() {
									return Dt.trusted;
								},
								requestWorkspaceTrust: (be) => (
									(0, yt.$u2)(_e, "workspaceTrust"),
									Dt.requestWorkspaceTrust(be)
								),
								onDidGrantWorkspaceTrust: (be, Be, xe) =>
									Rt(Dt.onDidGrantWorkspaceTrust)(be, Be, xe),
								registerEditSessionIdentityProvider: (be, Be) => (
									(0, yt.$u2)(_e, "editSessionIdentityProvider"),
									Dt.registerEditSessionIdentityProvider(be, Be)
								),
								onWillCreateEditSessionIdentity: (be, Be, xe) => (
									(0, yt.$u2)(_e, "editSessionIdentityProvider"),
									Rt(Dt.getOnWillCreateEditSessionIdentityEvent(_e))(be, Be, xe)
								),
								registerControlProvider: (be, Be) => (
									(0, yt.$u2)(_e, "control"), Dt.registerControlProvider(be, Be)
								),
								registerCanonicalUriProvider: (be, Be) => (
									(0, yt.$u2)(_e, "canonicalUriProvider"),
									Dt.registerCanonicalUriProvider(be, Be)
								),
								getCanonicalUri: (be, Be, xe) => (
									(0, yt.$u2)(_e, "canonicalUriProvider"),
									Dt.provideCanonicalUri(be, Be, xe)
								),
							},
							qi = {
								get inputBox() {
									return (
										Zt.report(
											"scm.inputBox",
											_e,
											"Use 'SourceControl.inputBox' instead",
										),
										fn.getLastInputBox(_e)
									);
								},
								createSourceControl(be, Be, xe) {
									return fn.createSourceControl(_e, be, Be, xe);
								},
								registerGitContextProvider(be) {
									return (
										(0, yt.$u2)(_e, "cursor"), fn.registerGitContextProvider(be)
									);
								},
								gitStatusWasRun(be) {
									return (
										(0, yt.$u2)(_e, "cursorNoDeps"), fn.gitStatusWasRun(be)
									);
								},
							},
							Ui = {
								createCommentController(be, Be) {
									return q.createCommentController(_e, be, Be);
								},
							},
							pi = {
								get activeDebugSession() {
									return Kt.activeDebugSession;
								},
								get activeDebugConsole() {
									return Kt.activeDebugConsole;
								},
								get breakpoints() {
									return Kt.breakpoints;
								},
								get activeStackItem() {
									return Kt.activeStackItem;
								},
								registerDebugVisualizationProvider(be, Be) {
									return (
										(0, yt.$u2)(_e, "debugVisualization"),
										Kt.registerDebugVisualizationProvider(_e, be, Be)
									);
								},
								registerDebugVisualizationTreeProvider(be, Be) {
									return (
										(0, yt.$u2)(_e, "debugVisualization"),
										Kt.registerDebugVisualizationTree(_e, be, Be)
									);
								},
								onDidStartDebugSession(be, Be, xe) {
									return Rt(Kt.onDidStartDebugSession)(be, Be, xe);
								},
								onDidTerminateDebugSession(be, Be, xe) {
									return Rt(Kt.onDidTerminateDebugSession)(be, Be, xe);
								},
								onDidChangeActiveDebugSession(be, Be, xe) {
									return Rt(Kt.onDidChangeActiveDebugSession)(be, Be, xe);
								},
								onDidReceiveDebugSessionCustomEvent(be, Be, xe) {
									return Rt(Kt.onDidReceiveDebugSessionCustomEvent)(be, Be, xe);
								},
								onDidChangeBreakpoints(be, Be, xe) {
									return Rt(Kt.onDidChangeBreakpoints)(be, Be, xe);
								},
								onDidChangeActiveStackItem(be, Be, xe) {
									return Rt(Kt.onDidChangeActiveStackItem)(be, Be, xe);
								},
								registerDebugConfigurationProvider(be, Be, xe) {
									return Kt.registerDebugConfigurationProvider(
										be,
										Be,
										xe || Yt.DebugConfigurationProviderTriggerKind.Initial,
									);
								},
								registerDebugAdapterDescriptorFactory(be, Be) {
									return Kt.registerDebugAdapterDescriptorFactory(_e, be, Be);
								},
								registerDebugAdapterTrackerFactory(be, Be) {
									return Kt.registerDebugAdapterTrackerFactory(be, Be);
								},
								startDebugging(be, Be, xe) {
									return !xe || (typeof xe == "object" && "configuration" in xe)
										? Kt.startDebugging(be, Be, { parentSession: xe })
										: Kt.startDebugging(be, Be, xe || {});
								},
								stopDebugging(be) {
									return Kt.stopDebugging(be);
								},
								addBreakpoints(be) {
									return Kt.addBreakpoints(be);
								},
								removeBreakpoints(be) {
									return Kt.removeBreakpoints(be);
								},
								asDebugSourceUri(be, Be) {
									return Kt.asDebugSourceUri(be, Be);
								},
							},
							yi = {
								registerTaskProvider: (be, Be) =>
									mn.registerTaskProvider(_e, be, Be),
								fetchTasks: (be) => mn.fetchTasks(be),
								executeTask: (be) => mn.executeTask(_e, be),
								get taskExecutions() {
									return mn.taskExecutions;
								},
								onDidStartTask: (be, Be, xe) =>
									Rt(mn.onDidStartTask)(be, Be, xe),
								onDidEndTask: (be, Be, xe) => Rt(mn.onDidEndTask)(be, Be, xe),
								onDidStartTaskProcess: (be, Be, xe) =>
									Rt(mn.onDidStartTaskProcess)(be, Be, xe),
								onDidEndTaskProcess: (be, Be, xe) =>
									Rt(mn.onDidEndTaskProcess)(be, Be, xe),
							},
							vi = {
								createNotebookController(be, Be, xe, Ct, tn) {
									return Rn.createNotebookController(
										_e,
										be,
										Be,
										xe,
										Ct,
										(0, yt.$t2)(_e, "notebookMessaging") ? tn : void 0,
									);
								},
								registerNotebookCellStatusBarItemProvider: (be, Be) =>
									sn.registerNotebookCellStatusBarItemProvider(_e, be, Be),
								createRendererMessaging(be) {
									return Ve.createRendererMessaging(_e, be);
								},
								createNotebookControllerDetectionTask(be) {
									return (
										(0, yt.$u2)(_e, "notebookKernelSource"),
										Rn.createNotebookControllerDetectionTask(_e, be)
									);
								},
								registerKernelSourceActionProvider(be, Be) {
									return (
										(0, yt.$u2)(_e, "notebookKernelSource"),
										Rn.registerKernelSourceActionProvider(_e, be, Be)
									);
								},
								onDidChangeNotebookCellExecutionState(be, Be, xe) {
									return (
										(0, yt.$u2)(_e, "notebookCellExecutionState"),
										Rt(Rn.onDidChangeNotebookCellExecutionState)(be, Be, xe)
									);
								},
							},
							Si = {
								t(...be) {
									if (typeof be[0] == "string") {
										const Be = be.shift(),
											xe = !be || typeof be[0] != "object" ? be : be[0];
										return In.getMessage(_e.identifier.value, {
											message: Be,
											args: xe,
										});
									}
									return In.getMessage(_e.identifier.value, be[0]);
								},
								get bundle() {
									return In.getBundle(_e.identifier.value);
								},
								get uri() {
									return In.getBundleUri(_e.identifier.value);
								},
							},
							Zn = {
								transferActiveChat(be) {
									return (
										(0, yt.$u2)(_e, "interactive"), Wn.transferActiveChat(be)
									);
								},
							},
							ji = {
								getRelatedInformation(be, Be) {
									return (
										(0, yt.$u2)(_e, "aiRelatedInformation"),
										ii.getRelatedInformation(_e, be, Be)
									);
								},
								registerRelatedInformationProvider(be, Be) {
									return (
										(0, yt.$u2)(_e, "aiRelatedInformation"),
										ii.registerRelatedInformationProvider(_e, be, Be)
									);
								},
								registerEmbeddingVectorProvider(be, Be) {
									return (
										(0, yt.$u2)(_e, "aiRelatedInformation"),
										Mi.registerEmbeddingVectorProvider(_e, be, Be)
									);
								},
							},
							oi = {
								registerChatResponseProvider(be, Be, xe) {
									return (
										(0, yt.$u2)(_e, "chatProvider"),
										_t.registerLanguageModel(_e, be, Be, xe)
									);
								},
								registerChatVariableResolver(be, Be, xe, Ct, tn, Tn, ci, zi) {
									return (
										(0, yt.$u2)(_e, "chatVariableResolver"),
										$i.registerVariableResolver(
											_e,
											be,
											Be,
											xe,
											Ct,
											tn,
											Tn,
											ci,
											zi?.id,
										)
									);
								},
								registerMappedEditsProvider(be, Be) {
									return (
										(0, yt.$u2)(_e, "mappedEditsProvider"),
										st.registerMappedEditsProvider(_e, be, Be)
									);
								},
								createChatParticipant(be, Be) {
									return Wn.createChatAgent(_e, be, Be);
								},
								createDynamicChatParticipant(be, Be, xe) {
									return (
										(0, yt.$u2)(_e, "chatParticipantPrivate"),
										Wn.createDynamicChatAgent(_e, be, Be, xe)
									);
								},
								registerChatParticipantDetectionProvider(be) {
									return (
										(0, yt.$u2)(_e, "chatParticipantAdditions"),
										Wn.registerChatParticipantDetectionProvider(be)
									);
								},
							},
							Li = {
								selectChatModels: (be) => _t.selectLanguageModels(_e, be ?? {}),
								onDidChangeChatModels: (be, Be, xe) =>
									_t.onDidChangeProviders(be, Be, xe),
								registerChatModelProvider: (be, Be, xe) => (
									(0, yt.$u2)(_e, "chatProvider"),
									_t.registerLanguageModel(_e, be, Be, xe)
								),
								get embeddingModels() {
									return (0, yt.$u2)(_e, "embeddings"), Vn.embeddingsModels;
								},
								onDidChangeEmbeddingModels: (be, Be, xe) => (
									(0, yt.$u2)(_e, "embeddings"), Vn.onDidChange(be, Be, xe)
								),
								registerEmbeddingsProvider(be, Be) {
									return (
										(0, yt.$u2)(_e, "embeddings"),
										Vn.registerEmbeddingsProvider(_e, be, Be)
									);
								},
								async computeEmbeddings(be, Be, xe) {
									return (
										(0, yt.$u2)(_e, "embeddings"),
										Vn.computeEmbeddings(be, Be, xe)
									);
								},
								registerTool(be, Be) {
									return (
										(0, yt.$u2)(_e, "lmTools"), ni.registerTool(_e, be, Be)
									);
								},
								invokeTool(be, Be, xe) {
									return (0, yt.$u2)(_e, "lmTools"), ni.invokeTool(be, Be, xe);
								},
								get tools() {
									return (0, yt.$u2)(_e, "lmTools"), ni.tools;
								},
							},
							xn = {
								registerSpeechProvider(be, Be) {
									return (
										(0, yt.$u2)(_e, "speech"),
										si.registerProvider(_e.identifier, be, Be)
									);
								},
							};
						return {
							version: Lt.vscodeVersion,
							cursorVersion: Lt.version,
							ai: ji,
							authentication: Pi,
							commands: Ni,
							comments: Ui,
							chat: oi,
							debug: pi,
							env: ai,
							extensions: wi,
							interactive: Zn,
							l10n: Si,
							languages: Bi,
							lm: Li,
							notebooks: vi,
							scm: qi,
							speech: xn,
							tasks: yi,
							tests: bi,
							tracing: Gn,
							window: Ci,
							workspace: Qn,
							Breakpoint: He.$qcb,
							TerminalOutputAnchor: He.TerminalOutputAnchor,
							ChatResultFeedbackKind: He.ChatResultFeedbackKind,
							ChatVariableLevel: He.ChatVariableLevel,
							ChatCompletionItem: He.$mdb,
							CallHierarchyIncomingCall: He.$Obb,
							CallHierarchyItem: He.$Nbb,
							CallHierarchyOutgoingCall: He.$Pbb,
							CancellationError: S.$9,
							CancellationTokenSource: r.$Ce,
							CandidatePortSource: f.CandidatePortSource,
							CodeAction: He.$Kbb,
							CodeActionKind: He.$Lbb,
							CodeActionTriggerKind: He.CodeActionTriggerKind,
							CodeLens: He.$Qbb,
							Color: He.$4bb,
							ColorInformation: He.$5bb,
							ColorPresentation: He.$6bb,
							ColorThemeKind: He.ColorThemeKind,
							CommentMode: He.CommentMode,
							CommentState: He.CommentState,
							CommentThreadCollapsibleState: He.CommentThreadCollapsibleState,
							CommentThreadState: He.CommentThreadState,
							CommentThreadApplicability: He.CommentThreadApplicability,
							CommentThreadFocus: He.CommentThreadFocus,
							CompletionItem: He.$Xbb,
							CompletionItemKind: He.CompletionItemKind,
							CompletionItemTag: He.CompletionItemTag,
							CompletionList: He.$Ybb,
							CompletionTriggerKind: He.CompletionTriggerKind,
							ConfigurationTarget: He.ConfigurationTarget,
							CustomExecution: He.$bcb,
							DebugAdapterExecutable: He.$ucb,
							DebugAdapterInlineImplementation: He.$xcb,
							DebugAdapterNamedPipeServer: He.$wcb,
							DebugAdapterServer: He.$vcb,
							DebugConfigurationProviderTriggerKind:
								Yt.DebugConfigurationProviderTriggerKind,
							DebugConsoleMode: He.DebugConsoleMode,
							DebugVisualization: He.$Ncb,
							DecorationRangeBehavior: He.DecorationRangeBehavior,
							Diagnostic: He.$Dbb,
							DiagnosticRelatedInformation: He.$Cbb,
							DiagnosticSeverity: He.DiagnosticSeverity,
							DiagnosticTag: He.DiagnosticTag,
							Disposable: He.$nbb,
							DocumentHighlight: He.$Gbb,
							DocumentHighlightKind: He.DocumentHighlightKind,
							MultiDocumentHighlight: He.$Hbb,
							DocumentLink: He.$3bb,
							DocumentSymbol: He.$Jbb,
							EndOfLine: He.EndOfLine,
							EnvironmentVariableMutatorType: He.EnvironmentVariableMutatorType,
							EvaluatableExpression: He.$Acb,
							InlineValueText: He.$Bcb,
							InlineValueVariableLookup: He.$Ccb,
							InlineValueEvaluatableExpression: He.$Dcb,
							InlineCompletionTriggerKind: He.InlineCompletionTriggerKind,
							EventEmitter: N.$re,
							ExtensionKind: He.ExtensionKind,
							ExtensionMode: He.ExtensionMode,
							ExternalUriOpenerPriority: He.ExternalUriOpenerPriority,
							FileChangeType: He.FileChangeType,
							FileDecoration: He.$Pcb,
							FileDecoration2: He.$Pcb,
							FileSystemError: He.$Gcb,
							FileType: c.FileType,
							FilePermission: c.FilePermission,
							FoldingRange: He.$Hcb,
							FoldingRangeKind: He.FoldingRangeKind,
							FunctionBreakpoint: He.$scb,
							InlineCompletionItem: He.$Zbb,
							InlineCompletionList: He.$1bb,
							Hover: He.$Ebb,
							VerboseHover: He.$Fbb,
							HoverVerbosityAction: He.HoverVerbosityAction,
							IndentAction: d.IndentAction,
							Location: He.$Bbb,
							MarkdownString: He.$Rbb,
							OverviewRulerLane: k.OverviewRulerLane,
							ParameterInformation: He.$Sbb,
							PortAutoForwardAction: He.PortAutoForwardAction,
							Position: He.$obb,
							ProcessExecution: He.$_bb,
							ProgressLocation: He.ProgressLocation,
							QuickInputButtonLocation: He.QuickInputButtonLocation,
							QuickInputButtons: He.$Ocb,
							Range: He.$pbb,
							RelativePattern: He.$ocb,
							Selection: He.$qbb,
							SelectionRange: He.$Mbb,
							SemanticTokens: He.$Kcb,
							SemanticTokensBuilder: He.$Jcb,
							SemanticTokensEdit: He.$Lcb,
							SemanticTokensEdits: He.$Mcb,
							SemanticTokensLegend: He.$Icb,
							ShellExecution: He.$acb,
							ShellQuoting: He.ShellQuoting,
							SignatureHelp: He.$Ubb,
							SignatureHelpTriggerKind: He.SignatureHelpTriggerKind,
							SignatureInformation: He.$Tbb,
							SnippetString: He.$Abb,
							SourceBreakpoint: He.$rcb,
							StandardTokenType: He.StandardTokenType,
							StatusBarAlignment: He.StatusBarAlignment,
							SymbolInformation: He.$Ibb,
							SymbolKind: He.SymbolKind,
							SymbolTag: He.SymbolTag,
							Task: He.Task,
							TaskGroup: He.$$bb,
							TaskPanelKind: He.TaskPanelKind,
							TaskRevealKind: He.TaskRevealKind,
							TaskScope: He.TaskScope,
							TerminalLink: He.$7bb,
							TerminalQuickFixTerminalCommand: He.$9bb,
							TerminalQuickFixOpener: He.$8bb,
							TerminalLocation: He.TerminalLocation,
							TerminalProfile: He.$0bb,
							TerminalExitReason: He.TerminalExitReason,
							TerminalShellExecutionCommandLineConfidence:
								He.TerminalShellExecutionCommandLineConfidence,
							TextDocumentSaveReason: He.TextDocumentSaveReason,
							TextEdit: He.$wbb,
							SnippetTextEdit: He.$ybb,
							TextEditorCursorStyle: p.TextEditorCursorStyle,
							TextEditorLineNumbersStyle: He.TextEditorLineNumbersStyle,
							TextEditorRevealType: He.TextEditorRevealType,
							TextEditorSelectionChangeKind: He.TextEditorSelectionChangeKind,
							SyntaxTokenType: He.SyntaxTokenType,
							TextDocumentChangeReason: He.TextDocumentChangeReason,
							ThemeColor: He.$ncb,
							ThemeIcon: He.$mcb,
							TreeItem: He.$dcb,
							TreeItemCheckboxState: He.TreeItemCheckboxState,
							TreeItemCollapsibleState: He.TreeItemCollapsibleState,
							TypeHierarchyItem: He.$adb,
							UIKind: Mt.UIKind,
							Uri: n.URI,
							ViewColumn: He.ViewColumn,
							WorkspaceEdit: He.$zbb,
							DocumentPasteTriggerKind: He.DocumentPasteTriggerKind,
							DocumentDropEdit: He.$jcb,
							DocumentDropOrPasteEditKind: He.$kcb,
							DocumentPasteEdit: He.$lcb,
							InlayHint: He.$Wbb,
							InlayHintLabelPart: He.$Vbb,
							InlayHintKind: He.InlayHintKind,
							RemoteAuthorityResolverError: He.$vbb,
							ResolvedAuthority: He.$tbb,
							ManagedResolvedAuthority: He.$ubb,
							SourceControlInputBoxValidationType:
								He.SourceControlInputBoxValidationType,
							ExtensionRuntime: He.ExtensionRuntime,
							TimelineItem: He.$Zcb,
							NotebookRange: He.$Rcb,
							NotebookCellKind: He.NotebookCellKind,
							NotebookCellExecutionState: He.NotebookCellExecutionState,
							NotebookCellData: He.$Scb,
							NotebookData: He.$Tcb,
							NotebookRendererScript: He.$Xcb,
							NotebookCellStatusBarAlignment: He.NotebookCellStatusBarAlignment,
							NotebookEditorRevealType: He.NotebookEditorRevealType,
							NotebookCellOutput: He.$Vcb,
							NotebookCellOutputItem: He.$Ucb,
							NotebookCellStatusBarItem: He.$Wcb,
							NotebookControllerAffinity: He.NotebookControllerAffinity,
							NotebookControllerAffinity2: He.NotebookControllerAffinity2,
							NotebookEdit: He.$xbb,
							NotebookKernelSourceAction: He.$Ycb,
							NotebookVariablesRequestKind: He.NotebookVariablesRequestKind,
							PortAttributes: He.$2cb,
							LinkedEditingRanges: He.$1cb,
							TestResultState: He.TestResultState,
							TestRunRequest: He.$3cb,
							TestMessage: He.$4cb,
							TestMessageStackFrame: He.$6cb,
							TestTag: He.$5cb,
							TestRunProfileKind: He.TestRunProfileKind,
							TextSearchCompleteMessageType: Gt.TextSearchCompleteMessageType,
							DataTransfer: He.$icb,
							DataTransferItem: He.$ecb,
							TestCoverageCount: He.$7cb,
							FileCoverage: He.$9cb,
							FileCoverage2: He.$9cb,
							StatementCoverage: He.$0cb,
							BranchCoverage: He.$$cb,
							DeclarationCoverage: He.$_cb,
							WorkspaceTrustState: He.WorkspaceTrustState,
							LanguageStatusSeverity: He.LanguageStatusSeverity,
							QuickPickItemKind: He.QuickPickItemKind,
							InputBoxValidationSeverity: He.InputBoxValidationSeverity,
							TabInputText: He.$bdb,
							TabInputTextDiff: He.$cdb,
							TabInputTextMerge: He.$ddb,
							TabInputCustom: He.$edb,
							TabInputNotebook: He.$gdb,
							TabInputNotebookDiff: He.$hdb,
							TabInputWebview: He.$fdb,
							TabInputTerminal: He.$idb,
							TabInputInteractiveWindow: He.$jdb,
							TabInputChat: He.$kdb,
							TabInputTextMultiDiff: He.$ldb,
							TelemetryTrustedValue: u.$Qp,
							LogLevel: h.LogLevel,
							EditSessionIdentityMatch: s.EditSessionIdentityMatch,
							InteractiveSessionVoteDirection:
								He.InteractiveSessionVoteDirection,
							ChatCopyKind: He.ChatCopyKind,
							InteractiveEditorResponseFeedbackKind:
								He.InteractiveEditorResponseFeedbackKind,
							cursor: Fn,
							UploadType: T.UploadType,
							DebugStackFrame: He.$ycb,
							DebugThread: He.$zcb,
							RelatedInformationType: He.RelatedInformationType,
							SpeechToTextStatus: He.SpeechToTextStatus,
							TextToSpeechStatus: He.TextToSpeechStatus,
							PartialAcceptTriggerKind: He.PartialAcceptTriggerKind,
							KeywordRecognitionStatus: He.KeywordRecognitionStatus,
							ChatResponseMarkdownPart: He.$ndb,
							ChatResponseFileTreePart: He.$rdb,
							ChatResponseAnchorPart: He.$sdb,
							ChatResponseProgressPart: He.$tdb,
							ChatResponseProgressPart2: He.$udb,
							ChatResponseReferencePart: He.$xdb,
							ChatResponseReferencePart2: He.$xdb,
							ChatResponseCodeCitationPart: He.$ydb,
							ChatResponseWarningPart: He.$vdb,
							ChatResponseTextEditPart: He.$Adb,
							ChatResponseMarkdownWithVulnerabilitiesPart: He.$odb,
							ChatResponseCommandButtonPart: He.$wdb,
							ChatResponseDetectedParticipantPart: He.$pdb,
							ChatResponseConfirmationPart: He.$qdb,
							ChatResponseMovePart: He.$zdb,
							ChatResponseReferencePartStatusKind:
								He.ChatResponseReferencePartStatusKind,
							ChatRequestTurn: He.$Bdb,
							ChatResponseTurn: He.$Cdb,
							ChatLocation: He.ChatLocation,
							ChatRequestEditorData: He.$Ddb,
							ChatRequestNotebookData: He.$Edb,
							LanguageModelChatMessageRole: He.LanguageModelChatMessageRole,
							LanguageModelChatMessage: He.$Gdb,
							LanguageModelChatMessageToolResultPart: He.$Fdb,
							LanguageModelChatResponseTextPart: He.$Idb,
							LanguageModelChatResponseToolCallPart: He.$Hdb,
							LanguageModelError: He.$Mdb,
							NewSymbolName: He.$Fcb,
							NewSymbolNameTag: He.NewSymbolNameTag,
							NewSymbolNameTriggerKind: He.NewSymbolNameTriggerKind,
							InlineEdit: He.$Ndb,
							InlineEditTriggerKind: He.InlineEditTriggerKind,
							ExcludeSettingOptions: Gt.ExcludeSettingOptions,
							TextSearchContextNew: Gt.$i7,
							TextSearchMatchNew: Gt.$h7,
							TextSearchCompleteMessageTypeNew:
								Gt.TextSearchCompleteMessageType,
						};
					}
				);
			}
		},
	),
		