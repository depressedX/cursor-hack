import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../browser/inlineChatActions.js';
import '../../../../base/common/async.js';
import '../../../../editor/common/editorContextKeys.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../chat/electron-sandbox/actions/voiceChatActions.js';
import '../common/inlineChat.js';
import '../../speech/common/speechService.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
define(
			de[4379],
			he([1, 0, 27, 8, 43, 1061, 15, 71, 31, 39, 2005, 257, 511, 4, 10]),
			function (ce /*require*/,
 e /*exports*/,
 t /*keyCodes*/,
 i /*contextkey*/,
 w /*keybindingsRegistry*/,
 E /*inlineChatActions*/,
 C /*async*/,
 d /*editorContextKeys*/,
 m /*commands*/,
 r /*keybinding*/,
 u /*voiceChatActions*/,
 a /*inlineChat*/,
 h /*speechService*/,
 c /*nls*/,
 n /*configuration*/) {
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
		