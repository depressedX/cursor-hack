import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/errors.js';
define(de[3335], he([1, 0, 29]), function (ce /*require*/,
 e /*exports*/,
 t /*errors*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$N4c = e.$M4c = void 0);
			class i {
				constructor() {
					(this.a = null),
						(this.b = null),
						(this.d = null),
						(this.f = !1),
						(this.g = null),
						(this.h = !1),
						(this.i = null);
				}
				get [Symbol.toStringTag]() {
					return this.toString();
				}
				j() {
					return (
						this.a ||
							(this.a = new Promise((C, d) => {
								(this.b = C),
									(this.d = d),
									this.f && this.b(this.g),
									this.h && this.d(this.i);
							})),
						this.a
					);
				}
				resolveOk(C) {
					this.f ||
						this.h ||
						((this.f = !0), (this.g = C), this.a && this.b(C));
				}
				resolveErr(C) {
					this.f ||
						this.h ||
						((this.h = !0), (this.i = C), this.a ? this.d(C) : (0, t.$4)(C));
				}
				then(C, d) {
					return this.j().then(C, d);
				}
				catch(C) {
					return this.j().then(void 0, C);
				}
				finally(C) {
					return this.j().finally(C);
				}
			}
			e.$M4c = i;
			class w extends i {
				constructor() {
					super(), (this.h = !0), (this.i = new t.$9());
				}
			}
			e.$N4c = w;
		}),
		