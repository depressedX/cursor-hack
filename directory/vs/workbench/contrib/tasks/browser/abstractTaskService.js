import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/event.js';
import '../../../../base/common/glob.js';
import '../../../../base/common/json.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/map.js';
import '../../../../base/common/objects.js';
import '../../../../base/common/parsers.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/processes.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/severity.js';
import '../../../../base/common/types.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/uuid.js';
import '../../../../nls.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/markers/common/markers.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../common/problemMatcher.js';
import '../../../services/extensions/common/extensions.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../editor/common/services/model.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../markers/common/markers.js';
import '../../../services/configurationResolver/common/configurationResolver.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/output/common/output.js';
import '../../../services/textfile/common/textfiles.js';
import '../../terminal/browser/terminal.js';
import '../../terminal/common/terminal.js';
import '../common/tasks.js';
import '../common/taskService.js';
import '../common/taskSystem.js';
import '../common/taskTemplates.js';
import '../common/taskConfiguration.js';
import './terminalTaskSystem.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../common/taskDefinitionRegistry.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/jsonFormatter.js';
import '../../../../base/common/network.js';
import '../../../../base/common/themables.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../platform/editor/common/editor.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/terminal/common/terminal.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/workspace/common/workspaceTrust.js';
import '../../../common/contextkeys.js';
import '../../../common/editor.js';
import '../../../common/views.js';
import '../../../services/views/common/viewsService.js';
import './taskQuickPick.js';
import '../../../services/environment/common/environmentService.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../services/panecomposite/browser/panecomposite.js';
import '../../../services/path/common/pathService.js';
import '../../../services/preferences/common/preferences.js';
import '../../../services/remote/common/remoteAgentService.js';
define(
		de[1907],
		he([
			1, 0, 50, 6, 215, 187, 3, 59, 82, 1500, 12, 919, 19, 111, 28, 9, 47, 4,
			31, 10, 22, 90, 84, 21, 32, 570, 53, 57, 40, 41, 67, 25, 555, 358, 18,
			297, 85, 107, 145, 424, 419, 1757, 3140, 1816, 1817, 63, 8, 699, 15, 33,
			585, 23, 26, 42, 116, 5, 34, 117, 35, 174, 100, 44, 60, 89, 1815, 78, 52,
			142, 165, 131, 143,
		]),
		function (			ce /*require*/,
			e /*exports*/,
			t /*actions*/,
			i /*event*/,
			w /*glob*/,
			E /*json*/,
			C /*lifecycle*/,
			d /*map*/,
			m /*objects*/,
			r /*parsers*/,
			u /*platform*/,
			a /*processes*/,
			h /*resources*/,
			c /*severity*/,
			n /*types*/,
			g /*uri*/,
			p /*uuid*/,
			o /*nls*/,
			f /*commands*/,
			b /*configuration*/,
			s /*files*/,
			l /*markers*/,
			y /*progress*/,
			$ /*storage*/,
			v /*telemetry*/,
			S /*problemMatcher*/,
			I /*extensions*/,
			T /*dialogs*/,
			P /*notification*/,
			k /*opener*/,
			L /*model*/,
			D /*workspace*/,
			M /*markers*/,
			N /*configurationResolver*/,
			A /*editorService*/,
			R /*output*/,
			O /*textfiles*/,
			B /*terminal*/,
			U /*terminal*/,
			z /*tasks*/,
			F /*taskService*/,
			x /*taskSystem*/,
			H /*taskTemplates*/,
			q /*taskConfiguration*/,
			V /*terminalTaskSystem*/,
			G /*quickInput*/,
			K /*contextkey*/,
			J /*taskDefinitionRegistry*/,
			W /*async*/,
			X /*cancellation*/,
			Y /*jsonFormatter*/,
			ie /*network*/,
			ne /*themables*/,
			ee /*resolverService*/,
			_ /*editor*/,
			te /*instantiation*/,
			Q /*log*/,
			Z /*terminal*/,
			se /*themeService*/,
			re /*workspaceTrust*/,
			le /*contextkeys*/,
			oe /*editor*/,
			ae /*views*/,
			pe /*viewsService*/,
			$e /*taskQuickPick*/,
			ye /*environmentService*/,
			ue /*lifecycle*/,
			fe /*panecomposite*/,
			me /*pathService*/,
			ve /*preferences*/,
			ge /*remoteAgentService*/,
) {
			"use strict";
			var be;
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$jXc = e.ConfigureTaskAction = void 0),
				(w = mt(w)),
				(E = mt(E)),
				(m = mt(m)),
				(u = mt(u)),
				(h = mt(h)),
				(c = xi(c)),
				(n = mt(n)),
				(p = mt(p)),
				(o = mt(o)),
				(q = mt(q));
			const Ce = "task.quickOpen.history",
				Le = "task.problemMatchers.neverPrompt",
				Fe = "task.quickOpen.showAll";
			var Oe;
			(function (Je) {
				(Je.ID = "workbench.action.tasks.configureTaskRunner"),
					(Je.TEXT = o.localize2(9630, "Configure Task"));
			})(Oe || (e.ConfigureTaskAction = Oe = {}));
			class xe {
				constructor(Te) {
					(this.d = Te), (this.c = new r.$13());
				}
				info(Te) {
					(this.c.state = r.ValidationState.Info),
						this.d.append(
							Te +
								`
`,
						);
				}
				warn(Te) {
					(this.c.state = r.ValidationState.Warning),
						this.d.append(
							Te +
								`
`,
						);
				}
				error(Te) {
					(this.c.state = r.ValidationState.Error),
						this.d.append(
							Te +
								`
`,
						);
				}
				fatal(Te) {
					(this.c.state = r.ValidationState.Fatal),
						this.d.append(
							Te +
								`
`,
						);
				}
				get status() {
					return this.c;
				}
			}
			class He {
				constructor() {
					this.c = new Map();
				}
				forEach(Te) {
					this.c.forEach(Te);
				}
				static getKey(Te) {
					let Ee;
					if (n.$lg(Te)) Ee = Te;
					else {
						const Ie = (0, $e.$gXc)(Te) ? Te.uri : Te.configuration;
						Ee = Ie ? Ie.toString() : "";
					}
					return Ee;
				}
				get(Te) {
					const Ee = He.getKey(Te);
					let Ie = this.c.get(Ee);
					return Ie || ((Ie = []), this.c.set(Ee, Ie)), Ie;
				}
				add(Te, ...Ee) {
					const Ie = He.getKey(Te);
					let Be = this.c.get(Ie);
					Be || ((Be = []), this.c.set(Ie, Be)), Be.push(...Ee);
				}
				all() {
					const Te = [];
					return this.c.forEach((Ee) => Te.push(...Ee)), Te;
				}
			}
			let Ke = class extends C.$1c {
				static {
					be = this;
				}
				static {
					this.c = "workbench.tasks.recentlyUsedTasks";
				}
				static {
					this.g = "workbench.tasks.recentlyUsedTasks2";
				}
				static {
					this.h = "workbench.tasks.persistentTasks";
				}
				static {
					this.j = "workbench.tasks.ignoreTask010Shown";
				}
				static {
					this.OutputChannelId = "tasks";
				}
				static {
					this.OutputChannelLabel = o.localize(9528, null);
				}
				static {
					this.m = 0;
				}
				get isReconnected() {
					return this.n;
				}
				constructor(
					Te,
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
					Kt,
					di,
					Ye,
					ze,
					Xe,
					It,
				) {
					super(),
						(this.ab = Te),
						(this.bb = Ee),
						(this.cb = Ie),
						(this.db = Be),
						(this.eb = Se),
						(this.fb = ke),
						(this.gb = Ue),
						(this.hb = qe),
						(this.ib = Ae),
						(this.jb = Me),
						(this.kb = De),
						(this.lb = Re),
						(this.mb = je),
						(this.nb = Ve),
						(this.ob = Ze),
						(this.pb = et),
						(this.qb = rt),
						(this.rb = ft),
						(this.sb = bt),
						(this.tb = nt),
						(this.ub = lt),
						(this.vb = ct),
						(this.wb = gt),
						(this.xb = ht),
						(this.yb = Rt),
						(this.zb = Nt),
						(this.Ab = jt),
						(this.Bb = ti),
						(this.Cb = kt),
						(this.Db = hi),
						(this.Eb = Kt),
						(this.Fb = di),
						(this.Gb = Ye),
						(this.Hb = ze),
						(this.Ib = It),
						(this.n = !1),
						(this.J = []),
						(this.S = new i.$re()),
						(this.U = new i.$re()),
						(this.W = new i.$re()),
						(this.X = !1),
						(this.onDidChangeTaskSystemInfo = this.W.event),
						(this.Y = new i.$re()),
						(this.onDidReconnectToTasks = this.Y.event),
						(this.Z = new i.$re()),
						(this.onDidChangeTaskConfig = this.Z.event),
						(this.$ = this.D(new i.$re())),
						(this.onDidChangeTaskProviders = this.$.event),
						(this.H = i.Event.toPromise(this.onDidChangeTaskSystemInfo)),
						(this.G = void 0),
						(this.I = void 0),
						(this.J = void 0),
						(this.P = this.cb.getChannel(be.OutputChannelId)),
						(this.z = new Map()),
						(this.C = new Map()),
						(this.F = new Map()),
						this.D(
							this.ib.onDidChangeWorkspaceFolders(() => {
								const Lt = this.cd();
								return (
									this.Ob !== Lt[2] && (this.Vb(), (this.I = void 0)),
									this.Tb(Lt),
									this.Qc(z.TaskRunSource.FolderOpen)
								);
							}),
						),
						this.D(
							this.ab.onDidChangeConfiguration(async (Lt) => {
								!Lt.affectsConfiguration("tasks") ||
									(!this.I && !this.G) ||
									((!this.I || this.I instanceof V.$dXc) && this.P.clear(),
									Lt.affectsConfiguration(z.TaskSettingId.Reconnection) &&
										(this.ab.getValue(z.TaskSettingId.Reconnection) ||
											(this.N?.clear(),
											this.rb.remove(be.h, $.StorageScope.WORKSPACE))),
									this.fc(),
									await this.Qc(z.TaskRunSource.ConfigurationChange),
									this.Z.fire());
							}),
						),
						(this.O = z.$a4.bindTo(gt)),
						(this.Q = this.D(new i.$re())),
						this.Lb().then(() => F.$Vpc.bindTo(this.wb).set(!0)),
						F.$Xpc
							.bindTo(this.wb)
							.set(u.$r && !Xe.getConnection()?.remoteAuthority),
						this.ob.contributeVariable("defaultBuildTask", async () => {
							let Lt = await this.vc(z.TaskGroup.Build, !0);
							if (Lt.length > 0) {
								const Gt = this.ud(Lt);
								if (Gt.length === 1) return Gt[0]._label;
							}
							Lt = await this.vc(z.TaskGroup.Build);
							const xt = this.ud(Lt);
							if (xt.length === 1) return xt[0]._label;
							xt.length && (Lt = xt);
							let Vt;
							Lt &&
								Lt.length > 0 &&
								(Vt = await this.ld(Lt, o.localize(9529, null)));
							const Bt = Vt ? Vt.task : void 0;
							if (Bt) return Bt._label;
						}),
						this.D(
							this.Hb.onBeforeShutdown((Lt) => {
								this.X = Lt.reason !== ue.ShutdownReason.RELOAD;
							}),
						),
						this.D(
							this.onDidStateChange((Lt) => {
								if (
									(this.Wc(o.localize(9530, null, Lt.kind), !0),
									Lt.kind !== z.TaskEventKind.Changed)
								)
									if (
										(this.X ||
											(Lt.kind === z.TaskEventKind.Terminated &&
												Lt.exitReason === Z.TerminalExitReason.User)) &&
										Lt.taskId
									) {
										const xt = Lt.__task.getKey();
										xt && this.removePersistentTask(xt);
									} else
										Lt.kind === z.TaskEventKind.Start &&
											Lt.__task &&
											Lt.__task.getWorkspaceFolder() &&
											this.ic(Lt.__task);
							}),
						),
						(this.R = new Promise((Lt) => {
							i.Event.once(this.U.event)(() => Lt());
						})),
						this.pb.getReconnectedTerminals("Task")?.length
							? this.Jb()
							: this.pb.whenConnected.then(() => {
									this.pb.getReconnectedTerminals("Task")?.length
										? this.Jb()
										: ((this.n = !0), this.Y.fire());
								}),
						this.Nd();
				}
				registerSupportedExecutions(Te, Ee, Ie) {
					Te !== void 0 && F.$Tpc.bindTo(this.wb).set(Te);
					const Be = !!le.$DPb.getValue(this.wb);
					Ee !== void 0 && F.$Upc.bindTo(this.wb).set(Ee && !Be),
						Ie !== void 0 && F.$Wpc.bindTo(this.wb).set(Ie && !Be),
						(this.G = void 0),
						this.S.fire(),
						(u.$r || (Te && Ee && Ie)) && this.U.fire();
				}
				Jb() {
					if (
						(this.Hb.startupKind !== ue.StartupKind.ReloadedWindow &&
							(this.Wc(o.localize(9531, null), !0),
							(this.n = !0),
							this.rb.remove(be.h, $.StorageScope.WORKSPACE)),
						!this.ab.getValue(z.TaskSettingId.Reconnection) || this.n)
					) {
						this.Wc(
							o.localize(
								9532,
								null,
								this.ab.getValue(z.TaskSettingId.Reconnection),
								this.n,
							),
							!0,
						),
							(this.n = !0);
						return;
					}
					this.Wc(o.localize(9533, null), !0),
						this.getWorkspaceTasks(z.TaskRunSource.Reconnect).then(async () => {
							(this.n = await this.Kb()),
								this.Wc(o.localize(9534, null), !0),
								this.Y.fire();
						});
				}
				async Kb() {
					const Te = await this.getSavedTasks("persistent");
					if (!Te.length) return this.Wc(o.localize(9535, null), !0), !0;
					const Ee = Te.map((Ie) => Ie._label).join(", ");
					this.Wc(o.localize(9536, null, Ee), !0);
					for (const Ie of Te)
						if (z.$f4.is(Ie)) {
							const Be = await this.tryResolveTask(Ie);
							Be && this.run(Be, void 0, z.TaskRunSource.Reconnect);
						} else this.run(Ie, void 0, z.TaskRunSource.Reconnect);
					return !0;
				}
				get onDidStateChange() {
					return this.Q.event;
				}
				get supportsMultipleTaskExecutions() {
					return this.inTerminal();
				}
				async Lb() {
					f.$fk.registerCommand({
						id: "workbench.action.tasks.runTask",
						handler: async (Te, Ee) => {
							(await this.pd()) && (await this.qd(Ee));
						},
						metadata: {
							description: "Run Task",
							args: [
								{
									name: "args",
									isOptional: !0,
									description: o.localize(9537, null),
									schema: {
										anyOf: [
											{ type: "string", description: o.localize(9538, null) },
											{
												type: "object",
												properties: {
													type: {
														type: "string",
														description: o.localize(9539, null),
													},
													task: {
														type: "string",
														description: o.localize(9540, null),
													},
												},
											},
										],
									},
								},
							],
						},
					}),
						f.$fk.registerCommand(
							"workbench.action.tasks.reRunTask",
							async (Te, Ee) => {
								(await this.pd()) && this.td();
							},
						),
						f.$fk.registerCommand(
							"workbench.action.tasks.restartTask",
							async (Te, Ee) => {
								(await this.pd()) && this.Ad(Ee);
							},
						),
						f.$fk.registerCommand(
							"workbench.action.tasks.terminate",
							async (Te, Ee) => {
								(await this.pd()) && this.zd(Ee);
							},
						),
						f.$fk.registerCommand("workbench.action.tasks.showLog", () => {
							this.Ub(void 0, !0);
						}),
						f.$fk.registerCommand("workbench.action.tasks.build", async () => {
							(await this.pd()) && this.xd();
						}),
						f.$fk.registerCommand("workbench.action.tasks.test", async () => {
							(await this.pd()) && this.yd();
						}),
						f.$fk.registerCommand(
							"workbench.action.tasks.configureTaskRunner",
							async () => {
								(await this.pd()) && this.Id();
							},
						),
						f.$fk.registerCommand(
							"workbench.action.tasks.configureDefaultBuildTask",
							async () => {
								(await this.pd()) && this.Jd();
							},
						),
						f.$fk.registerCommand(
							"workbench.action.tasks.configureDefaultTestTask",
							async () => {
								(await this.pd()) && this.Kd();
							},
						),
						f.$fk.registerCommand(
							"workbench.action.tasks.showTasks",
							async () => {
								if (await this.pd()) return this.runShowTasks();
							},
						),
						f.$fk.registerCommand("workbench.action.tasks.toggleProblems", () =>
							this.fb.executeCommand(M.Markers.TOGGLE_MARKERS_VIEW_ACTION_ID),
						),
						f.$fk.registerCommand(
							"workbench.action.tasks.openUserTasks",
							async () => {
								const Te = this.Bc(z.TaskSourceKind.User);
								Te && this.Dd(Te, z.TaskSourceKind.User);
							},
						),
						f.$fk.registerCommand(
							"workbench.action.tasks.openWorkspaceFileTasks",
							async () => {
								const Te = this.Bc(z.TaskSourceKind.WorkspaceFile);
								Te && this.Dd(Te, z.TaskSourceKind.WorkspaceFile);
							},
						);
				}
				get Mb() {
					return this.s || this.Tb(), this.s;
				}
				get Nb() {
					return this.w || this.Tb(), this.w;
				}
				get Ob() {
					return this.r === void 0 && this.Tb(), this.r;
				}
				get Pb() {
					return this.q === void 0 && this.Tb(), this.q;
				}
				get Qb() {
					return (
						this.y === void 0 &&
							(this.y = !this.rb.getBoolean(
								be.j,
								$.StorageScope.WORKSPACE,
								!1,
							)),
						this.y
					);
				}
				Rb(Te) {
					const Ee = [];
					if ((Ee.push("onCommand:workbench.action.tasks.runTask"), Te))
						Ee.push(`onTaskType:${Te}`);
					else
						for (const Ie of J.$$3.all()) Ee.push(`onTaskType:${Ie.taskType}`);
					return Ee;
				}
				async Sb(Te) {
					await this.mb.whenInstalledExtensionsRegistered(),
						this.Wc("Activating task providers " + (Te ?? "all")),
						await (0, W.$Dh)(
							Promise.all(this.Rb(Te).map((Ee) => this.mb.activateByEvent(Ee))),
							5e3,
							() =>
								console.warn(
									"Timed out activating extensions for task providers",
								),
						);
				}
				Tb(Te) {
					if ((Te || (Te = this.cd()), (this.s = Te[0]), this.w))
						if (this.w.length !== Te[1].length) this.y = void 0;
						else {
							const Ee = new Set();
							this.w.forEach((Ie) => Ee.add(Ie.uri.toString()));
							for (const Ie of Te[1])
								if (!Ee.has(Ie.uri.toString())) {
									this.y = void 0;
									break;
								}
						}
					(this.w = Te[1]),
						(this.r = Te[2]),
						(this.q = Te[3]),
						(this.u = Te[4]);
				}
				Ub(Te = z.TaskRunSource.User, Ee) {
					!le.$DPb.getValue(this.wb) &&
						(Te === z.TaskRunSource.User ||
							Te === z.TaskRunSource.ConfigurationChange) &&
						(Ee
							? this.cb.showChannel(this.P.id, !0)
							: this.vb.prompt(c.default.Warning, o.localize(9541, null), [
									{
										label: o.localize(9542, null),
										run: () => {
											this.cb.showChannel(this.P.id, !0);
										},
									},
								]));
				}
				Vb() {
					this.J && ((0, C.$Vc)(this.J), (this.J = void 0));
				}
				registerTaskProvider(Te, Ee) {
					if (!Te) return { dispose: () => {} };
					const Ie = be.m++;
					return (
						this.z.set(Ie, Te),
						this.C.set(Ie, Ee),
						this.$.fire(),
						{
							dispose: () => {
								this.z.delete(Ie), this.C.delete(Ie), this.$.fire();
							},
						}
					);
				}
				get hasTaskSystemInfo() {
					const Te = Array.from(this.F.values()).flat().length;
					return this.xb.remoteAuthority ? Te > 1 : Te > 0;
				}
				registerTaskSystem(Te, Ee) {
					if (
						(Ee.platform === u.Platform.Web &&
							(Te = this.Mb.length ? this.Mb[0].uri.scheme : Te),
						!this.F.has(Te))
					)
						this.F.set(Te, [Ee]);
					else {
						const Ie = this.F.get(Te);
						Ee.platform === u.Platform.Web ? Ie.push(Ee) : Ie.unshift(Ee);
					}
					this.hasTaskSystemInfo && this.W.fire();
				}
				Wb(Te) {
					const Ee = this.F.get(Te);
					return Ee && Ee.length ? Ee[0] : void 0;
				}
				extensionCallbackTaskComplete(Te, Ee) {
					return this.I
						? this.I.customExecutionComplete(Te, Ee)
						: Promise.resolve();
				}
				async Xb(Te) {
					const Ee = [],
						Ie = await this.getWorkspaceTasks();
					for (const [, Be] of Ie) {
						if (Be.configurations)
							for (const Se in Be.configurations.byIdentifier) {
								const ke = Be.configurations.byIdentifier[Se];
								Te(ke, Be.workspaceFolder) && Ee.push(ke);
							}
						if (Be.set)
							for (const Se of Be.set.tasks)
								Te(Se, Be.workspaceFolder) && Ee.push(Se);
					}
					return Ee;
				}
				async Yb(Te, Ee) {
					return this.Xb((Ie) => {
						const Be = Ie.configurationProperties.group;
						return Be && typeof Be != "string"
							? Be._id === Te._id && (!Ee || !!Be.isDefault)
							: !1;
					});
				}
				async getTask(Te, Ee, Ie = !1, Be = void 0) {
					if (!(await this.pd())) return;
					const Se = n.$lg(Te)
						? Te
						: (0, $e.$gXc)(Te)
							? Te.name
							: Te.configuration
								? h.$kh(Te.configuration)
								: void 0;
					if (this.Nb.some((De) => De.name === Se))
						return Promise.reject(new Error(o.localize(9543, null, Se)));
					const ke = n.$lg(Ee)
						? Ee
						: z.TaskDefinition.createTaskIdentifier(Ee, console);
					if (ke === void 0) return Promise.resolve(void 0);
					const Ue = He.getKey(Te),
						qe = await this.Xb((De, Re) => {
							const je = He.getKey(Re);
							return je !== Ue && je !== z.$_3 ? !1 : De.matches(ke, Ie);
						});
					if (
						(qe.sort((De) =>
							De._source.kind === z.TaskSourceKind.Extension ? 1 : -1,
						),
						qe.length > 0)
					) {
						const De = qe[0];
						return z.$f4.is(De) ? this.tryResolveTask(De) : De;
					}
					const Ae = await this.Nc({ type: Be });
					let Me = Ae.get(Te);
					if (((Me = Me.concat(Ae.get(z.$_3))), !!Me))
						return (
							(Me = Me.filter((De) => De.matches(ke, Ie)).sort((De) =>
								De._source.kind === z.TaskSourceKind.Extension ? 1 : -1,
							)),
							Me.length > 0 ? Me[0] : void 0
						);
				}
				async tryResolveTask(Te) {
					if (!(await this.pd())) return;
					await this.Sb(Te.type);
					let Ee,
						Ie = !1;
					for (const [Se, ke] of this.z) {
						const Ue = this.C.get(Se);
						if (Te.type === Ue) {
							if (Ue && !this.Mc(Ue)) {
								Ie = !0;
								continue;
							}
							Ee = ke;
							break;
						}
					}
					if (!Ee) {
						Ie && this.Wc(o.localize(9544, null, Te.configures.type));
						return;
					}
					try {
						const Se = await Ee.resolveTask(Te);
						if (Se && Se._id === Te._id) return q.$6Wc(Se, Te);
					} catch {}
					const Be = await this.tasks({ type: Te.type });
					for (const Se of Be) if (Se._id === Te._id) return q.$6Wc(Se, Te);
				}
				async tasks(Te) {
					return (await this.pd())
						? this.Zb(Te)
							? this.Nc(Te).then((Ee) => this.ac(Te, Ee))
							: Promise.resolve([])
						: [];
				}
				async getKnownTasks(Te) {
					return this.Zb(Te)
						? this.Nc(Te, !0, !0).then((Ee) => this.ac(Te, Ee))
						: Promise.resolve([]);
				}
				taskTypes() {
					const Te = [];
					if (this.pc())
						for (const Ee of J.$$3.all())
							this.Mc(Ee.taskType) && Te.push(Ee.taskType);
					return Te;
				}
				createSorter() {
					return new z.$i4(
						this.ib.getWorkspace() ? this.ib.getWorkspace().folders : [],
					);
				}
				$b() {
					return this.I ? this.I.isActive() : Promise.resolve(!1);
				}
				async getActiveTasks() {
					return this.I ? this.I.getActiveTasks() : [];
				}
				async getBusyTasks() {
					return this.I ? this.I.getBusyTasks() : [];
				}
				getRecentlyUsedTasksV1() {
					if (this.L) return this.L;
					const Te = this.ab.getValue(Ce);
					this.L = new d.$Jc(Te);
					const Ee = this.rb.get(be.c, $.StorageScope.WORKSPACE);
					if (Ee)
						try {
							const Ie = JSON.parse(Ee);
							if (Array.isArray(Ie)) for (const Be of Ie) this.L.set(Be, Be);
						} catch {}
					return this.L;
				}
				ac(Te, Ee) {
					if (!Te || !Te.type) return Ee.all();
					const Ie = [];
					return (
						Ee.forEach((Be) => {
							for (const Se of Be)
								if (
									z.$g4.is(Se) &&
									(Se.defines.type === Te.type || Se._source.label === Te.type)
								)
									Ie.push(Se);
								else if (z.$e4.is(Se))
									if (Se.type === Te.type) Ie.push(Se);
									else {
										const ke = Se.customizes();
										ke && ke.type === Te.type && Ie.push(Se);
									}
						}),
						Ie
					);
				}
				bc(Te) {
					return Te === "persistent" ? this.dc() : this.cc();
				}
				cc() {
					if (this.M) return this.M;
					const Te = this.ab.getValue(Ce);
					this.M = new d.$Jc(Te);
					const Ee = this.rb.get(be.g, $.StorageScope.WORKSPACE);
					if (Ee)
						try {
							const Ie = JSON.parse(Ee);
							if (Array.isArray(Ie))
								for (const Be of Ie) this.M.set(Be[0], Be[1]);
						} catch {}
					return this.M;
				}
				dc() {
					if (this.N)
						return this.Wc(o.localize(9545, null, this.N.size), !0), this.N;
					this.N = new d.$Jc(10);
					const Te = this.rb.get(be.h, $.StorageScope.WORKSPACE);
					if (Te)
						try {
							const Ee = JSON.parse(Te);
							if (Array.isArray(Ee))
								for (const Ie of Ee) this.N.set(Ie[0], Ie[1]);
						} catch {}
					return this.N;
				}
				ec(Te) {
					const Ee = JSON.parse(Te);
					return {
						folder: Ee.folder,
						isWorkspaceFile: Ee.id?.endsWith(z.TaskSourceKind.WorkspaceFile),
					};
				}
				async getSavedTasks(Te) {
					const Ee = Object.create(null);
					this.Mb.forEach((Me) => {
						Ee[Me.uri.toString()] = Me;
					});
					const Ie = new Map(),
						Be = new Map(),
						Se = this.bc(Te),
						ke = [];
					this.Wc(o.localize(9546, null), !0);
					function Ue(Me, De, Re) {
						De && !Me.has(De) && Me.set(De, []),
							De && (Ee[De] || De === z.$_3) && Re && Me.get(De).push(Re);
					}
					for (const Me of Se.entries())
						try {
							const De = Me[0],
								Re = JSON.parse(Me[1]),
								je = this.ec(De);
							this.Wc(o.localize(9547, null, De, Re, je.folder), !0),
								Ue(je.isWorkspaceFile ? Be : Ie, je.folder, Re);
						} catch (De) {
							this.Wc(o.localize(9548, null, De), !0);
						}
					const qe = new Map();
					async function Ae(Me, De, Re) {
						for (const je of De.keys()) {
							const Ve = [],
								Ze = Object.create(null),
								et = Ee[je]
									? Re
										? q.TaskConfigSource.WorkspaceFile
										: q.TaskConfigSource.TasksJson
									: q.TaskConfigSource.User;
							await Me.$c(
								Ee[je] ?? (await Me.Rc()),
								{ version: "2.0.0", tasks: De.get(je) },
								z.TaskRunSource.System,
								Ve,
								Ze,
								et,
								!0,
							),
								Ve.forEach((rt) => {
									const ft = rt.getKey();
									ft && qe.set(ft, rt);
								});
							for (const rt in Ze) {
								const ft = Ze[rt].getKey();
								ft && qe.set(ft, Ze[rt]);
							}
						}
					}
					await Ae(this, Ie, !1), await Ae(this, Be, !0);
					for (const Me of Se.keys())
						qe.has(Me)
							? (ke.push(qe.get(Me)), this.Wc(o.localize(9549, null, Me), !0))
							: this.Wc(o.localize(9550, null, Me), !0);
					return ke;
				}
				removeRecentlyUsedTask(Te) {
					this.bc("historical").has(Te) &&
						(this.bc("historical").delete(Te), this.hc());
				}
				removePersistentTask(Te) {
					this.Wc(o.localize(9551, null, Te), !0),
						this.bc("persistent").has(Te) &&
							(this.bc("persistent").delete(Te), this.jc());
				}
				fc() {
					const Te = this.ab.getValue(Ce);
					this.M && (this.M.limit = Te);
				}
				async gc(Te) {
					let Ee = Te.getKey();
					if (!z.$h4.is(Te) && Ee) {
						const Ie = this.zc(Te);
						if (z.$g4.is(Te) && Ie) {
							const Be = [],
								Se = Object.create(null);
							await this.$c(
								Te._source.workspaceFolder ?? this.Mb[0],
								{ version: "2.0.0", tasks: [Ie] },
								z.TaskRunSource.System,
								Be,
								Se,
								q.TaskConfigSource.TasksJson,
								!0,
							);
							for (const ke in Se) Ee = Se[ke].getKey();
						}
						this.bc("historical").set(Ee, JSON.stringify(Ie)), this.hc();
					}
				}
				hc() {
					if (!this.M) return;
					const Te = this.ab.getValue(Ce);
					if (Te === 0) return;
					let Ee = [...this.M.keys()];
					Ee.length > Te && (Ee = Ee.slice(0, Te));
					const Ie = [];
					for (const Be of Ee) Ie.push([Be, this.M.get(Be, d.Touch.None)]);
					this.rb.store(
						be.g,
						JSON.stringify(Ie),
						$.StorageScope.WORKSPACE,
						$.StorageTarget.MACHINE,
					);
				}
				async ic(Te) {
					if (!this.ab.getValue(z.TaskSettingId.Reconnection)) return;
					let Ee = Te.getKey();
					if (!z.$h4.is(Te) && Ee) {
						const Ie = this.zc(Te);
						if (z.$g4.is(Te) && Ie) {
							const Be = [],
								Se = Object.create(null);
							await this.$c(
								Te._source.workspaceFolder ?? this.Mb[0],
								{ version: "2.0.0", tasks: [Ie] },
								z.TaskRunSource.System,
								Be,
								Se,
								q.TaskConfigSource.TasksJson,
								!0,
							);
							for (const ke in Se) Ee = Se[ke].getKey();
						}
						if (!Te.configurationProperties.isBackground) return;
						this.Wc(o.localize(9552, null, Ee), !0),
							this.bc("persistent").set(Ee, JSON.stringify(Ie)),
							this.jc();
					}
				}
				jc() {
					this.N = this.bc("persistent");
					const Te = [...this.N.keys()],
						Ee = [];
					for (const Ie of Te) Ee.push([Ie, this.N.get(Ie, d.Touch.None)]);
					this.Wc(o.localize(9553, null, Te.join(", ")), !0),
						this.rb.store(
							be.h,
							JSON.stringify(Ee),
							$.StorageScope.WORKSPACE,
							$.StorageTarget.MACHINE,
						);
				}
				kc() {
					this.tb.open(
						g.URI.parse(
							"https://code.visualstudio.com/docs/editor/tasks#_defining-a-problem-matcher",
						),
					);
				}
				async lc(Te) {
					const Ee = await this.Yb(Te, !0);
					if (
						Ee.length === 1 &&
						typeof Ee[0].configurationProperties.group != "string" &&
						Ee[0].configurationProperties.group?.isDefault
					) {
						let Ie;
						if (
							(z.$f4.is(Ee[0])
								? (Ie = await this.tryResolveTask(Ee[0]))
								: (Ie = Ee[0]),
							Ie)
						)
							return this.run(Ie, void 0, z.TaskRunSource.User);
					}
				}
				async mc() {
					const Te = await this.lc(z.TaskGroup.Build);
					return Te || this.oc();
				}
				async nc() {
					const Te = await this.lc(z.TaskGroup.Test);
					return Te || this.oc(!0);
				}
				async oc(Te) {
					const Ee = await this.Nc(),
						Ie = this.Dc(Ee, Te ? z.TaskGroup.Test : z.TaskGroup.Build);
					if (!Ie || !Ie.task)
						throw Te
							? this.Pb === z.JsonSchemaVersion.V0_1_0
								? new x.$Spc(
										c.default.Info,
										o.localize(9554, null),
										x.TaskErrors.NoTestTask,
									)
								: new x.$Spc(
										c.default.Info,
										o.localize(9555, null),
										x.TaskErrors.NoTestTask,
									)
							: this.Pb === z.JsonSchemaVersion.V0_1_0
								? new x.$Spc(
										c.default.Info,
										o.localize(9556, null),
										x.TaskErrors.NoBuildTask,
									)
								: new x.$Spc(
										c.default.Info,
										o.localize(9557, null),
										x.TaskErrors.NoBuildTask,
									);
					let Be;
					try {
						Be = await this.Gc(Ie.task, Ie.resolver, z.TaskRunSource.User);
					} catch (Se) {
						return this.gd(Se), Promise.reject(Se);
					}
					return Be;
				}
				async run(Te, Ee, Ie = z.TaskRunSource.System) {
					if (!(await this.pd())) return;
					if (!Te)
						throw new x.$Spc(
							c.default.Info,
							o.localize(9558, null),
							x.TaskErrors.TaskNotFound,
						);
					const Be = this.Ec();
					let Se;
					try {
						if (Ee && Ee.attachProblemMatcher && this.sc(Te) && !z.$h4.is(Te)) {
							const ke = await this.uc(Te);
							ke && (Se = await this.Gc(ke, Be, Ie));
						} else Se = await this.Gc(Te, Be, Ie);
						return Se;
					} catch (ke) {
						return this.gd(ke), Promise.reject(ke);
					}
				}
				pc() {
					return this.ab.getValue(z.TaskSettingId.AutoDetect) === "on";
				}
				qc(Te) {
					const Ee = this.ab.getValue(Le);
					return n.$rg(Ee) ? !Ee : Te === void 0 ? !0 : !Ee[Te];
				}
				rc(Te) {
					let Ee;
					return (
						z.$e4.is(Te)
							? (Ee = Te._source.config.element.type)
							: (Ee = Te.getDefinition().type),
						Ee
					);
				}
				sc(Te) {
					return this.qc(this.rc(Te)) === !1 ||
						!this.wc(Te) ||
						(Te.configurationProperties.group !== void 0 &&
							Te.configurationProperties.group !== z.TaskGroup.Build) ||
						(Te.configurationProperties.problemMatchers !== void 0 &&
							Te.configurationProperties.problemMatchers.length > 0)
						? !1
						: z.$g4.is(Te)
							? !Te.hasDefinedMatchers &&
								!!Te.configurationProperties.problemMatchers &&
								Te.configurationProperties.problemMatchers.length === 0
							: z.$e4.is(Te)
								? Te._source.config.element.problemMatcher === void 0 &&
									!Te.hasDefinedMatchers
								: !1;
				}
				async tc(Te) {
					const Ee = this.ab.getValue(Le);
					if (Ee === !0) return;
					let Ie;
					return (
						Ee !== !1 ? (Ie = Ee) : (Ie = Object.create(null)),
						(Ie[Te] = !0),
						this.ab.updateValue(Le, Ie)
					);
				}
				async uc(Te) {
					let Ee = [];
					for (const Se of S.$03.keys()) {
						const ke = S.$03.get(Se);
						ke.deprecated ||
							(ke.name === ke.label
								? Ee.push({ label: ke.name, matcher: ke })
								: Ee.push({
										label: ke.label,
										description: `$${ke.name}`,
										matcher: ke,
									}));
					}
					if (Ee.length === 0) return;
					(Ee = Ee.sort((Se, ke) =>
						Se.label && ke.label ? Se.label.localeCompare(ke.label) : 0,
					)),
						Ee.unshift({ type: "separator", label: o.localize(9559, null) });
					let Ie;
					z.$e4.is(Te)
						? (Ie = Te._source.config.element.type)
						: (Ie = Te.getDefinition().type),
						Ee.unshift(
							{ label: o.localize(9560, null), matcher: void 0 },
							{ label: o.localize(9561, null), matcher: void 0, never: !0 },
							{
								label: o.localize(9562, null, Ie),
								matcher: void 0,
								setting: Ie,
							},
							{ label: o.localize(9563, null), matcher: void 0, learnMore: !0 },
						);
					const Be = await this.nb.pick(Ee, {
						placeHolder: o.localize(9564, null),
					});
					if (!Be) return Te;
					if (Be.learnMore) {
						this.kc();
						return;
					}
					if (Be.never)
						return this.customize(Te, { problemMatcher: [] }, !0), Te;
					if (Be.matcher) {
						const Se = Te.clone(),
							ke = `$${Be.matcher.name}`,
							Ue = { problemMatcher: [ke] };
						Se.configurationProperties.problemMatchers = [ke];
						const qe = S.$03.get(Be.matcher.name);
						return (
							qe &&
								qe.watching !== void 0 &&
								((Ue.isBackground = !0),
								(Se.configurationProperties.isBackground = !0)),
							this.customize(Te, Ue, !0),
							Se
						);
					}
					return Be.setting && (await this.tc(Be.setting)), Te;
				}
				async vc(Te, Ee) {
					const Ie = await this.Nc(void 0, Ee),
						Be = [];
					return (
						Ie.forEach((Se) => {
							for (const ke of Se)
								z.TaskGroup.from(ke.configurationProperties.group)?._id ===
									Te._id && Be.push(ke);
						}),
						Be
					);
				}
				needsFolderQualification() {
					return this.ib.getWorkbenchState() === D.WorkbenchState.WORKSPACE;
				}
				wc(Te) {
					return this.Pb !== z.JsonSchemaVersion.V2_0_0
						? !1
						: z.$e4.is(Te)
							? !0
							: z.$g4.is(Te)
								? !!Te.getWorkspaceFolder()
								: !1;
				}
				async xc(Te, Ee) {
					let Ie,
						Be = "";
					try {
						Ie = await this.Ab.createModelReference(Te);
						const Se = Ie.object.textEditorModel,
							{ tabSize: ke, insertSpaces: Ue } = Se.getOptions(),
							qe = Se.getEOL();
						let Ae = (0, Y.$no)(Ee, { eol: qe, tabSize: ke, insertSpaces: Ue });
						const Me = new RegExp(qe + (Ue ? " ".repeat(ke) : "\\t"), "g");
						Ae = Ae.replace(Me, qe + (Ue ? " ".repeat(ke * 3) : "			"));
						const De = Ue ? " ".repeat(ke * 2) : "		";
						Be = De + Ae.slice(0, Ae.length - 1) + De + Ae.slice(Ae.length - 1);
					} finally {
						Ie?.dispose();
					}
					return Be;
				}
				async yc(Te, Ee, Ie = -1) {
					if (Te === void 0) return Promise.resolve(!1);
					const Se = (await this.hb.readFile(Te)).value;
					if (!Se || !Ee) return !1;
					const ke = Se.toString();
					let Ue;
					if (Ie !== -1) {
						const Re = this.ab.getValue("tasks", { resource: Te });
						Re.tasks &&
							Re.tasks.length > Ie &&
							(Ue = await this.xc(Te, Re.tasks[Ie]));
					}
					Ue ||
						(typeof Ee == "string" ? (Ue = Ee) : (Ue = await this.xc(Te, Ee)));
					const qe = ke.indexOf(Ue);
					let Ae = 1;
					for (let Re = 0; Re < qe; Re++)
						ke.charAt(Re) ===
							`
` && Ae++;
					let Me = Ae;
					for (let Re = 0; Re < Ue.length; Re++)
						Ue.charAt(Re) ===
							`
` && Me++;
					const De =
						Ae > 1
							? {
									startLineNumber: Ae,
									startColumn: Ae === Me ? 4 : 3,
									endLineNumber: Me,
									endColumn: Ae === Me ? void 0 : 4,
								}
							: void 0;
					return (
						await this.gb.openEditor({
							resource: Te,
							options: {
								pinned: !1,
								forceReload: !0,
								selection: De,
								selectionRevealType:
									_.TextEditorSelectionRevealType.CenterIfOutsideViewport,
							},
						}),
						!!De
					);
				}
				zc(Te) {
					let Ee;
					const Ie = z.$e4.is(Te) || z.$f4.is(Te) ? Te._source.config : void 0;
					if (Ie && Ie.element) Ee = { ...Ie.element };
					else if (z.$g4.is(Te)) {
						Ee = {};
						const Be = Object.assign(Object.create(null), Te.defines);
						delete Be._key,
							Object.keys(Be).forEach((Se) => (Ee[Se] = Be[Se])),
							Te.configurationProperties.problemMatchers &&
								Te.configurationProperties.problemMatchers.length > 0 &&
								n.$mg(Te.configurationProperties.problemMatchers) &&
								(Ee.problemMatcher =
									Te.configurationProperties.problemMatchers),
							Te.configurationProperties.group &&
								(Ee.group = q.GroupKind.to(Te.configurationProperties.group));
					}
					if (Ee)
						return (
							((Ee.problemMatcher === void 0 &&
								Te.configurationProperties.problemMatchers === void 0) ||
								(Te.configurationProperties.problemMatchers &&
									Te.configurationProperties.problemMatchers.length === 0)) &&
								(Ee.problemMatcher = []),
							Te._source.label !== "Workspace"
								? (Ee.label = Te.configurationProperties.identifier)
								: (Ee.label = Te._label),
							(Ee.detail = Te.configurationProperties.detail),
							Ee
						);
				}
				async customize(Te, Ee, Ie) {
					if (!(await this.pd())) return;
					const Be = Te.getWorkspaceFolder();
					if (!Be) return Promise.resolve(void 0);
					const Se = this.fd(Be, Te._source.kind);
					if (Se.hasParseErrors)
						return (
							this.vb.warn(o.localize(9565, null)), Promise.resolve(void 0)
						);
					const ke = Se.config,
						Ue = this.zc(Te);
					if (!Ue) return Promise.resolve(void 0);
					const qe = z.$e4.is(Te) ? Te._source.config.index : void 0;
					if (Ee)
						for (const Ae of Object.getOwnPropertyNames(Ee)) {
							const Me = Ee[Ae];
							Me != null && (Ue[Ae] = Me);
						}
					if (ke)
						qe === -1 && Ee
							? Ee.problemMatcher !== void 0
								? ((ke.problemMatcher = Ee.problemMatcher),
									await this.Ac(
										Be,
										"tasks.problemMatchers",
										ke.problemMatcher,
										Te._source.kind,
									))
								: Ee.group !== void 0 &&
									((ke.group = Ee.group),
									await this.Ac(Be, "tasks.group", ke.group, Te._source.kind))
							: (Array.isArray(ke.tasks) || (ke.tasks = []),
								qe === void 0 ? ke.tasks.push(Ue) : (ke.tasks[qe] = Ue),
								await this.Ac(Be, "tasks.tasks", ke.tasks, Te._source.kind));
					else {
						const Ae = { version: "2.0.0", tasks: [Ue] };
						let Me =
							["{", o.localize(9566, null)].join(`
`) + JSON.stringify(Ae, null, "	").substr(1);
						const De = this.ab.getValue();
						De.editor.insertSpaces &&
							(Me = Me.replace(
								/(\n)(\t+)/g,
								(Re, je, Ve) => je + " ".repeat(Ve.length * De.editor.tabSize),
							)),
							await this.kb.create([
								{ resource: Be.toResource(".vscode/tasks.json"), value: Me },
							]);
					}
					Ie && this.yc(this.Cc(Te), Ue);
				}
				Ac(Te, Ee, Ie, Be) {
					let Se;
					switch (Be) {
						case z.TaskSourceKind.User:
							Se = b.ConfigurationTarget.USER;
							break;
						case z.TaskSourceKind.WorkspaceFile:
							Se = b.ConfigurationTarget.WORKSPACE;
							break;
						default:
							this.ib.getWorkbenchState() === D.WorkbenchState.FOLDER
								? (Se = b.ConfigurationTarget.WORKSPACE)
								: this.ib.getWorkbenchState() === D.WorkbenchState.WORKSPACE &&
									(Se = b.ConfigurationTarget.WORKSPACE_FOLDER);
					}
					if (Se) return this.ab.updateValue(Ee, Ie, { resource: Te.uri }, Se);
				}
				Bc(Te) {
					switch ((this.Tb(), Te)) {
						case z.TaskSourceKind.User:
							return h.$nh(h.$mh(this.Bb.userSettingsResource), "tasks.json");
						case z.TaskSourceKind.WorkspaceFile:
							if (this.u && this.u.configuration) return this.u.configuration;
						default:
							return;
					}
				}
				Cc(Te) {
					if (z.$e4.is(Te)) {
						let Ee = this.Bc(Te._source.kind);
						if (!Ee) {
							const Ie = Te.getWorkspaceFolder();
							Ie
								? (Ee = Ie.toResource(Te._source.config.file))
								: (Ee = this.Mb[0].uri);
						}
						return Ee;
					} else
						return Te.getWorkspaceFolder().toResource(".vscode/tasks.json");
				}
				async openConfig(Te) {
					let Ee;
					return (
						Te
							? (Ee = this.Cc(Te))
							: (Ee =
									this.s && this.s.length > 0
										? this.s[0].toResource(".vscode/tasks.json")
										: void 0),
						this.yc(
							Ee,
							Te ? Te._label : void 0,
							Te ? Te._source.config.index : -1,
						)
					);
				}
				Dc(Te, Ee) {
					const Ie = new Map(),
						Be = [],
						Se = [];
					Te.forEach((Ue, qe) => {
						let Ae = Ie.get(qe);
						Ae ||
							((Ae = {
								id: new Map(),
								label: new Map(),
								identifier: new Map(),
							}),
							Ie.set(qe, Ae));
						for (const Me of Ue)
							Ae.id.set(Me._id, Me),
								Ae.label.set(Me._label, Me),
								Me.configurationProperties.identifier &&
									Ae.identifier.set(Me.configurationProperties.identifier, Me),
								Ee &&
									Me.configurationProperties.group === Ee &&
									(Me._source.kind === z.TaskSourceKind.Workspace
										? Be.push(Me)
										: Se.push(Me));
					});
					const ke = {
						resolve: async (Ue, qe) => {
							const Ae = Ie.get(typeof Ue == "string" ? Ue : Ue.toString());
							if (Ae)
								return (
									Ae.id.get(qe) || Ae.label.get(qe) || Ae.identifier.get(qe)
								);
						},
					};
					if (Be.length > 0)
						return (
							Be.length > 1 && this.Wc(o.localize(9567, null)),
							{ task: Be[0], resolver: ke }
						);
					if (Se.length !== 0) {
						if (Se.length === 1) return { task: Se[0], resolver: ke };
						{
							const Ue = p.$9g();
							return {
								task: new z.$h4(
									Ue,
									{ kind: z.TaskSourceKind.InMemory, label: "inMemory" },
									Ue,
									"inMemory",
									{ reevaluateOnRerun: !0 },
									{
										identifier: Ue,
										dependsOn: Se.map((Ae) => ({
											uri: Ae.getWorkspaceFolder().uri,
											task: Ae._id,
										})),
										name: Ue,
									},
								),
								resolver: ke,
							};
						}
					}
				}
				Ec(Te) {
					let Ee;
					async function Ie(ke, Ue, qe) {
						const Ae = await ke.Xb((De) => {
							const Re =
									z.$f4.is(De) || z.$e4.is(De)
										? De._source.config.workspaceFolder?.uri
										: void 0,
								je = typeof Ue == "string" ? Ue : Ue.toString();
							if (Re?.toString() !== je) return !1;
							if (n.$lg(qe))
								return (
									De._label === qe ||
									De.configurationProperties.identifier === qe
								);
							{
								const Ve = De.getDefinition(!0),
									Ze = z.TaskDefinition.createTaskIdentifier(qe, console);
								return Ze && Ve ? Ze._key === Ve._key : !1;
							}
						});
						if (Ae.length === 0) return;
						const Me = Ae[0];
						return z.$f4.is(Me) ? ke.tryResolveTask(Me) : Me;
					}
					async function Be(ke) {
						return (
							Ee === void 0 &&
								((Ee = new Map()),
								(Te || (await ke.Nc())).forEach((Ue, qe) => {
									let Ae = Ee.get(qe);
									Ae ||
										((Ae = {
											label: new Map(),
											identifier: new Map(),
											taskIdentifier: new Map(),
										}),
										Ee.set(qe, Ae));
									for (const Me of Ue) {
										Ae.label.set(Me._label, Me),
											Me.configurationProperties.identifier &&
												Ae.identifier.set(
													Me.configurationProperties.identifier,
													Me,
												);
										const De = Me.getDefinition(!0);
										De !== void 0 && Ae.taskIdentifier.set(De._key, Me);
									}
								})),
							Ee
						);
					}
					async function Se(ke, Ue, qe) {
						const Me = (await Be(ke)).get(
							typeof Ue == "string" ? Ue : Ue.toString(),
						);
						if (Me) {
							if (n.$lg(qe)) return Me.label.get(qe) || Me.identifier.get(qe);
							{
								const De = z.TaskDefinition.createTaskIdentifier(qe, console);
								return De !== void 0 ? Me.taskIdentifier.get(De._key) : void 0;
							}
						}
					}
					return {
						resolve: async (ke, Ue) => {
							if (Ue)
								return Ee === void 0 && Te === void 0
									? ((await Ie(this, ke, Ue)) ?? Se(this, ke, Ue))
									: Se(this, ke, Ue);
						},
					};
				}
				async Fc() {
					let Te;
					(function (Ie) {
						(Ie.Always = "always"),
							(Ie.Never = "never"),
							(Ie.Prompt = "prompt");
					})(Te || (Te = {}));
					const Ee = this.ab.getValue(z.TaskSettingId.SaveBeforeRun);
					if (Ee === Te.Never) return !1;
					if (Ee === Te.Prompt && this.gb.editors.some((Ie) => Ie.isDirty())) {
						const { confirmed: Ie } = await this.ub.confirm({
							message: o.localize(9568, null),
							detail: o.localize(9569, null),
							primaryButton: o.localize(9570, null),
							cancelButton: o.localize(9571, null),
						});
						if (!Ie) return !1;
					}
					return await this.gb.saveAll({ reason: oe.SaveReason.AUTO }), !0;
				}
				async Gc(Te, Ee, Ie) {
					let Be = Te;
					if (await this.Fc()) {
						await this.ab.reloadConfiguration(), await this.Qc();
						const ke = Te.getWorkspaceFolder(),
							Ue = Te.configurationProperties.identifier,
							qe = z.$e4.is(Te)
								? Te.customizes()?.type
								: z.$g4.is(Te)
									? Te.type
									: void 0;
						Be =
							(ke && Ue && Ie === z.TaskRunSource.User
								? await this.getTask(ke, Ue, !1, qe)
								: Te) ?? Te;
					}
					await S.$03.onReady();
					const Se =
						Ie === z.TaskRunSource.Reconnect
							? this.Lc().reconnect(Be, Ee)
							: this.Lc().run(Be, Ee);
					return Se ? this.Hc(Se, Ie) : { exitCode: 0 };
				}
				async Hc(Te, Ee) {
					if (
						(Ee === z.TaskRunSource.User && (await this.gc(Te.task)),
						Te.kind === x.TaskExecuteKind.Active)
					) {
						const Ie = Te.active;
						if (
							(Ie && Ie.same && Ee === z.TaskRunSource.FolderOpen) ||
							Ee === z.TaskRunSource.Reconnect
						)
							return (
								this.Fb.debug("Ignoring task that is already active", Te.task),
								Te.promise
							);
						if (Ie && Ie.same)
							if (this.I?.isTaskVisible(Te.task)) {
								const Be = o.localize(9572, null, Te.task.getQualifiedLabel()),
									Se = this.Lc().getLastInstance(Te.task) ?? Te.task;
								this.vb.prompt(
									c.default.Warning,
									Be,
									[
										{
											label: o.localize(9573, null),
											run: () => this.terminate(Se),
										},
										{ label: o.localize(9574, null), run: () => this.Ic(Se) },
									],
									{ sticky: !0 },
								);
							} else this.I?.revealTask(Te.task);
						else
							throw new x.$Spc(
								c.default.Warning,
								o.localize(9575, null),
								x.TaskErrors.RunningTask,
							);
					}
					return this.gc(Te.task), Te.promise;
				}
				async Ic(Te) {
					if (!this.I) return;
					if ((await this.I.terminate(Te)).success)
						try {
							await this.run(Te);
						} catch {}
					else
						this.vb.warn(
							o.localize(
								9576,
								null,
								n.$lg(Te) ? Te : Te.configurationProperties.name,
							),
						);
				}
				async terminate(Te) {
					return (await this.pd())
						? this.I
							? this.I.terminate(Te)
							: { success: !0, task: void 0 }
						: { success: !0, task: void 0 };
				}
				Jc() {
					return this.I ? this.I.terminateAll() : Promise.resolve([]);
				}
				Kc() {
					return new V.$dXc(
						this.pb,
						this.qb,
						this.cb,
						this.db,
						this.eb,
						this.bb,
						this.lb,
						this.ob,
						this.ib,
						this.xb,
						be.OutputChannelId,
						this.hb,
						this.yb,
						this.zb,
						this.Cb,
						this.Fb,
						this.vb,
						this.Ib,
						(Te) => {
							if (Te) return this.Wb(Te.uri.scheme);
							if (this.F.size > 0) {
								const Ee = Array.from(this.F.entries()),
									Ie = Ee.filter((Be) => Be[0] !== ie.Schemas.file);
								return Ie.length > 0 ? Ie[0][1][0] : Ee[0][1][0];
							} else return;
						},
					);
				}
				Mc(Te) {
					const Ee = J.$$3.get(Te);
					return !Ee || !Ee.when || this.wb.contextMatchesRules(Ee.when);
				}
				async Nc(Te, Ee, Ie) {
					await this.R;
					const Be = Te?.type,
						Se = this.md();
					Ee || (await this.Sb(Te?.type));
					const ke = Object.create(null);
					J.$$3.all().forEach((Me) => (ke[Me.taskType] = !0)),
						(ke.shell = !0),
						(ke.process = !0);
					const Ue = await new Promise((Me) => {
							const De = [];
							let Re = 0;
							const je = (Ze) => {
									Ze && De.push(Ze), --Re === 0 && Me(De);
								},
								Ve = (Ze) => {
									try {
										Ze && n.$lg(Ze.message)
											? (this.Wc(`Error: ${Ze.message}
`),
												this.Ub())
											: (this.Wc(
													"Unknown error received while collecting tasks from providers.",
												),
												this.Ub());
									} finally {
										--Re === 0 && Me(De);
									}
								};
							if (
								this.pc() &&
								this.Pb === z.JsonSchemaVersion.V2_0_0 &&
								this.z.size > 0
							) {
								let Ze = !1;
								for (const [et, rt] of this.z) {
									const ft = this.C.get(et);
									if (Be === void 0 || Be === ft) {
										if (ft && !this.Mc(ft)) continue;
										(Ze = !0),
											Re++,
											(0, W.$Dh)(
												rt.provideTasks(ke).then((bt) => {
													for (const nt of bt.tasks)
														if (nt.type !== this.C.get(et)) {
															this.Wc(
																o.localize(9577, null, this.C.get(et), nt.type),
															),
																nt.type !== "shell" &&
																	nt.type !== "process" &&
																	this.Ub();
															break;
														}
													return je(bt);
												}, Ve),
												5e3,
												() => {
													console.error("Timed out getting tasks from ", ft),
														je(void 0);
												},
											);
									}
								}
								Ze || Me(De);
							} else Me(De);
						}),
						qe = new He(),
						Ae = new He();
					for (const Me of Ue)
						for (const De of Me.tasks) {
							const Re = De.getWorkspaceFolder();
							Re && Ae.add(Re, De);
						}
					try {
						let Me = [];
						return (
							(!Ie || this.Eb.isWorkspaceTrusted()) &&
								(Me = Array.from(await this.getWorkspaceTasks())),
							await Promise.all(this.Oc(Me, Te, qe, Ae, Ee)),
							Se && (await this.nd(qe.all())),
							qe
						);
					} catch {
						const Me = new He();
						for (const De of Ue)
							for (const Re of De.tasks) {
								const je = Re.getWorkspaceFolder();
								je && Me.add(je, Re);
							}
						return Me;
					}
				}
				Oc(Te, Ee, Ie, Be, Se) {
					return Te.map(async ([ke, Ue]) => {
						const qe = Be.get(ke);
						if (!Ue.set) {
							qe && Ie.add(ke, ...qe);
							return;
						}
						if (this.ib.getWorkbenchState() === D.WorkbenchState.EMPTY)
							Ie.add(ke, ...Ue.set.tasks);
						else {
							const Ae = Ue.configurations,
								Me = Ue.set ? this.Pc(Ue.set) : void 0,
								De = [];
							if (Ae || Me) {
								const Re = new Set();
								Ae && Object.keys(Ae.byIdentifier).forEach((Ze) => Re.add(Ze));
								for (const Ze of qe)
									if (z.$g4.is(Ze))
										if (Ae) {
											const et = Ae.byIdentifier[Ze.defines._key];
											et
												? (Re.delete(Ze.defines._key),
													Ie.add(ke, q.$6Wc(Ze, et)))
												: Ie.add(ke, Ze);
										} else if (Me) {
											const et = Me[Ze.defines._key];
											et
												? (Ie.add(ke, q.$6Wc(Ze, et)), De.push(et))
												: Ie.add(ke, Ze);
										} else Ie.add(ke, Ze);
								if (De.length > 0) {
									const Ze = De.reduce(
										(et, rt) => ((et[rt._id] = !0), et),
										Object.create(null),
									);
									for (const et of Ue.set.tasks) Ze[et._id] || Ie.add(ke, et);
								} else Ie.add(ke, ...Ue.set.tasks);
								const Ve = Array.from(Re).map(async (Ze) => {
									const et = Ae.byIdentifier[Ze];
									if (Ee?.type && Ee.type !== et.configures.type) return;
									let rt = !1;
									for (const [ft, bt] of this.z) {
										const nt = this.C.get(ft);
										if (et.type === nt) {
											if (nt && !this.Mc(nt)) {
												rt = !0;
												continue;
											}
											try {
												const lt = await bt.resolveTask(et);
												if (lt && lt._id === et._id) {
													Ie.add(ke, q.$6Wc(lt, et));
													return;
												}
											} catch {}
										}
									}
									rt
										? this.Wc(o.localize(9578, null, et.configures.type))
										: Se ||
											(this.Wc(
												o.localize(
													9579,
													null,
													et.configures.type,
													JSON.stringify(et._source.config.element, void 0, 4),
												),
											),
											this.Ub());
								});
								await Promise.all(Ve);
							} else Ie.add(ke, ...Ue.set.tasks), Ie.add(ke, ...qe);
						}
					});
				}
				Pc(Te) {
					let Ee;
					function Ie() {
						return Ee || ((Ee = Object.create(null)), Ee);
					}
					for (const Be of Te.tasks)
						if (z.$e4.is(Be)) {
							const Se = Be.command && Be.command.name;
							if (Se === "gulp" || Se === "grunt" || Se === "jake") {
								const ke = z.KeyedTaskIdentifier.create({
									type: Se,
									task: Be.configurationProperties.name,
								});
								Ie()[ke._key] = Be;
							}
						}
					return Ee;
				}
				async getWorkspaceTasks(Te = z.TaskRunSource.User) {
					return (await this.pd())
						? (await (0, W.$Dh)(this.R, 2e3, () => {
								this.Fb.warn("Timed out waiting for all supported executions");
							}),
							await this.H,
							this.G ? this.G : this.Qc(Te))
						: new Map();
				}
				Qc(Te = z.TaskRunSource.User) {
					return (this.G = this.Sc(Te)), this.G;
				}
				async Rc() {
					let Te = this.Mb.length > 0 ? this.Mb[0] : void 0;
					if (!Te) {
						const Ee = await this.zb.userHome();
						Te = new D.$7i({ uri: Ee, name: h.$kh(Ee), index: 0 });
					}
					return Te;
				}
				async Sc(Te = z.TaskRunSource.User) {
					const Ee = [];
					for (const Ue of this.Mb) Ee.push(this.Uc(Ue, Te));
					const Ie = await Promise.all(Ee),
						Be = new Map();
					for (const Ue of Ie)
						Ue && Be.set(Ue.workspaceFolder.uri.toString(), Ue);
					const Se = await this.Rc();
					if (this.ib.getWorkbenchState() !== D.WorkbenchState.EMPTY) {
						const Ue = await this.Xc(Se, Te);
						Ue &&
							this.u &&
							this.u.configuration &&
							Be.set(this.u.configuration.toString(), Ue);
					}
					const ke = await this.Yc(Se, Te);
					return ke && Be.set(z.$_3, ke), Be;
				}
				get Tc() {
					return (
						F.$Upc.getValue(this.wb) === !0 && F.$Wpc.getValue(this.wb) === !0
					);
				}
				async Uc(Te, Ee = z.TaskRunSource.User) {
					const Ie =
						this.r === z.ExecutionEngine.Process
							? await this.bd(Te)
							: await this.ad(Te);
					if (!Ie || !Ie.config || Ie.hasErrors)
						return Promise.resolve({
							workspaceFolder: Te,
							set: void 0,
							configurations: void 0,
							hasErrors: Ie ? Ie.hasErrors : !1,
						});
					await S.$03.onReady();
					const Be = this.Wb(Te.uri.scheme),
						Se = new xe(this.P),
						ke = q.$5Wc(
							Te,
							void 0,
							Be ? Be.platform : u.$x,
							Ie.config,
							Se,
							q.TaskConfigSource.TasksJson,
							this.wb,
						);
					let Ue = !1;
					if (
						(!ke.validationStatus.isOK() &&
							ke.validationStatus.state !== r.ValidationState.Info &&
							((Ue = !0), this.Ub(Ee)),
						Se.status.isFatal())
					)
						return (
							Se.fatal(o.localize(9580, null)),
							{
								workspaceFolder: Te,
								set: void 0,
								configurations: void 0,
								hasErrors: Ue,
							}
						);
					let qe;
					if (ke.configured && ke.configured.length > 0) {
						qe = { byIdentifier: Object.create(null) };
						for (const Ae of ke.configured)
							qe.byIdentifier[Ae.configures._key] = Ae;
					}
					return (
						!this.Tc &&
							ke.custom.length > 0 &&
							console.warn("Custom workspace tasks are not supported."),
						{
							workspaceFolder: Te,
							set: { tasks: this.Tc ? ke.custom : [] },
							configurations: qe,
							hasErrors: Ue,
						}
					);
				}
				Vc(Te, Ee) {
					if (!Te) return { config: void 0, hasParseErrors: !1 };
					const Ie = Te.$parseErrors;
					if (Ie) {
						let Be = !1;
						for (const Se of Ie)
							if (/tasks\.json$/.test(Se)) {
								Be = !0;
								break;
							}
						if (Be)
							return (
								this.Wc(o.localize(9581, null, Ee)),
								this.Ub(),
								{ config: Te, hasParseErrors: !0 }
							);
					}
					return { config: Te, hasParseErrors: !1 };
				}
				Wc(Te, Ee) {
					(!Ee || this.ab.getValue(z.TaskSettingId.VerboseLogging)) &&
						this.P.append(
							Te +
								`
`,
						);
				}
				async Xc(Te, Ee = z.TaskRunSource.User) {
					if (this.r === z.ExecutionEngine.Process) return this.Zc(Te);
					const Ie = this.fd(Te, z.TaskSourceKind.WorkspaceFile),
						Be = this.Vc(Ie.config, o.localize(9582, null)),
						Se = { byIdentifier: Object.create(null) },
						ke = [];
					return (
						await this.$c(
							Te,
							Be.config,
							Ee,
							ke,
							Se.byIdentifier,
							q.TaskConfigSource.WorkspaceFile,
						),
						(Be.config
							? q.ExecutionEngine.from(Be.config)
							: z.ExecutionEngine.Terminal) === z.ExecutionEngine.Process
							? (this.vb.warn(o.localize(9583, null)), this.Zc(Te))
							: {
									workspaceFolder: Te,
									set: { tasks: ke },
									configurations: Se,
									hasErrors: Be.hasParseErrors,
								}
					);
				}
				async Yc(Te, Ee = z.TaskRunSource.User) {
					if (this.r === z.ExecutionEngine.Process) return this.Zc(Te);
					const Ie = this.fd(Te, z.TaskSourceKind.User),
						Be = this.Vc(Ie.config, o.localize(9584, null)),
						Se = { byIdentifier: Object.create(null) },
						ke = [];
					return (
						await this.$c(
							Te,
							Be.config,
							Ee,
							ke,
							Se.byIdentifier,
							q.TaskConfigSource.User,
						),
						(Be.config
							? q.ExecutionEngine.from(Be.config)
							: z.ExecutionEngine.Terminal) === z.ExecutionEngine.Process
							? (this.vb.warn(o.localize(9585, null)), this.Zc(Te))
							: {
									workspaceFolder: Te,
									set: { tasks: ke },
									configurations: Se,
									hasErrors: Be.hasParseErrors,
								}
					);
				}
				Zc(Te) {
					return {
						workspaceFolder: Te,
						set: void 0,
						configurations: void 0,
						hasErrors: !1,
					};
				}
				async $c(Te, Ee, Ie, Be, Se, ke, Ue = !1) {
					if (Ee) {
						if (!Te)
							return (
								this.Fb.trace(
									"TaskService.computeTasksForSingleConfig: no workspace folder for worskspace",
									this.u?.id,
								),
								!1
							);
					} else return !1;
					const qe = this.Wb(Te.uri.scheme),
						Ae = new xe(this.P),
						Me = q.$5Wc(
							Te,
							this.u,
							qe ? qe.platform : u.$x,
							Ee,
							Ae,
							ke,
							this.wb,
							Ue,
						);
					let De = !1;
					if (
						(!Me.validationStatus.isOK() &&
							Me.validationStatus.state !== r.ValidationState.Info &&
							(this.Ub(Ie), (De = !0)),
						Ae.status.isFatal())
					)
						return Ae.fatal(o.localize(9586, null)), De;
					if (Me.configured && Me.configured.length > 0)
						for (const Re of Me.configured) Se[Re.configures._key] = Re;
					if (!this.Tc && Me.custom.length > 0)
						console.warn("Custom workspace tasks are not supported.");
					else for (const Re of Me.custom) Be.push(Re);
					return De;
				}
				ad(Te) {
					const { config: Ee, hasParseErrors: Ie } = this.fd(Te);
					return Promise.resolve({
						workspaceFolder: Te,
						config: Ee,
						hasErrors: Ie,
					});
				}
				cd() {
					const Te = [],
						Ee = [];
					let Ie = z.ExecutionEngine.Terminal,
						Be = z.JsonSchemaVersion.V2_0_0,
						Se;
					if (this.ib.getWorkbenchState() === D.WorkbenchState.FOLDER) {
						const ke = this.ib.getWorkspace().folders[0];
						Te.push(ke), (Ie = this.dd(ke));
						const Ue = { executionEngineVersion: Ie };
						this.jb.publicLog("taskService.engineVersion", Ue),
							(Be = this.ed(ke));
					} else if (
						this.ib.getWorkbenchState() === D.WorkbenchState.WORKSPACE
					) {
						Se = this.ib.getWorkspace();
						for (const ke of this.ib.getWorkspace().folders)
							Be === this.ed(ke)
								? Te.push(ke)
								: (Ee.push(ke), this.Wc(o.localize(9587, null, ke.uri.fsPath)));
					}
					return [Te, Ee, Ie, Be, Se];
				}
				dd(Te) {
					const { config: Ee } = this.fd(Te);
					return Ee ? q.ExecutionEngine.from(Ee) : z.ExecutionEngine._default;
				}
				ed(Te) {
					const { config: Ee } = this.fd(Te);
					return Ee ? q.JsonSchemaVersion.from(Ee) : z.JsonSchemaVersion.V2_0_0;
				}
				fd(Te, Ee) {
					let Ie;
					if (
						Ee !== z.TaskSourceKind.User &&
						this.ib.getWorkbenchState() === D.WorkbenchState.EMPTY
					)
						Ie = void 0;
					else {
						const Se = this.ab.inspect("tasks", { resource: Te.uri });
						switch (Ee) {
							case z.TaskSourceKind.User: {
								Se.userValue !== Se.workspaceFolderValue &&
									(Ie = m.$vo(Se.userValue));
								break;
							}
							case z.TaskSourceKind.Workspace:
								Ie = m.$vo(Se.workspaceFolderValue);
								break;
							case z.TaskSourceKind.WorkspaceFile: {
								this.ib.getWorkbenchState() === D.WorkbenchState.WORKSPACE &&
									Se.workspaceFolderValue !== Se.workspaceValue &&
									(Ie = m.$vo(Se.workspaceValue));
								break;
							}
							default:
								Ie = m.$vo(Se.workspaceFolderValue);
						}
					}
					if (!Ie) return { config: void 0, hasParseErrors: !1 };
					const Be = Ie.$parseErrors;
					if (Be) {
						let Se = !1;
						for (const ke of Be)
							if (/tasks\.json$/.test(ke)) {
								Se = !0;
								break;
							}
						if (Se)
							return (
								this.Wc(o.localize(9588, null)),
								this.Ub(),
								{ config: void 0, hasParseErrors: !0 }
							);
					}
					return { config: Ie, hasParseErrors: !1 };
				}
				inTerminal() {
					return this.I
						? this.I instanceof V.$dXc
						: this.r === z.ExecutionEngine.Terminal;
				}
				configureAction() {
					const Te = this;
					return new (class extends t.$rj {
						constructor() {
							super(
								Oe.ID,
								Oe.TEXT.value,
								void 0,
								!0,
								() => (Te.Id(), Promise.resolve(void 0)),
							);
						}
					})();
				}
				gd(Te) {
					let Ee = !0;
					if (Te instanceof x.$Spc) {
						const Ie = Te,
							Be =
								Ie.code === x.TaskErrors.NotConfigured ||
								Ie.code === x.TaskErrors.NoBuildTask ||
								Ie.code === x.TaskErrors.NoTestTask,
							Se = Ie.code === x.TaskErrors.RunningTask;
						Be || Se
							? this.vb.prompt(Ie.severity, Ie.message, [
									{
										label: Be ? Oe.TEXT.value : o.localize(9589, null),
										run: () => {
											Be ? this.Id() : this.zd();
										},
									},
								])
							: this.vb.notify({ severity: Ie.severity, message: Ie.message });
					} else if (Te instanceof Error) {
						const Ie = Te;
						this.vb.error(Ie.message), (Ee = !1);
					} else
						n.$lg(Te)
							? this.vb.error(Te)
							: this.vb.error(o.localize(9590, null));
					Ee && this.Ub();
				}
				hd() {
					return this.ab.getValue($e.$eXc);
				}
				async jd(Te, Ee = !1, Ie = !1, Be, Se = !0) {
					let ke = {};
					if (Te == null || Te.length === 0) return [];
					const Ue = (Me) => {
						const De = {
							label: Me._label,
							description: this.getTaskDescription(Me),
							task: Me,
							detail: this.hd() ? Me.configurationProperties.detail : void 0,
						};
						return (
							ke[Me._id]
								? (ke[Me._id].length === 1 && (ke[Me._id][0].label += " (1)"),
									(De.label =
										De.label + " (" + (ke[Me._id].length + 1).toString() + ")"))
								: (ke[Me._id] = []),
							ke[Me._id].push(De),
							De
						);
					};
					function qe(Me, De, Re) {
						De.length && Me.push({ type: "separator", label: Re });
						for (const je of De) {
							const Ve = Ue(je);
							(Ve.buttons = [
								{
									iconClass: ne.ThemeIcon.asClassName($e.$hXc),
									tooltip: o.localize(9591, null),
								},
							]),
								Be && je === Be.task ? Me.unshift(Be) : Me.push(Ve);
						}
					}
					let Ae;
					if (Ee)
						if (((Ae = []), Te.length === 1)) Ae.push(Ue(Te[0]));
						else {
							const Me = await this.getSavedTasks("historical"),
								De = [],
								Re = new Set();
							let je = [],
								Ve = [];
							const Ze = Object.create(null);
							Te.forEach((rt) => {
								const ft = rt.getCommonTaskId();
								ft && (Ze[ft] = rt);
							}),
								Me.reverse().forEach((rt) => {
									const ft = rt.getCommonTaskId();
									if (ft) {
										Re.add(ft);
										const bt = Ze[ft];
										bt && De.push(bt);
									}
								});
							for (const rt of Te) {
								const ft = rt.getCommonTaskId();
								(!ft || !Re.has(ft)) &&
									(rt._source.kind === z.TaskSourceKind.Workspace ||
									rt._source.kind === z.TaskSourceKind.User
										? je.push(rt)
										: Ve.push(rt));
							}
							const et = this.createSorter();
							Se && qe(Ae, De, o.localize(9592, null)),
								(je = je.sort((rt, ft) => et.compare(rt, ft))),
								qe(Ae, je, o.localize(9593, null)),
								(Ve = Ve.sort((rt, ft) => et.compare(rt, ft))),
								qe(Ae, Ve, o.localize(9594, null));
						}
					else {
						if (Ie) {
							const Me = this.createSorter();
							Te = Te.sort((De, Re) => Me.compare(De, Re));
						}
						Ae = Te.map((Me) => Ue(Me));
					}
					return (ke = {}), Ae;
				}
				async kd(Te, Ee, Ie, Be) {
					return this.Ib.createInstance($e.$iXc).show(Te, Ee, Ie, Be);
				}
				async ld(Te, Ee, Ie, Be = !1, Se = !1, ke, Ue, qe) {
					const Ae = await Te,
						Me = await (0, W.$Dh)(this.jd(Ae, Be, Se, ke), 200, () => {});
					if (Me)
						return Me.length === 1 && this.ab.getValue($e.$fXc)
							? Me[0]
							: (Me.length === 0 && Ie
									? Me.push(Ie)
									: Me.length > 1 &&
										Ue &&
										Ue.length > 0 &&
										(Me.push({ type: "separator", label: "" }), Me.push(Ue[0])),
								this.nb.pick(Me, {
									value: qe,
									placeHolder: Ee,
									matchOnDescription: !0,
									onDidTriggerItemButton: (De) => {
										const Re = De.item.task;
										this.nb.cancel(),
											z.$g4.is(Re)
												? this.customize(Re, void 0, !0)
												: z.$e4.is(Re) && this.openConfig(Re);
									},
								}));
				}
				md() {
					return (
						this.getRecentlyUsedTasksV1().size > 0 &&
						this.bc("historical").size === 0
					);
				}
				async nd(Te) {
					if (!this.md()) return;
					const Ee = this.getRecentlyUsedTasksV1(),
						Ie = Object.create(null);
					Te.forEach((Se) => {
						const ke = Se.getKey();
						ke && (Ie[ke] = Se);
					});
					const Be = [...Ee.keys()].reverse();
					for (const Se in Be) {
						const ke = Ie[Se];
						ke && (await this.gc(ke));
					}
					this.rb.remove(be.c, $.StorageScope.WORKSPACE);
				}
				od() {
					return (
						this.Nb.length === 0 ||
							!this.Qb ||
							this.vb.prompt(
								c.default.Info,
								o.localize(9595, null, this.Nb.map((Te) => Te.name).join(", ")),
								[
									{
										label: o.localize(9596, null),
										isSecondary: !0,
										run: () => {
											this.rb.store(
												be.j,
												!0,
												$.StorageScope.WORKSPACE,
												$.StorageTarget.MACHINE,
											),
												(this.y = !1);
										},
									},
								],
							),
						Promise.resolve(void 0)
					);
				}
				async pd() {
					return F.$Xpc && !F.$Ypc
						? !1
						: (await this.Eb.workspaceTrustInitialized,
							this.Eb.isWorkspaceTrusted()
								? !0
								: (await this.Db.requestWorkspaceTrust({
										message: o.localize(9597, null),
									})) === !0);
				}
				async qd(Te) {
					if (!this.n) return;
					if (!Te) return this.sd();
					const Ee = typeof Te == "string" ? void 0 : Te.type,
						Ie = typeof Te == "string" ? Te : Te.task,
						Be = await this.Nc({ type: Ee }),
						Se = this.Bd(Te),
						ke = Be.all(),
						Ue = this.Ec(Be),
						qe = this.ib.getWorkspace().folders.map((Me) => Me.uri);
					if (
						(this.ib.getWorkbenchState() === D.WorkbenchState.WORKSPACE &&
							qe.push(this.ib.getWorkspace().configuration),
						qe.push(z.$_3),
						Se)
					)
						for (const Me of qe) {
							const De = await Ue.resolve(Me, Se);
							if (De) {
								this.run(De);
								return;
							}
						}
					if (
						!(Ie
							? ke.find(
									(Me) =>
										Me.configurationProperties.identifier === Ie ||
										Me.getDefinition(!0)?.configurationProperties
											?.identifier === Ie,
								)
							: void 0)
					)
						return this.sd(ke, Ee, Ie);
					for (const Me of qe) {
						const De = await Ue.resolve(Me, Ie);
						if (De) {
							await this.run(
								De,
								{ attachProblemMatcher: !0 },
								z.TaskRunSource.User,
							);
							return;
						}
					}
				}
				rd(Te) {
					if (!this.Zb(Te))
						return {
							tasks: Promise.resolve([]),
							grouped: Promise.resolve(new He()),
						};
					const Ee = this.Nc(Te);
					return {
						tasks: Ee.then((Be) => {
							if (!Te || !Te.type) return Be.all();
							const Se = [];
							return (
								Be.forEach((ke) => {
									for (const Ue of ke)
										if (z.$g4.is(Ue) && Ue.defines.type === Te.type)
											Se.push(Ue);
										else if (z.$e4.is(Ue))
											if (Ue.type === Te.type) Se.push(Ue);
											else {
												const qe = Ue.customizes();
												qe && qe.type === Te.type && Se.push(Ue);
											}
								}),
								Se
							);
						}),
						grouped: Ee,
					};
				}
				sd(Te, Ee, Ie) {
					const Be = (ke) => {
							ke !== void 0 &&
								(ke === null
									? this.Id()
									: this.run(
											ke,
											{ attachProblemMatcher: !0 },
											z.TaskRunSource.User,
										).then(void 0, (Ue) => {}));
						},
						Se = o.localize(9598, null);
					this.od().then(() => {
						if (this.ab.getValue(Fe)) {
							let ke;
							Te || (ke = this.rd()),
								this.ld(
									Te || ke.tasks,
									Se,
									{ label: "$(plus) " + o.localize(9599, null), task: null },
									!0,
									void 0,
									void 0,
									void 0,
									Ie,
								).then((Ue) => Be(Ue ? Ue.task : void 0));
						} else
							this.kd(
								Se,
								{ label: "$(plus) " + o.localize(9600, null), task: null },
								Ee,
								Ie,
							).then(Be);
					});
				}
				td() {
					S.$03.onReady().then(() =>
						this.gb.saveAll({ reason: oe.SaveReason.AUTO }).then(() => {
							const Te = this.Lc().rerun();
							return Te
								? this.Hc(Te)
								: (this.O.get() || this.sd(), Promise.resolve(void 0));
						}),
					);
				}
				ud(Te, Ee = !1) {
					const Ie = [];
					for (const Be of Te.filter(
						(Se) => !!Se.configurationProperties.group,
					))
						((Ee &&
							typeof Be.configurationProperties.group.isDefault == "string") ||
							(!Ee && Be.configurationProperties.group.isDefault === !0)) &&
							Ie.push(Be);
					return Ie;
				}
				vd(Te, Ee, Ie, Be) {
					if (this.Pb === z.JsonSchemaVersion.V0_1_0) {
						Be();
						return;
					}
					const Se = {
							location: y.ProgressLocation.Window,
							title: Ee.fetching,
						},
						ke = (async () => {
							async function Ue(Ve, Ze, et) {
								et.run(Ve, Ze, z.TaskRunSource.User).then(void 0, (rt) => {});
							}
							const qe = (Ve) => {
								this.od().then(() => {
									this.ld(
										Ve,
										Ee.select,
										{ label: Ee.notFoundConfigure, task: null },
										!0,
									).then((Ze) => {
										const et = Ze ? Ze.task : void 0;
										if (et !== void 0) {
											if (et === null) {
												Ie.apply(this);
												return;
											}
											Ue(et, { attachProblemMatcher: !0 }, this);
										}
									});
								});
							};
							let Ae = [];
							const { globGroupTasks: Me, globTasksDetected: De } =
								await this.wd(Te._id);
							(Ae = [...Me]),
								!De && Ae.length === 0 && (Ae = await this.Yb(Te, !0));
							const Re = (Ve) =>
									this.vc(Te).then((Ze) => {
										if (Ze.length > 0) {
											const et = this.ud(Ze, Ve);
											if (et.length === 1) {
												Ue(et[0], void 0, this);
												return;
											} else et.length > 0 && (Ze = et);
										}
										qe(Ze);
									}),
								je = (Ve) => {
									z.$f4.is(Ve)
										? this.tryResolveTask(Ve).then((Ze) => {
												Ue(Ze, void 0, this);
											})
										: Ue(Ve, void 0, this);
								};
							return Ae.length === 1
								? je(Ae[0])
								: De && Ae.length > 1
									? Re(!0)
									: (Ae.length || (Ae = await this.Yb(Te, !0)),
										Ae.length === 1 ? je(Ae[0]) : Re(!1));
						})();
					this.sb.withProgress(Se, () => ke);
				}
				async wd(Te) {
					let Ee = !1;
					const Ie = oe.$A1.getOriginalUri(this.gb.activeEditor);
					if (Ie) {
						const Be = this.ib.getWorkspaceFolder(Ie);
						if (Be) {
							const Se = this.fd(Be)?.config?.tasks;
							if (
								Se &&
								((Ee =
									Se.filter(
										(ke) =>
											ke.group &&
											typeof ke.group != "string" &&
											typeof ke.group.isDefault == "string",
									).length > 0),
								Ee)
							) {
								const ke = Be?.uri ? (h.$ph(Be.uri, Ie) ?? Ie.path) : Ie.path;
								return {
									globGroupTasks: await this.Xb((qe) => {
										const Ae = qe.configurationProperties.group;
										return Ae &&
											typeof Ae != "string" &&
											typeof Ae.isDefault == "string"
											? Ae._id === Te && w.$Ik(Ae.isDefault, ke)
											: ((Ee = !1), !1);
									}),
									globTasksDetected: Ee,
								};
							}
						}
					}
					return { globGroupTasks: [], globTasksDetected: Ee };
				}
				xd() {
					if (this.n)
						return this.vd(
							z.TaskGroup.Build,
							{
								fetching: o.localize(9601, null),
								select: o.localize(9602, null),
								notFoundConfigure: o.localize(9603, null),
							},
							this.Jd,
							this.mc,
						);
				}
				yd() {
					return this.vd(
						z.TaskGroup.Test,
						{
							fetching: o.localize(9604, null),
							select: o.localize(9605, null),
							notFoundConfigure: o.localize(9606, null),
						},
						this.Kd,
						this.nc,
					);
				}
				zd(Te) {
					if (Te === "terminateAll") {
						this.Jc();
						return;
					}
					const Ee = (Ie) => {
						this.ld(
							Ie || this.getActiveTasks(),
							o.localize(9607, null),
							{ label: o.localize(9608, null), task: void 0 },
							!1,
							!0,
							void 0,
							[
								{
									label: o.localize(9609, null),
									id: "terminateAll",
									task: void 0,
								},
							],
						).then((Be) => {
							Be && Be.id === "terminateAll" && this.Jc();
							const Se = Be ? Be.task : void 0;
							Se != null && this.terminate(Se);
						});
					};
					if (this.inTerminal()) {
						const Ie = this.Bd(Te);
						let Be;
						Ie !== void 0
							? ((Be = this.getActiveTasks()),
								Be.then((Se) => {
									for (const ke of Se)
										if (ke.matches(Ie)) {
											this.terminate(ke);
											return;
										}
									Ee(Be);
								}))
							: Ee();
					} else
						this.$b().then((Ie) => {
							Ie &&
								this.Jc().then((Be) => {
									const Se = Be[0];
									Se.success ||
										(Se.code &&
										Se.code === a.TerminateResponseCode.ProcessNotFound
											? this.vb.error(o.localize(9610, null))
											: this.vb.error(o.localize(9611, null)));
								});
						});
				}
				async Ad(Te) {
					const Ee = await this.getActiveTasks();
					if (Ee.length === 1) {
						this.Ic(Ee[0]);
						return;
					}
					if (this.inTerminal()) {
						const Ie = this.Bd(Te);
						if (Ie !== void 0) {
							for (const Se of Ee)
								if (Se.matches(Ie)) {
									this.Ic(Se);
									return;
								}
						}
						const Be = await this.ld(
							Ee,
							o.localize(9612, null),
							{ label: o.localize(9613, null), task: null },
							!1,
							!0,
						);
						Be && Be.task && this.Ic(Be.task);
					} else Ee.length > 0 && this.Ic(Ee[0]);
				}
				Bd(Te) {
					let Ee;
					return (
						n.$lg(Te)
							? (Ee = Te)
							: Te &&
								n.$lg(Te.type) &&
								(Ee = z.TaskDefinition.createTaskIdentifier(Te, console)),
						Ee
					);
				}
				Cd(Te) {
					return !!Te && !!Te.tasks && Te.tasks.length > 0;
				}
				Dd(Te, Ee) {
					let Ie = !1;
					this.hb
						.stat(Te)
						.then(
							(Be) => Be,
							() => {},
						)
						.then(async (Be) => {
							const Se = !!Be,
								ke = this.ab.inspect("tasks", { resource: Te });
							let Ue, qe;
							switch (Ee) {
								case z.TaskSourceKind.User:
									(Ue = this.Cd(ke.userValue)),
										(qe = b.ConfigurationTarget.USER);
									break;
								case z.TaskSourceKind.WorkspaceFile:
									(Ue = this.Cd(ke.workspaceValue)),
										(qe = b.ConfigurationTarget.WORKSPACE);
									break;
								default:
									(Ue = this.Cd(ke.workspaceFolderValue)),
										(qe = b.ConfigurationTarget.WORKSPACE_FOLDER);
							}
							let Ae;
							if (!Ue) {
								const Me = await this.nb.pick((0, H.$3Wc)(), {
									placeHolder: o.localize(9614, null),
								});
								if (!Me) return Promise.resolve(void 0);
								Ae = Me.content;
								const De = this.ab.getValue();
								De.editor.insertSpaces &&
									(Ae = Ae.replace(
										/(\n)(\t+)/g,
										(Re, je, Ve) =>
											je + " ".repeat(Ve.length * De.editor.tabSize),
									)),
									(Ie = !0);
							}
							if (!Se && Ae)
								return this.kb
									.create([{ resource: Te, value: Ae }])
									.then((Me) => Me[0].resource);
							if (Se && (Ue || Ae)) {
								const Me = Be?.resource;
								return (
									Ae &&
										Me &&
										this.ab.updateValue(
											"tasks",
											E.$do(Ae),
											{ resource: Me },
											qe,
										),
									Me
								);
							}
						})
						.then((Be) => {
							Be &&
								this.gb.openEditor({ resource: Be, options: { pinned: Ie } });
						});
				}
				Ed(Te) {
					const Ee = Te;
					return Ee && !!Ee.task;
				}
				Fd(Te) {
					const Ee = Te;
					return Ee && !!Ee.settingType;
				}
				Gd(Te) {
					z.$g4.is(Te)
						? this.customize(Te, void 0, !0)
						: z.$e4.is(Te)
							? this.openConfig(Te)
							: z.$f4.is(Te);
				}
				Hd(Te) {
					if (Te)
						if (this.Ed(Te)) this.Gd(Te.task);
						else if (this.Fd(Te))
							this.Ib.createInstance($e.$iXc).handleSettingOption(
								Te.settingType,
							);
						else if (
							Te.folder &&
							this.ib.getWorkbenchState() !== D.WorkbenchState.EMPTY
						)
							this.Dd(
								Te.folder.toResource(".vscode/tasks.json"),
								z.TaskSourceKind.Workspace,
							);
						else {
							const Ee = this.Bc(z.TaskSourceKind.User);
							Ee && this.Dd(Ee, z.TaskSourceKind.User);
						}
				}
				getTaskDescription(Te) {
					let Ee;
					if (Te._source.kind === z.TaskSourceKind.User)
						Ee = o.localize(9615, null);
					else if (Te._source.kind === z.TaskSourceKind.WorkspaceFile)
						Ee = Te.getWorkspaceFileName();
					else if (this.needsFolderQualification()) {
						const Ie = Te.getWorkspaceFolder();
						Ie && (Ee = Ie.name);
					}
					return Ee;
				}
				async Id() {
					if (!(await this.pd())) return;
					let Te;
					this.Pb === z.JsonSchemaVersion.V2_0_0
						? (Te = this.Nc())
						: (Te = Promise.resolve(new He()));
					const Ee = this.ib.getWorkspace().folders.map((Me) =>
							this.hb.stat(Me.toResource(".vscode/tasks.json")).then(
								(De) => De,
								() => {},
							),
						),
						Ie = o.localize(9616, null),
						Be = o.localize(9617, null),
						Se = new X.$Ce(),
						ke = Se.token,
						Ue = Promise.all(Ee).then((Me) =>
							Te.then((De) => {
								const Re = [];
								let je = 0,
									Ve = De.all();
								if (Ve.length > 0) {
									Ve = Ve.sort((et, rt) => et._label.localeCompare(rt._label));
									for (const et of Ve) {
										const rt = {
											label: $e.$iXc.getTaskLabelWithIcon(et),
											task: et,
											description: this.getTaskDescription(et),
											detail: this.hd()
												? et.configurationProperties.detail
												: void 0,
										};
										$e.$iXc.applyColorStyles(et, rt, this.Gb),
											Re.push(rt),
											z.$g4.is(et) || je++;
									}
								}
								const Ze = je === 0;
								if (Ze || De.get(z.$_3).length === je) {
									const et = Me[0] !== void 0 ? Be : Ie;
									Re.length && Re.push({ type: "separator" }),
										Re.push({
											label: et,
											folder: this.ib.getWorkspace().folders[0],
										});
								}
								return Re.length === 1 && !Ze && Se.cancel(), Re;
							}),
						);
					if (
						!(await Promise.race([
							new Promise((Me) => {
								Ue.then(() => Me(!1));
							}),
							new Promise((Me) => {
								const De = setTimeout(() => {
									clearTimeout(De), Me(!0);
								}, 200);
							}),
						])) &&
						(await Ue).length === 1 &&
						this.ab.getValue($e.$fXc)
					) {
						const Me = (await Ue)[0];
						if (Me.task) {
							this.Hd(Me);
							return;
						}
					}
					const Ae = Ue.then(
						(Me) => (Me.push(...$e.$iXc.allSettingEntries(this.ab)), Me),
					);
					this.nb
						.pick(Ae, { placeHolder: o.localize(9618, null) }, ke)
						.then(async (Me) => {
							if (ke.isCancellationRequested) {
								const De = (await Ue)[0];
								De.task && (Me = De);
							}
							this.Hd(Me);
						});
				}
				Jd() {
					this.Pb === z.JsonSchemaVersion.V2_0_0
						? this.tasks().then((Te) => {
								if (Te.length === 0) {
									this.Id();
									return;
								}
								const Ee = [];
								let Ie, Be;
								this.od().then(async () => {
									const { globGroupTasks: Se } = await this.wd(
										z.TaskGroup.Build._id,
									);
									let ke = Se;
									ke?.length || (ke = this.ud(Te, !1));
									let Ue;
									if (ke.length === 1) {
										const Me = ke[0].configurationProperties.group;
										Me &&
											(typeof Me == "string" && z.TaskGroup.Build._id,
											(Ue = ke[0]));
									}
									for (const Me of Te)
										if (Me === Ue) {
											const De = o.localize(
												9619,
												null,
												$e.$iXc.getTaskLabelWithIcon(
													Me,
													Me.getQualifiedLabel(),
												),
											);
											(Ie = Me),
												(Be = {
													label: De,
													task: Me,
													description: this.getTaskDescription(Me),
													detail: this.hd()
														? Me.configurationProperties.detail
														: void 0,
												}),
												$e.$iXc.applyColorStyles(Me, Be, this.Gb);
										} else {
											const De = {
												label: $e.$iXc.getTaskLabelWithIcon(Me),
												task: Me,
												description: this.getTaskDescription(Me),
												detail: this.hd()
													? Me.configurationProperties.detail
													: void 0,
											};
											$e.$iXc.applyColorStyles(Me, De, this.Gb), Ee.push(De);
										}
									Be && Ee.unshift(Be);
									const Ae = new X.$Ce().token;
									this.nb
										.pick(Ee, { placeHolder: o.localize(9620, null) }, Ae)
										.then(async (Me) => {
											if (Ae.isCancellationRequested) {
												const Re = (await Ee)[0];
												Re.task && (Me = Re);
											}
											const De = Me && "task" in Me ? Me.task : void 0;
											De != null &&
												(De === Ie && z.$e4.is(De) && this.openConfig(De),
												z.$h4.is(De) ||
													this.customize(
														De,
														{ group: { kind: "build", isDefault: !0 } },
														!0,
													).then(() => {
														Ie &&
															De !== Ie &&
															!z.$h4.is(Ie) &&
															this.customize(Ie, { group: "build" }, !1);
													}));
										}),
										this.nb
											.pick(Ee, { placeHolder: o.localize(9621, null) })
											.then((Me) => {
												const De = Me && "task" in Me ? Me.task : void 0;
												De != null &&
													(De === Ie && z.$e4.is(De) && this.openConfig(De),
													z.$h4.is(De) ||
														this.customize(
															De,
															{ group: { kind: "build", isDefault: !0 } },
															!0,
														).then(() => {
															Ie &&
																De !== Ie &&
																!z.$h4.is(Ie) &&
																this.customize(Ie, { group: "build" }, !1);
														}));
											});
								});
							})
						: this.Id();
				}
				Kd() {
					this.Pb === z.JsonSchemaVersion.V2_0_0
						? this.tasks().then((Te) => {
								if (Te.length === 0) {
									this.Id();
									return;
								}
								let Ee, Ie;
								for (const Be of Te) {
									const Se = z.TaskGroup.from(Be.configurationProperties.group);
									if (Se && Se.isDefault && Se._id === z.TaskGroup.Test._id) {
										Ee = Be;
										break;
									}
								}
								Ee &&
									(Ie = {
										label: o.localize(9622, null, Ee.getQualifiedLabel()),
										task: Ee,
										detail: this.hd()
											? Ee.configurationProperties.detail
											: void 0,
									}),
									this.od().then(() => {
										this.ld(
											Te,
											o.localize(9623, null),
											void 0,
											!0,
											!1,
											Ie,
										).then((Be) => {
											const Se = Be ? Be.task : void 0;
											Se &&
												(Se === Ee && z.$e4.is(Se) && this.openConfig(Se),
												z.$h4.is(Se) ||
													this.customize(
														Se,
														{ group: { kind: "test", isDefault: !0 } },
														!0,
													).then(() => {
														Ee &&
															Se !== Ee &&
															!z.$h4.is(Ee) &&
															this.customize(Ee, { group: "test" }, !1);
													}));
										});
									});
							})
						: this.Id();
				}
				async runShowTasks() {
					const Te = this.getActiveTasks(),
						Ee = await Te;
					let Ie;
					Ee.length === 1
						? this.I.revealTask(Ee[0])
						: Ee.length &&
								Ee.every((Be) =>
									z.$h4.is(Be)
										? !1
										: (Ie || (Ie = Be.command.presentation?.group),
											Be.command.presentation?.group &&
												Be.command.presentation.group === Ie),
								)
							? this.I.revealTask(Ee[0])
							: this.ld(
									Te,
									o.localize(9624, null),
									{ label: o.localize(9625, null), task: null },
									!1,
									!0,
								).then((Be) => {
									const Se = Be ? Be.task : void 0;
									Se != null && this.I.revealTask(Se);
								});
				}
				async Ld(Te) {
					const Ee = Te.toResource(".vscode/tasks.json");
					if (await this.hb.exists(Ee)) {
						const Ie = Ee.with({ path: `${Ee.path}.old` });
						return await this.hb.copy(Ee, Ie, !0), [Ie, Ee];
					}
				}
				Md(Te, Ee, Ie) {
					if (!z.$e4.is(Te)) return;
					const Be = { label: Te._label },
						Se = new Set(["gulp", "jake", "grunt"]);
					n.$lg(Te.command.name) && Se.has(Te.command.name)
						? ((Be.type = Te.command.name), (Be.task = Te.command.args[0]))
						: (Te.command.runtime === z.RuntimeType.Shell &&
								(Be.type = z.RuntimeType.toString(z.RuntimeType.Shell)),
							Te.command.name &&
							!Ee &&
							!Ie.windows?.command &&
							!Ie.osx?.command &&
							!Ie.linux?.command
								? (Be.command = Te.command.name)
								: Ee && (Be.command = Te._source.config.element.command),
							Te.command.args &&
								(!Array.isArray(Te.command.args) ||
									Te.command.args.length > 0) &&
								(!Ie.windows?.args && !Ie.osx?.args && !Ie.linux?.args
									? (Be.args = Te.command.args)
									: (Be.args = Te._source.config.element.args))),
						Te.configurationProperties.presentation &&
							(Be.presentation = Te.configurationProperties.presentation),
						Te.configurationProperties.isBackground &&
							(Be.isBackground = Te.configurationProperties.isBackground),
						Te.configurationProperties.problemMatchers &&
							(Be.problemMatcher = Te._source.config.element.problemMatcher),
						Te.configurationProperties.group &&
							(Be.group = Te.configurationProperties.group),
						(Te._source.config.element = Be);
					const ke = new z.$e4(
							Te._id,
							Te._source,
							Te._label,
							Te.type,
							Te.command,
							Te.hasDefinedMatchers,
							Te.runOptions,
							Te.configurationProperties,
						),
						Ue = this.zc(ke);
					if (Ue) return Ue;
				}
				async Nd() {
					if (this.Pb === z.JsonSchemaVersion.V2_0_0) return;
					if (!this.Eb.isWorkspaceTrusted()) {
						this.D(
							i.Event.once(this.Eb.onDidChangeTrust)((Ie) => {
								Ie && this.Nd();
							}),
						);
						return;
					}
					const Te = await this.Nc(),
						Ee = [];
					for (const Ie of this.Mb) {
						const Be = await this.Ld(Ie);
						if ((Be && Ee.push(Be), !Be)) continue;
						const Se = [],
							ke = !!this.ab.getValue(
								z.TasksSchemaProperties.SuppressTaskName,
								{ resource: Ie.uri },
							),
							Ue = {
								windows: this.ab.getValue(z.TasksSchemaProperties.Windows, {
									resource: Ie.uri,
								}),
								osx: this.ab.getValue(z.TasksSchemaProperties.Osx, {
									resource: Ie.uri,
								}),
								linux: this.ab.getValue(z.TasksSchemaProperties.Linux, {
									resource: Ie.uri,
								}),
							};
						Te.get(Ie).forEach((qe) => {
							const Ae = this.Md(qe, ke, Ue);
							Ae && Se.push(Ae);
						}),
							(this.I = void 0),
							(this.G = void 0),
							await this.Ac(Ie, "tasks.tasks", Se),
							await this.Ac(Ie, "tasks.version", "2.0.0"),
							this.ab.getValue(z.TasksSchemaProperties.ShowOutput, {
								resource: Ie.uri,
							}) &&
								(await this.ab.updateValue(
									z.TasksSchemaProperties.ShowOutput,
									void 0,
									{ resource: Ie.uri },
								)),
							this.ab.getValue(z.TasksSchemaProperties.IsShellCommand, {
								resource: Ie.uri,
							}) &&
								(await this.ab.updateValue(
									z.TasksSchemaProperties.IsShellCommand,
									void 0,
									{ resource: Ie.uri },
								)),
							this.ab.getValue(z.TasksSchemaProperties.SuppressTaskName, {
								resource: Ie.uri,
							}) &&
								(await this.ab.updateValue(
									z.TasksSchemaProperties.SuppressTaskName,
									void 0,
									{ resource: Ie.uri },
								));
					}
					this.Tb(),
						this.vb.prompt(
							c.default.Warning,
							Ee.length === 1 ? o.localize(9626, null) : o.localize(9627, null),
							[
								{
									label:
										Ee.length === 1
											? o.localize(9628, null)
											: o.localize(9629, null),
									run: async () => {
										for (const Ie of Ee)
											await this.gb.openEditor({
												original: { resource: Ie[0] },
												modified: { resource: Ie[1] },
											});
									},
								},
							],
						);
				}
			};
			(e.$jXc = Ke),
				(e.$jXc =
					Ke =
					be =
						Ne(
							[
								j(0, b.$gj),
								j(1, l.$aM),
								j(2, R.$o8),
								j(3, fe.$6Sb),
								j(4, pe.$HMb),
								j(5, f.$ek),
								j(6, A.$IY),
								j(7, s.$ll),
								j(8, D.$Vi),
								j(9, v.$km),
								j(10, O.$kZ),
								j(11, L.$QO),
								j(12, I.$q2),
								j(13, G.$DJ),
								j(14, N.$zeb),
								j(15, B.$iIb),
								j(16, B.$lIb),
								j(17, $.$lq),
								j(18, y.$8N),
								j(19, k.$7rb),
								j(20, T.$GO),
								j(21, P.$4N),
								j(22, K.$6j),
								j(23, ye.$r8),
								j(24, U.$reb),
								j(25, me.$I8),
								j(26, ee.$MO),
								j(27, ve.$7Z),
								j(28, ae.$K1),
								j(29, re.$qO),
								j(30, re.$pO),
								j(31, Q.$ik),
								j(32, se.$iP),
								j(33, ue.$n6),
								j(34, ge.$$m),
								j(35, te.$Li),
							],
							Ke,
						));
		},
	);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	