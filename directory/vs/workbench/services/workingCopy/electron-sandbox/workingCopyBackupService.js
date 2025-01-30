import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../common/workingCopyBackupService.js';
import '../../../../base/common/uri.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../common/workingCopyBackup.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/log/common/log.js';
import '../../environment/electron-sandbox/environmentService.js';
import '../../../common/contributions.js';
import '../../lifecycle/common/lifecycle.js';
import './workingCopyBackupTracker.js';
define(
			de[3916],
			he([1, 0, 4, 1912, 9, 20, 335, 22, 34, 151, 55, 52, 3915]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*workingCopyBackupService*/,
 w /*uri*/,
 E /*extensions*/,
 C /*workingCopyBackup*/,
 d /*files*/,
 m /*log*/,
 r /*environmentService*/,
 u /*contributions*/,
 a /*lifecycle*/,
 h /*workingCopyBackupTracker*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Xdd = void 0);
				let c = class extends i.$w5c {
					constructor(g, p, o, f) {
						super(
							g.backupPath
								? w.URI.file(g.backupPath).with({
										scheme: g.userRoamingDataHome.scheme,
									})
								: void 0,
							p,
							o,
						),
							(this.c = f),
							this.j();
					}
					j() {
						this.D(
							this.c.onWillShutdown((g) =>
								g.join(this.joinBackups(), {
									id: "join.workingCopyBackups",
									label: (0, t.localize)(13154, null),
								}),
							),
						);
					}
				};
				(e.$Xdd = c),
					(e.$Xdd = c =
						Ne([j(0, r.$ucd), j(1, d.$ll), j(2, m.$ik), j(3, a.$n6)], c)),
					(0, E.$lK)(C.$WO, c, E.InstantiationType.Eager),
					(0, u.$s6)(h.$Wdd.ID, h.$Wdd, u.WorkbenchPhase.BlockStartup);
			},
		),
		