import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
import '../currentScopes.js';
import '../integration.js';
define(de[2109], he([1, 0, 80, 234, 316]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/,
 i /*currentScopes*/,
 w /*integration*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.functionToStringIntegration = void 0);
			let E;
			const C = "FunctionToString",
				d = new WeakMap(),
				m = () => ({
					name: C,
					setupOnce() {
						E = Function.prototype.toString;
						try {
							Function.prototype.toString = function (...r) {
								const u = (0, t.getOriginalFunction)(this),
									a = d.has((0, i.getClient)()) && u !== void 0 ? u : this;
								return E.apply(a, r);
							};
						} catch {}
					},
					setup(r) {
						d.set(r, !0);
					},
				});
			e.functionToStringIntegration = (0, w.defineIntegration)(m);
		}),
		