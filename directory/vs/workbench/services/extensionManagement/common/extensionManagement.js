import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../../../base/common/network.js';
import '../../../../nls.js';
define(de[157], he([1, 0, 5, 119, 23, 4]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$JQb =
					e.$IQb =
					e.EnablementState =
					e.$HQb =
					e.$GQb =
					e.$FQb =
					e.$EQb =
					e.ExtensionInstallLocation =
					e.$DQb =
						void 0),
				(e.$DQb = (0, t.$Ni)(i.$Hp));
			var C;
			(function (m) {
				(m[(m.Local = 1)] = "Local"),
					(m[(m.Remote = 2)] = "Remote"),
					(m[(m.Web = 3)] = "Web");
			})(C || (e.ExtensionInstallLocation = C = {})),
				(e.$EQb = (0, t.$Mi)("extensionManagementServerService")),
				(e.$FQb = w.$7g
					.asBrowserUri(
						"vs/workbench/services/extensionManagement/common/media/defaultIcon.png",
					)
					.toString(!0)),
				(e.$GQb = (0, t.$Ni)(e.$DQb)),
				(e.$HQb = {
					id: "extensions",
					order: 30,
					title: (0, E.localize)(12289, null),
					type: "object",
				});
			var d;
			(function (m) {
				(m[(m.DisabledByTrustRequirement = 0)] = "DisabledByTrustRequirement"),
					(m[(m.DisabledByExtensionKind = 1)] = "DisabledByExtensionKind"),
					(m[(m.DisabledByEnvironment = 2)] = "DisabledByEnvironment"),
					(m[(m.EnabledByEnvironment = 3)] = "EnabledByEnvironment"),
					(m[(m.DisabledByVirtualWorkspace = 4)] =
						"DisabledByVirtualWorkspace"),
					(m[(m.DisabledByExtensionDependency = 5)] =
						"DisabledByExtensionDependency"),
					(m[(m.DisabledGlobally = 6)] = "DisabledGlobally"),
					(m[(m.DisabledWorkspace = 7)] = "DisabledWorkspace"),
					(m[(m.EnabledGlobally = 8)] = "EnabledGlobally"),
					(m[(m.EnabledWorkspace = 9)] = "EnabledWorkspace");
			})(d || (e.EnablementState = d = {})),
				(e.$IQb = (0, t.$Mi)("extensionEnablementService")),
				(e.$JQb = (0, t.$Mi)("IWebExtensionsScannerService"));
		}),
		