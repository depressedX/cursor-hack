import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../base/browser/ui/scrollbar/scrollableElement.js';
import '../../../../base/browser/ui/toggle/toggle.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/cache.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/semver/semver.js';
import '../../../../base/common/types.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/uuid.js';
import '../../../../editor/common/editorContextKeys.js';
import '../../../../editor/common/languages.js';
import '../../../../editor/common/languages/language.js';
import '../../../../editor/common/languages/supports/tokenization.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/extensionManagement/common/extensionManagement.js';
import '../../../../platform/extensionManagement/common/extensionManagementUtil.js';
import '../../../../platform/extensions/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../browser/parts/editor/editorPane.js';
import '../../../common/views.js';
import './extensionFeaturesTab.js';
import './extensionsActions.js';
import './extensionsList.js';
import './extensionsViewer.js';
import './extensionsWidgets.js';
import '../common/extensions.js';
import '../../files/browser/files.js';
import '../../markdown/browser/markdownDocumentRenderer.js';
import '../../webview/browser/webview.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/extensionRecommendations/common/extensionRecommendations.js';
import '../../../services/extensions/common/extensions.js';
import '../../../services/panecomposite/browser/panecomposite.js';
import '../../../services/views/common/viewsService.js';
import '../../files/common/files.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../css!vs/workbench/contrib/extensions/browser/media/extensionEditor.js';
define(
			de[4298],
			he([
				1, 0, 7, 105, 95, 203, 268, 50, 24, 744, 33, 29, 6, 27, 3, 23, 12, 464,
				28, 9, 47, 71, 74, 61, 913, 4, 11, 8, 49, 119, 154, 109, 5, 43, 40, 41,
				21, 32, 106, 51, 35, 25, 217, 60, 3308, 404, 1356, 4297, 1955, 141, 382,
				1738, 355, 18, 314, 53, 142, 89, 220, 68, 72, 2436,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*actionbar*/,
				w /*hoverDelegateFactory*/,
				E /*scrollableElement*/,
				C /*toggle*/,
				d /*actions*/,
				m /*arrays*/,
				r /*cache*/,
				u /*cancellation*/,
				a /*errors*/,
				h /*event*/,
				c /*keyCodes*/,
				n /*lifecycle*/,
				g /*network*/,
				p /*platform*/,
				o /*semver*/,
				f /*types*/,
				b /*uri*/,
				s /*uuid*/,
				l /*editorContextKeys*/,
				y /*languages*/,
				$ /*language*/,
				v /*tokenization*/,
				S /*nls*/,
				I /*actions*/,
				T /*contextkey*/,
				P /*contextView*/,
				k /*extensionManagement*/,
				L /*extensionManagementUtil*/,
				D /*extensions*/,
				M /*instantiation*/,
				N /*keybindingsRegistry*/,
				A /*notification*/,
				R /*opener*/,
				O /*storage*/,
				B /*telemetry*/,
				U /*defaultStyles*/,
				z /*colorRegistry*/,
				F /*themeService*/,
				x /*workspace*/,
				H /*editorPane*/,
				q /*views*/,
				V /*extensionFeaturesTab*/,
				G /*extensionsActions*/,
				K /*extensionsList*/,
				J /*extensionsViewer*/,
				W /*extensionsWidgets*/,
				X /*extensions*/,
				Y /*files*/,
				ie /*markdownDocumentRenderer*/,
				ne /*webview*/,
				ee /*editorService*/,
				_ /*extensionRecommendations*/,
				te /*extensions*/,
				Q /*panecomposite*/,
				Z /*viewsService*/,
				se /*files*/,
				re /*uriIdentity*/,
				le /*hover*/,
) {
				"use strict";
				var oe;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oTc = void 0),
					(m = mt(m)),
					(o = mt(o));
				class ae extends n.$1c {
					get onChange() {
						return this.b.event;
					}
					get currentId() {
						return this.c;
					}
					constructor(be) {
						super(), (this.b = this.D(new h.$re())), (this.c = null);
						const Ce = (0, t.$fhb)(be, (0, t.$)(".navbar"));
						(this.f = []), (this.g = this.D(new i.$eib(Ce)));
					}
					push(be, Ce, Le) {
						const Fe = new d.$rj(be, Ce, void 0, !0, () => this.h(be, !0));
						(Fe.tooltip = Le),
							this.f.push(Fe),
							this.g.push(Fe),
							this.f.length === 1 && this.h(be);
					}
					clear() {
						(this.f = (0, n.$Vc)(this.f)), this.g.clear();
					}
					switch(be) {
						const Ce = this.f.find((Le) => Le.id === be);
						return Ce ? (Ce.run(), !0) : !1;
					}
					h(be, Ce) {
						(this.c = be),
							this.b.fire({ id: be, focus: !!Ce }),
							this.f.forEach((Le) => (Le.checked = Le.id === be));
					}
				}
				var pe;
				(function (ge) {
					(ge[(ge.Readme = 0)] = "Readme"),
						(ge[(ge.Changelog = 1)] = "Changelog");
				})(pe || (pe = {}));
				const $e = new T.$5j("showPreReleaseVersion", !1);
				class ye extends W.$ESc {
					constructor() {
						super(...arguments), (this.c = null);
					}
					get gallery() {
						return this.c;
					}
					set gallery(be) {
						(this.extension &&
							be &&
							!(0, L.$7p)(this.extension.identifier, be.identifier)) ||
							((this.c = be), this.update());
					}
				}
				class ue extends ye {
					constructor(be, Ce) {
						super(),
							(this.f = (0, t.$fhb)(be, (0, t.$)("code.version"))),
							this.D(
								Ce.setupManagedHover(
									(0, w.$cib)("mouse"),
									this.f,
									(0, S.localize)(6020, null),
								),
							),
							this.render();
					}
					render() {
						!this.extension ||
							!o.valid(this.extension.version) ||
							(this.f.textContent = `v${this.gallery?.version ?? this.extension.version}${this.extension.isPreReleaseVersion ? " (pre-release)" : ""}`);
					}
				}
				let fe = class extends H.$JEb {
					static {
						oe = this;
					}
					static {
						this.ID = "workbench.editor.extension";
					}
					constructor(
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
					) {
						super(oe.ID, be, Ce, He, Ee),
							(this.gb = Le),
							(this.hb = Fe),
							(this.ib = Oe),
							(this.jb = xe),
							(this.kb = Ke),
							(this.lb = Je),
							(this.mb = Te),
							(this.nb = Ie),
							(this.ob = Be),
							(this.pb = Se),
							(this.qb = ke),
							(this.rb = Ue),
							(this.sb = qe),
							(this.tb = Ae),
							(this.ub = Me),
							(this.vb = De),
							(this.wb = Re),
							(this.b = this.D(new n.$2c())),
							(this.m = new Map()),
							(this.r = ""),
							(this.s = []),
							(this.u = this.D(new n.$Zc())),
							(this.cb = this.D(new n.$Zc())),
							(this.db = null),
							(this.f = null),
							(this.g = null),
							(this.j = null);
					}
					get scopedContextKeyService() {
						return this.b.value;
					}
					Y(be) {
						const Ce = (0, t.$fhb)(be, (0, t.$)(".extension-editor"));
						(this.b.value = this.rb.createScoped(Ce)),
							this.b.value.createKey("inExtensionEditor", !0),
							(this.fb = $e.bindTo(this.b.value)),
							(Ce.tabIndex = 0),
							(Ce.style.outline = "none"),
							Ce.setAttribute("role", "document");
						const Le = (0, t.$fhb)(Ce, (0, t.$)(".header")),
							Fe = (0, t.$fhb)(Le, (0, t.$)(".icon-container")),
							Oe = (0, t.$fhb)(
								Fe,
								(0, t.$)("img.icon", { draggable: !1, alt: "" }),
							),
							xe = this.gb.createInstance(W.$MSc, Fe, !0),
							He = (0, t.$fhb)(Le, (0, t.$)(".details")),
							Ke = (0, t.$fhb)(He, (0, t.$)(".title")),
							Je = (0, t.$fhb)(
								Ke,
								(0, t.$)("span.name.clickable", {
									role: "heading",
									tabIndex: 0,
								}),
							);
						this.D(
							this.wb.setupManagedHover(
								(0, w.$cib)("mouse"),
								Je,
								(0, S.localize)(6021, null),
							),
						);
						const Te = new ue(Ke, this.wb),
							Ee = (0, t.$fhb)(Ke, (0, t.$)("span.preview"));
						this.D(
							this.wb.setupManagedHover(
								(0, w.$cib)("mouse"),
								Ee,
								(0, S.localize)(6022, null),
							),
						),
							(Ee.textContent = (0, S.localize)(6023, null));
						const Ie = (0, t.$fhb)(Ke, (0, t.$)("span.builtin"));
						Ie.textContent = (0, S.localize)(6024, null);
						const Be = (0, t.$fhb)(He, (0, t.$)(".subtitle")),
							Se = (0, t.$fhb)(
								(0, t.$fhb)(Be, (0, t.$)(".subtitle-entry")),
								(0, t.$)(".publisher.clickable", { tabIndex: 0 }),
							);
						this.D(
							this.wb.setupManagedHover(
								(0, w.$cib)("mouse"),
								Se,
								(0, S.localize)(6025, null),
							),
						),
							Se.setAttribute("role", "button");
						const ke = (0, t.$fhb)(Se, (0, t.$)(".publisher-name")),
							Ue = this.gb.createInstance(
								W.$ISc,
								(0, t.$fhb)(Se, (0, t.$)(".verified-publisher")),
								!1,
							),
							qe = (0, t.$fhb)(
								(0, t.$fhb)(Be, (0, t.$)(".subtitle-entry.resource")),
								(0, t.$)("", { tabIndex: 0 }),
							);
						qe.setAttribute("role", "button");
						const Ae = (0, t.$fhb)(
							(0, t.$fhb)(Be, (0, t.$)(".subtitle-entry")),
							(0, t.$)("span.install", { tabIndex: 0 }),
						);
						this.D(
							this.wb.setupManagedHover(
								(0, w.$cib)("mouse"),
								Ae,
								(0, S.localize)(6026, null),
							),
						);
						const Me = this.gb.createInstance(W.$GSc, Ae, !1),
							De = (0, t.$fhb)(
								(0, t.$fhb)(Be, (0, t.$)(".subtitle-entry")),
								(0, t.$)("span.rating.clickable", { tabIndex: 0 }),
							);
						this.D(
							this.wb.setupManagedHover(
								(0, w.$cib)("mouse"),
								De,
								(0, S.localize)(6027, null),
							),
						),
							De.setAttribute("role", "link");
						const Re = this.gb.createInstance(W.$HSc, De, !1),
							je = this.gb.createInstance(
								W.$JSc,
								(0, t.$fhb)(Be, (0, t.$)(".subtitle-entry")),
							),
							Ve = [xe, Te, Ue, Me, Re, je],
							Ze = (0, t.$fhb)(He, (0, t.$)(".description")),
							et = this.gb.createInstance(G.$eTb),
							rt = [
								this.gb.createInstance(G.$DTb),
								this.gb.createInstance(G.$RTb),
								this.gb.createInstance(G.$lTb, !0),
								this.gb.createInstance(G.$ETb),
								this.gb.createInstance(G.$FTb),
								this.gb.createInstance(G.$GTb),
								this.gb.createInstance(G.$HTb),
								this.gb.createInstance(G.$ITb),
								this.gb.createInstance(G.$BTb),
								this.gb.createInstance(G.$CTb),
								this.gb.createInstance(G.$hTb, !1),
								this.gb.createInstance(G.$iTb),
								this.gb.createInstance(G.$jTb),
								et,
								this.gb.createInstance(G.$fTb),
								this.gb.createInstance(
									G.$bTb,
									"extensions.uninstall",
									G.$kTb.UninstallClass,
									[
										[
											this.gb.createInstance(G.$oTb, !1),
											this.gb.createInstance(G.$kTb),
											this.gb.createInstance(G.$wTb, null, !0),
										],
									],
								),
								this.gb.createInstance(G.$vTb),
								this.gb.createInstance(G.$mTb),
								new G.$tTb(this.scopedContextKeyService || this.rb, this.gb),
							],
							ft = (0, t.$fhb)(He, (0, t.$)(".actions-status-container")),
							bt = this.D(
								new i.$eib(ft, {
									actionViewItemProvider: (kt, hi) => {
										if (kt instanceof G.$pTb)
											return kt.createActionViewItem(hi);
										if (kt instanceof G.$bTb)
											return new G.$cTb(
												kt,
												{
													...hi,
													icon: !0,
													label: !0,
													menuActionsOrProvider: {
														getActions: () => kt.menuActions,
													},
													menuActionClassNames: kt.menuActionClassNames,
												},
												this.qb,
											);
										if (kt instanceof G.$mTb)
											return new C.$0ib(void 0, kt, {
												...hi,
												icon: !0,
												label: !0,
												checkboxStyles: U.$syb,
											});
									},
									focusOnlyEnabledItems: !0,
								}),
							);
						bt.push(rt, { icon: !0, label: !0 }),
							bt.setFocusable(!0),
							this.D(
								h.Event.any(
									...rt.map((kt) =>
										h.Event.filter(
											kt.onDidChange,
											(hi) => hi.enabled !== void 0,
										),
									),
								)(() => {
									bt.setFocusable(!1), bt.setFocusable(!0);
								}),
							);
						const nt = [],
							lt = this.gb.createInstance(G.$TTb),
							ct = this.D(
								this.gb.createInstance(
									W.$RSc,
									(0, t.$fhb)(ft, (0, t.$)(".status")),
									lt,
								),
							);
						nt.push(
							lt,
							new (class extends W.$ESc {
								render() {
									ft.classList.toggle(
										"list-layout",
										this.extension?.state === X.ExtensionState.Installed,
									);
								}
							})(),
						);
						const gt = this.gb.createInstance(
							W.$SSc,
							(0, t.$fhb)(He, (0, t.$)(".recommendation")),
						);
						Ve.push(gt),
							this.D(
								h.Event.any(
									ct.onDidRender,
									gt.onDidRender,
								)(() => {
									this.eb && this.layout(this.eb);
								}),
							);
						const ht = this.gb.createInstance(X.$SQb, [...rt, ...Ve, ...nt]);
						for (const kt of [...rt, ...Ve, ...nt, ht]) this.D(kt);
						const Rt = h.Event.chain(bt.onDidRun, (kt) =>
							kt.map(({ error: hi }) => hi).filter((hi) => !!hi),
						);
						this.D(Rt(this.Ub, this));
						const Nt = (0, t.$fhb)(Ce, (0, t.$)(".body")),
							jt = new ae(Nt),
							ti = (0, t.$fhb)(Nt, (0, t.$)(".content"));
						(ti.id = (0, s.$9g)()),
							(this.c = {
								builtin: Ie,
								content: ti,
								description: Ze,
								header: Le,
								icon: Oe,
								iconContainer: Fe,
								installCount: Ae,
								name: Je,
								navbar: jt,
								preview: Ee,
								publisher: Se,
								publisherDisplayName: ke,
								resource: qe,
								rating: De,
								actionsAndStatusContainer: ft,
								extensionActionBar: bt,
								set extension(kt) {
									ht.extension = kt;
								},
								set gallery(kt) {
									Te.gallery = kt;
								},
								set manifest(kt) {
									et.manifest = kt;
								},
							});
					}
					async setInput(be, Ce, Le, Fe) {
						await super.setInput(be, Ce, Le, Fe),
							this.yb(),
							this.c &&
								(await this.Ab(be.extension, this.c, !!Ce?.preserveFocus));
					}
					setOptions(be) {
						const Ce = this.options;
						if (
							(super.setOptions(be),
							this.yb(),
							this.input &&
								this.c &&
								Ce?.showPreReleaseVersion !== be?.showPreReleaseVersion)
						) {
							this.Ab(this.input.extension, this.c, !!be?.preserveFocus);
							return;
						}
						be?.tab && this.c?.navbar.switch(be.tab);
					}
					yb() {
						let be = this.options?.showPreReleaseVersion;
						(0, f.$sg)(be) &&
							(be =
								!!this.input.extension.gallery?.properties.isPreReleaseVersion),
							this.fb?.set(be);
					}
					async openTab(be) {
						!this.input ||
							!this.c ||
							this.c.navbar.switch(be) ||
							(be === X.ExtensionEditorTab.ExtensionPack &&
								this.c.navbar.switch(X.ExtensionEditorTab.Readme));
					}
					async zb(be, Ce) {
						return be.resourceExtension ||
							be.local?.source === "resource" ||
							(0, f.$sg)(Ce) ||
							Ce === be.gallery?.properties.isPreReleaseVersion ||
							(Ce && !be.hasPreReleaseVersion) ||
							(!Ce && !be.hasReleaseVersion)
							? null
							: (
									await this.jb.getExtensions(
										[
											{
												...be.identifier,
												preRelease: Ce,
												hasPreRelease: be.hasPreReleaseVersion,
											},
										],
										u.CancellationToken.None,
									)
								)[0] || null;
					}
					async Ab(be, Ce, Le) {
						(this.db = null), this.cb.clear();
						const Fe = this.cb.add(new u.$Ce()).token,
							Oe = await this.zb(be, this.options?.showPreReleaseVersion);
						if (Fe.isCancellationRequested) return;
						(this.f = new r.$df(() =>
							Oe ? this.jb.getReadme(Oe, Fe) : be.getReadme(Fe),
						)),
							(this.g = new r.$df(() =>
								Oe ? this.jb.getChangelog(Oe, Fe) : be.getChangelog(Fe),
							)),
							(this.j = new r.$df(() =>
								Oe ? this.jb.getManifest(Oe, Fe) : be.getManifest(Fe),
							)),
							(Ce.extension = be),
							(Ce.gallery = Oe),
							(Ce.manifest = null),
							this.cb.add(
								(0, t.$0fb)(
									Ce.icon,
									"error",
									() => (Ce.icon.src = be.iconUrlFallback),
									{ once: !0 },
								),
							),
							(Ce.icon.src = be.iconUrl),
							(Ce.name.textContent = be.displayName),
							Ce.name.classList.toggle("clickable", !!be.url),
							Ce.name.classList.toggle("deprecated", !!be.deprecationInfo),
							(Ce.preview.style.display = be.preview ? "inherit" : "none"),
							(Ce.builtin.style.display = be.isBuiltin ? "inherit" : "none"),
							(Ce.description.textContent = be.description),
							Ce.publisher.classList.toggle("clickable", !!be.url),
							(Ce.publisherDisplayName.textContent = be.publisherDisplayName),
							Ce.publisher.parentElement?.classList.toggle(
								"hide",
								!!be.resourceExtension || be.local?.source === "resource",
							);
						const xe =
							be.resourceExtension?.location ??
							(be.local?.source === "resource" ? be.local?.location : void 0);
						if (
							(Ce.resource.parentElement?.classList.toggle("hide", !xe), xe)
						) {
							const Te = this.sb.getWorkspaceFolder(xe);
							Te && be.isWorkspaceScoped
								? (Ce.resource.parentElement?.classList.add("clickable"),
									this.cb.add(
										this.wb.setupManagedHover(
											(0, w.$cib)("mouse"),
											Ce.resource,
											this.vb.extUri.relativePath(Te.uri, xe),
										),
									),
									(Ce.resource.textContent = (0, S.localize)(6028, null)),
									this.cb.add(
										(0, W.$FSc)(Ce.resource, () => {
											this.ub
												.openView(se.$wUb, !0)
												.then(() => this.tb.select(xe, !0));
										}),
									))
								: (Ce.resource.parentElement?.classList.remove("clickable"),
									this.cb.add(
										this.wb.setupManagedHover(
											(0, w.$cib)("mouse"),
											Ce.resource,
											xe.path,
										),
									),
									(Ce.resource.textContent = (0, S.localize)(6029, null)));
						}
						Ce.installCount.parentElement?.classList.toggle("hide", !be.url),
							Ce.rating.parentElement?.classList.toggle("hide", !be.url),
							Ce.rating.classList.toggle("clickable", !!be.url),
							be.url &&
								(this.cb.add(
									(0, W.$FSc)(Ce.name, () => this.lb.open(b.URI.parse(be.url))),
								),
								this.cb.add(
									(0, W.$FSc)(Ce.rating, () =>
										this.lb.open(
											b.URI.parse(`${be.url}&ssr=false#review-details`),
										),
									),
								),
								this.cb.add(
									(0, W.$FSc)(Ce.publisher, () => {
										this.hb
											.openPaneComposite(
												X.$LQb,
												q.ViewContainerLocation.Sidebar,
												!0,
											)
											.then((Te) => Te?.getViewPaneContainer())
											.then((Te) =>
												Te.search(`publisher:"${be.publisherDisplayName}"`),
											);
									}),
								));
						const He = await this.j.get().promise;
						if (Fe.isCancellationRequested) return;
						He && (Ce.manifest = He), this.Bb(be, He, Ce, Le);
						const Ke = this.mb.getAllRecommendationsWithReason();
						let Je = {};
						Ke[be.identifier.id.toLowerCase()] &&
							(Je = {
								recommendationReason:
									Ke[be.identifier.id.toLowerCase()].reasonId,
							}),
							this.Q.publicLog("extensionGallery:openExtension", {
								...be.telemetryData,
								...Je,
							});
					}
					Bb(be, Ce, Le, Fe) {
						(Le.content.innerText = ""),
							Le.navbar.clear(),
							this.r !== be.identifier.id &&
								(this.m.clear(), (this.r = be.identifier.id)),
							Le.navbar.push(
								X.ExtensionEditorTab.Readme,
								(0, S.localize)(6030, null),
								(0, S.localize)(6031, null),
							),
							Ce &&
								Le.navbar.push(
									X.ExtensionEditorTab.Features,
									(0, S.localize)(6032, null),
									(0, S.localize)(6033, null),
								),
							be.hasChangelog() &&
								Le.navbar.push(
									X.ExtensionEditorTab.Changelog,
									(0, S.localize)(6034, null),
									(0, S.localize)(6035, null),
								),
							be.dependencies.length &&
								Le.navbar.push(
									X.ExtensionEditorTab.Dependencies,
									(0, S.localize)(6036, null),
									(0, S.localize)(6037, null),
								),
							Ce &&
								Ce.extensionPack?.length &&
								!this.Ib(Ce) &&
								Le.navbar.push(
									X.ExtensionEditorTab.ExtensionPack,
									(0, S.localize)(6038, null),
									(0, S.localize)(6039, null),
								),
							this.options?.tab && Le.navbar.switch(this.options.tab),
							Le.navbar.currentId &&
								this.Cb(be, { id: Le.navbar.currentId, focus: !Fe }, Le),
							Le.navbar.onChange((Oe) => this.Cb(be, Oe, Le), this, this.cb);
					}
					clearInput() {
						this.u.clear(), this.cb.clear(), super.clearInput();
					}
					focus() {
						super.focus(), this.db?.focus();
					}
					showFind() {
						this.activeWebview?.showFind();
					}
					runFindAction(be) {
						this.activeWebview?.runFindAction(be);
					}
					get activeWebview() {
						if (!(!this.db || !this.db.runFindAction)) return this.db;
					}
					Cb(be, { id: Ce, focus: Le }, Fe) {
						if (
							(this.u.clear(),
							(Fe.content.innerText = ""),
							(this.db = null),
							Ce)
						) {
							const Oe = new u.$Ce();
							this.u.add((0, n.$Yc)(() => Oe.dispose(!0))),
								this.Db(Ce, be, Fe, Oe.token).then((xe) => {
									Oe.token.isCancellationRequested ||
										((this.db = xe), Le && this.focus());
								});
						}
					}
					Db(be, Ce, Le, Fe) {
						switch (be) {
							case X.ExtensionEditorTab.Readme:
								return this.Hb(Ce, Le, Fe);
							case X.ExtensionEditorTab.Features:
								return this.Pb(Le, Fe);
							case X.ExtensionEditorTab.Changelog:
								return this.Ob(Ce, Le, Fe);
							case X.ExtensionEditorTab.Dependencies:
								return this.Qb(Ce, Le, Fe);
							case X.ExtensionEditorTab.ExtensionPack:
								return this.Rb(Ce, Le, Fe);
						}
						return Promise.resolve(null);
					}
					async Eb(be, Ce, Le, Fe, Oe, xe, He) {
						try {
							const Ke = await this.Fb(be, Ce, Fe, He);
							if (He.isCancellationRequested) return Promise.resolve(null);
							const Je = this.u.add(
								this.ob.createWebviewOverlay({
									title: xe,
									options: {
										enableFindWidget: !0,
										tryRestoreScrollPosition: !0,
										disableServiceWorker: !0,
									},
									contentOptions: {},
									extension: void 0,
								}),
							);
							(Je.initialScrollProgress = this.m.get(Oe) || 0),
								Je.claim(this, this.window, this.scopedContextKeyService),
								(0, t.$Cgb)(Je.container, Fe),
								Je.layoutWebviewOverElement(Fe),
								Je.setHtml(Ke),
								Je.claim(this, this.window, void 0),
								this.u.add(Je.onDidFocus(() => this.y?.fire())),
								this.u.add(
									Je.onDidScroll(() =>
										this.m.set(Oe, Je.initialScrollProgress),
									),
								);
							const Te = m.$Xb(this.s, {
								layout: () => {
									Je.layoutWebviewOverElement(Fe);
								},
							});
							this.u.add((0, n.$Yc)(Te));
							let Ee = !1;
							return (
								this.u.add(
									(0, n.$Yc)(() => {
										Ee = !0;
									}),
								),
								this.u.add(
									this.n.onDidColorThemeChange(async () => {
										const Ie = await this.Fb(be, Ce, Fe);
										Ee || Je.setHtml(Ie);
									}),
								),
								this.u.add(
									Je.onDidClickLink((Ie) => {
										Ie &&
											(((0, g.$Vg)(Ie, g.Schemas.http) ||
												(0, g.$Vg)(Ie, g.Schemas.https) ||
												(0, g.$Vg)(Ie, g.Schemas.mailto)) &&
												this.lb.open(Ie),
											(0, g.$Vg)(Ie, g.Schemas.command) &&
												be.type === D.ExtensionType.System &&
												this.lb.open(Ie, { allowCommands: !0 }));
									}),
								),
								Je
							);
						} catch {
							const Je = (0, t.$fhb)(Fe, (0, t.$)("p.nocontent"));
							return (Je.textContent = Le), Je;
						}
					}
					async Fb(be, Ce, Le, Fe) {
						const Oe = await this.Tb(() => Ce, Le);
						if (Fe?.isCancellationRequested) return "";
						const xe = await (0, ie.$nTc)(Oe, this.nb, this.pb, {
							shouldSanitize: be.type !== D.ExtensionType.System,
							token: Fe,
						});
						return Fe?.isCancellationRequested ? "" : this.Gb(xe);
					}
					Gb(be) {
						const Ce = (0, s.$9g)(),
							Le = y.$lM.getColorMap(),
							Fe = Le ? (0, v.$M2b)(Le) : "";
						return `<!DOCTYPE html>
		<html>
			<head>
				<meta http-equiv="Content-type" content="text/html;charset=UTF-8">
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src https: data:; media-src https:; script-src 'none'; style-src 'nonce-${Ce}';">
				<style nonce="${Ce}">
					${ie.$mTc}

					/* prevent scroll-to-top button from blocking the body text */
					body {
						padding-bottom: 75px;
					}

					#scroll-to-top {
						position: fixed;
						width: 32px;
						height: 32px;
						right: 25px;
						bottom: 25px;
						background-color: var(--vscode-button-secondaryBackground);
						border-color: var(--vscode-button-border);
						border-radius: 50%;
						cursor: pointer;
						box-shadow: 1px 1px 1px rgba(0,0,0,.25);
						outline: none;
						display: flex;
						justify-content: center;
						align-items: center;
					}

					#scroll-to-top:hover {
						background-color: var(--vscode-button-secondaryHoverBackground);
						box-shadow: 2px 2px 2px rgba(0,0,0,.25);
					}

					body.vscode-high-contrast #scroll-to-top {
						border-width: 2px;
						border-style: solid;
						box-shadow: none;
					}

					#scroll-to-top span.icon::before {
						content: "";
						display: block;
						background: var(--vscode-button-secondaryForeground);
						/* Chevron up icon */
						webkit-mask-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNiAxNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTYgMTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KCS5zdDF7ZmlsbDpub25lO30KPC9zdHlsZT4KPHRpdGxlPnVwY2hldnJvbjwvdGl0bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04LDUuMWwtNy4zLDcuM0wwLDExLjZsOC04bDgsOGwtMC43LDAuN0w4LDUuMXoiLz4KPHJlY3QgY2xhc3M9InN0MSIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+Cjwvc3ZnPgo=');
						-webkit-mask-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNiAxNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTYgMTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KCS5zdDF7ZmlsbDpub25lO30KPC9zdHlsZT4KPHRpdGxlPnVwY2hldnJvbjwvdGl0bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04LDUuMWwtNy4zLDcuM0wwLDExLjZsOC04bDgsOGwtMC43LDAuN0w4LDUuMXoiLz4KPHJlY3QgY2xhc3M9InN0MSIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+Cjwvc3ZnPgo=');
						width: 16px;
						height: 16px;
					}
					${Fe}
				</style>
			</head>
			<body>
				<a id="scroll-to-top" role="button" aria-label="scroll to top" href="#"><span class="icon"></span></a>
				${be}
			</body>
		</html>`;
					}
					async Hb(be, Ce, Le) {
						const Fe = (0, t.$fhb)(Ce.content, (0, t.$)(".details")),
							Oe = (0, t.$fhb)(Fe, (0, t.$)(".readme-container")),
							xe = (0, t.$fhb)(Fe, (0, t.$)(".additional-details-container")),
							He = () =>
								Fe.classList.toggle("narrow", this.eb && this.eb.width < 500);
						He(), this.u.add((0, n.$Yc)(m.$Xb(this.s, { layout: He })));
						let Ke = null;
						const Je = await this.j.get().promise;
						return (
							Je && Je.extensionPack?.length && this.Ib(Je)
								? (Ke = await this.Jb(be, Je, Oe, Le))
								: (Ke = await this.Eb(
										be,
										this.f.get(),
										(0, S.localize)(6040, null),
										Oe,
										pe.Readme,
										(0, S.localize)(6041, null),
										Le,
									)),
							this.Kb(xe, be),
							Ke
						);
					}
					Ib(be) {
						return !!be.categories?.some(
							(Ce) => Ce.toLowerCase() === "extension packs",
						);
					}
					async Jb(be, Ce, Le, Fe) {
						if (Fe.isCancellationRequested) return Promise.resolve(null);
						const Oe = (0, t.$fhb)(
							Le,
							(0, t.$)("div", { class: "extension-pack-readme" }),
						);
						(Oe.style.margin = "0 auto"), (Oe.style.maxWidth = "882px");
						const xe = (0, t.$fhb)(
							Oe,
							(0, t.$)("div", { class: "extension-pack" }),
						);
						Ce.extensionPack.length <= 3
							? Oe.classList.add("one-row")
							: Ce.extensionPack.length <= 6
								? Oe.classList.add("two-rows")
								: Ce.extensionPack.length <= 9
									? Oe.classList.add("three-rows")
									: Oe.classList.add("more-rows");
						const He = (0, t.$fhb)(xe, (0, t.$)("div.header"));
						He.textContent = (0, S.localize)(
							6042,
							null,
							Ce.extensionPack.length,
						);
						const Ke = (0, t.$fhb)(
							xe,
							(0, t.$)("div", { class: "extension-pack-content" }),
						);
						Ke.setAttribute("tabindex", "0"),
							(0, t.$fhb)(xe, (0, t.$)("div.footer"));
						const Je = (0, t.$fhb)(Oe, (0, t.$)("div.readme-content"));
						return (
							await Promise.all([
								this.Sb(Ce, Ke, Fe),
								this.Eb(
									be,
									this.f.get(),
									(0, S.localize)(6043, null),
									Je,
									pe.Readme,
									(0, S.localize)(6044, null),
									Fe,
								),
							]),
							{ focus: () => Ke.focus() }
						);
					}
					Kb(be, Ce) {
						const Le = (0, t.$)("div", {
								class: "additional-details-content",
								tabindex: "0",
							}),
							Fe = new E.$8hb(Le, {}),
							Oe = () => Fe.scanDomNode(),
							xe = m.$Xb(this.s, { layout: Oe });
						this.u.add((0, n.$Yc)(xe)),
							this.u.add(Fe),
							this.Lb(Le, Ce),
							this.Mb(Le, Ce),
							this.Nb(Le, Ce),
							(0, t.$fhb)(be, Fe.getDomNode()),
							Fe.scanDomNode();
					}
					Lb(be, Ce) {
						if (Ce.categories.length) {
							const Le = (0, t.$fhb)(
								be,
								(0, t.$)(".categories-container.additional-details-element"),
							);
							(0, t.$fhb)(
								Le,
								(0, t.$)(
									".additional-details-title",
									void 0,
									(0, S.localize)(6045, null),
								),
							);
							const Fe = (0, t.$fhb)(Le, (0, t.$)(".categories"));
							for (const Oe of Ce.categories)
								this.cb.add(
									(0, W.$FSc)(
										(0, t.$fhb)(
											Fe,
											(0, t.$)("span.category", { tabindex: "0" }, Oe),
										),
										() => {
											this.hb
												.openPaneComposite(
													X.$LQb,
													q.ViewContainerLocation.Sidebar,
													!0,
												)
												.then((xe) => xe?.getViewPaneContainer())
												.then((xe) => xe.search(`@category:"${Oe}"`));
										},
									),
								);
						}
					}
					Mb(be, Ce) {
						const Le = [];
						if (
							(Ce.url &&
								Le.push([(0, S.localize)(6046, null), b.URI.parse(Ce.url)]),
							Ce.url && Ce.supportUrl)
						)
							try {
								Le.push([
									(0, S.localize)(6047, null),
									b.URI.parse(Ce.supportUrl),
								]);
							} catch {}
						if (Ce.repository)
							try {
								Le.push([
									(0, S.localize)(6048, null),
									b.URI.parse(Ce.repository),
								]);
							} catch {}
						if (Ce.url && Ce.licenseUrl)
							try {
								Le.push([
									(0, S.localize)(6049, null),
									b.URI.parse(Ce.licenseUrl),
								]);
							} catch {}
						if (
							(Ce.publisherUrl &&
								Le.push([Ce.publisherDisplayName, Ce.publisherUrl]),
							Le.length || Ce.publisherSponsorLink)
						) {
							const Fe = (0, t.$fhb)(
								be,
								(0, t.$)(".resources-container.additional-details-element"),
							);
							(0, t.$fhb)(
								Fe,
								(0, t.$)(
									".additional-details-title",
									void 0,
									(0, S.localize)(6050, null),
								),
							);
							const Oe = (0, t.$fhb)(Fe, (0, t.$)(".resources"));
							for (const [xe, He] of Le) {
								const Ke = (0, t.$fhb)(
									Oe,
									(0, t.$)("a.resource", { tabindex: "0" }, xe),
								);
								this.cb.add((0, W.$FSc)(Ke, () => this.lb.open(He))),
									this.cb.add(
										this.wb.setupManagedHover(
											(0, w.$cib)("mouse"),
											Ke,
											He.toString(),
										),
									);
							}
						}
					}
					Nb(be, Ce) {
						const Le = Ce.gallery,
							Fe = (0, t.$fhb)(
								be,
								(0, t.$)(".more-info-container.additional-details-element"),
							);
						(0, t.$fhb)(
							Fe,
							(0, t.$)(
								".additional-details-title",
								void 0,
								(0, S.localize)(6051, null),
							),
						);
						const Oe = (0, t.$fhb)(Fe, (0, t.$)(".more-info")),
							xe = (He) =>
								`${He.getFullYear()}-${String(He.getMonth() + 1).padStart(2, "0")}-${String(He.getDate()).padStart(2, "0")}, ${He.toLocaleTimeString(p.$z, { hourCycle: "h23" })}`;
						Le &&
							(0, t.$fhb)(
								Oe,
								(0, t.$)(
									".more-info-entry",
									void 0,
									(0, t.$)("div", void 0, (0, S.localize)(6052, null)),
									(0, t.$)("div", void 0, xe(new Date(Le.releaseDate))),
								),
								(0, t.$)(
									".more-info-entry",
									void 0,
									(0, t.$)("div", void 0, (0, S.localize)(6053, null)),
									(0, t.$)("div", void 0, xe(new Date(Le.lastUpdated))),
								),
							),
							Ce.local &&
								Ce.local.installedTimestamp &&
								(0, t.$fhb)(
									Oe,
									(0, t.$)(
										".more-info-entry",
										void 0,
										(0, t.$)("div", void 0, (0, S.localize)(6054, null)),
										(0, t.$)(
											"div",
											void 0,
											xe(new Date(Ce.local.installedTimestamp)),
										),
									),
								),
							(0, t.$fhb)(
								Oe,
								(0, t.$)(
									".more-info-entry",
									void 0,
									(0, t.$)("div", void 0, (0, S.localize)(6055, null)),
									(0, t.$)("code", void 0, Ce.identifier.id),
								),
							);
					}
					Ob(be, Ce, Le) {
						return this.Eb(
							be,
							this.g.get(),
							(0, S.localize)(6056, null),
							Ce.content,
							pe.Changelog,
							(0, S.localize)(6057, null),
							Le,
						);
					}
					async Pb(be, Ce) {
						const Le = await this.Tb(() => this.j.get(), be.content);
						if (Ce.isCancellationRequested || !Le) return null;
						const Fe = this.u.add(
								this.gb.createInstance(V.$DSc, Le, this.options?.feature),
							),
							Oe = () =>
								Fe.layout(be.content.clientHeight, be.content.clientWidth),
							xe = m.$Xb(this.s, { layout: Oe });
						return (
							this.u.add((0, n.$Yc)(xe)),
							(0, t.$fhb)(be.content, Fe.domNode),
							Oe(),
							Fe.domNode
						);
					}
					Qb(be, Ce, Le) {
						if (Le.isCancellationRequested) return Promise.resolve(null);
						if (m.$Ob(be.dependencies))
							return (
								((0, t.$fhb)(Ce.content, (0, t.$)("p.nocontent")).textContent =
									(0, S.localize)(6058, null)),
								Promise.resolve(Ce.content)
							);
						const Fe = (0, t.$)("div", { class: "subcontent" }),
							Oe = new E.$8hb(Fe, {});
						(0, t.$fhb)(Ce.content, Oe.getDomNode()), this.u.add(Oe);
						const xe = this.gb.createInstance(
								J.$jTc,
								new J.$kTc(be, null, (Je) => Je.dependencies || [], this.ib),
								Fe,
								{ listBackground: z.$8P },
							),
							He = () => {
								Oe.scanDomNode();
								const Je = Oe.getScrollDimensions();
								xe.layout(Je.height);
							},
							Ke = m.$Xb(this.s, { layout: He });
						return (
							this.u.add((0, n.$Yc)(Ke)),
							this.u.add(xe),
							Oe.scanDomNode(),
							Promise.resolve({
								focus() {
									xe.domFocus();
								},
							})
						);
					}
					async Rb(be, Ce, Le) {
						if (Le.isCancellationRequested) return Promise.resolve(null);
						const Fe = await this.Tb(() => this.j.get(), Ce.content);
						return Le.isCancellationRequested || !Fe
							? null
							: this.Sb(Fe, Ce.content, Le);
					}
					async Sb(be, Ce, Le) {
						if (Le.isCancellationRequested) return null;
						const Fe = (0, t.$)("div", { class: "subcontent" }),
							Oe = new E.$8hb(Fe, { useShadows: !1 });
						(0, t.$fhb)(Ce, Oe.getDomNode());
						const xe = this.gb.createInstance(J.$iTc, Fe, new K.$XSc()),
							He = await (0, J.$lTc)(be.extensionPack, this.ib);
						return (
							xe.setExtensions(He),
							Oe.scanDomNode(),
							this.u.add(Oe),
							this.u.add(xe),
							this.u.add(
								(0, n.$Yc)(m.$Xb(this.s, { layout: () => Oe.scanDomNode() })),
							),
							Fe
						);
					}
					Tb(be, Ce) {
						Ce.classList.add("loading");
						const Le = this.u.add(be()),
							Fe = () => Ce.classList.remove("loading");
						return Le.promise.then(Fe, Fe), Le.promise;
					}
					layout(be) {
						(this.eb = be), this.s.forEach((Ce) => Ce.layout());
					}
					Ub(be) {
						(0, a.$8)(be) || this.kb.error(be);
					}
				};
				(e.$oTc = fe),
					(e.$oTc =
						fe =
						oe =
							Ne(
								[
									j(1, B.$km),
									j(2, M.$Li),
									j(3, Q.$6Sb),
									j(4, X.$MQb),
									j(5, k.$Ep),
									j(6, F.$iP),
									j(7, A.$4N),
									j(8, R.$7rb),
									j(9, _.$9Qb),
									j(10, O.$lq),
									j(11, te.$q2),
									j(12, ne.$3Ib),
									j(13, $.$nM),
									j(14, P.$Xxb),
									j(15, T.$6j),
									j(16, x.$Vi),
									j(17, Y.$LWb),
									j(18, Z.$HMb),
									j(19, re.$Vl),
									j(20, le.$Uyb),
								],
								fe,
							));
				const me = T.$Kj.and(
					T.$Kj.equals("activeEditor", fe.ID),
					l.EditorContextKeys.focus.toNegated(),
				);
				(0, I.$4X)(
					class extends I.$3X {
						constructor() {
							super({
								id: "editor.action.extensioneditor.showfind",
								title: (0, S.localize)(6059, null),
								keybinding: {
									when: me,
									weight: N.KeybindingWeight.EditorContrib,
									primary: c.KeyMod.CtrlCmd | c.KeyCode.KeyF,
								},
							});
						}
						run(be) {
							ve(be)?.showFind();
						}
					},
				),
					(0, I.$4X)(
						class extends I.$3X {
							constructor() {
								super({
									id: "editor.action.extensioneditor.findNext",
									title: (0, S.localize)(6060, null),
									keybinding: {
										when: T.$Kj.and(me, ne.$1Ib),
										primary: c.KeyCode.Enter,
										weight: N.KeybindingWeight.EditorContrib,
									},
								});
							}
							run(be) {
								ve(be)?.runFindAction(!1);
							}
						},
					),
					(0, I.$4X)(
						class extends I.$3X {
							constructor() {
								super({
									id: "editor.action.extensioneditor.findPrevious",
									title: (0, S.localize)(6061, null),
									keybinding: {
										when: T.$Kj.and(me, ne.$1Ib),
										primary: c.KeyMod.Shift | c.KeyCode.Enter,
										weight: N.KeybindingWeight.EditorContrib,
									},
								});
							}
							run(be) {
								ve(be)?.runFindAction(!0);
							}
						},
					),
					(0, F.$oP)((ge, be) => {
						const Ce = ge.getColor(z.$RP);
						Ce &&
							(be.addRule(
								`.monaco-workbench .extension-editor .content .details .additional-details-container .resources-container a.resource { color: ${Ce}; }`,
							),
							be.addRule(
								`.monaco-workbench .extension-editor .content .feature-contributions a { color: ${Ce}; }`,
							));
						const Le = ge.getColor(z.$SP);
						Le &&
							(be.addRule(`.monaco-workbench .extension-editor .content .details .additional-details-container .resources-container a.resource:hover,
			.monaco-workbench .extension-editor .content .details .additional-details-container .resources-container a.resource:active { color: ${Le}; }`),
							be.addRule(`.monaco-workbench .extension-editor .content .feature-contributions a:hover,
			.monaco-workbench .extension-editor .content .feature-contributions a:active { color: ${Le}; }`));
						const Fe = ge.getColor(z.$fS);
						Fe &&
							(be.addRule(
								`.monaco-workbench .extension-editor .content > .details > .additional-details-container .categories-container > .categories > .category:hover { background-color: ${Fe}; border-color: ${Fe}; }`,
							),
							be.addRule(
								`.monaco-workbench .extension-editor .content > .details > .additional-details-container .tags-container > .tags > .tag:hover { background-color: ${Fe}; border-color: ${Fe}; }`,
							));
						const Oe = ge.getColor(z.$cS);
						Oe &&
							(be.addRule(
								`.monaco-workbench .extension-editor .content > .details > .additional-details-container .categories-container > .categories > .category:hover { color: ${Oe}; }`,
							),
							be.addRule(
								`.monaco-workbench .extension-editor .content > .details > .additional-details-container .tags-container > .tags > .tag:hover { color: ${Oe}; }`,
							));
					});
				function ve(ge) {
					const be = ge.get(ee.$IY).activeEditorPane;
					return be instanceof fe ? be : null;
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	