import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../nls.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/progress/common/progress.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../browser/parts/views/viewPaneContainer.js';
import '../../../common/contextkeys.js';
import '../../../common/views.js';
import '../../../services/views/common/viewsService.js';
import './debugActionViewItems.js';
import './debugCommands.js';
import './debugIcons.js';
import './debugToolBar.js';
import './welcomeView.js';
import '../common/debug.js';
import '../../../services/extensions/common/extensions.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../../css!vs/workbench/contrib/debug/browser/media/debugViewlet.js';
define(
			de[1943],
			he([
				1, 0, 3, 4, 92, 11, 10, 8, 49, 5, 84, 63, 21, 32, 35, 25, 239, 100, 60,
				89, 1332, 425, 352, 1333, 1942, 112, 53, 96, 2431,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*lifecycle*/,
				i /*nls*/,
				w /*menuEntryActionViewItem*/,
				E /*actions*/,
				C /*configuration*/,
				d /*contextkey*/,
				m /*contextView*/,
				r /*instantiation*/,
				u /*progress*/,
				a /*quickInput*/,
				h /*storage*/,
				c /*telemetry*/,
				n /*themeService*/,
				g /*workspace*/,
				p /*viewPaneContainer*/,
				o /*contextkeys*/,
				f /*views*/,
				b /*viewsService*/,
				s /*debugActionViewItems*/,
				l /*debugCommands*/,
				y /*debugIcons*/,
				$ /*debugToolBar*/,
				v /*welcomeView*/,
				S /*debug*/,
				I /*extensions*/,
				T /*layoutService*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$8Qc = void 0),
					(i = mt(i));
				let P = class extends p.$ZSb {
					constructor(L, D, M, N, A, R, O, B, U, z, F, x, H, q) {
						super(
							S.$Q4,
							{ mergeViewWithContainerWhenSingleView: !0 },
							A,
							F,
							L,
							U,
							D,
							z,
							B,
							O,
							R,
							q,
						),
							(this.Bb = M),
							(this.Cb = N),
							(this.Db = x),
							(this.Eb = H),
							(this.$ = new Map()),
							(this.Ab = this.D(new t.$Zc())),
							this.D(this.Cb.onDidChangeState((V) => this.Fb(V))),
							this.D(
								this.Eb.onDidChangeContext((V) => {
									V.affectsSome(new Set([S.$44, "inDebugMode"])) && this.mb();
								}),
							),
							this.D(this.ib.onDidChangeWorkbenchState(() => this.mb())),
							this.D(
								this.cb.onDidChangeConfiguration((V) => {
									(V.affectsConfiguration("debug.toolBarLocation") ||
										V.affectsConfiguration(
											"debug.hideLauncherWhileDebugging",
										)) &&
										this.mb();
								}),
							);
					}
					create(L) {
						super.create(L), L.classList.add("debug-viewlet");
					}
					focus() {
						super.focus(), this.c ? this.c.focus() : this.focusView(v.$7Qc.ID);
					}
					getActionViewItem(L, D) {
						if (L.id === l.$lHc)
							return (
								(this.c = this.bb.createInstance(s.$yJc, null, L, D)), this.c
							);
						if (L.id === l.$gHc)
							return new s.$zJc(L, void 0, this.Cb, this.Db, this.cb);
						if (L.id === l.$_Gc || L.id === l.$0Gc) {
							this.Ab.clear();
							const M = this.bb.invokeFunction((N) =>
								(0, $.$kQc)(L, this.Ab, N, { hoverDelegate: D.hoverDelegate }),
							);
							if (M) return M;
						}
						return (0, w.$Pyb)(this.bb, L, D);
					}
					focusView(L) {
						const D = this.getView(L);
						D && D.focus();
					}
					Fb(L) {
						this.r && (this.r(), (this.r = void 0)),
							L === S.State.Initializing &&
								this.Bb.withProgress(
									{ location: S.$Q4 },
									(D) => new Promise((M) => (this.r = M)),
								);
					}
					addPanes(L) {
						super.addPanes(L);
						for (const { pane: D } of L)
							D.id === S.$V4
								? ((this.t = D), this.Gb())
								: this.$.set(
										D.id,
										D.onDidChange(() => this.Gb()),
									);
					}
					removePanes(L) {
						super.removePanes(L);
						for (const D of L)
							(0, t.$Vc)(this.$.get(D.id)), this.$.delete(D.id);
					}
					Gb() {
						if (this.t) {
							const L = this.panes.every(
								(D) => !D.isExpanded() || D === this.t,
							);
							this.t.maximumBodySize = L
								? Number.POSITIVE_INFINITY
								: this.t.minimumBodySize;
						}
					}
				};
				(e.$8Qc = P),
					(e.$8Qc = P =
						Ne(
							[
								j(0, T.$mEb),
								j(1, c.$km),
								j(2, u.$8N),
								j(3, S.$75),
								j(4, r.$Li),
								j(5, g.$Vi),
								j(6, h.$lq),
								j(7, n.$iP),
								j(8, m.$Xxb),
								j(9, I.$q2),
								j(10, C.$gj),
								j(11, m.$Wxb),
								j(12, d.$6j),
								j(13, f.$K1),
							],
							P,
						)),
					E.$ZX.appendMenuItem(E.$XX.ViewContainerTitle, {
						when: d.$Kj.and(
							d.$Kj.equals("viewContainer", S.$Q4),
							S.$54.notEqualsTo("simple"),
							o.$wPb.notEqualsTo("empty"),
							d.$Kj.or(
								S.$24.isEqualTo("inactive"),
								d.$Kj.notEquals("config.debug.toolBarLocation", "docked"),
							),
							d.$Kj.or(
								d.$Kj.not("config.debug.hideLauncherWhileDebugging"),
								d.$Kj.not("inDebugMode"),
							),
						),
						order: 10,
						group: "navigation",
						command: {
							precondition: S.$24.notEqualsTo((0, S.$45)(S.State.Initializing)),
							id: l.$lHc,
							title: l.$QHc,
						},
					}),
					(0, E.$4X)(
						class extends E.$3X {
							constructor() {
								super({
									id: l.$kHc,
									title: {
										value: l.$PHc,
										original: "Open 'launch.json'",
										mnemonicTitle: i.localize(5658, null),
									},
									metadata: {
										description: i.localize2(
											5662,
											"Opens the file used to configure how your program is debugged",
										),
									},
									f1: !0,
									icon: y.$vKb,
									precondition: S.$54.notEqualsTo("simple"),
									menu: [
										{
											id: E.$XX.ViewContainerTitle,
											group: "navigation",
											order: 20,
											when: d.$Kj.and(
												d.$Kj.equals("viewContainer", S.$Q4),
												S.$54.notEqualsTo("simple"),
												o.$wPb.notEqualsTo("empty"),
												d.$Kj.or(
													S.$24.isEqualTo("inactive"),
													d.$Kj.notEquals(
														"config.debug.toolBarLocation",
														"docked",
													),
												),
											),
										},
										{
											id: E.$XX.ViewContainerTitle,
											order: 20,
											when: d.$Kj.and(
												d.$Kj.equals("viewContainer", S.$Q4),
												S.$24.notEqualsTo("inactive"),
												d.$Kj.equals("config.debug.toolBarLocation", "docked"),
											),
										},
										{
											id: E.$XX.MenubarDebugMenu,
											group: "2_configuration",
											order: 1,
											when: S.$y5,
										},
									],
								});
							}
							async run(k) {
								const L = k.get(S.$75),
									D = k.get(a.$DJ),
									M = L.getConfigurationManager();
								let N;
								if (M.selectedConfiguration.name)
									N = M.selectedConfiguration.launch;
								else {
									const A = M.getLaunches().filter((R) => !R.hidden);
									if (A.length === 1) N = A[0];
									else {
										const R = A.map((B) => ({ label: B.name, launch: B })),
											O = await D.pick(R, {
												activeItem: R[0],
												placeHolder: i.localize(5659, null),
											});
										O && (N = O.launch);
									}
								}
								N && (await N.openConfigFile({ preserveFocus: !1 }));
							}
						},
					),
					(0, E.$4X)(
						class extends E.$3X {
							constructor() {
								super({
									id: "debug.toggleReplIgnoreFocus",
									title: i.localize(5660, null),
									toggled: d.$Kj.has(`view.${S.$Y4}.visible`),
									menu: [
										{
											id: p.$YSb,
											group: "3_toggleRepl",
											order: 30,
											when: d.$Kj.and(d.$Kj.equals("viewContainer", S.$Q4)),
										},
									],
								});
							}
							async run(k) {
								const L = k.get(b.$HMb);
								L.isViewVisible(S.$Y4)
									? L.closeView(S.$Y4)
									: await L.openView(S.$Y4);
							}
						},
					),
					E.$ZX.appendMenuItem(E.$XX.ViewContainerTitle, {
						when: d.$Kj.and(
							d.$Kj.equals("viewContainer", S.$Q4),
							S.$24.notEqualsTo("inactive"),
							d.$Kj.or(
								d.$Kj.equals("config.debug.toolBarLocation", "docked"),
								d.$Kj.has("config.debug.hideLauncherWhileDebugging"),
							),
						),
						order: 10,
						command: { id: l.$hHc, title: i.localize(5661, null) },
					});
			},
		),
		