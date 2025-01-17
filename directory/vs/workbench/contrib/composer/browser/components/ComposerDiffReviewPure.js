import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/themables.js';
import '../../../../../base/common/codicons.js';
import './ComposerToolbarSimpleButton.js';
import '../../../ui/browser/aiInput/plugins/mentions/pureIcon.js';
import '../../../controlCommon/browser/solid.js';
import '../../../../../base/browser/dom.js';
import '../hooks/useComposerHoverTooltip.js';
import '../../../../../base/browser/ui/hover/hoverWidget.js';
import '../../../../../base/common/path.js';
import './ComposerGeneralStatusIndicator.js';
import '../hooks/useComposerDataHandle.js';
import '../../../ui/browser/hooks/useIsUsingFileIconTheme.js';
import '../../../../../css!vs/workbench/contrib/composer/browser/components/ComposerDiffReviewPure.js';
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
		