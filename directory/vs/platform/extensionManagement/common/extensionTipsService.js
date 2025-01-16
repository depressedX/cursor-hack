define(
			de[2897],
			he([1, 0, 24, 3, 19, 9, 22, 62, 15, 6, 54, 12, 344, 154, 666, 109, 21]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$S5c = e.$R5c = void 0);
				let o = class extends i.$1c {
					constructor(y, $) {
						super(),
							(this.b = y),
							(this.c = $),
							(this.a = new Map()),
							this.c.configBasedExtensionTips &&
								Object.entries(this.c.configBasedExtensionTips).forEach(
									([, v]) => this.a.set(v.configPath, v),
								);
					}
					getConfigBasedTips(y) {
						return this.f(y);
					}
					async getImportantExecutableBasedTips() {
						return [];
					}
					async getOtherExecutableBasedTips() {
						return [];
					}
					async f(y) {
						const $ = [];
						for (const [v, S] of this.a)
							if (!(S.configScheme && S.configScheme !== y.scheme))
								try {
									const I = (
										await this.b.readFile((0, w.$nh)(y, v))
									).value.toString();
									for (const [T, P] of Object.entries(S.recommendations))
										(!P.contentPattern ||
											new RegExp(P.contentPattern, "mig").test(I)) &&
											$.push({
												extensionId: T,
												extensionName: P.name,
												configName: S.configName,
												important: !!P.important,
												isExtensionPack: !!P.isExtensionPack,
												whenNotInstalled: P.whenNotInstalled,
											});
								} catch {}
						return $;
					}
				};
				(e.$R5c = o), (e.$R5c = o = Ne([j(0, C.$ll), j(1, d.$Bk)], o));
				const f = "extensionTips/promptedExecutableTips",
					b = "extensionTips/lastPromptedMediumImpExeTime";
				class s extends o {
					constructor(y, $, v, S, I, T, P, k) {
						super(P, k),
							(this.q = y),
							(this.r = $),
							(this.s = v),
							(this.t = S),
							(this.u = I),
							(this.w = T),
							(this.g = new Map()),
							(this.h = new Map()),
							(this.j = new Map()),
							(this.m = new Map()),
							(this.n = new Map()),
							k.exeBasedExtensionTips &&
								Object.entries(k.exeBasedExtensionTips).forEach(([L, D]) => {
									const M = [],
										N = [],
										A = [];
									Object.entries(D.recommendations).forEach(([R, O]) => {
										O.important
											? D.important
												? M.push({
														extensionId: R,
														extensionName: O.name,
														isExtensionPack: !!O.isExtensionPack,
													})
												: N.push({
														extensionId: R,
														extensionName: O.name,
														isExtensionPack: !!O.isExtensionPack,
													})
											: A.push({
													extensionId: R,
													extensionName: O.name,
													isExtensionPack: !!O.isExtensionPack,
												});
									}),
										M.length &&
											this.g.set(L, {
												exeFriendlyName: D.friendlyName,
												windowsPath: D.windowsPath,
												recommendations: M,
											}),
										N.length &&
											this.h.set(L, {
												exeFriendlyName: D.friendlyName,
												windowsPath: D.windowsPath,
												recommendations: N,
											}),
										A.length &&
											this.j.set(L, {
												exeFriendlyName: D.friendlyName,
												windowsPath: D.windowsPath,
												recommendations: A,
											});
								}),
							(0, m.$Oh)(
								async () => {
									await this.z(), this.F(), this.G();
								},
								3e3,
								this.B,
							);
					}
					async getImportantExecutableBasedTips() {
						const y = await this.O(this.g),
							$ = await this.O(this.h);
						return [...y, ...$];
					}
					getOtherExecutableBasedTips() {
						return this.O(this.j);
					}
					async z() {
						const y = await this.O(this.g),
							$ = await this.O(this.h),
							v = await this.t.getInstalled();
						(this.m = this.C(y, v)), (this.n = this.C($, v));
					}
					C(y, $) {
						const v = new Map();
						y.forEach((k) => v.set(k.extensionId.toLowerCase(), k));
						const { installed: S, uninstalled: I } = this.N([...v.keys()], $);
						for (const k of S) {
							const L = v.get(k);
							L &&
								this.s.publicLog2(
									"exeExtensionRecommendations:alreadyInstalled",
									{ extensionId: k, exeName: L.exeName },
								);
						}
						for (const k of I) {
							const L = v.get(k);
							L &&
								this.s.publicLog2("exeExtensionRecommendations:notInstalled", {
									extensionId: k,
									exeName: L.exeName,
								});
						}
						const T = this.L(),
							P = new Map();
						for (const k of I) {
							const L = v.get(k);
							if (
								L &&
								(!T[L.exeName] || !T[L.exeName].includes(L.extensionId))
							) {
								let D = P.get(L.exeName);
								D || ((D = []), P.set(L.exeName, D)), D.push(L);
							}
						}
						return P;
					}
					F() {
						if (this.m.size === 0) return;
						const [y, $] = [...this.m.entries()][0];
						this.H($).then((v) => {
							switch (v) {
								case n.RecommendationsNotificationResult.Accepted:
									this.M($[0].exeName, $);
									break;
								case n.RecommendationsNotificationResult.Ignored:
									this.m.delete(y);
									break;
								case n.RecommendationsNotificationResult.IncompatibleWindow: {
									const S = r.Event.once(
										r.Event.latch(
											r.Event.any(
												this.r.onDidOpenMainWindow,
												this.r.onDidFocusMainWindow,
											),
										),
									);
									this.D(S(() => this.F()));
									break;
								}
								case n.RecommendationsNotificationResult.TooMany: {
									const S = this.D(new i.$2c());
									S.value = (0, m.$Oh)(
										() => {
											S.dispose(), this.F();
										},
										60 * 60 * 1e3,
									);
									break;
								}
							}
						});
					}
					G() {
						if (this.n.size === 0) return;
						const y = this.I(),
							$ = Date.now() - y,
							v = 7 * 24 * 60 * 60 * 1e3;
						if ($ < v) {
							const T = this.D(new i.$2c());
							T.value = (0, m.$Oh)(() => {
								T.dispose(), this.G();
							}, v - $);
							return;
						}
						const [S, I] = [...this.n.entries()][0];
						this.H(I).then((T) => {
							switch (T) {
								case n.RecommendationsNotificationResult.Accepted: {
									this.J(Date.now()), this.n.delete(S), this.M(I[0].exeName, I);
									const P = this.D(new i.$2c());
									P.value = (0, m.$Oh)(() => {
										P.dispose(), this.G();
									}, v);
									break;
								}
								case n.RecommendationsNotificationResult.Ignored:
									this.n.delete(S), this.G();
									break;
								case n.RecommendationsNotificationResult.IncompatibleWindow: {
									const P = r.Event.once(
										r.Event.latch(
											r.Event.any(
												this.r.onDidOpenMainWindow,
												this.r.onDidFocusMainWindow,
											),
										),
									);
									this.D(P(() => this.G()));
									break;
								}
								case n.RecommendationsNotificationResult.TooMany: {
									const P = this.D(new i.$2c());
									P.value = (0, m.$Oh)(
										() => {
											P.dispose(), this.G();
										},
										60 * 60 * 1e3,
									);
									break;
								}
							}
						});
					}
					async H(y) {
						const $ = await this.t.getInstalled(g.ExtensionType.User),
							v = y
								.filter(
									(S) =>
										!S.whenNotInstalled ||
										S.whenNotInstalled.every((I) =>
											$.every((T) => !(0, c.$7p)(T.identifier, { id: I })),
										),
								)
								.map(({ extensionId: S }) => S.toLowerCase());
						return this.w.promptImportantExtensionsInstallNotification({
							extensions: v,
							source: n.RecommendationSource.EXE,
							name: y[0].exeFriendlyName,
							searchValue: `@exe:"${y[0].exeName}"`,
						});
					}
					I() {
						let y = this.u.getNumber(b, p.StorageScope.APPLICATION);
						return y || ((y = Date.now()), this.J(y)), y;
					}
					J(y) {
						this.u.store(
							b,
							y,
							p.StorageScope.APPLICATION,
							p.StorageTarget.MACHINE,
						);
					}
					L() {
						return JSON.parse(this.u.get(f, p.StorageScope.APPLICATION, "{}"));
					}
					M(y, $) {
						const v = this.L();
						(v[y] = $.map(({ extensionId: S }) => S.toLowerCase())),
							this.u.store(
								f,
								JSON.stringify(v),
								p.StorageScope.APPLICATION,
								p.StorageTarget.USER,
							);
					}
					N(y, $) {
						const v = [],
							S = [],
							I = $.reduce(
								(T, P) => (T.add(P.identifier.id.toLowerCase()), T),
								new Set(),
							);
						return (
							y.forEach((T) => {
								I.has(T.toLowerCase()) ? v.push(T) : S.push(T);
							}),
							{ installed: v, uninstalled: S }
						);
					}
					async O(y) {
						const $ = [],
							v = new Map();
						for (const S of y.keys()) {
							const I = y.get(S);
							if (!I || !(0, t.$Pb)(I.recommendations)) continue;
							const T = [];
							a.$l
								? I.windowsPath &&
									T.push(
										I.windowsPath
											.replace("%USERPROFILE%", () => h.env.USERPROFILE)
											.replace(
												"%ProgramFiles(x86)%",
												() => h.env["ProgramFiles(x86)"],
											)
											.replace("%ProgramFiles%", () => h.env.ProgramFiles)
											.replace("%APPDATA%", () => h.env.APPDATA)
											.replace("%WINDIR%", () => h.env.WINDIR),
									)
								: (T.push((0, u.$oc)("/usr/local/bin", S)),
									T.push((0, u.$oc)("/usr/bin", S)),
									T.push((0, u.$oc)(this.q.fsPath, S)));
							for (const P of T) {
								let k = v.get(P);
								if (
									(k === void 0 &&
										((k = await this.b.exists(E.URI.file(P))), v.set(P, k)),
									k)
								)
									for (const {
										extensionId: L,
										extensionName: D,
										isExtensionPack: M,
										whenNotInstalled: N,
									} of I.recommendations)
										$.push({
											extensionId: L,
											extensionName: D,
											isExtensionPack: M,
											exeName: S,
											exeFriendlyName: I.exeFriendlyName,
											windowsPath: I.windowsPath,
											whenNotInstalled: N,
										});
							}
						}
						return $;
					}
				}
				e.$S5c = s;
			},
		),
		