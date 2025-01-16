define(
			de[1979],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 364, 484, 26, 14, 322, 63, 818,
				12, 36, 1779,
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
					(e.$2bc = void 0);
				const $ = (0, t.template)("<span>"),
					v = (0, t.template)(
						'<div class="ya-solid-dropdown" tabindex="-1"><button tabindex="-1">',
					),
					S = (0, t.template)('<input type="text">'),
					I = (0, t.template)("<li><div>"),
					T = (P) => {
						const k = (0, l.$odc)(),
							[L, D] = (0, h.createSignal)(""),
							[M, N, A] = (0, c.$A0b)(),
							{ showHover: R, hideHover: O } = (0, y.$Jbc)();
						let B, U;
						const z = (X) => {
								N(X);
								const Y = P.items.findIndex((ie) => ie.id === P.value);
								G(Y !== -1 ? Y : null), P.onOpen?.();
							},
							F = (X) => {
								A(), D(""), G(null), X || P.onCloseIgnoresClicking?.();
							},
							x = (X) => {
								P.onSelect(X), F();
							},
							H = (0, h.createMemo)(() => {
								const X = L().toLowerCase();
								if (!X)
									return P.items.map((ie) => ({
										...ie,
										score: 1,
										labelMatch: void 0,
										descriptionMatch: void 0,
									}));
								const Y = (0, o.$hs)(X);
								return P.items
									.map((ie) => {
										const { score: ne, labelMatch: ee } = (0, o.$fs)(
												{ label: ie.label },
												Y,
												!0,
												f.$CJ,
												{},
											),
											{ score: _, descriptionMatch: te } = ie.description
												? (0, o.$fs)(
														{ label: ie.label, description: ie.description },
														Y,
														!0,
														f.$CJ,
														{},
													)
												: { score: 0, descriptionMatch: void 0 },
											Q = ie.keywords
												? Math.max(
														...ie.keywords.map(
															(se) =>
																(0, o.$fs)({ label: se }, Y, !0, f.$CJ, {})
																	.score,
														),
													)
												: 0,
											Z = Math.max(ne, _, Q);
										return {
											...ie,
											score: Z,
											labelMatch: ee,
											descriptionMatch: te,
										};
									})
									.filter((ie) => ie.score > 0)
									.sort((ie, ne) => ne.score - ie.score);
							}),
							q =
								"dropdown-input-" + Math.random().toString(36).substring(2, 15),
							[V, G] = (0, h.createSignal)(null),
							K = (X) => {
								if (!M()) return;
								const Y = (ie) => {
									X.preventDefault(),
										G((ne) =>
											ne === null
												? ie === "down"
													? 0
													: H().length - 1
												: ie === "down"
													? ne === H().length - 1
														? 0
														: ne + 1
													: ne === 0
														? H().length - 1
														: ne - 1,
										);
								};
								switch (X.key) {
									case "ArrowDown":
										Y("down");
										break;
									case "ArrowUp":
										Y("up");
										break;
									case "Enter":
										X.preventDefault(), V() !== null && x(H()[V()].id);
										break;
									case "Escape":
										X.preventDefault(), F();
										break;
									default:
										s.$m &&
											((X.altKey || X.ctrlKey) && X.key === "j"
												? Y("down")
												: (X.altKey || X.ctrlKey) && X.key === "k" && Y("up"));
										break;
								}
							},
							J = (0, h.createMemo)(() =>
								P.useLabel
									? P.items.find((X) => X.id === P.value)?.label
									: P.value
										? P.value
										: P.origLabel
											? P.origLabel
											: P.emptyStateText || "",
							);
						(0, h.createEffect)(() => {
							const X = P.setTriggerFn;
							(0, h.onMount)(() => {
								X?.(() => {
									U && U.click();
								});
							});
						});
						const W = (0, h.createMemo)(() => ({
							...P.labelStyle,
							"text-overflow": "ellipsis",
							"white-space": "nowrap",
							overflow: "hidden",
						}));
						return (() => {
							const X = v(),
								Y = X.firstChild,
								ie = B;
							typeof ie == "function" ? (0, a.use)(ie, X) : (B = X),
								Y.addEventListener("click", (ee) => {
									if (P.cannotToggle === !0) return;
									if (M()) {
										F();
										return;
									}
									const _ = ee.currentTarget.getBoundingClientRect(),
										te = P.isRelative === void 0 ? !0 : P.isRelative;
									ee.stopImmediatePropagation(),
										z(
											te
												? {
														x: P.anchor === "top-right" ? _.width : 0,
														y: _.height + 5,
													}
												: {
														x:
															_.left + (P.anchor === "top-right" ? _.width : 0),
														y: _.bottom + 5,
													},
										);
								});
							const ne = U;
							return (
								typeof ne == "function" ? (0, a.use)(ne, Y) : (U = Y),
								(0, r.spread)(
									Y,
									(0, u.mergeProps)(
										{
											get id() {
												return P.buttonId ?? q;
											},
											get class() {
												return "input-box-button " + (P.class ?? "");
											},
											get style() {
												return {
													"background-color": "rgba(0, 0, 0, 0)",
													color:
														J() === P.emptyStateText
															? "var(--vscode-descriptionForeground)"
															: "var(--vscode-foreground)",
													"padding-left": "0px",
													display: "flex",
													outline: "none",
													gap: "2px",
													"user-select": "none",
													"align-items": "center",
													cursor: P.cannotToggle === !0 ? "default" : "pointer",
													width: "100%",
													"min-width": 0,
													opacity: M() ? 1 : void 0,
													...P.buttonStyle,
												};
											},
										},
										() =>
											P.buttonHint
												? {
														onMouseEnter: (ee) => R(ee, P.buttonHint),
														onMouseLeave: O,
													}
												: {},
									),
									!1,
									!0,
								),
								(0, m.insert)(
									Y,
									(0, E.createComponent)(h.Show, {
										get when() {
											return P.chevronRight === !0;
										},
										get children() {
											const ee = $();
											return (
												(0, m.insert)(ee, J),
												(0, d.effect)((_) => (0, C.style)(ee, W(), _)),
												ee
											);
										},
									}),
									null,
								),
								(0, m.insert)(
									Y,
									(0, E.createComponent)(h.Show, {
										get when() {
											return P.cannotToggle !== !0;
										},
										get children() {
											const ee = $();
											return (
												(0, d.effect)(
													(_) => {
														const te = {
																"font-size": "10px",
																"padding-left": P.chevronRight ? "2px" : void 0,
																...P.labelStyle,
															},
															Q = M()
																? g.ThemeIcon.asClassName(
																		P.reverseChevron
																			? p.$ak.chevronDown
																			: p.$ak.chevronUp,
																	)
																: g.ThemeIcon.asClassName(
																		P.reverseChevron
																			? p.$ak.chevronUp
																			: p.$ak.chevronDown,
																	);
														return (
															(_._v$ = (0, C.style)(ee, te, _._v$)),
															Q !== _._v$2 &&
																(0, w.className)(ee, (_._v$2 = Q)),
															_
														);
													},
													{ _v$: void 0, _v$2: void 0 },
												),
												ee
											);
										},
									}),
									null,
								),
								(0, m.insert)(
									Y,
									(0, E.createComponent)(h.Show, {
										get when() {
											return P.chevronRight !== !0;
										},
										get children() {
											const ee = $();
											return (
												(0, m.insert)(ee, J),
												(0, d.effect)((_) => (0, C.style)(ee, W(), _)),
												ee
											);
										},
									}),
									null,
								),
								(0, m.insert)(
									X,
									(0, E.createComponent)(h.Show, {
										get when() {
											return M();
										},
										children: (ee) => {
											const _ = (0, h.createMemo)(() =>
												P.isRelative === void 0 ? !0 : P.isRelative,
											);
											return (0, E.createComponent)(n.Menu, {
												get shouldMountInPortal() {
													return !_();
												},
												get isRelative() {
													return _();
												},
												nonBlockingDirection: "vertical",
												get nonBlockingRoot() {
													return `#${P.buttonId ?? q}`;
												},
												get anchor() {
													return P.anchor;
												},
												get width() {
													return P.menuWidth ?? "max-content";
												},
												class: "ya-solid-dropdown-menu",
												style: {
													gap: "1px",
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
													return ee();
												},
												close: F,
												get children() {
													return [
														(() => {
															const te = S();
															return (
																te.addEventListener("keydown", K),
																te.addEventListener("input", (Q) => {
																	const Z = Q.target.value;
																	D(Z),
																		G(H().length > 0 ? 0 : null),
																		P.onSearch?.(Z);
																}),
																(0, a.use)((Q) => {
																	const Z = async (se = 0) => {
																		await new Promise((re) =>
																			setTimeout(re, 0),
																		),
																			Q?.focus(),
																			await new Promise((re) =>
																				setTimeout(re, 0),
																			),
																			Q !== k?.window.document.activeElement &&
																				se < 10 &&
																				Z(se + 1);
																	};
																	Z();
																}, te),
																te.style.setProperty(
																	"background-color",
																	"var(--vscode-editor-background)",
																),
																te.style.setProperty(
																	"color",
																	"var(--vscode-input-foreground)",
																),
																te.style.setProperty(
																	"border",
																	"1px solid var(--vscode-input-border)",
																),
																te.style.setProperty("border-radius", "2px"),
																te.style.setProperty("margin", "2px"),
																te.style.setProperty("padding", "2px 2px"),
																te.style.setProperty("outline", "none"),
																te.style.setProperty("align-self", "stretch"),
																(0, d.effect)(() =>
																	(0, i.setAttribute)(
																		te,
																		"placeholder",
																		P.placeholder ?? "Search...",
																	),
																),
																(0, d.effect)(() => (te.value = L())),
																te
															);
														})(),
														(0, E.createComponent)(h.For, {
															get each() {
																return H();
															},
															children: (te, Q) =>
																(() => {
																	const Z = I(),
																		se = Z.firstChild;
																	return (
																		Z.addEventListener("click", (re) => {
																			re.stopImmediatePropagation(), x(te.id);
																		}),
																		se.style.setProperty("display", "flex"),
																		se.style.setProperty(
																			"flex-direction",
																			"column",
																		),
																		se.style.setProperty(
																			"align-items",
																			"flex-start",
																		),
																		se.style.setProperty("flex-grow", "1"),
																		(0, m.insert)(
																			se,
																			(0, E.createComponent)(b.$tbc, {
																				get text() {
																					return te.label;
																				},
																				get highlights() {
																					return te.labelMatch;
																				},
																				get style() {
																					return {
																						"font-size": te.description
																							? "11px"
																							: "10px",
																						"line-height": te.description
																							? "18px"
																							: void 0,
																					};
																				},
																			}),
																			null,
																		),
																		(0, m.insert)(
																			se,
																			(0, E.createComponent)(h.Show, {
																				get when() {
																					return te.description;
																				},
																				get children() {
																					const re = $();
																					return (
																						re.style.setProperty(
																							"font-size",
																							"9px",
																						),
																						re.style.setProperty(
																							"line-height",
																							"12px",
																						),
																						re.style.setProperty(
																							"opacity",
																							"0.7",
																						),
																						re.style.setProperty(
																							"max-width",
																							"160px",
																						),
																						(0, m.insert)(
																							re,
																							(0, E.createComponent)(b.$tbc, {
																								get text() {
																									return te.description;
																								},
																								get highlights() {
																									return te.descriptionMatch;
																								},
																							}),
																						),
																						re
																					);
																				},
																			}),
																			null,
																		),
																		(0, m.insert)(
																			Z,
																			(0, E.createComponent)(h.Show, {
																				get when() {
																					return te.id === P.value;
																				},
																				get children() {
																					const re = $();
																					return (
																						re.style.setProperty(
																							"font-size",
																							"10px",
																						),
																						re.style.setProperty(
																							"margin-left",
																							"auto",
																						),
																						(0, d.effect)(
																							(le) => {
																								const oe =
																										Q() === V()
																											? "var(--vscode-list-activeSelectionForeground)"
																											: "var(--vscode-testing-iconPassed)",
																									ae = g.ThemeIcon.asClassName(
																										p.$ak.check,
																									);
																								return (
																									oe !== le._v$3 &&
																										((le._v$3 = oe) != null
																											? re.style.setProperty(
																													"color",
																													oe,
																												)
																											: re.style.removeProperty(
																													"color",
																												)),
																									ae !== le._v$4 &&
																										(0, w.className)(
																											re,
																											(le._v$4 = ae),
																										),
																									le
																								);
																							},
																							{ _v$3: void 0, _v$4: void 0 },
																						),
																						re
																					);
																				},
																			}),
																			null,
																		),
																		(0, d.effect)((re) =>
																			(0, C.style)(
																				Z,
																				{
																					...P.liStyles,
																					"background-color":
																						Q() === V()
																							? "var(--vscode-list-activeSelectionBackground)"
																							: void 0,
																					color:
																						Q() === V()
																							? "var(--vscode-list-activeSelectionForeground)"
																							: void 0,
																					display: "flex",
																					"align-items": "center",
																					gap: "4px",
																					padding: te.description
																						? "2px 6px 5px 6px"
																						: "1px 4px",
																					"border-radius": "2px",
																				},
																				re,
																			),
																		),
																		Z
																	);
																})(),
														}),
														(0, E.createComponent)(h.Show, {
															get when() {
																return P.belowListComponent;
															},
															get children() {
																return P.belowListComponent;
															},
														}),
													];
												},
											});
										},
									}),
									null,
								),
								(0, d.effect)((ee) =>
									(0, C.style)(
										X,
										{
											outline: "none",
											overflow: "hidden",
											"text-overflow": "ellipsis",
											"white-space": "nowrap",
											...P.containerStyle,
										},
										ee,
									),
								),
								X
							);
						})();
					};
				e.$2bc = T;
			},
		),
		