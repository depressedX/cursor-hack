import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/notification/common/notification.js';
import '../../../common/notifications.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/event.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../base/common/actions.js';
import '../../../../platform/storage/common/storage.js';
define(
			de[3507],
			he([1, 0, 4, 40, 610, 3, 6, 20, 50, 21]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*notification*/,
 w /*notifications*/,
 E /*lifecycle*/,
 C /*event*/,
 d /*extensions*/,
 m /*actions*/,
 r /*storage*/) {
				"use strict";
				var u;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Hwc = void 0);
				let a = class extends E.$1c {
					static {
						u = this;
					}
					constructor(c) {
						super(),
							(this.c = c),
							(this.model = this.D(new w.$Cwc())),
							(this.a = this.D(new C.$re())),
							(this.onDidAddNotification = this.a.event),
							(this.b = this.D(new C.$re())),
							(this.onDidRemoveNotification = this.b.event),
							(this.j = this.D(new C.$re())),
							(this.onDidChangeFilter = this.j.event),
							(this.m = this.c.getBoolean(u.g, r.StorageScope.APPLICATION, !1)),
							(this.n = (() => {
								const n = new Map();
								for (const g of this.c.getObject(
									u.h,
									r.StorageScope.APPLICATION,
									[],
								))
									n.set(g.id, g);
								return n;
							})()),
							this.s(),
							this.f();
					}
					f() {
						this.D(
							this.model.onDidChangeNotification((c) => {
								switch (c.kind) {
									case w.NotificationChangeType.ADD:
									case w.NotificationChangeType.REMOVE: {
										const n =
												typeof c.item.sourceId == "string" &&
												typeof c.item.source == "string"
													? { id: c.item.sourceId, label: c.item.source }
													: c.item.source,
											g = {
												message: c.item.message.original,
												severity: c.item.severity,
												source: n,
												priority: c.item.priority,
											};
										c.kind === w.NotificationChangeType.ADD &&
											((0, i.$5N)(n) &&
												(this.n.has(n.id)
													? this.q(n)
													: this.setFilter({
															...n,
															filter: i.NotificationsFilter.OFF,
														})),
											this.a.fire(g)),
											c.kind === w.NotificationChangeType.REMOVE &&
												this.b.fire(g);
										break;
									}
								}
							}),
						);
					}
					static {
						this.g = "notifications.doNotDisturbMode";
					}
					static {
						this.h = "notifications.perSourceDoNotDisturbMode";
					}
					setFilter(c) {
						if (typeof c == "number") {
							if (this.m === (c === i.NotificationsFilter.ERROR)) return;
							(this.m = c === i.NotificationsFilter.ERROR),
								this.c.store(
									u.g,
									this.m,
									r.StorageScope.APPLICATION,
									r.StorageTarget.MACHINE,
								),
								this.s(),
								this.j.fire();
						} else {
							const n = this.n.get(c.id);
							if (n?.filter === c.filter && n.label === c.label) return;
							this.n.set(c.id, { id: c.id, label: c.label, filter: c.filter }),
								this.r(),
								this.s();
						}
					}
					getFilter(c) {
						return c
							? (this.n.get(c.id)?.filter ?? i.NotificationsFilter.OFF)
							: this.m
								? i.NotificationsFilter.ERROR
								: i.NotificationsFilter.OFF;
					}
					q(c) {
						const n = this.n.get(c.id);
						n &&
							n.label !== c.label &&
							(this.n.set(c.id, { id: c.id, label: c.label, filter: n.filter }),
							this.r());
					}
					r() {
						this.c.store(
							u.h,
							JSON.stringify([...this.n.values()]),
							r.StorageScope.APPLICATION,
							r.StorageTarget.MACHINE,
						);
					}
					getFilters() {
						return [...this.n.values()];
					}
					s() {
						this.model.setFilter({
							global: this.m
								? i.NotificationsFilter.ERROR
								: i.NotificationsFilter.OFF,
							sources: new Map(
								[...this.n.values()].map((c) => [c.id, c.filter]),
							),
						});
					}
					removeFilter(c) {
						this.n.delete(c) && (this.r(), this.s());
					}
					info(c) {
						if (Array.isArray(c)) {
							for (const n of c) this.info(n);
							return;
						}
						this.model.addNotification({
							severity: i.Severity.Info,
							message: c,
						});
					}
					warn(c) {
						if (Array.isArray(c)) {
							for (const n of c) this.warn(n);
							return;
						}
						this.model.addNotification({
							severity: i.Severity.Warning,
							message: c,
						});
					}
					error(c) {
						if (Array.isArray(c)) {
							for (const n of c) this.error(n);
							return;
						}
						this.model.addNotification({
							severity: i.Severity.Error,
							message: c,
						});
					}
					notify(c) {
						const n = new E.$Zc();
						if (c.neverShowAgain) {
							const p = this.t(c.neverShowAgain),
								o = c.neverShowAgain.id;
							if (this.c.getBoolean(o, p)) return new i.$6N();
							const f = n.add(
									new m.$rj(
										"workbench.notification.neverShowAgain",
										(0, t.localize)(12570, null),
										void 0,
										!0,
										async () => {
											g.close(), this.c.store(o, !0, p, r.StorageTarget.USER);
										},
									),
								),
								b = {
									primary: c.actions?.primary || [],
									secondary: c.actions?.secondary || [],
								};
							c.neverShowAgain.isSecondary
								? (b.secondary = [...b.secondary, f])
								: (b.primary = [f, ...b.primary]),
								(c.actions = b);
						}
						const g = this.model.addNotification(c);
						return C.Event.once(g.onDidClose)(() => n.dispose()), g;
					}
					t(c) {
						switch (c.scope) {
							case i.NeverShowAgainScope.APPLICATION:
								return r.StorageScope.APPLICATION;
							case i.NeverShowAgainScope.PROFILE:
								return r.StorageScope.PROFILE;
							case i.NeverShowAgainScope.WORKSPACE:
								return r.StorageScope.WORKSPACE;
							default:
								return r.StorageScope.APPLICATION;
						}
					}
					prompt(c, n, g, p) {
						const o = new E.$Zc();
						if (p?.neverShowAgain) {
							const $ = this.t(p.neverShowAgain),
								v = p.neverShowAgain.id;
							if (this.c.getBoolean(v, $)) return new i.$6N();
							const S = {
								label: (0, t.localize)(12571, null),
								run: () => this.c.store(v, !0, $, r.StorageTarget.USER),
								isSecondary: p.neverShowAgain.isSecondary,
							};
							p.neverShowAgain.isSecondary ? (g = [...g, S]) : (g = [S, ...g]);
						}
						let f = !1;
						const b = [],
							s = [];
						g.forEach(($, v) => {
							const S = new w.$Gwc(`workbench.dialog.choice.${v}`, $);
							$.isSecondary ? s.push(S) : b.push(S),
								o.add(
									S.onDidRun(() => {
										(f = !0), $.keepOpen || y.close();
									}),
								),
								o.add(S);
						});
						const l = { primary: b, secondary: s },
							y = this.notify({
								severity: c,
								message: n,
								actions: l,
								sticky: p?.sticky,
								priority: p?.priority,
							});
						return (
							C.Event.once(y.onDidClose)(() => {
								o.dispose(),
									p && typeof p.onCancel == "function" && !f && p.onCancel();
							}),
							y
						);
					}
					status(c, n) {
						return this.model.showStatusMessage(c, n);
					}
				};
				(e.$Hwc = a),
					(e.$Hwc = a = u = Ne([j(0, r.$lq)], a)),
					(0, d.$lK)(i.$4N, a, d.InstantiationType.Delayed);
			},
		),
		