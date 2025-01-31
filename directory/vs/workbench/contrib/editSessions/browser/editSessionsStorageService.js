import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/environment/common/environment.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/userDataSync/common/userDataSync.js';
import '../../../services/authentication/common/authentication.js';
import '../../../services/extensions/common/extensions.js';
import '../common/editSessions.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../base/common/uuid.js';
import '../../../services/authentication/browser/authenticationService.js';
import '../../../../base/common/platform.js';
import '../../../../platform/userDataSync/common/userDataSyncMachines.js';
import '../../../../base/common/event.js';
import '../../../../base/common/errors.js';
import '../../../../platform/secrets/common/secrets.js';
define(
			de[3318],
			he([
				1, 0, 3, 4, 11, 8, 113, 22, 62, 63, 21, 150, 357, 53, 685, 57, 47, 830,
				12, 965, 6, 29, 783,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*lifecycle*/,
				i /*nls*/,
				w /*actions*/,
				E /*contextkey*/,
				C /*environment*/,
				d /*files*/,
				m /*productService*/,
				r /*quickInput*/,
				u /*storage*/,
				a /*userDataSync*/,
				h /*authentication*/,
				c /*extensions*/,
				n /*editSessions*/,
				g /*dialogs*/,
				p /*uuid*/,
				o /*authenticationService*/,
				f /*platform*/,
				b /*userDataSyncMachines*/,
				s /*event*/,
				l /*errors*/,
				y /*secrets*/,
) {
				"use strict";
				var $;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$P1c = void 0);
				let v = class extends t.$1c {
					static {
						$ = this;
					}
					static {
						this.h = "editSessionAccountPreference";
					}
					get isSignedIn() {
						return this.X !== void 0;
					}
					get onDidSignIn() {
						return this.q.event;
					}
					get onDidSignOut() {
						return this.r.event;
					}
					get lastWrittenResources() {
						return this.s;
					}
					get lastReadResources() {
						return this.t;
					}
					constructor(I, T, P, k, L, D, M, N, A, R, O) {
						super(),
							(this.u = I),
							(this.w = T),
							(this.y = P),
							(this.z = k),
							(this.C = L),
							(this.F = D),
							(this.G = M),
							(this.H = N),
							(this.I = A),
							(this.J = R),
							(this.L = O),
							(this.SIZE_LIMIT = Math.floor(1024 * 1024 * 1.9)),
							(this.c = this.H["editSessions.store"]),
							(this.j = !1),
							(this.q = new s.$re()),
							(this.r = new s.$re()),
							(this.s = new Map()),
							(this.t = new Map()),
							this.D(this.z.onDidChangeSessions((B) => this.ab(B.event))),
							this.D(
								this.w.onDidChangeValue(
									u.StorageScope.APPLICATION,
									$.h,
									this.D(new t.$Zc()),
								)(() => this.Z()),
							),
							this.bb(),
							this.cb(),
							(this.n = n.$D1c.bindTo(this.I)),
							this.n.set(this.X !== void 0);
					}
					async write(I, T) {
						if ((await this.initialize("write", !1), !this.j))
							throw new Error("Please sign in to store your edit session.");
						typeof T != "string" &&
							T.machine === void 0 &&
							(T.machine = await this.O()),
							(T = typeof T == "string" ? T : JSON.stringify(T));
						const P = await this.storeClient.writeResource(
							I,
							T,
							null,
							void 0,
							(0, a.$XRb)((0, p.$9g)()),
						);
						return this.s.set(I, { ref: P, content: T }), P;
					}
					async read(I, T) {
						if ((await this.initialize("read", !1), !this.j))
							throw new Error(
								"Please sign in to apply your latest edit session.",
							);
						let P;
						const k = (0, a.$XRb)((0, p.$9g)());
						try {
							if (T !== void 0)
								P = await this.storeClient?.resolveResourceContent(
									I,
									T,
									void 0,
									k,
								);
							else {
								const L = await this.storeClient?.readResource(
									I,
									null,
									void 0,
									k,
								);
								(P = L?.content), (T = L?.ref);
							}
						} catch (L) {
							this.G.error(L);
						}
						if (P != null && T !== void 0)
							return (
								this.t.set(I, { ref: T, content: P }), { ref: T, content: P }
							);
					}
					async delete(I, T) {
						if ((await this.initialize("write", !1), !this.j))
							throw new Error(`Unable to delete edit session with ref ${T}.`);
						try {
							await this.storeClient?.deleteResource(I, T);
						} catch (P) {
							this.G.error(P);
						}
					}
					async list(I) {
						if ((await this.initialize("read", !1), !this.j))
							throw new Error("Unable to list edit sessions.");
						try {
							return this.storeClient?.getAllResourceRefs(I) ?? [];
						} catch (T) {
							this.G.error(T);
						}
						return [];
					}
					async initialize(I, T = !1) {
						return this.j
							? !0
							: ((this.j = await this.M(I, T)),
								this.n.set(this.j),
								this.j && this.q.fire(),
								this.j);
					}
					async M(I, T) {
						if (
							(await this.C.whenInstalledExtensionsRegistered(), !this.c?.url)
						)
							throw new Error(
								"Unable to initialize sessions sync as session sync preference is not configured in product.json.",
							);
						if (this.storeClient === void 0) return !1;
						if (
							(this.D(
								this.storeClient.onTokenFailed(() => {
									this.G.info(
										"Clearing edit sessions authentication preference because of successive token failures.",
									),
										this.$();
								}),
							),
							this.f === void 0 &&
								(this.f = new b.$HRb(
									this.F,
									this.u,
									this.w,
									this.storeClient,
									this.G,
									this.H,
								)),
							this.g !== void 0)
						)
							return !0;
						const P = await this.P(I, T);
						return (
							P !== void 0 &&
								((this.g = P),
								this.storeClient.setAuthToken(P.token, P.providerId)),
							P !== void 0
						);
					}
					async getMachineById(I) {
						if ((await this.initialize("read", !1), !this.N)) {
							const T = await this.f.getMachines();
							this.N = T.reduce((P, k) => P.set(k.id, k.name), new Map());
						}
						return this.N.get(I);
					}
					async O() {
						const I = await this.f
							.getMachines()
							.then((T) => T.find((P) => P.isCurrent)?.id);
						return I === void 0
							? (await this.f.addCurrentMachine(),
								await this.f
									.getMachines()
									.then((T) => T.find((P) => P.isCurrent).id))
							: I;
					}
					async P(I, T) {
						if (this.X) {
							this.G.info(
								`Searching for existing authentication session with ID ${this.X}`,
							);
							const k = await this.Y();
							if (k)
								return (
									this.G.info(
										`Found existing authentication session with ID ${k.session.id}`,
									),
									{
										sessionId: k.session.id,
										token: k.session.idToken ?? k.session.accessToken,
										providerId: k.session.providerId,
									}
								);
							this.r.fire();
						}
						if (this.Q()) {
							this.G.info("Reusing user data sync enablement");
							const k = await (0, o.$gsb)(this.L, this.H);
							if (k !== void 0)
								return (
									this.G.info(
										`Using current authentication session with ID ${k.id}`,
									),
									(this.X = k.id),
									{
										sessionId: k.id,
										token: k.accessToken,
										providerId: k.providerId,
									}
								);
						}
						if (T) return;
						const P = await this.R(I);
						if (P !== void 0)
							return (
								(this.X = P.id),
								{
									sessionId: P.id,
									token: P.idToken ?? P.accessToken,
									providerId: P.providerId,
								}
							);
					}
					Q() {
						return (
							f.$r &&
							this.w.isNew(u.StorageScope.APPLICATION) &&
							this.w.isNew(u.StorageScope.WORKSPACE)
						);
					}
					async R(I) {
						const T = new t.$Zc(),
							P = T.add(this.y.createQuickPick({ useSeparators: !0 }));
						return (
							(P.ok = !1),
							(P.placeholder =
								I === "read"
									? (0, i.localize)(5967, null)
									: (0, i.localize)(5968, null)),
							(P.ignoreFocusOut = !0),
							(P.items = await this.S()),
							new Promise((k, L) => {
								T.add(
									P.onDidHide((D) => {
										L(new l.$9()), T.dispose();
									}),
								),
									T.add(
										P.onDidAccept(async (D) => {
											const M = P.selectedItems[0],
												N =
													"provider" in M
														? {
																...(await this.z.createSession(
																	M.provider.id,
																	M.provider.scopes,
																)),
																providerId: M.provider.id,
															}
														: "session" in M
															? M.session
															: void 0;
											k(N), P.hide();
										}),
									),
									P.show();
							})
						);
					}
					async S() {
						const I = [];
						I.push({ type: "separator", label: (0, i.localize)(5969, null) });
						const T = await this.U();
						I.push(...T),
							I.push({ type: "separator", label: (0, i.localize)(5970, null) });
						for (const P of await this.W())
							if (
								!T.some((L) => L.session.providerId === P.id) ||
								this.z.getProvider(P.id).supportsMultipleAccounts
							) {
								const L = this.z.getProvider(P.id).label;
								I.push({ label: (0, i.localize)(5971, null, L), provider: P });
							}
						return I;
					}
					async U() {
						const I = await this.W(),
							T = new Map();
						let P;
						for (const k of I) {
							const L = await this.z.getSessions(k.id, k.scopes);
							for (const D of L) {
								const M = {
									label: D.account.label,
									description: this.z.getProvider(k.id).label,
									session: { ...D, providerId: k.id },
								};
								T.set(M.session.account.id, M), this.X === D.id && (P = M);
							}
						}
						return (
							P !== void 0 && T.set(P.session.account.id, P),
							[...T.values()].sort((k, L) => k.label.localeCompare(L.label))
						);
					}
					async W() {
						if (!this.c)
							throw new Error(
								"Unable to get configured authentication providers as session sync preference is not configured in product.json.",
							);
						const I = this.c.authenticationProviders,
							T = Object.keys(I).reduce(
								(k, L) => (k.push({ id: L, scopes: I[L].scopes }), k),
								[],
							),
							P = this.z.declaredProviders;
						return T.filter(({ id: k }) => P.some((L) => L.id === k));
					}
					get X() {
						return this.w.get($.h, u.StorageScope.APPLICATION);
					}
					set X(I) {
						this.G.trace(
							`Saving authentication session preference for ID ${I}.`,
						),
							I === void 0
								? this.w.remove($.h, u.StorageScope.APPLICATION)
								: this.w.store(
										$.h,
										I,
										u.StorageScope.APPLICATION,
										u.StorageTarget.MACHINE,
									);
					}
					async Y() {
						return (await this.U()).find((T) => T.session.id === this.X);
					}
					async Z() {
						const I = this.X,
							T = this.g?.sessionId;
						T !== I &&
							(this.G.trace(
								`Resetting authentication state because authentication session ID preference changed from ${T} to ${I}.`,
							),
							(this.g = void 0),
							(this.j = !1));
					}
					$() {
						(this.g = void 0), (this.j = !1), (this.X = void 0), this.n.set(!1);
					}
					ab(I) {
						this.g?.sessionId &&
							I.removed?.find((T) => T.id === this.g?.sessionId) &&
							this.$();
					}
					bb() {
						const I = this,
							T = "workbench.editSessions.actions.signIn",
							P = E.$Kj.and(E.$Kj.equals(n.$E1c, !1), E.$Kj.equals(n.$C1c, !1));
						this.D(
							(0, w.$4X)(
								class extends w.$3X {
									constructor() {
										super({
											id: T,
											title: (0, i.localize)(5972, null),
											category: n.$y1c,
											precondition: P,
											menu: [
												{ id: w.$XX.CommandPalette },
												{
													id: w.$XX.AccountsContext,
													group: "2_editSessions",
													when: P,
												},
											],
										});
									}
									async run() {
										return await I.initialize("write", !1);
									}
								},
							),
						),
							this.D(
								w.$ZX.appendMenuItem(w.$XX.AccountsContext, {
									group: "2_editSessions",
									command: { id: T, title: (0, i.localize)(5973, null) },
									when: E.$Kj.and(
										E.$Kj.equals(n.$E1c, !0),
										E.$Kj.equals(n.$C1c, !1),
									),
								}),
							);
					}
					cb() {
						const I = this;
						this.D(
							(0, w.$4X)(
								class extends w.$3X {
									constructor() {
										super({
											id: "workbench.editSessions.actions.resetAuth",
											title: (0, i.localize)(5974, null),
											category: n.$y1c,
											precondition: E.$Kj.equals(n.$C1c, !0),
											menu: [
												{ id: w.$XX.CommandPalette },
												{
													id: w.$XX.AccountsContext,
													group: "2_editSessions",
													when: E.$Kj.equals(n.$C1c, !0),
												},
											],
										});
									}
									async run() {
										const P = await I.J.confirm({
											message: (0, i.localize)(5975, null),
											checkbox: { label: (0, i.localize)(5976, null) },
										});
										P.confirmed &&
											(P.checkboxChecked &&
												I.storeClient?.deleteResource("editSessions", null),
											I.$());
									}
								},
							),
						);
					}
				};
				(e.$P1c = v),
					(e.$P1c =
						v =
						$ =
							Ne(
								[
									j(0, d.$ll),
									j(1, u.$lq),
									j(2, r.$DJ),
									j(3, h.$$7),
									j(4, c.$q2),
									j(5, C.$Ti),
									j(6, n.$A1c),
									j(7, m.$Bk),
									j(8, E.$6j),
									j(9, g.$GO),
									j(10, y.$Yrb),
								],
								v,
							));
			},
		)
