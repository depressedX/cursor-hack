define(de[4380], he([1, 0, 11, 4379]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (0, t.$4X)(i.$6gd);
		}),
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
		define(
			de[4383],
			he([1, 0, 14, 27, 4, 8, 43, 1061, 257, 107, 363, 237, 692, 867]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, u.$HUc)({
						id: h.TerminalChatCommandId.Start,
						title: (0, w.localize2)(10479, "Start in Terminal"),
						keybinding: {
							primary: i.KeyMod.CtrlCmd | i.KeyCode.KeyI,
							when: E.$Kj.and(a.TerminalContextKeys.focusInAny),
							weight: C.KeybindingWeight.ExternalExtension + 1,
						},
						f1: !0,
						category: d.$8Ic.category,
						precondition: E.$Kj.and(
							E.$Kj.or(
								a.TerminalContextKeys.processSupported,
								a.TerminalContextKeys.terminalHasBeenCreated,
							),
							h.TerminalChatContextKeys.hasChatAgent,
						),
						run: (n, g, p, o) => {
							if ((0, r.$nIb)(p)) return;
							const f = c.$4Vc.activeChatWidget || c.$4Vc.get(p);
							o &&
								((o = typeof o == "string" ? { query: o } : o),
								typeof o == "object" &&
									o !== null &&
									"query" in o &&
									typeof o.query == "string" &&
									(f?.updateInput(o.query, !1),
									("isPartialQuery" in o && o.isPartialQuery) ||
										f?.acceptInput())),
								f?.reveal();
						},
					}),
					(0, u.$HUc)({
						id: h.TerminalChatCommandId.Close,
						title: (0, w.localize2)(10480, "Close Chat"),
						keybinding: {
							primary: i.KeyCode.Escape,
							secondary: [i.KeyMod.Shift | i.KeyCode.Escape],
							when: E.$Kj.and(
								h.TerminalChatContextKeys.focused,
								h.TerminalChatContextKeys.visible,
							),
							weight: C.KeybindingWeight.WorkbenchContrib,
						},
						icon: t.$ak.close,
						menu: { id: h.$VVc, group: "navigation", order: 2 },
						f1: !0,
						precondition: E.$Kj.and(
							E.$Kj.and(
								h.TerminalChatContextKeys.focused,
								h.TerminalChatContextKeys.visible,
							),
						),
						run: (n, g, p) => {
							if ((0, r.$nIb)(p)) return;
							(c.$4Vc.activeChatWidget || c.$4Vc.get(p))?.clear();
						},
					}),
					(0, u.$HUc)({
						id: h.TerminalChatCommandId.FocusResponse,
						title: (0, w.localize2)(10481, "Focus Terminal Response"),
						keybinding: {
							primary: i.KeyMod.CtrlCmd | i.KeyCode.DownArrow,
							when: h.TerminalChatContextKeys.focused,
							weight: C.KeybindingWeight.WorkbenchContrib,
						},
						f1: !0,
						category: d.$8Ic.category,
						precondition: E.$Kj.and(h.TerminalChatContextKeys.focused),
						run: (n, g, p) => {
							if ((0, r.$nIb)(p)) return;
							(
								c.$4Vc.activeChatWidget || c.$4Vc.get(p)
							)?.chatWidget?.inlineChatWidget.chatWidget.focusLastMessage();
						},
					}),
					(0, u.$HUc)({
						id: h.TerminalChatCommandId.FocusInput,
						title: (0, w.localize2)(10482, "Focus Terminal Input"),
						keybinding: {
							primary: i.KeyMod.CtrlCmd | i.KeyCode.UpArrow,
							secondary: [i.KeyMod.CtrlCmd | i.KeyCode.KeyI],
							when: E.$Kj.and(
								h.TerminalChatContextKeys.focused,
								m.$XKb.toNegated(),
							),
							weight: C.KeybindingWeight.WorkbenchContrib,
						},
						f1: !0,
						category: d.$8Ic.category,
						precondition: E.$Kj.and(h.TerminalChatContextKeys.focused),
						run: (n, g, p) => {
							if ((0, r.$nIb)(p)) return;
							(c.$4Vc.activeChatWidget || c.$4Vc.get(p))?.chatWidget?.focus();
						},
					}),
					(0, u.$HUc)({
						id: h.TerminalChatCommandId.Discard,
						title: (0, w.localize2)(10483, "Discard"),
						metadata: {
							description: (0, w.localize2)(
								10484,
								"Discards the terminal current chat response, hide the chat widget, and clear the chat input.",
							),
						},
						icon: t.$ak.discard,
						menu: {
							id: h.$WVc,
							group: "0_main",
							order: 2,
							when: E.$Kj.and(
								h.TerminalChatContextKeys.focused,
								h.TerminalChatContextKeys.responseContainsCodeBlock,
							),
						},
						f1: !0,
						precondition: E.$Kj.and(
							E.$Kj.or(
								a.TerminalContextKeys.processSupported,
								a.TerminalContextKeys.terminalHasBeenCreated,
							),
							h.TerminalChatContextKeys.focused,
							h.TerminalChatContextKeys.responseContainsCodeBlock,
						),
						run: (n, g, p) => {
							if ((0, r.$nIb)(p)) return;
							(c.$4Vc.activeChatWidget || c.$4Vc.get(p))?.clear();
						},
					}),
					(0, u.$HUc)({
						id: h.TerminalChatCommandId.RunCommand,
						title: (0, w.localize2)(10485, "Run Chat Command"),
						shortTitle: (0, w.localize2)(10486, "Run"),
						precondition: E.$Kj.and(
							E.$Kj.or(
								a.TerminalContextKeys.processSupported,
								a.TerminalContextKeys.terminalHasBeenCreated,
							),
							h.TerminalChatContextKeys.requestActive.negate(),
							h.TerminalChatContextKeys.responseContainsCodeBlock,
							h.TerminalChatContextKeys.responseContainsMultipleCodeBlocks.negate(),
						),
						icon: t.$ak.play,
						keybinding: {
							when: h.TerminalChatContextKeys.requestActive.negate(),
							weight: C.KeybindingWeight.WorkbenchContrib,
							primary: i.KeyMod.CtrlCmd | i.KeyCode.Enter,
						},
						menu: {
							id: h.$WVc,
							group: "0_main",
							order: 0,
							when: E.$Kj.and(
								h.TerminalChatContextKeys.responseContainsCodeBlock,
								h.TerminalChatContextKeys.responseContainsMultipleCodeBlocks.negate(),
								h.TerminalChatContextKeys.requestActive.negate(),
							),
						},
						run: (n, g, p) => {
							if ((0, r.$nIb)(p)) return;
							(c.$4Vc.activeChatWidget || c.$4Vc.get(p))?.acceptCommand(!0);
						},
					}),
					(0, u.$HUc)({
						id: h.TerminalChatCommandId.RunFirstCommand,
						title: (0, w.localize2)(10487, "Run First Chat Command"),
						shortTitle: (0, w.localize2)(10488, "Run First"),
						precondition: E.$Kj.and(
							E.$Kj.or(
								a.TerminalContextKeys.processSupported,
								a.TerminalContextKeys.terminalHasBeenCreated,
							),
							h.TerminalChatContextKeys.requestActive.negate(),
							h.TerminalChatContextKeys.responseContainsMultipleCodeBlocks,
						),
						icon: t.$ak.play,
						keybinding: {
							when: h.TerminalChatContextKeys.requestActive.negate(),
							weight: C.KeybindingWeight.WorkbenchContrib,
							primary: i.KeyMod.CtrlCmd | i.KeyCode.Enter,
						},
						menu: {
							id: h.$WVc,
							group: "0_main",
							order: 0,
							when: E.$Kj.and(
								h.TerminalChatContextKeys.responseContainsMultipleCodeBlocks,
								h.TerminalChatContextKeys.requestActive.negate(),
							),
						},
						run: (n, g, p) => {
							if ((0, r.$nIb)(p)) return;
							(c.$4Vc.activeChatWidget || c.$4Vc.get(p))?.acceptCommand(!0);
						},
					}),
					(0, u.$HUc)({
						id: h.TerminalChatCommandId.InsertCommand,
						title: (0, w.localize2)(10489, "Insert Chat Command"),
						shortTitle: (0, w.localize2)(10490, "Insert"),
						precondition: E.$Kj.and(
							E.$Kj.or(
								a.TerminalContextKeys.processSupported,
								a.TerminalContextKeys.terminalHasBeenCreated,
							),
							h.TerminalChatContextKeys.requestActive.negate(),
							h.TerminalChatContextKeys.responseContainsCodeBlock,
							h.TerminalChatContextKeys.responseContainsMultipleCodeBlocks.negate(),
						),
						keybinding: {
							when: h.TerminalChatContextKeys.requestActive.negate(),
							weight: C.KeybindingWeight.WorkbenchContrib,
							primary: i.KeyMod.Alt | i.KeyCode.Enter,
							secondary: [i.KeyMod.CtrlCmd | i.KeyCode.Enter | i.KeyMod.Alt],
						},
						menu: {
							id: h.$WVc,
							group: "0_main",
							order: 1,
							when: E.$Kj.and(
								h.TerminalChatContextKeys.responseContainsCodeBlock,
								h.TerminalChatContextKeys.responseContainsMultipleCodeBlocks.negate(),
								h.TerminalChatContextKeys.requestActive.negate(),
							),
						},
						run: (n, g, p) => {
							if ((0, r.$nIb)(p)) return;
							(c.$4Vc.activeChatWidget || c.$4Vc.get(p))?.acceptCommand(!1);
						},
					}),
					(0, u.$HUc)({
						id: h.TerminalChatCommandId.InsertFirstCommand,
						title: (0, w.localize2)(10491, "Insert First Chat Command"),
						shortTitle: (0, w.localize2)(10492, "Insert First"),
						precondition: E.$Kj.and(
							E.$Kj.or(
								a.TerminalContextKeys.processSupported,
								a.TerminalContextKeys.terminalHasBeenCreated,
							),
							h.TerminalChatContextKeys.requestActive.negate(),
							h.TerminalChatContextKeys.responseContainsMultipleCodeBlocks,
						),
						keybinding: {
							when: h.TerminalChatContextKeys.requestActive.negate(),
							weight: C.KeybindingWeight.WorkbenchContrib,
							primary: i.KeyMod.Alt | i.KeyCode.Enter,
							secondary: [i.KeyMod.CtrlCmd | i.KeyCode.Enter | i.KeyMod.Alt],
						},
						menu: {
							id: h.$WVc,
							group: "0_main",
							order: 1,
							when: E.$Kj.and(
								h.TerminalChatContextKeys.responseContainsMultipleCodeBlocks,
								h.TerminalChatContextKeys.requestActive.negate(),
							),
						},
						run: (n, g, p) => {
							if ((0, r.$nIb)(p)) return;
							(c.$4Vc.activeChatWidget || c.$4Vc.get(p))?.acceptCommand(!1);
						},
					}),
					(0, u.$HUc)({
						id: h.TerminalChatCommandId.ViewInChat,
						title: (0, w.localize2)(10493, "View in Chat"),
						precondition: E.$Kj.and(
							E.$Kj.or(
								a.TerminalContextKeys.processSupported,
								a.TerminalContextKeys.terminalHasBeenCreated,
							),
							h.TerminalChatContextKeys.requestActive.negate(),
						),
						icon: t.$ak.commentDiscussion,
						menu: [
							{
								id: h.$WVc,
								group: "0_main",
								order: 1,
								when: E.$Kj.and(
									h.TerminalChatContextKeys.responseContainsCodeBlock,
									h.TerminalChatContextKeys.requestActive.negate(),
								),
							},
							{
								id: h.$VVc,
								group: "navigation",
								order: 1,
								when: E.$Kj.and(
									m.$1Kb.negate(),
									h.TerminalChatContextKeys.responseContainsCodeBlock,
									h.TerminalChatContextKeys.requestActive.negate(),
								),
							},
						],
						run: (n, g, p) => {
							if ((0, r.$nIb)(p)) return;
							(c.$4Vc.activeChatWidget || c.$4Vc.get(p))?.viewInChat();
						},
					}),
					(0, u.$HUc)({
						id: h.TerminalChatCommandId.MakeRequest,
						title: (0, w.localize2)(10494, "Make Chat Request"),
						precondition: E.$Kj.and(
							E.$Kj.or(
								a.TerminalContextKeys.processSupported,
								a.TerminalContextKeys.terminalHasBeenCreated,
							),
							h.TerminalChatContextKeys.requestActive.negate(),
							m.$1Kb.negate(),
						),
						icon: t.$ak.send,
						keybinding: {
							when: E.$Kj.and(
								h.TerminalChatContextKeys.focused,
								h.TerminalChatContextKeys.requestActive.negate(),
							),
							weight: C.KeybindingWeight.WorkbenchContrib,
							primary: i.KeyCode.Enter,
						},
						menu: {
							id: h.$UVc,
							group: "navigation",
							order: 1,
							when: h.TerminalChatContextKeys.requestActive.negate(),
						},
						run: (n, g, p) => {
							if ((0, r.$nIb)(p)) return;
							(c.$4Vc.activeChatWidget || c.$4Vc.get(p))?.acceptInput();
						},
					}),
					(0, u.$HUc)({
						id: h.TerminalChatCommandId.Cancel,
						title: (0, w.localize2)(10495, "Cancel Chat"),
						precondition: E.$Kj.and(h.TerminalChatContextKeys.requestActive),
						icon: t.$ak.debugStop,
						menu: {
							id: h.$UVc,
							group: "navigation",
							when: h.TerminalChatContextKeys.requestActive,
						},
						run: (n, g, p) => {
							if ((0, r.$nIb)(p)) return;
							(c.$4Vc.activeChatWidget || c.$4Vc.get(p))?.cancel();
						},
					}),
					(0, u.$HUc)({
						id: h.TerminalChatCommandId.PreviousFromHistory,
						title: (0, w.localize2)(10496, "Previous From History"),
						precondition: h.TerminalChatContextKeys.focused,
						keybinding: {
							when: h.TerminalChatContextKeys.focused,
							weight: C.KeybindingWeight.WorkbenchContrib,
							primary: i.KeyCode.UpArrow,
						},
						run: (n, g, p) => {
							if ((0, r.$nIb)(p)) return;
							(c.$4Vc.activeChatWidget || c.$4Vc.get(p))?.populateHistory(!0);
						},
					}),
					(0, u.$HUc)({
						id: h.TerminalChatCommandId.NextFromHistory,
						title: (0, w.localize2)(10497, "Next From History"),
						precondition: h.TerminalChatContextKeys.focused,
						keybinding: {
							when: h.TerminalChatContextKeys.focused,
							weight: C.KeybindingWeight.WorkbenchContrib,
							primary: i.KeyCode.DownArrow,
						},
						run: (n, g, p) => {
							if ((0, r.$nIb)(p)) return;
							(c.$4Vc.activeChatWidget || c.$4Vc.get(p))?.populateHistory(!1);
						},
					});
			},
		),
		