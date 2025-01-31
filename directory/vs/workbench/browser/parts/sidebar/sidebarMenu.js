import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import '../../../../platform/theme/common/colorRegistry.js';
import './types.js';
import '../../../../base/common/themables.js';
import '../../../../base/common/uri.js';
import '../../../common/theme.js';
import '../../../../base/common/codicons.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/hash.js';
import '../../../../../external/solid-dnd/drag-drop-context.js';
import '../../../../../external/solid-dnd/drag-drop-sensors.js';
import '../../../../../external/solid-dnd/sortable-context.js';
import '../../../../../external/solid-dnd/create-sortable.js';
import '../../../../../external/solid-dnd/drag-overlay.js';
import '../../../../../external/solid-dnd/collision.js';
import '../../../../base/common/types.js';
import '../../../contrib/controlCommon/browser/solid.js';
import '../../../services/views/browser/viewsService.js';
import '../../../../../external/solid/web.js';
import '../../../../base/common/platform.js';
import '../../../contrib/ui/browser/loadingSpinner/loadingSpinner.js';
import '../../../../css!vs/workbench/browser/parts/sidebar/SidebarPart2.js';
define(
			de[4119],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 51, 1035, 26, 9, 123, 14, 7, 136,
				580, 2162, 1465, 2164, 2163, 1463, 28, 36, 1352, 2, 12, 295, 1139,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*web*/,
				i /*web*/,
				w /*web*/,
				E /*web*/,
				C /*web*/,
				d /*web*/,
				m /*web*/,
				r /*web*/,
				u /*web*/,
				a /*solid*/,
				h /*colorRegistry*/,
				c /*types*/,
				n /*themables*/,
				g /*uri*/,
				p /*theme*/,
				o /*codicons*/,
				f /*dom*/,
				b /*hash*/,
				s /*drag-drop-context*/,
				l /*drag-drop-sensors*/,
				y /*sortable-context*/,
				$ /*create-sortable*/,
				v /*drag-overlay*/,
				S /*collision*/,
				I /*types*/,
				T /*solid*/,
				P /*viewsService*/,
				k /*web*/,
				L /*platform*/,
				D /*loadingSpinner*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$5uc = K);
				const M = (0, t.template)(
						'<div class="sidebar2-item-icon-anysphere"><div>',
					),
					N = (0, t.template)("<span>"),
					A = (0, t.template)(
						'<div class="sidebar-list-item"><div><span></span></div><div><span>',
					),
					R = (0, t.template)("<div>"),
					O = (0, t.template)(
						'<div><div>Welcome<div class="clickable"><div></div></div></div><div><div><div></div></div><div>% done</div></div><div>',
					),
					B = (0, t.template)(
						'<div><div><div class="sidebar2-item-icon-anysphere"><div>',
					),
					U = (0, t.template)('<div><img width="400px" decoding="async"><div>'),
					z = (0, t.template)("<div><div>"),
					F = (0, t.template)(
						'<div><div></div><div class="onboarding-checklist-entry-title">',
					),
					x = 8;
				function H(W, X) {
					if (g.URI.isUri(W)) {
						const Y = (0, f.$vhb)(W),
							ie = new b.$Gj();
						ie.update(Y);
						const ne = `sidebarpart2-activity-${X.replace(/\./g, "-")}-${ie.digest()}`,
							ee = `.${ne}`;
						return (
							(0, f.$Wgb)(
								ee,
								`
				mask: ${Y} no-repeat 50% 50%;
				mask-size: 16px;
				-webkit-mask: ${Y} no-repeat 50% 50%;
				-webkit-mask-size: 16px;
				width: 16px;
				height: 16px;
				background-color: var(--vscode-icon-foreground);
			`,
							),
							ne
						);
					} else if (n.ThemeIcon.isThemeIcon(W))
						return n.ThemeIcon.asClassName(W);
					return "";
				}
				function q(W) {
					const X = (0, c.$Zuc)(),
						Y = {
							height: "100%",
							display: "flex",
							"flex-direction": "row",
							"border-width": "0 0 1px 0",
							"border-style": "solid",
							"box-sizing": "border-box",
							"border-bottom-color": "rgba(0,0,0,0)",
							"align-items": "center",
							padding: "0px 4px",
							margin: "0px 0px",
							width: "35px",
							"justify-content": "center",
							cursor: "pointer",
						},
						[ie, ne] = (0, a.createSignal)(Y);
					(0, a.createEffect)(() => {
						W.selected
							? ne({
									...Y,
									"border-bottom-color":
										"var(--vscode-panelTitle-activeBorder)",
									color: "var(--vscode-panelTitle-activeForeground)",
								})
							: ne(Y);
					});
					const ee = (0, a.createMemo)(() =>
						H(W.viewContainer.icon, W.viewContainer.id),
					);
					return (() => {
						const _ = M(),
							te = _.firstChild;
						return (
							_.addEventListener("click", () => {
								W.onSelect();
							}),
							te.style.setProperty("align-items", "center"),
							te.style.setProperty("justify-content", "center"),
							te.style.setProperty("font-size", "17px"),
							(0, u.effect)(
								(Q) => {
									const Z = ie(),
										se = ee();
									return (
										(Q._v$ = (0, r.style)(_, Z, Q._v$)),
										se !== Q._v$2 && (0, m.className)(te, (Q._v$2 = se)),
										Q
									);
								},
								{ _v$: void 0, _v$2: void 0 },
							),
							_
						);
					})();
				}
				function V(W) {
					const X = (0, c.$Zuc)(),
						Y = (0, a.createMemo)(() =>
							H(W.viewContainer.icon, W.viewContainer.id),
						);
					return (() => {
						const ie = A(),
							ne = ie.firstChild,
							ee = ne.firstChild,
							_ = ne.nextSibling,
							te = _.firstChild;
						return (
							ie.addEventListener("click", () => {
								W.selectContainer(W.viewContainer.id);
							}),
							ie.style.setProperty("padding-left", "16px"),
							ie.style.setProperty("padding-right", "16px"),
							ie.style.setProperty("padding-top", "3px"),
							ie.style.setProperty("padding-bottom", "3px"),
							ie.style.setProperty("display", "flex"),
							ie.style.setProperty("flex-direction", "row"),
							ie.style.setProperty("align-items", "center"),
							ie.style.setProperty("justify-content", "space-between"),
							ne.style.setProperty("display", "flex"),
							ne.style.setProperty("flex-direction", "row"),
							ne.style.setProperty("align-items", "center"),
							ee.style.setProperty("padding-right", "4px"),
							ee.style.setProperty("align-items", "center"),
							ee.style.setProperty("justify-content", "center"),
							(0, C.insert)(
								ne,
								() =>
									typeof W.viewContainer.title == "string"
										? W.viewContainer.title
										: W.viewContainer.title.value,
								null,
							),
							(0, C.insert)(
								ne,
								(0, E.createComponent)(a.Show, {
									get when() {
										return W.extraInfo?.shortcut;
									},
									get children() {
										const Q = N();
										return (
											Q.style.setProperty("margin-left", "6px"),
											Q.style.setProperty("opacity", "0.5"),
											(0, C.insert)(Q, () => W.extraInfo?.shortcut),
											Q
										);
									},
								}),
								null,
							),
							_.style.setProperty("display", "flex"),
							_.style.setProperty("flex-direction", "row"),
							_.style.setProperty("align-items", "center"),
							te.addEventListener("click", (Q) => {
								X.sidebarData.pinnedViewContainerIDs.includes(
									W.viewContainer.id,
								)
									? (X.setSidebarData(
											"pinnedViewContainerIDs",
											X.sidebarData.pinnedViewContainerIDs.filter(
												(Z) => Z !== W.viewContainer.id,
											),
										),
										(0, c.$Xuc)(X.storageService, X.sidebarData))
									: (X.setSidebarData(
											"pinnedViewContainerIDs",
											X.sidebarData.pinnedViewContainerIDs.concat(
												W.viewContainer.id,
											),
										),
										(0, c.$Xuc)(X.storageService, X.sidebarData)),
									Q.stopPropagation();
							}),
							te.style.setProperty("cursor", "pointer"),
							te.style.setProperty("border-radius", "5px"),
							te.style.setProperty("padding", "2px"),
							te.style.setProperty("align-items", "center"),
							te.style.setProperty("justify-content", "center"),
							(0, u.effect)(
								(Q) => {
									const Z =
											W.viewContainer.id ===
											X.sidebarData.activeViewContainerID,
										se = Y(),
										re =
											n.ThemeIcon.asClassName(o.$ak.pinned) +
											" sidebar-2-pinned-icon" +
											(X.sidebarData.pinnedViewContainerIDs.includes(
												W.viewContainer.id,
											)
												? ""
												: " sidebar-2-pinned-icon-not-pinned");
									return (
										Z !== Q._v$3 &&
											ie.classList.toggle(
												"sidebar-list-item-selected",
												(Q._v$3 = Z),
											),
										se !== Q._v$4 && (0, m.className)(ee, (Q._v$4 = se)),
										re !== Q._v$5 && (0, m.className)(te, (Q._v$5 = re)),
										Q
									);
								},
								{ _v$3: void 0, _v$4: void 0, _v$5: void 0 },
							),
							ie
						);
					})();
				}
				function G(W) {
					const X = (0, $.createSortable)(W.viewContainer.id);
					return (() => {
						const Y = R();
						return (
							(0, w.use)(X, Y, () => !0),
							(0, C.insert)(
								Y,
								(0, E.createComponent)(V, {
									get viewContainer() {
										return W.viewContainer;
									},
									get selectContainer() {
										return W.selectContainer;
									},
									get extraInfo() {
										return W.extraInfo;
									},
								}),
							),
							(0, u.effect)(() =>
								(X.isActiveDraggable ? 0.5 : 1) != null
									? Y.style.setProperty(
											"opacity",
											X.isActiveDraggable ? 0.5 : 1,
										)
									: Y.style.removeProperty("opacity"),
							),
							Y
						);
					})();
				}
				function K(W) {
					const X = (0, c.$Zuc)(),
						Y = (0, T.$pdc)(),
						[ie, ne] = (0, a.createSignal)(0),
						[ee, _] = (0, a.createSignal)([]),
						[te, Q] = (0, a.createSignal)([]),
						[Z, se] = (0, a.createSignal)([]),
						[re, le] = (0, a.createSignal)(!1),
						[oe, ae] = (0, a.createSignal)(void 0),
						[pe, $e] = (0, a.createSignal)(!1);
					(0, a.createEffect)(() => {
						X.sidebarData.pinnedViewContainerIDs.includes(
							X.sidebarData.activeViewContainerID,
						)
							? ae(void 0)
							: ae(
									X.sidebarData.viewContainers.elements.find(
										(He) => He.id === X.sidebarData.activeViewContainerID,
									),
								);
					});
					const ye = (0, a.createMemo)(() =>
						Math.min(
							Z().length,
							Math.floor(ie() / 40) - 1 - (oe() !== void 0 ? 1 : 0),
						),
					);
					(0, a.createEffect)(() => {
						const He = ee().map((Ke) => {
							const Je = X.viewDescriptorService.getViewContainerModel(Ke);
							return (
								X.contextKeyService.createKey((0, P.$3uc)(Ke.id), !1).set(!0),
								{
									shortcut:
										(Je.keybindingId
											? X.keybindingService.lookupKeybinding(Je.keybindingId)
											: null
										)?.getLabel() ?? void 0,
								}
							);
						});
						Q(He);
					}),
						(0, a.createEffect)(() => {
							X.sidebarData.activeViewContainerID && le(!1);
						}),
						(0, a.createEffect)(() => {
							ee().find((Ke) => Ke.id === X.sidebarData.activeViewContainerID)
								?.wantsActionToolbar === !0
								? $e(!0)
								: $e(!1);
						}),
						(0, a.createEffect)(() => {
							pe()
								? X.setSidebarData("heightOfTitle", 70)
								: X.setSidebarData("heightOfTitle", 35);
						});
					const ue = () => {
						const He = X.sidebarData.viewContainers.elements.slice(0);
						He.sort((Ke, Je) => {
							const Te = X.sidebarData.pinnedViewContainerIDs.includes(Ke.id),
								Ee = X.sidebarData.pinnedViewContainerIDs.includes(Je.id);
							if (Te && !Ee) return -1;
							if (!Te && Ee) return 1;
							const Ie =
									X.sidebarData.viewContainerOrders[Ke.id]?.order ?? Ke.order,
								Be =
									X.sidebarData.viewContainerOrders[Je.id]?.order ?? Je.order;
							if ((0, I.$ug)(Be)) return -1;
							if ((0, I.$ug)(Ie)) return 1;
							if (Ie !== Be) return Ie - Be;
							const Se =
									X.sidebarData.viewContainerOrders[Ke.id]?.secondaryOrder ??
									Math.abs(Math.sin(parseInt(Ke.id.replace(/\./g, ""), 36))),
								ke =
									X.sidebarData.viewContainerOrders[Je.id]?.secondaryOrder ??
									Math.abs(Math.sin(parseInt(Je.id.replace(/\./g, ""), 36)));
							return Se - ke;
						}),
							_(He);
					};
					(0, a.createEffect)(() => {
						ue();
					}),
						(0, a.createEffect)(() => {
							se(
								ee().filter((He) =>
									X.sidebarData.pinnedViewContainerIDs.includes(He.id),
								),
							);
						});
					const fe = (He) => {
						He === X.sidebarData.activeViewContainerID
							? X.hideActivePaneComposite()
							: X.openPaneComposite(He, !0),
							le(!1);
					};
					let me;
					(0, a.onMount)(() => {
						const He = new ResizeObserver((Ke) => {
							for (const Je of Ke) {
								const { width: Te, height: Ee } = Je.contentRect;
								ne(Te);
							}
						});
						me && He.observe(me),
							(0, a.onCleanup)(() => {
								He.disconnect();
							});
					});
					const ve = ({ draggable: He, droppable: Ke }) => {
						if (He && Ke) {
							let Je = ee(),
								Te = Je.findIndex((Be) => Be.id === He.id),
								Ee = Je.findIndex((Be) => Be.id === Ke.id);
							const Ie = X.sidebarData.pinnedViewContainerIDs.includes(
								Je[Te]?.id,
							);
							if (
								((Je = Je.filter(
									(Be) =>
										X.sidebarData.pinnedViewContainerIDs.includes(Be.id) === Ie,
								)),
								Ie || ((Te -= Z().length), (Ee -= Z().length)),
								(Ee = Math.max(0, Math.min(Ee, Je.length - 1))),
								Te !== Ee && Te >= 0)
							) {
								Ee += Te < Ee ? 1 : 0;
								const Be =
										Ee >= 1
											? (X.sidebarData.viewContainerOrders[Je[Ee - 1]?.id]
													?.order ??
												Je[Ee - 1]?.order ??
												1e4)
											: -1,
									Se =
										X.sidebarData.viewContainerOrders[Je[Ee]?.id]?.order ??
										Je[Ee]?.order ??
										1e4,
									ke = (Be + Se) / 2;
								let Ue = Math.abs(
									Math.sin(parseInt(Je[Te].id.replace(/\./g, ""), 36)),
								);
								if (Be === Se) {
									const qe =
											X.sidebarData.viewContainerOrders[Je[Ee - 1]?.id]
												?.secondaryOrder ??
											Math.abs(
												Math.sin(
													parseInt(
														(Ee >= 1
															? (Je[Ee - 1].id ?? "000000")
															: "000000"
														).replace(/\./g, ""),
														36,
													),
												),
											),
										Ae =
											X.sidebarData.viewContainerOrders[Je[Ee]?.id]
												?.secondaryOrder ??
											Math.abs(
												Math.sin(
													parseInt(
														(Je[Ee]?.id ?? "ZZZZZZZ").replace(/\./g, ""),
														36,
													),
												),
											);
									Ue = (qe + Ae) / 2;
								}
								X.setSidebarData("viewContainerOrders", Je[Te].id, {
									order: ke,
									secondaryOrder: Ue,
								}),
									(0, c.$Xuc)(X.storageService, X.sidebarData);
							}
						}
					};
					(0, a.onMount)(() => {
						const He = X.viewDescriptorService.onDidChangeContainerLocation(
							({ viewContainer: Ke, from: Je, to: Te }) => {
								ue();
							},
						);
						(0, a.onCleanup)(() => {
							He.dispose();
						});
					});
					const [ge, be] = (0, a.createSignal)(void 0),
						Ce = () =>
							X.reactiveStorageService.setApplicationUserPersistentStorage(
								"checklistState",
								(He) => ({ ...He, shouldSeeOnboardingChecklist: !1 }),
							),
						Le = L.$m ? "\u2318" : "Ctrl",
						Fe = [
							{
								title: "Finish onboarding",
								done: () => !0,
								instruction: "You already clicked through onboarding",
								heightOverWidth: 1,
							},
							{
								title: "Accept a tab",
								done: () =>
									X.reactiveStorageService.applicationUserPersistentStorage
										.checklistState?.doneAutoComplete,
								instruction:
									"Cursor can suggest grey text or diffs to the side of your cursor",
								image:
									"https://cursor.com/_next/image?url=%2FTG.gif&w=3840&q=75",
								heightOverWidth: 1548 / 2590,
							},
							{
								title: "Prompt an edit",
								done: () =>
									X.reactiveStorageService.applicationUserPersistentStorage
										.checklistState?.doneCommandK,
								instruction: `Ask the AI to change a chunk of code with ${Le}+K`,
								image:
									"https://cursor.com/_next/image?url=%2Fckonboarding.gif&w=3840&q=75",
								heightOverWidth: 1716 / 2752,
							},
							{
								title: "Ask a question",
								done: () =>
									X.reactiveStorageService.applicationUserPersistentStorage
										.checklistState?.doneCommandL &&
									X.reactiveStorageService.applicationUserPersistentStorage
										.checklistState?.doneAddingCodeSelection,
								instruction: `Select a piece of code and hit ${Le}+L to ask anything about it`,
								image:
									"https://cursor.com/_next/image?url=%2Fclonboarding.gif&w=3840&q=75",
								heightOverWidth: 1676 / 2892,
							},
							{
								title: "Chat with your codebase",
								done: () =>
									X.reactiveStorageService.applicationUserPersistentStorage
										.checklistState?.doneCommandEnter,
								instruction: `Hit ${Le}+Enter in Chat to have the AI scan your codebase`,
								image:
									"https://cursor.com/_next/image?url=%2Fcenteronboarding.gif&w=3840&q=75",
								heightOverWidth: 1784 / 2880,
							},
						],
						Oe = (0, a.createMemo)(() => {
							const He = Fe.filter((Je) => Je.done()).length,
								Ke = Fe.length;
							return He / Ke;
						});
					let xe;
					return (
						(0, a.createEffect)(() => {
							X.reactiveStorageService.applicationUserPersistentStorage
								.checklistState?.shouldSeeOnboardingChecklist
								? xe &&
									setTimeout(() => {
										const He = xe.getBoundingClientRect();
										W.setSideBarMenuHeight(He.height);
									}, 0)
								: W.setSideBarMenuHeight(0);
						}),
						[
							(0, E.createComponent)(a.Show, {
								get when() {
									return (
										X.reactiveStorageService.applicationUserPersistentStorage
											.checklistState?.shouldSeeOnboardingChecklist === !0
									);
								},
								get children() {
									const He = O(),
										Ke = He.firstChild,
										Je = Ke.firstChild,
										Te = Je.nextSibling,
										Ee = Te.firstChild,
										Ie = Ke.nextSibling,
										Be = Ie.firstChild,
										Se = Be.firstChild,
										ke = Be.nextSibling,
										Ue = ke.firstChild,
										qe = Ie.nextSibling,
										Ae = xe;
									return (
										typeof Ae == "function" ? (0, w.use)(Ae, He) : (xe = He),
										He.style.setProperty("margin-top", "0px"),
										He.style.setProperty("padding", "16px 16px 16px 16px"),
										He.style.setProperty("position", "relative"),
										Ke.style.setProperty("text-transform", "uppercase"),
										Ke.style.setProperty(
											"color",
											"var(--vscode-editor-foreground)",
										),
										Ke.style.setProperty("font-size", "10px"),
										Ke.style.setProperty("display", "flex"),
										Ke.style.setProperty("align-items", "center"),
										Ke.style.setProperty("justify-content", "space-between"),
										Te.addEventListener("click", () => {
											Ce();
										}),
										Te.style.setProperty("width", "12px"),
										Te.style.setProperty("height", "12px"),
										Te.style.setProperty("cursor", "pointer"),
										Ee.style.setProperty("font-size", "12px"),
										Ie.style.setProperty("display", "flex"),
										Ie.style.setProperty("flex-direction", "column"),
										Ie.style.setProperty("align-items", "flex-start"),
										Ie.style.setProperty("justify-content", "center"),
										Ie.style.setProperty("width", "100%"),
										Ie.style.setProperty("margin-top", "8px"),
										Ie.style.setProperty("margin-bottom", "0px"),
										Be.style.setProperty("width", "100%"),
										Be.style.setProperty("height", "4px"),
										Be.style.setProperty(
											"background",
											"var(--vscode-input-background)",
										),
										Be.style.setProperty("border-radius", "2px"),
										Be.style.setProperty("overflow", "hidden"),
										Se.style.setProperty("height", "100%"),
										Se.style.setProperty(
											"background",
											"var(--vscode-progressBar-background)",
										),
										ke.style.setProperty(
											"color",
											"var(--vscode-input-placeholderForeground)",
										),
										ke.style.setProperty("font-size", "10px"),
										(0, C.insert)(ke, () => Oe() * 100, Ue),
										qe.style.setProperty("display", "flex"),
										qe.style.setProperty("flex-direction", "column"),
										qe.style.setProperty("align-items", "flex-start"),
										qe.style.setProperty("justify-content", "center"),
										qe.style.setProperty("padding", "4px 0"),
										(0, C.insert)(
											qe,
											(0, E.createComponent)(a.For, {
												each: Fe,
												children: (Me, De) => {
													const [Re, je] = (0, a.createSignal)(!1),
														[Ve, Ze] = (0, a.createSignal)(!1),
														[et, rt] = (0, a.createSignal)(),
														ft = () => {
															je(!0),
																be(De),
																setTimeout(() => {
																	Re() && Ze(!0);
																}, 200);
														},
														bt = () => {
															Ze(!1), je(!1), be(void 0);
														},
														nt = (0, a.createMemo)(() => {
															const lt =
																X.reactiveStorageService.nonPersistentStorage
																	.reactivePrimaryBarLocation;
															return lt === void 0 || lt === "left";
														});
													return (() => {
														const lt = F(),
															ct = lt.firstChild,
															gt = ct.nextSibling;
														return (
															lt.addEventListener("mouseleave", bt),
															lt.addEventListener("mouseenter", (ht) => {
																const Rt =
																	ht.currentTarget.getBoundingClientRect();
																rt(Rt), ft();
															}),
															lt.style.setProperty("display", "flex"),
															lt.style.setProperty("flex-direction", "row"),
															lt.style.setProperty("align-items", "center"),
															lt.style.setProperty("margin", "2px 0"),
															lt.style.setProperty("position", "relative"),
															lt.style.setProperty("cursor", "help"),
															lt.style.setProperty("width", "100%"),
															lt.style.setProperty("z-index", "1000"),
															(0, C.insert)(
																lt,
																(0, E.createComponent)(k.Portal, {
																	get mount() {
																		return Y.portalElement;
																	},
																	get children() {
																		const ht = z(),
																			Rt = ht.firstChild;
																		return (
																			ht.style.setProperty("position", "fixed"),
																			ht.style.setProperty(
																				"background",
																				"var(--vscode-editor-background)",
																			),
																			ht.style.setProperty(
																				"border",
																				"1px solid var(--vscode-sideBar-border)",
																			),
																			ht.style.setProperty(
																				"border-radius",
																				"4px",
																			),
																			ht.style.setProperty("padding", "4px"),
																			ht.style.setProperty("z-index", "1000"),
																			ht.style.setProperty(
																				"flex-direction",
																				"column",
																			),
																			ht.style.setProperty(
																				"align-items",
																				"center",
																			),
																			ht.style.setProperty(
																				"justify-content",
																				"center",
																			),
																			ht.style.setProperty(
																				"box-shadow",
																				"0 2px 4px var(--vscode-scrollbar-shadow)",
																			),
																			(0, C.insert)(
																				ht,
																				(0, E.createComponent)(a.Show, {
																					get when() {
																						return Me.image;
																					},
																					get children() {
																						const Nt = U(),
																							jt = Nt.firstChild,
																							ti = jt.nextSibling;
																						return (
																							Nt.style.setProperty(
																								"width",
																								"400px",
																							),
																							Nt.style.setProperty(
																								"display",
																								"flex",
																							),
																							Nt.style.setProperty(
																								"flex-direction",
																								"column",
																							),
																							Nt.style.setProperty(
																								"align-items",
																								"center",
																							),
																							Nt.style.setProperty(
																								"text-align",
																								"center",
																							),
																							Nt.style.setProperty(
																								"justify-content",
																								"center",
																							),
																							Nt.style.setProperty(
																								"position",
																								"relative",
																							),
																							jt.style.setProperty(
																								"z-index",
																								"1000",
																							),
																							jt.style.setProperty(
																								"border-radius",
																								"2px",
																							),
																							ti.style.setProperty(
																								"position",
																								"absolute",
																							),
																							ti.style.setProperty(
																								"top",
																								"50%",
																							),
																							ti.style.setProperty(
																								"left",
																								"50%",
																							),
																							ti.style.setProperty(
																								"transform",
																								"translate(-50%, -50%)",
																							),
																							(0, C.insert)(
																								ti,
																								(0, E.createComponent)(
																									D.$Z8b,
																									{},
																								),
																							),
																							(0, u.effect)(
																								(kt) => {
																									const hi = `${400 * Me.heightOverWidth}px`,
																										Kt = Ve()
																											? "block"
																											: "none",
																										di = Me.image;
																									return (
																										hi !== kt._v$14 &&
																											((kt._v$14 = hi) != null
																												? Nt.style.setProperty(
																														"height",
																														hi,
																													)
																												: Nt.style.removeProperty(
																														"height",
																													)),
																										Kt !== kt._v$15 &&
																											((kt._v$15 = Kt) != null
																												? jt.style.setProperty(
																														"display",
																														Kt,
																													)
																												: jt.style.removeProperty(
																														"display",
																													)),
																										di !== kt._v$16 &&
																											(0, i.setAttribute)(
																												jt,
																												"src",
																												(kt._v$16 = di),
																											),
																										kt
																									);
																								},
																								{
																									_v$14: void 0,
																									_v$15: void 0,
																									_v$16: void 0,
																								},
																							),
																							Nt
																						);
																					},
																				}),
																				Rt,
																			),
																			Rt.style.setProperty(
																				"color",
																				"var(--vscode-editor-foreground)",
																			),
																			Rt.style.setProperty("font-size", "10px"),
																			Rt.style.setProperty(
																				"text-align",
																				"center",
																			),
																			Rt.style.setProperty(
																				"min-width",
																				"200px",
																			),
																			(0, C.insert)(Rt, () => Me.instruction),
																			(0, u.effect)(
																				(Nt) => {
																					const jt = Re() ? "flex" : "none",
																						ti = `${(et()?.top ?? 0) - (Me.image ? 32 : 0)}px`,
																						kt = nt()
																							? void 0
																							: `${(0, f.$Ogb)().innerWidth - (et()?.left ?? 0) + x}px`,
																						hi = nt()
																							? `${(et()?.right ?? 0) + x}px`
																							: void 0,
																						Kt = Me.image ? "8px" : "0px",
																						di = Me.image ? "4px" : "0px";
																					return (
																						jt !== Nt._v$17 &&
																							((Nt._v$17 = jt) != null
																								? ht.style.setProperty(
																										"display",
																										jt,
																									)
																								: ht.style.removeProperty(
																										"display",
																									)),
																						ti !== Nt._v$18 &&
																							((Nt._v$18 = ti) != null
																								? ht.style.setProperty(
																										"top",
																										ti,
																									)
																								: ht.style.removeProperty(
																										"top",
																									)),
																						kt !== Nt._v$19 &&
																							((Nt._v$19 = kt) != null
																								? ht.style.setProperty(
																										"right",
																										kt,
																									)
																								: ht.style.removeProperty(
																										"right",
																									)),
																						hi !== Nt._v$20 &&
																							((Nt._v$20 = hi) != null
																								? ht.style.setProperty(
																										"left",
																										hi,
																									)
																								: ht.style.removeProperty(
																										"left",
																									)),
																						Kt !== Nt._v$21 &&
																							((Nt._v$21 = Kt) != null
																								? Rt.style.setProperty(
																										"margin-top",
																										Kt,
																									)
																								: Rt.style.removeProperty(
																										"margin-top",
																									)),
																						di !== Nt._v$22 &&
																							((Nt._v$22 = di) != null
																								? Rt.style.setProperty(
																										"margin-bottom",
																										di,
																									)
																								: Rt.style.removeProperty(
																										"margin-bottom",
																									)),
																						Nt
																					);
																				},
																				{
																					_v$17: void 0,
																					_v$18: void 0,
																					_v$19: void 0,
																					_v$20: void 0,
																					_v$21: void 0,
																					_v$22: void 0,
																				},
																			),
																			ht
																		);
																	},
																}),
																ct,
															),
															(0, C.insert)(gt, () => Me.title),
															(0, u.effect)(
																(ht) => {
																	const Rt = Me.done()
																			? n.ThemeIcon.asClassName(o.$ak.check)
																			: n.ThemeIcon.asClassName(o.$ak.circle),
																		Nt = {
																			"margin-right": "4px",
																			...(Me.done()
																				? {
																						color:
																							"var(--vscode-button-background)",
																					}
																				: {}),
																		},
																		jt = {
																			...(Me.done()
																				? {
																						color:
																							"var(--vscode-input-placeholderForeground)",
																						"text-decoration": "line-through",
																						opacity: 0.25,
																					}
																				: {}),
																			"white-space": "nowrap",
																			overflow: "hidden",
																			"text-overflow": "ellipsis",
																		};
																	return (
																		Rt !== ht._v$23 &&
																			(0, m.className)(ct, (ht._v$23 = Rt)),
																		(ht._v$24 = (0, r.style)(ct, Nt, ht._v$24)),
																		(ht._v$25 = (0, r.style)(gt, jt, ht._v$25)),
																		ht
																	);
																},
																{ _v$23: void 0, _v$24: void 0, _v$25: void 0 },
															),
															lt
														);
													})();
												},
											}),
										),
										(0, u.effect)(
											(Me) => {
												const De =
														(X.sidebarData.theme.getColor(p.$yGb)?.toString() ||
															X.sidebarData.theme.getColor(h.$OP)?.toString()) +
														" 1px solid",
													Re = n.ThemeIcon.asClassName(o.$ak.x),
													je = `${Oe() * 100}%`;
												return (
													De !== Me._v$6 &&
														((Me._v$6 = De) != null
															? He.style.setProperty("border-bottom", De)
															: He.style.removeProperty("border-bottom")),
													Re !== Me._v$7 &&
														(0, m.className)(Ee, (Me._v$7 = Re)),
													je !== Me._v$8 &&
														((Me._v$8 = je) != null
															? Se.style.setProperty("width", je)
															: Se.style.removeProperty("width")),
													Me
												);
											},
											{ _v$6: void 0, _v$7: void 0, _v$8: void 0 },
										),
										He
									);
								},
							}),
							(() => {
								const He = R(),
									Ke = me;
								return (
									typeof Ke == "function" ? (0, w.use)(Ke, He) : (me = He),
									He.style.setProperty("position", "relative"),
									(0, C.insert)(
										He,
										(0, E.createComponent)(s.DragDropProvider, {
											onDragEnd: ve,
											collisionDetector: S.closestCenter,
											get children() {
												return [
													(0, E.createComponent)(l.DragDropSensors, {
														get window() {
															return Y.window;
														},
													}),
													(() => {
														const Je = B(),
															Te = Je.firstChild,
															Ee = Te.firstChild,
															Ie = Ee.firstChild;
														return (
															Je.style.setProperty("position", "absolute"),
															Je.style.setProperty("top", "0"),
															Je.style.setProperty("left", "0"),
															Je.style.setProperty("width", "100%"),
															Je.style.setProperty("z-index", "100"),
															Je.style.setProperty(
																"background-color",
																"var(--vscode-sideBar-background)",
															),
															Je.style.setProperty("border-style", "solid"),
															Te.style.setProperty("display", "flex"),
															Te.style.setProperty("flex-direction", "row"),
															Te.style.setProperty("justify-content", "center"),
															Te.style.setProperty("width", "100%"),
															Te.style.setProperty("height", "35px"),
															(0, C.insert)(
																Te,
																(0, E.createComponent)(a.For, {
																	get each() {
																		return Z();
																	},
																	children: (Be, Se) =>
																		(0, E.createComponent)(a.Show, {
																			get when() {
																				return Se() < ye();
																			},
																			get children() {
																				return (0, E.createComponent)(q, {
																					viewContainer: Be,
																					get selected() {
																						return (
																							X.sidebarData
																								.activeViewContainerID === Be.id
																						);
																					},
																					onSelect: () => fe(Be.id),
																				});
																			},
																		}),
																}),
																Ee,
															),
															(0, C.insert)(
																Te,
																(0, E.createComponent)(a.Show, {
																	get when() {
																		return oe();
																	},
																	get children() {
																		return (0, E.createComponent)(q, {
																			get viewContainer() {
																				return oe();
																			},
																			selected: !0,
																			onSelect: () => fe(oe().id),
																		});
																	},
																}),
																Ee,
															),
															Ee.addEventListener("click", () => {
																le((Be) => !Be);
															}),
															Ee.style.setProperty("height", "100%"),
															Ee.style.setProperty("display", "flex"),
															Ee.style.setProperty("flex-direction", "row"),
															Ee.style.setProperty("align-items", "center"),
															Ee.style.setProperty("padding", "0px 4px"),
															Ee.style.setProperty("margin", "0px 4px"),
															Ee.style.setProperty("justify-content", "center"),
															Ee.style.setProperty("cursor", "pointer"),
															Ie.style.setProperty("align-items", "center"),
															Ie.style.setProperty("justify-content", "center"),
															Ie.style.setProperty("font-size", "24px"),
															(0, C.insert)(
																Je,
																(0, E.createComponent)(a.Show, {
																	get when() {
																		return re();
																	},
																	get children() {
																		return (0, E.createComponent)(J, {
																			get viewContainers() {
																				return ee();
																			},
																			get viewContainersExtraInfo() {
																				return te();
																			},
																			selectContainer: fe,
																		});
																	},
																}),
																null,
															),
															(0, C.insert)(
																Je,
																(0, E.createComponent)(a.Show, {
																	get when() {
																		return (0, d.memo)(() => !!pe())() && !re();
																	},
																	get children() {
																		const Be = R();
																		return (
																			Be.style.setProperty("width", "100%"),
																			Be.style.setProperty("height", "35px"),
																			Be.style.setProperty(
																				"box-sizing",
																				"border-box",
																			),
																			Be.style.setProperty("display", "flex"),
																			Be.style.setProperty(
																				"flex-direction",
																				"row",
																			),
																			Be.style.setProperty(
																				"justify-content",
																				"center",
																			),
																			Be.style.setProperty(
																				"align-items",
																				"center",
																			),
																			Be.style.setProperty(
																				"padding",
																				"12px 4px",
																			),
																			(0, C.insert)(
																				Be,
																				() => W.titleActionsContainer,
																			),
																			Be
																		);
																	},
																}),
																null,
															),
															(0, u.effect)(
																(Be) => {
																	const Se =
																			X.sidebarData.theme
																				.getColor(p.$yGb)
																				?.toString() ||
																			X.sidebarData.theme
																				.getColor(h.$OP)
																				?.toString(),
																		ke = re() ? "0 0 1px 0" : "0",
																		Ue = re()
																			? "0px 5px 5px -3px var(--vscode-scrollbar-shadow)"
																			: "none",
																		qe = !!re(),
																		Ae = re()
																			? n.ThemeIcon.asClassName(o.$ak.chevronUp)
																			: n.ThemeIcon.asClassName(
																					o.$ak.chevronDown,
																				);
																	return (
																		Se !== Be._v$9 &&
																			((Be._v$9 = Se) != null
																				? Je.style.setProperty(
																						"border-bottom-color",
																						Se,
																					)
																				: Je.style.removeProperty(
																						"border-bottom-color",
																					)),
																		ke !== Be._v$10 &&
																			((Be._v$10 = ke) != null
																				? Je.style.setProperty(
																						"border-width",
																						ke,
																					)
																				: Je.style.removeProperty(
																						"border-width",
																					)),
																		Ue !== Be._v$11 &&
																			((Be._v$11 = Ue) != null
																				? Je.style.setProperty("box-shadow", Ue)
																				: Je.style.removeProperty(
																						"box-shadow",
																					)),
																		qe !== Be._v$12 &&
																			Ee.classList.toggle(
																				"sidebar2-item-icon-anysphere-hover",
																				(Be._v$12 = qe),
																			),
																		Ae !== Be._v$13 &&
																			(0, m.className)(Ie, (Be._v$13 = Ae)),
																		Be
																	);
																},
																{
																	_v$9: void 0,
																	_v$10: void 0,
																	_v$11: void 0,
																	_v$12: void 0,
																	_v$13: void 0,
																},
															),
															Je
														);
													})(),
													(0, E.createComponent)(v.DragOverlay, {
														get mount() {
															return Y.portalElement;
														},
														children: (Je) =>
															(() => {
																const Te = R();
																return (
																	(0, C.insert)(
																		Te,
																		(0, E.createComponent)(a.Show, {
																			get when() {
																				return ee().find(
																					(Ee) => Ee.id === Je?.id,
																				);
																			},
																			children: (Ee) =>
																				(0, E.createComponent)(V, {
																					get viewContainer() {
																						return Ee();
																					},
																					selectContainer: () => {},
																					get extraInfo() {
																						return te()[ee().indexOf(Ee())];
																					},
																				}),
																		}),
																	),
																	Te
																);
															})(),
													}),
												];
											},
										}),
									),
									(0, u.effect)(() =>
										`${X.sidebarData.heightOfTitle}px` != null
											? He.style.setProperty(
													"height",
													`${X.sidebarData.heightOfTitle}px`,
												)
											: He.style.removeProperty("height"),
									),
									He
								);
							})(),
						]
					);
				}
				function J(W) {
					return (() => {
						const X = R();
						return (
							(0, C.insert)(
								X,
								(0, E.createComponent)(y.SortableProvider, {
									get ids() {
										return W.viewContainers.map((Y) => Y.id);
									},
									get children() {
										return (0, E.createComponent)(a.For, {
											get each() {
												return W.viewContainers;
											},
											children: (Y, ie) =>
												(0, E.createComponent)(G, {
													viewContainer: Y,
													get extraInfo() {
														return W.viewContainersExtraInfo[ie()];
													},
													get selectContainer() {
														return W.selectContainer;
													},
												}),
										});
									},
								}),
							),
							X
						);
					})();
				}
			},
		)
