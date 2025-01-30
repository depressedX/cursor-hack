import '../../../../../require.js';
import '../../../../../exports.js';
import './media/theme_picker.js';
import './media/notebookProfile.js';
import '../../../../nls.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../notebook/common/notebookCommon.js';
import '../../../../platform/accessibility/common/accessibility.js';
define(
		de[3723],
		he([1, 0, 3722, 3215, 4, 14, 79, 70, 91]),
		function (ce /*require*/,
 e /*exports*/,
 t /*theme_picker*/,
 i /*notebookProfile*/,
 w /*nls*/,
 E /*codicons*/,
 C /*iconRegistry*/,
 d /*notebookCommon*/,
 m /*accessibility*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$vXc = e.$uXc = e.$sXc = void 0),
				(e.$tXc = u),
				(t = xi(t)),
				(i = xi(i));
			class r {
				constructor() {
					this.a = new Map();
				}
				registerProvider(g, p) {
					this.a.set(g, p);
				}
				getProvider(g) {
					return this.a.get(g);
				}
			}
			e.$sXc = new r();
			async function u(n) {
				if (!n.query) throw new Error("Getting Started: invalid resource");
				const g = JSON.parse(n.query);
				if (!g.moduleId) throw new Error("Getting Started: invalid resource");
				const p = e.$sXc.getProvider(g.moduleId);
				if (!p)
					throw new Error(
						`Getting Started: no provider registered for ${g.moduleId}`,
					);
				return p();
			}
			e.$sXc.registerProvider(
				"vs/workbench/contrib/welcomeGettingStarted/common/media/theme_picker",
				t.default,
			),
				e.$sXc.registerProvider(
					"vs/workbench/contrib/welcomeGettingStarted/common/media/notebookProfile",
					i.default,
				);
			const a = (0, C.$$O)(
					"getting-started-setup",
					E.$ak.zap,
					(0, w.localize)(11484, null),
				),
				h = (0, C.$$O)(
					"getting-started-beginner",
					E.$ak.lightbulb,
					(0, w.localize)(11485, null),
				);
			e.$uXc = [
				{
					id: "welcome.showNewFileEntries",
					title: (0, w.localize)(11486, null),
					description: (0, w.localize)(11487, null),
					icon: E.$ak.newFile,
					content: {
						type: "startEntry",
						command: "command:welcome.showNewFileEntries",
					},
				},
				{
					id: "topLevelOpenMac",
					title: (0, w.localize)(11488, null),
					description: (0, w.localize)(11489, null),
					icon: E.$ak.folderOpened,
					when: "!isWeb && isMac",
					content: {
						type: "startEntry",
						command: "command:workbench.action.files.openFileFolder",
					},
				},
				{
					id: "topLevelOpenFile",
					title: (0, w.localize)(11490, null),
					description: (0, w.localize)(11491, null),
					icon: E.$ak.goToFile,
					when: "isWeb || !isMac",
					content: {
						type: "startEntry",
						command: "command:workbench.action.files.openFile",
					},
				},
				{
					id: "topLevelOpenFolder",
					title: (0, w.localize)(11492, null),
					description: (0, w.localize)(11493, null),
					icon: E.$ak.folderOpened,
					when: "!isWeb && !isMac",
					content: {
						type: "startEntry",
						command: "command:workbench.action.files.openFolder",
					},
				},
				{
					id: "topLevelOpenFolderWeb",
					title: (0, w.localize)(11494, null),
					description: (0, w.localize)(11495, null),
					icon: E.$ak.folderOpened,
					when: "!openFolderWorkspaceSupport && workbenchState == 'workspace'",
					content: {
						type: "startEntry",
						command: "command:workbench.action.files.openFolderViaWorkspace",
					},
				},
				{
					id: "topLevelGitClone",
					title: (0, w.localize)(11496, null),
					description: (0, w.localize)(11497, null),
					when: "config.git.enabled && !git.missing",
					icon: E.$ak.sourceControl,
					content: { type: "startEntry", command: "command:git.clone" },
				},
				{
					id: "topLevelGitOpen",
					title: (0, w.localize)(11498, null),
					description: (0, w.localize)(11499, null),
					when: "workspacePlatform == 'webworker'",
					icon: E.$ak.sourceControl,
					content: {
						type: "startEntry",
						command: "command:remoteHub.openRepository",
					},
				},
				{
					id: "topLevelShowWalkthroughs",
					title: (0, w.localize)(11500, null),
					description: (0, w.localize)(11501, null),
					icon: E.$ak.checklist,
					when: "allWalkthroughsHidden",
					content: {
						type: "startEntry",
						command: "command:welcome.showAllWalkthroughs",
					},
				},
				{
					id: "topLevelRemoteOpen",
					title: (0, w.localize)(11502, null),
					description: (0, w.localize)(11503, null),
					when: "!isWeb",
					icon: E.$ak.remote,
					content: {
						type: "startEntry",
						command: "command:workbench.action.remote.showMenu",
					},
				},
				{
					id: "topLevelOpenTunnel",
					title: (0, w.localize)(11504, null),
					description: (0, w.localize)(11505, null),
					when: "isWeb && showRemoteStartEntryInWeb",
					icon: E.$ak.remote,
					content: {
						type: "startEntry",
						command: "command:workbench.action.remote.showWebStartEntryActions",
					},
				},
			];
			const c = (n, g) => `[${n}](${g})`;
			e.$vXc = [
				{
					id: "Setup",
					title: (0, w.localize)(11506, null),
					description: (0, w.localize)(11507, null),
					isFeatured: !0,
					icon: a,
					when: "!isWeb",
					next: "Beginner",
					content: {
						type: "steps",
						steps: [
							{
								id: "pickColorTheme",
								title: (0, w.localize)(11508, null),
								description: (0, w.localize)(
									11509,
									null,
									c(
										(0, w.localize)(11510, null),
										"command:workbench.action.selectTheme",
									),
								),
								completionEvents: [
									"onSettingChanged:workbench.colorTheme",
									"onCommand:workbench.action.selectTheme",
								],
								when: "!accessibilityModeEnabled",
								media: { type: "markdown", path: "theme_picker" },
							},
							{
								id: "extensionsWeb",
								title: (0, w.localize)(11511, null),
								description: (0, w.localize)(
									11512,
									null,
									c(
										(0, w.localize)(11513, null),
										"command:workbench.extensions.action.showPopularExtensions",
									),
								),
								when: "workspacePlatform == 'webworker'",
								media: {
									type: "svg",
									altText:
										"VS Code extension marketplace with featured language extensions",
									path: "extensions-web.svg",
								},
							},
							{
								id: "findLanguageExtensions",
								title: (0, w.localize)(11514, null),
								description: (0, w.localize)(
									11515,
									null,
									c(
										(0, w.localize)(11516, null),
										"command:workbench.extensions.action.showLanguageExtensions",
									),
								),
								when: "workspacePlatform != 'webworker'",
								media: {
									type: "svg",
									altText: "Language extensions",
									path: "languages.svg",
								},
							},
							{
								id: "settings",
								title: (0, w.localize)(11517, null),
								description: (0, w.localize)(
									11518,
									null,
									c(
										(0, w.localize)(11519, null),
										"command:toSide:workbench.action.openSettings",
									),
								),
								media: {
									type: "svg",
									altText: "VS Code Settings",
									path: "settings.svg",
								},
							},
							{
								id: "settingsSync",
								title: (0, w.localize)(11520, null),
								description: (0, w.localize)(
									11521,
									null,
									c(
										(0, w.localize)(11522, null),
										"command:workbench.userDataSync.actions.turnOn",
									),
								),
								when: "syncStatus != uninitialized",
								completionEvents: ["onEvent:sync-enabled"],
								media: {
									type: "svg",
									altText:
										'The "Turn on Sync" entry in the settings gear menu.',
									path: "settingsSync.svg",
								},
							},
							{
								id: "commandPaletteTask",
								title: (0, w.localize)(11523, null),
								description: (0, w.localize)(
									11524,
									null,
									c(
										(0, w.localize)(11525, null),
										"command:workbench.action.showCommands",
									),
								),
								media: {
									type: "svg",
									altText:
										"Command Palette overlay for searching and executing commands.",
									path: "commandPalette.svg",
								},
							},
							{
								id: "pickAFolderTask-Mac",
								title: (0, w.localize)(11526, null),
								description: (0, w.localize)(
									11527,
									null,
									c(
										(0, w.localize)(11528, null),
										"command:workbench.action.files.openFileFolder",
									),
								),
								when: "isMac && workspaceFolderCount == 0",
								media: {
									type: "svg",
									altText:
										"Explorer view showing buttons for opening folder and cloning repository.",
									path: "openFolder.svg",
								},
							},
							{
								id: "pickAFolderTask-Other",
								title: (0, w.localize)(11529, null),
								description: (0, w.localize)(
									11530,
									null,
									c(
										(0, w.localize)(11531, null),
										"command:workbench.action.files.openFolder",
									),
								),
								when: "!isMac && workspaceFolderCount == 0",
								media: {
									type: "svg",
									altText:
										"Explorer view showing buttons for opening folder and cloning repository.",
									path: "openFolder.svg",
								},
							},
							{
								id: "quickOpen",
								title: (0, w.localize)(11532, null),
								description: (0, w.localize)(
									11533,
									null,
									c(
										(0, w.localize)(11534, null),
										"command:toSide:workbench.action.quickOpen",
									),
								),
								when: "workspaceFolderCount != 0",
								media: {
									type: "svg",
									altText: "Go to file in quick search.",
									path: "search.svg",
								},
							},
							{
								id: "videoTutorial",
								title: (0, w.localize)(11535, null),
								description: (0, w.localize)(
									11536,
									null,
									c(
										(0, w.localize)(11537, null),
										"https://aka.ms/vscode-getting-started-video",
									),
								),
								media: {
									type: "svg",
									altText: "VS Code Settings",
									path: "learn.svg",
								},
							},
						],
					},
				},
				{
					id: "SetupWeb",
					title: (0, w.localize)(11538, null),
					description: (0, w.localize)(11539, null),
					isFeatured: !0,
					icon: a,
					when: "isWeb",
					next: "Beginner",
					content: {
						type: "steps",
						steps: [
							{
								id: "pickColorThemeWeb",
								title: (0, w.localize)(11540, null),
								description: (0, w.localize)(
									11541,
									null,
									c(
										(0, w.localize)(11542, null),
										"command:workbench.action.selectTheme",
									),
								),
								completionEvents: [
									"onSettingChanged:workbench.colorTheme",
									"onCommand:workbench.action.selectTheme",
								],
								media: { type: "markdown", path: "theme_picker" },
							},
							{
								id: "menuBarWeb",
								title: (0, w.localize)(11543, null),
								description: (0, w.localize)(
									11544,
									null,
									c(
										(0, w.localize)(11545, null),
										"command:workbench.action.toggleMenuBar",
									),
								),
								when: "isWeb",
								media: {
									type: "svg",
									altText: "Comparing menu dropdown with the visible menu bar.",
									path: "menuBar.svg",
								},
							},
							{
								id: "extensionsWebWeb",
								title: (0, w.localize)(11546, null),
								description: (0, w.localize)(
									11547,
									null,
									c(
										(0, w.localize)(11548, null),
										"command:workbench.extensions.action.showPopularExtensions",
									),
								),
								when: "workspacePlatform == 'webworker'",
								media: {
									type: "svg",
									altText:
										"VS Code extension marketplace with featured language extensions",
									path: "extensions-web.svg",
								},
							},
							{
								id: "findLanguageExtensionsWeb",
								title: (0, w.localize)(11549, null),
								description: (0, w.localize)(
									11550,
									null,
									c(
										(0, w.localize)(11551, null),
										"command:workbench.extensions.action.showLanguageExtensions",
									),
								),
								when: "workspacePlatform != 'webworker'",
								media: {
									type: "svg",
									altText: "Language extensions",
									path: "languages.svg",
								},
							},
							{
								id: "settingsSyncWeb",
								title: (0, w.localize)(11552, null),
								description: (0, w.localize)(
									11553,
									null,
									c(
										(0, w.localize)(11554, null),
										"command:workbench.userDataSync.actions.turnOn",
									),
								),
								when: "syncStatus != uninitialized",
								completionEvents: ["onEvent:sync-enabled"],
								media: {
									type: "svg",
									altText:
										'The "Turn on Sync" entry in the settings gear menu.',
									path: "settingsSync.svg",
								},
							},
							{
								id: "commandPaletteTaskWeb",
								title: (0, w.localize)(11555, null),
								description: (0, w.localize)(
									11556,
									null,
									c(
										(0, w.localize)(11557, null),
										"command:workbench.action.showCommands",
									),
								),
								media: {
									type: "svg",
									altText:
										"Command Palette overlay for searching and executing commands.",
									path: "commandPalette.svg",
								},
							},
							{
								id: "pickAFolderTask-WebWeb",
								title: (0, w.localize)(11558, null),
								description: (0, w.localize)(
									11559,
									null,
									c(
										(0, w.localize)(11560, null),
										"command:workbench.action.addRootFolder",
									),
									c(
										(0, w.localize)(11561, null),
										"command:remoteHub.openRepository",
									),
								),
								when: "workspaceFolderCount == 0",
								media: {
									type: "svg",
									altText:
										"Explorer view showing buttons for opening folder and cloning repository.",
									path: "openFolder.svg",
								},
							},
							{
								id: "quickOpenWeb",
								title: (0, w.localize)(11562, null),
								description: (0, w.localize)(
									11563,
									null,
									c(
										(0, w.localize)(11564, null),
										"command:toSide:workbench.action.quickOpen",
									),
								),
								when: "workspaceFolderCount != 0",
								media: {
									type: "svg",
									altText: "Go to file in quick search.",
									path: "search.svg",
								},
							},
						],
					},
				},
				{
					id: "SetupScreenReader",
					title: (0, w.localize)(11565, null),
					description: (0, w.localize)(11566, null),
					isFeatured: !0,
					icon: a,
					when: m.$YK.key,
					next: "Setup",
					content: {
						type: "steps",
						steps: [
							{
								id: "accessibilityHelp",
								title: (0, w.localize)(11567, null),
								description: (0, w.localize)(
									11568,
									null,
									c(
										(0, w.localize)(11569, null),
										"command:editor.action.accessibilityHelp",
									),
								),
								media: { type: "markdown", path: "empty" },
							},
							{
								id: "accessibleView",
								title: (0, w.localize)(11570, null),
								description: (0, w.localize)(
									11571,
									null,
									c(
										(0, w.localize)(11572, null),
										"command:editor.action.accessibleView",
									),
								),
								media: { type: "markdown", path: "empty" },
							},
							{
								id: "verbositySettings",
								title: (0, w.localize)(11573, null),
								description: (0, w.localize)(
									11574,
									null,
									c(
										(0, w.localize)(11575, null),
										"command:workbench.action.openAccessibilitySettings",
									),
								),
								media: { type: "markdown", path: "empty" },
							},
							{
								id: "accessibilitySignals",
								title: (0, w.localize)(11576, null),
								description: (0, w.localize)(
									11577,
									null,
									c(
										(0, w.localize)(11578, null),
										"command:signals.sounds.help",
									),
									c(
										(0, w.localize)(11579, null),
										"command:signals.announcements.help",
									),
								),
								media: { type: "markdown", path: "empty" },
							},
							{
								id: "hover",
								title: (0, w.localize)(11580, null),
								description: (0, w.localize)(
									11581,
									null,
									c(
										(0, w.localize)(11582, null),
										"command:editor.action.showHover",
									),
								),
								media: { type: "markdown", path: "empty" },
							},
							{
								id: "goToSymbol",
								title: (0, w.localize)(11583, null),
								description: (0, w.localize)(
									11584,
									null,
									c(
										(0, w.localize)(11585, null),
										"command:editor.action.goToSymbol",
									),
								),
								media: { type: "markdown", path: "empty" },
							},
							{
								id: "codeFolding",
								title: (0, w.localize)(11586, null),
								description: (0, w.localize)(
									11587,
									null,
									c((0, w.localize)(11588, null), "command:editor.toggleFold"),
									c(
										(0, w.localize)(11589, null),
										"editor.toggleFoldRecursively",
									),
								),
								media: { type: "markdown", path: "empty" },
							},
							{
								id: "intellisense",
								title: (0, w.localize)(11590, null),
								description: (0, w.localize)(
									11591,
									null,
									c(
										(0, w.localize)(11592, null),
										"command:editor.action.triggerSuggest",
									),
									c(
										(0, w.localize)(11593, null),
										"command:editor.action.inlineSuggest.trigger",
									),
								),
								media: { type: "markdown", path: "empty" },
							},
						],
					},
				},
				{
					id: "Beginner",
					isFeatured: !1,
					title: (0, w.localize)(11594, null),
					icon: h,
					description: (0, w.localize)(11595, null),
					content: {
						type: "steps",
						steps: [
							{
								id: "extensions",
								title: (0, w.localize)(11596, null),
								description: (0, w.localize)(
									11597,
									null,
									c(
										(0, w.localize)(11598, null),
										"command:workbench.extensions.action.showPopularExtensions",
									),
								),
								when: "workspacePlatform != 'webworker'",
								media: {
									type: "svg",
									altText:
										"VS Code extension marketplace with featured language extensions",
									path: "extensions.svg",
								},
							},
							{
								id: "terminal",
								title: (0, w.localize)(11599, null),
								description: (0, w.localize)(
									11600,
									null,
									c(
										(0, w.localize)(11601, null),
										"command:workbench.action.terminal.toggleTerminal",
									),
								),
								when: "workspacePlatform != 'webworker' && remoteName != codespaces && !terminalIsOpen",
								media: {
									type: "svg",
									altText: "Integrated terminal running a few npm commands",
									path: "terminal.svg",
								},
							},
							{
								id: "debugging",
								title: (0, w.localize)(11602, null),
								description: (0, w.localize)(
									11603,
									null,
									c(
										(0, w.localize)(11604, null),
										"command:workbench.action.debug.selectandstart",
									),
								),
								when: "workspacePlatform != 'webworker' && workspaceFolderCount != 0",
								media: {
									type: "svg",
									altText: "Run and debug view.",
									path: "debug.svg",
								},
							},
							{
								id: "scmClone",
								title: (0, w.localize)(11605, null),
								description: (0, w.localize)(
									11606,
									null,
									c((0, w.localize)(11607, null), "command:git.clone"),
								),
								when: "config.git.enabled && !git.missing && workspaceFolderCount == 0",
								media: {
									type: "svg",
									altText: "Source Control view.",
									path: "git.svg",
								},
							},
							{
								id: "scmSetup",
								title: (0, w.localize)(11608, null),
								description: (0, w.localize)(
									11609,
									null,
									c((0, w.localize)(11610, null), "command:git.init"),
								),
								when: "config.git.enabled && !git.missing && workspaceFolderCount != 0 && gitOpenRepositoryCount == 0",
								media: {
									type: "svg",
									altText: "Source Control view.",
									path: "git.svg",
								},
							},
							{
								id: "scm",
								title: (0, w.localize)(11611, null),
								description: (0, w.localize)(
									11612,
									null,
									c((0, w.localize)(11613, null), "command:workbench.view.scm"),
								),
								when: "config.git.enabled && !git.missing && workspaceFolderCount != 0 && gitOpenRepositoryCount != 0 && activeViewlet != 'workbench.view.scm'",
								media: {
									type: "svg",
									altText: "Source Control view.",
									path: "git.svg",
								},
							},
							{
								id: "installGit",
								title: (0, w.localize)(11614, null),
								description: (0, w.localize)(
									11615,
									null,
									c(
										(0, w.localize)(11616, null),
										"https://aka.ms/vscode-install-git",
									),
									"[",
									"](command:workbench.action.reloadWindow)",
								),
								when: "git.missing",
								media: {
									type: "svg",
									altText: "Install Git.",
									path: "git.svg",
								},
								completionEvents: ["onContext:git.state == initialized"],
							},
							{
								id: "tasks",
								title: (0, w.localize)(11617, null),
								when: "workspaceFolderCount != 0 && workspacePlatform != 'webworker'",
								description: (0, w.localize)(
									11618,
									null,
									c(
										(0, w.localize)(11619, null),
										"command:workbench.action.tasks.runTask",
									),
								),
								media: {
									type: "svg",
									altText: "Task runner.",
									path: "runTask.svg",
								},
							},
							{
								id: "shortcuts",
								title: (0, w.localize)(11620, null),
								description: (0, w.localize)(
									11621,
									null,
									c(
										(0, w.localize)(11622, null),
										"command:toSide:workbench.action.openGlobalKeybindings",
									),
								),
								media: {
									type: "svg",
									altText: "Interactive shortcuts.",
									path: "shortcuts.svg",
								},
							},
							{
								id: "workspaceTrust",
								title: (0, w.localize)(11623, null),
								description: (0, w.localize)(
									11624,
									null,
									c(
										(0, w.localize)(11625, null),
										"https://code.visualstudio.com/docs/editor/workspace-trust",
									),
									c(
										(0, w.localize)(11626, null),
										"command:toSide:workbench.action.manageTrustedDomain",
									),
								),
								when: "workspacePlatform != 'webworker' && !isWorkspaceTrusted && workspaceFolderCount == 0",
								media: {
									type: "svg",
									altText:
										"Workspace Trust editor in Restricted mode and a primary button for switching to Trusted mode.",
									path: "workspaceTrust.svg",
								},
							},
						],
					},
				},
				{
					id: "notebooks",
					title: (0, w.localize)(11627, null),
					description: "",
					icon: a,
					isFeatured: !1,
					when: `config.${d.$56.openGettingStarted} && userHasOpenedNotebook`,
					content: {
						type: "steps",
						steps: [
							{
								completionEvents: ["onCommand:notebook.setProfile"],
								id: "notebookProfile",
								title: (0, w.localize)(11628, null),
								description: (0, w.localize)(11629, null),
								when: "userHasOpenedNotebook",
								media: { type: "markdown", path: "notebookProfile" },
							},
						],
					},
				},
			];
		},
	),
		