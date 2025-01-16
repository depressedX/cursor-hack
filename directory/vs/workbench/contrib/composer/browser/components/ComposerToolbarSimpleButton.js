define(de[485], he([1, 0, 2, 2, 311, 147]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ComposerToolbarSimpleButton = void 0);
			const C = (d) => {
				const { showHover: m, hideHover: r } = (0, w.useComposerHoverTooltip)({
					delay: 300,
					additionalClasses: ["chat-hover-tooltip"],
				});
				return (0, t.createComponent)(
					E.$rdc,
					(0, i.mergeProps)(d, {
						get onMouseEnter() {
							return d.hintText ? (u) => m(u, d.hintText) : void 0;
						},
						get onMouseLeave() {
							return d.hintText ? r : void 0;
						},
						get style() {
							return { "font-size": "10px", padding: "0px 4px", ...d.style };
						},
						get tabFocusable() {
							return d.tabFocusable;
						},
						get setRef() {
							return d.setRef;
						},
						smallSpinner: !0,
					}),
				);
			};
			e.ComposerToolbarSimpleButton = C;
		}),
		define(
			de[4281],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 26, 14, 485, 156, 36, 7, 311, 160,
				54, 565, 177, 428, 2408,
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
					(e.ComposerDiffReviewPure = O);
				const v = (0, t.template)("<span>"),
					S = (0, t.template)("<div>"),
					I = (0, t.template)(
						'<div><div class="diff-review-header"><div class="diff-review-header-content"><span><span></span></span><span>L<!>-L</span></div></div><div class="diff-review-content">',
					),
					T = (0, t.template)('<div class="diff-review-line-indicator">'),
					P = (0, t.template)(
						"<div><span></span><div><div></div><span></span></div><div>",
					),
					k = (0, t.template)('<div class="diff-review-line-cube added">'),
					L = (0, t.template)(
						'<div class="diff-review-line-cube indentation">',
					),
					D = (0, t.template)('<div class="diff-review-line-cube removed">'),
					M = (0, t.template)('<div tabindex="0">'),
					N = (0, t.template)('<div class="diff-review-group-content">'),
					A = (0, t.template)("<div><div><span></span><div><div><span>");
				function R(B) {
					const U = (0, p.$odc)(),
						z = (G) => Math.min(4, Math.max(1, Math.ceil(G / 2))),
						{ showHover: F, hideHover: x } = (0, f.useComposerHoverTooltip)({
							delay: 100,
						}),
						[H, q] = (0, a.createSignal)(!1),
						V = (0, $.$b$b)();
					return (() => {
						const G = I(),
							K = G.firstChild,
							J = K.firstChild,
							W = J.firstChild,
							X = W.firstChild,
							Y = W.nextSibling,
							ie = Y.firstChild,
							ne = ie.nextSibling,
							ee = ne.nextSibling,
							_ = K.nextSibling;
						return (
							G.addEventListener("mouseleave", () => q(!1)),
							G.addEventListener("mouseenter", () => q(!0)),
							G.style.setProperty("border-radius", "2px"),
							K.addEventListener("click", (te) => {
								te.stopPropagation(), B.onClick?.(0);
							}),
							(0, r.insert)(
								J,
								(0, u.createComponent)(a.Show, {
									get when() {
										return V();
									},
									get children() {
										const te = v();
										return (
											te.style.setProperty("margin-right", "-4px"),
											te.style.setProperty("display", "flex"),
											te.style.setProperty("align-items", "center"),
											te.style.setProperty("flex-shrink", "0"),
											te.style.setProperty("scale", "0.8"),
											(0, r.insert)(
												te,
												(0, u.createComponent)(g.$k$b, {
													get fileName() {
														return (0, s.$sc)(B.path);
													},
													get workspaceContextService() {
														return U.workspaceContextService;
													},
													get modelService() {
														return U.modelService;
													},
													get languageService() {
														return U.languageService;
													},
												}),
											),
											te
										);
									},
								}),
								W,
							),
							W.style.setProperty(
								"font-family",
								"var(--monaco-monospace-font)",
							),
							W.style.setProperty("white-space", "nowrap"),
							W.style.setProperty("overflow", "hidden"),
							W.style.setProperty("text-overflow", "ellipsis"),
							W.style.setProperty("min-width", "0"),
							W.style.setProperty("direction", "rtl"),
							X.style.setProperty("direction", "ltr"),
							X.style.setProperty("unicode-bidi", "embed"),
							(0, r.insert)(X, () => B.path),
							Y.style.setProperty(
								"color",
								"var(--vscode-descriptionForeground)",
							),
							Y.style.setProperty("flex-shrink", "0"),
							(0, r.insert)(Y, () => B.startLine, ne),
							(0, r.insert)(Y, () => B.endLine, null),
							(0, r.insert)(
								J,
								(0, u.createComponent)(l.ComposerGeneralStatusIndicator, {
									get status() {
										return B.status === "pending" ? "completed" : B.status;
									},
									size: "medium",
								}),
								null,
							),
							(0, r.insert)(
								J,
								(0, u.createComponent)(a.Show, {
									get when() {
										return H();
									},
									get children() {
										const te = S();
										return (
											te.style.setProperty("margin-left", "auto"),
											te.style.setProperty("display", "flex"),
											te.style.setProperty("align-items", "center"),
											te.style.setProperty("gap", "4px"),
											te.style.setProperty("min-width", "120px"),
											te.style.setProperty("justify-content", "flex-end"),
											(0, r.insert)(
												te,
												(0, u.createComponent)(n.ComposerToolbarSimpleButton, {
													type: "secondary",
													title: "Reject all",
													onClick: (Q) => {
														Q.stopPropagation(),
															B.onRejectGroupFileChanges?.(
																B.groupIndex,
																B.changeIndex,
															);
													},
													style: {
														height: "16px",
														padding: "0px 3px",
														opacity: 1,
													},
													onMouseEnter: (Q) =>
														F(Q, "Reject all changes in this group"),
													onMouseLeave: x,
												}),
												null,
											),
											(0, r.insert)(
												te,
												(0, u.createComponent)(n.ComposerToolbarSimpleButton, {
													type: "secondary",
													title: "Accept all",
													onClick: (Q) => {
														Q.stopPropagation(),
															B.onAcceptGroupFileChanges?.(
																B.groupIndex,
																B.changeIndex,
															);
													},
													style: {
														height: "16px",
														padding: "0px 3px",
														opacity: 1,
													},
													onMouseEnter: (Q) =>
														F(Q, "Accept all changes in this group"),
													onMouseLeave: x,
												}),
												null,
											),
											te
										);
									},
								}),
								null,
							),
							(0, r.insert)(
								_,
								(0, u.createComponent)(a.For, {
									get each() {
										return B.changes;
									},
									children: (te, Q) => {
										const [Z, se] = (0, a.createSignal)(!1),
											re = (0, a.createMemo)(
												() => B.isSelected && B.selectedLeafIndex === Q(),
											);
										return (() => {
											const le = P(),
												oe = le.firstChild,
												ae = oe.nextSibling,
												pe = ae.firstChild,
												$e = pe.nextSibling,
												ye = ae.nextSibling;
											return (
												le.addEventListener("mouseleave", () => se(!1)),
												le.addEventListener("mouseenter", () => se(!0)),
												le.addEventListener("click", (ue) => {
													ue.stopPropagation(), B.onClick?.(Q(), ue.altKey);
												}),
												(0, r.insert)(
													le,
													(0, u.createComponent)(a.Show, {
														get when() {
															return (
																(0, m.memo)(() => !!B.isSelected)() &&
																B.selectedLeafIndex === Q()
															);
														},
														get children() {
															const ue = S();
															return (
																ue.style.setProperty("position", "absolute"),
																ue.style.setProperty("left", "0"),
																ue.style.setProperty("top", "0"),
																ue.style.setProperty("bottom", "0"),
																ue.style.setProperty("width", "2px"),
																ue.style.setProperty(
																	"background",
																	"var(--vscode-editorLightBulb-foreground)",
																),
																ue
															);
														},
													}),
													oe,
												),
												oe.style.setProperty(
													"color",
													"var(--vscode-descriptionForeground)",
												),
												oe.style.setProperty("min-width", "60px"),
												(0, r.insert)(
													oe,
													() => `${te.startLine}-${te.endLine}`,
												),
												ae.style.setProperty("display", "flex"),
												ae.style.setProperty("align-items", "center"),
												ae.style.setProperty("gap", "4px"),
												ae.style.setProperty("flex-shrink", "0"),
												pe.style.setProperty("display", "flex"),
												pe.style.setProperty("align-items", "center"),
												pe.style.setProperty("gap", "6px"),
												(0, r.insert)(
													pe,
													(0, u.createComponent)(a.Show, {
														get when() {
															return te.isIndentation && te.indentationSections;
														},
														children: (ue) =>
															(() => {
																const fe = S();
																return (
																	fe.style.setProperty("display", "flex"),
																	fe.style.setProperty("gap", "2px"),
																	(0, r.insert)(
																		fe,
																		(0, u.createComponent)(a.Show, {
																			get when() {
																				return ue().preSandwich.lines > 0;
																			},
																			get children() {
																				const me = T();
																				return (
																					(0, r.insert)(
																						me,
																						(0, u.createComponent)(a.For, {
																							get each() {
																								return Array(
																									z(ue().preSandwich.lines),
																								);
																							},
																							children: () => k(),
																						}),
																					),
																					me
																				);
																			},
																		}),
																		null,
																	),
																	(0, r.insert)(
																		fe,
																		(0, u.createComponent)(a.Show, {
																			get when() {
																				return ue().indentation.lines > 0;
																			},
																			get children() {
																				const me = T();
																				return (
																					(0, r.insert)(
																						me,
																						(0, u.createComponent)(a.For, {
																							get each() {
																								return Array(
																									z(ue().indentation.lines),
																								);
																							},
																							children: () => L(),
																						}),
																					),
																					me
																				);
																			},
																		}),
																		null,
																	),
																	(0, r.insert)(
																		fe,
																		(0, u.createComponent)(a.Show, {
																			get when() {
																				return ue().postSandwich.lines > 0;
																			},
																			get children() {
																				const me = T();
																				return (
																					(0, r.insert)(
																						me,
																						(0, u.createComponent)(a.For, {
																							get each() {
																								return Array(
																									z(ue().postSandwich.lines),
																								);
																							},
																							children: () => k(),
																						}),
																					),
																					me
																				);
																			},
																		}),
																		null,
																	),
																	fe
																);
															})(),
													}),
													null,
												),
												(0, r.insert)(
													pe,
													(0, u.createComponent)(a.Show, {
														get when() {
															return !te.isIndentation;
														},
														get children() {
															const ue = T();
															return (
																(0, r.insert)(
																	ue,
																	(0, u.createComponent)(a.Show, {
																		get when() {
																			return te.removedLines > 0;
																		},
																		get children() {
																			const fe = T();
																			return (
																				(0, r.insert)(
																					fe,
																					(0, u.createComponent)(a.For, {
																						get each() {
																							return Array(z(te.removedLines));
																						},
																						children: () => D(),
																					}),
																				),
																				fe
																			);
																		},
																	}),
																	null,
																),
																(0, r.insert)(
																	ue,
																	(0, u.createComponent)(a.Show, {
																		get when() {
																			return te.addedLines > 0;
																		},
																		get children() {
																			const fe = T();
																			return (
																				(0, r.insert)(
																					fe,
																					(0, u.createComponent)(a.For, {
																						get each() {
																							return Array(z(te.addedLines));
																						},
																						children: () => k(),
																					}),
																				),
																				fe
																			);
																		},
																	}),
																	null,
																),
																ue
															);
														},
													}),
													null,
												),
												$e.style.setProperty(
													"color",
													"var(--vscode-descriptionForeground)",
												),
												$e.style.setProperty("flex-shrink", "0"),
												(0, r.insert)(
													$e,
													(0, u.createComponent)(a.Show, {
														get when() {
															return te.isIndentation;
														},
														get children() {
															const ue = v();
															return (
																ue.style.setProperty(
																	"color",
																	"var(--vscode-charts-blue)",
																),
																(0, r.insert)(ue, () => `~${te.removedLines}`),
																ue
															);
														},
													}),
													null,
												),
												(0, r.insert)(
													$e,
													(0, u.createComponent)(a.Show, {
														get when() {
															return !te.isIndentation && te.removedLines > 0;
														},
														get children() {
															const ue = v();
															return (
																ue.style.setProperty(
																	"color",
																	"var(--vscode-gitDecoration-deletedResourceForeground, #f14c4c)",
																),
																(0, r.insert)(ue, () => `-${te.removedLines}`),
																ue
															);
														},
													}),
													null,
												),
												(0, r.insert)(
													$e,
													(0, u.createComponent)(a.Show, {
														get when() {
															return te.addedLines > 0;
														},
														get children() {
															const ue = v();
															return (
																ue.style.setProperty(
																	"color",
																	"var(--vscode-gitDecoration-addedResourceForeground, #73c991)",
																),
																(0, r.insert)(ue, () => ` +${te.addedLines}`),
																ue
															);
														},
													}),
													null,
												),
												ye.style.setProperty("margin-left", "auto"),
												ye.style.setProperty("display", "flex"),
												ye.style.setProperty("gap", "4px"),
												(0, r.insert)(
													ye,
													(0, u.createComponent)(a.Show, {
														get when() {
															return Z() || re();
														},
														get children() {
															const ue = S();
															return (
																ue.style.setProperty("display", "flex"),
																ue.style.setProperty("gap", "4px"),
																ue.style.setProperty("min-width", "120px"),
																ue.style.setProperty(
																	"justify-content",
																	"flex-end",
																),
																(0, r.insert)(
																	ue,
																	(0, u.createComponent)(
																		n.ComposerToolbarSimpleButton,
																		{
																			type: "secondary",
																			get codicon() {
																				return re() ? void 0 : c.$ak.close;
																			},
																			onClick: (fe) => {
																				fe.stopPropagation(),
																					B.onRejectLeaf?.(
																						B.groupIndex,
																						B.changeIndex,
																						Q(),
																					);
																			},
																			style: {
																				height: "16px",
																				padding: "0px 3px",
																				opacity: 1,
																			},
																			get title() {
																				return re() ? "Reject \u232B" : void 0;
																			},
																			onMouseEnter: (fe) =>
																				F(fe, "Reject change"),
																			onMouseLeave: x,
																		},
																	),
																	null,
																),
																(0, r.insert)(
																	ue,
																	(0, u.createComponent)(
																		n.ComposerToolbarSimpleButton,
																		{
																			get type() {
																				return re() ? "primary" : "secondary";
																			},
																			get codicon() {
																				return re() ? void 0 : c.$ak.check;
																			},
																			onClick: (fe) => {
																				fe.stopPropagation(),
																					B.onAcceptLeaf?.(
																						B.groupIndex,
																						B.changeIndex,
																						Q(),
																					);
																			},
																			style: {
																				height: "16px",
																				padding: "0px 3px",
																				opacity: 1,
																			},
																			get title() {
																				return re() ? "Accept \u23CE" : void 0;
																			},
																			onMouseEnter: (fe) =>
																				F(fe, "Accept change"),
																			onMouseLeave: x,
																		},
																	),
																	null,
																),
																ue
															);
														},
													}),
												),
												(0, d.effect)(
													(ue) => {
														const fe = `diff-review-change ${B.isSelected && B.selectedLeafIndex === Q() ? "selected" : ""}`,
															me = B.groupIndex,
															ve = B.changeIndex,
															ge = Q();
														return (
															fe !== ue._v$4 &&
																(0, C.className)(le, (ue._v$4 = fe)),
															me !== ue._v$5 &&
																(0, E.setAttribute)(
																	le,
																	"data-group-index",
																	(ue._v$5 = me),
																),
															ve !== ue._v$6 &&
																(0, E.setAttribute)(
																	le,
																	"data-change-index",
																	(ue._v$6 = ve),
																),
															ge !== ue._v$7 &&
																(0, E.setAttribute)(
																	le,
																	"data-leaf-index",
																	(ue._v$7 = ge),
																),
															ue
														);
													},
													{
														_v$4: void 0,
														_v$5: void 0,
														_v$6: void 0,
														_v$7: void 0,
													},
												),
												le
											);
										})();
									},
								}),
							),
							(0, d.effect)(
								(te) => {
									const Q = `diff-review-block ${B.isSelected ? "selected" : ""}`,
										Z = B.groupIndex,
										se = B.changeIndex;
									return (
										Q !== te._v$ && (0, C.className)(G, (te._v$ = Q)),
										Z !== te._v$2 &&
											(0, E.setAttribute)(G, "data-group-index", (te._v$2 = Z)),
										se !== te._v$3 &&
											(0, E.setAttribute)(
												G,
												"data-change-index",
												(te._v$3 = se),
											),
										te
									);
								},
								{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
							),
							G
						);
					})();
				}
				function O(B) {
					const U = (0, p.$odc)(),
						z = (0, a.createMemo)(() => B.diffReviewData.length),
						{ composerDataHandle: F } = (0, y.useComposerDataHandle)(
							() => B.composerDataHandle,
						),
						[x, H] = (0, a.createSignal)(
							new Set(Array.from({ length: z() }, (ye, ue) => ue)),
						),
						[q, V] = (0, a.createSignal)({
							groupIndex: 0,
							changeIndex: 0,
							leafIndex: 0,
						}),
						[G, K] = (0, a.createSignal)(!1);
					let J;
					const [W, X] = (0, a.createSignal)(null),
						Y = (ye, ue) => {
							V(ye), B.onSelectChange?.(ye, !ue);
						};
					(0, a.createEffect)(() => {
						(0, a.onMount)(() => {
							const ye = q();
							Y(ye, !0);
						});
					});
					const ie = () => {
							const ye = [];
							return (
								B.diffReviewData.forEach((ue, fe) => {
									ue.fileChanges.forEach((me, ve) => {
										me.changes.forEach((ge, be) => {
											ye.push({
												groupIndex: fe,
												changeIndex: ve,
												leafIndex: be,
											});
										});
									});
								}),
								ye
							);
						},
						ne = () => {
							const ye = q(),
								ue = ie();
							if (
								ue.find(
									(fe) =>
										fe.groupIndex === ye.groupIndex &&
										fe.changeIndex === ye.changeIndex &&
										fe.leafIndex === ye.leafIndex,
								)
							) {
								Y(ye), $e((fe) => fe + 1);
								return;
							}
							if (
								ue.find(
									(fe) =>
										fe.groupIndex === ye.groupIndex &&
										fe.changeIndex === ye.changeIndex,
								)
							) {
								const fe = Math.max(
									...ue
										.filter(
											(me) =>
												me.groupIndex === ye.groupIndex &&
												me.changeIndex === ye.changeIndex,
										)
										.map((me) => me.leafIndex),
								);
								fe &&
									Y({
										groupIndex: ye.groupIndex,
										changeIndex: ye.changeIndex,
										leafIndex: fe,
									});
							} else if (ue.find((fe) => fe.groupIndex === ye.groupIndex)) {
								const fe = Math.max(
									...ue
										.filter((me) => me.groupIndex === ye.groupIndex)
										.map((me) => me.changeIndex),
								);
								if (fe) {
									const me = Math.max(
										...ue
											.filter(
												(ve) =>
													ve.groupIndex === ye.groupIndex &&
													ve.changeIndex === fe,
											)
											.map((ve) => ve.leafIndex),
									);
									me &&
										Y({
											groupIndex: ye.groupIndex,
											changeIndex: fe,
											leafIndex: me,
										});
								}
							} else
								ue.length > 0
									? (Y(ue[0]),
										ee()?.(ue[0].groupIndex),
										H((fe) => {
											const me = new Set(fe);
											return me.add(ue[0].groupIndex), me;
										}))
									: (Y({ groupIndex: -1, changeIndex: -1, leafIndex: -1 }),
										B.onFocusChange?.(!1),
										U.composerService.focus(F().data.composerId));
						},
						ee = (0, a.createMemo)(() => B.onExpandGroup),
						_ = (ye) => {
							if (!G()) return;
							const ue = ie(),
								fe = q(),
								me = ue.findIndex(
									(ve) =>
										ve.groupIndex === fe.groupIndex &&
										ve.changeIndex === fe.changeIndex &&
										ve.leafIndex === fe.leafIndex,
								);
							if (ye.key === "ArrowDown") {
								if (
									(ye.preventDefault(),
									ye.stopImmediatePropagation(),
									me < ue.length - 1)
								) {
									const ve = ue[me + 1];
									Y(ve),
										B.onNavigateChange?.(q(), ve),
										H((ge) => {
											const be = new Set(ge);
											return (
												be.add(ve.groupIndex),
												B.onExpandGroup?.(ve.groupIndex),
												be
											);
										});
								}
							} else if (ye.key === "ArrowUp") {
								if (
									(ye.preventDefault(), ye.stopImmediatePropagation(), me > 0)
								) {
									const ve = ue[me - 1];
									Y(ve),
										H((ge) => {
											const be = new Set(ge);
											return (
												be.add(ve.groupIndex),
												B.onExpandGroup?.(ve.groupIndex),
												be
											);
										});
								}
							} else
								ye.key === "Enter"
									? ye.metaKey || ye.ctrlKey
										? (B.onAcceptGroupFileChanges?.(
												fe.groupIndex,
												fe.changeIndex,
											),
											setTimeout(ne, 100))
										: (B.onAcceptLeaf?.(
												fe.groupIndex,
												fe.changeIndex,
												fe.leafIndex,
											),
											setTimeout(ne, 100))
									: (ye.key === "Delete" || ye.key === "Backspace") &&
										(ye.metaKey || ye.ctrlKey
											? (B.onRejectGroupFileChanges?.(
													fe.groupIndex,
													fe.changeIndex,
												),
												setTimeout(ne, 100))
											: (B.onRejectLeaf?.(
													fe.groupIndex,
													fe.changeIndex,
													fe.leafIndex,
												),
												setTimeout(ne, 100)));
						},
						te = (ye) => {
							K(ye),
								ye || Y({ groupIndex: -1, changeIndex: -1, leafIndex: -1 }, !0),
								B.onFocusChange?.(ye);
						};
					(0, a.createEffect)(() => {
						F().data.text ||
							((0, o.$Ogb)().addEventListener("keydown", _),
							J?.focus(),
							(0, a.onCleanup)(() => {
								(0, o.$Ogb)().removeEventListener("keydown", _);
							}));
					});
					const Q = (ye) => {
							X(ye);
						},
						{ showHover: Z, hideHover: se } = (0, f.useComposerHoverTooltip)({
							delay: 300,
							position: b.HoverPosition.BELOW,
						}),
						re = (0, a.createMemo)(() =>
							B.diffReviewData.some((ye) => ye.fileChanges.length > 0),
						);
					(0, a.createEffect)(() => {
						const ye = q();
						if (!ye || !B.scrollable) return;
						const ue = B.messagesContainerRef?.();
						if (!ue) return;
						const fe = B.scrollable;
						fe &&
							setTimeout(() => {
								const me = ue.querySelector(
									`.diff-review-change[data-group-index="${ye.groupIndex}"][data-change-index="${ye.changeIndex}"][data-leaf-index="${ye.leafIndex}"]`,
								);
								if (!me) return;
								const ve = ue.getBoundingClientRect(),
									be =
										me.getBoundingClientRect().top -
										ve.top +
										fe.getCurrentScrollPosition().scrollTop,
									Ce = me.offsetHeight,
									{ scrollTop: Le } = fe.getCurrentScrollPosition(),
									{ height: Fe, scrollHeight: Oe } = fe.getScrollDimensions(),
									xe = be + Ce,
									He = 24;
								let Ke = Le;
								be < Le + He
									? (Ke = Math.max(0, be - He))
									: xe > Le + Fe - He && (Ke = Math.min(Oe - Fe, xe - Fe + He)),
									Ke !== Le && fe.setScrollPositionNow({ scrollTop: Ke });
							}, 5);
					});
					let le, oe;
					const ae = async () => {
						if (le && oe) {
							const ye = await U.textModelService.createModelReference(oe.uri);
							ye.object.textEditorModel.changeDecorations((fe) => {
								fe.removeDecoration(le);
							}),
								ye.dispose(),
								(le = void 0),
								(oe = void 0);
						}
					};
					(0, a.onCleanup)(() => {
						ae();
					});
					const [pe, $e] = (0, a.createSignal)(0);
					return (
						(0, a.createEffect)(
							(0, a.on)([q, G, pe], ([ye, ue]) => {
								const fe = async () => {
									if (
										(await ae(),
										ue &&
											ye.groupIndex >= 0 &&
											ye.changeIndex >= 0 &&
											ye.leafIndex >= 0)
									) {
										const me = B.diffReviewData[ye.groupIndex];
										if (!me) return;
										const ve = me.fileChanges[ye.changeIndex];
										if (!ve) return;
										const ge = ve.changes[ye.leafIndex];
										if (!ge) return;
										const be = U.workspaceContextService.resolveRelativePath(
												ve.path,
											),
											Le = (await U.textModelService.createModelReference(be))
												.object.textEditorModel,
											Fe = {
												startLineNumber: ge.startLine,
												startColumn: 1,
												endLineNumber: ge.endLine - 1,
												endColumn: 1,
											},
											Oe = Le.changeDecorations((xe) =>
												xe.addDecoration(Fe, {
													marginClassName: "diff-review-decoration",
													description: "Diff review decoration",
												}),
											);
										Oe && ((le = Oe), (oe = { uri: be, initialRange: Fe }));
									}
								};
								setTimeout(() => {
									fe();
								});
							}),
						),
						(0, u.createComponent)(a.Show, {
							get when() {
								return (0, m.memo)(() => !B.isStale)() && re();
							},
							get children() {
								const ye = M();
								ye.addEventListener("blur", () => te(!1)),
									ye.addEventListener("focus", () => te(!0));
								const ue = J;
								return (
									typeof ue == "function" ? (0, w.use)(ue, ye) : (J = ye),
									ye.style.setProperty("display", "flex"),
									ye.style.setProperty("flex-direction", "column"),
									ye.style.setProperty("gap", "8px"),
									ye.style.setProperty("outline", "none"),
									ye.style.setProperty("margin-bottom", "12px"),
									ye.style.setProperty("margin-top", "16px"),
									(0, r.insert)(
										ye,
										(0, u.createComponent)(a.For, {
											get each() {
												return B.diffReviewData;
											},
											children: (fe, me) => {
												const ve = me();
												return (0, u.createComponent)(a.Show, {
													get when() {
														return fe.fileChanges.length > 0;
													},
													get children() {
														const ge = A(),
															be = ge.firstChild,
															Ce = be.firstChild,
															Le = Ce.nextSibling,
															Fe = Le.firstChild,
															Oe = Fe.firstChild;
														return (
															ge.style.setProperty("border-radius", "2px"),
															ge.style.setProperty("overflow", "hidden"),
															ge.style.setProperty("display", "flex"),
															ge.style.setProperty("flex-direction", "column"),
															ge.style.setProperty("gap", "6px"),
															be.addEventListener("click", () => {
																H((He) => {
																	const Ke = new Set();
																	if (q().groupIndex === ve)
																		if (He.has(ve)) {
																			for (let Je = 0; Je < ve; Je++)
																				He.has(Je) && Ke.add(Je);
																			B.onCollapseGroup?.(ve);
																		} else
																			for (let Je = 0; Je <= ve; Je++)
																				Ke.add(Je), B.onExpandGroup?.(Je);
																	else
																		for (let Je = 0; Je <= ve; Je++)
																			Ke.add(Je), B.onExpandGroup?.(Je);
																	return Ke;
																}),
																	Y({
																		groupIndex: ve,
																		changeIndex: 0,
																		leafIndex: 0,
																	}),
																	K(!0);
															}),
															be.style.setProperty("cursor", "pointer"),
															be.style.setProperty(
																"background",
																"var(--vscode-sideBar-background)",
															),
															be.style.setProperty("display", "flex"),
															be.style.setProperty("gap", "6px"),
															be.style.setProperty("font-size", "12px"),
															Ce.style.setProperty("flex-shrink", "0"),
															Ce.style.setProperty("scale", "0.8"),
															Ce.style.setProperty("height", "14px"),
															Ce.style.setProperty("display", "flex"),
															Ce.style.setProperty("align-items", "center"),
															Ce.style.setProperty("padding-top", "2px"),
															Le.style.setProperty("display", "flex"),
															Le.style.setProperty("flex-direction", "column"),
															Le.style.setProperty("gap", "2px"),
															Le.style.setProperty("flex-grow", "1"),
															Fe.style.setProperty("display", "flex"),
															Fe.style.setProperty(
																"justify-content",
																"space-between",
															),
															(0, r.insert)(Oe, () => fe.description),
															(0, r.insert)(
																ge,
																(0, u.createComponent)(a.Show, {
																	get when() {
																		return x().has(me());
																	},
																	get children() {
																		const xe = N();
																		return (
																			(0, r.insert)(
																				xe,
																				(0, u.createComponent)(a.For, {
																					get each() {
																						return fe.fileChanges;
																					},
																					children: (He, Ke) =>
																						(0, u.createComponent)(
																							R,
																							(0, i.mergeProps)(He, {
																								get groupIndex() {
																									return me();
																								},
																								get changeIndex() {
																									return Ke();
																								},
																								get isSelected() {
																									return (
																										(0, m.memo)(
																											() =>
																												!!(
																													G() &&
																													q().groupIndex ===
																														me()
																												),
																										)() &&
																										q().changeIndex === Ke()
																									);
																								},
																								get selectedLeafIndex() {
																									return (0, m.memo)(
																										() =>
																											!!(
																												G() &&
																												q().groupIndex ===
																													me() &&
																												q().changeIndex === Ke()
																											),
																									)()
																										? q().leafIndex
																										: void 0;
																								},
																								onClick: (Je, Te) => {
																									Y({
																										groupIndex: me(),
																										changeIndex: Ke(),
																										leafIndex: Je,
																										altKey: Te,
																									}),
																										setTimeout(() => {
																											J?.focus();
																										}, 100);
																								},
																								onAcceptLeaf: (Je, Te, Ee) => {
																									B.onAcceptLeaf?.(Je, Te, Ee),
																										setTimeout(() => {
																											J?.focus(), ne();
																										}, 100);
																								},
																								onRejectLeaf: (Je, Te, Ee) => {
																									B.onRejectLeaf?.(Je, Te, Ee),
																										setTimeout(() => {
																											J?.focus(), ne();
																										}, 100);
																								},
																								onAcceptGroupFileChanges:
																									() => {
																										B.onAcceptGroupFileChanges?.(
																											me(),
																											Ke(),
																										),
																											setTimeout(() => {
																												J?.focus(), ne();
																											}, 100);
																									},
																								onRejectGroupFileChanges:
																									() => {
																										B.onRejectGroupFileChanges?.(
																											me(),
																											Ke(),
																										),
																											setTimeout(() => {
																												J?.focus(), ne();
																											}, 100);
																									},
																							}),
																						),
																				}),
																			),
																			xe
																		);
																	},
																}),
																null,
															),
															(0, d.effect)(
																(xe) => {
																	const He = x().has(me())
																			? "1px solid var(--vscode-widget-border)"
																			: "none",
																		Ke = h.ThemeIcon.asClassName(
																			x().has(me())
																				? c.$ak.chevronDown
																				: c.$ak.chevronRight,
																		),
																		Je = x().has(me()) ? "1" : "0.7";
																	return (
																		He !== xe._v$8 &&
																			((xe._v$8 = He) != null
																				? be.style.setProperty(
																						"border-bottom",
																						He,
																					)
																				: be.style.removeProperty(
																						"border-bottom",
																					)),
																		Ke !== xe._v$9 &&
																			(0, C.className)(Ce, (xe._v$9 = Ke)),
																		Je !== xe._v$10 &&
																			((xe._v$10 = Je) != null
																				? Oe.style.setProperty("opacity", Je)
																				: Oe.style.removeProperty("opacity")),
																		xe
																	);
																},
																{ _v$8: void 0, _v$9: void 0, _v$10: void 0 },
															),
															ge
														);
													},
												});
											},
										}),
									),
									ye
								);
							},
						})
					);
				}
			},
		),
		define(
			de[4282],
			he([1, 0, 2, 2, 2, 13, 36, 167, 4281, 28, 41, 177, 485]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerDiffReviewMessage = void 0);
				const c = (0, t.template)("<div>hi"),
					n = (0, t.template)(
						"<div><div>The AI failed to produce a diff review.</div><div>",
					),
					g = (p) => {
						const o = (0, C.$odc)(),
							{ inlineDiffService: f, reactiveStorageService: b } = o,
							s = (0, E.createMemo)(() => p.bubbleId),
							{ currentComposer: l } = (0, a.useComposerDataHandle)(
								() => p.composerDataHandle,
							),
							y = (0, E.createMemo)(() => {
								const O = l();
								if (!O) throw new Error("[composer] No composer selected");
								const B = O.capabilities.find(
									(U) =>
										U.type ===
										d.ComposerCapabilityRequest_ComposerCapabilityType
											.DIFF_REVIEW,
								);
								if (B) return B;
							}),
							$ = (0, E.createMemo)(() => {
								const O = y();
								return !O || !O.aiBubbleId() ? !0 : O.aiBubbleId() !== s();
							}),
							v = (0, E.createMemo)(() => y()?.currentStep() ?? 0),
							S = (0, E.createMemo)(() => {
								const O = y();
								return O
									? O.relevantUris()
											.map((U) => {
												const z = U.toString(),
													F = b.nonPersistentStorage.inlineDiffs.find(
														(x) => x.uri.toString() === z,
													);
												return !F || "isMultiInlineDiff" in F ? null : F.id;
											})
											.filter(r.$tg)
									: [];
							}),
							I = (0, E.createMemo)(() => S().length > 0),
							T = async () => {
								if (!l()) return;
								const B = y()?.relevantUris() ?? [];
								if (B.length !== 0)
									for (const U of B) {
										const z = b.nonPersistentStorage.inlineDiffs.find(
											(F) => F.uri.toString() === U.toString(),
										)?.id;
										z && (await f.acceptDiff(z));
									}
							},
							P = async () => {
								if (!l()) return;
								const B = y()?.relevantUris() ?? [];
								for (const U of B) {
									const z = b.nonPersistentStorage.inlineDiffs.find(
										(F) => F.uri.toString() === U.toString(),
									)?.id;
									z && (await f.rejectDiff(z));
								}
							},
							k = async (O, B) => {
								const U = y();
								U && U.acceptLeafChange(O, B);
							},
							L = async (O, B) => {
								const U = y();
								U && U.rejectLeafChange(O, B);
							},
							D = (O, B) => {
								o.openerService.open(O, {
									openToSide: B,
									editorOptions: { preserveFocus: !0 },
								});
							},
							M = (O, B, U) => {
								o.openerService.open(
									(0, u.$8rb)(O, {
										startLineNumber: B,
										startColumn: 1,
										endLineNumber: B,
										endColumn: 1,
									}),
									{ openToSide: U, editorOptions: { preserveFocus: !0 } },
								);
							},
							N = async () => {
								const O = y();
								O && (await O.abort());
							},
							A = async (O, B) => {
								const U = y();
								U && (await U.acceptGroupFileChanges(O, B));
							},
							R = async (O, B) => {
								const U = y();
								U && (await U.rejectGroupFileChanges(O, B));
							};
						return (0, w.createComponent)(E.Show, {
							get when() {
								return y();
							},
							get fallback() {
								return (() => {
									const O = c();
									return O.style.setProperty("display", "none"), O;
								})();
							},
							children: (O) =>
								(0, w.createComponent)(E.Show, {
									get when() {
										return y()?.status() === "completed";
									},
									get fallback() {
										return (0, w.createComponent)(E.Show, {
											get when() {
												return y()?.status() === "failed";
											},
											get children() {
												const B = n(),
													U = B.firstChild,
													z = U.nextSibling;
												return (
													B.style.setProperty("margin-bottom", "12px"),
													B.style.setProperty("margin-top", "16px"),
													B.style.setProperty("display", "flex"),
													B.style.setProperty("flex-direction", "column"),
													B.style.setProperty("align-items", "center"),
													B.style.setProperty("gap", "6px"),
													z.style.setProperty("display", "flex"),
													z.style.setProperty("flex-direction", "row"),
													z.style.setProperty("gap", "6px"),
													z.style.setProperty("align-items", "center"),
													(0, i.insert)(
														z,
														(0, w.createComponent)(
															h.ComposerToolbarSimpleButton,
															{
																onClick: () => {
																	y()?.tryAgain();
																},
																type: "secondary",
																children: "Try again",
															},
														),
														null,
													),
													(0, i.insert)(
														z,
														(0, w.createComponent)(
															h.ComposerToolbarSimpleButton,
															{
																onClick: () => {
																	y()?.tryAgain(!0);
																},
																type: "primary",
																children: "Try again with a Premium Model",
															},
														),
														null,
													),
													B
												);
											},
										});
									},
									get children() {
										return (0, w.createComponent)(m.ComposerDiffReviewPure, {
											get composerDataHandle() {
												return p.composerDataHandle;
											},
											get diffReviewData() {
												return y()?.diffReviewData ?? [];
											},
											get isStale() {
												return $();
											},
											get scrollable() {
												return p.scrollable;
											},
											get messagesContainerRef() {
												return p.messagesContainerRef;
											},
											onSelectChange: (B, U) => {
												if (B.groupIndex === -1) return;
												const z =
													y()?.diffReviewData?.[B.groupIndex]?.fileChanges;
												if (!z || B.changeIndex === -1) return;
												const F = z[B.changeIndex];
												if (!F) return;
												const x = o.workspaceContextService.resolveRelativePath(
													F.path,
												);
												if (
													!(
														!U &&
														x.toString() !==
															o.editorService.activeEditor?.resource?.toString()
													)
												)
													if (B.leafIndex !== -1 && F.changes[B.leafIndex]) {
														const H = F.changes[B.leafIndex].startLine;
														M(x, H, B.altKey);
													} else D(x, B.altKey);
											},
											onAcceptLeaf: (B, U, z) => {
												if (B > v()) {
													console.error(
														"[composer] Cannot accept change from future step",
													);
													return;
												}
												const F = y()?.diffReviewData?.[B]?.fileChanges;
												if (!F) return;
												const x = F[U];
												if (!x) return;
												const H = x.changes[z];
												!H || H.startLine === void 0 || k(x.path, H.startLine);
											},
											onRejectLeaf: (B, U, z) => {
												if (B > v()) {
													console.error(
														"[composer] Cannot reject change from future step",
													);
													return;
												}
												const F = y()?.diffReviewData?.[B]?.fileChanges;
												if (!F) return;
												const x = F[U];
												if (!x) return;
												const H = x.changes[z];
												!H || H.startLine === void 0 || L(x.path, H.startLine);
											},
											onAcceptAll: T,
											onRejectAll: P,
											shouldShowAcceptRejectAll: I,
											onAbort: N,
											onAcceptGroupFileChanges: A,
											onRejectGroupFileChanges: R,
										});
									},
								}),
						});
					};
				e.ComposerDiffReviewMessage = g;
			},
		),
		define(
			de[4283],
			he([
				1, 0, 262, 351, 219, 83, 9, 25, 209, 126, 225, 167, 395, 45, 383, 42,
				47, 1190, 14, 191, 118, 4282, 48,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.DiffReview = void 0);
				const $ = "Review changes",
					v = "review-changes-button";
				function S(P, k) {
					return P.endLineNumberExclusive <= k.startLineNumber
						? o.RangeWhereIs.After
						: P.startLineNumber > k.endLineNumber ||
								(P.startLineNumber === k.endLineNumber && k.endColumn === 1)
							? o.RangeWhereIs.Before
							: o.RangeWhereIs.Overlap;
				}
				function I(P, k) {
					const L = P.length,
						D = k.length,
						M = Array(L + 1)
							.fill(0)
							.map(() => Array(D + 1).fill(0));
					for (let N = 0; N <= L; N++) M[N][0] = N;
					for (let N = 0; N <= D; N++) M[0][N] = N;
					for (let N = 1; N <= L; N++)
						for (let A = 1; A <= D; A++)
							P[N - 1] === k[A - 1]
								? (M[N][A] = M[N - 1][A - 1])
								: (M[N][A] =
										1 + Math.min(M[N - 1][A], M[N][A - 1], M[N - 1][A - 1]));
					return M[L][D];
				}
				let T = class extends t.ComposerCapability {
					constructor(k, L, D, M, N, A, R, O, B) {
						super(k, L),
							(this.composerDataService = D),
							(this.composerService = M),
							(this.reactiveStorageService = N),
							(this.workspaceContextService = A),
							(this.inlineDiffService = R),
							(this.textModelService = O),
							(this.aiService = B),
							(this.priority = 10),
							(this.type =
								a.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_REVIEW),
							(this.name =
								t.capabilityTypeLabels[
									a.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_REVIEW
								]),
							(this.schema = i.diffReviewSchema),
							(this._allDiffs = new Map()),
							(this._disposables = []),
							(this._skipModelChangeEvent = !1),
							(this._skipInlineDiffChangeEvent = !1),
							(this._mappedDiffs = new Map()),
							(this._uriVersions = new Map()),
							(this._isProcessingGroupAction = null),
							(this._shouldSkipClearText = !1),
							([this.diffReviewData, this.setDiffReviewData] = (0,
							t.createStore)([])),
							([this.currentStep, this.setCurrentStep] = (0, t.createSignal)(
								0,
							)),
							([this.relevantUris, this.setRelevantUris] = (0, t.createSignal)(
								[],
							)),
							([this.aiBubbleId, this.setAiBubbleId] = (0, t.createSignal)(
								null,
							)),
							([this.status, this.setStatus] = (0, t.createSignal)("loading"));
					}
					silentOnComposerDone(k) {
						return !0;
					}
					async onComposerDone(k) {
						this.composerDataService.getComposerData(this.composerId) &&
							this.shouldDoDiffReview() &&
							(this.reactiveStorageService.applicationUserPersistentStorage
								.composerState.shouldReviewChanges === "auto"
								? ((this._shouldSkipClearText = !0),
									this.composerService.submitChatMaybeAbortCurrent(
										k.composerId,
										"",
										{ useDiffReview: !0, isCapabilityIteration: !0 },
									))
								: (this.composerDataService.addActionButton(
										k.composerId,
										$,
										() => (
											this.composerService.submitChatMaybeAbortCurrent(
												k.composerId,
												"",
												{ useDiffReview: !0, isCapabilityIteration: !0 },
											),
											!0
										),
										{
											icon: f.$ak.openPreview,
											id: v,
											hintText: "Group changes semantically to review them",
										},
									),
									this._disposables.push(
										this.reactiveStorageService.onChangeEffectManuallyDisposed({
											deps: [
												() =>
													this.composerDataService.getAllInlineDiffs(
														this.composerId,
													),
											],
											onChange: ({ deps: D }) => {
												D[0].length === 0 &&
													this.composerDataService
														.getActionButtons(this.composerId)
														.filter((N) => N.label === $).length > 0 &&
													this.composerDataService.removeActionButton(
														this.composerId,
														v,
													);
											},
										}),
									)));
					}
					silentRunInPlaceMutateRequestBeforeSubmit(k) {
						return !0;
					}
					silentOnBeforeSubmitChat(k) {
						return !0;
					}
					async onStartSubmitChatReturnShouldStop(k, L) {
						const D = this._shouldSkipClearText;
						this._shouldSkipClearText = !1;
						const M = this.composerDataService.getComposerData(this.composerId);
						if (!M || (this.reset(), !this.shouldDoDiffReview(k))) return !1;
						let N = {
							...(0, u.createDefaultConversationMessage)(),
							codeBlocks: [],
							type: r.ConversationMessage_MessageType.AI,
							text: "",
							isThought: !1,
							isCapabilityIteration: !1,
							timingInfo: {
								clientStartTime: Date.now(),
								clientRpcSendTime: Date.now(),
							},
							capabilityType:
								a.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_REVIEW,
						};
						this.setAiBubbleId(N.bubbleId),
							this.composerDataService.updateComposerData(this.composerId, {
								conversation: [...M.conversation, N],
								generatingBubbleIds: [
									...(M.generatingBubbleIds ?? []),
									N.bubbleId,
								],
								status: "generating",
							}),
							this.setStatus("loading");
						const A = this.composerDataService.getAllInlineDiffs(
							this.composerId,
						);
						D || this.composerService.clearText(this.composerId),
							await this.composerService.saveAll(this.composerId, {
								skipSaveParticipants: !0,
								force: !0,
							});
						const R = [];
						for (const x of A)
							if (x) {
								const H = new a.$0z({
									relativeWorkspacePath:
										this.workspaceContextService.asRelativePath(x.uri),
									chunks: [],
								});
								for (const q of x.changes) {
									const V = x.newTextLines.slice(
											q.addedRange.startLineNumber - 1,
											q.addedRange.endLineNumberExclusive - 1,
										),
										G = [...q.removedTextLines],
										K = new a.$$z({
											oldLines: G,
											newLines: V,
											oldRange: new E.$Ms({
												startLineNumber:
													q.removedLinesOriginalRange.startLineNumber,
												endLineNumberInclusive:
													q.removedLinesOriginalRange.endLineNumberExclusive -
													1,
											}),
											newRange: new E.$Ms({
												startLineNumber: q.addedRange.startLineNumber,
												endLineNumberInclusive:
													q.addedRange.endLineNumberExclusive - 1,
											}),
										});
									H.chunks.push(K);
								}
								R.push(H);
							}
						const O = {
								diffs: R,
								customInstructions: this.data.customInstructions,
								usePremiumModel: L,
							},
							B = await this.aiService.aiClient();
						let U = 0;
						const z = 5;
						let F = !1;
						for (; U < z && !F; )
							try {
								if (this.isAborted())
									return (
										this.reset(),
										this.composerDataService.updateComposerData(
											this.composerId,
											{
												generatingBubbleIds:
													M.generatingBubbleIds?.filter(
														(G) => G !== N.bubbleId,
													) ?? [],
												chatGenerationUUID: void 0,
											},
										),
										!0
									);
								const x = this.getAbortSignal(),
									H = M.chatGenerationUUID ?? (0, p.$9g)(),
									q = B.streamDiffReview(O, {
										signal: x,
										headers: (0, b.$m6b)(H),
									});
								let V = "";
								for await (const G of q) {
									const { text: K } = G;
									V += K;
								}
								if (
									this.reactiveStorageService.nonPersistentStorage.composerState
										.shouldSimulateDiffReviewError
								)
									throw new Error("Simulated diff review error");
								this.processContent(V),
									(F = !0),
									this.composerDataService.updateComposerData(this.composerId, {
										generatingBubbleIds:
											M.generatingBubbleIds?.filter((G) => G !== N.bubbleId) ??
											[],
										chatGenerationUUID: void 0,
										status: "completed",
									}),
									this.setStatus("completed");
							} catch (x) {
								if ((U++, U === z && !this.isAborted()))
									return (
										console.error(
											"[composer] Failed to process content after max retries:",
											x,
										),
										this.setStatus("failed"),
										this.composerDataService.updateComposerData(
											this.composerId,
											{
												generatingBubbleIds:
													M.generatingBubbleIds?.filter(
														(H) => H !== this.aiBubbleId(),
													) ?? [],
												chatGenerationUUID: void 0,
												status: "completed",
											},
										),
										!0
									);
								await new Promise((H) => setTimeout(H, 200));
							}
						return (
							this.isAborted() &&
								(this.reset(),
								this.composerDataService.updateComposerData(this.composerId, {
									generatingBubbleIds:
										M.generatingBubbleIds?.filter((x) => x !== N.bubbleId) ??
										[],
									chatGenerationUUID: void 0,
								})),
							!0
						);
					}
					tryAgain(k = !1) {
						let L;
						this._params
							? (L = { ...this._params })
							: (L = {
									composerId: this.composerId,
									submitChatProps: { text: "", extra: { useDiffReview: !0 } },
								}),
							this.reset(),
							this.onStartSubmitChatReturnShouldStop(L, k);
					}
					renderAIBubble() {
						return l.ComposerDiffReviewMessage;
					}
					shouldDoDiffReview(k) {
						if (
							this.reactiveStorageService.applicationUserPersistentStorage
								.composerState.shouldReviewChanges === "disabled"
						)
							return !1;
						const L = this.composerDataService.getComposerData(this.composerId);
						if (!L) return !1;
						let D = !1;
						return (
							k
								? k.submitChatProps.extra?.useDiffReview
									? (D = !0)
									: (D = L.context?.useDiffReview ?? !1)
								: (D = !0),
							this.composerDataService.getAllInlineDiffs(this.composerId)
								.length > 0 && D
						);
					}
					shouldRunInPlaceMutateRequestBeforeSubmit(k) {
						return !0;
					}
					async runInPlaceMutateRequestBeforeSubmit(k, L) {
						const { composerId: D } = L;
						this.composerDataService.getComposerData(D) &&
							(k.conversation = k.conversation?.filter((N, A) => {
								if (N.bubbleId === L.humanBubbleId) return !0;
								if (N.type === r.ConversationMessage_MessageType.HUMAN)
									return !N.context?.useDiffReview;
								if (N.type === r.ConversationMessage_MessageType.AI && A > 0) {
									const R = k.conversation?.[A - 1];
									if (R && R.type === r.ConversationMessage_MessageType.HUMAN)
										return !R.context?.useDiffReview;
								}
								return !0;
							}));
					}
					async processContent(k) {
						const L = this.parseDiffReviewCodeBlock(k);
						if (L === null)
							throw new Error(
								"[composer] Failed to parse DiffReview code block content",
							);
						this.setDiffReviewData(L),
							this.setCurrentStep(L.length - 1),
							this.setRelevantUris(
								Array.from(this._allDiffs.keys()).map((D) => C.URI.parse(D)),
							),
							this.setupModelChangeListeners(),
							this.updateChanges();
					}
					parseDiffReviewCodeBlock(k) {
						try {
							const L = JSON.parse(k);
							if (!Array.isArray(L)) return null;
							(this._allDiffs = new Map()), (this._mappedDiffs = new Map());
							const D = [];
							if (!this.composerDataService.getComposerData(this.composerId))
								return null;
							const N = this.composerDataService.getAllInlineDiffs(
								this.composerId,
							);
							for (const R of N)
								this._uriVersions.set(
									R.uri.toString(),
									R.composerMetadata?.version ?? 0,
								);
							const A = new Map();
							for (const R of N) A.set(R.uri.toString(), new Set());
							L.forEach((R, O) => {
								if (
									!(
										typeof R != "object" ||
										typeof R.description != "string" ||
										typeof R.isExtra != "boolean" ||
										!Array.isArray(R.diffs)
									)
								) {
									D.push({
										description: R.description,
										isExtra: R.isExtra,
										fileChanges: [],
									});
									for (const B of R.diffs) {
										if (
											!Array.isArray(B) ||
											B.length !== 2 ||
											typeof B[0] != "string" ||
											typeof B[1] != "number"
										)
											continue;
										const [U, z] = B,
											F = this.workspaceContextService.resolveRelativePath(U),
											x = F.toString();
										this._allDiffs.has(x) || this._allDiffs.set(x, []),
											this._mappedDiffs.has(x) || this._mappedDiffs.set(x, []),
											A.has(x) || A.set(x, new Set()),
											A.get(x).add(z);
										const H =
											this.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
												(K) => K.uri.toString() === x,
											);
										if (!H || "isMultiInlineDiff" in H) continue;
										const q = H.changes[z];
										if (!q) continue;
										const V = {
												diff: {
													uri: F,
													change: {
														originalRange: {
															startLineNumber:
																q.removedLinesOriginalRange.startLineNumber,
															endLineNumberExclusive:
																q.removedLinesOriginalRange
																	.endLineNumberExclusive,
														},
														originalRangeAdjusted: {
															startLineNumber:
																q.removedLinesOriginalRange.startLineNumber,
															endLineNumberExclusive:
																q.removedLinesOriginalRange
																	.endLineNumberExclusive,
														},
														newLines: H.newTextLines.slice(
															q.addedRange.startLineNumber - 1,
															q.addedRange.endLineNumberExclusive - 1,
														),
													},
													status: "pending",
												},
												groupIndex: O,
											},
											G = {
												...V,
												diff: {
													...V.diff,
													uri: H.uri,
													change: {
														...V.diff.change,
														addedRange: {
															startLineNumber: q.addedRange.startLineNumber,
															endLineNumberExclusive:
																q.addedRange.endLineNumberExclusive,
														},
													},
													isIndentation: !!q.indentation,
													indentationSections:
														this.calculateIndentationSections(q),
												},
												changeIndex: z,
											};
										this._allDiffs.get(x).push(V),
											this._mappedDiffs.get(x).push(G);
									}
								}
							});
							for (const [R, O] of A.entries()) {
								const B =
									this.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
										(z) => z.uri.toString() === R,
									);
								if (!B || "isMultiInlineDiff" in B) continue;
								const U = B.changes.filter((z, F) => !O.has(F));
								if (U.length > 0) {
									const z = C.URI.parse(R);
									let F = D.length - 1;
									D[F].isExtra ||
										(D.push({
											description: "Additional changes",
											isExtra: !0,
											fileChanges: [],
										}),
										F++);
									for (let x = 0; x < U.length; x++) {
										const H = U[x],
											q = {
												diff: {
													uri: z,
													change: {
														originalRange: {
															startLineNumber:
																H.removedLinesOriginalRange.startLineNumber,
															endLineNumberExclusive:
																H.removedLinesOriginalRange
																	.endLineNumberExclusive,
														},
														originalRangeAdjusted: {
															startLineNumber:
																H.removedLinesOriginalRange.startLineNumber,
															endLineNumberExclusive:
																H.removedLinesOriginalRange
																	.endLineNumberExclusive,
														},
														newLines: B.newTextLines.slice(
															H.addedRange.startLineNumber - 1,
															H.addedRange.endLineNumberExclusive - 1,
														),
													},
													status: "pending",
												},
												groupIndex: F,
											},
											V = {
												...q,
												diff: {
													...q.diff,
													change: {
														...q.diff.change,
														addedRange: {
															startLineNumber: H.addedRange.startLineNumber,
															endLineNumberExclusive:
																H.addedRange.endLineNumberExclusive,
														},
													},
													isIndentation: !!H.indentation,
													indentationSections:
														this.calculateIndentationSections(H),
												},
												changeIndex: x,
											};
										this._allDiffs.has(R) || this._allDiffs.set(R, []),
											this._mappedDiffs.has(R) || this._mappedDiffs.set(R, []),
											this._allDiffs.get(R).push(q),
											this._mappedDiffs.get(R).push(V);
									}
								}
							}
							for (const R of this._allDiffs.values())
								R.sort(
									(O, B) =>
										O.diff.change.originalRangeAdjusted.startLineNumber -
										B.diff.change.originalRangeAdjusted.startLineNumber,
								);
							for (const R of this._mappedDiffs.values())
								R.sort(
									(O, B) =>
										O.diff.change.originalRange.startLineNumber -
										B.diff.change.originalRange.startLineNumber,
								);
							return D.length > 0 ? D : null;
						} catch (L) {
							return (
								console.error(
									"[composer] Error parsing diff review code block:",
									L,
								),
								null
							);
						}
					}
					setupModelChangeListeners() {
						this._disposables.forEach((k) => k.dispose()),
							(this._disposables = []);
						for (const [k, L] of this._allDiffs.entries()) {
							const D = C.URI.parse(k);
							this.textModelService.createModelReference(D).then((N) => {
								const A = N.object.textEditorModel.onDidChangeContent((R) => {
									this.handleModelContentChange(k, R);
								});
								this._disposables.push(A), this._disposables.push(N);
							});
						}
						this._disposables.push(
							this.reactiveStorageService.onChangeEffectManuallyDisposed({
								deps: [
									() =>
										this.reactiveStorageService.nonPersistentStorage
											.inlineDiffs,
								],
								onChange: ({ deps: [k] }) => {
									this.handleInlineDiffChange(k);
								},
							}),
						);
					}
					findClosestGroupIndex(k, L) {
						if (L.length === 0) return this.currentStep();
						let D = this.currentStep(),
							M = Number.MAX_SAFE_INTEGER;
						for (const N of L) {
							if (k.uri.toString() !== N.diff.uri.toString()) continue;
							const A = N.diff.change.originalRange.startLineNumber,
								R = N.diff.change.originalRange.endLineNumberExclusive,
								O = k.removedLinesOriginalRange.startLineNumber,
								B = k.removedLinesOriginalRange.endLineNumberExclusive,
								U = Math.abs(A - O),
								z = Math.abs(A - B),
								F = Math.abs(R - O),
								x = Math.abs(R - B),
								H = Math.min(U, z, F, x);
							H < M && ((M = H), (D = N.groupIndex));
						}
						return D;
					}
					handleInlineDiffChange(k) {
						if (!k || this._skipInlineDiffChangeEvent) return;
						const L = new Set(Array.from(this._mappedDiffs.keys()));
						for (const D of L) {
							const M = k.find((U) => U.uri.toString() === D),
								N = this._mappedDiffs.get(D) || [];
							if (!M) {
								this._mappedDiffs.delete(D);
								continue;
							}
							const A = M.changes.map((U) => ({
									...U,
									newLines: M.newTextLines.slice(
										U.addedRange.startLineNumber - 1,
										U.addedRange.endLineNumberExclusive - 1,
									),
								})),
								R = this.mapDiffsToNewChanges(M.uri, N, A),
								O = [],
								B = new Set();
							for (const U of R) {
								const z = N[U.originalChangeIndex],
									F = A[U.newChangeIndex];
								B.add(U.newChangeIndex);
								const x = this.calculateIndentationSections(F);
								O.push({
									diff: {
										uri: M.uri,
										change: {
											originalRange: {
												startLineNumber:
													F.removedLinesOriginalRange.startLineNumber,
												endLineNumberExclusive:
													F.removedLinesOriginalRange.endLineNumberExclusive,
											},
											addedRange: {
												startLineNumber: F.addedRange.startLineNumber,
												endLineNumberExclusive:
													F.addedRange.endLineNumberExclusive,
											},
											newLines: [...F.newLines],
										},
										status: z.diff.status,
										isIndentation: !!F.indentation,
										indentationSections: x,
									},
									groupIndex: z.groupIndex,
									changeIndex: U.newChangeIndex,
								});
							}
							for (let U = 0; U < A.length; U++)
								if (!B.has(U)) {
									const z = A[U],
										F = this.calculateIndentationSections(z),
										x = this.findClosestGroupIndex(
											{
												removedLinesOriginalRange: {
													startLineNumber:
														z.removedLinesOriginalRange.startLineNumber,
													endLineNumberExclusive:
														z.removedLinesOriginalRange.endLineNumberExclusive,
												},
												uri: M.uri,
											},
											O,
										);
									O.push({
										diff: {
											uri: M.uri,
											change: {
												originalRange: {
													startLineNumber:
														z.removedLinesOriginalRange.startLineNumber,
													endLineNumberExclusive:
														z.removedLinesOriginalRange.endLineNumberExclusive,
												},
												addedRange: {
													startLineNumber: z.addedRange.startLineNumber,
													endLineNumberExclusive:
														z.addedRange.endLineNumberExclusive,
												},
												newLines: [...z.newLines],
											},
											status: "pending",
											isIndentation: !!z.indentation,
											indentationSections: F,
										},
										groupIndex: x,
										changeIndex: U,
									});
								}
							O.length > 0
								? this._mappedDiffs.set(D, O)
								: this._mappedDiffs.delete(D);
						}
						this.updateChanges();
					}
					handleModelContentChange(k, L) {
						if (this._skipModelChangeEvent) return;
						const D = this._allDiffs.get(k);
						if (D) {
							for (const M of L.changes) this.updateDiffsForChange(D, M);
							D.sort(
								(M, N) =>
									M.diff.change.originalRangeAdjusted.startLineNumber -
									N.diff.change.originalRangeAdjusted.startLineNumber,
							),
								this.updateChanges();
						}
					}
					updateDiffsForChange(k, L) {
						const D =
							L.text.split(`
`).length -
							(L.range.endLineNumber - L.range.startLineNumber + 1);
						for (let M = k.length - 1; M >= 0; M--) {
							const N = k[M];
							if (N.groupIndex <= this.currentStep()) continue;
							const A = {
								startLineNumber:
									N.diff.change.originalRangeAdjusted.startLineNumber,
								endLineNumberExclusive:
									N.diff.change.originalRangeAdjusted.endLineNumberExclusive,
							};
							switch (S(A, L.range)) {
								case o.RangeWhereIs.After:
									break;
								case o.RangeWhereIs.Before:
									(N.diff.change.originalRangeAdjusted.startLineNumber += D),
										(N.diff.change.originalRangeAdjusted.endLineNumberExclusive +=
											D);
									break;
								case o.RangeWhereIs.Overlap: {
									const O = L.range.startLineNumber,
										B = L.range.endLineNumber,
										U = A.startLineNumber,
										z = A.endLineNumberExclusive - 1;
									O >= U && B <= z
										? (N.diff.change.originalRangeAdjusted.endLineNumberExclusive +=
												D)
										: O >= U && O <= z
											? (N.diff.change.originalRangeAdjusted.endLineNumberExclusive =
													O)
											: O <= U && B <= z
												? ((N.diff.change.originalRangeAdjusted.startLineNumber =
														B + D + 1),
													(N.diff.change.originalRangeAdjusted.endLineNumberExclusive +=
														D))
												: O < U && B > z
													? ((N.diff.change.originalRangeAdjusted.startLineNumber =
															B + D + 1),
														(N.diff.change.originalRangeAdjusted.endLineNumberExclusive =
															B + D + 1))
													: console.error(
															"[composer] Unhandled overlapping diffs detected.",
															JSON.parse(JSON.stringify(N)),
															JSON.parse(JSON.stringify(L)),
														);
									break;
								}
							}
						}
					}
					dispose() {
						super.dispose(), this.reset();
					}
					reset() {
						this.deleteAiBubble(),
							this.setDiffReviewData([]),
							this.setCurrentStep(0),
							this.setRelevantUris([]),
							this.setAiBubbleId(null),
							this._disposables.forEach((k) => k.dispose()),
							(this._disposables = []),
							(this._allDiffs = new Map()),
							(this._mappedDiffs = new Map()),
							(this._skipModelChangeEvent = !1),
							(this._uriVersions = new Map()),
							(this._params = void 0),
							(this._isProcessingGroupAction = null);
					}
					updateChanges() {
						const k = (0, t.unwrap)(this.diffReviewData);
						if (!k) return;
						const L = new Map();
						for (let A = 0; A <= this.currentStep(); A++) {
							const R = new Map();
							for (const [O, B] of this._mappedDiffs.entries()) {
								const U = C.URI.parse(O),
									z = this.workspaceContextService.asRelativePath(U),
									F = B.filter((x) => x.groupIndex === A);
								for (const x of F) {
									const { startLineNumber: H, endLineNumberExclusive: q } =
											x.diff.change.addedRange,
										{ startLineNumber: V, endLineNumberExclusive: G } =
											x.diff.change.originalRange,
										K = x.diff.change.newLines,
										J = G - V,
										W = K.length;
									R.has(z) ||
										R.set(z, {
											path: z,
											startLine: H,
											endLine: q,
											status: x.diff.status,
											changes: [],
										});
									const X = R.get(z);
									(X.startLine = Math.min(X.startLine, H)),
										(X.endLine = Math.max(X.endLine, q)),
										X.changes.push({
											startLine: H,
											endLine: q,
											addedLines: W,
											removedLines: J,
											changeIndex: x.changeIndex,
											isIndentation: x.diff.isIndentation,
											indentationSections: x.diff.indentationSections,
										});
								}
							}
							L.has(A) || L.set(A, []),
								L.get(A).push(...Array.from(R.values()));
						}
						for (const [A, R] of this._allDiffs.entries()) {
							const O = C.URI.parse(A),
								B = this.workspaceContextService.asRelativePath(O),
								U = new Map();
							for (const z of R) {
								const { groupIndex: F } = z;
								if (F <= this.currentStep()) continue;
								L.has(F) || L.set(F, []);
								const { startLineNumber: x, endLineNumberExclusive: H } =
										z.diff.change.originalRangeAdjusted,
									q = z.diff.change.newLines,
									V = H - x,
									G = q.length;
								U.has(F) ||
									(U.set(F, {
										path: B,
										startLine: x,
										endLine: H,
										status: z.diff.status,
										changes: [],
									}),
									L.get(F).push(U.get(F)));
								const K = U.get(F);
								(K.startLine = Math.min(K.startLine, x)),
									(K.endLine = Math.max(K.endLine, H)),
									K.changes.push({
										startLine: x,
										endLine: H,
										addedLines: G,
										removedLines: V,
										changeIndex: -1,
									});
							}
						}
						const D = [...k],
							M = new Set();
						for (const [A, R] of L) {
							const O = D[A]?.fileChanges;
							(!O || !this.areChangesEqual(O, R)) &&
								(M.add(A), (D[A] = { ...D[A], fileChanges: R }));
						}
						if (D.every((A) => A?.fileChanges.length === 0)) {
							this.deleteAiBubble();
							return;
						}
						if (M.size > 0) for (const A of M) this.setDiffReviewData(A, D[A]);
						this.processRemainingGroupChanges();
					}
					deleteAiBubble() {
						const k = this.aiBubbleId();
						k &&
							this.composerDataService.updateComposerDataSetStore(
								this.composerId,
								(L) =>
									L("conversation", (D) => D.filter((M) => M.bubbleId !== k)),
							);
					}
					areChangesEqual(k, L) {
						return k.length !== L.length
							? !1
							: k.every((D, M) => {
									const N = L[M];
									return D.path !== N.path ||
										D.startLine !== N.startLine ||
										D.endLine !== N.endLine ||
										D.status !== N.status ||
										D.changes.length !== N.changes.length
										? !1
										: D.changes.every((A, R) => {
												const O = N.changes[R];
												return (
													A.startLine === O.startLine &&
													A.endLine === O.endLine &&
													A.addedLines === O.addedLines &&
													A.removedLines === O.removedLines &&
													("changeIndex" in A && "changeIndex" in O
														? A.changeIndex === O.changeIndex
														: !0)
												);
											});
								});
					}
					calculateDiffSimilarity(k, L) {
						const D = k.change.originalRange.startLineNumber,
							M = k.change.originalRange.endLineNumberExclusive,
							N = L.removedLinesOriginalRange.startLineNumber,
							A = L.removedLinesOriginalRange.endLineNumberExclusive;
						if (D === N && M === A) {
							const F = k.change.newLines.join(`
`),
								x = L.newLines.join(`
`);
							if (F === x) return 1;
						}
						const R = k.change.newLines.join(`
`),
							O = L.newLines.join(`
`);
						let B;
						R.length === 0 && O.length === 0
							? (B = 1)
							: R.length === 0 || O.length === 0
								? (B = 0)
								: (B = 1 - I(R, O) / Math.max(R.length, O.length));
						const U = Math.max(M, A) - Math.min(D, N);
						let z;
						if (U === 0) z = 1;
						else {
							const F = Math.abs(D - N),
								x = Math.abs(M - A);
							z = 1 - Math.min(Math.log(F + x + 1) / Math.log(10 + 1), 1);
						}
						return B > 0.9 ? Math.max(0.9, z) : 0.7 * B + 0.3 * z;
					}
					mapDiffsToNewChanges(k, L, D) {
						const M = [],
							N = new Set();
						for (let A = 0; A < L.length; A++) {
							let R = -1,
								O = 0;
							for (let B = 0; B < D.length; B++) {
								if (N.has(B)) continue;
								const U = this.calculateDiffSimilarity(L[A].diff, D[B]);
								U > O && U > 0.7 && ((O = U), (R = B));
							}
							R !== -1 &&
								(M.push({
									uri: k,
									originalChangeIndex: A,
									newChangeIndex: R,
									similarity: O,
								}),
								N.add(R));
						}
						return M;
					}
					calculateIndentationSections(k) {
						if (!k.indentation) return;
						const L = k.indentation.range,
							D = k.addedRange;
						return {
							preSandwich: { lines: L.startLineNumber - D.startLineNumber },
							indentation: {
								lines: L.endLineNumberExclusive - L.startLineNumber,
							},
							postSandwich: {
								lines: D.endLineNumberExclusive - L.endLineNumberExclusive,
							},
						};
					}
					async abort() {
						await this.composerService.rejectAll(this.composerId, {
							rejectSilently: !0,
						});
						for (const [k, L] of this._uriVersions) {
							const D = C.URI.parse(k);
							await this.composerService.turnApplyToInlineDiff(
								this.composerId,
								D,
								L,
							);
						}
						this.reset();
					}
					async acceptGroupFileChanges(k, L) {
						const D = this.diffReviewData[k],
							M = D?.fileChanges[L]?.changes ?? [];
						if (M.length === 0) return;
						this._isProcessingGroupAction = {
							groupIndex: k,
							path: D.fileChanges[L].path,
							action: "accept",
						};
						const N = D.fileChanges[L].path;
						for (const A of M)
							if (A.startLine) {
								this.acceptLeafChange(N, A.startLine);
								return;
							}
					}
					async rejectGroupFileChanges(k, L) {
						const D = this.diffReviewData[k],
							M = D?.fileChanges[L]?.changes ?? [];
						if (M.length === 0) return;
						this._isProcessingGroupAction = {
							groupIndex: k,
							path: D.fileChanges[L].path,
							action: "reject",
						};
						const N = D.fileChanges[L].path;
						for (const A of M)
							if (A.startLine) {
								this.rejectLeafChange(N, A.startLine);
								return;
							}
					}
					acceptLeafChange(k, L) {
						const D = this.workspaceContextService.resolveRelativePath(k),
							M =
								this.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
									(A) => A.uri.toString() === D.toString(),
								)?.id;
						!M ||
							!this.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
								(A) => A.id === M,
							) ||
							this.inlineDiffService.acceptPartialDiff(M, new y.$hL(L, 1));
					}
					rejectLeafChange(k, L) {
						const D = this.workspaceContextService.resolveRelativePath(k),
							M =
								this.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
									(A) => A.uri.toString() === D.toString(),
								)?.id;
						!M ||
							!this.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
								(A) => A.id === M,
							) ||
							this.inlineDiffService.rejectPartialDiff(M, new y.$hL(L, 1));
					}
					async processRemainingGroupChanges() {
						if (!this._isProcessingGroupAction) return;
						const {
								groupIndex: k,
								path: L,
								action: D,
							} = this._isProcessingGroupAction,
							M = this.diffReviewData[k];
						if (!M || M.fileChanges.length === 0) {
							this._isProcessingGroupAction = null;
							return;
						} else if (
							L &&
							(M.fileChanges.find((N) => N.path === L)?.changes.length ?? 0) ===
								0
						) {
							this._isProcessingGroupAction = null;
							return;
						}
						for (const N of M.fileChanges)
							if (!(L && N.path !== L)) {
								for (const A of N.changes)
									if (A.startLine)
										if (D === "accept") {
											this.acceptLeafChange(N.path, A.startLine);
											return;
										} else {
											this.rejectLeafChange(N.path, A.startLine);
											return;
										}
							}
					}
				};
				(e.DiffReview = T),
					(e.DiffReview = T =
						Ne(
							[
								(0, h.autoCancellableAndStatusUpdater)(),
								j(2, m.IComposerDataService),
								j(3, w.IComposerService),
								j(4, c.$0zb),
								j(5, d.$Vi),
								j(6, n.$27b),
								j(7, g.$MO),
								j(8, s.$Nfc),
							],
							T,
						)),
					(0, t.registerComposerCapability)(
						a.ComposerCapabilityRequest_ComposerCapabilityType.DIFF_REVIEW,
						T,
					);
			},
		),
		define(
			de[4284],
			he([1, 0, 2, 13, 14, 225, 485, 1004, 36]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerMessageCodeblockActions = r);
				function r(u) {
					const a = (0, m.$odc)(),
						h = { height: "16px", padding: "0px 3px" },
						c = (0, t.createComponent)(C.ComposerToolbarSimpleButton, {
							get style() {
								return {
									...h,
									"background-color": u.actionMenuPosition
										? "var(--vscode-input-background)"
										: void 0,
									gap: "4px",
								};
							},
							type: "secondary",
							hintText: "Apply",
							get onClick() {
								return u.onApplyClick;
							},
							get codicon() {
								return w.$ak.play;
							},
							title: "Apply",
						});
					return (0, t.createComponent)(d.$q$b, {
						get forceRerender() {
							return u.forceToolsRerender;
						},
						style: {
							display: "flex",
							"align-items": "center",
							padding: "0px 4px",
						},
						forceGap: 2,
						get children() {
							return [
								(0, t.createComponent)(C.ComposerToolbarSimpleButton, {
									type: "secondary",
									onClick: (n) => {
										n.stopPropagation(),
											u.handleCopy(),
											a.analyticsService.trackEvent("composer.code_block.copy");
									},
									get codicon() {
										return u.copyEnabled ? w.$ak.copy : w.$ak.check;
									},
									get hintText() {
										return u.copyEnabled ? "Copy" : "Copied";
									},
									get style() {
										return {
											...h,
											opacity: u.isMouseOver ? 1 : 0,
											transition: "opacity 0.1s ease-in-out",
										};
									},
								}),
								(0, t.createComponent)(i.Show, {
									get when() {
										return (
											E.REAPPLY_RELATED_STATUSES.includes(u.currentStatus) &&
											!u.reactiveCodeBlock?.isNotApplied
										);
									},
									get fallback() {
										return (0, t.createComponent)(i.Show, {
											get when() {
												return (
													E.APPLY_RELATED_STATUSES.includes(u.currentStatus) &&
													u.reactiveCodeBlock?.isNotApplied
												);
											},
											children: c,
										});
									},
									get children() {
										return (0, t.createComponent)(
											C.ComposerToolbarSimpleButton,
											{
												type: "secondary",
												onClick: (n) => {
													n.stopPropagation(),
														a.analyticsService.trackEvent(
															"composer.code_block.reapply",
														),
														a.composerService.reapply(
															u.composerId,
															u.codeBlockUri,
															u.versionExcludingNonAppliedCodeblocks,
														);
												},
												get codicon() {
													return w.$ak.refresh;
												},
												hintText: "Reapply",
												get style() {
													return {
														...h,
														opacity:
															u.isMouseOver || u.currentStatus === "cancelled"
																? 1
																: 0,
														transition: "opacity 0.1s ease-in-out",
													};
												},
											},
										);
									},
								}),
								(0, t.createComponent)(i.Show, {
									get when() {
										return u.shouldShowAcceptReject;
									},
									get children() {
										return (0, t.createComponent)(
											C.ComposerToolbarSimpleButton,
											{
												type: "secondary",
												onClick: (n) => {
													n.stopPropagation(),
														a.analyticsService.trackEvent(
															"composer.code_block.reject",
														),
														a.composerService.reject(
															u.composerId,
															u.codeBlockUri,
															u.codeBlockVersion,
														);
												},
												style: h,
												get codicon() {
													return w.$ak.close;
												},
												hintText: "Reject",
											},
										);
									},
								}),
								(0, t.createComponent)(i.Show, {
									get when() {
										return u.shouldShowAcceptReject;
									},
									get children() {
										return (0, t.createComponent)(
											C.ComposerToolbarSimpleButton,
											{
												type: "secondary",
												onClick: (n) => {
													n.stopPropagation(),
														a.analyticsService.trackEvent(
															"composer.code_block.accept",
														),
														a.composerService.accept(
															u.composerId,
															u.codeBlockUri,
															u.codeBlockVersion,
														);
												},
												style: h,
												get codicon() {
													return w.$ak.check;
												},
												hintText: "Accept",
											},
										);
									},
								}),
								(0, t.createComponent)(i.Show, {
									get when() {
										return u.hasDiffData && u.canShowDiff;
									},
									get children() {
										return (0, t.createComponent)(
											C.ComposerToolbarSimpleButton,
											{
												type: "secondary",
												get codicon() {
													return u.preferShowType === "diff"
														? w.$ak.codeOss
														: w.$ak.compareChanges;
												},
												get hintText() {
													return u.preferShowType === "diff"
														? "Show code"
														: "Show diff";
												},
												style: h,
												onClick: (n) => {
													n.stopPropagation();
													const g =
														u.preferShowType === "diff" ? "code" : "diff";
													a.analyticsService.trackEvent(
														"composer.code_block.toggle_diff",
														{ preferShowType: g },
													),
														u.setNonChatCollapsed(!1),
														u.setPreferShowType(g);
												},
											},
										);
									},
								}),
							];
						},
					});
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[1378],
		he([
			1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 14, 54, 26, 9, 565, 36, 156, 169,
			295, 331, 123, 312, 1709, 64, 246, 309, 311, 484, 1372, 364, 428, 852,
			1373, 41, 196, 74, 160, 135, 7, 177, 1370, 242, 27, 502, 4284, 2414,
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
			A,
			R,
			O,
			B,
			U,
			z,
			F,
			x,
			H,
			q,
			V,
			G,
			K,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ComposerMessageCodeblock = se),
				(L = xi(L));
			const J = (0, t.template)("<span>/"),
				W = (0, t.template)("<span>+"),
				X = (0, t.template)("<span>-"),
				Y = (0, t.template)("<span>"),
				ie = (0, t.template)('<div class="composer-diff-block"><div>'),
				ne = (0, t.template)("<div>"),
				ee = (0, t.template)(
					'<div class="composer-message-codeblock-expand"><span>',
				),
				_ = (0, t.template)(
					'<div class="composer-message-codeblock"><div><div><span><span></span></span></div></div><div><div><div class="scrollable-div-container show-only-on-hover">',
				),
				te = (0, t.template)('<span class="fade-in">No changes made'),
				Q = (0, t.template)("<span><span>");
			function Z(le) {
				if (le === void 0) return "property";
				switch (le) {
					case B.SymbolKind.Method:
						return "method";
					case B.SymbolKind.Function:
						return "function";
					case B.SymbolKind.Constructor:
						return "constructor";
					case B.SymbolKind.Field:
						return "field";
					case B.SymbolKind.Variable:
						return "variable";
					case B.SymbolKind.Class:
						return "class";
					case B.SymbolKind.Struct:
						return "struct";
					case B.SymbolKind.Interface:
						return "interface";
					case B.SymbolKind.Module:
						return "module";
					case B.SymbolKind.Property:
						return "property";
					case B.SymbolKind.Event:
						return "event";
					case B.SymbolKind.Operator:
						return "operator";
					case B.SymbolKind.Constant:
						return "constant";
					case B.SymbolKind.Enum:
						return "enum";
					case B.SymbolKind.EnumMember:
						return "enum-member";
					case B.SymbolKind.File:
						return "file";
					default:
						return "property";
				}
			}
			function se(le) {
				return (0, u.createComponent)(H.$2cc, {
					nonReactiveDelay: 50,
					get children() {
						return (0, u.createComponent)(re, le);
					},
				});
			}
			function re(le) {
				const oe = (0, o.$odc)(),
					ae = [],
					{
						composerDataHandle: pe,
						currentComposer: $e,
						forceMode: ye,
						updateCurrentComposer: ue,
					} = (0, x.useComposerDataHandle)(() => le.composerDataHandle),
					[fe, me] = (0, a.createSignal)(ye() !== "chat"),
					ve = (yi) => {
						ye() !== "chat" && me(yi);
					},
					[ge, be] = (0, a.createSignal)("diff"),
					Ce = (0, a.createMemo)(() => le.maxCollapsedHeight ?? 220);
				(0, a.createEffect)(() => {
					fe() || (Ae && Ae.setScrollTop(0), Me && Me.revealFirstDiff());
				});
				const [Le, Fe] = (0, a.createSignal)(!1),
					[Oe, xe] = (0, a.createSignal)(0),
					He = (0, a.createMemo)(() => $e().composerId),
					Ke = (0, a.createMemo)(() =>
						le.forceStatus
							? le.forceStatus
							: le.codeBlock.uri
								? (oe.composerDataService.getCodeBlockStatus(
										He(),
										le.codeBlock.uri,
										le.codeBlock.version,
									) ?? "none")
								: "none",
					),
					Je = (0, a.createMemo)(() =>
						le.codeBlock.uri ? (0, c.$sc)(le.codeBlock.uri.path) : "",
					),
					Te = (0, a.createMemo)(() =>
						le.codeBlock.uri
							? oe.composerDataService.getLatestCodeBlockVersion(
									He(),
									le.codeBlock.uri,
									{ excludeNonAppliedCodeBlocks: !0 },
								)
							: 0,
					),
					Ee = (0, a.createMemo)(() =>
						oe.composerDataService.getComposerCodeBlock(
							pe(),
							le.codeBlock.uri,
							le.codeBlock.version,
						),
					),
					Ie = (0, a.createMemo)(
						() =>
							oe.composerDataService.getVersionExcludingNonAppliedCodeBlocks(
								He(),
								le.codeBlock.uri,
								le.codeBlock.version,
							) ?? 0,
					),
					Be = (0, a.createMemo)(
						() =>
							oe.composerDataService.getCodeBlockStatus(
								He(),
								le.codeBlock.uri,
								le.codeBlock.version,
							) ?? "none",
					),
					Se = (0, l.$h$b)(y.$wGb, oe.themeService),
					ke = { height: "16px", padding: "0px 3px" };
				let Ue,
					qe,
					Ae,
					Me,
					De = null,
					Re = null,
					je = null,
					Ve = !1;
				const [Ze, et] = (0, a.createSignal)(!0),
					[rt, ft] = (0, a.createSignal)(0),
					[bt, nt] = (0, a.createSignal)(void 0),
					lt = async () => {
						if (!Me) return;
						await Me.waitForDiff(),
							Me.collapseAllUnchangedRegions(),
							Me.revealFirstDiff(),
							Me.layout();
						const yi = Me.getDiffComputationResult();
						if (yi) {
							const li = yi.changes2[0];
							li &&
								nt({
									startLineNumber: li.modified.startLineNumber,
									endLineNumber: li.modified.endLineNumberExclusive - 1,
								});
						}
						setTimeout(() => {
							Me && (xe(Me.getContentHeight() + 4), Li(!0));
						}, 1);
					},
					ct = () => {
						const yi = ae.findIndex((Vi) => Vi === Me);
						yi !== -1 && ae.splice(yi, 1);
						const Ai = ae.findIndex((Vi) => Vi === Re);
						Ai !== -1 && ae.splice(Ai, 1);
						const li = ae.findIndex((Vi) => Vi === je);
						li !== -1 && ae.splice(li, 1),
							Me?.dispose(),
							(Me = void 0),
							Re?.dispose(),
							(Re = null),
							je?.dispose(),
							(je = null),
							(Ve = !1);
					},
					[gt, ht] = (0, a.createSignal)(!1),
					Rt = () => {
						const yi = fe(),
							Ai = Ke();
						if (Ae && Ue) {
							const li = yi
								? Math.min(Ae.getContentHeight(), Ce())
								: Ae.getContentHeight();
							ht(Ae.getContentHeight() > Ce()),
								(Ue.style.height = `${li}px`),
								Ae.layout(),
								Ae && Ai === "generating"
									? Ae.setScrollTop(Ae.getScrollHeight())
									: Ae && Ae.setScrollTop(0);
						}
					};
				(0, a.createEffect)(() => {
					Rt();
				});
				const Nt = (yi) => {
					yi.keyCode === V.KeyCode.Escape &&
						(yi.preventDefault(),
						ve(!0),
						oe.analyticsService.trackEvent("composer.code_block.collapse", {
							source: "escape",
						}));
				};
				(0, a.onMount)(() => {
					if (Ue) {
						const yi = v.$I$b;
						if (
							((Ae = oe.instantiationService.createInstance(
								$.$X0b,
								Ue,
								{
									...$.$X0b.getEditorOptions(oe.configurationService),
									hover: { enabled: !0 },
									renderValidationDecorations: "on",
									fontSize: yi,
									overviewRulerLanes: 0,
									scrollbar: {
										ignoreHorizontalScrollbarInContentHeight: !0,
										alwaysConsumeMouseWheel: !1,
									},
									padding: { top: 6, bottom: 6 },
								},
								{ enableSemanticSyntaxHighlighting: !1 },
							)),
							Ae)
						) {
							ae.push(Ae);
							const Ai =
									oe.languageService.createByLanguageNameOrFilepathOrFirstLine(
										"",
										Ee()?.uri ?? null,
										void 0,
									),
								li = g.URI.parse(
									`composer-code-block-anysphere://${(0, I.randomFilename)()}`,
								);
							(De = oe.modelService.createModel("", Ai, li, !1)),
								De && ae.push(De),
								Ae.setModel(De),
								Rt();
							const Vi = Ae.onKeyDown(Nt);
							ae.push(Vi);
						}
					}
				});
				const [jt, ti, kt] = (0, D.$A0b)(),
					hi = async (yi, Ai) =>
						!le.codeBlock.uri || !Ee()?.isNotApplied
							? []
							: oe.applyToFileActionsService.getImportantSymbolsDefinedInCodeblockThatExistInURICanThrowIfExtHostIsNotReady(
									le.codeBlock.uri,
									yi.getValue(),
								),
					[Kt, di] = (0, A.$r$b)({
						getModel: () => De,
						initialValue: [],
						updateFunc: hi,
						debounceTime: 1e3,
					}),
					[Ye, ze] = (0, a.createSignal)(!1);
				(0, a.createEffect)(() => {
					oe.fileService.exists(le.codeBlock.uri).then((yi) => {
						ze(!yi);
					});
				});
				const Xe = (0, q.$F$b)(),
					It = (0, a.createMemo)(() => {
						const yi = [],
							Ai = le.codeBlock.uri;
						if (Ye())
							return (
								yi.push({ uri: Ai }),
								Xe() && yi.push({ uri: Ai, applyToCurrentFile: !0 }),
								yi
							);
						if (Ee()?.isNotApplied) {
							yi.push({ uri: Ai });
							const li = Kt();
							return (
								li.length > 0 &&
									yi.push(...li.map((Vi) => ({ uri: Ai, symbol: Vi }))),
								yi
							);
						} else return [];
					}),
					Lt = {
						"font-size": "11px",
						color: "var(--vscode-input-placeholderForeground)",
					},
					xt = (0, a.createMemo)(() => {
						const yi = Ee();
						return yi ? (yi.newModelDiffWrtV0?.length ?? 0) > 0 : !1;
					}),
					Vt = (yi, Ai = !0) =>
						Ee()
							? Ai
								? oe.composerUtilsService.getCodeBlockNewModelLines(
										pe(),
										le.codeBlock.uri,
										yi,
									)
								: oe.composerUtilsService.getCodeBlockOriginalModelLines(
										pe(),
										le.codeBlock.uri,
										yi,
									)
							: null,
					Bt = () =>
						De?.getEOL() ??
						`
`,
					Gt = (yi) =>
						yi ===
						`
`
							? S.EndOfLineSequence.LF
							: S.EndOfLineSequence.CRLF,
					Mt = (yi) =>
						yi.replace(
							/\r\n|\r/g,
							`
`,
						),
					Ut = (0, a.createMemo)(() => {
						const yi = Ee();
						if (!yi) return !1;
						const Ai = Vt(le.codeBlock.version, !1),
							li = Vt(le.codeBlock.version);
						if (!Ai || !li) return !1;
						const Vi = Bt(),
							wi = Mt(Ai.join(Vi)),
							_t = Mt(li.join(Vi));
						return (
							wi !== _t &&
							wi.trim().length > 0 &&
							_t.trim().length > 0 &&
							(!yi.isNotApplied ||
								oe.reactiveStorageService.applicationUserPersistentStorage
									.composerState.unification)
						);
					});
				(0, a.createEffect)(
					(0, a.on)(Ut, () => {
						ft((yi) => yi + 1);
					}),
				);
				const [ei, mi] = (0, a.createSignal)(void 0),
					ii = () => {
						const yi = Me?.getDiffComputationResult();
						if (!yi) {
							mi(void 0);
							return;
						}
						if (yi.identical || yi.quitEarly) {
							mi(void 0);
							return;
						}
						let Ai = 0,
							li = 0;
						for (const Vi of yi.changes2)
							(Ai += Vi.modified.length), (li += Vi.original.length);
						mi({ added: Ai, removed: li });
					},
					Dt = () => {
						if (!(!qe || !Ut()))
							try {
								const yi = Ee();
								if (!yi) return;
								ct();
								const Ai = v.$I$b;
								if (
									((Me = oe.instantiationService.createInstance(
										T.$3yb,
										qe,
										{
											renderSideBySide: !1,
											readOnly: !0,
											stickyScroll: { enabled: !1 },
											renderIndicators: !1,
											renderMarginRevertIcon: !1,
											renderGutterMenu: !1,
											glyphMargin: !1,
											hideUnchangedRegions: { enabled: !0 },
											disableLayerHinting: !0,
											automaticLayout: !0,
											fontSize: Ai,
											lineNumbers: "off",
											lineNumbersMinChars: 0,
											renderOverviewRuler: !1,
											scrollbar: {
												verticalScrollbarSize: 0,
												alwaysConsumeMouseWheel: !1,
												ignoreHorizontalScrollbarInContentHeight: !0,
												horizontalScrollbarSize: 6,
											},
											padding: { top: 6, bottom: 6 },
											scrollBeyondLastLine: !1,
											compactMode: !0,
										},
										{
											originalEditor: { contributions: [], isSimpleWidget: !0 },
											modifiedEditor: { contributions: [], isSimpleWidget: !0 },
										},
									)),
									!Me)
								)
									throw new Error("Failed to create diff editor");
								const li =
										oe.languageService.createByLanguageNameOrFilepathOrFirstLine(
											"",
											yi.uri ?? null,
											void 0,
										),
									Vi = g.URI.parse(
										`composer-code-block-anysphere://${(0, I.randomFilename)()}`,
									),
									wi = g.URI.parse(
										`composer-code-block-anysphere://${(0, I.randomFilename)()}`,
									),
									_t = Vt(le.codeBlock.version, !1),
									ai = Vt(le.codeBlock.version),
									Ft = Bt();
								(Re = oe.modelService.createModel(
									_t?.join(Ft) ?? "",
									li,
									Vi,
									!1,
								)),
									Re.setEOL(Gt(Ft));
								let Xt = !1;
								if (
									(Re ? ae.push(Re) : (Xt = !0),
									(je = oe.modelService.createModel(
										ai?.join(Ft) ?? "",
										li,
										wi,
										!1,
									)),
									je.setEOL(Gt(Ft)),
									je ? ae.push(je) : (Xt = !0),
									Xt)
								)
									throw new Error("Failed to create diff models");
								if (
									(ae.push(Me),
									Me.setModel({ original: Re, modified: je }),
									lt(),
									(Ve = !0),
									Me)
								) {
									ae.push(
										Me.onDidUpdateDiff(() => {
											ii();
										}),
									);
									const $t = Me.getModifiedEditor().onKeyDown(Nt);
									ae.push($t);
								}
							} catch (yi) {
								console.error("Failed to setup diff editor:", yi), ct();
							}
					};
				(0, a.onCleanup)(() => {
					ct(),
						De && (De.dispose(), (De = null)),
						Ae && (Ae.dispose(), (Ae = void 0)),
						ae.forEach((yi) => yi.dispose()),
						(ae.length = 0);
				}),
					(0, a.createEffect)(() => {
						Ut() && !Ve ? (Dt(), ii()) : !Ut() && Ve && ct();
					});
				const Jt = (yi) => {
					if (Ae && De) {
						const Ai = De.getLineCount(),
							li = De.getLineMaxColumn(Ai);
						De.applyEdits([
							{
								range: {
									startLineNumber: Ai,
									startColumn: li,
									endLineNumber: Ai,
									endColumn: li,
								},
								text: yi,
							},
						]);
					}
				};
				(0, a.createEffect)(() => {
					const yi = Ee();
					if (Ae && De && yi) {
						const Ai = Mt(yi.content ?? ""),
							li = Mt(De.getValue()),
							Vi = Ai.slice(li.length);
						if (Vi === "") return;
						Jt(Vi.replace(/[\uD800-\uDBFF]$/g, "")),
							(0, F.$Ogb)().requestAnimationFrame(() => {
								Rt();
							});
					}
				});
				const si = (0, a.createMemo)(() =>
						oe.composerService.shouldShowAcceptReject(
							He(),
							le.codeBlock.uri,
							le.codeBlock.version,
						),
					),
					Zt = {
						"box-sizing": "border-box",
						position: "relative",
						background: "var(--vscode-editor-background)",
						overflow: "hidden",
					},
					{ showHover: ci, hideHover: ri } = (0, P.useComposerHoverTooltip)({
						delay: 300,
						additionalClasses: ["chat-hover-tooltip"],
					}),
					$i = () => {
						Ae &&
							De &&
							(oe.clipboardService.writeText(De.getValue()),
							et(!1),
							setTimeout(() => et(!0), 2e3));
					},
					Wt = async () => {
						const yi = Ee()?.content;
						return yi
							? await oe.applyToFileActionsService.isEntryCached(
									le.codeBlock.uri,
									yi,
									N.$S0b,
									"fullfile",
								)
							: !1;
					},
					tt = async (yi) => {
						yi.stopPropagation();
						const Ai = yi.currentTarget.getBoundingClientRect();
						oe.analyticsService.trackEvent("composer.code_block.apply");
						const li = It();
						if (li.length !== 0) {
							if (li.length === 1 || (await Wt())) {
								at(li[0]);
								return;
							}
							if (Ee()?.newModelDiffWrtV0 && !Ye()) {
								at(li[0]);
								return;
							}
							ti({ x: Ai.right + 2, y: Ai.bottom + 2 });
						}
					},
					at = async (yi) => {
						if (!yi.applyToCurrentFile)
							if (yi.symbol?.range) {
								const li = (0, R.$8rb)(yi.uri, {
									startLineNumber: yi.symbol?.range.startLineNumber || 1,
									startColumn: yi.symbol?.range.startColumn || 1,
									endLineNumber: yi.symbol?.range.endLineNumber || 1,
									endColumn: yi.symbol?.range.endColumn || 1,
								});
								oe.openerService?.open(li);
							} else {
								const li = oe.editorService.findEditors(yi.uri);
								if (li.length > 0) {
									const Vi = oe.editorGroupService.getGroup(li[0].groupId);
									oe.editorService.openEditor(li[0].editor, Vi);
								} else await oe.openerService?.open(yi.uri);
							}
						let Ai;
						yi.symbol?.range &&
							(Ai = new O.$rL(
								yi.symbol.range.startLineNumber,
								yi.symbol.range.endLineNumber + 1,
							)),
							oe.composerService.applyCachedCodeBlock(
								He(),
								yi.uri,
								le.codeBlock.version,
								{ range: Ai, applyToCurrentFile: yi.applyToCurrentFile },
							);
					},
					[pi, Li] = (0, a.createSignal)(!1);
				(0, a.createEffect)(() => {
					if (Me && Re && je) {
						if (!Ee()) return;
						const Ai = Vt(le.codeBlock.version, !1),
							li = Vt(le.codeBlock.version),
							Vi = Bt();
						Ai?.join(Vi) !== Re.getValue() && Re.setValue(Ai?.join(Vi) ?? ""),
							li?.join(Vi) !== je.getValue() && je.setValue(li?.join(Vi) ?? ""),
							lt();
					}
				});
				const Di = (0, a.createMemo)(() =>
						ge() === "diff" && Ut()
							? pi() && Me
								? Me.getContentHeight() > Ce()
								: !1
							: gt(),
					),
					Ui = (0, u.createComponent)(a.Show, {
						get when() {
							return Ie() !== -1;
						},
						get children() {
							const yi = J(),
								Ai = yi.firstChild;
							return (
								yi.style.setProperty(
									"color",
									"var(--vscode-input-placeholderForeground)",
								),
								yi.style.setProperty("line-height", "120%"),
								yi.style.setProperty("font-size", "10px"),
								yi.style.setProperty("font-feature-settings", "tnum"),
								yi.style.setProperty("font-variant-numeric", "tabular-nums"),
								(0, r.insert)(yi, () => Ie() + 1, Ai),
								(0, r.insert)(yi, () => Te() + 1, null),
								yi
							);
						},
					}),
					Wi = (0, u.createComponent)(a.Show, {
						get when() {
							return (0, m.memo)(() => !!Ut())() && ei();
						},
						fallback: Ui,
						children: (yi) =>
							(0, u.createComponent)(a.Show, {
								get when() {
									return yi().added > 0 || yi().removed > 0;
								},
								fallback: Ui,
								get children() {
									const Ai = Y();
									return (
										(0, d.addEventListener)(Ai, "mouseleave", ri),
										Ai.addEventListener("mouseenter", (li) =>
											ci(li, `Version ${Ie() + 1}/${Te() + 1}`),
										),
										Ai.style.setProperty(
											"color",
											"var(--vscode-descriptionForeground)",
										),
										Ai.style.setProperty("line-height", "120%"),
										Ai.style.setProperty("font-size", "10px"),
										Ai.style.setProperty("font-feature-settings", "tnum"),
										Ai.style.setProperty(
											"font-variant-numeric",
											"tabular-nums",
										),
										Ai.style.setProperty("display", "flex"),
										Ai.style.setProperty("align-items", "center"),
										Ai.style.setProperty("gap", "4px"),
										(0, r.insert)(
											Ai,
											(0, u.createComponent)(a.Show, {
												get when() {
													return yi().added > 0;
												},
												get children() {
													const li = W(),
														Vi = li.firstChild;
													return (
														li.style.setProperty(
															"color",
															"var(--vscode-gitDecoration-addedResourceForeground)",
														),
														(0, r.insert)(li, () => yi().added, null),
														li
													);
												},
											}),
											null,
										),
										(0, r.insert)(
											Ai,
											(0, u.createComponent)(a.Show, {
												get when() {
													return yi().removed > 0;
												},
												get children() {
													const li = X(),
														Vi = li.firstChild;
													return (
														li.style.setProperty(
															"color",
															"var(--vscode-gitDecoration-deletedResourceForeground)",
														),
														(0, r.insert)(li, () => yi().removed, null),
														li
													);
												},
											}),
											null,
										),
										Ai
									);
								},
							}),
					}),
					Gi = (0, M.$b$b)(),
					qi = (0, a.createMemo)(() =>
						oe.composerDataService.getInlineDiff(
							He(),
							le.codeBlock.uri,
							le.codeBlock.version,
						),
					);
				return [
					(() => {
						const yi = _(),
							Ai = yi.firstChild,
							li = Ai.firstChild,
							Vi = li.firstChild,
							wi = Vi.firstChild,
							_t = Ai.nextSibling,
							ai = _t.firstChild,
							Ft = ai.firstChild;
						yi.addEventListener("mouseleave", () => Fe(!1)),
							yi.addEventListener("mouseenter", () => Fe(!0)),
							Ai.style.setProperty("display", "flex"),
							Ai.style.setProperty("align-items", "center"),
							Ai.style.setProperty("justify-content", "space-between"),
							Ai.style.setProperty("gap", "6px"),
							Ai.style.setProperty("max-width", "100%"),
							Ai.style.setProperty("overflow", "hidden"),
							Ai.style.setProperty(
								"border-bottom",
								"1px solid var(--vscode-commandCenter-inactiveBorder)",
							),
							Ai.style.setProperty("position", "sticky"),
							Ai.style.setProperty("top", "-1px"),
							Ai.style.setProperty("z-index", "2"),
							li.addEventListener("click", ($t) => {
								const ut = bt(),
									Et = oe.composerDataService.getInlineDiff(
										He(),
										le.codeBlock.uri,
										le.codeBlock.version,
									);
								if (Et) {
									const Tt = Et.changes[0];
									(0, I.openCodeSelectionInEditor)(
										{
											uri: Et.uri,
											range: {
												selectionStartLineNumber:
													Et.currentRange.startLineNumber +
													Tt.addedRange.startLineNumber -
													1,
												positionLineNumber:
													Et.currentRange.startLineNumber +
													Tt.addedRange.startLineNumber -
													1,
												selectionStartColumn: 1,
												positionColumn: 1,
											},
											text: "",
										},
										oe.workspaceContextService,
										oe.openerService,
									);
									return;
								}
								(0, I.openFileInEditorIfExists)(
									le.codeBlock.uri,
									oe.fileService,
									oe.openerService,
									$t.altKey,
								);
							}),
							li.style.setProperty("display", "flex"),
							li.style.setProperty("align-items", "center"),
							li.style.setProperty("height", "20px"),
							li.style.setProperty("min-width", "0"),
							li.style.setProperty("padding-right", "4px"),
							li.style.setProperty("user-select", "none"),
							li.style.setProperty("flex", "1"),
							li.style.setProperty("cursor", "pointer"),
							(0, r.insert)(
								li,
								(0, u.createComponent)(a.Show, {
									get when() {
										return Gi();
									},
									get children() {
										const $t = Y();
										return (
											$t.style.setProperty("margin-right", "-4px"),
											$t.style.setProperty("scale", "0.8"),
											$t.style.setProperty("height", "14px"),
											$t.style.setProperty("display", "flex"),
											$t.style.setProperty("align-items", "center"),
											(0, r.insert)(
												$t,
												(0, u.createComponent)(f.$k$b, {
													get fileName() {
														return Je();
													},
													get workspaceContextService() {
														return oe.workspaceContextService;
													},
													get modelService() {
														return oe.modelService;
													},
													get languageService() {
														return oe.languageService;
													},
												}),
											),
											$t
										);
									},
								}),
								Vi,
							),
							(0, d.addEventListener)(Vi, "mouseleave", ri),
							Vi.addEventListener("mouseenter", ($t) => {
								ci(
									$t,
									oe.labelService.getUriLabel(le.codeBlock.uri, {
										relative: !0,
									}),
								);
							}),
							Vi.style.setProperty("line-height", "120%"),
							Vi.style.setProperty("font-size", "10px"),
							Vi.style.setProperty("white-space", "nowrap"),
							Vi.style.setProperty("overflow", "hidden"),
							Vi.style.setProperty("text-overflow", "ellipsis"),
							Vi.style.setProperty("direction", "rtl"),
							wi.style.setProperty("direction", "ltr"),
							wi.style.setProperty("unicode-bidi", "embed"),
							(0, r.insert)(wi, Je),
							(0, r.insert)(
								li,
								(0, u.createComponent)(a.Show, {
									get when() {
										return (
											!Ee()?.isNotApplied ||
											oe.reactiveStorageService.applicationUserPersistentStorage
												.composerState.unification
										);
									},
									get children() {
										const $t = Y();
										return (
											$t.style.setProperty("margin-left", "4px"),
											$t.style.setProperty("display", "flex"),
											$t.style.setProperty("align-items", "center"),
											$t.style.setProperty("gap", "4px"),
											(0, r.insert)(
												$t,
												(0, u.createComponent)(a.Show, {
													get when() {
														return Ke() === "generating" || Ke() === "applying";
													},
													get fallback() {
														return (0, u.createComponent)(a.Show, {
															get when() {
																return (
																	(0, m.memo)(
																		() => !Ut() && !qi() && ye() === "edit",
																	)() &&
																	!["accepted", "rejected"].includes(Ke())
																);
															},
															get fallback() {
																return (0, u.createComponent)(a.Show, {
																	get when() {
																		return (
																			Ke() === "completed" ||
																			Ke() === "accepted"
																		);
																	},
																	get fallback() {
																		return [
																			Wi,
																			(0, u.createComponent)(
																				p.ComposerGeneralStatusIndicator,
																				{
																					get status() {
																						return Ke();
																					},
																				},
																			),
																		];
																	},
																	get children() {
																		return [
																			Wi,
																			(0, u.createComponent)(a.Show, {
																				get when() {
																					return Ke() === "accepted";
																				},
																				get fallback() {
																					return (0, u.createComponent)(
																						p.ComposerGeneralStatusIndicator,
																						{ status: "completed" },
																					);
																				},
																				get children() {
																					const ut = Y();
																					return (
																						ut.style.setProperty(
																							"font-size",
																							"10px",
																						),
																						ut.style.setProperty(
																							"color",
																							"var(--vscode-testing-iconPassed)",
																						),
																						(0, E.effect)(() =>
																							(0, i.className)(
																								ut,
																								n.ThemeIcon.asClassName(
																									h.$ak.check,
																								),
																							),
																						),
																						ut
																					);
																				},
																			}),
																		];
																	},
																});
															},
															get children() {
																const ut = te();
																return (
																	ut.style.setProperty(
																		"color",
																		"var(--vscode-input-placeholderForeground)",
																	),
																	ut.style.setProperty("font-size", "10px"),
																	ut.style.setProperty("margin-left", "4px"),
																	ut
																);
															},
														});
													},
													get children() {
														return [
															(() => {
																const ut = Y();
																return (
																	ut.style.setProperty(
																		"color",
																		"var(--vscode-input-placeholderForeground)",
																	),
																	ut.style.setProperty("font-size", "10px"),
																	(0, r.insert)(
																		ut,
																		() =>
																			b.composerCodeBlockStatusLabelMap[Ke()],
																	),
																	ut
																);
															})(),
															(() => {
																const ut = Y();
																return (
																	ut.style.setProperty(
																		"transform",
																		"scale(0.75)",
																	),
																	ut.style.setProperty("display", "flex"),
																	ut.style.setProperty("align-items", "center"),
																	ut.style.setProperty(
																		"justify-content",
																		"center",
																	),
																	ut.style.setProperty("max-height", "10px"),
																	(0, r.insert)(
																		ut,
																		(0, u.createComponent)(s.$Z8b, {}),
																	),
																	ut
																);
															})(),
														];
													},
												}),
											),
											$t
										);
									},
								}),
								null,
							),
							(0, r.insert)(
								Ai,
								(0, u.createComponent)(K.ComposerMessageCodeblockActions, {
									get isMouseOver() {
										return Le();
									},
									get copyEnabled() {
										return Ze();
									},
									handleCopy: $i,
									get currentStatus() {
										return Be();
									},
									get reactiveCodeBlock() {
										return Ee();
									},
									get composerId() {
										return He();
									},
									get codeBlockUri() {
										return le.codeBlock.uri;
									},
									get codeBlockVersion() {
										return le.codeBlock.version;
									},
									get versionExcludingNonAppliedCodeblocks() {
										return Ie();
									},
									get shouldShowAcceptReject() {
										return si();
									},
									get hasDiffData() {
										return xt();
									},
									get canShowDiff() {
										return Ut() ?? !1;
									},
									get preferShowType() {
										return ge();
									},
									setPreferShowType: be,
									setNonChatCollapsed: ve,
									onApplyClick: tt,
									get actionMenuPosition() {
										return jt();
									},
									get forceToolsRerender() {
										return rt();
									},
								}),
								null,
							),
							_t.style.setProperty("position", "relative");
						const Xt = Ue;
						return (
							typeof Xt == "function" ? (0, C.use)(Xt, Ft) : (Ue = Ft),
							(0, r.insert)(
								_t,
								(0, u.createComponent)(a.Show, {
									get when() {
										return Ut();
									},
									get children() {
										const $t = ie(),
											ut = $t.firstChild,
											Et = qe;
										return (
											typeof Et == "function" ? (0, C.use)(Et, ut) : (qe = ut),
											(0, E.effect)(
												(Tt) => {
													const qt = {
															...Zt,
															display:
																ge() === "diff" && Ut() && Ee()?.content
																	? "block"
																	: "none",
															height: fe()
																? `${Math.min(Oe(), Ce())}px`
																: `${Math.min(Oe(), le.maxExpandedHeight ?? 1 / 0)}px`,
															"margin-bottom":
																Di() && ye() !== "chat" && !fe()
																	? "16px"
																	: void 0,
														},
														At = fe()
															? `${Math.min(Oe(), Ce())}px`
															: `${Math.min(Oe(), le.maxExpandedHeight ?? 1 / 0)}px`;
													return (
														(Tt._v$ = (0, w.style)($t, qt, Tt._v$)),
														At !== Tt._v$2 &&
															((Tt._v$2 = At) != null
																? ut.style.setProperty("height", At)
																: ut.style.removeProperty("height")),
														Tt
													);
												},
												{ _v$: void 0, _v$2: void 0 },
											),
											$t
										);
									},
								}),
								null,
							),
							(0, r.insert)(
								_t,
								(0, u.createComponent)(a.Show, {
									get when() {
										return (0, m.memo)(() => !!Di())() && ye() !== "chat";
									},
									get children() {
										return [
											(() => {
												const $t = ne();
												return (
													$t.addEventListener("click", () => {
														ve(!fe()),
															oe.analyticsService.trackEvent(
																fe()
																	? "composer.code_block.expand"
																	: "composer.code_block.collapse",
																{ source: "bottom-bar" },
															);
													}),
													$t.style.setProperty("position", "absolute"),
													$t.style.setProperty("top", "0"),
													$t.style.setProperty("left", "0"),
													$t.style.setProperty("right", "0"),
													$t.style.setProperty("bottom", "0"),
													(0, E.effect)(() =>
														(fe() ? "auto" : "none") != null
															? $t.style.setProperty(
																	"pointer-events",
																	fe() ? "auto" : "none",
																)
															: $t.style.removeProperty("pointer-events"),
													),
													$t
												);
											})(),
											(() => {
												const $t = ee(),
													ut = $t.firstChild;
												return (
													$t.addEventListener("click", (Et) => {
														Et.stopPropagation(),
															Et.stopImmediatePropagation(),
															oe.analyticsService.trackEvent(
																fe()
																	? "composer.code_block.expand"
																	: "composer.code_block.collapse",
															),
															ve(!fe());
													}),
													$t.style.setProperty("z-index", "1"),
													(0, E.effect)(
														(Et) => {
															const Tt = Le() ? 0.9 : void 0,
																qt = n.ThemeIcon.asClassName(
																	fe() ? G.$E0b : G.$F0b,
																);
															return (
																Tt !== Et._v$3 &&
																	((Et._v$3 = Tt) != null
																		? $t.style.setProperty("opacity", Tt)
																		: $t.style.removeProperty("opacity")),
																qt !== Et._v$4 &&
																	(0, i.className)(ut, (Et._v$4 = qt)),
																Et
															);
														},
														{ _v$3: void 0, _v$4: void 0 },
													),
													$t
												);
											})(),
										];
									},
								}),
								null,
							),
							(0, E.effect)(
								($t) => {
									const ut = {
											display: "flex",
											"flex-direction": "column",
											border:
												"1px solid var(--vscode-commandCenter-inactiveBorder)",
											transition: "border-color 0.1s ease-in-out",
											contain: "paint",
											position: "relative",
											margin: "4px 0px",
											"border-radius": "2px",
											"border-bottom": Ee()?.content ? void 0 : "none",
											...le.style,
										},
										Et = Se(),
										Tt = Gi() ? "2px" : "4px",
										qt = Ie() === -1 ? "2px" : void 0,
										At = {
											...Zt,
											display:
												!Ee()?.content || (ge() === "diff" && Ut())
													? "none"
													: "block",
											"--vscode-sideBar-background":
												"var(--vscode-editor-background)",
											padding: "0px 6px",
											"padding-bottom":
												Di() && ye() !== "chat" ? "16px" : void 0,
										};
									return (
										($t._v$5 = (0, w.style)(yi, ut, $t._v$5)),
										Et !== $t._v$6 &&
											(($t._v$6 = Et) != null
												? Ai.style.setProperty("background", Et)
												: Ai.style.removeProperty("background")),
										Tt !== $t._v$7 &&
											(($t._v$7 = Tt) != null
												? li.style.setProperty("padding-left", Tt)
												: li.style.removeProperty("padding-left")),
										qt !== $t._v$8 &&
											(($t._v$8 = qt) != null
												? Vi.style.setProperty("margin-right", qt)
												: Vi.style.removeProperty("margin-right")),
										($t._v$9 = (0, w.style)(ai, At, $t._v$9)),
										$t
									);
								},
								{
									_v$5: void 0,
									_v$6: void 0,
									_v$7: void 0,
									_v$8: void 0,
									_v$9: void 0,
								},
							),
							yi
						);
					})(),
					(0, u.createComponent)(a.Show, {
						get when() {
							return jt();
						},
						children: (yi) =>
							(0, u.createComponent)(k.Menu, {
								width: "auto",
								get position() {
									return yi();
								},
								close: kt,
								get reactiveCloser() {
									return ye() === "chat"
										? oe.reactiveStorageService.nonPersistentStorage
												.forceChatDropdownRerender
										: oe.reactiveStorageService.nonPersistentStorage
												.forceComposerDropdownRerender;
								},
								anchor: "top-right",
								style: {
									"background-color": "var(--vscode-editor-background)",
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
									return (0, u.createComponent)(z.$w0b, {
										style: { "max-height": "120px" },
										contentStyle: {
											display: "flex",
											"flex-direction": "column",
										},
										innerContainerStyle: { "min-height": "unset" },
										scrollingDirection: "vertical",
										nonReactiveElementOptions: { alwaysConsumeMouseWheel: !0 },
										get children() {
											const Ai = ne();
											return (
												Ai.style.setProperty("display", "flex"),
												Ai.style.setProperty("flex-direction", "column"),
												Ai.style.setProperty("gap", "2px"),
												Ai.style.setProperty("padding", "2px"),
												Ai.style.setProperty("box-sizing", "border-box"),
												(0, r.insert)(
													Ai,
													(0, u.createComponent)(a.For, {
														get each() {
															return It();
														},
														children: (li) => {
															const Vi = (0, a.createMemo)(() => {
																	const _t = li.applyToCurrentFile
																		? Xe()
																		: li.uri;
																	return _t
																		? oe.workspaceContextService.asRelativePath(
																				_t,
																			)
																		: "Current file";
																}),
																wi = li.symbol ? ` (${li.symbol.name})` : "";
															return (0, u.createComponent)(L.default, {
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
																	at(li), kt();
																},
																onMouseEnter: (_t) =>
																	ci(_t, Vi() + wi, U.HoverPosition.RIGHT),
																onMouseLeave: ri,
																get children() {
																	return [
																		(0, u.createComponent)(a.Show, {
																			get when() {
																				return Gi();
																			},
																			get children() {
																				const _t = Y();
																				return (
																					_t.style.setProperty(
																						"margin-right",
																						"-4px",
																					),
																					_t.style.setProperty("scale", "0.8"),
																					_t.style.setProperty(
																						"height",
																						"14px",
																					),
																					_t.style.setProperty(
																						"display",
																						"flex",
																					),
																					_t.style.setProperty(
																						"align-items",
																						"center",
																					),
																					(0, r.insert)(
																						_t,
																						(0, u.createComponent)(a.Show, {
																							get when() {
																								return li.symbol;
																							},
																							get fallback() {
																								return (0, u.createComponent)(
																									f.$k$b,
																									{
																										get fileName() {
																											return Vi();
																										},
																										get workspaceContextService() {
																											return oe.workspaceContextService;
																										},
																										get modelService() {
																											return oe.modelService;
																										},
																										get languageService() {
																											return oe.languageService;
																										},
																									},
																								);
																							},
																							get children() {
																								const ai = ne();
																								return (
																									ai.style.setProperty(
																										"font-size",
																										"14px",
																									),
																									ai.style.setProperty(
																										"margin-left",
																										"2px",
																									),
																									ai.style.setProperty(
																										"margin-right",
																										"4px",
																									),
																									(0, E.effect)(() =>
																										(0, i.className)(
																											ai,
																											`codicon codicon-symbol-${Z(li.symbol?.kind)}`,
																										),
																									),
																									ai
																								);
																							},
																						}),
																					),
																					_t
																				);
																			},
																		}),
																		(() => {
																			const _t = Q(),
																				ai = _t.firstChild;
																			return (
																				_t.style.setProperty(
																					"text-overflow",
																					"ellipsis",
																				),
																				_t.style.setProperty(
																					"overflow",
																					"hidden",
																				),
																				_t.style.setProperty(
																					"white-space",
																					"nowrap",
																				),
																				_t.style.setProperty(
																					"direction",
																					"rtl",
																				),
																				_t.style.setProperty(
																					"line-height",
																					"120%",
																				),
																				ai.style.setProperty(
																					"direction",
																					"ltr",
																				),
																				ai.style.setProperty(
																					"unicode-bidi",
																					"embed",
																				),
																				(0, r.insert)(ai, () => Vi() + wi),
																				_t
																			);
																		})(),
																	];
																},
															});
														},
													}),
												),
												Ai
											);
										},
									});
								},
							}),
					}),
				];
			}
		},
	),
		define(
			de[4285],
			he([
				1, 0, 2, 2, 2, 2, 2, 13, 167, 14, 26, 123, 338, 485, 225, 177, 311, 36,
				331, 295,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerMessageToolCallBlock = void 0);
				const s = (0, t.template)("<div>hi"),
					l = (0, t.template)('<span title="Completed">'),
					y = (0, t.template)('<span title="Failed">'),
					$ = (0, t.template)("<pre>"),
					v = (0, t.template)(
						"<div><div><div><span></span><span></span></div><div></div></div><div>",
					),
					S = (I) => {
						const T = (0, o.$odc)(),
							{ showHover: P, hideHover: k } = (0, p.useComposerHoverTooltip)(),
							{
								composerDataHandle: L,
								currentComposer: D,
								updateCurrentComposer: M,
							} = (0, g.useComposerDataHandle)(() => I.composerDataHandle),
							N = (0, f.$h$b)(a.$wGb, T.themeService),
							A = (0, d.createMemo)(() =>
								T.composerDataService.getComposerBubble(
									D().composerId,
									I.bubbleId,
								),
							),
							R = (0, d.createMemo)(() =>
								A()?.capabilityCodeBlocks?.find(
									(q) =>
										q.type === n.ToolCallCodeBlockAlias &&
										q.codeBlockIdx === I.codeBlockIdx,
								),
							),
							O = (0, d.createMemo)(() => (R() ? R().parsedToolCall : null)),
							B = (0, d.createMemo)(() => (O() ? O().type : void 0)),
							U = (0, d.createMemo)(() => {
								if (B()) return n.composerToolCallTypeToIcon[B()];
							}),
							z = (0, d.createMemo)(() =>
								B() ? n.composerToolCallTypeToLabel[B()] : "",
							),
							F = () => {
								const H = D().capabilities.find(
									(q) =>
										q.type ===
										m.ComposerCapabilityRequest_ComposerCapabilityType
											.TOOL_CALL,
								);
								H && H.acceptToolCall(I.bubbleId, I.codeBlockIdx);
							},
							x = () => {
								const H = D().capabilities.find(
									(q) =>
										q.type ===
										m.ComposerCapabilityRequest_ComposerCapabilityType
											.TOOL_CALL,
								);
								H && H.rejectToolCall(I.bubbleId, I.codeBlockIdx);
							};
						return (0, C.createComponent)(d.Show, {
							get when() {
								return R();
							},
							get fallback() {
								return (() => {
									const H = s();
									return H.style.setProperty("display", "none"), H;
								})();
							},
							children: (H) =>
								(() => {
									const q = v(),
										V = q.firstChild,
										G = V.firstChild,
										K = G.firstChild,
										J = K.nextSibling,
										W = G.nextSibling,
										X = V.nextSibling;
									return (
										q.style.setProperty("display", "flex"),
										q.style.setProperty("flex-direction", "column"),
										q.style.setProperty(
											"border",
											"1px solid var(--vscode-commandCenter-inactiveBorder)",
										),
										q.style.setProperty("position", "relative"),
										q.style.setProperty("margin", "4px 0px"),
										V.style.setProperty("display", "flex"),
										V.style.setProperty("align-items", "center"),
										V.style.setProperty("justify-content", "space-between"),
										V.style.setProperty("gap", "6px"),
										V.style.setProperty("max-width", "100%"),
										V.style.setProperty("overflow", "hidden"),
										V.style.setProperty(
											"border-bottom",
											"1px solid var(--vscode-commandCenter-inactiveBorder)",
										),
										V.style.setProperty("position", "sticky"),
										V.style.setProperty("top", "0"),
										V.style.setProperty("z-index", "1"),
										V.style.setProperty("padding", "0px 6px"),
										V.style.setProperty("height", "20px"),
										G.style.setProperty("display", "flex"),
										G.style.setProperty("align-items", "center"),
										G.style.setProperty("gap", "6px"),
										K.style.setProperty("font-size", "14px"),
										J.style.setProperty("line-height", "120%"),
										J.style.setProperty("font-size", "10px"),
										J.style.setProperty("white-space", "nowrap"),
										J.style.setProperty("overflow", "hidden"),
										J.style.setProperty("text-overflow", "ellipsis"),
										(0, E.insert)(J, z),
										W.style.setProperty("display", "flex"),
										W.style.setProperty("gap", "4px"),
										(0, E.insert)(
											W,
											(0, C.createComponent)(d.Show, {
												get when() {
													return H().status === "pending_decision";
												},
												get children() {
													return [
														(0, C.createComponent)(
															c.ComposerToolbarSimpleButton,
															{
																type: "secondary",
																get codicon() {
																	return r.$ak.close;
																},
																onClick: x,
																children: "Reject",
															},
														),
														(0, C.createComponent)(
															c.ComposerToolbarSimpleButton,
															{
																type: "primary",
																get codicon() {
																	return r.$ak.check;
																},
																onClick: F,
																children: "Accept",
															},
														),
													];
												},
											}),
											null,
										),
										(0, E.insert)(
											W,
											(0, C.createComponent)(d.Show, {
												get when() {
													return (
														H().status === "generating" ||
														H().status === "loading"
													);
												},
												get children() {
													return (0, C.createComponent)(b.$Z8b, {});
												},
											}),
											null,
										),
										(0, E.insert)(
											W,
											(0, C.createComponent)(d.Show, {
												get when() {
													return H().status === "completed";
												},
												get children() {
													const Y = l();
													return (
														Y.style.setProperty("font-size", "14px"),
														Y.style.setProperty(
															"color",
															"var(--vscode-testing-iconPassed)",
														),
														(0, w.effect)(() =>
															(0, i.className)(
																Y,
																u.ThemeIcon.asClassName(r.$ak.check),
															),
														),
														Y
													);
												},
											}),
											null,
										),
										(0, E.insert)(
											W,
											(0, C.createComponent)(d.Show, {
												get when() {
													return (
														H().status === "failed" || H().status === "aborted"
													);
												},
												get children() {
													const Y = y();
													return (
														Y.style.setProperty("font-size", "14px"),
														Y.style.setProperty(
															"color",
															"var(--vscode-testing-iconFailed)",
														),
														(0, w.effect)(() =>
															(0, i.className)(
																Y,
																u.ThemeIcon.asClassName(r.$ak.error),
															),
														),
														Y
													);
												},
											}),
											null,
										),
										X.style.setProperty("padding", "0px 12px"),
										X.style.setProperty(
											"background-color",
											"var(--vscode-editor-background)",
										),
										(0, E.insert)(
											X,
											(0, C.createComponent)(d.Switch, {
												get children() {
													return [
														(0, C.createComponent)(d.Match, {
															get when() {
																return (
																	B() ===
																	m.ComposerCapabilityRequest_ToolType.ITERATE
																);
															},
															get children() {
																return (0, C.createComponent)(h.$4$b, {
																	get rawText() {
																		return O().params.instructions;
																	},
																	codeBlockProps: { shouldRecompute: 0 },
																	finished: !0,
																});
															},
														}),
														(0, C.createComponent)(d.Match, {
															when: !0,
															get children() {
																const Y = $();
																return (
																	Y.style.setProperty(
																		"white-space",
																		"pre-wrap",
																	),
																	Y.style.setProperty(
																		"word-break",
																		"break-word",
																	),
																	(0, E.insert)(Y, () =>
																		JSON.stringify(O(), null, 2),
																	),
																	Y
																);
															},
														}),
													];
												},
											}),
										),
										(0, w.effect)(
											(Y) => {
												const ie = N(),
													ne = u.ThemeIcon.asClassName(U() ?? r.$ak.tools);
												return (
													ie !== Y._v$ &&
														((Y._v$ = ie) != null
															? V.style.setProperty("background", ie)
															: V.style.removeProperty("background")),
													ne !== Y._v$2 && (0, i.className)(K, (Y._v$2 = ne)),
													Y
												);
											},
											{ _v$: void 0, _v$2: void 0 },
										),
										q
									);
								})(),
						});
					};
				e.ComposerMessageToolCallBlock = S;
			},
		),
		define(
			de[1379],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 295, 26, 36, 225, 167, 485, 54, 311, 9,
				156, 177, 428,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerMessageToolCallPill = e.ComposerMessageToolCallPillPure =
						void 0);
				const y = (0, t.template)("<span>"),
					$ = (0, t.template)('<span title="Completed">'),
					v = (0, t.template)('<span title="Failed">'),
					S = (0, t.template)(
						'<div><div class="composer-message-code-pill"><span></span><span>',
					),
					I = (0, t.template)("<div>hi"),
					T = (k) => {
						const { showHover: L, hideHover: D } = (0,
							o.useComposerHoverTooltip)(),
							M = (0, h.$odc)(),
							N = {
								width: "14px",
								height: "14px",
								display: "flex",
								"align-items": "center",
								padding: "0px",
								"justify-content": "center",
							},
							A = (0, l.$b$b)();
						return (() => {
							const R = S(),
								O = R.firstChild,
								B = O.firstChild,
								U = B.nextSibling;
							return (
								R.addEventListener("click", () => k.onClick?.()),
								R.style.setProperty("display", "flex"),
								R.style.setProperty("align-items", "center"),
								R.style.setProperty("margin", "4px 0px"),
								R.style.setProperty("gap", "6px"),
								R.style.setProperty("max-width", "100%"),
								R.style.setProperty("overflow", "hidden"),
								(0, d.addEventListener)(O, "mouseleave", D),
								O.addEventListener("mouseenter", (z) => {
									k.toolCallHoverTooltip && L(z, k.toolCallHoverTooltip);
								}),
								O.style.setProperty("display", "flex"),
								O.style.setProperty("align-items", "center"),
								O.style.setProperty("height", "20px"),
								O.style.setProperty("min-width", "0"),
								O.style.setProperty("padding-left", "4px"),
								O.style.setProperty("padding-right", "4px"),
								O.style.setProperty("border-radius", "4px"),
								O.style.setProperty("cursor", "pointer"),
								O.style.setProperty("user-select", "none"),
								O.style.setProperty(
									"border",
									"1px solid var(--vscode-commandCenter-inactiveBorder)",
								),
								(0, E.insert)(
									O,
									(0, C.createComponent)(m.Show, {
										get when() {
											return k.toolCallResource;
										},
										get fallback() {
											return (0, C.createComponent)(m.Show, {
												get when() {
													return k.toolCallIcon;
												},
												children: (z) =>
													(0, C.createComponent)(m.Show, {
														get when() {
															return typeof z() == "string";
														},
														get fallback() {
															return (() => {
																const F = y();
																return (
																	F.style.setProperty("font-size", "12px"),
																	F.style.setProperty("margin-right", "4px"),
																	(0, E.insert)(F, () => z()),
																	F
																);
															})();
														},
														get children() {
															const F = y();
															return (
																F.style.setProperty("font-size", "12px"),
																F.style.setProperty("margin-right", "4px"),
																(0, w.effect)(() =>
																	(0, i.className)(
																		F,
																		a.ThemeIcon.asClassName(z()),
																	),
																),
																F
															);
														},
													}),
											});
										},
										get children() {
											return (0, C.createComponent)(m.Show, {
												get when() {
													return A();
												},
												get children() {
													const z = y();
													return (
														z.style.setProperty("margin-right", "-3px"),
														z.style.setProperty("scale", "0.8"),
														z.style.setProperty("height", "14px"),
														z.style.setProperty("display", "flex"),
														z.style.setProperty("align-items", "center"),
														(0, E.insert)(
															z,
															(0, C.createComponent)(b.$k$b, {
																get fileName() {
																	return k.toolCallResource.toString();
																},
																get workspaceContextService() {
																	return M.workspaceContextService;
																},
																get modelService() {
																	return M.modelService;
																},
																get languageService() {
																	return M.languageService;
																},
															}),
														),
														z
													);
												},
											});
										},
									}),
									B,
								),
								B.style.setProperty("line-height", "120%"),
								B.style.setProperty("font-size", "10px"),
								B.style.setProperty("white-space", "nowrap"),
								B.style.setProperty("overflow", "hidden"),
								B.style.setProperty("text-overflow", "ellipsis"),
								B.style.setProperty("flex-shrink", "0"),
								(0, E.insert)(B, () => k.toolCallLabel),
								U.style.setProperty("display", "flex"),
								U.style.setProperty("align-items", "center"),
								U.style.setProperty("gap", "4px"),
								U.style.setProperty("margin-left", "4px"),
								U.style.setProperty("flex-shrink", "1"),
								U.style.setProperty("min-width", "0"),
								(0, E.insert)(
									U,
									(0, C.createComponent)(m.Show, {
										get when() {
											return k.toolCallSecondaryLabel;
										},
										get children() {
											const z = y();
											return (
												z.style.setProperty(
													"color",
													"var(--vscode-input-placeholderForeground)",
												),
												z.style.setProperty("font-size", "10px"),
												z.style.setProperty("flex-shrink", "1"),
												z.style.setProperty("text-overflow", "ellipsis"),
												z.style.setProperty("overflow", "hidden"),
												z.style.setProperty("white-space", "nowrap"),
												(0, E.insert)(z, () => k.toolCallSecondaryLabel),
												z
											);
										},
									}),
									null,
								),
								(0, E.insert)(
									U,
									(0, C.createComponent)(m.Switch, {
										get children() {
											return [
												(0, C.createComponent)(m.Match, {
													get when() {
														return (
															k.status === "generating" ||
															k.status === "loading"
														);
													},
													get children() {
														const z = y();
														return (
															z.style.setProperty("transform", "scale(0.75)"),
															z.style.setProperty("display", "flex"),
															z.style.setProperty("align-items", "center"),
															z.style.setProperty("justify-content", "center"),
															z.style.setProperty("max-height", "10px"),
															(0, E.insert)(
																z,
																(0, C.createComponent)(u.$Z8b, {}),
															),
															z
														);
													},
												}),
												(0, C.createComponent)(m.Match, {
													get when() {
														return k.status === "completed";
													},
													get children() {
														const z = $();
														return (
															z.style.setProperty("font-size", "10px"),
															z.style.setProperty(
																"color",
																"var(--vscode-testing-iconPassed)",
															),
															(0, w.effect)(() =>
																(0, i.className)(
																	z,
																	a.ThemeIcon.asClassName(r.$ak.check),
																),
															),
															z
														);
													},
												}),
												(0, C.createComponent)(m.Match, {
													get when() {
														return (
															k.status === "failed" || k.status === "aborted"
														);
													},
													get children() {
														const z = v();
														return (
															z.style.setProperty("font-size", "10px"),
															z.style.setProperty(
																"color",
																"var(--vscode-testing-iconFailed)",
															),
															(0, w.effect)(() =>
																(0, i.className)(
																	z,
																	a.ThemeIcon.asClassName(r.$ak.error),
																),
															),
															z
														);
													},
												}),
												(0, C.createComponent)(m.Match, {
													get when() {
														return k.status === "pending_decision";
													},
													get children() {
														const z = y();
														return (
															z.style.setProperty("display", "flex"),
															z.style.setProperty("align-items", "center"),
															z.style.setProperty("gap", "2px"),
															(0, E.insert)(
																z,
																(0, C.createComponent)(
																	g.ComposerToolbarSimpleButton,
																	{
																		type: "secondary",
																		get codicon() {
																			return r.$ak.close;
																		},
																		style: N,
																		onClick: (F) => {
																			F.stopPropagation(), k.onCancel?.();
																		},
																	},
																),
																null,
															),
															(0, E.insert)(
																z,
																(0, C.createComponent)(
																	g.ComposerToolbarSimpleButton,
																	{
																		type: "primary",
																		get codicon() {
																			return r.$ak.check;
																		},
																		style: N,
																		onClick: (F) => {
																			F.stopPropagation(), k.onProceed?.();
																		},
																	},
																),
																null,
															),
															z
														);
													},
												}),
											];
										},
									}),
									null,
								),
								R
							);
						})();
					};
				e.ComposerMessageToolCallPillPure = T;
				const P = (k) => {
					const L = (0, h.$odc)(),
						{
							composerDataHandle: D,
							currentComposer: M,
							updateCurrentComposer: N,
						} = (0, s.useComposerDataHandle)(() => k.composerDataHandle),
						A = (0, m.createMemo)(() =>
							L.composerDataService.getComposerBubble(
								M().composerId,
								k.bubbleId,
							),
						),
						R = (0, m.createMemo)(() =>
							A()?.capabilityCodeBlocks?.find(
								(K) =>
									K.type === c.ToolCallCodeBlockAlias &&
									K.codeBlockIdx === k.codeBlockIdx,
							),
						),
						O = (0, m.createMemo)(() => (R() ? R().parsedToolCall : null)),
						B = (0, m.createMemo)(() => (O() ? O().type : void 0)),
						U = (0, m.createMemo)(() => {
							if (B()) return c.composerToolCallTypeToIcon[B()];
						}),
						z = (0, m.createMemo)(() =>
							B() ? c.composerToolCallTypeToLabel[B()] : "",
						),
						F = (0, m.createMemo)(() => {
							if (!O()) return "";
							const { type: G, params: K } = O();
							switch (G) {
								case n.ComposerCapabilityRequest_ToolType.RUN_TERMINAL_COMMAND:
									return K.command;
								case n.ComposerCapabilityRequest_ToolType.ADD_FILE_TO_CONTEXT:
									return (0, p.$sc)(K.filePath);
								case n.ComposerCapabilityRequest_ToolType.ITERATE:
									return K.instructions;
								case n.ComposerCapabilityRequest_ToolType
									.SEMANTIC_SEARCH_CODEBASE:
									return K.query;
								case n.ComposerCapabilityRequest_ToolType
									.REMOVE_FILE_FROM_CONTEXT:
									return (0, p.$sc)(K.filePath);
								default:
									return "";
							}
						}),
						x = (0, m.createMemo)(() => {
							if (!O()) return "";
							const { type: G, params: K } = O(),
								J = (W) => {
									let X = L.labelService.getUriLabel(f.URI.parse(W), {
										relative: !0,
									});
									return X && X.startsWith("/") && (X = X.slice(1)), X ?? W;
								};
							switch (G) {
								case n.ComposerCapabilityRequest_ToolType.RUN_TERMINAL_COMMAND:
									return K.command;
								case n.ComposerCapabilityRequest_ToolType.ITERATE:
									return K.instructions;
								case n.ComposerCapabilityRequest_ToolType
									.SEMANTIC_SEARCH_CODEBASE:
									return K.query;
								case n.ComposerCapabilityRequest_ToolType.ADD_FILE_TO_CONTEXT:
									return J(K.filePath);
								case n.ComposerCapabilityRequest_ToolType
									.REMOVE_FILE_FROM_CONTEXT:
									return J(K.filePath);
								default:
									return "";
							}
						}),
						H = () => {
							const G = M().capabilities.find(
								(K) =>
									K.type ===
									n.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_CALL,
							);
							G && G.acceptToolCall(k.bubbleId, k.codeBlockIdx);
						},
						q = () => {
							const G = M().capabilities.find(
								(K) =>
									K.type ===
									n.ComposerCapabilityRequest_ComposerCapabilityType.TOOL_CALL,
							);
							G && G.rejectToolCall(k.bubbleId, k.codeBlockIdx);
						},
						V = (0, m.createMemo)(() => {
							if (
								O() &&
								B() === n.ComposerCapabilityRequest_ToolType.ADD_FILE_TO_CONTEXT
							)
								return f.URI.parse(O().params.filePath);
						});
					return (0, C.createComponent)(m.Show, {
						get when() {
							return R();
						},
						get fallback() {
							return (() => {
								const G = I();
								return G.style.setProperty("display", "none"), G;
							})();
						},
						children: (G) =>
							(0, C.createComponent)(m.Show, {
								get when() {
									return B() !== void 0;
								},
								get fallback() {
									return (0, C.createComponent)(m.Show, {
										get when() {
											return (
												G().status === "aborted" || G().status === "failed"
											);
										},
										get fallback() {
											return (0, C.createComponent)(m.Show, {
												get when() {
													return (
														G().status === "generating" ||
														G().status === "loading"
													);
												},
												get fallback() {
													return (() => {
														const K = I();
														return K.style.setProperty("display", "none"), K;
													})();
												},
												get children() {
													return (0, C.createComponent)(
														e.ComposerMessageToolCallPillPure,
														{
															toolCallLabel: "Tool Call",
															status: "generating",
														},
													);
												},
											});
										},
										get children() {
											return (0, C.createComponent)(
												e.ComposerMessageToolCallPillPure,
												{ toolCallLabel: "Tool Call", status: "failed" },
											);
										},
									});
								},
								get children() {
									return (0, C.createComponent)(
										e.ComposerMessageToolCallPillPure,
										{
											get toolCallIcon() {
												return U();
											},
											get toolCallLabel() {
												return z() ?? "Tool Call";
											},
											get toolCallSecondaryLabel() {
												return F();
											},
											get toolCallHoverTooltip() {
												return x();
											},
											get toolCallResource() {
												return V();
											},
											get status() {
												return G().status;
											},
											onClick: () => {
												const K = O();
												if (
													G().status === "completed" &&
													K?.type ===
														n.ComposerCapabilityRequest_ToolType
															.ADD_FILE_TO_CONTEXT
												)
													try {
														const J = K.params.filePath,
															W =
																L.workspaceContextService.resolveRelativePath(
																	J,
																);
														W && L.openerService.open(W);
													} catch (J) {
														console.error(J);
													}
											},
											onCancel: q,
											onProceed: H,
										},
									);
								},
							}),
					});
				};
				e.ComposerMessageToolCallPill = P;
			},
		),
		define(
			de[4286],
			he([1, 0, 2, 2, 2, 2, 13, 36, 225, 14, 1379, 1975, 9, 177]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerMessageAutoContextCodeBlock = void 0);
				const n = (0, t.template)("<div>hi"),
					g = (0, t.template)("<div>"),
					p = (o) => {
						const f = (0, d.$odc)(),
							{ composerDataService: b } = f,
							{
								composerDataHandle: s,
								currentComposer: l,
								updateCurrentComposer: y,
							} = (0, c.useComposerDataHandle)(() => o.composerDataHandle),
							$ = (0, C.createMemo)(() => {
								const v = l();
								if (!v) return null;
								const S = v.conversation.find((T) => T.bubbleId === o.bubbleId);
								return S
									? S.capabilityCodeBlocks?.find(
											(T) =>
												T.type === m.AutoContextCodeBlockAlias &&
												T.codeBlockIdx === o.codeBlockIdx,
										)
									: null;
							});
						return (0, E.createComponent)(C.Show, {
							get when() {
								return $();
							},
							get fallback() {
								return (() => {
									const v = n();
									return v.style.setProperty("display", "none"), v;
								})();
							},
							children: (v) =>
								(0, E.createComponent)(C.Show, {
									get when() {
										return (
											(0, w.memo)(() => v().status !== "generating")() &&
											v().status !== "loading"
										);
									},
									get fallback() {
										return (0, E.createComponent)(
											u.ComposerMessageToolCallPillPure,
											{
												get toolCallIcon() {
													return r.$ak.files;
												},
												toolCallLabel: "Context Picking",
												get status() {
													return v().status ?? "generating";
												},
											},
										);
									},
									get children() {
										const S = g();
										return (
											S.style.setProperty("display", "flex"),
											S.style.setProperty("align-items", "center"),
											S.style.setProperty("flex-wrap", "wrap"),
											S.style.setProperty("margin-bottom", "4px"),
											S.style.setProperty("gap", "4px"),
											(0, i.insert)(
												S,
												(0, E.createComponent)(C.Show, {
													get when() {
														return v().parsedAutoContext;
													},
													get children() {
														return (0, E.createComponent)(C.For, {
															get each() {
																return v().parsedAutoContext;
															},
															children: (I) =>
																(0, E.createComponent)(
																	a.ComposerCodeReferenceComponent,
																	{
																		get relativePath() {
																			return f.workspaceContextService.asRelativePath(
																				h.URI.revive(I),
																			);
																		},
																	},
																),
														});
													},
												}),
											),
											S
										);
									},
								}),
						});
					};
				e.ComposerMessageAutoContextCodeBlock = p;
			},
		),
		define(
			de[4287],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 36, 225, 26, 14, 1379, 156, 54, 299, 177,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerMessageContextPickingCodeBlock = void 0);
				const f = (0, t.template)("<div>hi"),
					b = (0, t.template)(
						'<div class="composer-context-picking-code-block"><div class="context-picking-header"><span></span><span>Relevant Files</span></div><div class="context-picking-content">',
					),
					s = (0, t.template)("<span>"),
					l = (0, t.template)(
						"<div><div><span></span><span></span></div><button>",
					),
					y = ($) => {
						const v = (0, r.$odc)(),
							{ composerService: S } = v,
							{
								composerDataHandle: I,
								currentComposer: T,
								updateCurrentComposer: P,
							} = (0, o.useComposerDataHandle)(() => $.composerDataHandle),
							[k, L] = (0, m.createSignal)(new Set()),
							D = (0, m.createMemo)(() => {
								const R = T();
								if (!R) return null;
								const O = R.conversation.find((U) => U.bubbleId === $.bubbleId);
								return O
									? O.capabilityCodeBlocks?.find(
											(U) =>
												U.type === u.ContextPickingCodeBlockAlias &&
												U.codeBlockIdx === $.codeBlockIdx,
										)
									: null;
							});
						(0, m.createEffect)(() => {
							const R = T();
							if (R) {
								const O = new Set(
									R.context.fileSelections?.map((B) => B.uri.toString()) ?? [],
								);
								L(O);
							}
						});
						const M = (R) => {
								const O = v.workspaceContextService.resolveRelativePath(R);
								(0, p.$9gc)(v, { filePathOrUri: O });
							},
							N = (R) => {
								const O = v.workspaceContextService.resolveRelativePath(R);
								return k().has(O.toString());
							},
							A = (R) => {
								const O = T().composerId;
								if (!O) return;
								const B = v.workspaceContextService.resolveRelativePath(R);
								if (N(R)) {
									const U = T().context;
									if (!U) return;
									const z = U.fileSelections?.findIndex(
										(F) => F.uri.toString() === B.toString(),
									);
									if (typeof z != "number" || z === -1) return;
									S.removeContext({
										composerId: O,
										contextType: "fileSelections",
										index: z,
									});
								} else
									S.addContext({
										composerId: O,
										contextType: "fileSelections",
										value: { uri: B },
										shouldShowPreview: !1,
									});
							};
						return (0, d.createComponent)(m.Show, {
							get when() {
								return D();
							},
							get fallback() {
								return (() => {
									const R = f();
									return R.style.setProperty("display", "none"), R;
								})();
							},
							children: (R) =>
								(0, d.createComponent)(m.Show, {
									get when() {
										return (
											(0, C.memo)(() => R().status !== "generating")() &&
											R().status !== "loading"
										);
									},
									get fallback() {
										return (0, d.createComponent)(
											c.ComposerMessageToolCallPillPure,
											{
												get toolCallIcon() {
													return h.$ak.files;
												},
												toolCallLabel: "Context Picking",
												get status() {
													return R().status ?? "generating";
												},
											},
										);
									},
									get children() {
										const O = b(),
											B = O.firstChild,
											U = B.firstChild,
											z = U.nextSibling,
											F = B.nextSibling;
										return (
											O.style.setProperty("margin-bottom", "16px"),
											B.style.setProperty("display", "flex"),
											B.style.setProperty("align-items", "center"),
											B.style.setProperty("margin-bottom", "8px"),
											U.style.setProperty("font-size", "16px"),
											U.style.setProperty("margin-right", "8px"),
											z.style.setProperty("font-weight", "bold"),
											(0, E.insert)(
												F,
												(0, d.createComponent)(m.For, {
													get each() {
														return R().parsedContextPicking;
													},
													children: (x) =>
														(() => {
															const H = l(),
																q = H.firstChild,
																V = q.firstChild,
																G = V.nextSibling,
																K = q.nextSibling;
															return (
																H.style.setProperty("display", "flex"),
																H.style.setProperty("align-items", "center"),
																H.style.setProperty("margin-bottom", "4px"),
																H.style.setProperty("padding", "4px"),
																H.style.setProperty("border-radius", "4px"),
																q.addEventListener("click", () => M(x)),
																q.style.setProperty("display", "flex"),
																q.style.setProperty("align-items", "center"),
																q.style.setProperty("cursor", "pointer"),
																q.style.setProperty(
																	"color",
																	"var(--vscode-textLink-foreground)",
																),
																q.style.setProperty("flex", "1"),
																V.style.setProperty("margin-right", "4px"),
																V.style.setProperty("height", "14px"),
																V.style.setProperty("display", "flex"),
																V.style.setProperty("align-items", "center"),
																(0, E.insert)(
																	V,
																	(0, d.createComponent)(n.$k$b, {
																		get fileName() {
																			return (0, g.$sc)(x);
																		},
																		get workspaceContextService() {
																			return v.workspaceContextService;
																		},
																		get modelService() {
																			return v.modelService;
																		},
																		get languageService() {
																			return v.languageService;
																		},
																	}),
																),
																(0, E.insert)(G, x),
																(0, E.insert)(
																	q,
																	(0, d.createComponent)(m.Show, {
																		get when() {
																			return N(x);
																		},
																		get children() {
																			const J = s();
																			return (
																				J.style.setProperty(
																					"margin-left",
																					"4px",
																				),
																				J.style.setProperty(
																					"font-size",
																					"14px",
																				),
																				J.style.setProperty(
																					"color",
																					"var(--vscode-inputValidation-infoForeground)",
																				),
																				(0, w.effect)(() =>
																					(0, i.className)(
																						J,
																						a.ThemeIcon.asClassName(
																							h.$ak.check,
																						),
																					),
																				),
																				J
																			);
																		},
																	}),
																	null,
																),
																K.addEventListener("click", () => A(x)),
																K.style.setProperty("background", "none"),
																K.style.setProperty("border", "none"),
																K.style.setProperty("cursor", "pointer"),
																K.style.setProperty(
																	"color",
																	"var(--vscode-button-foreground)",
																),
																K.style.setProperty(
																	"background-color",
																	"var(--vscode-button-background)",
																),
																K.style.setProperty("padding", "2px 6px"),
																K.style.setProperty("border-radius", "2px"),
																K.style.setProperty("font-size", "12px"),
																(0, E.insert)(K, () =>
																	N(x) ? "Remove" : "Add",
																),
																(0, w.effect)(() =>
																	(N(x)
																		? "var(--vscode-list-activeSelectionBackground)"
																		: "transparent") != null
																		? H.style.setProperty(
																				"background",
																				N(x)
																					? "var(--vscode-list-activeSelectionBackground)"
																					: "transparent",
																			)
																		: H.style.removeProperty("background"),
																),
																H
															);
														})(),
												}),
											),
											(0, w.effect)(() =>
												(0, i.className)(
													U,
													a.ThemeIcon.asClassName(h.$ak.files),
												),
											),
											O
										);
									},
								}),
						});
					};
				e.ComposerMessageContextPickingCodeBlock = y;
			},
		),
		define(
			de[4288],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 225, 242, 169, 1366, 36, 14, 26,
				485, 1004, 858, 311, 167, 28, 4158, 156, 135, 54, 565, 246, 116, 177,
				124, 428, 1066, 2418,
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
				A,
				R,
				O,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerDiffReviewToolbar = W),
					(e.ComposerToolbar = Y),
					(e.ComposerChatToolbar = ie),
					(e.ComposerToolFormerToolbar = ne);
				const B = (0, t.template)("<span>"),
					U = (0, t.template)("<span>(<!> file<!> changed)"),
					z = (0, t.template)("<div><div><div><div>Reviewing"),
					F = (0, t.template)("<div>"),
					x = (0, t.template)(
						'<div class="composer-file-list-item"><div><span></span><span>/',
					),
					H = (0, t.template)("<span>Generating"),
					q = (0, t.template)("<span>Applying"),
					V = (0, t.template)("<span>Running capabilities"),
					G = (0, t.template)("<div><div><div><div>"),
					K = (0, t.template)("<div><div><span>"),
					J = () => ({
						display: "flex",
						"align-items": "center",
						gap: "4px",
						cursor: "pointer",
						height: "18.5px",
						"flex-shrink": 0,
					});
				function W(ee) {
					const _ = (0, o.$odc)(),
						{ composerDataService: te } = _,
						{
							composerDataHandle: Q,
							currentComposer: Z,
							updateCurrentComposer: se,
						} = (0, N.useComposerDataHandle)(() => ee.composerDataHandle),
						{ showHover: re, hideHover: le } = (0, $.useComposerHoverTooltip)({
							delay: g.COMPOSER_HOVER_TOOLTIP_DELAY,
						}),
						oe = (0, h.createMemo)(() => ee.diffReviewCapability),
						ae = (0, h.createMemo)(() => {
							const fe = oe();
							if (!fe) return [];
							const me = fe.relevantUris();
							return me
								? me
										.map((ve) => {
											const ge = ve.toString(),
												be =
													_.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
														(Ce) => Ce.uri.toString() === ge,
													);
											return !be || "isMultiInlineDiff" in be ? null : be.id;
										})
										.filter(S.$tg)
								: [];
						}),
						pe = (0, h.createMemo)(() => ae().length > 0),
						$e = async () => {
							const fe = oe();
							if (!fe || !Z()) return;
							const ve = fe.relevantUris();
							if (ve && ve.length !== 0)
								for (const ge of ve) {
									const be =
										_.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
											(Ce) => Ce.uri.toString() === ge.toString(),
										)?.id;
									be && (await _.inlineDiffService.acceptDiff(be));
								}
						},
						ye = async () => {
							const fe = oe();
							if (!fe || !Z()) return;
							const ve = fe.relevantUris();
							if (ve)
								for (const ge of ve) {
									const be =
										_.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
											(Ce) => Ce.uri.toString() === ge.toString(),
										)?.id;
									be && (await _.inlineDiffService.rejectDiff(be));
								}
						},
						ue = async () => {
							const fe = oe();
							fe && (await fe.abort());
						};
					return (() => {
						const fe = z(),
							me = fe.firstChild,
							ve = me.firstChild,
							ge = ve.firstChild,
							be = ge.firstChild;
						return (
							me.style.setProperty("display", "flex"),
							me.style.setProperty("justify-content", "space-between"),
							me.style.setProperty("align-items", "center"),
							me.style.setProperty("width", "100%"),
							ve.addEventListener("mouseup", () => {
								ee.isDragging?.() || ee.onToggleFileList();
							}),
							ve.style.setProperty("text-wrap", "nowrap"),
							ve.style.setProperty("text-overflow", "ellipsis"),
							ve.style.setProperty("overflow", "hidden"),
							ve.style.setProperty("flex-grow", "1"),
							ve.style.setProperty("flex-basis", "0"),
							ve.style.setProperty("display", "inline-flex"),
							ve.style.setProperty("align-items", "center"),
							ve.style.setProperty("flex-wrap", "nowrap"),
							ve.style.setProperty("gap", "4px"),
							(0, d.insert)(
								ve,
								(0, r.createComponent)(h.Show, {
									get when() {
										return ee.canShowFileList;
									},
									get children() {
										const Ce = B();
										return (
											Ce.style.setProperty(
												"color",
												"var(--vscode-input-placeholderForeground)",
											),
											Ce.style.setProperty("font-size", "10px"),
											Ce.style.setProperty("flex-shrink", "0"),
											(0, a.effect)(
												(Le) => {
													const Fe = ee.isFileListExpanded()
															? "rotate(90deg)"
															: "rotate(0deg)",
														Oe = b.ThemeIcon.asClassName(f.$ak.chevronRight);
													return (
														Fe !== Le._v$ &&
															((Le._v$ = Fe) != null
																? Ce.style.setProperty("transform", Fe)
																: Ce.style.removeProperty("transform")),
														Oe !== Le._v$2 &&
															(0, u.className)(Ce, (Le._v$2 = Oe)),
														Le
													);
												},
												{ _v$: void 0, _v$2: void 0 },
											),
											Ce
										);
									},
								}),
								ge,
							),
							ge.style.setProperty(
								"color",
								"var(--vscode-input-placeholderForeground)",
							),
							ge.style.setProperty("margin", "0"),
							ge.style.setProperty("font-size", "10px"),
							ge.style.setProperty("flex-shrink", "0"),
							ge.style.setProperty("white-space", "nowrap"),
							ge.style.setProperty("text-overflow", "ellipsis"),
							ge.style.setProperty("overflow", "hidden"),
							ge.style.setProperty("flex-basis", "0"),
							ge.style.setProperty("flex-grow", "1"),
							(0, d.insert)(
								ge,
								(0, r.createComponent)(h.Show, {
									get when() {
										return ee.shouldShowFileCount;
									},
									get children() {
										const Ce = U(),
											Le = Ce.firstChild,
											Fe = Le.nextSibling,
											Oe = Fe.nextSibling,
											xe = Oe.nextSibling,
											He = xe.nextSibling;
										return (
											Ce.style.setProperty("margin-left", "4px"),
											(0, d.insert)(Ce, () => ee.numFiles(), Fe),
											(0, d.insert)(
												Ce,
												() => (ee.numFiles() > 1 ? "s" : ""),
												xe,
											),
											Ce
										);
									},
								}),
								null,
							),
							(0, d.insert)(
								me,
								(0, r.createComponent)(l.$q$b, {
									noTransition: !0,
									style: {
										display: "flex",
										"align-items": "center",
										"justify-content": "flex-end",
										margin: "0px",
										padding: "0",
									},
									forceGap: 4,
									get children() {
										return [
											(0, r.createComponent)(s.ComposerToolbarSimpleButton, {
												type: "secondary",
												onClick: ue,
												get style() {
													return J();
												},
												hintText:
													"Abort review and and undo all accept/rejects",
												children: "Abort review",
											}),
											(0, r.createComponent)(h.Show, {
												get when() {
													return pe();
												},
												get children() {
													return (0, r.createComponent)(
														s.ComposerToolbarSimpleButton,
														{
															type: "secondary",
															onClick: ye,
															get style() {
																return J();
															},
															get hintText() {
																return `Reject all expanded changes (${(0, D.getShortcut)("\u232B")})`;
															},
															children: "Reject changes",
														},
													);
												},
											}),
											(0, r.createComponent)(h.Show, {
												get when() {
													return pe();
												},
												get children() {
													return (0, r.createComponent)(
														s.ComposerToolbarSimpleButton,
														{
															type: "primary",
															onClick: $e,
															get style() {
																return J();
															},
															get hintText() {
																return `Accept all expanded changes (${(0, D.getShortcut)("\u23CE")})`;
															},
															children: "Accept changes",
														},
													);
												},
											}),
										];
									},
								}),
								null,
							),
							(0, a.effect)(
								(Ce) => {
									const Le = { ...ee.styles },
										Fe = ee.isFileListExpanded()
											? "auto"
											: `${g.COMPOSER_TOOLBAR_HEIGHT}px`,
										Oe = ee.isFileListExpanded() ? "3px" : "0px",
										xe = ee.canShowFileList() ? "pointer" : "default";
									return (
										(Ce._v$3 = (0, C.style)(fe, Le, Ce._v$3)),
										Fe !== Ce._v$4 &&
											((Ce._v$4 = Fe) != null
												? me.style.setProperty("height", Fe)
												: me.style.removeProperty("height")),
										Oe !== Ce._v$5 &&
											((Ce._v$5 = Oe) != null
												? me.style.setProperty("padding-top", Oe)
												: me.style.removeProperty("padding-top")),
										xe !== Ce._v$6 &&
											((Ce._v$6 = xe) != null
												? ve.style.setProperty("cursor", xe)
												: ve.style.removeProperty("cursor")),
										Ce
									);
								},
								{ _v$3: void 0, _v$4: void 0, _v$5: void 0, _v$6: void 0 },
							),
							fe
						);
					})();
				}
				function X(ee) {
					const _ = (0, o.$odc)(),
						{ composerDataService: te, composerService: Q } = _,
						[Z, se] = (0, h.createSignal)(0),
						[re, le] = (0, h.createSignal)(null),
						oe = (0, h.createMemo)(() => {
							const $e = ee.currentComposer.tabs.filter(
								(ye) => ye.type === "code",
							);
							return $e
								? $e.filter(
										(ye) =>
											!te.getComposerCodeBlock(
												ee.composerDataHandle,
												ye.uri,
												ye.version,
											)?.isNotApplied,
									)
								: [];
						});
					(0, h.createEffect)(() => {
						const $e = oe().length;
						se(re()?.clientHeight ?? 0);
					}),
						(0, h.createEffect)(() => {
							(0, h.onMount)(() => {
								setTimeout(() => {
									se(re()?.clientHeight ?? 0);
								});
							});
						});
					const ae = ($e, ye, ue) => {
							if (ye) {
								(0, D.openCodeSelectionInEditor)(
									{
										uri: $e,
										range: {
											positionLineNumber: ye.startLineNumber,
											positionColumn: 1,
											selectionStartLineNumber: ye.startLineNumber,
											selectionStartColumn: 1,
										},
										text: "",
									},
									_.workspaceContextService,
									_.openerService,
								);
								return;
							}
							_.openerService.open($e, {
								editorOptions: {
									revealIfVisible: !0,
									revealIfOpened: !0,
									source: M.EditorOpenSource.USER,
									preserveFocus: !0,
								},
								openToSide: ue ?? !1,
							});
						},
						pe = (0, R.$b$b)();
					return (0, r.createComponent)(h.Show, {
						get when() {
							return ee.shouldShowFileList;
						},
						get children() {
							const $e = F();
							return (
								$e.style.setProperty("width", "100%"),
								$e.style.setProperty("margin-top", "3px"),
								$e.style.setProperty("margin-bottom", "5px"),
								$e.style.setProperty(
									"background",
									"var(--vscode-editor-background)",
								),
								$e.style.setProperty("border-radius", "2px"),
								$e.style.setProperty(
									"border",
									"1px solid var(--vscode-commandCenter-inactiveBorder)",
								),
								$e.style.setProperty("contain", "paint"),
								(0, d.insert)(
									$e,
									(0, r.createComponent)(P.$w0b, {
										style: { height: "100%" },
										contentStyle: {
											display: "flex",
											"flex-direction": "column",
										},
										innerContainerStyle: { "min-height": "unset" },
										scrollingDirection: "vertical",
										nonReactiveElementOptions: { alwaysConsumeMouseWheel: !0 },
										get children() {
											const ye = F();
											return (
												(0, E.use)(le, ye),
												(0, d.insert)(
													ye,
													(0, r.createComponent)(h.For, {
														get each() {
															return oe();
														},
														children: (ue) => {
															const fe = (0, h.createMemo)(() =>
																	te.getLatestCodeBlockVersion(
																		ee.composerId,
																		ue.uri,
																	),
																),
																me = (0, h.createMemo)(
																	() =>
																		te.getCodeBlockStatus(
																			ee.composerId,
																			ue.uri,
																			ue.version,
																		) ?? "none",
																),
																[ve, ge] = (0, h.createSignal)(!1),
																be = (0, h.createMemo)(() =>
																	te.getInlineDiff(ee.composerId, ue.uri),
																),
																Ce = (0, h.createMemo)(
																	() => (be()?.changes.length ?? 0) > 0,
																);
															return (() => {
																const Le = x(),
																	Fe = Le.firstChild,
																	Oe = Fe.firstChild,
																	xe = Oe.nextSibling,
																	He = xe.firstChild;
																return (
																	Le.addEventListener("click", (Ke) => {
																		if (Ke.defaultPrevented) return;
																		const Je = be()?.changes?.[0];
																		ae(
																			ue.uri,
																			Je && {
																				startLineNumber:
																					Je.addedRange.startLineNumber,
																			},
																			Ke.altKey,
																		);
																	}),
																	Le.addEventListener("mouseleave", () =>
																		ge(!1),
																	),
																	Le.addEventListener("mouseenter", () =>
																		ge(!0),
																	),
																	Le.style.setProperty("display", "flex"),
																	Le.style.setProperty("align-items", "center"),
																	Le.style.setProperty(
																		"justify-content",
																		"space-between",
																	),
																	Le.style.setProperty("gap", "4px"),
																	Le.style.setProperty("cursor", "pointer"),
																	Le.style.setProperty("padding", "0px 4px"),
																	Le.style.setProperty("height", "20px"),
																	Fe.style.setProperty("display", "flex"),
																	Fe.style.setProperty("align-items", "center"),
																	Fe.style.setProperty("gap", "4px"),
																	Fe.style.setProperty("min-width", "0"),
																	Fe.style.setProperty("flex", "1"),
																	(0, d.insert)(
																		Fe,
																		(0, r.createComponent)(h.Show, {
																			get when() {
																				return pe();
																			},
																			get children() {
																				const Ke = B();
																				return (
																					Ke.style.setProperty(
																						"margin-right",
																						"-4px",
																					),
																					Ke.style.setProperty("scale", "0.8"),
																					Ke.style.setProperty(
																						"height",
																						"14px",
																					),
																					Ke.style.setProperty(
																						"display",
																						"flex",
																					),
																					Ke.style.setProperty(
																						"align-items",
																						"center",
																					),
																					(0, d.insert)(
																						Ke,
																						(0, r.createComponent)(T.$k$b, {
																							get fileName() {
																								return ue.uri.fsPath;
																							},
																							get workspaceContextService() {
																								return _.workspaceContextService;
																							},
																							get modelService() {
																								return _.modelService;
																							},
																							get languageService() {
																								return _.languageService;
																							},
																							height: 14,
																						}),
																					),
																					Ke
																				);
																			},
																		}),
																		Oe,
																	),
																	Oe.style.setProperty("font-size", "11px"),
																	Oe.style.setProperty("white-space", "nowrap"),
																	Oe.style.setProperty("overflow", "hidden"),
																	Oe.style.setProperty(
																		"text-overflow",
																		"ellipsis",
																	),
																	Oe.style.setProperty("line-height", "120%"),
																	Oe.style.setProperty(
																		"color",
																		"var(--vscode-input-foreground)",
																	),
																	(0, d.insert)(Oe, () =>
																		(0, k.$sc)(ue.uri.fsPath),
																	),
																	xe.style.setProperty("opacity", "0.7"),
																	xe.style.setProperty("font-size", "10px"),
																	xe.style.setProperty(
																		"color",
																		"var(--vscode-input-placeholderForeground)",
																	),
																	xe.style.setProperty(
																		"font-variant-numeric",
																		"tabular-nums",
																	),
																	(0, d.insert)(xe, () => ue.version + 1, He),
																	(0, d.insert)(xe, () => fe() + 1, null),
																	(0, d.insert)(
																		Fe,
																		(0, r.createComponent)(
																			L.ComposerGeneralStatusIndicator,
																			{
																				get status() {
																					return me();
																				},
																			},
																		),
																		null,
																	),
																	(0, d.insert)(
																		Le,
																		(0, r.createComponent)(l.$q$b, {
																			noTransition: !0,
																			get outerContainerStyle() {
																				return {
																					"align-items": "center",
																					opacity: ve() ? "1" : "0",
																				};
																			},
																			get children() {
																				return [
																					(0, r.createComponent)(h.Show, {
																						get when() {
																							return c.REAPPLY_RELATED_STATUSES.includes(
																								me(),
																							);
																						},
																						get children() {
																							return (0, r.createComponent)(
																								s.ComposerToolbarSimpleButton,
																								{
																									type: "secondary",
																									get style() {
																										return { ...J() };
																									},
																									onClick: (Ke) => {
																										Ke.stopPropagation(),
																											Q.reapply(
																												ee.composerId,
																												ue.uri,
																												ue.version,
																											);
																									},
																									hintText: "Reapply",
																									get codicon() {
																										return f.$ak.refresh;
																									},
																								},
																							);
																						},
																					}),
																					(0, r.createComponent)(h.Show, {
																						get when() {
																							return Q.shouldShowAcceptReject(
																								ee.composerId,
																								ue.uri,
																								ue.version,
																							);
																						},
																						get children() {
																							return (0, r.createComponent)(
																								s.ComposerToolbarSimpleButton,
																								{
																									type: "secondary",
																									get codicon() {
																										return f.$ak.close;
																									},
																									get style() {
																										return J();
																									},
																									onClick: (Ke) => {
																										Ke.stopPropagation(),
																											Q.reject(
																												ee.composerId,
																												ue.uri,
																												ue.version,
																											);
																									},
																									hintText: "Reject",
																								},
																							);
																						},
																					}),
																					(0, r.createComponent)(h.Show, {
																						get when() {
																							return Q.shouldShowAcceptReject(
																								ee.composerId,
																								ue.uri,
																								ue.version,
																							);
																						},
																						get children() {
																							return (0, r.createComponent)(
																								s.ComposerToolbarSimpleButton,
																								{
																									type: "secondary",
																									get codicon() {
																										return f.$ak.check;
																									},
																									get style() {
																										return J();
																									},
																									onClick: (Ke) => {
																										Ke.stopPropagation(),
																											Q.accept(
																												ee.composerId,
																												ue.uri,
																												ue.version,
																											);
																									},
																									hintText: "Accept",
																								},
																							);
																						},
																					}),
																					(0, r.createComponent)(h.Show, {
																						get when() {
																							return Ce();
																						},
																						get children() {
																							return (0, r.createComponent)(
																								s.ComposerToolbarSimpleButton,
																								{
																									type: "secondary",
																									get codicon() {
																										return f.$ak.diff;
																									},
																									get style() {
																										return J();
																									},
																									onClick: (Ke) => {
																										Ke.preventDefault(),
																											Ke.stopImmediatePropagation(),
																											Ke.stopPropagation(),
																											_.composerService.openDiffEditor(
																												ee.composerId,
																												ue.uri,
																											);
																									},
																									hintText: "Open Diff Editor",
																								},
																							);
																						},
																					}),
																				];
																			},
																		}),
																		null,
																	),
																	Le
																);
															})();
														},
													}),
												),
												ye
											);
										},
									}),
								),
								(0, a.effect)(() =>
									Math.min(Z(), 80) + "px" != null
										? $e.style.setProperty("height", Math.min(Z(), 80) + "px")
										: $e.style.removeProperty("height"),
								),
								$e
							);
						},
					});
				}
				function Y(ee) {
					const _ = (0, o.$odc)(),
						{ composerDataService: te } = _,
						{
							currentComposer: Q,
							composerDataHandle: Z,
							updateCurrentComposer: se,
						} = (0, N.useComposerDataHandle)(() => ee.composerDataHandle),
						re = (0, y.useComposerChatStatus)(Z),
						le = (0, h.createMemo)(() => {
							const Oe = Q().tabs.filter((xe) => xe.type === "code");
							return Oe
								? Oe.filter(
										(xe) =>
											!te.getComposerCodeBlock(Z(), xe.uri, xe.version)
												?.isNotApplied,
									)
								: [];
						}),
						oe = (0, h.createMemo)(() => le().length),
						ae = (0, h.createMemo)(() => oe() > 0),
						pe = (0, h.createMemo)(
							() => oe() > 0 && (re() === "completed" || re() === "cancelled"),
						),
						$e = (0, h.createMemo)(() => ae() && Q().isFileListExpanded),
						ye = (0, h.createMemo)(() => ({
							...ee.style,
							display: "flex",
							"flex-direction": "column",
							height: "auto",
							gap: "0px",
							padding: "0 6px",
						})),
						ue = (0, h.createMemo)(() =>
							te.getPendingUserDecisionGroup(
								ee.composerDataHandle.data.composerId,
							),
						),
						fe = (0, h.createMemo)(() =>
							te.getIsBlockingUserDecision(
								ee.composerDataHandle.data.composerId,
							),
						),
						me = (0, I.useShouldShowChatToolbar)(Z),
						ve = {
							canShowFileList: ae,
							shouldShowFileCount: pe,
							numFiles: oe,
							isFileListExpanded: () => Q().isFileListExpanded ?? !1,
							onToggleFileList: () => {
								se({ isFileListExpanded: !Q().isFileListExpanded });
							},
							chatStatus: () => re(),
						},
						ge = (0, h.createMemo)(() => {
							const Oe = Q();
							return Oe
								? Oe.conversation[Oe.conversation.length - 1].bubbleId
								: "";
						}),
						be = (0, h.createMemo)(() => {
							const Oe = Q();
							if (Oe)
								return Oe.capabilities.find(
									(xe) =>
										xe.type ===
										v.ComposerCapabilityRequest_ComposerCapabilityType
											.DIFF_REVIEW,
								);
						}),
						Ce = (0, h.createMemo)(() => {
							const Oe = be();
							if (Oe) return Oe.diffReviewData;
						}),
						Le = (0, h.createMemo)(() => {
							const Oe = be(),
								xe = Ce();
							return !Oe || !xe || xe.length === 0 || Oe.aiBubbleId() !== ge()
								? !1
								: (xe.some((He) => He.fileChanges.length > 0) ?? !1);
						}),
						Fe = () =>
							(0, r.createComponent)(h.Switch, {
								get children() {
									return [
										(0, r.createComponent)(h.Match, {
											get when() {
												return ue().length > 0;
											},
											get children() {
												return (0, r.createComponent)(
													ne,
													(0, w.mergeProps)(
														{
															get composerDataHandle() {
																return Z();
															},
															get pendingDecisionGroup() {
																return ue();
															},
															get isBlockingUserDecision() {
																return fe();
															},
															get onStartDrag() {
																return ee.onStartDrag;
															},
															get isDragging() {
																return ee.isDragging;
															},
														},
														ve,
													),
												);
											},
										}),
										(0, r.createComponent)(h.Match, {
											get when() {
												return Le();
											},
											get children() {
												return (0, r.createComponent)(
													W,
													(0, w.mergeProps)(
														{
															styles: {},
															get composerDataHandle() {
																return Z();
															},
															get diffReviewCapability() {
																return be();
															},
															get onStartDrag() {
																return ee.onStartDrag;
															},
															get isDragging() {
																return ee.isDragging;
															},
														},
														ve,
													),
												);
											},
										}),
										(0, r.createComponent)(h.Match, {
											when: !0,
											get children() {
												return (0, r.createComponent)(
													ie,
													(0, w.mergeProps)(
														{
															styles: {},
															get composerDataHandle() {
																return Z();
															},
															get onStartDrag() {
																return ee.onStartDrag;
															},
															get isDragging() {
																return ee.isDragging;
															},
														},
														ve,
													),
												);
											},
										}),
									];
								},
							});
					return (0, r.createComponent)(h.Show, {
						get when() {
							return me() || ae();
						},
						get children() {
							const Oe = F();
							return (
								Oe.addEventListener("mousedown", (xe) => ee.onStartDrag?.(xe)),
								(0, d.insert)(Oe, Fe, null),
								(0, d.insert)(
									Oe,
									(0, r.createComponent)(X, {
										get composerId() {
											return Q().composerId;
										},
										get composerDataHandle() {
											return Z();
										},
										get currentComposer() {
											return Q();
										},
										get shouldShowFileList() {
											return $e() ?? !1;
										},
									}),
									null,
								),
								(0, a.effect)((xe) => (0, C.style)(Oe, ye(), xe)),
								Oe
							);
						},
					});
				}
				function ie(ee) {
					const _ = (0, o.$odc)(),
						{ composerDataService: te, composerService: Q } = _,
						{ composerDataHandle: Z, currentComposer: se } = (0,
						N.useComposerDataHandle)(() => ee.composerDataHandle),
						re = (0, h.createMemo)(() => se().composerId),
						{
							shouldShowCancel: le,
							shouldShowSaveAll: oe,
							shouldShowAcceptAll: ae,
							shouldShowRejectAll: pe,
							shouldShowReapplyLastMessage: $e,
						} = (0, p.useComposerCollectedStatuses)(Z),
						ye = (0, O.useShouldShowApplyLastMessage)(Z),
						{ showHover: ue, hideHover: fe } = (0, $.useComposerHoverTooltip)({
							delay: g.COMPOSER_HOVER_TOOLTIP_DELAY,
						}),
						[me, ve] = (0, h.createSignal)(!1),
						ge = (be) => ["generating", "applying", "running"].includes(be);
					return (() => {
						const be = G(),
							Ce = be.firstChild,
							Le = Ce.firstChild,
							Fe = Le.firstChild;
						return (
							Ce.style.setProperty("display", "flex"),
							Ce.style.setProperty("justify-content", "space-between"),
							Ce.style.setProperty("align-items", "center"),
							Ce.style.setProperty("width", "100%"),
							Le.addEventListener("mouseup", () =>
								ee.isDragging?.() ? void 0 : ee.onToggleFileList(),
							),
							Le.style.setProperty("text-wrap", "nowrap"),
							Le.style.setProperty("text-overflow", "ellipsis"),
							Le.style.setProperty("overflow", "hidden"),
							Le.style.setProperty("flex-grow", "1"),
							Le.style.setProperty("flex-basis", "0"),
							Le.style.setProperty("min-width", "120px"),
							Le.style.setProperty("display", "inline-flex"),
							Le.style.setProperty("align-items", "center"),
							Le.style.setProperty("flex-wrap", "nowrap"),
							Le.style.setProperty("gap", "4px"),
							(0, d.insert)(
								Le,
								(0, r.createComponent)(h.Show, {
									get when() {
										return ee.canShowFileList();
									},
									get children() {
										const Oe = B();
										return (
											Oe.style.setProperty("font-size", "10px"),
											Oe.style.setProperty("flex-shrink", "0"),
											(0, a.effect)(
												(xe) => {
													const He =
															ee.chatStatus() === "cancelled"
																? "var(--vscode-testing-iconFailed)"
																: "var(--vscode-input-placeholderForeground)",
														Ke = ee.isFileListExpanded()
															? "rotate(90deg)"
															: "rotate(0deg)",
														Je = b.ThemeIcon.asClassName(f.$ak.chevronRight);
													return (
														He !== xe._v$7 &&
															((xe._v$7 = He) != null
																? Oe.style.setProperty("color", He)
																: Oe.style.removeProperty("color")),
														Ke !== xe._v$8 &&
															((xe._v$8 = Ke) != null
																? Oe.style.setProperty("transform", Ke)
																: Oe.style.removeProperty("transform")),
														Je !== xe._v$9 &&
															(0, u.className)(Oe, (xe._v$9 = Je)),
														xe
													);
												},
												{ _v$7: void 0, _v$8: void 0, _v$9: void 0 },
											),
											Oe
										);
									},
								}),
								Fe,
							),
							Fe.style.setProperty("margin", "0"),
							Fe.style.setProperty("font-size", "10px"),
							Fe.style.setProperty("flex-shrink", "0"),
							Fe.style.setProperty("white-space", "nowrap"),
							Fe.style.setProperty("text-overflow", "ellipsis"),
							Fe.style.setProperty("overflow", "hidden"),
							Fe.style.setProperty("flex-basis", "0"),
							Fe.style.setProperty("flex-grow", "1"),
							(0, d.insert)(
								Fe,
								(0, r.createComponent)(h.Switch, {
									get fallback() {
										return [];
									},
									get children() {
										return [
											(0, r.createComponent)(h.Match, {
												get when() {
													return ee.chatStatus() === "generating";
												},
												get children() {
													const Oe = H(),
														xe = Oe.firstChild;
													return (
														(0, d.insert)(
															Oe,
															(0, r.createComponent)(n.$C$b, { show: !0 }),
															null,
														),
														Oe
													);
												},
											}),
											(0, r.createComponent)(h.Match, {
												get when() {
													return ee.chatStatus() === "applying";
												},
												get children() {
													const Oe = q(),
														xe = Oe.firstChild;
													return (
														(0, d.insert)(
															Oe,
															(0, r.createComponent)(n.$C$b, { show: !0 }),
															null,
														),
														Oe
													);
												},
											}),
											(0, r.createComponent)(h.Match, {
												get when() {
													return ee.chatStatus() === "running";
												},
												get children() {
													const Oe = V(),
														xe = Oe.firstChild;
													return (
														(0, d.insert)(
															Oe,
															(0, r.createComponent)(n.$C$b, { show: !0 }),
															null,
														),
														Oe
													);
												},
											}),
											(0, r.createComponent)(h.Match, {
												get when() {
													return ee.chatStatus() === "cancelled";
												},
												get children() {
													return "Cancelled";
												},
											}),
											(0, r.createComponent)(h.Match, {
												get when() {
													return ee.chatStatus() === "completed";
												},
												get children() {
													return "Completed";
												},
											}),
										];
									},
								}),
								null,
							),
							(0, d.insert)(
								Fe,
								(0, r.createComponent)(h.Show, {
									get when() {
										return (
											(0, m.memo)(() => !!ee.shouldShowFileCount())() &&
											!ge(ee.chatStatus())
										);
									},
									get children() {
										const Oe = U(),
											xe = Oe.firstChild,
											He = xe.nextSibling,
											Ke = He.nextSibling,
											Je = Ke.nextSibling,
											Te = Je.nextSibling;
										return (
											Oe.style.setProperty("margin-left", "4px"),
											(0, d.insert)(Oe, () => ee.numFiles(), He),
											(0, d.insert)(
												Oe,
												() => (ee.numFiles() > 1 ? "s" : ""),
												Je,
											),
											Oe
										);
									},
								}),
								null,
							),
							(0, d.insert)(
								Ce,
								(0, r.createComponent)(l.$q$b, {
									get forceRerender() {
										return ee.chatStatus();
									},
									noTransition: !0,
									style: {
										display: "flex",
										"align-items": "center",
										"justify-content": "flex-end",
										margin: "0px",
										padding: "0",
									},
									forceGap: 4,
									get children() {
										return [
											(0, r.createComponent)(h.Show, {
												get when() {
													return le();
												},
												get children() {
													return (0, r.createComponent)(
														s.ComposerToolbarSimpleButton,
														{
															type: "secondary",
															onClick: () => Q.cancelCurrentStep(re()),
															get style() {
																return J();
															},
															get hintText() {
																return (0, D.getShortcut)("\u232B");
															},
															children: "Cancel",
														},
													);
												},
											}),
											(0, r.createComponent)(h.Show, {
												get when() {
													return $e();
												},
												get children() {
													return (0, r.createComponent)(
														s.ComposerToolbarSimpleButton,
														{
															type: "secondary",
															onClick: (Oe) => {
																Q.reapplyLastMessage(re());
															},
															get style() {
																return J();
															},
															children: "Reapply above",
														},
													);
												},
											}),
											(0, r.createComponent)(h.Show, {
												get when() {
													return oe();
												},
												get children() {
													return (0, r.createComponent)(
														s.ComposerToolbarSimpleButton,
														{
															type: "secondary",
															onClick: (Oe) => {
																Q.saveAll(re()),
																	ve(!0),
																	setTimeout(() => ve(!1), 500);
															},
															get style() {
																return {
																	...J(),
																	...(me() ? { opacity: 0.5 } : {}),
																};
															},
															get hintText() {
																return (0, D.getShortcut)("S");
															},
															children: "Save all",
														},
													);
												},
											}),
											(0, r.createComponent)(h.Show, {
												get when() {
													return pe();
												},
												get children() {
													return (0, r.createComponent)(
														s.ComposerToolbarSimpleButton,
														{
															type: "secondary",
															onClick: () => Q.rejectAll(re()),
															get style() {
																return J();
															},
															get hintText() {
																return (0, D.getShortcut)("\u232B");
															},
															children: "Reject all",
														},
													);
												},
											}),
											(0, r.createComponent)(h.Show, {
												get when() {
													return ae();
												},
												get children() {
													return (0, r.createComponent)(h.Show, {
														get when() {
															return !ye();
														},
														get fallback() {
															return (0, r.createComponent)(
																s.ComposerToolbarSimpleButton,
																{
																	type: "secondary",
																	onClick: () => Q.acceptAll(re()),
																	get style() {
																		return J();
																	},
																	get hintText() {
																		return (0, D.getShortcut)("\u21E7\u23CE");
																	},
																	children: "Accept all",
																},
															);
														},
														get children() {
															return (0, r.createComponent)(
																s.ComposerToolbarSimpleButton,
																{
																	type: "primary",
																	onClick: () => Q.acceptAll(re()),
																	get style() {
																		return J();
																	},
																	get hintText() {
																		return (0, D.getShortcut)("\u23CE");
																	},
																	children: "Accept all",
																},
															);
														},
													});
												},
											}),
											(0, r.createComponent)(h.Show, {
												get when() {
													return ye();
												},
												get children() {
													return (0, r.createComponent)(
														s.ComposerToolbarSimpleButton,
														{
															type: "primary",
															onClick: () =>
																Q.applyCachedCodeBlocksOfLastMessage(re()),
															get style() {
																return J();
															},
															get hintText() {
																return (0, D.getShortcut)("\u23CE");
															},
															children: "Apply all",
														},
													);
												},
											}),
										];
									},
								}),
								null,
							),
							(0, a.effect)(
								(Oe) => {
									const xe = { ...ee.styles },
										He = ee.isFileListExpanded()
											? "auto"
											: `${g.COMPOSER_TOOLBAR_HEIGHT}px`,
										Ke = ee.isFileListExpanded() ? "3px" : "0px",
										Je = ee.canShowFileList() ? "pointer" : "default",
										Te =
											ee.chatStatus() === "cancelled"
												? "var(--vscode-testing-iconFailed)"
												: "var(--vscode-input-placeholderForeground)";
									return (
										(Oe._v$10 = (0, C.style)(be, xe, Oe._v$10)),
										He !== Oe._v$11 &&
											((Oe._v$11 = He) != null
												? Ce.style.setProperty("height", He)
												: Ce.style.removeProperty("height")),
										Ke !== Oe._v$12 &&
											((Oe._v$12 = Ke) != null
												? Ce.style.setProperty("padding-top", Ke)
												: Ce.style.removeProperty("padding-top")),
										Je !== Oe._v$13 &&
											((Oe._v$13 = Je) != null
												? Le.style.setProperty("cursor", Je)
												: Le.style.removeProperty("cursor")),
										Te !== Oe._v$14 &&
											((Oe._v$14 = Te) != null
												? Fe.style.setProperty("color", Te)
												: Fe.style.removeProperty("color")),
										Oe
									);
								},
								{
									_v$10: void 0,
									_v$11: void 0,
									_v$12: void 0,
									_v$13: void 0,
									_v$14: void 0,
								},
							),
							be
						);
					})();
				}
				function ne(ee) {
					const _ = (0, o.$odc)(),
						{ composerService: te } = _,
						{ showHover: Q, hideHover: Z } = (0, $.useComposerHoverTooltip)({
							delay: g.COMPOSER_HOVER_TOOLTIP_DELAY,
						}),
						se = (0, h.createMemo)(() =>
							_.composerDataService.getToolFormer(
								ee.composerDataHandle.data.composerId,
							),
						),
						re = (0, h.createMemo)(
							() => ee.pendingDecisionGroup[0].clientSideTool,
						),
						le = (0, h.createMemo)(() => {
							if (ee.pendingDecisionGroup.length > 1) return "Accept all";
							const $e = re();
							return (
								c.TOOL_FORMER_TOOL_CALL_DECISION_PHRASES[$e]?.accept ?? "Accept"
							);
						}),
						oe = (0, h.createMemo)(() => {
							if (ee.pendingDecisionGroup.length > 1) return "Reject all";
							const $e = re();
							return (
								c.TOOL_FORMER_TOOL_CALL_DECISION_PHRASES[$e]?.reject ?? "Reject"
							);
						}),
						ae = (0, h.createMemo)(() => re() === A.ClientSideToolV2.EDIT_FILE),
						pe = ($e) => ["generating", "applying", "running"].includes($e);
					return (0, r.createComponent)(h.Show, {
						get when() {
							return se();
						},
						children: ($e) =>
							(() => {
								const ye = K(),
									ue = ye.firstChild,
									fe = ue.firstChild;
								return (
									ye.style.setProperty("display", "flex"),
									ye.style.setProperty("justify-content", "space-between"),
									ye.style.setProperty("align-items", "center"),
									ye.style.setProperty("width", "100%"),
									(0, i.addEventListener)(
										ue,
										"mouseup",
										ee.isDragging?.() ? void 0 : ee.onToggleFileList,
									),
									ue.style.setProperty("text-wrap", "nowrap"),
									ue.style.setProperty("text-overflow", "ellipsis"),
									ue.style.setProperty("overflow", "hidden"),
									ue.style.setProperty("flex-grow", "1"),
									ue.style.setProperty("flex-basis", "0"),
									ue.style.setProperty("min-width", "120px"),
									ue.style.setProperty("display", "inline-flex"),
									ue.style.setProperty("align-items", "center"),
									ue.style.setProperty("flex-wrap", "nowrap"),
									ue.style.setProperty("gap", "4px"),
									(0, d.insert)(
										ue,
										(0, r.createComponent)(h.Show, {
											get when() {
												return ee.canShowFileList();
											},
											get children() {
												const me = B();
												return (
													me.style.setProperty("font-size", "10px"),
													me.style.setProperty("flex-shrink", "0"),
													(0, a.effect)(
														(ve) => {
															const ge =
																	ee.chatStatus() === "cancelled"
																		? "var(--vscode-testing-iconFailed)"
																		: "var(--vscode-input-placeholderForeground)",
																be = ee.isFileListExpanded()
																	? "rotate(90deg)"
																	: "rotate(0deg)",
																Ce = b.ThemeIcon.asClassName(
																	f.$ak.chevronRight,
																);
															return (
																ge !== ve._v$15 &&
																	((ve._v$15 = ge) != null
																		? me.style.setProperty("color", ge)
																		: me.style.removeProperty("color")),
																be !== ve._v$16 &&
																	((ve._v$16 = be) != null
																		? me.style.setProperty("transform", be)
																		: me.style.removeProperty("transform")),
																Ce !== ve._v$17 &&
																	(0, u.className)(me, (ve._v$17 = Ce)),
																ve
															);
														},
														{ _v$15: void 0, _v$16: void 0, _v$17: void 0 },
													),
													me
												);
											},
										}),
										fe,
									),
									fe.style.setProperty("margin", "0"),
									fe.style.setProperty("font-size", "10px"),
									fe.style.setProperty("flex-shrink", "0"),
									fe.style.setProperty("white-space", "nowrap"),
									fe.style.setProperty("text-overflow", "ellipsis"),
									fe.style.setProperty("overflow", "hidden"),
									fe.style.setProperty("flex-basis", "0"),
									fe.style.setProperty("flex-grow", "1"),
									(0, d.insert)(
										fe,
										(0, r.createComponent)(h.Switch, {
											get fallback() {
												return [];
											},
											get children() {
												return [
													(0, r.createComponent)(h.Match, {
														get when() {
															return ee.chatStatus() === "generating";
														},
														get children() {
															const me = H(),
																ve = me.firstChild;
															return (
																(0, d.insert)(
																	me,
																	(0, r.createComponent)(n.$C$b, { show: !0 }),
																	null,
																),
																me
															);
														},
													}),
													(0, r.createComponent)(h.Match, {
														get when() {
															return ee.chatStatus() === "applying";
														},
														get children() {
															const me = q(),
																ve = me.firstChild;
															return (
																(0, d.insert)(
																	me,
																	(0, r.createComponent)(n.$C$b, { show: !0 }),
																	null,
																),
																me
															);
														},
													}),
													(0, r.createComponent)(h.Match, {
														get when() {
															return ee.chatStatus() === "running";
														},
														get children() {
															const me = V(),
																ve = me.firstChild;
															return (
																(0, d.insert)(
																	me,
																	(0, r.createComponent)(n.$C$b, { show: !0 }),
																	null,
																),
																me
															);
														},
													}),
													(0, r.createComponent)(h.Match, {
														get when() {
															return ee.chatStatus() === "cancelled";
														},
														get children() {
															return "Cancelled";
														},
													}),
													(0, r.createComponent)(h.Match, {
														get when() {
															return ee.chatStatus() === "completed";
														},
														get children() {
															return "Completed";
														},
													}),
												];
											},
										}),
										null,
									),
									(0, d.insert)(
										fe,
										(0, r.createComponent)(h.Show, {
											get when() {
												return (
													(0, m.memo)(() => !!ee.shouldShowFileCount())() &&
													!pe(ee.chatStatus())
												);
											},
											get children() {
												const me = U(),
													ve = me.firstChild,
													ge = ve.nextSibling,
													be = ge.nextSibling,
													Ce = be.nextSibling,
													Le = Ce.nextSibling;
												return (
													me.style.setProperty("margin-left", "4px"),
													(0, d.insert)(me, () => ee.numFiles(), ge),
													(0, d.insert)(
														me,
														() => (ee.numFiles() > 1 ? "s" : ""),
														Ce,
													),
													me
												);
											},
										}),
										null,
									),
									(0, d.insert)(
										ye,
										(0, r.createComponent)(l.$q$b, {
											noTransition: !0,
											style: {
												display: "flex",
												"align-items": "center",
												"justify-content": "flex-end",
												margin: "0px",
												padding: "0",
											},
											forceGap: 4,
											get children() {
												return [
													(0, r.createComponent)(h.Show, {
														get when() {
															return ae();
														},
														get children() {
															return (0, r.createComponent)(
																s.ComposerToolbarSimpleButton,
																{
																	type: "secondary",
																	onClick: () => {
																		te.saveAll(
																			ee.composerDataHandle.data.composerId,
																		);
																	},
																	get style() {
																		return J();
																	},
																	get hintText() {
																		return (0, D.getShortcut)("S");
																	},
																	children: "Save all",
																},
															);
														},
													}),
													(0, r.createComponent)(h.Show, {
														get when() {
															return (
																ee.chatStatus() === "generating" &&
																!ee.isBlockingUserDecision
															);
														},
														get fallback() {
															return (0, r.createComponent)(
																s.ComposerToolbarSimpleButton,
																{
																	type: "secondary",
																	onClick: () => {
																		for (const me of ee.pendingDecisionGroup)
																			$e().rejectToolCall(me.toolCallId);
																	},
																	get style() {
																		return J();
																	},
																	get hintText() {
																		return `${oe()} (${(0, D.getShortcut)("\u232B")})`;
																	},
																	get children() {
																		return (
																			oe() + " " + (0, D.getShortcut)("\u232B")
																		);
																	},
																},
															);
														},
														get children() {
															return (0, r.createComponent)(
																s.ComposerToolbarSimpleButton,
																{
																	type: "secondary",
																	onClick: () =>
																		te.cancelCurrentStep(
																			ee.composerDataHandle.data.composerId,
																		),
																	get style() {
																		return J();
																	},
																	get hintText() {
																		return (0, D.getShortcut)("\u232B");
																	},
																	get children() {
																		return (
																			"Cancel " + (0, D.getShortcut)("\u232B")
																		);
																	},
																},
															);
														},
													}),
													(0, r.createComponent)(
														s.ComposerToolbarSimpleButton,
														{
															type: "primary",
															onClick: () => {
																for (const me of ee.pendingDecisionGroup)
																	$e().acceptToolCall(me.toolCallId);
															},
															get style() {
																return J();
															},
															get hintText() {
																return `${le()} (${(0, D.getShortcut)("\u23CE")})`;
															},
															get children() {
																return (
																	le() + " " + (0, D.getShortcut)("\u23CE")
																);
															},
														},
													),
												];
											},
										}),
										null,
									),
									(0, a.effect)(
										(me) => {
											const ve = ee.isFileListExpanded()
													? "auto"
													: `${g.COMPOSER_TOOLBAR_HEIGHT}px`,
												ge = ee.isFileListExpanded() ? "3px" : "0px",
												be = ee.canShowFileList() ? "pointer" : "default",
												Ce =
													ee.chatStatus() === "cancelled"
														? "var(--vscode-testing-iconFailed)"
														: "var(--vscode-input-placeholderForeground)";
											return (
												ve !== me._v$18 &&
													((me._v$18 = ve) != null
														? ye.style.setProperty("height", ve)
														: ye.style.removeProperty("height")),
												ge !== me._v$19 &&
													((me._v$19 = ge) != null
														? ye.style.setProperty("padding-top", ge)
														: ye.style.removeProperty("padding-top")),
												be !== me._v$20 &&
													((me._v$20 = be) != null
														? ue.style.setProperty("cursor", be)
														: ue.style.removeProperty("cursor")),
												Ce !== me._v$21 &&
													((me._v$21 = Ce) != null
														? fe.style.setProperty("color", Ce)
														: fe.style.removeProperty("color")),
												me
											);
										},
										{
											_v$18: void 0,
											_v$19: void 0,
											_v$20: void 0,
											_v$21: void 0,
										},
									),
									ye
								);
							})(),
					});
				}
			},
		),
		define(
			de[4289],
			he([1, 0, 2, 2, 2, 2, 13, 126, 167, 4272, 4274, 177, 36]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerUsesCodebaseStatus = void 0);
				const c = (0, t.template)("<div>"),
					n = (g) => {
						const p = (0, h.$odc)(),
							{ composerDataService: o } = p,
							{
								composerDataHandle: f,
								currentComposer: b,
								updateCurrentComposer: s,
							} = (0, a.useComposerDataHandle)(() => g.composerDataHandle),
							l = (0, C.createMemo)(() =>
								o.getComposerCapability(
									b().composerId,
									m.ComposerCapabilityRequest_ComposerCapabilityType
										.USES_CODEBASE,
								),
							),
							y = (0, C.createMemo)(() =>
								o.getComposerBubble(b().composerId, g.bubbleId),
							),
							$ = (0, C.createMemo)(() => {
								const L = o.getComposerData(b().composerId),
									D = L?.conversation.findIndex(
										(N) => N.bubbleId === g.bubbleId,
									);
								if (D === -1 || D === void 0) return;
								const M = L?.conversation[D + 1];
								if (!(!M || M.type !== d.ConversationMessage_MessageType.AI))
									return M;
							}),
							v = (0, C.createMemo)(() => {
								const L = $();
								return L ? L.text.length > 0 : !1;
							}),
							S = (0, C.createMemo)(() => {
								const L = o.getComposerData(b().composerId);
								return L
									? L.conversation.flatMap((D) =>
											D.type === d.ConversationMessage_MessageType.HUMAN
												? (D.context?.folderSelections ?? [])
												: [],
										)
									: [];
							}),
							I = (0, C.createMemo)(() => g.status?.status),
							T = (0, C.createMemo)(() => {
								if (!o.getComposerData(b().composerId)) return !1;
								const D = o.getLastHumanBubbleId(b().composerId);
								return D
									? I() === "generating" ||
											(I() === "completed" && D === g.bubbleId)
									: !1;
							}),
							P = () => {
								const L = $();
								return L ? (L.steps ?? []) : [];
							},
							k = (0, C.createMemo)(() => {
								const L = o.getComposerData(b().composerId);
								if (!L) return !1;
								const D = y();
								if (!D) return !1;
								const M = o.getLastHumanBubbleId(b().composerId);
								return L.status === "generating" && M === D.bubbleId;
							});
						return (0, E.createComponent)(C.Show, {
							get when() {
								return l();
							},
							children: (L) => {
								const D = L();
								return (0, E.createComponent)(C.Show, {
									get when() {
										return P().length === 0;
									},
									get fallback() {
										return (() => {
											const M = c();
											return (
												M.style.setProperty("padding-bottom", "8px"),
												M.style.setProperty("display", "flex"),
												M.style.setProperty("flex-direction", "column"),
												M.style.setProperty("gap", "4px"),
												(0, w.insert)(
													M,
													(0, E.createComponent)(C.For, {
														get each() {
															return P();
														},
														children: (N, A) =>
															(0, E.createComponent)(u.ComposerContextStep, {
																step: N,
																get defaultExpanded() {
																	return k() && !v()
																		? N.type === "gathering" ||
																			N.type === "reranking"
																			? N.files.length > 0
																			: !0
																		: !1;
																},
																get index() {
																	return A();
																},
																get isStepGenerating() {
																	return (0, i.memo)(
																		() =>
																			N.type === "gathering" ||
																			N.type === "reranking",
																	)()
																		? N.files.length === 0
																		: !!(k() && !v());
																},
															}),
													}),
												),
												M
											);
										})();
									},
									get children() {
										return (0, E.createComponent)(
											r.ComposerGlobalContextAnimation,
											{
												get isContextGenerating() {
													return T();
												},
												get textIsGenerated() {
													return v();
												},
												get fileResults() {
													return D.fileResults();
												},
												get addFolders() {
													return S();
												},
												get hydeResults() {
													return D.hydeResults();
												},
												get repoStep() {
													return D.currentStep();
												},
												get composerDataHandle() {
													return g.composerDataHandle;
												},
												get nextAiBubbleId() {
													return $()?.bubbleId;
												},
											},
										);
									},
								});
							},
						});
					};
				e.ComposerUsesCodebaseStatus = n;
			},
		),
		define(
			de[4290],
			he([
				1, 0, 167, 262, 395, 209, 226, 126, 25, 83, 627, 140, 134, 4289, 45,
				118, 315, 337, 567, 426, 22, 1284,
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
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.UsesCodebase = void 0);
				const y = !1;
				let $ = class extends i.ComposerCapability {
					constructor(S, I, T, P, k, L, D, M, N, A, R, O, B) {
						super(S, I),
							(this.composerDataService = T),
							(this.repositoryService = P),
							(this.keywordSearchService = k),
							(this._reactiveStorageService = L),
							(this._aiService = D),
							(this._aiUtilsService = M),
							(this._aiSettingsService = N),
							(this._chatDataService = A),
							(this._composerUtilsService = R),
							(this._workspaceContextService = O),
							(this._fileService = B),
							(this.priority = 1),
							(this.type =
								t.ComposerCapabilityRequest_ComposerCapabilityType.USES_CODEBASE),
							(this.name =
								i.capabilityTypeLabels[
									t.ComposerCapabilityRequest_ComposerCapabilityType.USES_CODEBASE
								]),
							(this.schema = {}),
							(this._disposables = []),
							([this.currentStep, this.setCurrentStep] = (0, i.createSignal)(
								a.RepoStep.None,
							)),
							([this.hydeResults, this.setHydeResults] = (0, i.createSignal)(
								void 0,
							)),
							([this.fileResults, this.setFileResults] = (0, i.createSignal)(
								[],
							)),
							([this.codeBlockResults, this.setCodeBlockResults] = (0,
							i.createSignal)([]));
					}
					getFoldersIncludePattern(S) {
						return S.flatMap((T) => T.attachedFolders).map(
							(T) => `${T.startsWith("/") ? T.substring(1) : T}/**`,
						);
					}
					shouldRunInPlaceMutateRequestBeforeSubmit(S) {
						const I = this.composerDataService.getComposerData(this.composerId),
							T = this.composerDataService.getComposerBubble(
								S.composerId,
								S.humanBubbleId,
							);
						return !T ||
							T.type !== d.ConversationMessage_MessageType.HUMAN ||
							I?.isAgentic
							? !1
							: !!T.context?.usesCodebase;
					}
					async runInPlaceMutateRequestBeforeSubmit(S, I) {
						this._params = I;
						const T = this.composerDataService.getComposerData(this.composerId),
							P = this.composerDataService.getComposerBubble(
								this.composerId,
								I.humanBubbleId,
							);
						if (!T || !S.conversation || !P) return;
						this.reset();
						let k = !1;
						if (
							((async () => {
								(await this._composerUtilsService.getShouldChatUseTools()) &&
									(k = !0);
							})().catch((G) => {}),
							k)
						)
							return;
						const L = this._aiSettingsService.getChatDesiredTokenLimit();
						let D;
						try {
							this._reactiveStorageService.nonPersistentStorage.composerState
								.shouldForceHydeCodebase
								? (D = h.SearchType.keyword)
								: (D = this.repositoryService.isIndexedMainLocalRepository()
										? h.SearchType.vector
										: h.SearchType.keyword);
						} catch {
							console.log(
								"[composer] No repos found, defaulting to keyword search",
							),
								(D = h.SearchType.keyword);
						}
						let M = S.conversation
							.map((G) => (G.text !== "" ? G.text : null))
							.filter((G) => G !== null)
							.join(`
`);
						const N = 4e3 * 3;
						M.length > N && (M = M.slice(M.length - N));
						const A = S.conversation
							.filter((G) => G.type === d.ConversationMessage_MessageType.HUMAN)
							.reverse()[0];
						let R = [];
						D === h.SearchType.vector
							? (R = [{ text: M, globsNewLineSeparated: "" }])
							: (R = [{ text: A.text, globsNewLineSeparated: "" }]);
						let O = performance.now();
						const B = D === h.SearchType.keyword,
							z =
								this.getFoldersIncludePattern(S.conversation).length === 0 &&
								S.conversation.length > 2;
						if (B) {
							this.setCurrentStep(a.RepoStep.GeneratingQueries),
								this.updateHydeResults({});
							try {
								for await (const K of this._aiService.aiQueryV2(
									S.conversation,
									D,
									z,
									void 0,
								)) {
									if (this.isAborted()) throw new Error("Aborted");
									this.updateHydeResults({ response: K });
								}
							} catch (K) {
								throw (this.updateHydeResults({ removeHyde: !0 }), K);
							}
							const G = this.hydeResults();
							G?.queries !== void 0 &&
								G.queries.length > 0 &&
								(R = G.queries.map((K) => ({ ...K, text: K.text.trim() })));
						}
						if (this.isAborted()) throw new Error("Aborted");
						let F = performance.now();
						console.log(`[composer] Full queries time: ${F - O}ms`),
							(O = performance.now()),
							this.setCurrentStep(a.RepoStep.SearchingFiles);
						let x = { case: "fileSearchResults", value: { results: [] } },
							H = [],
							q = [];
						const V = this.composerDataService.getComposerData(
							this.composerId,
						)?.codebaseSearchSettings;
						if (D === h.SearchType.keyword) {
							let G = y ? 100 : 16;
							const J = [...this.getFoldersIncludePattern(S.conversation)],
								W = [];
							V?.filesToInclude &&
								J.push(...V.filesToInclude.split(",").map((te) => te.trim())),
								V?.filesToExclude &&
									W.push(...V.filesToExclude.split(",").map((te) => te.trim()));
							const X = await this.keywordSearchService.searchMultipleQueries(
								R,
								{ topK: G, minK: 4, finalK: G },
								void 0,
								J,
								W,
							);
							if (this.isAborted()) throw new Error("Aborted");
							(q = X.map((te) => {
								if (te.file !== void 0)
									return new r.$Ps({
										relativeWorkspacePath: te.file?.relativeWorkspacePath,
										contents: te.file?.contents,
										range: {
											startPosition: { line: 1, column: 1 },
											endPosition: {
												line:
													te.file?.contents.split(`
`).length + 1,
												column: 1,
											},
										},
									});
							}).filter((te) => te !== void 0)),
								(H = X.sort((te, Q) => Q.score - te.score));
							const Y = { case: "fileSearchResults", value: { results: H } },
								ie = this._chatDataService.getRescorerFromEmbeddingsResults(Y),
								ne = this._aiService.getLongContextTokenLimit(void 0, void 0),
								{ contextResults: ee, conversationHistory: _ } = y
									? await this._chatDataService.fitLongContextDataIntoTokenLimit(
											{
												conversationHistory: S.conversation,
												contextResults: Y,
											},
											ne,
											() => ie,
										)
									: { contextResults: Y, conversationHistory: S.conversation };
							if (this.isAborted()) throw new Error("Aborted");
							x = ee ?? Y;
						} else if (D === h.SearchType.vector) {
							const K = y
									? { topK: 1e3, minK: 80, finalK: 1e3 }
									: {
											topK: Math.max(100, 0),
											minK: Math.max(20, 0),
											finalK: Math.max(200, 0),
										},
								W =
									this.getFoldersIncludePattern(S.conversation).length > 0
										? "{" +
											this.getFoldersIncludePattern(S.conversation)
												.map((Q) => `${Q}`)
												.join(",") +
											"}"
										: void 0,
								X = await this.repositoryService.searchMultipleQueries(R, K, {
									newlineSepGlobFilter: W,
									includePattern: V?.filesToInclude,
									excludePattern: V?.filesToExclude,
								});
							if (this.isAborted()) throw new Error("Aborted");
							if (
								((q = X.map((Q) => Q.codeBlock).filter(
									(Q) => Q !== void 0 && Q.contents.length < 2e4,
								)),
								(H = y
									? await this._aiService.getLongContextFileSearchResults(
											X,
											S.conversation,
										)
									: (0, g.$Lfc)(X)),
								this.isAborted())
							)
								throw new Error("Aborted");
							const ie = y
									? { case: "fileSearchResults", value: { results: H } }
									: {
											case: "codeSearchResults",
											value: await (async (Q) => {
												const { files: Z, missingFiles: se } = await (0,
												l.$ehc)(
													Q,
													this._workspaceContextService,
													this._fileService,
												);
												return {
													results: Q,
													allFiles: Z.map((re) => new r.$Rs(re)),
												};
											})(X),
										},
								ne = this._chatDataService.getRescorerFromEmbeddingsResults(ie),
								ee = this._aiService.getLongContextTokenLimit(void 0, void 0),
								{ contextResults: _, conversationHistory: te } = y
									? await this._chatDataService.fitLongContextDataIntoTokenLimit(
											{
												conversationHistory: S.conversation,
												contextResults: ie,
											},
											ee,
											() => ne,
										)
									: { contextResults: ie, conversationHistory: S.conversation };
							x = _ ?? ie;
						}
						(F = performance.now()),
							console.log(`[composer] Vector search time: ${F - O}ms`),
							(O = performance.now()),
							this.setFileResults(
								H.map((G) =>
									G.file !== void 0
										? {
												file: {
													relativeWorkspacePath: G.file.relativeWorkspacePath,
												},
												score: G.score,
											}
										: { score: G.score },
								),
							),
							(F = performance.now()),
							console.log(`[composer] File results time: ${F - O}ms`),
							(O = performance.now()),
							this.setCodeBlockResults(q),
							(F = performance.now()),
							console.log(`[composer] Code block results time: ${F - O}ms`),
							this.setCurrentStep(a.RepoStep.GeneratingTokens),
							Object.assign(S, {
								contextResults: x,
								rerankResults: !0,
								rerankResultsV2:
									this._reactiveStorageService.workspaceUserPersistentStorage
										.shouldRerankByDefault,
								longContextMode: y,
							});
					}
					renderMutateRequest() {
						return c.ComposerUsesCodebaseStatus;
					}
					reset() {
						this._disposables.forEach((S) => S.dispose()),
							(this._disposables = []),
							(this._params = void 0),
							this.setCurrentStep(a.RepoStep.None),
							this.setHydeResults(void 0),
							this.setFileResults([]),
							this.setCodeBlockResults([]);
					}
					dispose() {
						super.dispose();
					}
					updateHydeResults(S) {
						const { response: I, removeHyde: T = !1 } = S;
						if (T) {
							this.setHydeResults(void 0);
							return;
						}
						if (I === void 0) {
							this.setHydeResults({ reasoning: "", queries: [] });
							return;
						}
						let P = this.hydeResults() ?? { reasoning: "", queries: [] };
						if (
							((P = JSON.parse(JSON.stringify(P))),
							I.queryOrReasoning.case === "reasoning" &&
								(P.reasoning += I.queryOrReasoning.value),
							I.queryOrReasoning.case === "query")
						) {
							const { index: k, partialQuery: L } = I.queryOrReasoning.value;
							k === P.queries.length &&
								P.queries.push({ text: "", globsNewLineSeparated: "" }),
								L.case === "glob"
									? (P.queries[k].globsNewLineSeparated += L.value)
									: L.case === "text" && (P.queries[k].text += L.value);
						}
						this.setHydeResults(P);
					}
				};
				(e.UsesCodebase = $),
					(e.UsesCodebase = $ =
						Ne(
							[
								(0, w.autoCancellableAndStatusUpdater)(),
								j(2, E.IComposerDataService),
								j(3, C.$J6b),
								j(4, u.$O6b),
								j(5, n.$0zb),
								j(6, g.$Nfc),
								j(7, f.$36b),
								j(8, p.$S6b),
								j(9, o.$kgc),
								j(10, b.IComposerUtilsService),
								j(11, m.$Vi),
								j(12, s.$ll),
							],
							$,
						)),
					(0, i.registerComposerCapability)(
						t.ComposerCapabilityRequest_ComposerCapabilityType.USES_CODEBASE,
						$,
					);
			},
		),
		define(
			de[4291],
			he([1, 0, 2, 2, 2, 2, 13, 1378, 216, 564, 36, 2420]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerParallelApplyToolCallBlock = n);
				const a = (0, t.template)('<div class="files-to-edit-container">'),
					h = (0, t.template)(
						'<div class="composer-parallel-apply-block"><div class="plan-text-content">',
					);
				function c() {
					var g =
							typeof SuppressedError == "function"
								? SuppressedError
								: function (b, s) {
										var l = Error();
										return (
											(l.name = "SuppressedError"),
											(l.error = b),
											(l.suppressed = s),
											l
										);
									},
						p = {},
						o = [];
					function f(b, s) {
						if (s != null) {
							if (Object(s) !== s)
								throw new TypeError(
									"using declarations can only be used with objects, functions, null, or undefined.",
								);
							if (b)
								var l =
									s[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
							if (
								l === void 0 &&
								((l = s[Symbol.dispose || Symbol.for("Symbol.dispose")]), b)
							)
								var y = l;
							if (typeof l != "function")
								throw new TypeError("Object is not disposable.");
							y &&
								(l = function () {
									try {
										y.call(s);
									} catch ($) {
										return Promise.reject($);
									}
								}),
								o.push({ v: s, d: l, a: b });
						} else b && o.push({ d: s, a: b });
						return s;
					}
					return {
						e: p,
						u: f.bind(null, !1),
						a: f.bind(null, !0),
						d: function () {
							var b,
								s = this.e,
								l = 0;
							function y() {
								for (; (b = o.pop()); )
									try {
										if (!b.a && l === 1)
											return (l = 0), o.push(b), Promise.resolve().then(y);
										if (b.d) {
											var v = b.d.call(b.v);
											if (b.a) return (l |= 2), Promise.resolve(v).then(y, $);
										} else l |= 1;
									} catch (S) {
										return $(S);
									}
								if (l === 1)
									return s !== p ? Promise.reject(s) : Promise.resolve();
								if (s !== p) throw s;
							}
							function $(v) {
								return (s = s !== p ? new g(v, s) : v), y();
							}
							return y();
						},
					};
				}
				function n(g) {
					try {
						var p = c();
						const o = p.u((0, m.span)("ComposerParallelApplyToolCallBlock")),
							f = (0, u.$odc)(),
							b = (0, C.createMemo)(() => ({
								planText: g.planText,
								filesToEdit: g.filesToEdit,
							}));
						return (() => {
							const s = h(),
								l = s.firstChild;
							return (
								(0, i.insert)(
									s,
									(0, E.createComponent)(r.$nac, {
										text: "Parallel Edit",
										type: "subtle",
										size: "small",
										class: "parallel-edit-badge",
									}),
									l,
								),
								(0, i.insert)(
									l,
									() =>
										b()?.planText ||
										(g.isLoading ? "Generating plan" : "No plan available"),
								),
								(0, i.insert)(
									s,
									(0, E.createComponent)(C.Show, {
										get when() {
											return (b()?.filesToEdit?.length ?? 0) > 0;
										},
										get children() {
											const y = a();
											return (
												(0, i.insert)(
													y,
													(0, E.createComponent)(C.Index, {
														get each() {
															return b()?.filesToEdit;
														},
														children: ($) => {
															const v = (0, C.createMemo)(() =>
																f.composerDataService.getCodeBlockStatus(
																	g.composerDataHandle,
																	$().uri,
																	$().version,
																),
															);
															return (0, E.createComponent)(C.Show, {
																get when() {
																	return v();
																},
																get children() {
																	return (0, E.createComponent)(
																		d.ComposerMessageCodeblock,
																		{
																			get composerDataHandle() {
																				return g.composerDataHandle;
																			},
																			get codeBlock() {
																				return $();
																			},
																			style: { margin: "0px" },
																			maxCollapsedHeight: 120,
																			maxExpandedHeight: 380,
																			get forceStatus() {
																				return (0, w.memo)(
																					() => v() === "none",
																				)()
																					? g.isLoading
																						? "generating"
																						: "cancelled"
																					: v();
																			},
																		},
																	);
																},
															});
														},
													}),
												),
												y
											);
										},
									}),
									null,
								),
								s
							);
						})();
					} catch (o) {
						p.e = o;
					} finally {
						p.d();
					}
				}
			},
		),
		define(
			de[1380],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 54, 216, 485, 792, 36, 156, 422, 295, 428,
				2421,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerSingleFileToolCallBlock = $);
				const f = (0, t.template)("<span>"),
					b = (0, t.template)("<span>:<!>-"),
					s = (0, t.template)("<div>"),
					l = (0, t.template)(
						'<div><div class="composer-single-file-block"><span></span><div><span>',
					);
				function y() {
					var v =
							typeof SuppressedError == "function"
								? SuppressedError
								: function (P, k) {
										var L = Error();
										return (
											(L.name = "SuppressedError"),
											(L.error = P),
											(L.suppressed = k),
											L
										);
									},
						S = {},
						I = [];
					function T(P, k) {
						if (k != null) {
							if (Object(k) !== k)
								throw new TypeError(
									"using declarations can only be used with objects, functions, null, or undefined.",
								);
							if (P)
								var L =
									k[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
							if (
								L === void 0 &&
								((L = k[Symbol.dispose || Symbol.for("Symbol.dispose")]), P)
							)
								var D = L;
							if (typeof L != "function")
								throw new TypeError("Object is not disposable.");
							D &&
								(L = function () {
									try {
										D.call(k);
									} catch (M) {
										return Promise.reject(M);
									}
								}),
								I.push({ v: k, d: L, a: P });
						} else P && I.push({ d: k, a: P });
						return k;
					}
					return {
						e: S,
						u: T.bind(null, !1),
						a: T.bind(null, !0),
						d: function () {
							var P,
								k = this.e,
								L = 0;
							function D() {
								for (; (P = I.pop()); )
									try {
										if (!P.a && L === 1)
											return (L = 0), I.push(P), Promise.resolve().then(D);
										if (P.d) {
											var N = P.d.call(P.v);
											if (P.a) return (L |= 2), Promise.resolve(N).then(D, M);
										} else L |= 1;
									} catch (A) {
										return M(A);
									}
								if (L === 1)
									return k !== S ? Promise.reject(k) : Promise.resolve();
								if (k !== S) throw k;
							}
							function M(N) {
								return (k = k !== S ? new v(N, k) : N), D();
							}
							return D();
						},
					};
				}
				function $(v) {
					try {
						var S = y();
						const I = S.u((0, u.span)("ComposerSingleFileToolCallBlock")),
							T = (0, c.$odc)(),
							{ showHover: P, hideHover: k } = (0, g.$z$b)(500),
							L = (M) => {
								const N = (0, r.$sc)(v.relativeWorkspacePath ?? "");
								P({
									content:
										v.startLine !== void 0 || v.endLine !== void 0
											? `${N}:${v.startLine}-${v.endLine}`
											: N,
									target: M.currentTarget,
									appearance: { compact: !0 },
								});
							},
							D = (0, o.$b$b)();
						return (0, d.createComponent)(h.ComposerToolCallBlockContainer, {
							get style() {
								return {
									"padding-bottom":
										v.decision && v.decision() === void 0 ? "8px" : void 0,
								};
							},
							get children() {
								const M = l(),
									N = M.firstChild,
									A = N.firstChild,
									R = A.nextSibling,
									O = R.firstChild;
								return (
									M.style.setProperty("display", "flex"),
									M.style.setProperty("flex-direction", "column"),
									M.style.setProperty("width", "100%"),
									M.style.setProperty("gap", "4px"),
									N.addEventListener(
										"click",
										() => !v.unclickable && v.onClick?.(),
									),
									N.style.setProperty("display", "flex"),
									N.style.setProperty("align-items", "center"),
									N.style.setProperty("gap", "6px"),
									N.style.setProperty("width", "100%"),
									(0, E.insert)(
										N,
										(0, d.createComponent)(m.Show, {
											get when() {
												return v.isLoading;
											},
											get children() {
												return (0, d.createComponent)(p.$Z8b, {
													small: !0,
													extras: { style: { "margin-right": "2px" } },
												});
											},
										}),
										A,
									),
									A.style.setProperty("font-size", "12px"),
									A.style.setProperty(
										"color",
										"var(--vscode-descriptionForeground)",
									),
									A.style.setProperty("white-space", "nowrap"),
									(0, E.insert)(A, () =>
										v.isLoading ? v.loadingText : v.actionText,
									),
									(0, E.insert)(
										N,
										(0, d.createComponent)(m.Show, {
											get when() {
												return D();
											},
											get children() {
												const B = f();
												return (
													B.style.setProperty("margin-right", "-4px"),
													B.style.setProperty("display", "flex"),
													B.style.setProperty("scale", "0.8"),
													B.style.setProperty("width", "15px"),
													B.style.setProperty("align-items", "center"),
													B.style.setProperty("justify-content", "center"),
													(0, E.insert)(
														B,
														(0, d.createComponent)(n.$k$b, {
															get fileName() {
																return (0, r.$sc)(
																	v.relativeWorkspacePath ?? "",
																);
															},
															get workspaceContextService() {
																return T.workspaceContextService;
															},
															get modelService() {
																return T.modelService;
															},
															get languageService() {
																return T.languageService;
															},
															height: 16,
														}),
													),
													B
												);
											},
										}),
										R,
									),
									(0, w.addEventListener)(R, "mouseleave", k),
									R.addEventListener("mouseenter", L),
									R.style.setProperty("display", "flex"),
									R.style.setProperty("overflow", "hidden"),
									O.style.setProperty("font-size", "12px"),
									O.style.setProperty("white-space", "nowrap"),
									O.style.setProperty("flex-shrink", "0"),
									O.style.setProperty(
										"color",
										"var(--vscode-input-foreground)",
									),
									(0, E.insert)(O, () =>
										(0, r.$sc)(v.relativeWorkspacePath ?? ""),
									),
									(0, E.insert)(
										R,
										(0, d.createComponent)(m.Show, {
											get when() {
												return v.startLine !== void 0 || v.endLine !== void 0;
											},
											get children() {
												const B = b(),
													U = B.firstChild,
													z = U.nextSibling,
													F = z.nextSibling;
												return (
													B.style.setProperty("font-size", "12px"),
													B.style.setProperty(
														"color",
														"var(--vscode-descriptionForeground)",
													),
													(0, E.insert)(B, () => v.startLine, z),
													(0, E.insert)(B, () => v.endLine, null),
													B
												);
											},
										}),
										null,
									),
									(0, E.insert)(
										M,
										(0, d.createComponent)(m.Show, {
											get when() {
												return (
													(0, C.memo)(
														() => !!(v.onAccept && v.onReject && v.decision),
													)() && v.decision() === void 0
												);
											},
											get children() {
												const B = s();
												return (
													B.style.setProperty("display", "flex"),
													B.style.setProperty("gap", "8px"),
													B.style.setProperty("margin-left", "auto"),
													B.style.setProperty("align-items", "center"),
													B.style.setProperty("justify-content", "flex-end"),
													(0, E.insert)(
														B,
														(0, d.createComponent)(
															a.ComposerToolbarSimpleButton,
															{
																onClick: () => v.onReject?.(),
																type: "secondary",
																children: "Reject",
															},
														),
														null,
													),
													(0, E.insert)(
														B,
														(0, d.createComponent)(
															a.ComposerToolbarSimpleButton,
															{
																onClick: () => v.onAccept?.(),
																children: "Accept",
															},
														),
														null,
													),
													B
												);
											},
										}),
										null,
									),
									(0, i.effect)(
										(B) => {
											const U = v.unclickable ? "default" : "pointer",
												z = v.unclickable ? 0.7 : void 0;
											return (
												U !== B._v$ &&
													((B._v$ = U) != null
														? N.style.setProperty("cursor", U)
														: N.style.removeProperty("cursor")),
												z !== B._v$2 &&
													((B._v$2 = z) != null
														? N.style.setProperty("opacity", z)
														: N.style.removeProperty("opacity")),
												B
											);
										},
										{ _v$: void 0, _v$2: void 0 },
									),
									M
								);
							},
						});
					} catch (I) {
						S.e = I;
					} finally {
						S.d();
					}
				}
			},
		),
		