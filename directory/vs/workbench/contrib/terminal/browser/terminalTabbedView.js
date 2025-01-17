import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/ui/splitview/splitview.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './terminal.js';
import './terminalTabsList.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/actions.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/terminal/common/terminal.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../nls.js';
import './terminalContextMenu.js';
import '../common/terminalStorageKeys.js';
import '../common/terminalContextKey.js';
import './terminalTooltip.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
define(
			de[3698],
			he([
				1, 0, 279, 3, 10, 5, 107, 3697, 7, 50, 11, 8, 49, 117, 21, 4, 616, 691,
				237, 1261, 72, 45,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$4Uc = void 0),
					(m = mt(m));
				const y = m.$;
				var $;
				(function (I) {
					I.ViewIsVertical = "terminal-side-view";
				})($ || ($ = {}));
				var v;
				(function (I) {
					(I[(I.StatusIcon = 30)] = "StatusIcon"),
						(I[(I.SplitAnnotation = 30)] = "SplitAnnotation");
				})(v || (v = {}));
				let S = class extends i.$1c {
					constructor(T, P, k, L, D, M, N, A, R, O, B, U) {
						super(),
							(this.H = P),
							(this.I = k),
							(this.J = L),
							(this.L = D),
							(this.M = M),
							(this.N = N),
							(this.O = R),
							(this.P = B),
							(this.Q = U),
							(this.t = !1),
							(this.g = y(".tabs-container"));
						const z = y(".tabs-list-container");
						(this.f = y(".tabs-list")),
							z.appendChild(this.f),
							this.g.appendChild(z),
							(this.u = this.D(A.createMenu(u.$XX.TerminalInstanceContext, O))),
							(this.w = this.D(A.createMenu(u.$XX.TerminalTabContext, O))),
							(this.y = this.D(
								A.createMenu(u.$XX.TerminalTabEmptyAreaContext, O),
							)),
							(this.h = this.D(this.L.createInstance(d.$3Uc, this.f)));
						const F = y(".terminal-outer-container");
						(this.b = y(".terminal-groups-container")),
							F.appendChild(this.b),
							this.D(
								this.Q.onChangeEffectManuallyDisposed({
									deps: [
										() =>
											this.Q.nonPersistentStorage
												.shouldHighlightTerminalContainer,
									],
									onChange: () => {
										this.b.classList.toggle(
											"should-highlight",
											this.Q.nonPersistentStorage
												.shouldHighlightTerminalContainer,
										);
									},
								}),
							),
							this.H.setContainers(T, this.b),
							(this.z = f.TerminalContextKeys.tabsNarrow.bindTo(O)),
							(this.C = f.TerminalContextKeys.tabsFocus.bindTo(O)),
							(this.F = f.TerminalContextKeys.tabsMouse.bindTo(O)),
							(this.n = this.I.config.tabs.location === "left" ? 0 : 1),
							(this.q = this.I.config.tabs.location === "left" ? 1 : 0),
							this.D(
								N.onDidChangeConfiguration((x) => {
									x.affectsConfiguration(c.TerminalSettingId.TabsEnabled) ||
									x.affectsConfiguration(c.TerminalSettingId.TabsHideCondition)
										? this.S()
										: x.affectsConfiguration(
												c.TerminalSettingId.TabsLocation,
											) &&
											((this.n =
												this.I.config.tabs.location === "left" ? 0 : 1),
											(this.q = this.I.config.tabs.location === "left" ? 1 : 0),
											this.R() &&
												(this.a.swapViews(0, 1),
												this.db(),
												this.cb(),
												this.a.resizeView(this.n, this.U())));
								}),
							),
							this.D(this.J.onDidChangeInstances(() => this.S())),
							this.D(this.J.onDidChangeGroups(() => this.S())),
							this.fb(T, this.b),
							this.D(
								this.J.onDidChangePanelOrientation((x) => {
									(this.G = x),
										this.G === t.Orientation.VERTICAL
											? this.b.classList.add($.ViewIsVertical)
											: this.b.classList.remove($.ViewIsVertical);
								}),
							),
							(this.a = new t.$vob(T, {
								orientation: t.Orientation.HORIZONTAL,
								proportionalLayout: !1,
							})),
							this.ab(F);
					}
					R() {
						const T = this.I.config.tabs.enabled,
							P = this.I.config.tabs.hideCondition;
						return T
							? P === "never" ||
									(P === "singleTerminal" && this.J.instances.length > 1) ||
									(P === "singleGroup" && this.J.groups.length > 1)
							: !1;
					}
					S() {
						this.R()
							? this.a.length === 1 &&
								(this.bb(),
								this.cb(),
								this.a.resizeView(this.n, this.U()),
								this.rerenderTabs())
							: this.a.length === 2 &&
								!this.F.get() &&
								(this.a.removeView(this.n), this.m?.remove(), this.db());
					}
					U() {
						const T =
								this.G === t.Orientation.VERTICAL
									? o.TerminalStorageKeys.TabsListWidthVertical
									: o.TerminalStorageKeys.TabsListWidthHorizontal,
							P = this.O.get(T, n.StorageScope.PROFILE);
						return !P || !parseInt(P)
							? this.G === t.Orientation.VERTICAL
								? d.TerminalTabsListSizes.NarrowViewWidth
								: d.TerminalTabsListSizes.DefaultWidth
							: parseInt(P);
					}
					W() {
						let T = d.TerminalTabsListSizes.WideViewMinimumWidth;
						const P = document.createElement("canvas");
						(P.width = 1), (P.height = 1);
						const k = P.getContext("2d");
						if (k) {
							const D = m.getWindow(this.f).getComputedStyle(this.f);
							k.font = `${D.fontStyle} ${D.fontSize} ${D.fontFamily}`;
							const M = this.J.instances.reduce(
								(N, A) =>
									Math.max(
										N,
										k.measureText(A.title + (A.description || "")).width +
											this.X(A),
									),
								0,
							);
							T = Math.ceil(
								Math.max(M, d.TerminalTabsListSizes.WideViewMinimumWidth),
							);
						}
						Math.ceil(this.a.getViewSize(this.n)) === T &&
							(T = d.TerminalTabsListSizes.NarrowViewWidth),
							this.a.resizeView(this.n, T),
							this.Z(T);
					}
					X(T) {
						const k = T.statusList.statuses.length > 0 ? v.StatusIcon : 0;
						return (
							40 +
							((this.J.getGroupForInstance(T)?.terminalInstances.length || 0) >
							1
								? v.SplitAnnotation
								: 0) +
							k
						);
					}
					Y() {
						const T = this.a.getViewSize(this.n);
						!this.s || T <= 0 || this.Z(T);
					}
					Z(T) {
						T < d.TerminalTabsListSizes.MidpointViewWidth &&
						T >= d.TerminalTabsListSizes.NarrowViewWidth
							? ((T = d.TerminalTabsListSizes.NarrowViewWidth),
								this.a.resizeView(this.n, T))
							: T >= d.TerminalTabsListSizes.MidpointViewWidth &&
								T < d.TerminalTabsListSizes.WideViewMinimumWidth &&
								((T = d.TerminalTabsListSizes.WideViewMinimumWidth),
								this.a.resizeView(this.n, T)),
							this.rerenderTabs();
						const P =
							this.G === t.Orientation.VERTICAL
								? o.TerminalStorageKeys.TabsListWidthVertical
								: o.TerminalStorageKeys.TabsListWidthHorizontal;
						this.O.store(P, T, n.StorageScope.PROFILE, n.StorageTarget.USER);
					}
					ab(T) {
						this.D(this.a.onDidSashReset(() => this.W())),
							this.D(this.a.onDidSashChange(() => this.Y())),
							this.R() && this.bb(),
							this.a.addView(
								{
									element: T,
									layout: (P) =>
										this.J.groups.forEach((k) => k.layout(P, this.r || 0)),
									minimumSize: 120,
									maximumSize: Number.POSITIVE_INFINITY,
									onDidChange: () => i.$1c.None,
									priority: t.LayoutPriority.High,
								},
								t.Sizing.Distribute,
								this.q,
							),
							this.R() && this.cb();
					}
					bb() {
						this.a.addView(
							{
								element: this.g,
								layout: (T) => this.h.layout(this.r || 0, T),
								minimumSize: d.TerminalTabsListSizes.NarrowViewWidth,
								maximumSize: d.TerminalTabsListSizes.MaximumWidth,
								onDidChange: () => i.$1c.None,
								priority: t.LayoutPriority.Low,
							},
							t.Sizing.Distribute,
							this.n,
						),
							this.rerenderTabs();
					}
					rerenderTabs() {
						this.eb(), this.h.refresh();
					}
					cb() {
						let T;
						this.j = [
							this.a.sashes[0].onDidStart((P) => {
								T = m.$igb(
									m.getWindow(this.a.el),
									() => {
										this.rerenderTabs();
									},
									100,
								);
							}),
							this.a.sashes[0].onDidEnd((P) => {
								T.dispose();
							}),
						];
					}
					db() {
						this.j && ((0, i.$Vc)(this.j), (this.j = void 0));
					}
					eb() {
						const T =
							this.f.clientWidth > d.TerminalTabsListSizes.MidpointViewWidth;
						this.g.classList.toggle("has-text", T), this.z.set(!T);
					}
					layout(T, P) {
						(this.r = P),
							(this.s = T),
							this.a.layout(T),
							this.R() && this.a.resizeView(this.n, this.U()),
							this.eb();
					}
					fb(T, P) {
						this.D(
							m.$0fb(this.g, "mouseleave", async (k) => {
								this.F.set(!1), this.S(), k.stopPropagation();
							}),
						),
							this.D(
								m.$0fb(this.g, "mouseenter", async (k) => {
									this.F.set(!0), k.stopPropagation();
								}),
							),
							this.D(
								m.$0fb(P, "mousedown", async (k) => {
									const L = this.J.activeInstance;
									if (this.J.instances.length > 0 && L) {
										const D = await L.handleMouseEvent(k, this.u);
										typeof D == "object" &&
											D.cancelContextMenu &&
											(this.t = !0);
									}
								}),
							),
							this.D(
								m.$0fb(P, "contextmenu", (k) => {
									this.I.config.rightClickBehavior === "nothing" &&
										!k.shiftKey &&
										(this.t = !0),
										P.focus(),
										this.t ||
											(0, p.$zUc)(
												m.getWindow(P),
												k,
												this.J.activeInstance,
												this.u,
												this.M,
											),
										k.preventDefault(),
										k.stopImmediatePropagation(),
										(this.t = !1);
								}),
							),
							this.D(
								m.$0fb(this.g, "contextmenu", (k) => {
									if (
										(this.I.config.rightClickBehavior === "nothing" &&
											!k.shiftKey &&
											(this.t = !0),
										!this.t)
									) {
										const D = this.h.getFocus().length === 0;
										D || (this.J.lastAccessedMenu = "tab-list");
										const M = this.h.getSelectedElements(),
											N = this.h.getFocusedElements()?.[0];
										N &&
											(M.splice(
												M.findIndex((A) => A.instanceId === N.instanceId),
												1,
											),
											M.unshift(N)),
											(0, p.$zUc)(
												m.getWindow(this.g),
												k,
												M,
												D ? this.y : this.w,
												this.M,
												D ? this.gb() : void 0,
											);
									}
									k.preventDefault(),
										k.stopImmediatePropagation(),
										(this.t = !1);
								}),
							),
							this.D(
								m.$0fb(P.ownerDocument, "keydown", (k) => {
									P.classList.toggle("alt-active", !!k.altKey);
								}),
							),
							this.D(
								m.$0fb(P.ownerDocument, "keyup", (k) => {
									P.classList.toggle("alt-active", !!k.altKey);
								}),
							),
							this.D(
								m.$0fb(T, "keyup", (k) => {
									k.keyCode === 27 && k.stopPropagation();
								}),
							),
							this.D(
								m.$0fb(this.g, m.$$gb.FOCUS_IN, () => {
									this.C.set(!0);
								}),
							),
							this.D(
								m.$0fb(this.g, m.$$gb.FOCUS_OUT, () => {
									this.C.set(!1);
								}),
							);
					}
					gb() {
						return [
							new r.$tj(),
							this.N.inspect(c.TerminalSettingId.TabsLocation).userValue ===
							"left"
								? new r.$rj(
										"moveRight",
										(0, g.localize)(10154, null),
										void 0,
										void 0,
										async () => {
											this.N.updateValue(
												c.TerminalSettingId.TabsLocation,
												"right",
											);
										},
									)
								: new r.$rj(
										"moveLeft",
										(0, g.localize)(10155, null),
										void 0,
										void 0,
										async () => {
											this.N.updateValue(
												c.TerminalSettingId.TabsLocation,
												"left",
											);
										},
									),
							new r.$rj(
								"hideTabs",
								(0, g.localize)(10156, null),
								void 0,
								void 0,
								async () => {
									this.N.updateValue(c.TerminalSettingId.TabsEnabled, !1);
								},
							),
						];
					}
					setEditable(T) {
						T || this.h.domFocus(), this.h.refresh(!1);
					}
					focusTabs() {
						if (!this.R()) return;
						this.C.set(!0);
						const T = this.h.getSelection();
						this.h.domFocus(), T && this.h.setFocus(T);
					}
					focus() {
						if (
							this.H.connectionState === C.TerminalConnectionState.Connected
						) {
							this.hb();
							return;
						}
						const T = this.f.ownerDocument.activeElement;
						T &&
							this.D(
								this.H.onDidChangeConnectionState(() => {
									m.$Kgb(T) && this.hb();
								}),
							);
					}
					focusHover() {
						if (this.R()) {
							this.h.focusHover();
							return;
						}
						const T = this.J.activeInstance;
						T &&
							this.P.showHover(
								{ ...(0, b.$ZUc)(T), target: this.b, trapFocus: !0 },
								!0,
							);
					}
					hb() {
						this.J.activeInstance?.focusWhenReady();
					}
				};
				(e.$4Uc = S),
					(e.$4Uc = S =
						Ne(
							[
								j(1, C.$iIb),
								j(2, C.$jIb),
								j(3, C.$lIb),
								j(4, E.$Li),
								j(5, h.$Xxb),
								j(6, w.$gj),
								j(7, u.$YX),
								j(8, n.$lq),
								j(9, a.$6j),
								j(10, s.$Uyb),
								j(11, l.$0zb),
							],
							S,
						));
			},
		),
		