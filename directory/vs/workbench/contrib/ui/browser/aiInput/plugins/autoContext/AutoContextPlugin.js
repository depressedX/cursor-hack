define(
			de[4309],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 181, 756, 164, 13, 14, 26, 9, 36, 1069,
				310, 817, 156, 54, 134, 205, 354, 1382, 12, 299, 1973,
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
				T,
				P,
				k,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = K);
				const L = (0, t.template)('<span class="secondary-text">'),
					D = (0, t.template)("<span>View "),
					M = (0, t.template)("<i>"),
					N = (0, t.template)("<span>"),
					A = (0, t.template)(
						'<li tabindex="-1" role="option"><span></span><span class="text">',
					),
					R = (0, t.template)(
						'<div id="mention-selection-preview"><div><div><div></div><span>',
					),
					O = (0, t.template)("<div><span><span>"),
					B = (0, t.template)("<div>"),
					U = (0, t.template)('<div id="mention-selection-preview">'),
					z = (0, t.template)("<ul>"),
					F = 10,
					x = 10;
				function H(J, W) {
					return new b.$u_b(
						J.name,
						(0, r.createComponent)(l.$k$b, {
							get fileName() {
								return J.name;
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
						b.TypeaheadOptionType.file,
						J.score,
						{ uri: J.uri },
						void 0,
						J.secondaryText,
					);
				}
				const q = (J) => {
						const W = (0, c.createMemo)(() =>
								J.isSelected ? "item selected" : "item",
							),
							Y = (0, o.$odc)().themeService.getColorTheme(),
							ie = Y.getColor("menu.selectionBackground"),
							ne = Y.getColor("menu.selectionForeground"),
							ee = Y.getColor("menu.inactiveSelectionForeground"),
							_ = Y.getColor("editorOverviewRuler.bracketMatchForeground");
						return (() => {
							const te = A(),
								Q = te.firstChild,
								Z = Q.nextSibling;
							te.addEventListener("click", () => {
								J.onClick();
							}),
								te.addEventListener("mouseenter", () => {
									J.onMouseEnter();
								});
							const se = J.option.setRefElement;
							return (
								typeof se == "function"
									? (0, m.use)(se, te)
									: (J.option.setRefElement = te),
								Q.style.setProperty("display", "flex"),
								(0, d.insert)(Q, () => J.option.picture),
								(0, d.insert)(Z, () => J.option.name),
								(0, d.insert)(
									te,
									(0, r.createComponent)(c.Show, {
										get when() {
											return J.option.secondaryText;
										},
										get children() {
											const re = L();
											return (
												(0, d.insert)(re, () => J.option.secondaryText),
												(0, C.effect)(() =>
													(J.isSelected
														? (ee?.toString() ?? "")
														: (_?.toString() ?? "")) != null
														? re.style.setProperty(
																"color",
																J.isSelected
																	? (ee?.toString() ?? "")
																	: (_?.toString() ?? ""),
															)
														: re.style.removeProperty("color"),
												),
												re
											);
										},
									}),
									null,
								),
								(0, d.insert)(
									te,
									(0, r.createComponent)(c.Show, {
										get when() {
											return (
												J.option.type === b.TypeaheadOptionType.file &&
												J.isSelected
											);
										},
										get children() {
											const re = D(),
												le = re.firstChild;
											return (
												re.style.setProperty("margin-left", "auto"),
												re.style.setProperty("padding-left", "6px"),
												re.style.setProperty("justify-self", "flex-end"),
												re.style.setProperty("opacity", "0.7"),
												re.style.setProperty("font-size", "90%"),
												re.style.setProperty("flex-shrink", "0"),
												(0, d.insert)(
													re,
													T.$m ? "\u2325\u21B5" : "Alt+\u21B5",
													null,
												),
												(0, C.effect)(() =>
													(J.isSelected
														? (ee?.toString() ?? "")
														: (_?.toString() ?? "")) != null
														? re.style.setProperty(
																"color",
																J.isSelected
																	? (ee?.toString() ?? "")
																	: (_?.toString() ?? ""),
															)
														: re.style.removeProperty("color"),
												),
												re
											);
										},
									}),
									null,
								),
								(0, d.insert)(
									te,
									(0, r.createComponent)(c.Show, {
										get when() {
											return J.option.type === "heading";
										},
										get children() {
											const re = M();
											return (
												(0, C.effect)(() =>
													(0, E.className)(
														re,
														g.ThemeIcon.asClassName(n.$ak.arrowRight),
													),
												),
												re
											);
										},
									}),
									null,
								),
								(0, d.insert)(
									te,
									(0, r.createComponent)(c.Show, {
										get when() {
											return J.option.onSettingClick !== void 0;
										},
										get children() {
											const re = N();
											return (
												re.addEventListener("click", (le) => {
													le.stopPropagation(),
														J.option.onSettingClick &&
															J.option?.onSettingClick();
												}),
												re.style.setProperty("margin-left", "auto"),
												(0, C.effect)(() =>
													(0, E.className)(
														re,
														g.ThemeIcon.asClassName(n.$ak.settingsGear),
													),
												),
												re
											);
										},
									}),
									null,
								),
								(0, C.effect)(
									(re) => {
										const le = W(),
											oe = J.isSelected,
											ae = "typeahead-item-" + J.index,
											pe = {
												...(J.isSelected
													? {
															"background-color": ie?.toString() ?? "",
															color: ne?.toString() ?? "",
														}
													: {}),
												cursor:
													J.option.type === "staticheading"
														? "default"
														: "pointer",
											},
											$e = J.isSelected
												? (ee?.toString() ?? "")
												: (_?.toString() ?? ""),
											ye =
												(J.option.type === "heading" ||
													J.option.type === "staticheading",
												"0px");
										return (
											le !== re._v$ && (0, E.className)(te, (re._v$ = le)),
											oe !== re._v$2 &&
												(0, w.setAttribute)(
													te,
													"aria-selected",
													(re._v$2 = oe),
												),
											ae !== re._v$3 &&
												(0, w.setAttribute)(te, "id", (re._v$3 = ae)),
											(re._v$4 = (0, i.style)(te, pe, re._v$4)),
											$e !== re._v$5 &&
												((re._v$5 = $e) != null
													? Q.style.setProperty("color", $e)
													: Q.style.removeProperty("color")),
											ye !== re._v$6 &&
												((re._v$6 = ye) != null
													? Q.style.setProperty("margin-left", ye)
													: Q.style.removeProperty("margin-left")),
											re
										);
									},
									{
										_v$: void 0,
										_v$2: void 0,
										_v$3: void 0,
										_v$4: void 0,
										_v$5: void 0,
										_v$6: void 0,
									},
								),
								te
							);
						})();
					},
					V = (J) => {
						const [ie, ne] = (0, c.createSignal)(),
							[ee, _] = (0, c.createSignal)(),
							te = (0, o.$odc)();
						(0, c.createEffect)(async () => {
							if (J.selectedOption.type === "file") {
								ne(void 0);
								const oe = J.selectedOption.selectionPrecursor?.uri.fsPath;
								if (!oe) return;
								const ae =
									await te.everythingProviderService.provider?.runCommand(
										$.FileRetrievalActions.GetDirectory,
										{ fsPath: oe },
									);
								if (!ae) {
									_(void 0);
									return;
								}
								const pe = te.workspaceContextService.asRelativePath(
										p.URI.file(oe),
									),
									$e = (0, y.$sc)(pe),
									ye = pe.replace($e, "");
								_({
									basePath: ye,
									relativeWorkspacePath: pe,
									neighboringFiles: ae,
								});
								return;
							}
							_(void 0);
							const le = await (0, I.$rac)(J.selectedOption, te);
							if (
								le.type === v.SelectionType.Failure ||
								le.type === v.SelectionType.None ||
								le.type === v.SelectionType.Image ||
								le.type === v.SelectionType.Folder ||
								le.type === v.SelectionType.Docs ||
								J.selectedOption.type !== b.TypeaheadOptionType.code
							) {
								ne(void 0);
								return;
							}
							if (le.type === v.SelectionType.File) {
								const oe = await (0, S.$2fc)(
									te.textModelService,
									te.dataScrubbingService,
									le.selectionWithoutUuid,
								);
								ne(oe);
								return;
							}
							ne(le.selectionWithoutUuid);
						});
						const [Q, Z] = (0, c.createSignal)({
							top: J.selectedIndex * 24,
							right: -454,
						});
						(0, c.createEffect)(() => {
							const le = ee() ? 300 : 450;
							let oe = J.selectedIndex * 24,
								ae = -(le + 4);
							const pe = J.optionsListRef?.getBoundingClientRect();
							if (!pe) return;
							pe.right - ae > te.window.document.body.clientWidth &&
								(ae = pe.width + 4),
								Z({ top: oe, right: ae }),
								te.window.requestIdleCallback(() => {
									const ue = te.window.document
										.getElementById("mention-selection-preview")
										?.getBoundingClientRect();
									if (!ue) return;
									const me =
										pe.top +
										oe +
										ue.height -
										te.window.document.body.clientHeight;
									me > 0 && (oe -= me + 4), Z({ top: oe, right: ae });
								});
						}, [J.selectedIndex]);
						const se = (0, c.createMemo)(
								() =>
									ee()
										?.basePath.split("/")
										.filter((le) => !!le.trim()) ?? [],
							),
							re = 14;
						return [
							(0, r.createComponent)(c.Show, {
								get when() {
									return ee();
								},
								children: (le) =>
									(() => {
										const oe = R(),
											ae = oe.firstChild,
											pe = ae.firstChild,
											$e = pe.firstChild,
											ye = $e.nextSibling;
										return (
											oe.style.setProperty("width", "300px"),
											oe.style.setProperty("border-radius", "2px"),
											oe.style.setProperty("position", "absolute"),
											oe.style.setProperty("overflow", "hidden"),
											ae.style.setProperty(
												"background-color",
												"var(--vscode-editor-background)",
											),
											ae.style.setProperty(
												"border",
												"1px solid var(--vscode-commandCenter-inactiveBorder)",
											),
											ae.style.setProperty("border-radius", "2px"),
											ae.style.setProperty("display", "flex"),
											ae.style.setProperty("flex-direction", "column"),
											ae.style.setProperty("gap", "4px"),
											ae.style.setProperty("position", "relative"),
											ae.style.setProperty("overflow", "hidden"),
											ae.style.setProperty("padding", "0.5rem"),
											(0, d.insert)(
												ae,
												(0, r.createComponent)(c.For, {
													get each() {
														return se();
													},
													children: (ue, fe) =>
														(() => {
															const me = O(),
																ve = me.firstChild,
																ge = ve.firstChild;
															return (
																me.style.setProperty("display", "flex"),
																me.style.setProperty("align-items", "center"),
																me.style.setProperty("overflow", "hidden"),
																me.style.setProperty(
																	"text-overflow",
																	"ellipsis",
																),
																me.style.setProperty("white-space", "nowrap"),
																(0, d.insert)(
																	me,
																	(0, r.createComponent)(c.For, {
																		get each() {
																			return Array(fe());
																		},
																		children: (be) =>
																			(() => {
																				const Ce = B();
																				return (
																					Ce.style.setProperty(
																						"margin-left",
																						"14px",
																					),
																					Ce.style.setProperty(
																						"border-left",
																						"1px solid var(--vscode-commandCenter-inactiveBorder)",
																					),
																					Ce.style.setProperty(
																						"display",
																						"inline-block",
																					),
																					Ce
																				);
																			})(),
																	}),
																	ve,
																),
																ve.style.setProperty("display", "flex"),
																ve.style.setProperty("align-items", "center"),
																ve.style.setProperty("gap", "4px"),
																ve.style.setProperty("overflow", "hidden"),
																ve.style.setProperty(
																	"text-overflow",
																	"ellipsis",
																),
																ve.style.setProperty("white-space", "nowrap"),
																(0, d.insert)(ve, ue, null),
																(0, C.effect)(
																	(be) => {
																		const Ce =
																				fe() === se().length - 1 ? 1 : 0.5,
																			Le = "calc(100% - " + re * fe() + "px)",
																			Fe = g.ThemeIcon.asClassName(
																				n.$ak.folder,
																			);
																		return (
																			Ce !== be._v$10 &&
																				((be._v$10 = Ce) != null
																					? ve.style.setProperty("opacity", Ce)
																					: ve.style.removeProperty("opacity")),
																			Le !== be._v$11 &&
																				((be._v$11 = Le) != null
																					? ve.style.setProperty(
																							"max-width",
																							Le,
																						)
																					: ve.style.removeProperty(
																							"max-width",
																						)),
																			Fe !== be._v$12 &&
																				(0, E.className)(ge, (be._v$12 = Fe)),
																			be
																		);
																	},
																	{
																		_v$10: void 0,
																		_v$11: void 0,
																		_v$12: void 0,
																	},
																),
																me
															);
														})(),
												}),
												pe,
											),
											pe.style.setProperty("display", "flex"),
											pe.style.setProperty("align-items", "center"),
											pe.style.setProperty("overflow", "hidden"),
											pe.style.setProperty("text-overflow", "ellipsis"),
											pe.style.setProperty("white-space", "nowrap"),
											$e.style.setProperty(
												"border-left",
												"1px solid var(--vscode-commandCenter-inactiveBorder)",
											),
											$e.style.setProperty("display", "inline-block"),
											ye.style.setProperty("display", "flex"),
											ye.style.setProperty("align-items", "center"),
											ye.style.setProperty("gap", "4px"),
											ye.style.setProperty("overflow", "hidden"),
											ye.style.setProperty("text-overflow", "ellipsis"),
											ye.style.setProperty("white-space", "nowrap"),
											(0, d.insert)(
												ye,
												(0, r.createComponent)(l.$k$b, {
													get fileName() {
														return (0, y.$sc)(le().relativeWorkspacePath);
													},
													get workspaceContextService() {
														return te.workspaceContextService;
													},
													get modelService() {
														return te.modelService;
													},
													get languageService() {
														return te.languageService;
													},
												}),
												null,
											),
											(0, d.insert)(
												ye,
												() => (0, y.$sc)(le().relativeWorkspacePath),
												null,
											),
											(0, C.effect)(
												(ue) => {
													const fe = Q().top + "px",
														me = Q().right + "px",
														ve = re * se().length + "px";
													return (
														fe !== ue._v$7 &&
															((ue._v$7 = fe) != null
																? oe.style.setProperty("top", fe)
																: oe.style.removeProperty("top")),
														me !== ue._v$8 &&
															((ue._v$8 = me) != null
																? oe.style.setProperty("right", me)
																: oe.style.removeProperty("right")),
														ve !== ue._v$9 &&
															((ue._v$9 = ve) != null
																? $e.style.setProperty("margin-left", ve)
																: $e.style.removeProperty("margin-left")),
														ue
													);
												},
												{ _v$7: void 0, _v$8: void 0, _v$9: void 0 },
											),
											oe
										);
									})(),
							}),
							(0, r.createComponent)(c.Show, {
								get when() {
									return ie();
								},
								children: (le) =>
									(() => {
										const oe = U();
										return (
											oe.style.setProperty("width", "450px"),
											oe.style.setProperty("border-radius", "2px"),
											oe.style.setProperty("position", "absolute"),
											(0, d.insert)(oe, () => (0, I.$qac)(le(), te)),
											(0, C.effect)(
												(ae) => {
													const pe = Q().top + "px",
														$e = Q().right + "px";
													return (
														pe !== ae._v$13 &&
															((ae._v$13 = pe) != null
																? oe.style.setProperty("top", pe)
																: oe.style.removeProperty("top")),
														$e !== ae._v$14 &&
															((ae._v$14 = $e) != null
																? oe.style.setProperty("right", $e)
																: oe.style.removeProperty("right")),
														ae
													);
												},
												{ _v$13: void 0, _v$14: void 0 },
											),
											oe
										);
									})(),
							}),
						];
					},
					G = (J) => {
						let W;
						const [X, Y] = (0, c.createSignal)(null);
						return (
							(0, c.createEffect)(() => {
								Y(J.selectedIndex === null ? null : J.options[J.selectedIndex]);
							}),
							(0, r.createComponent)(f.$q_b, {
								get show() {
									return J.options.length > 0;
								},
								get anchorElementRef() {
									return J.anchorElementRef;
								},
								get children() {
									return [
										(0, r.createComponent)(c.Show, {
											get when() {
												return X();
											},
											children: (ie) =>
												(0, r.createComponent)(V, {
													get selectedOption() {
														return ie();
													},
													get selectedIndex() {
														return J.selectedIndex ?? 0;
													},
													optionsListRef: W,
												}),
										}),
										(() => {
											const ie = z(),
												ne = W;
											return (
												typeof ne == "function" ? (0, m.use)(ne, ie) : (W = ie),
												ie.style.setProperty("list-style", "none"),
												ie.style.setProperty("margin", "0"),
												ie.style.setProperty("padding", "0"),
												(0, d.insert)(
													ie,
													(0, r.createComponent)(c.For, {
														get each() {
															return J.options;
														},
														children: (ee, _) =>
															(0, r.createComponent)(q, {
																get index() {
																	return _();
																},
																option: ee,
																get isSelected() {
																	return J.selectedIndex === _();
																},
																onClick: () => {
																	J.setHighlightedIndex(_()),
																		J.selectOptionAndCleanUp(ee);
																},
																onMouseEnter: () => J.setHighlightedIndex(_()),
															}),
													}),
												),
												ie
											);
										})(),
									];
								},
							})
						);
					};
				function K(J) {
					const W = (0, o.$odc)(),
						[X] = (0, u.useLexicalComposerContext)(),
						[Y, ie] = (0, c.createSignal)(null),
						[ne, ee] = (0, c.createSignal)(!1),
						[_, te] = (0, c.createSignal)(F),
						Q = (0, c.createMemo)(() => J.excludeFiles ?? []),
						{ options: Z, isLoading: se } = (0, k.$5_b)(Y, {
							resultsLimit: _,
							excludeFiles: Q,
							showLoadMore: !0,
							showLoading: !0,
							disabled: () => !ne(),
						});
					(0, c.createEffect)(() => {
						ne() || te(F);
					});
					const re = (oe, ae, pe, $e, ye) => {
							if (ye?.altKey && oe.selectionPrecursor?.uri) {
								const ue = oe.selectionPrecursor.uri,
									fe = W.workspaceContextService.resolveRelativePath(ue.path);
								(0, P.$0gc)({
									uri: fe,
									fileService: W.fileService,
									editorService: W.editorService,
									editorGroupsService: W.editorGroupService,
								});
								return;
							}
							if (oe.type === b.TypeaheadOptionType.heading && oe.isLoadMore) {
								te((ue) => ue + x);
								return;
							}
							ae && (ae.select(), ae.remove()),
								J.addFile &&
									oe.selectionPrecursor?.uri &&
									J.addFile(oe.selectionPrecursor.uri),
								pe();
						},
						le = X.registerCommand(
							h.KEY_ESCAPE_COMMAND,
							(oe) => (ne() && Z().length > 0 ? (ee(!1), !0) : !1),
							h.COMMAND_PRIORITY_CRITICAL,
						);
					return (
						(0, c.onCleanup)(() => {
							le();
						}),
						(0, r.createComponent)(a.LexicalTypeaheadMenuPlugin, {
							onQueryChange: ie,
							onSelectOption: re,
							triggerFn: (oe) => {
								const ae = (0, s.$jac)(oe),
									pe = (0, s.$mac)(oe, X),
									$e = (0, s.$lac)(oe),
									ye = $e && !pe && !ae ? $e : null;
								return ye ? (ee(!0), ye) : (ee(!1), null);
							},
							get options() {
								return Z();
							},
							anchorClassName: "lookahead-anchor-element",
							menuRenderFn: G,
							get attachToElement() {
								return W.portalElement;
							},
						})
					);
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	