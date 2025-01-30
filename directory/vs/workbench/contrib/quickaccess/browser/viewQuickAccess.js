import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/quickinput/browser/pickerQuickAccess.js';
import '../../../common/views.js';
import '../../../services/views/common/viewsService.js';
import '../../../services/output/common/output.js';
import '../../terminal/browser/terminal.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/common/filters.js';
import '../../../../base/common/strings.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../services/panecomposite/browser/panecomposite.js';
import '../../debug/common/debug.js';
define(
			de[3836],
			he([
				1, 0, 4, 63, 392, 60, 89, 297, 107, 8, 132, 37, 39, 11, 27, 43, 99, 142,
				112,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*quickInput*/,
 w /*pickerQuickAccess*/,
 E /*views*/,
 C /*viewsService*/,
 d /*output*/,
 m /*terminal*/,
 r /*contextkey*/,
 u /*filters*/,
 a /*strings*/,
 h /*keybinding*/,
 c /*actions*/,
 n /*keyCodes*/,
 g /*keybindingsRegistry*/,
 p /*actionCommonCategories*/,
 o /*panecomposite*/,
 f /*debug*/) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$MMc = e.$LMc = e.$KMc = void 0);
				let s = class extends w.$GLb {
					static {
						b = this;
					}
					static {
						this.PREFIX = "view ";
					}
					constructor(v, S, I, T, P, k, L, D) {
						super(b.PREFIX, {
							noResultsPick: {
								label: (0, t.localize)(8708, null),
								containerLabel: "",
							},
						}),
							(this.h = v),
							(this.j = S),
							(this.m = I),
							(this.n = T),
							(this.q = P),
							(this.r = k),
							(this.t = L),
							(this.u = D);
					}
					g(v) {
						const S = this.y().filter((k) =>
								v
									? ((k.highlights = {
											label: (0, u.$Zk)(v, k.label, !0) ?? void 0,
										}),
										k.highlights.label || (0, a.$bg)(k.containerLabel, v))
									: !0,
							),
							I = new Map();
						for (const k of S)
							I.has(k.label) || I.set(k.label, k.containerLabel);
						const T = [];
						let P;
						for (const k of S) {
							if (P !== k.containerLabel) {
								P = k.containerLabel;
								let L;
								I.has(P) ? (L = `${I.get(P)} / ${P}`) : (L = P),
									T.push({ type: "separator", label: L });
							}
							T.push(k);
						}
						return T;
					}
					y() {
						const v = [],
							S = (k, L) => {
								const D = this.h.getViewContainerModel(L),
									M = [];
								for (const N of D.allViewDescriptors)
									this.u.contextMatchesRules(N.when) &&
										M.push({
											label: N.name.value,
											containerLabel: D.title,
											accept: () => this.j.openView(N.id, !0),
										});
								return M;
							},
							I = (k, L) => {
								const D = this.t.getPaneComposites(k),
									M = this.t.getVisiblePaneCompositeIds(k);
								D.sort((N, A) => {
									let R = M.findIndex((B) => N.id === B),
										O = M.findIndex((B) => A.id === B);
									return (
										R < 0 && (R = D.indexOf(N) + M.length),
										O < 0 && (O = D.indexOf(A) + M.length),
										R - O
									);
								});
								for (const N of D)
									if (this.z(N)) {
										const A = this.h.getViewContainerById(N.id);
										A &&
											v.push({
												label: this.h.getViewContainerModel(A).title,
												containerLabel: L,
												accept: () => this.t.openPaneComposite(N.id, k, !0),
											});
									}
							};
						I(E.ViewContainerLocation.Sidebar, (0, t.localize)(8709, null)),
							I(E.ViewContainerLocation.Panel, (0, t.localize)(8710, null)),
							I(
								E.ViewContainerLocation.AuxiliaryBar,
								(0, t.localize)(8711, null),
							);
						const T = (k) => {
							const L = this.t.getPaneComposites(k);
							for (const D of L) {
								const M = this.h.getViewContainerById(D.id);
								M && v.push(...S(D, M));
							}
						};
						T(E.ViewContainerLocation.Sidebar),
							T(E.ViewContainerLocation.Panel),
							T(E.ViewContainerLocation.AuxiliaryBar),
							this.q.groups.forEach((k, L) => {
								k.terminalInstances.forEach((D, M) => {
									const N = (0, t.localize)(
										8712,
										null,
										`${L + 1}.${M + 1}`,
										D.title,
									);
									v.push({
										label: N,
										containerLabel: (0, t.localize)(8713, null),
										accept: async () => {
											await this.q.showPanel(!0), this.n.setActiveInstance(D);
										},
									});
								});
							}),
							this.r
								.getModel()
								.getSessions(!0)
								.filter((k) => k.hasSeparateRepl())
								.forEach((k, L) => {
									const D = k.name;
									v.push({
										label: D,
										containerLabel: (0, t.localize)(8714, null),
										accept: async () => {
											await this.r.focusStackFrame(void 0, void 0, k, {
												explicit: !0,
											}),
												this.j.isViewVisible(f.$Y4) ||
													(await this.j.openView(f.$Y4, !0));
										},
									});
								});
						const P = this.m.getChannelDescriptors();
						for (const k of P)
							v.push({
								label: k.label,
								containerLabel: (0, t.localize)(8715, null),
								accept: () => this.m.showChannel(k.id),
							});
						return v;
					}
					z(v) {
						const S = this.h.getViewContainerById(v.id);
						return S?.hideIfEmpty
							? this.h.getViewContainerModel(S).activeViewDescriptors.length > 0
							: !0;
					}
				};
				(e.$KMc = s),
					(e.$KMc =
						s =
						b =
							Ne(
								[
									j(0, E.$K1),
									j(1, C.$HMb),
									j(2, d.$o8),
									j(3, m.$iIb),
									j(4, m.$lIb),
									j(5, f.$75),
									j(6, o.$6Sb),
									j(7, r.$6j),
								],
								s,
							));
				class l extends c.$3X {
					static {
						this.ID = "workbench.action.openView";
					}
					constructor() {
						super({
							id: l.ID,
							title: (0, t.localize2)(8716, "Open View"),
							category: p.$ck.View,
							f1: !0,
						});
					}
					async run(v) {
						v.get(i.$DJ).quickAccess.show(s.PREFIX);
					}
				}
				e.$LMc = l;
				class y extends c.$3X {
					static {
						this.ID = "workbench.action.quickOpenView";
					}
					static {
						this.KEYBINDING = {
							primary: n.KeyMod.CtrlCmd | n.KeyCode.KeyQ,
							mac: { primary: n.KeyMod.WinCtrl | n.KeyCode.KeyQ },
							linux: { primary: 0 },
						};
					}
					constructor() {
						super({
							id: y.ID,
							title: (0, t.localize2)(8717, "Quick Open View"),
							category: p.$ck.View,
							f1: !1,
							keybinding: {
								weight: g.KeybindingWeight.WorkbenchContrib,
								when: void 0,
								...y.KEYBINDING,
							},
						});
					}
					async run(v) {
						const S = v.get(h.$uZ),
							I = v.get(i.$DJ),
							T = S.lookupKeybindings(y.ID);
						I.quickAccess.show(s.PREFIX, {
							quickNavigateConfiguration: { keybindings: T },
							itemActivation: i.ItemActivation.FIRST,
						});
					}
				}
				e.$MMc = y;
			},
		),
		