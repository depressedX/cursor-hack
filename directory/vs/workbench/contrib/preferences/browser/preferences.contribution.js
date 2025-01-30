import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/network.js';
import '../../../../base/common/types.js';
import '../../../../base/common/uri.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/contrib/suggest/browser/suggest.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextkey/common/contextkeys.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../browser/actions/workspaceCommands.js';
import '../../../browser/editor.js';
import '../../../common/contributions.js';
import '../../../common/editor.js';
import '../../../common/contextkeys.js';
import '../../files/common/files.js';
import './keybindingsEditor.js';
import './preferencesActions.js';
import './preferencesEditor.js';
import './preferencesIcons.js';
import './settingsEditor2.js';
import '../common/preferences.js';
import '../common/preferencesContribution.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/environment/common/environmentService.js';
import '../../../services/extensions/common/extensions.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../services/preferences/browser/keybindingsEditorInput.js';
import '../../../services/preferences/common/preferences.js';
import '../../../services/preferences/common/preferencesEditorInput.js';
import '../../../services/userDataProfile/common/userDataProfile.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../platform/quickinput/browser/commandsQuickAccess.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../../css!vs/workbench/contrib/preferences/browser/media/preferences.js';
define(
			de[4356],
			he([
				1, 0, 27, 3, 23, 28, 9, 46, 373, 4, 11, 31, 8, 179, 102, 5, 43, 73, 30,
				25, 633, 192, 55, 44, 100, 220, 3785, 3535, 3758, 612, 4355, 468, 3886,
				18, 78, 53, 52, 1310, 131, 1312, 133, 129, 56, 679, 99, 2477,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*keyCodes*/,
				i /*lifecycle*/,
				w /*network*/,
				E /*types*/,
				C /*uri*/,
				d /*editorExtensions*/,
				m /*suggest*/,
				r /*nls*/,
				u /*actions*/,
				a /*commands*/,
				h /*contextkey*/,
				c /*contextkeys*/,
				n /*descriptors*/,
				g /*instantiation*/,
				p /*keybindingsRegistry*/,
				o /*label*/,
				f /*platform*/,
				b /*workspace*/,
				s /*workspaceCommands*/,
				l /*editor*/,
				y /*contributions*/,
				$ /*editor*/,
				v /*contextkeys*/,
				S /*files*/,
				I /*keybindingsEditor*/,
				T /*preferencesActions*/,
				P /*preferencesEditor*/,
				k /*preferencesIcons*/,
				L /*settingsEditor2*/,
				D /*preferences*/,
				M /*preferencesContribution*/,
				N /*editorService*/,
				A /*environmentService*/,
				R /*extensions*/,
				O /*lifecycle*/,
				B /*keybindingsEditorInput*/,
				U /*preferences*/,
				z /*preferencesEditorInput*/,
				F /*userDataProfile*/,
				x /*userDataProfile*/,
				H /*editorBrowser*/,
				q /*commandsQuickAccess*/,
				V /*actionCommonCategories*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (r = mt(r));
				const G = "settings.action.search",
					K = "settings.action.focusSettingsFile",
					J = "settings.action.focusSettingsFromSearch",
					W = "settings.action.focusSettingsList",
					X = "settings.action.focusTOC",
					Y = "settings.action.focusSettingControl",
					ie = "settings.action.focusLevelUp",
					ne = "settings.switchToJSON",
					ee = "settings.filterByOnline",
					_ = "settings.filterUntrusted",
					te = "workbench.action.openSettings",
					Q = "settings.filterByTelemetry";
				f.$Io
					.as($.$a1.EditorPane)
					.registerEditorPane(
						l.$vVb.create(L.$aEc, L.$aEc.ID, r.localize(8390, null)),
						[new n.$Ji(z.$uvc)],
					),
					f.$Io
						.as($.$a1.EditorPane)
						.registerEditorPane(
							l.$vVb.create(I.$oCc, I.$oCc.ID, r.localize(8391, null)),
							[new n.$Ji(B.$tvc)],
						);
				class Z {
					canSerialize(ge) {
						return !0;
					}
					serialize(ge) {
						return "";
					}
					deserialize(ge) {
						return ge.createInstance(B.$tvc);
					}
				}
				class se {
					canSerialize(ge) {
						return !0;
					}
					serialize(ge) {
						return "";
					}
					deserialize(ge) {
						return ge.createInstance(z.$uvc);
					}
				}
				f.$Io.as($.$a1.EditorFactory).registerEditorSerializer(B.$tvc.ID, Z),
					f.$Io.as($.$a1.EditorFactory).registerEditorSerializer(z.$uvc.ID, se);
				const re = r.localize2(8405, "Open Settings (UI)"),
					le = r.localize2(8406, "Open User Settings (JSON)"),
					oe = r.localize2(8407, "Open Application Settings (JSON)"),
					ae = V.$ck.Preferences;
				function pe(ve) {
					return (0, E.$rg)(ve) ? ve : void 0;
				}
				function $e(ve) {
					return (0, E.$lg)(ve) ? ve : void 0;
				}
				function ye(ve) {
					(0, E.$ng)(ve) || (ve = {});
					let ge = {
						focusSearch: pe(ve?.focusSearch),
						openToSide: pe(ve?.openToSide),
						query: $e(ve?.query),
					};
					return (
						(0, E.$lg)(ve?.revealSetting?.key) &&
							(ge = {
								...ge,
								revealSetting: {
									key: ve.revealSetting.key,
									edit: pe(ve.revealSetting?.edit),
								},
							}),
						ge
					);
				}
				let ue = class extends i.$1c {
					static {
						this.ID = "workbench.contrib.preferencesActions";
					}
					constructor(ge, be, Ce, Le, Fe, Oe, xe) {
						super(),
							(this.a = ge),
							(this.b = be),
							(this.c = Ce),
							(this.f = Le),
							(this.g = Fe),
							(this.h = Oe),
							(this.j = xe),
							this.m(),
							this.q(),
							this.s(),
							this.D(Le.onDidChangeWorkbenchState(() => this.s())),
							this.D(Le.onDidChangeWorkspaceFolders(() => this.t()));
					}
					m() {
						this.D(
							(0, u.$4X)(
								class extends u.$3X {
									constructor() {
										super({
											id: te,
											title: {
												...r.localize2(8408, "Settings"),
												mnemonicTitle: r.localize(8392, null),
												original: "VS Code Settings",
											},
											keybinding: {
												weight: p.KeybindingWeight.WorkbenchContrib,
												when: null,
												primary: t.KeyMod.CtrlCmd | t.KeyCode.Comma,
											},
											menu: [
												{
													id: u.$XX.GlobalActivity,
													group: "2_configuration",
													order: 2,
												},
												{
													id: u.$XX.MenubarPreferencesMenu,
													group: "2_configuration",
													order: 2,
												},
											],
										});
									}
									run(be, Ce) {
										const Le = typeof Ce == "string" ? { query: Ce } : ye(Ce);
										return be.get(U.$7Z).openSettings(Le);
									}
								},
							),
						),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: "workbench.action.openSettings2",
												title: r.localize2(8409, "Open Settings (UI)"),
												category: ae,
												f1: !0,
											});
										}
										run(be, Ce) {
											return (
												(Ce = ye(Ce)),
												be.get(U.$7Z).openSettings({ jsonEditor: !1, ...Ce })
											);
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: "workbench.action.openSettingsJson",
												title: le,
												metadata: {
													description: r.localize2(
														8410,
														"Opens the JSON file containing the current user profile settings",
													),
												},
												category: ae,
												f1: !0,
											});
										}
										run(be, Ce) {
											return (
												(Ce = ye(Ce)),
												be.get(U.$7Z).openSettings({ jsonEditor: !0, ...Ce })
											);
										}
									},
								),
							);
						const ge = this;
						this.D(
							(0, u.$4X)(
								class extends u.$3X {
									constructor() {
										super({
											id: "workbench.action.openApplicationSettingsJson",
											title: oe,
											category: ae,
											menu: {
												id: u.$XX.CommandPalette,
												when: h.$Kj.notEquals(
													F.$48.key,
													ge.j.defaultProfile.id,
												),
											},
										});
									}
									run(be, Ce) {
										return (
											(Ce = ye(Ce)),
											be
												.get(U.$7Z)
												.openApplicationSettings({ jsonEditor: !0, ...Ce })
										);
									}
								},
							),
						),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: "workbench.action.openGlobalSettings",
												title: r.localize2(8411, "Open User Settings"),
												category: ae,
												f1: !0,
											});
										}
										run(be, Ce) {
											return (Ce = ye(Ce)), be.get(U.$7Z).openUserSettings(Ce);
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: "workbench.action.openGlobalSettingsCursorAlias",
												title: { value: q.$O0b, original: q.$O0b },
												f1: !0,
											});
										}
										run(be, Ce) {
											return (Ce = ye(Ce)), be.get(U.$7Z).openUserSettings(Ce);
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: "workbench.action.openRawDefaultSettings",
												title: r.localize2(
													8412,
													"Open Default Settings (JSON)",
												),
												category: ae,
												f1: !0,
											});
										}
										run(be) {
											return be.get(U.$7Z).openRawDefaultSettings();
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: T.$pCc.ID,
												title: T.$pCc.LABEL,
												category: ae,
												f1: !0,
											});
										}
										run(be) {
											return be
												.get(g.$Li)
												.createInstance(T.$pCc, T.$pCc.ID, T.$pCc.LABEL.value)
												.run();
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: "workbench.action.openWorkspaceSettings",
												title: r.localize2(8413, "Open Workspace Settings"),
												category: ae,
												menu: {
													id: u.$XX.CommandPalette,
													when: v.$wPb.notEqualsTo("empty"),
												},
											});
										}
										run(be, Ce) {
											return (
												(Ce = typeof Ce == "string" ? { query: Ce } : ye(Ce)),
												be.get(U.$7Z).openWorkspaceSettings(Ce)
											);
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: "workbench.action.openAccessibilitySettings",
												title: r.localize2(8414, "Open Accessibility Settings"),
												category: ae,
												menu: {
													id: u.$XX.CommandPalette,
													when: v.$wPb.notEqualsTo("empty"),
												},
											});
										}
										async run(be) {
											await be
												.get(U.$7Z)
												.openSettings({
													jsonEditor: !1,
													query: "@tag:accessibility",
												});
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: "workbench.action.openWorkspaceSettingsFile",
												title: r.localize2(
													8415,
													"Open Workspace Settings (JSON)",
												),
												category: ae,
												menu: {
													id: u.$XX.CommandPalette,
													when: v.$wPb.notEqualsTo("empty"),
												},
											});
										}
										run(be, Ce) {
											return (
												(Ce = ye(Ce)),
												be
													.get(U.$7Z)
													.openWorkspaceSettings({ jsonEditor: !0, ...Ce })
											);
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: "workbench.action.openFolderSettings",
												title: r.localize2(8416, "Open Folder Settings"),
												category: ae,
												menu: {
													id: u.$XX.CommandPalette,
													when: v.$wPb.isEqualTo("workspace"),
												},
											});
										}
										async run(be, Ce) {
											const Le = be.get(a.$ek),
												Fe = be.get(U.$7Z),
												Oe = await Le.executeCommand(s.$qRb);
											Oe &&
												((Ce = ye(Ce)),
												await Fe.openFolderSettings({
													folderUri: Oe.uri,
													...Ce,
												}));
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: "workbench.action.openFolderSettingsFile",
												title: r.localize2(8417, "Open Folder Settings (JSON)"),
												category: ae,
												menu: {
													id: u.$XX.CommandPalette,
													when: v.$wPb.isEqualTo("workspace"),
												},
											});
										}
										async run(be, Ce) {
											const Le = be.get(a.$ek),
												Fe = be.get(U.$7Z),
												Oe = await Le.executeCommand(s.$qRb);
											Oe &&
												((Ce = ye(Ce)),
												await Fe.openFolderSettings({
													folderUri: Oe.uri,
													jsonEditor: !0,
													...Ce,
												}));
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: "_workbench.action.openFolderSettings",
												title: r.localize(8393, null),
												category: ae,
												menu: {
													id: u.$XX.ExplorerContext,
													group: "2_workspace",
													order: 20,
													when: h.$Kj.and(S.$DUb, S.$zUb),
												},
											});
										}
										async run(be, Ce) {
											if (C.URI.isUri(Ce))
												await be
													.get(U.$7Z)
													.openFolderSettings({ folderUri: Ce });
											else {
												const Le = be.get(a.$ek),
													Fe = be.get(U.$7Z),
													Oe = await Le.executeCommand(s.$qRb);
												Oe &&
													(await Fe.openFolderSettings({ folderUri: Oe.uri }));
											}
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: ee,
												title: r.localize(8394, null),
												menu: {
													id: u.$XX.MenubarPreferencesMenu,
													group: "3_settings",
													order: 1,
												},
											});
										}
										run(be) {
											const Ce = be.get(N.$IY).activeEditorPane;
											Ce instanceof L.$aEc
												? Ce.focusSearch("@tag:usesOnlineServices")
												: be
														.get(U.$7Z)
														.openSettings({
															jsonEditor: !1,
															query: "@tag:usesOnlineServices",
														});
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: _,
												title: r.localize2(
													8418,
													"Show untrusted workspace settings",
												),
											});
										}
										run(be) {
											be.get(U.$7Z).openWorkspaceSettings({
												jsonEditor: !1,
												query: `@tag:${D.$WBc}`,
											});
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({ id: Q, title: r.localize(8395, null) });
										}
										run(be) {
											const Ce = be.get(N.$IY).activeEditorPane;
											Ce instanceof L.$aEc
												? Ce.focusSearch("@tag:telemetry")
												: be
														.get(U.$7Z)
														.openSettings({
															jsonEditor: !1,
															query: "@tag:telemetry",
														});
										}
									},
								),
							),
							this.n(),
							this.h.whenInstalledExtensionsRegistered().then(() => {
								const be = this.a.remoteAuthority,
									Ce = this.g.getHostLabel(w.Schemas.vscodeRemote, be) || be;
								this.D(
									(0, u.$4X)(
										class extends u.$3X {
											constructor() {
												super({
													id: "workbench.action.openRemoteSettings",
													title: r.localize2(
														8419,
														"Open Remote Settings ({0})",
														Ce,
													),
													category: ae,
													menu: {
														id: u.$XX.CommandPalette,
														when: v.$CPb.notEqualsTo(""),
													},
												});
											}
											run(Le, Fe) {
												return (
													(Fe = ye(Fe)), Le.get(U.$7Z).openRemoteSettings(Fe)
												);
											}
										},
									),
								),
									this.D(
										(0, u.$4X)(
											class extends u.$3X {
												constructor() {
													super({
														id: "workbench.action.openRemoteSettingsFile",
														title: r.localize2(
															8420,
															"Open Remote Settings (JSON) ({0})",
															Ce,
														),
														category: ae,
														menu: {
															id: u.$XX.CommandPalette,
															when: v.$CPb.notEqualsTo(""),
														},
													});
												}
												run(Le, Fe) {
													return (
														(Fe = ye(Fe)),
														Le.get(U.$7Z).openRemoteSettings({
															jsonEditor: !0,
															...Fe,
														})
													);
												}
											},
										),
									);
							});
					}
					n() {
						function ge(Ce) {
							const Le = Ce.get(N.$IY).activeEditorPane;
							return Le instanceof L.$aEc ? Le : null;
						}
						function be(Ce) {
							ge(Ce)?.focusSearch();
						}
						this.D(
							(0, u.$4X)(
								class extends u.$3X {
									constructor() {
										super({
											id: G,
											precondition: D.$lBc,
											keybinding: {
												primary: t.KeyMod.CtrlCmd | t.KeyCode.KeyF,
												weight: p.KeybindingWeight.EditorContrib,
												when: null,
											},
											category: ae,
											f1: !0,
											title: r.localize2(8421, "Focus Settings Search"),
										});
									}
									run(Ce) {
										be(Ce);
									}
								},
							),
						),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: D.$iBc,
												precondition: D.$lBc,
												keybinding: {
													primary: t.KeyCode.Escape,
													weight: p.KeybindingWeight.EditorContrib,
													when: D.$nBc,
												},
												category: ae,
												f1: !0,
												title: r.localize2(
													8422,
													"Clear Settings Search Results",
												),
											});
										}
										run(Ce) {
											ge(Ce)?.clearSearchResults();
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: K,
												precondition: h.$Kj.and(
													D.$nBc,
													m.$YCb.Visible.toNegated(),
												),
												keybinding: {
													primary: t.KeyCode.DownArrow,
													weight: p.KeybindingWeight.EditorContrib,
													when: null,
												},
												title: r.localize(8396, null),
											});
										}
										run(Ce, Le) {
											ge(Ce)?.focusSettings();
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: J,
												precondition: h.$Kj.and(
													D.$nBc,
													m.$YCb.Visible.toNegated(),
												),
												keybinding: {
													primary: t.KeyCode.DownArrow,
													weight: p.KeybindingWeight.WorkbenchContrib,
													when: null,
												},
												title: r.localize(8397, null),
											});
										}
										run(Ce, Le) {
											ge(Ce)?.focusSettings();
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: W,
												precondition: h.$Kj.and(D.$lBc, D.$oBc),
												keybinding: {
													primary: t.KeyCode.Enter,
													weight: p.KeybindingWeight.WorkbenchContrib,
													when: null,
												},
												title: r.localize(8398, null),
											});
										}
										run(Ce) {
											const Le = ge(Ce);
											Le instanceof L.$aEc && Le.focusSettings();
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: X,
												precondition: D.$lBc,
												f1: !0,
												keybinding: [
													{
														primary: t.KeyCode.LeftArrow,
														weight: p.KeybindingWeight.WorkbenchContrib,
														when: D.$pBc,
													},
												],
												category: ae,
												title: r.localize2(
													8423,
													"Focus Settings Table of Contents",
												),
											});
										}
										run(Ce) {
											const Le = ge(Ce);
											Le instanceof L.$aEc && Le.focusTOC();
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: Y,
												precondition: h.$Kj.and(D.$lBc, D.$pBc),
												keybinding: {
													primary: t.KeyCode.Enter,
													weight: p.KeybindingWeight.WorkbenchContrib,
												},
												title: r.localize(8399, null),
											});
										}
										run(Ce) {
											const Le = ge(Ce);
											if (!(Le instanceof L.$aEc)) return;
											Le.getContainer()?.ownerDocument.activeElement?.classList.contains(
												"monaco-list",
											) && Le.focusSettings(!0);
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: D.$jBc,
												precondition: D.$lBc,
												keybinding: {
													primary: t.KeyMod.Shift | t.KeyCode.F9,
													weight: p.KeybindingWeight.WorkbenchContrib,
													when: null,
												},
												f1: !0,
												category: ae,
												title: r.localize2(8424, "Show Setting Context Menu"),
											});
										}
										run(Ce) {
											const Le = ge(Ce);
											Le instanceof L.$aEc && Le.showContextMenu();
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: ie,
												precondition: h.$Kj.and(
													D.$lBc,
													D.$nBc.toNegated(),
													D.$mBc.toNegated(),
												),
												keybinding: {
													primary: t.KeyCode.Escape,
													weight: p.KeybindingWeight.WorkbenchContrib,
													when: null,
												},
												f1: !0,
												category: ae,
												title: r.localize2(8425, "Move Focus Up One Level"),
											});
										}
										run(Ce) {
											const Le = ge(Ce);
											Le instanceof L.$aEc &&
												(Le.currentFocusContext ===
												L.SettingsFocusContext.SettingControl
													? Le.focusSettings()
													: Le.currentFocusContext ===
															L.SettingsFocusContext.SettingTree
														? Le.focusTOC()
														: Le.currentFocusContext ===
																L.SettingsFocusContext.TableOfContents &&
															Le.focusSearch());
										}
									},
								),
							);
					}
					q() {
						const ge = this,
							be = r.localize2(8426, "Preferences"),
							Ce = "workbench.action.openGlobalKeybindings";
						this.D(
							(0, u.$4X)(
								class extends u.$3X {
									constructor() {
										super({
											id: Ce,
											title: r.localize2(8427, "Open Keyboard Shortcuts"),
											shortTitle: r.localize(8400, null),
											category: be,
											icon: k.$_Ac,
											keybinding: {
												when: null,
												weight: p.KeybindingWeight.WorkbenchContrib,
												primary: (0, t.$os)(
													t.$ps,
													t.KeyMod.CtrlCmd | t.KeyCode.KeyS,
												),
												mac: {
													primary: (0, t.$os)(
														t.$qs,
														t.KeyMod.CtrlCmd | t.KeyCode.KeyS,
													),
												},
											},
											menu: [
												{ id: u.$XX.CommandPalette },
												{
													id: u.$XX.EditorTitle,
													when: v.$BQb.Resource.isEqualTo(
														ge.b.currentProfile.keybindingsResource.toString(),
													),
													group: "navigation",
													order: 1,
												},
												{
													id: u.$XX.GlobalActivity,
													group: "2_configuration",
													order: 4,
												},
											],
										});
									}
									run(Le, Fe) {
										const Oe = typeof Fe == "string" ? Fe : void 0;
										return Le.get(U.$7Z).openGlobalKeybindingSettings(!1, {
											query: Oe,
										});
									}
								},
							),
						),
							this.D(
								u.$ZX.appendMenuItem(u.$XX.MenubarPreferencesMenu, {
									command: { id: Ce, title: r.localize(8401, null) },
									group: "2_configuration",
									order: 4,
								}),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: "workbench.action.openDefaultKeybindingsFile",
												title: r.localize2(
													8428,
													"Open Default Keyboard Shortcuts (JSON)",
												),
												category: be,
												menu: { id: u.$XX.CommandPalette },
											});
										}
										run(Le) {
											return Le.get(U.$7Z).openDefaultKeybindingsFile();
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: "workbench.action.openGlobalKeybindingsFile",
												title: r.localize2(
													8429,
													"Open Keyboard Shortcuts (JSON)",
												),
												category: be,
												icon: k.$_Ac,
												menu: [
													{ id: u.$XX.CommandPalette },
													{
														id: u.$XX.EditorTitle,
														when: h.$Kj.and(D.$qBc),
														group: "navigation",
													},
												],
											});
										}
										run(Le) {
											return Le.get(U.$7Z).openGlobalKeybindingSettings(!0);
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: D.$LBc,
												title: r.localize2(8430, "Show System Keybindings"),
												menu: [
													{
														id: u.$XX.EditorTitle,
														when: h.$Kj.and(D.$qBc),
														group: "1_keyboard_preferences_actions",
													},
												],
											});
										}
										run(Le) {
											const Fe = Le.get(N.$IY).activeEditorPane;
											Fe instanceof I.$oCc && Fe.search("@source:system");
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: D.$NBc,
												title: r.localize2(8431, "Show Extension Keybindings"),
												menu: [
													{
														id: u.$XX.EditorTitle,
														when: h.$Kj.and(D.$qBc),
														group: "1_keyboard_preferences_actions",
													},
												],
											});
										}
										run(Le) {
											const Fe = Le.get(N.$IY).activeEditorPane;
											Fe instanceof I.$oCc && Fe.search("@source:extension");
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: D.$MBc,
												title: r.localize2(8432, "Show User Keybindings"),
												menu: [
													{
														id: u.$XX.EditorTitle,
														when: h.$Kj.and(D.$qBc),
														group: "1_keyboard_preferences_actions",
													},
												],
											});
										}
										run(Le) {
											const Fe = Le.get(N.$IY).activeEditorPane;
											Fe instanceof I.$oCc && Fe.search("@source:user");
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: D.$vBc,
												title: r.localize(8402, null),
												keybinding: {
													weight: p.KeybindingWeight.WorkbenchContrib,
													when: h.$Kj.and(D.$qBc, D.$rBc),
													primary: t.KeyCode.Escape,
												},
											});
										}
										run(Le) {
											const Fe = Le.get(N.$IY).activeEditorPane;
											Fe instanceof I.$oCc && Fe.clearSearchResults();
										}
									},
								),
							),
							this.D(
								(0, u.$4X)(
									class extends u.$3X {
										constructor() {
											super({
												id: D.$wBc,
												title: r.localize(8403, null),
												category: be,
												menu: [
													{ id: u.$XX.CommandPalette, when: h.$Kj.and(D.$qBc) },
												],
											});
										}
										run(Le) {
											const Fe = Le.get(N.$IY).activeEditorPane;
											Fe instanceof I.$oCc &&
												Fe.clearKeyboardShortcutSearchHistory();
										}
									},
								),
							),
							this.r();
					}
					r() {
						const ge = this;
						p.$TX.registerCommandAndKeybindingRule({
							id: D.$zBc,
							weight: p.KeybindingWeight.WorkbenchContrib,
							when: h.$Kj.and(D.$qBc, D.$sBc, D.$tBc.toNegated()),
							primary: t.KeyCode.Enter,
							handler: (Le, Fe) => {
								const Oe = Le.get(N.$IY).activeEditorPane;
								Oe instanceof I.$oCc &&
									Oe.defineKeybinding(Oe.activeKeybindingEntry, !1);
							},
						}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$ABc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc, D.$sBc),
								primary: (0, t.$os)(t.$ps, t.KeyMod.CtrlCmd | t.KeyCode.KeyA),
								mac: {
									primary: (0, t.$os)(t.$qs, t.KeyMod.CtrlCmd | t.KeyCode.KeyA),
								},
								handler: (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc &&
										Oe.defineKeybinding(Oe.activeKeybindingEntry, !0);
								},
							}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$BBc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc, D.$sBc),
								primary: (0, t.$os)(t.$ps, t.KeyMod.CtrlCmd | t.KeyCode.KeyE),
								mac: {
									primary: (0, t.$os)(t.$qs, t.KeyMod.CtrlCmd | t.KeyCode.KeyE),
								},
								handler: (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc &&
										Oe.activeKeybindingEntry.keybindingItem.keybinding &&
										Oe.defineWhenExpression(Oe.activeKeybindingEntry);
								},
							}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$EBc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc, D.$sBc, c.$bMb.toNegated()),
								primary: t.KeyCode.Delete,
								mac: { primary: t.KeyMod.CtrlCmd | t.KeyCode.Backspace },
								handler: (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc &&
										Oe.removeKeybinding(Oe.activeKeybindingEntry);
								},
							}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$FBc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc, D.$sBc),
								primary: 0,
								handler: (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc &&
										Oe.resetKeybinding(Oe.activeKeybindingEntry);
								},
							}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$uBc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc),
								primary: t.KeyMod.CtrlCmd | t.KeyCode.KeyF,
								handler: (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc && Oe.focusSearch();
								},
							}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$xBc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc, D.$rBc),
								primary: t.KeyMod.Alt | t.KeyCode.KeyK,
								mac: {
									primary: t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.KeyK,
								},
								handler: (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc && Oe.recordSearchKeys();
								},
							}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$yBc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc),
								primary: t.KeyMod.Alt | t.KeyCode.KeyP,
								mac: {
									primary: t.KeyMod.CtrlCmd | t.KeyMod.Alt | t.KeyCode.KeyP,
								},
								handler: (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc && Oe.toggleSortByPrecedence();
								},
							}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$JBc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc, D.$sBc),
								primary: 0,
								handler: (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc &&
										Oe.showSimilarKeybindings(Oe.activeKeybindingEntry);
								},
							}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$GBc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc, D.$sBc, D.$tBc.negate()),
								primary: t.KeyMod.CtrlCmd | t.KeyCode.KeyC,
								handler: async (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc &&
										(await Oe.copyKeybinding(Oe.activeKeybindingEntry));
								},
							}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$HBc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc, D.$sBc),
								primary: 0,
								handler: async (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc &&
										(await Oe.copyKeybindingCommand(Oe.activeKeybindingEntry));
								},
							}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$IBc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc, D.$sBc),
								primary: 0,
								handler: async (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc &&
										(await Oe.copyKeybindingCommandTitle(
											Oe.activeKeybindingEntry,
										));
								},
							}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$KBc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc, D.$rBc),
								primary: t.KeyMod.CtrlCmd | t.KeyCode.DownArrow,
								handler: (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc && Oe.focusKeybindings();
								},
							}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$DBc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc, D.$tBc, m.$YCb.Visible.toNegated()),
								primary: t.KeyCode.Escape,
								handler: async (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc &&
										Oe.rejectWhenExpression(Oe.activeKeybindingEntry);
								},
							}),
							p.$TX.registerCommandAndKeybindingRule({
								id: D.$CBc,
								weight: p.KeybindingWeight.WorkbenchContrib,
								when: h.$Kj.and(D.$qBc, D.$tBc, m.$YCb.Visible.toNegated()),
								primary: t.KeyCode.Enter,
								handler: async (Le, Fe) => {
									const Oe = Le.get(N.$IY).activeEditorPane;
									Oe instanceof I.$oCc &&
										Oe.acceptWhenExpression(Oe.activeKeybindingEntry);
								},
							});
						const be = this.D(new i.$Zc()),
							Ce = () => {
								be.clear(),
									be.add(
										(0, u.$4X)(
											class extends u.$3X {
												constructor() {
													const Fe = v.$BQb.Resource.isEqualTo(
														ge.b.currentProfile.keybindingsResource.toString(),
													);
													super({
														id: "editor.action.defineKeybinding",
														title: r.localize2(8433, "Define Keybinding"),
														f1: !0,
														precondition: Fe,
														keybinding: {
															weight: p.KeybindingWeight.WorkbenchContrib,
															when: Fe,
															primary: (0, t.$os)(
																t.$ps,
																t.KeyMod.CtrlCmd | t.KeyCode.KeyK,
															),
															mac: {
																primary: (0, t.$os)(
																	t.$qs,
																	t.KeyMod.CtrlCmd | t.KeyCode.KeyK,
																),
															},
														},
														menu: { id: u.$XX.EditorContent, when: Fe },
													});
												}
												async run(Fe) {
													const Oe = Fe.get(N.$IY).activeTextEditorControl;
													(0, H.$0sb)(Oe) &&
														Oe.getContribution(
															U.$8Z,
														)?.showDefineKeybindingWidget();
												}
											},
										),
									);
							};
						Ce(), this.D(this.b.onDidChangeCurrentProfile(() => Ce()));
					}
					s() {
						const ge = "_workbench.openWorkspaceSettingsEditor";
						this.f.getWorkbenchState() === b.WorkbenchState.WORKSPACE &&
							!a.$fk.getCommand(ge) &&
							(a.$fk.registerCommand(ge, () =>
								this.c.openWorkspaceSettings({ jsonEditor: !1 }),
							),
							u.$ZX.appendMenuItem(u.$XX.EditorTitle, {
								command: { id: ge, title: re, icon: k.$_Ac },
								when: h.$Kj.and(
									v.$BQb.Resource.isEqualTo(
										this.c.workspaceSettingsResource.toString(),
									),
									v.$wPb.isEqualTo("workspace"),
									h.$Kj.not("isInDiffEditor"),
								),
								group: "navigation",
								order: 1,
							})),
							this.t();
					}
					t() {
						for (const ge of this.f.getWorkspace().folders) {
							const be = `_workbench.openFolderSettings.${ge.uri.toString()}`;
							a.$fk.getCommand(be) ||
								(a.$fk.registerCommand(be, () =>
									this.f.getWorkbenchState() === b.WorkbenchState.FOLDER
										? this.c.openWorkspaceSettings({ jsonEditor: !1 })
										: this.c.openFolderSettings({
												folderUri: ge.uri,
												jsonEditor: !1,
											}),
								),
								u.$ZX.appendMenuItem(u.$XX.EditorTitle, {
									command: { id: be, title: re, icon: k.$_Ac },
									when: h.$Kj.and(
										v.$BQb.Resource.isEqualTo(
											this.c.getFolderSettingsResource(ge.uri).toString(),
										),
										h.$Kj.not("isInDiffEditor"),
									),
									group: "navigation",
									order: 1,
								}));
						}
					}
				};
				ue = Ne(
					[
						j(0, A.$r8),
						j(1, F.$P8),
						j(2, U.$7Z),
						j(3, b.$Vi),
						j(4, o.$3N),
						j(5, R.$q2),
						j(6, x.$Xl),
					],
					ue,
				);
				let fe = class extends i.$1c {
					constructor(ge, be) {
						super(), (this.a = ge), (this.b = be), this.c();
					}
					c() {
						const ge = this.D(new i.$2c()),
							be = h.$Kj.and(
								h.$Kj.or(
									v.$BQb.Resource.isEqualTo(
										this.a.currentProfile.settingsResource.toString(),
									),
									v.$BQb.Resource.isEqualTo(
										this.b.defaultProfile.settingsResource.toString(),
									),
								),
								h.$Kj.not("isInDiffEditor"),
							),
							Ce = () => {
								(ge.value = void 0),
									(ge.value = (0, u.$4X)(
										class extends u.$3X {
											constructor() {
												super({
													id: "_workbench.openUserSettingsEditor",
													title: re,
													icon: k.$_Ac,
													menu: [
														{
															id: u.$XX.EditorTitle,
															when: be,
															group: "navigation",
															order: 1,
														},
													],
												});
											}
											run(Fe, Oe) {
												return (
													(Oe = ye(Oe)),
													Fe.get(U.$7Z).openUserSettings({
														jsonEditor: !1,
														...Oe,
													})
												);
											}
										},
									));
							};
						Ce(),
							this.D(
								this.a.onDidChangeCurrentProfile(() => {
									Ce();
								}),
							);
						const Le = h.$Kj.and(D.$lBc, D.$mBc.toNegated());
						this.D(
							(0, u.$4X)(
								class extends u.$3X {
									constructor() {
										super({
											id: ne,
											title: r.localize2(8434, "Open Settings (JSON)"),
											icon: k.$_Ac,
											menu: [
												{
													id: u.$XX.EditorTitle,
													when: Le,
													group: "navigation",
													order: 1,
												},
											],
										});
									}
									run(Fe) {
										const Oe = Fe.get(N.$IY).activeEditorPane;
										return Oe instanceof L.$aEc
											? Oe.switchToSettingsFile()
											: null;
									}
								},
							),
						);
					}
				};
				fe = Ne([j(0, F.$P8), j(1, x.$Xl)], fe);
				const me = f.$Io.as(y.Extensions.Workbench);
				(0, y.$s6)(ue.ID, ue, y.WorkbenchPhase.BlockStartup),
					(0, y.$s6)(M.$cEc.ID, M.$cEc, y.WorkbenchPhase.BlockStartup),
					me.registerWorkbenchContribution(fe, O.LifecyclePhase.Restored),
					(0, d.$qtb)(
						P.$sCc.ID,
						P.$sCc,
						d.EditorContributionInstantiation.AfterFirstRender,
					),
					u.$ZX.appendMenuItem(u.$XX.MenubarFileMenu, {
						title: r.localize(8404, null),
						submenu: u.$XX.MenubarPreferencesMenu,
						group: "5_autosave",
						order: 2,
						when: c.$8Lb.toNegated(),
					});
			},
		),
		