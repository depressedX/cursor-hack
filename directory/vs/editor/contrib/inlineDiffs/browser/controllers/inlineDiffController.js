import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/store.js';
import '../../../../../base/common/constants.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/platform.js';
import '../../../../../base/common/resources.js';
import '../../../../../base/common/uuid.js';
import '../../../../browser/editorBrowser.js';
import '../../../../browser/editorExtensions.js';
import '../../../../browser/services/codeEditorService.js';
import '../../../../browser/services/inlineDiffService.js';
import '../../../../common/core/position.js';
import '../../../../common/editorContextKeys.js';
import '../../../../common/languages/language.js';
import '../inlineDiffTypes.js';
import '../widgets/inlineDiffPartialWidget.js';
import '../widgets/removedLinesZoneWidget.js';
import '../../../../../platform/commands/common/commands.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../../platform/telemetry/common/telemetry.js';
import '../../../../../platform/theme/common/themeService.js';
import '../../../../../platform/undoRedo/common/undoRedo.js';
import '../../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../../workbench/contrib/notebook/browser/notebookBrowser.js';
import '../../../../../workbench/services/ai/browser/fastEditService.js';
import '../../../../../workbench/services/editor/browser/editorService.js';
import '../../../../../workbench/services/editor/common/editorService.js';
import '../../../../common/core/range.js';
define(
			de[851],
			he([
				1, 0, 193, 58, 27, 3, 12, 19, 47, 56, 46, 65, 383, 48, 71, 61, 534,
				3981, 2934, 31, 10, 8, 5, 43, 45, 32, 35, 155, 68, 108, 480, 1051, 18,
				17,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*store*/,
				i /*constants*/,
				w /*keyCodes*/,
				E /*lifecycle*/,
				C /*platform*/,
				d /*resources*/,
				m /*uuid*/,
				r /*editorBrowser*/,
				u /*editorExtensions*/,
				a /*codeEditorService*/,
				h /*inlineDiffService*/,
				c /*position*/,
				n /*editorContextKeys*/,
				g /*language*/,
				p /*inlineDiffTypes*/,
				o /*inlineDiffPartialWidget*/,
				f /*removedLinesZoneWidget*/,
				b /*commands*/,
				s /*configuration*/,
				l /*contextkey*/,
				y /*instantiation*/,
				$ /*keybindingsRegistry*/,
				v /*reactiveStorageService*/,
				S /*telemetry*/,
				I /*themeService*/,
				T /*undoRedo*/,
				P /*uriIdentity*/,
				k /*notebookBrowser*/,
				L /*fastEditService*/,
				D /*editorService*/,
				M /*editorService*/,
				N /*range*/,
) {
				"use strict";
				var A;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ddc = void 0),
					(e.$Cdc = R);
				function R(G, K) {
					const J =
						G.nonPersistentStorage.multiEditState.inprogressEdits.filter(
							(W) => W.generationUUID !== K && W.generationUUID + "-diff" !== K,
						);
					return G.setNonPersistentStorage({
						multiEditState: {
							...G.nonPersistentStorage.multiEditState,
							inprogressEdits: J,
						},
					});
				}
				class O extends u.$itb {
					constructor() {
						super({
							id: p.$07b,
							label: "Accept All Edits",
							alias: "Accept All Edits",
							precondition: l.$Kj.or(
								n.EditorContextKeys.editorHasPromptBar.isEqualTo(!0),
								n.EditorContextKeys.hasDisplayedDiff,
							),
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: w.KeyMod.CtrlCmd | w.KeyCode.Shift | w.KeyCode.Enter,
								weight: $.KeybindingWeight.CursorDefaultPriority,
							},
						});
					}
					run(K, J, W) {
						K.get(S.$km).publicLogCapture("Accepted Diff");
						const X = K.get(v.$0zb);
						K.get(S.$km).publicLogCapture(
							"did.edit.accepted." +
								X.applicationUserPersistentStorage.aiSettings.openAIModel,
						),
							K.get(a.$dtb)
								.listCodeEditors()
								.forEach((ne) => {
									H.get(ne)?.acceptSuggestion(W, "both");
								});
					}
				}
				(0, u.$ntb)(O);
				class B extends u.$itb {
					constructor() {
						super({
							id: p.$f8b,
							label: "View All Changes",
							alias: "View All Changes",
							precondition: l.$Kj.or(
								n.EditorContextKeys.editorHasPromptBar.isEqualTo(!0),
								n.EditorContextKeys.hasDisplayedDiff,
							),
						});
					}
					async run(K, J) {
						const W = K.get(v.$0zb),
							X = K.get(M.$IY),
							Y = W.nonPersistentStorage.inlineDiffs.filter(
								(ne) => ne.source === L.$_9b || ne.source === L.$a0b,
							);
						if (Y.length === 0) return;
						const ie = { resources: Y.map((ne) => ne.uri) };
						await X.openEditor(ie);
					}
				}
				(0, u.$ntb)(B);
				function U(G, K) {
					const J = G.activeEditorPane?.getControl();
					let W;
					const X = (0, k.$eJb)(G.activeEditorPane);
					if (X) {
						const Y = X.getActiveCell()?.textModel;
						if (Y) W = Y;
						else return !1;
					} else if ((0, r.$0sb)(J)) {
						if (!J.hasModel()) return !1;
						W = J.getModel();
					} else return !1;
					return K.nonPersistentStorage.inlineDiffs.some((Y) =>
						d.$dh.isEqual(Y.uri, W.uri),
					);
				}
				D.$Bdc.registerEditorAction(p.$97b, (G, K) => {
					(0, u.$ntb)(
						class extends u.$itb {
							constructor() {
								super({
									id: p.$97b,
									label: "Accept Edits",
									alias: "Accept Edits",
									precondition: l.$Kj.function(() => U(K, G)),
									kbOpts: {
										kbExpr: n.EditorContextKeys.editorTextFocus,
										primary: w.KeyMod.CtrlCmd | w.KeyCode.Enter,
										weight: $.KeybindingWeight.CursorDefaultPriority,
									},
								});
							}
							run(W, X, Y) {
								const ie = W.get(v.$0zb),
									ne = W.get(S.$km);
								ne.publicLogCapture("Accepted Diff"),
									ne.publicLogCapture("did.edit.accepted", {
										model:
											ie.applicationUserPersistentStorage.aiSettings
												.openAIModel,
									}),
									H.get(X)?.acceptSuggestion(Y, "both");
							}
						},
					);
				}),
					D.$Bdc.registerEditorAction(p.$$7b, (G, K) => {
						(0, u.$ntb)(
							class extends u.$itb {
								constructor() {
									super({
										id: p.$$7b,
										label: "Accept Partial Edit",
										alias: "Accept Partial Edit",
										precondition: l.$Kj.function(() => U(K, G)),
										kbOpts: {
											kbExpr: n.EditorContextKeys.editorTextFocus,
											primary: C.$l
												? w.KeyMod.CtrlCmd | w.KeyMod.Shift | w.KeyCode.KeyY
												: w.KeyMod.CtrlCmd | w.KeyCode.KeyY,
											weight: $.KeybindingWeight.CursorDefaultPriority,
										},
									});
								}
								run(W, X, Y) {
									W.get(S.$km).publicLogCapture("Accepted Partial Diff");
									const ie = W.get(S.$km),
										ne = W.get(v.$0zb);
									ie.publicLogCapture("did.edit.acceptedpartial", {
										model:
											ne.applicationUserPersistentStorage.aiSettings
												.openAIModel,
									}),
										H.get(X)?.acceptPartialSuggestion(Y, "both");
								}
							},
						);
					});
				class z extends u.$itb {
					constructor() {
						super({
							id: p.$a8b,
							label: "Reject All Edits",
							alias: "Reject All Edits",
							precondition: l.$Kj.or(
								n.EditorContextKeys.editorHasPromptBar.isEqualTo(!0),
								n.EditorContextKeys.hasDisplayedDiff,
							),
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary:
									w.KeyMod.CtrlCmd | w.KeyCode.Shift | w.KeyCode.Backspace,
								weight: $.KeybindingWeight.CursorDefaultPriority,
							},
						});
					}
					run(K, J, W) {
						K.get(S.$km).publicLogCapture("Rejected Diff");
						const X = K.get(v.$0zb);
						K.get(S.$km).publicLogCapture("did.edit.rejected", {
							model: X.applicationUserPersistentStorage.aiSettings.openAIModel,
						}),
							K.get(a.$dtb)
								.listCodeEditors()
								.forEach((ee) => {
									if (
										(H.get(ee)?.rejectSuggestion(W, "both"),
										X.nonPersistentStorage.promptBars.length === 0)
									)
										return;
									const _ = ee.getSelection();
									let te;
									if (!_)
										te =
											X.nonPersistentStorage.promptBars[
												X.nonPersistentStorage.promptBars.length - 1
											].id;
									else {
										let Q = 1 / 0;
										for (const Z of X.nonPersistentStorage.promptBars) {
											const se = ee
												.getModel()
												?.getDecorationRange(Z.currentRangeDecorationId);
											if (!se) continue;
											if (se.intersectRanges(_)) {
												te = Z.id;
												break;
											}
											const re = Math.min(
												Math.abs(_.startLineNumber - se.startLineNumber),
												Math.abs(_.endLineNumber - se.endLineNumber),
											);
											re < Q && ((Q = re), (te = Z.id));
										}
									}
									K.get(b.$ek).executeCommand(i.$iW, te),
										K.get(b.$ek).executeCommand(i.$hW, te);
								});
					}
				}
				(0, u.$ntb)(z),
					D.$Bdc.registerEditorAction(p.$_7b, (G, K) => {
						(0, u.$ntb)(
							class extends u.$itb {
								constructor() {
									super({
										id: p.$_7b,
										label: "Reject Edits",
										alias: "Reject Edits",
										precondition: l.$Kj.function(() => U(K, G)),
										kbOpts: {
											kbExpr: n.EditorContextKeys.editorTextFocus,
											primary: w.KeyMod.CtrlCmd | w.KeyCode.Backspace,
											weight: $.KeybindingWeight.CursorDefaultPriority,
										},
									});
								}
								run(W, X, Y) {
									const ie = W.get(v.$0zb),
										ne = W.get(S.$km);
									if (
										(ne.publicLogCapture("Rejected Diff"),
										ne.publicLogCapture("did.edit.rejected", {
											model:
												ie.applicationUserPersistentStorage.aiSettings
													.openAIModel,
										}),
										H.get(X)?.rejectSuggestion(Y, "both"),
										ie.nonPersistentStorage.promptBars.length === 0)
									)
										return;
									const ee = X.getSelection();
									let _;
									if (!ee)
										_ =
											ie.nonPersistentStorage.promptBars[
												ie.nonPersistentStorage.promptBars.length - 1
											].id;
									else {
										let te = 1 / 0;
										for (const Q of ie.nonPersistentStorage.promptBars) {
											const Z = X.getModel()?.getDecorationRange(
												Q.currentRangeDecorationId,
											);
											if (!Z) continue;
											if (Z.intersectRanges(ee)) {
												_ = Q.id;
												break;
											}
											const se = Math.min(
												Math.abs(ee.startLineNumber - Z.startLineNumber),
												Math.abs(ee.endLineNumber - Z.endLineNumber),
											);
											se < te && ((te = se), (_ = Q.id));
										}
									}
									W.get(b.$ek).executeCommand(i.$iW, _),
										W.get(b.$ek).executeCommand(i.$hW, _);
								}
							},
						);
					}),
					D.$Bdc.registerEditorAction(p.$b8b, (G, K) => {
						(0, u.$ntb)(
							class extends u.$itb {
								constructor() {
									super({
										id: p.$b8b,
										label: "Reject Partial Edit",
										alias: "Reject Partial Edit",
										precondition: l.$Kj.function(() => U(K, G)),
										kbOpts: {
											kbExpr: n.EditorContextKeys.editorTextFocus,
											primary: w.KeyMod.CtrlCmd | w.KeyCode.KeyN,
											weight: $.KeybindingWeight.CursorDefaultPriority,
										},
									});
								}
								run(W, X, Y) {
									const ie = W.get(S.$km),
										ne = W.get(v.$0zb);
									ie.publicLogCapture("Rejected Partial Diff"),
										ie.publicLogCapture("did.edit.rejectedpartial", {
											model:
												ne.applicationUserPersistentStorage.aiSettings
													.openAIModel,
										}),
										H.get(X)?.rejectPartialSuggestion(Y, "both");
								}
							},
						);
					});
				class F extends u.$itb {
					constructor() {
						super({
							id: p.$c8b,
							label: "Cancel Edits",
							alias: "Cancel Edits",
							precondition: n.EditorContextKeys.hasActivelyGeneratingDiff,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: w.KeyMod.CtrlCmd | w.KeyCode.Backspace,
								weight: $.KeybindingWeight.CursorMaxPriority,
							},
						});
					}
					run(K, J, W) {
						K.get(S.$km).publicLogCapture("Cancelled Diff"),
							H.get(J)?.cancelGeneration(W, "both");
					}
				}
				var x;
				(function (G) {
					(G[(G.AllowAll = 0)] = "AllowAll"),
						(G[(G.AllowOnlyNonGenerating = 1)] = "AllowOnlyNonGenerating"),
						(G[(G.AllowOnlyGenerating = 2)] = "AllowOnlyGenerating");
				})(x || (x = {}));
				let H = class extends E.$1c {
					static {
						A = this;
					}
					static {
						this.ID = "editor.contrib.inlineDiffController";
					}
					static get(K) {
						return K.getContribution(A.ID);
					}
					findClosestDiffToCursorId(K, J = "notPromptBar") {
						const W = this.c.getPosition();
						let X = null,
							Y = 1 / 0;
						const ie = this.t.nonPersistentStorage.inlineDiffs.filter(
							(ne) =>
								this.n.isEqual(ne.uri, this.c.getModel()?.uri) &&
								(J === "both" ||
									(J === "promptBar") ===
										this.t.nonPersistentStorage.promptBars.some(
											(ee) => ee.diffId === ne.id,
										)),
						);
						for (const ne of ie) {
							const ee =
								this.t.nonPersistentStorage.inprogressAIGenerations.some(
									(te) => te.generationUUID === ne.generationUUID,
								);
							if (
								(K === x.AllowOnlyNonGenerating && ee) ||
								(K === x.AllowOnlyGenerating && !ee)
							)
								continue;
							if (!W) {
								X = ne.id;
								break;
							}
							const _ = Math.min(
								Math.abs(W.lineNumber - ne.currentRange.startLineNumber),
								Math.abs(
									W.lineNumber - ne.currentRange.endLineNumberExclusive - 1,
								),
							);
							_ < Y && ((Y = _), (X = ne.id));
						}
						return X || null;
					}
					rejectSuggestion(K, J) {
						if (!this.c.hasModel()) return;
						const W =
							K?.id ??
							this.findClosestDiffToCursorId(x.AllowOnlyNonGenerating, J);
						W && this.y.rejectDiff(W);
					}
					acceptSuggestion(K, J) {
						if (!this.c.hasModel()) return;
						const W =
							K?.id ??
							this.findClosestDiffToCursorId(x.AllowOnlyNonGenerating, J);
						W && this.y.acceptDiff(W);
					}
					acceptPartialSuggestion(K, J) {
						if (!this.c.hasModel()) return;
						const W =
							K?.diffId ??
							this.findClosestDiffToCursorId(x.AllowOnlyNonGenerating, J);
						if (!W) return;
						const X = K?.line ? new c.$hL(K.line(), 1) : this.c.getPosition();
						this.y.acceptPartialDiff(W, X);
					}
					rejectPartialSuggestion(K, J) {
						if (!this.c.hasModel()) return;
						const W =
							K?.diffId ??
							this.findClosestDiffToCursorId(x.AllowOnlyNonGenerating, J);
						if (!W) return;
						const X = K?.line ? new c.$hL(K.line(), 1) : this.c.getPosition(),
							Y = this.t.nonPersistentStorage.promptBars.find(
								(ne) => ne.diffId === W,
							);
						this.y.rejectPartialDiff(W, X) &&
							Y &&
							(this.z.executeCommand(i.$iW, Y.id),
							this.z.executeCommand(i.$hW, Y.id));
					}
					cancelGeneration(K, J) {
						const W =
							K?.id ?? this.findClosestDiffToCursorId(x.AllowOnlyGenerating, J);
						W && this.y.cancelDiff(W);
					}
					constructor(K, J, W, X, Y, ie, ne, ee, _, te, Q, Z) {
						super(),
							(this.r = J),
							(this.s = W),
							(this.t = X),
							(this.u = ie),
							(this.w = ne),
							(this.y = ee),
							(this.z = te),
							(this.C = Q),
							(this.F = Z),
							(this.h = 1),
							(this.m = new Map()),
							(this.c = K),
							(this.j = this.D(this.t.createScoped(this))),
							(this.n = _.extUri),
							(this.f = n.EditorContextKeys.hasDisplayedDiff.bindTo(
								K.contextKeyService,
							)),
							(this.g = n.EditorContextKeys.hasActivelyGeneratingDiff.bindTo(
								K.contextKeyService,
							)),
							(this.q = !0),
							this.D(
								this.c.onDidChangeModel((se) => {
									if (this.c.hasModel()) {
										for (const re of this.m.keys()) this.removeDiff(re);
										this.m.clear(), this.showDiffs();
									}
								}),
							),
							this.j.onChangeEffect({
								deps: [
									() => this.t.nonPersistentStorage.inlineDiffs,
									() => this.t.nonPersistentStorage.inprogressAIGenerations,
								],
								onChange: () => {
									this.showDiffs();
								},
							}),
							this.showDiffs(),
							this.D(this.c.onDidChangeCursorPosition(() => this.G())),
							this.D(this.c.onDidScrollChange(() => this.G()));
					}
					G() {
						if (!this.c.hasModel()) return;
						const K = this.c.getModel(),
							J = this.c.getPosition();
						if (!J) return;
						const W = this.t.nonPersistentStorage.inlineDiffs
							.filter((Y) => this.n.isEqual(Y.uri, K.uri))
							.flatMap((Y) =>
								Y.changes.map((ie) => ({
									startLineNumber:
										Y.currentRange.startLineNumber +
										ie.addedRange.startLineNumber -
										1,
									endLineNumber:
										Y.currentRange.startLineNumber +
										ie.addedRange.endLineNumberExclusive -
										1,
								})),
							)
							.sort((Y, ie) => Y.startLineNumber - ie.startLineNumber);
						let X = W.findIndex(
							(Y) =>
								J.lineNumber >= Y.startLineNumber &&
								J.lineNumber <= Y.endLineNumber,
						);
						X === -1 &&
							((X = W.findIndex((Y) => Y.startLineNumber > J.lineNumber)),
							X === -1 && (X = W.length)),
							(this.h = Math.min(Math.max(1, X + 1), W.length));
					}
					getCurrentVisibleChange() {
						return this.h;
					}
					getTotalChanges() {
						if (!this.c.hasModel()) return 0;
						const K = this.c.getModel();
						return this.t.nonPersistentStorage.inlineDiffs
							.filter((J) => this.n.isEqual(J.uri, K.uri))
							.reduce((J, W) => J + W.changes.length, 0);
					}
					navigateToChange(K, J) {
						if (!this.c.hasModel()) return;
						const W = this.c.getModel(),
							X = this.t.nonPersistentStorage.inlineDiffs
								.filter((ne) => d.$dh.isEqual(ne.uri, W.uri))
								.flatMap((ne) =>
									ne.changes.map((ee) => ({
										startLineNumber:
											ne.currentRange.startLineNumber +
											ee.addedRange.startLineNumber -
											1,
										endLineNumber:
											ne.currentRange.startLineNumber +
											ee.addedRange.endLineNumberExclusive -
											1,
									})),
								)
								.sort((ne, ee) => ne.startLineNumber - ee.startLineNumber);
						if (X.length === 0) return;
						let Y;
						if (J !== void 0) Y = J - 1;
						else {
							const ne = this.c.getPosition();
							if (!ne) return;
							Y = X.findIndex(
								(ee) =>
									ne.lineNumber >= ee.startLineNumber &&
									ne.lineNumber <= ee.endLineNumber,
							);
						}
						K === "next"
							? (Y = (Y + 1) % X.length)
							: (Y = (Y - 1 + X.length) % X.length);
						const ie = X[Y];
						this.c.setPosition({ lineNumber: ie.startLineNumber, column: 1 }),
							this.c.revealLineInCenter(ie.startLineNumber);
					}
					async showDiffs() {
						if (!this.c.hasModel()) return;
						const K = this.c.getModel().uri,
							J = this.t.nonPersistentStorage.inlineDiffs,
							W = this.t.nonPersistentStorage.inprogressAIGenerations,
							X = J.filter((ne) => this.n.isEqual(ne.uri, K));
						let Y = !1;
						for (const ne of X) {
							const _ =
								W.some((te) => te.generationUUID === ne.generationUUID) && !0;
							(Y = Y || _), this.showDiff((0, t.unwrap)(ne), _);
						}
						for (const ne of this.m.keys())
							X.some((ee) => ee.id === ne) || this.removeDiff(ne);
						Y ? this.g.set(!0) : this.g.set(!1),
							X.filter(
								(ne) =>
									!this.t.nonPersistentStorage.promptBars.some(
										(ee) => ee.diffId === ne.id,
									),
							).length > 0
								? this.f.set(!0)
								: this.f.set(!1);
					}
					getZoneWidgets(K, J) {
						if (!this.c.hasModel()) return [];
						if (K.hideDeletionViewZones) return [];
						const W = [],
							X = [];
						try {
							for (const Y of K.changes) {
								if (Y.removedTextLines.length === 0 || Y.indentation) continue;
								const ie =
									K.currentRange.startLineNumber +
									Y.addedRange.startLineNumber -
									1 -
									1;
								let ne;
								ie === 0
									? (ne = 1)
									: (ne = this.c.getModel().getLineMaxColumn(ie));
								const ee = `${Y.removedLinesOriginalRange.startLineNumber}-${Y.removedLinesOriginalRange.endLineNumberExclusive}`,
									_ = { lineNumber: ie, column: ne };
								let te = !1;
								for (const Z of J)
									Z.id === ee &&
										((te = !0),
										Z.updatePosition(_),
										Z.updateInnerChanges(Y.relativeInnerChanges),
										W.push(Z),
										X.push(ee));
								const Q = [];
								if (K.originalLineTokens)
									for (const Z of Y.removedTextLines) {
										const se = K.originalLineTokens.find((re) => re.text === Z);
										Q.push(se);
									}
								if (!te) {
									const Z = new f.$wdc(
										ee,
										this.c,
										Y.removedTextLines,
										Q,
										Y.relativeInnerChanges,
										_,
										K.isHidden,
										this.s,
										this.C,
										this.F,
									);
									Z.showWidget(), W.push(Z);
								}
							}
						} catch (Y) {
							console.error("Error creating removed lines widgets!", Y);
						}
						for (const Y of J) X.includes(Y.id) || Y.dispose();
						return W;
					}
					setShowPartialAcceptRejectWidgets(K) {
						this.q = K;
					}
					getRemovedNumLinesInRange(K, J) {
						let W = 0;
						for (const X of this.m.get(K)?.zoneWidgets ?? []) {
							const Y = X.position?.lineNumber;
							Y !== void 0 &&
								Y >= J.startLineNumber &&
								Y <= J.endLineNumber &&
								(W += X.getHeightInLines());
						}
						return W;
					}
					showDiff(K, J) {
						try {
							const W = this.m.get(K.id);
							let X = [];
							W && (X = W.zoneWidgets);
							const Y = W?.partialWidgets ?? [],
								ie = this.getZoneWidgets(K, X),
								ne = [];
							if (!J) for (const ee of K.changes) ne.push(ee);
							if (Y.length > ne.length) {
								for (let ee = ne.length; ee < Y.length; ee++) Y[ee].dispose();
								Y.splice(ne.length, Y.length - ne.length);
							}
							if (this.q)
								try {
									for (let ee = 0; ee < ne.length; ee++)
										ee < Y.length
											? Y[ee].setLine(
													K.currentRange.startLineNumber +
														ne[ee].addedRange.startLineNumber -
														1,
												)
											: Y.push(
													this.r.createInstance(
														o.$vdc,
														K.id + "-partial" + (0, m.$9g)(),
														K.id,
														K.currentRange.startLineNumber +
															ne[ee].addedRange.startLineNumber -
															1,
														K.isHidden,
														this.c,
													),
												);
								} catch (ee) {
									console.error("Error creating partial widgets!", ee);
								}
							this.m.set(K.id, { zoneWidgets: ie, partialWidgets: Y });
						} catch (W) {
							console.error(W);
						}
					}
					removeDiff(K) {
						const J = this.m.get(K);
						if (J) {
							for (const W of J.partialWidgets) W.dispose();
							for (const W of J.zoneWidgets) W.dispose();
							this.m.delete(K);
						}
					}
					focusOnCurrentChange(K) {
						if (!this.c.hasModel()) return;
						const J = this.c.getModel(),
							W = this.t.nonPersistentStorage.inlineDiffs
								.filter((Y) => this.n.isEqual(Y.uri, J.uri))
								.flatMap((Y) =>
									Y.changes.map((ie) => ({
										startLineNumber:
											Y.currentRange.startLineNumber +
											ie.addedRange.startLineNumber -
											1,
										endLineNumber:
											Y.currentRange.startLineNumber +
											ie.addedRange.endLineNumberExclusive -
											1,
									})),
								)
								.sort((Y, ie) => Y.startLineNumber - ie.startLineNumber);
						if (W.length === 0) return;
						const X = W[K - 1];
						X &&
							(this.c.setPosition({ lineNumber: X.startLineNumber, column: 1 }),
							this.c.revealLineInCenter(X.startLineNumber));
					}
				};
				(e.$Ddc = H),
					(e.$Ddc =
						H =
						A =
							Ne(
								[
									j(1, y.$Li),
									j(2, g.$nM),
									j(3, v.$0zb),
									j(4, l.$6j),
									j(5, T.$GN),
									j(6, a.$dtb),
									j(7, h.$27b),
									j(8, P.$Vl),
									j(9, b.$ek),
									j(10, I.$iP),
									j(11, s.$gj),
								],
								H,
							)),
					(0, u.$qtb)(H.ID, H, u.EditorContributionInstantiation.Eventually),
					(0, u.$ntb)(F),
					D.$Bdc.registerEditorAction(p.$g8b, (G, K) => {
						(0, u.$ntb)(
							class extends u.$itb {
								constructor() {
									super({
										id: p.$g8b,
										label: "Go to Next Change",
										alias: "Go to Next Change",
										precondition: l.$Kj.function(() => U(K, G)),
										kbOpts: {
											kbExpr: n.EditorContextKeys.editorTextFocus,
											primary: w.KeyMod.Alt | w.KeyCode.KeyJ,
											weight: $.KeybindingWeight.EditorContrib,
										},
									});
								}
								run(W, X) {
									H.get(X)?.navigateToChange("next");
								}
							},
						);
					}),
					D.$Bdc.registerEditorAction(p.$h8b, (G, K) => {
						(0, u.$ntb)(
							class extends u.$itb {
								constructor() {
									super({
										id: p.$h8b,
										label: "Go to Previous Change",
										alias: "Go to Previous Change",
										precondition: l.$Kj.function(() => U(K, G)),
										kbOpts: {
											kbExpr: n.EditorContextKeys.editorTextFocus,
											primary: w.KeyMod.Alt | w.KeyCode.KeyK,
											weight: $.KeybindingWeight.EditorContrib,
										},
									});
								}
								run(W, X) {
									H.get(X)?.navigateToChange("previous");
								}
							},
						);
					});
				function q(G, K, J) {
					const W = G.getModel();
					if (!W) return;
					const X = G.getPosition();
					if (!X) return;
					const Y = K.nonPersistentStorage.inlineDiffs.filter((ee) =>
						d.$dh.isEqual(ee.uri, W.uri),
					);
					if (Y.length === 0) return;
					const ie = [];
					for (const ee of Y)
						for (const _ of ee.changes) {
							const te =
									ee.currentRange.startLineNumber +
									_.addedRange.startLineNumber -
									1,
								Q =
									ee.currentRange.startLineNumber +
									_.addedRange.endLineNumberExclusive -
									1;
							ie.push(new N.$iL(te, 1, Q, W.getLineMaxColumn(Q)));
						}
					ie.sort((ee, _) => ee.startLineNumber - _.startLineNumber);
					let ne;
					if (J === "next")
						(ne = ie.find((ee) => ee.startLineNumber > X.lineNumber)),
							!ne && ie.length > 0 && (ne = ie[0]);
					else {
						for (let ee = ie.length - 1; ee >= 0; ee--)
							if (ie[ee].endLineNumber < X.lineNumber) {
								ne = ie[ee];
								break;
							}
						!ne && ie.length > 0 && (ne = ie[ie.length - 1]);
					}
					ne &&
						(G.setPosition({ lineNumber: ne.startLineNumber, column: 1 }),
						G.revealLineInCenter(ne.startLineNumber));
				}
				function V(G) {
					return G.nonPersistentStorage.inlineDiffs.length > 0;
				}
				D.$Bdc.registerEditorAction(p.$i8b, (G, K) => {
					(0, u.$ntb)(
						class extends u.$itb {
							constructor() {
								super({
									id: p.$i8b,
									label: "Go to Previous Diff File",
									alias: "Go to Previous Diff File",
									precondition: l.$Kj.function(() => V(G)),
									kbOpts: {
										kbExpr: n.EditorContextKeys.editorTextFocus,
										primary: w.KeyMod.Alt | w.KeyCode.KeyH,
										weight: $.KeybindingWeight.EditorContrib + 1e3,
									},
								});
							}
							run(W, X) {
								const Y = G.nonPersistentStorage.inlineDiffs,
									ie = X.getModel()?.uri;
								if (ie) {
									const ne = Y.findIndex((ee) => d.$dh.isEqual(ee.uri, ie));
									if (ne > 0) {
										const ee = Y[ne - 1];
										K.openEditor({ resource: ee.uri });
									} else if (Y.length >= 1) {
										const ee = Y[Y.length - 1];
										K.openEditor({ resource: ee.uri });
									}
								}
							}
						},
					);
				}),
					D.$Bdc.registerEditorAction(p.$j8b, (G, K) => {
						(0, u.$ntb)(
							class extends u.$itb {
								constructor() {
									super({
										id: p.$j8b,
										label: "Go to Next Diff File",
										alias: "Go to Next Diff File",
										precondition: l.$Kj.function(() => V(G)),
										kbOpts: {
											kbExpr: n.EditorContextKeys.editorTextFocus,
											primary: w.KeyMod.Alt | w.KeyCode.KeyL,
											weight: $.KeybindingWeight.EditorContrib + 1e3,
										},
									});
								}
								run(W, X) {
									const Y = G.nonPersistentStorage.inlineDiffs,
										ie = X.getModel()?.uri;
									if (ie) {
										const ne = Y.findIndex((ee) => d.$dh.isEqual(ee.uri, ie));
										if (ne < Y.length - 1) {
											const ee = Y[ne + 1];
											K.openEditor({ resource: ee.uri });
										} else if (Y.length >= 1) {
											const ee = Y[0];
											K.openEditor({ resource: ee.uri });
										}
									}
								}
							},
						);
					});
			},
		)
