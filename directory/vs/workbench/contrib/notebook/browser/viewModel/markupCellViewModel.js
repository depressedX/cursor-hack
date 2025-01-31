import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/uuid.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../notebookBrowser.js';
import './baseCellViewModel.js';
import '../../common/notebookCommon.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../platform/undoRedo/common/undoRedo.js';
import '../../../../../editor/browser/services/codeEditorService.js';
import '../notebookViewEvents.js';
define(
			de[855],
			he([1, 0, 6, 47, 10, 108, 1959, 70, 42, 155, 65, 990]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*uuid*/,
 w /*configuration*/,
 E /*notebookBrowser*/,
 C /*baseCellViewModel*/,
 d /*notebookCommon*/,
 m /*resolverService*/,
 r /*undoRedo*/,
 u /*codeEditorService*/,
 a /*notebookViewEvents*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$41b = void 0),
					(i = mt(i));
				let h = class extends C.$11b {
					get renderedHtml() {
						return this.cb;
					}
					set renderedHtml(n) {
						this.cb !== n &&
							((this.cb = n), this.b.fire({ contentChanged: !0 }));
					}
					get layoutInfo() {
						return this.bb;
					}
					set renderedMarkdownHeight(n) {
						(this.db = n), this.nb(this.lb());
					}
					set chatHeight(n) {
						(this.eb = n), this.nb(this.lb());
					}
					get chatHeight() {
						return this.eb;
					}
					set editorHeight(n) {
						(this.fb = n),
							(this.gb =
								this.viewContext.notebookOptions.computeStatusBarHeight()),
							this.nb(this.lb());
					}
					get editorHeight() {
						throw new Error("MarkdownCellViewModel.editorHeight is write only");
					}
					get foldingState() {
						return this.foldingDelegate.getFoldingState(
							this.foldingDelegate.getCellIndex(this),
						);
					}
					get outputIsHovered() {
						return this.ib;
					}
					set outputIsHovered(n) {
						this.ib = n;
					}
					get outputIsFocused() {
						return this.jb;
					}
					set outputIsFocused(n) {
						this.jb = n;
					}
					get inputInOutputIsFocused() {
						return !1;
					}
					set inputInOutputIsFocused(n) {}
					get cellIsHovered() {
						return this.kb;
					}
					set cellIsHovered(n) {
						(this.kb = n), this.b.fire({ cellIsHoveredChanged: !0 });
					}
					constructor(n, g, p, o, f, b, s, l, y) {
						super(n, g, i.$9g(), f, b, s, l, y),
							(this.foldingDelegate = o),
							(this.viewContext = f),
							(this.cellKind = d.CellKind.Markup),
							(this.db = 0),
							(this.eb = 0),
							(this.fb = 0),
							(this.gb = 0),
							(this.hb = this.D(new t.$re())),
							(this.onDidChangeLayout = this.hb.event),
							(this.ib = !1),
							(this.jb = !1),
							(this.kb = !1),
							(this.outputsViewModels = []),
							(this.pb = this.D(new t.$re())),
							(this.hasFindResult = this.pb.event);
						const { bottomToolbarGap: $ } =
							this.viewContext.notebookOptions.computeBottomToolbarDimensions(
								this.viewType,
							);
						(this.bb = {
							chatHeight: 0,
							editorHeight: 0,
							previewHeight: 0,
							fontInfo: p?.fontInfo || null,
							editorWidth: p?.width
								? this.viewContext.notebookOptions.computeMarkdownCellEditorWidth(
										p.width,
									)
								: 0,
							commentOffset: 0,
							commentHeight: 0,
							bottomToolbarOffset: $,
							totalHeight: 100,
							layoutState: E.CellLayoutState.Uninitialized,
							foldHintHeight: 0,
							statusBarHeight: 0,
						}),
							this.D(
								this.onDidChangeState((v) => {
									this.viewContext.eventDispatcher.emit([
										new a.$KIb(v, this.model),
									]),
										v.foldingStateChanged &&
											this.nb(this.lb(), E.CellLayoutContext.Fold);
								}),
							);
					}
					lb() {
						const n = this.viewContext.notebookOptions.getLayoutConfiguration(),
							{ bottomToolbarGap: g } =
								this.viewContext.notebookOptions.computeBottomToolbarDimensions(
									this.viewType,
								),
							p = this.mb();
						return this.getEditState() === E.CellEditState.Editing
							? this.fb +
									n.markdownCellTopMargin +
									n.markdownCellBottomMargin +
									g +
									this.gb +
									this.L
							: Math.max(1, this.db + g + p + this.L);
					}
					mb() {
						return this.getEditState() === E.CellEditState.Editing ||
							this.foldingState !== E.CellFoldingState.Collapsed
							? 0
							: this.viewContext.notebookOptions.getLayoutConfiguration()
									.markdownFoldHintHeight;
					}
					updateOptions(n) {
						(n.cellStatusBarVisibility ||
							n.insertToolbarPosition ||
							n.cellToolbarLocation) &&
							this.nb(this.lb());
					}
					getOutputOffset(n) {
						return -1;
					}
					updateOutputHeight(n, g) {}
					triggerFoldingStateChange() {
						this.b.fire({ foldingStateChanged: !0 });
					}
					nb(n, g) {
						n !== this.layoutInfo.totalHeight &&
							this.layoutChange({ totalHeight: n, context: g });
					}
					layoutChange(n) {
						let g, p;
						this.isInputCollapsed
							? ((g =
									this.viewContext.notebookOptions.computeCollapsedMarkdownCellHeight(
										this.viewType,
									)),
								(n.totalHeight = g),
								(p = 0))
							: ((g =
									n.totalHeight === void 0
										? this.bb.layoutState === E.CellLayoutState.Uninitialized
											? 100
											: this.bb.totalHeight
										: n.totalHeight),
								(p = this.mb()));
						let o;
						if (this.getEditState() === E.CellEditState.Editing) {
							const f =
								this.viewContext.notebookOptions.getLayoutConfiguration();
							o =
								f.editorToolbarHeight +
								f.cellTopMargin +
								this.eb +
								this.fb +
								this.gb;
						} else o = this.db;
						(this.bb = {
							fontInfo: n.font || this.bb.fontInfo,
							editorWidth:
								n.outerWidth !== void 0
									? this.viewContext.notebookOptions.computeMarkdownCellEditorWidth(
											n.outerWidth,
										)
									: this.bb.editorWidth,
							chatHeight: this.eb,
							editorHeight: this.fb,
							statusBarHeight: this.gb,
							previewHeight: this.db,
							bottomToolbarOffset:
								this.viewContext.notebookOptions.computeBottomToolbarOffset(
									g,
									this.viewType,
								),
							totalHeight: g,
							layoutState: E.CellLayoutState.Measured,
							foldHintHeight: p,
							commentOffset: o,
							commentHeight: n.commentHeight ? this.L : this.bb.commentHeight,
						}),
							this.hb.fire(n);
					}
					restoreEditorViewState(n, g) {
						super.restoreEditorViewState(n),
							g !== void 0 &&
								this.layoutInfo.layoutState ===
									E.CellLayoutState.Uninitialized &&
								((this.bb = {
									...this.layoutInfo,
									totalHeight: g,
									chatHeight: this.eb,
									editorHeight: this.fb,
									statusBarHeight: this.gb,
									layoutState: E.CellLayoutState.FromCache,
								}),
								this.layoutChange({}));
					}
					getDynamicHeight() {
						return null;
					}
					getHeight(n) {
						return this.bb.layoutState === E.CellLayoutState.Uninitialized
							? 100
							: this.bb.totalHeight;
					}
					$() {
						this.b.fire({ contentChanged: !0 });
					}
					onDeselect() {}
					startFind(n, g) {
						const p = super.ab(n, g);
						return p === null ? null : { cell: this, contentMatches: p };
					}
					dispose() {
						super.dispose(), (this.foldingDelegate = null);
					}
				};
				(e.$41b = h),
					(e.$41b = h =
						Ne([j(5, w.$gj), j(6, m.$MO), j(7, r.$GN), j(8, u.$dtb)], h));
			},
		)
