import '../../../require.js';
import '../../../exports.js';
import '../common/event.js';
define(de[265], he([1, 0, 6]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$mib = void 0);
			class i {
				get event() {
					return this.a.event;
				}
				constructor(E, C, d) {
					const m = (r) => this.a.fire(r);
					this.a = new t.$re({
						onWillAddFirstListener: () => E.addEventListener(C, m, d),
						onDidRemoveLastListener: () => E.removeEventListener(C, m, d),
					});
				}
				dispose() {
					this.a.dispose();
				}
			}
			e.$mib = i;
		}),
		