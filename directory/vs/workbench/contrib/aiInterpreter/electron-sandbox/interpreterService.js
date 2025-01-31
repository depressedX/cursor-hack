import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/reactivestorage/browser/reducerService.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../aichat/browser/chatDataService.js';
import '../../../services/ai/browser/aiService.js';
import '../../../../../proto/aiserver/v1/interpreter_pb.js';
import '../../../services/ai/browser/promptBarService.js';
import '../../../../../proto/aiserver/v1/chat_pb.js';
import '../../aichat/browser/chatData.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../base/common/constants.js';
import '../../../../base/common/uri.js';
import '../../../../platform/product/common/productService.js';
import '../../../services/environment/electron-sandbox/environmentService.js';
import '../../../../base/common/uuid.js';
import '../../../../platform/files/common/files.js';
import '../../../../base/common/lifecycle.js';
import '../../notebook/common/notebookCommon.js';
import '../../../../base/common/resources.js';
import '../browser/interpreterPythonIde.js';
import '../../notebook/common/notebookExecutionService.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../notebook/common/notebookKernelService.js';
import '../browser/interpreterUtils.js';
import '../../../../base/common/event.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../../proto/aiserver/v1/utils_pb.js';
import '../../../../editor/common/services/model.js';
import '../../../services/ai/browser/utils.js';
import '../../../../../external/solid/solid.js';
import '../../../../../proto/aiserver/v1/interpreter_connectweb.js';
import '../../../services/ai/browser/repositoryService.js';
import '../../cursoreval/browser/cursorEvalService.js';
import '../../notebook/common/notebookService.js';
import '../../../services/extensions/common/extensions.js';
import '../../terminal/browser/terminal.js';
import '../../../../platform/terminal/common/capabilities/capabilities.js';
import '../../notebook/browser/viewParts/notebookKernelQuickPickStrategy.js';
import '../../../../platform/markers/common/markers.js';
import '../../../services/editor/common/editorService.js';
import '../../../../platform/aiAssert/browser/aiAssertService.js';
define(
			de[3942],
			he([
				1, 0, 5, 45, 669, 32, 337, 118, 1115, 620, 126, 140, 31, 58, 9, 62, 151,
				47, 22, 3, 70, 19, 2976, 611, 8, 243, 1707, 6, 25, 83, 67, 191, 13,
				1116, 226, 684, 161, 53, 107, 189, 1308, 90, 18, 668,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*instantiation*/,
				i /*reactiveStorageService*/,
				w /*reducerService*/,
				E /*telemetry*/,
				C /*chatDataService*/,
				d /*aiService*/,
				m /*interpreter_pb*/,
				r /*promptBarService*/,
				u /*chat_pb*/,
				a /*chatData*/,
				h /*commands*/,
				c /*constants*/,
				n /*uri*/,
				g /*productService*/,
				p /*environmentService*/,
				o /*uuid*/,
				f /*files*/,
				b /*lifecycle*/,
				s /*notebookCommon*/,
				l /*resources*/,
				y /*interpreterPythonIde*/,
				$ /*notebookExecutionService*/,
				v /*contextkey*/,
				S /*notebookKernelService*/,
				I /*interpreterUtils*/,
				T /*event*/,
				P /*workspace*/,
				k /*utils_pb*/,
				L /*model*/,
				D /*utils*/,
				M /*solid*/,
				N /*interpreter_connectweb*/,
				A /*repositoryService*/,
				R /*cursorEvalService*/,
				O /*notebookService*/,
				B /*extensions*/,
				U /*terminal*/,
				z /*capabilities*/,
				F /*notebookKernelQuickPickStrategy*/,
				x /*markers*/,
				H /*editorService*/,
				q /*aiAssertService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ldd = void 0);
				let V = class extends b.$1c {
					constructor(
						J,
						W,
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
						super(),
							(this.n = J),
							(this.q = W),
							(this.r = X),
							(this.t = Y),
							(this.u = ie),
							(this.w = ne),
							(this.y = ee),
							(this.z = _),
							(this.C = te),
							(this.F = Q),
							(this.G = Z),
							(this.H = se),
							(this.I = re),
							(this.J = le),
							(this.L = oe),
							(this.M = ae),
							(this.N = pe),
							(this.O = $e),
							(this.P = ye),
							(this.Q = ue),
							(this.R = fe),
							(this.S = me),
							(this.U = ve),
							(this.f = this.D(new T.$re())),
							(this.onDidCancel = this.f.event),
							(this.h = this.D(new T.$re())),
							(this.onShouldFocusRetryBox = this.h.event),
							(this.accessUuids = new Set()),
							(this.W = new Set()),
							(this.X = new Set()),
							(this.Y = new Set()),
							(this.$ = new Set()),
							(this.bb = []),
							(this.db = new Map()),
							this.D(
								this.n.onChangeEffectManuallyDisposed({
									deps: [
										() => this.n.nonPersistentStorage.inprogressAIGenerations,
									],
									onChange: ({ deps: ge, prevDeps: be }) => {
										if (be === void 0) return;
										this.U.assert(
											ge[0].length <= 30,
											"The size of inprogress generations is too big! this is BAD BAD BAD. there is probably a bug?",
											{ showOnlyOnce: !0 },
										);
										const Ce = new Set(ge[0].map((Fe) => Fe.generationUUID)),
											Le = be[0].filter((Fe) => !Ce.has(Fe.generationUUID));
										for (const Fe of Le)
											Fe.metadata?.type === "interpreterExecution" &&
												this.cancel(Fe.metadata.tabId);
									},
									runNowToo: !0,
								}),
							),
							this.D(
								this.n.onChangeEffectManuallyDisposed({
									deps: [() => this.q.getReactiveCurrentChat()?.tabId],
									onChange: ({ deps: ge, prevDeps: be }) => {
										const Ce = this.q.getReactiveCurrentChat();
										if (Ce !== void 0) {
											for (const Le of Ce.bubbles)
												if (Le.type === "ai") {
													if (Le.interpreterModeCells === void 0) return;
													for (
														let Fe = 0;
														Fe < Le.interpreterModeCells.length;
														Fe++
													)
														Le.interpreterModeCells[Fe].status === "running" &&
															this.n.nonPersistentStorage.inprogressAIGenerations.filter(
																(Ke) =>
																	Ke.metadata.type === "interpreterExecution" &&
																	Ke.metadata.tabId === Ce.tabId,
															).length === 0 &&
															this.q.setChatData(
																"tabs",
																(Ee, Ie) => Ee.tabId === Ce.tabId,
																"bubbles",
																(Ee, Ie) => Ee.id === Le.id && Ee.type === "ai",
																"interpreterModeCells",
																(Ee, Ie) => Ie === Fe,
																"status",
																"canceled",
															);
												}
										}
									},
									runNowToo: !0,
								}),
							);
					}
					autoExecuteNext(J) {
						this.W.add(J);
					}
					dispose() {
						this.cb(0), super.dispose();
					}
					closeRetry(J) {
						if (J === void 0) {
							const X = this.q.getReactiveCurrentChat();
							if (X === void 0) return;
							J = X.tabId;
						}
						this.q.setChatData(
							"tabs",
							(X, Y) => X.tabId === J,
							"bubbles",
							(X, Y) =>
								X.type === "ai" && X.interpreterModeRetryIndex !== void 0,
							"interpreterModeRetryIndex",
							void 0,
						);
					}
					openRetry(J, W, X, Y) {
						if (J === void 0) {
							const ee = this.q.getReactiveCurrentChat();
							if (ee === void 0) return;
							J = ee.tabId;
						}
						if (Y?.noNeedToCancel !== !0) {
							const ee = this.q.isTabGenerating(J, { includeExecuting: !0 });
							if (ee.isGenerating)
								if (ee.generation.metadata?.type === "interpreterExecution") {
									this.X.add(J), ee.cancel();
									return;
								} else {
									ee.cancel();
									return;
								}
						}
						let ie;
						if (W === void 0) {
							const ee = this.q.chatData.tabs.find((Q) => Q.tabId === J);
							if (ee === void 0) return;
							const _ = ee.bubbles.filter((Q) => Q.type === "ai");
							if (_.length === 0) return;
							const te = _.find((Q) => Q.interpreterModeRetryIndex !== void 0);
							if (te !== void 0)
								if (((W = te.id), te.interpreterModeRetryIndex === 0)) {
									const Q = ee.bubbles.findIndex((Z) => Z.id === W);
									if (Q === -1) return;
									if (Q === 0) W = void 0;
									else {
										const Z = ee.bubbles.at(Q - 2);
										Z?.type !== "ai" ? (W = void 0) : (W = Z.id);
									}
								} else X = (te.interpreterModeRetryIndex ?? 1) - 1;
							W === void 0 && (W = _[_.length - 1].id),
								te !== void 0 && te.id !== W && (ie = te.id);
						}
						if (X === void 0) {
							const ee = this.q.chatData.tabs.find((Q) => Q.tabId === J);
							if (ee === void 0) return;
							const _ = ee.bubbles.find((Q) => Q.id === W);
							if (_ === void 0 || _.type !== "ai") return;
							const te = _.interpreterModeCells;
							if (te === void 0) X = 0;
							else {
								const Q = te[te.length - 1].status;
								Q === "pending" || Q === "running"
									? (X = te.length - 1)
									: (X = te.length);
							}
						}
						const ne = "interpreterModeRetryIndex";
						(0, M.batch)(() => {
							this.q.setChatData(
								"tabs",
								(ee, _) => ee.tabId === J,
								"bubbles",
								(ee, _) => ee.id === W && ee.type === "ai",
								ne,
								X,
							),
								ie !== void 0 &&
									this.q.setChatData(
										"tabs",
										(ee, _) => ee.tabId === J,
										"bubbles",
										(ee, _) => ee.id === ie && ee.type === "ai",
										ne,
										void 0,
									);
						}),
							setTimeout(() => {
								this.h.fire();
							}, 10);
					}
					async Z(J, W) {
						if (this.db.has(J)) await this.db.get(J);
						else {
							if (W === !0) return;
							const ne = this.q.chatData.tabs.find((ee) => ee.tabId === J);
							return ne === void 0 ||
								ne.interpreterData?.cursorNotebookUri === void 0
								? void 0
								: (await this.eb(
										n.URI.revive(ne.interpreterData.cursorNotebookUri),
										J,
									),
									this.Z(J, !0));
						}
						const X = this.q.chatData.tabs.find((ne) => ne.tabId === J);
						if (X === void 0) return;
						const Y = X?.interpreterData?.cursorNotebookUri;
						if (Y === void 0) return;
						const ie = this.bb.find((ne) =>
							l.$dh.isEqual(ne.notebookModelReference.uri, n.URI.revive(Y)),
						);
						if (ie !== void 0) return ie;
					}
					async executeAndContinue(J, W) {
						if (J === void 0) {
							const ne = this.q.getReactiveCurrentChat();
							if (ne === void 0) return;
							J = ne.tabId;
						}
						const X = J;
						if (
							this.q.isTabGenerating(J, { includeExecuting: !0 }).isGenerating
						)
							return;
						if (
							W !== void 0 &&
							this.ab(J, W.aiBubbleId, W.cellIndex + 1) === void 0
						) {
							console.warn("Failed to trim chat, not executing.");
							return;
						}
						this.Y.add(J);
						const ie = (0, o.$9g)();
						this.n.setNonPersistentStorage("inprogressAIGenerations", (ne) => {
							const ee = [...ne];
							return (
								ee.push({
									generationUUID: ie,
									metadata: { type: "interpreterExecution", tabId: X },
									queuePositionResponse: void 0,
								}),
								ee
							);
						});
						try {
							const ne = this.q.chatData.tabs.find((pe) => pe.tabId === J);
							if (ne === void 0) return;
							const ee = await this.Z(J);
							if (ee === void 0) return;
							let _ = ne.bubbles.at(-1);
							if (
								((_ === void 0 || _.type !== "ai") &&
									(this.q.setChatData(
										"tabs",
										(pe, $e) => pe.tabId === J,
										"bubbles",
										(pe) => pe.slice(0, -1),
									),
									(_ = ne.bubbles.at(-1))),
								_ === void 0 || _.type !== "ai")
							)
								return;
							const te = _,
								Q = te.interpreterModeCells,
								Z = Q?.at(-1);
							if (Z === void 0 || Q === void 0) return;
							const se = "interpreterModeCells",
								re = "status";
							this.q.setChatData(
								"tabs",
								(pe, $e) => pe.tabId === J,
								"bubbles",
								(pe, $e) => pe.id === te.id && pe.type === "ai",
								se,
								(pe, $e) => $e === Q.length - 1,
								re,
								"running",
							);
							let oe;
							const ae = {
								interpreterModeCell: Z,
								activeNotebook: ee,
								tabId: J,
								reportFailure: (pe) => {
									const $e = "output";
									this.q.setChatData(
										"tabs",
										(fe, me) => fe.tabId === J,
										"bubbles",
										(fe, me) => fe.id === te.id && fe.type === "ai",
										se,
										(fe, me) => me === Q.length - 1,
										"status",
										"failure",
									),
										this.q.setChatData(
											"tabs",
											(fe, me) => fe.tabId === J,
											"bubbles",
											(fe, me) => fe.id === te.id && fe.type === "ai",
											se,
											(fe, me) => me === Q.length - 1,
											$e,
											pe,
										);
								},
							};
							try {
								switch (Z.tool) {
									case m.InterpreterTool.PYTHON:
										oe = await this.executeNotebook(ae);
										break;
									case m.InterpreterTool.SHELL:
										oe = await this.executeShell(ae);
										break;
									default: {
										const ye = Z.tool;
										oe = await this.executeNotebook(ae);
									}
								}
								if (oe === !1) return;
								if (this.X.has(J)) {
									this.X.delete(J),
										this.q.setChatData(
											"tabs",
											(ue, fe) => ue.tabId === J,
											"bubbles",
											(ue, fe) => ue.id === te.id && ue.type === "ai",
											se,
											(ue, fe) => fe === Q.length - 1,
											re,
											"canceled",
										),
										this.openRetry(J);
									return;
								}
								const pe = "output";
								this.q.setChatData(
									"tabs",
									(ye, ue) => ye.tabId === J,
									"bubbles",
									(ye, ue) => ye.id === te.id && ye.type === "ai",
									se,
									(ye, ue) => ue === Q.length - 1,
									re,
									"success",
								),
									this.q.setChatData(
										"tabs",
										(ye, ue) => ye.tabId === J,
										"bubbles",
										(ye, ue) => ye.id === te.id && ye.type === "ai",
										se,
										(ye, ue) => ue === Q.length - 1,
										pe,
										oe.slice(0, 1e5),
									),
									this.w.executeCommand(c.$zV, {
										bubbleID: te.id,
										tabID: J,
										chatType: "interpreter",
									});
							} catch (pe) {
								console.error(pe), ae.reportFailure("Unknown error.");
							}
						} finally {
							this.Y.delete(J),
								this.n.setNonPersistentStorage(
									"inprogressAIGenerations",
									(ne) => ne.filter((ee) => ee.generationUUID !== ie),
								);
						}
					}
					async executeShell({
						interpreterModeCell: J,
						activeNotebook: W,
						tabId: X,
						reportFailure: Y,
					}) {
						const ie = W.terminalInstance.capabilities.get(
							z.TerminalCapability.CommandDetection,
						);
						if (ie === void 0)
							return (
								Y(
									"Shell not supported. Command detection must be available, for now.",
								),
								!1
							);
						let ne;
						const ee = new Promise((_) => {
							ne = ie.onCommandFinished((te) => {
								const Q = te.getOutput();
								_(Q);
							});
						});
						try {
							await W.terminalInstance.sendText(J.code, !0, !0);
							const _ = await Promise.race([
								ee,
								new Promise((te) => setTimeout(te, 6e4)),
							]);
							return _ === void 0
								? "Shell command timed out after 60 seconds."
								: _;
						} finally {
							ne?.dispose();
						}
					}
					async executeNotebook({
						interpreterModeCell: J,
						activeNotebook: W,
						tabId: X,
						reportFailure: Y,
					}) {
						const ie = W.notebookModelReference,
							ne = {
								source: J.code,
								language: "python",
								cellKind: s.CellKind.Code,
								outputs: [],
								metadata: {},
								mime: "",
							},
							ee = {
								editType: s.CellEditType.Replace,
								index: ie.cells.length,
								count: 0,
								cells: [ne],
							};
						ie.applyEdits([ee], !0, void 0, () => {}, void 0, !0);
						const _ = this.I.getMatchingKernel(ie);
						if (!_.selected)
							if (_.suggestions.length > 0) {
								const se = _.suggestions[0];
								this.I.selectKernelForNotebook(se, ie);
							} else if (_.all.length > 0) {
								const se = _.all[0];
								this.I.selectKernelForNotebook(se, ie);
							} else
								return (
									Y(
										"Failed to find a kernel to run the code. Please install the Jupyter extension.",
									),
									!1
								);
						const te = ie.cells[ie.cells.length - 1],
							Q = [te];
						return (
							this.$.has(X) && (this.$.delete(X), Q.unshift(ie.cells[0])),
							await this.G.executeNotebookCells(ie, Q, this.H),
							G(te.outputs)
						);
					}
					async submitUserFeedback(J, W) {
						try {
							(
								await this.r.interpreterClient()
							).logInterpreterExplicitUserFeedback({
								conversationUuid: J,
								userFeedback: W,
								userFeedbackDetails: "",
							});
						} catch (X) {
							console.warn(
								X,
								"Failed to submit interpreter user feedback. IGNORING.",
							);
						}
					}
					ab(J, W, X) {
						const Y = this.q.chatData.tabs.find((te) => te.tabId === J);
						if (Y === void 0) return;
						const ie = Y.bubbles.find((te) => te.id === W);
						if (ie === void 0 || ie.type !== "ai") return;
						const ne = (0, I.$eHb)(ie.text, X),
							ee = (0, I.$cHb)(
								(0, I.$eHb)(ie.text, X + 1).slice(ne.length),
								ie.interpreterModeCells,
							);
						let _ = ie.id;
						if (
							(this.q.setChatData(
								"tabs",
								(te, Q) => te.tabId === J,
								"bubbles",
								(te) => {
									const Q = te.findIndex((Z) => Z.id === W);
									return Q === -1 ? te : te.slice(0, Q + 1);
								},
							),
							ne.trim() === "")
						) {
							const te = Y.bubbles.findIndex((Z) => Z.id === _);
							if (te === -1 || te === 0) return;
							_ = Y.bubbles[te - 1].id;
						} else
							(0, M.batch)(() => {
								this.q.setChatData(
									"tabs",
									(Q, Z) => Q.tabId === J,
									"bubbles",
									(Q, Z) => Q.id === ie.id && Q.type === "ai",
									"text",
									ne,
								),
									this.q.setChatData(
										"tabs",
										(Q, Z) => Q.tabId === J,
										"bubbles",
										(Q, Z) => Q.id === ie.id && Q.type === "ai",
										"interpreterModeCells",
										(Q) => [...(Q ?? []).slice(0, X)],
									);
							});
						return { bubbleId: _, retryPreviousAttempt: ee };
					}
					retryWithFeedback(J, W, X, Y) {
						try {
							const ie = this.ab(J, X, Y);
							if (ie === void 0) return;
							const { bubbleId: ne, retryPreviousAttempt: ee } = ie;
							this.w.executeCommand(c.$zV, {
								bubbleID: ne,
								tabID: J,
								chatType: {
									case: "interpreter",
									retryInstructions: W,
									retryPreviousAttempt: ee,
								},
							});
						} finally {
							this.closeRetry(J), this.w.executeCommand(c.$eX);
						}
					}
					async cancel(J) {
						try {
							const W = await this.Z(J);
							W &&
								(this.G.cancelNotebookCells(
									W.notebookModelReference,
									W.notebookModelReference.cells,
								),
								W.terminalInstance.interrupt());
						} finally {
							this.f.fire(J);
						}
					}
					createNotebook() {
						return this.createNotebookAsync()[0];
					}
					createNotebookAsync() {
						const J = n.URI.joinPath(
								this.F.userHome,
								this.y.dataFolderName,
								"interpreter-notebooks",
							),
							X =
								`${new Date().toISOString()}-${(0, o.$9g)()}.ipynb`.replaceAll(
									":",
									"_",
								),
							Y = n.URI.joinPath(J, X),
							ie = this.C.createFile(Y);
						return (
							this.C.resolve(J)
								.then((ne) => {
									ne.children &&
										(ne.children.sort((ee, _) =>
											_.resource.fsPath.localeCompare(ee.resource.fsPath),
										),
										ne.children.length > 10 &&
											ne.children.slice(10).forEach((ee) => {
												this.C.del(ee.resource);
											}));
								})
								.catch((ne) => {
									console.error(ne);
								}),
							[Y, ie]
						);
					}
					async changeKernel() {
						const J = this.bb.at(0);
						if (J === void 0) {
							console.warn("No active notebook found");
							return;
						}
						await this.Q.createInstance(F.$b4b).showQuickPick({
							textModel: J.notebookModelReference,
							scopedContextKeyService: this.H,
						});
						const X = this.I.getMatchingKernel(J.notebookModelReference);
						X.selected &&
							this.n.setApplicationUserPersistentStorage(
								"interpreterModeSettings",
								"defaultKernelId",
								X.selected.id,
							);
					}
					async cb(J) {
						for (; this.bb.length > J; ) {
							const W = this.bb[0];
							W.notebookModelReference.dispose(),
								this.accessUuids.delete(W.accessUuid),
								(this.bb = this.bb.slice(1)),
								this.db.delete(W.tabId);
						}
					}
					updateRunningMetadata(J, W) {
						const X = this.q.chatData.tabs.find((ee) => ee.tabId === J);
						if (X === void 0) return;
						const Y = X.bubbles.at(-1);
						if (Y === void 0 || Y.type !== "ai") return;
						this.q.setChatData(
							"tabs",
							(ee, _) => ee.tabId === J,
							"bubbles",
							(ee, _) => ee.type === "ai" && _ === X.bubbles.length - 1,
							"interpreterModeCells",
							(ee, _) => _ === (Y.interpreterModeCells?.length ?? 0) - 1,
							"runningMetadata",
							(ee) => ({ ...ee, ...W }),
						);
					}
					async eb(J, W) {
						let X = () => {},
							Y = () => {},
							ie = !1;
						try {
							if (
								this.bb.find(($e) =>
									l.$dh.isEqual($e.notebookModelReference.uri, J),
								) ||
								this.db.has(W)
							)
								return;
							if (
								(this.db.set(
									W,
									new Promise(($e, ye) => {
										(X = $e),
											(Y = (ue) => {
												ye(ue);
											});
									}),
								),
								!(await this.C.exists(J)))
							) {
								const [$e, ye] = this.createNotebookAsync();
								await ye,
									(J = $e),
									this.q.setChatData(
										"tabs",
										(ue, fe) => ue.tabId === W,
										"interpreterData",
										"cursorNotebookUri",
										J.toJSON(),
									);
							}
							const ee = await this.P.createTerminal({
								config: {
									isFeatureTerminal: !0,
									isTransient: !0,
									hideFromUser: !0,
								},
							});
							await this.cb(2),
								await this.N.whenInstalledExtensionsRegistered();
							const _ = this.M.getContributedNotebookTypes(J),
								Q = _.at(0)?.id || _.at(0)?.id;
							if (Q === void 0) throw new Error("No view type found");
							const Z = await this.M.createNotebookTextModel(Q, J),
								se = Z,
								re = (0, y.$kdd)(
									se.cells
										.at(0)
										?.textBuffer.getLinesContent()
										.join(`
`),
								),
								le = re !== void 0 && re.length > 10 ? re : (0, o.$9g)();
							this.bb.push({
								notebookModelReference: Z,
								accessUuid: le,
								tabId: W,
								terminalInstance: ee,
							}),
								this.accessUuids.add(le);
							const oe = this.L.getWorkspace().folders.at(0),
								ae = (0, y.$jdd)(W, oe?.uri.fsPath, le);
							if (
								se.cells.length === 0 ||
								se.cells[0].textBuffer.getLinesContent().join(`
`) !== ae
							) {
								const $e = {
										source: ae,
										language: "python",
										cellKind: s.CellKind.Code,
										outputs: [],
										metadata: {},
										mime: "",
									},
									ye = {
										editType: s.CellEditType.Replace,
										index: 0,
										count: 0,
										cells: [$e],
									};
								se.applyEdits([ye], !0, void 0, () => {}, void 0, !0);
							}
							const pe = this.I.getMatchingKernel(se);
							if (!pe.selected) {
								const $e = pe.all.find(
									(ye) =>
										ye.id ===
											this.n.applicationUserPersistentStorage
												.interpreterModeSettings.defaultKernelId &&
										this.n.applicationUserPersistentStorage
											.interpreterModeSettings.defaultKernelId !== void 0,
								);
								if ($e) this.I.selectKernelForNotebook($e, se);
								else if (pe.suggestions.length > 0) {
									const ye = pe.suggestions[0];
									this.I.selectKernelForNotebook(ye, se);
								} else if (pe.all.length > 0) {
									const ye = pe.all[0];
									this.I.selectKernelForNotebook(ye, se);
								} else {
									const ye = new Promise((ve) => {
										setTimeout(() => {
											ve("timeout");
										}, 5e3);
									});
									let ue = { c: void 0 };
									const fe = new Promise((ve) => {
											ue.c = this.I.onDidAddKernel(() => {
												ve(void 0);
											});
										}),
										me = await Promise.race([ye, fe]);
									if ((ue.c?.dispose(), me === "timeout")) {
										this.$.add(W),
											console.error(
												"No kernels available for notebook. Maybe install Jupyter or install Python?",
											);
										return;
									}
								}
							}
							await this.G.executeNotebookCells(se, [se.cells[0]], this.H);
						} catch (ne) {
							console.error(ne), Y(ne), (ie = !0);
						} finally {
							ie || X();
						}
					}
					async readFileContents(J) {
						try {
							return (await this.C.readFile(J)).value.toString();
						} catch (W) {
							return console.error("Watcher: error reading file -- ", W), "";
						}
					}
					async readFile(J) {
						const W = this.O.getModel(J);
						if (W)
							return new k.$Ws({
								contents: W.getValue(),
								relativeWorkspacePath: this.L.asRelativePath(J),
							});
						{
							const X = await this.C.readFile(J);
							return new k.$Ws({
								relativeWorkspacePath: this.L.asRelativePath(J),
								contents: X.value.toString(),
							});
						}
					}
					async streamInterpreter(J) {
						await this.r.setChatInjectedContext(
							J.generationMetadata,
							J.options,
						);
						const W = this.W.has(J.generationMetadata.tabId);
						W && this.W.delete(J.generationMetadata.tabId);
						const [X, Y] = this.r.registerNewGeneration({
								metadata: J.generationMetadata,
								generationUUID: J.generationUUID,
							}),
							ne =
								this.n.workspaceUserPersistentStorage.persistentChatMetadata.find(
									(Ce) =>
										Ce.bubbleId === J.generationMetadata.bubbleId &&
										Ce.tabId === J.generationMetadata.tabId,
								)?.injectedContext,
							ee =
								J.options?.overrideModelDetails ||
								this.r.getModelDetails({ specificModelField: "regular-chat" });
						this.u.publicLogCapture("Submitted interpreter chat");
						const _ = [];
						let te,
							Q = [];
						for (const Ce of J.interpreterData.openFiles)
							try {
								const Le =
										Ce === "current-file"
											? await this.r.getCurrentFileInfo()
											: await this.readFile(n.URI.revive(Ce)),
									Fe = {
										file: Le,
										scrollTopLineNumber: Math.max(
											(Le?.cursorPosition?.line ?? 1) - 30,
											1,
										),
									};
								_.push(Fe),
									Ce === "current-file" &&
										Le !== void 0 &&
										(te = this.L.resolveRelativePath(Le.relativeWorkspacePath));
							} catch {
								Ce !== "current-file" && Q.push(Ce);
							}
						this.q.setChatData(
							"tabs",
							(Ce, Le) => Ce.tabId === J.generationMetadata.tabId,
							"interpreterData",
							"openFiles",
							(Ce) => {
								const Le = Ce.filter(
									(Fe) =>
										Fe !== "current-file" &&
										!Q.some((Oe) =>
											l.$dh.isEqual(n.URI.revive(Oe), n.URI.revive(Fe)),
										),
								);
								return te !== void 0 && Le.push(te.toJSON()), Le;
							},
						);
						const Z = J.conversationHistory
								.map((Ce, Le) =>
									Ce.text !== ""
										? (Le === J.conversationHistory.length - 1 ||
												Le === J.conversationHistory.length - 2) &&
											Ce.type === u.ConversationMessage_MessageType.HUMAN
											? `Most important and relevant query: ${Ce.text}`
											: Ce.text
										: null,
								)
								.filter((Ce) => Ce !== null)
								.join(`

`),
							se = new AbortController();
						Y.signal.addEventListener("abort", () => {
							se.abort();
						});
						const re = await Promise.race([
								this.z.parallelSearch(Z, 20, 20, { abortSignal: se.signal }),
								new Promise((Ce) =>
									setTimeout(() => {
										se.abort(), Ce([]);
									}, 2e3),
								),
							]),
							le = await this.J.getCmdKDebugInfo(),
							oe = this.L.getWorkspace().folders.at(0)?.uri;
						let ae = oe
							? await this.readFileContents(
									n.URI.joinPath(oe, ".cursor", "interpreter.md"),
								)
							: "";
						ae.trim() !== "" &&
							(ae += `
`);
						const pe = await this.Z(J.generationMetadata.tabId);
						let $e = "";
						pe !== void 0 && ($e = await pe.terminalInstance.getCwd());
						const ye = {
								openFiles: _,
								conversation: J.conversationHistory,
								explicitContext: await this.r.getExplicitContext(),
								highLevelFolderDescription:
									await this.r.getHighLevelFolderDescription(),
								modelDetails: ee,
								cmdKDebugInfo: le,
								retryInstructions: J.retryInstructions,
								conversationUuid: J.generationMetadata.tabId,
								retryPreviousAttempt: J.retryPreviousAttempt,
								documentationIdentifiers: ne?.usedDocs
									? [...ne.usedDocs.map((Ce) => Ce.docId)]
									: [],
								summary: J.generationMetadata.summaryText,
								summaryUpUntilIndex: J.generationMetadata.summaryUpUntilIndex,
								scoredCodebaseContext: re,
								quotes: J.generationMetadata.quotes ?? [],
								supportsShellTool: !0,
								globalDescription: ae,
								terminalCwd: $e,
							},
							fe = (await this.r.interpreterClient()).streamInterpreter(
								new m.$K_({ ...ye }),
								{ signal: Y.signal, headers: (0, D.$m6b)(J.generationUUID) },
							);
						let me = "";
						for (const [Ce, Le] of [
							...J.conversationHistory.entries(),
						].reverse())
							if (
								Le.type === u.ConversationMessage_MessageType.HUMAN &&
								Le.text !== ""
							) {
								me = J.conversationHistory[Ce].text;
								break;
							}
						let ve = 0;
						J.conversationHistory.length === 0 ||
						J.conversationHistory[J.conversationHistory.length - 1].type ===
							u.ConversationMessage_MessageType.HUMAN
							? this.r.addToPromptHistory({
									prompt: me,
									commandType: r.CommandType.CHAT,
								})
							: (ve =
									J.conversationHistory[J.conversationHistory.length - 1]
										.interpreterResults?.length ?? 0);
						const ge = this.fb({
								streamer: fe,
								generationMetadata: J.generationMetadata,
								generationUUID: J.generationUUID,
								request: ye,
								abortController: Y,
								preventFollowup: J.preventFollowup,
								interpreterBlockIndex: ve,
								interpreterData: J.interpreterData,
								shouldAutoExecute: W,
							}),
							be = N.$N_.typeName + "/" + N.$N_.methods.streamInterpreter.name;
						return this.r.streamResponse({
							modelDetails: ee,
							generationUUID: J.generationUUID,
							source: "chat",
							streamer: ge,
							streamerURL: be,
							rethrowCancellation: !0,
							rerun: J.options?.rerun,
							failSilently: J.options?.failSilently,
						});
					}
					async *fb({
						interpreterBlockIndex: J,
						generationMetadata: W,
						streamer: X,
						request: Y,
						generationUUID: ie,
						interpreterData: ne,
						abortController: ee,
						preventFollowup: _,
						shouldAutoExecute: te,
					}) {
						let Q = !1,
							Z = "",
							se = !1,
							re = "",
							le = m.InterpreterTool.UNSPECIFIED,
							oe = !1,
							ae = !1;
						try {
							const pe = this.q,
								$e = async function* () {
									(Q = !1),
										(se = !0),
										yield "\n```",
										(Z = Z.slice(4)),
										re[0] ===
											`
` && (re = re.slice(1)),
										pe.setChatData(
											"tabs",
											(ue, fe) => ue.tabId === W.tabId,
											"bubbles",
											(ue, fe) => ue.id === W.aiBubbleId && ue.type === "ai",
											"interpreterModeCells",
											(ue) => [
												...(ue ?? []),
												{
													status: "pending",
													output: void 0,
													code: re,
													tool: le,
												},
											],
										),
										(oe = !0),
										yield `
[[[interpreter_result_` +
											J +
											`]]]
`,
										(Z = "");
								};
							for await (const ye of X)
								if (ye.text.length !== 0)
									if (((Z += ye.text), Q))
										if (Z.startsWith("\n```")) {
											yield* $e();
											break;
										} else
											for (; !"\n```".startsWith(Z) && Z.length > 0; )
												(se = !0), yield Z[0], (re += Z[0]), (Z = Z.slice(1));
									else
										for (; Z.length > 0; ) {
											let ue = !1;
											for (const fe of Object.values(m.InterpreterTool)) {
												if (typeof fe == "string") continue;
												const me = (0, I.$aHb)(fe),
													ve = se
														? `
\`\`\`${me}`
														: `\`\`\`${me}`;
												if (Z.startsWith(ve)) {
													(Q = !0),
														ne.cursorNotebookUri &&
															this.eb(
																n.URI.revive(ne.cursorNotebookUri),
																W.tabId,
															),
														(se = !0),
														yield ve.replace(
															`\`\`\`${me}`,
															`\`\`\`${(0, I.$bHb)(fe)}`,
														),
														(Z = Z.slice(ve.length)),
														(ue = !0),
														(le = fe);
													break;
												}
											}
											if (ue) break;
											(se = !0), yield Z[0], (Z = Z.slice(1));
										}
							Q && (yield* $e()), Z.length > 0 && (yield Z);
						} catch (pe) {
							throw ((ae = !0), pe);
						} finally {
							oe || ae
								? (_(),
									ae &&
										this.openRetry(W.tabId, W.aiBubbleId, J, {
											noNeedToCancel: !0,
										}),
									oe &&
										te &&
										(this.autoExecuteNext(W.tabId),
										setTimeout(() => {
											this.executeAndContinue(W.tabId);
										}, 10)))
								: this.w.executeCommand(a.$Cgc);
						}
					}
				};
				(e.$ldd = V),
					(e.$ldd = V =
						Ne(
							[
								j(0, i.$0zb),
								j(1, C.$kgc),
								j(2, d.$Nfc),
								j(3, w.$Z6b),
								j(4, E.$km),
								j(5, h.$ek),
								j(6, g.$Bk),
								j(7, A.$J6b),
								j(8, f.$ll),
								j(9, p.$ucd),
								j(10, $.$c6),
								j(11, v.$6j),
								j(12, S.$f6),
								j(13, R.$06b),
								j(14, P.$Vi),
								j(15, O.$MIb),
								j(16, B.$q2),
								j(17, L.$QO),
								j(18, U.$iIb),
								j(19, t.$Li),
								j(20, x.$aM),
								j(21, H.$IY),
								j(22, q.$kcc),
							],
							V,
						));
				function G(K) {
					return K.map((W) =>
						W.outputs
							.map((Y) => {
								if (Y.mime === "text/plain") return Y.data.toString();
								if (Y.mime === "application/vnd.code.notebook.error") {
									const ie = Y.data.toString();
									let ne = JSON.parse(ie);
									const ee = ne.stack
										.replace(/\x1B\[([0-9]{1,2}(;[0-9]{1,2})?)?[m|K]/g, "")
										.replace(/\u001b\[0/g, "");
									return (
										(ne = { ...ne, stack: ee }), JSON.stringify(ne, null, 2)
									);
								} else {
									if (Y.mime === "application/vnd.code.notebook.stdout")
										return Y.data.toString();
									if (Y.mime === "application/vnd.code.notebook.stderr")
										return Y.data.toString();
								}
								return "";
							})
							.join(`

`),
					).join(`

`);
				}
			},
		)
