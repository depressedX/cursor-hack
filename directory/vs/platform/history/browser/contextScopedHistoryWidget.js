import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/browser/ui/findinput/findInput.js';
import '../../../base/browser/ui/findinput/replaceInput.js';
import '../../../base/browser/ui/inputbox/inputBox.js';
import '../../../base/common/keyCodes.js';
import '../../contextkey/common/contextkey.js';
import '../../keybinding/common/keybindingsRegistry.js';
import '../../../nls.js';
import '../../../base/common/lifecycle.js';
import '../../../base/browser/dom.js';
define(
			de[413],
			he([1, 0, 932, 2687, 292, 27, 8, 43, 4, 3, 7]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$XCb = e.$WCb = e.$VCb = e.$TCb = void 0),
					(e.$UCb = p),
					(e.$TCb = new C.$5j(
						"suggestWidgetVisible",
						!1,
						(0, m.localize)(1920, null),
					));
				const a = "historyNavigationWidgetFocus",
					h = "historyNavigationForwardsEnabled",
					c = "historyNavigationBackwardsEnabled";
				let n;
				const g = [];
				function p(s, l) {
					if (g.includes(l))
						throw new Error("Cannot register the same widget multiple times");
					g.push(l);
					const y = new r.$Zc(),
						$ = new C.$5j(a, !1).bindTo(s),
						v = new C.$5j(h, !0).bindTo(s),
						S = new C.$5j(c, !0).bindTo(s),
						I = () => {
							$.set(!0), (n = l);
						},
						T = () => {
							$.set(!1), n === l && (n = void 0);
						};
					return (
						(0, u.$Kgb)(l.element) && I(),
						y.add(l.onDidFocus(() => I())),
						y.add(l.onDidBlur(() => T())),
						y.add(
							(0, r.$Yc)(() => {
								g.splice(g.indexOf(l), 1), T();
							}),
						),
						{
							historyNavigationForwardsEnablement: v,
							historyNavigationBackwardsEnablement: S,
							dispose() {
								y.dispose();
							},
						}
					);
				}
				let o = class extends w.$Nob {
					constructor(l, y, $, v) {
						super(l, y, $);
						const S = this.D(v.createScoped(this.element));
						this.D(p(S, this));
					}
				};
				(e.$VCb = o), (e.$VCb = o = Ne([j(3, C.$6j)], o));
				let f = class extends t.$Uob {
					constructor(l, y, $, v) {
						super(l, y, $);
						const S = this.D(v.createScoped(this.inputBox.element));
						this.D(p(S, this.inputBox));
					}
				};
				(e.$WCb = f), (e.$WCb = f = Ne([j(3, C.$6j)], f));
				let b = class extends i.$Vob {
					constructor(l, y, $, v, S = !1) {
						super(l, y, S, $);
						const I = this.D(v.createScoped(this.inputBox.element));
						this.D(p(I, this.inputBox));
					}
				};
				(e.$XCb = b),
					(e.$XCb = b = Ne([j(3, C.$6j)], b)),
					d.$TX.registerCommandAndKeybindingRule({
						id: "history.showPrevious",
						weight: d.KeybindingWeight.WorkbenchContrib,
						when: C.$Kj.and(
							C.$Kj.has(a),
							C.$Kj.equals(c, !0),
							C.$Kj.not("isComposing"),
							e.$TCb.isEqualTo(!1),
						),
						primary: E.KeyCode.UpArrow,
						secondary: [E.KeyMod.Alt | E.KeyCode.UpArrow],
						handler: (s) => {
							n?.showPreviousValue();
						},
					}),
					d.$TX.registerCommandAndKeybindingRule({
						id: "history.showNext",
						weight: d.KeybindingWeight.WorkbenchContrib,
						when: C.$Kj.and(
							C.$Kj.has(a),
							C.$Kj.equals(h, !0),
							C.$Kj.not("isComposing"),
							e.$TCb.isEqualTo(!1),
						),
						primary: E.KeyCode.DownArrow,
						secondary: [E.KeyMod.Alt | E.KeyCode.DownArrow],
						handler: (s) => {
							n?.showNextValue();
						},
					});
			},
		),
		