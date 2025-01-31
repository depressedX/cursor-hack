import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../common/notifications.js';
import '../../../services/statusbar/browser/statusbar.js';
import '../../../../base/common/lifecycle.js';
import './notificationsCommands.js';
import '../../../../nls.js';
import '../../../../platform/notification/common/notification.js';
define(
			de[3623],
			he([1, 0, 610, 166, 3, 682, 4, 40]),
			function (ce /*require*/,
 e /*exports*/,
 t /*notifications*/,
 i /*statusbar*/,
 w /*lifecycle*/,
 E /*notificationsCommands*/,
 C /*nls*/,
 d /*notification*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$j3c = void 0);
				let m = class extends w.$1c {
					constructor(u, a, h) {
						super(),
							(this.h = u),
							(this.j = a),
							(this.m = h),
							(this.b = 0),
							(this.f = !1),
							(this.g = !1),
							this.r(),
							u.statusMessage && this.u(u.statusMessage),
							this.n();
					}
					n() {
						this.D(this.h.onDidChangeNotification((u) => this.q(u))),
							this.D(this.h.onDidChangeStatusMessage((u) => this.t(u))),
							this.D(this.m.onDidChangeFilter(() => this.r()));
					}
					q(u) {
						this.f ||
							(u.kind === t.NotificationChangeType.ADD
								? this.b++
								: u.kind === t.NotificationChangeType.REMOVE &&
									this.b > 0 &&
									this.b--),
							this.r();
					}
					r() {
						let u = 0;
						if (!this.f && !this.g)
							for (const h of this.h.notifications) h.hasProgress && u++;
						let a = {
							name: (0, C.localize)(3616, null),
							text: `${u > 0 || this.b > 0 ? "$(bell-dot)" : "$(bell)"}`,
							ariaLabel: (0, C.localize)(3617, null),
							command: this.f ? E.$T2c : E.$S2c,
							tooltip: this.s(u),
							showBeak: this.f,
						};
						this.m.getFilter() === d.NotificationsFilter.ERROR &&
							(a = {
								...a,
								text: `${u > 0 || this.b > 0 ? "$(bell-slash-dot)" : "$(bell-slash)"}`,
								ariaLabel: (0, C.localize)(3618, null),
								tooltip: (0, C.localize)(3619, null),
							}),
							this.a
								? this.a.update(a)
								: (this.a = this.j.addEntry(
										a,
										"status.notifications",
										i.StatusbarAlignment.RIGHT,
										-Number.MAX_VALUE,
									));
					}
					s(u) {
						return this.f
							? (0, C.localize)(3620, null)
							: this.h.notifications.length === 0
								? (0, C.localize)(3621, null)
								: u === 0
									? this.b === 0
										? (0, C.localize)(3622, null)
										: this.b === 1
											? (0, C.localize)(3623, null)
											: (0, C.localize)(3624, null, this.b)
									: this.b === 0
										? (0, C.localize)(3625, null, u)
										: this.b === 1
											? (0, C.localize)(3626, null, u)
											: (0, C.localize)(3627, null, this.b, u);
					}
					update(u, a) {
						let h = !1;
						this.f !== u && ((this.f = u), (this.b = 0), (h = !0)),
							this.g !== a && ((this.g = a), (h = !0)),
							h && this.r();
					}
					t(u) {
						const a = u.item;
						switch (u.kind) {
							case t.StatusMessageChangeType.ADD:
								this.u(a);
								break;
							case t.StatusMessageChangeType.REMOVE:
								this.c &&
									this.c[0] === a &&
									((0, w.$Vc)(this.c[1]), (this.c = void 0));
								break;
						}
					}
					u(u) {
						const a = u.message,
							h =
								u.options && typeof u.options.showAfter == "number"
									? u.options.showAfter
									: 0,
							c =
								u.options && typeof u.options.hideAfter == "number"
									? u.options.hideAfter
									: -1;
						this.c && (0, w.$Vc)(this.c[1]);
						let n,
							g = setTimeout(() => {
								(n = this.j.addEntry(
									{ name: (0, C.localize)(3628, null), text: a, ariaLabel: a },
									"status.message",
									i.StatusbarAlignment.LEFT,
									-Number.MAX_VALUE,
								)),
									(g = null);
							}, h),
							p;
						const o = {
							dispose: () => {
								g && clearTimeout(g), p && clearTimeout(p), n?.dispose();
							},
						};
						c > 0 && (p = setTimeout(() => o.dispose(), c)), (this.c = [u, o]);
					}
				};
				(e.$j3c = m), (e.$j3c = m = Ne([j(1, i.$d6b), j(2, d.$4N)], m));
			},
		)
