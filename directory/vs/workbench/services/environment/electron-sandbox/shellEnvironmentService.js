import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/parts/sandbox/electron-sandbox/globals.js';
import '../../../../platform/instantiation/common/extensions.js';
define(de[1020], he([1, 0, 5, 320, 20]), function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/,
 i /*globals*/,
 w /*extensions*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Ddd = e.$Cdd = void 0),
				(e.$Cdd = (0, t.$Mi)("shellEnvironmentService"));
			class E {
				getShellEnv() {
					return i.$S.shellEnv();
				}
			}
			(e.$Ddd = E), (0, w.$lK)(e.$Cdd, E, w.InstantiationType.Delayed);
		})
