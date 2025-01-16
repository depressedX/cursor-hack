define(
			de[4381],
			he([1, 0, 4, 178, 39, 130, 107, 692, 867]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6Vc = void 0),
					(e.$7Vc = u);
				class r {
					constructor() {
						(this.priority = 110),
							(this.name = "terminalChat"),
							(this.when = d.TerminalChatContextKeys.focused),
							(this.type = i.AccessibleViewType.Help);
					}
					getProvider(h) {
						const n = h.get(C.$iIb).activeInstance;
						if (!n) return;
						const g = u(h);
						return new i.$ILb(
							i.AccessibleViewProviderId.TerminalChat,
							{ type: i.AccessibleViewType.Help },
							() => g,
							() => m.$4Vc.get(n)?.focus(),
							E.AccessibilityVerbositySettingId.TerminalChat,
						);
					}
				}
				e.$6Vc = r;
				function u(a) {
					const h = a.get(w.$uZ),
						c = [],
						n = h
							.lookupKeybinding("editor.action.accessibleView")
							?.getAriaLabel(),
						g = h
							.lookupKeybinding(d.TerminalChatCommandId.RunCommand)
							?.getAriaLabel(),
						p = h
							.lookupKeybinding(d.TerminalChatCommandId.InsertCommand)
							?.getAriaLabel(),
						o = h
							.lookupKeybinding(d.TerminalChatCommandId.MakeRequest)
							?.getAriaLabel(),
						f = h
							.lookupKeybinding(d.TerminalChatCommandId.Start)
							?.getAriaLabel(),
						b = h
							.lookupKeybinding(d.TerminalChatCommandId.FocusResponse)
							?.getAriaLabel(),
						s = h
							.lookupKeybinding(d.TerminalChatCommandId.FocusInput)
							?.getAriaLabel();
					return (
						c.push((0, t.localize)(10463, null)),
						c.push((0, t.localize)(10464, null, f)),
						c.push(
							o
								? (0, t.localize)(10465, null, o)
								: (0, t.localize)(10466, null),
						),
						c.push(
							n
								? (0, t.localize)(10467, null, n)
								: (0, t.localize)(10468, null),
						),
						c.push(
							b
								? (0, t.localize)(10469, null, b)
								: (0, t.localize)(10470, null),
						),
						c.push(
							s
								? (0, t.localize)(10471, null, s)
								: (0, t.localize)(10472, null),
						),
						c.push(
							g
								? (0, t.localize)(10473, null, g)
								: (0, t.localize)(10474, null),
						),
						c.push(
							p
								? (0, t.localize)(10475, null, p)
								: (0, t.localize)(10476, null),
						),
						c.push((0, t.localize)(10477, null)),
						c.push((0, t.localize)(10478, null)),
						c.join(`
`)
					);
				}
			},
		),
		