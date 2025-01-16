define(de[311], he([1, 0, 160, 422]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.useComposerHoverTooltip = void 0);
			const w = (E = {}) => {
				const { showHover: C, hideHover: d } = (0, i.$z$b)(E.delay);
				return {
					showHover: (r, u, a = E.position ?? t.HoverPosition.ABOVE) => {
						C({
							content: u,
							target: r.currentTarget,
							appearance: { showPointer: !E.noPointer, compact: !0 },
							position: { hoverPosition: a },
							additionalClasses: E.additionalClasses,
						});
					},
					hideHover: d,
				};
			};
			e.useComposerHoverTooltip = w;
		}),
		define(
			de[1778],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 311, 13, 26]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerBottomBarButton = p);
				const c = (0, t.template)('<span class="keybinding">'),
					n = (0, t.template)("<div>"),
					g = (0, t.template)("<span>");
				function p(o) {
					const { showHover: f, hideHover: b } = (0, u.useComposerHoverTooltip)(
							{ delay: 300, additionalClasses: ["chat-hover-tooltip"] },
						),
						s = (0, a.createMemo)(() => o.type ?? "primary");
					return (() => {
						const l = n();
						return (
							l.addEventListener("click", (y) => {
								o.isDisabled || o.onClick(y);
							}),
							(0, m.spread)(
								l,
								(0, r.mergeProps)(
									{
										get class() {
											return `composer-bar-button ${s() === "primary" ? "codebase-button" : ""}`;
										},
										get style() {
											return {
												"line-height": "150%",
												opacity: o.isDisabled ? 0.8 : void 0,
												color: o.isDisabled
													? "var(--vscode-input-placeholderForeground)"
													: s() === "primary"
														? "var(--vscode-input-foreground)"
														: void 0,
												display: "flex",
												"align-items": "center",
												position: "relative",
												"background-color":
													s() === "secondary" ? "transparent" : void 0,
												"font-size": "10px",
												...o.style,
											};
										},
									},
									() =>
										o.hintText
											? {
													onMouseEnter: (y) => {
														o.hintText && f(y, { value: o.hintText });
													},
													onMouseLeave: () => {
														b();
													},
												}
											: {},
								),
								!1,
								!0,
							),
							(0, C.insert)(
								l,
								(0, d.createComponent)(a.Show, {
									get when() {
										return o.icon;
									},
									children: (y) =>
										(() => {
											const $ = g();
											return (
												(0, E.effect)(
													(v) => {
														const S = h.ThemeIcon.asClassName(y()),
															I = {
																"font-size": "0.95em",
																"margin-right": o.title ? "2px" : void 0,
																"padding-top": "1px",
																...o.codiconStyle,
															};
														return (
															S !== v._v$ && (0, w.className)($, (v._v$ = S)),
															(v._v$2 = (0, i.style)($, I, v._v$2)),
															v
														);
													},
													{ _v$: void 0, _v$2: void 0 },
												),
												$
											);
										})(),
								}),
								null,
							),
							(0, C.insert)(l, () => o.title, null),
							(0, C.insert)(
								l,
								(0, d.createComponent)(a.Show, {
									get when() {
										return o.keybinding;
									},
									get children() {
										const y = c();
										return (
											y.style.setProperty("margin-left", "4px"),
											(0, C.insert)(y, () => o.keybinding),
											y
										);
									},
								}),
								null,
							),
							(0, C.insert)(l, () => o.children, null),
							l
						);
					})();
				}
			},
		),
		define(
			de[565],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 26, 311, 169, 160, 2410]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerGeneralStatusIndicator = o);
				const n = (0, t.template)("<div>"),
					g = (0, t.template)("<span>"),
					p = [
						"outdated",
						"rejected",
						"cancelled",
						"aborted",
						"completed",
						"accepted",
					];
				function o(f) {
					const b = {
							small: {
								width: "6px",
								height: "6px",
								fontSize: "10px",
								dotSize: "4px",
							},
							medium: {
								width: "10px",
								height: "10px",
								fontSize: "12px",
								dotSize: "6px",
							},
							large: {
								width: "14px",
								height: "14px",
								fontSize: "16px",
								dotSize: "10px",
							},
						},
						s = (0, m.createMemo)(() => b[f.size || "small"]),
						{ showHover: l, hideHover: y } = (0, a.useComposerHoverTooltip)({
							delay: 300,
							position: c.HoverPosition.RIGHT,
							additionalClasses: ["chat-hover-tooltip"],
						}),
						$ = (0, m.createMemo)(() =>
							f.status === "none" || f.status === "outdated"
								? "var(--vscode-testing-iconUnset)"
								: f.status === "generating" ||
										f.status === "applying" ||
										f.status === "apply_pending" ||
										f.status === "running"
									? "var(--vscode-testing-iconQueued)"
									: f.status === "completed"
										? "var(--vscode-testing-iconPassed)"
										: "var(--vscode-testing-iconFailed)",
						),
						v = (0, m.createMemo)(() => p.includes(f.status));
					return (() => {
						const S = n();
						return (
							S.addEventListener("mouseleave", () => v() && y()),
							S.addEventListener(
								"mouseenter",
								(I) => v() && l(I, h.composerCodeBlockStatusLabelMap[f.status]),
							),
							(0, E.insert)(
								S,
								(0, C.createComponent)(m.Show, {
									get when() {
										return (
											f.status !== "accepted" &&
											f.status !== "rejected" &&
											f.status !== "cancelled" &&
											f.status !== "aborted"
										);
									},
									get fallback() {
										return (0, C.createComponent)(m.Show, {
											get when() {
												return f.status === "accepted";
											},
											get fallback() {
												return (() => {
													const I = g();
													return (
														I.style.setProperty(
															"color",
															"var(--vscode-testing-iconFailed)",
														),
														(0, d.effect)(
															(T) => {
																const P = s().fontSize,
																	k = u.ThemeIcon.asClassName(r.$ak.x);
																return (
																	P !== T._v$8 &&
																		((T._v$8 = P) != null
																			? I.style.setProperty("font-size", P)
																			: I.style.removeProperty("font-size")),
																	k !== T._v$9 &&
																		(0, w.className)(I, (T._v$9 = k)),
																	T
																);
															},
															{ _v$8: void 0, _v$9: void 0 },
														),
														I
													);
												})();
											},
											get children() {
												const I = g();
												return (
													I.style.setProperty(
														"color",
														"var(--vscode-testing-iconPassed)",
													),
													(0, d.effect)(
														(T) => {
															const P = s().fontSize,
																k = u.ThemeIcon.asClassName(r.$ak.check);
															return (
																P !== T._v$6 &&
																	((T._v$6 = P) != null
																		? I.style.setProperty("font-size", P)
																		: I.style.removeProperty("font-size")),
																k !== T._v$7 &&
																	(0, w.className)(I, (T._v$7 = k)),
																T
															);
														},
														{ _v$6: void 0, _v$7: void 0 },
													),
													I
												);
											},
										});
									},
									get children() {
										const I = n();
										return (
											I.style.setProperty("flex-shrink", "0"),
											I.style.setProperty("border-radius", "50%"),
											(0, d.effect)(
												(T) => {
													const P = s().dotSize,
														k = s().dotSize,
														L = $();
													return (
														P !== T._v$ &&
															((T._v$ = P) != null
																? I.style.setProperty("width", P)
																: I.style.removeProperty("width")),
														k !== T._v$2 &&
															((T._v$2 = k) != null
																? I.style.setProperty("height", k)
																: I.style.removeProperty("height")),
														L !== T._v$3 &&
															((T._v$3 = L) != null
																? I.style.setProperty("background", L)
																: I.style.removeProperty("background")),
														T
													);
												},
												{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
											),
											I
										);
									},
								}),
							),
							(0, d.effect)(
								(I) => {
									const T = f.pulse ? "composer-status-ripple" : void 0,
										P = {
											opacity: 1,
											display: "inline-flex",
											"align-items": "center",
											"justify-content": "center",
											width: s().width,
											height: s().height,
											position: "relative",
											"--ripple-color": $(),
											...f.style,
										};
									return (
										T !== I._v$4 && (0, w.className)(S, (I._v$4 = T)),
										(I._v$5 = (0, i.style)(S, P, I._v$5)),
										I
									);
								},
								{ _v$4: void 0, _v$5: void 0 },
							),
							S
						);
					})();
				}
			},
		),
		define(
			de[3204],
			he([1, 0, 2, 2, 2, 2, 2, 2, 14, 26, 311]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$jAc = h);
				const a = (0, t.template)("<div>");
				function h(c) {
					const { showHover: n, hideHover: g } = (0,
					u.useComposerHoverTooltip)();
					return (() => {
						const p = a();
						p.addEventListener("mouseleave", () => g()),
							p.addEventListener("mouseenter", (f) => n(f, "Add context")),
							p.addEventListener("click", (f) => {
								const b = f.target.getBoundingClientRect();
								c.openFilePickerMenu({ x: b.right, y: b.top - 4 });
							});
						const o = c.setRef;
						return (
							typeof o == "function" ? (0, d.use)(o, p) : (c.setRef = p),
							(0, C.effect)(
								(f) => {
									const b = c.id,
										s =
											r.ThemeIcon.asClassName(m.$ak.add) +
											" notepad-add-context-button" +
											(c.class ? ` ${c.class}` : ""),
										l = {
											padding: "4px",
											"font-size": "12px",
											cursor: "pointer",
											border:
												"1px solid var(--vscode-commandCenter-inactiveBorder)",
											"border-radius": "4px",
											...c.style,
										};
									return (
										b !== f._v$ && (0, E.setAttribute)(p, "id", (f._v$ = b)),
										s !== f._v$2 && (0, w.className)(p, (f._v$2 = s)),
										(f._v$3 = (0, i.style)(p, l, f._v$3)),
										f
									);
								},
								{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
							),
							p
						);
					})();
				}
			},
		),
		