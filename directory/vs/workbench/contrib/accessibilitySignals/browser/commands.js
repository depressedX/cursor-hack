import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/themables.js';
import '../../../../nls.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../services/preferences/common/preferences.js';
import '../../../../base/common/lifecycle.js';
define(
			de[3532],
			he([1, 0, 14, 26, 4, 91, 11, 184, 10, 63, 131, 3]),
			function (ce /*require*/,
 e /*exports*/,
 t /*codicons*/,
 i /*themables*/,
 w /*nls*/,
 E /*accessibility*/,
 C /*actions*/,
 d /*accessibilitySignalService*/,
 m /*configuration*/,
 r /*quickInput*/,
 u /*preferences*/,
 a /*lifecycle*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$y2c = e.$x2c = void 0);
				class h extends C.$3X {
					static {
						this.ID = "signals.sounds.help";
					}
					constructor() {
						super({
							id: h.ID,
							title: (0, w.localize2)(4424, "Help: List Signal Sounds"),
							f1: !0,
							metadata: { description: (0, w.localize)(4417, null) },
						});
					}
					async run(p) {
						const o = p.get(d.$Owb),
							f = p.get(r.$DJ),
							b = p.get(m.$gj),
							s = p.get(E.$XK),
							l = p.get(u.$7Z),
							y = [d.$Twb.save, d.$Twb.format],
							$ = d.$Twb.allAccessibilitySignals
								.map((I, T) => ({
									label: y.includes(I)
										? `${I.name} (${b.getValue(I.settingsKey + ".sound")})`
										: I.name,
									signal: I,
									buttons: y.includes(I)
										? [
												{
													iconClass: i.ThemeIcon.asClassName(
														t.$ak.settingsGear,
													),
													tooltip: (0, w.localize)(4418, null),
													alwaysVisible: !0,
												},
											]
										: [],
								}))
								.sort((I, T) => I.label.localeCompare(T.label)),
							v = new a.$Zc(),
							S = v.add(f.createQuickPick());
						(S.items = $),
							(S.selectedItems = $.filter(
								(I) =>
									o.isSoundEnabled(I.signal) ||
									(y.includes(I.signal) &&
										b.getValue(I.signal.settingsKey + ".sound") !== "never"),
							)),
							v.add(
								S.onDidAccept(() => {
									const I = S.selectedItems.map((P) => P.signal),
										T = S.items
											.map((P) => P.signal)
											.filter((P) => !I.includes(P));
									for (const P of I) {
										let { sound: k, announcement: L } = b.getValue(
											P.settingsKey,
										);
										(k = y.includes(P)
											? "userGesture"
											: s.isScreenReaderOptimized()
												? "auto"
												: "on"),
											L
												? b.updateValue(P.settingsKey, {
														sound: k,
														announcement: L,
													})
												: b.updateValue(P.settingsKey, { sound: k });
									}
									for (const P of T) {
										const k = b.getValue(P.settingsKey + ".announcement"),
											L = c(y.includes(P), s.isScreenReaderOptimized()),
											D = k ? { sound: L, announcement: k } : { sound: L };
										b.updateValue(P.settingsKey, D);
									}
									S.hide();
								}),
							),
							v.add(
								S.onDidTriggerItemButton((I) => {
									l.openUserSettings({
										jsonEditor: !0,
										revealSetting: { key: I.item.signal.settingsKey, edit: !0 },
									});
								}),
							),
							v.add(
								S.onDidChangeActive(() => {
									o.playSound(
										S.activeItems[0].signal.sound.getSound(!0),
										!0,
										d.$Pwb,
									);
								}),
							),
							v.add(S.onDidHide(() => v.dispose())),
							(S.placeholder = (0, w.localize)(4419, null)),
							(S.canSelectMany = !0),
							await S.show();
					}
				}
				e.$x2c = h;
				function c(g, p) {
					return p ? (g ? "never" : "off") : g ? "never" : "auto";
				}
				class n extends C.$3X {
					static {
						this.ID = "accessibility.announcement.help";
					}
					constructor() {
						super({
							id: n.ID,
							title: (0, w.localize2)(4425, "Help: List Signal Announcements"),
							f1: !0,
							metadata: { description: (0, w.localize)(4420, null) },
						});
					}
					async run(p) {
						const o = p.get(d.$Owb),
							f = p.get(r.$DJ),
							b = p.get(m.$gj),
							s = p.get(E.$XK),
							l = p.get(u.$7Z),
							y = [d.$Twb.save, d.$Twb.format],
							$ = d.$Twb.allAccessibilitySignals
								.filter((T) => !!T.legacyAnnouncementSettingsKey)
								.map((T, P) => ({
									label: y.includes(T)
										? `${T.name} (${b.getValue(T.settingsKey + ".announcement")})`
										: T.name,
									signal: T,
									buttons: y.includes(T)
										? [
												{
													iconClass: i.ThemeIcon.asClassName(
														t.$ak.settingsGear,
													),
													tooltip: (0, w.localize)(4421, null),
													alwaysVisible: !0,
												},
											]
										: [],
								}))
								.sort((T, P) => T.label.localeCompare(P.label)),
							v = new a.$Zc(),
							S = v.add(f.createQuickPick());
						(S.items = $),
							(S.selectedItems = $.filter(
								(T) =>
									o.isAnnouncementEnabled(T.signal) ||
									(y.includes(T.signal) &&
										b.getValue(T.signal.settingsKey + ".announcement") !==
											"never"),
							));
						const I = s.isScreenReaderOptimized();
						v.add(
							S.onDidAccept(() => {
								if (!I) {
									S.hide();
									return;
								}
								const T = S.selectedItems.map((k) => k.signal),
									P = d.$Twb.allAccessibilitySignals.filter(
										(k) => !!k.legacyAnnouncementSettingsKey && !T.includes(k),
									);
								for (const k of T) {
									let { sound: L, announcement: D } = b.getValue(k.settingsKey);
									(D = y.includes(k)
										? "userGesture"
										: k.announcementMessage && s.isScreenReaderOptimized()
											? "auto"
											: void 0),
										b.updateValue(k.settingsKey, { sound: L, announcement: D });
								}
								for (const k of P) {
									const L = c(y.includes(k), !0),
										D = b.getValue(k.settingsKey + ".sound"),
										M = L ? { sound: D, announcement: L } : { sound: D };
									b.updateValue(k.settingsKey, M);
								}
								S.hide();
							}),
						),
							v.add(
								S.onDidTriggerItemButton((T) => {
									l.openUserSettings({
										jsonEditor: !0,
										revealSetting: { key: T.item.signal.settingsKey, edit: !0 },
									});
								}),
							),
							v.add(S.onDidHide(() => v.dispose())),
							(S.placeholder = I
								? (0, w.localize)(4422, null)
								: (0, w.localize)(4423, null)),
							(S.canSelectMany = !0),
							await S.show();
					}
				}
				e.$y2c = n;
			},
		)
