define(de[2997], he([1, 0, 14]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$TCc = e.$SCc = e.$RCc = void 0),
				(e.$RCc = {
					general: "General",
					features: "Features",
					models: "Models",
					beta: "Beta",
					help: "Help",
				}),
				(e.$SCc = {
					general: t.$ak.gear,
					features: t.$ak.tools,
					models: t.$ak.graph,
					beta: t.$ak.beaker,
					help: t.$ak.question,
				}),
				(e.$TCc = ["general", "models", "features", "beta"]);
		}),
		define(
			de[2998],
			he([1, 0, 2, 2, 2, 2, 2372]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$UCc = d);
				const C = (0, t.template)('<div class="settings-group">');
				function d(m) {
					return (() => {
						const r = C();
						return (
							(0, E.insert)(r, () => m.children),
							(0, w.effect)((u) =>
								(0, i.style)(
									r,
									{
										"border-left":
											"1px dashed var(--vscode-commandCenter-inactiveBorder)",
										padding: "0px 12px",
										"padding-bottom": "4px",
										"margin-left": "8px",
										...m.style,
									},
									u,
								),
							),
							r
						);
					})();
				}
			},
		),
		define(
			de[973],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$VCc = a);
				const r = (0, t.template)("<p>"),
					u = (0, t.template)("<div><div><div><div><div>");
				function a(h) {
					return (() => {
						const c = u(),
							n = c.firstChild,
							g = n.firstChild,
							p = g.firstChild,
							o = p.firstChild;
						return (
							n.style.setProperty("display", "flex"),
							n.style.setProperty("justify-content", "space-between"),
							g.style.setProperty("display", "flex"),
							g.style.setProperty("flex-direction", "column"),
							g.style.setProperty("gap", "8px"),
							g.style.setProperty("width", "100%"),
							p.style.setProperty("display", "flex"),
							p.style.setProperty("align-items", "center"),
							p.style.setProperty("gap", "6px"),
							(0, d.insert)(o, () => h.title),
							(0, d.insert)(p, () => h.titleExtra, null),
							(0, d.insert)(
								g,
								(0, C.createComponent)(m.Show, {
									get when() {
										return h.description;
									},
									get children() {
										const f = r();
										return (
											f.style.setProperty("margin", "0"),
											f.style.setProperty("font-size", "12px"),
											f.style.setProperty(
												"color",
												"var(--vscode-input-placeholderForeground)",
											),
											(0, d.insert)(f, () => h.description),
											f
										);
									},
								}),
								null,
							),
							(0, d.insert)(
								n,
								(0, C.createComponent)(m.Show, {
									get when() {
										return h.topNavExtra;
									},
									get children() {
										return h.topNavExtra;
									},
								}),
								null,
							),
							(0, d.insert)(c, () => h.children, null),
							(0, E.effect)(
								(f) => {
									const b = {
											display: "flex",
											"flex-direction": "column",
											gap: "20px",
											...h.style,
										},
										s = h.idToScrollTo,
										l = {
											"font-size": "20px",
											color: "var(--vscode-foreground)",
											...h.titleStyle,
										};
									return (
										(f._v$ = (0, w.style)(c, b, f._v$)),
										s !== f._v$2 && (0, i.setAttribute)(c, "id", (f._v$2 = s)),
										(f._v$3 = (0, w.style)(o, l, f._v$3)),
										f
									);
								},
								{ _v$: void 0, _v$2: void 0, _v$3: void 0 },
							),
							c
						);
					})();
				}
			},
		),
		