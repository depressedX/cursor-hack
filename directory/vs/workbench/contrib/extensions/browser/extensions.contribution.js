define(
			de[4299],
			he([
				1, 0, 4, 27, 30, 11, 20, 119, 157, 314, 55, 102, 141, 404, 1243, 4298,
				1991, 81, 250, 1731, 31, 5, 1829, 154, 192, 52, 9, 3309, 29, 3386, 33,
				60, 89, 121, 131, 8, 348, 3527, 3751, 522, 787, 18, 4077, 99, 666, 4076,
				40, 87, 100, 828, 23, 1809, 3385, 466, 109, 3, 57, 222, 1242, 44, 1059,
				3061, 63, 6, 142, 3292, 12, 677, 21, 468, 4075, 84, 68, 224,
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
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$5Tc = e.$4Tc = e.$3Tc = void 0),
					(f = mt(f)),
					(0, C.$lK)(h.$MQb, H.$STc, C.InstantiationType.Eager),
					(0, C.$lK)(V.$HTc, G.$TTc, C.InstantiationType.Delayed),
					(0, C.$lK)(r.$9Qb, U.$OTc, C.InstantiationType.Eager),
					w.$Io
						.as(O.$1r.Quickaccess)
						.registerQuickAccessProvider({
							ctor: B.$CTc,
							prefix: B.$CTc.PREFIX,
							placeholder: (0, t.localize)(6097, null),
							helpEntries: [{ description: (0, t.localize)(6098, null) }],
						}),
					w.$Io
						.as(re.$a1.EditorPane)
						.registerEditorPane(
							v.$vVb.create(g.$oTc, g.$oTc.ID, (0, t.localize)(6099, null)),
							[new a.$Ji(n.$KQb)],
						),
					w.$Io
						.as(D.Extensions.ViewContainersRegistry)
						.registerViewContainer(
							{
								id: h.$LQb,
								title: (0, t.localize2)(6195, "Extensions"),
								openCommandActionDescriptor: {
									id: h.$LQb,
									mnemonicTitle: (0, t.localize)(6100, null),
									keybindings: {
										primary: i.KeyMod.CtrlCmd | i.KeyMod.Shift | i.KeyCode.KeyX,
									},
									order: 4,
								},
								ctorDescriptor: new a.$Ji(p.$wTc),
								icon: ee.$aSb,
								order: 4,
								rejectAddedViews: !0,
								alwaysUseContainerInfo: !0,
							},
							D.ViewContainerLocation.Sidebar,
						),
					w.$Io
						.as(o.$No.Configuration)
						.registerConfiguration({
							...m.$HQb,
							properties: {
								"extensions.autoUpdate": {
									enum: [!0, "onlyEnabledExtensions", !1],
									enumItemLabels: [
										(0, t.localize)(6101, null),
										(0, t.localize)(6102, null),
										(0, t.localize)(6103, null),
									],
									enumDescriptions: [
										(0, t.localize)(6104, null),
										(0, t.localize)(6105, null),
										(0, t.localize)(6106, null),
									],
									description: (0, t.localize)(6107, null),
									default: !0,
									scope: o.ConfigurationScope.APPLICATION,
									tags: ["usesOnlineServices"],
								},
								"extensions.autoCheckUpdates": {
									type: "boolean",
									description: (0, t.localize)(6108, null),
									default: !0,
									scope: o.ConfigurationScope.APPLICATION,
									tags: ["usesOnlineServices"],
								},
								"extensions.ignoreRecommendations": {
									type: "boolean",
									description: (0, t.localize)(6109, null),
									default: !1,
								},
								"extensions.showRecommendationsOnlyOnDemand": {
									type: "boolean",
									deprecationMessage: (0, t.localize)(6110, null),
									default: !1,
									tags: ["usesOnlineServices"],
								},
								"extensions.closeExtensionDetailsOnViewChange": {
									type: "boolean",
									description: (0, t.localize)(6111, null),
									default: !1,
								},
								"extensions.confirmedUriHandlerExtensionIds": {
									type: "array",
									items: { type: "string" },
									description: (0, t.localize)(6112, null),
									default: [],
									scope: o.ConfigurationScope.APPLICATION,
								},
								"extensions.webWorker": {
									type: ["boolean", "string"],
									enum: [!0, !1, "auto"],
									enumDescriptions: [
										(0, t.localize)(6113, null),
										(0, t.localize)(6114, null),
										(0, t.localize)(6115, null),
									],
									description: (0, t.localize)(6116, null),
									default: "auto",
								},
								"extensions.supportVirtualWorkspaces": {
									type: "object",
									markdownDescription: (0, t.localize)(6117, null),
									patternProperties: {
										"([a-z0-9A-Z][a-z0-9-A-Z]*)\\.([a-z0-9A-Z][a-z0-9-A-Z]*)$":
											{ type: "boolean", default: !1 },
									},
									additionalProperties: !1,
									default: {},
									defaultSnippets: [{ body: { "pub.name": !1 } }],
								},
								"extensions.experimental.affinity": {
									type: "object",
									markdownDescription: (0, t.localize)(6118, null),
									patternProperties: {
										"([a-z0-9A-Z][a-z0-9-A-Z]*)\\.([a-z0-9A-Z][a-z0-9-A-Z]*)$":
											{ type: "integer", default: 1 },
									},
									additionalProperties: !1,
									default: {
										"vscodevim.vim": 1,
										"asvetliakov.vscode-neovim": 1,
									},
									defaultSnippets: [{ body: { "pub.name": 1 } }],
								},
								[le.$DSb]: {
									type: "object",
									scope: o.ConfigurationScope.APPLICATION,
									markdownDescription: (0, t.localize)(6119, null),
									patternProperties: {
										"([a-z0-9A-Z][a-z0-9-A-Z]*)\\.([a-z0-9A-Z][a-z0-9-A-Z]*)$":
											{
												type: "object",
												properties: {
													supported: {
														type: ["boolean", "string"],
														enum: [!0, !1, "limited"],
														enumDescriptions: [
															(0, t.localize)(6120, null),
															(0, t.localize)(6121, null),
															(0, t.localize)(6122, null),
														],
														description: (0, t.localize)(6123, null),
													},
													version: {
														type: "string",
														description: (0, t.localize)(6124, null),
													},
												},
											},
									},
								},
								"extensions.experimental.deferredStartupFinishedActivation": {
									type: "boolean",
									description: (0, t.localize)(6125, null),
									default: !1,
								},
								"extensions.experimental.issueQuickAccess": {
									type: "boolean",
									description: (0, t.localize)(6126, null),
									default: !0,
								},
							},
						}),
					w.$Io.as(f.$Jo.JSONContribution).registerSchema(b.$6Qb, b.$7Qb),
					s.$fk.registerCommand("_extensions.manage", (Te, Ee, Ie, Be, Se) => {
						const ke = Te.get(h.$MQb),
							Ue = ke.local.find((qe) => (0, $.$7p)(qe.identifier, { id: Ee }));
						if (Ue) ke.open(Ue, { tab: Ie, preserveFocus: Be, feature: Se });
						else throw new Error((0, t.localize)(6127, null, Ee));
					}),
					s.$fk.registerCommand(
						"extension.open",
						async (Te, Ee, Ie, Be, Se, ke) => {
							const Ue = Te.get(h.$MQb),
								qe = Te.get(s.$ek),
								[Ae] = await Ue.getExtensions(
									[{ id: Ee }],
									L.CancellationToken.None,
								);
							return Ae
								? Ue.open(Ae, {
										tab: Ie,
										preserveFocus: Be,
										feature: Se,
										sideByside: ke,
									})
								: qe.executeCommand("_extensions.manage", Ee, Ie, Be, Se);
						},
					),
					s.$fk.registerCommand({
						id: "workbench.extensions.installExtension",
						metadata: {
							description: (0, t.localize)(6128, null),
							args: [
								{
									name: "extensionIdOrVSIXUri",
									description: (0, t.localize)(6129, null),
									constraint: (Te) =>
										typeof Te == "string" || Te instanceof I.URI,
								},
								{
									name: "options",
									description:
										"(optional) Options for installing the extension. Object with the following properties: `installOnlyNewlyAddedFromExtensionPackVSIX`: When enabled, VS Code installs only newly added extensions from the extension pack VSIX. This option is considered only when installing VSIX. ",
									isOptional: !0,
									schema: {
										type: "object",
										properties: {
											installOnlyNewlyAddedFromExtensionPackVSIX: {
												type: "boolean",
												description: (0, t.localize)(6130, null),
												default: !1,
											},
											installPreReleaseVersion: {
												type: "boolean",
												description: (0, t.localize)(6131, null),
												default: !1,
											},
											donotSync: {
												type: "boolean",
												description: (0, t.localize)(6132, null),
												default: !1,
											},
											justification: {
												type: ["string", "object"],
												description: (0, t.localize)(6133, null),
											},
											enable: {
												type: "boolean",
												description: (0, t.localize)(6134, null),
												default: !1,
											},
											context: {
												type: "object",
												description: (0, t.localize)(6135, null),
											},
										},
									},
								},
							],
						},
						handler: async (Te, Ee, Ie) => {
							const Be = Te.get(h.$MQb),
								Se = Te.get(m.$GQb),
								ke = Te.get(d.$Ep);
							try {
								if (typeof Ee == "string") {
									const [Ue, qe] = (0, $.$9p)(Ee);
									if (
										Be.local.find((Me) =>
											(0, $.$7p)(Me.identifier, { id: Ue, uuid: qe }),
										)?.enablementState ===
										m.EnablementState.DisabledByExtensionKind
									) {
										const [Me] = await ke.getExtensions(
											[{ id: Ue, preRelease: Ie?.installPreReleaseVersion }],
											L.CancellationToken.None,
										);
										if (!Me) throw new Error((0, t.localize)(6136, null, Ee));
										await Se.installFromGallery(Me, {
											isMachineScoped: Ie?.donotSync ? !0 : void 0,
											installPreReleaseVersion: Ie?.installPreReleaseVersion,
											installGivenVersion: !!qe,
											context: {
												...Ie?.context,
												[d.$vp]: d.ExtensionInstallSource.COMMAND,
											},
										});
									} else
										await Be.install(
											Ee,
											{
												version: qe,
												installPreReleaseVersion: Ie?.installPreReleaseVersion,
												context: {
													...Ie?.context,
													[d.$vp]: d.ExtensionInstallSource.COMMAND,
												},
												justification: Ie?.justification,
												enable: Ie?.enable,
												isMachineScoped: Ie?.donotSync ? !0 : void 0,
											},
											be.ProgressLocation.Notification,
										);
								} else {
									const Ue = I.URI.revive(Ee);
									await Be.install(Ue, {
										installOnlyNewlyAddedFromExtensionPack:
											Ie?.installOnlyNewlyAddedFromExtensionPackVSIX,
										installGivenVersion: !0,
									});
								}
							} catch (Ue) {
								throw ((0, P.$4)(Ue), Ue);
							}
						},
					}),
					s.$fk.registerCommand({
						id: "workbench.extensions.uninstallExtension",
						metadata: {
							description: (0, t.localize)(6137, null),
							args: [
								{
									name: (0, t.localize)(6138, null),
									schema: { type: "string" },
								},
							],
						},
						handler: async (Te, Ee) => {
							if (!Ee) throw new Error((0, t.localize)(6139, null));
							const Ie = Te.get(d.$Hp),
								Be = await Ie.getInstalled(),
								[Se] = Be.filter((ke) => (0, $.$7p)(ke.identifier, { id: Ee }));
							if (!Se) throw new Error((0, t.localize)(6140, null, Ee));
							if (Se.isBuiltin)
								throw new Error((0, t.localize)(6141, null, Ee));
							try {
								await Ie.uninstall(Se);
							} catch (ke) {
								throw ((0, P.$4)(ke), ke);
							}
						},
					}),
					s.$fk.registerCommand({
						id: "workbench.extensions.search",
						metadata: {
							description: (0, t.localize)(6142, null),
							args: [
								{
									name: (0, t.localize)(6143, null),
									schema: { type: "string" },
								},
							],
						},
						handler: async (Te, Ee = "") => {
							const Be = await Te.get($e.$6Sb).openPaneComposite(
								h.$LQb,
								D.ViewContainerLocation.Sidebar,
								!0,
							);
							Be && (Be.getViewPaneContainer().search(Ee), Be.focus());
						},
					});
				function Oe(Te, Ee) {
					Te?.addImplementation(105, "extensions-editor", (Ie) => {
						const Se = Ie.get(x.$IY).activeEditorPane;
						return Se instanceof g.$oTc && Se.activeWebview?.isFocused
							? (Ee(Se.activeWebview), !0)
							: !1;
					});
				}
				Oe(F.$BAb, (Te) => Te.copy()),
					Oe(F.$AAb, (Te) => Te.cut()),
					Oe(F.$CAb, (Te) => Te.paste()),
					(e.$3Tc = new R.$5j("hasLocalServer", !1)),
					(e.$4Tc = new R.$5j("hasRemoteServer", !1)),
					(e.$5Tc = new R.$5j("hasWebServer", !1));
				async function xe(Te) {
					try {
						await Te.run();
					} finally {
						(0, te.$Uc)(Te) && Te.dispose();
					}
				}
				let He = class extends te.$1c {
					constructor(Ee, Ie, Be, Se, ke, Ue, qe, Ae, Me) {
						super(),
							(this.a = Ee),
							(this.b = Se),
							(this.g = ke),
							(this.h = Ue),
							(this.j = qe),
							(this.m = Ae),
							(this.n = Me);
						const De = h.$1Qb.bindTo(Be);
						Ie.isEnabled() && De.set(!0);
						const Re = e.$3Tc.bindTo(Be);
						this.a.localExtensionManagementServer && Re.set(!0);
						const je = e.$4Tc.bindTo(Be);
						this.a.remoteExtensionManagementServer && je.set(!0);
						const Ve = e.$5Tc.bindTo(Be);
						this.a.webExtensionManagementServer && Ve.set(!0),
							this.s(),
							this.t(),
							this.q();
					}
					q() {
						(this.a.localExtensionManagementServer ||
							this.a.remoteExtensionManagementServer ||
							this.a.webExtensionManagementServer) &&
							w.$Io
								.as(O.$1r.Quickaccess)
								.registerQuickAccessProvider({
									ctor: B.$BTc,
									prefix: B.$BTc.PREFIX,
									placeholder: (0, t.localize)(6144, null),
									helpEntries: [{ description: (0, t.localize)(6145, null) }],
								});
					}
					s() {
						this.D(
							E.$ZX.appendMenuItem(E.$XX.MenubarPreferencesMenu, {
								command: { id: h.$LQb, title: (0, t.localize)(6146, null) },
								group: "2_configuration",
								order: 3,
							}),
						),
							this.D(
								E.$ZX.appendMenuItem(E.$XX.GlobalActivity, {
									command: { id: h.$LQb, title: (0, t.localize)(6147, null) },
									group: "2_configuration",
									order: 3,
								}),
							),
							this.u({
								id: "workbench.extensions.action.focusExtensionsView",
								title: (0, t.localize2)(6196, "Focus on Extensions View"),
								category: d.$Mp,
								f1: !0,
								run: async (qe) => {
									await qe
										.get($e.$6Sb)
										.openPaneComposite(
											h.$LQb,
											D.ViewContainerLocation.Sidebar,
											!0,
										);
								},
							}),
							this.u({
								id: "workbench.extensions.action.installExtensions",
								title: (0, t.localize2)(6197, "Install Extensions"),
								category: d.$Mp,
								menu: {
									id: E.$XX.CommandPalette,
									when: R.$Kj.and(h.$1Qb, R.$Kj.or(e.$3Tc, e.$4Tc, e.$5Tc)),
								},
								run: async (qe) => {
									qe.get(M.$HMb).openViewContainer(h.$LQb, !0);
								},
							}),
							this.u({
								id: "workbench.extensions.action.showRecommendedKeymapExtensions",
								title: (0, t.localize2)(6198, "Keymaps"),
								category: d.$Np,
								menu: [
									{ id: E.$XX.CommandPalette, when: h.$1Qb },
									{
										id: E.$XX.EditorTitle,
										when: R.$Kj.and(ve.$qBc, h.$1Qb),
										group: "2_keyboard_discover_actions",
									},
								],
								menuTitles: {
									[E.$XX.EditorTitle.id]: (0, t.localize)(6148, null),
								},
								run: () =>
									xe(this.j.createInstance(c.$NTb, "@recommended:keymaps ")),
							}),
							this.u({
								id: "workbench.extensions.action.showLanguageExtensions",
								title: (0, t.localize2)(6199, "Language Extensions"),
								category: d.$Np,
								menu: { id: E.$XX.CommandPalette, when: h.$1Qb },
								run: () =>
									xe(this.j.createInstance(c.$NTb, "@recommended:languages ")),
							}),
							this.u({
								id: "workbench.extensions.action.checkForUpdates",
								title: (0, t.localize2)(6200, "Check for Extension Updates"),
								category: d.$Mp,
								menu: [
									{
										id: E.$XX.CommandPalette,
										when: R.$Kj.and(h.$1Qb, R.$Kj.or(e.$3Tc, e.$4Tc, e.$5Tc)),
									},
									{
										id: E.$XX.ViewContainerTitle,
										when: R.$Kj.and(
											R.$Kj.equals("viewContainer", h.$LQb),
											h.$1Qb,
										),
										group: "1_updates",
										order: 1,
									},
								],
								run: async () => (
									await this.g.checkForUpdates(),
									this.g.outdated.length
										? xe(this.j.createInstance(c.$NTb, "@outdated "))
										: this.m.info((0, t.localize)(6149, null))
								),
							});
						const Ee = R.$Kj.equals(`config.${h.$OQb}`, !1);
						this.u({
							id: "workbench.extensions.action.enableAutoUpdate",
							title: (0, t.localize2)(
								6201,
								"Enable Auto Update for All Extensions",
							),
							category: d.$Mp,
							precondition: Ee,
							menu: [
								{
									id: E.$XX.ViewContainerTitle,
									order: 5,
									group: "1_updates",
									when: R.$Kj.and(R.$Kj.equals("viewContainer", h.$LQb), Ee),
								},
								{ id: E.$XX.CommandPalette },
							],
							run: (qe) => qe.get(h.$MQb).updateAutoUpdateValue(!0),
						});
						const Ie = R.$Kj.notEquals(`config.${h.$OQb}`, !1);
						this.u({
							id: "workbench.extensions.action.disableAutoUpdate",
							title: (0, t.localize2)(
								6202,
								"Disable Auto Update for All Extensions",
							),
							precondition: Ie,
							category: d.$Mp,
							menu: [
								{
									id: E.$XX.ViewContainerTitle,
									order: 5,
									group: "1_updates",
									when: R.$Kj.and(R.$Kj.equals("viewContainer", h.$LQb), Ie),
								},
								{ id: E.$XX.CommandPalette },
							],
							run: (qe) => qe.get(h.$MQb).updateAutoUpdateValue(!1),
						}),
							this.u({
								id: "workbench.extensions.action.updateAllExtensions",
								title: (0, t.localize2)(6203, "Update All Extensions"),
								category: d.$Mp,
								precondition: h.$ZQb,
								menu: [
									{
										id: E.$XX.CommandPalette,
										when: R.$Kj.and(h.$1Qb, R.$Kj.or(e.$3Tc, e.$4Tc, e.$5Tc)),
									},
									{
										id: E.$XX.ViewContainerTitle,
										when: R.$Kj.and(
											R.$Kj.equals("viewContainer", h.$LQb),
											R.$Kj.or(
												R.$Kj.has(`config.${h.$OQb}`).negate(),
												R.$Kj.equals(
													`config.${h.$OQb}`,
													"onlyEnabledExtensions",
												),
											),
										),
										group: "1_updates",
										order: 2,
									},
									{
										id: E.$XX.ViewTitle,
										when: R.$Kj.equals("view", h.$UQb),
										group: "navigation",
										order: 1,
									},
								],
								icon: ee.$gSb,
								run: async () => {
									const qe = this.g.outdated;
									(await this.g.updateAll()).forEach((Me) => {
										if (Me.error) {
											const De = qe.find((Re) =>
												(0, $.$7p)(Re.identifier, Me.identifier),
											);
											De &&
												xe(
													this.j.createInstance(
														c.$_Sb,
														De,
														De.latestVersion,
														d.InstallOperation.Update,
														Me.error,
													),
												);
										}
									});
								},
							}),
							this.u({
								id: "workbench.extensions.action.enableAll",
								title: (0, t.localize2)(6204, "Enable All Extensions"),
								category: d.$Mp,
								menu: [
									{
										id: E.$XX.CommandPalette,
										when: R.$Kj.or(e.$3Tc, e.$4Tc, e.$5Tc),
									},
									{
										id: E.$XX.ViewContainerTitle,
										when: R.$Kj.equals("viewContainer", h.$LQb),
										group: "2_enablement",
										order: 1,
									},
								],
								run: async () => {
									const qe = this.g.local.filter(
										(Ae) =>
											!!Ae.local &&
											this.h.canChangeEnablement(Ae.local) &&
											!this.h.isEnabled(Ae.local),
									);
									qe.length &&
										(await this.g.setEnablement(
											qe,
											m.EnablementState.EnabledGlobally,
										));
								},
							}),
							this.u({
								id: "workbench.extensions.action.enableAllWorkspace",
								title: (0, t.localize2)(
									6205,
									"Enable All Extensions for this Workspace",
								),
								category: d.$Mp,
								menu: {
									id: E.$XX.CommandPalette,
									when: R.$Kj.and(
										W.$wPb.notEqualsTo("empty"),
										R.$Kj.or(e.$3Tc, e.$4Tc, e.$5Tc),
									),
								},
								run: async () => {
									const qe = this.g.local.filter(
										(Ae) =>
											!!Ae.local &&
											this.h.canChangeEnablement(Ae.local) &&
											!this.h.isEnabled(Ae.local),
									);
									qe.length &&
										(await this.g.setEnablement(
											qe,
											m.EnablementState.EnabledWorkspace,
										));
								},
							}),
							this.u({
								id: "workbench.extensions.action.disableAll",
								title: (0, t.localize2)(
									6206,
									"Disable All Installed Extensions",
								),
								category: d.$Mp,
								menu: [
									{
										id: E.$XX.CommandPalette,
										when: R.$Kj.or(e.$3Tc, e.$4Tc, e.$5Tc),
									},
									{
										id: E.$XX.ViewContainerTitle,
										when: R.$Kj.equals("viewContainer", h.$LQb),
										group: "2_enablement",
										order: 2,
									},
								],
								run: async () => {
									const qe = this.g.local.filter(
										(Ae) =>
											!Ae.isBuiltin &&
											!!Ae.local &&
											this.h.isEnabled(Ae.local) &&
											this.h.canChangeEnablement(Ae.local),
									);
									qe.length &&
										(await this.g.setEnablement(
											qe,
											m.EnablementState.DisabledGlobally,
										));
								},
							}),
							this.u({
								id: "workbench.extensions.action.disableAllWorkspace",
								title: (0, t.localize2)(
									6207,
									"Disable All Installed Extensions for this Workspace",
								),
								category: d.$Mp,
								menu: {
									id: E.$XX.CommandPalette,
									when: R.$Kj.and(
										W.$wPb.notEqualsTo("empty"),
										R.$Kj.or(e.$3Tc, e.$4Tc, e.$5Tc),
									),
								},
								run: async () => {
									const qe = this.g.local.filter(
										(Ae) =>
											!Ae.isBuiltin &&
											!!Ae.local &&
											this.h.isEnabled(Ae.local) &&
											this.h.canChangeEnablement(Ae.local),
									);
									qe.length &&
										(await this.g.setEnablement(
											qe,
											m.EnablementState.DisabledWorkspace,
										));
								},
							}),
							this.u({
								id: h.$WQb,
								title: (0, t.localize2)(6208, "Install from VSIX..."),
								category: d.$Mp,
								menu: [
									{ id: E.$XX.CommandPalette, when: R.$Kj.or(e.$3Tc, e.$4Tc) },
									{
										id: E.$XX.ViewContainerTitle,
										when: R.$Kj.and(
											R.$Kj.equals("viewContainer", h.$LQb),
											R.$Kj.or(e.$3Tc, e.$4Tc),
										),
										group: "3_install",
										order: 1,
									},
								],
								run: async (qe) => {
									const Ae = qe.get(Q.$IO),
										Me = qe.get(s.$ek),
										De = await Ae.showOpenDialog({
											title: (0, t.localize)(6150, null),
											filters: [
												{ name: "VSIX Extensions", extensions: ["vsix"] },
											],
											canSelectFiles: !0,
											canSelectMany: !0,
											openLabel: (0, Z.$DO)((0, t.localize)(6151, null)),
										});
									De && (await Me.executeCommand(h.$XQb, De));
								},
							}),
							this.u({
								id: h.$XQb,
								title: (0, t.localize)(6152, null),
								menu: [
									{
										id: E.$XX.ExplorerContext,
										group: "extensions",
										when: R.$Kj.and(
											W.$BQb.Extension.isEqualTo(".vsix"),
											R.$Kj.or(e.$3Tc, e.$4Tc),
										),
									},
								],
								run: async (qe, Ae) => {
									const Me = qe.get(h.$MQb),
										De = qe.get(J.$asb),
										Re = qe.get(K.$4N),
										je = Array.isArray(Ae) ? Ae : [Ae],
										Ve = await Promise.allSettled(
											je.map(
												async (ft) =>
													await Me.install(ft, { installGivenVersion: !0 }),
											),
										);
									let Ze,
										et = !1,
										rt = !1;
									for (const ft of Ve) {
										if (ft.status === "rejected") {
											Ze = new Error(ft.reason);
											break;
										}
										(et =
											et ||
											ft.value.runtimeState?.action ===
												h.ExtensionRuntimeActionType.ReloadWindow),
											(rt =
												rt ||
												ft.value.runtimeState?.action ===
													h.ExtensionRuntimeActionType.RestartExtensions);
									}
									if (Ze) throw Ze;
									et
										? Re.prompt(K.Severity.Info, (0, t.localize)(6153, null), [
												{
													label: (0, t.localize)(6154, null),
													run: () => De.reload(),
												},
											])
										: rt
											? Re.prompt(
													K.Severity.Info,
													(0, t.localize)(6155, null),
													[
														{
															label: (0, t.localize)(6156, null),
															run: () => Me.updateRunningExtensions(),
														},
													],
												)
											: Re.prompt(
													K.Severity.Info,
													(0, t.localize)(6157, null),
													[],
												);
								},
							}),
							this.u({
								id: "workbench.extensions.action.installExtensionFromLocation",
								title: (0, t.localize2)(
									6209,
									"Install Extension from Location...",
								),
								category: q.$ck.Developer,
								menu: [
									{ id: E.$XX.CommandPalette, when: R.$Kj.or(e.$5Tc, e.$3Tc) },
								],
								run: async (qe) => {
									const Ae = qe.get(m.$GQb);
									if (ue.$r)
										return new Promise((Me, De) => {
											const Re = qe.get(ae.$DJ),
												je = new te.$Zc(),
												Ve = je.add(Re.createQuickPick());
											(Ve.title = (0, t.localize)(6158, null)),
												(Ve.customButton = !0),
												(Ve.customLabel = (0, t.localize)(6159, null)),
												(Ve.placeholder = (0, t.localize)(6160, null)),
												(Ve.ignoreFocusOut = !0),
												je.add(
													pe.Event.any(
														Ve.onDidAccept,
														Ve.onDidCustom,
													)(async () => {
														if ((Ve.hide(), Ve.value))
															try {
																await Ae.installFromLocation(
																	I.URI.parse(Ve.value),
																);
															} catch (Ze) {
																De(Ze);
																return;
															}
														Me();
													}),
												),
												je.add(Ve.onDidHide(() => je.dispose())),
												Ve.show();
										});
									{
										const De = await qe
											.get(Q.$IO)
											.showOpenDialog({
												canSelectFolders: !0,
												canSelectFiles: !1,
												canSelectMany: !1,
												title: (0, t.localize)(6161, null),
											});
										De?.[0] && (await Ae.installFromLocation(De[0]));
									}
								},
							});
						const Be = new E.$XX("extensionsFilterSubMenu");
						E.$ZX.appendMenuItem(h.$5Qb, {
							submenu: Be,
							title: (0, t.localize)(6162, null),
							group: "navigation",
							order: 2,
							icon: ee.$eSb,
						}),
							this.u({
								id: "extensions.filter.featured",
								title: (0, t.localize2)(6210, "Show Featured Extensions"),
								category: d.$Mp,
								menu: [
									{ id: E.$XX.CommandPalette, when: h.$1Qb },
									{ id: Be, when: h.$1Qb, group: "1_predefined", order: 1 },
								],
								menuTitles: { [Be.id]: (0, t.localize)(6163, null) },
								run: () => xe(this.j.createInstance(c.$NTb, "@featured ")),
							}),
							this.u({
								id: "workbench.extensions.action.showPopularExtensions",
								title: (0, t.localize2)(6211, "Show Popular Extensions"),
								category: d.$Mp,
								menu: [
									{ id: E.$XX.CommandPalette, when: h.$1Qb },
									{ id: Be, when: h.$1Qb, group: "1_predefined", order: 2 },
								],
								menuTitles: { [Be.id]: (0, t.localize)(6164, null) },
								run: () => xe(this.j.createInstance(c.$NTb, "@popular ")),
							}),
							this.u({
								id: "workbench.extensions.action.showRecommendedExtensions",
								title: (0, t.localize2)(6212, "Show Recommended Extensions"),
								category: d.$Mp,
								menu: [
									{ id: E.$XX.CommandPalette, when: h.$1Qb },
									{ id: Be, when: h.$1Qb, group: "1_predefined", order: 2 },
								],
								menuTitles: { [Be.id]: (0, t.localize)(6165, null) },
								run: () => xe(this.j.createInstance(c.$NTb, "@recommended ")),
							}),
							this.u({
								id: "workbench.extensions.action.recentlyPublishedExtensions",
								title: (0, t.localize2)(
									6213,
									"Show Recently Published Extensions",
								),
								category: d.$Mp,
								menu: [
									{ id: E.$XX.CommandPalette, when: h.$1Qb },
									{ id: Be, when: h.$1Qb, group: "1_predefined", order: 2 },
								],
								menuTitles: { [Be.id]: (0, t.localize)(6166, null) },
								run: () =>
									xe(this.j.createInstance(c.$NTb, "@recentlyPublished ")),
							});
						const ke = new E.$XX("extensionsCategoryFilterSubMenu");
						E.$ZX.appendMenuItem(Be, {
							submenu: ke,
							title: (0, t.localize)(6167, null),
							when: h.$1Qb,
							group: "2_categories",
							order: 1,
						}),
							_.$Fn.forEach((qe, Ae) => {
								this.u({
									id: `extensions.actions.searchByCategory.${qe}`,
									title: qe,
									menu: [{ id: ke, when: h.$1Qb, order: Ae }],
									run: () =>
										xe(
											this.j.createInstance(
												c.$NTb,
												`@category:"${qe.toLowerCase()}"`,
											),
										),
								});
							}),
							this.u({
								id: "workbench.extensions.action.listBuiltInExtensions",
								title: (0, t.localize2)(6214, "Show Built-in Extensions"),
								category: d.$Mp,
								menu: [
									{
										id: E.$XX.CommandPalette,
										when: R.$Kj.or(e.$3Tc, e.$4Tc, e.$5Tc),
									},
									{ id: Be, group: "3_installed", order: 2 },
								],
								menuTitles: { [Be.id]: (0, t.localize)(6168, null) },
								run: () => xe(this.j.createInstance(c.$NTb, "@builtin ")),
							}),
							this.u({
								id: "workbench.extensions.action.extensionUpdates",
								title: (0, t.localize2)(6215, "Show Extension Updates"),
								category: d.$Mp,
								precondition: h.$1Qb,
								f1: !0,
								menu: [
									{ id: Be, group: "3_installed", when: h.$1Qb, order: 1 },
								],
								menuTitles: { [Be.id]: (0, t.localize)(6169, null) },
								run: () => xe(this.j.createInstance(c.$NTb, "@updates")),
							}),
							this.u({
								id: h.$YQb,
								title: (0, t.localize2)(
									6216,
									"Show Extensions Unsupported By Workspace",
								),
								category: d.$Mp,
								menu: [
									{ id: E.$XX.CommandPalette, when: R.$Kj.or(e.$3Tc, e.$4Tc) },
									{
										id: Be,
										group: "3_installed",
										order: 5,
										when: R.$Kj.or(e.$3Tc, e.$4Tc),
									},
								],
								menuTitles: { [Be.id]: (0, t.localize)(6170, null) },
								run: () =>
									xe(this.j.createInstance(c.$NTb, "@workspaceUnsupported")),
							}),
							this.u({
								id: "workbench.extensions.action.showEnabledExtensions",
								title: (0, t.localize2)(6217, "Show Enabled Extensions"),
								category: d.$Mp,
								menu: [
									{
										id: E.$XX.CommandPalette,
										when: R.$Kj.or(e.$3Tc, e.$4Tc, e.$5Tc),
									},
									{ id: Be, group: "3_installed", order: 3 },
								],
								menuTitles: { [Be.id]: (0, t.localize)(6171, null) },
								run: () => xe(this.j.createInstance(c.$NTb, "@enabled ")),
							}),
							this.u({
								id: "workbench.extensions.action.showDisabledExtensions",
								title: (0, t.localize2)(6218, "Show Disabled Extensions"),
								category: d.$Mp,
								menu: [
									{
										id: E.$XX.CommandPalette,
										when: R.$Kj.or(e.$3Tc, e.$4Tc, e.$5Tc),
									},
									{ id: Be, group: "3_installed", order: 4 },
								],
								menuTitles: { [Be.id]: (0, t.localize)(6172, null) },
								run: () => xe(this.j.createInstance(c.$NTb, "@disabled ")),
							});
						const Ue = new E.$XX("extensionsSortSubMenu");
						E.$ZX.appendMenuItem(Be, {
							submenu: Ue,
							title: (0, t.localize)(6173, null),
							when: R.$Kj.and(R.$Kj.or(h.$1Qb, p.$pTc)),
							group: "4_sort",
							order: 1,
						}),
							[
								{
									id: "installs",
									title: (0, t.localize)(6174, null),
									precondition: p.$tTc.negate(),
								},
								{
									id: "rating",
									title: (0, t.localize)(6175, null),
									precondition: p.$tTc.negate(),
								},
								{
									id: "name",
									title: (0, t.localize)(6176, null),
									precondition: p.$tTc.negate(),
								},
								{
									id: "publishedDate",
									title: (0, t.localize)(6177, null),
									precondition: p.$tTc.negate(),
								},
								{
									id: "updateDate",
									title: (0, t.localize)(6178, null),
									precondition: R.$Kj.and(
										p.$rTc.negate(),
										p.$uTc.negate(),
										p.$tTc.negate(),
									),
								},
							].map(({ id: qe, title: Ae, precondition: Me }, De) => {
								this.u({
									id: `extensions.sort.${qe}`,
									title: Ae,
									precondition: Me,
									menu: [{ id: Ue, when: R.$Kj.or(h.$1Qb, p.$pTc), order: De }],
									toggled: p.$qTc.isEqualTo(qe),
									run: async () => {
										const je = (
												await this.b.openPaneComposite(
													h.$LQb,
													D.ViewContainerLocation.Sidebar,
													!0,
												)
											)?.getViewPaneContainer(),
											Ve = se.$ZSc.parse(je.searchValue || "");
										je.search(new se.$ZSc(Ve.value, qe).toString()), je.focus();
									},
								});
							}),
							this.u({
								id: "workbench.extensions.action.clearExtensionsSearchResults",
								title: (0, t.localize2)(
									6219,
									"Clear Extensions Search Results",
								),
								category: d.$Mp,
								icon: ee.$cSb,
								f1: !0,
								precondition: p.$sTc,
								menu: { id: h.$5Qb, group: "navigation", order: 1 },
								run: async (qe) => {
									const Ae = qe
										.get(M.$HMb)
										.getActiveViewPaneContainerWithId(h.$LQb);
									if (Ae) {
										const Me = Ae;
										Me.search(""), Me.focus();
									}
								},
							}),
							this.u({
								id: "workbench.extensions.action.refreshExtension",
								title: (0, t.localize2)(6220, "Refresh"),
								category: d.$Mp,
								icon: ee.$dSb,
								f1: !0,
								menu: {
									id: E.$XX.ViewContainerTitle,
									when: R.$Kj.equals("viewContainer", h.$LQb),
									group: "navigation",
									order: 2,
								},
								run: async (qe) => {
									const Ae = qe
										.get(M.$HMb)
										.getActiveViewPaneContainerWithId(h.$LQb);
									Ae && (await Ae.refresh());
								},
							}),
							this.u({
								id: "workbench.extensions.action.installWorkspaceRecommendedExtensions",
								title: (0, t.localize)(6179, null),
								icon: ee.$gSb,
								menu: {
									id: E.$XX.ViewTitle,
									when: R.$Kj.equals("view", h.$TQb),
									group: "navigation",
									order: 1,
								},
								run: async (qe) =>
									qe
										.get(M.$HMb)
										.getActiveViewWithId(h.$TQb)
										.installWorkspaceRecommendations(),
							}),
							this.u({
								id: c.$QTb.ID,
								title: c.$QTb.LABEL,
								icon: ee.$hSb,
								menu: [
									{
										id: E.$XX.CommandPalette,
										when: W.$wPb.notEqualsTo("empty"),
									},
									{
										id: E.$XX.ViewTitle,
										when: R.$Kj.equals("view", h.$TQb),
										group: "navigation",
										order: 2,
									},
								],
								run: () =>
									xe(this.j.createInstance(c.$QTb, c.$QTb.ID, c.$QTb.LABEL)),
							}),
							this.u({
								id: c.$VTb.ID,
								title: {
									value: c.$VTb.LABEL,
									original: "Install Specific Version of Extension...",
								},
								category: d.$Mp,
								menu: {
									id: E.$XX.CommandPalette,
									when: R.$Kj.and(h.$1Qb, R.$Kj.or(e.$3Tc, e.$4Tc, e.$5Tc)),
								},
								run: () =>
									xe(this.j.createInstance(c.$VTb, c.$VTb.ID, c.$VTb.LABEL)),
							}),
							this.u({
								id: c.$UTb.ID,
								title: {
									value: c.$UTb.LABEL,
									original: "Reinstall Extension...",
								},
								category: q.$ck.Developer,
								menu: {
									id: E.$XX.CommandPalette,
									when: R.$Kj.and(h.$1Qb, R.$Kj.or(e.$3Tc, e.$4Tc)),
								},
								run: () =>
									xe(this.j.createInstance(c.$UTb, c.$UTb.ID, c.$UTb.LABEL)),
							});
					}
					t() {
						this.u({
							id: c.$ETb.ID,
							title: c.$ETb.TITLE,
							menu: {
								id: E.$XX.ExtensionContext,
								group: h.$2Qb,
								order: 0,
								when: R.$Kj.and(
									R.$Kj.not("inExtensionEditor"),
									R.$Kj.equals("extensionStatus", "installed"),
									R.$Kj.has("extensionHasColorThemes"),
								),
							},
							run: async (Ee, Ie) => {
								const Be = Ee.get(h.$MQb),
									Se = Ee.get(l.$Li),
									ke = Be.local.find((Ue) =>
										(0, $.$7p)(Ue.identifier, { id: Ie }),
									);
								if (ke) {
									const Ue = Se.createInstance(c.$ETb);
									return (Ue.extension = ke), Ue.run();
								}
							},
						}),
							this.u({
								id: c.$FTb.ID,
								title: c.$FTb.TITLE,
								menu: {
									id: E.$XX.ExtensionContext,
									group: h.$2Qb,
									order: 0,
									when: R.$Kj.and(
										R.$Kj.not("inExtensionEditor"),
										R.$Kj.equals("extensionStatus", "installed"),
										R.$Kj.has("extensionHasFileIconThemes"),
									),
								},
								run: async (Ee, Ie) => {
									const Be = Ee.get(h.$MQb),
										Se = Ee.get(l.$Li),
										ke = Be.local.find((Ue) =>
											(0, $.$7p)(Ue.identifier, { id: Ie }),
										);
									if (ke) {
										const Ue = Se.createInstance(c.$FTb);
										return (Ue.extension = ke), Ue.run();
									}
								},
							}),
							this.u({
								id: c.$GTb.ID,
								title: c.$GTb.TITLE,
								menu: {
									id: E.$XX.ExtensionContext,
									group: h.$2Qb,
									order: 0,
									when: R.$Kj.and(
										R.$Kj.not("inExtensionEditor"),
										R.$Kj.equals("extensionStatus", "installed"),
										R.$Kj.has("extensionHasProductIconThemes"),
									),
								},
								run: async (Ee, Ie) => {
									const Be = Ee.get(h.$MQb),
										Se = Ee.get(l.$Li),
										ke = Be.local.find((Ue) =>
											(0, $.$7p)(Ue.identifier, { id: Ie }),
										);
									if (ke) {
										const Ue = Se.createInstance(c.$GTb);
										return (Ue.extension = ke), Ue.run();
									}
								},
							}),
							this.u({
								id: "workbench.extensions.action.showPreReleaseVersion",
								title: (0, t.localize2)(6221, "Show Pre-Release Version"),
								menu: {
									id: E.$XX.ExtensionContext,
									group: h.$3Qb,
									order: 0,
									when: R.$Kj.and(
										R.$Kj.has("inExtensionEditor"),
										R.$Kj.has("galleryExtensionHasPreReleaseVersion"),
										R.$Kj.not("showPreReleaseVersion"),
										R.$Kj.not("isBuiltinExtension"),
									),
								},
								run: async (Ee, Ie) => {
									const Be = Ee.get(h.$MQb),
										Se = (
											await Be.getExtensions(
												[{ id: Ie }],
												L.CancellationToken.None,
											)
										)[0];
									Be.open(Se, { showPreReleaseVersion: !0 });
								},
							}),
							this.u({
								id: "workbench.extensions.action.showReleasedVersion",
								title: (0, t.localize2)(6222, "Show Release Version"),
								menu: {
									id: E.$XX.ExtensionContext,
									group: h.$3Qb,
									order: 1,
									when: R.$Kj.and(
										R.$Kj.has("inExtensionEditor"),
										R.$Kj.has("galleryExtensionHasPreReleaseVersion"),
										R.$Kj.has("extensionHasReleaseVersion"),
										R.$Kj.has("showPreReleaseVersion"),
										R.$Kj.not("isBuiltinExtension"),
									),
								},
								run: async (Ee, Ie) => {
									const Be = Ee.get(h.$MQb),
										Se = (
											await Be.getExtensions(
												[{ id: Ie }],
												L.CancellationToken.None,
											)
										)[0];
									Be.open(Se, { showPreReleaseVersion: !1 });
								},
							}),
							this.u({
								id: c.$mTb.ID,
								title: c.$mTb.LABEL,
								category: d.$Mp,
								precondition: R.$Kj.and(
									R.$Kj.or(
										R.$Kj.notEquals(
											`config.${h.$OQb}`,
											"onlyEnabledExtensions",
										),
										R.$Kj.equals("isExtensionEnabled", !0),
									),
									R.$Kj.not("extensionDisallowInstall"),
								),
								menu: {
									id: E.$XX.ExtensionContext,
									group: h.$4Qb,
									order: 1,
									when: R.$Kj.and(
										R.$Kj.not("inExtensionEditor"),
										R.$Kj.equals("extensionStatus", "installed"),
										R.$Kj.not("isBuiltinExtension"),
									),
								},
								run: async (Ee, Ie) => {
									const Be = Ee.get(l.$Li),
										ke = Ee.get(h.$MQb).local.find((Ue) =>
											(0, $.$7p)(Ue.identifier, { id: Ie }),
										);
									if (ke) {
										const Ue = Be.createInstance(c.$mTb);
										return (Ue.extension = ke), Ue.run();
									}
								},
							}),
							this.u({
								id: c.$nTb.ID,
								title: {
									value: c.$nTb.LABEL,
									original: "Auto Update (Publisher)",
								},
								category: d.$Mp,
								precondition: R.$Kj.equals(`config.${h.$OQb}`, !1),
								menu: {
									id: E.$XX.ExtensionContext,
									group: h.$4Qb,
									order: 2,
									when: R.$Kj.and(
										R.$Kj.equals("extensionStatus", "installed"),
										R.$Kj.not("isBuiltinExtension"),
									),
								},
								run: async (Ee, Ie) => {
									const Be = Ee.get(l.$Li),
										ke = Ee.get(h.$MQb).local.find((Ue) =>
											(0, $.$7p)(Ue.identifier, { id: Ie }),
										);
									if (ke) {
										const Ue = Be.createInstance(c.$nTb);
										return (Ue.extension = ke), Ue.run();
									}
								},
							}),
							this.u({
								id: "workbench.extensions.action.switchToPreRlease",
								title: (0, t.localize)(6180, null),
								category: d.$Mp,
								menu: {
									id: E.$XX.ExtensionContext,
									group: h.$3Qb,
									order: 2,
									when: R.$Kj.and(
										h.$1Qb,
										R.$Kj.has("galleryExtensionHasPreReleaseVersion"),
										R.$Kj.not("installedExtensionIsOptedToPreRelease"),
										R.$Kj.not("inExtensionEditor"),
										R.$Kj.equals("extensionStatus", "installed"),
										R.$Kj.not("isBuiltinExtension"),
									),
								},
								run: async (Ee, Ie) => {
									const Be = Ee.get(l.$Li),
										ke = Ee.get(h.$MQb).local.find((Ue) =>
											(0, $.$7p)(Ue.identifier, { id: Ie }),
										);
									if (ke) {
										const Ue = Be.createInstance(c.$vTb);
										return (Ue.extension = ke), Ue.run();
									}
								},
							}),
							this.u({
								id: "workbench.extensions.action.switchToRelease",
								title: (0, t.localize)(6181, null),
								category: d.$Mp,
								menu: {
									id: E.$XX.ExtensionContext,
									group: h.$3Qb,
									order: 2,
									when: R.$Kj.and(
										h.$1Qb,
										R.$Kj.has("galleryExtensionHasPreReleaseVersion"),
										R.$Kj.has("installedExtensionIsOptedToPreRelease"),
										R.$Kj.not("inExtensionEditor"),
										R.$Kj.equals("extensionStatus", "installed"),
										R.$Kj.not("isBuiltinExtension"),
									),
								},
								run: async (Ee, Ie) => {
									const Be = Ee.get(l.$Li),
										ke = Ee.get(h.$MQb).local.find((Ue) =>
											(0, $.$7p)(Ue.identifier, { id: Ie }),
										);
									if (ke) {
										const Ue = Be.createInstance(c.$vTb);
										return (Ue.extension = ke), Ue.run();
									}
								},
							}),
							this.u({
								id: c.$ITb.ID,
								title: c.$ITb.TITLE,
								menu: {
									id: E.$XX.ExtensionContext,
									group: h.$3Qb,
									order: 0,
									when: R.$Kj.and(
										R.$Kj.not("inExtensionEditor"),
										R.$Kj.has("canSetLanguage"),
										R.$Kj.has("isActiveLanguagePackExtension"),
									),
								},
								run: async (Ee, Ie) => {
									const Be = Ee.get(l.$Li),
										ke = (
											await Ee.get(h.$MQb).getExtensions(
												[{ id: Ie }],
												L.CancellationToken.None,
											)
										)[0],
										Ue = Be.createInstance(c.$ITb);
									return (Ue.extension = ke), Ue.run();
								},
							}),
							this.u({
								id: "workbench.extensions.action.installAndDonotSync",
								title: (0, t.localize)(6182, null),
								menu: {
									id: E.$XX.ExtensionContext,
									group: "0_install",
									when: R.$Kj.and(
										R.$Kj.equals("extensionStatus", "uninstalled"),
										R.$Kj.has("isGalleryExtension"),
										R.$Kj.not("extensionDisallowInstall"),
										z.$Sxc,
									),
									order: 1,
								},
								run: async (Ee, Ie) => {
									const Be = Ee.get(l.$Li),
										Se =
											this.g.local.filter((ke) =>
												(0, $.$7p)(ke.identifier, { id: Ie }),
											)[0] ||
											(
												await this.g.getExtensions(
													[{ id: Ie }],
													L.CancellationToken.None,
												)
											)[0];
									if (Se) {
										const ke = Be.createInstance(c.$dTb, {
											isMachineScoped: !0,
										});
										return (ke.extension = Se), ke.run();
									}
								},
							}),
							this.u({
								id: "workbench.extensions.action.installPrereleaseAndDonotSync",
								title: (0, t.localize)(6183, null),
								menu: {
									id: E.$XX.ExtensionContext,
									group: "0_install",
									when: R.$Kj.and(
										R.$Kj.equals("extensionStatus", "uninstalled"),
										R.$Kj.has("isGalleryExtension"),
										R.$Kj.has("extensionHasPreReleaseVersion"),
										R.$Kj.not("extensionDisallowInstall"),
										z.$Sxc,
									),
									order: 2,
								},
								run: async (Ee, Ie) => {
									const Be = Ee.get(l.$Li),
										Se =
											this.g.local.filter((ke) =>
												(0, $.$7p)(ke.identifier, { id: Ie }),
											)[0] ||
											(
												await this.g.getExtensions(
													[{ id: Ie }],
													L.CancellationToken.None,
												)
											)[0];
									if (Se) {
										const ke = Be.createInstance(c.$dTb, {
											isMachineScoped: !0,
											preRelease: !0,
										});
										return (ke.extension = Se), ke.run();
									}
								},
							}),
							this.u({
								id: c.$wTb.ID,
								title: c.$wTb.LABEL,
								menu: {
									id: E.$XX.ExtensionContext,
									group: "0_install",
									when: R.$Kj.and(
										R.$Kj.equals("extensionStatus", "uninstalled"),
										R.$Kj.has("isGalleryExtension"),
										R.$Kj.not("extensionDisallowInstall"),
									),
									order: 3,
								},
								run: async (Ee, Ie) => {
									const Be = Ee.get(l.$Li),
										Se =
											this.g.local.filter((ke) =>
												(0, $.$7p)(ke.identifier, { id: Ie }),
											)[0] ||
											(
												await this.g.getExtensions(
													[{ id: Ie }],
													L.CancellationToken.None,
												)
											)[0];
									if (Se) return Be.createInstance(c.$wTb, Se, !1).run();
								},
							}),
							this.u({
								id: "workbench.extensions.action.copyExtension",
								title: (0, t.localize2)(6223, "Copy"),
								menu: { id: E.$XX.ExtensionContext, group: "1_copy" },
								run: async (Ee, Ie) => {
									const Be = Ee.get(N.$Vxb),
										Se =
											this.g.local.filter((ke) =>
												(0, $.$7p)(ke.identifier, { id: Ie }),
											)[0] ||
											(
												await this.g.getExtensions(
													[{ id: Ie }],
													L.CancellationToken.None,
												)
											)[0];
									if (Se) {
										const ke = (0, t.localize)(6184, null, Se.displayName),
											Ue = (0, t.localize)(6185, null, Ie),
											qe = (0, t.localize)(6186, null, Se.description),
											Ae = (0, t.localize)(6187, null, Se.version),
											Me = (0, t.localize)(6188, null, Se.publisherDisplayName),
											De = Se.url
												? (0, t.localize)(6189, null, `${Se.url}`)
												: null,
											Re = `${ke}
${Ue}
${qe}
${Ae}
${Me}${
	De
		? `
` + De
		: ""
}`;
										await Be.writeText(Re);
									}
								},
							}),
							this.u({
								id: "workbench.extensions.action.copyExtensionId",
								title: (0, t.localize2)(6224, "Copy Extension ID"),
								menu: { id: E.$XX.ExtensionContext, group: "1_copy" },
								run: async (Ee, Ie) => Ee.get(N.$Vxb).writeText(Ie),
							}),
							this.u({
								id: "workbench.extensions.action.configure",
								title: (0, t.localize2)(6225, "Extension Settings"),
								menu: {
									id: E.$XX.ExtensionContext,
									group: "2_configure",
									when: R.$Kj.and(
										R.$Kj.equals("extensionStatus", "installed"),
										R.$Kj.has("extensionHasConfiguration"),
									),
									order: 1,
								},
								run: async (Ee, Ie) =>
									Ee.get(A.$7Z).openSettings({
										jsonEditor: !1,
										query: `@ext:${Ie}`,
									}),
							}),
							this.u({
								id: "workbench.extensions.action.configureKeybindings",
								title: (0, t.localize2)(6226, "Extension Keyboard Shortcuts"),
								menu: {
									id: E.$XX.ExtensionContext,
									group: "2_configure",
									when: R.$Kj.and(
										R.$Kj.equals("extensionStatus", "installed"),
										R.$Kj.has("extensionHasKeybindings"),
									),
									order: 2,
								},
								run: async (Ee, Ie) =>
									Ee.get(A.$7Z).openGlobalKeybindingSettings(!1, {
										query: `@ext:${Ie}`,
									}),
							}),
							this.u({
								id: "workbench.extensions.action.toggleApplyToAllProfiles",
								title: (0, t.localize2)(
									6227,
									"Apply Extension to all Profiles",
								),
								toggled: R.$Kj.has("isApplicationScopedExtension"),
								menu: {
									id: E.$XX.ExtensionContext,
									group: "2_configure",
									when: R.$Kj.and(
										R.$Kj.equals("extensionStatus", "installed"),
										R.$Kj.has("isDefaultApplicationScopedExtension").negate(),
										R.$Kj.has("isBuiltinExtension").negate(),
										R.$Kj.equals("isWorkspaceScopedExtension", !1),
									),
									order: 3,
								},
								run: async (Ee, Ie, Be) => {
									const Se = Ee.get(Ce.$Vl),
										ke = Be.location
											? this.g.installed.find((Ue) =>
													Se.extUri.isEqual(Ue.local?.location, Be.location),
												)
											: void 0;
									if (ke) return this.g.toggleApplyExtensionToAllProfiles(ke);
								},
							}),
							this.u({
								id: h.$VQb,
								title: (0, t.localize2)(6228, "Sync This Extension"),
								menu: {
									id: E.$XX.ExtensionContext,
									group: "2_configure",
									when: R.$Kj.and(
										R.$Kj.equals("extensionStatus", "installed"),
										z.$Sxc,
										R.$Kj.equals("isWorkspaceScopedExtension", !1),
									),
									order: 4,
								},
								run: async (Ee, Ie) => {
									const Be = this.g.local.find((Se) =>
										(0, $.$7p)({ id: Ie }, Se.identifier),
									);
									if (Be) return this.g.toggleExtensionIgnoredToSync(Be);
								},
							}),
							this.u({
								id: "workbench.extensions.action.ignoreRecommendation",
								title: (0, t.localize2)(6229, "Ignore Recommendation"),
								menu: {
									id: E.$XX.ExtensionContext,
									group: "3_recommendations",
									when: R.$Kj.has("isExtensionRecommended"),
									order: 1,
								},
								run: async (Ee, Ie) =>
									Ee.get(r.$0Qb).toggleGlobalIgnoredRecommendation(Ie, !0),
							}),
							this.u({
								id: "workbench.extensions.action.undoIgnoredRecommendation",
								title: (0, t.localize2)(6230, "Undo Ignored Recommendation"),
								menu: {
									id: E.$XX.ExtensionContext,
									group: "3_recommendations",
									when: R.$Kj.has("isUserIgnoredRecommendation"),
									order: 1,
								},
								run: async (Ee, Ie) =>
									Ee.get(r.$0Qb).toggleGlobalIgnoredRecommendation(Ie, !1),
							}),
							this.u({
								id: "workbench.extensions.action.addExtensionToWorkspaceRecommendations",
								title: (0, t.localize2)(
									6231,
									"Add to Workspace Recommendations",
								),
								menu: {
									id: E.$XX.ExtensionContext,
									group: "3_recommendations",
									when: R.$Kj.and(
										W.$wPb.notEqualsTo("empty"),
										R.$Kj.has("isBuiltinExtension").negate(),
										R.$Kj.has("isExtensionWorkspaceRecommended").negate(),
										R.$Kj.has("isUserIgnoredRecommendation").negate(),
										R.$Kj.notEquals("extensionSource", "resource"),
									),
									order: 2,
								},
								run: (Ee, Ie) => Ee.get(X.$DRb).toggleRecommendation(Ie),
							}),
							this.u({
								id: "workbench.extensions.action.removeExtensionFromWorkspaceRecommendations",
								title: (0, t.localize2)(
									6232,
									"Remove from Workspace Recommendations",
								),
								menu: {
									id: E.$XX.ExtensionContext,
									group: "3_recommendations",
									when: R.$Kj.and(
										W.$wPb.notEqualsTo("empty"),
										R.$Kj.has("isBuiltinExtension").negate(),
										R.$Kj.has("isExtensionWorkspaceRecommended"),
									),
									order: 2,
								},
								run: (Ee, Ie) => Ee.get(X.$DRb).toggleRecommendation(Ie),
							}),
							this.u({
								id: "workbench.extensions.action.addToWorkspaceRecommendations",
								title: (0, t.localize2)(
									6233,
									"Add Extension to Workspace Recommendations",
								),
								category: (0, t.localize)(6190, null),
								menu: {
									id: E.$XX.CommandPalette,
									when: R.$Kj.and(
										W.$wPb.isEqualTo("workspace"),
										R.$Kj.equals("resourceScheme", Y.Schemas.extension),
									),
								},
								async run(Ee) {
									const Ie = Ee.get(x.$IY),
										Be = Ee.get(X.$DRb);
									if (!(Ie.activeEditor instanceof n.$KQb)) return;
									const Se =
										Ie.activeEditor.extension.identifier.id.toLowerCase();
									(await Be.getRecommendations()).includes(Se) ||
										(await Be.toggleRecommendation(Se));
								},
							}),
							this.u({
								id: "workbench.extensions.action.addToWorkspaceFolderRecommendations",
								title: (0, t.localize2)(
									6234,
									"Add Extension to Workspace Folder Recommendations",
								),
								category: (0, t.localize)(6191, null),
								menu: {
									id: E.$XX.CommandPalette,
									when: R.$Kj.and(
										W.$wPb.isEqualTo("folder"),
										R.$Kj.equals("resourceScheme", Y.Schemas.extension),
									),
								},
								run: () =>
									this.n.executeCommand(
										"workbench.extensions.action.addToWorkspaceRecommendations",
									),
							}),
							this.u({
								id: "workbench.extensions.action.addToWorkspaceIgnoredRecommendations",
								title: (0, t.localize2)(
									6235,
									"Add Extension to Workspace Ignored Recommendations",
								),
								category: (0, t.localize)(6192, null),
								menu: {
									id: E.$XX.CommandPalette,
									when: R.$Kj.and(
										W.$wPb.isEqualTo("workspace"),
										R.$Kj.equals("resourceScheme", Y.Schemas.extension),
									),
								},
								async run(Ee) {
									const Ie = Ee.get(x.$IY),
										Be = Ee.get(X.$DRb);
									if (!(Ie.activeEditor instanceof n.$KQb)) return;
									const Se =
										Ie.activeEditor.extension.identifier.id.toLowerCase();
									(await Be.getUnwantedRecommendations()).includes(Se) ||
										(await Be.toggleUnwantedRecommendation(Se));
								},
							}),
							this.u({
								id: "workbench.extensions.action.addToWorkspaceFolderIgnoredRecommendations",
								title: (0, t.localize2)(
									6236,
									"Add Extension to Workspace Folder Ignored Recommendations",
								),
								category: (0, t.localize)(6193, null),
								menu: {
									id: E.$XX.CommandPalette,
									when: R.$Kj.and(
										W.$wPb.isEqualTo("folder"),
										R.$Kj.equals("resourceScheme", Y.Schemas.extension),
									),
								},
								run: () =>
									this.n.executeCommand(
										"workbench.extensions.action.addToWorkspaceIgnoredRecommendations",
									),
							}),
							this.u({
								id: c.$PTb.ID,
								title: {
									value: c.$PTb.LABEL,
									original: "Configure Recommended Extensions (Workspace)",
								},
								category: (0, t.localize)(6194, null),
								menu: {
									id: E.$XX.CommandPalette,
									when: W.$wPb.isEqualTo("workspace"),
								},
								run: () =>
									xe(this.j.createInstance(c.$PTb, c.$PTb.ID, c.$PTb.LABEL)),
							});
					}
					u(Ee) {
						const Ie = Ee.menu
							? Array.isArray(Ee.menu)
								? Ee.menu
								: [Ee.menu]
							: [];
						let Be = [];
						const Se = [];
						if (Ee.menuTitles)
							for (let Ue = 0; Ue < Ie.length; Ue++) {
								const qe = Ie[Ue],
									Ae = Ee.menuTitles[qe.id.id];
								Ae
									? Se.push({
											id: qe.id,
											item: { ...qe, command: { id: Ee.id, title: Ae } },
										})
									: Be.push(qe);
							}
						else Be = Ie;
						const ke = new te.$Zc();
						return (
							ke.add(
								(0, E.$4X)(
									class extends E.$3X {
										constructor() {
											super({ ...Ee, menu: Be });
										}
										run(Ue, ...qe) {
											return Ee.run(Ue, ...qe);
										}
									},
								),
							),
							Se.length && ke.add(E.$ZX.appendMenuItems(Se)),
							ke
						);
					}
				};
				He = Ne(
					[
						j(0, m.$EQb),
						j(1, d.$Ep),
						j(2, R.$6j),
						j(3, $e.$6Sb),
						j(4, h.$MQb),
						j(5, m.$IQb),
						j(6, l.$Li),
						j(7, Q.$GO),
						j(8, s.$ek),
					],
					He,
				);
				let Ke = class {
					constructor(Ee, Ie) {
						fe.$2N.removeOutdatedExtensionVersions(Ee, Ie);
					}
				};
				Ke = Ne([j(0, d.$Hp), j(1, me.$lq)], Ke);
				const Je = w.$Io.as(u.Extensions.Workbench);
				Je.registerWorkbenchContribution(He, S.LifecyclePhase.Restored),
					Je.registerWorkbenchContribution(p.$xTc, S.LifecyclePhase.Eventually),
					Je.registerWorkbenchContribution(p.$yTc, S.LifecyclePhase.Eventually),
					Je.registerWorkbenchContribution(y.$NGc, S.LifecyclePhase.Restored),
					Je.registerWorkbenchContribution(p.$vTc, S.LifecyclePhase.Restored),
					Je.registerWorkbenchContribution(T.$zTc, S.LifecyclePhase.Eventually),
					Je.registerWorkbenchContribution(k.$ATc, S.LifecyclePhase.Eventually),
					Je.registerWorkbenchContribution(ne.$XTc, S.LifecyclePhase.Restored),
					Je.registerWorkbenchContribution(oe.$YTc, S.LifecyclePhase.Restored),
					Je.registerWorkbenchContribution(
						ye.$1Tc,
						S.LifecyclePhase.Eventually,
					),
					Je.registerWorkbenchContribution(
						ge.$2Tc,
						S.LifecyclePhase.Eventually,
					),
					ue.$r &&
						Je.registerWorkbenchContribution(Ke, S.LifecyclePhase.Eventually),
					(0, E.$4X)(ie.$WTc),
					w.$Io
						.as(Le.$z6.ConfigurationMigration)
						.registerConfigurationMigrations([
							{
								key: h.$OQb,
								migrateFn: (Te, Ee) =>
									Te === "onlySelectedExtensions" ? { value: !1 } : [],
							},
						]);
			},
		),
		