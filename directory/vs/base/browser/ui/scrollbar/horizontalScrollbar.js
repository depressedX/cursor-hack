import '../../../../../require.js';
import '../../../../../exports.js';
import '../../mouseEvent.js';
import './abstractScrollbar.js';
import './scrollbarArrow.js';
import './scrollbarState.js';
import '../../../common/codicons.js';
import '../../../common/scrollable.js';
define(
			de[2679],
			he([1, 0, 168, 1577, 1166, 1128, 14, 195]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1hb = void 0);
				class m extends i.$Zhb {
					constructor(u, a, h) {
						const c = u.getScrollDimensions(),
							n = u.getCurrentScrollPosition();
						if (
							(super({
								lazyRender: a.lazyRender,
								host: h,
								scrollbarState: new E.$Xhb(
									a.horizontalHasArrows ? a.arrowSize : 0,
									a.horizontal === d.ScrollbarVisibility.Hidden
										? 0
										: a.horizontalScrollbarSize,
									a.vertical === d.ScrollbarVisibility.Hidden
										? 0
										: a.verticalScrollbarSize,
									c.width,
									c.scrollWidth,
									n.scrollLeft,
								),
								visibility: a.horizontal,
								extraScrollbarClassName: "horizontal",
								scrollable: u,
								scrollByPage: a.scrollByPage,
							}),
							a.horizontalHasArrows)
						) {
							const g = (a.arrowSize - w.$Vhb) / 2,
								p = (a.horizontalScrollbarSize - w.$Vhb) / 2;
							this.t({
								className: "scra",
								icon: C.$ak.scrollbarButtonLeft,
								top: p,
								left: g,
								bottom: void 0,
								right: void 0,
								bgWidth: a.arrowSize,
								bgHeight: a.horizontalScrollbarSize,
								onActivate: () => this.a.onMouseWheel(new t.$4fb(null, 1, 0)),
							}),
								this.t({
									className: "scra",
									icon: C.$ak.scrollbarButtonRight,
									top: p,
									left: void 0,
									bottom: void 0,
									right: g,
									bgWidth: a.arrowSize,
									bgHeight: a.horizontalScrollbarSize,
									onActivate: () =>
										this.a.onMouseWheel(new t.$4fb(null, -1, 0)),
								});
						}
						this.w(
							Math.floor(
								(a.horizontalScrollbarSize - a.horizontalSliderSize) / 2,
							),
							0,
							void 0,
							a.horizontalSliderSize,
						);
					}
					R(u, a) {
						this.slider.setWidth(u), this.slider.setLeft(a);
					}
					Q(u, a) {
						this.domNode.setWidth(u),
							this.domNode.setHeight(a),
							this.domNode.setLeft(0),
							this.domNode.setBottom(0);
					}
					onDidScroll(u) {
						return (
							(this.s = this.J(u.scrollWidth) || this.s),
							(this.s = this.L(u.scrollLeft) || this.s),
							(this.s = this.y(u.width) || this.s),
							this.s
						);
					}
					S(u, a) {
						return u;
					}
					U(u) {
						return u.pageX;
					}
					W(u) {
						return u.pageY;
					}
					X(u) {
						this.slider.setHeight(u);
					}
					writeScrollPosition(u, a) {
						u.scrollLeft = a;
					}
					updateOptions(u) {
						this.updateScrollbarSize(
							u.horizontal === d.ScrollbarVisibility.Hidden
								? 0
								: u.horizontalScrollbarSize,
						),
							this.h.setOppositeScrollbarSize(
								u.vertical === d.ScrollbarVisibility.Hidden
									? 0
									: u.verticalScrollbarSize,
							),
							this.n.setVisibility(u.horizontal),
							(this.c = u.scrollByPage);
					}
				}
				e.$1hb = m;
			},
		),
		