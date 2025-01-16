define(de[314], he([1, 0, 5]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$0Qb = e.$9Qb = e.ExtensionRecommendationReason = void 0);
			var i;
			(function (w) {
				(w[(w.Workspace = 0)] = "Workspace"),
					(w[(w.File = 1)] = "File"),
					(w[(w.Executable = 2)] = "Executable"),
					(w[(w.WorkspaceConfig = 3)] = "WorkspaceConfig"),
					(w[(w.DynamicWorkspace = 4)] = "DynamicWorkspace"),
					(w[(w.Experimental = 5)] = "Experimental"),
					(w[(w.Application = 6)] = "Application");
			})(i || (e.ExtensionRecommendationReason = i = {})),
				(e.$9Qb = (0, t.$Mi)("extensionRecommendationsService")),
				(e.$0Qb = (0, t.$Mi)("IExtensionIgnoredRecommendationsService"));
		}),
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
		