import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/arrays.js';
import '../../../common/editor.js';
import '../../../common/editor/sideBySideEditorInput.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../services/history/common/history.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/commands/common/commands.js';
import './editorCommands.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/workspaces/common/workspaces.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/quickinput/common/quickInput.js';
import './editorQuickAccess.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/themables.js';
import '../../../services/filesConfiguration/common/filesConfigurationService.js';
import '../../../services/editor/common/editorResolverService.js';
import '../../../../base/common/platform.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/common/keyCodes.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../common/contextkeys.js';
import '../../../../base/browser/dom.js';
import '../../../../platform/progress/common/progress.js';
import './editorCommandsContext.js';
import '../../../../platform/list/browser/listService.js';
define(
			de[1340],
			he([
				1, 0, 4, 50, 24, 44, 313, 96, 245, 39, 31, 247, 66, 18, 10, 256, 57, 63,
				1015, 14, 26, 170, 231, 12, 11, 8, 27, 43, 34, 99, 100, 7, 84, 1014, 93,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$htc =
						e.$gtc =
						e.$ftc =
						e.$etc =
						e.$dtc =
						e.$ctc =
						e.$btc =
						e.$atc =
						e.$_sc =
						e.$$sc =
						e.$0sc =
						e.$9sc =
						e.$8sc =
						e.$7sc =
						e.$6sc =
						e.$5sc =
						e.$4sc =
						e.$3sc =
						e.$2sc =
						e.$1sc =
						e.$Zsc =
						e.$Ysc =
						e.$Xsc =
						e.$Wsc =
						e.$Vsc =
						e.$Usc =
						e.$Tsc =
						e.$Ssc =
						e.$Rsc =
						e.$Qsc =
						e.$Psc =
						e.$Osc =
						e.$Nsc =
						e.$Msc =
						e.$Lsc =
						e.$Ksc =
						e.$Jsc =
						e.$Isc =
						e.$Hsc =
						e.$Gsc =
						e.$Fsc =
						e.$Esc =
						e.$Dsc =
						e.$Csc =
						e.$Bsc =
						e.$Asc =
						e.$zsc =
						e.$ysc =
						e.$xsc =
						e.$wsc =
						e.$vsc =
						e.$usc =
						e.$tsc =
						e.$ssc =
						e.$rsc =
						e.$qsc =
						e.$psc =
						e.$osc =
						e.$nsc =
						e.$msc =
						e.$lsc =
						e.$ksc =
						e.$jsc =
						e.$isc =
						e.$hsc =
						e.$gsc =
						e.$fsc =
						e.$esc =
						e.$dsc =
						e.$csc =
						e.$bsc =
						e.$asc =
						e.$_rc =
						e.$$rc =
						e.$0rc =
						e.$9rc =
						e.$8rc =
						e.$7rc =
						e.$6rc =
						e.$5rc =
						e.$4rc =
						e.$3rc =
						e.$2rc =
						e.$1rc =
						e.$Zrc =
						e.$Yrc =
						e.$Xrc =
						e.$Wrc =
						e.$Vrc =
						e.$Urc =
						e.$Trc =
						e.$Src =
						e.$Rrc =
						e.$Qrc =
						e.$Prc =
						e.$Orc =
						e.$Nrc =
						e.$Mrc =
						e.$Lrc =
						e.$Krc =
						e.$Jrc =
						e.$Irc =
						e.$Hrc =
						e.$Grc =
						e.$Frc =
						e.$Erc =
						e.$Drc =
						e.$Crc =
						e.$Brc =
						e.$Arc =
						e.$zrc =
							void 0);
				class R extends v.$3X {
					constructor(Yt, ni, bi) {
						super(Yt), (this.a = ni), (this.b = bi);
					}
					run(Yt) {
						return Yt.get(u.$ek).executeCommand(this.a, this.b);
					}
				}
				class O extends v.$3X {
					a(Yt) {
						return (0, h.$HY)(Yt);
					}
					async run(Yt, ...ni) {
						const bi = Yt.get(h.$EY),
							fi = Yt.get(n.$gj),
							Ti = this.a(fi),
							wt = (0, N.$TVb)(ni, Yt.get(c.$IY), bi, Yt.get(A.$fMb));
						(0, a.$DWb)(bi, Ti, wt);
					}
				}
				class B extends O {
					static {
						this.ID = a.$cWb;
					}
					constructor() {
						super({
							id: B.ID,
							title: (0, t.localize2)(3308, "Split Editor"),
							f1: !0,
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								primary: I.KeyMod.CtrlCmd | I.KeyCode.Backslash,
							},
							category: k.$ck.View,
						});
					}
				}
				e.$zrc = B;
				class U extends O {
					constructor() {
						super({
							id: "workbench.action.splitEditorOrthogonal",
							title: (0, t.localize2)(3309, "Split Editor Orthogonal"),
							f1: !0,
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								primary: (0, I.$os)(
									I.$ps,
									I.KeyMod.CtrlCmd | I.KeyCode.Backslash,
								),
								mac: {
									primary: (0, I.$os)(
										I.$qs,
										I.KeyMod.CtrlCmd | I.KeyCode.Backslash,
									),
								},
							},
							category: k.$ck.View,
						});
					}
					a(Yt) {
						return (0, h.$HY)(Yt) === h.GroupDirection.RIGHT
							? h.GroupDirection.DOWN
							: h.GroupDirection.RIGHT;
					}
				}
				e.$Arc = U;
				class z extends R {
					constructor() {
						super(
							{
								id: a.$fWb,
								title: (0, t.localize2)(3310, "Split Editor Left"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: (0, I.$os)(
										I.$ps,
										I.KeyMod.CtrlCmd | I.KeyCode.Backslash,
									),
									mac: {
										primary: (0, I.$os)(
											I.$qs,
											I.KeyMod.CtrlCmd | I.KeyCode.Backslash,
										),
									},
								},
								category: k.$ck.View,
							},
							a.$fWb,
						);
					}
				}
				e.$Brc = z;
				class F extends R {
					constructor() {
						super(
							{
								id: a.$gWb,
								title: (0, t.localize2)(3311, "Split Editor Right"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: (0, I.$os)(
										I.$ps,
										I.KeyMod.CtrlCmd | I.KeyCode.Backslash,
									),
									mac: {
										primary: (0, I.$os)(
											I.$qs,
											I.KeyMod.CtrlCmd | I.KeyCode.Backslash,
										),
									},
								},
								category: k.$ck.View,
							},
							a.$gWb,
						);
					}
				}
				e.$Crc = F;
				class x extends R {
					static {
						this.LABEL = (0, t.localize)(3285, null);
					}
					constructor() {
						super(
							{
								id: a.$dWb,
								title: (0, t.localize2)(3312, "Split Editor Up"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: (0, I.$os)(
										I.$ps,
										I.KeyMod.CtrlCmd | I.KeyCode.Backslash,
									),
									mac: {
										primary: (0, I.$os)(
											I.$qs,
											I.KeyMod.CtrlCmd | I.KeyCode.Backslash,
										),
									},
								},
								category: k.$ck.View,
							},
							a.$dWb,
						);
					}
				}
				e.$Drc = x;
				class H extends R {
					static {
						this.LABEL = (0, t.localize)(3286, null);
					}
					constructor() {
						super(
							{
								id: a.$eWb,
								title: (0, t.localize2)(3313, "Split Editor Down"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: (0, I.$os)(
										I.$ps,
										I.KeyMod.CtrlCmd | I.KeyCode.Backslash,
									),
									mac: {
										primary: (0, I.$os)(
											I.$qs,
											I.KeyMod.CtrlCmd | I.KeyCode.Backslash,
										),
									},
								},
								category: k.$ck.View,
							},
							a.$eWb,
						);
					}
				}
				e.$Erc = H;
				class q extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.joinTwoGroups",
							title: (0, t.localize2)(
								3314,
								"Join Editor Group with Next Group",
							),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt, ni) {
						const bi = Yt.get(h.$EY);
						let fi;
						if (
							(ni && typeof ni.groupId == "number"
								? (fi = bi.getGroup(ni.groupId))
								: (fi = bi.activeGroup),
							fi)
						) {
							const Ti = [
								h.GroupDirection.RIGHT,
								h.GroupDirection.DOWN,
								h.GroupDirection.LEFT,
								h.GroupDirection.UP,
							];
							for (const wt of Ti) {
								const We = bi.findGroup({ direction: wt }, fi);
								if (We && fi !== We) {
									bi.mergeGroup(fi, We);
									break;
								}
							}
						}
					}
				}
				e.$Frc = q;
				class V extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.joinAllGroups",
							title: (0, t.localize2)(3315, "Join All Editor Groups"),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						const ni = Yt.get(h.$EY);
						ni.mergeAllGroups(ni.activeGroup);
					}
				}
				e.$Grc = V;
				class G extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.navigateEditorGroups",
							title: (0, t.localize2)(3316, "Navigate Between Editor Groups"),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						const ni = Yt.get(h.$EY);
						ni.findGroup(
							{ location: h.GroupLocation.NEXT },
							ni.activeGroup,
							!0,
						)?.focus();
					}
				}
				e.$Hrc = G;
				class K extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.focusActiveEditorGroup",
							title: (0, t.localize2)(3317, "Focus Active Editor Group"),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						Yt.get(h.$EY).activeGroup.focus();
					}
				}
				e.$Irc = K;
				class J extends v.$3X {
					constructor(Yt, ni) {
						super(Yt), (this.a = ni);
					}
					async run(Yt) {
						const ni = Yt.get(h.$EY);
						ni.findGroup(this.a, ni.activeGroup, !0)?.focus();
					}
				}
				class W extends J {
					constructor() {
						super(
							{
								id: "workbench.action.focusFirstEditorGroup",
								title: (0, t.localize2)(3318, "Focus First Editor Group"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: I.KeyMod.CtrlCmd | I.KeyCode.Digit1,
								},
								category: k.$ck.View,
							},
							{ location: h.GroupLocation.FIRST },
						);
					}
				}
				e.$Jrc = W;
				class X extends J {
					constructor() {
						super(
							{
								id: "workbench.action.focusLastEditorGroup",
								title: (0, t.localize2)(3319, "Focus Last Editor Group"),
								f1: !0,
								category: k.$ck.View,
							},
							{ location: h.GroupLocation.LAST },
						);
					}
				}
				e.$Krc = X;
				class Y extends J {
					constructor() {
						super(
							{
								id: "workbench.action.focusNextGroup",
								title: (0, t.localize2)(3320, "Focus Next Editor Group"),
								f1: !0,
								category: k.$ck.View,
							},
							{ location: h.GroupLocation.NEXT },
						);
					}
				}
				e.$Lrc = Y;
				class ie extends J {
					constructor() {
						super(
							{
								id: "workbench.action.focusPreviousGroup",
								title: (0, t.localize2)(3321, "Focus Previous Editor Group"),
								f1: !0,
								category: k.$ck.View,
							},
							{ location: h.GroupLocation.PREVIOUS },
						);
					}
				}
				e.$Mrc = ie;
				class ne extends J {
					constructor() {
						super(
							{
								id: "workbench.action.focusLeftGroup",
								title: (0, t.localize2)(3322, "Focus Left Editor Group"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: (0, I.$os)(
										I.$ps,
										I.KeyMod.CtrlCmd | I.KeyCode.LeftArrow,
									),
									mac: {
										primary: (0, I.$os)(
											I.$qs,
											I.KeyMod.CtrlCmd | I.KeyCode.LeftArrow,
										),
									},
								},
								category: k.$ck.View,
							},
							{ direction: h.GroupDirection.LEFT },
						);
					}
				}
				e.$Nrc = ne;
				class ee extends J {
					constructor() {
						super(
							{
								id: "workbench.action.focusRightGroup",
								title: (0, t.localize2)(3323, "Focus Right Editor Group"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: (0, I.$os)(
										I.$ps,
										I.KeyMod.CtrlCmd | I.KeyCode.RightArrow,
									),
									mac: {
										primary: (0, I.$os)(
											I.$qs,
											I.KeyMod.CtrlCmd | I.KeyCode.RightArrow,
										),
									},
								},
								category: k.$ck.View,
							},
							{ direction: h.GroupDirection.RIGHT },
						);
					}
				}
				e.$Orc = ee;
				class _ extends J {
					constructor() {
						super(
							{
								id: "workbench.action.focusAboveGroup",
								title: (0, t.localize2)(3324, "Focus Editor Group Above"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: (0, I.$os)(
										I.$ps,
										I.KeyMod.CtrlCmd | I.KeyCode.UpArrow,
									),
									mac: {
										primary: (0, I.$os)(
											I.$qs,
											I.KeyMod.CtrlCmd | I.KeyCode.UpArrow,
										),
									},
								},
								category: k.$ck.View,
							},
							{ direction: h.GroupDirection.UP },
						);
					}
				}
				e.$Prc = _;
				class te extends J {
					constructor() {
						super(
							{
								id: "workbench.action.focusBelowGroup",
								title: (0, t.localize2)(3325, "Focus Editor Group Below"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: (0, I.$os)(
										I.$ps,
										I.KeyMod.CtrlCmd | I.KeyCode.DownArrow,
									),
									mac: {
										primary: (0, I.$os)(
											I.$qs,
											I.KeyMod.CtrlCmd | I.KeyCode.DownArrow,
										),
									},
								},
								category: k.$ck.View,
							},
							{ direction: h.GroupDirection.DOWN },
						);
					}
				}
				e.$Qrc = te;
				let Q = class extends i.$rj {
					static {
						this.ID = "workbench.action.closeActiveEditor";
					}
					static {
						this.LABEL = (0, t.localize)(3287, null);
					}
					constructor(Yt, ni, bi) {
						super(Yt, ni, s.ThemeIcon.asClassName(b.$ak.close)), (this.a = bi);
					}
					run(Yt) {
						return this.a.executeCommand(a.$YVb, void 0, Yt);
					}
				};
				(e.$Rrc = Q), (e.$Rrc = Q = Ne([j(2, u.$ek)], Q));
				let Z = class extends i.$rj {
					static {
						this.ID = "workbench.action.unpinActiveEditor";
					}
					static {
						this.LABEL = (0, t.localize)(3288, null);
					}
					constructor(Yt, ni, bi) {
						super(Yt, ni, s.ThemeIcon.asClassName(b.$ak.pinned)), (this.a = bi);
					}
					run(Yt) {
						return this.a.executeCommand(a.$bWb, void 0, Yt);
					}
				};
				(e.$Src = Z), (e.$Src = Z = Ne([j(2, u.$ek)], Z));
				let se = class extends i.$rj {
					static {
						this.ID = "workbench.action.closeActiveEditor";
					}
					static {
						this.LABEL = (0, t.localize)(3289, null);
					}
					constructor(Yt, ni, bi) {
						super(Yt, ni, s.ThemeIcon.asClassName(b.$ak.close)), (this.a = bi);
					}
					async run(Yt) {
						const ni = Yt ? this.a.getGroup(Yt.groupId) : this.a.activeGroup;
						if (!ni) return;
						const bi =
							Yt?.editorIndex !== void 0
								? ni.getEditorByIndex(Yt.editorIndex)
								: ni.activeEditor;
						if (!bi) return;
						const fi = [];
						ni.isSelected(bi) ? fi.push(...ni.selectedEditors) : fi.push(bi);
						for (const Ti of fi)
							await ni.closeEditor(Ti, { preserveFocus: Yt?.preserveFocus });
					}
				};
				(e.$Trc = se), (e.$Trc = se = Ne([j(2, h.$EY)], se));
				class re extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.revertAndCloseActiveEditor",
							title: (0, t.localize2)(3326, "Revert and Close Editor"),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						const ni = Yt.get(c.$IY),
							bi = Yt.get(P.$ik),
							fi = ni.activeEditorPane;
						if (fi) {
							const Ti = fi.input,
								wt = fi.group;
							try {
								await ni.revert({ editor: Ti, groupId: wt.id });
							} catch (We) {
								bi.error(We),
									await ni.revert({ editor: Ti, groupId: wt.id }, { soft: !0 });
							}
							await wt.closeEditor(Ti);
						}
					}
				}
				e.$Urc = re;
				class le extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.closeEditorsToTheLeft",
							title: (0, t.localize2)(
								3327,
								"Close Editors to the Left in Group",
							),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt, ni) {
						const bi = Yt.get(h.$EY),
							{ group: fi, editor: Ti } = this.a(bi, ni);
						fi &&
							Ti &&
							(await fi.closeEditors({
								direction: E.CloseDirection.LEFT,
								except: Ti,
								excludeSticky: !0,
							}));
					}
					a(Yt, ni) {
						return ni
							? { editor: ni.editor, group: Yt.getGroup(ni.groupId) }
							: { group: Yt.activeGroup, editor: Yt.activeGroup.activeEditor };
					}
				}
				e.$Vrc = le;
				class oe extends v.$3X {
					a(Yt) {
						const ni = [],
							bi = Yt.getGroups(h.GroupsOrder.GRID_APPEARANCE);
						for (let fi = bi.length - 1; fi >= 0; fi--) ni.push(bi[fi]);
						return ni;
					}
					async run(Yt) {
						const ni = Yt.get(c.$IY),
							bi = Yt.get(P.$ik),
							fi = Yt.get(M.$8N),
							Ti = Yt.get(h.$EY),
							wt = Yt.get(l.$_Y),
							We = Yt.get(p.$IO),
							_e = new Set(),
							Si = new Set(),
							gi = new Set(),
							ki = new Map();
						for (const { editor: Pi, groupId: Hi } of ni.getEditors(
							E.EditorsOrder.SEQUENTIAL,
							{ excludeSticky: this.e },
						)) {
							let Ji = !1;
							if (
								(Pi.closeHandler
									? (Ji = Pi.closeHandler.showConfirm())
									: (Ji = Pi.isDirty() && !Pi.isSaving()),
								!!Ji)
							)
								if (typeof Pi.closeHandler?.confirm == "function") {
									let cn = ki.get(Pi.typeId);
									cn || ((cn = new Set()), ki.set(Pi.typeId, cn)),
										cn.add({ editor: Pi, groupId: Hi });
								} else
									!Pi.hasCapability(E.EditorInputCapabilities.Untitled) &&
									wt.getAutoSaveMode(Pi).mode === l.AutoSaveMode.ON_FOCUS_CHANGE
										? Si.add({ editor: Pi, groupId: Hi })
										: $.$p &&
												($.$l || $.$n) &&
												!Pi.hasCapability(E.EditorInputCapabilities.Untitled) &&
												wt.getAutoSaveMode(Pi).mode ===
													l.AutoSaveMode.ON_WINDOW_CHANGE
											? gi.add({ editor: Pi, groupId: Hi })
											: _e.add({ editor: Pi, groupId: Hi });
						}
						if (_e.size > 0) {
							const Pi = Array.from(_e.values());
							switch (
								(await this.d(Pi, Ti),
								await We.showSaveConfirm(
									Pi.map(({ editor: Ji }) =>
										Ji instanceof C.$iY ? Ji.primary.getName() : Ji.getName(),
									),
								))
							) {
								case p.ConfirmResult.CANCEL:
									return;
								case p.ConfirmResult.DONT_SAVE:
									await this.b(ni, bi, fi, Pi);
									break;
								case p.ConfirmResult.SAVE:
									await ni.save(Pi, { reason: E.SaveReason.EXPLICIT });
									break;
							}
						}
						for (const [, Pi] of ki) {
							const Hi = Array.from(Pi.values());
							await this.d(Hi, Ti);
							const Ji = await (0, w.$Sb)(Hi)?.editor.closeHandler?.confirm?.(
								Hi,
							);
							if (typeof Ji == "number")
								switch (Ji) {
									case p.ConfirmResult.CANCEL:
										return;
									case p.ConfirmResult.DONT_SAVE:
										await this.b(ni, bi, fi, Hi);
										break;
									case p.ConfirmResult.SAVE:
										await ni.save(Hi, { reason: E.SaveReason.EXPLICIT });
										break;
								}
						}
						if (Si.size > 0) {
							const Pi = Array.from(Si.values());
							await ni.save(Pi, { reason: E.SaveReason.FOCUS_CHANGE });
						}
						if (gi.size > 0) {
							const Pi = Array.from(gi.values());
							await ni.save(Pi, { reason: E.SaveReason.WINDOW_CHANGE });
						}
						return this.f(Ti);
					}
					b(Yt, ni, bi, fi) {
						return bi.withProgress(
							{
								location: M.ProgressLocation.Window,
								delay: 800,
								title: (0, t.localize)(3290, null),
							},
							() => this.c(Yt, ni, fi),
						);
					}
					async c(Yt, ni, bi) {
						try {
							await Yt.revert(bi);
						} catch (fi) {
							ni.error(fi), await Yt.revert(bi, { soft: !0 });
						}
					}
					async d(Yt, ni) {
						try {
							const bi = new Set();
							for (const { editor: fi, groupId: Ti } of Yt) {
								if (bi.has(Ti)) continue;
								bi.add(Ti), await ni.getGroup(Ti)?.openEditor(fi);
							}
						} catch {}
					}
					async f(Yt) {
						await Promise.all(
							this.a(Yt).map((ni) =>
								ni.closeAllEditors({ excludeSticky: this.e }),
							),
						);
					}
				}
				class ae extends oe {
					static {
						this.ID = "workbench.action.closeAllEditors";
					}
					static {
						this.LABEL = (0, t.localize2)(3328, "Close All Editors");
					}
					constructor() {
						super({
							id: ae.ID,
							title: ae.LABEL,
							f1: !0,
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								primary: (0, I.$os)(I.$ps, I.KeyMod.CtrlCmd | I.KeyCode.KeyW),
								mac: {
									primary: (0, I.$os)(I.$qs, I.KeyMod.CtrlCmd | I.KeyCode.KeyW),
								},
							},
							icon: b.$ak.closeAll,
							category: k.$ck.View,
						});
					}
					get e() {
						return !0;
					}
				}
				e.$Wrc = ae;
				class pe extends oe {
					constructor() {
						super({
							id: "workbench.action.closeAllGroups",
							title: (0, t.localize2)(3329, "Close All Editor Groups"),
							f1: !0,
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								primary: (0, I.$os)(
									I.$ps,
									I.KeyMod.CtrlCmd | I.KeyMod.Shift | I.KeyCode.KeyW,
								),
								mac: {
									primary: (0, I.$os)(
										I.$qs,
										I.KeyMod.CtrlCmd | I.KeyMod.Shift | I.KeyCode.KeyW,
									),
								},
							},
							category: k.$ck.View,
						});
					}
					get e() {
						return !1;
					}
					async f(Yt) {
						await super.f(Yt);
						for (const ni of this.a(Yt)) Yt.removeGroup(ni);
					}
				}
				e.$Xrc = pe;
				class $e extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.closeEditorsInOtherGroups",
							title: (0, t.localize2)(3330, "Close Editors in Other Groups"),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt, ni) {
						const bi = Yt.get(h.$EY),
							fi = ni ? bi.getGroup(ni.groupId) : bi.activeGroup;
						await Promise.all(
							bi
								.getGroups(h.GroupsOrder.MOST_RECENTLY_ACTIVE)
								.map(async (Ti) => {
									if (!(fi && Ti.id === fi.id))
										return Ti.closeAllEditors({ excludeSticky: !0 });
								}),
						);
					}
				}
				e.$Yrc = $e;
				class ye extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.closeEditorInAllGroups",
							title: (0, t.localize2)(3331, "Close Editor in All Groups"),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						const ni = Yt.get(c.$IY),
							bi = Yt.get(h.$EY),
							fi = ni.activeEditor;
						fi &&
							(await Promise.all(
								bi
									.getGroups(h.GroupsOrder.MOST_RECENTLY_ACTIVE)
									.map((Ti) => Ti.closeEditor(fi)),
							));
					}
				}
				e.$Zrc = ye;
				class ue extends v.$3X {
					constructor(Yt, ni, bi) {
						super(Yt), (this.a = ni), (this.b = bi);
					}
					async run(Yt, ni) {
						const bi = Yt.get(h.$EY);
						let fi;
						if (
							(ni && typeof ni.groupId == "number"
								? (fi = bi.getGroup(ni.groupId))
								: (fi = bi.activeGroup),
							fi)
						) {
							let Ti;
							if (this.b) {
								const wt = this.c(bi, fi);
								wt && (Ti = bi.moveGroup(fi, wt, this.a));
							} else Ti = bi.copyGroup(fi, fi, this.a);
							Ti && bi.activateGroup(Ti);
						}
					}
					c(Yt, ni) {
						const bi = [this.a];
						switch (this.a) {
							case h.GroupDirection.LEFT:
							case h.GroupDirection.RIGHT:
								bi.push(h.GroupDirection.UP, h.GroupDirection.DOWN);
								break;
							case h.GroupDirection.UP:
							case h.GroupDirection.DOWN:
								bi.push(h.GroupDirection.LEFT, h.GroupDirection.RIGHT);
								break;
						}
						for (const fi of bi) {
							const Ti = Yt.findGroup({ direction: fi }, ni);
							if (Ti) return Ti;
						}
					}
				}
				class fe extends ue {
					constructor(Yt, ni) {
						super(Yt, ni, !0);
					}
				}
				class me extends fe {
					constructor() {
						super(
							{
								id: "workbench.action.moveActiveEditorGroupLeft",
								title: (0, t.localize2)(3332, "Move Editor Group Left"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: (0, I.$os)(I.$ps, I.KeyCode.LeftArrow),
									mac: { primary: (0, I.$os)(I.$qs, I.KeyCode.LeftArrow) },
								},
								category: k.$ck.View,
							},
							h.GroupDirection.LEFT,
						);
					}
				}
				e.$1rc = me;
				class ve extends fe {
					constructor() {
						super(
							{
								id: "workbench.action.moveActiveEditorGroupRight",
								title: (0, t.localize2)(3333, "Move Editor Group Right"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: (0, I.$os)(I.$ps, I.KeyCode.RightArrow),
									mac: { primary: (0, I.$os)(I.$qs, I.KeyCode.RightArrow) },
								},
								category: k.$ck.View,
							},
							h.GroupDirection.RIGHT,
						);
					}
				}
				e.$2rc = ve;
				class ge extends fe {
					constructor() {
						super(
							{
								id: "workbench.action.moveActiveEditorGroupUp",
								title: (0, t.localize2)(3334, "Move Editor Group Up"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: (0, I.$os)(I.$ps, I.KeyCode.UpArrow),
									mac: { primary: (0, I.$os)(I.$qs, I.KeyCode.UpArrow) },
								},
								category: k.$ck.View,
							},
							h.GroupDirection.UP,
						);
					}
				}
				e.$3rc = ge;
				class be extends fe {
					constructor() {
						super(
							{
								id: "workbench.action.moveActiveEditorGroupDown",
								title: (0, t.localize2)(3335, "Move Editor Group Down"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: (0, I.$os)(I.$ps, I.KeyCode.DownArrow),
									mac: { primary: (0, I.$os)(I.$qs, I.KeyCode.DownArrow) },
								},
								category: k.$ck.View,
							},
							h.GroupDirection.DOWN,
						);
					}
				}
				e.$4rc = be;
				class Ce extends ue {
					constructor(Yt, ni) {
						super(Yt, ni, !1);
					}
				}
				class Le extends Ce {
					constructor() {
						super(
							{
								id: "workbench.action.duplicateActiveEditorGroupLeft",
								title: (0, t.localize2)(3336, "Duplicate Editor Group Left"),
								f1: !0,
								category: k.$ck.View,
							},
							h.GroupDirection.LEFT,
						);
					}
				}
				e.$5rc = Le;
				class Fe extends Ce {
					constructor() {
						super(
							{
								id: "workbench.action.duplicateActiveEditorGroupRight",
								title: (0, t.localize2)(3337, "Duplicate Editor Group Right"),
								f1: !0,
								category: k.$ck.View,
							},
							h.GroupDirection.RIGHT,
						);
					}
				}
				e.$6rc = Fe;
				class Oe extends Ce {
					constructor() {
						super(
							{
								id: "workbench.action.duplicateActiveEditorGroupUp",
								title: (0, t.localize2)(3338, "Duplicate Editor Group Up"),
								f1: !0,
								category: k.$ck.View,
							},
							h.GroupDirection.UP,
						);
					}
				}
				e.$7rc = Oe;
				class xe extends Ce {
					constructor() {
						super(
							{
								id: "workbench.action.duplicateActiveEditorGroupDown",
								title: (0, t.localize2)(3339, "Duplicate Editor Group Down"),
								f1: !0,
								category: k.$ck.View,
							},
							h.GroupDirection.DOWN,
						);
					}
				}
				e.$8rc = xe;
				class He extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.minimizeOtherEditors",
							title: (0, t.localize2)(3340, "Expand Editor Group"),
							f1: !0,
							category: k.$ck.View,
							precondition: L.$4Pb,
						});
					}
					async run(Yt) {
						Yt.get(h.$EY).arrangeGroups(h.GroupsArrangement.EXPAND);
					}
				}
				e.$9rc = He;
				class Ke extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.minimizeOtherEditorsHideSidebar",
							title: (0, t.localize2)(
								3341,
								"Expand Editor Group and Hide Side Bars",
							),
							f1: !0,
							category: k.$ck.View,
							precondition: S.$Kj.or(L.$4Pb, L.$gQb, L.$sQb),
						});
					}
					async run(Yt) {
						const ni = Yt.get(h.$EY),
							bi = Yt.get(d.$mEb);
						bi.setPartHidden(!0, d.Parts.SIDEBAR_PART),
							bi.setPartHidden(!0, d.Parts.AUXILIARYBAR_PART),
							ni.arrangeGroups(h.GroupsArrangement.EXPAND);
					}
				}
				e.$0rc = Ke;
				class Je extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.evenEditorWidths",
							title: (0, t.localize2)(3342, "Reset Editor Group Sizes"),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						Yt.get(h.$EY).arrangeGroups(h.GroupsArrangement.EVEN);
					}
				}
				e.$$rc = Je;
				class Te extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.toggleEditorWidths",
							title: (0, t.localize2)(3343, "Toggle Editor Group Sizes"),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						Yt.get(h.$EY).toggleExpandGroup();
					}
				}
				e.$_rc = Te;
				class Ee extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.maximizeEditorHideSidebar",
							title: (0, t.localize2)(
								3344,
								"Maximize Editor Group and Hide Side Bars",
							),
							f1: !0,
							category: k.$ck.View,
							precondition: S.$Kj.or(
								S.$Kj.and(L.$$Pb.negate(), L.$9Pb),
								L.$gQb,
								L.$sQb,
							),
						});
					}
					async run(Yt) {
						const ni = Yt.get(d.$mEb),
							bi = Yt.get(h.$EY);
						Yt.get(c.$IY).activeEditor &&
							(ni.setPartHidden(!0, d.Parts.SIDEBAR_PART),
							ni.setPartHidden(!0, d.Parts.AUXILIARYBAR_PART),
							bi.arrangeGroups(h.GroupsArrangement.MAXIMIZE));
					}
				}
				e.$asc = Ee;
				class Ie extends v.$3X {
					constructor() {
						super({
							id: a.$hWb,
							title: (0, t.localize2)(3345, "Toggle Maximize Editor Group"),
							f1: !0,
							category: k.$ck.View,
							precondition: S.$Kj.or(L.$9Pb, L.$$Pb),
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								primary: (0, I.$os)(I.$ps, I.KeyMod.CtrlCmd | I.KeyCode.KeyM),
								mac: {
									primary: (0, I.$os)(I.$qs, I.KeyMod.CtrlCmd | I.KeyCode.KeyM),
								},
							},
							menu: [
								{
									id: v.$XX.EditorTitle,
									order: -1e4,
									group: "navigation",
									when: L.$$Pb,
								},
								{
									id: v.$XX.EmptyEditorGroup,
									order: -1e4,
									group: "navigation",
									when: L.$$Pb,
								},
							],
							icon: b.$ak.screenFull,
							toggled: L.$$Pb,
						});
					}
					async run(Yt, ...ni) {
						const bi = Yt.get(h.$EY),
							fi = (0, N.$TVb)(ni, Yt.get(c.$IY), bi, Yt.get(A.$fMb));
						fi.groupedEditors.length &&
							bi.toggleMaximizeGroup(fi.groupedEditors[0].group);
					}
				}
				e.$bsc = Ie;
				class Be extends v.$3X {
					async run(Yt) {
						const ni = Yt.get(h.$EY),
							bi = this.a(ni);
						if (!bi) return;
						const { groupId: fi, editor: Ti } = bi;
						if (!Ti) return;
						const wt = ni.getGroup(fi);
						wt && (await wt.openEditor(Ti));
					}
				}
				class Se extends Be {
					constructor() {
						super({
							id: "workbench.action.nextEditor",
							title: (0, t.localize2)(3346, "Open Next Editor"),
							f1: !0,
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								primary: I.KeyMod.CtrlCmd | I.KeyCode.PageDown,
								mac: {
									primary:
										I.KeyMod.CtrlCmd | I.KeyMod.Alt | I.KeyCode.RightArrow,
									secondary: [
										I.KeyMod.CtrlCmd | I.KeyMod.Shift | I.KeyCode.BracketRight,
									],
								},
							},
							category: k.$ck.View,
						});
					}
					a(Yt) {
						const ni = Yt.activeGroup,
							bi = ni.getEditors(E.EditorsOrder.SEQUENTIAL),
							fi = ni.activeEditor ? bi.indexOf(ni.activeEditor) : -1;
						if (fi + 1 < bi.length)
							return { editor: bi[fi + 1], groupId: ni.id };
						const Ti = new Set();
						let wt = Yt.activeGroup;
						for (; wt && !Ti.has(wt.id); )
							if (
								((wt = Yt.findGroup(
									{ location: h.GroupLocation.NEXT },
									wt,
									!0,
								)),
								wt)
							) {
								Ti.add(wt.id);
								const We = wt.getEditors(E.EditorsOrder.SEQUENTIAL);
								if (We.length > 0) return { editor: We[0], groupId: wt.id };
							}
					}
				}
				e.$csc = Se;
				class ke extends Be {
					constructor() {
						super({
							id: "workbench.action.previousEditor",
							title: (0, t.localize2)(3347, "Open Previous Editor"),
							f1: !0,
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								primary: I.KeyMod.CtrlCmd | I.KeyCode.PageUp,
								mac: {
									primary:
										I.KeyMod.CtrlCmd | I.KeyMod.Alt | I.KeyCode.LeftArrow,
									secondary: [
										I.KeyMod.CtrlCmd | I.KeyMod.Shift | I.KeyCode.BracketLeft,
									],
								},
							},
							category: k.$ck.View,
						});
					}
					a(Yt) {
						const ni = Yt.activeGroup,
							bi = ni.getEditors(E.EditorsOrder.SEQUENTIAL),
							fi = ni.activeEditor ? bi.indexOf(ni.activeEditor) : -1;
						if (fi > 0) return { editor: bi[fi - 1], groupId: ni.id };
						const Ti = new Set();
						let wt = Yt.activeGroup;
						for (; wt && !Ti.has(wt.id); )
							if (
								((wt = Yt.findGroup(
									{ location: h.GroupLocation.PREVIOUS },
									wt,
									!0,
								)),
								wt)
							) {
								Ti.add(wt.id);
								const We = wt.getEditors(E.EditorsOrder.SEQUENTIAL);
								if (We.length > 0)
									return { editor: We[We.length - 1], groupId: wt.id };
							}
					}
				}
				e.$dsc = ke;
				class Ue extends Be {
					constructor() {
						super({
							id: "workbench.action.nextEditorInGroup",
							title: (0, t.localize2)(3348, "Open Next Editor in Group"),
							f1: !0,
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								primary: (0, I.$os)(
									I.$ps,
									I.KeyMod.CtrlCmd | I.KeyCode.PageDown,
								),
								mac: {
									primary: (0, I.$os)(
										I.$qs,
										I.KeyMod.CtrlCmd | I.KeyMod.Alt | I.KeyCode.RightArrow,
									),
								},
							},
							category: k.$ck.View,
						});
					}
					a(Yt) {
						const ni = Yt.activeGroup,
							bi = ni.getEditors(E.EditorsOrder.SEQUENTIAL),
							fi = ni.activeEditor ? bi.indexOf(ni.activeEditor) : -1;
						return {
							editor: fi + 1 < bi.length ? bi[fi + 1] : bi[0],
							groupId: ni.id,
						};
					}
				}
				e.$esc = Ue;
				class qe extends Be {
					constructor() {
						super({
							id: "workbench.action.previousEditorInGroup",
							title: (0, t.localize2)(3349, "Open Previous Editor in Group"),
							f1: !0,
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								primary: (0, I.$os)(I.$ps, I.KeyMod.CtrlCmd | I.KeyCode.PageUp),
								mac: {
									primary: (0, I.$os)(
										I.$qs,
										I.KeyMod.CtrlCmd | I.KeyMod.Alt | I.KeyCode.LeftArrow,
									),
								},
							},
							category: k.$ck.View,
						});
					}
					a(Yt) {
						const ni = Yt.activeGroup,
							bi = ni.getEditors(E.EditorsOrder.SEQUENTIAL),
							fi = ni.activeEditor ? bi.indexOf(ni.activeEditor) : -1;
						return {
							editor: fi > 0 ? bi[fi - 1] : bi[bi.length - 1],
							groupId: ni.id,
						};
					}
				}
				e.$fsc = qe;
				class Ae extends Be {
					constructor() {
						super({
							id: "workbench.action.firstEditorInGroup",
							title: (0, t.localize2)(3350, "Open First Editor in Group"),
							f1: !0,
							category: k.$ck.View,
						});
					}
					a(Yt) {
						const ni = Yt.activeGroup;
						return {
							editor: ni.getEditors(E.EditorsOrder.SEQUENTIAL)[0],
							groupId: ni.id,
						};
					}
				}
				e.$gsc = Ae;
				class Me extends Be {
					constructor() {
						super({
							id: "workbench.action.lastEditorInGroup",
							title: (0, t.localize2)(3351, "Open Last Editor in Group"),
							f1: !0,
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								primary: I.KeyMod.Alt | I.KeyCode.Digit0,
								secondary: [I.KeyMod.CtrlCmd | I.KeyCode.Digit9],
								mac: {
									primary: I.KeyMod.WinCtrl | I.KeyCode.Digit0,
									secondary: [I.KeyMod.CtrlCmd | I.KeyCode.Digit9],
								},
							},
							category: k.$ck.View,
						});
					}
					a(Yt) {
						const ni = Yt.activeGroup,
							bi = ni.getEditors(E.EditorsOrder.SEQUENTIAL);
						return { editor: bi[bi.length - 1], groupId: ni.id };
					}
				}
				e.$hsc = Me;
				class De extends v.$3X {
					static {
						this.ID = "workbench.action.navigateForward";
					}
					static {
						this.LABEL = (0, t.localize)(3291, null);
					}
					constructor() {
						super({
							id: De.ID,
							title: {
								...(0, t.localize2)(3352, "Go Forward"),
								mnemonicTitle: (0, t.localize)(3292, null),
							},
							f1: !0,
							icon: b.$ak.arrowRight,
							precondition: S.$Kj.has("canNavigateForward"),
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								win: { primary: I.KeyMod.Alt | I.KeyCode.RightArrow },
								mac: {
									primary: I.KeyMod.WinCtrl | I.KeyMod.Shift | I.KeyCode.Minus,
								},
								linux: {
									primary: I.KeyMod.CtrlCmd | I.KeyMod.Shift | I.KeyCode.Minus,
								},
							},
							menu: [
								{ id: v.$XX.MenubarGoMenu, group: "1_history_nav", order: 2 },
								{ id: v.$XX.CommandCenter, order: 2 },
							],
						});
					}
					async run(Yt) {
						await Yt.get(m.$Feb).goForward(m.GoFilter.NONE);
					}
				}
				e.$isc = De;
				class Re extends v.$3X {
					static {
						this.ID = "workbench.action.navigateBack";
					}
					static {
						this.LABEL = (0, t.localize)(3293, null);
					}
					constructor() {
						super({
							id: Re.ID,
							title: {
								...(0, t.localize2)(3353, "Go Back"),
								mnemonicTitle: (0, t.localize)(3294, null),
							},
							f1: !0,
							precondition: S.$Kj.has("canNavigateBack"),
							icon: b.$ak.arrowLeft,
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								win: { primary: I.KeyMod.Alt | I.KeyCode.LeftArrow },
								mac: { primary: I.KeyMod.WinCtrl | I.KeyCode.Minus },
								linux: {
									primary: I.KeyMod.CtrlCmd | I.KeyMod.Alt | I.KeyCode.Minus,
								},
							},
							menu: [
								{ id: v.$XX.MenubarGoMenu, group: "1_history_nav", order: 1 },
								{ id: v.$XX.CommandCenter, order: 1 },
							],
						});
					}
					async run(Yt) {
						await Yt.get(m.$Feb).goBack(m.GoFilter.NONE);
					}
				}
				e.$jsc = Re;
				class je extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.navigateLast",
							title: (0, t.localize2)(3354, "Go Previous"),
							f1: !0,
						});
					}
					async run(Yt) {
						await Yt.get(m.$Feb).goPrevious(m.GoFilter.NONE);
					}
				}
				e.$ksc = je;
				class Ve extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.navigateForwardInEditLocations",
							title: (0, t.localize2)(3355, "Go Forward in Edit Locations"),
							f1: !0,
						});
					}
					async run(Yt) {
						await Yt.get(m.$Feb).goForward(m.GoFilter.EDITS);
					}
				}
				e.$lsc = Ve;
				class Ze extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.navigateBackInEditLocations",
							title: (0, t.localize2)(3356, "Go Back in Edit Locations"),
							f1: !0,
						});
					}
					async run(Yt) {
						await Yt.get(m.$Feb).goBack(m.GoFilter.EDITS);
					}
				}
				e.$msc = Ze;
				class et extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.navigatePreviousInEditLocations",
							title: (0, t.localize2)(3357, "Go Previous in Edit Locations"),
							f1: !0,
						});
					}
					async run(Yt) {
						await Yt.get(m.$Feb).goPrevious(m.GoFilter.EDITS);
					}
				}
				e.$nsc = et;
				class rt extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.navigateToLastEditLocation",
							title: (0, t.localize2)(3358, "Go to Last Edit Location"),
							f1: !0,
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								primary: (0, I.$os)(I.$ps, I.KeyMod.CtrlCmd | I.KeyCode.KeyQ),
								mac: {
									primary: (0, I.$os)(I.$qs, I.KeyMod.CtrlCmd | I.KeyCode.KeyQ),
								},
							},
						});
					}
					async run(Yt) {
						await Yt.get(m.$Feb).goLast(m.GoFilter.EDITS);
					}
				}
				e.$osc = rt;
				class ft extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.navigateForwardInNavigationLocations",
							title: (0, t.localize2)(
								3359,
								"Go Forward in Navigation Locations",
							),
							f1: !0,
						});
					}
					async run(Yt) {
						await Yt.get(m.$Feb).goForward(m.GoFilter.NAVIGATION);
					}
				}
				e.$psc = ft;
				class bt extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.navigateBackInNavigationLocations",
							title: (0, t.localize2)(3360, "Go Back in Navigation Locations"),
							f1: !0,
						});
					}
					async run(Yt) {
						await Yt.get(m.$Feb).goBack(m.GoFilter.NAVIGATION);
					}
				}
				e.$qsc = bt;
				class nt extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.navigatePreviousInNavigationLocations",
							title: (0, t.localize2)(
								3361,
								"Go Previous in Navigation Locations",
							),
							f1: !0,
						});
					}
					async run(Yt) {
						await Yt.get(m.$Feb).goPrevious(m.GoFilter.NAVIGATION);
					}
				}
				e.$rsc = nt;
				class lt extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.navigateToLastNavigationLocation",
							title: (0, t.localize2)(3362, "Go to Last Navigation Location"),
							f1: !0,
						});
					}
					async run(Yt) {
						await Yt.get(m.$Feb).goLast(m.GoFilter.NAVIGATION);
					}
				}
				e.$ssc = lt;
				class ct extends v.$3X {
					static {
						this.ID = "workbench.action.reopenClosedEditor";
					}
					constructor() {
						super({
							id: ct.ID,
							title: (0, t.localize2)(3363, "Reopen Closed Editor"),
							f1: !0,
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								primary: I.KeyMod.CtrlCmd | I.KeyMod.Shift | I.KeyCode.KeyT,
							},
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						await Yt.get(m.$Feb).reopenLastClosedEditor();
					}
				}
				e.$tsc = ct;
				class gt extends v.$3X {
					static {
						this.ID = "workbench.action.clearRecentFiles";
					}
					constructor() {
						super({
							id: gt.ID,
							title: (0, t.localize2)(3364, "Clear Recently Opened..."),
							f1: !0,
							category: k.$ck.File,
						});
					}
					async run(Yt) {
						const ni = Yt.get(p.$GO),
							bi = Yt.get(g.$cRb),
							fi = Yt.get(m.$Feb),
							{ confirmed: Ti } = await ni.confirm({
								type: "warning",
								message: (0, t.localize)(3295, null),
								detail: (0, t.localize)(3296, null),
								primaryButton: (0, t.localize)(3297, null),
							});
						Ti && (bi.clearRecentlyOpened(), fi.clearRecentlyOpened());
					}
				}
				e.$usc = gt;
				class ht extends v.$3X {
					static {
						this.ID = "workbench.action.showEditorsInActiveGroup";
					}
					constructor() {
						super({
							id: ht.ID,
							title: (0, t.localize2)(
								3365,
								"Show Editors in Active Group By Most Recently Used",
							),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						Yt.get(o.$DJ).quickAccess.show(f.$sVb.PREFIX);
					}
				}
				e.$vsc = ht;
				class Rt extends v.$3X {
					static {
						this.ID = "workbench.action.showAllEditors";
					}
					constructor() {
						super({
							id: Rt.ID,
							title: (0, t.localize2)(3366, "Show All Editors By Appearance"),
							f1: !0,
							keybinding: {
								weight: T.KeybindingWeight.WorkbenchContrib,
								primary: (0, I.$os)(I.$ps, I.KeyMod.CtrlCmd | I.KeyCode.KeyP),
								mac: {
									primary: I.KeyMod.CtrlCmd | I.KeyMod.Alt | I.KeyCode.Tab,
								},
							},
							category: k.$ck.File,
						});
					}
					async run(Yt) {
						Yt.get(o.$DJ).quickAccess.show(f.$tVb.PREFIX);
					}
				}
				e.$wsc = Rt;
				class Nt extends v.$3X {
					static {
						this.ID = "workbench.action.showAllEditorsByMostRecentlyUsed";
					}
					constructor() {
						super({
							id: Nt.ID,
							title: (0, t.localize2)(
								3367,
								"Show All Editors By Most Recently Used",
							),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						Yt.get(o.$DJ).quickAccess.show(f.$uVb.PREFIX);
					}
				}
				e.$xsc = Nt;
				class jt extends v.$3X {
					constructor(Yt, ni, bi) {
						super(Yt), (this.a = ni), (this.b = bi);
					}
					async run(Yt) {
						const ni = Yt.get(r.$uZ),
							bi = Yt.get(o.$DJ),
							fi = ni.lookupKeybindings(this.desc.id);
						bi.quickAccess.show(this.a, {
							quickNavigateConfiguration: { keybindings: fi },
							itemActivation: this.b,
						});
					}
				}
				class ti extends jt {
					constructor() {
						super(
							{
								id: "workbench.action.quickOpenPreviousRecentlyUsedEditor",
								title: (0, t.localize2)(
									3368,
									"Quick Open Previous Recently Used Editor",
								),
								f1: !0,
								category: k.$ck.View,
							},
							f.$uVb.PREFIX,
							void 0,
						);
					}
				}
				e.$ysc = ti;
				class kt extends jt {
					constructor() {
						super(
							{
								id: "workbench.action.quickOpenLeastRecentlyUsedEditor",
								title: (0, t.localize2)(
									3369,
									"Quick Open Least Recently Used Editor",
								),
								f1: !0,
								category: k.$ck.View,
							},
							f.$uVb.PREFIX,
							void 0,
						);
					}
				}
				e.$zsc = kt;
				class hi extends jt {
					constructor() {
						super(
							{
								id: "workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup",
								title: (0, t.localize2)(
									3370,
									"Quick Open Previous Recently Used Editor in Group",
								),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: I.KeyMod.CtrlCmd | I.KeyCode.Tab,
									mac: { primary: I.KeyMod.WinCtrl | I.KeyCode.Tab },
								},
								precondition: L.$ZPb.toNegated(),
								category: k.$ck.View,
							},
							f.$sVb.PREFIX,
							void 0,
						);
					}
				}
				e.$Asc = hi;
				class Kt extends jt {
					constructor() {
						super(
							{
								id: "workbench.action.quickOpenLeastRecentlyUsedEditorInGroup",
								title: (0, t.localize2)(
									3371,
									"Quick Open Least Recently Used Editor in Group",
								),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: I.KeyMod.CtrlCmd | I.KeyMod.Shift | I.KeyCode.Tab,
									mac: {
										primary: I.KeyMod.WinCtrl | I.KeyMod.Shift | I.KeyCode.Tab,
									},
								},
								precondition: L.$ZPb.toNegated(),
								category: k.$ck.View,
							},
							f.$sVb.PREFIX,
							o.ItemActivation.LAST,
						);
					}
				}
				e.$Bsc = Kt;
				class di extends v.$3X {
					static {
						this.a = "workbench.action.openPreviousEditorFromHistory";
					}
					constructor() {
						super({
							id: di.a,
							title: (0, t.localize2)(
								3372,
								"Quick Open Previous Editor from History",
							),
							f1: !0,
						});
					}
					async run(Yt) {
						const ni = Yt.get(r.$uZ),
							bi = Yt.get(o.$DJ),
							fi = Yt.get(h.$EY),
							Ti = ni.lookupKeybindings(di.a);
						let wt;
						fi.activeGroup.count === 0 && (wt = o.ItemActivation.FIRST),
							bi.quickAccess.show("", {
								quickNavigateConfiguration: { keybindings: Ti },
								itemActivation: wt,
							});
					}
				}
				e.$Csc = di;
				class Ye extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.openNextRecentlyUsedEditor",
							title: (0, t.localize2)(3373, "Open Next Recently Used Editor"),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						Yt.get(m.$Feb).openNextRecentlyUsedEditor();
					}
				}
				e.$Dsc = Ye;
				class ze extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.openPreviousRecentlyUsedEditor",
							title: (0, t.localize2)(
								3374,
								"Open Previous Recently Used Editor",
							),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						Yt.get(m.$Feb).openPreviouslyUsedEditor();
					}
				}
				e.$Esc = ze;
				class Xe extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.openNextRecentlyUsedEditorInGroup",
							title: (0, t.localize2)(
								3375,
								"Open Next Recently Used Editor In Group",
							),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						const ni = Yt.get(m.$Feb),
							bi = Yt.get(h.$EY);
						ni.openNextRecentlyUsedEditor(bi.activeGroup.id);
					}
				}
				e.$Fsc = Xe;
				class It extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.openPreviousRecentlyUsedEditorInGroup",
							title: (0, t.localize2)(
								3376,
								"Open Previous Recently Used Editor In Group",
							),
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						const ni = Yt.get(m.$Feb),
							bi = Yt.get(h.$EY);
						ni.openPreviouslyUsedEditor(bi.activeGroup.id);
					}
				}
				e.$Gsc = It;
				class Lt extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.clearEditorHistory",
							title: (0, t.localize2)(3377, "Clear Editor History"),
							f1: !0,
						});
					}
					async run(Yt) {
						const ni = Yt.get(p.$GO),
							bi = Yt.get(m.$Feb),
							{ confirmed: fi } = await ni.confirm({
								type: "warning",
								message: (0, t.localize)(3298, null),
								detail: (0, t.localize)(3299, null),
								primaryButton: (0, t.localize)(3300, null),
							});
						fi && bi.clear();
					}
				}
				e.$Hsc = Lt;
				class xt extends R {
					constructor() {
						super(
							{
								id: "workbench.action.moveEditorLeftInGroup",
								title: (0, t.localize2)(3378, "Move Editor Left"),
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: I.KeyMod.CtrlCmd | I.KeyMod.Shift | I.KeyCode.PageUp,
									mac: {
										primary: (0, I.$os)(
											I.$qs,
											I.KeyMod.CtrlCmd | I.KeyMod.Shift | I.KeyCode.LeftArrow,
										),
									},
								},
								f1: !0,
								category: k.$ck.View,
							},
							a.$3Vb,
							{ to: "left" },
						);
					}
				}
				e.$Isc = xt;
				class Vt extends R {
					constructor() {
						super(
							{
								id: "workbench.action.moveEditorRightInGroup",
								title: (0, t.localize2)(3379, "Move Editor Right"),
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary:
										I.KeyMod.CtrlCmd | I.KeyMod.Shift | I.KeyCode.PageDown,
									mac: {
										primary: (0, I.$os)(
											I.$qs,
											I.KeyMod.CtrlCmd | I.KeyMod.Shift | I.KeyCode.RightArrow,
										),
									},
								},
								f1: !0,
								category: k.$ck.View,
							},
							a.$3Vb,
							{ to: "right" },
						);
					}
				}
				e.$Jsc = Vt;
				class Bt extends R {
					constructor() {
						super(
							{
								id: "workbench.action.moveEditorToPreviousGroup",
								title: (0, t.localize2)(
									3380,
									"Move Editor into Previous Group",
								),
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary:
										I.KeyMod.CtrlCmd | I.KeyMod.Alt | I.KeyCode.LeftArrow,
									mac: {
										primary:
											I.KeyMod.CtrlCmd | I.KeyMod.WinCtrl | I.KeyCode.LeftArrow,
									},
								},
								f1: !0,
								category: k.$ck.View,
							},
							a.$3Vb,
							{ to: "previous", by: "group" },
						);
					}
				}
				e.$Ksc = Bt;
				class Gt extends R {
					constructor() {
						super(
							{
								id: "workbench.action.moveEditorToNextGroup",
								title: (0, t.localize2)(3381, "Move Editor into Next Group"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary:
										I.KeyMod.CtrlCmd | I.KeyMod.Alt | I.KeyCode.RightArrow,
									mac: {
										primary:
											I.KeyMod.CtrlCmd |
											I.KeyMod.WinCtrl |
											I.KeyCode.RightArrow,
									},
								},
								category: k.$ck.View,
							},
							a.$3Vb,
							{ to: "next", by: "group" },
						);
					}
				}
				e.$Lsc = Gt;
				class Mt extends R {
					constructor() {
						super(
							{
								id: "workbench.action.moveEditorToAboveGroup",
								title: (0, t.localize2)(3382, "Move Editor into Group Above"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$3Vb,
							{ to: "up", by: "group" },
						);
					}
				}
				e.$Msc = Mt;
				class Ut extends R {
					constructor() {
						super(
							{
								id: "workbench.action.moveEditorToBelowGroup",
								title: (0, t.localize2)(3383, "Move Editor into Group Below"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$3Vb,
							{ to: "down", by: "group" },
						);
					}
				}
				e.$Nsc = Ut;
				class ei extends R {
					constructor() {
						super(
							{
								id: "workbench.action.moveEditorToLeftGroup",
								title: (0, t.localize2)(3384, "Move Editor into Left Group"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$3Vb,
							{ to: "left", by: "group" },
						);
					}
				}
				e.$Osc = ei;
				class mi extends R {
					constructor() {
						super(
							{
								id: "workbench.action.moveEditorToRightGroup",
								title: (0, t.localize2)(3385, "Move Editor into Right Group"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$3Vb,
							{ to: "right", by: "group" },
						);
					}
				}
				e.$Psc = mi;
				class ii extends R {
					constructor() {
						super(
							{
								id: "workbench.action.moveEditorToFirstGroup",
								title: (0, t.localize2)(3386, "Move Editor into First Group"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: I.KeyMod.Shift | I.KeyMod.Alt | I.KeyCode.Digit1,
									mac: {
										primary:
											I.KeyMod.CtrlCmd | I.KeyMod.WinCtrl | I.KeyCode.Digit1,
									},
								},
								category: k.$ck.View,
							},
							a.$3Vb,
							{ to: "first", by: "group" },
						);
					}
				}
				e.$Qsc = ii;
				class Dt extends R {
					constructor() {
						super(
							{
								id: "workbench.action.moveEditorToLastGroup",
								title: (0, t.localize2)(3387, "Move Editor into Last Group"),
								f1: !0,
								keybinding: {
									weight: T.KeybindingWeight.WorkbenchContrib,
									primary: I.KeyMod.Shift | I.KeyMod.Alt | I.KeyCode.Digit9,
									mac: {
										primary:
											I.KeyMod.CtrlCmd | I.KeyMod.WinCtrl | I.KeyCode.Digit9,
									},
								},
								category: k.$ck.View,
							},
							a.$3Vb,
							{ to: "last", by: "group" },
						);
					}
				}
				e.$Rsc = Dt;
				class Jt extends R {
					constructor() {
						super(
							{
								id: "workbench.action.splitEditorToPreviousGroup",
								title: (0, t.localize2)(
									3388,
									"Split Editor into Previous Group",
								),
								f1: !0,
								category: k.$ck.View,
							},
							a.$4Vb,
							{ to: "previous", by: "group" },
						);
					}
				}
				e.$Ssc = Jt;
				class si extends R {
					constructor() {
						super(
							{
								id: "workbench.action.splitEditorToNextGroup",
								title: (0, t.localize2)(3389, "Split Editor into Next Group"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$4Vb,
							{ to: "next", by: "group" },
						);
					}
				}
				e.$Tsc = si;
				class Zt extends R {
					constructor() {
						super(
							{
								id: "workbench.action.splitEditorToAboveGroup",
								title: (0, t.localize2)(3390, "Split Editor into Group Above"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$4Vb,
							{ to: "up", by: "group" },
						);
					}
				}
				e.$Usc = Zt;
				class ci extends R {
					constructor() {
						super(
							{
								id: "workbench.action.splitEditorToBelowGroup",
								title: (0, t.localize2)(3391, "Split Editor into Group Below"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$4Vb,
							{ to: "down", by: "group" },
						);
					}
				}
				e.$Vsc = ci;
				class ri extends R {
					static {
						this.ID = "workbench.action.splitEditorToLeftGroup";
					}
					static {
						this.LABEL = (0, t.localize)(3301, null);
					}
					constructor() {
						super(
							{
								id: "workbench.action.splitEditorToLeftGroup",
								title: (0, t.localize2)(3392, "Split Editor into Left Group"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$4Vb,
							{ to: "left", by: "group" },
						);
					}
				}
				e.$Wsc = ri;
				class $i extends R {
					constructor() {
						super(
							{
								id: "workbench.action.splitEditorToRightGroup",
								title: (0, t.localize2)(3393, "Split Editor into Right Group"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$4Vb,
							{ to: "right", by: "group" },
						);
					}
				}
				e.$Xsc = $i;
				class Wt extends R {
					constructor() {
						super(
							{
								id: "workbench.action.splitEditorToFirstGroup",
								title: (0, t.localize2)(3394, "Split Editor into First Group"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$4Vb,
							{ to: "first", by: "group" },
						);
					}
				}
				e.$Ysc = Wt;
				class tt extends R {
					constructor() {
						super(
							{
								id: "workbench.action.splitEditorToLastGroup",
								title: (0, t.localize2)(3395, "Split Editor into Last Group"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$4Vb,
							{ to: "last", by: "group" },
						);
					}
				}
				e.$Zsc = tt;
				class at extends R {
					static {
						this.ID = "workbench.action.editorLayoutSingle";
					}
					constructor() {
						super(
							{
								id: at.ID,
								title: (0, t.localize2)(3396, "Single Column Editor Layout"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$5Vb,
							{ groups: [{}], orientation: h.GroupOrientation.HORIZONTAL },
						);
					}
				}
				e.$1sc = at;
				class pi extends R {
					static {
						this.ID = "workbench.action.editorLayoutTwoColumns";
					}
					constructor() {
						super(
							{
								id: pi.ID,
								title: (0, t.localize2)(3397, "Two Columns Editor Layout"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$5Vb,
							{ groups: [{}, {}], orientation: h.GroupOrientation.HORIZONTAL },
						);
					}
				}
				e.$2sc = pi;
				class Li extends R {
					static {
						this.ID = "workbench.action.editorLayoutThreeColumns";
					}
					constructor() {
						super(
							{
								id: Li.ID,
								title: (0, t.localize2)(3398, "Three Columns Editor Layout"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$5Vb,
							{
								groups: [{}, {}, {}],
								orientation: h.GroupOrientation.HORIZONTAL,
							},
						);
					}
				}
				e.$3sc = Li;
				class Di extends R {
					static {
						this.ID = "workbench.action.editorLayoutTwoRows";
					}
					constructor() {
						super(
							{
								id: Di.ID,
								title: (0, t.localize2)(3399, "Two Rows Editor Layout"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$5Vb,
							{ groups: [{}, {}], orientation: h.GroupOrientation.VERTICAL },
						);
					}
				}
				e.$4sc = Di;
				class Ui extends R {
					static {
						this.ID = "workbench.action.editorLayoutThreeRows";
					}
					constructor() {
						super(
							{
								id: Ui.ID,
								title: (0, t.localize2)(3400, "Three Rows Editor Layout"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$5Vb,
							{
								groups: [{}, {}, {}],
								orientation: h.GroupOrientation.VERTICAL,
							},
						);
					}
				}
				e.$5sc = Ui;
				class Wi extends R {
					static {
						this.ID = "workbench.action.editorLayoutTwoByTwoGrid";
					}
					constructor() {
						super(
							{
								id: Wi.ID,
								title: (0, t.localize2)(3401, "Grid Editor Layout (2x2)"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$5Vb,
							{
								groups: [{ groups: [{}, {}] }, { groups: [{}, {}] }],
								orientation: h.GroupOrientation.HORIZONTAL,
							},
						);
					}
				}
				e.$6sc = Wi;
				class Gi extends R {
					static {
						this.ID = "workbench.action.editorLayoutTwoColumnsBottom";
					}
					constructor() {
						super(
							{
								id: Gi.ID,
								title: (0, t.localize2)(
									3402,
									"Two Columns Bottom Editor Layout",
								),
								f1: !0,
								category: k.$ck.View,
							},
							a.$5Vb,
							{
								groups: [{}, { groups: [{}, {}] }],
								orientation: h.GroupOrientation.VERTICAL,
							},
						);
					}
				}
				e.$7sc = Gi;
				class qi extends R {
					static {
						this.ID = "workbench.action.editorLayoutTwoRowsRight";
					}
					constructor() {
						super(
							{
								id: qi.ID,
								title: (0, t.localize2)(3403, "Two Rows Right Editor Layout"),
								f1: !0,
								category: k.$ck.View,
							},
							a.$5Vb,
							{
								groups: [{}, { groups: [{}, {}] }],
								orientation: h.GroupOrientation.HORIZONTAL,
							},
						);
					}
				}
				e.$8sc = qi;
				class Oi extends v.$3X {
					constructor(Yt, ni) {
						super(Yt), (this.a = ni);
					}
					async run(Yt) {
						const ni = Yt.get(h.$EY),
							bi = Yt.get(d.$mEb),
							fi = (0, D.$Ngb)(),
							Ti =
								bi.hasFocus(d.Parts.EDITOR_PART) ||
								fi.activeElement === fi.body,
							wt = ni.addGroup(ni.activeGroup, this.a);
						ni.activateGroup(wt), Ti && wt.focus();
					}
				}
				class yi extends Oi {
					constructor() {
						super(
							{
								id: "workbench.action.newGroupLeft",
								title: (0, t.localize2)(3404, "New Editor Group to the Left"),
								f1: !0,
								category: k.$ck.View,
							},
							h.GroupDirection.LEFT,
						);
					}
				}
				e.$9sc = yi;
				class Ai extends Oi {
					constructor() {
						super(
							{
								id: "workbench.action.newGroupRight",
								title: (0, t.localize2)(3405, "New Editor Group to the Right"),
								f1: !0,
								category: k.$ck.View,
							},
							h.GroupDirection.RIGHT,
						);
					}
				}
				e.$0sc = Ai;
				class li extends Oi {
					constructor() {
						super(
							{
								id: "workbench.action.newGroupAbove",
								title: (0, t.localize2)(3406, "New Editor Group Above"),
								f1: !0,
								category: k.$ck.View,
							},
							h.GroupDirection.UP,
						);
					}
				}
				e.$$sc = li;
				class Vi extends Oi {
					constructor() {
						super(
							{
								id: "workbench.action.newGroupBelow",
								title: (0, t.localize2)(3407, "New Editor Group Below"),
								f1: !0,
								category: k.$ck.View,
							},
							h.GroupDirection.DOWN,
						);
					}
				}
				e.$_sc = Vi;
				class wi extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.toggleEditorType",
							title: (0, t.localize2)(3408, "Toggle Editor Type"),
							f1: !0,
							category: k.$ck.View,
							precondition: L.$UPb,
						});
					}
					async run(Yt) {
						const ni = Yt.get(c.$IY),
							bi = Yt.get(y.$E6),
							fi = ni.activeEditorPane;
						if (!fi) return;
						const Ti = E.$A1.getCanonicalUri(fi.input);
						if (!Ti) return;
						const wt = bi
							.getEditors(Ti)
							.map((We) => We.id)
							.filter((We) => We !== fi.input.editorId);
						wt.length !== 0 &&
							(await ni.replaceEditors(
								[
									{
										editor: fi.input,
										replacement: { resource: Ti, options: { override: wt[0] } },
									},
								],
								fi.group,
							));
					}
				}
				e.$atc = wi;
				class _t extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.reopenTextEditor",
							title: (0, t.localize2)(3409, "Reopen Editor With Text Editor"),
							f1: !0,
							category: k.$ck.View,
							precondition: L.$UPb,
						});
					}
					async run(Yt) {
						const ni = Yt.get(c.$IY),
							bi = ni.activeEditorPane;
						if (!bi) return;
						const fi = E.$A1.getCanonicalUri(bi.input);
						fi &&
							(await ni.replaceEditors(
								[
									{
										editor: bi.input,
										replacement: {
											resource: fi,
											options: { override: E.$b1.id },
										},
									},
								],
								bi.group,
							));
					}
				}
				e.$btc = _t;
				class ai extends v.$3X {
					constructor(Yt, ni, bi, fi) {
						super({
							id: Yt,
							title: ni,
							category: k.$ck.View,
							precondition: L.$TPb,
							keybinding: bi,
							f1: !0,
						}),
							(this.a = fi);
					}
					async run(Yt, ...ni) {
						const bi = Yt.get(h.$EY),
							fi = (0, N.$TVb)(ni, Yt.get(c.$IY), bi, Yt.get(A.$fMb));
						if (!fi.groupedEditors.length) return;
						const Ti = await bi.createAuxiliaryEditorPart(),
							{ group: wt, editors: We } = fi.groupedEditors[0],
							_e = { preserveFocus: fi.preserveFocus },
							Si = We.map((gi) => ({ editor: gi, options: _e }));
						this.a
							? wt.moveEditors(Si, Ti.activeGroup)
							: wt.copyEditors(Si, Ti.activeGroup),
							Ti.activeGroup.focus();
					}
				}
				class Ft extends ai {
					constructor() {
						super(
							a.$uWb,
							{
								...(0, t.localize2)(3410, "Move Editor into New Window"),
								mnemonicTitle: (0, t.localize)(3302, null),
							},
							void 0,
							!0,
						);
					}
				}
				e.$ctc = Ft;
				class Xt extends ai {
					constructor() {
						super(
							a.$vWb,
							{
								...(0, t.localize2)(3411, "Copy Editor into New Window"),
								mnemonicTitle: (0, t.localize)(3303, null),
							},
							{
								primary: (0, I.$os)(I.$ps, I.KeyCode.KeyO),
								weight: T.KeybindingWeight.WorkbenchContrib,
								mac: { primary: (0, I.$os)(I.$qs, I.KeyCode.KeyO) },
							},
							!1,
						);
					}
				}
				e.$dtc = Xt;
				class $t extends v.$3X {
					constructor(Yt, ni, bi) {
						super({ id: Yt, title: ni, category: k.$ck.View, f1: !0 }),
							(this.a = bi);
					}
					async run(Yt) {
						const ni = Yt.get(h.$EY),
							bi = ni.activeGroup,
							fi = await ni.createAuxiliaryEditorPart();
						ni.mergeGroup(bi, fi.activeGroup, {
							mode: this.a
								? h.MergeGroupMode.MOVE_EDITORS
								: h.MergeGroupMode.COPY_EDITORS,
						}),
							fi.activeGroup.focus();
					}
				}
				class ut extends $t {
					constructor() {
						super(
							a.$wWb,
							{
								...(0, t.localize2)(3412, "Move Editor Group into New Window"),
								mnemonicTitle: (0, t.localize)(3304, null),
							},
							!0,
						);
					}
				}
				e.$etc = ut;
				class Et extends $t {
					constructor() {
						super(
							a.$xWb,
							{
								...(0, t.localize2)(3413, "Copy Editor Group into New Window"),
								mnemonicTitle: (0, t.localize)(3305, null),
							},
							!1,
						);
					}
				}
				e.$ftc = Et;
				class Tt extends v.$3X {
					constructor() {
						super({
							id: "workbench.action.restoreEditorsToMainWindow",
							title: {
								...(0, t.localize2)(3414, "Restore Editors into Main Window"),
								mnemonicTitle: (0, t.localize)(3306, null),
							},
							f1: !0,
							precondition: L.$GPb,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						const ni = Yt.get(h.$EY);
						ni.mergeAllGroups(ni.mainPart.activeGroup);
					}
				}
				e.$gtc = Tt;
				class qt extends v.$3X {
					constructor() {
						super({
							id: a.$yWb,
							title: {
								...(0, t.localize2)(3415, "New Empty Editor Window"),
								mnemonicTitle: (0, t.localize)(3307, null),
							},
							f1: !0,
							category: k.$ck.View,
						});
					}
					async run(Yt) {
						(
							await Yt.get(h.$EY).createAuxiliaryEditorPart()
						).activeGroup.focus();
					}
				}
				e.$htc = qt;
			},
		),
		