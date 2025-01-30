import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../core/rgba.js';
import '../languages.js';
import '../encodedTokenAttributes.js';
define(
			de[1592],
			he([1, 0, 6, 3, 1526, 74, 171]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*rgba*/,
 E /*languages*/,
 C /*encodedTokenAttributes*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Bvb = void 0);
				class d extends i.$1c {
					static {
						this.c = null;
					}
					static getInstance() {
						return this.c || (this.c = (0, i.$Tc)(new d())), this.c;
					}
					constructor() {
						super(),
							(this.j = new t.$re()),
							(this.onDidChange = this.j.event),
							this.m(),
							this.D(
								E.$lM.onDidChange((r) => {
									r.changedColorMap && this.m();
								}),
							);
					}
					m() {
						const r = E.$lM.getColorMap();
						if (!r) {
							(this.f = [w.$xvb.Empty]), (this.h = !0);
							return;
						}
						this.f = [w.$xvb.Empty];
						for (let a = 1; a < r.length; a++) {
							const h = r[a].rgba;
							this.f[a] = new w.$xvb(h.r, h.g, h.b, Math.round(h.a * 255));
						}
						const u = r[C.ColorId.DefaultBackground].getRelativeLuminance();
						(this.h = u >= 0.5), this.j.fire(void 0);
					}
					getColor(r) {
						return (
							(r < 1 || r >= this.f.length) &&
								(r = C.ColorId.DefaultBackground),
							this.f[r]
						);
					}
					backgroundIsLight() {
						return this.h;
					}
				}
				e.$Bvb = d;
			},
		),
		