import '../../../../require.js';
import '../../../../exports.js';
import '../../instantiation/common/instantiation.js';
import '../../../nls.js';
define(de[1638], he([1, 0, 5, 4]), function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/,
 i /*nls*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$A9c =
					e.$z9c =
					e.$y9c =
					e.$x9c =
					e.$w9c =
					e.TunnelStates =
					e.$v9c =
					e.$u9c =
						void 0),
				(e.$u9c = (0, t.$Mi)("IRemoteTunnelService")),
				(e.$v9c = { active: !1 });
			var w;
			(function (E) {
				(E.disconnected = (C) => ({ type: "disconnected", onTokenFailed: C })),
					(E.connected = (C, d) => ({
						type: "connected",
						info: C,
						serviceInstallFailed: d,
					})),
					(E.connecting = (C) => ({ type: "connecting", progress: C })),
					(E.uninitialized = { type: "uninitialized" });
			})(w || (e.TunnelStates = w = {})),
				(e.$w9c = "remote.tunnels.access"),
				(e.$x9c = e.$w9c + ".hostNameOverride"),
				(e.$y9c = e.$w9c + ".preventSleep"),
				(e.$z9c = "remoteTunnelService"),
				(e.$A9c = (0, i.localize)(2063, null));
		}),
		