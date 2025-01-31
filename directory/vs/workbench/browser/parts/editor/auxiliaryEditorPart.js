import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/browser.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/platform.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/instantiation/common/serviceCollection.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/window/common/window.js';
import './editorPart.js';
import '../titlebar/windowTitle.js';
import '../../../services/auxiliaryWindow/browser/auxiliaryWindowService.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/host/browser/host.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../services/statusbar/browser/statusbar.js';
import '../../../services/title/browser/titleService.js';
define(
			de[4225],
			he([
				1, 0, 139, 7, 6, 3, 12, 10, 8, 5, 128, 21, 35, 253, 1985, 1327, 703, 66,
				18, 87, 96, 52, 166, 713,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*browser*/,
				i /*dom*/,
				w /*event*/,
				E /*lifecycle*/,
				C /*platform*/,
				d /*configuration*/,
				m /*contextkey*/,
				r /*instantiation*/,
				u /*serviceCollection*/,
				a /*storage*/,
				h /*themeService*/,
				c /*window*/,
				n /*editorPart*/,
				g /*windowTitle*/,
				p /*auxiliaryWindowService*/,
				o /*editorGroupsService*/,
				f /*editorService*/,
				b /*host*/,
				s /*layoutService*/,
				l /*lifecycle*/,
				y /*statusbar*/,
				$ /*titleService*/,
) {
				"use strict";
				var v, S;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Iuc = void 0);
				let I = class {
					static {
						v = this;
					}
					static {
						this.a = "workbench.statusBar.visible";
					}
					constructor(k, L, D, M, N, A, R, O, B) {
						(this.b = k),
							(this.c = L),
							(this.d = D),
							(this.f = M),
							(this.g = N),
							(this.h = A),
							(this.i = R),
							(this.j = O),
							(this.k = B);
					}
					async create(k, L) {
						function D() {
							let G = 0;
							return H && (G += x.height), U && z && (G += U.height), G;
						}
						function M(G) {
							H ? (0, i.show)(x.container) : (0, i.hide)(x.container),
								G && R.layout();
						}
						function N(G) {
							U &&
								(z ? (0, i.show)(U.container) : (0, i.hide)(U.container),
								G && R.layout());
						}
						const A = new E.$Zc(),
							R = A.add(await this.d.open(L)),
							O = document.createElement("div");
						O.classList.add("part", "editor"),
							O.setAttribute("role", "main"),
							(O.style.position = "relative"),
							R.container.appendChild(O);
						const B = A.add(
							this.c.createInstance(
								T,
								R.window.vscodeWindowId,
								this.b,
								L?.state,
								k,
							),
						);
						A.add(this.b.registerPart(B)), B.create(O);
						let U,
							z = !1;
						if (C.$p && (0, c.$xY)(this.g)) {
							(U = A.add(this.i.createAuxiliaryTitlebarPart(R.container, B))),
								(z = (0, s.$rEb)(this.g, R.window, void 0, !1));
							const G = () => {
								const K = z;
								(z = (0, s.$rEb)(this.g, R.window, void 0, !1)),
									K !== z && N(!0);
							};
							A.add(U.onDidChange(() => R.layout())),
								A.add(this.k.onDidChangePartVisibility(() => G())),
								A.add(
									(0, t.$Nfb)((K) => {
										K === R.window.vscodeWindowId && G();
									}),
								),
								N(!1);
						} else A.add(this.c.createInstance(g.$ztc, R.window, B));
						const x = A.add(this.h.createAuxiliaryStatusbarPart(R.container));
						let H = this.g.getValue(v.a) !== !1;
						A.add(
							this.g.onDidChangeConfiguration((G) => {
								G.affectsConfiguration(v.a) &&
									((H = this.g.getValue(v.a) !== !1), M(!0));
							}),
						),
							M(!1);
						const q = A.add(
							w.Event.once(B.onWillClose)(() => R.window.close()),
						);
						A.add(
							w.Event.once(R.onUnload)(() => {
								A.isDisposed || (q.dispose(), B.close(), A.dispose());
							}),
						),
							A.add(w.Event.once(this.f.onDidShutdown)(() => A.dispose())),
							A.add(
								R.onBeforeUnload((G) => {
									for (const K of B.groups)
										for (const J of K.editors) {
											const W = J.canMove(K.id, this.b.mainPart.activeGroup.id);
											if (typeof W == "string") {
												K.openEditor(J), G.veto(W);
												break;
											}
										}
								}),
							),
							A.add(
								R.onWillLayout((G) => {
									const K = U?.height ?? 0;
									U?.layout(G.width, K, 0, 0);
									const J = G.height - D();
									B.layout(G.width, J, K, 0),
										x.layout(G.width, x.height, G.height - x.height, 0);
								}),
							),
							R.layout();
						const V = A.add(
							this.c.createChild(
								new u.$Ki(
									[y.$d6b, this.h.createScoped(x, A)],
									[f.$IY, this.j.createScoped(B, A)],
								),
							),
						);
						return { part: B, instantiationService: V, disposables: A };
					}
				};
				(e.$Iuc = I),
					(e.$Iuc =
						I =
						v =
							Ne(
								[
									j(1, r.$Li),
									j(2, p.$AEb),
									j(3, l.$n6),
									j(4, d.$gj),
									j(5, y.$d6b),
									j(6, $.$Wqc),
									j(7, f.$IY),
									j(8, s.$mEb),
								],
								I,
							));
				let T = class extends n.$Guc {
					static {
						S = this;
					}
					static {
						this.c = 1;
					}
					constructor(k, L, D, M, N, A, R, O, B, U, z) {
						const F = S.c++;
						super(
							L,
							`workbench.parts.auxiliaryEditor.${F}`,
							M,
							k,
							N,
							A,
							R,
							O,
							B,
							U,
							z,
						),
							(this.Fc = D),
							(this.Ec = this.D(new w.$re())),
							(this.onWillClose = this.Ec.event);
					}
					removeGroup(k, L) {
						const D = this.jc(k);
						this.count === 1 && this.activeGroup === D
							? this.Gc(L)
							: super.removeGroup(k, L);
					}
					Gc(k) {
						const L = !k && this.Zb(this.ub),
							M = this.Ab.getGroups(o.GroupsOrder.MOST_RECENTLY_ACTIVE)[1];
						M && (M.groupsView.activateGroup(M), L && M.focus()), this.Jc(!1);
					}
					xc() {
						return this.Fc;
					}
					I() {}
					close() {
						return this.Jc(!0);
					}
					Jc(k) {
						let L = !0;
						return k && (L = this.Kc()), this.Ec.fire(), L;
					}
					Kc() {
						if (!this.groups.some((D) => D.count > 0)) return !0;
						let k;
						for (const D of this.Ab.mainPart.getGroups(
							o.GroupsOrder.MOST_RECENTLY_ACTIVE,
						))
							if (!D.isLocked) {
								k = D;
								break;
							}
						k ||
							(k = this.Ab.mainPart.addGroup(
								this.Ab.mainPart.activeGroup,
								this.partOptions.openSideBySideDirection === "right"
									? o.GroupDirection.RIGHT
									: o.GroupDirection.DOWN,
							));
						const L = this.mergeAllGroups(k);
						return k.focus(), L;
					}
				};
				T = S = Ne(
					[
						j(4, r.$Li),
						j(5, h.$iP),
						j(6, d.$gj),
						j(7, a.$lq),
						j(8, s.$mEb),
						j(9, b.$asb),
						j(10, m.$6j),
					],
					T,
				);
			},
		)
