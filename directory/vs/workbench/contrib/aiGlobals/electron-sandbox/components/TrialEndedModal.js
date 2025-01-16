define(
			de[4227],
			he([1, 0, 2, 2, 2, 13, 134, 36, 1374, 147]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Jfd = void 0);
				const u = (0, t.template)(
						"<div><h2>Your Free Trial Has Ended</h2><p>Thank you for trying Cursor Pro! To continue enjoying premium features like:</p><ul><li>Unlimited completions</li><li>Unlimited chat and composer</li><li>Fast premium requests</li><li>And more...</li></ul><div>",
					),
					a = (h) => {
						const c = (0, d.$odc)(),
							[n, g] = (0, E.createSignal)(!1),
							p = () => {
								g(!1);
							};
						return (
							(0, E.createEffect)(() => {
								const o = async (f, b) => {
									if (
										b === C.MembershipType.FREE_TRIAL &&
										f === C.MembershipType.FREE
									) {
										const s =
											await c.cursorAuthenticationService.getDaysRemainingOnTrial();
										s !== void 0 && s <= 0 && g(!0);
									}
								};
								c.cursorAuthenticationService.addSubscriptionChangedListener(o),
									(0, E.onCleanup)(() => {
										c.cursorAuthenticationService.removeSubscriptionChangedListener(
											o,
										);
									});
							}),
							(0, w.createComponent)(E.Show, {
								get when() {
									return n();
								},
								get children() {
									return (0, w.createComponent)(m.$ufd, {
										closeModal: p,
										disableClickOff: !1,
										extras: { style: { width: "500px", padding: "24px" } },
										get children() {
											const o = u(),
												f = o.firstChild,
												b = f.nextSibling,
												s = b.nextSibling,
												l = s.nextSibling;
											return (
												o.style.setProperty("display", "flex"),
												o.style.setProperty("flex-direction", "column"),
												o.style.setProperty("gap", "16px"),
												f.style.setProperty("margin", "0"),
												f.style.setProperty("font-size", "18px"),
												f.style.setProperty("font-weight", "600"),
												b.style.setProperty("margin", "0"),
												b.style.setProperty("line-height", "1.5"),
												b.style.setProperty(
													"color",
													"var(--vscode-foreground)",
												),
												b.style.setProperty("opacity", "0.8"),
												s.style.setProperty("margin", "0"),
												s.style.setProperty("padding", "0 0 0 20px"),
												s.style.setProperty("line-height", "1.5"),
												l.style.setProperty("display", "flex"),
												l.style.setProperty("gap", "12px"),
												l.style.setProperty("margin-top", "8px"),
												(0, i.insert)(
													l,
													(0, w.createComponent)(r.$rdc, {
														type: "primary",
														onClick: () => {
															p(), c.cursorAuthenticationService.pay();
														},
														children: "Upgrade to Pro",
													}),
													null,
												),
												(0, i.insert)(
													l,
													(0, w.createComponent)(r.$rdc, {
														type: "secondary",
														onClick: p,
														children: "Maybe Later",
													}),
													null,
												),
												o
											);
										},
									});
								},
							})
						);
					};
				e.$Jfd = a;
			},
		),
		