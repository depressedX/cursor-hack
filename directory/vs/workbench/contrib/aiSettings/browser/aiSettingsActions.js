import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/constants.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/quickinput/browser/commandsQuickAccess.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import './aiSettings.js';
import '../../../services/aiSettings/browser/aiSettingsService.js';
define(
			de[1998],
			he([1, 0, 58, 27, 11, 31, 43, 679, 45, 1997, 315]),
			function (ce /*require*/,
 e /*exports*/,
 t /*constants*/,
 i /*keyCodes*/,
 w /*actions*/,
 E /*commands*/,
 C /*keybindingsRegistry*/,
 d /*commandsQuickAccess*/,
 m /*reactiveStorageService*/,
 r /*aiSettings*/,
 u /*aiSettingsService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$UDc = void 0);
				const a = {
					when: r.$TDc.isEqualTo(!1),
					primary: i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.KeyJ,
					weight: C.KeybindingWeight.ExternalExtension + 1,
				};
				class h extends w.$3X {
					static {
						this.ID = t.$QV;
					}
					constructor() {
						super({
							id: h.ID,
							title: { value: d.$N0b, original: d.$N0b },
							f1: !0,
							keybinding: a,
						});
					}
					run(n, g, p, ...o) {
						const f = n.get(u.$S6b);
						n
							.get(m.$0zb)
							.setNonPersistentStorage("cachedSettingsOpenData", {
								openTab: g,
								idToScrollTo: p,
							}),
							f.openPopup(g, p);
					}
				}
				(e.$UDc = h),
					(0, w.$4X)(h),
					(0, w.$4X)(
						class Ba extends w.$3X {
							static {
								this.ID = "aiSettings.action.openhidden";
							}
							constructor() {
								super({
									id: Ba.ID,
									title: { value: d.$N0b, original: d.$N0b },
									f1: !1,
									keybinding: { ...a, weight: 0 },
									menu: [
										{
											id: w.$XX.MenubarPreferencesMenu,
											group: "2_configuration",
											order: 1.5,
										},
									],
								});
							}
							run(n, ...g) {
								n.get(E.$ek).executeCommand(t.$QV);
							}
						},
					);
			},
		)
