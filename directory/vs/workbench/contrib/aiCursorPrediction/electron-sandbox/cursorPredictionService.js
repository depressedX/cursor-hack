import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../proto/aiserver/v1/aiserver_connectweb.js';
import '../../../../../proto/aiserver/v1/cursor_prediction_connectweb.js';
import '../../../../base/common/lifecycle.js';
import '../../../services/ai/browser/backendClient.js';
import '../../../services/ai/browser/aiMiscServices.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/markers/common/markers.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../services/ai/browser/metricsService.js';
import '../../aiCpp/electron-sandbox/cppTypeService.js';
import '../../../../platform/cursor/browser/aiEverythingProviderService.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../editor/common/core/position.js';
import '../../../../base/common/network.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../editor/common/model.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../../proto/aiserver/v1/cpp_pb.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/constants.js';
import './CursorPredictionHintLineWidget.js';
import './constants.js';
import '../../../services/statusbar/browser/statusbar.js';
import './cursorPredictionOutOfRangeIndicator.js';
import '../../../../../external/solid/store.js';
import '../../aiCpp/browser/cppEventLogger.js';
import '../../../../base/common/uuid.js';
import './badCursorPredictionHeuristics.js';
import '../../../../../proto/aiserver/v1/filesyncserver_pb.js';
import './cursorPredictionNonVisibleEditorIndicator.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/opener/common/opener.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../../platform/editor/common/editor.js';
import '../../../../base/browser/dom.js';
import '../../../../css!vs/workbench/contrib/aiCursorPrediction/electron-sandbox/cursorPrediction.js';
define(
		de[3628],
		he([
			1, 0, 341, 1474, 3, 285, 137, 45, 25, 90, 5, 619, 1300, 280, 56, 148, 134,
			83, 48, 23, 20, 64, 65, 42, 367, 19, 58, 2965, 2967, 166, 2968, 193, 332,
			47, 2966, 1483, 3615, 22, 41, 66, 116, 7, 2359,
		]),
		function (			ce /*require*/,
			e /*exports*/,
			t /*aiserver_connectweb*/,
			i /*cursor_prediction_connectweb*/,
			w /*lifecycle*/,
			E /*backendClient*/,
			C /*aiMiscServices*/,
			d /*reactiveStorageService*/,
			m /*workspace*/,
			r /*markers*/,
			u /*instantiation*/,
			a /*metricsService*/,
			h /*cppTypeService*/,
			c /*aiEverythingProviderService*/,
			n /*editorBrowser*/,
			g /*aiserver_pb*/,
			p /*reactiveStorageTypes*/,
			o /*utils_pb*/,
			f /*position*/,
			b /*network*/,
			s /*extensions*/,
			l /*model*/,
			y /*codeEditorService*/,
			$ /*resolverService*/,
			v /*cpp_pb*/,
			S /*resources*/,
			I /*constants*/,
			T /*CursorPredictionHintLineWidget*/,
			P /*constants*/,
			k /*statusbar*/,
			L /*cursorPredictionOutOfRangeIndicator*/,
			D /*store*/,
			M /*cppEventLogger*/,
			N /*uuid*/,
			A /*badCursorPredictionHeuristics*/,
			R /*filesyncserver_pb*/,
			O /*cursorPredictionNonVisibleEditorIndicator*/,
			B /*files*/,
			U /*opener*/,
			z /*editorGroupsService*/,
			F /*editor*/,
			x /*dom*/,
) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$gfd = void 0),
				(L = xi(L));
			const H = !1,
				q = H ? console.log : () => {},
				V = H ? console.error : () => {},
				G = async (X, Y, ie, ne) => {
					(await Y.exists(X)) &&
						(await ie.open(X, {
							openToSide: ne?.inNewTab ?? !1,
							editorOptions: {
								revealIfVisible: !0,
								revealIfOpened: !0,
								source: F.EditorOpenSource.USER,
								preserveFocus: !0,
							},
							fromUserGesture: !0,
						}));
				};
			function K(X) {
				return { "X-Request-ID": X, "X-Amzn-Trace-Id": `Root=${X}` };
			}
			const J = 5;
			let W = class extends w.$1c {
				aiClient() {
					return this.a.get();
				}
				cursorPredictionClient() {
					return this.b.get();
				}
				constructor(Y, ie, ne, ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e) {
					super(),
						(this.F = Y),
						(this.G = ie),
						(this.H = ne),
						(this.I = ee),
						(this.J = _),
						(this.L = te),
						(this.M = Q),
						(this.N = Z),
						(this.O = se),
						(this.P = re),
						(this.Q = le),
						(this.R = oe),
						(this.S = ae),
						(this.U = pe),
						(this.W = $e),
						(this.c = !1),
						(this.g = []),
						(this.h = void 0),
						(this.j = new Map()),
						(this.q = void 0),
						(this.r = !1),
						(this.s = 0),
						(this.t = void 0),
						(this.w = void 0),
						(this.y = void 0),
						(this.z = 1),
						(this.C = !1),
						(this.a = this.I.createInstance(E.$q6b, { service: t.$q0 })),
						(this.b = this.I.createInstance(E.$q6b, { service: i.$Mab })),
						this.periodicallyReloadCursorPredictionConfig(),
						this.D(
							(0, x.$0fb)((0, x.$Ogb)(), x.$$gb.RESIZE, () => {
								this.cb();
							}),
						);
				}
				clearCursorPrediction() {
					const Y = this.N.getActiveCodeEditor();
					Y && this.clearPrediction({ editor: Y, registerReject: !0 });
				}
				set X(Y) {
					(this.c = Y), Y || (this.g = []);
				}
				get X() {
					return this.c;
				}
				Y() {
					return this.F.applicationUserPersistentStorage;
				}
				get Z() {
					return (
						this.F.applicationUserPersistentStorage
							.cursorPredictionUIExperiments ?? []
					);
				}
				async periodicallyReloadCursorPredictionConfig(Y = !1) {
					(Date.now() - this.s < 1e3 * 60 * 30 && !Y) ||
						((this.s = Date.now()), this._refreshConfig());
				}
				cursorPredictionModel() {
					return (
						this.Y().cursorPredictionState?.model ??
						this.Y().cursorPredictionModel
					);
				}
				cursorPredictionTabToLineFirst() {
					return (
						this.Y().cursorPredictionTabToLineFirst !== !1 ||
						this.Y().cursorPredictionState?.tabToLineFirst !== !1
					);
				}
				isCursorPredictionEnabled() {
					return (
						this.Y().cursorPredictionEnabled !== !1 &&
						this.Y().cursorPredictionState?.backendEnabled !== !1
					);
				}
				onlyTriggerOnCppAccept() {
					return !this.Z.includes("cursor-pred-always-on");
				}
				tabToLineBeforeAcceptingCpp(Y) {
					return (
						this.isCursorPredictionEnabled() &&
						Y === p.CppSource.CursorPrediction &&
						this.cursorPredictionTabToLineFirst() &&
						this.F.nonPersistentStorage.cursorPrediction !== void 0
					);
				}
				maybeUndoCursorPrediction({
					event: Y,
					triggerCppCallback: ie,
					getLinterErrors: ne,
				}) {
					if (!this.isCursorPredictionEnabled() || !this.X) return;
					const ee = this.N.getActiveCodeEditor(),
						_ = ee?.getModel();
					if (ee && _) {
						if (this.shouldTabInsteadOfAccepting(ee, _)) return;
						const te = this.g.pop();
						te &&
							(ee.setPosition(te.position),
							ee.revealLineInCenterIfOutsideViewport(te.position.lineNumber),
							this.getAndShowNextPrediction({
								editor: ee,
								triggerCppCallback: ie,
								getLinterErrors: ne,
								source: v.CursorPrediction_CursorPredictionSource.UNDO,
							}),
							Y.stopPropagation(),
							Y.stopImmediatePropagation(),
							Y.preventDefault(),
							this.clearPrediction({ editor: ee, registerReject: !0 }),
							(this.r = !1));
					}
				}
				async maybeAcceptCursorPrediction({
					event: Y,
					triggerCppCallback: ie,
				}) {
					if (!this.isCursorPredictionEnabled()) return;
					const ne = this.F.nonPersistentStorage.cursorPrediction;
					if (ne === void 0) return;
					const ee = ne.lineNumber;
					let _;
					const te = this.N.getActiveCodeEditor();
					if (te && te.getModel() && S.$dh.isEqual(te.getModel().uri, ne.uri))
						_ = te;
					else {
						const Z = this.W.groups.find(
							(se) =>
								se.activeEditor?.resource &&
								S.$dh.isEqual(se.activeEditor.resource, ne.uri),
						);
						if (((_ = Z?.activeEditorPane?.getControl()), !Z || !_)) {
							await G(ne.uri, this.S, this.U, { inNewTab: !1 });
							const se = this.W.groups.find(
								(re) =>
									re.activeEditor?.resource &&
									S.$dh.isEqual(re.activeEditor.resource, ne.uri),
							);
							if (((_ = se?.activeEditorPane?.getControl()), !se || !_)) {
								q("[CURSOR PREDICTION] Failed to open predicted file");
								return;
							}
						}
					}
					const Q = _.getModel();
					if (
						(q("[CURSOR PREDICTION] model.uri", Q?.uri),
						q("[CURSOR PREDICTION] prediction.uri", ne.uri),
						Q && S.$dh.isEqual(Q.uri, ne.uri))
					) {
						if (
							(q("[CURSOR PREDICTION] Continuing to accept cursor prediction"),
							this.shouldTabInsteadOfAccepting(_, Q))
						)
							return;
						const Z = Math.max(1, Q.getLineFirstNonWhitespaceColumn(ee)),
							se = _.getPosition();
						se && this.g.push({ position: se, prediction: (0, D.unwrap)(ne) }),
							_.hasTextFocus() || _.focus(),
							_.setPosition({ lineNumber: ee, column: Z }, I.$QX),
							_.revealLineInCenterIfOutsideViewport(ee),
							Y.stopPropagation(),
							Y.stopImmediatePropagation(),
							Y.preventDefault(),
							(this.X = !0),
							this.clearPrediction({ editor: _, registerReject: !1 }),
							this.Q.recordAcceptCursorPredictionEvent(Q, ne),
							this.r && ie?.(Q.uri, _, p.CppSource.CursorPrediction),
							(this.r = !1);
					}
				}
				isInVimNonInsertMode() {
					const Y = this.P.getViewModel();
					for (const ie of [
						...Y.getEntries(k.StatusbarAlignment.LEFT),
						...Y.getEntries(k.StatusbarAlignment.RIGHT),
					])
						if (
							ie.id === "vscodevim.vim.primary" &&
							!["INSERT"].some((ne) => ie.container.innerText.includes(ne))
						)
							return !0;
					return !1;
				}
				shouldTabInsteadOfAccepting(Y, ie) {
					if (this.isInVimNonInsertMode()) return !1;
					const ne = Y.getPosition()?.lineNumber;
					return ne === void 0
						? !1
						: ie.getLineFirstNonWhitespaceColumn(ne) === 0;
				}
				fastCurrentFileInfoDoesNotWorkForNotebooks(Y, ie, ne, ee) {
					if (Y.scheme !== b.Schemas.aiChat)
						return new o.$Ws({
							relativeWorkspacePath: this.G.asRelativePath(Y),
							contents: ie,
							cursorPosition: new o.$ys({
								line: ee.lineNumber,
								column: ee.column,
							}),
							languageId: "",
							fileVersion: ne,
							workspaceRootPath: this.G.getWorkspaceFolder(Y)?.uri.fsPath,
						});
				}
				async getPartialCursorPredictionRequest({
					editor: Y,
					uri: ie,
					modelValue: ne,
					getLinterErrors: ee,
					modelVersion: _,
				}) {
					const te = ee(ie),
						Q = Y.getModel();
					if (Q === null) throw new Error("Model is null");
					Q.pushStackElement();
					const Z = ($e, ye) => {
							const ue = $e.split(`
`);
							let fe = Math.max(0, ye - P.$$ed),
								me = Math.min(ue.length, ye + P.$$ed);
							const ve = P.$$ed - ye,
								ge = ye - (ue.length - P.$$ed);
							ve > 0
								? (me = Math.min(ue.length, me + ve))
								: ge > 0 && (fe = Math.max(0, fe - ge));
							for (let be = 0; be < fe; be++) ue[be] = "";
							for (let be = me; be < ue.length; be++) ue[be] = "";
							return ue.join(`
`);
						},
						se = Y.getPosition();
					if (se === null)
						throw new Error("[CURSOR PREDICTION] Cursor position is undefined");
					ne.split(`
`).length >
						P.$$ed * 2 && (ne = Z(ne, se.lineNumber));
					const re = this.fastCurrentFileInfoDoesNotWorkForNotebooks(
						ie,
						ne,
						_,
						se,
					);
					let le;
					const oe = performance.now(),
						ae = await this.M.onlyLocalProvider?.runCommand(
							p.EditHistoryActions.CompileGlobalDiffTrajectories,
							{},
						);
					if (ae === void 0)
						throw new Error(
							"Compile Diff Trajectories not registered in extension host",
						);
					le = {
						fileDiffHistories: ae,
						diffHistory: [],
						blockDiffPatches: [],
						mergedDiffHistories: ae,
					};
					const pe = performance.now();
					return (
						this.J.distribution({
							stat: "cursorpredclient.immediatelyFire.diffHistory",
							value: pe - oe,
						}),
						{
							...le,
							linterErrors: te,
							currentFile: re,
							enableMoreContext:
								this.F.applicationUserPersistentStorage.cppExtraContextEnabled,
							cppIntentInfo: { source: "line_change" },
						}
					);
				}
				async getAndShowNextPrediction({
					editor: Y,
					triggerCppCallback: ie,
					getLinterErrors: ne,
					source: ee,
					cppSuggestionRange: _,
				}) {
					if (
						(await this.periodicallyReloadCursorPredictionConfig(),
						q("[CURSOR PREDICTION] createPrediction: called"),
						!this.isCursorPredictionEnabled() || this.C === !0)
					) {
						q(
							"[CURSOR PREDICTION] createPrediction: not enabled or currently clearing prediction",
						);
						return;
					}
					if (this.Y()?.cppConfig?.isFusedCursorPredictionModel) {
						q(
							"[CURSOR PREDICTION] createPrediction: skipping because fused cursor prediction model is enabled",
						);
						return;
					}
					try {
						q("[CURSOR PREDICTION] createPrediction: clearing prediction"),
							await this.clearPrediction({ editor: Y, registerReject: !0 }),
							q("[CURSOR PREDICTION] createPrediction: cleared prediction");
						const te = Y.getModel();
						if (!te) {
							q("[CURSOR PREDICTION] createPrediction: model is null");
							return;
						}
						const Q = Y.getSelection();
						if (Q === null) {
							q("[CURSOR PREDICTION] createPrediction: selection is null");
							return;
						}
						if (this.overlapsInlineDiff(te.uri, Q.startLineNumber) === !0) {
							q("[CURSOR PREDICTION] createPrediction: overlapsInlineDiff");
							return;
						}
						if (te.getLineCount() < J) {
							q(
								"[CURSOR PREDICTION] createPrediction: model.getLineCount() < CURSOR_PREDICTION_MIN_FILE_LINES",
							);
							return;
						}
						let Z =
							this.F.applicationUserPersistentStorage.cursorPredictionState
								?.model;
						Z === void 0 && (Z = P.$afd);
						let se = this.F.workspaceUserPersistentStorage.uniqueCppWorkspaceId;
						if (
							(se === void 0 &&
								((se =
									Math.random().toString(36).substring(2, 15) +
									Math.random().toString(36).substring(2, 15)),
								this.F.setWorkspaceUserPersistentStorage(
									"uniqueCppWorkspaceId",
									se,
								)),
							te.uri.scheme === b.Schemas.vscodeNotebookCell)
						)
							return;
						let re = [];
						const le = await this.shouldRelyOnFileSyncForFile(
							this.G.asRelativePath(te.uri),
							te.getVersionId(),
						);
						le &&
							(re = await this.getFileSyncUpdates(
								this.G.asRelativePath(te.uri),
								te.getVersionId(),
							)),
							q(
								"[CURSOR PREDICTION] createPrediction: getting partial cursor prediction request",
							);
						const oe = await this.getPartialCursorPredictionRequest({
							editor: Y,
							uri: te.uri,
							modelVersion: te.getVersionId(),
							modelValue: le ? "" : te.getValue(),
							getLinterErrors: ne,
						});
						oe.currentFile !== void 0 && (oe.currentFile.relyOnFilesync = le);
						const ae = {
							...oe,
							modelName: Z,
							diffHistoryKeys: [],
							contextItems: [],
							parameterHints: this.L.getRelevantType(Y),
							lspContexts: [],
							workspaceId: se,
							fileSyncUpdates: re,
							fileVisibleRanges: this.getOpenVisibleRanges(),
						};
						this.h !== void 0 && this.h.abort(),
							(this.h = new AbortController());
						const pe = await this.aiClient(),
							$e = await this.$();
						let ye = "",
							ue,
							fe = !1;
						const me = (0, N.$9g)(),
							ve = pe.streamNextCursorPrediction(ae, {
								signal: this.h.signal,
								headers: { ...K(me), ...$e },
							});
						let ge;
						q("[CURSOR PREDICTION] createPrediction: starting to stream");
						for await (const Ce of ve) {
							const Le = Ce.response;
							if (
								(Le.case === "fileName" &&
									((ge = this.G.resolveRelativePath(Le.value)),
									ge === void 0 &&
										q("[CURSOR PREDICTION] predictedUri is undefined")),
								Le.case === "lineNumber")
							) {
								ue = Le.value;
								break;
							}
							if (Le.case === "isNotInRange") {
								fe = !0;
								break;
							}
						}
						if ((this.h?.abort(), (this.h = void 0), fe)) {
							q("[CURSOR PREDICTION] createPrediction: isNoOp");
							return;
						}
						if (ue === void 0) {
							q("[CURSOR PREDICTION] predictedLineNumberInRange is undefined.");
							return;
						}
						const be = await this.createPrediction({
							editor: Y,
							model: te,
							predictedLineNumberInRange: ue,
							predictionText: ye,
							generationUuid: me,
							source: ee,
							cppSuggestionRange: _,
							predictedUri: ge,
						});
						if (
							ie !== void 0 &&
							be?.lineNumber !== void 0 &&
							this.F.nonPersistentStorage.cppState?.suggestion === void 0
						) {
							const Ce = new f.$hL(be.lineNumber, 1);
							ie(te.uri, Y, p.CppSource.CursorPrediction, Ce);
						}
					} catch {}
				}
				async getFileSyncUpdates(Y, ie) {
					try {
						return (
							(
								await this.M.onlyLocalProvider?.runCommand(
									p.FileSyncActions.GetFileSyncUpdates,
									{ relativeWorkspacePath: Y, requestedModelVersion: ie },
								)
							)?.map((ee) => R.$mB.fromJson(ee)) ?? []
						);
					} catch (ne) {
						return (
							ne("[CURSOR PREDICTION] error getting file sync updates", ne), []
						);
					}
				}
				async shouldRelyOnFileSyncForFile(Y, ie) {
					try {
						const ne = await this.M.onlyLocalProvider?.runCommand(
							p.FileSyncActions.ShouldRelyOnFileSyncForFile,
							{ relativeWorkspacePath: Y, modelVersion: ie },
						);
						return (
							q("[CURSOR PREDICTION] should rely on file sync for file", Y, ne),
							ne ?? !1
						);
					} catch (ne) {
						return (
							ne(
								"[CURSOR PREDICTION] error checking if should rely on file sync for file",
								ne,
							),
							!1
						);
					}
				}
				async $() {
					const Y = await this.M.onlyLocalProvider?.runCommand(
						p.FileSyncActions.GetFileSyncEncryptionHeader,
						null,
					);
					if (Y === void 0)
						throw new Error("Could not retrieve file sync encryption header");
					return Y;
				}
				overlapsInlineDiff(Y, ie) {
					const ne = this.F.nonPersistentStorage.inlineDiffs;
					if (ne === void 0) return !1;
					const ee = this.F.nonPersistentStorage.inprogressAIGenerations.map(
						(_) => _.generationUUID,
					);
					return ne.some((_) => {
						const te = ee.includes(_.generationUUID),
							Q =
								ie >= _.currentRange.startLineNumber &&
								ie <= _.currentRange.endLineNumberExclusive,
							Z = S.$dh.isEqual(_.uri, Y) || Y.fsPath === _.uri.fsPath;
						return te && Q && Z;
					});
				}
				doesPredictionMatchUniqueLineInRange({
					model: Y,
					range: ie,
					predictionText: ne,
				}) {
					const ee = Y.getValue()
						.split(`
`)
						.slice(ie.startLineNumber - 1, ie.endLineNumberExclusive + 2);
					let _ = 0,
						te = !1;
					for (_ = 0; _ < ee.length - 2; _++)
						if (
							ee
								.slice(_, _ + 3)
								.join(`
`)
								.startsWith(ne)
						) {
							if (te) return !1;
							te = !0;
						}
					return te;
				}
				async clearPrediction({
					editor: Y,
					onlyRemoveOverlayWidget: ie,
					registerReject: ne,
				}) {
					const ee = this.F.nonPersistentStorage.cursorPrediction;
					if (ee !== void 0) {
						this.C = !0;
						try {
							if ((this.m?.dispose(), (this.m = void 0), ie === !0)) return;
							const _ = Y.getModel();
							if (_ !== null && S.$dh.isEqual(_.uri, ee.uri))
								_.deltaDecorations([ee.decorationId], []),
									this.t !== void 0 &&
										(_.deltaDecorations([this.t], []), (this.t = void 0)),
									this.w !== void 0 &&
										(_.deltaDecorations([this.w], []), (this.w = void 0)),
									ne &&
										ee !== void 0 &&
										this.Q.recordRejectCursorPredictionEvent(_, ee);
							else {
								const te = await this.O.createModelReference(ee.uri);
								try {
									const Q = te.object.textEditorModel;
									Q.deltaDecorations([ee.decorationId], []),
										ne &&
											ee !== void 0 &&
											this.Q.recordRejectCursorPredictionEvent(Q, ee);
								} finally {
									te.dispose();
								}
							}
							this.n && (this.n.dispose(), (this.n = void 0)),
								this.y?.dispose(),
								(this.y = void 0),
								this.F.setNonPersistentStorage("cursorPrediction", void 0);
						} catch (_) {
							_("[CURSOR PREDICTION] error clearing prediction", _);
						} finally {
							this.C = !1;
						}
					}
				}
				hideWidgetsIfConflictsWithCppSuggestion(Y, ie) {
					if (!this.isCursorPredictionEnabled()) return;
					const ne = this.F.nonPersistentStorage.cursorPrediction;
					if (ne === void 0) return;
					const ee = Y.getModel();
					ee !== null &&
						S.$dh.isEqual(ee.uri, ne.uri) &&
						ne.lineNumber >= ie.startLineNumber &&
						ne.lineNumber < ie.endLineNumberExclusive &&
						(this.clearPrediction({
							editor: Y,
							onlyRemoveOverlayWidget: !0,
							registerReject: !1,
						}),
						this.n?.hide());
				}
				maybeShowHintLineWidget() {
					this.isCursorPredictionEnabled() &&
						(this.F.nonPersistentStorage.cursorPrediction === void 0 ||
							this.n === void 0 ||
							(this.n.show(), (this.r = !0)));
				}
				async getMultifileCursorPredictionEditor(Y) {
					if (
						(q("[CursorPredictionService] createPredictionMultifile: called"),
						this.C === !0 || Y === void 0)
					)
						return;
					const ie = this.G.asRelativePath(Y);
					q("[CURSOR PREDICTION] createPredictionMultifile: to", ie);
					const ne = this.N.getActiveCodeEditor();
					if (ne && S.$dh.isEqual(ne.getModel()?.uri, Y)) return ne;
					const ee = this.N.listCodeEditors();
					for (const _ of ee) if (S.$dh.isEqual(_.getModel()?.uri, Y)) return _;
				}
				ab(Y, ie, ne, ee) {
					q(
						"[CURSOR PREDICTION] Updating non-visible editor indicator",
						ie.toString(),
					),
						this.y instanceof O.$ffd
							? (q("[CURSOR PREDICTION] Updating existing indicator"),
								this.y.updateContent(ie, ne))
							: (q("[CURSOR PREDICTION] Creating new indicator"),
								this.y?.dispose(),
								(this.y = this.I.createInstance(O.$ffd, Y, ie, ne)));
				}
				async createPrediction(Y) {
					const {
						predictionText: ie,
						generationUuid: ne,
						source: ee,
						cppSuggestionRange: _,
						predictedUri: te,
					} = Y;
					let Q = Y.editor,
						Z = Y.model,
						se = Z.uri;
					if (te !== void 0) {
						se = te;
						const ue = await this.getMultifileCursorPredictionEditor(te);
						if (ue !== void 0) {
							Q = ue;
							const fe = Q.getModel();
							if (fe === null) return;
							Z = fe;
						}
					}
					let re = Y.predictedLineNumberInRange;
					if (this.C === !0) return;
					await this.clearPrediction({ editor: Q, registerReject: !0 });
					const le = Q.getPosition();
					if (
						re === void 0 ||
						le === null ||
						Math.abs(le.lineNumber - re) <= 1 ||
						this.overlapsInlineDiff(Z.uri, re) === !0 ||
						this.R.isValidCursorPredictionCase({
							predictedLineNumber: re,
							cppSuggestionRange: _,
						}).valid === !1
					)
						return;
					const oe = this.getDecoration({ model: Z, lineNumber: re });
					if (oe === void 0) return;
					const ae = Z.deltaDecorations([], [oe]).at(0);
					if (ae === void 0) return;
					this.q !== void 0 && clearTimeout(this.q),
						q("[CURSOR PREDICTION] predictedUri", te),
						q("[CURSOR PREDICTION] editor.getModel()?.uri", Q.getModel()?.uri);
					const pe = S.$dh.isEqual(Q.getModel()?.uri, se);
					if (
						(q("[CURSOR PREDICTION] areUrisEqual", pe),
						pe
							? ((this.y = this.I.createInstance(L.default, Q, ae)),
								(this.n = this.I.createInstance(T.$0ed, Q, ae)))
							: (q("[CURSOR PREDICTION] Prediction is in a non-visible editor"),
								this.ab(Q, se, re, ie)),
						this.j.get(Q.getId()) === void 0)
					) {
						const ue = this.D(
								Q.onDidChangeModel((ge) => {
									(this.X = !1),
										this.clearPrediction({ editor: Q, registerReject: !0 });
								}),
							),
							fe = this.D(
								Q.onDidBlurEditorText(() => {
									(this.X = !1),
										this.clearPrediction({ editor: Q, registerReject: !0 });
								}),
							),
							me = this.D(
								Q.onDidChangeModelContent(() => {
									(this.X = !1),
										this.clearPrediction({ editor: Q, registerReject: !0 });
								}),
							),
							ve = this.D(
								Q.onDidChangeCursorPosition((ge) => {
									this.X && (this.X = !1);
								}),
							);
						this.j.set(Q.getId(), [ue, fe, me, ve]);
					}
					const ye = {
						source: ee,
						monotonicallyIncreasingPredictionId: this.z++,
						requestId: ne,
						decorationId: ae,
						uri: se,
						lineNumber: re,
						text: ie,
					};
					return (
						q(`Created Prediction with RequestId ${ye.requestId}`),
						this.Q.recordSuggestCursorPredictionEvent(Z, ye),
						this.F.setNonPersistentStorage("cursorPrediction", ye),
						ye
					);
				}
				isShowingCursorPrediction(Y) {
					const ie = this.F.nonPersistentStorage.cursorPrediction;
					return ie === void 0 ? !1 : S.$dh.isEqual(ie.uri, Y.getModel()?.uri);
				}
				manuallyCreateCursorPrediction(Y) {
					if (!S.$dh.isEqual(Y.editor.getModel()?.uri, Y.model.uri)) {
						q(
							"TODO IAN: IMPLEMENT CROSS-FILE CURSOR-PREDICTION FOR MANUAL CREATION",
						);
						return;
					}
					this.isCursorPredictionEnabled() &&
						((this.r = !0),
						this.createPrediction({
							editor: Y.editor,
							model: Y.model,
							predictedLineNumberInRange: Y.lineNumber,
							predictionText: "",
							generationUuid: (0, N.$9g)(),
							source: v.CursorPrediction_CursorPredictionSource.UNSPECIFIED,
						}));
				}
				getDecoration({ model: Y, lineNumber: ie }) {
					return {
						range: {
							startLineNumber: ie,
							startColumn: 1,
							endLineNumber: ie,
							endColumn: Y.getLineMaxColumn(ie),
						},
						options: {
							description: "next cursor prediction",
							stickiness: l.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
						},
					};
				}
				dispose() {
					this.j.forEach((Y) => Y.forEach((ie) => ie.dispose())),
						this.j.clear(),
						super.dispose();
				}
				getModel() {
					return (
						this.Y().cursorPredictionState?.model ??
						this.Y().cursorPredictionModel
					);
				}
				async _refreshConfig() {
					const ie = await (
							await this.cursorPredictionClient()
						).cursorPredictionConfig({}),
						ne = ie.models.filter((ee) => ee.name && ee.radius);
					this.F.setApplicationUserPersistentStorage(
						"cursorPredictionState",
						(ee) => ({
							...(ee ?? {}),
							modelConfigs: ne,
							defaultModel: ie.defaultModel,
							heuristics: ie.heuristics,
						}),
					);
				}
				updateHintLineWidgetMarginLeft(Y) {
					this.n?.updateMarginLeft(Y);
				}
				getOpenVisibleRanges() {
					const Y = [],
						ie = this.Y().cppConfig?.excludeRecentlyViewedFilesPatterns ?? [];
					for (const ne of this.N.listCodeEditors()) {
						const ee = ne.getModel();
						if ((0, n.$0sb)(ne) && ee) {
							const _ = ee.uri,
								te = this.G.asRelativePath(_),
								Q = [
									b.Schemas.file,
									b.Schemas.inMemory,
									b.Schemas.vscodeNotebookCell,
									b.Schemas.vscodeFileResource,
									b.Schemas.vscodeRemote,
									b.Schemas.vscodeRemoteResource,
									b.Schemas.vscodeManagedRemoteResource,
								];
							if (
								te === void 0 ||
								te === "" ||
								te.includes("anysphere") ||
								!Q.some((se) => (0, b.$Vg)(ee.uri, se)) ||
								ie.some((se) => te.includes(se))
							)
								continue;
							const Z = ne
								.getVisibleRanges()
								.map(
									(se) =>
										new g.$WE({
											startLineNumberInclusive: se.startLineNumber,
											endLineNumberExclusive: se.endLineNumber,
										}),
								);
							Y.push(new g.$XE({ filename: te, visibleRanges: Z }));
						}
					}
					return Y;
				}
				async bb(Y, ie) {
					const ne = await this.O.createModelReference(Y);
					try {
						return ne.object.textEditorModel.getLineContent(ie);
					} finally {
						ne.dispose();
					}
				}
				cb() {
					for (const Y of this.N.listCodeEditors())
						this.clearPrediction({ editor: Y, registerReject: !1 });
				}
			};
			(e.$gfd = W),
				(e.$gfd = W =
					Ne(
						[
							j(0, d.$0zb),
							j(1, m.$Vi),
							j(2, r.$aM),
							j(3, u.$Li),
							j(4, a.$wcc),
							j(5, h.$Led),
							j(6, c.$3Db),
							j(7, y.$dtb),
							j(8, $.$MO),
							j(9, k.$d6b),
							j(10, M.$V7b),
							j(11, A.$dfd),
							j(12, B.$ll),
							j(13, U.$7rb),
							j(14, z.$EY),
						],
						W,
					)),
				(0, s.$lK)(C.$kfc, W, s.InstantiationType.Delayed);
		},
	)
