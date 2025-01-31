import '../../../../require.js';
import '../../../../exports.js';
define(de[749], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$b3b = e.$a3b = void 0);
			class t {
				constructor() {
					this.a = new Map();
				}
				removeDragOperationTransfer(E) {
					if (E && this.a.has(E)) {
						const C = this.a.get(E);
						return this.a.delete(E), C;
					}
				}
				addDragOperationTransfer(E, C) {
					this.a.set(E, C);
				}
			}
			e.$a3b = t;
			class i {
				constructor(E) {
					this.identifier = E;
				}
			}
			e.$b3b = i;
		})
