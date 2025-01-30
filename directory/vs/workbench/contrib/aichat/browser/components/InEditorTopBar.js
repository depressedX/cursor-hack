import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/themables.js';
import '../../../../common/theme.js';
import '../../../controlCommon/browser/solid.js';
import '../chatData.js';
import './icons.js';
import '../../../../../base/common/constants.js';
import '../../../../../base/browser/dom.js';
import '../../../../../css!vs/workbench/contrib/aichat/browser/components/AiBubble.js';
import '../../../../../css!vs/workbench/contrib/aichat/browser/components/ChatHistory.js';
import '../../../../../css!vs/workbench/contrib/aichat/browser/components/UserBubble.js';
define(
			de[4139],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 26, 123, 36, 140, 502, 58, 7, 907, 1141,
				1142,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*web*/,
 m /*solid*/,
 r /*codicons*/,
 u /*themables*/,
 a /*theme*/,
 h /*solid*/,
 c /*chatData*/,
 n /*icons*/,
 g /*constants*/,
 p /*dom*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$J0b = b);
				const o = (0, t.template)("<span>"),
					f = (0, t.template)(
						'<div><div></div><button class="chat-button-secondary"><span></span></button><span class="chat-button-secondary"><span></span></span><span class="chat-button-secondary right">',
					);
				function b(s) {
					const l = (0, m.useContext)(c.$ygc),
						y = (0, h.$odc)(),
						$ = (A) => {
							y.commandService.executeCommand(g.$dX);
						},
						v = () => {
							y.aiChatService.showChatHistory();
						},
						S = () => {
							y.aiChatService.hideChatHistory();
						},
						[I, T] = (0, m.createSignal)(!1);
					let P;
					const k = (0, p.$Ogb)().ResizeObserver;
					(0, m.onMount)(() => {
						const A = new k((R) => {
							for (const O of R) {
								const { width: B, height: U } = O.contentRect;
								T(B < 350);
							}
						});
						P && A.observe(P),
							(0, m.onCleanup)(() => {
								A.disconnect();
							});
					});
					let L = !1;
					L = !0;
					const D = (0, m.createMemo)(
							() =>
								y.reactiveStorageService.nonPersistentStorage
									.reactivePrimaryBarLocation === "right",
						),
						[M, N] = (0, m.createSignal)(
							l.isEditorWindow
								? y.themeService.getColorTheme().getColor(a.$wGb)?.toString()
								: "var(--vscode-editor-background)",
						);
					return (
						y.themeService.onDidColorThemeChange((A) => {
							N(
								l.isEditorWindow
									? y.themeService.getColorTheme().getColor(a.$wGb)?.toString()
									: "var(--vscode-editor-background)",
							);
						}),
						(() => {
							const A = f(),
								R = A.firstChild,
								O = R.nextSibling,
								B = O.firstChild,
								U = O.nextSibling,
								z = U.firstChild,
								F = U.nextSibling,
								x = P;
							return (
								typeof x == "function" ? (0, d.use)(x, A) : (P = A),
								A.style.setProperty("display", "flex"),
								A.style.setProperty("position", "sticky"),
								A.style.setProperty("z-index", "30"),
								A.style.setProperty("top", "0"),
								A.style.setProperty("left", "1px"),
								A.style.setProperty("flex-direction", "row"),
								A.style.setProperty("justify-content", "left"),
								A.style.setProperty("gap", "0.25rem"),
								A.style.setProperty("align-items", "center"),
								A.style.setProperty("padding", "0 0.5rem"),
								A.style.setProperty("height", "40px"),
								A.style.setProperty("flex-shrink", "0"),
								A.style.setProperty("box-sizing", "border-box"),
								R.style.setProperty("position", "absolute"),
								R.style.setProperty("top", "0"),
								R.style.setProperty("left", "1px"),
								R.style.setProperty("width", "100%"),
								R.style.setProperty("height", "100%"),
								R.style.setProperty("z-index", "-1"),
								O.addEventListener("click", () => {
									l.chatData.displayTabs ? S() : v();
								}),
								(0, C.insert)(O, () => !I() && "History", null),
								U.addEventListener("click", () => {
									$("");
								}),
								(0, C.insert)(U, () => !I() && "New Chat", null),
								F.addEventListener("click", () => {
									y.commandService.executeCommand(c.$Mgc);
								}),
								F.style.setProperty("margin-left", "auto"),
								(0, C.insert)(
									F,
									(0, i.createComponent)(m.Show, {
										get when() {
											return D();
										},
										get children() {
											const H = o();
											return (
												(0, E.effect)(() =>
													(0, w.className)(
														H,
														u.ThemeIcon.asClassName(r.$ak.arrowLeft),
													),
												),
												H
											);
										},
									}),
									null,
								),
								(0, C.insert)(F, () => !I() && "Attach to Side Panel", null),
								(0, C.insert)(
									F,
									(0, i.createComponent)(m.Show, {
										get when() {
											return !D();
										},
										get children() {
											const H = o();
											return (
												(0, E.effect)(() =>
													(0, w.className)(
														H,
														u.ThemeIcon.asClassName(r.$ak.arrowRight),
													),
												),
												H
											);
										},
									}),
									null,
								),
								(0, E.effect)(
									(H) => {
										const q = M(),
											V = u.ThemeIcon.asClassName(
												D()
													? r.$ak.layoutSidebarLeft
													: r.$ak.layoutSidebarRight,
											),
											G = u.ThemeIcon.asClassName(n.$G0b);
										return (
											q !== H._v$ &&
												((H._v$ = q) != null
													? R.style.setProperty("background", q)
													: R.style.removeProperty("background")),
											V !== H._v$2 && (0, w.className)(B, (H._v$2 = V)),
											G !== H._v$3 && (0, w.className)(z, (H._v$3 = G)),
											H
										);
									},
									{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
								),
								A
							);
						})()
					);
				}
			},
		),
		