define(
			de[4121],
			he([
				1, 0, 30, 1056, 96, 21, 39, 5, 6, 35, 51, 123, 40, 8, 53, 28, 60, 969,
				7, 3, 4120, 1035, 10, 45, 31, 41, 1140, 1139, 1854,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9uc = void 0);
				let I = class extends o.$fEb {
					get dimension() {
						return this.g.dimensionOfEntireSidebar;
					}
					constructor(P, k, L, D, M, N, A, R, O, B, U, z, F) {
						super(w.Parts.SIDEBAR_PART, P, k),
							(this.r = k),
							(this.s = L),
							(this.t = D),
							(this.u = M),
							(this.y = N),
							(this.J = A),
							(this.L = R),
							(this.M = O),
							(this.N = B),
							(this.O = U),
							(this.P = z),
							(this.Q = F),
							(this.partId = w.Parts.SIDEBAR_PART),
							(this.a = this.D(new m.$re())),
							(this.onDidVisibilityChange = this.a.event),
							(this.b = this.D(new m.$re())),
							(this.c = this.D(new m.$re())),
							(this.minimumWidth = 170),
							(this.maximumWidth = Number.POSITIVE_INFINITY),
							(this.minimumHeight = 77),
							(this.maximumHeight = Number.POSITIVE_INFINITY),
							(this.Y = this.D(new m.$re()));
						const x = N.getDefaultViewContainer(
							p.ViewContainerLocation.Sidebar,
						).id;
						([this.g, this.j] = (0, l.$Wuc)(this.r, this.S(), x, this.h)),
							(this.m = t.$Io.as(i.$4Sb.Viewlets)),
							L.registerPart(this),
							this.R();
					}
					R() {
						this.D(
							this.y.onDidChangeViewContainers(({ added: P, removed: k }) =>
								this.U(P, k),
							),
						);
					}
					S() {
						return this.y
							.getViewContainersByLocation(p.ViewContainerLocation.Sidebar)
							.filter(
								(L) =>
									!(
										L &&
										L.hideIfEmpty &&
										this.y.getViewContainerModel(L).activeViewDescriptors
											.length === 0
									),
							);
					}
					U(P, k) {
						k
							.filter(
								({ location: L }) => L === p.ViewContainerLocation.Sidebar,
							)
							.forEach(({ container: L }) => this.W(L)),
							this.X(
								P.filter(
									({ location: L }) => L === p.ViewContainerLocation.Sidebar,
								).map(({ container: L }) => L),
							);
					}
					W(P) {
						this.j("viewContainers", new l.$Vuc(this.S()));
					}
					X(P) {
						this.j("viewContainers", new l.$Vuc(this.S())),
							setTimeout(() => {
								this.j("viewContainers", new l.$Vuc(this.S())),
									setTimeout(() => {
										this.j("viewContainers", new l.$Vuc(this.S()));
									}, 1e4);
							}, 1e3);
					}
					updateStyles() {
						super.updateStyles();
						const P = (0, g.$wg)(this.getContainer());
						(P.style.backgroundColor = this.w(a.$wGb) || ""),
							(P.style.color = this.w(a.$xGb) || "");
						const k = this.w(a.$yGb) || this.w(u.$OP),
							L = this.s.getSideBarPosition() === w.Position.LEFT;
						(P.style.borderRightWidth = k && L ? "1px" : ""),
							(P.style.borderRightStyle = k && L ? "solid" : ""),
							(P.style.borderRightColor = (L && k) || ""),
							(P.style.borderLeftWidth = k && !L ? "1px" : ""),
							(P.style.borderLeftStyle = k && !L ? "solid" : ""),
							(P.style.borderLeftColor = L ? "" : k || ""),
							(P.style.outlineColor = this.w(a.$BGb) ?? ""),
							this.j("theme", this.h);
					}
					create(P, k) {
						(this.element = P),
							this.f && this.f.dispose(),
							(this.f = (0, s.$8uc)(
								this.element,
								this.g,
								this.j,
								this.u,
								this.y,
								this.J,
								this.M,
								this.m,
								this.r,
								this.N,
								this.O,
								this.P,
								this.openPaneComposite.bind(this),
								() => {
									this.Q.info(
										`To hide the sidebar, use the icon in the top right, or press ${this.J.lookupKeybinding("workbench.action.toggleSidebarVisibility")?.getLabel()}.`,
									);
								},
							)),
							this.updateStyles();
					}
					getContainer() {
						return this.element;
					}
					toJSON() {
						return { type: w.Parts.SIDEBAR_PART };
					}
					layout(P, k, L, D) {
						this.s.isVisible(w.Parts.SIDEBAR_PART) &&
							this.j("dimensionOfEntireSidebar", new f.$pgb(P, k));
					}
					get onDidPaneCompositeOpen() {
						return m.Event.map(this.b.event, (P) => P.composite);
					}
					get onDidPaneCompositeClose() {
						return this.c.event;
					}
					async openPaneComposite(P, k) {
						return (
							this.s.isVisible(w.Parts.SIDEBAR_PART) ||
								this.s.setPartHidden(!1, w.Parts.SIDEBAR_PART),
							this.j("showComposite", !0),
							P && this.j("activeViewContainerID", P),
							k && this.g.activeComposite?.composite.focus(),
							this.g.activeComposite &&
								this.b.fire({
									composite: this.g.activeComposite.composite,
									focus: k ?? !1,
								}),
							this.g.activeComposite?.composite
						);
					}
					getActivePaneComposite() {
						return this.g.activeComposite?.composite;
					}
					getPaneComposite(P) {
						return this.getPaneComposites().filter((k) => k.id === P)[0];
					}
					getPaneComposites() {
						return this.m
							.getPaneComposites()
							.sort((P, k) =>
								typeof P.order != "number"
									? -1
									: typeof k.order != "number"
										? 1
										: P.order - k.order,
							);
					}
					getProgressIndicator(P) {
						const k = this.g.activeComposite;
						if (P === k?.composite.getId()) return k.progress;
					}
					getLastActivePaneCompositeId() {
						return this.g.activeViewContainerID;
					}
					get onDidChange() {
						return this.Y.event;
					}
					hideActivePaneComposite() {
						this.s.isVisible(w.Parts.SIDEBAR_PART) &&
							this.s.setPartHidden(!0, w.Parts.SIDEBAR_PART),
							this.g.activeComposite &&
								this.c.fire(this.g.activeComposite.composite),
							this.j("showComposite", !1),
							this.j("activeComposite", void 0);
					}
					getPinnedPaneCompositeIds() {
						return this.getPaneComposites().map((P) => P.id);
					}
					getVisiblePaneCompositeIds() {
						return this.getPaneComposites().map((P) => P.id);
					}
					showActivity(P, k, L, D) {
						return (0, b.$Yc)(() => {});
					}
				};
				(e.$9uc = I),
					(e.$9uc = I =
						Ne(
							[
								j(0, r.$iP),
								j(1, E.$lq),
								j(2, w.$mEb),
								j(3, n.$q2),
								j(4, d.$Li),
								j(5, p.$K1),
								j(6, C.$uZ),
								j(7, y.$gj),
								j(8, c.$6j),
								j(9, $.$0zb),
								j(10, v.$ek),
								j(11, S.$7rb),
								j(12, h.$4N),
							],
							I,
						));
			},
		),
		