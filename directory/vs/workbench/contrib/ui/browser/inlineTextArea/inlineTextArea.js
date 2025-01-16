define(
			de[695],
			he([1, 0, 2, 2, 2, 2, 2, 2518]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gDc = e.$fDc = void 0);
				const d = (0, t.template)("<input>"),
					m = (0, t.template)(
						'<div class="cursor-inline-text-area-and-button"><div>',
					),
					r = (a) => {
						const h = () => a.size ?? "medium";
						return (() => {
							const c = d(),
								n = a.setRef;
							return (
								typeof n == "function" ? (0, w.use)(n, c) : (a.setRef = c),
								(0, E.spread)(
									c,
									(0, C.mergeProps)(
										{
											get value() {
												return a.value;
											},
											get style() {
												return {
													width: "min(200px, 100%)",
													"background-color": "var(--vscode-input-background)",
													"border-radius": "2px",
													border:
														"1px solid var(--vscode-settings-dropdownBorder)",
													outline: "none",
													padding: h() === "small" ? "3px 8px" : "8px 12px",
													"font-size": h() === "small" ? "12px" : "14px",
													color: "var(--vscode-input-foreground)",
													"line-height": "1.4",
													"box-sizing": "border-box",
													...a.extraStyles,
												};
											},
										},
										() => a.extras,
									),
									!1,
									!1,
								),
								c
							);
						})();
					};
				e.$fDc = r;
				const u = (a) =>
					(() => {
						const h = m(),
							c = h.firstChild;
						return (
							h.style.setProperty("display", "flex"),
							h.style.setProperty("flex-direction", "row"),
							h.style.setProperty("align-items", "center"),
							(0, i.insert)(h, () => a.textArea, c),
							c.style.setProperty("margin-left", "4px"),
							(0, i.insert)(c, () => a.button),
							h
						);
					})();
				(e.$gDc = u), (e.default = e.$fDc);
			},
		),
		