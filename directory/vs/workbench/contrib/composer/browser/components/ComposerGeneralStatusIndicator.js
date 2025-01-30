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
import '../hooks/useComposerHoverTooltip.js';
import '../constants.js';
import '../../../../../base/browser/ui/hover/hoverWidget.js';
import '../../../../../css!vs/workbench/contrib/composer/browser/components/ComposerGeneralStatusIndicator.js';
define(
			de[565],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 26, 311, 169, 160, 2410]),
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
 a /*useComposerHoverTooltip*/,
 h /*constants*/,
 c /*hoverWidget*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerGeneralStatusIndicator = o);
				const n = (0, t.template)("<div>"),
					g = (0, t.template)("<span>"),
					p = [
						"outdated",
						"rejected",
						"cancelled",
						"aborted",
						"completed",
						"accepted",
					];
				function o(f) {
					const b = {
							small: {
								width: "6px",
								height: "6px",
								fontSize: "10px",
								dotSize: "4px",
							},
							medium: {
								width: "10px",
								height: "10px",
								fontSize: "12px",
								dotSize: "6px",
							},
							large: {
								width: "14px",
								height: "14px",
								fontSize: "16px",
								dotSize: "10px",
							},
						},
						s = (0, m.createMemo)(() => b[f.size || "small"]),
						{ showHover: l, hideHover: y } = (0, a.useComposerHoverTooltip)({
							delay: 300,
							position: c.HoverPosition.RIGHT,
							additionalClasses: ["chat-hover-tooltip"],
						}),
						$ = (0, m.createMemo)(() =>
							f.status === "none" || f.status === "outdated"
								? "var(--vscode-testing-iconUnset)"
								: f.status === "generating" ||
										f.status === "applying" ||
										f.status === "apply_pending" ||
										f.status === "running"
									? "var(--vscode-testing-iconQueued)"
									: f.status === "completed"
										? "var(--vscode-testing-iconPassed)"
										: "var(--vscode-testing-iconFailed)",
						),
						v = (0, m.createMemo)(() => p.includes(f.status));
					return (() => {
						const S = n();
						return (
							S.addEventListener("mouseleave", () => v() && y()),
							S.addEventListener(
								"mouseenter",
								(I) => v() && l(I, h.composerCodeBlockStatusLabelMap[f.status]),
							),
							(0, E.insert)(
								S,
								(0, C.createComponent)(m.Show, {
									get when() {
										return (
											f.status !== "accepted" &&
											f.status !== "rejected" &&
											f.status !== "cancelled" &&
											f.status !== "aborted"
										);
									},
									get fallback() {
										return (0, C.createComponent)(m.Show, {
											get when() {
												return f.status === "accepted";
											},
											get fallback() {
												return (() => {
													const I = g();
													return (
														I.style.setProperty(
															"color",
															"var(--vscode-testing-iconFailed)",
														),
														(0, d.effect)(
															(T) => {
																const P = s().fontSize,
																	k = u.ThemeIcon.asClassName(r.$ak.x);
																return (
																	P !== T._v$8 &&
																		((T._v$8 = P) != null
																			? I.style.setProperty("font-size", P)
																			: I.style.removeProperty("font-size")),
																	k !== T._v$9 &&
																		(0, w.className)(I, (T._v$9 = k)),
																	T
																);
															},
															{ _v$8: void 0, _v$9: void 0 },
														),
														I
													);
												})();
											},
											get children() {
												const I = g();
												return (
													I.style.setProperty(
														"color",
														"var(--vscode-testing-iconPassed)",
													),
													(0, d.effect)(
														(T) => {
															const P = s().fontSize,
																k = u.ThemeIcon.asClassName(r.$ak.check);
															return (
																P !== T._v$6 &&
																	((T._v$6 = P) != null
																		? I.style.setProperty("font-size", P)
																		: I.style.removeProperty("font-size")),
																k !== T._v$7 &&
																	(0, w.className)(I, (T._v$7 = k)),
																T
															);
														},
														{ _v$6: void 0, _v$7: void 0 },
													),
													I
												);
											},
										});
									},
									get children() {
										const I = n();
										return (
											I.style.setProperty("flex-shrink", "0"),
											I.style.setProperty("border-radius", "50%"),
											(0, d.effect)(
												(T) => {
													const P = s().dotSize,
														k = s().dotSize,
														L = $();
													return (
														P !== T._v$ &&
															((T._v$ = P) != null
																? I.style.setProperty("width", P)
																: I.style.removeProperty("width")),
														k !== T._v$2 &&
															((T._v$2 = k) != null
																? I.style.setProperty("height", k)
																: I.style.removeProperty("height")),
														L !== T._v$3 &&
															((T._v$3 = L) != null
																? I.style.setProperty("background", L)
																: I.style.removeProperty("background")),
														T
													);
												},
												{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
											),
											I
										);
									},
								}),
							),
							(0, d.effect)(
								(I) => {
									const T = f.pulse ? "composer-status-ripple" : void 0,
										P = {
											opacity: 1,
											display: "inline-flex",
											"align-items": "center",
											"justify-content": "center",
											width: s().width,
											height: s().height,
											position: "relative",
											"--ripple-color": $(),
											...f.style,
										};
									return (
										T !== I._v$4 && (0, w.className)(S, (I._v$4 = T)),
										(I._v$5 = (0, i.style)(S, P, I._v$5)),
										I
									);
								},
								{ _v$4: void 0, _v$5: void 0 },
							),
							S
						);
					})();
				}
			},
		),
		