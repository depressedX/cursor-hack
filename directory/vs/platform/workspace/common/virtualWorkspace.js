import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/network.js';
define(de[349], he([1, 0, 23]), function (ce /*require*/,
 e /*exports*/,
 t /*network*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$D8 = i),
				(e.$E8 = w),
				(e.$F8 = E),
				(e.$G8 = C),
				(e.$H8 = d);
			function i(m) {
				return (
					m.scheme !== t.Schemas.file && m.scheme !== t.Schemas.vscodeRemote
				);
			}
			function w(m) {
				if (m.folders.length)
					return m.folders.every((r) => i(r.uri)) ? m.folders[0].uri : void 0;
				if (m.configuration && i(m.configuration)) return m.configuration;
			}
			function E(m) {
				return w(m)?.scheme;
			}
			function C(m) {
				return w(m)?.authority;
			}
			function d(m) {
				return w(m) !== void 0;
			}
		}),
		