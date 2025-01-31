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
import '../../../../../../../../external/lexical/lexical-solid/LexicalComposerContext.js';
import '../../../../../../../../external/lexical/lexical-solid/LexicalTypeaheadMenuPlugin.js';
import '../../../../../../../../external/lexical/lexical/api.js';
import '../../../../../../../../external/solid/solid.js';
import '../../../../../../../base/common/codicons.js';
import '../../../../../../../base/common/path.js';
import '../../../../../../../base/common/themables.js';
import '../../../../../../../base/common/uri.js';
import '../../../../../../../platform/reactivestorage/browser/reactiveStorageTypes.js';
import '../../../../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../../../../../aichat/browser/codeSelections.js';
import '../../../../../controlCommon/browser/solid.js';
import '../InputBoxMenu.js';
import '../mentions/MentionsPlugin.js';
import '../mentions/pureIcon.js';
import '../mentions/searchHooks.js';
import '../mentions/types.js';
import '../recognizers.js';
define(
			de[4308],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 181, 756, 164, 13, 14, 54, 26, 9, 205,
				134, 354, 36, 1069, 1382, 156, 1381, 310, 817,
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
				u /*LexicalComposerContext*/,
				a /*LexicalTypeaheadMenuPlugin*/,
				h /*api*/,
				c /*solid*/,
				n /*codicons*/,
				g /*path*/,
				p /*themables*/,
				o /*uri*/,
				f /*reactiveStorageTypes*/,
				b /*reactiveStorageTypes*/,
				s /*codeSelections*/,
				l /*solid*/,
				y /*InputBoxMenu*/,
				$ /*MentionsPlugin*/,
				v /*pureIcon*/,
				S /*searchHooks*/,
				I /*types*/,
				T /*recognizers*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = U);
				const P = (0, t.template)("<span><span>"),
					k = (0, t.template)('<span class="sizePreview"> '),
					L = (0, t.template)(
						'<li tabindex="-1" role="option"><span></span><span>',
					),
					D = (0, t.template)(
						'<div id="mention-selection-preview"><div><div><div class="file-preview-container"><div></div><span>',
					),
					M = (0, t.template)("<div><span><span>"),
					N = (0, t.template)("<div>"),
					A = (0, t.template)('<div id="mention-selection-preview">'),
					R = (0, t.template)("<ul>"),
					O = (F) => {
						const x = (0, c.createMemo)(() =>
								F.isSelected ? "item selected" : "item",
							),
							q = (0, l.$odc)().themeService.getColorTheme(),
							V = q.getColor("menu.selectionBackground"),
							G = q.getColor("menu.selectionForeground"),
							K = q.getColor("menu.inactiveSelectionForeground"),
							J = q.getColor("editorOverviewRuler.bracketMatchForeground"),
							W = (ne) => {
								if (typeof ne == "string") return ne;
								const ee = ne / 4,
									_ = [
										[1e6, "M toks"],
										[1e3, "K toks"],
										[1, " toks"],
									],
									[te, Q] = _.find((re) => re[0] < ee) ?? _[_.length - 1];
								return `${(Math.round(ee / te) + "").match(/.{1,3}/g)?.join(",") ?? "<fmt err>"}${Q}`;
							},
							[X, { refetch: Y }] = (0, c.createResource)(
								() => F.option.sizeBytes,
							),
							ie = (0, c.createMemo)(() =>
								X.loading || X.error || X() === void 0
									? ""
									: "(" + W(X() ?? 0) + ")",
							);
						return (() => {
							const ne = L(),
								ee = ne.firstChild,
								_ = ee.nextSibling;
							ne.addEventListener("click", () => {
								F.onClick();
							}),
								ne.addEventListener("mouseenter", () => {
									F.onMouseEnter();
								});
							const te = F.option.setRefElement;
							return (
								typeof te == "function"
									? (0, r.use)(te, ne)
									: (F.option.setRefElement = ne),
								ee.style.setProperty("display", "flex"),
								(0, m.insert)(ee, () => F.option.picture),
								(0, m.insert)(_, () => F.option.name),
								(0, m.insert)(
									ne,
									(0, E.createComponent)(c.Show, {
										get when() {
											return F.option.secondaryText;
										},
										get children() {
											return [
												(() => {
													const Q = P(),
														Z = Q.firstChild;
													return (
														Z.style.setProperty("direction", "ltr"),
														Z.style.setProperty("unicode-bidi", "embed"),
														(0, m.insert)(Z, () => F.option.secondaryText),
														(0, d.effect)(
															(se) => {
																const re =
																		"secondary-text" +
																		(F.option.type === "staticheading"
																			? " heading"
																			: ""),
																	le = F.isSelected
																		? (K?.toString() ?? "")
																		: (J?.toString() ?? "");
																return (
																	re !== se._v$ &&
																		(0, C.className)(Q, (se._v$ = re)),
																	le !== se._v$2 &&
																		((se._v$2 = le) != null
																			? Q.style.setProperty("color", le)
																			: Q.style.removeProperty("color")),
																	se
																);
															},
															{ _v$: void 0, _v$2: void 0 },
														),
														Q
													);
												})(),
												(0, E.createComponent)(c.Show, {
													get when() {
														return F.option.sizeBytes !== void 0;
													},
													get children() {
														const Q = k(),
															Z = Q.firstChild;
														return (0, m.insert)(Q, ie, null), Q;
													},
												}),
											];
										},
									}),
									null,
								),
								(0, d.effect)(
									(Q) => {
										const Z = x(),
											se = F.isSelected,
											re = "typeahead-item-" + F.index,
											le = {
												...(F.isSelected
													? {
															"background-color": V?.toString() ?? "",
															color: G?.toString() ?? "",
														}
													: {}),
												cursor:
													F.option.type === "staticheading"
														? "default"
														: "pointer",
											},
											oe = F.isSelected
												? (K?.toString() ?? "")
												: (J?.toString() ?? ""),
											ae =
												(F.option.type === "heading" ||
													F.option.type === "staticheading",
												"0px"),
											pe =
												"text" +
												(F.option.type === "staticheading" ? " heading" : "");
										return (
											Z !== Q._v$3 && (0, C.className)(ne, (Q._v$3 = Z)),
											se !== Q._v$4 &&
												(0, w.setAttribute)(ne, "aria-selected", (Q._v$4 = se)),
											re !== Q._v$5 &&
												(0, w.setAttribute)(ne, "id", (Q._v$5 = re)),
											(Q._v$6 = (0, i.style)(ne, le, Q._v$6)),
											oe !== Q._v$7 &&
												((Q._v$7 = oe) != null
													? ee.style.setProperty("color", oe)
													: ee.style.removeProperty("color")),
											ae !== Q._v$8 &&
												((Q._v$8 = ae) != null
													? ee.style.setProperty("margin-left", ae)
													: ee.style.removeProperty("margin-left")),
											pe !== Q._v$9 && (0, C.className)(_, (Q._v$9 = pe)),
											Q
										);
									},
									{
										_v$3: void 0,
										_v$4: void 0,
										_v$5: void 0,
										_v$6: void 0,
										_v$7: void 0,
										_v$8: void 0,
										_v$9: void 0,
									},
								),
								ne
							);
						})();
					},
					B = (F) => {
						const [V, G] = (0, c.createSignal)(),
							[K, J] = (0, c.createSignal)(),
							W = (0, l.$odc)();
						(0, c.createEffect)(async () => {
							if (F.selectedOption.type === "file") {
								G(void 0);
								const _ = F.selectedOption.selectionPrecursor?.uri.fsPath;
								if (!_) return;
								const te =
									await W.everythingProviderService.provider?.runCommand(
										b.FileRetrievalActions.GetDirectory,
										{ fsPath: _ },
									);
								if (!te) {
									J(void 0);
									return;
								}
								const Q = W.workspaceContextService.asRelativePath(
										o.URI.file(_),
									),
									Z = (0, g.$sc)(Q),
									se = Q.replace(Z, "");
								J({
									basePath: se,
									relativeWorkspacePath: Q,
									neighboringFiles: te,
								});
								return;
							}
							J(void 0);
							const ee = await (0, $.$rac)(F.selectedOption, W);
							if (
								ee.type === f.SelectionType.Failure ||
								ee.type === f.SelectionType.None ||
								ee.type === f.SelectionType.Image ||
								ee.type === f.SelectionType.Folder ||
								ee.type === f.SelectionType.Docs ||
								F.selectedOption.type !== I.TypeaheadOptionType.code
							) {
								G(void 0);
								return;
							}
							if (ee.type === f.SelectionType.File) {
								const _ = await (0, s.$2fc)(
									W.textModelService,
									W.dataScrubbingService,
									ee.selectionWithoutUuid,
								);
								G(_);
								return;
							}
							G(ee.selectionWithoutUuid);
						});
						const [X, Y] = (0, c.createSignal)({
							top: F.selectedIndex * 24,
							right: -454,
						});
						(0, c.createEffect)(() => {
							const ee = K() ? 300 : 450;
							let _ = F.selectedIndex * 24,
								te = -(ee + 4);
							const Q = F.optionsListRef?.getBoundingClientRect();
							if (!Q) return;
							Q.right - te > W.window.document.body.clientWidth &&
								(te = Q.width + 4),
								Y({ top: _, right: te }),
								W.window.requestIdleCallback(() => {
									const re = W.window.document
										.getElementById("mention-selection-preview")
										?.getBoundingClientRect();
									if (!re) return;
									const oe =
										Q.top + _ + re.height - W.window.document.body.clientHeight;
									oe > 0 && (_ -= oe + 4), Y({ top: _, right: te });
								});
						}, [F.selectedIndex]);
						const ie = (0, c.createMemo)(
								() =>
									K()
										?.basePath.split("/")
										.filter((ee) => !!ee.trim()) ?? [],
							),
							ne = 14;
						return [
							(0, E.createComponent)(c.Show, {
								get when() {
									return K();
								},
								children: (ee) =>
									(() => {
										const _ = D(),
											te = _.firstChild,
											Q = te.firstChild,
											Z = Q.firstChild,
											se = Z.firstChild,
											re = se.nextSibling;
										return (
											_.style.setProperty("width", "300px"),
											_.style.setProperty("border-radius", "2px"),
											_.style.setProperty("position", "absolute"),
											_.style.setProperty("overflow", "hidden"),
											_.style.setProperty("font-size", "11px"),
											te.style.setProperty(
												"background-color",
												"var(--vscode-editor-background)",
											),
											te.style.setProperty(
												"border",
												"1px solid var(--vscode-commandCenter-inactiveBorder)",
											),
											te.style.setProperty("border-radius", "3px"),
											te.style.setProperty("display", "flex"),
											te.style.setProperty("flex-direction", "column"),
											te.style.setProperty("gap", "2px"),
											te.style.setProperty("position", "relative"),
											te.style.setProperty("overflow", "hidden"),
											Q.style.setProperty("display", "flex"),
											Q.style.setProperty("flex-direction", "column"),
											Q.style.setProperty("gap", "4px"),
											Q.style.setProperty("padding", "0.25rem 0.4rem"),
											(0, m.insert)(
												Q,
												(0, E.createComponent)(c.For, {
													get each() {
														return ie();
													},
													children: (le, oe) =>
														(() => {
															const ae = M(),
																pe = ae.firstChild,
																$e = pe.firstChild;
															return (
																ae.style.setProperty("display", "flex"),
																ae.style.setProperty("align-items", "center"),
																ae.style.setProperty("overflow", "hidden"),
																ae.style.setProperty(
																	"text-overflow",
																	"ellipsis",
																),
																ae.style.setProperty("white-space", "nowrap"),
																(0, m.insert)(
																	ae,
																	(0, E.createComponent)(c.For, {
																		get each() {
																			return Array(oe());
																		},
																		children: (ye) =>
																			(() => {
																				const ue = N();
																				return (
																					ue.style.setProperty(
																						"margin-left",
																						"14px",
																					),
																					ue.style.setProperty(
																						"border-left",
																						"1px solid var(--vscode-commandCenter-inactiveBorder)",
																					),
																					ue.style.setProperty(
																						"display",
																						"inline-block",
																					),
																					ue
																				);
																			})(),
																	}),
																	pe,
																),
																pe.style.setProperty("display", "flex"),
																pe.style.setProperty("align-items", "center"),
																pe.style.setProperty("gap", "4px"),
																pe.style.setProperty("overflow", "hidden"),
																pe.style.setProperty(
																	"text-overflow",
																	"ellipsis",
																),
																pe.style.setProperty("white-space", "nowrap"),
																(0, m.insert)(pe, le, null),
																(0, d.effect)(
																	(ye) => {
																		const ue =
																				oe() === ie().length - 1 ? 1 : 0.5,
																			fe = "calc(100% - " + ne * oe() + "px)",
																			me = p.ThemeIcon.asClassName(
																				n.$ak.folder,
																			);
																		return (
																			ue !== ye._v$13 &&
																				((ye._v$13 = ue) != null
																					? pe.style.setProperty("opacity", ue)
																					: pe.style.removeProperty("opacity")),
																			fe !== ye._v$14 &&
																				((ye._v$14 = fe) != null
																					? pe.style.setProperty(
																							"max-width",
																							fe,
																						)
																					: pe.style.removeProperty(
																							"max-width",
																						)),
																			me !== ye._v$15 &&
																				(0, C.className)($e, (ye._v$15 = me)),
																			ye
																		);
																	},
																	{
																		_v$13: void 0,
																		_v$14: void 0,
																		_v$15: void 0,
																	},
																),
																ae
															);
														})(),
												}),
												Z,
											),
											Z.style.setProperty("display", "flex"),
											Z.style.setProperty("align-items", "center"),
											Z.style.setProperty("overflow", "hidden"),
											Z.style.setProperty("text-overflow", "ellipsis"),
											Z.style.setProperty("white-space", "nowrap"),
											se.style.setProperty(
												"border-left",
												"1px solid var(--vscode-commandCenter-inactiveBorder)",
											),
											se.style.setProperty("display", "inline-block"),
											re.style.setProperty("display", "flex"),
											re.style.setProperty("align-items", "center"),
											re.style.setProperty("gap", "4px"),
											re.style.setProperty("overflow", "hidden"),
											re.style.setProperty("text-overflow", "ellipsis"),
											re.style.setProperty("white-space", "nowrap"),
											(0, m.insert)(
												re,
												(0, E.createComponent)(v.$k$b, {
													get fileName() {
														return (0, g.$sc)(ee().relativeWorkspacePath);
													},
													get workspaceContextService() {
														return W.workspaceContextService;
													},
													get modelService() {
														return W.modelService;
													},
													get languageService() {
														return W.languageService;
													},
												}),
												null,
											),
											(0, m.insert)(
												re,
												() => (0, g.$sc)(ee().relativeWorkspacePath),
												null,
											),
											(0, d.effect)(
												(le) => {
													const oe = X().top + "px",
														ae = X().right + "px",
														pe = ne * ie().length + "px";
													return (
														oe !== le._v$10 &&
															((le._v$10 = oe) != null
																? _.style.setProperty("top", oe)
																: _.style.removeProperty("top")),
														ae !== le._v$11 &&
															((le._v$11 = ae) != null
																? _.style.setProperty("right", ae)
																: _.style.removeProperty("right")),
														pe !== le._v$12 &&
															((le._v$12 = pe) != null
																? se.style.setProperty("margin-left", pe)
																: se.style.removeProperty("margin-left")),
														le
													);
												},
												{ _v$10: void 0, _v$11: void 0, _v$12: void 0 },
											),
											_
										);
									})(),
							}),
							(0, E.createComponent)(c.Show, {
								get when() {
									return V();
								},
								children: (ee) =>
									(() => {
										const _ = A();
										return (
											_.style.setProperty("width", "450px"),
											_.style.setProperty("border-radius", "2px"),
											_.style.setProperty("position", "absolute"),
											(0, m.insert)(_, () => (0, $.$qac)(ee(), W)),
											(0, d.effect)(
												(te) => {
													const Q = X().top + "px",
														Z = X().right + "px";
													return (
														Q !== te._v$16 &&
															((te._v$16 = Q) != null
																? _.style.setProperty("top", Q)
																: _.style.removeProperty("top")),
														Z !== te._v$17 &&
															((te._v$17 = Z) != null
																? _.style.setProperty("right", Z)
																: _.style.removeProperty("right")),
														te
													);
												},
												{ _v$16: void 0, _v$17: void 0 },
											),
											_
										);
									})(),
							}),
						];
					};
				function U(F) {
					const x = (0, l.$odc)(),
						[H] = (0, u.useLexicalComposerContext)(),
						[q, V] = (0, c.createSignal)(null),
						G = {
							...I.$w_b,
							ghostText: () => "",
							isLongContextMode: !1,
							insertTextSearch: () => {},
							selectedTextSearches: [],
							supportsGit: !1,
							supportsCommitNotes: !1,
							supportsWeb: !1,
							supportsFolderSelections: !1,
							supportsLint: !1,
							supportsCodebase: !1,
							supportsLink: !1,
							recentFiles: new Set(),
							setGhostText: () => {},
							showErrorMessage: () => {},
						},
						K = {
							queryString: q,
							justClickedIntoMenu: () => !1,
							mode: () => I.TypeaheadOptionType.file,
							props: G,
							vsContext: x,
						},
						{ fileOptions: J } = (0, S.$9_b)(K),
						[W, X] = (0, c.createSignal)(!1),
						Y = (0, c.createMemo)(() =>
							W() ? [...J()].sort((te, Q) => Q.score - te.score) : [],
						),
						ie = (te) => {
							const Q = (0, T.$jac)(te),
								Z = (0, T.$mac)(te, H),
								se = (0, T.$kac)(te),
								re = se && !Z && !Q ? se : null;
							return X(re !== null), re;
						},
						ne = H.registerCommand(
							h.KEY_ESCAPE_COMMAND,
							(te) => (W() && Y().length > 0 ? (X(!1), !0) : !1),
							h.COMMAND_PRIORITY_CRITICAL,
						);
					(0, c.onCleanup)(() => {
						ne();
					});
					const ee = (te, Q, Z) => {
							Q && (Q.select(), Q.remove()), Z(), _(te);
						},
						_ = async (te) => {
							const Q = await (0, $.$rac)(te, x);
							if (Q.type === f.SelectionType.File) {
								const Z = { ...Q.selectionWithoutUuid, collapseByDefault: !1 };
								F.addFile && F.addFile(o.URI.revive(Z.uri));
							}
						};
					return (0, E.createComponent)(a.LexicalTypeaheadMenuPlugin, {
						onQueryChange: V,
						onSelectOption: ee,
						triggerFn: ie,
						get options() {
							return Y();
						},
						anchorClassName: "lookahead-anchor-element",
						menuRenderFn: z,
						get attachToElement() {
							return x.portalElement;
						},
					});
				}
				const z = (F) => {
					let x;
					const [H, q] = (0, c.createSignal)(null);
					return (
						(0, c.createEffect)(() => {
							q(F.selectedIndex === null ? null : F.options[F.selectedIndex]);
						}),
						(0, E.createComponent)(y.$q_b, {
							get show() {
								return F.options.length > 0;
							},
							get anchorElementRef() {
								return F.anchorElementRef;
							},
							get children() {
								return [
									(0, E.createComponent)(c.Show, {
										get when() {
											return H();
										},
										children: (V) =>
											(0, E.createComponent)(B, {
												get selectedOption() {
													return V();
												},
												get selectedIndex() {
													return F.selectedIndex ?? 0;
												},
												optionsListRef: x,
											}),
									}),
									(() => {
										const V = R(),
											G = x;
										return (
											typeof G == "function" ? (0, r.use)(G, V) : (x = V),
											(0, m.insert)(
												V,
												(0, E.createComponent)(c.For, {
													get each() {
														return F.options;
													},
													children: (K, J) =>
														(0, E.createComponent)(O, {
															get index() {
																return J();
															},
															get isSelected() {
																return F.selectedIndex === J();
															},
															onClick: () => {
																F.setHighlightedIndex(J()),
																	F.selectOptionAndCleanUp(K);
															},
															onMouseEnter: () => {
																F.setHighlightedIndex(J());
															},
															option: K,
														}),
												}),
											),
											V
										);
									})(),
								];
							},
						})
					);
				};
			},
		)
