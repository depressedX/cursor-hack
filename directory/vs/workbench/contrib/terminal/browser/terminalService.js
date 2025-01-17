import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/async.js';
import '../../../../base/common/decorators.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/uri.js';
import '../../../../nls.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/terminal/common/terminal.js';
import '../../../../platform/terminal/common/terminalStrings.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../platform/theme/common/theme.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/common/themables.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../common/contextkeys.js';
import '../../../services/views/common/viewsService.js';
import './terminal.js';
import './terminalEditorInput.js';
import './terminalIcon.js';
import './terminalProfileQuickpick.js';
import './terminalUri.js';
import '../common/terminal.js';
import '../common/terminalContextKey.js';
import '../../../services/editor/common/editorGroupColumn.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/environment/common/environmentService.js';
import '../../../services/extensions/common/extensions.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../services/remote/common/remoteAgentService.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import './xterm/xtermTerminal.js';
import './terminalInstance.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/terminal/common/capabilities/terminalCapabilityStore.js';
import '../../../services/timer/browser/timerService.js';
import '../../../../base/common/performance.js';
import './detachedTerminal.js';
import './terminalEvents.js';
import './terminalActionsRegistry.js';
import '../../../../base/browser/window.js';
import '../../../services/ai/browser/fastContextService.js';
define(
			de[4374],
			he([
				1, 0, 7, 15, 138, 6, 3, 23, 12, 9, 4, 31, 10, 8, 57, 5, 40, 117, 776,
				51, 79, 212, 35, 26, 25, 100, 89, 107, 833, 514, 3169, 690, 145, 237,
				446, 66, 18, 78, 53, 52, 143, 32, 45, 1299, 1074, 39, 675, 520, 240,
				1769, 3144, 1948, 75, 400,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$yVc = void 0),
					(t = mt(t)),
					(u = mt(u));
				let _ = class extends C.$1c {
					get isProcessSupportRegistered() {
						return !!this.n.get();
					}
					get connectionState() {
						return this.C;
					}
					get whenConnected() {
						return this.F.p;
					}
					get restoredGroupCount() {
						return this.G;
					}
					get instances() {
						return this.kb.instances.concat(this.jb.instances).concat(this.j);
					}
					get detachedInstances() {
						return this.b;
					}
					getReconnectedTerminals(Z) {
						return this.I.get(Z);
					}
					get defaultLocation() {
						return this.ib.config.defaultLocation ===
							o.TerminalLocationString.Editor
							? o.TerminalLocation.Editor
							: o.TerminalLocation.Panel;
					}
					get activeInstance() {
						for (const Z of this.a.values()) if (Z?.hasFocus) return Z;
						return this.J;
					}
					get onDidCreateInstance() {
						return this.M.event;
					}
					get onDidChangeInstanceDimensions() {
						return this.N.event;
					}
					get onDidRegisterProcessSupport() {
						return this.O.event;
					}
					get onDidChangeConnectionState() {
						return this.P.event;
					}
					get onDidRequestStartExtensionTerminal() {
						return this.Q.event;
					}
					get onDidDisposeInstance() {
						return this.R.event;
					}
					get onDidFocusInstance() {
						return this.S.event;
					}
					get onDidChangeActiveInstance() {
						return this.U.event;
					}
					get onDidChangeInstances() {
						return this.W.event;
					}
					get onDidChangeInstanceCapability() {
						return this.X.event;
					}
					get onDidChangeActiveGroup() {
						return this.Y.event;
					}
					get onAnyInstanceData() {
						return this.D(
							this.createOnInstanceEvent((Z) =>
								E.Event.map(Z.onData, (se) => ({ instance: Z, data: se })),
							),
						).event;
					}
					get onAnyInstanceDataInput() {
						return this.D(
							this.createOnInstanceEvent((Z) =>
								E.Event.map(Z.onDidInputData, () => Z, Z.store),
							),
						).event;
					}
					get onAnyInstanceIconChange() {
						return this.D(this.createOnInstanceEvent((Z) => Z.onIconChanged))
							.event;
					}
					get onAnyInstanceMaximumDimensionsChange() {
						return this.D(
							this.createOnInstanceEvent((Z) =>
								E.Event.map(Z.onMaximumDimensionsChanged, () => Z, Z.store),
							),
						).event;
					}
					get onAnyInstancePrimaryStatusChange() {
						return this.D(
							this.createOnInstanceEvent((Z) =>
								E.Event.map(
									Z.statusList.onDidChangePrimaryStatus,
									() => Z,
									Z.store,
								),
							),
						).event;
					}
					get onAnyInstanceProcessIdReady() {
						return this.D(this.createOnInstanceEvent((Z) => Z.onProcessIdReady))
							.event;
					}
					get onAnyInstanceSelectionChange() {
						return this.D(
							this.createOnInstanceEvent((Z) => Z.onDidChangeSelection),
						).event;
					}
					get onAnyInstanceTitleChange() {
						return this.D(this.createOnInstanceEvent((Z) => Z.onTitleChanged))
							.event;
					}
					constructor(
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
						Fe,
						Oe,
						xe,
						He,
						Ke,
						Je,
						Te,
						Ee,
					) {
						if (
							(super(),
							(this.Z = Z),
							(this.$ = se),
							(this.ab = re),
							(this.bb = le),
							(this.cb = oe),
							(this.db = ae),
							(this.eb = pe),
							(this.fb = $e),
							(this.gb = ye),
							(this.hb = ue),
							(this.ib = fe),
							(this.jb = me),
							(this.kb = ve),
							(this.lb = ge),
							(this.mb = be),
							(this.nb = Ce),
							(this.ob = Le),
							(this.pb = Fe),
							(this.qb = Oe),
							(this.rb = xe),
							(this.sb = He),
							(this.tb = Ke),
							(this.ub = Je),
							(this.vb = Te),
							(this.wb = Ee),
							(this.a = new Map()),
							(this.b = new Set()),
							(this.h = !1),
							(this.j = []),
							(this.m = new Map()),
							(this.C = T.TerminalConnectionState.Connecting),
							(this.F = new i.$0h()),
							(this.G = 0),
							(this.I = new Map()),
							(this.M = this.D(new E.$re())),
							(this.N = this.D(new E.$re())),
							(this.O = this.D(new E.$re())),
							(this.P = this.D(new E.$re())),
							(this.Q = this.D(new E.$re())),
							(this.R = this.D(new E.$re())),
							(this.S = this.D(new E.$re())),
							(this.U = this.D(new E.$re())),
							(this.W = this.D(new E.$re())),
							(this.X = this.D(new E.$re())),
							(this.Y = this.D(new E.$re())),
							this.D(
								this.onDidCreateInstance(() =>
									this.nb.refreshAvailableProfiles(),
								),
							),
							this.yb(this.kb),
							this.yb(this.jb),
							this.D(this.kb.onDidChangeActiveGroup(this.Y.fire, this.Y)),
							this.D(
								this.lb.onDidCreateInstance((Ie) => {
									this.Pb(Ie), this.M.fire(Ie);
								}),
							),
							this.D(
								this.kb.onDidChangeActiveInstance((Ie) => {
									!Ie && !this.h && this.kb.hidePanel(),
										Ie?.shellType
											? this.f.set(Ie.shellType.toString())
											: (!Ie || !Ie.shellType) && this.f.reset();
								}),
							),
							this.Gb(),
							(this.f = N.TerminalContextKeys.shellType.bindTo(this.Z)),
							(this.n = N.TerminalContextKeys.processSupported.bindTo(this.Z)),
							this.n.set(!m.$r || this.db.getConnection() !== null),
							(this.s = N.TerminalContextKeys.terminalHasBeenCreated.bindTo(
								this.Z,
							)),
							(this.u = N.TerminalContextKeys.count.bindTo(this.Z)),
							(this.c = N.TerminalContextKeys.terminalEditorActive.bindTo(
								this.Z,
							)),
							this.D(
								this.onDidChangeActiveInstance((Ie) => {
									this.c.set(
										!!Ie?.target && Ie.target === o.TerminalLocation.Editor,
									);
								}),
							),
							this.registerLastTerminalCommandTimingListenersForCmdk(),
							this.D(
								se.onBeforeShutdown(async (Ie) =>
									Ie.veto(this.Hb(Ie.reason), "veto.terminal"),
								),
							),
							this.D(se.onWillShutdown((Ie) => this.Lb(Ie))),
							this.xb(),
							(0, i.$Nh)(0).then(() =>
								this.D(this.cb.createInstance(te, ne.$Bfb.document.head)),
							),
							!ie.$vUc.hasRegisteredActions)
						)
							for (const Ie of ie.$vUc.registeredActions) Ie[1](this.tb, this);
						ie.$vUc.hasRegisteredActions = !0;
					}
					highlightTerminalContainer(Z = 500) {
						this.tb.setNonPersistentStorage({
							shouldHighlightTerminalContainer: !0,
						}),
							Z !== void 0 &&
								Z > 0 &&
								setTimeout(() => {
									this.tb.setNonPersistentStorage({
										shouldHighlightTerminalContainer: !1,
									});
								}, Z);
					}
					registerLastTerminalCommandTimingListenersForCmdk() {
						this.D(
							this.onAnyInstanceDataInput(() => {
								this.wb?.markNowAsLastTerminalCommand();
							}),
						);
					}
					async showProfileQuickPick(Z, se) {
						const le = await this.cb.createInstance(L.$jUc).showAndGetResult(Z);
						if (!le || typeof le == "string") return;
						const oe = le.keyMods;
						if (Z === "createInstance") {
							const ae = this.getDefaultInstanceHost().activeInstance;
							let pe;
							if (le.config && "id" in le?.config) {
								await this.createContributedTerminalProfile(
									le.config.extensionIdentifier,
									le.config.id,
									{
										icon: le.config.options?.icon,
										color: le.config.options?.color,
										location:
											oe?.alt && ae
												? { splitActiveTerminal: !0 }
												: this.defaultLocation,
									},
								);
								return;
							} else
								le.config &&
									"profileName" in le.config &&
									(oe?.alt && ae
										? (pe = await this.createTerminal({
												location: { parentTerminal: ae },
												config: le.config,
												cwd: se,
											}))
										: (pe = await this.createTerminal({
												location: this.defaultLocation,
												config: le.config,
												cwd: se,
											})));
							if (pe && this.defaultLocation !== o.TerminalLocation.Editor)
								return this.kb.showPanel(!0), this.setActiveInstance(pe), pe;
						}
					}
					async xb() {
						(0, W.mark)("code/terminal/willGetTerminalBackend"),
							(this.q = await this.lb.getBackend(this.hb.remoteAuthority)),
							(0, W.mark)("code/terminal/didGetTerminalBackend");
						const Z = this.ib.config.enablePersistentSessions;
						this.C = T.TerminalConnectionState.Connecting;
						const se = !!this.hb.remoteAuthority && Z;
						this.q &&
							this.D(
								this.q.onDidRequestDetach(async (le) => {
									const oe = this.getInstanceFromResource(
										(0, D.$UUc)(le.workspaceId, le.instanceId),
									);
									if (oe) {
										const ae = oe?.persistentProcessId;
										ae &&
										!oe.shellLaunchConfig.isFeatureTerminal &&
										!oe.shellLaunchConfig.customPtyImplementation
											? (oe.target === o.TerminalLocation.Editor
													? this.jb.detachInstance(oe)
													: this.kb.getGroupForInstance(oe)?.removeInstance(oe),
												await oe.detachProcessAndDispose(
													o.TerminalExitReason.User,
												),
												await this.q?.acceptDetachInstanceReply(
													le.requestId,
													ae,
												))
											: await this.q?.acceptDetachInstanceReply(
													le.requestId,
													void 0,
												);
									}
								}),
							),
							(0, W.mark)("code/terminal/willReconnect");
						let re;
						se
							? (re = this.Bb())
							: Z
								? (re = this.Cb())
								: (re = Promise.resolve()),
							re.then(async () => {
								this.Ab(),
									(0, W.mark)("code/terminal/didReconnect"),
									(0, W.mark)("code/terminal/willReplay");
								const le =
									(await this.H?.then((oe) =>
										oe.map((ae) => ae.terminalInstances).flat(),
									)) ?? [];
								await Promise.all(
									le.map(
										(oe) =>
											new Promise((ae) =>
												E.Event.once(oe.onProcessReplayComplete)(ae),
											),
									),
								),
									(0, W.mark)("code/terminal/didReplay"),
									(0, W.mark)("code/terminal/willGetPerformanceMarks"),
									await Promise.all(
										Array.from(this.lb.getRegisteredBackends()).map(
											async (oe) => {
												this.vb.setPerformanceMarks(
													oe.remoteAuthority === void 0
														? "localPtyHost"
														: "remotePtyHost",
													await oe.getPerformanceMarks(),
												),
													oe.setReady();
											},
										),
									),
									(0, W.mark)("code/terminal/didGetPerformanceMarks"),
									this.F.complete();
							});
					}
					getPrimaryBackend() {
						return this.q;
					}
					yb(Z) {
						this.D(Z.onDidChangeInstances(this.W.fire, this.W)),
							this.D(Z.onDidDisposeInstance(this.R.fire, this.R)),
							this.D(Z.onDidChangeActiveInstance((se) => this.zb(Z, se))),
							this.D(
								Z.onDidFocusInstance((se) => {
									this.S.fire(se), this.zb(Z, se);
								}),
							),
							this.D(
								Z.onDidChangeInstanceCapability((se) => {
									this.X.fire(se);
								}),
							),
							this.a.set(Z, void 0);
					}
					zb(Z, se) {
						if ((this.a.set(Z, se), se === void 0))
							for (const re of this.a.values()) re && (se = re);
						(this.J = se), this.U.fire(se);
					}
					setActiveInstance(Z) {
						Z.shellLaunchConfig.hideFromUser && this.ac(Z),
							Z.target === o.TerminalLocation.Editor
								? this.jb.setActiveInstance(Z)
								: this.kb.setActiveInstance(Z);
					}
					async focusInstance(Z) {
						return Z.target === o.TerminalLocation.Editor
							? this.jb.focusInstance(Z)
							: this.kb.focusInstance(Z);
					}
					async focusActiveInstance() {
						if (this.J) return this.focusInstance(this.J);
					}
					async createContributedTerminalProfile(Z, se, re) {
						await this.ob.activateByEvent(`onTerminalProfile:${se}`);
						const le = this.nb.getContributedProfileProvider(Z, se);
						if (!le) {
							this.pb.error(
								`No terminal profile provider registered for id "${se}"`,
							);
							return;
						}
						try {
							await le.createContributedTerminalProfile(re),
								this.kb.setActiveInstanceByIndex(this.kb.instances.length - 1),
								await this.kb.activeInstance?.focusWhenReady();
						} catch (oe) {
							this.pb.error(oe.message);
						}
					}
					async safeDisposeTerminal(Z) {
						if (
							!(
								Z.target !== o.TerminalLocation.Editor &&
								Z.hasChildProcesses &&
								(this.ib.config.confirmOnKill === "panel" ||
									this.ib.config.confirmOnKill === "always") &&
								(await this.Sb(!0))
							)
						)
							return new Promise((se) => {
								E.Event.once(Z.onExit)(() => se()),
									Z.dispose(o.TerminalExitReason.User);
							});
					}
					Ab() {
						(this.C = T.TerminalConnectionState.Connected),
							this.P.fire(),
							this.ab.trace("Pty host ready");
					}
					async Bb() {
						const Z = this.hb.remoteAuthority;
						if (!Z) return;
						const se = await this.lb.getBackend(Z);
						if (!se) return;
						(0, W.mark)("code/terminal/willGetTerminalLayoutInfo");
						const re = await se.getTerminalLayoutInfo();
						(0, W.mark)("code/terminal/didGetTerminalLayoutInfo"),
							se.reduceConnectionGraceTime(),
							(0, W.mark)("code/terminal/willRecreateTerminalGroups"),
							await this.Db(re),
							(0, W.mark)("code/terminal/didRecreateTerminalGroups"),
							this.Fb(),
							this.ab.trace("Reconnected to remote terminals");
					}
					async Cb() {
						const Z = await this.lb.getBackend();
						if (!Z) return;
						(0, W.mark)("code/terminal/willGetTerminalLayoutInfo");
						const se = await Z.getTerminalLayoutInfo();
						(0, W.mark)("code/terminal/didGetTerminalLayoutInfo"),
							se &&
								se.tabs.length > 0 &&
								((0, W.mark)("code/terminal/willRecreateTerminalGroups"),
								(this.H = this.Db(se)),
								(0, W.mark)("code/terminal/didRecreateTerminalGroups")),
							this.Fb(),
							this.ab.trace("Reconnected to local terminals");
					}
					Db(Z) {
						const se = [];
						let re;
						if (Z) {
							for (const le of Z.tabs) {
								const oe = le.terminals.filter(
									(ae) => ae.terminal && ae.terminal.isOrphan,
								);
								if (oe.length) {
									this.G += oe.length;
									const ae = this.Eb(le, oe);
									se.push(ae), le.isActive && (re = ae);
									const pe = this.instances.find(
										($e) =>
											$e.shellLaunchConfig.attachPersistentProcess?.id ===
											le.activePersistentProcessId,
									);
									pe && this.setActiveInstance(pe);
								}
							}
							Z.tabs.length && re?.then((le) => (this.kb.activeGroup = le));
						}
						return Promise.all(se).then((le) => le.filter((oe) => !!oe));
					}
					async Eb(Z, se) {
						let re;
						for (const oe of se) {
							const ae = oe.terminal;
							(this.$.startupKind !== z.StartupKind.ReloadedWindow &&
								ae.type === "Task") ||
								((0, W.mark)(
									`code/terminal/willRecreateTerminal/${ae.id}-${ae.pid}`,
								),
								(re = this.createTerminal({
									config: { attachPersistentProcess: ae },
									location: re
										? { parentTerminal: re }
										: o.TerminalLocation.Panel,
								})),
								re.then(() =>
									(0, W.mark)(
										`code/terminal/didRecreateTerminal/${ae.id}-${ae.pid}`,
									),
								));
						}
						return re?.then((oe) => {
							const ae = this.kb.getGroupForInstance(oe);
							return (
								ae?.resizePanes(Z.terminals.map((pe) => pe.relativeSize)), ae
							);
						});
					}
					Fb() {
						this.D(this.onDidChangeActiveGroup(() => this.Mb())),
							this.D(this.onDidChangeActiveInstance(() => this.Mb())),
							this.D(this.onDidChangeInstances(() => this.Mb())),
							this.D(this.onAnyInstanceProcessIdReady(() => this.Mb())),
							this.D(this.onAnyInstanceTitleChange((Z) => this.Nb(Z))),
							this.D(
								this.onAnyInstanceIconChange((Z) =>
									this.Ob(Z.instance, Z.userInitiated),
								),
							);
					}
					Gb() {
						const Z = N.TerminalContextKeys.isOpen.bindTo(this.Z),
							se = () => {
								Z.set(this.instances.length > 0),
									this.u.set(this.instances.length);
							};
						this.D(this.onDidChangeInstances(() => se()));
					}
					async getActiveOrCreateInstance(Z) {
						const se = this.activeInstance;
						if (!se) return this.createTerminal();
						if (!Z?.acceptsInput || se.xterm?.isStdinDisabled !== !0) return se;
						const re = await this.createTerminal();
						return (
							this.setActiveInstance(re), await this.revealActiveTerminal(), re
						);
					}
					getActiveInstance() {
						return this.activeInstance;
					}
					async revealTerminal(Z, se) {
						Z.target === o.TerminalLocation.Editor
							? await this.jb.revealActiveEditor(se)
							: await this.kb.showPanel();
					}
					async revealActiveTerminal(Z) {
						const se = this.activeInstance;
						se && (await this.revealTerminal(se, Z));
					}
					setEditable(Z, se) {
						se ? (this.z = { instance: Z, data: se }) : (this.z = void 0);
						const re = this.eb.getActiveViewWithId(M.$geb),
							le = this.isEditable(Z);
						re?.terminalTabbedView?.setEditable(le);
					}
					isEditable(Z) {
						return !!this.z && (this.z.instance === Z || !Z);
					}
					getEditableData(Z) {
						return this.z && this.z.instance === Z ? this.z.data : void 0;
					}
					requestStartExtensionTerminal(Z, se, re) {
						return new Promise((le) => {
							this.Q.fire({ proxy: Z, cols: se, rows: re, callback: le });
						});
					}
					Hb(Z) {
						return m.$r ? ((this.h = !0), !1) : this.Ib(Z);
					}
					async Ib(Z) {
						if (this.instances.length === 0) return !1;
						try {
							if (
								((this.y = await this.w?.getWindowCount()),
								this.Jb(Z) &&
									(await Promise.race([
										this.q?.persistTerminalState(),
										(0, i.$Nh)(2e3),
									])),
								!(
									this.ib.config.enablePersistentSessions &&
									Z === z.ShutdownReason.RELOAD
								) &&
									((this.ib.config.confirmOnExit === "always" &&
										this.instances.length > 0) ||
										(this.ib.config.confirmOnExit === "hasChildProcesses" &&
											this.instances.some((oe) => oe.hasChildProcesses))))
							)
								return this.Kb(Z);
						} catch (se) {
							this.ab.warn("Exception occurred during terminal shutdown", se);
						}
						return (this.h = !0), !1;
					}
					setNativeDelegate(Z) {
						this.w = Z;
					}
					Jb(Z) {
						if (!this.ib.config.enablePersistentSessions) return !1;
						switch (this.ib.config.persistentSessionReviveProcess) {
							case "onExit":
								return Z === z.ShutdownReason.CLOSE && this.y === 1 && !m.$m
									? !0
									: Z === z.ShutdownReason.LOAD || Z === z.ShutdownReason.QUIT;
							case "onExitAndWindowClose":
								return Z !== z.ShutdownReason.RELOAD;
							default:
								return !1;
						}
					}
					async Kb(Z) {
						const se = await this.Sb();
						return se || (this.h = !0), se;
					}
					Lb(Z) {
						const se =
							this.ib.config.enablePersistentSessions &&
							Z.reason === z.ShutdownReason.RELOAD;
						for (const re of [...this.kb.instances, ...this.j])
							se && re.shouldPersist
								? re.detachProcessAndDispose(o.TerminalExitReason.Shutdown)
								: re.dispose(o.TerminalExitReason.Shutdown);
						!se && !this.Jb(Z.reason) && this.q?.setTerminalLayoutInfo(void 0);
					}
					Mb() {
						if (this.h || !this.ib.config.enablePersistentSessions) return;
						const se = {
							tabs: this.kb.groups.map((re) =>
								re.getLayoutInfo(re === this.kb.activeGroup),
							),
						};
						this.q?.setTerminalLayoutInfo(se);
					}
					Nb(Z) {
						!this.ib.config.enablePersistentSessions ||
							!Z ||
							!Z.persistentProcessId ||
							!Z.title ||
							Z.isDisposed ||
							(Z.staticTitle
								? this.q?.updateTitle(
										Z.persistentProcessId,
										Z.staticTitle,
										o.TitleEventSource.Api,
									)
								: this.q?.updateTitle(
										Z.persistentProcessId,
										Z.title,
										Z.titleSource,
									));
					}
					Ob(Z, se) {
						!this.ib.config.enablePersistentSessions ||
							!Z ||
							!Z.persistentProcessId ||
							!Z.icon ||
							Z.isDisposed ||
							this.q?.updateIcon(Z.persistentProcessId, se, Z.icon, Z.color);
					}
					refreshActiveGroup() {
						this.Y.fire(this.kb.activeGroup);
					}
					getInstanceFromId(Z) {
						let se = -1;
						if (
							(this.j.forEach((re, le) => {
								re.instanceId === Z && (se = le);
							}),
							se !== -1)
						)
							return this.j[se];
						try {
							return this.instances[this.Rb(Z)];
						} catch {
							return;
						}
					}
					getInstanceFromIndex(Z) {
						return this.instances[Z];
					}
					getInstanceFromResource(Z) {
						return (0, D.$WUc)(this.instances, Z);
					}
					isAttachedToTerminal(Z) {
						return this.instances.some((se) => se.processId === Z.pid);
					}
					moveToEditor(Z, se) {
						if (Z.target === o.TerminalLocation.Editor) return;
						const re = this.kb.getGroupForInstance(Z);
						re &&
							(re.removeInstance(Z),
							this.jb.openEditor(Z, se ? { viewColumn: se } : void 0));
					}
					moveIntoNewEditor(Z) {
						this.moveToEditor(Z, O.$LY);
					}
					async moveToTerminalView(Z, se, re) {
						if ((r.URI.isUri(Z) && (Z = this.getInstanceFromResource(Z)), !Z))
							return;
						if (
							(this.jb.detachInstance(Z),
							Z.target !== o.TerminalLocation.Editor)
						) {
							await this.kb.showPanel(!0);
							return;
						}
						Z.target = o.TerminalLocation.Panel;
						let le;
						if (
							(se && (le = this.kb.getGroupForInstance(se)),
							le || (le = this.kb.createGroup()),
							le.addInstance(Z),
							this.setActiveInstance(Z),
							await this.kb.showPanel(!0),
							se && re)
						) {
							const oe =
								le.terminalInstances.indexOf(se) + (re === "after" ? 1 : 0);
							le.moveInstance(Z, oe, re);
						}
						this.W.fire(), this.Y.fire(this.kb.activeGroup);
					}
					Pb(Z) {
						const se = [
							Z.onDimensionsChanged(() => {
								this.N.fire(Z),
									this.ib.config.enablePersistentSessions &&
										this.isProcessSupportRegistered &&
										this.Mb();
							}),
							Z.onDidFocus(this.U.fire, this.U),
							Z.onRequestAddInstanceToGroup(async (re) => await this.Qb(Z, re)),
						];
						Z.onDisposed(() => (0, C.$Vc)(se));
					}
					async Qb(Z, se) {
						const re = (0, D.$TUc)(se.uri);
						if (re.instanceId === void 0) return;
						let le = this.getInstanceFromResource(se.uri);
						if (!le) {
							const oe = await this.q?.requestDetachInstance(
								re.workspaceId,
								re.instanceId,
							);
							if (oe) {
								(le = await this.createTerminal({
									config: { attachPersistentProcess: oe },
									resource: se.uri,
								})),
									this.kb.moveInstance(le, Z, se.side);
								return;
							}
						}
						if (((le = this.kb.getInstanceFromResource(se.uri)), le)) {
							this.kb.moveInstance(le, Z, se.side);
							return;
						}
						if (((le = this.jb.getInstanceFromResource(se.uri)), le)) {
							this.moveToTerminalView(le, Z, se.side);
							return;
						}
					}
					registerProcessSupport(Z) {
						Z && (this.n.set(Z), this.O.fire());
					}
					Rb(Z) {
						let se = -1;
						if (
							(this.instances.forEach((re, le) => {
								re.instanceId === Z && (se = le);
							}),
							se === -1)
						)
							throw new Error(
								`Terminal with ID ${Z} does not exist (has it already been disposed?)`,
							);
						return se;
					}
					async Sb(Z) {
						let se;
						this.instances.length === 1 || Z
							? (se = u.localize(10149, null))
							: (se = u.localize(10150, null, this.instances.length));
						const { confirmed: re } = await this.bb.confirm({
							type: "warning",
							message: se,
							primaryButton: u.localize(10151, null),
						});
						return !re;
					}
					getDefaultInstanceHost() {
						return this.defaultLocation === o.TerminalLocation.Editor
							? this.jb
							: this.kb;
					}
					async getInstanceHost(Z) {
						if (Z) {
							if (Z === o.TerminalLocation.Editor) return this.jb;
							if (typeof Z == "object") {
								if ("viewColumn" in Z) return this.jb;
								if ("parentTerminal" in Z)
									return (await Z.parentTerminal).target ===
										o.TerminalLocation.Editor
										? this.jb
										: this.kb;
							} else return this.kb;
						}
						return this;
					}
					async createTerminal(Z) {
						if (
							(this.sb.publicLogCapture("terminal:create"),
							this.nb.availableProfiles.length === 0)
						) {
							const $e = Z?.config && "customPtyImplementation" in Z.config,
								ye =
									this.db.getConnection() &&
									r.URI.isUri(Z?.cwd) &&
									Z?.cwd.scheme === d.Schemas.vscodeFileResource;
							!$e &&
								!ye &&
								(this.C === T.TerminalConnectionState.Connecting &&
									(0, W.mark)("code/terminal/willGetProfiles"),
								await this.nb.profilesReady,
								this.C === T.TerminalConnectionState.Connecting &&
									(0, W.mark)("code/terminal/didGetProfiles"));
						}
						const se = Z?.config || this.nb.getDefaultProfile(),
							re =
								se && "extensionIdentifier" in se
									? {}
									: this.lb.convertProfileToShellLaunchConfig(se || {}),
							le = Z?.skipContributedProfileCheck
								? void 0
								: await this.Tb(re, Z),
							oe =
								typeof Z?.location == "object" &&
								"splitActiveTerminal" in Z.location
									? Z.location.splitActiveTerminal
									: typeof Z?.location == "object"
										? "parentTerminal" in Z.location
										: !1;
						if ((await this.Ub(re, oe, Z), le)) {
							const $e = await this.resolveLocation(Z?.location);
							let ye;
							oe
								? (ye =
										$e === o.TerminalLocation.Editor
											? { viewColumn: O.$KY }
											: { splitActiveTerminal: !0 })
								: (ye =
										typeof Z?.location == "object" && "viewColumn" in Z.location
											? Z.location
											: $e),
								await this.createContributedTerminalProfile(
									le.extensionIdentifier,
									le.id,
									{ icon: le.icon, color: le.color, location: ye, cwd: re.cwd },
								);
							const ue = $e === o.TerminalLocation.Editor ? this.jb : this.kb,
								fe = ue.instances[ue.instances.length - 1];
							return await fe?.focusWhenReady(), this.s.set(!0), fe;
						}
						if (!re.customPtyImplementation && !this.isProcessSupportRegistered)
							throw new Error(
								"Could not create terminal when process support is not registered",
							);
						if (re.hideFromUser) {
							const $e = this.lb.createInstance(re, o.TerminalLocation.Panel);
							return (
								this.j.push($e),
								this.m.set($e.instanceId, [$e.onDisposed(this.R.fire, this.R)]),
								this.s.set(!0),
								$e
							);
						}
						this.$b(re);
						const ae =
								(await this.resolveLocation(Z?.location)) ||
								this.defaultLocation,
							pe = await this.Yb(Z?.location);
						return (
							this.s.set(!0), pe ? this.Vb(re, ae, pe) : this.Xb(re, ae, Z)
						);
					}
					async Tb(Z, se) {
						return se?.config && "extensionIdentifier" in se.config
							? se.config
							: this.nb.getContributedDefaultProfile(Z);
					}
					async createDetachedTerminal(Z) {
						const se = await V.$oVc.getXtermConstructor(this.ub, this.Z),
							re = this.cb.createInstance(
								q.$$Hb,
								se,
								Z.cols,
								Z.rows,
								Z.colorProvider,
								Z.capabilities || new K.$KHb(),
								"",
								!1,
							);
						Z.readonly && re.raw.attachCustomKeyEventHandler(() => !1);
						const le = new X.$rLc(re, Z, this.cb);
						this.b.add(le);
						const oe = re.onDidDispose(() => {
							this.b.delete(le), oe.dispose();
						});
						return le;
					}
					async Ub(Z, se, re) {
						if (!Z.cwd) {
							if (re?.cwd) Z.cwd = re.cwd;
							else if (se && re?.location) {
								let oe = this.activeInstance;
								if (
									(typeof re.location == "object" &&
										"parentTerminal" in re.location &&
										(oe = await re.location.parentTerminal),
									!oe)
								)
									throw new Error("Cannot split without an active instance");
								Z.cwd = await (0, ie.$wUc)(
									oe,
									this.qb.getWorkspace().folders,
									this.rb,
									this.gb,
								);
							}
						}
					}
					Vb(Z, se, re) {
						let le;
						if (
							(typeof Z.cwd != "object" &&
								typeof re.shellLaunchConfig.cwd == "object" &&
								(Z.cwd = r.URI.from({
									scheme: re.shellLaunchConfig.cwd.scheme,
									authority: re.shellLaunchConfig.cwd.authority,
									path: Z.cwd || re.shellLaunchConfig.cwd.path,
								})),
							se === o.TerminalLocation.Editor ||
								re.target === o.TerminalLocation.Editor)
						)
							le = this.jb.splitInstance(re, Z);
						else {
							const oe = this.kb.getGroupForInstance(re);
							if (!oe)
								throw new Error(
									`Cannot split a terminal without a group (instanceId: ${re.instanceId}, title: ${re.title})`,
								);
							(Z.parentTerminalId = re.instanceId), (le = oe.split(Z));
						}
						return this.Wb(le), le;
					}
					Wb(Z) {
						if (!Z.reconnectionProperties?.ownerId) return;
						const se = this.I.get(Z.reconnectionProperties.ownerId);
						se ? se.push(Z) : this.I.set(Z.reconnectionProperties.ownerId, [Z]);
					}
					Xb(Z, se, re) {
						let le;
						const oe = this.Zb(re?.location);
						return (
							se === o.TerminalLocation.Editor
								? ((le = this.lb.createInstance(Z, o.TerminalLocation.Editor)),
									this.jb.openEditor(le, oe))
								: (le = this.kb.createGroup(Z).terminalInstances[0]),
							this.Wb(le),
							le
						);
					}
					async resolveLocation(Z) {
						if (Z && typeof Z == "object")
							if ("parentTerminal" in Z) {
								const se = await Z.parentTerminal;
								return se.target ? se.target : o.TerminalLocation.Panel;
							} else {
								if ("viewColumn" in Z) return o.TerminalLocation.Editor;
								if ("splitActiveTerminal" in Z)
									return this.J?.target
										? this.J?.target
										: o.TerminalLocation.Panel;
							}
						return Z;
					}
					async Yb(Z) {
						if (Z && typeof Z == "object" && "parentTerminal" in Z)
							return Z.parentTerminal;
						if (Z && typeof Z == "object" && "splitActiveTerminal" in Z)
							return this.activeInstance;
					}
					Zb(Z) {
						if (Z && typeof Z == "object" && "viewColumn" in Z)
							return (
								(Z.viewColumn = (0, A.$a8)(this.mb, this.fb, Z.viewColumn)), Z
							);
					}
					$b(Z) {
						typeof Z.cwd != "string" &&
							Z.cwd?.scheme === d.Schemas.file &&
							(S.$DPb.getValue(this.Z)
								? ((Z.initialText = (0, f.$aIb)(
										u.localize(10152, null, "\x1B[3m", "\x1B[23m"),
										{ excludeLeadingNewLine: !0, loudFormatting: !0 },
									)),
									(Z.type = "Local"))
								: this.db.getConnection() &&
									((Z.initialText = (0, f.$aIb)(
										u.localize(10153, null, "\x1B[3m", "\x1B[23m"),
										{ excludeLeadingNewLine: !0, loudFormatting: !0 },
									)),
									(Z.type = "Local")));
					}
					ac(Z) {
						this.j.splice(this.j.indexOf(Z), 1);
						const se = this.m.get(Z.instanceId);
						se && (0, C.$Vc)(se),
							this.m.delete(Z.instanceId),
							(Z.shellLaunchConfig.hideFromUser = !1),
							this.kb.createGroup(Z),
							this.instances.length === 1 &&
								this.kb.setActiveInstanceByIndex(0),
							this.W.fire();
					}
					async setContainers(Z, se) {
						this.ib.setPanelContainer(Z), this.kb.setContainer(se);
					}
					getEditingTerminal() {
						return this.L;
					}
					setEditingTerminal(Z) {
						this.L = Z;
					}
					createOnInstanceEvent(Z) {
						return new E.$ye(
							this.instances,
							this.onDidCreateInstance,
							this.onDidDisposeInstance,
							Z,
						);
					}
					createOnInstanceCapabilityEvent(Z, se) {
						return (0, Y.$xVc)(
							this.instances,
							this.onDidCreateInstance,
							this.onDidDisposeInstance,
							Z,
							se,
						);
					}
				};
				(e.$yVc = _),
					Ne([w.$ei], _.prototype, "onAnyInstanceData", null),
					Ne([w.$ei], _.prototype, "onAnyInstanceDataInput", null),
					Ne([w.$ei], _.prototype, "onAnyInstanceIconChange", null),
					Ne(
						[w.$ei],
						_.prototype,
						"onAnyInstanceMaximumDimensionsChange",
						null,
					),
					Ne([w.$ei], _.prototype, "onAnyInstancePrimaryStatusChange", null),
					Ne([w.$ei], _.prototype, "onAnyInstanceProcessIdReady", null),
					Ne([w.$ei], _.prototype, "onAnyInstanceSelectionChange", null),
					Ne([w.$ei], _.prototype, "onAnyInstanceTitleChange", null),
					Ne([(0, w.$fi)(500)], _.prototype, "Mb", null),
					Ne([(0, w.$fi)(500)], _.prototype, "Nb", null),
					Ne([(0, w.$fi)(500)], _.prototype, "Ob", null),
					(e.$yVc = _ =
						Ne(
							[
								j(0, c.$6j),
								j(1, z.$n6),
								j(2, o.$YJ),
								j(3, n.$GO),
								j(4, g.$Li),
								j(5, F.$$m),
								j(6, I.$HMb),
								j(7, h.$gj),
								j(8, T.$jIb),
								j(9, B.$r8),
								j(10, T.$jIb),
								j(11, T.$kIb),
								j(12, T.$lIb),
								j(13, T.$mIb),
								j(14, R.$EY),
								j(15, M.$teb),
								j(16, U.$q2),
								j(17, p.$4N),
								j(18, v.$Vi),
								j(19, a.$ek),
								j(20, x.$km),
								j(21, H.$0zb),
								j(22, G.$uZ),
								j(23, J.$Xnc),
								j(24, ee.$26b),
							],
							_,
						));
				let te = class extends y.$pP {
					constructor(Z, se, re, le, oe) {
						super(re),
							(this.b = se),
							(this.c = re),
							(this.f = le),
							(this.j = oe),
							this.m(),
							(this.a = t.$Rgb(Z)),
							this.D((0, C.$Yc)(() => this.a.remove())),
							this.updateStyles();
					}
					m() {
						this.D(this.b.onAnyInstanceIconChange(() => this.updateStyles())),
							this.D(this.b.onDidCreateInstance(() => this.updateStyles())),
							this.D(
								this.j.onDidActiveEditorChange(() => {
									this.j.activeEditor instanceof P.$Unc && this.updateStyles();
								}),
							),
							this.D(
								this.j.onDidCloseEditor(() => {
									this.j.activeEditor instanceof P.$Unc && this.updateStyles();
								}),
							),
							this.D(
								this.f.onDidChangeAvailableProfiles(() => this.updateStyles()),
							);
					}
					updateStyles() {
						super.updateStyles();
						const Z = this.c.getColorTheme();
						let se = "";
						const re = this.c.getProductIconTheme();
						for (const oe of this.b.instances) {
							const ae = oe.icon;
							if (!ae) continue;
							let pe;
							ae instanceof r.URI
								? (pe = ae)
								: ae instanceof Object &&
									"light" in ae &&
									"dark" in ae &&
									(pe = Z.type === l.ColorScheme.LIGHT ? ae.light : ae.dark);
							const $e = (0, k.$Snc)(oe, Z.type);
							if (
								(pe instanceof r.URI &&
									$e &&
									$e.length > 1 &&
									(se += `.monaco-workbench .terminal-tab.${$e[0]}::before{content: ''; background-image: ${t.$vhb(pe)};}`),
								$.ThemeIcon.isThemeIcon(ae))
							) {
								const ue = (0, s.$_O)().getIcon(ae.id);
								if (ue) {
									const fe = re.getIcon(ue);
									fe &&
										(se += `.monaco-workbench .terminal-tab.codicon-${ae.id}::before{content: '${fe.fontCharacter}' !important; font-family: ${t.$whb(fe.font?.id ?? "codicon")} !important;}`);
								}
							}
						}
						const le = Z.getColor(b.$MP);
						le &&
							(se += `.monaco-workbench .show-file-icons .file-icon.terminal-tab::before { color: ${le}; }`),
							(se += (0, k.$Rnc)(Z, !0)),
							(this.a.textContent = se);
					}
				};
				te = Ne([j(1, T.$iIb), j(2, y.$iP), j(3, M.$teb), j(4, O.$IY)], te);
			},
		),
		