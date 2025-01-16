define(
			de[3975],
			he([1, 0, 124, 22, 25, 398, 241, 287, 76]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$yc = void 0);
				let r = class extends E.$Xyc {
					constructor(a, h, c, n) {
						super(), (this.a = a), (this.b = h), (this.c = c), (this.d = n);
					}
					async call(a, h, c) {
						if (!a)
							throw new Error(
								"No create file parameters provided. Need to give at least the path and content.",
							);
						if (!a.relativeWorkspacePath)
							throw new Error(
								"relativeWorkspacePath is required to create a file.",
							);
						const n = this.c.resolveRelativePath(a.relativeWorkspacePath);
						return (await this.b.exists(n))
							? new t.$Gy({ fileAlreadyExists: !0 })
							: (await this.b.createFile(n, m.$Te.fromString(" "), {
									overwrite: !1,
								}),
								new t.$Gy({ fileCreatedSuccessfully: !0 }));
					}
				};
				(e.$$yc = r),
					(e.$$yc = r =
						Ne([j(0, C.$q8b), j(1, i.$ll), j(2, w.$Vi), j(3, d.$H7b)], r));
			},
		),
		