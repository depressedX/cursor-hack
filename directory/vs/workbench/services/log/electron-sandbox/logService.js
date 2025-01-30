import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/log/common/log.js';
import '../../../../base/common/lifecycle.js';
import '../../../../nls.js';
import '../common/logConstants.js';
import '../../../../platform/log/common/logService.js';
import '../../../../platform/tracing/common/logger.js';
define(
			de[3461],
			he([1, 0, 34, 3, 4, 705, 1621, 2871]),
			function (ce /*require*/,
 e /*exports*/,
 t /*log*/,
 i /*lifecycle*/,
 w /*nls*/,
 E /*logConstants*/,
 C /*logService*/,
 d /*logger*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ucd = void 0);
				class m extends C.$_eb {
					constructor(u, a) {
						const h = new i.$Zc(),
							c = u.createLogger(a.logFile, {
								id: E.$9Sb,
								name: (0, w.localize)(12569, null),
							}),
							n = h.add(new d.$U8c(c));
						let g;
						a.isExtensionDevelopment && a.extensionTestsLocationURI
							? (g = u.createConsoleMainLogger())
							: (g = new t.$qk(n.getLevel())),
							super(n, [g]),
							this.D(h);
					}
				}
				e.$Ucd = m;
			},
		),
		