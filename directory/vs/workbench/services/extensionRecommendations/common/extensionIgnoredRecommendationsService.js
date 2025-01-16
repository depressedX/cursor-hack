define(
			de[3301],
			he([1, 0, 24, 6, 3, 20, 21, 314, 828]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Awc = void 0);
				const r = "extensionsAssistant/ignored_recommendations";
				let u = class extends w.$1c {
					get globalIgnoredRecommendations() {
						return [...this.b];
					}
					get ignoredRecommendations() {
						return (0, t.$Qb)([
							...this.globalIgnoredRecommendations,
							...this.f,
						]);
					}
					constructor(h, c) {
						super(),
							(this.g = h),
							(this.h = c),
							(this.a = this.D(new i.$re())),
							(this.onDidChangeIgnoredRecommendations = this.a.event),
							(this.b = []),
							(this.c = this.D(new i.$re())),
							(this.onDidChangeGlobalIgnoredRecommendation = this.c.event),
							(this.f = []),
							(this.b = this.m()),
							this.D(
								this.h.onDidChangeValue(
									C.StorageScope.PROFILE,
									r,
									this.D(new w.$Zc()),
								)((n) => this.n()),
							),
							this.j();
					}
					async j() {
						(this.f = await this.g.getUnwantedRecommendations()),
							this.a.fire(),
							this.D(
								this.g.onDidChangeExtensionsConfigs(async () => {
									(this.f = await this.g.getUnwantedRecommendations()),
										this.a.fire();
								}),
							);
					}
					toggleGlobalIgnoredRecommendation(h, c) {
						(h = h.toLowerCase()),
							(this.b.indexOf(h) !== -1) !== c &&
								((this.b = c ? [...this.b, h] : this.b.filter((g) => g !== h)),
								this.q(this.b),
								this.c.fire({ extensionId: h, isRecommended: !c }),
								this.a.fire());
					}
					m() {
						return JSON.parse(this.s).map((c) => c.toLowerCase());
					}
					n() {
						this.s !== this.t() &&
							((this.r = void 0), (this.b = this.m()), this.a.fire());
					}
					q(h) {
						this.s = JSON.stringify(h);
					}
					get s() {
						return this.r || (this.r = this.t()), this.r;
					}
					set s(h) {
						this.s !== h && ((this.r = h), this.u(h));
					}
					t() {
						return this.h.get(r, C.StorageScope.PROFILE, "[]");
					}
					u(h) {
						this.h.store(r, h, C.StorageScope.PROFILE, C.StorageTarget.USER);
					}
				};
				(e.$Awc = u),
					(e.$Awc = u = Ne([j(0, m.$DRb), j(1, C.$lq)], u)),
					(0, E.$lK)(d.$0Qb, u, E.InstantiationType.Delayed);
			},
		),
		