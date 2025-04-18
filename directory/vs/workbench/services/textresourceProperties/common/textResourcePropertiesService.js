import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/network.js';
import '../../../../platform/storage/common/storage.js';
import '../../environment/common/environmentService.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../remote/common/remoteAgentService.js';
define(
			de[3708],
			he([1, 0, 10, 125, 12, 23, 21, 78, 20, 143]),
			function (ce /*require*/,
 e /*exports*/,
 t /*configuration*/,
 i /*textResourceConfiguration*/,
 w /*platform*/,
 E /*network*/,
 C /*storage*/,
 d /*environmentService*/,
 m /*extensions*/,
 r /*remoteAgentService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Qvc = void 0);
				let u = class {
					constructor(h, c, n, g) {
						(this.b = h),
							(this.c = n),
							(this.d = g),
							(this.a = null),
							c.getEnvironment().then((p) => (this.a = p));
					}
					getEOL(h, c) {
						const n = this.b.getValue("files.eol", {
							overrideIdentifier: c,
							resource: h,
						});
						if (n && typeof n == "string" && n !== "auto") return n;
						const g = this.e(h);
						return g === w.OperatingSystem.Linux ||
							g === w.OperatingSystem.Macintosh
							? `
`
							: `\r
`;
					}
					e(h) {
						let c = w.OS;
						const n = this.c.remoteAuthority;
						if (n && h && h.scheme !== E.Schemas.file) {
							const g = `resource.authority.os.${n}`;
							(c = this.a
								? this.a.os
								: this.d.getNumber(g, C.StorageScope.WORKSPACE, w.OS)),
								this.d.store(
									g,
									c,
									C.StorageScope.WORKSPACE,
									C.StorageTarget.MACHINE,
								);
						}
						return c;
					}
				};
				(e.$Qvc = u),
					(e.$Qvc = u =
						Ne([j(0, t.$gj), j(1, r.$$m), j(2, d.$r8), j(3, C.$lq)], u)),
					(0, m.$lK)(i.$YO, u, m.InstantiationType.Delayed);
			},
		)
