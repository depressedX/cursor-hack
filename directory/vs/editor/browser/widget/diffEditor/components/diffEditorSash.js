import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/ui/sash/sash.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/observable.js';
import '../../../../../base/common/observableInternal/derived.js';
define(de[1586], he([1, 0, 277, 3, 77, 319]), function (ce /*require*/,
 e /*exports*/,
 t /*sash*/,
 i /*lifecycle*/,
 w /*observable*/,
 E /*derived*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$fyb = e.$eyb = void 0);
			class C {
				resetSash() {
					this.a.set(void 0, void 0);
				}
				constructor(r, u) {
					(this.b = r),
						(this.dimensions = u),
						(this.sashLeft = (0, E.$Ud)(
							this,
							(a) => {
								const h =
									this.a.read(a) ?? this.b.splitViewDefaultRatio.read(a);
								return this.c(h, a);
							},
							(a, h) => {
								const c = this.dimensions.width.get();
								this.a.set(a / c, h);
							},
						)),
						(this.a = (0, w.observableValue)(this, void 0));
				}
				c(r, u) {
					const a = this.dimensions.width.read(u),
						h = Math.floor(this.b.splitViewDefaultRatio.read(u) * a),
						c = this.b.enableSplitViewResizing.read(u) ? Math.floor(r * a) : h,
						n = 100;
					return a <= n * 2 ? h : c < n ? n : c > a - n ? a - n : c;
				}
			}
			e.$eyb = C;
			class d extends i.$1c {
				constructor(r, u, a, h, c, n) {
					super(),
						(this.c = r),
						(this.f = u),
						(this.g = a),
						(this.h = h),
						(this.sashLeft = c),
						(this.j = n),
						(this.a = this.D(
							new t.Sash(
								this.c,
								{
									getVerticalSashTop: (g) => 0,
									getVerticalSashLeft: (g) => this.sashLeft.get(),
									getVerticalSashHeight: (g) => this.f.height.get(),
								},
								{ orientation: t.Orientation.VERTICAL },
							),
						)),
						(this.b = void 0),
						this.D(
							this.a.onDidStart(() => {
								this.b = this.sashLeft.get();
							}),
						),
						this.D(
							this.a.onDidChange((g) => {
								this.sashLeft.set(this.b + (g.currentX - g.startX), void 0);
							}),
						),
						this.D(this.a.onDidEnd(() => this.a.layout())),
						this.D(this.a.onDidReset(() => this.j())),
						this.D(
							(0, w.autorun)((g) => {
								const p = this.h.read(g);
								p && (this.a.orthogonalEndSash = p.bottom);
							}),
						),
						this.D(
							(0, w.autorun)((g) => {
								const p = this.g.read(g);
								(this.a.state = p ? t.SashState.Enabled : t.SashState.Disabled),
									this.sashLeft.read(g),
									this.f.height.read(g),
									this.a.layout();
							}),
						);
				}
			}
			e.$fyb = d;
		})
