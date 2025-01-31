import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../nls.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../platform/keybinding/common/keybindingsRegistry.js';
import './chatActions.js';
import '../chat.js';
import '../../common/chatAgents.js';
import '../../common/chatContextKeys.js';
import '../../common/chatParserTypes.js';
import '../../common/chatService.js';
define(
			de[1047],
			he([1, 0, 14, 27, 4, 11, 8, 43, 402, 208, 153, 207, 329, 218]),
			function (ce /*require*/,
 e /*exports*/,
 t /*codicons*/,
 i /*keyCodes*/,
 w /*nls*/,
 E /*actions*/,
 C /*contextkey*/,
 d /*keybindingsRegistry*/,
 m /*chatActions*/,
 r /*chat*/,
 u /*chatAgents*/,
 a /*chatContextKeys*/,
 h /*chatParserTypes*/,
 c /*chatService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$RYb = e.$QYb = e.$PYb = void 0),
					(e.$SYb = f);
				class n extends E.$3X {
					static {
						this.ID = "workbench.action.chat.submit";
					}
					constructor() {
						super({
							id: n.ID,
							title: (0, w.localize2)(4594, "Send"),
							f1: !1,
							category: m.$3Yb,
							icon: t.$ak.send,
							precondition: C.$Kj.and(a.$11, a.$W1.negate()),
							keybinding: {
								when: a.$31,
								primary: i.KeyCode.Enter,
								weight: d.KeybindingWeight.EditorContrib,
							},
							menu: [
								{ id: E.$XX.ChatExecuteSecondary, group: "group_1" },
								{
									id: E.$XX.ChatExecute,
									when: a.$W1.negate(),
									group: "navigation",
								},
							],
						});
					}
					run(s, ...l) {
						const y = l[0],
							$ = s.get(r.$GYb);
						(y?.widget ?? $.lastFocusedWidget)?.acceptInput(y?.inputValue);
					}
				}
				e.$PYb = n;
				class g extends E.$3X {
					static {
						this.ID = "workbench.action.chat.submitSecondaryAgent";
					}
					constructor() {
						super({
							id: g.ID,
							title: (0, w.localize2)(4595, "Submit to Secondary Agent"),
							precondition: C.$Kj.and(a.$11, a.$91.negate(), a.$W1.negate()),
							keybinding: {
								when: a.$31,
								primary: i.KeyMod.CtrlCmd | i.KeyCode.Enter,
								weight: d.KeybindingWeight.EditorContrib,
							},
							menu: { id: E.$XX.ChatExecuteSecondary, group: "group_1" },
						});
					}
					run(s, ...l) {
						const y = l[0],
							v = s.get(u.$c3).getSecondaryAgent();
						if (!v) return;
						const S = s.get(r.$GYb),
							I = y?.widget ?? S.lastFocusedWidget;
						I &&
							((0, h.$Z2)(I.parsedInput).agentPart
								? I.acceptInput()
								: ((I.lastSelectedAgent = v),
									I.acceptInputWithPrefix(`${h.$Q2}${v.name}`)));
					}
				}
				e.$QYb = g;
				class p extends E.$3X {
					constructor() {
						super({
							id: "workbench.action.chat.sendToNewChat",
							title: (0, w.localize2)(4596, "Send to New Chat"),
							precondition: C.$Kj.and(a.$W1.negate(), a.$11),
							category: m.$3Yb,
							f1: !1,
							menu: { id: E.$XX.ChatExecuteSecondary, group: "group_2" },
							keybinding: {
								weight: d.KeybindingWeight.WorkbenchContrib,
								primary: i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.Enter,
								when: a.$31,
							},
						});
					}
					async run(s, ...l) {
						const y = l[0],
							$ = s.get(r.$GYb),
							v = y?.widget ?? $.lastFocusedWidget;
						v && (v.clear(), v.acceptInput(y?.inputValue));
					}
				}
				class o extends E.$3X {
					static {
						this.ID = "workbench.action.chat.cancel";
					}
					constructor() {
						super({
							id: o.ID,
							title: (0, w.localize2)(4597, "Cancel"),
							f1: !1,
							category: m.$3Yb,
							icon: t.$ak.debugStop,
							menu: { id: E.$XX.ChatExecute, when: a.$W1, group: "navigation" },
							keybinding: {
								weight: d.KeybindingWeight.WorkbenchContrib,
								primary: i.KeyMod.CtrlCmd | i.KeyCode.Escape,
								win: { primary: i.KeyMod.Alt | i.KeyCode.Backspace },
							},
						});
					}
					run(s, ...l) {
						const y = l[0],
							$ = s.get(r.$GYb),
							v = y?.widget ?? $.lastFocusedWidget;
						if (!v) return;
						const S = s.get(c.$J2);
						v.viewModel &&
							S.cancelCurrentRequestForSession(v.viewModel.sessionId);
					}
				}
				e.$RYb = o;
				function f() {
					(0, E.$4X)(n), (0, E.$4X)(o), (0, E.$4X)(p), (0, E.$4X)(g);
				}
			},
		)
