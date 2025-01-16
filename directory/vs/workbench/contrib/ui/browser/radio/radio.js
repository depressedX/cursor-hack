define(
			de[3207],
			he([1, 0, 2, 2, 2, 2, 13]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Hzc = void 0);
				const d = (0, t.template)("<div>"),
					m = (r) =>
						(() => {
							const u = d();
							return (
								u.style.setProperty("display", "inline-flex"),
								u.style.setProperty("flex-direction", "row"),
								u.style.setProperty("overflow", "clip"),
								u.style.setProperty("border-radius", "3px"),
								u.style.setProperty(
									"border",
									"1px solid var(--vscode-foreground)",
								),
								(0, w.insert)(
									u,
									(0, E.createComponent)(C.For, {
										get each() {
											return r.options;
										},
										children: (a) =>
											(() => {
												const h = d();
												return (
													h.addEventListener("click", () => r.onChange(a)),
													h.style.setProperty("padding", "2px 8px"),
													h.style.setProperty("cursor", "pointer"),
													(0, w.insert)(h, a),
													(0, i.effect)(
														(c) => {
															const n =
																	r.selected === a
																		? "var(--vscode-foreground)"
																		: "var(--vscode-editor-background)",
																g =
																	r.selected === a
																		? "var(--vscode-editor-background)"
																		: "var(--vscode-foreground)";
															return (
																n !== c._v$ &&
																	((c._v$ = n) != null
																		? h.style.setProperty("background-color", n)
																		: h.style.removeProperty(
																				"background-color",
																			)),
																g !== c._v$2 &&
																	((c._v$2 = g) != null
																		? h.style.setProperty("color", g)
																		: h.style.removeProperty("color")),
																c
															);
														},
														{ _v$: void 0, _v$2: void 0 },
													),
													h
												);
											})(),
									}),
								),
								u
							);
						})();
				e.$Hzc = m;
			},
		),
		