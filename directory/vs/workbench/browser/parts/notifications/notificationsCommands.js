import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../base/common/keyCodes.js';
import '../../../common/notifications.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../nls.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/telemetry/common/telemetry.js';
import './notificationsTelemetry.js';
import '../../../common/contextkeys.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/hash.js';
import '../../../../base/common/arrays.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/constants.js';
import '../../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
define(
			de[682],
			he([
				1, 0, 31, 8, 43, 27, 610, 11, 4, 93, 32, 1698, 100, 40, 5, 50, 136, 24,
				63, 3, 58, 184,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*commands*/,
				i /*contextkey*/,
				w /*keybindingsRegistry*/,
				E /*keyCodes*/,
				C /*notifications*/,
				d /*actions*/,
				m /*nls*/,
				r /*listService*/,
				u /*telemetry*/,
				a /*notificationsTelemetry*/,
				h /*contextkeys*/,
				c /*notification*/,
				n /*instantiation*/,
				g /*actions*/,
				p /*hash*/,
				o /*arrays*/,
				f /*quickInput*/,
				b /*lifecycle*/,
				s /*constants*/,
				l /*accessibilitySignalService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$52c =
						e.$22c =
						e.$12c =
						e.$Z2c =
						e.$Y2c =
						e.$X2c =
						e.$W2c =
						e.$V2c =
						e.$U2c =
						e.$T2c =
						e.$S2c =
							void 0),
					(e.$32c = k),
					(e.$42c = L),
					(e.$S2c = "notifications.showList"),
					(e.$T2c = "notifications.hideList");
				const y = "notifications.toggleList";
				e.$U2c = "notifications.hideToasts";
				const $ = "notifications.focusToasts",
					v = "notifications.focusNextToast",
					S = "notifications.focusPreviousToast",
					I = "notifications.focusFirstToast",
					T = "notifications.focusLastToast";
				(e.$V2c = "notification.collapse"),
					(e.$W2c = "notification.expand"),
					(e.$X2c = "notification.acceptPrimaryAction");
				const P = "notification.toggle";
				(e.$Y2c = "notification.clear"),
					(e.$Z2c = "notifications.clearAll"),
					(e.$12c = "notifications.toggleDoNotDisturbMode"),
					(e.$22c = "notifications.toggleDoNotDisturbModeBySource");
				function k(M, N) {
					if ((0, C.$Dwc)(N)) return N;
					const A = M.lastFocusedList;
					if (A instanceof r.$yMb) {
						let R = A.getFocusedElements()[0];
						if (
							((0, C.$Dwc)(R) || (A.isDOMFocused() && (R = A.element(0))),
							(0, C.$Dwc)(R))
						)
							return R;
					}
				}
				function L(M, N, A) {
					w.$TX.registerCommandAndKeybindingRule({
						id: e.$S2c,
						weight: w.KeybindingWeight.WorkbenchContrib,
						primary: (0, E.$os)(
							E.$ps,
							E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyN,
						),
						mac: {
							primary: (0, E.$os)(
								E.$qs,
								E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyN,
							),
						},
						handler: () => {
							N.hide(), M.show();
						},
					}),
						w.$TX.registerCommandAndKeybindingRule({
							id: e.$T2c,
							weight: w.KeybindingWeight.WorkbenchContrib + 50,
							when: h.$oQb,
							primary: E.KeyCode.Escape,
							handler: (O) => {
								const B = O.get(u.$km);
								for (const U of A.notifications)
									U.visible &&
										B.publicLog2(
											"notification:hide",
											(0, a.$Q2c)(
												U.message.original,
												U.sourceId,
												U.priority === c.NotificationPriority.SILENT,
											),
										);
								M.hide();
							},
						}),
						t.$fk.registerCommand(y, () => {
							M.isVisible ? M.hide() : (N.hide(), M.show());
						}),
						t.$fk.registerCommand(s.$PX, (O, B) => {
							N.hideForMs(B);
						}),
						w.$TX.registerCommandAndKeybindingRule({
							id: e.$Y2c,
							weight: w.KeybindingWeight.WorkbenchContrib,
							when: h.$nQb,
							primary: E.KeyCode.Delete,
							mac: { primary: E.KeyMod.CtrlCmd | E.KeyCode.Backspace },
							handler: (O, B) => {
								const U = O.get(l.$Owb),
									z = k(O.get(r.$fMb), B);
								z && !z.hasProgress && (z.close(), U.playSignal(l.$Twb.clear));
							},
						}),
						w.$TX.registerCommandAndKeybindingRule({
							id: e.$W2c,
							weight: w.KeybindingWeight.WorkbenchContrib,
							when: h.$nQb,
							primary: E.KeyCode.RightArrow,
							handler: (O, B) => {
								k(O.get(r.$fMb), B)?.expand();
							},
						}),
						w.$TX.registerCommandAndKeybindingRule({
							id: e.$X2c,
							weight: w.KeybindingWeight.WorkbenchContrib,
							when: i.$Kj.or(h.$nQb, h.$pQb),
							primary: E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyA,
							handler: (O) => {
								const B = O.get(n.$Li).createInstance(D),
									U = k(O.get(r.$fMb)) || (0, o.$Sb)(A.notifications);
								if (!U) return;
								const z = U.actions?.primary
									? (0, o.$Sb)(U.actions.primary)
									: void 0;
								z && (B.run(z, U), U.close());
							},
						}),
						w.$TX.registerCommandAndKeybindingRule({
							id: e.$V2c,
							weight: w.KeybindingWeight.WorkbenchContrib,
							when: h.$nQb,
							primary: E.KeyCode.LeftArrow,
							handler: (O, B) => {
								k(O.get(r.$fMb), B)?.collapse();
							},
						}),
						w.$TX.registerCommandAndKeybindingRule({
							id: P,
							weight: w.KeybindingWeight.WorkbenchContrib,
							when: h.$nQb,
							primary: E.KeyCode.Space,
							secondary: [E.KeyCode.Enter],
							handler: (O) => {
								k(O.get(r.$fMb))?.toggle();
							},
						}),
						t.$fk.registerCommand(e.$U2c, (O) => {
							const B = O.get(u.$km);
							for (const U of A.notifications)
								U.visible &&
									B.publicLog2(
										"notification:hide",
										(0, a.$Q2c)(
											U.message.original,
											U.sourceId,
											U.priority === c.NotificationPriority.SILENT,
										),
									);
							N.hide();
						}),
						w.$TX.registerKeybindingRule({
							id: e.$U2c,
							weight: w.KeybindingWeight.WorkbenchContrib - 50,
							when: h.$pQb,
							primary: E.KeyCode.Escape,
						}),
						w.$TX.registerKeybindingRule({
							id: e.$U2c,
							weight: w.KeybindingWeight.WorkbenchContrib + 100,
							when: i.$Kj.and(h.$pQb, h.$nQb),
							primary: E.KeyCode.Escape,
						}),
						t.$fk.registerCommand($, () => N.focus()),
						w.$TX.registerCommandAndKeybindingRule({
							id: v,
							weight: w.KeybindingWeight.WorkbenchContrib,
							when: i.$Kj.and(h.$nQb, h.$pQb),
							primary: E.KeyCode.DownArrow,
							handler: () => {
								N.focusNext();
							},
						}),
						w.$TX.registerCommandAndKeybindingRule({
							id: S,
							weight: w.KeybindingWeight.WorkbenchContrib,
							when: i.$Kj.and(h.$nQb, h.$pQb),
							primary: E.KeyCode.UpArrow,
							handler: () => {
								N.focusPrevious();
							},
						}),
						w.$TX.registerCommandAndKeybindingRule({
							id: I,
							weight: w.KeybindingWeight.WorkbenchContrib,
							when: i.$Kj.and(h.$nQb, h.$pQb),
							primary: E.KeyCode.PageUp,
							secondary: [E.KeyCode.Home],
							handler: () => {
								N.focusFirst();
							},
						}),
						w.$TX.registerCommandAndKeybindingRule({
							id: T,
							weight: w.KeybindingWeight.WorkbenchContrib,
							when: i.$Kj.and(h.$nQb, h.$pQb),
							primary: E.KeyCode.PageDown,
							secondary: [E.KeyCode.End],
							handler: () => {
								N.focusLast();
							},
						}),
						t.$fk.registerCommand(e.$Z2c, () => M.clearAll()),
						t.$fk.registerCommand(e.$12c, (O) => {
							const B = O.get(c.$4N);
							B.setFilter(
								B.getFilter() === c.NotificationsFilter.ERROR
									? c.NotificationsFilter.OFF
									: c.NotificationsFilter.ERROR,
							);
						}),
						t.$fk.registerCommand(e.$22c, (O) => {
							const B = O.get(c.$4N),
								U = O.get(f.$DJ),
								z = B.getFilters().sort((H, q) =>
									H.label.localeCompare(q.label),
								),
								F = new b.$Zc(),
								x = F.add(U.createQuickPick());
							(x.items = z.map((H) => ({
								id: H.id,
								label: H.label,
								tooltip: `${H.label} (${H.id})`,
								filter: H.filter,
							}))),
								(x.canSelectMany = !0),
								(x.placeholder = (0, m.localize)(3600, null)),
								(x.selectedItems = x.items.filter(
									(H) => H.filter === c.NotificationsFilter.OFF,
								)),
								x.show(),
								F.add(
									x.onDidAccept(async () => {
										for (const H of x.items)
											B.setFilter({
												id: H.id,
												label: H.label,
												filter: x.selectedItems.includes(H)
													? c.NotificationsFilter.OFF
													: c.NotificationsFilter.ERROR,
											});
										x.hide();
									}),
								),
								F.add(x.onDidHide(() => F.dispose()));
						});
					const R = (0, m.localize2)(3601, "Notifications");
					d.$ZX.appendMenuItem(d.$XX.CommandPalette, {
						command: {
							id: e.$S2c,
							title: (0, m.localize2)(3602, "Show Notifications"),
							category: R,
						},
					}),
						d.$ZX.appendMenuItem(d.$XX.CommandPalette, {
							command: {
								id: e.$T2c,
								title: (0, m.localize2)(3603, "Hide Notifications"),
								category: R,
							},
							when: h.$oQb,
						}),
						d.$ZX.appendMenuItem(d.$XX.CommandPalette, {
							command: {
								id: e.$Z2c,
								title: (0, m.localize2)(3604, "Clear All Notifications"),
								category: R,
							},
						}),
						d.$ZX.appendMenuItem(d.$XX.CommandPalette, {
							command: {
								id: e.$X2c,
								title: (0, m.localize2)(
									3605,
									"Accept Notification Primary Action",
								),
								category: R,
							},
						}),
						d.$ZX.appendMenuItem(d.$XX.CommandPalette, {
							command: {
								id: e.$12c,
								title: (0, m.localize2)(3606, "Toggle Do Not Disturb Mode"),
								category: R,
							},
						}),
						d.$ZX.appendMenuItem(d.$XX.CommandPalette, {
							command: {
								id: e.$22c,
								title: (0, m.localize2)(
									3607,
									"Toggle Do Not Disturb Mode By Source...",
								),
								category: R,
							},
						}),
						d.$ZX.appendMenuItem(d.$XX.CommandPalette, {
							command: {
								id: $,
								title: (0, m.localize2)(3608, "Focus Notification Toast"),
								category: R,
							},
							when: h.$pQb,
						});
				}
				let D = class extends g.$sj {
					constructor(N, A) {
						super(), (this.c = N), (this.g = A);
					}
					async q(N, A) {
						this.c.publicLog2("workbenchActionExecuted", {
							id: N.id,
							from: "message",
						}),
							(0, C.$Dwc)(A) &&
								this.c.publicLog2("notification:actionExecuted", {
									id: (0, p.$Aj)(A.message.original.toString()).toString(),
									actionLabel: N.label,
									source: A.sourceId || "core",
									silent: A.priority === c.NotificationPriority.SILENT,
								});
						try {
							await super.q(N, A);
						} catch (R) {
							this.g.error(R);
						}
					}
				};
				(e.$52c = D), (e.$52c = D = Ne([j(0, u.$km), j(1, c.$4N)], D));
			},
		)
