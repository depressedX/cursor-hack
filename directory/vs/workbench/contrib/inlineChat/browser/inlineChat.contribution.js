import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../platform/actions/common/actions.js';
import './inlineChatController.js';
import './inlineChatActions.js';
import '../common/inlineChat.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/registry/common/platform.js';
import '../../../services/lifecycle/common/lifecycle.js';
import './inlineChatNotebook.js';
import '../../../common/contributions.js';
import './inlineChatSavingServiceImpl.js';
import './inlineChatAccessibleView.js';
import './inlineChatSavingService.js';
import './inlineChatSessionService.js';
import './inlineChatSessionServiceImpl.js';
import '../../../../platform/accessibility/browser/accessibleViewRegistry.js';
import '../../chat/browser/actions/chatExecuteActions.js';
import '../../../../nls.js';
import '../../chat/common/chatContextKeys.js';
import '../../../../platform/contextkey/common/contextkey.js';
import './inlineChatAccessibilityHelp.js';
import './inlineChatCurrentLine.js';
define(
			de[4103],
			he([
				1, 0, 46, 11, 427, 1061, 257, 20, 30, 52, 4102, 55, 4085, 4083, 1733,
				798, 1893, 412, 1047, 4, 207, 8, 3557, 4084,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*editorExtensions*/,
				i /*actions*/,
				w /*inlineChatController*/,
				E /*inlineChatActions*/,
				C /*inlineChat*/,
				d /*extensions*/,
				m /*platform*/,
				r /*lifecycle*/,
				u /*inlineChatNotebook*/,
				a /*contributions*/,
				h /*inlineChatSavingServiceImpl*/,
				c /*inlineChatAccessibleView*/,
				n /*inlineChatSavingService*/,
				g /*inlineChatSessionService*/,
				p /*inlineChatSessionServiceImpl*/,
				o /*accessibleViewRegistry*/,
				f /*chatExecuteActions*/,
				b /*nls*/,
				s /*chatContextKeys*/,
				l /*contextkey*/,
				y /*inlineChatAccessibilityHelp*/,
				$ /*inlineChatCurrentLine*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(E = mt(E)),
					(0, d.$lK)(g.$zLb, p.$V1b, d.InstantiationType.Delayed),
					(0, d.$lK)(n.$X1b, h.$kJc, d.InstantiationType.Delayed),
					(0, t.$qtb)(C.$TKb, w.$Z1b, t.EditorContributionInstantiation.Eager),
					(0, t.$qtb)(
						$.$oJc.Id,
						$.$oJc,
						t.EditorContributionInstantiation.BeforeFirstInteraction,
					),
					(0, i.$4X)($.$pJc);
				const v = {
						group: "0_main",
						order: 0,
						command: { id: f.$PYb.ID, title: (0, b.localize)(7072, null) },
						when: l.$Kj.and(s.$11, C.$aLb.toNegated(), C.$YKb),
					},
					S = {
						group: "0_main",
						order: 0,
						command: { id: f.$PYb.ID, title: (0, b.localize)(7073, null) },
						when: l.$Kj.and(s.$11, C.$aLb.toNegated(), C.$YKb.toNegated()),
					};
				i.$ZX.appendMenuItem(C.$iLb, v),
					i.$ZX.appendMenuItem(C.$iLb, S),
					i.$ZX.appendMenuItem(C.$jLb, v),
					i.$ZX.appendMenuItem(C.$jLb, S);
				const I = {
					group: "0_main",
					order: 0,
					command: {
						id: f.$RYb.ID,
						title: (0, b.localize)(7074, null),
						shortTitle: (0, b.localize)(7075, null),
					},
					when: l.$Kj.and(C.$aLb),
				};
				i.$ZX.appendMenuItem(C.$jLb, I),
					(0, i.$4X)(E.$6Ic),
					(0, i.$4X)(E.$dJc),
					(0, i.$4X)(E.$eJc),
					(0, i.$4X)(E.$7Ic),
					(0, i.$4X)(E.$bJc),
					(0, i.$4X)(E.$_Ic),
					(0, i.$4X)(E.$cJc),
					(0, i.$4X)(E.$fJc),
					(0, i.$4X)(E.$gJc),
					(0, i.$4X)(E.$9Ic),
					(0, i.$4X)(E.$0Ic),
					(0, i.$4X)(E.$$Ic),
					(0, i.$4X)(E.$hJc),
					(0, i.$4X)(E.$iJc),
					(0, i.$4X)(E.$aJc),
					m.$Io
						.as(a.Extensions.Workbench)
						.registerWorkbenchContribution(u.$jJc, r.LifecyclePhase.Restored),
					(0, a.$s6)(p.$W1b.Id, p.$W1b, a.WorkbenchPhase.AfterRestored),
					o.$Whc.register(new c.$lJc()),
					o.$Whc.register(new y.$mJc());
			},
		),
		