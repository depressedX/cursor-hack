import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/mouseEvent.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/async.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/lifecycle.js';
import '../../../../nls.js';
import '../../../../platform/actions/browser/dropdownWithPrimaryActionViewItem.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/common/themables.js';
import './debugActionViewItems.js';
import './debugColors.js';
import './debugCommands.js';
import './debugIcons.js';
import '../common/debug.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../../base/common/codicons.js';
import '../../../../base/browser/window.js';
import '../../../../base/common/numbers.js';
import '../../../../base/browser/pixelRatio.js';
import '../../../../css!vs/workbench/contrib/debug/browser/media/debugToolBar.js';
define(
			de[1333],
			he([
				1, 0, 7, 168, 105, 50, 24, 15, 29, 3, 4, 607, 92, 11, 10, 8, 49, 5, 40,
				21, 32, 51, 35, 26, 1332, 984, 425, 352, 112, 96, 14, 75, 201, 345,
				2430,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*mouseEvent*/,
				w /*actionbar*/,
				E /*actions*/,
				C /*arrays*/,
				d /*async*/,
				m /*errors*/,
				r /*lifecycle*/,
				u /*nls*/,
				a /*dropdownWithPrimaryActionViewItem*/,
				h /*menuEntryActionViewItem*/,
				c /*actions*/,
				n /*configuration*/,
				g /*contextkey*/,
				p /*contextView*/,
				o /*instantiation*/,
				f /*notification*/,
				b /*storage*/,
				s /*telemetry*/,
				l /*colorRegistry*/,
				y /*themeService*/,
				$ /*themables*/,
				v /*debugActionViewItems*/,
				S /*debugColors*/,
				I /*debugCommands*/,
				T /*debugIcons*/,
				P /*debug*/,
				k /*layoutService*/,
				L /*codicons*/,
				D /*window*/,
				M /*numbers*/,
				N /*pixelRatio*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jQc = void 0),
					(e.$kQc = B),
					(t = mt(t)),
					(C = mt(C)),
					(m = mt(m)),
					(T = mt(T));
				const A = "debug.actionswidgetposition",
					R = "debug.actionswidgety";
				let O = class extends y.$pP {
					constructor(H, q, V, G, K, J, W, X, Y, ie) {
						super(W),
							(this.C = H),
							(this.F = q),
							(this.G = V),
							(this.H = G),
							(this.I = K),
							(this.J = J),
							(this.L = X),
							(this.m = !1),
							(this.r = !1),
							(this.t = this.D(new r.$Zc())),
							(this.u = new WeakMap()),
							(this.z = this.D(new r.$2c())),
							(this.a = t.$("div.debug-toolbar")),
							(this.a.style.top = `${G.mainContainerOffset.top}px`),
							(this.b = t.$fhb(
								this.a,
								t.$("div.drag-area" + $.ThemeIcon.asCSSSelector(T.$fKb)),
							));
						const ne = t.$fhb(this.a, t.$("div.action-bar-container"));
						(this.j = Y.createMenu(c.$XX.DebugToolBar, ie)),
							this.D(this.j),
							(this.f = []),
							(this.c = this.D(
								new w.$eib(ne, {
									orientation: w.ActionsOrientation.HORIZONTAL,
									actionViewItemProvider: (ee, _) => {
										if (ee.id === I.$gHc)
											return this.L.createInstance(v.$zJc, ee, void 0);
										if (ee.id === I.$_Gc || ee.id === I.$0Gc) {
											this.t.clear();
											const te = this.L.invokeFunction((Q) =>
												B(ee, this.t, Q, { hoverDelegate: _.hoverDelegate }),
											);
											if (te) return te;
										}
										return (0, h.$Pyb)(this.L, ee, _);
									},
								}),
							)),
							(this.g = this.D(
								new d.$Yh(() => {
									const ee = this.G.state,
										_ = this.J.getValue("debug").toolBarLocation;
									if (
										ee === P.State.Inactive ||
										_ !== "floating" ||
										this.G.getModel()
											.getSessions()
											.every((Q) => Q.suppressDebugToolbar) ||
										(ee === P.State.Initializing &&
											this.G.initializingOptions?.suppressDebugToolbar)
									)
										return this.X();
									const te = [];
									(0, h.$Kyb)(this.j, { shouldForwardArgs: !0 }, te),
										C.$yb(
											te,
											this.f,
											(Q, Z) => Q.id === Z.id && Q.enabled === Z.enabled,
										) ||
											(this.c.clear(),
											this.c.push(te, { icon: !0, label: !1 }),
											(this.f = te)),
										this.U();
								}, 20),
							)),
							this.updateStyles(),
							this.M(),
							this.X();
					}
					M() {
						this.D(this.G.onDidChangeState(() => this.g.schedule())),
							this.D(
								this.J.onDidChangeConfiguration((V) => {
									V.affectsConfiguration("debug.toolBarLocation") &&
										this.g.schedule(),
										(V.affectsConfiguration(
											k.LayoutSettings.EDITOR_TABS_MODE,
										) ||
											V.affectsConfiguration(
												k.LayoutSettings.COMMAND_CENTER,
											)) &&
											((this.R = void 0), this.O());
								}),
							),
							this.D(this.j.onDidChange(() => this.g.schedule())),
							this.D(
								this.c.actionRunner.onDidRun((V) => {
									V.error && !m.$8(V.error) && this.C.warn(V.error),
										this.F.publicLog2("workbenchActionExecuted", {
											id: V.action.id,
											from: "debugActionsWidget",
										});
								}),
							),
							this.D(
								t.$dgb(this.b, (V) => {
									const G = new i.$2fb(t.getWindow(this.b), V),
										K = t.getWindow(this.H.activeContainer);
									if (G.detail === 2) {
										const J = this.a.clientWidth;
										this.O(0.5 * K.innerWidth - 0.5 * J, this.Q), this.N();
									}
								}),
							),
							this.D(
								t.$bgb(this.b, (V) => {
									this.b.classList.add("dragged");
									const G = t.getWindow(this.H.activeContainer),
										K = t.$cgb(G, (W) => {
											const X = new i.$2fb(G, W);
											X.preventDefault(), this.O(X.posx - 14, X.posy - 14);
										}),
										J = t.$dgb(G, (W) => {
											this.N(),
												this.b.classList.remove("dragged"),
												K.dispose(),
												J.dispose();
										});
								}),
							),
							this.D(this.H.onDidChangePartVisibility(() => this.O()));
						const H = this.D(new r.$2c()),
							q = () => {
								H.value = this.D(
									t.$0fb(
										t.getWindow(this.H.activeContainer),
										t.$$gb.RESIZE,
										() => this.O(),
									),
								);
							};
						this.D(
							this.H.onDidChangeActiveContainer(async () => {
								(this.R = void 0),
									await this.H.whenContainerStylesLoaded(
										t.getWindow(this.H.activeContainer),
									),
									this.r && (this.W(), this.O()),
									q();
							}),
						),
							q();
					}
					N() {
						const H = t.getWindow(this.H.activeContainer),
							q = this.H.activeContainer === this.H.mainContainer,
							V = this.a.getBoundingClientRect(),
							G = V.top,
							K = V.left / H.innerWidth;
						q
							? (this.I.store(
									A,
									K,
									b.StorageScope.PROFILE,
									b.StorageTarget.MACHINE,
								),
								this.I.store(
									R,
									G,
									b.StorageScope.PROFILE,
									b.StorageTarget.MACHINE,
								))
							: this.u.set(H, { x: K, y: G });
					}
					updateStyles() {
						if ((super.updateStyles(), this.a)) {
							this.a.style.backgroundColor = this.w(S.$LKb) || "";
							const H = this.w(l.$bR);
							this.a.style.boxShadow = H ? `0 0 8px 2px ${H}` : "";
							const q = this.w(l.$cR),
								V = this.w(S.$MKb);
							q
								? (this.a.style.border = `1px solid ${q}`)
								: ((this.a.style.border = V ? `solid ${V}` : "none"),
									(this.a.style.border = "1px 0"));
						}
					}
					O(H, q) {
						if (!this.m) return;
						const V = this.a.clientWidth,
							G = t.getWindow(this.H.activeContainer),
							K = G === D.$Bfb;
						if (H === void 0) {
							const J = K
								? Number(this.I.get(A, b.StorageScope.PROFILE))
								: this.u.get(G)?.x;
							H =
								J !== void 0 && !isNaN(J)
									? J * G.innerWidth
									: 0.5 * G.innerWidth - 0.5 * V;
						}
						(H = (0, M.$Zm)(H, 0, G.innerWidth - V)),
							(this.a.style.left = `${H}px`),
							q === void 0 &&
								(q = K
									? this.I.getNumber(R, b.StorageScope.PROFILE)
									: this.u.get(G)?.y),
							this.P(q ?? this.Q);
					}
					P(H) {
						const [q, V] = this.S;
						(H = Math.max(q, Math.min(H, V))), (this.a.style.top = `${H}px`);
					}
					get Q() {
						return this.H.mainContainerOffset.top;
					}
					get S() {
						if (!this.R) {
							const H = this.H.isVisible(
									k.Parts.TITLEBAR_PART,
									t.getWindow(this.H.activeContainer),
								),
								q = H ? 0 : this.H.mainContainerOffset.top;
							let V = 0;
							H &&
								(this.J.getValue(k.LayoutSettings.COMMAND_CENTER) === !0
									? (V += 35)
									: (V += 28)),
								this.J.getValue(k.LayoutSettings.EDITOR_TABS_MODE) !==
									k.EditorTabsMode.NONE && (V += 35),
								(this.R = [q, V]);
						}
						return this.R;
					}
					U() {
						if (this.m) {
							this.O();
							return;
						}
						this.r || ((this.r = !0), this.W()),
							(this.m = !0),
							t.show(this.a),
							this.O();
					}
					W() {
						this.H.activeContainer.appendChild(this.a),
							(this.z.value = N.$sjb
								.getInstance(t.getWindow(this.a))
								.onDidChange(() => this.O()));
					}
					X() {
						(this.m = !1), t.hide(this.a);
					}
					dispose() {
						super.dispose(), this.a?.remove();
					}
				};
				(e.$jQc = O),
					(e.$jQc = O =
						Ne(
							[
								j(0, f.$4N),
								j(1, s.$km),
								j(2, P.$75),
								j(3, k.$mEb),
								j(4, b.$lq),
								j(5, n.$gj),
								j(6, y.$iP),
								j(7, o.$Li),
								j(8, c.$YX),
								j(9, g.$6j),
							],
							O,
						));
				function B(x, H, q, V) {
					const G = q.get(c.$YX),
						K = q.get(g.$6j),
						J = q.get(o.$Li),
						W = q.get(p.$Xxb),
						X = G.getMenuActions(c.$XX.DebugToolBarStop, K, {
							shouldForwardArgs: !0,
						}),
						Y = [];
					if (((0, h.$Kyb)(X, Y), !Y.length)) return;
					const ie = H.add(
						new E.$rj(
							"notebook.moreRunActions",
							(0, u.localize)(5655, null),
							"codicon-chevron-down",
							!0,
						),
					);
					return J.createInstance(a.$OYb, x, ie, Y, "debug-stop-actions", W, V);
				}
				const U = [],
					z = (x, H, q, V, G, K, J) => {
						c.$ZX.appendMenuItem(c.$XX.DebugToolBar, {
							group: "navigation",
							when: G,
							order: q,
							command: { id: x, title: H, icon: V, precondition: K },
							alt: J,
						}),
							U.push(
								c.$ZX.appendMenuItem(c.$XX.ViewContainerTitle, {
									group: "navigation",
									when: g.$Kj.and(
										G,
										g.$Kj.equals("viewContainer", P.$Q4),
										P.$24.notEqualsTo("inactive"),
										g.$Kj.equals("config.debug.toolBarLocation", "docked"),
									),
									order: q,
									command: { id: x, title: H, icon: V, precondition: K },
								}),
							);
					};
				(0, r.$Tc)(
					c.$ZX.onDidChangeMenu((x) => {
						if (x.has(c.$XX.DebugToolBar)) {
							(0, r.$Vc)(U);
							const H = c.$ZX.getMenuItems(c.$XX.DebugToolBar);
							for (const q of H)
								U.push(
									c.$ZX.appendMenuItem(c.$XX.ViewContainerTitle, {
										...q,
										when: g.$Kj.and(
											q.when,
											g.$Kj.equals("viewContainer", P.$Q4),
											P.$24.notEqualsTo("inactive"),
											g.$Kj.equals("config.debug.toolBarLocation", "docked"),
										),
									}),
								);
						}
					}),
				);
				const F = g.$Kj.equals("config.debug.toolBarLocation", "commandCenter");
				c.$ZX.appendMenuItem(c.$XX.CommandCenterCenter, {
					submenu: c.$XX.DebugToolBar,
					title: "Debug",
					icon: L.$ak.debug,
					order: 1,
					when: g.$Kj.and(P.$74, F),
				}),
					z(I.$bHc, I.$MHc, 10, T.$pKb, P.$24.isEqualTo("stopped")),
					z(
						I.$9Gc,
						I.$IHc,
						10,
						T.$oKb,
						P.$24.notEqualsTo("stopped"),
						g.$Kj.and(P.$24.isEqualTo("running"), P.$r5.toNegated()),
					),
					z(I.$_Gc, I.$LHc, 70, T.$hKb, P.$q5.toNegated(), void 0, {
						id: I.$0Gc,
						title: I.$JHc,
						icon: T.$iKb,
						precondition: g.$Kj.and(P.$q5.toNegated(), P.$H5),
					}),
					z(I.$0Gc, I.$JHc, 70, T.$iKb, P.$q5, void 0, {
						id: I.$_Gc,
						title: I.$LHc,
						icon: T.$hKb,
						precondition: g.$Kj.and(P.$q5, P.$H5),
					}),
					z(I.$5Gc, I.$CHc, 20, T.$kKb, void 0, P.$24.isEqualTo("stopped")),
					z(I.$6Gc, I.$DHc, 30, T.$lKb, void 0, P.$24.isEqualTo("stopped")),
					z(I.$8Gc, I.$HHc, 40, T.$mKb, void 0, P.$24.isEqualTo("stopped")),
					z(I.$3Gc, I.$BHc, 60, T.$jKb),
					z(
						I.$2Gc,
						(0, u.localize)(5656, null),
						50,
						T.$nKb,
						P.$s5,
						P.$24.isEqualTo("stopped"),
					),
					z(
						I.$1Gc,
						(0, u.localize)(5657, null),
						55,
						T.$qKb,
						P.$s5,
						P.$24.isEqualTo("stopped"),
					),
					z(I.$gHc, I.$NHc, 100, L.$ak.listTree, g.$Kj.and(P.$T5, F.negate())),
					c.$ZX.appendMenuItem(c.$XX.DebugToolBarStop, {
						group: "navigation",
						when: g.$Kj.and(P.$q5.toNegated(), P.$H5),
						order: 0,
						command: { id: I.$0Gc, title: I.$JHc, icon: T.$iKb },
					}),
					c.$ZX.appendMenuItem(c.$XX.DebugToolBarStop, {
						group: "navigation",
						when: g.$Kj.and(P.$q5, P.$H5),
						order: 0,
						command: { id: I.$_Gc, title: I.$LHc, icon: T.$hKb },
					}),
					c.$ZX.appendMenuItem(c.$XX.DebugToolBarStop, {
						group: "navigation",
						when: g.$Kj.or(
							g.$Kj.and(P.$q5.toNegated(), P.$I5, P.$H5),
							g.$Kj.and(P.$q5, P.$I5),
						),
						order: 0,
						command: { id: I.$$Gc, title: I.$KHc, icon: T.$iKb },
					});
			},
		),
		