import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../common/notifications.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/browser/dom.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './notificationsList.js';
import '../../../../base/common/event.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../common/theme.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../base/common/scrollable.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../services/host/browser/host.js';
import '../../../../base/common/async.js';
import '../../../../base/common/types.js';
import '../../../common/contextkeys.js';
import '../../../../base/browser/window.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../base/common/constants.js';
import '../../../../css!vs/workbench/browser/parts/notifications/media/notificationsToasts.js';
define(
			de[3410],
			he([
				1, 0, 4, 610, 3, 7, 5, 1702, 6, 96, 123, 35, 51, 66, 8, 40, 195, 52, 87,
				15, 28, 100, 75, 45, 10, 58, 2352,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*notifications*/,
				w /*lifecycle*/,
				E /*dom*/,
				C /*instantiation*/,
				d /*notificationsList*/,
				m /*event*/,
				r /*layoutService*/,
				u /*theme*/,
				a /*themeService*/,
				h /*colorRegistry*/,
				c /*editorGroupsService*/,
				n /*contextkey*/,
				g /*notification*/,
				p /*scrollable*/,
				o /*lifecycle*/,
				f /*host*/,
				b /*async*/,
				s /*types*/,
				l /*contextkeys*/,
				y /*window*/,
				$ /*reactiveStorageService*/,
				v /*configuration*/,
				S /*constants*/,
) {
				"use strict";
				var I;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$k3c = void 0);
				var T;
				(function (k) {
					(k[(k.HIDDEN_OR_VISIBLE = 0)] = "HIDDEN_OR_VISIBLE"),
						(k[(k.HIDDEN = 1)] = "HIDDEN"),
						(k[(k.VISIBLE = 2)] = "VISIBLE");
				})(T || (T = {}));
				let P = class extends a.$pP {
					static {
						I = this;
					}
					static {
						this.a = 450;
					}
					static {
						this.b = 3;
					}
					static {
						this.c = {
							[g.Severity.Info]: 15e3,
							[g.Severity.Warning]: 18e3,
							[g.Severity.Error]: 2e4,
						};
					}
					static {
						this.f = { interval: 800, limit: this.b };
					}
					get isVisible() {
						return !!this.j;
					}
					constructor(L, D, M, N, A, R, O, B, U, z, F) {
						super(A),
							(this.C = L),
							(this.F = D),
							(this.G = M),
							(this.H = N),
							(this.I = R),
							(this.J = O),
							(this.L = B),
							(this.M = U),
							(this.N = z),
							(this.O = F),
							(this.g = this.D(new m.$re())),
							(this.onDidChangeVisibility = this.g.event),
							(this.j = !1),
							(this.t = new Map()),
							(this.u = new Map()),
							(this.y = l.$pQb.bindTo(this.J)),
							(this.z = new b.$9h(I.f.interval)),
							this.P();
					}
					P() {
						this.D(
							this.H.onDidLayoutMainContainer((L) =>
								this.layout(E.$pgb.lift(L)),
							),
						),
							this.L.when(o.LifecyclePhase.Restored).then(() => {
								this.F.notifications.forEach((L) => this.R(L)),
									this.D(this.F.onDidChangeNotification((L) => this.Q(L)));
							}),
							this.D(
								this.F.onDidChangeFilter(({ global: L, sources: D }) => {
									if (L === g.NotificationsFilter.ERROR) this.hide();
									else if (D)
										for (const [M] of this.t)
											typeof M.sourceId == "string" &&
												D.get(M.sourceId) === g.NotificationsFilter.ERROR &&
												M.severity !== g.Severity.Error &&
												M.priority !== g.NotificationPriority.URGENT &&
												this.W(M);
								}),
							),
							this.D(
								this.N.onChangeEffectManuallyDisposed({
									deps: [
										() =>
											this.N.nonPersistentStorage.reactivePrimaryBarLocation,
									],
									onChange: () => {
										this.eb();
									},
								}),
							),
							this.D(
								this.O.onDidChangeConfiguration((L) => {
									L.affectsConfiguration(S.$XV) && this.eb();
								}),
							),
							this.eb();
					}
					Q(L) {
						switch (L.kind) {
							case i.NotificationChangeType.ADD:
								return this.R(L.item);
							case i.NotificationChangeType.REMOVE:
								return this.W(L.item);
						}
					}
					R(L) {
						if (
							this.s ||
							L.priority === g.NotificationPriority.SILENT ||
							this.z.increment() > I.f.limit
						)
							return;
						const D = new w.$Zc();
						this.u.set(L, D),
							D.add((0, E.$hgb)((0, E.getWindow)(this.C), () => this.S(L, D)));
					}
					S(L, D) {
						if (this.shouldHideUntil && this.shouldHideUntil > Date.now())
							return;
						let M = this.m;
						M ||
							((M = this.m = document.createElement("div")),
							M.classList.add("notifications-toasts"),
							this.C.appendChild(M),
							this.eb()),
							M.classList.add("visible");
						const N = document.createElement("div");
						N.classList.add("notification-toast-container");
						const A = M.firstChild;
						A ? M.insertBefore(N, A) : M.appendChild(N);
						const R = document.createElement("div");
						R.classList.add("notification-toast"), N.appendChild(R);
						const O = this.G.createInstance(d.$g3c, R, {
							verticalScrollMode: p.ScrollbarVisibility.Hidden,
							widgetAriaLabel: L.source
								? (0, t.localize)(3630, null, L.message.raw, L.source)
								: (0, t.localize)(3629, null, L.message.raw),
						});
						D.add(O);
						const B = { item: L, list: O, container: N, toast: R };
						this.t.set(L, B), D.add((0, w.$Yc)(() => this.cb(B, !1))), O.show();
						const U = this.$();
						this.ab(U.width),
							O.updateNotificationsList(0, 0, [L]),
							this.bb(U.height),
							D.add(
								L.onDidChangeExpansion(() => {
									O.updateNotificationsList(0, 1, [L]);
								}),
							),
							D.add(
								L.onDidChangeContent((z) => {
									switch (z.kind) {
										case i.NotificationViewItemContentChangeKind.ACTIONS:
											O.updateNotificationsList(0, 1, [L]);
											break;
										case i.NotificationViewItemContentChangeKind.MESSAGE:
											L.expanded && O.updateNotificationHeight(L);
											break;
									}
								}),
							),
							m.Event.once(L.onDidClose)(() => {
								this.W(L);
							}),
							this.U(L, N, O, D),
							this.updateStyles(),
							this.y.set(!0),
							R.classList.add("notification-fade-in"),
							D.add(
								(0, E.$0fb)(R, "transitionend", () => {
									R.classList.remove("notification-fade-in"),
										R.classList.add("notification-fade-in-done");
								}),
							),
							L.updateVisibility(!0),
							this.j || ((this.j = !0), this.g.fire());
					}
					U(L, D, M, N) {
						let A = !1;
						N.add((0, E.$0fb)(D, E.$$gb.MOUSE_OVER, () => (A = !0))),
							N.add((0, E.$0fb)(D, E.$$gb.MOUSE_OUT, () => (A = !1)));
						let R, O;
						const B = () => {
							R = setTimeout(() => {
								this.M.hasFocus
									? L.sticky || M.hasFocus() || A
										? B()
										: this.W(L)
									: O ||
										((O = this.M.onDidChangeFocus((U) => {
											U && B();
										})),
										N.add(O));
							}, I.c[L.severity]);
						};
						B(), N.add((0, w.$Yc)(() => clearTimeout(R)));
					}
					W(L) {
						let D = !1;
						const M = this.t.get(L);
						M &&
							((0, E.$Lgb)(M.container) &&
								(D = !(this.focusNext() || this.focusPrevious())),
							this.t.delete(L));
						const N = this.u.get(L);
						N && ((0, w.$Vc)(N), this.u.delete(L)),
							this.t.size > 0
								? this.layout(this.r)
								: (this.Y(), D && this.I.activeGroup.focus());
					}
					X() {
						this.t.clear(),
							this.u.forEach((L) => (0, w.$Vc)(L)),
							this.u.clear(),
							this.Y();
					}
					Y() {
						this.m?.classList.remove("visible"),
							this.y.set(!1),
							this.j && ((this.j = !1), this.g.fire());
					}
					hide() {
						const L = this.m ? (0, E.$Lgb)(this.m) : !1;
						this.X(), L && this.I.activeGroup.focus();
					}
					hideForMs(L) {
						(this.shouldHideUntil = Date.now() + L), this.hide();
					}
					focus() {
						const L = this.Z(T.VISIBLE);
						return L.length > 0 ? (L[0].list.focusFirst(), !0) : !1;
					}
					focusNext() {
						const L = this.Z(T.VISIBLE);
						for (let D = 0; D < L.length; D++)
							if (L[D].list.hasFocus()) {
								const N = L[D + 1];
								if (N) return N.list.focusFirst(), !0;
								break;
							}
						return !1;
					}
					focusPrevious() {
						const L = this.Z(T.VISIBLE);
						for (let D = 0; D < L.length; D++)
							if (L[D].list.hasFocus()) {
								const N = L[D - 1];
								if (N) return N.list.focusFirst(), !0;
								break;
							}
						return !1;
					}
					focusFirst() {
						const L = this.Z(T.VISIBLE)[0];
						return L ? (L.list.focusFirst(), !0) : !1;
					}
					focusLast() {
						const L = this.Z(T.VISIBLE);
						return L.length > 0 ? (L[L.length - 1].list.focusFirst(), !0) : !1;
					}
					update(L) {
						this.s !== L && ((this.s = L), this.s && this.X());
					}
					updateStyles() {
						this.t.forEach(({ toast: L }) => {
							const D = this.w(u.$3Gb);
							L.style.background = D || "";
							const M = this.w(h.$bR);
							L.style.boxShadow = M ? `0 0 8px 2px ${M}` : "";
							const N = this.w(u.$1Gb);
							L.style.border = N ? `1px solid ${N}` : "";
						});
					}
					Z(L) {
						const D = [];
						return (
							this.t.forEach((M) => {
								switch (L) {
									case T.HIDDEN_OR_VISIBLE:
										D.push(M);
										break;
									case T.HIDDEN:
										this.db(M) || D.push(M);
										break;
									case T.VISIBLE:
										this.db(M) && D.push(M);
										break;
								}
							}),
							D.reverse()
						);
					}
					layout(L) {
						this.r = L;
						const D = this.$();
						D.height && this.bb(D.height), this.ab(D.width);
					}
					$() {
						const L = I.a;
						let D = L,
							M;
						return (
							this.r &&
								((D = this.r.width),
								(D -= 2 * 8),
								(M = this.r.height),
								this.H.isVisible(r.Parts.STATUSBAR_PART, y.$Bfb) && (M -= 22),
								this.H.isVisible(r.Parts.TITLEBAR_PART, y.$Bfb) && (M -= 22),
								(M -= 2 * 12)),
							(M = typeof M == "number" ? Math.round(M * 0.618) : 0),
							new E.$pgb(Math.min(L, D), M)
						);
					}
					ab(L) {
						this.t.forEach(({ list: D }) => D.layout(L));
					}
					bb(L) {
						let D = 0;
						for (const M of this.Z(T.HIDDEN_OR_VISIBLE)) {
							(M.container.style.opacity = "0"),
								this.cb(M, !0),
								(L -= M.container.offsetHeight);
							let N = !1;
							D === I.b ? (N = !1) : L >= 0 && (N = !0),
								this.cb(M, N),
								(M.container.style.opacity = ""),
								N && D++;
						}
					}
					cb(L, D) {
						if (this.db(L) === D) return;
						const M = (0, s.$wg)(this.m);
						D ? M.appendChild(L.container) : L.container.remove(),
							L.item.updateVisibility(D);
					}
					db(L) {
						return !!L.container.parentElement;
					}
					eb() {
						const L = this.m,
							D = this.O.getValue(S.$XV);
						if (!L) return;
						(this.N.nonPersistentStorage.reactivePrimaryBarLocation === "left"
							? "right"
							: "left") === "left"
							? D
								? ((L.style.left = "3px"), (L.style.right = "unset"))
								: ((L.style.left = "unset"), (L.style.right = "3px"))
							: D
								? ((L.style.left = "unset"), (L.style.right = "3px"))
								: ((L.style.left = "3px"), (L.style.right = "unset"));
					}
				};
				(e.$k3c = P),
					(e.$k3c =
						P =
						I =
							Ne(
								[
									j(2, C.$Li),
									j(3, r.$mEb),
									j(4, a.$iP),
									j(5, c.$EY),
									j(6, n.$6j),
									j(7, o.$n6),
									j(8, f.$asb),
									j(9, $.$0zb),
									j(10, v.$gj),
								],
								P,
							));
			},
		)
