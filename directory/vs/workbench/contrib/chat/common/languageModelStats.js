define(
			de[1807],
			he([1, 0, 6, 3, 5, 21, 109, 244, 30, 4]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				var u;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zmc = e.$ymc = void 0),
					(e.$ymc = (0, w.$Mi)("ILanguageModelStatsService"));
				let a = class extends i.$1c {
					static {
						u = this;
					}
					static {
						this.a = "languageModelStats.";
					}
					static {
						this.b = "languageModelAccess.";
					}
					constructor(c, n) {
						super(),
							(this.g = c),
							(this.h = n),
							(this.c = this.D(new t.$re())),
							(this.onDidChangeLanguageMoelStats = this.c.event),
							(this.f = new Map()),
							this.D(
								n.onDidChangeValue(
									E.StorageScope.APPLICATION,
									void 0,
									this.B,
								)((g) => {
									const p = this.s(g.key);
									p && this.c.fire(p);
								}),
							);
					}
					hasAccessedModel(c, n) {
						return this.m(n).includes(c.toLowerCase());
					}
					async update(c, n, g, p) {
						await this.g.getAccess(n, "languageModels"), this.j(c, n.value);
						let o = this.f.get(c);
						o || ((o = { extensions: [] }), this.f.set(c, o)),
							this.q(o, n.value, g, p),
							this.n(c, n.value, g, p),
							this.c.fire(c);
					}
					j(c, n) {
						n = n.toLowerCase();
						const g = this.m(c);
						g.includes(n) ||
							(g.push(n),
							this.h.store(
								this.u(c),
								JSON.stringify(g),
								E.StorageScope.APPLICATION,
								E.StorageTarget.USER,
							));
					}
					m(c) {
						const n = this.u(c),
							g = this.h.get(n, E.StorageScope.APPLICATION);
						try {
							if (g) {
								const p = JSON.parse(g);
								if (Array.isArray(p)) return p;
							}
						} catch {}
						return [];
					}
					async n(c, n, g, p) {
						const o = await this.r(c);
						this.q(o, n, g, p),
							this.h.store(
								this.t(c),
								JSON.stringify(o),
								E.StorageScope.APPLICATION,
								E.StorageTarget.USER,
							);
					}
					q(c, n, g, p) {
						let o = c.extensions.find((f) => C.$Gn.equals(f.extensionId, n));
						if (
							(o ||
								((o = {
									extensionId: n,
									requestCount: 0,
									tokenCount: 0,
									participants: [],
								}),
								c.extensions.push(o)),
							g)
						) {
							let f = o.participants.find((b) => b.id === g);
							f ||
								((f = { id: g, requestCount: 0, tokenCount: 0 }),
								o.participants.push(f)),
								f.requestCount++,
								(f.tokenCount += p ?? 0);
						} else o.requestCount++, (o.tokenCount += p ?? 0);
					}
					async r(c) {
						try {
							const n = this.h.get(this.t(c), E.StorageScope.APPLICATION);
							if (n) return JSON.parse(n);
						} catch {}
						return { extensions: [] };
					}
					s(c) {
						if (c.startsWith(u.a)) return c.substring(u.a.length);
					}
					t(c) {
						return `${u.a}${c}`;
					}
					u(c) {
						return `${u.b}${c}`;
					}
				};
				(e.$zmc = a),
					(e.$zmc = a = u = Ne([j(0, d.$$Sb), j(1, E.$lq)], a)),
					m.$Io
						.as(d.Extensions.ExtensionFeaturesRegistry)
						.registerExtensionFeature({
							id: "languageModels",
							label: (0, r.localize)(4772, null),
							description: (0, r.localize)(4773, null),
							access: { canToggle: !1 },
						});
			},
		),
		