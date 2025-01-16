define(
			de[3294],
			he([1, 0, 119, 553, 4, 314, 25, 6]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$LTc = void 0);
				let m = class extends i.$DTc {
					get otherRecommendations() {
						return this.h;
					}
					get importantRecommendations() {
						return this.j;
					}
					get recommendations() {
						return [
							...this.importantRecommendations,
							...this.otherRecommendations,
						];
					}
					constructor(u, a) {
						super(),
							(this.m = u),
							(this.n = a),
							(this.a = []),
							(this.b = []),
							(this.g = this.D(new d.$re())),
							(this.onDidChangeRecommendations = this.g.event),
							(this.h = []),
							(this.j = []);
					}
					async c() {
						await this.r(),
							this.D(this.n.onDidChangeWorkspaceFolders((u) => this.s(u)));
					}
					async r() {
						const u = this.n.getWorkspace(),
							a = new Map(),
							h = new Map();
						for (const c of u.folders) {
							const n = await this.m.getConfigBasedTips(c.uri);
							for (const g of n)
								g.important ? a.set(g.extensionId, g) : h.set(g.extensionId, g);
						}
						(this.a = [...a.values()]),
							(this.b = [...h.values()].filter((c) => !a.has(c.extensionId))),
							(this.h = this.b.map((c) => this.t(c))),
							(this.j = this.a.map((c) => this.t(c)));
					}
					async s(u) {
						if (u.added.length) {
							const a = this.a;
							await this.r(),
								this.a.some((h) =>
									a.every((c) => h.extensionId !== c.extensionId),
								) && this.g.fire();
						}
					}
					t(u) {
						return {
							extension: u.extensionId,
							reason: {
								reasonId: E.ExtensionRecommendationReason.WorkspaceConfig,
								reasonText: (0, w.localize)(6015, null),
							},
							whenNotInstalled: u.whenNotInstalled,
						};
					}
				};
				(e.$LTc = m), (e.$LTc = m = Ne([j(0, t.$Lp), j(1, C.$Vi)], m));
			},
		),
		