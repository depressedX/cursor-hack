define(
			de[147],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 26, 14, 36, 295, 7, 2528]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sdc = e.$rdc = void 0);
				const f = (0, t.template)("<div>"),
					b = (0, t.template)("<div><div>"),
					s = (0, t.template)(
						'<div><div></div><div class="cursor-simple-button-hover-list"><div>',
					),
					l = (0, t.template)("<div> <!> "),
					y = (0, t.template)("<option>Loading..."),
					$ = (0, t.template)(
						'<div class="cursor-simple-button-hover-list-item">',
					),
					v = (I) => {
						const T = () => I.size ?? "medium",
							P = (k) =>
								(0, u.createComponent)(h.Show, {
									get when() {
										return (
											I.codicon &&
											(k === "left"
												? !I.renderCodiconOnRight
												: I.renderCodiconOnRight)
										);
									},
									get children() {
										return (0, a.memo)(() => typeof I.codicon == "object")()
											? (() => {
													const L = f();
													return (
														(0, r.effect)(
															(D) => {
																const M = {
																		"font-size": "12px",
																		...I.codiconStyle,
																	},
																	N = c.ThemeIcon.asClassName(I.codicon);
																return (
																	(D._v$ = (0, m.style)(L, M, D._v$)),
																	N !== D._v$2 &&
																		(0, d.className)(L, (D._v$2 = N)),
																	D
																);
															},
															{ _v$: void 0, _v$2: void 0 },
														),
														L
													);
												})()
											: (() => {
													const L = f();
													return (
														(0, C.insert)(L, () => I.codicon),
														(0, r.effect)((D) =>
															(0, m.style)(
																L,
																{ "font-size": "12px", ...I.codiconStyle },
																D,
															),
														),
														L
													);
												})();
									},
								});
						return (() => {
							const k = f();
							return (
								(0, i.use)((L) => I.setRef?.(L), k),
								k.addEventListener("blur", () => I.onBlur?.()),
								k.addEventListener("keydown", (L) => {
									(L.key === "Enter" || L.key === " ") &&
										(L.preventDefault(),
										!I.disabled && I.onClick != null && I.onClick(L));
								}),
								k.addEventListener("mouseleave", () => I.onMouseLeave?.()),
								k.addEventListener("mouseenter", (L) => I.onMouseEnter?.(L)),
								k.addEventListener("mousedown", (L) => {
									!I.disabled && I.onClick != null && I.onClick(L);
								}),
								(0, w.spread)(
									k,
									(0, E.mergeProps)(
										{
											get id() {
												return I.id;
											},
											get class() {
												return [
													`cursor-button cursor-button-${I.type ?? "primary"}`,
													I.isNotClickable
														? "cursor-button-not-clickable"
														: `cursor-button-${I.type ?? "primary"}-clickable`,
													I.type === "disabled" || I.disabled ? "disabled" : "",
													I.tabFocusable ? "tab-focusable" : "",
													T() === "small" ? "cursor-button-small" : "",
													I.class,
												]
													.filter(Boolean)
													.join(" ");
											},
											get style() {
												return {
													"user-select": "none",
													"flex-shrink": 0,
													...I.style,
												};
											},
											get tabIndex() {
												return I.tabFocusable ? 0 : void 0;
											},
										},
										() => I.extras,
									),
									!1,
									!0,
								),
								(0, C.insert)(k, () => P("left"), null),
								(0, C.insert)(k, () => I.title, null),
								(0, C.insert)(k, () => I.children, null),
								(0, C.insert)(
									k,
									(0, u.createComponent)(h.Show, {
										get when() {
											return I.keyboardShortcut;
										},
										get children() {
											const L = f();
											return (
												L.style.setProperty("font-size", "10px"),
												L.style.setProperty("opacity", "0.6"),
												(0, C.insert)(L, () => I.keyboardShortcut),
												L
											);
										},
									}),
									null,
								),
								(0, C.insert)(k, () => P("right"), null),
								(0, C.insert)(
									k,
									(0, u.createComponent)(h.Show, {
										get when() {
											return I.isLoading;
										},
										get children() {
											return (0, u.createComponent)(p.$Z8b, {
												get onPrimaryButton() {
													return (I.type ?? "primary") === "primary";
												},
												extras: { style: { "margin-left": "4px" } },
												get small() {
													return I.smallSpinner;
												},
											});
										},
									}),
									null,
								),
								k
							);
						})();
					};
				e.$rdc = v;
				const S = (I) => {
					const [T, P] = (0, h.createSignal)(!1),
						k = (0, g.$pdc)(),
						L = { value: void 0 };
					return (
						(0, h.createEffect)(() => {
							const D = (M) => {
								(0, o.$Ygb)(M.target) &&
									!M.target.closest(".cursor-simple-button-hover-list-item") &&
									!M.target.closest(".cursor-simple-button-hover-list") &&
									!L.value?.contains(M.target) &&
									P(!1);
							};
							return (
								k.window.document.addEventListener("click", D),
								() => {
									k.window.document.removeEventListener("click", D);
								}
							);
						}),
						(() => {
							const D = s(),
								M = D.firstChild,
								N = M.nextSibling,
								A = N.firstChild;
							return (
								D.addEventListener("click", (R) => {
									!I.disabled && I.onClick != null && I.onClick(R);
								}),
								(0, i.use)((R) => {
									L.value = R;
								}, D),
								(0, w.spread)(
									D,
									(0, E.mergeProps)(
										{
											get class() {
												return [
													`cursor-button cursor-button-${I.type ?? "primary"}`,
													I.disabled ? "disabled" : "",
													I.class,
												]
													.filter(Boolean)
													.join(" ");
											},
											get style() {
												return {
													position: "relative",
													"user-select": "none",
													cursor: I.isNotClickable ? "default" : "pointer",
													...I.style,
												};
											},
										},
										() => I.extras,
									),
									!1,
									!0,
								),
								(0, C.insert)(
									D,
									(() => {
										const R = (0, a.memo)(
											() => !!(I.codicon && typeof I.codicon == "object"),
										);
										return () =>
											R() &&
											(() => {
												const O = f();
												return (
													(0, r.effect)(
														(B) => {
															const U = {
																	"font-size": "12px",
																	...I.codiconStyle,
																},
																z = c.ThemeIcon.asClassName(I.codicon);
															return (
																(B._v$5 = (0, m.style)(O, U, B._v$5)),
																z !== B._v$6 &&
																	(0, d.className)(O, (B._v$6 = z)),
																B
															);
														},
														{ _v$5: void 0, _v$6: void 0 },
													),
													O
												);
											})();
									})(),
									M,
								),
								(0, C.insert)(
									D,
									(() => {
										const R = (0, a.memo)(
											() => !!(I.codicon && typeof I.codicon == "string"),
										);
										return () =>
											R() &&
											(() => {
												const O = l(),
													B = O.firstChild,
													U = B.nextSibling,
													z = U.nextSibling;
												return (
													(0, C.insert)(O, () => I.codicon, U),
													(0, r.effect)((F) =>
														(0, m.style)(
															O,
															{ "font-size": "12px", ...I.codiconStyle },
															F,
														),
													),
													O
												);
											})();
									})(),
									M,
								),
								(0, C.insert)(
									D,
									(() => {
										const R = (0, a.memo)(() => !!(I.title && I.codicon));
										return () =>
											R() &&
											(() => {
												const O = f();
												return (
													O.style.setProperty("display", "inline-block"),
													O.style.setProperty("width", "4px"),
													O
												);
											})();
									})(),
									M,
								),
								M.style.setProperty("flex-grow", "1"),
								M.style.setProperty("display", "flex"),
								M.style.setProperty("align-items", "center"),
								M.style.setProperty("justify-content", "center"),
								(0, C.insert)(M, () => I.title),
								(0, C.insert)(
									D,
									(() => {
										const R = (0, a.memo)(() => !!I.keyboardShortcut);
										return () =>
											R() &&
											(() => {
												const O = f();
												return (
													O.style.setProperty("margin-left", "4px"),
													O.style.setProperty("font-size", "10px"),
													(0, C.insert)(O, () => I.keyboardShortcut),
													O
												);
											})();
									})(),
									N,
								),
								N.addEventListener("click", (R) => {
									R.stopPropagation(), R.preventDefault(), P(!T());
								}),
								N.style.setProperty("position", "absolute"),
								N.style.setProperty("display", "flex"),
								N.style.setProperty("align-items", "center"),
								N.style.setProperty("justify-content", "center"),
								N.style.setProperty("padding", "0px 8px"),
								N.style.setProperty("right", "0px"),
								(0, C.insert)(
									N,
									(0, u.createComponent)(h.Show, {
										get when() {
											return T();
										},
										get children() {
											const R = b(),
												O = R.firstChild;
											return (
												R.addEventListener("mouseenter", (B) =>
													B.stopPropagation(),
												),
												R.style.setProperty("position", "absolute"),
												R.style.setProperty("top", "100%"),
												R.style.setProperty("right", "0px"),
												R.style.setProperty("align-items", "center"),
												R.style.setProperty("justify-content", "flex-end"),
												R.style.setProperty("display", "flex"),
												R.style.setProperty("width", "250px"),
												R.style.setProperty("z-index", "100"),
												O.style.setProperty("display", "flex"),
												O.style.setProperty("z-index", "1000"),
												O.style.setProperty("font-size", "12px"),
												O.style.setProperty("border-radius", "4px"),
												O.style.setProperty(
													"border",
													"1px solid var(--vscode-editorWidget-border)",
												),
												O.style.setProperty(
													"background",
													"var(--vscode-editorWidget-background)",
												),
												O.style.setProperty("align-items", "center"),
												O.style.setProperty("justify-content", "center"),
												O.style.setProperty("flex-direction", "column"),
												(0, C.insert)(
													O,
													(0, u.createComponent)(h.For, {
														get each() {
															return I.dropdowns;
														},
														get fallback() {
															return y();
														},
														children: (B, U) =>
															(() => {
																const z = $();
																return (
																	z.addEventListener("click", (F) => {
																		F.stopPropagation(),
																			F.preventDefault(),
																			I.onClickDropdown &&
																				I.onClickDropdown(U()),
																			P(!1);
																	}),
																	z.style.setProperty("cursor", "pointer"),
																	z.style.setProperty("z-index", "1001"),
																	z.style.setProperty("padding", "8px 12px"),
																	z.style.setProperty(
																		"color",
																		"var(--vscode-button-foreground)",
																	),
																	(0, C.insert)(z, B),
																	z
																);
															})(),
													}),
												),
												R
											);
										},
									}),
									null,
								),
								(0, r.effect)(
									(R) => {
										const O =
												I.type !== "secondary"
													? "1px solid var(--vscode-button-separator)"
													: "none",
											B = c.ThemeIcon.asClassName(n.$ak.chevronDown);
										return (
											O !== R._v$3 &&
												((R._v$3 = O) != null
													? N.style.setProperty("border-left", O)
													: N.style.removeProperty("border-left")),
											B !== R._v$4 && (0, d.className)(A, (R._v$4 = B)),
											R
										);
									},
									{ _v$3: void 0, _v$4: void 0 },
								),
								D
							);
						})()
					);
				};
				e.$sdc = S;
			},
		),
		