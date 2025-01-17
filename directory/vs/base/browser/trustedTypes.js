import '../../../require.js';
import '../../../exports.js';
import '../common/errors.js';
define(de[432], he([1, 0, 29]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$bjb = i);
			function i(w, E) {
				const C = globalThis.MonacoEnvironment;
				if (C?.createTrustedTypesPolicy)
					try {
						return C.createTrustedTypesPolicy(w, E);
					} catch (d) {
						(0, t.$4)(d);
						return;
					}
				try {
					return globalThis.trustedTypes?.createPolicy(w, E);
				} catch (d) {
					(0, t.$4)(d);
					return;
				}
			}
		}),
		