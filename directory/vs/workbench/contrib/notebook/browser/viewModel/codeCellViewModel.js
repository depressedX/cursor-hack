import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/observable.js';
import '../../../../../base/common/uuid.js';
import '../../../../../editor/browser/services/codeEditorService.js';
import '../../../../../editor/common/model/prefixSumComputer.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/undoRedo/common/undoRedo.js';
import '../notebookBrowser.js';
import './cellOutputViewModel.js';
import '../../common/notebookCommon.js';
import '../../common/notebookService.js';
import './baseCellViewModel.js';
define(
			de[482],
			he([
				1, 0, 6, 3, 77, 47, 65, 589, 42, 10, 5, 155, 108, 1840, 70, 161, 1959,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$31b = e.$21b = void 0),
					(E = mt(E)),
					(e.$21b = 500);
				let o = class extends p.$11b {
					set editorHeight(b) {
						this.jb !== b &&
							((this.jb = b),
							this.layoutChange(
								{ editorHeight: !0 },
								"CodeCellViewModel#editorHeight",
							));
					}
					get editorHeight() {
						throw new Error("editorHeight is write-only");
					}
					set chatHeight(b) {
						this.kb !== b &&
							((this.kb = b),
							this.layoutChange(
								{ chatHeight: !0 },
								"CodeCellViewModel#chatHeight",
							));
					}
					get chatHeight() {
						return this.kb;
					}
					get outputIsHovered() {
						return this.lb;
					}
					set outputIsHovered(b) {
						(this.lb = b), this.b.fire({ outputIsHoveredChanged: !0 });
					}
					get outputIsFocused() {
						return this.mb;
					}
					set outputIsFocused(b) {
						(this.mb = b), this.b.fire({ outputIsFocusedChanged: !0 });
					}
					get inputInOutputIsFocused() {
						return this.nb;
					}
					set inputInOutputIsFocused(b) {
						this.nb = b;
					}
					get pb() {
						return this.ob;
					}
					set pb(b) {
						this.ob = b;
					}
					get layoutInfo() {
						return this.qb;
					}
					get outputsViewModels() {
						return this.rb;
					}
					constructor(b, s, l, y, $, v, S, I, T, P) {
						super(b, s, E.$9g(), y, $, S, I, T),
							(this.viewContext = y),
							(this.sb = v),
							(this.cellKind = n.CellKind.Code),
							(this.bb = this.D(new t.$re())),
							(this.onLayoutInfoRead = this.bb.event),
							(this.cb = this.D(new t.$re())),
							(this.onDidStartExecution = this.cb.event),
							(this.db = this.D(new t.$re())),
							(this.onDidStopExecution = this.db.event),
							(this.eb = this.D(new t.$re())),
							(this.onDidChangeOutputs = this.eb.event),
							(this.fb = this.D(new t.$re())),
							(this.onDidRemoveOutputs = this.fb.event),
							(this.gb = []),
							(this.hb = null),
							(this.ib = this.D(new t.$ue())),
							(this.onDidChangeLayout = this.ib.event),
							(this.jb = 0),
							(this.kb = 0),
							(this.lb = !1),
							(this.mb = !1),
							(this.nb = !1),
							(this.ob = 0),
							(this.excecutionError = (0, w.observableValue)(
								"excecutionError",
								void 0,
							)),
							(this.yb = this.D(new t.$re())),
							(this.hasFindResult = this.yb.event),
							(this.rb = this.model.outputs.map(
								(k) => new c.$D1b(this, k, this.sb),
							)),
							this.D(
								this.model.onDidChangeOutputs((k) => {
									const L = [];
									let D = !1;
									for (let M = k.start; M < k.start + k.deleteCount; M++)
										this.gb[M] !== void 0 && this.gb[M] !== 0 && (D = !0);
									this.gb.splice(
										k.start,
										k.deleteCount,
										...k.newOutputs.map(() => 0),
									),
										L.push(
											...this.rb.splice(
												k.start,
												k.deleteCount,
												...k.newOutputs.map(
													(M) => new c.$D1b(this, M, this.sb),
												),
											),
										),
										(this.hb = null),
										this.eb.fire(k),
										this.fb.fire(L),
										D &&
											this.layoutChange(
												{ outputHeight: !0 },
												"CodeCellViewModel#model.onDidChangeOutputs",
											),
										(0, i.$Vc)(L);
								}),
							),
							(this.gb = new Array(this.model.outputs.length)),
							(this.qb = {
								fontInfo: l?.fontInfo || null,
								editorHeight: 0,
								editorWidth: l
									? this.viewContext.notebookOptions.computeCodeCellEditorWidth(
											l.width,
										)
									: 0,
								chatHeight: 0,
								statusBarHeight: 0,
								commentOffset: 0,
								commentHeight: 0,
								outputContainerOffset: 0,
								outputTotalHeight: 0,
								outputShowMoreContainerHeight: 0,
								outputShowMoreContainerOffset: 0,
								totalHeight: this.vb(17, 0, 0, 0),
								codeIndicatorHeight: 0,
								outputIndicatorHeight: 0,
								bottomToolbarOffset: 0,
								layoutState: h.CellLayoutState.Uninitialized,
								estimatedHasHorizontalScrolling: !1,
							});
					}
					updateExecutionState(b) {
						b.changed ? this.cb.fire(b) : this.db.fire(b);
					}
					updateOptions(b) {
						(b.cellStatusBarVisibility ||
							b.insertToolbarPosition ||
							b.cellToolbarLocation) &&
							this.layoutChange({});
					}
					pauseLayout() {
						this.ib.pause();
					}
					resumeLayout() {
						this.ib.resume();
					}
					layoutChange(b, s) {
						this.xb();
						const l = this.viewContext.notebookOptions.getLayoutConfiguration(),
							y =
								this.viewContext.notebookOptions.computeBottomToolbarDimensions(
									this.viewType,
								),
							$ = b.outputShowMoreContainerHeight
								? b.outputShowMoreContainerHeight
								: this.qb.outputShowMoreContainerHeight,
							v = Math.max(
								this.ob,
								this.isOutputCollapsed
									? l.collapsedIndicatorHeight
									: this.hb.getTotalSum(),
							),
							S = b.commentHeight ? this.L : this.qb.commentHeight,
							I = this.layoutInfo;
						if (this.isInputCollapsed) {
							const T = l.collapsedIndicatorHeight,
								P = v + $,
								k = b.chatHeight ? this.kb : this.qb.chatHeight,
								L = l.cellTopMargin + l.collapsedIndicatorHeight,
								D =
									l.cellTopMargin +
									l.collapsedIndicatorHeight +
									l.cellBottomMargin +
									y.bottomToolbarGap +
									k +
									S +
									v +
									$,
								M = D - y.bottomToolbarGap - y.bottomToolbarHeight / 2 - $,
								N = this.viewContext.notebookOptions.computeBottomToolbarOffset(
									D,
									this.viewType,
								),
								A =
									b.outerWidth !== void 0
										? this.viewContext.notebookOptions.computeCodeCellEditorWidth(
												b.outerWidth,
											)
										: this.qb?.editorWidth;
							this.qb = {
								fontInfo: b.font ?? this.qb.fontInfo ?? null,
								editorHeight: this.qb.editorHeight,
								editorWidth: A,
								chatHeight: k,
								statusBarHeight: 0,
								outputContainerOffset: L,
								outputTotalHeight: v,
								outputShowMoreContainerHeight: $,
								outputShowMoreContainerOffset: M,
								commentOffset: L + v,
								commentHeight: S,
								totalHeight: D,
								codeIndicatorHeight: T,
								outputIndicatorHeight: P,
								bottomToolbarOffset: N,
								layoutState: this.qb.layoutState,
								estimatedHasHorizontalScrolling: !1,
							};
						} else {
							let T,
								P,
								k,
								L = !1;
							const D = b.chatHeight ? this.kb : this.qb.chatHeight;
							if (
								!b.editorHeight &&
								this.qb.layoutState === h.CellLayoutState.FromCache &&
								!b.outputHeight
							) {
								const z = this.ub(
									b.font?.lineHeight ?? this.qb.fontInfo?.lineHeight,
								);
								(P = z.editorHeight),
									(L = z.hasHorizontalScrolling),
									(k = this.qb.totalHeight),
									(T = h.CellLayoutState.FromCache);
							} else if (
								b.editorHeight ||
								this.qb.layoutState === h.CellLayoutState.Measured
							)
								(P = this.jb),
									(k = this.vb(this.jb, v, $, D)),
									(T = h.CellLayoutState.Measured),
									(L = this.qb.estimatedHasHorizontalScrolling);
							else {
								const z = this.ub(
									b.font?.lineHeight ?? this.qb.fontInfo?.lineHeight,
								);
								(P = z.editorHeight),
									(L = z.hasHorizontalScrolling),
									(k = this.vb(P, v, $, D)),
									(T = h.CellLayoutState.Estimated);
							}
							const M =
									this.viewContext.notebookOptions.computeEditorStatusbarHeight(
										this.internalMetadata,
										this.uri,
									),
								N = P + M,
								A = v + $,
								R = l.editorToolbarHeight + l.cellTopMargin + D + P + M,
								O = k - y.bottomToolbarGap - y.bottomToolbarHeight / 2 - $,
								B = this.viewContext.notebookOptions.computeBottomToolbarOffset(
									k,
									this.viewType,
								),
								U =
									b.outerWidth !== void 0
										? this.viewContext.notebookOptions.computeCodeCellEditorWidth(
												b.outerWidth,
											)
										: this.qb?.editorWidth;
							this.qb = {
								fontInfo: b.font ?? this.qb.fontInfo ?? null,
								chatHeight: D,
								editorHeight: P,
								editorWidth: U,
								statusBarHeight: M,
								outputContainerOffset: R,
								outputTotalHeight: v,
								outputShowMoreContainerHeight: $,
								outputShowMoreContainerOffset: O,
								commentOffset: R + v,
								commentHeight: S,
								totalHeight: k,
								codeIndicatorHeight: N,
								outputIndicatorHeight: A,
								bottomToolbarOffset: B,
								layoutState: T,
								estimatedHasHorizontalScrolling: L,
							};
						}
						this.tb({
							...b,
							totalHeight: this.layoutInfo.totalHeight !== I.totalHeight,
							source: s,
						});
					}
					tb(b) {
						this.ib.fire(b);
					}
					restoreEditorViewState(b, s) {
						super.restoreEditorViewState(b),
							s !== void 0 &&
								this.qb.layoutState !== h.CellLayoutState.Measured &&
								(this.qb = {
									...this.qb,
									totalHeight: s,
									layoutState: h.CellLayoutState.FromCache,
								});
					}
					getDynamicHeight() {
						return this.bb.fire(), this.qb.totalHeight;
					}
					getHeight(b) {
						if (this.qb.layoutState === h.CellLayoutState.Uninitialized) {
							const s = this.ub(b);
							return this.vb(s.editorHeight, 0, 0, 0);
						} else return this.qb.totalHeight;
					}
					ub(b = 20) {
						let s = !1;
						const l = this.viewContext.getBaseCellEditorOptions(this.language);
						if (this.layoutInfo.fontInfo && l.value.wordWrap === "off") {
							for (let S = 0; S < this.lineCount; S++)
								if (
									this.textBuffer.getLineLastNonWhitespaceColumn(S + 1) *
										(this.layoutInfo.fontInfo.typicalHalfwidthCharacterWidth +
											this.layoutInfo.fontInfo.letterSpacing) >
									this.layoutInfo.editorWidth
								) {
									s = !0;
									break;
								}
						}
						const y = s ? 12 : 0,
							$ = this.viewContext.notebookOptions.computeEditorPadding(
								this.internalMetadata,
								this.uri,
							);
						return {
							editorHeight: this.lineCount * b + $.top + $.bottom + y,
							hasHorizontalScrolling: s,
						};
					}
					vb(b, s, l, y) {
						const $ = this.viewContext.notebookOptions.getLayoutConfiguration(),
							{ bottomToolbarGap: v } =
								this.viewContext.notebookOptions.computeBottomToolbarDimensions(
									this.viewType,
								);
						return (
							$.editorToolbarHeight +
							$.cellTopMargin +
							y +
							b +
							this.viewContext.notebookOptions.computeEditorStatusbarHeight(
								this.internalMetadata,
								this.uri,
							) +
							this.L +
							s +
							l +
							v +
							$.cellBottomMargin
						);
					}
					$() {
						this.getEditState() !== h.CellEditState.Editing &&
							(this.updateEditState(
								h.CellEditState.Editing,
								"onDidChangeTextModelContent",
							),
							this.b.fire({ contentChanged: !0 }));
					}
					onDeselect() {
						this.updateEditState(h.CellEditState.Preview, "onDeselect");
					}
					updateOutputShowMoreContainerHeight(b) {
						this.layoutChange(
							{ outputShowMoreContainerHeight: b },
							"CodeCellViewModel#updateOutputShowMoreContainerHeight",
						);
					}
					updateOutputMinHeight(b) {
						this.pb = b;
					}
					unlockOutputHeight() {
						(this.pb = 0), this.layoutChange({ outputHeight: !0 });
					}
					updateOutputHeight(b, s, l) {
						if (b >= this.gb.length)
							throw new Error("Output index out of range!");
						this.xb(),
							b === 0 || s > 0
								? this.rb[b].setVisible(!0)
								: s === 0 && this.rb[b].setVisible(!1),
							this.rb[b].visible.get() && s < 28 && (s = 28),
							(this.gb[b] = s),
							this.hb.setValue(b, s) &&
								this.layoutChange({ outputHeight: !0 }, l);
					}
					getOutputOffsetInContainer(b) {
						if ((this.xb(), b >= this.gb.length))
							throw new Error("Output index out of range!");
						return this.hb.getPrefixSum(b - 1);
					}
					getOutputOffset(b) {
						return (
							this.layoutInfo.outputContainerOffset +
							this.getOutputOffsetInContainer(b)
						);
					}
					spliceOutputHeights(b, s, l) {
						if ((this.xb(), this.hb.removeValues(b, s), l.length)) {
							const y = new Uint32Array(l.length);
							for (let $ = 0; $ < l.length; $++) y[$] = l[$];
							this.hb.insertValues(b, y);
						}
						this.layoutChange(
							{ outputHeight: !0 },
							"CodeCellViewModel#spliceOutputs",
						);
					}
					xb() {
						if (!this.hb) {
							const b = new Uint32Array(this.gb.length);
							for (let s = 0; s < this.gb.length; s++) b[s] = this.gb[s];
							this.hb = new d.$WN(b);
						}
					}
					startFind(b, s) {
						const l = super.ab(b, s);
						return l === null ? null : { cell: this, contentMatches: l };
					}
					dispose() {
						super.dispose(),
							(this.gb = []),
							(this.hb = null),
							(0, i.$Vc)(this.rb);
					}
				};
				(e.$31b = o),
					(e.$31b = o =
						Ne(
							[
								j(4, r.$gj),
								j(5, g.$MIb),
								j(6, m.$MO),
								j(7, a.$GN),
								j(8, C.$dtb),
								j(9, u.$Li),
							],
							o,
						));
			},
		),
		