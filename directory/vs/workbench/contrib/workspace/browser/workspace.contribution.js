import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../base/common/lifecycle.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/workspace/common/workspaceTrust.js';
import '../../../common/contributions.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../base/common/codicons.js';
import '../../../services/editor/common/editorService.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/commands/common/commands.js';
import '../../../services/statusbar/browser/statusbar.js';
import '../../../browser/editor.js';
import './workspaceTrustEditor.js';
import '../../../services/workspaces/browser/workspaceTrustEditorInput.js';
import '../../../services/workspaces/common/workspaceTrust.js';
import '../../../common/editor.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../base/common/path.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../base/common/htmlContent.js';
import '../../../../platform/storage/common/storage.js';
import '../../../services/host/browser/host.js';
import '../../../services/banner/browser/bannerService.js';
import '../../../../platform/workspace/common/virtualWorkspace.js';
import '../../extensions/common/extensions.js';
import '../../../services/environment/common/environmentService.js';
import '../../preferences/common/preferences.js';
import '../../../services/preferences/common/preferences.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/product/common/productService.js';
import '../common/workspace.js';
import '../../../../base/common/platform.js';
import '../../../services/remote/common/remoteAgentService.js';
import '../../../common/configuration.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/uri.js';
import '../../../../platform/environment/common/environment.js';
import '../../../../platform/files/common/files.js';
import '../../../../css!vs/workbench/contrib/workspace/browser/media/workspaceTrustEditor.js';
define(
			de[4360],
			he([
				1, 0, 102, 3, 4, 11, 81, 57, 5, 40, 30, 174, 55, 52, 14, 18, 8, 31, 166,
				192, 4359, 4002, 1059, 44, 32, 25, 54, 10, 94, 21, 87, 823, 349, 141,
				78, 468, 131, 73, 62, 1787, 12, 143, 224, 19, 9, 113, 22, 2534,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*descriptors*/,
				i /*lifecycle*/,
				w /*nls*/,
				E /*actions*/,
				C /*configurationRegistry*/,
				d /*dialogs*/,
				m /*instantiation*/,
				r /*notification*/,
				u /*platform*/,
				a /*workspaceTrust*/,
				h /*contributions*/,
				c /*lifecycle*/,
				n /*codicons*/,
				g /*editorService*/,
				p /*contextkey*/,
				o /*commands*/,
				f /*statusbar*/,
				b /*editor*/,
				s /*workspaceTrustEditor*/,
				l /*workspaceTrustEditorInput*/,
				y /*workspaceTrust*/,
				$ /*editor*/,
				v /*telemetry*/,
				S /*workspace*/,
				I /*path*/,
				T /*configuration*/,
				P /*htmlContent*/,
				k /*storage*/,
				L /*host*/,
				D /*bannerService*/,
				M /*virtualWorkspace*/,
				N /*extensions*/,
				A /*environmentService*/,
				R /*preferences*/,
				O /*preferences*/,
				B /*label*/,
				U /*productService*/,
				z /*workspace*/,
				F /*platform*/,
				x /*remoteAgentService*/,
				H /*configuration*/,
				q /*resources*/,
				V /*uri*/,
				G /*environment*/,
				K /*files*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$r2c = e.$q2c = e.$p2c = void 0);
				const J = "workbench.banner.restrictedMode",
					W = "workspace.trust.startupPrompt.shown",
					X = "workbench.banner.restrictedMode.dismissed";
				let Y = class extends i.$1c {
					constructor(se, re, le) {
						super(),
							(this.a = z.$eQc.IsEnabled.bindTo(se)),
							this.a.set(re.isWorkspaceTrustEnabled()),
							(this.c = z.$eQc.IsTrusted.bindTo(se)),
							this.c.set(le.isWorkspaceTrusted()),
							this.D(le.onDidChangeTrust((oe) => this.c.set(oe)));
					}
				};
				(e.$p2c = Y),
					(e.$p2c = Y = Ne([j(0, p.$6j), j(1, a.$oO), j(2, a.$pO)], Y)),
					u.$Io
						.as(h.Extensions.Workbench)
						.registerWorkbenchContribution(Y, c.LifecyclePhase.Restored);
				let ie = class extends i.$1c {
					static {
						this.ID = "workbench.contrib.workspaceTrustRequestHandler";
					}
					constructor(se, re, le, oe, ae) {
						super(),
							(this.a = se),
							(this.c = re),
							(this.f = le),
							(this.g = oe),
							(this.h = ae),
							this.m();
					}
					get j() {
						return !(0, S.$Wi)((0, S.$1i)(this.f.getWorkspace()));
					}
					m() {
						this.D(
							this.h.onDidInitiateOpenFilesTrustRequest(async () => {
								await this.g.workspaceResolved;
								const se = [
									this.f.getWorkbenchState() !== S.WorkbenchState.EMPTY
										? (0, w.localize)(11665, null)
										: (0, w.localize)(11666, null),
									(0, w.localize)(11667, null),
								];
								await this.a.prompt({
									type: r.Severity.Info,
									message:
										this.f.getWorkbenchState() !== S.WorkbenchState.EMPTY
											? (0, w.localize)(11668, null)
											: (0, w.localize)(11669, null),
									buttons: [
										{
											label: (0, w.localize)(11670, null),
											run: ({ checkboxChecked: re }) =>
												this.h.completeOpenFilesTrustRequest(
													a.WorkspaceTrustUriResponse.Open,
													!!re,
												),
										},
										{
											label: (0, w.localize)(11671, null),
											run: ({ checkboxChecked: re }) =>
												this.h.completeOpenFilesTrustRequest(
													a.WorkspaceTrustUriResponse.OpenInNewWindow,
													!!re,
												),
										},
									],
									cancelButton: {
										run: () =>
											this.h.completeOpenFilesTrustRequest(
												a.WorkspaceTrustUriResponse.Cancel,
											),
									},
									checkbox: {
										label: (0, w.localize)(11672, null),
										checked: !1,
									},
									custom: {
										icon: n.$ak.shield,
										markdownDetails: se.map((re) => ({
											markdown: new P.$cl(re),
										})),
									},
								});
							}),
						),
							this.D(
								this.h.onDidInitiateWorkspaceTrustRequest(async (se) => {
									await this.g.workspaceResolved;
									const re = this.j
											? (0, w.localize)(11673, null)
											: (0, w.localize)(11674, null),
										le = (0, w.localize)(11675, null),
										oe = se?.message ?? le,
										ae = se?.buttons ?? [
											{
												label: this.j
													? (0, w.localize)(11676, null)
													: (0, w.localize)(11677, null),
												type: "ContinueWithTrust",
											},
											{ label: (0, w.localize)(11678, null), type: "Manage" },
										];
									ae.some(($e) => $e.type === "Cancel") ||
										ae.push({
											label: (0, w.localize)(11679, null),
											type: "Cancel",
										});
									const { result: pe } = await this.a.prompt({
										type: r.Severity.Info,
										message: re,
										custom: {
											icon: n.$ak.shield,
											markdownDetails: [
												{ markdown: new P.$cl(oe) },
												{ markdown: new P.$cl((0, w.localize)(11680, null)) },
											],
										},
										buttons: ae
											.filter(($e) => $e.type !== "Cancel")
											.map(($e) => ({ label: $e.label, run: () => $e.type })),
										cancelButton: (() => {
											const $e = ae.find((ye) => ye.type === "Cancel");
											if ($e) return { label: $e.label, run: () => $e.type };
										})(),
									});
									switch (pe) {
										case "ContinueWithTrust":
											await this.h.completeWorkspaceTrustRequest(!0);
											break;
										case "ContinueWithoutTrust":
											await this.h.completeWorkspaceTrustRequest(void 0);
											break;
										case "Manage":
											this.h.cancelWorkspaceTrustRequest(),
												await this.c.executeCommand(z.$fQc);
											break;
										case "Cancel":
											this.h.cancelWorkspaceTrustRequest();
											break;
									}
								}),
							);
					}
				};
				(e.$q2c = ie),
					(e.$q2c = ie =
						Ne(
							[j(0, d.$GO), j(1, o.$ek), j(2, S.$Vi), j(3, a.$pO), j(4, a.$qO)],
							ie,
						));
				let ne = class extends i.$1c {
					constructor(
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
					) {
						super(),
							(this.f = se),
							(this.g = re),
							(this.h = le),
							(this.j = oe),
							(this.m = ae),
							(this.n = pe),
							(this.q = $e),
							(this.r = ye),
							(this.s = ue),
							(this.t = fe),
							(this.u = me),
							(this.w = ve),
							(this.y = ge),
							(this.z = be),
							(this.C = Ce),
							(this.a = "status.workspaceTrust"),
							(this.c = this.D(new i.$2c())),
							(async () => {
								if (
									(await this.j.workspaceTrustInitialized,
									this.h.isWorkspaceTrustEnabled())
								)
									if (
										(this.F(),
										this.S(this.j.isWorkspaceTrusted()),
										this.u.hasFocus)
									)
										this.I();
									else {
										const Le = this.u.onDidChangeFocus((Fe) => {
											Fe && (Le.dispose(), this.I());
										});
									}
							})();
					}
					F() {
						this.D(
							this.g.onWillChangeWorkspaceFolders((se) => {
								if (se.fromCache || !this.h.isWorkspaceTrustEnabled()) return;
								const re = async (le) => {
									if (
										this.j.isWorkspaceTrusted() &&
										(le.changes.added.length || le.changes.changed.length)
									) {
										const ae = await Promise.all(
											le.changes.added.map((pe) =>
												this.j.getUriTrustInfo(pe.uri),
											),
										);
										if (!ae.map((pe) => pe.trusted).every((pe) => pe)) {
											const { confirmed: pe } = await this.f.confirm({
												type: r.Severity.Info,
												message: (0, w.localize)(11681, null),
												detail: (0, w.localize)(11682, null),
												cancelButton: (0, w.localize)(11683, null),
												custom: { icon: n.$ak.shield },
											});
											await this.j.setUrisTrust(
												ae.map(($e) => $e.uri),
												pe,
											);
										}
									}
								};
								return se.join(re(se));
							}),
						),
							this.D(
								this.j.onDidChangeTrust((se) => {
									this.G(se);
								}),
							),
							this.D(
								this.r.onDidInitiateWorkspaceTrustRequestOnStartup(async () => {
									let se, re, le, oe;
									const ae = await this.M();
									ae && this.w.aiGeneratedWorkspaceTrust
										? ((se = this.w.aiGeneratedWorkspaceTrust.title),
											(re =
												this.w.aiGeneratedWorkspaceTrust
													.startupTrustRequestLearnMore),
											(le = this.w.aiGeneratedWorkspaceTrust.trustOption),
											(oe = this.w.aiGeneratedWorkspaceTrust.dontTrustOption))
										: console.warn(
												"AI generated workspace trust dialog contents not available.",
											);
									const pe =
										se ??
										(this.L
											? (0, w.localize)(11684, null)
											: (0, w.localize)(11685, null));
									let $e;
									const ye = (0, S.$1i)(this.g.getWorkspace()),
										ue = (0, S.$Wi)(ye),
										fe = (0, S.$Xi)(ye);
									if (!ae && this.j.canSetParentFolderTrust()) {
										const me = (0, q.$kh)((0, q.$mh)(ye.uri));
										$e = (0, w.localize)(11686, null, me);
									}
									this.H(
										pe,
										{
											label: le ?? (0, w.localize)(11687, null),
											sublabel: ue
												? (0, w.localize)(11688, null)
												: (0, w.localize)(11689, null),
										},
										{
											label: oe ?? (0, w.localize)(11690, null),
											sublabel: ue
												? (0, w.localize)(11691, null)
												: (0, w.localize)(11692, null),
										},
										[
											ue
												? (0, w.localize)(11694, null, this.w.nameShort)
												: (0, w.localize)(11693, null, this.w.nameShort),
											re ?? (0, w.localize)(11695, null),
											fe
												? ""
												: `\`${this.t.getWorkspaceLabel(ye, { verbose: B.Verbosity.LONG })}\``,
										],
										$e,
									);
								}),
							);
					}
					G(se) {
						const re = this.N(!se);
						this.S(se), re && (se ? this.s.hide(J) : this.s.show(re));
					}
					async H(se, re, le, oe, ae) {
						await this.f.prompt({
							type: r.Severity.Info,
							message: se,
							checkbox: ae ? { label: ae } : void 0,
							buttons: [
								{
									label: re.label,
									run: async ({ checkboxChecked: pe }) => {
										pe
											? await this.j.setParentFolderTrust(!0)
											: await this.r.completeWorkspaceTrustRequest(!0);
									},
								},
								{
									label: le.label,
									run: () => {
										this.G(!1), this.r.cancelWorkspaceTrustRequest();
									},
								},
							],
							custom: {
								buttonDetails: [re.sublabel, le.sublabel],
								disableCloseAction: !0,
								icon: n.$ak.shield,
								markdownDetails: oe.map((pe) => ({ markdown: new P.$cl(pe) })),
							},
						}),
							this.q.store(
								W,
								!0,
								k.StorageScope.WORKSPACE,
								k.StorageTarget.MACHINE,
							);
					}
					async I() {
						if (this.j.isWorkspaceTrusted()) {
							this.G(!0);
							return;
						}
						if (this.j.canSetWorkspaceTrust()) {
							if ((0, M.$H8)(this.g.getWorkspace())) {
								this.G(!1);
								return;
							}
							if (this.g.getWorkbenchState() === S.WorkbenchState.EMPTY) {
								this.G(!1);
								return;
							}
							if (this.J === "never") {
								this.G(!1);
								return;
							}
							if (
								this.J === "once" &&
								this.q.getBoolean(W, k.StorageScope.WORKSPACE, !1)
							) {
								this.G(!1);
								return;
							}
							this.r.requestWorkspaceTrustOnStartup();
						}
					}
					get J() {
						return this.m.getValue(y.$zSb);
					}
					get L() {
						return !(0, S.$Wi)((0, S.$1i)(this.g.getWorkspace()));
					}
					async M() {
						const se = V.URI.joinPath(
							this.z.workspaceStorageHome,
							"aiGeneratedWorkspaces.json",
						);
						return await this.C.exists(se).then(async (re) => {
							if (re)
								try {
									const le = await this.C.readFile(se);
									if (
										JSON.parse(le.value.toString()).indexOf(
											this.g.getWorkspace().folders[0].uri.toString(),
										) > -1
									)
										return !0;
								} catch {}
							return !1;
						});
					}
					N(se) {
						const re = this.q.getBoolean(X, k.StorageScope.WORKSPACE, !1);
						if (this.Q === "never" || (this.Q === "untilDismissed" && re))
							return;
						const le = [
							{
								label: (0, w.localize)(11696, null),
								href: "command:" + z.$fQc,
							},
							{
								label: (0, w.localize)(11697, null),
								href: "https://aka.ms/vscode-workspace-trust",
							},
						];
						return {
							id: J,
							icon: s.$n2c,
							ariaLabel: this.O(),
							message: this.P(),
							actions: le,
							onClose: () => {
								se &&
									this.q.store(
										X,
										!0,
										k.StorageScope.WORKSPACE,
										k.StorageTarget.MACHINE,
									);
							},
						};
					}
					O() {
						switch (this.g.getWorkbenchState()) {
							case S.WorkbenchState.EMPTY:
								return (0, w.localize)(11698, null);
							case S.WorkbenchState.FOLDER:
								return (0, w.localize)(11699, null);
							case S.WorkbenchState.WORKSPACE:
								return (0, w.localize)(11700, null);
						}
					}
					P() {
						switch (this.g.getWorkbenchState()) {
							case S.WorkbenchState.EMPTY:
								return (0, w.localize)(11701, null);
							case S.WorkbenchState.FOLDER:
								return (0, w.localize)(11702, null);
							case S.WorkbenchState.WORKSPACE:
								return (0, w.localize)(11703, null);
						}
					}
					get Q() {
						const se = this.m.getValue(y.$ASb);
						return se !== "always" &&
							F.$r &&
							!this.y.getConnection()?.remoteAuthority
							? "never"
							: se;
					}
					R() {
						let se = "",
							re;
						switch (this.g.getWorkbenchState()) {
							case S.WorkbenchState.EMPTY: {
								(se = (0, w.localize)(11704, null)),
									(re = {
										value: (0, w.localize)(
											11705,
											null,
											`command:${N.$YQb}`,
											`command:${z.$fQc}`,
										),
										isTrusted: !0,
										supportThemeIcons: !0,
									});
								break;
							}
							case S.WorkbenchState.FOLDER: {
								(se = (0, w.localize)(11706, null)),
									(re = {
										value: (0, w.localize)(
											11707,
											null,
											`command:${N.$YQb}`,
											`command:${z.$fQc}`,
										),
										isTrusted: !0,
										supportThemeIcons: !0,
									});
								break;
							}
							case S.WorkbenchState.WORKSPACE: {
								(se = (0, w.localize)(11708, null)),
									(re = {
										value: (0, w.localize)(
											11709,
											null,
											`command:${N.$YQb}`,
											`command:${z.$fQc}`,
										),
										isTrusted: !0,
										supportThemeIcons: !0,
									});
								break;
							}
						}
						return {
							name: (0, w.localize)(11710, null),
							text: `$(shield) ${(0, w.localize)(11711, null)}`,
							ariaLabel: se,
							tooltip: re,
							command: z.$fQc,
							kind: "prominent",
						};
					}
					S(se) {
						if (se && this.c.value) {
							this.c.clear();
							return;
						}
						if (!se && !this.c.value) {
							const re = this.R();
							this.c.value = this.n.addEntry(
								re,
								this.a,
								f.StatusbarAlignment.LEFT,
								0.99 * Number.MAX_VALUE,
							);
						}
					}
				};
				(e.$r2c = ne),
					(e.$r2c = ne =
						Ne(
							[
								j(0, d.$GO),
								j(1, S.$Vi),
								j(2, a.$oO),
								j(3, a.$pO),
								j(4, T.$gj),
								j(5, f.$d6b),
								j(6, k.$lq),
								j(7, a.$qO),
								j(8, D.$$uc),
								j(9, B.$3N),
								j(10, L.$asb),
								j(11, U.$Bk),
								j(12, x.$$m),
								j(13, G.$Ti),
								j(14, K.$ll),
							],
							ne,
						)),
					(0, h.$s6)(ie.ID, ie, h.WorkbenchPhase.BlockRestore),
					u.$Io
						.as(h.Extensions.Workbench)
						.registerWorkbenchContribution(ne, c.LifecyclePhase.Restored);
				class ee {
					canSerialize(se) {
						return !0;
					}
					serialize(se) {
						return "";
					}
					deserialize(se) {
						return se.createInstance(l.$m2c);
					}
				}
				u.$Io.as($.$a1.EditorFactory).registerEditorSerializer(l.$m2c.ID, ee),
					u.$Io
						.as($.$a1.EditorPane)
						.registerEditorPane(
							b.$vVb.create(s.$o2c, s.$o2c.ID, (0, w.localize)(11712, null)),
							[new t.$Ji(l.$m2c)],
						);
				const _ = "workbench.trust.configure",
					te = (0, w.localize2)(11727, "Workspaces");
				(0, E.$4X)(
					class extends E.$3X {
						constructor() {
							super({
								id: _,
								title: (0, w.localize2)(
									11728,
									"Configure Workspace Trust Settings",
								),
								precondition: p.$Kj.and(
									z.$eQc.IsEnabled,
									p.$Kj.equals(`config.${y.$ySb}`, !0),
								),
								category: te,
								f1: !0,
							});
						}
						run(Z) {
							Z.get(O.$7Z).openUserSettings({
								jsonEditor: !1,
								query: `@tag:${R.$VBc}`,
							});
						}
					},
				),
					(0, E.$4X)(
						class extends E.$3X {
							constructor() {
								super({
									id: z.$fQc,
									title: (0, w.localize2)(11729, "Manage Workspace Trust"),
									precondition: p.$Kj.and(
										z.$eQc.IsEnabled,
										p.$Kj.equals(`config.${y.$ySb}`, !0),
									),
									category: te,
									f1: !0,
								});
							}
							run(Z) {
								const se = Z.get(g.$IY),
									le = Z.get(m.$Li).createInstance(l.$m2c);
								se.openEditor(le, { pinned: !0 });
							}
						},
					),
					u.$Io
						.as(C.$No.Configuration)
						.registerConfiguration({
							...H.$w6,
							properties: {
								[y.$ySb]: {
									type: "boolean",
									default: !1,
									description: (0, w.localize)(11713, null),
									tags: [R.$VBc],
									scope: C.ConfigurationScope.APPLICATION,
								},
								[y.$zSb]: {
									type: "string",
									default: "once",
									description: (0, w.localize)(11714, null),
									tags: [R.$VBc],
									scope: C.ConfigurationScope.APPLICATION,
									enum: ["always", "once", "never"],
									enumDescriptions: [
										(0, w.localize)(11715, null),
										(0, w.localize)(11716, null),
										(0, w.localize)(11717, null),
									],
								},
								[y.$ASb]: {
									type: "string",
									default: "untilDismissed",
									description: (0, w.localize)(11718, null),
									tags: [R.$VBc],
									scope: C.ConfigurationScope.APPLICATION,
									enum: ["always", "untilDismissed", "never"],
									enumDescriptions: [
										(0, w.localize)(11719, null),
										(0, w.localize)(11720, null),
										(0, w.localize)(11721, null),
									],
								},
								[y.$BSb]: {
									type: "string",
									default: "prompt",
									markdownDescription: (0, w.localize)(11722, null, y.$CSb),
									tags: [R.$VBc],
									scope: C.ConfigurationScope.APPLICATION,
									enum: ["prompt", "open", "newWindow"],
									enumDescriptions: [
										(0, w.localize)(11723, null),
										(0, w.localize)(11724, null),
										(0, w.localize)(11725, null),
									],
								},
								[y.$CSb]: {
									type: "boolean",
									default: !0,
									markdownDescription: (0, w.localize)(11726, null, y.$BSb),
									tags: [R.$VBc],
									scope: C.ConfigurationScope.APPLICATION,
								},
							},
						});
				let Q = class extends i.$1c {
					constructor(se, re, le, oe, ae) {
						super(),
							(this.a = se),
							(this.c = re),
							(this.f = le),
							(this.g = oe),
							(this.h = ae),
							this.h.workspaceTrustInitialized.then(() => {
								this.j(),
									this.m(this.h.isWorkspaceTrusted()),
									this.D(this.h.onDidChangeTrust((pe) => this.m(pe)));
							});
					}
					j() {
						if (!this.g.isWorkspaceTrustEnabled()) {
							const se = this.a.disableWorkspaceTrust;
							this.c.publicLog2("workspaceTrustDisabled", {
								reason: se ? "cli" : "setting",
							});
							return;
						}
						this.c.publicLog2("workspaceTrustFolderCounts", {
							trustedFoldersCount: this.h.getTrustedUris().length,
						});
					}
					async m(se) {
						if (
							this.g.isWorkspaceTrustEnabled() &&
							(this.c.publicLog2("workspaceTrustStateChanged", {
								workspaceId: this.f.getWorkspace().id,
								isTrusted: se,
							}),
							se)
						) {
							const re = (le) => {
								let oe = (0, I.$pc)(le),
									ae = 0;
								for (; (0, I.$rc)(oe) !== oe && ae < 100; )
									(oe = (0, I.$rc)(oe)), ae++;
								return ae;
							};
							for (const le of this.f.getWorkspace().folders) {
								const { trusted: oe, uri: ae } = await this.h.getUriTrustInfo(
									le.uri,
								);
								if (!oe) continue;
								const pe = re(le.uri.fsPath),
									$e = re(ae.fsPath),
									ye = pe - $e;
								this.c.publicLog2("workspaceFolderDepthBelowTrustedFolder", {
									workspaceFolderDepth: pe,
									trustedFolderDepth: $e,
									delta: ye,
								});
							}
						}
					}
				};
				(Q = Ne(
					[j(0, A.$r8), j(1, v.$km), j(2, S.$Vi), j(3, a.$oO), j(4, a.$pO)],
					Q,
				)),
					u.$Io
						.as(h.Extensions.Workbench)
						.registerWorkbenchContribution(Q, c.LifecyclePhase.Restored);
			},
		),
		