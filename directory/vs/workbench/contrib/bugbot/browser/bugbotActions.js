define(
			de[3225],
			he([1, 0, 4, 11, 8, 45, 1679, 1009, 976]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				class r extends i.$3X {
					static {
						this.ID = "bugbot.runNewBugBot";
					}
					constructor() {
						super({
							id: r.ID,
							title: {
								value: (0, t.localize)(4460, null),
								original: "Bug Bot: Run New Bug Bot",
							},
							f1: !0,
						});
					}
					async run(a) {
						a.get(E.$0zb).setNonPersistentStorage("isBugBotModalOpen", !0);
					}
				}
				(0, i.$4X)(r),
					C.$qec.registerAction((u, a) => {
						class h extends i.$3X {
							static {
								this.ID = "bugbot.resetBackgroundBugBotInterval";
							}
							constructor() {
								super({
									id: h.ID,
									title: {
										value: (0, t.localize)(4461, null),
										original: "Bug Bot: Trigger Background Bug Bot",
									},
									f1: !0,
									precondition: w.$Kj.function(() =>
										a.invokeFunction(
											(g) =>
												g.get(d.$fdc).cachedServerConfig
													.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers,
										),
									),
								});
							}
							async run(n) {
								n
									.get(E.$0zb)
									.setApplicationUserPersistentStorage(
										"bugbotState",
										"lastBackgroundBugbotAt",
										void 0,
									),
									await n.get(m.$adc).handleBackgroundBugBotInterval();
							}
						}
						(0, i.$4X)(h);
					});
			},
		),
		