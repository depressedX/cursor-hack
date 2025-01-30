import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/network.js';
define(de[438], he([1, 0, 23]), function (ce /*require*/,
 e /*exports*/,
 t /*network*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$wn = i),
				(e.$xn = w),
				(e.$yn = E),
				(e.$zn = C);
			function i(m) {
				return m.scheme === t.Schemas.vscodeRemote ? m.authority : void 0;
			}
			function w(m) {
				if (!m) return;
				const r = m.indexOf("+");
				return r < 0 ? m : m.substr(0, r);
			}
			function E(m) {
				const { host: r, port: u } = d(m);
				if (typeof u > "u")
					throw new Error(
						`Invalid remote authority: ${m}. It must either be a remote of form <remoteName>+<arg> or a remote host of form <host>:<port>.`,
					);
				return { host: r, port: u };
			}
			function C(m, r) {
				let { host: u, port: a } = d(m);
				return typeof a > "u" && (a = r), { host: u, port: a };
			}
			function d(m) {
				const r = m.match(/^(\[[0-9a-z:]+\]):(\d+)$/);
				if (r) return { host: r[1], port: parseInt(r[2], 10) };
				const u = m.match(/^(\[[0-9a-z:]+\])$/);
				if (u) return { host: u[1], port: void 0 };
				const a = m.match(/(.*):(\d+)$/);
				return a
					? { host: a[1], port: parseInt(a[2], 10) }
					: { host: m, port: void 0 };
			}
		}),
		