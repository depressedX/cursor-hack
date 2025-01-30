import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/types.js';
import '../../../browser/stableEditorScroll.js';
import '../../../browser/editorBrowser.js';
import '../../../browser/editorExtensions.js';
import '../../../common/config/editorOptions.js';
import '../../../common/editorCommon.js';
import '../../../common/editorContextKeys.js';
import '../../../common/languages.js';
import '../../../common/languages/languageConfigurationRegistry.js';
import './foldingModel.js';
import './hiddenRangeModel.js';
import './indentRangeProvider.js';
import '../../../../nls.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import './foldingDecorations.js';
import './foldingRanges.js';
import './syntaxRangeProvider.js';
import '../../../../platform/notification/common/notification.js';
import '../../../common/services/languageFeatureDebounce.js';
import '../../../../base/common/stopwatch.js';
import '../../../common/services/languageFeatures.js';
import '../../../../base/common/event.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../base/common/uri.js';
import '../../../common/services/model.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../css!vs/editor/contrib/folding/browser/folding.js';
define(
			de[350],
			he([
				1, 0, 15, 33, 29, 27, 3, 37, 28, 491, 56, 46, 38, 98, 71, 74, 152, 1551,
				2584, 752, 4, 8, 43, 1219, 659, 660, 40, 391, 162, 69, 6, 31, 9, 67, 10,
				45, 2297,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*async*/,
				i /*cancellation*/,
				w /*errors*/,
				E /*keyCodes*/,
				C /*lifecycle*/,
				d /*strings*/,
				m /*types*/,
				r /*stableEditorScroll*/,
				u /*editorBrowser*/,
				a /*editorExtensions*/,
				h /*editorOptions*/,
				c /*editorCommon*/,
				n /*editorContextKeys*/,
				g /*languages*/,
				p /*languageConfigurationRegistry*/,
				o /*foldingModel*/,
				f /*hiddenRangeModel*/,
				b /*indentRangeProvider*/,
				s /*nls*/,
				l /*contextkey*/,
				y /*keybindingsRegistry*/,
				$ /*foldingDecorations*/,
				v /*foldingRanges*/,
				S /*syntaxRangeProvider*/,
				I /*notification*/,
				T /*languageFeatureDebounce*/,
				P /*stopwatch*/,
				k /*languageFeatures*/,
				L /*event*/,
				D /*commands*/,
				M /*uri*/,
				N /*model*/,
				A /*configuration*/,
				R /*reactiveStorageService*/,
) {
				"use strict";
				var O;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1Nb = e.$ZNb = void 0),
					(e.$2Nb = x),
					(m = mt(m)),
					(s = mt(s));
				const B = new l.$5j("foldingEnabled", !1);
				let U = class extends C.$1c {
					static {
						O = this;
					}
					static {
						this.ID = "editor.contrib.folding";
					}
					static get(pe) {
						return pe.getContribution(O.ID);
					}
					static getFoldingRangeProviders(pe, $e) {
						const ye = pe.foldingRangeProvider.ordered($e);
						return O.c?.(ye, $e) ?? ye;
					}
					static setFoldingRangeProviderSelector(pe) {
						return (
							(O.c = pe),
							{
								dispose: () => {
									O.c = void 0;
								},
							}
						);
					}
					constructor(pe, $e, ye, ue, fe, me, ve) {
						super(),
							(this.M = $e),
							(this.N = ye),
							(this.O = me),
							(this.P = ve),
							(this.J = this.D(new C.$Zc())),
							(this.f = pe),
							(this._foldingLimitReporter = new z(pe));
						const ge = this.f.getOptions();
						(this.g = ge.get(h.EditorOption.folding)),
							(this.h =
								ge.get(h.EditorOption.foldingStrategy) !== "indentation"),
							(this.j = ge.get(h.EditorOption.unfoldOnClickAfterEndOfLine)),
							(this.m = !1),
							(this.q = !1),
							(this.n = ge.get(h.EditorOption.foldingImportsByDefault)),
							(this.G = fe.for(ve.foldingRangeProvider, "Folding", {
								min: 200,
							})),
							(this.u = null),
							(this.w = null),
							(this.y = null),
							(this.z = null),
							(this.C = null),
							(this.F = null),
							(this.I = null),
							(this.L = null),
							(this.t = new $.$WNb(pe, me)),
							(this.t.showFoldingControls = ge.get(
								h.EditorOption.showFoldingControls,
							)),
							(this.t.showFoldingHighlights = ge.get(
								h.EditorOption.foldingHighlight,
							)),
							(this.H = B.bindTo(this.M)),
							this.H.set(this.g),
							this.D(this.f.onDidChangeModel(() => this.Q())),
							this.D(
								this.f.onDidChangeConfiguration((be) => {
									if (
										(be.hasChanged(h.EditorOption.folding) &&
											((this.g = this.f
												.getOptions()
												.get(h.EditorOption.folding)),
											this.H.set(this.g),
											this.Q()),
										be.hasChanged(h.EditorOption.foldingMaximumRegions) &&
											this.Q(),
										be.hasChanged(h.EditorOption.showFoldingControls) ||
											be.hasChanged(h.EditorOption.foldingHighlight))
									) {
										const Ce = this.f.getOptions();
										(this.t.showFoldingControls = Ce.get(
											h.EditorOption.showFoldingControls,
										)),
											(this.t.showFoldingHighlights = Ce.get(
												h.EditorOption.foldingHighlight,
											)),
											this.triggerFoldingModelChanged();
									}
									be.hasChanged(h.EditorOption.foldingStrategy) &&
										((this.h =
											this.f
												.getOptions()
												.get(h.EditorOption.foldingStrategy) !== "indentation"),
										this.R()),
										be.hasChanged(h.EditorOption.unfoldOnClickAfterEndOfLine) &&
											(this.j = this.f
												.getOptions()
												.get(h.EditorOption.unfoldOnClickAfterEndOfLine)),
										be.hasChanged(h.EditorOption.foldingImportsByDefault) &&
											(this.n = this.f
												.getOptions()
												.get(h.EditorOption.foldingImportsByDefault));
								}),
							),
							this.Q();
					}
					get limitReporter() {
						return this._foldingLimitReporter;
					}
					saveViewState() {
						const pe = this.f.getModel();
						if (!pe || !this.g || pe.isTooLargeForTokenization()) return {};
						if (this.u) {
							const $e = this.u.getMemento(),
								ye = this.y ? this.y.id : void 0;
							return {
								collapsedRegions: $e,
								lineCount: pe.getLineCount(),
								provider: ye,
								foldedImports: this.q,
							};
						}
					}
					restoreViewState(pe) {
						const $e = this.f.getModel();
						if (
							!(!$e || !this.g || $e.isTooLargeForTokenization() || !this.w) &&
							pe &&
							((this.q = !!pe.foldedImports),
							pe.collapsedRegions && pe.collapsedRegions.length > 0 && this.u)
						) {
							this.m = !0;
							try {
								this.u.applyMemento(pe.collapsedRegions);
							} finally {
								this.m = !1;
							}
						}
					}
					Q() {
						this.J.clear();
						const pe = this.f.getModel();
						!this.g ||
							!pe ||
							pe.isTooLargeForTokenization() ||
							((this.q = !1),
							(this.u = new o.$CNb(pe, this.t)),
							this.J.add(this.u),
							(this.w = new f.$ONb(this.u)),
							this.J.add(this.w),
							this.J.add(this.w.onDidChange(($e) => this.W($e))),
							(this.F = new t.$Jh(this.G.get(pe))),
							(this.I = new t.$Yh(() => this.Y(), 200)),
							this.J.add(this.I),
							this.J.add(
								this.P.foldingRangeProvider.onDidChange(() => this.R()),
							),
							this.J.add(
								this.f.onDidChangeModelLanguageConfiguration(() => this.R()),
							),
							this.J.add(this.f.onDidChangeModelContent(($e) => this.U($e))),
							this.J.add(this.f.onDidChangeCursorPosition(() => this.X())),
							this.J.add(this.f.onMouseDown(($e) => this.Z($e))),
							this.J.add(this.f.onMouseUp(($e) => this.$($e))),
							this.J.add({
								dispose: () => {
									this.z && (this.z.cancel(), (this.z = null)),
										this.F?.cancel(),
										(this.F = null),
										(this.u = null),
										(this.C = null),
										(this.w = null),
										(this.I = null),
										this.y?.dispose(),
										(this.y = null);
								},
							}),
							this.triggerFoldingModelChanged());
					}
					R() {
						this.y?.dispose(),
							(this.y = null),
							this.triggerFoldingModelChanged();
					}
					S(pe) {
						if (this.y) return this.y;
						const $e = new b.$PNb(pe, this.N, this._foldingLimitReporter);
						if (((this.y = $e), this.h && this.u)) {
							const ye = O.getFoldingRangeProviders(this.P, pe);
							ye.length > 0 &&
								(this.y = new S.$XNb(
									pe,
									ye,
									() => this.triggerFoldingModelChanged(),
									this._foldingLimitReporter,
									$e,
								));
						}
						return this.y;
					}
					getFoldingModel() {
						return this.C;
					}
					U(pe) {
						this.w?.notifyChangeModelContent(pe),
							this.triggerFoldingModelChanged();
					}
					triggerFoldingModelChanged() {
						this.F &&
							(this.z && (this.z.cancel(), (this.z = null)),
							(this.C = this.F.trigger(() => {
								const pe = this.u;
								if (!pe) return null;
								const $e = new P.$le(),
									ye = this.S(pe.textModel),
									ue = (this.z = (0, t.$zh)((fe) => ye.compute(fe)));
								return ue.then((fe) => {
									if (fe && ue === this.z) {
										let me;
										if (this.n && !this.q) {
											const be = fe.setCollapsedAllOfType(
												g.$jM.Imports.value,
												!0,
											);
											be && ((me = r.$uwb.capture(this.f)), (this.q = be));
										}
										const ve = this.f.getSelections();
										pe.update(fe, x(ve)), me?.restore(this.f);
										const ge = this.G.update(pe.textModel, $e.elapsed());
										this.F && (this.F.defaultDelay = ge);
									}
									return pe;
								});
							}).then(void 0, (pe) => ((0, w.$4)(pe), null))));
					}
					W(pe) {
						if (this.w && pe.length && !this.m) {
							const $e = this.f.getSelections();
							$e && this.w.adjustSelections($e) && this.f.setSelections($e);
						}
						this.f.setHiddenAreas(pe, this);
					}
					X() {
						this.w && this.w.hasRanges() && this.I.schedule();
					}
					Y() {
						const pe = this.getFoldingModel();
						pe &&
							pe
								.then(($e) => {
									if ($e) {
										const ye = this.f.getSelections();
										if (ye && ye.length > 0) {
											const ue = [];
											for (const fe of ye) {
												const me = fe.selectionStartLineNumber;
												this.w &&
													this.w.isHidden(me) &&
													ue.push(
														...$e.getAllRegionsAtLine(
															me,
															(ve) => ve.isCollapsed && me > ve.startLineNumber,
														),
													);
											}
											ue.length &&
												($e.toggleCollapseState(ue),
												this.reveal(ye[0].getPosition()));
										}
									}
								})
								.then(void 0, w.$4);
					}
					Z(pe) {
						if (
							((this.L = null),
							!this.w ||
								!pe.target ||
								!pe.target.range ||
								(!pe.event.leftButton && !pe.event.middleButton))
						)
							return;
						const $e = pe.target.range;
						let ye = !1;
						switch (pe.target.type) {
							case u.MouseTargetType.GUTTER_LINE_DECORATIONS: {
								const ue = pe.target.detail,
									fe = pe.target.element.offsetLeft;
								if (ue.offsetX - fe < 4) return;
								ye = !0;
								break;
							}
							case u.MouseTargetType.CONTENT_EMPTY: {
								if (
									this.j &&
									this.w.hasRanges() &&
									!pe.target.detail.isAfterLines
								)
									break;
								return;
							}
							case u.MouseTargetType.CONTENT_TEXT: {
								if (this.w.hasRanges()) {
									const ue = this.f.getModel();
									if (
										ue &&
										$e.startColumn === ue.getLineMaxColumn($e.startLineNumber)
									)
										break;
								}
								return;
							}
							default:
								return;
						}
						this.L = { lineNumber: $e.startLineNumber, iconClicked: ye };
					}
					$(pe) {
						const $e = this.u;
						if (!$e || !this.L || !pe.target) return;
						const ye = this.L.lineNumber,
							ue = this.L.iconClicked,
							fe = pe.target.range;
						if (!fe || fe.startLineNumber !== ye) return;
						if (ue) {
							if (pe.target.type !== u.MouseTargetType.GUTTER_LINE_DECORATIONS)
								return;
						} else {
							const ve = this.f.getModel();
							if (!ve || fe.startColumn !== ve.getLineMaxColumn(ye)) return;
						}
						const me = $e.getRegionAtLine(ye);
						if (me && me.startLineNumber === ye) {
							const ve = me.isCollapsed;
							if (ue || ve) {
								const ge = pe.event.altKey;
								let be = [];
								if (ge) {
									const Ce = (Fe) => !Fe.containedBy(me) && !me.containedBy(Fe),
										Le = $e.getRegionsInside(null, Ce);
									for (const Fe of Le) Fe.isCollapsed && be.push(Fe);
									be.length === 0 && (be = Le);
								} else {
									const Ce = pe.event.middleButton || pe.event.shiftKey;
									if (Ce)
										for (const Le of $e.getRegionsInside(me))
											Le.isCollapsed === ve && be.push(Le);
									(ve || !Ce || be.length === 0) && be.push(me);
								}
								$e.toggleCollapseState(be),
									this.reveal({ lineNumber: ye, column: 1 });
							}
						}
					}
					reveal(pe) {
						this.f.revealPositionInCenterIfOutsideViewport(
							pe,
							c.ScrollType.Smooth,
						);
					}
				};
				(e.$ZNb = U),
					(e.$ZNb =
						U =
						O =
							Ne(
								[
									j(1, l.$6j),
									j(2, p.$aN),
									j(3, I.$4N),
									j(4, T.$PBb),
									j(5, R.$0zb),
									j(6, k.$k3),
								],
								U,
							));
				class z {
					constructor(pe) {
						(this.c = pe),
							(this.d = new L.$re()),
							(this.onDidChange = this.d.event),
							(this.f = 0),
							(this.g = !1);
					}
					get limit() {
						return this.c
							.getOptions()
							.get(h.EditorOption.foldingMaximumRegions);
					}
					get computed() {
						return this.f;
					}
					get limited() {
						return this.g;
					}
					update(pe, $e) {
						(pe !== this.f || $e !== this.g) &&
							((this.f = pe), (this.g = $e), this.d.fire());
					}
				}
				e.$1Nb = z;
				class F extends a.$itb {
					runEditorCommand(pe, $e, ye) {
						const ue = pe.get(p.$aN),
							fe = U.get($e);
						if (!fe) return;
						const me = fe.getFoldingModel();
						if (me)
							return (
								this.w(pe, $e),
								me.then((ve) => {
									if (ve) {
										this.invoke(fe, ve, $e, ye, ue);
										const ge = $e.getSelection();
										ge && fe.reveal(ge.getStartPosition());
									}
								})
							);
					}
					d(pe) {
						const $e = pe.getSelections();
						return $e ? $e.map((ye) => ye.startLineNumber) : [];
					}
					h(pe, $e) {
						return pe && pe.selectionLines
							? pe.selectionLines.map((ye) => ye + 1)
							: this.d($e);
					}
					run(pe, $e) {}
				}
				function x(ae) {
					return !ae || ae.length === 0
						? { startsInside: () => !1 }
						: {
								startsInside(pe, $e) {
									for (const ye of ae) {
										const ue = ye.startLineNumber;
										if (ue >= pe && ue <= $e) return !0;
									}
									return !1;
								},
							};
				}
				function H(ae) {
					if (!m.$sg(ae)) {
						if (!m.$ng(ae)) return !1;
						const pe = ae;
						if (
							(!m.$sg(pe.levels) && !m.$pg(pe.levels)) ||
							(!m.$sg(pe.direction) && !m.$lg(pe.direction)) ||
							(!m.$sg(pe.selectionLines) &&
								(!Array.isArray(pe.selectionLines) ||
									!pe.selectionLines.every(m.$pg)))
						)
							return !1;
					}
					return !0;
				}
				class q extends F {
					constructor() {
						super({
							id: "editor.unfold",
							label: s.localize(1047, null),
							alias: "Unfold",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary:
									E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.BracketRight,
								mac: {
									primary:
										E.KeyMod.CtrlCmd | E.KeyMod.Alt | E.KeyCode.BracketRight,
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
							metadata: {
								description: "Unfold the content in the editor",
								args: [
									{
										name: "Unfold editor argument",
										description: `Property-value pairs that can be passed through this argument:
						* 'levels': Number of levels to unfold. If not set, defaults to 1.
						* 'direction': If 'up', unfold given number of levels up otherwise unfolds down.
						* 'selectionLines': Array of the start lines (0-based) of the editor selections to apply the unfold action to. If not set, the active selection(s) will be used.
						`,
										constraint: H,
										schema: {
											type: "object",
											properties: {
												levels: { type: "number", default: 1 },
												direction: {
													type: "string",
													enum: ["up", "down"],
													default: "down",
												},
												selectionLines: {
													type: "array",
													items: { type: "number" },
												},
											},
										},
									},
								],
							},
						});
					}
					invoke(pe, $e, ye, ue) {
						const fe = (ue && ue.levels) || 1,
							me = this.h(ue, ye);
						ue && ue.direction === "up"
							? (0, o.$FNb)($e, !1, fe, me)
							: (0, o.$ENb)($e, !1, fe, me);
					}
				}
				class V extends F {
					constructor() {
						super({
							id: "editor.unfoldRecursively",
							label: s.localize(1048, null),
							alias: "Unfold Recursively",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(
									E.$ps,
									E.KeyMod.CtrlCmd | E.KeyCode.BracketRight,
								),
								mac: {
									primary: (0, E.$os)(
										E.$qs,
										E.KeyMod.CtrlCmd | E.KeyCode.BracketRight,
									),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye, ue) {
						(0, o.$ENb)($e, !1, Number.MAX_VALUE, this.d(ye));
					}
				}
				class G extends F {
					constructor() {
						super({
							id: "editor.fold",
							label: s.localize(1049, null),
							alias: "Fold",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary:
									E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.BracketLeft,
								mac: {
									primary:
										E.KeyMod.CtrlCmd | E.KeyMod.Alt | E.KeyCode.BracketLeft,
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
							metadata: {
								description: "Fold the content in the editor",
								args: [
									{
										name: "Fold editor argument",
										description: `Property-value pairs that can be passed through this argument:
							* 'levels': Number of levels to fold.
							* 'direction': If 'up', folds given number of levels up otherwise folds down.
							* 'selectionLines': Array of the start lines (0-based) of the editor selections to apply the fold action to. If not set, the active selection(s) will be used.
							If no levels or direction is set, folds the region at the locations or if already collapsed, the first uncollapsed parent instead.
						`,
										constraint: H,
										schema: {
											type: "object",
											properties: {
												levels: { type: "number" },
												direction: { type: "string", enum: ["up", "down"] },
												selectionLines: {
													type: "array",
													items: { type: "number" },
												},
											},
										},
									},
								],
							},
						});
					}
					invoke(pe, $e, ye, ue) {
						const fe = this.h(ue, ye),
							me = ue && ue.levels,
							ve = ue && ue.direction;
						typeof me != "number" && typeof ve != "string"
							? (0, o.$GNb)($e, !0, fe)
							: ve === "up"
								? (0, o.$FNb)($e, !0, me || 1, fe)
								: (0, o.$ENb)($e, !0, me || 1, fe);
					}
				}
				class K extends F {
					constructor() {
						super({
							id: "editor.toggleFold",
							label: s.localize(1050, null),
							alias: "Toggle Fold",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(E.$ps, E.KeyMod.CtrlCmd | E.KeyCode.KeyL),
								mac: {
									primary: (0, E.$os)(E.$qs, E.KeyMod.CtrlCmd | E.KeyCode.KeyL),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye) {
						const ue = this.d(ye);
						(0, o.$DNb)($e, 1, ue);
					}
				}
				class J extends F {
					constructor() {
						super({
							id: "editor.foldRecursively",
							label: s.localize(1051, null),
							alias: "Fold Recursively",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(
									E.$ps,
									E.KeyMod.CtrlCmd | E.KeyCode.BracketLeft,
								),
								mac: {
									primary: (0, E.$os)(
										E.$qs,
										E.KeyMod.CtrlCmd | E.KeyCode.BracketLeft,
									),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye) {
						const ue = this.d(ye);
						(0, o.$ENb)($e, !0, Number.MAX_VALUE, ue);
					}
				}
				class W extends F {
					constructor() {
						super({
							id: "editor.toggleFoldRecursively",
							label: s.localize(1052, null),
							alias: "Toggle Fold Recursively",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(
									E.$ps,
									E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyL,
								),
								mac: {
									primary: (0, E.$os)(
										E.$qs,
										E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyL,
									),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye) {
						const ue = this.d(ye);
						(0, o.$DNb)($e, Number.MAX_VALUE, ue);
					}
				}
				class X extends F {
					constructor() {
						super({
							id: "editor.foldAllBlockComments",
							label: s.localize(1053, null),
							alias: "Fold All Block Comments",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(E.$ps, E.KeyMod.CtrlCmd | E.KeyCode.Slash),
								mac: {
									primary: (0, E.$os)(
										E.$qs,
										E.KeyMod.CtrlCmd | E.KeyCode.Slash,
									),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye, ue, fe) {
						if ($e.regions.hasTypes()) (0, o.$KNb)($e, g.$jM.Comment.value, !0);
						else {
							const me = ye.getModel();
							if (!me) return;
							const ve = fe.getLanguageConfiguration(
								me.getLanguageId(),
							).comments;
							if (ve && ve.blockCommentStartToken) {
								const ge = new RegExp(
									"^\\s*" + (0, d.$of)(ve.blockCommentStartToken),
								);
								(0, o.$JNb)($e, ge, !0);
							}
						}
					}
				}
				class Y extends F {
					constructor() {
						super({
							id: "editor.foldAllMarkerRegions",
							label: s.localize(1054, null),
							alias: "Fold All Regions",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(E.$ps, E.KeyMod.CtrlCmd | E.KeyCode.Digit8),
								mac: {
									primary: (0, E.$os)(
										E.$qs,
										E.KeyMod.CtrlCmd | E.KeyCode.Digit8,
									),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye, ue, fe) {
						if ($e.regions.hasTypes()) (0, o.$KNb)($e, g.$jM.Region.value, !0);
						else {
							const me = ye.getModel();
							if (!me) return;
							const ve = fe.getLanguageConfiguration(
								me.getLanguageId(),
							).foldingRules;
							if (ve && ve.markers && ve.markers.start) {
								const ge = new RegExp(ve.markers.start);
								(0, o.$JNb)($e, ge, !0);
							}
						}
					}
				}
				class ie extends F {
					constructor() {
						super({
							id: "editor.unfoldAllMarkerRegions",
							label: s.localize(1055, null),
							alias: "Unfold All Regions",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(E.$ps, E.KeyMod.CtrlCmd | E.KeyCode.Digit9),
								mac: {
									primary: (0, E.$os)(
										E.$qs,
										E.KeyMod.CtrlCmd | E.KeyCode.Digit9,
									),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye, ue, fe) {
						if ($e.regions.hasTypes()) (0, o.$KNb)($e, g.$jM.Region.value, !1);
						else {
							const me = ye.getModel();
							if (!me) return;
							const ve = fe.getLanguageConfiguration(
								me.getLanguageId(),
							).foldingRules;
							if (ve && ve.markers && ve.markers.start) {
								const ge = new RegExp(ve.markers.start);
								(0, o.$JNb)($e, ge, !1);
							}
						}
					}
				}
				class ne extends F {
					constructor() {
						super({
							id: "editor.foldAllExcept",
							label: s.localize(1056, null),
							alias: "Fold All Except Selected",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(E.$ps, E.KeyMod.CtrlCmd | E.KeyCode.Minus),
								mac: {
									primary: (0, E.$os)(
										E.$qs,
										E.KeyMod.CtrlCmd | E.KeyCode.Minus,
									),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye) {
						const ue = this.d(ye);
						(0, o.$INb)($e, !0, ue);
					}
				}
				class ee extends F {
					constructor() {
						super({
							id: "editor.unfoldAllExcept",
							label: s.localize(1057, null),
							alias: "Unfold All Except Selected",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(E.$ps, E.KeyMod.CtrlCmd | E.KeyCode.Equal),
								mac: {
									primary: (0, E.$os)(
										E.$qs,
										E.KeyMod.CtrlCmd | E.KeyCode.Equal,
									),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye) {
						const ue = this.d(ye);
						(0, o.$INb)($e, !1, ue);
					}
				}
				class _ extends F {
					constructor() {
						super({
							id: "editor.foldAll",
							label: s.localize(1058, null),
							alias: "Fold All",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(E.$ps, E.KeyMod.CtrlCmd | E.KeyCode.Digit0),
								mac: {
									primary: (0, E.$os)(
										E.$qs,
										E.KeyMod.CtrlCmd | E.KeyCode.Digit0,
									),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye) {
						(0, o.$ENb)($e, !0);
					}
				}
				class te extends F {
					constructor() {
						super({
							id: "editor.unfoldAll",
							label: s.localize(1059, null),
							alias: "Unfold All",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(E.$ps, E.KeyMod.CtrlCmd | E.KeyCode.KeyJ),
								mac: {
									primary: (0, E.$os)(E.$qs, E.KeyMod.CtrlCmd | E.KeyCode.KeyJ),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye) {
						(0, o.$ENb)($e, !1);
					}
				}
				class Q extends F {
					static {
						this.j = "editor.foldLevel";
					}
					static {
						this.ID = (pe) => Q.j + pe;
					}
					k() {
						return parseInt(this.id.substr(Q.j.length));
					}
					invoke(pe, $e, ye) {
						(0, o.$HNb)($e, this.k(), !0, this.d(ye));
					}
				}
				class Z extends F {
					constructor() {
						super({
							id: "editor.gotoParentFold",
							label: s.localize(1060, null),
							alias: "Go to Parent Fold",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye) {
						const ue = this.d(ye);
						if (ue.length > 0) {
							const fe = (0, o.$LNb)(ue[0], $e);
							fe !== null &&
								ye.setSelection({
									startLineNumber: fe,
									startColumn: 1,
									endLineNumber: fe,
									endColumn: 1,
								});
						}
					}
				}
				class se extends F {
					constructor() {
						super({
							id: "editor.gotoPreviousFold",
							label: s.localize(1061, null),
							alias: "Go to Previous Folding Range",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye) {
						const ue = this.d(ye);
						if (ue.length > 0) {
							const fe = (0, o.$MNb)(ue[0], $e);
							fe !== null &&
								ye.setSelection({
									startLineNumber: fe,
									startColumn: 1,
									endLineNumber: fe,
									endColumn: 1,
								});
						}
					}
				}
				class re extends F {
					constructor() {
						super({
							id: "editor.gotoNextFold",
							label: s.localize(1062, null),
							alias: "Go to Next Folding Range",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye) {
						const ue = this.d(ye);
						if (ue.length > 0) {
							const fe = (0, o.$NNb)(ue[0], $e);
							fe !== null &&
								ye.setSelection({
									startLineNumber: fe,
									startColumn: 1,
									endLineNumber: fe,
									endColumn: 1,
								});
						}
					}
				}
				class le extends F {
					constructor() {
						super({
							id: "editor.createFoldingRangeFromSelection",
							label: s.localize(1063, null),
							alias: "Create Folding Range from Selection",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(E.$ps, E.KeyMod.CtrlCmd | E.KeyCode.Comma),
								mac: {
									primary: (0, E.$os)(
										E.$qs,
										E.KeyMod.CtrlCmd | E.KeyCode.Comma,
									),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye) {
						const ue = [],
							fe = ye.getSelections();
						if (fe) {
							for (const me of fe) {
								let ve = me.endLineNumber;
								me.endColumn === 1 && --ve,
									ve > me.startLineNumber &&
										(ue.push({
											startLineNumber: me.startLineNumber,
											endLineNumber: ve,
											type: void 0,
											isCollapsed: !0,
											source: v.FoldSource.userDefined,
										}),
										ye.setSelection({
											startLineNumber: me.startLineNumber,
											startColumn: 1,
											endLineNumber: me.startLineNumber,
											endColumn: 1,
										}));
							}
							if (ue.length > 0) {
								ue.sort((ve, ge) => ve.startLineNumber - ge.startLineNumber);
								const me = v.$ANb.sanitizeAndMerge(
									$e.regions,
									ue,
									ye.getModel()?.getLineCount(),
								);
								$e.updatePost(v.$ANb.fromFoldRanges(me));
							}
						}
					}
				}
				class oe extends F {
					constructor() {
						super({
							id: "editor.removeManualFoldingRanges",
							label: s.localize(1064, null),
							alias: "Remove Manual Folding Ranges",
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(E.$ps, E.KeyMod.CtrlCmd | E.KeyCode.Period),
								mac: {
									primary: (0, E.$os)(
										E.$qs,
										E.KeyMod.CtrlCmd | E.KeyCode.Period,
									),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						});
					}
					invoke(pe, $e, ye) {
						const ue = ye.getSelections();
						if (ue) {
							const fe = [];
							for (const me of ue) {
								const { startLineNumber: ve, endLineNumber: ge } = me;
								fe.push(
									ge >= ve
										? { startLineNumber: ve, endLineNumber: ge }
										: { endLineNumber: ge, startLineNumber: ve },
								);
							}
							$e.removeManualRanges(fe), pe.triggerFoldingModelChanged();
						}
					}
				}
				(0, a.$qtb)(U.ID, U, a.EditorContributionInstantiation.Eager),
					(0, a.$ntb)(q),
					(0, a.$ntb)(V),
					(0, a.$ntb)(G),
					(0, a.$ntb)(J),
					(0, a.$ntb)(W),
					(0, a.$ntb)(_),
					(0, a.$ntb)(te),
					(0, a.$ntb)(X),
					(0, a.$ntb)(Y),
					(0, a.$ntb)(ie),
					(0, a.$ntb)(ne),
					(0, a.$ntb)(ee),
					(0, a.$ntb)(K),
					(0, a.$ntb)(Z),
					(0, a.$ntb)(se),
					(0, a.$ntb)(re),
					(0, a.$ntb)(le),
					(0, a.$ntb)(oe);
				for (let ae = 1; ae <= 7; ae++)
					(0, a.$ptb)(
						new Q({
							id: Q.ID(ae),
							label: s.localize(1065, null, ae),
							alias: `Fold Level ${ae}`,
							precondition: B,
							kbOpts: {
								kbExpr: n.EditorContextKeys.editorTextFocus,
								primary: (0, E.$os)(
									E.$ps,
									E.KeyMod.CtrlCmd | (E.KeyCode.Digit0 + ae),
								),
								mac: {
									primary: (0, E.$os)(
										E.$qs,
										E.KeyMod.CtrlCmd | (E.KeyCode.Digit0 + ae),
									),
								},
								weight: y.KeybindingWeight.EditorContrib,
							},
						}),
					);
				D.$fk.registerCommand(
					"_executeFoldingRangeProvider",
					async function (ae, ...pe) {
						const [$e] = pe;
						if (!($e instanceof M.URI)) throw (0, w.$$)();
						const ye = ae.get(k.$k3),
							ue = ae.get(N.$QO).getModel($e);
						if (!ue) throw (0, w.$$)();
						const fe = ae.get(A.$gj);
						if (!fe.getValue("editor.folding", { resource: $e })) return [];
						const me = ae.get(p.$aN),
							ve = fe.getValue("editor.foldingStrategy", { resource: $e }),
							ge = {
								get limit() {
									return fe.getValue("editor.foldingMaximumRegions", {
										resource: $e,
									});
								},
								update: (Oe, xe) => {},
							},
							be = new b.$PNb(ue, me, ge);
						let Ce = be;
						if (ve !== "indentation") {
							const Oe = U.getFoldingRangeProviders(ye, ue);
							Oe.length && (Ce = new S.$XNb(ue, Oe, () => {}, ge, be));
						}
						const Le = await Ce.compute(i.CancellationToken.None),
							Fe = [];
						try {
							if (Le)
								for (let Oe = 0; Oe < Le.length; Oe++) {
									const xe = Le.getType(Oe);
									Fe.push({
										start: Le.getStartLineNumber(Oe),
										end: Le.getEndLineNumber(Oe),
										kind: xe ? g.$jM.fromValue(xe) : void 0,
									});
								}
							return Fe;
						} finally {
							Ce.dispose();
						}
					},
				);
			},
		),
		