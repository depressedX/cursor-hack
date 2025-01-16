define(
			de[4275],
			he([1, 0, 2, 2, 2, 2, 2, 2, 13, 14, 694, 36, 147]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerControlsAndFeedback = n);
				const c = (0, t.template)("<div><div><div>");
				function n(g) {
					const p = (0, a.$odc)(),
						{ showHover: o, hideHover: f } = (0, u.$G$b)(),
						[b, s] = (0, m.createSignal)(!1),
						l = () => {
							const y = p.clipboardService.writeText(g.getCopyText());
							s(!0),
								p.analyticsService.trackEvent("composer.copy_message"),
								setTimeout(() => s(!1), 2e3);
						};
					return (() => {
						const y = c(),
							$ = y.firstChild,
							v = $.firstChild;
						return (
							$.style.setProperty("display", "flex"),
							$.style.setProperty("flex-direction", "row"),
							$.style.setProperty("width", "fit-content"),
							$.style.setProperty("height", "fit-content"),
							$.style.setProperty("gap", "2px"),
							$.style.setProperty("opacity", "0.4"),
							(0, d.addEventListener)(v, "mouseleave", f),
							v.addEventListener("mouseenter", (S) => {
								o(S, "Copy Message");
							}),
							v.style.setProperty("opacity", "1"),
							(0, E.insert)(
								v,
								(0, C.createComponent)(h.$rdc, {
									style: {
										padding: "4px 4px",
										display: "flex",
										"justify-content": "center",
										"align-items": "center",
									},
									codiconStyle: { "font-size": "14px" },
									type: "secondary",
									onClick: l,
									get disabled() {
										return b();
									},
									get codicon() {
										return b() ? r.$ak.check : r.$ak.copy;
									},
								}),
							),
							(0, w.effect)((S) =>
								(0, i.style)(
									y,
									{
										display: "flex",
										"flex-direction": "row",
										"justify-content": "flex-end",
										overflow: "visible",
										"align-self": "flex-end",
										"margin-left": "auto",
										"flex-shrink": 0,
										...g.style,
									},
									S,
								),
							),
							y
						);
					})();
				}
			},
		),
		