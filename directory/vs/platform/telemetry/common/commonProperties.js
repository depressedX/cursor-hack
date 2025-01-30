import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/platform.js';
import '../../../base/common/process.js';
import '../../../base/common/uuid.js';
define(de[1640], he([1, 0, 12, 344, 47]), function (ce /*require*/,
 e /*exports*/,
 t /*platform*/,
 i /*process*/,
 w /*uuid*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Op = C),
				(e.$Pp = d);
			function E(m) {
				if (t.$x === t.Platform.Linux && /^penguin(\.|$)/i.test(m))
					return "chromebook";
			}
			function C(m, r, u, a, h, c, n, g, p, o, f) {
				const b = Object.create(null);
				(b["common.machineId"] = c),
					(b["common.macMachineId"] = n),
					(b["common.sqmId"] = g),
					(b["common.devDeviceId"] = p),
					(b.sessionID = (0, w.$9g)() + Date.now()),
					(b.commitHash = a),
					(b.version = h),
					(b["common.platformVersion"] = (m || "").replace(
						/^(\d+)(\.\d+)?(\.\d+)?(.*)/,
						"$1$2$3",
					)),
					(b["common.platform"] = (0, t.$k)(t.$x)),
					(b["common.nodePlatform"] = i.$ic),
					(b["common.nodeArch"] = u),
					(b["common.product"] = f || "desktop"),
					o && (b["common.msftInternal"] = o);
				let s = 0;
				const l = Date.now();
				Object.defineProperties(b, {
					timestamp: { get: () => new Date(), enumerable: !0 },
					"common.timesincesessionstart": {
						get: () => Date.now() - l,
						enumerable: !0,
					},
					"common.sequence": { get: () => s++, enumerable: !0 },
				}),
					t.$o && (b["common.snap"] = "true");
				const y = E(r);
				return y && (b["common.platformDetail"] = y), b;
			}
			function d(m) {
				const r = i.env.USERDNSDOMAIN;
				if (!r) return !1;
				const u = r.toLowerCase();
				return m.some((a) => u === a);
			}
		}),
		