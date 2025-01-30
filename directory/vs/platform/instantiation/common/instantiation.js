import '../../../../require.js';
import '../../../../exports.js';
define(de[5], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Li = e._util = void 0),
				(e.$Mi = w),
				(e.$Ni = E);
			var t;
			(function (C) {
				(C.serviceIds = new Map()),
					(C.DI_TARGET = "$di$target"),
					(C.DI_DEPENDENCIES = "$di$dependencies");
				function d(m) {
					return m[C.DI_DEPENDENCIES] || [];
				}
				C.getServiceDependencies = d;
			})(t || (e._util = t = {})),
				(e.$Li = w("instantiationService"));
			function i(C, d, m) {
				d[t.DI_TARGET] === d
					? d[t.DI_DEPENDENCIES].push({ id: C, index: m })
					: ((d[t.DI_DEPENDENCIES] = [{ id: C, index: m }]),
						(d[t.DI_TARGET] = d));
			}
			function w(C) {
				if (t.serviceIds.has(C)) return t.serviceIds.get(C);
				const d = function (m, r, u) {
					if (arguments.length !== 3)
						throw new Error(
							"@IServiceName-decorator can only be used to decorate a parameter",
						);
					i(d, m, u);
				};
				return (d.toString = () => C), t.serviceIds.set(C, d), d;
			}
			function E(C) {
				return C;
			}
		}),
		