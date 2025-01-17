import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/async.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/errorMessage.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/event.js';
import '../../../../base/common/actions.js';
import '../../../../base/browser/dom.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../services/extensions/common/extensions.js';
import '../common/extensions.js';
import './extensionsActions.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../../services/extensionManagement/common/extensionManagement.js';
import '../common/extensionsInput.js';
import './extensionsViews.js';
import '../../../../platform/progress/common/progress.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../../base/common/severity.js';
import '../../../services/activity/common/activity.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../common/views.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/notification/common/notification.js';
import '../../../services/host/browser/host.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../browser/parts/views/viewPaneContainer.js';
import '../common/extensionQuery.js';
import '../../codeEditor/browser/suggestEnabledInput/suggestEnabledInput.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../../../../platform/extensions/common/extensions.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../services/preferences/common/preferences.js';
import '../../../common/theme.js';
import '../../../services/environment/common/environmentService.js';
import '../../../common/contextkeys.js';
import '../../../../platform/commands/common/commands.js';
import './extensionsIcons.js';
import '../../../../platform/actions/common/actions.js';
import '../../../services/panecomposite/browser/panecomposite.js';
import '../../../../base/common/arrays.js';
import '../../../../platform/dnd/browser/dnd.js';
import '../../../../base/common/resources.js';
import '../../../../platform/extensionManagement/common/extensionManagementUtil.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../base/common/uri.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../base/common/constants.js';
import '../../../browser/actions/widgetNavigationCommands.js';
import '../../../../platform/actions/browser/toolbar.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../css!vs/workbench/contrib/extensions/browser/media/extensionsViewlet.js';
define(
		de[1991],
		he([
			1, 0, 4, 15, 29, 163, 3, 6, 50, 7, 32, 5, 53, 141, 404, 119, 157, 1243,
			1990, 84, 66, 111, 260, 35, 10, 60, 21, 25, 8, 49, 34, 40, 87, 96, 239,
			1242, 1043, 127, 109, 30, 73, 102, 131, 123, 78, 100, 31, 466, 11, 142,
			24, 347, 19, 154, 41, 9, 45, 58, 518, 173, 92, 2437,
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
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$yTc =
					e.$xTc =
					e.$wTc =
					e.$vTc =
					e.$uTc =
					e.$tTc =
					e.$sTc =
					e.$rTc =
					e.$qTc =
					e.$pTc =
						void 0),
				(l = xi(l)),
				(e.$pTc = new P.$5j("defaultExtensionViews", !0)),
				(e.$qTc = new P.$5j("extensionsSortByValue", "")),
				(e.$rTc = new P.$5j("searchMarketplaceExtensions", !1)),
				(e.$sTc = new P.$5j("extensionSearchHasText", !1));
			const oe = new P.$5j("installedExtensions", !1),
				ae = new P.$5j("searchInstalledExtensions", !1),
				pe = new P.$5j("searchRecentlyUpdatedExtensions", !1),
				$e = new P.$5j("searchExtensionUpdates", !1),
				ye = new P.$5j("searchOutdatedExtensions", !1),
				ue = new P.$5j("searchEnabledExtensions", !1),
				fe = new P.$5j("searchDisabledExtensions", !1),
				me = new P.$5j("hasInstalledExtensions", !0);
			e.$tTc = new P.$5j("builtInExtensions", !1);
			const ve = new P.$5j("searchBuiltInExtensions", !1),
				ge = new P.$5j("searchUnsupportedWorkspaceExtensions", !1),
				be = new P.$5j("searchDeprecatedExtensions", !1);
			e.$uTc = new P.$5j("recommendedExtensions", !1);
			const Ce = new P.$5j("sortByUpdateDate", !1),
				Le = (0, t.localize2)(6466, "Remote");
			let Fe = class extends C.$1c {
				constructor(Je, Te, Ee, Ie) {
					super(),
						(this.b = Je),
						(this.f = Te),
						(this.g = Ie),
						(this.a = Ee.getViewContainerById(c.$LQb)),
						this.h();
				}
				h() {
					const Je = [];
					Je.push(...this.j()),
						Je.push(...this.m()),
						Je.push(...this.n()),
						Je.push(...this.q()),
						Je.push(...this.s()),
						Je.push(...this.u()),
						z.$Io.as(S.Extensions.ViewsRegistry).registerViews(Je, this.a);
				}
				j() {
					const Je = [],
						Te = [];
					this.b.localExtensionManagementServer &&
						Te.push(this.b.localExtensionManagementServer),
						this.b.remoteExtensionManagementServer &&
							Te.push(this.b.remoteExtensionManagementServer),
						this.b.webExtensionManagementServer &&
							Te.push(this.b.webExtensionManagementServer);
					const Ee = (Se, ke) => (Te.length > 1 ? `${ke.label} - ${Se}` : Se);
					let Ie = d.Event.None;
					if (
						this.b.webExtensionManagementServer &&
						this.b.remoteExtensionManagementServer
					) {
						const Se = new Set();
						Se.add("hasInstalledWebExtensions"),
							(Ie = d.Event.filter(this.g.onDidChangeContext, (ke) =>
								ke.affectsSome(Se),
							));
					}
					const Be = d.Event.any(this.f.onDidChangeFormatters, Ie);
					for (const Se of Te) {
						const ke = () => Ee((0, t.localize)(6449, null), Se),
							Ue = d.Event.map(Be, () => ke()),
							qe =
								Te.length > 1
									? `workbench.views.extensions.${Se.id}.installed`
									: "workbench.views.extensions.installed";
						Je.push({
							id: qe,
							get name() {
								return { value: ke(), original: Ee("Installed", Se) };
							},
							weight: 100,
							order: 1,
							when: P.$Kj.and(e.$pTc),
							ctorDescriptor: new x.$Ji(f.$5Sc, [
								{ server: Se, flexibleHeight: !0, onDidChangeTitle: Ue },
							]),
							canToggleVisibility: Te.length === 1,
						}),
							Se === this.b.remoteExtensionManagementServer &&
								this.b.localExtensionManagementServer &&
								this.D(
									(0, W.$4X)(
										class extends W.$3X {
											constructor() {
												super({
													id: "workbench.extensions.installLocalExtensions",
													get title() {
														return (0, t.localize2)(
															6467,
															"Install Local Extensions in '{0}'...",
															Se.label,
														);
													},
													category: Le,
													icon: J.$fSb,
													f1: !0,
													menu: {
														id: W.$XX.ViewTitle,
														when: P.$Kj.equals("view", qe),
														group: "navigation",
													},
												});
											}
											run(Me) {
												return Me.get(a.$Li).createInstance(n.$XTb).run();
											}
										},
									),
								);
					}
					return (
						this.b.localExtensionManagementServer &&
							this.b.remoteExtensionManagementServer &&
							this.D(
								(0, W.$4X)(
									class extends W.$3X {
										constructor() {
											super({
												id: "workbench.extensions.actions.installLocalExtensionsInRemote",
												title: (0, t.localize2)(
													6468,
													"Install Remote Extensions Locally...",
												),
												category: Le,
												f1: !0,
											});
										}
										run(ke) {
											return ke
												.get(a.$Li)
												.createInstance(
													n.$YTb,
													"workbench.extensions.actions.installLocalExtensionsInRemote",
												)
												.run();
										}
									},
								),
							),
						Je.push({
							id: "workbench.views.extensions.popular",
							name: (0, t.localize2)(6469, "Popular"),
							ctorDescriptor: new x.$Ji(f.$4Sc, [{ hideBadge: !0 }]),
							when: P.$Kj.and(
								e.$pTc,
								P.$Kj.not("hasInstalledExtensions"),
								c.$1Qb,
							),
							weight: 60,
							order: 2,
							canToggleVisibility: !1,
						}),
						Je.push({
							id: "extensions.recommendedList",
							name: (0, t.localize2)(6470, "Recommended"),
							ctorDescriptor: new x.$Ji(f.$eTc, [{ flexibleHeight: !0 }]),
							when: P.$Kj.and(
								e.$pTc,
								Ce.negate(),
								P.$Kj.not("config.extensions.showRecommendationsOnlyOnDemand"),
								c.$1Qb,
							),
							weight: 40,
							order: 3,
							canToggleVisibility: !0,
						}),
						Te.length === 1 &&
							(Je.push({
								id: "workbench.views.extensions.enabled",
								name: (0, t.localize2)(6471, "Enabled"),
								ctorDescriptor: new x.$Ji(f.$6Sc, [{}]),
								when: P.$Kj.and(e.$pTc, P.$Kj.has("hasInstalledExtensions")),
								hideByDefault: !0,
								weight: 40,
								order: 4,
								canToggleVisibility: !0,
							}),
							Je.push({
								id: "workbench.views.extensions.disabled",
								name: (0, t.localize2)(6472, "Disabled"),
								ctorDescriptor: new x.$Ji(f.$7Sc, [{}]),
								when: P.$Kj.and(e.$pTc, P.$Kj.has("hasInstalledExtensions")),
								hideByDefault: !0,
								weight: 10,
								order: 5,
								canToggleVisibility: !0,
							})),
						Je
					);
				}
				m() {
					const Je = [];
					return (
						Je.push({
							id: "workbench.views.extensions.marketplace",
							name: (0, t.localize2)(6473, "Marketplace"),
							ctorDescriptor: new x.$Ji(f.$dTc, [{}]),
							when: P.$Kj.and(P.$Kj.has("searchMarketplaceExtensions")),
						}),
						Je.push({
							id: "workbench.views.extensions.searchInstalled",
							name: (0, t.localize2)(6474, "Installed"),
							ctorDescriptor: new x.$Ji(f.$3Sc, [{}]),
							when: P.$Kj.or(
								P.$Kj.has("searchInstalledExtensions"),
								P.$Kj.has("installedExtensions"),
							),
						}),
						Je.push({
							id: "workbench.views.extensions.searchRecentlyUpdated",
							name: (0, t.localize2)(6475, "Recently Updated"),
							ctorDescriptor: new x.$Ji(f.$9Sc, [{}]),
							when: P.$Kj.or($e, P.$Kj.has("searchRecentlyUpdatedExtensions")),
							order: 2,
						}),
						Je.push({
							id: "workbench.views.extensions.searchEnabled",
							name: (0, t.localize2)(6476, "Enabled"),
							ctorDescriptor: new x.$Ji(f.$3Sc, [{}]),
							when: P.$Kj.and(P.$Kj.has("searchEnabledExtensions")),
						}),
						Je.push({
							id: "workbench.views.extensions.searchDisabled",
							name: (0, t.localize2)(6477, "Disabled"),
							ctorDescriptor: new x.$Ji(f.$3Sc, [{}]),
							when: P.$Kj.and(P.$Kj.has("searchDisabledExtensions")),
						}),
						Je.push({
							id: c.$UQb,
							name: (0, t.localize2)(6478, "Available Updates"),
							ctorDescriptor: new x.$Ji(f.$8Sc, [{}]),
							when: P.$Kj.or($e, P.$Kj.has("searchOutdatedExtensions")),
							order: 1,
						}),
						Je.push({
							id: "workbench.views.extensions.searchBuiltin",
							name: (0, t.localize2)(6479, "Builtin"),
							ctorDescriptor: new x.$Ji(f.$3Sc, [{}]),
							when: P.$Kj.and(P.$Kj.has("searchBuiltInExtensions")),
						}),
						Je.push({
							id: "workbench.views.extensions.searchWorkspaceUnsupported",
							name: (0, t.localize2)(6480, "Workspace Unsupported"),
							ctorDescriptor: new x.$Ji(f.$3Sc, [{}]),
							when: P.$Kj.and(
								P.$Kj.has("searchWorkspaceUnsupportedExtensions"),
							),
						}),
						Je
					);
				}
				n() {
					const Je = [];
					return (
						Je.push({
							id: c.$TQb,
							name: (0, t.localize2)(6481, "Workspace Recommendations"),
							ctorDescriptor: new x.$Ji(f.$gTc, [{}]),
							when: P.$Kj.and(
								P.$Kj.has("recommendedExtensions"),
								G.$wPb.notEqualsTo("empty"),
							),
							order: 1,
						}),
						Je.push({
							id: "workbench.views.extensions.otherRecommendations",
							name: (0, t.localize2)(6482, "Other Recommendations"),
							ctorDescriptor: new x.$Ji(f.$fTc, [{}]),
							when: P.$Kj.has("recommendedExtensions"),
							order: 2,
						}),
						Je
					);
				}
				q() {
					const Je = [],
						Te = ["themes", "programming languages"],
						Ee = U.$Fn.filter((Be) => !Te.includes(Be.toLowerCase()));
					Ee.push(f.$2Sc);
					const Ie = `${Ee.map((Be) => `category:"${Be}"`).join(" ")} ${Te.map((Be) => `category:"-${Be}"`).join(" ")}`;
					return (
						Je.push({
							id: "workbench.views.extensions.builtinFeatureExtensions",
							name: (0, t.localize2)(6483, "Features"),
							ctorDescriptor: new x.$Ji(f.$0Sc, [{ query: `@builtin ${Ie}` }]),
							when: P.$Kj.has("builtInExtensions"),
						}),
						Je.push({
							id: "workbench.views.extensions.builtinThemeExtensions",
							name: (0, t.localize2)(6484, "Themes"),
							ctorDescriptor: new x.$Ji(f.$0Sc, [
								{ query: "@builtin category:themes" },
							]),
							when: P.$Kj.has("builtInExtensions"),
						}),
						Je.push({
							id: "workbench.views.extensions.builtinProgrammingLanguageExtensions",
							name: (0, t.localize2)(6485, "Programming Languages"),
							ctorDescriptor: new x.$Ji(f.$0Sc, [
								{ query: '@builtin category:"programming languages"' },
							]),
							when: P.$Kj.has("builtInExtensions"),
						}),
						Je
					);
				}
				s() {
					const Je = [];
					return (
						Je.push({
							id: "workbench.views.extensions.untrustedUnsupportedExtensions",
							name: (0, t.localize2)(6486, "Disabled in Restricted Mode"),
							ctorDescriptor: new x.$Ji(f.$$Sc, [{}]),
							when: P.$Kj.and(ge),
						}),
						Je.push({
							id: "workbench.views.extensions.untrustedPartiallySupportedExtensions",
							name: (0, t.localize2)(6487, "Limited in Restricted Mode"),
							ctorDescriptor: new x.$Ji(f.$_Sc, [{}]),
							when: P.$Kj.and(ge),
						}),
						Je.push({
							id: "workbench.views.extensions.virtualUnsupportedExtensions",
							name: (0, t.localize2)(6488, "Disabled in Virtual Workspaces"),
							ctorDescriptor: new x.$Ji(f.$aTc, [{}]),
							when: P.$Kj.and(G.$DPb, ge),
						}),
						Je.push({
							id: "workbench.views.extensions.virtualPartiallySupportedExtensions",
							name: (0, t.localize2)(6489, "Limited in Virtual Workspaces"),
							ctorDescriptor: new x.$Ji(f.$bTc, [{}]),
							when: P.$Kj.and(G.$DPb, ge),
						}),
						Je
					);
				}
				u() {
					const Je = [];
					return (
						Je.push({
							id: "workbench.views.extensions.deprecatedExtensions",
							name: (0, t.localize2)(6490, "Deprecated"),
							ctorDescriptor: new x.$Ji(f.$cTc, [{}]),
							when: P.$Kj.and(be),
						}),
						Je
					);
				}
			};
			(e.$vTc = Fe),
				(e.$vTc = Fe =
					Ne([j(0, p.$EQb), j(1, F.$3N), j(2, S.$K1), j(3, P.$6j)], Fe));
			let Oe = class extends A.$ZSb {
				constructor(
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
					bt,
					nt,
				) {
					super(
						c.$LQb,
						{ mergeViewWithContainerWhenSingleView: !0 },
						Ie,
						Me,
						Je,
						Ve,
						Te,
						Ze,
						Ae,
						De,
						Re,
						et,
					),
						(this.Wb = Ee),
						(this.Xb = Be),
						(this.Yb = Se),
						(this.Zb = ke),
						(this.$b = Ue),
						(this.ac = qe),
						(this.bc = je),
						(this.cc = rt),
						(this.dc = ft),
						(this.ec = bt),
						(this.fc = nt),
						(this.Sb = new i.$Jh(500)),
						(this.Ab = e.$pTc.bindTo(je)),
						(this.Bb = e.$qTc.bindTo(je)),
						(this.Cb = e.$rTc.bindTo(je)),
						(this.Db = e.$sTc.bindTo(je)),
						(this.Eb = Ce.bindTo(je)),
						(this.Fb = oe.bindTo(je)),
						(this.Gb = ae.bindTo(je)),
						(this.Hb = pe.bindTo(je)),
						(this.Ib = $e.bindTo(je)),
						(this.Pb = ge.bindTo(je)),
						(this.Qb = be.bindTo(je)),
						(this.Jb = ye.bindTo(je)),
						(this.Kb = ue.bindTo(je)),
						(this.Lb = fe.bindTo(je)),
						(this.Mb = me.bindTo(je)),
						(this.Nb = e.$tTc.bindTo(je)),
						(this.Ob = ve.bindTo(je)),
						(this.Rb = e.$uTc.bindTo(je)),
						this.D(
							this.ac.onDidPaneCompositeOpen((lt) => {
								lt.viewContainerLocation === S.ViewContainerLocation.Sidebar &&
									this.pc(lt.composite);
							}, this),
						),
						this.D(Se.onReset(() => this.refresh())),
						(this.Vb = this.F(
							I.StorageScope.WORKSPACE,
							I.StorageTarget.MACHINE,
						));
				}
				get searchValue() {
					return this.Ub?.getValue();
				}
				create(Je) {
					Je.classList.add("extensions-viewlet"), (this.Tb = Je);
					const Te = (0, r.$fhb)(this.Tb, (0, r.$)(".overlay")),
						Ee = this.w(q.$BGb) ?? "";
					(Te.style.backgroundColor = Ee), (0, r.hide)(Te);
					const Ie = (0, r.$fhb)(this.Tb, (0, r.$)(".header"));
					(Ie.style.display = "flex"), (Ie.style.flexDirection = "column");
					const Be = (0, t.localize)(6450, null),
						Se = this.Vb["query.value"] ? this.Vb["query.value"] : "",
						ke = (0, r.$fhb)(Ie, (0, r.$)(".extensions-search-container"));
					(this.Ub = this.D(
						this.bb.createInstance(
							O.$3Bc,
							`${c.$LQb}.searchbox`,
							ke,
							{
								triggerCharacters: ["@"],
								sortKey: (je) =>
									je.indexOf(":") === -1
										? "a"
										: /ext:/.test(je) || /id:/.test(je) || /tag:/.test(je)
											? "b"
											: /sort:/.test(je)
												? "c"
												: "d",
								provideResults: (je) => R.$ZSc.suggestions(je),
							},
							Be,
							"extensions:searchinput",
							{ placeholderText: Be, value: Se },
						),
					)),
						(Ie.style.height = "fit-content");
					const Ue = (0, r.$fhb)(
						Ie,
						(0, r.$)("div.cursor-extension-viewlet-note"),
					);
					(Ue.style.flex = "1"),
						(Ue.style.display = "flex"),
						(Ue.style.flexDirection = "column"),
						(Ue.style.justifyContent = "center"),
						(Ue.style.alignItems = "center"),
						(Ue.style.paddingTop = "4px");
					const qe = (0, r.$fhb)(
							Ue,
							(0, r.$)("div.cursor-extension-viewlet-note-1"),
						),
						Ae = te.URI.parse(
							"https://www.cursor.com/how-to-install-extension",
						);
					if (
						this.fc.applicationUserPersistentStorage.haveNotImportedFromVSC ===
						!0
					) {
						const je = (0, r.$fhb)(
								qe,
								(0, r.$)("a", { href: Ae }, (0, t.localize)(6451, null)),
							),
							Ve = (0, r.$fhb)(
								qe,
								(0, r.$)(
									"a",
									{
										style:
											"color: var(--vscode-foreground); font-weight: normal; opacity: 0.5; margin-left: 5px; cursor: pointer; text-align: right; font-size: 11px;",
									},
									"(don't show again)",
								),
							);
						(0, r.$0fb)(je, "click", async (Ze) => {
							Ze.stopPropagation(),
								Ze.preventDefault(),
								qe.removeChild(je),
								qe.removeChild(Ve);
							const et = (0, r.$fhb)(
								qe,
								(0, r.$)("span", void 0, (0, t.localize)(6452, null)),
							);
							await this.dc?.executeCommand(Z.$9W, !0), qe.removeChild(et);
							const rt = (0, r.$fhb)(
								qe,
								(0, r.$)("span", void 0, (0, t.localize)(6453, null)),
							);
						}),
							(0, r.$0fb)(Ve, "click", async (Ze) => {
								Ze.stopPropagation(),
									Ze.preventDefault(),
									qe.removeChild(je),
									qe.removeChild(Ve),
									this.fc.setApplicationUserPersistentStorage(
										"haveNotImportedFromVSC",
										!1,
									);
							});
					}
					this.gc(),
						this.Ub.getValue() && this.hc(),
						this.D(
							this.Ub.onInputDidChange(() => {
								this.Bb.set(R.$ZSc.parse(this.Ub?.getValue() ?? "").sortBy),
									this.hc();
							}, this),
						),
						this.D(this.Ub.onShouldFocusResults(() => this.oc(), this));
					const Me = (0, r.$fhb)(
						ke,
						(0, r.$)(".extensions-search-actions-container"),
					);
					this.D(
						this.bb.createInstance(re.$Tyb, Me, c.$5Qb, {
							toolbarOptions: { primaryGroup: () => !0 },
							actionViewItemProvider: (je, Ve) => (0, le.$Pyb)(this.bb, je, Ve),
						}),
					),
						this.D(
							new r.$Hhb(this.Tb, {
								onDragEnter: (je) => {
									this.sc(je) && (0, r.show)(Te);
								},
								onDragLeave: (je) => {
									this.sc(je) && (0, r.hide)(Te);
								},
								onDragOver: (je) => {
									this.sc(je) && (je.dataTransfer.dropEffect = "copy");
								},
								onDrop: async (je) => {
									if (this.sc(je)) {
										(0, r.hide)(Te);
										const Ve = (0, Y.$Lb)(
											(
												await this.bb.invokeFunction((Ze) =>
													(0, ie.$jzb)(Ze, je),
												)
											).map((Ze) =>
												Ze.resource && (0, ne.$lh)(Ze.resource) === ".vsix"
													? Ze.resource
													: void 0,
											),
										);
										if (Ve.length > 0)
											try {
												await this.dc.executeCommand(c.$XQb, Ve);
											} catch (Ze) {
												this.$b.error(Ze);
											}
									}
								},
							}),
						),
						super.create((0, r.$fhb)(this.Tb, (0, r.$)(".extensions")));
					const De = this.D((0, r.$dhb)(this.Tb)),
						Re = () => this.Ub?.inputWidget.hasWidgetFocus();
					this.D(
						(0, se.$D3b)({
							name: "extensionsView",
							focusNotifiers: [De],
							focusNextWidget: () => {
								Re() && this.oc();
							},
							focusPreviousWidget: () => {
								Re() || this.Ub?.focus();
							},
						}),
					);
				}
				focus() {
					super.focus(), this.Ub?.focus();
				}
				layout(Je) {
					this.Tb &&
						(this.Tb.classList.toggle("narrow", Je.width <= 250),
						this.Tb.classList.toggle("mini", Je.width <= 200)),
						this.Ub?.layout(new r.$pgb(Je.width - 34 - 8 - 24 * 2, 20)),
						super.layout(new r.$pgb(Je.width, Je.height - 88));
				}
				getOptimalWidth() {
					return 400;
				}
				search(Je) {
					this.Ub && this.Ub.getValue() !== Je && this.Ub.setValue(Je);
				}
				async refresh() {
					await this.gc(),
						this.kc(!0),
						this.cb.getValue(c.$PQb) && this.Yb.checkForUpdates();
				}
				async gc() {
					const Je = await this.Yb.queryLocal();
					this.Mb.set(Je.some((Te) => !Te.isBuiltin));
				}
				hc() {
					this.Sb.trigger(
						() => this.kc(),
						this.Ub && this.Ub.getValue() ? 500 : 0,
					).then(void 0, (Je) => this.rc(Je));
				}
				ic() {
					return this.Ub
						? this.Ub.getValue()
								.trim()
								.replace(/@category/g, "category")
								.replace(/@tag:/g, "tag:")
								.replace(/@ext:/g, "ext:")
								.replace(/@featured/g, "featured")
								.replace(
									/@popular/g,
									this.Zb.webExtensionManagementServer &&
										!this.Zb.localExtensionManagementServer &&
										!this.Zb.remoteExtensionManagementServer
										? "@web"
										: "@popular",
								)
						: "";
				}
				I() {
					const Je = this.Ub ? this.Ub.getValue() : "";
					f.$3Sc.isLocalExtensionsQuery(Je)
						? (this.Vb["query.value"] = Je)
						: (this.Vb["query.value"] = ""),
						super.I();
				}
				kc(Je) {
					const Te = this.ic();
					return (
						this.bc.bufferChangeEvents(() => {
							const Ee = f.$3Sc.isRecommendedExtensionsQuery(Te);
							this.Db.set(Te.trim() !== ""),
								this.Fb.set(f.$3Sc.isInstalledExtensionsQuery(Te)),
								this.Gb.set(f.$3Sc.isSearchInstalledExtensionsQuery(Te)),
								this.Hb.set(
									f.$3Sc.isSearchRecentlyUpdatedQuery(Te) &&
										!f.$3Sc.isSearchExtensionUpdatesQuery(Te),
								),
								this.Jb.set(
									f.$3Sc.isOutdatedExtensionsQuery(Te) &&
										!f.$3Sc.isSearchExtensionUpdatesQuery(Te),
								),
								this.Ib.set(f.$3Sc.isSearchExtensionUpdatesQuery(Te)),
								this.Kb.set(f.$3Sc.isEnabledExtensionsQuery(Te)),
								this.Lb.set(f.$3Sc.isDisabledExtensionsQuery(Te)),
								this.Ob.set(f.$3Sc.isSearchBuiltInExtensionsQuery(Te)),
								this.Pb.set(
									f.$3Sc.isSearchWorkspaceUnsupportedExtensionsQuery(Te),
								),
								this.Qb.set(f.$3Sc.isSearchDeprecatedExtensionsQuery(Te)),
								this.Nb.set(f.$3Sc.isBuiltInExtensionsQuery(Te)),
								this.Rb.set(Ee),
								this.Cb.set(!!Te && !f.$3Sc.isLocalExtensionsQuery(Te) && !Ee),
								this.Eb.set(f.$3Sc.isSortUpdateDateQuery(Te)),
								this.Ab.set(!Te || f.$3Sc.isSortInstalledExtensionsQuery(Te));
						}),
						this.qc(
							Promise.all(
								this.panes.map((Ee) =>
									Ee.show(this.ic(), Je).then((Ie) =>
										this.mc(Ie.length, Ee.id),
									),
								),
							),
						).then(() => {})
					);
				}
				tb(Je) {
					const Te = super.tb(Je);
					return (
						this.qc(
							Promise.all(
								Te.map((Ee) =>
									Ee.show(this.ic()).then((Ie) => this.mc(Ie.length, Ee.id)),
								),
							),
						),
						Te
					);
				}
				mc(Je, Te) {
					const Ee = this.P.visibleViewDescriptors.find((Ie) => Ie.id === Te);
					switch (Je) {
						case 0:
							break;
						case 1:
							Ee
								? (0, B.$oib)((0, t.localize)(6454, null, Ee.name.value))
								: (0, B.$oib)((0, t.localize)(6455, null));
							break;
						default:
							Ee
								? (0, B.$oib)((0, t.localize)(6456, null, Je, Ee.name.value))
								: (0, B.$oib)((0, t.localize)(6457, null, Je));
							break;
					}
				}
				nc() {
					for (const Je of this.panes)
						if (Je.isExpanded() && Je instanceof f.$3Sc) return Je;
				}
				oc() {
					const Je = this.nc();
					Je && Je.count() > 0 && Je.focus();
				}
				pc(Je) {
					if (!(!Je || Je.getId() === c.$LQb) && this.cb.getValue(c.$QQb)) {
						const Te = this.Xb.groups.map((Ee) => {
							const Ie = Ee.editors.filter((Be) => Be instanceof o.$KQb);
							return Ee.closeEditors(Ie);
						});
						Promise.all(Te);
					}
				}
				qc(Je) {
					return this.Wb.withProgress(
						{ location: b.ProgressLocation.Extensions },
						() => Je,
					);
				}
				rc(Je) {
					if ((0, w.$8)(Je)) return;
					const Te = (Je && Je.message) || "";
					if (/ECONNREFUSED/.test(Te)) {
						const Ee = (0, E.$zj)((0, t.localize)(6458, null), [
							new m.$rj(
								"open user settings",
								(0, t.localize)(6459, null),
								void 0,
								!0,
								() => this.cc.openUserSettings(),
							),
						]);
						this.$b.error(Ee);
						return;
					}
					this.$b.error(Je);
				}
				sc(Je) {
					return Je.dataTransfer
						? Je.dataTransfer.types
								.map((Ee) => Ee.toLocaleLowerCase())
								.indexOf("files") !== -1
						: !1;
				}
			};
			(e.$wTc = Oe),
				(e.$wTc = Oe =
					Ne(
						[
							j(0, N.$mEb),
							j(1, u.$km),
							j(2, b.$8N),
							j(3, a.$Li),
							j(4, s.$EY),
							j(5, c.$MQb),
							j(6, p.$EQb),
							j(7, D.$4N),
							j(8, X.$6Sb),
							j(9, $.$iP),
							j(10, v.$gj),
							j(11, I.$lq),
							j(12, T.$Vi),
							j(13, P.$6j),
							j(14, k.$Xxb),
							j(15, h.$q2),
							j(16, S.$K1),
							j(17, H.$7Z),
							j(18, K.$ek),
							j(19, _.$7rb),
							j(20, Q.$0zb),
						],
						Oe,
					));
			let xe = class extends C.$1c {
				constructor(Je, Te, Ee, Ie) {
					super(),
						(this.b = Je),
						(this.f = Te),
						(this.g = Ee),
						(this.h = Ie),
						(this.a = this.D(new C.$2c())),
						this.j(),
						this.D(
							d.Event.debounce(
								Te.onChange,
								() => {},
								100,
								void 0,
								void 0,
								void 0,
								this.B,
							)(this.j, this),
						);
				}
				j() {
					this.a.clear();
					const Je =
							this.h.getValue(c.$RQb) === !0
								? []
								: this.f.installed.filter((Ie) => Ie.runtimeState !== void 0),
						Te = this.f.outdated.reduce(
							(Ie, Be) =>
								Ie + (this.g.isEnabled(Be.local) && !Je.includes(Be) ? 1 : 0),
							0,
						),
						Ee = Te + Je.length;
					if (Ee > 0) {
						let Ie = "";
						Te &&
							(Ie +=
								Te === 1
									? (0, t.localize)(6460, null, Te)
									: (0, t.localize)(6461, null, Te)),
							Te > 0 && Je.length > 0 && (Ie += ", "),
							Je.length &&
								(Ie +=
									Je.length === 1
										? (0, t.localize)(6462, null, Je.length)
										: (0, t.localize)(6463, null, Je.length));
						const Be = new y.$8qc(Ee, () => Ie);
						this.a.value = this.b.showViewContainerActivity(c.$LQb, {
							badge: Be,
						});
					}
				}
			};
			(e.$xTc = xe),
				(e.$xTc = xe =
					Ne([j(0, y.$7qc), j(1, c.$MQb), j(2, p.$IQb), j(3, v.$gj)], xe));
			let He = class {
				constructor(Je, Te, Ee, Ie, Be) {
					(this.a = Je),
						(this.b = Te),
						(this.d = Ee),
						(this.f = Ie),
						(this.g = Be),
						this.g.disableExtensions || this.h();
				}
				h() {
					this.i()
						.then(() => (0, i.$Nh)(1e3 * 60 * 5))
						.then(() => this.h());
				}
				i() {
					return this.a.getExtensionsControlManifest().then(
						(Je) =>
							this.a
								.getInstalled(U.ExtensionType.User)
								.then((Te) => {
									const Ee = Te.filter((Ie) =>
										Je.malicious.some((Be) => (0, ee.$7p)(Ie.identifier, Be)),
									);
									return Ee.length
										? i.Promises.settled(
												Ee.map((Ie) =>
													this.a.uninstall(Ie).then(() => {
														this.f.prompt(
															l.default.Warning,
															(0, t.localize)(6464, null, Ie.identifier.id),
															[
																{
																	label: (0, t.localize)(6465, null),
																	run: () => this.b.reload(),
																},
															],
															{
																sticky: !0,
																priority: D.NotificationPriority.URGENT,
															},
														);
													}),
												),
											)
										: Promise.resolve(void 0);
								})
								.then(() => {}),
						(Je) => this.d.error(Je),
					);
				}
			};
			(e.$yTc = He),
				(e.$yTc = He =
					Ne(
						[j(0, g.$Hp), j(1, M.$asb), j(2, L.$ik), j(3, D.$4N), j(4, V.$r8)],
						He,
					));
		},
	),
		