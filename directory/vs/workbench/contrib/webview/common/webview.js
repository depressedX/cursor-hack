import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/charCode.js';
import '../../../../base/common/network.js';
import '../../../../base/common/uri.js';
define(de[1784], he([1, 0, 120, 23, 9]), function (ce /*require*/,
 e /*exports*/,
 t /*charCode*/,
 i /*network*/,
 w /*uri*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$U2b = e.$T2b = e.$S2b = void 0),
				(e.$V2b = E),
				(e.$W2b = d),
				(e.$S2b = "vscode-cdn.net"),
				(e.$T2b = `vscode-resource.${e.$S2b}`),
				(e.$U2b = `'self' https://*.${e.$S2b}`);
			function E(m, r) {
				return m.scheme === i.Schemas.http || m.scheme === i.Schemas.https
					? m
					: (r &&
							r.authority &&
							r.isRemote &&
							m.scheme === i.Schemas.file &&
							(m = w.URI.from({
								scheme: i.Schemas.vscodeRemote,
								authority: r.authority,
								path: m.path,
							})),
						w.URI.from({
							scheme: i.Schemas.https,
							authority: `${m.scheme}+${C(m.authority)}.${e.$T2b}`,
							path: m.path,
							fragment: m.fragment,
							query: m.query,
						}));
			}
			function C(m) {
				return m.replace(/./g, (r) => {
					const u = r.charCodeAt(0);
					return (u >= t.CharCode.a && u <= t.CharCode.z) ||
						(u >= t.CharCode.A && u <= t.CharCode.Z) ||
						(u >= t.CharCode.Digit0 && u <= t.CharCode.Digit9)
						? r
						: "-" + u.toString(16).padStart(4, "0");
				});
			}
			function d(m) {
				return m.replace(/-([0-9a-f]{4})/g, (r, u) =>
					String.fromCharCode(parseInt(u, 16)),
				);
			}
		})
