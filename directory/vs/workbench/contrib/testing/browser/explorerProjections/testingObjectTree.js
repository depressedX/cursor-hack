define(de[3178], he([1, 0, 93, 811, 259]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$aLc = void 0);
			class E extends t.$CMb {
				getOptimizedViewState(d) {
					const m = d || {},
						r = (u, a) => {
							if (!(u.element instanceof i.$7Kc)) return !1;
							const h = w.$k4.localId(u.element.test.item.extId),
								c = a.children?.[h] || {};
							c.collapsed =
								u.depth === 0 || !u.collapsed ? u.collapsed : void 0;
							let n = c.collapsed !== void 0;
							if (u.children.length)
								for (const g of u.children) n = r(g, c) || n;
							return (
								n
									? ((a.children ??= {}), (a.children[h] = c))
									: a.children?.hasOwnProperty(h) && delete a.children[h],
								n
							);
						};
					m.children ??= {};
					for (const u of this.getNode().children)
						if (u.element instanceof i.$7Kc)
							if (u.element.test.controllerId === u.element.test.item.extId)
								r(u, m);
							else {
								const a = (m.children[u.element.test.controllerId] ??= {
									children: {},
								});
								r(u, a);
							}
					return m;
				}
			}
			e.$aLc = E;
		}),
		