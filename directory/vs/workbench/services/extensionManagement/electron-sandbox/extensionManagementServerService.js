import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/network.js';
import '../common/extensionManagement.js';
import '../../remote/common/remoteAgentService.js';
import '../../../../platform/ipc/electron-sandbox/services.js';
import '../../../../platform/instantiation/common/extensions.js';
import './remoteExtensionManagementService.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './nativeExtensionManagementService.js';
import '../../../../base/common/lifecycle.js';
define(
			de[4392],
			he([1, 0, 4, 23, 157, 143, 230, 20, 4391, 73, 5, 3781, 3]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*network*/,
 w /*extensionManagement*/,
 E /*remoteAgentService*/,
 C /*services*/,
 d /*extensions*/,
 m /*remoteExtensionManagementService*/,
 r /*label*/,
 u /*instantiation*/,
 a /*nativeExtensionManagementService*/,
 h /*lifecycle*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Sdd = void 0);
				let c = class extends h.$1c {
					constructor(g, p, o, f) {
						super(),
							(this.remoteExtensionManagementServer = null),
							(this.webExtensionManagementServer = null);
						const b = this.D(
							f.createInstance(a.$Rdd, g.getChannel("extensions")),
						);
						this.localExtensionManagementServer = {
							extensionManagementService: b,
							id: "local",
							label: (0, t.localize)(12314, null),
						};
						const s = p.getConnection();
						if (s) {
							const l = f.createInstance(
								m.$Qdd,
								s.getChannel("extensions"),
								this.localExtensionManagementServer,
							);
							this.remoteExtensionManagementServer = {
								id: "remote",
								extensionManagementService: l,
								get label() {
									return (
										o.getHostLabel(i.Schemas.vscodeRemote, s.remoteAuthority) ||
										(0, t.localize)(12315, null)
									);
								},
							};
						}
					}
					getExtensionManagementServer(g) {
						if (g.location.scheme === i.Schemas.file)
							return this.localExtensionManagementServer;
						if (
							this.remoteExtensionManagementServer &&
							g.location.scheme === i.Schemas.vscodeRemote
						)
							return this.remoteExtensionManagementServer;
						throw new Error(`Invalid Extension ${g.location}`);
					}
					getExtensionInstallLocation(g) {
						return this.getExtensionManagementServer(g) ===
							this.remoteExtensionManagementServer
							? w.ExtensionInstallLocation.Remote
							: w.ExtensionInstallLocation.Local;
					}
				};
				(e.$Sdd = c),
					(e.$Sdd = c =
						Ne([j(0, C.$Vbd), j(1, E.$$m), j(2, r.$3N), j(3, u.$Li)], c)),
					(0, d.$lK)(w.$EQb, c, d.InstantiationType.Delayed);
			},
		),
		