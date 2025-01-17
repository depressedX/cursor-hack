import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/themables.js';
import '../../../controlCommon/browser/solid.js';
import './settings/constants.js';
import './settings/settingsFeaturesTab.js';
import './settings/settingsGeneralTab.js';
import './settings/settingsModelsTab.js';
import '../../../ui/browser/scrollableDiv.js';
import '../../../ui/browser/hooks/useThemeHooks.js';
import './settings/settingsBetaTab.js';
import './settings/hooks.js';
import '../../../../../base/browser/dom.js';
import '../../../../../css!vs/workbench/contrib/aiSettings/browser/components/settingsPane.js';
define(
			de[4351],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 26, 36, 2997, 4350, 4230, 4341, 135, 331,
				4138, 722, 7, 2373,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$ODc = $);
				const s = (0, t.template)(
						"<div><div><div>Cursor Settings</div></div><div><div></div><div>",
					),
					l = (0, t.template)("<div><span></span><span>"),
					y = (0, t.template)("<span>");
				function $(v) {
					const S = (0, u.$odc)(),
						[I, T] = (0, m.createSignal)(v.defaultPane ?? "general"),
						P = (U) => {
							T(U), v.onTabChange?.(U);
						},
						k = { value: void 0 },
						[L, D] = (0, m.createSignal)(0),
						[M, N] = (0, m.createSignal)(!1);
					let A;
					(0, m.onMount)(() => {
						setTimeout(() => {
							D(k.value?.offsetHeight ?? 0);
						}, 10);
					});
					const [, R] = (0, f.$B$b)(),
						O = (U) => {
							if (U === "models") {
								let z = 0;
								return (0, n.$CDc)(S, R) && z++, (0, n.$EDc)(S, R) && z++, z;
							}
							return 0;
						},
						B = (0, g.$y0b)();
					return (
						(0, m.createEffect)(() => {
							const U = v.idToScrollTo;
							setTimeout(() => {
								if (U) {
									const z = (0, b.$Ngb)().getElementById(U);
									z && B.setScrollPositionNow({ scrollTop: z.offsetTop - 60 });
								}
							}),
								S.reactiveStorageService.setNonPersistentStorage(
									"cachedSettingsOpenData",
									void 0,
								);
						}),
						(0, m.createEffect)(() => {
							I(), B.setScrollPositionNow({ scrollTop: 0 });
						}),
						(() => {
							const U = s(),
								z = U.firstChild,
								F = z.firstChild,
								x = z.nextSibling,
								H = x.firstChild,
								q = H.nextSibling,
								V = A;
							return (
								typeof V == "function" ? (0, d.use)(V, U) : (A = U),
								U.style.setProperty("width", "100%"),
								U.style.setProperty("height", "100%"),
								U.style.setProperty("font-size", "12px"),
								U.style.setProperty("max-width", "1200px"),
								U.style.setProperty("margin", "0 auto"),
								U.style.setProperty(
									"background-color",
									"var(--vscode-editor-background)",
								),
								U.style.setProperty("color", "var(--vscode-editor-foreground)"),
								U.style.setProperty("overflow", "hidden"),
								U.style.setProperty("display", "flex"),
								U.style.setProperty("flex-direction", "column"),
								(0, d.use)((G) => {
									k.value = G;
								}, z),
								z.style.setProperty("padding", "12px 12px"),
								z.style.setProperty("padding-bottom", "10px"),
								z.style.setProperty("display", "flex"),
								z.style.setProperty("align-self", "stretch"),
								z.style.setProperty("align-items", "center"),
								z.style.setProperty("justify-content", "space-between"),
								z.style.setProperty(
									"border-bottom",
									"1px solid var(--vscode-commandCenter-inactiveBorder)",
								),
								F.style.setProperty("font-size", "16px"),
								F.style.setProperty("color", "var(--vscode-foreground)"),
								x.style.setProperty("display", "flex"),
								x.style.setProperty("width", "100%"),
								x.style.setProperty("justify-self", "stretch"),
								x.style.setProperty("box-sizing", "border-box"),
								H.style.setProperty("width", "20%"),
								H.style.setProperty("box-sizing", "border-box"),
								H.style.setProperty(
									"border-right",
									"1px solid var(--vscode-commandCenter-inactiveBorder)",
								),
								(0, E.insert)(
									H,
									(0, C.createComponent)(g.$w0b, {
										scrollingDirection: "vertical",
										style: { height: "100%", padding: "4px" },
										innerContainerStyle: {
											display: "flex",
											gap: "3px",
											"flex-direction": "column",
										},
										get children() {
											return (0, C.createComponent)(m.For, {
												each: a.$TCc,
												children: (G) =>
													(() => {
														const K = l(),
															J = K.firstChild,
															W = J.nextSibling;
														return (
															K.addEventListener("click", () => {
																P(G);
															}),
															K.style.setProperty("padding", "5px 8px"),
															K.style.setProperty(
																"color",
																"var(--vscode-foreground)",
															),
															K.style.setProperty("cursor", "pointer"),
															K.style.setProperty("font-size", "13px"),
															K.style.setProperty("border-radius", "2px"),
															K.style.setProperty("display", "flex"),
															K.style.setProperty("align-items", "center"),
															K.style.setProperty("gap", "6px"),
															J.style.setProperty("font-size", "14px"),
															(0, E.insert)(W, () => a.$RCc[G]),
															(0, E.insert)(
																K,
																(0, C.createComponent)(m.Show, {
																	get when() {
																		return O(G);
																	},
																	children: (X) =>
																		(() => {
																			const Y = y();
																			return (
																				Y.style.setProperty("width", "14px"),
																				Y.style.setProperty("height", "14px"),
																				Y.style.setProperty(
																					"border-radius",
																					"8px",
																				),
																				Y.style.setProperty(
																					"background-color",
																					"var(--vscode-editorWarning-foreground)",
																				),
																				Y.style.setProperty(
																					"color",
																					"var(--vscode-editor-background)",
																				),
																				Y.style.setProperty(
																					"font-size",
																					"10px",
																				),
																				Y.style.setProperty(
																					"font-weight",
																					"500",
																				),
																				Y.style.setProperty("display", "flex"),
																				Y.style.setProperty(
																					"justify-content",
																					"center",
																				),
																				Y.style.setProperty(
																					"align-items",
																					"center",
																				),
																				Y.style.setProperty(
																					"margin-left",
																					"auto",
																				),
																				(0, E.insert)(Y, X),
																				Y
																			);
																		})(),
																}),
																null,
															),
															(0, w.effect)(
																(X) => {
																	const Y =
																			"settings-menu-item" +
																			((0, p.$d$b)(S.themeService)
																				? " dark"
																				: " light"),
																		ie =
																			G === I()
																				? (0, p.$d$b)(S.themeService)
																					? "rgba(255, 255, 255, 0.06)"
																					: "rgba(0, 0, 0, 0.06)"
																				: "transparent",
																		ne = r.ThemeIcon.asClassName(a.$SCc[G]);
																	return (
																		Y !== X._v$ &&
																			(0, i.className)(K, (X._v$ = Y)),
																		ie !== X._v$2 &&
																			((X._v$2 = ie) != null
																				? K.style.setProperty(
																						"background-color",
																						ie,
																					)
																				: K.style.removeProperty(
																						"background-color",
																					)),
																		ne !== X._v$3 &&
																			(0, i.className)(J, (X._v$3 = ne)),
																		X
																	);
																},
																{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
															),
															K
														);
													})(),
											});
										},
									}),
								),
								q.style.setProperty("width", "80%"),
								q.style.setProperty("box-sizing", "border-box"),
								(0, E.insert)(
									q,
									(0, C.createComponent)(g.$w0b, {
										style: { height: "100%" },
										nonReactiveElementOptions: { useShadows: !1 },
										scrollingDirection: "vertical",
										onScroll: () => {
											S.reactiveStorageService.setNonPersistentStorage(
												"reactiveSettingsMenuCloser",
												Math.random(),
											);
										},
										scrollable: B,
										get children() {
											return (0, C.createComponent)(m.Switch, {
												get children() {
													return [
														(0, C.createComponent)(m.Match, {
															get when() {
																return I() === "general";
															},
															get children() {
																return (0, C.createComponent)(c.$ADc, {});
															},
														}),
														(0, C.createComponent)(m.Match, {
															get when() {
																return I() === "features";
															},
															get children() {
																return (0, C.createComponent)(h.$iDc, {});
															},
														}),
														(0, C.createComponent)(m.Match, {
															get when() {
																return I() === "models";
															},
															get children() {
																return (0, C.createComponent)(n.$FDc, {
																	isWarningOpen: M,
																	setIsWarningOpen: N,
																});
															},
														}),
														(0, C.createComponent)(m.Match, {
															get when() {
																return I() === "beta";
															},
															get children() {
																return (0, C.createComponent)(o.$HDc, {});
															},
														}),
													];
												},
											});
										},
									}),
								),
								(0, w.effect)(() =>
									"calc(100% - " + L() + "px)" != null
										? x.style.setProperty(
												"height",
												"calc(100% - " + L() + "px)",
											)
										: x.style.removeProperty("height"),
								),
								U
							);
						})()
					);
				}
			},
		),
		