define(
			de[1374],
			he([1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 14, 26, 13, 36, 2523]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ufd = void 0);
				const n = (0, t.template)("<div>"),
					g = (0, t.template)(
						'<div class="cursor-modal-backing"><div><div class="cursor-modal-interior">',
					),
					p = (o) => {
						const f = (0, c.$pdc)();
						return (
							(0, h.onMount)(() => {
								const b = (s) => {
									s.key === "Escape" && o.closeModal();
								};
								f.window.addEventListener("keydown", b),
									(0, h.onCleanup)(() => {
										f.window.removeEventListener("keydown", b);
									});
							}),
							(() => {
								const b = g(),
									s = b.firstChild,
									l = s.firstChild;
								return (
									b.addEventListener("click", (y) => {
										y.stopPropagation(), !o.disableClickOff && o.closeModal();
									}),
									s.addEventListener("click", (y) => {
										y.stopPropagation();
									}),
									(0, m.spread)(
										s,
										(0, r.mergeProps)(
											{
												get class() {
													return `cursor-overlay-div cursor-modal-container ${o.center ? "cursor-center" : ""}`;
												},
											},
											() => o.extras,
											{
												get style() {
													return {
														...o.extras?.style,
														...(o.balanceSides
															? { "padding-right": "24px" }
															: {}),
													};
												},
											},
										),
										!1,
										!0,
									),
									(0, w.insert)(
										l,
										(0, E.createComponent)(h.Show, {
											get when() {
												return !o.disableX;
											},
											get children() {
												const y = n();
												return (
													y.addEventListener("click", () => {
														o.closeModal();
													}),
													(0, d.effect)(
														($) => {
															const v = [
																	"cursor-modal-dismiss",
																	a.ThemeIcon.asClassName(u.$ak.x),
																].join(" "),
																S = o.xOpacity;
															return (
																v !== $._v$ && (0, C.className)(y, ($._v$ = v)),
																S !== $._v$2 &&
																	(($._v$2 = S) != null
																		? y.style.setProperty("opacity", S)
																		: y.style.removeProperty("opacity")),
																$
															);
														},
														{ _v$: void 0, _v$2: void 0 },
													),
													y
												);
											},
										}),
										null,
									),
									(0, w.insert)(l, () => o.children, null),
									(0, d.effect)(
										(y) => {
											const $ = `rgba(0, 0, 0, ${o.backOpacity ?? 0.2})`,
												v = o.interiorStyle;
											return (
												$ !== y._v$3 &&
													((y._v$3 = $) != null
														? b.style.setProperty("background-color", $)
														: b.style.removeProperty("background-color")),
												(y._v$4 = (0, i.style)(l, v, y._v$4)),
												y
											);
										},
										{ _v$3: void 0, _v$4: void 0 },
									),
									b
								);
							})()
						);
					};
				e.$ufd = p;
			},
		),
		