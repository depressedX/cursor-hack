define(de[3333], he([1, 0, 4, 175]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$wXc = void 0);
			const w = (0, t.localize)(11438, null);
			e.$wXc = i.$n2.registerExtensionPoint({
				extensionPoint: "walkthroughs",
				jsonSchema: {
					description: (0, t.localize)(11439, null),
					type: "array",
					items: {
						type: "object",
						required: ["id", "title", "description", "steps"],
						defaultSnippets: [
							{ body: { id: "$1", title: "$2", description: "$3", steps: [] } },
						],
						properties: {
							id: { type: "string", description: (0, t.localize)(11440, null) },
							title: {
								type: "string",
								description: (0, t.localize)(11441, null),
							},
							icon: {
								type: "string",
								description: (0, t.localize)(11442, null),
							},
							description: {
								type: "string",
								description: (0, t.localize)(11443, null),
							},
							featuredFor: {
								type: "array",
								description: (0, t.localize)(11444, null),
								items: { type: "string" },
							},
							when: {
								type: "string",
								description: (0, t.localize)(11445, null),
							},
							steps: {
								type: "array",
								description: (0, t.localize)(11446, null),
								items: {
									type: "object",
									required: ["id", "title", "media"],
									defaultSnippets: [
										{
											body: {
												id: "$1",
												title: "$2",
												description: "$3",
												completionEvents: ["$5"],
												media: {},
											},
										},
									],
									properties: {
										id: {
											type: "string",
											description: (0, t.localize)(11447, null),
										},
										title: {
											type: "string",
											description: (0, t.localize)(11448, null),
										},
										description: {
											type: "string",
											description: (0, t.localize)(
												11449,
												null,
												`[${w}](command:myext.command)`,
												`[${w}](command:toSide:myext.command)`,
												`[${w}](https://aka.ms)`,
											),
										},
										button: {
											deprecationMessage: (0, t.localize)(
												11450,
												null,
												`[${w}](command:myext.command)`,
												`[${w}](command:toSide:myext.command)`,
												`[${w}](https://aka.ms)`,
											),
										},
										media: {
											type: "object",
											description: (0, t.localize)(11451, null),
											oneOf: [
												{
													required: ["image", "altText"],
													additionalProperties: !1,
													properties: {
														path: {
															deprecationMessage: (0, t.localize)(11452, null),
														},
														image: {
															description: (0, t.localize)(11453, null),
															oneOf: [
																{ type: "string" },
																{
																	type: "object",
																	required: ["dark", "light", "hc", "hcLight"],
																	properties: {
																		dark: {
																			description: (0, t.localize)(11454, null),
																			type: "string",
																		},
																		light: {
																			description: (0, t.localize)(11455, null),
																			type: "string",
																		},
																		hc: {
																			description: (0, t.localize)(11456, null),
																			type: "string",
																		},
																		hcLight: {
																			description: (0, t.localize)(11457, null),
																			type: "string",
																		},
																	},
																},
															],
														},
														altText: {
															type: "string",
															description: (0, t.localize)(11458, null),
														},
													},
												},
												{
													required: ["svg", "altText"],
													additionalProperties: !1,
													properties: {
														svg: {
															description: (0, t.localize)(11459, null),
															type: "string",
														},
														altText: {
															type: "string",
															description: (0, t.localize)(11460, null),
														},
													},
												},
												{
													required: ["markdown"],
													additionalProperties: !1,
													properties: {
														path: {
															deprecationMessage: (0, t.localize)(11461, null),
														},
														markdown: {
															description: (0, t.localize)(11462, null),
															type: "string",
														},
													},
												},
											],
										},
										completionEvents: {
											description: (0, t.localize)(11463, null),
											type: "array",
											items: {
												type: "string",
												defaultSnippets: [
													{
														label: "onCommand",
														description: (0, t.localize)(11464, null),
														body: "onCommand:${1:commandId}",
													},
													{
														label: "onLink",
														description: (0, t.localize)(11465, null),
														body: "onLink:${2:linkId}",
													},
													{
														label: "onView",
														description: (0, t.localize)(11466, null),
														body: "onView:${2:viewId}",
													},
													{
														label: "onSettingChanged",
														description: (0, t.localize)(11467, null),
														body: "onSettingChanged:${2:settingName}",
													},
													{
														label: "onContext",
														description: (0, t.localize)(11468, null),
														body: "onContext:${2:key}",
													},
													{
														label: "onExtensionInstalled",
														description: (0, t.localize)(11469, null),
														body: "onExtensionInstalled:${3:extensionId}",
													},
													{
														label: "onStepSelected",
														description: (0, t.localize)(11470, null),
														body: "onStepSelected",
													},
												],
											},
										},
										doneOn: {
											description: (0, t.localize)(11471, null),
											deprecationMessage: (0, t.localize)(11472, null),
											type: "object",
											required: ["command"],
											defaultSnippets: [{ body: { command: "$1" } }],
											properties: {
												command: {
													description: (0, t.localize)(11473, null),
													type: "string",
												},
											},
										},
										when: {
											type: "string",
											description: (0, t.localize)(11474, null),
										},
									},
								},
							},
						},
					},
				},
				activationEventsGenerator: (E, C) => {
					for (const d of E) d.id && C.push(`onWalkthrough:${d.id}`);
				},
			});
		}),
		define(
			de[1819],
			he([
				1, 0, 4, 37, 19, 175, 8, 11, 3, 26, 24, 53, 244, 30, 102, 344, 94, 39,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Mtc = void 0),
					(w = mt(w));
				const f = [
					{
						key: "commandPalette",
						id: d.$XX.CommandPalette,
						description: (0, t.localize)(11948, null),
						supportsSubmenus: !1,
					},
					{
						key: "touchBar",
						id: d.$XX.TouchBarContext,
						description: (0, t.localize)(11949, null),
						supportsSubmenus: !1,
					},
					{
						key: "editor/title",
						id: d.$XX.EditorTitle,
						description: (0, t.localize)(11950, null),
					},
					{
						key: "editor/title/run",
						id: d.$XX.EditorTitleRun,
						description: (0, t.localize)(11951, null),
					},
					{
						key: "editor/context",
						id: d.$XX.EditorContext,
						description: (0, t.localize)(11952, null),
					},
					{
						key: "editor/context/copy",
						id: d.$XX.EditorContextCopy,
						description: (0, t.localize)(11953, null),
					},
					{
						key: "editor/context/share",
						id: d.$XX.EditorContextShare,
						description: (0, t.localize)(11954, null),
						proposed: "contribShareMenu",
					},
					{
						key: "explorer/context",
						id: d.$XX.ExplorerContext,
						description: (0, t.localize)(11955, null),
					},
					{
						key: "explorer/context/share",
						id: d.$XX.ExplorerContextShare,
						description: (0, t.localize)(11956, null),
						proposed: "contribShareMenu",
					},
					{
						key: "editor/title/context",
						id: d.$XX.EditorTitleContext,
						description: (0, t.localize)(11957, null),
					},
					{
						key: "editor/title/context/share",
						id: d.$XX.EditorTitleContextShare,
						description: (0, t.localize)(11958, null),
						proposed: "contribShareMenu",
					},
					{
						key: "debug/callstack/context",
						id: d.$XX.DebugCallStackContext,
						description: (0, t.localize)(11959, null),
					},
					{
						key: "debug/variables/context",
						id: d.$XX.DebugVariablesContext,
						description: (0, t.localize)(11960, null),
					},
					{
						key: "debug/toolBar",
						id: d.$XX.DebugToolBar,
						description: (0, t.localize)(11961, null),
					},
					{
						key: "debug/createConfiguration",
						id: d.$XX.DebugCreateConfiguration,
						proposed: "contribDebugCreateConfiguration",
						description: (0, t.localize)(11962, null),
					},
					{
						key: "notebook/variables/context",
						id: d.$XX.NotebookVariablesContext,
						description: (0, t.localize)(11963, null),
					},
					{
						key: "menuBar/home",
						id: d.$XX.MenubarHomeMenu,
						description: (0, t.localize)(11964, null),
						proposed: "contribMenuBarHome",
						supportsSubmenus: !1,
					},
					{
						key: "menuBar/edit/copy",
						id: d.$XX.MenubarCopy,
						description: (0, t.localize)(11965, null),
					},
					{
						key: "scm/title",
						id: d.$XX.SCMTitle,
						description: (0, t.localize)(11966, null),
					},
					{
						key: "scm/sourceControl",
						id: d.$XX.SCMSourceControl,
						description: (0, t.localize)(11967, null),
					},
					{
						key: "scm/sourceControl/title",
						id: d.$XX.SCMSourceControlTitle,
						description: (0, t.localize)(11968, null),
						proposed: "contribSourceControlTitleMenu",
					},
					{
						key: "scm/resourceState/context",
						id: d.$XX.SCMResourceContext,
						description: (0, t.localize)(11969, null),
					},
					{
						key: "scm/resourceFolder/context",
						id: d.$XX.SCMResourceFolderContext,
						description: (0, t.localize)(11970, null),
					},
					{
						key: "scm/resourceGroup/context",
						id: d.$XX.SCMResourceGroupContext,
						description: (0, t.localize)(11971, null),
					},
					{
						key: "scm/change/title",
						id: d.$XX.SCMChangeContext,
						description: (0, t.localize)(11972, null),
					},
					{
						key: "scm/inputBox",
						id: d.$XX.SCMInputBox,
						description: (0, t.localize)(11973, null),
						proposed: "contribSourceControlInputBoxMenu",
					},
					{
						key: "scm/history/title",
						id: d.$XX.SCMHistoryTitle,
						description: (0, t.localize)(11974, null),
						proposed: "contribSourceControlHistoryTitleMenu",
					},
					{
						key: "scm/historyItemChanges/title",
						id: d.$XX.SCMChangesSeparator,
						description: (0, t.localize)(11975, null),
						proposed: "contribSourceControlHistoryItemChangesMenu",
					},
					{
						key: "scm/historyItem/context",
						id: d.$XX.SCMChangesContext,
						description: (0, t.localize)(11976, null),
						proposed: "contribSourceControlHistoryItemChangesMenu",
					},
					{
						key: "scm/incomingChanges",
						id: d.$XX.SCMIncomingChanges,
						description: (0, t.localize)(11977, null),
						proposed: "contribSourceControlHistoryItemGroupMenu",
					},
					{
						key: "scm/incomingChanges/context",
						id: d.$XX.SCMIncomingChangesContext,
						description: (0, t.localize)(11978, null),
						proposed: "contribSourceControlHistoryItemGroupMenu",
					},
					{
						key: "scm/outgoingChanges",
						id: d.$XX.SCMOutgoingChanges,
						description: (0, t.localize)(11979, null),
						proposed: "contribSourceControlHistoryItemGroupMenu",
					},
					{
						key: "scm/outgoingChanges/context",
						id: d.$XX.SCMOutgoingChangesContext,
						description: (0, t.localize)(11980, null),
						proposed: "contribSourceControlHistoryItemGroupMenu",
					},
					{
						key: "scm/incomingChanges/allChanges/context",
						id: d.$XX.SCMIncomingChangesAllChangesContext,
						description: (0, t.localize)(11981, null),
						proposed: "contribSourceControlHistoryItemMenu",
					},
					{
						key: "scm/incomingChanges/historyItem/context",
						id: d.$XX.SCMIncomingChangesHistoryItemContext,
						description: (0, t.localize)(11982, null),
						proposed: "contribSourceControlHistoryItemMenu",
					},
					{
						key: "scm/outgoingChanges/allChanges/context",
						id: d.$XX.SCMOutgoingChangesAllChangesContext,
						description: (0, t.localize)(11983, null),
						proposed: "contribSourceControlHistoryItemMenu",
					},
					{
						key: "scm/outgoingChanges/historyItem/context",
						id: d.$XX.SCMOutgoingChangesHistoryItemContext,
						description: (0, t.localize)(11984, null),
						proposed: "contribSourceControlHistoryItemMenu",
					},
					{
						key: "statusBar/remoteIndicator",
						id: d.$XX.StatusBarRemoteIndicatorMenu,
						description: (0, t.localize)(11985, null),
						supportsSubmenus: !1,
					},
					{
						key: "terminal/context",
						id: d.$XX.TerminalInstanceContext,
						description: (0, t.localize)(11986, null),
					},
					{
						key: "terminal/title/context",
						id: d.$XX.TerminalTabContext,
						description: (0, t.localize)(11987, null),
					},
					{
						key: "view/title",
						id: d.$XX.ViewTitle,
						description: (0, t.localize)(11988, null),
					},
					{
						key: "viewContainer/title",
						id: d.$XX.ViewContainerTitle,
						description: (0, t.localize)(11989, null),
						proposed: "contribViewContainerTitle",
					},
					{
						key: "view/item/context",
						id: d.$XX.ViewItemContext,
						description: (0, t.localize)(11990, null),
					},
					{
						key: "comments/comment/editorActions",
						id: d.$XX.CommentEditorActions,
						description: (0, t.localize)(11991, null),
						proposed: "contribCommentEditorActionsMenu",
					},
					{
						key: "comments/commentThread/title",
						id: d.$XX.CommentThreadTitle,
						description: (0, t.localize)(11992, null),
					},
					{
						key: "comments/commentThread/context",
						id: d.$XX.CommentThreadActions,
						description: (0, t.localize)(11993, null),
						supportsSubmenus: !1,
					},
					{
						key: "comments/commentThread/additionalActions",
						id: d.$XX.CommentThreadAdditionalActions,
						description: (0, t.localize)(11994, null),
						supportsSubmenus: !1,
						proposed: "contribCommentThreadAdditionalMenu",
					},
					{
						key: "comments/commentThread/title/context",
						id: d.$XX.CommentThreadTitleContext,
						description: (0, t.localize)(11995, null),
						proposed: "contribCommentPeekContext",
					},
					{
						key: "comments/comment/title",
						id: d.$XX.CommentTitle,
						description: (0, t.localize)(11996, null),
					},
					{
						key: "comments/comment/context",
						id: d.$XX.CommentActions,
						description: (0, t.localize)(11997, null),
						supportsSubmenus: !1,
					},
					{
						key: "comments/commentThread/comment/context",
						id: d.$XX.CommentThreadCommentContext,
						description: (0, t.localize)(11998, null),
						proposed: "contribCommentPeekContext",
					},
					{
						key: "commentsView/commentThread/context",
						id: d.$XX.CommentsViewThreadActions,
						description: (0, t.localize)(11999, null),
						proposed: "contribCommentsViewThreadMenus",
					},
					{
						key: "notebook/toolbar",
						id: d.$XX.NotebookToolbar,
						description: (0, t.localize)(12e3, null),
					},
					{
						key: "notebook/kernelSource",
						id: d.$XX.NotebookKernelSource,
						description: (0, t.localize)(12001, null),
						proposed: "notebookKernelSource",
					},
					{
						key: "notebook/cell/title",
						id: d.$XX.NotebookCellTitle,
						description: (0, t.localize)(12002, null),
					},
					{
						key: "notebook/cell/execute",
						id: d.$XX.NotebookCellExecute,
						description: (0, t.localize)(12003, null),
					},
					{
						key: "interactive/toolbar",
						id: d.$XX.InteractiveToolbar,
						description: (0, t.localize)(12004, null),
					},
					{
						key: "interactive/cell/title",
						id: d.$XX.InteractiveCellTitle,
						description: (0, t.localize)(12005, null),
					},
					{
						key: "issue/reporter",
						id: d.$XX.IssueReporter,
						description: (0, t.localize)(12006, null),
						proposed: "contribIssueReporter",
					},
					{
						key: "testing/item/context",
						id: d.$XX.TestItem,
						description: (0, t.localize)(12007, null),
					},
					{
						key: "testing/item/gutter",
						id: d.$XX.TestItemGutter,
						description: (0, t.localize)(12008, null),
					},
					{
						key: "testing/profiles/context",
						id: d.$XX.TestProfilesContext,
						description: (0, t.localize)(12009, null),
					},
					{
						key: "testing/item/result",
						id: d.$XX.TestPeekElement,
						description: (0, t.localize)(12010, null),
					},
					{
						key: "testing/message/context",
						id: d.$XX.TestMessageContext,
						description: (0, t.localize)(12011, null),
					},
					{
						key: "testing/message/content",
						id: d.$XX.TestMessageContent,
						description: (0, t.localize)(12012, null),
					},
					{
						key: "extension/context",
						id: d.$XX.ExtensionContext,
						description: (0, t.localize)(12013, null),
					},
					{
						key: "timeline/title",
						id: d.$XX.TimelineTitle,
						description: (0, t.localize)(12014, null),
					},
					{
						key: "timeline/item/context",
						id: d.$XX.TimelineItemContext,
						description: (0, t.localize)(12015, null),
					},
					{
						key: "ports/item/context",
						id: d.$XX.TunnelContext,
						description: (0, t.localize)(12016, null),
					},
					{
						key: "ports/item/origin/inline",
						id: d.$XX.TunnelOriginInline,
						description: (0, t.localize)(12017, null),
					},
					{
						key: "ports/item/port/inline",
						id: d.$XX.TunnelPortInline,
						description: (0, t.localize)(12018, null),
					},
					{
						key: "file/newFile",
						id: d.$XX.NewFile,
						description: (0, t.localize)(12019, null),
						supportsSubmenus: !1,
					},
					{
						key: "webview/context",
						id: d.$XX.WebviewContext,
						description: (0, t.localize)(12020, null),
					},
					{
						key: "file/share",
						id: d.$XX.MenubarShare,
						description: (0, t.localize)(12021, null),
						proposed: "contribShareMenu",
					},
					{
						key: "editor/inlineCompletions/actions",
						id: d.$XX.InlineCompletionsActions,
						description: (0, t.localize)(12022, null),
						supportsSubmenus: !1,
						proposed: "inlineCompletionsAdditions",
					},
					{
						key: "editor/inlineEdit/actions",
						id: d.$XX.InlineEditActions,
						description: (0, t.localize)(12023, null),
						supportsSubmenus: !1,
						proposed: "inlineEdit",
					},
					{
						key: "editor/content",
						id: d.$XX.EditorContent,
						description: (0, t.localize)(12024, null),
						proposed: "contribEditorContentMenu",
					},
					{
						key: "editor/lineNumber/context",
						id: d.$XX.EditorLineNumberContext,
						description: (0, t.localize)(12025, null),
					},
					{
						key: "mergeEditor/result/title",
						id: d.$XX.MergeInputResultToolbar,
						description: (0, t.localize)(12026, null),
						proposed: "contribMergeEditorMenus",
					},
					{
						key: "multiDiffEditor/resource/title",
						id: d.$XX.MultiDiffEditorFileToolbar,
						description: (0, t.localize)(12027, null),
						proposed: "contribMultiDiffEditorMenus",
					},
					{
						key: "diffEditor/gutter/hunk",
						id: d.$XX.DiffEditorHunkToolbar,
						description: (0, t.localize)(12028, null),
						proposed: "contribDiffEditorGutterToolBarMenus",
					},
					{
						key: "diffEditor/gutter/selection",
						id: d.$XX.DiffEditorSelectionToolbar,
						description: (0, t.localize)(12029, null),
						proposed: "contribDiffEditorGutterToolBarMenus",
					},
				];
				var b;
				(function (P) {
					function k(x) {
						return typeof x.command == "string";
					}
					P.isMenuItem = k;
					function L(x, H) {
						return typeof x.command != "string"
							? (H.error((0, t.localize)(12030, null, "command")), !1)
							: x.alt && typeof x.alt != "string"
								? (H.error((0, t.localize)(12031, null, "alt")), !1)
								: x.when && typeof x.when != "string"
									? (H.error((0, t.localize)(12032, null, "when")), !1)
									: x.group && typeof x.group != "string"
										? (H.error((0, t.localize)(12033, null, "group")), !1)
										: !0;
					}
					P.isValidMenuItem = L;
					function D(x, H) {
						return typeof x.submenu != "string"
							? (H.error((0, t.localize)(12034, null, "submenu")), !1)
							: x.when && typeof x.when != "string"
								? (H.error((0, t.localize)(12035, null, "when")), !1)
								: x.group && typeof x.group != "string"
									? (H.error((0, t.localize)(12036, null, "group")), !1)
									: !0;
					}
					P.isValidSubmenuItem = D;
					function M(x, H) {
						if (!Array.isArray(x))
							return H.error((0, t.localize)(12037, null)), !1;
						for (const q of x)
							if (k(q)) {
								if (!L(q, H)) return !1;
							} else if (!D(q, H)) return !1;
						return !0;
					}
					P.isValidItems = M;
					function N(x, H) {
						return typeof x != "object"
							? (H.error((0, t.localize)(12038, null)), !1)
							: typeof x.id != "string"
								? (H.error((0, t.localize)(12039, null, "id")), !1)
								: typeof x.label != "string"
									? (H.error((0, t.localize)(12040, null, "label")), !1)
									: !0;
					}
					P.isValidSubmenu = N;
					const A = {
							type: "object",
							required: ["command"],
							properties: {
								command: {
									description: (0, t.localize)(12041, null),
									type: "string",
								},
								alt: {
									description: (0, t.localize)(12042, null),
									type: "string",
								},
								when: {
									description: (0, t.localize)(12043, null),
									type: "string",
								},
								group: {
									description: (0, t.localize)(12044, null),
									type: "string",
								},
							},
						},
						R = {
							type: "object",
							required: ["submenu"],
							properties: {
								submenu: {
									description: (0, t.localize)(12045, null),
									type: "string",
								},
								when: {
									description: (0, t.localize)(12046, null),
									type: "string",
								},
								group: {
									description: (0, t.localize)(12047, null),
									type: "string",
								},
							},
						},
						O = {
							type: "object",
							required: ["id", "label"],
							properties: {
								id: {
									description: (0, t.localize)(12048, null),
									type: "string",
								},
								label: {
									description: (0, t.localize)(12049, null),
									type: "string",
								},
								icon: {
									description: (0, t.localize)(12050, null),
									anyOf: [
										{ type: "string" },
										{
											type: "object",
											properties: {
												light: {
													description: (0, t.localize)(12051, null),
													type: "string",
												},
												dark: {
													description: (0, t.localize)(12052, null),
													type: "string",
												},
											},
										},
									],
								},
							},
						};
					(P.menusContribution = {
						description: (0, t.localize)(12053, null),
						type: "object",
						properties: (0, u.$Wb)(
							f,
							(x) => x.key,
							(x) => ({
								markdownDescription: x.proposed
									? (0, t.localize)(12054, null, x.proposed, x.description)
									: x.description,
								type: "array",
								items: x.supportsSubmenus === !1 ? A : { oneOf: [A, R] },
							}),
						),
						additionalProperties: {
							description: "Submenu",
							type: "array",
							items: { oneOf: [A, R] },
						},
					}),
						(P.submenusContribution = {
							description: (0, t.localize)(12055, null),
							type: "array",
							items: O,
						});
					function B(x, H) {
						return x
							? (0, i.$jf)(x.command)
								? (H.error((0, t.localize)(12057, null, "command")), !1)
								: !z(x.title, H, "title") ||
										(x.shortTitle && !z(x.shortTitle, H, "shortTitle"))
									? !1
									: x.enablement && typeof x.enablement != "string"
										? (H.error((0, t.localize)(12058, null, "precondition")),
											!1)
										: !(
												(x.category && !z(x.category, H, "category")) ||
												!U(x.icon, H)
											)
							: (H.error((0, t.localize)(12056, null)), !1);
					}
					P.isValidCommand = B;
					function U(x, H) {
						return typeof x > "u" ||
							typeof x == "string" ||
							(typeof x.dark == "string" && typeof x.light == "string")
							? !0
							: (H.error((0, t.localize)(12059, null)), !1);
					}
					function z(x, H, q) {
						return typeof x > "u"
							? (H.error((0, t.localize)(12060, null, q)), !1)
							: typeof x == "string" && (0, i.$jf)(x)
								? (H.error((0, t.localize)(12061, null, q)), !1)
								: typeof x != "string" &&
										((0, i.$jf)(x.original) || (0, i.$jf)(x.value))
									? (H.error(
											(0, t.localize)(
												12062,
												null,
												`${q}.value`,
												`${q}.original`,
											),
										),
										!1)
									: !0;
					}
					const F = {
						type: "object",
						required: ["command", "title"],
						properties: {
							command: {
								description: (0, t.localize)(12063, null),
								type: "string",
							},
							title: {
								description: (0, t.localize)(12064, null),
								type: "string",
							},
							shortTitle: {
								markdownDescription: (0, t.localize)(12065, null),
								type: "string",
							},
							category: {
								description: (0, t.localize)(12066, null),
								type: "string",
							},
							enablement: {
								description: (0, t.localize)(12067, null),
								type: "string",
							},
							icon: {
								description: (0, t.localize)(12068, null),
								anyOf: [
									{ type: "string" },
									{
										type: "object",
										properties: {
											light: {
												description: (0, t.localize)(12069, null),
												type: "string",
											},
											dark: {
												description: (0, t.localize)(12070, null),
												type: "string",
											},
										},
									},
								],
							},
						},
					};
					P.commandsContribution = {
						description: (0, t.localize)(12071, null),
						oneOf: [F, { type: "array", items: F }],
					};
				})(b || (b = {}));
				const s = new m.$Zc();
				(e.$Mtc = E.$n2.registerExtensionPoint({
					extensionPoint: "commands",
					jsonSchema: b.commandsContribution,
					activationEventsGenerator: (P, k) => {
						for (const L of P) L.command && k.push(`onCommand:${L.command}`);
					},
				})),
					e.$Mtc.setHandler((P) => {
						function k(L, D) {
							if (!b.isValidCommand(L, D.collector)) return;
							const {
								icon: M,
								enablement: N,
								category: A,
								title: R,
								shortTitle: O,
								command: B,
							} = L;
							let U;
							M &&
								(typeof M == "string"
									? (U = r.ThemeIcon.fromString(M) ?? {
											dark: w.$nh(D.description.extensionLocation, M),
											light: w.$nh(D.description.extensionLocation, M),
										})
									: (U = {
											dark: w.$nh(D.description.extensionLocation, M.dark),
											light: w.$nh(D.description.extensionLocation, M.light),
										}));
							const z = d.$ZX.getCommand(B);
							z &&
								(z.source
									? D.collector.info(
											(0, t.localize)(
												12072,
												null,
												L.command,
												z.source.title,
												z.source.id,
											),
										)
									: D.collector.info((0, t.localize)(12073, null, L.command))),
								s.add(
									d.$ZX.addCommand({
										id: B,
										title: R,
										source: {
											id: D.description.identifier.value,
											title: D.description.displayName ?? D.description.name,
										},
										shortTitle: O,
										tooltip: R,
										category: A,
										precondition: C.$Kj.deserialize(N),
										icon: U,
									}),
								);
						}
						s.clear();
						for (const L of P) {
							const { value: D } = L;
							if (Array.isArray(D)) for (const M of D) k(M, L);
							else k(D, L);
						}
					});
				const l = new Map(),
					y = E.$n2.registerExtensionPoint({
						extensionPoint: "submenus",
						jsonSchema: b.submenusContribution,
					});
				y.setHandler((P) => {
					l.clear();
					for (const k of P) {
						const { value: L, collector: D } = k;
						for (const [, M] of Object.entries(L)) {
							if (!b.isValidSubmenu(M, D)) continue;
							if (!M.id) {
								D.warn((0, t.localize)(12074, null, M.id));
								continue;
							}
							if (l.has(M.id)) {
								D.info((0, t.localize)(12075, null, M.id));
								continue;
							}
							if (!M.label) {
								D.warn((0, t.localize)(12076, null, M.label));
								continue;
							}
							let N;
							M.icon &&
								(typeof M.icon == "string"
									? (N = r.ThemeIcon.fromString(M.icon) || {
											dark: w.$nh(k.description.extensionLocation, M.icon),
										})
									: (N = {
											dark: w.$nh(k.description.extensionLocation, M.icon.dark),
											light: w.$nh(
												k.description.extensionLocation,
												M.icon.light,
											),
										}));
							const A = {
								id: d.$XX.for(`api:${M.id}`),
								label: M.label,
								icon: N,
							};
							l.set(M.id, A);
						}
					}
				});
				const $ = new Map(f.map((P) => [P.key, P])),
					v = new m.$Zc(),
					S = new Map();
				E.$n2
					.registerExtensionPoint({
						extensionPoint: "menus",
						jsonSchema: b.menusContribution,
						deps: [y],
					})
					.setHandler((P) => {
						v.clear(), S.clear();
						for (const k of P) {
							const { value: L, collector: D } = k;
							for (const M of Object.entries(L)) {
								if (!b.isValidItems(M[1], D)) continue;
								let N = $.get(M[0]);
								if (!N) {
									const A = l.get(M[0]);
									A && (N = { key: M[0], id: A.id, description: "" });
								}
								if (N) {
									if (N.proposed && !(0, a.$t2)(k.description, N.proposed)) {
										D.error(
											(0, t.localize)(
												12077,
												null,
												M[0],
												N.proposed,
												k.description.identifier.value,
											),
										);
										continue;
									}
									for (const A of M[1]) {
										let R;
										if (b.isMenuItem(A)) {
											const O = d.$ZX.getCommand(A.command),
												B = (A.alt && d.$ZX.getCommand(A.alt)) || void 0;
											if (!O) {
												D.error((0, t.localize)(12078, null, A.command));
												continue;
											}
											A.alt &&
												!B &&
												D.warn((0, t.localize)(12079, null, A.alt)),
												A.command === A.alt &&
													D.info((0, t.localize)(12080, null)),
												(R = {
													command: O,
													alt: B,
													group: void 0,
													order: void 0,
													when: void 0,
												});
										} else {
											if (N.supportsSubmenus === !1) {
												D.error((0, t.localize)(12081, null));
												continue;
											}
											const O = l.get(A.submenu);
											if (!O) {
												D.error((0, t.localize)(12082, null, A.submenu));
												continue;
											}
											let B = S.get(N.id.id);
											if (
												(B || ((B = new Set()), S.set(N.id.id, B)),
												B.has(O.id.id))
											) {
												D.warn((0, t.localize)(12083, null, A.submenu, M[0]));
												continue;
											}
											B.add(O.id.id),
												(R = {
													submenu: O.id,
													icon: O.icon,
													title: O.label,
													group: void 0,
													order: void 0,
													when: void 0,
												});
										}
										if (A.group) {
											const O = A.group.lastIndexOf("@");
											O > 0
												? ((R.group = A.group.substr(0, O)),
													(R.order = Number(A.group.substr(O + 1)) || void 0))
												: (R.group = A.group);
										}
										if (
											N.id === d.$XX.ViewContainerTitle &&
											!A.when?.includes("viewContainer == workbench.view.debug")
										) {
											D.error(
												(0, t.localize)(
													12084,
													null,
													"`viewContainer/title`",
													"`viewContainer == workbench.view.debug`",
													'"when"',
												),
											);
											continue;
										}
										(R.when = C.$Kj.deserialize(A.when)),
											v.add(d.$ZX.appendMenuItem(N.id, R));
									}
								}
							}
						}
					});
				let T = class extends m.$1c {
					constructor(k) {
						super(), (this.f = k), (this.type = "table");
					}
					shouldRender(k) {
						return !!k.contributes?.commands;
					}
					render(k) {
						const D = (k.contributes?.commands || []).map((B) => ({
								id: B.command,
								title: B.title,
								keybindings: [],
								menus: [],
							})),
							M = (0, u.$Wb)(D, (B) => B.id),
							N = k.contributes?.menus || {};
						for (const B in N)
							for (const U of N[B])
								if (U.command) {
									let z = M[U.command];
									z
										? z.menus.push(B)
										: ((z = {
												id: U.command,
												title: "",
												keybindings: [],
												menus: [B],
											}),
											(M[z.id] = z),
											D.push(z));
								}
						if (
							((k.contributes?.keybindings
								? Array.isArray(k.contributes.keybindings)
									? k.contributes.keybindings
									: [k.contributes.keybindings]
								: []
							).forEach((B) => {
								const U = this.g(B);
								if (!U) return;
								let z = M[B.command];
								z
									? z.keybindings.push(U)
									: ((z = {
											id: B.command,
											title: "",
											keybindings: [U],
											menus: [],
										}),
										(M[z.id] = z),
										D.push(z));
							}),
							!D.length)
						)
							return { data: { headers: [], rows: [] }, dispose: () => {} };
						const R = [
								(0, t.localize)(12085, null),
								(0, t.localize)(12086, null),
								(0, t.localize)(12087, null),
								(0, t.localize)(12088, null),
							],
							O = D.sort((B, U) => B.id.localeCompare(U.id)).map((B) => [
								new p.$cl().appendMarkdown(`\`${B.id}\``),
								typeof B.title == "string" ? B.title : B.title.value,
								B.keybindings,
								new p.$cl().appendMarkdown(
									`${B.menus.map((U) => `\`${U}\``).join("&nbsp;")}`,
								),
							]);
						return { data: { headers: R, rows: O }, dispose: () => {} };
					}
					g(k) {
						let L;
						switch (g.$ic) {
							case "win32":
								L = k.win;
								break;
							case "linux":
								L = k.linux;
								break;
							case "darwin":
								L = k.mac;
								break;
						}
						return this.f.resolveUserBinding(L ?? k.key)[0];
					}
				};
				(T = Ne([j(0, o.$uZ)], T)),
					c.$Io
						.as(h.Extensions.ExtensionFeaturesRegistry)
						.registerExtensionFeature({
							id: "commands",
							label: (0, t.localize)(12089, null),
							access: { canToggle: !1 },
							renderer: new n.$Ji(T),
						});
			},
		),
		