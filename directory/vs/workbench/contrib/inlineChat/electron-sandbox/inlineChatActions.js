define(
			de[4379],
			he([1, 0, 27, 8, 43, 1061, 15, 71, 31, 39, 2005, 257, 511, 4, 10]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6gd = void 0);
				class g extends E.$8Ic {
					constructor() {
						super({
							id: "inlineChat.holdForSpeech",
							precondition: i.$Kj.and(h.$W7, a.$WKb),
							title: (0, c.localize2)(7152, "Hold for Speech"),
							keybinding: {
								when: d.EditorContextKeys.textInputFocus,
								weight: w.KeybindingWeight.WorkbenchContrib,
								primary: t.KeyMod.CtrlCmd | t.KeyCode.KeyI,
							},
						});
					}
					runInlineChatCommand(f, b, s, ...l) {
						p(f, b, this);
					}
				}
				e.$6gd = g;
				function p(o, f, b) {
					const s = o.get(n.$gj),
						l = o.get(h.$V7),
						y = o.get(r.$uZ),
						$ = o.get(m.$ek);
					if (
						!s.getValue(
							a.InlineChatConfigKeys.HoldToSpeech || !l.hasSpeechProvider,
						)
					)
						return;
					const v = y.enableKeybindingHoldMode(b.desc.id);
					if (!v) return;
					let S = !1;
					const I = (0, C.$Oh)(() => {
						$.executeCommand(u.$Vgd.ID, { voice: { disableTimeout: !0 } }),
							(S = !0);
					}, u.$Qgd);
					v.finally(() => {
						S &&
							$.executeCommand(u.$Wgd.ID).finally(() => {
								f.acceptInput();
							}),
							I.dispose();
					});
				}
				(0, E.$5Ic)(p);
			},
		),
		