define(de[1390], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.trailerDemux = t),
				(e.trailerMux = i);
			function t(w) {
				const E = new Headers(),
					C = new Headers();
				return (
					w.forEach((d, m) => {
						m.toLowerCase().startsWith("trailer-")
							? C.append(m.substring(8), d)
							: E.append(m, d);
					}),
					[E, C]
				);
			}
			function i(w, E) {
				const C = new Headers(w);
				return (
					E.forEach((d, m) => {
						C.append(`trailer-${m}`, d);
					}),
					C
				);
			}
		}),
		define(
			de[1080],
			he([1, 0, 574, 1389, 213, 202]),
			function (ce, e, t, i, w, E) {
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
		),
		