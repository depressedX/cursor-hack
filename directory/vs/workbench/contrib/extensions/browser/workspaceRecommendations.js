define(
			de[3300],
			he([1, 0, 119, 24, 553, 40, 314, 4, 6, 828, 25, 68, 22, 15, 157]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$FTc = void 0);
				const g = ".vscode/extensions";
				let p = class extends w.$DTc {
					get recommendations() {
						return this.g;
					}
					get ignoredRecommendations() {
						return this.j;
					}
					constructor(f, b, s, l, y, $) {
						super(),
							(this.q = f),
							(this.r = b),
							(this.s = s),
							(this.t = l),
							(this.u = y),
							(this.w = $),
							(this.g = []),
							(this.h = this.D(new m.$re())),
							(this.onDidChangeRecommendations = this.h.event),
							(this.j = []),
							(this.m = []),
							(this.n = this.D(new c.$Yh(() => this.z(), 1e3)));
					}
					async c() {
						(this.m = await this.C()),
							await this.F(),
							this.D(this.q.onDidChangeExtensionsConfigs(() => this.H()));
						for (const f of this.r.getWorkspace().folders)
							this.D(this.t.watch(this.s.extUri.joinPath(f.uri, g)));
						this.D(this.r.onDidChangeWorkspaceFolders(() => this.n.schedule())),
							this.D(
								this.t.onDidFilesChange((f) => {
									this.r
										.getWorkspace()
										.folders.some((b) =>
											f.affects(
												this.s.extUri.joinPath(b.uri, g),
												h.FileChangeType.ADDED,
												h.FileChangeType.DELETED,
											),
										) && this.n.schedule();
								}),
							);
					}
					async z() {
						const f = this.m;
						(this.m = await this.C()),
							(0, i.$yb)(f, this.m, (b, s) => this.s.extUri.isEqual(b, s)) ||
								this.H();
					}
					async C() {
						const f = [];
						for (const b of this.r.getWorkspace().folders) {
							const s = this.s.extUri.joinPath(b.uri, g);
							try {
								const l = await this.t.resolve(s);
								for (const y of l.children ?? [])
									y.isDirectory && f.push(y.resource);
							} catch {}
						}
						return f.length
							? (await this.u.getExtensions(f)).map((s) => s.location)
							: [];
					}
					async F() {
						const f = await this.q.getExtensionsConfigs(),
							{ invalidRecommendations: b, message: s } = await this.G(f);
						b.length &&
							this.w.warn(`The ${b.length} extension(s) below, in workspace recommendations have issues:
${s}`),
							(this.g = []),
							(this.j = []);
						for (const l of f) {
							if (l.unwantedRecommendations)
								for (const y of l.unwantedRecommendations)
									b.indexOf(y) === -1 && this.j.push(y);
							if (l.recommendations)
								for (const y of l.recommendations)
									b.indexOf(y) === -1 &&
										this.g.push({
											extension: y,
											reason: {
												reasonId: C.ExtensionRecommendationReason.Workspace,
												reasonText: (0, d.localize)(6583, null),
											},
										});
						}
						for (const l of this.m)
							this.g.push({
								extension: l,
								reason: {
									reasonId: C.ExtensionRecommendationReason.Workspace,
									reasonText: (0, d.localize)(6584, null),
								},
							});
					}
					async G(f) {
						const b = [],
							s = [];
						let l = "";
						const y = (0, i.$Qb)(
								f.flatMap(({ recommendations: v }) => v || []),
							),
							$ = new RegExp(t.$rp);
						for (const v of y)
							$.test(v)
								? b.push(v)
								: (s.push(v),
									(l += `${v} (bad format) Expected: <provider>.<name>
`));
						return {
							validRecommendations: b,
							invalidRecommendations: s,
							message: l,
						};
					}
					async H() {
						await this.F(), this.h.fire();
					}
				};
				(e.$FTc = p),
					(e.$FTc = p =
						Ne(
							[
								j(0, r.$DRb),
								j(1, u.$Vi),
								j(2, a.$Vl),
								j(3, h.$ll),
								j(4, n.$GQb),
								j(5, E.$4N),
							],
							p,
						));
			},
		),
		