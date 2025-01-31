import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../base/browser/ui/button/button.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../base/browser/ui/iconLabel/iconLabels.js';
import '../../../../base/browser/ui/list/listWidget.js';
import '../../../../base/browser/ui/tree/tree.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/arraysFind.js';
import '../../../../base/common/async.js';
import '../../../../base/common/color.js';
import '../../../../base/common/event.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/observable.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/themables.js';
import '../../../../base/common/types.js';
import '../../../../editor/browser/widget/markdownRenderer/browser/markdownRenderer.js';
import '../../../../nls.js';
import '../../../../platform/actions/browser/dropdownWithPrimaryActionViewItem.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../browser/actions/widgetNavigationCommands.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../common/editor/diffEditorInput.js';
import '../../../common/views.js';
import './explorerProjections/index.js';
import './explorerProjections/listProjection.js';
import './explorerProjections/testItemContextOverlay.js';
import './explorerProjections/testingObjectTree.js';
import './explorerProjections/treeProjection.js';
import './icons.js';
import './testExplorerActions.js';
import './testingExplorerFilter.js';
import './testingProgressUiService.js';
import '../common/configuration.js';
import '../common/constants.js';
import '../common/storedValue.js';
import '../common/testExplorerFilterState.js';
import '../common/testId.js';
import '../common/testProfileService.js';
import '../common/testResult.js';
import '../common/testResultService.js';
import '../common/testService.js';
import '../common/testTypes.js';
import '../common/testingContextKeys.js';
import '../common/testingContinuousRunService.js';
import '../common/testingPeekOpener.js';
import '../common/testingStates.js';
import '../../../services/activity/common/activity.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../../css!vs/workbench/contrib/testing/browser/media/testing.js';
define(
			de[3846],
			he([
				1, 0, 7, 105, 183, 95, 182, 278, 264, 50, 214, 15, 97, 6, 27, 3, 77, 37,
				26, 28, 251, 4, 607, 92, 11, 31, 10, 8, 49, 72, 5, 39, 41, 84, 21, 32,
				106, 51, 79, 35, 68, 518, 146, 296, 60, 811, 3183, 1267, 3178, 3184,
				470, 1908, 3776, 1909, 443, 353, 515, 1001, 259, 420, 421, 381, 379,
				185, 380, 1268, 812, 563, 260, 66, 18, 2501,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*actionbar*/,
				w /*button*/,
				E /*hoverDelegateFactory*/,
				C /*iconLabels*/,
				d /*listWidget*/,
				m /*tree*/,
				r /*actions*/,
				u /*arraysFind*/,
				a /*async*/,
				h /*color*/,
				c /*event*/,
				n /*keyCodes*/,
				g /*lifecycle*/,
				p /*observable*/,
				o /*strings*/,
				f /*themables*/,
				b /*types*/,
				s /*markdownRenderer*/,
				l /*nls*/,
				y /*dropdownWithPrimaryActionViewItem*/,
				$ /*menuEntryActionViewItem*/,
				v /*actions*/,
				S /*commands*/,
				I /*configuration*/,
				T /*contextkey*/,
				P /*contextView*/,
				k /*hover*/,
				L /*instantiation*/,
				D /*keybinding*/,
				M /*opener*/,
				N /*progress*/,
				A /*storage*/,
				R /*telemetry*/,
				O /*defaultStyles*/,
				B /*colorRegistry*/,
				U /*iconRegistry*/,
				z /*themeService*/,
				F /*uriIdentity*/,
				x /*widgetNavigationCommands*/,
				H /*viewPane*/,
				q /*diffEditorInput*/,
				V /*views*/,
				G /*index*/,
				K /*listProjection*/,
				J /*testItemContextOverlay*/,
				W /*testingObjectTree*/,
				X /*treeProjection*/,
				Y /*icons*/,
				ie /*testExplorerActions*/,
				ne /*testingExplorerFilter*/,
				ee /*testingProgressUiService*/,
				_ /*configuration*/,
				te /*constants*/,
				Q /*storedValue*/,
				Z /*testExplorerFilterState*/,
				se /*testId*/,
				re /*testProfileService*/,
				le /*testResult*/,
				oe /*testResultService*/,
				ae /*testService*/,
				pe /*testTypes*/,
				$e /*testingContextKeys*/,
				ye /*testingContinuousRunService*/,
				ue /*testingPeekOpener*/,
				fe /*testingStates*/,
				me /*activity*/,
				ve /*editorGroupsService*/,
				ge /*editorService*/,
) {
				"use strict";
				var be, Ce;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$DMc = void 0),
					(t = mt(t)),
					(Y = mt(Y));
				var Le;
				(function (Ze) {
					(Ze[(Ze.Input = 0)] = "Input"), (Ze[(Ze.Tree = 1)] = "Tree");
				})(Le || (Le = {}));
				let Fe = class extends H.$TMb {
					get focusedTreeElements() {
						return this.viewModel.tree.getFocus().filter(b.$tg);
					}
					constructor(
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
						super(et, ft, rt, bt, ct, lt, nt, gt, ht, Nt, jt),
							(this.hc = Rt),
							(this.ic = ti),
							(this.jc = kt),
							(this.kc = hi),
							(this.f = this.D(new g.$2c())),
							(this.cc = this.D(new g.$2c())),
							(this.dc = this.D(new g.$2c())),
							(this.ec = this.D(new g.$2c())),
							(this.fc = { width: 0, height: 0 }),
							(this.gc = Le.Input);
						const Kt = this.D(new a.$Yh(() => this.X(), 1));
						this.D(
							this.onDidChangeViewWelcomeState(() => {
								this.shouldShowWelcome() || Kt.schedule();
							}),
						),
							this.D(
								Rt.collection.onBusyProvidersChange((di) => {
									this.pc(di);
								}),
							),
							this.D(ti.onDidChange(() => this.bc()));
					}
					shouldShowWelcome() {
						return this.viewModel?.welcomeExperience === He.ForWorkspace;
					}
					focus() {
						super.focus(),
							this.gc === Le.Tree
								? this.viewModel.tree.domFocus()
								: this.dc.value?.focus();
					}
					getTreeIncludeExclude(et, rt, ft = "visible") {
						const bt = this.viewModel.projection.value;
						if (!bt) return { include: [], exclude: [] };
						const nt = new Set(),
							lt = [],
							ct = (gt, ht) => {
								if (
									!(gt instanceof G.$7Kc) ||
									!this.viewModel.tree.hasElement(gt)
								)
									return;
								const Rt = this.viewModel.tree.getNode(gt);
								if (!Rt.visible) {
									ht && lt.push(gt.test);
									return;
								}
								!ht &&
									(!rt || (0, re.$Cqc)(rt, gt.test)) &&
									(Rt.children.length === 0 ||
										Rt.visibleChildrenCount * 2 >= Rt.children.length) &&
									Rt.visibleChildrenCount !== 1 &&
									(nt.add(gt.test), (ht = !0));
								for (const Nt of gt.children) ct(Nt, ht);
							};
						if (ft === "selected") {
							const gt = this.viewModel.tree.getSelection().filter(b.$tg);
							if (gt.length) {
								e: for (const ht of gt)
									if (ht instanceof G.$7Kc) {
										for (let Rt = ht; Rt; Rt = Rt.parent)
											if (nt.has(Rt.test)) continue e;
										nt.add(ht.test), ht.children.forEach((Rt) => ct(Rt, !0));
									}
								return { include: [...nt], exclude: lt };
							}
						}
						for (const gt of et || this.hc.collection.rootItems) {
							const ht = bt.getElementByTestId(gt.item.extId);
							if (ht && !(rt && !(0, re.$Cqc)(rt, gt)))
								if (this.viewModel.tree.hasElement(ht)) ct(ht, !1);
								else {
									const Rt = [...ht.children].reduce(
										(Nt, jt) =>
											this.viewModel.tree.hasElement(jt) &&
											this.viewModel.tree.getNode(jt).visible
												? Nt + 1
												: Nt,
										0,
									);
									ht.children.size > 0 && Rt * 2 >= ht.children.size
										? (nt.add(ht.test), ht.children.forEach((Nt) => ct(Nt, !0)))
										: ht.children.forEach((Nt) => ct(Nt, !1));
								}
						}
						return { include: [...nt], exclude: lt };
					}
					render() {
						super.render(),
							this.D(
								(0, x.$D3b)({
									name: "testingExplorerView",
									focusNotifiers: [this],
									focusNextWidget: () => {
										this.viewModel.tree.isDOMFocused() ||
											this.viewModel.tree.domFocus();
									},
									focusPreviousWidget: () => {
										this.viewModel.tree.isDOMFocused() &&
											this.dc.value?.focus();
									},
								}),
							);
					}
					W(et) {
						super.W(et),
							(this.j = t.$fhb(et, t.$(".test-explorer"))),
							(this.m = t.$fhb(this.j, t.$(".test-explorer-header"))),
							(this.f.value = this.oc());
						const rt = t.$fhb(this.m, t.$(".result-summary-container"));
						this.D(this.Db.createInstance(xe, rt));
						const ft = t.$fhb(this.j, t.$(".test-explorer-tree"));
						(this.viewModel = this.Db.createInstance(
							Ke,
							ft,
							this.onDidChangeBodyVisibility,
						)),
							this.D(this.viewModel.tree.onDidFocus(() => (this.gc = Le.Tree))),
							this.D(
								this.viewModel.onChangeWelcomeVisibility(() => this.eb.fire()),
							),
							this.D(this.viewModel),
							this.eb.fire();
					}
					getActionViewItem(et, rt) {
						switch (et.id) {
							case te.TestCommandId.FilterAction:
								return (
									(this.dc.value = this.Db.createInstance(ne.$zMc, et, rt)),
									(this.ec.value = this.dc.value.onDidFocus(
										() => (this.gc = Le.Input),
									)),
									this.dc.value
								);
							case te.TestCommandId.RunSelectedAction:
								return this.nc(pe.TestRunProfileBitset.Run, et, rt);
							case te.TestCommandId.DebugSelectedAction:
								return this.nc(pe.TestRunProfileBitset.Debug, et, rt);
							default:
								return super.getActionViewItem(et, rt);
						}
					}
					mc(et) {
						const rt = [];
						let ft = 0,
							bt = !1;
						const nt = this.ic.getGroupDefaultProfiles(et);
						for (const { profiles: Nt, controller: jt } of this.ic.all()) {
							let ti = !1;
							for (const kt of Nt)
								kt.group === et &&
									(ti ||
										((ti = !0),
										ft++,
										rt.push(
											new r.$rj(`${jt.id}.$root`, jt.label.get(), void 0, !1),
										)),
									(bt = bt || kt.hasConfigurationHandler),
									rt.push(
										new r.$rj(
											`${jt.id}.${kt.profileId}`,
											nt.includes(kt)
												? (0, l.localize)(10785, null, kt.label)
												: kt.label,
											void 0,
											void 0,
											() => {
												const { include: hi, exclude: Kt } =
													this.getTreeIncludeExclude(void 0, kt);
												this.hc.runResolvedTests({
													exclude: Kt.map((di) => di.item.extId),
													group: kt.group,
													targets: [
														{
															profileId: kt.profileId,
															controllerId: kt.controllerId,
															testIds: hi.map((di) => di.item.extId),
														},
													],
												});
											},
										),
									));
						}
						const lt = [],
							ct = [];
						et === pe.TestRunProfileBitset.Run &&
							ct.push(["testing.profile.context.group", "run"]),
							et === pe.TestRunProfileBitset.Debug &&
								ct.push(["testing.profile.context.group", "debug"]),
							et === pe.TestRunProfileBitset.Coverage &&
								ct.push(["testing.profile.context.group", "coverage"]);
						const gt = this.Bb.createOverlay(ct),
							ht = this.kc.getMenuActions(v.$XX.TestProfilesContext, gt);
						(0, $.$Jyb)(ht, lt);
						const Rt = [];
						return (
							rt.length > 1 &&
								Rt.push(
									new r.$rj(
										"selectDefaultTestConfigurations",
										(0, l.localize)(10786, null),
										void 0,
										void 0,
										() =>
											this.jc.executeCommand(
												te.TestCommandId.SelectDefaultTestProfiles,
												et,
											),
									),
								),
							bt &&
								Rt.push(
									new r.$rj(
										"configureTestProfiles",
										(0, l.localize)(10787, null),
										void 0,
										void 0,
										() =>
											this.jc.executeCommand(
												te.TestCommandId.ConfigureTestProfilesAction,
												et,
											),
									),
								),
							lt.length > 0 ? r.$tj.join(rt, lt, Rt) : r.$tj.join(rt, Rt)
						);
					}
					saveState() {
						this.dc.value?.saveState(), super.saveState();
					}
					nc(et, rt, ft) {
						const bt = this.mc(et);
						if (bt.length < 2) return super.getActionViewItem(rt, ft);
						const nt = this.Db.createInstance(
								v.$2X,
								{
									id: rt.id,
									title: rt.label,
									icon: et === pe.TestRunProfileBitset.Run ? Y.$wKc : Y.$xKc,
								},
								void 0,
								void 0,
								void 0,
								void 0,
							),
							lt = new r.$rj(
								"selectRunConfig",
								"Select Configuration...",
								"codicon-chevron-down",
								!0,
							);
						return this.Db.createInstance(y.$OYb, nt, lt, bt, "", this.zb, ft);
					}
					oc() {
						const et = new i.$eib(this.m, {
							actionViewItemProvider: (rt, ft) =>
								this.getActionViewItem(rt, ft),
							triggerKeys: { keyDown: !1, keys: [] },
						});
						return (
							et.push(new r.$rj(te.TestCommandId.FilterAction)),
							et.getContainer().classList.add("testing-filter-action-bar"),
							et
						);
					}
					pc(et) {
						!et && this.cc
							? this.cc.clear()
							: et &&
								!this.cc.value &&
								(this.cc.value = this.Db.createInstance(N.$_N, {
									location: this.Yb(),
								}));
					}
					X(et = this.fc.height, rt = this.fc.width) {
						super.X(et, rt),
							(this.fc.height = et),
							(this.fc.width = rt),
							(this.j.style.height = `${et}px`),
							this.viewModel?.layout(et - this.m.clientHeight, rt),
							this.dc.value?.layout(rt);
					}
				};
				(e.$DMc = Fe),
					(e.$DMc = Fe =
						Ne(
							[
								j(1, P.$Xxb),
								j(2, D.$uZ),
								j(3, I.$gj),
								j(4, L.$Li),
								j(5, V.$K1),
								j(6, T.$6j),
								j(7, M.$7rb),
								j(8, z.$iP),
								j(9, ae.$sqc),
								j(10, R.$km),
								j(11, k.$Uyb),
								j(12, re.$Bqc),
								j(13, S.$ek),
								j(14, v.$YX),
							],
							Fe,
						));
				const Oe = 200;
				let xe = class extends g.$1c {
					constructor(et, rt, ft, bt, nt, lt, ct) {
						super(),
							(this.z = et),
							(this.C = rt),
							(this.F = ft),
							(this.G = bt),
							(this.f = !1),
							(this.u = this.D(new g.$2c())),
							(this.w = this.D(new a.$Yh(() => this.H(), Oe))),
							(this.y = t.h("div.result-summary", [
								t.h("div@status"),
								t.h("div@count"),
								t.h("div@count"),
								t.h("span"),
								t.h("duration@duration"),
								t.h("a@rerun"),
							])),
							(this.j = nt.getValue(_.TestingConfigKeys.CountBadge)),
							this.D(rt.onResultsChanged(this.H, this)),
							this.D(
								nt.onDidChangeConfiguration((ht) => {
									ht.affectsConfiguration(_.TestingConfigKeys.CountBadge) &&
										((this.j = nt.getValue(_.TestingConfigKeys.CountBadge)),
										this.H());
								}),
							),
							(this.q = this.D(
								ct.setupManagedHover((0, E.$cib)("mouse"), this.y.count, ""),
							)),
							this.D(
								new i.$eib(this.y.rerun, {
									actionViewItemProvider: (ht, Rt) => (0, $.$Pyb)(lt, ht, Rt),
								}),
							).push(
								lt.createInstance(
									v.$2X,
									{ ...new ie.$oMc().desc, icon: Y.$vKc },
									{ ...new ie.$pMc().desc, icon: Y.$yKc },
									{},
									void 0,
									void 0,
								),
								{ icon: !0, label: !1 },
							),
							this.H();
					}
					H() {
						const { results: et } = this.C,
							{
								count: rt,
								root: ft,
								status: bt,
								duration: nt,
								rerun: lt,
							} = this.y;
						if (!et.length) {
							this.f && (ft.remove(), (this.f = !1)),
								(this.z.innerText = (0, l.localize)(10788, null)),
								this.u.clear();
							return;
						}
						const ct = et.filter((ht) => !ht.completedAt);
						let gt;
						if (ct.length) {
							(bt.className = f.ThemeIcon.asClassName(U.$fP)),
								(gt = (0, ee.$BMc)(!0, ct)),
								this.w.schedule();
							const ht = ct[ct.length - 1];
							(nt.textContent = je(Date.now() - ht.startedAt)),
								(lt.style.display = "none");
						} else {
							const ht = et[0],
								Rt = (0, u.$vb)(fe.$A4, (Nt) =>
									ht.counts[Nt] > 0 ? Nt : void 0,
								);
							(bt.className = f.ThemeIcon.asClassName(
								Y.$PKc.get(Rt ?? pe.TestResultState.Unset),
							)),
								(gt = (0, ee.$BMc)(!1, [ht])),
								(nt.textContent =
									ht instanceof le.$O4
										? je(ht.completedAt - ht.startedAt)
										: ""),
								(lt.style.display = "block");
						}
						(rt.textContent = `${gt.passed}/${gt.totalWillBeRun}`),
							this.q.update((0, ee.$CMc)(gt)),
							this.I(gt),
							this.f || (t.$9fb(this.z), this.z.appendChild(ft), (this.f = !0));
					}
					I(et) {
						if (et && this.j !== _.TestingCountBadge.Off && et[this.j] !== 0) {
							if (this.m instanceof me.$8qc && this.m.number === et[this.j])
								return;
							this.m = new me.$8qc(et[this.j], (rt) => this.J(this.j, rt));
						} else if (this.G.isEnabled()) {
							if (this.m instanceof me.$9qc && this.m.icon === Y.$KKc) return;
							this.m = new me.$9qc(Y.$KKc, () => (0, l.localize)(10789, null));
						} else {
							if (!this.m) return;
							this.m = void 0;
						}
						this.u.value =
							this.m &&
							this.F.showViewActivity(te.Testing.ExplorerViewId, {
								badge: this.m,
							});
					}
					J(et, rt) {
						switch (et) {
							case _.TestingCountBadge.Passed:
								return (0, l.localize)(10790, null, rt);
							case _.TestingCountBadge.Skipped:
								return (0, l.localize)(10791, null, rt);
							default:
								return (0, l.localize)(10792, null, rt);
						}
					}
				};
				xe = Ne(
					[
						j(1, oe.$Kqc),
						j(2, me.$7qc),
						j(3, ye.$MLc),
						j(4, I.$gj),
						j(5, L.$Li),
						j(6, k.$Uyb),
					],
					xe,
				);
				var He;
				(function (Ze) {
					(Ze[(Ze.None = 0)] = "None"),
						(Ze[(Ze.ForWorkspace = 1)] = "ForWorkspace"),
						(Ze[(Ze.ForDocument = 2)] = "ForDocument");
				})(He || (He = {}));
				let Ke = class extends g.$1c {
					get viewMode() {
						return this.m.get() ?? te.TestExplorerViewMode.Tree;
					}
					set viewMode(et) {
						et !== this.m.get() &&
							(this.m.set(et),
							this.bb(),
							this.M.store(
								"testing.viewMode",
								et,
								A.StorageScope.WORKSPACE,
								A.StorageTarget.MACHINE,
							));
					}
					get viewSorting() {
						return this.q.get() ?? te.TestExplorerViewSorting.ByStatus;
					}
					set viewSorting(et) {
						et !== this.q.get() &&
							(this.q.set(et),
							this.tree.resort(null),
							this.M.store(
								"testing.viewSorting",
								et,
								A.StorageScope.WORKSPACE,
								A.StorageTarget.MACHINE,
							));
					}
					constructor(
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
					) {
						super(),
							(this.F = lt),
							(this.G = ct),
							(this.H = gt),
							(this.I = ht),
							(this.J = Rt),
							(this.M = Nt),
							(this.N = jt),
							(this.O = ti),
							(this.P = kt),
							(this.Q = hi),
							(this.R = Kt),
							(this.projection = this.D(new g.$2c())),
							(this.j = new g.$2c()),
							(this.m = $e.TestingContextKeys.viewMode.bindTo(this.N)),
							(this.q = $e.TestingContextKeys.viewSorting.bindTo(this.N)),
							(this.u = new c.$re()),
							(this.w = new Se(() => this.tree.getSelection().filter(b.$tg))),
							(this.y = this.D(
								new Q.$oqc(
									{
										key: "testing.treeState",
										scope: A.StorageScope.WORKSPACE,
										target: A.StorageTarget.MACHINE,
									},
									this.M,
								),
							)),
							(this.C = !1),
							(this.onChangeWelcomeVisibility = this.u.event),
							(this.welcomeExperience = He.None),
							(this.C = !!ht.reveal.value),
							(this.z = this.D(Rt.createInstance(Be, et))),
							this.m.set(
								this.M.get(
									"testing.viewMode",
									A.StorageScope.WORKSPACE,
									te.TestExplorerViewMode.Tree,
								),
							),
							this.q.set(
								this.M.get(
									"testing.viewSorting",
									A.StorageScope.WORKSPACE,
									te.TestExplorerViewSorting.ByLocation,
								),
							),
							this.Y(),
							(this.f = this.J.createInstance(Ee, gt.collection)),
							(this.tree = Rt.createInstance(
								W.$aLc,
								"Test Explorer List",
								et,
								new Ae(),
								[Rt.createInstance(Re, this.w), Rt.createInstance(De)],
								{
									identityProvider: Rt.createInstance(Me),
									hideTwistiesOfChildlessElements: !1,
									sorter: Rt.createInstance(Ie, this),
									keyboardNavigationLabelProvider: Rt.createInstance(qe),
									accessibilityProvider: Rt.createInstance(Ue),
									filter: this.f,
									findWidgetEnabled: !1,
									openOnSingleClick: !1,
								},
							));
						const Ye = this.D(
							new a.$Yh(() => {
								const Vt = this.tree.getOptimizedViewState(this.y.get({})),
									Bt = this.projection.value;
								Bt && (Bt.lastState = Vt);
							}, 3e3),
						);
						this.D(
							this.tree.onDidChangeCollapseState((Vt) => {
								Vt.node.element instanceof G.$7Kc &&
									(Vt.node.collapsed ||
										this.projection.value?.expandElement(
											Vt.node.element,
											Vt.deep ? 1 / 0 : 0,
										),
									Ye.schedule());
							}),
						),
							this.D(
								this.R.onDidChange((Vt) => {
									if (Vt) {
										const Bt = this.projection.value?.getElementByTestId(Vt);
										this.tree.resort(
											Bt?.parent && this.tree.hasElement(Bt.parent)
												? Bt.parent
												: null,
											!1,
										);
									}
								}),
							),
							this.D(
								rt((Vt) => {
									Vt && this.Z();
								}),
							),
							this.D(this.tree.onContextMenu((Vt) => this.W(Vt))),
							this.D(
								c.Event.any(
									ht.text.onDidChange,
									ht.fuzzy.onDidChange,
									gt.excluded.onTestExclusionsChanged,
								)(this.tree.refilter, this.tree),
							),
							this.D(
								this.tree.onDidOpen((Vt) => {
									Vt.element instanceof G.$7Kc &&
										!Vt.element.children.size &&
										Vt.element.test.item.uri &&
										di.executeCommand(
											"vscode.revealTest",
											Vt.element.test.item.extId,
										);
								}),
							),
							this.D(this.tree),
							this.D(
								this.onChangeWelcomeVisibility((Vt) => {
									this.z.setVisible(Vt === He.ForDocument);
								}),
							),
							this.D(
								t.$$fb(this.tree.getHTMLElement(), "keydown", (Vt) => {
									Vt.equals(n.KeyCode.Enter)
										? this.X(Vt)
										: d.$Lib.mightProducePrintableCharacter(Vt) &&
											((ht.text.value = Vt.browserEvent.key), ht.focusInput());
								}),
							),
							this.D(ht.reveal.onDidChange((Vt) => this.S(Vt, void 0, !1))),
							this.D(
								rt((Vt) => {
									Vt && ht.focusInput();
								}),
							),
							this.D(
								this.tree.onDidChangeSelection((Vt) => {
									if (
										t.$7gb(Vt.browserEvent) &&
										(Vt.browserEvent.altKey || Vt.browserEvent.shiftKey)
									)
										return;
									const Bt = Vt.elements[0];
									Bt &&
										Vt.browserEvent &&
										Bt instanceof G.$7Kc &&
										Bt.children.size === 0 &&
										Bt.test.expand === pe.TestItemExpandState.NotExpandable &&
										this.U(Bt);
								}),
							);
						let ze = (0, _.$RJc)(ft, _.TestingConfigKeys.FollowRunningTest);
						this.D(
							ft.onDidChangeConfiguration((Vt) => {
								Vt.affectsConfiguration(
									_.TestingConfigKeys.FollowRunningTest,
								) &&
									(ze = (0, _.$RJc)(ft, _.TestingConfigKeys.FollowRunningTest));
							}),
						);
						let Xe = (0, _.$RJc)(
							ft,
							_.TestingConfigKeys.AlwaysRevealTestOnStateChange,
						);
						this.D(
							ft.onDidChangeConfiguration((Vt) => {
								Vt.affectsConfiguration(
									_.TestingConfigKeys.AlwaysRevealTestOnStateChange,
								) &&
									(Xe = (0, _.$RJc)(
										ft,
										_.TestingConfigKeys.AlwaysRevealTestOnStateChange,
									));
							}),
						),
							this.D(
								ti.onTestChanged((Vt) => {
									ze &&
										Vt.reason ===
											le.TestResultItemChangeReason.OwnStateChange &&
										(this.tree.selectionSize > 1 ||
											(Vt.item.ownComputedState !==
												pe.TestResultState.Running &&
												!(
													Vt.previousState === pe.TestResultState.Queued &&
													(0, fe.$w4)(Vt.item.ownComputedState)
												)) ||
											this.S(Vt.item.item.extId, Xe, !1));
								}),
							),
							this.D(
								ti.onResultsChanged(() => {
									this.tree.resort(null);
								}),
							),
							this.D(
								this.Q.onDidChange(() => {
									this.tree.rerender();
								}),
							);
						const It = (0, p.observableFromEvent)(
								this,
								bt.onDidEditorsChange,
								() =>
									new Set(
										nt.groups
											.flatMap((Vt) => Vt.editors)
											.map((Vt) => Vt.resource)
											.filter(b.$tg),
									),
							),
							Lt = (0, p.observableFromEvent)(
								this,
								bt.onDidActiveEditorChange,
								() =>
									bt.activeEditor instanceof q.$GVb
										? bt.activeEditor.primary.resource
										: bt.activeEditor?.resource,
							),
							xt = (0, p.observableFromEvent)(
								this.I.text.onDidChange,
								() => this.I.text,
							);
						this.D(
							(0, p.autorun)((Vt) => {
								xt.read(Vt),
									this.I.isFilteringFor(Z.TestFilterTerm.OpenedFiles)
										? this.f.filterToDocumentUri([...It.read(Vt)])
										: this.f.filterToDocumentUri([Lt.read(Vt)].filter(b.$tg)),
									(this.I.isFilteringFor(Z.TestFilterTerm.CurrentDoc) ||
										this.I.isFilteringFor(Z.TestFilterTerm.OpenedFiles)) &&
										this.tree.refilter();
							}),
						),
							this.D(
								this.M.onWillSaveState(({ reason: Vt }) => {
									Vt === A.WillSaveStateReason.SHUTDOWN &&
										this.y.store(this.tree.getOptimizedViewState());
								}),
							);
					}
					layout(et, rt) {
						this.tree.layout(et, rt);
					}
					S(et, rt = !0, ft = !0) {
						if (!et) {
							this.C = !1;
							return;
						}
						const bt = this.Z();
						let nt = 0;
						const lt = [...se.$k4.fromString(et).idsFromRoot()];
						for (let ct = lt.length - 1; ct >= nt; ct--) {
							const gt = bt.getElementByTestId(lt[ct].toString());
							if (!gt || !this.tree.hasElement(gt)) continue;
							if (ct < lt.length - 1 && rt) {
								this.tree.expand(gt), (nt = ct + 1), (ct = lt.length - 1);
								continue;
							}
							let ht = gt;
							for (let Rt = gt; Rt instanceof G.$7Kc; Rt = Rt.parent) {
								if (Rt.test && this.H.excluded.contains(Rt.test)) {
									this.I.toggleFilteringFor(Z.TestFilterTerm.Hidden, !0);
									break;
								}
								!rt &&
									this.tree.hasElement(Rt) &&
									this.tree.isCollapsed(Rt) &&
									(ht = Rt);
							}
							(this.I.reveal.value = void 0),
								(this.C = !1),
								ft && this.tree.domFocus(),
								this.tree.getRelativeTop(ht) === null &&
									this.tree.reveal(ht, 0.5),
								(this.j.value = (0, a.$Oh)(() => {
									this.tree.setFocus([ht]), this.tree.setSelection([ht]);
								}, 1));
							return;
						}
						this.C = !0;
					}
					async collapseAll() {
						this.tree.collapseAll();
					}
					U(et) {
						const rt = et.test && this.O.getStateById(et.test.item.extId);
						return rt && rt[1].tasks.some((ft) => (0, fe.$v4)(ft.state))
							? this.P.tryPeekFirstError(rt[0], rt[1], { preserveFocus: !0 })
							: !1;
					}
					W(et) {
						const rt = et.element;
						if (!(rt instanceof G.$7Kc)) return;
						const { actions: ft } = Ve(
							this.N,
							this.F,
							this.H,
							this.R,
							this.Q,
							rt,
						);
						this.G.showContextMenu({
							getAnchor: () => et.anchor,
							getActions: () => ft.secondary,
							getActionsContext: () => rt,
							actionRunner: this.w,
						});
					}
					X(et) {
						const rt = this.tree.getFocus(),
							ft = this.tree.getSelection();
						let bt;
						rt.length === 1 && ft.includes(rt[0])
							? (et.browserEvent?.preventDefault(), (bt = ft))
							: (bt = rt);
						const nt = bt.filter((lt) => lt instanceof G.$7Kc);
						nt.length &&
							this.H.runTests({
								group: pe.TestRunProfileBitset.Run,
								tests: nt.map((lt) => lt.test),
							});
					}
					Y() {
						const rt =
							this.H.collection.busyProviders === 0 &&
							(0, ae.$tqc)(this.H.collection)
								? this.I.isFilteringFor(Z.TestFilterTerm.CurrentDoc)
									? He.ForDocument
									: He.ForWorkspace
								: He.None;
						rt !== this.welcomeExperience &&
							((this.welcomeExperience = rt), this.u.fire(rt));
					}
					Z() {
						return this.projection.value ?? this.bb();
					}
					bb() {
						this.projection.clear();
						const et = this.y.get({});
						this.m.get() === te.TestExplorerViewMode.List
							? (this.projection.value = this.J.createInstance(K.$_Kc, et))
							: (this.projection.value = this.J.createInstance(X.$bLc, et));
						const rt = this.D(new a.$Yh(() => this.cb(), 200));
						return (
							this.projection.value.onUpdate(() => {
								rt.isScheduled() || rt.schedule();
							}),
							this.cb(),
							this.projection.value
						);
					}
					cb() {
						this.Y(),
							this.projection.value?.applyTo(this.tree),
							this.tree.refilter(),
							this.C && this.S(this.I.reveal.value);
					}
					getSelectedTests() {
						return this.tree.getSelection();
					}
				};
				Ke = Ne(
					[
						j(2, I.$gj),
						j(3, ge.$IY),
						j(4, ve.$EY),
						j(5, v.$YX),
						j(6, P.$Xxb),
						j(7, ae.$sqc),
						j(8, Z.$xLc),
						j(9, L.$Li),
						j(10, A.$lq),
						j(11, T.$6j),
						j(12, oe.$Kqc),
						j(13, ue.$ZKc),
						j(14, re.$Bqc),
						j(15, ye.$MLc),
						j(16, S.$ek),
					],
					Ke,
				);
				var Je;
				(function (Ze) {
					(Ze[(Ze.Exclude = 0)] = "Exclude"),
						(Ze[(Ze.Inherit = 1)] = "Inherit"),
						(Ze[(Ze.Include = 2)] = "Include");
				})(Je || (Je = {}));
				const Te = (Ze, et, rt, ft) => {
					const bt = [ft ? [ft] : Ze.rootIds];
					for (; bt.length; )
						for (const nt of bt.pop()) {
							const lt = Ze.getNodeById(nt);
							if (
								lt &&
								!(!lt.item.uri || !et.extUri.isEqualOrParent(rt, lt.item.uri))
							) {
								if (
									lt.item.range ||
									lt.expand === pe.TestItemExpandState.Expandable
								)
									return !0;
								bt.push(lt.children);
							}
						}
					return !1;
				};
				let Ee = class {
					constructor(et, rt, ft, bt) {
						(this.f = et),
							(this.j = rt),
							(this.k = ft),
							(this.l = bt),
							(this.d = []);
					}
					filter(et) {
						if (et instanceof G.$8Kc) return m.TreeVisibility.Visible;
						if (
							et.test &&
							!this.j.isFilteringFor(Z.TestFilterTerm.Hidden) &&
							this.k.excluded.contains(et.test)
						)
							return m.TreeVisibility.Hidden;
						switch (Math.min(this.u(et), this.q(et), this.o(et), this.m(et))) {
							case Je.Exclude:
								return m.TreeVisibility.Hidden;
							case Je.Include:
								return m.TreeVisibility.Visible;
							default:
								return m.TreeVisibility.Recurse;
						}
					}
					filterToDocumentUri(et) {
						this.d = [...et];
					}
					m(et) {
						return (!this.j.includeTags.size && !this.j.excludeTags.size) ||
							((!this.j.includeTags.size ||
								et.test.item.tags.some((rt) => this.j.includeTags.has(rt))) &&
								et.test.item.tags.every((rt) => !this.j.excludeTags.has(rt)))
							? Je.Include
							: Je.Inherit;
					}
					o(et) {
						return this.j.isFilteringFor(Z.TestFilterTerm.Failed)
							? (0, fe.$v4)(et.state)
								? Je.Include
								: Je.Inherit
							: this.j.isFilteringFor(Z.TestFilterTerm.Executed)
								? et.state !== pe.TestResultState.Unset
									? Je.Include
									: Je.Inherit
								: Je.Include;
					}
					q(et) {
						return this.d.length === 0 ||
							(!this.j.isFilteringFor(Z.TestFilterTerm.CurrentDoc) &&
								!this.j.isFilteringFor(Z.TestFilterTerm.OpenedFiles)) ||
							!(et instanceof G.$7Kc) ||
							this.d.some((rt) => Te(this.f, this.l, rt, et.test.item.extId))
							? Je.Include
							: Je.Inherit;
					}
					u(et) {
						if (this.j.globList.length === 0) return Je.Include;
						const rt = this.j.fuzzy.value;
						for (let ft = et; ft; ft = ft.parent) {
							let bt =
								this.j.globList[0].include === !1 ? Je.Include : Je.Inherit;
							const nt = ft.test.item.label.toLowerCase();
							for (const { include: lt, text: ct } of this.j.globList)
								(rt ? (0, o.$bg)(nt, ct) : nt.includes(ct)) &&
									(bt = lt ? Je.Include : Je.Exclude);
							if (bt !== Je.Inherit) return bt;
						}
						return Je.Inherit;
					}
				};
				Ee = Ne([j(1, Z.$xLc), j(2, ae.$sqc), j(3, F.$Vl)], Ee);
				class Ie {
					constructor(et) {
						this.d = et;
					}
					compare(et, rt) {
						if (et instanceof G.$8Kc || rt instanceof G.$8Kc)
							return (
								(et instanceof G.$8Kc ? -1 : 0) + (rt instanceof G.$8Kc ? 1 : 0)
							);
						const ft = (rt.duration || 0) - (et.duration || 0);
						if (
							this.d.viewSorting === te.TestExplorerViewSorting.ByDuration &&
							ft !== 0
						)
							return ft;
						const bt = (0, fe.$y4)(et.state, rt.state);
						if (
							this.d.viewSorting === te.TestExplorerViewSorting.ByStatus &&
							bt !== 0
						)
							return bt;
						let nt = !1;
						if (
							et instanceof G.$7Kc &&
							rt instanceof G.$7Kc &&
							et.test.item.uri &&
							rt.test.item.uri &&
							et.test.item.uri.toString() === rt.test.item.uri.toString() &&
							et.test.item.range &&
							rt.test.item.range
						) {
							nt = !0;
							const gt =
								et.test.item.range.startLineNumber -
								rt.test.item.range.startLineNumber;
							if (gt !== 0) return gt;
						}
						const lt = et.test.item.sortText,
							ct = rt.test.item.sortText;
						return nt && !lt && !ct
							? 0
							: (lt || et.test.item.label).localeCompare(
									ct || rt.test.item.label,
								);
					}
				}
				let Be = class extends g.$1c {
					constructor(et, rt) {
						super();
						const ft = (this.f = t.$fhb(
								et,
								t.$(".testing-no-test-placeholder"),
							)),
							bt = t.$fhb(ft, t.$("p"));
						bt.innerText = (0, l.localize)(10793, null);
						const nt = (0, l.localize)(10794, null),
							lt = this.D(new w.$oob(ft, { title: nt, ...O.$lyb }));
						(lt.label = nt),
							this.D(
								lt.onDidClick(() =>
									rt.toggleFilteringFor(Z.TestFilterTerm.CurrentDoc, !1),
								),
							);
					}
					setVisible(et) {
						this.f.classList.toggle("visible", et);
					}
				};
				Be = Ne([j(1, Z.$xLc)], Be);
				class Se extends r.$sj {
					constructor(et) {
						super(), (this.j = et);
					}
					async q(et, rt) {
						if (!(et instanceof v.$2X)) return super.q(et, rt);
						const ft = this.j(),
							lt = (ft.some((ct) => ct === rt) ? ft : [rt]).filter(
								(ct) => ct instanceof G.$7Kc,
							);
						await et.run(...lt);
					}
				}
				const ke = (Ze) => {
					let et = (0, te.$zqc)(Ze.description || Ze.test.item.label, Ze.state);
					return (
						Ze instanceof G.$7Kc &&
							(Ze.duration !== void 0 &&
								(et = (0, l.localize)(10795, null, et, je(Ze.duration))),
							Ze.retired && (et = (0, l.localize)(10796, null, et))),
						et
					);
				};
				class Ue {
					getWidgetAriaLabel() {
						return (0, l.localize)(10797, null);
					}
					getAriaLabel(et) {
						return et instanceof G.$8Kc ? et.description : ke(et);
					}
				}
				class qe {
					getKeyboardNavigationLabel(et) {
						return et instanceof G.$8Kc ? et.message : et.test.item.label;
					}
				}
				class Ae {
					getHeight(et) {
						return et instanceof G.$8Kc ? 27 : 22;
					}
					getTemplateId(et) {
						return et instanceof G.$8Kc ? De.ID : Re.ID;
					}
				}
				class Me {
					getId(et) {
						return et.treeId;
					}
				}
				let De = class {
					static {
						be = this;
					}
					static {
						this.ID = "error";
					}
					constructor(et, rt) {
						(this.f = et), (this.d = rt.createInstance(s.$Qzb, {}));
					}
					get templateId() {
						return be.ID;
					}
					renderTemplate(et) {
						return {
							label: t.$fhb(et, t.$(".error")),
							disposable: new g.$Zc(),
						};
					}
					renderElement({ element: et }, rt, ft) {
						if ((t.$9fb(ft.label), typeof et.message == "string"))
							ft.label.innerText = et.message;
						else {
							const bt = this.d.render(et.message, { inline: !0 });
							ft.label.appendChild(bt.element);
						}
						ft.disposable.add(
							this.f.setupManagedHover(
								(0, E.$cib)("mouse"),
								ft.label,
								et.description,
							),
						);
					}
					disposeTemplate(et) {
						et.disposable.dispose();
					}
				};
				De = be = Ne([j(0, k.$Uyb), j(1, L.$Li)], De);
				let Re = class extends g.$1c {
					static {
						Ce = this;
					}
					static {
						this.ID = "testItem";
					}
					constructor(et, rt, ft, bt, nt, lt, ct, gt) {
						super(),
							(this.f = et),
							(this.j = rt),
							(this.m = ft),
							(this.q = bt),
							(this.u = nt),
							(this.w = lt),
							(this.y = ct),
							(this.z = gt),
							(this.templateId = Ce.ID);
					}
					renderTemplate(et) {
						const rt = t.$fhb(et, t.$(".test-item")),
							ft = t.$fhb(rt, t.$(".computed-state")),
							bt = t.$fhb(rt, t.$(".label")),
							nt = new g.$Zc();
						t.$fhb(rt, t.$(f.ThemeIcon.asCSSSelector(Y.$DKc)));
						const lt = nt.add(
							new i.$eib(rt, {
								actionRunner: this.f,
								actionViewItemProvider: (gt, ht) =>
									gt instanceof v.$2X
										? this.w.createInstance($.$Lyb, gt, {
												hoverDelegate: ht.hoverDelegate,
											})
										: void 0,
							}),
						);
						nt.add(
							this.y.onDidChange((gt) => {
								const ht = ct.current?.test.item.extId;
								ht &&
									(!gt || gt === ht || se.$k4.isChild(ht, gt)) &&
									this.C(ct.current, ct);
							}),
						);
						const ct = {
							wrapper: rt,
							label: bt,
							actionBar: lt,
							icon: ft,
							elementDisposable: new g.$Zc(),
							templateDisposable: nt,
						};
						return ct;
					}
					disposeTemplate(et) {
						et.templateDisposable.clear();
					}
					disposeElement(et, rt, ft) {
						ft.elementDisposable.clear();
					}
					C(et, rt) {
						const { actions: ft, contextOverlay: bt } = Ve(
								this.u,
								this.j,
								this.m,
								this.y,
								this.q,
								et,
							),
							nt = !!bt.getContextKeyValue(
								$e.TestingContextKeys.isContinuousModeOn.key,
							),
							lt = !nt && this.y.isEnabledForAChildOf(et.test.item.extId);
						rt.actionBar.domNode.classList.toggle(
							"testing-is-continuous-run",
							nt || lt,
						),
							rt.actionBar.clear(),
							(rt.actionBar.context = et),
							rt.actionBar.push(ft.primary, { icon: !0, label: !1 });
					}
					renderElement(et, rt, ft) {
						ft.elementDisposable.clear(),
							(ft.current = et.element),
							this.C(et.element, ft),
							ft.elementDisposable.add(
								et.element.onChange(() => this._renderElement(et, ft)),
							),
							this._renderElement(et, ft);
					}
					_renderElement(et, rt) {
						const ft = this.m.excluded.contains(et.element.test);
						rt.wrapper.classList.toggle("test-is-hidden", ft);
						const bt = Y.$PKc.get(
							et.element.test.expand === pe.TestItemExpandState.BusyExpanding ||
								et.element.test.item.busy
								? pe.TestResultState.Running
								: et.element.state,
						);
						(rt.icon.className =
							"computed-state " + (bt ? f.ThemeIcon.asClassName(bt) : "")),
							et.element.retired && (rt.icon.className += " retired"),
							rt.elementDisposable.add(
								this.z.setupManagedHover(
									(0, E.$cib)("mouse"),
									rt.label,
									ke(et.element),
								),
							),
							et.element.test.item.label.trim()
								? t.$hhb(rt.label, ...(0, C.$Sib)(et.element.test.item.label))
								: (rt.label.textContent = "\xA0");
						let nt = et.element.description;
						et.element.duration !== void 0 &&
							(nt = nt
								? `${nt}: ${je(et.element.duration)}`
								: je(et.element.duration)),
							nt &&
								t.$fhb(rt.label, t.$("span.test-label-description", {}, nt));
					}
				};
				Re = Ce = Ne(
					[
						j(1, v.$YX),
						j(2, ae.$sqc),
						j(3, re.$Bqc),
						j(4, T.$6j),
						j(5, L.$Li),
						j(6, ye.$MLc),
						j(7, k.$Uyb),
					],
					Re,
				);
				const je = (Ze) =>
						Ze < 10
							? `${Ze.toFixed(1)}ms`
							: Ze < 1e3
								? `${Ze.toFixed(0)}ms`
								: `${(Ze / 1e3).toFixed(1)}s`,
					Ve = (Ze, et, rt, ft, bt, nt) => {
						const lt = nt instanceof G.$7Kc ? nt.test : void 0,
							ct = (0, J.$UKc)(lt, lt ? bt.capabilitiesForTest(lt.item) : 0);
						if ((ct.push(["view", te.Testing.ExplorerViewId]), lt)) {
							const ti = rt.getTestController(lt.controllerId),
								kt =
									!!ti &&
									bt
										.getControllerProfiles(ti.id)
										.some((hi) => hi.supportsContinuousRun);
							ct.push(
								[
									$e.TestingContextKeys.canRefreshTests.key,
									ti &&
										!!(
											ti.capabilities.get() &
											pe.TestControllerCapability.Refresh
										) &&
										se.$k4.isRoot(lt.item.extId),
								],
								[
									$e.TestingContextKeys.testItemIsHidden.key,
									rt.excluded.contains(lt),
								],
								[
									$e.TestingContextKeys.isContinuousModeOn.key,
									kt && ft.isSpecificallyEnabledFor(lt.item.extId),
								],
								[
									$e.TestingContextKeys.isParentRunningContinuously.key,
									kt && ft.isEnabledForAParentOf(lt.item.extId),
								],
								[$e.TestingContextKeys.supportsContinuousRun.key, kt],
							);
						}
						const gt = Ze.createOverlay(ct),
							ht = et.getMenuActions(v.$XX.TestItem, gt, {
								shouldForwardArgs: !0,
							}),
							jt = { primary: [], secondary: [] };
						return (
							(0, $.$Kyb)(ht, jt, "inline"), { actions: jt, contextOverlay: gt }
						);
					};
				(0, z.$oP)((Ze, et) => {
					if (Ze.type === "dark") {
						const rt = Ze.getColor(B.$IP);
						if (rt) {
							const ft = new h.$UL(
								new h.$RL(rt.rgba.r, rt.rgba.g, rt.rgba.b, 0.65),
							);
							et.addRule(
								`.test-explorer .test-explorer-messages { color: ${ft}; }`,
							);
						}
					}
				});
			},
		)
