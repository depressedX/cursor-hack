define(
			de[1902],
			he([
				1, 0, 33, 14, 3, 4, 959, 119, 154, 109, 5, 128, 34, 21, 129, 681, 60,
				133,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$exc = e.$dxc = e.$cxc = e.$bxc = e.$axc = void 0);
				let f = class {
					constructor(v, S, I, T, P) {
						(this.c = v),
							(this.d = S),
							(this.f = I),
							(this.g = T),
							(this.h = P);
					}
					async initialize(v) {
						const S = JSON.parse(v),
							I = await this.d.getInstalled(
								void 0,
								this.c.currentProfile.extensionsResource,
							),
							T = [],
							P = [];
						for (const L of S) {
							const D = this.g
									.getDisabledExtensions()
									.some((N) => (0, m.$7p)(N, L.identifier)),
								M = I.find((N) => (0, m.$7p)(N.identifier, L.identifier));
							(!M || (!M.isBuiltin && M.preRelease !== L.preRelease)) &&
								P.push(L),
								D !== !!L.disabled &&
									T.push({ extension: L.identifier, enable: !L.disabled });
						}
						const k = I.filter(
							(L) =>
								!L.isBuiltin &&
								!S.some(({ identifier: D }) => (0, m.$7p)(D, L.identifier)),
						);
						for (const { extension: L, enable: D } of T)
							D
								? (this.h.trace(
										"Initializing Profile: Enabling extension...",
										L.id,
									),
									await this.g.enableExtension(L),
									this.h.info(
										"Initializing Profile: Enabled extension...",
										L.id,
									))
								: (this.h.trace(
										"Initializing Profile: Disabling extension...",
										L.id,
									),
									await this.g.disableExtension(L),
									this.h.info(
										"Initializing Profile: Disabled extension...",
										L.id,
									));
						if (P.length) {
							const L = await this.f.getExtensions(
								P.map((D) => ({
									...D.identifier,
									version: D.version,
									hasPreRelease: D.version ? void 0 : D.preRelease,
								})),
								t.CancellationToken.None,
							);
							await Promise.all(
								P.map(async (D) => {
									const M = L.find((N) =>
										(0, m.$7p)(N.identifier, D.identifier),
									);
									M &&
										((await this.d.canInstall(M))
											? (this.h.trace(
													"Initializing Profile: Installing extension...",
													M.identifier.id,
													M.version,
												),
												await this.d.installFromGallery(M, {
													isMachineScoped: !1,
													donotIncludePackAndDependencies: !0,
													installGivenVersion: !!D.version,
													installPreReleaseVersion: D.preRelease,
													profileLocation:
														this.c.currentProfile.extensionsResource,
													context: { [d.$up]: !0 },
												}),
												this.h.info(
													"Initializing Profile: Installed extension...",
													M.identifier.id,
													M.version,
												))
											: this.h.info(
													"Initializing Profile: Skipped installing extension because it cannot be installed.",
													M.identifier.id,
												));
								}),
							);
						}
						k.length && (await Promise.all(k.map((L) => this.d.uninstall(L))));
					}
				};
				(e.$axc = f),
					(e.$axc = f =
						Ne(
							[j(0, o.$P8), j(1, d.$Hp), j(2, d.$Ep), j(3, d.$Kp), j(4, h.$ik)],
							f,
						));
				let b = class {
					constructor(v, S, I, T, P) {
						(this.c = v),
							(this.d = S),
							(this.f = I),
							(this.g = T),
							(this.h = P);
					}
					async getContent(v, S) {
						const I = await this.getLocalExtensions(v);
						return this.toContent(I, S);
					}
					toContent(v, S) {
						return JSON.stringify(
							S?.length
								? v.filter((I) => !S.includes(I.identifier.id.toLowerCase()))
								: v,
						);
					}
					async apply(v, S, I, T) {
						return this.i(S, async (P) => {
							const k = await this.getProfileExtensions(v),
								L = await this.c.getInstalled(void 0, S.extensionsResource),
								D = [],
								M = [];
							for (const A of k) {
								const R = P.getDisabledExtensions().some((B) =>
										(0, m.$7p)(B, A.identifier),
									),
									O = L.find((B) => (0, m.$7p)(B.identifier, A.identifier));
								(!O || (!O.isBuiltin && O.preRelease !== A.preRelease)) &&
									M.push(A),
									R !== !!A.disabled &&
										D.push({ extension: A.identifier, enable: !A.disabled });
							}
							const N = L.filter(
								(A) =>
									!A.isBuiltin &&
									!k.some(({ identifier: R }) => (0, m.$7p)(R, A.identifier)) &&
									!A.isApplicationScoped,
							);
							for (const { extension: A, enable: R } of D)
								R
									? (this.h.trace(
											`Importing Profile (${S.name}): Enabling extension...`,
											A.id,
										),
										await P.enableExtension(A),
										this.h.info(
											`Importing Profile (${S.name}): Enabled extension...`,
											A.id,
										))
									: (this.h.trace(
											`Importing Profile (${S.name}): Disabling extension...`,
											A.id,
										),
										await P.disableExtension(A),
										this.h.info(
											`Importing Profile (${S.name}): Disabled extension...`,
											A.id,
										));
							if (M.length) {
								this.h.info(
									`Importing Profile (${S.name}): Started installing extensions.`,
								);
								const A = await this.d.getExtensions(
										M.map((O) => ({
											...O.identifier,
											version: O.version,
											hasPreRelease: O.version ? void 0 : O.preRelease,
										})),
										t.CancellationToken.None,
									),
									R = [];
								if (
									(await Promise.all(
										M.map(async (O) => {
											const B = A.find((U) =>
												(0, m.$7p)(U.identifier, O.identifier),
											);
											B &&
												((await this.c.canInstall(B))
													? R.push({
															extension: B,
															options: {
																isMachineScoped: !1,
																donotIncludePackAndDependencies: !0,
																installGivenVersion: !!O.version,
																installPreReleaseVersion: O.preRelease,
																profileLocation: S.extensionsResource,
																context: { [d.$up]: !0 },
															},
														})
													: this.h.info(
															`Importing Profile (${S.name}): Skipped installing extension because it cannot be installed.`,
															B.identifier.id,
														));
										}),
									),
									R.length)
								)
									if (T)
										for (const O of R) {
											if (T.isCancellationRequested) return;
											I?.(
												(0, E.localize)(
													12902,
													null,
													O.extension.displayName ?? O.extension.identifier.id,
												),
											),
												await this.c.installFromGallery(O.extension, O.options);
										}
									else await this.c.installGalleryExtensions(R);
								this.h.info(
									`Importing Profile (${S.name}): Finished installing extensions.`,
								);
							}
							N.length &&
								(await Promise.all(N.map((A) => this.c.uninstall(A))));
						});
					}
					async copy(v, S, I) {
						await this.c.copyExtensions(
							v.extensionsResource,
							S.extensionsResource,
						);
						const T = await this.i(v, async (P) => P.getDisabledExtensions());
						if (I) {
							const P = await this.c.getInstalled(
								r.ExtensionType.User,
								S.extensionsResource,
							);
							for (const k of P) T.push(k.identifier);
						}
						await this.i(S, async (P) =>
							Promise.all(T.map((k) => P.disableExtension(k))),
						);
					}
					async getLocalExtensions(v) {
						return this.i(v, async (S) => {
							const I = new Map(),
								T = await this.c.getInstalled(void 0, v.extensionsResource),
								P = S.getDisabledExtensions();
							for (const k of T) {
								const { identifier: L, preRelease: D } = k,
									M = P.some((R) => (0, m.$7p)(R, L));
								if ((k.isBuiltin && !M) || (!k.isBuiltin && !k.identifier.uuid))
									continue;
								I.get(L.id.toLowerCase())?.disabled &&
									I.delete(L.id.toLowerCase());
								const A = {
									identifier: L,
									displayName: k.manifest.displayName,
								};
								M && (A.disabled = !0),
									!k.isBuiltin && k.pinned && (A.version = k.manifest.version),
									!A.version && D && (A.preRelease = !0),
									I.set(A.identifier.id.toLowerCase(), A);
							}
							return [...I.values()];
						});
					}
					async getProfileExtensions(v) {
						return JSON.parse(v);
					}
					async i(v, S) {
						return this.f.withProfileScopedStorageService(v, async (I) => {
							const T = new w.$Zc(),
								P = T.add(this.g.createChild(new a.$Ki([c.$lq, I]))),
								k = T.add(P.createInstance(C.$twc));
							try {
								return await S(k);
							} finally {
								T.dispose();
							}
						});
					}
				};
				(e.$bxc = b),
					(e.$bxc = b =
						Ne(
							[
								j(0, d.$Hp),
								j(1, d.$Ep),
								j(2, g.$0wc),
								j(3, u.$Li),
								j(4, h.$ik),
							],
							b,
						));
				class s {
					constructor() {
						(this.type = n.ProfileResourceType.Extensions),
							(this.handle = n.ProfileResourceType.Extensions),
							(this.label = { label: (0, E.localize)(12903, null) }),
							(this.collapsibleState = p.TreeItemCollapsibleState.Expanded),
							(this.contextValue = n.ProfileResourceType.Extensions),
							(this.c = new Set());
					}
					async getChildren() {
						const v = (await this.d()).sort((I, T) =>
								(I.displayName ?? I.identifier.id).localeCompare(
									T.displayName ?? T.identifier.id,
								),
							),
							S = this;
						return v.map((I) => ({
							handle: I.identifier.id.toLowerCase(),
							parent: this,
							label: { label: I.displayName || I.identifier.id },
							description: I.disabled ? (0, E.localize)(12904, null) : void 0,
							collapsibleState: p.TreeItemCollapsibleState.None,
							checkbox: S.checkbox
								? {
										get isChecked() {
											return !S.c.has(I.identifier.id.toLowerCase());
										},
										set isChecked(T) {
											T
												? S.c.delete(I.identifier.id.toLowerCase())
												: S.c.add(I.identifier.id.toLowerCase());
										},
										tooltip: (0, E.localize)(
											12905,
											null,
											I.displayName || I.identifier.id,
										),
										accessibilityInformation: {
											label: (0, E.localize)(
												12906,
												null,
												I.displayName || I.identifier.id,
											),
										},
									}
								: void 0,
							themeIcon: i.$ak.extensions,
							command: {
								id: "extension.open",
								title: "",
								arguments: [I.identifier.id, void 0, !0],
							},
						}));
					}
					async hasContent() {
						return (await this.d()).length > 0;
					}
				}
				e.$cxc = s;
				let l = class extends s {
					constructor(v, S) {
						super(), (this.f = v), (this.g = S);
					}
					isFromDefaultProfile() {
						return !this.f.isDefault && !!this.f.useDefaultFlags?.extensions;
					}
					d() {
						return this.g.createInstance(b).getLocalExtensions(this.f);
					}
					async getContent() {
						return this.g
							.createInstance(b)
							.getContent(this.f, [...this.c.values()]);
					}
				};
				(e.$dxc = l), (e.$dxc = l = Ne([j(1, u.$Li)], l));
				let y = class extends s {
					constructor(v, S) {
						super(), (this.f = v), (this.g = S);
					}
					isFromDefaultProfile() {
						return !1;
					}
					d() {
						return this.g.createInstance(b).getProfileExtensions(this.f);
					}
					async getContent() {
						const v = this.g.createInstance(b),
							S = await v.getProfileExtensions(this.f);
						return v.toContent(S, [...this.c.values()]);
					}
				};
				(e.$exc = y), (e.$exc = y = Ne([j(1, u.$Li)], y));
			},
		),
		