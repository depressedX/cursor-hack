define(de[3722], he([1, 0, 37, 4, 333]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.default = () => `
<checklist>
	<div class="theme-picker-row">
		<checkbox when-checked="setTheme:${w.ThemeSettingDefaults.COLOR_THEME_DARK}" checked-on="config.workbench.colorTheme == '${w.ThemeSettingDefaults.COLOR_THEME_DARK}'">
			<img width="200" src="./dark.png"/>
			${(0, t.$nf)((0, i.localize)(11633, null))}
		</checkbox>
		<checkbox when-checked="setTheme:${w.ThemeSettingDefaults.COLOR_THEME_LIGHT}" checked-on="config.workbench.colorTheme == '${w.ThemeSettingDefaults.COLOR_THEME_LIGHT}'">
			<img width="200" src="./light.png"/>
			${(0, t.$nf)((0, i.localize)(11634, null))}
		</checkbox>
	</div>
	<div class="theme-picker-row">
		<checkbox when-checked="setTheme:${w.ThemeSettingDefaults.COLOR_THEME_HC_DARK}" checked-on="config.workbench.colorTheme == '${w.ThemeSettingDefaults.COLOR_THEME_HC_DARK}'">
			<img width="200" src="./dark-hc.png"/>
			${(0, t.$nf)((0, i.localize)(11635, null))}
		</checkbox>
		<checkbox when-checked="setTheme:${w.ThemeSettingDefaults.COLOR_THEME_HC_LIGHT}" checked-on="config.workbench.colorTheme == '${w.ThemeSettingDefaults.COLOR_THEME_HC_LIGHT}'">
			<img width="200" src="./light-hc.png"/>
			${(0, t.$nf)((0, i.localize)(11636, null))}
		</checkbox>
	</div>
</checklist>
<checkbox class="theme-picker-link" when-checked="command:workbench.action.selectTheme" checked-on="false">
	${(0, t.$nf)((0, i.localize)(11637, null))}
</checkbox>
`);
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3723],
		he([1, 0, 3722, 3215, 4, 14, 79, 70, 91]),
		function (ce, e, t, i, w, E, C, d, m) {
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
		define(
			de[3724],
			he([
				1, 0, 536, 455, 7, 24, 97, 29, 3, 23, 77, 12, 19, 28, 171, 74, 61, 913,
				4, 10, 546, 5, 34, 40, 84, 32, 78, 3669, 3670, 3662, 3675, 1877, 333,
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
			) {
				"use strict";
				var N;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Kyc = void 0),
					(w = mt(w)),
					(h = mt(h)),
					(c = mt(c)),
					(f = mt(f));
				let A = class extends m.$1c {
					static {
						N = this;
					}
					static {
						this.c = { sync: 0, async: 0 };
					}
					constructor(F, x, H, q, V, G, K, J, W, X) {
						super(),
							(this.y = F),
							(this.z = x),
							(this.C = H),
							(this.F = q),
							(this.G = V),
							(this.H = G),
							(this.I = K),
							(this.J = J),
							(this.L = W),
							(this.M = X),
							(this.g = []),
							(this.h = []),
							(this.j = !1),
							(this.m = () => {}),
							(this.n = null),
							(this.q = null),
							(this.s = new m.$Zc()),
							(this.t = null),
							(this.u = null),
							(this.w = this.L.createInstance(
								k.$Iyc,
								(Y, ie, ne, ee, _) => this.$(Y, ie, ne, ee, !0, _),
								() => this.N(),
							)),
							(this.X = null),
							(this.f = w.$Rgb()),
							(this.f.className = "vscode-tokens-styles"),
							D.$Jyc.setHandler((Y) => this.P(Y)),
							this.W(this.z.getColorTheme(), !0),
							this.D(
								this.z.onDidColorThemeChange(() => {
									this.W(this.z.getColorTheme(), !1);
								}),
							),
							this.D(
								this.y.onDidRequestRichLanguageFeatures((Y) => {
									this.g.push(Y);
								}),
							);
					}
					N() {
						return !!this.H.getValue("editor.experimental.asyncTokenization");
					}
					O() {
						return !!this.H.getValue(
							"editor.experimental.asyncTokenizationVerification",
						);
					}
					P(F) {
						(this.n = null),
							this.q && (this.q.dispose(), (this.q = null)),
							this.s.clear(),
							(this.n = []);
						for (const x of F) {
							const H = x.value;
							for (const q of H) {
								const V = this.Q(x, q);
								if (V && (this.n.push(V), V.language)) {
									const G = new g.$kM(() => this.U(V.language));
									this.s.add(G),
										this.s.add(g.$lM.registerFactory(V.language, G));
								}
							}
						}
						this.w.setGrammarDefinitions(this.n);
						for (const x of this.g) g.$lM.getOrCreate(x);
					}
					Q(F, x) {
						if (!B(F.description.extensionLocation, x, F.collector, this.y))
							return null;
						const H = h.$nh(F.description.extensionLocation, x.path),
							q = Object.create(null);
						if (x.embeddedLanguages) {
							const J = Object.keys(x.embeddedLanguages);
							for (let W = 0, X = J.length; W < X; W++) {
								const Y = J[W],
									ie = x.embeddedLanguages[Y];
								typeof ie == "string" &&
									this.y.isRegisteredLanguageId(ie) &&
									(q[Y] = this.y.languageIdCodec.encodeLanguageId(ie));
							}
						}
						const V = Object.create(null);
						if (x.tokenTypes) {
							const J = Object.keys(x.tokenTypes);
							for (const W of J)
								switch (x.tokenTypes[W]) {
									case "string":
										V[W] = n.StandardTokenType.String;
										break;
									case "other":
										V[W] = n.StandardTokenType.Other;
										break;
									case "comment":
										V[W] = n.StandardTokenType.Comment;
										break;
								}
						}
						const G =
							x.language && this.y.isRegisteredLanguageId(x.language)
								? x.language
								: void 0;
						function K(J, W) {
							return !Array.isArray(J) || !J.every((X) => typeof X == "string")
								? W
								: J;
						}
						return {
							location: H,
							language: G,
							scopeName: x.scopeName,
							embeddedLanguages: q,
							tokenTypes: V,
							injectTo: x.injectTo,
							balancedBracketSelectors: K(x.balancedBracketScopes, ["*"]),
							unbalancedBracketSelectors: K(x.unbalancedBracketScopes, []),
							sourceExtensionId: F.description.id,
						};
					}
					startDebugMode(F, x) {
						if (this.j) {
							this.F.error(f.localize(12678, null));
							return;
						}
						(this.m = F),
							(this.j = !0),
							this.j &&
								this.I.withProgress(
									{
										location: v.ProgressLocation.Notification,
										buttons: [f.localize(12679, null)],
									},
									(H) => (
										H.report({ message: f.localize(12680, null) }),
										this.Y().then(
											(q) => (
												q.setDefaultDebugCall(!0),
												H.report({ message: f.localize(12681, null) }),
												new Promise((V, G) => {})
											),
										)
									),
									(H) => {
										this.Y().then((q) => {
											(this.m = () => {}),
												(this.j = !1),
												q.setDefaultDebugCall(!1),
												x();
										});
									},
								);
					}
					R() {
						return !!this.n;
					}
					async S() {
						if (this.q) return this.q;
						const [F, x] = await Promise.all([
								(0, t.$Tq)("vscode-textmate", "release/main.js"),
								this.Y(),
							]),
							H = Promise.resolve({
								createOnigScanner: (q) => x.createOnigScanner(q),
								createOnigString: (q) => x.createOnigString(q),
							});
						return this.q
							? this.q
							: ((this.q = new L.$yyc(
									{
										logTrace: (q) => this.G.trace(q),
										logError: (q, V) => this.G.error(q, V),
										readFile: (q) => this.C.readExtensionResource(q),
									},
									this.n || [],
									F,
									H,
								)),
								this.W(this.z.getColorTheme(), !0),
								this.q);
					}
					async U(F) {
						if (!this.y.isRegisteredLanguageId(F) || !this.R()) return null;
						try {
							const x = await this.S();
							if (!x.has(F)) return null;
							const H = this.y.languageIdCodec.encodeLanguageId(F),
								q = await x.createGrammar(F, H);
							if (!q.grammar) return null;
							const V = U("editor.maxTokenizationLineLength", F, -1, this.H),
								G = new T.$uyc(
									q.grammar,
									q.initialState,
									q.containsEmbeddedLanguages,
									(J, W) => this.w.createBackgroundTokenizer(J, W, V),
									() => this.O(),
									(J, W, X) => {
										this.$(J, F, q.sourceExtensionId, W, !1, X);
									},
									!0,
								),
								K = G.onDidEncounterLanguage((J) => {
									if (!this.h[J]) {
										const W = this.y.languageIdCodec.decodeLanguageId(J);
										(this.h[J] = !0), this.y.requestBasicLanguageFeatures(W);
									}
								});
							return new P.$vyc(H, G, K, V);
						} catch (x) {
							return (x.message && x.message === L.$xyc) || (0, d.$4)(x), null;
						}
					}
					W(F, x) {
						if (
							!x &&
							this.t &&
							this.u &&
							O(this.t.settings, F.tokenColors) &&
							(0, E.$yb)(this.u, F.tokenColorMap)
						)
							return;
						(this.t = { name: F.label, settings: F.tokenColors }),
							(this.u = F.tokenColorMap),
							this.q?.setTheme(this.t, this.u);
						const H = R(this.u),
							q = (0, o.$M2b)(H);
						(this.f.textContent = q),
							g.$lM.setColorMap(H),
							this.t && this.u && this.w.acceptTheme(this.t, this.u);
					}
					async createTokenizer(F) {
						if (!this.y.isRegisteredLanguageId(F)) return null;
						const x = await this.S();
						if (!x.has(F)) return null;
						const H = this.y.languageIdCodec.encodeLanguageId(F),
							{ grammar: q } = await x.createGrammar(F, H);
						return q;
					}
					Y() {
						return (
							this.X ||
								(this.X = (async () => {
									const [F, x] = await Promise.all([
										(0, t.$Tq)("vscode-oniguruma", "release/main.js"),
										this.Z(),
									]);
									return (
										await F.loadWASM({
											data: x,
											print: (H) => {
												this.m(H);
											},
										}),
										F
									);
								})()),
							this.X
						);
					}
					async Z() {
						return a.$r
							? await (
									await fetch(
										i.$V
											? (0, t.$Uq)("vscode-oniguruma", "release/onig.wasm")
											: r.$7g
													.asBrowserUri("vscode-oniguruma/../onig.wasm")
													.toString(!0),
									)
								).arrayBuffer()
							: await fetch(
									i.$W && this.J.isBuilt
										? r.$7g
												.asBrowserUri(
													`${r.$5g}/vscode-oniguruma/release/onig.wasm`,
												)
												.toString(!0)
										: r.$7g
												.asBrowserUri(
													`${r.$3g}/vscode-oniguruma/release/onig.wasm`,
												)
												.toString(!0),
								);
					}
					$(F, x, H, q, V, G) {
						const K = V ? "async" : "sync";
						N.c[K] > 50 ||
							(N.c[K] === 0 &&
								setTimeout(
									() => {
										N.c[K] = 0;
									},
									1e3 * 60 * 60,
								),
							N.c[K]++,
							this.M.publicLog2("editor.tokenizedLine", {
								timeMs: F,
								languageId: x,
								lineLength: q,
								fromWorker: V,
								sourceExtensionId: H,
								isRandomSample: G,
								tokenizationSetting: this.N() ? (this.O() ? 2 : 1) : 0,
							}));
					}
				};
				(e.$Kyc = A),
					(e.$Kyc =
						A =
						N =
							Ne(
								[
									j(0, p.$nM),
									j(1, M.$rRb),
									j(2, s.$bYb),
									j(3, $.$4N),
									j(4, y.$ik),
									j(5, b.$gj),
									j(6, v.$8N),
									j(7, I.$r8),
									j(8, l.$Li),
									j(9, S.$km),
								],
								A,
							));
				function R(z) {
					const F = [null];
					for (let x = 1, H = z.length; x < H; x++) F[x] = C.$UL.fromHex(z[x]);
					return F;
				}
				function O(z, F) {
					if (!F || !z || F.length !== z.length) return !1;
					for (let x = F.length - 1; x >= 0; x--) {
						const H = F[x],
							q = z[x];
						if (H.scope !== q.scope) return !1;
						const V = H.settings,
							G = q.settings;
						if (V && G) {
							if (
								V.fontStyle !== G.fontStyle ||
								V.foreground !== G.foreground ||
								V.background !== G.background
							)
								return !1;
						} else if (!V || !G) return !1;
					}
					return !0;
				}
				function B(z, F, x, H) {
					if (
						F.language &&
						(typeof F.language != "string" ||
							!H.isRegisteredLanguageId(F.language))
					)
						return (
							x.error(f.localize(12682, null, D.$Jyc.name, String(F.language))),
							!1
						);
					if (!F.scopeName || typeof F.scopeName != "string")
						return (
							x.error(
								f.localize(12683, null, D.$Jyc.name, String(F.scopeName)),
							),
							!1
						);
					if (!F.path || typeof F.path != "string")
						return (
							x.error(f.localize(12684, null, D.$Jyc.name, String(F.path))), !1
						);
					if (
						F.injectTo &&
						(!Array.isArray(F.injectTo) ||
							F.injectTo.some((V) => typeof V != "string"))
					)
						return (
							x.error(
								f.localize(
									12685,
									null,
									D.$Jyc.name,
									JSON.stringify(F.injectTo),
								),
							),
							!1
						);
					if (F.embeddedLanguages && !c.$ng(F.embeddedLanguages))
						return (
							x.error(
								f.localize(
									12686,
									null,
									D.$Jyc.name,
									JSON.stringify(F.embeddedLanguages),
								),
							),
							!1
						);
					if (F.tokenTypes && !c.$ng(F.tokenTypes))
						return (
							x.error(
								f.localize(
									12687,
									null,
									D.$Jyc.name,
									JSON.stringify(F.tokenTypes),
								),
							),
							!1
						);
					const q = h.$nh(z, F.path);
					return (
						h.$hh(q, z) ||
							x.warn(f.localize(12688, null, D.$Jyc.name, q.path, z.path)),
						!0
					);
				}
				function U(z, F, x, H) {
					return (0, u.observableFromEvent)(
						(q) =>
							H.onDidChangeConfiguration((V) => {
								V.affectsConfiguration(z, { overrideIdentifier: F }) && q(V);
							}),
						() => H.getValue(z, { overrideIdentifier: F }) ?? x,
					);
				}
			},
		),
		define(
			de[3725],
			he([1, 0, 20, 841, 3724, 55]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let C = class {
					static {
						this.ID = "workbench.contrib.textMateTokenizationInstantiator";
					}
					constructor(m) {}
				};
				(C = Ne([j(0, i.$N6b)], C)),
					(0, t.$lK)(i.$N6b, w.$Kyc, t.InstantiationType.Eager),
					(0, E.$s6)(C.ID, C, E.WorkbenchPhase.BlockRestore);
			},
		),
		define(
			de[1889],
			he([1, 0, 4, 54, 19, 187, 333, 754, 7, 21, 75]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$fwc = e.$ewc = void 0),
					(t = mt(t)),
					(i = mt(i)),
					(w = mt(w)),
					(E = mt(E));
				class a {
					static {
						this.STORAGE_KEY = "iconThemeData";
					}
					constructor(p, o, f) {
						(this.id = p),
							(this.label = o),
							(this.settingsId = f),
							(this.isLoaded = !1),
							(this.hasFileIcons = !1),
							(this.hasFolderIcons = !1),
							(this.hidesExplorerArrows = !1);
					}
					ensureLoaded(p) {
						return this.isLoaded
							? Promise.resolve(this.styleSheetContent)
							: this.a(p);
					}
					reload(p) {
						return this.a(p);
					}
					a(p) {
						return p.load(this);
					}
					static fromExtensionTheme(p, o, f) {
						const b = f.extensionId + "-" + p.id,
							s = p.label || i.$sc(p.path),
							l = p.id,
							y = new a(b, s, l);
						return (
							(y.description = p.description),
							(y.location = o),
							(y.extensionData = f),
							(y.watch = p._watch),
							(y.isLoaded = !1),
							y
						);
					}
					static {
						this.b = null;
					}
					static get noIconTheme() {
						let p = a.b;
						return (
							p ||
								((p = a.b = new a("", "", null)),
								(p.hasFileIcons = !1),
								(p.hasFolderIcons = !1),
								(p.hidesExplorerArrows = !1),
								(p.isLoaded = !0),
								(p.extensionData = void 0),
								(p.watch = !1)),
							p
						);
					}
					static createUnloadedTheme(p) {
						const o = new a(p, "", "__" + p);
						return (
							(o.isLoaded = !1),
							(o.hasFileIcons = !1),
							(o.hasFolderIcons = !1),
							(o.hidesExplorerArrows = !1),
							(o.extensionData = void 0),
							(o.watch = !1),
							o
						);
					}
					static fromStorageData(p) {
						const o = p.get(a.STORAGE_KEY, r.StorageScope.PROFILE);
						if (o)
							try {
								const f = JSON.parse(o),
									b = new a("", "", null);
								for (const s in f)
									switch (s) {
										case "id":
										case "label":
										case "description":
										case "settingsId":
										case "styleSheetContent":
										case "hasFileIcons":
										case "hidesExplorerArrows":
										case "hasFolderIcons":
										case "watch":
											b[s] = f[s];
											break;
										case "location":
											break;
										case "extensionData":
											b.extensionData = C.ExtensionData.fromJSONObject(
												f.extensionData,
											);
											break;
									}
								return b;
							} catch {
								return;
							}
					}
					toStorage(p) {
						const o = JSON.stringify({
							id: this.id,
							label: this.label,
							description: this.description,
							settingsId: this.settingsId,
							styleSheetContent: this.styleSheetContent,
							hasFileIcons: this.hasFileIcons,
							hasFolderIcons: this.hasFolderIcons,
							hidesExplorerArrows: this.hidesExplorerArrows,
							extensionData: C.ExtensionData.toJSONObject(this.extensionData),
							watch: this.watch,
						});
						p.store(
							a.STORAGE_KEY,
							o,
							r.StorageScope.PROFILE,
							r.StorageTarget.MACHINE,
						);
					}
				}
				e.$ewc = a;
				class h {
					constructor(p, o) {
						(this.a = p), (this.b = o);
					}
					load(p) {
						return p.location
							? this.c(p.location).then((o) => {
									const f = this.d(p.id, p.location, o);
									return (
										(p.styleSheetContent = f.content),
										(p.hasFileIcons = f.hasFileIcons),
										(p.hasFolderIcons = f.hasFolderIcons),
										(p.hidesExplorerArrows = f.hidesExplorerArrows),
										(p.isLoaded = !0),
										p.styleSheetContent
									);
								})
							: Promise.resolve(p.styleSheetContent);
					}
					c(p) {
						return this.a.readExtensionResource(p).then((o) => {
							const f = [],
								b = E.$do(o, f);
							return f.length > 0
								? Promise.reject(
										new Error(
											t.localize(
												12698,
												null,
												f.map((s) => (0, d.$br)(s.error)).join(", "),
											),
										),
									)
								: E.$lo(b) !== "object"
									? Promise.reject(new Error(t.localize(12699, null)))
									: Promise.resolve(b);
						});
					}
					d(p, o, f) {
						const b = {
							content: "",
							hasFileIcons: !1,
							hasFolderIcons: !1,
							hidesExplorerArrows: !!f.hidesExplorerArrows,
						};
						let s = !1;
						if (!f.iconDefinitions) return b;
						const l = {},
							y = {},
							$ = w.$mh(o);
						function v(L) {
							return w.$nh($, L);
						}
						function S(L, D) {
							function M(N, A) {
								if (A) {
									let R = l[A];
									R || (R = l[A] = []), R.push(N);
								}
							}
							if (L) {
								let N = ".show-file-icons";
								D && (N = D + " " + N);
								const A =
									".monaco-tl-twistie.collapsible:not(.collapsed) + .monaco-tl-contents";
								L.folder &&
									(M(`${N} .folder-icon::before`, L.folder),
									(b.hasFolderIcons = !0)),
									L.folderExpanded &&
										(M(`${N} ${A} .folder-icon::before`, L.folderExpanded),
										(b.hasFolderIcons = !0));
								const R = L.rootFolder || L.folder,
									O = L.rootFolderExpanded || L.folderExpanded;
								R &&
									(M(`${N} .rootfolder-icon::before`, R),
									(b.hasFolderIcons = !0)),
									O &&
										(M(`${N} ${A} .rootfolder-icon::before`, O),
										(b.hasFolderIcons = !0)),
									L.file &&
										(M(`${N} .file-icon::before`, L.file),
										(b.hasFileIcons = !0));
								const B = L.folderNames;
								if (B)
									for (const V in B) {
										const G = [],
											K = c(V.toLowerCase(), G);
										G.push(`.${n(K)}-name-folder-icon`),
											M(`${N} ${G.join("")}.folder-icon::before`, B[V]),
											(b.hasFolderIcons = !0);
									}
								const U = L.folderNamesExpanded;
								if (U)
									for (const V in U) {
										const G = [],
											K = c(V.toLowerCase(), G);
										G.push(`.${n(K)}-name-folder-icon`),
											M(`${N} ${A} ${G.join("")}.folder-icon::before`, U[V]),
											(b.hasFolderIcons = !0);
									}
								const z = L.rootFolderNames;
								if (z)
									for (const V in z) {
										const G = V.toLowerCase();
										M(
											`${N} .${n(G)}-root-name-folder-icon.rootfolder-icon::before`,
											z[V],
										),
											(b.hasFolderIcons = !0);
									}
								const F = L.rootFolderNamesExpanded;
								if (F)
									for (const V in F) {
										const G = V.toLowerCase();
										M(
											`${N} ${A} .${n(G)}-root-name-folder-icon.rootfolder-icon::before`,
											F[V],
										),
											(b.hasFolderIcons = !0);
									}
								const x = L.languageIds;
								if (x) {
									!x.jsonc && x.json && (x.jsonc = x.json);
									for (const V in x)
										M(`${N} .${n(V)}-lang-file-icon.file-icon::before`, x[V]),
											(b.hasFileIcons = !0),
											(s = !0),
											(y[V] = !0);
								}
								const H = L.fileExtensions;
								if (H)
									for (const V in H) {
										const G = [],
											J = c(V.toLowerCase(), G).split(".");
										if (J.length) {
											for (let W = 0; W < J.length; W++)
												G.push(`.${n(J.slice(W).join("."))}-ext-file-icon`);
											G.push(".ext-file-icon");
										}
										M(`${N} ${G.join("")}.file-icon::before`, H[V]),
											(b.hasFileIcons = !0),
											(s = !0);
									}
								const q = L.fileNames;
								if (q)
									for (const V in q) {
										const G = [],
											K = c(V.toLowerCase(), G);
										G.push(`.${n(K)}-name-file-icon`),
											G.push(".name-file-icon");
										const J = K.split(".");
										if (J.length) {
											for (let W = 1; W < J.length; W++)
												G.push(`.${n(J.slice(W).join("."))}-ext-file-icon`);
											G.push(".ext-file-icon");
										}
										M(`${N} ${G.join("")}.file-icon::before`, q[V]),
											(b.hasFileIcons = !0),
											(s = !0);
									}
							}
						}
						if (
							(S(f),
							S(f.light, ".vs"),
							S(f.highContrast, ".hc-black"),
							S(f.highContrast, ".hc-light"),
							!b.hasFileIcons && !b.hasFolderIcons)
						)
							return b;
						const I =
								f.showLanguageModeIcons === !0 ||
								(s && f.showLanguageModeIcons !== !1),
							T = [],
							P = f.fonts,
							k = new Map();
						if (Array.isArray(P)) {
							const L = P[0].size || "150%";
							P.forEach((D) => {
								const M = D.src
									.map((N) => `${(0, m.$vhb)(v(N.path))} format('${N.format}')`)
									.join(", ");
								T.push(
									`@font-face { src: ${M}; font-family: '${D.id}'; font-weight: ${D.weight}; font-style: ${D.style}; font-display: block; }`,
								),
									D.size !== void 0 && D.size !== L && k.set(D.id, D.size);
							}),
								T.push(
									`.show-file-icons .file-icon::before, .show-file-icons .folder-icon::before, .show-file-icons .rootfolder-icon::before { font-family: '${P[0].id}'; font-size: ${L}; }`,
								);
						}
						for (const L in l) {
							const D = l[L],
								M = f.iconDefinitions[L];
							if (M) {
								if (M.iconPath)
									T.push(
										`${D.join(", ")} { content: ' '; background-image: ${(0, m.$vhb)(v(M.iconPath))}; }`,
									);
								else if (M.fontCharacter || M.fontColor) {
									const N = [];
									M.fontColor && N.push(`color: ${M.fontColor};`),
										M.fontCharacter && N.push(`content: '${M.fontCharacter}';`);
									const A = M.fontSize ?? (M.fontId ? k.get(M.fontId) : void 0);
									A && N.push(`font-size: ${A};`),
										M.fontId && N.push(`font-family: ${M.fontId};`),
										I && N.push("background-image: unset;"),
										T.push(`${D.join(", ")} { ${N.join(" ")} }`);
								}
							}
						}
						if (I) {
							for (const L of this.b.getRegisteredLanguageIds())
								if (!y[L]) {
									const D = this.b.getIcon(L);
									if (D) {
										const M = `.show-file-icons .${n(L)}-lang-file-icon.file-icon::before`;
										T.push(
											`${M} { content: ' '; background-image: ${(0, m.$vhb)(D.dark)}; }`,
										),
											T.push(
												`.vs ${M} { content: ' '; background-image: ${(0, m.$vhb)(D.light)}; }`,
											);
									}
								}
						}
						return (
							(b.content = T.join(`
`)),
							b
						);
					}
				}
				e.$fwc = h;
				function c(g, p) {
					const o = g.lastIndexOf("/");
					if (o >= 0) {
						const f = g.substring(0, o);
						return p.push(`.${n(f)}-name-dir-icon`), g.substring(o + 1);
					}
					return g;
				}
				function n(g) {
					return (g = g.replace(/[\s]/g, "/")), u.$Bfb.CSS.escape(g);
				}
			},
		),
		define(
			de[1890],
			he([1, 0, 4, 54, 19, 187, 333, 754, 21, 1322, 28, 79, 26]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$lwc = e.$kwc = void 0),
					(t = mt(t)),
					(i = mt(i)),
					(w = mt(w)),
					(E = mt(E)),
					(e.$kwc = "");
				class c {
					static {
						this.STORAGE_KEY = "productIconThemeData";
					}
					constructor(f, b, s) {
						(this.iconThemeDocument = { iconDefinitions: new Map() }),
							(this.id = f),
							(this.label = b),
							(this.settingsId = s),
							(this.isLoaded = !1);
					}
					getIcon(f) {
						return p(f, this.iconThemeDocument);
					}
					ensureLoaded(f, b) {
						return this.isLoaded
							? Promise.resolve(this.styleSheetContent)
							: this.a(f, b);
					}
					reload(f, b) {
						return this.a(f, b);
					}
					async a(f, b) {
						const s = this.location;
						if (!s) return Promise.resolve(this.styleSheetContent);
						const l = [];
						return (
							(this.iconThemeDocument = await n(f, s, l)),
							(this.isLoaded = !0),
							l.length &&
								b.error(
									t.localize(
										12700,
										null,
										s.toString(),
										l.join(`
`),
									),
								),
							this.styleSheetContent
						);
					}
					static fromExtensionTheme(f, b, s) {
						const l = s.extensionId + "-" + f.id,
							y = f.label || i.$sc(f.path),
							$ = f.id,
							v = new c(l, y, $);
						return (
							(v.description = f.description),
							(v.location = b),
							(v.extensionData = s),
							(v.watch = f._watch),
							(v.isLoaded = !1),
							v
						);
					}
					static createUnloadedTheme(f) {
						const b = new c(f, "", "__" + f);
						return (
							(b.isLoaded = !1), (b.extensionData = void 0), (b.watch = !1), b
						);
					}
					static {
						this.b = null;
					}
					static get defaultTheme() {
						let f = c.b;
						return (
							f ||
								((f = c.b =
									new c(
										e.$kwc,
										t.localize(12701, null),
										C.ThemeSettingDefaults.PRODUCT_ICON_THEME,
									)),
								(f.isLoaded = !0),
								(f.extensionData = void 0),
								(f.watch = !1)),
							f
						);
					}
					static fromStorageData(f) {
						const b = f.get(c.STORAGE_KEY, m.StorageScope.PROFILE);
						if (b)
							try {
								const s = JSON.parse(b),
									l = new c("", "", "");
								for (const v in s)
									switch (v) {
										case "id":
										case "label":
										case "description":
										case "settingsId":
										case "styleSheetContent":
										case "watch":
											l[v] = s[v];
											break;
										case "location":
											break;
										case "extensionData":
											l.extensionData = C.ExtensionData.fromJSONObject(
												s.extensionData,
											);
											break;
									}
								const { iconDefinitions: y, iconFontDefinitions: $ } = s;
								if (Array.isArray(y) && (0, u.$ng)($)) {
									const v = new Map();
									for (const S of y) {
										const { id: I, fontCharacter: T, fontId: P } = S;
										if ((0, u.$lg)(I) && (0, u.$lg)(T))
											if ((0, u.$lg)(P)) {
												const k = a.IconFontDefinition.fromJSONObject($[P]);
												k &&
													v.set(I, {
														fontCharacter: T,
														font: { id: P, definition: k },
													});
											} else v.set(I, { fontCharacter: T });
									}
									l.iconThemeDocument = { iconDefinitions: v };
								}
								return l;
							} catch {
								return;
							}
					}
					toStorage(f) {
						const b = [],
							s = {};
						for (const y of this.iconThemeDocument.iconDefinitions.entries()) {
							const $ = y[1].font;
							b.push({
								id: y[0],
								fontCharacter: y[1].fontCharacter,
								fontId: $?.id,
							}),
								$ &&
									s[$.id] === void 0 &&
									(s[$.id] = a.IconFontDefinition.toJSONObject($.definition));
						}
						const l = JSON.stringify({
							id: this.id,
							label: this.label,
							description: this.description,
							settingsId: this.settingsId,
							styleSheetContent: this.styleSheetContent,
							watch: this.watch,
							extensionData: C.ExtensionData.toJSONObject(this.extensionData),
							iconDefinitions: b,
							iconFontDefinitions: s,
						});
						f.store(
							c.STORAGE_KEY,
							l,
							m.StorageScope.PROFILE,
							m.StorageTarget.MACHINE,
						);
					}
				}
				e.$lwc = c;
				function n(o, f, b) {
					return o.readExtensionResource(f).then((s) => {
						const l = [],
							y = E.$do(s, l);
						if (l.length > 0)
							return Promise.reject(
								new Error(
									t.localize(
										12702,
										null,
										l.map((T) => (0, d.$br)(T.error)).join(", "),
									),
								),
							);
						if (E.$lo(y) !== "object")
							return Promise.reject(new Error(t.localize(12703, null)));
						if (
							!y.iconDefinitions ||
							!Array.isArray(y.fonts) ||
							!y.fonts.length
						)
							return Promise.reject(new Error(t.localize(12704, null)));
						const $ = w.$mh(f),
							v = new Map();
						for (const T of y.fonts)
							if ((0, u.$lg)(T.id) && T.id.match(r.$0vc)) {
								const P = T.id;
								let k;
								(0, u.$lg)(T.weight) && T.weight.match(r.$_vc)
									? (k = T.weight)
									: b.push(t.localize(12705, null, T.id));
								let L;
								(0, u.$lg)(T.style) && T.style.match(r.$$vc)
									? (L = T.style)
									: b.push(t.localize(12706, null, T.id));
								const D = [];
								if (Array.isArray(T.src))
									for (const M of T.src)
										if (
											(0, u.$lg)(M.path) &&
											(0, u.$lg)(M.format) &&
											M.format.match(r.$bwc)
										) {
											const N = w.$nh($, M.path);
											D.push({ location: N, format: M.format });
										} else b.push(t.localize(12707, null, T.id));
								D.length
									? v.set(P, { weight: k, style: L, src: D })
									: b.push(t.localize(12708, null, T.id));
							} else b.push(t.localize(12709, null, T.id));
						const S = new Map(),
							I = y.fonts[0].id;
						for (const T in y.iconDefinitions) {
							const P = y.iconDefinitions[T];
							if ((0, u.$lg)(P.fontCharacter)) {
								const k = P.fontId ?? I,
									L = v.get(k);
								if (L) {
									const D = { id: `pi-${k}`, definition: L };
									S.set(T, { fontCharacter: P.fontCharacter, font: D });
								} else b.push(t.localize(12710, null, T));
							} else b.push(t.localize(12711, null, T));
						}
						return { iconDefinitions: S };
					});
				}
				const g = (0, a.$_O)();
				function p(o, f) {
					const b = f.iconDefinitions;
					let s = b.get(o.id),
						l = o.defaults;
					for (; !s && h.ThemeIcon.isThemeIcon(l); ) {
						const y = g.getIcon(l.id);
						if (y) (s = b.get(y.id)), (l = y.defaults);
						else return;
					}
					if (s) return s;
					if (!h.ThemeIcon.isThemeIcon(l)) return l;
				}
			},
		),
		define(
			de[3726],
			he([
				1, 0, 4, 27, 11, 37, 30, 99, 333, 141, 119, 51, 18, 97, 212, 1321, 29,
				63, 1890, 142, 60, 15, 33, 34, 84, 14, 79, 26, 6, 546, 5, 43, 31, 1889,
				10, 57, 55, 52, 40, 21, 12, 32, 87, 75, 131, 268, 106, 3,
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
			) {
				"use strict";
				var W;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0Xc = void 0),
					(e.$0Xc = (0, I.$$O)(
						"theme-selection-manage-extension",
						S.$ak.gear,
						(0, t.localize)(10951, null),
					));
				var X;
				(function (fe) {
					(fe.BROWSE_GALLERY = "marketplace"),
						(fe.EXTENSIONS_VIEW = "extensions"),
						(fe.CUSTOM_TOP_ENTRY = "customTopEntry");
				})(X || (X = {}));
				let Y = class {
					constructor(me, ve, ge, be, Ce, Le, Fe, Oe, xe) {
						(this.l = me),
							(this.m = ve),
							(this.n = ge),
							(this.o = be),
							(this.q = Ce),
							(this.r = Le),
							(this.u = Fe),
							(this.v = Oe),
							(this.w = xe),
							(this.b = new Set()),
							(this.d = []),
							(this.f = !1),
							(this.g = void 0),
							(this.h = new P.$re()),
							(this.k = new l.$Kh(200)),
							(this.a = be.getInstalled().then((He) => {
								const Ke = new Set();
								for (const Je of He) Ke.add(Je.identifier.id);
								return Ke;
							}));
					}
					get themes() {
						return this.d;
					}
					get onDidChange() {
						return this.h.event;
					}
					trigger(me) {
						this.j && (this.j.cancel(), (this.j = void 0)),
							this.k.trigger(
								() => ((this.j = new y.$Ce()), this.x(me, this.j.token)),
							);
					}
					async x(me, ve) {
						(this.f = !0), this.h.fire();
						try {
							const ge = await this.a,
								be = { text: `${this.m} ${me}`, pageSize: 20 },
								Ce = await this.n.query(be, ve);
							for (
								let Le = 0;
								Le < Ce.total && Le < 1 && !ve.isCancellationRequested;
								Le++
							) {
								const Fe = this.d.length,
									Oe = Le === 0 ? Ce.firstPage : await Ce.getPage(Le, ve),
									xe = [],
									He = [];
								for (
									let Je = 0;
									Je < Oe.length && !ve.isCancellationRequested;
									Je++
								) {
									const Te = Oe[Je];
									!ge.has(Te.identifier.id) &&
										!this.b.has(Te.identifier.id) &&
										(this.b.add(Te.identifier.id),
										xe.push(this.l(Te.publisher, Te.name, Te.version)),
										He.push(Te));
								}
								const Ke = await Promise.all(xe);
								for (let Je = 0; Je < Ke.length; Je++) {
									const Te = He[Je];
									for (const Ee of Ke[Je])
										this.d.push({
											id: Ee.id,
											theme: Ee,
											label: Ee.label,
											description: `${Te.displayName} \xB7 ${Te.publisherDisplayName}`,
											galleryExtension: Te,
											buttons: [oe],
										});
								}
								Fe !== this.d.length &&
									(this.d.sort((Je, Te) => Je.label.localeCompare(Te.label)),
									this.h.fire());
							}
						} catch (ge) {
							(0, p.$8)(ge) ||
								(this.r.error("Error while searching for themes:", ge),
								(this.g = "message" in ge ? ge.message : String(ge)));
						} finally {
							(this.f = !1), this.h.fire();
						}
					}
					openQuickPick(me, ve, ge) {
						let be;
						const Ce = new J.$Zc();
						return new Promise((Le, Fe) => {
							const Oe = Ce.add(this.q.createQuickPick());
							(Oe.items = []),
								(Oe.sortByLabel = !1),
								(Oe.matchOnDescription = !0),
								(Oe.buttons = [this.q.backButton]),
								(Oe.title = "Marketplace Themes"),
								(Oe.placeholder = (0, t.localize)(10952, null)),
								(Oe.canSelectMany = !1),
								Ce.add(Oe.onDidChangeValue(() => this.trigger(Oe.value))),
								Ce.add(
									Oe.onDidAccept(async (xe) => {
										const He = Oe.selectedItems[0];
										if (He?.galleryExtension) {
											(be = "selected"), Oe.hide();
											const Ke = await this.y(He.galleryExtension);
											ge(Ke ? He.theme : ve, !0);
										}
									}),
								),
								Ce.add(
									Oe.onDidTriggerItemButton((xe) => {
										if (se(xe.item)) {
											const He = xe.item.theme?.extensionData?.extensionId;
											He
												? Z(this.v, `@id:${He}`)
												: Z(this.v, `${this.m} ${Oe.value}`);
										}
									}),
								),
								Ce.add(
									Oe.onDidChangeActive((xe) => {
										be === void 0 && ge(xe[0]?.theme, !1);
									}),
								),
								Ce.add(
									Oe.onDidHide(() => {
										be === void 0 && (ge(ve, !0), (be = "cancelled")), Le(be);
									}),
								),
								Ce.add(
									Oe.onDidTriggerButton((xe) => {
										xe === this.q.backButton && ((be = "back"), Oe.hide());
									}),
								),
								Ce.add(
									this.onDidChange(() => {
										let xe = this.themes;
										this.f
											? (xe = xe.concat({
													label: "$(sync~spin) Searching for themes...",
													id: void 0,
													alwaysShow: !0,
												}))
											: xe.length === 0 &&
												this.g &&
												(xe = [
													{
														label: `$(error) ${(0, t.localize)(10953, null, this.g)}`,
														id: void 0,
														alwaysShow: !0,
													},
												]);
										const He = Oe.activeItems[0]?.id,
											Ke = He
												? xe.find((Je) => se(Je) && Je.id === He)
												: void 0;
										(Oe.items = xe), Ke && (Oe.activeItems = [Ke]);
									}),
								),
								this.trigger(me),
								Oe.show();
						}).finally(() => {
							Ce.dispose();
						});
					}
					async y(me) {
						if (
							(Z(this.v, `@id:${me.identifier.id}`),
							!(
								await this.w.confirm({
									message: (0, t.localize)(
										10954,
										null,
										me.displayName,
										me.publisherDisplayName,
									),
									primaryButton: (0, t.localize)(10955, null),
								})
							).confirmed)
						)
							return !1;
						try {
							return (
								await this.u.withProgress(
									{
										location: v.ProgressLocation.Notification,
										title: (0, t.localize)(10956, null, me.displayName),
									},
									async () => {
										await this.o.installFromGallery(me, {
											isMachineScoped: !1,
										});
									},
								),
								!0
							);
						} catch (ge) {
							return (
								this.r.error(
									`Problem installing extension ${me.identifier.id}`,
									ge,
								),
								!1
							);
						}
					}
					dispose() {
						this.j && (this.j.cancel(), (this.j = void 0)),
							this.k.dispose(),
							this.b.clear(),
							(this.d.length = 0);
					}
				};
				Y = Ne(
					[
						j(2, u.$Ep),
						j(3, u.$Hp),
						j(4, o.$DJ),
						j(5, $.$ik),
						j(6, v.$8N),
						j(7, b.$6Sb),
						j(8, R.$GO),
					],
					Y,
				);
				let ie = class {
					constructor(me, ve, ge, be, Ce, Le, Fe, Oe) {
						(this.a = me),
							(this.b = ve),
							(this.d = ge),
							(this.f = be),
							(this.g = Ce),
							(this.h = Le),
							(this.j = Fe),
							(this.k = Oe);
					}
					async openQuickPick(me, ve) {
						let ge;
						this.g.isEnabled() &&
							(this.j.supportsExtensionGalleryResources && this.a.browseMessage
								? ((ge = this.k.createInstance(
										Y,
										this.d.bind(this),
										this.a.marketplaceTag,
									)),
									(me = [Q(this.a.browseMessage, X.BROWSE_GALLERY), ...me]))
								: (me = [
										...me,
										{ type: "separator" },
										Q(this.a.installMessage, X.EXTENSIONS_VIEW),
									]));
						let be;
						const Ce = (Fe, Oe) => {
								be && clearTimeout(be),
									(be = q.$Bfb.setTimeout(
										() => {
											be = void 0;
											const xe = Fe ?? ve;
											this.b(xe, Oe ? "auto" : "preview").then(void 0, (He) => {
												(0, p.$4)(He), this.b(ve, void 0);
											});
										},
										Oe ? 0 : 200,
									));
							},
							Le = (Fe) => {
								const Oe = new J.$Zc();
								return new Promise((xe, He) => {
									let Ke = !1;
									const Je = me.findIndex((Ee) => se(Ee) && Ee.id === Fe),
										Te = Oe.add(this.f.createQuickPick({ useSeparators: !0 }));
									(Te.items = me),
										(Te.title = this.a.title),
										(Te.description = this.a.description),
										(Te.placeholder = this.a.placeholderMessage),
										(Te.activeItems = [me[Je]]),
										(Te.canSelectMany = !1),
										(Te.toggles = this.a.toggles),
										Te.toggles?.forEach((Ee) => {
											Oe.add(Ee.onChange(() => this.a.onToggle?.(Ee, Te)));
										}),
										(Te.matchOnDescription = !0),
										Oe.add(
											Te.onDidAccept(async (Ee) => {
												Ke = !0;
												const Ie = Te.selectedItems[0];
												!Ie || Ie.configureItem
													? !Ie || Ie.configureItem === X.EXTENSIONS_VIEW
														? Z(this.h, `${this.a.marketplaceTag} ${Te.value}`)
														: Ie.configureItem === X.BROWSE_GALLERY &&
															ge &&
															(await ge.openQuickPick(Te.value, ve, Ce)) ===
																"back" &&
															(await Le(void 0))
													: Ce(Ie.theme, !0),
													Te.hide(),
													xe();
											}),
										),
										Oe.add(Te.onDidChangeActive((Ee) => Ce(Ee[0]?.theme, !1))),
										Oe.add(
											Te.onDidHide(() => {
												Ke || (Ce(ve, !0), xe()), Te.dispose();
											}),
										),
										Oe.add(
											Te.onDidTriggerItemButton((Ee) => {
												if (se(Ee.item)) {
													const Ie = Ee.item.theme?.extensionData?.extensionId;
													Ie
														? Z(this.h, `@id:${Ie}`)
														: Z(this.h, `${this.a.marketplaceTag} ${Te.value}`);
												}
											}),
										),
										Te.show();
								}).finally(() => {
									Oe.dispose();
								});
							};
						await Le(ve.id), ge?.dispose();
					}
				};
				ie = Ne(
					[j(3, o.$DJ), j(4, u.$Ep), j(5, b.$6Sb), j(6, k.$bYb), j(7, L.$Li)],
					ie,
				);
				const ne = "workbench.action.selectTheme";
				(0, w.$4X)(
					class extends w.$3X {
						constructor() {
							super({
								id: ne,
								title: (0, t.localize2)(10994, "Color Theme"),
								category: d.$ck.Preferences,
								f1: !0,
								keybinding: {
									weight: D.KeybindingWeight.WorkbenchContrib,
									primary: (0, i.$os)(i.$ps, i.KeyMod.CtrlCmd | i.KeyCode.KeyT),
									mac: {
										primary: (0, i.$os)(
											i.$qs,
											i.KeyMod.CtrlCmd | i.KeyCode.KeyT,
										),
									},
								},
							});
						}
						a(fe) {
							switch (fe) {
								case n.ColorScheme.DARK:
									return (0, t.localize)(10957, null);
								case n.ColorScheme.LIGHT:
									return (0, t.localize)(10958, null);
								case n.ColorScheme.HIGH_CONTRAST_DARK:
									return (0, t.localize)(10959, null);
								case n.ColorScheme.HIGH_CONTRAST_LIGHT:
									return (0, t.localize)(10960, null);
								default:
									return (0, t.localize)(10961, null);
							}
						}
						async run(fe) {
							const me = fe.get(m.$rRb),
								ve = fe.get(V.$7Z),
								ge = me.getPreferredColorScheme();
							let be;
							ge
								? (be = new G.$8ib({
										title: (0, t.localize)(10962, null),
										icon: S.$ak.colorMode,
										isChecked: !1,
										...K.$pyb,
									}))
								: (be = new G.$8ib({
										title: (0, t.localize)(10963, null),
										icon: S.$ak.colorMode,
										isChecked: !1,
										...K.$pyb,
									}));
							const Ce = {
									installMessage: (0, t.localize)(10964, null),
									browseMessage: "$(plus) " + (0, t.localize)(10965, null),
									placeholderMessage: this.a(ge),
									marketplaceTag: "category:themes",
									toggles: [be],
									onToggle: async (Be, Se) => {
										Se.hide(),
											await ve.openSettings({
												query: m.ThemeSettings.DETECT_COLOR_SCHEME,
											});
									},
								},
								Le = (Be, Se) => me.setColorTheme(Be, Se),
								Fe = (Be, Se, ke) => me.getMarketplaceColorThemes(Be, Se, ke),
								xe = fe.get(L.$Li).createInstance(ie, Ce, Le, Fe),
								He = await me.getColorThemes(),
								Ke = me.getColorTheme(),
								Je = le(
									He.filter((Be) => Be.type === n.ColorScheme.LIGHT),
									(0, t.localize)(10966, null),
								),
								Te = le(
									He.filter((Be) => Be.type === n.ColorScheme.DARK),
									(0, t.localize)(10967, null),
								),
								Ee = le(
									He.filter((Be) => (0, n.$gP)(Be.type)),
									(0, t.localize)(10968, null),
								);
							let Ie;
							switch (ge) {
								case n.ColorScheme.DARK:
									Ie = [...Te, ...Je, ...Ee];
									break;
								case n.ColorScheme.HIGH_CONTRAST_DARK:
								case n.ColorScheme.HIGH_CONTRAST_LIGHT:
									Ie = [...Ee, ...Je, ...Te];
									break;
								case n.ColorScheme.LIGHT:
								default:
									Ie = [...Je, ...Te, ...Ee];
									break;
							}
							await xe.openQuickPick(Ie, Ke);
						}
					},
				);
				const ee = "workbench.action.selectIconTheme";
				(0, w.$4X)(
					class extends w.$3X {
						constructor() {
							super({
								id: ee,
								title: (0, t.localize2)(10995, "File Icon Theme"),
								category: d.$ck.Preferences,
								f1: !0,
							});
						}
						async run(fe) {
							const me = fe.get(m.$rRb),
								ve = {
									installMessage: (0, t.localize)(10969, null),
									placeholderMessage: (0, t.localize)(10970, null),
									marketplaceTag: "tag:icon-theme",
								},
								ge = (Oe, xe) => me.setFileIconTheme(Oe, xe),
								be = (Oe, xe, He) =>
									me.getMarketplaceFileIconThemes(Oe, xe, He),
								Le = fe.get(L.$Li).createInstance(ie, ve, ge, be),
								Fe = [
									{ type: "separator", label: (0, t.localize)(10971, null) },
									{
										id: "",
										theme: N.$ewc.noIconTheme,
										label: (0, t.localize)(10972, null),
										description: (0, t.localize)(10973, null),
									},
									...le(await me.getFileIconThemes()),
								];
							await Le.openQuickPick(Fe, me.getFileIconTheme());
						}
					},
				);
				const _ = "workbench.action.selectProductIconTheme";
				(0, w.$4X)(
					class extends w.$3X {
						constructor() {
							super({
								id: _,
								title: (0, t.localize2)(10996, "Product Icon Theme"),
								category: d.$ck.Preferences,
								f1: !0,
							});
						}
						async run(fe) {
							const me = fe.get(m.$rRb),
								ve = {
									installMessage: (0, t.localize)(10974, null),
									browseMessage: "$(plus) " + (0, t.localize)(10975, null),
									placeholderMessage: (0, t.localize)(10976, null),
									marketplaceTag: "tag:product-icon-theme",
								},
								ge = (Oe, xe) => me.setProductIconTheme(Oe, xe),
								be = (Oe, xe, He) =>
									me.getMarketplaceProductIconThemes(Oe, xe, He),
								Le = fe.get(L.$Li).createInstance(ie, ve, ge, be),
								Fe = [
									{ type: "separator", label: (0, t.localize)(10977, null) },
									{
										id: f.$kwc,
										theme: f.$lwc.defaultTheme,
										label: (0, t.localize)(10978, null),
									},
									...le(await me.getProductIconThemes()),
								];
							await Le.openQuickPick(Fe, me.getProductIconTheme());
						}
					},
				),
					M.$fk.registerCommand(
						"workbench.action.previewColorTheme",
						async function (fe, me, ve) {
							const ge = fe.get(m.$rRb);
							let be = te(await ge.getColorThemes(), me);
							be.length === 0 &&
								(be = await ge.getMarketplaceColorThemes(
									me.publisher,
									me.name,
									me.version,
								));
							for (const Ce of be)
								if (!ve || Ce.settingsId === ve)
									return await ge.setColorTheme(Ce, "preview"), Ce.settingsId;
						},
					);
				function te(fe, me) {
					return fe.filter(
						({ extensionData: ve }) =>
							ve &&
							ve.extensionIsBuiltin &&
							(0, E.$Mf)(ve.extensionPublisher, me.publisher) &&
							(0, E.$Mf)(ve.extensionName, me.name),
					);
				}
				function Q(fe, me) {
					return {
						id: void 0,
						label: fe,
						alwaysShow: !0,
						buttons: [oe],
						configureItem: me,
					};
				}
				function Z(fe, me) {
					return fe
						.openPaneComposite(r.$LQb, s.ViewContainerLocation.Sidebar, !0)
						.then((ve) => {
							ve && ((ve?.getViewPaneContainer()).search(me), ve.focus());
						});
				}
				function se(fe) {
					return fe.type !== "separator";
				}
				function re(fe) {
					const me = fe.settingsId ?? void 0,
						ve = {
							id: fe.id,
							theme: fe,
							label: fe.label,
							description: fe.description || (fe.label === me ? void 0 : me),
						};
					return fe.extensionData && (ve.buttons = [oe]), ve;
				}
				function le(fe, me) {
					const ve = (be, Ce) => be.label.localeCompare(Ce.label),
						ge = fe.map(re).sort(ve);
					return (
						ge.length > 0 && me && ge.unshift({ type: "separator", label: me }),
						ge
					);
				}
				const oe = {
					iconClass: T.ThemeIcon.asClassName(e.$0Xc),
					tooltip: (0, t.localize)(10979, null),
				};
				(0, w.$4X)(
					class extends w.$3X {
						constructor() {
							super({
								id: "workbench.action.generateColorTheme",
								title: (0, t.localize2)(
									10997,
									"Generate Color Theme From Current Settings",
								),
								category: d.$ck.Developer,
								f1: !0,
							});
						}
						run(fe) {
							const ve = fe.get(m.$rRb).getColorTheme(),
								be = C.$Io
									.as(a.$uP.ColorContribution)
									.getColors()
									.map((He) => He.id)
									.sort(),
								Ce = {},
								Le = [];
							for (const He of be) {
								const Ke = ve.getColor(He, !1);
								Ke
									? (Ce[He] = c.$UL.Format.CSS.formatHexA(Ke, !0))
									: Le.push(He);
							}
							const Fe = [];
							for (const He of Le) {
								const Ke = ve.getColor(He);
								Ke
									? (Ce["__" + He] = c.$UL.Format.CSS.formatHexA(Ke, !0))
									: Fe.push(He);
							}
							for (const He of Fe) Ce["__" + He] = null;
							let Oe = JSON.stringify(
								{
									$schema: g.$Yvc,
									type: ve.type,
									colors: Ce,
									tokenColors: ve.tokenColors.filter((He) => !!He.scope),
								},
								null,
								"	",
							);
							return (
								(Oe = Oe.replace(/\"__/g, '//"')),
								fe
									.get(h.$IY)
									.openEditor({
										resource: void 0,
										contents: Oe,
										languageId: "jsonc",
										options: { pinned: !0 },
									})
							);
						}
					},
				);
				const ae = "workbench.action.toggleLightDarkThemes";
				(0, w.$4X)(
					class extends w.$3X {
						constructor() {
							super({
								id: ae,
								title: (0, t.localize2)(
									10998,
									"Toggle between Light/Dark Themes",
								),
								category: d.$ck.Preferences,
								f1: !0,
							});
						}
						async run(fe) {
							const me = fe.get(m.$rRb),
								ve = fe.get(A.$gj),
								ge = fe.get(U.$4N),
								be = fe.get(V.$7Z);
							if (ve.getValue(m.ThemeSettings.DETECT_COLOR_SCHEME)) {
								const Oe = (0, t.localize)(
									10980,
									null,
									m.ThemeSettings.DETECT_COLOR_SCHEME,
								);
								ge.prompt(U.Severity.Info, Oe, [
									{
										label: (0, t.localize)(10981, null),
										run: () =>
											be.openUserSettings({
												query: m.ThemeSettings.DETECT_COLOR_SCHEME,
											}),
									},
								]);
								return;
							}
							const Ce = me.getColorTheme();
							let Le = m.ThemeSettings.PREFERRED_DARK_THEME;
							switch (Ce.type) {
								case n.ColorScheme.LIGHT:
									Le = m.ThemeSettings.PREFERRED_DARK_THEME;
									break;
								case n.ColorScheme.DARK:
									Le = m.ThemeSettings.PREFERRED_LIGHT_THEME;
									break;
								case n.ColorScheme.HIGH_CONTRAST_LIGHT:
									Le = m.ThemeSettings.PREFERRED_HC_DARK_THEME;
									break;
								case n.ColorScheme.HIGH_CONTRAST_DARK:
									Le = m.ThemeSettings.PREFERRED_HC_LIGHT_THEME;
									break;
							}
							const Fe = ve.getValue(Le);
							if (Fe && typeof Fe == "string") {
								const Oe = (await me.getColorThemes()).find(
									(xe) => xe.settingsId === Fe,
								);
								Oe && me.setColorTheme(Oe.id, "auto");
							}
						}
					},
				);
				const pe = "workbench.action.browseColorThemesInMarketplace";
				(0, w.$4X)(
					class extends w.$3X {
						constructor() {
							super({
								id: pe,
								title: (0, t.localize2)(
									10999,
									"Browse Color Themes in Marketplace",
								),
								category: d.$ck.Preferences,
								f1: !0,
							});
						}
						async run(fe) {
							const me = "category:themes",
								ve = fe.get(m.$rRb),
								ge = fe.get(u.$Ep),
								be = fe.get(k.$bYb),
								Ce = fe.get(L.$Li);
							if (!ge.isEnabled() || !be.supportsExtensionGalleryResources)
								return;
							const Le = ve.getColorTheme(),
								Fe = (Ke, Je, Te) => ve.getMarketplaceColorThemes(Ke, Je, Te);
							let Oe;
							const xe = (Ke, Je) => {
								Oe && clearTimeout(Oe),
									(Oe = q.$Bfb.setTimeout(
										() => {
											Oe = void 0;
											const Te = Ke ?? Le;
											ve.setColorTheme(Te, Je ? "auto" : "preview").then(
												void 0,
												(Ee) => {
													(0, p.$4)(Ee), ve.setColorTheme(Le, void 0);
												},
											);
										},
										Je ? 0 : 200,
									));
							};
							await Ce.createInstance(Y, Fe, me)
								.openQuickPick("", ve.getColorTheme(), xe)
								.then(void 0, p.$4);
						}
					},
				);
				const $e = new w.$XX("ThemesSubMenu");
				w.$ZX.appendMenuItem(w.$XX.GlobalActivity, {
					title: (0, t.localize)(10982, null),
					submenu: $e,
					group: "2_configuration",
					order: 7,
				}),
					w.$ZX.appendMenuItem(w.$XX.MenubarPreferencesMenu, {
						title: (0, t.localize)(10983, null),
						submenu: $e,
						group: "2_configuration",
						order: 7,
					}),
					w.$ZX.appendMenuItem($e, {
						command: { id: ne, title: (0, t.localize)(10984, null) },
						order: 1,
					}),
					w.$ZX.appendMenuItem($e, {
						command: { id: ee, title: (0, t.localize)(10985, null) },
						order: 2,
					}),
					w.$ZX.appendMenuItem($e, {
						command: { id: _, title: (0, t.localize)(10986, null) },
						order: 3,
					});
				let ye = class {
					static {
						W = this;
					}
					static {
						this.STORAGE_KEY = "themeUpdatedNotificationShown";
					}
					constructor(me, ve, ge, be, Ce, Le) {
						(this.a = me),
							(this.b = ve),
							(this.d = ge),
							(this.f = be),
							(this.g = Ce),
							(this.h = Le),
							!ge.getBoolean(W.STORAGE_KEY, z.StorageScope.APPLICATION) &&
								setTimeout(async () => {
									if (
										!ge.getBoolean(W.STORAGE_KEY, z.StorageScope.APPLICATION) &&
										(await this.h.hadLastFocus())
									)
										if (
											(this.d.store(
												W.STORAGE_KEY,
												!0,
												z.StorageScope.APPLICATION,
												z.StorageTarget.USER,
											),
											this.b.hasUpdatedDefaultThemes())
										)
											this.j();
										else {
											const Fe = this.b.getColorTheme().settingsId;
											(Fe === m.ThemeSettingDefaults.COLOR_THEME_LIGHT_OLD ||
												Fe === m.ThemeSettingDefaults.COLOR_THEME_DARK_OLD) &&
												this.k();
										}
								}, 3e3);
					}
					async j() {
						const me = this.b.getColorTheme().type === n.ColorScheme.LIGHT,
							ve = me
								? m.ThemeSettingDefaults.COLOR_THEME_LIGHT
								: m.ThemeSettingDefaults.COLOR_THEME_DARK,
							ge = (await this.b.getColorThemes()).find(
								(be) => be.settingsId === ve,
							);
						if (ge) {
							const be = [
								{
									label: (0, t.localize)(10987, null),
									run: () => {
										this.l("keepNew");
									},
								},
								{
									label: (0, t.localize)(10988, null),
									run: () => {
										this.l("browse"), this.f.executeCommand(ne);
									},
								},
								{
									label: (0, t.localize)(10989, null),
									run: async () => {
										this.l("keepOld");
										const Ce = me
												? m.ThemeSettingDefaults.COLOR_THEME_LIGHT_OLD
												: m.ThemeSettingDefaults.COLOR_THEME_DARK_OLD,
											Le = (await this.b.getColorThemes()).find(
												(Fe) => Fe.settingsId === Ce,
											);
										Le && this.b.setColorTheme(Le, "auto");
									},
								},
							];
							await this.a.prompt(
								U.Severity.Info,
								(0, t.localize)(10990, null, ge.label),
								be,
								{ onCancel: () => this.l("cancel") },
							);
						}
					}
					async k() {
						const me =
								this.b.getColorTheme().type === n.ColorScheme.LIGHT
									? m.ThemeSettingDefaults.COLOR_THEME_LIGHT
									: m.ThemeSettingDefaults.COLOR_THEME_DARK,
							ve = (await this.b.getColorThemes()).find(
								(ge) => ge.settingsId === me,
							);
						if (ve) {
							const ge = [
								{
									label: (0, t.localize)(10991, null),
									run: () => {
										this.l("tryNew"), this.b.setColorTheme(ve, "auto");
									},
								},
								{
									label: (0, t.localize)(10992, null),
									run: () => {
										this.l("cancel");
									},
								},
							];
							await this.a.prompt(
								U.Severity.Info,
								(0, t.localize)(10993, null, ve.label),
								ge,
								{ onCancel: () => this.l("cancel") },
							);
						}
					}
					l(me) {
						this.g.publicLog2("themeUpdatedNotication", {
							web: F.$r,
							reaction: me,
						});
					}
				};
				(ye = W =
					Ne(
						[
							j(0, U.$4N),
							j(1, m.$rRb),
							j(2, z.$lq),
							j(3, M.$ek),
							j(4, x.$km),
							j(5, H.$asb),
						],
						ye,
					)),
					C.$Io
						.as(O.Extensions.Workbench)
						.registerWorkbenchContribution(ye, B.LifecyclePhase.Eventually);
			},
		),
		define(
			de[3727],
			he([
				1, 0, 54, 187, 97, 333, 3714, 4, 28, 19, 51, 35, 30, 754, 3711, 778,
				3713, 120, 21, 212,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9vc = void 0),
					(i = mt(i)),
					(d = mt(d)),
					(m = mt(m)),
					(r = mt(r));
				const s = h.$Io.as(u.$uP.ColorContribution),
					l = (0, g.$nmc)(),
					y = {
						comments: ["comment", "punctuation.definition.comment"],
						strings: ["string", "meta.embedded.assembly"],
						keywords: [
							"keyword - keyword.operator",
							"keyword.control",
							"storage",
							"storage.type",
						],
						numbers: ["constant.numeric"],
						types: [
							"entity.name.type",
							"entity.name.class",
							"support.type",
							"support.class",
						],
						functions: ["entity.name.function", "support.function"],
						variables: ["variable", "entity.name.variable"],
					};
				class $ {
					static {
						this.STORAGE_KEY = "colorThemeData";
					}
					constructor(U, z, F) {
						(this.h = []),
							(this.j = []),
							(this.l = {}),
							(this.m = {}),
							(this.n = []),
							(this.o = []),
							(this.u = void 0),
							(this.v = void 0),
							(this.id = U),
							(this.label = z),
							(this.settingsId = F),
							(this.isLoaded = !1);
					}
					get semanticHighlighting() {
						return this.c !== void 0
							? this.c
							: this.g !== void 0
								? this.g
								: !!this.b;
					}
					get tokenColors() {
						if (!this.u) {
							let H = function (q) {
								q.scope &&
									q.settings &&
									(q.scope === "token.info-token" && (x = !0),
									U.push({
										scope: q.scope,
										settings: {
											foreground: R(q.settings.foreground),
											background: R(q.settings.background),
											fontStyle: q.settings.fontStyle,
										},
									}));
							};
							const U = [],
								z = this.getColor(u.$9P) || this.getDefault(u.$9P),
								F = this.getColor(u.$8P) || this.getDefault(u.$8P);
							U.push({ settings: { foreground: R(z), background: R(F) } });
							let x = !1;
							this.h.forEach(H),
								this.j.forEach(H),
								x || T[this.type].forEach(H),
								(this.u = U);
						}
						return this.u;
					}
					getColor(U, z) {
						const F = this.m[U];
						if (F instanceof w.$UL) return F;
						if (F === void 0) {
							const x = this.l[U];
							if (x !== void 0) return x;
						}
						if (z !== !1) return this.getDefault(U);
					}
					w(U, z, F, x = !0, H = {}) {
						const q = {
								foreground: void 0,
								bold: void 0,
								underline: void 0,
								strikethrough: void 0,
								italic: void 0,
							},
							V = {
								foreground: -1,
								bold: -1,
								underline: -1,
								strikethrough: -1,
								italic: -1,
							};
						function G(W, X, Y) {
							X.foreground &&
								V.foreground <= W &&
								((V.foreground = W),
								(q.foreground = X.foreground),
								(H.foreground = Y));
							for (const ie of [
								"bold",
								"underline",
								"strikethrough",
								"italic",
							]) {
								const ne = ie,
									ee = X[ne];
								ee !== void 0 &&
									V[ne] <= W &&
									((V[ne] = W), (q[ne] = ee), (H[ne] = Y));
							}
						}
						function K(W) {
							const X = W.selector.match(U, z, F);
							X >= 0 && G(X, W.style, W);
						}
						this.n.forEach(K), this.o.forEach(K);
						let J = !1;
						for (const W in V) {
							const X = W;
							V[X] === -1 ? (J = !0) : (V[X] = Number.MAX_VALUE);
						}
						if (J)
							for (const W of l.getTokenStylingDefaultRules()) {
								const X = W.selector.match(U, z, F);
								if (X >= 0) {
									let Y;
									if (
										(W.defaults.scopesToProbe &&
											((Y = this.resolveScopes(W.defaults.scopesToProbe)),
											Y && G(X, Y, W.defaults.scopesToProbe)),
										!Y && x !== !1)
									) {
										const ie = W.defaults[this.type];
										(Y = this.resolveTokenStyleValue(ie)), Y && G(X, Y, ie);
									}
								}
							}
						return g.$lmc.fromData(q);
					}
					resolveTokenStyleValue(U) {
						if (U !== void 0) {
							if (typeof U == "string") {
								const {
									type: z,
									modifiers: F,
									language: x,
								} = (0, g.$mmc)(U, "");
								return this.w(z, F, x);
							} else if (typeof U == "object") return U;
						}
					}
					getTokenColorIndex() {
						if (!this.v) {
							const U = new A();
							this.tokenColors.forEach((z) => {
								U.add(z.settings.foreground), U.add(z.settings.background);
							}),
								this.n.forEach((z) => U.add(z.style.foreground)),
								l.getTokenStylingDefaultRules().forEach((z) => {
									const F = z.defaults[this.type];
									F && typeof F == "object" && U.add(F.foreground);
								}),
								this.o.forEach((z) => U.add(z.style.foreground)),
								(this.v = U);
						}
						return this.v;
					}
					get tokenColorMap() {
						return this.getTokenColorIndex().asArray();
					}
					getTokenStyleMetadata(U, z, F, x = !0, H = {}) {
						const { type: q, language: V } = (0, g.$mmc)(U, F),
							G = this.w(q, z, V, x, H);
						if (G)
							return {
								foreground: this.getTokenColorIndex().get(G.foreground),
								bold: G.bold,
								underline: G.underline,
								strikethrough: G.strikethrough,
								italic: G.italic,
							};
					}
					getTokenStylingRuleScope(U) {
						if (this.o.indexOf(U) !== -1) return "setting";
						if (this.n.indexOf(U) !== -1) return "theme";
					}
					getDefault(U) {
						return s.resolveDefaultColor(U, this);
					}
					resolveScopes(U, z) {
						this.q || (this.q = this.h.map(D)),
							this.t || (this.t = this.j.map(D));
						for (const F of U) {
							let J = function (W, X) {
									for (let Y = 0; Y < W.length; Y++) {
										const ie = W[Y](F);
										if (ie >= 0) {
											const ne = X[Y],
												ee = X[Y].settings;
											ie >= q &&
												ee.foreground &&
												((x = ee.foreground), (q = ie), (K = ne)),
												ie >= V &&
													m.$lg(ee.fontStyle) &&
													((H = ee.fontStyle), (V = ie), (G = ne));
										}
									}
								},
								x,
								H,
								q = -1,
								V = -1,
								G,
								K;
							if (
								(J(this.q, this.h),
								J(this.t, this.j),
								x !== void 0 || H !== void 0)
							)
								return (
									z &&
										((z.foreground = K),
										(z.bold = z.italic = z.underline = z.strikethrough = G),
										(z.scope = F)),
									g.$lmc.fromSettings(x, H)
								);
						}
					}
					defines(U) {
						const z = this.m[U];
						return z instanceof w.$UL
							? !0
							: z === void 0 && this.l.hasOwnProperty(U);
					}
					setCustomizations(U) {
						this.setCustomColors(U.colorCustomizations),
							this.setCustomTokenColors(U.tokenColorCustomizations),
							this.setCustomSemanticTokenColors(
								U.semanticTokenColorCustomizations,
							);
					}
					setCustomColors(U) {
						(this.m = {}), this.x(U);
						const z = this.getThemeSpecificColors(U);
						m.$ng(z) && this.x(z),
							(this.v = void 0),
							(this.u = void 0),
							(this.t = void 0);
					}
					x(U) {
						for (const z in U) {
							const F = U[z];
							F === u.$vP
								? (this.m[z] = u.$vP)
								: typeof F == "string" && (this.m[z] = w.$UL.fromHex(F));
						}
					}
					setCustomTokenColors(U) {
						(this.j = []), (this.g = void 0), this.z(U);
						const z = this.getThemeSpecificColors(U);
						m.$ng(z) && this.z(z),
							(this.v = void 0),
							(this.u = void 0),
							(this.t = void 0);
					}
					setCustomSemanticTokenColors(U) {
						if (((this.o = []), (this.c = void 0), U)) {
							(this.c = U.enabled), U.rules && this.y(U.rules);
							const z = this.getThemeSpecificColors(U);
							m.$ng(z) &&
								(z.enabled !== void 0 && (this.c = z.enabled),
								z.rules && this.y(z.rules));
						}
						(this.v = void 0), (this.u = void 0);
					}
					isThemeScope(U) {
						return U.charAt(0) === E.$wRb && U.charAt(U.length - 1) === E.$xRb;
					}
					isThemeScopeMatch(U) {
						const z = U.charAt(0),
							F = U.charAt(U.length - 1),
							x = U.slice(0, -1),
							H = U.slice(1, -1),
							q = U.slice(1);
						return (
							U === this.settingsId ||
							(this.settingsId.includes(H) && z === E.$yRb && F === E.$yRb) ||
							(this.settingsId.startsWith(x) && F === E.$yRb) ||
							(this.settingsId.endsWith(q) && z === E.$yRb)
						);
					}
					getThemeSpecificColors(U) {
						let z;
						for (const F in U) {
							const x = U[F];
							if (
								this.isThemeScope(F) &&
								x instanceof Object &&
								!Array.isArray(x)
							) {
								const H = F.match(E.$zRb) || [];
								for (const q of H) {
									const V = q.substring(1, q.length - 1);
									if (this.isThemeScopeMatch(V)) {
										z || (z = {});
										const G = x;
										for (const K in G) {
											const J = z[K],
												W = G[K];
											Array.isArray(J) && Array.isArray(W)
												? (z[K] = J.concat(W))
												: W && (z[K] = W);
										}
									}
								}
							}
						}
						return z;
					}
					y(U) {
						for (const z in U)
							if (!this.isThemeScope(z))
								try {
									const F = M(z, U[z]);
									F && this.o.push(F);
								} catch {}
					}
					z(U) {
						for (const z in y) {
							const F = z,
								x = U[F];
							if (x) {
								const H = typeof x == "string" ? { foreground: x } : x,
									q = y[F];
								for (const V of q) this.j.push({ scope: V, settings: H });
							}
						}
						if (Array.isArray(U.textMateRules))
							for (const z of U.textMateRules)
								z.scope && z.settings && this.j.push(z);
						U.semanticHighlighting !== void 0 &&
							(this.g = U.semanticHighlighting);
					}
					ensureLoaded(U) {
						return this.isLoaded ? Promise.resolve(void 0) : this.B(U);
					}
					reload(U) {
						return this.B(U);
					}
					B(U) {
						if (!this.location) return Promise.resolve(void 0);
						(this.h = []), this.clearCaches();
						const z = {
							colors: {},
							textMateRules: [],
							semanticTokenRules: [],
							semanticHighlighting: !1,
						};
						return S(U, this.location, z).then((F) => {
							(this.isLoaded = !0),
								(this.n = z.semanticTokenRules),
								(this.l = z.colors),
								(this.h = z.textMateRules),
								(this.b = z.semanticHighlighting);
						});
					}
					clearCaches() {
						(this.v = void 0),
							(this.u = void 0),
							(this.q = void 0),
							(this.t = void 0);
					}
					toStorage(U) {
						const z = {};
						for (const x in this.l)
							z[x] = w.$UL.Format.CSS.formatHexA(this.l[x], !0);
						const F = JSON.stringify({
							id: this.id,
							label: this.label,
							settingsId: this.settingsId,
							themeTokenColors: this.h.map((x) => ({
								settings: x.settings,
								scope: x.scope,
							})),
							semanticTokenRules: this.n.map(g.SemanticTokenRule.toJSONObject),
							extensionData: E.ExtensionData.toJSONObject(this.extensionData),
							themeSemanticHighlighting: this.b,
							colorMap: z,
							watch: this.watch,
						});
						U.store(
							$.STORAGE_KEY,
							F,
							f.StorageScope.PROFILE,
							f.StorageTarget.USER,
						);
					}
					get baseTheme() {
						return this.classNames[0];
					}
					get classNames() {
						return this.id.split(" ");
					}
					get type() {
						switch (this.baseTheme) {
							case E.$sRb:
								return b.ColorScheme.LIGHT;
							case E.$uRb:
								return b.ColorScheme.HIGH_CONTRAST_DARK;
							case E.$vRb:
								return b.ColorScheme.HIGH_CONTRAST_LIGHT;
							default:
								return b.ColorScheme.DARK;
						}
					}
					static createUnloadedThemeForThemeType(U, z) {
						return $.createUnloadedTheme((0, a.$mP)(U), z);
					}
					static createUnloadedTheme(U, z) {
						const F = new $(U, "", "__" + U);
						if (((F.isLoaded = !1), (F.h = []), (F.watch = !1), z))
							for (const x in z) F.l[x] = w.$UL.fromHex(z[x]);
						return F;
					}
					static createLoadedEmptyTheme(U, z) {
						const F = new $(U, "", z);
						return (F.isLoaded = !0), (F.h = []), (F.watch = !1), F;
					}
					static fromStorageData(U) {
						const z = U.get($.STORAGE_KEY, f.StorageScope.PROFILE);
						if (z)
							try {
								const F = JSON.parse(z),
									x = new $("", "", "");
								for (const H in F)
									switch (H) {
										case "colorMap": {
											const q = F[H];
											for (const V in q) x.l[V] = w.$UL.fromHex(q[V]);
											break;
										}
										case "themeTokenColors":
										case "id":
										case "label":
										case "settingsId":
										case "watch":
										case "themeSemanticHighlighting":
											x[H] = F[H];
											break;
										case "semanticTokenRules": {
											const q = F[H];
											if (Array.isArray(q))
												for (const V of q) {
													const G = g.SemanticTokenRule.fromJSONObject(l, V);
													G && x.n.push(G);
												}
											break;
										}
										case "location":
											break;
										case "extensionData":
											x.extensionData = E.ExtensionData.fromJSONObject(
												F.extensionData,
											);
											break;
									}
								return !x.id || !x.settingsId ? void 0 : x;
							} catch {
								return;
							}
					}
					static fromExtensionTheme(U, z, F) {
						const x = U.uiTheme || "vs-dark",
							H = v(F.extensionId, U.path),
							q = `${x} ${H}`,
							V = U.label || (0, t.$sc)(U.path),
							G = U.id || V,
							K = new $(q, V, G);
						return (
							(K.description = U.description),
							(K.watch = U._watch === !0),
							(K.location = z),
							(K.extensionData = F),
							(K.isLoaded = !1),
							K
						);
					}
				}
				e.$9vc = $;
				function v(B, U) {
					U.startsWith("./") && (U = U.substr(2));
					let z = `${B}-${U}`;
					return (
						(z = z.replace(/[^_a-zA-Z0-9-]/g, "-")),
						z.charAt(0).match(/[0-9-]/) && (z = "_" + z),
						z
					);
				}
				async function S(B, U, z) {
					if (r.$lh(U) === ".json") {
						const F = await B.readExtensionResource(U),
							x = [],
							H = i.$do(F, x);
						if (x.length > 0)
							return Promise.reject(
								new Error(
									d.localize(
										12735,
										null,
										x.map((K) => (0, c.$br)(K.error)).join(", "),
									),
								),
							);
						if (i.$lo(H) !== "object")
							return Promise.reject(new Error(d.localize(12736, null)));
						if (
							(H.include && (await S(B, r.$nh(r.$mh(U), H.include), z)),
							Array.isArray(H.settings))
						)
							return (0, C.$Tvc)(H.settings, z), null;
						z.semanticHighlighting =
							z.semanticHighlighting || H.semanticHighlighting;
						const q = H.colors;
						if (q) {
							if (typeof q != "object")
								return Promise.reject(
									new Error(d.localize(12737, null, U.toString())),
								);
							for (const K in q) {
								const J = q[K];
								J === u.$vP
									? delete z.colors[K]
									: typeof J == "string" && (z.colors[K] = w.$UL.fromHex(q[K]));
							}
						}
						const V = H.tokenColors;
						if (V)
							if (Array.isArray(V)) z.textMateRules.push(...V);
							else if (typeof V == "string") await I(B, r.$nh(r.$mh(U), V), z);
							else
								return Promise.reject(
									new Error(d.localize(12738, null, U.toString())),
								);
						const G = H.semanticTokenColors;
						if (G && typeof G == "object")
							for (const K in G)
								try {
									const J = M(K, G[K]);
									J && z.semanticTokenRules.push(J);
								} catch {
									return Promise.reject(
										new Error(d.localize(12739, null, U.toString())),
									);
								}
					} else return I(B, U, z);
				}
				function I(B, U, z) {
					return B.readExtensionResource(U).then(
						(F) => {
							try {
								const H = (0, n.$Uvc)(F).settings;
								return Array.isArray(H)
									? ((0, C.$Tvc)(H, z), Promise.resolve(null))
									: Promise.reject(new Error(d.localize(12740, null)));
							} catch (x) {
								return Promise.reject(
									new Error(d.localize(12741, null, x.message)),
								);
							}
						},
						(F) =>
							Promise.reject(
								new Error(d.localize(12742, null, U.toString(), F.message)),
							),
					);
				}
				const T = {
						light: [
							{
								scope: "token.info-token",
								settings: { foreground: "#316bcd" },
							},
							{
								scope: "token.warn-token",
								settings: { foreground: "#cd9731" },
							},
							{
								scope: "token.error-token",
								settings: { foreground: "#cd3131" },
							},
							{
								scope: "token.debug-token",
								settings: { foreground: "#800080" },
							},
						],
						dark: [
							{
								scope: "token.info-token",
								settings: { foreground: "#6796e6" },
							},
							{
								scope: "token.warn-token",
								settings: { foreground: "#cd9731" },
							},
							{
								scope: "token.error-token",
								settings: { foreground: "#f44747" },
							},
							{
								scope: "token.debug-token",
								settings: { foreground: "#b267e6" },
							},
						],
						hcLight: [
							{
								scope: "token.info-token",
								settings: { foreground: "#316bcd" },
							},
							{
								scope: "token.warn-token",
								settings: { foreground: "#cd9731" },
							},
							{
								scope: "token.error-token",
								settings: { foreground: "#cd3131" },
							},
							{
								scope: "token.debug-token",
								settings: { foreground: "#800080" },
							},
						],
						hcDark: [
							{
								scope: "token.info-token",
								settings: { foreground: "#6796e6" },
							},
							{
								scope: "token.warn-token",
								settings: { foreground: "#008000" },
							},
							{
								scope: "token.error-token",
								settings: { foreground: "#FF0000" },
							},
							{
								scope: "token.debug-token",
								settings: { foreground: "#b267e6" },
							},
						],
					},
					P = (B) => -1;
				function k(B, U) {
					function z(H, q) {
						for (let V = q - 1; V >= 0; V--) if (L(H, B[V])) return V;
						return -1;
					}
					if (U.length < B.length) return -1;
					let F = U.length - 1,
						x = z(U[F--], B.length);
					if (x >= 0) {
						const H = (x + 1) * 65536 + B[x].length;
						for (; F >= 0; ) if (((x = z(U[F--], x)), x === -1)) return -1;
						return H;
					}
					return -1;
				}
				function L(B, U) {
					if (!B) return !1;
					if (B === U) return !0;
					const z = U.length;
					return B.length > z && B.substr(0, z) === U && B[z] === ".";
				}
				function D(B) {
					const U = B.scope;
					if (!U || !B.settings) return P;
					const z = [];
					if (Array.isArray(U)) for (const F of U) (0, p.$Vvc)(F, k, z);
					else (0, p.$Vvc)(U, k, z);
					return z.length === 0
						? P
						: (F) => {
								let x = z[0].matcher(F);
								for (let H = 1; H < z.length; H++)
									x = Math.max(x, z[H].matcher(F));
								return x;
							};
				}
				function M(B, U) {
					const z = l.parseTokenSelector(B);
					let F;
					if (
						(typeof U == "string"
							? (F = g.$lmc.fromSettings(U, void 0))
							: N(U) &&
								(F = g.$lmc.fromSettings(
									U.foreground,
									U.fontStyle,
									U.bold,
									U.underline,
									U.strikethrough,
									U.italic,
								)),
						F)
					)
						return { selector: z, style: F };
				}
				function N(B) {
					return (
						B &&
						(m.$lg(B.foreground) ||
							m.$lg(B.fontStyle) ||
							m.$rg(B.italic) ||
							m.$rg(B.underline) ||
							m.$rg(B.strikethrough) ||
							m.$rg(B.bold))
					);
				}
				class A {
					constructor() {
						(this.b = 0), (this.c = []), (this.g = Object.create(null));
					}
					add(U) {
						if (((U = R(U)), U === void 0)) return 0;
						let z = this.g[U];
						return z || ((z = ++this.b), (this.g[U] = z), (this.c[z] = U), z);
					}
					get(U) {
						if (((U = R(U)), U === void 0)) return 0;
						const z = this.g[U];
						return z || (console.log(`Color ${U} not in index.`), 0);
					}
					asArray() {
						return this.c.slice(0);
					}
				}
				function R(B) {
					if (!B) return;
					typeof B != "string" && (B = w.$UL.Format.CSS.formatHexA(B, !0));
					const U = B.length;
					if (
						B.charCodeAt(0) !== o.CharCode.Hash ||
						(U !== 4 && U !== 5 && U !== 7 && U !== 9)
					)
						return;
					const z = [o.CharCode.Hash];
					for (let F = 1; F < U; F++) {
						const x = O(B.charCodeAt(F));
						if (!x) return;
						z.push(x), (U === 4 || U === 5) && z.push(x);
					}
					return (
						z.length === 9 &&
							z[7] === o.CharCode.F &&
							z[8] === o.CharCode.F &&
							(z.length = 7),
						String.fromCharCode(...z)
					);
				}
				function O(B) {
					return (B >= o.CharCode.Digit0 && B <= o.CharCode.Digit9) ||
						(B >= o.CharCode.A && B <= o.CharCode.F)
						? B
						: B >= o.CharCode.a && B <= o.CharCode.f
							? B - o.CharCode.a + o.CharCode.A
							: 0;
				}
			},
		),
		define(
			de[1891],
			he([1, 0, 4, 28, 30, 81, 1321, 51, 778, 333, 10, 12, 212]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$8vc = e.$4vc = e.$2vc = void 0),
					(e.$3vc = y),
					(e.$5vc = H),
					(e.$6vc = q),
					(e.$7vc = V),
					(t = mt(t)),
					(i = mt(i));
				const c = "Anysphere",
					n = "Anysphere",
					g = "Default High Contrast",
					p = "Default High Contrast Light",
					o = "vs-seti";
				e.$2vc = "Default";
				const f = w.$Io.as(E.$No.Configuration),
					b = [],
					s = [],
					l = [];
				function y(J) {
					return `\`#${J}#\``;
				}
				e.$4vc = "colorThemeConfiguration";
				const $ = {
						type: "string",
						markdownDescription: t.localize(
							12816,
							null,
							y(r.ThemeSettings.DETECT_COLOR_SCHEME),
						),
						default: a.$r ? n : c,
						tags: [e.$4vc],
						enum: b,
						enumDescriptions: l,
						enumItemLabels: s,
						errorMessage: t.localize(12817, null),
					},
					v = {
						type: "string",
						markdownDescription: t.localize(
							12818,
							null,
							y(r.ThemeSettings.DETECT_COLOR_SCHEME),
						),
						default: c,
						tags: [e.$4vc],
						enum: b,
						enumDescriptions: l,
						enumItemLabels: s,
						errorMessage: t.localize(12819, null),
					},
					S = {
						type: "string",
						markdownDescription: t.localize(
							12820,
							null,
							y(r.ThemeSettings.DETECT_COLOR_SCHEME),
						),
						default: n,
						tags: [e.$4vc],
						enum: b,
						enumDescriptions: l,
						enumItemLabels: s,
						errorMessage: t.localize(12821, null),
					},
					I = {
						type: "string",
						markdownDescription: t.localize(
							12822,
							null,
							y(r.ThemeSettings.DETECT_HC),
						),
						default: g,
						tags: [e.$4vc],
						enum: b,
						enumDescriptions: l,
						enumItemLabels: s,
						errorMessage: t.localize(12823, null),
					},
					T = {
						type: "string",
						markdownDescription: t.localize(
							12824,
							null,
							y(r.ThemeSettings.DETECT_HC),
						),
						default: p,
						tags: [e.$4vc],
						enum: b,
						enumDescriptions: l,
						enumItemLabels: s,
						errorMessage: t.localize(12825, null),
					},
					P = {
						type: "boolean",
						markdownDescription: t.localize(
							12826,
							null,
							y(r.ThemeSettings.PREFERRED_DARK_THEME),
							y(r.ThemeSettings.PREFERRED_LIGHT_THEME),
						),
						default: !1,
						tags: [e.$4vc],
					},
					k = {
						type: "object",
						description: t.localize(12827, null),
						allOf: [{ $ref: d.$HP }],
						default: {},
						defaultSnippets: [{ body: {} }],
					},
					L = {
						type: ["string", "null"],
						default: o,
						description: t.localize(12828, null),
						enum: [null],
						enumItemLabels: [t.localize(12829, null)],
						enumDescriptions: [t.localize(12830, null)],
						errorMessage: t.localize(12831, null),
					},
					D = {
						type: ["string", "null"],
						default: r.ThemeSettingDefaults.PRODUCT_ICON_THEME,
						description: t.localize(12832, null),
						enum: [r.ThemeSettingDefaults.PRODUCT_ICON_THEME],
						enumItemLabels: [t.localize(12833, null)],
						enumDescriptions: [t.localize(12834, null)],
						errorMessage: t.localize(12835, null),
					},
					M = {
						type: "boolean",
						default: !0,
						markdownDescription: t.localize(
							12836,
							null,
							y(r.ThemeSettings.PREFERRED_HC_DARK_THEME),
							y(r.ThemeSettings.PREFERRED_HC_LIGHT_THEME),
						),
						scope: E.ConfigurationScope.APPLICATION,
						tags: [e.$4vc],
					},
					N = {
						id: "workbench",
						order: 7.1,
						type: "object",
						properties: {
							[r.ThemeSettings.COLOR_THEME]: $,
							[r.ThemeSettings.PREFERRED_DARK_THEME]: v,
							[r.ThemeSettings.PREFERRED_LIGHT_THEME]: S,
							[r.ThemeSettings.PREFERRED_HC_DARK_THEME]: I,
							[r.ThemeSettings.PREFERRED_HC_LIGHT_THEME]: T,
							[r.ThemeSettings.FILE_ICON_THEME]: L,
							[r.ThemeSettings.COLOR_CUSTOMIZATIONS]: k,
							[r.ThemeSettings.PRODUCT_ICON_THEME]: D,
						},
					};
				f.registerConfiguration(N);
				const A = {
					id: "window",
					order: 8.1,
					type: "object",
					properties: {
						[r.ThemeSettings.DETECT_HC]: M,
						[r.ThemeSettings.DETECT_COLOR_SCHEME]: P,
					},
				};
				f.registerConfiguration(A);
				function R(J) {
					return { description: J, $ref: C.$Xvc };
				}
				const O = "^\\[[^\\]]*(\\]\\s*\\[[^\\]]*)*\\]$",
					B = {
						type: "object",
						properties: {
							comments: R(t.localize(12837, null)),
							strings: R(t.localize(12838, null)),
							keywords: R(t.localize(12839, null)),
							numbers: R(t.localize(12840, null)),
							types: R(t.localize(12841, null)),
							functions: R(t.localize(12842, null)),
							variables: R(t.localize(12843, null)),
							textMateRules: {
								description: t.localize(12844, null),
								$ref: C.$Wvc,
							},
							semanticHighlighting: {
								description: t.localize(12845, null),
								deprecationMessage: t.localize(12846, null),
								markdownDeprecationMessage: t.localize(
									12847,
									null,
									y("editor.semanticTokenColorCustomizations"),
								),
								type: "boolean",
							},
						},
						additionalProperties: !1,
					},
					U = {
						description: t.localize(12848, null),
						default: {},
						allOf: [{ ...B, patternProperties: { "^\\[": {} } }],
					},
					z = {
						type: "object",
						properties: {
							enabled: {
								type: "boolean",
								description: t.localize(12849, null),
								suggestSortText: "0_enabled",
							},
							rules: {
								$ref: m.$omc,
								description: t.localize(12850, null),
								suggestSortText: "0_rules",
							},
						},
						additionalProperties: !1,
					},
					F = {
						description: t.localize(12851, null),
						default: {},
						allOf: [{ ...z, patternProperties: { "^\\[": {} } }],
					},
					x = {
						id: "editor",
						order: 7.2,
						type: "object",
						properties: {
							[r.ThemeSettings.TOKEN_COLOR_CUSTOMIZATIONS]: U,
							[r.ThemeSettings.SEMANTIC_TOKEN_COLOR_CUSTOMIZATIONS]: F,
						},
					};
				f.registerConfiguration(x);
				function H(J) {
					J.sort((ee, _) => ee.label.localeCompare(_.label)),
						b.splice(0, b.length, ...J.map((ee) => ee.settingsId)),
						l.splice(0, l.length, ...J.map((ee) => ee.description || "")),
						s.splice(0, s.length, ...J.map((ee) => ee.label || ""));
					const W = { properties: {} },
						X = { properties: {} },
						Y = { properties: {} },
						ie = { $ref: d.$HP, additionalProperties: !1 },
						ne = { properties: B.properties, additionalProperties: !1 };
					for (const ee of J) {
						const _ = `[${ee.settingsId}]`;
						(W.properties[_] = ie),
							(X.properties[_] = ne),
							(Y.properties[_] = z);
					}
					(W.patternProperties = { [O]: ie }),
						(X.patternProperties = { [O]: ne }),
						(Y.patternProperties = { [O]: z }),
						(k.allOf[1] = W),
						(U.allOf[1] = X),
						(F.allOf[1] = Y),
						f.notifyConfigurationSchemaUpdated(N, x);
				}
				function q(J) {
					L.enum.splice(1, Number.MAX_VALUE, ...J.map((W) => W.settingsId)),
						L.enumItemLabels.splice(
							1,
							Number.MAX_VALUE,
							...J.map((W) => W.label),
						),
						L.enumDescriptions.splice(
							1,
							Number.MAX_VALUE,
							...J.map((W) => W.description || ""),
						),
						f.notifyConfigurationSchemaUpdated(N);
				}
				function V(J) {
					D.enum.splice(1, Number.MAX_VALUE, ...J.map((W) => W.settingsId)),
						D.enumItemLabels.splice(
							1,
							Number.MAX_VALUE,
							...J.map((W) => W.label),
						),
						D.enumDescriptions.splice(
							1,
							Number.MAX_VALUE,
							...J.map((W) => W.description || ""),
						),
						f.notifyConfigurationSchemaUpdated(N);
				}
				const G = {
					[h.ColorScheme.DARK]: r.ThemeSettings.PREFERRED_DARK_THEME,
					[h.ColorScheme.LIGHT]: r.ThemeSettings.PREFERRED_LIGHT_THEME,
					[h.ColorScheme.HIGH_CONTRAST_DARK]:
						r.ThemeSettings.PREFERRED_HC_DARK_THEME,
					[h.ColorScheme.HIGH_CONTRAST_LIGHT]:
						r.ThemeSettings.PREFERRED_HC_LIGHT_THEME,
				};
				class K {
					constructor(W, X) {
						(this.c = W), (this.d = X);
					}
					get colorTheme() {
						return this.c.getValue(this.getColorThemeSettingId());
					}
					get fileIconTheme() {
						return this.c.getValue(r.ThemeSettings.FILE_ICON_THEME);
					}
					get productIconTheme() {
						return this.c.getValue(r.ThemeSettings.PRODUCT_ICON_THEME);
					}
					get colorCustomizations() {
						return this.c.getValue(r.ThemeSettings.COLOR_CUSTOMIZATIONS) || {};
					}
					get tokenColorCustomizations() {
						return (
							this.c.getValue(r.ThemeSettings.TOKEN_COLOR_CUSTOMIZATIONS) || {}
						);
					}
					get semanticTokenColorCustomizations() {
						return this.c.getValue(
							r.ThemeSettings.SEMANTIC_TOKEN_COLOR_CUSTOMIZATIONS,
						);
					}
					getPreferredColorScheme() {
						if (
							this.c.getValue(r.ThemeSettings.DETECT_HC) &&
							this.d.highContrast
						)
							return this.d.dark
								? h.ColorScheme.HIGH_CONTRAST_DARK
								: h.ColorScheme.HIGH_CONTRAST_LIGHT;
						if (this.c.getValue(r.ThemeSettings.DETECT_COLOR_SCHEME))
							return this.d.dark ? h.ColorScheme.DARK : h.ColorScheme.LIGHT;
					}
					isDetectingColorScheme() {
						return this.c.getValue(r.ThemeSettings.DETECT_COLOR_SCHEME);
					}
					getColorThemeSettingId() {
						const W = this.getPreferredColorScheme();
						return W ? G[W] : r.ThemeSettings.COLOR_THEME;
					}
					async setColorTheme(W, X) {
						return (
							await this.e(this.getColorThemeSettingId(), W.settingsId, X), W
						);
					}
					async setFileIconTheme(W, X) {
						return (
							await this.e(r.ThemeSettings.FILE_ICON_THEME, W.settingsId, X), W
						);
					}
					async setProductIconTheme(W, X) {
						return (
							await this.e(r.ThemeSettings.PRODUCT_ICON_THEME, W.settingsId, X),
							W
						);
					}
					isDefaultColorTheme() {
						const W = this.c.inspect(this.getColorThemeSettingId());
						return W && W.default?.value === W.value;
					}
					findAutoConfigurationTarget(W) {
						const X = this.c.inspect(W);
						if (i.$sg(X.workspaceFolderValue))
							if (i.$sg(X.workspaceValue)) {
								if (!i.$sg(X.userRemote))
									return u.ConfigurationTarget.USER_REMOTE;
							} else return u.ConfigurationTarget.WORKSPACE;
						else return u.ConfigurationTarget.WORKSPACE_FOLDER;
						return u.ConfigurationTarget.USER;
					}
					async e(W, X, Y) {
						if (Y === void 0 || Y === "preview") return;
						const ie = this.c.inspect(W);
						if (Y === "auto") return this.c.updateValue(W, X);
						if (Y === u.ConfigurationTarget.USER) {
							if (X === ie.userValue) return Promise.resolve(void 0);
							if (X === ie.defaultValue) {
								if (i.$sg(ie.userValue)) return Promise.resolve(void 0);
								X = void 0;
							}
						} else if (
							(Y === u.ConfigurationTarget.WORKSPACE ||
								Y === u.ConfigurationTarget.WORKSPACE_FOLDER ||
								Y === u.ConfigurationTarget.USER_REMOTE) &&
							X === ie.value
						)
							return Promise.resolve(void 0);
						return this.c.updateValue(W, X, Y);
					}
				}
				e.$8vc = K;
			},
		),
		define(
			de[3728],
			he([1, 0, 4, 28, 19, 175, 333, 6, 3, 244, 94, 30, 102]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jwc = void 0),
					(e.$gwc = c),
					(e.$hwc = n),
					(e.$iwc = g),
					(t = mt(t)),
					(i = mt(i)),
					(w = mt(w));
				function c() {
					return E.$n2.registerExtensionPoint({
						extensionPoint: "themes",
						jsonSchema: {
							description: t.localize(12852, null),
							type: "array",
							items: {
								type: "object",
								defaultSnippets: [
									{
										body: {
											label: "${1:label}",
											id: "${2:id}",
											uiTheme: C.$tRb,
											path: "./themes/${3:id}.tmTheme.",
										},
									},
								],
								properties: {
									id: { description: t.localize(12853, null), type: "string" },
									label: {
										description: t.localize(12854, null),
										type: "string",
									},
									uiTheme: {
										description: t.localize(12855, null),
										enum: [C.$sRb, C.$tRb, C.$uRb, C.$vRb],
									},
									path: {
										description: t.localize(12856, null),
										type: "string",
									},
								},
								required: ["path", "uiTheme"],
							},
						},
					});
				}
				function n() {
					return E.$n2.registerExtensionPoint({
						extensionPoint: "iconThemes",
						jsonSchema: {
							description: t.localize(12857, null),
							type: "array",
							items: {
								type: "object",
								defaultSnippets: [
									{
										body: {
											id: "${1:id}",
											label: "${2:label}",
											path: "./fileicons/${3:id}-icon-theme.json",
										},
									},
								],
								properties: {
									id: { description: t.localize(12858, null), type: "string" },
									label: {
										description: t.localize(12859, null),
										type: "string",
									},
									path: {
										description: t.localize(12860, null),
										type: "string",
									},
								},
								required: ["path", "id"],
							},
						},
					});
				}
				function g() {
					return E.$n2.registerExtensionPoint({
						extensionPoint: "productIconThemes",
						jsonSchema: {
							description: t.localize(12861, null),
							type: "array",
							items: {
								type: "object",
								defaultSnippets: [
									{
										body: {
											id: "${1:id}",
											label: "${2:label}",
											path: "./producticons/${3:id}-product-icon-theme.json",
										},
									},
								],
								properties: {
									id: { description: t.localize(12862, null), type: "string" },
									label: {
										description: t.localize(12863, null),
										type: "string",
									},
									path: {
										description: t.localize(12864, null),
										type: "string",
									},
								},
								required: ["path", "id"],
							},
						},
					});
				}
				class p extends m.$1c {
					constructor() {
						super(...arguments), (this.type = "markdown");
					}
					shouldRender(b) {
						return (
							!!b.contributes?.themes ||
							!!b.contributes?.iconThemes ||
							!!b.contributes?.productIconThemes
						);
					}
					render(b) {
						const s = new u.$cl();
						if (b.contributes?.themes) {
							s.appendMarkdown(`### ${t.localize(12865, null)}

`);
							for (const l of b.contributes.themes)
								s.appendMarkdown(`- ${l.label}
`);
						}
						if (b.contributes?.iconThemes) {
							s.appendMarkdown(`### ${t.localize(12866, null)}

`);
							for (const l of b.contributes.iconThemes)
								s.appendMarkdown(`- ${l.label}
`);
						}
						if (b.contributes?.productIconThemes) {
							s.appendMarkdown(`### ${t.localize(12867, null)}

`);
							for (const l of b.contributes.productIconThemes)
								s.appendMarkdown(`- ${l.label}
`);
						}
						return { data: s, dispose: () => {} };
					}
				}
				a.$Io
					.as(r.Extensions.ExtensionFeaturesRegistry)
					.registerExtensionFeature({
						id: "themes",
						label: t.localize(12868, null),
						access: { canToggle: !1 },
						renderer: new h.$Ji(p),
					});
				class o {
					constructor(b, s, l = !1, y = void 0) {
						(this.c = b),
							(this.d = s),
							(this.e = l),
							(this.f = y),
							(this.b = new d.$re()),
							(this.onDidChange = this.b.event),
							(this.a = []),
							this.g();
					}
					dispose() {
						this.c.setHandler(() => {});
					}
					g() {
						this.c.setHandler((b, s) => {
							const l = {},
								y = [];
							for (const v of this.a) l[v.id] = v;
							this.a.length = 0;
							for (const v of b) {
								const S = C.ExtensionData.fromName(
									v.description.publisher,
									v.description.name,
									v.description.isBuiltin,
								);
								this.h(
									S,
									v.description.extensionLocation,
									v.value,
									this.a,
									v.collector,
								);
							}
							for (const v of this.a) l[v.id] ? delete l[v.id] : y.push(v);
							const $ = Object.values(l);
							this.b.fire({ themes: this.a, added: y, removed: $ });
						});
					}
					h(b, s, l, y = [], $) {
						return Array.isArray(l)
							? (l.forEach((v) => {
									if (!v.path || !i.$lg(v.path)) {
										$?.error(
											t.localize(12870, null, this.c.name, String(v.path)),
										);
										return;
									}
									if (this.e && (!v.id || !i.$lg(v.id))) {
										$?.error(
											t.localize(12871, null, this.c.name, String(v.id)),
										);
										return;
									}
									const S = w.$nh(s, v.path);
									w.$hh(S, s) ||
										$?.warn(
											t.localize(12872, null, this.c.name, S.path, s.path),
										);
									const I = this.d(v, S, b);
									y.push(I);
								}),
								y)
							: ($?.error(t.localize(12869, null, this.c.name)), y);
					}
					findThemeById(b) {
						if (this.f && this.f.id === b) return this.f;
						const s = this.getThemes();
						for (const l of s) if (l.id === b) return l;
					}
					findThemeBySettingsId(b, s) {
						if (this.f && this.f.settingsId === b) return this.f;
						const l = this.getThemes();
						let y;
						for (const $ of l) {
							if ($.settingsId === b) return $;
							$.settingsId === s && (y = $);
						}
						return y;
					}
					findThemeByExtensionLocation(b) {
						return b
							? this.getThemes().filter(
									(s) => s.location && w.$hh(s.location, b),
								)
							: [];
					}
					getThemes() {
						return this.a;
					}
					getMarketplaceThemes(b, s, l) {
						const y = b?.contributes?.[this.c.name];
						return Array.isArray(y) ? this.h(l, s, y) : [];
					}
				}
				e.$jwc = o;
			},
		),
		define(
			de[3729],
			he([1, 0, 6, 110, 20, 3, 1888, 151, 21, 28]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				var u;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Idd = void 0);
				let a = class extends E.$1c {
					static {
						u = this;
					}
					static {
						this.STORAGE_KEY = "HostColorSchemeData";
					}
					constructor(c, n, g) {
						super(),
							(this.b = c),
							(this.c = g),
							(this.a = this.D(new t.$re())),
							(this.onDidChangeColorScheme = this.a.event),
							this.D(this.b.onDidChangeColorScheme((o) => this.g(o)));
						const p = this.f() ?? n.window.colorScheme;
						(this.dark = p.dark),
							(this.highContrast = p.highContrast),
							this.b.getOSColorScheme().then((o) => this.g(o));
					}
					f() {
						const c = this.c.get(u.STORAGE_KEY, m.StorageScope.APPLICATION);
						if (c)
							try {
								const n = JSON.parse(c);
								if (
									(0, r.$ng)(n) &&
									(0, r.$rg)(n.highContrast) &&
									(0, r.$rg)(n.dark)
								)
									return n;
							} catch {}
					}
					g({ highContrast: c, dark: n }) {
						(n !== this.dark || c !== this.highContrast) &&
							((this.dark = n),
							(this.highContrast = c),
							this.c.store(
								u.STORAGE_KEY,
								JSON.stringify({ highContrast: c, dark: n }),
								m.StorageScope.APPLICATION,
								m.StorageTarget.MACHINE,
							),
							this.a.fire());
					}
				};
				(e.$Idd = a),
					(e.$Idd = a = u = Ne([j(0, i.$y7c), j(1, d.$ucd), j(2, m.$lq)], a)),
					(0, w.$lK)(C.$1vc, a, w.InstantiationType.Delayed);
			},
		),
		define(
			de[3730],
			he([1, 0, 4, 30, 81, 333, 1891, 12]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					i.$Io
						.as(w.$No.Configuration)
						.registerConfiguration({
							properties: {
								[E.ThemeSettings.SYSTEM_COLOR_THEME]: {
									type: "string",
									enum: ["default", "auto", "light", "dark"],
									enumDescriptions: [
										(0, t.localize)(12897, null),
										(0, t.localize)(12898, null),
										(0, t.localize)(12899, null),
										(0, t.localize)(12900, null),
									],
									markdownDescription: (0, t.localize)(
										12901,
										null,
										(0, C.$3vc)(E.ThemeSettings.COLOR_THEME),
										(0, C.$3vc)(E.ThemeSettings.DETECT_COLOR_SCHEME),
									),
									default: "default",
									included: !d.$n,
									scope: w.ConfigurationScope.APPLICATION,
									tags: [C.$4vc],
								},
							},
						});
			},
		),
		define(
			de[520],
			he([
				1, 0, 240, 5, 25, 53, 415, 52, 18, 91, 32, 15, 96, 142, 60, 269, 12,
				540, 30, 117,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Znc = e.$Ync = e.$Xnc = void 0),
					(t = mt(t)),
					(e.$Xnc = (0, i.$Mi)("timerService"));
				class s {
					constructor() {
						this.a = [];
					}
					setMarks(v, S) {
						this.a.push([v, S]);
					}
					getDuration(v, S) {
						const I = this.b(v);
						if (!I) return 0;
						const T = this.b(S);
						return T ? T.startTime - I.startTime : 0;
					}
					getStartTime(v) {
						const S = this.b(v);
						return S ? S.startTime : -1;
					}
					b(v) {
						for (const [, S] of this.a)
							for (let I = S.length - 1; I >= 0; I--)
								if (S[I].name === v) return S[I];
					}
					getEntries() {
						return this.a.slice(0);
					}
				}
				let l = class {
					constructor(v, S, I, T, P, k, L, D, M) {
						(this.f = v),
							(this.g = S),
							(this.h = I),
							(this.j = T),
							(this.k = P),
							(this.l = k),
							(this.m = L),
							(this.o = D),
							(this.a = new a.$Lh()),
							(this.b = new s()),
							(this.c = Math.random() < 0.05),
							Promise.all([
								this.h.whenInstalledExtensionsRegistered(),
								v.when(d.LifecyclePhase.Restored),
								M.whenRestored,
								Promise.all(
									Array.from(f.$Io.as(b.$WJ.Backend).backends.values()).map(
										(N) => N.whenReady,
									),
								),
							])
								.then(
									() => (
										this.setPerformanceMarks("renderer", t.getMarks()), this.s()
									),
								)
								.then((N) => {
									(this.d = N), this.p(N), this.a.open();
								}),
							(this.perfBaseline = this.a
								.wait()
								.then(() => this.f.when(d.LifecyclePhase.Eventually))
								.then(() => (0, a.$Nh)(this.d.timers.ellapsedRequire))
								.then(() => {
									const N = function () {
											let B = !1;
											function U(x) {
												return B
													? 0
													: (performance.now() - z >= 1e3 && (B = !0),
														x <= 2 ? x : U(x - 1) + U(x - 2));
											}
											const z = performance.now();
											U(24);
											const F = Math.round(performance.now() - z);
											self.postMessage({ value: B ? -1 : F });
										}.toString(),
										A = new Blob([`(${N})();`], {
											type: "application/javascript",
										}),
										R = URL.createObjectURL(A),
										O = (0, o.$gjb)(R, { name: "perfBaseline" });
									return new Promise((B) => {
										O.onmessage = (U) => B(U.data.value);
									}).finally(() => {
										O.terminate(), URL.revokeObjectURL(R);
									});
								}));
					}
					whenReady() {
						return this.a.wait();
					}
					get startupMetrics() {
						if (!this.d)
							throw new Error(
								"illegal state, MUST NOT access startupMetrics before whenReady has resolved",
							);
						return this.d;
					}
					setPerformanceMarks(v, S) {
						const I = S.filter((T) => T.name.startsWith("code/"));
						this.b.setMarks(v, I), this.r(v, I);
					}
					getPerformanceMarks() {
						return this.b.getEntries();
					}
					getDuration(v, S) {
						return this.b.getDuration(v, S);
					}
					getStartTime(v) {
						return this.b.getStartTime(v);
					}
					p(v) {
						this.o.publicLog("startupTimeVaried", v);
					}
					q() {
						return this.c;
					}
					r(v, S) {
						if (this.q())
							for (const I of S)
								this.o.publicLog2("startup.timer.mark", {
									source: v,
									name: new g.$Qp(I.name),
									startTime: I.startTime,
								});
					}
					async s() {
						const v = this.t();
						let S;
						p.$r
							? (S = "code/timeOrigin")
							: (S = v ? "code/didStartMain" : "code/willOpenNewWindow");
						const I = this.k.getActivePaneComposite(
								n.ViewContainerLocation.Sidebar,
							),
							T = this.k.getActivePaneComposite(n.ViewContainerLocation.Panel),
							P = {
								version: 2,
								ellapsed: this.b.getDuration(S, "code/didStartWorkbench"),
								isLatestVersion: !!(await this.j.isLatestVersion()),
								didUseCachedData: this.u(),
								windowKind: this.f.startupKind,
								windowCount: await this.v(),
								viewletId: I?.getId(),
								editorIds: this.l.visibleEditors.map((k) => k.typeId),
								panelId: T ? T.getId() : void 0,
								timers: {
									ellapsedAppReady: v
										? this.b.getDuration(
												"code/didStartMain",
												"code/mainAppReady",
											)
										: void 0,
									ellapsedNlsGeneration: v
										? this.b.getDuration(
												"code/willGenerateNls",
												"code/didGenerateNls",
											)
										: void 0,
									ellapsedLoadMainBundle: v
										? this.b.getDuration(
												"code/willLoadMainBundle",
												"code/didLoadMainBundle",
											)
										: void 0,
									ellapsedCrashReporter: v
										? this.b.getDuration(
												"code/willStartCrashReporter",
												"code/didStartCrashReporter",
											)
										: void 0,
									ellapsedMainServer: v
										? this.b.getDuration(
												"code/willStartMainServer",
												"code/didStartMainServer",
											)
										: void 0,
									ellapsedWindowCreate: v
										? this.b.getDuration(
												"code/willCreateCodeWindow",
												"code/didCreateCodeWindow",
											)
										: void 0,
									ellapsedWindowRestoreState: v
										? this.b.getDuration(
												"code/willRestoreCodeWindowState",
												"code/didRestoreCodeWindowState",
											)
										: void 0,
									ellapsedBrowserWindowCreate: v
										? this.b.getDuration(
												"code/willCreateCodeBrowserWindow",
												"code/didCreateCodeBrowserWindow",
											)
										: void 0,
									ellapsedWindowMaximize: v
										? this.b.getDuration(
												"code/willMaximizeCodeWindow",
												"code/didMaximizeCodeWindow",
											)
										: void 0,
									ellapsedWindowLoad: v
										? this.b.getDuration(
												"code/mainAppReady",
												"code/willOpenNewWindow",
											)
										: void 0,
									ellapsedWindowLoadToRequire: this.b.getDuration(
										"code/willOpenNewWindow",
										"code/willLoadWorkbenchMain",
									),
									ellapsedRequire: this.b.getDuration(
										"code/willLoadWorkbenchMain",
										"code/didLoadWorkbenchMain",
									),
									ellapsedWaitForWindowConfig: this.b.getDuration(
										"code/willWaitForWindowConfig",
										"code/didWaitForWindowConfig",
									),
									ellapsedStorageInit: this.b.getDuration(
										"code/willInitStorage",
										"code/didInitStorage",
									),
									ellapsedSharedProcesConnected: this.b.getDuration(
										"code/willConnectSharedProcess",
										"code/didConnectSharedProcess",
									),
									ellapsedWorkspaceServiceInit: this.b.getDuration(
										"code/willInitWorkspaceService",
										"code/didInitWorkspaceService",
									),
									ellapsedRequiredUserDataInit: this.b.getDuration(
										"code/willInitRequiredUserData",
										"code/didInitRequiredUserData",
									),
									ellapsedOtherUserDataInit: this.b.getDuration(
										"code/willInitOtherUserData",
										"code/didInitOtherUserData",
									),
									ellapsedExtensions: this.b.getDuration(
										"code/willLoadExtensions",
										"code/didLoadExtensions",
									),
									ellapsedEditorRestore: this.b.getDuration(
										"code/willRestoreEditors",
										"code/didRestoreEditors",
									),
									ellapsedViewletRestore: this.b.getDuration(
										"code/willRestoreViewlet",
										"code/didRestoreViewlet",
									),
									ellapsedPanelRestore: this.b.getDuration(
										"code/willRestorePanel",
										"code/didRestorePanel",
									),
									ellapsedWorkbenchContributions: this.b.getDuration(
										"code/willCreateWorkbenchContributions/1",
										"code/didCreateWorkbenchContributions/2",
									),
									ellapsedWorkbench: this.b.getDuration(
										"code/willStartWorkbench",
										"code/didStartWorkbench",
									),
									ellapsedExtensionsReady: this.b.getDuration(
										S,
										"code/didLoadExtensions",
									),
									ellapsedRenderer: this.b.getDuration(
										"code/didStartRenderer",
										"code/didStartWorkbench",
									),
								},
								platform: void 0,
								release: void 0,
								arch: void 0,
								totalmem: void 0,
								freemem: void 0,
								meminfo: void 0,
								cpus: void 0,
								loadavg: void 0,
								isVMLikelyhood: void 0,
								initialStartup: v,
								hasAccessibilitySupport: this.m.isScreenReaderOptimized(),
								emptyWorkbench:
									this.g.getWorkbenchState() === w.WorkbenchState.EMPTY,
							};
						return await this.w(P), P;
					}
				};
				(e.$Ync = l),
					(e.$Ync = l =
						Ne(
							[
								j(0, d.$n6),
								j(1, w.$Vi),
								j(2, E.$q2),
								j(3, C.$_rb),
								j(4, c.$6Sb),
								j(5, m.$IY),
								j(6, r.$XK),
								j(7, u.$km),
								j(8, h.$mEb),
							],
							l,
						));
				class y extends l {
					t() {
						return !1;
					}
					u() {
						return !1;
					}
					async v() {
						return 1;
					}
					async w(v) {
						(v.isVMLikelyhood = 0),
							(v.isARM64Emulated = !1),
							(v.platform = navigator.userAgent),
							(v.release = navigator.appVersion);
					}
				}
				e.$Znc = y;
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[3731],
		he([
			1, 0, 50, 33, 29, 23, 111, 9, 4, 31, 154, 40, 211, 88, 141, 78, 157, 517,
			53, 101, 87, 520,
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
		) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$1nc = void 0),
				(C = xi(C));
			let y = class {
				constructor(P, k, L, D, M, N, A, R, O) {
					(this.d = k),
						(this.f = L),
						(this.g = D),
						(this.h = M),
						(this.j = N),
						(this.k = A),
						(this.l = R),
						(this.m = O),
						(this.a = P.extensionHostKind);
					const B = P;
					(this.c = B.internalExtensionService),
						B._setExtensionHostProxy(
							new $(P.getProxy(c.$mbb.ExtHostExtensionService)),
						),
						B._setAllMainProxyIdentifiers(
							Object.keys(c.$lbb).map((U) => c.$lbb[U]),
						);
				}
				dispose() {}
				$getExtension(P) {
					return this.d.getExtension(P);
				}
				$activateExtension(P, k) {
					return this.c._activateById(P, k);
				}
				async $onWillActivateExtension(P) {
					this.c._onWillActivateExtension(P);
				}
				$onDidActivateExtension(P, k, L, D, M) {
					this.c._onDidActivateExtension(P, k, L, D, M);
				}
				$onExtensionRuntimeError(P, k) {
					const L = (0, w.$7)(k);
					this.c._onExtensionRuntimeError(P, L),
						console.error(`[${P.value}]${L.message}`),
						console.error(L.stack);
				}
				async $onExtensionActivationError(P, k, L) {
					const D = (0, w.$7)(k);
					if ((this.c._onDidActivateExtensionError(P, D), L)) {
						const N = await this.d.getExtension(P.value);
						if (N) {
							const R = (await this.g.queryLocal()).find((O) =>
								(0, u.$7p)(O.identifier, { id: L.dependency }),
							);
							if (R?.local) {
								await this.o(N, R.local);
								return;
							} else {
								await this.p(N, L.dependency);
								return;
							}
						}
					}
					if (!this.m.isBuilt || this.m.isExtensionDevelopment) {
						this.f.error(D);
						return;
					}
					console.error(D.message);
				}
				async o(P, k) {
					const L = P.displayName || P.name;
					if (this.j.isEnabled(k))
						this.f.notify({
							severity: C.default.Error,
							message: (0, m.localize)(
								2540,
								null,
								L,
								k.manifest.displayName || k.manifest.name,
							),
							actions: {
								primary: [
									new t.$rj("reload", (0, m.localize)(2541, null), "", !0, () =>
										this.h.reload(),
									),
								],
							},
						});
					else {
						const D = this.j.getEnablementState(k);
						D === p.EnablementState.DisabledByVirtualWorkspace
							? this.f.notify({
									severity: C.default.Error,
									message: (0, m.localize)(
										2542,
										null,
										L,
										k.manifest.displayName || k.manifest.name,
									),
								})
							: D === p.EnablementState.DisabledByTrustRequirement
								? this.f.notify({
										severity: C.default.Error,
										message: (0, m.localize)(
											2543,
											null,
											L,
											k.manifest.displayName || k.manifest.name,
										),
										actions: {
											primary: [
												new t.$rj(
													"manageWorkspaceTrust",
													(0, m.localize)(2544, null),
													"",
													!0,
													() => this.l.executeCommand("workbench.trust.manage"),
												),
											],
										},
									})
								: this.j.canChangeEnablement(k)
									? this.f.notify({
											severity: C.default.Error,
											message: (0, m.localize)(
												2545,
												null,
												L,
												k.manifest.displayName || k.manifest.name,
											),
											actions: {
												primary: [
													new t.$rj(
														"enable",
														(0, m.localize)(2546, null),
														"",
														!0,
														() =>
															this.j
																.setEnablement(
																	[k],
																	D === p.EnablementState.DisabledGlobally
																		? p.EnablementState.EnabledGlobally
																		: p.EnablementState.EnabledWorkspace,
																)
																.then(
																	() => this.h.reload(),
																	(M) => this.f.error(M),
																),
													),
												],
											},
										})
									: this.f.notify({
											severity: C.default.Error,
											message: (0, m.localize)(
												2547,
												null,
												L,
												k.manifest.displayName || k.manifest.name,
											),
										});
					}
				}
				async p(P, k) {
					const L = P.displayName || P.name;
					let D = null;
					try {
						D = (
							await this.g.getExtensions([{ id: k }], i.CancellationToken.None)
						)[0];
					} catch {}
					D
						? this.f.notify({
								severity: C.default.Error,
								message: (0, m.localize)(
									2548,
									null,
									L,
									D.displayName,
									D.publisherDisplayName,
								),
								actions: {
									primary: [
										new t.$rj(
											"install",
											(0, m.localize)(2549, null),
											"",
											!0,
											() =>
												this.g.install(D).then(
													() => this.h.reload(),
													(M) => this.f.error(M),
												),
										),
									],
								},
							})
						: this.f.error((0, m.localize)(2550, null, L, k));
				}
				async $setPerformanceMarks(P) {
					this.a === o.ExtensionHostKind.LocalProcess
						? this.k.setPerformanceMarks("localExtHost", P)
						: this.a === o.ExtensionHostKind.LocalWebWorker
							? this.k.setPerformanceMarks("workerExtHost", P)
							: this.k.setPerformanceMarks("remoteExtHost", P);
				}
				async $asBrowserUri(P) {
					return E.$7g.uriToBrowserUri(d.URI.revive(P));
				}
			};
			(e.$1nc = y),
				(e.$1nc = y =
					Ne(
						[
							(0, b.$tmc)(c.$lbb.MainThreadExtensionService),
							j(1, f.$q2),
							j(2, a.$4N),
							j(3, n.$MQb),
							j(4, s.$asb),
							j(5, p.$IQb),
							j(6, l.$Xnc),
							j(7, r.$ek),
							j(8, g.$r8),
						],
						y,
					));
			class $ {
				constructor(P) {
					this.a = P;
				}
				async resolveAuthority(P, k) {
					return v(await this.a.$resolveAuthority(P, k));
				}
				async getCanonicalURI(P, k) {
					const L = await this.a.$getCanonicalURI(P, k);
					return L && d.URI.revive(L);
				}
				startExtensionHost(P) {
					return this.a.$startExtensionHost(P);
				}
				extensionTestsExecute() {
					return this.a.$extensionTestsExecute();
				}
				activateByEvent(P, k) {
					return this.a.$activateByEvent(P, k);
				}
				activate(P, k) {
					return this.a.$activate(P, k);
				}
				setRemoteEnvironment(P) {
					return this.a.$setRemoteEnvironment(P);
				}
				updateRemoteConnectionData(P) {
					return this.a.$updateRemoteConnectionData(P);
				}
				deltaExtensions(P) {
					return this.a.$deltaExtensions(P);
				}
				test_latency(P) {
					return this.a.$test_latency(P);
				}
				test_up(P) {
					return this.a.$test_up(P);
				}
				test_down(P) {
					return this.a.$test_down(P);
				}
			}
			function v(T) {
				return T.type === "ok"
					? {
							type: "ok",
							value: { ...T.value, authority: S(T.value.authority) },
						}
					: T;
			}
			function S(T) {
				return { ...T, connectTo: I(T.connectTo) };
			}
			function I(T) {
				return T.type === h.RemoteConnectionType.WebSocket
					? new h.$5l(T.host, T.port)
					: new h.$4l(T.id);
			}
		},
	),
		define(
			de[3732],
			he([
				1, 0, 15, 76, 33, 29, 23, 19, 387, 9, 47, 4, 10, 109, 22, 5, 34, 40,
				1651, 32, 985, 1806, 1295, 18, 151, 517, 53, 1823, 520,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$agd = void 0);
				let k = class {
					constructor(D, M, N, A, R, O, B, U, z, F, x, H) {
						(this.f = D),
							(this.g = M),
							(this.h = N),
							(this.i = A),
							(this.j = R),
							(this.k = O),
							(this.l = B),
							(this.m = U),
							(this.n = z),
							(this.o = F),
							(this.p = x),
							(this.a = new c.$Hn()),
							(this.d = -1),
							H.perfBaseline.then((q) => {
								q < 0 ||
									((this.d = q),
									(this.c = D.onDidChangeResponsiveChange(this.q, this)));
							});
					}
					dispose() {
						this.c?.dispose(), this.b?.dispose(!0);
					}
					async q(D) {
						if (D.extensionHostKind !== S.ExtensionHostKind.LocalProcess)
							return;
						const M = await D.getInspectListener(!0);
						if (M) {
							if (D.isResponsive && this.b)
								this.b.cancel(),
									this.i.info(
										"UNRESPONSIVE extension host: received responsive event and cancelling profiling session",
									);
							else if (!D.isResponsive && !this.b) {
								const N = new w.$Ce();
								this.b = N;
								let A;
								try {
									A = await this.l
										.createInstance(T.$$fd, M.host, M.port)
										.start();
								} catch {
									this.b = void 0;
									return;
								}
								this.i.info(
									"UNRESPONSIVE extension host: starting to profile NOW",
								);
								try {
									await (0, t.$Nh)(5e3, N.token);
								} catch {}
								try {
									this.r(await A.stop());
								} catch (R) {
									(0, E.$4)(R);
								} finally {
									this.b = void 0;
								}
							}
						}
					}
					async r(D) {
						if (
							(await this.f.whenInstalledExtensionsRegistered(),
							this.o.getValue("application.experimental.rendererProfiling"))
						) {
							const H = m.$Si.forUris();
							H.fill(this.f.extensions.map((q) => [q.extensionLocation, q])),
								await this.n.analyseBottomUp(
									D.data,
									(q) =>
										H.findSubstr(r.URI.parse(q))?.identifier.value ??
										"<<not-found>>",
									this.d,
									!1,
								);
						}
						const M = this.f.extensions
								.filter((H) => H.extensionLocation.scheme === C.Schemas.file)
								.map((H) => [H.extensionLocation, c.$Gn.toKey(H.identifier)]),
							N = await this.n.analyseByLocation(D.data, M);
						let A = 0,
							R = "",
							O = -1;
						for (const [H, q] of N) (A += q), q > O && ((O = q), (R = H));
						const B = O / (A / 100),
							U = await this.f.getExtension(R);
						if (!U) return;
						const z = (0, u.$9g)(),
							F = (0, d.$nh)(
								this.m.tmpDir,
								`exthost-${Math.random().toString(16).slice(2, 8)}.cpuprofile`,
							);
						if (
							(await this.p.writeFile(
								F,
								i.$Te.fromString(JSON.stringify(D.data)),
							),
							this.i.warn(
								`UNRESPONSIVE extension host: '${R}' took ${B}% of ${O / 1e3}ms, saved PROFILE here: '${F}'`,
							),
							this.h.publicLog2("exthostunresponsive", {
								sessionId: z,
								duration: A,
								data: N.map((H) => H[0]).flat(),
								id: c.$Gn.toKey(U.identifier),
							}),
							this.g.setUnresponsiveProfile(U.identifier, D),
							!(B >= 95 && O >= 5e6))
						)
							return;
						const x = await this.l.invokeFunction(l.$Xfd, U, D);
						x &&
							(this.a.has(U.identifier) ||
								this.a.size >= 3 ||
								(this.a.add(U.identifier),
								this.j.prompt(
									o.Severity.Warning,
									(0, a.localize)(6617, null, U.displayName || U.name),
									[
										{
											label: (0, a.localize)(6618, null),
											run: () =>
												this.k.openEditor(s.$UTc.instance, { pinned: !0 }),
										},
										x,
									],
									{ priority: o.NotificationPriority.SILENT },
								)));
					}
				};
				(e.$agd = k),
					(e.$agd = k =
						Ne(
							[
								j(0, I.$q2),
								j(1, y.$Yfd),
								j(2, b.$km),
								j(3, p.$ik),
								j(4, o.$4N),
								j(5, $.$IY),
								j(6, g.$Li),
								j(7, v.$ucd),
								j(8, f.$acd),
								j(9, h.$gj),
								j(10, n.$ll),
								j(11, P.$Xnc),
							],
							k,
						));
			},
		),
		define(
			de[1892],
			he([
				1, 0, 4, 9, 478, 42, 52, 61, 5, 67, 520, 53, 3, 65, 1026, 455, 62, 85,
				18, 22, 73, 12, 170, 107, 125, 30, 55, 399,
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
			) {
				"use strict";
				var P, k;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mEc = e.$lEc = void 0);
				let L = class {
					static {
						P = this;
					}
					static get() {
						return (0, I.$t6)(P.ID);
					}
					static {
						this.ID = "workbench.contrib.perfview";
					}
					constructor(R, O) {
						(this.d = R),
							(this.a = i.URI.from({
								scheme: "perf",
								path: "Startup Performance",
							})),
							(this.b = O.registerTextModelContentProvider(
								"perf",
								R.createInstance(M),
							));
					}
					dispose() {
						this.b.dispose();
					}
					getInputUri() {
						return this.a;
					}
					getEditorInput() {
						return this.d.createInstance(D);
					}
				};
				(e.$lEc = L), (e.$lEc = L = P = Ne([j(0, m.$Li), j(1, E.$MO)], L));
				let D = class extends w.$S1b {
					static {
						k = this;
					}
					static {
						this.Id = "PerfviewInput";
					}
					get typeId() {
						return k.Id;
					}
					constructor(R, O, B, U, z, F, x, H) {
						super(
							L.get().getInputUri(),
							(0, t.localize)(8328, null),
							void 0,
							void 0,
							void 0,
							R,
							O,
							B,
							U,
							z,
							F,
							x,
							H,
						);
					}
				};
				(e.$mEc = D),
					(e.$mEc =
						D =
						k =
							Ne(
								[
									j(0, E.$MO),
									j(1, o.$kZ),
									j(2, f.$IY),
									j(3, b.$ll),
									j(4, s.$3N),
									j(5, y.$_Y),
									j(6, v.$XO),
									j(7, T.$QIb),
								],
								D,
							));
				let M = class {
					constructor(R, O, B, U, z, F, x, H) {
						(this.d = R),
							(this.f = O),
							(this.g = B),
							(this.h = U),
							(this.i = z),
							(this.j = F),
							(this.k = x),
							(this.l = H),
							(this.b = []);
					}
					provideTextContent(R) {
						if (!this.a || this.a.isDisposed()) {
							(0, h.$Vc)(this.b);
							const O = this.f.createById("markdown");
							(this.a =
								this.d.getModel(R) || this.d.createModel("Loading...", O, R)),
								this.b.push(
									O.onDidChange((B) => {
										this.a?.setLanguage(B);
									}),
								),
								this.b.push(this.j.onDidChangeExtensionsStatus(this.m, this)),
								(0, n.$G1b)(this.a, { wordWrapOverride: "off" }, this.g);
						}
						return this.m(), Promise.resolve(this.a);
					}
					m() {
						Promise.all([
							this.i.whenReady(),
							this.h.when(C.LifecyclePhase.Eventually),
							this.j.whenInstalledExtensionsRegistered(),
							this.l.whenConnected,
						]).then(() => {
							if (this.a && !this.a.isDisposed()) {
								const R = g.$X.get(),
									O = new N();
								this.n(O),
									O.blank(),
									this.o(O, R),
									O.blank(),
									this.q(O),
									O.blank(),
									this.r(
										"Terminal Stats",
										O,
										this.i
											.getPerformanceMarks()
											.find((B) => B[0] === "renderer")?.[1]
											.filter((B) => B.name.startsWith("code/terminal/")),
									),
									O.blank(),
									this.s(O),
									O.blank(),
									this.t(O),
									g.$V || (O.blank(), this.u(O, R), O.blank(), this.v(O)),
									O.blank(),
									this.w(O),
									this.a.setValue(O.value);
							}
						});
					}
					n(R) {
						const O = this.i.startupMetrics;
						R.heading(2, "System Info"),
							R.li(
								`${this.k.nameShort}: ${this.k.version} (${this.k.commit || "0000000"})`,
							),
							R.li(`OS: ${O.platform}(${O.release})`),
							O.cpus &&
								R.li(
									`CPUs: ${O.cpus.model}(${O.cpus.count} x ${O.cpus.speed})`,
								),
							typeof O.totalmem == "number" &&
								typeof O.freemem == "number" &&
								R.li(
									`Memory(System): ${(O.totalmem / b.$Tl.GB).toFixed(2)} GB(${(O.freemem / b.$Tl.GB).toFixed(2)}GB free)`,
								),
							O.meminfo &&
								R.li(
									`Memory(Process): ${(O.meminfo.workingSetSize / b.$Tl.KB).toFixed(2)} MB working set(${(O.meminfo.privateBytes / b.$Tl.KB).toFixed(2)}MB private, ${(O.meminfo.sharedBytes / b.$Tl.KB).toFixed(2)}MB shared)`,
								),
							R.li(`VM(likelihood): ${O.isVMLikelyhood}%`),
							R.li(`Initial Startup: ${O.initialStartup}`),
							R.li(`Has ${O.windowCount - 1} other windows`),
							R.li(`Screen Reader Active: ${O.hasAccessibilitySupport}`),
							R.li(`Empty Workspace: ${O.emptyWorkbench}`);
					}
					o(R, O) {
						const B = this.i.startupMetrics,
							U = S.$Io.as(I.Extensions.Workbench).timings,
							z = [];
						z.push([
							"start => app.isReady",
							B.timers.ellapsedAppReady,
							"[main]",
							`initial startup: ${B.initialStartup}`,
						]),
							z.push([
								"nls:start => nls:end",
								B.timers.ellapsedNlsGeneration,
								"[main]",
								`initial startup: ${B.initialStartup}`,
							]),
							z.push([
								"import(main.bundle.js)",
								B.timers.ellapsedLoadMainBundle,
								"[main]",
								`initial startup: ${B.initialStartup}`,
							]),
							z.push([
								"start crash reporter",
								B.timers.ellapsedCrashReporter,
								"[main]",
								`initial startup: ${B.initialStartup}`,
							]),
							z.push([
								"serve main IPC handle",
								B.timers.ellapsedMainServer,
								"[main]",
								`initial startup: ${B.initialStartup}`,
							]),
							z.push([
								"create window",
								B.timers.ellapsedWindowCreate,
								"[main]",
								`initial startup: ${B.initialStartup}, ${B.initialStartup ? `state: ${B.timers.ellapsedWindowRestoreState}ms, widget: ${B.timers.ellapsedBrowserWindowCreate}ms, show: ${B.timers.ellapsedWindowMaximize}ms` : ""}`,
							]),
							z.push([
								"app.isReady => window.loadUrl()",
								B.timers.ellapsedWindowLoad,
								"[main]",
								`initial startup: ${B.initialStartup}`,
							]),
							z.push([
								"window.loadUrl() => begin to import(workbench.desktop.main.js)",
								B.timers.ellapsedWindowLoadToRequire,
								"[main->renderer]",
								(0, C.$o6)(B.windowKind),
							]),
							z.push([
								"import(workbench.desktop.main.js)",
								B.timers.ellapsedRequire,
								"[renderer]",
								`cached data: ${B.didUseCachedData ? "YES" : "NO"}${O ? `, node_modules took ${O.nodeRequireTotal}ms` : ""}`,
							]),
							z.push([
								"wait for window config",
								B.timers.ellapsedWaitForWindowConfig,
								"[renderer]",
								void 0,
							]),
							z.push([
								"init storage (global & workspace)",
								B.timers.ellapsedStorageInit,
								"[renderer]",
								void 0,
							]),
							z.push([
								"init workspace service",
								B.timers.ellapsedWorkspaceServiceInit,
								"[renderer]",
								void 0,
							]),
							l.$r &&
								(z.push([
									"init settings and global state from settings sync service",
									B.timers.ellapsedRequiredUserDataInit,
									"[renderer]",
									void 0,
								]),
								z.push([
									"init keybindings, snippets & extensions from settings sync service",
									B.timers.ellapsedOtherUserDataInit,
									"[renderer]",
									void 0,
								])),
							z.push([
								"register extensions & spawn extension host",
								B.timers.ellapsedExtensions,
								"[renderer]",
								void 0,
							]),
							z.push([
								"restore viewlet",
								B.timers.ellapsedViewletRestore,
								"[renderer]",
								B.viewletId,
							]),
							z.push([
								"restore panel",
								B.timers.ellapsedPanelRestore,
								"[renderer]",
								B.panelId,
							]),
							z.push([
								"restore & resolve visible editors",
								B.timers.ellapsedEditorRestore,
								"[renderer]",
								`${B.editorIds.length}: ${B.editorIds.join(", ")}`,
							]),
							z.push([
								"create workbench contributions",
								B.timers.ellapsedWorkbenchContributions,
								"[renderer]",
								`${(U.get(C.LifecyclePhase.Starting)?.length ?? 0) + (U.get(C.LifecyclePhase.Starting)?.length ?? 0)} blocking startup`,
							]),
							z.push([
								"overall workbench load",
								B.timers.ellapsedWorkbench,
								"[renderer]",
								void 0,
							]),
							z.push([
								"workbench ready",
								B.ellapsed,
								"[main->renderer]",
								void 0,
							]),
							z.push([
								"renderer ready",
								B.timers.ellapsedRenderer,
								"[renderer]",
								void 0,
							]),
							z.push([
								"shared process connection ready",
								B.timers.ellapsedSharedProcesConnected,
								"[renderer->sharedprocess]",
								void 0,
							]),
							z.push([
								"extensions registered",
								B.timers.ellapsedExtensionsReady,
								"[renderer]",
								void 0,
							]),
							R.heading(2, "Performance Marks"),
							R.table(["What", "Duration", "Process", "Info"], z);
					}
					q(R) {
						const O = [],
							B = [],
							U = this.j.getExtensionsStatus();
						for (const F in U) {
							const { activationTimes: x } = U[F];
							x &&
								(x.activationReason.startup
									? O.push([
											F,
											x.activationReason.startup,
											x.codeLoadingTime,
											x.activateCallTime,
											x.activateResolvedTime,
											x.activationReason.activationEvent,
											x.activationReason.extensionId.value,
										])
									: B.push([
											F,
											x.activationReason.startup,
											x.codeLoadingTime,
											x.activateCallTime,
											x.activateResolvedTime,
											x.activationReason.activationEvent,
											x.activationReason.extensionId.value,
										]));
						}
						const z = O.concat(B);
						z.length > 0 &&
							(R.heading(2, "Extension Activation Stats"),
							R.table(
								[
									"Extension",
									"Eager",
									"Load Code",
									"Call Activate",
									"Finish Activate",
									"Event",
									"By",
								],
								z,
							));
					}
					r(R, O, B) {
						if (!B) return;
						const U = [];
						let z = -1,
							F = 0;
						for (const { name: x, startTime: H } of B) {
							const q = z !== -1 ? H - z : 0;
							(F += q),
								U.push([x, Math.round(H), Math.round(q), Math.round(F)]),
								(z = H);
						}
						R && O.heading(2, R),
							O.table(["Name", "Timestamp", "Delta", "Total"], U);
					}
					s(R) {
						R.heading(2, "Workbench Contributions Blocking Restore");
						const O = S.$Io.as(I.Extensions.Workbench).timings;
						R.li(
							`Total (LifecyclePhase.Starting): ${O.get(C.LifecyclePhase.Starting)?.length} (${O.get(C.LifecyclePhase.Starting)?.reduce((U, z) => U + z[1], 0)}ms)`,
						),
							R.li(
								`Total (LifecyclePhase.Ready): ${O.get(C.LifecyclePhase.Ready)?.length} (${O.get(C.LifecyclePhase.Ready)?.reduce((U, z) => U + z[1], 0)}ms)`,
							),
							R.blank();
						const B = this.i
							.getPerformanceMarks()
							.find((U) => U[0] === "renderer")?.[1]
							.filter(
								(U) =>
									U.name.startsWith("code/willCreateWorkbenchContribution/1") ||
									U.name.startsWith("code/didCreateWorkbenchContribution/1") ||
									U.name.startsWith("code/willCreateWorkbenchContribution/2") ||
									U.name.startsWith("code/didCreateWorkbenchContribution/2"),
							);
						this.r(void 0, R, B);
					}
					t(R) {
						for (const [O, B] of this.i.getPerformanceMarks()) {
							R.heading(2, `Raw Perf Marks: ${O}`),
								(R.value += "```\n"),
								(R.value += `Name	Timestamp	Delta	Total
`);
							let U = -1,
								z = 0;
							for (const { name: F, startTime: x } of B) {
								const H = U !== -1 ? x - U : 0;
								(z += H),
									(R.value += `${F}	${x}	${H}	${z}
`),
									(U = x);
							}
							R.value += "```\n";
						}
					}
					u(R, O) {
						R.heading(2, "Loader Stats"),
							R.heading(3, "Load AMD-module"),
							R.table(["Module", "Duration"], O.amdLoad),
							R.blank(),
							R.heading(3, "Load commonjs-module"),
							R.table(["Module", "Duration"], O.nodeRequire),
							R.blank(),
							R.heading(3, "Invoke AMD-module factory"),
							R.table(["Module", "Duration"], O.amdInvoke),
							R.blank(),
							R.heading(3, "Invoke commonjs-module"),
							R.table(["Module", "Duration"], O.nodeEval);
					}
					v(R) {
						const O = new Map();
						if (
							(O.set(g.LoaderEventType.CachedDataCreated, []),
							O.set(g.LoaderEventType.CachedDataFound, []),
							O.set(g.LoaderEventType.CachedDataMissed, []),
							O.set(g.LoaderEventType.CachedDataRejected, []),
							!g.$V && typeof ce.getStats == "function")
						)
							for (const U of ce.getStats())
								O.has(U.type) && O.get(U.type).push(U.detail);
						const B = (U) => {
							if (U) {
								U.sort();
								for (const z of U) R.li(`${z}`);
								R.blank();
							}
						};
						R.heading(2, "Node Cached Data Stats"),
							R.blank(),
							R.heading(3, "cached data used"),
							B(O.get(g.LoaderEventType.CachedDataFound)),
							R.heading(3, "cached data missed"),
							B(O.get(g.LoaderEventType.CachedDataMissed)),
							R.heading(3, "cached data rejected"),
							B(O.get(g.LoaderEventType.CachedDataRejected)),
							R.heading(3, "cached data created (lazy, might need refreshes)"),
							B(O.get(g.LoaderEventType.CachedDataCreated));
					}
					w(R) {
						const O = performance
							.getEntriesByType("resource")
							.map((B) => [B.name, B.duration]);
						O.length &&
							(R.heading(2, "Resource Timing Stats"),
							R.table(["Name", "Duration"], O));
					}
				};
				M = Ne(
					[
						j(0, r.$QO),
						j(1, d.$nM),
						j(2, c.$dtb),
						j(3, C.$n6),
						j(4, u.$Xnc),
						j(5, a.$q2),
						j(6, p.$Bk),
						j(7, $.$iIb),
					],
					M,
				);
				class N {
					constructor() {
						this.value = "";
					}
					heading(R, O) {
						return (
							(this.value += `${"#".repeat(R)} ${O}

`),
							this
						);
					}
					blank() {
						return (
							(this.value += `
`),
							this
						);
					}
					li(R) {
						return (
							(this.value += `* ${R}
`),
							this
						);
					}
					table(R, O) {
						this.value += g.$X.toMarkdownTable(R, O);
					}
				}
			},
		),
		define(
			de[3733],
			he([1, 0, 4, 11, 5, 52, 30, 99, 55, 44, 1892, 18, 1615, 6, 3267]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, m.$s6)(u.$lEc.ID, u.$lEc, { lazy: !0 }),
					C.$Io.as(r.$a1.EditorFactory).registerEditorSerializer(
						u.$mEc.Id,
						class {
							canSerialize() {
								return !0;
							}
							serialize() {
								return "";
							}
							deserialize(g) {
								return g.createInstance(u.$mEc);
							}
						},
					),
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: "perfview.show",
									title: (0, t.localize2)(8324, "Startup Performance"),
									category: d.$ck.Developer,
									f1: !0,
								});
							}
							run(g) {
								const p = g.get(a.$IY),
									o = u.$lEc.get();
								return p.openEditor(o.getEditorInput(), { pinned: !0 });
							}
						},
					),
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: "perf.insta.printAsyncCycles",
									title: (0, t.localize2)(8325, "Print Service Cycles"),
									category: d.$ck.Developer,
									f1: !0,
								});
							}
							run(p) {
								const o = p.get(w.$Li);
								if (o instanceof h.$Yr) {
									const f = o._globalGraph?.findCycleSlow();
									f
										? console.warn("CYCLE", f)
										: console.warn("YEAH, no more cycles");
								}
							}
						},
					),
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: "perf.insta.printTraces",
									title: (0, t.localize2)(8326, "Print Service Traces"),
									category: d.$ck.Developer,
									f1: !0,
								});
							}
							run() {
								if (h.$Zr.all.size === 0) {
									console.log(
										"Enable via `instantiationService.ts#_enableAllTracing`",
									);
									return;
								}
								for (const p of h.$Zr.all) console.log(p);
							}
						},
					),
					(0, i.$4X)(
						class extends i.$3X {
							constructor() {
								super({
									id: "perf.event.profiling",
									title: (0, t.localize2)(8327, "Print Emitter Profiles"),
									category: d.$ck.Developer,
									f1: !0,
								});
							}
							run() {
								if (c.$ne.all.size === 0) {
									console.log(
										"USE `EmitterOptions._profName` to enable profiling",
									);
									return;
								}
								for (const p of c.$ne.all)
									console.log(
										`${p.name}: ${p.invocationCount} invocations COST ${p.elapsedOverall}ms, ${p.listenerCount} listeners, avg cost is ${p.durations.reduce((o, f) => o + f, 0) / p.durations.length}ms`,
									);
							}
						},
					),
					C.$Io
						.as(m.Extensions.Workbench)
						.registerWorkbenchContribution(n.$nEc, E.LifecyclePhase.Eventually);
			},
		),
		define(
			de[3734],
			he([
				1, 0, 56, 52, 415, 220, 18, 174, 142, 60, 34, 62, 32, 286, 520, 54, 136,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$5c = e.$05c = e.$95c = void 0),
					(E = mt(E));
				let o = class {
					constructor(l, y, $, v, S) {
						(this.a = l),
							(this.b = y),
							(this.c = $),
							(this.d = v),
							(this.e = S);
					}
					async f() {
						if (this.c.startupKind !== i.StartupKind.NewWindow)
							return (0, i.$o6)(this.c.startupKind);
						if (!this.e.isWorkspaceTrusted()) return "Workspace not trusted";
						const l = this.b.getActivePaneComposite(
							r.ViewContainerLocation.Sidebar,
						);
						if (!l || l.getId() !== E.$vUb)
							return "Explorer viewlet not visible";
						const y = this.a.visibleEditorPanes;
						if (y.length !== 1)
							return `Expected text editor count : 1, Actual : ${y.length}`;
						if (!(0, t.$0sb)(y[0].getControl()))
							return "Active editor is not a text editor";
						const $ = this.b.getActivePaneComposite(
							r.ViewContainerLocation.Panel,
						);
						if ($)
							return `Current active panel : ${this.b.getPaneComposite($.getId(), r.ViewContainerLocation.Panel)?.name}`;
						if ((await this.d.isLatestVersion()) === !1)
							return "Not on latest version, updates available";
					}
				};
				(e.$95c = o),
					(e.$95c = o =
						Ne(
							[
								j(0, C.$IY),
								j(1, m.$6Sb),
								j(2, i.$n6),
								j(3, w.$_rb),
								j(4, d.$pO),
							],
							o,
						));
				let f = class extends o {
					constructor(l, y, $, v, S, I, T, P, k, L) {
						super(l, y, $, v, S),
							(this.g = I),
							(this.h = T),
							(this.i = P),
							(this.j = k),
							(this.k = L),
							this.l();
					}
					async l() {
						if (!this.i.profDurationMarkers) return;
						await this.g.whenReady();
						const l = await this.f(),
							y = await this.g.perfBaseline,
							[$, v] = this.i.profDurationMarkers,
							S = `${this.g.getDuration($, v)}	${this.k.nameShort}	${(this.k.commit || "").slice(0, 10) || "0000000000"}	${this.j.sessionId}	${l === void 0 ? "standard_start" : "NO_standard_start : " + l}	${String(y).padStart(4, "0")}ms
`;
						this.h.info(`[prof-timers] ${S}`);
					}
				};
				(e.$05c = f),
					(e.$05c = f =
						Ne(
							[
								j(0, C.$IY),
								j(1, m.$6Sb),
								j(2, i.$n6),
								j(3, w.$_rb),
								j(4, d.$pO),
								j(5, n.$Xnc),
								j(6, u.$ik),
								j(7, c.$5rb),
								j(8, h.$km),
								j(9, a.$Bk),
							],
							f,
						));
				let b = class {
					constructor(l) {
						for (const y of performance.getEntriesByType("resource"))
							try {
								const $ = new URL(y.name),
									v = g.$lc.basename($.pathname);
								l.publicLog2("startup.resource.perf", {
									hosthash: `H${(0, p.$Aj)($.host).toString(16)}`,
									name: v,
									duration: y.duration,
								});
							} catch {}
					}
				};
				(e.$$5c = b), (e.$$5c = b = Ne([j(0, h.$km)], b));
			},
		),
		define(
			de[3735],
			he([1, 0, 15, 76, 19, 47, 10, 22, 34, 110, 1651, 151, 698, 520]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Cgd = void 0);
				let n = class {
					constructor(p, o, f, b, s, l, y) {
						(this.b = p),
							(this.d = o),
							(this.f = f),
							!(0, h.$Umc)(p).isExtensionDevTestFromCli &&
								s.perfBaseline.then((v) => {
									if (
										(f.info(`[perf] Render performance baseline is ${v}ms`),
										v < 0)
									)
										return;
									const S = v * 10,
										I = new PerformanceObserver(async (T) => {
											I.takeRecords();
											const P = T.getEntries()
												.map((L) => L.duration)
												.reduce((L, D) => Math.max(L, D), 0);
											if (P < S) return;
											if (
												!l.getValue(
													"application.experimental.rendererProfiling",
												)
											) {
												f.debug(
													`[perf] SLOW task detected (${P}ms) but renderer profiling is disabled via 'application.experimental.rendererProfiling'`,
												);
												return;
											}
											const k = (0, E.$9g)();
											f.warn(
												`[perf] Renderer reported VERY LONG TASK (${P}ms), starting profiling session '${k}'`,
											),
												I.disconnect();
											for (let L = 0; L < 3; L++)
												try {
													const D = await b.profileRenderer(k, 5e3);
													if (
														(await y.analyseBottomUp(
															D,
															(N) => "<<renderer>>",
															v,
															!0,
														)) === u.ProfilingOutput.Interesting
													) {
														this.g(D, k);
														break;
													}
													(0, t.$Nh)(15e3);
												} catch (D) {
													f.error(D);
													break;
												}
											I.observe({ entryTypes: ["longtask"] });
										});
									I.observe({ entryTypes: ["longtask"] }), (this.a = I);
								});
					}
					dispose() {
						this.a?.disconnect();
					}
					async g(p, o) {
						const f = (0, w.$nh)(
							this.b.tmpDir,
							`renderer-${Math.random().toString(16).slice(2, 8)}.cpuprofile.json`,
						);
						await this.d.writeFile(f, i.$Te.fromString(JSON.stringify(p))),
							this.f.info(`[perf] stored profile to DISK '${f}'`, o);
					}
				};
				(e.$Cgd = n),
					(e.$Cgd = n =
						Ne(
							[
								j(0, a.$ucd),
								j(1, d.$ll),
								j(2, m.$ik),
								j(3, r.$y7c),
								j(4, c.$Xnc),
								j(5, C.$gj),
								j(6, u.$acd),
							],
							n,
						));
			},
		),
		define(
			de[3736],
			he([1, 0, 4, 19, 42, 57, 151, 52, 1892, 53, 121, 9, 41, 110, 62, 22, 73]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Agd = void 0);
				let o = class {
					constructor(b, s, l, y, $, v, S, I, T, P, k) {
						(this.a = b),
							(this.b = s),
							(this.c = l),
							(this.d = y),
							(this.e = S),
							(this.f = I),
							(this.g = T),
							(this.h = P),
							(this.i = k),
							Promise.all([
								$.when(d.LifecyclePhase.Eventually),
								v.whenInstalledExtensionsRegistered(),
							]).then(() => {
								this.j();
							});
					}
					j() {
						if (!this.b.args["prof-startup-prefix"]) return;
						const b = a.URI.file(this.b.args["prof-startup-prefix"]),
							s = (0, i.$mh)(b),
							l = (0, i.$kh)(b),
							y = ["--prof-startup"];
						this.h
							.readFile(b)
							.then((v) => y.push(...v.toString().split("|")))
							.then(() => this.h.del(b, { recursive: !0 }))
							.then(
								() =>
									new Promise((v) => {
										const S = () => {
											this.h.exists(b).then((I) => {
												I ? v() : setTimeout(S, 500);
											});
										};
										S();
									}),
							)
							.then(() => this.h.del(b, { recursive: !0 }))
							.then(() =>
								this.h
									.resolve(s)
									.then((v) =>
										(v.children
											? v.children.filter((S) => S.resource.path.includes(l))
											: []
										).map((S) => S.resource),
									),
							)
							.then((v) => {
								const S = v.reduce(
									(I, T) => `${I}${this.i.getUriLabel(T)}
`,
									`
`,
								);
								return this.a
									.confirm({
										type: "info",
										message: (0, t.localize)(8330, null),
										detail: (0, t.localize)(8331, null, S),
										primaryButton: (0, t.localize)(8332, null),
										cancelButton: (0, t.localize)(8333, null),
									})
									.then((I) => {
										I.confirmed
											? Promise.all([
													this.f.showItemInFolder(v[0].fsPath),
													this.k(v.map((T) => (0, i.$kh)(T))),
												]).then(() =>
													this.a
														.confirm({
															type: "info",
															message: (0, t.localize)(8334, null),
															detail: (0, t.localize)(
																8335,
																null,
																this.g.nameLong,
															),
															primaryButton: (0, t.localize)(8336, null),
														})
														.then((T) => {
															T.confirmed && this.f.relaunch({ removeArgs: y });
														}),
												)
											: this.f.relaunch({ removeArgs: y });
									});
							});
					}
					async k(b) {
						const s = this.g.reportIssueUrl;
						if (!s) return;
						const l = m.$lEc.get(),
							y = await this.c.createModelReference(l.getInputUri());
						try {
							await this.d.writeText(y.object.textEditorModel.getValue());
						} finally {
							y.dispose();
						}
						const $ = `
1. :warning: We have copied additional data to your clipboard. Make sure to **paste** here. :warning:
1. :warning: Make sure to **attach** these files from your *home*-directory: :warning:
${b
	.map((I) => `-\`${I}\``)
	.join(`
`)}
`,
							v = s,
							S = v.indexOf("?") === -1 ? "?" : "&";
						this.e.open(a.URI.parse(`${v}${S}body=${encodeURIComponent($)}`));
					}
				};
				(e.$Agd = o),
					(e.$Agd = o =
						Ne(
							[
								j(0, E.$GO),
								j(1, C.$ucd),
								j(2, w.$MO),
								j(3, u.$Vxb),
								j(4, d.$n6),
								j(5, r.$q2),
								j(6, h.$7rb),
								j(7, c.$y7c),
								j(8, n.$Bk),
								j(9, g.$ll),
								j(10, p.$3N),
							],
							o,
						));
			},
		),
		define(
			de[3737],
			he([
				1, 0, 15, 29, 151, 52, 62, 32, 415, 110, 18, 520, 22, 9, 76, 174, 142,
				3734, 24,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Bgd = void 0);
				let b = class extends o.$95c {
					constructor(l, y, $, v, S, I, T, P, k, L, D) {
						super(v, S, T, P, D),
							(this.g = l),
							(this.h = y),
							(this.i = $),
							(this.j = I),
							(this.k = k),
							(this.l = L),
							this.m().catch(i.$4);
					}
					async m() {
						const l = await this.f();
						this.n(l).catch(i.$4);
					}
					async n(l) {
						const y = this.k.args["prof-append-timers"],
							$ = this.k.args["prof-duration-markers"],
							v = this.k.args["prof-duration-markers-file"];
						if (!(!y && !$))
							try {
								await Promise.all([this.h.whenReady(), (0, t.$Nh)(15e3)]);
								const S = await this.h.perfBaseline,
									I = await this.q();
								if ((I && this.r(I), y)) {
									const T =
										(0, f.$Lb)([
											this.h.startupMetrics.ellapsed,
											this.l.nameShort,
											(this.l.commit || "").slice(0, 10) || "0000000000",
											this.j.sessionId,
											l === void 0
												? "standard_start"
												: `NO_standard_start : ${l}`,
											`${String(S).padStart(4, "0")}ms`,
											I ? this.s(I) : void 0,
										]).join("	") +
										`
`;
									await this.p(c.URI.file(y), T);
								}
								if ($?.length) {
									const T = [];
									for (const k of $) {
										let L = 0;
										if (k === "ellapsed") L = this.h.startupMetrics.ellapsed;
										else if (k.indexOf("-") !== -1) {
											const D = k.split("-");
											D.length === 2 && (L = this.h.getDuration(D[0], D[1]));
										}
										L && (T.push(k), T.push(`${L}`));
									}
									const P = `${T.join("	")}
`;
									v ? await this.p(c.URI.file(v), P) : console.log(P);
								}
							} catch (S) {
								console.error(S);
							} finally {
								this.i.exit(0);
							}
					}
					async f() {
						const l = await this.i.getWindowCount();
						return l !== 1
							? `Expected window count : 1, Actual : ${l}`
							: super.f();
					}
					async p(l, y) {
						const $ = [];
						(await this.g.exists(l)) &&
							$.push((await this.g.readFile(l)).value),
							$.push(n.$Te.fromString(y)),
							await this.g.writeFile(l, n.$Te.concat($));
					}
					async q() {
						if (
							!this.k.args["enable-tracing"] ||
							!this.k.args["trace-startup-file"] ||
							this.k.args["trace-startup-format"] !== "json" ||
							!this.k.args["trace-startup-duration"]
						)
							return;
						const l = await this.i.getProcessId(),
							y = performance.memory?.usedJSHeapSize ?? 0;
						let $ = 0,
							v = 0,
							S = 0,
							I = 0;
						try {
							const T = JSON.parse(
								(
									await this.g.readFile(
										c.URI.file(this.k.args["trace-startup-file"]),
									)
								).value.toString(),
							);
							for (const P of T.traceEvents)
								if (P.pid === l) {
									switch (P.name) {
										case "MinorGC":
											$++;
											break;
										case "MajorGC":
											v++;
											break;
										case "V8.GCFinalizeMC":
										case "V8.GCScavenger":
											I += P.dur;
											break;
									}
									(P.name === "MajorGC" || P.name === "MinorGC") &&
										typeof P.args?.usedHeapSizeAfter == "number" &&
										typeof P.args.usedHeapSizeBefore == "number" &&
										(S += P.args.usedHeapSizeBefore - P.args.usedHeapSizeAfter);
								}
							return {
								minorGCs: $,
								majorGCs: v,
								used: y,
								garbage: S,
								duration: Math.round(I / 1e3),
							};
						} catch (T) {
							console.error(T);
						}
					}
					r({ used: l, garbage: y, majorGCs: $, minorGCs: v, duration: S }) {
						this.j.publicLog2("startupHeapStatistics", {
							heapUsed: l,
							heapGarbage: y,
							majorGCs: $,
							minorGCs: v,
							gcsDuration: S,
						});
					}
					s({ used: l, garbage: y, majorGCs: $, minorGCs: v, duration: S }) {
						return `Heap: ${Math.round(l / 1048576)}MB (used) ${Math.round(y / 1048576)}MB (garbage) ${$} (MajorGC) ${v} (MinorGC) ${S}ms (GC duration)`;
					}
				};
				(e.$Bgd = b),
					(e.$Bgd = b =
						Ne(
							[
								j(0, h.$ll),
								j(1, a.$Xnc),
								j(2, r.$y7c),
								j(3, u.$IY),
								j(4, p.$6Sb),
								j(5, d.$km),
								j(6, E.$n6),
								j(7, m.$_rb),
								j(8, w.$ucd),
								j(9, C.$Bk),
								j(10, g.$pO),
							],
							b,
						));
			},
		),
		define(
			de[3738],
			he([1, 0, 52, 30, 55, 3736, 3737, 3735, 81, 4, 224]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					i.$Io
						.as(w.Extensions.Workbench)
						.registerWorkbenchContribution(d.$Cgd, t.LifecyclePhase.Eventually),
					i.$Io
						.as(w.Extensions.Workbench)
						.registerWorkbenchContribution(E.$Agd, t.LifecyclePhase.Restored),
					i.$Io
						.as(w.Extensions.Workbench)
						.registerWorkbenchContribution(C.$Bgd, t.LifecyclePhase.Eventually),
					i.$Io
						.as(m.$No.Configuration)
						.registerConfiguration({
							...u.$u6,
							properties: {
								"application.experimental.rendererProfiling": {
									type: "boolean",
									default: !1,
									tags: ["experimental"],
									markdownDescription: (0, r.localize)(8329, null),
								},
							},
						});
			},
		),
		define(
			de[3739],
			he([
				1, 0, 110, 151, 25, 53, 415, 52, 18, 91, 520, 32, 320, 20, 96, 62, 21,
				142,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Tdd = void 0),
					(e.$Udd = l);
				let f = class extends u.$Ync {
					constructor($, v, S, I, T, P, k, L, D, M, N, A, R) {
						super(S, I, T, P, k, L, D, M, N),
							(this.x = $),
							(this.y = v),
							(this.z = A),
							(this.A = R),
							this.setPerformanceMarks("main", v.window.perfMarks);
					}
					t() {
						return !!this.y.window.isInitialStartup;
					}
					u() {
						return l(this.z, this.A, this.y);
					}
					v() {
						return this.x.getWindowCount();
					}
					async w($) {
						try {
							const [v, S, I, T] = await Promise.all([
								this.x.getOSProperties(),
								this.x.getOSStatistics(),
								this.x.getOSVirtualMachineHint(),
								this.x.isRunningUnderARM64Translation(),
							]);
							($.totalmem = S.totalmem),
								($.freemem = S.freemem),
								($.platform = v.platform),
								($.release = v.release),
								($.arch = v.arch),
								($.loadavg = S.loadavg),
								($.isARM64Emulated = T);
							const P = await h.$S.getProcessMemoryInfo();
							($.meminfo = {
								workingSetSize: P.residentSet,
								privateBytes: P.private,
								sharedBytes: P.shared,
							}),
								($.isVMLikelyhood = Math.round(I * 100));
							const k = v.cpus;
							k &&
								k.length > 0 &&
								($.cpus = {
									count: k.length,
									speed: k[0].speed,
									model: k[0].model,
								});
						} catch {}
					}
					q() {
						return super.q() || !!this.y.args["prof-append-timers"];
					}
				};
				(e.$Tdd = f),
					(e.$Tdd = f =
						Ne(
							[
								j(0, t.$y7c),
								j(1, i.$ucd),
								j(2, d.$n6),
								j(3, w.$Vi),
								j(4, E.$q2),
								j(5, C.$_rb),
								j(6, o.$6Sb),
								j(7, m.$IY),
								j(8, r.$XK),
								j(9, a.$km),
								j(10, n.$mEb),
								j(11, g.$Bk),
								j(12, p.$lq),
							],
							f,
						)),
					(0, c.$lK)(u.$Xnc, f, c.InstantiationType.Delayed);
				const b = "perf/lastRunningCommit";
				let s;
				function l(y, $, v) {
					return (
						typeof s != "boolean" &&
							(!v.window.isCodeCaching || !y.commit
								? (s = !1)
								: $.get(b, p.StorageScope.APPLICATION) === y.commit
									? (s = !0)
									: ($.store(
											b,
											y.commit,
											p.StorageScope.APPLICATION,
											p.StorageTarget.MACHINE,
										),
										(s = !1))),
						s
					);
				}
			},
		),
		