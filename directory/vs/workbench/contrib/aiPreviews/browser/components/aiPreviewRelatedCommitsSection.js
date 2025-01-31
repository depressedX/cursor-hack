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
import './aiPreviewSection.js';
import './constants.js';
import '../../../controlCommon/browser/solid.js';
define(
			de[4131],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 26, 1272, 972, 36]),
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
 a /*aiPreviewSection*/,
 h /*constants*/,
 c /*solid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$dZc = g);
				const n = (0, t.template)(
					'<div class="ai-preview-clickable"><div></div><span></span><span></span><span>',
				);
				function g(p) {
					const o = (0, c.$odc)(),
						[f, b] = (0, m.createSignal)(0),
						[s, l] = (0, m.createSignal)(""),
						y = (0, m.createMemo)(() => {
							if (p.relatedCommits.length === 0) return () => {};
							const v = p.relatedCommits;
							return (S) => {
								const I = s(),
									T = S === void 0 ? v[f()] : v[S];
								if (!I) {
									console.warn("[ai preview] No upstream URL");
									return;
								}
								const P = `${I}/commit/${T.commit}`;
								o.openerService.open(P, { openExternal: !0 });
							};
						}),
						$ = async () => {
							const v = await o.gitContextService.getGitUpstreamURL();
							v && l(v);
						};
					return (
						(0, m.createEffect)(() => {
							if (p.relatedCommits.length === 0) return;
							const v = p.isRunning,
								S = p.relatedCommits.length,
								I = p.stopRunning,
								T = (P) => {
									if (v) {
										if (P.key === "ArrowUp" || P.key === "k") {
											if (
												(P.preventDefault(),
												P.stopImmediatePropagation(),
												f() === 0)
											) {
												I();
												return;
											}
											b((k) => k - 1);
											return;
										}
										if (P.key === "ArrowDown" || P.key === "j") {
											if (
												(P.preventDefault(),
												P.stopImmediatePropagation(),
												f() === S - 1)
											) {
												I();
												return;
											}
											b((k) => k + 1);
											return;
										}
										if (P.key === "Enter" || P.key === " ") {
											P.preventDefault(), P.stopImmediatePropagation(), y()();
											return;
										}
									}
								};
							o.window.document.addEventListener("keydown", T),
								(0, m.onCleanup)(() => {
									o.window.document.removeEventListener("keydown", T);
								});
						}),
						$(),
						(0, d.createComponent)(m.Show, {
							get when() {
								return p.relatedCommits.length > 0;
							},
							get children() {
								return (0, d.createComponent)(a.$$Yc, {
									get title() {
										return h.$bZc["related-commits"];
									},
									get isSelected() {
										return !p.isRunning && p.isSelected;
									},
									get iconClass() {
										return u.ThemeIcon.asClassName(r.$ak.history);
									},
									get isOpen() {
										return p.isOpen;
									},
									get setIsOpen() {
										return p.setIsOpen;
									},
									get children() {
										return (0, d.createComponent)(m.For, {
											get each() {
												return p.relatedCommits;
											},
											children: (v, S) => {
												const I = new Date(v.date)
													.toLocaleDateString("en-US", {
														year: "2-digit",
														month: "numeric",
														day: "numeric",
													})
													.replace(/\//g, "/");
												return (() => {
													const T = n(),
														P = T.firstChild,
														k = P.nextSibling,
														L = k.nextSibling,
														D = L.nextSibling;
													return (
														T.addEventListener("click", () => y()(S())),
														T.style.setProperty("font-size", "0.7rem"),
														T.style.setProperty("display", "flex"),
														T.style.setProperty("align-items", "center"),
														T.style.setProperty("gap", "3px"),
														T.style.setProperty("border-radius", "4px"),
														T.style.setProperty(
															"border",
															"1px solid transparent",
														),
														P.style.setProperty(
															"color",
															"var(--vscode-input-placeholderForeground)",
														),
														k.style.setProperty(
															"color",
															"var(--vscode-editor-foreground)",
														),
														(0, C.insert)(k, I),
														L.style.setProperty(
															"color",
															"var(--vscode-textLink-foreground)",
														),
														L.style.setProperty("flex-shrink", "0"),
														(0, C.insert)(L, () => v.author),
														D.style.setProperty(
															"color",
															"var(--vscode-input-placeholderForeground)",
														),
														D.style.setProperty("white-space", "nowrap"),
														D.style.setProperty("overflow", "hidden"),
														D.style.setProperty("text-overflow", "ellipsis"),
														(0, C.insert)(D, () => v.message),
														(0, E.effect)(
															(M) => {
																const N = s() ? "pointer" : "default",
																	A =
																		p.isRunning && S() === f()
																			? "var(--vscode-editor-foreground)"
																			: "transparent",
																	R = u.ThemeIcon.asClassName(r.$ak.gitCommit),
																	O = v.message;
																return (
																	N !== M._v$ &&
																		((M._v$ = N) != null
																			? T.style.setProperty("cursor", N)
																			: T.style.removeProperty("cursor")),
																	A !== M._v$2 &&
																		((M._v$2 = A) != null
																			? T.style.setProperty("border-color", A)
																			: T.style.removeProperty("border-color")),
																	R !== M._v$3 &&
																		(0, w.className)(P, (M._v$3 = R)),
																	O !== M._v$4 &&
																		(0, i.setAttribute)(
																			D,
																			"title",
																			(M._v$4 = O),
																		),
																	M
																);
															},
															{
																_v$: void 0,
																_v$2: void 0,
																_v$3: void 0,
																_v$4: void 0,
															},
														),
														T
													);
												})();
											},
										});
									},
								});
							},
						})
					);
				}
			},
		)
