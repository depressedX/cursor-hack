define(
		de[4232],
		he([
			1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 13, 14, 26, 364, 428, 484, 1372, 36, 156,
			1373, 1708, 126, 196, 41, 74, 311, 160, 135, 177, 693, 246, 242, 19, 694,
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
			L,
			D,
			M,
			N,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$H$b = void 0),
				(p = xi(p));
			const A = (0, t.template)("<div><div></div>Ask"),
				R = (0, t.template)("<div><div>"),
				O = (0, t.template)("<div><div></div>Run"),
				B = (0, t.template)(
					'<div class="composer-markdown-codeblock-header"><div>',
				),
				U = (0, t.template)("<div>"),
				z = (0, t.template)("<span>"),
				F = (0, t.template)("<span><span>"),
				x = 12;
			function H(G) {
				if (G === void 0) return "property";
				switch (G) {
					case v.SymbolKind.Method:
						return "method";
					case v.SymbolKind.Function:
						return "function";
					case v.SymbolKind.Constructor:
						return "constructor";
					case v.SymbolKind.Field:
						return "field";
					case v.SymbolKind.Variable:
						return "variable";
					case v.SymbolKind.Class:
						return "class";
					case v.SymbolKind.Struct:
						return "struct";
					case v.SymbolKind.Interface:
						return "interface";
					case v.SymbolKind.Module:
						return "module";
					case v.SymbolKind.Property:
						return "property";
					case v.SymbolKind.Event:
						return "event";
					case v.SymbolKind.Operator:
						return "operator";
					case v.SymbolKind.Constant:
						return "constant";
					case v.SymbolKind.Enum:
						return "enum";
					case v.SymbolKind.EnumMember:
						return "enum-member";
					case v.SymbolKind.File:
						return "file";
					default:
						return "property";
				}
			}
			function q(G, K, J) {
				const W = /```[\w-]*(?::[\w\/.]+)?\n[\s\S]*?```/g;
				let X = 0,
					Y = G;
				const ie = (ne) => {
					if (X === K) {
						const [ee, ..._] = ne.split(`
`),
							te = ee.slice(3).trim(),
							Q = te ? `\`\`\`${te}:${J}` : `\`\`\`${J}`;
						return (
							X++,
							[Q, ..._].join(`
`)
						);
					} else return X++, ne;
				};
				return (Y = Y.replace(W, ie)), Y;
			}
			const V = (G) => {
				const K = (0, o.$odc)(),
					{ composerDataService: J, composerService: W } = K,
					[X, Y] = (0, u.createSignal)(!0),
					[ie, ne, ee] = (0, c.$A0b)(),
					[_, te] = (0, u.createSignal)(!1),
					Q = (0, u.createMemo)(() => G.bubbleId),
					{ currentComposer: Z, composerDataHandle: se } = (0,
					P.useComposerDataHandle)(
						(0, u.createMemo)(() => G.composerDataHandler()),
					),
					re = (0, u.createMemo)(() => Z().composerId),
					le = (0, u.createMemo)(() => {
						const Re = Q(),
							Ve = J.getComposerBubble(re(), Re)?.codeBlocks?.find(
								(Ze) => Ze.codeBlockIdx === G.codeBlockIdx,
							);
						if (!(!Ve || !Ve.uri))
							return J.getComposerCodeBlock(se(), Ve.uri, Ve.version);
					}),
					oe = async (Re, je) =>
						!G.slashEditFileUri && !le()
							? []
							: K.applyToFileActionsService.getImportantSymbolsDefinedInCodeblockThatExistInURICanThrowIfExtHostIsNotReady(
									le()?.uri ?? G.slashEditFileUri,
									Re.getValue(),
								),
					[ae, pe] = (0, b.$r$b)({
						getModel: G.getModelOfCodeBlock,
						initialValue: [],
						updateFunc: oe,
						debounceTime: 1e3,
					}),
					$e = (0, u.createMemo)(() => J.getComposerData(re())),
					[ye, ue] = (0, u.createSignal)(!1);
				(0, u.createEffect)(() => {
					G.slashEditFileUri &&
						K.fileService.exists(G.slashEditFileUri).then((Re) => {
							ue(!Re);
						});
				});
				const fe = (0, D.$F$b)(),
					me = (0, u.createMemo)(() => {
						const Re = fe();
						if (!Re) {
							const je =
								K.recentFilesTrackerService.getRecentlyViewedFiles(1)[0];
							if (je) return je.uri;
						}
						return Re;
					}),
					ve = (0, u.createMemo)(() => {
						const Re = le(),
							je = [];
						if (Re || G.slashEditFileUri) {
							const et = Re?.uri ?? G.slashEditFileUri;
							if (et)
								if (ye()) {
									je.push({ uri: et });
									const rt = me();
									return rt && je.push({ uri: rt }), je;
								} else {
									je.push({ uri: et });
									const rt = ae();
									return (
										rt.length > 0 &&
											je.push(...rt.map((ft) => ({ uri: et, symbol: ft }))),
										je
									);
								}
						} else {
							const et = me();
							et && je.push({ uri: et });
						}
						const Ve = new Set();
						return je.filter((et) => {
							const rt = et.uri.toString();
							return Ve.has(rt) ? !1 : (Ve.add(rt), !0);
						});
					}),
					ge = (0, u.createMemo)(() => {
						const Re = re(),
							je = G.bubbleId,
							Ve = le(),
							Ze = G.codeBlockIdx,
							et = G.languageId,
							rt = G.resetCodeBlockIndex,
							ft = G.getEditorOfCodeBlock,
							bt = G.slashEditFileUri;
						return (nt) => {
							(async () => {
								const lt = nt.uri;
								if (nt.range) {
									if (!ye() || lt.toString() !== bt?.toString()) {
										const Rt = (0, $.$8rb)(lt, {
											startLineNumber: nt.range.startLineNumber || 1,
											startColumn: nt.range.startColumn || 1,
											endLineNumber: nt.range.endLineNumber || 1,
											endColumn: nt.range.endColumn || 1,
										});
										K.openerService?.open(Rt);
									}
								} else {
									const Rt = K.editorService.findEditors(lt);
									if (Rt.length > 0) {
										const Nt = K.editorGroupService.getGroup(Rt[0].groupId);
										K.editorService.openEditor(Rt[0].editor, Nt);
									} else await K.openerService?.open(lt);
								}
								if (Ve) {
									let Rt;
									nt.range &&
										(Rt = new y.$rL(
											nt.range.startLineNumber,
											nt.range.endLineNumber + 1,
										)),
										W.applyCachedCodeBlock(Re, lt, Ve.version, { range: Rt });
									return;
								}
								const ct = W.registerNewCodeBlock(
									Re,
									lt,
									ft().getModel().getValue(),
									Ze,
									{ languageId: et, bubbleId: je },
								);
								W.runFastApplyOnCodeBlock(Re, ct);
								const gt = K.workspaceContextService.asRelativePath(lt);
								await new Promise((Rt) => setTimeout(Rt, 100));
								let ht =
									$e().conversation.find((Rt) => Rt.bubbleId === je)?.text ??
									"";
								bt && lt.toString() !== bt.toString()
									? (ht = (0, L.replaceUriInCodeBlock)(ht, Ze, gt))
									: bt
										? J.updateComposerDataSetStore(Re, (Rt) =>
												Rt(
													"conversation",
													(Nt) => Nt.bubbleId === je,
													"text",
													ht + " ",
												),
											)
										: (ht = q(ht, Ze, gt)),
									J.updateComposerDataSetStore(Re, (Rt) =>
										Rt("conversation", (Nt) => Nt.bubbleId === je, "text", ht),
									);
								for (
									let Rt =
										$e().conversation.findIndex((Nt) => Nt.bubbleId === je) + 1;
									Rt < $e().conversation.length;
									Rt++
								)
									if (
										$e().conversation[Rt].type ===
										l.ConversationMessage_MessageType.AI
									) {
										const Nt = $e().conversation[Rt].text;
										J.updateComposerDataSetStore(Re, (jt) =>
											jt(
												"conversation",
												(ti, kt) => kt === Rt,
												"text",
												(ti) => ti + " ",
											),
										),
											J.updateComposerDataSetStore(Re, (jt) =>
												jt("conversation", (ti, kt) => kt === Rt, "text", Nt),
											);
									}
							})();
						};
					}),
					be = (0, u.createMemo)(() => {
						const Re = $e().conversation.length - 1,
							je =
								$e().status === "generating" &&
								$e().conversation[Re].bubbleId === Q(),
							Ve = ve().length > 0;
						return je || !Ve || G.disableApply;
					}),
					Ce = () => {
						const Re = G.getModelOfCodeBlock().getValue();
						K.clipboardService.writeText(Re),
							Y(!1),
							setTimeout(() => Y(!0), 2e3);
					},
					Le = {
						display: "flex",
						"align-items": "center",
						"justify-content": "center",
						gap: "2px",
						padding: "1px 4px",
						"line-height": "125%",
						background: "var(--vscode-editor-background)",
						color: "var(--vscode-input-placeholderForeground)",
						border: "1px solid var(--vscode-commandCenter-inactiveBorder)",
						"border-radius": "2px",
						"font-size": "11px",
						cursor: "pointer",
						"white-space": "nowrap",
						transition: "background-color 0.2s",
						"font-weight": "400",
						position: "relative",
						"user-select": "none",
					},
					Fe = {
						"font-size": "11px",
						color: "var(--vscode-input-placeholderForeground)",
					},
					Oe = async () => {
						try {
							const je = G.getModelOfCodeBlock().getValue();
							await (0, s.$o$b)(K, je, G.cwd, G.commandLanguage);
						} catch {}
					},
					xe = (Re) => {
						if (!Re) return;
						const je = Re.closest(".markdown-section"),
							Ve = je?.getAttribute("data-markdown-raw"),
							Ze = parseInt(je?.getAttribute("data-section-index") ?? "");
						!Ve ||
							isNaN(Ze) ||
							(K.composerService.addContextToLastFocused({
								composerId: re(),
								contextType: "quotes",
								value: { bubbleId: Q(), sectionIndex: Ze, markdown: Ve },
							}),
							K.composerService.focus(re()));
					},
					{ showHover: He, hideHover: Ke } = (0, S.useComposerHoverTooltip)({
						delay: 500,
						position: I.HoverPosition.LEFT,
					}),
					[Je, Te] = (0, u.createSignal)(null),
					[Ee, Ie] = (0, u.createSignal)(0);
				(0, u.createEffect)(() => {
					const Re = ve();
					Ie(Je()?.clientHeight ?? 0);
				});
				const Be = (0, n.$b$b)(),
					Se = (0, u.createMemo)(() => {
						const Re = ve();
						return Re.length === 1 ? Re[0] : null;
					}),
					{ showHover: ke, hideHover: Ue } = (0, N.$G$b)(),
					qe = (0, u.createMemo)(() => {
						const Re = Se();
						if (Re) {
							const je = (0, M.$kh)(Re.uri);
							return je.length > x
								? `Apply to ${je.slice(0, x)}...`
								: `Apply to ${je}`;
						}
						return "Apply";
					}),
					Ae = async (Re) => {
						Re.stopPropagation();
						const je = Se();
						if (je) {
							ge()(je);
							return;
						}
						const Ve = Re.currentTarget.getBoundingClientRect();
						ne({ x: Ve.width, y: Ve.height + 2 });
					};
				let Me;
				const De = (0, k.$A$b)(() => Me);
				return (() => {
					const Re = B(),
						je = Re.firstChild;
					Re.addEventListener("mouseleave", () => te(!1)),
						Re.addEventListener("mouseenter", () => te(!0));
					const Ve = Me;
					return (
						typeof Ve == "function" ? (0, r.use)(Ve, Re) : (Me = Re),
						Re.style.setProperty("position", "relative"),
						Re.style.setProperty("width", "100%"),
						je.style.setProperty("position", "absolute"),
						je.style.setProperty("transform", "translateY(calc(-50%))"),
						je.style.setProperty("top", "0"),
						je.style.setProperty("right", "4px"),
						je.style.setProperty("z-index", "303"),
						je.style.setProperty("display", "flex"),
						je.style.setProperty("justify-content", "right"),
						je.style.setProperty("flex-direction", "row"),
						je.style.setProperty("gap", "4px"),
						(0, w.insert)(
							je,
							(0, E.createComponent)(u.Show, {
								get when() {
									return De().width > 300;
								},
								get children() {
									const Ze = A(),
										et = Ze.firstChild;
									return (
										Ze.addEventListener("click", (rt) => xe(rt.currentTarget)),
										(0, m.style)(Ze, Le),
										(0, m.style)(et, Fe),
										(0, d.effect)(() =>
											(0, C.className)(
												et,
												h.ThemeIcon.asClassName(a.$ak.reply),
											),
										),
										Ze
									);
								},
							}),
							null,
						),
						(0, w.insert)(
							je,
							(0, E.createComponent)(u.Show, {
								get when() {
									return De().width > 200;
								},
								get children() {
									const Ze = R(),
										et = Ze.firstChild;
									return (
										Ze.addEventListener("click", Ce),
										(0, m.style)(Ze, Le),
										(0, m.style)(et, Fe),
										(0, w.insert)(Ze, () => (X() ? "Copy" : "Copied"), null),
										(0, d.effect)(() =>
											(0, C.className)(
												et,
												X()
													? h.ThemeIcon.asClassName(a.$ak.copy)
													: h.ThemeIcon.asClassName(a.$ak.check),
											),
										),
										Ze
									);
								},
							}),
							null,
						),
						(0, w.insert)(
							je,
							(0, E.createComponent)(u.Show, {
								get when() {
									return !be();
								},
								get children() {
									return (0, E.createComponent)(u.Show, {
										get when() {
											return !Se();
										},
										get fallback() {
											return (() => {
												const Ze = R(),
													et = Ze.firstChild;
												return (
													(0, i.addEventListener)(Ze, "mouseleave", Ue),
													Ze.addEventListener("mouseenter", (rt) => {
														const ft = Se();
														ft &&
															(0, M.$kh)(ft.uri).length > x &&
															ke(rt, (0, M.$kh)(ft.uri));
													}),
													Ze.addEventListener("click", Ae),
													(0, m.style)(Ze, Le),
													(0, m.style)(et, Fe),
													(0, w.insert)(Ze, qe, null),
													(0, d.effect)(() =>
														(0, C.className)(
															et,
															h.ThemeIcon.asClassName(a.$ak.listFilter),
														),
													),
													Ze
												);
											})();
										},
										get children() {
											const Ze = R(),
												et = Ze.firstChild;
											return (
												Ze.addEventListener("click", Ae),
												(0, m.style)(Ze, Le),
												(0, m.style)(et, Fe),
												(0, w.insert)(Ze, qe, null),
												(0, w.insert)(
													Ze,
													(0, E.createComponent)(u.Show, {
														get when() {
															return ie();
														},
														children: (rt) =>
															(0, E.createComponent)(g.Menu, {
																isRelative: !0,
																width: "auto",
																get position() {
																	return rt();
																},
																close: ee,
																get reactiveCloser() {
																	return K.reactiveStorageService
																		.nonPersistentStorage
																		.forceChatDropdownRerender;
																},
																anchor: "top-right",
																style: {
																	"background-color":
																		"var(--vscode-editor-background)",
																	border:
																		"1px solid var(--vscode-commandCenter-inactiveBorder)",
																	"border-radius": "2px",
																	overflow: "hidden",
																	"z-index": 1e3,
																	"max-width": "240px",
																	"font-size": "11px",
																	padding: "0px",
																},
																get children() {
																	return (0, E.createComponent)(T.$w0b, {
																		get style() {
																			return {
																				height: Math.min(120, Ee()) + "px",
																			};
																		},
																		contentStyle: {
																			display: "flex",
																			"flex-direction": "column",
																		},
																		innerContainerStyle: {
																			"min-height": "unset",
																		},
																		scrollingDirection: "vertical",
																		nonReactiveElementOptions: {
																			alwaysConsumeMouseWheel: !0,
																		},
																		get children() {
																			const ft = U();
																			return (
																				(0, r.use)(Te, ft),
																				ft.style.setProperty("display", "flex"),
																				ft.style.setProperty(
																					"flex-direction",
																					"column",
																				),
																				ft.style.setProperty("gap", "2px"),
																				ft.style.setProperty("padding", "2px"),
																				ft.style.setProperty(
																					"box-sizing",
																					"border-box",
																				),
																				(0, w.insert)(
																					ft,
																					(0, E.createComponent)(u.For, {
																						get each() {
																							return ve();
																						},
																						children: (bt) => {
																							const nt = (0, u.createMemo)(() =>
																									K.workspaceContextService.asRelativePath(
																										bt.uri,
																									),
																								),
																								lt = bt.symbol
																									? ` (${bt.symbol.name})`
																									: "";
																							return (0, E.createComponent)(
																								p.default,
																								{
																									style: {
																										"text-overflow": "ellipsis",
																										"white-space": "nowrap",
																										overflow: "hidden",
																										padding: "2px 0px",
																										"padding-left": "1px",
																										"padding-right": "3px",
																										"border-radius": "2px",
																										cursor: "pointer",
																										display: "flex",
																										"align-items": "center",
																										gap: "4px",
																									},
																									onClick: () => {
																										ge()({
																											uri: bt.uri,
																											range: bt.symbol?.range,
																										}),
																											ee();
																									},
																									onMouseEnter: (ct) =>
																										He(
																											ct,
																											nt() +
																												(bt.symbol
																													? ` (${bt.symbol.name})`
																													: ""),
																										),
																									onMouseLeave: Ke,
																									get children() {
																										return [
																											(0, E.createComponent)(
																												u.Show,
																												{
																													get when() {
																														return Be();
																													},
																													get children() {
																														const ct = z();
																														return (
																															ct.style.setProperty(
																																"margin-right",
																																"-4px",
																															),
																															ct.style.setProperty(
																																"scale",
																																"0.8",
																															),
																															ct.style.setProperty(
																																"height",
																																"14px",
																															),
																															ct.style.setProperty(
																																"display",
																																"flex",
																															),
																															ct.style.setProperty(
																																"align-items",
																																"center",
																															),
																															(0, w.insert)(
																																ct,
																																(0,
																																E.createComponent)(
																																	u.Show,
																																	{
																																		get when() {
																																			return bt.symbol;
																																		},
																																		get fallback() {
																																			return (0,
																																			E.createComponent)(
																																				f.$k$b,
																																				{
																																					get fileName() {
																																						return nt();
																																					},
																																					get workspaceContextService() {
																																						return K.workspaceContextService;
																																					},
																																					get modelService() {
																																						return K.modelService;
																																					},
																																					get languageService() {
																																						return K.languageService;
																																					},
																																				},
																																			);
																																		},
																																		get children() {
																																			const gt =
																																				U();
																																			return (
																																				gt.style.setProperty(
																																					"font-size",
																																					"14px",
																																				),
																																				gt.style.setProperty(
																																					"margin-left",
																																					"2px",
																																				),
																																				gt.style.setProperty(
																																					"margin-right",
																																					"4px",
																																				),
																																				(0,
																																				d.effect)(
																																					() =>
																																						(0,
																																						C.className)(
																																							gt,
																																							`codicon codicon-symbol-${H(bt.symbol?.kind)}`,
																																						),
																																				),
																																				gt
																																			);
																																		},
																																	},
																																),
																															),
																															ct
																														);
																													},
																												},
																											),
																											(() => {
																												const ct = F(),
																													gt = ct.firstChild;
																												return (
																													ct.style.setProperty(
																														"text-overflow",
																														"ellipsis",
																													),
																													ct.style.setProperty(
																														"overflow",
																														"hidden",
																													),
																													ct.style.setProperty(
																														"white-space",
																														"nowrap",
																													),
																													ct.style.setProperty(
																														"direction",
																														"rtl",
																													),
																													gt.style.setProperty(
																														"direction",
																														"ltr",
																													),
																													gt.style.setProperty(
																														"unicode-bidi",
																														"embed",
																													),
																													(0, w.insert)(
																														gt,
																														() => nt() + lt,
																													),
																													ct
																												);
																											})(),
																										];
																									},
																								},
																							);
																						},
																					}),
																				),
																				ft
																			);
																		},
																	});
																},
															}),
													}),
													null,
												),
												(0, d.effect)(() =>
													(0, C.className)(
														et,
														h.ThemeIcon.asClassName(a.$ak.listFilter),
													),
												),
												Ze
											);
										},
									});
								},
							}),
							null,
						),
						(0, w.insert)(
							je,
							(0, E.createComponent)(u.Show, {
								get when() {
									return G.isCommand;
								},
								get children() {
									const Ze = O(),
										et = Ze.firstChild;
									return (
										Ze.addEventListener("click", Oe),
										(0, m.style)(Ze, Le),
										(0, m.style)(et, Fe),
										(0, d.effect)(() =>
											(0, C.className)(et, h.ThemeIcon.asClassName(a.$ak.play)),
										),
										Ze
									);
								},
							}),
							null,
						),
						(0, d.effect)(
							(Ze) => {
								const et = G.hasCustomRenderCodeBlock
										? "1px solid var(--vscode-commandCenter-inactiveBorder)"
										: "none",
									rt =
										_() || G.isMouseInCodeBlock() || ie()
											? "visible"
											: "hidden";
								return (
									et !== Ze._v$ &&
										((Ze._v$ = et) != null
											? Re.style.setProperty("border-top", et)
											: Re.style.removeProperty("border-top")),
									rt !== Ze._v$2 &&
										((Ze._v$2 = rt) != null
											? je.style.setProperty("visibility", rt)
											: je.style.removeProperty("visibility")),
									Ze
								);
							},
							{ _v$: void 0, _v$2: void 0 },
						),
						Re
					);
				})();
			};
			e.$H$b = V;
		},
	),
		