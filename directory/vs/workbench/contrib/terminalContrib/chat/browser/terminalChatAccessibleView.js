define(
			de[4382],
			he([1, 0, 178, 130, 107, 867, 1384]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5Vc = void 0);
				class d {
					constructor() {
						(this.priority = 105),
							(this.name = "terminalInlineChat"),
							(this.type = t.AccessibleViewType.View),
							(this.when = C.TerminalChatContextKeys.focused);
					}
					getProvider(r) {
						const a =
							r.get(w.$iIb).activeInstance?.getContribution(E.$4Vc.ID) ??
							void 0;
						if (!a?.lastResponseContent) return;
						const h = a.lastResponseContent;
						return new t.$ILb(
							t.AccessibleViewProviderId.TerminalChat,
							{ type: t.AccessibleViewType.View },
							() => h,
							() => {
								a.focus();
							},
							i.AccessibilityVerbositySettingId.InlineChat,
						);
					}
				}
				e.$5Vc = d;
			},
		),
		