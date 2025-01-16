define(
			de[4393],
			he([
				1, 0, 15, 163, 6, 94, 3, 23, 240, 12, 19, 162, 28, 4, 10, 57, 119, 1200,
				109, 22, 102, 5, 1619, 34, 40, 62, 30, 211, 951, 32, 25, 78, 244, 157,
				3302, 698, 517, 1822, 384, 1294, 2006, 53, 175, 3380, 1821, 1315, 52,
				143,
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
				x,
				H,
				q,
				V,
				G,
				K,
				J,
			) {
				"use strict";
				var W;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$64c = e.$54c = e.$44c = e.$Z4c = e.$Y4c = void 0),
					(e.$14c = Q),
					(e.$24c = Z),
					(e.$34c = se),
					(m = mt(m)),
					(c = mt(c));
				const X = Object.hasOwnProperty,
					Y = Promise.resolve(void 0);
				let ie = (W = class extends C.$1c {
					constructor(
						ye,
						ue,
						fe,
						me,
						ve,
						ge,
						be,
						Ce,
						Le,
						Fe,
						Oe,
						xe,
						He,
						Ke,
						Je,
						Te,
						Ee,
						Ie,
						Be,
						Se,
					) {
						super(),
							(this.G = ye),
							(this.H = ue),
							(this.I = fe),
							(this.J = me),
							(this.L = ve),
							(this.M = ge),
							(this.N = be),
							(this.O = Ce),
							(this.P = Le),
							(this.Q = Fe),
							(this.R = Oe),
							(this.S = xe),
							(this.U = He),
							(this.W = Ke),
							(this.X = Je),
							(this.Y = Te),
							(this.Z = Ee),
							(this.$ = Ie),
							(this.ab = Be),
							(this.bb = Se),
							(this.a = this.D(new w.$re())),
							(this.onDidRegisterExtensions = this.a.event),
							(this.b = this.D(new w.$re())),
							(this.onDidChangeExtensionsStatus = this.b.event),
							(this.c = this.D(new w.$re({ leakWarningThreshold: 400 }))),
							(this.onDidChangeExtensions = this.c.event),
							(this.f = this.D(new w.$re())),
							(this.onWillActivateByEvent = this.f.event),
							(this.g = this.D(new w.$re())),
							(this.onDidChangeResponsiveChange = this.g.event),
							(this.h = this.D(new w.$re())),
							(this.onWillStop = this.h.event),
							(this.j = new ae()),
							(this.m = new A.$K4c(this.j)),
							(this.n = new t.$Lh()),
							(this.q = new f.$In()),
							(this.s = new Set()),
							(this.u = new oe()),
							(this.y = []),
							(this.z = !1),
							(this.C = this.D(new ne())),
							(this.F = 0),
							this.D(
								this.P.onWillActivateFileSystemProvider((ke) => {
									ke.scheme !== d.Schemas.vscodeRemote &&
										ke.join(this.activateByEvent(`onFileSystem:${ke.scheme}`));
								}),
							),
							(this.t = new F.$T4c(
								this.m,
								this.I,
								this.M,
								this.U,
								this.X,
								this.W,
							)),
							this.D(
								this.O.onEnablementChanged((ke) => {
									const Ue = [],
										qe = [];
									for (const Ae of ke) this.Fb(Ae) ? Ue.push(Ae) : qe.push(Ae);
									r.$w &&
										this.X.info(
											`AbstractExtensionService.onEnablementChanged fired for ${ke.map((Ae) => Ae.identifier.id).join(", ")}`,
										),
										this.db(new te(Ue, qe));
								}),
							),
							this.D(
								this.R.onDidChangeProfile(({ added: ke, removed: Ue }) => {
									(ke.length || Ue.length) &&
										(r.$w &&
											this.X.info(
												"AbstractExtensionService.onDidChangeProfile fired",
											),
										this.db(new te(ke, Ue)));
								}),
							),
							this.D(
								this.R.onDidEnableExtensions((ke) => {
									ke.length &&
										(r.$w &&
											this.X.info(
												"AbstractExtensionService.onDidEnableExtensions fired",
											),
										this.db(new te(ke, [])));
								}),
							),
							this.D(
								this.R.onDidInstallExtensions((ke) => {
									const Ue = [];
									for (const { local: qe, operation: Ae } of ke)
										qe &&
											qe.isValid &&
											Ae !== p.InstallOperation.Migrate &&
											this.Fb(qe) &&
											Ue.push(qe);
									Ue.length &&
										(r.$w &&
											this.X.info(
												`AbstractExtensionService.onDidInstallExtensions fired for ${Ue.map((qe) => qe.identifier.id).join(", ")}`,
											),
										this.db(new te(Ue, [])));
								}),
							),
							this.D(
								this.R.onDidUninstallExtension((ke) => {
									ke.error ||
										(r.$w &&
											this.X.info(
												`AbstractExtensionService.onDidUninstallExtension fired for ${ke.identifier.id}`,
											),
										this.db(new te([], [ke.identifier.id])));
								}),
							),
							this.D(
								this.$.onWillShutdown((ke) => {
									this.Y.getConnection()
										? ke.join(
												async () => {
													await this.Y.endConnection(),
														await this.tb(),
														this.Y.getConnection()?.dispose();
												},
												{
													id: "join.disconnectRemote",
													label: c.localize(12335, null),
													order: K.WillShutdownJoinerOrder.Last,
												},
											)
										: ke.join(this.tb(), {
												id: "join.stopExtensionHosts",
												label: c.localize(12336, null),
											});
								}),
							);
					}
					cb(ye) {
						return this.C.getByKind(ye);
					}
					async db(ye) {
						if ((this.y.push(ye), this.z)) return;
						let ue = null;
						try {
							for (
								this.z = !0,
									await this.n.wait(),
									ue = await this.m.acquireLock("handleDeltaExtensions");
								this.y.length > 0;
							) {
								const fe = this.y.shift();
								await this.eb(ue, fe.toAdd, fe.toRemove);
							}
						} finally {
							(this.z = !1), ue?.dispose();
						}
					}
					async eb(ye, ue, fe) {
						r.$w &&
							this.X.info(
								`AbstractExtensionService._deltaExtensions: toAdd: [${ue.map((be) => be.identifier.id).join(",")}] toRemove: [${fe.map((be) => (typeof be == "string" ? be : be.identifier.id)).join(",")}]`,
							);
						let me = [];
						for (let be = 0, Ce = fe.length; be < Ce; be++) {
							const Le = fe[be],
								Fe = typeof Le == "string" ? Le : Le.identifier.id,
								Oe = typeof Le == "string" ? null : Le,
								xe = this.m.getExtensionDescription(Fe);
							xe &&
								((Oe && xe.extensionLocation.scheme !== Oe.location.scheme) ||
									(this.canRemoveExtension(xe) && me.push(xe)));
						}
						const ve = [];
						for (let be = 0, Ce = ue.length; be < Ce; be++) {
							const Le = ue[be],
								Fe = (0, x.$y2)(Le, !1);
							Fe && this.hb(Fe, me) && ve.push(Fe);
						}
						if (ve.length === 0 && me.length === 0) return;
						const ge = this.m.deltaExtensions(
							ye,
							ve,
							me.map((be) => be.identifier),
						);
						this.c.fire({ added: ve, removed: me }),
							(me = me.concat(ge.removedDueToLooping)),
							ge.removedDueToLooping.length > 0 &&
								this.L.notify({
									severity: v.Severity.Error,
									message: c.localize(
										12337,
										null,
										ge.removedDueToLooping
											.map((be) => `'${be.identifier.value}'`)
											.join(", "),
									),
								}),
							this.G.updateEnabledApiProposals(ve),
							this.Gb([].concat(ve).concat(me)),
							await this.fb(
								ge.versionId,
								ve,
								me.map((be) => be.identifier),
							),
							await this.ib(ve);
						for (let be = 0; be < ve.length; be++) this.jb(ve[be]);
					}
					async fb(ye, ue, fe) {
						const me = this.t.deltaExtensions(ue, fe),
							ve = this.C.map((ge) => this.gb(ge, ye, ue, fe, me));
						await Promise.all(ve);
					}
					async gb(ye, ue, fe, me, ve) {
						const ge = this.t.filterByExtensionHostManager(fe, ye),
							be = (0, F.$V4c)(
								me,
								ve,
								(Le) => ye.representsRunningLocation(Le),
								{ environmentService: this.M },
							),
							Ce = o.$a2.createActivationEventsMap(fe);
						if (r.$w) {
							const Le = (Oe) => Oe.map((xe) => xe.identifier.value).join(","),
								Fe = (Oe) => Oe.map((xe) => xe.value).join(",");
							this.X.info(
								`AbstractExtensionService: Calling deltaExtensions: toRemove: [${Fe(me)}], toAdd: [${Le(fe)}], myToRemove: [${Fe(be)}], myToAdd: [${Le(ge)}],`,
							);
						}
						await ye.deltaExtensions({
							versionId: ue,
							toRemove: me,
							toAdd: fe,
							addActivationEvents: Ce,
							myToRemove: be,
							myToAdd: ge.map((Le) => Le.identifier),
						});
					}
					canAddExtension(ye) {
						return this.hb(ye, []);
					}
					hb(ye, ue) {
						if (
							this.m.getExtensionDescriptionByIdOrUUID(ye.identifier, ye.id) &&
							!ue.some((Ce) => f.$Gn.equals(ye.identifier, Ce.identifier))
						)
							return !1;
						const me = this.t.readExtensionKinds(ye),
							ve = ye.extensionLocation.scheme === d.Schemas.vscodeRemote;
						return (
							this.I.pickExtensionHostKind(
								ye.identifier,
								me,
								!ve,
								ve,
								O.ExtensionRunningPreference.None,
							) !== null
						);
					}
					canRemoveExtension(ye) {
						const ue = this.m.getExtensionDescription(ye.identifier);
						return !(!ue || this.q.get(ue.identifier)?.activationStarted);
					}
					registerHotfixExtensionsProvider(ye) {
						this.w = ye;
					}
					async ib(ye) {
						this.w && (await this.w(ye));
					}
					async jb(ye) {
						let ue = !1,
							fe = null,
							me = !1;
						const ve = this.j.readActivationEvents(ye);
						for (const ge of ve) {
							if (this.s.has(ge)) {
								(ue = !0), (fe = ge);
								break;
							}
							if (ge === "*") {
								(ue = !0), (fe = ge);
								break;
							}
							if (
								(/^workspaceContains/.test(ge) && (me = !0),
								ge === "onStartupFinished")
							) {
								(ue = !0), (fe = ge);
								break;
							}
						}
						if (ue)
							await Promise.all(
								this.C.map((ge) =>
									ge.activate(ye.identifier, {
										startup: !1,
										extensionId: ye.identifier,
										activationEvent: fe,
									}),
								),
							).then(() => {});
						else if (me) {
							const ge = await this.S.getCompleteWorkspace(),
								be = !!this.M.remoteAuthority,
								Ce = {
									logService: this.X,
									folders: ge.folders.map((Fe) => Fe.uri),
									forceUsingSearch: be,
									exists: (Fe) => this.P.exists(Fe),
									checkExists: (Fe, Oe, xe) =>
										this.J.invokeFunction((He) => (0, G.$7oc)(He, Fe, Oe, xe)),
								},
								Le = await (0, G.$6oc)(Ce, ye);
							if (!Le) return;
							await Promise.all(
								this.C.map((Fe) =>
									Fe.activate(ye.identifier, {
										startup: !1,
										extensionId: ye.identifier,
										activationEvent: Le.activationEvent,
									}),
								),
							).then(() => {});
						}
					}
					async kb() {
						m.mark("code/willLoadExtensions"), this.vb(!0, []);
						const ye = await this.m.acquireLock("_initialize");
						try {
							const ue = await this.Pb();
							this.lb(ye, ue);
							const fe = this.m.getSnapshot();
							for (const me of this.C)
								if (me.startup !== x.ExtensionHostStartup.EagerAutoStart) {
									const ve = this.t.filterByExtensionHostManager(
										fe.extensions,
										me,
									);
									me.start(
										fe.versionId,
										fe.extensions,
										ve.map((ge) => ge.identifier),
									);
								}
						} finally {
							ye.dispose();
						}
						this.ob(), m.mark("code/didLoadExtensions"), await this.mb();
					}
					lb(ye, ue) {
						const {
								allowRemoteExtensionsInLocalWebWorker: fe,
								hasLocalProcess: me,
							} = ue,
							ve = Q(this.X, this.O, this.G, ue.local, !1);
						let ge = Q(this.X, this.O, this.G, ue.remote, !1);
						this.t.initializeRunningLocation(ve, ge), this.vb(!0, []);
						const be = fe
								? this.t.filterByExtensionHostKind(
										ge,
										O.ExtensionHostKind.LocalWebWorker,
									)
								: [],
							Ce = me
								? this.t.filterByExtensionHostKind(
										ve,
										O.ExtensionHostKind.LocalProcess,
									)
								: [],
							Le = this.t.filterByExtensionHostKind(
								ve,
								O.ExtensionHostKind.LocalWebWorker,
							);
						ge = this.t.filterByExtensionHostKind(
							ge,
							O.ExtensionHostKind.Remote,
						);
						for (const xe of be) re(Le, xe.identifier) || Le.push(xe);
						const Fe = ge.concat(Ce).concat(Le),
							Oe = this.m.deltaExtensions(ye, Fe, []);
						Oe.removedDueToLooping.length > 0 &&
							this.L.notify({
								severity: v.Severity.Error,
								message: c.localize(
									12338,
									null,
									Oe.removedDueToLooping
										.map((xe) => `'${xe.identifier.value}'`)
										.join(", "),
								),
							}),
							this.Gb(this.m.getAllExtensionDescriptions());
					}
					async mb() {
						if (
							!this.M.isExtensionDevelopment ||
							!this.M.extensionTestsLocationURI
						)
							return;
						const ye = this.nb(this.M.extensionTestsLocationURI);
						if (!ye) {
							const fe = c.localize(
								12339,
								null,
								this.M.extensionTestsLocationURI.toString(),
							);
							console.error(fe), this.L.error(fe);
							return;
						}
						let ue;
						try {
							(ue = await ye.extensionTestsExecute()),
								r.$w &&
									this.X.info(`Extension host test runner exit code: ${ue}`);
						} catch (fe) {
							r.$w && this.X.error("Extension host test runner error", fe),
								console.error(fe),
								(ue = 1);
						}
						this.Qb(ue);
					}
					nb(ye) {
						let ue = null;
						for (const fe of this.m.getAllExtensionDescriptions())
							if ((0, u.$hh)(ye, fe.extensionLocation)) {
								ue = this.t.getRunningLocation(fe.identifier);
								break;
							}
						return (
							ue === null &&
								(ye.scheme === d.Schemas.vscodeRemote
									? (ue = new z.$h2())
									: (ue = new z.$f2(0))),
							ue !== null ? this.C.getByRunningLocation(ue) : null
						);
					}
					ob() {
						this.n.open(),
							this.a.fire(void 0),
							this.b.fire(
								this.m.getAllExtensionDescriptions().map((ye) => ye.identifier),
							);
					}
					async pb(ye) {
						for (let fe = 1; ; fe++)
							try {
								return this.rb(ye);
							} catch (me) {
								if (
									T.$6l.isNoResolverFound(me) ||
									T.$6l.isNotAvailable(me) ||
									fe >= 5
								)
									throw me;
							}
					}
					async qb() {
						const ye = this.M.remoteAuthority;
						if (ye) {
							this.ab._clearResolvedAuthority(ye);
							try {
								const ue = await this.rb(ye);
								this.ab._setResolvedAuthority(ue.authority, ue.options);
							} catch (ue) {
								this.ab._setResolvedAuthorityError(ye, ue);
							}
						}
					}
					async rb(ye) {
						const ue = (0, T.$7l)(ye),
							fe = a.$le.create(!1);
						this.X.info(`Invoking resolveAuthority(${ue})...`);
						try {
							m.mark(`code/willResolveAuthority/${ue}`);
							const me = await this.Rb(ye);
							return (
								m.mark(`code/didResolveAuthorityOK/${ue}`),
								this.X.info(
									`resolveAuthority(${ue}) returned '${me.authority.connectTo}' after ${fe.elapsed()} ms`,
								),
								me
							);
						} catch (me) {
							throw (
								(m.mark(`code/didResolveAuthorityError/${ue}`),
								this.X.error(
									`resolveAuthority(${ue}) returned an error after ${fe.elapsed()} ms`,
									me,
								),
								me)
							);
						}
					}
					async sb(ye, ue) {
						const fe = this.cb(ye);
						if (fe.length === 0) throw new Error("Cannot resolve authority");
						this.F++;
						const me = await Promise.all(
							fe.map((ge) => ge.resolveAuthority(ue, this.F)),
						);
						let ve = null;
						for (const ge of me) {
							if (ge.type === "ok") return ge.value;
							if (!ve) {
								ve = ge;
								continue;
							}
							const be =
									ve.error.code === T.RemoteAuthorityResolverErrorCode.Unknown,
								Ce =
									ge.error.code === T.RemoteAuthorityResolverErrorCode.Unknown;
							be && !Ce && (ve = ge);
						}
						throw new T.$6l(ve.error.message, ve.error.code, ve.error.detail);
					}
					stopExtensionHosts(ye, ue) {
						return this.ub(ye, ue);
					}
					async tb() {
						const ye = [];
						for (const ue of this.q.values())
							ue.activationStarted && ye.push(ue.id);
						await this.C.stopAllInReverse();
						for (const ue of this.q.values()) ue.clearRuntimeStatus();
						ye.length > 0 && this.b.fire(ye);
					}
					async ub(ye, ue = !1) {
						const fe = [],
							me = new Set();
						this.h.fire({
							reason: ye,
							auto: ue,
							veto(ge, be) {
								fe.push(ge),
									typeof ge == "boolean"
										? ge === !0 && me.add(be)
										: ge
												.then((Ce) => {
													Ce && me.add(be);
												})
												.catch((Ce) => {
													me.add(c.localize(12340, null, be, (0, i.$xj)(Ce)));
												});
							},
						});
						const ve = await (0, y.$G4c)(fe, (ge) => this.X.error(ge));
						if (!ve) await this.tb();
						else if (!ue) {
							const ge = Array.from(me);
							this.X.warn(
								`Extension host was not stopped because of veto (stop reason: ${ye}, veto reason: ${ge.join(", ")})`,
							),
								await this.bb.warn(
									c.localize(12341, null, ye),
									ge.length === 1
										? c.localize(12342, null, ge[0])
										: c.localize(
												12343,
												null,
												ge.join(`
 -`),
											),
								);
						}
						return !ve;
					}
					vb(ye, ue) {
						const fe = [];
						for (let me = 0; me <= this.t.maxLocalProcessAffinity; me++)
							fe.push(new z.$f2(me));
						for (let me = 0; me <= this.t.maxLocalWebWorkerAffinity; me++)
							fe.push(new z.$g2(me));
						fe.push(new z.$h2());
						for (const me of fe) {
							if (this.C.getByRunningLocation(me)) continue;
							const ve = this.wb(me, ye, ue);
							if (ve) {
								const [ge, be] = ve;
								this.C.add(ge, be);
							}
						}
					}
					wb(ye, ue, fe) {
						const me = this.H.createExtensionHost(this.t, ye, ue);
						if (!me) return null;
						const ve = this.xb(me, fe),
							ge = new C.$Zc();
						return (
							ge.add(ve.onDidExit(([be, Ce]) => this.yb(ve, be, Ce))),
							ge.add(
								ve.onDidChangeResponsiveState((be) => {
									this.X.info(
										`Extension host (${ve.friendyName}) is ${be === V.ResponsiveState.Responsive ? "responsive" : "unresponsive"}.`,
									),
										this.g.fire({
											extensionHostKind: ve.kind,
											isResponsive: be === V.ResponsiveState.Responsive,
											getInspectListener: (Ce) => ve.getInspectPort(Ce),
										});
								}),
							),
							[ve, ge]
						);
					}
					xb(ye, ue) {
						const fe = this.Kb(ye);
						return ye.startup === x.ExtensionHostStartup.Lazy && ue.length === 0
							? this.J.createInstance(q.$X4c, ye, fe)
							: this.J.createInstance(B.$R4c, ye, ue, fe);
					}
					yb(ye, ue, fe) {
						if (!(0, R.$Umc)(this.M).isExtensionDevHost) {
							this.zb(ye, ue, fe);
							return;
						}
						this.Qb(ue);
					}
					zb(ye, ue, fe) {
						console.error(
							`Extension host (${ye.friendyName}) terminated unexpectedly. Code: ${ue}, Signal: ${fe}`,
						),
							ye.kind === O.ExtensionHostKind.LocalProcess
								? this.tb()
								: ye.kind === O.ExtensionHostKind.Remote &&
									(fe && this.Bb(ye, fe), this.C.stopOne(ye));
					}
					Ab(ye) {
						return new Promise((ue, fe) => {
							const me = setTimeout(() => {
								fe(new Error("getExtensionHostExitInfo timed out"));
							}, 2e3);
							this.Y.getExtensionHostExitInfo(ye).then((ve) => {
								clearTimeout(me), ue(ve);
							}, fe);
						});
					}
					async Bb(ye, ue) {
						try {
							const fe = await this.Ab(ue);
							fe &&
								this.X.error(
									`Extension host (${ye.friendyName}) terminated unexpectedly with code ${fe.code}.`,
								),
								this.Cb(ye),
								this.u.registerCrash(),
								this.u.shouldAutomaticallyRestart()
									? (this.X.info(
											"Automatically restarting the remote extension host.",
										),
										this.L.status(c.localize(12344, null), { hideAfter: 5e3 }),
										this.vb(!1, Array.from(this.s.keys())))
									: this.L.prompt(v.Severity.Error, c.localize(12345, null), [
											{
												label: c.localize(12346, null),
												run: () => {
													this.vb(!1, Array.from(this.s.keys()));
												},
											},
										]);
						} catch {}
					}
					Cb(ye) {
						const ue = [];
						for (const fe of this.q.values())
							fe.activationStarted &&
								ye.containsExtension(fe.id) &&
								ue.push(fe.id);
						ue.length > 0
							? this.X.error(
									`Extension host (${ye.friendyName}) terminated unexpectedly. The following extensions were running: ${ue.map((fe) => fe.value).join(", ")}`,
								)
							: this.X.error(
									`Extension host (${ye.friendyName}) terminated unexpectedly. No extensions were activated.`,
								);
					}
					async startExtensionHosts(ye) {
						await this.tb(),
							ye && (await this.db(new te(ye.toAdd, ye.toRemove)));
						const ue = await this.m.acquireLock("startExtensionHosts");
						try {
							this.vb(!1, Array.from(this.s.keys()));
							const fe = this.cb(O.ExtensionHostKind.LocalProcess);
							await Promise.all(fe.map((me) => me.ready()));
						} finally {
							ue.dispose();
						}
					}
					activateByEvent(ye, ue = x.ActivationKind.Normal) {
						return this.n.isOpen()
							? (this.s.add(ye),
								this.m.containsActivationEvent(ye) ? this.Db(ye, ue) : Y)
							: (this.s.add(ye),
								ue === x.ActivationKind.Immediate
									? this.Db(ye, ue)
									: this.n.wait().then(() => this.Db(ye, ue)));
					}
					Db(ye, ue) {
						const fe = Promise.all(
							this.C.map((me) => me.activateByEvent(ye, ue)),
						).then(() => {});
						return this.f.fire({ event: ye, activation: fe }), fe;
					}
					activateById(ye, ue) {
						return this._activateById(ye, ue);
					}
					activationEventIsDone(ye) {
						return this.n.isOpen()
							? this.m.containsActivationEvent(ye)
								? this.C.every((ue) => ue.activationEventIsDone(ye))
								: !0
							: !1;
					}
					whenInstalledExtensionsRegistered() {
						return this.n.wait();
					}
					get extensions() {
						return this.m.getAllExtensionDescriptions();
					}
					Eb() {
						return this.n.wait().then(() => this.m.getSnapshot());
					}
					getExtension(ye) {
						return this.n.wait().then(() => this.m.getExtensionDescription(ye));
					}
					readExtensionPointContributions(ye) {
						return this.n.wait().then(() => {
							const ue = this.m.getAllExtensionDescriptions(),
								fe = [];
							for (const me of ue)
								me.contributes &&
									X.call(me.contributes, ye.name) &&
									fe.push(new x.$w2(me, me.contributes[ye.name]));
							return fe;
						});
					}
					getExtensionsStatus() {
						const ye = Object.create(null);
						if (this.m) {
							const ue = this.m.getAllExtensionDescriptions();
							for (const fe of ue) {
								const me = this.q.get(fe.identifier);
								ye[fe.identifier.value] = {
									id: fe.identifier,
									messages: me?.messages ?? [],
									activationStarted: me?.activationStarted ?? !1,
									activationTimes: me?.activationTimes ?? void 0,
									runtimeErrors: me?.runtimeErrors ?? [],
									runningLocation: this.t.getRunningLocation(fe.identifier),
								};
							}
						}
						return ye;
					}
					async getInspectPorts(ye, ue) {
						return (
							await Promise.all(this.cb(ye).map((me) => me.getInspectPort(ue)))
						).filter(h.$tg);
					}
					async setRemoteEnvironment(ye) {
						await this.C.map((ue) => ue.setRemoteEnvironment(ye));
					}
					Fb(ye) {
						try {
							return this.O.isEnabled(ye);
						} catch {
							return !1;
						}
					}
					Gb(ye) {
						const ue = Object.create(null);
						for (const ge of ye)
							if (ge.contributes)
								for (const be in ge.contributes)
									X.call(ge.contributes, be) && (ue[be] = !0);
						const fe = (ge) => this.Ib(ge),
							me = this.m.getAllExtensionDescriptions(),
							ve = H.$n2.getExtensionPoints();
						m.mark("code/willHandleExtensionPoints");
						for (const ge of ve)
							ue[ge.name] &&
								(m.mark(`code/willHandleExtensionPoint/${ge.name}`),
								W.Jb(ge, me, fe),
								m.mark(`code/didHandleExtensionPoint/${ge.name}`));
						m.mark("code/didHandleExtensionPoints");
					}
					Hb(ye) {
						return this.q.has(ye) || this.q.set(ye, new le(ye)), this.q.get(ye);
					}
					Ib(ye) {
						this.Hb(ye.extensionId).addMessage(ye);
						const fe = this.m.getExtensionDescription(ye.extensionId),
							me = `[${ye.extensionId.value}]: ${ye.message}`;
						if (
							(ye.type === v.Severity.Error
								? (fe &&
										fe.isUnderDevelopment &&
										this.L.notify({ severity: v.Severity.Error, message: me }),
									this.X.error(me))
								: ye.type === v.Severity.Warning
									? (fe &&
											fe.isUnderDevelopment &&
											this.L.notify({
												severity: v.Severity.Warning,
												message: me,
											}),
										this.X.warn(me))
									: this.X.info(me),
							ye.extensionId &&
								this.M.isBuilt &&
								!this.M.isExtensionDevelopment)
						) {
							const {
								type: ve,
								extensionId: ge,
								extensionPointId: be,
								message: Ce,
							} = ye;
							this.N.publicLog2("extensionsMessage", {
								type: ve,
								extensionId: ge.value,
								extensionPointId: be,
								message: Ce,
							});
						}
					}
					static Jb(ye, ue, fe) {
						const me = [];
						for (const ve of ue)
							ve.contributes &&
								X.call(ve.contributes, ye.name) &&
								me.push({
									description: ve,
									value: ve.contributes[ye.name],
									collector: new H.$i2(fe, ve, ye.name),
								});
						ye.acceptUsers(me);
					}
					Kb(ye) {
						return {
							_activateById: (ue, fe) => this._activateById(ue, fe),
							_onWillActivateExtension: (ue) => this.Lb(ue, ye.runningLocation),
							_onDidActivateExtension: (ue, fe, me, ve, ge) =>
								this.Mb(ue, fe, me, ve, ge),
							_onDidActivateExtensionError: (ue, fe) => this.Nb(ue, fe),
							_onExtensionRuntimeError: (ue, fe) => this.Ob(ue, fe),
						};
					}
					async _activateById(ye, ue) {
						if (
							!(
								await Promise.all(this.C.map((ve) => ve.activate(ye, ue)))
							).some((ve) => ve)
						)
							throw new Error(`Unknown extension ${ye.value}`);
					}
					Lb(ye, ue) {
						this.t.set(ye, ue), this.Hb(ye).onWillActivate();
					}
					Mb(ye, ue, fe, me, ve) {
						this.Hb(ye).setActivationTimes(new x.$v2(ue, fe, me, ve)),
							this.b.fire([ye]);
					}
					Nb(ye, ue) {
						this.N.publicLog2("extensionActivationError", {
							extensionId: ye.value,
							error: ue.message,
						});
					}
					Ob(ye, ue) {
						this.Hb(ye).addRuntimeError(ue), this.b.fire([ye]);
					}
				});
				(e.$Y4c = ie),
					(e.$Y4c =
						ie =
						W =
							Ne(
								[
									j(3, l.$Li),
									j(4, v.$4N),
									j(5, D.$r8),
									j(6, k.$km),
									j(7, N.$IQb),
									j(8, b.$ll),
									j(9, S.$Bk),
									j(10, N.$GQb),
									j(11, L.$Vi),
									j(12, n.$gj),
									j(13, U.$JSb),
									j(14, $.$ik),
									j(15, J.$$m),
									j(16, P.$bfb),
									j(17, K.$n6),
									j(18, T.$3l),
									j(19, g.$GO),
								],
								ie,
							));
				class ne extends C.$1c {
					constructor() {
						super(...arguments), (this.a = []);
					}
					dispose() {
						for (let ye = this.a.length - 1; ye >= 0; ye--) {
							const ue = this.a[ye];
							ue.extensionHost.disconnect(), ue.dispose();
						}
						(this.a = []), super.dispose();
					}
					add(ye, ue) {
						this.a.push(new ee(ye, ue));
					}
					async stopAllInReverse() {
						for (let ye = this.a.length - 1; ye >= 0; ye--) {
							const ue = this.a[ye];
							await ue.extensionHost.disconnect(), ue.dispose();
						}
						this.a = [];
					}
					async stopOne(ye) {
						const ue = this.a.findIndex((fe) => fe.extensionHost === ye);
						ue >= 0 &&
							(this.a.splice(ue, 1), await ye.disconnect(), ye.dispose());
					}
					getByKind(ye) {
						return this.filter((ue) => ue.kind === ye);
					}
					getByRunningLocation(ye) {
						for (const ue of this.a)
							if (ue.extensionHost.representsRunningLocation(ye))
								return ue.extensionHost;
						return null;
					}
					*[Symbol.iterator]() {
						for (const ye of this.a) yield ye.extensionHost;
					}
					map(ye) {
						return this.a.map((ue) => ye(ue.extensionHost));
					}
					every(ye) {
						return this.a.every((ue) => ye(ue.extensionHost));
					}
					filter(ye) {
						return this.a
							.filter((ue) => ye(ue.extensionHost))
							.map((ue) => ue.extensionHost);
					}
				}
				class ee {
					constructor(ye, ue) {
						(this.extensionHost = ye), (this.disposableStore = ue);
					}
					dispose() {
						this.disposableStore.dispose(), this.extensionHost.dispose();
					}
				}
				class _ {
					constructor(ye, ue, fe, me) {
						(this.local = ye),
							(this.remote = ue),
							(this.hasLocalProcess = fe),
							(this.allowRemoteExtensionsInLocalWebWorker = me);
					}
				}
				e.$Z4c = _;
				class te {
					constructor(ye, ue) {
						(this.toAdd = ye), (this.toRemove = ue);
					}
				}
				function Q($e, ye, ue, fe, me) {
					return ue.updateEnabledApiProposals(fe), Z($e, ye, fe, me);
				}
				function Z($e, ye, ue, fe) {
					const me = [],
						ve = [],
						ge = [];
					for (const Ce of ue)
						Ce.isUnderDevelopment
							? me.push(Ce)
							: (ve.push(Ce), ge.push((0, x.$x2)(Ce)));
					const be = ye.getEnablementStates(ge, fe ? { trusted: !0 } : void 0);
					for (let Ce = 0; Ce < be.length; Ce++)
						ye.isEnabledEnablementState(be[Ce])
							? me.push(ve[Ce])
							: r.$w &&
								$e.info(
									`filterEnabledExtensions: extension '${ve[Ce].identifier.value}' is disabled`,
								);
					return me;
				}
				function se($e, ye, ue, fe) {
					return Z($e, ye, [ue], fe).includes(ue);
				}
				function re($e, ye) {
					for (const ue of $e) if (f.$Gn.equals(ue.identifier, ye)) return !0;
					return !1;
				}
				class le {
					get messages() {
						return this.a;
					}
					get activationTimes() {
						return this.b;
					}
					get runtimeErrors() {
						return this.c;
					}
					get activationStarted() {
						return this.d;
					}
					constructor(ye) {
						(this.id = ye),
							(this.a = []),
							(this.b = null),
							(this.c = []),
							(this.d = !1);
					}
					clearRuntimeStatus() {
						(this.d = !1), (this.b = null), (this.c = []);
					}
					addMessage(ye) {
						this.a.push(ye);
					}
					setActivationTimes(ye) {
						this.b = ye;
					}
					addRuntimeError(ye) {
						this.c.push(ye);
					}
					onWillActivate() {
						this.d = !0;
					}
				}
				e.$44c = le;
				class oe {
					constructor() {
						this.c = [];
					}
					static {
						this.a = 5 * 60 * 1e3;
					}
					static {
						this.b = 3;
					}
					d() {
						const ye = Date.now() - oe.a;
						for (; this.c.length > 0 && this.c[0].timestamp < ye; )
							this.c.shift();
					}
					registerCrash() {
						this.d(), this.c.push({ timestamp: Date.now() });
					}
					shouldAutomaticallyRestart() {
						return this.d(), this.c.length < oe.b;
					}
				}
				e.$54c = oe;
				class ae {
					readActivationEvents(ye) {
						return o.$a2.readActivationEvents(ye);
					}
				}
				e.$64c = ae;
				class pe extends C.$1c {
					constructor() {
						super(...arguments), (this.type = "markdown");
					}
					shouldRender(ye) {
						return !!ye.activationEvents;
					}
					render(ye) {
						const ue = ye.activationEvents || [],
							fe = new E.$cl();
						if (ue.length)
							for (const me of ue)
								fe.appendMarkdown(`- \`${me}\`
`);
						return { data: fe, dispose: () => {} };
					}
				}
				I.$Io
					.as(M.Extensions.ExtensionFeaturesRegistry)
					.registerExtensionFeature({
						id: "activationEvents",
						label: c.localize(12347, null),
						access: { canToggle: !1 },
						renderer: new s.$Ji(pe),
					});
			},
		),
		