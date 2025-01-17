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
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/web.js';
import '../../../../../../external/solid/solid.js';
import '../../../../../base/common/themables.js';
import '../../../../../base/browser/ui/selectBox/selectBox.js';
import '../../../controlCommon/browser/solid.js';
import '../../../../../base/common/codicons.js';
import '../menu/hooks.js';
import '../menu/menu.js';
import './utils.js';
import '../../../../../css!vs/workbench/contrib/ui/browser/dropdown/dropdown.js';
define(
			de[523],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 26, 596, 36, 14, 364, 484,
				1779, 2516,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Mbc = e.$Lbc = e.$Kbc = void 0),
					(e.$Nbc = M);
				const l = (0, t.template)('<ul class="solid-dropdown-menu">'),
					y = (0, t.template)(
						'<div class="solid-dropdown"><button class="solid-dropdown-toggle"><span>',
					),
					$ = (0, t.template)("<li>"),
					v = (0, t.template)(
						'<div class="inline-solid-dropdown"><button class="solid-dropdown-toggle"><span>',
					),
					S = (0, t.template)("<span>"),
					I = (0, t.template)(
						'<div class="ya-solid-dropdown" tabindex="-1"><button>',
					),
					T = (0, t.template)("<li><div><span>"),
					P = (0, t.template)("<div>"),
					k = (N) => {
						const [A, R] = (0, c.createSignal)(!1),
							O = (0, p.$pdc)(),
							B = (H) => {
								N.preventPropagation && H.stopImmediatePropagation(), R(!A());
							},
							U =
								"solid-dropdown-" + Math.random().toString(36).substring(2, 15),
							z = (H) => {
								H.target.closest(`#${U}`) || R(!1);
							},
							F = (H) => {
								N.onSelect(H), R(!1);
							};
						(0, c.createEffect)(() => {
							O.window.document.addEventListener("click", z),
								(0, c.onCleanup)(() => {
									O.window.document.removeEventListener("click", z);
								});
						}),
							(0, c.onCleanup)(() => {
								O.window.document.removeEventListener("click", z);
							});
						const x = (0, c.createMemo)(
							() => N.items.find((q) => q.id === N.value)?.label ?? N.origLabel,
						);
						return (() => {
							const H = y(),
								q = H.firstChild,
								V = q.firstChild;
							return (
								H.addEventListener("click", B),
								(0, h.setAttribute)(H, "id", U),
								H.style.setProperty("min-width", "200px"),
								(0, u.insert)(q, x, V),
								(0, u.insert)(V, () => (A() ? "\u25B2" : "\u25BC")),
								(0, u.insert)(
									H,
									(0, r.createComponent)(c.Show, {
										get when() {
											return A();
										},
										get children() {
											const G = l();
											return (
												(0, u.insert)(
													G,
													(0, r.createComponent)(c.For, {
														get each() {
															return N.items;
														},
														children: (K, J) =>
															(() => {
																const W = $();
																return (
																	W.addEventListener("click", (X) => {
																		N.preventPropagation && X.stopPropagation(),
																			F(K.id);
																	}),
																	(0, u.insert)(W, () => K.label),
																	W
																);
															})(),
													}),
												),
												G
											);
										},
									}),
									null,
								),
								H
							);
						})();
					};
				e.$Kbc = k;
				const L = (N) => {
					const [A, R] = (0, c.createSignal)(!1),
						O = (0, p.$pdc)(),
						B = () => {
							R(!A());
						},
						U = (F) => {
							F.target.closest(".inline-solid-dropdown") || R(!1);
						},
						z = (F) => {
							N.onSelect(F), R(!1);
						};
					return (
						(0, c.createEffect)(() => {
							O.window.document.addEventListener("click", U),
								(0, c.onCleanup)(() => {
									O.window.document.removeEventListener("click", U);
								});
						}),
						(0, c.onCleanup)(() => {
							O.window.document.removeEventListener("click", U);
						}),
						(() => {
							const F = v(),
								x = F.firstChild,
								H = x.firstChild;
							return (
								F.addEventListener("click", B),
								(0, u.insert)(x, () => N.value ?? N.origLabel, H),
								H.style.setProperty("margin-left", "5px"),
								(0, u.insert)(H, () => (A() ? "\u25B2" : "\u25BC")),
								(0, u.insert)(
									F,
									(0, r.createComponent)(c.Show, {
										get when() {
											return A();
										},
										get children() {
											const q = l();
											return (
												(0, u.insert)(
													q,
													(0, r.createComponent)(c.For, {
														get each() {
															return N.items;
														},
														children: (V, G) =>
															(() => {
																const K = $();
																return (
																	K.addEventListener("click", () => z(V.id)),
																	(0, u.insert)(K, () => V.label),
																	K
																);
															})(),
													}),
												),
												q
											);
										},
									}),
									null,
								),
								F
							);
						})()
					);
				};
				e.$Lbc = L;
				const D = (N) => {
					const [A, R, O] = (0, f.$A0b)();
					let B;
					const U = (K) => {
							R(K), N.onOpen?.();
						},
						z = () => {
							O(), N.onClose?.();
						},
						[, F] = (0, c.createSignal)(0);
					(0, c.createEffect)(() => {
						F(N.forceRerender ?? 0), z();
					});
					const { showHover: x, hideHover: H } = (0, s.$Jbc)(),
						q = (K) => {
							N.onSelect(K), z();
						},
						V = (0, c.createMemo)(() => [
							(0, a.memo)(
								(() => {
									const K = (0, a.memo)(() => !!N.useLabel);
									return () =>
										K()
											? N.items.find((J) => J.id === N.value)?.label
											: (N.value ?? N.origLabel);
								})(),
							),
							(0, a.memo)(() => N.labelRightContent),
						]),
						G =
							"ya-solid-dropdown-button-" +
							Math.random().toString(36).substring(2, 15);
					return (() => {
						const K = I(),
							J = K.firstChild,
							W = B;
						return (
							typeof W == "function" ? (0, m.use)(W, K) : (B = K),
							(0, C.spread)(
								J,
								(0, d.mergeProps)(
									() =>
										N.buttonHint
											? {
													onMouseEnter: (X) => x(X, N.buttonHint),
													onMouseLeave: H,
												}
											: {},
									{
										id: G,
										onClick: (X) => {
											if (N.cannotToggle === !0) return;
											if (A()) {
												z();
												return;
											}
											const Y = X.currentTarget.getBoundingClientRect(),
												ie = N.isRelative === void 0 ? !0 : N.isRelative;
											X.stopImmediatePropagation(),
												U(
													ie
														? {
																x: N.anchor === "top-right" ? Y.width : 0,
																y: Y.height + 5,
															}
														: {
																x:
																	Y.left +
																	(N.anchor === "top-right" ? Y.width : 0),
																y: Y.bottom + 5,
															},
												);
										},
										get class() {
											return "input-box-button " + (N.class ?? "");
										},
										get style() {
											return {
												"background-color": "rgba(0, 0, 0, 0)",
												color: "var(--vscode-foreground)",
												"padding-left": "0px",
												display: "flex",
												outline: "none",
												gap: "2px",
												"user-select": "none",
												"align-items": "center",
												cursor: N.cannotToggle === !0 ? "default" : "pointer",
												...N.buttonStyle,
											};
										},
										tabIndex: -1,
									},
								),
								!1,
								!0,
							),
							(0, u.insert)(
								J,
								(0, r.createComponent)(c.Show, {
									get when() {
										return N.chevronRight === !0;
									},
									get children() {
										const X = S();
										return (
											(0, u.insert)(X, V),
											(0, E.effect)((Y) => (0, w.style)(X, N.labelStyle, Y)),
											X
										);
									},
								}),
								null,
							),
							(0, u.insert)(
								J,
								(0, r.createComponent)(c.Show, {
									get when() {
										return N.cannotToggle !== !0;
									},
									get children() {
										const X = S();
										return (
											(0, E.effect)(
												(Y) => {
													const ie = {
															"font-size": "10px",
															"padding-left": "0px",
															...N.labelStyle,
														},
														ne = A()
															? n.ThemeIcon.asClassName(
																	N.reverseChevron
																		? o.$ak.chevronDown
																		: o.$ak.chevronUp,
																)
															: n.ThemeIcon.asClassName(
																	N.reverseChevron
																		? o.$ak.chevronUp
																		: o.$ak.chevronDown,
																);
													return (
														(Y._v$ = (0, w.style)(X, ie, Y._v$)),
														ne !== Y._v$2 && (0, i.className)(X, (Y._v$2 = ne)),
														Y
													);
												},
												{ _v$: void 0, _v$2: void 0 },
											),
											X
										);
									},
								}),
								null,
							),
							(0, u.insert)(
								J,
								(0, r.createComponent)(c.Show, {
									get when() {
										return N.chevronRight !== !0;
									},
									get children() {
										const X = S();
										return (
											(0, u.insert)(X, V),
											(0, E.effect)((Y) => (0, w.style)(X, N.labelStyle, Y)),
											X
										);
									},
								}),
								null,
							),
							(0, u.insert)(
								K,
								(0, r.createComponent)(c.Show, {
									get when() {
										return A();
									},
									children: (X) => {
										const Y = (0, c.createMemo)(() =>
											N.isRelative === void 0 ? !0 : N.isRelative,
										);
										return (0, r.createComponent)(b.Menu, {
											get shouldMountInPortal() {
												return !Y();
											},
											get isRelative() {
												return Y();
											},
											nonBlockingDirection: "vertical",
											nonBlockingRoot: `#${G}`,
											get anchor() {
												return N.anchor;
											},
											width: "max-content",
											class: "ya-solid-dropdown-menu",
											style: {
												gap: 0,
												"background-color":
													"var(--vscode-settings-dropdownBackground)",
												border:
													"1px solid var(--vscode-commandCenter-inactiveBorder)",
												"border-radius": "3px",
												"min-width": "45px",
												"box-shadow": "0px 0px 0px 0px rgba(0, 0, 0, 0.1)",
												"z-index": "10000000000000000",
												"align-items": "flex-start",
											},
											get position() {
												return X();
											},
											close: z,
											get children() {
												return [
													(0, r.createComponent)(c.For, {
														get each() {
															return N.items;
														},
														children: (ie) => {
															const ne = (0, c.createMemo)(
																() => ie.id === N.value,
															);
															return (() => {
																const ee = T(),
																	_ = ee.firstChild,
																	te = _.firstChild;
																return (
																	ee.addEventListener("click", (Q) => {
																		Q.stopImmediatePropagation(), q(ie.id);
																	}),
																	_.style.setProperty("display", "flex"),
																	_.style.setProperty(
																		"flex-direction",
																		"column",
																	),
																	_.style.setProperty(
																		"align-items",
																		"flex-start",
																	),
																	(0, u.insert)(te, () => ie.label),
																	(0, u.insert)(
																		_,
																		(0, r.createComponent)(c.Show, {
																			get when() {
																				return ie.description;
																			},
																			get children() {
																				const Q = S();
																				return (
																					Q.style.setProperty(
																						"font-size",
																						"9px",
																					),
																					Q.style.setProperty("opacity", "0.7"),
																					Q.style.setProperty(
																						"max-width",
																						"160px",
																					),
																					Q.style.setProperty(
																						"line-height",
																						"12px",
																					),
																					(0, u.insert)(
																						Q,
																						() => ie.description,
																					),
																					Q
																				);
																			},
																		}),
																		null,
																	),
																	(0, u.insert)(
																		ee,
																		(0, r.createComponent)(c.Show, {
																			get when() {
																				return ne();
																			},
																			get children() {
																				const Q = S();
																				return (
																					Q.style.setProperty(
																						"font-size",
																						"10px",
																					),
																					Q.style.setProperty(
																						"color",
																						"var(--vscode-list-activeSelectionForeground)",
																					),
																					Q.style.setProperty(
																						"margin-left",
																						"auto",
																					),
																					(0, E.effect)(() =>
																						(0, i.className)(
																							Q,
																							n.ThemeIcon.asClassName(
																								o.$ak.check,
																							),
																						),
																					),
																					Q
																				);
																			},
																		}),
																		null,
																	),
																	(0, E.effect)(
																		(Q) => {
																			const Z = {
																					...N.liStyles,
																					"background-color": ne()
																						? "var(--vscode-list-activeSelectionBackground)"
																						: void 0,
																					color: ne()
																						? "var(--vscode-list-activeSelectionForeground)"
																						: void 0,
																					display: "flex",
																					"align-items": "center",
																					gap: "4px",
																					padding: ie.description
																						? "2px 6px 5px 6px"
																						: "1px 4px",
																					"border-radius": "2px",
																				},
																				se = ie.description ? "11px" : "10px",
																				re = ie.description ? "18px" : void 0;
																			return (
																				(Q._v$3 = (0, w.style)(ee, Z, Q._v$3)),
																				se !== Q._v$4 &&
																					((Q._v$4 = se) != null
																						? te.style.setProperty(
																								"font-size",
																								se,
																							)
																						: te.style.removeProperty(
																								"font-size",
																							)),
																				re !== Q._v$5 &&
																					((Q._v$5 = re) != null
																						? te.style.setProperty(
																								"line-height",
																								re,
																							)
																						: te.style.removeProperty(
																								"line-height",
																							)),
																				Q
																			);
																		},
																		{
																			_v$3: void 0,
																			_v$4: void 0,
																			_v$5: void 0,
																		},
																	),
																	ee
																);
															})();
														},
													}),
													(0, r.createComponent)(c.Show, {
														get when() {
															return N.belowListComponent;
														},
														get children() {
															return N.belowListComponent;
														},
													}),
												];
											},
										});
									},
								}),
								null,
							),
							(0, E.effect)((X) =>
								(0, w.style)(K, { outline: "none", ...N.containerStyle }, X),
							),
							K
						);
					})();
				};
				e.$Mbc = D;
				function M(N) {
					let A;
					const R = (0, p.$pdc)(),
						[O, B] = (0, c.createSignal)(void 0);
					return (
						(0, c.createEffect)(
							(0, c.on)(
								[() => N.selectBoxOptions, () => N.styles],
								([U, z]) => {
									if (A === void 0) {
										console.error("Ref is undefined");
										return;
									}
									const F = new g.$5ib(
										N.options,
										N.selected,
										R.contextViewService,
										z,
										U,
									);
									F.render(A), B(F);
									const x = F.onDidSelect((H) => {
										N.onSelect(H.index);
									});
									(0, c.onCleanup)(() => {
										F.dispose(), x.dispose();
									});
								},
							),
						),
						(0, c.createEffect)(() => {
							const U = O();
							U !== void 0 && U.setOptions(N.options, N.selected);
						}),
						(() => {
							const U = P();
							return (0, m.use)((z) => (A = z), U), U;
						})()
					);
				}
			},
		),
		