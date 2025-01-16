define(
			de[3295],
			he([1, 0, 119, 553, 4, 314]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ETc = void 0);
				let C = class extends i.$DTc {
					get otherRecommendations() {
						return this.a.map((m) => this.q(m));
					}
					get importantRecommendations() {
						return this.b.map((m) => this.q(m));
					}
					get recommendations() {
						return [
							...this.importantRecommendations,
							...this.otherRecommendations,
						];
					}
					constructor(m) {
						super(), (this.g = m), (this.a = []), (this.b = []);
					}
					getRecommendations(m) {
						const r = this.b
								.filter((a) => a.exeName.toLowerCase() === m.toLowerCase())
								.map((a) => this.q(a)),
							u = this.a
								.filter((a) => a.exeName.toLowerCase() === m.toLowerCase())
								.map((a) => this.q(a));
						return { important: r, others: u };
					}
					async c() {
						(this.a = await this.g.getOtherExecutableBasedTips()),
							await this.m();
					}
					async m() {
						return this.j || (this.j = this.n()), this.j;
					}
					async n() {
						const m = new Map();
						return (
							(this.b = await this.g.getImportantExecutableBasedTips()),
							this.b.forEach((r) => m.set(r.extensionId.toLowerCase(), r)),
							m
						);
					}
					q(m) {
						return {
							extension: m.extensionId.toLowerCase(),
							reason: {
								reasonId: E.ExtensionRecommendationReason.Executable,
								reasonText: (0, w.localize)(6019, null, m.exeFriendlyName),
							},
						};
					}
				};
				(e.$ETc = C), (e.$ETc = C = Ne([j(0, t.$Lp)], C));
			},
		),
		