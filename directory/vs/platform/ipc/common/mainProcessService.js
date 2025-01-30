import '../../../../require.js';
import '../../../../exports.js';
import '../../instantiation/common/instantiation.js';
define(de[371], he([1, 0, 5]), function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$W8c = e.$V8c = void 0),
				(e.$V8c = (0, t.$Mi)("mainProcessService"));
			class i {
				constructor(E, C) {
					(this.a = E), (this.b = C);
				}
				getChannel(E) {
					return this.a.getChannel(E, this.b);
				}
				registerChannel(E, C) {
					this.a.registerChannel(E, C);
				}
				sendRawMessage(E, C) {}
			}
			e.$W8c = i;
		}),
		