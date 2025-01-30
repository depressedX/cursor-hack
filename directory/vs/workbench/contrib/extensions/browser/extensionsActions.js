import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/async.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/event.js';
import '../../../../base/common/json.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../base/common/lifecycle.js';
import '../common/extensions.js';
import '../common/extensionsFileTemplate.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../../services/extensionManagement/common/extensionManagement.js';
import '../../../services/extensionRecommendations/common/extensionRecommendations.js';
import '../../../../platform/extensionManagement/common/extensionManagementUtil.js';
import '../../../../platform/extensions/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../services/host/browser/host.js';
import '../../../services/extensions/common/extensions.js';
import '../../../../base/common/uri.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/common/themables.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../services/configuration/common/jsonEditing.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/actions/common/actions.js';
import '../../../browser/actions/workspaceCommands.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/opener/common/opener.js';
import '../../../services/editor/common/editorService.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../services/themes/common/workbenchThemeService.js';
import '../../../../platform/label/common/label.js';
import '../../../services/textfile/common/textfiles.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../base/browser/ui/actionbar/actionViewItems.js';
import '../../../services/extensionRecommendations/common/workspaceExtensionsConfig.js';
import '../../../../base/common/errors.js';
import '../../../../platform/userDataSync/common/userDataSync.js';
import '../../../../platform/log/common/log.js';
import './extensionsIcons.js';
import '../../../../base/common/platform.js';
import '../../../services/extensions/common/extensionManifestPropertiesService.js';
import '../../../../platform/workspace/common/workspaceTrust.js';
import '../../../../platform/workspace/common/virtualWorkspace.js';
import '../../../../base/common/htmlContent.js';
import '../../../services/panecomposite/browser/panecomposite.js';
import '../../../common/views.js';
import '../../../../base/common/date.js';
import '../../../services/preferences/common/preferences.js';
import '../../../../platform/languagePacks/common/languagePacks.js';
import '../../../services/localization/common/locale.js';
import '../../../../base/common/types.js';
import '../../../services/log/common/logConstants.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/extensionManagement/common/extensionGalleryService.js';
import '../../../services/extensionManagement/common/extensionFeatures.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/update/common/update.js';
import '../../../../base/browser/ui/dropdown/dropdownActionViewItem.js';
import '../../../../css!vs/workbench/contrib/extensions/browser/media/extensionActions.js';
define(
			de[404],
			he([
				1, 0, 4, 50, 15, 7, 6, 187, 49, 3, 141, 1731, 119, 157, 314, 154, 109,
				5, 22, 25, 87, 53, 9, 31, 10, 35, 26, 51, 423, 42, 8, 11, 633, 40, 41,
				18, 63, 33, 127, 333, 73, 85, 62, 57, 84, 198, 828, 29, 150, 34, 466,
				12, 384, 174, 349, 94, 142, 60, 275, 131, 672, 704, 28, 705, 32, 782,
				244, 30, 415, 437, 2435,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*actions*/,
				w /*async*/,
				E /*dom*/,
				C /*event*/,
				d /*json*/,
				m /*contextView*/,
				r /*lifecycle*/,
				u /*extensions*/,
				a /*extensionsFileTemplate*/,
				h /*extensionManagement*/,
				c /*extensionManagement*/,
				n /*extensionRecommendations*/,
				g /*extensionManagementUtil*/,
				p /*extensions*/,
				o /*instantiation*/,
				f /*files*/,
				b /*workspace*/,
				s /*host*/,
				l /*extensions*/,
				y /*uri*/,
				$ /*commands*/,
				v /*configuration*/,
				S /*themeService*/,
				I /*themables*/,
				T /*colorRegistry*/,
				P /*jsonEditing*/,
				k /*resolverService*/,
				L /*contextkey*/,
				D /*actions*/,
				M /*workspaceCommands*/,
				N /*notification*/,
				A /*opener*/,
				R /*editorService*/,
				O /*quickInput*/,
				B /*cancellation*/,
				U /*aria*/,
				z /*workbenchThemeService*/,
				F /*label*/,
				x /*textfiles*/,
				H /*productService*/,
				q /*dialogs*/,
				V /*progress*/,
				G /*actionViewItems*/,
				K /*workspaceExtensionsConfig*/,
				J /*errors*/,
				W /*userDataSync*/,
				X /*log*/,
				Y /*extensionsIcons*/,
				ie /*platform*/,
				ne /*extensionManifestPropertiesService*/,
				ee /*workspaceTrust*/,
				_ /*virtualWorkspace*/,
				te /*htmlContent*/,
				Q /*panecomposite*/,
				Z /*views*/,
				se /*date*/,
				re /*preferences*/,
				le /*languagePacks*/,
				oe /*locale*/,
				ae /*types*/,
				pe /*logConstants*/,
				$e /*telemetry*/,
				ye /*extensionGalleryService*/,
				ue /*extensionFeatures*/,
				fe /*platform*/,
				me /*update*/,
				ve /*dropdownActionViewItem*/,
) {
				"use strict";
				var ge,
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
					bt;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1Tb =
						e.$ZTb =
						e.$YTb =
						e.$XTb =
						e.$WTb =
						e.$VTb =
						e.$UTb =
						e.$TTb =
						e.$STb =
						e.$RTb =
						e.$QTb =
						e.$PTb =
						e.$OTb =
						e.$NTb =
						e.$MTb =
						e.$LTb =
						e.$KTb =
						e.$JTb =
						e.$ITb =
						e.$HTb =
						e.$GTb =
						e.$FTb =
						e.$ETb =
						e.$DTb =
						e.$CTb =
						e.$BTb =
						e.$ATb =
						e.$zTb =
						e.$yTb =
						e.$xTb =
						e.$wTb =
						e.$vTb =
						e.$uTb =
						e.$tTb =
						e.$sTb =
						e.$qTb =
						e.$pTb =
						e.$oTb =
						e.$nTb =
						e.$mTb =
						e.$lTb =
						e.$kTb =
						e.$jTb =
						e.$iTb =
						e.$hTb =
						e.$gTb =
						e.$fTb =
						e.$eTb =
						e.$dTb =
						e.$cTb =
						e.$bTb =
						e.$aTb =
						e.$_Sb =
							void 0),
					(e.$rTb = Bt),
					(E = mt(E)),
					(d = mt(d));
				let nt = class extends i.$rj {
					constructor(Tt, qt, At, Yt, ni, bi, fi, Ti, wt, We, _e, Si, gi, ki) {
						super("extension.promptExtensionInstallFailure"),
							(this.f = Tt),
							(this.g = qt),
							(this.h = At),
							(this.t = Yt),
							(this.L = ni),
							(this.M = bi),
							(this.N = fi),
							(this.O = Ti),
							(this.P = wt),
							(this.Q = We),
							(this.R = _e),
							(this.S = Si),
							(this.U = gi),
							(this.W = ki);
					}
					async run() {
						if ((0, J.$8)(this.t)) return;
						if (
							(this.Q.error(this.t),
							this.t.name === h.ExtensionManagementErrorCode.Unsupported)
						) {
							const bi = ie.$r
									? (0, t.localize)(6238, null, this.L.nameLong)
									: this.L.nameLong,
								fi = (0, t.localize)(
									6239,
									null,
									this.f.displayName || this.f.identifier.id,
									bi,
								),
								{ confirmed: Ti } = await this.O.confirm({
									type: N.Severity.Info,
									message: fi,
									primaryButton: (0, t.localize)(6240, null),
									cancelButton: (0, t.localize)(6241, null),
								});
							Ti &&
								this.M.open(
									ie.$r
										? y.URI.parse("https://aka.ms/vscode-web-extensions-guide")
										: y.URI.parse("https://aka.ms/vscode-remote"),
								);
							return;
						}
						if (
							h.ExtensionManagementErrorCode.ReleaseVersionNotFound ===
							this.t.name
						) {
							await this.O.prompt({
								type: "error",
								message: (0, J.$bb)(this.t),
								buttons: [
									{
										label: (0, t.localize)(6242, null),
										run: () => {
											const bi = this.S.createInstance(ht, {
												installPreReleaseVersion: !0,
											});
											return (bi.extension = this.f), bi.run();
										},
									},
								],
								cancelButton: (0, t.localize)(6243, null),
							});
							return;
						}
						if (
							[
								h.ExtensionManagementErrorCode.Incompatible,
								h.ExtensionManagementErrorCode.IncompatibleApi,
								h.ExtensionManagementErrorCode.IncompatibleTargetPlatform,
								h.ExtensionManagementErrorCode.Malicious,
								h.ExtensionManagementErrorCode.Deprecated,
							].includes(this.t.name)
						) {
							await this.O.info((0, J.$bb)(this.t));
							return;
						}
						if (h.ExtensionManagementErrorCode.Signature === this.t.name) {
							await this.O.prompt({
								type: "error",
								message: (0, t.localize)(
									6244,
									null,
									this.L.nameLong,
									this.f.displayName || this.f.identifier.id,
								),
								buttons: [
									{
										label: (0, t.localize)(6245, null),
										run: () => {
											const bi = this.S.createInstance(ht, {
												donotVerifySignature: !0,
											});
											return (bi.extension = this.f), bi.run();
										},
									},
								],
								cancelButton: (0, t.localize)(6246, null),
							});
							return;
						}
						const Tt =
							this.h === h.InstallOperation.Update
								? (0, t.localize)(
										6247,
										null,
										this.f.displayName || this.f.identifier.id,
									)
								: (0, t.localize)(
										6248,
										null,
										this.f.displayName || this.f.identifier.id,
									);
						let qt;
						const At = [],
							Yt = await this.X();
						Yt &&
							((qt = (0, t.localize)(6249, null, `command:${pe.$0Sb}`)),
							At.push({
								label: (0, t.localize)(6250, null),
								run: () =>
									this.M.open(Yt).then(() => {
										this.N.prompt(
											N.Severity.Info,
											(0, t.localize)(6251, null, this.f.identifier.id),
											[
												{
													label: (0, t.localize)(6252, null),
													run: () => this.P.executeCommand(u.$WQb),
												},
											],
										);
									}),
							}));
						const ni = `${Tt}${qt ? ` ${qt}` : ""}`;
						this.N.prompt(N.Severity.Error, ni, At);
					}
					async X() {
						if (
							ie.$u ||
							!this.f.gallery ||
							!this.L.extensionsGallery ||
							(!this.R.localExtensionManagementServer &&
								!this.R.remoteExtensionManagementServer)
						)
							return;
						let Tt = this.f.gallery.properties.targetPlatform;
						if (
							Tt !== p.TargetPlatform.UNIVERSAL &&
							Tt !== p.TargetPlatform.UNDEFINED &&
							this.R.remoteExtensionManagementServer
						)
							try {
								const qt = await this.U.getManifest(
									this.f.gallery,
									B.CancellationToken.None,
								);
								qt &&
									this.W.prefersExecuteOnWorkspace(qt) &&
									(Tt =
										await this.R.remoteExtensionManagementServer.extensionManagementService.getTargetPlatform());
							} catch (qt) {
								this.Q.error(qt);
								return;
							}
						if (Tt !== p.TargetPlatform.UNKNOWN)
							return y.URI.parse(
								`${this.L.extensionsGallery.serviceUrl}/publishers/${this.f.publisher}/vsextensions/${this.f.name}/${this.g}/vspackage${Tt !== p.TargetPlatform.UNDEFINED ? `?targetPlatform=${Tt}` : ""}`,
							);
					}
				};
				(e.$_Sb = nt),
					(e.$_Sb = nt =
						Ne(
							[
								j(4, H.$Bk),
								j(5, A.$7rb),
								j(6, N.$4N),
								j(7, q.$GO),
								j(8, $.$ek),
								j(9, X.$ik),
								j(10, c.$EQb),
								j(11, o.$Li),
								j(12, h.$Ep),
								j(13, ne.$JSb),
							],
							nt,
						));
				class lt extends i.$rj {
					constructor() {
						super(...arguments),
							(this.j = this.D(new C.$re())),
							(this.onDidChange = this.j.event),
							(this.g = null),
							(this.h = !1),
							(this.L = !0);
					}
					static {
						this.EXTENSION_ACTION_CLASS = "extension-action";
					}
					static {
						this.TEXT_ACTION_CLASS = `${lt.EXTENSION_ACTION_CLASS} text`;
					}
					static {
						this.LABEL_ACTION_CLASS = `${lt.EXTENSION_ACTION_CLASS} label`;
					}
					static {
						this.PROMINENT_LABEL_ACTION_CLASS = `${lt.LABEL_ACTION_CLASS} prominent`;
					}
					static {
						this.ICON_ACTION_CLASS = `${lt.EXTENSION_ACTION_CLASS} icon`;
					}
					get extension() {
						return this.g;
					}
					set extension(Tt) {
						(this.g = Tt), this.update();
					}
					get hidden() {
						return this.h;
					}
					set hidden(Tt) {
						this.h !== Tt && ((this.h = Tt), this.j.fire({ hidden: Tt }));
					}
					I(Tt) {
						super.I(Tt), this.L && (this.hidden = !Tt);
					}
				}
				e.$aTb = lt;
				class ct extends lt {
					get menuActions() {
						return [...this.N];
					}
					get extension() {
						return super.extension;
					}
					set extension(Tt) {
						this.O.forEach((qt) => (qt.extension = Tt)), (super.extension = Tt);
					}
					constructor(Tt, qt, At) {
						(qt = `${qt} action-dropdown`),
							super(Tt, void 0, qt),
							(this.P = At),
							(this.menuActionClassNames = []),
							(this.N = []),
							(this.menuActionClassNames = qt.split(" ")),
							(this.L = !1),
							(this.O = At.flat()),
							this.update(),
							this.D(
								C.Event.any(...this.O.map((Yt) => Yt.onDidChange))(() =>
									this.update(!0),
								),
							),
							this.O.forEach((Yt) => this.D(Yt));
					}
					update(Tt) {
						Tt || this.O.forEach((Yt) => Yt.update());
						const qt = this.P.map((Yt) => Yt.filter((ni) => !ni.hidden));
						let At = [];
						for (const Yt of qt)
							Yt.length && (At = [...At, ...Yt, new i.$tj()]);
						(At = At.length ? At.slice(0, At.length - 1) : At),
							(this.M = At[0]),
							(this.N = At.length > 1 ? At : []),
							this.j.fire({ menuActions: this.N }),
							this.M
								? ((this.hidden = !1),
									(this.enabled = this.M.enabled),
									(this.label = this.Q(this.M)),
									(this.tooltip = this.M.tooltip))
								: ((this.hidden = !0), (this.enabled = !1));
					}
					async run() {
						this.enabled && (await this.M?.run());
					}
					Q(Tt) {
						return Tt.label;
					}
				}
				e.$bTb = ct;
				class gt extends ve.$Qob {
					constructor(Tt, qt, At) {
						super(null, Tt, qt, At),
							this.D(
								Tt.onDidChange((Yt) => {
									(Yt.hidden !== void 0 || Yt.menuActions !== void 0) &&
										this.G();
								}),
							);
					}
					render(Tt) {
						super.render(Tt), this.G();
					}
					G() {
						if ((super.G(), this.element && this.g?.element)) {
							this.element.classList.toggle("hide", this._action.hidden);
							const Tt = this._action.menuActions.length === 0;
							this.element.classList.toggle("empty", Tt),
								this.g.element.classList.toggle("hide", Tt);
						}
					}
				}
				e.$cTb = gt;
				let ht = class extends lt {
					static {
						ge = this;
					}
					static {
						this.CLASS = `${this.LABEL_ACTION_CLASS} prominent install`;
					}
					static {
						this.M = `${this.CLASS} hide`;
					}
					set manifest(Tt) {
						(this.N = Tt), this.db();
					}
					constructor(Tt, qt, At, Yt, ni, bi, fi, Ti, wt, We) {
						super(
							"extensions.install",
							(0, t.localize)(6253, null),
							ge.CLASS,
							!1,
						),
							(this.P = qt),
							(this.Q = At),
							(this.R = Yt),
							(this.S = ni),
							(this.U = bi),
							(this.W = fi),
							(this.X = Ti),
							(this.Y = wt),
							(this.Z = We),
							(this.N = null),
							(this.O = new w.$Gh()),
							(this.L = !1),
							(this.options = { isMachineScoped: !1, ...Tt }),
							this.update(),
							this.D(this.U.onDidChangeFormatters(() => this.db(), this));
					}
					update() {
						this.O.queue(() => this.$());
					}
					async $() {
						(this.enabled = !1),
							(this.class = ge.M),
							(this.hidden = !0),
							this.extension &&
								(this.extension.isBuiltin ||
									this.P.canSetLanguage(this.extension) ||
									(this.extension.state === u.ExtensionState.Uninstalled &&
										((this.options.installPreReleaseVersion &&
											!this.extension.hasPreReleaseVersion) ||
											(!this.options.installPreReleaseVersion &&
												!this.extension.hasReleaseVersion) ||
											((this.hidden = !1),
											(this.class = ge.CLASS),
											(await this.P.canInstall(this.extension)) &&
												((this.enabled = !0), this.db())))));
					}
					async run() {
						if (!this.extension) return;
						if (this.extension.deprecationInfo) {
							let qt = (0, t.localize)(6254, null),
								At;
							(function (bi) {
								(bi[(bi.InstallAnyway = 0)] = "InstallAnyway"),
									(bi[(bi.ShowAlternateExtension = 1)] =
										"ShowAlternateExtension"),
									(bi[(bi.ConfigureSettings = 2)] = "ConfigureSettings"),
									(bi[(bi.Cancel = 3)] = "Cancel");
							})(At || (At = {}));
							const Yt = [
								{
									label: (0, t.localize)(6255, null),
									run: () => At.InstallAnyway,
								},
							];
							if (this.extension.deprecationInfo.extension) {
								qt = (0, t.localize)(
									6256,
									null,
									this.extension.deprecationInfo.extension.displayName,
								);
								const bi = this.extension.deprecationInfo.extension;
								Yt.push({
									label: (0, t.localize)(
										6257,
										null,
										this.extension.deprecationInfo.extension.displayName,
									),
									run: async () => {
										const [fi] = await this.P.getExtensions(
											[{ id: bi.id, preRelease: bi.preRelease }],
											B.CancellationToken.None,
										);
										return await this.P.open(fi), At.ShowAlternateExtension;
									},
								});
							} else if (this.extension.deprecationInfo.settings) {
								qt = (0, t.localize)(6258, null);
								const bi = this.extension.deprecationInfo.settings;
								Yt.push({
									label: (0, t.localize)(6259, null),
									run: async () => (
										await this.X.openSettings({
											query: bi.map((fi) => `@id:${fi}`).join(" "),
										}),
										At.ConfigureSettings
									),
								});
							} else
								this.extension.deprecationInfo.additionalInfo &&
									(qt = new te.$cl(
										`${qt} ${this.extension.deprecationInfo.additionalInfo}`,
									));
							const { result: ni } = await this.W.prompt({
								type: N.Severity.Warning,
								message: (0, t.localize)(
									6260,
									null,
									this.extension.displayName,
								),
								detail: (0, ae.$lg)(qt) ? qt : void 0,
								custom: (0, ae.$lg)(qt)
									? void 0
									: { markdownDetails: [{ markdown: qt }] },
								buttons: Yt,
								cancelButton: { run: () => At.Cancel },
							});
							if (ni !== At.InstallAnyway) return;
						}
						this.P.open(this.extension, {
							showPreReleaseVersion: this.options.installPreReleaseVersion,
						}),
							(0, U.$oib)(
								(0, t.localize)(6261, null, this.extension.displayName),
							),
							this.Y.publicLog("extensions:action:install", {
								...this.extension.telemetryData,
								actionId: this.id,
							});
						const Tt = await this.bb(this.extension);
						if (Tt?.local) {
							(0, U.$oib)(
								(0, t.localize)(6262, null, this.extension.displayName),
							);
							const qt = await this.cb(Tt.local);
							if (
								qt &&
								!(
									qt.activationEvents &&
									qt.activationEvents.some((At) => At.startsWith("onLanguage"))
								)
							) {
								const At = await this.ab(Tt);
								if (At) {
									At.extension = Tt;
									try {
										return At.run({
											showCurrentTheme: !0,
											ignoreFocusLost: !0,
										});
									} finally {
										At.dispose();
									}
								}
							}
						}
					}
					async ab(Tt) {
						if ((await this.S.getColorThemes()).some((ni) => $i(ni, Tt)))
							return this.Q.createInstance(tt);
						if ((await this.S.getFileIconThemes()).some((ni) => $i(ni, Tt)))
							return this.Q.createInstance(at);
						if ((await this.S.getProductIconThemes()).some((ni) => $i(ni, Tt)))
							return this.Q.createInstance(pi);
					}
					async bb(Tt) {
						try {
							return await this.P.install(Tt, this.options);
						} catch (qt) {
							await this.Q.createInstance(
								nt,
								Tt,
								Tt.latestVersion,
								h.InstallOperation.Install,
								qt,
							).run();
							return;
						}
					}
					async cb(Tt) {
						const qt = await this.R.getExtension(Tt.identifier.id);
						return (
							qt ||
							(this.R.canAddExtension((0, l.$y2)(Tt))
								? new Promise((At, Yt) => {
										const ni = this.R.onDidChangeExtensions(async () => {
											const bi = await this.R.getExtension(Tt.identifier.id);
											bi && (ni.dispose(), At(bi));
										});
									})
								: null)
						);
					}
					db() {
						this.label = this.getLabel();
					}
					getLabel(Tt) {
						return this.extension?.isWorkspaceScoped &&
							this.extension.resourceExtension &&
							this.Z.isInsideWorkspace(
								this.extension.resourceExtension.location,
							)
							? (0, t.localize)(6263, null)
							: this.options.installPreReleaseVersion &&
									this.extension?.hasPreReleaseVersion
								? Tt
									? (0, t.localize)(6264, null)
									: (0, t.localize)(6265, null)
								: this.extension?.hasPreReleaseVersion
									? Tt
										? (0, t.localize)(6266, null)
										: (0, t.localize)(6267, null)
									: (0, t.localize)(6268, null);
					}
				};
				(e.$dTb = ht),
					(e.$dTb =
						ht =
						ge =
							Ne(
								[
									j(1, u.$MQb),
									j(2, o.$Li),
									j(3, l.$q2),
									j(4, z.$rRb),
									j(5, F.$3N),
									j(6, q.$GO),
									j(7, re.$7Z),
									j(8, $e.$km),
									j(9, b.$Vi),
								],
								ht,
							));
				let Rt = class extends ct {
					set manifest(Tt) {
						this.O.forEach((qt) => (qt.manifest = Tt)), this.update();
					}
					constructor(Tt, qt) {
						super("extensions.installActions", ht.CLASS, [
							[
								Tt.createInstance(ht, {
									installPreReleaseVersion: qt.preferPreReleases,
								}),
								Tt.createInstance(ht, {
									installPreReleaseVersion: !qt.preferPreReleases,
								}),
							],
						]);
					}
					Q(Tt) {
						return Tt.getLabel(!0);
					}
				};
				(e.$eTb = Rt), (e.$eTb = Rt = Ne([j(0, o.$Li), j(1, u.$MQb)], Rt));
				class Nt extends lt {
					static {
						this.M = (0, t.localize)(6269, null);
					}
					static {
						this.N = `${lt.LABEL_ACTION_CLASS} install installing`;
					}
					constructor() {
						super("extension.installing", Nt.M, Nt.N, !1);
					}
					update() {
						this.class = `${Nt.N}${this.extension && this.extension.state === u.ExtensionState.Installing ? "" : " hide"}`;
					}
				}
				e.$fTb = Nt;
				let jt = class extends lt {
					static {
						be = this;
					}
					static {
						this.M = (0, t.localize)(6270, null);
					}
					static {
						this.N = (0, t.localize)(6271, null);
					}
					static {
						this.O = `${lt.LABEL_ACTION_CLASS} prominent install-other-server`;
					}
					static {
						this.P = `${lt.LABEL_ACTION_CLASS} install-other-server installing`;
					}
					constructor(Tt, qt, At, Yt, ni, bi) {
						super(Tt, be.M, be.O, !1),
							(this.Q = qt),
							(this.R = At),
							(this.S = Yt),
							(this.U = ni),
							(this.W = bi),
							(this.updateWhenCounterExtensionChanges = !0),
							this.update();
					}
					update() {
						if (((this.enabled = !1), (this.class = be.O), this.X())) {
							const Tt = this.S.installed.filter(
								(qt) =>
									(0, g.$7p)(qt.identifier, this.extension.identifier) &&
									qt.server === this.Q,
							)[0];
							Tt
								? Tt.state === u.ExtensionState.Installing &&
									!Tt.local &&
									((this.enabled = !0),
									(this.label = be.N),
									(this.class = be.P))
								: ((this.enabled = !0), (this.label = this.Y()));
						}
					}
					X() {
						return !this.extension ||
							!this.Q ||
							!this.extension.local ||
							this.extension.state !== u.ExtensionState.Installed ||
							this.extension.type !== p.ExtensionType.User ||
							this.extension.enablementState ===
								c.EnablementState.DisabledByEnvironment ||
							this.extension.enablementState ===
								c.EnablementState.DisabledByTrustRequirement ||
							this.extension.enablementState ===
								c.EnablementState.DisabledByVirtualWorkspace
							? !1
							: !!(
									(0, p.$Kn)(this.extension.local.manifest) ||
									(this.Q === this.U.localExtensionManagementServer &&
										this.W.prefersExecuteOnUI(this.extension.local.manifest)) ||
									(this.Q === this.U.remoteExtensionManagementServer &&
										this.W.prefersExecuteOnWorkspace(
											this.extension.local.manifest,
										)) ||
									(this.Q === this.U.webExtensionManagementServer &&
										this.W.prefersExecuteOnWeb(
											this.extension.local.manifest,
										)) ||
									(this.R &&
										((this.Q === this.U.localExtensionManagementServer &&
											this.W.canExecuteOnUI(this.extension.local.manifest)) ||
											(this.Q === this.U.remoteExtensionManagementServer &&
												this.W.canExecuteOnWorkspace(
													this.extension.local.manifest,
												))))
								);
					}
					async run() {
						if (this.extension?.local && this.extension?.server && this.Q)
							return (
								this.S.open(this.extension),
								(0, U.$oib)(
									(0, t.localize)(6272, null, this.extension.displayName),
								),
								this.S.installInServer(this.extension, this.Q)
							);
					}
				};
				(e.$gTb = jt),
					(e.$gTb =
						jt =
						be =
							Ne([j(3, u.$MQb), j(4, c.$EQb), j(5, ne.$JSb)], jt));
				let ti = class extends jt {
					constructor(Tt, qt, At, Yt) {
						super(
							"extensions.remoteinstall",
							At.remoteExtensionManagementServer,
							Tt,
							qt,
							At,
							Yt,
						);
					}
					Y() {
						return this.U.remoteExtensionManagementServer
							? (0, t.localize)(
									6273,
									null,
									this.U.remoteExtensionManagementServer.label,
								)
							: jt.M;
					}
				};
				(e.$hTb = ti),
					(e.$hTb = ti = Ne([j(1, u.$MQb), j(2, c.$EQb), j(3, ne.$JSb)], ti));
				let kt = class extends jt {
					constructor(Tt, qt, At) {
						super(
							"extensions.localinstall",
							qt.localExtensionManagementServer,
							!1,
							Tt,
							qt,
							At,
						);
					}
					Y() {
						return (0, t.localize)(6274, null);
					}
				};
				(e.$iTb = kt),
					(e.$iTb = kt = Ne([j(0, u.$MQb), j(1, c.$EQb), j(2, ne.$JSb)], kt));
				let hi = class extends jt {
					constructor(Tt, qt, At) {
						super(
							"extensions.webInstall",
							qt.webExtensionManagementServer,
							!1,
							Tt,
							qt,
							At,
						);
					}
					Y() {
						return (0, t.localize)(6275, null);
					}
				};
				(e.$jTb = hi),
					(e.$jTb = hi = Ne([j(0, u.$MQb), j(1, c.$EQb), j(2, ne.$JSb)], hi));
				let Kt = class extends lt {
					static {
						Ce = this;
					}
					static {
						this.UninstallLabel = (0, t.localize)(6276, null);
					}
					static {
						this.M = (0, t.localize)(6277, null);
					}
					static {
						this.UninstallClass = `${lt.LABEL_ACTION_CLASS} uninstall`;
					}
					static {
						this.N = `${lt.LABEL_ACTION_CLASS} uninstall uninstalling`;
					}
					constructor(Tt, qt) {
						super(
							"extensions.uninstall",
							Ce.UninstallLabel,
							Ce.UninstallClass,
							!1,
						),
							(this.O = Tt),
							(this.P = qt),
							this.update();
					}
					update() {
						if (!this.extension) {
							this.enabled = !1;
							return;
						}
						const Tt = this.extension.state;
						if (Tt === u.ExtensionState.Uninstalling) {
							(this.label = Ce.M), (this.class = Ce.N), (this.enabled = !1);
							return;
						}
						if (
							((this.label = Ce.UninstallLabel),
							(this.class = Ce.UninstallClass),
							(this.tooltip = Ce.UninstallLabel),
							Tt !== u.ExtensionState.Installed)
						) {
							this.enabled = !1;
							return;
						}
						if (this.extension.isBuiltin) {
							this.enabled = !1;
							return;
						}
						this.enabled = !0;
					}
					async run() {
						if (this.extension) {
							(0, U.$oib)(
								(0, t.localize)(6278, null, this.extension.displayName),
							);
							try {
								await this.O.uninstall(this.extension),
									(0, U.$oib)(
										(0, t.localize)(6279, null, this.extension.displayName),
									);
							} catch (Tt) {
								(0, J.$8)(Tt) || this.P.error((0, J.$bb)(Tt));
							}
						}
					}
				};
				(e.$kTb = Kt), (e.$kTb = Kt = Ce = Ne([j(0, u.$MQb), j(1, q.$GO)], Kt));
				let di = class extends lt {
					static {
						Le = this;
					}
					static {
						this.M = `${this.LABEL_ACTION_CLASS} prominent update`;
					}
					static {
						this.N = `${this.M} disabled`;
					}
					constructor(Tt, qt, At, Yt, ni) {
						super("extensions.update", (0, t.localize)(6280, null), Le.N, !1),
							(this.P = Tt),
							(this.Q = qt),
							(this.R = At),
							(this.S = Yt),
							(this.U = ni),
							(this.O = new w.$Gh()),
							this.update();
					}
					update() {
						this.O.queue(() => this.W()),
							this.extension &&
								(this.label = this.P
									? (0, t.localize)(6281, null, this.extension.latestVersion)
									: (0, t.localize)(6282, null));
					}
					async W() {
						if (
							((this.enabled = !1),
							(this.class = Le.N),
							!this.extension || this.extension.deprecationInfo)
						)
							return;
						const Tt = await this.Q.canInstall(this.extension),
							qt = this.extension.state === u.ExtensionState.Installed;
						(this.enabled = Tt && qt && this.extension.outdated),
							(this.class = this.enabled ? Le.M : Le.N);
					}
					async run() {
						if (!this.extension) return;
						const Tt = await this.Q.shouldRequireConsentToUpdate(
							this.extension,
						);
						if (Tt) {
							const { result: qt } = await this.R.prompt({
								type: "warning",
								title: (0, t.localize)(6283, null, this.extension.displayName),
								message: (0, t.localize)(6284, null, Tt),
								buttons: [
									{ label: (0, t.localize)(6285, null), run: () => "update" },
									{ label: (0, t.localize)(6286, null), run: () => "review" },
									{ label: (0, t.localize)(6287, null), run: () => "cancel" },
								],
							});
							if (qt === "cancel") return;
							if (qt === "review")
								return this.extension.hasChangelog()
									? this.Q.open(this.extension, {
											tab: u.ExtensionEditorTab.Changelog,
										})
									: this.extension.repository
										? this.S.open(this.extension.repository)
										: this.Q.open(this.extension);
						}
						return (
							(0, U.$oib)(
								(0, t.localize)(
									6288,
									null,
									this.extension.displayName,
									this.extension.latestVersion,
								),
							),
							this.X(this.extension)
						);
					}
					async X(Tt) {
						try {
							await this.Q.install(
								Tt,
								Tt.local?.preRelease
									? { installPreReleaseVersion: !0 }
									: void 0,
							),
								(0, U.$oib)(
									(0, t.localize)(6289, null, Tt.displayName, Tt.latestVersion),
								);
						} catch (qt) {
							this.U.createInstance(
								nt,
								Tt,
								Tt.latestVersion,
								h.InstallOperation.Update,
								qt,
							).run();
						}
					}
				};
				(e.$lTb = di),
					(e.$lTb =
						di =
						Le =
							Ne([j(1, u.$MQb), j(2, q.$GO), j(3, A.$7rb), j(4, o.$Li)], di));
				let Ye = class extends lt {
					static {
						Fe = this;
					}
					static {
						this.ID =
							"workbench.extensions.action.toggleAutoUpdateForExtension";
					}
					static {
						this.LABEL = (0, t.localize2)(6405, "Auto Update");
					}
					static {
						this.M = `${lt.EXTENSION_ACTION_CLASS} auto-update`;
					}
					static {
						this.N = `${this.M} hide`;
					}
					constructor(Tt, qt, At) {
						super(Fe.ID, Fe.LABEL.value, Fe.N),
							(this.O = Tt),
							(this.P = qt),
							this.D(
								At.onDidChangeConfiguration((Yt) => {
									Yt.affectsConfiguration(u.$OQb) && this.update();
								}),
							),
							this.update();
					}
					update() {
						(this.enabled = !1),
							(this.class = Fe.N),
							this.extension &&
								(this.extension.isBuiltin ||
									this.extension.deprecationInfo?.disallowInstall ||
									(this.O.getAutoUpdateValue() === "onlyEnabledExtensions" &&
										!this.P.isEnabledEnablementState(
											this.extension.enablementState,
										)) ||
									((this.enabled = !0),
									(this.class = Fe.M),
									(this.checked = this.O.isAutoUpdateEnabledFor(
										this.extension,
									))));
					}
					async run() {
						if (!this.extension) return;
						const Tt = !this.O.isAutoUpdateEnabledFor(this.extension);
						await this.O.updateAutoUpdateEnablementFor(this.extension, Tt),
							Tt
								? (0, U.$oib)(
										(0, t.localize)(6290, null, this.extension.displayName),
									)
								: (0, U.$oib)(
										(0, t.localize)(6291, null, this.extension.displayName),
									);
					}
				};
				(e.$mTb = Ye),
					(e.$mTb =
						Ye =
						Fe =
							Ne([j(0, u.$MQb), j(1, c.$IQb), j(2, v.$gj)], Ye));
				let ze = class extends lt {
					static {
						Oe = this;
					}
					static {
						this.ID =
							"workbench.extensions.action.toggleAutoUpdatesForPublisher";
					}
					static {
						this.LABEL = (0, t.localize)(6292, null);
					}
					constructor(Tt) {
						super(Oe.ID, Oe.LABEL), (this.M = Tt);
					}
					update() {}
					async run() {
						if (!this.extension) return;
						(0, U.$oib)(
							(0, t.localize)(6293, null, this.extension.publisherDisplayName),
						);
						const Tt = !this.M.isAutoUpdateEnabledFor(this.extension.publisher);
						await this.M.updateAutoUpdateEnablementFor(
							this.extension.publisher,
							Tt,
						),
							Tt
								? (0, U.$oib)(
										(0, t.localize)(6294, null, this.extension.displayName),
									)
								: (0, U.$oib)(
										(0, t.localize)(6295, null, this.extension.displayName),
									);
					}
				};
				(e.$nTb = ze), (e.$nTb = ze = Oe = Ne([j(0, u.$MQb)], ze));
				let Xe = class extends lt {
					static {
						xe = this;
					}
					static {
						this.M = `${lt.LABEL_ACTION_CLASS} migrate`;
					}
					static {
						this.N = `${this.M} disabled`;
					}
					constructor(Tt, qt) {
						super(
							"extensionsAction.migrateDeprecatedExtension",
							(0, t.localize)(6296, null),
							xe.N,
							!1,
						),
							(this.O = Tt),
							(this.P = qt),
							this.update();
					}
					update() {
						if (
							((this.enabled = !1),
							(this.class = xe.N),
							!this.extension?.local ||
								this.extension.state !== u.ExtensionState.Installed ||
								!this.extension.deprecationInfo?.extension)
						)
							return;
						const Tt = this.extension.deprecationInfo.extension.id;
						this.P.local.some((qt) => (0, g.$7p)(qt.identifier, { id: Tt })) ||
							((this.enabled = !0),
							(this.class = xe.M),
							(this.tooltip = (0, t.localize)(
								6297,
								null,
								this.extension.deprecationInfo.extension.displayName,
							)),
							(this.label = this.O
								? (0, t.localize)(6298, null)
								: this.tooltip));
					}
					async run() {
						if (!this.extension?.deprecationInfo?.extension) return;
						const Tt = this.extension.local;
						await this.P.uninstall(this.extension);
						const [qt] = await this.P.getExtensions(
							[
								{
									id: this.extension.deprecationInfo.extension.id,
									preRelease:
										this.extension.deprecationInfo?.extension?.preRelease,
								},
							],
							B.CancellationToken.None,
						);
						await this.P.install(qt, { isMachineScoped: Tt?.isMachineScoped });
					}
				};
				(e.$oTb = Xe), (e.$oTb = Xe = xe = Ne([j(1, u.$MQb)], Xe));
				let It = class extends lt {
					constructor(Tt, qt, At, Yt, ni) {
						super(Tt, qt, At, Yt), (this.M = ni), (this.N = null);
					}
					createActionViewItem(Tt) {
						return (this.N = this.M.createInstance(Lt, this, Tt)), this.N;
					}
					run({ actionGroups: Tt, disposeActionsOnHide: qt }) {
						return this.N?.showMenu(Tt, qt), Promise.resolve();
					}
				};
				(e.$pTb = It), (e.$pTb = It = Ne([j(4, o.$Li)], It));
				let Lt = class extends G.$_ib {
					constructor(Tt, qt, At) {
						super(null, Tt, { ...qt, icon: !0, label: !0 }), (this.g = At);
					}
					showMenu(Tt, qt) {
						if (this.element) {
							const At = this.h(Tt),
								Yt = E.$tgb(this.element),
								ni = { x: Yt.left, y: Yt.top + Yt.height + 10 };
							this.g.showContextMenu({
								getAnchor: () => ni,
								getActions: () => At,
								actionRunner: this.actionRunner,
								onHide: () => {
									qt && (0, r.$Wc)(At);
								},
							});
						}
					}
					h(Tt) {
						let qt = [];
						for (const At of Tt) qt = [...qt, ...At, new i.$tj()];
						return qt.length ? qt.slice(0, qt.length - 1) : qt;
					}
				};
				(e.$qTb = Lt), (e.$qTb = Lt = Ne([j(2, m.$Xxb)], Lt));
				async function xt(Et, Tt, qt) {
					return qt.invokeFunction(async (At) => {
						const Yt = At.get(u.$MQb),
							ni = At.get(c.$IQb),
							bi = At.get(D.$YX),
							fi = At.get(n.$9Qb),
							Ti = At.get(n.$0Qb),
							wt = At.get(z.$rRb),
							We = [];
						if (Et) {
							switch (
								(We.push(["extension", Et.identifier.id]),
								We.push(["isBuiltinExtension", Et.isBuiltin]),
								We.push([
									"isDefaultApplicationScopedExtension",
									Et.local && (0, p.$Jn)(Et.local.manifest),
								]),
								We.push([
									"isApplicationScopedExtension",
									Et.local && Et.local.isApplicationScoped,
								]),
								We.push(["isWorkspaceScopedExtension", Et.isWorkspaceScoped]),
								We.push(["isGalleryExtension", !!Et.identifier.uuid]),
								Et.local && We.push(["extensionSource", Et.local.source]),
								We.push([
									"extensionHasConfiguration",
									Et.local &&
										!!Et.local.manifest.contributes &&
										!!Et.local.manifest.contributes.configuration,
								]),
								We.push([
									"extensionHasKeybindings",
									Et.local &&
										!!Et.local.manifest.contributes &&
										!!Et.local.manifest.contributes.keybindings,
								]),
								We.push([
									"extensionHasCommands",
									Et.local &&
										!!Et.local.manifest.contributes &&
										!!Et.local.manifest.contributes?.commands,
								]),
								We.push([
									"isExtensionRecommended",
									!!fi.getAllRecommendationsWithReason()[
										Et.identifier.id.toLowerCase()
									],
								]),
								We.push([
									"isExtensionWorkspaceRecommended",
									fi.getAllRecommendationsWithReason()[
										Et.identifier.id.toLowerCase()
									]?.reasonId === n.ExtensionRecommendationReason.Workspace,
								]),
								We.push([
									"isUserIgnoredRecommendation",
									Ti.globalIgnoredRecommendations.some(
										(Pi) => Pi === Et.identifier.id.toLowerCase(),
									),
								]),
								We.push(["isExtensionPinned", Et.pinned]),
								We.push([
									"isExtensionEnabled",
									ni.isEnabledEnablementState(Et.enablementState),
								]),
								Et.state)
							) {
								case u.ExtensionState.Installing:
									We.push(["extensionStatus", "installing"]);
									break;
								case u.ExtensionState.Installed:
									We.push(["extensionStatus", "installed"]);
									break;
								case u.ExtensionState.Uninstalling:
									We.push(["extensionStatus", "uninstalling"]);
									break;
								case u.ExtensionState.Uninstalled:
									We.push(["extensionStatus", "uninstalled"]);
									break;
							}
							We.push([
								"installedExtensionIsPreReleaseVersion",
								!!Et.local?.isPreReleaseVersion,
							]),
								We.push([
									"installedExtensionIsOptedToPreRelease",
									!!Et.local?.preRelease,
								]),
								We.push([
									"galleryExtensionIsPreReleaseVersion",
									!!Et.gallery?.properties.isPreReleaseVersion,
								]),
								We.push([
									"galleryExtensionHasPreReleaseVersion",
									Et.gallery?.hasPreReleaseVersion,
								]),
								We.push([
									"extensionHasPreReleaseVersion",
									Et.hasPreReleaseVersion,
								]),
								We.push(["extensionHasReleaseVersion", Et.hasReleaseVersion]),
								We.push([
									"extensionDisallowInstall",
									!!Et.deprecationInfo?.disallowInstall,
								]);
							const [Si, gi, ki] = await Promise.all([
								wt.getColorThemes(),
								wt.getFileIconThemes(),
								wt.getProductIconThemes(),
							]);
							We.push(["extensionHasColorThemes", Si.some((Pi) => $i(Pi, Et))]),
								We.push([
									"extensionHasFileIconThemes",
									gi.some((Pi) => $i(Pi, Et)),
								]),
								We.push([
									"extensionHasProductIconThemes",
									ki.some((Pi) => $i(Pi, Et)),
								]),
								We.push(["canSetLanguage", Yt.canSetLanguage(Et)]),
								We.push([
									"isActiveLanguagePackExtension",
									Et.gallery && ie.$z === (0, le.$EJ)(Et.gallery),
								]);
						}
						return bi.getMenuActions(
							D.$XX.ExtensionContext,
							Tt.createOverlay(We),
							{ shouldForwardArgs: !0 },
						);
					});
				}
				function Vt(Et, Tt) {
					const qt = [];
					for (const [, At] of Et)
						qt.push(
							At.map((Yt) =>
								Yt instanceof i.$uj ? Yt : Tt.createInstance(Ut, Yt),
							),
						);
					return qt;
				}
				async function Bt(Et, Tt, qt) {
					const At = await xt(Et, Tt, qt);
					return Vt(At, qt);
				}
				let Gt = class extends It {
					static {
						He = this;
					}
					static {
						this.ID = "extensions.manage";
					}
					static {
						this.O =
							`${lt.ICON_ACTION_CLASS} manage ` +
							I.ThemeIcon.asClassName(Y.$bSb);
					}
					static {
						this.P = `${this.O} hide`;
					}
					constructor(Tt, qt, At) {
						super(He.ID, "", "", !0, Tt),
							(this.Q = qt),
							(this.R = At),
							(this.tooltip = (0, t.localize)(6299, null)),
							this.update();
					}
					async getActionGroups() {
						const Tt = [],
							qt = await xt(this.extension, this.R, this.M),
							At = [],
							Yt = [],
							ni = [],
							bi = [];
						for (const [fi, Ti] of qt)
							fi === u.$3Qb
								? Yt.push(...Vt([[fi, Ti]], this.M)[0])
								: fi === u.$4Qb
									? ni.push(...Vt([[fi, Ti]], this.M)[0])
									: fi === u.$2Qb
										? At.push(...Vt([[fi, Ti]], this.M)[0])
										: bi.push(...Vt([[fi, Ti]], this.M));
						return (
							At.length && Tt.push(At),
							Tt.push([this.M.createInstance(Dt), this.M.createInstance(ii)]),
							Tt.push([this.M.createInstance(si), this.M.createInstance(Jt)]),
							ni.length && Tt.push(ni),
							Tt.push([
								...(Yt.length ? Yt : []),
								this.M.createInstance(mi, this.extension, !1),
								this.M.createInstance(Kt),
							]),
							bi.forEach((fi) => Tt.push(fi)),
							Tt.forEach((fi) =>
								fi.forEach((Ti) => {
									Ti instanceof lt && (Ti.extension = this.extension);
								}),
							),
							Tt
						);
					}
					async run() {
						return (
							await this.Q.whenInstalledExtensionsRegistered(),
							super.run({
								actionGroups: await this.getActionGroups(),
								disposeActionsOnHide: !0,
							})
						);
					}
					update() {
						if (((this.class = He.P), (this.enabled = !1), this.extension)) {
							const Tt = this.extension.state;
							(this.enabled = Tt === u.ExtensionState.Installed),
								(this.class =
									this.enabled || Tt === u.ExtensionState.Uninstalling
										? He.O
										: He.P);
						}
					}
				};
				(e.$sTb = Gt),
					(e.$sTb = Gt = He = Ne([j(0, o.$Li), j(1, l.$q2), j(2, L.$6j)], Gt));
				class Mt extends It {
					constructor(Tt, qt) {
						super(
							"extensionEditor.manageExtension",
							"",
							`${lt.ICON_ACTION_CLASS} manage ${I.ThemeIcon.asClassName(Y.$bSb)}`,
							!0,
							qt,
						),
							(this.O = Tt),
							(this.tooltip = (0, t.localize)(6300, null));
					}
					update() {}
					async run() {
						const Tt = [];
						return (
							(await Bt(this.extension, this.O, this.M)).forEach((qt) =>
								Tt.push(qt),
							),
							Tt.forEach((qt) =>
								qt.forEach((At) => {
									At instanceof lt && (At.extension = this.extension);
								}),
							),
							super.run({ actionGroups: Tt, disposeActionsOnHide: !0 })
						);
					}
				}
				e.$tTb = Mt;
				let Ut = class extends lt {
					constructor(Tt, qt) {
						super(Tt.id, Tt.label), (this.M = Tt), (this.N = qt);
					}
					get enabled() {
						return this.M.enabled;
					}
					set enabled(Tt) {
						this.M.enabled = Tt;
					}
					update() {
						this.extension &&
							(this.M.id === u.$VQb
								? (this.checked = !this.N.isExtensionIgnoredToSync(
										this.extension,
									))
								: this.M.id === Ye.ID
									? (this.checked = this.N.isAutoUpdateEnabledFor(
											this.extension,
										))
									: this.M.id === ze.ID
										? (this.checked = this.N.isAutoUpdateEnabledFor(
												this.extension.publisher,
											))
										: (this.checked = this.M.checked));
					}
					async run() {
						if (this.extension) {
							const Tt = this.extension.local
									? (0, g.$0p)(
											this.extension.local.manifest.publisher,
											this.extension.local.manifest.name,
										)
									: this.extension.gallery
										? (0, g.$0p)(
												this.extension.gallery.publisher,
												this.extension.gallery.name,
											)
										: this.extension.identifier.id,
								qt = {
									id: this.extension.identifier.id,
									version: this.extension.version,
									location: this.extension.local?.location,
								};
							await this.M.run(Tt, qt);
						}
					}
				};
				(e.$uTb = Ut), (e.$uTb = Ut = Ne([j(1, u.$MQb)], Ut));
				let ei = class extends lt {
					static {
						Ke = this;
					}
					static {
						this.ID = "workbench.extensions.action.togglePreRlease";
					}
					static {
						this.LABEL = (0, t.localize)(6301, null);
					}
					static {
						this.M = `${lt.LABEL_ACTION_CLASS} pre-release`;
					}
					static {
						this.N = `${this.M} hide`;
					}
					constructor(Tt) {
						super(Ke.ID, Ke.LABEL, Ke.N), (this.O = Tt), this.update();
					}
					update() {
						(this.enabled = !1),
							(this.class = Ke.N),
							this.extension &&
								(this.extension.isBuiltin ||
									(this.extension.state === u.ExtensionState.Installed &&
										this.extension.hasPreReleaseVersion &&
										this.extension.gallery &&
										((this.extension.preRelease &&
											!this.extension.isPreReleaseVersion) ||
											(!this.extension.preRelease &&
												!this.extension.gallery.hasPreReleaseVersion) ||
											((this.enabled = !0),
											(this.class = Ke.M),
											this.extension.preRelease
												? ((this.label = (0, t.localize)(6302, null)),
													(this.tooltip = (0, t.localize)(6303, null)))
												: ((this.label = (0, t.localize)(6304, null)),
													(this.tooltip = (0, t.localize)(6305, null)))))));
					}
					async run() {
						this.extension &&
							(this.O.open(this.extension, {
								showPreReleaseVersion: !this.extension.preRelease,
							}),
							await this.O.togglePreRelease(this.extension));
					}
				};
				(e.$vTb = ei), (e.$vTb = ei = Ke = Ne([j(0, u.$MQb)], ei));
				let mi = class extends lt {
					static {
						Je = this;
					}
					static {
						this.ID = "workbench.extensions.action.install.anotherVersion";
					}
					static {
						this.LABEL = (0, t.localize)(6306, null);
					}
					constructor(Tt, qt, At, Yt, ni, bi, fi, Ti) {
						super(Je.ID, Je.LABEL, lt.LABEL_ACTION_CLASS),
							(this.M = qt),
							(this.N = At),
							(this.O = Yt),
							(this.P = ni),
							(this.Q = bi),
							(this.R = fi),
							(this.S = Ti),
							(this.extension = Tt),
							this.update();
					}
					update() {
						(this.enabled =
							!!this.extension &&
							!this.extension.isBuiltin &&
							!!this.extension.identifier.uuid &&
							!this.extension.deprecationInfo),
							this.enabled &&
								this.M &&
								(this.enabled =
									!!this.extension?.local &&
									!!this.extension.server &&
									this.extension.state === u.ExtensionState.Installed);
					}
					async run() {
						if (!this.enabled || !this.extension) return;
						const Tt = this.extension.server
								? await this.extension.server.extensionManagementService.getTargetPlatform()
								: await this.O.getTargetPlatform(),
							qt = await this.P.getAllCompatibleVersions(
								this.extension.identifier,
								this.extension.local?.preRelease ??
									this.extension.gallery?.properties.isPreReleaseVersion ??
									!1,
								Tt,
								this.extension.gallery?.queryContext,
							);
						if (!qt.length) {
							await this.S.info((0, t.localize)(6307, null));
							return;
						}
						const At = qt.map((ni, bi) => ({
								id: ni.version,
								label: ni.version,
								description: `${(0, se.$dn)(new Date(Date.parse(ni.date)), !0)}${ni.isPreReleaseVersion ? ` (${(0, t.localize)(6308, null)})` : ""}${ni.version === this.extension?.local?.manifest.version ? ` (${(0, t.localize)(6309, null)})` : ""}`,
								ariaLabel: `${ni.isPreReleaseVersion ? "Pre-Release version" : "Release version"} ${ni.version}`,
								isPreReleaseVersion: ni.isPreReleaseVersion,
							})),
							Yt = await this.Q.pick(At, {
								placeHolder: (0, t.localize)(6310, null),
								matchOnDetail: !0,
							});
						if (Yt) {
							if (this.extension.local?.manifest.version === Yt.id) return;
							try {
								await this.N.install(this.extension, {
									installPreReleaseVersion: Yt.isPreReleaseVersion,
									version: Yt.id,
								});
							} catch (ni) {
								this.R.createInstance(
									nt,
									this.extension,
									Yt.id,
									h.InstallOperation.Install,
									ni,
								).run();
							}
						}
						return null;
					}
				};
				(e.$wTb = mi),
					(e.$wTb =
						mi =
						Je =
							Ne(
								[
									j(2, u.$MQb),
									j(3, c.$GQb),
									j(4, h.$Ep),
									j(5, O.$DJ),
									j(6, o.$Li),
									j(7, q.$GO),
								],
								mi,
							));
				let ii = class extends lt {
					static {
						Te = this;
					}
					static {
						this.ID = "extensions.enableForWorkspace";
					}
					static {
						this.LABEL = (0, t.localize)(6311, null);
					}
					constructor(Tt, qt) {
						super(Te.ID, Te.LABEL, lt.LABEL_ACTION_CLASS),
							(this.M = Tt),
							(this.N = qt),
							(this.tooltip = (0, t.localize)(6312, null)),
							this.update();
					}
					update() {
						(this.enabled = !1),
							this.extension &&
								this.extension.local &&
								!this.extension.isWorkspaceScoped &&
								(this.enabled =
									this.extension.state === u.ExtensionState.Installed &&
									!this.N.isEnabled(this.extension.local) &&
									this.N.canChangeWorkspaceEnablement(this.extension.local));
					}
					async run() {
						if (this.extension)
							return this.M.setEnablement(
								this.extension,
								c.EnablementState.EnabledWorkspace,
							);
					}
				};
				(e.$xTb = ii),
					(e.$xTb = ii = Te = Ne([j(0, u.$MQb), j(1, c.$IQb)], ii));
				let Dt = class extends lt {
					static {
						Ee = this;
					}
					static {
						this.ID = "extensions.enableGlobally";
					}
					static {
						this.LABEL = (0, t.localize)(6313, null);
					}
					constructor(Tt, qt) {
						super(Ee.ID, Ee.LABEL, lt.LABEL_ACTION_CLASS),
							(this.M = Tt),
							(this.N = qt),
							(this.tooltip = (0, t.localize)(6314, null)),
							this.update();
					}
					update() {
						(this.enabled = !1),
							this.extension &&
								this.extension.local &&
								!this.extension.isWorkspaceScoped &&
								(this.enabled =
									this.extension.state === u.ExtensionState.Installed &&
									this.N.isDisabledGlobally(this.extension.local) &&
									this.N.canChangeEnablement(this.extension.local));
					}
					async run() {
						if (this.extension)
							return this.M.setEnablement(
								this.extension,
								c.EnablementState.EnabledGlobally,
							);
					}
				};
				(e.$yTb = Dt),
					(e.$yTb = Dt = Ee = Ne([j(0, u.$MQb), j(1, c.$IQb)], Dt));
				let Jt = class extends lt {
					static {
						Ie = this;
					}
					static {
						this.ID = "extensions.disableForWorkspace";
					}
					static {
						this.LABEL = (0, t.localize)(6315, null);
					}
					constructor(Tt, qt, At, Yt) {
						super(Ie.ID, Ie.LABEL, lt.LABEL_ACTION_CLASS),
							(this.M = Tt),
							(this.N = qt),
							(this.O = At),
							(this.P = Yt),
							(this.tooltip = (0, t.localize)(6316, null)),
							this.update(),
							this.D(this.P.onDidChangeExtensions(() => this.update()));
					}
					update() {
						(this.enabled = !1),
							this.extension &&
								this.extension.local &&
								!this.extension.isWorkspaceScoped &&
								this.P.extensions.some(
									(Tt) =>
										(0, g.$7p)(
											{ id: Tt.identifier.value, uuid: Tt.uuid },
											this.extension.identifier,
										) && this.M.getWorkbenchState() !== b.WorkbenchState.EMPTY,
								) &&
								(this.enabled =
									this.extension.state === u.ExtensionState.Installed &&
									(this.extension.enablementState ===
										c.EnablementState.EnabledGlobally ||
										this.extension.enablementState ===
											c.EnablementState.EnabledWorkspace) &&
									this.O.canChangeWorkspaceEnablement(this.extension.local));
					}
					async run() {
						if (this.extension)
							return this.N.setEnablement(
								this.extension,
								c.EnablementState.DisabledWorkspace,
							);
					}
				};
				(e.$zTb = Jt),
					(e.$zTb =
						Jt =
						Ie =
							Ne([j(0, b.$Vi), j(1, u.$MQb), j(2, c.$IQb), j(3, l.$q2)], Jt));
				let si = class extends lt {
					static {
						Be = this;
					}
					static {
						this.ID = "extensions.disableGlobally";
					}
					static {
						this.LABEL = (0, t.localize)(6317, null);
					}
					constructor(Tt, qt, At) {
						super(Be.ID, Be.LABEL, lt.LABEL_ACTION_CLASS),
							(this.M = Tt),
							(this.N = qt),
							(this.O = At),
							(this.tooltip = (0, t.localize)(6318, null)),
							this.update(),
							this.D(this.O.onDidChangeExtensions(() => this.update()));
					}
					update() {
						(this.enabled = !1),
							this.extension &&
								this.extension.local &&
								!this.extension.isWorkspaceScoped &&
								this.O.extensions.some((Tt) =>
									(0, g.$7p)(
										{ id: Tt.identifier.value, uuid: Tt.uuid },
										this.extension.identifier,
									),
								) &&
								(this.enabled =
									this.extension.state === u.ExtensionState.Installed &&
									(this.extension.enablementState ===
										c.EnablementState.EnabledGlobally ||
										this.extension.enablementState ===
											c.EnablementState.EnabledWorkspace) &&
									this.N.canChangeEnablement(this.extension.local));
					}
					async run() {
						if (this.extension)
							return this.M.setEnablement(
								this.extension,
								c.EnablementState.DisabledGlobally,
							);
					}
				};
				(e.$ATb = si),
					(e.$ATb =
						si =
						Be =
							Ne([j(0, u.$MQb), j(1, c.$IQb), j(2, l.$q2)], si));
				let Zt = class extends ct {
					constructor(Tt) {
						super("extensions.enable", lt.LABEL_ACTION_CLASS, [
							[Tt.createInstance(Dt), Tt.createInstance(ii)],
						]);
					}
				};
				(e.$BTb = Zt), (e.$BTb = Zt = Ne([j(0, o.$Li)], Zt));
				let ci = class extends ct {
					constructor(Tt) {
						super("extensions.disable", lt.LABEL_ACTION_CLASS, [
							[Tt.createInstance(si), Tt.createInstance(Jt)],
						]);
					}
				};
				(e.$CTb = ci), (e.$CTb = ci = Ne([j(0, o.$Li)], ci));
				let ri = class extends lt {
					static {
						Se = this;
					}
					static {
						this.M = `${lt.LABEL_ACTION_CLASS} reload`;
					}
					static {
						this.N = `${this.M} disabled`;
					}
					constructor(Tt, qt, At, Yt, ni, bi) {
						super("extensions.runtimeState", "", Se.N, !1),
							(this.O = Tt),
							(this.P = qt),
							(this.Q = At),
							(this.R = Yt),
							(this.S = ni),
							(this.U = bi),
							(this.updateWhenCounterExtensionChanges = !0),
							this.D(this.R.onDidChangeExtensions(() => this.update())),
							this.update();
					}
					update() {
						if (
							((this.enabled = !1),
							(this.tooltip = ""),
							(this.class = Se.N),
							!this.extension)
						)
							return;
						const Tt = this.extension.state;
						if (
							Tt === u.ExtensionState.Installing ||
							Tt === u.ExtensionState.Uninstalling ||
							(this.extension.local &&
								this.extension.local.manifest &&
								this.extension.local.manifest.contributes &&
								this.extension.local.manifest.contributes.localizations &&
								this.extension.local.manifest.contributes.localizations.length >
									0)
						)
							return;
						const qt = this.extension.runtimeState;
						qt &&
							((this.enabled = !0),
							(this.class = Se.M),
							(this.tooltip = qt.reason),
							(this.label =
								qt.action === u.ExtensionRuntimeActionType.ReloadWindow
									? (0, t.localize)(6319, null)
									: qt.action === u.ExtensionRuntimeActionType.RestartExtensions
										? (0, t.localize)(6320, null)
										: qt.action === u.ExtensionRuntimeActionType.QuitAndInstall
											? (0, t.localize)(6321, null)
											: qt.action ===
														u.ExtensionRuntimeActionType.ApplyUpdate ||
													qt.action ===
														u.ExtensionRuntimeActionType.DownloadUpdate
												? (0, t.localize)(6322, null, this.S.nameShort)
												: ""));
					}
					async run() {
						const Tt = this.extension?.runtimeState;
						if (Tt?.action) {
							if (
								(this.U.publicLog2("extensions:runtimestate:action", {
									action: Tt.action,
								}),
								Tt?.action === u.ExtensionRuntimeActionType.ReloadWindow)
							)
								return this.O.reload();
							if (Tt?.action === u.ExtensionRuntimeActionType.RestartExtensions)
								return this.P.updateRunningExtensions();
							if (Tt?.action === u.ExtensionRuntimeActionType.DownloadUpdate)
								return this.Q.downloadUpdate();
							if (Tt?.action === u.ExtensionRuntimeActionType.ApplyUpdate)
								return this.Q.applyUpdate();
							if (Tt?.action === u.ExtensionRuntimeActionType.QuitAndInstall)
								return this.Q.quitAndInstall();
						}
					}
				};
				(e.$DTb = ri),
					(e.$DTb =
						ri =
						Se =
							Ne(
								[
									j(0, s.$asb),
									j(1, u.$MQb),
									j(2, me.$_rb),
									j(3, l.$q2),
									j(4, H.$Bk),
									j(5, $e.$km),
								],
								ri,
							));
				function $i(Et, Tt) {
					return !!(
						Tt &&
						Et.extensionData &&
						p.$Gn.equals(Et.extensionData.extensionId, Tt.identifier.id)
					);
				}
				function Wt(Et, Tt, qt, At) {
					const Yt = [];
					for (const ni of Et)
						$i(ni, qt) &&
							!(At && ni === Tt) &&
							Yt.push({ label: ni.label, id: ni.id });
					return (
						At &&
							(Yt.push({
								type: "separator",
								label: (0, t.localize)(6323, null),
							}),
							Yt.push({ label: Tt.label, id: Tt.id })),
						Yt
					);
				}
				let tt = class extends lt {
					static {
						ke = this;
					}
					static {
						this.ID = "workbench.extensions.action.setColorTheme";
					}
					static {
						this.TITLE = (0, t.localize2)(6406, "Set Color Theme");
					}
					static {
						this.M = `${lt.LABEL_ACTION_CLASS} theme`;
					}
					static {
						this.N = `${this.M} disabled`;
					}
					constructor(Tt, qt, At, Yt) {
						super(ke.ID, ke.TITLE.value, ke.N, !1),
							(this.O = qt),
							(this.P = At),
							(this.Q = Yt),
							this.D(
								C.Event.any(Tt.onDidChangeExtensions, qt.onDidColorThemeChange)(
									() => this.update(),
									this,
								),
							),
							this.update();
					}
					update() {
						this.O.getColorThemes().then((Tt) => {
							(this.enabled = this.R(Tt)),
								(this.class = this.enabled ? ke.M : ke.N);
						});
					}
					R(Tt) {
						return (
							!!this.extension &&
							this.extension.state === u.ExtensionState.Installed &&
							this.Q.isEnabledEnablementState(this.extension.enablementState) &&
							Tt.some((qt) => $i(qt, this.extension))
						);
					}
					async run(
						{ showCurrentTheme: Tt, ignoreFocusLost: qt } = {
							showCurrentTheme: !1,
							ignoreFocusLost: !1,
						},
					) {
						const At = await this.O.getColorThemes();
						if (!this.R(At)) return;
						const Yt = this.O.getColorTheme(),
							ni = new w.$Jh(100),
							bi = Wt(At, Yt, this.extension, Tt),
							fi = await this.P.pick(bi, {
								placeHolder: (0, t.localize)(6324, null),
								onDidFocus: (Ti) =>
									ni.trigger(() => this.O.setColorTheme(Ti.id, void 0)),
								ignoreFocusLost: qt,
							});
						return this.O.setColorTheme(fi ? fi.id : Yt.id, "auto");
					}
				};
				(e.$ETb = tt),
					(e.$ETb =
						tt =
						ke =
							Ne([j(0, l.$q2), j(1, z.$rRb), j(2, O.$DJ), j(3, c.$IQb)], tt));
				let at = class extends lt {
					static {
						Ue = this;
					}
					static {
						this.ID = "workbench.extensions.action.setFileIconTheme";
					}
					static {
						this.TITLE = (0, t.localize2)(6407, "Set File Icon Theme");
					}
					static {
						this.M = `${lt.LABEL_ACTION_CLASS} theme`;
					}
					static {
						this.N = `${this.M} disabled`;
					}
					constructor(Tt, qt, At, Yt) {
						super(Ue.ID, Ue.TITLE.value, Ue.N, !1),
							(this.O = qt),
							(this.P = At),
							(this.Q = Yt),
							this.D(
								C.Event.any(
									Tt.onDidChangeExtensions,
									qt.onDidFileIconThemeChange,
								)(() => this.update(), this),
							),
							this.update();
					}
					update() {
						this.O.getFileIconThemes().then((Tt) => {
							(this.enabled = this.R(Tt)),
								(this.class = this.enabled ? Ue.M : Ue.N);
						});
					}
					R(Tt) {
						return (
							!!this.extension &&
							this.extension.state === u.ExtensionState.Installed &&
							this.Q.isEnabledEnablementState(this.extension.enablementState) &&
							Tt.some((qt) => $i(qt, this.extension))
						);
					}
					async run(
						{ showCurrentTheme: Tt, ignoreFocusLost: qt } = {
							showCurrentTheme: !1,
							ignoreFocusLost: !1,
						},
					) {
						const At = await this.O.getFileIconThemes();
						if (!this.R(At)) return;
						const Yt = this.O.getFileIconTheme(),
							ni = new w.$Jh(100),
							bi = Wt(At, Yt, this.extension, Tt),
							fi = await this.P.pick(bi, {
								placeHolder: (0, t.localize)(6325, null),
								onDidFocus: (Ti) =>
									ni.trigger(() => this.O.setFileIconTheme(Ti.id, void 0)),
								ignoreFocusLost: qt,
							});
						return this.O.setFileIconTheme(fi ? fi.id : Yt.id, "auto");
					}
				};
				(e.$FTb = at),
					(e.$FTb =
						at =
						Ue =
							Ne([j(0, l.$q2), j(1, z.$rRb), j(2, O.$DJ), j(3, c.$IQb)], at));
				let pi = class extends lt {
					static {
						qe = this;
					}
					static {
						this.ID = "workbench.extensions.action.setProductIconTheme";
					}
					static {
						this.TITLE = (0, t.localize2)(6408, "Set Product Icon Theme");
					}
					static {
						this.M = `${lt.LABEL_ACTION_CLASS} theme`;
					}
					static {
						this.N = `${this.M} disabled`;
					}
					constructor(Tt, qt, At, Yt) {
						super(qe.ID, qe.TITLE.value, qe.N, !1),
							(this.O = qt),
							(this.P = At),
							(this.Q = Yt),
							this.D(
								C.Event.any(
									Tt.onDidChangeExtensions,
									qt.onDidProductIconThemeChange,
								)(() => this.update(), this),
							),
							this.update();
					}
					update() {
						this.O.getProductIconThemes().then((Tt) => {
							(this.enabled = this.R(Tt)),
								(this.class = this.enabled ? qe.M : qe.N);
						});
					}
					R(Tt) {
						return (
							!!this.extension &&
							this.extension.state === u.ExtensionState.Installed &&
							this.Q.isEnabledEnablementState(this.extension.enablementState) &&
							Tt.some((qt) => $i(qt, this.extension))
						);
					}
					async run(
						{ showCurrentTheme: Tt, ignoreFocusLost: qt } = {
							showCurrentTheme: !1,
							ignoreFocusLost: !1,
						},
					) {
						const At = await this.O.getProductIconThemes();
						if (!this.R(At)) return;
						const Yt = this.O.getProductIconTheme(),
							ni = new w.$Jh(100),
							bi = Wt(At, Yt, this.extension, Tt),
							fi = await this.P.pick(bi, {
								placeHolder: (0, t.localize)(6326, null),
								onDidFocus: (Ti) =>
									ni.trigger(() => this.O.setProductIconTheme(Ti.id, void 0)),
								ignoreFocusLost: qt,
							});
						return this.O.setProductIconTheme(fi ? fi.id : Yt.id, "auto");
					}
				};
				(e.$GTb = pi),
					(e.$GTb =
						pi =
						qe =
							Ne([j(0, l.$q2), j(1, z.$rRb), j(2, O.$DJ), j(3, c.$IQb)], pi));
				let Li = class extends lt {
					static {
						Ae = this;
					}
					static {
						this.ID = "workbench.extensions.action.setDisplayLanguage";
					}
					static {
						this.TITLE = (0, t.localize2)(6409, "Set Display Language");
					}
					static {
						this.M = `${lt.LABEL_ACTION_CLASS} language`;
					}
					static {
						this.N = `${this.M} disabled`;
					}
					constructor(Tt) {
						super(Ae.ID, Ae.TITLE.value, Ae.N, !1),
							(this.O = Tt),
							this.update();
					}
					update() {
						(this.enabled = !1),
							(this.class = Ae.N),
							this.extension &&
								this.O.canSetLanguage(this.extension) &&
								((this.extension.gallery &&
									ie.$z === (0, le.$EJ)(this.extension.gallery)) ||
									((this.enabled = !0), (this.class = Ae.M)));
					}
					async run() {
						return this.extension && this.O.setLanguage(this.extension);
					}
				};
				(e.$HTb = Li), (e.$HTb = Li = Ae = Ne([j(0, u.$MQb)], Li));
				let Di = class extends lt {
					static {
						Me = this;
					}
					static {
						this.ID = "workbench.extensions.action.clearLanguage";
					}
					static {
						this.TITLE = (0, t.localize2)(6410, "Clear Display Language");
					}
					static {
						this.M = `${lt.LABEL_ACTION_CLASS} language`;
					}
					static {
						this.N = `${this.M} disabled`;
					}
					constructor(Tt, qt) {
						super(Me.ID, Me.TITLE.value, Me.N, !1),
							(this.O = Tt),
							(this.P = qt),
							this.update();
					}
					update() {
						(this.enabled = !1),
							(this.class = Me.N),
							this.extension &&
								this.O.canSetLanguage(this.extension) &&
								((this.extension.gallery &&
									ie.$z !== (0, le.$EJ)(this.extension.gallery)) ||
									((this.enabled = !0), (this.class = Me.M)));
					}
					async run() {
						return this.extension && this.P.clearLocalePreference();
					}
				};
				(e.$ITb = Di),
					(e.$ITb = Di = Me = Ne([j(0, u.$MQb), j(1, oe.$7Sb)], Di));
				let Ui = class extends i.$rj {
					static {
						De = this;
					}
					static {
						this.ID = "workbench.extensions.action.showRecommendedExtension";
					}
					static {
						this.LABEL = (0, t.localize)(6327, null);
					}
					constructor(Tt, qt, At) {
						super(De.ID, De.LABEL, void 0, !1),
							(this.g = qt),
							(this.h = At),
							(this.f = Tt);
					}
					async run() {
						const qt = (
							await this.g.openPaneComposite(
								u.$LQb,
								Z.ViewContainerLocation.Sidebar,
								!0,
							)
						)?.getViewPaneContainer();
						qt.search(`@id:${this.f}`), qt.focus();
						const [At] = await this.h.getExtensions(
							[{ id: this.f }],
							{ source: "install-recommendation" },
							B.CancellationToken.None,
						);
						return At ? this.h.open(At) : null;
					}
				};
				(e.$JTb = Ui),
					(e.$JTb = Ui = De = Ne([j(1, Q.$6Sb), j(2, u.$MQb)], Ui));
				let Wi = class extends i.$rj {
					static {
						Re = this;
					}
					static {
						this.ID = "workbench.extensions.action.installRecommendedExtension";
					}
					static {
						this.LABEL = (0, t.localize)(6328, null);
					}
					constructor(Tt, qt, At, Yt) {
						super(Re.ID, Re.LABEL, void 0, !1),
							(this.g = qt),
							(this.h = At),
							(this.t = Yt),
							(this.f = Tt);
					}
					async run() {
						const qt = (
							await this.g.openPaneComposite(
								u.$LQb,
								Z.ViewContainerLocation.Sidebar,
								!0,
							)
						)?.getViewPaneContainer();
						qt.search(`@id:${this.f}`), qt.focus();
						const [At] = await this.t.getExtensions(
							[{ id: this.f }],
							{ source: "install-recommendation" },
							B.CancellationToken.None,
						);
						if (At) {
							await this.t.open(At);
							try {
								await this.t.install(At);
							} catch (Yt) {
								this.h
									.createInstance(
										nt,
										At,
										At.latestVersion,
										h.InstallOperation.Install,
										Yt,
									)
									.run();
							}
						}
					}
				};
				(e.$KTb = Wi),
					(e.$KTb =
						Wi =
						Re =
							Ne([j(1, Q.$6Sb), j(2, o.$Li), j(3, u.$MQb)], Wi));
				let Gi = class extends i.$rj {
					static {
						je = this;
					}
					static {
						this.ID = "extensions.ignore";
					}
					static {
						this.f = `${lt.LABEL_ACTION_CLASS} ignore`;
					}
					constructor(Tt, qt) {
						super(je.ID, "Ignore Recommendation"),
							(this.g = Tt),
							(this.h = qt),
							(this.class = je.f),
							(this.tooltip = (0, t.localize)(6329, null)),
							(this.enabled = !0);
					}
					run() {
						return (
							this.h.toggleGlobalIgnoredRecommendation(
								this.g.identifier.id,
								!0,
							),
							Promise.resolve()
						);
					}
				};
				(e.$LTb = Gi), (e.$LTb = Gi = je = Ne([j(1, n.$0Qb)], Gi));
				let qi = class extends i.$rj {
					static {
						Ve = this;
					}
					static {
						this.ID = "extensions.ignore";
					}
					static {
						this.f = `${lt.LABEL_ACTION_CLASS} undo-ignore`;
					}
					constructor(Tt, qt) {
						super(Ve.ID, "Undo"),
							(this.g = Tt),
							(this.h = qt),
							(this.class = Ve.f),
							(this.tooltip = (0, t.localize)(6330, null)),
							(this.enabled = !0);
					}
					run() {
						return (
							this.h.toggleGlobalIgnoredRecommendation(
								this.g.identifier.id,
								!1,
							),
							Promise.resolve()
						);
					}
				};
				(e.$MTb = qi), (e.$MTb = qi = Ve = Ne([j(1, n.$0Qb)], qi));
				let Oi = class extends i.$rj {
					constructor(Tt, qt) {
						super(
							"extensions.searchExtensions",
							(0, t.localize)(6331, null),
							void 0,
							!0,
						),
							(this.f = Tt),
							(this.g = qt);
					}
					async run() {
						const Tt = (
							await this.g.openPaneComposite(
								u.$LQb,
								Z.ViewContainerLocation.Sidebar,
								!0,
							)
						)?.getViewPaneContainer();
						Tt.search(this.f), Tt.focus();
					}
				};
				(e.$NTb = Oi), (e.$NTb = Oi = Ne([j(1, Q.$6Sb)], Oi));
				let yi = class extends i.$rj {
					constructor(Tt, qt, At, Yt, ni, bi, fi, Ti) {
						super(Tt, qt),
							(this.f = At),
							(this.g = Yt),
							(this.h = ni),
							(this.t = bi),
							(this.L = fi),
							(this.M = Ti);
					}
					N(Tt) {
						return this.R(Tt).then(
							({ created: qt, content: At }) =>
								this.Q(At, Tt, ["recommendations"]).then((Yt) =>
									this.t.openEditor({
										resource: Tt,
										options: { pinned: qt, selection: Yt },
									}),
								),
							(qt) =>
								Promise.reject(new Error((0, t.localize)(6332, null, qt))),
						);
					}
					O(Tt) {
						return this.P(Tt)
							.then((qt) =>
								this.Q(qt.value.toString(), qt.resource, [
									"extensions",
									"recommendations",
								]),
							)
							.then((qt) =>
								this.t.openEditor({
									resource: Tt,
									options: { selection: qt, forceReload: !0 },
								}),
							);
					}
					P(Tt) {
						return Promise.resolve(this.g.readFile(Tt)).then((qt) => {
							const At = d.$do(qt.value.toString()).extensions;
							return !At || !At.recommendations
								? this.L.write(
										Tt,
										[{ path: ["extensions"], value: { recommendations: [] } }],
										!0,
									).then(() => this.g.readFile(Tt))
								: qt;
						});
					}
					Q(Tt, qt, At) {
						const Yt = d.$eo(Tt),
							ni = d.$fo(Yt, At);
						if (ni && ni.parent && ni.parent.children) {
							const bi = ni.parent.children[1],
								fi =
									bi.children && bi.children.length
										? bi.children[bi.children.length - 1]
										: null,
								Ti = fi ? fi.offset + fi.length : bi.offset + 1;
							return Promise.resolve(this.M.createModelReference(qt)).then(
								(wt) => {
									const We = wt.object.textEditorModel.getPositionAt(Ti);
									return (
										wt.dispose(),
										{
											startLineNumber: We.lineNumber,
											startColumn: We.column,
											endLineNumber: We.lineNumber,
											endColumn: We.column,
										}
									);
								},
							);
						}
						return Promise.resolve(void 0);
					}
					R(Tt) {
						return Promise.resolve(this.g.readFile(Tt)).then(
							(qt) => ({
								created: !1,
								extensionsFileResource: Tt,
								content: qt.value.toString(),
							}),
							(qt) =>
								this.h
									.write(Tt, a.$8Qb)
									.then(() => ({
										created: !0,
										extensionsFileResource: Tt,
										content: a.$8Qb,
									})),
						);
					}
				};
				(e.$OTb = yi),
					(e.$OTb = yi =
						Ne(
							[
								j(2, b.$Vi),
								j(3, f.$ll),
								j(4, x.$kZ),
								j(5, R.$IY),
								j(6, P.$$Qb),
								j(7, k.$MO),
							],
							yi,
						));
				let Ai = class extends yi {
					static {
						this.ID =
							"workbench.extensions.action.configureWorkspaceRecommendedExtensions";
					}
					static {
						this.LABEL = (0, t.localize)(6333, null);
					}
					constructor(Tt, qt, At, Yt, ni, bi, fi, Ti) {
						super(Tt, qt, ni, At, Yt, bi, fi, Ti),
							this.D(this.f.onDidChangeWorkbenchState(() => this.S(), this)),
							this.S();
					}
					S() {
						this.enabled =
							this.f.getWorkbenchState() !== b.WorkbenchState.EMPTY;
					}
					run() {
						switch (this.f.getWorkbenchState()) {
							case b.WorkbenchState.FOLDER:
								return this.N(
									this.f.getWorkspace().folders[0].toResource(K.$CRb),
								);
							case b.WorkbenchState.WORKSPACE:
								return this.O(this.f.getWorkspace().configuration);
						}
						return Promise.resolve();
					}
				};
				(e.$PTb = Ai),
					(e.$PTb = Ai =
						Ne(
							[
								j(2, f.$ll),
								j(3, x.$kZ),
								j(4, b.$Vi),
								j(5, R.$IY),
								j(6, P.$$Qb),
								j(7, k.$MO),
							],
							Ai,
						));
				let li = class extends yi {
					static {
						this.ID =
							"workbench.extensions.action.configureWorkspaceFolderRecommendedExtensions";
					}
					static {
						this.LABEL = (0, t.localize)(6334, null);
					}
					constructor(Tt, qt, At, Yt, ni, bi, fi, Ti, wt) {
						super(Tt, qt, ni, At, Yt, bi, fi, Ti), (this.S = wt);
					}
					run() {
						const qt =
							this.f.getWorkspace().folders.length === 1
								? Promise.resolve(this.f.getWorkspace().folders[0])
								: this.S.executeCommand(M.$qRb);
						return Promise.resolve(qt).then((At) =>
							At ? this.N(At.toResource(K.$CRb)) : null,
						);
					}
				};
				(e.$QTb = li),
					(e.$QTb = li =
						Ne(
							[
								j(2, f.$ll),
								j(3, x.$kZ),
								j(4, b.$Vi),
								j(5, R.$IY),
								j(6, P.$$Qb),
								j(7, k.$MO),
								j(8, $.$ek),
							],
							li,
						));
				let Vi = class extends i.$rj {
					static {
						Ze = this;
					}
					static {
						this.f = `${lt.TEXT_ACTION_CLASS} extension-status-label`;
					}
					static {
						this.g = `${this.f} hide`;
					}
					get extension() {
						return this.N;
					}
					set extension(Tt) {
						(this.N && Tt && (0, g.$7p)(this.N.identifier, Tt.identifier)) ||
							((this.h = null), (this.t = null), (this.M = null)),
							(this.N = Tt),
							this.update();
					}
					constructor(Tt, qt, At) {
						super("extensions.action.statusLabel", "", Ze.g, !1),
							(this.O = Tt),
							(this.P = qt),
							(this.Q = At),
							(this.h = null),
							(this.t = null),
							(this.L = null),
							(this.M = null),
							(this.N = null);
					}
					update() {
						const Tt = this.R();
						(this.label = Tt || ""), (this.class = Tt ? Ze.f : Ze.g);
					}
					R() {
						if (!this.extension) return null;
						const Tt = this.t,
							qt = this.L,
							At = this.M;
						(this.t = this.extension.state),
							(this.L = this.extension.version),
							this.h === null && (this.h = this.t),
							(this.M = this.extension.enablementState);
						const Yt = () => {
								const bi = this.O.extensions.filter((fi) =>
									(0, g.$7p)(
										{ id: fi.identifier.value, uuid: fi.uuid },
										this.extension.identifier,
									),
								)[0];
								return this.extension.local
									? bi && this.extension.version === bi.version
										? !0
										: this.O.canAddExtension((0, l.$y2)(this.extension.local))
									: !1;
							},
							ni = () =>
								this.extension.local
									? this.O.extensions.every(
											(bi) =>
												!(
													(0, g.$7p)(
														{ id: bi.identifier.value, uuid: bi.uuid },
														this.extension.identifier,
													) &&
													this.extension.server ===
														this.P.getExtensionManagementServer((0, l.$x2)(bi))
												),
										)
										? !0
										: this.O.canRemoveExtension(
												(0, l.$y2)(this.extension.local),
											)
									: !1;
						if (Tt !== null) {
							if (
								Tt === u.ExtensionState.Installing &&
								this.t === u.ExtensionState.Installed
							)
								return Yt()
									? this.h === u.ExtensionState.Installed && this.L !== qt
										? (0, t.localize)(6335, null)
										: (0, t.localize)(6336, null)
									: null;
							if (
								Tt === u.ExtensionState.Uninstalling &&
								this.t === u.ExtensionState.Uninstalled
							)
								return (
									(this.h = this.t), ni() ? (0, t.localize)(6337, null) : null
								);
						}
						if (At !== null) {
							const bi = this.Q.isEnabledEnablementState(At),
								fi = this.Q.isEnabledEnablementState(this.M);
							if (!bi && fi) return Yt() ? (0, t.localize)(6338, null) : null;
							if (bi && !fi) return ni() ? (0, t.localize)(6339, null) : null;
						}
						return null;
					}
					run() {
						return Promise.resolve();
					}
				};
				(e.$RTb = Vi),
					(e.$RTb =
						Vi =
						Ze =
							Ne([j(0, l.$q2), j(1, c.$EQb), j(2, c.$IQb)], Vi));
				let wi = class extends It {
					static {
						et = this;
					}
					static {
						this.O = `${lt.ICON_ACTION_CLASS} extension-sync ${I.ThemeIcon.asClassName(Y.$jSb)}`;
					}
					static {
						this.P = `${this.ICON_ACTION_CLASS} extension-sync ${I.ThemeIcon.asClassName(Y.$iSb)}`;
					}
					constructor(Tt, qt, At, Yt) {
						super("extensions.sync", "", et.P, !1, Yt),
							(this.Q = Tt),
							(this.R = qt),
							(this.S = At),
							this.D(
								C.Event.filter(this.Q.onDidChangeConfiguration, (ni) =>
									ni.affectsConfiguration("settingsSync.ignoredExtensions"),
								)(() => this.update()),
							),
							this.D(At.onDidChangeEnablement(() => this.update())),
							this.update();
					}
					update() {
						if (
							((this.enabled =
								!!this.extension &&
								this.S.isEnabled() &&
								this.extension.state === u.ExtensionState.Installed),
							this.extension)
						) {
							const Tt = this.R.isExtensionIgnoredToSync(this.extension);
							(this.class = Tt ? et.O : et.P),
								(this.tooltip = Tt
									? (0, t.localize)(6340, null)
									: (0, t.localize)(6341, null));
						}
					}
					async run() {
						return super.run({
							actionGroups: [
								[
									new i.$rj(
										"extensions.syncignore",
										this.R.isExtensionIgnoredToSync(this.extension)
											? (0, t.localize)(6342, null)
											: (0, t.localize)(6343, null),
										void 0,
										!0,
										() => this.R.toggleExtensionIgnoredToSync(this.extension),
									),
								],
							],
							disposeActionsOnHide: !0,
						});
					}
				};
				(e.$STb = wi),
					(e.$STb =
						wi =
						et =
							Ne([j(0, v.$gj), j(1, u.$MQb), j(2, W.$4Rb), j(3, o.$Li)], wi));
				let _t = class extends lt {
					static {
						rt = this;
					}
					static {
						this.M = `${lt.ICON_ACTION_CLASS} extension-status`;
					}
					get status() {
						return this.N;
					}
					constructor(Tt, qt, At, Yt, ni, bi, fi, Ti, wt, We, _e, Si) {
						super("extensions.status", "", `${rt.M} hide`, !1),
							(this.Q = Tt),
							(this.R = qt),
							(this.S = At),
							(this.U = Yt),
							(this.W = ni),
							(this.X = bi),
							(this.Y = fi),
							(this.Z = Ti),
							(this.$ = wt),
							(this.ab = We),
							(this.bb = _e),
							(this.cb = Si),
							(this.updateWhenCounterExtensionChanges = !0),
							(this.N = []),
							(this.O = this.D(new C.$re())),
							(this.onDidChangeStatus = this.O.event),
							(this.P = new w.$Gh()),
							this.D(this.R.onDidChangeFormatters(() => this.update(), this)),
							this.D(this.Y.onDidChangeExtensions(() => this.update())),
							this.D(this.cb.onDidChangeAccessData(() => this.update())),
							this.update();
					}
					update() {
						this.P.queue(() => this.db());
					}
					async db() {
						if ((this.eb(void 0, !0), (this.enabled = !1), !this.extension))
							return;
						if (this.extension.isMalicious) {
							this.eb(
								{
									icon: Y.$uSb,
									message: new te.$cl((0, t.localize)(6344, null)),
								},
								!0,
							);
							return;
						}
						if (this.extension.deprecationInfo) {
							if (this.extension.deprecationInfo.extension) {
								const ni = `[${this.extension.deprecationInfo.extension.displayName}](${y.URI.parse(`command:extension.open?${encodeURIComponent(JSON.stringify([this.extension.deprecationInfo.extension.id]))}`)})`;
								this.eb(
									{
										icon: Y.$uSb,
										message: new te.$cl((0, t.localize)(6345, null, ni)),
									},
									!0,
								);
							} else if (this.extension.deprecationInfo.settings) {
								const ni = `[${(0, t.localize)(6346, null)}](${y.URI.parse(`command:workbench.action.openSettings?${encodeURIComponent(JSON.stringify([this.extension.deprecationInfo.settings.map((bi) => `@id:${bi}`).join(" ")]))}`)})`;
								this.eb(
									{
										icon: Y.$uSb,
										message: new te.$cl((0, t.localize)(6347, null, ni)),
									},
									!0,
								);
							} else {
								const ni = new te.$cl((0, t.localize)(6348, null));
								this.extension.deprecationInfo.additionalInfo &&
									ni.appendMarkdown(
										` ${this.extension.deprecationInfo.additionalInfo}`,
									),
									this.eb({ icon: Y.$uSb, message: ni }, !0);
							}
							return;
						}
						if (this.X.canSetLanguage(this.extension)) return;
						if (
							this.extension.outdated &&
							this.X.isAutoUpdateEnabledFor(this.extension)
						) {
							const ni = await this.X.shouldRequireConsentToUpdate(
								this.extension,
							);
							if (ni) {
								const bi = new te.$cl();
								bi.appendMarkdown(`${ni} `),
									bi.appendMarkdown(
										(0, t.localize)(
											6349,
											null,
											this.extension.hasChangelog()
												? y.URI.parse(
														`command:extension.open?${encodeURIComponent(JSON.stringify([this.extension.identifier.id, u.ExtensionEditorTab.Changelog]))}`,
													).toString()
												: this.extension.repository
													? this.extension.repository
													: y.URI.parse(
															`command:extension.open?${encodeURIComponent(JSON.stringify([this.extension.identifier.id]))}`,
														).toString(),
										),
									),
									this.eb({ icon: Y.$uSb, message: bi }, !0);
							}
						}
						if (
							this.extension.gallery &&
							this.extension.state === u.ExtensionState.Uninstalled &&
							!(await this.X.canInstall(this.extension))
						) {
							if (
								this.Q.localExtensionManagementServer ||
								this.Q.remoteExtensionManagementServer
							) {
								const ni = await (this.Q.localExtensionManagementServer
										? this.Q.localExtensionManagementServer.extensionManagementService.getTargetPlatform()
										: this.Q.remoteExtensionManagementServer.extensionManagementService.getTargetPlatform()),
									bi = (0, ye.$Oq)(this.extension)
										? new te.$cl(
												(0, ye.$Pq)(this.extension) ??
													"Extension is unsupported in Cursor.",
											)
										: new te.$cl(
												`${(0, t.localize)(6350, null, this.extension.displayName || this.extension.identifier.id, this.ab.nameLong, (0, h.$yp)(ni))} [${(0, t.localize)(6351, null)}](https://aka.ms/vscode-platform-specific-extensions)`,
											);
								this.eb({ icon: Y.$uSb, message: bi }, !0);
								return;
							}
							if (this.Q.webExtensionManagementServer) {
								const ni = (0, t.localize)(6352, null, this.ab.nameLong),
									bi = new te.$cl(
										`${(0, t.localize)(6353, null, this.extension.displayName || this.extension.identifier.id, ni)} [${(0, t.localize)(6354, null)}](https://aka.ms/vscode-web-extensions-guide)`,
									);
								this.eb({ icon: Y.$uSb, message: bi }, !0);
								return;
							}
						}
						if (
							!this.extension.local ||
							!this.extension.server ||
							this.extension.state !== u.ExtensionState.Installed
						)
							return;
						if (
							this.extension.enablementState ===
							c.EnablementState.DisabledByEnvironment
						) {
							this.eb({ message: new te.$cl((0, t.localize)(6355, null)) }, !0);
							return;
						}
						if (
							this.extension.enablementState ===
							c.EnablementState.EnabledByEnvironment
						) {
							this.eb({ message: new te.$cl((0, t.localize)(6356, null)) }, !0);
							return;
						}
						if (
							this.extension.enablementState ===
							c.EnablementState.DisabledByVirtualWorkspace
						) {
							const ni = (0, p.$En)(
								this.extension.local.manifest.capabilities?.virtualWorkspaces,
							);
							this.eb(
								{
									icon: Y.$vSb,
									message: new te.$cl(
										ni ? (0, te.$gl)(ni) : (0, t.localize)(6357, null),
									),
								},
								!0,
							);
							return;
						}
						if ((0, _.$H8)(this.$.getWorkspace())) {
							const ni = this.Z.getExtensionVirtualWorkspaceSupportType(
									this.extension.local.manifest,
								),
								bi = (0, p.$En)(
									this.extension.local.manifest.capabilities?.virtualWorkspaces,
								);
							if (ni === "limited" || bi) {
								this.eb(
									{
										icon: Y.$uSb,
										message: new te.$cl(
											bi ? (0, te.$gl)(bi) : (0, t.localize)(6358, null),
										),
									},
									!0,
								);
								return;
							}
						}
						if (
							this.extension.enablementState ===
								c.EnablementState.DisabledByTrustRequirement ||
							(this.extension.enablementState ===
								c.EnablementState.DisabledByExtensionDependency &&
								this.bb
									.getDependenciesEnablementStates(this.extension.local)
									.every(
										([, ni]) =>
											this.bb.isEnabledEnablementState(ni) ||
											ni === c.EnablementState.DisabledByTrustRequirement,
									))
						) {
							this.enabled = !0;
							const ni = (0, p.$En)(
								this.extension.local.manifest.capabilities?.untrustedWorkspaces,
							);
							this.eb(
								{
									icon: Y.$wSb,
									message: new te.$cl(
										ni ? (0, te.$gl)(ni) : (0, t.localize)(6359, null),
									),
								},
								!0,
							);
							return;
						}
						if (
							this.U.isWorkspaceTrustEnabled() &&
							!this.W.isWorkspaceTrusted()
						) {
							const ni = this.Z.getExtensionUntrustedWorkspaceSupportType(
									this.extension.local.manifest,
								),
								bi = (0, p.$En)(
									this.extension.local.manifest.capabilities
										?.untrustedWorkspaces,
								);
							if (ni === "limited" || bi) {
								(this.enabled = !0),
									this.eb(
										{
											icon: Y.$wSb,
											message: new te.$cl(
												bi ? (0, te.$gl)(bi) : (0, t.localize)(6360, null),
											),
										},
										!0,
									);
								return;
							}
						}
						if (
							this.extension.enablementState ===
								c.EnablementState.DisabledByExtensionKind &&
							!this.X.installed.some(
								(ni) =>
									(0, g.$7p)(ni.identifier, this.extension.identifier) &&
									ni.server !== this.extension.server,
							)
						) {
							let ni;
							this.Q.localExtensionManagementServer === this.extension.server
								? this.Z.prefersExecuteOnWorkspace(
										this.extension.local.manifest,
									) &&
									this.Q.remoteExtensionManagementServer &&
									(ni = new te.$cl(
										`${(0, t.localize)(6361, null, this.Q.remoteExtensionManagementServer.label)} [${(0, t.localize)(6362, null)}](https://code.visualstudio.com/api/advanced-topics/remote-extensions#architecture-and-extension-kinds)`,
									))
								: this.Q.remoteExtensionManagementServer ===
										this.extension.server
									? this.Z.prefersExecuteOnUI(this.extension.local.manifest) &&
										(this.Q.localExtensionManagementServer
											? (ni = new te.$cl(
													`${(0, t.localize)(6363, null, this.Q.remoteExtensionManagementServer.label)} [${(0, t.localize)(6364, null)}](https://code.visualstudio.com/api/advanced-topics/remote-extensions#architecture-and-extension-kinds)`,
												))
											: ie.$r &&
												(ni = new te.$cl(
													`${(0, t.localize)(6365, null, this.ab.nameLong)} [${(0, t.localize)(6366, null)}](https://code.visualstudio.com/api/advanced-topics/remote-extensions#architecture-and-extension-kinds)`,
												)))
									: this.Q.webExtensionManagementServer ===
											this.extension.server &&
										(ni = new te.$cl(
											`${(0, t.localize)(6367, null, this.ab.nameLong)} [${(0, t.localize)(6368, null)}](https://code.visualstudio.com/api/advanced-topics/remote-extensions#architecture-and-extension-kinds)`,
										)),
								ni && this.eb({ icon: Y.$uSb, message: ni }, !0);
							return;
						}
						const Tt = new p.$Gn(this.extension.identifier.id),
							qt = fe.$Io
								.as(ue.Extensions.ExtensionFeaturesRegistry)
								.getExtensionFeatures();
						for (const ni of qt) {
							const bi = this.cb.getAccessData(Tt, ni.id)?.current?.status,
								fi = `[${(0, t.localize)(6369, null)}](${y.URI.parse(`command:extension.open?${encodeURIComponent(JSON.stringify([this.extension.identifier.id, u.ExtensionEditorTab.Features, !1, ni.id]))}`)})`;
							if (bi?.severity === N.Severity.Error) {
								this.eb(
									{
										icon: Y.$tSb,
										message: new te.$cl()
											.appendText(bi.message)
											.appendMarkdown(` ${fi}`),
									},
									!0,
								);
								return;
							}
							if (bi?.severity === N.Severity.Warning) {
								this.eb(
									{
										icon: Y.$uSb,
										message: new te.$cl()
											.appendText(bi.message)
											.appendMarkdown(` ${fi}`),
									},
									!0,
								);
								return;
							}
						}
						if (this.Q.remoteExtensionManagementServer) {
							if ((0, p.$Kn)(this.extension.local.manifest)) {
								if (
									!this.X.installed.some(
										(fi) =>
											(0, g.$7p)(fi.identifier, this.extension.identifier) &&
											fi.server !== this.extension.server,
									)
								) {
									const fi =
										this.extension.server ===
										this.Q.localExtensionManagementServer
											? new te.$cl(
													(0, t.localize)(
														6370,
														null,
														this.Q.remoteExtensionManagementServer.label,
													),
												)
											: new te.$cl((0, t.localize)(6371, null));
									this.eb({ icon: Y.$vSb, message: fi }, !0);
								}
								return;
							}
							const ni = this.Y.extensions.filter((fi) =>
									(0, g.$7p)(
										{ id: fi.identifier.value, uuid: fi.uuid },
										this.extension.identifier,
									),
								)[0],
								bi = ni
									? this.Q.getExtensionManagementServer((0, l.$x2)(ni))
									: null;
							if (
								this.extension.server ===
									this.Q.localExtensionManagementServer &&
								bi === this.Q.remoteExtensionManagementServer
							) {
								this.Z.prefersExecuteOnWorkspace(
									this.extension.local.manifest,
								) &&
									this.eb(
										{
											icon: Y.$vSb,
											message: new te.$cl(
												`${(0, t.localize)(6372, null)} [${(0, t.localize)(6373, null)}](https://code.visualstudio.com/api/advanced-topics/remote-extensions#architecture-and-extension-kinds)`,
											),
										},
										!0,
									);
								return;
							}
							if (
								this.extension.server ===
									this.Q.remoteExtensionManagementServer &&
								bi === this.Q.localExtensionManagementServer
							) {
								this.Z.prefersExecuteOnUI(this.extension.local.manifest) &&
									this.eb(
										{
											icon: Y.$vSb,
											message: new te.$cl(
												`${(0, t.localize)(6374, null)} [${(0, t.localize)(6375, null)}](https://code.visualstudio.com/api/advanced-topics/remote-extensions#architecture-and-extension-kinds)`,
											),
										},
										!0,
									);
								return;
							}
							if (
								this.extension.server ===
									this.Q.remoteExtensionManagementServer &&
								bi === this.Q.webExtensionManagementServer
							) {
								this.Z.canExecuteOnWeb(this.extension.local.manifest) &&
									this.eb(
										{
											icon: Y.$vSb,
											message: new te.$cl(
												`${(0, t.localize)(6376, null)} [${(0, t.localize)(6377, null)}](https://code.visualstudio.com/api/advanced-topics/remote-extensions#architecture-and-extension-kinds)`,
											),
										},
										!0,
									);
								return;
							}
						}
						if (
							this.extension.enablementState ===
							c.EnablementState.DisabledByExtensionDependency
						) {
							this.eb(
								{
									icon: Y.$uSb,
									message: new te.$cl((0, t.localize)(6378, null)),
								},
								!0,
							);
							return;
						}
						const At = this.bb.isEnabled(this.extension.local),
							Yt = this.Y.extensions.some((ni) =>
								(0, g.$7p)(
									{ id: ni.identifier.value, uuid: ni.uuid },
									this.extension.identifier,
								),
							);
						if (!this.extension.isWorkspaceScoped && At && Yt) {
							if (
								this.extension.enablementState ===
								c.EnablementState.EnabledWorkspace
							) {
								this.eb(
									{ message: new te.$cl((0, t.localize)(6379, null)) },
									!0,
								);
								return;
							}
							if (
								this.Q.localExtensionManagementServer &&
								this.Q.remoteExtensionManagementServer &&
								this.extension.server === this.Q.remoteExtensionManagementServer
							) {
								this.eb(
									{
										message: new te.$cl(
											(0, t.localize)(6380, null, this.extension.server.label),
										),
									},
									!0,
								);
								return;
							}
							if (
								this.extension.enablementState ===
								c.EnablementState.EnabledGlobally
							)
								return;
						}
						if (!At && !Yt) {
							if (
								this.extension.enablementState ===
								c.EnablementState.DisabledGlobally
							) {
								this.eb(
									{ message: new te.$cl((0, t.localize)(6381, null)) },
									!0,
								);
								return;
							}
							if (
								this.extension.enablementState ===
								c.EnablementState.DisabledWorkspace
							) {
								this.eb(
									{ message: new te.$cl((0, t.localize)(6382, null)) },
									!0,
								);
								return;
							}
						}
						if (At && !Yt && !this.extension.local.isValid) {
							const ni = this.extension.local.validations
								.filter(([bi]) => bi === N.Severity.Error)
								.map(([, bi]) => bi);
							this.eb(
								{ icon: Y.$tSb, message: new te.$cl(ni.join(" ").trim()) },
								!0,
							);
						}
					}
					eb(Tt, qt) {
						if (Tt) {
							if (
								this.N.some(
									(At) =>
										At.message.value === Tt.message.value &&
										At.icon?.id === Tt.icon?.id,
								)
							)
								return;
						} else {
							if (this.N.length === 0) return;
							this.N = [];
						}
						Tt &&
							(this.N.push(Tt),
							this.N.sort((At, Yt) =>
								Yt.icon === Y.$wSb
									? -1
									: At.icon === Y.$wSb
										? 1
										: Yt.icon === Y.$tSb
											? -1
											: At.icon === Y.$tSb
												? 1
												: Yt.icon === Y.$uSb
													? -1
													: At.icon === Y.$uSb
														? 1
														: Yt.icon === Y.$vSb
															? -1
															: At.icon === Y.$vSb
																? 1
																: 0,
							)),
							qt &&
								(Tt?.icon === Y.$tSb
									? (this.class = `${rt.M} extension-status-error ${I.ThemeIcon.asClassName(Y.$tSb)}`)
									: Tt?.icon === Y.$uSb
										? (this.class = `${rt.M} extension-status-warning ${I.ThemeIcon.asClassName(Y.$uSb)}`)
										: Tt?.icon === Y.$vSb
											? (this.class = `${rt.M} extension-status-info ${I.ThemeIcon.asClassName(Y.$vSb)}`)
											: Tt?.icon === Y.$wSb
												? (this.class = `${rt.M} ${I.ThemeIcon.asClassName(Y.$wSb)}`)
												: (this.class = `${rt.M} hide`)),
							this.O.fire();
					}
					async run() {
						if (this.N[0]?.icon === Y.$wSb)
							return this.S.executeCommand("workbench.trust.manage");
					}
				};
				(e.$TTb = _t),
					(e.$TTb =
						_t =
						rt =
							Ne(
								[
									j(0, c.$EQb),
									j(1, F.$3N),
									j(2, $.$ek),
									j(3, ee.$oO),
									j(4, ee.$pO),
									j(5, u.$MQb),
									j(6, l.$q2),
									j(7, ne.$JSb),
									j(8, b.$Vi),
									j(9, H.$Bk),
									j(10, c.$IQb),
									j(11, ue.$$Sb),
								],
								_t,
							));
				let ai = class extends i.$rj {
					static {
						ft = this;
					}
					static {
						this.ID = "workbench.extensions.action.reinstall";
					}
					static {
						this.LABEL = (0, t.localize)(6383, null);
					}
					constructor(Tt = ft.ID, qt = ft.LABEL, At, Yt, ni, bi, fi, Ti, wt) {
						super(Tt, qt),
							(this.f = At),
							(this.g = Yt),
							(this.h = ni),
							(this.t = bi),
							(this.L = fi),
							(this.M = Ti),
							(this.N = wt);
					}
					get enabled() {
						return (
							this.f.local.filter((Tt) => !Tt.isBuiltin && Tt.local).length > 0
						);
					}
					run() {
						return this.h
							.pick(this.O(), { placeHolder: (0, t.localize)(6384, null) })
							.then((Tt) => Tt && this.P(Tt.extension));
					}
					O() {
						return this.f
							.queryLocal()
							.then((Tt) =>
								Tt.filter(
									(At) =>
										!At.isBuiltin &&
										At.server !== this.g.webExtensionManagementServer,
								).map((At) => ({
									id: At.identifier.id,
									label: At.displayName,
									description: At.identifier.id,
									extension: At,
								})),
							);
					}
					P(Tt) {
						return this.M.createInstance(Oi, "@installed ")
							.run()
							.then(() =>
								this.f.reinstall(Tt).then(
									(qt) => {
										const At = !(
												qt.local && this.N.canAddExtension((0, l.$y2)(qt.local))
											),
											Yt = At
												? (0, t.localize)(6385, null, qt.identifier.id)
												: (0, t.localize)(6386, null, qt.identifier.id),
											ni = At
												? [
														{
															label: (0, t.localize)(6387, null),
															run: () => this.L.reload(),
														},
													]
												: [];
										this.t.prompt(N.Severity.Info, Yt, ni, { sticky: !0 });
									},
									(qt) => this.t.error(qt),
								),
							);
					}
				};
				(e.$UTb = ai),
					(e.$UTb =
						ai =
						ft =
							Ne(
								[
									j(2, u.$MQb),
									j(3, c.$EQb),
									j(4, O.$DJ),
									j(5, N.$4N),
									j(6, s.$asb),
									j(7, o.$Li),
									j(8, l.$q2),
								],
								ai,
							));
				let Ft = class extends i.$rj {
					static {
						bt = this;
					}
					static {
						this.ID = "workbench.extensions.action.install.specificVersion";
					}
					static {
						this.LABEL = (0, t.localize)(6388, null);
					}
					constructor(Tt = bt.ID, qt = bt.LABEL, At, Yt, ni, bi) {
						super(Tt, qt),
							(this.f = At),
							(this.g = Yt),
							(this.h = ni),
							(this.t = bi);
					}
					get enabled() {
						return this.f.local.some((Tt) => this.L(Tt));
					}
					async run() {
						const Tt = await this.g.pick(this.M(), {
							placeHolder: (0, t.localize)(6389, null),
							matchOnDetail: !0,
						});
						Tt &&
							Tt.extension &&
							(await this.h.createInstance(mi, Tt.extension, !0).run(),
							await this.h
								.createInstance(Oi, Tt.extension.identifier.id)
								.run());
					}
					L(Tt) {
						return (
							this.h.createInstance(mi, Tt, !0).enabled &&
							!!Tt.local &&
							this.t.isEnabled(Tt.local)
						);
					}
					async M() {
						const Tt = await this.f.queryLocal(),
							qt = [];
						for (const At of Tt)
							this.L(At) &&
								qt.push({
									id: At.identifier.id,
									label: At.displayName || At.identifier.id,
									description: At.identifier.id,
									extension: At,
								});
						return qt.sort((At, Yt) =>
							At.extension.displayName.localeCompare(Yt.extension.displayName),
						);
					}
				};
				(e.$VTb = Ft),
					(e.$VTb =
						Ft =
						bt =
							Ne([j(2, u.$MQb), j(3, O.$DJ), j(4, o.$Li), j(5, c.$IQb)], Ft));
				let Xt = class extends i.$rj {
					constructor(Tt, qt, At, Yt, ni) {
						super(Tt),
							(this.g = qt),
							(this.h = At),
							(this.t = Yt),
							(this.L = ni),
							(this.f = void 0),
							this.N(),
							this.g.queryLocal().then(() => this.M()),
							this.D(
								this.g.onChange(() => {
									this.f && this.M();
								}),
							);
					}
					M() {
						(this.f = this.g.local), this.N();
					}
					N() {
						(this.enabled = !!this.f && this.S(this.f).length > 0),
							(this.tooltip = this.label);
					}
					async run() {
						return this.P();
					}
					async O() {
						const Tt = await this.g.queryLocal();
						return this.S(Tt);
					}
					async P() {
						const Tt = this.h.createQuickPick();
						Tt.busy = !0;
						const qt = Tt.onDidAccept(() => {
							qt.dispose(), Tt.hide(), Tt.dispose(), this.Q(Tt.selectedItems);
						});
						Tt.show();
						const At = await this.O();
						(Tt.busy = !1),
							At.length
								? ((Tt.title = this.R()),
									(Tt.placeholder = (0, t.localize)(6390, null)),
									(Tt.canSelectMany = !0),
									At.sort((Yt, ni) =>
										Yt.displayName.localeCompare(ni.displayName),
									),
									(Tt.items = At.map((Yt) => ({
										extension: Yt,
										label: Yt.displayName,
										description: Yt.version,
									}))))
								: (Tt.hide(),
									Tt.dispose(),
									this.t.notify({
										severity: N.Severity.Info,
										message: (0, t.localize)(6391, null),
									}));
					}
					async Q(Tt) {
						if (Tt.length) {
							const qt = Tt.filter((At) => !!At.extension).map(
								(At) => At.extension,
							);
							qt.length &&
								(await this.L.withProgress(
									{
										location: V.ProgressLocation.Notification,
										title: (0, t.localize)(6392, null),
									},
									() => this.U(qt),
								),
								this.t.info((0, t.localize)(6393, null)));
						}
					}
				};
				(e.$WTb = Xt),
					(e.$WTb = Xt =
						Ne([j(1, u.$MQb), j(2, O.$DJ), j(3, N.$4N), j(4, V.$8N)], Xt));
				let $t = class extends Xt {
					constructor(Tt, qt, At, Yt, ni, bi, fi, Ti, wt) {
						super(
							"workbench.extensions.actions.installLocalExtensionsInRemote",
							Tt,
							qt,
							Yt,
							At,
						),
							(this.W = ni),
							(this.X = bi),
							(this.Y = fi),
							(this.Z = Ti),
							(this.$ = wt);
					}
					get label() {
						return this.W && this.W.remoteExtensionManagementServer
							? (0, t.localize)(
									6394,
									null,
									this.W.remoteExtensionManagementServer.label,
								)
							: "";
					}
					R() {
						return (0, t.localize)(
							6395,
							null,
							this.W.remoteExtensionManagementServer.label,
						);
					}
					S(Tt) {
						return Tt.filter((qt) => {
							const At = this.Y.createInstance(ti, !0);
							return (At.extension = qt), At.enabled;
						});
					}
					async U(Tt) {
						const qt = [],
							At = [],
							Yt =
								await this.W.remoteExtensionManagementServer.extensionManagementService.getTargetPlatform();
						await w.Promises.settled(
							Tt.map(async (ni) => {
								if (this.X.isEnabled()) {
									const fi = (
										await this.X.getExtensions(
											[
												{
													...ni.identifier,
													preRelease: !!ni.local?.preRelease,
												},
											],
											{ targetPlatform: Yt, compatible: !0 },
											B.CancellationToken.None,
										)
									)[0];
									if (fi) {
										qt.push(fi);
										return;
									}
								}
								const bi =
									await this.W.localExtensionManagementServer.extensionManagementService.zip(
										ni.local,
									);
								At.push(bi);
							}),
						),
							await w.Promises.settled(
								qt.map((ni) =>
									this.W.remoteExtensionManagementServer.extensionManagementService.installFromGallery(
										ni,
									),
								),
							);
						try {
							await w.Promises.settled(
								At.map((ni) =>
									this.W.remoteExtensionManagementServer.extensionManagementService.install(
										ni,
									),
								),
							);
						} finally {
							try {
								await Promise.allSettled(At.map((ni) => this.Z.del(ni)));
							} catch (ni) {
								this.$.error(ni);
							}
						}
					}
				};
				(e.$XTb = $t),
					(e.$XTb = $t =
						Ne(
							[
								j(0, u.$MQb),
								j(1, O.$DJ),
								j(2, V.$8N),
								j(3, N.$4N),
								j(4, c.$EQb),
								j(5, h.$Ep),
								j(6, o.$Li),
								j(7, f.$ll),
								j(8, X.$ik),
							],
							$t,
						));
				let ut = class extends Xt {
					constructor(Tt, qt, At, Yt, ni, bi, fi, Ti, wt) {
						super(Tt, qt, At, ni, Yt),
							(this.W = bi),
							(this.X = fi),
							(this.Y = Ti),
							(this.Z = wt);
					}
					get label() {
						return (0, t.localize)(6396, null);
					}
					R() {
						return (0, t.localize)(6397, null);
					}
					S(Tt) {
						return Tt.filter(
							(qt) =>
								qt.type === p.ExtensionType.User &&
								qt.server !== this.W.localExtensionManagementServer &&
								!this.g.installed.some(
									(At) =>
										At.server === this.W.localExtensionManagementServer &&
										(0, g.$7p)(At.identifier, qt.identifier),
								),
						);
					}
					async U(Tt) {
						const qt = [],
							At = [],
							Yt =
								await this.W.localExtensionManagementServer.extensionManagementService.getTargetPlatform();
						await w.Promises.settled(
							Tt.map(async (ni) => {
								if (this.X.isEnabled()) {
									const fi = (
										await this.X.getExtensions(
											[
												{
													...ni.identifier,
													preRelease: !!ni.local?.preRelease,
												},
											],
											{ targetPlatform: Yt, compatible: !0 },
											B.CancellationToken.None,
										)
									)[0];
									if (fi) {
										qt.push(fi);
										return;
									}
								}
								const bi =
									await this.W.remoteExtensionManagementServer.extensionManagementService.zip(
										ni.local,
									);
								At.push(bi);
							}),
						),
							await w.Promises.settled(
								qt.map((ni) =>
									this.W.localExtensionManagementServer.extensionManagementService.installFromGallery(
										ni,
									),
								),
							);
						try {
							await w.Promises.settled(
								At.map((ni) =>
									this.W.localExtensionManagementServer.extensionManagementService.install(
										ni,
									),
								),
							);
						} finally {
							try {
								await Promise.allSettled(At.map((ni) => this.Y.del(ni)));
							} catch (ni) {
								this.Z.error(ni);
							}
						}
					}
				};
				(e.$YTb = ut),
					(e.$YTb = ut =
						Ne(
							[
								j(1, u.$MQb),
								j(2, O.$DJ),
								j(3, V.$8N),
								j(4, N.$4N),
								j(5, c.$EQb),
								j(6, h.$Ep),
								j(7, f.$ll),
								j(8, X.$ik),
							],
							ut,
						)),
					$.$fk.registerCommand(
						"workbench.extensions.action.showExtensionsForLanguage",
						function (Et, Tt) {
							return Et.get(Q.$6Sb)
								.openPaneComposite(u.$LQb, Z.ViewContainerLocation.Sidebar, !0)
								.then((At) => At?.getViewPaneContainer())
								.then((At) => {
									At.search(`ext:${Tt.replace(/^\./, "")}`), At.focus();
								});
						},
					),
					(e.$ZTb = "workbench.extensions.action.showExtensionsWithIds"),
					$.$fk.registerCommand(e.$ZTb, function (Et, Tt) {
						return Et.get(Q.$6Sb)
							.openPaneComposite(u.$LQb, Z.ViewContainerLocation.Sidebar, !0)
							.then((At) => At?.getViewPaneContainer())
							.then((At) => {
								const Yt = Tt.map((ni) => `@id:${ni}`).join(" ");
								At.search(Yt), At.focus();
							});
					}),
					(0, T.$wP)(
						"extensionButton.background",
						{ dark: T.$eS, light: T.$eS, hcDark: null, hcLight: null },
						(0, t.localize)(6398, null),
					),
					(0, T.$wP)(
						"extensionButton.foreground",
						{ dark: T.$cS, light: T.$cS, hcDark: null, hcLight: null },
						(0, t.localize)(6399, null),
					),
					(0, T.$wP)(
						"extensionButton.hoverBackground",
						{ dark: T.$fS, light: T.$fS, hcDark: null, hcLight: null },
						(0, t.localize)(6400, null),
					),
					(0, T.$wP)(
						"extensionButton.separator",
						T.$dS,
						(0, t.localize)(6401, null),
					),
					(e.$1Tb = (0, T.$wP)(
						"extensionButton.prominentBackground",
						{ dark: T.$eS, light: T.$eS, hcDark: null, hcLight: null },
						(0, t.localize)(6402, null),
					)),
					(0, T.$wP)(
						"extensionButton.prominentForeground",
						{ dark: T.$cS, light: T.$cS, hcDark: null, hcLight: null },
						(0, t.localize)(6403, null),
					),
					(0, T.$wP)(
						"extensionButton.prominentHoverBackground",
						{ dark: T.$fS, light: T.$fS, hcDark: null, hcLight: null },
						(0, t.localize)(6404, null),
					),
					(0, S.$oP)((Et, Tt) => {
						const qt = Et.getColor(T.$gQ);
						qt &&
							(Tt.addRule(
								`.extension-editor .header .actions-status-container > .status ${I.ThemeIcon.asCSSSelector(Y.$tSb)} { color: ${qt}; }`,
							),
							Tt.addRule(
								`.extension-editor .body .subcontent .runtime-status ${I.ThemeIcon.asCSSSelector(Y.$tSb)} { color: ${qt}; }`,
							),
							Tt.addRule(
								`.monaco-hover.extension-hover .markdown-hover .hover-contents ${I.ThemeIcon.asCSSSelector(Y.$tSb)} { color: ${qt}; }`,
							));
						const At = Et.getColor(T.$jQ);
						At &&
							(Tt.addRule(
								`.extension-editor .header .actions-status-container > .status ${I.ThemeIcon.asCSSSelector(Y.$uSb)} { color: ${At}; }`,
							),
							Tt.addRule(
								`.extension-editor .body .subcontent .runtime-status ${I.ThemeIcon.asCSSSelector(Y.$uSb)} { color: ${At}; }`,
							),
							Tt.addRule(
								`.monaco-hover.extension-hover .markdown-hover .hover-contents ${I.ThemeIcon.asCSSSelector(Y.$uSb)} { color: ${At}; }`,
							));
						const Yt = Et.getColor(T.$mQ);
						Yt &&
							(Tt.addRule(
								`.extension-editor .header .actions-status-container > .status ${I.ThemeIcon.asCSSSelector(Y.$vSb)} { color: ${Yt}; }`,
							),
							Tt.addRule(
								`.extension-editor .body .subcontent .runtime-status ${I.ThemeIcon.asCSSSelector(Y.$vSb)} { color: ${Yt}; }`,
							),
							Tt.addRule(
								`.monaco-hover.extension-hover .markdown-hover .hover-contents ${I.ThemeIcon.asCSSSelector(Y.$vSb)} { color: ${Yt}; }`,
							));
					});
			},
		),
		