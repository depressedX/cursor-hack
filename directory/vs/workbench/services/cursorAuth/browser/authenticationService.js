import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/url/common/url.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../base/common/uuid.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../base/common/buffer.js';
import '../../ai/browser/cursorCredsService.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../../proto/aiserver/v1/dashboard_connectweb.js';
import '../../../../../proto/aiserver/v1/auth_connectweb.js';
import '../../../../base/common/lifecycle.js';
import '../../../../../proto/aiserver/v1/dashboard_pb.js';
import '../../environment/common/environmentService.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../ai/browser/utils.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../base/common/event.js';
import '../../../../base/browser/window.js';
import '../../../../../proto/aiserver/v1/auth_pb.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/reactivestorage/common/reactiveStorageTypes.js';
import '../../ai/browser/backendClient.js';
import '../../../contrib/aiCpp/browser/cppDebouncingService.js';
import '../../ai/browser/connectRequestService.js';
import '../../../../../external/solid/solid.js';
import '../../../../base/common/constants.js';
import '../../../../platform/tracing/common/tracing.js';
define(
			de[232],
			he([
				1, 0, 5, 465, 20, 41, 47, 21, 76, 477, 34, 32, 45, 1107, 1469, 3, 894,
				78, 119, 191, 11, 6, 75, 1468, 62, 134, 285, 551, 1280, 13, 58, 216,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*instantiation*/,
				i /*url*/,
				w /*extensions*/,
				E /*opener*/,
				C /*uuid*/,
				d /*storage*/,
				m /*buffer*/,
				r /*cursorCredsService*/,
				u /*log*/,
				a /*telemetry*/,
				h /*reactiveStorageService*/,
				c /*dashboard_connectweb*/,
				n /*auth_connectweb*/,
				g /*lifecycle*/,
				p /*dashboard_pb*/,
				o /*environmentService*/,
				f /*extensionManagement*/,
				b /*utils*/,
				s /*actions*/,
				l /*event*/,
				y /*window*/,
				$ /*auth_pb*/,
				v /*productService*/,
				S /*reactiveStorageTypes*/,
				I /*backendClient*/,
				T /*cppDebouncingService*/,
				P /*connectRequestService*/,
				k /*solid*/,
				L /*constants*/,
				D /*tracing*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$H6b =
						e.SignUpType =
						e.$G6b =
						e.$F6b =
						e.$E6b =
						e.$D6b =
						e.$C6b =
						e.$B6b =
						e.$A6b =
						e.$z6b =
						e.$y6b =
						e.$x6b =
							void 0),
					(e.$x6b = (0, t.$Mi)("authenticationService")),
					(e.$y6b = "cursorAuth/stripeCustomerId"),
					(e.$z6b = "cursorAuth/stripeMembershipType"),
					(e.$A6b = "cursorAuth/cachedEmail"),
					(e.$B6b = "cursorAuth/cachedSignUpType"),
					(e.$C6b = "cursorai/donotchange/privacyMode"),
					(e.$D6b = [
						"claude-3-opus-20240229",
						"claude-3-sonnet-20240229",
						"claude-3-haiku-20240307",
					]),
					(e.$E6b = ["gemini-1.5-flash", "gemini-1.5-flash-8b"]);
				const M = ["gemini-1.5-preview"],
					N = (F) => e.$D6b.includes(F) || F.startsWith("claude-");
				e.$F6b = N;
				const A = (F) =>
					e.$E6b.includes(F) || (F.startsWith("gemini-") && !M.includes(F));
				e.$G6b = A;
				var R;
				(function (F) {
					(F.UNKNOWN = "unknown"),
						(F.AUTH_0 = "Auth_0"),
						(F.GOOGLE = "Google"),
						(F.GITHUB = "Github");
				})(R || (e.SignUpType = R = {}));
				const O = 2 * 60 * 60 * 1e3;
				let B = class extends g.$1c {
					constructor(x, H, q) {
						super(),
							(this.a = x),
							(this.c = H),
							(this.f = q),
							(this.g = []),
							(this.h = []),
							(this.j = []),
							(this.m = []),
							(this.n = []),
							(this.q = new l.$re()),
							(this.r = null),
							(this.onDidChangeSubscription = this.q.event),
							(this.s = () =>
								this.a.get(
									"cursorAuth/refreshToken",
									d.StorageScope.APPLICATION,
								)),
							(this.t = () =>
								this.c.overrideCursorAuthToken
									? this.c.overrideCursorAuthToken
									: this.a.get(
											"cursorAuth/accessToken",
											d.StorageScope.APPLICATION,
										)),
							(this.u = () => this.a.get(e.$z6b, d.StorageScope.APPLICATION)),
							(this.membershipType = () => {
								switch (this.u()) {
									case S.MembershipType.ENTERPRISE:
										return S.MembershipType.ENTERPRISE;
									case S.MembershipType.PRO:
										return S.MembershipType.PRO;
									case S.MembershipType.FREE_TRIAL:
										return S.MembershipType.FREE_TRIAL;
									default:
										return S.MembershipType.FREE;
								}
							}),
							(this.openAIKey = () =>
								this.a.get("cursorAuth/openAIKey", d.StorageScope.APPLICATION)),
							(this.claudeKey = () =>
								this.a.get("cursorAuth/claudeKey", d.StorageScope.APPLICATION)),
							(this.googleKey = () =>
								this.a.get("cursorAuth/googleKey", d.StorageScope.APPLICATION)),
							(this.w = (V, G) => {
								this.a.store(
									"cursorAuth/refreshToken",
									G,
									d.StorageScope.APPLICATION,
									d.StorageTarget.MACHINE,
								),
									this.a.store(
										"cursorAuth/accessToken",
										V,
										d.StorageScope.APPLICATION,
										d.StorageTarget.MACHINE,
									);
								const K = !!V && !!G;
								for (const J of this.m) J(K);
								if (K) {
									const J = (0, m.$bf)(V),
										W = new Date(J.exp * 1e3),
										X = new Date(W.getTime() - O);
									X.getTime() > Date.now() &&
										setTimeout(() => {
											this.refreshAccessToken();
										}, X.getTime() - Date.now());
								}
							}),
							(this.y = (V, G) => {
								this.a.store(
									e.$A6b,
									V,
									d.StorageScope.APPLICATION,
									d.StorageTarget.MACHINE,
								),
									this.a.store(
										e.$B6b,
										G,
										d.StorageScope.APPLICATION,
										d.StorageTarget.MACHINE,
									);
							}),
							(this.z = () => {
								this.a.store(
									e.$A6b,
									"",
									d.StorageScope.APPLICATION,
									d.StorageTarget.MACHINE,
								),
									this.a.store(
										e.$B6b,
										R.UNKNOWN,
										d.StorageScope.APPLICATION,
										d.StorageTarget.MACHINE,
									);
							}),
							(this.isTokenExpired = (V) => {
								const G = (0, m.$bf)(V);
								return new Date(G.exp * 1e3).getTime() < Date.now();
							}),
							(this.H = (V) => {
								const G = this.membershipType();
								(V = V ?? S.MembershipType.FREE),
									this.a.store(
										e.$z6b,
										V,
										d.StorageScope.APPLICATION,
										d.StorageTarget.MACHINE,
									),
									G !== V && this.C(V, G),
									this.q.fire(V);
							}),
							(this.storeOpenAIKey = (V) => {
								for (const G of this.g) G(V);
								this.a.store(
									"cursorAuth/openAIKey",
									V,
									d.StorageScope.APPLICATION,
									d.StorageTarget.MACHINE,
								);
							}),
							(this.storeClaudeKey = (V) => {
								for (const G of this.h) G(V);
								this.a.store(
									"cursorAuth/claudeKey",
									V,
									d.StorageScope.APPLICATION,
									d.StorageTarget.MACHINE,
								);
							}),
							(this.storeGoogleKey = (V) => {
								for (const G of this.j) G(V);
								this.a.store(
									"cursorAuth/googleKey",
									V,
									d.StorageScope.APPLICATION,
									d.StorageTarget.MACHINE,
								);
							});
					}
					getApiKeyForModel(x) {
						return (0, e.$F6b)(x) &&
							this.f.applicationUserPersistentStorage.useClaudeKey
							? this.claudeKey()
							: (0, e.$G6b)(x) &&
									this.f.applicationUserPersistentStorage.useGoogleKey
								? this.googleKey()
								: this.openAIKey();
					}
					getExpirationTime(x) {
						return (0, m.$bf)(x).exp * 1e3;
					}
					isAlmostExpired(x) {
						if (
							this.r === null ||
							this.r.accessToken !== x ||
							this.r.cacheExpiration < Date.now()
						) {
							const q = this.getExpirationTime(x) - 5 * 60 * 1e3;
							return Date.now() > q
								? ((this.r = null), !0)
								: ((this.r = { accessToken: x, cacheExpiration: q }), !1);
						} else return !1;
					}
					addOpenAIKeyChangedListener(x) {
						this.g.push(x);
					}
					addClaudeKeyChangedListener(x) {
						this.h.push(x);
					}
					addGoogleKeyChangedListener(x) {
						this.j.push(x);
					}
					addLoginChangedListener(x) {
						this.m.push(x);
					}
					addSubscriptionChangedListener(x) {
						this.n.push(x);
					}
					removeOpenAIKeyChangedListener(x) {
						this.g = this.g.filter((H) => H !== x);
					}
					removeClaudeKeyChangedListener(x) {
						this.h = this.h.filter((H) => H !== x);
					}
					removeGoogleKeyChangedListener(x) {
						this.j = this.j.filter((H) => H !== x);
					}
					removeLoginChangedListener(x) {
						this.m = this.m.filter((H) => H !== x);
					}
					removeSubscriptionChangedListener(x) {
						this.n = this.n.filter((H) => H !== x);
					}
					C(x, H) {
						for (const q of this.n) q(x, H);
					}
					F(x) {
						for (const H of this.m) H(x);
					}
					G(x) {
						this.q.fire(x);
					}
				};
				B = Ne([j(0, d.$lq), j(1, o.$r8), j(2, h.$0zb)], B);
				let U = class extends B {
					constructor(x, H, q, V, G, K, J, W, X, Y, ie, ne) {
						super(x, H, q),
							(this.X = V),
							(this.Y = G),
							(this.Z = K),
							(this.$ = J),
							(this.ab = W),
							(this.bb = X),
							(this.cb = Y),
							(this.db = ie),
							(this.eb = ne),
							(this.L = () => {}),
							(this.M = () => {}),
							(this.N = () => {}),
							(this.R = () => !0),
							(this.S = () => {}),
							(this.U = !0),
							(this.W = new l.$re()),
							(this.onDidPotentiallyChangePrivacyMode = this.W.event),
							(this.getDaysRemainingOnTrial = async () => {
								const te = await this.getAccessToken();
								return te
									? (
											await (
												await fetch(
													`${this.X.getBackendUrl()}/auth/full_stripe_profile`,
													{
														headers: {
															Authorization: `Bearer ${te}`,
															[S.$oJ]: (0, S.$pJ)(this.reactivePrivacyMode()),
															[D.$HOb]: (0, D.$NOb)(),
														},
													},
												)
											).json()
										).daysRemainingOnTrial
									: void 0;
							}),
							(this.logout = async () => {
								this.a.store(
									"cursorAuth/refreshToken",
									null,
									d.StorageScope.APPLICATION,
									d.StorageTarget.MACHINE,
								),
									this.a.store(
										"cursorAuth/accessToken",
										null,
										d.StorageScope.APPLICATION,
										d.StorageTarget.MACHINE,
									),
									this.a.store(
										e.$y6b,
										null,
										d.StorageScope.APPLICATION,
										d.StorageTarget.MACHINE,
									),
									this.a.store(
										e.$z6b,
										S.MembershipType.FREE,
										d.StorageScope.APPLICATION,
										d.StorageTarget.MACHINE,
									),
									this.z(),
									this.C(S.MembershipType.FREE, S.MembershipType.FREE),
									this.G(S.MembershipType.FREE),
									this.F(!1),
									this.refreshMembershipType(),
									await this.Y.open(`${this.X.getLogoutUrl()}`, {
										openExternal: !0,
									});
							}),
							(this.debouncedRefetchIsTeamsPrivacyModeOn = (0, T.$t6b)(() => {
								this.S();
							}, 3e4)),
							(this.fb = !1),
							(this.lb = !1),
							(this.refreshAccessToken = async (te = !1) => {
								if (this.lb) return;
								this.lb = !0;
								let Q;
								try {
									const Z = this.t();
									if (
										Z &&
										!te &&
										new Date((0, m.$bf)(Z).exp * 1e3).getTime() - Date.now() > O
									)
										return;
									const se = this.s();
									if (se) {
										const re = new AbortController();
										Q = setTimeout(() => re.abort(), 2e4);
										const le = {
												method: "POST",
												headers: { "content-type": "application/json" },
												body: JSON.stringify({
													grant_type: "refresh_token",
													client_id: this.X.getCredentials().authClientId,
													refresh_token: se,
												}),
												signal: re.signal,
											},
											oe = `https://${this.X.getCredentials().authDomain}/oauth/token`,
											ae = await fetch(oe, le);
										if ((clearTimeout(Q), ae instanceof Error))
											throw new Error("Failed to refresh access token");
										console.log("successfully refreshed access token!");
										const pe = await ae.json();
										pe.shouldLogout === !0
											? this.logout()
											: this.w(pe.access_token, se);
									}
								} catch (Z) {
									console.error(Z);
								} finally {
									(this.lb = !1), Q && clearTimeout(Q);
								}
							}),
							(this.getDidUserLastPaymentFailed = async () => {
								const te = await this.getAccessToken();
								return await (
									await fetch(
										`${this.X.getBackendUrl()}/auth/last_payment_failed`,
										{
											headers: {
												Authorization: `Bearer ${te}`,
												[S.$oJ]: (0, S.$pJ)(this.reactivePrivacyMode()),
												[D.$HOb]: (0, D.$NOb)(),
											},
										},
									)
								).json();
							}),
							(this.refreshMembershipType = async () => {
								const te = this.t();
								if (!te) {
									this.H(S.MembershipType.FREE),
										this.f.applicationUserPersistentStorage.aiSettings.teamIds
											?.length !== 0 &&
											this.f.setApplicationUserPersistentStorage(
												"aiSettings",
												"teamIds",
												[],
											);
									return;
								}
								const Q = await this.getTeams();
								if (Q.some((se) => se.hasBilling && se.seats > 0)) {
									const se =
										this.f.applicationUserPersistentStorage.aiSettings
											.teamIds || [];
									(se.length !== Q.length ||
										se.some((re) => !Q.some((le) => le.id === re))) &&
										this.f.setApplicationUserPersistentStorage(
											"aiSettings",
											"teamIds",
											Q.map((re) => re.id),
										),
										this.H(S.MembershipType.ENTERPRISE),
										(0, k.untrack)(() => {
											this.W.fire(this.reactivePrivacyMode());
										});
									return;
								} else
									this.f.applicationUserPersistentStorage.aiSettings.teamIds
										?.length !== 0 &&
										this.f.setApplicationUserPersistentStorage(
											"aiSettings",
											"teamIds",
											[],
										);
								let Z;
								try {
									const se = await fetch(
										`${this.X.getBackendUrl()}/auth/full_stripe_profile`,
										{
											headers: {
												Authorization: `Bearer ${te}`,
												[S.$oJ]: (0, S.$pJ)(this.reactivePrivacyMode()),
												[D.$HOb]: (0, D.$NOb)(),
											},
										},
									);
									if (se.status === 404) throw new Error("404 Not found");
									Z = await se.json();
								} catch {
									const re = await fetch(
										`${this.X.getBackendUrl()}/auth/stripe_profile`,
										{
											headers: {
												Authorization: `Bearer ${te}`,
												[S.$oJ]: (0, S.$pJ)(this.reactivePrivacyMode()),
												[D.$HOb]: (0, D.$NOb)(),
											},
										},
									).then((le) => le.json());
									re && typeof re == "string"
										? (Z = {
												membershipType: S.MembershipType.PRO,
												paymentId: re,
											})
										: (Z = void 0);
								}
								Z !== void 0
									? this.H(Z.membershipType)
									: this.H(S.MembershipType.FREE);
							}),
							(this.mb = (0, k.createSignal)(0)),
							(this.reactiveMembershipType = () => {
								const te = this.mb[0]();
								return this.membershipType();
							}),
							(this.Q = this.D(this.f.createScoped(this))),
							(this.I = new g.$Zc()),
							this.D(this.I),
							this.f.setApplicationUserPersistentStorage(
								"membershipType",
								this.membershipType(),
							),
							this.a.onDidChangeValue(
								d.StorageScope.APPLICATION,
								e.$z6b,
								this.I,
							)(() => {
								this.f.setApplicationUserPersistentStorage(
									"membershipType",
									this.a.get(e.$z6b, d.StorageScope.APPLICATION),
								);
							}),
							this.Q.onChangeEffect({
								deps: [() => this.reactivePrivacyMode()],
								onChange: ({ deps: te }) => {
									this.W.fire(te[0]);
								},
								runNowToo: !0,
							}),
							this.bb.registerBearerTokenProvider(() => this.getAccessToken()),
							this.Z.registerHandler({
								handleURL: async (te, Q) => {
									if (
										(te.scheme === "control" || te.scheme === "cursor") &&
										te.authority === "cursorAuth"
									) {
										const Z = te.query,
											se = new URLSearchParams(Z);
										return this.hb(se), !0;
									}
									return !1;
								},
							}),
							(this.O = this.cb.createInstance(I.$q6b, { service: c.$X$ })),
							(this.P = this.cb.createInstance(I.$q6b, { service: n.$I0 })),
							this.addLoginChangedListener((te) => {
								if ((this.O.createServer(), this.P.createServer(), te)) {
									const Q = this.t();
									if (Q) {
										const Z = this.getAuthIdFromToken(Q);
										this.ab.registerAuthId(Z);
										return;
									}
								}
								this.ab.registerAuthId(void 0);
							});
						const ee = this.t();
						if (ee) {
							const te = this.getAuthIdFromToken(ee);
							this.ab.registerAuthId(te);
						} else this.ab.registerAuthId(void 0);
						this.D(
							this.db.onDidChangeTransport(() => {
								this.sendPrivacySettings().catch(console.error);
							}),
						),
							this.reconcilePrivacyMode(),
							this.Q.onChangeEffect({
								deps: [() => this.reactivePrivacyMode()],
								onChange: ({ deps: te }) => {
									this.sendPrivacySettings().catch(console.error);
									try {
										this.a.store(
											e.$C6b,
											(0, S.$pJ)(this.reactivePrivacyMode()),
											d.StorageScope.APPLICATION,
											d.StorageTarget.USER,
										);
									} catch (Q) {
										console.error(Q);
									}
								},
							});
						const _ = this.Q.createImplicitResource({
							depFn: () =>
								this.f.applicationUserPersistentStorage.aiSettings.teamIds,
							produceFn: async (te) => {
								let Q;
								try {
									if (te === void 0 || te.length === 0)
										return (this.U = !0), !0;
									const Z = new AbortController();
									Q = setTimeout(() => {
										Z.abort();
									}, 5e3);
									const se = await this.dashboardClient();
									return await Promise.allSettled(
										te.map(
											async (le) =>
												await se
													.getTeamPrivacyModeForced(new p.$T0({ teamId: le }), {
														headers: (0, b.$m6b)((0, C.$9g)()),
														signal: Z.signal,
													})
													.then((oe) => oe.privacyModeForced),
										),
									).then((le) => {
										if (
											le.filter((pe) => pe.status === "fulfilled").length === 0
										)
											return this.U;
										const ae = le.some(
											(pe) => pe.status === "fulfilled" && pe.value,
										);
										return (this.U = ae), ae;
									});
								} finally {
									Q && clearTimeout(Q),
										(0, k.untrack)(() => {
											this.W.fire(this.reactivePrivacyMode());
										});
								}
							},
							initialValue: !0,
						});
						(this.R = _[0]),
							(this.S = _[1].refetch),
							this.S(),
							y.$Bfb.setInterval(() => {
								this.S();
							}, 5 * 6e4),
							(this.J = new Promise((te, Q) => {
								this.L = te;
							})),
							this.refreshAuthentication(),
							this.D(
								this.X.onDidRequestRelogin(() => {
									this.a.store(
										"cursorAuth/refreshToken",
										null,
										d.StorageScope.APPLICATION,
										d.StorageTarget.MACHINE,
									),
										this.a.store(
											"cursorAuth/accessToken",
											null,
											d.StorageScope.APPLICATION,
											d.StorageTarget.MACHINE,
										),
										this.a.store(
											e.$y6b,
											null,
											d.StorageScope.APPLICATION,
											d.StorageTarget.MACHINE,
										),
										this.a.store(
											e.$z6b,
											S.MembershipType.FREE,
											d.StorageScope.APPLICATION,
											d.StorageTarget.MACHINE,
										),
										this.C(S.MembershipType.FREE, S.MembershipType.FREE),
										this.G(S.MembershipType.FREE),
										this.F(!1),
										this.login();
								}),
							),
							this.D(
								this.onDidChangeSubscription((te) => {
									this.mb[1]((Q) => Q + 1);
								}),
							),
							setTimeout(() => {
								this.getDidUserLastPaymentFailed().then((te) => {
									this.f.setNonPersistentStorage({
										...this.f.nonPersistentStorage,
										lastPaymentWasFailed: te,
									});
								});
							}, 1e3);
					}
					reconcilePrivacyMode() {
						try {
							this.a.get(e.$C6b, d.StorageScope.APPLICATION) === "true" &&
								this.reactivePrivacyMode() !== !0 &&
								this.f.setApplicationUserPersistentStorage("noStorageMode", !0);
						} catch (x) {
							console.error(x);
						}
					}
					shouldHaveGhostModeFromEnterprise() {
						return this.debouncedRefetchIsTeamsPrivacyModeOn(), this.R();
					}
					belongsToDevTeam() {
						const x =
							this.f.applicationUserPersistentStorage.aiSettings.teamIds;
						return x === void 0 ? !1 : x.includes(1);
					}
					reactivePrivacyMode() {
						const x = this.f.applicationUserPersistentStorage.noStorageMode;
						return this.reactiveMembershipType() === S.MembershipType.ENTERPRISE
							? this.belongsToDevTeam()
								? (x !== !1 &&
										this.f.setApplicationUserPersistentStorage(
											"noStorageMode",
											!1,
										),
									!1)
								: this.shouldHaveGhostModeFromEnterprise()
									? (this.f.setApplicationUserPersistentStorage(
											"noStorageMode",
											!0,
										),
										!0)
									: x
							: x === void 0 &&
									this.a.get(L.$IV, d.StorageScope.APPLICATION, "true") !==
										"true"
								? (this.f.setApplicationUserPersistentStorage(
										"noStorageMode",
										!0,
									),
									!0)
								: x;
					}
					async refreshAuthService() {
						this.P.createServer(), this.O.createServer();
					}
					async dashboardClient() {
						return await this.O.get();
					}
					async authClient() {
						return await this.P.get();
					}
					async getTeams() {
						const x = await this.dashboardClient();
						try {
							return (
								await x.getTeams(new p.$_0({}), {
									headers: (0, b.$m6b)((0, C.$9g)()),
								})
							).teams;
						} catch (H) {
							if ("rawMessage" in H && H.rawMessage.includes("404"))
								return console.error("Using pre-teams backend"), [];
							throw H;
						}
					}
					async sendPrivacySettings() {
						(0, T.$s6b)(async () => {
							if (!this.fb) {
								this.fb = !0;
								try {
									await (0, T.$w6b)(
										async () => {
											const x = await this.authClient();
											if (this.t() === void 0)
												throw new Error("No access token");
											await x.markPrivacy({
												currentPrivacyMode: this.reactivePrivacyMode(),
												onboardingPrivacyMode:
													this.f.applicationUserPersistentStorage
														.selectedPrivacyForOnboarding,
												isUsingCurrentAndOnboardingFormat: !0,
											});
										},
										{ initialRetryTimeMs: 3e3, maxNumberOfRetries: 5 },
									);
								} catch (x) {
									console.error(x);
								} finally {
									this.fb = !1;
								}
							}
						}, 10 * 1e3);
					}
					async getEmailAndSignUpType() {
						const x = this.a.get(e.$A6b, d.StorageScope.APPLICATION),
							H = this.a.get(e.$B6b, d.StorageScope.APPLICATION);
						if (x && x !== "" && H) {
							const J = Object.values(R).includes(H) ? H : R.UNKNOWN;
							return { email: x, signUpType: J };
						}
						const q = (0, C.$9g)(),
							G = await (await this.authClient()).getEmail(
								{},
								{ headers: (0, b.$m6b)(q) },
							);
						let K = R.UNKNOWN;
						switch (G.signUpType) {
							case $.GetEmailResponse_SignUpType.AUTH_0:
								K = R.AUTH_0;
								break;
							case $.GetEmailResponse_SignUpType.GOOGLE:
								K = R.GOOGLE;
								break;
							case $.GetEmailResponse_SignUpType.GITHUB:
								K = R.GITHUB;
								break;
						}
						return this.y(G.email, K), { email: G.email, signUpType: K };
					}
					gb() {
						this.J = new Promise((x, H) => {
							this.L = x;
						});
					}
					async hb(x) {
						switch (x.get("route")) {
							case "login": {
								const q = x.get("refreshToken"),
									V = x.get("accessToken");
								q &&
									V &&
									(this.w(V, q), await this.refreshMembershipType(), this.L());
								return;
							}
							case "pay":
								await this.refreshAccessToken(), this.L();
								return;
							default:
								return;
						}
					}
					ib(x) {
						const H = m.$Te.wrap(x);
						return (0, m.$cf)(H, !1, !0);
					}
					async jb(x) {
						if (!crypto.subtle)
							throw new Error(
								"'crypto.subtle' is not available so webviews will not work. This is likely because the editor is not running in a secure context (https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts).",
							);
						const q = new TextEncoder().encode(x);
						return await crypto.subtle.digest("sha-256", q);
					}
					kb(x) {
						this.ab.publicLogCapture("$identify_cursordelimiter_" + x);
					}
					async login(x = "login") {
						this.gb();
						const H = new Uint8Array(32);
						crypto.getRandomValues(H);
						const q = this.ib(H),
							V = this.ib(new Uint8Array(await this.jb(q))),
							G = (0, C.$9g)();
						await this.Y.open(
							`${this.X.getLoginUrl()}?challenge=${V}&uuid=${G}&mode=${x}`,
							{ openExternal: !0 },
						);
						let K = 0;
						this.M(), this.$.info("Starting polling for login");
						const J = y.$Bfb.setInterval(async () => {
							this.$.info("Beginning of Login Poll");
							const W = await fetch(
								`${this.X.getPollingEndpoint()}?uuid=${G}&verifier=${q}`,
								{
									headers: {
										[S.$oJ]: (0, S.$pJ)(this.reactivePrivacyMode()),
										[D.$HOb]: (0, D.$NOb)(),
									},
								},
							);
							if ((this.$.info("Got login result", W.status), W.status == 404))
								return;
							const X = await W.json();
							this.$.info("Got login json", X),
								X !== void 0 &&
									(X.authId && this.kb(X.authId),
									X.accessToken &&
										X.refreshToken &&
										(this.w(X.accessToken, X.refreshToken),
										await this.refreshMembershipType(),
										this.L(),
										y.$Bfb.clearInterval(J))),
								K++,
								K >= 30 && y.$Bfb.clearInterval(J);
						}, 200);
						(this.M = () => {
							y.$Bfb.clearInterval(J);
						}),
							await Promise.race([
								new Promise((W) => setTimeout(() => W(!1), 180 * 1e3)),
							]),
							y.$Bfb.clearInterval(J),
							this.gb();
					}
					async pay() {
						this.gb(),
							await this.Y.open(this.X.getCheckoutUrl(), { openExternal: !0 }),
							this.N();
						const x = y.$Bfb.setInterval(async () => {
							await this.refreshAuthentication(),
								this.membershipType() !== S.MembershipType.FREE &&
									y.$Bfb.clearInterval(x);
						}, 200);
						(this.N = () => {
							y.$Bfb.clearInterval(x);
						}),
							await Promise.race([
								new Promise((H) => setTimeout(() => H(!1), 3 * 60 * 1e3)),
							]),
							y.$Bfb.clearInterval(x),
							this.gb();
					}
					getAuthIdFromToken(x) {
						try {
							return (0, m.$bf)(x).sub;
						} catch {
							return;
						}
					}
					async signup() {
						await this.login("signup");
					}
					async settings() {
						await this.Y.open(this.X.getSettingsUrl(), { openExternal: !0 });
					}
					async refreshAuthentication() {
						(await this.getAccessToken()) || (await this.refreshAccessToken()),
							await this.refreshMembershipType();
					}
					isAuthenticated() {
						const x = this.t(),
							H = this.s();
						return !!(x && H);
					}
					async getAuthenticationHeader() {
						const x = await this.getAccessToken();
						return x ? { Authorization: `Bearer ${x}` } : {};
					}
					async getAccessToken() {
						const x = this.t();
						if (x === void 0) return;
						const H = new Date(),
							q = (0, m.$bf)(x),
							V = new Date(q.exp * 1e3);
						if (V.getTime() < H.getTime() + O)
							return await this.refreshAccessToken(), this.t();
						{
							const G = new Date(V.getTime() - O);
							let K;
							K && clearTimeout(K),
								(K = setTimeout(
									() => {
										this.refreshAccessToken();
									},
									Math.max(G.getTime() - H.getTime(), 0),
								));
						}
						return x;
					}
					setCommonHeaders(x) {
						(0, S.$rJ)({
							req: x,
							machineId: this.ab.machineId,
							macMachineId: this.ab.macMachineId,
							base64Fn: (H) => (0, m.$cf)(m.$Te.wrap(H), !1, !0),
							cursorVersion: this.eb.version,
							privacyMode: this.reactivePrivacyMode(),
						});
					}
				};
				(e.$H6b = U),
					(e.$H6b = U =
						Ne(
							[
								j(0, d.$lq),
								j(1, o.$r8),
								j(2, h.$0zb),
								j(3, r.$i6b),
								j(4, E.$7rb),
								j(5, i.$2rb),
								j(6, u.$ik),
								j(7, a.$km),
								j(8, f.$Ep),
								j(9, t.$Li),
								j(10, P.$o6b),
								j(11, v.$Bk),
							],
							U,
						)),
					(0, w.$lK)(e.$x6b, U, w.InstantiationType.Delayed);
				class z extends s.$3X {
					constructor() {
						super({
							id: "cursorAuth.triggerTokenRefresh",
							title: {
								value: "Trigger Token Refresh",
								original: "Trigger Token Refresh",
							},
							f1: !0,
						});
					}
					run(x, H = !0) {
						x.get(e.$x6b).refreshAccessToken(H);
					}
				}
				(0, s.$4X)(z);
			},
		)
