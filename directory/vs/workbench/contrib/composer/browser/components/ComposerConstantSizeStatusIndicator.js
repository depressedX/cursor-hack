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
		