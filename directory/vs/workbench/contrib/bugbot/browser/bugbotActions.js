import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageServiceImpl.js';
import '../../aiServerConfigService/browser/aiServerConfigService.js';
import './bugbot.js';
define(
			de[3225],
			he([1, 0, 4, 11, 8, 45, 1679, 1009, 976]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*actions*/,
 w /*contextkey*/,
 E /*reactiveStorageService*/,
 C /*reactiveStorageServiceImpl*/,
 d /*aiServerConfigService*/,
 m /*bugbot*/) {
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
		)
