import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/platform.js';
import './ComposerBottomBarButton.js';
import './ComposerUnifiedModeSwitcher.js';
import './ComposerUnUnifiedModeSwitcher.js';
import '../hooks/useCachedChatUsesTools.js';
import '../hooks/useComposerDataHandle.js';
import '../hooks/useComposerHoverTooltip.js';
import '../hooks/useShouldShowApplyLastMessage.js';
import '../utils.js';
import '../../../controlCommon/browser/solid.js';
import '../../../../../css!vs/workbench/contrib/composer/browser/components/ComposerBottomBar.js';
define(
			de[4190],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 12, 1778, 4189, 4150, 1968, 177, 311,
				1066, 246, 36, 2407,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*web*/,
 d /*web*/,
 m /*web*/,
 r /*solid*/,
 u /*platform*/,
 a /*ComposerBottomBarButton*/,
 h /*ComposerUnifiedModeSwitcher*/,
 c /*ComposerUnUnifiedModeSwitcher*/,
 n /*useCachedChatUsesTools*/,
 g /*useComposerDataHandle*/,
 p /*useComposerHoverTooltip*/,
 o /*useShouldShowApplyLastMessage*/,
 f /*utils*/,
 b /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerBottomBar = y);
				const s = (0, t.template)(
						'<div class="composer-bar-input-buttons"><div></div><div class="button-container composer-button-area">',
					),
					l = (0, t.template)("<div>agent");
				function y($) {
					const v = (0, b.$odc)(),
						{
							currentComposer: S,
							composerDataHandle: I,
							updateCurrentComposer: T,
						} = (0, g.useComposerDataHandle)(() => $.composerDataHandle),
						P = v.analyticsService,
						k = (0, o.useShouldShowApplyLastMessage)(I),
						L = (0, r.createMemo)(() => " \u23CE"),
						D = (0, r.createMemo)(
							() => ` ${u.$m ? " \u2318\u23CE" : " ctrl+\u23CE"}`,
						),
						M = (0, r.createMemo)(
							() =>
								!v.composerService.canComposerSubmit(
									S().composerId,
									$.bubbleId,
								) &&
								(!k() || !!$.bubbleId),
						),
						{ showHover: N, hideHover: A } = (0, p.useComposerHoverTooltip)({
							delay: 300,
							additionalClasses: ["chat-hover-tooltip"],
						}),
						R = (0, r.createMemo)(() =>
							v.composerDataService.getComposerForceMode(S().composerId),
						),
						O = (0, r.createMemo)(
							() =>
								v.reactiveStorageService.applicationUserPersistentStorage
									.composerState.isAutoApplyEnabled,
						),
						B = (0, n.useCachedChatUsesTools)(),
						U = (0, r.createMemo)(() => R() !== "chat" || B()),
						z = (0, r.createMemo)(() =>
							v.composerDataService.getHasAgenticBeforeBubble(
								S().composerId,
								$.bubbleId,
							),
						),
						F = (0, r.createMemo)(
							() =>
								!!v.reactiveStorageService.applicationUserPersistentStorage
									.composerState.unification,
						);
					return (() => {
						const x = s(),
							H = x.firstChild,
							q = H.nextSibling;
						return (
							x.addEventListener("click", (V) => {
								V.target === V.currentTarget && $.onContainerClick();
							}),
							H.style.setProperty("display", "flex"),
							H.style.setProperty("align-items", "center"),
							H.style.setProperty("gap", "4px"),
							H.style.setProperty("margin-right", "4px"),
							H.style.setProperty("min-width", "0px"),
							H.style.setProperty("flex-basis", "0"),
							H.style.setProperty("flex-grow", "1"),
							(0, m.insert)(H, () => $.bottomLeftContent),
							(0, m.insert)(q, () => $.bottomRightExtraContent, null),
							(0, m.insert)(
								q,
								(0, d.createComponent)(r.Show, {
									get when() {
										return U();
									},
									get fallback() {
										return (0, d.createComponent)(r.Show, {
											get when() {
												return k() && !$.bubbleId;
											},
											get fallback() {
												return [
													(0, d.createComponent)(a.ComposerBottomBarButton, {
														title: "submit",
														type: "secondary",
														get isDisabled() {
															return M();
														},
														get keybinding() {
															return L();
														},
														onClick: () => {
															const V = R();
															P.trackEvent("composer.submit", {
																mode: V,
																entry: "click",
																useCodebase: !1,
																isAgentic: S().isAgentic ?? !1,
																isEditing: O() ?? !1,
															}),
																$.onSubmit({ mode: V });
														},
													}),
													(0, d.createComponent)(a.ComposerBottomBarButton, {
														title: "codebase",
														get keybinding() {
															return D();
														},
														onClick: () => {
															const V = R();
															P.trackEvent("composer.submit", {
																mode: V,
																entry: "click",
																useCodebase: !0,
																isAgentic: S().isAgentic ?? !1,
																isEditing: O() ?? !1,
															}),
																$.onSubmit({ mode: V, useCodebase: !0 });
														},
														get isDisabled() {
															return M();
														},
														get hintText() {
															return `Submit codebase ${R()}`;
														},
													}),
												];
											},
											get children() {
												return (0, d.createComponent)(
													a.ComposerBottomBarButton,
													{
														title: "apply all",
														get keybinding() {
															return (0, f.getShortcut)("\u23CE");
														},
														onClick: () => {
															P.trackEvent("composer.apply_last", {
																entry: "click",
															}),
																v.composerService.applyCachedCodeBlocksOfLastMessage(
																	S().composerId,
																);
														},
														hintText: "Apply changes from all messages above",
														type: "primary",
													},
												);
											},
										});
									},
									get children() {
										return [
											(0, d.createComponent)(r.Show, {
												get when() {
													return $.shouldShowAgentic;
												},
												get children() {
													return (0, d.createComponent)(r.Show, {
														get when() {
															return !z();
														},
														get fallback() {
															return (() => {
																const V = l();
																return (
																	(0, i.addEventListener)(V, "mouseleave", A),
																	V.addEventListener("mouseenter", (G) => {
																		N(G, {
																			value: `This composer is in ${S().isAgentic ? "agent" : "normal"} mode`,
																		});
																	}),
																	V.style.setProperty(
																		"color",
																		"var(--vscode-input-placeholderForeground)",
																	),
																	V.style.setProperty("opacity", "0.8"),
																	V.style.setProperty("line-height", "150%"),
																	V
																);
															})();
														},
														get children() {
															return (0, d.createComponent)(r.Show, {
																get when() {
																	return F();
																},
																get fallback() {
																	return (0, d.createComponent)(
																		c.ComposerUnUnifiedModeSwitcher,
																		{
																			get composerDataHandle() {
																				return I();
																			},
																		},
																	);
																},
																get children() {
																	return (0, d.createComponent)(
																		h.ComposerUnifiedModeSwitcher,
																		{
																			get composerDataHandle() {
																				return I();
																			},
																		},
																	);
																},
															});
														},
													});
												},
											}),
											(0, d.createComponent)(a.ComposerBottomBarButton, {
												title: "submit",
												type: "primary",
												get isDisabled() {
													return M();
												},
												get keybinding() {
													return L();
												},
												get style() {
													return (0, C.memo)(() => !!S().isAgentic)()
														? {
																background: "var(--vscode-button-background)",
																color: "var(--vscode-button-foreground)",
																opacity: M() ? 0.5 : 1,
															}
														: {};
												},
												onClick: () => {
													if (M()) return;
													const V = R();
													P.trackEvent("composer.submit", {
														mode: V,
														entry: "click",
														useCodebase: !1,
														isAgentic: S().isAgentic ?? !1,
														isEditing: O() ?? !1,
													}),
														$.onSubmit({ mode: V });
												},
											}),
										];
									},
								}),
								null,
							),
							(0, E.effect)(
								(V) => {
									const G = {
											overflow: "hidden",
											"margin-top": "4px",
											...$.style,
										},
										K = {
											"margin-left": "auto",
											...(U()
												? {
														display: "flex",
														"align-items": "center",
														gap: "6px",
													}
												: {}),
										};
									return (
										(V._v$ = (0, w.style)(x, G, V._v$)),
										(V._v$2 = (0, w.style)(q, K, V._v$2)),
										V
									);
								},
								{ _v$: void 0, _v$2: void 0 },
							),
							x
						);
					})();
				}
			},
		),
		