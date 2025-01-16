define(de[2889], he([1, 0, 23, 9, 374]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$YIb = void 0);
			class E {
				constructor(d, m, r) {
					(this.b = d), (this.c = m), (this.d = r), (this.a = new Map());
				}
				async getRedirect(d, m) {
					const r = i.URI.parse(m),
						u = (0, w.$fO)(r);
					if (u) {
						for (const a of this.c())
							if (a.webviewPort === u.port) {
								const h = this.b();
								if (h && h.scheme === t.Schemas.vscodeRemote) {
									const c = d && (await this.e(d, a.extensionHostPort));
									if (c)
										return c.tunnelLocalPort === a.webviewPort
											? void 0
											: encodeURI(
													r
														.with({
															authority: `127.0.0.1:${c.tunnelLocalPort}`,
														})
														.toString(!0),
												);
								}
								if (a.webviewPort !== a.extensionHostPort)
									return encodeURI(
										r
											.with({
												authority: `${u.address}:${a.extensionHostPort}`,
											})
											.toString(!0),
									);
							}
					}
				}
				async dispose() {
					for (const d of this.a.values()) await d.dispose();
					this.a.clear();
				}
				async e(d, m) {
					const r = this.a.get(m);
					if (r) return r;
					const u = await this.d.openTunnel(
						{ getAddress: async () => d },
						void 0,
						m,
					);
					let a;
					return typeof u == "string" && (a = void 0), a && this.a.set(m, a), a;
				}
			}
			e.$YIb = E;
		}),
		