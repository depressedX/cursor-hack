import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/progress/common/progress.js';
import '../../statusbar/browser/statusbar.js';
import '../../../../base/common/async.js';
import '../../activity/common/activity.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/event.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/layout/browser/layoutService.js';
import '../../../../base/browser/ui/dialog/dialog.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/linkedText.js';
import '../../../common/views.js';
import '../../views/common/viewsService.js';
import '../../panecomposite/browser/panecomposite.js';
import '../../../../base/common/iconLabels.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../platform/keybinding/common/keybindingResolver.js';
import '../../../../base/common/constants.js';
import '../../userActivity/common/userActivityService.js';
import '../../../../css!vs/workbench/services/progress/browser/media/progressService.js';
define(
			de[3851],
			he([
				1, 0, 4, 3, 84, 166, 15, 260, 40, 50, 6, 20, 180, 1583, 39, 7, 488, 60,
				89, 142, 274, 106, 390, 58, 1040, 2538,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*lifecycle*/,
				w /*progress*/,
				E /*statusbar*/,
				C /*async*/,
				d /*activity*/,
				m /*notification*/,
				r /*actions*/,
				u /*event*/,
				a /*extensions*/,
				h /*layoutService*/,
				c /*dialog*/,
				n /*keybinding*/,
				g /*dom*/,
				p /*linkedText*/,
				o /*views*/,
				f /*viewsService*/,
				b /*panecomposite*/,
				s /*iconLabels*/,
				l /*defaultStyles*/,
				y /*keybindingResolver*/,
				$ /*constants*/,
				v /*userActivityService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jvc = void 0);
				let S = class extends i.$1c {
					constructor(T, P, k, L, D, M, N, A, R) {
						super(),
							(this.a = T),
							(this.b = P),
							(this.c = k),
							(this.f = L),
							(this.g = D),
							(this.h = M),
							(this.j = N),
							(this.m = A),
							(this.n = R),
							(this.q = []),
							(this.r = void 0);
					}
					async withProgress(T, P, k) {
						const { location: L } = T,
							D = async (N) => {
								const A = this.n.markActive({ whenHeldFor: 15e3 });
								try {
									return await P(N);
								} finally {
									A.dispose();
								}
							},
							M = (N) => {
								if (N.startsWith($.$KX)) {
									if (
										((N = N.slice($.$KX.length)),
										this.c.getViewDescriptorById(N) !== null)
									)
										return this.y(N, D, { ...T, location: N });
								} else if (N.startsWith($.$LX))
									return (
										(N = N.slice($.$LX.length)),
										this.s({ ...T, location: w.ProgressLocation.Window }, D)
									);
								const A = this.c.getViewContainerById(N);
								if (A) {
									const R = this.c.getViewContainerLocation(A);
									if (R !== null) return this.w(N, R, D, { ...T, location: N });
								}
								if (this.c.getViewDescriptorById(N) !== null)
									return this.y(N, D, { ...T, location: N });
								throw new Error(`Bad progress location: ${N}`);
							};
						if (typeof L == "string") return M(L);
						switch (L) {
							case w.ProgressLocation.Notification: {
								let N = T.priority;
								return (
									N !== m.NotificationPriority.URGENT &&
										(this.g.getFilter() === m.NotificationsFilter.ERROR ||
											((0, m.$5N)(T.source) &&
												this.g.getFilter(T.source) ===
													m.NotificationsFilter.ERROR)) &&
										(N = m.NotificationPriority.SILENT),
									this.u({ ...T, location: L, priority: N }, D, k)
								);
							}
							case w.ProgressLocation.Window: {
								const N = T.type;
								return T.command
									? this.s({ ...T, location: L, type: N }, D)
									: this.u(
											{
												delay: 150,
												...T,
												priority: m.NotificationPriority.SILENT,
												location: w.ProgressLocation.Notification,
												type: N,
											},
											D,
											k,
										);
							}
							case w.ProgressLocation.Explorer:
								return this.w(
									"workbench.view.explorer",
									o.ViewContainerLocation.Sidebar,
									D,
									{ ...T, location: L },
								);
							case w.ProgressLocation.Scm:
								return M("workbench.scm");
							case w.ProgressLocation.Extensions:
								return this.w(
									"workbench.view.extensions",
									o.ViewContainerLocation.Sidebar,
									D,
									{ ...T, location: L },
								);
							case w.ProgressLocation.Dialog:
								return this.F(T, D, k);
							default:
								throw new Error(`Bad progress location: ${L}`);
						}
					}
					s(T, P) {
						const k = [T, new w.$0N(() => this.t())],
							L = P(k[1]);
						let D = setTimeout(() => {
							(D = void 0),
								this.q.unshift(k),
								this.t(),
								Promise.all([(0, C.$Nh)(150), L]).finally(() => {
									const M = this.q.indexOf(k);
									this.q.splice(M, 1), this.t();
								});
						}, 150);
						return L.finally(() => clearTimeout(D));
					}
					t(T = 0) {
						if (T < this.q.length) {
							const [P, k] = this.q[T],
								L = P.title,
								D = k.value && k.value.message,
								M = P.command;
							let N, A;
							const R =
								P.source && typeof P.source != "string"
									? P.source.label
									: P.source;
							if (L && D)
								(N = (0, t.localize)(12619, null, L, D)),
									(A = R ? (0, t.localize)(12620, null, R, L, D) : N);
							else if (L)
								(N = L), (A = R ? (0, t.localize)(12621, null, R, L) : N);
							else if (D)
								(N = D), (A = R ? (0, t.localize)(12622, null, R, D) : N);
							else {
								this.t(T + 1);
								return;
							}
							const O = {
								name: (0, t.localize)(12623, null),
								text: N,
								showProgress: P.type || !0,
								ariaLabel: N,
								tooltip: A,
								command: M,
							};
							this.r
								? this.r.update(O)
								: (this.r = this.h.addEntry(
										O,
										"status.progress",
										E.StatusbarAlignment.LEFT,
									));
						} else this.r?.dispose(), (this.r = void 0);
					}
					u(T, P, k) {
						const L = new (class extends i.$1c {
								get step() {
									return this.c;
								}
								get done() {
									return this.f;
								}
								constructor() {
									super(),
										(this.a = this.D(new u.$re())),
										(this.onDidReport = this.a.event),
										(this.b = this.D(new u.$re())),
										(this.onWillDispose = this.b.event),
										(this.c = void 0),
										(this.f = !1),
										(this.promise = P(this)),
										this.promise.finally(() => {
											this.dispose();
										});
								}
								report(z) {
									(this.c = z), this.a.fire(z);
								}
								cancel(z) {
									k?.(z), this.dispose();
								}
								dispose() {
									(this.f = !0), this.b.fire(), super.dispose();
								}
							})(),
							D = () => {
								const z = new C.$0h();
								return (
									this.s(
										{
											location: w.ProgressLocation.Window,
											title: T.title ? (0, p.$Zpb)(T.title).toString() : void 0,
											command: "notifications.showList",
											type: T.type,
										},
										(F) => {
											function x(q) {
												q.message &&
													F.report({
														message: (0, p.$Zpb)(q.message).toString(),
													});
											}
											L.step && x(L.step);
											const H = L.onDidReport((q) => x(q));
											return (
												z.p.finally(() => H.dispose()),
												u.Event.once(L.onWillDispose)(() => z.complete()),
												z.p
											);
										},
									),
									(0, i.$Yc)(() => z.complete())
								);
							},
							M = (z, F, x) => {
								const H = new i.$Zc(),
									q = T.primaryActions ? Array.from(T.primaryActions) : [],
									V = T.secondaryActions ? Array.from(T.secondaryActions) : [];
								if (
									(T.buttons &&
										T.buttons.forEach((W, X) => {
											const Y = new (class extends r.$rj {
												constructor() {
													super(`progress.button.${W}`, W, void 0, !0);
												}
												async run() {
													L.cancel(X);
												}
											})();
											H.add(Y), q.push(Y);
										}),
									T.cancellable)
								) {
									const W = new (class extends r.$rj {
										constructor() {
											super(
												"progress.cancel",
												(0, t.localize)(12624, null),
												void 0,
												!0,
											);
										}
										async run() {
											L.cancel();
										}
									})();
									H.add(W), q.push(W);
								}
								const G = this.g.notify({
									severity: m.Severity.Info,
									message: (0, s.$$k)(z),
									source: T.source,
									actions: { primary: q, secondary: V },
									progress:
										typeof x == "number" && x >= 0
											? { total: 100, worked: x }
											: { infinite: !0 },
									priority: F,
								});
								let K;
								const J = (W) => {
									(0, i.$Vc)(K), !W && !L.done && (K = D());
								};
								return (
									H.add(G.onDidChangeVisibility(J)),
									F === m.NotificationPriority.SILENT && J(!1),
									u.Event.once(G.onDidClose)(() => H.dispose()),
									G
								);
							},
							N = (z, F) => {
								typeof F == "number" && F >= 0
									? (z.progress.total(100), z.progress.worked(F))
									: z.progress.infinite();
							};
						let A, R, O;
						const B = (z) => {
							z?.message && T.title
								? (O = `${T.title}: ${z.message}`)
								: (O = T.title || z?.message),
								!A &&
									O &&
									(typeof T.delay == "number" && T.delay > 0
										? typeof R != "number" &&
											(R = setTimeout(
												() => (A = M(O, T.priority, z?.increment)),
												T.delay,
											))
										: (A = M(O, T.priority, z?.increment))),
								A &&
									(O && A.updateMessage(O),
									typeof z?.increment == "number" && N(A, z.increment));
						};
						B(L.step);
						const U = L.onDidReport((z) => B(z));
						return (
							u.Event.once(L.onWillDispose)(() => U.dispose()),
							(async () => {
								try {
									typeof T.delay == "number" && T.delay > 0
										? await L.promise
										: await Promise.all([(0, C.$Nh)(800), L.promise]);
								} finally {
									clearTimeout(R), A?.close();
								}
							})(),
							L.promise
						);
					}
					w(T, P, k, L) {
						const D = this.b.getProgressIndicator(T, P),
							M = D ? this.C(D, k, L) : k({ report: () => {} });
						return P === o.ViewContainerLocation.Sidebar && this.z(T, L, M), M;
					}
					y(T, P, k) {
						const L = this.f.getViewProgressIndicator(T),
							D = L ? this.C(L, P, k) : P({ report: () => {} });
						if (
							this.c.getViewLocationById(T) !== o.ViewContainerLocation.Sidebar
						)
							return D;
						const N = this.c.getViewContainerByViewId(T)?.id;
						return N === void 0 || this.z(N, k, D), D;
					}
					z(T, P, k) {
						let L,
							D = setTimeout(() => {
								D = void 0;
								const M = this.a.showViewContainerActivity(T, {
										badge: new d.$0qc(() => ""),
										priority: 100,
									}),
									N = Date.now(),
									A = 300;
								L = {
									dispose() {
										const R = Date.now() - N;
										R < A ? setTimeout(() => M.dispose(), A - R) : M.dispose();
									},
								};
							}, P.delay || 300);
						k.finally(() => {
							clearTimeout(D), (0, i.$Vc)(L);
						});
					}
					C(T, P, k) {
						let L;
						function D(N) {
							let A, R;
							return (
								typeof N < "u" &&
									(typeof N == "number"
										? (A = N)
										: typeof N.increment == "number" &&
											((A = N.total ?? 100), (R = N.increment))),
								typeof A == "number"
									? (L ||
											((L = T.show(A, k.delay)),
											M.catch(() => {}).finally(() => L?.done())),
										typeof R == "number" && L.worked(R))
									: (L?.done(), T.showWhile(M, k.delay)),
								L
							);
						}
						const M = P({
							report: (N) => {
								D(N);
							},
						});
						return D(k.total), M;
					}
					F(T, P, k) {
						const L = new i.$Zc(),
							D = [
								"workbench.action.quit",
								"workbench.action.reloadWindow",
								"copy",
								"cut",
								"editor.action.clipboardCopyAction",
								"editor.action.clipboardCutAction",
							];
						let M;
						const N = (z) => {
							const F = T.buttons || [];
							return (
								T.sticky ||
									F.push(
										T.cancellable
											? (0, t.localize)(12625, null)
											: (0, t.localize)(12626, null),
									),
								(M = new c.$Oob(this.j.activeContainer, z, F, {
									type: "pending",
									detail: T.detail,
									cancelId: F.length - 1,
									disableCloseAction: T.sticky,
									disableDefaultAction: T.sticky,
									keyEventProcessor: (x) => {
										const H = this.m.softDispatch(x, this.j.activeContainer);
										H.kind === y.ResultKind.KbFound &&
											H.commandId &&
											(D.includes(H.commandId) || g.$ahb.stop(x, !0));
									},
									buttonStyles: l.$lyb,
									checkboxStyles: l.$syb,
									inputBoxStyles: l.$wyb,
									dialogStyles: l.$uyb,
								})),
								L.add(M),
								M.show().then((x) => {
									k?.(x.button), (0, i.$Vc)(M);
								}),
								M
							);
						};
						let A = T.delay ?? 0,
							R;
						const O = L.add(
								new C.$Yh(() => {
									(A = 0), R && !M ? (M = N(R)) : R && M.updateMessage(R);
								}, 0),
							),
							B = function (z) {
								(R = z), O.isScheduled() || O.schedule(A);
							},
							U = P({
								report: (z) => {
									B(z.message);
								},
							});
						return (
							U.finally(() => {
								(0, i.$Vc)(L);
							}),
							T.title && B(T.title),
							U
						);
					}
				};
				(e.$jvc = S),
					(e.$jvc = S =
						Ne(
							[
								j(0, d.$7qc),
								j(1, b.$6Sb),
								j(2, o.$K1),
								j(3, f.$HMb),
								j(4, m.$4N),
								j(5, E.$d6b),
								j(6, h.$jEb),
								j(7, n.$uZ),
								j(8, v.$Poc),
							],
							S,
						)),
					(0, a.$lK)(w.$8N, S, a.InstantiationType.Delayed);
			},
		),
		