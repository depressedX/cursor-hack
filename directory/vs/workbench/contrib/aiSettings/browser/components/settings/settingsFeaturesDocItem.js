import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/web.js';
import '../../../../../../../external/solid/solid.js';
import '../../../../../../base/common/codicons.js';
import '../../../../../../base/common/themables.js';
import '../../../../aiCpp/browser/cppDebouncingService.js';
import '../../../../aichat/browser/components/Utils.js';
import '../../../../ui/browser/scrollableDiv.js';
import '../../../../controlCommon/browser/solid.js';
import '../../../../ui/browser/hooks/useThemeHooks.js';
define(
			de[1376],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 14, 26, 551, 242, 135, 36, 331]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$F_b = T),
					(e.$G_b = P);
				const o = (0, t.template)("<span>"),
					f = (0, t.template)("<span>Indexing <i>"),
					b = (0, t.template)("<span>Indexed <i>"),
					s = (0, t.template)("<span>Indexing failed"),
					l = (0, t.template)('<div class="docs-button" title="Save"><span>'),
					y = (0, t.template)("<div><div></div><div>"),
					$ = (0, t.template)(
						'<div><div><div></div><span></span></div><div><div><span></span></div><div title="See pages"><div></div></div><div class="docs-button" title="Delete"><span>',
					),
					v = (0, t.template)('<input type="text">'),
					S = (0, t.template)('<div class="docs-button" title="Edit"><span>'),
					I = (0, t.template)("<a>");
				function T(k) {
					return new Date(k).toLocaleString(void 0, {
						month: "numeric",
						day: "numeric",
						year: "2-digit",
						hour: "numeric",
						minute: "2-digit",
						hour12: !0,
					});
				}
				function P(k) {
					const L = (0, g.$odc)(),
						[D, M] = (0, r.createSignal)(""),
						[N, A] = (0, r.createSignal)(null),
						[R, O] = (0, r.createSignal)(!1),
						B = (V) => `${V.identifier}${V.name}`;
					(0, r.createEffect)(() => {
						const V = (G) => {
							G.target.closest(".see-pages-button") || A(null);
						};
						L.window.addEventListener("click", V),
							(0, r.onCleanup)(() => {
								L.window.removeEventListener("click", V);
							});
					});
					const U = (V) => {
							O(!0), M(V.name);
							let G = 0;
							const K = () => {
								q ? q.focus() : G < 3 && (G++, setTimeout(K, 50));
							};
							K();
						},
						z = (V) => {
							D() &&
								L.reactiveStorageService.setApplicationUserPersistentStorage(
									"personalDocs",
									(G) =>
										G.map((K) => (B(K) === B(V) ? { ...K, name: D() } : K)),
								),
								O(!1),
								M("");
						},
						F = (0, h.$s6b)(async (V, G) => {
							L.aiDocsService.rescrapeDocs(V, G);
						}, 1e3),
						[x, H] = (0, r.createSignal)(!1);
					let q;
					return (() => {
						const V = $(),
							G = V.firstChild,
							K = G.firstChild,
							J = K.nextSibling,
							W = G.nextSibling,
							X = W.firstChild,
							Y = X.firstChild,
							ie = X.nextSibling,
							ne = ie.firstChild,
							ee = ie.nextSibling,
							_ = ee.firstChild;
						return (
							V.addEventListener("mouseleave", () => H(!1)),
							V.addEventListener("mouseenter", () => H(!0)),
							V.style.setProperty("display", "flex"),
							V.style.setProperty("gap", "8px"),
							V.style.setProperty("justify-content", "space-between"),
							V.style.setProperty("align-items", "center"),
							V.style.setProperty(
								"color",
								"var(--vscode-input-placeholderForeground)",
							),
							V.style.setProperty("font-size", "12px"),
							V.style.setProperty("padding", "2px 6px"),
							V.style.setProperty("margin-left", "-6px"),
							V.style.setProperty("border-radius", "4px"),
							V.style.setProperty("height", "20px"),
							G.style.setProperty("overflow", "hidden"),
							G.style.setProperty("text-overflow", "ellipsis"),
							G.style.setProperty("white-space", "nowrap"),
							G.style.setProperty("min-width", "150px"),
							G.style.setProperty("display", "flex"),
							G.style.setProperty("align-items", "center"),
							K.style.setProperty("width", "4px"),
							K.style.setProperty("height", "4px"),
							K.style.setProperty("border-radius", "50%"),
							K.style.setProperty("margin-right", "4px"),
							J.style.setProperty("overflow", "hidden"),
							J.style.setProperty("text-overflow", "ellipsis"),
							J.style.setProperty("white-space", "nowrap"),
							(0, m.insert)(
								J,
								(0, d.createComponent)(r.Show, {
									get when() {
										return !R();
									},
									get fallback() {
										return (() => {
											const te = v();
											te.addEventListener("blur", () => {
												z(k.doc);
											}),
												te.addEventListener("keydown", (Z) => {
													Z.key === "Enter" && z(k.doc);
												}),
												te.addEventListener("input", (Z) => M(Z.target.value));
											const Q = q;
											return (
												typeof Q == "function" ? (0, i.use)(Q, te) : (q = te),
												te.style.setProperty(
													"color",
													"var(--vscode-editor-foreground)",
												),
												te.style.setProperty(
													"background-color",
													"var(--vscode-input-background)",
												),
												te.style.setProperty("border", "none"),
												te.style.setProperty("outline", "none"),
												te.style.setProperty("border-radius", "2px"),
												te.style.setProperty("padding", "2px 2px"),
												te.style.setProperty("width", "100%"),
												te.style.setProperty("font-size", "12px"),
												te.style.setProperty("box-sizing", "border-box"),
												(0, C.effect)(() => (te.value = D())),
												te
											);
										})();
									},
									get children() {
										return [
											(() => {
												const te = o();
												return (
													te.addEventListener("dblclick", () => U(k.doc)),
													te.style.setProperty(
														"color",
														"var(--vscode-editor-foreground)",
													),
													te.style.setProperty("padding", "2px 2px"),
													(0, m.insert)(te, () => k.doc.name),
													te
												);
											})(),
											(0, d.createComponent)(r.Show, {
												get when() {
													return (
														k.doc.indexingStatus === "indexing" &&
														k.doc.indexingPageName
													);
												},
												get children() {
													const te = f(),
														Q = te.firstChild,
														Z = Q.nextSibling;
													return (
														te.style.setProperty(
															"color",
															"var(--vscode-input-placeholderForeground)",
														),
														te.style.setProperty("font-size", "10px"),
														te.style.setProperty("margin-left", "4px"),
														te.style.setProperty("overflow", "hidden"),
														te.style.setProperty("text-overflow", "ellipsis"),
														te.style.setProperty("white-space", "nowrap"),
														te.style.setProperty("flex-shrink", "1"),
														(0, m.insert)(Z, () => k.doc.indexingPageName),
														(0, m.insert)(
															te,
															(0, d.createComponent)(c.$C$b, {}),
															null,
														),
														te
													);
												},
											}),
											(0, d.createComponent)(r.Show, {
												get when() {
													return (
														k.doc.indexingStatus === "success" &&
														(k.doc.lastUploadedAt || k.doc.createdAt)
													);
												},
												get children() {
													const te = b(),
														Q = te.firstChild,
														Z = Q.nextSibling;
													return (
														te.style.setProperty(
															"color",
															"var(--vscode-input-placeholderForeground)",
														),
														te.style.setProperty("font-size", "10px"),
														te.style.setProperty("margin-left", "6px"),
														(0, m.insert)(Z, () =>
															T(k.doc.lastUploadedAt || k.doc.createdAt || ""),
														),
														te
													);
												},
											}),
											(0, d.createComponent)(r.Show, {
												get when() {
													return k.doc.indexingStatus === "failure";
												},
												get children() {
													const te = s();
													return (
														te.style.setProperty(
															"color",
															"var(--vscode-input-placeholderForeground)",
														),
														te.style.setProperty("font-size", "10px"),
														te.style.setProperty("margin-left", "6px"),
														te
													);
												},
											}),
										];
									},
								}),
							),
							W.style.setProperty("display", "flex"),
							W.style.setProperty("gap", "6px"),
							W.style.setProperty("align-items", "center"),
							(0, m.insert)(
								W,
								(0, d.createComponent)(r.Show, {
									get when() {
										return R();
									},
									get fallback() {
										return (() => {
											const te = S(),
												Q = te.firstChild;
											return (
												te.addEventListener("click", () => U(k.doc)),
												te.style.setProperty("cursor", "pointer"),
												te.style.setProperty("display", "flex"),
												te.style.setProperty("justify-content", "center"),
												te.style.setProperty("align-items", "center"),
												(0, C.effect)(() =>
													(0, E.className)(
														Q,
														a.ThemeIcon.asClassName(u.$ak.pencil),
													),
												),
												te
											);
										})();
									},
									get children() {
										const te = l(),
											Q = te.firstChild;
										return (
											te.addEventListener("click", () => z(k.doc)),
											te.style.setProperty("cursor", "pointer"),
											te.style.setProperty("display", "flex"),
											te.style.setProperty("justify-content", "center"),
											te.style.setProperty("align-items", "center"),
											(0, C.effect)(() =>
												(0, E.className)(
													Q,
													a.ThemeIcon.asClassName(u.$ak.check),
												),
											),
											te
										);
									},
								}),
								X,
							),
							X.addEventListener("click", (te) => {
								F(k.doc.identifier, te.shiftKey);
							}),
							X.style.setProperty("display", "flex"),
							X.style.setProperty("justify-content", "center"),
							X.style.setProperty("align-items", "center"),
							X.style.setProperty("cursor", "pointer"),
							ie.style.setProperty("position", "relative"),
							ie.style.setProperty("display", "flex"),
							ie.style.setProperty("justify-content", "center"),
							ie.style.setProperty("align-items", "center"),
							ne.addEventListener("click", () => A(B(k.doc))),
							ne.style.setProperty("cursor", "pointer"),
							(0, m.insert)(
								ie,
								(0, d.createComponent)(r.Show, {
									get when() {
										return N() === B(k.doc);
									},
									get children() {
										return (0, d.createComponent)(n.$w0b, {
											scrollingDirection: "vertical",
											nonReactiveElementOptions: {
												alwaysConsumeMouseWheel: !0,
											},
											style: {
												position: "absolute",
												"background-color": "var(--vscode-editor-background)",
												width: "300px",
												border:
													"1px solid var(--vscode-commandCenter-inactiveBorder)",
												"text-align": "left",
												"z-index": 1,
												top: "18px",
												"border-radius": "4px",
												right: "-2px",
												height: "150px",
											},
											get children() {
												const te = y(),
													Q = te.firstChild,
													Z = Q.nextSibling;
												return (
													te.style.setProperty("padding", "6px"),
													te.style.setProperty("display", "flex"),
													te.style.setProperty("flex-direction", "column"),
													te.style.setProperty("gap", "2px"),
													Q.style.setProperty("font-size", "12px"),
													Q.style.setProperty(
														"color",
														"var(--vscode-editor-foreground)",
													),
													(0, m.insert)(Q, () =>
														k.doc.pages
															? `Indexed ${k.doc.pages?.length} pages`
															: "Indexing...",
													),
													Z.style.setProperty("display", "flex"),
													Z.style.setProperty("flex-direction", "column"),
													Z.style.setProperty("gap", "2px"),
													(0, m.insert)(
														Z,
														(0, d.createComponent)(r.For, {
															get each() {
																return k.doc.pages;
															},
															children: (se) =>
																(() => {
																	const re = I();
																	return (
																		re.addEventListener("click", () => {
																			L.openerService.open(se.url);
																		}),
																		re.style.setProperty(
																			"color",
																			"var(--vscode-textLink-foreground)",
																		),
																		re.style.setProperty("overflow", "hidden"),
																		re.style.setProperty(
																			"text-overflow",
																			"ellipsis",
																		),
																		re.style.setProperty(
																			"white-space",
																			"nowrap",
																		),
																		re.style.setProperty("display", "block"),
																		re.style.setProperty("width", "100%"),
																		(0, m.insert)(re, () => se.title),
																		(0, C.effect)(
																			(le) => {
																				const oe = se.url,
																					ae = se.url;
																				return (
																					oe !== le._v$11 &&
																						(0, w.setAttribute)(
																							re,
																							"href",
																							(le._v$11 = oe),
																						),
																					ae !== le._v$12 &&
																						(0, w.setAttribute)(
																							re,
																							"title",
																							(le._v$12 = ae),
																						),
																					le
																				);
																			},
																			{ _v$11: void 0, _v$12: void 0 },
																		),
																		re
																	);
																})(),
														}),
													),
													te
												);
											},
										});
									},
								}),
								null,
							),
							ee.addEventListener("click", () => {
								const te = k.doc.identifier,
									Q = k.doc.name;
								L.reactiveStorageService.setApplicationUserPersistentStorage(
									"personalDocs",
									(Z) =>
										Z.filter((se) => se.identifier !== te && se.name !== Q),
								);
							}),
							ee.style.setProperty("display", "flex"),
							ee.style.setProperty("justify-content", "center"),
							ee.style.setProperty("align-items", "center"),
							ee.style.setProperty("cursor", "pointer"),
							(0, C.effect)(
								(te) => {
									const Q =
											"settings-menu-docs-item" +
											((0, p.$d$b)(L.themeService) ? " dark" : " light"),
										Z =
											k.doc.indexingStatus === "success"
												? "var(--vscode-testing-iconPassed)"
												: k.doc.indexingStatus === "indexing"
													? "var(--vscode-testing-iconQueued)"
													: "var(--vscode-testing-iconFailed)",
										se = k.doc.indexingStatus === "indexing" ? "pulse" : "",
										re = k.doc.url,
										le =
											"docs-button" +
											(k.doc.indexingStatus === "indexing" ? " disabled" : ""),
										oe =
											k.doc.indexingStatus === "indexing"
												? "Indexing..."
												: "Reindex (shift click to force reupload)",
										ae = a.ThemeIcon.asClassName(u.$ak.refresh),
										pe =
											"see-pages-button docs-button" +
											(N() === B(k.doc) ? " active" : ""),
										$e = a.ThemeIcon.asClassName(u.$ak.book),
										ye = a.ThemeIcon.asClassName(u.$ak.trashcan);
									return (
										Q !== te._v$ && (0, E.className)(V, (te._v$ = Q)),
										Z !== te._v$2 &&
											((te._v$2 = Z) != null
												? K.style.setProperty("background-color", Z)
												: K.style.removeProperty("background-color")),
										se !== te._v$3 && (0, E.className)(K, (te._v$3 = se)),
										re !== te._v$4 &&
											(0, w.setAttribute)(J, "title", (te._v$4 = re)),
										le !== te._v$5 && (0, E.className)(X, (te._v$5 = le)),
										oe !== te._v$6 &&
											(0, w.setAttribute)(X, "title", (te._v$6 = oe)),
										ae !== te._v$7 && (0, E.className)(Y, (te._v$7 = ae)),
										pe !== te._v$8 && (0, E.className)(ie, (te._v$8 = pe)),
										$e !== te._v$9 && (0, E.className)(ne, (te._v$9 = $e)),
										ye !== te._v$10 && (0, E.className)(_, (te._v$10 = ye)),
										te
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
									_v$10: void 0,
								},
							),
							V
						);
					})();
				}
			},
		),
		