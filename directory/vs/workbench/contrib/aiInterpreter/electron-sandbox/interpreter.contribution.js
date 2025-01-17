import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/extensions.js';
import './interpreterService.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../base/common/constants.js';
import './interpreterActionService.js';
import '../browser/interpreterService.js';
import '../../aichat/browser/chatDataService.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../aichat/browser/aichat.js';
define(
			de[3986],
			he([1, 0, 20, 3942, 11, 58, 3985, 1230, 337, 27, 43, 8, 418]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				class c extends w.$3X {
					constructor() {
						super({ id: E.$sX, title: { value: "", original: "" }, f1: !1 });
					}
					async run(g, p, ...o) {
						return g.get(C.$mdd).takeInterpreterAction(p);
					}
				}
				(0, w.$4X)(c),
					m.$lgc.registerAction((n, g) => {
						class p extends w.$3X {
							constructor() {
								super({
									id: E.$tX,
									title: {
										value: "Retry Last Interpreter Step",
										original: "Retry Last Interpreter Step",
									},
									f1: !1,
									keybinding: {
										primary: r.KeyMod.CtrlCmd | r.KeyCode.KeyU,
										weight: u.KeybindingWeight.ExternalExtension + 10,
										when: a.$Kj.and(
											a.$Kj.or(
												a.$Kj.equals("view", h.AIChatConstants.CHAT_VIEW_ID),
												h.$tgc.isEqualTo(!0),
												a.$Kj.function(() => {
													const f = g.getReactiveCurrentChat();
													return (
														f?.interpreterData !== void 0 &&
														f?.bubbles.at(-1)?.type === "ai"
													);
												}),
											),
											a.$Kj.function(() => {
												const f = g.getReactiveCurrentChat();
												return (
													f?.interpreterData !== void 0 && f?.bubbles.length > 1
												);
											}),
										),
									},
								});
							}
							async run(f, b, s, l, ...y) {
								f.get(d.$vcc).openRetry(b, s, l);
							}
						}
						(0, w.$4X)(p);
					}),
					m.$lgc.registerAction((n, g) => {
						class p extends w.$3X {
							constructor() {
								super({
									id: E.$uX,
									title: {
										value: "Execute Interpreter",
										original: "Execute Interpreter",
									},
									f1: !1,
									keybinding: {
										primary: r.KeyMod.CtrlCmd | r.KeyCode.Enter,
										weight: u.KeybindingWeight.ExternalExtension + 10,
										when: a.$Kj.and(
											a.$Kj.true(),
											a.$Kj.function(() => {
												const f = g.getReactiveCurrentChat(),
													b = f?.bubbles[f.bubbles.length - 1];
												return (
													b?.type === "ai" &&
													b.interpreterModeCells !== void 0 &&
													b.interpreterModeCells[
														b.interpreterModeCells.length - 1
													].status === "pending"
												);
											}),
										),
									},
								});
							}
							async run(f, b, ...s) {
								f.get(d.$vcc).executeAndContinue(b);
							}
						}
						(0, w.$4X)(p);
					}),
					(0, t.$lK)(d.$vcc, i.$ldd, t.InstantiationType.Delayed),
					(0, t.$lK)(C.$mdd, C.$ndd, t.InstantiationType.Delayed),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: E.$wX,
									title: {
										value: "Interpreter Mode: Change Kernel",
										original: "Interpreter Mode: Change Kernel",
									},
									f1: !0,
								});
							}
							async run(n, ...g) {
								await n.get(d.$vcc).changeKernel();
							}
						},
					);
			},
		),
		