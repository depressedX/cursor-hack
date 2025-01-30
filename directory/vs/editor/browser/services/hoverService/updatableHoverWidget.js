import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/hover/hoverWidget.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/htmlContent.js';
import '../../../../base/common/types.js';
import '../../../../nls.js';
define(
			de[2689],
			he([1, 0, 7, 160, 33, 94, 28, 4]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*hoverWidget*/,
 w /*cancellation*/,
 E /*htmlContent*/,
 C /*types*/,
 d /*nls*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nyc = void 0);
				class m {
					constructor(u, a, h) {
						(this.c = u), (this.d = a), (this.e = h);
					}
					async update(u, a, h) {
						if (
							(this.b && (this.b.dispose(!0), (this.b = void 0)),
							this.isDisposed)
						)
							return;
						let c;
						if (u === void 0 || (0, C.$lg)(u) || (0, t.$Ygb)(u)) c = u;
						else if (!(0, C.$zg)(u.markdown))
							c = u.markdown ?? u.markdownNotSupportedFallback;
						else {
							this.a || this.f((0, d.localize)(188, null), a, h),
								(this.b = new w.$Ce());
							const n = this.b.token;
							if (
								((c = await u.markdown(n)),
								c === void 0 && (c = u.markdownNotSupportedFallback),
								this.isDisposed || n.isCancellationRequested)
							)
								return;
						}
						this.f(c, a, h);
					}
					f(u, a, h) {
						const c = this.a;
						if (this.g(u)) {
							const n = {
								content: u,
								target: this.d,
								actions: h?.actions,
								linkHandler: h?.linkHandler,
								trapFocus: h?.trapFocus,
								appearance: {
									showPointer: this.c.placement === "element",
									skipFadeInAnimation: !this.e || !!c,
									showHoverHint: h?.appearance?.showHoverHint,
								},
								position: { hoverPosition: i.HoverPosition.BELOW },
							};
							this.a = this.c.showHover(n, a);
						}
						c?.dispose();
					}
					g(u) {
						return u ? ((0, E.$el)(u) ? !!u.value : !0) : !1;
					}
					get isDisposed() {
						return this.a?.isDisposed;
					}
					dispose() {
						this.a?.dispose(), this.b?.dispose(!0), (this.b = void 0);
					}
				}
				e.$nyc = m;
			},
		),
		