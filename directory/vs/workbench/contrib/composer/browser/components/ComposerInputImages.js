import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/uri.js';
import '../../../../../base/common/network.js';
import '../../../../../base/common/themables.js';
import '../../../../../base/common/codicons.js';
import '../../../ui/browser/scrollableDiv.js';
import '../../../controlCommon/browser/solid.js';
import '../hooks/useComposerDataHandle.js';
define(
			de[4206],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 9, 23, 26, 14, 135, 36, 177]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerInputImages = l);
				const p = (0, t.template)("<div>"),
					o = (0, t.template)('<div class="input-box-code-selection">'),
					f = (0, t.template)('<span title="Remove image">'),
					b = (0, t.template)("<div><img>"),
					s = 20;
				function l(y) {
					const $ = (0, n.$odc)(),
						{ composerDataService: v } = $,
						{ currentComposer: S } = (0, g.useComposerDataHandle)(
							() => y.composerDataHandle,
						),
						I = (0, m.createMemo)(() => S().context.selectedImages || []),
						T = (0, m.createMemo)(() =>
							I().map((P) => {
								const k = r.URI.file(P.path);
								return u.$7g.uriToBrowserUri(k).toString();
							}),
						);
					return (0, d.createComponent)(m.Show, {
						get when() {
							return I().length > 0;
						},
						get children() {
							const P = o();
							return (
								P.style.setProperty("position", "relative"),
								P.style.setProperty("border-radius", "4px"),
								P.style.setProperty("overflow", "hidden"),
								P.style.setProperty("margin-bottom", "0.25rem"),
								P.style.setProperty("box-sizing", "border-box"),
								P.style.setProperty("-webkit-app-region", "no-drag"),
								P.style.setProperty("flex-shrink", "0"),
								(0, C.insert)(
									P,
									(0, d.createComponent)(c.$w0b, {
										scrollingDirection: "horizontal",
										style: { width: "100%", height: "100%" },
										innerContainerStyle: { height: "100%" },
										nonReactiveElementOptions: { verticalScrollbarSize: 0 },
										get children() {
											const k = p();
											return (
												k.style.setProperty("display", "flex"),
												k.style.setProperty("gap", "0.25rem"),
												k.style.setProperty("padding", "0.25rem"),
												k.style.setProperty("box-sizing", "border-box"),
												k.style.setProperty("height", "140px"),
												(0, C.insert)(
													k,
													(0, d.createComponent)(m.For, {
														get each() {
															return I();
														},
														children: (L, D) => {
															const [M, N] = (0, m.createSignal)(!1);
															let A;
															return (() => {
																const R = b(),
																	O = R.firstChild;
																return (
																	R.addEventListener("mouseout", () => {
																		A = setTimeout(() => {
																			N(!1);
																		}, s);
																	}),
																	R.addEventListener("mouseover", () => {
																		A && (clearTimeout(A), (A = void 0)), N(!0);
																	}),
																	R.style.setProperty("position", "relative"),
																	R.style.setProperty("flex-shrink", "0"),
																	R.style.setProperty("height", "100%"),
																	R.style.setProperty("width", "auto"),
																	R.style.setProperty("display", "flex"),
																	R.style.setProperty("align-items", "center"),
																	R.style.setProperty(
																		"justify-content",
																		"center",
																	),
																	R.style.setProperty(
																		"background-color",
																		"var(--vscode-editor-background)",
																	),
																	R.style.setProperty("border-radius", "4px"),
																	R.style.setProperty("overflow", "hidden"),
																	O.style.setProperty("height", "100%"),
																	O.style.setProperty("width", "auto"),
																	O.style.setProperty("object-fit", "contain"),
																	(0, C.insert)(
																		R,
																		(0, d.createComponent)(m.Show, {
																			get when() {
																				return M();
																			},
																			get children() {
																				const B = f();
																				return (
																					B.addEventListener("click", (U) => {
																						U.stopPropagation(),
																							y.onRemove(D());
																					}),
																					B.style.setProperty(
																						"position",
																						"absolute",
																					),
																					B.style.setProperty("top", "0.25rem"),
																					B.style.setProperty(
																						"right",
																						"0.25rem",
																					),
																					B.style.setProperty(
																						"font-size",
																						"1em",
																					),
																					B.style.setProperty("z-index", "1"),
																					B.style.setProperty(
																						"background",
																						"var(--vscode-editorWidget-border)",
																					),
																					B.style.setProperty(
																						"border-radius",
																						"3px",
																					),
																					B.style.setProperty(
																						"cursor",
																						"pointer",
																					),
																					B.style.setProperty("width", "16px"),
																					B.style.setProperty("height", "16px"),
																					B.style.setProperty(
																						"display",
																						"flex",
																					),
																					B.style.setProperty(
																						"align-items",
																						"center",
																					),
																					B.style.setProperty(
																						"justify-content",
																						"center",
																					),
																					(0, E.effect)(() =>
																						(0, w.className)(
																							B,
																							a.ThemeIcon.asClassName(
																								h.$ak.close,
																							),
																						),
																					),
																					B
																				);
																			},
																		}),
																		null,
																	),
																	(0, E.effect)(
																		(B) => {
																			const U = `${T()[D()]}?t=${L.loadedAt}`,
																				z = `Composer Image ${D() + 1}`;
																			return (
																				U !== B._v$ &&
																					(0, i.setAttribute)(
																						O,
																						"src",
																						(B._v$ = U),
																					),
																				z !== B._v$2 &&
																					(0, i.setAttribute)(
																						O,
																						"alt",
																						(B._v$2 = z),
																					),
																				B
																			);
																		},
																		{ _v$: void 0, _v$2: void 0 },
																	),
																	R
																);
															})();
														},
													}),
												),
												k
											);
										},
									}),
								),
								P
							);
						},
					});
				}
			},
		),
		