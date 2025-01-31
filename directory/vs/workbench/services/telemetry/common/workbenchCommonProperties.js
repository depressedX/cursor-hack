import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/commonProperties.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/telemetry/common/telemetryUtils.js';
define(
			de[3656],
			he([1, 0, 21, 1640, 32, 269]),
			function (ce /*require*/,
 e /*exports*/,
 t /*storage*/,
 i /*commonProperties*/,
 w /*telemetry*/,
 E /*telemetryUtils*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Ndd = C);
				function C(d, m, r, u, a, h, c, n, g, p, o, f) {
					const b = (0, i.$Op)(m, r, o.arch, u, a, h, c, n, g, p),
						s = d.get(w.$pm, t.StorageScope.APPLICATION),
						l = d.get(w.$qm, t.StorageScope.APPLICATION);
					return (
						(b["common.version.shell"] = o.versions?.electron),
						(b["common.version.renderer"] = o.versions?.chrome),
						(b["common.firstSessionDate"] = s),
						(b["common.lastSessionDate"] = l || ""),
						(b["common.isNewSession"] = l ? "0" : "1"),
						(b["common.remoteAuthority"] = (0, E.$3p)(f)),
						(b["common.cli"] = !!o.env.VSCODE_CLI),
						b
					);
				}
			},
		)
