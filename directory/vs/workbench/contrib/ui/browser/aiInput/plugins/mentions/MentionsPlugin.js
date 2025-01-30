import '../../../../../../../../require.js';
import '../../../../../../../../exports.js';
import '../../../../../../../../external/solid/web.js';
import '../../../../../../../../external/solid/web.js';
import '../../../../../../../../external/solid/web.js';
import '../../../../../../../../external/solid/web.js';
import '../../../../../../../../external/solid/web.js';
import '../../../../../../../../external/solid/web.js';
import '../../../../../../../../external/solid/web.js';
import '../../../../../../../../external/solid/web.js';
import '../../../../../../../../external/solid/web.js';
import '../../../../../../../../external/lexical/lexical-solid/LexicalComposerContext.js';
import '../../../../../../../../external/lexical/lexical-solid/LexicalTypeaheadMenuPlugin.js';
import '../../../../../../../../external/lexical/lexical-solid/shared/LexicalMenu.js';
import '../../../../../../../../external/lexical/lexical-utils/api.js';
import '../../../../../../../../external/lexical/lexical/api.js';
import '../../../../../../../../external/lexical/lexical/lexical.js';
import '../../../../../../../../external/solid/solid.js';
import '../../../../../../../../proto/aiserver/v1/context_pb.js';
import '../../../../../../../base/browser/dom.js';
import '../../../../../../../base/common/codicons.js';
import '../../../../../../../base/common/lifecycle.js';
import '../../../../../../../base/common/path.js';
import '../../../../../../../base/common/themables.js';
import '../../../../../../../base/common/uri.js';
import '../../../../../../../base/common/uuid.js';
import '../../../../../../../editor/common/core/range.js';
import '../../../../../../../platform/dnd/browser/dnd.js';
import '../../../../../../../platform/reactivestorage/browser/reactiveStorageTypes.js';
import '../../../../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../../../../../../../platform/theme/common/iconRegistry.js';
import '../../../../../aichat/browser/codeSelections.js';
import '../InputBoxMenu.js';
import './pureIcon.js';
import './searchHooks.js';
import './types.js';
import '../recognizers.js';
import '../../../widgets/codeBlock.js';
import '../../../../../controlCommon/browser/solid.js';
import './MentionNode.js';
import '../../../../../../../../external/lexical/lexical-selection/lexical-node.js';
import '../../../badge/badge.js';
import '../../../../../../../base/common/platform.js';
import '../../../../../../../css!vs/workbench/contrib/ui/browser/aiInput/plugins/mentions/MentionsPlugin.js';
define(
			de[1382],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 181, 756, 925, 304, 164, 158, 13, 228,
				7, 14, 3, 54, 26, 9, 47, 17, 347, 205, 134, 79, 354, 1069, 156, 1381,
				310, 817, 312, 36, 816, 1561, 564, 12, 2508,
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
				a /*LexicalComposerContext*/,
				h /*LexicalTypeaheadMenuPlugin*/,
				c /*LexicalMenu*/,
				n /*api*/,
				g /*api*/,
				p /*lexical*/,
				o /*solid*/,
				f /*context_pb*/,
				b /*dom*/,
				s /*codicons*/,
				l /*lifecycle*/,
				y /*path*/,
				$ /*themables*/,
				v /*uri*/,
				S /*uuid*/,
				I /*range*/,
				T /*dnd*/,
				P /*reactiveStorageTypes*/,
				k /*reactiveStorageTypes*/,
				L /*iconRegistry*/,
				D /*codeSelections*/,
				M /*InputBoxMenu*/,
				N /*pureIcon*/,
				A /*searchHooks*/,
				R /*types*/,
				O /*recognizers*/,
				B /*codeBlock*/,
				U /*solid*/,
				z /*MentionNode*/,
				F /*lexical-node*/,
				x /*badge*/,
				H /*platform*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qac = e.$pac = e.$oac = void 0),
					(e.$rac = be),
					(e.$sac = Ce),
					(e.default = Le);
				const q = (0, t.template)("<span><span>"),
					V = (0, t.template)('<span class="sizePreview"> '),
					G = (0, t.template)("<i>"),
					K = (0, t.template)("<span>"),
					J = (0, t.template)(
						'<li tabindex="-1" role="option"><span></span><span>',
					),
					W = (0, t.template)("<div>"),
					X = (0, t.template)(
						'<div class="input-box-code-selection-collapse-toggle">',
					),
					Y = (0, t.template)('<div class="input-box-code-selection"><div>'),
					ie = (0, t.template)("<span>No code to show"),
					ne = (0, t.template)("<span> to add<span></span> to multi-add"),
					ee = (0, t.template)(
						'<div id="mention-selection-preview"><div><div><div><div></div><span>',
					),
					_ = (0, t.template)("<div><span><span>"),
					te = (0, t.template)('<div id="mention-selection-preview">'),
					Q = (0, t.template)(
						'<li class="item"><span class="text">No available options',
					),
					Z = (0, t.template)("<ul>");
				(e.$oac = (0, L.$$O)(
					"chatinputbox-expand-selection",
					s.$ak.chevronDown,
					"Icon for removing a selection in the input box in AI chat.",
				)),
					(e.$pac = (0, L.$$O)(
						"chatinputbox-collapse-selection",
						s.$ak.chevronUp,
						"Icon for collapsing a selection in the input box in AI chat.",
					));
				async function se(Oe, xe) {
					try {
						return (await xe.resolve(Oe)).isDirectory;
					} catch (He) {
						return (
							console.error(`Failed to resolve the URI: ${Oe.toString()}`, He),
							!1
						);
					}
				}
				const re = [
						"node_modules",
						"__tests__",
						".git",
						"dist",
						"out",
						"bin",
						"site-packages",
						"__pycache__",
					],
					le = new RegExp("(^|\\/)" + re.join("|") + "(\\/|$)"),
					oe = new RegExp("(^|[^#])((?:" + O.$hac.NAME + "{1,})$)");
				function ae(Oe, xe) {
					const He = oe.exec(Oe);
					if (He !== null) {
						const Ke = He[1],
							Je = He[2];
						if (Je != null && Je.length >= xe)
							return {
								leadOffset: He.index + Ke.length,
								matchingString: Je,
								replaceableString: Je,
							};
					}
					return null;
				}
				const pe = (Oe) => {
					const xe = (0, o.createMemo)(() =>
							Oe.isSelected ? "item selected" : "item",
						),
						Ke = (0, U.$odc)().themeService.getColorTheme(),
						Je = Ke.getColor("menu.selectionBackground"),
						Te = Ke.getColor("menu.selectionForeground"),
						Ee = Ke.getColor("menu.inactiveSelectionForeground"),
						Ie = Ke.getColor("editorOverviewRuler.bracketMatchForeground"),
						Be = (qe) => {
							if (typeof qe == "string") return qe;
							const Ae = qe / 4,
								Me = [
									[1e6, "M toks"],
									[1e3, "K toks"],
									[1, " toks"],
								],
								[De, Re] = Me.find((Ze) => Ze[0] < Ae) ?? Me[Me.length - 1];
							return `${(Math.round(Ae / De) + "").match(/.{1,3}/g)?.join(",") ?? "<fmt err>"}${Re}`;
						},
						[Se, { refetch: ke }] = (0, o.createResource)(
							() => Oe.option.sizeBytes,
						),
						Ue = (0, o.createMemo)(() =>
							Se.loading || Se.error || Se() === void 0
								? ""
								: "(" + Be(Se() ?? 0) + ")",
						);
					return (() => {
						const qe = J(),
							Ae = qe.firstChild,
							Me = Ae.nextSibling;
						qe.addEventListener("click", () => {
							Oe.onClick();
						}),
							qe.addEventListener("mousemove", (Re) => {
								Oe.onMouseEnterOrMove(Re);
							}),
							qe.addEventListener("mouseenter", (Re) => {
								Oe.onMouseEnterOrMove(Re);
							});
						const De = Oe.option.setRefElement;
						return (
							typeof De == "function"
								? (0, u.use)(De, qe)
								: (Oe.option.setRefElement = qe),
							Ae.style.setProperty("display", "flex"),
							(0, r.insert)(Ae, () => Oe.option.picture),
							(0, r.insert)(Me, () => Oe.option.name),
							(0, r.insert)(
								qe,
								(0, C.createComponent)(o.Show, {
									get when() {
										return Oe.option.secondaryText;
									},
									get children() {
										return [
											(() => {
												const Re = q(),
													je = Re.firstChild;
												return (
													je.style.setProperty("direction", "ltr"),
													je.style.setProperty("unicode-bidi", "embed"),
													(0, r.insert)(je, () => Oe.option.secondaryText),
													(0, m.effect)(
														(Ve) => {
															const Ze =
																	"secondary-text" +
																	(Oe.option.type === "staticheading"
																		? " heading"
																		: ""),
																et = Oe.isSelected
																	? (Ee?.toString() ?? "")
																	: (Ie?.toString() ?? "");
															return (
																Ze !== Ve._v$ &&
																	(0, d.className)(Re, (Ve._v$ = Ze)),
																et !== Ve._v$2 &&
																	((Ve._v$2 = et) != null
																		? Re.style.setProperty("color", et)
																		: Re.style.removeProperty("color")),
																Ve
															);
														},
														{ _v$: void 0, _v$2: void 0 },
													),
													Re
												);
											})(),
											(0, C.createComponent)(o.Show, {
												get when() {
													return Oe.option.sizeBytes !== void 0;
												},
												get children() {
													const Re = V(),
														je = Re.firstChild;
													return (0, r.insert)(Re, Ue, null), Re;
												},
											}),
										];
									},
								}),
								null,
							),
							(0, r.insert)(
								qe,
								(0, C.createComponent)(o.Show, {
									get when() {
										return Oe.option.type === "heading";
									},
									get children() {
										const Re = G();
										return (
											Re.style.setProperty("margin-left", "auto"),
											(0, m.effect)(() =>
												(0, d.className)(
													Re,
													$.ThemeIcon.asClassName(s.$ak.arrowRight),
												),
											),
											Re
										);
									},
								}),
								null,
							),
							(0, r.insert)(
								qe,
								(0, C.createComponent)(o.Show, {
									get when() {
										return Oe.option.onSettingClick !== void 0;
									},
									get children() {
										const Re = K();
										return (
											Re.addEventListener("click", (je) => {
												je.stopPropagation(),
													Oe.option.onSettingClick &&
														Oe.option?.onSettingClick();
											}),
											(0, m.effect)(
												(je) => {
													const Ve = $.ThemeIcon.asClassName(
															s.$ak.settingsGear,
														),
														Ze = Oe.option.secondaryText ? "4px" : "auto";
													return (
														Ve !== je._v$3 &&
															(0, d.className)(Re, (je._v$3 = Ve)),
														Ze !== je._v$4 &&
															((je._v$4 = Ze) != null
																? Re.style.setProperty("margin-left", Ze)
																: Re.style.removeProperty("margin-left")),
														je
													);
												},
												{ _v$3: void 0, _v$4: void 0 },
											),
											Re
										);
									},
								}),
								null,
							),
							(0, r.insert)(
								qe,
								(0, C.createComponent)(o.Show, {
									get when() {
										return Oe.isSelected && Oe.option.type === "auto_context";
									},
									get children() {
										return (0, C.createComponent)(x.$nac, {
											size: "small",
											get text() {
												return (0, E.memo)(() => Oe.option.score !== void 0)()
													? `semantic (${Oe.option.score.toFixed(2)})`
													: "semantic";
											},
											style: { "margin-left": "6px" },
										});
									},
								}),
								null,
							),
							(0, m.effect)(
								(Re) => {
									const je = xe(),
										Ve = Oe.isSelected,
										Ze = "typeahead-item-" + Oe.index,
										et = {
											...(Oe.isSelected
												? {
														"background-color": Je?.toString() ?? "",
														color: Te?.toString() ?? "",
													}
												: {}),
											cursor:
												Oe.option.type === "staticheading"
													? "default"
													: "pointer",
										},
										rt = Oe.isSelected
											? (Ee?.toString() ?? "")
											: (Ie?.toString() ?? ""),
										ft =
											(Oe.option.type === "heading" ||
												Oe.option.type === "staticheading",
											"0px"),
										bt =
											"text" +
											(Oe.option.type === "staticheading" ? " heading" : "");
									return (
										je !== Re._v$5 && (0, d.className)(qe, (Re._v$5 = je)),
										Ve !== Re._v$6 &&
											(0, w.setAttribute)(qe, "aria-selected", (Re._v$6 = Ve)),
										Ze !== Re._v$7 &&
											(0, w.setAttribute)(qe, "id", (Re._v$7 = Ze)),
										(Re._v$8 = (0, i.style)(qe, et, Re._v$8)),
										rt !== Re._v$9 &&
											((Re._v$9 = rt) != null
												? Ae.style.setProperty("color", rt)
												: Ae.style.removeProperty("color")),
										ft !== Re._v$10 &&
											((Re._v$10 = ft) != null
												? Ae.style.setProperty("margin-left", ft)
												: Ae.style.removeProperty("margin-left")),
										bt !== Re._v$11 && (0, d.className)(Me, (Re._v$11 = bt)),
										Re
									);
								},
								{
									_v$5: void 0,
									_v$6: void 0,
									_v$7: void 0,
									_v$8: void 0,
									_v$9: void 0,
									_v$10: void 0,
									_v$11: void 0,
								},
							),
							qe
						);
					})();
				};
				function $e() {
					let Oe = "abcdefghijklmnopqrstuvwxyz",
						xe = "";
					for (let He = 0; He < 10; He++)
						xe += Oe.charAt(Math.floor(Math.random() * Oe.length));
					return v.URI.parse(`aichat-code-block-anysphere://${xe}`);
				}
				const ye = (Oe, xe, He) => {
					const Ke = He ?? 12,
						Je = 18,
						[Te, Ee] = (0, o.createSignal)(!1),
						Ie = Oe.text,
						Be = (() => {
							const je = W();
							return (
								je.style.setProperty("width", "100%"),
								je.style.setProperty("height", "100%"),
								je.style.setProperty("box-sizing", "border-box"),
								je
							);
						})(),
						Se = xe.instantiationService.createInstance(
							B.$X0b,
							Be,
							{
								...B.$X0b.getEditorOptions(xe.configurationService),
								fontSize: 10,
								lineHeight: 1.5,
							},
							{},
						),
						ke = new RegExp(/```[\w\s]*\nundefined\n```/),
						Ue = Ie.match(/```(\w*)/)?.[1] || "",
						qe = xe.languageService.createByLanguageNameOrFilepathOrFirstLine(
							Ue,
							null,
							void 0,
						),
						Ae = $e(),
						Me = Ie.split(`
`).slice(1, -1),
						De = Me.length > Je,
						Re = xe.modelService.createModel(
							Me.join(`
`),
							qe,
							Ae,
							!1,
						);
					return (
						Se.setModel(Re),
						(0, o.createEffect)(() => {
							Te()
								? Se.updateOptions({
										scrollbar: {
											vertical: "auto",
											verticalScrollbarSize: 10,
											horizontal: "auto",
											handleMouseWheel: !0,
											alwaysConsumeMouseWheel: !0,
											horizontalScrollbarSize: 10,
											ignoreHorizontalScrollbarInContentHeight: !0,
										},
									})
								: (Se.updateOptions({
										scrollbar: {
											vertical: "hidden",
											verticalScrollbarSize: 0,
											horizontal: "hidden",
											handleMouseWheel: !1,
											alwaysConsumeMouseWheel: !1,
											horizontalScrollbarSize: 0,
											ignoreHorizontalScrollbarInContentHeight: !0,
										},
									}),
									Se.setScrollTop(0),
									Se.setScrollLeft(0));
						}),
						(0, o.onCleanup)(() => {
							Se.dispose(), Re.dispose(), Be.remove();
						}),
						(() => {
							const je = Y(),
								Ve = je.firstChild;
							return (
								je.style.setProperty(
									"background-color",
									"var(--vscode-editor-background)",
								),
								je.style.setProperty(
									"border",
									"1px solid var(--vscode-commandCenter-inactiveBorder)",
								),
								je.style.setProperty("border-radius", "2px"),
								je.style.setProperty("position", "relative"),
								je.style.setProperty("overflow", "hidden"),
								Ve.style.setProperty("white-space", "pre"),
								Ve.style.setProperty("padding", "0.25rem 0.4rem"),
								(0, r.insert)(
									Ve,
									(() => {
										const Ze = (0, E.memo)(() => !!ke.test(Ie));
										return () =>
											Ze()
												? (() => {
														const et = ie();
														return (
															et.style.setProperty(
																"color",
																"var(--vscode-input-placeholderForeground)",
															),
															et
														);
													})()
												: Be;
									})(),
									null,
								),
								(0, r.insert)(
									Ve,
									(0, C.createComponent)(o.Show, {
										when: De,
										get children() {
											const Ze = X();
											return (
												Ze.addEventListener("click", () => {
													Ee(!Te());
												}),
												(0, r.insert)(
													Ze,
													(0, C.createComponent)(o.Switch, {
														get children() {
															return [
																(0, C.createComponent)(o.Match, {
																	get when() {
																		return !Te();
																	},
																	get children() {
																		const et = K();
																		return (
																			(0, m.effect)(() =>
																				(0, d.className)(
																					et,
																					$.ThemeIcon.asClassName(e.$oac),
																				),
																			),
																			et
																		);
																	},
																}),
																(0, C.createComponent)(o.Match, {
																	get when() {
																		return Te();
																	},
																	get children() {
																		const et = K();
																		return (
																			(0, m.effect)(() =>
																				(0, d.className)(
																					et,
																					$.ThemeIcon.asClassName(e.$pac),
																				),
																			),
																			et
																		);
																	},
																}),
															];
														},
													}),
												),
												(0, m.effect)((et) =>
													(0, i.style)(
														Ze,
														{
															right: Te() ? "10px" : 0,
															bottom: Te() ? "10px" : 0,
															...(Te()
																? { "background-color": "transparent" }
																: {}),
														},
														et,
													),
												),
												Ze
											);
										},
									}),
									null,
								),
								(0, m.effect)(() =>
									(De
										? Te()
											? `${15 * Je}px`
											: `${15 * Ke}px`
										: `${15 * Me.length}px`) != null
										? Ve.style.setProperty(
												"height",
												De
													? Te()
														? `${15 * Je}px`
														: `${15 * Ke}px`
													: `${15 * Me.length}px`,
											)
										: Ve.style.removeProperty("height"),
								),
								je
							);
						})()
					);
				};
				e.$qac = ye;
				const ue = (Oe) => {
					const [Je, Te] = (0, o.createSignal)(),
						[Ee, Ie] = (0, o.createSignal)(),
						Be = (0, U.$odc)();
					(0, o.createEffect)(async () => {
						if (
							Oe.selectedOption.type === "file" ||
							Oe.selectedOption.type === "auto_context"
						) {
							Te(void 0);
							const Me = Oe.selectedOption.selectionPrecursor?.uri.fsPath;
							if (!Me) return;
							const De =
								await Be.everythingProviderService.provider?.runCommand(
									k.FileRetrievalActions.GetDirectory,
									{ fsPath: Me },
								);
							if (!De) {
								Ie(void 0);
								return;
							}
							const Re = Be.workspaceContextService.asRelativePath(
									v.URI.file(Me),
								),
								je = (0, y.$sc)(Re),
								Ve = Re.replace(je, "");
							Ie({
								basePath: Ve,
								relativeWorkspacePath: Re,
								neighboringFiles: De,
							});
							return;
						}
						Ie(void 0);
						const Ae = await be(Oe.selectedOption, Be);
						if (
							Ae.type === P.SelectionType.Failure ||
							Ae.type === P.SelectionType.None ||
							Ae.type === P.SelectionType.Image ||
							Ae.type === P.SelectionType.Folder ||
							Ae.type === P.SelectionType.Docs ||
							Oe.selectedOption.type !== R.TypeaheadOptionType.code
						) {
							Te(void 0);
							return;
						}
						if (Ae.type === P.SelectionType.File) {
							const Me = await (0, D.$2fc)(
								Be.textModelService,
								Be.dataScrubbingService,
								Ae.selectionWithoutUuid,
							);
							Te(Me);
							return;
						}
						Te(Ae.selectionWithoutUuid);
					});
					const [Se, ke] = (0, o.createSignal)({
						top: Oe.selectedIndex * 24,
						right: -364,
					});
					(0, o.createEffect)(() => {
						const Ae = Ee() ? 300 : 360;
						let Me = Oe.selectedIndex * 20,
							De = -(Ae + 4);
						const Re = Oe.optionsListRef,
							je = Oe.selectedIndex,
							Ve = Re?.getBoundingClientRect();
						if (!Ve) return;
						Ve.right - De > Be.window.document.body.clientWidth &&
							(De = Ve.width + 4);
						const et = Be.window.document.getElementById(
							`typeahead-item-${Oe.selectedIndex}`,
						);
						if (et) {
							const rt = et.getBoundingClientRect(),
								ft = Oe.optionsListRef?.getBoundingClientRect();
							ft && (Me = rt.top - ft.top);
						}
						ke({ top: Me, right: De }),
							Be.window.requestIdleCallback(() => {
								const ft = Be.window.document
									.getElementById("mention-selection-preview")
									?.getBoundingClientRect();
								if (!ft) return;
								const bt = Be.window.document.getElementById(
									`typeahead-item-${je}`,
								);
								if (bt && Re) {
									const nt = bt.getBoundingClientRect(),
										lt = Re.getBoundingClientRect();
									(Me = nt.top - lt.top),
										nt.top + ft.height > Be.window.document.body.clientHeight &&
											(Me = nt.top - lt.top - ft.height + nt.height),
										ke({ top: Me, right: De });
								}
							});
					}, [Oe.selectedIndex]);
					const Ue = (0, o.createMemo)(
							() =>
								Ee()
									?.basePath.split("/")
									.filter((Ae) => !!Ae.trim()) ?? [],
						),
						qe = 12;
					return [
						(0, C.createComponent)(o.Show, {
							get when() {
								return Ee();
							},
							children: (Ae) =>
								(() => {
									const Me = ee(),
										De = Me.firstChild,
										Re = De.firstChild,
										je = Re.firstChild,
										Ve = je.firstChild,
										Ze = Ve.nextSibling;
									return (
										Me.style.setProperty("width", "300px"),
										Me.style.setProperty("border-radius", "2px"),
										Me.style.setProperty("position", "absolute"),
										Me.style.setProperty("overflow", "hidden"),
										Me.style.setProperty("font-size", "11px"),
										De.style.setProperty(
											"background-color",
											"var(--vscode-editor-background)",
										),
										De.style.setProperty(
											"border",
											"1px solid var(--vscode-commandCenter-inactiveBorder)",
										),
										De.style.setProperty("border-radius", "3px"),
										De.style.setProperty("display", "flex"),
										De.style.setProperty("flex-direction", "column"),
										De.style.setProperty("gap", "2px"),
										De.style.setProperty("position", "relative"),
										De.style.setProperty("overflow", "hidden"),
										Re.style.setProperty("display", "flex"),
										Re.style.setProperty("flex-direction", "column"),
										Re.style.setProperty("gap", "4px"),
										Re.style.setProperty("padding", "0.25rem 0.4rem"),
										(0, r.insert)(
											Re,
											(0, C.createComponent)(o.For, {
												get each() {
													return Ue();
												},
												children: (et, rt) =>
													(() => {
														const ft = _(),
															bt = ft.firstChild,
															nt = bt.firstChild;
														return (
															ft.style.setProperty("display", "flex"),
															ft.style.setProperty("align-items", "center"),
															ft.style.setProperty("overflow", "hidden"),
															ft.style.setProperty("text-overflow", "ellipsis"),
															ft.style.setProperty("white-space", "nowrap"),
															(0, r.insert)(
																ft,
																(0, C.createComponent)(o.For, {
																	get each() {
																		return Array(rt());
																	},
																	children: (lt) =>
																		(() => {
																			const ct = W();
																			return (
																				ct.style.setProperty(
																					"margin-left",
																					"12px",
																				),
																				ct.style.setProperty(
																					"border-left",
																					"1px solid var(--vscode-commandCenter-inactiveBorder)",
																				),
																				ct.style.setProperty(
																					"display",
																					"inline-block",
																				),
																				ct
																			);
																		})(),
																}),
																bt,
															),
															bt.style.setProperty("display", "flex"),
															bt.style.setProperty("align-items", "center"),
															bt.style.setProperty("gap", "4px"),
															bt.style.setProperty("overflow", "hidden"),
															bt.style.setProperty("text-overflow", "ellipsis"),
															bt.style.setProperty("white-space", "nowrap"),
															(0, r.insert)(bt, et, null),
															(0, m.effect)(
																(lt) => {
																	const ct = rt() === Ue().length - 1 ? 1 : 0.5,
																		gt = "calc(100% - " + qe * rt() + "px)",
																		ht = $.ThemeIcon.asClassName(s.$ak.folder);
																	return (
																		ct !== lt._v$15 &&
																			((lt._v$15 = ct) != null
																				? bt.style.setProperty("opacity", ct)
																				: bt.style.removeProperty("opacity")),
																		gt !== lt._v$16 &&
																			((lt._v$16 = gt) != null
																				? bt.style.setProperty("max-width", gt)
																				: bt.style.removeProperty("max-width")),
																		ht !== lt._v$17 &&
																			(0, d.className)(nt, (lt._v$17 = ht)),
																		lt
																	);
																},
																{ _v$15: void 0, _v$16: void 0, _v$17: void 0 },
															),
															ft
														);
													})(),
											}),
											je,
										),
										je.style.setProperty("display", "flex"),
										je.style.setProperty("align-items", "center"),
										je.style.setProperty("overflow", "hidden"),
										je.style.setProperty("text-overflow", "ellipsis"),
										je.style.setProperty("white-space", "nowrap"),
										Ve.style.setProperty(
											"border-left",
											"1px solid var(--vscode-commandCenter-inactiveBorder)",
										),
										Ve.style.setProperty("display", "inline-block"),
										Ze.style.setProperty("display", "flex"),
										Ze.style.setProperty("align-items", "center"),
										Ze.style.setProperty("gap", "4px"),
										Ze.style.setProperty("overflow", "hidden"),
										Ze.style.setProperty("text-overflow", "ellipsis"),
										Ze.style.setProperty("white-space", "nowrap"),
										(0, r.insert)(
											Ze,
											(0, C.createComponent)(N.$k$b, {
												get fileName() {
													return (0, y.$sc)(Ae().relativeWorkspacePath);
												},
												get workspaceContextService() {
													return Be.workspaceContextService;
												},
												get modelService() {
													return Be.modelService;
												},
												get languageService() {
													return Be.languageService;
												},
											}),
											null,
										),
										(0, r.insert)(
											Ze,
											() => (0, y.$sc)(Ae().relativeWorkspacePath),
											null,
										),
										(0, r.insert)(
											De,
											(0, C.createComponent)(o.Show, {
												get when() {
													return (
														Oe.selectedOption.type !== "staticheading" &&
														Oe.selectedOption.type !== "heading" &&
														!Oe.selectedOption.isSlash
													);
												},
												get children() {
													const et = ne(),
														rt = et.firstChild,
														ft = rt.nextSibling,
														bt = ft.nextSibling;
													return (
														et.style.setProperty("line-height", "14px"),
														et.style.setProperty("justify-self", "flex-end"),
														et.style.setProperty("width", "100%"),
														et.style.setProperty("opacity", "0.7"),
														et.style.setProperty("box-sizing", "border-box"),
														et.style.setProperty("font-size", "0.9em"),
														et.style.setProperty(
															"color",
															"var(--vscode-input-placeholderForeground)",
														),
														et.style.setProperty("flex-shrink", "0"),
														et.style.setProperty("display", "flex"),
														et.style.setProperty("align-items", "center"),
														et.style.setProperty("gap", "4px"),
														et.style.setProperty(
															"background-color",
															"var(--vscode-dropdown-background)",
														),
														et.style.setProperty("padding", "0.15rem 0.4rem"),
														et.style.setProperty("justify-content", "flex-end"),
														(0, r.insert)(et, (H.$m, "\u23CE"), rt),
														ft.style.setProperty("width", "2px"),
														ft.style.setProperty("height", "2px"),
														ft.style.setProperty(
															"background-color",
															"var(--vscode-input-placeholderForeground)",
														),
														ft.style.setProperty("border-radius", "50%"),
														ft.style.setProperty("display", "inline-block"),
														(0, r.insert)(
															et,
															H.$m ? "\u21E7\u23CE" : "Shift+\u23CE",
															bt,
														),
														et
													);
												},
											}),
											null,
										),
										(0, m.effect)(
											(et) => {
												const rt = Se().top + "px",
													ft = Se().right + "px",
													bt = qe * Ue().length + "px";
												return (
													rt !== et._v$12 &&
														((et._v$12 = rt) != null
															? Me.style.setProperty("top", rt)
															: Me.style.removeProperty("top")),
													ft !== et._v$13 &&
														((et._v$13 = ft) != null
															? Me.style.setProperty("right", ft)
															: Me.style.removeProperty("right")),
													bt !== et._v$14 &&
														((et._v$14 = bt) != null
															? Ve.style.setProperty("margin-left", bt)
															: Ve.style.removeProperty("margin-left")),
													et
												);
											},
											{ _v$12: void 0, _v$13: void 0, _v$14: void 0 },
										),
										Me
									);
								})(),
						}),
						(0, C.createComponent)(o.Show, {
							get when() {
								return Je();
							},
							children: (Ae) =>
								(() => {
									const Me = te();
									return (
										Me.style.setProperty("width", "360px"),
										Me.style.setProperty("border-radius", "2px"),
										Me.style.setProperty("position", "absolute"),
										(0, r.insert)(Me, () => (0, e.$qac)(Ae(), Be)),
										(0, m.effect)(
											(De) => {
												const Re = Se().top + "px",
													je = Se().right + "px";
												return (
													Re !== De._v$18 &&
														((De._v$18 = Re) != null
															? Me.style.setProperty("top", Re)
															: Me.style.removeProperty("top")),
													je !== De._v$19 &&
														((De._v$19 = je) != null
															? Me.style.setProperty("right", je)
															: Me.style.removeProperty("right")),
													De
												);
											},
											{ _v$18: void 0, _v$19: void 0 },
										),
										Me
									);
								})(),
						}),
					];
				};
				async function fe(Oe, xe) {
					if (Oe.selectionPrecursor === void 0)
						return {
							type: P.SelectionType.Failure,
							message: "No selection precursor",
						};
					if (A.$6_b.test(Oe.selectionPrecursor.uri.fsPath))
						return {
							type: P.SelectionType.Image,
							imageUri: Oe.selectionPrecursor.uri,
						};
					const He = xe.modelService.getModel(Oe.selectionPrecursor.uri);
					if (He !== null) {
						if (He.getValueLength() > 1e6)
							return {
								type: P.SelectionType.Failure,
								message: "File too large - over 1M chars",
							};
					} else {
						const { size: Je } = await xe.fileService.stat(
							Oe.selectionPrecursor.uri,
						);
						if (Je > 2e6)
							return {
								type: P.SelectionType.Failure,
								message: "File too large",
							};
					}
					const Ke = Oe.selectionPrecursor.uri;
					return {
						type: P.SelectionType.File,
						selectionWithoutUuid: { uri: Ke },
					};
				}
				async function me(Oe, xe) {
					return Oe.docSelection
						? {
								type: P.SelectionType.Docs,
								selectionWithoutUuid: Oe.docSelection,
							}
						: { type: P.SelectionType.None };
				}
				async function ve(Oe, xe) {
					return Oe.secondaryText
						? {
								type: P.SelectionType.Folder,
								selectionWithoutUuid: {
									relativePath:
										typeof Oe.secondaryText == "string" ? Oe.secondaryText : "",
								},
							}
						: { type: P.SelectionType.Failure, message: "No secondary text" };
				}
				async function ge(Oe, xe) {
					if (Oe.selectionPrecursor === void 0)
						return {
							type: P.SelectionType.Failure,
							message: "No selection precursor",
						};
					let He;
					Oe.selectionPrecursor.initialRange !== void 0 &&
						(He = new I.$iL(
							Oe.selectionPrecursor.initialRange.startLineNumber - 0,
							1,
							Oe.selectionPrecursor.initialRange.endLineNumber + 0,
							1,
						));
					const Ke = await (0, D.$Vfc)(
						xe.textModelService,
						xe.dataScrubbingService,
						Oe.selectionPrecursor.uri,
						He,
					);
					return Ke === void 0
						? {
								type: P.SelectionType.Failure,
								message: "Unable to get code selection",
							}
						: { type: P.SelectionType.Code, selectionWithoutUuid: Ke };
				}
				async function be(Oe, xe) {
					return Oe.type === "file" || Oe.type === "auto_context"
						? await fe(Oe, xe)
						: Oe.type === "code"
							? await ge(Oe, xe)
							: Oe.type === "folder"
								? await ve(Oe, xe)
								: Oe.type === "doc"
									? await me(Oe, xe)
									: { type: P.SelectionType.None };
				}
				function Ce(Oe, xe, He, Ke) {
					if (xe.removeMention && xe.removeMention(Ke)) return;
					const Je = Oe.selections.findIndex((Ue) => Ue.uuid === Ke),
						Te = Oe.fileSelections.findIndex((Ue) => Ue.uuid === Ke),
						Ee = Oe.commits.findIndex((Ue) => Ue.uuid === Ke),
						Ie = Oe.pullRequests.findIndex((Ue) => Ue.uuid === Ke),
						Be = Oe.folderSelections.findIndex((Ue) => Ue.uuid === Ke),
						Se = Oe.imageUuids.findIndex((Ue) => Ue === Ke),
						ke = Oe.links.findIndex((Ue) => Ue.uuid === Ke);
					Ke === Oe.gitDiffUuid
						? xe.removeGitDiff()
						: Ke === Oe.diffToMainUuid
							? xe.removeDiffToMain()
							: Je !== -1
								? xe.removeSelection(Je)
								: Te !== -1
									? xe.removeFileSelection(Te)
									: Ee !== -1
										? xe.removeCommit(Ee)
										: Ie !== -1
											? xe.removePullRequest(Ie)
											: He in Oe.lintKeys
												? xe.removeLinterErrors()
												: He in Oe.webKeys
													? xe.removeWeb()
													: He in Oe.repoMapKeys
														? xe.removeRepoMap?.()
														: He in Oe.currentFileKeys
															? xe.removeCurrentFile()
															: He in Oe.codebaseKeys
																? xe.removeCodebase()
																: Be !== -1
																	? xe.removeFolderSelection(Be)
																	: Se !== -1
																		? xe.removeImage(Ke)
																		: ke !== -1
																			? xe.removeLink(Ke)
																			: xe.removeDocs(Ke);
				}
				function Le(Oe) {
					const xe = (0, U.$odc)(),
						[He] = (0, a.useLexicalComposerContext)(),
						[Ke, Je] = (0, o.createSignal)(R.TypeaheadOptionType.none),
						[Te, Ee] = (0, o.createSignal)(!1),
						[Ie, Be] = (0, o.createSignal)(null),
						[Se, ke] = (0, o.createSignal)(""),
						Ue = new l.$Zc();
					(0, o.onCleanup)(() => {
						Ue.dispose();
					});
					const qe = (0, o.createMemo)(() =>
							Oe.contextSessionUuid
								? xe.aiContextSessionService.getReactiveReadonlyContextSession(
										Oe.contextSessionUuid,
									)
								: void 0,
						),
						[Ae, Me] = (0, o.createSignal)(!1);
					function De(Wt) {
						let tt = gt.get(Wt);
						return (
							tt ||
								gt.forEach((at) => {
									at.storedKey === Wt && (tt = at);
								}),
							tt
						);
					}
					(0, o.createEffect)(() => {
						const Wt = qe();
						if (Wt === void 0) return;
						const tt = Wt.intents.map((at) => at.intent.uuid);
						gt.forEach((at, pi) => {
							const Li = at.__contextIntent?.uuid;
							Li &&
								!tt.includes(Li) &&
								He.update(() => {
									const Di = De(pi);
									Di && (Di.remove(), gt.delete(Di.__key));
								});
						});
					}),
						(0, o.createEffect)(() => {
							const Wt = Oe.mentionToAdd,
								tt = Oe.setMentionToAdd;
							Wt &&
								Wt.type === "file" &&
								He.update(() => {
									const at =
											Wt.relativePath.split("/").pop() ?? Wt.relativePath,
										pi = [],
										Li = new R.$u_b(
											at,
											pi,
											R.TypeaheadOptionType.file,
											0,
											{ uri: Wt.uri },
											void 0,
											Wt.relativePath,
										);
									jt(Li, void 0, Wt.defaultCollapsed), tt?.(null);
								});
						}),
						(0, o.createEffect)(() => {
							const Wt = Oe.mentionIdToDelete,
								tt = Oe.setMentionIdToDelete;
							Wt !== null &&
								He.update(() => {
									const at = De(Wt);
									at && (at.remove(), gt.delete(at.__key)), tt(null);
								});
						}),
						(0, o.createEffect)(() => {
							const Wt = He.getRootElement();
							if (!Wt) return;
							const tt = xe.fileService,
								at = new b.$Hhb(Wt, {
									onDrop: async (pi) => {
										const Li = pi.dataTransfer?.files[0]?.type;
										if (Li !== void 0 && Li !== "text/plain" && Li !== "")
											return;
										const Di = [];
										(
											await xe.instantiationService.invokeFunction((Wi) =>
												(0, T.$jzb)(Wi, pi),
											)
										).forEach((Wi) => {
											const Gi = Wi.resource;
											if (!Gi) return;
											const qi = xe.workspaceContextService.asRelativePath(Gi),
												Oi =
													qi
														.split("/")
														.filter((yi) => yi !== "")
														.pop() ?? qi;
											Gi.scheme === "file" &&
												se(Gi, tt).then((yi) => {
													if (yi) {
														const Ai = new R.$u_b(
															Oi,
															Di,
															R.TypeaheadOptionType.folder,
															0,
															{ uri: Gi },
															void 0,
															qi,
														);
														jt(Ai);
													} else {
														const Ai = qi.split("/").pop() ?? qi,
															li = new R.$u_b(
																Ai,
																Di,
																R.TypeaheadOptionType.file,
																0,
																{ uri: Gi },
																void 0,
																qi,
															);
														jt(li);
													}
												});
										});
									},
									onDragEnter: async (pi) => {},
									onDragLeave: (pi) => {},
									onDragEnd: (pi) => {},
								});
							Ue.add(at);
						}),
						(0, o.createEffect)(() => {
							const Wt = He.getRootElement();
							if (!Wt) return;
							const tt = (at) => {
								const pi = at.target;
								if (!(0, b.$Ygb)(pi)) return;
								const Li = pi.getAttribute("data-typeahead-type");
								if (Li && Li === R.TypeaheadOptionType.link) {
									const Di = pi.getAttribute("data-mention-key"),
										Ui = pi.getAttribute("data-mention-name");
									if (!Di || !Ui) return;
									at.stopPropagation(), at.preventDefault();
									const Wi = pi.getBoundingClientRect();
									xe.commandService.executeCommand(
										"cursor.mentionLinkToolbar",
										{
											x: Wi.left,
											y: Wi.bottom + 2,
											link: Ui,
											onRemove: () => {
												He.update(() => {
													const Gi = (0, g.$getSelection)();
													Gi &&
														(Gi.insertText(Ui),
														gt.get(Di)?.remove(),
														Oe.removeLink(Di),
														He.focus());
												});
											},
										},
									);
								}
							};
							Wt.addEventListener("click", tt),
								(0, o.onCleanup)(() => {
									Wt.removeEventListener("click", tt);
								});
						});
					const Re = He.registerCommand(
						g.KEY_ESCAPE_COMMAND,
						(Wt) =>
							Te() && Jt().length > 0
								? (Ee(!1), si([]), Oe.onMentionsMenuClose?.(), !0)
								: !1,
						g.COMMAND_PRIORITY_CRITICAL,
					);
					(0, o.onCleanup)(() => {
						Re();
					});
					const [je, Ve] = (0, o.createSignal)([]),
						[Ze, et] = (0, o.createSignal)([]),
						[rt, ft] = (0, o.createSignal)([]),
						[bt, nt] = (0, o.createSignal)([]),
						[lt, ct] = (0, o.createSignal)([]),
						gt = new Map(),
						ht = He.registerMutationListener(z.$2_b, (Wt) => {
							for (let [tt, at] of Wt)
								if (at === "created")
									He.update(() => {
										const pi = (0, g.$getNodeByKey)(tt);
										pi &&
											(gt.set(tt, pi),
											pi.metadata?.selectedOption &&
												jt(pi.metadata.selectedOption, pi));
									});
								else if (at === "destroyed") {
									Kt(!1), Je(R.TypeaheadOptionType.none);
									const pi = De(tt);
									if (pi) {
										const Li = pi.__contextIntent;
										if (Li) {
											const Di = qe();
											Di !== void 0 &&
												xe.aiContextSessionService.updateContextSession(
													Di.uuid,
													{
														removedIntentUuids: [Li.uuid],
														upsertedIntents: [],
														rerankEndpoint: void 0,
													},
												);
										}
									}
									gt.delete(tt),
										Nt.delete(tt),
										pi &&
											Ce(
												{
													fileSelections: Oe.fileSelections,
													selections: Oe.selections,
													folderSelections: Oe.folderSelections,
													commits: Oe.commits,
													pullRequests: Oe.pullRequests,
													diffToMainUuid: Oe.diffToMainUuid,
													gitDiffUuid: Oe.gitDiffUuid,
													imageUuids: Oe.imageUuids,
													links: Oe.linksSelections,
													lintKeys: je(),
													currentFileKeys: Ze(),
													codebaseKeys: rt(),
													webKeys: bt(),
													repoMapKeys: lt(),
													notepadIds: Oe.notepadIds,
												},
												Oe,
												tt,
												pi.storedKey,
											);
								}
						});
					(0, o.onCleanup)(() => {
						ht();
					});
					const Rt = (Wt, tt, at, pi, Li) => {
							const Di = (0, g.$createTextNode)(""),
								Ui =
									Li?.shiftKey &&
									Wt.type !== R.TypeaheadOptionType.staticheading &&
									Wt.type !== R.TypeaheadOptionType.heading;
							if (
								(tt &&
									!Ui &&
									(tt.select(),
									Wt.type === "heading"
										? (Wt.name === R.$s_b[R.TypeaheadOptionType.folder]
												? tt.setTextContent("@/")
												: tt.setTextContent("@"),
											tt.select())
										: Wt.type === R.TypeaheadOptionType.toggle_commit_options ||
											tt.replace(Di)),
								Ui)
							) {
								jt(Wt, void 0, void 0, !0, !0);
								return;
							}
							at(), jt(Wt);
						},
						Nt = new Set(),
						jt = async (Wt, tt, at, pi = !1, Li = !1) => {
							if (tt && Nt.has(tt.__key)) return;
							if (
								(tt ||
									(Wt.type !== R.TypeaheadOptionType.heading &&
										xe.telemetryService.publicLogCapture(
											`mention_node.created.${Wt.type}`,
											{ type: Wt.type },
										)),
								Wt.type === R.TypeaheadOptionType.toggle_commit_options)
							) {
								Me(!Ae());
								return;
							}
							Kt(!1), Li || Je(R.TypeaheadOptionType.none);
							let Di = Wt.name;
							if (Wt.type === R.TypeaheadOptionType.folder) {
								const yi =
									typeof Wt.secondaryText == "string" ? Wt.secondaryText : Di;
								Di.length >= yi.length && (Di = yi);
							}
							Wt.type === R.TypeaheadOptionType.link && (Di = ti() ?? "");
							let Ui = Wt.docSelection,
								Wi = !0;
							if (Wt.name === "Add new doc") {
								if (
									(tt === void 0 &&
										(xe.reactiveStorageService.setNonPersistentStorage(
											"newDoc",
											void 0,
										),
										await xe.commandService.executeCommand("cursor.newdocs")),
									(Wi =
										xe.reactiveStorageService.nonPersistentStorage.newDoc !==
										void 0),
									(Di =
										xe.reactiveStorageService.nonPersistentStorage.newDoc
											?.name ?? ""),
									!Di)
								) {
									He.focus(), console.error("no name for doc, skipping");
									return;
								}
								xe.reactiveStorageService.nonPersistentStorage.newDoc &&
									(Ui = {
										docId:
											xe.reactiveStorageService.nonPersistentStorage.newDoc
												.identifier,
										name: Di,
									}),
									He.focus(),
									await new Promise((yi) => {
										setTimeout(() => {
											yi(null);
										}, 100);
									});
							}
							const Gi = (0, o.createMemo)(() => Oe.showErrorMessage),
								qi = await be(Wt, xe);
							let Oi;
							Wt.selectionPrecursor &&
								qi.type !== P.SelectionType.Image &&
								Wt.type !== R.TypeaheadOptionType.folder &&
								(Oi = await xe.textModelService.createModelReference(
									Wt.selectionPrecursor.uri,
								)),
								He.update(() => {
									if (Wt.type === "heading") {
										for (const wi of R.$r_b)
											if (Wt.name === R.$s_b[wi]) {
												Je(wi);
												break;
											}
										Kt(!0), Ye(Date.now());
										return;
									}
									let yi;
									const Ai = qe();
									if (
										(typeof Wt.type == "object" &&
											"case" in Wt.type &&
											Wt.type.case === "simple_mentions_handler" &&
											((yi = new f.$6B(Wt.type.contextIntent())),
											Ai !== void 0 &&
												xe.aiContextSessionService.updateContextSession(
													Ai.uuid,
													{
														removedIntentUuids: [],
														upsertedIntents: [yi],
														rerankEndpoint: void 0,
													},
												)),
										Wt.type === "file" &&
											Ai !== void 0 &&
											Wt.selectionPrecursor !== void 0)
									)
										(yi = new f.$6B({
											type: f.ContextIntent_Type.USER_ADDED,
											uuid: (0, S.$9g)(),
											intent: {
												case: "file",
												value: {
													relativeWorkspacePath:
														xe.workspaceContextService.asRelativePath(
															Wt.selectionPrecursor.uri,
														),
													mode: f.ContextIntent_File_Mode.UNSPECIFIED,
												},
											},
										})),
											xe.aiContextSessionService.updateContextSession(Ai.uuid, {
												removedIntentUuids: [],
												upsertedIntents: [yi],
												rerankEndpoint: void 0,
											});
									else if (
										Wt.type === R.TypeaheadOptionType.code &&
										Ai !== void 0 &&
										Oi !== void 0 &&
										Wt.selectionPrecursor !== void 0 &&
										Wt.selectionPrecursor.initialRange !== void 0
									) {
										if (!Wt.selectionPrecursor?.initialRange)
											throw new Error("No selection precursor initial range");
										const wi = Oi.object.textEditorModel.getValueInRange(
												Wt.selectionPrecursor.initialRange,
											),
											_t = Oi.object.getLanguageId();
										(yi = new f.$6B({
											type: f.ContextIntent_Type.USER_ADDED,
											uuid: (0, S.$9g)(),
											intent: {
												case: "codeSelection",
												value: {
													relativeWorkspacePath:
														xe.workspaceContextService.asRelativePath(
															Wt.selectionPrecursor.uri,
														),
													text: `\`\`\`${_t}
${wi}\`\`\``,
													potentiallyOutOfDateRange:
														Wt.selectionPrecursor.initialRange,
												},
											},
										})),
											xe.aiContextSessionService.updateContextSession(Ai.uuid, {
												removedIntentUuids: [],
												upsertedIntents: [yi],
												rerankEndpoint: void 0,
											});
									}
									if (Wt.type === R.TypeaheadOptionType.reset) {
										Oe.onReset?.();
										return;
									} else if (
										Wt.type === R.TypeaheadOptionType.reference_open_editors
									) {
										Oe.onReferenceOpenEditors?.();
										return;
									} else if (
										Wt.type === R.TypeaheadOptionType.reference_active_editors
									) {
										Oe.onReferenceActiveEditors?.();
										return;
									} else if (Wt.type === R.TypeaheadOptionType.reset_context) {
										Oe.onResetContext?.();
										return;
									}
									He.focus();
									const li =
										tt ??
										(0, z.$createMentionNode)(
											Di,
											yi,
											void 0,
											Wt.type === R.TypeaheadOptionType.link ||
												R.$t_b.includes(Wt.type)
												? Wt.type
												: void 0,
											qi,
											void 0,
											Wt,
										);
									if ((Nt.add(li.__key), !tt)) {
										const wi = (0, g.$createTextNode)(" "),
											_t = (0, g.$createTextNode)("");
										if (
											(_t.setMode("segmented").toggleDirectionless(),
											qi.type === P.SelectionType.Failure && yi === void 0)
										) {
											Gi()(qi.message);
											return;
										}
										if (pi) {
											const ai = (0, g.$getSelection)();
											if ((0, p.$isRangeSelection)(ai)) {
												const Ft = ai.anchor,
													Xt = Ft.getNode();
												if ((0, p.$isTextNode)(Xt)) {
													const $t = Xt.getTextContent(),
														ut = Ft.offset,
														Et = $t.lastIndexOf("@", ut);
													if (Et !== -1) {
														const Tt = $t.slice(0, Et),
															qt = $t.slice(Et);
														Xt.setTextContent(Tt);
														const At = (0, g.$createTextNode)(qt);
														Xt.insertAfter(At),
															Xt.insertAfter(li),
															qt.startsWith(" ") ||
																li.insertAfter((0, g.$createTextNode)(" ")),
															At.select();
													}
												}
											}
										} else (0, p.$insertNodes)([li, _t, wi]);
									}
									const Vi = ti();
									if (qi.type === P.SelectionType.File && !yi) {
										const wi = {
											...qi.selectionWithoutUuid,
											uuid: li.storedKey,
											collapseByDefault: at ?? !1,
										};
										Oe.insertFileSelection(wi);
									} else if (qi.type === P.SelectionType.Image && !yi)
										Oe.insertImage({ uri: qi.imageUri, uuid: li.storedKey });
									else if (qi.type === P.SelectionType.Code && !yi) {
										const wi = {
											...qi.selectionWithoutUuid,
											uuid: li.storedKey,
										};
										Oe.insertSelection(wi);
									} else if (Ui !== void 0 && Wi)
										Oe.insertDocs({ ...Ui, uuid: li.storedKey });
									else if (Wt.type === R.TypeaheadOptionType.text_search)
										Oe.insertTextSearch({
											query: Wt.name,
											uuid: li.storedKey,
											files: xe.sourceFilesService.getFilesOfSearch(Wt.name),
										});
									else if (Wt.type === R.TypeaheadOptionType.git_commit)
										Oe.insertCommit({
											sha:
												typeof Wt.secondaryText == "string"
													? Wt.secondaryText
													: "",
											message: Wt.name,
											uuid: li.storedKey,
										});
									else if (Wt.type === R.TypeaheadOptionType.git_pr)
										Oe.insertPullRequest({ ...Wt.pr, uuid: li.storedKey });
									else if (Wt.type === R.TypeaheadOptionType.git_diff) {
										const wi = Wt.diff;
										wi === k.DiffType.TO_HEAD
											? Oe.insertGitDiff(li.storedKey)
											: wi === k.DiffType.TO_MAIN_FROM_BRANCH &&
												Oe.insertDiffToMain(li.storedKey);
									} else if (Wt.type === R.TypeaheadOptionType.lint)
										Oe.addLinterErrors(li.storedKey),
											Ve((wi) => ({ ...wi, [li.storedKey]: !0 }));
									else if (Wt.type === R.TypeaheadOptionType.current_file)
										Oe.addCurrentFile(),
											et((wi) => ({ ...wi, [li.storedKey]: !0 }));
									else if (Wt.type === R.TypeaheadOptionType.web)
										Oe.addWeb(li.storedKey),
											nt((wi) => ({ ...wi, [li.storedKey]: !0 }));
									else if (Wt.type === R.TypeaheadOptionType.repo_map)
										Oe.addRepoMap?.(li.storedKey),
											ct((wi) => ({ ...wi, [li.storedKey]: !0 }));
									else if (Wt.type === R.TypeaheadOptionType.codebase)
										Oe.addCodebase(li.storedKey),
											ft((wi) => ({ ...wi, [li.storedKey]: !0 }));
									else if (Wt.type === R.TypeaheadOptionType.folder)
										Oe.insertFolderSelection({
											relativePath:
												typeof Wt.secondaryText == "string"
													? Wt.secondaryText
													: "not_defined_should_not_happen",
											uuid: li.storedKey,
										});
									else if (Wt.type === R.TypeaheadOptionType.link && Vi)
										Oe.insertLink({ url: Vi, uuid: li.storedKey });
									else if (Wt.type === R.TypeaheadOptionType.commit_notes)
										Oe.addCommitNotes();
									else if (Wt.type === R.TypeaheadOptionType.notepad)
										Oe.insertNotepad({
											notepadId: Wt.notepadId,
											uuid: li.storedKey,
										});
									else if (Wt.type === R.TypeaheadOptionType.diff_review) {
										Oe.addDiffReview(li.storedKey);
										return;
									} else if (
										Wt.type === R.TypeaheadOptionType.context_picking
									) {
										Oe.addContextPicking?.(li.storedKey);
										return;
									} else if (Wt.type === R.TypeaheadOptionType.remember_this) {
										Oe.addRememberThis(li.storedKey);
										return;
									}
								});
						},
						[ti, kt] = (0, o.createSignal)(null),
						[hi, Kt] = (0, o.createSignal)(!1),
						[di, Ye] = (0, o.createSignal)(0);
					(0, o.createEffect)(() => {
						const Wt = ti();
						Date.now() - di() > 100 && Kt(!1),
							(Wt === null || Wt === "") &&
								Date.now() - di() > 100 &&
								Je(R.TypeaheadOptionType.none);
					});
					const ze = (0, o.createMemo)(() => (Te() ? ti() : Se()) ?? ""),
						Xe = {
							queryString: ze,
							justClickedIntoMenu: hi,
							mode: Ke,
							props: Oe,
							vsContext: xe,
						},
						{ symbolOptions: It } = (0, A.$aac)(Xe),
						{ fileOptions: Lt } = (0, A.$9_b)(Xe),
						{ docsOptions: xt } = (0, A.$__b)(Xe),
						{ textSearchOptions: Vt } = (0, A.$$_b)(Xe),
						{ commitOptions: Bt } = (0, A.$bac)(Xe),
						{ prOptions: Gt } = (0, A.$fac)(Xe),
						{ diffOptions: Mt } = (0, A.$gac)(Xe),
						{ folderOptions: Ut } = (0, A.$0_b)(Xe),
						{ notepadOptions: ei } = (0, A.$cac)(Xe),
						{ autoContextOptions: mi, autoContextLoading: ii } = (0, A.$dac)(
							Xe,
						),
						Dt = (Wt) => (Te() ? Wt : []),
						{ options: Jt, setOptions: si } = (0, A.$eac)({
							mode: Ke,
							queryString: ze,
							fileOptions: Lt,
							symbolOptions: It,
							folderOptions: () => Dt(Ut()),
							docsOptions: () => Dt(xt()),
							textSearchOptions: () => Dt(Vt()),
							commitOptions: () => Dt(Bt()),
							prOptions: () => Dt(Gt()),
							diffOptions: () => Dt(Mt()),
							notepadOptions: () => Dt(ei()),
							contextSession: qe,
							autoContextOptions: () => Dt(mi()),
							showCommitOptions: () => (Te() ? Ae() : !1),
							autoContextLoading: ii,
							props: Oe,
						});
					(0, o.createEffect)(() => {
						if (Te()) {
							Be(null), Oe.setGhostText("");
							return;
						}
						const Wt = Se();
						if (Wt.length <= 2) {
							Be(null), Oe.setGhostText("");
							return;
						}
						const tt = Jt()
								.sort((pi, Li) => Li.score - pi.score)
								.filter(
									(pi) =>
										pi.name.startsWith(Wt) &&
										pi.name.length > Wt.length &&
										pi.type !== R.TypeaheadOptionType.staticheading &&
										pi.type !== R.TypeaheadOptionType.toggle_commit_options &&
										pi.type !== R.TypeaheadOptionType.heading &&
										pi.type !== R.TypeaheadOptionType.none &&
										pi.type !== R.TypeaheadOptionType.repo_map &&
										pi.type !== R.TypeaheadOptionType.doc &&
										pi.type !== R.TypeaheadOptionType.web &&
										pi.type !== R.TypeaheadOptionType.codebase,
								),
							at = tt.length > 0 ? tt[0] : null;
						if (tt.length === 0 || !at || at.name.length === Wt.length) {
							Oe.setGhostText(""), Be(null);
							return;
						}
						Be(at), Oe.setGhostText(at.name.substring(Se().length));
					});
					const Zt = (Wt) => {
						const tt = (0, O.$iac)(Wt),
							at = (0, O.$jac)(Wt),
							pi = (0, O.$mac)(Wt, He),
							Li = (0, O.$kac)(Wt);
						return !pi && !at && !Li && tt ? tt : null;
					};
					function ci(Wt) {
						if (!(0, p.$isRangeSelection)(Wt) || !Wt.isCollapsed())
							return [!1, ""];
						const tt = Wt.getNodes()[0],
							at = Wt.anchor;
						if (
							!(0, p.$isTextNode)(tt) ||
							!tt.isSimpleText() ||
							!(0, F.$isAtNodeEnd)(at)
						)
							return [!1, ""];
						const pi = [],
							Li = tt.getTextContent();
						let Di = tt.getTextContentSize(),
							Ui;
						for (; Di-- && Di >= 0 && (Ui = Li[Di]) !== " "; ) pi.push(Ui);
						return pi.length === 0 ? [!1, ""] : [!0, pi.reverse().join("")];
					}
					let ri = null;
					(0, o.createEffect)(() => {
						if (Te() || !Oe.allowGhostTextAtSymbols) {
							Oe.setGhostText("");
							return;
						}
						const Wt = Oe.setGhostText,
							tt = He.registerUpdateListener(() => {
								He.update(() => {
									const Li = (0, g.$getSelection)(),
										[Di] = ci(Li);
									if (!Di) {
										Wt("");
										return;
									}
									const Ui = (0, h.getQueryTextForSearch)(He);
									if (!Ui) return;
									const Wi = Zt(Ui);
									Wi && (ke(Wi.matchingString), (ri = Wi));
								});
							});
						function at() {
							const Li = Ie();
							if (Li === null) return !1;
							const Di = ri ? (0, c.$splitNodeContainingQuery)(ri) : null;
							return Oe.setGhostText(""), Rt(Li, Di, () => {}), !0;
						}
						function pi(Li) {
							return at() ? (Li.preventDefault(), !0) : !1;
						}
						return (
							(0, o.onCleanup)(
								(0, n.mergeRegister)(
									He.registerCommand(
										p.KEY_TAB_COMMAND,
										pi,
										p.COMMAND_PRIORITY_LOW,
									),
									He.registerCommand(
										p.KEY_ARROW_RIGHT_COMMAND,
										pi,
										p.COMMAND_PRIORITY_LOW,
									),
								),
							),
							tt
						);
					});
					const $i = (Wt) => {
						const tt = (0, O.$jac)(Wt),
							at = (0, O.$mac)(Wt, He);
						return !at && tt ? tt : at;
					};
					return (
						(0, o.createEffect)(() => {
							const Wt = He.registerUpdateListener(
								({
									editorState: tt,
									dirtyElements: at,
									prevEditorState: pi,
								}) => {
									at.size !== 0 &&
										tt.read(() => {
											const Li = (0, g.$getSelection)();
											if (!(0, p.$isRangeSelection)(Li) || !Li.isCollapsed())
												return;
											const Di = Li.anchor.getNode();
											if (!(0, p.$isTextNode)(Di)) return;
											const Ui = Di.getTextContent(),
												Wi = Ui[Li.anchor.offset - 1],
												Gi = Ui.slice(-2),
												qi = Ui.split(" "),
												Oi = qi[qi.length - 1] ?? "";
											Wi === "@" || (Wi === "/" && Oi.startsWith("@"))
												? Ee("@")
												: Wi === "/" && Gi !== "@/"
													? Ee("/")
													: ((Wi === " " &&
															Ke() !== R.TypeaheadOptionType.auto_context &&
															Ke() !== R.TypeaheadOptionType.none) ||
															Wi === void 0) &&
														Ee(!1);
										});
								},
							);
							(0, o.onCleanup)(() => {
								Wt();
							});
						}),
						(0, o.createEffect)(() => {
							!Oe.ghostText() && Ie() && Be(null);
						}),
						(0, C.createComponent)(h.LexicalTypeaheadMenuPlugin, {
							onQueryChange: kt,
							onSelectOption: Rt,
							triggerFn: $i,
							get options() {
								return (0, E.memo)(() => Te() === !1)()
									? []
									: [...Jt()]
											.sort((Wt, tt) => tt.score - Wt.score)
											.filter((Wt) => {
												const tt = Te() === "/";
												return (!tt && !Wt.isSlash) || (tt && Wt.isSlash);
											});
							},
							anchorClassName: "lookahead-anchor-element",
							menuRenderFn: Fe,
							get attachToElement() {
								return xe.portalElement;
							},
							get onOpen() {
								return Oe.onMentionsMenuOpen;
							},
							get onClose() {
								return Oe.onMentionsMenuClose;
							},
						})
					);
				}
				const Fe = (Oe) => {
					let xe;
					const Ke = (0, U.$odc)().themeService.getColorTheme(),
						Je = Ke.getColor("editor.foreground"),
						Te = Ke.getColor("editor.background"),
						Ee = Ke.getColor("commandCenter.inactiveBorder"),
						[Ie, Be] = (0, o.createSignal)([]),
						[Se, ke] = (0, o.createSignal)([]),
						[Ue, qe] = (0, o.createSignal)([]);
					(0, o.createEffect)(() => {
						const je = Oe.options;
						Be(
							je.filter(
								(Ve) =>
									Ve.type === R.TypeaheadOptionType.file ||
									Ve.type === R.TypeaheadOptionType.doc ||
									Ve.type === R.TypeaheadOptionType.code ||
									Ve.type === R.TypeaheadOptionType.git_commit ||
									Ve.type === R.TypeaheadOptionType.git_pr ||
									Ve.type === R.TypeaheadOptionType.folder ||
									Ve.type === R.TypeaheadOptionType.git_diff ||
									Ve.type === R.TypeaheadOptionType.toggle_commit_options ||
									Ve.type === R.TypeaheadOptionType.link ||
									Ve.type === R.TypeaheadOptionType.text_search ||
									Ve.type === R.TypeaheadOptionType.notepad ||
									Ve.type === R.TypeaheadOptionType.auto_context,
							),
						),
							ke(
								je.filter(
									(Ve) =>
										Ve.type === R.TypeaheadOptionType.heading ||
										Ve.type === R.TypeaheadOptionType.lint ||
										Ve.type === R.TypeaheadOptionType.current_file ||
										(typeof Ve.type == "object" &&
											"case" in Ve.type &&
											Ve.type.case === "simple_mentions_handler") ||
										Ve.type === R.TypeaheadOptionType.web ||
										Ve.type === R.TypeaheadOptionType.repo_map ||
										Ve.type === R.TypeaheadOptionType.codebase ||
										Ve.type === R.TypeaheadOptionType.commit_notes ||
										Ve.type === R.TypeaheadOptionType.diff_review ||
										Ve.type === R.TypeaheadOptionType.context_picking ||
										Ve.type === R.TypeaheadOptionType.remember_this ||
										Ve.isSlash,
								),
							),
							qe(
								Ie().length === 0
									? []
									: je.filter((Ve) => Ve.type === "staticheading"),
							);
					});
					const Ae = (0, o.createMemo)(() =>
						Oe.selectedIndex === null ? null : Ie().at(Oe.selectedIndex),
					);
					let Me;
					const De = (je) => {
							const Ve = { x: je.clientX, y: je.clientY },
								Ze = Me === void 0 || Ve.x !== Me.x || Ve.y !== Me.y;
							return (Me = Ve), Ze;
						},
						Re = (je, Ve) =>
							(0, C.createComponent)(pe, {
								get index() {
									return Ve();
								},
								get isSelected() {
									return Oe.selectedIndex === Ve();
								},
								onClick: () => {
									je.type !== "staticheading" &&
										(Oe.setHighlightedIndex(Ve()),
										Oe.selectOptionAndCleanUp(je));
								},
								onMouseEnterOrMove: (Ze) => {
									je.type !== "staticheading" &&
										De(Ze) &&
										Oe.setHighlightedIndex(Ve());
								},
								option: je,
							});
					return (0, C.createComponent)(M.$q_b, {
						get show() {
							return Oe.options.length > 0;
						},
						get anchorElementRef() {
							return Oe.anchorElementRef;
						},
						get children() {
							return [
								(0, C.createComponent)(o.Show, {
									get when() {
										return Ae();
									},
									children: (je) =>
										(0, C.createComponent)(ue, {
											get selectedOption() {
												return je();
											},
											get selectedIndex() {
												return Oe.selectedIndex ?? 0;
											},
											optionsListRef: xe,
										}),
								}),
								(0, C.createComponent)(o.Show, {
									get when() {
										return (
											(0, E.memo)(
												() => Se().length === 0 && Ue().length === 0,
											)() && Ie().length === 0
										);
									},
									get children() {
										const je = Q();
										return je.style.setProperty("opacity", "0.3"), je;
									},
								}),
								(() => {
									const je = Z(),
										Ve = xe;
									return (
										typeof Ve == "function" ? (0, u.use)(Ve, je) : (xe = je),
										(0, r.insert)(
											je,
											(0, C.createComponent)(o.For, {
												get each() {
													return Se();
												},
												children: (Ze, et) => Re(Ze, et),
											}),
											null,
										),
										(0, r.insert)(
											je,
											(0, C.createComponent)(o.For, {
												get each() {
													return Ue();
												},
												children: (Ze, et) => Re(Ze, () => -1),
											}),
											null,
										),
										(0, r.insert)(
											je,
											(0, C.createComponent)(o.For, {
												get each() {
													return Ie();
												},
												children: (Ze, et) =>
													(0, C.createComponent)(pe, {
														get index() {
															return et();
														},
														get isSelected() {
															return Oe.selectedIndex === et();
														},
														onClick: () => {
															Ze.type !== "staticheading" &&
																(Oe.setHighlightedIndex(et()),
																Oe.selectOptionAndCleanUp(Ze));
														},
														onMouseEnterOrMove: (rt) => {
															Ze.type !== "staticheading" &&
																De(rt) &&
																Oe.setHighlightedIndex(et());
														},
														option: Ze,
													}),
											}),
											null,
										),
										je
									);
								})(),
							];
						},
					});
				};
			},
		),
		