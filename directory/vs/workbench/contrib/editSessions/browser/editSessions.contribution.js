import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../common/contributions.js';
import '../../../../platform/registry/common/platform.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../nls.js';
import '../common/editSessions.js';
import '../../scm/common/scm.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/buffer.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/progress/common/progress.js';
import './editSessionsStorageService.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/userDataSync/common/userDataSync.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/environment/common/environment.js';
import '../../../common/configuration.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../services/extensions/common/extensionsRegistry.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/workspace/common/virtualWorkspace.js';
import '../../../../base/common/network.js';
import '../../../../platform/contextkey/common/contextkeys.js';
import '../../../services/extensions/common/extensions.js';
import '../common/editSessionsLogService.js';
import '../../../common/views.js';
import '../../../services/views/common/viewsService.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../browser/parts/views/viewPaneContainer.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './editSessionsViews.js';
import './editSessionsFileSystemProvider.js';
import '../../../../base/common/platform.js';
import '../../../common/contextkeys.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/objects.js';
import '../../../../platform/workspace/common/editSessions.js';
import '../../../../base/common/themables.js';
import '../../../services/output/common/output.js';
import '../../../../base/browser/hash.js';
import '../../../../platform/storage/common/storage.js';
import '../../../services/activity/common/activity.js';
import '../../../services/editor/common/editorService.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/errors.js';
import '../../../services/remote/common/remoteAgentService.js';
import '../../extensions/common/extensions.js';
import '../../../services/panecomposite/browser/panecomposite.js';
import '../common/workspaceStateSync.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
import '../../../../platform/request/common/request.js';
import '../common/editSessionsStorageClient.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../services/workspaces/common/workspaceIdentityService.js';
define(
			de[4062],
			he([
				1, 0, 3, 55, 30, 52, 11, 4, 685, 258, 22, 25, 9, 19, 76, 10, 84, 3318,
				20, 150, 32, 40, 57, 62, 41, 113, 224, 81, 63, 175, 8, 31, 349, 23, 179,
				53, 3059, 60, 89, 102, 239, 5, 4020, 3058, 12, 100, 33, 82, 781, 26,
				297, 530, 21, 260, 18, 14, 29, 143, 141, 142, 4061, 129, 327, 3060, 68,
				1952,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*lifecycle*/,
				i /*contributions*/,
				w /*platform*/,
				E /*lifecycle*/,
				C /*actions*/,
				d /*nls*/,
				m /*editSessions*/,
				r /*scm*/,
				u /*files*/,
				a /*workspace*/,
				h /*uri*/,
				c /*resources*/,
				n /*buffer*/,
				g /*configuration*/,
				p /*progress*/,
				o /*editSessionsStorageService*/,
				f /*extensions*/,
				b /*userDataSync*/,
				s /*telemetry*/,
				l /*notification*/,
				y /*dialogs*/,
				$ /*productService*/,
				v /*opener*/,
				S /*environment*/,
				I /*configuration*/,
				T /*configurationRegistry*/,
				P /*quickInput*/,
				k /*extensionsRegistry*/,
				L /*contextkey*/,
				D /*commands*/,
				M /*virtualWorkspace*/,
				N /*network*/,
				A /*contextkeys*/,
				R /*extensions*/,
				O /*editSessionsLogService*/,
				B /*views*/,
				U /*viewsService*/,
				z /*descriptors*/,
				F /*viewPaneContainer*/,
				x /*instantiation*/,
				H /*editSessionsViews*/,
				q /*editSessionsFileSystemProvider*/,
				V /*platform*/,
				G /*contextkeys*/,
				K /*cancellation*/,
				J /*objects*/,
				W /*editSessions*/,
				X /*themables*/,
				Y /*output*/,
				ie /*hash*/,
				ne /*storage*/,
				ee /*activity*/,
				_ /*editorService*/,
				te /*codicons*/,
				Q /*errors*/,
				Z /*remoteAgentService*/,
				se /*extensions*/,
				re /*panecomposite*/,
				le /*workspaceStateSync*/,
				oe /*userDataProfile*/,
				ae /*request*/,
				pe /*editSessionsStorageClient*/,
				$e /*uriIdentity*/,
				ye /*workspaceIdentityService*/,
) {
				"use strict";
				var ue;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$W1c = void 0),
					(0, f.$lK)(m.$A1c, O.$Q1c, f.InstantiationType.Delayed),
					(0, f.$lK)(m.$z1c, o.$P1c, f.InstantiationType.Delayed);
				const fe = {
						id: "_workbench.editSessions.actions.continueEditSession",
						title: (0, d.localize2)(5960, "Continue Working On..."),
						precondition: G.$xPb.notEqualsTo("0"),
						f1: !0,
					},
					me = {
						id: "_workbench.editSessions.actions.continueEditSession.openLocalFolder",
						title: (0, d.localize2)(5961, "Open In Local Folder"),
						category: m.$y1c,
						precondition: L.$Kj.and(A.$7Lb.toNegated(), G.$DPb),
					},
					ve = {
						id: "workbench.editSessions.actions.showOutputChannel",
						title: (0, d.localize2)(5962, "Show Log"),
						category: m.$y1c,
					},
					ge = {
						id: "workbench.action.continueOn.extensions",
						title: (0, d.localize)(5914, null),
					};
				(0, C.$4X)(
					class extends C.$3X {
						constructor() {
							super({ ...ge, f1: !1 });
						}
						async run(Te) {
							(
								await Te.get(re.$6Sb).openPaneComposite(
									se.$LQb,
									B.ViewContainerLocation.Sidebar,
									!0,
								)
							)
								?.getViewPaneContainer()
								?.search("@tag:continueOn");
						}
					},
				);
				const be = `[${(0, d.localize)(5915, null)}](command:${ve.id})`,
					Ce = { location: p.ProgressLocation.Window, type: "syncing" },
					Le = "editSessionId",
					Fe = "workbench.editSessions.continueOn";
				let Oe = class extends t.$1c {
					static {
						ue = this;
					}
					static {
						this.h = "applicationLaunchedViaContinueOn";
					}
					constructor(
						Ee,
						Ie,
						Be,
						Se,
						ke,
						Ue,
						qe,
						Ae,
						Me,
						De,
						Re,
						je,
						Ve,
						Ze,
						et,
						rt,
						ft,
						bt,
						nt,
						lt,
						ct,
						gt,
						ht,
						Rt,
						Nt,
						jt,
						ti,
						kt,
						hi,
					) {
						super(),
							(this.r = Ee),
							(this.s = Ie),
							(this.t = Be),
							(this.u = Se),
							(this.w = ke),
							(this.y = Ue),
							(this.z = qe),
							(this.C = Ae),
							(this.F = Me),
							(this.G = De),
							(this.H = Re),
							(this.I = je),
							(this.J = Ve),
							(this.L = Ze),
							(this.M = et),
							(this.N = rt),
							(this.O = ft),
							(this.P = bt),
							(this.Q = nt),
							(this.R = lt),
							(this.S = ct),
							(this.U = gt),
							(this.W = ht),
							(this.X = Rt),
							(this.Y = Nt),
							(this.Z = jt),
							(this.$ = ti),
							(this.ab = kt),
							(this.bb = hi),
							(this.a = []),
							(this.j = this.D(new t.$2c())),
							(this.m = new Set()),
							(this.b = m.$K1c.bindTo(this.P)),
							(this.g = m.$F1c.bindTo(this.P)),
							this.g.set(!1),
							this.I["editSessions.store"]?.url &&
								((this.q = new pe.$x1c(
									h.URI.parse(this.I["editSessions.store"].url),
									this.I,
									this.Z,
									this.F,
									this.G,
									this.s,
									this.S,
								)),
								(this.r.storeClient = this.q),
								(this.n = new le.$V1c(
									this.$.defaultProfile,
									void 0,
									this.q,
									this.F,
									this.s,
									this.G,
									this.w,
									this.J,
									this.S,
									this.ab,
									this.bb,
									this.r,
								)),
								this.cb(),
								this.gb(),
								this.fb(),
								this.rb(),
								this.D(
									this.s.registerProvider(q.$S1c.SCHEMA, new q.$S1c(this.r)),
								),
								this.R.onWillShutdown((Kt) => {
									Kt.reason !== E.ShutdownReason.RELOAD &&
										this.r.isSignedIn &&
										this.J.getValue(
											"workbench.experimental.cloudChanges.autoStore",
										) === "onShutdown" &&
										!V.$r &&
										Kt.join(this.eb(), {
											id: "autoStoreWorkingChanges",
											label: (0, d.localize)(5916, null),
										});
								}),
								this.D(this.r.onDidSignIn(() => this.db())),
								this.D(this.r.onDidSignOut(() => this.db())));
					}
					async cb() {
						const Ee =
							this.J.getValue("workbench.cloudChanges.autoResume") ===
							"onReload";
						if (this.G.editSessionId !== void 0)
							this.F.info(
								`Resuming cloud changes, reason: found editSessionId ${this.G.editSessionId} in environment service...`,
							),
								await this.t.withProgress(
									Ce,
									async (Ie) =>
										await this.resumeEditSession(
											this.G.editSessionId,
											void 0,
											void 0,
											void 0,
											Ie,
										).finally(() => (this.G.editSessionId = void 0)),
								);
						else if (Ee && this.r.isSignedIn)
							this.F.info(
								"Resuming cloud changes, reason: cloud changes enabled...",
							),
								await this.t.withProgress(
									Ce,
									async (Ie) =>
										await this.resumeEditSession(
											void 0,
											!0,
											void 0,
											void 0,
											Ie,
										),
								);
						else if (Ee) {
							const Ie = this.S.getBoolean(
								ue.h,
								ne.StorageScope.APPLICATION,
								!1,
							);
							this.F.info(
								`Prompting to enable cloud changes, has application previously launched from Continue On flow: ${Ie}`,
							);
							const Be = () => {
								this.F.info(
									"Showing badge to enable cloud changes in accounts menu...",
								),
									this.db(),
									this.g.set(!0);
								const Se = this.r.onDidSignIn(async () => {
									Se.dispose(),
										this.F.info(
											"Showing badge to enable cloud changes in accounts menu succeeded, resuming cloud changes...",
										),
										await this.t.withProgress(
											Ce,
											async (ke) =>
												await this.resumeEditSession(
													void 0,
													!0,
													void 0,
													void 0,
													ke,
												),
										),
										this.S.remove(ue.h, ne.StorageScope.APPLICATION),
										(this.G.continueOn = void 0);
								});
							};
							this.G.continueOn !== void 0 && !this.r.isSignedIn && Ie === !1
								? (this.S.store(
										ue.h,
										!0,
										ne.StorageScope.APPLICATION,
										ne.StorageTarget.MACHINE,
									),
									this.F.info("Prompting to enable cloud changes..."),
									await this.r.initialize("read"),
									this.r.isSignedIn
										? (this.F.info(
												"Prompting to enable cloud changes succeeded, resuming cloud changes...",
											),
											await this.t.withProgress(
												Ce,
												async (Se) =>
													await this.resumeEditSession(
														void 0,
														!0,
														void 0,
														void 0,
														Se,
													),
											))
										: Be())
								: !this.r.isSignedIn && Ie === !0 && Be();
						} else this.F.debug("Auto resuming cloud changes disabled.");
					}
					db() {
						if (this.r.isSignedIn) return this.j.clear();
						const Ee = new ee.$8qc(1, () => (0, d.localize)(5917, null));
						this.j.value = this.U.showAccountsActivity({ badge: Ee });
					}
					async eb() {
						const Ee = new K.$Ce();
						await this.t.withProgress(
							{
								location: p.ProgressLocation.Window,
								type: "syncing",
								title: (0, d.localize)(5918, null),
							},
							async () => this.storeEditSession(!1, Ee.token),
							() => {
								Ee.cancel(), Ee.dispose();
							},
						);
					}
					fb() {
						const Ee = w.$Io
							.as(B.Extensions.ViewContainersRegistry)
							.registerViewContainer(
								{
									id: m.$G1c,
									title: m.$I1c,
									ctorDescriptor: new z.$Ji(F.$ZSb, [
										m.$G1c,
										{ mergeViewWithContainerWhenSingleView: !0 },
									]),
									icon: m.$J1c,
									hideIfEmpty: !0,
								},
								B.ViewContainerLocation.Sidebar,
								{ doNotRegisterOpenCommand: !0 },
							);
						this.D(this.H.createInstance(H.$R1c, Ee));
					}
					gb() {
						this.jb(), this.kb(), this.lb(), this.tb(), this.ib(), this.hb();
					}
					hb() {
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super(ve);
									}
									run(Ie, ...Be) {
										Ie.get(Y.$o8).showChannel(m.$O1c);
									}
								},
							),
						);
					}
					ib() {
						const Ee = this;
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super({
											id: "workbench.editSessions.actions.showEditSessions",
											title: (0, d.localize2)(5963, "Show Cloud Changes"),
											category: m.$y1c,
											f1: !0,
										});
									}
									async run(Be) {
										Ee.b.set(!0), await Be.get(U.$HMb).openView(m.$H1c);
									}
								},
							),
						);
					}
					jb() {
						const Ee = this;
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super(fe);
									}
									async run(Be, Se, ke) {
										let Ue = Se;
										if (!ke && !Ue && ((ke = await Ee.ub()), !ke)) {
											Ee.w.publicLog2("continueOn.editSessions.pick.outcome", {
												outcome: "noSelection",
											});
											return;
										}
										const qe = await Ee.qb();
										let Ae;
										if (qe) {
											Ee.w.publicLog2("continueOn.editSessions.store");
											const Me = new K.$Ce();
											try {
												Ae = await Ee.t.withProgress(
													{
														location: p.ProgressLocation.Notification,
														cancellable: !0,
														type: "syncing",
														title: (0, d.localize)(5919, null),
													},
													async () => {
														const De = await Ee.storeEditSession(!1, Me.token);
														return (
															De !== void 0
																? Ee.w.publicLog2(
																		"continueOn.editSessions.store.outcome",
																		{
																			outcome: "storeSucceeded",
																			hashedId: (0, m.$N1c)(De),
																		},
																	)
																: Ee.w.publicLog2(
																		"continueOn.editSessions.store.outcome",
																		{ outcome: "storeSkipped" },
																	),
															De
														);
													},
													() => {
														Me.cancel(),
															Me.dispose(),
															Ee.w.publicLog2(
																"continueOn.editSessions.store.outcome",
																{ outcome: "storeCancelledByUser" },
															);
													},
												);
											} catch (De) {
												throw (
													(Ee.w.publicLog2(
														"continueOn.editSessions.store.outcome",
														{ outcome: "storeFailed" },
													),
													De)
												);
											}
										}
										if (((Ue = ke ? await Ee.vb(ke) : Ue), Ue !== void 0))
											if (Ae !== void 0 && Ue !== "noDestinationUri") {
												const Me = encodeURIComponent(Ae);
												(Ue = Ue.with({
													query:
														Ue.query.length > 0
															? Ue.query + `&${Le}=${Me}&continueOn=1`
															: `${Le}=${Me}&continueOn=1`,
												})),
													Ee.F.info(`Opening ${Ue.toString()}`),
													await Ee.u.open(Ue, { openExternal: !0 });
											} else
												!qe && Ue !== "noDestinationUri"
													? (Ee.F.info(`Opening ${Ue.toString()}`),
														await Ee.u.open(Ue, { openExternal: !0 }))
													: Ae === void 0 &&
														qe &&
														Ee.F.warn(
															`Failed to store working changes when invoking ${fe.id}.`,
														);
									}
								},
							),
						);
					}
					kb() {
						const Ee = this;
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super({
											id: "workbench.editSessions.actions.resumeLatest",
											title: (0, d.localize2)(
												5964,
												"Resume Latest Changes from Cloud",
											),
											category: m.$y1c,
											f1: !0,
										});
									}
									async run(Be, Se, ke) {
										await Ee.t.withProgress(
											{ ...Ce, title: be },
											async () => await Ee.resumeEditSession(Se, void 0, ke),
										);
									}
								},
							),
						),
							this.D(
								(0, C.$4X)(
									class extends C.$3X {
										constructor() {
											super({
												id: "workbench.editSessions.actions.resumeFromSerializedPayload",
												title: (0, d.localize2)(
													5965,
													"Resume Changes from Serialized Data",
												),
												category: "Developer",
												f1: !0,
											});
										}
										async run(Be, Se) {
											const ke = await Ee.N.input({
												prompt: "Enter serialized data",
											});
											ke &&
												Ee.r.lastReadResources.set("editSessions", {
													content: ke,
													ref: "",
												}),
												await Ee.t.withProgress(
													{ ...Ce, title: be },
													async () =>
														await Ee.resumeEditSession(
															Se,
															void 0,
															void 0,
															void 0,
															void 0,
															ke,
														),
												);
										}
									},
								),
							);
					}
					lb() {
						const Ee = this;
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super({
											id: "workbench.editSessions.actions.storeCurrent",
											title: (0, d.localize2)(
												5966,
												"Store Working Changes in Cloud",
											),
											category: m.$y1c,
											f1: !0,
										});
									}
									async run(Be) {
										const Se = new K.$Ce();
										await Ee.t.withProgress(
											{
												location: p.ProgressLocation.Notification,
												title: (0, d.localize)(5920, null),
											},
											async () => {
												Ee.w.publicLog2("editSessions.store"),
													await Ee.storeEditSession(!0, Se.token);
											},
											() => {
												Se.cancel(), Se.dispose();
											},
										);
									}
								},
							),
						);
					}
					async resumeEditSession(Ee, Ie, Be, Se, ke, Ue) {
						if (
							(await this.X.getEnvironment(),
							this.L.getWorkbenchState() === a.WorkbenchState.EMPTY ||
								(this.F.info(
									Ee !== void 0
										? `Resuming changes from cloud with ref ${Ee}...`
										: "Checking for pending cloud changes...",
								),
								Ie && !(await this.r.initialize("read", !0))))
						)
							return;
						this.w.publicLog2("editSessions.resume"),
							performance.mark("code/willResumeEditSessionFromIdentifier"),
							ke?.report({ message: (0, d.localize)(5921, null) });
						const qe = Ue
							? { content: Ue, ref: "" }
							: await this.r.read("editSessions", Ee);
						if (!qe) {
							Ee === void 0 && !Ie
								? this.z.info((0, d.localize)(5922, null))
								: Ee !== void 0 && this.z.warn((0, d.localize)(5923, null, Ee)),
								this.F.info(
									Ee !== void 0
										? `Aborting resuming changes from cloud as no edit session content is available to be applied from ref ${Ee}.`
										: "Aborting resuming edit session as no edit session content is available to be applied",
								);
							return;
						}
						ke?.report({ message: be });
						const Ae = JSON.parse(qe.content);
						if (((Ee = qe.ref), Ae.version > m.$B1c)) {
							this.z.error((0, d.localize)(5924, null, this.I.nameLong)),
								this.w.publicLog2("editSessions.resume.outcome", {
									hashedId: (0, m.$N1c)(Ee),
									outcome: "clientUpdateNeeded",
								});
							return;
						}
						try {
							const { changes: Me, conflictingChanges: De } = await this.mb(
								Ae,
								Ee,
								Be,
								Se,
							);
							if (Me.length === 0) return;
							if (De.length > 0) {
								const { confirmed: Re } = await this.C.confirm({
									type: l.Severity.Warning,
									message:
										De.length > 1
											? (0, d.localize)(5925, null, De.length)
											: (0, d.localize)(5926, null, (0, c.$kh)(De[0].uri)),
									detail:
										De.length > 1 ? (0, y.$JO)(De.map((je) => je.uri)) : void 0,
								});
								if (!Re) return;
							}
							for (const { uri: Re, type: je, contents: Ve } of Me)
								je === m.ChangeType.Addition
									? await this.s.writeFile(Re, (0, m.$M1c)(Ae.version, Ve))
									: je === m.ChangeType.Deletion &&
										(await this.s.exists(Re)) &&
										(await this.s.del(Re));
							await this.n?.apply(!1, {}),
								this.F.info(
									`Deleting edit session with ref ${Ee} after successfully applying it to current workspace...`,
								),
								await this.r.delete("editSessions", Ee),
								this.F.info(`Deleted edit session with ref ${Ee}.`),
								this.w.publicLog2("editSessions.resume.outcome", {
									hashedId: (0, m.$N1c)(Ee),
									outcome: "resumeSucceeded",
								});
						} catch (Me) {
							this.F.error(
								"Failed to resume edit session, reason: ",
								Me.toString(),
							),
								this.z.error((0, d.localize)(5927, null));
						}
						performance.mark("code/didResumeEditSessionFromIdentifier");
					}
					async mb(Ee, Ie, Be = !1, Se = !1) {
						const ke = [],
							Ue = [],
							qe = this.L.getWorkspace().folders,
							Ae = new K.$Ce();
						for (const Me of Ee.folders) {
							let De;
							if (Me.canonicalIdentity)
								for (const je of qe) {
									const Ve = await this.M.getEditSessionIdentifier(
										je,
										Ae.token,
									);
									if (
										(this.F.info(
											`Matching identity ${Ve} against edit session folder identity ${Me.canonicalIdentity}...`,
										),
										(0, J.$zo)(Ve, Me.canonicalIdentity) || Be)
									) {
										De = je;
										break;
									}
									if (Ve !== void 0) {
										const Ze = await this.M.provideEditSessionIdentityMatch(
											je,
											Ve,
											Me.canonicalIdentity,
											Ae.token,
										);
										if (Ze === W.EditSessionIdentityMatch.Complete) {
											De = je;
											break;
										} else if (
											Ze === W.EditSessionIdentityMatch.Partial &&
											this.J.getValue(
												"workbench.experimental.cloudChanges.partialMatches.enabled",
											) === !0
										)
											if (!Se)
												this.z.prompt(
													l.Severity.Info,
													(0, d.localize)(5928, null),
													[
														{
															label: (0, d.localize)(5929, null),
															run: () =>
																this.resumeEditSession(Ie, !1, void 0, !0),
														},
													],
												);
											else {
												De = je;
												break;
											}
									}
								}
							else De = qe.find((je) => je.name === Me.name);
							if (!De)
								return (
									this.F.info(
										`Skipping applying ${Me.workingChanges.length} changes from edit session with ref ${Ie} as no matching workspace folder was found.`,
									),
									{
										changes: [],
										conflictingChanges: [],
										contributedStateHandlers: [],
									}
								);
							const Re = new Set();
							for (const je of this.y.repositories)
								je.provider.rootUri !== void 0 &&
									this.L.getWorkspaceFolder(je.provider.rootUri)?.name ===
										Me.name &&
									this.ob(je).forEach((Ze) => Re.add(Ze.toString()));
							for (const je of Me.workingChanges) {
								const Ve = (0, c.$nh)(De.uri, je.relativeFilePath);
								ke.push({ uri: Ve, type: je.type, contents: je.contents }),
									(await this.nb(Re, Ve, je)) &&
										Ue.push({ uri: Ve, type: je.type, contents: je.contents });
							}
						}
						return { changes: ke, conflictingChanges: Ue };
					}
					async nb(Ee, Ie, Be) {
						if (!Ee.has(Ie.toString())) return !1;
						const { contents: Se, type: ke } = Be;
						switch (ke) {
							case m.ChangeType.Addition: {
								const [Ue, qe] = await Promise.all([
									(0, ie.$ojb)(Se),
									(0, ie.$ojb)((0, n.$cf)((await this.s.readFile(Ie)).value)),
								]);
								return Ue !== qe;
							}
							case m.ChangeType.Deletion:
								return await this.s.exists(Ie);
							default:
								throw new Error("Unhandled change type.");
						}
					}
					async storeEditSession(Ee, Ie) {
						const Be = [];
						let Se = 0,
							ke = !1;
						await this.W.saveAll();
						for (const qe of this.y.repositories) {
							const Ae = this.ob(qe),
								Me = [],
								{ rootUri: De } = qe.provider,
								Re = De ? this.L.getWorkspaceFolder(De) : void 0;
							let je = Re?.name;
							for (const Ze of Ae) {
								const et = this.L.getWorkspaceFolder(Ze);
								if (!et) {
									this.F.info(
										`Skipping working change ${Ze.toString()} as no associated workspace folder was found.`,
									);
									continue;
								}
								await this.M.onWillCreateEditSessionIdentity(et, Ie),
									(je = je ?? et.name);
								const rt = (0, c.$ph)(et.uri, Ze) ?? Ze.path;
								try {
									if (!(await this.s.stat(Ze)).isFile) continue;
								} catch {}
								if (((ke = !0), await this.s.exists(Ze))) {
									const ft = (0, n.$cf)((await this.s.readFile(Ze)).value);
									if (((Se += ft.length), Se > this.r.SIZE_LIMIT)) {
										this.z.error((0, d.localize)(5930, null));
										return;
									}
									Me.push({
										type: m.ChangeType.Addition,
										fileType: m.FileType.File,
										contents: ft,
										relativeFilePath: rt,
									});
								} else
									Me.push({
										type: m.ChangeType.Deletion,
										fileType: m.FileType.File,
										contents: void 0,
										relativeFilePath: rt,
									});
							}
							let Ve;
							Re != null &&
								(Ve = await this.M.getEditSessionIdentifier(Re, Ie)),
								Be.push({
									workingChanges: Me,
									name: je ?? "",
									canonicalIdentity: Ve ?? void 0,
									absoluteUri: Re?.uri.toString(),
								});
						}
						if ((await this.n?.sync(null, {}), !ke)) {
							this.F.info(
								"Skipped storing working changes in the cloud as there are no edits to store.",
							),
								Ee && this.z.info((0, d.localize)(5931, null));
							return;
						}
						const Ue = {
							folders: Be,
							version: 2,
							workspaceStateId:
								this.r.lastWrittenResources.get("workspaceState")?.ref,
						};
						try {
							this.F.info("Storing edit session...");
							const qe = await this.r.write("editSessions", Ue);
							return this.F.info(`Stored edit session with ref ${qe}.`), qe;
						} catch (qe) {
							if (
								(this.F.error(
									"Failed to store edit session, reason: ",
									qe.toString(),
								),
								qe instanceof b.$ZRb)
							)
								switch (qe.code) {
									case b.UserDataSyncErrorCode.TooLarge:
										this.w.publicLog2("editSessions.upload.failed", {
											reason: "TooLarge",
										}),
											this.z.error((0, d.localize)(5932, null));
										break;
									default:
										this.w.publicLog2("editSessions.upload.failed", {
											reason: "unknown",
										}),
											this.z.error((0, d.localize)(5933, null));
										break;
								}
						}
					}
					ob(Ee) {
						return Ee.provider.groups.reduce(
							(Ie, Be) => (
								Be.resources.forEach((Se) => Ie.add(Se.sourceUri)), Ie
							),
							new Set(),
						);
					}
					pb() {
						for (const Ee of this.y.repositories)
							if (this.ob(Ee).size > 0) return !0;
						return !1;
					}
					async qb() {
						if (this.r.isSignedIn) return this.pb();
						if (this.J.getValue(Fe) === "off")
							return (
								this.w.publicLog2("continueOn.editSessions.canStore.outcome", {
									outcome: "disabledEditSessionsViaSetting",
								}),
								!1
							);
						if (this.pb()) {
							const Ee = new t.$Zc(),
								Ie = Ee.add(this.N.createQuickPick());
							(Ie.placeholder = (0, d.localize)(5934, null)),
								(Ie.ok = !1),
								(Ie.ignoreFocusOut = !0);
							const Be = { label: (0, d.localize)(5935, null) },
								Se = { label: (0, d.localize)(5936, null) };
							Ie.items = [Be, Se];
							const ke = await new Promise((qe, Ae) => {
								Ee.add(
									Ie.onDidAccept(() => {
										qe(Ie.selectedItems[0] === Be), Ee.dispose();
									}),
								),
									Ee.add(
										Ie.onDidHide(() => {
											Ae(new Q.$9()), Ee.dispose();
										}),
									),
									Ie.show();
							});
							if (!ke)
								return (
									this.w.publicLog2(
										"continueOn.editSessions.canStore.outcome",
										{ outcome: "didNotEnableEditSessionsWhenPrompted" },
									),
									ke
								);
							const Ue = await this.r.initialize("write");
							return (
								Ue ||
									this.w.publicLog2(
										"continueOn.editSessions.canStore.outcome",
										{ outcome: "didNotEnableEditSessionsWhenPrompted" },
									),
								Ue
							);
						}
						return !1;
					}
					rb() {
						Ke.setHandler((Ee) => {
							const Ie = [];
							for (const Be of Ee)
								if (
									(0, R.$t2)(Be.description, "contribEditSessions") &&
									Array.isArray(Be.value)
								)
									for (const Se of Be.value) {
										const ke = C.$ZX.getCommand(Se.command);
										if (!ke) return;
										const Ue = ke.icon,
											qe =
												typeof ke.title == "string" ? ke.title : ke.title.value,
											Ae = L.$Kj.deserialize(Se.when);
										Ie.push(
											new He(
												X.ThemeIcon.isThemeIcon(Ue) ? `$(${Ue.id}) ${qe}` : qe,
												ke.id,
												ke.source?.title,
												Ae,
												Se.documentation,
											),
										),
											Se.qualifiedName &&
												this.sb(
													ke.id,
													Se.qualifiedName,
													Se.category ?? ke.category,
													Ae,
													Se.remoteGroup,
												);
									}
							this.a = Ie;
						});
					}
					sb(Ee, Ie, Be, Se, ke) {
						const Ue = {
							id: `${fe.id}.${Ee}`,
							title: { original: Ie, value: Ie },
							category:
								typeof Be == "string" ? { original: Be, value: Be } : Be,
							precondition: Se,
							f1: !0,
						};
						this.m.has(Ue.id) ||
							(this.m.add(Ue.id),
							this.D(
								(0, C.$4X)(
									class extends C.$3X {
										constructor() {
											super(Ue);
										}
										async run(Ae) {
											return Ae.get(D.$ek).executeCommand(fe.id, void 0, Ee);
										}
									},
								),
							),
							ke !== void 0 &&
								C.$ZX.appendMenuItem(C.$XX.StatusBarRemoteIndicatorMenu, {
									group: ke,
									command: Ue,
									when: Ue.precondition,
								}));
					}
					tb() {
						const Ee = this;
						this.D(
							(0, C.$4X)(
								class extends C.$3X {
									constructor() {
										super(me);
									}
									async run(Be) {
										const Se = await Ee.Q.showOpenDialog({
											title: (0, d.localize)(5937, null),
											canSelectFolders: !0,
											canSelectMany: !1,
											canSelectFiles: !1,
											availableFileSystems: [N.Schemas.file],
										});
										return Se?.length !== 1
											? void 0
											: h.URI.from({
													scheme: Ee.I.urlProtocol,
													authority: N.Schemas.file,
													path: Se[0].path,
												});
									}
								},
							),
						),
							(0, M.$E8)(this.L.getWorkspace()) !== void 0 &&
								V.$p &&
								this.sb(
									me.id,
									(0, d.localize)(5938, null),
									void 0,
									me.precondition,
									void 0,
								);
					}
					async ub() {
						const Ee = new t.$Zc(),
							Ie = Ee.add(this.N.createQuickPick({ useSeparators: !0 })),
							Be =
								this.L.getWorkbenchState() === a.WorkbenchState.FOLDER
									? this.L.getWorkspace().folders[0].name
									: this.L.getWorkspace()
											.folders.map((ke) => ke.name)
											.join(", ");
						(Ie.placeholder = (0, d.localize)(5939, null, `'${Be}'`)),
							(Ie.items = this.wb()),
							this.Y.onDidChangeExtensions(() => {
								Ie.items = this.wb();
							});
						const Se = await new Promise((ke, Ue) => {
							Ee.add(
								Ie.onDidHide(() => {
									Ee.dispose(), ke(void 0);
								}),
							),
								Ee.add(
									Ie.onDidAccept((qe) => {
										const Ae = Ie.activeItems[0].command;
										Ae === ge.id
											? this.O.executeCommand(ge.id)
											: (ke(Ae), Ie.hide());
									}),
								),
								Ie.show(),
								Ee.add(
									Ie.onDidTriggerItemButton(async (qe) => {
										if (qe.item.documentation !== void 0) {
											const Ae = h.URI.isUri(qe.item.documentation)
												? h.URI.parse(qe.item.documentation)
												: await this.O.executeCommand(qe.item.documentation);
											this.u.open(Ae, { openExternal: !0 });
										}
									}),
								);
						});
						return Ie.dispose(), Se;
					}
					async vb(Ee) {
						try {
							const Ie = await this.O.executeCommand(Ee);
							if (Ie === void 0)
								return (
									this.w.publicLog2("continueOn.openDestination.outcome", {
										selection: Ee,
										outcome: "noDestinationUri",
									}),
									"noDestinationUri"
								);
							if (h.URI.isUri(Ie))
								return (
									this.w.publicLog2("continueOn.openDestination.outcome", {
										selection: Ee,
										outcome: "resolvedUri",
									}),
									Ie
								);
							this.w.publicLog2("continueOn.openDestination.outcome", {
								selection: Ee,
								outcome: "invalidDestination",
							});
							return;
						} catch (Ie) {
							Ie instanceof Q.$9
								? this.w.publicLog2("continueOn.openDestination.outcome", {
										selection: Ee,
										outcome: "cancelled",
									})
								: this.w.publicLog2("continueOn.openDestination.outcome", {
										selection: Ee,
										outcome: "unknownError",
									});
							return;
						}
					}
					wb() {
						const Ee = [...this.a].filter(
							(Be) => Be.when === void 0 || this.P.contextMatchesRules(Be.when),
						);
						return (
							(0, M.$E8)(this.L.getWorkspace()) !== void 0 &&
								V.$p &&
								Ee.push(
									new He(
										"$(folder) " + (0, d.localize)(5940, null),
										me.id,
										(0, d.localize)(5941, null),
									),
								),
							Ee.sort((Be, Se) => Be.label.localeCompare(Se.label)).concat(
								{ type: "separator" },
								new He(ge.title, ge.id),
							)
						);
					}
				};
				(e.$W1c = Oe),
					(e.$W1c =
						Oe =
						ue =
							Ne(
								[
									j(0, m.$z1c),
									j(1, u.$ll),
									j(2, p.$8N),
									j(3, v.$7rb),
									j(4, s.$km),
									j(5, r.$c7),
									j(6, l.$4N),
									j(7, y.$GO),
									j(8, m.$A1c),
									j(9, S.$Ti),
									j(10, x.$Li),
									j(11, $.$Bk),
									j(12, g.$gj),
									j(13, a.$Vi),
									j(14, W.$O8),
									j(15, P.$DJ),
									j(16, D.$ek),
									j(17, L.$6j),
									j(18, y.$IO),
									j(19, E.$n6),
									j(20, ne.$lq),
									j(21, ee.$7qc),
									j(22, _.$IY),
									j(23, Z.$$m),
									j(24, R.$q2),
									j(25, ae.$Aq),
									j(26, oe.$Xl),
									j(27, $e.$Vl),
									j(28, ye.$T1c),
								],
								Oe,
							));
				const xe = X.ThemeIcon.asClassName(te.$ak.info);
				class He {
					constructor(Ee, Ie, Be, Se, ke) {
						(this.label = Ee),
							(this.command = Ie),
							(this.description = Be),
							(this.when = Se),
							(this.documentation = ke),
							ke !== void 0 &&
								(this.buttons = [
									{ iconClass: xe, tooltip: (0, d.localize)(5942, null) },
								]);
					}
				}
				const Ke = k.$n2.registerExtensionPoint({
					extensionPoint: "continueEditSession",
					jsonSchema: {
						description: (0, d.localize)(5943, null),
						type: "array",
						items: {
							type: "object",
							properties: {
								command: {
									description: (0, d.localize)(5944, null),
									type: "string",
								},
								group: {
									description: (0, d.localize)(5945, null),
									type: "string",
								},
								qualifiedName: {
									description: (0, d.localize)(5946, null),
									type: "string",
								},
								description: {
									description: (0, d.localize)(5947, null),
									type: "string",
								},
								remoteGroup: {
									description: (0, d.localize)(5948, null),
									type: "string",
								},
								when: {
									description: (0, d.localize)(5949, null),
									type: "string",
								},
							},
							required: ["command"],
						},
					},
				});
				w.$Io
					.as(i.Extensions.Workbench)
					.registerWorkbenchContribution(Oe, E.LifecyclePhase.Restored),
					w.$Io
						.as(T.$No.Configuration)
						.registerConfiguration({
							...I.$v6,
							properties: {
								"workbench.experimental.cloudChanges.autoStore": {
									enum: ["onShutdown", "off"],
									enumDescriptions: [
										(0, d.localize)(5950, null),
										(0, d.localize)(5951, null),
									],
									type: "string",
									tags: ["experimental", "usesOnlineServices"],
									default: "off",
									markdownDescription: (0, d.localize)(5952, null),
								},
								"workbench.cloudChanges.autoResume": {
									enum: ["onReload", "off"],
									enumDescriptions: [
										(0, d.localize)(5953, null),
										(0, d.localize)(5954, null),
									],
									type: "string",
									tags: ["usesOnlineServices"],
									default: "onReload",
									markdownDescription: (0, d.localize)(5955, null),
								},
								"workbench.cloudChanges.continueOn": {
									enum: ["prompt", "off"],
									enumDescriptions: [
										(0, d.localize)(5956, null),
										(0, d.localize)(5957, null),
									],
									type: "string",
									tags: ["usesOnlineServices"],
									default: "prompt",
									markdownDescription: (0, d.localize)(5958, null),
								},
								"workbench.experimental.cloudChanges.partialMatches.enabled": {
									type: "boolean",
									tags: ["experimental", "usesOnlineServices"],
									default: !1,
									markdownDescription: (0, d.localize)(5959, null),
								},
							},
						});
			},
		)
