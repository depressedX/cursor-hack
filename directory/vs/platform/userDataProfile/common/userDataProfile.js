define(
			de[129],
			he([
				1, 0, 136, 6, 3, 19, 9, 4, 113, 22, 5, 34, 25, 59, 68, 15, 47, 37, 28,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2l = e.$1l = e.$Xl = e.ProfileResourceType = void 0),
					(e.$Wl = s),
					(e.$Yl = l),
					(e.$Zl = y);
				var b;
				(function (S) {
					(S.Settings = "settings"),
						(S.Keybindings = "keybindings"),
						(S.Snippets = "snippets"),
						(S.Tasks = "tasks"),
						(S.Extensions = "extensions"),
						(S.GlobalState = "globalState");
				})(b || (e.ProfileResourceType = b = {}));
				function s(S) {
					const I = S;
					return !!(
						I &&
						typeof I == "object" &&
						typeof I.id == "string" &&
						typeof I.isDefault == "boolean" &&
						typeof I.name == "string" &&
						C.URI.isUri(I.location) &&
						C.URI.isUri(I.globalStorageHome) &&
						C.URI.isUri(I.settingsResource) &&
						C.URI.isUri(I.keybindingsResource) &&
						C.URI.isUri(I.tasksResource) &&
						C.URI.isUri(I.snippetsHome) &&
						C.URI.isUri(I.extensionsResource)
					);
				}
				e.$Xl = (0, u.$Mi)("IUserDataProfilesService");
				function l(S, I) {
					return {
						id: S.id,
						isDefault: S.isDefault,
						name: S.name,
						shortName: S.shortName,
						icon: S.icon,
						location: C.URI.revive(S.location).with({ scheme: I }),
						globalStorageHome: C.URI.revive(S.globalStorageHome).with({
							scheme: I,
						}),
						settingsResource: C.URI.revive(S.settingsResource).with({
							scheme: I,
						}),
						keybindingsResource: C.URI.revive(S.keybindingsResource).with({
							scheme: I,
						}),
						tasksResource: C.URI.revive(S.tasksResource).with({ scheme: I }),
						snippetsHome: C.URI.revive(S.snippetsHome).with({ scheme: I }),
						extensionsResource: C.URI.revive(S.extensionsResource).with({
							scheme: I,
						}),
						cacheHome: C.URI.revive(S.cacheHome).with({ scheme: I }),
						useDefaultFlags: S.useDefaultFlags,
						isTransient: S.isTransient,
					};
				}
				function y(S, I, T, P, k, L) {
					return {
						id: S,
						name: I,
						location: T,
						isDefault: !1,
						shortName: k?.shortName,
						icon: k?.icon,
						globalStorageHome:
							L && k?.useDefaultFlags?.globalState
								? L.globalStorageHome
								: (0, E.$nh)(T, "globalStorage"),
						settingsResource:
							L && k?.useDefaultFlags?.settings
								? L.settingsResource
								: (0, E.$nh)(T, "settings.json"),
						keybindingsResource:
							L && k?.useDefaultFlags?.keybindings
								? L.keybindingsResource
								: (0, E.$nh)(T, "keybindings.json"),
						tasksResource:
							L && k?.useDefaultFlags?.tasks
								? L.tasksResource
								: (0, E.$nh)(T, "tasks.json"),
						snippetsHome:
							L && k?.useDefaultFlags?.snippets
								? L.snippetsHome
								: (0, E.$nh)(T, "snippets"),
						extensionsResource:
							L && k?.useDefaultFlags?.extensions
								? L.extensionsResource
								: (0, E.$nh)(T, "extensions.json"),
						cacheHome: (0, E.$nh)(P, S),
						useDefaultFlags: k?.useDefaultFlags,
						isTransient: k?.transient,
					};
				}
				let $ = class extends w.$1c {
					static {
						this.b = "userDataProfiles";
					}
					static {
						this.c = "profileAssociations";
					}
					get defaultProfile() {
						return this.profiles[0];
					}
					get profiles() {
						return [...this.z.profiles, ...this.r.profiles];
					}
					constructor(I, T, P, k) {
						super(),
							(this.s = I),
							(this.t = T),
							(this.u = P),
							(this.w = k),
							(this.f = !0),
							(this.h = this.D(new i.$re())),
							(this.onDidChangeProfiles = this.h.event),
							(this.j = this.D(new i.$re())),
							(this.onWillCreateProfile = this.j.event),
							(this.m = this.D(new i.$re())),
							(this.onWillRemoveProfile = this.m.event),
							(this.n = this.D(new i.$re())),
							(this.onDidResetWorkspaces = this.n.event),
							(this.q = new Map()),
							(this.r = {
								profiles: [],
								folders: new c.$Gc(),
								workspaces: new c.$Gc(),
								emptyWindows: new Map(),
							}),
							(this.profilesHome = (0, E.$nh)(
								this.s.userRoamingDataHome,
								"profiles",
							)),
							(this.g = (0, E.$nh)(this.s.cacheHome, "CachedProfilesData"));
					}
					init() {
						this.y = void 0;
					}
					setEnablement(I) {
						this.f !== I && ((this.y = void 0), (this.f = I));
					}
					isEnabled() {
						return this.f;
					}
					get z() {
						if (!this.y) {
							const I = this.C(),
								T = [I];
							if (this.f)
								try {
									for (const L of this.O()) {
										if (!L.name || !(0, f.$lg)(L.name) || !L.location) {
											this.w.warn(
												"Skipping the invalid stored profile",
												L.location || L.name,
											);
											continue;
										}
										T.push(
											y(
												(0, E.$kh)(L.location),
												L.name,
												L.location,
												this.g,
												{
													shortName: L.shortName,
													icon: L.icon,
													useDefaultFlags: L.useDefaultFlags,
												},
												I,
											),
										);
									}
								} catch (L) {
									this.w.error(L);
								}
							const P = new c.$Gc(),
								k = new Map();
							if (T.length)
								try {
									const L = this.Q();
									if (L.workspaces)
										for (const [D, M] of Object.entries(L.workspaces)) {
											const N = C.URI.parse(D),
												A = T.find((R) => R.id === M);
											A && P.set(N, A);
										}
									if (L.emptyWindows)
										for (const [D, M] of Object.entries(L.emptyWindows)) {
											const N = T.find((A) => A.id === M);
											N && k.set(D, N);
										}
								} catch (L) {
									this.w.error(L);
								}
							this.y = { profiles: T, workspaces: P, emptyWindows: k };
						}
						return this.y;
					}
					C() {
						const I = y(
							"__default__profile__",
							(0, d.localize)(2446, null),
							this.s.userRoamingDataHome,
							this.g,
						);
						return {
							...I,
							extensionsResource: this.S() ?? I.extensionsResource,
							isDefault: !0,
						};
					}
					async createTransientProfile(I) {
						const T = "Temp",
							P = new RegExp(`${(0, o.$of)(T)}\\s(\\d+)`);
						let k = 0;
						for (const D of this.profiles) {
							const M = P.exec(D.name),
								N = M ? parseInt(M[1]) : 0;
							k = N > k ? N : k;
						}
						const L = `${T} ${k + 1}`;
						return this.createProfile(
							(0, t.$Aj)((0, p.$9g)()).toString(16),
							L,
							{ transient: !0 },
							I,
						);
					}
					async createNamedProfile(I, T, P) {
						return this.createProfile(
							(0, t.$Aj)((0, p.$9g)()).toString(16),
							I,
							T,
							P,
						);
					}
					async createProfile(I, T, P, k) {
						if (!this.f)
							throw new Error(
								"Profiles are disabled in the current environment.",
							);
						const L = await this.F(I, T, P);
						return k && (await this.setProfileForWorkspace(k, L)), L;
					}
					async F(I, T, P) {
						if (!(0, f.$lg)(T) || !T)
							throw new Error(
								"Name of the profile is mandatory and must be of type `string`",
							);
						let k = this.q.get(T);
						return (
							k ||
								((k = (async () => {
									try {
										if (this.profiles.find((N) => N.name === T || N.id === I))
											throw new Error(`Profile with ${T} name already exists`);
										const D = y(
											I,
											T,
											(0, E.$nh)(this.profilesHome, I),
											this.g,
											P,
											this.defaultProfile,
										);
										await this.t.createFolder(D.location);
										const M = [];
										return (
											this.j.fire({
												profile: D,
												join(N) {
													M.push(N);
												},
											}),
											await g.Promises.settled(M),
											this.I([D], [], []),
											D
										);
									} finally {
										this.q.delete(T);
									}
								})()),
								this.q.set(T, k)),
							k
						);
					}
					async updateProfile(I, T) {
						if (!this.f)
							throw new Error(
								"Profiles are disabled in the current environment.",
							);
						let P = this.profiles.find((k) => k.id === I.id);
						if (!P) throw new Error(`Profile '${I.name}' does not exist`);
						return (
							(P = y(
								P.id,
								T.name ?? P.name,
								P.location,
								this.g,
								{
									shortName: T.shortName ?? P.shortName,
									icon: T.icon === null ? void 0 : (T.icon ?? P.icon),
									transient: T.transient ?? P.isTransient,
									useDefaultFlags: T.useDefaultFlags ?? P.useDefaultFlags,
								},
								this.defaultProfile,
							)),
							this.I([], [], [P]),
							P
						);
					}
					async removeProfile(I) {
						if (!this.f)
							throw new Error(
								"Profiles are disabled in the current environment.",
							);
						if (I.isDefault) throw new Error("Cannot remove default profile");
						const T = this.profiles.find((k) => k.id === I.id);
						if (!T) throw new Error(`Profile '${I.name}' does not exist`);
						const P = [];
						this.m.fire({
							profile: T,
							join(k) {
								P.push(k);
							},
						});
						try {
							await Promise.allSettled(P);
						} catch (k) {
							this.w.error(k);
						}
						for (const k of [...this.z.emptyWindows.keys()])
							T.id === this.z.emptyWindows.get(k)?.id &&
								this.z.emptyWindows.delete(k);
						for (const k of [...this.z.workspaces.keys()])
							T.id === this.z.workspaces.get(k)?.id &&
								this.z.workspaces.delete(k);
						this.M(), this.I([], [T], []);
						try {
							await this.t.del(T.cacheHome, { recursive: !0 });
						} catch (k) {
							(0, r.$Cl)(k) !== r.FileOperationResult.FILE_NOT_FOUND &&
								this.w.error(k);
						}
					}
					async setProfileForWorkspace(I, T) {
						if (!this.f)
							throw new Error(
								"Profiles are disabled in the current environment.",
							);
						const P = this.profiles.find((k) => k.id === T.id);
						if (!P) throw new Error(`Profile '${T.name}' does not exist`);
						this.L(I, P);
					}
					unsetWorkspace(I, T) {
						if (!this.f)
							throw new Error(
								"Profiles are disabled in the current environment.",
							);
						this.L(I, void 0, T);
					}
					async resetWorkspaces() {
						this.r.folders.clear(),
							this.r.workspaces.clear(),
							this.r.emptyWindows.clear(),
							this.z.workspaces.clear(),
							this.z.emptyWindows.clear(),
							this.M(),
							this.n.fire();
					}
					async cleanUp() {
						if (this.f && (await this.t.exists(this.profilesHome))) {
							const I = await this.t.resolve(this.profilesHome);
							await Promise.all(
								(I.children || [])
									.filter(
										(T) =>
											T.isDirectory &&
											this.profiles.every(
												(P) => !this.u.extUri.isEqual(P.location, T.resource),
											),
									)
									.map((T) => this.t.del(T.resource, { recursive: !0 })),
							);
						}
					}
					async cleanUpTransientProfiles() {
						if (!this.f) return;
						const I = this.r.profiles.filter((T) => !this.H(T));
						await Promise.allSettled(I.map((T) => this.removeProfile(T)));
					}
					getProfileForWorkspace(I) {
						const T = this.G(I),
							P = C.URI.isUri(T)
								? this.z.workspaces.get(T)
								: this.z.emptyWindows.get(T);
						return (
							P ||
							((0, h.$Wi)(I)
								? this.r.folders.get(I.uri)
								: (0, h.$2i)(I)
									? this.r.workspaces.get(I.configPath)
									: this.r.emptyWindows.get(I.id))
						);
					}
					G(I) {
						return (0, h.$Wi)(I) ? I.uri : (0, h.$2i)(I) ? I.configPath : I.id;
					}
					H(I) {
						return !!(
							[...this.z.emptyWindows.values()].some((T) =>
								this.u.extUri.isEqual(T.location, I.location),
							) ||
							[...this.z.workspaces.values()].some((T) =>
								this.u.extUri.isEqual(T.location, I.location),
							) ||
							[...this.r.emptyWindows.values()].some((T) =>
								this.u.extUri.isEqual(T.location, I.location),
							) ||
							[...this.r.workspaces.values()].some((T) =>
								this.u.extUri.isEqual(T.location, I.location),
							) ||
							[...this.r.folders.values()].some((T) =>
								this.u.extUri.isEqual(T.location, I.location),
							)
						);
					}
					I(I, T, P) {
						const k = [...this.profiles, ...I],
							L = [],
							D = this.r.profiles;
						this.r.profiles = [];
						for (let M of k) {
							if (M.isDefault || T.some((A) => M.id === A.id)) continue;
							M = P.find((A) => M.id === A.id) ?? M;
							const N = D.find((A) => M.id === A.id);
							if (M.isTransient) this.r.profiles.push(M);
							else {
								if (N) {
									for (const [A, R] of this.r.emptyWindows.entries())
										if (M.id === R.id) {
											this.L({ id: A }, M);
											break;
										}
									for (const [A, R] of this.r.workspaces.entries())
										if (M.id === R.id) {
											this.L({ id: "", configPath: A }, M);
											break;
										}
									for (const [A, R] of this.r.folders.entries())
										if (M.id === R.id) {
											this.L({ id: "", uri: A }, M);
											break;
										}
								}
								L.push({
									location: M.location,
									name: M.name,
									shortName: M.shortName,
									icon: M.icon,
									useDefaultFlags: M.useDefaultFlags,
								});
							}
						}
						this.P(L), (this.y = void 0), this.J(I, T, P);
					}
					J(I, T, P) {
						this.h.fire({
							added: I,
							removed: T,
							updated: P,
							all: this.profiles,
						});
					}
					L(I, T, P) {
						if (((P = T?.isTransient ? !0 : P), P))
							(0, h.$Wi)(I)
								? (this.r.folders.delete(I.uri),
									T && this.r.folders.set(I.uri, T))
								: (0, h.$2i)(I)
									? (this.r.workspaces.delete(I.configPath),
										T && this.r.workspaces.set(I.configPath, T))
									: (this.r.emptyWindows.delete(I.id),
										T && this.r.emptyWindows.set(I.id, T));
						else {
							this.L(I, void 0, !0);
							const k = this.G(I);
							C.URI.isUri(k)
								? (this.z.workspaces.delete(k),
									T && this.z.workspaces.set(k, T))
								: (this.z.emptyWindows.delete(k),
									T && this.z.emptyWindows.set(k, T)),
								this.M();
						}
					}
					M() {
						const I = {};
						for (const [P, k] of this.z.workspaces.entries())
							I[P.toString()] = k.id;
						const T = {};
						for (const [P, k] of this.z.emptyWindows.entries())
							T[P.toString()] = k.id;
						this.R({ workspaces: I, emptyWindows: T }), (this.y = void 0);
					}
					N(I) {
						const T = {},
							P = this.C();
						if (I.workspaces)
							for (const [L, D] of Object.entries(I.workspaces)) {
								const M = C.URI.parse(D);
								T[L] = this.u.extUri.isEqual(M, P.location)
									? P.id
									: this.u.extUri.basename(M);
							}
						const k = {};
						if (I.emptyWindows)
							for (const [L, D] of Object.entries(I.emptyWindows)) {
								const M = C.URI.parse(D);
								k[L] = this.u.extUri.isEqual(M, P.location)
									? P.id
									: this.u.extUri.basename(M);
							}
						return { workspaces: T, emptyWindows: k };
					}
					O() {
						return [];
					}
					P(I) {
						throw new Error("not implemented");
					}
					Q() {
						return {};
					}
					R(I) {
						throw new Error("not implemented");
					}
					S() {}
				};
				(e.$1l = $),
					(e.$1l = $ =
						Ne([j(0, m.$Ti), j(1, r.$ll), j(2, n.$Vl), j(3, a.$ik)], $));
				class v extends $ {
					constructor() {
						super(...arguments), (this.a = []), (this.X = {});
					}
					O() {
						return this.a;
					}
					P(I) {
						this.a = I;
					}
					Q() {
						return this.X;
					}
					R(I) {
						this.X = I;
					}
				}
				e.$2l = v;
			},
		),
		