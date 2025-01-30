import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/performance.js';
import '../common/files.js';
import '../../../../platform/configuration/common/configuration.js';
import './views/explorerView.js';
import './views/emptyView.js';
import './views/openEditorsView.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../services/extensions/common/extensions.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../common/views.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../base/common/lifecycle.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../browser/parts/views/viewPaneContainer.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../common/contextkeys.js';
import '../../../../platform/contextkey/common/contextkeys.js';
import '../../../browser/actions/workspaceActions.js';
import '../../../browser/actions/windowActions.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../base/browser/dom.js';
import '../../../../css!vs/workbench/contrib/files/browser/media/explorerviewlet.js';
define(
			de[864],
			he([
				1, 0, 4, 240, 220, 10, 1351, 4021, 1992, 21, 5, 53, 25, 32, 8, 35, 60,
				49, 3, 96, 239, 27, 30, 84, 102, 100, 179, 853, 571, 12, 14, 79, 31, 7,
				2440,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*performance*/,
				w /*files*/,
				E /*configuration*/,
				C /*explorerView*/,
				d /*emptyView*/,
				m /*openEditorsView*/,
				r /*storage*/,
				u /*instantiation*/,
				a /*extensions*/,
				h /*workspace*/,
				c /*telemetry*/,
				n /*contextkey*/,
				g /*themeService*/,
				p /*views*/,
				o /*contextView*/,
				f /*lifecycle*/,
				b /*layoutService*/,
				s /*viewPaneContainer*/,
				l /*keyCodes*/,
				y /*platform*/,
				$ /*progress*/,
				v /*descriptors*/,
				S /*contextkeys*/,
				I /*contextkeys*/,
				T /*workspaceActions*/,
				P /*windowActions*/,
				k /*platform*/,
				L /*codicons*/,
				D /*iconRegistry*/,
				M /*commands*/,
				N /*dom*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sAc = e.$rAc = e.$qAc = void 0);
				const A = (0, D.$$O)(
						"explorer-view-icon",
						L.$ak.files,
						(0, t.localize)(6684, null),
					),
					R = (0, D.$$O)(
						"open-editors-view-icon",
						L.$ak.book,
						(0, t.localize)(6685, null),
					);
				let O = class extends f.$1c {
					static {
						this.ID = "workbench.contrib.explorerViewletViews";
					}
					constructor(X, Y, ie, ne, ee) {
						super(),
							(this.a = X),
							(this.b = Y),
							ne
								.withProgress({ location: $.ProgressLocation.Explorer }, () =>
									X.getCompleteWorkspace(),
								)
								.finally(() => {
									this.c(),
										this.D(X.onDidChangeWorkbenchState(() => this.c())),
										this.D(X.onDidChangeWorkspaceFolders(() => this.c()));
								});
					}
					c() {
						(0, i.mark)("code/willRegisterExplorerViews");
						const X = J.getViews(e.$sAc),
							Y = [],
							ie = [],
							ne = this.f();
						X.some((Z) => Z.id === ne.id) || Y.push(ne);
						const ee = this.h(),
							_ = X.find((Z) => Z.id === ee.id),
							te = this.g(),
							Q = X.find((Z) => Z.id === te.id);
						this.a.getWorkbenchState() === h.WorkbenchState.EMPTY ||
						this.a.getWorkspace().folders.length === 0
							? (_ && ie.push(_), Q || Y.push(te))
							: (Q && ie.push(Q), _ || Y.push(ee)),
							ie.length && J.deregisterViews(ie, e.$sAc),
							Y.length && J.registerViews(Y, e.$sAc),
							(0, i.mark)("code/didRegisterExplorerViews");
					}
					f() {
						return {
							id: m.$pAc.ID,
							name: m.$pAc.NAME,
							ctorDescriptor: new v.$Ji(m.$pAc),
							containerIcon: R,
							order: 0,
							canToggleVisibility: !0,
							canMoveView: !0,
							collapsed: !1,
							hideByDefault: !0,
							focusCommand: {
								id: "workbench.files.action.focusOpenEditorsView",
								keybindings: {
									primary: (0, l.$os)(l.$ps, l.KeyCode.KeyE),
									mac: { primary: (0, l.$os)(l.$qs, l.KeyCode.KeyE) },
								},
							},
						};
					}
					g() {
						return {
							id: d.$oAc.ID,
							name: d.$oAc.NAME,
							containerIcon: A,
							ctorDescriptor: new v.$Ji(d.$oAc),
							order: 1,
							canToggleVisibility: !0,
							focusCommand: { id: "workbench.explorer.fileView.focus" },
						};
					}
					h() {
						return {
							id: w.$wUb,
							name: (0, t.localize2)(6695, "Folders"),
							containerIcon: A,
							ctorDescriptor: new v.$Ji(C.$HXb),
							order: 1,
							canMoveView: !0,
							canToggleVisibility: !1,
							focusCommand: { id: "workbench.explorer.fileView.focus" },
						};
					}
				};
				(e.$qAc = O),
					(e.$qAc = O =
						Ne(
							[j(0, h.$Vi), j(1, E.$gj), j(2, n.$6j), j(3, $.$8N), j(4, M.$ek)],
							O,
						));
				let B = class extends s.$ZSb {
					constructor(X, Y, ie, ne, ee, _, te, Q, Z, se, re) {
						super(
							w.$vUb,
							{ mergeViewWithContainerWhenSingleView: !0 },
							_,
							ee,
							X,
							Z,
							Y,
							se,
							Q,
							ne,
							ie,
							re,
						),
							(this.c = w.$xUb.bindTo(te)),
							this.D(this.ib.onDidChangeWorkspaceName((le) => this.mb()));
					}
					create(X) {
						super.create(X), X.classList.add("explorer-viewlet");
					}
					nb(X, Y) {
						return X.id === w.$wUb
							? this.bb.createInstance(C.$HXb, {
									...Y,
									delegate: {
										willOpenElement: (ie) => {
											if (!(0, N.$7gb)(ie)) return;
											const ne = this.getOpenEditorsView();
											if (ne) {
												let ee = 0;
												this.cb.getValue().workbench?.editor?.enablePreview &&
													(ee = 250),
													ne.setStructuralRefreshDelay(ee);
											}
										},
										didOpenElement: (ie) => {
											if (!(0, N.$7gb)(ie)) return;
											this.getOpenEditorsView()?.setStructuralRefreshDelay(0);
										},
									},
								})
							: super.nb(X, Y);
					}
					getExplorerView() {
						return this.getView(w.$wUb);
					}
					getOpenEditorsView() {
						return this.getView(m.$pAc.ID);
					}
					setVisible(X) {
						this.c.set(X), super.setVisible(X);
					}
					focus() {
						const X = this.getView(w.$wUb);
						X && this.panes.every((Y) => !Y.isExpanded()) && X.setExpanded(!0),
							X?.isExpanded() ? X.focus() : super.focus();
					}
				};
				(e.$rAc = B),
					(e.$rAc = B =
						Ne(
							[
								j(0, b.$mEb),
								j(1, c.$km),
								j(2, h.$Vi),
								j(3, r.$lq),
								j(4, E.$gj),
								j(5, u.$Li),
								j(6, n.$6j),
								j(7, g.$iP),
								j(8, o.$Xxb),
								j(9, a.$q2),
								j(10, p.$K1),
							],
							B,
						));
				const U = y.$Io.as(p.Extensions.ViewContainersRegistry);
				e.$sAc = U.registerViewContainer(
					{
						id: w.$vUb,
						title: (0, t.localize2)(6696, "Explorer"),
						ctorDescriptor: new v.$Ji(B),
						storageId: "workbench.explorer.views.state",
						icon: A,
						alwaysUseContainerInfo: !0,
						hideIfEmpty: !0,
						order: 0,
						openCommandActionDescriptor: {
							id: w.$vUb,
							title: (0, t.localize2)(6697, "Explorer"),
							mnemonicTitle: (0, t.localize)(6686, null),
							keybindings: {
								primary: l.KeyMod.CtrlCmd | l.KeyMod.Shift | l.KeyCode.KeyE,
							},
							order: 0,
						},
					},
					p.ViewContainerLocation.Sidebar,
					{ isDefault: !0 },
				);
				const z = (0, t.localize)(6687, null),
					F = (0, t.localize)(6688, null),
					x = (0, t.localize)(6689, null),
					H = `[${z}](command:${T.$Ktc.ID})`,
					q = `[${F}](command:${T.$Ktc.ID})`,
					V = `[${z}](command:${k.$m && !k.$r ? T.$Jtc.ID : T.$Htc.ID})`,
					G = `[${z}](command:${T.$Itc.ID})`,
					K = `[${x}](command:${P.$Yqc.ID})`,
					J = y.$Io.as(p.Extensions.ViewsRegistry);
				J.registerViewWelcomeContent(d.$oAc.ID, {
					content: (0, t.localize)(6690, null, H),
					when: n.$Kj.and(S.$wPb.isEqualTo("workspace"), S.$yPb),
					group: p.ViewContentGroups.Open,
					order: 1,
				}),
					J.registerViewWelcomeContent(d.$oAc.ID, {
						content: (0, t.localize)(6691, null, G, K),
						when: n.$Kj.and(S.$wPb.isEqualTo("workspace"), S.$yPb.toNegated()),
						group: p.ViewContentGroups.Open,
						order: 1,
					}),
					J.registerViewWelcomeContent(d.$oAc.ID, {
						content: (0, t.localize)(6692, null, V),
						when: n.$Kj.and(
							S.$wPb.notEqualsTo("workspace"),
							S.$CPb.notEqualsTo(""),
							I.$7Lb.toNegated(),
						),
						group: p.ViewContentGroups.Open,
						order: 1,
					}),
					J.registerViewWelcomeContent(d.$oAc.ID, {
						content: (0, t.localize)(6693, null, V, q),
						when: n.$Kj.and(
							n.$Kj.has("editorIsOpen"),
							n.$Kj.or(
								n.$Kj.and(
									S.$wPb.notEqualsTo("workspace"),
									S.$CPb.isEqualTo(""),
								),
								n.$Kj.and(S.$wPb.notEqualsTo("workspace"), I.$7Lb),
							),
						),
						group: p.ViewContentGroups.Open,
						order: 1,
					}),
					J.registerViewWelcomeContent(d.$oAc.ID, {
						content: (0, t.localize)(6694, null, V),
						when: n.$Kj.and(
							n.$Kj.has("editorIsOpen")?.negate(),
							n.$Kj.or(
								n.$Kj.and(
									S.$wPb.notEqualsTo("workspace"),
									S.$CPb.isEqualTo(""),
								),
								n.$Kj.and(S.$wPb.notEqualsTo("workspace"), I.$7Lb),
							),
						),
						group: p.ViewContentGroups.Open,
						order: 1,
					});
			},
		),
		