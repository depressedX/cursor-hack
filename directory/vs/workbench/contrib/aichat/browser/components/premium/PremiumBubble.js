define(
			de[1967],
			he([1, 0, 2, 2, 2, 2, 36, 270, 58, 1233, 397, 140]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5ac = void 0);
				const h = (0, t.template)("<div>"),
					c = (n) => {
						const g = (0, C.$odc)(),
							p = (0, a.$zgc)(),
							[o] = (0, d.$K0b)(m.$mW, g.configurationService, !0),
							f = (0, r.$4ac)(
								() => n.tabId,
								() => n.bubbleId,
							);
						return (() => {
							const b = h();
							return (
								(0, w.spread)(
									b,
									(0, E.mergeProps)(
										{
											get id() {
												return (0, u.$dgc)(n.bubbleId);
											},
											get "data-bubble-id"() {
												return n.bubbleId;
											},
										},
										n,
										{
											get style() {
												return {
													"margin-left": "1px",
													width: "calc(100% - 1px)",
													padding: o() ? "0.5rem 0.6rem" : "0.5rem 0.8rem",
													"box-sizing": "border-box",
													"background-color": f()
														? "var(--vscode-input-background)"
														: "transparent",
													outline: f()
														? "1px solid var(--vscode-editorLightBulb-foreground)"
														: "none",
													position: "relative",
													...(typeof n.style == "object" ? n.style : {}),
												};
											},
											get class() {
												return `premium-bubble ${n.class || ""}`.trim();
											},
											onBlur: () => {
												setTimeout(() => {
													if (
														p.chatData.tabs.find((s) => s.tabId === n.tabId)
															?.selectedBubbleId === n.bubbleId
													) {
														const s = n.tabId;
														p.setChatData(
															"tabs",
															({ tabId: l }) => l === s,
															"selectedBubbleId",
															void 0,
														);
													}
												});
											},
											tabIndex: 0,
										},
									),
									!1,
									!0,
								),
								(0, i.insert)(b, () => n.children),
								b
							);
						})();
					};
				e.$5ac = c;
			},
		),
		