import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
define(de[1745], he([1, 0, 4]), function (ce /*require*/,
 e /*exports*/,
 t /*nls*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$wCc = e.$vCc = e.$uCc = void 0),
				(e.$tCc = w);
			const i = [
				"files.autoSave",
				"editor.fontSize",
				"editor.fontFamily",
				"editor.tabSize",
				"editor.renderWhitespace",
				"editor.cursorStyle",
				"editor.multiCursorModifier",
				"editor.insertSpaces",
				"editor.wordWrap",
				"files.exclude",
				"files.associations",
				"workbench.editor.enablePreview",
			];
			function w(E) {
				return {
					id: "commonlyUsed",
					label: (0, t.localize)(8530, null),
					settings: E?.commonlyUsed ?? i,
				};
			}
			(e.$uCc = {
				id: "root",
				label: "root",
				children: [
					{ id: "ai", label: "Cursor", settings: ["cursor.*"] },
					{
						id: "editor",
						label: (0, t.localize)(8531, null),
						settings: ["editor.*"],
						children: [
							{
								id: "editor/cursor",
								label: (0, t.localize)(8532, null),
								settings: ["editor.cursor*"],
							},
							{
								id: "editor/find",
								label: (0, t.localize)(8533, null),
								settings: ["editor.find.*"],
							},
							{
								id: "editor/font",
								label: (0, t.localize)(8534, null),
								settings: ["editor.font*"],
							},
							{
								id: "editor/format",
								label: (0, t.localize)(8535, null),
								settings: ["editor.format*"],
							},
							{
								id: "editor/diffEditor",
								label: (0, t.localize)(8536, null),
								settings: ["diffEditor.*"],
							},
							{
								id: "editor/multiDiffEditor",
								label: (0, t.localize)(8537, null),
								settings: ["multiDiffEditor.*"],
							},
							{
								id: "editor/minimap",
								label: (0, t.localize)(8538, null),
								settings: ["editor.minimap.*"],
							},
							{
								id: "editor/suggestions",
								label: (0, t.localize)(8539, null),
								settings: ["editor.*suggest*"],
							},
							{
								id: "editor/files",
								label: (0, t.localize)(8540, null),
								settings: ["files.*"],
							},
						],
					},
					{
						id: "workbench",
						label: (0, t.localize)(8541, null),
						settings: ["workbench.*"],
						children: [
							{
								id: "workbench/appearance",
								label: (0, t.localize)(8542, null),
								settings: [
									"workbench.activityBar.*",
									"workbench.*color*",
									"workbench.fontAliasing",
									"workbench.iconTheme",
									"workbench.sidebar.location",
									"workbench.*.visible",
									"workbench.tips.enabled",
									"workbench.tree.*",
									"workbench.view.*",
								],
							},
							{
								id: "workbench/breadcrumbs",
								label: (0, t.localize)(8543, null),
								settings: ["breadcrumbs.*"],
							},
							{
								id: "workbench/editor",
								label: (0, t.localize)(8544, null),
								settings: ["workbench.editor.*"],
							},
							{
								id: "workbench/settings",
								label: (0, t.localize)(8545, null),
								settings: ["workbench.settings.*"],
							},
							{
								id: "workbench/zenmode",
								label: (0, t.localize)(8546, null),
								settings: ["zenmode.*"],
							},
							{
								id: "workbench/screencastmode",
								label: (0, t.localize)(8547, null),
								settings: ["screencastMode.*"],
							},
						],
					},
					{
						id: "window",
						label: (0, t.localize)(8548, null),
						settings: ["window.*"],
						children: [
							{
								id: "window/newWindow",
								label: (0, t.localize)(8549, null),
								settings: ["window.*newwindow*"],
							},
						],
					},
					{
						id: "features",
						label: (0, t.localize)(8550, null),
						children: [
							{
								id: "features/accessibilitySignals",
								label: (0, t.localize)(8551, null),
								settings: ["accessibility.signal*"],
							},
							{
								id: "features/accessibility",
								label: (0, t.localize)(8552, null),
								settings: ["accessibility.*"],
							},
							{
								id: "features/explorer",
								label: (0, t.localize)(8553, null),
								settings: ["explorer.*", "outline.*"],
							},
							{
								id: "features/search",
								label: (0, t.localize)(8554, null),
								settings: ["search.*"],
							},
							{
								id: "features/debug",
								label: (0, t.localize)(8555, null),
								settings: ["debug.*", "launch"],
							},
							{
								id: "features/testing",
								label: (0, t.localize)(8556, null),
								settings: ["testing.*"],
							},
							{
								id: "features/scm",
								label: (0, t.localize)(8557, null),
								settings: ["scm.*"],
							},
							{
								id: "features/extensions",
								label: (0, t.localize)(8558, null),
								settings: ["extensions.*"],
							},
							{
								id: "features/terminal",
								label: (0, t.localize)(8559, null),
								settings: ["terminal.*"],
							},
							{
								id: "features/task",
								label: (0, t.localize)(8560, null),
								settings: ["task.*"],
							},
							{
								id: "features/problems",
								label: (0, t.localize)(8561, null),
								settings: ["problems.*"],
							},
							{
								id: "features/output",
								label: (0, t.localize)(8562, null),
								settings: ["output.*"],
							},
							{
								id: "features/comments",
								label: (0, t.localize)(8563, null),
								settings: ["comments.*"],
							},
							{
								id: "features/remote",
								label: (0, t.localize)(8564, null),
								settings: ["remote.*"],
							},
							{
								id: "features/timeline",
								label: (0, t.localize)(8565, null),
								settings: ["timeline.*"],
							},
							{
								id: "features/notebook",
								label: (0, t.localize)(8566, null),
								settings: ["notebook.*", "interactiveWindow.*"],
							},
							{
								id: "features/mergeEditor",
								label: (0, t.localize)(8567, null),
								settings: ["mergeEditor.*"],
							},
							{
								id: "features/chat",
								label: (0, t.localize)(8568, null),
								settings: ["chat.*", "inlineChat.*"],
							},
							{
								id: "features/issueReporter",
								label: (0, t.localize)(8569, null),
								settings: ["issueReporter.*"],
							},
						],
					},
					{
						id: "application",
						label: (0, t.localize)(8570, null),
						children: [
							{
								id: "application/http",
								label: (0, t.localize)(8571, null),
								settings: ["http.*"],
							},
							{
								id: "application/keyboard",
								label: (0, t.localize)(8572, null),
								settings: ["keyboard.*"],
							},
							{
								id: "application/update",
								label: (0, t.localize)(8573, null),
								settings: ["update.*"],
							},
							{
								id: "application/telemetry",
								label: (0, t.localize)(8574, null),
								settings: ["telemetry.*"],
							},
							{
								id: "application/settingsSync",
								label: (0, t.localize)(8575, null),
								settings: ["settingsSync.*"],
							},
							{
								id: "application/experimental",
								label: (0, t.localize)(8576, null),
								settings: ["application.experimental.*"],
							},
							{
								id: "application/other",
								label: (0, t.localize)(8577, null),
								settings: ["application.*"],
							},
						],
					},
					{
						id: "security",
						label: (0, t.localize)(8578, null),
						settings: ["security.*"],
						children: [
							{
								id: "security/workspace",
								label: (0, t.localize)(8579, null),
								settings: ["security.workspace.*"],
							},
						],
					},
				],
			}),
				(e.$vCc = new Set()),
				[
					"css",
					"html",
					"scss",
					"less",
					"json",
					"js",
					"ts",
					"ie",
					"id",
					"php",
					"scm",
				].forEach((E) => e.$vCc.add(E)),
				(e.$wCc = new Map()),
				e.$wCc.set("power shell", "PowerShell"),
				e.$wCc.set("powershell", "PowerShell"),
				e.$wCc.set("javascript", "JavaScript"),
				e.$wCc.set("typescript", "TypeScript");
		})
