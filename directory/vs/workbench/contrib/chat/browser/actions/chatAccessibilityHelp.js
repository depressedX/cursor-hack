import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../nls.js';
import '../chat.js';
import '../../../../../platform/accessibility/browser/accessibleView.js';
import '../../../accessibility/browser/accessibilityConfiguration.js';
import '../../../../../editor/browser/widget/diffEditor/commands.js';
import '../../../inlineChat/common/inlineChat.js';
import '../../../../../editor/browser/services/codeEditorService.js';
import '../../../../../platform/contextkey/common/contextkey.js';
import '../../common/chatContextKeys.js';
import '../../common/chatAgents.js';
define(
			de[1857],
			he([1, 0, 4, 208, 178, 130, 1217, 257, 65, 8, 207, 153]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*chat*/,
 w /*accessibleView*/,
 E /*accessibilityConfiguration*/,
 C /*commands*/,
 d /*inlineChat*/,
 m /*codeEditorService*/,
 r /*contextkey*/,
 u /*chatContextKeys*/,
 a /*chatAgents*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vIc = void 0),
					(e.$wIc = c),
					(e.$xIc = n);
				class h {
					constructor() {
						(this.priority = 107),
							(this.name = "panelChat"),
							(this.type = w.AccessibleViewType.Help),
							(this.when = r.$Kj.and(
								u.$01.isEqualTo(a.ChatAgentLocation.Panel),
								r.$Kj.or(u.$41, u.$X1, u.$Y1),
							));
					}
					getProvider(p) {
						const o =
							p.get(m.$dtb).getActiveCodeEditor() ||
							p.get(m.$dtb).getFocusedCodeEditor();
						return n(p, o ?? void 0, "panelChat");
					}
				}
				e.$vIc = h;
				function c(g) {
					const p = [];
					return (
						g === "panelChat"
							? (p.push((0, t.localize)(4540, null)),
								p.push((0, t.localize)(4541, null)),
								p.push(
									(0, t.localize)(
										4542,
										null,
										"<keybinding:editor.action.accessibleView>",
									),
								),
								p.push((0, t.localize)(4543, null)),
								p.push((0, t.localize)(4544, null)),
								p.push(
									(0, t.localize)(4545, null, "<keybinding:chat.action.focus>"),
								),
								p.push(
									(0, t.localize)(
										4546,
										null,
										"<keybinding:workbench.action.chat.focusInput>",
									),
								),
								p.push(
									(0, t.localize)(
										4547,
										null,
										"<keybinding:workbench.action.chat.nextCodeBlock>",
									),
								),
								p.push(
									(0, t.localize)(
										4548,
										null,
										"<keybinding:workbench.action.chat.nextFileTree>",
									),
								),
								p.push(
									(0, t.localize)(
										4549,
										null,
										"<keybinding:workbench.action.chat.new>",
									),
								))
							: (p.push((0, t.localize)(4550, null)),
								p.push(
									(0, t.localize)(4551, null, "<keybinding:inlineChat.start>"),
								),
								p.push(
									(0, t.localize)(
										4552,
										null,
										"<keybinding:history.showPrevious>",
										"<keybinding:history.showNext>",
									),
								),
								p.push(
									(0, t.localize)(
										4553,
										null,
										"<keybinding:editor.action.accessibleView>",
									),
								),
								p.push((0, t.localize)(4554, null)),
								p.push((0, t.localize)(4555, null)),
								p.push((0, t.localize)(4556, null, C.$_yb.id)),
								p.push((0, t.localize)(4557, null))),
						p.push((0, t.localize)(4558, null)),
						p.join(`
`)
					);
				}
				function n(g, p, o) {
					const f = g.get(i.$GYb),
						b = o === "panelChat" ? f.lastFocusedWidget?.inputEditor : p;
					if (!b || !(b.getDomNode() ?? void 0)) return;
					const l = b.getPosition();
					b.getSupportedActions();
					const y = c(o);
					return new w.$ILb(
						o === "panelChat"
							? w.AccessibleViewProviderId.Chat
							: w.AccessibleViewProviderId.InlineChat,
						{ type: w.AccessibleViewType.Help },
						() => y,
						() => {
							o === "panelChat" && l
								? (b.setPosition(l), b.focus())
								: o === "inlineChat" && p?.getContribution(d.$TKb)?.focus();
						},
						o === "panelChat"
							? E.AccessibilityVerbositySettingId.Chat
							: E.AccessibilityVerbositySettingId.InlineChat,
					);
				}
			},
		),
		