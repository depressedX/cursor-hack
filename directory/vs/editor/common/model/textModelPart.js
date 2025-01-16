define(de[1539], he([1, 0, 3]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$AU = void 0);
			class i extends t.$1c {
				constructor() {
					super(...arguments), (this.f = !1);
				}
				dispose() {
					super.dispose(), (this.f = !0);
				}
				g() {
					if (this.f) throw new Error("TextModelPart is disposed!");
				}
			}
			e.$AU = i;
		}),
		