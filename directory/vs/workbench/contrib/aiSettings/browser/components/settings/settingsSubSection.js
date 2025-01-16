define(
			de[1064],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 2998, 36, 1006, 331]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$YCc = p);
				const c = (0, t.template)("<p>"),
					n = (0, t.template)("<div>"),
					g = (0, t.template)(
						'<div><div class="settings-editor"><div><div><p>',
					);
				function p(o) {
					const f = (0, u.$odc)();
					return (() => {
						const b = g(),
							s = b.firstChild,
							l = s.firstChild,
							y = l.firstChild,
							$ = y.firstChild;
						return (
							s.addEventListener("click", () => {
								o.onChange?.(!o.value);
							}),
							s.style.setProperty("display", "flex"),
							s.style.setProperty("width", "100%"),
							l.style.setProperty("display", "flex"),
							l.style.setProperty("font-size", "12px"),
							l.style.setProperty("flex-direction", "column"),
							l.style.setProperty("gap", "8px"),
							(0, d.insert)(
								l,
								(0, C.createComponent)(m.Show, {
									get when() {
										return o.label || o.labelExtra;
									},
									get children() {
										const v = c();
										return (
											v.style.setProperty("margin", "0"),
											v.style.setProperty("color", "var(--vscode-foreground)"),
											v.style.setProperty("display", "flex"),
											v.style.setProperty("align-items", "center"),
											v.style.setProperty("gap", "4px"),
											v.style.setProperty("font-weight", "500"),
											(0, d.insert)(v, () => o.label, null),
											(0, d.insert)(v, () => o.labelExtra, null),
											v
										);
									},
								}),
								y,
							),
							y.style.setProperty("display", "flex"),
							y.style.setProperty("gap", "8px"),
							(0, d.insert)(
								y,
								(0, C.createComponent)(m.Show, {
									get when() {
										return o.value !== void 0;
									},
									get children() {
										return (0, C.createComponent)(a.$XCc, {
											get value() {
												return o.value;
											},
											onChange: () => {},
										});
									},
								}),
								$,
							),
							$.style.setProperty("margin", "0"),
							$.style.setProperty("line-height", "130%"),
							$.style.setProperty("color", "var(--vscode-foreground)"),
							$.style.setProperty("opacity", "0.8"),
							$.style.setProperty("font-size", "0.95em"),
							(0, d.insert)($, () => o.description),
							(0, d.insert)(
								b,
								(0, C.createComponent)(m.Show, {
									get when() {
										return o.extra;
									},
									get children() {
										const v = n();
										return (
											v.style.setProperty("display", "flex"),
											(0, d.insert)(v, () => o.extra),
											v
										);
									},
								}),
								null,
							),
							(0, d.insert)(
								b,
								(0, C.createComponent)(m.Show, {
									get when() {
										return o.children;
									},
									get children() {
										return (0, C.createComponent)(r.$UCc, {
											get style() {
												return {
													display: "flex",
													"margin-top": "8px",
													"flex-direction": "column",
													gap: "8px",
													...o.groupStyle,
												};
											},
											get children() {
												return o.children;
											},
										});
									},
								}),
								null,
							),
							(0, E.effect)(
								(v) => {
									const S = {
											display: "flex",
											"flex-direction": "column",
											gap: "8px",
											...o.containerStyle,
										},
										I =
											"settings-sub-section" +
											((0, h.$d$b)(f.themeService) ? " dark" : " light");
									return (
										(v._v$ = (0, w.style)(b, S, v._v$)),
										I !== v._v$2 && (0, i.className)(b, (v._v$2 = I)),
										v
									);
								},
								{ _v$: void 0, _v$2: void 0 },
							),
							b
						);
					})();
				}
			},
		),
		