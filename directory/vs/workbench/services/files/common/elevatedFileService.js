define(de[700], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$dZ = void 0),
				(e.$dZ = (0, t.$Mi)("elevatedFileService"));
		}),
		define(
			de[3382],
			he([1, 0, 249, 23, 9, 22, 20, 110, 174, 151, 700, 12, 73, 4]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Zdd = void 0);
				let n = class {
					constructor(p, o, f, b, s) {
						(this.a = p),
							(this.b = o),
							(this.c = f),
							(this.d = b),
							(this.e = s);
					}
					isSupported(p) {
						return p.scheme === i.Schemas.file;
					}
					async writeFileElevated(p, o, f) {
						if (
							!(await this.d.requestWorkspaceTrust({
								message: a.$l
									? (0, c.localize)(12463, null, this.e.getUriLabel(p))
									: (0, c.localize)(12464, null, this.e.getUriLabel(p)),
							}))
						)
							throw new Error((0, c.localize)(12465, null));
						const s = w.URI.file(
							(0, t.$Ug)(this.c.userDataPath, "code-elevated"),
						);
						try {
							await this.b.writeFile(s, o, f),
								await this.a.writeElevated(s, p, f);
						} finally {
							await this.b.del(s);
						}
						return this.b.resolve(p, { resolveMetadata: !0 });
					}
				};
				(e.$Zdd = n),
					(e.$Zdd = n =
						Ne(
							[
								j(0, d.$y7c),
								j(1, E.$ll),
								j(2, r.$ucd),
								j(3, m.$qO),
								j(4, h.$3N),
							],
							n,
						)),
					(0, C.$lK)(u.$dZ, n, C.InstantiationType.Delayed);
			},
		),
		