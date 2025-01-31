import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../../platform/workspace/common/workspace.js';
import '../../services/workspaces/common/workspaceEditing.js';
import '../../../base/common/resources.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/labels.js';
import '../../../platform/commands/common/commands.js';
import '../../../platform/files/common/files.js';
import '../../../platform/label/common/label.js';
import '../../../platform/quickinput/common/quickInput.js';
import '../../../editor/common/services/getIconClasses.js';
import '../../../editor/common/services/model.js';
import '../../../editor/common/languages/language.js';
import '../../../platform/dialogs/common/dialogs.js';
import '../../../base/common/uri.js';
import '../../../base/common/network.js';
import '../../../platform/workspaces/common/workspaces.js';
import '../../services/path/common/pathService.js';
define(
			de[633],
			he([
				1, 0, 4, 25, 449, 19, 33, 222, 31, 22, 73, 63, 252, 67, 61, 57, 9, 23,
				256, 165,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*workspace*/,
 w /*workspaceEditing*/,
 E /*resources*/,
 C /*cancellation*/,
 d /*labels*/,
 m /*commands*/,
 r /*files*/,
 u /*label*/,
 a /*quickInput*/,
 h /*getIconClasses*/,
 c /*model*/,
 n /*language*/,
 g /*dialogs*/,
 p /*uri*/,
 o /*network*/,
 f /*workspaces*/,
 b /*pathService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qRb = e.$pRb = e.$oRb = e.$nRb = void 0),
					(e.$nRb = "addRootFolder"),
					(e.$oRb = (0, t.localize2)(3005, "Add Folder to Workspace...")),
					(e.$pRb = "setRootFolder"),
					(e.$qRb = "_workbench.pickWorkspaceFolder"),
					m.$fk.registerCommand({
						id: "workbench.action.files.openFileFolderInNewWindow",
						handler: (l) =>
							l.get(g.$IO).pickFileFolderAndOpen({ forceNewWindow: !0 }),
					}),
					m.$fk.registerCommand({
						id: "_files.pickFolderAndOpen",
						handler: (l, y) => l.get(g.$IO).pickFolderAndOpen(y),
					}),
					m.$fk.registerCommand({
						id: "workbench.action.files.openFolderInNewWindow",
						handler: (l) =>
							l.get(g.$IO).pickFolderAndOpen({ forceNewWindow: !0 }),
					}),
					m.$fk.registerCommand({
						id: "workbench.action.files.openFileInNewWindow",
						handler: (l) =>
							l.get(g.$IO).pickFileAndOpen({ forceNewWindow: !0 }),
					}),
					m.$fk.registerCommand({
						id: "workbench.action.openWorkspaceInNewWindow",
						handler: (l) =>
							l.get(g.$IO).pickWorkspaceAndOpen({ forceNewWindow: !0 }),
					}),
					m.$fk.registerCommand({
						id: e.$nRb,
						handler: async (l) => {
							const y = l.get(w.$mRb),
								$ = await s(l);
							!$ ||
								!$.length ||
								(await y.addFolders($.map((v) => ({ uri: v }))));
						},
					}),
					m.$fk.registerCommand({
						id: e.$pRb,
						handler: async (l) => {
							const y = l.get(w.$mRb),
								$ = l.get(i.$Vi),
								v = await s(l);
							!v ||
								!v.length ||
								(await y.updateFolders(
									0,
									$.getWorkspace().folders.length,
									v.map((S) => ({ uri: S })),
								));
						},
					});
				async function s(l) {
					const y = l.get(g.$IO),
						$ = l.get(b.$I8);
					return await y.showOpenDialog({
						openLabel: (0, d.$DO)((0, t.localize)(3002, null)),
						title: (0, t.localize)(3003, null),
						canSelectFolders: !0,
						canSelectMany: !0,
						defaultUri: await y.defaultFolderPath(),
						availableFileSystems: [$.defaultUriScheme],
					});
				}
				m.$fk.registerCommand(e.$qRb, async function (l, y) {
					const $ = l.get(a.$DJ),
						v = l.get(u.$3N),
						S = l.get(i.$Vi),
						I = l.get(c.$QO),
						T = l.get(n.$nM),
						P = S.getWorkspace().folders;
					if (!P.length) return;
					const k = P.map((N) => {
							const A = N.name,
								R = v.getUriLabel((0, E.$mh)(N.uri), { relative: !0 });
							return {
								label: A,
								description: R !== A ? R : void 0,
								folder: N,
								iconClasses: (0, h.$BDb)(I, T, N.uri, r.FileKind.ROOT_FOLDER),
							};
						}),
						L = (y ? y[0] : void 0) || Object.create(null);
					L.activeItem || (L.activeItem = k[0]),
						L.placeHolder || (L.placeHolder = (0, t.localize)(3004, null)),
						typeof L.matchOnDescription != "boolean" &&
							(L.matchOnDescription = !0);
					const D = (y ? y[1] : void 0) || C.CancellationToken.None,
						M = await $.pick(k, L, D);
					if (M) return P[k.indexOf(M)];
				}),
					m.$fk.registerCommand({
						id: "vscode.openFolder",
						handler: (l, y, $) => {
							const v = l.get(m.$ek);
							if ((typeof $ == "boolean" && ($ = { forceNewWindow: $ }), !y)) {
								const P = { forceNewWindow: $?.forceNewWindow };
								return (
									$?.forceLocalWindow &&
										((P.remoteAuthority = null),
										(P.availableFileSystems = ["file"])),
									v.executeCommand("_files.pickFolderAndOpen", P)
								);
							}
							const S = p.URI.from(y, !0),
								I = {
									forceNewWindow: $?.forceNewWindow,
									forceReuseWindow: $?.forceReuseWindow,
									noRecentEntry: $?.noRecentEntry,
									remoteAuthority: $?.forceLocalWindow ? null : void 0,
									forceProfile: $?.forceProfile,
									forceTempProfile: $?.forceTempProfile,
								},
								T =
									(0, i.$fj)(S) || S.scheme === o.Schemas.untitled
										? { workspaceUri: S }
										: { folderUri: S };
							return v.executeCommand("_files.windowOpen", [T], I);
						},
						metadata: {
							description:
								"Open a folder or workspace in the current window or new window depending on the newWindow argument. Note that opening in the same window will shutdown the current extension host process and start a new one on the given folder/workspace unless the newWindow parameter is set to true.",
							args: [
								{
									name: "uri",
									description:
										"(optional) Uri of the folder or workspace file to open. If not provided, a native dialog will ask the user for the folder",
									constraint: (l) => l == null || l instanceof p.URI,
								},
								{
									name: "options",
									description:
										"(optional) Options. Object with the following properties: `forceNewWindow`: Whether to open the folder/workspace in a new window or the same. Defaults to opening in the same window. `forceReuseWindow`: Whether to force opening the folder/workspace in the same window.  Defaults to false. `noRecentEntry`: Whether the opened URI will appear in the 'Open Recent' list. Defaults to false. Note, for backward compatibility, options can also be of type boolean, representing the `forceNewWindow` setting.",
									constraint: (l) =>
										l === void 0 ||
										typeof l == "object" ||
										typeof l == "boolean",
								},
							],
						},
					}),
					m.$fk.registerCommand({
						id: "vscode.newWindow",
						handler: (l, y) => {
							const $ = l.get(m.$ek),
								v = {
									forceReuseWindow: y && y.reuseWindow,
									remoteAuthority: y && y.remoteAuthority,
								};
							return $.executeCommand("_files.newWindow", v);
						},
						metadata: {
							description:
								"Opens an new window depending on the newWindow argument.",
							args: [
								{
									name: "options",
									description:
										"(optional) Options. Object with the following properties: `reuseWindow`: Whether to open a new window or the same. Defaults to opening in a new window. ",
									constraint: (l) => l === void 0 || typeof l == "object",
								},
							],
						},
					}),
					m.$fk.registerCommand(
						"_workbench.removeFromRecentlyOpened",
						function (l, y) {
							return l.get(f.$cRb).removeRecentlyOpened([y]);
						},
					),
					m.$fk.registerCommand({
						id: "vscode.removeFromRecentlyOpened",
						handler: (l, y) => {
							const $ = l.get(f.$cRb);
							return (
								typeof y == "string"
									? (y = y.match(/^[^:/?#]+:\/\//)
											? p.URI.parse(y)
											: p.URI.file(y))
									: (y = p.URI.revive(y)),
								$.removeRecentlyOpened([y])
							);
						},
						metadata: {
							description:
								"Removes an entry with the given path from the recently opened list.",
							args: [
								{
									name: "path",
									description:
										"URI or URI string to remove from recently opened.",
									constraint: (l) => typeof l == "string" || l instanceof p.URI,
								},
							],
						},
					}),
					m.$fk.registerCommand(
						"_workbench.addToRecentlyOpened",
						async function (l, y) {
							const $ = l.get(f.$cRb),
								v = y.uri,
								S = y.label,
								I = y.remoteAuthority;
							let T;
							return (
								y.type === "workspace"
									? (T = {
											workspace: await $.getWorkspaceIdentifier(v),
											label: S,
											remoteAuthority: I,
										})
									: y.type === "folder"
										? (T = { folderUri: v, label: S, remoteAuthority: I })
										: (T = { fileUri: v, label: S, remoteAuthority: I }),
								$.addRecentlyOpened([T])
							);
						},
					),
					m.$fk.registerCommand(
						"_workbench.getRecentlyOpened",
						async function (l) {
							return l.get(f.$cRb).getRecentlyOpened();
						},
					);
			},
		)
