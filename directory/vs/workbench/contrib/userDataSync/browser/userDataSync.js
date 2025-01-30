import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/uri.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/languages/language.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/userDataSync/common/userDataSync.js';
import '../../../common/editor.js';
import '../../../services/output/common/output.js';
import '../../../services/activity/common/activity.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/preferences/common/preferences.js';
import '../../../../base/common/date.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/opener/common/opener.js';
import '../../../services/authentication/common/authentication.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../common/views.js';
import './userDataSyncViews.js';
import '../../../services/userDataSync/common/userDataSync.js';
import '../../../../base/common/codicons.js';
import '../../../browser/parts/views/viewPaneContainer.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../services/host/browser/host.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
import '../../../services/textfile/common/textfiles.js';
import '../../mergeEditor/common/mergeEditor.js';
import '../../issue/common/issue.js';
import '../../../services/userDataProfile/common/userDataProfile.js';
import '../../../../base/common/platform.js';
define(
			de[4051],
			he([
				1, 0, 50, 29, 6, 3, 19, 9, 67, 61, 42, 4, 11, 31, 8, 57, 5, 40, 63, 32,
				150, 44, 297, 260, 18, 131, 275, 62, 41, 357, 30, 102, 60, 4050, 522,
				14, 239, 99, 87, 129, 85, 687, 376, 133, 12,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*actions*/,
				i /*errors*/,
				w /*event*/,
				E /*lifecycle*/,
				C /*resources*/,
				d /*uri*/,
				m /*model*/,
				r /*language*/,
				u /*resolverService*/,
				a /*nls*/,
				h /*actions*/,
				c /*commands*/,
				n /*contextkey*/,
				g /*dialogs*/,
				p /*instantiation*/,
				o /*notification*/,
				f /*quickInput*/,
				b /*telemetry*/,
				s /*userDataSync*/,
				l /*editor*/,
				y /*output*/,
				$ /*activity*/,
				v /*editorService*/,
				S /*preferences*/,
				I /*date*/,
				T /*productService*/,
				P /*opener*/,
				k /*authentication*/,
				L /*platform*/,
				D /*descriptors*/,
				M /*views*/,
				N /*userDataSyncViews*/,
				A /*userDataSync*/,
				R /*codicons*/,
				O /*viewPaneContainer*/,
				B /*actionCommonCategories*/,
				U /*host*/,
				z /*userDataProfile*/,
				F /*textfiles*/,
				x /*mergeEditor*/,
				H /*issue*/,
				q /*userDataProfile*/,
				V /*platform*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$e1c = void 0);
				const G = {
						id: "workbench.userDataSync.actions.turnOff",
						title: (0, a.localize2)(11313, "Turn Off"),
					},
					K = { id: A.$Xxc, title: (0, a.localize2)(11314, "Configure...") },
					J = "workbench.userDataSync.actions.showConflicts",
					W = {
						id: "workbench.userDataSync.actions.syncNow",
						title: (0, a.localize2)(11315, "Sync Now"),
						description(_) {
							if (_.status === s.SyncStatus.Syncing)
								return (0, a.localize)(11243, null);
							if (_.lastSyncTime)
								return (0, a.localize)(
									11244,
									null,
									(0, I.$dn)(_.lastSyncTime, !0),
								);
						},
					},
					X = {
						id: "workbench.userDataSync.actions.settings",
						title: (0, a.localize2)(11316, "Show Settings"),
					},
					Y = {
						id: "workbench.userDataSync.actions.showSyncedData",
						title: (0, a.localize2)(11317, "Show Synced Data"),
					},
					ie = new n.$5j("userDataSyncTurningOn", !1);
				let ne = class extends E.$1c {
					constructor(
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
						Fe,
						Oe,
						xe,
						He,
						Ke,
					) {
						super(),
							(this.g = te),
							(this.h = Q),
							(this.j = Z),
							(this.m = re),
							(this.n = le),
							(this.q = oe),
							(this.r = ae),
							(this.s = pe),
							(this.t = $e),
							(this.u = ye),
							(this.w = ue),
							(this.y = fe),
							(this.z = ge),
							(this.C = be),
							(this.F = Ce),
							(this.G = Le),
							(this.H = Fe),
							(this.I = Oe),
							(this.J = xe),
							(this.L = He),
							(this.M = Ke),
							(this.b = this.D(new E.$2c())),
							(this.f = this.D(new E.$2c())),
							(this.P = new Map()),
							(this.X = new Map()),
							(this.rb = this.D(new E.$2c())),
							(this.a = ie.bindTo(se)),
							Z.enabled &&
								((0, s.$NRb)(),
								this.bb(),
								this.ab(),
								this.Q(this.h.conflicts),
								this.D(
									w.Event.any(
										w.Event.debounce(Q.onDidChangeStatus, () => {}, 500),
										this.g.onDidChangeEnablement,
										this.j.onDidChangeAccountStatus,
									)(() => {
										this.bb(), this.ab();
									}),
								),
								this.D(Q.onDidChangeConflicts(() => this.Q(this.h.conflicts))),
								this.D(
									te.onDidChangeEnablement(() => this.Q(this.h.conflicts)),
								),
								this.D(Q.onSyncErrors((Je) => this.Y(Je))),
								this.D(me.onError((Je) => this.U(Je))),
								this.lb(),
								this.Db(),
								ve.registerTextModelContentProvider(
									s.$$Rb,
									ue.createInstance(ee),
								),
								this.D(
									w.Event.any(
										Q.onDidChangeStatus,
										te.onDidChangeEnablement,
									)(
										() =>
											(this.N =
												!te.isEnabled() && Q.status !== s.SyncStatus.Idle),
									),
								));
					}
					get N() {
						return !!this.a.get();
					}
					set N(te) {
						this.a.set(te), this.ab();
					}
					O({ syncResource: te, profile: Q }) {
						return `${Q.id}:${te}`;
					}
					Q(te) {
						if ((this.ab(), this.sb(), !!this.g.isEnabled()))
							if (te.length) {
								for (const [Q, Z] of this.P.entries())
									te.some((se) => this.O(se) === Q) ||
										(Z.dispose(), this.P.delete(Q));
								for (const Q of this.h.conflicts) {
									const Z = this.O(Q);
									if (!this.P.has(Z)) {
										const se = (0, A.$Oxc)(Q.syncResource),
											re = this.n.prompt(
												o.Severity.Warning,
												(0, a.localize)(11245, null, se.toLowerCase()),
												[
													{
														label: (0, a.localize)(11246, null),
														run: () => {
															this.C.publicLog2("sync/handleConflicts", {
																source: Q.syncResource,
																action: "acceptLocal",
															}),
																this.S(Q, Q.conflicts[0]);
														},
													},
													{
														label: (0, a.localize)(11247, null),
														run: () => {
															this.C.publicLog2("sync/handleConflicts", {
																source: Q.syncResource,
																action: "acceptRemote",
															}),
																this.R(Q, Q.conflicts[0]);
														},
													},
													{
														label: (0, a.localize)(11248, null),
														run: () => {
															this.C.publicLog2("sync/showConflicts", {
																source: Q.syncResource,
															}),
																this.j.showConflicts(Q.conflicts[0]);
														},
													},
												],
												{ sticky: !0 },
											);
										this.P.set(
											Z,
											(0, E.$Yc)(() => {
												re.close(), this.P.delete(Z);
											}),
										);
									}
								}
							} else this.P.forEach((Q) => Q.dispose()), this.P.clear();
					}
					async R(te, Q) {
						try {
							await this.h.accept(
								te,
								Q.remoteResource,
								void 0,
								this.g.isEnabled(),
							);
						} catch {
							this.n.error((0, a.localize)(11249, null, `command:${A.$Yxc}`));
						}
					}
					async S(te, Q) {
						try {
							await this.h.accept(
								te,
								Q.localResource,
								void 0,
								this.g.isEnabled(),
							);
						} catch {
							this.n.error((0, a.localize)(11250, null, `command:${A.$Yxc}`));
						}
					}
					U(te) {
						switch (te.code) {
							case s.UserDataSyncErrorCode.SessionExpired:
								this.n.notify({
									severity: o.Severity.Info,
									message: (0, a.localize)(11251, null),
									actions: {
										primary: [
											new t.$rj(
												"turn on sync",
												(0, a.localize)(11252, null),
												void 0,
												!0,
												() => this.cb(),
											),
										],
									},
								});
								break;
							case s.UserDataSyncErrorCode.TurnedOff:
								this.n.notify({
									severity: o.Severity.Info,
									message: (0, a.localize)(11253, null),
									actions: {
										primary: [
											new t.$rj(
												"turn on sync",
												(0, a.localize)(11254, null),
												void 0,
												!0,
												() => this.cb(),
											),
										],
									},
								});
								break;
							case s.UserDataSyncErrorCode.TooLarge:
								if (
									te.resource === s.SyncResource.Keybindings ||
									te.resource === s.SyncResource.Settings ||
									te.resource === s.SyncResource.Tasks
								) {
									this.ib(te.resource);
									const Q = (0, A.$Oxc)(te.resource);
									this.W(
										te.resource,
										(0, a.localize)(
											11255,
											null,
											Q.toLowerCase(),
											Q.toLowerCase(),
											"100kb",
										),
										te,
									);
								}
								break;
							case s.UserDataSyncErrorCode.LocalTooManyProfiles:
								this.ib(s.SyncResource.Profiles),
									this.n.error((0, a.localize)(11256, null));
								break;
							case s.UserDataSyncErrorCode.IncompatibleLocalContent:
							case s.UserDataSyncErrorCode.Gone:
							case s.UserDataSyncErrorCode.UpgradeRequired: {
								const Q = (0, a.localize)(
										11257,
										null,
										this.F.version,
										this.F.commit,
									),
									Z = te.operationId
										? (0, a.localize)(11258, null, te.operationId)
										: void 0;
								this.n.notify({
									severity: o.Severity.Error,
									message: Z ? `${Q} ${Z}` : Q,
								});
								break;
							}
							case s.UserDataSyncErrorCode.MethodNotFound: {
								const Q = (0, a.localize)(11259, null),
									Z = te.operationId
										? (0, a.localize)(11260, null, te.operationId)
										: void 0;
								this.n.notify({
									severity: o.Severity.Error,
									message: Z ? `${Q} ${Z}` : Q,
									actions: {
										primary: [
											new t.$rj(
												"Show Sync Logs",
												(0, a.localize)(11261, null),
												void 0,
												!0,
												() => this.L.executeCommand(A.$Yxc),
											),
											new t.$rj(
												"Report Issue",
												(0, a.localize)(11262, null),
												void 0,
												!0,
												() => this.M.openReporter(),
											),
										],
									},
								});
								break;
							}
							case s.UserDataSyncErrorCode.IncompatibleRemoteContent:
								this.n.notify({
									severity: o.Severity.Error,
									message: (0, a.localize)(11263, null),
									actions: {
										primary: [
											new t.$rj(
												"reset",
												(0, a.localize)(11264, null),
												void 0,
												!0,
												() => this.j.resetSyncedData(),
											),
											new t.$rj(
												"show synced data",
												(0, a.localize)(11265, null),
												void 0,
												!0,
												() => this.j.showSyncActivity(),
											),
										],
									},
								});
								return;
							case s.UserDataSyncErrorCode.ServiceChanged:
								this.n.notify({
									severity: o.Severity.Info,
									message:
										this.I.userDataSyncStore?.type === "insiders"
											? (0, a.localize)(11266, null)
											: (0, a.localize)(11267, null),
								});
								return;
							case s.UserDataSyncErrorCode.DefaultServiceChanged:
								this.g.isEnabled()
									? this.n.notify({
											severity: o.Severity.Info,
											message: (0, a.localize)(11268, null),
										})
									: this.n.notify({
											severity: o.Severity.Info,
											message: (0, a.localize)(11269, null, this.F.nameLong),
											actions: {
												primary: [
													new t.$rj(
														"turn on sync",
														(0, a.localize)(11270, null),
														void 0,
														!0,
														() => this.cb(),
													),
												],
											},
										});
								return;
						}
					}
					W(te, Q, Z) {
						const se = Z.operationId
							? (0, a.localize)(11271, null, Z.operationId)
							: void 0;
						this.n.notify({
							severity: o.Severity.Error,
							message: se ? `${Q} ${se}` : Q,
							actions: {
								primary: [
									new t.$rj(
										"open sync file",
										(0, a.localize)(11272, null, (0, A.$Oxc)(te)),
										void 0,
										!0,
										() =>
											te === s.SyncResource.Settings
												? this.z.openUserSettings({ jsonEditor: !0 })
												: this.z.openGlobalKeybindingSettings(!0),
									),
								],
							},
						});
					}
					Y(te) {
						if (te.length)
							for (const { profile: Q, syncResource: Z, error: se } of te)
								switch (se.code) {
									case s.UserDataSyncErrorCode.LocalInvalidContent:
										this.Z({ profile: Q, syncResource: Z });
										break;
									default: {
										const re = `${Q.id}:${Z}`,
											le = this.X.get(re);
										le && (le.dispose(), this.X.delete(re));
									}
								}
						else this.X.forEach((Q) => Q.dispose()), this.X.clear();
					}
					Z({ profile: te, syncResource: Q }) {
						if (this.s.currentProfile.id !== te.id) return;
						const Z = `${te.id}:${Q}`;
						if (
							this.X.has(Z) ||
							(Q !== s.SyncResource.Settings &&
								Q !== s.SyncResource.Keybindings &&
								Q !== s.SyncResource.Tasks) ||
							!this.J.hasFocus
						)
							return;
						const se =
								Q === s.SyncResource.Settings
									? this.s.currentProfile.settingsResource
									: Q === s.SyncResource.Keybindings
										? this.s.currentProfile.keybindingsResource
										: this.s.currentProfile.tasksResource,
							re = l.$A1.getCanonicalUri(this.q.activeEditor, {
								supportSideBySide: l.SideBySideEditor.PRIMARY,
							});
						if ((0, C.$gh)(se, re)) return;
						const le = (0, A.$Oxc)(Q),
							oe = this.n.notify({
								severity: o.Severity.Error,
								message: (0, a.localize)(11273, null, le.toLowerCase()),
								actions: {
									primary: [
										new t.$rj(
											"open sync file",
											(0, a.localize)(11274, null, le),
											void 0,
											!0,
											() =>
												Q === s.SyncResource.Settings
													? this.z.openUserSettings({ jsonEditor: !0 })
													: this.z.openGlobalKeybindingSettings(!0),
										),
									],
								},
							});
						this.X.set(
							Z,
							(0, E.$Yc)(() => {
								oe.close(), this.X.delete(Z);
							}),
						);
					}
					$() {
						return this.h.conflicts.reduce(
							(te, { conflicts: Q }) => te + Q.length,
							0,
						);
					}
					async ab() {
						this.b.clear();
						let te, Q;
						this.h.conflicts.length && this.g.isEnabled()
							? (te = new $.$8qc(this.$(), () =>
									(0, a.localize)(11275, null, A.$Pxc.value),
								))
							: this.N &&
								((te = new $.$0qc(() => (0, a.localize)(11276, null))),
								(Q = 1)),
							te &&
								(this.b.value = this.m.showGlobalActivity({
									badge: te,
									priority: Q,
								}));
					}
					async bb() {
						this.f.clear();
						let te;
						this.h.status !== s.SyncStatus.Uninitialized &&
							this.g.isEnabled() &&
							this.j.accountStatus === A.AccountStatus.Unavailable &&
							(te = new $.$8qc(1, () => (0, a.localize)(11277, null))),
							te &&
								(this.f.value = this.m.showAccountsActivity({
									badge: te,
									priority: void 0,
								}));
					}
					async cb() {
						try {
							if (!this.j.authenticationProviders.length)
								throw new Error((0, a.localize)(11278, null));
							if (!(await this.db())) return;
							this.I.userDataSyncStore?.canSwitch &&
								(await this.kb(this.I.userDataSyncStore)),
								await this.j.turnOn();
						} catch (te) {
							if ((0, i.$8)(te)) return;
							if (te instanceof s.$YRb) {
								switch (te.code) {
									case s.UserDataSyncErrorCode.TooLarge:
										if (
											te.resource === s.SyncResource.Keybindings ||
											te.resource === s.SyncResource.Settings ||
											te.resource === s.SyncResource.Tasks
										) {
											this.W(
												te.resource,
												(0, a.localize)(
													11279,
													null,
													(0, A.$Oxc)(te.resource).toLowerCase(),
													"100kb",
												),
												te,
											);
											return;
										}
										break;
									case s.UserDataSyncErrorCode.IncompatibleLocalContent:
									case s.UserDataSyncErrorCode.Gone:
									case s.UserDataSyncErrorCode.UpgradeRequired: {
										const Q = (0, a.localize)(
												11280,
												null,
												this.F.version,
												this.F.commit,
											),
											Z = te.operationId
												? (0, a.localize)(11281, null, te.operationId)
												: void 0;
										this.n.notify({
											severity: o.Severity.Error,
											message: Z ? `${Q} ${Z}` : Q,
										});
										return;
									}
									case s.UserDataSyncErrorCode.IncompatibleRemoteContent:
										this.n.notify({
											severity: o.Severity.Error,
											message: (0, a.localize)(11282, null),
											actions: {
												primary: [
													new t.$rj(
														"reset",
														(0, a.localize)(11283, null),
														void 0,
														!0,
														() => this.j.resetSyncedData(),
													),
													new t.$rj(
														"show synced data",
														(0, a.localize)(11284, null),
														void 0,
														!0,
														() => this.j.showSyncActivity(),
													),
												],
											},
										});
										return;
									case s.UserDataSyncErrorCode.Unauthorized:
									case s.UserDataSyncErrorCode.Forbidden:
										this.n.error((0, a.localize)(11285, null));
										return;
								}
								this.n.error((0, a.localize)(11286, null, `command:${A.$Yxc}`));
							} else this.n.error((0, a.localize)(11287, null, (0, i.$bb)(te)));
						}
					}
					async db() {
						return new Promise((te, Q) => {
							const Z = new E.$Zc(),
								se = this.u.createQuickPick();
							Z.add(se),
								(se.title = A.$Pxc.value),
								(se.ok = !1),
								(se.customButton = !0),
								(se.customLabel = (0, a.localize)(11288, null)),
								(se.description = (0, a.localize)(11289, null)),
								(se.canSelectMany = !0),
								(se.ignoreFocusOut = !0),
								(se.hideInput = !0),
								(se.hideCheckAll = !0);
							const re = this.eb();
							(se.items = re),
								(se.selectedItems = re.filter((oe) =>
									this.g.isResourceEnabled(oe.id),
								));
							let le = !1;
							Z.add(
								w.Event.any(
									se.onDidAccept,
									se.onDidCustom,
								)(() => {
									(le = !0), se.hide();
								}),
							),
								Z.add(
									se.onDidHide(() => {
										try {
											le && this.fb(re, se.selectedItems), te(le);
										} catch (oe) {
											Q(oe);
										} finally {
											Z.dispose();
										}
									}),
								),
								se.show();
						});
					}
					eb() {
						const te = [
							{
								id: s.SyncResource.Settings,
								label: (0, A.$Oxc)(s.SyncResource.Settings),
							},
							{
								id: s.SyncResource.Keybindings,
								label: (0, A.$Oxc)(s.SyncResource.Keybindings),
							},
							{
								id: s.SyncResource.Snippets,
								label: (0, A.$Oxc)(s.SyncResource.Snippets),
							},
							{
								id: s.SyncResource.Tasks,
								label: (0, A.$Oxc)(s.SyncResource.Tasks),
							},
							{
								id: s.SyncResource.GlobalState,
								label: (0, A.$Oxc)(s.SyncResource.GlobalState),
							},
							{
								id: s.SyncResource.Extensions,
								label: (0, A.$Oxc)(s.SyncResource.Extensions),
							},
						];
						return (
							this.r.isEnabled() &&
								te.push({
									id: s.SyncResource.Profiles,
									label: (0, A.$Oxc)(s.SyncResource.Profiles),
								}),
							te
						);
					}
					fb(te, Q) {
						for (const Z of te) {
							const se = this.g.isResourceEnabled(Z.id),
								re = !!Q.filter((le) => le.id === Z.id)[0];
							se !== re && this.g.setResourceEnablement(Z.id, re);
						}
					}
					async gb() {
						return new Promise((te, Q) => {
							const Z = new E.$Zc(),
								se = this.u.createQuickPick();
							Z.add(se),
								(se.title = (0, a.localize)(11290, null, A.$Pxc.value)),
								(se.placeholder = (0, a.localize)(11291, null)),
								(se.canSelectMany = !0),
								(se.ignoreFocusOut = !0),
								(se.ok = !0);
							const re = this.eb();
							(se.items = re),
								(se.selectedItems = re.filter((le) =>
									this.g.isResourceEnabled(le.id),
								)),
								Z.add(
									se.onDidAccept(async () => {
										se.selectedItems.length &&
											(this.fb(re, se.selectedItems), se.hide());
									}),
								),
								Z.add(
									se.onDidHide(() => {
										Z.dispose(), te();
									}),
								),
								se.show();
						});
					}
					async hb() {
						const te = await this.t.confirm({
							message: (0, a.localize)(11292, null),
							detail: (0, a.localize)(11293, null),
							primaryButton: (0, a.localize)(11294, null),
							checkbox:
								this.j.accountStatus === A.AccountStatus.Available
									? { label: (0, a.localize)(11295, null) }
									: void 0,
						});
						if (te.confirmed) return this.j.turnoff(!!te.checkboxChecked);
					}
					ib(te) {
						switch (te) {
							case s.SyncResource.Settings:
								return this.g.setResourceEnablement(
									s.SyncResource.Settings,
									!1,
								);
							case s.SyncResource.Keybindings:
								return this.g.setResourceEnablement(
									s.SyncResource.Keybindings,
									!1,
								);
							case s.SyncResource.Snippets:
								return this.g.setResourceEnablement(
									s.SyncResource.Snippets,
									!1,
								);
							case s.SyncResource.Tasks:
								return this.g.setResourceEnablement(s.SyncResource.Tasks, !1);
							case s.SyncResource.Extensions:
								return this.g.setResourceEnablement(
									s.SyncResource.Extensions,
									!1,
								);
							case s.SyncResource.GlobalState:
								return this.g.setResourceEnablement(
									s.SyncResource.GlobalState,
									!1,
								);
							case s.SyncResource.Profiles:
								return this.g.setResourceEnablement(
									s.SyncResource.Profiles,
									!1,
								);
						}
					}
					jb() {
						return this.y.showChannel(s.$0Rb);
					}
					async kb(te) {
						return new Promise((Q, Z) => {
							const se = new E.$Zc(),
								re = se.add(this.u.createQuickPick());
							(re.title = (0, a.localize)(11296, null, A.$Pxc.value)),
								(re.description = (0, a.localize)(11297, null)),
								(re.hideInput = !0),
								(re.ignoreFocusOut = !0);
							const le = (oe) => {
								if ((0, C.$gh)(oe, te.defaultUrl))
									return (0, a.localize)(11298, null);
							};
							(re.items = [
								{
									id: "insiders",
									label: (0, a.localize)(11299, null),
									description: le(te.insidersUrl),
								},
								{
									id: "stable",
									label: (0, a.localize)(11300, null),
									description: le(te.stableUrl),
								},
							]),
								se.add(
									re.onDidAccept(async () => {
										try {
											await this.I.switch(re.selectedItems[0].id), Q();
										} catch (oe) {
											Z(oe);
										} finally {
											re.hide();
										}
									}),
								),
								se.add(re.onDidHide(() => se.dispose())),
								re.show();
						});
					}
					lb() {
						this.g.canToggleEnablement() && (this.mb(), this.wb()),
							this.nb(),
							this.ob(),
							this.pb(),
							this.sb(),
							this.ub(),
							this.tb(),
							this.vb(),
							this.xb(),
							this.zb(),
							this.Ab(),
							this.yb(),
							this.Fb(),
							this.Bb(),
							V.$r && this.Cb();
					}
					mb() {
						const te = this,
							Q = n.$Kj.and(
								A.$Rxc.notEqualsTo(s.SyncStatus.Uninitialized),
								A.$Sxc.toNegated(),
								ie.negate(),
							);
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: "workbench.userDataSync.actions.turnOn",
											title: (0, a.localize2)(
												11318,
												"Backup and Sync Settings...",
											),
											category: A.$Pxc,
											f1: !0,
											precondition: Q,
											menu: [
												{
													group: "3_configuration",
													id: h.$XX.GlobalActivity,
													when: Q,
													order: 2,
												},
												{
													group: "3_configuration",
													id: h.$XX.MenubarPreferencesMenu,
													when: Q,
													order: 2,
												},
												{
													group: "1_settings",
													id: h.$XX.AccountsContext,
													when: Q,
													order: 2,
												},
											],
										});
									}
									async run() {
										return te.cb();
									}
								},
							),
						);
					}
					nb() {
						const te = n.$Kj.and(
							A.$Rxc.notEqualsTo(s.SyncStatus.Uninitialized),
							A.$Sxc.toNegated(),
							ie,
						);
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: "workbench.userData.actions.turningOn",
											title: (0, a.localize)(11301, null),
											precondition: n.$Kj.false(),
											menu: [
												{
													group: "3_configuration",
													id: h.$XX.GlobalActivity,
													when: te,
													order: 2,
												},
												{
													group: "1_settings",
													id: h.$XX.AccountsContext,
													when: te,
												},
											],
										});
									}
									async run() {}
								},
							),
						);
					}
					ob() {
						const te = this;
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: "workbench.userData.actions.cancelTurnOn",
											title: (0, a.localize)(11302, null),
											icon: R.$ak.stopCircle,
											menu: {
												id: h.$XX.ViewContainerTitle,
												when: n.$Kj.and(
													ie,
													n.$Kj.equals("viewContainer", A.$Zxc),
												),
												group: "navigation",
												order: 1,
											},
										});
									}
									async run() {
										return te.j.turnoff(!1);
									}
								},
							),
						);
					}
					pb() {
						const te = this,
							Q = "workbench.userData.actions.signin",
							Z = n.$Kj.and(
								A.$Rxc.notEqualsTo(s.SyncStatus.Uninitialized),
								A.$Sxc,
								A.$Txc.isEqualTo(A.AccountStatus.Unavailable),
							);
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: "workbench.userData.actions.signin",
											title: (0, a.localize)(11303, null),
											menu: {
												group: "3_configuration",
												id: h.$XX.GlobalActivity,
												when: Z,
												order: 2,
											},
										});
									}
									async run() {
										try {
											await te.j.signIn();
										} catch (re) {
											te.n.error(re);
										}
									}
								},
							),
						),
							this.D(
								h.$ZX.appendMenuItem(h.$XX.AccountsContext, {
									group: "1_settings",
									command: { id: Q, title: (0, a.localize)(11304, null) },
									when: Z,
								}),
							);
					}
					qb() {
						return (0, a.localize2)(11319, "Show Conflicts ({0})", this.$());
					}
					sb() {
						this.rb.value = void 0;
						const te = this;
						this.rb.value = (0, h.$4X)(
							class extends h.$3X {
								constructor() {
									super({
										id: J,
										get title() {
											return te.qb();
										},
										category: A.$Pxc,
										f1: !0,
										precondition: A.$Wxc,
										menu: [
											{
												group: "3_configuration",
												id: h.$XX.GlobalActivity,
												when: A.$Wxc,
												order: 2,
											},
											{
												group: "3_configuration",
												id: h.$XX.MenubarPreferencesMenu,
												when: A.$Wxc,
												order: 2,
											},
										],
									});
								}
								async run() {
									return te.j.showConflicts();
								}
							},
						);
					}
					tb() {
						const te = this,
							Q = n.$Kj.and(
								A.$Sxc,
								A.$Txc.isEqualTo(A.AccountStatus.Available),
								A.$Rxc.notEqualsTo(s.SyncStatus.Uninitialized),
							);
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: "workbench.userDataSync.actions.manage",
											title: (0, a.localize)(11305, null),
											toggled: n.$Pj.INSTANCE,
											menu: [
												{
													id: h.$XX.GlobalActivity,
													group: "3_configuration",
													when: Q,
													order: 2,
												},
												{
													id: h.$XX.MenubarPreferencesMenu,
													group: "3_configuration",
													when: Q,
													order: 2,
												},
												{
													id: h.$XX.AccountsContext,
													group: "1_settings",
													when: Q,
												},
											],
										});
									}
									run(se) {
										return new Promise((re, le) => {
											const oe = se.get(f.$DJ),
												ae = se.get(c.$ek),
												pe = new E.$Zc(),
												$e = oe.createQuickPick({ useSeparators: !0 });
											pe.add($e);
											const ye = [];
											if (
												(te.h.conflicts.length &&
													(ye.push({
														id: J,
														label: `${A.$Pxc.value}: ${te.qb().original}`,
													}),
													ye.push({ type: "separator" })),
												ye.push({
													id: K.id,
													label: `${A.$Pxc.value}: ${K.title.original}`,
												}),
												ye.push({
													id: X.id,
													label: `${A.$Pxc.value}: ${X.title.original}`,
												}),
												ye.push({
													id: Y.id,
													label: `${A.$Pxc.value}: ${Y.title.original}`,
												}),
												ye.push({ type: "separator" }),
												ye.push({
													id: W.id,
													label: `${A.$Pxc.value}: ${W.title.original}`,
													description: W.description(te.h),
												}),
												te.g.canToggleEnablement())
											) {
												const ue = te.j.current;
												ye.push({
													id: G.id,
													label: `${A.$Pxc.value}: ${G.title.original}`,
													description: ue
														? `${ue.accountName} (${te.H.getProvider(ue.authenticationProviderId).label})`
														: void 0,
												});
											}
											($e.items = ye),
												pe.add(
													$e.onDidAccept(() => {
														$e.selectedItems[0] &&
															$e.selectedItems[0].id &&
															ae.executeCommand($e.selectedItems[0].id),
															$e.hide();
													}),
												),
												pe.add(
													$e.onDidHide(() => {
														pe.dispose(), re();
													}),
												),
												$e.show();
										});
									}
								},
							),
						);
					}
					ub() {
						const te = this,
							Q = n.$Kj.and(
								A.$Txc.isEqualTo(A.AccountStatus.Available),
								A.$Rxc.notEqualsTo(s.SyncStatus.Uninitialized),
							);
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: Y.id,
											title: Y.title,
											category: A.$Pxc,
											precondition: Q,
											menu: { id: h.$XX.CommandPalette, when: Q },
										});
									}
									run(se) {
										return te.j.showSyncActivity();
									}
								},
							),
						);
					}
					vb() {
						const te = this;
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: W.id,
											title: W.title,
											category: A.$Pxc,
											menu: {
												id: h.$XX.CommandPalette,
												when: n.$Kj.and(
													A.$Sxc,
													A.$Txc.isEqualTo(A.AccountStatus.Available),
													A.$Rxc.notEqualsTo(s.SyncStatus.Uninitialized),
												),
											},
										});
									}
									run(Z) {
										return te.j.syncNow();
									}
								},
							),
						);
					}
					wb() {
						const te = this;
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: G.id,
											title: G.title,
											category: A.$Pxc,
											menu: {
												id: h.$XX.CommandPalette,
												when: n.$Kj.and(
													A.$Rxc.notEqualsTo(s.SyncStatus.Uninitialized),
													A.$Sxc,
												),
											},
										});
									}
									async run() {
										try {
											await te.hb();
										} catch (Z) {
											(0, i.$8)(Z) ||
												te.n.error(
													(0, a.localize)(11306, null, `command:${A.$Yxc}`),
												);
										}
									}
								},
							),
						);
					}
					xb() {
						const te = this,
							Q = n.$Kj.and(
								A.$Rxc.notEqualsTo(s.SyncStatus.Uninitialized),
								A.$Sxc,
							);
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: K.id,
											title: K.title,
											category: A.$Pxc,
											icon: R.$ak.settingsGear,
											tooltip: (0, a.localize)(11307, null),
											menu: [
												{ id: h.$XX.CommandPalette, when: Q },
												{
													id: h.$XX.ViewContainerTitle,
													when: n.$Kj.and(
														A.$Sxc,
														n.$Kj.equals("viewContainer", A.$Zxc),
													),
													group: "navigation",
													order: 2,
												},
											],
										});
									}
									run() {
										return te.gb();
									}
								},
							),
						);
					}
					yb() {
						const te = this;
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: A.$Yxc,
											title: (0, a.localize)(11308, null, A.$Pxc.value),
											tooltip: (0, a.localize)(11309, null),
											icon: R.$ak.output,
											menu: [
												{
													id: h.$XX.CommandPalette,
													when: n.$Kj.and(
														A.$Rxc.notEqualsTo(s.SyncStatus.Uninitialized),
													),
												},
												{
													id: h.$XX.ViewContainerTitle,
													when: n.$Kj.equals("viewContainer", A.$Zxc),
													group: "navigation",
													order: 1,
												},
											],
										});
									}
									run() {
										return te.jb();
									}
								},
							),
						);
					}
					zb() {
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: X.id,
											title: X.title,
											category: A.$Pxc,
											menu: {
												id: h.$XX.CommandPalette,
												when: n.$Kj.and(
													A.$Rxc.notEqualsTo(s.SyncStatus.Uninitialized),
												),
											},
										});
									}
									run(Q) {
										Q.get(S.$7Z).openUserSettings({
											jsonEditor: !1,
											query: "@tag:sync",
										});
									}
								},
							),
						);
					}
					Ab() {
						const te = this;
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: "workbench.userDataSync.actions.help",
											title: A.$Pxc,
											category: B.$ck.Help,
											menu: [
												{
													id: h.$XX.CommandPalette,
													when: n.$Kj.and(
														A.$Rxc.notEqualsTo(s.SyncStatus.Uninitialized),
													),
												},
											],
										});
									}
									run() {
										return te.G.open(
											d.URI.parse("https://aka.ms/vscode-settings-sync-help"),
										);
									}
								},
							),
						),
							h.$ZX.appendMenuItem(h.$XX.ViewContainerTitle, {
								command: {
									id: "workbench.userDataSync.actions.help",
									title: B.$ck.Help.value,
								},
								when: n.$Kj.equals("viewContainer", A.$Zxc),
								group: "1_help",
							});
					}
					Bb() {
						const te = this;
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: "workbench.userDataSync.actions.acceptMerges",
											title: (0, a.localize)(11310, null),
											menu: [
												{
													id: h.$XX.EditorContent,
													when: n.$Kj.and(
														x.$_Zb,
														n.$Kj.regex(x.$e1b.key, new RegExp(`^${s.$$Rb}:`)),
													),
												},
											],
										});
									}
									async run(Z, se) {
										const re = Z.get(F.$kZ);
										await re.save(se);
										const le = await re.read(se);
										await te.h.accept(this.a(se), se, le.value, !0);
									}
									a(Z) {
										const se = te.h.conflicts.find(({ conflicts: re }) =>
											re.some((le) => (0, C.$gh)(le.previewResource, Z)),
										);
										if (se) return se;
										throw new Error(`Unknown resource: ${Z.toString()}`);
									}
								},
							),
						);
					}
					Cb() {
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super(A.$2xc);
									}
									async run(Q) {
										const Z = Q.get(A.$Nxc),
											se = Q.get(o.$4N);
										(await Z.downloadSyncActivity()) &&
											se.info((0, a.localize)(11311, null));
									}
								},
							),
						);
					}
					Db() {
						const te = this.Eb();
						this.Gb(te);
					}
					Eb() {
						return L.$Io
							.as(M.Extensions.ViewContainersRegistry)
							.registerViewContainer(
								{
									id: A.$Zxc,
									title: A.$Pxc,
									ctorDescriptor: new D.$Ji(O.$ZSb, [
										A.$Zxc,
										{ mergeViewWithContainerWhenSingleView: !0 },
									]),
									icon: A.$Qxc,
									hideIfEmpty: !0,
								},
								M.ViewContainerLocation.Sidebar,
							);
					}
					Fb() {
						const te = this;
						this.D(
							(0, h.$4X)(
								class extends h.$3X {
									constructor() {
										super({
											id: "workbench.actions.syncData.reset",
											title: (0, a.localize)(11312, null),
											menu: [
												{
													id: h.$XX.ViewContainerTitle,
													when: n.$Kj.equals("viewContainer", A.$Zxc),
													group: "0_configure",
												},
											],
										});
									}
									run() {
										return te.j.resetSyncedData();
									}
								},
							),
						);
					}
					Gb(te) {
						this.D(this.w.createInstance(N.$d1c, te));
					}
				};
				(e.$e1c = ne),
					(e.$e1c = ne =
						Ne(
							[
								j(0, s.$4Rb),
								j(1, s.$5Rb),
								j(2, A.$Nxc),
								j(3, n.$6j),
								j(4, $.$7qc),
								j(5, o.$4N),
								j(6, v.$IY),
								j(7, z.$Xl),
								j(8, q.$P8),
								j(9, g.$GO),
								j(10, f.$DJ),
								j(11, p.$Li),
								j(12, y.$o8),
								j(13, s.$7Rb),
								j(14, u.$MO),
								j(15, S.$7Z),
								j(16, b.$km),
								j(17, T.$Bk),
								j(18, P.$7rb),
								j(19, k.$$7),
								j(20, s.$SRb),
								j(21, U.$asb),
								j(22, c.$ek),
								j(23, H.$7Xb),
							],
							ne,
						));
				let ee = class {
					constructor(te, Q, Z) {
						(this.a = te), (this.b = Q), (this.d = Z);
					}
					provideTextContent(te) {
						return te.scheme === s.$$Rb
							? this.a
									.resolveContent(te)
									.then((Q) =>
										this.b.createModel(Q || "", this.d.createById("jsonc"), te),
									)
							: null;
					}
				};
				ee = Ne([j(0, s.$5Rb), j(1, m.$QO), j(2, r.$nM)], ee);
			},
		),
		