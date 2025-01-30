import '../../../../require.js';
import '../../../../exports.js';
import '../common/extHostLoggerService.js';
import '../../../base/common/network.js';
import '../../../platform/log/node/spdlogLog.js';
import '../../../base/common/uuid.js';
define(Pe[554], Ne([1, 0, 297, 16, 490, 38]), function (we, t, e, r, S, N) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }), (t.$9jd = void 0);
			class P extends e.$ijd {
				q(l, n, p) {
					return l.scheme === r.Schemas.file
						? new S.$1eb(
								p?.name || (0, N.$9g)(),
								l.fsPath,
								!p?.donotRotate,
								!!p?.donotUseFormatters,
								n,
							)
						: super.q(l, n, p);
				}
				registerLogger(l) {
					super.registerLogger(l), this.r.$registerLogger(l);
				}
				deregisterLogger(l) {
					super.deregisterLogger(l), this.r.$deregisterLogger(l);
				}
			}
			t.$9jd = P;
		}),
		