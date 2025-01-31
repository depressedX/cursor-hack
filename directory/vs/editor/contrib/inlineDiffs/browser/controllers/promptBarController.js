import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/lexical/lexical-history/api.js';
import '../../../../../base/common/constants.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../browser/editorExtensions.js';
import '../../../../browser/services/codeEditorService.js';
import '../../../../browser/services/inlineDiffService.js';
import '../../../../common/editorContextKeys.js';
import '../../../../common/model.js';
import '../widgets/promptBarViewZone.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../../workbench/services/editor/common/editorService.js';
import '../../../../../workbench/services/aiCmdK/browser/cmdKService.js';
import '../../../../../platform/commands/common/commands.js';
import '../../../../../base/common/resources.js';
import '../../../inlineCompletions/browser/controller/commands.js';
import '../../../../../platform/configuration/common/configuration.js';
define(
			de[2002],
			he([
				1, 0, 922, 58, 3, 46, 65, 383, 71, 64, 2001, 8, 5, 45, 18, 479, 31, 19,
				1928, 10,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*api*/,
 i /*constants*/,
 w /*lifecycle*/,
 E /*editorExtensions*/,
 C /*codeEditorService*/,
 d /*inlineDiffService*/,
 m /*editorContextKeys*/,
 r /*model*/,
 u /*promptBarViewZone*/,
 a /*contextkey*/,
 h /*instantiation*/,
 c /*reactiveStorageService*/,
 n /*editorService*/,
 g /*cmdKService*/,
 p /*commands*/,
 o /*resources*/,
 f /*commands*/,
 b /*configuration*/) {
				"use strict";
				var s;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kec = e.$iec = void 0),
					(e.$jec = I),
					(e.$iec = "editor.action.resizePromptBar");
				class l extends E.$itb {
					constructor() {
						super({
							id: i.$OW,
							label: "Undo Lexical",
							alias: "Undo Lexical",
							precondition: void 0,
						});
					}
					run(k, L, D) {
						T.get(L)?.undoLexical(D.historyState, D.promptBarId);
					}
				}
				(0, E.$ntb)(l);
				class y extends E.$itb {
					constructor() {
						super({
							id: i.$PW,
							label: "Redo Lexical",
							alias: "Redo Lexical",
							precondition: void 0,
						});
					}
					run(k, L, D) {
						T.get(L)?.redoLexical(D.historyState, D.promptBarId);
					}
				}
				(0, E.$ntb)(y);
				class $ extends E.$itb {
					constructor() {
						super({
							id: i.$QW,
							label: "Render View Zone",
							alias: "Render View Zone",
							precondition: void 0,
						});
					}
					run(k, L, D) {
						T.get(L)?.render();
					}
				}
				(0, E.$ntb)($);
				class v extends E.$itb {
					constructor() {
						super({
							id: e.$iec,
							label: "Resize All Heights",
							alias: "Resize All Heights",
							precondition: void 0,
						});
					}
					run(k, L) {
						T.get(L)?.resizeAllHeights();
					}
				}
				(0, E.$ntb)(v);
				function S(P) {
					const k = P.bigContainer;
					return Math.max(62, (k?.scrollHeight ?? 0) + 6);
				}
				function I(P, k) {
					return P.endLineNumberExclusive <= k.startLineNumber
						? d.RangeWhereIs.After
						: P.startLineNumber > k.endLineNumber ||
								(P.startLineNumber === k.endLineNumber &&
									k.endColumn <= 1 &&
									k.startLineNumber !== k.endLineNumber)
							? d.RangeWhereIs.Before
							: d.RangeWhereIs.Overlap;
				}
				let T = class extends w.$1c {
					static {
						s = this;
					}
					static {
						this.ID = "editor.contrib.promptBarController";
					}
					static get(k) {
						return k.getContribution(s.ID);
					}
					constructor(k, L, D, M, N, A, R, O, B) {
						super(),
							(this.j = L),
							(this.m = D),
							(this.n = M),
							(this.q = N),
							(this.s = A),
							(this.t = R),
							(this.u = O),
							(this.w = B),
							(this.f = {}),
							(this.g = []),
							(this.b = k),
							(this.a = this.D(this.m.createScoped(this))),
							this.D(
								this.w.onDidChangeConfiguration((U) => {
									U.affectsConfiguration(i.$sW) && this.render(this.b);
								}),
							),
							(this.h = m.EditorContextKeys.editorHasPromptBar.bindTo(this.q)),
							this.a.onChangeEffect({
								deps: [
									() => this.m.nonPersistentStorage.promptBars,
									() => this.m.nonPersistentStorage.inlineDiffs,
									() =>
										this.m.nonPersistentStorage.promptBars.map((U) => U.diffId),
									() =>
										this.m.nonPersistentStorage.inlineDiffs.map(
											(U) => U.currentRange,
										),
								],
								onChange: ({ deps: U, prevDeps: z, prevReturnValue: F }) => {
									const x = [],
										H = U[0];
									let q = !1;
									if (H)
										for (const V of H) {
											let G;
											z && z[0] && (G = z[0].find((X) => X.id === V.id)),
												(!G || V !== G) && (q = !0);
											let K = F?.find((X) => X.id === V.id),
												J = K?.r;
											if (
												o.$dh.isEqual(this.b.getModel()?.uri, V.uri) &&
												V.diffId === void 0 &&
												F &&
												J &&
												(z === void 0 || G !== void 0) &&
												K?.id === V.id
											) {
												const X = this.b
													.getModel()
													?.deltaDecorations(
														[V.currentRangeDecorationId],
														[
															{
																range: {
																	startLineNumber: J.startLineNumber,
																	endLineNumber: J.endLineNumberExclusive - 1,
																	startColumn: 1,
																	endColumn:
																		this.b
																			.getModel()
																			?.getLineMaxColumn(
																				J.endLineNumberExclusive - 1,
																			) ?? 1,
																},
																options: {
																	description: "promptBar-tracking-range",
																	isWholeLine: !0,
																},
															},
														],
													)[0];
												X !== void 0 &&
													this.m.setNonPersistentStorage(
														"promptBars",
														(Y) => Y.id === V.id,
														"currentRangeDecorationId",
														X,
													),
													(J = null);
											}
											const W = this.m.nonPersistentStorage.inlineDiffs.find(
												(X) => X.id === V.diffId,
											);
											W
												? x.push({ r: { ...W.currentRange }, id: V.id })
												: V.id === K?.id
													? x.push({ r: J, id: V.id })
													: x.push({ r: null, id: V.id });
										}
									return this.render(), x;
								},
							}),
							this.D(
								this.b.onDidChangeModel(() => {
									this.render();
								}),
							),
							this.D(
								this.b.onDidScrollChange(() => {
									this.updateTops();
								}),
							),
							this.D(
								this.s.onCodeEditorAdd((U) => {
									this.render(U);
								}),
							),
							this.D(
								this.s.onCodeEditorRemove(() => {
									this.render();
								}),
							),
							this.D(
								this.b.onDidChangeModelContent((U) => {
									this.render(), this.resizeAllHeights();
								}),
							);
					}
					updateTops() {
						const k = this.b.getModel();
						if (!k) return;
						const L = this.b.getScrollTop();
						let D = !1;
						for (const M of this.m.nonPersistentStorage.promptBars)
							if (M.editorId === this.b.getId() && M.visible !== !1) {
								const N = this.t.getPromptBarCurrentRange(M, k),
									A = N?.startLineNumber ?? 1,
									R = N?.endLineNumberExclusive ?? 2,
									O = this.f[M.id];
								if (O === void 0) continue;
								const B = O.getDomNode();
								if (B === void 0) continue;
								const U = Math.min(120, S(O) ?? 0),
									z = S(O) ?? 0,
									F = parseInt(B.style.top);
								if (isNaN(F)) continue;
								const x = this.b.getTopForLineNumber(R);
								if (L > F + z - U && L < x) {
									(D = !0), this.releaseViewZoneStackingContext();
									const H = Math.min(L - (z - U), x - z);
									this.m.setNonPersistentStorage(
										"promptBars",
										(q) => q.id === M.id,
										"top",
										H - F,
									);
								} else
									this.m.setNonPersistentStorage(
										"promptBars",
										(H) => H.id === M.id,
										"top",
										void 0,
									);
							}
						D || this.reenableStackingContext();
					}
					releaseViewZoneStackingContext() {
						const k = Object.keys(this.f)[0],
							D = this.f[k]?.getDomNode()?.parentElement?.parentElement;
						D &&
							D.classList.contains("lines-content") &&
							D.style.contain === "strict" &&
							D.style.transform === "translate3d(0px, 0px, 0px)" &&
							((D.style.contain = "none"), (D.style.transform = "none"));
					}
					reenableStackingContext() {
						const k = Object.keys(this.f)[0],
							D = this.f[k]?.getDomNode()?.parentElement?.parentElement;
						D &&
							D.classList.contains("lines-content") &&
							D.style.contain === "none" &&
							D.style.transform === "none" &&
							((D.style.contain = "strict"),
							(D.style.transform = "translate3d(0px, 0px, 0px)"));
					}
					undoLexical(k, L) {
						const D = this.f[L];
						D?.editor && (0, t.undo)(D.editor, k);
					}
					redoLexical(k, L) {
						const D = this.f[L];
						D.editor && (0, t.redo)(D.editor, k);
					}
					resizeAllHeights() {
						this.b.changeViewZones((k) => {
							for (const L in this.f) {
								const D = this.f[L].viewZoneId;
								D !== void 0 && k.layoutZone(D);
							}
						});
					}
					render(k) {
						const L = this.w.getValue(i.$sW),
							D = this.b;
						if (
							this.b === void 0 ||
							(k !== void 0 && k.getId() !== this.b.getId())
						)
							return;
						let M = !1;
						const N = this.m.nonPersistentStorage.promptBars;
						if (N) {
							for (const A of N)
								if (
									A.editorId === D.getId() &&
									A.uri.toString() === D.getModel()?.uri.toString()
								)
									M = !0;
								else if (A.editorId) {
									const R = this.s.listCodeEditors();
									if (!R.map((O) => O.getId()).includes(A.editorId)) {
										const O =
											R.find((B) =>
												o.$dh.isEqual(B.getModel()?.uri, A.uri),
											)?.getId() ?? D.getId();
										this.m.setNonPersistentStorage(
											"promptBars",
											(B) => B.id === A.id,
											"editorId",
											O,
										),
											(M = !0);
									}
								}
						}
						this.h.set(M),
							this.b.hasModel() &&
								this.b.changeViewZones((A) => {
									const R = this.b.getWhitespaces(),
										O = new Set(),
										B = [];
									for (const U of this.m.nonPersistentStorage.promptBars) {
										if (U === void 0) continue;
										const z =
											U.uri.toString() === this.b.getModel()?.uri.toString();
										if (z && U.diffId === void 0) {
											const F = this.t.getPromptBarCurrentRange(
												U,
												D.getModel(),
											);
											B.push({
												range: {
													startLineNumber: F?.startLineNumber ?? 1,
													startColumn: 1,
													endLineNumber: (F?.endLineNumberExclusive ?? 2) - 1,
													endColumn: 1,
												},
												options: {
													description: "inline-diff-pending",
													className:
														U.isHeadless === !0
															? "inline-diff-pending-headless"
															: L
																? "inline-diff-pending"
																: "inline-diff-pending-unthemed",
													isWholeLine: !0,
												},
											});
										}
										if (U.visible !== !1 && z) {
											O.add(U.id);
											const F = this.f[U.id]?.viewZoneId;
											if (!R.some((H) => H.id === F)) {
												const H = U.editorId === void 0,
													q = U.editorId !== this.b.getId(),
													V = this.s
														.listCodeEditors()
														.find(
															(te) =>
																te !== void 0 && te.getId() === U.editorId,
														),
													G = o.$dh.isEqual(V?.getModel()?.uri, U.uri);
												if (H)
													this.m.setNonPersistentStorage(
														"promptBars",
														(te) => te.id === U.id,
														"editorId",
														this.b.getId(),
													),
														this.h.set(!0);
												else if (q) continue;
												let K;
												try {
													K = this.j.createInstance(u.$Tdc, U.id);
												} catch (te) {
													console.info("error", te);
													continue;
												}
												this.D(K), this.u.executeCommand(f.$gec.ID);
												const J = this.m,
													W = this.b.getModel(),
													X =
														this.t.getPromptBarCurrentRange(U, W)
															?.startLineNumber ?? 1,
													Y = K.getDomNode(),
													ie = this.t,
													ne = U.id,
													ee = {
														get afterLineNumber() {
															const te = J.nonPersistentStorage.promptBars.find(
																(Q) => Q.id === ne,
															);
															return (
																(ie.getPromptBarCurrentRange(te, W)
																	?.startLineNumber ?? X) - 1
															);
														},
														get heightInPx() {
															return S(K);
														},
														domNode: Y,
														ordinal: i.$OX,
														showInHiddenAreas: !0,
														showEvenWhenNotInViewport: !0,
														afterColumnAffinity: r.PositionAffinity.Right,
													};
												this.f[U.id] = K;
												const _ = A.addZone(ee);
												K.viewZoneId = _;
											}
										}
									}
									this.g = this.b.deltaDecorations(this.g, B);
									for (const U in this.f) {
										const z = this.f[U].viewZoneId;
										z !== void 0 &&
											(O.has(U) ||
												(Object.keys(this.f).length === 1 &&
													this.reenableStackingContext(),
												A.removeZone(z),
												this.f[U].dispose(),
												delete this.f[U],
												this.m.nonPersistentStorage.promptBars.find(
													(x) => x.id === U,
												)?.uri.scheme === "vscode-notebook-cell" &&
													this.m.setNonPersistentStorage(
														"promptBars",
														(x) => x.id === U,
														"editorId",
														void 0,
													),
												this.n.activeEditorPane?.focus()));
									}
								});
					}
				};
				(e.$kec = T),
					(e.$kec =
						T =
						s =
							Ne(
								[
									j(1, h.$Li),
									j(2, c.$0zb),
									j(3, n.$IY),
									j(4, a.$6j),
									j(5, C.$dtb),
									j(6, g.$J7b),
									j(7, p.$ek),
									j(8, b.$gj),
								],
								T,
							)),
					(0, E.$qtb)(T.ID, T, E.EditorContributionInstantiation.Eventually);
			},
		)
