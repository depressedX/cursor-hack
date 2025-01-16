define(de[169], he([1, 0, 167, 14, 58, 27]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ENABLED_BETTER_MARKDOWN_PARSING =
					e.COMPOSER_STREAM_CHUNK_TIMEOUT_MS =
					e.COMPOSER_STREAM_RETRY_MAX_ATTEMPTS =
					e.FIX_ERROR_IN_COMPOSER_DEFAULT_KEYBINDING =
					e.FIX_ERROR_IN_CHAT_DEFAULT_KEYBINDING =
					e.DEBUG_WITH_AI_DEFAULT_KEYBINDING =
					e.INSERT_SELECTION_INTO_CHAT_DEFAULT_KEYBINDING =
					e.NEW_CHAT_DEFAULT_KEYBINDING =
					e.COMPOSER_EDIT_DEFAULT_KEYBINDING =
					e.COMPOSER_EXPANDED_BLOCK_TOOLS =
					e.DEBUG_WITH_AI_ACTION_ID =
					e.COMPOSER_PROJECTS_REACTIVE_STORAGE_ID =
					e.COMPOSER_CHAT_VIEW_PANE_STORAGE_ID =
					e.COMPOSER_CHAT_VIEW_PANE_ICON =
					e.COMPOSER_CHAT_VIEW_PANE_TITLE =
					e.COMPOSER_VIEW_PANE_STORAGE_ID =
					e.COMPOSER_VIEW_PANE_CONTAINER_ID =
					e.COMPOSER_VIEW_PANE_ICON =
					e.COMPOSER_VIEW_PANE_TITLE =
					e.COMPOSER_VIEW_PANE_ID =
					e.OPEN_COMPOSER_AS_EDITOR_ACTION_ID =
					e.OPEN_COMPOSER_AS_BAR_ACTION_ID =
					e.OPEN_COMPOSER_AS_PANE_ACTION_ID =
					e.FIX_ERROR_IN_COMPOSER_MESSAGE_ACTION_ID =
					e.FIX_ERROR_IN_CHAT_MESSAGE_ACTION_ID =
					e.NEW_CHAT_FOLLOW_UP_ACTION_ID =
					e.ADD_SYMBOL_TO_CURRENT_COMPOSER_ACTION_ID =
					e.ADD_SYMBOL_TO_NEW_COMPOSER_ACTION_ID =
					e.SELECT_NEXT_COMPOSER_CHAT_ACTION_ID =
					e.SELECT_NEXT_COMPOSER_ACTION_ID =
					e.SELECT_PREVIOUS_COMPOSER_CHAT_ACTION_ID =
					e.SELECT_PREVIOUS_COMPOSER_ACTION_ID =
					e.NEW_COMPOSER_CHAT_ACTION_ID =
					e.SHOW_COMPOSER_CHAT_HISTORY_ACTION_ID =
					e.SHOW_COMPOSER_HISTORY_ACTION_ID =
					e.NEW_COMPOSER_ACTION_ID =
					e.ADD_FILES_TO_NEW_COMPOSER_CHAT_ACTION_ID =
					e.ADD_FILES_TO_CURRENT_COMPOSER_CHAT_ACTION_ID =
					e.ADD_FILES_TO_NEW_COMPOSER_ACTION_ID =
					e.ADD_FILES_TO_CURRENT_COMPOSER_ACTION_ID =
					e.OPEN_COMPOSER_FROM_CURRENT_CHAT_ACTION_ID =
					e.COMPOSER_EDIT_FROM_SELECTION_ACTION_ID =
					e.COMPOSER_EDIT_ACTION_ID =
					e.COMPOSER_EDIT_TRAIL_COLOR =
					e.CHECKPOINT_HINT_ZERO_TH =
					e.CHECKPOINT_CTA =
					e.CHECKPOINT_MAIN_MESSAGE =
					e.CHECKPOINT_HINT =
					e.complexComposerLabel =
					e.unnamedProjectTitle =
					e.unnamedComposerTitle =
					e.COMPOSER_HOVER_TOOLTIP_DELAY =
					e.COMPOSER_SIMULTANEOUS_SEMANTIC_SEARCH_FINAL_K =
					e.COMPOSER_SIMULTANEOUS_SEMANTIC_SEARCH_TOP_K =
					e.COMPOSER_SEMANTIC_SEARCH_TOOL_ONLY_TAKE_TOP_K =
					e.COMPOSER_SEMANTIC_SEARCH_TOOL_FINAL_K =
					e.COMPOSER_SEMANTIC_SEARCH_TOOL_TOP_K =
					e.COMPOSER_SEMANTIC_SEARCH_TOOL_TIMEOUT =
					e.COMPOSER_CUBE_EXTENDED_LINE_RANGE =
					e.COMPOSER_BAR_WINDOW_MARGIN =
					e.COMPOSER_BAR_MAX_HEIGHT =
					e.COMPOSER_BAR_MAX_WIDTH =
					e.COMPOSER_BAR_MIN_HEIGHT =
					e.COMPOSER_BAR_MIN_WIDTH =
					e.COMPOSER_BAR_DEFAULT_MESSAGES_HEIGHT =
					e.COMPOSER_BAR_DEFAULT_WIDTH =
					e.COMPOSER_BAR_RESIZER_DIMENSION =
					e.COMPOSER_BAR_RESIZER_CORNER_DIMENSION =
					e.COMPOSER_BAR_RESIZER_CORNER_BACKGROUND_COLOR =
					e.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR =
					e.COMPOSER_BAR_INDENT =
					e.COMPOSER_PANE_TOOLBAR_INDENT =
					e.COMPOSER_PANE_INPUT_MARGIN =
					e.COMPOSER_TOOLBAR_HEIGHT =
					e.COMPOSER_TOP_BAR_HEIGHT =
					e.composerCodeBlockStatusLabelMap =
						void 0),
				(e.composerCodeBlockStatusLabelMap = {
					none: "None",
					applying: "Applying",
					running: "Running",
					generating: "Generating",
					apply_pending: "Waiting to be applied",
					cancelled: "Cancelled",
					completed: "Completed",
					accepted: "Accepted",
					rejected: "Rejected",
					aborted: "Aborted",
					outdated: "Outdated",
				}),
				(e.COMPOSER_TOP_BAR_HEIGHT = 24),
				(e.COMPOSER_TOOLBAR_HEIGHT = 24),
				(e.COMPOSER_PANE_INPUT_MARGIN = 10),
				(e.COMPOSER_PANE_TOOLBAR_INDENT = 4),
				(e.COMPOSER_BAR_INDENT = 4),
				(e.COMPOSER_BAR_RESIZER_BACKGROUND_COLOR = "transparent"),
				(e.COMPOSER_BAR_RESIZER_CORNER_BACKGROUND_COLOR = "transparent"),
				(e.COMPOSER_BAR_RESIZER_CORNER_DIMENSION = 10),
				(e.COMPOSER_BAR_RESIZER_DIMENSION = 6),
				(e.COMPOSER_BAR_DEFAULT_WIDTH = 400),
				(e.COMPOSER_BAR_DEFAULT_MESSAGES_HEIGHT = 400),
				(e.COMPOSER_BAR_MIN_WIDTH = 320),
				(e.COMPOSER_BAR_MIN_HEIGHT = 320),
				(e.COMPOSER_BAR_MAX_WIDTH = 800),
				(e.COMPOSER_BAR_MAX_HEIGHT = 800),
				(e.COMPOSER_BAR_WINDOW_MARGIN = 20),
				(e.COMPOSER_CUBE_EXTENDED_LINE_RANGE = 5),
				(e.COMPOSER_SEMANTIC_SEARCH_TOOL_TIMEOUT = 1e4),
				(e.COMPOSER_SEMANTIC_SEARCH_TOOL_TOP_K = 30),
				(e.COMPOSER_SEMANTIC_SEARCH_TOOL_FINAL_K = 15),
				(e.COMPOSER_SEMANTIC_SEARCH_TOOL_ONLY_TAKE_TOP_K = 5),
				(e.COMPOSER_SIMULTANEOUS_SEMANTIC_SEARCH_TOP_K = 50),
				(e.COMPOSER_SIMULTANEOUS_SEMANTIC_SEARCH_FINAL_K = 30),
				(e.COMPOSER_HOVER_TOOLTIP_DELAY = 600),
				(e.unnamedComposerTitle = "Untitled composer"),
				(e.unnamedProjectTitle = "New project"),
				(e.complexComposerLabel = "FULL"),
				(e.CHECKPOINT_HINT = "Revert all files to before this message"),
				(e.CHECKPOINT_MAIN_MESSAGE = "Checkpoint created."),
				(e.CHECKPOINT_CTA = "restore"),
				(e.CHECKPOINT_HINT_ZERO_TH =
					"Revert all files before this composer session"),
				(e.COMPOSER_EDIT_TRAIL_COLOR =
					"var(--vscode-editorLightBulb-foreground)"),
				(e.COMPOSER_EDIT_ACTION_ID = "composer.startComposerPrompt"),
				(e.COMPOSER_EDIT_FROM_SELECTION_ACTION_ID =
					"composer.startComposerPromptFromSelection"),
				(e.OPEN_COMPOSER_FROM_CURRENT_CHAT_ACTION_ID =
					"composer.openComposerFromCurrentChat"),
				(e.ADD_FILES_TO_CURRENT_COMPOSER_ACTION_ID =
					"composer.addfilestocomposer"),
				(e.ADD_FILES_TO_NEW_COMPOSER_ACTION_ID =
					"composer.addfilestonnewcomposer"),
				(e.ADD_FILES_TO_CURRENT_COMPOSER_CHAT_ACTION_ID =
					"composer.addfilestocomposerchat"),
				(e.ADD_FILES_TO_NEW_COMPOSER_CHAT_ACTION_ID =
					"composer.addfilestonnewcomposerchat"),
				(e.NEW_COMPOSER_ACTION_ID = "composer.newcomposeraction"),
				(e.SHOW_COMPOSER_HISTORY_ACTION_ID = "composer.showComposerHistory"),
				(e.SHOW_COMPOSER_CHAT_HISTORY_ACTION_ID =
					"composer.showComposerChatHistory"),
				(e.NEW_COMPOSER_CHAT_ACTION_ID = w.$dX),
				(e.SELECT_PREVIOUS_COMPOSER_ACTION_ID =
					"composer.selectPreviousComposer"),
				(e.SELECT_PREVIOUS_COMPOSER_CHAT_ACTION_ID =
					"composer.selectPreviousComposerChat"),
				(e.SELECT_NEXT_COMPOSER_ACTION_ID = "composer.selectNextComposer"),
				(e.SELECT_NEXT_COMPOSER_CHAT_ACTION_ID =
					"composer.selectNextComposerChat"),
				(e.ADD_SYMBOL_TO_NEW_COMPOSER_ACTION_ID =
					"composer.addsymbolstonewcomposer"),
				(e.ADD_SYMBOL_TO_CURRENT_COMPOSER_ACTION_ID =
					"composer.addsymbolstocomposer"),
				(e.NEW_CHAT_FOLLOW_UP_ACTION_ID = "aichat.newfollowupaction"),
				(e.FIX_ERROR_IN_CHAT_MESSAGE_ACTION_ID = "aichat.fixerrormessage"),
				(e.FIX_ERROR_IN_COMPOSER_MESSAGE_ACTION_ID =
					"composer.fixerrormessage"),
				(e.OPEN_COMPOSER_AS_PANE_ACTION_ID = "composer.openAsPane"),
				(e.OPEN_COMPOSER_AS_BAR_ACTION_ID = "composer.openAsBar"),
				(e.OPEN_COMPOSER_AS_EDITOR_ACTION_ID = "composer.openAsEditor"),
				(e.COMPOSER_VIEW_PANE_ID = "composerViewPane"),
				(e.COMPOSER_VIEW_PANE_TITLE = "Composer"),
				(e.COMPOSER_VIEW_PANE_ICON = i.$ak.files),
				(e.COMPOSER_VIEW_PANE_CONTAINER_ID =
					"workbench.panel.composerViewPane2"),
				(e.COMPOSER_VIEW_PANE_STORAGE_ID = "workbench.panel.composerViewPane2"),
				(e.COMPOSER_CHAT_VIEW_PANE_TITLE = "Chat"),
				(e.COMPOSER_CHAT_VIEW_PANE_ICON = i.$ak.files),
				(e.COMPOSER_CHAT_VIEW_PANE_STORAGE_ID =
					"workbench.panel.composerChatViewPane"),
				(e.COMPOSER_PROJECTS_REACTIVE_STORAGE_ID =
					"composer.reactiveStorageId"),
				(e.DEBUG_WITH_AI_ACTION_ID = "aidebug.autodebugterminal"),
				(e.COMPOSER_EXPANDED_BLOCK_TOOLS = [
					t.ComposerCapabilityRequest_ToolType.ITERATE,
				]),
				(e.COMPOSER_EDIT_DEFAULT_KEYBINDING =
					E.KeyMod.CtrlCmd | E.KeyCode.KeyI),
				(e.NEW_CHAT_DEFAULT_KEYBINDING = E.KeyMod.CtrlCmd | E.KeyCode.KeyL),
				(e.INSERT_SELECTION_INTO_CHAT_DEFAULT_KEYBINDING =
					E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyL),
				(e.DEBUG_WITH_AI_DEFAULT_KEYBINDING = E.KeyMod.Alt | E.KeyCode.KeyD),
				(e.FIX_ERROR_IN_CHAT_DEFAULT_KEYBINDING =
					E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyE),
				(e.FIX_ERROR_IN_COMPOSER_DEFAULT_KEYBINDING =
					E.KeyMod.CtrlCmd | E.KeyMod.Shift | E.KeyCode.KeyD),
				(e.COMPOSER_STREAM_RETRY_MAX_ATTEMPTS = 3),
				(e.COMPOSER_STREAM_CHUNK_TIMEOUT_MS = 1e4),
				(e.ENABLED_BETTER_MARKDOWN_PARSING = !1);
		}),
		define(
			de[1241],
			he([1, 0, 33, 58, 46, 65, 71, 69, 414, 11, 31, 169, 48, 126, 42, 3, 25]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gmc =
						e.$fmc =
						e.$emc =
						e.$dmc =
						e.$cmc =
						e.$bmc =
						e.$amc =
						e.$_lc =
							void 0),
					(e.$$lc = o);
				async function o($, v, S) {
					const I = $.getPosition(),
						T = $.getModel();
					return T === null || I === null
						? []
						: (
								await (0, m.$UOb)(() =>
									(0, m.$POb)(
										S.definitionProvider,
										T,
										I,
										!1,
										t.CancellationToken.None,
									),
								)
							).slice(0, v);
				}
				e.$_lc = "editor.action.addSymbolToChat";
				class f extends w.$ktb {
					static {
						this.id = e.$_lc;
					}
					static {
						this.LABEL = "Add Symbol to Current Chat";
					}
					constructor() {
						super({
							id: e.$_lc,
							precondition: C.EditorContextKeys.hasCodeActionsProvider,
							title: f.LABEL,
							menu: [
								{ id: r.$XX.EditorContext, group: "navigation", order: 1.5 },
								{
									id: r.$XX.MenubarGoMenu,
									precondition: null,
									group: "4_symbol_nav",
									order: 5,
								},
							],
							metadata: { description: "Add Symbol to Current Chat..." },
						});
					}
					async runEditorCommand(v, S, I) {
						const T = v.get(u.$ek),
							P = v.get(d.$k3),
							k = await o(S, 3, P);
						await T.executeCommand(
							a.ADD_SYMBOL_TO_CURRENT_COMPOSER_ACTION_ID,
							{ locationLinks: k },
							"chat",
						);
					}
				}
				(e.$amc = f),
					(0, r.$4X)(f),
					(e.$bmc = "editor.action.addSymbolToNewChat");
				class b extends w.$ktb {
					static {
						this.id = e.$bmc;
					}
					static {
						this.LABEL = "Add Symbol to New Chat";
					}
					constructor() {
						super({
							id: e.$bmc,
							precondition: C.EditorContextKeys.hasCodeActionsProvider,
							title: b.LABEL,
							menu: [
								{ id: r.$XX.EditorContext, group: "navigation", order: 1.6 },
								{
									id: r.$XX.MenubarGoMenu,
									precondition: null,
									group: "4_symbol_nav",
									order: 6,
								},
							],
							metadata: { description: "Add Symbol to New Chat..." },
						});
					}
					async runEditorCommand(v, S, I) {
						const T = v.get(u.$ek),
							P = v.get(d.$k3),
							k = await o(S, 3, P);
						await T.executeCommand(
							a.ADD_SYMBOL_TO_NEW_COMPOSER_ACTION_ID,
							{ locationLinks: k },
							"chat",
						);
					}
				}
				(e.$cmc = b),
					(0, r.$4X)(b),
					(e.$dmc = "editor.action.addSymbolToComposer");
				class s extends w.$ktb {
					static {
						this.id = e.$dmc;
					}
					static {
						this.LABEL = "Add Symbol to Current Composer";
					}
					constructor() {
						super({
							id: e.$dmc,
							precondition: C.EditorContextKeys.hasCodeActionsProvider,
							title: s.LABEL,
							menu: [
								{ id: r.$XX.EditorContext, group: "navigation", order: 1.5 },
								{
									id: r.$XX.MenubarGoMenu,
									precondition: null,
									group: "4_symbol_nav",
									order: 5,
								},
							],
							metadata: { description: "Add Symbol to Current Composer..." },
						});
					}
					async runEditorCommand(v, S, I) {
						const T = v.get(u.$ek),
							P = v.get(d.$k3),
							k = await o(S, 3, P);
						await T.executeCommand(a.ADD_SYMBOL_TO_CURRENT_COMPOSER_ACTION_ID, {
							locationLinks: k,
						});
					}
				}
				(e.$emc = s),
					(0, r.$4X)(s),
					(e.$fmc = "editor.action.addSymbolToNewComposer");
				class l extends w.$ktb {
					static {
						this.id = e.$fmc;
					}
					static {
						this.LABEL = "Add Symbol to New Composer";
					}
					constructor() {
						super({
							id: e.$fmc,
							precondition: C.EditorContextKeys.hasCodeActionsProvider,
							title: l.LABEL,
							menu: [
								{ id: r.$XX.EditorContext, group: "navigation", order: 1.6 },
								{
									id: r.$XX.MenubarGoMenu,
									precondition: null,
									group: "4_symbol_nav",
									order: 6,
								},
							],
							metadata: { description: "Add Symbol to New Composer..." },
						});
					}
					async runEditorCommand(v, S, I) {
						const T = v.get(u.$ek),
							P = v.get(d.$k3),
							k = await o(S, 3, P);
						await T.executeCommand(a.ADD_SYMBOL_TO_NEW_COMPOSER_ACTION_ID, {
							locationLinks: k,
						});
					}
				}
				(e.$gmc = l),
					(0, r.$4X)(l),
					(0, r.$4X)(
						class Da extends r.$3X {
							static {
								this.id = i.$BV;
							}
							constructor() {
								super({
									id: Da.id,
									title: {
										value: "Go to Definition From Chat Response",
										original: "Go to Definition From Chat Response",
									},
								}),
									(this.a = []);
							}
							async run(v, S, I, T) {
								const P = v.get(E.$dtb),
									k = v.get(d.$k3),
									L = v.get(n.$MO),
									D = v.get(p.$Vi);
								if (T) {
									await y(P, S);
									return;
								}
								const M = (async () => {
										let B, U;
										const z = new g.$Zc();
										try {
											for (; this.a.length > 2; ) {
												const J = this.a.shift();
												J?.cancel(), J?.dispose();
											}
											const F = new t.$Ce();
											this.a.push(F),
												(U = setTimeout(() => F.cancel(), 5e3)),
												(B = await L.createModelReference(S.uri));
											const x = B.object.textEditorModel,
												q = await (0, m.$POb)(
													k.definitionProvider,
													x,
													new h.$hL(
														S.range.startLineNumber,
														S.range.endColumn - 1,
													),
													!1,
													F.token,
												),
												[V] = q;
											if (V === void 0) return;
											let G = await L.createModelReference(V.uri);
											z.add(G);
											const K = G.object.textEditorModel;
											return { location: V, value: K.getValueInRange(V.range) };
										} catch {
											return;
										} finally {
											B?.dispose(), z.dispose(), clearTimeout(U);
										}
									})(),
									N = await Promise.race([
										M,
										new Promise((B) => setTimeout(() => B("timeout"), 500)),
									]);
								N === "timeout" || N === void 0
									? await y(P, S)
									: await y(P, N.location);
								let A;
								if (
									(N !== "timeout" && N !== void 0
										? (A = N)
										: N === "timeout" && (A = await M),
									A === void 0)
								)
									return;
								let R = A.location.range.startLineNumber,
									O = A.value;
								if (
									A.value.includes(" ") ||
									A.value.includes(`
`)
								) {
									const B = A.value.split(`
`);
									let U = !1;
									for (let z = 0; z < B.length; z++)
										if (B[z].includes(I.symbolSearchString)) {
											(O = I.symbolSearchString), (R += z), (U = !0);
											break;
										}
									U || (O = B[0]);
								}
								return new c.$JA({
									relativeWorkspacePath: D.asRelativePath(A.location.uri),
									roughLineNumber: R,
									symbolSearchString: O,
								});
							}
						},
					);
				async function y($, v) {
					await $.openCodeEditor(
						{
							resource: v.uri,
							options: {
								selection: {
									startColumn: v.range.startColumn,
									startLineNumber: v.range.startLineNumber,
								},
							},
						},
						null,
					);
				}
			},
		),
		