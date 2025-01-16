define(
			de[4222],
			he([1, 0, 2, 2, 2, 2, 13, 147, 534, 534, 1137]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Gdc = void 0);
				const u = (0, t.template)(
						'<div class="inline-prompt-button-area"><hr><div>Which files should we edit?</div><hr>',
					),
					a = (0, t.template)("<div>"),
					h = (0, t.template)(
						'<div class="inline-prompt-button-area"><div><div><span>',
					),
					c = (n) => {
						const g = (0, r.$n8b)(),
							p = (0, C.createMemo)(() =>
								g.nonPersistentStorage.promptBars.find((f) => f.id === n.id),
							),
							o = (0, C.createMemo)(() =>
								g.nonPersistentStorage.promptBars.filter(
									(f) => f.dependencyPromptBarIds?.includes(p().id) ?? !1,
								),
							);
						return (0, E.createComponent)(C.Show, {
							get when() {
								return (
									p() !== void 0 &&
									o().length === 0 &&
									n.multiFileEditingState ===
										m.MultiFileEditingState.WaitingForUserInput &&
									n.potentialFilesToEdit.length > 0
								);
							},
							get children() {
								const f = u(),
									b = f.firstChild,
									s = b.nextSibling,
									l = s.firstChild,
									y = s.nextSibling;
								return (
									b.style.setProperty("opacity", "0.1"),
									b.style.setProperty("height", "1px"),
									s.style.setProperty(
										"color",
										"var(--vscode-input-placeholderForeground)",
									),
									(0, w.insert)(
										s,
										(0, E.createComponent)(C.For, {
											get each() {
												return n.potentialFilesToEdit;
											},
											get fallback() {
												return a();
											},
											children: ($, v) =>
												(() => {
													const S = h(),
														I = S.firstChild,
														T = I.firstChild,
														P = T.firstChild;
													return (
														I.style.setProperty("display", "flex"),
														I.style.setProperty(
															"justify-content",
															"space-between",
														),
														I.style.setProperty("align-items", "center"),
														T.style.setProperty("white-space", "nowrap"),
														T.style.setProperty("overflow", "hidden"),
														T.style.setProperty("text-overflow", "ellipsis"),
														T.style.setProperty("max-width", "400px"),
														T.style.setProperty("direction", "rtl"),
														T.style.setProperty("cursor", "pointer"),
														T.style.setProperty("font-size", "12px"),
														(0, w.insert)(P, $),
														(0, w.insert)(
															I,
															(0, E.createComponent)(C.Show, {
																get when() {
																	return !n.selectedFilesToEdit.includes($);
																},
																get children() {
																	const k = a();
																	return (
																		k.style.setProperty("display", "flex"),
																		k.style.setProperty(
																			"white-space",
																			"nowrap",
																		),
																		(0, w.insert)(
																			k,
																			(0, E.createComponent)(d.$rdc, {
																				get title() {
																					return v() ===
																						n.potentialFilesToEditCurrentIndex
																						? "\u2318Y Select"
																						: "Select";
																				},
																				type: "secondary",
																				style: {
																					"font-size": "10px",
																					"margin-right": "1px",
																				},
																				onClick: () => {
																					n.setSelectedFilesToEdit([
																						...n.selectedFilesToEdit.filter(
																							(M) => M !== $,
																						),
																						$,
																					]);
																					const L =
																							n.potentialFilesToEdit.indexOf($),
																						D =
																							L + 1 >=
																							n.potentialFilesToEdit.length
																								? 0
																								: L + 1;
																					n.setPotentialFilesToEditCurrentIndex(
																						D,
																					);
																				},
																			}),
																			null,
																		),
																		(0, w.insert)(
																			k,
																			(0, E.createComponent)(C.Show, {
																				get when() {
																					return (
																						n.potentialFilesToEditCurrentIndex ===
																						v()
																					);
																				},
																				get children() {
																					return (0, E.createComponent)(
																						d.$rdc,
																						{
																							title: "\u2318N Ignore",
																							type: "secondary",
																							style: { "font-size": "10px" },
																							onClick: () => {
																								n.setSelectedFilesToEdit([
																									...n.selectedFilesToEdit.filter(
																										(M) => M !== $,
																									),
																								]);
																								const L =
																										n.potentialFilesToEdit.indexOf(
																											$,
																										),
																									D =
																										L + 1 >=
																										n.potentialFilesToEdit
																											.length
																											? 0
																											: L + 1;
																								n.setPotentialFilesToEditCurrentIndex(
																									D,
																								);
																							},
																						},
																					);
																				},
																			}),
																			null,
																		),
																		k
																	);
																},
															}),
															null,
														),
														(0, w.insert)(
															I,
															(0, E.createComponent)(C.Show, {
																get when() {
																	return n.selectedFilesToEdit.includes($);
																},
																get children() {
																	const k = a();
																	return (
																		k.style.setProperty("display", "flex"),
																		k.style.setProperty(
																			"white-space",
																			"nowrap",
																		),
																		(0, w.insert)(
																			k,
																			(0, E.createComponent)(d.$rdc, {
																				get title() {
																					return v() ===
																						n.potentialFilesToEditCurrentIndex
																						? "\u2318N Remove"
																						: "Remove";
																				},
																				type: "secondary",
																				style: { "font-size": "10px" },
																				onClick: () => {
																					n.setSelectedFilesToEdit([
																						...n.selectedFilesToEdit.filter(
																							(M) => M !== $,
																						),
																					]);
																					const L =
																							n.potentialFilesToEdit.indexOf($),
																						D =
																							L + 1 >=
																							n.potentialFilesToEdit.length
																								? 0
																								: L + 1;
																					n.setPotentialFilesToEditCurrentIndex(
																						D,
																					);
																				},
																			}),
																		),
																		k
																	);
																},
															}),
															null,
														),
														(0, i.effect)(
															(k) => {
																const L =
																		v() === n.potentialFilesToEditCurrentIndex
																			? "1px solid var(--vscode-commandCenter-activeBorder)"
																			: "none",
																	D = n.selectedFilesToEdit.includes($)
																		? "rgba(180, 180, 180, 0.1)"
																		: "transparent";
																return (
																	L !== k._v$ &&
																		((k._v$ = L) != null
																			? S.style.setProperty("border", L)
																			: S.style.removeProperty("border")),
																	D !== k._v$2 &&
																		((k._v$2 = D) != null
																			? S.style.setProperty(
																					"background-color",
																					D,
																				)
																			: S.style.removeProperty(
																					"background-color",
																				)),
																	k
																);
															},
															{ _v$: void 0, _v$2: void 0 },
														),
														S
													);
												})(),
										}),
										null,
									),
									y.style.setProperty("opacity", "0.1"),
									y.style.setProperty("height", "1px"),
									f
								);
							},
						});
					};
				e.$Gdc = c;
			},
		),
		