import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import '../../../../base/browser/ui/hover/hoverWidget.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/path.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/uri.js';
import '../../../../workbench/contrib/controlCommon/browser/solid.js';
import '../../../../workbench/contrib/ui/browser/aiInput/plugins/mentions/pureIcon.js';
import '../../../../workbench/contrib/ui/browser/hooks/useIsUsingFileIconTheme.js';
import '../../../../workbench/contrib/ui/browser/hooks/useVSHoverTooltip.js';
import '../../../../workbench/contrib/ui/browser/simpleButton/simpleButton.js';
define(
			de[4219],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 160, 14, 54, 12, 9, 36, 156, 428, 422, 147,
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
 r /*hoverWidget*/,
 u /*codicons*/,
 a /*path*/,
 h /*platform*/,
 c /*uri*/,
 n /*solid*/,
 g /*pureIcon*/,
 p /*useIsUsingFileIconTheme*/,
 o /*useVSHoverTooltip*/,
 f /*simpleButton*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$nlc = I);
				const b = (0, t.template)("<span>"),
					s = (0, t.template)("<span><span>"),
					l = (0, t.template)("<div>/"),
					y = (0, t.template)("<div><div>"),
					$ = (0, t.template)("<div>");
				function v(T) {
					const P = (0, n.$odc)(),
						k = (0, p.$b$b)(),
						L = (0, m.createMemo)(() => (0, a.$sc)(T.uri.fsPath));
					return (() => {
						const D = s(),
							M = D.firstChild;
						return (
							D.style.setProperty("display", "flex"),
							D.style.setProperty("align-items", "center"),
							D.style.setProperty("justify-content", "center"),
							D.style.setProperty("font-size", "11px"),
							(0, C.insert)(
								D,
								(0, d.createComponent)(m.Show, {
									get when() {
										return k();
									},
									get children() {
										const N = b();
										return (
											N.style.setProperty("margin-right", "-4px"),
											(0, C.insert)(
												N,
												(0, d.createComponent)(g.$k$b, {
													get fileName() {
														return L();
													},
													get workspaceContextService() {
														return P.workspaceContextService;
													},
													get modelService() {
														return P.modelService;
													},
													get languageService() {
														return P.languageService;
													},
												}),
											),
											N
										);
									},
								}),
								M,
							),
							(0, C.insert)(M, L),
							D
						);
					})();
				}
				function S(T) {
					return (() => {
						const P = l(),
							k = P.firstChild;
						return (
							P.addEventListener("click", (L) => T.onClick(L)),
							P.style.setProperty("font-size", "11px"),
							P.style.setProperty(
								"color",
								"var(--vscode-descriptionForeground)",
							),
							P.style.setProperty("margin", "0 4px"),
							P.style.setProperty("cursor", "pointer"),
							P.style.setProperty("font-feature-settings", '"tnum"'),
							P.style.setProperty("font-variant-numeric", "tabular-nums"),
							P.style.setProperty("text-align", "center"),
							(0, C.insert)(P, () => T.current, k),
							(0, C.insert)(P, () => T.total, null),
							P
						);
					})();
				}
				function I(T) {
					const P = (0, m.createMemo)(() => T.uniqueFileUris.length > 1),
						k = (0, m.createMemo)(() =>
							T.inlineDiffs.some(
								(J) =>
									J.uri.toString() === T.uri?.toString() ||
									J.uri.fsPath === T.uri?.fsPath,
							),
						),
						L = (0, m.createMemo)(() => T.inlineDiffs.length > 0),
						D = (0, m.createMemo)(() =>
							T.inlineDiffs.some(
								(J) =>
									J.uri.toString() !== T.uri?.toString() &&
									J.uri.fsPath !== T.uri?.fsPath,
							),
						),
						M = (J) => (J ? (0, a.$sc)(J.fsPath) : ""),
						{ showHover: N, hideHover: A } = (0, o.$z$b)(500),
						R = (J, W) => ({
							onMouseEnter: (X) => {
								const Y = X.currentTarget;
								N({
									appearance: { compact: !0, showPointer: !0 },
									content: J + (W ? ` (${W})` : ""),
									target: Y,
									position: { hoverPosition: r.HoverPosition.ABOVE },
									additionalClasses: ["vscode-hover-widget-compact"],
								});
							},
							onMouseLeave: () => A(),
						}),
						O = {
							"font-size": "11px",
							padding: "2px 4px",
							height: "14px",
							display: "flex",
							"align-items": "center",
							"justify-content": "center",
						},
						B = {
							display: "flex",
							"align-items": "center",
							"justify-content": "center",
							"font-size": "12px",
						},
						U = (0, m.createMemo)(
							() =>
								T.uniqueFileUris.indexOf(T.uri?.toString() ?? "") === -1 ||
								T.uniqueFileUris.length > 1,
						),
						z = (0, m.createMemo)(
							() =>
								T.uniqueFileUris.indexOf(T.uri?.toString() ?? "") === -1 ||
								T.uniqueFileUris.length > 1,
						),
						F = (0, m.createMemo)(() => {
							const J = T.uniqueFileUris.indexOf(T.uri?.toString() ?? "");
							return J > 0
								? T.uniqueFileUris[J - 1]
								: T.uniqueFileUris[T.uniqueFileUris.length - 1];
						}),
						x = (0, m.createMemo)(() => {
							const J = T.uniqueFileUris.indexOf(T.uri?.toString() ?? "");
							return J < T.uniqueFileUris.length - 1
								? T.uniqueFileUris[J + 1]
								: J === T.uniqueFileUris.length - 1 &&
										T.uniqueFileUris.length >= 1
									? T.uniqueFileUris[0]
									: void 0;
						}),
						H = (0, m.createMemo)(() => {
							const J = F(),
								W = x();
							return !J || !W ? !1 : J.toString() === W.toString();
						}),
						q = () =>
							(0, d.createComponent)(m.Show, {
								get when() {
									return U();
								},
								get children() {
									return (0, d.createComponent)(
										f.$rdc,
										(0, w.mergeProps)(
											{
												type: "secondary",
												get codicon() {
													return u.$ak.chevronLeft;
												},
												get onClick() {
													return T.onNavigateToPreviousFile;
												},
												get style() {
													return {
														...O,
														"padding-right": !H() && !k() ? "6px" : void 0,
													};
												},
												codiconStyle: B,
												get title() {
													return (0, E.memo)(() => !!(H() || k() || !F()))()
														? void 0
														: (0, d.createComponent)(v, {
																get uri() {
																	return c.URI.parse(F());
																},
															});
												},
											},
											() =>
												R(
													`Navigate to previous file${F() ? ": " + M(c.URI.parse(F())) : ""}`,
													T.previousFileKeybinding,
												),
										),
									);
								},
							}),
						V = () =>
							(0, d.createComponent)(m.Show, {
								get when() {
									return z();
								},
								get children() {
									return (0, d.createComponent)(
										f.$rdc,
										(0, w.mergeProps)(
											{
												type: "secondary",
												get codicon() {
													return u.$ak.chevronRight;
												},
												get onClick() {
													return T.onNavigateToNextFile;
												},
												get style() {
													return {
														...O,
														"padding-left": !H() && !k() ? "6px" : void 0,
													};
												},
												codiconStyle: B,
											},
											() =>
												R(
													`Navigate to next file${x() ? ": " + M(c.URI.parse(x())) : ""}`,
													T.nextFileKeybinding,
												),
											{
												renderCodiconOnRight: !0,
												get title() {
													return (0, E.memo)(() => !!(H() || k() || !x()))()
														? void 0
														: (0, d.createComponent)(v, {
																get uri() {
																	return c.URI.parse(x());
																},
															});
												},
											},
										),
									);
								},
							}),
						G = () =>
							(0, d.createComponent)(
								f.$rdc,
								(0, w.mergeProps)(
									{
										type: "secondary",
										title: "Cancel",
										get codicon() {
											return u.$ak.stop;
										},
										get onClick() {
											return T.onCancelGeneration;
										},
										style: O,
										codiconStyle: B,
									},
									() => R("Cancel", void 0),
								),
							),
						K = () => [
							(0, d.createComponent)(
								f.$rdc,
								(0, w.mergeProps)(
									{
										get title() {
											return [
												"Accept file",
												(() => {
													const J = b();
													return (
														J.style.setProperty("font-size", "0.8em"),
														(0, C.insert)(J, () => T.acceptKeybinding ?? ""),
														J
													);
												})(),
											];
										},
										get onClick() {
											return T.onAcceptChanges;
										},
										style: O,
										codiconStyle: B,
									},
									() =>
										R("Accept all changes in this file", T.acceptKeybinding),
								),
							),
							(0, d.createComponent)(
								f.$rdc,
								(0, w.mergeProps)(
									{
										type: "secondary",
										get title() {
											return [
												"Reject file",
												(() => {
													const J = b();
													return (
														J.style.setProperty(
															"color",
															"var(--vscode-input-placeholderForeground)",
														),
														J.style.setProperty("font-size", "0.8em"),
														(0, C.insert)(
															J,
															() =>
																T.rejectKeybinding ??
																(h.$m ? "\u2318\u232B" : "ctrl+\u232B"),
														),
														J
													);
												})(),
											];
										},
										get onClick() {
											return T.onRejectChanges;
										},
										style: O,
										codiconStyle: B,
									},
									() =>
										R("Reject all changes in this file", T.rejectKeybinding),
								),
							),
							(0, d.createComponent)(
								f.$rdc,
								(0, w.mergeProps)(
									{
										type: "secondary",
										get codicon() {
											return u.$ak.chevronUp;
										},
										get onClick() {
											return T.onNavigateToPreviousChange;
										},
										style: O,
										codiconStyle: B,
									},
									() =>
										R(
											"Navigate to previous change in this file",
											T.previousChangeKeybinding,
										),
								),
							),
							(0, d.createComponent)(m.Show, {
								get when() {
									return T.totalChanges > 0;
								},
								get children() {
									return (0, d.createComponent)(S, {
										get current() {
											return T.currentVisibleChange;
										},
										get total() {
											return T.totalChanges;
										},
										onClick: (J) => T.onNavigateToCurrentChange(J),
									});
								},
							}),
							(0, d.createComponent)(
								f.$rdc,
								(0, w.mergeProps)(
									{
										type: "secondary",
										get codicon() {
											return u.$ak.chevronDown;
										},
										get onClick() {
											return T.onNavigateToNextChange;
										},
										style: O,
										codiconStyle: B,
									},
									() =>
										R(
											"Navigate to next change in this file",
											T.nextChangeKeybinding,
										),
								),
							),
						];
					return (0, d.createComponent)(m.Show, {
						get when() {
							return L() || T.uniqueFileUris.length > 1;
						},
						get children() {
							const J = y(),
								W = J.firstChild;
							return (
								J.style.setProperty("display", "flex"),
								J.style.setProperty("justify-content", "center"),
								J.style.setProperty("width", "100%"),
								J.style.setProperty("margin-bottom", "6px"),
								J.style.setProperty("pointer-events", "none"),
								W.style.setProperty("display", "flex"),
								W.style.setProperty("flex-direction", "row"),
								W.style.setProperty("padding", "3px"),
								W.style.setProperty(
									"border",
									"1px solid var(--vscode-commandCenter-inactiveBorder)",
								),
								W.style.setProperty(
									"box-shadow",
									"0 2px 4px var(--vscode-inlineChat-shadow)",
								),
								W.style.setProperty(
									"background-color",
									"var(--vscode-editorWidget-background)",
								),
								W.style.setProperty("border-radius", "4px"),
								W.style.setProperty("align-items", "center"),
								W.style.setProperty("justify-content", "center"),
								W.style.setProperty("min-width", "fit-content"),
								W.style.setProperty("gap", "4px"),
								W.style.setProperty("pointer-events", "auto"),
								(0, C.insert)(W, q, null),
								(0, C.insert)(
									W,
									(0, d.createComponent)(m.Show, {
										get when() {
											return !T.isGenerating;
										},
										get fallback() {
											return G();
										},
										get children() {
											return (0, d.createComponent)(m.Show, {
												get when() {
													return k();
												},
												get fallback() {
													return (0, d.createComponent)(m.Show, {
														get when() {
															return H();
														},
														get fallback() {
															return (() => {
																const X = $();
																return (
																	X.style.setProperty("font-size", "11px"),
																	X.style.setProperty("opacity", "0.4"),
																	X.style.setProperty("width", "1px"),
																	X.style.setProperty("height", "12px"),
																	X.style.setProperty("margin", "0px 2px"),
																	X.style.setProperty(
																		"background",
																		"var(--vscode-input-placeholderForeground)",
																	),
																	X.style.setProperty("border-radius", "50%"),
																	X
																);
															})();
														},
														get children() {
															const X = $();
															return (
																X.style.setProperty("display", "flex"),
																X.style.setProperty("align-items", "center"),
																X.style.setProperty(
																	"justify-content",
																	"center",
																),
																X.style.setProperty("margin-left", "-4px"),
																X.style.setProperty("gap", "4px"),
																X.style.setProperty("cursor", "pointer"),
																(0, i.spread)(
																	X,
																	(0, w.mergeProps)(
																		{
																			get onClick() {
																				return T.onNavigateToNextFile;
																			},
																		},
																		() =>
																			R(
																				`Navigate to next file${x() ? ": " + M(c.URI.parse(x())) : ""}`,
																				T.nextFileKeybinding,
																			),
																	),
																	!1,
																	!0,
																),
																(0, C.insert)(
																	X,
																	(0, d.createComponent)(v, {
																		get uri() {
																			return c.URI.parse(F());
																		},
																	}),
																),
																X
															);
														},
													});
												},
												get children() {
													return K();
												},
											});
										},
									}),
									null,
								),
								(0, C.insert)(W, V, null),
								J
							);
						},
					});
				}
			},
		)
