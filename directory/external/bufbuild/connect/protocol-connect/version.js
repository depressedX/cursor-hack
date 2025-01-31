import '../../../../require.js';
import '../../../../exports.js';
import './headers.js';
import './query-params.js';
import '../connect-error.js';
import '../code.js';
define(
			de[1080],
			he([1, 0, 574, 1389, 213, 202]),
			function (ce /*require*/,
 e /*exports*/,
 t /*headers*/,
 i /*query-params*/,
 w /*connect-error*/,
 E /*code*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.protocolVersion = void 0),
					(e.requireProtocolVersionHeader = C),
					(e.requireProtocolVersionParam = d),
					(e.protocolVersion = "1");
				function C(m) {
					const r = m.get(t.headerProtocolVersion);
					if (r === null)
						throw new w.ConnectError(
							`missing required header: set ${t.headerProtocolVersion} to "${e.protocolVersion}"`,
							E.Code.InvalidArgument,
						);
					if (r !== e.protocolVersion)
						throw new w.ConnectError(
							`${t.headerProtocolVersion} must be "${e.protocolVersion}": got "${r}"`,
							E.Code.InvalidArgument,
						);
				}
				function d(m) {
					const r = m.get(i.paramConnectVersion);
					if (r === null)
						throw new w.ConnectError(
							`missing required parameter: set ${i.paramConnectVersion} to "v${e.protocolVersion}"`,
							E.Code.InvalidArgument,
						);
					if (r !== `v${e.protocolVersion}`)
						throw new w.ConnectError(
							`${i.paramConnectVersion} must be "v${e.protocolVersion}": got "${r}"`,
							E.Code.InvalidArgument,
						);
				}
			},
		)
