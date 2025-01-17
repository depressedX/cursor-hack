import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/errors.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
define(de[3093], he([1, 0, 29, 6, 3]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$oFc = void 0);
			class E extends w.$1c {
				constructor() {
					super(...arguments),
						(this.a = this.D(new i.$re())),
						(this.onDidChangeProviders = this.a.event),
						(this.b = this.D(new i.$re())),
						(this.onDidChangeItems = this.b.event),
						(this.c = []);
				}
				registerCellStatusBarItemProvider(d) {
					this.c.push(d);
					let m;
					return (
						d.onDidChangeStatusBarItems &&
							(m = d.onDidChangeStatusBarItems(() => this.b.fire())),
						this.a.fire(),
						(0, w.$Yc)(() => {
							m?.dispose();
							const r = this.c.findIndex((u) => u === d);
							this.c.splice(r, 1);
						})
					);
				}
				async getStatusBarItemsForCell(d, m, r, u) {
					const a = this.c.filter(
						(h) => h.viewType === r || h.viewType === "*",
					);
					return await Promise.all(
						a.map(async (h) => {
							try {
								return (
									(await h.provideCellStatusBarItems(d, m, u)) ?? { items: [] }
								);
							} catch (c) {
								return (0, t.$5)(c), { items: [] };
							}
						}),
					);
				}
			}
			e.$oFc = E;
		}),
		