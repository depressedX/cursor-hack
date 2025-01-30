import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/resources.js';
define(de[3674], he([1, 0, 19]), function (ce /*require*/,
 e /*exports*/,
 t /*resources*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$wyc = void 0),
				(t = mt(t));
			class i {
				constructor() {
					this.a = Object.create(null);
				}
				reset() {
					this.a = Object.create(null);
				}
				register(E) {
					if (this.a[E.scopeName]) {
						const C = this.a[E.scopeName];
						t.$gh(C.location, E.location) ||
							console.warn(`Overwriting grammar scope name to file mapping for scope ${E.scopeName}.
Old grammar file: ${C.location.toString()}.
New grammar file: ${E.location.toString()}`);
					}
					this.a[E.scopeName] = E;
				}
				getGrammarDefinition(E) {
					return this.a[E] || null;
				}
			}
			e.$wyc = i;
		}),
		