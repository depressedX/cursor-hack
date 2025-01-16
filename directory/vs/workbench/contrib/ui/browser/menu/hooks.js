define(de[364], he([1, 0, 13, 36]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$z0b = w),
				(e.$A0b = E),
				(e.$B0b = C);
			function w(d, m) {
				(0, t.onMount)(() => {
					const r = d();
					if (!r) return;
					const u = new ResizeObserver(() => {
						m();
					});
					u.observe(r), (0, t.onCleanup)(() => u.disconnect());
				});
			}
			function E(d = null) {
				const [m, r] = (0, t.createSignal)(d);
				return [
					m,
					(c) => {
						r(c);
					},
					() => r(null),
					() => {
						r(m() ? null : d);
					},
				];
			}
			function C(d, m, r = 100, u = () => !1) {
				const a = (0, i.$odc)();
				let h,
					c = !1;
				const n = (p) => {
						const o = d();
						o && (o.contains(p.target) || m(p));
					},
					g = () => {
						h !== void 0 && (clearTimeout(h), (h = void 0)),
							c &&
								a.window?.document &&
								(a.window.document.removeEventListener("mouseup", n), (c = !1));
					};
				return (
					(0, t.createEffect)(() => {
						if (u()) {
							g();
							return;
						}
						const p = () => {
							a.window?.document &&
								(a.window.document.addEventListener("mouseup", n), (c = !0));
						};
						g(),
							(0, t.onMount)(() => {
								h = setTimeout(p, r);
							}),
							(0, t.onCleanup)(g);
					}),
					g
				);
			}
		}),
		define(
			de[484],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 364, 13, 36, 2, 2521]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.Menu = p);
				const n = (0, t.template)("<div>"),
					g = { top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0 };
				function p(o) {
					const f = (0, h.$odc)();
					let b;
					const [s, l] = (0, u.$A0b)();
					let y = !1;
					(0, a.createEffect)(() => {
						o.reactiveCloser && y && o.close();
					}),
						(0, a.createEffect)(() => {
							(0, a.onMount)(() => {
								y = !0;
							});
						}),
						(0, a.createEffect)(() => {
							o.shouldAutoFocus && b?.focus();
						});
					const $ = () => {
						const I = f.window,
							T = o.marginToOverflowRoot ?? 2,
							P = o.marginToNonBlockingRoot ?? 2,
							k = o.anchor ?? "top-left",
							L = o.isRelative ?? !1,
							D = o.nonBlockingDirection ?? "horizontal",
							M = o.preventOverflow ?? !0,
							N = o.overflowRoot ?? I.document.body;
						if (!M) {
							l(o.position);
							return;
						}
						const A = { ...o.position },
							R = b?.getBoundingClientRect() ?? { ...g },
							O = b?.parentElement?.getBoundingClientRect() ?? { ...g };
						switch ((L && ((A.x += O.left), (A.y += O.top)), k)) {
							case "top":
								A.x -= R.width / 2;
								break;
							case "bottom":
								(A.x -= R.width / 2), (A.y -= R.height);
								break;
							case "left":
								A.y -= R.height / 2;
								break;
							case "right":
								(A.x -= R.width), (A.y -= R.height / 2);
								break;
							case "top-right":
								A.x -= R.width;
								break;
							case "bottom-left":
								A.y -= R.height;
								break;
							case "bottom-right":
								(A.x -= R.width), (A.y -= R.height);
								break;
						}
						const B = N?.getBoundingClientRect() ?? {
							top: 0,
							left: 0,
							right: I.innerWidth,
							bottom: I.innerHeight,
							width: I.innerWidth,
							height: I.innerHeight,
						};
						let U = {
							...A,
							x: Math.max(Math.min(A.x, B.right - R.width - T), T),
							y: Math.max(Math.min(A.y, B.bottom - R.height - T), T),
						};
						if (o.nonBlockingRoot) {
							const z =
								typeof o.nonBlockingRoot == "string"
									? I.document
											.querySelector(o.nonBlockingRoot)
											?.getBoundingClientRect()
									: o.nonBlockingRoot.getBoundingClientRect();
							z &&
								(D === "horizontal"
									? U.x < z.right + P
										? (U = { ...U, x: z.left - P - R.width })
										: U.x + R.width > z.left - P &&
											(U = { ...U, x: z.right + P })
									: D === "vertical" &&
										(U.y < z.bottom + P
											? (U = { ...U, y: z.top - P - R.height })
											: U.y + R.height > z.top - P &&
												(U = { ...U, y: z.bottom + P })));
						}
						L && (U = { ...U, x: U.x - O.left, y: U.y - O.top }), l(U);
					};
					(0, u.$z0b)(() => b, $),
						(0, a.createEffect)(() => {
							(0, a.on)([() => o.position], $);
						}),
						(0, a.createEffect)(() => {
							const I = o.close,
								T = (P) => {
									P.key === "Escape" && (P.preventDefault(), I());
								};
							f.window.document.addEventListener("keydown", T),
								(0, a.onCleanup)(() => {
									f.window.document.removeEventListener("keydown", T);
								});
						}),
						(0, u.$B0b)(
							() => b,
							(I) => {
								!I ||
									f.window.document
										.querySelector(o.nonBlockingRoot)
										?.contains(I.target) ||
									o.close(!0);
							},
							300,
						);
					const v = {
							"box-sizing": "border-box",
							padding: "2px",
							"border-radius": "4px",
							"background-color": "var(--vscode-settings-dropdownBackground)",
							border: "1px solid var(--vscode-settings-dropdownBorder)",
							"align-items": "stretch",
							"font-size": "10px",
							display: "flex",
							"flex-direction": "column",
							gap: "2px",
						},
						S = (() => {
							const I = n();
							return (
								(0, d.use)((T) => {
									o.setRef?.(T), (b = T);
								}, I),
								(0, m.spread)(
									I,
									(0, r.mergeProps)(o, {
										get class() {
											return (
												(o.animationType === "scale"
													? "scale-in-fast"
													: o.animationType === "fade"
														? "fade-in-fast"
														: "") + (o.class ? ` ${o.class}` : "")
											);
										},
										get style() {
											return {
												...v,
												position: o.isRelative ? "absolute" : "fixed",
												visibility: s() ? "visible" : "hidden",
												...(s() && { top: `${s().y}px`, left: `${s().x}px` }),
												width:
													typeof o.width == "number" ? `${o.width}px` : o.width,
												height:
													typeof o.height == "number"
														? `${o.height}px`
														: o.height,
												"z-index": 100 + (o.zIndexModifier ?? 0),
												"transform-origin": (o.anchor ?? "top-left").replace(
													"-",
													" ",
												),
												"box-shadow": "2px 4px 10px 0px rgba(89, 89, 89, 0.10)",
												...(typeof o.style == "string" ? {} : (o.style ?? {})),
											};
										},
									}),
									!1,
									!0,
								),
								(0, C.insert)(I, () => o.children),
								I
							);
						})();
					return [
						(0, i.createComponent)(a.Show, {
							get when() {
								return o.shouldUseBackdrop ?? !1;
							},
							get children() {
								const I = n();
								return (
									I.addEventListener("click", () => o.close()),
									(0, E.effect)((T) =>
										(0, w.style)(
											I,
											{
												"z-index": 100 + (o.zIndexModifier ?? 0) - 1,
												position: "fixed",
												top: 0,
												left: 0,
												bottom: 0,
												right: 0,
												...(o.shouldShadeOverlay
													? { "background-color": "rgba(0, 0, 0, 0.3)" }
													: {}),
											},
											T,
										),
									),
									I
								);
							},
						}),
						(0, i.createComponent)(a.Show, {
							get when() {
								return o.shouldMountInPortal;
							},
							fallback: S,
							get children() {
								return (0, i.createComponent)(c.Portal, {
									get mount() {
										return f.portalElement;
									},
									children: S,
								});
							},
						}),
					];
				}
			},
		),
		define(
			de[1976],
			he([1, 0, 2, 2, 2, 13, 484, 36]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ndc = void 0);
				const m = (0, t.template)('<div tabindex="-1">'),
					r = (0, t.template)("<li>"),
					u = (a) => {
						const h = (0, d.$odc)(),
							c = (0, E.createMemo)(() =>
								h.aiSettingsService.getAvailableModelsReactive({
									isLongContextOrDebuggerMode: !1,
									isChat: !1,
								}),
							);
						return (
							(0, E.createEffect)(() => {
								const n = a.uniqueMenuId,
									g = a.closeMenu,
									p = (o) => {
										o.target.closest(`#${n}`) || g();
									};
								h.window.document.addEventListener("click", p),
									(0, E.onCleanup)(() => {
										h.window.document.removeEventListener("click", p);
									});
							}),
							(() => {
								const n = m();
								return (
									n.style.setProperty("outline", "none"),
									n.style.setProperty("position", "relative"),
									n.style.setProperty("display", "inline-block"),
									(0, i.insert)(n, () => a.children, null),
									(0, i.insert)(
										n,
										(0, w.createComponent)(E.Show, {
											get when() {
												return a.position();
											},
											children: (g) =>
												(0, w.createComponent)(C.Menu, {
													shouldMountInPortal: !0,
													isRelative: !1,
													nonBlockingDirection: "vertical",
													get nonBlockingRoot() {
														return `#${a.uniqueMenuId}`;
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
														padding: 0,
														"min-width": "45px",
														"box-shadow": "0px 0px 0px 0px rgba(0, 0, 0, 0.1)",
														"z-index": "10000000000000000",
														"align-items": "flex-start",
													},
													get position() {
														return g();
													},
													close: () => {
														a.closeMenu();
													},
													get children() {
														return (0, w.createComponent)(E.For, {
															get each() {
																return c();
															},
															children: (p) =>
																(() => {
																	const o = r();
																	return (
																		o.addEventListener("click", () => {
																			a.onSelect(p), a.closeMenu();
																		}),
																		(0, i.insert)(o, p),
																		o
																	);
																})(),
														});
													},
												}),
										}),
										null,
									),
									n
								);
							})()
						);
					};
				e.$Ndc = u;
			},
		),
		define(
			de[4184],
			he([1, 0, 2, 2, 2, 2, 2, 14, 26, 1976, 364]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Pdc = void 0);
				const a = (0, t.template)('<span class="generation-pill"><span>'),
					h = (c) => {
						const n =
								"generation-pill-" +
								Math.random().toString(36).substring(2, 15),
							[g, p, o] = (0, u.$A0b)();
						return (0, i.createComponent)(r.$Ndc, {
							closeMenu: o,
							position: g,
							uniqueMenuId: n,
							get onSelect() {
								return c.onSelect;
							},
							get children() {
								const f = a(),
									b = f.firstChild;
								return (
									f.style.setProperty("border", "none"),
									f.style.setProperty("cursor", "pointer"),
									f.style.setProperty("display", "flex"),
									f.style.setProperty("align-items", "center"),
									f.style.setProperty("justify-content", "center"),
									f.style.setProperty("padding", "2px"),
									b.addEventListener("click", (s) => {
										const l = s.currentTarget.getBoundingClientRect();
										p({ x: l.left - 4, y: l.bottom + 8 });
									}),
									b.style.setProperty("font-size", "10px"),
									(0, C.setAttribute)(b, "id", n),
									(0, E.effect)(() =>
										(0, w.className)(
											b,
											`${m.ThemeIcon.asClassName(d.$ak.plus)}`,
										),
									),
									f
								);
							},
						});
					};
				e.$Pdc = h;
			},
		),
		define(
			de[4185],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 26, 1976, 364]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Odc = g);
				const c = (0, t.template)("<div>"),
					n = (0, t.template)('<span class="generation-pill"><span>');
				function g(p) {
					const o =
							"generation-pill-" + Math.random().toString(36).substring(2, 15),
						[f, b, s] = (0, h.$A0b)(),
						[l, y] = (0, m.createSignal)(!1);
					return (0, w.createComponent)(a.$Ndc, {
						closeMenu: s,
						position: f,
						uniqueMenuId: o,
						onSelect: ($) => {
							p.onChangeModel($);
						},
						get children() {
							const $ = n(),
								v = $.firstChild;
							return (
								$.addEventListener("mouseleave", () => y(!1)),
								$.addEventListener("mouseenter", () => y(!0)),
								$.addEventListener("click", (S) => {
									if (p.canChangeModel) {
										const I = S.target.getBoundingClientRect();
										b({ x: I.left, y: I.bottom + 2 });
									} else p.onClick(S);
								}),
								(0, d.setAttribute)($, "id", o),
								$.style.setProperty("position", "relative"),
								(0, i.insert)($, () => p.modelName, v),
								v.style.setProperty("width", "4px"),
								v.style.setProperty("height", "4px"),
								v.style.setProperty("border-radius", "50%"),
								v.style.setProperty("content", ""),
								(0, i.insert)(
									$,
									(0, w.createComponent)(m.Show, {
										get when() {
											return l() && p.canDelete;
										},
										get children() {
											const S = c();
											return (
												S.addEventListener("click", (I) => {
													I.stopImmediatePropagation(), p.onDelete();
												}),
												S.style.setProperty("position", "absolute"),
												S.style.setProperty("top", "0"),
												S.style.setProperty("right", "0"),
												S.style.setProperty("padding", "1px"),
												S.style.setProperty("border-radius", "50%"),
												S.style.setProperty(
													"background-color",
													"var(--vscode-editor-background)",
												),
												S.style.setProperty(
													"color",
													"var(--vscode-input-placeholderForeground)",
												),
												S.style.setProperty("font-size", "0.8em"),
												S.style.setProperty("display", "flex"),
												S.style.setProperty("align-items", "center"),
												S.style.setProperty("justify-content", "center"),
												S.style.setProperty(
													"transform",
													"translate(50%, -50%)",
												),
												S.style.setProperty("cursor", "pointer"),
												(0, C.effect)(() =>
													(0, E.className)(
														S,
														`${u.ThemeIcon.asClassName(r.$ak.x)} generation-pill-delete`,
													),
												),
												S
											);
										},
									}),
									null,
								),
								(0, C.effect)(
									(S) => {
										const I = p.isActive
												? "var(--vscode-editor-foreground)"
												: "var(--vscode-input-placeholderForeground)",
											T =
												p.status === void 0
													? "var(--vscode-testing-iconUnset)"
													: p.status === "generating"
														? "var(--vscode-testing-iconQueued)"
														: p.status === "failed"
															? "var(--vscode-testing-iconFailed)"
															: "var(--vscode-testing-iconPassed)";
										return (
											I !== S._v$ &&
												((S._v$ = I) != null
													? $.style.setProperty("color", I)
													: $.style.removeProperty("color")),
											T !== S._v$2 &&
												((S._v$2 = T) != null
													? v.style.setProperty("background", T)
													: v.style.removeProperty("background")),
											S
										);
									},
									{ _v$: void 0, _v$2: void 0 },
								),
								$
							);
						},
					});
				}
			},
		),
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
		define(
			de[4186],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 36, 331, 523]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$WCc = n);
				const h = (0, t.template)("<p>"),
					c = (0, t.template)("<div><div><div><p>");
				function n(g) {
					const p = (0, r.$odc)();
					return (() => {
						const o = c(),
							f = o.firstChild,
							b = f.firstChild,
							s = b.firstChild;
						return (
							o.style.setProperty("display", "flex"),
							o.style.setProperty("flex-direction", "column"),
							o.style.setProperty("gap", "8px"),
							o.style.setProperty("cursor", "auto"),
							f.style.setProperty("display", "flex"),
							f.style.setProperty("align-items", "center"),
							f.style.setProperty("justify-content", "space-between"),
							f.style.setProperty("gap", "12px"),
							b.style.setProperty("display", "flex"),
							b.style.setProperty("font-size", "12px"),
							b.style.setProperty("flex-direction", "column"),
							b.style.setProperty("gap", "3px"),
							s.style.setProperty("margin", "0"),
							s.style.setProperty("color", "var(--vscode-foreground)"),
							s.style.setProperty("display", "flex"),
							s.style.setProperty("align-items", "center"),
							s.style.setProperty("gap", "4px"),
							(0, d.insert)(s, () => g.label, null),
							(0, d.insert)(s, () => g.labelExtra, null),
							(0, d.insert)(
								b,
								(0, C.createComponent)(m.Show, {
									get when() {
										return g.description;
									},
									get children() {
										const l = h();
										return (
											l.style.setProperty("margin", "0"),
											l.style.setProperty("line-height", "130%"),
											l.style.setProperty("color", "var(--vscode-foreground)"),
											l.style.setProperty("opacity", "0.6"),
											l.style.setProperty("font-size", "0.95em"),
											(0, d.insert)(l, () => g.description),
											l
										);
									},
								}),
								null,
							),
							(0, d.insert)(
								o,
								(0, C.createComponent)(
									a.$Kbc,
									(0, E.mergeProps)(
										{
											get origLabel() {
												return g.label;
											},
											get value() {
												return g.value;
											},
											get items() {
												return g.items;
											},
											get onSelect() {
												return g.onChange;
											},
										},
										() => g.dropdownProps,
									),
								),
								null,
							),
							(0, d.insert)(
								o,
								(0, C.createComponent)(m.Show, {
									get when() {
										return g.children;
									},
									get children() {
										return g.children;
									},
								}),
								null,
							),
							(0, w.effect)(() =>
								(0, i.className)(
									o,
									"settings-sub-section" +
										((0, u.$d$b)(p.themeService) ? " dark" : " light"),
								),
							),
							o
						);
					})();
				}
			},
		),
		define(
			de[1977],
			he([1, 0, 2, 2, 2, 13, 75, 58, 270, 973, 4186, 1064, 36, 564, 1371]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_Cc =
						e.$$Cc =
						e.$0Cc =
						e.$9Cc =
						e.$8Cc =
						e.$7Cc =
						e.$6Cc =
						e.$5Cc =
						e.$4Cc =
						e.$3Cc =
						e.$2Cc =
						e.$1Cc =
						e.$ZCc =
							void 0),
					(e.$aDc = f);
				const g = (0, t.template)(
						"<div>Note: We've temporarily turned off cpp.",
					),
					p = (0, t.template)(
						"<div>Note: We've temporarily turned off auto imports.",
					);
				let o = !1;
				(e.$ZCc = [
					"inline-with-removal-before",
					"inline-with-removal-right",
					"inline-with-removal-below",
					"inline-hide-removal",
					"everything-right",
					"legacy-ghost-text",
				]),
					(e.$1Cc = e.$ZCc[0]),
					(e.$2Cc = [
						"Alt",
						"Control",
						"AltRight",
						"MetaRight",
						"ShiftRight",
						"ControlRight",
						"ControlLeft",
						"MetaLeft",
						"AltLeft",
						"ShiftLeft",
					]),
					(e.$3Cc = "Alt"),
					(e.$4Cc = "green"),
					(e.$5Cc = "streaming"),
					(e.$6Cc = !0),
					(e.$7Cc = !1),
					(e.$8Cc = !1),
					(e.$9Cc = !1),
					(e.$0Cc = 5),
					(e.$$Cc = 1),
					(e.$_Cc = 50);
				function f() {
					const b = (0, h.$odc)(),
						s = () =>
							b.reactiveStorageService.applicationUserPersistentStorage
								.cppModelsState,
						l = (0, E.createMemo)(() => s().cppModels),
						y = [
							...(b.reactiveStorageService.applicationUserPersistentStorage
								.cppConfig?.isOn === !1
								? []
								: [{ id: "enabled", label: "enabled" }]),
							{ id: "disabled", label: "disabled" },
						],
						$ = (L) => {
							b.telemetryService.publicLogCapture(
								L ? "cpp.clicked.enabled" : "cpp.clicked.disabled",
							),
								b.reactiveStorageService.setApplicationUserPersistentStorage(
									"cppEnabled",
									L,
								);
						};
					(0, E.createEffect)(() => {
						const L = C.$Bfb.setInterval(() => {
							b.cppService.keepCppModelStateUpdated();
						}, 3e4);
						b.cppService.keepCppModelStateUpdated(),
							(0, E.onCleanup)(() => C.$Bfb.clearInterval(L));
					});
					const v = (0, E.createMemo)(() =>
							l().map((L) => ({ id: L, label: L })),
						),
						[S, I] = (0, m.$K0b)(d.$zW, b.configurationService, !1),
						T = (0, E.createMemo)(
							() => !(l().filter((L) => L !== "auto").length <= 1),
						),
						P = b.reactiveStorageService.applicationUserPersistentStorage
							.cppConfig?.importPredictionConfig?.pythonEnabled
							? "TypeScript and Python"
							: "TypeScript",
						k = (0, E.createMemo)(
							() =>
								b.reactiveStorageService.applicationUserPersistentStorage
									.cppAutoImportEnabled &&
								!b.reactiveStorageService.applicationUserPersistentStorage
									.cppConfig?.importPredictionConfig?.pythonEnabled,
						);
					return (0, w.createComponent)(r.$VCc, {
						title: "Cursor Tab",
						get children() {
							return [
								(0, w.createComponent)(a.$YCc, {
									description:
										"A powerful Copilot replacement that can suggest changes across multiple lines. Previously called Copilot++.",
									get value() {
										return b.reactiveStorageService
											.applicationUserPersistentStorage.cppEnabled;
									},
									onChange: (L) => {
										$(L);
									},
								}),
								(0, w.createComponent)(E.Show, {
									get when() {
										return (
											b.reactiveStorageService.applicationUserPersistentStorage
												.cppConfig?.isOn === !1
										);
									},
									get children() {
										const L = g();
										return (
											L.style.setProperty("padding-top", "12px"),
											L.style.setProperty("padding-left", "16px"),
											L
										);
									},
								}),
								(0, w.createComponent)(E.Show, {
									get when() {
										return b.reactiveStorageService
											.applicationUserPersistentStorage.cppEnabled;
									},
									get children() {
										return [
											(0, w.createComponent)(E.Show, {
												get when() {
													return T();
												},
												get children() {
													return (0, w.createComponent)(u.$WCc, {
														label: "Model",
														description:
															"Choose the model you want to use for Cursor Tab.",
														get items() {
															return [{ id: d.$RX, label: d.$RX }, ...v()];
														},
														get value() {
															return (
																l().find(
																	(L) =>
																		L ===
																		b.reactiveStorageService
																			.applicationUserPersistentStorage
																			.cppModel,
																) ?? d.$RX
															);
														},
														onChange: (L) =>
															b.reactiveStorageService.setApplicationUserPersistentStorage(
																{ cppModel: L === d.$RX ? void 0 : L },
															),
													});
												},
											}),
											(0, w.createComponent)(a.$YCc, {
												label: "Partial accepts",
												get description() {
													return `Accept the next word of a suggestion via ${b.keybindingService.lookupKeybinding("editor.action.inlineSuggest.acceptNextWord")?.getLabel() ?? "Alt+]"}`;
												},
												get value() {
													return S();
												},
												onChange: I,
												get labelExtra() {
													return (0, w.createComponent)(n.$m$b, {
														text: "Keybinding: editor.action.inlineSuggest.acceptNextWord",
														style: {
															"font-size": "10px",
															"margin-left": "4px",
															color: "var(--vscode-descriptionForeground)",
														},
														parentStyle: {
															display: "flex",
															"align-items": "center",
															"justify-content": "center",
														},
													});
												},
											}),
											(0, w.createComponent)(a.$YCc, {
												label: "Cursor Prediction",
												description:
													"Predicts the next line you will move to after accepting a Cursor Tab suggestion and can be accepted by tab. Allows you to tab-tab-tab through edits",
												get value() {
													return (
														b.reactiveStorageService
															.applicationUserPersistentStorage
															.cursorPredictionEnabled !== !1 &&
														b.reactiveStorageService
															.applicationUserPersistentStorage
															.cursorPredictionState?.backendEnabled !== !1
													);
												},
												onChange: (L) =>
													b.reactiveStorageService.setApplicationUserPersistentStorage(
														"cursorPredictionEnabled",
														L,
													),
											}),
											(0, w.createComponent)(a.$YCc, {
												label: "Suggestions in Comments",
												description:
													"Enable or disable Cursor Tab suggestions in comments",
												get value() {
													return b.reactiveStorageService
														.applicationUserPersistentStorage
														.cppTriggerInComments;
												},
												onChange: (L) =>
													b.reactiveStorageService.setApplicationUserPersistentStorage(
														"cppTriggerInComments",
														L,
													),
											}),
											(0, w.createComponent)(a.$YCc, {
												label: "Show whitespace only changes",
												description:
													"Show whitespace only Cursor Tab suggestions",
												get value() {
													return b.reactiveStorageService
														.applicationUserPersistentStorage
														.cppShowWhitespaceOnlyChanges;
												},
												onChange: (L) =>
													b.reactiveStorageService.setApplicationUserPersistentStorage(
														"cppShowWhitespaceOnlyChanges",
														L,
													),
											}),
											(0, w.createComponent)(E.Show, {
												get when() {
													return !(
														b.reactiveStorageService
															.applicationUserPersistentStorage
															.backendHasDisabledCppAutoImport &&
														b.reactiveStorageService
															.applicationUserPersistentStorage
															.cppAutoImportEnabled === void 0
													);
												},
												get children() {
													return (0, w.createComponent)(a.$YCc, {
														label: "Auto Import",
														description: `Tab to import necessary modules with Cursor Tab. Only supports ${P}`,
														get value() {
															return (
																b.reactiveStorageService
																	.applicationUserPersistentStorage
																	.cppAutoImportEnabled ?? !1
															);
														},
														onChange: (L) => {
															L || b.importPredictionService.hideShownImport(),
																b.reactiveStorageService.setApplicationUserPersistentStorage(
																	"cppAutoImportEnabled",
																	L,
																);
														},
														get children() {
															return (
																(0, i.memo)(
																	() =>
																		!!(
																			k() ||
																			b.reactiveStorageService
																				.applicationUserPersistentStorage
																				.backendHasDisabledCppAutoImport
																		),
																)() && [
																	(0, w.createComponent)(E.Show, {
																		get when() {
																			return k();
																		},
																		get children() {
																			return (0, w.createComponent)(a.$YCc, {
																				get label() {
																					return [
																						"Auto Import for Python",
																						" ",
																						(0, w.createComponent)(c.$nac, {
																							type: "subtle",
																							text: "BETA",
																							size: "small",
																						}),
																					];
																				},
																				description:
																					"Enable auto import for Python. This is a beta feature.",
																				get value() {
																					return (
																						b.reactiveStorageService
																							.applicationUserPersistentStorage
																							.userHasEnabledImportPredictionForPython ??
																						!1
																					);
																				},
																				onChange: (L) =>
																					b.reactiveStorageService.setApplicationUserPersistentStorage(
																						"userHasEnabledImportPredictionForPython",
																						L,
																					),
																			});
																		},
																	}),
																	(0, w.createComponent)(E.Show, {
																		get when() {
																			return b.reactiveStorageService
																				.applicationUserPersistentStorage
																				.backendHasDisabledCppAutoImport;
																		},
																		get children() {
																			const L = p();
																			return (
																				L.style.setProperty(
																					"padding-top",
																					"12px",
																				),
																				L.style.setProperty(
																					"padding-left",
																					"16px",
																				),
																				L
																			);
																		},
																	}),
																]
															);
														},
													});
												},
											}),
										];
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
		de[1978],
		he([
			1, 0, 3, 7, 20, 137, 9, 65, 64, 42, 1108, 45, 83, 56, 31, 17, 25, 47, 148,
			367, 646, 1977, 501, 232, 32, 90, 48, 285, 341, 5, 619, 1010, 23, 248,
			1895, 2215, 2214, 1131, 551, 1345, 2958, 1228, 1155, 1704, 293, 70, 332,
			971, 1608, 69, 1300, 280, 166, 11, 18, 268, 14, 10, 58, 287, 134, 104,
			840, 89, 555, 152, 2961, 2960, 770, 1789, 7, 59, 740, 2962, 2963, 2964,
			975, 2959, 76, 477, 171, 62, 19, 668, 530, 78, 618, 1153, 1229,
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
			J,
			W,
			X,
			Y,
			ie,
			ne,
			ee,
			_,
			te,
			Q,
			Z,
			se,
			re,
			le,
			oe,
			ae,
			pe,
			$e,
			ye,
			ue,
			fe,
			me,
			ve,
			ge,
			be,
			Ce,
			Le,
			Fe,
			Oe,
			xe,
			He,
			Ke,
			Je,
			Te,
			Ee,
			Ie,
			Be,
			Se,
			ke,
			Ue,
			qe,
			Ae,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$9ed = e.$8ed = e.$7ed = void 0),
				(i = mt(i)),
				(R = xi(R)),
				(ge = mt(ge));
			const Me = 25,
				De = 60,
				Re = 1e6,
				je = !1,
				Ve = je ? console.log : () => {},
				Ze = je ? console.error : () => {};
			function et(di) {
				return di.uri.scheme === "untitled"
					? di.uri.scheme
					: di.getLanguageId();
			}
			class rt extends ee.$3X {
				static {
					this.ID = "editor.cpp.login";
				}
				static {
					this.LABEL = "Log In to Cursor";
				}
				constructor() {
					super({
						id: rt.ID,
						title: { value: rt.LABEL, original: rt.LABEL },
						f1: !0,
					});
				}
				async run(Ye) {
					Ye.get($.$x6b).login();
				}
			}
			(0, ee.$4X)(rt), (e.$7ed = "git30_000_bounded_auto");
			const ft = "cpp-suggestion-text-decoration-showing",
				bt = "cpp-suggestion-text-decoration-showing-streaming",
				nt = "cpp-suggestion-text-decoration-showing-gutter",
				lt = 10,
				ct = 10,
				gt = 1e3 * 60 * 15,
				ht = 1e5,
				Rt = 1e4,
				Nt = 10;
			e.$8ed = 20;
			const jt = 3,
				ti = 300,
				kt = !1,
				hi = "m4CoTMbqtR9vV1zd";
			let Kt = class extends t.$1c {
				cppServerClient() {
					return this.g.get();
				}
				get dontTriggerCppBecauseChangeIsFromCpp() {
					return q.$Acc.current;
				}
				set dontTriggerCppBecauseChangeIsFromCpp(Ye) {
					q.$Acc.current = Ye;
				}
				F(Ye) {
					return `${Ye.id}-${Ye.getVersionId()}-${Ye.uri.fsPath}`;
				}
				H(Ye) {
					return `${Ye.id}-${Ye.uri.fsPath}`;
				}
				aiClient() {
					return this.P.get();
				}
				registerDiffingProvider(Ye) {
					this.S = Ye;
				}
				constructor(
					Ye,
					ze,
					Xe,
					It,
					Lt,
					xt,
					Vt,
					Bt,
					Gt,
					Mt,
					Ut,
					ei,
					mi,
					ii,
					Dt,
					Jt,
					si,
					Zt,
					ci,
					ri,
					$i,
					Wt,
					tt,
					at,
					pi,
					Li,
					Di,
					Ui,
					Wi,
					Gi,
				) {
					super(),
						(this.hb = Ye),
						(this.ib = ze),
						(this.jb = Xe),
						(this.kb = It),
						(this.lb = Lt),
						(this.mb = xt),
						(this.nb = Vt),
						(this.ob = Bt),
						(this.pb = Gt),
						(this.qb = Mt),
						(this.rb = Ut),
						(this.sb = ei),
						(this.tb = mi),
						(this.ub = ii),
						(this.vb = Dt),
						(this.wb = Jt),
						(this.xb = si),
						(this.yb = Zt),
						(this.zb = ci),
						(this.Ab = ri),
						(this.Bb = $i),
						(this.Cb = Wt),
						(this.Db = tt),
						(this.Eb = at),
						(this.Fb = pi),
						(this.Gb = Li),
						(this.Hb = Di),
						(this.Ib = Ui),
						(this.Jb = Wi),
						(this.Kb = Gi),
						(this.h = 0),
						(this.pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING =
							!1),
						(this.j = new be.$Jc(20)),
						(this.m = new Map()),
						(this.n = new Map()),
						(this.q = void 0),
						(this.u = void 0),
						(this.w = void 0),
						(this.y = void 0),
						(this.z = void 0),
						(this.C = new be.$Jc(10)),
						(this.G = new be.$Jc(3)),
						(this.I = []),
						(this.J = []),
						(this.L = new fe.$Oed(2)),
						(this.M = new Le.$Ued(5)),
						(this.N = new Le.$Ved(5, 6)),
						(this.O = new be.$Jc(3)),
						(this.Q = new be.$Jc(10)),
						(this.editorThatWeHidGhostTextOn = void 0),
						(this.R = []),
						(this.holdDownAbortController = void 0),
						(this.S = void 0),
						(this.numberOfClearedSuggestionsSinceLastAccept = 0),
						(this.lastEditTime = void 0),
						(this.U = void 0),
						(this.W = this.D(new t.$2c())),
						(this.Y = { fire: !1, acceptedRange: void 0 }),
						(this.$ = {}),
						(this.ab = !1),
						(this.bb = !1),
						(this.cb = []),
						(this.db = void 0),
						(this.eb = void 0),
						(this.fb = void 0),
						(this.gb = !1),
						(this.Lb = new t.$Zc()),
						(this.Mb = document.createElement("div")),
						(this.handleKeyDownForCppKeys = (yi) => {
							if (this.Nb().cppEnabled === !0) {
								if (yi.key === "Tab" && yi.shiftKey) {
									if (this.Nb().cppManualTriggerWithOpToken) {
										const li = this.hb.getActiveCodeEditor();
										if (li === null) return;
										const wi = li.getModel()?.uri;
										if (!wi) return;
										this.fireCppSuggestionFromTrigger(
											wi,
											li,
											le.CppSource.ManualTrigger,
										);
									} else
										this.Cb.maybeUndoCursorPrediction({
											event: yi,
											triggerCppCallback:
												this.fireCppSuggestionFromTrigger.bind(this),
											getLinterErrors:
												this.getRecentAndNearLocationLinterErrors.bind(this),
										});
									return;
								}
								if (
									yi.key === "Tab" &&
									yi.shiftKey === !1 &&
									yi.ctrlKey === !1 &&
									yi.altKey === !1 &&
									yi.metaKey === !1 &&
									this.selectionIsNotMultipleLines()
								) {
									if (this.Nb().cppAutoImportEnabled) {
										const Ai = this.getFocusedCodeEditor();
										if (Ai !== null && this.Jb.maybeAcceptShownImport(Ai)) {
											yi.preventDefault(),
												yi.stopImmediatePropagation(),
												yi.stopPropagation();
											return;
										}
									}
									if (!this.shouldTabInsteadOfAccepting()) {
										const Ai = this.Ob().cppState?.suggestion;
										if (
											Ai !== void 0 &&
											!this.Cb.tabToLineBeforeAcceptingCpp(Ai.source)
										)
											(this.dontTriggerCppBecauseChangeIsFromCpp = !0),
												yi.preventDefault(),
												yi.stopImmediatePropagation(),
												yi.stopPropagation(),
												this.acceptFullSuggestion(
													this.holdDownAbortController,
												).then(() => {
													const li = this.getFocusedCodeEditor();
													li !== null &&
														this.cleanupAfterAcceptSuggestion(li, Ai);
												}),
												this.Zb();
										else if (
											(this.Ob().cppState?.additionalSuggestions?.length ?? 0) >
											0
										) {
											const li = this.hb.getActiveCodeEditor(),
												Vi = li?.getModel() ?? void 0,
												wi = li?.getPosition(),
												_t = this.Ob().cppState?.additionalSuggestions.filter(
													(ai) => {
														if (Vi === void 0 || wi === void 0 || wi === null)
															return !1;
														const Ft = Vi.getDecorationRange(ai.decorationId);
														return (
															Ft !== null &&
															Ft.intersectRanges({
																startLineNumber: Math.max(0, wi.lineNumber - 5),
																startColumn: wi.column,
																endLineNumber: Math.min(
																	Vi.getLineCount(),
																	wi.lineNumber + 5,
																),
																endColumn: wi.column,
															})
														);
													},
												);
											if (_t !== void 0 && _t.length > 0) {
												(this.dontTriggerCppBecauseChangeIsFromCpp = !0),
													yi.preventDefault(),
													yi.stopImmediatePropagation(),
													yi.stopPropagation();
												const ai = _t[0];
												this.acceptFullSuggestion(
													this.holdDownAbortController,
													ai,
												)
													.then(() => {
														const Ft = this.getFocusedCodeEditor();
														Ft !== null &&
															(this.cleanupAfterAcceptSuggestion(Ft, ai),
															this.Nb().cppAutoImportEnabled &&
																this.Jb.showCorrectUI(Ft));
													})
													.catch((Ft) => {
														console.error(Ft);
													}),
													this.Zb();
											} else
												this.Cb.maybeAcceptCursorPrediction({
													event: yi,
													triggerCppCallback:
														this.fireCppSuggestionFromTrigger.bind(this),
												});
										} else
											this.Cb.maybeAcceptCursorPrediction({
												event: yi,
												triggerCppCallback:
													this.fireCppSuggestionFromTrigger.bind(this),
											});
									}
									return;
								}
								if (
									yi.key === "Escape" &&
									yi.ctrlKey === !1 &&
									yi.altKey === !1 &&
									yi.metaKey === !1 &&
									this.Ob().cppState?.suggestion !== void 0
								) {
									const Ai = this.getFocusedCodeEditor();
									Ai !== null && this.markEditAsRejected(Ai, !1),
										this.clearDecorationsSlowEnumeratesAllDecorations(),
										this.rejectAndResetAllCppSuggestions(),
										this.Cb.maybeShowHintLineWidget(),
										this.Cb.updateHintLineWidgetMarginLeft(void 0),
										Ai !== null && this.Jb.showCorrectUI(Ai);
								} else if (
									yi.key === "Escape" &&
									yi.ctrlKey === !1 &&
									yi.altKey === !1 &&
									yi.metaKey === !1
								)
									if (this.Nb().cppAutoImportEnabled) {
										const Ai = this.getFocusedCodeEditor();
										Ai !== null && this.Jb.maybeRejectShownImport(Ai)
											? (yi.preventDefault(),
												yi.stopImmediatePropagation(),
												yi.stopPropagation())
											: this.Ob().cursorPrediction !== void 0 &&
												this.Cb.clearCursorPrediction();
									} else
										this.Ob().cursorPrediction !== void 0 &&
											this.Cb.clearCursorPrediction();
							}
						}),
						(this.editorIdToParameterHintsModel = new Map()),
						(this.initializedGraphs = []),
						(this.triggerCppOnLintErrorAbortControllers = new Map()),
						(this.Vb = 6),
						(this.latestGenerationUUID = void 0),
						(this.Wb = void 0),
						(this.Xb = (yi, Ai, li, Vi) => {
							const wi = yi.split(li);
							if (wi.length < ti * 2) return yi;
							let _t = Math.max(0, Ai - ti),
								ai = Math.min(wi.length, Ai + ti);
							const Ft = ti - Ai,
								Xt = Ai - (wi.length - ti);
							Ft > 0
								? (ai = Math.min(wi.length, ai + Ft))
								: Xt > 0 && (_t = Math.max(0, _t - Xt));
							const $t = this.O.get(Vi.uri),
								ut = 20;
							if ($t && $t.length > 0) {
								let Et = !1;
								for (const { decorationId: Tt, originalWidth: qt } of $t) {
									const At = Vi.getDecorationRange(Tt);
									if (!At) continue;
									const Yt =
											Math.abs(At.startLineNumber - _t) < ut &&
											(_t !== 0 || At.startLineNumber === 1),
										ni =
											Math.abs(At.endLineNumber - ai) < ut &&
											(ai !== wi.length || At.endLineNumber === wi.length);
									if (At && Yt && ni && Math.abs(ai - _t - qt) < ut) {
										(_t = At.startLineNumber),
											(ai = At.endLineNumber),
											(Et = !0);
										break;
									}
								}
								if (!Et) {
									const Tt = Vi.deltaDecorations(
										[],
										[
											{
												range: new g.$iL(_t, 1, ai, 1),
												options: { description: "cpp-truncation-cache" },
											},
										],
									)[0];
									$t.push({ decorationId: Tt, originalWidth: ai - _t });
									for (const qt of $t.slice(0, -jt))
										Vi.deltaDecorations([qt.decorationId], []);
									this.O.set(Vi.uri, $t.slice(-jt));
								}
							} else {
								const Et = Vi.deltaDecorations(
									[],
									[
										{
											range: new g.$iL(_t, 1, ai, 1),
											options: { description: "cpp-truncation-cache" },
										},
									],
								)[0];
								this.O.set(Vi.uri, [
									{ decorationId: Et, originalWidth: ai - _t },
								]);
							}
							for (let Et = 0; Et < _t; Et++) wi[Et] = "";
							for (let Et = ai; Et < wi.length; Et++) wi[Et] = "";
							return wi.join(li);
						}),
						(this.decIdsThatAreNotInReactiveStorage = { green: [] }),
						(this.didShowGreenHighlights = !1),
						(this.removedCppNoopGenerationUUIDS = []),
						(this.generationStartTimes = {}),
						(this.c = this.D(this.ib.createScoped(this))),
						(this.W.value = this.vb.addEntry(
							this.statusBarElementProps(),
							"Cursor Tab",
							ne.StatusbarAlignment.RIGHT,
							100,
						)),
						this.updateStatusBarElement(),
						(this.P = this.tb.createInstance(T.$q6b, { service: P.$q0 })),
						(this.g = this.tb.createInstance(T.$q6b, { service: u.$K0 })),
						this.Ob().cppState === void 0 &&
							this.ib.setNonPersistentStorage("cppState", {}),
						this.loadCopilotPlusPlusConfigFromGithubCopilot(),
						this.D(
							i.onDidRegisterWindow(() => {
								this.mainRegisterCppListenersToEditorIfCppEnabled();
							}),
						),
						this.updateShouldNotTryToGetThemToNoticeCpp(),
						this.c.onChangeEffect({
							deps: [() => this.Nb().cppEnabled],
							onChange: async () => {
								this.sendCppEnabledUpdateRequest(),
									this.updateShouldNotTryToGetThemToNoticeCpp(),
									this.abortAllCppRequests();
								const yi = performance.now();
								this.mainRegisterCppListenersToEditorIfCppEnabled(),
									this.rejectAndResetAllCppSuggestions(),
									this.loadCppConfigIncludingHandlingProAccess(),
									this.updateStatusBarElement();
								const Ai = performance.now();
								this.ub.distribution({
									stat: "cppclient.reload",
									value: Ai - yi,
								});
							},
						}),
						this.c.onChangeEffect({
							deps: [() => this.Nb().cppConfig],
							onChange: async () => {
								this.updateStatusBarElement();
							},
						}),
						this.ob.onDidChangeSubscription(() => {
							this.updateStatusBarElement(),
								this.loadCppConfigIncludingHandlingProAccess();
						}),
						this.D(
							this.Ab.onDidActiveEditorChange(() => {
								this.updateStatusBarElement();
							}),
						),
						this.ob.addLoginChangedListener(() => {
							this.updateStatusBarElement();
						}),
						this.ob.addSubscriptionChangedListener(() => {
							this.updateStatusBarElement(),
								this.loadCppConfigIncludingHandlingProAccess();
						}),
						this.Bb.onDidChangeConfiguration((yi) => {
							yi.affectsConfiguration(le.$tJ) && this.updateStatusBarElement();
						}),
						this.loadCppConfigIncludingHandlingProAccess(),
						this.mainRegisterCppListenersToEditorIfCppEnabled(),
						this.N.addListener((yi, Ai, li) => {
							if (
								this.getCurrentSuggestion() === void 0 &&
								!(
									this.Nb().cppAutoImportEnabled &&
									this.Jb.isShowingImportSuggestion()
								)
							) {
								this.Ub(yi),
									this.displayCppSuggestion(li, Ai, yi),
									this.N.removeSuggestion(yi);
								return;
							}
						});
					const { clientDebounceDuration: qi, totalDebounceDuration: Oi } =
						this.getNewDebounceDurations();
					(this.Z = new U.$r6b(qi, Oi, 1e3)),
						(this.gb = !this.Kb.isBuilt || this.Kb.isExtensionDevelopment),
						this.Jb.registerCppMethods({
							getPartialCppRequest: this.getPartialCppRequest.bind(this),
							getModelName: this.getModelName.bind(this),
							getCurrentSuggestion: this.getCurrentSuggestion.bind(this),
							getRecentAndNearLocationLinterErrors:
								this.getRecentAndNearLocationLinterErrors.bind(this),
							truncateCurrentFile: this.Xb.bind(this),
							getFocusedCodeEditor: this.getFocusedCodeEditor.bind(this),
							isTextFocusedOrSimilarlyFocused:
								this.isTextFocusedOrSimilarlyFocused.bind(this),
						});
				}
				uponFusedCursorPredictionReady(Ye, ze) {
					if (
						ze !== null &&
						this.usingFusedCursorPredictionModel() &&
						((this.eb = { id: Ye, fusedCursorPrediction: ze }),
						this.fb?.fusedCursorPredictionId === Ye)
					) {
						const Xe = this.getFocusedCodeEditor();
						if (Xe === null) return;
						const It = Xe.getModel();
						if (It === null || It.uri.toString() !== this.fb.uri.toString())
							return;
						this.displayFusedCursorPrediction({
							editor: Xe,
							model: It,
							fusedCursorPrediction: ze,
							oldText: this.fb.oldText,
							newText: this.fb.newText,
						});
					}
				}
				getLastAcceptedSuggestionDetails() {
					return this.u;
				}
				getNewDebounceDurations() {
					const Ye = this.ib.applicationUserPersistentStorage.cppConfig;
					if (Ye === void 0)
						return { clientDebounceDuration: Me, totalDebounceDuration: De };
					const ze = Ye.clientDebounceDurationMillis,
						Xe = Ye.globalDebounceDurationMillis;
					return { clientDebounceDuration: ze, totalDebounceDuration: Xe };
				}
				setSuggestionType(Ye, ze) {
					this.Q.set(Ye, ze);
				}
				async dispose() {
					const Ye = new t.$Zc();
					try {
						for (const [ze, Xe] of this.O.entries()) {
							const It = await this.jb.createModelReference(ze);
							Ye.add(It),
								It.object.textEditorModel.deltaDecorations(
									Xe.map((Lt) => Lt.decorationId),
									[],
								);
						}
					} finally {
						Ye.dispose();
					}
				}
				sendCppEnabledUpdateRequest() {
					this.Nb().cppEnabled
						? this.pb.publicLogCapture("cpp.cppUpdate.cppEnabled")
						: this.pb.publicLogCapture("cpp.cppUpdate.cppDisabled");
				}
				async keepCppModelStateUpdated() {
					const Ye = await (await this.g.get()).availableModels({});
					this.ib.setApplicationUserPersistentStorage(
						"cppModelsState",
						(ze) => ({
							cppModels: Ye.models,
							defaultModel: Ye.defaultModel ?? ze.defaultCppModel,
						}),
					);
				}
				async updateShouldNotTryToGetThemToNoticeCpp() {
					this.Nb().cppEnabled === !0 &&
						this.ib.setApplicationUserPersistentStorage(
							"shouldNotTryToGetThemToNoticeCpp",
							!0,
						);
					const Ye = this.ob.isAuthenticated();
					await this.kb.maybeRefreshFeatureStatus(
						"cppExistingUserMarketingPopup",
					),
						Ye &&
							this.Nb().shouldNotTryToGetThemToNoticeCpp !== !0 &&
							this.kb.getCachedFeatureStatus(
								"cppExistingUserMarketingPopup",
							) === !0 &&
							this.isAllowedCpp() &&
							(this.pb.publicLogCapture("cppMarketingPopup.shownPopup"),
							this.ib.setApplicationUserPersistentStorage(
								"shouldNotTryToGetThemToNoticeCpp",
								!0,
							),
							this.ib.setNonPersistentStorage(
								"cppPopupState",
								"cardState",
								"first",
							));
				}
				isAllowedCpp() {
					return (0, le.$uJ)(
						this.Nb().cppConfig,
						this.ob.isAuthenticated(),
						(0, le.$sJ)(this.ob.membershipType()),
					);
				}
				isCppEnabledForEditor(Ye) {
					let ze;
					if (Ye !== null) {
						const It = Ye.getModel();
						if (It == null) return !1;
						ze = { languageId: et(It), fsPath: this.nb.asRelativePath(It.uri) };
					}
					let Xe;
					try {
						Xe = this.Bb.getValue(le.$tJ);
					} catch {
						Xe = [];
					}
					return (0, le.$vJ)(this.Nb().cppEnabled, ze, Xe);
				}
				setCppDisabledForLanguage(Ye, ze) {
					const Xe = this.Bb.getValue(le.$tJ);
					Array.isArray(Xe)
						? this.Bb.updateValue(
								le.$tJ,
								ze === "enabled" ? Xe.filter((It) => It !== Ye) : [...Xe, Ye],
								Z.ConfigurationTarget.USER,
							)
						: this.Bb.updateValue(
								le.$tJ,
								ze === "enabled" ? [] : [Ye],
								Z.ConfigurationTarget.USER,
							);
				}
				isCppDisabledForLanguage(Ye) {
					try {
						const ze = this.Bb.getValue(le.$tJ);
						return (0, le.$wJ)(Ye, ze);
					} catch {
						return !1;
					}
				}
				getRedDecorationIds(Ye) {
					return this.$[Ye];
				}
				setRedDecorationIds(Ye, ze) {
					this.$[Ye] = ze(this.$[Ye] || []);
				}
				pauseCppTriggeringUntilUnpaused() {
					return (
						(this.pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING =
							!0),
						this.rejectAndResetAllCppSuggestions(),
						{
							dispose: () => {
								this.pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING =
									!1;
							},
						}
					);
				}
				filterLinterErrors(Ye, ze = S.MarkerSeverity.Error) {
					return Ye.filter((Xe) => Xe.severity >= ze).filter(
						(Xe) =>
							Xe.startLineNumber < ht &&
							Xe.endLineNumber < ht &&
							Xe.startColumn < Rt &&
							Xe.endColumn < Rt,
					);
				}
				loadCopilotPlusPlusConfigFromGithubCopilot() {
					if (this.Nb().cppHasLoadedConfigFromCopilot !== !0)
						try {
							const Ye = this.Bb.getValue("github.copilot.enable");
							if (Ye !== null && typeof Ye == "object") {
								const ze = Object.keys(Ye)
									.filter((Xe) => Ye[Xe] === !1)
									.filter((Xe) => Xe !== "*");
								ze.length > 0 &&
									this.Bb.updateValue(le.$tJ, ze, Z.ConfigurationTarget.USER);
							}
						} catch {
						} finally {
							this.ib.setApplicationUserPersistentStorage(
								"cppHasLoadedConfigFromCopilot",
								!0,
							);
						}
				}
				_createTooltip(Ye, ze) {
					const Xe = ge.$Ogb(),
						It = Ce.$ujb.get(Xe) ?? Xe.document.body,
						Lt = Xe.document.getElementById(
							"cpp-cursor-prediction-tooltip-hover-over-element-1234",
						);
					Lt && Lt.remove();
					const xt = document.createElement("div");
					(xt.id = "cpp-cursor-prediction-tooltip-hover-over-element-1234"),
						(xt.textContent = ze),
						(xt.style.position = "absolute"),
						(xt.style.backgroundColor = "var(--vscode-sideBar-background)"),
						(xt.style.color = "var(--vscode-sideBar-foreground)"),
						(xt.style.padding = "5px"),
						(xt.style.borderRadius = "5px"),
						(xt.style.display = "none"),
						(xt.style.zIndex = "1000"),
						(xt.style.width = "200px"),
						(xt.style.marginLeft = "4px"),
						(xt.style.fontSize = "10px"),
						It.appendChild(xt),
						Ye.addEventListener("mouseenter", () => {
							Xe.requestAnimationFrame(() => {
								(xt.style.display = "block"),
									(xt.style.transform = "translate(-9999px, -9999px)"),
									Xe.requestAnimationFrame(() => {
										const Vt = xt.getBoundingClientRect(),
											Bt = Ye.getBoundingClientRect();
										xt.style.transform = `translate(${Bt.left}px, ${Bt.top - Vt.height - 5}px)`;
										const Gt = Xe.setInterval(() => {
											Ye.matches(":hover") ||
												((xt.style.display = "none"), Xe.clearInterval(Gt));
										}, 1e3);
										setTimeout(() => Xe.clearInterval(Gt), 6e4);
									});
							});
						}),
						Ye.addEventListener("mouseleave", () => {
							xt.style.display = "none";
						});
				}
				_renderCppToggleCursorPrediction(Ye) {
					const ze = document.createElement("div");
					ze.classList.add("cpp-status-bar-hover-element");
					const Xe = document.createElement("div");
					(Xe.style.display = "flex"),
						(Xe.style.alignItems = "center"),
						(Xe.style.justifyContent = "center"),
						(Xe.style.gap = "2px");
					const It = document.createElement("span");
					(It.textContent = "Cursor Prediction"), Xe.appendChild(It);
					const Lt = document.createElement("i");
					(Lt.className = "codicon codicon-info"),
						(Lt.style.color = "var(--vscode-descriptionForeground)"),
						(Lt.style.display = "flex"),
						(Lt.style.alignItems = "center"),
						(Lt.style.justifyContent = "center"),
						(Lt.style.marginRight = "10px"),
						(Lt.style.marginBottom = "-0.1rem"),
						(Lt.style.cursor = "pointer"),
						Xe.appendChild(Lt),
						this._createTooltip(
							Lt,
							"Predicts the next line your cursor will move to. Triggers after Cursor Tab suggestions and can be accepted using tab.",
						),
						ze.appendChild(Xe);
					const xt = document.createElement("div"),
						Vt = document.createElement("select"),
						Bt = this.Cb.isCursorPredictionEnabled() ? "enabled" : "disabled";
					["enabled", "disabled"].forEach((Ut) => {
						const ei = document.createElement("option");
						(ei.value = Ut),
							(ei.textContent = Ut),
							(ei.selected = Ut === Bt),
							Vt.appendChild(ei);
					}),
						Vt.addEventListener("change", (Ut) => {
							const ei = Ut.target.value;
							this.ib.setApplicationUserPersistentStorage(
								"cursorPredictionEnabled",
								ei === "enabled",
							);
						}),
						(Vt.style.background = "none"),
						(Vt.style.outline = "none"),
						(Vt.style.border = "none"),
						(Vt.style.color = "inherit"),
						(Vt.style.fontSize = "inherit"),
						xt.appendChild(Vt);
					const Mt = document.createElement("span");
					return (
						(Mt.textContent = "\u25BC"),
						(Mt.style.marginLeft = "4px"),
						xt.appendChild(Mt),
						(xt.style.border =
							"1px solid var(--vscode-settings-checkboxBorder)"),
						(xt.style.borderRadius = "4px"),
						(xt.style.padding = "2px 4px"),
						(xt.style.marginLeft = "4px"),
						ze.appendChild(xt),
						ze
					);
				}
				_renderCppModelSelect(Ye) {
					const ze = document.createElement("div");
					ze.classList.add("cpp-status-bar-hover-element");
					const Xe = document.createElement("span");
					(Xe.textContent = "Model"),
						(Xe.style.marginRight = "10px"),
						ze.appendChild(Xe);
					const It = document.createElement("div"),
						Lt = document.createElement("select"),
						xt = this.ib.applicationUserPersistentStorage.cppModel || se.$RX;
					[
						se.$RX,
						...this.ib.applicationUserPersistentStorage.cppModelsState
							.cppModels,
					].forEach((Gt) => {
						const Mt = document.createElement("option");
						(Mt.value = Gt),
							(Mt.textContent = Gt),
							(Mt.selected = Gt === xt),
							Lt.appendChild(Mt);
					}),
						Lt.addEventListener("change", (Gt) => {
							const Mt = Gt.target.value;
							Mt === se.$RX
								? this.ib.setApplicationUserPersistentStorage(
										"cppModel",
										void 0,
									)
								: this.ib.setApplicationUserPersistentStorage("cppModel", Mt),
								this.loadCppConfigIncludingHandlingProAccess();
						}),
						(Lt.style.background = "none"),
						(Lt.style.outline = "none"),
						(Lt.style.border = "none"),
						(Lt.style.color = "inherit"),
						(Lt.style.fontSize = "inherit"),
						It.appendChild(Lt);
					const Bt = document.createElement("span");
					return (
						(Bt.textContent = "\u25BC"),
						(Bt.style.marginLeft = "4px"),
						It.appendChild(Bt),
						(It.style.border =
							"1px solid var(--vscode-settings-checkboxBorder)"),
						(It.style.borderRadius = "4px"),
						(It.style.padding = "2px 4px"),
						(It.style.marginLeft = "4px"),
						ze.appendChild(It),
						ze
					);
				}
				_renderStatusCheckBox(Ye, ze) {
					const Xe = document.createElement("div");
					Xe.classList.add("cpp-status-bar-hover-element");
					const It = ze
							? this.isCppDisabledForLanguage(ze)
							: !this.Nb().cppEnabled,
						Lt = ze ? `Disable for ${ze}` : "Disable globally",
						xt = new te.$8ib({
							isChecked: It,
							title: Lt,
							icon: It ? Q.$ak.check : void 0,
							...te.$6ib,
							hoverDelegate: { showHover: () => {}, delay: 0 },
						});
					xt.domNode.classList.add("cpp-status-bar-toggle-checkbox"),
						Ye.add(xt),
						Ye.add(
							xt.onChange(() => {
								const Bt = xt.checked;
								ze
									? this.setCppDisabledForLanguage(
											ze,
											Bt ? "disabled" : "enabled",
										)
									: this.ib.setApplicationUserPersistentStorage(
											"cppEnabled",
											!Bt,
										);
							}),
						);
					const Vt = document.createElement("span");
					return (
						(Vt.textContent = Lt),
						(Vt.style.marginRight = "6px"),
						Xe.appendChild(Vt),
						Xe.appendChild(xt.domNode),
						Xe
					);
				}
				statusBarElementProps() {
					for (
						this.ob.refreshAuthService(), this.Lb.clear();
						this.Mb.firstChild;
					)
						this.Mb.removeChild(this.Mb.firstChild);
					const Ye = (0, c.$btb)(this.Ab.activeTextEditorControl);
					Ye?.onDidChangeModelLanguage(
						this.updateStatusBarElement,
						this,
						this.Lb,
					);
					const ze = Ye?.getModel(),
						Xe = this.ob.isAuthenticated(),
						It = this.isAllowedCpp(),
						Lt = this.isCppEnabledForEditor(Ye);
					if (It) {
						if (
							(this.Mb.appendChild(this._renderStatusCheckBox(this.Lb)),
							ze != null)
						) {
							const xt = et(ze);
							this.Mb.appendChild(this._renderStatusCheckBox(this.Lb, xt));
						}
						this.Mb.appendChild(this._renderCppModelSelect(this.Lb)),
							this.Mb.appendChild(
								this._renderCppToggleCursorPrediction(this.Lb),
							);
					} else if (Xe) {
						const xt = document.createElement("div");
						xt.classList.add("cpp-status-bar-hover-element"),
							xt.appendChild(
								document.createTextNode("Requires pro (custom model). "),
							);
						const Vt = document.createElement("a");
						(Vt.href = "#"),
							(Vt.textContent = "Upgrade here."),
							(Vt.style.marginLeft = "4px"),
							(Vt.onclick = (Bt) => {
								Bt.preventDefault(), this.ob.pay();
							}),
							xt.appendChild(Vt),
							this.Mb.appendChild(xt);
					} else {
						const xt = document.createElement("div");
						xt.classList.add("cpp-status-bar-hover-element"),
							xt.appendChild(document.createTextNode("Please log in")),
							this.Mb.appendChild(xt);
					}
					return {
						name: "Cursor Tab",
						text: "Cursor Tab",
						ariaLabel: "Cursor Tab",
						cssClass:
							It && Lt
								? "copilot-plus-plus-status-on"
								: "copilot-plus-plus-status-off",
						tooltip: this.Mb,
						dontHideHoverOnClick: !0,
						command: It ? se.$MX : Xe ? "" : rt.ID,
					};
				}
				updateStatusBarElement() {
					this.updateShouldNotTryToGetThemToNoticeCpp(),
						this.W.value?.update(this.statusBarElementProps());
				}
				getMostRecentShownRequestId() {
					return this.z;
				}
				getMostRecentNonAbortedRequestId() {
					return this.w;
				}
				eventShouldKillPrevCpp(Ye) {
					return Ye.altKey === !0;
				}
				Nb() {
					return this.ib.applicationUserPersistentStorage;
				}
				Ob() {
					return this.ib.nonPersistentStorage;
				}
				reallowCopilotIfWePreviousHidCopilotSuggestions() {
					this.editorThatWeHidGhostTextOn !== void 0 &&
						(this.unhideCopilotSuggestion(this.editorThatWeHidGhostTextOn),
						y.$O1b
							.get(this.editorThatWeHidGhostTextOn)
							?.model.get()
							?.triggerExplicitly(),
						(this.editorThatWeHidGhostTextOn = void 0));
				}
				isInVimNonInsertMode() {
					const Ye = this.vb.getViewModel();
					for (const ze of [
						...Ye.getEntries(ne.StatusbarAlignment.LEFT),
						...Ye.getEntries(ne.StatusbarAlignment.RIGHT),
					])
						if (
							ze.id === "vscodevim.vim.primary" &&
							!["INSERT"].some((Xe) => ze.container.innerText.includes(Xe))
						)
							return !0;
					return !1;
				}
				selectionIsNotMultipleLines() {
					const Ye = this.hb.getActiveCodeEditor(),
						ze = Ye?.getSelection();
					return (
						Ye === null ||
						ze === null ||
						ze === void 0 ||
						ze.startLineNumber === ze.endLineNumber
					);
				}
				shouldTabInsteadOfAccepting() {
					if (this.isInVimNonInsertMode()) return !1;
					const Ye = this.hb.getActiveCodeEditor();
					if (!Ye || (this.bb && this.Cb.isShowingCursorPrediction(Ye)))
						return !1;
					const ze = Ye.getPosition(),
						Xe = Ye.getModel();
					if (!ze || !Xe) return !1;
					const It = Xe.getEOL();
					if (Xe.getLineContent(ze.lineNumber).trim() !== "") return !1;
					const Lt = this.Ob().cppState?.suggestion;
					if (Lt === void 0) return !1;
					const xt = Lt.decorationId,
						Vt = Ye.getModel()?.getDecorationRange(xt);
					if (Vt == null) return !1;
					const Bt = Xe.getValueInRange({
						startLineNumber: Vt.startLineNumber,
						startColumn: Vt.startColumn,
						endLineNumber: ze.lineNumber,
						endColumn: ze.column,
					});
					if (Bt === void 0) return !1;
					let Gt = Lt.replaceText;
					ze.lineNumber === Vt.endLineNumber &&
						Vt.endColumn === 1 &&
						(Gt = Gt + (Xe.getLineContent(ze.lineNumber) ?? "") + It);
					const Mt = Bt.split(It).length - 1,
						Ut = Bt.split(It).at(-1)?.length;
					if (Ut === void 0) return !1;
					let ei = Gt.split(It)[Mt];
					return ei === void 0 ||
						ei.slice(0, Ut).trim() !== "" ||
						((ei = ei.slice(Ut)), ei === void 0)
						? !1
						: ei.trimStart() !== ei;
				}
				async acceptNextWord() {
					if (this.Bb.getValue(se.$zW) !== !0) return !1;
					const ze = this.Ob().cppState?.suggestion;
					if (ze !== void 0) {
						this.dontTriggerCppBecauseChangeIsFromCpp = !0;
						const Xe = await this.acceptNextWordSuggestion(
							this.holdDownAbortController,
						);
						if (Xe.type === J.AcceptResult.AcceptedWord) {
							const It = this.hb.getActiveCodeEditor();
							return (
								It !== null && this.cleanupAfterNextWordSuggestion(It, Xe.edit),
								!0
							);
						} else if (Xe.type === J.AcceptResult.AcceptedAll) {
							const It = this.hb.getActiveCodeEditor();
							return (
								It !== null && this.cleanupAfterAcceptSuggestion(It, ze), !0
							);
						}
					}
					return !1;
				}
				eventIsAccept(Ye) {
					return Ye.key === "Enter";
				}
				eventIsTriggered(Ye) {
					const ze = this.triggerKey();
					return ze.kind === "code" ? Ye.code === ze.code : Ye.key === ze.key;
				}
				triggerKey() {
					const Ye = this.Nb().cppTriggerKey ?? l.$3Cc;
					return Ye.includes("Left") || Ye.includes("Right")
						? { kind: "code", code: Ye }
						: { kind: "key", key: Ye };
				}
				markEditAsRejected(Ye, ze) {
					const Xe = this.Nb().cppConfig;
					if (
						Xe === void 0 ||
						Xe.heuristics.includes(
							f.CppConfigResponse_Heuristic.SUGGESTING_RECENTLY_REJECTED_EDIT,
						) === !1 ||
						Xe.recentlyRejectedEditThresholds === void 0
					)
						return;
					const It = Ye.getModel();
					if (It === null) return;
					const Lt = this.Ob().cppState?.suggestion;
					if (Lt === void 0) return;
					const xt = Lt.uri,
						Vt = this.nb.asRelativePath(xt);
					let { isNoOp: Bt } = (0, Ae.$Qed)(
						It,
						Lt.startingSuggestionRange,
						Lt.replaceText,
						It.getEOL(),
					);
					if (Bt) return;
					const Gt = (0, Ae.$Red)(
						It,
						Lt.startingSuggestionRange,
						Lt.replaceText,
						It.getEOL(),
						null,
					);
					for (const Mt of Gt)
						this.Eb.onlyLocalProvider?.runCommand(
							le.EditHistoryActions.RecordRejectedEdit,
							{ relativePath: Vt, modelValue: Mt, onlySoftRejected: ze },
						);
				}
				mainRegisterCppListenersToEditorIfCppEnabled() {
					this.clearEditorListeners(),
						this.Nb().cppEnabled === !0
							? this.registerAllCppListeners()
							: this.reallowCopilotIfWePreviousHidCopilotSuggestions();
				}
				clearEditorListeners() {
					this.n.forEach((Ye) => Ye.forEach((ze) => ze.dispose())),
						this.n.clear();
				}
				async registerAllCppListeners() {
					let Ye = 0;
					for (
						;
						(await this.Eb.onlyLocalProvider?.runCommand(
							le.EditHistoryActions.Ack,
							null,
						)) !== !0 && Ye < 1e3;
					)
						await new Promise((Xe) => setTimeout(Xe, 100));
					for (let Xe of this.hb.listCodeEditors())
						this.registerEditorListenersToEditor(Xe);
					this.n.set("global", [
						this.D(
							this.hb.onCodeEditorAdd((Xe) => {
								this.registerEditorListenersToEditor(Xe);
							}),
						),
					]),
						this.D(
							this.Ab.onDidActiveEditorChange(() => {
								Ve("onDidActiveEditorChange:");
								const Xe = this.hb.getActiveCodeEditor();
								if (Xe === null) {
									Ve("onDidActiveEditorChange: editor is null");
									return;
								}
								if (Xe.getModel() === null) {
									Ve("onDidActiveEditorChange: model is null");
									return;
								}
								if (this.Qb() || this.Rb()) {
									Ve(
										`onDidActiveEditorChange: Suppressing suggestion because ${this.Qb()} or ${this.Rb()}`,
									);
									return;
								}
								Ve("onDidActiveEditorChange: Triggering suggestion"),
									this.fireCppSuggestionDebounced(
										Xe,
										le.CppSource.EditorChange,
									);
							}),
						);
					const ze = i.getWindows();
					this.n.set("window", [
						this.D({
							dispose: () => {
								for (const Xe of ze)
									Xe.window.document.removeEventListener(
										"keydown",
										this.handleKeyDownForCppKeys,
									);
							},
						}),
					]);
					for (const Xe of ze)
						Xe.window.document.addEventListener(
							"keydown",
							this.handleKeyDownForCppKeys,
						);
				}
				async registerEditorListenersToEditor(Ye) {
					const ze = Ye.getId();
					this.n.set(ze, [
						Ye.onDidDispose(() => {
							this.n.get(ze)?.forEach((Xe) => Xe.dispose()), this.n.delete(ze);
						}),
					]);
					try {
						this.n.has(ze) || this.n.set(ze, []),
							this.n.get(ze).push(
								this.D(
									Ye.onDidBlurEditorText(() => {
										Ve("[Cpp] onDidBlurEditorText: resetting suggestions"),
											this.rejectAndResetAllCppSuggestions();
									}),
								),
							);
						const Xe = this.D(new W.$7jc(Ye, this.yb.signatureHelpProvider));
						this.editorIdToParameterHintsModel.set(ze, Xe),
							this.n.get(ze).push(Xe),
							Xe !== void 0 &&
								this.n.get(ze).push(
									this.D(
										Xe.onChangedHints((Lt) => {
											const xt = this.xb.getRelevantType(Ye);
											this.xb.onChangedHints(Ye, Lt),
												xt.length === 0 &&
													Lt !== void 0 &&
													this.fireCppSuggestionDebounced(
														Ye,
														le.CppSource.ParameterHints,
													);
										}),
									),
								);
						const It = Ye.getModel();
						It !== null &&
							(await this.registerModelListenerToEditorModel(Ye, It)),
							this.n.has(ze) || this.n.set(ze, []),
							this.n.get(ze).push(
								this.D(
									Ye.onDidChangeModel(() => {
										const Lt = Ye.getModel();
										Lt !== null &&
											this.registerModelListenerToEditorModel(Ye, Lt);
									}),
								),
							),
							this.n.has(ze) || this.n.set(ze, []),
							this.n.get(ze).push(
								this.D(
									Ye.onDidChangeCursorPosition((Lt) => {
										if (
											(Ve("[Cpp] onDidChangeCursorPosition"),
											this.hb.getActiveCodeEditor() !== Ye &&
												!this.isReferenceFocused(Ye) &&
												!this.isFindFocused(Ye))
										) {
											Ve(
												"[Cpp] onDidChangeCursorPosition: Suppressing trigger because editor is not active",
											);
											return;
										}
										if (
											((this.ab = Lt.source === se.$QX),
											Lt.source === se.$QX && this.Pb(Ye, Lt.position),
											Lt.source === "cpp-peek" ||
												Lt.source === "cpp-next-suggestion" ||
												Lt.source === "cpp-revert" ||
												Lt.source === se.$QX)
										) {
											Ve(
												`[Cpp] onDidChangeCursorPosition: suppress b/c source is ${Lt.source}`,
											);
											return;
										} else if (
											Lt.reason === N.CursorChangeReason.RecoverFromMarkers &&
											Lt.source === "modelChange"
										) {
											Ve(
												`[Cpp] onDidChangeCursorPosition: suppress b/c reason is ${Lt.reason} and source is ${Lt.source}`,
											);
											return;
										}
										(this.bb = !1),
											this.usingFusedCursorPredictionModel() &&
												((this.fb = void 0),
												(this.db = void 0),
												this.Cb.clearCursorPrediction());
										const xt = Ye.getModel()?.uri;
										if (
											xt === void 0 ||
											(this.updateRecentDiagnostics(xt, Lt.position),
											this.holdDownAbortController?.abort(),
											(this.holdDownAbortController = void 0),
											Lt.source === "restoreState")
										)
											return;
										let Gt = this.sb
											.read({ resource: xt })
											.filter(
												(Mt) =>
													[
														S.MarkerSeverity.Error,
														S.MarkerSeverity.Warning,
													].includes(Mt.severity) &&
													Math.abs(
														Mt.startLineNumber - Lt.position.lineNumber,
													) <= e.$8ed,
											)
											.filter(
												(Mt) =>
													Mt.severity === S.MarkerSeverity.Error &&
													Math.abs(
														Mt.startLineNumber - Lt.position.lineNumber,
													) <= 1,
											);
										if (this.Nb().cppEnabled === !0) {
											const Mt = Ye.getSelection();
											if (Mt === null) {
												Ve(
													"[Cpp] onDidChangeCursorPosition: selection is null",
												);
												return;
											}
											const Ut = this.getCurrentSuggestion();
											let ei = !1;
											const mi = Ye.getModel();
											if (mi === null) return;
											if (Ut === void 0)
												this.didShowGreenHighlights
													? ((this.didShowGreenHighlights = !1),
														this.clearDecorationsSlowEnumeratesAllDecorations())
													: this.clearDecorationsFast();
											else {
												const si = {
													range: mi.getDecorationRange(Ut.decorationId),
													id: Ut.decorationId,
												};
												if (si === void 0 || si.range === null) return;
												const Zt = {
													...si.range,
													endColumn: 1e4,
													startLineNumber:
														Ut.startingSuggestionRange.startLineNumber,
													startColumn: Ut.startingSuggestionRange.startColumn,
												};
												(ei = !!(si.range !== null && Mt.intersectRanges(Zt))),
													ei ||
														(this.markEditAsRejected(Ye, !1),
														this.rejectAndResetAllCppSuggestions(),
														this.Cb.maybeShowHintLineWidget());
											}
											if (
												!this.R.find(
													(Jt) =>
														Jt.modelId === mi.id &&
														Jt.modelVersion === mi.getVersionId() &&
														Jt.position !== void 0 &&
														Jt.position.equals(Lt.position),
												) &&
												!ei
											)
												if (this.Nb().cppFireOnEveryCursorChange === !0)
													this.fireCppSuggestionDebounced(
														Ye,
														le.CppSource.LineChange,
													);
												else if (
													(Gt.length > 0 || kt) &&
													this.q !== Lt.position.lineNumber
												)
													this.fireCppSuggestionDebounced(
														Ye,
														le.CppSource.LinterErrors,
													);
												else {
													const Jt = this.q === Lt.position.lineNumber,
														si = this.Qb(),
														Zt = this.Rb();
													!Jt && !si && !Zt
														? this.fireCppSuggestionDebounced(
																Ye,
																le.CppSource.LineChange,
															)
														: Ve(
																"[Cpp] Suppressed Trigger. Conditions (all should be false to trigger):",
																JSON.stringify({
																	linesAreTheSame: Jt,
																	hasRejectedTooManySuggestions: si,
																	isUserReadingCode: Zt,
																}),
															);
												}
											else
												Ve(
													"[Cpp] onDidChangeCursorPosition: suppress b/c shouldTrigger is false",
												);
											this.q = Lt.position.lineNumber;
										}
										this.Nb().cppAutoImportEnabled &&
											this.showNearLocationLintErrorsToImportPredictionService({
												editor: Ye,
												uri: xt,
												isFromCursorMovement: !0,
												source: "onDidChangeCursorPosition",
											});
									}),
								),
							),
							this.Sb(Ye);
					} catch (Xe) {
						console.error("Cpp: error", Xe);
					}
				}
				Pb(Ye, ze) {
					const Xe = Ye.getModel()?.uri,
						It = Ye.getModel()?.getVersionId();
					Xe !== void 0 &&
						It !== void 0 &&
						(this.cb = [
							...this.cb,
							{ uri: Xe, modelVersion: It, position: ze },
						]);
				}
				Qb() {
					return this.numberOfClearedSuggestionsSinceLastAccept > 5;
				}
				Rb() {
					return (
						this.lastEditTime === void 0 ||
						Date.now() - this.lastEditTime >= 6e4
					);
				}
				Sb(Ye) {
					const ze = Ye.getId(),
						Xe = this.Nb().cppConfig?.excludeRecentlyViewedFilesPatterns ?? [];
					this.n.has(ze) || this.n.set(ze, []),
						this.n.get(ze).push(
							this.D(
								Ye.onDidFocusEditorText(() => {
									const It = Ye.getModel();
									if (It == null) return;
									const Lt = this.nb.asRelativePath(It.uri),
										xt = [
											M.Schemas.file,
											M.Schemas.inMemory,
											M.Schemas.vscodeNotebookCell,
											M.Schemas.vscodeFileResource,
											M.Schemas.vscodeRemote,
											M.Schemas.vscodeRemoteResource,
											M.Schemas.vscodeManagedRemoteResource,
										];
									if (
										!(0, c.$0sb)(Ye) ||
										Xe.some((Gt) => Lt.includes(Gt)) ||
										!xt.some((Gt) => (0, M.$Vg)(It.uri, Gt))
									)
										return;
									const Vt = Ye.getVisibleRanges(),
										Bt = It.uri;
									this.j.set(Bt, {
										visibleRanges: Vt,
										lastViewedAt: Date.now(),
									}),
										this.Nb().cppAutoImportEnabled &&
											this.showNearLocationLintErrorsToImportPredictionService({
												editor: Ye,
												uri: Bt,
												isFromCursorMovement: !1,
												source: "onDidFocusEditorText",
											});
								}),
							),
						),
						this.n.has(ze) || this.n.set(ze, []),
						this.n.get(ze).push(
							this.D(
								Ye.onDidScrollChange(() => {
									const It = Ye.getModel(),
										Lt = It?.uri;
									if (It == null || Lt == null) return;
									const xt = this.nb.asRelativePath(Lt),
										Vt = [
											M.Schemas.file,
											M.Schemas.inMemory,
											M.Schemas.vscodeNotebookCell,
											M.Schemas.vscodeFileResource,
											M.Schemas.vscodeRemote,
											M.Schemas.vscodeRemoteResource,
											M.Schemas.vscodeManagedRemoteResource,
										];
									!(0, c.$0sb)(Ye) ||
										Xe.some((Bt) => xt.includes(Bt)) ||
										!Vt.some((Bt) => (0, M.$Vg)(Lt, Bt)) ||
										this.j.set(Lt, {
											visibleRanges: Ye.getVisibleRanges(),
											lastViewedAt: Date.now(),
										});
								}),
							),
						);
				}
				async fireOnCacheMiss(Ye, ze, Xe, It, Lt) {
					ze !== null
						? await this.fireCppSuggestionDebouncedDiffHistory(
								Ye,
								ze,
								le.CppSource.Typing,
								It,
							)
						: await this.formatDiffHistory(Ye, ze, Xe, It);
				}
				async triggerCppIfLintErrorComesUp(Ye, ze, Xe, It, Lt, xt) {
					const Vt = this.nb.asRelativePath(Xe?.uri ?? C.URI.file("")),
						Bt = new AbortController();
					this.triggerCppOnLintErrorAbortControllers.set(Vt, Bt);
					let Gt = !1;
					Bt.signal.addEventListener("abort", () => {
						Gt = !0;
					});
					let Mt = !1;
					for (let Ut = 0; Ut < Lt / 50; Ut++) {
						if ((await new Promise((Dt) => setTimeout(Dt, 50)), Gt)) return;
						const ei = this.sb.read({ resource: Xe.uri }),
							mi = ze.getPosition();
						if (mi === null) return;
						if (
							ei.filter(
								(Dt) =>
									Dt.severity === S.MarkerSeverity.Error &&
									Math.abs(Dt.startLineNumber - mi.lineNumber) <= 1,
							).length > 0
						) {
							(Mt = !0),
								this.continueModelChangeListener(
									Ye,
									ze,
									Xe,
									It,
									{ removeGreens: !1 },
									xt,
								);
							break;
						}
					}
				}
				async continueModelChangeListener(
					Ye,
					ze,
					Xe,
					It,
					Lt = { removeGreens: !0 },
					xt,
				) {
					if (this.Ob().cppState?.shouldNotTrigger === !0) {
						Ve("[Cpp] continueModelChangeListener - shouldNotTrigger is true");
						return;
					}
					if (Xe.getValueLength() > 100 * 1e4 || Xe.getLineCount() > 2e4)
						return;
					const Vt = async () => {
							await this.formatDiffHistory(Ye, ze, Xe, It),
								z.$Jlc.get(ze)?.update();
						},
						Bt = () => {
							const Ut = this.getCurrentSuggestion();
							if (Ut === void 0) return;
							const ei = Xe.getDecorationRange(Ut.decorationId);
							if (ei === null) return;
							const mi = Xe.getDecorationOptions(Ut.decorationId);
							if (
								mi === null ||
								ei.startLineNumber <= (ze.getPosition()?.lineNumber ?? 0)
							)
								return;
							const ii = { ...ei, startLineNumber: ei.startLineNumber - 1 };
							Xe.changeDecorations((Dt) => {
								Dt.removeDecoration(Ut.decorationId);
								const Jt = Dt.addDecoration(ii, mi);
								this.updateSuggestionState({ decorationId: Jt });
							});
						};
					if (this.isOnShortestEditPath({ event: Ye, model: Xe }, xt))
						return (0, F.$Jed)(Ye.changes) && Bt(), Vt();
					const Mt = this.Tb(Ye) || this.Nb().cppCachedTypeaheadEnabled !== !0;
					if (
						(this.markEditAsRejected(ze, !0),
						this.rejectAndResetAllCppSuggestions({
							removeGreens: !1,
							abortAll: Mt,
						}),
						(!this.Nb().cppAutoImportEnabled ||
							!this.Jb.isShowingImportSuggestion()) &&
							this.allowCppTriggerInComments(ze))
					) {
						const Ut = this.N.popCacheHit(Xe);
						if (Ut !== void 0)
							return this.Ub(Ut), this.displayCppSuggestion(ze, Xe, Ut), Vt();
					}
					await this.fireOnCacheMiss(Ye, ze, Xe, It, Lt);
				}
				Tb(Ye) {
					return Ye.changes.some(
						(ze) =>
							ze.text.includes(`
`) || ze.rangeLength > 0,
					);
				}
				Ub(Ye) {
					const ze =
							performance.now() +
							performance.timeOrigin -
							Ye.suggestionTriggerTime,
						Xe = performance.now() - (this.X ?? 0);
					console.info("[CPP TIMING]", `Time Since Start: ${ze}`),
						console.info("[CPP TIMING]", `Time Since Trigger: ${Xe}`),
						this.ub.distribution({
							stat: "cppclient.time_since_start",
							value: ze,
						}),
						this.ub.distribution({
							stat: "cppclient.time_since_trigger",
							value: Xe,
						});
				}
				onCommentLine(Ye, ze) {
					const Xe = Ye.getPosition();
					if (Xe === null) return;
					const It = Xe.lineNumber;
					return ze.getLineContent(It).trim().startsWith("//");
				}
				getPreviousModelValue(Ye) {
					const ze = this.H(Ye);
					return this.G.get(ze);
				}
				async registerModelListenerToEditorModel(Ye, ze) {
					const Xe = this.nb.asRelativePath(ze?.uri ?? C.URI.file(""));
					if (
						(await this.Eb.onlyLocalProvider?.runCommand(
							le.EditHistoryActions.GetModelValue,
							{ relativePath: Xe },
						)) === void 0
					) {
						let It;
						if (ze.uri.scheme === "vscode-notebook-cell") {
							const Lt = ze.getEOL(),
								xt = this.getNotebookCellInfo(ze, Ye, Lt);
							xt !== null && (It = xt.cellValues.join(Lt));
						} else It = ze.getValue();
						It !== void 0 &&
							(await this.Eb.onlyLocalProvider?.runCommand(
								le.EditHistoryActions.InitModel,
								{
									relativePath: Xe,
									currentModelValue: It,
									modelVersion: ze.getVersionId(),
								},
							));
					}
					if (
						ze &&
						(ze.uri.scheme === "vscode-notebook-cell" ||
							ze.uri.scheme === "file" ||
							ze.uri.scheme === "vscode-remote" ||
							ze.uri.scheme === "untitled")
					) {
						this.m.forEach((Vt) => {
							Vt.has(Ye.getId()) &&
								(Vt.get(Ye.getId())?.forEach((Bt) => Bt.dispose()),
								Vt.delete(Ye.getId()));
						});
						const It = [
							this.D(
								ze.onDidChangeContent(async (Vt) => {
									Ve(
										`[Cpp] onDidChangeModelContent for fspath ${ze.uri.fsPath}`,
									),
										(this.X = performance.now());
									const Bt = ze.getEOL();
									if (
										((this.lastEditTime = Date.now()),
										this.m.has(Xe) &&
											this.m.get(Xe).size > 1 &&
											Ye.getId() !== this.hb.getActiveCodeEditor()?.getId())
									) {
										Ve(
											"[Cpp] onDidChangeModelContent: Suppressing trigger because editor is not active",
										);
										return;
									}
									if (
										((this.cb = []),
										this.N.addEditAndUpdateCachedSuggestions(Vt, ze),
										this.triggerCppOnLintErrorAbortControllers.get(Xe)?.abort(),
										this.Nb().cppEnabled !== !1)
									) {
										if (
											this.Nb().cppAutoImportEnabled &&
											(this.Jb.markFileAsUpdated(ze.uri),
											Vt.changes.length === 1 &&
												Vt.changes[0].text.length > 20 &&
												Vt.changes[0].text.length < 5e3)
										) {
											const Gt = Vt.changes[0],
												Mt = Gt.text.split(`
`),
												Ut = {
													startLineNumber: Gt.range.startLineNumber,
													startColumn: Gt.range.startColumn,
													endLineNumber: Gt.range.endLineNumber + Mt.length - 1,
													endColumn:
														Mt.length === 1
															? Gt.range.endColumn + Mt[0].length
															: Mt[Mt.length - 1].length,
												};
											this.Jb.handleNewGreens(ze, [Ut]),
												this.showNearLocationLintErrorsToImportPredictionService(
													{
														editor: Ye,
														uri: ze.uri,
														isFromCursorMovement: !1,
														source: "onDidChangeContent",
													},
												);
										}
										if (
											(z.$Jlc.get(Ye)?.setChangesSinceLastUpdate(!0),
											this.dontTriggerCppBecauseChangeIsFromCpp === !0 ||
												this
													.pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING ===
													!0)
										) {
											const Gt = this.getPreviousModelValue(ze);
											if (
												(await this.formatDiffHistory(Vt, Ye, ze, Bt),
												(this.dontTriggerCppBecauseChangeIsFromCpp = !1),
												this
													.pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING ===
													!0 || this.getCurrentSuggestion() !== void 0)
											)
												return;
											this.triggerCppIfLintErrorComesUp(
												Vt,
												Ye,
												ze,
												Bt,
												2e3,
												Gt,
											);
											return;
										}
										this.isAllowedCpp() &&
											this.isCppEnabledForEditor(Ye) &&
											this.disableAndHideCopilotSuggestion(Ye),
											this.continueModelChangeListener(Vt, Ye, ze, Bt);
									}
								}),
							),
						];
						this.m.has(Xe) || this.m.set(Xe, new Map());
						const Lt = this.m.get(Xe),
							xt = Ye.getId();
						Lt?.has(xt) || Lt?.set(xt, []),
							Lt?.get(xt)?.push(...It),
							this.Nb().cppAutoImportEnabled &&
								Lt?.get(xt)?.push(
									this.D(
										this.sb.onMarkerChanged(async (Vt) => {
											this.hb.getActiveCodeEditor()?.getId() === Ye.getId() &&
												Vt.some((Bt) => Bt.toString() === ze.uri.toString()) &&
												this.showNearLocationLintErrorsToImportPredictionService(
													{
														editor: Ye,
														uri: ze.uri,
														isFromCursorMovement: !1,
														source: "onMarkerChanged",
													},
												);
										}),
									),
								);
					}
				}
				fireCppSuggestionDebounced(Ye, ze) {
					if (!Ye) return;
					const Xe = Ye.getModel(),
						It = Xe?.uri;
					if (!It) return;
					const { requestIdsToCancel: Lt, ...xt } = this.Z.runRequest();
					this.R.forEach((Bt) => {
						Lt.includes(Bt.generationUUID) && Bt.abortController.abort();
					});
					const Vt = Ye.getSelection();
					if (
						Vt !== null &&
						!this.isFindFocused(Ye) &&
						(Vt.startLineNumber !== Vt.endLineNumber ||
							Vt.startColumn !== Vt.endColumn)
					) {
						Ve(
							`[Cpp] fireCppSuggestionDebounced: suppress b/c selection isFindFocused:${this.isFindFocused(Ye)} ${JSON.stringify(Vt)}`,
						);
						return;
					}
					this.fireCppSuggestionFromTrigger(It, Ye, ze, void 0, {
						...xt,
						modelVersion: Xe.getVersionId(),
						modelId: Xe.id,
						position: Ye.getPosition() ?? void 0,
					});
				}
				async fireCppSuggestionDebouncedDiffHistory(Ye, ze, Xe, It) {
					if (!ze) return;
					const Lt = ze.getModel(),
						xt = Lt?.uri;
					if (!xt) return;
					const Vt = ze.getSelection();
					if (
						Vt !== null &&
						(Vt.startLineNumber !== Vt.endLineNumber ||
							Vt.startColumn !== Vt.endColumn)
					)
						return;
					const { requestIdsToCancel: Bt, ...Gt } = this.Z.runRequest();
					this.R.forEach((Mt) => {
						Bt.includes(Mt.generationUUID) && Mt.abortController.abort();
					}),
						await this.formatDiffHistory(Ye, ze, Lt, It),
						this.getCurrentSuggestion() === void 0 &&
							this.fireCppSuggestionFromTrigger(xt, ze, Xe, void 0, {
								...Gt,
								modelVersion: Lt.getVersionId(),
								modelId: Lt.id,
								position: ze.getPosition() ?? void 0,
							});
				}
				async fireCppSuggestionFromTrigger(Ye, ze, Xe, It, Lt) {
					if (!this.isCppEnabled(ze)) {
						this.reallowCopilotIfWePreviousHidCopilotSuggestions();
						return;
					}
					const xt = ze.getModel();
					if (xt === null) return;
					if (
						this.getCurrentSuggestion() !== void 0 &&
						Xe !== le.CppSource.LinterErrors &&
						Xe !== le.CppSource.CursorPrediction
					) {
						z.$Jlc.get(ze)?.update();
						return;
					}
					let Vt;
					try {
						if (
							(Xe !== le.CppSource.CursorPrediction &&
								this.Nb().cppCachedTypeaheadEnabled !== !0 &&
								(this.R.forEach((ii) => {
									ii.source !== le.CppSource.CursorPrediction &&
										ii.abortController.abort();
								}),
								(this.R = this.R.filter(
									(ii) => ii.source === le.CppSource.CursorPrediction,
								))),
							this.gb && this.R.length > this.Vb)
						) {
							const ii = performance.now() + performance.timeOrigin;
							Ve(
								`[Cpp] stream debug info: Too many streams (${this.R.length}) streams (now: ${ii})`,
								JSON.stringify(
									this.R.map((Dt) => ({
										uuid: Dt.generationUUID,
										source: Dt.source,
										startTime: Dt.startTime,
									})),
								),
							);
						}
						for (
							this.mb.assert(
								this.R.length <= this.Vb,
								`The size of cppService this.streams is too big! ${this.R.length}`,
							);
							this.R.length >= this.Vb;
						)
							this.R.shift()?.abortController.abort();
						let Bt, Gt, Mt, Ut, ei;
						Lt !== void 0
							? ((Bt = Lt.abortController),
								(Vt = Lt.generationUUID),
								(Gt = Lt.startTime),
								(Mt = Lt.modelVersion),
								(Ut = Lt.modelId),
								(ei = Lt.position),
								this.R.push({ ...Lt, source: Xe }))
							: ((Vt = (0, o.$9g)()),
								(Bt = new AbortController()),
								(Gt = performance.now() + performance.timeOrigin),
								(Mt = xt.getVersionId()),
								(Ut = xt.id),
								(ei = ze.getPosition() ?? void 0),
								this.R.push({
									startTime: Gt,
									generationUUID: Vt,
									abortController: Bt,
									source: Xe,
									modelVersion: Mt,
									modelId: Ut,
									position: ei,
								})),
							(this.latestGenerationUUID = Vt);
						let mi = !1;
						if (
							(Bt.signal.addEventListener("abort", () => {
								(mi = !0),
									(this.R = this.R.filter((ii) => ii.generationUUID !== Vt));
							}),
							mi)
						)
							return;
						await this.immediatelyFireCppFromTrigger(Ye, ze, Bt, Vt, Gt, Xe, {
							overridePosition: It,
						});
					} catch (Bt) {
						console.error("Cpp: error", Bt, Bt?.stack),
							(this.R = this.R.filter((Gt) => Gt.generationUUID !== Vt));
					}
				}
				isCppEnabled(Ye) {
					return this.isAllowedCpp() && this.isCppEnabledForEditor(Ye);
				}
				allowCppTriggerInComments(Ye, ze) {
					if (
						this.ib.applicationUserPersistentStorage.cppTriggerInComments === !1
					) {
						const Xe = Ye.getModel();
						if (Xe === null) return !0;
						const It = Xe.getValue(),
							Lt = ze ?? Ye.getPosition();
						if (Lt === null || It === void 0)
							return (
								Ve("[Cpp] Bad Case: position or modelValue is undefined"), !0
							);
						if (Xe.getLineContent(Lt.lineNumber).trim() === "") {
							let Vt = Lt.lineNumber - 1,
								Bt = Lt.lineNumber + 1;
							for (; Vt > 0 && Xe.getLineContent(Vt).trim() === ""; ) Vt--;
							for (
								;
								Bt <= Xe.getLineCount() && Xe.getLineContent(Bt).trim() === "";
							)
								Bt++;
							const Gt =
									Vt > 0
										? Xe.getTokenTypeAtPosition_DANGEROUS_BECAUSE_COSTS_1_MS(
												new I.$hL(Vt, Xe.getLineMaxColumn(Vt)),
											)
										: null,
								Mt =
									Bt <= Xe.getLineCount()
										? Xe.getTokenTypeAtPosition_DANGEROUS_BECAUSE_COSTS_1_MS(
												new I.$hL(Bt, 1),
											)
										: null;
							if (
								Gt === Te.StandardTokenType.Comment &&
								Mt === Te.StandardTokenType.Comment
							)
								return (
									Ve("[Cpp] suppressing trigger because we are in a comment"),
									!1
								);
						} else if (
							Xe.getTokenTypeAtPosition_DANGEROUS_BECAUSE_COSTS_1_MS(Lt) ===
							Te.StandardTokenType.Comment
						)
							return (
								Ve("[Cpp] suppressing trigger because we are in a comment"), !1
							);
					}
					return !0;
				}
				usingFusedCursorPredictionModel() {
					return !!this.Nb()?.cppConfig?.isFusedCursorPredictionModel;
				}
				async immediatelyFireCppFromTrigger(Ye, ze, Xe, It, Lt, xt, Vt) {
					if (
						this.ib.applicationUserPersistentStorage.oneTimeSettings
							.shouldDisableGithubCopilot === !0
					)
						try {
							const ii = this.Bb.getValue("github.copilot");
							ii !== null &&
								typeof ii == "object" &&
								ii.enable["*"] === !0 &&
								this.lb.executeCommand("github.copilot.toggleCopilot");
						} finally {
							this.ib.setApplicationUserPersistentStorage(
								"oneTimeSettings",
								"shouldDisableGithubCopilot",
								!1,
							);
						}
					this.disableAndHideCopilotSuggestion(ze);
					const Bt = ze.getModel();
					if (Bt === null) return;
					const Gt = Bt.getValue(),
						Mt = Bt.getVersionId(),
						Ut = Vt?.overridePosition ?? ze.getPosition();
					if (Ut === null || Gt === void 0) {
						Ve("[Cpp] Bad Case: position or modelValue is undefined"),
							this.reallowCopilotIfWePreviousHidCopilotSuggestions();
						return;
					}
					if (
						this.usingFusedCursorPredictionModel() &&
						this.Cb.isShowingCursorPrediction(ze) &&
						xt !== le.CppSource.CursorPrediction &&
						xt !== le.CppSource.LineChange
					) {
						Ve(
							`[Cpp] Skipping because there is a displayed cursor prediction (source: ${xt})`,
						);
						return;
					}
					if (
						!this.allowCppTriggerInComments(ze, Ut) &&
						xt !== le.CppSource.CursorPrediction
					)
						return;
					if (this.overlapsInlineDiff(Ye, Ut.lineNumber)) {
						Ve("[Cpp] Skipping because we are in an inline diff.");
						return;
					}
					const ei = performance.now(),
						{ success: mi } =
							await this.immediatelyFireCppWithSpecifiedPosition({
								uri: Ye,
								editor: ze,
								position: Ut,
								abortController: Xe,
								generationUUID: It,
								modelValue: Gt,
								modelVersion: Mt,
								context: { startOfCpp: Lt },
								source: xt,
							});
					mi
						? this.disableAndHideCopilotSuggestion(ze)
						: (this.latestGenerationUUID === It &&
								this.reallowCopilotIfWePreviousHidCopilotSuggestions(),
							(this.R = this.R.filter((ii) => ii.generationUUID !== It))),
						this.ub.distribution({
							stat: "cppclient.immediatelyFire.getExpandedRange",
							value: ei - Lt,
						});
				}
				overlapsInlineDiff(Ye, ze) {
					const Xe = this.ib.nonPersistentStorage.inlineDiffs;
					if (Xe === void 0) return !1;
					const It = this.ib.nonPersistentStorage.inprogressAIGenerations.map(
						(Lt) => Lt.generationUUID,
					);
					return Xe.some((Lt) => {
						const xt = It.includes(Lt.generationUUID),
							Vt =
								ze >= Lt.currentRange.startLineNumber &&
								ze <= Lt.currentRange.endLineNumberExclusive,
							Bt = Ie.$dh.isEqual(Lt.uri, Ye) || Ye.fsPath === Lt.uri.fsPath;
						return xt && Vt && Bt;
					});
				}
				getModelValueAfterChange(Ye, ze, Xe) {
					try {
						const It = new R.default("sample-path", Ye.getValue()),
							Lt = new B.$kqb(
								ze.startLineNumber,
								ze.startColumn,
								ze.endLineNumberInclusive,
								ze.endColumn,
							).asZeroIndexed();
						return (
							It.applyChange(new O.$2qb(Xe, Lt, "sample-path", new Date())),
							It.content
						);
					} catch (It) {
						return console.error("Cpp: error", It), "<ERRORED>";
					}
				}
				updateRecentDiagnostics(Ye, ze) {
					const Xe = this.sb.read({ resource: Ye });
					let It,
						Lt = this.filterLinterErrors(Xe).map((Bt) => ({
							message: Bt.message,
							relatedInformation: Bt.relatedInformation ?? [],
							source: Bt.source,
							severity: (0, me.$O7b)(Bt.severity),
							uri: Ye.toString(),
							range: {
								startPosition: {
									line: Bt.startLineNumber,
									column: Bt.startColumn,
								},
								endPosition: { line: Bt.endLineNumber, column: Bt.endColumn },
							},
						}));
					Lt.length > 0 &&
						((Lt = Lt.filter(
							(Bt, Gt, Mt) =>
								Gt ===
								Mt.findIndex(
									(Ut) =>
										Ut.range.startPosition.line ===
											Bt.range.startPosition.line &&
										Ut.range.startPosition.column ===
											Bt.range.startPosition.column &&
										Ut.range.endPosition.line === Bt.range.endPosition.line &&
										Ut.range.endPosition.column ===
											Bt.range.endPosition.column &&
										Ut.message === Bt.message,
								),
						)),
						(It = new h.$4s({
							relativeWorkspacePath: this.nb.asRelativePath(Ye),
							errors: Lt,
							fileContents: void 0,
						})));
					const xt = It;
					xt !== void 0 &&
						xt.errors.length > 0 &&
						this.J.push(
							...xt.errors
								.filter((Bt) => Bt.range !== void 0)
								.map((Bt) => ({
									errors: [
										{
											...Bt,
											source: "",
											uri: Ye.toString(),
											relatedInformation: Bt.relatedInformation,
											severity:
												Bt.severity ??
												h.Diagnostic_DiagnosticSeverity.UNSPECIFIED,
											range: {
												startPosition: {
													line: Bt.range?.startPosition?.line || 0,
													column: Bt.range?.startPosition?.column || 0,
												},
												endPosition: {
													line: Bt.range?.endPosition?.line || 0,
													column: Bt.range?.endPosition?.column || 0,
												},
											},
										},
									],
									timestamp: Date.now(),
								})),
						),
						this.J.sort((Bt, Gt) => Gt.timestamp - Bt.timestamp),
						(this.J = this.J.filter(
							(Bt, Gt, Mt) =>
								Gt ===
								Mt.findIndex(
									(Ut) =>
										Ut.errors[0].range.startPosition.line ===
											Bt.errors[0].range.startPosition.line &&
										Ut.errors[0].range.startPosition.column ===
											Bt.errors[0].range.startPosition.column &&
										Ut.errors[0].range.endPosition.line ===
											Bt.errors[0].range.endPosition.line &&
										Ut.errors[0].range.endPosition.column ===
											Bt.errors[0].range.endPosition.column &&
										Ut.errors[0].message === Bt.errors[0].message &&
										Ut.errors[0].uri === Bt.errors[0].uri,
								),
						));
					const Vt = Xe.map((Bt) => ({
						message: Bt.message,
						relatedInformation: (0, ve.$S7b)(Bt.relatedInformation),
						source: Bt.source,
						uri: Ye.toString(),
						range: {
							startPosition: {
								line: Bt.startLineNumber,
								column: Bt.startColumn,
							},
							endPosition: { line: Bt.endLineNumber, column: Bt.endColumn },
						},
					}));
					(this.J = this.J.filter((Bt) =>
						Vt.some(
							(Gt) =>
								Gt.message === Bt.errors[0].message &&
								Gt.uri === Bt.errors[0].uri &&
								Gt.range.startPosition.line ===
									Bt.errors[0].range.startPosition.line &&
								Gt.range.startPosition.column ===
									Bt.errors[0].range.startPosition.column &&
								Gt.range.endPosition.line ===
									Bt.errors[0].range.endPosition.line &&
								Gt.range.endPosition.column ===
									Bt.errors[0].range.endPosition.column,
						),
					)),
						(this.J = this.J.filter(
							(Bt) => Date.now() - Bt.timestamp < 1e3 * 20,
						)),
						(this.J = this.J.slice(0, Math.min(this.J.length, 10)));
				}
				getRecentAndNearLocationLinterErrors(Ye, ze) {
					const Xe = this.sb.read({ resource: Ye });
					let It;
					const Lt = this.filterLinterErrors(Xe);
					let Vt = (ze !== void 0 ? [ze, ...Lt.filter((Gt) => Gt !== ze)] : Lt)
						.map((Gt) => ({
							message: Gt.message,
							relatedInformation: (0, ve.$S7b)(Gt.relatedInformation),
							source: Gt.source,
							range: {
								startPosition: {
									line: Gt.startLineNumber,
									column: Gt.startColumn,
								},
								endPosition: { line: Gt.endLineNumber, column: Gt.endColumn },
							},
							severity: (0, me.$O7b)(Gt.severity),
							uri: Ye.toString(),
						}))
						.slice(0, ct);
					const Bt = Date.now() - 2e4;
					return (
						Vt.push(
							...this.J.filter((Gt) => Gt.timestamp > Bt)
								.map((Gt) => Gt.errors)
								.flat()
								.slice(0, lt),
						),
						(Vt = Vt.filter(
							(Gt, Mt, Ut) =>
								Mt ===
								Ut.findIndex(
									(ei) =>
										ei.range.startPosition.line ===
											Gt.range.startPosition.line &&
										ei.range.startPosition.column ===
											Gt.range.startPosition.column &&
										ei.range.endPosition.line === Gt.range.endPosition.line &&
										ei.range.endPosition.column ===
											Gt.range.endPosition.column &&
										ei.message === Gt.message &&
										ei.uri === Gt.uri,
								),
						)),
						Vt.length > 0 &&
							(It = new h.$4s({
								relativeWorkspacePath: this.nb.asRelativePath(Ye),
								errors: Vt,
								fileContents: void 0,
							})),
						It
					);
				}
				showNearLocationLintErrorsToImportPredictionService({
					editor: Ye,
					uri: ze,
					isFromCursorMovement: Xe,
					source: It,
				}) {
					const Lt = Ye.getPosition();
					if (Lt === null) return;
					const xt = this.sb.read({ resource: ze });
					let Bt = this.filterLinterErrors(xt, S.MarkerSeverity.Warning).filter(
						(Gt) => Math.abs(Gt.startLineNumber - Lt.lineNumber) <= e.$8ed,
					);
					this.Jb.handleUpdatedLintErrors({
						openEditor: Ye,
						uri: ze,
						position: Lt,
						allMarkers: Bt,
						alwaysHandle: !Xe,
						source: It,
					});
				}
				overrideDiffHistory(Ye) {
					this.Wb = Ye;
				}
				async getGlobalDiffTrajectoriesAllowEvalOverride() {
					return !1
						? this.Wb
							? (console.warn("NOTE: Using overridden diff history"), this.Wb)
							: this.getGlobalDiffTrajectories()
						: this.getGlobalDiffTrajectories();
				}
				async getGlobalDiffTrajectories() {
					return await this.Eb.onlyLocalProvider?.runCommand(
						le.EditHistoryActions.CompileGlobalDiffTrajectories,
						{},
					);
				}
				debugPrintDiffTrajectories(Ye) {
					Ve("[--------------------------------"),
						Ve("[Diff Trajectories]"),
						Ye?.forEach((ze) => {
							Ve(`File: ${ze.fileName}`),
								ze.diffHistory.forEach((Xe) => {
									Ve(Xe);
								}),
								Ve("---");
						});
				}
				async getPartialCppRequest({
					editor: Ye,
					uri: ze,
					modelValue: Xe,
					modelVersion: It,
					position: Lt,
					source: xt,
					shouldRelyOnFileSyncForFile: Vt,
				}) {
					const Bt = this.getRecentAndNearLocationLinterErrors(ze),
						Gt = Ye.getModel();
					if (Gt === null) throw new Error("Model is null");
					const Mt = Gt.getEOL();
					let Ut;
					if (
						(ze.scheme === "vscode-notebook-cell" && Lt !== null
							? (Ut = await this.fastCurrentFileInfoForNotebooks(
									Gt,
									Ye,
									Lt,
									Vt,
								))
							: (Ut = await this.fastCurrentFileInfoDoesNotWorkForNotebooks(
									ze,
									Xe,
									Lt,
									Vt,
									It,
								)),
						Ut !== void 0 && Ut.cursorPosition !== void 0)
					) {
						const at = !Vt
							? this.Xb(Ut?.contents ?? "", Ut.cursorPosition.line, Mt, Gt)
							: Ut?.contents;
						Ut.contents = at ?? "";
					}
					if (this.S === void 0)
						throw new Error("Diffing provider is undefined");
					let ei;
					const mi = performance.now();
					let ii;
					const Dt = this.C.get(this.F(Gt));
					if (Dt === void 0) {
						const tt = await this.getGlobalDiffTrajectories();
						if (tt === void 0)
							throw new Error(
								"Compile Diff Trajectories not registered in extension host",
							);
						(ii = tt), this.C.set(this.F(Gt), ii);
					} else ii = Dt;
					const Jt = this.nb.asRelativePath(Gt.uri),
						si = ii.find((tt) => tt.fileName === Jt);
					if (si) {
						const tt = si.diffHistory.at(-1);
					}
					ei = {
						fileDiffHistories: ii,
						diffHistory: [],
						blockDiffPatches: [],
						mergedDiffHistories: [],
					};
					const Zt = performance.now();
					this.ub.distribution({
						stat: "cppclient.immediatelyFire.diffHistory",
						value: Zt - mi,
					});
					const ci = performance.now(),
						ri =
							this.Nb().cppConfig?.enableRvfTracking === !0
								? await this.Yb(Ye, ze)
								: [],
						$i = performance.now();
					this.ub.distribution({
						stat: "cppclient.immediatelyFire.additionalFiles",
						value: $i - ci,
					});
					const Wt =
						xt === le.CppSource.ManualTrigger
							? f.StreamCppRequest_ControlToken.OP
							: (this.ib.applicationUserPersistentStorage.cppControlToken ??
								void 0);
					return {
						...ei,
						linterErrors: Bt,
						currentFile: Ut,
						enableMoreContext: this.Nb().cppExtraContextEnabled,
						additionalFiles: ri,
						controlToken: Wt,
						cppIntentInfo: { source: xt },
						clientTime: Date.now(),
						clientTimezoneOffset: new Date().getTimezoneOffset(),
					};
				}
				async Yb(Ye, ze) {
					try {
						const Xe = this.Ab.visibleEditorPanes,
							It = [],
							Lt = this.nb.asRelativePath(ze),
							xt = (Mt, Ut) =>
								Ut.map((ei) => ({
									startLineNumber: ei.startLineNumber,
									startColumn: ei.startColumn,
									endLineNumber: ei.endLineNumber,
									endColumn: ei.endColumn,
									content: Mt.getValueInRange(ei)
										.split(Mt.getEOL())
										.map((mi) =>
											mi.length > 512 ? mi.substring(0, 512) + "..." : mi,
										)
										.join(`
`),
								}));
						for (const Mt of Xe) {
							const Ut = Mt.getControl();
							if (Ut !== void 0 && (0, c.$0sb)(Ut)) {
								if (Ut.getId() === Ye.getId()) continue;
								const ei = Ut.getModel();
								if (ei === null) continue;
								const mi = xt(ei, Ut.getVisibleRanges());
								It.push({
									relativeWorkspacePath: this.nb.asRelativePath(ei.uri),
									visibleRangeContent: mi.map((ii) => ii.content),
									startLineNumberOneIndexed: mi.map((ii) => ii.startLineNumber),
									visibleRanges: mi.map((ii) => ({
										startLineNumber: ii.startLineNumber,
										endLineNumberInclusive: ii.endLineNumber,
									})),
									isOpen: !0,
									lastViewedAt: void 0,
								});
							}
						}
						const Vt = [],
							Bt = new t.$Zc();
						try {
							for (const [Mt, Ut] of this.j.entries())
								if (ze !== Mt)
									try {
										const ei = this.nb.asRelativePath(Mt);
										if (
											ei === void 0 ||
											It.find((mi) => mi.relativeWorkspacePath === ei) ||
											Lt === ei
										)
											continue;
										if (Ut.lastViewedAt < Date.now() - gt) Vt.push(Mt);
										else if (this.jb.canHandleResource(Mt)) {
											let mi;
											(mi = await this.jb.createModelReference(Mt)), Bt.add(mi);
											const ii = mi.object.textEditorModel;
											if (ii === void 0) continue;
											if (ii.getValueLength() > Re) {
												Vt.push(Mt);
												continue;
											}
											const Dt = xt(ii, Ut.visibleRanges);
											It.push({
												relativeWorkspacePath: ei,
												isOpen: !1,
												visibleRangeContent: Dt.map((Jt) => Jt.content),
												startLineNumberOneIndexed: Dt.map(
													(Jt) => Jt.startLineNumber,
												),
												visibleRanges: Dt.map((Jt) => ({
													startLineNumber: Jt.startLineNumber,
													endLineNumberInclusive: Jt.endLineNumber,
												})),
												lastViewedAt: Ut.lastViewedAt,
											});
										}
									} catch (ei) {
										Ze(
											`[Cpp] Additonal file info: error in recentlyViewedFileURI error: ${ei} ${ei.stack}`,
										),
											Vt.push(Mt);
										continue;
									}
						} finally {
							Bt.dispose();
						}
						for (const Mt of Vt) this.j.delete(Mt);
						return It.sort((Mt, Ut) =>
							Mt.isOpen !== Ut.isOpen
								? Mt.isOpen
									? 1
									: -1
								: Mt.lastViewedAt === void 0 || Ut.lastViewedAt === void 0
									? 0
									: Mt.lastViewedAt - Ut.lastViewedAt,
						);
					} catch (Xe) {
						return (
							Ze(
								`[Cpp] Bad Case: Error in getAdditionalFilesInfo: ${Xe} stack: ${Xe.stack}`,
							),
							[]
						);
					}
				}
				getWorkspaceId() {
					let Ye = this.ib.workspaceUserPersistentStorage.uniqueCppWorkspaceId;
					return (
						Ye === void 0 &&
							((Ye =
								Math.random().toString(36).substring(2, 15) +
								Math.random().toString(36).substring(2, 15)),
							this.ib.setWorkspaceUserPersistentStorage(
								"uniqueCppWorkspaceId",
								Ye,
							)),
						`${Ye}-${e.$7ed}`
					);
				}
				isReferenceFocused(Ye) {
					if (!this.ib.applicationUserPersistentStorage.cppInPeek) return !1;
					const ze = this.hb.getActiveCodeEditor();
					if (ze === null) return !1;
					const Xe = ae.$EOb.get(ze)?.getWidget();
					return Xe !== void 0 && Xe.hasFocus() && Xe.getPreviewEditor() === Ye;
				}
				isFindActive(Ye) {
					if (
						this.ib.applicationUserPersistentStorage.cppInCmdF !== !0 ||
						Ye === void 0
					)
						return !1;
					const ze = Ue.$ufc.get(Ye);
					return ze instanceof Ue.$vfc && ze.isActive();
				}
				isFindFocused(Ye) {
					if (!this.ib.applicationUserPersistentStorage.cppInCmdF)
						return (
							Ve("[Cpp] isFindFocused: suppress b/c cppInCmdF is false"), !1
						);
					if (Ye === void 0) return !1;
					const ze = Ue.$ufc.get(Ye);
					if (ze === null) return !1;
					try {
						if (!ze.isFindInputFocused()) return !1;
					} catch {
						return !1;
					}
					const Xe = Ye.getSelection();
					return Xe !== null && !Xe.isEmpty();
				}
				Zb() {
					if (!this.ib.applicationUserPersistentStorage.cppInCmdF) return;
					const Ye = this.hb.getActiveCodeEditor();
					if (Ye !== null && this.isFindActive(Ye)) {
						const ze = Ue.$ufc.get(Ye);
						ze instanceof Ue.$vfc && ze.focusFindInputWithoutSelecting();
					}
				}
				isProblemFocused(Ye) {
					if (!this.ib.applicationUserPersistentStorage.cppInPeek || !Ye)
						return !1;
					const ze = this.hb.getActiveCodeEditor();
					return Ye !== ze
						? !1
						: (this.Fb.getActiveViewWithId(
								$e.Markers.MARKERS_VIEW_ID,
							)?.isFocused() ?? !1);
				}
				isTextFocusedOrSimilarlyFocused(Ye) {
					return Ye
						? Ye.hasTextFocus() ||
								this.isReferenceFocused(Ye) ||
								this.isProblemFocused(Ye) ||
								this.isFindFocused(Ye)
						: !1;
				}
				getFocusedCodeEditor() {
					const Ye = this.hb.getActiveCodeEditor();
					return Ye?.hasTextFocus() === !0
						? Ye
						: (this.hb
								.listCodeEditors()
								.find((ze) => this.isTextFocusedOrSimilarlyFocused(ze)) ?? Ye);
				}
				getNotebookCellInfo(Ye, ze, Xe) {
					if (!Ye.uri.scheme.startsWith("vscode-notebook-cell")) return null;
					const It = G.CellUri.parse(Ye.uri),
						Lt = this.zb.getNotebookEditorByCellEditorId(ze.getId());
					if (!It || !Lt)
						return (
							Ve("[Cpp] Bad Case: cellUri or notebookEditor is undefined"), null
						);
					const xt = Lt.getCellByHandle(It.handle);
					if (!xt) return Ve("[Cpp] Bad Case: cell is undefined"), null;
					const Bt = Lt?.textModel?.cells?.map((ii) => ii.getValue()),
						Gt = Lt.getCellsBefore(xt),
						Ut = Lt.getCellsAfter(xt)?.map((ii) => ii.model.getValue()),
						ei = Gt?.map((ii) => ii.model.getValue());
					return ei === void 0
						? (Ve("[Cpp] Bad Case: prevCellValues is undefined"), null)
						: !Bt || !ei
							? (Ve(
									"[Cpp] Bad Case: cellValues or prevCellValues is undefined",
								),
								null)
							: {
									numLinesAddedBefore:
										ei.length === 0 ? 0 : ei.join(Xe).split(Xe).length,
									cellValues: Bt,
									prevCellValues: ei,
									cell: xt,
									afterCellValues: Ut,
								};
				}
				getModelName() {
					return this.Nb().cppModel !== "" ? this.Nb().cppModel : void 0;
				}
				async immediatelyFireCppWithSpecifiedPosition({
					uri: Ye,
					editor: ze,
					position: Xe,
					abortController: It,
					generationUUID: Lt,
					modelValue: xt,
					modelVersion: Vt,
					context: Bt,
					source: Gt,
				}) {
					if (this.S === void 0)
						return (
							Ve("[Cpp] Bad Case: diffingProvider is undefined"),
							{ success: !1 }
						);
					this.fastPeriodicallyReloadCppConfig();
					const Mt =
							(await this.Eb.onlyLocalProvider?.runCommand(
								le.FileSyncActions.ShouldRelyOnFileSyncForFile,
								{
									relativeWorkspacePath: this.nb.asRelativePath(Ye),
									modelVersion: Vt,
								},
							)) ?? !1,
						Ut = this.Nb().cppConfig;
					if (
						(!Mt || !Ut?.enableFilesyncDebounceSkipping) &&
						(await this.Z.shouldDebounce(Lt))
					)
						return { success: !1 };
					const ei = performance.now();
					let mi;
					try {
						mi = await this.getPartialCppRequest({
							editor: ze,
							uri: Ye,
							modelValue: xt,
							modelVersion: Vt,
							position: Xe,
							source: Gt,
							shouldRelyOnFileSyncForFile: Mt,
						});
					} catch (li) {
						return (
							Ve(`[Cpp] Bad Case: Error in getPartialCppRequest: ${li}`),
							{ success: !1 }
						);
					}
					const ii = ze.getModel();
					if (ii === null)
						return Ve("[Cpp] Bad Case: model is null"), { success: !1 };
					let Dt = this.ib.workspaceUserPersistentStorage.uniqueCppWorkspaceId;
					Dt === void 0 &&
						((Dt =
							Math.random().toString(36).substring(2, 15) +
							Math.random().toString(36).substring(2, 15)),
						this.ib.setWorkspaceUserPersistentStorage(
							"uniqueCppWorkspaceId",
							Dt,
						)),
						Gt !== le.CppSource.CursorPrediction &&
							!this.Cb.onlyTriggerOnCppAccept() &&
							this.Cb.getAndShowNextPrediction({
								editor: ze,
								triggerCppCallback:
									this.fireCppSuggestionFromTrigger.bind(this),
								getLinterErrors:
									this.getRecentAndNearLocationLinterErrors.bind(this),
								source: b.CursorPrediction_CursorPredictionSource.ALWAYS_ON,
							});
					const Jt = ii.getVersionId(),
						si = (0, H.$cfc)(ii);
					It.signal.addEventListener("abort", () => {
						this.S?.cancelCpp(Lt);
					}),
						this.X !== void 0 &&
							this.ub.distribution({
								stat: "cppclient.beforeStreamCpp",
								value: performance.now() - this.X,
							}),
						(this.y = Lt),
						await this.S.streamCpp(
							Ke.$Te.wrap(
								new f.$QG({
									...mi,
									modelName: this.getModelName(),
									diffHistoryKeys: [],
									contextItems: [],
									parameterHints: this.xb.getRelevantType(ze),
									lspContexts: [],
									filesyncUpdates: [],
									workspaceId: Dt,
									timeSinceRequestStart:
										performance.now() + performance.timeOrigin - Bt.startOfCpp,
									timeAtRequestSend: Date.now(),
								}).toBinary(),
							),
							{ generateUuid: Lt, startOfCpp: Bt.startOfCpp },
						);
					const Zt = this.S,
						ci = this.streamCpp(It, Zt, Lt, { startOfCpp: Bt.startOfCpp });
					if (ci == null)
						return (
							Ve("[Cpp] Bad Case: cppStream is null or undefined"),
							{ success: !1 }
						);
					const ri = ci[Symbol.asyncIterator]();
					let $i,
						Wt = null,
						tt,
						at,
						pi;
					for (;;) {
						const li = await ri.next();
						if (li.done) {
							if (It.signal.aborted) return { success: !1 };
							Ze("[Cpp] Bad Case: stream ended before finding range");
							break;
						}
						const Vi = li.value;
						if (Vi.case === "rangeToReplaceOneIndexed") {
							(at = new h.$Ms(Vi.range)),
								(pi = ii.getValueInRange({
									startLineNumber: at.startLineNumber,
									startColumn: 1,
									endLineNumber: at.endLineNumberInclusive,
									endColumn: ii.getLineMaxColumn(at.endLineNumberInclusive),
								}));
							break;
						}
					}
					if (pi === void 0 || at === void 0)
						return (
							Ze("[Cpp] Bad Case: did not find rewriteRange from stream"),
							{ success: !1 }
						);
					const Li = (0, o.$9g)();
					if (((this.db = Li), this.usingFusedCursorPredictionModel())) {
						const li = (0, He.$4ed)(ri);
						($i = await li.text), (Wt = li.fusedCursorPrediction);
					} else
						this.Nb().chunkedStreamingEnabledV2 === !0
							? ([$i, tt] = await (0, He.$2ed)(
									ri,
									pi,
									(Xe.lineNumber ?? 1) - at.startLineNumber,
								))
							: ($i = await (0, He.$3ed)(ri));
					Ve(
						`[cppService:immediatelyFire] modelOutputText: ${JSON.stringify($i)}`,
					);
					const Di = new h.$Fs({
						startLineNumber: at.startLineNumber,
						startColumn: 1,
						endLineNumberInclusive: at.endLineNumberInclusive,
						endColumn: ii.getLineMaxColumn(at.endLineNumberInclusive),
					});
					if (It.signal.aborted) return { success: !1 };
					if (
						((this.w = Lt),
						this.rb.recordCppTriggerEvent(
							ii,
							Lt,
							new b.$Ov({
								lineNumberOneIndexed: Xe.lineNumber,
								columnOneIndexed: Xe.column,
							}),
							Gt,
						),
						this
							.pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING ===
							!0)
					)
						return Ve("[Cpp] Bad Case: triggering is paused"), { success: !1 };
					const Ui = ii.getEOL(),
						Wi = this.getNotebookCellInfo(ii, ze, Ui),
						Gi = await this.Gb.isValidCppCase({
							model: ii,
							modelOutputText: $i,
							startingRange: new h.$Fs(Di),
							notebookInfo: Wi,
							eol: Ui,
						}),
						qi = (li) => {
							It.signal.aborted ||
								this.rb.recordFinishedCppGeneration(
									ii,
									this.createRecoverableData({
										requestId: Lt,
										diffText: li,
										startingRange: Di,
										selection: Di,
									}),
								);
						};
					if (!Gi.valid) {
						const li = await Wt;
						return Li !== this.db
							? { success: !1 }
							: (li !== null &&
									(this.ab
										? Ve(
												"[Cpp] Suppressing cursor prediction because the last cursor movement was a cursor prediction",
											)
										: this.isFusedCursorPredictionTooCloseToCursor(li, Xe)
											? Ve(
													"[Cpp] Suppressing cursor prediction because it is too close to the cursor",
												)
											: this.isFusedCursorPredictionTooCloseToPreviouslyAcceptedSuggestion(
														li,
													)
												? Ve(
														`[Cpp] Suppressing cursor prediction because it is too close to a previously accepted suggestion (previous: ${JSON.stringify(this.cb)})`,
													)
												: (Ve(
														"[Cpp] Showing cursor prediction immediately because the edit suggestion was suppressed",
													),
													await this.displayFusedCursorPrediction({
														editor: ze,
														model: ii,
														fusedCursorPrediction: li,
														oldText: "",
														newText: "",
													}))),
								{ success: !1 });
					}
					($i = Gi.modelOutputText),
						Wt?.then((li) => {
							this.uponFusedCursorPredictionReady(Li, li);
						});
					const Oi = this.Hb.createUnseenSuggestion({
						model: si,
						diffText: $i,
						startingRange: Di,
						eol: Ui,
						requestId: Lt,
						modelVersionWhenInvoked: Jt,
						selection: Di,
						source: Gt,
						suggestionTriggerTime: Bt.startOfCpp,
						fusedCursorPredictionId: Li,
					});
					if (Oi === void 0)
						return (
							Ve("[Cpp] Bad Case: cppSuggestion is undefined"), { success: !1 }
						);
					const yi = performance.now();
					this.ub.distribution({
						stat: "cppclient.immediatelyFire",
						value: yi - ei,
					});
					let Ai;
					return (
						this.y !== Lt ||
						this.getCurrentSuggestion() !== void 0 ||
						ii.getVersionId() !== Jt ||
						(this.Nb().cppAutoImportEnabled &&
							this.Jb.isShowingImportSuggestion())
							? ((Ai = !0),
								this.N.addSuggestion({ ...Oi, abortController: It }, ii, ze))
							: (this.Ub(Oi), (Ai = this.displayCppSuggestion(ze, ii, Oi))),
						tt !== void 0 && Ai && !It.signal.aborted
							? tt.then((li) => {
									It.signal.aborted ||
										(qi(li),
										this.generateFollowupSuggestion(ze, li, ii, Oi, Xe, Ui),
										(this.R = this.R.filter((Vi) => Vi.generationUUID !== Lt)));
								})
							: tt === void 0 &&
								(qi($i),
								(this.R = this.R.filter((li) => li.generationUUID !== Lt))),
						{ success: Ai }
					);
				}
				isFusedCursorPredictionTooCloseToCursor(Ye, ze) {
					return Math.abs(Ye.lineNumberOneIndexed - ze.lineNumber) < 5;
				}
				isFusedCursorPredictionTooCloseToPreviouslyAcceptedSuggestion(Ye) {
					return this.cb.some(
						(ze) =>
							Math.abs(ze.position.lineNumber - Ye.lineNumberOneIndexed) < 5 &&
							ze.uri.path.includes(Ye.relativePath),
					);
				}
				generateFollowupSuggestion(Ye, ze, Xe, It, Lt, xt) {
					const Vt = (0, H.$efc)(Xe, {
						range: (0, xe.$79b)(It.range),
						text: It.replaceText,
					});
					let Bt = It.startingSuggestionRange;
					const Gt = () => {
							if (
								Bt.endLineNumberInclusive >= Vt.getLineCount() &&
								Lt.lineNumber === Bt.endLineNumberInclusive
							) {
								const Ut = Vt.getLineCount(),
									ei = Vt.getValueInRange({
										startLineNumber: Ut,
										startColumn: 1,
										endLineNumber: Ut + 1,
										endColumn: 1,
									});
								return new h.$Fs({
									...Bt,
									endLineNumberInclusive: Ut,
									endColumn: ei.length,
								});
							}
							return Bt;
						},
						Mt = this.getCurrentSuggestion();
					if (
						Mt === void 0 &&
						this.u?.requestId === It.requestId &&
						this.u?.modelVersion === Xe.getVersionId() &&
						this.u?.modelId === Xe.id
					) {
						Bt = Gt();
						const Ut = this.Hb.createUnseenSuggestion({
							model: Vt,
							diffText: ze,
							startingRange: Bt,
							eol: xt,
							requestId: It.requestId,
							selection: It.selection,
							source: It.source,
							modelVersionWhenInvoked: It.modelVersionWhenInvoked,
							suggestionTriggerTime: It.suggestionTriggerTime,
							fusedCursorPredictionId: void 0,
						});
						if (Ut === void 0) return;
						this.displayCppSuggestion(Ye, Xe, Ut);
					} else if (Mt?.uniqueId !== It.uniqueId)
						if (this.N.getMatchingSuggestion(It.uniqueId) !== void 0) {
							const ei = this.Hb.createUnseenSuggestion({
								model: Xe,
								diffText: ze,
								source: It.source,
								eol: xt,
								requestId: It.requestId,
								selection: It.selection,
								startingRange: Bt,
								modelVersionWhenInvoked: It.modelVersionWhenInvoked,
								suggestionTriggerTime: It.suggestionTriggerTime,
								fusedCursorPredictionId: void 0,
							});
							if (ei === void 0) return;
							this.N.replaceSuggestionOnChunkedFollowup(It.uniqueId, ei);
						} else return;
					else {
						Bt = Gt();
						const Ut = this.Hb.createUnseenSuggestion({
							model: Vt,
							diffText: ze,
							startingRange: Bt,
							eol: xt,
							requestId: It.requestId,
							selection: It.selection,
							source: It.source,
							modelVersionWhenInvoked: It.modelVersionWhenInvoked,
							suggestionTriggerTime: It.suggestionTriggerTime,
							fusedCursorPredictionId: void 0,
						});
						if (Ut === void 0) return;
						this.M.addSuggestion(Ut),
							this.createOrUpdateSuggestionState({
								onAcceptDisplayId: Ut.uniqueId,
							});
					}
				}
				getCurrentReplaceText(Ye) {
					const ze = this.getCurrentSuggestion();
					if (ze === void 0) return;
					const Xe = (0, J.$87)(Ye, ze);
					return Xe === null
						? void 0
						: Ye.getValueInRange({
								startLineNumber: Xe.startLineNumber,
								startColumn: Xe.startColumn,
								endLineNumber: Xe.endLineNumber,
								endColumn: Xe.endColumn,
							});
				}
				updateVisibleSuggestionText(Ye, ze, Xe, It, Lt, xt) {
					let Vt = Xe.startLineNumber,
						Bt = 1,
						Gt = [];
					for (const Ut of ze) {
						const ei = Ut.value.split(xt),
							mi = Vt + ei.length - 1,
							ii =
								ei.length > 1
									? ei[ei.length - 1].length + 1
									: Bt + Ut.value.length;
						Ut.added === !0
							? Gt.push({ range: new g.$iL(Vt, Bt, Vt, Bt), text: Ut.value })
							: Ut.removed === !0 &&
								Gt.push({ range: new g.$iL(Vt, Bt, mi, ii), text: "" }),
							Ut.added !== !0 && ((Bt = ii), (Vt = mi));
					}
					const Mt = (0, x.$Ged)(Gt, It);
					if (
						(It.pushEditOperations([], Gt, () => null, Lt),
						Gt.every(
							(Ut) =>
								Ut.range.endLineNumber === Ut.range.startLineNumber &&
								Ut.range.endColumn === Ut.range.startColumn,
						))
					) {
						if (
							Mt.range.startLineNumber === Mt.range.endLineNumber &&
							!Mt.text.includes(`
`)
						)
							Ye.setPosition(
								new I.$hL(
									Mt.range.startLineNumber,
									Mt.range.startColumn + Mt.text.length,
								),
							);
						else if (Gt.length === 1) {
							const Ut = Ye.getPosition();
							if (Ut === null) return;
							const ei = g.$iL.fromPositions(
								Ut,
								new I.$hL(Mt.range.startLineNumber, Mt.range.startColumn),
							);
							if (It.getValueInRange(ei).trim().length === 0) {
								const mi = (0, x.$Hed)(Mt);
								Ye.setPosition(mi);
							}
						}
					}
				}
				getStreamingSuggestionRange(Ye, ze, Xe) {
					const It = Ye.split(Xe);
					return {
						startLineNumber: ze.startLineNumber,
						startColumn: ze.startColumn,
						endLineNumber: ze.startLineNumber + It.length + 1,
						endColumn: It[It.length - 1].length,
					};
				}
				createOrUpdateStreamingBackgroundDecoration(Ye, ze, Xe) {
					const It = Ye.getEOL(),
						Lt = this.getStreamingSuggestionRange(Xe.replaceText, ze, It);
					return Ye.deltaDecorations(
						[],
						[
							{
								range: Lt,
								options: {
									description: "cpp suggestion streaming indicator",
									className: bt,
									stickiness:
										m.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
								},
							},
						],
					)[0];
				}
				clearAllGreenHighlights(Ye) {
					this.decIdsThatAreNotInReactiveStorage.green.length > 0 &&
						(this.decIdsThatAreNotInReactiveStorage.green = Ye.deltaDecorations(
							this.decIdsThatAreNotInReactiveStorage.green,
							[],
						));
				}
				getSuggestionDecorationOptions(Ye, ze) {
					let Xe;
					return (
						(Xe = {
							description: "cpp suggestion",
							className:
								ze && this.Nb().cppConfig?.isGhostText !== !0
									? ft
									: "<NO_CLASS_DEFINED_CPP>",
							stickiness: m.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges,
						}),
						{
							range: {
								startLineNumber: Ye.startLineNumber,
								startColumn: Ye.startColumn,
								endLineNumber: Ye.endLineNumberInclusive,
								endColumn: Ye.endColumn,
							},
							options: Xe,
						}
					);
				}
				showCursorHighlight() {
					(0, A.$rwc)(
						`.monaco-editor .cursors-layer .cursor {
			background-color: var(--vscode-textLink-foreground) !important;
			border-color: var(--vscode-textLink-foreground) !important;
			color: var(--vscode-textLink-foreground) !important;
			animation: cursorBump 0.2s;
		}
		@keyframes cursorBump {
			0% { transform: scale(1) rotate(0deg); opacity: 1 !important; }
			50% { transform: scale(2) rotate(180deg); opacity: 1 !important; }
			100% { transform: scale(1) rotate(360deg); opacity: 1 !important; }
		}`,
						"cppCursorHighlightClassName",
					);
				}
				hideCursorHighlight() {
					(0, A.$rwc)("", "cppCursorHighlightClassName");
				}
				createSuggestionDecoration(Ye, ze, Xe) {
					return (
						this.Nb().cppHighlightCursor === !0 &&
							((Xe = !1), this.showCursorHighlight()),
						Ye.deltaDecorations(
							[],
							[this.getSuggestionDecorationOptions(ze, Xe)],
						)[0]
					);
				}
				removeStreamingBackgroundDecoration(Ye, ze) {
					Ye.deltaDecorations([ze], []);
				}
				updateSuggestionStateHalfSilently(Ye) {
					const ze = this.Ob().cppState;
					if (!(ze === void 0 || ze.suggestion === void 0))
						return this.createOrUpdateSuggestionStateHalfSilently(Ye);
				}
				createOrUpdateSuggestionStateHalfSilently(Ye) {
					this.Ob().cppState !== void 0 &&
						this.ib.setNonPersistentStorage("cppState", "suggestion", (Xe) =>
							Xe === void 0 ? Ye : { ...Xe, ...Ye },
						);
				}
				updateSuggestionState(Ye) {
					const ze = this.Ob().cppState;
					if (!(ze === void 0 || ze.suggestion === void 0))
						return this.createOrUpdateSuggestionState(Ye);
				}
				createOrUpdateSuggestionState(Ye) {
					this.Ob().cppState !== void 0 &&
						this.ib.setNonPersistentStorage("cppState", (Xe) => {
							if (Xe === void 0) return;
							const It = Xe.suggestion;
							return { ...Xe, suggestion: It ? { ...It, ...Ye } : Ye };
						});
				}
				textEqualsCurrentRange(Ye, ze, Xe) {
					return (
						Ye.getValueInRange({
							startLineNumber: Xe.startLineNumber,
							startColumn: Xe.startColumn,
							endLineNumber: Xe.endLineNumberInclusive,
							endColumn: Xe.endColumn,
						}) === ze
					);
				}
				createRecoverableData({
					requestId: Ye,
					diffText: ze,
					startingRange: Xe,
					selection: It,
				}) {
					return {
						requestId: Ye,
						suggestionText: ze,
						suggestionRange: {
							startLineNumber: Xe.startLineNumber,
							startColumn: Xe.startColumn,
							endLineNumber: Xe.endLineNumberInclusive,
							endColumn: Xe.endColumn,
						},
						position: {
							lineNumberOneIndexed: It.startLineNumber,
							columnOneIndexed: It.startColumn,
						},
					};
				}
				displayCppSuggestion(Ye, ze, Xe) {
					if (this.textEqualsCurrentRange(ze, Xe.replaceText, Xe.range))
						return (
							Ve("[Cpp] Bad Case: Suggestion text matches current text"), !1
						);
					if (
						this
							.pauseCppTriggeringUntilUnpaused_DANGEROUS_ONLY_SET_IF_YOU_KNOW_WHAT_YOU_ARE_DOING ===
						!0
					)
						return Ve("[Cpp] Bad Case: triggering is paused"), !1;
					const It = this.getCurrentSuggestion();
					if (
						It !== void 0 &&
						It.source !== le.CppSource.CursorPrediction &&
						Xe.source === le.CppSource.CursorPrediction
					)
						return !1;
					It !== void 0 &&
						(It.source !== le.CppSource.CursorPrediction &&
							console.info(
								"[Cpp] Bad Case: Clearing suggestion because it already exists",
							),
						this.clearSuggestions());
					const Lt = ze.getLineMaxColumn(
							Xe.startingSuggestionRange.endLineNumberInclusive,
						),
						xt = { ...Xe.startingSuggestionRange, endColumn: Lt },
						Vt = this.createSuggestionDecoration(ze, xt, !0),
						Bt = { ...Xe, decorationId: Vt };
					this.createOrUpdateSuggestionState(Bt);
					const Gt = this.getCurrentSuggestion(),
						Mt = Xe.startingSuggestionRange,
						Ut = this.createRecoverableData({
							requestId: Xe.requestId,
							diffText: Xe.diffText,
							startingRange: Mt,
							selection: Xe.selection,
						});
					return (
						Gt
							? this.rb.recordCppSuggestionEvent(ze, Gt, Ut)
							: this.rb.recordCppSuggestionEvent(ze, Bt, Ut),
						(this.z = Ut.requestId),
						this.Nb().cppAutoImportEnabled && this.Jb.showCorrectUI(Ye),
						!0
					);
				}
				getCurrentSuggestion() {
					return this.Ob().cppState?.suggestion;
				}
				updateSuggestionGreenHighlights(Ye, ze, Xe, It = !0) {
					const Lt = (0, J.$87)(Ye, ze);
					if (Lt === null) return;
					const { greenRanges: xt } = (0, s.$Eqb)(Xe, Lt, "post-change");
					this.getCurrentSuggestion() &&
						(this.updateSuggestionStateHalfSilently({ greens: xt }),
						this.Nb().cppAutoImportEnabled && this.Jb.handleNewGreens(Ye, xt),
						It &&
							((this.didShowGreenHighlights = !0),
							(this.decIdsThatAreNotInReactiveStorage.green =
								Ye.deltaDecorations(
									this.decIdsThatAreNotInReactiveStorage.green,
									xt.map((Bt) => ({
										range: {
											startLineNumber: Bt.startLineNumber,
											startColumn: Bt.startColumn,
											endLineNumber: Bt.endLineNumber,
											endColumn: Bt.endColumn,
										},
										options: {
											description: "green",
											className: q.$Bcc,
											stickiness:
												m.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
										},
									})),
								)),
							this.mb.assert(
								this.decIdsThatAreNotInReactiveStorage.green.length < 50,
								"Too many green decorations from cpp",
							)));
				}
				makeEditsForNextWordAccept({
					model: Ye,
					suggestion: ze,
					editor: Xe,
					changes: It,
				}) {
					const Lt = Xe.getPosition();
					if (Lt === null) return { type: J.AcceptResult.NotAccepted };
					const xt = ze.decorationId,
						Vt = Ye.getDecorationRange(xt);
					if (Vt === null) return { type: J.AcceptResult.NotAccepted };
					const Bt = this.Db.getLanguageConfiguration(Ye.getLanguageId()),
						Gt = (0, ue.$Ned)(It, Lt, Vt.getStartPosition(), Bt);
					if (Gt.type === J.AcceptResult.NotAccepted)
						return { type: J.AcceptResult.NotAccepted };
					{
						if (Gt.edit.text === Ye.getValueInRange(Gt.edit.range))
							return { type: J.AcceptResult.NotAccepted };
						const Mt = Ye.getValueInRange(
								g.$iL.fromPositions(
									Vt.getStartPosition(),
									Gt.edit.range.getStartPosition(),
								),
							),
							Ut = Ye.getValueInRange(
								g.$iL.fromPositions(
									Gt.edit.range.getEndPosition(),
									Vt.getEndPosition(),
								),
							);
						if (Mt + Gt.edit.text + Ut === ze.replaceText)
							return { type: J.AcceptResult.AcceptedAll };
						{
							const mi = Ye.pushEditOperations(
								[oe.$kL.fromPositions(Lt, Lt)],
								[Gt.edit],
								(ii) => {
									const Dt = ii[0].range.getEndPosition();
									return [oe.$kL.fromPositions(Dt, Dt)];
								},
							);
							return (
								this.L.addEdit(Gt.edit),
								mi && Xe.setPosition(mi[0].getSelectionStart()),
								Gt
							);
						}
					}
				}
				async makeChangesOnAcceptCppSuggestion({
					model: Ye,
					eol: ze,
					suggestion: Xe,
					editor: It,
					abortController: Lt,
					onlyAcceptFirstWord: xt,
				}) {
					let Vt = !1;
					Lt?.signal.addEventListener("abort", () => {
						Vt = !0;
					});
					let Bt = (0, J.$87)(Ye, Xe);
					if (!Bt) return { type: J.AcceptResult.NotAccepted };
					let Gt = Xe.originalText ?? "";
					const Mt = Xe.replaceText ?? "",
						{ changes: Ut } = await this.wb.wordDiff(Gt, Mt);
					if (Vt) return { type: J.AcceptResult.NotAccepted };
					const ei = async (ii) => {
							this.updateVisibleSuggestionText(
								It,
								Ut,
								ii,
								Ye,
								Xe.undoRedoGroup,
								ze,
							);
							const { wordDiffs: Dt, charDiffs: Jt } = (0, qe.$wlc)(
									Xe.originalText ?? "",
									Mt,
									ze,
								),
								Zt =
									this.Q.get(Xe.decorationId) === E.CppSuggestionType.PreviewBox
										? Dt
										: Jt;
							return (
								this.updateSuggestionGreenHighlights(Ye, Xe, Zt),
								this.updateSuggestionState({
									suggestionIsCurrentlyHidden: !1,
									hasBeenSeen: !0,
								}),
								{ type: J.AcceptResult.AcceptedAll }
							);
						},
						mi = async (ii) => {
							const Dt = this.makeEditsForNextWordAccept({
								model: Ye,
								suggestion: Xe,
								editor: It,
								changes: Ut,
							});
							if (Dt.type === J.AcceptResult.NotAccepted) return Dt;
							if (Dt.type === J.AcceptResult.AcceptedAll) return await ei(ii);
							{
								this.updateSuggestionState({
									suggestionIsCurrentlyHidden: !0,
									hasBeenSeen: !0,
								});
								const Jt = Ye.getValueInRange(ii),
									{ wordDiffs: si, charDiffs: Zt } = (0, qe.$wlc)(
										Xe.originalText ?? "",
										Jt,
										ze,
									),
									ri =
										this.Q.get(Xe.decorationId) ===
										E.CppSuggestionType.PreviewBox
											? si
											: Zt;
								return this.updateSuggestionGreenHighlights(Ye, Xe, ri), Dt;
							}
						};
					return xt ? await mi(Bt) : await ei(Bt);
				}
				increaseCppUsage() {
					this.ib.setApplicationUserPersistentStorage(
						"cppShown",
						(Ye) => (Ye ?? 0) + 1,
					);
				}
				getHiddenSuggestion(Ye, ze) {
					const Xe = this.getCurrentSuggestion();
					return Xe === void 0 || !Xe.suggestionIsCurrentlyHidden ? null : Xe;
				}
				getVisibleSuggestion() {
					const Ye = this.getCurrentSuggestion();
					return Ye === void 0 || Ye.suggestionIsCurrentlyHidden ? null : Ye;
				}
				disableAndHideCopilotSuggestion(Ye) {
					this.editorThatWeHidGhostTextOn !== void 0 &&
						this.unhideCopilotSuggestion(this.editorThatWeHidGhostTextOn),
						(this.editorThatWeHidGhostTextOn = Ye),
						y.$O1b
							.get(this.editorThatWeHidGhostTextOn)
							?.model.get()
							?.clearCopilotSuggestions(),
						y.$O1b
							.get(Ye)
							?.model.get()
							?.isHidden.set(!0, void 0);
				}
				unhideCopilotSuggestion(Ye) {
					y.$O1b
						.get(Ye)
						?.model.get()
						?.isHidden.set(!1, void 0);
				}
				saveEditorSelectionInSuggestion(Ye, ze, Xe) {
					const It = Ye.getSelection();
					this.updateSuggestionState({
						editorSelectionBeforePeek: It !== null ? It : void 0,
					});
				}
				saveCurrentTextIntoSuggestion(Ye, ze) {
					const Xe = (0, J.$87)(Ye, ze);
					if (Xe) {
						const It = Ye.getValueInRange(Xe),
							Lt = { ...ze, originalText: It };
						return this.updateSuggestionState(Lt), Lt;
					}
					return ze;
				}
				getEditorCurrentPositionRange(Ye) {
					const ze = Ye.getPosition();
					return ze === null
						? null
						: new h.$Fs({
								startLineNumber: ze.lineNumber,
								startColumn: ze.column,
								endLineNumberInclusive: ze.lineNumber,
								endColumn: ze.column,
							});
				}
				async acceptFullSuggestion(Ye, ze) {
					return await this.acceptSuggestion(!1, Ye, ze);
				}
				async acceptNextWordSuggestion(Ye, ze) {
					return await this.acceptSuggestion(!0, Ye, ze);
				}
				async acceptSuggestion(Ye, ze, Xe) {
					let It = !1;
					ze?.signal.addEventListener("abort", () => {
						It = !0;
					});
					const Lt = this.getFocusedCodeEditor(),
						xt = Lt?.getModel();
					if (!Lt || !xt) return { type: J.AcceptResult.NotAccepted };
					const Vt = xt.getEOL(),
						Bt = this.getEditorCurrentPositionRange(Lt);
					if (!this.isTextFocusedOrSimilarlyFocused(Lt) || Bt === null)
						return { type: J.AcceptResult.NotAccepted };
					let Gt = Xe ?? this.getHiddenSuggestion(xt, Bt);
					if (Gt === null) return { type: J.AcceptResult.NotAccepted };
					this.pb.publicLogCapture("cursor.peekcppsuggestion"),
						this.increaseCppUsage(),
						(Gt = this.saveCurrentTextIntoSuggestion(xt, Gt)),
						this.saveEditorSelectionInSuggestion(Lt, xt, Gt);
					const Mt = await this.makeChangesOnAcceptCppSuggestion({
						model: xt,
						eol: Vt,
						suggestion: Gt,
						abortController: ze,
						onlyAcceptFirstWord: Ye,
						editor: Lt,
					});
					return It
						? { type: J.AcceptResult.NotAccepted }
						: ((this.bb = !0),
							Gt.fusedCursorPredictionId &&
							this.eb?.id === Gt.fusedCursorPredictionId
								? this.displayFusedCursorPrediction({
										editor: Lt,
										model: xt,
										fusedCursorPrediction: this.eb.fusedCursorPrediction,
										oldText: Gt.originalText ?? "",
										newText: Gt.replaceText ?? "",
									})
								: (this.disableAndHideCopilotSuggestion(Lt),
									Gt.fusedCursorPredictionId &&
										(this.fb = {
											uri: xt.uri,
											fusedCursorPredictionId: Gt.fusedCursorPredictionId,
											oldText: Gt.originalText ?? "",
											newText: Gt.replaceText ?? "",
										})),
							Mt);
				}
				async displayFusedCursorPrediction({
					editor: Ye,
					model: ze,
					fusedCursorPrediction: Xe,
					oldText: It,
					newText: Lt,
				}) {
					const xt = this.nb.resolveRelativePath(Xe.relativePath);
					if (!xt) {
						Ve("[fusedCursorPrediction] Could not resolve predicted file path");
						return;
					}
					const Vt = await this.Cb.getMultifileCursorPredictionEditor(xt);
					if (!Vt) {
						Ve(
							"[fusedCursorPrediction] Could not get editor for predicted file",
						);
						return;
					}
					const Bt = Vt.getModel();
					if (!Bt) {
						Ve(
							"[fusedCursorPrediction] Could not get model for predicted file",
						);
						return;
					}
					let Gt = Xe.lineNumberOneIndexed;
					const Mt = Ye.getPosition(),
						Ut = Ie.$dh.isEqual(ze.uri, Bt.uri);
					if (Mt && Ut && Gt > Mt.lineNumber) {
						const ei = ze.getEOL();
						Gt += Lt.split(ei).length - It.split(ei).length;
					}
					this.overlapsInlineDiff(Bt.uri, Gt) ||
						this.Cb.manuallyCreateCursorPrediction({
							editor: Vt,
							model: Bt,
							lineNumber: Gt,
						});
				}
				removeSuggestion() {
					const Ye = this.Ob().cppState;
					Ye !== void 0 &&
						this.ib.setNonPersistentStorage("cppState", {
							...Ye,
							suggestion: void 0,
						});
				}
				cleanupAfterNextWordSuggestion(Ye, ze) {
					const Xe = Ye.getModel();
					if (!Xe) return;
					const It = this.getEditorCurrentPositionRange(Ye);
					if (It === null) return;
					const Lt = this.getHiddenSuggestion(Xe, It);
					Lt !== null && this.rb.recordPartialAcceptSuggestionEvent(Xe, Lt, ze);
				}
				cleanupAfterAcceptSuggestion(Ye, ze) {
					this.abortAllCppRequests(ze?.requestId);
					const Xe = this.getEditorCurrentPositionRange(Ye),
						It = Ye.getModel();
					if (!It || Xe === null) return;
					const Lt = ze ?? this.getVisibleSuggestion();
					if (Lt !== null) {
						if (
							((this.u = {
								requestId: Lt.requestId,
								modelVersion: It.getVersionId(),
								modelId: It.id,
							}),
							(this.numberOfClearedSuggestionsSinceLastAccept = 0),
							this.clearSuggestions(
								this.Nb().cppConfig?.isGhostText &&
									!this.Ob().cppState?.suggestion?.immediatelySeen,
							),
							this.rb.recordAcceptSuggestionEvent(It, Lt),
							this.ib.applicationUserPersistentStorage.checklistState
								?.doneAutoComplete !== !0)
						) {
							const xt =
								this.ib.applicationUserPersistentStorage.checklistState;
							this.ib.setApplicationUserPersistentStorage(
								"checklistState",
								(Vt) => ({ ...(Vt ?? {}), doneAutoComplete: !0 }),
							);
						}
						if (Lt.onAcceptDisplayId !== void 0) {
							const xt = this.M.getAndEvictMatchingSuggestion(
								Lt.onAcceptDisplayId,
							);
							if (xt) {
								this.displayCppSuggestion(Ye, It, xt);
								return;
							}
						}
						if (this.Cb.isCursorPredictionEnabled()) {
							const xt = It.getDecorationRange(Lt.decorationId) ?? void 0;
							let Vt = xt
								? {
										startLineNumber: xt.startLineNumber,
										startColumn: xt.startColumn,
										endLineNumberInclusive:
											xt.endColumn === 1
												? xt.endLineNumber - 1
												: xt.endLineNumber,
										endColumn: xt.endColumn,
									}
								: void 0;
							this.U?.modelVersion === It.getVersionId() &&
							this.U?.modelId === It.id
								? ((this.Y = { fire: !1, acceptedRange: void 0 }),
									this.Cb.getAndShowNextPrediction({
										editor: Ye,
										triggerCppCallback:
											this.fireCppSuggestionFromTrigger.bind(this),
										getLinterErrors:
											this.getRecentAndNearLocationLinterErrors.bind(this),
										source: b.CursorPrediction_CursorPredictionSource.ACCEPT,
										cppSuggestionRange: Vt,
									}))
								: (this.Y = { fire: !0, acceptedRange: Vt });
						} else this.Cb.periodicallyReloadCursorPredictionConfig(!1);
					}
				}
				revertSuggestion(Ye, ze = { removeGreens: !0 }) {
					const Xe = this.getVisibleSuggestion();
					if (Xe === null) return;
					const It = Ye.getModel(),
						Lt = this.getEditorCurrentPositionRange(Ye);
					Ye === null ||
						Ye.hasTextFocus() === !1 ||
						It === void 0 ||
						It === null ||
						Lt === null ||
						(this.pb.publicLogCapture("cursor.revertcppsuggestion"),
						this.rb.recordRejectSuggestionEvent(It, Xe),
						this.removeAllHighlights(It, ze),
						this.updateSuggestionStateHalfSilently({
							suggestionIsCurrentlyHidden: !0,
							hasBeenSeen: !0,
							editorSelectionBeforePeek: void 0,
						}),
						this.reallowCopilotIfWePreviousHidCopilotSuggestions());
				}
				abortAllCppRequests(Ye) {
					this.R.forEach((ze) => {
						ze.generationUUID !== Ye && ze.abortController.abort();
					}),
						(this.R = this.R.filter((ze) => ze.generationUUID === Ye)),
						this.holdDownAbortController?.abort(),
						(this.holdDownAbortController = void 0);
				}
				resetShownCppSuggestions() {
					const Ye = this.hb.getActiveCodeEditor();
					Ye != null && (this.revertSuggestion(Ye), this.clearSuggestions());
				}
				rejectSuggestionForTelemetryIfExists(Ye) {
					const ze = this.getCurrentSuggestion();
					if (ze === void 0) return;
					const Xe = Ye.getModel();
					Xe != null &&
						(this.rb.recordRejectSuggestionEvent(Xe, ze),
						this.pb.publicLogCapture("cursor.rejectcppsuggestion"));
				}
				rejectAndResetAllCppSuggestions(
					Ye = { removeGreens: !0, abortAll: !0 },
				) {
					Ye.abortAll && this.abortAllCppRequests();
					const ze = this.hb.getActiveCodeEditor();
					ze != null &&
						(this.rejectSuggestionForTelemetryIfExists(ze),
						this.revertSuggestion(ze, Ye),
						this.clearSuggestions(void 0, Ye));
				}
				clearDecorationsSlowEnumeratesAllDecorations() {
					const Ye = this.hb.getActiveCodeEditor(),
						ze = Ye?.getModel();
					if (Ye == null || ze === null || ze === void 0) return;
					this.removeAllHighlights(ze);
					const Xe = ze.getAllDecorations(),
						It = Xe.filter(
							(Vt) =>
								Vt.options.className === q.$Bcc ||
								Vt.options.className === ft ||
								Vt.options.className === bt ||
								Vt.options.className === nt ||
								Vt.options.className === bt,
						).map((Vt) => Vt.id);
					It.length > 0 && ze.deltaDecorations(It, []);
					const Lt = Xe.filter(
						(Vt) => Vt.options.description === "cpp-truncation-cache",
					).map((Vt) => Vt.id);
					Lt.length > 0 && ze.deltaDecorations(Lt, []), this.O.delete(ze.uri);
					const xt = this.getCurrentSuggestion();
					xt !== void 0 &&
						xt.decorationId !== void 0 &&
						ze.deltaDecorations([xt.decorationId], []);
				}
				clearDecorationsFast(Ye = { removeGreens: !0 }) {
					const Xe = this.hb.getActiveCodeEditor()?.getModel();
					if (Xe == null) return;
					const It = this.decIdsThatAreNotInReactiveStorage.green,
						Lt = Object.values(this.decIdsThatAreNotInReactiveStorage)
							.filter((Gt) => Gt !== It)
							.flat(),
						xt = Ye.removeGreens ? [...this.I, ...It, ...Lt] : [...Lt];
					Ye.removeGreens === !1 ? this.I.push(...It) : (this.I = []),
						xt.length > 0 && Xe.deltaDecorations(xt, []),
						(this.decIdsThatAreNotInReactiveStorage = Object.fromEntries(
							Object.keys(this.decIdsThatAreNotInReactiveStorage).map((Gt) => [
								Gt,
								[],
							]),
						));
					const Vt = this.getCurrentSuggestion();
					if (Vt === void 0) return;
					const Bt = [Vt.decorationId];
					Bt.length > 0 && Xe.deltaDecorations(Bt, []);
				}
				clearSuggestions(Ye, ze = { removeGreens: !0 }) {
					Ye !== !0 && this.clearDecorationsFast(ze),
						this.Ob().cppState?.suggestion !== void 0 &&
							(this.numberOfClearedSuggestionsSinceLastAccept += 1),
						this.ib.setNonPersistentStorage("cppState", "suggestion", void 0);
				}
				removeAllHighlights(Ye, ze = { removeGreens: !0 }) {
					this.hideCursorHighlight(),
						ze.removeGreens !== !1 && this.clearAllGreenHighlights(Ye);
				}
				isOnShortestEditPath({ event: Ye, model: ze }, Xe) {
					const It = this.hb.getActiveCodeEditor();
					if (It == null || It.getModel()?.id !== ze.id) return !1;
					const Lt = this.getCurrentSuggestion();
					if (Lt === void 0) return !1;
					let xt;
					if (Xe === void 0) {
						const Bt = this.getPreviousModelValue(ze);
						if (Bt === void 0) return !1;
						xt = Bt;
					} else xt = Xe;
					const Vt = (0, H.$bfc)(xt, ze.uri);
					return this.L.checkChangeExists(Ye, !0)
						? !0
						: (0, F.$Ked)({
								event: Ye,
								model: ze,
								proposedSuggestion: Lt,
								previousModelValue: Vt,
							});
				}
				async formatDiffHistory(Ye, ze, Xe, It) {
					if (Xe.getValueLength() > Re) return;
					const Lt = await this.Eb.onlyLocalProvider?.runCommand(
						le.EditHistoryActions.FormatDiffHistory,
						{
							uri: Xe.uri.toString(),
							changes: Ye.changes,
							behavior: this.Nb().cppConfig?.mergeBehavior,
							modelVersion: Xe.getVersionId(),
							eol: It,
						},
					);
					if (Lt === void 0)
						throw new Error(
							"Format Diff History not registered in extension host",
						);
					(this.U = { modelVersion: Xe.getVersionId(), modelId: Xe.id }),
						this.Y.fire === !0 &&
							(this.Cb.getAndShowNextPrediction({
								editor: ze,
								triggerCppCallback:
									this.fireCppSuggestionFromTrigger.bind(this),
								getLinterErrors:
									this.getRecentAndNearLocationLinterErrors.bind(this),
								source: b.CursorPrediction_CursorPredictionSource.ACCEPT,
								cppSuggestionRange: this.Y.acceptedRange,
							}),
							(this.Y = { fire: !1, acceptedRange: void 0 })),
						this.C.set(this.F(Xe), Lt),
						this.G.set(this.H(Xe), Xe.getValue());
				}
				checkOverlappingSuggestion(Ye, ze) {
					const Xe = this.getCurrentSuggestion();
					if (Xe === void 0 || Xe.uri.toString() !== Ye.uri.toString())
						return null;
					const It = Ye.getDecorationRange(Xe.decorationId);
					return It &&
						It.startLineNumber <= ze.endLineNumberInclusive &&
						It.endLineNumber >= ze.startLineNumber
						? Xe
						: null;
				}
				async *streamCpp(Ye, ze, Xe, It) {
					let Lt = !1,
						xt = !1;
					for (;;) {
						if (Ye.signal.aborted) return;
						const Vt = await ze.flushCpp(Xe);
						if (Vt.type === "failure") throw new Error(Vt.reason);
						!Lt &&
							Vt.rangeToReplaceOneIndexed !== void 0 &&
							((Lt = !0),
							yield {
								case: "rangeToReplaceOneIndexed",
								range: Vt.rangeToReplaceOneIndexed,
							});
						const Bt = Vt.buffer;
						for (const Gt of Bt) {
							if (Gt === hi) {
								xt = !0;
								break;
							}
							yield { case: "text", text: Gt };
						}
						if (
							(Vt.doneEdit && (yield { case: "doneEdit" }),
							Vt.cursorPredictionTarget !== void 0 &&
								(yield {
									case: "fusedCursorPrediction",
									prediction: Vt.cursorPredictionTarget,
								}),
							xt)
						)
							return;
						await new Promise((Gt) => setTimeout(Gt, 5));
					}
				}
				async $b(Ye, ze) {
					if (
						ze ||
						Math.random() < (this.Nb().cppConfig?.checkFilesyncHashPercent ?? 0)
					)
						return (0, Se.$pjb)(Ye);
				}
				async fastCurrentFileInfoForNotebooks(Ye, ze, Xe, It, Lt) {
					const xt = Ye.getEOL(),
						Vt = this.getNotebookCellInfo(Ye, ze, xt);
					if (Vt === null) return;
					const { numLinesAddedBefore: Bt, cellValues: Gt } = Vt;
					let Mt = 0;
					const Ut = [0];
					for (const ei of Gt.slice(0, -1))
						(Mt += ei.split(`
`).length),
							Ut.push(Mt);
					return new h.$Ws({
						relativeWorkspacePath: this.nb.asRelativePath(Ye.uri),
						contents: Gt.join(xt),
						sha256Hash: It ? await this.$b(Gt.join(xt), this.gb) : void 0,
						selection: void 0,
						cursorPosition: new h.$ys({
							line: Xe.lineNumber - 1 + Bt,
							column: Xe.column - 1,
						}),
						languageId: "",
						fileVersion: Lt,
						cellStartLines: Ut,
						workspaceRootPath: this.nb.getWorkspaceFolder(Ye.uri)?.uri.fsPath,
					});
				}
				async fastCurrentFileInfoDoesNotWorkForNotebooks(Ye, ze, Xe, It, Lt) {
					if (Ye.scheme !== M.Schemas.aiChat && Xe !== null)
						return new h.$Ws({
							relativeWorkspacePath: this.nb.asRelativePath(Ye),
							contents: ze,
							sha256Hash: It ? await this.$b(ze, this.gb) : void 0,
							cursorPosition: new h.$ys({
								line: Xe.lineNumber - 1,
								column: Xe.column - 1,
							}),
							selection: void 0,
							languageId: "",
							fileVersion: Lt,
							workspaceRootPath: this.nb.getWorkspaceFolder(Ye)?.uri.fsPath,
						});
				}
				async fastPeriodicallyReloadCppConfig() {
					Date.now() - this.h > 1e3 * 60 &&
						(await this.loadCppConfigIncludingHandlingProAccess(),
						this.Z.setDebouncingDurations(this.getNewDebounceDurations()),
						this.Jb.handleNewImportPredictionConfig());
				}
				async loadCppConfigIncludingHandlingProAccess() {
					(this.h = Date.now()), await this.keepCppModelStateUpdated();
					const ze = await (await this.aiClient()).cppConfig(
						new f.$YG({ model: this.Nb().cppModel ?? "" }),
					);
					this._applyConfig(ze),
						this.Ib.setGeoCppBackendUrl(ze.geoCppBackendUrl);
				}
				async forceApplyCppConfig() {
					const ze = await (await this.aiClient()).cppConfig(new f.$YG({}));
					this._applyConfig(ze);
				}
				async _applyConfig(Ye) {
					const ze =
						this.ib.applicationUserPersistentStorage.cppConfig
							?.shouldLetUserEnableCppEvenIfNotPro;
					this.Nb().cppEnabled === !0 &&
						Ye.shouldLetUserEnableCppEvenIfNotPro === !1 &&
						ze === !0 &&
						(0, le.$sJ)(this.ob.membershipType()) === !1 &&
						this.ib.setNonPersistentStorage("showingCppUpsell", !0),
						this.ib.setApplicationUserPersistentStorage("cppConfig", Ye),
						this.Eb.onlyLocalProvider?.runCommand(
							le.EditHistoryActions.SetEnableCppWhitespaceDiffHistoryMode,
							{ enabled: Ye.useWhitespaceDiffHistory },
						),
						this.Eb.onlyLocalProvider?.runCommand(
							le.EditHistoryActions.SetEnableCppIncludeUnchangedLines,
							{ enabled: Ye.includeUnchangedLines },
						);
				}
				async getCppReport() {
					if (this.S !== void 0) return await this.S.getCppReport();
				}
			};
			(e.$9ed = Kt),
				(e.$9ed = Kt =
					Ne(
						[
							j(0, d.$dtb),
							j(1, a.$0zb),
							j(2, r.$MO),
							j(3, re.$H7b),
							j(4, n.$ek),
							j(5, Be.$kcc),
							j(6, p.$Vi),
							j(7, $.$x6b),
							j(8, v.$km),
							j(9, Ee.$Bk),
							j(10, K.$V7b),
							j(11, S.$aM),
							j(12, k.$Li),
							j(13, L.$wcc),
							j(14, ne.$d6b),
							j(15, D.$ycc),
							j(16, Y.$Led),
							j(17, X.$k3),
							j(18, V.$n5b),
							j(19, _.$IY),
							j(20, Z.$gj),
							j(21, E.$kfc),
							j(22, ye.$aN),
							j(23, ie.$3Db),
							j(24, pe.$HMb),
							j(25, Fe.$Zed),
							j(26, Oe.$Sed),
							j(27, Je.$i6b),
							j(28, E.$lfc),
							j(29, ke.$r8),
						],
						Kt,
					)),
				(0, w.$lK)(E.$jfc, Kt, w.InstantiationType.Delayed);
		},
	),
		define(
			de[4187],
			he([
				1, 0, 341, 148, 33, 65, 74, 64, 42, 393, 291, 280, 5, 90, 84, 45, 134,
				25, 332, 1300, 285, 619, 166, 17, 3, 69, 137, 48, 20, 2973, 59, 19, 9,
				439, 287, 1978, 31, 741, 350, 668, 2364,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				const F = 5,
					x = 5,
					H = 5e3 * 60;
				let q = class extends v.$1c {
					aiClient() {
						return this.c.get();
					}
					constructor(K, J, W, X, Y, ie, ne, ee, _, te, Q, Z, se, re, le) {
						super(),
							(this.s = K),
							(this.t = J),
							(this.u = W),
							(this.w = X),
							(this.y = Y),
							(this.z = ie),
							(this.C = ne),
							(this.F = ee),
							(this.G = _),
							(this.H = te),
							(this.I = Q),
							(this.J = Z),
							(this.L = se),
							(this.M = re),
							(this.N = le),
							(this.g = void 0),
							(this.h = new Map()),
							(this.m = new L.$Jc(100)),
							(this.n = []),
							(this.r = []),
							(this.Q = [
								{
									source: "ts",
									codeMatches: (oe) => ["2304", "2503", "2552"].includes(oe),
									getSymbolName: (oe) => {
										const ae = oe.match(/^Cannot find name '(.*?)'/);
										if (ae) return ae[1];
									},
								},
								{
									source: "Pylance",
									codeMatches: (oe) => oe?.value === "reportUndefinedVariable",
									getSymbolName: (oe) => {
										const ae = oe.match(/^"(.*?)" is not defined$/);
										if (ae) return ae[1];
									},
								},
							]),
							(this.R = 0),
							(this.S = 5),
							(this.hb = 10),
							(this.ib = 35),
							(this.lb = 50),
							(this.mb = 1.5),
							(this.nb = []),
							(this.ob = []),
							(this.pb = 50),
							(this.qb = 10),
							(this.rb = !1),
							(this.Eb = []),
							(this.Fb = 10),
							(this.Gb = 6e4),
							(this.Ib = 1e4),
							(this.Kb = new B.$Opb(1)),
							(this.c = this.w.createInstance(s.$q6b, { service: t.$q0 }));
					}
					registerCppMethods(K) {
						this.g = K;
					}
					handleNewImportPredictionConfig() {
						const K =
							this.s.applicationUserPersistentStorage.cppConfig
								?.importPredictionConfig;
						K !== void 0 &&
							(this.s.setApplicationUserPersistentStorage(
								"backendHasDisabledCppAutoImport",
								K.isDisabledByBackend,
							),
							this.s.applicationUserPersistentStorage.cppAutoImportEnabled ===
								void 0 &&
								K.shouldTurnOnAutomatically &&
								this.s.setApplicationUserPersistentStorage(
									"cppAutoImportEnabled",
									!0,
								));
					}
					O() {
						return (
							this.s.applicationUserPersistentStorage.cppConfig
								?.importPredictionConfig?.pythonEnabled === !0 ||
							this.s.applicationUserPersistentStorage
								.userHasEnabledImportPredictionForPython === !0
						);
					}
					P(K) {
						return [
							".js",
							".ts",
							".jsx",
							".tsx",
							...(this.O() ? [".py"] : []),
						].some((W) => K.toString().endsWith(W));
					}
					async handleUpdatedLintErrors({
						openEditor: K,
						uri: J,
						position: W,
						allMarkers: X,
						alwaysHandle: Y,
						source: ie,
					}) {
						if (
							!this.isEnabled() ||
							!this.P(J) ||
							!this.g?.isTextFocusedOrSimilarlyFocused(K)
						)
							return;
						const ne = X.filter(
							(_) =>
								[c.MarkerSeverity.Error, c.MarkerSeverity.Warning].includes(
									_.severity,
								) && D.$dh.isEqual(_.resource, J),
						);
						this.Db(K);
						const ee = ne
							.sort(
								(_, te) =>
									Math.abs(_.startLineNumber - W.lineNumber) -
									Math.abs(te.startLineNumber - W.lineNumber),
							)
							.filter((_) => {
								const te = this.$(_);
								if (te === void 0 || this.xb(K, _) !== te) return !1;
								const Z = this.ab(K, _);
								return Z !== void 0 && Z.seenAt.getTime() > Date.now() - H
									? (Z.currentMarkers.push(_),
										Z.status === "debouncing"
											? ((Z.status = "computing"), !0)
											: !1)
									: Math.abs(_.startLineNumber - W.lineNumber) >= R.$8ed
										? !1
										: (this.m.set(this.Z(K, _), {
												uri: J,
												symbolName: te,
												currentMarkers: [_],
												status: "computing",
												seenAt: new Date(),
												versionComputedAt: K.getModel()?.getVersionId() ?? 0,
											}),
											!0);
							});
						this.gb(K, X), this.showCorrectUI(K, { hideIfSameState: !Y });
						try {
							if (ee.length > 0) {
								const _ = performance.now();
								await this.U(K, ee);
							}
						} catch {
						} finally {
							ee.length > 0;
						}
					}
					async U(K, J) {
						if (!this.isEnabled()) return;
						const W = K.getModel();
						if (W === null) return;
						const X = W.uri,
							Y = performance.now(),
							ie = new N.$Ozb(W, w.CancellationToken.None),
							ne = 250;
						await new Promise((_) => setTimeout(_, ne));
						const ee = W.getVersionId();
						await Promise.all(
							J.map(async (_) => {
								let te;
								try {
									if (ie.token.isCancellationRequested)
										throw new Error("cts.token.isCancellationRequested");
									if (this.R >= this.S)
										throw new Error("too many code actions requests in flight");
									this.R++,
										(te = await (0, r.$UAb)(
											this.J.codeActionProvider,
											W,
											$.$iL.lift(_),
											{
												type: C.CodeActionTriggerType.Auto,
												triggerAction: u.CodeActionTriggerSource.QuickFix,
											},
											n.$0N.None,
											w.CancellationToken.None,
										));
								} catch (ye) {
									const ue = this.ab(K, _);
									throw (ue && (ue.status = "debouncing"), ye);
								} finally {
									this.R--;
								}
								if (te === void 0)
									throw new Error(
										"no code actions found - this should be unreachable",
									);
								const Q = (ye) =>
										ye !== void 0 &&
										Array.isArray(ye.arguments) &&
										ye.arguments.length === 1 &&
										typeof ye.arguments[0] == "string" &&
										ye.arguments[0].startsWith("python.addImport"),
									Z = te.allActions.filter(
										(ye) =>
											!ye.action.disabled &&
											(ye.action.title.includes("Add import from") ||
												ye.action.title.includes("Update import from") ||
												Q(ye.action.command)),
									),
									se = new Map();
								Z.filter(
									(ye) =>
										ye.action.edit?.edits.at(0) !== void 0 &&
										"textEdit" in ye.action.edit.edits[0],
								).forEach((ye) => {
									ye.action.edit !== void 0 && se.set(ye, ye.action.edit);
								});
								const le = Z.flatMap((ye) =>
										Q(ye.action.command)
											? [{ action: ye, command: ye.action.command }]
											: [],
									),
									oe = this.ab(K, _),
									ae = 7;
								le.length <= 4 &&
									this.O() &&
									(await Promise.allSettled(
										le.map(async ({ action: ye, command: ue }) => {
											if (oe === void 0) return;
											const fe = await this.Lb(ye, ue, oe.symbolName);
											fe !== void 0 && se.set(ye, fe);
										}),
									));
								const $e = [...se.entries()].flatMap(([ye, ue]) => {
									if (ue === void 0) return [];
									const fe = ue.edits.flatMap((me) => {
										if (!("textEdit" in me)) return [];
										if (!D.$dh.isEqual(me.resource, K.getModel()?.uri))
											return [];
										const ve = me.textEdit.text;
										return K.getModel()?.getValueInRange(me.textEdit.range) ===
											ve
											? []
											: [{ edit: me, action: ye }];
									});
									return fe.length === 1
										? { edit: fe[0].edit, action: ye }
										: fe.every(
													(me) =>
														me.edit.textEdit.range.startLineNumber ===
															fe[0].edit.textEdit.range.startLineNumber &&
														me.edit.textEdit.range.endLineNumber ===
															fe[0].edit.textEdit.range.endLineNumber &&
														me.edit.textEdit.range.startColumn ===
															fe[0].edit.textEdit.range.startColumn &&
														me.edit.textEdit.range.endColumn ===
															fe[0].edit.textEdit.range.endColumn,
												)
											? {
													edit: {
														...fe[0].edit,
														textEdit: {
															...fe[0].edit.textEdit,
															text: fe
																.map((me) => me.edit.textEdit.text)
																.reverse()
																.join(""),
														},
													},
													action: ye,
												}
											: [];
								});
								if ($e.length > 0 && oe !== void 0) {
									if ($e.length > ae)
										if (oe) {
											(oe.status = "error"),
												(oe.errorReason = new Error(
													"too many code actions, not doing anything",
												));
											return;
										} else
											throw new Error(
												"lintError is undefined, this should not happen",
											);
									const ye = await this.W(X, K, $e, _, oe);
									if (oe)
										(oe.versionComputedAt = ee),
											(oe.status = ye.status),
											ye.status === "error" && (oe.errorReason = ye.reason);
									else
										throw new Error(
											"lintError is undefined, this should not happen",
										);
								} else if (oe) oe.status = "no-actions";
								else
									throw new Error(
										"lintError is undefined, this should not happen",
									);
							}),
						);
					}
					async W(K, J, W, X, Y) {
						if (!this.isEnabled())
							return {
								status: "error",
								reason: new Error("importPredictionEnabled is false"),
							};
						if (W.length === 0)
							return {
								status: "error",
								reason: new Error(
									"no edits with actions, this should not happen",
								),
							};
						try {
							if (this.n.find((He) => this.Z(J, He.marker) === this.Z(J, X)))
								return { status: "pending" };
							const ne = J.getModel();
							if (ne === null) throw new Error("model is null");
							const ee = ne.getValue(),
								_ = ne.getVersionId();
							if (ne.uri !== K)
								throw new Error(
									"model uri is different from uri, not doing anything",
								);
							let te =
								this.s.workspaceUserPersistentStorage.uniqueCppWorkspaceId;
							if (
								(te === void 0 &&
									((te =
										Math.random().toString(36).substring(2, 15) +
										Math.random().toString(36).substring(2, 15)),
									this.s.setWorkspaceUserPersistentStorage(
										"uniqueCppWorkspaceId",
										te,
									)),
								!W.every(
									(He) =>
										He.edit.textEdit.range.startColumn === 1 &&
										He.edit.textEdit.range.endColumn === 1 &&
										He.edit.textEdit.text.includes(`
`),
								) && X.source === "ts")
							)
								return (
									await this.Y(J, K, W[0].action, W[0].edit.textEdit, X),
									{ status: "pending" }
								);
							const Z = W.map(
									(He) => He.edit.textEdit.range.startLineNumber,
								).reduce((He, Ke) => ((He[Ke] = (He[Ke] || 0) + 1), He), {}),
								se = Object.entries(Z).reduce(
									(He, [Ke, Je]) => (Je > He[1] ? [parseInt(Ke + ""), Je] : He),
									[0, 0],
								)[0],
								re = await this.moveLineToEndOfImportsSectionExclusive(J, se),
								le = new T.$hL(re, 1);
							if (this.g?.getPartialCppRequest === void 0)
								throw new Error(
									"getPartialCppRequest is undefined, this should not happen",
								);
							const oe = await this.g
								.getPartialCppRequest({
									editor: J,
									uri: K,
									modelValue: ee,
									modelVersion: _,
									position: le,
									source: p.CppSource.Typing,
									shouldRelyOnFileSyncForFile: !1,
								})
								.catch((He) => {
									throw He;
								});
							if (J.getModel()?.uri !== K)
								throw new Error(
									"model uri is different from uri, not doing anything",
								);
							const ae = W.map(
									(He) =>
										new i.$ZE({
											text: He.edit.textEdit.text,
											editRange: {
												startLineNumber: le.lineNumber,
												startColumn: 1,
												endLineNumberInclusive: le.lineNumber,
												endColumn: 1,
											},
										}),
								),
								{ getModelName: pe } = this.g;
							if (pe === void 0)
								throw new Error(
									"getModelName is undefined, this should not happen",
								);
							const $e = this.g?.getRecentAndNearLocationLinterErrors?.(K, X),
								ye = $e && { ...$e, errors: $e.errors.slice(0, F) },
								ue = this.Bb(X),
								fe = new i.$1E({
									cppRequest: {
										...oe,
										controlToken: i.StreamCppRequest_ControlToken.LOUD,
										modelName: pe(),
										diffHistoryKeys: [],
										contextItems: [],
										parameterHints: this.z.getRelevantType(J),
										lspContexts: [],
										filesyncUpdates: [],
										workspaceId: te,
										timeAtRequestSend: Date.now(),
										linterErrors: ye,
									},
									suggestedEdits: ae,
									markerTouchesGreen: ue,
									currentFileContentsForLinterErrors:
										this.g?.truncateCurrentFile(
											ee,
											X.startLineNumber,
											ne.getEOL(),
											ne,
										),
								}),
								me = performance.now(),
								ve = await (await this.aiClient()).getCppEditClassification(fe),
								{ scoredEdits: ge, shouldNoop: be, generationEdit: Ce } = ve,
								Le = V(ge.at(0)),
								Fe = W.find(
									({ action: He, edit: Ke }) =>
										Ke.textEdit.text === Le.edit?.text,
								);
							if (Fe === void 0) throw new Error("bestImport is undefined");
							const Oe = V(Le?.logProbs);
							return (be ??
								this.X({
									bestEditLogprobs: Oe,
									generationEditLogprobs: Ce?.logProbs,
									opEditString: Fe.edit.textEdit.text,
									symbolName: Y.symbolName,
									markerTouchesGreen: ue,
								}))
								? { status: "noop" }
								: (await this.Y(J, K, Fe.action, Fe.edit.textEdit, X),
									{ status: "pending" });
						} catch (ie) {
							return { status: "error", reason: ie };
						} finally {
						}
					}
					X({
						bestEditLogprobs: K,
						generationEditLogprobs: J,
						opEditString: W,
						symbolName: X,
						markerTouchesGreen: Y,
					}) {
						const ne = ((re, le) => {
								for (let oe = re.length - 1; oe >= 0; oe--)
									if (le(re[oe], oe)) return oe;
								return -1;
							})(K.tokens, (re, le) =>
								K.tokens.slice(le).join("").trim().startsWith(W.trim()),
							),
							ee = K.tokens.findIndex(
								(re, le) =>
									le >= ne &&
									!!K.tokens
										.slice(ne, le)
										.join("")
										.trim()
										.match(new RegExp(`\\b${X}\\b`)),
							),
							_ = K.tokenLogprobs[ne],
							te = Math.min(0, ...K.tokenLogprobs.slice(ne + 1, ee)),
							Q = J?.tokens.join("").match(/(\w+)/g),
							Z = Y ? 2 : 1;
						return Q && Q.includes(X) && Math.exp(_) * Z > 0.1
							? !1
							: Math.exp(_ + te) * Z < 0.02;
					}
					async Y(K, J, W, X, Y) {
						if (!this.isEnabled()) return;
						const ne = [...this.n]
								.sort(
									(_, te) =>
										(this.ab(K, te.marker)?.seenAt.getTime() ?? 0) -
										(this.ab(K, _.marker)?.seenAt.getTime() ?? 0),
								)
								.slice(0, 20),
							ee = this.G.createModelReference(J);
						try {
							const _ = (await ee).object.textEditorModel;
							this.n = [
								...ne,
								{
									uri: J,
									action: W,
									edit: X,
									lineContentsAtStartOfEdit: _.getValueInRange(
										new $.$iL(
											X.range.startLineNumber,
											1,
											X.range.startLineNumber,
											1 / 0,
										),
									),
									marker: Y,
								},
							];
							const te = this.g?.getFocusedCodeEditor();
							te && this.showCorrectUI(te);
						} finally {
							(await ee).dispose();
						}
					}
					Z(K, J) {
						return JSON.stringify({
							owner: J.owner,
							uri: J.resource.toString(),
							symbolName: this.$(J),
						});
					}
					$(K) {
						const J = this.Q.find(
							(W) => W.source === K.source && W.codeMatches(K.code),
						);
						if (J !== void 0) return J.getSymbolName(K.message);
					}
					ab(K, J) {
						return this.m.get(this.Z(K, J));
					}
					bb(K, J) {
						return D.$dh.isEqual(K.uri, J.getModel()?.uri);
					}
					maybeAcceptShownImport(K) {
						if (!this.isEnabled()) return !1;
						const { q: J } = this;
						if (J === void 0) return !1;
						if (!this.bb(J.shownImport, K)) return this.hideShownImport(K), !1;
						const W = K.getVisibleRanges(),
							X = K.getModel()?.getDecorationRange(J.decorationId);
						if (!X || !W.some((ne) => this.Cb(ne, X)))
							return this.hideShownImport(K), !1;
						const Y = this.ab(K, J.shownImport.marker);
						Y !== void 0 &&
							((Y.status = "accepted"),
							(Y.seenAt = new Date()),
							(async () => {
								try {
									if (this.zb(K, J.shownImport)) {
										const ne =
											(await Promise.race([
												this.cb(K, J.shownImport),
												(async () => {
													await new Promise((ee) => setTimeout(ee, 75));
												})(),
											])) ?? J.shownImport.action;
										await this.w.invokeFunction(
											r.$VAb,
											ne,
											r.ApplyCodeActionReason.FromAILightbulb,
											void 0,
											w.CancellationToken.None,
										);
									} else
										await this.w.invokeFunction(
											r.$VAb,
											J.shownImport.action,
											r.ApplyCodeActionReason.FromAILightbulb,
											void 0,
											w.CancellationToken.None,
										);
									this.s.setApplicationUserPersistentStorage(
										"howManyTimesHasUserAcceptedImportPrediction",
										(ne) => (ne ?? 0) + 1,
									);
								} catch {}
							})()),
							this.db(K, J.shownImport),
							this.yb(K, J.shownImport.edit);
						const ie = K.getModel()?.uri;
						return ie !== void 0 && this.Hb(ie), this.showCorrectUI(K), !0;
					}
					maybeRejectShownImport(K) {
						if (!this.isEnabled() || !K.hasTextFocus()) return !1;
						const J = K.getSelection();
						if (
							J !== null &&
							(J.startLineNumber !== J.endLineNumber ||
								J.startColumn !== J.endColumn)
						)
							return !1;
						const W = this.vb;
						return W === void 0 || !this.bb(W, K) || this.wb()
							? !1
							: (this.rejectImport(K, W), this.showCorrectUI(K), !0);
					}
					async cb(K, J) {
						const W = K.getModel();
						if (!W)
							throw new Error(
								"model is undefined, so we can't get the matching code action",
							);
						const X = performance.now();
						return (
							await (0, r.$UAb)(
								this.J.codeActionProvider,
								W,
								$.$iL.lift(J.marker),
								{
									type: C.CodeActionTriggerType.Auto,
									triggerAction: u.CodeActionTriggerSource.QuickFix,
								},
								n.$0N.None,
								w.CancellationToken.None,
							)
						).allActions.find(
							(ie) => ie.action.title === J.action.action.title,
						);
					}
					async rejectImport(K, J) {
						if (!this.isEnabled()) return;
						const W = this.ab(K, J.marker);
						W && ((W.status = "rejected"), (W.seenAt = new Date())),
							this.db(K, J);
					}
					db(K, J) {
						this.isEnabled() &&
							(this.vb === J && this.hideShownImport(K),
							(this.n = this.n.filter((W) => W !== J)));
					}
					hideShownImport(K) {
						if (!this.isEnabled()) return;
						const J = this.q;
						if (J) {
							const { shownImport: W, decorationId: X, importWidget: Y } = J;
							if (
								(Y.hide(),
								Y.dispose(),
								(this.q = void 0),
								K !== void 0 && this.bb(W, K))
							) {
								const ie = K.getModel();
								ie && ie.deltaDecorations([X], []);
							} else {
								const ie = this.G.createModelReference(W.uri);
								(async () => {
									try {
										(await ie).object.textEditorModel.deltaDecorations([X], []);
									} finally {
										(await ie).dispose();
									}
								})();
							}
						}
					}
					eb(K, J) {
						const W = K.getModel();
						if (!W)
							throw new Error(
								"model is undefined, so we can't get the import range",
							);
						const X = W.getDecorationRange(J.decorationId);
						if (X === null)
							throw new Error(
								"decorationRange is null, this should not happen",
							);
						const {
							startLineNumber: Y,
							startColumn: ie,
							endLineNumber: ne,
							endColumn: ee,
						} = J.shownImport.marker;
						return (
							X.startLineNumber === Y &&
							X.startColumn === ie &&
							X.endLineNumber === ne &&
							X.endColumn === ee
						);
					}
					fb(K, J) {
						if (!this.isEnabled()) return;
						if (!this.bb(J, K))
							throw new Error(
								"renderImportAtLocation called with wrong editor - this should never happen",
							);
						const W = this.q;
						if (W?.shownImport === J && this.eb(K, W)) {
							const X = K.getModel();
							if (!X)
								throw new Error(
									"model is undefined, so we couldn't remove decoration - this should never happen",
								);
							const Y = X.getDecorationRange(W.decorationId);
							if (Y === null)
								throw new Error(
									"decorationRange is null, this should not happen",
								);
							const ie = {
								startLineNumber: J.marker.startLineNumber,
								startColumn: J.marker.startColumn,
								endLineNumber: J.marker.endLineNumber,
								endColumn: J.marker.endColumn,
							};
							if (
								ie.endLineNumber - ie.startLineNumber !==
									Y.endLineNumber - Y.startLineNumber ||
								ie.endColumn - ie.startColumn !== Y.endColumn - Y.startColumn
							) {
								this.hideShownImport(K);
								return;
							} else W.importWidget.show();
						} else {
							this.hideShownImport(K);
							const X = K.getModel();
							if (!X)
								throw new Error(
									"model is undefined, so we couldn't remove decoration - this should never happen",
								);
							const Y =
									this.s.applicationUserPersistentStorage
										.cppAutoImportDecorationStyle,
								ie = [
									{
										range: new $.$iL(
											J.marker.startLineNumber,
											J.marker.startColumn,
											J.marker.endLineNumber,
											J.marker.endColumn,
										),
										options: {
											className:
												Y === "squiggle"
													? "squiggly-ai cpp-pending-import-decoration"
													: "auto-import-suggestion-blue-background",
											stickiness:
												d.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
											zIndex: 5,
											description: "Pending import decoration",
											isWholeLine: !1,
											collapseOnReplaceEdit: !0,
										},
									},
								],
								[ne] = X.deltaDecorations([], ie);
							(this.q = {
								shownImport: J,
								decorationId: ne,
								importWidget: this.w.createInstance(
									k.$hfd,
									K,
									ne,
									J.action.action.title,
									this.$(J.marker),
								),
							}),
								this.q.importWidget.show();
						}
					}
					gb(K, J) {
						if (!this.isEnabled()) return;
						for (const [X, Y] of this.m.entries()) Y.currentMarkers = [];
						if (!K.getModel())
							throw new Error(
								"model is undefined, so we can't update cached markers",
							);
						for (const X of J) {
							const Y = this.ab(K, X);
							Y !== void 0 && Y.currentMarkers.push(X);
						}
						this.h.set(K.getModel()?.uri?.toString() ?? "", J);
					}
					jb(K, J) {
						if (!J)
							throw new Error(
								"position is undefined, so we can't score the import",
							);
						const {
							startLineNumber: W,
							startColumn: X,
							endLineNumber: Y,
							endColumn: ie,
						} = K;
						return (
							Math.abs(J.lineNumber - W) +
							Math.abs(Math.floor(J.column - X) / this.hb)
						);
					}
					kb(K, J, W) {
						const X = this.ab(K, J.marker)?.currentMarkers;
						return X === void 0
							? 1 / 0
							: Math.min(1 / 0, ...X.map((Y) => this.jb(Y, W)));
					}
					showCorrectUI(K, J) {
						const W = performance.now(),
							X = [];
						if ((X.push({ name: "start", time: W }), !this.isEnabled())) return;
						const Y = K.getPosition();
						if (Y === null) return;
						if (J?.hideIfSameState && Y !== null) {
							const ye = K.getModel(),
								ue = ye?.uri;
							if (ye !== null && ue !== void 0) {
								const fe = ye.getVersionId();
								if (
									fe === this.j?.modelVersion &&
									D.$dh.isEqual(this.j?.uri, ue) &&
									Y?.lineNumber === this.j?.cursorPosition?.lineNumber &&
									Y?.column === this.j?.cursorPosition?.column
								)
									return;
								this.j = { uri: ue, modelVersion: fe, cursorPosition: Y };
							}
						}
						X.push({ name: "preProcessingTime", time: performance.now() });
						const ie = K.getVisibleRanges(),
							ne = ie.some(
								(ye) =>
									Y !== null &&
									this.Cb(ye, new $.$iL(Y.lineNumber, 1, Y.lineNumber, 1)),
							);
						X.push({ name: "visibleRangesTime", time: performance.now() });
						const ee = (ye) => {
								if (this.bb(ye, K) && this.kb(K, ye, Y) < this.ib) {
									const ue = this.ab(K, ye.marker);
									if (ue?.currentMarkers.at(0))
										return ue.currentMarkers.some(
											(fe) =>
												this.xb(K, fe) === ue.symbolName &&
												(!ne || ie.some((me) => this.Cb(me, fe))),
										);
								}
								return !1;
							},
							_ = this.n.filter(ee);
						X.push({ name: "validImportsTime", time: performance.now() });
						const { vb: te } = this;
						X.push({ name: "hideShownImportTime", time: performance.now() });
						const Q = _.filter((ye) => ye !== this.vb),
							Z =
								Y === null
									? []
									: Q.sort((ye, ue) => this.kb(K, ye, Y) - this.kb(K, ue, Y)),
							re =
								te === void 0 ||
								(Z.length > 0 && this.kb(K, Z[0], Y) + x < this.kb(K, te, Y))
									? Z.at(0)
									: te;
						X.push({
							name: "nextPossiblyShownImportTime",
							time: performance.now(),
						});
						const le = K.getModel()?.uri;
						if (le === void 0)
							throw new Error(
								"uri is undefined, so we can't check if cpp is showing",
							);
						const oe = re && this.tb(le, re.marker.startLineNumber);
						X.push({
							name: "cppIsShowingOrIsInlineDiffTime",
							time: performance.now(),
						});
						const ae = re && this.ab(K, re.marker),
							pe = ae?.currentMarkers
								.sort((ye, ue) => this.jb(ye, Y) - this.jb(ue, Y))
								.find((ye) => this.xb(K, ye) === ae.symbolName);
						X.push({ name: "matchingMarkerTime", time: performance.now() });
						const $e = oe ? void 0 : pe && re;
						$e === void 0
							? (this.hideShownImport(K),
								X.push({
									name: "hideShownImportTime",
									time: performance.now(),
								}))
							: ee($e) &&
								(($e.marker = pe ?? $e.marker),
								this.fb(K, $e),
								X.push({ name: "showImportTime", time: performance.now() })),
							this.sb(performance.now() - W, X);
					}
					sb(K, J) {
						this.nb.push(K),
							K > this.qb &&
								(this.ob.push(J), this.ob.length > this.pb && this.ob.shift()),
							this.N.assert(
								K < this.qb,
								`showCorrectUI took too long: ${JSON.stringify({ latency: K, evtTimes: J.slice(1).map((W, X) => ({ name: W.name, latency: Math.round(W.time - J[X].time) })) })}`,
							),
							this.nb.length > this.lb &&
								(this.nb.shift(),
								this.nb.reduce((X, Y) => X + Y, 0) / this.nb.length > this.mb &&
									!this.rb &&
									((this.rb = !0),
									(async () => {
										try {
											(await this.aiClient()).reportBug({
												bug: `average onChangeCursorPrediction latency is too high for import prediction: ${JSON.stringify({ lastLatencies: this.nb.map((X) => Math.round(X)), lastLongEventLatencies: this.ob.map((X) => X.slice(1).map((Y, ie) => ({ name: Y.name, latency: Math.round(Y.time - X[ie].time) }))) })}`,
												bugType:
													i.ReportBugRequest_BugType.MISC_AUTOMATIC_ERROR,
											});
										} catch {}
									})()));
					}
					tb(K, J) {
						const W = this.s.nonPersistentStorage.inlineDiffs;
						if (W !== void 0) {
							const ne =
								this.s.nonPersistentStorage.inprogressAIGenerations.map(
									(_) => _.generationUUID,
								);
							if (
								W.some((_) => {
									const te = ne.includes(_.generationUUID),
										Q =
											J >= _.currentRange.startLineNumber &&
											J <= _.currentRange.endLineNumberExclusive,
										Z = D.$dh.isEqual(_.uri, K) || K.fsPath === _.uri.fsPath;
									return te && Q && Z;
								})
							)
								return !0;
						}
						const X = this.g?.getCurrentSuggestion?.();
						if (X === void 0) return !1;
						const { originalText: Y, replaceText: ie } = X;
						return Y.trim() !== ie.trim();
					}
					ub(K, J) {
						const W = this.s.nonPersistentStorage.inlineDiffs;
						if (W === void 0) return !1;
						const X = this.s.nonPersistentStorage.inprogressAIGenerations.map(
							(Y) => Y.generationUUID,
						);
						return W.some((Y) => {
							const ie = X.includes(Y.generationUUID),
								ne =
									J >= Y.currentRange.startLineNumber &&
									J < Y.currentRange.endLineNumberExclusive,
								ee = D.$dh.isEqual(Y.uri, K) || K.fsPath === Y.uri.fsPath;
							return !ie && ne && ee;
						});
					}
					get vb() {
						return this.q?.shownImport;
					}
					wb() {
						const K = this.H.getViewModel();
						for (const J of [
							...K.getEntries(y.StatusbarAlignment.LEFT),
							...K.getEntries(y.StatusbarAlignment.RIGHT),
						])
							if (
								J.id === "vscodevim.vim.primary" &&
								["INSERT"].some((W) => J.container.innerText.includes(W))
							)
								return !0;
						return !1;
					}
					xb(K, J) {
						const W = K.getModel();
						if (!W)
							throw new Error(
								"model is undefined, so we can't get the marker contents",
							);
						return W.getValueInRange({
							startLineNumber: J.startLineNumber,
							startColumn: J.startColumn,
							endLineNumber: J.endLineNumber,
							endColumn: J.endColumn,
						});
					}
					handleNewGreens(K, J) {
						const W = Date.now();
						this.r = this.r
							.filter((X) => W - X.timestamp <= 3e4)
							.concat(J.map((X) => ({ uri: K.uri, range: X, timestamp: W })));
					}
					yb(K, J) {
						const { startLineNumber: W, endLineNumber: X } = J.range,
							Y = X - W + 1,
							ne =
								J.text.split(`
`).length - Y;
						this.r = this.r.map((ee) =>
							ee.range.startLineNumber > W &&
							D.$dh.isEqual(ee.uri, K.getModel()?.uri)
								? {
										...ee,
										range: {
											...ee.range,
											startLineNumber: ee.range.startLineNumber + ne,
											endLineNumber: ee.range.endLineNumber + ne,
										},
									}
								: ee,
						);
					}
					zb(K, J) {
						const W = K.getModel();
						if (!W)
							throw new Error(
								"model is undefined, so we can't check if the version is the same",
							);
						const X = W.getVersionId(),
							Y = this.m.get(this.Z(K, J.marker));
						if (!Y)
							throw new Error(
								"seenLintError is undefined, so we can't check if the version is the same",
							);
						if (Y.versionComputedAt === X) return !1;
						const ie = J.action.action.command !== void 0,
							ne =
								J.edit.text.split(`
`).length === 2 &&
								J.edit.text.trim().split(`
`).length === 1;
						return ie || !ne;
					}
					isShowingImportSuggestion() {
						return !1;
					}
					hideWidgetsIfConflictsWithCppSuggestion(K, J) {
						const W = this.q;
						if (W) {
							const { shownImport: X, decorationId: Y } = W;
							if (this.bb(X, K)) {
								const ie = K.getModel();
								if (ie === null) return;
								const ne = ie.getDecorationRange(Y);
								ne !== null &&
									J.startLineNumber <= ne.startLineNumber &&
									J.endLineNumberExclusive > ne.startLineNumber &&
									this.hideShownImport(K);
							}
						}
					}
					Ab(K) {
						const J = Date.now(),
							W = 3e4;
						return (
							(this.r = this.r.filter((X) => J - X.timestamp <= W)),
							this.r.some(
								(X) =>
									D.$dh.isEqual(X.uri, K.resource) &&
									this.Cb(X.range, {
										startLineNumber: K.startLineNumber,
										startColumn: K.startColumn,
										endLineNumber: K.endLineNumber,
										endColumn: K.endColumn,
									}),
							)
						);
					}
					Bb(K) {
						return this.Ab(K) || this.ub(K.resource, K.startLineNumber);
					}
					Cb(K, J) {
						return !(
							K.endLineNumber < J.startLineNumber ||
							K.startLineNumber > J.endLineNumber ||
							(K.endLineNumber === J.startLineNumber &&
								K.endColumn < J.startColumn) ||
							(K.startLineNumber === J.endLineNumber &&
								K.startColumn > J.endColumn)
						);
					}
					isEnabled() {
						return !!(
							this.s.applicationUserPersistentStorage.cppAutoImportEnabled &&
							!this.s.applicationUserPersistentStorage
								.backendHasDisabledCppAutoImport &&
							this.s.applicationUserPersistentStorage.cppEnabled
						);
					}
					Db(K) {
						for (const [J, W] of [...this.m.entries()]) {
							const { status: X, seenAt: Y, uri: ie } = W;
							D.$dh.isEqual(ie, K.getModel()?.uri) &&
								X === "no-actions" &&
								this.Eb.filter(
									(ee) => ee.time > +Y && ee.uri !== K.getModel()?.uri + "",
								).length > 0 &&
								this.m.delete(J);
						}
					}
					markFileAsUpdated(K) {
						this.Eb.push({ uri: K.toString(), time: Date.now() }),
							this.Eb.length > this.Fb && this.Eb.shift();
					}
					Hb(K) {
						for (const [J, W] of [...this.m.entries()])
							D.$dh.isEqual(W.uri, K) &&
								W.status === "noop" &&
								+W.seenAt > Date.now() - this.Gb &&
								this.m.delete(J);
					}
					async Lb(K, J, W) {
						let X;
						const Y = await this.Kb.withSemaphore(
							() =>
								new Promise((ee, _) => {
									X = Date.now();
									const te = {
										action: K,
										cancellationToken: w.CancellationToken.None,
										resolveEdits: ee,
										rejectEdits: _,
										appliedAt: Date.now(),
										symbolName: W,
									};
									(this.Jb = te),
										setTimeout(() => {
											this.Jb === te &&
												((this.Jb = void 0),
												_("action was not applied in time"));
										}, this.Ib),
										(async () => {
											try {
												const Z = (
													await this.M.executeCommand(
														J.id,
														...(J.arguments || []),
													)
												).changes;
												if (Z === void 0)
													throw new Error("command returned no changes");
												if (te === this.Jb) {
													this.Jb = void 0;
													const se = {
														edits: Object.entries(Z).flatMap(([re, le]) =>
															le.map((oe) => ({
																resource: M.URI.parse(re),
																textEdit: {
																	range: new $.$iL(
																		oe.range.start.line,
																		oe.range.start.character,
																		oe.range.end.line,
																		oe.range.end.character,
																	),
																	text: oe.newText,
																},
																versionId: -1,
															})),
														),
													};
													ee(se);
												}
											} catch (Q) {
												this.Jb === te && ((this.Jb = void 0), _(Q)),
													(async () => {
														try {
															(await this.aiClient()).reportBug({
																bug: "Command execution for import prediction threw an error.",
																bugType:
																	i.ReportBugRequest_BugType
																		.MISC_AUTOMATIC_ERROR,
															});
														} catch {}
													})(),
													this.N.assert(
														!1,
														`command execution for import prediction threw an error: ${Q}`,
													);
												return;
											}
										})();
								}),
						);
						if (X === void 0) throw new Error("startTime is undefined");
						const ie = Date.now() - X;
						return (
							ie > 250 &&
								(async () => {
									try {
										(await this.aiClient()).reportBug({
											bug: `Command execution for import prediction took too long: ${ie}`,
											bugType: i.ReportBugRequest_BugType.MISC_AUTOMATIC_ERROR,
										});
									} catch {}
								})(),
							Y
						);
					}
					Mb() {
						const K = this.Jb;
						if (K !== void 0) {
							if (K.appliedAt < Date.now() - this.Ib) {
								(this.Jb = void 0),
									K.rejectEdits("action was not applied in time");
								return;
							}
							return K;
						}
					}
					maybeInterceptBulkEdit(K) {
						const J = this.Mb(),
							W = 250;
						return J !== void 0 &&
							K.edits.some(
								(X) =>
									"textEdit" in X &&
									X.textEdit.text.match(new RegExp("(?<!\\w)" + J.symbolName)),
							)
							? (K.edits.length > 0 && (J.resolveEdits(K), (this.Jb = void 0)),
								!0)
							: J !== void 0 && Date.now() - J.appliedAt < W;
					}
					async moveLineToEndOfImportsSectionExclusive(K, J) {
						const W = U.$ZNb.get(K);
						if (!W) return J;
						const X = await W.getFoldingModel();
						if (!X) return J;
						const Y = X.getAllRegionsAtLine(J);
						if (Y.length === 0) return this.Nb(K, J) ? J + 1 : J;
						const ie = Y[Y.length - 1];
						return this.Nb(K, ie.startLineNumber) ? ie.endLineNumber + 1 : J;
					}
					Nb(K, J) {
						const W = K.getModel()?.getLineContent(J);
						return W === void 0
							? !1
							: W.startsWith("from ") ||
									W.startsWith("import ") ||
									W.includes("= require(") ||
									W.startsWith("use ");
					}
				};
				q = Ne(
					[
						j(0, g.$0zb),
						j(1, o.$Vi),
						j(2, c.$aM),
						j(3, h.$Li),
						j(4, l.$wcc),
						j(5, b.$Led),
						j(6, a.$3Db),
						j(7, E.$dtb),
						j(8, m.$MO),
						j(9, y.$d6b),
						j(10, f.$V7b),
						j(11, S.$k3),
						j(12, A.$H7b),
						j(13, O.$ek),
						j(14, z.$kcc),
					],
					q,
				);
				const V = (G) => {
					if (G === void 0) throw new Error("x is undefined");
					return G;
				};
				(0, P.$lK)(I.$lfc, q, P.InstantiationType.Delayed);
			},
		),
		define(
			de[4188],
			he([
				1, 0, 30, 55, 52, 137, 3447, 3943, 1978, 3628, 4187, 3639, 2357, 1285,
				3938,
			]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rfd = void 0);
				let d = class {
					constructor(r, u) {
						(this.a = r), (this.b = u), this.b.onStartup();
					}
				};
				(e.$rfd = d),
					(e.$rfd = d = Ne([j(0, E.$jfc), j(1, C.$pfd)], d)),
					t.$Io
						.as(i.Extensions.Workbench)
						.registerWorkbenchContribution(d, w.LifecyclePhase.Restored);
			},
		),
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
		define(
			de[4189],
			he([1, 0, 2, 2, 2, 2, 13, 12, 169, 177, 246, 36, 1979, 385]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerUnifiedModeSwitcher = g);
				const n = (0, t.template)("<div> toggle, <!> open");
				function g(p) {
					const { currentComposer: o } = (0, r.useComposerDataHandle)(
							() => p.composerDataHandle,
						),
						f = (0, a.$odc)(),
						b = (0, C.createMemo)(() => ` ${d.$m ? " \u2318." : " ctrl+."}`),
						s = (0, C.createMemo)(
							() => ` ${d.$m ? " \u2318\u21E7." : " ctrl+shift+."}`,
						),
						l = (0, C.createMemo)(
							() =>
								!!f.reactiveStorageService.applicationUserPersistentStorage
									.composerState.isAutoApplyEnabled,
						),
						y = (0, C.createMemo)(() => !!o().isAgentic),
						$ = (0, c.$5$b)(m.NEW_COMPOSER_CHAT_ACTION_ID),
						v = (0, c.$5$b)(m.COMPOSER_EDIT_ACTION_ID);
					return (0, w.createComponent)(h.$2bc, {
						get buttonId() {
							return (0, u.getAgenticModeToggleButtonId)(o().composerId);
						},
						onCloseIgnoresClicking: () => {
							f.composerService.focus(o().composerId);
						},
						get belowListComponent() {
							return (() => {
								const S = n(),
									I = S.firstChild,
									T = I.nextSibling,
									P = T.nextSibling;
								return (
									S.style.setProperty("font-size", "8px"),
									S.style.setProperty("line-height", "150%"),
									S.style.setProperty(
										"color",
										"var(--vscode-input-placeholderForeground)",
									),
									S.style.setProperty("padding", "2px 4px"),
									S.style.setProperty("text-align", "right"),
									S.style.setProperty("width", "100%"),
									S.style.setProperty("box-sizing", "border-box"),
									(0, i.insert)(S, b, I),
									(0, i.insert)(S, s, T),
									S
								);
							})();
						},
						get buttonHint() {
							return `${b().trim()} toggle, ${s().trim()} open`;
						},
						get items() {
							return [
								{
									id: "chat",
									label: `Chat${$() ? ` ${$()}` : ""}`,
									description:
										"Useful for asking questions about the selected context",
									keywords: ["ask"],
								},
								{
									id: "edit",
									label: `Edit${v() ? ` ${v()}` : ""}`,
									description:
										"Apply edits directly within the selected context",
									keywords: ["write", "normal"],
								},
								{
									id: "agent",
									label: "Agent",
									description:
										"Agents can use tools, search the codebase, and edit files broadly",
									keywords: ["tools", "codebase"],
								},
							];
						},
						anchor: "top-right",
						onSelect: (S) => {
							let I = !1,
								T = !1;
							S === "chat"
								? ((I = !1), (T = !1))
								: S === "edit"
									? ((I = !0), (T = !1))
									: S === "agent" && ((I = !0), (T = !0)),
								f.reactiveStorageService.setApplicationUserPersistentStorage(
									"composerState",
									"isAutoApplyEnabled",
									I,
								),
								f.composerDataService.updateComposerData(o().composerId, {
									isAgentic: T,
								}),
								f.reactiveStorageService.setApplicationUserPersistentStorage(
									"composerState",
									"defaultUseToolsInEdit",
									T,
								);
						},
						labelStyle: {
							color: "var(--vscode-input-placeholderForeground)",
							padding: "0px",
						},
						buttonStyle: { "padding-right": "0px" },
						get origLabel() {
							return (0, E.memo)(() => !!y())()
								? "agent"
								: l()
									? "edit"
									: "chat";
						},
						get value() {
							return (0, E.memo)(() => !!y())()
								? "agent"
								: l()
									? "edit"
									: "chat";
						},
						isRelative: !1,
						menuWidth: 195,
					});
				}
			},
		),
		define(
			de[4190],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 2, 13, 12, 1778, 4189, 4150, 1968, 177, 311,
				1066, 246, 36, 2407,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerBottomBar = y);
				const s = (0, t.template)(
						'<div class="composer-bar-input-buttons"><div></div><div class="button-container composer-button-area">',
					),
					l = (0, t.template)("<div>agent");
				function y($) {
					const v = (0, b.$odc)(),
						{
							currentComposer: S,
							composerDataHandle: I,
							updateCurrentComposer: T,
						} = (0, g.useComposerDataHandle)(() => $.composerDataHandle),
						P = v.analyticsService,
						k = (0, o.useShouldShowApplyLastMessage)(I),
						L = (0, r.createMemo)(() => " \u23CE"),
						D = (0, r.createMemo)(
							() => ` ${u.$m ? " \u2318\u23CE" : " ctrl+\u23CE"}`,
						),
						M = (0, r.createMemo)(
							() =>
								!v.composerService.canComposerSubmit(
									S().composerId,
									$.bubbleId,
								) &&
								(!k() || !!$.bubbleId),
						),
						{ showHover: N, hideHover: A } = (0, p.useComposerHoverTooltip)({
							delay: 300,
							additionalClasses: ["chat-hover-tooltip"],
						}),
						R = (0, r.createMemo)(() =>
							v.composerDataService.getComposerForceMode(S().composerId),
						),
						O = (0, r.createMemo)(
							() =>
								v.reactiveStorageService.applicationUserPersistentStorage
									.composerState.isAutoApplyEnabled,
						),
						B = (0, n.useCachedChatUsesTools)(),
						U = (0, r.createMemo)(() => R() !== "chat" || B()),
						z = (0, r.createMemo)(() =>
							v.composerDataService.getHasAgenticBeforeBubble(
								S().composerId,
								$.bubbleId,
							),
						),
						F = (0, r.createMemo)(
							() =>
								!!v.reactiveStorageService.applicationUserPersistentStorage
									.composerState.unification,
						);
					return (() => {
						const x = s(),
							H = x.firstChild,
							q = H.nextSibling;
						return (
							x.addEventListener("click", (V) => {
								V.target === V.currentTarget && $.onContainerClick();
							}),
							H.style.setProperty("display", "flex"),
							H.style.setProperty("align-items", "center"),
							H.style.setProperty("gap", "4px"),
							H.style.setProperty("margin-right", "4px"),
							H.style.setProperty("min-width", "0px"),
							H.style.setProperty("flex-basis", "0"),
							H.style.setProperty("flex-grow", "1"),
							(0, m.insert)(H, () => $.bottomLeftContent),
							(0, m.insert)(q, () => $.bottomRightExtraContent, null),
							(0, m.insert)(
								q,
								(0, d.createComponent)(r.Show, {
									get when() {
										return U();
									},
									get fallback() {
										return (0, d.createComponent)(r.Show, {
											get when() {
												return k() && !$.bubbleId;
											},
											get fallback() {
												return [
													(0, d.createComponent)(a.ComposerBottomBarButton, {
														title: "submit",
														type: "secondary",
														get isDisabled() {
															return M();
														},
														get keybinding() {
															return L();
														},
														onClick: () => {
															const V = R();
															P.trackEvent("composer.submit", {
																mode: V,
																entry: "click",
																useCodebase: !1,
																isAgentic: S().isAgentic ?? !1,
																isEditing: O() ?? !1,
															}),
																$.onSubmit({ mode: V });
														},
													}),
													(0, d.createComponent)(a.ComposerBottomBarButton, {
														title: "codebase",
														get keybinding() {
															return D();
														},
														onClick: () => {
															const V = R();
															P.trackEvent("composer.submit", {
																mode: V,
																entry: "click",
																useCodebase: !0,
																isAgentic: S().isAgentic ?? !1,
																isEditing: O() ?? !1,
															}),
																$.onSubmit({ mode: V, useCodebase: !0 });
														},
														get isDisabled() {
															return M();
														},
														get hintText() {
															return `Submit codebase ${R()}`;
														},
													}),
												];
											},
											get children() {
												return (0, d.createComponent)(
													a.ComposerBottomBarButton,
													{
														title: "apply all",
														get keybinding() {
															return (0, f.getShortcut)("\u23CE");
														},
														onClick: () => {
															P.trackEvent("composer.apply_last", {
																entry: "click",
															}),
																v.composerService.applyCachedCodeBlocksOfLastMessage(
																	S().composerId,
																);
														},
														hintText: "Apply changes from all messages above",
														type: "primary",
													},
												);
											},
										});
									},
									get children() {
										return [
											(0, d.createComponent)(r.Show, {
												get when() {
													return $.shouldShowAgentic;
												},
												get children() {
													return (0, d.createComponent)(r.Show, {
														get when() {
															return !z();
														},
														get fallback() {
															return (() => {
																const V = l();
																return (
																	(0, i.addEventListener)(V, "mouseleave", A),
																	V.addEventListener("mouseenter", (G) => {
																		N(G, {
																			value: `This composer is in ${S().isAgentic ? "agent" : "normal"} mode`,
																		});
																	}),
																	V.style.setProperty(
																		"color",
																		"var(--vscode-input-placeholderForeground)",
																	),
																	V.style.setProperty("opacity", "0.8"),
																	V.style.setProperty("line-height", "150%"),
																	V
																);
															})();
														},
														get children() {
															return (0, d.createComponent)(r.Show, {
																get when() {
																	return F();
																},
																get fallback() {
																	return (0, d.createComponent)(
																		c.ComposerUnUnifiedModeSwitcher,
																		{
																			get composerDataHandle() {
																				return I();
																			},
																		},
																	);
																},
																get children() {
																	return (0, d.createComponent)(
																		h.ComposerUnifiedModeSwitcher,
																		{
																			get composerDataHandle() {
																				return I();
																			},
																		},
																	);
																},
															});
														},
													});
												},
											}),
											(0, d.createComponent)(a.ComposerBottomBarButton, {
												title: "submit",
												type: "primary",
												get isDisabled() {
													return M();
												},
												get keybinding() {
													return L();
												},
												get style() {
													return (0, C.memo)(() => !!S().isAgentic)()
														? {
																background: "var(--vscode-button-background)",
																color: "var(--vscode-button-foreground)",
																opacity: M() ? 0.5 : 1,
															}
														: {};
												},
												onClick: () => {
													if (M()) return;
													const V = R();
													P.trackEvent("composer.submit", {
														mode: V,
														entry: "click",
														useCodebase: !1,
														isAgentic: S().isAgentic ?? !1,
														isEditing: O() ?? !1,
													}),
														$.onSubmit({ mode: V });
												},
											}),
										];
									},
								}),
								null,
							),
							(0, E.effect)(
								(V) => {
									const G = {
											overflow: "hidden",
											"margin-top": "4px",
											...$.style,
										},
										K = {
											"margin-left": "auto",
											...(U()
												? {
														display: "flex",
														"align-items": "center",
														gap: "6px",
													}
												: {}),
										};
									return (
										(V._v$ = (0, w.style)(x, G, V._v$)),
										(V._v$2 = (0, w.style)(q, K, V._v$2)),
										V
									);
								},
								{ _v$: void 0, _v$2: void 0 },
							),
							x
						);
					})();
				}
			},
		),
		define(
			de[1372],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 26, 36, 331, 2522]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$i$b = void 0);
				const g = (0, t.template)("<div>"),
					p = (o) => {
						const f = (0, c.$odc)(),
							[b, s] = (0, a.splitProps)(o, [
								"children",
								"onClick",
								"className",
								"icon",
								"iconStyle",
								"isSelected",
								"rightIcon",
								"as",
							]);
						let l;
						const y = {
							display: "flex",
							"align-items": "center",
							"justify-content": "center",
							width: "8px",
							height: "8px",
							"font-size": "10px",
							color: "var(--vscode-editor-foreground)",
						};
						return (() => {
							const $ = g(),
								v = l;
							return (
								typeof v == "function" ? (0, m.use)(v, $) : (l = $),
								(0, r.spread)(
									$,
									(0, u.mergeProps)(
										{
											get onClick() {
												return b.onClick;
											},
											get class() {
												return (
													"menu-item" +
													((0, n.$d$b)(f.themeService) ? " dark" : " light")
												);
											},
											get style() {
												return {
													padding: "0px 4px",
													"border-radius": "2px",
													display: "flex",
													"align-items": "center",
													gap: "4px",
													"font-size": "10px",
													border: "none",
													cursor: "pointer",
													color: "var(--text-primary)",
													outline: "none",
													"flex-shrink": "0",
													...(b.isSelected && {
														backgroundColor: (0, n.$d$b)(f.themeService)
															? "rgba(255, 255, 255, 0.06)"
															: "rgba(0, 0, 0, 0.06)",
													}),
												};
											},
										},
										s,
									),
									!1,
									!0,
								),
								(0, i.insert)(
									$,
									(0, w.createComponent)(a.Show, {
										get when() {
											return b.icon;
										},
										get children() {
											const S = g();
											return (
												(0, d.effect)(
													(I) => {
														const T = h.ThemeIcon.asClassName(b.icon),
															P = { ...y };
														return (
															T !== I._v$ && (0, C.className)(S, (I._v$ = T)),
															(I._v$2 = (0, E.style)(S, P, I._v$2)),
															I
														);
													},
													{ _v$: void 0, _v$2: void 0 },
												),
												S
											);
										},
									}),
									null,
								),
								(0, i.insert)($, () => b.children, null),
								(0, i.insert)(
									$,
									(0, w.createComponent)(a.Show, {
										get when() {
											return b.rightIcon;
										},
										get children() {
											const S = g();
											return (
												(0, d.effect)(
													(I) => {
														const T = h.ThemeIcon.asClassName(b.rightIcon),
															P = { ...y, "margin-left": "auto" };
														return (
															T !== I._v$3 && (0, C.className)(S, (I._v$3 = T)),
															(I._v$4 = (0, E.style)(S, P, I._v$4)),
															I
														);
													},
													{ _v$3: void 0, _v$4: void 0 },
												),
												S
											);
										},
									}),
									null,
								),
								$
							);
						})();
					};
				(e.$i$b = p), (e.default = e.$i$b);
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[1373],
		he([
			1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 13, 33, 14, 322, 59, 54, 26, 41, 852,
			140, 156, 1371, 36, 1708, 246, 7, 12, 1004, 364, 484, 1372,
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
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$x$b = e.$w$b = e.$v$b = void 0),
				(e.$r$b = Y),
				(e.$s$b = ne),
				(e.$t$b = ee),
				(e.$u$b = _),
				(D = xi(D));
			const M = (0, t.template)("<div>"),
				N = (0, t.template)(
					'<div><div class="markdown-codeblock-header-reply"><div class="clickable"><div></div>Ask</div></div><div class="clickable"><div></div>Copy</div><div class="clickable"><div></div>Run',
				),
				A = (0, t.template)(
					'<div class="markdown-codeblock-header-reply"><div class="clickable">Ask',
				),
				R = (0, t.template)('<div class="clickable">'),
				O = (0, t.template)('<div><div class="clickable">Apply'),
				B = (0, t.template)(
					'<div>Apply to <span id="current-file-name"></span>?',
				),
				U = (0, t.template)(
					"<div>AI did not predict an origin file for this codeblock",
				),
				z = (0, t.template)("<div><div></div>Continue"),
				F = (0, t.template)("<div><div></div>Cancel"),
				x = (0, t.template)('<div class="cursor-ai-generating-text-dots">'),
				H = (0, t.template)("<div>Done"),
				q = (0, t.template)('<div class="clickable"><div></div>Reapply'),
				V = (0, t.template)('<div class="clickable"><div></div>Reject'),
				G = (0, t.template)('<div class="clickable">Accept'),
				K = (0, t.template)("<div>No file to apply to"),
				J = (0, t.template)(
					'<div><div><div class="markdown-codeblock-header-reply"><div></div>Ask</div><div><div></div></div><div><div></div>Apply',
				),
				W = (0, t.template)("<div><div>"),
				X = (0, t.template)('<div><div><div class="show-file-icons"><div>');
			function Y(se) {
				const [re, le] = (0, a.createSignal)(se.initialValue);
				return (
					(0, a.onMount)(() => {
						let oe, ae;
						const pe = se.getModel(),
							$e = async () => {
								const ue = await se.updateFunc(pe, re());
								le(() => ue);
							},
							ye = pe.onDidChangeContent(() => {
								oe !== void 0 && clearTimeout(oe);
								const ue = se.debounceTime - (Date.now() - (ae ?? 0));
								ue > 0
									? (oe = setTimeout(async () => {
											(ae = Date.now()), await $e();
										}, ue))
									: ((ae = Date.now()), $e());
							});
						(0, a.onCleanup)(() => {
							ye.dispose(), oe !== void 0 && clearTimeout(oe);
						}),
							$e();
					}),
					[re, le]
				);
			}
			function ie(se, re, le, oe, ae, pe) {
				se.preventDefault(), se.stopPropagation();
				const $e = oe.closest(".markdown-section"),
					ye = $e?.getAttribute("data-markdown-raw"),
					ue = parseInt($e?.getAttribute("data-section-index") ?? "");
				if (!ye || isNaN(ue)) return;
				const fe =
					ae.selectedTab().lastFocusedBubbleId ??
					ae.selectedTab().bubbles[ae.selectedTab().bubbles.length - 1].id;
				ae.addContext({
					tabId: re,
					bubbleId: fe,
					contextType: "quotes",
					value: { bubbleId: le, sectionIndex: ue, markdown: ye },
				}),
					ae.focusInput();
			}
			function ne(se) {
				const re = (0, $.$odc)(),
					[le, oe] = (0, a.createSignal)(!1),
					[ae, pe] = (0, a.createSignal)(!0),
					[$e, ye, ue] = (0, k.$A0b)(),
					fe = `code-block-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
				let me;
				const ve = (0, a.createMemo)(() => {
						const lt = re.chatDataService.getBubbleData(
							se.slashEditOptions?.tabId,
							se.slashEditOptions?.bubbleId,
						);
						if (!lt || !lt.text) return !1;
						const ct = /```[\w-]+:.+?\n[\s\S]*?```/g,
							gt = lt.text.match(ct);
						return gt ? gt.length === 1 : !1;
					}),
					ge = (0, a.createMemo)(() => {
						const lt = re.aiChatService.selectedTab().selectedBubbleId;
						return lt ? lt === se.slashEditOptions?.bubbleId : !1;
					}),
					[be] = (0, a.createResource)(async () => {
						await re.aiFeatureStatusService.maybeRefreshConfig(
							"applyButtonLineLimit",
						);
						const lt = re.aiFeatureStatusService.getCachedConfig(
							"applyButtonLineLimit",
						);
						return console.log("line limit", lt), lt;
					}),
					[Ce] = (0, a.createResource)(
						async () =>
							await re.applyToFileActionsService.isFileTooBigToApply(
								se.aiPredictedFilePath ?? "",
							),
					),
					Le = async (lt, ct) => {
						const gt =
							await re.applyToFileActionsService.getApplyToFileMenuItems_MAY_RUN_LONG(
								re.workspaceContextService.resolveRelativePath(
									se.aiPredictedFilePath ?? "",
								),
								lt.getValue(),
								"",
								{
									...se.slashEditOptions,
									clickedCodeBlockContents: lt.getValue(),
								},
							);
						if (ct !== void 0 && (gt === void 0 || ct.length > gt.length))
							return ct;
						const ht = gt.filter((Rt) => Rt.wholeFile);
						return (
							se.codeblockActionsCallback &&
								ht.length > 0 &&
								se.codeblockActionsCallback(ht),
							gt
						);
					},
					[Fe, Oe] = Y({
						getModel: se.getModelOfCodeBlock,
						initialValue:
							re.applyToFileActionsService.getApplyToFileMenuItemsAlwaysAvailable(
								re.workspaceContextService.resolveRelativePath(
									se.aiPredictedFilePath ?? "",
								),
								se.slashEditOptions,
							),
						updateFunc: Le,
						debounceTime: 1e3,
					}),
					[xe, He] = (0, a.createSignal)(void 0);
				(0, a.createEffect)(() => {
					He(se.aiPredictedFilePath),
						(async () => {
							const lt = new h.$Ce(),
								ct = await re.anythingQuickAccessProvider.getFilePicks(
									(0, n.$hs)(se.aiPredictedFilePath ?? ""),
									new g.$Gc(),
									lt.token,
								),
								{ path: gt } = ct[0]?.resource ?? {};
							se.aiPredictedFilePath &&
								gt?.includes(se.aiPredictedFilePath) &&
								He(gt);
						})();
				});
				const Ke = (0, a.createMemo)(() => {
						const lt = xe();
						if (lt)
							return re.reactiveStorageService.nonPersistentStorage.inlineDiffs.find(
								(ct) =>
									ct.uri.toString() ===
										re.workspaceContextService
											.resolveRelativePath(lt)
											.toString() && !ct.attachedToPromptBar,
							);
					}),
					Je = (0, a.createMemo)(() => {
						if (le()) return "confirming";
						const lt = Ke();
						return lt !== void 0
							? re.reactiveStorageService.nonPersistentStorage.inprogressAIGenerations.some(
									(gt) =>
										gt.generationUUID === lt?.generationUUID &&
										gt.metadata.type === "apply",
								)
								? "generating"
								: "done"
							: "startingShow";
					}),
					[Te, Ee] = Y({
						getModel: se.getModelOfCodeBlock,
						initialValue: void 0,
						updateFunc: async (lt, ct) => {
							if (
								(console.log("updating number to link to"),
								se.aiPredictedFilePath === void 0)
							)
								return;
							const gt =
								await re.applyToFileActionsService.getLineNumberOfTopLevelScope_MAY_RUN_LONG(
									re.workspaceContextService.resolveRelativePath(
										se.aiPredictedFilePath ?? "",
									),
									lt.getValue(),
								);
							return gt === void 0 && ct !== void 0 ? ct : gt;
						},
						debounceTime: 1e3,
					});
				(0, a.createEffect)(() => {
					Je() !== "startingShow" && ue();
				});
				const [Ie, Be] = (0, a.createSignal)(0),
					[Se, ke] = (0, a.createSignal)(0);
				let Ue, qe, Ae, Me;
				const De = (0, I.$Ogb)().ResizeObserver;
				(0, a.onMount)(() => {
					const lt = new De((ct) => {
						for (const gt of ct) {
							const { width: ht, height: Rt } = gt.contentRect;
							Be(ht);
							let Nt = 0,
								jt = 0,
								ti = 0;
							qe && (Nt = qe.getBoundingClientRect().width),
								Ae && (jt = Ae.getBoundingClientRect().width),
								Me && (ti = Me.getBoundingClientRect().width),
								ke(ht - Math.max(Nt, jt, ti));
						}
					});
					Ue && lt.observe(Ue),
						(0, a.onCleanup)(() => {
							lt.disconnect();
						});
				}),
					(0, a.onMount)(() => {
						Re(xe());
					});
				const Re = (lt) => {
						if (!lt) return;
						const ct = re.workspaceContextService.resolveRelativePath(lt);
						re.commandService.executeCommand(s.$Igc, ct, {
							...se.slashEditOptions,
							clickedCodeBlockContents: se.getModelOfCodeBlock().getValue(),
						});
					},
					je = () => {
						const lt = xe();
						if (!lt) return;
						const ct = re.workspaceContextService.resolveRelativePath(lt);
						re.commandService.executeCommand("vscode.open", ct),
							re.commandService.executeCommand(s.$Hgc, ct, void 0, {
								...se.slashEditOptions,
								clickedCodeBlockContents: se.getModelOfCodeBlock().getValue(),
							});
					},
					Ve = (0, a.createMemo)(() =>
						Fe().filter(
							(lt) =>
								(Ce() !== !0 || !lt.wholeFile) &&
								(lt.lineLength === void 0 || lt.lineLength < (be() ?? 1e5)),
						),
					),
					Ze = async () => {
						try {
							const ct = se.getModelOfCodeBlock().getValue();
							await (0, v.$o$b)(re, ct, se.cwd, se.commandLanguage);
						} catch {}
					},
					et = (0, a.createMemo)(
						() =>
							(Ce() === !0 && Fe().length <= 1) ||
							re.applyToFileActionsService.isUsingAPIKeyAndNotPro(),
					),
					rt = (0, a.createMemo)(() => !et() && ve() && ge()),
					ft = (lt) => {
						lt.preventDefault(),
							lt.stopPropagation(),
							re.tooltipService.registerEvent(
								"chat.copy.codeblock.withfilename",
							);
						const gt = se.getModelOfCodeBlock().getValue() ?? "";
						re.clipboardService.writeText(gt),
							pe(!1),
							setTimeout(() => {
								pe(!0);
							}, 2e3);
					},
					bt = async (lt, ct) => {
						const { currentTarget: gt } = lt;
						if ((lt.stopPropagation(), Je() === "done")) {
							nt?.click();
							return;
						}
						const { justClickFirstAction: ht } = ct ?? {};
						if (et()) {
							console.log("cannot apply");
							return;
						}
						if ((console.log("applying"), Fe().length === 0)) {
							const kt =
								re.applyToFileActionsService.getApplyToFileMenuItemsAlwaysAvailable(
									re.workspaceContextService.resolveRelativePath(
										se.aiPredictedFilePath ?? "",
									),
									{ ...se.slashEditOptions, isReapply: ct?.isReapply },
								);
							Oe(kt);
						}
						const Rt = Fe();
						let Nt = Rt.length === 1 ? Rt[0] : void 0;
						const jt = Rt.find((kt) => kt.menuString === b.$S0b);
						jt &&
							((await jt.isCached(se.getModelOfCodeBlock().getValue())) ||
								ct?.isReapply === !0) &&
							(Nt = jt);
						const ti = !1;
						if (Nt !== void 0 && !ti)
							Nt.callback(se.getModelOfCodeBlock(), ct?.isReapply);
						else if (ht && Rt.length > 0 && !ti)
							Rt[0].callback(se.getModelOfCodeBlock(), ct?.isReapply);
						else {
							const kt = gt.getBoundingClientRect();
							ye({ x: kt.right + 2, y: kt.bottom + 2 }),
								Oe(await Le(se.getModelOfCodeBlock(), Fe()));
						}
					};
				(0, a.createEffect)(() => {
					const lt = se.slashEditOptions.tabId,
						ct = se.slashEditOptions.bubbleId;
					if (!rt()) return;
					const gt = (0, I.$Ogb)(),
						ht = (Rt) => {
							rt() &&
								(Rt.key === "Enter" && (T.$m ? Rt.metaKey : Rt.ctrlKey)
									? (Rt.stopPropagation(),
										bt(
											{
												currentTarget: Rt.currentTarget,
												stopPropagation: () => Rt.stopPropagation(),
											},
											{ justClickFirstAction: !0 },
										))
									: Rt.key === "c" && (T.$m ? Rt.metaKey : Rt.ctrlKey)
										? (Rt.preventDefault(),
											Rt.stopImmediatePropagation(),
											ft(Rt))
										: me &&
											Rt.key === "m" &&
											(T.$m ? Rt.metaKey : Rt.ctrlKey) &&
											(Rt.preventDefault(),
											Rt.stopImmediatePropagation(),
											ie(
												Rt,
												lt,
												ct,
												me,
												re.aiChatService,
												re.chatDataService,
											)));
						};
					gt.addEventListener("keydown", ht),
						(0, a.onCleanup)(() => {
							gt.removeEventListener("keydown", ht);
						});
				}),
					(0, a.createEffect)(() => {
						se.setIsGenerating && se.setIsGenerating(Je() === "generating");
					});
				let nt;
				return (() => {
					const lt = M(),
						ct = Ue;
					return (
						typeof ct == "function" ? (0, u.use)(ct, lt) : (Ue = lt),
						lt.style.setProperty("height", "100%"),
						lt.style.setProperty("width", "100%"),
						(0, m.insert)(
							lt,
							(0, r.createComponent)(a.Show, {
								get when() {
									return se.isCommand;
								},
								get children() {
									return (0, r.createComponent)(e.$x$b, {
										get language() {
											return se.commandLanguage;
										},
										get children() {
											return [
												(() => {
													const gt = M();
													return (
														gt.style.setProperty("cursor", "pointer"),
														(0, m.insert)(
															gt,
															(0, r.createComponent)(a.Show, {
																get when() {
																	return se.commandLanguage !== void 0;
																},
																get children() {
																	return te[se.commandLanguage ?? ""];
																},
															}),
														),
														gt
													);
												})(),
												(() => {
													const gt = M();
													return gt.style.setProperty("flex-grow", "1"), gt;
												})(),
												(() => {
													const gt = N(),
														ht = gt.firstChild,
														Rt = ht.firstChild,
														Nt = Rt.firstChild,
														jt = ht.nextSibling,
														ti = jt.firstChild,
														kt = jt.nextSibling,
														hi = kt.firstChild;
													gt.style.setProperty("display", "flex"),
														gt.style.setProperty("align-items", "center"),
														ht.addEventListener("click", (di) => {
															me &&
																ie(
																	di,
																	se.slashEditOptions.tabId,
																	se.slashEditOptions.bubbleId,
																	me,
																	re.aiChatService,
																	re.chatDataService,
																);
														});
													const Kt = me;
													return (
														typeof Kt == "function"
															? (0, u.use)(Kt, ht)
															: (me = ht),
														ht.style.setProperty("cursor", "pointer"),
														ht.style.setProperty("display", "flex"),
														ht.style.setProperty("align-items", "center"),
														ht.style.setProperty("justify-content", "center"),
														ht.style.setProperty("flex-direction", "row"),
														ht.style.setProperty("user-select", "none"),
														ht.style.setProperty("font-size", "0.8em"),
														ht.style.setProperty("padding", "0px 6px"),
														ht.style.setProperty(
															"border-left",
															"1px solid var(--vscode-commandCenter-inactiveBorder)",
														),
														ht.style.setProperty("position", "relative"),
														Rt.style.setProperty("display", "flex"),
														Rt.style.setProperty("align-items", "center"),
														Rt.style.setProperty("gap", "4px"),
														Nt.style.setProperty("z-index", "1"),
														Nt.style.setProperty("font-size", "1em"),
														jt.addEventListener("click", (di) => {
															di.stopPropagation(),
																re.tooltipService.registerEvent(
																	"chat.copy.codeblock.withfilename",
																);
															const ze =
																se.getModelOfCodeBlock().getValue() ?? "";
															re.clipboardService.writeText(ze),
																pe(!1),
																setTimeout(() => {
																	pe(!0);
																}, 2e3);
														}),
														jt.style.setProperty("cursor", "pointer"),
														jt.style.setProperty("display", "flex"),
														jt.style.setProperty("align-items", "center"),
														jt.style.setProperty("justify-content", "center"),
														jt.style.setProperty("flex-direction", "row"),
														jt.style.setProperty("user-select", "none"),
														jt.style.setProperty("font-size", "0.8em"),
														jt.style.setProperty(
															"border-left",
															"1px solid var(--vscode-commandCenter-inactiveBorder)",
														),
														jt.style.setProperty("padding", "0px 6px"),
														jt.style.setProperty("gap", "4px"),
														ti.style.setProperty("z-index", "1"),
														ti.style.setProperty("font-size", "1em"),
														kt.addEventListener("click", () => Ze()),
														kt.style.setProperty("cursor", "pointer"),
														kt.style.setProperty("display", "flex"),
														kt.style.setProperty("align-items", "center"),
														kt.style.setProperty("justify-content", "center"),
														kt.style.setProperty("flex-direction", "row"),
														kt.style.setProperty("user-select", "none"),
														kt.style.setProperty("font-size", "0.8em"),
														kt.style.setProperty("padding", "0px 6px"),
														kt.style.setProperty(
															"border-left",
															"1px solid var(--vscode-commandCenter-inactiveBorder)",
														),
														kt.style.setProperty("position", "relative"),
														hi.style.setProperty("z-index", "1"),
														hi.style.setProperty("font-size", "1em"),
														hi.style.setProperty("margin-right", "4px"),
														(0, d.effect)(
															(di) => {
																const Ye = o.ThemeIcon.asClassName(c.$ak.reply),
																	ze = ae()
																		? o.ThemeIcon.asClassName(c.$ak.copy)
																		: o.ThemeIcon.asClassName(c.$ak.check),
																	Xe = o.ThemeIcon.asClassName(c.$ak.play);
																return (
																	Ye !== di._v$ &&
																		(0, C.className)(Nt, (di._v$ = Ye)),
																	ze !== di._v$2 &&
																		(0, C.className)(ti, (di._v$2 = ze)),
																	Xe !== di._v$3 &&
																		(0, C.className)(hi, (di._v$3 = Xe)),
																	di
																);
															},
															{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
														),
														gt
													);
												})(),
											];
										},
									});
								},
							}),
							null,
						),
						(0, m.insert)(
							lt,
							(0, r.createComponent)(a.Show, {
								get when() {
									return (
										(0, E.memo)(() => !se.isCommand)() &&
										Je() === "startingShow"
									);
								},
								get children() {
									return (0, r.createComponent)(a.Show, {
										get when() {
											return se.aiPredictedFilePath !== void 0;
										},
										get fallback() {
											return (0, r.createComponent)(
												ee,
												(0, i.mergeProps)(se, {
													setIsConfirming: oe,
													setFilePathWeAppliedOn: He,
												}),
											);
										},
										get children() {
											return (0, r.createComponent)(_, {
												get relativeFilePath() {
													return xe() ?? "";
												},
												get numLinesToLinkTo() {
													return Te();
												},
												get isGenerating() {
													return Je() === "generating";
												},
												get children() {
													return [
														(() => {
															const gt = M(),
																ht = qe;
															return (
																typeof ht == "function"
																	? (0, u.use)(ht, gt)
																	: (qe = gt),
																gt.style.setProperty("cursor", "pointer"),
																gt.style.setProperty("font-size", "0.8em"),
																(0, m.insert)(gt, () => (0, p.$sc)(xe() ?? "")),
																gt
															);
														})(),
														(() => {
															const gt = M();
															return (
																gt.addEventListener("click", () => {}),
																gt.style.setProperty("margin-left", "5px"),
																gt.style.setProperty("flex-shrink", "1"),
																gt.style.setProperty("min-width", "0"),
																gt.style.setProperty("cursor", "pointer"),
																gt.style.setProperty("font-size", "0.8em"),
																(0, d.effect)(() =>
																	(ge() ? 1 : 0.5) != null
																		? gt.style.setProperty(
																				"opacity",
																				ge() ? 1 : 0.5,
																			)
																		: gt.style.removeProperty("opacity"),
																),
																gt
															);
														})(),
														(() => {
															const gt = M();
															return gt.style.setProperty("flex-grow", "1"), gt;
														})(),
														(0, r.createComponent)(P.$q$b, {
															get children() {
																return [
																	(() => {
																		const gt = A(),
																			ht = gt.firstChild,
																			Rt = ht.firstChild;
																		gt.addEventListener("click", (jt) => {
																			me &&
																				ie(
																					jt,
																					se.slashEditOptions.tabId,
																					se.slashEditOptions.bubbleId,
																					me,
																					re.aiChatService,
																					re.chatDataService,
																				);
																		});
																		const Nt = me;
																		return (
																			typeof Nt == "function"
																				? (0, u.use)(Nt, gt)
																				: (me = gt),
																			gt.style.setProperty("cursor", "pointer"),
																			gt.style.setProperty("display", "flex"),
																			gt.style.setProperty(
																				"align-items",
																				"center",
																			),
																			gt.style.setProperty(
																				"justify-content",
																				"center",
																			),
																			gt.style.setProperty(
																				"flex-direction",
																				"row",
																			),
																			gt.style.setProperty(
																				"user-select",
																				"none",
																			),
																			gt.style.setProperty(
																				"font-size",
																				"0.8em",
																			),
																			gt.style.setProperty(
																				"padding",
																				"0px 6px",
																			),
																			gt.style.setProperty(
																				"border-left",
																				"1px solid var(--vscode-commandCenter-inactiveBorder)",
																			),
																			gt.style.setProperty(
																				"position",
																				"relative",
																			),
																			ht.style.setProperty("display", "flex"),
																			ht.style.setProperty(
																				"align-items",
																				"center",
																			),
																			ht.style.setProperty("gap", "4px"),
																			(0, m.insert)(
																				ht,
																				(0, r.createComponent)(a.Show, {
																					get when() {
																						return rt();
																					},
																					get fallback() {
																						return (() => {
																							const jt = M();
																							return (
																								jt.style.setProperty(
																									"z-index",
																									"1",
																								),
																								jt.style.setProperty(
																									"font-size",
																									"1em",
																								),
																								(0, d.effect)(() =>
																									(0, C.className)(
																										jt,
																										o.ThemeIcon.asClassName(
																											c.$ak.reply,
																										),
																									),
																								),
																								jt
																							);
																						})();
																					},
																					get children() {
																						const jt = M();
																						return (
																							jt.style.setProperty(
																								"font-size",
																								"0.8em",
																							),
																							jt.style.setProperty(
																								"color",
																								"var(--vscode-descriptionForeground)",
																							),
																							(0, m.insert)(
																								jt,
																								T.$m ? "\u2318M" : "Ctrl+M",
																							),
																							jt
																						);
																					},
																				}),
																				Rt,
																			),
																			gt
																		);
																	})(),
																	(() => {
																		const gt = R();
																		return (
																			gt.addEventListener("click", ft),
																			gt.style.setProperty("cursor", "pointer"),
																			gt.style.setProperty("display", "flex"),
																			gt.style.setProperty(
																				"align-items",
																				"center",
																			),
																			gt.style.setProperty(
																				"justify-content",
																				"center",
																			),
																			gt.style.setProperty(
																				"flex-direction",
																				"row",
																			),
																			gt.style.setProperty(
																				"user-select",
																				"none",
																			),
																			gt.style.setProperty(
																				"font-size",
																				"0.8em",
																			),
																			gt.style.setProperty(
																				"border-left",
																				"1px solid var(--vscode-commandCenter-inactiveBorder)",
																			),
																			gt.style.setProperty(
																				"padding",
																				"0px 6px",
																			),
																			gt.style.setProperty("gap", "4px"),
																			(0, m.insert)(
																				gt,
																				(0, r.createComponent)(a.Show, {
																					get when() {
																						return rt();
																					},
																					get fallback() {
																						return (() => {
																							const ht = M();
																							return (
																								ht.style.setProperty(
																									"z-index",
																									"1",
																								),
																								ht.style.setProperty(
																									"font-size",
																									"1em",
																								),
																								(0, d.effect)(() =>
																									(0, C.className)(
																										ht,
																										ae()
																											? o.ThemeIcon.asClassName(
																													c.$ak.copy,
																												)
																											: o.ThemeIcon.asClassName(
																													c.$ak.check,
																												),
																									),
																								),
																								ht
																							);
																						})();
																					},
																					get children() {
																						const ht = M();
																						return (
																							ht.style.setProperty(
																								"font-size",
																								"0.8em",
																							),
																							ht.style.setProperty(
																								"color",
																								"var(--vscode-descriptionForeground)",
																							),
																							(0, m.insert)(
																								ht,
																								T.$m ? "\u2318C" : "Ctrl+C",
																							),
																							ht
																						);
																					},
																				}),
																				null,
																			),
																			(0, m.insert)(
																				gt,
																				() => (ae() ? "Copy" : "Copied"),
																				null,
																			),
																			gt
																		);
																	})(),
																	(0, r.createComponent)(y.$l$b, {
																		get text() {
																			return (0, E.memo)(
																				() =>
																					!!re.applyToFileActionsService.isUsingAPIKeyAndNotPro(),
																			)()
																				? "Does not work with API key (custom model). Please upgrade to Pro."
																				: `File is too big to apply to (~${be() ?? 1e4} line limit)`;
																		},
																		leftDelta: -72,
																		get hidden() {
																			return !et();
																		},
																		get children() {
																			const gt = O(),
																				ht = gt.firstChild,
																				Rt = ht.firstChild;
																			return (
																				gt.addEventListener("click", bt),
																				gt.style.setProperty(
																					"cursor",
																					"pointer",
																				),
																				gt.style.setProperty("display", "flex"),
																				gt.style.setProperty(
																					"align-items",
																					"center",
																				),
																				gt.style.setProperty(
																					"justify-content",
																					"center",
																				),
																				gt.style.setProperty(
																					"flex-direction",
																					"row",
																				),
																				gt.style.setProperty(
																					"user-select",
																					"none",
																				),
																				gt.style.setProperty(
																					"font-size",
																					"0.8em",
																				),
																				gt.style.setProperty(
																					"padding",
																					"0px 6px",
																				),
																				gt.style.setProperty(
																					"border-left",
																					"1px solid var(--vscode-commandCenter-inactiveBorder)",
																				),
																				gt.style.setProperty(
																					"position",
																					"relative",
																				),
																				gt.style.setProperty(
																					"transition",
																					"background 0.2s",
																				),
																				(0, m.insert)(
																					ht,
																					(0, r.createComponent)(a.Show, {
																						get when() {
																							return rt();
																						},
																						get fallback() {
																							return (() => {
																								const Nt = M();
																								return (
																									Nt.style.setProperty(
																										"z-index",
																										"1",
																									),
																									Nt.style.setProperty(
																										"font-size",
																										"1em",
																									),
																									(0, d.effect)(() =>
																										(0, C.className)(
																											Nt,
																											o.ThemeIcon.asClassName(
																												c.$ak.play,
																											),
																										),
																									),
																									Nt
																								);
																							})();
																						},
																						get children() {
																							const Nt = M();
																							return (
																								Nt.style.setProperty(
																									"font-size",
																									"0.8em",
																								),
																								Nt.style.setProperty(
																									"color",
																									"var(--vscode-button-foreground)",
																								),
																								(0, m.insert)(
																									Nt,
																									T.$m
																										? "\u2318\u23CE"
																										: "Ctrl+Enter",
																								),
																								Nt
																							);
																						},
																					}),
																					Rt,
																				),
																				(0, m.insert)(
																					gt,
																					(0, r.createComponent)(a.Show, {
																						get when() {
																							return $e();
																						},
																						children: (Nt) =>
																							(0, r.createComponent)(L.Menu, {
																								isRelative: !1,
																								shouldMountInPortal: !0,
																								width: "120px",
																								get position() {
																									return Nt();
																								},
																								close: ue,
																								get reactiveCloser() {
																									return re
																										.reactiveStorageService
																										.nonPersistentStorage
																										.forceChatDropdownRerender;
																								},
																								anchor: "top-right",
																								style: {
																									"max-width": "240px",
																									"background-color":
																										"var(--vscode-settings-dropdownBackground)",
																									opacity: 1,
																									border:
																										"1px solid var(--vscode-commandCenter-inactiveBorder)",
																									"border-radius": "4px",
																									overflow: "hidden",
																									"z-index": 1,
																								},
																								get children() {
																									return (0, r.createComponent)(
																										a.For,
																										{
																											get each() {
																												return Ve();
																											},
																											children: (jt, ti) =>
																												(0, r.createComponent)(
																													D.default,
																													{
																														style: {
																															"text-overflow":
																																"ellipsis",
																															"white-space":
																																"nowrap",
																															overflow:
																																"hidden",
																															padding:
																																"0px 4px",
																															"border-radius":
																																"2px",
																															cursor: "pointer",
																														},
																														class:
																															"markdown-codeblock-apply-item",
																														onClick: () => {
																															jt.callback(
																																se.getModelOfCodeBlock(),
																																!1,
																															),
																																ue();
																														},
																														get title() {
																															return jt.menuString;
																														},
																														get children() {
																															return jt.menuString;
																														},
																													},
																												),
																										},
																									);
																								},
																							}),
																					}),
																					null,
																				),
																				(0, d.effect)(
																					(Nt) => {
																						const jt = rt()
																								? "var(--vscode-button-background)"
																								: "none",
																							ti = rt()
																								? "var(--vscode-button-foreground)"
																								: "inherit",
																							kt = {
																								display: "flex",
																								"align-items": "center",
																								gap: rt() ? "2px" : "4px",
																								...(et()
																									? {
																											opacity: 0.5,
																											cursor: "default",
																										}
																									: {}),
																								opacity: rt() ? 1 : void 0,
																							};
																						return (
																							jt !== Nt._v$4 &&
																								((Nt._v$4 = jt) != null
																									? gt.style.setProperty(
																											"background",
																											jt,
																										)
																									: gt.style.removeProperty(
																											"background",
																										)),
																							ti !== Nt._v$5 &&
																								((Nt._v$5 = ti) != null
																									? gt.style.setProperty(
																											"color",
																											ti,
																										)
																									: gt.style.removeProperty(
																											"color",
																										)),
																							(Nt._v$6 = (0, w.style)(
																								ht,
																								kt,
																								Nt._v$6,
																							)),
																							Nt
																						);
																					},
																					{
																						_v$4: void 0,
																						_v$5: void 0,
																						_v$6: void 0,
																					},
																				),
																				gt
																			);
																		},
																	}),
																];
															},
														}),
													];
												},
											});
										},
									});
								},
							}),
							null,
						),
						(0, m.insert)(
							lt,
							(0, r.createComponent)(a.Show, {
								get when() {
									return Je() === "confirming";
								},
								get children() {
									return (0, r.createComponent)(a.Show, {
										get when() {
											return xe();
										},
										get fallback() {
											return (0, r.createComponent)(_, {
												get relativeFilePath() {
													return xe() ?? "";
												},
												get numLinesToLinkTo() {
													return Te();
												},
												get isGenerating() {
													return Je() === "generating";
												},
												get children() {
													return [
														(() => {
															const gt = K();
															return (
																gt.style.setProperty("white-space", "nowrap"),
																gt.style.setProperty("overflow", "hidden"),
																gt.style.setProperty(
																	"text-overflow",
																	"ellipsis",
																),
																gt.style.setProperty("font-size", "0.8em"),
																gt.style.setProperty("padding-left", "4px"),
																gt
															);
														})(),
														(() => {
															const gt = M();
															return gt.style.setProperty("flex-grow", "1"), gt;
														})(),
														(() => {
															const gt = F(),
																ht = gt.firstChild;
															return (
																gt.addEventListener("click", (Rt) => {
																	Rt.stopPropagation(), oe(!1);
																}),
																gt.style.setProperty("cursor", "pointer"),
																gt.style.setProperty("display", "flex"),
																gt.style.setProperty("align-items", "center"),
																gt.style.setProperty(
																	"justify-content",
																	"center",
																),
																gt.style.setProperty("flex-direction", "row"),
																gt.style.setProperty("opacity", "0.75"),
																gt.style.setProperty("user-select", "none"),
																gt.style.setProperty("font-size", "0.8em"),
																gt.style.setProperty("padding-left", "4px"),
																gt.style.setProperty("padding-right", "4px"),
																gt.style.setProperty("margin-right", "4px"),
																gt.style.setProperty("margin-left", "4px"),
																gt.style.setProperty(
																	"border-left",
																	"1px solid var(--vscode-commandCenter-inactiveBorder)",
																),
																ht.style.setProperty("z-index", "1"),
																ht.style.setProperty("font-size", "1em"),
																ht.style.setProperty("margin-right", "4px"),
																(0, d.effect)(() =>
																	(0, C.className)(
																		ht,
																		o.ThemeIcon.asClassName(c.$ak.x),
																	),
																),
																gt
															);
														})(),
													];
												},
											});
										},
										get children() {
											return (0, r.createComponent)(_, {
												get relativeFilePath() {
													return xe() ?? "";
												},
												get numLinesToLinkTo() {
													return Te();
												},
												get isGenerating() {
													return Je() === "generating";
												},
												get children() {
													return [
														(() => {
															const gt = B(),
																ht = gt.firstChild,
																Rt = ht.nextSibling;
															return (
																gt.style.setProperty("white-space", "nowrap"),
																gt.style.setProperty("overflow", "hidden"),
																gt.style.setProperty(
																	"text-overflow",
																	"ellipsis",
																),
																gt.style.setProperty("font-size", "0.8em"),
																Rt.addEventListener("click", () => {
																	const Nt = xe() ?? "",
																		jt = Nt.endsWith("/")
																			? Nt.slice(0, -1)
																			: Nt;
																	(0, S.openFileInEditorIfExists)(
																		re.workspaceContextService.resolveRelativePath(
																			jt,
																		),
																		re.fileService,
																		re.openerService,
																	);
																}),
																Rt.style.setProperty(
																	"color",
																	"var(--vscode-textLink-foreground)",
																),
																Rt.style.setProperty("cursor", "pointer"),
																(0, m.insert)(Rt, () => (0, p.$sc)(xe() ?? "")),
																gt
															);
														})(),
														(0, r.createComponent)(a.Show, {
															get when() {
																return Ie() > 500;
															},
															get children() {
																const gt = U();
																return (
																	gt.style.setProperty("opacity", "0.5"),
																	gt.style.setProperty("margin-left", "5px"),
																	gt.style.setProperty("flex-shrink", "2"),
																	gt.style.setProperty("min-width", "0"),
																	gt.style.setProperty("font-size", "0.8em"),
																	gt.style.setProperty("white-space", "nowrap"),
																	gt.style.setProperty("overflow", "hidden"),
																	gt.style.setProperty(
																		"text-overflow",
																		"ellipsis",
																	),
																	gt
																);
															},
														}),
														(() => {
															const gt = M();
															return gt.style.setProperty("flex-grow", "1"), gt;
														})(),
														(() => {
															const gt = z(),
																ht = gt.firstChild;
															return (
																gt.addEventListener("click", (Rt) => {
																	Rt.stopPropagation(), oe(!1), je();
																}),
																gt.style.setProperty("cursor", "pointer"),
																gt.style.setProperty("display", "flex"),
																gt.style.setProperty("align-items", "center"),
																gt.style.setProperty(
																	"justify-content",
																	"center",
																),
																gt.style.setProperty("flex-direction", "row"),
																gt.style.setProperty("opacity", "0.75"),
																gt.style.setProperty("user-select", "none"),
																gt.style.setProperty("font-size", "0.8em"),
																gt.style.setProperty("padding-left", "4px"),
																gt.style.setProperty("padding-right", "4px"),
																gt.style.setProperty("margin-right", "4px"),
																gt.style.setProperty("margin-left", "4px"),
																gt.style.setProperty(
																	"border-left",
																	"1px solid var(--vscode-commandCenter-inactiveBorder)",
																),
																ht.style.setProperty("z-index", "1"),
																ht.style.setProperty("font-size", "1em"),
																ht.style.setProperty("margin-right", "4px"),
																(0, d.effect)(() =>
																	(0, C.className)(
																		ht,
																		o.ThemeIcon.asClassName(c.$ak.check),
																	),
																),
																gt
															);
														})(),
														(() => {
															const gt = F(),
																ht = gt.firstChild;
															return (
																gt.addEventListener("click", (Rt) => {
																	Rt.stopPropagation(), oe(!1);
																}),
																gt.style.setProperty("cursor", "pointer"),
																gt.style.setProperty("display", "flex"),
																gt.style.setProperty("align-items", "center"),
																gt.style.setProperty(
																	"justify-content",
																	"center",
																),
																gt.style.setProperty("flex-direction", "row"),
																gt.style.setProperty("opacity", "0.75"),
																gt.style.setProperty("user-select", "none"),
																gt.style.setProperty("font-size", "0.8em"),
																gt.style.setProperty("padding-left", "4px"),
																gt.style.setProperty("padding-right", "4px"),
																gt.style.setProperty("margin-right", "4px"),
																gt.style.setProperty("margin-left", "4px"),
																gt.style.setProperty(
																	"border-left",
																	"1px solid var(--vscode-commandCenter-inactiveBorder)",
																),
																ht.style.setProperty("z-index", "1"),
																ht.style.setProperty("font-size", "1em"),
																ht.style.setProperty("margin-right", "4px"),
																(0, d.effect)(() =>
																	(0, C.className)(
																		ht,
																		o.ThemeIcon.asClassName(c.$ak.x),
																	),
																),
																gt
															);
														})(),
													];
												},
											});
										},
									});
								},
							}),
							null,
						),
						(0, m.insert)(
							lt,
							(0, r.createComponent)(a.Show, {
								get when() {
									return Je() === "generating";
								},
								get children() {
									return (0, r.createComponent)(_, {
										get relativeFilePath() {
											return xe() ?? "";
										},
										get numLinesToLinkTo() {
											return Te();
										},
										get isGenerating() {
											return Je() === "generating";
										},
										get children() {
											return [
												(() => {
													const gt = M(),
														ht = Ae;
													return (
														typeof ht == "function"
															? (0, u.use)(ht, gt)
															: (Ae = gt),
														gt.style.setProperty("cursor", "pointer"),
														gt.style.setProperty("font-size", "0.8em"),
														(0, m.insert)(gt, () => (0, p.$sc)(xe() ?? "")),
														gt
													);
												})(),
												(() => {
													const gt = x();
													return (
														gt.style.setProperty("opacity", "0.5"),
														gt.style.setProperty("margin-left", "5px"),
														gt.style.setProperty("flex-shrink", "1"),
														gt.style.setProperty("min-width", "0"),
														gt.style.setProperty("cursor", "pointer"),
														gt.style.setProperty("font-size", "0.8em"),
														(0, m.insert)(
															gt,
															(0, r.createComponent)(a.Show, {
																get when() {
																	return Se() > 170;
																},
																children: "Generating",
															}),
														),
														gt
													);
												})(),
												(() => {
													const gt = M();
													return gt.style.setProperty("flex-grow", "1"), gt;
												})(),
												(() => {
													const gt = F(),
														ht = gt.firstChild;
													return (
														gt.addEventListener("click", (Rt) => {
															Rt.stopPropagation();
															const Nt = Ke();
															Nt && re.inlineDiffService.cancelDiff(Nt.id);
														}),
														gt.style.setProperty("cursor", "pointer"),
														gt.style.setProperty("display", "flex"),
														gt.style.setProperty("align-items", "center"),
														gt.style.setProperty("justify-content", "center"),
														gt.style.setProperty("flex-direction", "row"),
														gt.style.setProperty("opacity", "0.75"),
														gt.style.setProperty("user-select", "none"),
														gt.style.setProperty("font-size", "0.8em"),
														gt.style.setProperty("padding-left", "4px"),
														gt.style.setProperty("padding-right", "4px"),
														gt.style.setProperty("margin-right", "4px"),
														gt.style.setProperty("margin-left", "4px"),
														gt.style.setProperty(
															"border-left",
															"1px solid var(--vscode-commandCenter-inactiveBorder)",
														),
														ht.style.setProperty("z-index", "1"),
														ht.style.setProperty("font-size", "1em"),
														ht.style.setProperty("margin-right", "4px"),
														(0, d.effect)(() =>
															(0, C.className)(
																ht,
																o.ThemeIcon.asClassName(c.$ak.stop),
															),
														),
														gt
													);
												})(),
											];
										},
									});
								},
							}),
							null,
						),
						(0, m.insert)(
							lt,
							(0, r.createComponent)(a.Show, {
								get when() {
									return Je() === "done";
								},
								get children() {
									return (0, r.createComponent)(_, {
										get relativeFilePath() {
											return xe() ?? "";
										},
										get numLinesToLinkTo() {
											return Te();
										},
										get isGenerating() {
											return Je() === "generating";
										},
										get children() {
											return [
												(() => {
													const gt = M(),
														ht = Me;
													return (
														typeof ht == "function"
															? (0, u.use)(ht, gt)
															: (Me = gt),
														gt.style.setProperty("cursor", "pointer"),
														gt.style.setProperty("font-size", "0.8em"),
														(0, m.insert)(gt, () => (0, p.$sc)(xe() ?? "")),
														gt
													);
												})(),
												(0, r.createComponent)(a.Show, {
													get when() {
														return Se() > 190;
													},
													get children() {
														const gt = H();
														return (
															gt.addEventListener("click", () => {}),
															gt.style.setProperty("opacity", "0.5"),
															gt.style.setProperty("margin-left", "5px"),
															gt.style.setProperty("cursor", "pointer"),
															gt.style.setProperty("font-size", "0.8em"),
															gt
														);
													},
												}),
												(() => {
													const gt = M();
													return gt.style.setProperty("flex-grow", "1"), gt;
												})(),
												(0, r.createComponent)(P.$q$b, {
													get children() {
														return [
															(() => {
																const gt = q(),
																	ht = gt.firstChild;
																return (
																	gt.addEventListener("click", (Rt) => {
																		Rt.stopPropagation();
																		const Nt = Ke();
																		Nt &&
																			re.inlineDiffService.rejectDiff(Nt.id),
																			bt(Rt, { isReapply: !0 });
																	}),
																	gt.style.setProperty("cursor", "pointer"),
																	gt.style.setProperty("display", "flex"),
																	gt.style.setProperty("align-items", "center"),
																	gt.style.setProperty(
																		"justify-content",
																		"center",
																	),
																	gt.style.setProperty("flex-direction", "row"),
																	gt.style.setProperty("user-select", "none"),
																	gt.style.setProperty("font-size", "0.8em"),
																	gt.style.setProperty("padding-left", "4px"),
																	gt.style.setProperty("padding-right", "4px"),
																	gt.style.setProperty("margin-right", "4px"),
																	gt.style.setProperty("margin-left", "4px"),
																	gt.style.setProperty(
																		"border-left",
																		"1px solid var(--vscode-commandCenter-inactiveBorder)",
																	),
																	ht.style.setProperty("z-index", "1"),
																	ht.style.setProperty("font-size", "1em"),
																	ht.style.setProperty("margin-right", "4px"),
																	(0, d.effect)(() =>
																		(0, C.className)(
																			ht,
																			o.ThemeIcon.asClassName(c.$ak.refresh),
																		),
																	),
																	gt
																);
															})(),
															(() => {
																const gt = V(),
																	ht = gt.firstChild;
																return (
																	gt.addEventListener("click", (Rt) => {
																		Rt.stopPropagation();
																		const Nt = Ke();
																		Nt &&
																			re.inlineDiffService.rejectDiff(Nt.id);
																	}),
																	gt.style.setProperty("cursor", "pointer"),
																	gt.style.setProperty("display", "flex"),
																	gt.style.setProperty("align-items", "center"),
																	gt.style.setProperty(
																		"justify-content",
																		"center",
																	),
																	gt.style.setProperty("flex-direction", "row"),
																	gt.style.setProperty("user-select", "none"),
																	gt.style.setProperty("font-size", "0.8em"),
																	gt.style.setProperty("padding-left", "4px"),
																	gt.style.setProperty("padding-right", "4px"),
																	gt.style.setProperty("margin-right", "4px"),
																	gt.style.setProperty("margin-left", "4px"),
																	gt.style.setProperty(
																		"border-left",
																		"1px solid var(--vscode-commandCenter-inactiveBorder)",
																	),
																	ht.style.setProperty("z-index", "1"),
																	ht.style.setProperty("font-size", "1em"),
																	ht.style.setProperty("margin-right", "4px"),
																	(0, d.effect)(() =>
																		(0, C.className)(
																			ht,
																			o.ThemeIcon.asClassName(c.$ak.x),
																		),
																	),
																	gt
																);
															})(),
															(() => {
																const gt = G(),
																	ht = gt.firstChild;
																gt.addEventListener("click", (Nt) => {
																	Nt.stopPropagation();
																	const jt = Ke();
																	jt && re.inlineDiffService.acceptDiff(jt.id);
																});
																const Rt = nt;
																return (
																	typeof Rt == "function"
																		? (0, u.use)(Rt, gt)
																		: (nt = gt),
																	gt.style.setProperty("cursor", "pointer"),
																	gt.style.setProperty("display", "flex"),
																	gt.style.setProperty("align-items", "center"),
																	gt.style.setProperty(
																		"justify-content",
																		"center",
																	),
																	gt.style.setProperty("flex-direction", "row"),
																	gt.style.setProperty("user-select", "none"),
																	gt.style.setProperty("font-size", "0.8em"),
																	gt.style.setProperty("padding-left", "4px"),
																	gt.style.setProperty("padding-right", "4px"),
																	gt.style.setProperty("margin-left", "4px"),
																	gt.style.setProperty(
																		"border-left",
																		"1px solid var(--vscode-commandCenter-inactiveBorder)",
																	),
																	(0, m.insert)(
																		gt,
																		(0, r.createComponent)(a.Show, {
																			get when() {
																				return rt();
																			},
																			get fallback() {
																				return (() => {
																					const Nt = M();
																					return (
																						Nt.style.setProperty(
																							"z-index",
																							"1",
																						),
																						Nt.style.setProperty(
																							"font-size",
																							"1em",
																						),
																						Nt.style.setProperty(
																							"margin-right",
																							"4px",
																						),
																						(0, d.effect)(() =>
																							(0, C.className)(
																								Nt,
																								o.ThemeIcon.asClassName(
																									c.$ak.check,
																								),
																							),
																						),
																						Nt
																					);
																				})();
																			},
																			get children() {
																				const Nt = M();
																				return (
																					Nt.style.setProperty(
																						"font-size",
																						"0.8em",
																					),
																					Nt.style.setProperty(
																						"color",
																						"var(--vscode-button-foreground)",
																					),
																					Nt.style.setProperty(
																						"margin-right",
																						"4px",
																					),
																					(0, m.insert)(
																						Nt,
																						T.$m
																							? "\u2318\u23CE"
																							: "Ctrl+Enter",
																					),
																					Nt
																				);
																			},
																		}),
																		ht,
																	),
																	(0, d.effect)(
																		(Nt) => {
																			const jt = rt()
																					? "var(--vscode-button-background)"
																					: "none",
																				ti = rt()
																					? "var(--vscode-button-foreground)"
																					: "inherit",
																				kt = rt() ? 1 : void 0;
																			return (
																				jt !== Nt._v$7 &&
																					((Nt._v$7 = jt) != null
																						? gt.style.setProperty(
																								"background",
																								jt,
																							)
																						: gt.style.removeProperty(
																								"background",
																							)),
																				ti !== Nt._v$8 &&
																					((Nt._v$8 = ti) != null
																						? gt.style.setProperty("color", ti)
																						: gt.style.removeProperty("color")),
																				kt !== Nt._v$9 &&
																					((Nt._v$9 = kt) != null
																						? gt.style.setProperty(
																								"opacity",
																								kt,
																							)
																						: gt.style.removeProperty(
																								"opacity",
																							)),
																				Nt
																			);
																		},
																		{
																			_v$7: void 0,
																			_v$8: void 0,
																			_v$9: void 0,
																		},
																	),
																	gt
																);
															})(),
														];
													},
												}),
											];
										},
									});
								},
							}),
							null,
						),
						lt
					);
				})();
			}
			function ee(se) {
				const re = (0, $.$odc)(),
					[le, oe] = (0, a.createSignal)(!0),
					[ae, pe] = (0, a.createSignal)(!1),
					$e = {
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
					},
					ye = {
						"font-size": "11px",
						color: "var(--vscode-input-placeholderForeground)",
					};
				let ue;
				return (() => {
					const fe = J(),
						me = fe.firstChild,
						ve = me.firstChild,
						ge = ve.firstChild,
						be = ve.nextSibling,
						Ce = be.firstChild,
						Le = be.nextSibling,
						Fe = Le.firstChild;
					fe.addEventListener("mouseleave", () => pe(!1)),
						fe.addEventListener("mouseenter", () => pe(!0)),
						fe.style.setProperty("position", "relative"),
						fe.style.setProperty("width", "100%");
					const Oe = ue;
					return (
						typeof Oe == "function" ? (0, u.use)(Oe, me) : (ue = me),
						me.style.setProperty("position", "absolute"),
						me.style.setProperty("transform", "translateY(calc(50%))"),
						me.style.setProperty("bottom", "0"),
						me.style.setProperty("right", "4px"),
						me.style.setProperty("z-index", "303"),
						me.style.setProperty("display", "flex"),
						me.style.setProperty("justify-content", "right"),
						me.style.setProperty("flex-direction", "row"),
						me.style.setProperty("gap", "4px"),
						ve.addEventListener("click", (xe) => {
							ue &&
								ie(
									xe,
									se.slashEditOptions.tabId,
									se.slashEditOptions.bubbleId,
									ue,
									re.aiChatService,
									re.chatDataService,
								);
						}),
						(0, w.style)(ve, $e),
						(0, w.style)(ge, ye),
						be.addEventListener("click", (xe) => {
							xe.stopPropagation(),
								re.tooltipService.registerEvent("chat.copy.codeblock.floating");
							const He = se.getModelOfCodeBlock().getValue();
							re.clipboardService.writeText(He),
								oe(!1),
								setTimeout(() => {
									oe(!0);
								}, 2e3);
						}),
						(0, w.style)(be, $e),
						(0, w.style)(Ce, ye),
						(0, m.insert)(be, () => (le() ? "Copy" : "Copied"), null),
						Le.addEventListener("click", async (xe) => {
							const He = re.codeEditorService
								.getActiveCodeEditor()
								?.getModel()?.uri;
							if (He !== void 0) {
								const Ke = re.workspaceContextService.asRelativePath(He);
								se.setFilePathWeAppliedOn(Ke);
							}
							se.setIsConfirming(!0);
						}),
						(0, w.style)(Le, $e),
						(0, w.style)(Fe, ye),
						(0, d.effect)(
							(xe) => {
								const He =
										ae() || se.isMouseInCodeBlock() ? "visible" : "hidden",
									Ke = o.ThemeIcon.asClassName(c.$ak.reply),
									Je = le()
										? o.ThemeIcon.asClassName(c.$ak.copy)
										: o.ThemeIcon.asClassName(c.$ak.check),
									Te = o.ThemeIcon.asClassName(c.$ak.play);
								return (
									He !== xe._v$10 &&
										((xe._v$10 = He) != null
											? me.style.setProperty("visibility", He)
											: me.style.removeProperty("visibility")),
									Ke !== xe._v$11 && (0, C.className)(ge, (xe._v$11 = Ke)),
									Je !== xe._v$12 && (0, C.className)(Ce, (xe._v$12 = Je)),
									Te !== xe._v$13 && (0, C.className)(Fe, (xe._v$13 = Te)),
									xe
								);
							},
							{ _v$10: void 0, _v$11: void 0, _v$12: void 0, _v$13: void 0 },
						),
						fe
					);
				})();
			}
			function _(se) {
				const re = (0, $.$odc)(),
					le = (0, a.createMemo)(
						() => "1px solid var(--vscode-commandCenter-inactiveBorder)",
					);
				return (() => {
					const oe = W(),
						ae = oe.firstChild;
					return (
						oe.addEventListener("click", () => {
							if (se.relativeFilePath) {
								const pe = re.workspaceContextService.resolveRelativePath(
									se.relativeFilePath,
								);
								if (se.numLinesToLinkTo !== void 0) {
									const $e = (0, f.$8rb)(pe, {
										startLineNumber: se.numLinesToLinkTo,
										startColumn: 1,
										endLineNumber: se.numLinesToLinkTo,
										endColumn: 1,
									});
									re.openerService.open($e);
								} else re.commandService.executeCommand("vscode.open", pe);
							}
						}),
						oe.style.setProperty("display", "flex"),
						oe.style.setProperty("flex-direction", "row"),
						oe.style.setProperty("align-items", "center"),
						oe.style.setProperty("box-sizing", "border-box"),
						oe.style.setProperty(
							"background-color",
							"var(--vscode-editor-background)",
						),
						oe.style.setProperty("z-index", "303"),
						oe.style.setProperty("width", "100%"),
						oe.style.setProperty("cursor", "pointer"),
						ae.style.setProperty("padding-left", "2px"),
						ae.style.setProperty("margin-right", "-2px"),
						(0, m.insert)(
							ae,
							(0, r.createComponent)(l.$k$b, {
								get fileName() {
									return se.relativeFilePath ?? "";
								},
								get workspaceContextService() {
									return re.workspaceContextService;
								},
								get modelService() {
									return re.modelService;
								},
								get languageService() {
									return re.languageService;
								},
							}),
						),
						(0, m.insert)(oe, () => se.children, null),
						(0, d.effect)(() =>
							le() != null
								? oe.style.setProperty("border-bottom", le())
								: oe.style.removeProperty("border-bottom"),
						),
						oe
					);
				})();
			}
			(e.$v$b = ["bash", "cmd", "powershell"]),
				(e.$w$b = {
					bash: "bash",
					zsh: "bash",
					pwsh: "powershell",
					powershell: "powershell",
					cmd: "cmd",
					"cmd.exe": "cmd",
				});
			const te = { bash: "Bash", cmd: "CMD.exe", powershell: "Powershell" },
				Q = {
					bash: c.$ak.terminalBash,
					cmd: c.$ak.terminalCmd,
					powershell: c.$ak.terminalPowershell,
				},
				Z = (se) =>
					(() => {
						const re = X(),
							le = re.firstChild,
							oe = le.firstChild,
							ae = oe.firstChild;
						return (
							re.style.setProperty("display", "flex"),
							re.style.setProperty("flex-direction", "row"),
							re.style.setProperty("align-items", "center"),
							re.style.setProperty(
								"border-bottom",
								"1px solid var(--vscode-commandCenter-inactiveBorder)",
							),
							re.style.setProperty("box-sizing", "border-box"),
							re.style.setProperty(
								"background-color",
								"var(--vscode-editor-background)",
							),
							re.style.setProperty("z-index", "303"),
							re.style.setProperty("width", "100%"),
							re.style.setProperty("cursor", "pointer"),
							le.style.setProperty("padding-left", "2px"),
							oe.style.setProperty("height", "18px"),
							ae.style.setProperty("height", "100%"),
							(0, m.insert)(re, () => se.children, null),
							(0, d.effect)(() =>
								(0, C.className)(
									ae,
									[
										"monaco-icon-label height-override-important",
										o.ThemeIcon.asClassName(Q[se.language ?? "bash"]),
									].join(" "),
								),
							),
							re
						);
					})();
			e.$x$b = Z;
		},
	),
		define(
			de[1374],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 14, 26, 13, 36, 2523]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ufd = void 0);
				const n = (0, t.template)("<div>"),
					g = (0, t.template)(
						'<div class="cursor-modal-backing"><div><div class="cursor-modal-interior">',
					),
					p = (o) => {
						const f = (0, c.$pdc)();
						return (
							(0, h.onMount)(() => {
								const b = (s) => {
									s.key === "Escape" && o.closeModal();
								};
								f.window.addEventListener("keydown", b),
									(0, h.onCleanup)(() => {
										f.window.removeEventListener("keydown", b);
									});
							}),
							(() => {
								const b = g(),
									s = b.firstChild,
									l = s.firstChild;
								return (
									b.addEventListener("click", (y) => {
										y.stopPropagation(), !o.disableClickOff && o.closeModal();
									}),
									s.addEventListener("click", (y) => {
										y.stopPropagation();
									}),
									(0, m.spread)(
										s,
										(0, r.mergeProps)(
											{
												get class() {
													return `cursor-overlay-div cursor-modal-container ${o.center ? "cursor-center" : ""}`;
												},
											},
											() => o.extras,
											{
												get style() {
													return {
														...o.extras?.style,
														...(o.balanceSides
															? { "padding-right": "24px" }
															: {}),
													};
												},
											},
										),
										!1,
										!0,
									),
									(0, w.insert)(
										l,
										(0, E.createComponent)(h.Show, {
											get when() {
												return !o.disableX;
											},
											get children() {
												const y = n();
												return (
													y.addEventListener("click", () => {
														o.closeModal();
													}),
													(0, d.effect)(
														($) => {
															const v = [
																	"cursor-modal-dismiss",
																	a.ThemeIcon.asClassName(u.$ak.x),
																].join(" "),
																S = o.xOpacity;
															return (
																v !== $._v$ && (0, C.className)(y, ($._v$ = v)),
																S !== $._v$2 &&
																	(($._v$2 = S) != null
																		? y.style.setProperty("opacity", S)
																		: y.style.removeProperty("opacity")),
																$
															);
														},
														{ _v$: void 0, _v$2: void 0 },
													),
													y
												);
											},
										}),
										null,
									),
									(0, w.insert)(l, () => o.children, null),
									(0, d.effect)(
										(y) => {
											const $ = `rgba(0, 0, 0, ${o.backOpacity ?? 0.2})`,
												v = o.interiorStyle;
											return (
												$ !== y._v$3 &&
													((y._v$3 = $) != null
														? b.style.setProperty("background-color", $)
														: b.style.removeProperty("background-color")),
												(y._v$4 = (0, i.style)(l, v, y._v$4)),
												y
											);
										},
										{ _v$3: void 0, _v$4: void 0 },
									),
									b
								);
							})()
						);
					};
				e.$ufd = p;
			},
		),
		define(
			de[859],
			he([1, 0, 2, 2, 2, 13, 58, 12, 36, 315, 1979]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3bc = c),
					(e.$4bc = n),
					(e.$5bc = g);
				const a = (0, t.template)("<div> toggle, <!> open"),
					h = (0, t.template)("<div>");
				function c(p) {
					const o = (0, m.$odc)(),
						f = o.reactiveStorageService,
						b = (0, E.createMemo)(() =>
							o.aiSettingsService.getAvailableModelsReactive({
								isLongContextOrDebuggerMode:
									p.isLongContextMode || p.isDebuggerMode,
								isChat: p.isChat,
							}),
						);
					f.setApplicationUserPersistentStorage("aiSettings", (y) => {
						let $ = y.modelOverrideEnabled ?? [];
						for (const v of p.additionalModels ?? []) $.push(v);
						return { ...y, modelOverrideEnabled: $ };
					}),
						(0, E.onCleanup)(() => {
							f.setApplicationUserPersistentStorage("aiSettings", (y) => {
								const $ = y.modelOverrideEnabled ?? [],
									v = p.additionalModels ?? [],
									S = $.filter((I) => !v.includes(I));
								return { ...y, modelOverrideEnabled: S };
							}),
								p.additionalModels?.includes(s()) &&
									o.reactiveStorageService.setApplicationUserPersistentStorage(
										"aiSettings",
										(y) => ({
											...y,
											openAIModel: b()[0],
											longContextOpenAIModel: b()[0],
										}),
									);
						});
					const s = (0, E.createMemo)(() =>
							(0, r.$U6b)(
								o.reactiveStorageService,
								b(),
								p.isLongContextMode,
								p.specificModelField,
							),
						),
						l = (y) => (y === "gpt-3.5-turbo" ? "gpt-3.5" : y);
					return (0, w.createComponent)(u.$2bc, {
						isRelative: !1,
						get buttonHint() {
							return p.buttonHint;
						},
						get setTriggerFn() {
							return p.setTriggerFn;
						},
						get value() {
							return l(s());
						},
						get forceRerender() {
							return p.forceRerender;
						},
						get class() {
							return p.class;
						},
						get reverseChevron() {
							return p.reverseChevron;
						},
						get buttonId() {
							return p.buttonId;
						},
						get buttonStyle() {
							return {
								"max-width": "100%",
								display: "inline-flex",
								"min-width": "0",
								"flex-shrink": 1,
								...p.style,
							};
						},
						get anchor() {
							return p.anchor;
						},
						labelStyle: {
							overflow: "hidden",
							"text-overflow": "ellipsis",
							"white-space": "nowrap",
						},
						containerStyle: {
							"flex-shrink": 1,
							overflow: "hidden",
							display: "flex",
							"align-items": "center",
						},
						get onOpen() {
							return p.onOpen;
						},
						get onCloseIgnoresClicking() {
							return p.onClose;
						},
						get items() {
							return b().map((y) => ({ id: y, label: l(y) }));
						},
						get origLabel() {
							return l(s());
						},
						onSelect: (y) => {
							p.onOverwriteSelectBehavior?.(y) ||
								(o.commandService.executeCommand(
									C.$0V,
									y,
									p.isLongContextMode,
									p.specificModelField,
								),
								p.onSelect?.(y));
						},
						get belowListComponent() {
							return (() => {
								const y = a(),
									$ = y.firstChild,
									v = $.nextSibling,
									S = v.nextSibling;
								return (
									y.style.setProperty("font-size", "8px"),
									y.style.setProperty("line-height", "150%"),
									y.style.setProperty(
										"color",
										"var(--vscode-input-placeholderForeground)",
									),
									y.style.setProperty("padding", "0px 4px"),
									y.style.setProperty("text-align", "right"),
									y.style.setProperty("width", "100%"),
									y.style.setProperty("box-sizing", "border-box"),
									(0, i.insert)(y, `${d.$m ? "\u2318" : "ctrl+"}/`, $),
									(0, i.insert)(
										y,
										`${d.$m ? "\u2318\u21E7" : "ctrl+shift+"}/`,
										v,
									),
									y
								);
							})();
						},
					});
				}
				function n(p) {
					return h();
				}
				function g(p) {
					const o = (0, m.$odc)(),
						f = (0, E.createMemo)(() =>
							o.aiSettingsService.getAvailableModelsReactive({
								isLongContextOrDebuggerMode: !1,
								isChat: !1,
							}),
						),
						b = (s) => (s === "gpt-3.5-turbo" ? "gpt-3.5" : s);
					return (0, w.createComponent)(u.$2bc, {
						isRelative: !1,
						get buttonHint() {
							return p.buttonHint;
						},
						get value() {
							return b(p.value);
						},
						get class() {
							return p.class;
						},
						get reverseChevron() {
							return p.reverseChevron;
						},
						get buttonStyle() {
							return {
								...p.style,
								"max-width": "100%",
								display: "inline-flex",
								"min-width": "0",
								"flex-shrink": 1,
							};
						},
						labelStyle: {
							overflow: "hidden",
							"text-overflow": "ellipsis",
							"white-space": "nowrap",
						},
						containerStyle: {
							"flex-shrink": 1,
							overflow: "hidden",
							display: "flex",
							"align-items": "center",
						},
						get items() {
							return f().map((s) => ({ id: s, label: b(s) }));
						},
						get origLabel() {
							return b(p.value);
						},
						get onSelect() {
							return p.onSelect;
						},
					});
				}
			},
		),
		define(
			de[860],
			he([1, 0, 2, 2, 2, 2, 2, 36, 54, 156, 13, 26, 14]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7bc = void 0);
				const c = (0, t.template)("<div><div><div></div><span>"),
					n = (0, t.template)("<div><span><span>"),
					g = (0, t.template)("<div>"),
					p = (o) => {
						const f = (0, d.$odc)(),
							b = f.workspaceContextService.asRelativePath(o),
							s = (0, m.$sc)(b),
							y = b
								.replace(s, "")
								.split("/")
								.filter((v) => !!v.trim()),
							$ = 12;
						return (() => {
							const v = c(),
								S = v.firstChild,
								I = S.firstChild,
								T = I.nextSibling;
							return (
								v.style.setProperty("display", "flex"),
								v.style.setProperty("flex-direction", "column"),
								v.style.setProperty("padding", "0.25rem 0.5rem"),
								v.style.setProperty("gap", "2px"),
								(0, E.insert)(
									v,
									(0, C.createComponent)(u.For, {
										each: y,
										children: (P, k) =>
											(() => {
												const L = n(),
													D = L.firstChild,
													M = D.firstChild;
												return (
													L.style.setProperty("display", "flex"),
													L.style.setProperty("align-items", "center"),
													L.style.setProperty("overflow", "hidden"),
													L.style.setProperty("text-overflow", "ellipsis"),
													L.style.setProperty("white-space", "nowrap"),
													(0, E.insert)(
														L,
														(0, C.createComponent)(u.For, {
															get each() {
																return Array(k()).fill(null);
															},
															children: () =>
																(() => {
																	const N = g();
																	return (
																		N.style.setProperty("margin-left", "12px"),
																		N.style.setProperty(
																			"border-left",
																			"1px solid var(--vscode-commandCenter-inactiveBorder)",
																		),
																		N.style.setProperty(
																			"display",
																			"inline-block",
																		),
																		N
																	);
																})(),
														}),
														D,
													),
													D.style.setProperty("display", "flex"),
													D.style.setProperty("align-items", "center"),
													D.style.setProperty("gap", "4px"),
													D.style.setProperty("overflow", "hidden"),
													D.style.setProperty("text-overflow", "ellipsis"),
													D.style.setProperty("white-space", "nowrap"),
													D.style.setProperty("font-size", "12px"),
													M.style.setProperty("font-size", "12px"),
													(0, E.insert)(D, P, null),
													(0, w.effect)(
														(N) => {
															const A = k() === y.length - 1 ? 1 : 0.5,
																R = `calc(100% - ${$ * k()}px)`,
																O = a.ThemeIcon.asClassName(h.$ak.folder);
															return (
																A !== N._v$ &&
																	((N._v$ = A) != null
																		? D.style.setProperty("opacity", A)
																		: D.style.removeProperty("opacity")),
																R !== N._v$2 &&
																	((N._v$2 = R) != null
																		? D.style.setProperty("max-width", R)
																		: D.style.removeProperty("max-width")),
																O !== N._v$3 &&
																	(0, i.className)(M, (N._v$3 = O)),
																N
															);
														},
														{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
													),
													L
												);
											})(),
									}),
									S,
								),
								S.style.setProperty("display", "flex"),
								S.style.setProperty("align-items", "center"),
								S.style.setProperty("overflow", "hidden"),
								S.style.setProperty("text-overflow", "ellipsis"),
								S.style.setProperty("white-space", "nowrap"),
								I.style.setProperty(
									"border-left",
									"1px solid var(--vscode-commandCenter-inactiveBorder)",
								),
								I.style.setProperty("display", "inline-block"),
								T.style.setProperty("display", "flex"),
								T.style.setProperty("align-items", "center"),
								T.style.setProperty("overflow", "hidden"),
								T.style.setProperty("text-overflow", "ellipsis"),
								T.style.setProperty("white-space", "nowrap"),
								T.style.setProperty("font-size", "12px"),
								(0, E.insert)(
									T,
									(0, C.createComponent)(r.$k$b, {
										fileName: s,
										get workspaceContextService() {
											return f.workspaceContextService;
										},
										get modelService() {
											return f.modelService;
										},
										get languageService() {
											return f.languageService;
										},
									}),
									null,
								),
								(0, E.insert)(T, s, null),
								(0, w.effect)(() =>
									`${$ * y.length}px` != null
										? I.style.setProperty("margin-left", `${$ * y.length}px`)
										: I.style.removeProperty("margin-left"),
								),
								v
							);
						})();
					};
				e.$7bc = p;
			},
		),
		define(
			de[4191],
			he([
				1, 0, 2, 2, 2, 2, 13, 14, 54, 26, 28, 9, 140, 36, 558, 156, 444, 1071,
				299, 860,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$8bc = l);
				const s = (0, t.template)("<div>");
				function l(y, $) {
					const v = (0, c.$odc)(),
						{ chatDataService: S, aiChatService: I } = v,
						T = v.notepadDataService,
						[P, k] = (0, C.createSignal)(""),
						[L, D] = (0, C.createSignal)(0),
						{ options: M } = (0, o.$1_b)(
							P,
							() => [
								p.EverythingSearchOptionType.File,
								p.EverythingSearchOptionType.Notepad,
								p.EverythingSearchOptionType.Semantic,
							],
							() => ({ semantic: { topK: 50, finalK: 25 } }),
						),
						[N, A] = (0, C.createSignal)([]);
					(0, C.createEffect)(() => {
						const U = S.getBubbleData(y(), $());
						if (!U || U.type !== h.BubbleType.USER_CHAT) return;
						const z = U.fileSelections ?? [],
							F = new Set(z.map((K) => (0, f.$8gc)(K))),
							x = U.notepads ?? [],
							H = new Set(x.map((K) => K.notepadId)),
							q = [];
						for (const K of M())
							if (
								K.type === p.EverythingSearchOptionType.File ||
								K.type === p.EverythingSearchOptionType.Semantic
							) {
								if (!K.uri || F.has(K.uri.toString())) continue;
								q.push(K);
							} else if (K.type === p.EverythingSearchOptionType.Notepad) {
								if (!K.notepadId || H.has(K.notepadId)) continue;
								q.push(K);
							}
						const V = (K) => T.getNotepadData(K)?.name ?? n.$F9b,
							G = [
								...z.map((K) => ({
									type: "file",
									uri: a.URI.revive(K.uri),
									fileName: (0, m.$sc)(a.URI.revive(K.uri).fsPath),
								})),
								...x.map((K) => ({
									type: "notepad",
									id: K.notepadId,
									name: V(K.notepadId),
								})),
								...q
									.map((K) =>
										K.type === p.EverythingSearchOptionType.File ||
										K.type === p.EverythingSearchOptionType.Semantic
											? {
													type: "file",
													uri: a.URI.from(K.uri),
													fileName: (0, m.$sc)(
														a.URI.revive(K.uri)?.fsPath ?? "",
													),
													labelMatches: K.labelMatches,
													descriptionMatches: K.descriptionMatches,
												}
											: K.type === p.EverythingSearchOptionType.Notepad
												? {
														type: "notepad",
														id: K.notepadId,
														name: K.name,
														labelMatches: K.labelMatches,
														descriptionMatches: K.descriptionMatches,
													}
												: void 0,
									)
									.filter(u.$tg),
							];
						A(G);
					});
					const R = (0, C.createMemo)(() => {
							const U = S.getBubbleData(y(), $());
							if (!U || U.type !== h.BubbleType.USER_CHAT) return [];
							const z = U.fileSelections ?? [],
								F = new Set(z.map((q) => a.URI.revive(q.uri).toString())),
								x = U.notepads ?? [],
								H = new Set(x.map((q) => q.notepadId));
							return N().map((q) => ({
								id: q.type === "file" ? q.uri.toString() : q.id,
								item: q,
								render: () =>
									q.type === "file"
										? {
												title:
													v.customEditorLabelService.getName(
														a.URI.revive(q.uri),
													) ?? q.fileName,
												subtitle: `${(0, m.$rc)(v.workspaceContextService.asRelativePath(q.uri))}/`,
												isAdded: F.has(q.uri.toString()),
												icon: (0, E.createComponent)(g.$k$b, {
													get fileName() {
														return q.fileName;
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
												titleHighlights: q.labelMatches,
												subtitleHighlights: q.descriptionMatches,
											}
										: {
												title: q.name,
												subtitle: "Notepad",
												isAdded: H.has(q.id),
												icon: (() => {
													const V = s();
													return (
														V.style.setProperty("opacity", "0.7"),
														V.style.setProperty("padding-right", "6px"),
														(0, w.effect)(() =>
															(0, i.className)(
																V,
																r.ThemeIcon.asClassName(d.$ak.notebook),
															),
														),
														V
													);
												})(),
												titleHighlights: q.labelMatches,
												subtitleHighlights: q.descriptionMatches,
											},
								renderPreview:
									q.type === "file" ? () => (0, b.$7bc)(q.uri) : void 0,
							}));
						}),
						O = (U) => {
							U.type === "file"
								? I.addContext({
										tabId: y(),
										bubbleId: $(),
										contextType: "fileSelections",
										value: { uri: U.uri, isCurrentFile: !1 },
										shouldShowPreview: !1,
									})
								: I.addContext({
										tabId: y(),
										bubbleId: $(),
										contextType: "notepads",
										value: { notepadId: U.id, isCurrentNotepad: !1 },
										shouldShowPreview: !1,
									});
						},
						B = (U) => {
							const z = S.getBubbleData(y(), $());
							if (!(!z || z.type !== h.BubbleType.USER_CHAT))
								if (U.type === "file") {
									const F = z.fileSelections.findIndex(
										(x) => a.URI.revive(x.uri).toString() === U.uri.toString(),
									);
									F !== -1 &&
										I.removeContext({
											tabId: y(),
											bubbleId: $(),
											contextType: "fileSelections",
											index: F,
										});
								} else {
									const F = z.notepads?.findIndex((x) => x.notepadId === U.id);
									F !== -1 &&
										I.removeContext({
											tabId: y(),
											bubbleId: $(),
											contextType: "notepads",
											index: F,
										});
								}
						};
					return () => [];
				}
			},
		),
		define(
			de[4192],
			he([1, 0, 2, 13, 54, 9, 36, 156, 860]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$mzc = r);
				function r(u, a) {
					const h = (0, C.$odc)(),
						[c, n] = (0, i.createSignal)(""),
						[g, p] = (0, i.createSignal)(0),
						[o, f] = (0, i.createSignal)(new Set());
					let b, s;
					const l = (0, i.createMemo)(() => {
							const I = u(),
								T = c().toLowerCase(),
								P = new Map();
							if (I?.diff.diffs)
								for (const k of I.diff.diffs) {
									const L = E.URI.file(k.to),
										D = (0, w.$sc)(k.to),
										M = (0, w.$rc)(h.workspaceContextService.asRelativePath(L));
									(T === "" ||
										D.toLowerCase().includes(T) ||
										M.toLowerCase().includes(T)) &&
										P.set(L.toString(), { uri: L, fileName: D });
								}
							return Array.from(P.values());
						}),
						y = (0, i.createMemo)(() => {
							const I = u();
							if (!I) return;
							const T = o(),
								P = Array.from(T).sort().join(",");
							if (P === s) {
								s === void 0 && (s = P);
								return;
							}
							s = P;
							const k = {
								...I.diff,
								diffs: I.diff.diffs.filter((L) =>
									T.has(E.URI.file(L.to).toString()),
								),
							};
							return h.bugbotService.computeSizedGitDiff(k);
						});
					(0, i.createEffect)(() => {
						const I = y();
						I &&
							(b !== void 0 && clearTimeout(b),
							(b = h.window.setTimeout(() => {
								a?.(I);
							}, 300)));
					}),
						(0, i.onCleanup)(() => {
							b !== void 0 && clearTimeout(b);
						}),
						(0, i.createEffect)(() => {
							const I = u();
							if (I?.diff.diffs) {
								const T = new Set();
								for (const P of I.diff.diffs)
									T.add(E.URI.file(P.to).toString());
								f(T);
							}
						});
					const $ = (0, i.createMemo)(() =>
							l().map((I) => {
								const T = (0, w.$rc)(
									h.workspaceContextService.asRelativePath(I.uri),
								);
								return {
									id: I.uri.toString(),
									item: I,
									title: I.fileName,
									subtitle: T === "/" ? "/" : `${T}/`,
									isAdded: o().has(I.uri.toString()),
									icon: (0, t.createComponent)(d.$k$b, {
										get fileName() {
											return I.fileName;
										},
										get workspaceContextService() {
											return h.workspaceContextService;
										},
										get modelService() {
											return h.modelService;
										},
										get languageService() {
											return h.languageService;
										},
									}),
									renderPreview: () => (0, m.$7bc)(I.uri),
								};
							}),
						),
						v = (I) => {
							f((T) => {
								const P = new Set(T);
								return P.add(I.uri.toString()), P;
							});
						},
						S = (I) => {
							f((T) => {
								const P = new Set(T);
								return P.delete(I.uri.toString()), P;
							});
						};
					return (0, i.createMemo)(() => ({
						items: $(),
						onItemAdd: v,
						onItemRemove: S,
						onSearch: n,
						selectedIndex: g(),
						setSelectedIndex: p,
					}));
				}
			},
		),
		define(
			de[4193],
			he([
				1, 0, 2, 2, 2, 2, 13, 14, 54, 26, 28, 9, 47, 177, 36, 558, 156, 444,
				1071, 860, 476, 299,
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
					(e.useComposerPickerMenuProps = $);
				const y = (0, t.template)("<div>");
				function $(v, S) {
					const I = (0, n.$odc)(),
						{ composerDataService: T, composerService: P } = I,
						k = I.notepadDataService,
						[L, D] = (0, C.createSignal)(""),
						[M, N] = (0, C.createSignal)(0),
						{ options: A, isLoading: R } = (0, f.$1_b)(
							L,
							() => [
								o.EverythingSearchOptionType.File,
								o.EverythingSearchOptionType.Notepad,
								o.EverythingSearchOptionType.Semantic,
							],
							() => ({ semantic: { topK: 50, finalK: 25 } }),
						),
						{ currentComposer: O, updateCurrentComposer: B } = (0,
						c.useComposerDataHandle)(v),
						[U, z] = (0, C.createSignal)([]),
						F = (0, C.createMemo)(() =>
							S
								? T.getComposerBubble(O().composerId, S())?.context
								: O().context,
						);
					(0, C.createEffect)(() => {
						const G = L(),
							K = new Set(F()?.selectedImages?.map((J) => J.path) ?? []);
						if (G === "") {
							const J = F()?.fileSelections ?? [],
								W = new Set(J.map((_) => (0, l.$8gc)(_))),
								X = F()?.notepads ?? [],
								Y = new Set(X.map((_) => _.notepadId)),
								ie = [];
							for (const _ of A())
								if (
									_.type === o.EverythingSearchOptionType.File ||
									_.type === o.EverythingSearchOptionType.Semantic
								) {
									if (!_.uri || W.has(_.uri.toString()) || K.has(_.uri.fsPath))
										continue;
									ie.push(_);
								} else if (_.type === o.EverythingSearchOptionType.Notepad) {
									if (!_.notepadId || Y.has(_.notepadId)) continue;
									ie.push(_);
								}
							const ne = (_) => k.getNotepadData(_)?.name ?? g.$F9b,
								ee = [
									...J.map((_) => ({
										type: "file",
										uri: a.URI.revive(_.uri),
										fileName: (0, m.$sc)(a.URI.revive(_.uri).fsPath),
									})),
									...X.map((_) => ({
										type: "notepad",
										id: _.notepadId,
										name: ne(_.notepadId),
									})),
									...ie
										.map((_) =>
											_.type === o.EverythingSearchOptionType.File ||
											_.type === o.EverythingSearchOptionType.Semantic
												? {
														type: "file",
														uri: a.URI.from(_.uri),
														fileName: (0, m.$sc)(
															a.URI.revive(_.uri)?.fsPath ?? "",
														),
														labelMatches: _.labelMatches,
														descriptionMatches: _.descriptionMatches,
													}
												: _.type === o.EverythingSearchOptionType.Notepad
													? {
															type: "notepad",
															id: _.notepadId,
															name: _.name,
															labelMatches: _.labelMatches,
															descriptionMatches: _.descriptionMatches,
														}
													: void 0,
										)
										.filter(u.$tg),
								];
							z(ee);
							return;
						}
						z(
							A()
								.filter((J, W, X) =>
									J.type === o.EverythingSearchOptionType.File ||
									J.type === o.EverythingSearchOptionType.Semantic
										? J.uri &&
											!K.has(J.uri.fsPath) &&
											X.findIndex(
												(Y) =>
													(Y.type === o.EverythingSearchOptionType.File ||
														Y.type === o.EverythingSearchOptionType.Semantic) &&
													Y.uri?.toString() === J.uri?.toString(),
											) === W
										: J.type === o.EverythingSearchOptionType.Notepad
											? X.findIndex(
													(Y) =>
														Y.type === o.EverythingSearchOptionType.Notepad &&
														Y.notepadId === J.notepadId,
												) === W
											: !0,
								)
								.map((J) => {
									if (
										J.type === o.EverythingSearchOptionType.File ||
										J.type === o.EverythingSearchOptionType.Semantic
									)
										return {
											type: "file",
											uri: J.uri,
											fileName: (0, m.$sc)(J.uri.fsPath),
											labelMatches: J.labelMatches,
											descriptionMatches: J.descriptionMatches,
										};
									if (J.type === o.EverythingSearchOptionType.Notepad)
										return {
											type: "notepad",
											id: J.notepadId,
											name: J.name,
											labelMatches: J.labelMatches,
											descriptionMatches: J.descriptionMatches,
										};
								})
								.filter(u.$tg),
						);
					});
					const x = (0, C.createMemo)(() => {
							const G = U(),
								K = O().composerId,
								J = S?.(),
								W = J ? T.getComposerBubble(K, J)?.context : O().context;
							if (!W)
								return console.error("[composer] No context available"), [];
							const X = W.fileSelections ?? [],
								Y = W.notepads ?? [];
							return G.map((ie) => {
								if (ie.type === "file") {
									const ne = I.customEditorLabelService.getName(
										a.URI.revive(ie.uri),
									);
									return {
										id: ie.uri.toString(),
										item: ie,
										title: ne ?? ie.fileName,
										subtitle: `${(0, m.$rc)(I.workspaceContextService.asRelativePath(a.URI.revive(ie.uri)))}/`,
										isAdded: X.some((ee) => (0, a.$Ac)(ee.uri, ie.uri)),
										icon: (0, E.createComponent)(p.$k$b, {
											get fileName() {
												return (0, m.$sc)(a.URI.revive(ie.uri).fsPath);
											},
											get workspaceContextService() {
												return I.workspaceContextService;
											},
											get modelService() {
												return I.modelService;
											},
											get languageService() {
												return I.languageService;
											},
										}),
										titleHighlights: ie.labelMatches,
										subtitleHighlights: ie.descriptionMatches,
										renderPreview:
											ie.type === "file" ? () => (0, b.$7bc)(ie.uri) : void 0,
									};
								}
								return {
									id: ie.id,
									item: ie,
									title: ie.name,
									subtitle: "Notepad",
									isAdded: Y.some((ne) => ne.notepadId === ie.id),
									icon: (() => {
										const ne = y();
										return (
											ne.style.setProperty("opacity", "0.7"),
											ne.style.setProperty("padding-right", "6px"),
											(0, w.effect)(() =>
												(0, i.className)(
													ne,
													r.ThemeIcon.asClassName(d.$ak.book),
												),
											),
											ne
										);
									})(),
									titleHighlights: ie.labelMatches,
									subtitleHighlights: ie.descriptionMatches,
								};
							});
						}),
						H = (G) => {
							const K = O().composerId;
							if (!K) return;
							const J =
									G.type === "file" &&
									(G.fileName.endsWith(".png") ||
										G.fileName.endsWith(".jpg") ||
										G.fileName.endsWith(".jpeg") ||
										G.fileName.endsWith(".gif") ||
										G.fileName.endsWith(".bmp") ||
										G.fileName.endsWith(".webp")),
								W = S?.();
							J
								? (async () => {
										const Y = new Image(),
											ie = await fetch(G.uri.fsPath).then((ee) => ee.blob());
										Y.src = URL.createObjectURL(ie);
										const ne = {
											path: G.uri.fsPath,
											uuid: (0, h.$9g)(),
											dimension: { width: Y.width, height: Y.height },
											loadedAt: Date.now(),
										};
										W
											? P.addBubbleContext({
													composerId: K,
													bubbleId: W,
													contextType: "selectedImages",
													value: ne,
													shouldShowPreview: !1,
												})
											: P.addContext({
													composerId: K,
													contextType: "selectedImages",
													value: ne,
													shouldShowPreview: !1,
												});
									})()
								: G.type === "file"
									? W
										? P.addBubbleContext({
												composerId: K,
												bubbleId: W,
												contextType: "fileSelections",
												value: { uri: G.uri },
												shouldShowPreview: !1,
											})
										: P.addContext({
												composerId: K,
												contextType: "fileSelections",
												value: { uri: G.uri },
												shouldShowPreview: !1,
											})
									: W
										? P.addBubbleContext({
												composerId: K,
												bubbleId: W,
												contextType: "notepads",
												value: { notepadId: G.id },
												shouldShowPreview: !1,
											})
										: P.addContext({
												composerId: K,
												contextType: "notepads",
												value: { notepadId: G.id },
												shouldShowPreview: !1,
											});
						},
						q = (G) => {
							const K = O().composerId;
							if (!K) return;
							const J = S?.();
							if (G.type === "file") {
								const W = J ? T.getComposerBubble(K, J)?.context : O().context;
								if (!W) return;
								const X = W.fileSelections?.findIndex((Y) =>
									(0, a.$Ac)(Y.uri, G.uri),
								);
								if (typeof X != "number" || X === -1) return;
								J
									? P.removeBubbleContext({
											composerId: K,
											bubbleId: J,
											contextType: "fileSelections",
											index: X,
										})
									: P.removeContext({
											composerId: K,
											contextType: "fileSelections",
											index: X,
										});
							} else {
								const W = J ? T.getComposerBubble(K, J)?.context : O().context;
								if (!W) return;
								const X = W.notepads?.findIndex((Y) => Y.notepadId === G.id);
								if (typeof X != "number" || X === -1) return;
								J
									? P.removeBubbleContext({
											composerId: K,
											bubbleId: J,
											contextType: "notepads",
											index: X,
										})
									: P.removeContext({
											composerId: K,
											contextType: "notepads",
											index: X,
										});
							}
						};
					return (0, C.createMemo)(() => ({
						items: x(),
						onItemAdd: H,
						onItemRemove: q,
						onSearch: D,
						selectedIndex: M(),
						setSelectedIndex: N,
						height: (0, s.$Kac)() ? 300 : void 0,
						isLoading: R(),
					}));
				}
			},
		),
		define(
			de[135],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 13, 7, 203, 195, 36, 2527]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$w0b = o),
					(e.$x0b = f),
					(e.$y0b = b),
					(a = mt(a));
				const g = (0, t.template)("<div><div>"),
					p = (0, t.template)("<div>");
				function o(s) {
					const l = s.scrollable ?? b(s.stableScrollable);
					(0, u.onCleanup)(() => {
						l.dispose();
					});
					let y,
						$,
						v = { value: void 0 };
					const S = a.$Ogb()?.ResizeObserver;
					let I = 0;
					const [T, P] = (0, u.createSignal)(void 0);
					(0, u.createEffect)(() => {
						s.scrollingDirection === "vertical"
							? P({ width: "100%", "min-height": "100%" })
							: s.scrollingDirection === "horizontal"
								? P({ height: "100%", "min-width": "100%" })
								: P(void 0);
					});
					const k = s.triggerOnHeightChange,
						L = (0, u.createMemo)(() => {
							const z = s.onScroll;
							return () => {
								if (!y) return;
								const F = y.getBoundingClientRect().height;
								let x = !0;
								F !== I ? ((I = F), (x = k ?? !1)) : N(), x && z && z();
							};
						}),
						[D, M] = (0, u.createSignal)(!1),
						N = () => {
							if (!v.value) return;
							const z = v.value.getBoundingClientRect(),
								{ scrollHeight: F } = l.getScrollDimensions(),
								{ scrollTop: x } = l.getCurrentScrollPosition();
							M(x + z.height >= F - 4);
						},
						A = () => {
							l.setScrollPositionNow({ scrollTop: l.getScrollHeight() });
						},
						R = () => {
							const z = l.getScrollHeight(),
								F = l.getScrollDimensions().height,
								x = z - F;
							l.setScrollPositionNow({ scrollTop: Math.max(0, x) });
						};
					(0, u.createEffect)(
						(0, u.on)(
							() => s.scrollToBottomTrigger,
							(z) => {
								z !== void 0 &&
									setTimeout(() => {
										s.autoScrollToBottom ? A() : R();
									}, 0);
							},
						),
					),
						l.onScroll((z) => {
							L()(),
								v.value &&
									(z.scrollTopChanged && (v.value.scrollTop = z.scrollTop),
									z.scrollLeftChanged && (v.value.scrollLeft = z.scrollLeft));
						}),
						(0, u.createEffect)(
							(0, u.on)(
								() => s.resetScrollable,
								() => {
									l.setScrollPositionNow({ scrollLeft: 0, scrollTop: 0 });
								},
							),
						),
						(0, u.createEffect)(
							(0, u.on)(
								() => s.resetScrollableSize,
								() => {
									if (!y) return;
									const z = y.parentElement;
									if (!z) return;
									const F = z.getBoundingClientRect();
									F &&
										l.setScrollDimensions(
											{ scrollWidth: F.width, scrollHeight: F.height },
											!0,
										);
								},
							),
						),
						(0, u.onMount)(() => {
							const z = new S((F) => {
								for (const x of F) {
									const { width: H, height: q } = x.contentRect;
									l.setScrollDimensions(
										{ scrollWidth: H, scrollHeight: q },
										!0,
									);
								}
							});
							y && z.observe(y),
								(0, u.onCleanup)(() => {
									z.disconnect();
								});
						}),
						(0, u.onMount)(() => {
							const z = new S((F) => {
								for (const x of F) {
									const { width: H, height: q } = x.contentRect;
									l.setScrollDimensions({ width: H, height: q }, !0),
										v.value &&
											(s.scrollingDirection === "horizontal"
												? (v.value.style.width = `${H}px`)
												: s.scrollingDirection === "vertical"
													? (v.value.style.height = `${q}px`)
													: ((v.value.style.width = `${H}px`),
														(v.value.style.height = `${q}px`)));
								}
							});
							$ && z.observe($),
								(0, u.onCleanup)(() => {
									z.disconnect();
								});
						}),
						(0, u.onMount)(() => {
							const z = new S(() => {
								const F = D();
								N(), s.autoScrollToBottom && F && A();
							});
							y && z.observe(y),
								(0, u.onCleanup)(() => {
									z.disconnect();
								});
						});
					const O = (0, u.createMemo)(() =>
							s.scrollingDirection === "both"
								? { overflow: "hidden" }
								: s.scrollingDirection === "horizontal"
									? { overflowX: "hidden", height: "100%" }
									: { overflowY: "hidden", width: "100%" },
						),
						B = (() => {
							const z = g(),
								F = z.firstChild;
							(0, d.use)((H) => (v.value = H), z),
								(0, m.spread)(
									z,
									(0, r.mergeProps)(
										{
											get style() {
												return { ...O(), ...s.contentStyle };
											},
										},
										() => s.innerContainerDivProps,
									),
									!1,
									!0,
								);
							const x = y;
							return (
								typeof x == "function" ? (0, d.use)(x, F) : (y = F),
								(0, C.insert)(F, () => s.children),
								(0, E.effect)(
									(H) => {
										const q = {
												display: "inline-block",
												...T(),
												...s.innerContainerStyle,
											},
											V = s.innerContainerClass;
										return (
											(H._v$ = (0, w.style)(F, q, H._v$)),
											V !== H._v$2 && (0, i.className)(F, (H._v$2 = V)),
											H
										);
									},
									{ _v$: void 0, _v$2: void 0 },
								),
								z
							);
						})(),
						U = new h.$7hb(
							B,
							{
								mouseWheelSmoothScroll: !1,
								...(s.nonReactiveElementOptions ?? {}),
							},
							l,
						);
					if (s.childStyle)
						for (const [z, F] of Object.entries(s.childStyle)) {
							const x = z;
							U.getDomNode().style[x] = F;
						}
					return (
						(0, u.createEffect)(() => {
							s.disableScroll
								? U.updateOptions({
										horizontal: c.ScrollbarVisibility.Hidden,
										vertical: c.ScrollbarVisibility.Hidden,
										handleMouseWheel: !1,
									})
								: U.updateOptions({
										horizontal:
											s.scrollingDirection === "horizontal" ||
											s.scrollingDirection === "both"
												? c.ScrollbarVisibility.Auto
												: void 0,
										vertical:
											s.scrollingDirection === "vertical" ||
											s.scrollingDirection === "both"
												? c.ScrollbarVisibility.Auto
												: void 0,
										handleMouseWheel: !0,
									});
						}),
						(0, u.createEffect)(() => {
							s.scrollingDirection === "horizontal"
								? ((U.getDomNode().style.height = "100%"),
									(U.getDomNode().style.width = "unset"))
								: s.scrollingDirection === "vertical"
									? ((U.getDomNode().style.width = "100%"),
										(U.getDomNode().style.height = "unset"))
									: ((U.getDomNode().style.width = "unset"),
										(U.getDomNode().style.height = "unset"));
						}),
						(0, u.createEffect)(() => {
							s.reactiveElementOptions &&
								U.updateOptions(s.reactiveElementOptions);
						}),
						(() => {
							const z = p(),
								F = $;
							return (
								typeof F == "function" ? (0, d.use)(F, z) : ($ = z),
								(0, C.insert)(z, () => U.getDomNode()),
								(0, E.effect)(
									(x) => {
										const H = `scrollable-div-container ${s.class} ${s.onlyShowScrollbarOnHover ? "show-only-on-hover" : ""}`,
											q = { ...s.style };
										return (
											H !== x._v$3 && (0, i.className)(z, (x._v$3 = H)),
											(x._v$4 = (0, w.style)(z, q, x._v$4)),
											x
										);
									},
									{ _v$3: void 0, _v$4: void 0 },
								),
								z
							);
						})()
					);
				}
				function f(s) {
					const l = (0, n.$pdc)();
					return {
						forceIntegerValues: !1,
						smoothScrollDuration: 0,
						scheduleAtNextAnimationFrame: (y) => a.$hgb(l.window, y),
						stickyScrollVertical: s ? "down" : void 0,
					};
				}
				function b(s) {
					return new c.$KK(f(s));
				}
			},
		),
		define(
			de[4194],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 3, 9, 36, 13, 312, 41, 19, 135, 851, 14, 26,
				480, 98,
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
					(e.$7Zc = void 0),
					(e.$8Zc = T),
					(e.$9Zc = k),
					(s = mt(s));
				const l = (0, t.template)("<div>No changes found"),
					y = (0, t.template)("<div>"),
					$ = (0, t.template)("<div> - "),
					v = (0, t.template)("<div><div><div><span></span><div></div><div>"),
					S = (0, t.template)(
						'<div class="cursor-ai-contains-simple-code-block">',
					);
				class I extends m.$1c {
					constructor(D, M) {
						super(),
							(this.f = D),
							(this.instantiationService = M),
							(this.c = []),
							this.D(k(this.f, this, this.instantiationService));
					}
					layout(D) {}
					getURIs() {
						return this.c;
					}
					setURIs(D) {
						this.c = D;
					}
					getActiveControl() {}
					getEditorType() {
						return s.EditorType.InlineMultiDiffEditor;
					}
					getPosition() {
						return null;
					}
					getSelection() {
						return null;
					}
				}
				e.$7Zc = I;
				function T() {
					const L = (0, u.$odc)();
					let D;
					const [M, N] = (0, a.createSignal)(0);
					(0, a.onMount)(() => {
						const H = new ResizeObserver((q) => {
							for (const V of q) {
								const { width: G, height: K } = V.contentRect;
								N(G);
							}
						});
						D && H.observe(D),
							(0, a.onCleanup)(() => {
								H.disconnect();
							});
					});
					const A = (0, a.createMemo)(() =>
							L.reactiveStorageService.nonPersistentStorage.inlineDiffs
								.filter((H) => H.source === b.$_9b || H.source === b.$a0b)
								.sort((H, q) => (H.createdAt ?? 0) - (q.createdAt ?? 0)),
						),
						[R, O] = (0, a.createSignal)([]),
						[B, U] = (0, a.createSignal)(new Map()),
						[z, F] = (0, a.createSignal)([]),
						x = (H) =>
							`${H.uri.toString()}-${H.changes[0].addedRange.startLineNumber}`;
					return (
						(0, a.createEffect)(() => {
							const H = new Map();
							for (const q of A()) {
								const V = L.inlineDiffService.getGroupedChanges({
									diffId: q.id,
								});
								for (const G of V) {
									const K = {
										inlineDiffId: q.id,
										uri: q.uri,
										changes: G,
										startLineNumber:
											(G.at(0)?.addedRange.startLineNumber ?? 1) +
											q.currentRange.startLineNumber,
										endLineNumberExclusive:
											(G.at(-1)?.addedRange.endLineNumberExclusive ?? 1) +
											q.currentRange.startLineNumber,
									};
									H.set(x(K), K);
								}
							}
							U(H), F(Array.from(H.keys()));
						}),
						(0, d.createComponent)(g.$w0b, {
							scrollingDirection: "vertical",
							style: { width: "100%", height: "100%" },
							ref(H) {
								const q = D;
								typeof q == "function" ? q(H) : (D = H);
							},
							get children() {
								return (0, d.createComponent)(a.For, {
									get each() {
										return z();
									},
									get fallback() {
										return l();
									},
									children: (H) =>
										(0, d.createComponent)(a.Show, {
											get when() {
												return B().has(H);
											},
											get children() {
												const q = v(),
													V = q.firstChild,
													G = V.firstChild,
													K = G.firstChild,
													J = K.nextSibling,
													W = J.nextSibling;
												return (
													V.addEventListener("click", () => {
														O((X) =>
															X.includes(H)
																? X.filter((Y) => Y !== H)
																: [...X, H],
														);
													}),
													V.style.setProperty("display", "flex"),
													V.style.setProperty("margin-bottom", "4px"),
													V.style.setProperty("cursor", "pointer"),
													V.style.setProperty("flex-direction", "row"),
													V.style.setProperty("align-items", "center"),
													V.style.setProperty(
														"justify-content",
														"space-between",
													),
													V.style.setProperty(
														"background-color",
														"var(--vscode-peekViewTitle-background)",
													),
													V.style.setProperty("height", "40px"),
													V.style.setProperty("font-size", "1.2em"),
													V.style.setProperty(
														"border",
														"1px solid var(--border-color)",
													),
													G.style.setProperty(
														"color",
														"var(--vscode-input-placeholderForeground)",
													),
													G.style.setProperty("display", "flex"),
													K.style.setProperty("margin-left", "10px"),
													J.style.setProperty("cursor", "pointer"),
													J.style.setProperty("margin-left", "5px"),
													(0, C.insert)(J, () =>
														(0, n.$kh)(B().get(H)?.uri ?? r.URI.file("")),
													),
													W.style.setProperty("opacity", "0.5"),
													W.style.setProperty("margin-left", "5px"),
													W.style.setProperty("flex-shrink", "1"),
													W.style.setProperty("min-width", "0"),
													W.style.setProperty("font-size", "0.8em"),
													W.style.setProperty("display", "flex"),
													(0, C.insert)(
														W,
														(0, d.createComponent)(g.$w0b, {
															scrollingDirection: "horizontal",
															style: { width: "100%", "white-space": "nowrap" },
															get children() {
																return L.workspaceContextService.asRelativePath(
																	B().get(H)?.uri ?? r.URI.file(""),
																);
															},
														}),
													),
													(0, C.insert)(
														V,
														(0, d.createComponent)(a.Show, {
															get when() {
																return R().includes(H);
															},
															get children() {
																return [
																	(() => {
																		const X = y();
																		return (
																			X.style.setProperty("flex-grow", "1"), X
																		);
																	})(),
																	(() => {
																		const X = $(),
																			Y = X.firstChild;
																		return (
																			X.style.setProperty(
																				"color",
																				"var(--vscode-input-placeholderForeground)",
																			),
																			X.style.setProperty("display", "flex"),
																			X.style.setProperty("font-size", "0.8em"),
																			X.style.setProperty(
																				"margin-right",
																				"5px",
																			),
																			(0, C.insert)(
																				X,
																				() => B().get(H)?.startLineNumber ?? 1,
																				Y,
																			),
																			(0, C.insert)(
																				X,
																				() =>
																					(B().get(H)?.endLineNumberExclusive ??
																						1) - 1,
																				null,
																			),
																			X
																		);
																	})(),
																];
															},
														}),
														null,
													),
													(0, C.insert)(
														q,
														(0, d.createComponent)(a.Show, {
															get when() {
																return (
																	(0, E.memo)(() => !R().includes(H))() &&
																	B().has(H)
																);
															},
															get children() {
																return (0, d.createComponent)(P, {
																	get changes() {
																		return B().get(H);
																	},
																});
															},
														}),
														null,
													),
													(0, w.effect)(() =>
														(0, i.className)(
															K,
															R().includes(H)
																? f.ThemeIcon.asClassName(o.$ak.chevronRight)
																: f.ThemeIcon.asClassName(o.$ak.chevronDown),
														),
													),
													q
												);
											},
										}),
								});
							},
						})
					);
				}
				const P = (L) => {
					const D = (0, u.$odc)(),
						M = (() => {
							const J = y();
							return (
								J.style.setProperty("width", "100%"),
								J.style.setProperty("height", "100%"),
								J.style.setProperty("box-sizing", "border-box"),
								J
							);
						})(),
						N = h.$X0b.getEditorOptions(D.configurationService);
					(N.lineNumbers = "on"),
						(N.lineDecorationsWidth = 10),
						(N.glyphMargin = !0),
						N.scrollbar &&
							((N.scrollbar.vertical = "hidden"),
							(N.scrollbar.horizontal = "auto"),
							(N.scrollbar.handleMouseWheel = !0),
							(N.scrollbar.alwaysConsumeMouseWheel = !1),
							(N.scrollbar.horizontalScrollbarSize = 10),
							(N.scrollbar.ignoreVerticalScrolling = !0));
					const A = D.instantiationService.createInstance(h.$X0b, M, N, {}),
						R = D.instantiationService.createInstance(p.$Ddc, A);
					R.setShowPartialAcceptRejectWidgets(!1);
					const [O, B] = (0, a.createSignal)(1),
						[U, z] = (0, a.createSignal)(1),
						[F, x] = (0, a.createSignal)(1);
					let H = A.getLayoutInfo().width;
					const q = A.onDidLayoutChange((J) => {
						J.width !== H && (x(V(O(), U())), (H = J.width));
					});
					(0, a.createEffect)(() => {
						x(V(O(), U()));
					});
					const V = (J, W) =>
						L.changes === void 0
							? 0
							: W -
								J +
								R.getRemovedNumLinesInRange(L.changes.inlineDiffId, {
									startLineNumber: J,
									startColumn: 1,
									endLineNumber: W,
									endColumn: 1,
								});
					let G;
					(0, a.onMount)(async () => {
						if (
							(G && G.dispose(),
							(G = await D.textModelService.createModelReference(
								L.changes.uri,
							)),
							!(L.changes === void 0 || L.changes.uri === void 0))
						)
							try {
								A.setModel(G.object.textEditorModel);
								const J = Math.max((L.changes.startLineNumber ?? 1) - 5, 1),
									W = Math.min(
										(L.changes.endLineNumberExclusive ?? 1) + 5,
										A.getModel()?.getLineCount() ?? 1,
									);
								B(J),
									z(W),
									A.revealLine(J, s.ScrollType.Immediate),
									A.revealLine(W, s.ScrollType.Immediate),
									A.revealLine(J, s.ScrollType.Immediate);
								for (let X = 0; X < 10; X++)
									setTimeout(() => {
										x(V(O(), U()));
									}, X * 100);
							} catch (J) {
								console.error(J);
							} finally {
							}
					}),
						(0, a.createEffect)(() => {
							const J = Math.max((L.changes.startLineNumber ?? 1) - 5, 1),
								W = Math.min(
									(L.changes.endLineNumberExclusive ?? 1) + 5,
									A.getModel()?.getLineCount() ?? 1,
								);
							B(J),
								z(W),
								A.revealLine(J, s.ScrollType.Immediate),
								A.revealLine(W, s.ScrollType.Immediate),
								A.revealLine(J, s.ScrollType.Immediate);
							for (let X = 0; X < 10; X++)
								setTimeout(() => {
									x(V(O(), U()));
								}, X * 100);
						});
					const K = async (J, W) => {
						D.openerService &&
							D.openerService.open(
								(0, c.$8rb)(r.URI.from(J), {
									startLineNumber: W,
									startColumn: 1,
									endLineNumber: W,
									endColumn: 1,
								}),
							);
					};
					return (
						A.onMouseDown((J) => {
							J.event.preventDefault(),
								J.event.stopPropagation(),
								K(L.changes.uri, O());
						}),
						A.onMouseWheel((J) => {}),
						(0, a.onCleanup)(() => {
							M.remove(), A?.dispose(), G?.dispose(), R.dispose(), q.dispose();
						}),
						(() => {
							const J = S();
							return (
								(0, C.insert)(J, M),
								(0, w.effect)(() =>
									`${(F() + 2) * 18}px` != null
										? J.style.setProperty("height", `${(F() + 2) * 18}px`)
										: J.style.removeProperty("height"),
								),
								J
							);
						})()
					);
				};
				function k(L, D, M) {
					return (0, u.$ndc)(() => (0, d.createComponent)(T, {}), L, M);
				}
			},
		),
		define(
			de[4195],
			he([1, 0, 2, 2, 2, 2, 13, 19, 36, 33, 135]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Fdc = g);
				const a = (0, t.template)("<div>Context shown to model"),
					h = (0, t.template)("<div>"),
					c = (0, t.template)("<div><span></span><br><br>"),
					n = (0, t.template)("<div>NONE<br>");
				function g(p) {
					const o = (0, m.$odc)(),
						f = (0, C.createMemo)(() =>
							p.contextSessionUuid
								? o.aiContextSessionService.getReactiveReadonlyContextSession(
										p.contextSessionUuid,
									)
								: null,
						),
						[b, s] = (0, C.createSignal)({});
					return (
						(0, C.createEffect)(() => {
							(async () => {
								const y = f();
								if (!y) return;
								const $ = {};
								for (const v of y.intents) {
									if (
										v.intent.intent.case !== "codeSelection" &&
										v.intent.intent.case !== "file"
									)
										continue;
									const S = v.intent.intent,
										I = o.workspaceContextService.resolveRelativePath(
											S.value.relativeWorkspacePath,
										),
										T = await o.textModelService.createModelReference(I);
									let P;
									if (S.case === "file") P = T.object.textEditorModel;
									else {
										const A = T.object.textEditorModel.getLanguageId(),
											R = o.languageService.createById(A);
										P = o.modelService.createModel(
											S.value.text
												.split(`
`)
												.slice(1, -1)
												.join(`
`),
											R,
										);
									}
									const L = new r.$Ce().token,
										M = (
											await o.outlineService.getOrCreate(P, L)
										).getTopLevelSymbols();
									let N;
									S.case === "file"
										? (N = `@${(0, d.$kh)(I)}`)
										: (N = `@${M[0].name}`),
										($[N] = []);
									for (const A of v.items.filter(
										(R) => R.status?.shownToTheModel === !0,
									)) {
										const R = A.item.item.value;
										M.forEach((O) => {
											R.chunkContents.includes(O.name) &&
												!$[N].includes(O.name) &&
												$[N].push(O.name);
										});
									}
								}
								s($);
							})().catch((y) => console.error(y));
						}),
						(0, E.createComponent)(u.$w0b, {
							get style() {
								return {
									width: "400px",
									"background-color": "var(--vscode-editor-background)",
									border: "1px solid var(--vscode-commandCenter-activeBorder)",
									position: "absolute",
									left: `${p.leftOffset + 15}px`,
									bottom: `${p.contentHeight + 40}px`,
									"z-index": 1000002,
									height: `${Object.entries(b()).length * 40 + Object.entries(b()).flatMap((l) => l[1]).length * 25 + 40}px`,
									"max-height": `${p.containerHeight - 100}px`,
									"min-height": "300px",
								};
							},
							get children() {
								return [
									(() => {
										const l = a();
										return (
											l.style.setProperty("width", "392px"),
											l.style.setProperty("padding", "2px 4px 2px 4px"),
											l.style.setProperty(
												"border-bottom",
												"1px solid var(--vscode-commandCenter-activeBorder)",
											),
											l.style.setProperty("font-size", "0.8em"),
											l
										);
									})(),
									(() => {
										const l = h();
										return (
											l.style.setProperty("padding", "8px"),
											(0, w.insert)(
												l,
												(0, E.createComponent)(C.For, {
													get each() {
														return Object.entries(b());
													},
													children: ([y, $]) =>
														(() => {
															const v = c(),
																S = v.firstChild,
																I = S.nextSibling,
																T = I.nextSibling;
															return (
																S.style.setProperty("padding", "2px"),
																S.style.setProperty("padding-left", "4px"),
																S.style.setProperty("padding-right", "4px"),
																S.style.setProperty("border-radius", "4px"),
																S.style.setProperty(
																	"background-color",
																	"rgba(24, 119, 232, 0.2)",
																),
																(0, w.insert)(S, y),
																(0, w.insert)(
																	v,
																	(0, E.createComponent)(C.For, {
																		each: $,
																		children: (P) =>
																			(() => {
																				const k = h();
																				return (0, w.insert)(k, P), k;
																			})(),
																	}),
																	T,
																),
																(0, w.insert)(
																	v,
																	(() => {
																		const P = (0, i.memo)(() => $.length === 0);
																		return () => P() && n();
																	})(),
																	T,
																),
																v
															);
														})(),
												}),
											),
											l
										);
									})(),
								];
							},
						})
					);
				}
			},
		),
		define(
			de[4196],
			he([1, 0, 2, 2, 2, 13, 523, 3207, 135, 36]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Izc = h);
				const u = (0, t.template)("<pre><code>"),
					a = (0, t.template)(
						"<div><div><div>Hyper Mode</div></div><div><div>Hyper Model",
					);
				function h() {
					const c = (0, r.$odc)(),
						n = (0, E.createMemo)(
							() =>
								c.reactiveStorageService.applicationUserPersistentStorage
									.aiHyperModeEnabled,
						),
						g = (0, E.createMemo)(
							() =>
								c.reactiveStorageService.nonPersistentStorage.aiHyperModeData,
						),
						p = (0, E.createMemo)(() => {
							const f = g().hyperRegionsMap;
							try {
								return JSON.stringify(f, null, 2);
							} catch (b) {
								return (
									console.error("Failed to stringify hyperRegionsMap:", b), "{}"
								);
							}
						}),
						o = (0, E.createMemo)(() => {
							const f = c.aiSettingsService.getAvailableModelsReactive();
							return [
								{
									id: "ft:gpt-4-0613:anysphere::99Wnad5H",
									label: "ft:gpt-4-0613:anysphere::99Wnad5H",
								},
								{
									id: "ft:gpt-4-turbo-2024-04-09-alpha:anysphere::9HABVoWl",
									label: "ft:gpt-4-turbo-2024-04-09-alpha:anysphere::9HABVoWl",
								},
								{
									id: "ft:gpt-4-0613:anysphere::9HnbE7b9",
									label: "ft:gpt-4-0613:anysphere::9HnbE7b9",
								},
								{ id: "claude-3-haiku", label: "claude-3-haiku" },
								...f.map((b) => ({ id: b, label: b })),
							];
						});
					return (() => {
						const f = a(),
							b = f.firstChild,
							s = b.firstChild,
							l = b.nextSibling,
							y = l.firstChild;
						return (
							f.style.setProperty("padding", "16px"),
							f.style.setProperty("display", "flex"),
							f.style.setProperty("flex-direction", "column"),
							f.style.setProperty("gap", "8px"),
							f.style.setProperty("height", "100%"),
							b.style.setProperty("display", "flex"),
							b.style.setProperty("align-items", "center"),
							b.style.setProperty("justify-content", "space-between"),
							b.style.setProperty("gap", "8px"),
							(0, i.insert)(
								b,
								(0, w.createComponent)(d.$Hzc, {
									options: ["On", "Off"],
									get selected() {
										return n() ? "On" : "Off";
									},
									onChange: ($) => {},
								}),
								null,
							),
							l.style.setProperty("display", "flex"),
							l.style.setProperty("align-items", "center"),
							l.style.setProperty("justify-content", "space-between"),
							l.style.setProperty("gap", "8px"),
							(0, i.insert)(
								l,
								(0, w.createComponent)(C.$Kbc, {
									origLabel: "Select Hyper Model",
									get value() {
										return (
											c.reactiveStorageService.applicationUserPersistentStorage
												.aiHyperModeModel ?? "finetuned-gpt-4"
										);
									},
									get items() {
										return o();
									},
									onSelect: ($) => {},
								}),
								null,
							),
							(0, i.insert)(
								f,
								(0, w.createComponent)(m.$w0b, {
									scrollingDirection: "vertical",
									style: { height: "100%", width: "100%" },
									get children() {
										const $ = u(),
											v = $.firstChild;
										return (
											$.style.setProperty("white-space", "pre-wrap"),
											$.style.setProperty("word-wrap", "break-word"),
											(0, i.insert)(v, p),
											$
										);
									},
								}),
								null,
							),
							f
						);
					})();
				}
			},
		),
		