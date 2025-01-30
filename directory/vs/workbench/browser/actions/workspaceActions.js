import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../../platform/workspace/common/workspace.js';
import '../../services/workspaces/common/workspaceEditing.js';
import '../../services/editor/common/editorService.js';
import '../../../platform/commands/common/commands.js';
import './workspaceCommands.js';
import '../../../platform/dialogs/common/dialogs.js';
import '../../../platform/actions/common/actions.js';
import '../../common/contextkeys.js';
import '../../services/host/browser/host.js';
import '../../../base/common/keyCodes.js';
import '../../../platform/contextkey/common/contextkey.js';
import '../../services/environment/common/environmentService.js';
import '../../../platform/workspaces/common/workspaces.js';
import '../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../platform/contextkey/common/contextkeys.js';
import '../../services/ai/browser/modalService.js';
import '../../../platform/action/common/actionCommonCategories.js';
define(
			de[853],
			he([
				1, 0, 4, 25, 449, 18, 31, 633, 57, 11, 100, 87, 27, 8, 78, 256, 43, 179,
				445, 99,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*workspace*/,
 w /*workspaceEditing*/,
 E /*editorService*/,
 C /*commands*/,
 d /*workspaceCommands*/,
 m /*dialogs*/,
 r /*actions*/,
 u /*contextkeys*/,
 a /*host*/,
 h /*keyCodes*/,
 c /*contextkey*/,
 n /*environmentService*/,
 g /*workspaces*/,
 p /*keybindingsRegistry*/,
 o /*contextkeys*/,
 f /*modalService*/,
 b /*actionCommonCategories*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Ltc = e.$Ktc = e.$Jtc = e.$Itc = e.$Htc = e.$Gtc = void 0);
				const s = (0, t.localize2)(2991, "Workspaces");
				class l extends r.$3X {
					static {
						this.ID = "workbench.action.files.openFile";
					}
					constructor() {
						super({
							id: l.ID,
							title: (0, t.localize2)(2992, "Open File..."),
							category: b.$ck.File,
							f1: !0,
							keybinding: {
								when: o.$8Lb.toNegated(),
								weight: p.KeybindingWeight.WorkbenchContrib,
								primary: h.KeyMod.CtrlCmd | h.KeyCode.KeyO,
							},
						});
					}
					async run(A, R) {
						return A.get(m.$IO).pickFileAndOpen({
							forceNewWindow: !1,
							telemetryExtraData: R,
						});
					}
				}
				e.$Gtc = l;
				class y extends r.$3X {
					static {
						this.ID = "workbench.action.files.openFolder";
					}
					constructor() {
						super({
							id: y.ID,
							title: (0, t.localize2)(2993, "Open Folder..."),
							category: b.$ck.File,
							f1: !0,
							precondition: u.$yPb,
							keybinding: {
								weight: p.KeybindingWeight.WorkbenchContrib,
								primary: void 0,
								linux: {
									primary: (0, h.$os)(h.$ps, h.KeyMod.CtrlCmd | h.KeyCode.KeyO),
								},
								win: {
									primary: (0, h.$os)(h.$ps, h.KeyMod.CtrlCmd | h.KeyCode.KeyO),
								},
							},
						});
					}
					async run(A, R) {
						return A.get(m.$IO).pickFolderAndOpen({
							forceNewWindow: !1,
							telemetryExtraData: R,
						});
					}
				}
				e.$Htc = y;
				class $ extends r.$3X {
					static {
						this.ID = "workbench.action.files.openFolderViaWorkspace";
					}
					constructor() {
						super({
							id: $.ID,
							title: (0, t.localize2)(2994, "Open Folder..."),
							category: b.$ck.File,
							f1: !0,
							precondition: c.$Kj.and(
								u.$yPb.toNegated(),
								u.$wPb.isEqualTo("workspace"),
							),
							keybinding: {
								weight: p.KeybindingWeight.WorkbenchContrib,
								primary: h.KeyMod.CtrlCmd | h.KeyCode.KeyO,
							},
						});
					}
					run(A) {
						return A.get(C.$ek).executeCommand(d.$pRb);
					}
				}
				e.$Itc = $;
				class v extends r.$3X {
					static {
						this.ID = "workbench.action.files.openFileFolder";
					}
					static {
						this.LABEL = (0, t.localize2)(2995, "Open...");
					}
					constructor() {
						super({
							id: v.ID,
							title: v.LABEL,
							category: b.$ck.File,
							f1: !0,
							precondition: c.$Kj.and(o.$8Lb, u.$yPb),
							keybinding: {
								weight: p.KeybindingWeight.WorkbenchContrib,
								primary: h.KeyMod.CtrlCmd | h.KeyCode.KeyO,
							},
						});
					}
					async run(A, R) {
						return A.get(m.$IO).pickFileFolderAndOpen({
							forceNewWindow: !1,
							telemetryExtraData: R,
						});
					}
				}
				e.$Jtc = v;
				class S extends r.$3X {
					static {
						this.ID = "workbench.action.openWorkspace";
					}
					constructor() {
						super({
							id: S.ID,
							title: (0, t.localize2)(2996, "Open Workspace from File..."),
							category: b.$ck.File,
							f1: !0,
							precondition: u.$zPb,
						});
					}
					async run(A, R) {
						return A.get(m.$IO).pickWorkspaceAndOpen({ telemetryExtraData: R });
					}
				}
				class I extends r.$3X {
					static {
						this.ID = "workbench.action.createAIProject";
					}
					constructor() {
						super({
							id: I.ID,
							title: {
								value: (0, t.localize)(2980, null),
								original: "Create Codebase with AI...",
							},
							category: b.$ck.File,
							f1: !0,
							precondition: u.$zPb,
						});
					}
					async run(A, R) {
						return A.get(f.$38b).renderModal();
					}
				}
				class T extends r.$3X {
					static {
						this.ID = "workbench.action.closeFolder";
					}
					constructor() {
						super({
							id: T.ID,
							title: (0, t.localize2)(2997, "Close Workspace"),
							category: s,
							f1: !0,
							precondition: c.$Kj.and(u.$wPb.notEqualsTo("empty"), u.$APb),
							keybinding: {
								weight: p.KeybindingWeight.WorkbenchContrib,
								primary: (0, h.$os)(h.$ps, h.KeyCode.KeyF),
								mac: { primary: (0, h.$os)(h.$qs, h.KeyCode.KeyF) },
							},
						});
					}
					async run(A) {
						const R = A.get(a.$asb),
							O = A.get(n.$r8);
						return R.openWindow({
							forceReuseWindow: !0,
							remoteAuthority: O.remoteAuthority,
						});
					}
				}
				class P extends r.$3X {
					static {
						this.ID = "workbench.action.openWorkspaceConfigFile";
					}
					constructor() {
						super({
							id: P.ID,
							title: (0, t.localize2)(
								2998,
								"Open Workspace Configuration File",
							),
							category: s,
							f1: !0,
							precondition: u.$wPb.isEqualTo("workspace"),
						});
					}
					async run(A) {
						const R = A.get(i.$Vi),
							O = A.get(E.$IY),
							B = R.getWorkspace().configuration;
						B && (await O.openEditor({ resource: B, options: { pinned: !0 } }));
					}
				}
				class k extends r.$3X {
					static {
						this.ID = "workbench.action.addRootFolder";
					}
					constructor() {
						super({
							id: k.ID,
							title: d.$oRb,
							category: s,
							f1: !0,
							precondition: c.$Kj.or(u.$zPb, u.$wPb.isEqualTo("workspace")),
						});
					}
					run(A) {
						return A.get(C.$ek).executeCommand(d.$nRb);
					}
				}
				e.$Ktc = k;
				class L extends r.$3X {
					static {
						this.ID = "workbench.action.removeRootFolder";
					}
					constructor() {
						super({
							id: L.ID,
							title: (0, t.localize2)(2999, "Remove Folder from Workspace..."),
							category: s,
							f1: !0,
							precondition: c.$Kj.and(
								u.$xPb.notEqualsTo("0"),
								c.$Kj.or(u.$zPb, u.$wPb.isEqualTo("workspace")),
							),
						});
					}
					async run(A) {
						const R = A.get(C.$ek),
							O = A.get(w.$mRb),
							B = await R.executeCommand(d.$qRb);
						B && (await O.removeFolders([B.uri]));
					}
				}
				e.$Ltc = L;
				class D extends r.$3X {
					static {
						this.ID = "workbench.action.saveWorkspaceAs";
					}
					constructor() {
						super({
							id: D.ID,
							title: (0, t.localize2)(3e3, "Save Workspace As..."),
							category: s,
							f1: !0,
							precondition: u.$zPb,
						});
					}
					async run(A) {
						const R = A.get(w.$mRb),
							O = A.get(i.$Vi),
							B = await R.pickNewWorkspacePath();
						if (B && (0, i.$fj)(B))
							switch (O.getWorkbenchState()) {
								case i.WorkbenchState.EMPTY:
								case i.WorkbenchState.FOLDER: {
									const U = O.getWorkspace().folders.map((z) => ({
										uri: z.uri,
									}));
									return R.createAndEnterWorkspace(U, B);
								}
								case i.WorkbenchState.WORKSPACE:
									return R.saveAndEnterWorkspace(B);
							}
					}
				}
				class M extends r.$3X {
					static {
						this.ID = "workbench.action.duplicateWorkspaceInNewWindow";
					}
					constructor() {
						super({
							id: M.ID,
							title: (0, t.localize2)(
								3001,
								"Duplicate As Workspace in New Window",
							),
							category: s,
							f1: !0,
							precondition: u.$zPb,
						});
					}
					async run(A) {
						const R = A.get(i.$Vi),
							O = A.get(w.$mRb),
							B = A.get(a.$asb),
							U = A.get(g.$cRb),
							z = A.get(n.$r8),
							F = R.getWorkspace().folders,
							x = z.remoteAuthority,
							H = await U.createUntitledWorkspace(F, x);
						return (
							await O.copyWorkspaceSettings(H),
							B.openWindow([{ workspaceUri: H.configPath }], {
								forceNewWindow: !0,
								remoteAuthority: x,
							})
						);
					}
				}
				(0, r.$4X)(k),
					(0, r.$4X)(L),
					(0, r.$4X)(l),
					(0, r.$4X)(y),
					(0, r.$4X)($),
					(0, r.$4X)(v),
					(0, r.$4X)(S),
					(0, r.$4X)(P),
					(0, r.$4X)(T),
					(0, r.$4X)(I),
					(0, r.$4X)(D),
					(0, r.$4X)(M),
					r.$ZX.appendMenuItem(r.$XX.MenubarFileMenu, {
						group: "2_open",
						command: { id: l.ID, title: (0, t.localize)(2981, null) },
						order: 1,
						when: o.$8Lb.toNegated(),
					}),
					r.$ZX.appendMenuItem(r.$XX.MenubarFileMenu, {
						group: "2_open",
						command: { id: y.ID, title: (0, t.localize)(2982, null) },
						order: 2,
						when: u.$yPb,
					}),
					r.$ZX.appendMenuItem(r.$XX.MenubarFileMenu, {
						group: "2_open",
						command: { id: $.ID, title: (0, t.localize)(2983, null) },
						order: 2,
						when: c.$Kj.and(u.$yPb.toNegated(), u.$wPb.isEqualTo("workspace")),
					}),
					r.$ZX.appendMenuItem(r.$XX.MenubarFileMenu, {
						group: "2_open",
						command: { id: v.ID, title: (0, t.localize)(2984, null) },
						order: 1,
						when: c.$Kj.and(o.$8Lb, u.$yPb),
					}),
					r.$ZX.appendMenuItem(r.$XX.MenubarFileMenu, {
						group: "2_open",
						command: { id: S.ID, title: (0, t.localize)(2985, null) },
						order: 3,
						when: u.$zPb,
					}),
					r.$ZX.appendMenuItem(r.$XX.MenubarFileMenu, {
						group: "3_workspace",
						command: { id: d.$nRb, title: (0, t.localize)(2986, null) },
						when: c.$Kj.or(u.$zPb, u.$wPb.isEqualTo("workspace")),
						order: 1,
					}),
					r.$ZX.appendMenuItem(r.$XX.MenubarFileMenu, {
						group: "3_workspace",
						command: { id: D.ID, title: (0, t.localize)(2987, null) },
						order: 2,
						when: u.$zPb,
					}),
					r.$ZX.appendMenuItem(r.$XX.MenubarFileMenu, {
						group: "3_workspace",
						command: { id: M.ID, title: (0, t.localize)(2988, null) },
						order: 3,
						when: u.$zPb,
					}),
					r.$ZX.appendMenuItem(r.$XX.MenubarFileMenu, {
						group: "6_close",
						command: { id: T.ID, title: (0, t.localize)(2989, null) },
						order: 3,
						when: c.$Kj.and(u.$wPb.isEqualTo("folder"), u.$APb),
					}),
					r.$ZX.appendMenuItem(r.$XX.MenubarFileMenu, {
						group: "6_close",
						command: { id: T.ID, title: (0, t.localize)(2990, null) },
						order: 3,
						when: c.$Kj.and(u.$wPb.isEqualTo("workspace"), u.$APb),
					});
			},
		),
		