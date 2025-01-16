define(
			de[1939],
			he([
				1, 0, 4, 50, 105, 100, 96, 21, 49, 39, 5, 1326, 35, 123, 51, 40, 7, 8,
				28, 53, 60, 160, 11, 1350, 31, 92, 72, 1517,
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
				y,
				$,
				v,
				S,
				I,
			) {
				"use strict";
				var T;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Quc = void 0);
				let P = class extends $.$Ouc {
					static {
						T = this;
					}
					get preferredHeight() {
						return this.M.mainContainerDimension.height * 0.4;
					}
					get preferredWidth() {
						const L = this.getActivePaneComposite();
						if (!L) return;
						const D = L.getOptimalWidth();
						if (typeof D == "number") return Math.max(D, 300);
					}
					static {
						this.activePanelSettingsKey = "workbench.panelpart.activepanelid";
					}
					constructor(L, D, M, N, A, R, O, B, U, z, F, x, H) {
						super(
							C.Parts.PANEL_PART,
							{ hasTitle: !0 },
							T.activePanelSettingsKey,
							E.$tQb.bindTo(z),
							E.$uQb.bindTo(z),
							"panel",
							"panel",
							void 0,
							L,
							D,
							M,
							N,
							A,
							R,
							O,
							B,
							U,
							z,
							F,
							H,
						),
							(this.Oc = x),
							(this.minimumWidth = 300),
							(this.maximumWidth = Number.POSITIVE_INFINITY),
							(this.minimumHeight = 77),
							(this.maximumHeight = Number.POSITIVE_INFINITY);
					}
					updateStyles() {
						super.updateStyles();
						const L = (0, f.$wg)(this.getContainer());
						L.style.backgroundColor = this.w(c.$qFb) || "";
						const D = this.w(c.$rFb) || this.w(n.$OP) || "";
						(L.style.borderLeftColor = D),
							(L.style.borderRightColor = D),
							(L.style.borderBottomColor = D);
						const M = this.P();
						M &&
							(M.style.borderTopColor = this.w(c.$rFb) || this.w(n.$OP) || "");
					}
					Mc() {
						return {
							partContainerClass: "panel",
							pinnedViewContainersKey: "workbench.panel.pinnedPanels",
							placeholderViewContainersKey: "workbench.panel.placeholderPanels",
							viewContainersWorkspaceStateKey:
								"workbench.panel.viewContainersWorkspaceState",
							icon: !1,
							orientation: w.ActionsOrientation.HORIZONTAL,
							recomputeSizes: !0,
							activityHoverOptions: {
								position: () =>
									this.M.getPanelPosition() === C.Position.BOTTOM &&
									!this.M.isPanelMaximized()
										? l.HoverPosition.ABOVE
										: l.HoverPosition.BELOW,
							},
							fillExtraContextMenuActions: (L) => this.Qc(L),
							compositeSize: 0,
							iconSize: 16,
							overflowActionSize: 44,
							colors: (L) => ({
								activeBackgroundColor: L.getColor(c.$qFb),
								inactiveBackgroundColor: L.getColor(c.$qFb),
								activeBorderBottomColor: L.getColor(c.$uFb),
								activeForegroundColor: L.getColor(c.$sFb),
								inactiveForegroundColor: L.getColor(c.$tFb),
								badgeBackground: L.getColor(n.$1P),
								badgeForeground: L.getColor(n.$2P),
								dragAndDropBorder: L.getColor(c.$wFb),
							}),
						};
					}
					Qc(L) {
						const D = this.lc.getMenuActions(y.$XX.PanelPositionMenu, this.jc, {
								shouldForwardArgs: !0,
							}),
							M = this.lc.getMenuActions(y.$XX.PanelAlignmentMenu, this.jc, {
								shouldForwardArgs: !0,
							}),
							N = [],
							A = [];
						(0, S.$Jyb)(D, { primary: [], secondary: N }),
							(0, S.$Jyb)(M, { primary: [], secondary: A }),
							L.push(
								new i.$tj(),
								new i.$uj(
									"workbench.action.panel.position",
									(0, t.localize)(3682, null),
									N,
								),
								new i.$uj(
									"workbench.action.panel.align",
									(0, t.localize)(3683, null),
									A,
								),
								(0, i.$wj)({
									id: a.$P5b.ID,
									label: (0, t.localize)(3684, null),
									run: () => this.Oc.executeCommand(a.$P5b.ID),
								}),
							);
					}
					layout(L, D, M, N) {
						let A;
						switch (this.M.getPanelPosition()) {
							case C.Position.RIGHT:
								A = new p.$pgb(L - 1, D);
								break;
							case C.Position.TOP:
								A = new p.$pgb(L, D - 1);
								break;
							default:
								A = new p.$pgb(L, D);
								break;
						}
						super.layout(A.width, A.height, M, N);
					}
					Lc() {
						return !0;
					}
					Nc() {
						return $.CompositeBarPosition.TITLE;
					}
					toJSON() {
						return { type: C.Parts.PANEL_PART };
					}
				};
				(e.$Quc = P),
					(e.$Quc =
						P =
						T =
							Ne(
								[
									j(0, g.$4N),
									j(1, d.$lq),
									j(2, m.$Xxb),
									j(3, C.$mEb),
									j(4, r.$uZ),
									j(5, I.$Uyb),
									j(6, u.$Li),
									j(7, h.$iP),
									j(8, s.$K1),
									j(9, o.$6j),
									j(10, b.$q2),
									j(11, v.$ek),
									j(12, y.$YX),
								],
								P,
							));
			},
		),
		