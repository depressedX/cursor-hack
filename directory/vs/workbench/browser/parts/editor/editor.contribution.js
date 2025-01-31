import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../nls.js';
import '../../editor.js';
import '../../../common/editor.js';
import '../../../common/contextkeys.js';
import '../../../common/editor/sideBySideEditorInput.js';
import './textResourceEditor.js';
import './sideBySideEditor.js';
import '../../../common/editor/diffEditorInput.js';
import '../../../services/untitled/common/untitledTextEditorInput.js';
import '../../../common/editor/textResourceEditorInput.js';
import './textDiffEditor.js';
import './binaryDiffEditor.js';
import './editorStatus.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../base/common/keyCodes.js';
import './editorActions.js';
import './editorCommands.js';
import './diffEditorCommands.js';
import '../../quickaccess.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/common/platform.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../codeeditor.js';
import '../../../common/contributions.js';
import './editorAutoSave.js';
import '../../../../platform/quickinput/common/quickAccess.js';
import './editorQuickAccess.js';
import '../../../../base/common/network.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../services/untitled/common/untitledTextEditorHandler.js';
import './editorConfiguration.js';
import '../../actions/layoutActions.js';
import '../../../../editor/common/editorContextKeys.js';
define(
			de[3889],
			he([
				1, 0, 30, 4, 192, 44, 100, 313, 1917, 825, 296, 628, 478, 1338, 1915,
				3861, 99, 11, 102, 27, 1340, 247, 1916, 473, 43, 8, 12, 46, 824, 55,
				3859, 348, 1015, 23, 14, 79, 3888, 3575, 716, 71,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*platform*/,
				i /*nls*/,
				w /*editor*/,
				E /*editor*/,
				C /*contextkeys*/,
				d /*sideBySideEditorInput*/,
				m /*textResourceEditor*/,
				r /*sideBySideEditor*/,
				u /*diffEditorInput*/,
				a /*untitledTextEditorInput*/,
				h /*textResourceEditorInput*/,
				c /*textDiffEditor*/,
				n /*binaryDiffEditor*/,
				g /*editorStatus*/,
				p /*actionCommonCategories*/,
				o /*actions*/,
				f /*descriptors*/,
				b /*keyCodes*/,
				s /*editorActions*/,
				l /*editorCommands*/,
				y /*diffEditorCommands*/,
				$ /*quickaccess*/,
				v /*keybindingsRegistry*/,
				S /*contextkey*/,
				I /*platform*/,
				T /*editorExtensions*/,
				P /*codeeditor*/,
				k /*contributions*/,
				L /*editorAutoSave*/,
				D /*quickAccess*/,
				M /*editorQuickAccess*/,
				N /*network*/,
				A /*codicons*/,
				R /*iconRegistry*/,
				O /*untitledTextEditorHandler*/,
				B /*editorConfiguration*/,
				U /*layoutActions*/,
				z /*editorContextKeys*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					t.$Io
						.as(E.$a1.EditorPane)
						.registerEditorPane(
							w.$vVb.create(m.$luc, m.$luc.ID, (0, i.localize)(3126, null)),
							[new f.$Ji(a.$T1b), new f.$Ji(h.$S1b)],
						),
					t.$Io
						.as(E.$a1.EditorPane)
						.registerEditorPane(
							w.$vVb.create(c.$IVb, c.$IVb.ID, (0, i.localize)(3127, null)),
							[new f.$Ji(u.$GVb)],
						),
					t.$Io
						.as(E.$a1.EditorPane)
						.registerEditorPane(
							w.$vVb.create(n.$quc, n.$quc.ID, (0, i.localize)(3128, null)),
							[new f.$Ji(u.$GVb)],
						),
					t.$Io
						.as(E.$a1.EditorPane)
						.registerEditorPane(
							w.$vVb.create(r.$AVb, r.$AVb.ID, (0, i.localize)(3129, null)),
							[new f.$Ji(d.$iY)],
						),
					t.$Io
						.as(E.$a1.EditorFactory)
						.registerEditorSerializer(a.$T1b.ID, O.$xuc),
					t.$Io
						.as(E.$a1.EditorFactory)
						.registerEditorSerializer(d.$iY.ID, d.$kY),
					t.$Io
						.as(E.$a1.EditorFactory)
						.registerEditorSerializer(u.$GVb.ID, u.$HVb),
					(0, k.$s6)(L.$wuc.ID, L.$wuc, k.WorkbenchPhase.BlockRestore),
					(0, k.$s6)(g.$ruc.ID, g.$ruc, k.WorkbenchPhase.BlockRestore),
					(0, k.$s6)(O.$yuc.ID, O.$yuc, k.WorkbenchPhase.BlockRestore),
					(0, k.$s6)(B.$zuc.ID, B.$zuc, k.WorkbenchPhase.BlockRestore),
					(0, T.$qtb)(
						P.$w4b.ID,
						P.$w4b,
						T.EditorContributionInstantiation.AfterFirstRender,
					);
				const F = t.$Io.as(D.$1r.Quickaccess),
					x = "inEditorsPicker",
					H = S.$Kj.and($.$g9b, S.$Kj.has(x));
				F.registerQuickAccessProvider({
					ctor: M.$sVb,
					prefix: M.$sVb.PREFIX,
					contextKey: x,
					placeholder: (0, i.localize)(3130, null),
					helpEntries: [
						{ description: (0, i.localize)(3131, null), commandId: s.$vsc.ID },
					],
				}),
					F.registerQuickAccessProvider({
						ctor: M.$tVb,
						prefix: M.$tVb.PREFIX,
						contextKey: x,
						placeholder: (0, i.localize)(3132, null),
						helpEntries: [
							{
								description: (0, i.localize)(3133, null),
								commandId: s.$wsc.ID,
							},
						],
					}),
					F.registerQuickAccessProvider({
						ctor: M.$uVb,
						prefix: M.$uVb.PREFIX,
						contextKey: x,
						placeholder: (0, i.localize)(3134, null),
						helpEntries: [
							{
								description: (0, i.localize)(3135, null),
								commandId: s.$xsc.ID,
							},
						],
					}),
					(0, o.$4X)(g.$tuc),
					(0, o.$4X)(g.$uuc),
					(0, o.$4X)(g.$vuc),
					(0, o.$4X)(s.$isc),
					(0, o.$4X)(s.$jsc),
					(0, o.$4X)(s.$csc),
					(0, o.$4X)(s.$dsc),
					(0, o.$4X)(s.$esc),
					(0, o.$4X)(s.$fsc),
					(0, o.$4X)(s.$gsc),
					(0, o.$4X)(s.$hsc),
					(0, o.$4X)(s.$Dsc),
					(0, o.$4X)(s.$Esc),
					(0, o.$4X)(s.$Fsc),
					(0, o.$4X)(s.$Gsc),
					(0, o.$4X)(s.$tsc),
					(0, o.$4X)(s.$usc),
					(0, o.$4X)(s.$wsc),
					(0, o.$4X)(s.$xsc),
					(0, o.$4X)(s.$vsc),
					(0, o.$4X)(s.$Wrc),
					(0, o.$4X)(s.$Xrc),
					(0, o.$4X)(s.$Vrc),
					(0, o.$4X)(s.$Yrc),
					(0, o.$4X)(s.$Zrc),
					(0, o.$4X)(s.$Urc),
					(0, o.$4X)(s.$zrc),
					(0, o.$4X)(s.$Arc),
					(0, o.$4X)(s.$Brc),
					(0, o.$4X)(s.$Crc),
					(0, o.$4X)(s.$Drc),
					(0, o.$4X)(s.$Erc),
					(0, o.$4X)(s.$Frc),
					(0, o.$4X)(s.$Grc),
					(0, o.$4X)(s.$Hrc),
					(0, o.$4X)(s.$$rc),
					(0, o.$4X)(s.$_rc),
					(0, o.$4X)(s.$asc),
					(0, o.$4X)(s.$bsc),
					(0, o.$4X)(s.$9rc),
					(0, o.$4X)(s.$0rc),
					(0, o.$4X)(s.$Isc),
					(0, o.$4X)(s.$Jsc),
					(0, o.$4X)(s.$1rc),
					(0, o.$4X)(s.$2rc),
					(0, o.$4X)(s.$3rc),
					(0, o.$4X)(s.$4rc),
					(0, o.$4X)(s.$5rc),
					(0, o.$4X)(s.$6rc),
					(0, o.$4X)(s.$7rc),
					(0, o.$4X)(s.$8rc),
					(0, o.$4X)(s.$Ksc),
					(0, o.$4X)(s.$Lsc),
					(0, o.$4X)(s.$Qsc),
					(0, o.$4X)(s.$Rsc),
					(0, o.$4X)(s.$Osc),
					(0, o.$4X)(s.$Psc),
					(0, o.$4X)(s.$Msc),
					(0, o.$4X)(s.$Nsc),
					(0, o.$4X)(s.$Ssc),
					(0, o.$4X)(s.$Tsc),
					(0, o.$4X)(s.$Ysc),
					(0, o.$4X)(s.$Zsc),
					(0, o.$4X)(s.$Wsc),
					(0, o.$4X)(s.$Xsc),
					(0, o.$4X)(s.$Usc),
					(0, o.$4X)(s.$Vsc),
					(0, o.$4X)(s.$Irc),
					(0, o.$4X)(s.$Jrc),
					(0, o.$4X)(s.$Krc),
					(0, o.$4X)(s.$Mrc),
					(0, o.$4X)(s.$Lrc),
					(0, o.$4X)(s.$Nrc),
					(0, o.$4X)(s.$Orc),
					(0, o.$4X)(s.$Prc),
					(0, o.$4X)(s.$Qrc),
					(0, o.$4X)(s.$9sc),
					(0, o.$4X)(s.$0sc),
					(0, o.$4X)(s.$$sc),
					(0, o.$4X)(s.$_sc),
					(0, o.$4X)(s.$ksc),
					(0, o.$4X)(s.$lsc),
					(0, o.$4X)(s.$msc),
					(0, o.$4X)(s.$nsc),
					(0, o.$4X)(s.$osc),
					(0, o.$4X)(s.$psc),
					(0, o.$4X)(s.$qsc),
					(0, o.$4X)(s.$rsc),
					(0, o.$4X)(s.$ssc),
					(0, o.$4X)(s.$Hsc),
					(0, o.$4X)(s.$1sc),
					(0, o.$4X)(s.$2sc),
					(0, o.$4X)(s.$3sc),
					(0, o.$4X)(s.$4sc),
					(0, o.$4X)(s.$5sc),
					(0, o.$4X)(s.$6sc),
					(0, o.$4X)(s.$8sc),
					(0, o.$4X)(s.$7sc),
					(0, o.$4X)(s.$atc),
					(0, o.$4X)(s.$btc),
					(0, o.$4X)(s.$ysc),
					(0, o.$4X)(s.$zsc),
					(0, o.$4X)(s.$Asc),
					(0, o.$4X)(s.$Bsc),
					(0, o.$4X)(s.$Csc),
					(0, o.$4X)(s.$ctc),
					(0, o.$4X)(s.$dtc),
					(0, o.$4X)(s.$etc),
					(0, o.$4X)(s.$ftc),
					(0, o.$4X)(s.$gtc),
					(0, o.$4X)(s.$htc);
				const q = "workbench.action.quickOpenNavigateNextInEditorPicker";
				v.$TX.registerCommandAndKeybindingRule({
					id: q,
					weight: v.KeybindingWeight.WorkbenchContrib + 50,
					handler: (0, $.$j9b)(q, !0),
					when: H,
					primary: b.KeyMod.CtrlCmd | b.KeyCode.Tab,
					mac: { primary: b.KeyMod.WinCtrl | b.KeyCode.Tab },
				});
				const V = "workbench.action.quickOpenNavigatePreviousInEditorPicker";
				v.$TX.registerCommandAndKeybindingRule({
					id: V,
					weight: v.KeybindingWeight.WorkbenchContrib + 50,
					handler: (0, $.$j9b)(V, !1),
					when: H,
					primary: b.KeyMod.CtrlCmd | b.KeyMod.Shift | b.KeyCode.Tab,
					mac: { primary: b.KeyMod.WinCtrl | b.KeyMod.Shift | b.KeyCode.Tab },
				}),
					(0, l.$EWb)(),
					I.$m &&
						(o.$ZX.appendMenuItem(o.$XX.TouchBarContext, {
							command: {
								id: s.$jsc.ID,
								title: s.$jsc.LABEL,
								icon: {
									dark: N.$7g.asFileUri(
										"vs/workbench/browser/parts/editor/media/back-tb.png",
									),
								},
							},
							group: "navigation",
							order: 0,
						}),
						o.$ZX.appendMenuItem(o.$XX.TouchBarContext, {
							command: {
								id: s.$isc.ID,
								title: s.$isc.LABEL,
								icon: {
									dark: N.$7g.asFileUri(
										"vs/workbench/browser/parts/editor/media/forward-tb.png",
									),
								},
							},
							group: "navigation",
							order: 1,
						})),
					o.$ZX.appendMenuItem(o.$XX.EmptyEditorGroup, {
						command: {
							id: l.$9Vb,
							title: (0, i.localize)(3136, null),
							icon: A.$ak.unlock,
						},
						group: "navigation",
						order: 10,
						when: S.$Kj.and(C.$_Pb, C.$3Pb.toNegated()),
					}),
					o.$ZX.appendMenuItem(o.$XX.EmptyEditorGroup, {
						command: {
							id: l.$0Vb,
							title: (0, i.localize)(3137, null),
							icon: A.$ak.lock,
							toggled: S.$Kj.true(),
						},
						group: "navigation",
						order: 10,
						when: C.$3Pb,
					}),
					o.$ZX.appendMenuItem(o.$XX.EmptyEditorGroup, {
						command: {
							id: l.$1Vb,
							title: (0, i.localize)(3138, null),
							icon: A.$ak.close,
						},
						group: "navigation",
						order: 20,
						when: S.$Kj.or(C.$_Pb, C.$9Pb),
					}),
					o.$ZX.appendMenuItem(o.$XX.EmptyEditorGroupContext, {
						command: { id: l.$dWb, title: (0, i.localize)(3139, null) },
						group: "2_split",
						order: 10,
					}),
					o.$ZX.appendMenuItem(o.$XX.EmptyEditorGroupContext, {
						command: { id: l.$eWb, title: (0, i.localize)(3140, null) },
						group: "2_split",
						order: 20,
					}),
					o.$ZX.appendMenuItem(o.$XX.EmptyEditorGroupContext, {
						command: { id: l.$fWb, title: (0, i.localize)(3141, null) },
						group: "2_split",
						order: 30,
					}),
					o.$ZX.appendMenuItem(o.$XX.EmptyEditorGroupContext, {
						command: { id: l.$gWb, title: (0, i.localize)(3142, null) },
						group: "2_split",
						order: 40,
					}),
					o.$ZX.appendMenuItem(o.$XX.EmptyEditorGroupContext, {
						command: { id: l.$yWb, title: (0, i.localize)(3143, null) },
						group: "3_window",
						order: 10,
					}),
					o.$ZX.appendMenuItem(o.$XX.EmptyEditorGroupContext, {
						command: {
							id: l.$8Vb,
							title: (0, i.localize)(3144, null),
							toggled: C.$3Pb,
						},
						group: "4_lock",
						order: 10,
						when: C.$_Pb.toNegated(),
					}),
					o.$ZX.appendMenuItem(o.$XX.EmptyEditorGroupContext, {
						command: { id: l.$1Vb, title: (0, i.localize)(3145, null) },
						group: "5_close",
						order: 10,
						when: C.$4Pb,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarContext, {
						command: { id: l.$dWb, title: (0, i.localize)(3146, null) },
						group: "2_split",
						order: 10,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarContext, {
						command: { id: l.$eWb, title: (0, i.localize)(3147, null) },
						group: "2_split",
						order: 20,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarContext, {
						command: { id: l.$fWb, title: (0, i.localize)(3148, null) },
						group: "2_split",
						order: 30,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarContext, {
						command: { id: l.$gWb, title: (0, i.localize)(3149, null) },
						group: "2_split",
						order: 40,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarContext, {
						command: { id: l.$wWb, title: (0, i.localize)(3150, null) },
						group: "3_window",
						order: 10,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarContext, {
						command: { id: l.$xWb, title: (0, i.localize)(3151, null) },
						group: "3_window",
						order: 20,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarContext, {
						submenu: o.$XX.EditorTabsBarShowTabsSubmenu,
						title: (0, i.localize)(3152, null),
						group: "4_config",
						order: 10,
						when: C.$bQb.negate(),
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarShowTabsSubmenu, {
						command: {
							id: U.$X5b.ID,
							title: (0, i.localize)(3153, null),
							toggled: S.$Kj.equals(
								"config.workbench.editor.showTabs",
								"multiple",
							),
						},
						group: "1_config",
						order: 10,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarShowTabsSubmenu, {
						command: {
							id: U.$Z5b.ID,
							title: (0, i.localize)(3154, null),
							toggled: S.$Kj.equals(
								"config.workbench.editor.showTabs",
								"single",
							),
						},
						group: "1_config",
						order: 20,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarShowTabsSubmenu, {
						command: {
							id: U.$V5b.ID,
							title: (0, i.localize)(3155, null),
							toggled: S.$Kj.equals("config.workbench.editor.showTabs", "none"),
						},
						group: "1_config",
						order: 30,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarContext, {
						submenu: o.$XX.EditorTabsBarShowTabsZenModeSubmenu,
						title: (0, i.localize)(3156, null),
						group: "4_config",
						order: 10,
						when: C.$bQb,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarShowTabsZenModeSubmenu, {
						command: {
							id: U.$Y5b.ID,
							title: (0, i.localize)(3157, null),
							toggled: S.$Kj.equals("config.zenMode.showTabs", "multiple"),
						},
						group: "1_config",
						order: 10,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarShowTabsZenModeSubmenu, {
						command: {
							id: U.$15b.ID,
							title: (0, i.localize)(3158, null),
							toggled: S.$Kj.equals("config.zenMode.showTabs", "single"),
						},
						group: "1_config",
						order: 20,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarShowTabsZenModeSubmenu, {
						command: {
							id: U.$W5b.ID,
							title: (0, i.localize)(3159, null),
							toggled: S.$Kj.equals("config.zenMode.showTabs", "none"),
						},
						group: "1_config",
						order: 30,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarContext, {
						submenu: o.$XX.EditorActionsPositionSubmenu,
						title: (0, i.localize)(3160, null),
						group: "4_config",
						order: 20,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorActionsPositionSubmenu, {
						command: {
							id: U.$35b.ID,
							title: (0, i.localize)(3161, null),
							toggled: S.$Kj.equals(
								"config.workbench.editor.editorActionsLocation",
								"default",
							),
						},
						group: "1_config",
						order: 10,
						when: S.$Kj
							.equals("config.workbench.editor.showTabs", "none")
							.negate(),
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorActionsPositionSubmenu, {
						command: {
							id: U.$25b.ID,
							title: (0, i.localize)(3162, null),
							toggled: S.$Kj.or(
								S.$Kj.equals(
									"config.workbench.editor.editorActionsLocation",
									"titleBar",
								),
								S.$Kj.and(
									S.$Kj.equals("config.workbench.editor.showTabs", "none"),
									S.$Kj.equals(
										"config.workbench.editor.editorActionsLocation",
										"default",
									),
								),
							),
						},
						group: "1_config",
						order: 20,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorActionsPositionSubmenu, {
						command: {
							id: U.$45b.ID,
							title: (0, i.localize)(3163, null),
							toggled: S.$Kj.equals(
								"config.workbench.editor.editorActionsLocation",
								"hidden",
							),
						},
						group: "1_config",
						order: 30,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTabsBarContext, {
						command: { id: U.$65b.ID, title: (0, i.localize)(3164, null) },
						group: "9_configure",
						order: 10,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: { id: l.$YVb, title: (0, i.localize)(3165, null) },
						group: "1_close",
						order: 10,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: {
							id: l.$2Vb,
							title: (0, i.localize)(3166, null),
							precondition: C.$YPb.notEqualsTo("1"),
						},
						group: "1_close",
						order: 20,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: {
							id: l.$XVb,
							title: (0, i.localize)(3167, null),
							precondition: S.$Kj.and(C.$MPb.toNegated(), C.$6Pb.negate()),
						},
						group: "1_close",
						order: 30,
						when: C.$fQb,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: { id: l.$UVb, title: (0, i.localize)(3168, null) },
						group: "1_close",
						order: 40,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: { id: l.$VVb, title: (0, i.localize)(3169, null) },
						group: "1_close",
						order: 50,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: { id: l.$_Vb, title: (0, i.localize)(3170, null) },
						group: "1_open",
						order: 10,
						when: C.$UPb,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: {
							id: l.$6Vb,
							title: (0, i.localize)(3171, null),
							precondition: C.$KPb.toNegated(),
						},
						group: "3_preview",
						order: 10,
						when: S.$Kj.has("config.workbench.editor.enablePreview"),
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: { id: l.$aWb, title: (0, i.localize)(3172, null) },
						group: "3_preview",
						order: 20,
						when: C.$NPb.toNegated(),
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: { id: l.$bWb, title: (0, i.localize)(3173, null) },
						group: "3_preview",
						order: 20,
						when: C.$NPb,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: { id: l.$dWb, title: (0, i.localize)(3174, null) },
						group: "5_split",
						order: 10,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: { id: l.$eWb, title: (0, i.localize)(3175, null) },
						group: "5_split",
						order: 20,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: { id: l.$fWb, title: (0, i.localize)(3176, null) },
						group: "5_split",
						order: 30,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: { id: l.$gWb, title: (0, i.localize)(3177, null) },
						group: "5_split",
						order: 40,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: {
							id: l.$iWb,
							title: (0, i.localize)(3178, null),
							precondition: C.$6Pb.negate(),
						},
						group: "6_split_in_group",
						order: 10,
						when: C.$SPb,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: {
							id: l.$kWb,
							title: (0, i.localize)(3179, null),
							precondition: C.$6Pb.negate(),
						},
						group: "6_split_in_group",
						order: 10,
						when: C.$XPb,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: { id: l.$uWb, title: (0, i.localize)(3180, null) },
						group: "7_new_window",
						order: 10,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						command: { id: l.$vWb, title: (0, i.localize)(3181, null) },
						group: "7_new_window",
						order: 20,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitleContext, {
						submenu: o.$XX.EditorTitleContextShare,
						title: (0, i.localize)(3182, null),
						group: "11_share",
						order: -1,
						when: C.$6Pb.negate(),
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitle, {
						command: {
							id: y.$JVb,
							title: (0, i.localize)(3183, null),
							toggled: S.$Kj.equals("config.diffEditor.renderSideBySide", !1),
						},
						group: "1_diff",
						order: 10,
						when: S.$Kj.has("isInDiffEditor"),
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitle, {
						command: { id: l.$$Vb, title: (0, i.localize)(3184, null) },
						group: "3_open",
						order: 10,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitle, {
						command: { id: l.$VVb, title: (0, i.localize)(3185, null) },
						group: "5_close",
						order: 10,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitle, {
						command: { id: l.$UVb, title: (0, i.localize)(3186, null) },
						group: "5_close",
						order: 20,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitle, {
						command: {
							id: l.$7Vb,
							title: (0, i.localize)(3187, null),
							toggled: S.$Kj.has("config.workbench.editor.enablePreview"),
						},
						group: "7_settings",
						order: 10,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitle, {
						command: { id: l.$hWb, title: (0, i.localize)(3188, null) },
						group: "8_group_operations",
						order: 5,
						when: S.$Kj.and(C.$$Pb.negate(), C.$9Pb),
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitle, {
						command: { id: l.$hWb, title: (0, i.localize)(3189, null) },
						group: "8_group_operations",
						order: 5,
						when: C.$$Pb,
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitle, {
						command: {
							id: l.$8Vb,
							title: (0, i.localize)(3190, null),
							toggled: C.$3Pb,
						},
						group: "8_group_operations",
						order: 10,
						when: C.$_Pb.toNegated(),
					}),
					o.$ZX.appendMenuItem(o.$XX.EditorTitle, {
						command: { id: U.$75b.ID, title: (0, i.localize)(3191, null) },
						group: "9_configure",
						order: 10,
					});
				function G(ie, ne, ee, _, te) {
					const Q = {
						command: {
							id: ie.id,
							title: ie.title,
							icon: ie.icon,
							toggled: ie.toggled,
							precondition: te,
						},
						group: "navigation",
						when: ne,
						order: ee,
					};
					_ && (Q.alt = { id: _.id, title: _.title, icon: _.icon }),
						o.$ZX.appendMenuItem(o.$XX.EditorTitle, Q);
				}
				const K = 1e5,
					J = 1e6;
				G(
					{
						id: l.$cWb,
						title: (0, i.localize)(3192, null),
						icon: A.$ak.splitHorizontal,
					},
					S.$Kj.not("splitEditorsVertically"),
					K,
					{
						id: l.$eWb,
						title: (0, i.localize)(3193, null),
						icon: A.$ak.splitVertical,
					},
				),
					G(
						{
							id: l.$cWb,
							title: (0, i.localize)(3194, null),
							icon: A.$ak.splitVertical,
						},
						S.$Kj.has("splitEditorsVertically"),
						K,
						{
							id: l.$gWb,
							title: (0, i.localize)(3195, null),
							icon: A.$ak.splitHorizontal,
						},
					),
					G(
						{
							id: l.$lWb,
							title: (0, i.localize)(3196, null),
							icon: A.$ak.editorLayout,
						},
						C.$XPb,
						K - 1,
					),
					G(
						{
							id: l.$YVb,
							title: (0, i.localize)(3197, null),
							icon: A.$ak.close,
						},
						S.$Kj.and(
							C.$fQb.toNegated(),
							C.$JPb.toNegated(),
							C.$NPb.toNegated(),
						),
						J,
						{
							id: l.$VVb,
							title: (0, i.localize)(3198, null),
							icon: A.$ak.closeAll,
						},
					),
					G(
						{
							id: l.$YVb,
							title: (0, i.localize)(3199, null),
							icon: A.$ak.closeDirty,
						},
						S.$Kj.and(C.$fQb.toNegated(), C.$JPb, C.$NPb.toNegated()),
						J,
						{
							id: l.$VVb,
							title: (0, i.localize)(3200, null),
							icon: A.$ak.closeAll,
						},
					),
					G(
						{
							id: l.$bWb,
							title: (0, i.localize)(3201, null),
							icon: A.$ak.pinned,
						},
						S.$Kj.and(C.$fQb.toNegated(), C.$JPb.toNegated(), C.$NPb),
						J,
						{
							id: l.$YVb,
							title: (0, i.localize)(3202, null),
							icon: A.$ak.close,
						},
					),
					G(
						{
							id: l.$bWb,
							title: (0, i.localize)(3203, null),
							icon: A.$ak.pinnedDirty,
						},
						S.$Kj.and(C.$fQb.toNegated(), C.$JPb, C.$NPb),
						J,
						{
							id: l.$YVb,
							title: (0, i.localize)(3204, null),
							icon: A.$ak.close,
						},
					),
					G(
						{
							id: l.$9Vb,
							title: (0, i.localize)(3205, null),
							icon: A.$ak.unlock,
						},
						S.$Kj.and(C.$_Pb, C.$3Pb.toNegated()),
						J - 1,
					),
					G(
						{
							id: l.$0Vb,
							title: (0, i.localize)(3206, null),
							icon: A.$ak.lock,
							toggled: S.$Kj.true(),
						},
						C.$3Pb,
						J - 1,
					);
				const W = (0, R.$$O)(
					"diff-editor-previous-change",
					A.$ak.arrowUp,
					(0, i.localize)(3207, null),
				);
				G(
					{ id: y.$LVb, title: (0, i.localize)(3208, null), icon: W },
					C.$WPb,
					10,
					void 0,
					z.EditorContextKeys.hasChanges,
				);
				const X = (0, R.$$O)(
					"diff-editor-next-change",
					A.$ak.arrowDown,
					(0, i.localize)(3209, null),
				);
				G(
					{ id: y.$KVb, title: (0, i.localize)(3210, null), icon: X },
					C.$WPb,
					11,
					void 0,
					z.EditorContextKeys.hasChanges,
				),
					G(
						{
							id: y.$RVb,
							title: (0, i.localize)(3211, null),
							icon: A.$ak.arrowSwap,
						},
						S.$Kj.and(C.$WPb, C.$PPb),
						15,
						void 0,
						void 0,
					);
				const Y = (0, R.$$O)(
					"diff-editor-toggle-whitespace",
					A.$ak.whitespace,
					(0, i.localize)(3212, null),
				);
				o.$ZX.appendMenuItem(o.$XX.EditorTitle, {
					command: {
						id: y.$QVb,
						title: (0, i.localize)(3213, null),
						icon: Y,
						precondition: C.$WPb,
						toggled: S.$Kj.equals("config.diffEditor.ignoreTrimWhitespace", !1),
					},
					group: "navigation",
					when: C.$WPb,
					order: 20,
				}),
					o.$ZX.appendMenuItem(o.$XX.CommandPalette, {
						command: {
							id: l.$6Vb,
							title: (0, i.localize2)(3258, "Keep Editor"),
							category: p.$ck.View,
						},
						when: S.$Kj.has("config.workbench.editor.enablePreview"),
					}),
					o.$ZX.appendMenuItem(o.$XX.CommandPalette, {
						command: {
							id: l.$aWb,
							title: (0, i.localize2)(3259, "Pin Editor"),
							category: p.$ck.View,
						},
					}),
					o.$ZX.appendMenuItem(o.$XX.CommandPalette, {
						command: {
							id: l.$bWb,
							title: (0, i.localize2)(3260, "Unpin Editor"),
							category: p.$ck.View,
						},
					}),
					o.$ZX.appendMenuItem(o.$XX.CommandPalette, {
						command: {
							id: l.$YVb,
							title: (0, i.localize2)(3261, "Close Editor"),
							category: p.$ck.View,
						},
					}),
					o.$ZX.appendMenuItem(o.$XX.CommandPalette, {
						command: {
							id: l.$ZVb,
							title: (0, i.localize2)(3262, "Close Pinned Editor"),
							category: p.$ck.View,
						},
					}),
					o.$ZX.appendMenuItem(o.$XX.CommandPalette, {
						command: {
							id: l.$VVb,
							title: (0, i.localize2)(3263, "Close All Editors in Group"),
							category: p.$ck.View,
						},
					}),
					o.$ZX.appendMenuItem(o.$XX.CommandPalette, {
						command: {
							id: l.$UVb,
							title: (0, i.localize2)(3264, "Close Saved Editors in Group"),
							category: p.$ck.View,
						},
					}),
					o.$ZX.appendMenuItem(o.$XX.CommandPalette, {
						command: {
							id: l.$2Vb,
							title: (0, i.localize2)(3265, "Close Other Editors in Group"),
							category: p.$ck.View,
						},
					}),
					o.$ZX.appendMenuItem(o.$XX.CommandPalette, {
						command: {
							id: l.$XVb,
							title: (0, i.localize2)(
								3266,
								"Close Editors to the Right in Group",
							),
							category: p.$ck.View,
						},
						when: C.$MPb.toNegated(),
					}),
					o.$ZX.appendMenuItem(o.$XX.CommandPalette, {
						command: {
							id: l.$WVb,
							title: (0, i.localize2)(3267, "Close Editor Group"),
							category: p.$ck.View,
						},
						when: C.$4Pb,
					}),
					o.$ZX.appendMenuItem(o.$XX.CommandPalette, {
						command: {
							id: l.$_Vb,
							title: (0, i.localize2)(3268, "Reopen Editor With..."),
							category: p.$ck.View,
						},
						when: C.$UPb,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarRecentMenu, {
						group: "1_editor",
						command: {
							id: s.$tsc.ID,
							title: (0, i.localize)(3214, null),
							precondition: S.$Kj.has("canReopenClosedEditor"),
						},
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarRecentMenu, {
						group: "z_clear",
						command: { id: s.$usc.ID, title: (0, i.localize)(3215, null) },
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarFileMenu, {
						title: (0, i.localize)(3216, null),
						submenu: o.$XX.MenubarShare,
						group: "45_share",
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarViewMenu, {
						group: "2_appearance",
						title: (0, i.localize)(3217, null),
						submenu: o.$XX.MenubarLayoutMenu,
						order: 2,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "1_split",
						command: {
							id: l.$dWb,
							title: {
								...(0, i.localize2)(3269, "Split Up"),
								mnemonicTitle: (0, i.localize)(3218, null),
							},
						},
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "1_split",
						command: {
							id: l.$eWb,
							title: {
								...(0, i.localize2)(3270, "Split Down"),
								mnemonicTitle: (0, i.localize)(3219, null),
							},
						},
						order: 2,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "1_split",
						command: {
							id: l.$fWb,
							title: {
								...(0, i.localize2)(3271, "Split Left"),
								mnemonicTitle: (0, i.localize)(3220, null),
							},
						},
						order: 3,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "1_split",
						command: {
							id: l.$gWb,
							title: {
								...(0, i.localize2)(3272, "Split Right"),
								mnemonicTitle: (0, i.localize)(3221, null),
							},
						},
						order: 4,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "2_split_in_group",
						command: {
							id: l.$iWb,
							title: {
								...(0, i.localize2)(3273, "Split in Group"),
								mnemonicTitle: (0, i.localize)(3222, null),
							},
						},
						when: C.$SPb,
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "2_split_in_group",
						command: {
							id: l.$kWb,
							title: {
								...(0, i.localize2)(3274, "Join in Group"),
								mnemonicTitle: (0, i.localize)(3223, null),
							},
						},
						when: C.$XPb,
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "3_new_window",
						command: {
							id: l.$uWb,
							title: {
								...(0, i.localize2)(3275, "Move Editor into New Window"),
								mnemonicTitle: (0, i.localize)(3224, null),
							},
						},
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "3_new_window",
						command: {
							id: l.$vWb,
							title: {
								...(0, i.localize2)(3276, "Copy Editor into New Window"),
								mnemonicTitle: (0, i.localize)(3225, null),
							},
						},
						order: 2,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "4_layouts",
						command: {
							id: s.$1sc.ID,
							title: {
								...(0, i.localize2)(3277, "Single"),
								mnemonicTitle: (0, i.localize)(3226, null),
							},
						},
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "4_layouts",
						command: {
							id: s.$2sc.ID,
							title: {
								...(0, i.localize2)(3278, "Two Columns"),
								mnemonicTitle: (0, i.localize)(3227, null),
							},
						},
						order: 3,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "4_layouts",
						command: {
							id: s.$3sc.ID,
							title: {
								...(0, i.localize2)(3279, "Three Columns"),
								mnemonicTitle: (0, i.localize)(3228, null),
							},
						},
						order: 4,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "4_layouts",
						command: {
							id: s.$4sc.ID,
							title: {
								...(0, i.localize2)(3280, "Two Rows"),
								mnemonicTitle: (0, i.localize)(3229, null),
							},
						},
						order: 5,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "4_layouts",
						command: {
							id: s.$5sc.ID,
							title: {
								...(0, i.localize2)(3281, "Three Rows"),
								mnemonicTitle: (0, i.localize)(3230, null),
							},
						},
						order: 6,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "4_layouts",
						command: {
							id: s.$6sc.ID,
							title: {
								...(0, i.localize2)(3282, "Grid (2x2)"),
								mnemonicTitle: (0, i.localize)(3231, null),
							},
						},
						order: 7,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "4_layouts",
						command: {
							id: s.$8sc.ID,
							title: {
								...(0, i.localize2)(3283, "Two Rows Right"),
								mnemonicTitle: (0, i.localize)(3232, null),
							},
						},
						order: 8,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarLayoutMenu, {
						group: "4_layouts",
						command: {
							id: s.$7sc.ID,
							title: {
								...(0, i.localize2)(3284, "Two Columns Bottom"),
								mnemonicTitle: (0, i.localize)(3233, null),
							},
						},
						order: 9,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarGoMenu, {
						group: "1_history_nav",
						command: {
							id: "workbench.action.navigateToLastEditLocation",
							title: (0, i.localize)(3234, null),
							precondition: S.$Kj.has("canNavigateToLastEditLocation"),
						},
						order: 3,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchEditorMenu, {
						group: "1_sideBySide",
						command: { id: l.$mWb, title: (0, i.localize)(3235, null) },
						when: S.$Kj.or(C.$XPb, C.$WPb),
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchEditorMenu, {
						group: "1_sideBySide",
						command: { id: l.$nWb, title: (0, i.localize)(3236, null) },
						when: S.$Kj.or(C.$XPb, C.$WPb),
						order: 2,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchEditorMenu, {
						group: "2_any",
						command: {
							id: "workbench.action.nextEditor",
							title: (0, i.localize)(3237, null),
						},
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchEditorMenu, {
						group: "2_any",
						command: {
							id: "workbench.action.previousEditor",
							title: (0, i.localize)(3238, null),
						},
						order: 2,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchEditorMenu, {
						group: "3_any_used",
						command: {
							id: "workbench.action.openNextRecentlyUsedEditor",
							title: (0, i.localize)(3239, null),
						},
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchEditorMenu, {
						group: "3_any_used",
						command: {
							id: "workbench.action.openPreviousRecentlyUsedEditor",
							title: (0, i.localize)(3240, null),
						},
						order: 2,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchEditorMenu, {
						group: "4_group",
						command: {
							id: "workbench.action.nextEditorInGroup",
							title: (0, i.localize)(3241, null),
						},
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchEditorMenu, {
						group: "4_group",
						command: {
							id: "workbench.action.previousEditorInGroup",
							title: (0, i.localize)(3242, null),
						},
						order: 2,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchEditorMenu, {
						group: "5_group_used",
						command: {
							id: "workbench.action.openNextRecentlyUsedEditorInGroup",
							title: (0, i.localize)(3243, null),
						},
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchEditorMenu, {
						group: "5_group_used",
						command: {
							id: "workbench.action.openPreviousRecentlyUsedEditorInGroup",
							title: (0, i.localize)(3244, null),
						},
						order: 2,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarGoMenu, {
						group: "2_editor_nav",
						title: (0, i.localize)(3245, null),
						submenu: o.$XX.MenubarSwitchEditorMenu,
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchGroupMenu, {
						group: "1_focus_index",
						command: {
							id: "workbench.action.focusFirstEditorGroup",
							title: (0, i.localize)(3246, null),
						},
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchGroupMenu, {
						group: "1_focus_index",
						command: {
							id: "workbench.action.focusSecondEditorGroup",
							title: (0, i.localize)(3247, null),
						},
						order: 2,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchGroupMenu, {
						group: "1_focus_index",
						command: {
							id: "workbench.action.focusThirdEditorGroup",
							title: (0, i.localize)(3248, null),
							precondition: C.$4Pb,
						},
						order: 3,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchGroupMenu, {
						group: "1_focus_index",
						command: {
							id: "workbench.action.focusFourthEditorGroup",
							title: (0, i.localize)(3249, null),
							precondition: C.$4Pb,
						},
						order: 4,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchGroupMenu, {
						group: "1_focus_index",
						command: {
							id: "workbench.action.focusFifthEditorGroup",
							title: (0, i.localize)(3250, null),
							precondition: C.$4Pb,
						},
						order: 5,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchGroupMenu, {
						group: "2_next_prev",
						command: {
							id: "workbench.action.focusNextGroup",
							title: (0, i.localize)(3251, null),
							precondition: C.$4Pb,
						},
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchGroupMenu, {
						group: "2_next_prev",
						command: {
							id: "workbench.action.focusPreviousGroup",
							title: (0, i.localize)(3252, null),
							precondition: C.$4Pb,
						},
						order: 2,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchGroupMenu, {
						group: "3_directional",
						command: {
							id: "workbench.action.focusLeftGroup",
							title: (0, i.localize)(3253, null),
							precondition: C.$4Pb,
						},
						order: 1,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchGroupMenu, {
						group: "3_directional",
						command: {
							id: "workbench.action.focusRightGroup",
							title: (0, i.localize)(3254, null),
							precondition: C.$4Pb,
						},
						order: 2,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchGroupMenu, {
						group: "3_directional",
						command: {
							id: "workbench.action.focusAboveGroup",
							title: (0, i.localize)(3255, null),
							precondition: C.$4Pb,
						},
						order: 3,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarSwitchGroupMenu, {
						group: "3_directional",
						command: {
							id: "workbench.action.focusBelowGroup",
							title: (0, i.localize)(3256, null),
							precondition: C.$4Pb,
						},
						order: 4,
					}),
					o.$ZX.appendMenuItem(o.$XX.MenubarGoMenu, {
						group: "2_editor_nav",
						title: (0, i.localize)(3257, null),
						submenu: o.$XX.MenubarSwitchGroupMenu,
						order: 2,
					});
			},
		)
