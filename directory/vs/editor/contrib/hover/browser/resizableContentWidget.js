import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/ui/resizable/resizable.js';
import '../../../../base/common/lifecycle.js';
import '../../../browser/editorBrowser.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/position.js';
import '../../../../base/browser/dom.js';
define(
			de[2726],
			he([1, 0, 930, 3, 56, 38, 48, 7]),
			function (ce /*require*/,
 e /*exports*/,
 t /*resizable*/,
 i /*lifecycle*/,
 w /*editorBrowser*/,
 E /*editorOptions*/,
 C /*position*/,
 d /*dom*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$UDb = void 0),
					(d = mt(d));
				const m = 30,
					r = 24;
				class u extends i.$1c {
					constructor(h, c = new d.$pgb(10, 10)) {
						super(),
							(this.f = h),
							(this.allowEditorOverflow = !0),
							(this.suppressMouseDown = !1),
							(this.a = this.D(new t.$dpb())),
							(this.b = null),
							(this.c = !1),
							(this.a.domNode.style.position = "absolute"),
							(this.a.minSize = d.$pgb.lift(c)),
							this.a.layout(c.height, c.width),
							this.a.enableSashes(!0, !0, !0, !0),
							this.D(
								this.a.onDidResize((n) => {
									this.m(new d.$pgb(n.dimension.width, n.dimension.height)),
										n.done && (this.c = !1);
								}),
							),
							this.D(
								this.a.onDidWillResize(() => {
									this.c = !0;
								}),
							);
					}
					get isResizing() {
						return this.c;
					}
					getDomNode() {
						return this.a.domNode;
					}
					getPosition() {
						return this.b;
					}
					get position() {
						return this.b?.position ? C.$hL.lift(this.b.position) : void 0;
					}
					g(h) {
						const c = this.f.getDomNode(),
							n = this.f.getScrolledVisiblePosition(h);
						return !c || !n ? void 0 : d.$tgb(c).top + n.top - m;
					}
					h(h) {
						const c = this.f.getDomNode(),
							n = this.f.getScrolledVisiblePosition(h);
						if (!c || !n) return;
						const g = d.$tgb(c),
							p = d.$ogb(c.ownerDocument.body),
							o = g.top + n.top + n.height;
						return p.height - o - r;
					}
					j(h, c) {
						const n = Math.min(this.h(c) ?? 1 / 0, h),
							g = Math.min(this.g(c) ?? 1 / 0, h),
							p = Math.min(Math.max(g, n), h),
							o = Math.min(h, p);
						let f;
						return (
							this.f.getOption(E.EditorOption.hover).above
								? (f =
										o <= g
											? w.ContentWidgetPositionPreference.ABOVE
											: w.ContentWidgetPositionPreference.BELOW)
								: (f =
										o <= n
											? w.ContentWidgetPositionPreference.BELOW
											: w.ContentWidgetPositionPreference.ABOVE),
							f === w.ContentWidgetPositionPreference.ABOVE
								? this.a.enableSashes(!0, !0, !1, !1)
								: this.a.enableSashes(!1, !0, !0, !1),
							f
						);
					}
					m(h) {
						this.a.layout(h.height, h.width);
					}
				}
				e.$UDb = u;
			},
		),
		