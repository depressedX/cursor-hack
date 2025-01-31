import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/browser/dom.js';
import '../../../../../../base/browser/fastDomNode.js';
import '../cellPart.js';
import '../../../common/notebookCommon.js';
define(de[3474], he([1, 0, 7, 194, 294, 70]), function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*fastDomNode*/,
 w /*cellPart*/,
 E /*notebookCommon*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$S3b = void 0),
				(t = mt(t));
			class C extends w.$A1b {
				constructor(m, r, u, a, h, c) {
					super(),
						(this.notebookEditor = m),
						(this.titleToolbar = r),
						(this.top = u),
						(this.left = a),
						(this.right = h),
						(this.bottom = c),
						(this.codeFocusIndicator = new i.$Rhb(
							t.$fhb(
								this.left.domNode,
								t.$(
									".codeOutput-focus-indicator-container",
									void 0,
									t.$(".codeOutput-focus-indicator.code-focus-indicator"),
								),
							),
						)),
						(this.outputFocusIndicator = new i.$Rhb(
							t.$fhb(
								this.left.domNode,
								t.$(
									".codeOutput-focus-indicator-container",
									void 0,
									t.$(".codeOutput-focus-indicator.output-focus-indicator"),
								),
							),
						)),
						this.D(
							t.$0fb(this.codeFocusIndicator.domNode, t.$$gb.CLICK, () => {
								this.c && (this.c.isInputCollapsed = !this.c.isInputCollapsed);
							}),
						),
						this.D(
							t.$0fb(this.outputFocusIndicator.domNode, t.$$gb.CLICK, () => {
								this.c &&
									(this.c.isOutputCollapsed = !this.c.isOutputCollapsed);
							}),
						),
						this.D(
							t.$0fb(this.left.domNode, t.$$gb.DBLCLICK, (n) => {
								if (
									!this.c ||
									!this.notebookEditor.hasModel() ||
									n.target !== this.left.domNode
								)
									return;
								n.offsetY < this.c.layoutInfo.outputContainerOffset
									? (this.c.isInputCollapsed = !this.c.isInputCollapsed)
									: (this.c.isOutputCollapsed = !this.c.isOutputCollapsed);
							}),
						),
						this.D(
							this.titleToolbar.onDidUpdateActions(() => {
								this.a();
							}),
						);
				}
				updateInternalLayoutNow(m) {
					if (m.cellKind === E.CellKind.Markup) {
						const r =
							this.notebookEditor.notebookOptions.computeIndicatorPosition(
								m.layoutInfo.totalHeight,
								m.layoutInfo.foldHintHeight,
								this.notebookEditor.textModel?.viewType,
							);
						(this.bottom.domNode.style.transform = `translateY(${r.bottomIndicatorTop + 6}px)`),
							this.left.setHeight(r.verticalIndicatorHeight),
							this.right.setHeight(r.verticalIndicatorHeight),
							this.codeFocusIndicator.setHeight(
								r.verticalIndicatorHeight -
									this.b() * 2 -
									m.layoutInfo.chatHeight,
							);
					} else {
						const r = m,
							u = this.notebookEditor.notebookOptions.getLayoutConfiguration(),
							a =
								this.notebookEditor.notebookOptions.computeBottomToolbarDimensions(
									this.notebookEditor.textModel?.viewType,
								),
							h =
								r.layoutInfo.codeIndicatorHeight +
								r.layoutInfo.outputIndicatorHeight +
								r.layoutInfo.commentHeight;
						this.left.setHeight(h),
							this.right.setHeight(h),
							this.codeFocusIndicator.setHeight(
								r.layoutInfo.codeIndicatorHeight,
							),
							this.outputFocusIndicator.setHeight(
								Math.max(
									r.layoutInfo.outputIndicatorHeight -
										r.viewContext.notebookOptions.getLayoutConfiguration()
											.focusIndicatorGap,
									0,
								),
							),
							(this.bottom.domNode.style.transform = `translateY(${r.layoutInfo.totalHeight - a.bottomToolbarGap - u.cellBottomMargin}px)`);
					}
					this.a();
				}
				a() {
					const m = (this.c?.layoutInfo.chatHeight ?? 0) + this.b();
					(this.left.domNode.style.transform = `translateY(${m}px)`),
						(this.right.domNode.style.transform = `translateY(${m}px)`);
				}
				b() {
					const m =
						this.notebookEditor.notebookOptions.getLayoutConfiguration();
					return this.titleToolbar.hasActions
						? m.editorToolbarHeight + m.cellTopMargin
						: m.cellTopMargin;
				}
			}
			e.$S3b = C;
		})
