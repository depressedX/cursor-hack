define(
			de[815],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$fzc = u);
				const r = (0, t.template)("<div><div>");
				function u(a) {
					const h = () => a.onClose();
					return (0, i.createComponent)(m.Show, {
						get when() {
							return a.isOpen;
						},
						get children() {
							const c = r(),
								n = c.firstChild;
							return (
								c.addEventListener("click", h),
								n.addEventListener("click", (g) => g.stopPropagation()),
								(0, d.insert)(n, () => a.children),
								(0, C.effect)(
									(g) => {
										const p = {
												position: "fixed",
												top: 0,
												left: 0,
												width: "100%",
												height: "100%",
												"background-color": "rgba(0, 0, 0, 0.5)",
												display: "flex",
												"flex-direction": "column",
												"justify-content": "center",
												"align-items": "center",
												"z-index": 2549,
												...a.parentStyle,
											},
											o = a.class,
											f = {
												"background-color": "var(--vscode-editor-background)",
												padding: "12px",
												"border-radius": "4px",
												"box-shadow": "0 4px 20px rgba(0, 0, 0, 0.15)",
												width: "400px",
												display: "flex",
												"flex-direction": "column",
												gap: "12px",
												...a.style,
											};
										return (
											(g._v$ = (0, E.style)(c, p, g._v$)),
											o !== g._v$2 && (0, w.className)(n, (g._v$2 = o)),
											(g._v$3 = (0, E.style)(n, f, g._v$3)),
											g
										);
									},
									{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
								),
								c
							);
						},
					});
				}
			},
		),
		