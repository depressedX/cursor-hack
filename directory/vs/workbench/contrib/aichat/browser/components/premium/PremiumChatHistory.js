define(
			de[4249],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 36, 140, 26, 14, 397, 135, 140, 1711, 7,
				385, 1065, 4248, 422, 160, 2379,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ccc = void 0);
				const v = (0, t.template)("<span>(<!>)"),
					S = (0, t.template)(
						'<a href="#" class="premium-chat-history-view-all"><span>View all',
					),
					I = (0, t.template)("<div><div><span></span><span>"),
					T = (0, t.template)("<div>"),
					P = (0, t.template)('<div tabindex="0">'),
					k = (0, t.template)(
						'<div tabindex="0"><div><div></div><div></div></div><div>',
					),
					L = (D) => {
						const M = (0, u.$odc)(),
							N = (0, a.$zgc)(),
							[A, R] = (0, r.createSignal)(0),
							O = (0, s.$lbc)(),
							{ showHover: B, hideHover: U } = (0, y.$z$b)(600),
							z = (0, r.createMemo)(() =>
								N.chatData.tabs
									.filter((X) => X.tabId !== O()?.tabId)
									.sort((X, Y) => (Y.lastSendTime ?? 0) - (X.lastSendTime ?? 0))
									.slice(0, o.$xIb),
							),
							F = (0, r.createMemo)(
								() =>
									O().bubbles.length === 1 &&
									M.reactiveStorageService.applicationUserPersistentStorage
										.bubbleTimesLeft > 0,
							),
							x = (0, r.createMemo)(() => z().length > 0),
							H = (0, r.createMemo)(() =>
								A() >= 450 ? 3 : A() >= 300 ? 2 : 1,
							);
						let q;
						const V = (0, f.$Ogb)().ResizeObserver;
						(0, r.onMount)(() => {
							if (!q) return;
							const W = new V((X) => {
								for (let Y of X) R(Y.contentRect.width);
							});
							W.observe(q),
								(0, r.onCleanup)(() => {
									W.disconnect();
								});
						});
						const G = (W) => {
								N.setChatData("selectedTabId", W),
									setTimeout(() => {
										N.chatData.inputBoxDelegate?.focus();
									});
							},
							K = (0, b.$5$b)(p.$Fgc);
						(0, r.createEffect)(() => {
							const W = D.selectedPreviousChatIndex,
								X = D.setSelectedPreviousChatIndex,
								Y = (ie) => {
									if (W !== -1)
										switch (ie.key) {
											case "ArrowLeft": {
												const ne = W - 1;
												if (ne < 0) {
													X(-1), N.chatData.inputBoxDelegate?.focus();
													break;
												}
												X(ne);
												break;
											}
											case "ArrowRight": {
												const ne = W + 1;
												if (ne >= z().length) {
													X(z().length - 1);
													break;
												}
												X(ne);
												break;
											}
											case "ArrowUp": {
												const ee = W - H();
												if (ee < 0) {
													X(-1), N.chatData.inputBoxDelegate?.focus();
													break;
												}
												X(ee);
												break;
											}
											case "ArrowDown": {
												const ee = W + H();
												if (ee >= z().length) {
													X(z().length - 1);
													break;
												}
												X(ee);
												break;
											}
											case "Escape": {
												X(-1), N.chatData.inputBoxDelegate?.focus();
												break;
											}
											case "Enter": {
												const ne = z()[W];
												ne && G(ne.tabId);
												break;
											}
										}
								};
							q?.addEventListener("keydown", Y),
								(0, r.onCleanup)(() => {
									q?.removeEventListener("keydown", Y);
								});
						});
						const J = (0, r.createMemo)(
							() =>
								D.selectedPreviousChatIndex !== -1 ||
								M.reactiveStorageService.applicationUserPersistentStorage
									.chatHistoryIsCollapsed !== !0,
						);
						return (0, E.createComponent)(r.Show, {
							get when() {
								return x();
							},
							get children() {
								const W = P();
								W.addEventListener("focusout", () => {
									const Y = D.setSelectedPreviousChatIndex;
									setTimeout(() => {
										(!q || !q.contains((0, f.$Ogb)().document.activeElement)) &&
											Y(-1);
									});
								});
								const X = q;
								return (
									typeof X == "function" ? (0, m.use)(X, W) : (q = W),
									W.style.setProperty("padding", "0.75rem 1.25rem"),
									W.style.setProperty("display", "flex"),
									W.style.setProperty("flex-direction", "column"),
									W.style.setProperty("gap", "0.25rem"),
									W.style.setProperty("height", "100%"),
									W.style.setProperty("outline", "none"),
									W.style.setProperty("flex", "1"),
									(0, C.insert)(
										W,
										(0, E.createComponent)(r.Show, {
											get when() {
												return !F();
											},
											get fallback() {
												return (0, E.createComponent)(l.$bcc, {});
											},
											get children() {
												return [
													(() => {
														const Y = I(),
															ie = Y.firstChild,
															ne = ie.firstChild,
															ee = ne.nextSibling;
														return (
															Y.style.setProperty("display", "flex"),
															Y.style.setProperty(
																"justify-content",
																"space-between",
															),
															Y.style.setProperty("align-items", "center"),
															Y.style.setProperty("padding", "0px 0.25rem"),
															ie.addEventListener("click", () => {
																D.selectedPreviousChatIndex !== -1 &&
																M.reactiveStorageService
																	.applicationUserPersistentStorage
																	.chatHistoryIsCollapsed === !0
																	? D.setSelectedPreviousChatIndex(-1)
																	: M.reactiveStorageService.setApplicationUserPersistentStorage(
																			"chatHistoryIsCollapsed",
																			(_) => !_,
																		);
															}),
															ie.style.setProperty("display", "flex"),
															ie.style.setProperty("align-items", "center"),
															ie.style.setProperty("cursor", "pointer"),
															ne.style.setProperty("font-size", "0.75rem"),
															ne.style.setProperty(
																"color",
																"var(--vscode-input-placeholderForeground)",
															),
															ne.style.setProperty("font-weight", "400"),
															ne.style.setProperty("flex-shrink", "0"),
															ne.style.setProperty("margin-right", "0.25rem"),
															(0, C.insert)(ne, () => (J(), "Previous chats")),
															ee.style.setProperty("font-size", "0.75rem"),
															ee.style.setProperty(
																"color",
																"var(--vscode-input-placeholderForeground)",
															),
															(0, C.insert)(
																Y,
																(0, E.createComponent)(r.Show, {
																	get when() {
																		return (
																			(0, d.memo)(() => !!J())() && A() > 260
																		);
																	},
																	get children() {
																		const _ = S(),
																			te = _.firstChild,
																			Q = te.firstChild;
																		return (
																			_.addEventListener("click", (Z) => {
																				Z.preventDefault(),
																					M.commandService.executeCommand(
																						p.$Fgc,
																					);
																			}),
																			_.style.setProperty(
																				"font-size",
																				"0.75rem",
																			),
																			_.style.setProperty(
																				"color",
																				"var(--vscode-textLink-foreground)",
																			),
																			_.style.setProperty(
																				"text-decoration",
																				"none",
																			),
																			_.style.setProperty("display", "flex"),
																			_.style.setProperty(
																				"align-items",
																				"center",
																			),
																			_.style.setProperty("flex-shrink", "0"),
																			te.style.setProperty(
																				"font-size",
																				"0.75rem",
																			),
																			te.style.setProperty("flex-shrink", "0"),
																			(0, C.insert)(
																				te,
																				(0, E.createComponent)(r.Show, {
																					get when() {
																						return (
																							(0, d.memo)(
																								() =>
																									D.selectedPreviousChatIndex !==
																									-1,
																							)() && K()
																						);
																					},
																					get children() {
																						const Z = v(),
																							se = Z.firstChild,
																							re = se.nextSibling,
																							le = re.nextSibling;
																						return (
																							Z.style.setProperty(
																								"margin-left",
																								"4px",
																							),
																							Z.style.setProperty(
																								"color",
																								"var(--vscode-input-placeholderForeground)",
																							),
																							(0, C.insert)(Z, K, re),
																							Z
																						);
																					},
																				}),
																				null,
																			),
																			_
																		);
																	},
																}),
																null,
															),
															(0, w.effect)(
																(_) => {
																	const te = J() ? 1 : 0.5,
																		Q = J() ? 1 : 0.5,
																		Z = h.ThemeIcon.asClassName(
																			J()
																				? c.$ak.chevronDown
																				: c.$ak.chevronRight,
																		);
																	return (
																		te !== _._v$ &&
																			((_._v$ = te) != null
																				? ne.style.setProperty("opacity", te)
																				: ne.style.removeProperty("opacity")),
																		Q !== _._v$2 &&
																			((_._v$2 = Q) != null
																				? ee.style.setProperty("opacity", Q)
																				: ee.style.removeProperty("opacity")),
																		Z !== _._v$3 &&
																			(0, i.className)(ee, (_._v$3 = Z)),
																		_
																	);
																},
																{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
															),
															Y
														);
													})(),
													(0, E.createComponent)(r.Show, {
														get when() {
															return J();
														},
														get children() {
															const Y = T();
															return (
																Y.style.setProperty("flex", "1"),
																(0, C.insert)(
																	Y,
																	(0, E.createComponent)(g.$w0b, {
																		scrollingDirection: "vertical",
																		style: { height: "100%" },
																		get children() {
																			const ie = T();
																			return (
																				ie.style.setProperty("display", "grid"),
																				ie.style.setProperty("gap", "0.4rem"),
																				(0, C.insert)(
																					ie,
																					(0, E.createComponent)(r.For, {
																						get each() {
																							return z();
																						},
																						children: (ne, ee) => {
																							const _ = (0, r.createMemo)(
																								() =>
																									ee() ===
																									D.selectedPreviousChatIndex,
																							);
																							let te;
																							(0, r.createEffect)(() => {
																								_() && te?.focus();
																							});
																							const Q = (0, r.createMemo)(() =>
																								_()
																									? "var(--vscode-editorGutter-modifiedBackground)"
																									: "var(--vscode-widget-border, transparent)",
																							);
																							return (() => {
																								const Z = k(),
																									se = Z.firstChild,
																									re = se.firstChild,
																									le = re.nextSibling,
																									oe = se.nextSibling;
																								Z.addEventListener(
																									"mouseleave",
																									() => U(),
																								),
																									Z.addEventListener(
																										"mouseenter",
																										(pe) =>
																											B({
																												target: pe.target,
																												content: `${
																													ne.chatTitle
																														? ne.chatTitle.split(`
`)[0]
																														: "New chat"
																												}${ne.tabId === D.selectedTabId ? " (current)" : ""}`,
																												appearance: {
																													compact: !0,
																													showPointer: !0,
																												},
																												position: {
																													hoverPosition:
																														$.HoverPosition
																															.BELOW,
																												},
																											}),
																									),
																									Z.addEventListener(
																										"click",
																										() => G(ne.tabId),
																									);
																								const ae = te;
																								return (
																									typeof ae == "function"
																										? (0, m.use)(ae, Z)
																										: (te = Z),
																									Z.style.setProperty(
																										"display",
																										"flex",
																									),
																									Z.style.setProperty(
																										"outline",
																										"none",
																									),
																									Z.style.setProperty(
																										"align-items",
																										"center",
																									),
																									Z.style.setProperty(
																										"padding",
																										"0.3rem 0.4rem",
																									),
																									Z.style.setProperty(
																										"padding-left",
																										"calc(0.4rem - 1.5px)",
																									),
																									Z.style.setProperty(
																										"border-width",
																										"1px",
																									),
																									Z.style.setProperty(
																										"border-style",
																										"solid",
																									),
																									Z.style.setProperty(
																										"border-radius",
																										"0.25rem",
																									),
																									Z.style.setProperty(
																										"background-color",
																										"var(--vscode-input-background)",
																									),
																									Z.style.setProperty(
																										"cursor",
																										"pointer",
																									),
																									Z.style.setProperty(
																										"justify-content",
																										"space-between",
																									),
																									Z.style.setProperty(
																										"transition",
																										"background-color 0.2s ease",
																									),
																									Z.style.setProperty(
																										"min-width",
																										"0",
																									),
																									se.style.setProperty(
																										"display",
																										"flex",
																									),
																									se.style.setProperty(
																										"align-items",
																										"center",
																									),
																									se.style.setProperty(
																										"min-width",
																										"0",
																									),
																									se.style.setProperty(
																										"flex-grow",
																										"1",
																									),
																									re.style.setProperty(
																										"margin-right",
																										"0.25rem",
																									),
																									re.style.setProperty(
																										"font-size",
																										"0.75rem",
																									),
																									re.style.setProperty(
																										"flex-shrink",
																										"0",
																									),
																									le.style.setProperty(
																										"flex-grow",
																										"1",
																									),
																									le.style.setProperty(
																										"flex-shrink",
																										"1",
																									),
																									le.style.setProperty(
																										"min-width",
																										"0",
																									),
																									le.style.setProperty(
																										"font-size",
																										"0.75rem",
																									),
																									le.style.setProperty(
																										"white-space",
																										"nowrap",
																									),
																									le.style.setProperty(
																										"overflow",
																										"hidden",
																									),
																									le.style.setProperty(
																										"text-overflow",
																										"ellipsis",
																									),
																									(0, C.insert)(
																										le,
																										() =>
																											ne.chatTitle ||
																											"New chat",
																									),
																									oe.style.setProperty(
																										"font-size",
																										"0.65rem",
																									),
																									oe.style.setProperty(
																										"color",
																										"var(--vscode-input-placeholderForeground)",
																									),
																									oe.style.setProperty(
																										"margin-left",
																										"0.6rem",
																									),
																									oe.style.setProperty(
																										"flex-shrink",
																										"0",
																									),
																									(0, C.insert)(oe, () =>
																										(0, n.$bgc)(
																											ne.lastSendTime ??
																												Date.now(),
																										),
																									),
																									(0, w.effect)(
																										(pe) => {
																											const $e = `premium-chat-history-item ${ne.tabId === D.selectedTabId ? "current-chat" : ""}`,
																												ye = Q(),
																												ue = Q(),
																												fe = Q(),
																												me = _()
																													? "var(--vscode-editorGutter-modifiedBackground)"
																													: ne.tabId ===
																															D.selectedTabId
																														? "var(--vscode-textLink-activeForeground)"
																														: "var(--vscode-widget-border, transparent)",
																												ve = ne.chatTitle
																													? "var(--vscode-foreground)"
																													: "var(--vscode-input-placeholderForeground)",
																												ge =
																													h.ThemeIcon.asClassName(
																														c.$ak.comment,
																													),
																												be = ne.chatTitle
																													? "var(--vscode-foreground)"
																													: "var(--vscode-input-placeholderForeground)";
																											return (
																												$e !== pe._v$4 &&
																													(0, i.className)(
																														Z,
																														(pe._v$4 = $e),
																													),
																												ye !== pe._v$5 &&
																													((pe._v$5 = ye) !=
																													null
																														? Z.style.setProperty(
																																"border-top-color",
																																ye,
																															)
																														: Z.style.removeProperty(
																																"border-top-color",
																															)),
																												ue !== pe._v$6 &&
																													((pe._v$6 = ue) !=
																													null
																														? Z.style.setProperty(
																																"border-bottom-color",
																																ue,
																															)
																														: Z.style.removeProperty(
																																"border-bottom-color",
																															)),
																												fe !== pe._v$7 &&
																													((pe._v$7 = fe) !=
																													null
																														? Z.style.setProperty(
																																"border-right-color",
																																fe,
																															)
																														: Z.style.removeProperty(
																																"border-right-color",
																															)),
																												me !== pe._v$8 &&
																													((pe._v$8 = me) !=
																													null
																														? Z.style.setProperty(
																																"border-left-color",
																																me,
																															)
																														: Z.style.removeProperty(
																																"border-left-color",
																															)),
																												ve !== pe._v$9 &&
																													((pe._v$9 = ve) !=
																													null
																														? re.style.setProperty(
																																"color",
																																ve,
																															)
																														: re.style.removeProperty(
																																"color",
																															)),
																												ge !== pe._v$10 &&
																													(0, i.className)(
																														re,
																														(pe._v$10 = ge),
																													),
																												be !== pe._v$11 &&
																													((pe._v$11 = be) !=
																													null
																														? le.style.setProperty(
																																"color",
																																be,
																															)
																														: le.style.removeProperty(
																																"color",
																															)),
																												pe
																											);
																										},
																										{
																											_v$4: void 0,
																											_v$5: void 0,
																											_v$6: void 0,
																											_v$7: void 0,
																											_v$8: void 0,
																											_v$9: void 0,
																											_v$10: void 0,
																											_v$11: void 0,
																										},
																									),
																									Z
																								);
																							})();
																						},
																					}),
																				),
																				(0, w.effect)(() =>
																					`repeat(${H()}, 1fr)` != null
																						? ie.style.setProperty(
																								"grid-template-columns",
																								`repeat(${H()}, 1fr)`,
																							)
																						: ie.style.removeProperty(
																								"grid-template-columns",
																							),
																				),
																				ie
																			);
																		},
																	}),
																),
																Y
															);
														},
													}),
												];
											},
										}),
									),
									W
								);
							},
						});
					};
				e.$ccc = L;
			},
		),
		