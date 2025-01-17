import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../common/debug.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../common/theme.js';
import '../../../../base/common/lifecycle.js';
import '../../../services/statusbar/browser/statusbar.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/layout/browser/layoutService.js';
define(
			de[3630],
			he([1, 0, 4, 51, 112, 25, 123, 3, 166, 10, 180]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$cRc = e.$bRc = e.$aRc = e.$_Qc = e.$$Qc = void 0),
					(e.$dRc = h),
					(e.$$Qc = (0, i.$wP)(
						"statusBar.debuggingBackground",
						{
							dark: "#CC6633",
							light: "#CC6633",
							hcDark: "#BA592C",
							hcLight: "#B5200D",
						},
						(0, t.localize)(5739, null),
					)),
					(e.$_Qc = (0, i.$wP)(
						"statusBar.debuggingForeground",
						{ dark: C.$IFb, light: C.$IFb, hcDark: C.$IFb, hcLight: "#FFFFFF" },
						(0, t.localize)(5740, null),
					)),
					(e.$aRc = (0, i.$wP)(
						"statusBar.debuggingBorder",
						C.$MFb,
						(0, t.localize)(5741, null),
					)),
					(e.$bRc = (0, i.$wP)(
						"commandCenter.debuggingBackground",
						(0, i.$BP)(e.$$Qc, 0.258),
						(0, t.localize)(5742, null),
						!0,
					));
				let a = class {
					set c(n) {
						n !== !!this.b &&
							(n
								? (this.b = this.g.overrideStyle({
										priority: 10,
										foreground: e.$_Qc,
										background: e.$$Qc,
										border: e.$aRc,
									}))
								: (this.b.dispose(), (this.b = void 0)));
					}
					constructor(n, g, p, o, f) {
						(this.d = n),
							(this.f = g),
							(this.g = p),
							(this.h = o),
							(this.i = f),
							(this.a = new d.$Zc()),
							this.d.onDidChangeState(this.j, this, this.a),
							this.f.onDidChangeWorkbenchState(this.j, this, this.a),
							this.i.onDidChangeConfiguration(
								(b) => {
									(b.affectsConfiguration("debug.enableStatusBarColor") ||
										b.affectsConfiguration("debug.toolBarLocation")) &&
										this.j();
								},
								void 0,
								this.a,
							),
							this.j();
					}
					j() {
						const n = this.i.getValue("debug"),
							g = h(this.d.state, this.d.getModel().getSessions());
						n.enableStatusBarColor ? (this.c = g) : (this.c = !1);
						const p = n.toolBarLocation === "commandCenter";
						this.h.mainContainer.style.setProperty(
							(0, i.$qP)(C.$UGb),
							p && g ? (0, i.$rP)(e.$bRc) : "",
						);
					}
					dispose() {
						this.b?.dispose(), this.a.dispose();
					}
				};
				(e.$cRc = a),
					(e.$cRc = a =
						Ne(
							[
								j(0, w.$75),
								j(1, E.$Vi),
								j(2, m.$d6b),
								j(3, u.$jEb),
								j(4, r.$gj),
							],
							a,
						));
				function h(c, n) {
					return !(
						c === w.State.Inactive ||
						c === w.State.Initializing ||
						n.every((g) => g.suppressDebugStatusbar || g.configuration?.noDebug)
					);
				}
			},
		),
		