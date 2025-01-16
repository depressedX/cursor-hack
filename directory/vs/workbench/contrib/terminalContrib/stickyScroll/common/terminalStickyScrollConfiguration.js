define(de[808], he([1, 0, 4, 372]), function (ce, e, t, i) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.$GHb = e.TerminalStickyScrollSettingId = void 0),
			(i = xi(i));
		var w;
		(function (E) {
			(E.Enabled = "terminal.integrated.stickyScroll.enabled"),
				(E.MaxLineCount = "terminal.integrated.stickyScroll.maxLineCount");
		})(w || (e.TerminalStickyScrollSettingId = w = {})),
			(e.$GHb = {
				[w.Enabled]: {
					markdownDescription: (0, t.localize)(10576, null),
					type: "boolean",
					default: i.default.quality !== "stable",
				},
				[w.MaxLineCount]: {
					markdownDescription: (0, t.localize)(10577, null),
					type: "number",
					default: 5,
					minimum: 1,
					maximum: 10,
				},
			});
	}),
		