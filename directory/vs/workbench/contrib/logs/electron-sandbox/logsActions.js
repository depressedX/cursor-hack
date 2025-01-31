import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/actions.js';
import '../../../../nls.js';
import '../../../../platform/native/common/native.js';
import '../../../services/environment/electron-sandbox/environmentService.js';
import '../../../../platform/files/common/files.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/network.js';
define(
			de[3288],
			he([1, 0, 50, 4, 110, 151, 22, 19, 23]),
			function (ce /*require*/,
 e /*exports*/,
 t /*actions*/,
 i /*nls*/,
 w /*native*/,
 E /*environmentService*/,
 C /*files*/,
 d /*resources*/,
 m /*network*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Sfd = e.$Rfd = void 0),
					(i = mt(i));
				let r = class extends t.$rj {
					static {
						this.ID = "workbench.action.openLogsFolder";
					}
					static {
						this.TITLE = i.localize2(7437, "Open Logs Folder");
					}
					constructor(h, c, n, g) {
						super(h, c), (this.a = n), (this.b = g);
					}
					run() {
						return this.b.showItemInFolder(
							(0, d.$nh)(this.a.logsHome, "main.log").with({
								scheme: m.Schemas.file,
							}).fsPath,
						);
					}
				};
				(e.$Rfd = r), (e.$Rfd = r = Ne([j(2, E.$ucd), j(3, w.$y7c)], r));
				let u = class extends t.$rj {
					static {
						this.ID = "workbench.action.openExtensionLogsFolder";
					}
					static {
						this.TITLE = i.localize2(7438, "Open Extension Logs Folder");
					}
					constructor(h, c, n, g, p) {
						super(h, c), (this.a = n), (this.b = g), (this.c = p);
					}
					async run() {
						const h = await this.b.resolve(this.a.extHostLogsPath);
						if (h.children && h.children[0])
							return this.c.showItemInFolder(
								h.children[0].resource.with({ scheme: m.Schemas.file }).fsPath,
							);
					}
				};
				(e.$Sfd = u),
					(e.$Sfd = u = Ne([j(2, E.$ucd), j(3, C.$ll), j(4, w.$y7c)], u));
			},
		)
