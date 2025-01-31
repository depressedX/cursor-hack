import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/solid.js';
import '../../../../../../base/common/constants.js';
import '../../chatData.js';
import '../InEditorTopBar.js';
import './PremiumChatList.js';
import '../../hooks/useCurrentTab.js';
import '../../../../controlCommon/browser/solid.js';
import './PremiumChatHistory.js';
import '../../../../aiConfig/browser/aiConfigHelper.js';
import '../../../../ui/browser/dropdown/dropdown.js';
import '../../../../ui/browser/hooks/useKeyboardShortcut.js';
import './PremiumPinnedContextContainer.js';
import './PremiumInputBox.js';
define(
			de[4404],
			he([
				1, 0, 2, 2, 2, 2, 13, 58, 140, 4139, 4403, 1065, 36, 4249, 270, 523,
				385, 4396, 2012,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*web*/,
 C /*solid*/,
 d /*constants*/,
 m /*chatData*/,
 r /*InEditorTopBar*/,
 u /*PremiumChatList*/,
 a /*useCurrentTab*/,
 h /*solid*/,
 c /*PremiumChatHistory*/,
 n /*aiConfigHelper*/,
 g /*dropdown*/,
 p /*useKeyboardShortcut*/,
 o /*PremiumPinnedContextContainer*/,
 f /*PremiumInputBox*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$hcc = l);
				const b = (0, t.template)("<div>"),
					s = (0, t.template)("<div> toggle mode");
				function l(y) {
					const $ = (0, h.$odc)(),
						v = (0, a.$lbc)(),
						[S, I] = (0, C.createSignal)(!1),
						[T, P] = (0, C.createSignal)(0),
						[k, L] = (0, C.createSignal)(-1),
						D = (0, C.useContext)(m.$ygc),
						M = (F) => {
							$.commandService.executeCommand(d.$dX);
						},
						N = (0, p.$5$b)(d.$PV),
						A = (0, C.createMemo)(() => v()?.longContextModeEnabled ?? !1),
						R = (0, C.createMemo)(
							() =>
								$.reactiveStorageService.applicationUserPersistentStorage
									.longContextFlagEnabled2,
						),
						O = (0, C.createMemo)(() => R() || A()),
						B = (0, C.createMemo)(() =>
							A() ? "Long Context Chat" : "Normal Chat",
						),
						[U] = (0, n.$K0b)(d.$mW, $.configurationService, !0),
						[z] = (0, n.$K0b)(d.$kW, $.configurationService, !0);
					return (() => {
						const F = b();
						return (
							F.style.setProperty("height", "100%"),
							F.style.setProperty("display", "flex"),
							F.style.setProperty("flex-direction", "column"),
							F.style.setProperty("overflow", "hidden"),
							(0, i.insert)(
								F,
								(() => {
									const x = (0, E.memo)(() => !!D.isEditorWindow);
									return () => x() && (0, w.createComponent)(r.$J0b, {});
								})(),
								null,
							),
							(0, i.insert)(F, (0, w.createComponent)(o.$gcc, {}), null),
							(0, i.insert)(
								F,
								(0, w.createComponent)(C.Show, {
									get when() {
										return v().bubbles.length > 1;
									},
									get children() {
										return (0, w.createComponent)(u.$acc, {
											get tabId() {
												return v().tabId;
											},
											newChat: M,
											showChatHistory: () => !1,
											get isLoading() {
												return S();
											},
											setIsLoading: I,
											get scrollToBottomTrigger() {
												return T();
											},
										});
									},
								}),
								null,
							),
							(0, i.insert)(
								F,
								(0, w.createComponent)(C.Show, {
									get when() {
										return (0, E.memo)(() => v().bubbles.length === 1)() && O();
									},
									get children() {
										const x = b();
										return (
											x.style.setProperty(
												"margin",
												"0.25rem 1rem 0.25rem 1rem",
											),
											x.style.setProperty(
												"color",
												"var(--vscode-input-placeholderForeground)",
											),
											x.style.setProperty("text-align", "right"),
											(0, i.insert)(
												x,
												(0, w.createComponent)(g.$Mbc, {
													anchor: "top-right",
													get value() {
														return B();
													},
													get items() {
														return [
															{ id: "Normal Chat", label: "Normal Chat" },
															...(O()
																? [
																		{
																			id: "Long Context Chat",
																			label: "Long Context Chat",
																		},
																	]
																: []),
														];
													},
													chevronRight: !0,
													get cannotToggle() {
														return v().bubbles.length > 1;
													},
													get origLabel() {
														return B();
													},
													onSelect: (H) => {
														$.commandService.executeCommand(d.$PV, H);
													},
													get belowListComponent() {
														return (() => {
															const H = s(),
																q = H.firstChild;
															return (
																H.style.setProperty("font-size", "10px"),
																H.style.setProperty("opacity", "0.5"),
																H.style.setProperty("padding", "0px 5px"),
																(0, i.insert)(H, N, q),
																H
															);
														})();
													},
												}),
											),
											x
										);
									},
								}),
								null,
							),
							(0, i.insert)(
								F,
								(0, w.createComponent)(C.Show, {
									get when() {
										return v().bubbles[v().bubbles.length - 1].type === "user";
									},
									get children() {
										return (0, w.createComponent)(f.$0bc, {
											get role() {
												return v().bubbles.length === 1 ? "top" : "bottom";
											},
											setSelectedPreviousChatIndex: L,
											triggerScrollToBottom: () => P(T() + 1),
											get tabId() {
												return v().tabId;
											},
										});
									},
								}),
								null,
							),
							(0, i.insert)(
								F,
								(0, w.createComponent)(C.Show, {
									get when() {
										return (0, E.memo)(() => v().bubbles.length === 1)() && z();
									},
									get children() {
										return (0, w.createComponent)(c.$ccc, {
											get selectedTabId() {
												return v().tabId;
											},
											get selectedPreviousChatIndex() {
												return k();
											},
											setSelectedPreviousChatIndex: L,
										});
									},
								}),
								null,
							),
							F
						);
					})();
				}
			},
		)
