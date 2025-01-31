import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/fastDomNode.js';
import '../../../../base/browser/ui/scrollbar/scrollableElement.js';
import '../../view/viewPart.js';
import '../../../common/editorCommon.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../common/config/editorOptions.js';
define(
			de[2844],
			he([1, 0, 7, 194, 203, 303, 98, 35, 38]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*fastDomNode*/,
 w /*scrollableElement*/,
 E /*viewPart*/,
 C /*editorCommon*/,
 d /*themeService*/,
 m /*editorOptions*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nvb = void 0),
					(t = mt(t));
				class r extends E.$yub {
					constructor(a, h, c, n) {
						super(a);
						const g = this._context.configuration.options,
							p = g.get(m.EditorOption.scrollbar),
							o = g.get(m.EditorOption.mouseWheelScrollSensitivity),
							f = g.get(m.EditorOption.fastScrollSensitivity),
							b = g.get(m.EditorOption.scrollPredominantAxis),
							s = {
								listenOnDomNode: c.domNode,
								className: "editor-scrollable " + (0, d.$mP)(a.theme.type),
								useShadows: !1,
								lazyRender: !0,
								vertical: p.vertical,
								horizontal: p.horizontal,
								verticalHasArrows: p.verticalHasArrows,
								horizontalHasArrows: p.horizontalHasArrows,
								verticalScrollbarSize: p.verticalScrollbarSize,
								verticalSliderSize: p.verticalSliderSize,
								horizontalScrollbarSize: p.horizontalScrollbarSize,
								horizontalSliderSize: p.horizontalSliderSize,
								handleMouseWheel: p.handleMouseWheel,
								ignoreVerticalScrolling: p.ignoreVerticalScrolling,
								alwaysConsumeMouseWheel: p.alwaysConsumeMouseWheel,
								arrowSize: p.arrowSize,
								mouseWheelScrollSensitivity: o,
								fastScrollSensitivity: f,
								scrollPredominantAxis: b,
								scrollByPage: p.scrollByPage,
							};
						(this.a = this.D(
							new w.$6hb(
								h.domNode,
								s,
								this._context.viewLayout.getScrollable(),
							),
						)),
							E.$zub.write(
								this.a.getDomNode(),
								E.PartFingerprint.ScrollableElement,
							),
							(this.b = (0, i.$Shb)(this.a.getDomNode())),
							this.b.setPosition("absolute"),
							this.c();
						const l = (y, $, v) => {
							const S = {};
							if ($) {
								const I = y.scrollTop;
								I &&
									((S.scrollTop =
										this._context.viewLayout.getCurrentScrollTop() + I),
									(y.scrollTop = 0));
							}
							if (v) {
								const I = y.scrollLeft;
								I &&
									((S.scrollLeft =
										this._context.viewLayout.getCurrentScrollLeft() + I),
									(y.scrollLeft = 0));
							}
							this._context.viewModel.viewLayout.setScrollPosition(
								S,
								C.ScrollType.Immediate,
							);
						};
						this.D(t.$0fb(c.domNode, "scroll", (y) => l(c.domNode, !0, !0))),
							this.D(t.$0fb(h.domNode, "scroll", (y) => l(h.domNode, !0, !1))),
							this.D(t.$0fb(n.domNode, "scroll", (y) => l(n.domNode, !0, !1))),
							this.D(
								t.$0fb(this.b.domNode, "scroll", (y) =>
									l(this.b.domNode, !0, !1),
								),
							);
					}
					dispose() {
						super.dispose();
					}
					c() {
						const a = this._context.configuration.options,
							h = a.get(m.EditorOption.layoutInfo);
						this.b.setLeft(h.contentLeft),
							a.get(m.EditorOption.minimap).side === "right"
								? this.b.setWidth(h.contentWidth + h.minimap.minimapWidth)
								: this.b.setWidth(h.contentWidth),
							this.b.setHeight(h.height);
					}
					getOverviewRulerLayoutInfo() {
						return this.a.getOverviewRulerLayoutInfo();
					}
					getDomNode() {
						return this.b;
					}
					delegateVerticalScrollbarPointerDown(a) {
						this.a.delegateVerticalScrollbarPointerDown(a);
					}
					delegateScrollFromMouseWheelEvent(a) {
						this.a.delegateScrollFromMouseWheelEvent(a);
					}
					onConfigurationChanged(a) {
						if (
							a.hasChanged(m.EditorOption.scrollbar) ||
							a.hasChanged(m.EditorOption.mouseWheelScrollSensitivity) ||
							a.hasChanged(m.EditorOption.fastScrollSensitivity)
						) {
							const h = this._context.configuration.options,
								c = h.get(m.EditorOption.scrollbar),
								n = h.get(m.EditorOption.mouseWheelScrollSensitivity),
								g = h.get(m.EditorOption.fastScrollSensitivity),
								p = h.get(m.EditorOption.scrollPredominantAxis),
								o = {
									vertical: c.vertical,
									horizontal: c.horizontal,
									verticalScrollbarSize: c.verticalScrollbarSize,
									horizontalScrollbarSize: c.horizontalScrollbarSize,
									scrollByPage: c.scrollByPage,
									handleMouseWheel: c.handleMouseWheel,
									mouseWheelScrollSensitivity: n,
									fastScrollSensitivity: g,
									scrollPredominantAxis: p,
								};
							this.a.updateOptions(o);
						}
						return a.hasChanged(m.EditorOption.layoutInfo) && this.c(), !0;
					}
					onScrollChanged(a) {
						return !0;
					}
					onThemeChanged(a) {
						return (
							this.a.updateClassName(
								"editor-scrollable " + (0, d.$mP)(this._context.theme.type),
							),
							!0
						);
					}
					prepareRender(a) {}
					render(a) {
						this.a.renderNow();
					}
				}
				e.$nvb = r;
			},
		)
