define(de[1637], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$q9c = e.$p9c = void 0),
				(e.$p9c = (0, t.$Mi)("sharedProcessTunnelService")),
				(e.$q9c = "sharedProcessTunnel");
		}),
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
		define(
			de[2788],
			he([1, 0, 15, 29, 6, 3, 23, 62, 211]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$dcd = void 0),
					(i = mt(i));
				let r = class extends E.$1c {
					constructor(a, h) {
						super(),
							(this.h = h),
							(this.a = this.D(new w.$re())),
							(this.onDidChangeConnectionData = this.a.event),
							(this.b = new Map()),
							(this.c = new Map()),
							(this.f = new Map()),
							(this.g = null),
							C.$Zg.setServerRootPath(a, void 0);
					}
					resolveAuthority(a) {
						return this.b.has(a) || this.b.set(a, new t.$0h()), this.b.get(a).p;
					}
					async getCanonicalURI(a) {
						const h = a.toString(),
							c = this.f.get(h);
						if (c) return c.result.p;
						const n = new t.$0h();
						return (
							this.g?.(a).then(
								(g) => n.complete(g),
								(g) => n.error(g),
							),
							this.f.set(h, { input: a, result: n }),
							n.p
						);
					}
					getConnectionData(a) {
						if (!this.b.has(a)) return null;
						const h = this.b.get(a);
						if (!h.isResolved) return null;
						const c = this.c.get(a);
						return {
							connectTo: h.value.authority.connectTo,
							connectionToken: c,
						};
					}
					_clearResolvedAuthority(a) {
						this.b.has(a) && (this.b.get(a).cancel(), this.b.delete(a));
					}
					_setResolvedAuthority(a, h) {
						if (this.b.has(a.authority)) {
							const c = this.b.get(a.authority);
							a.connectTo.type === m.RemoteConnectionType.WebSocket
								? C.$Zg.set(a.authority, a.connectTo.host, a.connectTo.port)
								: C.$Zg.setDelegate(this.h.getResourceUriProvider()),
								a.connectionToken &&
									C.$Zg.setConnectionToken(a.authority, a.connectionToken),
								c.complete({ authority: a, options: h }),
								this.a.fire();
						}
					}
					_setResolvedAuthorityError(a, h) {
						this.b.has(a) && this.b.get(a).error(i.$fb.fromError(h));
					}
					_setAuthorityConnectionToken(a, h) {
						this.c.set(a, h), C.$Zg.setConnectionToken(a, h), this.a.fire();
					}
					_setCanonicalURIProvider(a) {
						(this.g = a),
							this.f.forEach(({ result: h, input: c }) => {
								this.g(c).then(
									(n) => h.complete(n),
									(n) => h.error(n),
								);
							});
					}
				};
				(e.$dcd = r), (e.$dcd = r = Ne([j(0, d.$Bk)], r));
			},
		),
		