define(de[516], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$a9b = void 0),
				(e.$a9b = (0, t.$Mi)("aiTaskService"));
		}),
		define(
			de[621],
			he([1, 0, 6, 3, 20, 5, 62, 21]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$esb = e.$dsb = void 0),
					(e.$dsb = (0, E.$Mi)("IAuthenticationAccessService"));
				let m = class extends i.$1c {
					constructor(u, a) {
						super(),
							(this.b = u),
							(this.c = a),
							(this.a = this.D(new t.$re())),
							(this.onDidChangeExtensionSessionAccess = this.a.event);
					}
					isAccessAllowed(u, a, h) {
						const c = this.c.trustedExtensionAuthAccess;
						if (Array.isArray(c)) {
							if (c.includes(h)) return !0;
						} else if (c?.[u]?.includes(h)) return !0;
						const g = this.readAllowedExtensions(u, a).find((p) => p.id === h);
						if (g) return g.allowed !== void 0 ? g.allowed : !0;
					}
					readAllowedExtensions(u, a) {
						let h = [];
						try {
							const c = this.b.get(`${u}-${a}`, d.StorageScope.APPLICATION);
							c && (h = JSON.parse(c));
						} catch {}
						return h;
					}
					updateAllowedExtensions(u, a, h) {
						const c = this.readAllowedExtensions(u, a);
						for (const n of h) {
							const g = c.findIndex((p) => p.id === n.id);
							g === -1 ? c.push(n) : (c[g].allowed = n.allowed);
						}
						this.b.store(
							`${u}-${a}`,
							JSON.stringify(c),
							d.StorageScope.APPLICATION,
							d.StorageTarget.USER,
						),
							this.a.fire({ providerId: u, accountName: a });
					}
					removeAllowedExtensions(u, a) {
						this.b.remove(`${u}-${a}`, d.StorageScope.APPLICATION),
							this.a.fire({ providerId: u, accountName: a });
					}
				};
				(e.$esb = m),
					(e.$esb = m = Ne([j(0, d.$lq), j(1, C.$Bk)], m)),
					(0, w.$lK)(e.$dsb, m, w.InstantiationType.Delayed);
			},
		),
		