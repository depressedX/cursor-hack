import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/network.js';
define(de[698], he([1, 0, 23]), function (ce /*require*/,
 e /*exports*/,
 t /*network*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Umc = i);
			function i(w) {
				const E = w.isExtensionDevelopment;
				let C = !0;
				const d = w.extensionDevelopmentLocationURI;
				if (d) for (const a of d) a.scheme !== t.Schemas.file && (C = !1);
				const m = C && typeof w.debugExtensionHost.port == "number",
					r = C && !!w.debugExtensionHost.break,
					u =
						E && !!w.extensionTestsLocationURI && !w.debugExtensionHost.debugId;
				return {
					isExtensionDevHost: E,
					isExtensionDevDebug: m,
					isExtensionDevDebugBrk: r,
					isExtensionDevTestFromCli: u,
				};
			}
		})
