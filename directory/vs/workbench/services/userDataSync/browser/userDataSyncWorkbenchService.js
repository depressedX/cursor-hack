define(
			de[3852],
			he([
				1, 0, 150, 32, 20, 522, 3, 6, 830, 357, 1212, 63, 21, 34, 62, 53, 4, 40,
				57, 8, 84, 9, 60, 89, 52, 12, 5, 966, 2937, 29, 15, 33, 18, 68, 44, 286,
				1041, 783, 22, 37, 965,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
			) {
				"use strict";
				var x;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jyc = void 0),
					(e.$iyc = q);
				class H {
					constructor(K, J) {
						(this.authenticationProviderId = K), (this.f = J);
					}
					get sessionId() {
						return this.f.id;
					}
					get accountName() {
						return this.f.account.label;
					}
					get accountId() {
						return this.f.account.id;
					}
					get token() {
						return this.f.idToken || this.f.accessToken;
					}
				}
				function q(G) {
					const K = G;
					return (
						l.URI.isUri(K?.base) &&
						l.URI.isUri(K?.input1?.uri) &&
						l.URI.isUri(K?.input2?.uri) &&
						l.URI.isUri(K?.result)
					);
				}
				let V = class extends C.$1c {
					static {
						x = this;
					}
					static {
						this.f = "userDataSyncAccount.donotUseWorkbenchSession";
					}
					static {
						this.g = "userDataSyncAccountProvider";
					}
					static {
						this.h = "userDataSyncAccountPreference";
					}
					get enabled() {
						return !!this.ab.userDataSyncStore;
					}
					get authenticationProviders() {
						return this.j;
					}
					get accountStatus() {
						return this.n;
					}
					get current() {
						return this.r;
					}
					constructor(
						K,
						J,
						W,
						X,
						Y,
						ie,
						ne,
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
						oe,
						ae,
						pe,
						$e,
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
						be,
						Ce,
						Le,
					) {
						super(),
							(this.F = K),
							(this.G = J),
							(this.H = W),
							(this.I = X),
							(this.J = Y),
							(this.L = ie),
							(this.M = ne),
							(this.N = ee),
							(this.O = _),
							(this.P = te),
							(this.Q = Q),
							(this.R = Z),
							(this.S = se),
							(this.U = re),
							(this.W = le),
							(this.X = oe),
							(this.Y = ae),
							(this.Z = $e),
							(this.$ = ye),
							(this.ab = ue),
							(this.bb = fe),
							(this.cb = me),
							(this.db = ve),
							(this.eb = ge),
							(this.fb = be),
							(this.gb = Ce),
							(this.hb = Le),
							(this.j = []),
							(this.n = E.AccountStatus.Unavailable),
							(this.q = this.D(new d.$re())),
							(this.onDidChangeAccountStatus = this.q.event),
							(this.C = void 0),
							(this.Cb = null),
							(this.Eb = null),
							(this.s = E.$Sxc.bindTo(pe)),
							(this.t = E.$Rxc.bindTo(pe)),
							(this.u = E.$Txc.bindTo(pe)),
							(this.z = E.$Uxc.bindTo(pe)),
							(this.y = E.$Wxc.bindTo(pe)),
							(this.w = E.$Vxc.bindTo(pe)),
							this.ab.userDataSyncStore &&
								(this.t.set(this.F.status),
								this.D(K.onDidChangeStatus((Fe) => this.t.set(Fe))),
								this.s.set(ne.isEnabled()),
								this.D(ne.onDidChangeEnablement((Fe) => this.s.set(Fe))),
								this.kb());
					}
					ib() {
						this.j = (
							this.ab.userDataSyncStore?.authenticationProviders || []
						).filter(({ id: K }) =>
							this.H.declaredProviders.some((J) => J.id === K),
						);
					}
					jb(K) {
						return this.authenticationProviders.some(({ id: J }) => J === K);
					}
					async kb() {
						await Promise.all([
							this.R.whenInstalledExtensionsRegistered(),
							this.eb.whenInitializationFinished(),
						]);
						try {
							await this.lb();
						} catch (K) {
							this.S.extensionTestsLocationURI || this.P.error(K);
						}
					}
					async lb() {
						if (S.$r) {
							const K = await (0, m.$gsb)(this.U, this.Q);
							this.Fb === void 0 &&
								K?.id &&
								(this.S.options?.settingsSyncOptions?.authenticationProvider &&
								this.S.options.settingsSyncOptions.enabled
									? (this.Fb = K.id)
									: this.Hb && (this.Fb = K.id),
								(this.Hb = !1));
						}
						await this.mb(),
							this.D(this.H.onDidChangeDeclaredProviders(() => this.ib())),
							this.D(
								d.Event.filter(
									d.Event.any(
										this.H.onDidRegisterAuthenticationProvider,
										this.H.onDidUnregisterAuthenticationProvider,
									),
									(K) => this.jb(K.id),
								)(() => this.mb()),
							),
							this.D(
								d.Event.filter(
									this.I.onTokenFailed,
									(K) => !K,
								)(() => this.mb("token failure")),
							),
							this.D(
								d.Event.filter(this.H.onDidChangeSessions, (K) =>
									this.jb(K.providerId),
								)(({ event: K }) => this.Ab(K)),
							),
							this.D(
								this.L.onDidChangeValue(
									h.StorageScope.APPLICATION,
									x.h,
									this.D(new C.$Zc()),
								)(() => this.Bb()),
							),
							this.D(
								d.Event.filter(this.I.onTokenFailed, (K) => K)(() => this.zb()),
							),
							this.y.set(this.F.conflicts.length > 0),
							this.D(
								this.F.onDidChangeConflicts((K) => {
									this.y.set(K.length > 0),
										K.length || this.w.reset(),
										this.db.editors
											.filter((J) =>
												((0, A.$t1)(J)
													? J.original.resource
													: q(J)
														? J.input1.uri
														: void 0
												)?.scheme !== t.$$Rb
													? !1
													: !this.F.conflicts.some(({ conflicts: X }) =>
															X.some(({ previewResource: Y }) =>
																this.G.extUri.isEqual(Y, J.resource),
															),
														),
											)
											.forEach((J) => J.dispose());
								}),
							);
					}
					async mb(K) {
						K && this.P.info(`Settings Sync: Updating due to ${K}`),
							this.ib(),
							await this.nb(),
							this.r && (this.Db = this.r.authenticationProviderId),
							await this.ob(this.r),
							this.pb(
								this.r
									? E.AccountStatus.Available
									: E.AccountStatus.Unavailable,
							);
					}
					async nb() {
						const K = this.Fb,
							J = this.Db;
						if (K) {
							const W = J
								? this.authenticationProviders.filter(({ id: X }) => X === J)
								: this.authenticationProviders;
							for (const { id: X, scopes: Y } of W) {
								const ie = (await this.H.getSessions(X, Y)) || [];
								for (const ne of ie)
									if (ne.id === K) {
										this.r = new H(X, ne);
										return;
									}
							}
						}
						this.r = void 0;
					}
					async ob(K) {
						let J;
						if (K)
							try {
								this.P.trace(
									"Settings Sync: Updating the token for the account",
									K.accountName,
								);
								const W = K.token;
								this.P.trace(
									"Settings Sync: Token updated for the account",
									K.accountName,
								),
									(J = {
										token: W,
										authenticationProviderId: K.authenticationProviderId,
									});
							} catch (W) {
								this.P.error(W);
							}
						await this.I.updateAccount(J);
					}
					pb(K) {
						if (this.n !== K) {
							const J = this.n;
							this.P.trace(
								`Settings Sync: Account status changed from ${J} to ${K}`,
							),
								(this.n = K),
								this.u.set(K),
								this.q.fire(K);
						}
					}
					async turnOn() {
						if (!this.authenticationProviders.length)
							throw new Error((0, p.localize)(12965, null));
						if (this.M.isEnabled()) return;
						if (this.F.status !== t.SyncStatus.Idle)
							throw new Error("Cannot turn on sync while syncing");
						if (!(await this.ub())) throw new k.$9();
						if (this.accountStatus !== E.AccountStatus.Available)
							throw new Error((0, p.localize)(12966, null));
						const J = (this.C = new D.$Ce()),
							W = S.$r
								? C.$1c.None
								: this.bb.onBeforeShutdown((X) =>
										X.veto(
											(async () => {
												const { confirmed: Y } = await this.Y.confirm({
													type: "warning",
													message: (0, p.localize)(12967, null),
													title: (0, p.localize)(12968, null),
													primaryButton: (0, p.localize)(12969, null),
													cancelButton: (0, p.localize)(12970, null),
												});
												return Y && J.cancel(), !Y;
											})(),
											"veto.settingsSync",
										),
									);
						try {
							await this.qb(J.token);
						} finally {
							W.dispose(), (this.C = void 0);
						}
						await this.N.turnOn(),
							this.ab.userDataSyncStore?.canSwitch &&
								(await this.synchroniseUserDataSyncStoreType()),
							(this.Db = this.current?.authenticationProviderId),
							this.S.options?.settingsSyncOptions?.enablementHandler &&
								this.Db &&
								this.S.options.settingsSyncOptions.enablementHandler(
									!0,
									this.Db,
								),
							this.W.info((0, p.localize)(12971, null, E.$Pxc.value));
					}
					async turnoff(K) {
						this.M.isEnabled() &&
							(await this.N.turnOff(K),
							this.S.options?.settingsSyncOptions?.enablementHandler &&
								this.Db &&
								this.S.options.settingsSyncOptions.enablementHandler(
									!1,
									this.Db,
								)),
							this.C && this.C.cancel();
					}
					async synchroniseUserDataSyncStoreType() {
						if (!this.I.account)
							throw new Error(
								"Cannot update because you are signed out from settings sync. Please sign in and try again.",
							);
						if (!S.$r || !this.ab.userDataSyncStore) return;
						const K =
								this.ab.userDataSyncStore.type === "insiders"
									? this.ab.userDataSyncStore.stableUrl
									: this.ab.userDataSyncStore.insidersUrl,
							J = this.cb.createInstance(T.$5xc, K);
						J.setAuthToken(
							this.I.account.token,
							this.I.account.authenticationProviderId,
						),
							await this.cb
								.createInstance(P.$hyc, J)
								.sync(this.ab.userDataSyncStore.type);
					}
					syncNow() {
						return this.N.triggerSync(["Sync Now"], !1, !0);
					}
					async qb(K) {
						const J = new C.$Zc(),
							W = await this.F.createManualSyncTask();
						try {
							await this.X.withProgress(
								{
									location: s.ProgressLocation.Window,
									title: E.$Pxc.value,
									command: E.$Yxc,
									delay: 500,
								},
								async (X) => {
									X.report({ message: (0, p.localize)(12972, null) }),
										J.add(
											this.F.onDidChangeStatus((Y) => {
												Y === t.SyncStatus.HasConflicts
													? X.report({ message: (0, p.localize)(12973, null) })
													: X.report({ message: (0, p.localize)(12974, null) });
											}),
										),
										await W.merge(),
										this.F.status === t.SyncStatus.HasConflicts &&
											(await this.rb(K)),
										await W.apply();
								},
							);
						} catch (X) {
							throw (await W.stop(), X);
						} finally {
							J.dispose();
						}
					}
					async rb(K) {
						await this.Y.prompt({
							type: o.Severity.Warning,
							message: (0, p.localize)(12975, null),
							detail: (0, p.localize)(12976, null),
							buttons: [
								{
									label: (0, p.localize)(12977, null),
									run: async () => {
										const J = (0, L.$Bh)(
											d.Event.toPromise(
												d.Event.filter(
													this.F.onDidChangeConflicts,
													(W) => W.length === 0,
												),
											),
											K,
										);
										await this.showConflicts(this.F.conflicts[0]?.conflicts[0]),
											await J;
									},
								},
								{
									label: (0, p.localize)(12978, null),
									run: async () => this.sb(!0),
								},
								{ label: (0, p.localize)(12979, null), run: () => this.sb(!1) },
							],
							cancelButton: {
								run: () => {
									throw new k.$9();
								},
							},
						});
					}
					async sb(K) {
						for (const J of this.F.conflicts)
							for (const W of J.conflicts)
								await this.accept(
									{ syncResource: J.syncResource, profile: J.profile },
									K ? W.remoteResource : W.localResource,
									void 0,
									{ force: !0 },
								);
					}
					async accept(K, J, W, X) {
						return this.F.accept(K, J, W, X);
					}
					async showConflicts(K) {
						if (!this.F.conflicts.length) return;
						this.w.set(!0);
						const J = await this.Z.openView(E.$1xc);
						J && K && (await J.open(K));
					}
					async resetSyncedData() {
						const { confirmed: K } = await this.Y.confirm({
							type: "info",
							message: (0, p.localize)(12980, null),
							title: (0, p.localize)(12981, null),
							primaryButton: (0, p.localize)(12982, null),
						});
						K && (await this.F.resetRemote());
					}
					async getAllLogResources() {
						const K = [],
							J = await this.fb.resolve(this.G.extUri.dirname(this.S.logsHome));
						J.children &&
							K.push(
								...J.children
									.filter((X) => X.isDirectory && /^\d{8}T\d{6}$/.test(X.name))
									.sort()
									.reverse()
									.map((X) => X.resource),
							);
						const W = [];
						for (const X of K) {
							const ie = (await this.fb.resolve(X)).children?.find((ne) =>
								this.G.extUri.basename(ne.resource).startsWith(`${t.$0Rb}.`),
							);
							ie && W.push(ie.resource);
						}
						return W;
					}
					async showSyncActivity() {
						this.z.set(!0),
							await this.tb(),
							await this.Z.openViewContainer(E.$Zxc);
					}
					async downloadSyncActivity() {
						const K = await this.gb.showOpenDialog({
							title: (0, p.localize)(12983, null),
							canSelectFiles: !1,
							canSelectFolders: !0,
							canSelectMany: !1,
							openLabel: (0, p.localize)(12984, null),
						});
						if (K?.[0])
							return this.X.withProgress(
								{ location: s.ProgressLocation.Window },
								async () => {
									const W = (await this.hb.getMachines()).find(
											(_) => _.isCurrent,
										),
										X = (W ? W.name + " - " : "") + "Settings Sync Activity",
										Y = await this.fb.resolve(K[0]),
										ie = new RegExp(`${(0, z.$of)(X)}\\s(\\d+)`),
										ne = [];
									for (const _ of Y.children ?? [])
										if (_.name === X) ne.push(0);
										else {
											const te = ie.exec(_.name);
											te && ne.push(parseInt(te[1]));
										}
									ne.sort((_, te) => _ - te);
									const ee = this.G.extUri.joinPath(
										K[0],
										ne[0] !== 0 ? X : `${X} ${ne[ne.length - 1] + 1}`,
									);
									return (
										await Promise.all([
											this.F.saveRemoteActivityData(
												this.G.extUri.joinPath(ee, "remoteActivity.json"),
											),
											(async () => {
												const _ = await this.getAllLogResources();
												await Promise.all(
													_.map(async (te) =>
														this.fb.copy(
															te,
															this.G.extUri.joinPath(
																ee,
																"logs",
																`${this.G.extUri.basename(this.G.extUri.dirname(te))}.log`,
															),
														),
													),
												);
											})(),
											this.fb.copy(
												this.S.userDataSyncHome,
												this.G.extUri.joinPath(ee, "localActivity"),
											),
										]),
										ee
									);
								},
							);
					}
					async tb() {
						const K = this.$.getViewContainerById(E.$Zxc);
						if (K) {
							const J = this.$.getViewContainerModel(K);
							J.activeViewDescriptors.length ||
								(await d.Event.toPromise(
									d.Event.filter(
										J.onDidChangeActiveViewDescriptors,
										(W) => J.activeViewDescriptors.length > 0,
									),
								));
						}
					}
					async signIn() {
						const K = this.Db,
							J = K
								? this.authenticationProviders.find((W) => W.id === K)
								: void 0;
						J ? await this.yb(J) : await this.ub();
					}
					async ub() {
						const K = await this.vb();
						return K ? (await this.yb(K), !0) : !1;
					}
					async vb() {
						if (this.authenticationProviders.length === 0) return;
						const K = [...this.authenticationProviders].sort(({ id: ne }) =>
								ne === this.Db ? -1 : 1,
							),
							J = new Map();
						if (K.length === 1) {
							const ne = await this.wb(K[0].id, K[0].scopes);
							if (ne.length) J.set(K[0].id, ne);
							else return K[0];
						}
						let W;
						const X = new C.$Zc(),
							Y = X.add(this.J.createQuickPick({ useSeparators: !0 })),
							ie = new Promise((ne) => {
								X.add(
									Y.onDidHide(() => {
										X.dispose(), ne(W);
									}),
								);
							});
						if (
							((Y.title = E.$Pxc.value),
							(Y.ok = !1),
							(Y.ignoreFocusOut = !0),
							(Y.placeholder = (0, p.localize)(12985, null)),
							Y.show(),
							K.length > 1)
						) {
							Y.busy = !0;
							for (const { id: ne, scopes: ee } of K) {
								const _ = await this.wb(ne, ee);
								_.length && J.set(ne, _);
							}
							Y.busy = !1;
						}
						return (
							(Y.items = this.xb(K, J)),
							X.add(
								Y.onDidAccept(() => {
									(W = Y.selectedItems[0]?.account
										? Y.selectedItems[0]?.account
										: Y.selectedItems[0]?.authenticationProvider),
										Y.hide();
								}),
							),
							ie
						);
					}
					async wb(K, J) {
						const W = new Map();
						let X = null;
						const Y = (await this.H.getSessions(K, J)) || [];
						for (const ie of Y) {
							const ne = new H(K, ie);
							W.set(ne.accountId, ne), ne.sessionId === this.Fb && (X = ne);
						}
						return (
							X && W.set(X.accountId, X),
							X
								? [...W.values()]
								: [...W.values()].sort(({ sessionId: ie }) =>
										ie === this.Fb ? -1 : 1,
									)
						);
					}
					xb(K, J) {
						const W = [];
						if (J.size) {
							W.push({
								type: "separator",
								label: (0, p.localize)(12986, null),
							});
							for (const X of K) {
								const Y = (J.get(X.id) || []).sort(({ sessionId: ne }) =>
										ne === this.Fb ? -1 : 1,
									),
									ie = this.H.getProvider(X.id).label;
								for (const ne of Y)
									W.push({
										label: `${ne.accountName} (${ie})`,
										description:
											ne.sessionId === this.current?.sessionId
												? (0, p.localize)(12987, null)
												: void 0,
										account: ne,
										authenticationProvider: X,
									});
							}
							W.push({
								type: "separator",
								label: (0, p.localize)(12988, null),
							});
						}
						for (const X of K) {
							const Y = this.H.getProvider(X.id);
							if (!J.has(X.id) || Y.supportsMultipleAccounts) {
								const ie = Y.label;
								W.push({
									label: (0, p.localize)(12989, null, ie),
									authenticationProvider: X,
								});
							}
						}
						return W;
					}
					async yb(K) {
						let J;
						(0, t.$ORb)(K)
							? (this.S.options?.settingsSyncOptions?.authenticationProvider
									?.id === K.id
									? (J =
											await this.S.options?.settingsSyncOptions?.authenticationProvider?.signIn())
									: (J = (await this.H.createSession(K.id, K.scopes)).id),
								(this.Db = K.id))
							: (this.S.options?.settingsSyncOptions?.authenticationProvider
									?.id === K.authenticationProviderId
									? (J =
											await this.S.options?.settingsSyncOptions?.authenticationProvider?.signIn())
									: (J = K.sessionId),
								(this.Db = K.authenticationProviderId)),
							(this.Fb = J),
							await this.mb();
					}
					async zb() {
						this.O.publicLog2("sync/successiveAuthFailures"),
							(this.Fb = void 0),
							await this.mb("auth failure");
					}
					Ab(K) {
						this.Fb &&
							K.removed?.find((J) => J.id === this.Fb) &&
							(this.Fb = void 0),
							this.mb("change in sessions");
					}
					Bb() {
						this.Fb !== this.Gb() &&
							((this.Eb = null), this.mb("change in storage"));
					}
					get Db() {
						return (
							this.Cb === null &&
								(this.Cb = this.L.get(x.g, h.StorageScope.APPLICATION)),
							this.Cb
						);
					}
					set Db(K) {
						this.Cb !== K &&
							((this.Cb = K),
							K === void 0
								? this.L.remove(x.g, h.StorageScope.APPLICATION)
								: this.L.store(
										x.g,
										K,
										h.StorageScope.APPLICATION,
										h.StorageTarget.MACHINE,
									));
					}
					get Fb() {
						return this.Eb === null && (this.Eb = this.Gb()), this.Eb;
					}
					set Fb(K) {
						this.Eb !== K &&
							((this.Eb = K),
							K === void 0
								? (this.P.info("Settings Sync: Reset current session"),
									this.L.remove(x.h, h.StorageScope.APPLICATION))
								: (this.P.info("Settings Sync: Updated current session", K),
									this.L.store(
										x.h,
										K,
										h.StorageScope.APPLICATION,
										h.StorageTarget.MACHINE,
									)));
					}
					Gb() {
						return this.L.get(x.h, h.StorageScope.APPLICATION);
					}
					get Hb() {
						return !this.L.getBoolean(x.f, h.StorageScope.APPLICATION, !1);
					}
					set Hb(K) {
						this.L.store(
							x.f,
							!K,
							h.StorageScope.APPLICATION,
							h.StorageTarget.MACHINE,
						);
					}
				};
				(e.$jyc = V),
					(e.$jyc =
						V =
						x =
							Ne(
								[
									j(0, t.$5Rb),
									j(1, N.$Vl),
									j(2, r.$$7),
									j(3, u.$vwc),
									j(4, a.$DJ),
									j(5, h.$lq),
									j(6, t.$4Rb),
									j(7, t.$7Rb),
									j(8, i.$km),
									j(9, c.$ik),
									j(10, n.$Bk),
									j(11, g.$q2),
									j(12, R.$5rb),
									j(13, B.$Yrb),
									j(14, o.$4N),
									j(15, s.$8N),
									j(16, f.$GO),
									j(17, b.$6j),
									j(18, $.$HMb),
									j(19, y.$K1),
									j(20, t.$SRb),
									j(21, v.$n6),
									j(22, I.$Li),
									j(23, M.$IY),
									j(24, O.$mwc),
									j(25, U.$ll),
									j(26, f.$IO),
									j(27, F.$FRb),
								],
								V,
							)),
					(0, w.$lK)(E.$Nxc, V, w.InstantiationType.Eager);
			},
		),
		