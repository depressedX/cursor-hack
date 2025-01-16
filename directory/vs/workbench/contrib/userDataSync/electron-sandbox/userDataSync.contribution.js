define(
			de[3795],
			he([1, 0, 55, 150, 230, 11, 4, 113, 22, 110, 40, 522, 23, 305, 3]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let g = class extends n.$1c {
					static {
						this.ID = "workbench.contrib.userDataSyncServices";
					}
					constructor(o, f) {
						super(),
							f.registerChannel(
								"userDataSyncUtil",
								c.ProxyChannel.fromService(o, this.B),
							);
					}
				};
				(g = Ne([j(0, i.$8Rb), j(1, w.$Vbd)], g)),
					(0, t.$s6)(g.ID, g, t.WorkbenchPhase.BlockStartup),
					(0, E.$4X)(
						class extends E.$3X {
							constructor() {
								super({
									id: "workbench.userData.actions.openSyncBackupsFolder",
									title: (0, C.localize2)(11364, "Open Local Backups Folder"),
									category: a.$Pxc,
									menu: {
										id: E.$XX.CommandPalette,
										when: a.$Rxc.notEqualsTo(i.SyncStatus.Uninitialized),
									},
								});
							}
							async run(o) {
								const f = o.get(d.$Ti).userDataSyncHome,
									b = o.get(r.$y7c),
									s = o.get(m.$ll),
									l = o.get(u.$4N);
								if (await s.exists(f)) {
									const y = await s.resolve(f),
										$ =
											y.children && y.children[0] ? y.children[0].resource : f;
									return b.showItemInFolder(
										$.with({ scheme: h.Schemas.file }).fsPath,
									);
								} else l.info((0, C.localize)(11361, null));
							}
						},
					),
					(0, E.$4X)(
						class extends E.$3X {
							constructor() {
								super(a.$2xc);
							}
							async run(o) {
								const f = o.get(a.$Nxc),
									b = o.get(u.$4N),
									s = o.get(r.$y7c),
									l = await f.downloadSyncActivity();
								l &&
									b.prompt(u.Severity.Info, (0, C.localize)(11362, null), [
										{
											label: (0, C.localize)(11363, null),
											run: () => s.showItemInFolder(l.fsPath),
										},
									]);
							}
						},
					);
			},
		),
		