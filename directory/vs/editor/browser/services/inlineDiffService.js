import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/uri.js';
import '../../../base/common/event.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../common/core/range.js';
import '../../../base/common/lifecycle.js';
import '../../common/core/lineRange.js';
import '../../../platform/instantiation/common/extensions.js';
import '../../common/services/resolverService.js';
import '../../../base/common/uuid.js';
import '../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../common/diff/linesDiffComputers.js';
import '../../common/model.js';
import './inlineDiffUndoRedoElement.js';
import '../../../platform/undoRedo/common/undoRedo.js';
import '../../common/core/position.js';
import '../../../platform/contextkey/common/contextkey.js';
import '../../common/editorContextKeys.js';
import './genericUndoRedoElement.js';
import '../../../workbench/services/editor/common/editorService.js';
import '../editorBrowser.js';
import '../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../platform/telemetry/common/telemetry.js';
import '../../../workbench/services/ai/browser/aiService.js';
import '../../../../proto/aiserver/v1/fastapply_pb.js';
import '../../../workbench/services/aiCmdK/browser/cmdKService.js';
import '../../../workbench/services/aiContext/browser/aiContext.js';
import './codeEditorService.js';
import '../../../base/common/resources.js';
import '../../../../external/solid/solid.js';
import '../../../workbench/contrib/aiCpp/browser/cppEventLogger.js';
import './multiInlineFileDiffService.js';
import './inlineDiffServiceUtils.js';
import '../../common/services/model.js';
import '../../common/languages/language.js';
import '../../../platform/configuration/common/configuration.js';
import '../../../base/common/constants.js';
import '../../../workbench/services/ai/browser/backendClient.js';
import '../../../../proto/aiserver/v1/fastapply_connectweb.js';
import '../../../workbench/services/ai/browser/utils.js';
import '../../../workbench/services/textfile/common/textfiles.js';
define(
			de[383],
			he([
				1, 0, 9, 6, 5, 17, 3, 196, 20, 42, 47, 45, 587, 64, 779, 155, 48, 8, 71,
				606, 18, 56, 68, 32, 118, 581, 479, 471, 65, 19, 13, 332, 3235, 1190,
				67, 61, 10, 58, 285, 1114, 191, 85,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*uri*/,
				i /*event*/,
				w /*instantiation*/,
				E /*range*/,
				C /*lifecycle*/,
				d /*lineRange*/,
				m /*extensions*/,
				r /*resolverService*/,
				u /*uuid*/,
				a /*reactiveStorageService*/,
				h /*linesDiffComputers*/,
				c /*model*/,
				n /*inlineDiffUndoRedoElement*/,
				g /*undoRedo*/,
				p /*position*/,
				o /*contextkey*/,
				f /*editorContextKeys*/,
				b /*genericUndoRedoElement*/,
				s /*editorService*/,
				l /*editorBrowser*/,
				y /*uriIdentity*/,
				$ /*telemetry*/,
				v /*aiService*/,
				S /*fastapply_pb*/,
				I /*cmdKService*/,
				T /*aiContext*/,
				P /*codeEditorService*/,
				k /*resources*/,
				L /*solid*/,
				D /*cppEventLogger*/,
				M /*multiInlineFileDiffService*/,
				N /*inlineDiffServiceUtils*/,
				A /*model*/,
				R /*language*/,
				O /*configuration*/,
				B /*constants*/,
				U /*backendClient*/,
				z /*fastapply_connectweb*/,
				F /*utils*/,
				x /*textfiles*/,
) {
				"use strict";
				var H;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$67b =
						e.$57b =
						e.$47b =
						e.$37b =
						e.$27b =
						e.whereIsTheRangeInRelationToTheCurrentRange =
						e.getDiffState =
						e.createPromptBarData =
						e.RangeWhereIs =
							void 0),
					(e.$77b = Y),
					(e.$87b = ie),
					Object.defineProperty(e, "RangeWhereIs", {
						enumerable: !0,
						get: function () {
							return N.RangeWhereIs;
						},
					}),
					Object.defineProperty(e, "createPromptBarData", {
						enumerable: !0,
						get: function () {
							return N.$W7b;
						},
					}),
					Object.defineProperty(e, "getDiffState", {
						enumerable: !0,
						get: function () {
							return N.$Y7b;
						},
					}),
					Object.defineProperty(
						e,
						"whereIsTheRangeInRelationToTheCurrentRange",
						{
							enumerable: !0,
							get: function () {
								return N.$X7b;
							},
						},
					),
					(e.$27b = (0, w.$Mi)("inlineDiffService"));
				function q() {
					let ne = "abcdefghijklmnopqrstuvwxyz",
						ee = "";
					for (let _ = 0; _ < 10; _++)
						ee += ne.charAt(Math.floor(Math.random() * ne.length));
					return ee;
				}
				let V = class extends C.$1c {
					static {
						H = this;
					}
					get diffInfos() {
						return Array.from(this.c.values()).map((ee) => ({
							uri: ee.inlineDiff.uri,
							diffId: ee.id,
							composerMetadata: ee.composerMetadata,
						}));
					}
					static {
						this.registeredActions = [];
					}
					static registerAction(ee) {
						this.registeredActions.push(ee);
					}
					recordCancelEvent(ee) {
						this.N.recordCmdKEvent(ee.model, {
							requestId: ee.requestId,
							promptBarId: ee.promptBarId,
							eventType: { case: "interruptGeneration", value: {} },
						});
					}
					recordAcceptEvent(ee) {
						this.N.recordCmdKEvent(ee.model, {
							requestId: ee.requestId,
							promptBarId: ee.promptBarId,
							eventType: { case: "acceptAll", value: {} },
						});
					}
					recordRejectEvent(ee) {
						this.N.recordCmdKEvent(ee.model, {
							requestId: ee.requestId,
							promptBarId: ee.promptBarId,
							eventType: { case: "rejectAll", value: {} },
						});
					}
					recordPartialAcceptEvent(ee) {
						this.N.recordCmdKEvent(ee.model, {
							requestId: ee.requestId,
							promptBarId: ee.promptBarId,
							eventType: {
								case: "acceptPartialDiff",
								value: {
									greenRange: ee.greenRange,
									redLines: ee.redLines,
									greenLines: ee.greenLines,
								},
							},
						});
					}
					recordPartialRejectEvent(ee) {
						this.N.recordCmdKEvent(ee.model, {
							promptBarId: ee.promptBarId,
							requestId: ee.requestId,
							eventType: {
								case: "rejectPartialDiff",
								value: {
									greenRange: ee.greenRange,
									redLines: ee.redLines,
									greenLines: ee.greenLines,
								},
							},
						});
					}
					async reportEditFate(
						ee,
						_,
						{
							numPartiallyAccepted: te,
							numPartiallyRejected: Q,
							numUnresolved: Z,
						},
					) {
						let se;
						if (_ === "accept")
							Q > 0
								? (se = {
										requestId: ee,
										fate: S.EditFate.PARTIALLY_ACCEPTED,
										numAcceptedPartialDiffs: te + Z,
										numRejectedPartialDiffs: Q,
									})
								: (se = { requestId: ee, fate: S.EditFate.ACCEPTED });
						else if (_ === "reject")
							te > 0
								? (se = {
										requestId: ee,
										fate: S.EditFate.PARTIALLY_ACCEPTED,
										numAcceptedPartialDiffs: te,
										numRejectedPartialDiffs: Q + Z,
									})
								: (se = { requestId: ee, fate: S.EditFate.REJECTED });
						else if (_ === "partial")
							te === 0
								? (se = { requestId: ee, fate: S.EditFate.REJECTED })
								: Q === 0
									? (se = { requestId: ee, fate: S.EditFate.ACCEPTED })
									: (se = {
											requestId: ee,
											fate: S.EditFate.PARTIALLY_ACCEPTED,
											numAcceptedPartialDiffs: te,
											numRejectedPartialDiffs: Q,
										});
						else throw new Error(`Invalid event type: ${_}`);
						const re = await this.u.get();
						try {
							await re.reportEditFate(se, {
								headers: (0, F.$m6b)((0, u.$9g)()),
							});
						} catch (le) {
							console.warn("Failed to report edit fate to the server", le);
						}
					}
					constructor(ee, _, te, Q, Z, se, re, le, oe, ae, pe, $e, ye, ue) {
						super(),
							(this.w = ee),
							(this.y = _),
							(this.z = te),
							(this.C = Q),
							(this.F = Z),
							(this.G = se),
							(this.H = re),
							(this.I = le),
							(this.J = oe),
							(this.L = ae),
							(this.M = pe),
							(this.N = $e),
							(this.O = ye),
							(this.P = ue),
							(this.c = new Map()),
							(this.h = this.D(new i.$re())),
							(this.onDidChangeDiffInfos = this.h.event),
							(this.j = this.D(new i.$re())),
							(this.onDidAcceptDiff = this.j.event),
							(this.m = this.D(new i.$re())),
							(this.onDidRejectDiff = this.m.event),
							(this.n = this.D(new i.$re())),
							(this.onDidAddDiffFromUndoRedo = this.n.event),
							(this.q = this.D(new i.$re())),
							(this.onDidRemoveDiffFromUndoRedo = this.q.event),
							(this.s = this.D(new i.$re())),
							(this.onDidAcceptPartialDiff = this.s.event),
							(this.t = this.D(new i.$re())),
							(this.onDidRejectPartialDiff = this.t.event),
							(this.f = f.EditorContextKeys.hasActivelyGeneratingDiff.bindTo(
								this.G,
							));
						for (const fe of H.registeredActions) fe(this.z);
						(this.g = this.D(this.z.createScoped(this))),
							this.g.onChangeEffect({
								deps: [
									() => this.z.nonPersistentStorage.promptBars,
									() => this.z.nonPersistentStorage.inprogressAIGenerations,
									() =>
										this.z.nonPersistentStorage.promptBars.map(
											(fe) => fe.diffId,
										),
								],
								onChange: () => {
									let fe = !1;
									for (const me of this.z.nonPersistentStorage.promptBars)
										if (me.diffId !== void 0) {
											const ve = this.c.get(me.diffId);
											if (
												ve?.inlineDiff.generationUUID &&
												this.z.nonPersistentStorage.inprogressAIGenerations.some(
													(ge) =>
														ge.generationUUID === ve?.inlineDiff.generationUUID,
												)
											) {
												fe = !0;
												break;
											}
										}
									this.f.set(fe);
								},
							}),
							(this.u = this.y.createInstance(U.$q6b, { service: z.$9ab }));
					}
					getHandlerByDiffId(ee) {
						return this.c.get(ee);
					}
					revealDiff(ee) {
						const _ = this.c.get(ee);
						if (!_) return;
						const te = this.H.activeEditorPane;
						if (te === void 0) return;
						const Q = te.getControl();
						Q !== void 0 &&
							(0, l.$0sb)(Q) &&
							this.I.extUri.isEqual(Q.getModel()?.uri, _.inlineDiff.uri) &&
							Q.revealRangeInCenter({
								startLineNumber: _.inlineDiff.currentRange.startLineNumber,
								startColumn: 1,
								endLineNumber: _.inlineDiff.currentRange.endLineNumberExclusive,
								endColumn: 1,
							});
					}
					_remove(ee) {
						const _ = this.z.nonPersistentStorage.promptBars.find(
							(te) => te.diffId === ee.id,
						);
						_ &&
							this.z.setNonPersistentStorage(
								"promptBars",
								(te) => te.id === _.id,
								"diffId",
								void 0,
							),
							this.c.delete(ee.id),
							ee.remove(),
							ee.dispose(),
							this.h.fire();
					}
					remove(ee, _, te) {
						const Q = this.c.get(ee);
						if (!Q) return;
						let Z = (0, a.$$zb)(Q.inlineDiff),
							se;
						if (!Q.inlineDiff.isHidden) {
							const re = new n.$y7b(
								"Undo Remove Diff",
								"undo-remove-diff",
								ee,
								Q.inlineDiff.uri,
								async () => {
									const le = await this.w.createModelReference(
										Q.inlineDiff.uri,
									);
									Z.isMultiInlineDiff
										? (se = new M.$17b(
												le,
												this.z,
												this.M,
												this,
												this.F,
												this.C,
												{ ...Z, id: ee },
												Q.promptBarId,
											))
										: (se = this.y.createInstance(
												X,
												le,
												{ ...Z, id: ee },
												Q.promptBarId,
											)),
										this.c.set(ee, se),
										this.h.fire(),
										this.n.fire({
											uri: Q.inlineDiff.uri,
											diffId: ee,
											composerMetadata: Q.composerMetadata,
										});
								},
								() => {
									const le = this.c.get(ee);
									le &&
										((Z = (0, a.$$zb)(le.inlineDiff)),
										this.cancelInUndo(ee),
										this._remove(le),
										this.q.fire({
											diffInfo: {
												uri: le.inlineDiff.uri,
												diffId: ee,
												composerMetadata: le.composerMetadata,
											},
											accepted: te ?? !1,
										}));
								},
							);
							this.pushUndoElement(re, {}),
								(_ ?? !1) &&
									Q.promptBarId &&
									this.Q(Q.promptBarId)?.diffId === ee &&
									this.U(Q.promptBarId);
						}
						this._remove(Q);
					}
					Q(ee) {
						return (0, a.$_zb)(
							this.z.nonPersistentStorage.promptBars.find((_) => _.id === ee),
						);
					}
					R(ee) {
						this.z.setNonPersistentStorage("promptBars", [
							...this.z.nonPersistentStorage.promptBars.filter(
								(_) => _.id !== ee.id,
							),
							ee,
						]);
					}
					S(ee) {
						this.z.setNonPersistentStorage(
							"promptBars",
							this.z.nonPersistentStorage.promptBars.filter((_) => _.id !== ee),
						);
					}
					U(ee) {
						const _ = this.Q(ee);
						if (_?.uri === void 0) return;
						this.S(ee);
						const te = { current: void 0 };
						if (
							(this.w.createModelReference(_.uri).then((Q) => {
								te.current = this.M.getPromptBarCurrentRange(
									_,
									Q.object.textEditorModel,
								);
								const Z = _.currentRangeDecorationId;
								Z && Q.object.textEditorModel.deltaDecorations([Z], []);
							}),
							_?.diffId === void 0)
						)
							this.w.createModelReference(_.uri).then((Q) => {
								if (_.modifyTextModelPrePromptBarBackwardEdit.length > 0) {
									const Z = this.M.getPromptBarCurrentRange(
										_,
										Q.object.textEditorModel,
									);
									_.prePromptBarCursorPosition &&
										Z &&
										Y(
											this.O,
											{
												startLineNumber: Z.startLineNumber,
												endLineNumber: Z.endLineNumberExclusive - 1,
												startColumn: 1,
												endColumn: 1,
											},
											Q.object.textEditorModel.uri,
											_.prePromptBarCursorPosition,
										),
										ie(
											Q.object.textEditorModel,
											_.modifyTextModelPrePromptBarBackwardEdit,
										);
								}
							}),
								this.F.pushElement(
									new b.$x7b(
										"Undo Close Prompt Bar",
										"undo-close-prompt-bar",
										_?.uri,
										async () => {
											const Q = await this.w.createModelReference(_.uri);
											_.modifyTextModelPrePromptBarForwardEdit.length > 0 &&
												ie(
													Q.object.textEditorModel,
													_.modifyTextModelPrePromptBarForwardEdit,
												);
											const Z = Q.object.textEditorModel.deltaDecorations(
												[],
												[
													{
														range: {
															startLineNumber: te.current?.startLineNumber ?? 1,
															endLineNumber:
																(te.current?.endLineNumberExclusive ?? 2) - 1,
															startColumn: 1,
															endColumn:
																Q.object.textEditorModel.getLineMaxColumn(
																	(te.current?.endLineNumberExclusive ?? 2) - 1,
																),
														},
														options: {
															description: "promptBar-tracking-range",
															isWholeLine: !0,
														},
													},
												],
											)[0];
											(0, L.batch)(() => {
												(_.currentRangeDecorationId = Z), this.R(_);
											});
										},
										async () => {
											const Q = await this.w.createModelReference(_.uri);
											te.current = this.M.getPromptBarCurrentRange(
												_,
												Q.object.textEditorModel,
											);
											const Z = _.currentRangeDecorationId;
											if (
												(Z &&
													Q.object.textEditorModel.deltaDecorations([Z], []),
												this.S(_.id),
												_.modifyTextModelPrePromptBarBackwardEdit.length > 0)
											) {
												const se = this.M.getPromptBarCurrentRange(
													_,
													Q.object.textEditorModel,
												);
												_.prePromptBarCursorPosition &&
													se &&
													Y(
														this.O,
														{
															startLineNumber: se.startLineNumber,
															endLineNumber: se.endLineNumberExclusive - 1,
															startColumn: 1,
															endColumn: 1,
														},
														Q.object.textEditorModel.uri,
														_.prePromptBarCursorPosition,
													),
													ie(
														Q.object.textEditorModel,
														_.modifyTextModelPrePromptBarBackwardEdit,
													);
											}
										},
									),
								);
						else {
							const Q = new n.$y7b(
								"Undo Close Prompt Bar",
								"undo-close-prompt-bar",
								_.diffId,
								_.uri,
								async () => {
									const Z = await this.w.createModelReference(_.uri),
										se = Z.object.textEditorModel.deltaDecorations(
											[],
											[
												{
													range: {
														startLineNumber: te.current?.startLineNumber ?? 1,
														endLineNumber:
															(te.current?.endLineNumberExclusive ?? 2) - 1,
														startColumn: 1,
														endColumn:
															Z.object.textEditorModel.getLineMaxColumn(
																(te.current?.endLineNumberExclusive ?? 2) - 1,
															),
													},
													options: {
														description: "promptBar-tracking-range",
														isWholeLine: !0,
													},
												},
											],
										)[0];
									(0, L.batch)(() => {
										(_.currentRangeDecorationId = se), this.R(_);
									});
								},
								async () => {
									const Z = await this.w.createModelReference(_.uri);
									te.current = this.M.getPromptBarCurrentRange(
										_,
										Z.object.textEditorModel,
									);
									const se = _.currentRangeDecorationId;
									se && Z.object.textEditorModel.deltaDecorations([se], []),
										this.S(_.id);
								},
							);
							this.pushUndoElement(Q, {});
						}
					}
					hidePromptBar(ee) {
						this.U(ee);
					}
					async applyEditsNoUpdateDiffs(ee, _) {
						const te = this.z.nonPersistentStorage.inlineDiffs.filter(
								(re) => re.uri.fsPath === ee.fsPath,
							),
							Q = await this.w.createModelReference(ee),
							Z = Q.object.textEditorModel,
							se = new Map();
						te.forEach((re) => {
							const le = this.c.get(re.id);
							!le ||
								(0, e.$47b)(le) ||
								(se.set(re.id, le.active), le.activate());
						}),
							Z.applyEdits(_),
							te.forEach((re) => {
								const le = this.c.get(re.id);
								le && (le.active = se.get(re.id) || !1);
							}),
							Q.dispose();
					}
					async _addDiff(ee, _) {
						const te = await this.w.createModelReference(ee.uri),
							Q = this.y.createInstance(X, te, ee, _);
						this.c.set(Q.id, Q), this.h.fire();
					}
					async addActiveDiff(ee, _) {
						const te = await this.addDiff(ee, _);
						return te.activate(), te;
					}
					async addDiff(ee, _, te, Q) {
						const Z = await this.w.createModelReference(ee.uri),
							se = this.y.createInstance(X, Z, ee, _);
						this.c.set(se.id, se), this.h.fire();
						const re = se.id;
						if (Q && !te) {
							const le = new n.$y7b(
								"Undo Start Diff",
								"undo-start-diff",
								re,
								ee.uri,
								Q.undo,
								Q.redo,
							);
							this.pushUndoElement(le, { breakConsolidation: !0 });
						}
						if (!te) {
							let le = (0, a.$$zb)(se.inlineDiff),
								oe,
								ae = !1,
								pe = _ ? this.Q(_) : void 0;
							const $e = new n.$y7b(
								"Undo Create Diff",
								"undo-create-diff",
								re,
								Z.object.textEditorModel.uri,
								() => {
									const ye = this.c.get(re);
									!ye ||
										(0, e.$47b)(ye) ||
										((le = (0, a.$$zb)(ye.inlineDiff)),
										this.cancelInUndo(re),
										(pe = _ ? this.Q(_) : void 0),
										pe?.diffId === ye.id && (ae = !0),
										this._remove(ye),
										this.q.fire({
											diffInfo: {
												uri: ee.uri,
												diffId: re,
												composerMetadata: ye.composerMetadata,
											},
											accepted: !1,
										}));
								},
								async () => {
									const ye = await this.w.createModelReference(ee.uri);
									(oe = this.y.createInstance(X, ye, { ...le, id: re }, _)),
										this.c.set(re, oe),
										this.h.fire(),
										this.n.fire({
											uri: ee.uri,
											diffId: re,
											composerMetadata: oe.composerMetadata,
										}),
										ae && pe && this.R(pe);
								},
							);
							this.pushUndoElement($e, {});
						}
						return se;
					}
					cancelDiff(ee, _) {
						const te = this.c.get(ee);
						if (!te) {
							this.z.setNonPersistentStorage(
								"inlineDiffs",
								this.z.nonPersistentStorage.inlineDiffs.filter(
									(Q) => Q.id !== ee,
								),
							);
							return;
						}
						te.isMultiple
							? (te.cancel(_), te.finishFailure(_))
							: (te.cancel(), te.finishFailure());
					}
					setDiff(ee, _) {
						const te = this.c.get(ee);
						if (te)
							if ((0, e.$47b)(te))
								if (G(_)) te.setDiff(_);
								else throw new Error("Invalid diff");
							else if (K(_)) te.setDiff(_);
							else throw new Error("Invalid diff");
					}
					cancelInUndo(ee) {
						const _ = this.c.get(ee);
						_ && _.cancelInUndo();
					}
					findClosestChange(ee, _) {
						const te = this.c.get(ee);
						if (te && te instanceof X) return te.findClosestChange(_);
					}
					acceptPartialDiff(ee, _) {
						const te = this.c.get(ee);
						if (!te) return !1;
						te.inlineDiff.isHidden ||
							this.J.publicLogCapture("inlineDiffAcceptPartial", {
								generationUUID: te.inlineDiff.generationUUID,
							}),
							this.pushUndoElement(
								new n.$y7b(
									"Undo Accept Partial Diff",
									"undo-accept-partial-diff",
									ee,
									te.inlineDiff.uri,
									() => {},
									() => {},
								),
								{ breakConsolidation: !0 },
							);
						let Q = [],
							Z = [];
						if (te instanceof X) {
							const re = te.findClosestChange(_);
							(Q = te.inlineDiff.newTextLines.slice(
								re.addedRange.startLineNumber - 1,
								re.addedRange.endLineNumberExclusive - 1,
							)),
								(Z = [...re.removedTextLines]);
						}
						const se = te.acceptPartialDiff(_);
						return (
							se && this.remove(ee, !0, !0),
							this.s.fire({
								diffInfo: {
									diffId: ee,
									uri: te.inlineDiff.uri,
									composerMetadata: te.composerMetadata,
								},
								isDone: se,
								change: { accepted: Q, rejected: Z },
							}),
							se
						);
					}
					rejectPartialDiff(ee, _) {
						const te = this.c.get(ee);
						if (!te) return !1;
						te.inlineDiff.isHidden ||
							this.J.publicLogCapture("inlineDiffRejectPartial", {
								generationUUID: te.inlineDiff.generationUUID,
							}),
							this.pushUndoElement(
								new n.$y7b(
									"Undo Reject Partial Diff",
									"undo-reject-partial-diff",
									ee,
									te.inlineDiff.uri,
									() => {},
									() => {},
								),
								{ breakConsolidation: !0 },
							);
						let Q = [],
							Z = [];
						if (te instanceof X) {
							const re = te.findClosestChange(_);
							(Z = te.inlineDiff.newTextLines.slice(
								re.addedRange.startLineNumber - 1,
								re.addedRange.endLineNumberExclusive - 1,
							)),
								(Q = [...re.removedTextLines]);
						}
						const se = te.rejectPartialDiff(_);
						return (
							se && this.remove(ee, void 0, !1),
							this.t.fire({
								diffInfo: {
									diffId: ee,
									uri: te.inlineDiff.uri,
									composerMetadata: te.composerMetadata,
								},
								isDone: se,
								change: { accepted: Q, rejected: Z },
							}),
							se
						);
					}
					acceptDiff(ee, _) {
						const te = this.c.get(ee);
						te &&
							(te.inlineDiff.isHidden ||
								this.J.publicLogCapture($.$lm, {
									generationUUID: te.inlineDiff.generationUUID,
								}),
							this.pushUndoElement(
								new n.$y7b(
									"Undo Accept Diff",
									"undo-accept-diff",
									ee,
									te.inlineDiff.uri,
									() => {},
									() => {},
								),
								{
									breakConsolidation:
										_?.dontBreakConsolidation !== void 0
											? !_.dontBreakConsolidation
											: !0,
								},
							),
							te.inlineDiff.isHidden ? te.reject() : te.accept(),
							this.remove(ee, !0, !0),
							this.j.fire({
								diffId: ee,
								uri: te.inlineDiff.uri,
								composerMetadata: te.composerMetadata,
							}));
					}
					rejectDiff(ee, _) {
						const te = this.c.get(ee);
						if (!te) {
							this.z.setNonPersistentStorage(
								"inlineDiffs",
								this.z.nonPersistentStorage.inlineDiffs.filter(
									(Q) => Q.id !== ee,
								),
							);
							return;
						}
						te.inlineDiff.isHidden ||
							this.J.publicLogCapture($.$mm, {
								generationUUID: te.inlineDiff.generationUUID,
							}),
							this.pushUndoElement(
								new n.$y7b(
									"Undo Reject Diff",
									"undo-reject-diff",
									ee,
									te.inlineDiff.uri,
									() => {},
									() => {},
								),
								{
									breakConsolidation:
										_?.dontBreakConsolidation !== void 0
											? !_.dontBreakConsolidation
											: !0,
								},
							),
							te.inlineDiff.isHidden ? te.accept() : te.reject(),
							te.callRejectCallback(),
							this.remove(ee, _?.close, !1),
							_?.rejectSilently ||
								this.m.fire({
									diffId: ee,
									uri: te.inlineDiff.uri,
									composerMetadata: te.composerMetadata,
								});
					}
					finishDiffSuccess(ee) {
						const _ = this.c.get(ee);
						_ && _.finishSuccess();
					}
					addLineToDiff(ee, _) {
						this.addLinesToDiff(ee, [_]);
					}
					addLinesToDiff(ee, _) {
						const te = this.c.get(ee);
						te && te.addLinesToDiff(_);
					}
					async streamDiff({
						uri: ee,
						originalLineRange: _,
						hideDeletionViewZones: te,
						generationUUID: Q,
						streamingLines: Z,
						originalTextLines: se,
						originalLineTokens: re,
						extraContextLinesAbove: le,
						extraContextLinesBelow: oe,
						prompt: ae,
						undoRedo: pe,
						isHidden: $e = !1,
						diffIdCallback: ye,
						doneCallback: ue,
						cancelGenerationWithNoChangesCallback: fe,
						rejectCallback: me,
						promptBarId: ve,
						composerId: ge,
					}) {
						const be = {
								uri: ee,
								generationUUID: Q,
								currentRange: _,
								originalTextLines: se,
								originalLineTokens: re,
								prompt: ae,
								isHidden: $e,
								hideDeletionViewZones: te,
								attachedToPromptBar: ye !== void 0,
								extraContextLinesAbove: le,
								extraContextLinesBelow: oe,
								composerId: ge,
							},
							Ce = await this.addDiff(be, ve, $e, pe);
						Ce.activate(ue, fe, me), ye !== void 0 && ye(Ce.id);
						let Le = !1;
						try {
							for await (const Fe of Z) Ce.addLinesToDiff([Fe]);
						} catch {
							Le = !0;
						}
						Le ? Ce.finishFailure() : Ce.finishSuccess();
					}
					async W(ee, _, te, Q) {
						const Z = await this.w.createModelReference(ee.uri);
						if (ee.orderedGenerationUUIDs.length === 0)
							throw new Error(
								"Multi inline diff must have at least one generation UUID",
							);
						if ("generationUUID" in ee)
							throw new Error(
								"Multi inline diff must not have a generation UUID - we will set it automatically from orderedGenerationUUIDs",
							);
						if ("newTextLiness" in ee)
							throw new Error(
								"Multi inline diff must not have newTextLiness - we will set it automatically from orderedGenerationUUIDs",
							);
						const se = {
								...ee,
								newTextLiness: Object.fromEntries(
									ee.orderedGenerationUUIDs.map((oe) => [oe, []]),
								),
								isMultiInlineDiff: !0,
								generationUUID: ee.orderedGenerationUUIDs[0],
							},
							re = new M.$17b(Z, this.z, this.M, this, this.F, this.C, se, _);
						this.c.set(re.id, re), this.h.fire();
						const le = re.id;
						if (Q && !te) {
							const oe = new n.$y7b(
								"Undo Start Diff",
								"undo-start-diff",
								le,
								ee.uri,
								Q.undo,
								Q.redo,
							);
							this.pushUndoElement(oe, { breakConsolidation: !0 });
						}
						if (!te) {
							let oe = (0, a.$$zb)(re.inlineDiff),
								ae,
								pe = !1,
								$e = _ ? this.Q(_) : void 0;
							const ye = new n.$y7b(
								"Undo Create Diff",
								"undo-create-diff",
								le,
								Z.object.textEditorModel.uri,
								() => {
									const ue = this.c.get(le);
									!ue ||
										!(0, e.$47b)(ue) ||
										((oe = (0, a.$$zb)(ue.inlineDiff)),
										this.cancelInUndo(le),
										($e = _ ? this.Q(_) : void 0),
										$e?.diffId === ue.id && (pe = !0),
										this._remove(ue));
								},
								async () => {
									const ue = await this.w.createModelReference(ee.uri);
									(ae = new M.$17b(
										ue,
										this.z,
										this.M,
										this,
										this.F,
										this.C,
										{ ...oe, id: le },
										_,
									)),
										this.c.set(le, ae),
										this.h.fire(),
										pe && $e && this.R($e);
								},
							);
							this.pushUndoElement(ye, {});
						}
						return re;
					}
					async streamMultiDiff({
						uri: ee,
						originalLineRange: _,
						hideDeletionViewZones: te,
						generationUUID: Q,
						orderedGenerationUUIDs: Z,
						streamingLines: se,
						originalTextLines: re,
						originalLineTokens: le,
						extraContextLinesAbove: oe,
						extraContextLinesBelow: ae,
						prompt: pe,
						undoRedo: $e,
						isHidden: ye = !1,
						diffIdCallback: ue,
						doneCallback: fe,
						globalDoneCallback: me,
						cancelGenerationWithNoChangesCallback: ve,
						rejectCallback: ge,
						promptBarId: be,
						abortController: Ce,
					}) {
						if (
							!this.z.applicationUserPersistentStorage.allowMultiCmdKGenerations
						)
							return (
								console.error(
									"Tried to do multiple generations, but they're banned! Falling back to streamDiff",
								),
								this.streamDiff({
									uri: ee,
									originalLineRange: _,
									hideDeletionViewZones: te,
									generationUUID: Q,
									streamingLines: se,
									originalTextLines: re,
									originalLineTokens: le,
									extraContextLinesAbove: oe,
									extraContextLinesBelow: ae,
									prompt: pe,
									undoRedo: $e,
									isHidden: ye,
									diffIdCallback: ue,
									doneCallback: fe,
									cancelGenerationWithNoChangesCallback: ve,
									rejectCallback: ge,
									promptBarId: be,
								})
							);
						let Le;
						if (
							((Le = [...this.c.values()].flatMap((Oe) =>
								(0, e.$47b)(Oe) &&
								Oe.inlineDiff.orderedGenerationUUIDs.includes(Q)
									? [Oe]
									: [],
							)[0]),
							Le)
						)
							console.log("ADDING GENERATION", Q, "TO", Le.id),
								console.log(
									"(the handler already has generationUUID",
									Le.inlineDiff.orderedGenerationUUIDs,
									")",
								);
						else {
							console.error(
								"DIDNT FIND A MULTI INLINE DIFF FOR",
								Q,
								"CREATING NEW MULTI INLINE DIFF",
							);
							const Oe = {
									uri: ee,
									orderedGenerationUUIDs: Z,
									currentRange: _,
									originalTextLines: re,
									originalLineTokens: le,
									prompt: pe,
									isHidden: ye,
									hideDeletionViewZones: te,
									attachedToPromptBar: ue !== void 0,
									extraContextLinesAbove: oe,
									extraContextLinesBelow: ae,
								},
								xe = await this.W(Oe, be, ye, $e);
							if (!(0, e.$47b)(xe))
								throw new Error(
									"streamMultiDiff diff handler is not a multi inline diff handler",
								);
							(Le = xe),
								Le.activateEntireHandler(ve, ge, me),
								console.log(
									"ACTIVATED NEW MULTI INLINE DIFF",
									Le.id,
									"WITH generation UUIDs",
									Le.inlineDiff.orderedGenerationUUIDs,
									"IS IN this.diffHandlers?",
									this.c.has(Le.id),
								);
						}
						Le.addGeneration(Q, Ce, fe), ue !== void 0 && ue(Le.id);
						let Fe = !1;
						try {
							for await (const Oe of se) Le.addLinesToDiff([Oe], void 0, Q);
						} catch {
							Fe = !0;
						}
						Fe ? Le.finishFailure(Q) : Le.finishSuccess(Q);
					}
					toggleSelectedGenerationAndReturnIsActive(ee, _) {
						if (
							!this.z.applicationUserPersistentStorage.allowMultiCmdKGenerations
						) {
							console.error(
								"Tried to toggle multiple generations, but they're banned!",
							);
							return;
						}
						const te = this.c.get(ee);
						if (te && (0, e.$47b)(te))
							return te.toggleSelectedGeneration(_), te.active;
					}
					pushUndoElement(ee, _) {
						if (_.breakConsolidation === !0) {
							this.F.pushElement(ee);
							return;
						}
						const te = this.F.getLastElement(ee.resource);
						te instanceof n.$y7b ? te.push(ee) : this.F.pushElement(ee);
					}
					dispose() {
						super.dispose();
						for (const ee of this.c.values()) ee.dispose();
						this.c.clear(), this.h.fire();
					}
					getGroupedChanges({ diffId: ee, mergeRadius: _ = 15 }) {
						const te = [],
							Q = this.z.nonPersistentStorage.inlineDiffs.find(
								(le) => le.id === ee,
							);
						if (Q === void 0) return te;
						const Z = Q.changes.sort(
							(le, oe) =>
								le.addedRange.startLineNumber - oe.addedRange.startLineNumber,
						);
						let se = [],
							re;
						for (let le = 0; le < Z.length; le++) {
							const oe = Z[le],
								ae = se.at(-1);
							k.$dh.isEqual(re, Q.uri) &&
							ae !== void 0 &&
							ae.addedRange.endLineNumberExclusive + _ >=
								oe.addedRange.startLineNumber
								? se.push(oe)
								: (se.length > 0 && te.push(se), (se = [oe]), (re = Q.uri));
						}
						return re !== void 0 && se.length > 0 && te.push(se), te;
					}
					async applyNewModelLinesToFile(ee) {
						const { uri: _, newModelLines: te } = ee,
							Q = this.z.nonPersistentStorage.inlineDiffs.find(
								(oe) => oe.uri.toString() === _.toString(),
							);
						Q && this.remove(Q.id);
						const Z = await this.w.createModelReference(_),
							se = Z.object.textEditorModel,
							re = se.getLinesContent(),
							le = (0, N.$Y7b)(re, te, !0, !1);
						this.P.write(_, le.newFullRangeTextLines.join(se.getEOL())),
							Z.dispose();
					}
				};
				(e.$37b = V),
					(e.$37b =
						V =
						H =
							Ne(
								[
									j(0, r.$MO),
									j(1, w.$Li),
									j(2, a.$0zb),
									j(3, T.$B7b),
									j(4, g.$GN),
									j(5, o.$6j),
									j(6, s.$IY),
									j(7, y.$Vl),
									j(8, $.$km),
									j(9, v.$Nfc),
									j(10, I.$J7b),
									j(11, D.$V7b),
									j(12, P.$dtb),
									j(13, x.$kZ),
								],
								V,
							)),
					(0, m.$lK)(e.$27b, V, m.InstantiationType.Delayed);
				const G = (ne) => ne.isMultiInlineDiff === !0,
					K = (ne) => !G(ne),
					J = (ne) => ne.isMultiple;
				e.$47b = J;
				const W = (ne) =>
					ne === void 0
						? [""]
						: G(ne)
							? ne.newTextLiness[ne.generationUUID]
							: ne.newTextLines;
				e.$57b = W;
				let X = class extends C.$1c {
					get id() {
						return this.inlineDiff.id;
					}
					constructor(ee, _, te, Q, Z, se, re, le, oe, ae, pe) {
						super(),
							(this.q = Q),
							(this.s = Z),
							(this.t = se),
							(this.u = re),
							(this.w = le),
							(this.y = oe),
							(this.z = ae),
							(this.C = pe),
							(this.f = h.$qxb.getDefault()),
							(this.g = h.$qxb.getLegacy()),
							(this.isMultiple = !1),
							(this.h = []),
							(this.j = !1),
							(this.m = 0),
							(this.n = 0),
							(this.active = !1),
							(this.F = []),
							(this.lastUndoEdits = null),
							(this.c = ee),
							(this.promptBarId = te),
							(this.composerMetadata = _.composerMetadata),
							(this.inlineDiff = {
								id: (0, u.$9g)(),
								changes: [],
								activeLine: void 0,
								pendingRange: {
									startLineNumber: 1,
									endLineNumberExclusive:
										_.currentRange.endLineNumberExclusive -
										_.currentRange.startLineNumber +
										1,
								},
								newTextLines: _.newTextLines ?? [],
								isHidden: !1,
								onAccept: void 0,
								onReject: void 0,
								canUndoUpdates: !0,
								showNativeAcceptReject: !1,
								..._,
							});
						const $e = pe.onDidChangeConfiguration((ye) => {
							ye.affectsConfiguration(B.$sW) && this.G();
						});
						if ((this.D($e), _.attachedToPromptBar)) {
							const ye = _.lastPromptBarCurrentRange ?? {
									startLineNumber: _.currentRange.startLineNumber,
									endLineNumberExclusive: _.currentRange.endLineNumberExclusive,
								},
								ue = this.c.object.textEditorModel.deltaDecorations(
									[],
									[
										{
											range: {
												startLineNumber: ye.startLineNumber,
												endLineNumber: ye.endLineNumberExclusive - 1,
												startColumn: 1,
												endColumn:
													this.c.object.textEditorModel.getLineMaxColumn(
														ye.endLineNumberExclusive - 1,
													),
											},
											options: {
												description: "promptBar-tracking-range",
												isWholeLine: !0,
											},
										},
									],
								)[0];
							if (
								this.q.nonPersistentStorage.promptBars.some(
									(fe) => fe.id === te,
								)
							) {
								const fe = this.q.nonPersistentStorage.promptBars.find(
									(me) => me.id === te,
								);
								fe &&
									this.q.setNonPersistentStorage(
										"promptBars",
										(me) => me.id === te,
										{
											...fe,
											diffId: this.inlineDiff.id,
											currentRangeDecorationId: ue,
										},
									);
							} else {
								const fe = {
									id: (0, u.$9g)(),
									uri: _.uri,
									data: (0, N.$W7b)(_.prompt),
									diffId: _.id,
									height: 0,
									contextSessionUuid: this.w.createContextSession((0, T.$D7b)())
										.uuid,
									queryHistory: void 0,
									chatResponse: void 0,
									currentRangeDecorationId: ue,
									inlineChatHistory: void 0,
									previousStructuredTextsNewestFirst: [],
									modifyTextModelPrePromptBarBackwardEdit: [],
									modifyTextModelPrePromptBarForwardEdit: [],
									generating: !1,
									forceRerenderInputBox: 0,
									prePromptBarCursorPosition: void 0,
									createdAt: Date.now(),
								};
							}
						}
						this.D(
							ee.object.textEditorModel.onDidChangeContent((ye) => {
								for (const ue of ye.changes)
									switch ((0, N.$X7b)(this.inlineDiff.currentRange, ue.range)) {
										case N.RangeWhereIs.After: {
											if (this.inlineDiff.changes.length > 0) {
												const me =
													this.inlineDiff.changes[
														this.inlineDiff.changes.length - 1
													];
												if (
													this.inlineDiff.currentRange.startLineNumber +
														me.addedRange.endLineNumberExclusive -
														1 ===
														ue.range.startLineNumber &&
													(me.removedTextLines.join(ye.eol) === ue.text ||
														me.removedTextLines.join(ye.eol) + ye.eol ===
															ue.text) &&
													ue.range.startColumn === 1 &&
													ue.range.startLineNumber ===
														this.inlineDiff.currentRange.endLineNumberExclusive
												) {
													for (const ve of me.removedTextLines)
														this.inlineDiff.newTextLines.push(ve);
													(this.inlineDiff.currentRange = new d.$rL(
														this.inlineDiff.currentRange.startLineNumber,
														this.inlineDiff.currentRange
															.endLineNumberExclusive +
															me.removedTextLines.length,
													)),
														this.inlineDiff.changes.pop(),
														this.q.setNonPersistentStorage(
															"inlineDiffs",
															(ve) => [
																...ve.filter(
																	(ge) => ge.id !== this.inlineDiff.id,
																),
																(0, a.$$zb)(this.inlineDiff),
															],
														),
														this.G();
													return;
												}
											}
											break;
										}
										case N.RangeWhereIs.Before: {
											const me =
												ue.text.split(`
`).length -
												(ue.range.endLineNumber - ue.range.startLineNumber + 1);
											(this.inlineDiff.currentRange = new d.$rL(
												this.inlineDiff.currentRange.startLineNumber + me,
												this.inlineDiff.currentRange.endLineNumberExclusive +
													me,
											)),
												this.q.setNonPersistentStorage("inlineDiffs", (ve) => [
													...ve.filter((ge) => ge.id !== this.inlineDiff.id),
													(0, a.$$zb)(this.inlineDiff),
												]),
												this.G();
											break;
										}
										case N.RangeWhereIs.Overlap: {
											if (this.active) continue;
											if (this.inlineDiff.isHidden) {
												this.t.rejectDiff(this.inlineDiff.id);
												continue;
											}
											this.processOverlapEdit(ue, ye.eol);
											break;
										}
									}
							}),
						),
							this.q.setNonPersistentStorage("inlineDiffs", (ye) => [
								...ye,
								(0, a.$$zb)(this.inlineDiff),
							]),
							this.G();
					}
					processOverlapEdit(ee, _) {
						const te = this.F.find(
							(me) =>
								me.range.startLineNumber === ee.range.startLineNumber &&
								me.range.startColumn === ee.range.startColumn &&
								me.range.endLineNumber === ee.range.endLineNumber &&
								me.range.endColumn === ee.range.endColumn &&
								(me.text ?? "") === ee.text,
						);
						if (te) {
							this.F = this.F.filter((me) => me !== te);
							return;
						}
						let Q = ee.text,
							Z = ee.range.startColumn,
							se = ee.range.endColumn,
							re = this.inlineDiff.currentRange.startLineNumber,
							le =
								ee.range.startLineNumber -
								this.inlineDiff.currentRange.startLineNumber +
								1;
						le < 1 &&
							((le = 1),
							(Z = 1),
							Q.includes(_)
								? ((Q = Q.split(_).slice(1).join(_)),
									(re = ee.range.startLineNumber + 1))
								: (console.warn(
										"We technically have a bug here if the line is not at the start... To fix it we'd need some magic tho like remembering the entire state of the document... so we'll ignore it for now",
									),
									(re = ee.range.startLineNumber)));
						let oe =
								ee.range.endLineNumber -
								this.inlineDiff.currentRange.startLineNumber +
								1,
							ae = !1;
						oe > this.inlineDiff.newTextLines.length &&
							((oe = this.inlineDiff.newTextLines.length),
							(se = this.inlineDiff.newTextLines[oe - 1].length + 1),
							Q.includes(_)
								? (Q = Q.split(_).slice(0, -1).join(_))
								: (console.warn(
										"We technically have a bug here if the line is not at the start... To fix it we'd need some magic tho like remembering the entire state of the document... so we'll ignore it for now",
									),
									(ae = !0)));
						const $e = (
								this.inlineDiff.newTextLines[le - 1].slice(0, Z - 1) +
								Q +
								this.inlineDiff.newTextLines[oe - 1].slice(se - 1)
							).split(_),
							ye = [
								...this.inlineDiff.newTextLines.slice(0, le - 1),
								...$e,
								...this.inlineDiff.newTextLines.slice(oe),
							];
						ae && ye.length > 0 && ye[ye.length - 1] === "" && ye.pop();
						const ue = new d.$rL(re, re + ye.length);
						(this.inlineDiff.currentRange = ue),
							(this.inlineDiff.newTextLines = ye);
						const fe = (0, N.$Y7b)(
							this.inlineDiff.originalTextLines,
							this.inlineDiff.newTextLines,
							!0,
							this.inlineDiff.isHidden,
						);
						(this.inlineDiff.changes = fe.changes),
							this.q.setNonPersistentStorage("inlineDiffs", (me) => [
								...me.filter((ve) => ve.id !== this.inlineDiff.id),
								(0, a.$$zb)(this.inlineDiff),
							]),
							this.G();
					}
					finishFailure() {
						if (!this.active) return;
						let ee = !0;
						for (let Q = 0; Q < this.inlineDiff.newTextLines.length; Q++)
							if (
								this.inlineDiff.newTextLines[Q] !==
								this.inlineDiff.originalTextLines[Q]
							) {
								ee = !1;
								break;
							}
						if (ee) {
							this.t.remove(this.inlineDiff.id), this.I();
							return;
						}
						const _ = (0, a.$$zb)(this.inlineDiff),
							te = (0, N.$Y7b)(
								this.inlineDiff.originalTextLines,
								this.inlineDiff.newTextLines,
								!1,
								this.inlineDiff.isHidden,
							);
						(this.inlineDiff.newTextLines = te.newFullRangeTextLines),
							this.handleDiffState(te, _),
							this.G(),
							this.H();
					}
					finishSuccess() {
						if (!this.active) return;
						const ee = (0, a.$$zb)(this.inlineDiff),
							_ = (0, N.$Y7b)(
								this.inlineDiff.originalTextLines,
								this.inlineDiff.newTextLines,
								!0,
								this.inlineDiff.isHidden,
							);
						this.handleDiffState(_, ee), this.G(), this.H();
					}
					reject() {
						const ee = [];
						for (const oe of this.inlineDiff.changes) {
							let ae = oe.removedTextLines.join(
								this.c.object.textEditorModel.getEOL(),
							);
							const pe = this.getGreenRange(oe);
							oe.addedRange.startLineNumber ===
								oe.addedRange.endLineNumberExclusive &&
								(ae += this.c.object.textEditorModel.getEOL());
							const $e = {
								range: pe,
								text: ae,
								forceMoveMarkers: !this.inlineDiff.isHidden,
							};
							ee.push($e);
						}
						this.t.recordRejectEvent({
							model: this.c.object.textEditorModel,
							requestId: this.inlineDiff.generationUUID,
							promptBarId: this.promptBarId,
						}),
							this.t.reportEditFate(this.inlineDiff.generationUUID, "reject", {
								numPartiallyAccepted: this.m,
								numPartiallyRejected: this.n,
								numUnresolved: this.inlineDiff.changes.length,
							});
						const _ = this.inlineDiff.uri,
							te = (0, a.$$zb)(this.inlineDiff),
							Q = this.inlineDiff.id,
							Z = this.t,
							se = [];
						let re;
						try {
							const oe = this.c.object.textEditorModel,
								ae = this.z.createById(oe.getLanguageId());
							(re = this.y.createModel(
								oe.getValue(),
								ae,
								t.URI.parse(`inline-diff-reject-anysphere://${q()}`),
							)),
								se.push(...re.applyEdits(ee, !0));
							for (let pe = ee.length - 1; pe >= 0; pe--)
								this.c.object.textEditorModel.applyEdits([ee[pe]]);
						} catch (oe) {
							console.warn(
								"Weird undo edit bug that I don't like... But if it for the cursor state only then it is probably fine?",
								oe,
							);
						} finally {
							re?.dispose();
						}
						this.removeDecorations(),
							this.q.setNonPersistentStorage("inlineDiffs", (oe) =>
								oe.filter((ae) => ae.id !== this.inlineDiff.id),
							);
						const le = (0, a.$$zb)(this.inlineDiff);
						if (!this.inlineDiff.isHidden) {
							const oe = this.q.nonPersistentStorage.promptBars.find(
								(pe) => pe.diffId === this.inlineDiff.id,
							);
							oe &&
								(le.lastPromptBarCurrentRange = this.s.getPromptBarCurrentRange(
									oe,
									this.c.object.textEditorModel,
								));
							const ae = new n.$y7b(
								"Undo Reject Suggestion",
								"undo-reject-suggestion",
								this.inlineDiff.id,
								this.inlineDiff.uri,
								async () => {
									await Z.applyEditsNoUpdateDiffs(_, se), Z.setDiff(Q, te);
								},
								async () => {
									await Z.applyEditsNoUpdateDiffs(_, ee), Z.setDiff(Q, le);
								},
							);
							this.t.pushUndoElement(ae, {});
						}
					}
					cancel() {
						this.t.recordCancelEvent({
							model: this.c.object.textEditorModel,
							requestId: this.inlineDiff.generationUUID,
							promptBarId: this.promptBarId,
						}),
							this.q.setNonPersistentStorage("inprogressAIGenerations", (ee) =>
								ee.filter(
									(_) => _.generationUUID !== this.inlineDiff.generationUUID,
								),
							);
					}
					remove() {
						this.removeDecorations(),
							this.q.setNonPersistentStorage("inlineDiffs", (ee) =>
								ee.filter((_) => _.id !== this.inlineDiff.id),
							);
					}
					add() {
						this.G(),
							this.q.setNonPersistentStorage("inlineDiffs", (ee) => [
								...ee,
								(0, a.$$zb)(this.inlineDiff),
							]);
					}
					getGreenRange(ee) {
						const _ = this.c.object.textEditorModel,
							te = _.getLineCount();
						if (ee.removedTextLines.length === 0) {
							let Q =
									this.inlineDiff.currentRange.startLineNumber +
									ee.addedRange.startLineNumber -
									1,
								Z =
									this.inlineDiff.currentRange.startLineNumber +
									ee.addedRange.endLineNumberExclusive -
									1;
							if (Z <= te) return new E.$iL(Q, 1, Z, 1);
							{
								Z = te;
								let se = 1;
								return (
									Q > 1 && (Q--, (se = _.getLineMaxColumn(Q))),
									new E.$iL(Q, se, Z, _.getLineMaxColumn(Z))
								);
							}
						} else {
							const Q =
									this.inlineDiff.currentRange.startLineNumber +
									ee.addedRange.endLineNumberExclusive -
									1 -
									1,
								Z = Math.min(Q, te);
							return ee.addedRange.endLineNumberExclusive ===
								ee.addedRange.startLineNumber
								? new E.$iL(
										this.inlineDiff.currentRange.startLineNumber +
											ee.addedRange.startLineNumber -
											1,
										1,
										this.inlineDiff.currentRange.startLineNumber +
											ee.addedRange.startLineNumber -
											1,
										1,
									)
								: new E.$iL(
										this.inlineDiff.currentRange.startLineNumber +
											ee.addedRange.startLineNumber -
											1,
										1,
										Z,
										this.c.object.textEditorModel.getLineMaxColumn(Z),
									);
						}
					}
					rejectPartialDiff(ee) {
						const _ = this.findClosestChange(ee),
							te = this.inlineDiff.changes.length === 1,
							Q = this.getGreenRange(_),
							Z =
								_.addedRange.endLineNumberExclusive ===
								_.addedRange.startLineNumber
									? this.c.object.textEditorModel.getEOL()
									: "",
							se =
								_.removedTextLines.join(
									this.c.object.textEditorModel.getEOL(),
								) + Z,
							re = { range: Q, text: se, forceMoveMarkers: !0 };
						this.t.recordPartialRejectEvent({
							model: this.c.object.textEditorModel,
							requestId: this.inlineDiff.generationUUID,
							redLines: se.split(`
`),
							greenLines: this.c.object.textEditorModel
								.getValueInRange(Q)
								.split(`
`),
							greenRange: Q,
							promptBarId: this.promptBarId,
						});
						const le = this.t,
							oe = this.inlineDiff.id,
							ae = (0, a.$$zb)(this.inlineDiff),
							pe = this.inlineDiff.uri,
							$e = [];
						try {
							$e.push(...this.c.object.textEditorModel.applyEdits([re], !0));
						} catch (ue) {
							console.warn(
								"Weird undo edit bug that I don't like... But if it for the cursor state only then it is probably fine?",
								ue,
							);
						}
						const ye = (0, a.$$zb)(this.inlineDiff);
						if (!this.inlineDiff.isHidden) {
							this.n++;
							const ue = new n.$y7b(
								"Undo Accept Suggestion",
								"undo-accept-suggestion",
								this.inlineDiff.id,
								this.inlineDiff.uri,
								async () => {
									this.n--,
										await le.applyEditsNoUpdateDiffs(pe, $e),
										le.setDiff(oe, ae);
								},
								async () => {
									this.n++,
										await le.applyEditsNoUpdateDiffs(pe, [re]),
										le.setDiff(oe, ye);
								},
							);
							this.t.pushUndoElement(ue, {});
						}
						if (te) {
							if (!this.inlineDiff.isHidden) {
								this.t.reportEditFate(
									this.inlineDiff.generationUUID,
									"partial",
									{
										numPartiallyAccepted: this.m,
										numPartiallyRejected: this.n,
										numUnresolved: 0,
									},
								);
								const ue = this.q.nonPersistentStorage.promptBars.find(
									(fe) => fe.diffId === this.inlineDiff.id,
								);
								ue &&
									(ye.lastPromptBarCurrentRange =
										this.s.getPromptBarCurrentRange(
											ue,
											this.c.object.textEditorModel,
										));
							}
							return this.remove(), !0;
						}
						return !1;
					}
					findClosestChange(ee) {
						const _ =
							ee.lineNumber - this.inlineDiff.currentRange.startLineNumber + 1;
						let te = this.inlineDiff.changes[0];
						for (const Q of this.inlineDiff.changes.slice(1)) {
							const Z = Math.min(
									Math.abs(Q.addedRange.endLineNumberExclusive - 1 - _),
									Math.abs(Q.addedRange.startLineNumber - _),
								),
								se = Math.min(
									Math.abs(te.addedRange.endLineNumberExclusive - 1 - _),
									Math.abs(te.addedRange.startLineNumber - _),
								);
							Z < se && (te = Q);
						}
						return te;
					}
					acceptPartialDiff(ee) {
						const _ = this.findClosestChange(ee),
							te = [
								...this.inlineDiff.originalTextLines.slice(
									0,
									_.removedLinesOriginalRange.startLineNumber - 1,
								),
								...this.inlineDiff.newTextLines.slice(
									_.addedRange.startLineNumber - 1,
									_.addedRange.endLineNumberExclusive - 1,
								),
								...this.inlineDiff.originalTextLines.slice(
									_.removedLinesOriginalRange.endLineNumberExclusive - 1,
								),
							],
							Q = new d.$rL(
								this.inlineDiff.currentRange.startLineNumber,
								this.inlineDiff.currentRange.endLineNumberExclusive +
									(_.removedLinesOriginalRange.endLineNumberExclusive -
										_.removedLinesOriginalRange.startLineNumber -
										(_.addedRange.endLineNumberExclusive -
											_.addedRange.startLineNumber)),
							),
							Z = (0, a.$$zb)(this.inlineDiff),
							se = this.inlineDiff.id,
							re = this.t,
							le = this.getGreenRange(_),
							oe =
								_.addedRange.endLineNumberExclusive ===
								_.addedRange.startLineNumber
									? this.c.object.textEditorModel.getEOL()
									: "",
							ae = (
								_.removedTextLines.join(
									this.c.object.textEditorModel.getEOL(),
								) + oe
							).split(`
`);
						this.t.recordPartialAcceptEvent({
							model: this.c.object.textEditorModel,
							requestId: this.inlineDiff.generationUUID,
							redLines: ae,
							greenLines: this.c.object.textEditorModel
								.getValueInRange(le)
								.split(`
`),
							greenRange: le,
							promptBarId: this.promptBarId,
						}),
							(this.inlineDiff.currentRange = Q),
							(this.inlineDiff.originalTextLines = te);
						const pe = (0, N.$Y7b)(
							this.inlineDiff.originalTextLines,
							this.inlineDiff.newTextLines,
							!0,
							this.inlineDiff.isHidden,
						);
						(this.inlineDiff.changes = pe.changes),
							this.q.setNonPersistentStorage("inlineDiffs", (ye) => [
								...ye.filter((ue) => ue.id !== this.inlineDiff.id),
								(0, a.$$zb)(this.inlineDiff),
							]),
							this.G();
						const $e = (0, a.$$zb)(this.inlineDiff);
						if (!this.inlineDiff.isHidden) {
							this.m++;
							const ye = new n.$y7b(
								"Undo Accept Suggestion",
								"undo-accept-suggestion",
								this.inlineDiff.id,
								this.inlineDiff.uri,
								async () => {
									this.m--, re.setDiff(se, Z);
								},
								() => {
									this.m++, re.setDiff(se, $e);
								},
							);
							this.t.pushUndoElement(ye, {});
						}
						return this.inlineDiff.changes.length === 0
							? (this.t.reportEditFate(
									this.inlineDiff.generationUUID,
									"partial",
									{
										numPartiallyAccepted: this.m,
										numPartiallyRejected: this.n,
										numUnresolved: 0,
									},
								),
								this.remove(),
								!0)
							: !1;
					}
					accept() {
						this.t.recordAcceptEvent({
							model: this.c.object.textEditorModel,
							requestId: this.inlineDiff.generationUUID,
							promptBarId: this.promptBarId,
						}),
							this.t.reportEditFate(this.inlineDiff.generationUUID, "accept", {
								numPartiallyAccepted: this.m,
								numPartiallyRejected: this.n,
								numUnresolved: this.inlineDiff.changes.length,
							}),
							this.remove(),
							this.dispose();
					}
					removeDecorations() {
						const ee = this.c.object.textEditorModel,
							_ = this.h;
						(this.h = []), ee.deltaDecorations(_, []);
					}
					addLinesToDiff(ee, _ = !1) {
						if (!this.active) return;
						const te = [];
						for (const se of ee) {
							(se.includes(`
`) ||
								se.includes("\r")) &&
								console.warn(
									"InlineDiffService#addLine: line contains newline characters, which is not supported",
								);
							let re = se.replace(/\r/g, "");
							(re = re.replace(/\n/g, "")), te.push(re);
						}
						const Q = (0, a.$$zb)(this.inlineDiff);
						this.inlineDiff.newTextLines.push(...te);
						const Z = (0, N.$Y7b)(
							this.inlineDiff.originalTextLines,
							this.inlineDiff.newTextLines,
							!1,
							this.inlineDiff.isHidden,
						);
						this.handleDiffState(Z, Q, _), this.G();
					}
					G() {
						const ee = this.C.getValue(B.$sW),
							_ = [],
							te = this.inlineDiff.isHidden ? "-hidden" : "";
						for (const Z of this.inlineDiff.changes) {
							const se =
								this.inlineDiff.currentRange.startLineNumber +
								Z.addedRange.startLineNumber -
								1;
							if (
								Z.addedRange.startLineNumber ===
								Z.addedRange.endLineNumberExclusive
							)
								continue;
							const re = new E.$iL(
									se,
									0,
									this.inlineDiff.currentRange.startLineNumber +
										Z.addedRange.endLineNumberExclusive -
										1 -
										1,
									0,
								),
								le = {
									range: re,
									options: {
										description:
											"inline-diff-removed" +
											(this.inlineDiff.isHidden ? "-hidden" : ""),
										overviewRuler: {
											position: c.OverviewRulerLane.Center,
											color:
												"var(--vscode-diffEditor-removedLineBackground, hsl(348deg 90% 50% / 25%))",
										},
									},
								};
							_.push(le);
							let oe = !1;
							if (
								Z.relativeInnerChanges &&
								!this.inlineDiff.isHidden &&
								this.C.getValue(B.$tW)
							) {
								const me = {
										className: "inline-diff-inner-change-added",
										description: "inline-diff-inner-change-added",
										shouldFillLineOnLineBreak: !0,
									},
									ve = {
										className:
											"inline-diff-inner-change-added inline-diff-inner-empty",
										description:
											"inline-diff-inner-change-addedinline-diff-inner-empty",
									};
								for (const ge of Z.relativeInnerChanges) {
									oe = !0;
									const be = new E.$iL(
											se + ge.modifiedRange.startLineNumber - 1,
											ge.modifiedRange.startColumn,
											se + ge.modifiedRange.endLineNumber - 1,
											ge.modifiedRange.endColumn,
										),
										Ce = { range: be, options: be.isEmpty() ? ve : me };
									_.push(Ce);
								}
							}
							const ae =
									"inline-diff-added " +
									(ee
										? "inline-diff-added-color"
										: `inline-diff-added-color-unthemed${oe ? "-lower" : ""}`),
								pe = "inline-diff-added-lines" + te,
								$e = Z.indentation
									? this.inlineDiff.currentRange.startLineNumber +
										Z.indentation.range.startLineNumber -
										1
									: se,
								ye = Z.indentation
									? this.inlineDiff.currentRange.startLineNumber +
										Z.indentation.range.endLineNumberExclusive -
										1 -
										1
									: re.endLineNumber,
								ue = new E.$iL(
									$e,
									1,
									ye,
									this.c.object.textEditorModel.getLineMaxColumn(ye),
								),
								fe = Z.indentation
									? this.c.object.textEditorModel.getValueInRange(ue)
									: "";
							if (Z.indentation && fe.trim() !== "") {
								for (let ve = $e; ve <= ye; ve++) {
									const ge = {
										range: new E.$iL(ve, 1, ve, Z.indentation.level + 1),
										options: {
											description: "inline-diff-indent-change",
											className:
												Z.indentation.level > 0
													? "inline-diff-indentation-increased"
													: "inline-diff-indentation-decreased",
										},
									};
									_.push(ge);
								}
								if ($e > se) {
									const ge = {
										range: new E.$iL(se, 0, $e - 1, 0),
										options: {
											description: ae,
											className: ae,
											inlineClassName: pe,
											isWholeLine: !0,
											...(this.inlineDiff.isHidden
												? {}
												: {
														overviewRuler: {
															position: c.OverviewRulerLane.Right,
															color:
																"var(--vscode-diffEditor-insertedLineBackground, hsl(124deg 90% 48% / 20%))",
														},
													}),
										},
									};
									_.push(ge);
								}
								if (ye < re.endLineNumber) {
									const ge = {
										range: new E.$iL(ye + 1, 0, re.endLineNumber, 0),
										options: {
											description: ae,
											className: ae,
											inlineClassName: pe,
											isWholeLine: !0,
											...(this.inlineDiff.isHidden
												? {}
												: {
														overviewRuler: {
															position: c.OverviewRulerLane.Right,
															color:
																"var(--vscode-diffEditor-insertedLineBackground, hsl(124deg 90% 48% / 20%))",
														},
													}),
										},
									};
									_.push(ge);
								}
								const me = {
									range: ue,
									options: {
										description: "inline-diff-indented-subset",
										className: ee
											? "inline-diff-indented-subset"
											: "inline-diff-indented-subset-unthemed",
										isWholeLine: !0,
									},
								};
								_.push(me);
							} else {
								const me = {
									range: re,
									options: {
										description: ae,
										className: ae,
										inlineClassName: pe,
										isWholeLine: !0,
										...(this.inlineDiff.isHidden
											? {}
											: {
													overviewRuler: {
														position: c.OverviewRulerLane.Right,
														color:
															"var(--vscode-diffEditor-insertedLineBackground, hsl(124deg 90% 48% / 20%))",
													},
												}),
									},
								};
								_.push(me);
							}
						}
						if (
							this.q.nonPersistentStorage.inprogressAIGenerations.some(
								(Z) => Z.generationUUID === this.inlineDiff.generationUUID,
							)
						) {
							if (this.inlineDiff.activeLine) {
								const Z = new E.$iL(
									this.inlineDiff.currentRange.startLineNumber +
										this.inlineDiff.activeLine -
										1,
									0,
									this.inlineDiff.currentRange.startLineNumber +
										this.inlineDiff.activeLine -
										1,
									0,
								);
								_.push({
									range: Z,
									options: {
										description: "inline-diff-current",
										className: "inline-diff-current",
										isWholeLine: !0,
									},
								});
							}
							if (
								this.inlineDiff.pendingRange.startLineNumber !==
								this.inlineDiff.pendingRange.endLineNumberExclusive
							) {
								const Z = new E.$iL(
									this.inlineDiff.currentRange.startLineNumber +
										this.inlineDiff.pendingRange.startLineNumber -
										1,
									0,
									this.inlineDiff.currentRange.startLineNumber +
										this.inlineDiff.pendingRange.endLineNumberExclusive -
										1 -
										1,
									0,
								);
								_.push({
									range: Z,
									options: {
										description: "inline-diff-pending",
										className: "inline-diff-pending",
										isWholeLine: !0,
									},
								});
							}
						}
						this.h = this.c.object.textEditorModel.deltaDecorations(this.h, _);
					}
					handleDiffState(ee, _, te = !1, Q = !1) {
						!this.active &&
							!Q &&
							console.error(
								"InlineDiffService#handleDiffState: diff is not active when calling handleDiffState",
							);
						const Z = this.c.object.textEditorModel,
							se = (0, N.$Z7b)(ee, this.inlineDiff, this.c);
						this.F = se;
						let re = [];
						this.inlineDiff.isHidden || (re = Z.applyEdits(se, !0)),
							this.inlineDiff.isHidden ||
								(this.inlineDiff.currentRange = new d.$rL(
									this.inlineDiff.currentRange.startLineNumber,
									this.inlineDiff.currentRange.startLineNumber +
										ee.newFullRangeTextLines.length,
								)),
							(this.inlineDiff.changes = ee.changes),
							(this.inlineDiff.activeLine = ee.activeLine),
							(this.inlineDiff.pendingRange = ee.pendingRange),
							this.q.setNonPersistentStorage("inlineDiffs", ($e) => [
								...$e.filter((ye) => ye.id !== this.inlineDiff.id),
								(0, a.$$zb)(this.inlineDiff),
							]);
						const le = (0, a.$$zb)(this.inlineDiff),
							oe = this.t,
							ae = this.inlineDiff.id,
							pe = this.inlineDiff.uri;
						if (!this.inlineDiff.isHidden && !te) {
							const $e = new n.$y7b(
								"Undo Update Diff",
								"undo-update-diff",
								ae,
								Z.uri,
								async () => {
									oe.cancelInUndo(ae),
										await oe.applyEditsNoUpdateDiffs(pe, re),
										oe.setDiff(ae, _);
								},
								async () => {
									await oe.applyEditsNoUpdateDiffs(pe, se), oe.setDiff(ae, le);
								},
							);
							this.t.pushUndoElement($e, {});
						}
					}
					cancelInUndo() {
						this.q.nonPersistentStorage.inprogressAIGenerations.some(
							(ee) => ee.generationUUID === this.inlineDiff.generationUUID,
						) &&
							this.q.setNonPersistentStorage("inprogressAIGenerations", (ee) =>
								ee.filter(
									(_) => _.generationUUID !== this.inlineDiff.generationUUID,
								),
							),
							(this.active = !1),
							(this.j = !0);
					}
					setDiff(ee) {
						(this.inlineDiff = ee),
							this.q.setNonPersistentStorage("inlineDiffs", (_) => [
								..._.filter((te) => te.id !== this.inlineDiff.id),
								(0, a.$$zb)(this.inlineDiff),
							]),
							this.G();
					}
					activate(ee, _, te) {
						(this.active = !0),
							(this.doneCallback = ee),
							(this.cancelGenerationWithNoChangesCallback = _),
							(this.rejectCallback = te);
					}
					H() {
						(this.active = !1),
							this.doneCallback &&
								this.doneCallback({
									generationUUID: this.inlineDiff.generationUUID,
									diffRange: this.inlineDiff.currentRange,
									model: this.c.object.textEditorModel,
								});
					}
					I() {
						this.cancelGenerationWithNoChangesCallback &&
							this.cancelGenerationWithNoChangesCallback();
					}
					callRejectCallback() {
						this.rejectCallback && this.rejectCallback();
					}
				};
				(e.$67b = X),
					(e.$67b = X =
						Ne(
							[
								j(3, a.$0zb),
								j(4, I.$J7b),
								j(5, e.$27b),
								j(6, g.$GN),
								j(7, T.$B7b),
								j(8, A.$QO),
								j(9, R.$nM),
								j(10, O.$gj),
							],
							X,
						));
				function Y(ne, ee, _, te) {
					const Q = ne.listCodeEditors();
					for (const Z of Q)
						if (Z.hasModel() && k.$dh.isEqual(Z.getModel().uri, _)) {
							const se = Z.getPosition();
							se &&
							se.lineNumber >= ee.startLineNumber &&
							se.lineNumber <= ee.endLineNumber
								? Z.setPosition(te)
								: se &&
									se.lineNumber >
										Z.getModel().getLineCount() -
											(ee.endLineNumber - ee.startLineNumber + 1) &&
									Z.setPosition(
										new p.$hL(
											Z.getModel().getLineCount() -
												(ee.endLineNumber - ee.startLineNumber + 1),
											se.column,
										),
									);
						}
				}
				function ie(ne, ee) {
					try {
						ne.applyEdits(ee);
					} catch (_) {
						console.warn(
							"Expected error. But if this error happens and something looks weird, then we should investigate. It is related to the feature of having the cursor state go back to its original place if you escape out of a cmd-k generate prompt bar.",
							_,
						);
					}
				}
			},
		),
		