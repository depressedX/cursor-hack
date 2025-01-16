define(de[1699], he([1, 0, 416]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$EVb = void 0);
			class i extends t.$PO {
				get originalModel() {
					return this.a;
				}
				get modifiedModel() {
					return this.b;
				}
				constructor(E, C) {
					super(), (this.a = E), (this.b = C);
				}
				async resolve() {
					await Promise.all([this.a?.resolve(), this.b?.resolve()]);
				}
				isResolved() {
					return !!(this.a?.isResolved() && this.b?.isResolved());
				}
				dispose() {
					super.dispose();
				}
			}
			e.$EVb = i;
		}),
		