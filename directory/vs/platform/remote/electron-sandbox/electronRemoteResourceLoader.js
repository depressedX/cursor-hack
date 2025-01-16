define(
			de[2787],
			he([1, 0, 76, 3, 266, 23, 9, 22, 371, 2783]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ccd = void 0);
				let u = class extends i.$1c {
					constructor(h, c, n) {
						super(), (this.a = h), (this.b = n);
						const g = {
							listen(p, o) {
								throw new Error(`Event not found: ${o}`);
							},
							call: (p, o, f) => {
								switch (o) {
									case r.$C8c:
										return this.c(C.URI.revive(f[0]));
								}
								throw new Error(`Call not found: ${o}`);
							},
						};
						c.registerChannel(r.$D8c, g);
					}
					async c(h) {
						let c;
						try {
							const g = new URLSearchParams(h.query),
								p = h.with({
									scheme: g.get("scheme"),
									authority: g.get("authority"),
									query: "",
								});
							c = await this.b.readFile(p);
						} catch (g) {
							const p = (0, t.$cf)(t.$Te.fromString(g.message));
							return g instanceof d.$Gl &&
								g.fileOperationResult === d.FileOperationResult.FILE_NOT_FOUND
								? { statusCode: 404, body: p }
								: { statusCode: 500, body: p };
						}
						const n = h.path && (0, w.$FK)(h.path);
						return { statusCode: 200, body: (0, t.$cf)(c.value), mimeType: n };
					}
					getResourceUriProvider() {
						return (h) =>
							h.with({
								scheme: E.Schemas.vscodeManagedRemoteResource,
								authority: `window:${this.a}`,
								query: new URLSearchParams({
									authority: h.authority,
									scheme: h.scheme,
								}).toString(),
							});
					}
				};
				(e.$ccd = u), (e.$ccd = u = Ne([j(1, m.$V8c), j(2, d.$ll)], u));
			},
		),
		