define(
			de[4203],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 2, 14, 26, 205, 397, 135, 36, 140, 364,
				7, 794, 135, 907, 1141, 1142,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$C0b = R);
				const y = (0, t.template)(
						'<div class="aichat-history-search"><input type="text" placeholder="Search chats..." class="aichat-history-input">',
					),
					$ = (0, t.template)(
						'<div class="aichat-history-search-no-results">No chats found',
					),
					v = (0, t.template)('<div tabindex="0" class="previous-chats-list">'),
					S = (0, t.template)("<div>"),
					I = (0, t.template)('<div class="chat-timestamp">'),
					T = (0, t.template)("<span>"),
					P = (0, t.template)("<input autofocus>"),
					k = (0, t.template)(
						'<span class="aichat-chattabs-chat-subtitle"> New AI Project',
					),
					L = (0, t.template)("<div><span></span><span>"),
					D = (0, t.template)(
						'<div class="aichat-chattabs-item-container"><div class="aichat-chattabs-item">',
					),
					M = (0, t.template)('<span class="chat-title">'),
					N = (0, t.template)(
						'<div class="ai-chat-history-pane"><div class="ai-chat-history-header"><span>All Chats</span><div><span class="chat-button-secondary"><span>',
					),
					A = (0, t.template)('<div class="ai-chat-history-pane-wrapper">');
				function R(O) {
					const B = (0, r.useContext)(o.$ygc),
						U = (0, p.$odc)(),
						z = (0, r.createMemo)(
							() =>
								U.reactiveStorageService.workspaceUserPersistentStorage
									.aiPanePosition,
						),
						F = () => B.chatData.selectedTabId ?? B.chatData.tabs[0]?.tabId,
						x = (0, r.createMemo)(() => z() === c.AIPanePosition.SIDEBAR),
						[H, q] = (0, r.createSignal)(""),
						[V, G] = (0, r.createSignal)(void 0),
						[K, J] = (0, r.createSignal)(void 0),
						[W, X] = (0, r.createSignal)(-1),
						Y = (0, r.createMemo)(() =>
							[...B.chatData.tabs, ...B.chatData.codeInterpreterTabs].sort(
								(re, le) =>
									le.lastSendTime !== void 0 && re.lastSendTime !== void 0
										? le.lastSendTime - re.lastSendTime
										: le.lastSendTime !== void 0
											? 1
											: re.lastSendTime !== void 0
												? -1
												: 0,
							),
						),
						ie = (0, r.createMemo)(() => {
							const se = H().toLowerCase();
							return Y().filter((re) =>
								re.chatTitle?.toLowerCase().includes(se),
							);
						}),
						ne = (se) => {
							!U.aiChatService.historyVisible() ||
								z() === c.AIPanePosition.EDITOR ||
								(se.key === "Escape" &&
									(O.hideChatHistory(), U.aiChatService.focus()));
						};
					(0, r.createEffect)(() => {
						U.window.document.addEventListener("keydown", ne),
							(0, r.onCleanup)(() => {
								U.window.document.removeEventListener("keydown", ne);
							});
					});
					const ee = (se) => {
							let re, le;
							const oe = (0, l.$y0b)();
							let ae;
							(0, s.useAutoVerticalScroll)(
								oe,
								() => ae,
								() => `chat-${ie()[W()]?.tabId ?? ""}`,
								() => [W()],
								{ paddingToEdge: 12 },
							);
							const pe = (ye) => {
								if (ye.key === "ArrowUp")
									ye.preventDefault(),
										X((ue) => (ue - 1 + ie().length) % ie().length);
								else if (ye.key === "ArrowDown")
									ye.preventDefault(), X((ue) => (ue + 1) % ie().length);
								else if (ye.key === "Enter")
									if (V()) {
										if (K()?.trim() === "") return;
										ye.preventDefault(), Q(F(), K() ?? ""), G(void 0);
									} else {
										ye.preventDefault();
										const ue = W();
										ue !== -1 && _(ie()[ue].tabId);
									}
							};
							(0, r.createEffect)(() => {
								le &&
									(le.addEventListener("keydown", pe),
									(0, r.onCleanup)(() => {
										le?.removeEventListener("keydown", pe);
									}));
							});
							const $e = { value: void 0 };
							return (
								(0, r.onMount)(() => {
									re && (re.focus(), q(""));
								}),
								[
									(() => {
										const ye = y(),
											ue = ye.firstChild;
										se != null
											? ye.style.setProperty("padding-top", se)
											: ye.style.removeProperty("padding-top"),
											ue.addEventListener("keydown", (me) => {
												if (me.key === "Escape") {
													O.hideChatHistory(), U.aiChatService.focus();
													return;
												}
												if (me.key === "ArrowUp")
													me.preventDefault(),
														X((ve) => (ve - 1 + ie().length) % ie().length);
												else if (me.key === "ArrowDown")
													me.preventDefault(),
														X((ve) => (ve + 1) % ie().length);
												else if (me.key === "Enter") {
													me.preventDefault();
													const ve = W();
													ve !== -1 &&
														(_(ie()[ve].tabId),
														O.hideChatHistory(),
														U.aiChatService.focus());
												}
											}),
											ue.addEventListener("input", (me) =>
												q(me.currentTarget.value),
											);
										const fe = re;
										return (
											typeof fe == "function" ? (0, m.use)(fe, ue) : (re = ue),
											(0, d.effect)(() => (ue.value = H())),
											ye
										);
									})(),
									(() => {
										const ye = S(),
											ue = ae;
										return (
											typeof ue == "function" ? (0, m.use)(ue, ye) : (ae = ye),
											ye.style.setProperty("display", "flex"),
											ye.style.setProperty("overflow", "hidden"),
											ye.style.setProperty("position", "relative"),
											(0, E.insert)(
												ye,
												(0, C.createComponent)(g.$w0b, {
													scrollable: oe,
													innerContainerStyle: { display: "flex" },
													style: { width: "100%", height: "100%" },
													scrollingDirection: "vertical",
													get children() {
														const fe = v();
														return (
															(0, m.use)((me) => {
																le = me;
															}, fe),
															fe.style.setProperty("outline", "none"),
															fe.style.setProperty("width", "100%"),
															fe.style.setProperty("overflow-x", "hidden"),
															(0, E.insert)(
																fe,
																(0, C.createComponent)(r.Show, {
																	get when() {
																		return ie().length === 0;
																	},
																	get children() {
																		return $();
																	},
																}),
																null,
															),
															(0, E.insert)(
																fe,
																(0, C.createComponent)(u.For, {
																	get each() {
																		return ie();
																	},
																	children: (me, ve) => {
																		const ge = () =>
																				(0, n.$bgc)(
																					Y()[ve() - 1]?.lastSendTime ?? 0,
																				),
																			be = () =>
																				(0, n.$bgc)(me.lastSendTime ?? 0),
																			Ce = () => be() !== ge(),
																			[Le, Fe] = (0, r.createSignal)(!1);
																		return [
																			(0, C.createComponent)(r.Show, {
																				get when() {
																					return Ce();
																				},
																				get children() {
																					const Oe = I();
																					return (0, E.insert)(Oe, be), Oe;
																				},
																			}),
																			(() => {
																				const Oe = D(),
																					xe = Oe.firstChild;
																				return (
																					Oe.addEventListener(
																						"mouseleave",
																						() => Fe(!1),
																					),
																					Oe.addEventListener(
																						"mouseenter",
																						() => Fe(!0),
																					),
																					Oe.style.setProperty(
																						"position",
																						"relative",
																					),
																					xe.addEventListener(
																						"click",
																						async () => {
																							_(me.tabId),
																								z() ===
																									c.AIPanePosition.EDITOR &&
																									!U.aiChatService.chatVisible() &&
																									(await U.aiChatService.show()),
																								le?.focus();
																						},
																					),
																					xe.style.setProperty(
																						"height",
																						"26px",
																					),
																					xe.style.setProperty(
																						"box-sizing",
																						"border-box",
																					),
																					(0, E.insert)(
																						xe,
																						(0, C.createComponent)(r.Show, {
																							get when() {
																								return (
																									me.tabState ===
																									o.TabState.chat
																								);
																							},
																							get fallback() {
																								return (() => {
																									const He = T();
																									return (
																										(0, d.effect)(
																											(Ke) => {
																												const Je =
																														U.themeService
																															.getColorTheme()
																															.getColor(
																																"button.background",
																															)
																															?.toString() ??
																														"white",
																													Te =
																														h.ThemeIcon.asClassName(
																															a.$ak.home,
																														);
																												return (
																													Je !== Ke._v$6 &&
																														((Ke._v$6 = Je) !=
																														null
																															? He.style.setProperty(
																																	"color",
																																	Je,
																																)
																															: He.style.removeProperty(
																																	"color",
																																)),
																													Te !== Ke._v$7 &&
																														(0, w.className)(
																															He,
																															(Ke._v$7 = Te),
																														),
																													Ke
																												);
																											},
																											{
																												_v$6: void 0,
																												_v$7: void 0,
																											},
																										),
																										He
																									);
																								})();
																							},
																							get children() {
																								const He = T();
																								return (
																									(0, d.effect)(() =>
																										(0, w.className)(
																											He,
																											h.ThemeIcon.asClassName(
																												a.$ak.comment,
																											),
																										),
																									),
																									He
																								);
																							},
																						}),
																						null,
																					),
																					(0, E.insert)(
																						xe,
																						(0, C.createComponent)(r.Show, {
																							get when() {
																								return V() === (me.tabId ?? "");
																							},
																							get fallback() {
																								return (() => {
																									const He = M();
																									return (
																										(0, E.insert)(
																											He,
																											() =>
																												me.chatTitle ||
																												"New chat",
																										),
																										(0, d.effect)(() =>
																											(me.chatTitle
																												? 1
																												: 0.6) != null
																												? He.style.setProperty(
																														"opacity",
																														me.chatTitle
																															? 1
																															: 0.6,
																													)
																												: He.style.removeProperty(
																														"opacity",
																													),
																										),
																										He
																									);
																								})();
																							},
																							get children() {
																								const He = P();
																								return (
																									He.addEventListener(
																										"keydown",
																										(Ke) => {
																											Ke.key === "Enter" &&
																												Ke.isComposing === !1 &&
																												Ke.currentTarget.blur();
																										},
																									),
																									He.addEventListener(
																										"blur",
																										(Ke) => {
																											Ke.currentTarget.value.trim() !==
																												"" &&
																												(Q(
																													me.tabId,
																													Ke.currentTarget.value.trim(),
																												),
																												G(void 0));
																										},
																									),
																									He.addEventListener(
																										"click",
																										(Ke) => {
																											Ke.stopPropagation();
																										},
																									),
																									He.addEventListener(
																										"focus",
																										(Ke) => {
																											Ke.currentTarget.select();
																										},
																									),
																									He.addEventListener(
																										"input",
																										(Ke) => {
																											J(Ke.currentTarget.value);
																										},
																									),
																									(0, m.use)(
																										(Ke) => ($e.value = Ke),
																										He,
																									),
																									He.style.setProperty(
																										"background",
																										"transparent",
																									),
																									He.style.setProperty(
																										"width",
																										"100%",
																									),
																									He.style.setProperty(
																										"outline",
																										"none",
																									),
																									He.style.setProperty(
																										"border",
																										"none",
																									),
																									He.style.setProperty(
																										"padding",
																										"0px",
																									),
																									(0, d.effect)(
																										() =>
																											(He.value =
																												K() ?? me.chatTitle),
																									),
																									He
																								);
																							},
																						}),
																						null,
																					),
																					(0, E.insert)(
																						xe,
																						(0, C.createComponent)(r.Show, {
																							get when() {
																								return (
																									me.tabState ===
																									o.TabState.codeInterpreter
																								);
																							},
																							get children() {
																								const He = k();
																								return (
																									He.style.setProperty(
																										"color",
																										"var(--vscode-description-foreground)",
																									),
																									He
																								);
																							},
																						}),
																						null,
																					),
																					(0, E.insert)(
																						xe,
																						(0, C.createComponent)(r.Show, {
																							get when() {
																								return Le();
																							},
																							get children() {
																								const He = L(),
																									Ke = He.firstChild,
																									Je = Ke.nextSibling;
																								return (
																									He.style.setProperty(
																										"display",
																										"flex",
																									),
																									He.style.setProperty(
																										"gap",
																										"4px",
																									),
																									Ke.addEventListener(
																										"click",
																										(Te) => {
																											Te.stopPropagation(),
																												G(me.tabId),
																												J(me.chatTitle ?? ""),
																												setTimeout(() => {
																													$e.value?.focus();
																												}, 100);
																										},
																									),
																									Ke.style.setProperty(
																										"margin-left",
																										"auto",
																									),
																									Ke.style.setProperty(
																										"font-size",
																										"14px",
																									),
																									Ke.style.setProperty(
																										"padding",
																										"2px",
																									),
																									Je.addEventListener(
																										"click",
																										(Te) => {
																											Te.stopPropagation(),
																												te(me.tabId);
																										},
																									),
																									Je.style.setProperty(
																										"margin-left",
																										"auto",
																									),
																									Je.style.setProperty(
																										"font-size",
																										"14px",
																									),
																									Je.style.setProperty(
																										"padding",
																										"2px",
																									),
																									(0, d.effect)(
																										(Te) => {
																											const Ee = [
																													h.ThemeIcon.asClassName(
																														a.$ak.edit,
																													),
																													"aichat-chattabs-remove-chat-icon",
																													"chat-button-secondary",
																												].join(" "),
																												Ie = [
																													h.ThemeIcon.asClassName(
																														a.$ak.trash,
																													),
																													"aichat-chattabs-remove-chat-icon",
																													"chat-button-secondary",
																												].join(" ");
																											return (
																												Ee !== Te._v$ &&
																													(0, w.className)(
																														Ke,
																														(Te._v$ = Ee),
																													),
																												Ie !== Te._v$2 &&
																													(0, w.className)(
																														Je,
																														(Te._v$2 = Ie),
																													),
																												Te
																											);
																										},
																										{
																											_v$: void 0,
																											_v$2: void 0,
																										},
																									),
																									He
																								);
																							},
																						}),
																						null,
																					),
																					(0, d.effect)(
																						(He) => {
																							const Ke = `chat-${me.tabId}`,
																								Je = me.tabId === F(),
																								Te = ve() === W();
																							return (
																								Ke !== He._v$3 &&
																									(0, i.setAttribute)(
																										Oe,
																										"id",
																										(He._v$3 = Ke),
																									),
																								Je !== He._v$4 &&
																									xe.classList.toggle(
																										"selected",
																										(He._v$4 = Je),
																									),
																								Te !== He._v$5 &&
																									xe.classList.toggle(
																										"highlighted",
																										(He._v$5 = Te),
																									),
																								He
																							);
																						},
																						{
																							_v$3: void 0,
																							_v$4: void 0,
																							_v$5: void 0,
																						},
																					),
																					Oe
																				);
																			})(),
																		];
																	},
																}),
																null,
															),
															fe
														);
													},
												}),
											),
											(0, d.effect)(() =>
												(x() ? "50vh" : "100%") != null
													? ye.style.setProperty(
															"height",
															x() ? "50vh" : "100%",
														)
													: ye.style.removeProperty("height"),
											),
											ye
										);
									})(),
								]
							);
						},
						_ = (se) => {
							O.persistSelectedChat(!0), B.setChatData("selectedTabId", se);
						},
						te = (se) => {
							B.chatService.deleteTab(se);
						},
						Q = (se, re) => {
							if (
								(O.persistSelectedChat(!0),
								B.chatData.tabs.find((oe) => oe.tabId === se)?.interpreterData)
							) {
								B.setChatData("codeInterpreterTabs", [
									...B.chatData.codeInterpreterTabs.map((oe) =>
										oe.tabId === se ? { ...oe, chatTitle: re } : oe,
									),
								]);
								return;
							}
							B.setChatData(
								"tabs",
								B.chatData.tabs.map((oe) =>
									oe.tabId === se ? { ...oe, chatTitle: re } : oe,
								),
							);
						};
					let Z;
					return (
						(0, f.$B0b)(
							() => (0, b.$Ogb)().document.querySelector(".aichat-pane") ?? Z,
							() => {
								O.hideChatHistory();
							},
							100,
							() => z() !== c.AIPanePosition.SIDEBAR,
						),
						(0, C.createComponent)(r.Switch, {
							get children() {
								return [
									(0, C.createComponent)(r.Match, {
										get when() {
											return z() === c.AIPanePosition.SIDEBAR;
										},
										get children() {
											const se = A(),
												re = Z;
											return (
												typeof re == "function" ? (0, m.use)(re, se) : (Z = se),
												(0, E.insert)(
													se,
													(0, C.createComponent)(r.Show, {
														get when() {
															return B.chatData.displayTabs;
														},
														get children() {
															const le = N(),
																oe = le.firstChild,
																ae = oe.firstChild,
																pe = ae.nextSibling,
																$e = pe.firstChild,
																ye = $e.firstChild;
															return (
																ae.style.setProperty("padding-left", "0.25rem"),
																$e.addEventListener("click", () => {
																	O.hideChatHistory();
																}),
																(0, E.insert)(le, ee, null),
																(0, d.effect)(() =>
																	(0, w.className)(
																		ye,
																		h.ThemeIcon.asClassName(a.$ak.x),
																	),
																),
																le
															);
														},
													}),
												),
												se
											);
										},
									}),
									(0, C.createComponent)(r.Match, {
										get when() {
											return z() === c.AIPanePosition.EDITOR;
										},
										get children() {
											const se = S();
											return (
												se.style.setProperty("flex", "1"),
												se.style.setProperty("overflow", "hidden"),
												se.style.setProperty("display", "flex"),
												se.style.setProperty("height", "100%"),
												se.style.setProperty("flex-direction", "column"),
												(0, E.insert)(se, () => ee("0.5rem")),
												se
											);
										},
									}),
								];
							},
						})
					);
				}
			},
		),
		