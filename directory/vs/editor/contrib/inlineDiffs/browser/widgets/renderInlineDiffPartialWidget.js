import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/constants.js';
import '../inlineDiffTypes.js';
import '../../../../../platform/theme/common/theme.js';
import '../../../../../workbench/contrib/aiConfig/browser/aiConfigHelper.js';
import '../../../../../css!vs/editor/contrib/inlineDiffs/browser/widgets/inlineDiffWidget.js';
define(
			de[2956],
			he([1, 0, 2, 2, 2, 13, 58, 534, 212, 270, 906]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*solid*/,
 C /*constants*/,
 d /*inlineDiffTypes*/,
 m /*theme*/,
 r /*aiConfigHelper*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$udc = h);
				const u = (0, t.template)(
						'<div><div><button class="hoverButton partialHoverButton"><span><span></span></span></button><button class="hoverButton partialHoverButton"><span><span>',
					),
					a = !0;
				function h(c, n, g, p) {
					return n.reactiveStorageRoot.render(() => {
						const [o, f] = (0, E.createSignal)(!1),
							[b, s] = (0, E.createSignal)(!1),
							l = "var(--vscode-editor-background)",
							[y] = (0, r.$K0b)(C.$sW, p, !1),
							$ = () => {
								const I = g.getColorTheme().type,
									T =
										I === m.ColorScheme.HIGH_CONTRAST_DARK ||
										I === m.ColorScheme.HIGH_CONTRAST_LIGHT,
									P =
										I === m.ColorScheme.DARK ||
										I === m.ColorScheme.HIGH_CONTRAST_DARK;
								f(T), s(P);
							};
						$();
						const v = g.onDidColorThemeChange((I) => {
							$();
						});
						(0, E.onCleanup)(() => {
							v.dispose();
						});
						const S = (0, E.createMemo)(() => !n.isEditorNarrow());
						return (() => {
							const I = u(),
								T = I.firstChild,
								P = T.firstChild,
								k = P.firstChild,
								L = k.firstChild,
								D = P.nextSibling,
								M = D.firstChild,
								N = M.firstChild;
							return (
								I.style.setProperty("width", "100%"),
								T.style.setProperty("float", "right"),
								T.style.setProperty("display", "flex"),
								T.style.setProperty("flex-direction", "row"),
								T.style.setProperty("border-bottom-left-radius", "4px"),
								T.style.setProperty("border-bottom-right-radius", "4px"),
								T.style.setProperty("overflow", "hidden"),
								T.style.setProperty("opacity", "1"),
								T.style.setProperty("z-index", "1"),
								T.style.setProperty("margin-right", "18px"),
								T.style.setProperty(
									"background",
									"var(--vscode-editor-background)",
								),
								P.addEventListener("click", (A) => {
									n.analyticsService.trackEvent("composer.accept_diff", {
										source: "editor",
									}),
										n.commandService.executeCommand(d.$$7b, n),
										A.stopPropagation();
								}),
								P.style.setProperty("border", "none"),
								P.style.setProperty("cursor", "pointer"),
								P.style.setProperty("align-items", "center"),
								k.style.setProperty("display", "flex"),
								k.style.setProperty("align-items", "center"),
								k.style.setProperty("font-size", "10px"),
								k.style.setProperty("gap", "4px"),
								(0, w.insert)(k, () => (S() ? "Accept" : ""), L),
								(0, w.insert)(
									L,
									() =>
										n.keybindingService?.lookupKeybinding(d.$$7b)?.getLabel() ??
										"",
								),
								D.addEventListener("click", (A) => {
									n.analyticsService.trackEvent("composer.reject_diff", {
										source: "editor",
									}),
										n.commandService.executeCommand(d.$b8b, n),
										A.stopPropagation();
								}),
								D.style.setProperty("border", "none"),
								D.style.setProperty("cursor", "pointer"),
								D.style.setProperty("align-items", "center"),
								M.style.setProperty("display", "flex"),
								M.style.setProperty("align-items", "center"),
								M.style.setProperty("gap", "4px"),
								M.style.setProperty("font-size", "10px"),
								(0, w.insert)(M, () => (S() ? "Reject" : ""), N),
								(0, w.insert)(
									N,
									() =>
										n.keybindingService?.lookupKeybinding(d.$b8b)?.getLabel() ??
										"",
								),
								(0, i.effect)(
									(A) => {
										const R = n.isHidden ? "hidden" : "visible",
											O = y()
												? "var(--vscode-charts-green)"
												: "rgba(0.0,255,0.0,0.3)",
											B = y() ? l : "rgba(255,255,255,0.8)",
											U = y() ? (o() && b() ? "1.0" : "0.8") : "1.0",
											z = !y() || S() ? "1.0" : "0.6",
											F = y()
												? "var(--vscode-charts-red)"
												: "rgba(255,0,0,0.4)",
											x = y() ? l : "rgba(255,255,255,0.8)",
											H = y() ? (o() && b() ? "1.0" : "0.8") : "1.0",
											q = !y() || S() ? "1.0" : "0.6";
										return (
											R !== A._v$ &&
												((A._v$ = R) != null
													? I.style.setProperty("visibility", R)
													: I.style.removeProperty("visibility")),
											O !== A._v$2 &&
												((A._v$2 = O) != null
													? P.style.setProperty("background-color", O)
													: P.style.removeProperty("background-color")),
											B !== A._v$3 &&
												((A._v$3 = B) != null
													? P.style.setProperty("color", B)
													: P.style.removeProperty("color")),
											U !== A._v$4 &&
												((A._v$4 = U) != null
													? P.style.setProperty("opacity", U)
													: P.style.removeProperty("opacity")),
											z !== A._v$5 &&
												((A._v$5 = z) != null
													? L.style.setProperty("opacity", z)
													: L.style.removeProperty("opacity")),
											F !== A._v$6 &&
												((A._v$6 = F) != null
													? D.style.setProperty("background-color", F)
													: D.style.removeProperty("background-color")),
											x !== A._v$7 &&
												((A._v$7 = x) != null
													? D.style.setProperty("color", x)
													: D.style.removeProperty("color")),
											H !== A._v$8 &&
												((A._v$8 = H) != null
													? D.style.setProperty("opacity", H)
													: D.style.removeProperty("opacity")),
											q !== A._v$9 &&
												((A._v$9 = q) != null
													? N.style.setProperty("opacity", q)
													: N.style.removeProperty("opacity")),
											A
										);
									},
									{
										_v$: void 0,
										_v$2: void 0,
										_v$3: void 0,
										_v$4: void 0,
										_v$5: void 0,
										_v$6: void 0,
										_v$7: void 0,
										_v$8: void 0,
										_v$9: void 0,
									},
								),
								I
							);
						})();
					}, c);
				}
			},
		)
