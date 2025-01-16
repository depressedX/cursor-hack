define(de[295], he([1, 0, 2, 2, 2, 2519]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Z8b = e.$Y8b = void 0);
			const E = (0, t.template)("<div>"),
				C = (m) =>
					(() => {
						const r = E();
						return (
							(0, i.spread)(
								r,
								(0, w.mergeProps)(
									{
										get class() {
											return (
												"cursorLoadingBackground" +
												(m.onInputBackground
													? " cursorLoadingInputBackground"
													: "") +
												(m.class ? ` ${m.class}` : "")
											);
										},
									},
									() => m.extras,
								),
								!1,
								!1,
							),
							r
						);
					})();
			e.$Y8b = C;
			const d = (m) =>
				(() => {
					const r = E();
					return (
						(0, i.spread)(
							r,
							(0, w.mergeProps)(
								{
									get class() {
										return (
											"cursorLoadingBackground cursorLoadingBackgroundSubtle" +
											(m.onInputBackground
												? " cursorLoadingInputBackground cursorLoadingInputBackgroundSubtle"
												: "") +
											(m.onPrimaryButton
												? " cursorLoadingBackgroundLight cursorLoadingBackgroundSubtleLight"
												: "") +
											(m.small ? " cursorLoadingBackgroundSmall" : "") +
											(m.class ? ` ${m.class}` : "")
										);
									},
								},
								() => m.extras,
							),
							!1,
							!1,
						),
						r
					);
				})();
			e.$Z8b = d;
		}),
		define(
			de[1272],
			he([1, 0, 2, 2, 2, 2, 2, 13, 14, 26, 295]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$$Yc = n);
				const a = (0, t.template)('<div class="ai-preview-section-loading">'),
					h = (0, t.template)('<div class="ai-preview-section-content">'),
					c = (0, t.template)(
						'<div class="fade-in"><div class="ai-preview-section-title ai-preview-clickable"><div></div><h2></h2><div>',
					);
				function n(g) {
					return (() => {
						const p = c(),
							o = p.firstChild,
							f = o.firstChild,
							b = f.nextSibling,
							s = b.nextSibling;
						return (
							p.style.setProperty("padding", "2px 4px"),
							p.style.setProperty("display", "flex"),
							p.style.setProperty("flex-direction", "column"),
							p.style.setProperty("gap", "2px"),
							p.style.setProperty("border-radius", "4px"),
							p.style.setProperty("border", "1px solid transparent"),
							o.addEventListener("click", (l) => {
								l.stopPropagation(), l.preventDefault(), g.setIsOpen(!g.isOpen);
							}),
							o.style.setProperty("display", "flex"),
							o.style.setProperty("align-items", "center"),
							o.style.setProperty("gap", "4px"),
							o.style.setProperty("cursor", "pointer"),
							f.style.setProperty("font-size", "12px"),
							f.style.setProperty("color", "rgb(147, 146, 147)"),
							b.style.setProperty("font-size", "0.7rem"),
							b.style.setProperty("font-weight", "500"),
							b.style.setProperty("margin", "0px"),
							b.style.setProperty("color", "rgb(147, 146, 147)"),
							b.style.setProperty("flex", "1"),
							(0, C.insert)(b, () => g.title),
							(0, C.insert)(
								o,
								(0, E.createComponent)(d.Show, {
									get when() {
										return g.isLoading;
									},
									get children() {
										const l = a();
										return (
											(0, C.insert)(
												l,
												(0, E.createComponent)(u.$Z8b, {
													class: "ai-preview-section-loading-spinner",
												}),
											),
											l
										);
									},
								}),
								s,
							),
							(0, C.insert)(o, () => g.toolbarContent, s),
							s.style.setProperty("color", "rgb(147, 146, 147)"),
							s.style.setProperty("transition", "transform 0.2s"),
							(0, C.insert)(
								p,
								(0, E.createComponent)(d.Show, {
									get when() {
										return g.isOpen;
									},
									get children() {
										const l = h();
										return (
											l.style.setProperty("display", "flex"),
											l.style.setProperty("flex-direction", "column"),
											l.style.setProperty("gap", "4px"),
											l.style.setProperty("transition", "height 0.2s"),
											(0, C.insert)(l, () => g.children),
											l
										);
									},
								}),
								null,
							),
							(0, w.effect)(
								(l) => {
									const y = g.isSelected
											? "var(--vscode-editor-foreground)"
											: "transparent",
										$ = g.iconClass,
										v = `rotate(${g.isOpen ? "90deg" : "0deg"})`,
										S = r.ThemeIcon.asClassName(m.$ak.chevronRight);
									return (
										y !== l._v$ &&
											((l._v$ = y) != null
												? p.style.setProperty("border-color", y)
												: p.style.removeProperty("border-color")),
										$ !== l._v$2 && (0, i.className)(f, (l._v$2 = $)),
										v !== l._v$3 &&
											((l._v$3 = v) != null
												? s.style.setProperty("transform", v)
												: s.style.removeProperty("transform")),
										S !== l._v$4 && (0, i.className)(s, (l._v$4 = S)),
										l
									);
								},
								{ _v$: void 0, _v$2: void 0, _v$3: void 0, _v$4: void 0 },
							),
							p
						);
					})();
				}
			},
		),
		define(
			de[3205],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 565, 295]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerConstantSizeStatusIndicator = c);
				const a = (0, t.template)("<span>"),
					h = (0, t.template)("<div>");
				function c(n) {
					return (() => {
						const g = h();
						return (
							(0, C.insert)(
								g,
								(0, d.createComponent)(m.Switch, {
									get fallback() {
										return (0, d.createComponent)(
											r.ComposerGeneralStatusIndicator,
											(0, i.mergeProps)(n, { size: "medium" }),
										);
									},
									get children() {
										return (0, d.createComponent)(m.Match, {
											get when() {
												return (
													n.status === "generating" || n.status === "applying"
												);
											},
											get children() {
												return [
													(() => {
														const p = a();
														return (
															p.style.setProperty("transform", "scale(0.8)"),
															p.style.setProperty("display", "flex"),
															p.style.setProperty("align-items", "center"),
															p.style.setProperty("justify-content", "center"),
															p.style.setProperty("max-height", "10px"),
															(0, C.insert)(
																p,
																(0, d.createComponent)(u.$Z8b, {}),
															),
															p
														);
													})(),
													" ",
												];
											},
										});
									},
								}),
							),
							(0, E.effect)((p) =>
								(0, w.style)(
									g,
									{
										width: "14px",
										height: "14px",
										display: "flex",
										"align-items": "center",
										"justify-content": "center",
										"flex-shrink": 0,
										...n.style,
									},
									p,
								),
							),
							g
						);
					})();
				}
			},
		),
		define(
			de[696],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 26, 295, 2514]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Zcc = n);
				const h = (0, t.template)("<div>"),
					c = (0, t.template)("<div><div><div><div>");
				function n(g) {
					return (() => {
						const p = c(),
							o = p.firstChild,
							f = o.firstChild,
							b = f.firstChild,
							s = g.setContainerRef;
						return (
							typeof s == "function"
								? (0, d.use)(s, p)
								: (g.setContainerRef = p),
							p.style.setProperty("display", "flex"),
							p.style.setProperty("flex-direction", "column"),
							p.style.setProperty("gap", "2px"),
							o.addEventListener("click", () => g.setIsOpen(!g.isOpen)),
							o.style.setProperty("display", "flex"),
							o.style.setProperty("align-items", "center"),
							o.style.setProperty("gap", "6px"),
							o.style.setProperty("cursor", "pointer"),
							o.style.setProperty("width", "100%"),
							o.style.setProperty("box-sizing", "border-box"),
							o.style.setProperty("overflow", "hidden"),
							(0, i.insert)(
								o,
								(0, w.createComponent)(m.Show, {
									get when() {
										return !g.isLoading;
									},
									get fallback() {
										return (0, w.createComponent)(a.$Z8b, { small: !0 });
									},
									get children() {
										const l = h();
										return (
											l.style.setProperty(
												"color",
												"var(--vscode-editor-foreground)",
											),
											l.style.setProperty("width", "9px"),
											l.style.setProperty("height", "9px"),
											l.style.setProperty("font-size", "12px !important"),
											l.style.setProperty("display", "flex"),
											l.style.setProperty("justify-content", "center"),
											l.style.setProperty("align-items", "center"),
											l.style.setProperty("transition", "transform 0.1s"),
											(0, C.effect)(
												(y) => {
													const $ = u.ThemeIcon.asClassName(r.$ak.chevronRight),
														v = g.isOpen ? "rotate(90deg)" : void 0;
													return (
														$ !== y._v$ && (0, E.className)(l, (y._v$ = $)),
														v !== y._v$2 &&
															((y._v$2 = v) != null
																? l.style.setProperty("transform", v)
																: l.style.removeProperty("transform")),
														y
													);
												},
												{ _v$: void 0, _v$2: void 0 },
											),
											l
										);
									},
								}),
								f,
							),
							f.style.setProperty("display", "flex"),
							f.style.setProperty("align-items", "center"),
							f.style.setProperty("gap", "4px"),
							f.style.setProperty("overflow", "hidden"),
							b.style.setProperty("color", "var(--vscode-editor-foreground)"),
							b.style.setProperty("font-size", "12px"),
							(0, i.insert)(b, () => g.title),
							(0, i.insert)(
								f,
								(0, w.createComponent)(m.Show, {
									get when() {
										return g.description;
									},
									get children() {
										const l = h();
										return (
											l.style.setProperty(
												"color",
												"var(--vscode-descriptionForeground)",
											),
											l.style.setProperty("font-size", "11px"),
											l.style.setProperty("flex", "1"),
											l.style.setProperty("min-width", "0"),
											l.style.setProperty("overflow", "hidden"),
											(0, i.insert)(l, () => g.description),
											l
										);
									},
								}),
								null,
							),
							(0, i.insert)(
								p,
								(0, w.createComponent)(m.Show, {
									get when() {
										return g.isOpen;
									},
									get children() {
										const l = h();
										return (
											l.style.setProperty("padding-left", "10px"),
											l.style.setProperty("margin-left", "4px"),
											l.style.setProperty(
												"border-left",
												"1px solid var(--vscode-commandCenter-activeBorder)",
											),
											(0, i.insert)(l, () => g.children),
											l
										);
									},
								}),
								null,
							),
							(0, C.effect)(() =>
								(0, E.className)(
									o,
									`collapsible-header ${g.headerClass ?? ""}`,
								),
							),
							p
						);
					})();
				}
			},
		),
		