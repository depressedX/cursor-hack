import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/linkedList.js';
import '../../../../platform/instantiation/common/extensions.js';
import './outline.js';
import '../../../../base/common/event.js';
define(
			de[3522],
			he([1, 0, 3, 273, 20, 475, 6]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*linkedList*/,
 w /*extensions*/,
 E /*outline*/,
 C /*event*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				class d {
					constructor() {
						(this.a = new i.$$c()),
							(this.b = new C.$re()),
							(this.onDidChange = this.b.event);
					}
					canCreateOutline(r) {
						for (const u of this.a) if (u.matches(r)) return !0;
						return !1;
					}
					async createOutline(r, u, a) {
						for (const h of this.a)
							if (h.matches(r)) return await h.createOutline(r, u, a);
					}
					registerOutlineCreator(r) {
						const u = this.a.push(r);
						return (
							this.b.fire(),
							(0, t.$Yc)(() => {
								u(), this.b.fire();
							})
						);
					}
				}
				(0, w.$lK)(E.$x4b, d, w.InstantiationType.Delayed);
			},
		)
