import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/platform.js';
import '../constants.js';
import '../hooks/useComposerDataHandle.js';
import '../utils.js';
import '../../../controlCommon/browser/solid.js';
import '../../../ui/browser/dropdown/dropdownInput.js';
import '../../../ui/browser/hooks/useKeyboardShortcut.js';
define(
			de[4189],
			he([1, 0, 2, 2, 2, 2, 13, 12, 169, 177, 246, 36, 1979, 385]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerUnifiedModeSwitcher = g);
				const n = (0, t.template)("<div> toggle, <!> open");
				function g(p) {
					const { currentComposer: o } = (0, r.useComposerDataHandle)(
							() => p.composerDataHandle,
						),
						f = (0, a.$odc)(),
						b = (0, C.createMemo)(() => ` ${d.$m ? " \u2318." : " ctrl+."}`),
						s = (0, C.createMemo)(
							() => ` ${d.$m ? " \u2318\u21E7." : " ctrl+shift+."}`,
						),
						l = (0, C.createMemo)(
							() =>
								!!f.reactiveStorageService.applicationUserPersistentStorage
									.composerState.isAutoApplyEnabled,
						),
						y = (0, C.createMemo)(() => !!o().isAgentic),
						$ = (0, c.$5$b)(m.NEW_COMPOSER_CHAT_ACTION_ID),
						v = (0, c.$5$b)(m.COMPOSER_EDIT_ACTION_ID);
					return (0, w.createComponent)(h.$2bc, {
						get buttonId() {
							return (0, u.getAgenticModeToggleButtonId)(o().composerId);
						},
						onCloseIgnoresClicking: () => {
							f.composerService.focus(o().composerId);
						},
						get belowListComponent() {
							return (() => {
								const S = n(),
									I = S.firstChild,
									T = I.nextSibling,
									P = T.nextSibling;
								return (
									S.style.setProperty("font-size", "8px"),
									S.style.setProperty("line-height", "150%"),
									S.style.setProperty(
										"color",
										"var(--vscode-input-placeholderForeground)",
									),
									S.style.setProperty("padding", "2px 4px"),
									S.style.setProperty("text-align", "right"),
									S.style.setProperty("width", "100%"),
									S.style.setProperty("box-sizing", "border-box"),
									(0, i.insert)(S, b, I),
									(0, i.insert)(S, s, T),
									S
								);
							})();
						},
						get buttonHint() {
							return `${b().trim()} toggle, ${s().trim()} open`;
						},
						get items() {
							return [
								{
									id: "chat",
									label: `Chat${$() ? ` ${$()}` : ""}`,
									description:
										"Useful for asking questions about the selected context",
									keywords: ["ask"],
								},
								{
									id: "edit",
									label: `Edit${v() ? ` ${v()}` : ""}`,
									description:
										"Apply edits directly within the selected context",
									keywords: ["write", "normal"],
								},
								{
									id: "agent",
									label: "Agent",
									description:
										"Agents can use tools, search the codebase, and edit files broadly",
									keywords: ["tools", "codebase"],
								},
							];
						},
						anchor: "top-right",
						onSelect: (S) => {
							let I = !1,
								T = !1;
							S === "chat"
								? ((I = !1), (T = !1))
								: S === "edit"
									? ((I = !0), (T = !1))
									: S === "agent" && ((I = !0), (T = !0)),
								f.reactiveStorageService.setApplicationUserPersistentStorage(
									"composerState",
									"isAutoApplyEnabled",
									I,
								),
								f.composerDataService.updateComposerData(o().composerId, {
									isAgentic: T,
								}),
								f.reactiveStorageService.setApplicationUserPersistentStorage(
									"composerState",
									"defaultUseToolsInEdit",
									T,
								);
						},
						labelStyle: {
							color: "var(--vscode-input-placeholderForeground)",
							padding: "0px",
						},
						buttonStyle: { "padding-right": "0px" },
						get origLabel() {
							return (0, E.memo)(() => !!y())()
								? "agent"
								: l()
									? "edit"
									: "chat";
						},
						get value() {
							return (0, E.memo)(() => !!y())()
								? "agent"
								: l()
									? "edit"
									: "chat";
						},
						isRelative: !1,
						menuWidth: 195,
					});
				}
			},
		),
		