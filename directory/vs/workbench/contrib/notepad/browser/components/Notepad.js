import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/browser/ui/contextview/contextview.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/constants.js';
import '../../../../../base/common/keyCodes.js';
import '../../../../../base/common/platform.js';
import '../../../../../base/common/themables.js';
import '../../../../common/theme.js';
import '../../../composer/browser/hooks/useComposerHoverTooltip.js';
import '../../../controlCommon/browser/solid.js';
import './NotepadEditorPure.js';
import '../constants.js';
import '../../../ui/browser/hooks/useMeasureWidthHeight.js';
import '../../../ui/browser/hooks/useThemeHooks.js';
import '../../../ui/browser/menu/hooks.js';
import './NotepadFileAdder.js';
import './NotepadFilePickerMenu.js';
import '../../../../../css!vs/workbench/contrib/notepad/browser/components/Notepad.js';
define(
			de[4327],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 13, 276, 14, 58, 27, 12, 26, 123, 311, 36,
				4326, 558, 693, 331, 364, 3204, 4324, 2469,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$lAc = N);
				const T = (0, t.template)("<div><div>"),
					P = (0, t.template)("<div>"),
					k = (0, t.template)(
						"<div><div><div></div><div></div></div><div><div><div>",
					),
					L = (0, t.template)('<div><input type="text">'),
					D = (0, t.template)("<div><span>"),
					M = !1;
				function N(A) {
					const R = (0, b.$odc)(),
						[O, B] = (0, u.createSignal)([]),
						{
							notepadDataService: U,
							notepadService: z,
							contextMenuService: F,
							composerService: x,
						} = R,
						H = (0, u.createMemo)(() => {
							const Ie = U.getNotepadData(A.notepadId);
							if (!Ie) throw new Error("[notepad] Notepad not found");
							return Ie;
						});
					let q;
					const V = (0, u.createMemo)(() => H()?.text),
						[G, K] = (0, u.createSignal)(0),
						[J, W] = (0, u.createSignal)(0),
						[X, Y] = (0, u.createSignal)(!1),
						[ie, ne] = (0, u.createSignal)(!1),
						[ee, _, te] = (0, v.$A0b)(),
						[Q, Z] = (0, u.createSignal)(!1),
						[se, re] = (0, u.createSignal)(""),
						{ showHover: le, hideHover: oe } = (0, f.useComposerHoverTooltip)();
					let ae, pe, $e;
					const ye = (0, y.$A$b)(() => pe),
						ue = (0, u.createMemo)(() => ye().width > 450),
						fe = () => {
							se() && U.setNotepadsData("notepads", H().id, "name", se()),
								Z(!1),
								$e && $e.focus();
						};
					(0, u.createEffect)(() => {
						Q() && ae && ae.focus();
					}),
						(0, u.createEffect)(() => {
							const Ie = A.notepadId;
							K((Be) => Be + 1), W((Be) => Be + 1);
						}),
						(0, u.createEffect)(
							(0, u.on)(
								() =>
									R.reactiveStorageService.nonPersistentStorage.notepadState
										.notepadEditorFocusSignal,
								(Ie) => {
									$e && Ie !== void 0 && $e.focus();
								},
							),
						),
						(0, u.createEffect)(() => {
							const Ie = A.notepadId;
							(0, u.onMount)(() => {
								const Be = z.onContextRemoved((Se) => {
									const { notepadId: ke, removedMentionIds: Ue } = Se;
									ke === Ie && B(Ue);
								});
								(0, u.onCleanup)(() => {
									Be.dispose();
								});
							});
						});
					const me = async () => {
							await z.openNotepadAsEditor(A.notepadId);
						},
						ve = () => {
							const Ie = !H().shouldShowBottomPane;
							U.setNotepadsData("notepads", H().id, "shouldShowBottomPane", Ie);
						},
						ge = () => {
							const Ie = A.notepadId;
							R.commandService.executeCommand(c.$dX, void 0, !0).then(() => {
								const Be = R.chatDataService.selectedTab,
									Se = Be.bubbles.find(
										(ke) => ke.id === Be.lastFocusedBubbleId,
									);
								R.aiChatService.addContext({
									tabId: Be.tabId,
									bubbleId: Se.id,
									contextType: "notepads",
									value: { notepadId: Ie },
								});
							}),
								A.onEscape?.();
						},
						be = (Ie) => {
							if (!Ie.getModel()) return !1;
							const Se = A.notepadId;
							return (
								R.composerService
									.openComposer(R.composerDataService.selectedComposerId)
									.then(() => {
										const ke = R.composerDataService.selectedComposerId;
										R.composerService.addContext({
											composerId: ke,
											contextType: "notepads",
											value: { notepadId: Se },
										});
									}),
								!0
							);
						},
						Ce = (0, u.createMemo)(() => [
							{
								command: n.KeyMod.CtrlCmd | n.KeyCode.KeyI,
								listener: (Ie, Be) => (Ie.stopPropagation(), be(Be)),
							},
							{
								command: n.KeyMod.CtrlCmd | n.KeyCode.KeyP,
								listener: (Ie, Be) =>
									A.isInEditor
										? !1
										: (Ie.stopPropagation(), q && q.click(), !0),
							},
							{
								command: n.KeyMod.CtrlCmd | n.KeyCode.KeyL,
								listener: (Ie, Be) => (Ie.stopPropagation(), ge(), !0),
							},
							{
								command: n.KeyMod.CtrlCmd | n.KeyCode.KeyW,
								listener: (Ie, Be) =>
									A.onClose ? (Ie.stopPropagation(), A.onClose(), !0) : !1,
							},
							...(A.commandListeners ?? []),
						]),
						Le = {
							cursor: "pointer",
							color: "var(--vscode-editor-foreground)",
							"border-radius": "3px",
							"font-size": "10px",
							display: "flex",
							"align-items": "center",
							"justify-content": "center",
						},
						Fe = (() => {
							const Ie = T(),
								Be = Ie.firstChild;
							return (
								Ie.style.setProperty("padding", "1px 3px"),
								Ie.style.setProperty("position", "absolute"),
								Ie.style.setProperty("left", "50%"),
								Ie.style.setProperty("top", "100%"),
								Ie.style.setProperty(
									"transform",
									"translateX(-50%) translateY(-50%)",
								),
								Ie.style.setProperty("display", "flex"),
								Ie.style.setProperty("justify-content", "center"),
								Ie.style.setProperty("align-items", "center"),
								Ie.style.setProperty(
									"border",
									"1px solid var(--vscode-commandCenter-inactiveBorder)",
								),
								Ie.style.setProperty(
									"background",
									"var(--vscode-editor-background)",
								),
								Ie.style.setProperty("border-radius", "4px"),
								Ie.style.setProperty("overflow", "hidden"),
								Ie.style.setProperty("z-index", "100"),
								Be.addEventListener("click", (Se) => {
									Se.stopPropagation(), ve();
								}),
								(0, r.effect)(
									(Se) => {
										const ke = X() && !ie() ? 1 : 0,
											Ue =
												p.ThemeIcon.asClassName(h.$ak.chevronDown) +
												" notepad-chevron",
											qe = { "z-index": "1", ...Le };
										return (
											ke !== Se._v$ &&
												((Se._v$ = ke) != null
													? Ie.style.setProperty("opacity", ke)
													: Ie.style.removeProperty("opacity")),
											Ue !== Se._v$2 && (0, m.className)(Be, (Se._v$2 = Ue)),
											(Se._v$3 = (0, d.style)(Be, qe, Se._v$3)),
											Se
										);
									},
									{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
								),
								Ie
							);
						})(),
						[Oe, xe] = (0, u.createSignal)(
							H()?.verticalTopPanePercentage ?? 75,
						);
					(0, u.createEffect)(() => {
						const Ie = Oe();
						Ie !== H()?.verticalTopPanePercentage &&
							U.setNotepadsData(
								"notepads",
								H().id,
								"verticalTopPanePercentage",
								Ie,
							);
					});
					const [He, Ke] = (0, u.createSignal)(!1),
						Je = (Ie) => {
							Ie.stopPropagation(),
								F.showContextMenu({
									getAnchor: () => Ie.target,
									anchorAlignment: a.AnchorAlignment.LEFT,
									getActions: () => [
										{
											id: "placeholder-action",
											label: "Placeholder Action",
											class: "",
											enabled: !0,
											tooltip: "This is a placeholder action",
											run: () => {
												console.log("Placeholder action clicked");
											},
										},
									],
								});
						},
						Te = (0, $.$h$b)(o.$BGb, R.themeService),
						Ee = (0, $.$h$b)(o.$wGb, R.themeService);
					return (() => {
						const Ie = k(),
							Be = Ie.firstChild,
							Se = Be.firstChild,
							ke = Se.nextSibling,
							Ue = Be.nextSibling,
							qe = Ue.firstChild,
							Ae = qe.firstChild,
							Me = pe;
						return (
							typeof Me == "function" ? (0, C.use)(Me, Ie) : (pe = Ie),
							Ie.style.setProperty("width", "100%"),
							Ie.style.setProperty("height", "100%"),
							Ie.style.setProperty(
								"background",
								"var(--vscode-editor-background)",
							),
							Ie.style.setProperty("display", "flex"),
							Ie.style.setProperty("flex-direction", "column"),
							Ie.style.setProperty("position", "relative"),
							Ie.style.setProperty("overflow", "hidden"),
							(0, i.insert)(
								Ie,
								(0, E.createComponent)(u.Show, {
									get when() {
										return ee();
									},
									children: (De) =>
										(0, E.createComponent)(I.$kAc, {
											get position() {
												return De();
											},
											close: (Re) => {
												te(), Re || $e?.focus();
											},
											get nonBlockingRoot() {
												return `#${ue() ? l.$E9b : l.$D9b}`;
											},
											get notepadData() {
												return H();
											},
										}),
								}),
								Be,
							),
							Be.addEventListener("mouseleave", () => Ke(!1)),
							Be.addEventListener("mouseenter", () => Ke(!0)),
							(0, i.insert)(
								Se,
								(() => {
									const De = (0, w.memo)(() => !!Q());
									return () =>
										De()
											? (() => {
													const Re = L(),
														je = Re.firstChild;
													return (
														Re.style.setProperty("width", "240px"),
														Re.style.setProperty("max-width", "80%"),
														Re.style.setProperty("position", "relative"),
														(0, C.use)((Ve) => {
															(ae = Ve),
																Ve &&
																	setTimeout(() => {
																		Ve.focus();
																	});
														}, je),
														je.addEventListener("keydown", (Ve) => {
															Ve.key === "Enter"
																? fe()
																: Ve.key === "Escape" &&
																	(Z(!1),
																	Ve.preventDefault(),
																	Ve.stopPropagation());
														}),
														je.addEventListener("blur", fe),
														je.addEventListener("input", (Ve) =>
															re(Ve.currentTarget.value),
														),
														je.style.setProperty("width", "100%"),
														je.style.setProperty("height", "24px"),
														je.style.setProperty(
															"background-color",
															"var(--vscode-input-background)",
														),
														je.style.setProperty(
															"color",
															"var(--vscode-input-foreground)",
														),
														je.style.setProperty(
															"border",
															"1px solid var(--vscode-input-border)",
														),
														je.style.setProperty("border-radius", "2px"),
														je.style.setProperty("padding", "0 6px"),
														je.style.setProperty("font-size", "13px"),
														je.style.setProperty(
															"font-family",
															"var(--vscode-font-family)",
														),
														je.style.setProperty("outline", "none"),
														(0, r.effect)(() => (je.value = se())),
														Re
													);
												})()
											: (() => {
													const Re = D(),
														je = Re.firstChild;
													return (
														Re.addEventListener("dblclick", (Ve) => {
															Ve.stopImmediatePropagation(),
																Ve.preventDefault(),
																re(H().name || ""),
																Z(!0);
														}),
														je.style.setProperty("font-size", "13px"),
														je.style.setProperty("line-height", "22px"),
														je.style.setProperty("overflow", "hidden"),
														je.style.setProperty("text-overflow", "ellipsis"),
														je.style.setProperty("white-space", "nowrap"),
														je.style.setProperty("max-width", "400px"),
														(0, i.insert)(
															je,
															() => H().name || "Untitled Notepad",
														),
														(0, i.insert)(
															Re,
															(0, E.createComponent)(u.Show, {
																get when() {
																	return He();
																},
																get children() {
																	const Ve = P();
																	return (
																		Ve.addEventListener("mouseleave", () =>
																			oe(),
																		),
																		Ve.addEventListener("mouseenter", (Ze) =>
																			le(Ze, "Rename notepad"),
																		),
																		Ve.addEventListener("click", (Ze) => {
																			Ze.stopPropagation(),
																				Ze.preventDefault(),
																				re(H().name || ""),
																				Z(!0);
																		}),
																		Ve.style.setProperty("padding", "2px"),
																		Ve.style.setProperty("cursor", "pointer"),
																		Ve.style.setProperty("display", "flex"),
																		Ve.style.setProperty(
																			"align-items",
																			"center",
																		),
																		Ve.style.setProperty(
																			"position",
																			"absolute",
																		),
																		Ve.style.setProperty("left", "100%"),
																		Ve.style.setProperty("top", "50%"),
																		Ve.style.setProperty(
																			"transform",
																			"translateY(-50%)",
																		),
																		Ve.style.setProperty("margin-left", "4px"),
																		(0, r.effect)(() =>
																			(0, m.className)(
																				Ve,
																				p.ThemeIcon.asClassName(h.$ak.edit) +
																					" tabs-button",
																			),
																		),
																		Ve
																	);
																},
															}),
															null,
														),
														(0, r.effect)(
															(Ve) => {
																const Ze = {
																		display: "flex",
																		"align-items": "center",
																		position: "relative",
																		...(A.isWindow
																			? { "margin-right": "30px" }
																			: {}),
																	},
																	et = A.isInEditor
																		? "var(--vscode-descriptionForeground)"
																		: "var(--vscode-input-placeholderForeground)",
																	rt = A.isInEditor ? (He() ? 0.8 : 0.6) : 1;
																return (
																	(Ve._v$6 = (0, d.style)(Re, Ze, Ve._v$6)),
																	et !== Ve._v$7 &&
																		((Ve._v$7 = et) != null
																			? je.style.setProperty("color", et)
																			: je.style.removeProperty("color")),
																	rt !== Ve._v$8 &&
																		((Ve._v$8 = rt) != null
																			? je.style.setProperty("opacity", rt)
																			: je.style.removeProperty("opacity")),
																	Ve
																);
															},
															{ _v$6: void 0, _v$7: void 0, _v$8: void 0 },
														),
														Re
													);
												})();
								})(),
							),
							(0, i.insert)(
								Be,
								(0, E.createComponent)(u.Show, {
									get when() {
										return A.isWindow && !A.isInEditor;
									},
									get children() {
										const De = P();
										return (
											De.style.setProperty("flex", "1"),
											De.style.setProperty("width", "1px"),
											De.style.setProperty("height", "100%"),
											De.style.setProperty("-webkit-app-region", "drag"),
											De
										);
									},
								}),
								ke,
							),
							ke.style.setProperty("display", "flex"),
							ke.style.setProperty("gap", "6px"),
							ke.style.setProperty("align-items", "center"),
							(0, i.insert)(
								ke,
								(0, E.createComponent)(u.Show, {
									get when() {
										return A.isInEditor && M;
									},
									get children() {
										const De = P();
										return (
											De.addEventListener("click", Je),
											De.style.setProperty("padding", "2px"),
											De.style.setProperty("transform", "rotate(90deg)"),
											(0, r.effect)(() =>
												(0, m.className)(
													De,
													p.ThemeIcon.asClassName(h.$ak.ellipsis) +
														" tabs-button",
												),
											),
											De
										);
									},
								}),
								null,
							),
							(0, i.insert)(
								ke,
								(0, E.createComponent)(u.Show, {
									get when() {
										return !A.isInEditor;
									},
									get children() {
										return [
											(() => {
												const De = P();
												return (
													De.addEventListener("mouseleave", () => oe()),
													De.addEventListener("mouseenter", (Re) =>
														le(Re, "Open as editor"),
													),
													De.addEventListener("click", () => {
														me(), A.onClose?.();
													}),
													De.style.setProperty("padding", "2px"),
													(0, r.effect)(() =>
														(0, m.className)(
															De,
															p.ThemeIcon.asClassName(h.$ak.chromeMinimize) +
																" tabs-button",
														),
													),
													De
												);
											})(),
											(() => {
												const De = P();
												return (
													De.addEventListener("mouseleave", () => oe()),
													De.addEventListener("mouseenter", (Re) =>
														le(Re, "Use in AI chat"),
													),
													De.addEventListener("click", () => {
														ge();
													}),
													De.style.setProperty("padding", "2px"),
													De.style.setProperty("font-size", "12px"),
													(0, r.effect)(() =>
														(0, m.className)(
															De,
															p.ThemeIcon.asClassName(h.$ak.comment) +
																" tabs-button",
														),
													),
													De
												);
											})(),
											(() => {
												const De = P();
												return (
													De.addEventListener("mouseleave", () => oe()),
													De.addEventListener("mouseenter", (Re) =>
														le(
															Re,
															`Use in composer (${g.$m ? "\u2318" : "^"}B)`,
														),
													),
													De.addEventListener("click", () => {
														const Re = $e;
														Re && be(Re);
													}),
													De.style.setProperty("padding", "2px"),
													De.style.setProperty(
														"color",
														"var(--vscode-editor-foreground)",
													),
													De.style.setProperty("font-size", "13px"),
													(0, r.effect)(() =>
														(0, m.className)(
															De,
															p.ThemeIcon.asClassName(h.$ak.symbolMethod) +
																" tabs-button",
														),
													),
													De
												);
											})(),
										];
									},
								}),
								null,
							),
							Ue.style.setProperty("flex", "1"),
							Ue.style.setProperty("display", "flex"),
							Ue.style.setProperty("flex-direction", "column"),
							Ue.style.setProperty("overflow", "hidden"),
							Ue.style.setProperty("position", "relative"),
							qe.style.setProperty("width", "100%"),
							qe.style.setProperty("height", "100%"),
							qe.style.setProperty("display", "flex"),
							qe.style.setProperty("position", "relative"),
							(0, i.insert)(
								qe,
								(0, E.createComponent)(s.$iAc, {
									get customId() {
										return A.notepadId;
									},
									get disableGoToDefinition() {
										return !A.isInEditor;
									},
									get commandListeners() {
										return Ce();
									},
									get mentionDecorationIdsToRemove() {
										return O();
									},
									get text() {
										return V();
									},
									setText: (De) => U.updateNotepadData(H().id, { text: De }),
									placeholder: "Type your thoughts, use @ to mention files",
									getContext: () => H().context,
									setContext: (...De) => {
										U.setNotepadsData("notepads", H().id, "context", ...De);
									},
									forceRerender: G,
									get onEscape() {
										return A.onEscape;
									},
									get paddingTop() {
										return A.isInEditor ? 0 : 18;
									},
									setEditor: (De) => {
										De && A.setEditor?.(De), ($e = De ?? void 0);
									},
								}),
								Ae,
							),
							Ae.style.setProperty("position", "absolute"),
							Ae.style.setProperty("bottom", "8px"),
							Ae.style.setProperty("right", "8px"),
							Ae.style.setProperty("z-index", "10"),
							(0, i.insert)(
								Ae,
								(0, E.createComponent)(S.$jAc, {
									setRef: (De) => (q = De),
									id: "notepad-add-context-button-in-top-pane",
									get notepadData() {
										return H();
									},
									openFilePickerMenu: _,
									style: { background: "var(--vscode-editor-background)" },
								}),
							),
							(0, r.effect)(
								(De) => {
									const Re = {
											display: "flex",
											height: "20px",
											position: "relative",
											...(A.isInEditor
												? {
														"justify-content": "center",
														"align-items": "center",
														"border-bottom": "none",
														padding: "8px 6px",
													}
												: {
														"justify-content": "space-between",
														"align-items": "center",
														"border-bottom":
															"1px solid var(--vscode-commandCenter-inactiveBorder)",
														padding: "4px 6px",
														background: Ee(),
													}),
										},
										je = {
											padding: A.isInEditor ? "0px 4px" : "0px 12px",
											display: "flex",
											"align-items": "center",
											gap: "6px",
											...(A.isInEditor
												? { "flex-grow": 1, "justify-content": "center" }
												: {}),
										};
									return (
										(De._v$4 = (0, d.style)(Be, Re, De._v$4)),
										(De._v$5 = (0, d.style)(Se, je, De._v$5)),
										De
									);
								},
								{ _v$4: void 0, _v$5: void 0 },
							),
							Ie
						);
					})();
				}
			},
		),
		