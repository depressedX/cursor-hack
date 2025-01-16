define(
			de[1358],
			he([1, 0, 14, 27, 65, 104, 4, 11, 43, 402, 208, 207, 427]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$o9b = void 0),
					(e.$p9b = c),
					(e.$o9b = "workbench.action.quickchat.toggle");
				function c() {
					(0, d.$4X)(n),
						(0, d.$4X)(g),
						(0, d.$4X)(
							class extends d.$3X {
								constructor() {
									super({
										id: "workbench.action.quickchat.openInChatView",
										title: (0, C.localize2)(4610, "Open in Chat View"),
										f1: !1,
										category: r.$3Yb,
										icon: t.$ak.commentDiscussion,
										menu: {
											id: d.$XX.ChatInputSide,
											group: "navigation",
											order: 10,
										},
									});
								}
								run(o) {
									o.get(u.$IYb).openInChatView();
								}
							},
						),
						(0, d.$4X)(
							class extends d.$3X {
								constructor() {
									super({
										id: "workbench.action.quickchat.close",
										title: (0, C.localize2)(4611, "Close Quick Chat"),
										f1: !1,
										category: r.$3Yb,
										icon: t.$ak.close,
										menu: {
											id: d.$XX.ChatInputSide,
											group: "navigation",
											order: 20,
										},
									});
								}
								run(o) {
									o.get(u.$IYb).close();
								}
							},
						),
						(0, d.$4X)(
							class extends d.$3X {
								constructor() {
									super({
										id: "workbench.action.quickchat.launchInlineChat",
										title: (0, C.localize2)(4612, "Launch Inline Chat"),
										f1: !1,
										category: r.$3Yb,
									});
								}
								async run(o) {
									const f = o.get(u.$IYb),
										b = o.get(w.$dtb);
									f.focused && f.close();
									const s = b.getActiveCodeEditor();
									if (!s) return;
									const l = h.$Z1b.get(s);
									l && (await l.run(), l.focus());
								}
							},
						);
				}
				class n extends d.$3X {
					constructor() {
						super({
							id: e.$o9b,
							title: (0, C.localize2)(4613, "Quick Chat"),
							precondition: a.$51,
							icon: t.$ak.commentDiscussion,
							f1: !1,
							category: r.$3Yb,
							keybinding: {
								weight: m.KeybindingWeight.WorkbenchContrib,
								primary: i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.KeyI,
								linux: {
									primary:
										i.KeyMod.CtrlCmd |
										i.KeyMod.Shift |
										i.KeyMod.Alt |
										i.KeyCode.KeyI,
								},
							},
							metadata: {
								description: (0, C.localize)(4606, null),
								args: [
									{
										name: "args",
										schema: {
											anyOf: [
												{
													type: "object",
													required: ["query"],
													properties: {
														query: {
															description: (0, C.localize)(4607, null),
															type: "string",
														},
														isPartialQuery: {
															description: (0, C.localize)(4608, null),
															type: "boolean",
														},
													},
												},
												{
													type: "string",
													description: (0, C.localize)(4609, null),
												},
											],
										},
									},
								],
							},
						});
					}
					run(o, f) {
						const b = o.get(u.$IYb);
						let s;
						switch (typeof f) {
							case "string":
								s = { query: f };
								break;
							case "object":
								s = f;
								break;
						}
						s?.query &&
							(s.selection = new E.$kL(
								1,
								s.query.length + 1,
								1,
								s.query.length + 1,
							)),
							b.toggle(s);
					}
				}
				class g extends d.$3X {
					constructor() {
						super({
							id: "workbench.action.openQuickChat",
							category: r.$3Yb,
							title: (0, C.localize2)(4614, "Open Quick Chat"),
							f1: !0,
						});
					}
					run(o, f) {
						o.get(u.$IYb).toggle(
							f
								? {
										query: f,
										selection: new E.$kL(1, f.length + 1, 1, f.length + 1),
									}
								: void 0,
						);
					}
				}
			},
		),
		