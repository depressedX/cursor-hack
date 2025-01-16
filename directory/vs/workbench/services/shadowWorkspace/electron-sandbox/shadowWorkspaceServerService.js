define(
			de[3707],
			he([1, 0, 3, 20, 5, 151, 1871, 3706]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Kdd = void 0);
				let m = class extends t.$1c {
					constructor(u, a) {
						super(),
							(this.a = u),
							(this.b = a),
							this.a.shadowWindowForWorkspaceId &&
								(this.server = this.b.createInstance(d.$Jdd));
					}
					getServer() {
						if (!this.a.shadowWindowForWorkspaceId || !this.server)
							throw new Error(
								"Shadow workspace server not allowed, because this is not a shadow window!",
							);
						return this.server;
					}
				};
				(e.$Kdd = m),
					(e.$Kdd = m = Ne([j(0, E.$ucd), j(1, w.$Li)], m)),
					(0, i.$lK)(C.$lqc, m, i.InstantiationType.Delayed);
			},
		),
		