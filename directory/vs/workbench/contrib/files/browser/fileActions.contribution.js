import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import './fileActions.js';
import './editors/textFileSaveErrorHandler.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../base/common/keyCodes.js';
import './fileCommands.js';
import './fileConstants.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../common/files.js';
import '../../../browser/actions/workspaceCommands.js';
import '../../../browser/parts/editor/editorCommands.js';
import '../../../services/filesConfiguration/common/filesConfigurationService.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../base/common/network.js';
import '../../../common/contextkeys.js';
import '../../../../platform/contextkey/common/contextkeys.js';
import './files.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../composer/browser/constants.js';
import '../../composer/browser/composerContextKeys.js';
define(
			de[1993],
			he([
				1, 0, 4, 1057, 1882, 11, 27, 4300, 554, 31, 8, 43, 220, 633, 247, 170,
				93, 23, 100, 179, 382, 14, 99, 169, 793,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*fileActions*/,
				w /*textFileSaveErrorHandler*/,
				E /*actions*/,
				C /*keyCodes*/,
				d /*fileCommands*/,
				m /*fileConstants*/,
				r /*commands*/,
				u /*contextkey*/,
				a /*keybindingsRegistry*/,
				h /*files*/,
				c /*workspaceCommands*/,
				n /*editorCommands*/,
				g /*filesConfigurationService*/,
				p /*listService*/,
				o /*network*/,
				f /*contextkeys*/,
				b /*contextkeys*/,
				s /*files*/,
				l /*codicons*/,
				y /*actionCommonCategories*/,
				$ /*constants*/,
				v /*composerContextKeys*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$YMc = A),
					(e.$ZMc = O),
					(t = mt(t)),
					(0, E.$4X)(i.$0Wb),
					(0, E.$4X)(i.$bXb),
					(0, E.$4X)(i.$cXb),
					(0, E.$4X)(i.$gXb),
					(0, E.$4X)(i.$fXb),
					(0, E.$4X)(i.$$Wb),
					(0, E.$4X)(i.$dXb),
					(0, E.$4X)(i.$oXb),
					(0, E.$4X)(i.$pXb),
					(0, E.$4X)(i.$qXb),
					(0, E.$4X)(i.$rXb),
					r.$fk.registerCommand("_files.windowOpen", d.$WMc),
					r.$fk.registerCommand("_files.newWindow", d.$XMc);
				const S = 10,
					I = "renameFile";
				a.$TX.registerCommandAndKeybindingRule({
					id: I,
					weight: a.KeybindingWeight.WorkbenchContrib + S,
					when: u.$Kj.and(h.$NUb, h.$DUb.toNegated(), h.$BUb),
					primary: C.KeyCode.F2,
					mac: { primary: C.KeyCode.Enter },
					handler: i.$hXb,
				});
				const T = "moveFileToTrash";
				a.$TX.registerCommandAndKeybindingRule({
					id: T,
					weight: a.KeybindingWeight.WorkbenchContrib + S,
					when: u.$Kj.and(h.$NUb, h.$BUb, h.$FUb),
					primary: C.KeyCode.Delete,
					mac: {
						primary: C.KeyMod.CtrlCmd | C.KeyCode.Backspace,
						secondary: [C.KeyCode.Delete],
					},
					handler: i.$iXb,
				});
				const P = "deleteFile";
				a.$TX.registerCommandAndKeybindingRule({
					id: P,
					weight: a.KeybindingWeight.WorkbenchContrib + S,
					when: u.$Kj.and(h.$NUb, h.$BUb),
					primary: C.KeyMod.Shift | C.KeyCode.Delete,
					mac: {
						primary: C.KeyMod.CtrlCmd | C.KeyMod.Alt | C.KeyCode.Backspace,
					},
					handler: i.$jXb,
				}),
					a.$TX.registerCommandAndKeybindingRule({
						id: P,
						weight: a.KeybindingWeight.WorkbenchContrib + S,
						when: u.$Kj.and(h.$NUb, h.$BUb, h.$FUb.toNegated()),
						primary: C.KeyCode.Delete,
						mac: { primary: C.KeyMod.CtrlCmd | C.KeyCode.Backspace },
						handler: i.$jXb,
					});
				const k = "filesExplorer.cut";
				a.$TX.registerCommandAndKeybindingRule({
					id: k,
					weight: a.KeybindingWeight.WorkbenchContrib + S,
					when: u.$Kj.and(h.$NUb, h.$DUb.toNegated(), h.$BUb),
					primary: C.KeyMod.CtrlCmd | C.KeyCode.KeyX,
					handler: i.$lXb,
				});
				const L = "filesExplorer.copy";
				a.$TX.registerCommandAndKeybindingRule({
					id: L,
					weight: a.KeybindingWeight.WorkbenchContrib + S,
					when: u.$Kj.and(h.$NUb, h.$DUb.toNegated()),
					primary: C.KeyMod.CtrlCmd | C.KeyCode.KeyC,
					handler: i.$kXb,
				});
				const D = "filesExplorer.paste";
				r.$fk.registerCommand(D, i.$mXb),
					a.$TX.registerKeybindingRule({
						id: `^${D}`,
						weight: a.KeybindingWeight.WorkbenchContrib + S,
						when: u.$Kj.and(h.$NUb, h.$BUb),
						primary: C.KeyMod.CtrlCmd | C.KeyCode.KeyV,
					}),
					a.$TX.registerCommandAndKeybindingRule({
						id: "filesExplorer.cancelCut",
						weight: a.KeybindingWeight.WorkbenchContrib + S,
						when: u.$Kj.and(h.$NUb, h.$EUb),
						primary: C.KeyCode.Escape,
						handler: async (K) => {
							await K.get(s.$LWb).setToCopy([], !0);
						},
					}),
					a.$TX.registerCommandAndKeybindingRule({
						id: "filesExplorer.openFilePreserveFocus",
						weight: a.KeybindingWeight.WorkbenchContrib + S,
						when: u.$Kj.and(h.$NUb, h.$zUb.toNegated()),
						primary: C.KeyCode.Space,
						handler: i.$nXb,
					});
				const M = { id: m.$4Ub, title: t.localize(6698, null) },
					N = { id: m.$5Ub, title: t.localize(6699, null) };
				A(m.$4Ub, M.title, f.$BQb.IsFileSystemResource, "1_cutcopypaste", !0),
					A(m.$5Ub, N.title, f.$BQb.IsFileSystemResource, "1_cutcopypaste", !0),
					A(
						m.$VUb,
						t.localize(6700, null),
						f.$BQb.IsFileSystemResource,
						"2_files",
						!1,
						1,
					);
				function A(K, J, W, X, Y, ie) {
					const ne = Y !== !0 ? f.$6Pb.negate() : void 0;
					E.$ZX.appendMenuItem(E.$XX.EditorTitleContext, {
						command: { id: K, title: J, precondition: ne },
						when: W,
						group: X,
						order: ie,
					});
				}
				R(
					"workbench.files.action.acceptLocalChanges",
					t.localize(6701, null),
					l.$ak.check,
					-10,
					w.$UMc,
				),
					R(
						"workbench.files.action.revertLocalChanges",
						t.localize(6702, null),
						l.$ak.discard,
						-9,
						w.$VMc,
					);
				function R(K, J, W, X, Y) {
					r.$fk.registerCommand(K, Y),
						E.$ZX.appendMenuItem(E.$XX.EditorTitle, {
							command: { id: K, title: J, icon: W },
							when: u.$Kj.equals(w.$RMc, !0),
							group: "navigation",
							order: X,
						});
				}
				function O({ id: K, title: J, category: W, metadata: X }, Y) {
					E.$ZX.appendMenuItem(E.$XX.CommandPalette, {
						command: { id: K, title: J, category: W, metadata: X },
						when: Y,
					});
				}
				O({
					id: m.$4Ub,
					title: t.localize2(6729, "Copy Path of Active File"),
					category: y.$ck.File,
				}),
					O({
						id: m.$5Ub,
						title: t.localize2(6730, "Copy Relative Path of Active File"),
						category: y.$ck.File,
					}),
					O({ id: m.$8Ub, title: m.$9Ub, category: y.$ck.File }),
					O({ id: m.$0Ub, title: m.$$Ub, category: y.$ck.File }),
					O({
						id: m.$bVb,
						title: t.localize2(6731, "Save All in Group"),
						category: y.$ck.File,
					}),
					O({
						id: m.$cVb,
						title: t.localize2(6732, "Save All Files"),
						category: y.$ck.File,
					}),
					O({
						id: m.$WUb,
						title: t.localize2(6733, "Revert File"),
						category: y.$ck.File,
					}),
					O({
						id: m.$3Ub,
						title: t.localize2(6734, "Compare Active File with Saved"),
						category: y.$ck.File,
						metadata: {
							description: t.localize2(
								6735,
								"Opens a new diff editor to compare the active file with the version on disk.",
							),
						},
					}),
					O({ id: m.$6Ub, title: m.$7Ub, category: y.$ck.File }),
					O(
						{ id: i.$UWb, title: i.$VWb, category: y.$ck.File },
						f.$xPb.notEqualsTo("0"),
					),
					O(
						{
							id: i.$WWb,
							title: i.$XWb,
							category: y.$ck.File,
							metadata: {
								description: t.localize2(
									6736,
									"Create a new folder or directory",
								),
							},
						},
						f.$xPb.notEqualsTo("0"),
					),
					O({ id: m.$oVb, title: m.$pVb, category: y.$ck.File });
				const B = u.$Kj.or(
						f.$BQb.IsFileSystemResource,
						f.$BQb.Scheme.isEqualTo(o.Schemas.untitled),
					),
					U = { id: m.$XUb, title: t.localize(6703, null) };
				E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
					group: "navigation",
					order: 10,
					command: U,
					when: B,
				}),
					E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
						group: "1_open",
						order: 10,
						command: { id: n.$_Vb, title: t.localize(6704, null) },
						when: u.$Kj.and(f.$UPb, m.$dVb.toNegated()),
					}),
					E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
						group: "1_cutcopypaste",
						order: 10,
						command: M,
						when: f.$BQb.IsFileSystemResource,
					}),
					E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
						group: "1_cutcopypaste",
						order: 20,
						command: N,
						when: f.$BQb.IsFileSystemResource,
					}),
					E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
						group: "2_save",
						order: 10,
						command: { id: m.$8Ub, title: m.$9Ub, precondition: m.$eVb },
						when: u.$Kj.or(
							f.$BQb.Scheme.isEqualTo(o.Schemas.untitled),
							u.$Kj.and(
								m.$dVb.toNegated(),
								m.$fVb.toNegated(),
								g.$$Y.toNegated(),
							),
						),
					}),
					E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
						group: "2_save",
						order: 20,
						command: {
							id: m.$WUb,
							title: t.localize(6705, null),
							precondition: m.$eVb,
						},
						when: u.$Kj.and(
							m.$dVb.toNegated(),
							m.$fVb.toNegated(),
							f.$BQb.Scheme.notEqualsTo(o.Schemas.untitled),
							g.$$Y.toNegated(),
						),
					}),
					E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
						group: "2_save",
						order: 30,
						command: {
							id: m.$bVb,
							title: t.localize(6706, null),
							precondition: f.$BPb,
						},
						when: m.$dVb,
					}),
					E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
						group: "3_compare",
						order: 10,
						command: {
							id: m.$3Ub,
							title: t.localize(6707, null),
							precondition: m.$eVb,
						},
						when: u.$Kj.and(
							f.$BQb.IsFileSystemResource,
							g.$$Y.toNegated(),
							p.$pMb.toNegated(),
						),
					});
				const z = { id: m.$2Ub, title: t.localize(6708, null) };
				E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
					group: "3_compare",
					order: 20,
					command: z,
					when: u.$Kj.and(f.$BQb.HasResource, m.$hVb, B, p.$pMb.toNegated()),
				});
				const F = { id: m.$ZUb, title: t.localize(6709, null) };
				E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
					group: "3_compare",
					order: 30,
					command: F,
					when: u.$Kj.and(f.$BQb.HasResource, B, p.$pMb.toNegated()),
				});
				const x = { id: m.$1Ub, title: t.localize(6710, null) };
				E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
					group: "3_compare",
					order: 30,
					command: x,
					when: u.$Kj.and(f.$BQb.HasResource, p.$pMb, m.$gVb),
				}),
					E.$ZX.appendMenuItem(E.$XX.EditorTitleContext, {
						group: "1_compare",
						order: 30,
						command: x,
						when: u.$Kj.and(f.$BQb.HasResource, f.$7Pb, f.$8Pb),
					});
				const H = {
					id: $.ADD_FILES_TO_CURRENT_COMPOSER_CHAT_ACTION_ID,
					title: "Add Files to Cursor Chat",
				};
				E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
					group: "3_composer",
					order: 20,
					command: H,
					when: u.$Kj.and(
						f.$BQb.HasResource,
						f.$BQb.IsFileSystemResource,
						h.$zUb.toNegated(),
						v.composerIsEnabled,
					),
				});
				const q = {
					id: $.ADD_FILES_TO_NEW_COMPOSER_CHAT_ACTION_ID,
					title: "Add Files to New Cursor Chat",
				};
				E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
					group: "3_composer",
					order: 25,
					command: q,
					when: u.$Kj.and(
						f.$BQb.HasResource,
						f.$BQb.IsFileSystemResource,
						h.$zUb.toNegated(),
						v.composerIsEnabled,
					),
				});
				const V = {
					id: $.ADD_FILES_TO_CURRENT_COMPOSER_ACTION_ID,
					title: "Add Files to Cursor Composer",
				};
				E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
					group: "3_composer",
					order: 20,
					command: V,
					when: u.$Kj.and(
						f.$BQb.HasResource,
						f.$BQb.IsFileSystemResource,
						h.$zUb.toNegated(),
						v.composerIsEnabled,
					),
				});
				const G = {
					id: $.ADD_FILES_TO_NEW_COMPOSER_ACTION_ID,
					title: "Add Files to New Cursor Composer",
				};
				E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
					group: "3_composer",
					order: 25,
					command: G,
					when: u.$Kj.and(
						f.$BQb.HasResource,
						f.$BQb.IsFileSystemResource,
						h.$zUb.toNegated(),
						v.composerIsEnabled,
					),
				}),
					E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
						group: "4_close",
						order: 10,
						command: { id: n.$YVb, title: t.localize(6711, null) },
						when: m.$dVb.toNegated(),
					}),
					E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
						group: "4_close",
						order: 20,
						command: { id: n.$2Vb, title: t.localize(6712, null) },
						when: m.$dVb.toNegated(),
					}),
					E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
						group: "4_close",
						order: 30,
						command: { id: n.$UVb, title: t.localize(6713, null) },
					}),
					E.$ZX.appendMenuItem(E.$XX.OpenEditorsContext, {
						group: "4_close",
						order: 40,
						command: { id: n.$VVb, title: t.localize(6714, null) },
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "navigation",
						order: 4,
						command: { id: i.$UWb, title: i.$VWb, precondition: h.$BUb },
						when: h.$zUb,
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "navigation",
						order: 6,
						command: { id: i.$WWb, title: i.$XWb, precondition: h.$BUb },
						when: h.$zUb,
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "navigation",
						order: 10,
						command: U,
						when: u.$Kj.and(h.$zUb.toNegated(), f.$BQb.HasResource),
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "navigation",
						order: 20,
						command: { id: m.$YUb, title: t.localize(6715, null) },
						when: u.$Kj.and(h.$zUb.toNegated(), h.$CUb),
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "3_compare",
						order: 20,
						command: z,
						when: u.$Kj.and(
							h.$zUb.toNegated(),
							f.$BQb.HasResource,
							m.$hVb,
							p.$pMb.toNegated(),
						),
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "3_compare",
						order: 30,
						command: F,
						when: u.$Kj.and(
							h.$zUb.toNegated(),
							f.$BQb.HasResource,
							p.$pMb.toNegated(),
						),
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "3_compare",
						order: 30,
						command: x,
						when: u.$Kj.and(h.$zUb.toNegated(), f.$BQb.HasResource, p.$pMb),
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "5_cutcopypaste",
						order: 8,
						command: { id: k, title: t.localize(6716, null) },
						when: u.$Kj.and(h.$DUb.toNegated(), h.$BUb),
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "5_cutcopypaste",
						order: 10,
						command: { id: L, title: i.$1Wb },
						when: h.$DUb.toNegated(),
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "5_cutcopypaste",
						order: 20,
						command: {
							id: D,
							title: i.$2Wb,
							precondition: u.$Kj.and(h.$BUb, i.$3Wb),
						},
						when: h.$zUb,
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "5b_importexport",
						order: 10,
						command: { id: i.$4Wb, title: i.$5Wb },
						when: u.$Kj.or(
							u.$Kj.and(
								b.$7Lb.toNegated(),
								f.$BQb.Scheme.notEqualsTo(o.Schemas.file),
							),
							u.$Kj.and(b.$7Lb, h.$zUb.toNegated(), h.$DUb.toNegated()),
							u.$Kj.and(b.$7Lb, f.$HPb),
						),
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "5b_importexport",
						order: 20,
						command: { id: i.$6Wb, title: i.$7Wb },
						when: u.$Kj.and(b.$7Lb, h.$zUb, h.$BUb),
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "6_copypath",
						order: 10,
						command: M,
						when: f.$BQb.IsFileSystemResource,
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "6_copypath",
						order: 20,
						command: N,
						when: f.$BQb.IsFileSystemResource,
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "2_workspace",
						order: 10,
						command: { id: c.$nRb, title: c.$oRb },
						when: u.$Kj.and(
							h.$DUb,
							u.$Kj.or(f.$zPb, f.$wPb.isEqualTo("workspace")),
						),
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "2_workspace",
						order: 30,
						command: { id: m.$iVb, title: m.$jVb },
						when: u.$Kj.and(
							h.$DUb,
							h.$zUb,
							u.$Kj.and(
								f.$xPb.notEqualsTo("0"),
								u.$Kj.or(f.$zPb, f.$wPb.isEqualTo("workspace")),
							),
						),
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "7_modification",
						order: 10,
						command: { id: I, title: i.$YWb, precondition: h.$BUb },
						when: h.$DUb.toNegated(),
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "7_modification",
						order: 20,
						command: { id: T, title: i.$ZWb, precondition: h.$BUb },
						alt: { id: P, title: t.localize(6717, null), precondition: h.$BUb },
						when: u.$Kj.and(h.$DUb.toNegated(), h.$FUb),
					}),
					E.$ZX.appendMenuItem(E.$XX.ExplorerContext, {
						group: "7_modification",
						order: 20,
						command: {
							id: P,
							title: t.localize(6718, null),
							precondition: h.$BUb,
						},
						when: u.$Kj.and(h.$DUb.toNegated(), h.$FUb.toNegated()),
					});
				for (const K of [
					E.$XX.EmptyEditorGroupContext,
					E.$XX.EditorTabsBarContext,
				])
					E.$ZX.appendMenuItem(K, {
						command: { id: m.$oVb, title: t.localize(6719, null) },
						group: "1_file",
						order: 10,
					}),
						E.$ZX.appendMenuItem(K, {
							command: {
								id: "workbench.action.quickOpen",
								title: t.localize(6720, null),
							},
							group: "1_file",
							order: 20,
						});
				E.$ZX.appendMenuItem(E.$XX.MenubarFileMenu, {
					group: "1_new",
					command: { id: m.$oVb, title: t.localize(6721, null) },
					order: 1,
				}),
					E.$ZX.appendMenuItem(E.$XX.MenubarFileMenu, {
						group: "4_save",
						command: {
							id: m.$8Ub,
							title: t.localize(6722, null),
							precondition: u.$Kj.or(f.$TPb, u.$Kj.and(h.$yUb, f.$hQb)),
						},
						order: 1,
					}),
					E.$ZX.appendMenuItem(E.$XX.MenubarFileMenu, {
						group: "4_save",
						command: {
							id: m.$6Ub,
							title: t.localize(6723, null),
							precondition: u.$Kj.or(f.$TPb, u.$Kj.and(h.$yUb, f.$hQb)),
						},
						order: 2,
					}),
					E.$ZX.appendMenuItem(E.$XX.MenubarFileMenu, {
						group: "4_save",
						command: {
							id: m.$_Ub,
							title: t.localize(6724, null),
							precondition: f.$BPb,
						},
						order: 3,
					}),
					E.$ZX.appendMenuItem(E.$XX.MenubarFileMenu, {
						group: "5_autosave",
						command: {
							id: i.$$Wb.ID,
							title: t.localize(6725, null),
							toggled: u.$Kj.notEquals("config.files.autoSave", "off"),
						},
						order: 1,
					}),
					E.$ZX.appendMenuItem(E.$XX.MenubarFileMenu, {
						group: "6_close",
						command: {
							id: m.$WUb,
							title: t.localize(6726, null),
							precondition: u.$Kj.or(
								u.$Kj.and(f.$RPb),
								u.$Kj.and(
									f.$BQb.Scheme.notEqualsTo(o.Schemas.untitled),
									h.$yUb,
									f.$hQb,
								),
							),
						},
						order: 1,
					}),
					E.$ZX.appendMenuItem(E.$XX.MenubarFileMenu, {
						group: "6_close",
						command: {
							id: n.$YVb,
							title: t.localize(6727, null),
							precondition: u.$Kj.or(f.$TPb, u.$Kj.and(h.$yUb, f.$hQb)),
						},
						order: 2,
					}),
					E.$ZX.appendMenuItem(E.$XX.MenubarGoMenu, {
						group: "3_global_nav",
						command: {
							id: "workbench.action.quickOpen",
							title: t.localize(6728, null),
						},
						order: 1,
					});
			},
		),
		