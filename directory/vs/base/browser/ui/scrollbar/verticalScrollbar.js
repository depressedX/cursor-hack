import '../../../../../require.js';
import '../../../../../exports.js';
import '../../mouseEvent.js';
import './abstractScrollbar.js';
import './scrollbarArrow.js';
import './scrollbarState.js';
import '../../../common/codicons.js';
import '../../../common/scrollable.js';
define(
			de[2680],
			he([1, 0, 168, 1577, 1166, 1128, 14, 195]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2hb = void 0);
				class m extends i.$Zhb {
					constructor(u, a, h) {
						const c = u.getScrollDimensions(),
							n = u.getCurrentScrollPosition();
						if (
							(super({
								lazyRender: a.lazyRender,
								host: h,
								scrollbarState: new E.$Xhb(
									a.verticalHasArrows ? a.arrowSize : 0,
									a.vertical === d.ScrollbarVisibility.Hidden
										? 0
										: a.verticalScrollbarSize,
									0,
									c.height,
									c.scrollHeight,
									n.scrollTop,
								),
								visibility: a.vertical,
								extraScrollbarClassName: "vertical",
								scrollable: u,
								scrollByPage: a.scrollByPage,
							}),
							a.verticalHasArrows)
						) {
							const g = (a.arrowSize - w.$Vhb) / 2,
								p = (a.verticalScrollbarSize - w.$Vhb) / 2;
							this.t({
								className: "scra",
								icon: C.$ak.scrollbarButtonUp,
								top: g,
								left: p,
								bottom: void 0,
								right: void 0,
								bgWidth: a.verticalScrollbarSize,
								bgHeight: a.arrowSize,
								onActivate: () => this.a.onMouseWheel(new t.$4fb(null, 0, 1)),
							}),
								this.t({
									className: "scra",
									icon: C.$ak.scrollbarButtonDown,
									top: void 0,
									left: p,
									bottom: g,
									right: void 0,
									bgWidth: a.verticalScrollbarSize,
									bgHeight: a.arrowSize,
									onActivate: () =>
										this.a.onMouseWheel(new t.$4fb(null, 0, -1)),
								});
						}
						this.w(
							0,
							Math.floor((a.verticalScrollbarSize - a.verticalSliderSize) / 2),
							a.verticalSliderSize,
							void 0,
						);
					}
					R(u, a) {
						this.slider.setHeight(u), this.slider.setTop(a);
					}
					Q(u, a) {
						this.domNode.setWidth(a),
							this.domNode.setHeight(u),
							this.domNode.setRight(0),
							this.domNode.setTop(0);
					}
					onDidScroll(u) {
						return (
							(this.s = this.J(u.scrollHeight) || this.s),
							(this.s = this.L(u.scrollTop) || this.s),
							(this.s = this.y(u.height) || this.s),
							this.s
						);
					}
					S(u, a) {
						return a;
					}
					U(u) {
						return u.pageY;
					}
					W(u) {
						return u.pageX;
					}
					X(u) {
						this.slider.setWidth(u);
					}
					writeScrollPosition(u, a) {
						u.scrollTop = a;
					}
					updateOptions(u) {
						this.updateScrollbarSize(
							u.vertical === d.ScrollbarVisibility.Hidden
								? 0
								: u.verticalScrollbarSize,
						),
							this.h.setOppositeScrollbarSize(0),
							this.n.setVisibility(u.vertical),
							(this.c = u.scrollByPage);
					}
				}
				e.$2hb = m;
			},
		),
		