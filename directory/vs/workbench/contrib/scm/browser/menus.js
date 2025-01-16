define(
			de[3130],
			he([1, 0, 24, 6, 3, 4, 92, 11, 8, 5, 128, 258, 652]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$SPc = e.$RPc = e.$QPc = e.$PPc = void 0);
				function h(b, s) {
					return b.id === s.id;
				}
				const c = new w.$Zc();
				d.$ZX.onDidChangeMenu((b) => {
					if (b.has(d.$XX.SCMTitle)) {
						c.clear();
						for (const s of d.$ZX.getMenuItems(d.$XX.SCMTitle))
							c.add(d.$ZX.appendMenuItem(d.$XX.SCMSourceControlInline, s));
					}
				});
				let n = class {
					get actions() {
						return this.c;
					}
					get secondaryActions() {
						return this.d;
					}
					constructor(s, l) {
						(this.c = []),
							(this.d = []),
							(this.f = new i.$re()),
							(this.onDidChangeTitle = this.f.event),
							(this.g = new w.$Zc()),
							(this.menu = s.createMenu(d.$XX.SCMTitle, l)),
							this.g.add(this.menu),
							this.menu.onDidChange(this.h, this, this.g),
							this.h();
					}
					h() {
						const s = [],
							l = [];
						(0, C.$Kyb)(
							this.menu,
							{ shouldForwardArgs: !0 },
							{ primary: s, secondary: l },
						),
							!((0, t.$yb)(s, this.c, h) && (0, t.$yb)(l, this.d, h)) &&
								((this.c = s), (this.d = l), this.f.fire());
					}
					dispose() {
						this.g.dispose();
					}
				};
				(e.$PPc = n), (e.$PPc = n = Ne([j(0, d.$YX), j(1, m.$6j)], n));
				class g {
					get resourceGroupMenu() {
						return (
							this.c ||
								(this.c = this.i.createMenu(
									d.$XX.SCMResourceGroupContext,
									this.h,
								)),
							this.c
						);
					}
					get resourceFolderMenu() {
						return (
							this.d ||
								(this.d = this.i.createMenu(
									d.$XX.SCMResourceFolderContext,
									this.h,
								)),
							this.d
						);
					}
					constructor(s, l) {
						(this.h = s), (this.i = l);
					}
					getResourceMenu(s) {
						if (typeof s.contextValue > "u")
							return (
								this.f ||
									(this.f = this.i.createMenu(
										d.$XX.SCMResourceContext,
										this.h,
									)),
								this.f
							);
						this.g || (this.g = new Map());
						let l = this.g.get(s.contextValue);
						if (!l) {
							const y = this.h.createOverlay([
									["scmResourceState", s.contextValue],
								]),
								$ = this.i.createMenu(d.$XX.SCMResourceContext, y);
							(l = {
								menu: $,
								dispose() {
									$.dispose();
								},
							}),
								this.g.set(s.contextValue, l);
						}
						return l.menu;
					}
					dispose() {
						this.c?.dispose(),
							this.d?.dispose(),
							this.f?.dispose(),
							this.g &&
								((0, w.$Vc)(this.g.values()),
								this.g.clear(),
								(this.g = void 0));
					}
				}
				let p = class {
					get repositoryContextMenu() {
						return (
							this.f ||
								((this.f = this.j.createMenu(d.$XX.SCMSourceControl, this.c)),
								this.h.add(this.f)),
							this.f
						);
					}
					get historyProviderMenu() {
						return (
							this.i.historyProvider.get() &&
								!this.g &&
								((this.g = new o(this.c, this.j)), this.h.add(this.g)),
							this.g
						);
					}
					constructor(s, l, y, $) {
						(this.i = s),
							(this.j = $),
							(this.d = new Map()),
							(this.h = new w.$Zc()),
							(this.c = l.createOverlay([
								["scmProvider", s.contextValue],
								["scmProviderRootUri", s.rootUri?.toString()],
								["scmProviderHasRootUri", !!s.rootUri],
							]));
						const v = new u.$Ki([m.$6j, this.c]);
						(y = y.createChild(v, this.h)),
							(this.titleMenu = y.createInstance(n)),
							this.h.add(this.titleMenu),
							(this.repositoryMenu = $.createMenu(
								d.$XX.SCMSourceControlInline,
								this.c,
							)),
							this.h.add(this.repositoryMenu),
							s.onDidChangeResourceGroups(this.l, this, this.h),
							this.l();
					}
					getResourceGroupMenu(s) {
						return this.k(s).resourceGroupMenu;
					}
					getResourceMenu(s) {
						return this.k(s.resourceGroup).getResourceMenu(s);
					}
					getResourceFolderMenu(s) {
						return this.k(s).resourceFolderMenu;
					}
					k(s) {
						let l = this.d.get(s);
						if (!l) {
							const y = this.c.createOverlay([
								["scmResourceGroup", s.id],
								[
									"multiDiffEditorEnableViewChanges",
									s.multiDiffEditorEnableViewChanges,
								],
							]);
							(l = new g(y, this.j)), this.d.set(s, l);
						}
						return l;
					}
					l() {
						for (const s of this.d.keys())
							this.i.groups.includes(s) ||
								(this.d.get(s)?.dispose(), this.d.delete(s));
					}
					dispose() {
						this.h.dispose(), this.d.forEach((s) => s.dispose());
					}
				};
				(e.$QPc = p),
					(e.$QPc = p = Ne([j(1, m.$6j), j(2, r.$Li), j(3, d.$YX)], p));
				let o = class {
					constructor(s, l) {
						(this.g = s),
							(this.h = l),
							(this.c = new Map()),
							(this.d = new Map()),
							(this.f = new w.$Zc());
					}
					getHistoryItemMenu(s) {
						return this.i(s);
					}
					getHistoryItemMenu2(s) {
						return this.j(s);
					}
					getHistoryItemGroupMenu(s) {
						return s.direction === "incoming"
							? this.h.createMenu(d.$XX.SCMIncomingChanges, this.g)
							: this.k(d.$XX.SCMOutgoingChanges, s);
					}
					getHistoryItemGroupContextMenu(s) {
						return s.direction === "incoming"
							? this.h.createMenu(d.$XX.SCMIncomingChangesContext, this.g)
							: this.k(d.$XX.SCMOutgoingChangesContext, s);
					}
					i(s) {
						let l = this.c.get(s);
						if (!l) {
							let y;
							s.historyItemGroup.direction === "incoming"
								? (y =
										s.type === "allChanges"
											? d.$XX.SCMIncomingChangesAllChangesContext
											: d.$XX.SCMIncomingChangesHistoryItemContext)
								: (y =
										s.type === "allChanges"
											? d.$XX.SCMOutgoingChangesAllChangesContext
											: d.$XX.SCMOutgoingChangesHistoryItemContext);
							const $ = this.g.createOverlay([
								["scmHistoryItemFileCount", s.statistics?.files ?? 0],
							]);
							(l = this.h.createMenu(y, $)), this.c.set(s, l);
						}
						return l;
					}
					j(s) {
						let l = this.d.get(s);
						return (
							l ||
								((l = this.h.createMenu(d.$XX.SCMChangesContext, this.g)),
								this.d.set(s, l)),
							l
						);
					}
					k(s, l) {
						const y = this.g.createOverlay([
							[
								"scmHistoryItemGroupHasRemote",
								!!l.repository.provider.historyProvider
									.get()
									?.currentHistoryItemGroup.get()?.remote,
							],
						]);
						return this.h.createMenu(s, y);
					}
					dispose() {
						this.f.dispose();
					}
				};
				(e.$RPc = o), (e.$RPc = o = Ne([j(0, m.$6j), j(1, d.$YX)], o));
				let f = class {
					constructor(s, l) {
						(this.f = l),
							(this.c = new w.$Zc()),
							(this.d = new Map()),
							(this.titleMenu = l.createInstance(n)),
							s.onDidRemoveRepository(this.g, this, this.c);
					}
					g(s) {
						this.d.get(s.provider)?.dispose(), this.d.delete(s.provider);
					}
					getRepositoryMenus(s) {
						let l = this.d.get(s);
						if (!l) {
							const y = this.f.createInstance(p, s);
							(l = {
								menus: y,
								dispose: () => {
									y.dispose(), this.d.delete(s);
								},
							}),
								this.d.set(s, l);
						}
						return l.menus;
					}
					dispose() {
						this.c.dispose();
					}
				};
				(e.$SPc = f),
					(e.$SPc = f = Ne([j(0, a.$c7), j(1, r.$Li)], f)),
					d.$ZX.appendMenuItem(d.$XX.SCMResourceContext, {
						title: (0, E.localize)(8992, null),
						submenu: d.$XX.SCMResourceContextShare,
						group: "45_share",
						order: 3,
					});
			},
		),
		