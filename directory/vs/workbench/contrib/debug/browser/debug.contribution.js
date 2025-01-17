import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/network.js';
import '../../../../base/common/platform.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../nls.js';
import '../../../../platform/accessibility/browser/accessibleViewRegistry.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/quickinput/common/quickAccess.js';
import '../../../../platform/registry/common/platform.js';
import '../../../browser/editor.js';
import '../../../browser/parts/views/viewPaneContainer.js';
import '../../../common/contributions.js';
import '../../../common/editor.js';
import '../../../common/views.js';
import './breakpointEditorContribution.js';
import './breakpointsView.js';
import './callStackEditorContribution.js';
import './callStackView.js';
import './replAccessibleView.js';
import './debugColors.js';
import './debugCommands.js';
import './debugConsoleQuickAccess.js';
import './debugEditorActions.js';
import './debugEditorContribution.js';
import './debugIcons.js';
import './debugProgress.js';
import './debugQuickAccess.js';
import './debugService.js';
import './debugStatus.js';
import './debugTitle.js';
import './debugToolBar.js';
import './debugViewlet.js';
import './disassemblyView.js';
import './loadedScriptsView.js';
import './repl.js';
import './statusbarColorProvider.js';
import './variablesView.js';
import './watchExpressionsView.js';
import './welcomeView.js';
import '../common/debug.js';
import '../common/debugContentProvider.js';
import '../common/debugLifecycle.js';
import '../common/debugVisualizers.js';
import '../common/disassemblyViewInput.js';
import '../../notebook/browser/contrib/notebookVariables/notebookVariableCommands.js';
import '../../../services/configuration/common/configuration.js';
import '../../../services/lifecycle/common/lifecycle.js';
import './replAccessibilityHelp.js';
import '../common/replAccessibilityAnnouncer.js';
import './runAndDebugAccessibilityHelp.js';
import '../common/debugAccessibilityAnnouncer.js';
import '../../../../css!vs/workbench/contrib/debug/browser/media/debug.contribution.js';
import '../../../../css!vs/workbench/contrib/debug/browser/media/debugHover.js';
import './debugSettingMigration.js';
define(
			de[4019],
			he([
				1, 0, 27, 23, 12, 46, 4, 412, 11, 81, 8, 102, 20, 348, 30, 192, 239, 55,
				44, 60, 1331, 1049, 796, 3822, 3826, 984, 425, 3818, 3815, 1906, 352,
				3816, 3819, 3821, 3629, 3740, 1333, 1943, 1881, 3823, 847, 3630, 1334,
				3829, 1942, 112, 1800, 3423, 1039, 797, 3118, 261, 52, 3825, 3056, 3827,
				3682, 2428, 2429, 3553,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(C = mt(C)),
					(L = mt(L));
				const Z = C.localize(5287, null);
				(0, S.$OKb)(),
					(0, h.$lK)(G.$75, N.$3Qc, h.InstantiationType.Delayed),
					(0, h.$lK)(W.$D3, W.$F3, h.InstantiationType.Delayed),
					n.$Io
						.as(o.Extensions.Workbench)
						.registerWorkbenchContribution(
							A.$5Qc,
							ne.LifecyclePhase.Eventually,
						),
					n.$Io
						.as(o.Extensions.Workbench)
						.registerWorkbenchContribution(
							D.$JQc,
							ne.LifecyclePhase.Eventually,
						),
					w.$r &&
						n.$Io
							.as(o.Extensions.Workbench)
							.registerWorkbenchContribution(
								R.$6Qc,
								ne.LifecyclePhase.Eventually,
							),
					n.$Io
						.as(o.Extensions.Workbench)
						.registerWorkbenchContribution(O.$jQc, ne.LifecyclePhase.Restored),
					n.$Io
						.as(o.Extensions.Workbench)
						.registerWorkbenchContribution(
							K.$9Qc,
							ne.LifecyclePhase.Eventually,
						),
					n.$Io
						.as(o.Extensions.Workbench)
						.registerWorkbenchContribution(
							x.$cRc,
							ne.LifecyclePhase.Eventually,
						),
					n.$Io
						.as(o.Extensions.Workbench)
						.registerWorkbenchContribution(
							U.$kGc,
							ne.LifecyclePhase.Eventually,
						),
					n.$Io
						.as(o.Extensions.Workbench)
						.registerWorkbenchContribution(
							J.$kRc,
							ne.LifecyclePhase.Eventually,
						),
					n.$Io
						.as(c.$1r.Quickaccess)
						.registerQuickAccessProvider({
							ctor: M.$KQc,
							prefix: I.$5Hc,
							contextKey: "inLaunchConfigurationsPicker",
							placeholder: C.localize(5288, null),
							helpEntries: [
								{
									description: C.localize(5289, null),
									commandId: I.$hHc,
									commandCenterOrder: 50,
								},
							],
						}),
					n.$Io
						.as(c.$1r.Quickaccess)
						.registerQuickAccessProvider({
							ctor: T.$qQc,
							prefix: I.$6Hc,
							contextKey: "inDebugConsolePicker",
							placeholder: C.localize(5290, null),
							helpEntries: [
								{ description: C.localize(5291, null), commandId: I.$iHc },
							],
						}),
					(0, E.$qtb)(
						"editor.contrib.callStack",
						y.$iGc,
						E.EditorContributionInstantiation.AfterFirstRender,
					),
					(0, E.$qtb)(
						G.$15,
						s.$rGc,
						E.EditorContributionInstantiation.AfterFirstRender,
					),
					(0, E.$qtb)(
						G.$Z5,
						k.$IQc,
						E.EditorContributionInstantiation.BeforeFirstInteraction,
					);
				const se = ($e, ye, ue, fe) => {
					m.$ZX.appendMenuItem(m.$XX.CommandPalette, {
						when: u.$Kj.and(G.$y5, ue),
						group: Z,
						command: { id: $e, title: ye, category: I.$AHc, precondition: fe },
					});
				};
				se(I.$3Gc, I.$BHc),
					se(I.$4Gc, C.localize2(5383, "Terminate Thread"), G.$74),
					se(I.$5Gc, I.$CHc, G.$74, G.$24.isEqualTo("stopped")),
					se(I.$6Gc, I.$DHc, G.$74, G.$24.isEqualTo("stopped")),
					se(
						I.$7Gc,
						I.$GHc,
						G.$74,
						u.$Kj.and(G.$w5, G.$74, G.$24.isEqualTo("stopped")),
					),
					se(I.$8Gc, I.$HHc, G.$74, G.$24.isEqualTo("stopped")),
					se(
						I.$9Gc,
						I.$IHc,
						G.$74,
						u.$Kj.and(G.$24.isEqualTo("running"), G.$r5.toNegated()),
					),
					se(I.$0Gc, I.$JHc, G.$74, u.$Kj.or(G.$q5, G.$H5)),
					se(I.$$Gc, I.$KHc, G.$74, u.$Kj.or(G.$q5, u.$Kj.and(G.$I5, G.$H5))),
					se(I.$_Gc, I.$LHc, G.$74, u.$Kj.or(G.$q5.toNegated(), G.$H5)),
					se(I.$bHc, I.$MHc, G.$74, G.$24.isEqualTo("stopped")),
					se(I.$eHc, C.localize2(5384, "Focus on Debug Console View")),
					se(I.$fHc, C.localize2(5385, "Jump to Cursor"), G.$v5),
					se(I.$fHc, C.localize2(5386, "Set Next Statement"), G.$v5),
					se(P.$rQc.ID, P.$rQc.LABEL, G.$y5),
					se(P.$sQc.ID, P.$sQc.LABEL, G.$74),
					se(P.$tQc.ID, P.$tQc.LABEL),
					se(I.$YGc, C.localize2(5387, "Inline Breakpoint")),
					se(
						I.$lHc,
						I.$QHc,
						u.$Kj.and(
							G.$y5,
							G.$24.notEqualsTo((0, G.$45)(G.State.Initializing)),
						),
					),
					se(
						I.$mHc,
						I.$RHc,
						u.$Kj.and(
							G.$y5,
							G.$24.notEqualsTo((0, G.$45)(G.State.Initializing)),
						),
					),
					se(
						I.$hHc,
						I.$OHc,
						u.$Kj.and(
							G.$y5,
							G.$24.notEqualsTo((0, G.$45)(G.State.Initializing)),
						),
					),
					se(I.$qHc, I.$SHc),
					se(I.$rHc, I.$THc),
					se(I.$sHc, I.$UHc, G.$74),
					se(I.$iHc, I.$3Hc),
					se(I.$jHc, I.$4Hc),
					se(I.$tHc, I.$VHc, G.$74, G.$24.isEqualTo("stopped")),
					se(I.$uHc, I.$WHc, G.$74, G.$24.isEqualTo("stopped")),
					se(I.$vHc, I.$XHc, G.$74, G.$24.isEqualTo("stopped")),
					se(I.$wHc, I.$YHc, G.$74, G.$24.isEqualTo("stopped"));
				const re = ($e, ye, ue, fe, me, ve, ge = "navigation", be) => {
					m.$ZX.appendMenuItem($e, {
						group: ge,
						when: me,
						order: fe,
						icon: be,
						command: { id: ye, title: ue, icon: be, precondition: ve },
					});
				};
				if (
					(re(
						m.$XX.DebugCallStackContext,
						I.$3Gc,
						I.$BHc,
						10,
						G.$e5.isEqualTo("session"),
						void 0,
						"3_modification",
					),
					re(
						m.$XX.DebugCallStackContext,
						I.$0Gc,
						I.$JHc,
						20,
						G.$e5.isEqualTo("session"),
						void 0,
						"3_modification",
					),
					re(
						m.$XX.DebugCallStackContext,
						I.$$Gc,
						I.$KHc,
						21,
						u.$Kj.and(G.$e5.isEqualTo("session"), G.$I5, G.$H5),
						void 0,
						"3_modification",
					),
					re(
						m.$XX.DebugCallStackContext,
						I.$_Gc,
						I.$LHc,
						30,
						G.$e5.isEqualTo("session"),
						void 0,
						"3_modification",
					),
					re(
						m.$XX.DebugCallStackContext,
						I.$9Gc,
						I.$IHc,
						10,
						u.$Kj.and(
							G.$e5.isEqualTo("thread"),
							u.$Kj.and(G.$24.isEqualTo("running"), G.$r5.toNegated()),
						),
					),
					re(
						m.$XX.DebugCallStackContext,
						I.$bHc,
						I.$MHc,
						10,
						u.$Kj.and(G.$e5.isEqualTo("thread"), G.$24.isEqualTo("stopped")),
					),
					re(
						m.$XX.DebugCallStackContext,
						I.$5Gc,
						I.$CHc,
						20,
						G.$e5.isEqualTo("thread"),
						G.$24.isEqualTo("stopped"),
					),
					re(
						m.$XX.DebugCallStackContext,
						I.$6Gc,
						I.$DHc,
						30,
						G.$e5.isEqualTo("thread"),
						G.$24.isEqualTo("stopped"),
					),
					re(
						m.$XX.DebugCallStackContext,
						I.$8Gc,
						I.$HHc,
						40,
						G.$e5.isEqualTo("thread"),
						G.$24.isEqualTo("stopped"),
					),
					re(
						m.$XX.DebugCallStackContext,
						I.$4Gc,
						C.localize(5292, null),
						10,
						G.$e5.isEqualTo("thread"),
						void 0,
						"termination",
					),
					re(
						m.$XX.DebugCallStackContext,
						I.$aHc,
						C.localize(5293, null),
						10,
						u.$Kj.and(G.$e5.isEqualTo("stackFrame"), G.$t5),
						G.$u5,
					),
					re(
						m.$XX.DebugCallStackContext,
						I.$ZGc,
						C.localize(5294, null),
						20,
						G.$e5.isEqualTo("stackFrame"),
						void 0,
						"3_modification",
					),
					re(
						m.$XX.DebugVariablesContext,
						H.$zQc,
						C.localize(5295, null),
						15,
						G.$j5,
						G.$74,
						"inline",
						L.$KKb,
					),
					re(
						m.$XX.DebugVariablesContext,
						H.$yQc,
						C.localize(5296, null),
						10,
						u.$Kj.or(G.$B5, u.$Kj.and(G.$J5, G.$D5)),
						G.$K5.toNegated(),
						"3_modification",
					),
					re(
						m.$XX.DebugVariablesContext,
						I.$zHc,
						I.$1Hc,
						10,
						void 0,
						void 0,
						"5_cutcopypaste",
					),
					re(
						m.$XX.DebugVariablesContext,
						I.$yHc,
						I.$ZHc,
						20,
						G.$J5,
						void 0,
						"5_cutcopypaste",
					),
					re(
						m.$XX.DebugVariablesContext,
						I.$xHc,
						I.$2Hc,
						100,
						G.$J5,
						void 0,
						"z_commands",
					),
					re(
						m.$XX.DebugVariablesContext,
						H.$CQc,
						C.localize(5297, null),
						200,
						G.$G5,
						void 0,
						"z_commands",
					),
					re(
						m.$XX.DebugVariablesContext,
						H.$AQc,
						C.localize(5298, null),
						210,
						G.$E5,
						void 0,
						"z_commands",
					),
					re(
						m.$XX.DebugVariablesContext,
						H.$BQc,
						C.localize(5299, null),
						220,
						G.$F5,
						void 0,
						"z_commands",
					),
					re(
						m.$XX.DebugHoverContext,
						H.$zQc,
						C.localize(5300, null),
						15,
						G.$j5,
						G.$74,
						"inline",
						L.$KKb,
					),
					re(
						m.$XX.DebugHoverContext,
						I.$zHc,
						I.$1Hc,
						10,
						void 0,
						void 0,
						"5_cutcopypaste",
					),
					re(
						m.$XX.DebugHoverContext,
						I.$yHc,
						I.$ZHc,
						20,
						G.$J5,
						void 0,
						"5_cutcopypaste",
					),
					re(
						m.$XX.DebugHoverContext,
						I.$xHc,
						I.$2Hc,
						100,
						G.$J5,
						void 0,
						"z_commands",
					),
					re(
						m.$XX.DebugHoverContext,
						H.$CQc,
						C.localize(5301, null),
						200,
						G.$G5,
						void 0,
						"z_commands",
					),
					re(
						m.$XX.DebugHoverContext,
						H.$AQc,
						C.localize(5302, null),
						210,
						G.$E5,
						void 0,
						"z_commands",
					),
					re(
						m.$XX.DebugHoverContext,
						H.$BQc,
						C.localize(5303, null),
						220,
						G.$F5,
						void 0,
						"z_commands",
					),
					re(
						m.$XX.DebugWatchContext,
						q.$gRc,
						q.$hRc,
						10,
						void 0,
						void 0,
						"3_modification",
					),
					re(
						m.$XX.DebugWatchContext,
						I.$nHc,
						C.localize(5304, null),
						20,
						G.$i5.isEqualTo("expression"),
						void 0,
						"3_modification",
					),
					re(
						m.$XX.DebugWatchContext,
						I.$oHc,
						C.localize(5305, null),
						30,
						u.$Kj.or(
							u.$Kj.and(G.$i5.isEqualTo("expression"), G.$D5),
							u.$Kj.and(G.$i5.isEqualTo("variable"), G.$B5),
						),
						G.$K5.toNegated(),
						"3_modification",
					),
					re(
						m.$XX.DebugWatchContext,
						I.$zHc,
						C.localize(5306, null),
						40,
						u.$Kj.or(
							G.$i5.isEqualTo("expression"),
							G.$i5.isEqualTo("variable"),
						),
						G.$74,
						"3_modification",
					),
					re(
						m.$XX.DebugWatchContext,
						H.$zQc,
						C.localize(5307, null),
						10,
						G.$j5,
						void 0,
						"inline",
						L.$KKb,
					),
					re(
						m.$XX.DebugWatchContext,
						I.$pHc,
						C.localize(5308, null),
						20,
						G.$i5.isEqualTo("expression"),
						void 0,
						"inline",
						L.$CKb,
					),
					re(
						m.$XX.DebugWatchContext,
						q.$iRc,
						q.$jRc,
						20,
						void 0,
						void 0,
						"z_commands",
					),
					re(m.$XX.NotebookVariablesContext, Y.$lRc, Y.$mRc, 20, G.$L5),
					w.$m)
				) {
					const $e = (ye, ue, fe, me, ve) => {
						m.$ZX.appendMenuItem(m.$XX.TouchBarContext, {
							command: { id: ye, title: ue, icon: { dark: ve } },
							when: u.$Kj.and(G.$y5, me),
							group: "9_debug",
							order: fe,
						});
					};
					$e(
						I.$mHc,
						I.$RHc,
						0,
						G.$74.toNegated(),
						i.$7g.asFileUri(
							"vs/workbench/contrib/debug/browser/media/continue-tb.png",
						),
					),
						$e(
							I.$lHc,
							I.$QHc,
							1,
							G.$74.toNegated(),
							i.$7g.asFileUri(
								"vs/workbench/contrib/debug/browser/media/run-with-debugging-tb.png",
							),
						),
						$e(
							I.$bHc,
							I.$MHc,
							0,
							G.$24.isEqualTo("stopped"),
							i.$7g.asFileUri(
								"vs/workbench/contrib/debug/browser/media/continue-tb.png",
							),
						),
						$e(
							I.$9Gc,
							I.$IHc,
							1,
							u.$Kj.and(
								G.$74,
								u.$Kj.and(G.$24.isEqualTo("running"), G.$r5.toNegated()),
							),
							i.$7g.asFileUri(
								"vs/workbench/contrib/debug/browser/media/pause-tb.png",
							),
						),
						$e(
							I.$5Gc,
							I.$CHc,
							2,
							G.$74,
							i.$7g.asFileUri(
								"vs/workbench/contrib/debug/browser/media/stepover-tb.png",
							),
						),
						$e(
							I.$6Gc,
							I.$DHc,
							3,
							G.$74,
							i.$7g.asFileUri(
								"vs/workbench/contrib/debug/browser/media/stepinto-tb.png",
							),
						),
						$e(
							I.$8Gc,
							I.$HHc,
							4,
							G.$74,
							i.$7g.asFileUri(
								"vs/workbench/contrib/debug/browser/media/stepout-tb.png",
							),
						),
						$e(
							I.$3Gc,
							I.$BHc,
							5,
							G.$74,
							i.$7g.asFileUri(
								"vs/workbench/contrib/debug/browser/media/restart-tb.png",
							),
						),
						$e(
							I.$_Gc,
							I.$LHc,
							6,
							G.$74,
							i.$7g.asFileUri(
								"vs/workbench/contrib/debug/browser/media/stop-tb.png",
							),
						);
				}
				m.$ZX.appendMenuItem(m.$XX.EditorTitle, {
					submenu: m.$XX.EditorTitleRun,
					rememberDefaultAction: !0,
					title: C.localize2(5388, "Run or Debug..."),
					icon: L.$rKb,
					group: "navigation",
					order: -1,
				}),
					m.$ZX.appendMenuItem(m.$XX.MenubarMainMenu, {
						submenu: m.$XX.MenubarDebugMenu,
						title: {
							...C.localize2(5389, "Run"),
							mnemonicTitle: C.localize(5309, null),
						},
						order: 6,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarDebugMenu, {
						group: "1_debug",
						command: { id: I.$lHc, title: C.localize(5310, null) },
						order: 1,
						when: G.$y5,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarDebugMenu, {
						group: "1_debug",
						command: { id: I.$mHc, title: C.localize(5311, null) },
						order: 2,
						when: G.$y5,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarDebugMenu, {
						group: "1_debug",
						command: {
							id: I.$_Gc,
							title: C.localize(5312, null),
							precondition: G.$74,
						},
						order: 3,
						when: G.$y5,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarDebugMenu, {
						group: "1_debug",
						command: {
							id: I.$3Gc,
							title: C.localize(5313, null),
							precondition: G.$74,
						},
						order: 4,
						when: G.$y5,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarDebugMenu, {
						group: "2_configuration",
						command: { id: I.$XGc, title: C.localize(5314, null) },
						order: 2,
						when: G.$y5,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarDebugMenu, {
						group: "3_step",
						command: {
							id: I.$5Gc,
							title: C.localize(5315, null),
							precondition: G.$24.isEqualTo("stopped"),
						},
						order: 1,
						when: G.$y5,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarDebugMenu, {
						group: "3_step",
						command: {
							id: I.$6Gc,
							title: C.localize(5316, null),
							precondition: G.$24.isEqualTo("stopped"),
						},
						order: 2,
						when: G.$y5,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarDebugMenu, {
						group: "3_step",
						command: {
							id: I.$8Gc,
							title: C.localize(5317, null),
							precondition: G.$24.isEqualTo("stopped"),
						},
						order: 3,
						when: G.$y5,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarDebugMenu, {
						group: "3_step",
						command: {
							id: I.$bHc,
							title: C.localize(5318, null),
							precondition: G.$24.isEqualTo("stopped"),
						},
						order: 4,
						when: G.$y5,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarNewBreakpointMenu, {
						group: "1_breakpoints",
						command: { id: I.$YGc, title: C.localize(5319, null) },
						order: 2,
						when: G.$y5,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarDebugMenu, {
						group: "4_new_breakpoint",
						title: C.localize(5320, null),
						submenu: m.$XX.MenubarNewBreakpointMenu,
						order: 2,
						when: G.$y5,
					}),
					m.$ZX.appendMenuItem(m.$XX.MenubarDebugMenu, {
						group: "z_install",
						command: {
							id: "debug.installAdditionalDebuggers",
							title: C.localize(5321, null),
						},
						order: 1,
					});
				const le = n.$Io
					.as(b.Extensions.ViewContainersRegistry)
					.registerViewContainer(
						{
							id: G.$X4,
							title: C.localize2(5390, "Debug Console"),
							icon: L.$1Jb,
							ctorDescriptor: new a.$Ji(p.$ZSb, [
								G.$X4,
								{ mergeViewWithContainerWhenSingleView: !0 },
							]),
							storageId: G.$X4,
							hideIfEmpty: !0,
							order: 2,
						},
						b.ViewContainerLocation.Panel,
						{ doNotRegisterOpenCommand: !0 },
					);
				n.$Io
					.as(b.Extensions.ViewsRegistry)
					.registerViews(
						[
							{
								id: G.$Y4,
								name: C.localize2(5391, "Debug Console"),
								containerIcon: L.$1Jb,
								canToggleVisibility: !1,
								canMoveView: !0,
								when: G.$y5,
								ctorDescriptor: new a.$Ji(F.Repl),
								openCommandActionDescriptor: {
									id: "workbench.debug.action.toggleRepl",
									mnemonicTitle: C.localize(5322, null),
									keybindings: {
										primary:
											t.KeyMod.CtrlCmd |
											t.KeyMod.Shift |
											t.KeyMod.Alt |
											t.KeyCode.KeyY,
									},
									order: 2,
								},
							},
						],
						le,
					);
				const oe = n.$Io
						.as(b.Extensions.ViewContainersRegistry)
						.registerViewContainer(
							{
								id: G.$Q4,
								title: C.localize2(5392, "Run and Debug"),
								openCommandActionDescriptor: {
									id: G.$Q4,
									mnemonicTitle: C.localize(5323, null),
									keybindings: {
										primary: t.KeyMod.CtrlCmd | t.KeyMod.Shift | t.KeyCode.KeyD,
									},
									order: 3,
								},
								ctorDescriptor: new a.$Ji(B.$8Qc),
								icon: L.$2Jb,
								alwaysUseContainerInfo: !0,
								order: 3,
								wantsActionToolbar: !0,
							},
							b.ViewContainerLocation.Sidebar,
						),
					ae = n.$Io.as(b.Extensions.ViewsRegistry);
				ae.registerViews(
					[
						{
							id: G.$R4,
							name: C.localize2(5393, "Variables"),
							containerIcon: L.$3Jb,
							ctorDescriptor: new a.$Ji(H.$uQc),
							order: 10,
							weight: 40,
							canToggleVisibility: !0,
							canMoveView: !0,
							focusCommand: { id: "workbench.debug.action.focusVariablesView" },
							when: G.$54.isEqualTo("default"),
						},
					],
					oe,
				),
					ae.registerViews(
						[
							{
								id: G.$S4,
								name: C.localize2(5394, "Watch"),
								containerIcon: L.$4Jb,
								ctorDescriptor: new a.$Ji(q.$eRc),
								order: 20,
								weight: 10,
								canToggleVisibility: !0,
								canMoveView: !0,
								focusCommand: { id: "workbench.debug.action.focusWatchView" },
								when: G.$54.isEqualTo("default"),
							},
						],
						oe,
					),
					ae.registerViews(
						[
							{
								id: G.$T4,
								name: C.localize2(5395, "Call Stack"),
								containerIcon: L.$5Jb,
								ctorDescriptor: new a.$Ji($.$oQc),
								order: 30,
								weight: 30,
								canToggleVisibility: !0,
								canMoveView: !0,
								focusCommand: {
									id: "workbench.debug.action.focusCallStackView",
								},
								when: G.$54.isEqualTo("default"),
							},
						],
						oe,
					),
					ae.registerViews(
						[
							{
								id: G.$V4,
								name: C.localize2(5396, "Breakpoints"),
								containerIcon: L.$6Jb,
								ctorDescriptor: new a.$Ji(l.$mGc),
								order: 40,
								weight: 20,
								canToggleVisibility: !0,
								canMoveView: !0,
								focusCommand: {
									id: "workbench.debug.action.focusBreakpointsView",
								},
								when: u.$Kj.or(G.$x5, G.$54.isEqualTo("default"), G.$64),
							},
						],
						oe,
					),
					ae.registerViews(
						[
							{
								id: V.$7Qc.ID,
								name: V.$7Qc.LABEL,
								containerIcon: L.$2Jb,
								ctorDescriptor: new a.$Ji(V.$7Qc),
								order: 1,
								weight: 40,
								canToggleVisibility: !0,
								when: G.$54.isEqualTo("simple"),
							},
						],
						oe,
					),
					ae.registerViews(
						[
							{
								id: G.$U4,
								name: C.localize2(5397, "Loaded Scripts"),
								containerIcon: L.$7Jb,
								ctorDescriptor: new a.$Ji(z.$0Qc),
								order: 35,
								weight: 5,
								canToggleVisibility: !0,
								canMoveView: !0,
								collapsed: !0,
								when: u.$Kj.and(G.$o5, G.$54.isEqualTo("default")),
							},
						],
						oe,
					),
					n.$Io
						.as(f.$a1.EditorPane)
						.registerEditorPane(
							g.$vVb.create(U.$jGc, G.$W4, C.localize(5324, null)),
							[new a.$Ji(X.$G3)],
						),
					n.$Io
						.as(r.$No.Configuration)
						.registerConfiguration({
							id: "debug",
							order: 20,
							title: C.localize(5325, null),
							type: "object",
							properties: {
								"debug.showVariableTypes": {
									type: "boolean",
									description: C.localize(5326, null),
									default: !1,
								},
								"debug.allowBreakpointsEverywhere": {
									type: "boolean",
									description: C.localize(5327, null),
									default: !1,
								},
								"debug.gutterMiddleClickAction": {
									type: "string",
									enum: [
										"logpoint",
										"conditionalBreakpoint",
										"triggeredBreakpoint",
										"none",
									],
									description: C.localize(5328, null),
									enumDescriptions: [
										C.localize(5329, null),
										C.localize(5330, null),
										C.localize(5331, null),
										C.localize(5332, null),
									],
									default: "logpoint",
								},
								"debug.openExplorerOnEnd": {
									type: "boolean",
									description: C.localize(5333, null),
									default: !1,
								},
								"debug.closeReadonlyTabsOnEnd": {
									type: "boolean",
									description: C.localize(5334, null),
									default: !1,
								},
								"debug.inlineValues": {
									type: "string",
									enum: ["on", "off", "auto"],
									description: C.localize(5335, null),
									enumDescriptions: [
										C.localize(5336, null),
										C.localize(5337, null),
										C.localize(5338, null),
									],
									default: "auto",
								},
								"debug.toolBarLocation": {
									enum: ["floating", "docked", "commandCenter", "hidden"],
									markdownDescription: C.localize(
										5339,
										null,
										"`#window.commandCenter#`",
									),
									default: "floating",
									markdownEnumDescriptions: [
										C.localize(5340, null),
										C.localize(5341, null),
										C.localize(5342, null),
										C.localize(5343, null),
									],
								},
								"debug.showInStatusBar": {
									enum: ["never", "always", "onFirstSessionStart"],
									enumDescriptions: [
										C.localize(5344, null),
										C.localize(5345, null),
										C.localize(5346, null),
									],
									description: C.localize(5347, null),
									default: "onFirstSessionStart",
								},
								"debug.internalConsoleOptions": G.$35,
								"debug.console.closeOnEnd": {
									type: "boolean",
									description: C.localize(5348, null),
									default: !1,
								},
								"debug.terminal.clearBeforeReusing": {
									type: "boolean",
									description: C.localize(5349, null),
									default: !1,
								},
								"debug.openDebug": {
									enum: [
										"neverOpen",
										"openOnSessionStart",
										"openOnFirstSessionStart",
										"openOnDebugBreak",
									],
									default: "openOnDebugBreak",
									description: C.localize(5350, null),
								},
								"debug.showSubSessionsInToolBar": {
									type: "boolean",
									description: C.localize(5351, null),
									default: !1,
								},
								"debug.console.fontSize": {
									type: "number",
									description: C.localize(5352, null),
									default: w.$m ? 12 : 14,
								},
								"debug.console.fontFamily": {
									type: "string",
									description: C.localize(5353, null),
									default: "default",
								},
								"debug.console.lineHeight": {
									type: "number",
									description: C.localize(5354, null),
									default: 0,
								},
								"debug.console.wordWrap": {
									type: "boolean",
									description: C.localize(5355, null),
									default: !0,
								},
								"debug.console.historySuggestions": {
									type: "boolean",
									description: C.localize(5356, null),
									default: !0,
								},
								"debug.console.collapseIdenticalLines": {
									type: "boolean",
									description: C.localize(5357, null),
									default: !0,
								},
								"debug.console.acceptSuggestionOnEnter": {
									enum: ["off", "on"],
									description: C.localize(5358, null),
									default: "off",
								},
								launch: {
									type: "object",
									description: C.localize(5359, null),
									default: { configurations: [], compounds: [] },
									$ref: ie.$EZ,
									disallowConfigurationDefault: !0,
								},
								"debug.focusWindowOnBreak": {
									type: "boolean",
									description: C.localize(5360, null),
									default: !0,
								},
								"debug.focusEditorOnBreak": {
									type: "boolean",
									description: C.localize(5361, null),
									default: !0,
								},
								"debug.onTaskErrors": {
									enum: ["debugAnyway", "showErrors", "prompt", "abort"],
									enumDescriptions: [
										C.localize(5362, null),
										C.localize(5363, null),
										C.localize(5364, null),
										C.localize(5365, null),
									],
									description: C.localize(5366, null),
									default: "prompt",
								},
								"debug.showBreakpointsInOverviewRuler": {
									type: "boolean",
									description: C.localize(5367, null),
									default: !1,
								},
								"debug.showInlineBreakpointCandidates": {
									type: "boolean",
									description: C.localize(5368, null),
									default: !0,
								},
								"debug.saveBeforeStart": {
									description: C.localize(5369, null),
									enum: [
										"allEditorsInActiveGroup",
										"nonUntitledEditorsInActiveGroup",
										"none",
									],
									enumDescriptions: [
										C.localize(5370, null),
										C.localize(5371, null),
										C.localize(5372, null),
									],
									default: "allEditorsInActiveGroup",
									scope: r.ConfigurationScope.LANGUAGE_OVERRIDABLE,
								},
								"debug.confirmOnExit": {
									description: C.localize(5373, null),
									type: "string",
									enum: ["never", "always"],
									enumDescriptions: [
										C.localize(5374, null),
										C.localize(5375, null),
									],
									default: "never",
								},
								"debug.disassemblyView.showSourceCode": {
									type: "boolean",
									default: !0,
									description: C.localize(5376, null),
								},
								"debug.autoExpandLazyVariables": {
									type: "string",
									enum: ["auto", "on", "off"],
									default: "auto",
									enumDescriptions: [
										C.localize(5377, null),
										C.localize(5378, null),
										C.localize(5379, null),
									],
									description: C.localize(5380, null),
								},
								"debug.enableStatusBarColor": {
									type: "boolean",
									description: C.localize(5381, null),
									default: !0,
								},
								"debug.hideLauncherWhileDebugging": {
									type: "boolean",
									markdownDescription: C.localize(
										5382,
										null,
										"`#debug.toolBarLocation#`",
									),
									default: !1,
								},
							},
						}),
					d.$Whc.register(new v.$pQc()),
					d.$Whc.register(new ee.$nRc()),
					d.$Whc.register(new te.$pRc()),
					(0, o.$s6)(_.$oRc.ID, _.$oRc, o.WorkbenchPhase.AfterRestored),
					(0, o.$s6)(Q.$qRc.ID, Q.$qRc, o.WorkbenchPhase.AfterRestored);
			},
		),
		