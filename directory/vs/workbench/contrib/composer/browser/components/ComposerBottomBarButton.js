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
		