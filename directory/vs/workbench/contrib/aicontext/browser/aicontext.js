import '../../../../../require.js';
import '../../../../../exports.js';
define(de[1713], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.IAIContextPaneConstants = void 0);
			var t;
			(function (i) {
				(i.CONTAINER_ID = "workbench.panel.aicontext"),
					(i.VIEW_ID = "workbench.panel.aicontext.view"),
					(i.STORAGE_ID = "workbench.panel.aicontext"),
					(i.Id = "aicontext");
			})(t || (e.IAIContextPaneConstants = t = {}));
		}),
		define(
			de[3e3],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 2382]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mDc = void 0);
				const r = (0, t.template)(
						'<div><textarea autocapitalize="off"></textarea><div>',
					),
					u = (a) => {
						let h;
						const [c, n] = (0, m.createSignal)(a.initText ?? "");
						return (
							(0, m.createEffect)(() => {
								n(a.initText ?? ""), h && (h.value = a.initText ?? "");
							}),
							(0, m.createEffect)(() => {
								a.onUpdate(c());
							}),
							(() => {
								const g = r(),
									p = g.firstChild,
									o = p.nextSibling;
								return (
									g.style.setProperty("display", "grid"),
									p.addEventListener("input", () => {
										n(h?.value ?? "");
									}),
									(0, C.use)((f) => {
										(h = f),
											a.delegate && a.delegate.associate(f, () => f.value);
									}, p),
									p.style.setProperty("resize", "none"),
									p.style.setProperty("grid-area", "1 / 1 / 2 / 2"),
									p.style.setProperty("overflow", "hidden"),
									p.style.setProperty("line-height", "inherit"),
									p.style.setProperty("font-family", "inherit"),
									p.style.setProperty("font-size", "inherit"),
									p.style.setProperty(
										"color",
										"var(--vscode-input-foreground)",
									),
									p.style.setProperty("display", "block"),
									p.style.setProperty("outline", "none"),
									p.style.setProperty("scrollbar-width", "none"),
									p.style.setProperty("box-sizing", "border-box"),
									p.style.setProperty("border", "none"),
									p.style.setProperty("word-wrap", "break-word"),
									p.style.setProperty("word-break", "break-word"),
									p.style.setProperty("padding", "8px 16px"),
									(0, d.setAttribute)(p, "spellcheck", !1),
									o.style.setProperty("white-space", "pre-wrap"),
									o.style.setProperty("grid-area", "1 / 1 / 2 / 2"),
									o.style.setProperty("box-sizing", "border-box"),
									o.style.setProperty("visibility", "hidden"),
									o.style.setProperty("line-height", "inherit"),
									o.style.setProperty("font-family", "inherit"),
									o.style.setProperty("font-size", "inherit"),
									o.style.setProperty("color", "inherit"),
									o.style.setProperty("border", "none"),
									o.style.setProperty("word-wrap", "break-word"),
									o.style.setProperty("word-break", "break-word"),
									o.style.setProperty("padding", "8px 16px"),
									(0, w.insert)(
										o,
										() =>
											c() +
											(c().length > 0 &&
											c().charAt(c().length - 1) ===
												`
`
												? "\xA0"
												: ""),
									),
									(0, E.effect)(
										(f) => {
											const b =
													a.transparentWhenUnfocused &&
													a.transparentWhenUnfocused
														? "aicontext-inputbox-followup"
														: "aicontext-inputbox",
												s = a.rows ?? 1,
												l = a.placeholder;
											return (
												b !== f._v$ && (0, i.className)(p, (f._v$ = b)),
												s !== f._v$2 &&
													(0, d.setAttribute)(p, "rows", (f._v$2 = s)),
												l !== f._v$3 &&
													(0, d.setAttribute)(p, "placeholder", (f._v$3 = l)),
												f
											);
										},
										{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
									),
									(0, E.effect)(() => (p.value = a.initText ?? "")),
									g
								);
							})()
						);
					};
				e.$mDc = u;
			},
		),
		