import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/hotReload.js';
import '../../../base/common/hotReloadHelpers.js';
import '../../../base/common/observable.js';
import '../../instantiation/common/instantiation.js';
define(
			de[1624],
			he([1, 0, 1559, 755, 77, 5]),
			function (ce /*require*/,
 e /*exports*/,
 t /*hotReload*/,
 i /*hotReloadHelpers*/,
 w /*observable*/,
 E /*instantiation*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$jc = C),
					(e.$_jc = u);
				function C(h) {
					return (0, t.$Rpb)() ? m(h, r) : h();
				}
				class d {
					constructor(c) {
						this.instantiationService = c;
					}
					init(...c) {}
				}
				function m(h, c) {
					return class extends c {
						constructor() {
							super(...arguments), (this.a = void 0);
						}
						init(...g) {
							this.a = (0, w.autorunWithStore)((p, o) => {
								const f = (0, i.$Tpb)(h(), p);
								o.add(this.instantiationService.createInstance(f, ...g));
							});
						}
						dispose() {
							this.a?.dispose();
						}
					};
				}
				let r = class extends d {
					constructor(c) {
						super(c), this.init();
					}
				};
				r = Ne([j(0, E.$Li)], r);
				function u(h) {
					return (0, t.$Rpb)() ? m(h, a) : h();
				}
				let a = class extends d {
					constructor(c, n) {
						super(n), this.init(c);
					}
				};
				a = Ne([j(1, E.$Li)], a);
			},
		),
		