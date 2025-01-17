import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/actions.js';
import './notificationsCommands.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/clipboard/common/clipboardService.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../base/common/themables.js';
import '../../../../css!vs/workbench/browser/parts/notifications/media/notificationsActions.js';
define(
			de[1227],
			he([1, 0, 4, 50, 682, 31, 121, 14, 79, 26, 1516]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$c3c =
						e.$b3c =
						e.$a3c =
						e.$_2c =
						e.$$2c =
						e.$02c =
						e.$92c =
						e.$82c =
						e.$72c =
						e.$62c =
							void 0);
				const u = (0, m.$$O)(
						"notifications-clear",
						d.$ak.close,
						(0, t.localize)(3573, null),
					),
					a = (0, m.$$O)(
						"notifications-clear-all",
						d.$ak.clearAll,
						(0, t.localize)(3574, null),
					),
					h = (0, m.$$O)(
						"notifications-hide",
						d.$ak.chevronDown,
						(0, t.localize)(3575, null),
					),
					c = (0, m.$$O)(
						"notifications-expand",
						d.$ak.chevronUp,
						(0, t.localize)(3576, null),
					),
					n = (0, m.$$O)(
						"notifications-collapse",
						d.$ak.chevronDown,
						(0, t.localize)(3577, null),
					),
					g = (0, m.$$O)(
						"notifications-configure",
						d.$ak.gear,
						(0, t.localize)(3578, null),
					),
					p = (0, m.$$O)(
						"notifications-do-not-disturb",
						d.$ak.bellSlash,
						(0, t.localize)(3579, null),
					);
				let o = class extends i.$rj {
					static {
						this.ID = w.$Y2c;
					}
					static {
						this.LABEL = (0, t.localize)(3580, null);
					}
					constructor(P, k, L) {
						super(P, k, r.ThemeIcon.asClassName(u)), (this.a = L);
					}
					async run(P) {
						this.a.executeCommand(w.$Y2c, P);
					}
				};
				(e.$62c = o), (e.$62c = o = Ne([j(2, E.$ek)], o));
				let f = class extends i.$rj {
					static {
						this.ID = w.$Z2c;
					}
					static {
						this.LABEL = (0, t.localize)(3581, null);
					}
					constructor(P, k, L) {
						super(P, k, r.ThemeIcon.asClassName(a)), (this.a = L);
					}
					async run() {
						this.a.executeCommand(w.$Z2c);
					}
				};
				(e.$72c = f), (e.$72c = f = Ne([j(2, E.$ek)], f));
				let b = class extends i.$rj {
					static {
						this.ID = w.$12c;
					}
					static {
						this.LABEL = (0, t.localize)(3582, null);
					}
					constructor(P, k, L) {
						super(P, k, r.ThemeIcon.asClassName(p)), (this.a = L);
					}
					async run() {
						this.a.executeCommand(w.$12c);
					}
				};
				(e.$82c = b), (e.$82c = b = Ne([j(2, E.$ek)], b));
				let s = class extends i.$rj {
					static {
						this.ID = w.$22c;
					}
					static {
						this.LABEL = (0, t.localize)(3583, null);
					}
					constructor(P, k, L) {
						super(P, k), (this.a = L);
					}
					async run() {
						this.a.executeCommand(w.$22c);
					}
				};
				(e.$92c = s), (e.$92c = s = Ne([j(2, E.$ek)], s));
				class l extends i.$rj {
					static {
						this.ID = "workbench.action.configureDoNotDisturbMode";
					}
					static {
						this.LABEL = (0, t.localize)(3584, null);
					}
					constructor(P, k) {
						super(P, k, r.ThemeIcon.asClassName(p));
					}
				}
				e.$02c = l;
				let y = class extends i.$rj {
					static {
						this.ID = w.$T2c;
					}
					static {
						this.LABEL = (0, t.localize)(3585, null);
					}
					constructor(P, k, L) {
						super(P, k, r.ThemeIcon.asClassName(h)), (this.a = L);
					}
					async run() {
						this.a.executeCommand(w.$T2c);
					}
				};
				(e.$$2c = y), (e.$$2c = y = Ne([j(2, E.$ek)], y));
				let $ = class extends i.$rj {
					static {
						this.ID = w.$W2c;
					}
					static {
						this.LABEL = (0, t.localize)(3586, null);
					}
					constructor(P, k, L) {
						super(P, k, r.ThemeIcon.asClassName(c)), (this.a = L);
					}
					async run(P) {
						this.a.executeCommand(w.$W2c, P);
					}
				};
				(e.$_2c = $), (e.$_2c = $ = Ne([j(2, E.$ek)], $));
				let v = class extends i.$rj {
					static {
						this.ID = w.$V2c;
					}
					static {
						this.LABEL = (0, t.localize)(3587, null);
					}
					constructor(P, k, L) {
						super(P, k, r.ThemeIcon.asClassName(n)), (this.a = L);
					}
					async run(P) {
						this.a.executeCommand(w.$V2c, P);
					}
				};
				(e.$a3c = v), (e.$a3c = v = Ne([j(2, E.$ek)], v));
				class S extends i.$rj {
					static {
						this.ID = "workbench.action.configureNotification";
					}
					static {
						this.LABEL = (0, t.localize)(3588, null);
					}
					constructor(P, k, L) {
						super(P, k, r.ThemeIcon.asClassName(g)), (this.notification = L);
					}
				}
				e.$b3c = S;
				let I = class extends i.$rj {
					static {
						this.ID = "workbench.action.copyNotificationMessage";
					}
					static {
						this.LABEL = (0, t.localize)(3589, null);
					}
					constructor(P, k, L) {
						super(P, k), (this.a = L);
					}
					run(P) {
						return this.a.writeText(P.message.raw);
					}
				};
				(e.$c3c = I), (e.$c3c = I = Ne([j(2, C.$Vxb)], I));
			},
		),
		