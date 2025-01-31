import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../nls.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../../terminal/browser/terminalActions.js';
import '../../../terminal/browser/terminalExtensions.js';
import './terminalStickyScrollContribution.js';
import '../common/terminalStickyScrollConfiguration.js';
import '../../../../../css!vs/workbench/contrib/terminalContrib/stickyScroll/browser/media/stickyScroll.js';
import './terminalStickyScrollColorRegistry.js';
define(
			de[4386],
			he([1, 0, 4, 11, 10, 8, 363, 378, 2004, 808, 1144, 1767]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*actions*/,
 w /*configuration*/,
 E /*contextkey*/,
 C /*terminalActions*/,
 d /*terminalExtensions*/,
 m /*terminalStickyScrollContribution*/,
 r /*terminalStickyScrollConfiguration*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, d.$qLc)(m.$2Vc.ID, m.$2Vc, !0);
				var u;
				(function (a) {
					a.ToggleStickyScroll = "workbench.action.terminal.toggleStickyScroll";
				})(u || (u = {})),
					(0, C.$EUc)({
						id: u.ToggleStickyScroll,
						title: (0, t.localize2)(10569, "Toggle Sticky Scroll"),
						toggled: {
							condition: E.$Kj.equals(
								`config.${r.TerminalStickyScrollSettingId.Enabled}`,
								!0,
							),
							title: (0, t.localize)(10567, null),
							mnemonicTitle: (0, t.localize)(10568, null),
						},
						run: (a, h) => {
							const c = h.get(w.$gj),
								n = !c.getValue(r.TerminalStickyScrollSettingId.Enabled);
							return c.updateValue(r.TerminalStickyScrollSettingId.Enabled, n);
						},
						menu: [{ id: i.$XX.TerminalStickyScrollContext }],
					});
			},
		)
