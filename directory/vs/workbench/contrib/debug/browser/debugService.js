import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/errorMessage.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/objects.js';
import '../../../../base/common/severity.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/uuid.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../nls.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/debug/common/extensionHostDebug.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/workspace/common/workspaceTrust.js';
import '../../../common/editor.js';
import '../../../common/views.js';
import './debugAdapterManager.js';
import './debugCommands.js';
import './debugConfigurationManager.js';
import './debugMemory.js';
import './debugSession.js';
import './debugTaskRunner.js';
import '../common/debug.js';
import '../common/debugCompoundRoot.js';
import '../common/debugModel.js';
import '../common/debugSource.js';
import '../common/debugStorage.js';
import '../common/debugTelemetry.js';
import '../common/debugUtils.js';
import '../common/debugViewModel.js';
import '../common/disassemblyViewInput.js';
import '../../files/common/files.js';
import '../../testing/common/testService.js';
import '../../../services/activity/common/activity.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/extensions/common/extensions.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../services/panecomposite/browser/panecomposite.js';
import '../../../services/views/common/viewsService.js';
define(
		de[3821],
		he([
			1, 0, 127, 50, 24, 15, 33, 163, 29, 6, 3, 82, 111, 9, 47, 56, 4, 31, 10,
			8, 767, 57, 22, 5, 40, 63, 68, 25, 174, 44, 60, 3422, 425, 3681, 3051,
			3685, 3820, 112, 3052, 300, 826, 3683, 3053, 396, 3055, 797, 220, 379,
			260, 18, 53, 96, 52, 142, 89,
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
			W,
			X,
			Y,
			ie,
			ne,
			ee,
			_,
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$3Qc = void 0),
				(e.$4Qc = Q),
				(t = mt(t)),
				(m = mt(m)),
				(h = xi(h)),
				(p = mt(p));
			let te = class {
				constructor(
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
					Fe,
					Oe,
					xe,
					He,
					Ke,
					Je,
				) {
					(this.J = re),
						(this.K = le),
						(this.L = oe),
						(this.M = ae),
						(this.N = pe),
						(this.O = $e),
						(this.P = ye),
						(this.Q = ue),
						(this.R = fe),
						(this.S = me),
						(this.T = ve),
						(this.U = ge),
						(this.V = be),
						(this.W = Ce),
						(this.X = Le),
						(this.Y = Fe),
						(this.Z = Oe),
						(this.$ = xe),
						(this.ab = He),
						(this.bb = Ke),
						(this.cb = Je),
						(this.g = new Set()),
						(this.q = new u.$Zc()),
						(this.C = !1),
						(this.F = new Map()),
						(this.I = !1),
						(this.B = new Set()),
						(this.a = new r.$re()),
						(this.b = new r.$re()),
						(this.d = new r.$re()),
						(this.f = new r.$re()),
						(this.p = this.T.createInstance(D.$TQc, {
							onDidNewSession: this.onDidNewSession,
						})),
						this.q.add(this.p),
						(this.o = this.T.createInstance(N.$UQc, this.p)),
						this.q.add(this.o),
						(this.h = this.q.add(this.T.createInstance(x.$B3))),
						(this.H = this.h.loadChosenEnvironments()),
						(this.i = this.T.createInstance(z.$Z3, this.h)),
						(this.k = this.T.createInstance(H.$1Qc, this.i)),
						(this.j = new V.$2Qc(fe)),
						(this.m = this.T.createInstance(O.$ZQc)),
						this.q.add(this.V.onDidFilesChange((Te) => this.vb(Te))),
						this.q.add(this.S.onWillShutdown(this.dispose, this)),
						this.q.add(
							this.X.onAttachSession((Te) => {
								const Ee = this.i.getSession(Te.sessionId, !0);
								Ee &&
									((Ee.configuration.request = "attach"),
									(Ee.configuration.port = Te.port),
									Ee.setSubId(Te.subId),
									this.lb(Ee));
							}),
						),
						this.q.add(
							this.X.onTerminateSession((Te) => {
								const Ee = this.i.getSession(Te.sessionId);
								Ee && Ee.subId === Te.subId && Ee.disconnect();
							}),
						),
						this.q.add(
							this.j.onDidFocusStackFrame(() => {
								this.hb();
							}),
						),
						this.q.add(
							this.j.onDidFocusSession((Te) => {
								this.hb(),
									Te && this.setExceptionBreakpointFallbackSession(Te.getId());
							}),
						),
						this.q.add(
							r.Event.any(
								this.p.onDidRegisterDebugger,
								this.o.onDidSelectConfiguration,
							)(() => {
								const Te =
									this.state !== B.State.Inactive ||
									(this.o.getAllConfigurations().length > 0 &&
										this.p.hasEnabledDebuggers())
										? "default"
										: "simple";
								this.w.set(Te), this.h.storeDebugUxState(Te);
							}),
						),
						this.q.add(
							this.i.onDidChangeCallStack(() => {
								const Te = this.i
									.getSessions()
									.filter((Ee) => !Ee.parentSession).length;
								if ((this.G?.dispose(), Te > 0)) {
									const Ee = this.M.getViewContainerByViewId(B.$T4);
									Ee &&
										(this.G = this.Y.showViewContainerActivity(Ee.id, {
											badge: new W.$8qc(Te, (Ie) =>
												Ie === 1
													? p.localize(5567, null)
													: p.localize(5568, null, Ie),
											),
										}));
								}
							}),
						),
						this.q.add(
							re.onDidActiveEditorChange(() => {
								this.R.bufferChangeEvents(() => {
									re.activeEditor === G.$G3.instance
										? this.A.set(!0)
										: this.A?.reset();
								});
							}),
						),
						this.q.add(
							this.S.onBeforeShutdown(() => {
								for (const Te of re.editors)
									Te.resource?.scheme === B.$55 && Te.dispose();
							}),
						),
						this.q.add(
							ge.onWillStop((Te) => {
								Te.veto(
									this.i.getSessions().length > 0,
									p.localize(5569, null),
								);
							}),
						),
						this.db(fe);
				}
				db(re) {
					queueMicrotask(() => {
						re.bufferChangeEvents(() => {
							(this.r = B.$Z4.bindTo(re)),
								(this.u = B.$24.bindTo(re)),
								(this.y = B.$64.bindTo(re)),
								(this.v = B.$74.bindTo(re)),
								(this.x = B.$34.bindTo(re)),
								(this.w = B.$54.bindTo(re)),
								this.w.set(this.h.loadDebugUxState()),
								(this.z = B.$x5.bindTo(re)),
								(this.A = B.$V5.bindTo(re));
						});
						const le = () =>
							this.z.set(
								!!(
									this.i.getBreakpoints().length ||
									this.i.getDataBreakpoints().length ||
									this.i.getFunctionBreakpoints().length
								),
							);
						le(), this.q.add(this.i.onDidChangeBreakpoints(() => le()));
					});
				}
				getModel() {
					return this.i;
				}
				getViewModel() {
					return this.j;
				}
				getConfigurationManager() {
					return this.o;
				}
				getAdapterManager() {
					return this.p;
				}
				sourceIsNotAvailable(re) {
					this.i.sourceIsNotAvailable(re);
				}
				dispose() {
					this.q.dispose();
				}
				get state() {
					const re = this.j.focusedSession;
					return re
						? re.state
						: this.C
							? B.State.Initializing
							: B.State.Inactive;
				}
				get initializingOptions() {
					return this.D;
				}
				eb(re) {
					this.C || ((this.C = !0), (this.D = re), this.hb());
				}
				fb() {
					this.C && ((this.C = !1), (this.D = void 0), this.hb());
				}
				gb(re) {
					if (re) {
						const le = this.F.get(re);
						le && (le.cancel(), this.F.delete(re));
					} else this.F.forEach((le) => le.cancel()), this.F.clear();
				}
				hb() {
					const re = this.state;
					this.E !== re &&
						(this.R.bufferChangeEvents(() => {
							this.u.set((0, B.$45)(re)), this.v.set(re !== B.State.Inactive);
							const le =
								(re !== B.State.Inactive && re !== B.State.Initializing) ||
								(this.p.hasEnabledDebuggers() &&
									this.o.selectedConfiguration.name)
									? "default"
									: "simple";
							this.w.set(le), this.h.storeDebugUxState(le);
						}),
						(this.E = re),
						this.a.fire(re));
				}
				get onDidChangeState() {
					return this.a.event;
				}
				get onDidNewSession() {
					return this.b.event;
				}
				get onWillNewSession() {
					return this.d.event;
				}
				get onDidEndSession() {
					return this.f.event;
				}
				ib() {
					this.I ||
						(this.q.add(this.V.registerProvider(B.$55, new A.$VQc(this))),
						(this.I = !0));
				}
				setIsRecording(re) {
					this.x.set(re);
				}
				getIsRecording() {
					return this.x.get() ?? !1;
				}
				async startDebugging(re, le, oe, ae = !oe?.parentSession) {
					const pe =
						oe && oe.noDebug ? p.localize(5570, null) : p.localize(5571, null);
					if (!(await this.ab.requestWorkspaceTrust({ message: pe })))
						return !1;
					this.ib(), this.eb(oe), this.y.set(!0);
					try {
						await this.U.activateByEvent("onDebug"),
							ae && (await (0, q.$w3)(this.W, this.J)),
							await this.U.whenInstalledExtensionsRegistered();
						let ye, ue;
						if (
							(le || (le = this.o.selectedConfiguration.name),
							typeof le == "string" && re
								? ((ye = re.getConfiguration(le)), (ue = re.getCompound(le)))
								: typeof le != "string" && (ye = le),
							ue)
						) {
							if (!ue.configurations) throw new Error(p.localize(5572, null));
							if (
								ue.preLaunchTask &&
								(await this.m.runTaskAndCheckErrors(
									re?.workspace || this.Q.getWorkspace(),
									ue.preLaunchTask,
								)) === O.TaskRunResult.Failure
							)
								return this.fb(), !1;
							ue.stopAll && (oe = { ...oe, compoundRoot: new U.$j3() });
							const ve = (
								await Promise.all(
									ue.configurations.map((ge) => {
										const be = typeof ge == "string" ? ge : ge.name;
										if (be === ue.name) return Promise.resolve(!1);
										let Ce;
										if (typeof ge == "string") {
											const Le = this.o
												.getLaunches()
												.filter((Fe) => !!Fe.getConfiguration(be));
											if (Le.length === 1) Ce = Le[0];
											else if (re && Le.length > 1 && Le.indexOf(re) >= 0)
												Ce = re;
											else
												throw new Error(
													Le.length === 0
														? p.localize(5573, null, be)
														: p.localize(5574, null, be),
												);
										} else if (ge.folder) {
											const Le = this.o
												.getLaunches()
												.filter(
													(Fe) =>
														Fe.workspace &&
														Fe.workspace.name === ge.folder &&
														!!Fe.getConfiguration(ge.name),
												);
											if (Le.length === 1) Ce = Le[0];
											else
												throw new Error(
													p.localize(5575, null, ge.folder, ge.name, ue.name),
												);
										}
										return this.jb(Ce, Ce.getConfiguration(be), oe);
									}),
								)
							).every((ge) => !!ge);
							return this.fb(), ve;
						}
						if (le && !ye) {
							const me = re
								? p.localize(5576, null, typeof le == "string" ? le : le.name)
								: p.localize(5577, null);
							throw new Error(me);
						}
						const fe = await this.jb(re, ye, oe);
						return this.fb(), fe;
					} catch (ye) {
						return this.N.error(ye), this.fb(), Promise.reject(ye);
					}
				}
				async jb(re, le, oe) {
					let ae;
					le ? (ae = le.type) : (le = Object.create(null)),
						((oe && oe.noDebug) ||
							(oe &&
								typeof oe.noDebug > "u" &&
								oe.parentSession &&
								oe.parentSession.configuration.noDebug)) &&
							(le.noDebug = !0);
					const pe = (0, a.$vo)(le);
					let $e, ye;
					ae ||
						((ye = this.J.activeEditor),
						ye && ye.resource && (ae = this.H[ye.resource.toString()]),
						ae ||
							(($e = await this.p.guessDebugger(!1)), $e && (ae = $e.type)));
					const ue = new C.$Ce(),
						fe = (0, n.$9g)();
					this.F.set(fe, ue);
					const me = await this.o.resolveConfigurationByProviders(
						re && re.workspace ? re.workspace.uri : void 0,
						ae,
						le,
						ue.token,
					);
					if (me && me.type)
						try {
							let ve = await this.nb(re, me);
							if (!ve || ue.token.isCancellationRequested) return !1;
							const ge = re?.workspace || this.Q.getWorkspace();
							if (
								(await this.m.runTaskAndCheckErrors(ge, ve.preLaunchTask)) ===
								O.TaskRunResult.Failure
							)
								return !1;
							const Ce =
								await this.o.resolveDebugConfigurationWithSubstitutedVariables(
									re && re.workspace ? re.workspace.uri : void 0,
									ve.type,
									ve,
									ue.token,
								);
							if (!Ce)
								return (
									re &&
										ae &&
										Ce === null &&
										!ue.token.isCancellationRequested &&
										(await re.openConfigFile(
											{ preserveFocus: !0, type: ae },
											ue.token,
										)),
									!1
								);
							ve = Ce;
							const Le = this.p.getDebugger(ve.type);
							if (!Le || (me.request !== "attach" && me.request !== "launch")) {
								let Oe;
								me.request !== "attach" && me.request !== "launch"
									? (Oe = me.request
											? p.localize(5578, null, "request", me.request)
											: p.localize(5579, null, "request"))
									: (Oe = ve.type
											? p.localize(5580, null, ve.type)
											: p.localize(5581, null));
								const xe = [];
								return (
									xe.push(
										new i.$rj(
											"installAdditionalDebuggers",
											p.localize(5582, null, ve.type),
											void 0,
											!0,
											async () =>
												this.Z.executeCommand(
													"debug.installAdditionalDebuggers",
													ve?.type,
												),
										),
									),
									await this.ob(Oe, xe),
									!1
								);
							}
							if (!Le.enabled)
								return await this.ob((0, B.$Y5)(Le.type), []), !1;
							const Fe = await this.kb(
								fe,
								re?.workspace,
								{ resolved: ve, unresolved: pe },
								oe,
							);
							return (
								Fe &&
									$e &&
									ye &&
									ye.resource &&
									((this.H[ye.resource.toString()] = $e.type),
									this.h.storeChosenEnvironments(this.H)),
								Fe
							);
						} catch (ve) {
							return (
								ve && ve.message
									? await this.ob(ve.message)
									: this.Q.getWorkbenchState() === T.WorkbenchState.EMPTY &&
										(await this.ob(p.localize(5583, null))),
								re &&
									!ue.token.isCancellationRequested &&
									(await re.openConfigFile({ preserveFocus: !0 }, ue.token)),
								!1
							);
						}
					return (
						re &&
							ae &&
							me === null &&
							!ue.token.isCancellationRequested &&
							(await re.openConfigFile(
								{ preserveFocus: !0, type: ae },
								ue.token,
							)),
						!1
					);
				}
				async kb(re, le, oe, ae) {
					const pe = this.T.createInstance(R.$XQc, re, oe, le, this.i, ae);
					if (
						ae?.startedByUser &&
						this.i
							.getSessions()
							.some((ye) => ye.getLabel() === pe.getLabel()) &&
						oe.resolved.suppressMultipleSessionWarning !== !0 &&
						!(
							await this.O.confirm({
								message: p.localize(5584, null, pe.getLabel()),
							})
						).confirmed
					)
						return !1;
					this.i.addSession(pe), this.d.fire(pe);
					const $e = this.W.getValue("debug").openDebug;
					!oe.resolved.noDebug &&
						($e === "openOnSessionStart" ||
							($e !== "neverOpen" && this.j.firstSessionStart)) &&
						!pe.suppressDebugView &&
						(await this.K.openPaneComposite(
							B.$Q4,
							L.ViewContainerLocation.Sidebar,
						));
					try {
						await this.lb(pe);
						const ye =
							pe.configuration.internalConsoleOptions ||
							this.W.getValue("debug").internalConsoleOptions;
						(ye === "openOnSessionStart" ||
							(this.j.firstSessionStart && ye === "openOnFirstSessionStart")) &&
							this.L.openView(B.$Y4, !1),
							(this.j.firstSessionStart = !1);
						const ue = this.W.getValue("debug").showSubSessionsInToolBar,
							fe = this.i.getSessions();
						return (
							(ue ? fe : fe.filter((ve) => !ve.parentSession)).length > 1 &&
								this.j.setMultiSessionView(!0),
							this.b.fire(pe),
							!0
						);
					} catch (ye) {
						if (
							m.$8(ye) ||
							(pe &&
								pe.getReplElements().length > 0 &&
								this.L.openView(B.$Y4, !1),
							pe.configuration &&
								pe.configuration.request === "attach" &&
								pe.configuration.__autoAttach)
						)
							return !1;
						const ue = ye instanceof Error ? ye.message : ye;
						return (
							ye.showUser !== !1 &&
								(await this.ob(ue, (0, d.$yj)(ye) ? ye.actions : [])),
							!1
						);
					}
				}
				async lb(re, le = !1) {
					this.mb(re);
					const oe = this.p.getDebugger(re.configuration.type);
					try {
						await re.initialize(oe), await re.launchOrAttach(re.configuration);
						const ae =
							!!re.root &&
							!!this.W.getValue("launch", { resource: re.root.uri });
						await this.k.logDebugSessionStart(oe, ae),
							(le ||
								!this.j.focusedSession ||
								(re.parentSession === this.j.focusedSession && re.compact)) &&
								(await this.focusStackFrame(void 0, void 0, re));
					} catch (ae) {
						return (
							this.j.focusedSession === re &&
								(await this.focusStackFrame(void 0)),
							Promise.reject(ae)
						);
					}
				}
				mb(re) {
					const le = new u.$Zc();
					this.q.add(le);
					const oe = le.add(
						new E.$Yh(() => {
							re.state === B.State.Running &&
								this.j.focusedSession === re &&
								this.j.setFocus(void 0, this.j.focusedThread, re, !1);
						}, 200),
					);
					le.add(
						re.onDidChangeState(() => {
							re.state === B.State.Running &&
								this.j.focusedSession === re &&
								oe.schedule(),
								re === this.j.focusedSession && this.hb();
						}),
					),
						le.add(
							this.onDidEndSession((ae) => {
								ae.session === re && this.q.delete(le);
							}),
						),
						le.add(
							re.onDidEndAdapter(async (ae) => {
								ae &&
									(ae.error &&
										this.N.error(
											p.localize(
												5585,
												null,
												ae.error.message || ae.error.toString(),
											),
										),
									this.k.logDebugSessionStop(re, ae));
								const pe = (0, q.$o3)(re);
								if (
									(pe &&
										pe.state === B.State.Running &&
										pe.configuration.noDebug &&
										this.X.close(pe.getId()),
									re.configuration.postDebugTask)
								) {
									const ye = re.root ?? this.Q.getWorkspace();
									try {
										await this.m.runTask(ye, re.configuration.postDebugTask);
									} catch (ue) {
										this.N.error(ue);
									}
								}
								if (
									(this.fb(),
									this.gb(re.getId()),
									this.W.getValue("debug").closeReadonlyTabsOnEnd)
								) {
									const ye = this.J.getEditors(
										k.EditorsOrder.SEQUENTIAL,
									).filter(
										({ editor: ue }) =>
											ue.resource?.scheme === B.$25 &&
											re.getId() ===
												F.$z3.getEncodedDebugData(ue.resource).sessionId,
									);
									this.J.closeEditors(ye);
								}
								this.f.fire({ session: re, restart: this.g.has(re) });
								const $e = this.j.focusedSession;
								if ($e && $e.getId() === re.getId()) {
									const {
										session: ye,
										thread: ue,
										stackFrame: fe,
									} = Q(this.i, void 0, void 0, void 0, $e);
									this.j.setFocus(fe, ue, ye, !1);
								}
								if (
									this.i.getSessions().length === 0 &&
									(this.j.setMultiSessionView(!1),
									this.P.isVisible(ie.Parts.SIDEBAR_PART) &&
										this.W.getValue("debug").openExplorerOnEnd &&
										this.K.openPaneComposite(
											K.$vUb,
											L.ViewContainerLocation.Sidebar,
										),
									this.i
										.getDataBreakpoints()
										.filter((ue) => !ue.canPersist)
										.forEach((ue) => this.i.removeDataBreakpoints(ue.getId())),
									this.W.getValue("debug").console.closeOnEnd)
								) {
									const ue = this.M.getViewContainerByViewId(B.$Y4);
									ue &&
										this.L.isViewContainerVisible(ue.id) &&
										this.L.closeViewContainer(ue.id);
								}
								this.i.removeExceptionBreakpointsForSession(re.getId());
							}),
						);
				}
				async restartSession(re, le) {
					re.saveBeforeRestart && (await (0, q.$w3)(this.W, this.J));
					const oe = !!le,
						ae = async () => {
							if (oe) return Promise.resolve(O.TaskRunResult.Success);
							const ge = re.root || this.Q.getWorkspace();
							await this.m.runTask(ge, re.configuration.preRestartTask),
								await this.m.runTask(ge, re.configuration.postDebugTask);
							const be = await this.m.runTaskAndCheckErrors(
								ge,
								re.configuration.preLaunchTask,
							);
							return be !== O.TaskRunResult.Success
								? be
								: this.m.runTaskAndCheckErrors(
										ge,
										re.configuration.postRestartTask,
									);
						},
						pe = (0, q.$o3)(re);
					if (pe) {
						(await ae()) === O.TaskRunResult.Success &&
							this.X.reload(pe.getId());
						return;
					}
					let $e = !1,
						ye;
					const ue = re.root ? this.o.getLaunch(re.root.uri) : void 0;
					ue &&
						((ye = ue.getConfiguration(re.configuration.name)),
						ye &&
							!(0, a.$zo)(ye, re.unresolvedConfiguration) &&
							((ye.noDebug = re.configuration.noDebug), ($e = !0)));
					let fe = re.configuration;
					if (ue && $e && ye) {
						const ge = new C.$Ce();
						this.F.set(re.getId(), ge);
						const be = await this.o.resolveConfigurationByProviders(
							ue.workspace ? ue.workspace.uri : void 0,
							ye.type,
							ye,
							ge.token,
						);
						be
							? ((fe = await this.nb(ue, be)),
								fe &&
									!ge.token.isCancellationRequested &&
									(fe =
										await this.o.resolveDebugConfigurationWithSubstitutedVariables(
											ue && ue.workspace ? ue.workspace.uri : void 0,
											fe.type,
											fe,
											ge.token,
										)))
							: (fe = be);
					}
					fe && re.setConfiguration({ resolved: fe, unresolved: ye }),
						(re.configuration.__restart = le);
					const me = async (ge) => {
						this.g.add(re);
						let be = !1;
						try {
							be = (await ge()) !== !1;
						} catch (Ce) {
							throw ((be = !1), Ce);
						} finally {
							this.g.delete(re),
								be || this.f.fire({ session: re, restart: !1 });
						}
					};
					if (re.correlatedTestRun) {
						re.correlatedTestRun.completedAt ||
							(this.cb.cancelTestRun(re.correlatedTestRun.id),
							await r.Event.toPromise(re.correlatedTestRun.onComplete)),
							this.cb.runResolvedTests(re.correlatedTestRun.request);
						return;
					}
					if (re.capabilities.supportsRestartRequest) {
						(await ae()) === O.TaskRunResult.Success &&
							(await me(async () => (await re.restart(), !0)));
						return;
					}
					const ve =
						!!this.j.focusedSession &&
						re.getId() === this.j.focusedSession.getId();
					return me(
						async () => (
							oe ? await re.disconnect(!0) : await re.terminate(!0),
							new Promise((ge, be) => {
								setTimeout(async () => {
									if ((await ae()) !== O.TaskRunResult.Success || !fe)
										return ge(!1);
									try {
										await this.lb(re, ve), this.b.fire(re), ge(!0);
									} catch (Le) {
										be(Le);
									}
								}, 300);
							})
						),
					);
				}
				async stopSession(re, le = !1, oe = !1) {
					if (re) return le ? re.disconnect(void 0, oe) : re.terminate();
					const ae = this.i.getSessions();
					return (
						ae.length === 0 &&
							(this.m.cancel(),
							await this.$.cancel(),
							this.fb(),
							this.gb(void 0)),
						Promise.all(
							ae.map((pe) => (le ? pe.disconnect(void 0, oe) : pe.terminate())),
						)
					);
				}
				async nb(re, le) {
					const oe = this.p.getDebugger(le.type);
					if (oe) {
						let ae;
						if (re && re.workspace) ae = re.workspace;
						else {
							const pe = this.Q.getWorkspace().folders;
							pe.length === 1 && (ae = pe[0]);
						}
						try {
							return await oe.substituteVariables(ae, le);
						} catch (pe) {
							this.ob(pe.message, void 0, !!re?.getConfiguration(le.name));
							return;
						}
					}
					return Promise.resolve(le);
				}
				async ob(re, le = [], oe = !0) {
					const ae = new i.$rj(M.$kHc, M.$PHc, void 0, !0, () =>
							this.Z.executeCommand(M.$kHc),
						),
						pe =
							le.filter(($e) => $e.id.endsWith(".command")).length > 0
								? le
								: [...le, ...(oe ? [ae] : [])];
					await this.O.prompt({
						type: h.default.Error,
						message: re,
						buttons: pe.map(($e) => ({ label: $e.label, run: () => $e.run() })),
						cancelButton: !0,
					});
				}
				async focusStackFrame(re, le, oe, ae) {
					const {
						stackFrame: pe,
						thread: $e,
						session: ye,
					} = Q(this.i, re, le, oe);
					if (pe) {
						const ue = await pe.openInEditor(
							this.J,
							ae?.preserveFocus ?? !0,
							ae?.sideBySide,
							ae?.pinned,
						);
						if (ue && ue.input !== G.$G3.instance) {
							const fe = ue.getControl();
							if (pe && (0, g.$0sb)(fe) && fe.hasModel()) {
								const me = fe.getModel(),
									ve = pe.range.startLineNumber;
								if (ve >= 1 && ve <= me.getLineCount()) {
									const ge = fe.getModel().getLineContent(ve);
									t.$oib(
										p.localize(
											5586,
											null,
											ge,
											$e && $e.stoppedDetails
												? `, reason ${$e.stoppedDetails.reason}`
												: "",
											pe.source ? pe.source.name : "",
											pe.range.startLineNumber,
										),
									);
								}
							}
						}
					}
					ye ? this.r.set(ye.configuration.type) : this.r.reset(),
						this.j.setFocus(pe, $e, ye, !!ae?.explicit);
				}
				addWatchExpression(re) {
					const le = this.i.addWatchExpression(re);
					re || this.j.setSelectedExpression(le, !1),
						this.h.storeWatchExpressions(this.i.getWatchExpressions());
				}
				renameWatchExpression(re, le) {
					this.i.renameWatchExpression(re, le),
						this.h.storeWatchExpressions(this.i.getWatchExpressions());
				}
				moveWatchExpression(re, le) {
					this.i.moveWatchExpression(re, le),
						this.h.storeWatchExpressions(this.i.getWatchExpressions());
				}
				removeWatchExpressions(re) {
					this.i.removeWatchExpressions(re),
						this.h.storeWatchExpressions(this.i.getWatchExpressions());
				}
				canSetBreakpointsIn(re) {
					return this.p.canSetBreakpointsIn(re);
				}
				async enableOrDisableBreakpoints(re, le) {
					le
						? (this.i.setEnablement(le, re),
							this.h.storeBreakpoints(this.i),
							le instanceof z.$T3
								? (await this.qb(re, le),
									await this.sendBreakpoints(le.originalUri))
								: le instanceof z.$U3
									? await this.rb()
									: le instanceof z.$V3
										? await this.sb()
										: le instanceof z.$X3
											? await this.tb()
											: await this.ub())
						: (this.i.enableOrDisableAllBreakpoints(re),
							this.h.storeBreakpoints(this.i),
							await this.sendAllBreakpoints()),
						this.h.storeBreakpoints(this.i);
				}
				async addBreakpoints(re, le, oe = !0) {
					const ae = this.i.addBreakpoints(re, le);
					return (
						oe &&
							ae.forEach((pe) =>
								t.$pib(p.localize(5587, null, pe.lineNumber, re.fsPath)),
							),
						this.h.storeBreakpoints(this.i),
						await this.sendBreakpoints(re),
						this.h.storeBreakpoints(this.i),
						ae
					);
				}
				async updateBreakpoints(re, le, oe) {
					this.i.updateBreakpoints(le),
						this.h.storeBreakpoints(this.i),
						oe
							? this.B.add(re)
							: (await this.sendBreakpoints(re),
								this.h.storeBreakpoints(this.i));
				}
				async removeBreakpoints(re) {
					const le = this.i.getBreakpoints(),
						oe = le.filter((pe) => !re || pe.getId() === re);
					oe.forEach((pe) =>
						t.$pib(p.localize(5588, null, pe.lineNumber, pe.uri.fsPath)),
					);
					const ae = new Set(oe.map((pe) => pe.originalUri.toString()));
					this.i.removeBreakpoints(oe),
						this.pb(le, oe).forEach((pe) => ae.add(pe.toString())),
						this.h.storeBreakpoints(this.i),
						await Promise.all(
							[...ae].map((pe) => this.sendBreakpoints(c.URI.parse(pe))),
						);
				}
				setBreakpointsActivated(re) {
					return this.i.setBreakpointsActivated(re), this.sendAllBreakpoints();
				}
				async addFunctionBreakpoint(re, le) {
					this.i.addFunctionBreakpoint(re ?? { name: "" }, le),
						re &&
							(this.h.storeBreakpoints(this.i),
							await this.rb(),
							this.h.storeBreakpoints(this.i));
				}
				async updateFunctionBreakpoint(re, le) {
					this.i.updateFunctionBreakpoint(re, le),
						this.h.storeBreakpoints(this.i),
						await this.rb();
				}
				async removeFunctionBreakpoints(re) {
					this.i.removeFunctionBreakpoints(re),
						this.h.storeBreakpoints(this.i),
						await this.rb();
				}
				async addDataBreakpoint(re) {
					this.i.addDataBreakpoint(re),
						this.h.storeBreakpoints(this.i),
						await this.sb(),
						this.h.storeBreakpoints(this.i);
				}
				async updateDataBreakpoint(re, le) {
					this.i.updateDataBreakpoint(re, le),
						this.h.storeBreakpoints(this.i),
						await this.sb();
				}
				async removeDataBreakpoints(re) {
					this.i.removeDataBreakpoints(re),
						this.h.storeBreakpoints(this.i),
						await this.sb();
				}
				async addInstructionBreakpoint(re) {
					this.i.addInstructionBreakpoint(re),
						this.h.storeBreakpoints(this.i),
						await this.tb(),
						this.h.storeBreakpoints(this.i);
				}
				async removeInstructionBreakpoints(re, le) {
					this.i.removeInstructionBreakpoints(re, le),
						this.h.storeBreakpoints(this.i),
						await this.tb();
				}
				setExceptionBreakpointFallbackSession(re) {
					this.i.setExceptionBreakpointFallbackSession(re),
						this.h.storeBreakpoints(this.i);
				}
				setExceptionBreakpointsForSession(re, le) {
					this.i.setExceptionBreakpointsForSession(re.getId(), le),
						this.h.storeBreakpoints(this.i);
				}
				async setExceptionBreakpointCondition(re, le) {
					this.i.setExceptionBreakpointCondition(re, le),
						this.h.storeBreakpoints(this.i),
						await this.ub();
				}
				async sendAllBreakpoints(re) {
					const le = (0, w.$Qb)(this.i.getBreakpoints(), (oe) =>
						oe.originalUri.toString(),
					).map((oe) => this.sendBreakpoints(oe.originalUri, !1, re));
					re?.capabilities.supportsConfigurationDoneRequest
						? await Promise.all([
								...le,
								this.rb(re),
								this.sb(re),
								this.tb(re),
								this.ub(re),
							])
						: (await Promise.all(le),
							await this.rb(re),
							await this.sb(re),
							await this.tb(re),
							await this.ub(re));
				}
				pb(re, le) {
					const oe = [];
					for (const ae of le)
						for (const pe of re)
							!le.includes(pe) &&
								pe.triggeredBy === ae.getId() &&
								(this.i.updateBreakpoints(
									new Map([[pe.getId(), { triggeredBy: void 0 }]]),
								),
								oe.push(pe.originalUri));
					return oe;
				}
				async qb(re, le) {
					if (re && le.triggeredBy) {
						const oe = this.i
							.getBreakpoints()
							.find((ae) => le.triggeredBy === ae.getId());
						oe &&
							!oe.enabled &&
							(await this.enableOrDisableBreakpoints(re, oe));
					}
					await Promise.all(
						this.i
							.getBreakpoints()
							.filter(
								(oe) => oe.triggeredBy === le.getId() && oe.enabled !== re,
							)
							.map((oe) => this.enableOrDisableBreakpoints(re, oe)),
					);
				}
				async sendBreakpoints(re, le = !1, oe) {
					const ae = this.i.getBreakpoints({
						originalUri: re,
						enabledOnly: !0,
					});
					await Z(this.i, oe, async (pe) => {
						if (!pe.configuration.noDebug) {
							const $e = ae.filter(
								(ye) => !ye.triggeredBy || ye.getSessionDidTrigger(pe.getId()),
							);
							await pe.sendBreakpoints(re, $e, le);
						}
					});
				}
				async rb(re) {
					const le = this.i
						.getFunctionBreakpoints()
						.filter((oe) => oe.enabled && this.i.areBreakpointsActivated());
					await Z(this.i, re, async (oe) => {
						oe.capabilities.supportsFunctionBreakpoints &&
							!oe.configuration.noDebug &&
							(await oe.sendFunctionBreakpoints(le));
					});
				}
				async sb(re) {
					const le = this.i
						.getDataBreakpoints()
						.filter((oe) => oe.enabled && this.i.areBreakpointsActivated());
					await Z(this.i, re, async (oe) => {
						oe.capabilities.supportsDataBreakpoints &&
							!oe.configuration.noDebug &&
							(await oe.sendDataBreakpoints(le));
					});
				}
				async tb(re) {
					const le = this.i
						.getInstructionBreakpoints()
						.filter((oe) => oe.enabled && this.i.areBreakpointsActivated());
					await Z(this.i, re, async (oe) => {
						oe.capabilities.supportsInstructionBreakpoints &&
							!oe.configuration.noDebug &&
							(await oe.sendInstructionBreakpoints(le));
					});
				}
				ub(re) {
					return Z(this.i, re, async (le) => {
						const oe = this.i
							.getExceptionBreakpointsForSession(le.getId())
							.filter((ae) => ae.enabled);
						(le.capabilities.supportsConfigurationDoneRequest &&
							(!le.capabilities.exceptionBreakpointFilters ||
								le.capabilities.exceptionBreakpointFilters.length === 0)) ||
							le.configuration.noDebug ||
							(await le.sendExceptionBreakpoints(oe));
					});
				}
				vb(re) {
					const le = this.i
						.getBreakpoints()
						.filter((ae) =>
							re.contains(ae.originalUri, y.FileChangeType.DELETED),
						);
					le.length && this.i.removeBreakpoints(le);
					const oe = [];
					for (const ae of this.B)
						re.contains(ae, y.FileChangeType.UPDATED) && oe.push(ae);
					for (const ae of oe) this.B.delete(ae), this.sendBreakpoints(ae, !0);
				}
				async runTo(re, le, oe) {
					let ae,
						pe = this.getViewModel().focusedThread;
					const $e = async () => {
							if (
								!!!this.getModel().getBreakpoints({
									column: oe,
									lineNumber: le,
									uri: re,
								}).length
							) {
								const fe = await this.wb(re, le, oe);
								fe.thread && (pe = fe.thread),
									fe.breakpoint && (ae = fe.breakpoint);
							}
							return { threadToContinue: pe, breakpointToRemove: ae };
						},
						ye = (ue) =>
							ue === B.State.Stopped || ue === B.State.Inactive
								? (ae && this.removeBreakpoints(ae.getId()), !0)
								: !1;
					if ((await $e(), this.state === B.State.Inactive)) {
						const {
								launch: ue,
								name: fe,
								getConfig: me,
							} = this.getConfigurationManager().selectedConfiguration,
							ve = await me(),
							ge = ve ? Object.assign((0, a.$vo)(ve), {}) : fe,
							be = this.onDidChangeState((Ce) => {
								ye(Ce) && be.dispose();
							});
						await this.startDebugging(ue, ge, void 0, !0);
					}
					if (this.state === B.State.Stopped) {
						const ue = this.getViewModel().focusedSession;
						if (!ue || !pe) return;
						const fe = pe.session.onDidChangeState(() => {
							ye(ue.state) && fe.dispose();
						});
						await pe.continue();
					}
				}
				async wb(re, le, oe) {
					const ae = this.getModel(),
						pe = this.getViewModel(),
						ye = (
							await this.addBreakpoints(
								re,
								[{ lineNumber: le, column: oe }],
								!1,
							)
						)?.[0];
					if (!ye) return { breakpoint: void 0, thread: pe.focusedThread };
					if (!ye.verified) {
						let ve;
						await (0, E.$Dh)(
							new Promise((ge) => {
								ve = ae.onDidChangeBreakpoints(() => {
									ye.verified && ge();
								});
							}),
							2e3,
						),
							ve.dispose();
					}
					let ue;
					(function (ve) {
						(ve[(ve.Focused = 0)] = "Focused"),
							(ve[(ve.Verified = 1)] = "Verified"),
							(ve[(ve.VerifiedAndPausedInFile = 2)] =
								"VerifiedAndPausedInFile"),
							(ve[(ve.VerifiedAndFocused = 3)] = "VerifiedAndFocused");
					})(ue || (ue = {}));
					let fe = pe.focusedThread,
						me = ue.Focused;
					for (const ve of ye.sessionsThatVerified) {
						const ge = ae.getSession(ve);
						if (!ge) continue;
						const be = ge.getAllThreads().filter((Ce) => Ce.stopped);
						if (
							(me < ue.VerifiedAndFocused &&
								pe.focusedThread &&
								be.includes(pe.focusedThread) &&
								((fe = pe.focusedThread), (me = ue.VerifiedAndFocused)),
							me < ue.VerifiedAndPausedInFile)
						) {
							const Ce = be.find((Le) => {
								const Fe = Le.getTopStackFrame();
								return Fe && this.bb.extUri.isEqual(Fe.source.uri, re);
							});
							Ce && ((fe = Ce), (me = ue.VerifiedAndPausedInFile));
						}
						me < ue.Verified &&
							((fe = be[0]), (me = ue.VerifiedAndPausedInFile));
					}
					return { thread: fe, breakpoint: ye };
				}
			};
			(e.$3Qc = te),
				(e.$3Qc = te =
					Ne(
						[
							j(0, X.$IY),
							j(1, ee.$6Sb),
							j(2, _.$HMb),
							j(3, L.$K1),
							j(4, v.$4N),
							j(5, l.$GO),
							j(6, ie.$mEb),
							j(7, T.$Vi),
							j(8, b.$6j),
							j(9, ne.$n6),
							j(10, $.$Li),
							j(11, Y.$q2),
							j(12, y.$ll),
							j(13, f.$gj),
							j(14, s.$dp),
							j(15, W.$7qc),
							j(16, o.$ek),
							j(17, S.$DJ),
							j(18, P.$qO),
							j(19, I.$Vl),
							j(20, J.$sqc),
						],
						te,
					));
			function Q(se, re, le, oe, ae) {
				if (!oe)
					if (re || le) oe = re ? re.thread.session : le.session;
					else {
						const pe = se.getSessions();
						oe =
							pe.find((ye) => ye.state === B.State.Stopped) ||
							pe.find((ye) => ye !== ae && ye !== ae?.parentSession) ||
							(pe.length ? pe[0] : void 0);
					}
				if (!le)
					if (re) le = re.thread;
					else {
						const pe = oe ? oe.getAllThreads() : void 0;
						le =
							(pe && pe.find((ye) => ye.stopped)) ||
							(pe && pe.length ? pe[0] : void 0);
					}
				return (
					!re && le && (re = le.getTopStackFrame()),
					{ session: oe, thread: le, stackFrame: re }
				);
			}
			async function Z(se, re, le) {
				re
					? await le(re)
					: await Promise.all(se.getSessions().map((oe) => le(oe)));
			}
		},
	),
		