import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../proto/aiserver/v1/aiserver_connectweb.js';
import '../../../../../proto/aiserver/v1/aiserver_pb.js';
import '../../../../base/common/cancellation.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/common/languages.js';
import '../../../../editor/common/model.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../editor/contrib/codeAction/browser/codeAction.js';
import '../../../../editor/contrib/codeAction/common/types.js';
import '../../../../platform/cursor/browser/aiEverythingProviderService.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/markers/common/markers.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../aiCpp/browser/cppEventLogger.js';
import '../../aiCpp/electron-sandbox/cppTypeService.js';
import '../../../services/ai/browser/backendClient.js';
import '../../../services/ai/browser/metricsService.js';
import '../../../services/statusbar/browser/statusbar.js';
import '../../../../editor/common/core/range.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/services/languageFeatures.js';
import '../../../services/ai/browser/aiMiscServices.js';
import '../../../../editor/common/core/position.js';
import '../../../../platform/instantiation/common/extensions.js';
import './importPredictionWidget.js';
import '../../../../base/common/map.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/uri.js';
import '../../../../editor/contrib/editorState/browser/editorState.js';
import '../../aiFeatureStatusService/browser/aiFeatureStatusService.js';
import '../../aiCpp/electron-sandbox/cppService.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../base/common/cursorAsync.js';
import '../../../../editor/contrib/folding/browser/folding.js';
import '../../../../platform/aiAssert/browser/aiAssertService.js';
import '../../../../css!vs/workbench/contrib/aiImportPrediction/electron-sandbox/importPrediction.js';
define(
			de[4187],
			he([
				1, 0, 341, 148, 33, 65, 74, 64, 42, 393, 291, 280, 5, 90, 84, 45, 134,
				25, 332, 1300, 285, 619, 166, 17, 3, 69, 137, 48, 20, 2973, 59, 19, 9,
				439, 287, 1978, 31, 741, 350, 668, 2364,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*aiserver_connectweb*/,
				i /*aiserver_pb*/,
				w /*cancellation*/,
				E /*codeEditorService*/,
				C /*languages*/,
				d /*model*/,
				m /*resolverService*/,
				r /*codeAction*/,
				u /*types*/,
				a /*aiEverythingProviderService*/,
				h /*instantiation*/,
				c /*markers*/,
				n /*progress*/,
				g /*reactiveStorageService*/,
				p /*reactiveStorageTypes*/,
				o /*workspace*/,
				f /*cppEventLogger*/,
				b /*cppTypeService*/,
				s /*backendClient*/,
				l /*metricsService*/,
				y /*statusbar*/,
				$ /*range*/,
				v /*lifecycle*/,
				S /*languageFeatures*/,
				I /*aiMiscServices*/,
				T /*position*/,
				P /*extensions*/,
				k /*importPredictionWidget*/,
				L /*map*/,
				D /*resources*/,
				M /*uri*/,
				N /*editorState*/,
				A /*aiFeatureStatusService*/,
				R /*cppService*/,
				O /*commands*/,
				B /*cursorAsync*/,
				U /*folding*/,
				z /*aiAssertService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				const F = 5,
					x = 5,
					H = 5e3 * 60;
				let q = class extends v.$1c {
					aiClient() {
						return this.c.get();
					}
					constructor(K, J, W, X, Y, ie, ne, ee, _, te, Q, Z, se, re, le) {
						super(),
							(this.s = K),
							(this.t = J),
							(this.u = W),
							(this.w = X),
							(this.y = Y),
							(this.z = ie),
							(this.C = ne),
							(this.F = ee),
							(this.G = _),
							(this.H = te),
							(this.I = Q),
							(this.J = Z),
							(this.L = se),
							(this.M = re),
							(this.N = le),
							(this.g = void 0),
							(this.h = new Map()),
							(this.m = new L.$Jc(100)),
							(this.n = []),
							(this.r = []),
							(this.Q = [
								{
									source: "ts",
									codeMatches: (oe) => ["2304", "2503", "2552"].includes(oe),
									getSymbolName: (oe) => {
										const ae = oe.match(/^Cannot find name '(.*?)'/);
										if (ae) return ae[1];
									},
								},
								{
									source: "Pylance",
									codeMatches: (oe) => oe?.value === "reportUndefinedVariable",
									getSymbolName: (oe) => {
										const ae = oe.match(/^"(.*?)" is not defined$/);
										if (ae) return ae[1];
									},
								},
							]),
							(this.R = 0),
							(this.S = 5),
							(this.hb = 10),
							(this.ib = 35),
							(this.lb = 50),
							(this.mb = 1.5),
							(this.nb = []),
							(this.ob = []),
							(this.pb = 50),
							(this.qb = 10),
							(this.rb = !1),
							(this.Eb = []),
							(this.Fb = 10),
							(this.Gb = 6e4),
							(this.Ib = 1e4),
							(this.Kb = new B.$Opb(1)),
							(this.c = this.w.createInstance(s.$q6b, { service: t.$q0 }));
					}
					registerCppMethods(K) {
						this.g = K;
					}
					handleNewImportPredictionConfig() {
						const K =
							this.s.applicationUserPersistentStorage.cppConfig
								?.importPredictionConfig;
						K !== void 0 &&
							(this.s.setApplicationUserPersistentStorage(
								"backendHasDisabledCppAutoImport",
								K.isDisabledByBackend,
							),
							this.s.applicationUserPersistentStorage.cppAutoImportEnabled ===
								void 0 &&
								K.shouldTurnOnAutomatically &&
								this.s.setApplicationUserPersistentStorage(
									"cppAutoImportEnabled",
									!0,
								));
					}
					O() {
						return (
							this.s.applicationUserPersistentStorage.cppConfig
								?.importPredictionConfig?.pythonEnabled === !0 ||
							this.s.applicationUserPersistentStorage
								.userHasEnabledImportPredictionForPython === !0
						);
					}
					P(K) {
						return [
							".js",
							".ts",
							".jsx",
							".tsx",
							...(this.O() ? [".py"] : []),
						].some((W) => K.toString().endsWith(W));
					}
					async handleUpdatedLintErrors({
						openEditor: K,
						uri: J,
						position: W,
						allMarkers: X,
						alwaysHandle: Y,
						source: ie,
					}) {
						if (
							!this.isEnabled() ||
							!this.P(J) ||
							!this.g?.isTextFocusedOrSimilarlyFocused(K)
						)
							return;
						const ne = X.filter(
							(_) =>
								[c.MarkerSeverity.Error, c.MarkerSeverity.Warning].includes(
									_.severity,
								) && D.$dh.isEqual(_.resource, J),
						);
						this.Db(K);
						const ee = ne
							.sort(
								(_, te) =>
									Math.abs(_.startLineNumber - W.lineNumber) -
									Math.abs(te.startLineNumber - W.lineNumber),
							)
							.filter((_) => {
								const te = this.$(_);
								if (te === void 0 || this.xb(K, _) !== te) return !1;
								const Z = this.ab(K, _);
								return Z !== void 0 && Z.seenAt.getTime() > Date.now() - H
									? (Z.currentMarkers.push(_),
										Z.status === "debouncing"
											? ((Z.status = "computing"), !0)
											: !1)
									: Math.abs(_.startLineNumber - W.lineNumber) >= R.$8ed
										? !1
										: (this.m.set(this.Z(K, _), {
												uri: J,
												symbolName: te,
												currentMarkers: [_],
												status: "computing",
												seenAt: new Date(),
												versionComputedAt: K.getModel()?.getVersionId() ?? 0,
											}),
											!0);
							});
						this.gb(K, X), this.showCorrectUI(K, { hideIfSameState: !Y });
						try {
							if (ee.length > 0) {
								const _ = performance.now();
								await this.U(K, ee);
							}
						} catch {
						} finally {
							ee.length > 0;
						}
					}
					async U(K, J) {
						if (!this.isEnabled()) return;
						const W = K.getModel();
						if (W === null) return;
						const X = W.uri,
							Y = performance.now(),
							ie = new N.$Ozb(W, w.CancellationToken.None),
							ne = 250;
						await new Promise((_) => setTimeout(_, ne));
						const ee = W.getVersionId();
						await Promise.all(
							J.map(async (_) => {
								let te;
								try {
									if (ie.token.isCancellationRequested)
										throw new Error("cts.token.isCancellationRequested");
									if (this.R >= this.S)
										throw new Error("too many code actions requests in flight");
									this.R++,
										(te = await (0, r.$UAb)(
											this.J.codeActionProvider,
											W,
											$.$iL.lift(_),
											{
												type: C.CodeActionTriggerType.Auto,
												triggerAction: u.CodeActionTriggerSource.QuickFix,
											},
											n.$0N.None,
											w.CancellationToken.None,
										));
								} catch (ye) {
									const ue = this.ab(K, _);
									throw (ue && (ue.status = "debouncing"), ye);
								} finally {
									this.R--;
								}
								if (te === void 0)
									throw new Error(
										"no code actions found - this should be unreachable",
									);
								const Q = (ye) =>
										ye !== void 0 &&
										Array.isArray(ye.arguments) &&
										ye.arguments.length === 1 &&
										typeof ye.arguments[0] == "string" &&
										ye.arguments[0].startsWith("python.addImport"),
									Z = te.allActions.filter(
										(ye) =>
											!ye.action.disabled &&
											(ye.action.title.includes("Add import from") ||
												ye.action.title.includes("Update import from") ||
												Q(ye.action.command)),
									),
									se = new Map();
								Z.filter(
									(ye) =>
										ye.action.edit?.edits.at(0) !== void 0 &&
										"textEdit" in ye.action.edit.edits[0],
								).forEach((ye) => {
									ye.action.edit !== void 0 && se.set(ye, ye.action.edit);
								});
								const le = Z.flatMap((ye) =>
										Q(ye.action.command)
											? [{ action: ye, command: ye.action.command }]
											: [],
									),
									oe = this.ab(K, _),
									ae = 7;
								le.length <= 4 &&
									this.O() &&
									(await Promise.allSettled(
										le.map(async ({ action: ye, command: ue }) => {
											if (oe === void 0) return;
											const fe = await this.Lb(ye, ue, oe.symbolName);
											fe !== void 0 && se.set(ye, fe);
										}),
									));
								const $e = [...se.entries()].flatMap(([ye, ue]) => {
									if (ue === void 0) return [];
									const fe = ue.edits.flatMap((me) => {
										if (!("textEdit" in me)) return [];
										if (!D.$dh.isEqual(me.resource, K.getModel()?.uri))
											return [];
										const ve = me.textEdit.text;
										return K.getModel()?.getValueInRange(me.textEdit.range) ===
											ve
											? []
											: [{ edit: me, action: ye }];
									});
									return fe.length === 1
										? { edit: fe[0].edit, action: ye }
										: fe.every(
													(me) =>
														me.edit.textEdit.range.startLineNumber ===
															fe[0].edit.textEdit.range.startLineNumber &&
														me.edit.textEdit.range.endLineNumber ===
															fe[0].edit.textEdit.range.endLineNumber &&
														me.edit.textEdit.range.startColumn ===
															fe[0].edit.textEdit.range.startColumn &&
														me.edit.textEdit.range.endColumn ===
															fe[0].edit.textEdit.range.endColumn,
												)
											? {
													edit: {
														...fe[0].edit,
														textEdit: {
															...fe[0].edit.textEdit,
															text: fe
																.map((me) => me.edit.textEdit.text)
																.reverse()
																.join(""),
														},
													},
													action: ye,
												}
											: [];
								});
								if ($e.length > 0 && oe !== void 0) {
									if ($e.length > ae)
										if (oe) {
											(oe.status = "error"),
												(oe.errorReason = new Error(
													"too many code actions, not doing anything",
												));
											return;
										} else
											throw new Error(
												"lintError is undefined, this should not happen",
											);
									const ye = await this.W(X, K, $e, _, oe);
									if (oe)
										(oe.versionComputedAt = ee),
											(oe.status = ye.status),
											ye.status === "error" && (oe.errorReason = ye.reason);
									else
										throw new Error(
											"lintError is undefined, this should not happen",
										);
								} else if (oe) oe.status = "no-actions";
								else
									throw new Error(
										"lintError is undefined, this should not happen",
									);
							}),
						);
					}
					async W(K, J, W, X, Y) {
						if (!this.isEnabled())
							return {
								status: "error",
								reason: new Error("importPredictionEnabled is false"),
							};
						if (W.length === 0)
							return {
								status: "error",
								reason: new Error(
									"no edits with actions, this should not happen",
								),
							};
						try {
							if (this.n.find((He) => this.Z(J, He.marker) === this.Z(J, X)))
								return { status: "pending" };
							const ne = J.getModel();
							if (ne === null) throw new Error("model is null");
							const ee = ne.getValue(),
								_ = ne.getVersionId();
							if (ne.uri !== K)
								throw new Error(
									"model uri is different from uri, not doing anything",
								);
							let te =
								this.s.workspaceUserPersistentStorage.uniqueCppWorkspaceId;
							if (
								(te === void 0 &&
									((te =
										Math.random().toString(36).substring(2, 15) +
										Math.random().toString(36).substring(2, 15)),
									this.s.setWorkspaceUserPersistentStorage(
										"uniqueCppWorkspaceId",
										te,
									)),
								!W.every(
									(He) =>
										He.edit.textEdit.range.startColumn === 1 &&
										He.edit.textEdit.range.endColumn === 1 &&
										He.edit.textEdit.text.includes(`
`),
								) && X.source === "ts")
							)
								return (
									await this.Y(J, K, W[0].action, W[0].edit.textEdit, X),
									{ status: "pending" }
								);
							const Z = W.map(
									(He) => He.edit.textEdit.range.startLineNumber,
								).reduce((He, Ke) => ((He[Ke] = (He[Ke] || 0) + 1), He), {}),
								se = Object.entries(Z).reduce(
									(He, [Ke, Je]) => (Je > He[1] ? [parseInt(Ke + ""), Je] : He),
									[0, 0],
								)[0],
								re = await this.moveLineToEndOfImportsSectionExclusive(J, se),
								le = new T.$hL(re, 1);
							if (this.g?.getPartialCppRequest === void 0)
								throw new Error(
									"getPartialCppRequest is undefined, this should not happen",
								);
							const oe = await this.g
								.getPartialCppRequest({
									editor: J,
									uri: K,
									modelValue: ee,
									modelVersion: _,
									position: le,
									source: p.CppSource.Typing,
									shouldRelyOnFileSyncForFile: !1,
								})
								.catch((He) => {
									throw He;
								});
							if (J.getModel()?.uri !== K)
								throw new Error(
									"model uri is different from uri, not doing anything",
								);
							const ae = W.map(
									(He) =>
										new i.$ZE({
											text: He.edit.textEdit.text,
											editRange: {
												startLineNumber: le.lineNumber,
												startColumn: 1,
												endLineNumberInclusive: le.lineNumber,
												endColumn: 1,
											},
										}),
								),
								{ getModelName: pe } = this.g;
							if (pe === void 0)
								throw new Error(
									"getModelName is undefined, this should not happen",
								);
							const $e = this.g?.getRecentAndNearLocationLinterErrors?.(K, X),
								ye = $e && { ...$e, errors: $e.errors.slice(0, F) },
								ue = this.Bb(X),
								fe = new i.$1E({
									cppRequest: {
										...oe,
										controlToken: i.StreamCppRequest_ControlToken.LOUD,
										modelName: pe(),
										diffHistoryKeys: [],
										contextItems: [],
										parameterHints: this.z.getRelevantType(J),
										lspContexts: [],
										filesyncUpdates: [],
										workspaceId: te,
										timeAtRequestSend: Date.now(),
										linterErrors: ye,
									},
									suggestedEdits: ae,
									markerTouchesGreen: ue,
									currentFileContentsForLinterErrors:
										this.g?.truncateCurrentFile(
											ee,
											X.startLineNumber,
											ne.getEOL(),
											ne,
										),
								}),
								me = performance.now(),
								ve = await (await this.aiClient()).getCppEditClassification(fe),
								{ scoredEdits: ge, shouldNoop: be, generationEdit: Ce } = ve,
								Le = V(ge.at(0)),
								Fe = W.find(
									({ action: He, edit: Ke }) =>
										Ke.textEdit.text === Le.edit?.text,
								);
							if (Fe === void 0) throw new Error("bestImport is undefined");
							const Oe = V(Le?.logProbs);
							return (be ??
								this.X({
									bestEditLogprobs: Oe,
									generationEditLogprobs: Ce?.logProbs,
									opEditString: Fe.edit.textEdit.text,
									symbolName: Y.symbolName,
									markerTouchesGreen: ue,
								}))
								? { status: "noop" }
								: (await this.Y(J, K, Fe.action, Fe.edit.textEdit, X),
									{ status: "pending" });
						} catch (ie) {
							return { status: "error", reason: ie };
						} finally {
						}
					}
					X({
						bestEditLogprobs: K,
						generationEditLogprobs: J,
						opEditString: W,
						symbolName: X,
						markerTouchesGreen: Y,
					}) {
						const ne = ((re, le) => {
								for (let oe = re.length - 1; oe >= 0; oe--)
									if (le(re[oe], oe)) return oe;
								return -1;
							})(K.tokens, (re, le) =>
								K.tokens.slice(le).join("").trim().startsWith(W.trim()),
							),
							ee = K.tokens.findIndex(
								(re, le) =>
									le >= ne &&
									!!K.tokens
										.slice(ne, le)
										.join("")
										.trim()
										.match(new RegExp(`\\b${X}\\b`)),
							),
							_ = K.tokenLogprobs[ne],
							te = Math.min(0, ...K.tokenLogprobs.slice(ne + 1, ee)),
							Q = J?.tokens.join("").match(/(\w+)/g),
							Z = Y ? 2 : 1;
						return Q && Q.includes(X) && Math.exp(_) * Z > 0.1
							? !1
							: Math.exp(_ + te) * Z < 0.02;
					}
					async Y(K, J, W, X, Y) {
						if (!this.isEnabled()) return;
						const ne = [...this.n]
								.sort(
									(_, te) =>
										(this.ab(K, te.marker)?.seenAt.getTime() ?? 0) -
										(this.ab(K, _.marker)?.seenAt.getTime() ?? 0),
								)
								.slice(0, 20),
							ee = this.G.createModelReference(J);
						try {
							const _ = (await ee).object.textEditorModel;
							this.n = [
								...ne,
								{
									uri: J,
									action: W,
									edit: X,
									lineContentsAtStartOfEdit: _.getValueInRange(
										new $.$iL(
											X.range.startLineNumber,
											1,
											X.range.startLineNumber,
											1 / 0,
										),
									),
									marker: Y,
								},
							];
							const te = this.g?.getFocusedCodeEditor();
							te && this.showCorrectUI(te);
						} finally {
							(await ee).dispose();
						}
					}
					Z(K, J) {
						return JSON.stringify({
							owner: J.owner,
							uri: J.resource.toString(),
							symbolName: this.$(J),
						});
					}
					$(K) {
						const J = this.Q.find(
							(W) => W.source === K.source && W.codeMatches(K.code),
						);
						if (J !== void 0) return J.getSymbolName(K.message);
					}
					ab(K, J) {
						return this.m.get(this.Z(K, J));
					}
					bb(K, J) {
						return D.$dh.isEqual(K.uri, J.getModel()?.uri);
					}
					maybeAcceptShownImport(K) {
						if (!this.isEnabled()) return !1;
						const { q: J } = this;
						if (J === void 0) return !1;
						if (!this.bb(J.shownImport, K)) return this.hideShownImport(K), !1;
						const W = K.getVisibleRanges(),
							X = K.getModel()?.getDecorationRange(J.decorationId);
						if (!X || !W.some((ne) => this.Cb(ne, X)))
							return this.hideShownImport(K), !1;
						const Y = this.ab(K, J.shownImport.marker);
						Y !== void 0 &&
							((Y.status = "accepted"),
							(Y.seenAt = new Date()),
							(async () => {
								try {
									if (this.zb(K, J.shownImport)) {
										const ne =
											(await Promise.race([
												this.cb(K, J.shownImport),
												(async () => {
													await new Promise((ee) => setTimeout(ee, 75));
												})(),
											])) ?? J.shownImport.action;
										await this.w.invokeFunction(
											r.$VAb,
											ne,
											r.ApplyCodeActionReason.FromAILightbulb,
											void 0,
											w.CancellationToken.None,
										);
									} else
										await this.w.invokeFunction(
											r.$VAb,
											J.shownImport.action,
											r.ApplyCodeActionReason.FromAILightbulb,
											void 0,
											w.CancellationToken.None,
										);
									this.s.setApplicationUserPersistentStorage(
										"howManyTimesHasUserAcceptedImportPrediction",
										(ne) => (ne ?? 0) + 1,
									);
								} catch {}
							})()),
							this.db(K, J.shownImport),
							this.yb(K, J.shownImport.edit);
						const ie = K.getModel()?.uri;
						return ie !== void 0 && this.Hb(ie), this.showCorrectUI(K), !0;
					}
					maybeRejectShownImport(K) {
						if (!this.isEnabled() || !K.hasTextFocus()) return !1;
						const J = K.getSelection();
						if (
							J !== null &&
							(J.startLineNumber !== J.endLineNumber ||
								J.startColumn !== J.endColumn)
						)
							return !1;
						const W = this.vb;
						return W === void 0 || !this.bb(W, K) || this.wb()
							? !1
							: (this.rejectImport(K, W), this.showCorrectUI(K), !0);
					}
					async cb(K, J) {
						const W = K.getModel();
						if (!W)
							throw new Error(
								"model is undefined, so we can't get the matching code action",
							);
						const X = performance.now();
						return (
							await (0, r.$UAb)(
								this.J.codeActionProvider,
								W,
								$.$iL.lift(J.marker),
								{
									type: C.CodeActionTriggerType.Auto,
									triggerAction: u.CodeActionTriggerSource.QuickFix,
								},
								n.$0N.None,
								w.CancellationToken.None,
							)
						).allActions.find(
							(ie) => ie.action.title === J.action.action.title,
						);
					}
					async rejectImport(K, J) {
						if (!this.isEnabled()) return;
						const W = this.ab(K, J.marker);
						W && ((W.status = "rejected"), (W.seenAt = new Date())),
							this.db(K, J);
					}
					db(K, J) {
						this.isEnabled() &&
							(this.vb === J && this.hideShownImport(K),
							(this.n = this.n.filter((W) => W !== J)));
					}
					hideShownImport(K) {
						if (!this.isEnabled()) return;
						const J = this.q;
						if (J) {
							const { shownImport: W, decorationId: X, importWidget: Y } = J;
							if (
								(Y.hide(),
								Y.dispose(),
								(this.q = void 0),
								K !== void 0 && this.bb(W, K))
							) {
								const ie = K.getModel();
								ie && ie.deltaDecorations([X], []);
							} else {
								const ie = this.G.createModelReference(W.uri);
								(async () => {
									try {
										(await ie).object.textEditorModel.deltaDecorations([X], []);
									} finally {
										(await ie).dispose();
									}
								})();
							}
						}
					}
					eb(K, J) {
						const W = K.getModel();
						if (!W)
							throw new Error(
								"model is undefined, so we can't get the import range",
							);
						const X = W.getDecorationRange(J.decorationId);
						if (X === null)
							throw new Error(
								"decorationRange is null, this should not happen",
							);
						const {
							startLineNumber: Y,
							startColumn: ie,
							endLineNumber: ne,
							endColumn: ee,
						} = J.shownImport.marker;
						return (
							X.startLineNumber === Y &&
							X.startColumn === ie &&
							X.endLineNumber === ne &&
							X.endColumn === ee
						);
					}
					fb(K, J) {
						if (!this.isEnabled()) return;
						if (!this.bb(J, K))
							throw new Error(
								"renderImportAtLocation called with wrong editor - this should never happen",
							);
						const W = this.q;
						if (W?.shownImport === J && this.eb(K, W)) {
							const X = K.getModel();
							if (!X)
								throw new Error(
									"model is undefined, so we couldn't remove decoration - this should never happen",
								);
							const Y = X.getDecorationRange(W.decorationId);
							if (Y === null)
								throw new Error(
									"decorationRange is null, this should not happen",
								);
							const ie = {
								startLineNumber: J.marker.startLineNumber,
								startColumn: J.marker.startColumn,
								endLineNumber: J.marker.endLineNumber,
								endColumn: J.marker.endColumn,
							};
							if (
								ie.endLineNumber - ie.startLineNumber !==
									Y.endLineNumber - Y.startLineNumber ||
								ie.endColumn - ie.startColumn !== Y.endColumn - Y.startColumn
							) {
								this.hideShownImport(K);
								return;
							} else W.importWidget.show();
						} else {
							this.hideShownImport(K);
							const X = K.getModel();
							if (!X)
								throw new Error(
									"model is undefined, so we couldn't remove decoration - this should never happen",
								);
							const Y =
									this.s.applicationUserPersistentStorage
										.cppAutoImportDecorationStyle,
								ie = [
									{
										range: new $.$iL(
											J.marker.startLineNumber,
											J.marker.startColumn,
											J.marker.endLineNumber,
											J.marker.endColumn,
										),
										options: {
											className:
												Y === "squiggle"
													? "squiggly-ai cpp-pending-import-decoration"
													: "auto-import-suggestion-blue-background",
											stickiness:
												d.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
											zIndex: 5,
											description: "Pending import decoration",
											isWholeLine: !1,
											collapseOnReplaceEdit: !0,
										},
									},
								],
								[ne] = X.deltaDecorations([], ie);
							(this.q = {
								shownImport: J,
								decorationId: ne,
								importWidget: this.w.createInstance(
									k.$hfd,
									K,
									ne,
									J.action.action.title,
									this.$(J.marker),
								),
							}),
								this.q.importWidget.show();
						}
					}
					gb(K, J) {
						if (!this.isEnabled()) return;
						for (const [X, Y] of this.m.entries()) Y.currentMarkers = [];
						if (!K.getModel())
							throw new Error(
								"model is undefined, so we can't update cached markers",
							);
						for (const X of J) {
							const Y = this.ab(K, X);
							Y !== void 0 && Y.currentMarkers.push(X);
						}
						this.h.set(K.getModel()?.uri?.toString() ?? "", J);
					}
					jb(K, J) {
						if (!J)
							throw new Error(
								"position is undefined, so we can't score the import",
							);
						const {
							startLineNumber: W,
							startColumn: X,
							endLineNumber: Y,
							endColumn: ie,
						} = K;
						return (
							Math.abs(J.lineNumber - W) +
							Math.abs(Math.floor(J.column - X) / this.hb)
						);
					}
					kb(K, J, W) {
						const X = this.ab(K, J.marker)?.currentMarkers;
						return X === void 0
							? 1 / 0
							: Math.min(1 / 0, ...X.map((Y) => this.jb(Y, W)));
					}
					showCorrectUI(K, J) {
						const W = performance.now(),
							X = [];
						if ((X.push({ name: "start", time: W }), !this.isEnabled())) return;
						const Y = K.getPosition();
						if (Y === null) return;
						if (J?.hideIfSameState && Y !== null) {
							const ye = K.getModel(),
								ue = ye?.uri;
							if (ye !== null && ue !== void 0) {
								const fe = ye.getVersionId();
								if (
									fe === this.j?.modelVersion &&
									D.$dh.isEqual(this.j?.uri, ue) &&
									Y?.lineNumber === this.j?.cursorPosition?.lineNumber &&
									Y?.column === this.j?.cursorPosition?.column
								)
									return;
								this.j = { uri: ue, modelVersion: fe, cursorPosition: Y };
							}
						}
						X.push({ name: "preProcessingTime", time: performance.now() });
						const ie = K.getVisibleRanges(),
							ne = ie.some(
								(ye) =>
									Y !== null &&
									this.Cb(ye, new $.$iL(Y.lineNumber, 1, Y.lineNumber, 1)),
							);
						X.push({ name: "visibleRangesTime", time: performance.now() });
						const ee = (ye) => {
								if (this.bb(ye, K) && this.kb(K, ye, Y) < this.ib) {
									const ue = this.ab(K, ye.marker);
									if (ue?.currentMarkers.at(0))
										return ue.currentMarkers.some(
											(fe) =>
												this.xb(K, fe) === ue.symbolName &&
												(!ne || ie.some((me) => this.Cb(me, fe))),
										);
								}
								return !1;
							},
							_ = this.n.filter(ee);
						X.push({ name: "validImportsTime", time: performance.now() });
						const { vb: te } = this;
						X.push({ name: "hideShownImportTime", time: performance.now() });
						const Q = _.filter((ye) => ye !== this.vb),
							Z =
								Y === null
									? []
									: Q.sort((ye, ue) => this.kb(K, ye, Y) - this.kb(K, ue, Y)),
							re =
								te === void 0 ||
								(Z.length > 0 && this.kb(K, Z[0], Y) + x < this.kb(K, te, Y))
									? Z.at(0)
									: te;
						X.push({
							name: "nextPossiblyShownImportTime",
							time: performance.now(),
						});
						const le = K.getModel()?.uri;
						if (le === void 0)
							throw new Error(
								"uri is undefined, so we can't check if cpp is showing",
							);
						const oe = re && this.tb(le, re.marker.startLineNumber);
						X.push({
							name: "cppIsShowingOrIsInlineDiffTime",
							time: performance.now(),
						});
						const ae = re && this.ab(K, re.marker),
							pe = ae?.currentMarkers
								.sort((ye, ue) => this.jb(ye, Y) - this.jb(ue, Y))
								.find((ye) => this.xb(K, ye) === ae.symbolName);
						X.push({ name: "matchingMarkerTime", time: performance.now() });
						const $e = oe ? void 0 : pe && re;
						$e === void 0
							? (this.hideShownImport(K),
								X.push({
									name: "hideShownImportTime",
									time: performance.now(),
								}))
							: ee($e) &&
								(($e.marker = pe ?? $e.marker),
								this.fb(K, $e),
								X.push({ name: "showImportTime", time: performance.now() })),
							this.sb(performance.now() - W, X);
					}
					sb(K, J) {
						this.nb.push(K),
							K > this.qb &&
								(this.ob.push(J), this.ob.length > this.pb && this.ob.shift()),
							this.N.assert(
								K < this.qb,
								`showCorrectUI took too long: ${JSON.stringify({ latency: K, evtTimes: J.slice(1).map((W, X) => ({ name: W.name, latency: Math.round(W.time - J[X].time) })) })}`,
							),
							this.nb.length > this.lb &&
								(this.nb.shift(),
								this.nb.reduce((X, Y) => X + Y, 0) / this.nb.length > this.mb &&
									!this.rb &&
									((this.rb = !0),
									(async () => {
										try {
											(await this.aiClient()).reportBug({
												bug: `average onChangeCursorPrediction latency is too high for import prediction: ${JSON.stringify({ lastLatencies: this.nb.map((X) => Math.round(X)), lastLongEventLatencies: this.ob.map((X) => X.slice(1).map((Y, ie) => ({ name: Y.name, latency: Math.round(Y.time - X[ie].time) }))) })}`,
												bugType:
													i.ReportBugRequest_BugType.MISC_AUTOMATIC_ERROR,
											});
										} catch {}
									})()));
					}
					tb(K, J) {
						const W = this.s.nonPersistentStorage.inlineDiffs;
						if (W !== void 0) {
							const ne =
								this.s.nonPersistentStorage.inprogressAIGenerations.map(
									(_) => _.generationUUID,
								);
							if (
								W.some((_) => {
									const te = ne.includes(_.generationUUID),
										Q =
											J >= _.currentRange.startLineNumber &&
											J <= _.currentRange.endLineNumberExclusive,
										Z = D.$dh.isEqual(_.uri, K) || K.fsPath === _.uri.fsPath;
									return te && Q && Z;
								})
							)
								return !0;
						}
						const X = this.g?.getCurrentSuggestion?.();
						if (X === void 0) return !1;
						const { originalText: Y, replaceText: ie } = X;
						return Y.trim() !== ie.trim();
					}
					ub(K, J) {
						const W = this.s.nonPersistentStorage.inlineDiffs;
						if (W === void 0) return !1;
						const X = this.s.nonPersistentStorage.inprogressAIGenerations.map(
							(Y) => Y.generationUUID,
						);
						return W.some((Y) => {
							const ie = X.includes(Y.generationUUID),
								ne =
									J >= Y.currentRange.startLineNumber &&
									J < Y.currentRange.endLineNumberExclusive,
								ee = D.$dh.isEqual(Y.uri, K) || K.fsPath === Y.uri.fsPath;
							return !ie && ne && ee;
						});
					}
					get vb() {
						return this.q?.shownImport;
					}
					wb() {
						const K = this.H.getViewModel();
						for (const J of [
							...K.getEntries(y.StatusbarAlignment.LEFT),
							...K.getEntries(y.StatusbarAlignment.RIGHT),
						])
							if (
								J.id === "vscodevim.vim.primary" &&
								["INSERT"].some((W) => J.container.innerText.includes(W))
							)
								return !0;
						return !1;
					}
					xb(K, J) {
						const W = K.getModel();
						if (!W)
							throw new Error(
								"model is undefined, so we can't get the marker contents",
							);
						return W.getValueInRange({
							startLineNumber: J.startLineNumber,
							startColumn: J.startColumn,
							endLineNumber: J.endLineNumber,
							endColumn: J.endColumn,
						});
					}
					handleNewGreens(K, J) {
						const W = Date.now();
						this.r = this.r
							.filter((X) => W - X.timestamp <= 3e4)
							.concat(J.map((X) => ({ uri: K.uri, range: X, timestamp: W })));
					}
					yb(K, J) {
						const { startLineNumber: W, endLineNumber: X } = J.range,
							Y = X - W + 1,
							ne =
								J.text.split(`
`).length - Y;
						this.r = this.r.map((ee) =>
							ee.range.startLineNumber > W &&
							D.$dh.isEqual(ee.uri, K.getModel()?.uri)
								? {
										...ee,
										range: {
											...ee.range,
											startLineNumber: ee.range.startLineNumber + ne,
											endLineNumber: ee.range.endLineNumber + ne,
										},
									}
								: ee,
						);
					}
					zb(K, J) {
						const W = K.getModel();
						if (!W)
							throw new Error(
								"model is undefined, so we can't check if the version is the same",
							);
						const X = W.getVersionId(),
							Y = this.m.get(this.Z(K, J.marker));
						if (!Y)
							throw new Error(
								"seenLintError is undefined, so we can't check if the version is the same",
							);
						if (Y.versionComputedAt === X) return !1;
						const ie = J.action.action.command !== void 0,
							ne =
								J.edit.text.split(`
`).length === 2 &&
								J.edit.text.trim().split(`
`).length === 1;
						return ie || !ne;
					}
					isShowingImportSuggestion() {
						return !1;
					}
					hideWidgetsIfConflictsWithCppSuggestion(K, J) {
						const W = this.q;
						if (W) {
							const { shownImport: X, decorationId: Y } = W;
							if (this.bb(X, K)) {
								const ie = K.getModel();
								if (ie === null) return;
								const ne = ie.getDecorationRange(Y);
								ne !== null &&
									J.startLineNumber <= ne.startLineNumber &&
									J.endLineNumberExclusive > ne.startLineNumber &&
									this.hideShownImport(K);
							}
						}
					}
					Ab(K) {
						const J = Date.now(),
							W = 3e4;
						return (
							(this.r = this.r.filter((X) => J - X.timestamp <= W)),
							this.r.some(
								(X) =>
									D.$dh.isEqual(X.uri, K.resource) &&
									this.Cb(X.range, {
										startLineNumber: K.startLineNumber,
										startColumn: K.startColumn,
										endLineNumber: K.endLineNumber,
										endColumn: K.endColumn,
									}),
							)
						);
					}
					Bb(K) {
						return this.Ab(K) || this.ub(K.resource, K.startLineNumber);
					}
					Cb(K, J) {
						return !(
							K.endLineNumber < J.startLineNumber ||
							K.startLineNumber > J.endLineNumber ||
							(K.endLineNumber === J.startLineNumber &&
								K.endColumn < J.startColumn) ||
							(K.startLineNumber === J.endLineNumber &&
								K.startColumn > J.endColumn)
						);
					}
					isEnabled() {
						return !!(
							this.s.applicationUserPersistentStorage.cppAutoImportEnabled &&
							!this.s.applicationUserPersistentStorage
								.backendHasDisabledCppAutoImport &&
							this.s.applicationUserPersistentStorage.cppEnabled
						);
					}
					Db(K) {
						for (const [J, W] of [...this.m.entries()]) {
							const { status: X, seenAt: Y, uri: ie } = W;
							D.$dh.isEqual(ie, K.getModel()?.uri) &&
								X === "no-actions" &&
								this.Eb.filter(
									(ee) => ee.time > +Y && ee.uri !== K.getModel()?.uri + "",
								).length > 0 &&
								this.m.delete(J);
						}
					}
					markFileAsUpdated(K) {
						this.Eb.push({ uri: K.toString(), time: Date.now() }),
							this.Eb.length > this.Fb && this.Eb.shift();
					}
					Hb(K) {
						for (const [J, W] of [...this.m.entries()])
							D.$dh.isEqual(W.uri, K) &&
								W.status === "noop" &&
								+W.seenAt > Date.now() - this.Gb &&
								this.m.delete(J);
					}
					async Lb(K, J, W) {
						let X;
						const Y = await this.Kb.withSemaphore(
							() =>
								new Promise((ee, _) => {
									X = Date.now();
									const te = {
										action: K,
										cancellationToken: w.CancellationToken.None,
										resolveEdits: ee,
										rejectEdits: _,
										appliedAt: Date.now(),
										symbolName: W,
									};
									(this.Jb = te),
										setTimeout(() => {
											this.Jb === te &&
												((this.Jb = void 0),
												_("action was not applied in time"));
										}, this.Ib),
										(async () => {
											try {
												const Z = (
													await this.M.executeCommand(
														J.id,
														...(J.arguments || []),
													)
												).changes;
												if (Z === void 0)
													throw new Error("command returned no changes");
												if (te === this.Jb) {
													this.Jb = void 0;
													const se = {
														edits: Object.entries(Z).flatMap(([re, le]) =>
															le.map((oe) => ({
																resource: M.URI.parse(re),
																textEdit: {
																	range: new $.$iL(
																		oe.range.start.line,
																		oe.range.start.character,
																		oe.range.end.line,
																		oe.range.end.character,
																	),
																	text: oe.newText,
																},
																versionId: -1,
															})),
														),
													};
													ee(se);
												}
											} catch (Q) {
												this.Jb === te && ((this.Jb = void 0), _(Q)),
													(async () => {
														try {
															(await this.aiClient()).reportBug({
																bug: "Command execution for import prediction threw an error.",
																bugType:
																	i.ReportBugRequest_BugType
																		.MISC_AUTOMATIC_ERROR,
															});
														} catch {}
													})(),
													this.N.assert(
														!1,
														`command execution for import prediction threw an error: ${Q}`,
													);
												return;
											}
										})();
								}),
						);
						if (X === void 0) throw new Error("startTime is undefined");
						const ie = Date.now() - X;
						return (
							ie > 250 &&
								(async () => {
									try {
										(await this.aiClient()).reportBug({
											bug: `Command execution for import prediction took too long: ${ie}`,
											bugType: i.ReportBugRequest_BugType.MISC_AUTOMATIC_ERROR,
										});
									} catch {}
								})(),
							Y
						);
					}
					Mb() {
						const K = this.Jb;
						if (K !== void 0) {
							if (K.appliedAt < Date.now() - this.Ib) {
								(this.Jb = void 0),
									K.rejectEdits("action was not applied in time");
								return;
							}
							return K;
						}
					}
					maybeInterceptBulkEdit(K) {
						const J = this.Mb(),
							W = 250;
						return J !== void 0 &&
							K.edits.some(
								(X) =>
									"textEdit" in X &&
									X.textEdit.text.match(new RegExp("(?<!\\w)" + J.symbolName)),
							)
							? (K.edits.length > 0 && (J.resolveEdits(K), (this.Jb = void 0)),
								!0)
							: J !== void 0 && Date.now() - J.appliedAt < W;
					}
					async moveLineToEndOfImportsSectionExclusive(K, J) {
						const W = U.$ZNb.get(K);
						if (!W) return J;
						const X = await W.getFoldingModel();
						if (!X) return J;
						const Y = X.getAllRegionsAtLine(J);
						if (Y.length === 0) return this.Nb(K, J) ? J + 1 : J;
						const ie = Y[Y.length - 1];
						return this.Nb(K, ie.startLineNumber) ? ie.endLineNumber + 1 : J;
					}
					Nb(K, J) {
						const W = K.getModel()?.getLineContent(J);
						return W === void 0
							? !1
							: W.startsWith("from ") ||
									W.startsWith("import ") ||
									W.includes("= require(") ||
									W.startsWith("use ");
					}
				};
				q = Ne(
					[
						j(0, g.$0zb),
						j(1, o.$Vi),
						j(2, c.$aM),
						j(3, h.$Li),
						j(4, l.$wcc),
						j(5, b.$Led),
						j(6, a.$3Db),
						j(7, E.$dtb),
						j(8, m.$MO),
						j(9, y.$d6b),
						j(10, f.$V7b),
						j(11, S.$k3),
						j(12, A.$H7b),
						j(13, O.$ek),
						j(14, z.$kcc),
					],
					q,
				);
				const V = (G) => {
					if (G === void 0) throw new Error("x is undefined");
					return G;
				};
				(0, P.$lK)(I.$lfc, q, P.InstantiationType.Delayed);
			},
		)
