import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../common/memento.js';
import '../../../common/views.js';
import '../../../services/views/common/viewsService.js';
import '../../webview/browser/webview.js';
import '../../webview/browser/webviewWindowDragMonitor.js';
import './webviewViewService.js';
import '../../../services/activity/common/activity.js';
import '../../../services/extensions/common/extensions.js';
import '../../../../platform/hover/browser/hover.js';
define(
			de[3849],
			he([
				1, 0, 7, 33, 6, 3, 11, 10, 8, 49, 5, 39, 41, 84, 21, 32, 35, 146, 282,
				60, 89, 355, 1274, 1275, 260, 53, 72,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*cancellation*/,
				w /*event*/,
				E /*lifecycle*/,
				C /*actions*/,
				d /*configuration*/,
				m /*contextkey*/,
				r /*contextView*/,
				u /*instantiation*/,
				a /*keybinding*/,
				h /*opener*/,
				c /*progress*/,
				n /*storage*/,
				g /*telemetry*/,
				p /*themeService*/,
				o /*viewPane*/,
				f /*memento*/,
				b /*views*/,
				s /*viewsService*/,
				l /*webview*/,
				y /*webviewWindowDragMonitor*/,
				$ /*webviewViewService*/,
				v /*activity*/,
				S /*extensions*/,
				I /*hover*/,
) {
				"use strict";
				var T;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iuc = void 0);
				const P = { webviewState: "webviewState" };
				let k = class extends o.$TMb {
					static {
						T = this;
					}
					static b(D) {
						return (this.a ??= new l.$6Ib("webviewViews.origins", D)), this.a;
					}
					constructor(D, M, N, A, R, O, B, U, z, F, x, H, q, V, G, K, J, W) {
						super(
							{
								...D,
								titleMenuId: C.$XX.ViewTitle,
								showActions: o.ViewPaneShowActions.WhenExpanded,
							},
							O,
							A,
							M,
							N,
							x,
							R,
							B,
							F,
							U,
							z,
						),
							(this.dc = H),
							(this.ec = q),
							(this.fc = V),
							(this.gc = G),
							(this.hc = K),
							(this.ic = J),
							(this.jc = W),
							(this.c = this.D(new E.$2c())),
							(this.f = this.D(new E.$Zc())),
							(this.g = !1),
							(this.t = this.D(new E.$2c())),
							(this.kc = this.D(new w.$re())),
							(this.onDidChangeVisibility = this.kc.event),
							(this.lc = this.D(new w.$re())),
							(this.onDispose = this.lc.event),
							(this.sb = D.fromExtensionId),
							(this.n = this.title),
							(this.L = new f.$eEb(`webviewView.${this.id}`, G)),
							(this.ab = this.L.getMemento(
								n.StorageScope.WORKSPACE,
								n.StorageTarget.MACHINE,
							)),
							this.D(this.onDidChangeBodyVisibility(() => this.oc())),
							this.D(
								this.jc.onNewResolverRegistered((X) => {
									X.viewType === this.id && this.oc();
								}),
							),
							this.oc();
					}
					dispose() {
						this.lc.fire(), clearTimeout(this.cc), super.dispose();
					}
					focus() {
						super.focus(), this.c.value?.focus();
					}
					W(D) {
						super.W(D),
							(this.h = D),
							(this.j = void 0),
							this.m ||
								((this.m = new ResizeObserver(() => {
									setTimeout(() => {
										this.uc();
									}, 0);
								})),
								this.D(
									(0, E.$Yc)(() => {
										this.m.disconnect();
									}),
								),
								this.m.observe(D));
					}
					saveState() {
						this.c.value && (this.ab[P.webviewState] = this.c.value.state),
							this.L.saveMemento(),
							super.saveState();
					}
					X(D, M) {
						super.X(D, M), this.uc(new t.$pgb(M, D));
					}
					oc() {
						this.isBodyVisible()
							? (this.pc(),
								this.c.value?.claim(
									this,
									(0, t.getWindow)(this.element),
									void 0,
								))
							: this.c.value?.release(this);
					}
					pc() {
						if (this.g) return;
						this.g = !0;
						const D = this.sb
								? T.b(this.gc).getOrigin(this.id, this.sb)
								: void 0,
							M = this.ic.createWebviewOverlay({
								origin: D,
								providedViewType: this.id,
								title: this.title,
								options: { purpose: l.WebviewContentPurpose.WebviewView },
								contentOptions: {},
								extension: this.sb ? { id: this.sb } : void 0,
							});
						(M.state = this.ab[P.webviewState]),
							(this.c.value = M),
							this.h && this.uc(),
							this.f.add(
								(0, E.$Yc)(() => {
									this.c.value?.release(this);
								}),
							),
							this.f.add(
								M.onDidUpdateState(() => {
									this.ab[P.webviewState] = M.state;
								}),
							);
						for (const A of [
							t.$$gb.DRAG,
							t.$$gb.DRAG_END,
							t.$$gb.DRAG_ENTER,
							t.$$gb.DRAG_LEAVE,
							t.$$gb.DRAG_START,
						])
							this.f.add(
								(0, t.$0fb)(this.c.value.container, A, (R) => {
									R.preventDefault(),
										R.stopImmediatePropagation(),
										this.dropTargetElement.dispatchEvent(
											new DragEvent(R.type, R),
										);
								}),
							);
						this.f.add(
							new y.$R2b((0, t.getWindow)(this.element), () => this.c.value),
						);
						const N = this.f.add(new i.$Ce());
						this.sc(async () => {
							await this.ec.activateByEvent(`onView:${this.id}`);
							const A = this,
								R = {
									webview: M,
									onDidChangeVisibility: this.onDidChangeBodyVisibility,
									onDispose: this.onDispose,
									get title() {
										return A.r;
									},
									set title(O) {
										A.Sb(O);
									},
									get description() {
										return A.titleDescription;
									},
									set description(O) {
										A.Ub(O);
									},
									get badge() {
										return A.s;
									},
									set badge(O) {
										A.rc(O);
									},
									dispose: () => {
										(this.g = !1), this.c.clear(), this.f.clear();
									},
									show: (O) => {
										this.hc.openView(this.id, !O);
									},
								};
							await this.jc.resolve(this.id, R, N.token);
						});
					}
					Sb(D) {
						(this.r = D), super.Sb(typeof D == "string" ? D : this.n);
					}
					rc(D) {
						if (
							!(this.s?.value === D?.value && this.s?.tooltip === D?.tooltip) &&
							((this.s = D), D)
						) {
							const M = {
								badge: new v.$8qc(D.value, () => D.tooltip),
								priority: 150,
							};
							this.t.value = this.dc.showViewActivity(this.id, M);
						}
					}
					async sc(D) {
						return this.fc.withProgress({ location: this.id, delay: 500 }, D);
					}
					onDidScrollRoot() {
						this.uc();
					}
					tc(D) {
						const M = this.c.value;
						!this.h ||
							!M ||
							((!this.j || !this.j.isConnected) && (this.j = this.vc(this.h)),
							M.layoutWebviewOverElement(this.h, D, this.j));
					}
					uc(D) {
						this.tc(D),
							clearTimeout(this.cc),
							(this.cc = setTimeout(() => this.tc(D), 200));
					}
					vc(D) {
						return (0, t.$Egb)(D, "monaco-scrollable-element") ?? void 0;
					}
				};
				(e.$iuc = k),
					(e.$iuc =
						k =
						T =
							Ne(
								[
									j(1, d.$gj),
									j(2, m.$6j),
									j(3, r.$Xxb),
									j(4, u.$Li),
									j(5, a.$uZ),
									j(6, h.$7rb),
									j(7, g.$km),
									j(8, I.$Uyb),
									j(9, p.$iP),
									j(10, b.$K1),
									j(11, v.$7qc),
									j(12, S.$q2),
									j(13, c.$8N),
									j(14, n.$lq),
									j(15, s.$HMb),
									j(16, l.$3Ib),
									j(17, $.$2oc),
								],
								k,
							));
			},
		)
