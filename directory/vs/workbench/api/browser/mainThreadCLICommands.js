define(
			de[4063],
			he([
				1, 0, 23, 12, 28, 9, 4, 31, 119, 2817, 154, 5, 128, 73, 34, 41, 78, 157,
				384,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					d.$fk.registerCommand("_remoteCLI.openExternal", function (s, l) {
						return s
							.get(g.$7rb)
							.open((0, w.$lg)(l) ? l : E.URI.revive(l), {
								openExternal: !0,
								allowTunneling: !0,
							});
					}),
					d.$fk.registerCommand("_remoteCLI.windowOpen", function (s, l, y) {
						const $ = s.get(d.$ek);
						return l.length
							? $.executeCommand("_files.windowOpen", l, y)
							: $.executeCommand("_files.newWindow", y);
					}),
					d.$fk.registerCommand("_remoteCLI.getSystemStatus", function (s) {
						return s.get(d.$ek).executeCommand("_issues.getSystemStatus");
					}),
					d.$fk.registerCommand(
						"_remoteCLI.manageExtensions",
						async function (s, l) {
							const y = s.get(a.$Li),
								v = s.get(o.$EQb).remoteExtensionManagementServer
									?.extensionManagementService;
							if (!v) return;
							const S = [],
								I = new (class extends n.$ok {
									g(P, k) {
										S.push(k);
									}
								})(),
								T = y.createChild(new h.$Ki([m.$Hp, v])).createInstance(b, I);
							if (l.list)
								await T.listExtensions(
									!!l.list.showVersions,
									l.list.category,
									void 0,
								);
							else {
								const P = (k) =>
									k.map((L) => ((0, w.$lg)(L) ? L : E.URI.revive(L)));
								if (Array.isArray(l.install) && l.install.length)
									try {
										await T.installExtensions(
											P(l.install),
											[],
											{ isMachineScoped: !0 },
											!!l.force,
										);
									} catch (k) {
										S.push(k.message);
									}
								if (Array.isArray(l.uninstall) && l.uninstall.length)
									try {
										await T.uninstallExtensions(
											P(l.uninstall),
											!!l.force,
											void 0,
										);
									} catch (k) {
										S.push(k.message);
									}
							}
							return S.join(`
`);
						},
					);
				let b = class extends r.$Yq {
					constructor(l, y, $, v, S, I) {
						super(l, y, $), (this.o = I);
						const T = S.remoteAuthority;
						this.n = T ? v.getHostLabel(t.Schemas.vscodeRemote, T) : void 0;
					}
					get f() {
						return this.n;
					}
					k(l) {
						return !this.o.canExecuteOnWorkspace(l) &&
							!(i.$r && this.o.canExecuteOnWeb(l))
							? (this.a.info(
									(0, C.localize)(2535, null, (0, u.$0p)(l.publisher, l.name)),
								),
								!1)
							: !0;
					}
				};
				b = Ne(
					[j(1, m.$Hp), j(2, m.$Ep), j(3, c.$3N), j(4, p.$r8), j(5, f.$JSb)],
					b,
				);
			},
		),
		