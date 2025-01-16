define(
			de[1853],
			he([1, 0, 20, 78, 5, 22, 275, 19, 3525]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9Tc = e.$8Tc = void 0),
					(e.$8Tc = (0, w.$Mi)("outputChannelModelService"));
				let r = class {
					constructor(a, h, c) {
						(this.b = a),
							(this.c = h),
							(this.d = null),
							(this.a = (0, d.$nh)(
								c.windowLogsPath,
								`output_${(0, C.$gn)(new Date()).replace(/-|:|\.\d+Z$/g, "")}`,
							));
					}
					createOutputChannelModel(a, h, c, n) {
						return n
							? this.c.createInstance(m.$6Tc, h, c, n)
							: this.c.createInstance(m.$7Tc, a, h, c, this.e);
					}
					get e() {
						return (
							this.d ||
								(this.d = this.b.createFolder(this.a).then(() => this.a)),
							this.d
						);
					}
				};
				(e.$9Tc = r),
					(e.$9Tc = r = Ne([j(0, E.$ll), j(1, w.$Li), j(2, i.$r8)], r)),
					(0, t.$lK)(e.$8Tc, r, t.InstantiationType.Delayed);
			},
		),
		