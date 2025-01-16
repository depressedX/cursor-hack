define(de[3297], he([1, 0, 553, 62, 314]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$KTc = void 0);
			let E = class extends t.$DTc {
				get recommendations() {
					return this.a;
				}
				constructor(d) {
					super(), (this.b = d), (this.a = []);
				}
				async c() {
					this.b.languageExtensionTips &&
						(this.a = this.b.languageExtensionTips.map((d) => ({
							extension: d.toLowerCase(),
							reason: {
								reasonId: w.ExtensionRecommendationReason.Application,
								reasonText: "",
							},
						})));
				}
			};
			(e.$KTc = E), (e.$KTc = E = Ne([j(0, i.$Bk)], E));
		}),
		define(
			de[3298],
			he([1, 0, 553, 62, 314, 12]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$NTc = void 0);
				let C = class extends t.$DTc {
					get recommendations() {
						return this.a;
					}
					constructor(m) {
						super(), (this.b = m), (this.a = []);
					}
					async c() {
						const m = {
								...this.b.remoteExtensionTips,
								...this.b.virtualWorkspaceExtensionTips,
							},
							r = (0, E.$k)(E.$x);
						this.a = Object.values(m)
							.filter(({ supportedPlatforms: u }) => !u || u.includes(r))
							.map((u) => ({
								extension: u.extensionId.toLowerCase(),
								reason: {
									reasonId: w.ExtensionRecommendationReason.Application,
									reasonText: "",
								},
							}));
					}
				};
				(e.$NTc = C), (e.$NTc = C = Ne([j(0, i.$Bk)], C));
			},
		),
		define(
			de[3299],
			he([1, 0, 553, 62, 314, 4, 157]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$MTc = void 0);
				let d = class extends t.$DTc {
					get recommendations() {
						return this.a;
					}
					constructor(r, u) {
						super(), (this.b = r), (this.g = u), (this.a = []);
					}
					async c() {
						this.g.webExtensionManagementServer &&
							!this.g.localExtensionManagementServer &&
							!this.g.remoteExtensionManagementServer &&
							Array.isArray(this.b.webExtensionTips) &&
							(this.a = this.b.webExtensionTips.map((u) => ({
								extension: u.toLowerCase(),
								reason: {
									reasonId: w.ExtensionRecommendationReason.Application,
									reasonText: (0, E.localize)(6582, null, this.b.nameLong),
								},
							})));
					}
				};
				(e.$MTc = d), (e.$MTc = d = Ne([j(0, i.$Bk), j(1, C.$EQb)], d));
			},
		),
		define(
			de[828],
			he([1, 0, 24, 6, 187, 3, 252, 22, 20, 5, 25, 63, 67, 61, 4, 423, 59]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ERb = e.$DRb = e.$CRb = void 0),
					(e.$CRb = ".vscode/extensions.json"),
					(e.$DRb = (0, r.$Mi)("IWorkspaceExtensionsConfigService"));
				let o = class extends E.$1c {
					constructor(b, s, l, y, $, v) {
						super(),
							(this.b = b),
							(this.f = s),
							(this.g = l),
							(this.h = y),
							(this.j = $),
							(this.m = v),
							(this.a = this.D(new i.$re())),
							(this.onDidChangeExtensionsConfigs = this.a.event),
							this.D(b.onDidChangeWorkspaceFolders((S) => this.a.fire())),
							this.D(
								s.onDidFilesChange((S) => {
									const I = b.getWorkspace();
									((I.configuration && S.affects(I.configuration)) ||
										I.folders.some((T) => S.affects(T.toResource(e.$CRb)))) &&
										this.a.fire();
								}),
							);
					}
					async getExtensionsConfigs() {
						const b = this.b.getWorkspace(),
							s = [],
							l = b.configuration ? await this.w(b.configuration) : void 0;
						return (
							l && s.push(l),
							s.push(...(await Promise.all(b.folders.map((y) => this.y(y))))),
							s
						);
					}
					async getRecommendations() {
						const b = await this.getExtensionsConfigs();
						return (0, t.$Qb)(
							b.flatMap((s) =>
								s.recommendations
									? s.recommendations.map((l) => l.toLowerCase())
									: [],
							),
						);
					}
					async getUnwantedRecommendations() {
						const b = await this.getExtensionsConfigs();
						return (0, t.$Qb)(
							b.flatMap((s) =>
								s.unwantedRecommendations
									? s.unwantedRecommendations.map((l) => l.toLowerCase())
									: [],
							),
						);
					}
					async toggleRecommendation(b) {
						b = b.toLowerCase();
						const s = this.b.getWorkspace(),
							l = s.configuration ? await this.w(s.configuration) : void 0,
							y = new p.$Gc();
						await Promise.all(
							s.folders.map(async (T) => {
								const P = await this.y(T);
								y.set(T.uri, P);
							}),
						);
						const $ =
								l && l.recommendations?.some((T) => T.toLowerCase() === b),
							v = s.folders.filter((T) =>
								y
									.get(T.uri)
									?.recommendations?.some((P) => P.toLowerCase() === b),
							),
							S = $ || v.length > 0,
							I = S
								? await this.u(v, $ ? s : void 0, (0, n.localize)(12319, null))
								: await this.u(
										s.folders,
										s.configuration ? s : void 0,
										(0, n.localize)(12320, null),
									);
						for (const T of I)
							(0, u.$4i)(T)
								? await this.q(b, T, l, !S)
								: await this.n(b, T, y.get(T.uri), !S);
					}
					async toggleUnwantedRecommendation(b) {
						const s = this.b.getWorkspace(),
							l = s.configuration ? await this.w(s.configuration) : void 0,
							y = new p.$Gc();
						await Promise.all(
							s.folders.map(async (T) => {
								const P = await this.y(T);
								y.set(T.uri, P);
							}),
						);
						const $ = l && l.unwantedRecommendations?.some((T) => T === b),
							v = s.folders.filter((T) =>
								y.get(T.uri)?.unwantedRecommendations?.some((P) => P === b),
							),
							S = $ || v.length > 0,
							I = S
								? await this.u(v, $ ? s : void 0, (0, n.localize)(12321, null))
								: await this.u(
										s.folders,
										s.configuration ? s : void 0,
										(0, n.localize)(12322, null),
									);
						for (const T of I)
							(0, u.$4i)(T)
								? await this.t(b, T, l, !S)
								: await this.s(b, T, y.get(T.uri), !S);
					}
					async n(b, s, l, y) {
						const $ = [];
						if (y) {
							Array.isArray(l.recommendations)
								? $.push({ path: ["recommendations", -1], value: b })
								: $.push({ path: ["recommendations"], value: [b] });
							const v = this.C(
								["unwantedRecommendations"],
								l.unwantedRecommendations,
								b,
							);
							v && $.push(v);
						} else if (l.recommendations) {
							const v = this.C(["recommendations"], l.recommendations, b);
							v && $.push(v);
						}
						if ($.length) return this.m.write(s.toResource(e.$CRb), $, !0);
					}
					async q(b, s, l, y) {
						const $ = [];
						if (l) {
							if (y) {
								const v = ["extensions", "recommendations"];
								Array.isArray(l.recommendations)
									? $.push({ path: [...v, -1], value: b })
									: $.push({ path: v, value: [b] });
								const S = this.C(
									["extensions", "unwantedRecommendations"],
									l.unwantedRecommendations,
									b,
								);
								S && $.push(S);
							} else if (l.recommendations) {
								const v = this.C(
									["extensions", "recommendations"],
									l.recommendations,
									b,
								);
								v && $.push(v);
							}
						} else
							y &&
								$.push({
									path: ["extensions"],
									value: { recommendations: [b] },
								});
						if ($.length) return this.m.write(s.configuration, $, !0);
					}
					async s(b, s, l, y) {
						const $ = [];
						if (y) {
							const v = ["unwantedRecommendations"];
							Array.isArray(l.unwantedRecommendations)
								? $.push({ path: [...v, -1], value: b })
								: $.push({ path: v, value: [b] });
							const S = this.C(["recommendations"], l.recommendations, b);
							S && $.push(S);
						} else if (l.unwantedRecommendations) {
							const v = this.C(
								["unwantedRecommendations"],
								l.unwantedRecommendations,
								b,
							);
							v && $.push(v);
						}
						if ($.length) return this.m.write(s.toResource(e.$CRb), $, !0);
					}
					async t(b, s, l, y) {
						const $ = [];
						if (l) {
							if (y) {
								const v = ["extensions", "unwantedRecommendations"];
								Array.isArray(l.recommendations)
									? $.push({ path: [...v, -1], value: b })
									: $.push({ path: v, value: [b] });
								const S = this.C(
									["extensions", "recommendations"],
									l.recommendations,
									b,
								);
								S && $.push(S);
							} else if (l.unwantedRecommendations) {
								const v = this.C(
									["extensions", "unwantedRecommendations"],
									l.unwantedRecommendations,
									b,
								);
								v && $.push(v);
							}
						} else
							y &&
								$.push({
									path: ["extensions"],
									value: { unwantedRecommendations: [b] },
								});
						if ($.length) return this.m.write(s.configuration, $, !0);
					}
					async u(b, s, l) {
						const y = s ? [...b, s] : [...b];
						if (y.length === 1) return y;
						const $ = b.map((S) => ({
							label: S.name,
							description: (0, n.localize)(12323, null),
							workspaceOrFolder: S,
							iconClasses: (0, C.$BDb)(
								this.h,
								this.j,
								S.uri,
								d.FileKind.ROOT_FOLDER,
							),
						}));
						return (
							s &&
								($.push({ type: "separator" }),
								$.push({
									label: (0, n.localize)(12324, null),
									workspaceOrFolder: s,
								})),
							(
								(await this.g.pick($, { placeHolder: l, canPickMany: !0 })) ||
								[]
							).map((S) => S.workspaceOrFolder)
						);
					}
					async w(b) {
						try {
							const s = await this.f.readFile(b),
								l = (0, w.$do)(s.value.toString()).extensions;
							return l ? this.z(l) : void 0;
						} catch {}
					}
					async y(b) {
						try {
							const s = await this.f.readFile(b.toResource(e.$CRb)),
								l = (0, w.$do)(s.value.toString());
							return this.z(l);
						} catch {}
						return {};
					}
					z(b) {
						return {
							recommendations: (0, t.$Qb)(
								(b.recommendations || []).map((s) => s.toLowerCase()),
							),
							unwantedRecommendations: (0, t.$Qb)(
								(b.unwantedRecommendations || []).map((s) => s.toLowerCase()),
							),
						};
					}
					C(b, s, l) {
						const y = s?.indexOf(l);
						if (y !== void 0 && y !== -1)
							return { path: [...b, y], value: void 0 };
					}
				};
				(e.$ERb = o),
					(e.$ERb = o =
						Ne(
							[
								j(0, u.$Vi),
								j(1, d.$ll),
								j(2, a.$DJ),
								j(3, h.$QO),
								j(4, c.$nM),
								j(5, g.$$Qb),
							],
							o,
						)),
					(0, m.$lK)(e.$DRb, o, m.InstantiationType.Delayed);
			},
		),
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
		