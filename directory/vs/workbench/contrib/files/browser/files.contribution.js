define(
			de[4301],
			he([
				1, 0, 4, 54, 30, 81, 55, 44, 22, 220, 3855, 1882, 844, 3864, 102, 12,
				864, 192, 73, 20, 3687, 842, 23, 3388, 602, 3866, 46, 155, 382, 3885,
				172, 10, 3865,
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
				Object.defineProperty(e, "__esModule", { value: !0 }), (t = mt(t));
				let N = class {
					static {
						this.ID = "workbench.contrib.fileUriLabel";
					}
					constructor(B) {
						B.registerFormatter({
							scheme: y.Schemas.file,
							formatting: {
								label: "${authority}${path}",
								separator: i.sep,
								tildify: !g.$l,
								normalizeDriveLetter: g.$l,
								authorityPrefix: i.sep + i.sep,
								workspaceSuffix: "",
							},
						});
					}
				};
				(N = Ne([j(0, f.$3N)], N)),
					(0, b.$lK)(P.$LWb, s.$4Mc, b.InstantiationType.Delayed),
					w.$Io
						.as(d.$a1.EditorPane)
						.registerEditorPane(
							o.$vVb.create(M.$oec, M.$oec.ID, t.localize(6873, null)),
							[new n.$Ji(h.$nec)],
						),
					w.$Io
						.as(d.$a1.EditorPane)
						.registerEditorPane(
							o.$vVb.create(c.$2Mc, c.$2Mc.ID, t.localize(6874, null)),
							[new n.$Ji(h.$nec)],
						),
					w.$Io
						.as(d.$a1.EditorFactory)
						.registerFileEditorFactory({
							typeId: r.$QUb,
							createFileEditor: (O, B, U, z, F, x, H, q) =>
								q.createInstance(h.$nec, O, B, U, z, F, x, H),
							isFileEditor: (O) => O instanceof h.$nec,
						}),
					w.$Io
						.as(d.$a1.EditorFactory)
						.registerEditorSerializer(r.$QUb, k.$7Mc),
					(0, C.$s6)(k.$8Mc.ID, k.$8Mc, C.WorkbenchPhase.BlockRestore),
					(0, C.$s6)(p.$qAc.ID, p.$qAc, C.WorkbenchPhase.BlockStartup),
					(0, C.$s6)(u.$1Mc.ID, u.$1Mc, C.WorkbenchPhase.BlockStartup),
					(0, C.$s6)(a.$TMc.ID, a.$TMc, C.WorkbenchPhase.BlockStartup),
					(0, C.$s6)(N.ID, N, C.WorkbenchPhase.BlockStartup),
					(0, C.$s6)($.$5Mc.ID, $.$5Mc, C.WorkbenchPhase.AfterRestored),
					(0, C.$s6)(S.$6Mc.ID, S.$6Mc, C.WorkbenchPhase.BlockStartup);
				const A = w.$Io.as(E.$No.Configuration),
					R = g.$p
						? {
								type: "string",
								scope: E.ConfigurationScope.APPLICATION,
								enum: [
									m.$Kl.OFF,
									m.$Kl.ON_EXIT,
									m.$Kl.ON_EXIT_AND_WINDOW_CLOSE,
								],
								default: m.$Kl.ON_EXIT,
								markdownEnumDescriptions: [
									t.localize(6875, null),
									t.localize(6876, null),
									t.localize(6877, null),
								],
								markdownDescription: t.localize(
									6878,
									null,
									m.$Kl.ON_EXIT,
									m.$Kl.ON_EXIT_AND_WINDOW_CLOSE,
								),
							}
						: {
								type: "string",
								scope: E.ConfigurationScope.APPLICATION,
								enum: [m.$Kl.OFF, m.$Kl.ON_EXIT_AND_WINDOW_CLOSE],
								default: m.$Kl.ON_EXIT_AND_WINDOW_CLOSE,
								markdownEnumDescriptions: [
									t.localize(6879, null),
									t.localize(6880, null),
								],
								markdownDescription: t.localize(
									6881,
									null,
									m.$Kl.ON_EXIT,
									m.$Kl.ON_EXIT_AND_WINDOW_CLOSE,
								),
							};
				A.registerConfiguration({
					id: "files",
					order: 9,
					title: t.localize(6882, null),
					type: "object",
					properties: {
						[m.$Ml]: {
							type: "object",
							markdownDescription: t.localize(6883, null),
							default: {
								"**/.git": !0,
								"**/.svn": !0,
								"**/.hg": !0,
								"**/CVS": !0,
								"**/.DS_Store": !0,
								"**/Thumbs.db": !0,
								...(g.$r ? { "**/*.crswap": !0 } : void 0),
							},
							scope: E.ConfigurationScope.RESOURCE,
							additionalProperties: {
								anyOf: [
									{
										type: "boolean",
										enum: [!0, !1],
										enumDescriptions: [
											t.localize(6884, null),
											t.localize(6885, null),
										],
										description: t.localize(6886, null),
									},
									{
										type: "object",
										properties: {
											when: {
												type: "string",
												pattern: "\\w*\\$\\(basename\\)\\w*",
												default: "$(basename).ext",
												markdownDescription: t.localize(6887, null),
											},
										},
									},
								],
							},
						},
						[m.$Ll]: {
							type: "object",
							markdownDescription: t.localize(6888, null),
							additionalProperties: { type: "string" },
						},
						"files.encoding": {
							type: "string",
							enum: Object.keys(l.$4Y),
							default: "utf8",
							description: t.localize(6889, null),
							scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
							enumDescriptions: Object.keys(l.$4Y).map(
								(O) => l.$4Y[O].labelLong,
							),
							enumItemLabels: Object.keys(l.$4Y).map((O) => l.$4Y[O].labelLong),
						},
						"files.autoGuessEncoding": {
							type: "boolean",
							default: !1,
							markdownDescription: t.localize(6890, null, "`#files.encoding#`"),
							scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
						},
						"files.candidateGuessEncodings": {
							type: "array",
							items: {
								type: "string",
								enum: Object.keys(l.$5Y),
								enumDescriptions: Object.keys(l.$5Y).map(
									(O) => l.$5Y[O].labelLong,
								),
							},
							default: [],
							markdownDescription: t.localize(6891, null, "`#files.encoding#`"),
							scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
						},
						"files.eol": {
							type: "string",
							enum: [
								`
`,
								`\r
`,
								"auto",
							],
							enumDescriptions: [
								t.localize(6892, null),
								t.localize(6893, null),
								t.localize(6894, null),
							],
							default: "auto",
							description: t.localize(6895, null),
							scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
						},
						"files.enableTrash": {
							type: "boolean",
							default: !0,
							description: t.localize(6896, null),
						},
						"files.trimTrailingWhitespace": {
							type: "boolean",
							default: !1,
							description: t.localize(6897, null),
							scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
						},
						"files.trimTrailingWhitespaceInRegexAndStrings": {
							type: "boolean",
							default: !0,
							description: t.localize(6898, null),
							scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
						},
						"files.insertFinalNewline": {
							type: "boolean",
							default: !1,
							description: t.localize(6899, null),
							scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
						},
						"files.trimFinalNewlines": {
							type: "boolean",
							default: !1,
							description: t.localize(6900, null),
							scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
						},
						"files.autoSave": {
							type: "string",
							enum: [
								m.$Jl.OFF,
								m.$Jl.AFTER_DELAY,
								m.$Jl.ON_FOCUS_CHANGE,
								m.$Jl.ON_WINDOW_CHANGE,
							],
							markdownEnumDescriptions: [
								t.localize(6901, null),
								t.localize(6902, null),
								t.localize(6903, null),
								t.localize(6904, null),
							],
							default: g.$r ? m.$Jl.AFTER_DELAY : m.$Jl.OFF,
							markdownDescription: t.localize(
								6905,
								null,
								m.$Jl.OFF,
								m.$Jl.AFTER_DELAY,
								m.$Jl.ON_FOCUS_CHANGE,
								m.$Jl.ON_WINDOW_CHANGE,
								m.$Jl.AFTER_DELAY,
							),
							scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
						},
						"files.autoSaveDelay": {
							type: "number",
							default: 1e3,
							minimum: 0,
							markdownDescription: t.localize(6906, null, m.$Jl.AFTER_DELAY),
							scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
						},
						"files.autoSaveWorkspaceFilesOnly": {
							type: "boolean",
							default: !1,
							markdownDescription: t.localize(6907, null, "`#files.autoSave#`"),
							scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
						},
						"files.autoSaveWhenNoErrors": {
							type: "boolean",
							default: !1,
							markdownDescription: t.localize(6908, null, "`#files.autoSave#`"),
							scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
						},
						"files.watcherExclude": {
							type: "object",
							patternProperties: { ".*": { type: "boolean" } },
							default: {
								"**/.git/objects/**": !0,
								"**/.git/subtree-cache/**": !0,
								"**/.hg/store/**": !0,
							},
							markdownDescription: t.localize(6909, null),
							scope: E.ConfigurationScope.RESOURCE,
						},
						"files.watcherInclude": {
							type: "array",
							items: { type: "string" },
							default: [],
							description: t.localize(6910, null),
							scope: E.ConfigurationScope.RESOURCE,
						},
						"files.hotExit": R,
						"files.defaultLanguage": {
							type: "string",
							markdownDescription: t.localize(6911, null),
						},
						[m.$Nl]: {
							type: "object",
							patternProperties: { ".*": { type: "boolean" } },
							default: {},
							markdownDescription: t.localize(6912, null),
							scope: E.ConfigurationScope.RESOURCE,
						},
						[m.$Ol]: {
							type: "object",
							patternProperties: { ".*": { type: "boolean" } },
							default: {},
							markdownDescription: t.localize(6913, null),
							scope: E.ConfigurationScope.RESOURCE,
						},
						[m.$Pl]: {
							type: "boolean",
							markdownDescription: t.localize(6914, null),
							default: !1,
						},
						"files.restoreUndoStack": {
							type: "boolean",
							description: t.localize(6915, null),
							default: !0,
						},
						"files.saveConflictResolution": {
							type: "string",
							enum: ["askUser", "overwriteFileOnDisk"],
							enumDescriptions: [
								t.localize(6916, null),
								t.localize(6917, null),
							],
							description: t.localize(6918, null),
							default: "askUser",
							scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
						},
						"files.dialog.defaultPath": {
							type: "string",
							pattern: "^((\\/|\\\\\\\\|[a-zA-Z]:\\\\).*)?$",
							patternErrorMessage: t.localize(6919, null),
							description: t.localize(6920, null),
							scope: E.ConfigurationScope.MACHINE,
						},
						"files.simpleDialog.enable": {
							type: "boolean",
							description: t.localize(6921, null),
							default: !1,
						},
						"files.participants.timeout": {
							type: "number",
							default: 6e4,
							markdownDescription: t.localize(6922, null),
						},
					},
				}),
					A.registerConfiguration({
						...v.$DAb,
						properties: {
							"editor.formatOnSave": {
								type: "boolean",
								description: t.localize(6923, null),
								scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
							},
							"editor.formatOnSaveMode": {
								type: "string",
								default: "file",
								enum: ["file", "modifications", "modificationsIfAvailable"],
								enumDescriptions: [
									t.localize(6924, null),
									t.localize(6925, null),
									t.localize(6926, null),
								],
								markdownDescription: t.localize(6927, null),
								scope: E.ConfigurationScope.LANGUAGE_OVERRIDABLE,
							},
						},
					}),
					A.registerConfiguration({
						id: "explorer",
						order: 10,
						title: t.localize(6928, null),
						type: "object",
						properties: {
							"explorer.openEditors.visible": {
								type: "number",
								description: t.localize(6929, null),
								default: 9,
								minimum: 1,
							},
							"explorer.openEditors.minVisible": {
								type: "number",
								description: t.localize(6930, null),
								default: 0,
								minimum: 0,
							},
							"explorer.openEditors.sortOrder": {
								type: "string",
								enum: ["editorOrder", "alphabetical", "fullPath"],
								description: t.localize(6931, null),
								enumDescriptions: [
									t.localize(6932, null),
									t.localize(6933, null),
									t.localize(6934, null),
								],
								default: "editorOrder",
							},
							"explorer.autoReveal": {
								type: ["boolean", "string"],
								enum: [!0, !1, "focusNoScroll"],
								default: !0,
								enumDescriptions: [
									t.localize(6935, null),
									t.localize(6936, null),
									t.localize(6937, null),
								],
								description: t.localize(6938, null),
							},
							"explorer.autoRevealExclude": {
								type: "object",
								markdownDescription: t.localize(6939, null),
								default: { "**/node_modules": !0, "**/bower_components": !0 },
								additionalProperties: {
									anyOf: [
										{ type: "boolean", description: t.localize(6940, null) },
										{
											type: "object",
											properties: {
												when: {
													type: "string",
													pattern: "\\w*\\$\\(basename\\)\\w*",
													default: "$(basename).ext",
													description: t.localize(6941, null),
												},
											},
										},
									],
								},
							},
							"explorer.enableDragAndDrop": {
								type: "boolean",
								description: t.localize(6942, null),
								default: !0,
							},
							"explorer.confirmDragAndDrop": {
								type: "boolean",
								description: t.localize(6943, null),
								default: !0,
							},
							"explorer.confirmPasteNative": {
								type: "boolean",
								description: t.localize(6944, null),
								default: !0,
							},
							"explorer.confirmDelete": {
								type: "boolean",
								description: t.localize(6945, null),
								default: !0,
							},
							"explorer.enableUndo": {
								type: "boolean",
								description: t.localize(6946, null),
								default: !0,
							},
							"explorer.confirmUndo": {
								type: "string",
								enum: [
									r.UndoConfirmLevel.Verbose,
									r.UndoConfirmLevel.Default,
									r.UndoConfirmLevel.Light,
								],
								description: t.localize(6947, null),
								default: r.UndoConfirmLevel.Default,
								enumDescriptions: [
									t.localize(6948, null),
									t.localize(6949, null),
									t.localize(6950, null),
								],
							},
							"explorer.expandSingleFolderWorkspaces": {
								type: "boolean",
								description: t.localize(6951, null),
								default: !0,
							},
							"explorer.sortOrder": {
								type: "string",
								enum: [
									r.SortOrder.Default,
									r.SortOrder.Mixed,
									r.SortOrder.FilesFirst,
									r.SortOrder.Type,
									r.SortOrder.Modified,
									r.SortOrder.FoldersNestsFiles,
								],
								default: r.SortOrder.Default,
								enumDescriptions: [
									t.localize(6952, null),
									t.localize(6953, null),
									t.localize(6954, null),
									t.localize(6955, null),
									t.localize(6956, null),
									t.localize(6957, null),
								],
								markdownDescription: t.localize(6958, null),
							},
							"explorer.sortOrderLexicographicOptions": {
								type: "string",
								enum: [
									r.LexicographicOptions.Default,
									r.LexicographicOptions.Upper,
									r.LexicographicOptions.Lower,
									r.LexicographicOptions.Unicode,
								],
								default: r.LexicographicOptions.Default,
								enumDescriptions: [
									t.localize(6959, null),
									t.localize(6960, null),
									t.localize(6961, null),
									t.localize(6962, null),
								],
								description: t.localize(6963, null),
							},
							"explorer.sortOrderReverse": {
								type: "boolean",
								description: t.localize(6964, null),
								default: !1,
							},
							"explorer.decorations.colors": {
								type: "boolean",
								description: t.localize(6965, null),
								default: !0,
							},
							"explorer.decorations.badges": {
								type: "boolean",
								description: t.localize(6966, null),
								default: !0,
							},
							"explorer.incrementalNaming": {
								type: "string",
								enum: ["simple", "smart", "disabled"],
								enumDescriptions: [
									t.localize(6967, null),
									t.localize(6968, null),
									t.localize(6969, null),
								],
								description: t.localize(6970, null),
								default: "simple",
							},
							"explorer.autoOpenDroppedFile": {
								type: "boolean",
								description: t.localize(6971, null),
								default: !0,
							},
							"explorer.compactFolders": {
								type: "boolean",
								description: t.localize(6972, null),
								default: !0,
							},
							"explorer.copyRelativePathSeparator": {
								type: "string",
								enum: ["/", "\\", "auto"],
								enumDescriptions: [
									t.localize(6973, null),
									t.localize(6974, null),
									t.localize(6975, null),
								],
								description: t.localize(6976, null),
								default: "auto",
							},
							"explorer.excludeGitIgnore": {
								type: "boolean",
								markdownDescription: t.localize(
									6977,
									null,
									"`#files.exclude#`",
								),
								default: !1,
								scope: E.ConfigurationScope.RESOURCE,
							},
							"explorer.fileNesting.enabled": {
								type: "boolean",
								scope: E.ConfigurationScope.RESOURCE,
								markdownDescription: t.localize(6978, null),
								default: !1,
							},
							"explorer.fileNesting.expand": {
								type: "boolean",
								markdownDescription: t.localize(
									6979,
									null,
									"`#explorer.fileNesting.enabled#`",
								),
								default: !0,
							},
							"explorer.fileNesting.patterns": {
								type: "object",
								scope: E.ConfigurationScope.RESOURCE,
								markdownDescription: t.localize(
									6980,
									null,
									"`#explorer.fileNesting.enabled#`",
								),
								patternProperties: {
									"^[^*]*\\*?[^*]*$": {
										markdownDescription: t.localize(6981, null),
										type: "string",
										pattern: "^([^,*]*\\*?[^,*]*)(, ?[^,*]*\\*?[^,*]*)*$",
									},
								},
								additionalProperties: !1,
								default: {
									"*.ts": "${capture}.js",
									"*.js":
										"${capture}.js.map, ${capture}.min.js, ${capture}.d.ts",
									"*.jsx": "${capture}.js",
									"*.tsx": "${capture}.ts",
									"tsconfig.json": "tsconfig.*.json",
									"package.json":
										"package-lock.json, yarn.lock, pnpm-lock.yaml, bun.lockb",
								},
							},
						},
					}),
					I.$stb.addImplementation(110, "explorer", (O) => {
						const B = O.get(T.$GN),
							U = O.get(P.$LWb),
							F = O.get(D.$gj).getValue().explorer.enableUndo;
						return U.hasViewFocus() && B.canUndo(s.$3Mc) && F
							? (B.undo(s.$3Mc), !0)
							: !1;
					}),
					I.$ttb.addImplementation(110, "explorer", (O) => {
						const B = O.get(T.$GN),
							U = O.get(P.$LWb),
							F = O.get(D.$gj).getValue().explorer.enableUndo;
						return U.hasViewFocus() && B.canRedo(s.$3Mc) && F
							? (B.redo(s.$3Mc), !0)
							: !1;
					}),
					L.$9M.registerLanguage({
						id: r.$SUb,
						aliases: ["Binary"],
						mimetypes: ["text/x-code-binary"],
					});
			},
		),
		