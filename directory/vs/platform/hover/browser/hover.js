import '../../../../require.js';
import '../../../../exports.js';
import '../../instantiation/common/instantiation.js';
import '../../../base/common/lifecycle.js';
import '../../configuration/common/configuration.js';
import '../../../base/browser/dom.js';
import '../../../base/common/keyCodes.js';
define(
			de[72],
			he([1, 0, 5, 3, 10, 7, 27]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Wyb = e.$Vyb = e.$Uyb = void 0),
					(e.$Uyb = (0, t.$Mi)("hoverService"));
				let d = class extends i.$1c {
					get delay() {
						return this.y() ? 0 : this.m;
					}
					constructor(r, u, a = {}, h, c) {
						super(),
							(this.placement = r),
							(this.q = u),
							(this.t = a),
							(this.u = h),
							(this.w = c),
							(this.c = 0),
							(this.f = 200),
							(this.n = this.D(new i.$Zc())),
							(this.m = this.u.getValue("workbench.hover.delay")),
							this.D(
								this.u.onDidChangeConfiguration((n) => {
									n.affectsConfiguration("workbench.hover.delay") &&
										(this.m = this.u.getValue("workbench.hover.delay"));
								}),
							);
					}
					showHover(r, u) {
						const a = typeof this.t == "function" ? this.t(r, u) : this.t;
						this.n.clear();
						const h = (0, E.$Ygb)(r.target)
							? [r.target]
							: r.target.targetElements;
						for (const n of h)
							this.n.add(
								(0, E.$$fb)(n, "keydown", (g) => {
									g.equals(C.KeyCode.Escape) && this.w.hideHover();
								}),
							);
						const c = (0, E.$Ygb)(r.content) ? void 0 : r.content.toString();
						return this.w.showHover(
							{
								...r,
								...a,
								persistence: { hideOnKeyDown: !0, ...a.persistence },
								id: c,
								appearance: {
									...r.appearance,
									compact: !0,
									skipFadeInAnimation: this.y(),
									...a.appearance,
								},
							},
							u,
						);
					}
					y() {
						return this.q && Date.now() - this.c < this.f;
					}
					setInstantHoverTimeLimit(r) {
						if (!this.q) throw new Error("Instant hover is not enabled");
						this.f = r;
					}
					onDidHideHover() {
						this.n.clear(), this.q && (this.c = Date.now());
					}
				};
				(e.$Vyb = d),
					(e.$Vyb = d = Ne([j(3, w.$gj), j(4, e.$Uyb)], d)),
					(e.$Wyb = {
						showHover: function () {
							throw new Error("Native hover function not implemented.");
						},
						delay: 0,
						showNativeHover: !0,
					});
			},
		),
		