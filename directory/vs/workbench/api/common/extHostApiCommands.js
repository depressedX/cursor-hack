import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
import '../../../base/common/network.js';
import '../../../base/common/uri.js';
import '../../../editor/common/languages.js';
import '../../../editor/common/services/semanticTokensDto.js';
import '../../../platform/contextkey/common/contextkey.js';
import './extHostCommands.js';
import './extHostTypeConverters.js';
import './extHostTypes.js';
define(
			Pe[584],
			Ne([1, 0, 20, 16, 2, 137, 273, 46, 44, 17, 11]),
			function (we, t, e, r, S, N, P, I, l, n, p) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$dhd = void 0),
					(N = tt(N)),
					(n = tt(n)),
					(p = tt(p));
				const y = [
					new l.$_db(
						"vscode.executeDocumentHighlights",
						"_executeDocumentHighlights",
						"Execute document highlight provider.",
						[l.$0db.Uri, l.$0db.Position],
						new l.$$db(
							"A promise that resolves to an array of DocumentHighlight-instances.",
							k(n.DocumentHighlight.to),
						),
					),
					new l.$_db(
						"vscode.executeDocumentSymbolProvider",
						"_executeDocumentSymbolProvider",
						"Execute document symbol provider.",
						[l.$0db.Uri],
						new l.$$db(
							"A promise that resolves to an array of SymbolInformation and DocumentSymbol instances.",
							(c, h) => {
								if ((0, e.$Ob)(c)) return;
								class $ extends p.$Ibb {
									static to(a) {
										const u = new $(
											a.name,
											n.SymbolKind.to(a.kind),
											a.containerName || "",
											new p.$Bbb(h[0], n.Range.to(a.range)),
										);
										return (
											(u.detail = a.detail),
											(u.range = u.location.range),
											(u.selectionRange = n.Range.to(a.selectionRange)),
											(u.children = a.children ? a.children.map($.to) : []),
											u
										);
									}
								}
								return c.map($.to);
							},
						),
					),
					new l.$_db(
						"vscode.executeFormatDocumentProvider",
						"_executeFormatDocumentProvider",
						"Execute document format provider.",
						[
							l.$0db.Uri,
							new l.$0db(
								"options",
								"Formatting options",
								(c) => !0,
								(c) => c,
							),
						],
						new l.$$db(
							"A promise that resolves to an array of TextEdits.",
							k(n.TextEdit.to),
						),
					),
					new l.$_db(
						"vscode.executeFormatRangeProvider",
						"_executeFormatRangeProvider",
						"Execute range format provider.",
						[
							l.$0db.Uri,
							l.$0db.Range,
							new l.$0db(
								"options",
								"Formatting options",
								(c) => !0,
								(c) => c,
							),
						],
						new l.$$db(
							"A promise that resolves to an array of TextEdits.",
							k(n.TextEdit.to),
						),
					),
					new l.$_db(
						"vscode.executeFormatOnTypeProvider",
						"_executeFormatOnTypeProvider",
						"Execute format on type provider.",
						[
							l.$0db.Uri,
							l.$0db.Position,
							new l.$0db(
								"ch",
								"Trigger character",
								(c) => typeof c == "string",
								(c) => c,
							),
							new l.$0db(
								"options",
								"Formatting options",
								(c) => !0,
								(c) => c,
							),
						],
						new l.$$db(
							"A promise that resolves to an array of TextEdits.",
							k(n.TextEdit.to),
						),
					),
					new l.$_db(
						"vscode.executeDefinitionProvider",
						"_executeDefinitionProvider",
						"Execute all definition providers.",
						[l.$0db.Uri, l.$0db.Position],
						new l.$$db(
							"A promise that resolves to an array of Location or LocationLink instances.",
							g,
						),
					),
					new l.$_db(
						"vscode.experimental.executeDefinitionProvider_recursive",
						"_executeDefinitionProvider_recursive",
						"Execute all definition providers.",
						[l.$0db.Uri, l.$0db.Position],
						new l.$$db(
							"A promise that resolves to an array of Location or LocationLink instances.",
							g,
						),
					),
					new l.$_db(
						"vscode.executeTypeDefinitionProvider",
						"_executeTypeDefinitionProvider",
						"Execute all type definition providers.",
						[l.$0db.Uri, l.$0db.Position],
						new l.$$db(
							"A promise that resolves to an array of Location or LocationLink instances.",
							g,
						),
					),
					new l.$_db(
						"vscode.experimental.executeTypeDefinitionProvider_recursive",
						"_executeTypeDefinitionProvider_recursive",
						"Execute all type definition providers.",
						[l.$0db.Uri, l.$0db.Position],
						new l.$$db(
							"A promise that resolves to an array of Location or LocationLink instances.",
							g,
						),
					),
					new l.$_db(
						"vscode.executeDeclarationProvider",
						"_executeDeclarationProvider",
						"Execute all declaration providers.",
						[l.$0db.Uri, l.$0db.Position],
						new l.$$db(
							"A promise that resolves to an array of Location or LocationLink instances.",
							g,
						),
					),
					new l.$_db(
						"vscode.experimental.executeDeclarationProvider_recursive",
						"_executeDeclarationProvider_recursive",
						"Execute all declaration providers.",
						[l.$0db.Uri, l.$0db.Position],
						new l.$$db(
							"A promise that resolves to an array of Location or LocationLink instances.",
							g,
						),
					),
					new l.$_db(
						"vscode.executeImplementationProvider",
						"_executeImplementationProvider",
						"Execute all implementation providers.",
						[l.$0db.Uri, l.$0db.Position],
						new l.$$db(
							"A promise that resolves to an array of Location or LocationLink instances.",
							g,
						),
					),
					new l.$_db(
						"vscode.experimental.executeImplementationProvider_recursive",
						"_executeImplementationProvider_recursive",
						"Execute all implementation providers.",
						[l.$0db.Uri, l.$0db.Position],
						new l.$$db(
							"A promise that resolves to an array of Location or LocationLink instances.",
							g,
						),
					),
					new l.$_db(
						"vscode.executeReferenceProvider",
						"_executeReferenceProvider",
						"Execute all reference providers.",
						[l.$0db.Uri, l.$0db.Position],
						new l.$$db(
							"A promise that resolves to an array of Location-instances.",
							k(n.location.to),
						),
					),
					new l.$_db(
						"vscode.experimental.executeReferenceProvider",
						"_executeReferenceProvider_recursive",
						"Execute all reference providers.",
						[l.$0db.Uri, l.$0db.Position],
						new l.$$db(
							"A promise that resolves to an array of Location-instances.",
							k(n.location.to),
						),
					),
					new l.$_db(
						"vscode.executeHoverProvider",
						"_executeHoverProvider",
						"Execute all hover providers.",
						[l.$0db.Uri, l.$0db.Position],
						new l.$$db(
							"A promise that resolves to an array of Hover-instances.",
							k(n.Hover.to),
						),
					),
					new l.$_db(
						"vscode.experimental.executeHoverProvider_recursive",
						"_executeHoverProvider_recursive",
						"Execute all hover providers.",
						[l.$0db.Uri, l.$0db.Position],
						new l.$$db(
							"A promise that resolves to an array of Hover-instances.",
							k(n.Hover.to),
						),
					),
					new l.$_db(
						"vscode.executeSelectionRangeProvider",
						"_executeSelectionRangeProvider",
						"Execute selection range provider.",
						[
							l.$0db.Uri,
							new l.$0db(
								"position",
								"A position in a text document",
								(c) => Array.isArray(c) && c.every((h) => p.$obb.isPosition(h)),
								(c) => c.map(n.Position.from),
							),
						],
						new l.$$db("A promise that resolves to an array of ranges.", (c) =>
							c.map((h) => {
								let $;
								for (const T of h.reverse()) $ = new p.$Mbb(n.Range.to(T), $);
								return $;
							}),
						),
					),
					new l.$_db(
						"vscode.executeWorkspaceSymbolProvider",
						"_executeWorkspaceSymbolProvider",
						"Execute all workspace symbol providers.",
						[l.$0db.String.with("query", "Search string")],
						new l.$$db(
							"A promise that resolves to an array of SymbolInformation-instances.",
							(c) => c.map(n.WorkspaceSymbol.to),
						),
					),
					new l.$_db(
						"vscode.prepareCallHierarchy",
						"_executePrepareCallHierarchy",
						"Prepare call hierarchy at a position inside a document",
						[l.$0db.Uri, l.$0db.Position],
						new l.$$db(
							"A promise that resolves to an array of CallHierarchyItem-instances",
							(c) => c.map(n.CallHierarchyItem.to),
						),
					),
					new l.$_db(
						"vscode.provideIncomingCalls",
						"_executeProvideIncomingCalls",
						"Compute incoming calls for an item",
						[l.$0db.CallHierarchyItem],
						new l.$$db(
							"A promise that resolves to an array of CallHierarchyIncomingCall-instances",
							(c) => c.map(n.CallHierarchyIncomingCall.to),
						),
					),
					new l.$_db(
						"vscode.provideOutgoingCalls",
						"_executeProvideOutgoingCalls",
						"Compute outgoing calls for an item",
						[l.$0db.CallHierarchyItem],
						new l.$$db(
							"A promise that resolves to an array of CallHierarchyOutgoingCall-instances",
							(c) => c.map(n.CallHierarchyOutgoingCall.to),
						),
					),
					new l.$_db(
						"vscode.prepareRename",
						"_executePrepareRename",
						"Execute the prepareRename of rename provider.",
						[l.$0db.Uri, l.$0db.Position],
						new l.$$db(
							"A promise that resolves to a range and placeholder text.",
							(c) => {
								if (c)
									return { range: n.Range.to(c.range), placeholder: c.text };
							},
						),
					),
					new l.$_db(
						"vscode.executeDocumentRenameProvider",
						"_executeDocumentRenameProvider",
						"Execute rename provider.",
						[
							l.$0db.Uri,
							l.$0db.Position,
							l.$0db.String.with("newName", "The new symbol name"),
						],
						new l.$$db("A promise that resolves to a WorkspaceEdit.", (c) => {
							if (c) {
								if (c.rejectReason) throw new Error(c.rejectReason);
								return n.WorkspaceEdit.to(c);
							}
						}),
					),
					new l.$_db(
						"vscode.executeLinkProvider",
						"_executeLinkProvider",
						"Execute document link provider.",
						[
							l.$0db.Uri,
							l.$0db.Number.with(
								"linkResolveCount",
								"Number of links that should be resolved, only when links are unresolved.",
							).optional(),
						],
						new l.$$db(
							"A promise that resolves to an array of DocumentLink-instances.",
							(c) => c.map(n.DocumentLink.to),
						),
					),
					new l.$_db(
						"vscode.provideDocumentSemanticTokensLegend",
						"_provideDocumentSemanticTokensLegend",
						"Provide semantic tokens legend for a document",
						[l.$0db.Uri],
						new l.$$db(
							"A promise that resolves to SemanticTokensLegend.",
							(c) => {
								if (c) return new p.$Icb(c.tokenTypes, c.tokenModifiers);
							},
						),
					),
					new l.$_db(
						"vscode.provideDocumentSemanticTokens",
						"_provideDocumentSemanticTokens",
						"Provide semantic tokens for a document",
						[l.$0db.Uri],
						new l.$$db("A promise that resolves to SemanticTokens.", (c) => {
							if (!c) return;
							const h = (0, P.$8Ob)(c);
							if (h.type === "full") return new p.$Kcb(h.data, void 0);
						}),
					),
					new l.$_db(
						"vscode.provideDocumentRangeSemanticTokensLegend",
						"_provideDocumentRangeSemanticTokensLegend",
						"Provide semantic tokens legend for a document range",
						[l.$0db.Uri, l.$0db.Range.optional()],
						new l.$$db(
							"A promise that resolves to SemanticTokensLegend.",
							(c) => {
								if (c) return new p.$Icb(c.tokenTypes, c.tokenModifiers);
							},
						),
					),
					new l.$_db(
						"vscode.provideDocumentRangeSemanticTokens",
						"_provideDocumentRangeSemanticTokens",
						"Provide semantic tokens for a document range",
						[l.$0db.Uri, l.$0db.Range],
						new l.$$db("A promise that resolves to SemanticTokens.", (c) => {
							if (!c) return;
							const h = (0, P.$8Ob)(c);
							if (h.type === "full") return new p.$Kcb(h.data, void 0);
						}),
					),
					new l.$_db(
						"vscode.executeCompletionItemProvider",
						"_executeCompletionItemProvider",
						"Execute completion item provider.",
						[
							l.$0db.Uri,
							l.$0db.Position,
							l.$0db.String.with(
								"triggerCharacter",
								"Trigger completion when the user types the character, like `,` or `(`",
							).optional(),
							l.$0db.Number.with(
								"itemResolveCount",
								"Number of completions to resolve (too large numbers slow down completions)",
							).optional(),
						],
						new l.$$db(
							"A promise that resolves to a CompletionList-instance.",
							(c, h, $) => {
								if (!c) return new p.$Ybb([]);
								const T = c.suggestions.map((a) => n.CompletionItem.to(a, $));
								return new p.$Ybb(T, c.incomplete);
							},
						),
					),
					new l.$_db(
						"vscode.executeSignatureHelpProvider",
						"_executeSignatureHelpProvider",
						"Execute signature help provider.",
						[
							l.$0db.Uri,
							l.$0db.Position,
							l.$0db.String.with(
								"triggerCharacter",
								"Trigger signature help when the user types the character, like `,` or `(`",
							).optional(),
						],
						new l.$$db("A promise that resolves to SignatureHelp.", (c) => {
							if (c) return n.SignatureHelp.to(c);
						}),
					),
					new l.$_db(
						"vscode.executeCodeLensProvider",
						"_executeCodeLensProvider",
						"Execute code lens provider.",
						[
							l.$0db.Uri,
							l.$0db.Number.with(
								"itemResolveCount",
								"Number of lenses that should be resolved and returned. Will only return resolved lenses, will impact performance)",
							).optional(),
						],
						new l.$$db(
							"A promise that resolves to an array of CodeLens-instances.",
							(c, h, $) =>
								k(
									(T) =>
										new p.$Qbb(
											n.Range.to(T.range),
											T.command && $.fromInternal(T.command),
										),
								)(c),
						),
					),
					new l.$_db(
						"vscode.executeCodeActionProvider",
						"_executeCodeActionProvider",
						"Execute code action provider.",
						[
							l.$0db.Uri,
							new l.$0db(
								"rangeOrSelection",
								"Range in a text document. Some refactoring provider requires Selection object.",
								(c) => p.$pbb.isRange(c),
								(c) =>
									p.$qbb.isSelection(c) ? n.Selection.from(c) : n.Range.from(c),
							),
							l.$0db.String.with(
								"kind",
								"Code action kind to return code actions for",
							).optional(),
							l.$0db.Number.with(
								"itemResolveCount",
								"Number of code actions to resolve (too large numbers slow down code actions)",
							).optional(),
						],
						new l.$$db(
							"A promise that resolves to an array of Command-instances.",
							(c, h, $) =>
								k((T) => {
									if (T._isSynthetic) {
										if (!T.command)
											throw new Error(
												"Synthetic code actions must have a command",
											);
										return $.fromInternal(T.command);
									} else {
										const a = new p.$Kbb(
											T.title,
											T.kind ? new p.$Lbb(T.kind) : void 0,
										);
										return (
											T.edit && (a.edit = n.WorkspaceEdit.to(T.edit)),
											T.command && (a.command = $.fromInternal(T.command)),
											(a.isPreferred = T.isPreferred),
											a
										);
									}
								})(c),
						),
					),
					new l.$_db(
						"vscode.executeDocumentColorProvider",
						"_executeDocumentColorProvider",
						"Execute document color provider.",
						[l.$0db.Uri],
						new l.$$db(
							"A promise that resolves to an array of ColorInformation objects.",
							(c) =>
								c
									? c.map(
											(h) =>
												new p.$5bb(n.Range.to(h.range), n.Color.to(h.color)),
										)
									: [],
						),
					),
					new l.$_db(
						"vscode.executeColorPresentationProvider",
						"_executeColorPresentationProvider",
						"Execute color presentation provider.",
						[
							new l.$0db(
								"color",
								"The color to show and insert",
								(c) => c instanceof p.$4bb,
								n.Color.from,
							),
							new l.$0db(
								"context",
								"Context object with uri and range",
								(c) => !0,
								(c) => ({ uri: c.uri, range: n.Range.from(c.range) }),
							),
						],
						new l.$$db(
							"A promise that resolves to an array of ColorPresentation objects.",
							(c) => (c ? c.map(n.ColorPresentation.to) : []),
						),
					),
					new l.$_db(
						"vscode.executeInlayHintProvider",
						"_executeInlayHintProvider",
						"Execute inlay hints provider",
						[l.$0db.Uri, l.$0db.Range],
						new l.$$db(
							"A promise that resolves to an array of Inlay objects",
							(c, h, $) => c.map(n.InlayHint.to.bind(void 0, $)),
						),
					),
					new l.$_db(
						"vscode.executeFoldingRangeProvider",
						"_executeFoldingRangeProvider",
						"Execute folding range provider",
						[l.$0db.Uri],
						new l.$$db(
							"A promise that resolves to an array of FoldingRange objects",
							(c, h) => {
								if (c) return c.map(n.FoldingRange.to);
							},
						),
					),
					new l.$_db(
						"vscode.resolveNotebookContentProviders",
						"_resolveNotebookContentProvider",
						"Resolve Notebook Content Providers",
						[],
						new l.$$db(
							"A promise that resolves to an array of NotebookContentProvider static info objects.",
							k((c) => ({
								viewType: c.viewType,
								displayName: c.displayName,
								options: {
									transientOutputs: c.options.transientOutputs,
									transientCellMetadata: c.options.transientCellMetadata,
									transientDocumentMetadata:
										c.options.transientDocumentMetadata,
								},
								filenamePattern: c.filenamePattern.map((h) =>
									n.NotebookExclusiveDocumentPattern.to(h),
								),
							})),
						),
					),
					new l.$_db(
						"vscode.executeInlineValueProvider",
						"_executeInlineValueProvider",
						"Execute inline value provider",
						[
							l.$0db.Uri,
							l.$0db.Range,
							new l.$0db(
								"context",
								"An InlineValueContext",
								(c) =>
									c &&
									typeof c.frameId == "number" &&
									c.stoppedLocation instanceof p.$pbb,
								(c) => n.InlineValueContext.from(c),
							),
						],
						new l.$$db(
							"A promise that resolves to an array of InlineValue objects",
							(c) => c.map(n.InlineValue.to),
						),
					),
					new l.$_db(
						"vscode.open",
						"_workbench.open",
						"Opens the provided resource in the editor. Can be a text or binary file, or an http(s) URL. If you need more control over the options for opening a text file, use vscode.window.showTextDocument instead.",
						[
							new l.$0db(
								"uriOrString",
								"Uri-instance or string (only http/https)",
								(c) =>
									S.URI.isUri(c) ||
									(typeof c == "string" &&
										(0, r.$Wg)(c, r.Schemas.http, r.Schemas.https)),
								(c) => c,
							),
							new l.$0db(
								"columnOrOptions",
								"Either the column in which to open or editor options, see vscode.TextDocumentShowOptions",
								(c) =>
									c === void 0 || typeof c == "number" || typeof c == "object",
								(c) =>
									c &&
									(typeof c == "number"
										? [n.ViewColumn.from(c), void 0]
										: [
												n.ViewColumn.from(c.viewColumn),
												n.TextEditorOpenOptions.from(c),
											]),
							).optional(),
							l.$0db.String.with("label", "").optional(),
						],
						l.$$db.Void,
					),
					new l.$_db(
						"vscode.openWith",
						"_workbench.openWith",
						"Opens the provided resource with a specific editor.",
						[
							l.$0db.Uri.with("resource", "Resource to open"),
							l.$0db.String.with(
								"viewId",
								"Custom editor view id. This should be the viewType string for custom editors or the notebookType string for notebooks. Use 'default' to use VS Code's default text editor",
							),
							new l.$0db(
								"columnOrOptions",
								"Either the column in which to open or editor options, see vscode.TextDocumentShowOptions",
								(c) =>
									c === void 0 || typeof c == "number" || typeof c == "object",
								(c) =>
									c &&
									(typeof c == "number"
										? [n.ViewColumn.from(c), void 0]
										: [
												n.ViewColumn.from(c.viewColumn),
												n.TextEditorOpenOptions.from(c),
											]),
							).optional(),
						],
						l.$$db.Void,
					),
					new l.$_db(
						"vscode.diff",
						"_workbench.diff",
						"Opens the provided resources in the diff editor to compare their contents.",
						[
							l.$0db.Uri.with(
								"left",
								"Left-hand side resource of the diff editor",
							),
							l.$0db.Uri.with(
								"right",
								"Right-hand side resource of the diff editor",
							),
							l.$0db.String.with(
								"title",
								"Human readable title for the diff editor",
							).optional(),
							new l.$0db(
								"columnOrOptions",
								"Either the column in which to open or editor options, see vscode.TextDocumentShowOptions",
								(c) => c === void 0 || typeof c == "object",
								(c) =>
									c && [
										n.ViewColumn.from(c.viewColumn),
										n.TextEditorOpenOptions.from(c),
									],
							).optional(),
						],
						l.$$db.Void,
					),
					new l.$_db(
						"vscode.changes",
						"_workbench.changes",
						"Opens a list of resources in the changes editor to compare their contents.",
						[
							l.$0db.String.with(
								"title",
								"Human readable title for the changes editor",
							),
							new l.$0db(
								"resourceList",
								"List of resources to compare",
								(c) => {
									for (const h of c) {
										if (h.length !== 3) return !1;
										const [$, T, a] = h;
										if (
											!S.URI.isUri($) ||
											(!S.URI.isUri(T) && T !== void 0 && T !== null) ||
											(!S.URI.isUri(a) && a !== void 0 && a !== null)
										)
											return !1;
									}
									return !0;
								},
								(c) => c,
							),
						],
						l.$$db.Void,
					),
					new l.$_db(
						"vscode.prepareTypeHierarchy",
						"_executePrepareTypeHierarchy",
						"Prepare type hierarchy at a position inside a document",
						[l.$0db.Uri, l.$0db.Position],
						new l.$$db(
							"A promise that resolves to an array of TypeHierarchyItem-instances",
							(c) => c.map(n.TypeHierarchyItem.to),
						),
					),
					new l.$_db(
						"vscode.provideSupertypes",
						"_executeProvideSupertypes",
						"Compute supertypes for an item",
						[l.$0db.TypeHierarchyItem],
						new l.$$db(
							"A promise that resolves to an array of TypeHierarchyItem-instances",
							(c) => c.map(n.TypeHierarchyItem.to),
						),
					),
					new l.$_db(
						"vscode.provideSubtypes",
						"_executeProvideSubtypes",
						"Compute subtypes for an item",
						[l.$0db.TypeHierarchyItem],
						new l.$$db(
							"A promise that resolves to an array of TypeHierarchyItem-instances",
							(c) => c.map(n.TypeHierarchyItem.to),
						),
					),
					new l.$_db(
						"vscode.revealTestInExplorer",
						"_revealTestInExplorer",
						"Reveals a test instance in the explorer",
						[l.$0db.TestItem],
						l.$$db.Void,
					),
					new l.$_db(
						"vscode.experimental.editSession.continue",
						"_workbench.editSessions.actions.continueEditSession",
						"Continue the current edit session in a different workspace",
						[
							l.$0db.Uri.with(
								"workspaceUri",
								"The target workspace to continue the current edit session in",
							),
						],
						l.$$db.Void,
					),
					new l.$_db(
						"setContext",
						"_setContext",
						"Set a custom context key value that can be used in when clauses.",
						[
							l.$0db.String.with("name", "The context key name"),
							new l.$0db(
								"value",
								"The context key value",
								() => !0,
								(c) => c,
							),
						],
						l.$$db.Void,
					),
					new l.$_db(
						"vscode.executeMappedEditsProvider",
						"_executeMappedEditsProvider",
						"Execute Mapped Edits Provider",
						[
							l.$0db.Uri,
							l.$0db.StringArray,
							new l.$0db(
								"MappedEditsContext",
								"Mapped Edits Context",
								(c) => n.MappedEditsContext.is(c),
								(c) => n.MappedEditsContext.from(c),
							),
						],
						new l.$$db(
							"A promise that resolves to a workspace edit or null",
							(c) => (c ? n.WorkspaceEdit.to(c) : null),
						),
					),
					new l.$_db(
						"vscode.editorChat.start",
						"inlineChat.start",
						"Invoke a new editor chat session",
						[
							new l.$0db(
								"Run arguments",
								"",
								(c) => !0,
								(c) => {
									if (c)
										return {
											initialRange: c.initialRange
												? n.Range.from(c.initialRange)
												: void 0,
											initialSelection: p.$qbb.isSelection(c.initialSelection)
												? n.Selection.from(c.initialSelection)
												: void 0,
											message: c.message,
											autoSend: c.autoSend,
											position: c.position
												? n.Position.from(c.position)
												: void 0,
										};
								},
							),
						],
						l.$$db.Void,
					),
				];
				class d {
					static register(h) {
						y.forEach(h.registerApiCommand, h), this.a(h);
					}
					static a(h) {
						h.registerCommand(!1, "_validateWhenClauses", I.$Lj);
					}
				}
				t.$dhd = d;
				function k(c) {
					return (h) => {
						if (Array.isArray(h)) return h.map(c);
					};
				}
				function g(c) {
					if (!Array.isArray(c)) return;
					const h = [];
					for (const $ of c)
						N.$fM($)
							? h.push(n.DefinitionLink.to($))
							: h.push(n.location.to($));
					return h;
				}
			},
		),
		