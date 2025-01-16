define(
			de[4386],
			he([1, 0, 4, 11, 10, 8, 363, 378, 2004, 808, 1144, 1767]),
			function (ce, e, t, i, w, E, C, d, m, r) {
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
		),
		