import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/network.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/uri.js';
import '../../../../nls.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/dnd/browser/dnd.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/quickinput/common/quickAccess.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/terminal/common/terminal.js';
import '../../../../platform/terminal/common/terminalLogService.js';
import '../../../../platform/terminal/common/terminalPlatformConfiguration.js';
import '../../../browser/editor.js';
import '../../../browser/parts/views/viewPaneContainer.js';
import '../../../browser/quickaccess.js';
import '../../../common/contributions.js';
import '../../../common/editor.js';
import '../../../common/views.js';
import './remoteTerminalBackend.js';
import './terminal.js';
import './terminalActions.js';
import './terminalCommands.js';
import './terminalConfigurationService.js';
import './terminalEditor.js';
import './terminalEditorInput.js';
import './terminalEditorSerializer.js';
import './terminalEditorService.js';
import './terminalGroupService.js';
import './terminalIcons.js';
import './terminalInstanceService.js';
import './terminalMainContribution.js';
import './terminalMenus.js';
import './terminalProfileService.js';
import './terminalQuickAccess.js';
import './terminalService.js';
import './terminalView.js';
import './terminalWslRecommendationContribution.js';
import '../common/terminal.js';
import '../common/terminalColorRegistry.js';
import '../common/terminalConfiguration.js';
import '../common/terminalContextKey.js';
import '../common/terminalStrings.js';
import '../../terminalContrib/suggest/common/terminalSuggestConfiguration.js';
import '../../../../css!vs/workbench/contrib/terminal/browser/media/terminal.js';
import '../../../../css!vs/workbench/contrib/terminal/browser/media/terminalVoice.js';
import '../../../../css!vs/workbench/contrib/terminal/browser/media/widgets.js';
import '../../../../css!vs/workbench/contrib/terminal/browser/media/xterm.js';
import './terminalExecutionService.js';
define(
			de[4375],
			he([
				1, 0, 27, 23, 12, 9, 4, 91, 31, 8, 347, 102, 20, 43, 348, 30, 117, 2890,
				1201, 192, 239, 473, 55, 44, 60, 3637, 107, 363, 3141, 3168, 3405, 833,
				3142, 3438, 4060, 689, 4373, 3658, 1017, 4036, 1802, 4374, 1949, 4175,
				145, 512, 1859, 237, 469, 809, 2491, 2492, 2493, 2494, 617,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(C = mt(C)),
					(0, h.$lK)(p.$YJ, o.$cUc, h.InstantiationType.Delayed),
					(0, h.$lK)(I.$jIb, k.$NUc, h.InstantiationType.Delayed),
					(0, h.$lK)(I.$iIb, x.$yVc, h.InstantiationType.Delayed),
					(0, h.$lK)(I.$kIb, N.$XUc, h.InstantiationType.Delayed),
					(0, h.$lK)(I.$lIb, A.$6Uc, h.InstantiationType.Delayed),
					(0, h.$lK)(I.$mIb, O.$sVc, h.InstantiationType.Delayed),
					(0, h.$lK)(V.$teb, z.$wVc, h.InstantiationType.Delayed),
					g.$Io
						.as(n.$1r.Quickaccess)
						.registerQuickAccessProvider({
							ctor: F.$iUc,
							prefix: F.$iUc.PREFIX,
							contextKey: "inTerminalPicker",
							placeholder: C.localize(9970, null),
							helpEntries: [
								{
									description: C.localize(9971, null),
									commandId: V.TerminalCommandId.QuickOpenTerm,
								},
							],
						});
				const ne = "workbench.action.quickOpenNavigateNextInTerminalPicker";
				m.$fk.registerCommand({ id: ne, handler: (0, l.$j9b)(ne, !0) });
				const ee = "workbench.action.quickOpenNavigatePreviousInTerminalPicker";
				m.$fk.registerCommand({ id: ee, handler: (0, l.$j9b)(ee, !1) }),
					(0, y.$s6)(B.$tVc.ID, B.$tVc, y.WorkbenchPhase.BlockStartup),
					(0, y.$s6)(S.$gUc.ID, S.$gUc, y.WorkbenchPhase.AfterRestored),
					(0, y.$s6)(q.$zVc.ID, q.$zVc, y.WorkbenchPhase.Eventually),
					(0, f.$0J)(),
					(0, K.$IVc)(),
					g.$Io
						.as($.$a1.EditorFactory)
						.registerEditorSerializer(D.$Unc.ID, M.$SUc),
					g.$Io
						.as($.$a1.EditorPane)
						.registerEditorPane(
							b.$vVb.create(L.$RUc, I.$pIb, W.$hUc.terminal),
							[new a.$Ji(D.$Unc)],
						),
					g.$Io.as(u.$nzb.DragAndDropContribution).register({
						dataFormatKey: I.TerminalDataTransfers.Terminals,
						getEditorInputs(Z) {
							const se = [];
							try {
								const re = JSON.parse(Z);
								for (const le of re) se.push({ resource: E.URI.parse(le) });
							} catch {}
							return se;
						},
						setData(Z, se) {
							const re = Z.filter(
								({ resource: le }) => le.scheme === i.Schemas.vscodeTerminal,
							);
							re.length &&
								se.dataTransfer?.setData(
									I.TerminalDataTransfers.Terminals,
									JSON.stringify(re.map(({ resource: le }) => le.toString())),
								);
						},
					});
				const _ = g.$Io
					.as(v.Extensions.ViewContainersRegistry)
					.registerViewContainer(
						{
							id: V.$geb,
							title: C.localize2(9973, "Terminal"),
							icon: R.$VHb,
							ctorDescriptor: new a.$Ji(s.$ZSb, [
								V.$geb,
								{ mergeViewWithContainerWhenSingleView: !0 },
							]),
							storageId: V.$geb,
							hideIfEmpty: !0,
							order: 3,
						},
						v.ViewContainerLocation.Panel,
						{ doNotRegisterOpenCommand: !0, isDefault: !0 },
					);
				g.$Io
					.as(v.Extensions.ViewsRegistry)
					.registerViews(
						[
							{
								id: V.$geb,
								name: C.localize2(9974, "Terminal"),
								containerIcon: R.$VHb,
								canToggleVisibility: !1,
								canMoveView: !0,
								ctorDescriptor: new a.$Ji(H.$5Uc),
								openCommandActionDescriptor: {
									id: V.TerminalCommandId.Toggle,
									mnemonicTitle: C.localize(9972, null),
									keybindings: {
										primary: t.KeyMod.CtrlCmd | t.KeyCode.Backquote,
										mac: { primary: t.KeyMod.WinCtrl | t.KeyCode.Backquote },
									},
									order: 3,
								},
							},
						],
						_,
					),
					(0, T.$IUc)();
				function te(Z, se) {
					c.$TX.registerCommandAndKeybindingRule({
						id: V.TerminalCommandId.SendSequence,
						weight: c.KeybindingWeight.WorkbenchContrib,
						when: se.when || J.TerminalContextKeys.focus,
						primary: se.primary,
						mac: se.mac,
						linux: se.linux,
						win: se.win,
						handler: T.$CUc,
						args: { text: Z },
					});
				}
				var Q;
				(function (Z) {
					Z[(Z.CtrlLetterOffset = 64)] = "CtrlLetterOffset";
				})(Q || (Q = {})),
					w.$l &&
						te(String.fromCharCode(86 - Q.CtrlLetterOffset), {
							when: r.$Kj.and(
								J.TerminalContextKeys.focus,
								r.$Kj.equals(
									J.TerminalContextKeyStrings.ShellType,
									p.GeneralShellType.PowerShell,
								),
								d.$YK.negate(),
							),
							primary: t.KeyMod.CtrlCmd | t.KeyCode.KeyV,
						}),
					te("\x1B[24~a", {
						when: r.$Kj.and(
							J.TerminalContextKeys.focus,
							r.$Kj.equals(
								J.TerminalContextKeyStrings.ShellType,
								p.GeneralShellType.PowerShell,
							),
							J.TerminalContextKeys.terminalShellIntegrationEnabled,
							d.$YK.negate(),
						),
						primary: t.KeyMod.CtrlCmd | t.KeyCode.Space,
						mac: { primary: t.KeyMod.WinCtrl | t.KeyCode.Space },
					}),
					te("\x1B[24~b", {
						when: r.$Kj.and(
							J.TerminalContextKeys.focus,
							r.$Kj.equals(
								J.TerminalContextKeyStrings.ShellType,
								p.GeneralShellType.PowerShell,
							),
							J.TerminalContextKeys.terminalShellIntegrationEnabled,
							d.$YK.negate(),
						),
						primary: t.KeyMod.Alt | t.KeyCode.Space,
					}),
					te("\x1B[24~c", {
						when: r.$Kj.and(
							J.TerminalContextKeys.focus,
							r.$Kj.equals(
								J.TerminalContextKeyStrings.ShellType,
								p.GeneralShellType.PowerShell,
							),
							J.TerminalContextKeys.terminalShellIntegrationEnabled,
							d.$YK.negate(),
						),
						primary: t.KeyMod.Shift | t.KeyCode.Enter,
					}),
					te("\x1B[24~d", {
						when: r.$Kj.and(
							J.TerminalContextKeys.focus,
							r.$Kj.equals(
								J.TerminalContextKeyStrings.ShellType,
								p.GeneralShellType.PowerShell,
							),
							J.TerminalContextKeys.terminalShellIntegrationEnabled,
							d.$YK.negate(),
						),
						mac: {
							primary: t.KeyMod.Shift | t.KeyMod.CtrlCmd | t.KeyCode.RightArrow,
						},
					}),
					te("\x1B[24~e", {
						when: r.$Kj.and(
							J.TerminalContextKeys.focus,
							r.$Kj.equals(
								J.TerminalContextKeyStrings.ShellType,
								p.GeneralShellType.PowerShell,
							),
							J.TerminalContextKeys.terminalShellIntegrationEnabled,
							d.$YK.negate(),
							r.$Kj.equals(`config.${X.TerminalSuggestSettingId.Enabled}`, !0),
						),
						primary: t.KeyMod.CtrlCmd | t.KeyCode.Space,
						mac: { primary: t.KeyMod.WinCtrl | t.KeyCode.Space },
					}),
					te("\x1B[1;2H", {
						when: r.$Kj.and(
							J.TerminalContextKeys.focus,
							r.$Kj.equals(
								J.TerminalContextKeyStrings.ShellType,
								p.GeneralShellType.PowerShell,
							),
						),
						mac: {
							primary: t.KeyMod.Shift | t.KeyMod.CtrlCmd | t.KeyCode.LeftArrow,
						},
					}),
					te("�", {
						when: r.$Kj.and(J.TerminalContextKeys.focus, d.$YK),
						primary: t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.KeyR,
						mac: { primary: t.KeyMod.WinCtrl | t.KeyMod.Alt | t.KeyCode.KeyR },
					}),
					te("\x07", {
						when: J.TerminalContextKeys.focus,
						primary: t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.KeyG,
						mac: { primary: t.KeyMod.WinCtrl | t.KeyMod.Alt | t.KeyCode.KeyG },
					}),
					w.$u &&
						te(String.fromCharCode(67 - Q.CtrlLetterOffset), {
							when: r.$Kj.and(J.TerminalContextKeys.focus),
							primary: t.KeyMod.WinCtrl | t.KeyCode.KeyC,
						}),
					te(String.fromCharCode(87 - Q.CtrlLetterOffset), {
						primary: t.KeyMod.CtrlCmd | t.KeyCode.Backspace,
						mac: { primary: t.KeyMod.Alt | t.KeyCode.Backspace },
					}),
					w.$l &&
						te(String.fromCharCode(72 - Q.CtrlLetterOffset), {
							when: r.$Kj.and(
								J.TerminalContextKeys.focus,
								r.$Kj.equals(
									J.TerminalContextKeyStrings.ShellType,
									p.WindowsShellType.CommandPrompt,
								),
							),
							primary: t.KeyMod.CtrlCmd | t.KeyCode.Backspace,
						}),
					te("\x1Bd", {
						primary: t.KeyMod.CtrlCmd | t.KeyCode.Delete,
						mac: { primary: t.KeyMod.Alt | t.KeyCode.Delete },
					}),
					te("�", { mac: { primary: t.KeyMod.CtrlCmd | t.KeyCode.Backspace } }),
					te("�", { mac: { primary: t.KeyMod.CtrlCmd | t.KeyCode.LeftArrow } }),
					te("�", { mac: { primary: t.KeyMod.CtrlCmd | t.KeyCode.RightArrow } }),
					te("\0", {
						primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.Digit2,
						mac: {
							primary: t.KeyMod.WinCtrl | t.KeyMod.Shift | t.KeyCode.Digit2,
						},
					}),
					te("�", {
						primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.Digit6,
						mac: {
							primary: t.KeyMod.WinCtrl | t.KeyMod.Shift | t.KeyCode.Digit6,
						},
					}),
					te("�", {
						primary: t.KeyMod.CtrlCmd | t.KeyCode.Slash,
						mac: { primary: t.KeyMod.WinCtrl | t.KeyCode.Slash },
					}),
					(0, P.$MUc)(),
					(0, U.$PUc)(),
					(0, G.$FHb)();
			},
		),
		