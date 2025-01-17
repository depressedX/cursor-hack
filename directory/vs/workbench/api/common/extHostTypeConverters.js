import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/arrays.js';
import '../../../base/common/buffer.js';
import '../../../base/common/dataTransfer.js';
import '../../../base/common/functional.js';
import '../../../base/common/htmlContent.js';
import '../../../base/common/map.js';
import '../../../base/common/marked/marked.js';
import '../../../base/common/marshalling.js';
import '../../../base/common/mime.js';
import '../../../base/common/objects.js';
import '../../../base/common/prefixTree.js';
import '../../../base/common/resources.js';
import '../../../base/common/themables.js';
import '../../../base/common/types.js';
import '../../../base/common/uri.js';
import '../../../editor/common/config/editorOptions.js';
import '../../../editor/common/core/range.js';
import '../../../editor/common/encodedTokenAttributes.js';
import '../../../editor/common/languages.js';
import '../../../editor/common/model.js';
import '../../../platform/markers/common/markers.js';
import '../../../platform/progress/common/progress.js';
import './extHostTestingPrivateApi.js';
import '../../common/editor.js';
import '../../contrib/chat/common/chatAgents.js';
import '../../contrib/chat/common/languageModels.js';
import '../../contrib/debug/common/debug.js';
import '../../contrib/notebook/common/notebookCommon.js';
import '../../contrib/testing/common/testId.js';
import '../../contrib/testing/common/testTypes.js';
import '../../services/editor/common/editorService.js';
import './extHostTypes.js';
define(
			de[1836],
			he([
				1, 0, 24, 76, 489, 288, 94, 59, 434, 197, 266, 82, 743, 19, 26, 28, 9,
				38, 17, 171, 74, 64, 90, 84, 3181, 44, 153, 1023, 112, 70, 259, 185, 18,
				1028,
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
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.LanguageModelToolDescription =
						e.DebugTreeItem =
						e.PartialAcceptTriggerKind =
						e.PartialAcceptInfo =
						e.TerminalQuickFix =
						e.LanguageModelToolResult =
						e.ChatAgentUserActionEvent =
						e.ChatAgentResult =
						e.ChatAgentCompletionItem =
						e.ChatLanguageModelToolReference =
						e.ChatPromptReference =
						e.ChatLocation =
						e.ChatAgentRequest =
						e.ChatResponsePart =
						e.ChatResponseCodeCitationPart =
						e.ChatResponseReferencePart =
						e.ChatResponseTextEditPart =
						e.ChatResponseCommandButtonPart =
						e.ChatTaskResult =
						e.ChatTask =
						e.ChatResponseMovePart =
						e.ChatResponseWarningPart =
						e.ChatResponseProgressPart =
						e.ChatResponseAnchorPart =
						e.ChatResponseFilesPart =
						e.ChatResponseConfirmationPart =
						e.ChatResponseDetectedParticipantPart =
						e.ChatResponseMarkdownWithVulnerabilitiesPart =
						e.ChatResponseMarkdownPart =
						e.LanguageModelChatMessage =
						e.LanguageModelChatMessageRole =
						e.ChatFollowup =
						e.DataTransfer =
						e.DataTransferItem =
						e.ViewBadge =
						e.TypeHierarchyItem =
						e.CodeActionTriggerKind =
						e.TestCoverage =
						e.TestResults =
						e.TestItem =
						e.TestTag =
						e.TestMessage =
						e.NotebookRendererScript =
						e.NotebookDocumentContentOptions =
						e.NotebookKernelSourceAction =
						e.NotebookStatusBarItem =
						e.NotebookExclusiveDocumentPattern =
						e.NotebookCellOutput =
						e.NotebookCellOutputItem =
						e.NotebookCellData =
						e.NotebookData =
						e.NotebookCellKind =
						e.NotebookCellExecutionState =
						e.NotebookCellExecutionSummary =
						e.NotebookRange =
						e.MappedEditsContext =
						e.LanguageSelector =
						e.GlobPattern =
						e.TextEditorOpenOptions =
						e.FoldingRangeKind =
						e.FoldingRange =
						e.ProgressLocation =
						e.EndOfLine =
						e.TextEditorLineNumbersStyle =
						e.TextDocumentSaveReason =
						e.SelectionRange =
						e.Color =
						e.ColorPresentation =
						e.DocumentLink =
						e.InlayHintKind =
						e.InlayHintLabelPart =
						e.InlayHint =
						e.SignatureHelp =
						e.SignatureInformation =
						e.ParameterInformation =
						e.CompletionItem =
						e.CompletionItemKind =
						e.CompletionItemTag =
						e.CompletionContext =
						e.CompletionTriggerKind =
						e.MultiDocumentHighlight =
						e.DocumentHighlight =
						e.InlineValueContext =
						e.InlineValue =
						e.EvaluatableExpression =
						e.Hover =
						e.DefinitionLink =
						e.location =
						e.CallHierarchyOutgoingCall =
						e.CallHierarchyIncomingCall =
						e.CallHierarchyItem =
						e.DocumentSymbol =
						e.WorkspaceSymbol =
						e.SymbolTag =
						e.SymbolKind =
						e.WorkspaceEdit =
						e.TextEdit =
						e.DecorationRenderOptions =
						e.DecorationRangeBehavior =
						e.ThemableDecorationRenderOptions =
						e.ThemableDecorationAttachmentRenderOptions =
						e.MarkdownString =
						e.ViewColumn =
						e.DiagnosticSeverity =
						e.DiagnosticRelatedInformation =
						e.Diagnostic =
						e.DiagnosticTag =
						e.DocumentSelector =
						e.Position =
						e.TokenType =
						e.Location =
						e.Range =
						e.Selection =
							void 0),
					(e.$g9 = K),
					(e.$h9 = W),
					(e.$i9 = X),
					(C = mt(C)),
					(m = mt(m)),
					(f = mt(f)),
					(b = mt(b)),
					(s = mt(s)),
					(T = mt(T)),
					(k = mt(k)),
					(N = mt(N));
				var A;
				(function (Ft) {
					function Xt(ut) {
						const {
								selectionStartLineNumber: Et,
								selectionStartColumn: Tt,
								positionLineNumber: qt,
								positionColumn: At,
							} = ut,
							Yt = new N.$obb(Et - 1, Tt - 1),
							ni = new N.$obb(qt - 1, At - 1);
						return new N.$qbb(Yt, ni);
					}
					Ft.to = Xt;
					function $t(ut) {
						const { anchor: Et, active: Tt } = ut;
						return {
							selectionStartLineNumber: Et.line + 1,
							selectionStartColumn: Et.character + 1,
							positionLineNumber: Tt.line + 1,
							positionColumn: Tt.character + 1,
						};
					}
					Ft.from = $t;
				})(A || (e.Selection = A = {}));
				var R;
				(function (Ft) {
					function Xt(ut) {
						if (!ut) return;
						const { start: Et, end: Tt } = ut;
						return {
							startLineNumber: Et.line + 1,
							startColumn: Et.character + 1,
							endLineNumber: Tt.line + 1,
							endColumn: Tt.character + 1,
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						if (!ut) return;
						const {
							startLineNumber: Et,
							startColumn: Tt,
							endLineNumber: qt,
							endColumn: At,
						} = ut;
						return new N.$pbb(Et - 1, Tt - 1, qt - 1, At - 1);
					}
					Ft.to = $t;
				})(R || (e.Range = R = {}));
				var O;
				(function (Ft) {
					function Xt(ut) {
						return { uri: ut.uri, range: R.from(ut.range) };
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$Bbb(p.URI.revive(ut.uri), R.to(ut.range));
					}
					Ft.to = $t;
				})(O || (e.Location = O = {}));
				var B;
				(function (Ft) {
					function Xt($t) {
						switch ($t) {
							case b.StandardTokenType.Comment:
								return N.StandardTokenType.Comment;
							case b.StandardTokenType.Other:
								return N.StandardTokenType.Other;
							case b.StandardTokenType.RegEx:
								return N.StandardTokenType.RegEx;
							case b.StandardTokenType.String:
								return N.StandardTokenType.String;
						}
					}
					Ft.to = Xt;
				})(B || (e.TokenType = B = {}));
				var U;
				(function (Ft) {
					function Xt(ut) {
						return new N.$obb(ut.lineNumber - 1, ut.column - 1);
					}
					Ft.to = Xt;
					function $t(ut) {
						return { lineNumber: ut.line + 1, column: ut.character + 1 };
					}
					Ft.from = $t;
				})(U || (e.Position = U = {}));
				var z;
				(function (Ft) {
					function Xt(Et, Tt, qt) {
						return (0, t.$Lb)((0, t.$6b)(Et).map((At) => $t(At, Tt, qt)));
					}
					Ft.from = Xt;
					function $t(Et, Tt, qt) {
						if (typeof Et == "string")
							return {
								$serialized: !0,
								language: Et,
								isBuiltin: qt?.isBuiltin,
							};
						if (Et)
							return {
								$serialized: !0,
								language: Et.language,
								scheme: ut(Et.scheme, Tt),
								pattern: Ve.from(Et.pattern) ?? void 0,
								exclusive: Et.exclusive,
								notebookType: Et.notebookType,
								isBuiltin: qt?.isBuiltin,
							};
					}
					function ut(Et, Tt) {
						return Tt && typeof Et == "string"
							? Tt.transformOutgoingScheme(Et)
							: Et;
					}
				})(z || (e.DocumentSelector = z = {}));
				var F;
				(function (Ft) {
					function Xt(ut) {
						switch (ut) {
							case N.DiagnosticTag.Unnecessary:
								return y.MarkerTag.Unnecessary;
							case N.DiagnosticTag.Deprecated:
								return y.MarkerTag.Deprecated;
						}
					}
					Ft.from = Xt;
					function $t(ut) {
						switch (ut) {
							case y.MarkerTag.Unnecessary:
								return N.DiagnosticTag.Unnecessary;
							case y.MarkerTag.Deprecated:
								return N.DiagnosticTag.Deprecated;
							default:
								return;
						}
					}
					Ft.to = $t;
				})(F || (e.DiagnosticTag = F = {}));
				var x;
				(function (Ft) {
					function Xt(ut) {
						let Et;
						return (
							ut.code &&
								((0, g.$lg)(ut.code) || (0, g.$pg)(ut.code)
									? (Et = String(ut.code))
									: (Et = {
											value: String(ut.code.value),
											target: ut.code.target,
										})),
							{
								...R.from(ut.range),
								message: ut.message,
								source: ut.source,
								code: Et,
								severity: q.from(ut.severity),
								relatedInformation:
									ut.relatedInformation && ut.relatedInformation.map(H.from),
								tags: Array.isArray(ut.tags)
									? (0, t.$Lb)(ut.tags.map(F.from))
									: void 0,
							}
						);
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = new N.$Dbb(R.to(ut), ut.message, q.to(ut.severity));
						return (
							(Et.source = ut.source),
							(Et.code = (0, g.$lg)(ut.code) ? ut.code : ut.code?.value),
							(Et.relatedInformation =
								ut.relatedInformation && ut.relatedInformation.map(H.to)),
							(Et.tags = ut.tags && (0, t.$Lb)(ut.tags.map(F.to))),
							Et
						);
					}
					Ft.to = $t;
				})(x || (e.Diagnostic = x = {}));
				var H;
				(function (Ft) {
					function Xt(ut) {
						return {
							...R.from(ut.location.range),
							message: ut.message,
							resource: ut.location.uri,
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$Cbb(new N.$Bbb(ut.resource, R.to(ut)), ut.message);
					}
					Ft.to = $t;
				})(H || (e.DiagnosticRelatedInformation = H = {}));
				var q;
				(function (Ft) {
					function Xt(ut) {
						switch (ut) {
							case N.DiagnosticSeverity.Error:
								return y.MarkerSeverity.Error;
							case N.DiagnosticSeverity.Warning:
								return y.MarkerSeverity.Warning;
							case N.DiagnosticSeverity.Information:
								return y.MarkerSeverity.Info;
							case N.DiagnosticSeverity.Hint:
								return y.MarkerSeverity.Hint;
						}
						return y.MarkerSeverity.Error;
					}
					Ft.from = Xt;
					function $t(ut) {
						switch (ut) {
							case y.MarkerSeverity.Info:
								return N.DiagnosticSeverity.Information;
							case y.MarkerSeverity.Warning:
								return N.DiagnosticSeverity.Warning;
							case y.MarkerSeverity.Error:
								return N.DiagnosticSeverity.Error;
							case y.MarkerSeverity.Hint:
								return N.DiagnosticSeverity.Hint;
							default:
								return N.DiagnosticSeverity.Error;
						}
					}
					Ft.to = $t;
				})(q || (e.DiagnosticSeverity = q = {}));
				var V;
				(function (Ft) {
					function Xt(ut) {
						return typeof ut == "number" && ut >= N.ViewColumn.One
							? ut - 1
							: ut === N.ViewColumn.Beside
								? M.$KY
								: M.$JY;
					}
					Ft.from = Xt;
					function $t(ut) {
						if (typeof ut == "number" && ut >= 0) return ut + 1;
						throw new Error("invalid 'EditorGroupColumn'");
					}
					Ft.to = $t;
				})(V || (e.ViewColumn = V = {}));
				function G(Ft) {
					return typeof Ft.range < "u";
				}
				function K(Ft) {
					return Ft.length === 0 ? !0 : !!G(Ft[0]);
				}
				var J;
				(function (Ft) {
					function Xt(At) {
						return At.map(Ft.from);
					}
					Ft.fromMany = Xt;
					function $t(At) {
						return (
							At &&
							typeof At == "object" &&
							typeof At.language == "string" &&
							typeof At.value == "string"
						);
					}
					function ut(At) {
						let Yt;
						if ($t(At)) {
							const { language: fi, value: Ti } = At;
							Yt = {
								value:
									"```" +
									fi +
									`
` +
									Ti +
									"\n```\n",
							};
						} else
							N.$Rbb.isMarkdownString(At)
								? (Yt = {
										value: At.value,
										isTrusted: At.isTrusted,
										supportThemeIcons: At.supportThemeIcons,
										supportHtml: At.supportHtml,
										baseUri: At.baseUri,
									})
								: typeof At == "string"
									? (Yt = { value: At })
									: (Yt = { value: "" });
						const ni = Object.create(null);
						Yt.uris = ni;
						const bi = ({ href: fi }) => {
							try {
								let Ti = p.URI.parse(fi, !0);
								(Ti = Ti.with({ query: Et(Ti.query, ni) })), (ni[fi] = Ti);
							} catch {}
							return "";
						};
						return (
							m.marked.walkTokens(m.marked.lexer(Yt.value), (fi) => {
								fi.type === "link"
									? bi({ href: fi.href })
									: fi.type === "image" &&
										typeof fi.href == "string" &&
										bi(C.$kl(fi.href));
							}),
							Yt
						);
					}
					Ft.from = ut;
					function Et(At, Yt) {
						if (!At) return At;
						let ni;
						try {
							ni = (0, r.$ii)(At);
						} catch {}
						if (!ni) return At;
						let bi = !1;
						return (
							(ni = (0, a.$xo)(ni, (fi) => {
								if (p.URI.isUri(fi)) {
									const Ti = `__uri_${Math.random().toString(16).slice(2, 8)}`;
									return (Yt[Ti] = fi), (bi = !0), Ti;
								} else return;
							})),
							bi ? JSON.stringify(ni) : At
						);
					}
					function Tt(At) {
						const Yt = new N.$Rbb(At.value, At.supportThemeIcons);
						return (
							(Yt.isTrusted = At.isTrusted),
							(Yt.supportHtml = At.supportHtml),
							(Yt.baseUri = At.baseUri ? p.URI.from(At.baseUri) : void 0),
							Yt
						);
					}
					Ft.to = Tt;
					function qt(At) {
						if (At) return typeof At == "string" ? At : Ft.from(At);
					}
					Ft.fromStrict = qt;
				})(J || (e.MarkdownString = J = {}));
				function W(Ft) {
					return K(Ft)
						? Ft.map((Xt) => ({
								range: R.from(Xt.range),
								hoverMessage: Array.isArray(Xt.hoverMessage)
									? J.fromMany(Xt.hoverMessage)
									: Xt.hoverMessage
										? J.from(Xt.hoverMessage)
										: void 0,
								renderOptions: Xt.renderOptions,
							}))
						: Ft.map((Xt) => ({ range: R.from(Xt) }));
				}
				function X(Ft) {
					return typeof Ft > "u"
						? Ft
						: typeof Ft == "string"
							? p.URI.file(Ft)
							: Ft;
				}
				var Y;
				(function (Ft) {
					function Xt($t) {
						return typeof $t > "u"
							? $t
							: {
									contentText: $t.contentText,
									contentIconPath: $t.contentIconPath
										? X($t.contentIconPath)
										: void 0,
									border: $t.border,
									borderColor: $t.borderColor,
									fontStyle: $t.fontStyle,
									fontWeight: $t.fontWeight,
									textDecoration: $t.textDecoration,
									color: $t.color,
									backgroundColor: $t.backgroundColor,
									margin: $t.margin,
									width: $t.width,
									height: $t.height,
								};
					}
					Ft.from = Xt;
				})(Y || (e.ThemableDecorationAttachmentRenderOptions = Y = {}));
				var ie;
				(function (Ft) {
					function Xt($t) {
						return typeof $t > "u"
							? $t
							: {
									backgroundColor: $t.backgroundColor,
									outline: $t.outline,
									outlineColor: $t.outlineColor,
									outlineStyle: $t.outlineStyle,
									outlineWidth: $t.outlineWidth,
									border: $t.border,
									borderColor: $t.borderColor,
									borderRadius: $t.borderRadius,
									borderSpacing: $t.borderSpacing,
									borderStyle: $t.borderStyle,
									borderWidth: $t.borderWidth,
									fontStyle: $t.fontStyle,
									fontWeight: $t.fontWeight,
									textDecoration: $t.textDecoration,
									cursor: $t.cursor,
									color: $t.color,
									opacity: $t.opacity,
									letterSpacing: $t.letterSpacing,
									gutterIconPath: $t.gutterIconPath
										? X($t.gutterIconPath)
										: void 0,
									gutterIconSize: $t.gutterIconSize,
									overviewRulerColor: $t.overviewRulerColor,
									before: $t.before ? Y.from($t.before) : void 0,
									after: $t.after ? Y.from($t.after) : void 0,
								};
					}
					Ft.from = Xt;
				})(ie || (e.ThemableDecorationRenderOptions = ie = {}));
				var ne;
				(function (Ft) {
					function Xt($t) {
						if (typeof $t > "u") return $t;
						switch ($t) {
							case N.DecorationRangeBehavior.OpenOpen:
								return l.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges;
							case N.DecorationRangeBehavior.ClosedClosed:
								return l.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges;
							case N.DecorationRangeBehavior.OpenClosed:
								return l.TrackedRangeStickiness.GrowsOnlyWhenTypingBefore;
							case N.DecorationRangeBehavior.ClosedOpen:
								return l.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter;
						}
					}
					Ft.from = Xt;
				})(ne || (e.DecorationRangeBehavior = ne = {}));
				var ee;
				(function (Ft) {
					function Xt($t) {
						return {
							isWholeLine: $t.isWholeLine,
							rangeBehavior: $t.rangeBehavior
								? ne.from($t.rangeBehavior)
								: void 0,
							overviewRulerLane: $t.overviewRulerLane,
							light: $t.light ? ie.from($t.light) : void 0,
							dark: $t.dark ? ie.from($t.dark) : void 0,
							backgroundColor: $t.backgroundColor,
							outline: $t.outline,
							outlineColor: $t.outlineColor,
							outlineStyle: $t.outlineStyle,
							outlineWidth: $t.outlineWidth,
							border: $t.border,
							borderColor: $t.borderColor,
							borderRadius: $t.borderRadius,
							borderSpacing: $t.borderSpacing,
							borderStyle: $t.borderStyle,
							borderWidth: $t.borderWidth,
							fontStyle: $t.fontStyle,
							fontWeight: $t.fontWeight,
							textDecoration: $t.textDecoration,
							cursor: $t.cursor,
							color: $t.color,
							opacity: $t.opacity,
							letterSpacing: $t.letterSpacing,
							gutterIconPath: $t.gutterIconPath ? X($t.gutterIconPath) : void 0,
							gutterIconSize: $t.gutterIconSize,
							overviewRulerColor: $t.overviewRulerColor,
							before: $t.before ? Y.from($t.before) : void 0,
							after: $t.after ? Y.from($t.after) : void 0,
						};
					}
					Ft.from = Xt;
				})(ee || (e.DecorationRenderOptions = ee = {}));
				var _;
				(function (Ft) {
					function Xt(ut) {
						return {
							text: ut.newText,
							eol: ut.newEol && Ae.from(ut.newEol),
							range: R.from(ut.range),
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = new N.$wbb(R.to(ut.range), ut.text);
						return (
							(Et.newEol = typeof ut.eol > "u" ? void 0 : Ae.to(ut.eol)), Et
						);
					}
					Ft.to = $t;
				})(_ || (e.TextEdit = _ = {}));
				var te;
				(function (Ft) {
					function Xt(ut, Et) {
						const Tt = { edits: [] };
						if (ut instanceof N.$zbb) {
							const qt = new d.$Hc();
							for (const At of ut._allEntries())
								At._type === N.FileEditType.File &&
									p.URI.isUri(At.to) &&
									At.from === void 0 &&
									qt.add(At.to);
							for (const At of ut._allEntries())
								if (At._type === N.FileEditType.File) {
									let Yt;
									At.options?.contents &&
										(ArrayBuffer.isView(At.options.contents)
											? (Yt = {
													type: "base64",
													value: (0, i.$cf)(i.$Te.wrap(At.options.contents)),
												})
											: (Yt = {
													type: "dataTransferItem",
													id: At.options.contents._itemId,
												})),
										Tt.edits.push({
											oldResource: At.from,
											newResource: At.to,
											options: { ...At.options, contents: Yt },
											metadata: At.metadata,
										});
								} else
									At._type === N.FileEditType.Text
										? Tt.edits.push({
												resource: At.uri,
												textEdit: _.from(At.edit),
												versionId: qt.has(At.uri)
													? void 0
													: Et?.getTextDocumentVersion(At.uri),
												metadata: At.metadata,
											})
										: At._type === N.FileEditType.Snippet
											? Tt.edits.push({
													resource: At.uri,
													textEdit: {
														range: R.from(At.range),
														text: At.edit.value,
														insertAsSnippet: !0,
													},
													versionId: qt.has(At.uri)
														? void 0
														: Et?.getTextDocumentVersion(At.uri),
													metadata: At.metadata,
												})
											: At._type === N.FileEditType.Cell
												? Tt.edits.push({
														metadata: At.metadata,
														resource: At.uri,
														cellEdit: At.edit,
														notebookMetadata: At.notebookMetadata,
														notebookVersionId: Et?.getNotebookDocumentVersion(
															At.uri,
														),
													})
												: At._type === N.FileEditType.CellReplace &&
													Tt.edits.push({
														metadata: At.metadata,
														resource: At.uri,
														notebookVersionId: Et?.getNotebookDocumentVersion(
															At.uri,
														),
														cellEdit: {
															editType: k.CellEditType.Replace,
															index: At.index,
															count: At.count,
															cells: At.cells.map(ct.from),
														},
													});
						}
						return Tt;
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = new N.$zbb(),
							Tt = new d.$Gc();
						for (const qt of ut.edits)
							if (qt.textEdit) {
								const At = qt,
									Yt = p.URI.revive(At.resource),
									ni = R.to(At.textEdit.range),
									bi = At.textEdit.text,
									fi = At.textEdit.insertAsSnippet;
								let Ti;
								fi
									? (Ti = N.$ybb.replace(ni, new N.$Abb(bi)))
									: (Ti = N.$wbb.replace(ni, bi));
								const wt = Tt.get(Yt);
								wt ? wt.push(Ti) : Tt.set(Yt, [Ti]);
							} else
								Et.renameFile(
									p.URI.revive(qt.oldResource),
									p.URI.revive(qt.newResource),
									qt.options,
								);
						for (const [qt, At] of Tt) Et.set(qt, At);
						return Et;
					}
					Ft.to = $t;
				})(te || (e.WorkspaceEdit = te = {}));
				var Q;
				(function (Ft) {
					const Xt = Object.create(null);
					(Xt[N.SymbolKind.File] = s.SymbolKind.File),
						(Xt[N.SymbolKind.Module] = s.SymbolKind.Module),
						(Xt[N.SymbolKind.Namespace] = s.SymbolKind.Namespace),
						(Xt[N.SymbolKind.Package] = s.SymbolKind.Package),
						(Xt[N.SymbolKind.Class] = s.SymbolKind.Class),
						(Xt[N.SymbolKind.Method] = s.SymbolKind.Method),
						(Xt[N.SymbolKind.Property] = s.SymbolKind.Property),
						(Xt[N.SymbolKind.Field] = s.SymbolKind.Field),
						(Xt[N.SymbolKind.Constructor] = s.SymbolKind.Constructor),
						(Xt[N.SymbolKind.Enum] = s.SymbolKind.Enum),
						(Xt[N.SymbolKind.Interface] = s.SymbolKind.Interface),
						(Xt[N.SymbolKind.Function] = s.SymbolKind.Function),
						(Xt[N.SymbolKind.Variable] = s.SymbolKind.Variable),
						(Xt[N.SymbolKind.Constant] = s.SymbolKind.Constant),
						(Xt[N.SymbolKind.String] = s.SymbolKind.String),
						(Xt[N.SymbolKind.Number] = s.SymbolKind.Number),
						(Xt[N.SymbolKind.Boolean] = s.SymbolKind.Boolean),
						(Xt[N.SymbolKind.Array] = s.SymbolKind.Array),
						(Xt[N.SymbolKind.Object] = s.SymbolKind.Object),
						(Xt[N.SymbolKind.Key] = s.SymbolKind.Key),
						(Xt[N.SymbolKind.Null] = s.SymbolKind.Null),
						(Xt[N.SymbolKind.EnumMember] = s.SymbolKind.EnumMember),
						(Xt[N.SymbolKind.Struct] = s.SymbolKind.Struct),
						(Xt[N.SymbolKind.Event] = s.SymbolKind.Event),
						(Xt[N.SymbolKind.Operator] = s.SymbolKind.Operator),
						(Xt[N.SymbolKind.TypeParameter] = s.SymbolKind.TypeParameter);
					function $t(Et) {
						return typeof Xt[Et] == "number" ? Xt[Et] : s.SymbolKind.Property;
					}
					Ft.from = $t;
					function ut(Et) {
						for (const Tt in Xt) if (Xt[Tt] === Et) return Number(Tt);
						return N.SymbolKind.Property;
					}
					Ft.to = ut;
				})(Q || (e.SymbolKind = Q = {}));
				var Z;
				(function (Ft) {
					function Xt(ut) {
						switch (ut) {
							case N.SymbolTag.Deprecated:
								return s.SymbolTag.Deprecated;
						}
					}
					Ft.from = Xt;
					function $t(ut) {
						switch (ut) {
							case s.SymbolTag.Deprecated:
								return N.SymbolTag.Deprecated;
						}
					}
					Ft.to = $t;
				})(Z || (e.SymbolTag = Z = {}));
				var se;
				(function (Ft) {
					function Xt(ut) {
						return {
							name: ut.name,
							kind: Q.from(ut.kind),
							tags: ut.tags && ut.tags.map(Z.from),
							containerName: ut.containerName,
							location: pe.from(ut.location),
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = new N.$Ibb(
							ut.name,
							Q.to(ut.kind),
							ut.containerName,
							pe.to(ut.location),
						);
						return (Et.tags = ut.tags && ut.tags.map(Z.to)), Et;
					}
					Ft.to = $t;
				})(se || (e.WorkspaceSymbol = se = {}));
				var re;
				(function (Ft) {
					function Xt(ut) {
						const Et = {
							name: ut.name || "!!MISSING: name!!",
							detail: ut.detail,
							range: R.from(ut.range),
							selectionRange: R.from(ut.selectionRange),
							kind: Q.from(ut.kind),
							tags: ut.tags?.map(Z.from) ?? [],
						};
						return ut.children && (Et.children = ut.children.map(Xt)), Et;
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = new N.$Jbb(
							ut.name,
							ut.detail,
							Q.to(ut.kind),
							R.to(ut.range),
							R.to(ut.selectionRange),
						);
						return (
							(0, t.$Pb)(ut.tags) && (Et.tags = ut.tags.map(Z.to)),
							ut.children && (Et.children = ut.children.map($t)),
							Et
						);
					}
					Ft.to = $t;
				})(re || (e.DocumentSymbol = re = {}));
				var le;
				(function (Ft) {
					function Xt(ut) {
						const Et = new N.$Nbb(
							Q.to(ut.kind),
							ut.name,
							ut.detail || "",
							p.URI.revive(ut.uri),
							R.to(ut.range),
							R.to(ut.selectionRange),
						);
						return (
							(Et._sessionId = ut._sessionId), (Et._itemId = ut._itemId), Et
						);
					}
					Ft.to = Xt;
					function $t(ut, Et, Tt) {
						if (
							((Et = Et ?? ut._sessionId),
							(Tt = Tt ?? ut._itemId),
							Et === void 0 || Tt === void 0)
						)
							throw new Error("invalid item");
						return {
							_sessionId: Et,
							_itemId: Tt,
							name: ut.name,
							detail: ut.detail,
							kind: Q.from(ut.kind),
							uri: ut.uri,
							range: R.from(ut.range),
							selectionRange: R.from(ut.selectionRange),
							tags: ut.tags?.map(Z.from),
						};
					}
					Ft.from = $t;
				})(le || (e.CallHierarchyItem = le = {}));
				var oe;
				(function (Ft) {
					function Xt($t) {
						return new N.$Obb(
							le.to($t.from),
							$t.fromRanges.map((ut) => R.to(ut)),
						);
					}
					Ft.to = Xt;
				})(oe || (e.CallHierarchyIncomingCall = oe = {}));
				var ae;
				(function (Ft) {
					function Xt($t) {
						return new N.$Pbb(
							le.to($t.to),
							$t.fromRanges.map((ut) => R.to(ut)),
						);
					}
					Ft.to = Xt;
				})(ae || (e.CallHierarchyOutgoingCall = ae = {}));
				var pe;
				(function (Ft) {
					function Xt(ut) {
						return { range: ut.range && R.from(ut.range), uri: ut.uri };
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$Bbb(p.URI.revive(ut.uri), R.to(ut.range));
					}
					Ft.to = $t;
				})(pe || (e.location = pe = {}));
				var $e;
				(function (Ft) {
					function Xt(ut) {
						const Et = ut,
							Tt = ut;
						return {
							originSelectionRange: Et.originSelectionRange
								? R.from(Et.originSelectionRange)
								: void 0,
							uri: Et.targetUri ? Et.targetUri : Tt.uri,
							range: R.from(Et.targetRange ? Et.targetRange : Tt.range),
							targetSelectionRange: Et.targetSelectionRange
								? R.from(Et.targetSelectionRange)
								: void 0,
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						return {
							targetUri: p.URI.revive(ut.uri),
							targetRange: R.to(ut.range),
							targetSelectionRange: ut.targetSelectionRange
								? R.to(ut.targetSelectionRange)
								: void 0,
							originSelectionRange: ut.originSelectionRange
								? R.to(ut.originSelectionRange)
								: void 0,
						};
					}
					Ft.to = $t;
				})($e || (e.DefinitionLink = $e = {}));
				var ye;
				(function (Ft) {
					function Xt(ut) {
						return {
							range: R.from(ut.range),
							contents: J.fromMany(ut.contents),
							canIncreaseVerbosity: ut.canIncreaseVerbosity,
							canDecreaseVerbosity: ut.canDecreaseVerbosity,
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = ut.contents.map(J.to),
							Tt = R.to(ut.range),
							qt = ut.canIncreaseVerbosity,
							At = ut.canDecreaseVerbosity;
						return new N.$Fbb(Et, Tt, qt, At);
					}
					Ft.to = $t;
				})(ye || (e.Hover = ye = {}));
				var ue;
				(function (Ft) {
					function Xt(ut) {
						return { range: R.from(ut.range), expression: ut.expression };
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$Acb(R.to(ut.range), ut.expression);
					}
					Ft.to = $t;
				})(ue || (e.EvaluatableExpression = ue = {}));
				var fe;
				(function (Ft) {
					function Xt(ut) {
						if (ut instanceof N.$Bcb)
							return { type: "text", range: R.from(ut.range), text: ut.text };
						if (ut instanceof N.$Ccb)
							return {
								type: "variable",
								range: R.from(ut.range),
								variableName: ut.variableName,
								caseSensitiveLookup: ut.caseSensitiveLookup,
							};
						if (ut instanceof N.$Dcb)
							return {
								type: "expression",
								range: R.from(ut.range),
								expression: ut.expression,
							};
						throw new Error("Unknown 'InlineValue' type");
					}
					Ft.from = Xt;
					function $t(ut) {
						switch (ut.type) {
							case "text":
								return { range: R.to(ut.range), text: ut.text };
							case "variable":
								return {
									range: R.to(ut.range),
									variableName: ut.variableName,
									caseSensitiveLookup: ut.caseSensitiveLookup,
								};
							case "expression":
								return { range: R.to(ut.range), expression: ut.expression };
						}
					}
					Ft.to = $t;
				})(fe || (e.InlineValue = fe = {}));
				var me;
				(function (Ft) {
					function Xt(ut) {
						return {
							frameId: ut.frameId,
							stoppedLocation: R.from(ut.stoppedLocation),
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$Ecb(ut.frameId, R.to(ut.stoppedLocation));
					}
					Ft.to = $t;
				})(me || (e.InlineValueContext = me = {}));
				var ve;
				(function (Ft) {
					function Xt(ut) {
						return { range: R.from(ut.range), kind: ut.kind };
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$Gbb(R.to(ut.range), ut.kind);
					}
					Ft.to = $t;
				})(ve || (e.DocumentHighlight = ve = {}));
				var ge;
				(function (Ft) {
					function Xt(ut) {
						return { uri: ut.uri, highlights: ut.highlights.map(ve.from) };
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$Hbb(p.URI.revive(ut.uri), ut.highlights.map(ve.to));
					}
					Ft.to = $t;
				})(ge || (e.MultiDocumentHighlight = ge = {}));
				var be;
				(function (Ft) {
					function Xt($t) {
						switch ($t) {
							case s.CompletionTriggerKind.TriggerCharacter:
								return N.CompletionTriggerKind.TriggerCharacter;
							case s.CompletionTriggerKind.TriggerForIncompleteCompletions:
								return N.CompletionTriggerKind.TriggerForIncompleteCompletions;
							case s.CompletionTriggerKind.Invoke:
							default:
								return N.CompletionTriggerKind.Invoke;
						}
					}
					Ft.to = Xt;
				})(be || (e.CompletionTriggerKind = be = {}));
				var Ce;
				(function (Ft) {
					function Xt($t) {
						return {
							triggerKind: be.to($t.triggerKind),
							triggerCharacter: $t.triggerCharacter,
						};
					}
					Ft.to = Xt;
				})(Ce || (e.CompletionContext = Ce = {}));
				var Le;
				(function (Ft) {
					function Xt(ut) {
						switch (ut) {
							case N.CompletionItemTag.Deprecated:
								return s.CompletionItemTag.Deprecated;
						}
					}
					Ft.from = Xt;
					function $t(ut) {
						switch (ut) {
							case s.CompletionItemTag.Deprecated:
								return N.CompletionItemTag.Deprecated;
						}
					}
					Ft.to = $t;
				})(Le || (e.CompletionItemTag = Le = {}));
				var Fe;
				(function (Ft) {
					const Xt = new Map([
						[N.CompletionItemKind.Method, s.CompletionItemKind.Method],
						[N.CompletionItemKind.Function, s.CompletionItemKind.Function],
						[
							N.CompletionItemKind.Constructor,
							s.CompletionItemKind.Constructor,
						],
						[N.CompletionItemKind.Field, s.CompletionItemKind.Field],
						[N.CompletionItemKind.Variable, s.CompletionItemKind.Variable],
						[N.CompletionItemKind.Class, s.CompletionItemKind.Class],
						[N.CompletionItemKind.Interface, s.CompletionItemKind.Interface],
						[N.CompletionItemKind.Struct, s.CompletionItemKind.Struct],
						[N.CompletionItemKind.Module, s.CompletionItemKind.Module],
						[N.CompletionItemKind.Property, s.CompletionItemKind.Property],
						[N.CompletionItemKind.Unit, s.CompletionItemKind.Unit],
						[N.CompletionItemKind.Value, s.CompletionItemKind.Value],
						[N.CompletionItemKind.Constant, s.CompletionItemKind.Constant],
						[N.CompletionItemKind.Enum, s.CompletionItemKind.Enum],
						[N.CompletionItemKind.EnumMember, s.CompletionItemKind.EnumMember],
						[N.CompletionItemKind.Keyword, s.CompletionItemKind.Keyword],
						[N.CompletionItemKind.Snippet, s.CompletionItemKind.Snippet],
						[N.CompletionItemKind.Text, s.CompletionItemKind.Text],
						[N.CompletionItemKind.Color, s.CompletionItemKind.Color],
						[N.CompletionItemKind.File, s.CompletionItemKind.File],
						[N.CompletionItemKind.Reference, s.CompletionItemKind.Reference],
						[N.CompletionItemKind.Folder, s.CompletionItemKind.Folder],
						[N.CompletionItemKind.Event, s.CompletionItemKind.Event],
						[N.CompletionItemKind.Operator, s.CompletionItemKind.Operator],
						[
							N.CompletionItemKind.TypeParameter,
							s.CompletionItemKind.TypeParameter,
						],
						[N.CompletionItemKind.Issue, s.CompletionItemKind.Issue],
						[N.CompletionItemKind.User, s.CompletionItemKind.User],
					]);
					function $t(Tt) {
						return Xt.get(Tt) ?? s.CompletionItemKind.Property;
					}
					Ft.from = $t;
					const ut = new Map([
						[s.CompletionItemKind.Method, N.CompletionItemKind.Method],
						[s.CompletionItemKind.Function, N.CompletionItemKind.Function],
						[
							s.CompletionItemKind.Constructor,
							N.CompletionItemKind.Constructor,
						],
						[s.CompletionItemKind.Field, N.CompletionItemKind.Field],
						[s.CompletionItemKind.Variable, N.CompletionItemKind.Variable],
						[s.CompletionItemKind.Class, N.CompletionItemKind.Class],
						[s.CompletionItemKind.Interface, N.CompletionItemKind.Interface],
						[s.CompletionItemKind.Struct, N.CompletionItemKind.Struct],
						[s.CompletionItemKind.Module, N.CompletionItemKind.Module],
						[s.CompletionItemKind.Property, N.CompletionItemKind.Property],
						[s.CompletionItemKind.Unit, N.CompletionItemKind.Unit],
						[s.CompletionItemKind.Value, N.CompletionItemKind.Value],
						[s.CompletionItemKind.Constant, N.CompletionItemKind.Constant],
						[s.CompletionItemKind.Enum, N.CompletionItemKind.Enum],
						[s.CompletionItemKind.EnumMember, N.CompletionItemKind.EnumMember],
						[s.CompletionItemKind.Keyword, N.CompletionItemKind.Keyword],
						[s.CompletionItemKind.Snippet, N.CompletionItemKind.Snippet],
						[s.CompletionItemKind.Text, N.CompletionItemKind.Text],
						[s.CompletionItemKind.Color, N.CompletionItemKind.Color],
						[s.CompletionItemKind.File, N.CompletionItemKind.File],
						[s.CompletionItemKind.Reference, N.CompletionItemKind.Reference],
						[s.CompletionItemKind.Folder, N.CompletionItemKind.Folder],
						[s.CompletionItemKind.Event, N.CompletionItemKind.Event],
						[s.CompletionItemKind.Operator, N.CompletionItemKind.Operator],
						[
							s.CompletionItemKind.TypeParameter,
							N.CompletionItemKind.TypeParameter,
						],
						[s.CompletionItemKind.User, N.CompletionItemKind.User],
						[s.CompletionItemKind.Issue, N.CompletionItemKind.Issue],
					]);
					function Et(Tt) {
						return ut.get(Tt) ?? N.CompletionItemKind.Property;
					}
					Ft.to = Et;
				})(Fe || (e.CompletionItemKind = Fe = {}));
				var Oe;
				(function (Ft) {
					function Xt($t, ut) {
						const Et = new N.$Xbb($t.label);
						return (
							(Et.insertText = $t.insertText),
							(Et.kind = Fe.to($t.kind)),
							(Et.tags = $t.tags?.map(Le.to)),
							(Et.detail = $t.detail),
							(Et.documentation = C.$el($t.documentation)
								? J.to($t.documentation)
								: $t.documentation),
							(Et.sortText = $t.sortText),
							(Et.filterText = $t.filterText),
							(Et.preselect = $t.preselect),
							(Et.commitCharacters = $t.commitCharacters),
							f.$iL.isIRange($t.range)
								? (Et.range = R.to($t.range))
								: typeof $t.range == "object" &&
									(Et.range = {
										inserting: R.to($t.range.insert),
										replacing: R.to($t.range.replace),
									}),
							(Et.keepWhitespace =
								typeof $t.insertTextRules > "u"
									? !1
									: !!(
											$t.insertTextRules &
											s.CompletionItemInsertTextRule.KeepWhitespace
										)),
							typeof $t.insertTextRules < "u" &&
							$t.insertTextRules &
								s.CompletionItemInsertTextRule.InsertAsSnippet
								? (Et.insertText = new N.$Abb($t.insertText))
								: ((Et.insertText = $t.insertText),
									(Et.textEdit =
										Et.range instanceof N.$pbb
											? new N.$wbb(Et.range, Et.insertText)
											: void 0)),
							$t.additionalTextEdits &&
								$t.additionalTextEdits.length > 0 &&
								(Et.additionalTextEdits = $t.additionalTextEdits.map((Tt) =>
									_.to(Tt),
								)),
							(Et.command =
								ut && $t.command ? ut.fromInternal($t.command) : void 0),
							Et
						);
					}
					Ft.to = Xt;
				})(Oe || (e.CompletionItem = Oe = {}));
				var xe;
				(function (Ft) {
					function Xt(ut) {
						if (typeof ut.label != "string" && !Array.isArray(ut.label))
							throw new TypeError("Invalid label");
						return {
							label: ut.label,
							documentation: J.fromStrict(ut.documentation),
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						return {
							label: ut.label,
							documentation: C.$el(ut.documentation)
								? J.to(ut.documentation)
								: ut.documentation,
						};
					}
					Ft.to = $t;
				})(xe || (e.ParameterInformation = xe = {}));
				var He;
				(function (Ft) {
					function Xt(ut) {
						return {
							label: ut.label,
							documentation: J.fromStrict(ut.documentation),
							parameters: Array.isArray(ut.parameters)
								? ut.parameters.map(xe.from)
								: [],
							activeParameter: ut.activeParameter,
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						return {
							label: ut.label,
							documentation: C.$el(ut.documentation)
								? J.to(ut.documentation)
								: ut.documentation,
							parameters: Array.isArray(ut.parameters)
								? ut.parameters.map(xe.to)
								: [],
							activeParameter: ut.activeParameter,
						};
					}
					Ft.to = $t;
				})(He || (e.SignatureInformation = He = {}));
				var Ke;
				(function (Ft) {
					function Xt(ut) {
						return {
							activeSignature: ut.activeSignature,
							activeParameter: ut.activeParameter,
							signatures: Array.isArray(ut.signatures)
								? ut.signatures.map(He.from)
								: [],
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						return {
							activeSignature: ut.activeSignature,
							activeParameter: ut.activeParameter,
							signatures: Array.isArray(ut.signatures)
								? ut.signatures.map(He.to)
								: [],
						};
					}
					Ft.to = $t;
				})(Ke || (e.SignatureHelp = Ke = {}));
				var Je;
				(function (Ft) {
					function Xt($t, ut) {
						const Et = new N.$Wbb(
							U.to(ut.position),
							typeof ut.label == "string"
								? ut.label
								: ut.label.map(Te.to.bind(void 0, $t)),
							ut.kind && Ee.to(ut.kind),
						);
						return (
							(Et.textEdits = ut.textEdits && ut.textEdits.map(_.to)),
							(Et.tooltip = C.$el(ut.tooltip) ? J.to(ut.tooltip) : ut.tooltip),
							(Et.paddingLeft = ut.paddingLeft),
							(Et.paddingRight = ut.paddingRight),
							Et
						);
					}
					Ft.to = Xt;
				})(Je || (e.InlayHint = Je = {}));
				var Te;
				(function (Ft) {
					function Xt($t, ut) {
						const Et = new N.$Vbb(ut.label);
						return (
							(Et.tooltip = C.$el(ut.tooltip) ? J.to(ut.tooltip) : ut.tooltip),
							s.Command.is(ut.command) &&
								(Et.command = $t.fromInternal(ut.command)),
							ut.location && (Et.location = pe.to(ut.location)),
							Et
						);
					}
					Ft.to = Xt;
				})(Te || (e.InlayHintLabelPart = Te = {}));
				var Ee;
				(function (Ft) {
					function Xt(ut) {
						return ut;
					}
					Ft.from = Xt;
					function $t(ut) {
						return ut;
					}
					Ft.to = $t;
				})(Ee || (e.InlayHintKind = Ee = {}));
				var Ie;
				(function (Ft) {
					function Xt(ut) {
						return {
							range: R.from(ut.range),
							url: ut.target,
							tooltip: ut.tooltip,
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						let Et;
						if (ut.url)
							try {
								Et =
									typeof ut.url == "string"
										? p.URI.parse(ut.url, !0)
										: p.URI.revive(ut.url);
							} catch {}
						const Tt = new N.$3bb(R.to(ut.range), Et);
						return (Tt.tooltip = ut.tooltip), Tt;
					}
					Ft.to = $t;
				})(Ie || (e.DocumentLink = Ie = {}));
				var Be;
				(function (Ft) {
					function Xt(ut) {
						const Et = new N.$6bb(ut.label);
						return (
							ut.textEdit && (Et.textEdit = _.to(ut.textEdit)),
							ut.additionalTextEdits &&
								(Et.additionalTextEdits = ut.additionalTextEdits.map((Tt) =>
									_.to(Tt),
								)),
							Et
						);
					}
					Ft.to = Xt;
					function $t(ut) {
						return {
							label: ut.label,
							textEdit: ut.textEdit ? _.from(ut.textEdit) : void 0,
							additionalTextEdits: ut.additionalTextEdits
								? ut.additionalTextEdits.map((Et) => _.from(Et))
								: void 0,
						};
					}
					Ft.from = $t;
				})(Be || (e.ColorPresentation = Be = {}));
				var Se;
				(function (Ft) {
					function Xt(ut) {
						return new N.$4bb(ut[0], ut[1], ut[2], ut[3]);
					}
					Ft.to = Xt;
					function $t(ut) {
						return [ut.red, ut.green, ut.blue, ut.alpha];
					}
					Ft.from = $t;
				})(Se || (e.Color = Se = {}));
				var ke;
				(function (Ft) {
					function Xt(ut) {
						return { range: R.from(ut.range) };
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$Mbb(R.to(ut.range));
					}
					Ft.to = $t;
				})(ke || (e.SelectionRange = ke = {}));
				var Ue;
				(function (Ft) {
					function Xt($t) {
						switch ($t) {
							case S.SaveReason.AUTO:
								return N.TextDocumentSaveReason.AfterDelay;
							case S.SaveReason.EXPLICIT:
								return N.TextDocumentSaveReason.Manual;
							case S.SaveReason.FOCUS_CHANGE:
							case S.SaveReason.WINDOW_CHANGE:
								return N.TextDocumentSaveReason.FocusOut;
						}
					}
					Ft.to = Xt;
				})(Ue || (e.TextDocumentSaveReason = Ue = {}));
				var qe;
				(function (Ft) {
					function Xt(ut) {
						switch (ut) {
							case N.TextEditorLineNumbersStyle.Off:
								return o.RenderLineNumbersType.Off;
							case N.TextEditorLineNumbersStyle.Relative:
								return o.RenderLineNumbersType.Relative;
							case N.TextEditorLineNumbersStyle.Interval:
								return o.RenderLineNumbersType.Interval;
							case N.TextEditorLineNumbersStyle.On:
							default:
								return o.RenderLineNumbersType.On;
						}
					}
					Ft.from = Xt;
					function $t(ut) {
						switch (ut) {
							case o.RenderLineNumbersType.Off:
								return N.TextEditorLineNumbersStyle.Off;
							case o.RenderLineNumbersType.Relative:
								return N.TextEditorLineNumbersStyle.Relative;
							case o.RenderLineNumbersType.Interval:
								return N.TextEditorLineNumbersStyle.Interval;
							case o.RenderLineNumbersType.On:
							default:
								return N.TextEditorLineNumbersStyle.On;
						}
					}
					Ft.to = $t;
				})(qe || (e.TextEditorLineNumbersStyle = qe = {}));
				var Ae;
				(function (Ft) {
					function Xt(ut) {
						if (ut === N.EndOfLine.CRLF) return l.EndOfLineSequence.CRLF;
						if (ut === N.EndOfLine.LF) return l.EndOfLineSequence.LF;
					}
					Ft.from = Xt;
					function $t(ut) {
						if (ut === l.EndOfLineSequence.CRLF) return N.EndOfLine.CRLF;
						if (ut === l.EndOfLineSequence.LF) return N.EndOfLine.LF;
					}
					Ft.to = $t;
				})(Ae || (e.EndOfLine = Ae = {}));
				var Me;
				(function (Ft) {
					function Xt($t) {
						if (typeof $t == "object") return $t.viewId;
						switch ($t) {
							case N.ProgressLocation.SourceControl:
								return $.ProgressLocation.Scm;
							case N.ProgressLocation.Window:
								return $.ProgressLocation.Window;
							case N.ProgressLocation.Notification:
								return $.ProgressLocation.Notification;
						}
						throw new Error("Unknown 'ProgressLocation'");
					}
					Ft.from = Xt;
				})(Me || (e.ProgressLocation = Me = {}));
				var De;
				(function (Ft) {
					function Xt(ut) {
						const Et = { start: ut.start + 1, end: ut.end + 1 };
						return ut.kind && (Et.kind = Re.from(ut.kind)), Et;
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = { start: ut.start - 1, end: ut.end - 1 };
						return ut.kind && (Et.kind = Re.to(ut.kind)), Et;
					}
					Ft.to = $t;
				})(De || (e.FoldingRange = De = {}));
				var Re;
				(function (Ft) {
					function Xt(ut) {
						if (ut)
							switch (ut) {
								case N.FoldingRangeKind.Comment:
									return s.$jM.Comment;
								case N.FoldingRangeKind.Imports:
									return s.$jM.Imports;
								case N.FoldingRangeKind.Region:
									return s.$jM.Region;
							}
					}
					Ft.from = Xt;
					function $t(ut) {
						if (ut)
							switch (ut.value) {
								case s.$jM.Comment.value:
									return N.FoldingRangeKind.Comment;
								case s.$jM.Imports.value:
									return N.FoldingRangeKind.Imports;
								case s.$jM.Region.value:
									return N.FoldingRangeKind.Region;
							}
					}
					Ft.to = $t;
				})(Re || (e.FoldingRangeKind = Re = {}));
				var je;
				(function (Ft) {
					function Xt($t) {
						if ($t)
							return {
								pinned: typeof $t.preview == "boolean" ? !$t.preview : void 0,
								inactive: $t.background,
								preserveFocus: $t.preserveFocus,
								selection:
									typeof $t.selection == "object"
										? R.from($t.selection)
										: void 0,
								override: typeof $t.override == "boolean" ? S.$b1.id : void 0,
							};
					}
					Ft.from = Xt;
				})(je || (e.TextEditorOpenOptions = je = {}));
				var Ve;
				(function (Ft) {
					function Xt(Tt) {
						return Tt instanceof N.$ocb
							? Tt.toJSON()
							: typeof Tt == "string"
								? Tt
								: $t(Tt) || ut(Tt)
									? new N.$ocb(Tt.baseUri ?? Tt.base, Tt.pattern).toJSON()
									: Tt;
					}
					Ft.from = Xt;
					function $t(Tt) {
						const qt = Tt;
						return qt
							? p.URI.isUri(qt.baseUri) && typeof qt.pattern == "string"
							: !1;
					}
					function ut(Tt) {
						const qt = Tt;
						return qt
							? typeof qt.base == "string" && typeof qt.pattern == "string"
							: !1;
					}
					function Et(Tt) {
						return typeof Tt == "string"
							? Tt
							: new N.$ocb(p.URI.revive(Tt.baseUri), Tt.pattern);
					}
					Ft.to = Et;
				})(Ve || (e.GlobPattern = Ve = {}));
				var Ze;
				(function (Ft) {
					function Xt($t) {
						if ($t) {
							if (Array.isArray($t)) return $t.map(Xt);
							if (typeof $t == "string") return $t;
							{
								const ut = $t;
								return {
									language: ut.language,
									scheme: ut.scheme,
									pattern: Ve.from(ut.pattern),
									exclusive: ut.exclusive,
									notebookType: ut.notebookType,
								};
							}
						} else return;
					}
					Ft.from = Xt;
				})(Ze || (e.LanguageSelector = Ze = {}));
				var et;
				(function (Ft) {
					function Xt(ut) {
						return (
							!!ut &&
							typeof ut == "object" &&
							"documents" in ut &&
							Array.isArray(ut.documents) &&
							ut.documents.every(
								(Et) =>
									Array.isArray(Et) &&
									Et.every(
										(Tt) =>
											Tt &&
											typeof Tt == "object" &&
											"uri" in Tt &&
											p.URI.isUri(Tt.uri) &&
											"version" in Tt &&
											typeof Tt.version == "number" &&
											"ranges" in Tt &&
											Array.isArray(Tt.ranges) &&
											Tt.ranges.every((qt) => qt instanceof N.$pbb),
									),
							)
						);
					}
					Ft.is = Xt;
					function $t(ut) {
						return {
							documents: ut.documents.map((Et) =>
								Et.map((Tt) => ({
									uri: p.URI.from(Tt.uri),
									version: Tt.version,
									ranges: Tt.ranges.map((qt) => R.from(qt)),
								})),
							),
						};
					}
					Ft.from = $t;
				})(et || (e.MappedEditsContext = et = {}));
				var rt;
				(function (Ft) {
					function Xt(ut) {
						return { start: ut.start, end: ut.end };
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$Rcb(ut.start, ut.end);
					}
					Ft.to = $t;
				})(rt || (e.NotebookRange = rt = {}));
				var ft;
				(function (Ft) {
					function Xt(ut) {
						return {
							timing:
								typeof ut.runStartTime == "number" &&
								typeof ut.runEndTime == "number"
									? { startTime: ut.runStartTime, endTime: ut.runEndTime }
									: void 0,
							executionOrder: ut.executionOrder,
							success: ut.lastRunSuccess,
						};
					}
					Ft.to = Xt;
					function $t(ut) {
						return {
							lastRunSuccess: ut.success,
							runStartTime: ut.timing?.startTime,
							runEndTime: ut.timing?.endTime,
							executionOrder: ut.executionOrder,
						};
					}
					Ft.from = $t;
				})(ft || (e.NotebookCellExecutionSummary = ft = {}));
				var bt;
				(function (Ft) {
					function Xt($t) {
						if ($t === k.NotebookCellExecutionState.Unconfirmed)
							return N.NotebookCellExecutionState.Pending;
						if ($t === k.NotebookCellExecutionState.Pending) return;
						if ($t === k.NotebookCellExecutionState.Executing)
							return N.NotebookCellExecutionState.Executing;
						throw new Error(`Unknown state: ${$t}`);
					}
					Ft.to = Xt;
				})(bt || (e.NotebookCellExecutionState = bt = {}));
				var nt;
				(function (Ft) {
					function Xt(ut) {
						switch (ut) {
							case N.NotebookCellKind.Markup:
								return k.CellKind.Markup;
							case N.NotebookCellKind.Code:
							default:
								return k.CellKind.Code;
						}
					}
					Ft.from = Xt;
					function $t(ut) {
						switch (ut) {
							case k.CellKind.Markup:
								return N.NotebookCellKind.Markup;
							case k.CellKind.Code:
							default:
								return N.NotebookCellKind.Code;
						}
					}
					Ft.to = $t;
				})(nt || (e.NotebookCellKind = nt = {}));
				var lt;
				(function (Ft) {
					function Xt(ut) {
						const Et = {
							metadata: ut.metadata ?? Object.create(null),
							cells: [],
						};
						for (const Tt of ut.cells)
							N.$Scb.validate(Tt), Et.cells.push(ct.from(Tt));
						return Et;
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = new N.$Tcb(ut.cells.map(ct.to));
						return (0, g.$yg)(ut.metadata) || (Et.metadata = ut.metadata), Et;
					}
					Ft.to = $t;
				})(lt || (e.NotebookData = lt = {}));
				var ct;
				(function (Ft) {
					function Xt(ut) {
						return {
							cellKind: nt.from(ut.kind),
							language: ut.languageId,
							mime: ut.mime,
							source: ut.value,
							metadata: ut.metadata,
							internalMetadata: ft.from(ut.executionSummary ?? {}),
							outputs: ut.outputs ? ut.outputs.map(ht.from) : [],
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$Scb(
							nt.to(ut.cellKind),
							ut.source,
							ut.language,
							ut.mime,
							ut.outputs ? ut.outputs.map(ht.to) : void 0,
							ut.metadata,
							ut.internalMetadata ? ft.to(ut.internalMetadata) : void 0,
						);
					}
					Ft.to = $t;
				})(ct || (e.NotebookCellData = ct = {}));
				var gt;
				(function (Ft) {
					function Xt(ut) {
						return { mime: ut.mime, valueBytes: i.$Te.wrap(ut.data) };
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$Ucb(ut.valueBytes.buffer, ut.mime);
					}
					Ft.to = $t;
				})(gt || (e.NotebookCellOutputItem = gt = {}));
				var ht;
				(function (Ft) {
					function Xt(ut) {
						return {
							outputId: ut.id,
							items: ut.items.map(gt.from),
							metadata: ut.metadata,
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = ut.items.map(gt.to);
						return new N.$Vcb(Et, ut.outputId, ut.metadata);
					}
					Ft.to = $t;
				})(ht || (e.NotebookCellOutput = ht = {}));
				var Rt;
				(function (Ft) {
					function Xt(Et) {
						return ut(Et)
							? {
									include: Ve.from(Et.include) ?? void 0,
									exclude: Ve.from(Et.exclude) ?? void 0,
								}
							: (Ve.from(Et) ?? void 0);
					}
					Ft.from = Xt;
					function $t(Et) {
						return ut(Et)
							? { include: Ve.to(Et.include), exclude: Ve.to(Et.exclude) }
							: Ve.to(Et);
					}
					Ft.to = $t;
					function ut(Et) {
						const Tt = Et;
						return Tt ? !(0, g.$ug)(Tt.include) && !(0, g.$ug)(Tt.exclude) : !1;
					}
				})(Rt || (e.NotebookExclusiveDocumentPattern = Rt = {}));
				var Nt;
				(function (Ft) {
					function Xt($t, ut, Et) {
						const Tt =
							typeof $t.command == "string"
								? { title: "", command: $t.command }
								: $t.command;
						return {
							alignment:
								$t.alignment === N.NotebookCellStatusBarAlignment.Left
									? k.CellStatusbarAlignment.Left
									: k.CellStatusbarAlignment.Right,
							command: ut.toInternal(Tt, Et),
							text: $t.text,
							tooltip: $t.tooltip,
							accessibilityInformation: $t.accessibilityInformation,
							priority: $t.priority,
						};
					}
					Ft.from = Xt;
				})(Nt || (e.NotebookStatusBarItem = Nt = {}));
				var jt;
				(function (Ft) {
					function Xt($t, ut, Et) {
						const Tt =
							typeof $t.command == "string"
								? { title: "", command: $t.command }
								: $t.command;
						return {
							command: ut.toInternal(Tt, Et),
							label: $t.label,
							description: $t.description,
							detail: $t.detail,
							documentation: $t.documentation,
						};
					}
					Ft.from = Xt;
				})(jt || (e.NotebookKernelSourceAction = jt = {}));
				var ti;
				(function (Ft) {
					function Xt($t) {
						return {
							transientOutputs: $t?.transientOutputs ?? !1,
							transientCellMetadata: $t?.transientCellMetadata ?? {},
							transientDocumentMetadata: $t?.transientDocumentMetadata ?? {},
							cellContentMetadata: $t?.cellContentMetadata ?? {},
						};
					}
					Ft.from = Xt;
				})(ti || (e.NotebookDocumentContentOptions = ti = {}));
				var kt;
				(function (Ft) {
					function Xt(ut) {
						return { uri: ut.uri, provides: ut.provides };
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$Xcb(p.URI.revive(ut.uri), ut.provides);
					}
					Ft.to = $t;
				})(kt || (e.NotebookRendererScript = kt = {}));
				var hi;
				(function (Ft) {
					function Xt(ut) {
						return {
							message: J.fromStrict(ut.message) || "",
							type: D.TestMessageType.Error,
							expected: ut.expectedOutput,
							actual: ut.actualOutput,
							contextValue: ut.contextValue,
							location: ut.location && {
								range: R.from(ut.location.range),
								uri: ut.location.uri,
							},
							stackTrace: ut.stackTrace?.map((Et) => ({
								label: Et.label,
								position: Et.position && U.from(Et.position),
								uri: Et.uri && p.URI.revive(Et.uri).toJSON(),
							})),
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = new N.$4cb(
							typeof ut.message == "string" ? ut.message : J.to(ut.message),
						);
						return (
							(Et.actualOutput = ut.actual),
							(Et.expectedOutput = ut.expected),
							(Et.contextValue = ut.contextValue),
							(Et.location = ut.location ? pe.to(ut.location) : void 0),
							Et
						);
					}
					Ft.to = $t;
				})(hi || (e.TestMessage = hi = {}));
				var Kt;
				(function (Ft) {
					(Ft.namespace = D.$p4), (Ft.denamespace = D.$q4);
				})(Kt || (e.TestTag = Kt = {}));
				var di;
				(function (Ft) {
					function Xt(ut) {
						const Et = (0, v.$f9)(ut).controllerId;
						return {
							extId: L.$k4.fromExtHostTestItem(ut, Et).toString(),
							label: ut.label,
							uri: p.URI.revive(ut.uri),
							busy: ut.busy,
							tags: ut.tags.map((Tt) => Kt.namespace(Et, Tt.id)),
							range: f.$iL.lift(R.from(ut.range)),
							description: ut.description || null,
							sortText: ut.sortText || null,
							error: (ut.error && J.fromStrict(ut.error)) || null,
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						return {
							parent: void 0,
							error: void 0,
							id: L.$k4.fromString(ut.extId).localId,
							label: ut.label,
							uri: p.URI.revive(ut.uri),
							tags: (ut.tags || []).map((Et) => {
								const { tagId: Tt } = Kt.denamespace(Et);
								return new N.$5cb(Tt);
							}),
							children: {
								add: () => {},
								delete: () => {},
								forEach: () => {},
								*[Symbol.iterator]() {},
								get: () => {},
								replace: () => {},
								size: 0,
							},
							range: R.to(ut.range || void 0),
							canResolveChildren: !1,
							busy: ut.busy,
							description: ut.description || void 0,
							sortText: ut.sortText || void 0,
						};
					}
					Ft.toPlain = $t;
				})(di || (e.TestItem = di = {})),
					(function (Ft) {
						function Xt(ut) {
							return { id: ut.id };
						}
						Ft.from = Xt;
						function $t(ut) {
							return new N.$5cb(ut.id);
						}
						Ft.to = $t;
					})(Kt || (e.TestTag = Kt = {}));
				var Ye;
				(function (Ft) {
					const Xt = (ut, Et) => {
						const Tt = ut.value;
						if (!Tt) return;
						const qt = {
							...di.toPlain(Tt.item),
							parent: Et,
							taskStates: Tt.tasks.map((At) => ({
								state: At.state,
								duration: At.duration,
								messages: At.messages
									.filter((Yt) => Yt.type === D.TestMessageType.Error)
									.map(hi.to),
							})),
							children: [],
						};
						if (ut.children)
							for (const At of ut.children.values()) {
								const Yt = Xt(At, qt);
								Yt && qt.children.push(Yt);
							}
						return qt;
					};
					function $t(ut) {
						const Et = new h.$j4();
						for (const At of ut.items)
							Et.insert(L.$k4.fromString(At.item.extId).path, At);
						const Tt = [Et.nodes],
							qt = [];
						for (; Tt.length; )
							for (const At of Tt.pop())
								At.value
									? qt.push(At)
									: At.children && Tt.push(At.children.values());
						return {
							completedAt: ut.completedAt,
							results: qt.map((At) => Xt(At)).filter(g.$tg),
						};
					}
					Ft.to = $t;
				})(Ye || (e.TestResults = Ye = {}));
				var ze;
				(function (Ft) {
					function Xt(At) {
						return { covered: At.covered, total: At.total };
					}
					function $t(At) {
						return "line" in At ? U.from(At) : R.from(At);
					}
					function ut(At) {
						if (At) return "endLineNumber" in At ? R.to(At) : U.to(At);
					}
					function Et(At) {
						if (At.type === D.DetailType.Statement) {
							const Yt = [];
							if (At.branches)
								for (const ni of At.branches)
									Yt.push({
										executed: ni.count,
										location: ut(ni.location),
										label: ni.label,
									});
							return new N.$0cb(
								At.count,
								ut(At.location),
								At.branches?.map(
									(ni) => new N.$$cb(ni.count, ut(ni.location), ni.label),
								),
							);
						} else return new N.$_cb(At.name, At.count, ut(At.location));
					}
					Ft.to = Et;
					function Tt(At) {
						if (typeof At.executed == "number" && At.executed < 0)
							throw new Error(`Invalid coverage count ${At.executed}`);
						return "branches" in At
							? {
									count: At.executed,
									location: $t(At.location),
									type: D.DetailType.Statement,
									branches: At.branches.length
										? At.branches.map((Yt) => ({
												count: Yt.executed,
												location: Yt.location && $t(Yt.location),
												label: Yt.label,
											}))
										: void 0,
								}
							: {
									type: D.DetailType.Declaration,
									name: At.name,
									count: At.executed,
									location: $t(At.location),
								};
					}
					Ft.fromDetails = Tt;
					function qt(At, Yt, ni) {
						return (
							N.$8cb(ni.statementCoverage),
							N.$8cb(ni.branchCoverage),
							N.$8cb(ni.declarationCoverage),
							{
								id: Yt,
								uri: ni.uri,
								statement: Xt(ni.statementCoverage),
								branch: ni.branchCoverage && Xt(ni.branchCoverage),
								declaration:
									ni.declarationCoverage && Xt(ni.declarationCoverage),
								testIds:
									ni instanceof N.$9cb && ni.fromTests.length
										? ni.fromTests.map((bi) =>
												L.$k4.fromExtHostTestItem(bi, At).toString(),
											)
										: void 0,
							}
						);
					}
					Ft.fromFile = qt;
				})(ze || (e.TestCoverage = ze = {}));
				var Xe;
				(function (Ft) {
					function Xt($t) {
						switch ($t) {
							case s.CodeActionTriggerType.Invoke:
								return N.CodeActionTriggerKind.Invoke;
							case s.CodeActionTriggerType.Auto:
								return N.CodeActionTriggerKind.Automatic;
						}
					}
					Ft.to = Xt;
				})(Xe || (e.CodeActionTriggerKind = Xe = {}));
				var It;
				(function (Ft) {
					function Xt(ut) {
						const Et = new N.$adb(
							Q.to(ut.kind),
							ut.name,
							ut.detail || "",
							p.URI.revive(ut.uri),
							R.to(ut.range),
							R.to(ut.selectionRange),
						);
						return (
							(Et._sessionId = ut._sessionId), (Et._itemId = ut._itemId), Et
						);
					}
					Ft.to = Xt;
					function $t(ut, Et, Tt) {
						if (
							((Et = Et ?? ut._sessionId),
							(Tt = Tt ?? ut._itemId),
							Et === void 0 || Tt === void 0)
						)
							throw new Error("invalid item");
						return {
							_sessionId: Et,
							_itemId: Tt,
							kind: Q.from(ut.kind),
							name: ut.name,
							detail: ut.detail ?? "",
							uri: ut.uri,
							range: R.from(ut.range),
							selectionRange: R.from(ut.selectionRange),
							tags: ut.tags?.map(Z.from),
						};
					}
					Ft.from = $t;
				})(It || (e.TypeHierarchyItem = It = {}));
				var Lt;
				(function (Ft) {
					function Xt($t) {
						if ($t) return { value: $t.value, tooltip: $t.tooltip };
					}
					Ft.from = Xt;
				})(Lt || (e.ViewBadge = Lt = {}));
				var xt;
				(function (Ft) {
					function Xt(Tt, qt, At) {
						const Yt = qt.fileData;
						return Yt
							? new N.$gcb(
									new N.$hcb(
										Yt.name,
										p.URI.revive(Yt.uri),
										Yt.id,
										(0, E.$hb)(() => At(Yt.id)),
									),
								)
							: Tt === u.$EK.uriList && qt.uriListData
								? new N.$fcb(Et(qt.uriListData))
								: new N.$fcb(qt.asString);
					}
					Ft.to = Xt;
					async function $t(Tt, qt) {
						const At = await qt.asString();
						if (Tt === u.$EK.uriList)
							return { asString: At, fileData: void 0, uriListData: ut(At) };
						const Yt = qt.asFile();
						return {
							asString: At,
							fileData: Yt
								? { name: Yt.name, uri: Yt.uri, id: Yt._itemId ?? Yt.id }
								: void 0,
						};
					}
					Ft.from = $t;
					function ut(Tt) {
						return w.$ZL.split(Tt).map((qt) => {
							if (qt.startsWith("#")) return qt;
							try {
								return p.URI.parse(qt);
							} catch {}
							return qt;
						});
					}
					function Et(Tt) {
						return w.$ZL.create(
							Tt.map((qt) => (typeof qt == "string" ? qt : p.URI.revive(qt))),
						);
					}
				})(xt || (e.DataTransferItem = xt = {}));
				var Vt;
				(function (Ft) {
					function Xt(ut, Et) {
						const Tt = ut.items.map(([qt, At]) => [qt, xt.to(qt, At, Et)]);
						return new N.$icb(Tt);
					}
					Ft.toDataTransfer = Xt;
					async function $t(ut) {
						const Et = { items: [] },
							Tt = [];
						for (const [qt, At] of ut)
							Tt.push(
								(async () => {
									Et.items.push([qt, await xt.from(qt, At)]);
								})(),
							);
						return await Promise.all(Tt), Et;
					}
					Ft.from = $t;
				})(Vt || (e.DataTransfer = Vt = {}));
				var Bt;
				(function (Ft) {
					function Xt(ut, Et) {
						return {
							kind: "reply",
							agentId: ut.participant ?? Et?.agentId ?? "",
							subCommand: ut.command ?? Et?.command,
							message: ut.prompt,
							title: ut.label,
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						return {
							prompt: ut.message,
							label: ut.title,
							participant: ut.agentId,
							command: ut.subCommand,
						};
					}
					Ft.to = $t;
				})(Bt || (e.ChatFollowup = Bt = {}));
				var Gt;
				(function (Ft) {
					function Xt(ut) {
						switch (ut) {
							case T.ChatMessageRole.System:
								return N.LanguageModelChatMessageRole.System;
							case T.ChatMessageRole.User:
								return N.LanguageModelChatMessageRole.User;
							case T.ChatMessageRole.Assistant:
								return N.LanguageModelChatMessageRole.Assistant;
						}
					}
					Ft.to = Xt;
					function $t(ut) {
						switch (ut) {
							case N.LanguageModelChatMessageRole.System:
								return T.ChatMessageRole.System;
							case N.LanguageModelChatMessageRole.User:
								return T.ChatMessageRole.User;
							case N.LanguageModelChatMessageRole.Assistant:
								return T.ChatMessageRole.Assistant;
						}
						return T.ChatMessageRole.User;
					}
					Ft.from = $t;
				})(Gt || (e.LanguageModelChatMessageRole = Gt = {}));
				var Mt;
				(function (Ft) {
					function Xt(ut) {
						const Et = ut.content.map((Yt) =>
								Yt.type === "text"
									? Yt.value
									: Yt.type === "tool_result"
										? new N.$Fdb(Yt.toolCallId, Yt.value, Yt.isError)
										: new N.$Hdb(Yt.name, Yt.toolCallId, Yt.parameters),
							),
							Tt = Et.find((Yt) => typeof Yt == "string") ?? "",
							qt = Gt.to(ut.role),
							At = new N.$Gdb(qt, Tt, ut.name);
						return (At.content2 = Et), At;
					}
					Ft.to = Xt;
					function $t(ut) {
						const Et = Gt.from(ut.role),
							Tt = ut.name,
							qt = ut.content2.map((At) => {
								if (At instanceof N.$Fdb)
									return {
										type: "tool_result",
										toolCallId: At.toolCallId,
										value: At.content,
										isError: At.isError,
									};
								if (At instanceof N.$Hdb)
									return {
										type: "tool_use",
										toolCallId: At.toolCallId,
										name: At.name,
										parameters: At.parameters,
									};
								if (typeof At != "string")
									throw new Error("Unexpected chat message content type");
								return { type: "text", value: At };
							});
						return { role: Et, name: Tt, content: qt };
					}
					Ft.from = $t;
				})(Mt || (e.LanguageModelChatMessage = Mt = {}));
				var Ut;
				(function (Ft) {
					function Xt(ut) {
						return { kind: "markdownContent", content: J.from(ut.value) };
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$ndb(J.to(ut.content));
					}
					Ft.to = $t;
				})(Ut || (e.ChatResponseMarkdownPart = Ut = {}));
				var ei;
				(function (Ft) {
					function Xt(ut) {
						return {
							kind: "markdownVuln",
							content: J.from(ut.value),
							vulnerabilities: ut.vulnerabilities,
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$odb(J.to(ut.content), ut.vulnerabilities);
					}
					Ft.to = $t;
				})(ei || (e.ChatResponseMarkdownWithVulnerabilitiesPart = ei = {}));
				var mi;
				(function (Ft) {
					function Xt(ut) {
						return {
							kind: "agentDetection",
							agentId: ut.participant,
							command: ut.command,
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$pdb(ut.agentId, ut.command);
					}
					Ft.to = $t;
				})(mi || (e.ChatResponseDetectedParticipantPart = mi = {}));
				var ii;
				(function (Ft) {
					function Xt($t) {
						return {
							kind: "confirmation",
							title: $t.title,
							message: $t.message,
							data: $t.data,
							buttons: $t.buttons,
						};
					}
					Ft.from = Xt;
				})(ii || (e.ChatResponseConfirmationPart = ii = {}));
				var Dt;
				(function (Ft) {
					function Xt(ut) {
						const { value: Et, baseUri: Tt } = ut;
						function qt(At, Yt) {
							return At.map((ni) => {
								const bi = p.URI.joinPath(Yt, ni.name);
								return {
									label: ni.name,
									uri: bi,
									children: ni.children && qt(ni.children, bi),
								};
							});
						}
						return {
							kind: "treeData",
							treeData: {
								label: (0, c.$kh)(Tt),
								uri: Tt,
								children: qt(Et, Tt),
							},
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = (0, r.$ji)(ut.treeData);
						function Tt(Yt) {
							return Yt.map((ni) => ({
								name: ni.label,
								children: ni.children && Tt(ni.children),
							}));
						}
						const qt = Et.uri,
							At = Et.children ? Tt(Et.children) : [];
						return new N.$rdb(At, qt);
					}
					Ft.to = $t;
				})(Dt || (e.ChatResponseFilesPart = Dt = {}));
				var Jt;
				(function (Ft) {
					function Xt(ut) {
						const Et = (Tt) => p.URI.isUri(Tt);
						return {
							kind: "inlineReference",
							name: ut.title,
							inlineReference: Et(ut.value) ? ut.value : O.from(ut.value),
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = (0, r.$ji)(ut);
						return new N.$sdb(
							p.URI.isUri(Et.inlineReference)
								? Et.inlineReference
								: O.to(Et.inlineReference),
							ut.name,
						);
					}
					Ft.to = $t;
				})(Jt || (e.ChatResponseAnchorPart = Jt = {}));
				var si;
				(function (Ft) {
					function Xt(ut) {
						return { kind: "progressMessage", content: J.from(ut.value) };
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$tdb(ut.content.value);
					}
					Ft.to = $t;
				})(si || (e.ChatResponseProgressPart = si = {}));
				var Zt;
				(function (Ft) {
					function Xt(ut) {
						return { kind: "warning", content: J.from(ut.value) };
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$vdb(ut.content.value);
					}
					Ft.to = $t;
				})(Zt || (e.ChatResponseWarningPart = Zt = {}));
				var ci;
				(function (Ft) {
					function Xt(ut) {
						return { kind: "move", uri: ut.uri, range: R.from(ut.range) };
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$zdb(p.URI.revive(ut.uri), R.to(ut.range));
					}
					Ft.to = $t;
				})(ci || (e.ChatResponseMovePart = ci = {}));
				var ri;
				(function (Ft) {
					function Xt($t) {
						return { kind: "progressTask", content: J.from($t.value) };
					}
					Ft.from = Xt;
				})(ri || (e.ChatTask = ri = {}));
				var $i;
				(function (Ft) {
					function Xt($t) {
						return {
							kind: "progressTaskResult",
							content: typeof $t == "string" ? J.from($t) : void 0,
						};
					}
					Ft.from = Xt;
				})($i || (e.ChatTaskResult = $i = {}));
				var Wt;
				(function (Ft) {
					function Xt(ut, Et, Tt) {
						return {
							kind: "command",
							command: Et.toInternal(ut.value, Tt) ?? {
								command: ut.value.command,
								title: ut.value.title,
							},
						};
					}
					Ft.from = Xt;
					function $t(ut, Et) {
						return new N.$wdb(
							Et.fromInternal(ut.command) ?? {
								command: ut.command.id,
								title: ut.command.title,
							},
						);
					}
					Ft.to = $t;
				})(Wt || (e.ChatResponseCommandButtonPart = Wt = {}));
				var tt;
				(function (Ft) {
					function Xt(ut) {
						return {
							kind: "textEdit",
							uri: ut.uri,
							edits: ut.edits.map((Et) => _.from(Et)),
						};
					}
					Ft.from = Xt;
					function $t(ut) {
						return new N.$Adb(
							p.URI.revive(ut.uri),
							ut.edits.map((Et) => _.to(Et)),
						);
					}
					Ft.to = $t;
				})(tt || (e.ChatResponseTextEditPart = tt = {}));
				var at;
				(function (Ft) {
					function Xt(ut) {
						const Et = n.ThemeIcon.isThemeIcon(ut.iconPath)
							? ut.iconPath
							: p.URI.isUri(ut.iconPath)
								? { light: p.URI.revive(ut.iconPath) }
								: ut.iconPath &&
										"light" in ut.iconPath &&
										"dark" in ut.iconPath &&
										p.URI.isUri(ut.iconPath.light) &&
										p.URI.isUri(ut.iconPath.dark)
									? {
											light: p.URI.revive(ut.iconPath.light),
											dark: p.URI.revive(ut.iconPath.dark),
										}
									: void 0;
						return typeof ut.value == "object" && "variableName" in ut.value
							? {
									kind: "reference",
									reference: {
										variableName: ut.value.variableName,
										value:
											p.URI.isUri(ut.value.value) || !ut.value.value
												? ut.value.value
												: O.from(ut.value.value),
									},
									iconPath: Et,
									options: ut.options,
								}
							: {
									kind: "reference",
									reference:
										p.URI.isUri(ut.value) || typeof ut.value == "string"
											? ut.value
											: O.from(ut.value),
									iconPath: Et,
									options: ut.options,
								};
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = (0, r.$ji)(ut),
							Tt = (qt) => (p.URI.isUri(qt) ? qt : O.to(qt));
						return new N.$xdb(
							typeof Et.reference == "string"
								? Et.reference
								: "variableName" in Et.reference
									? {
											variableName: Et.reference.variableName,
											value: Et.reference.value && Tt(Et.reference.value),
										}
									: Tt(Et.reference),
						);
					}
					Ft.to = $t;
				})(at || (e.ChatResponseReferencePart = at = {}));
				var pi;
				(function (Ft) {
					function Xt($t) {
						return {
							kind: "codeCitation",
							value: $t.value,
							license: $t.license,
							snippet: $t.snippet,
						};
					}
					Ft.from = Xt;
				})(pi || (e.ChatResponseCodeCitationPart = pi = {}));
				var Li;
				(function (Ft) {
					function Xt(Et, Tt, qt) {
						return Et instanceof N.$ndb
							? Ut.from(Et)
							: Et instanceof N.$sdb
								? Jt.from(Et)
								: Et instanceof N.$xdb
									? at.from(Et)
									: Et instanceof N.$tdb
										? si.from(Et)
										: Et instanceof N.$rdb
											? Dt.from(Et)
											: Et instanceof N.$wdb
												? Wt.from(Et, Tt, qt)
												: Et instanceof N.$Adb
													? tt.from(Et)
													: Et instanceof N.$odb
														? ei.from(Et)
														: Et instanceof N.$pdb
															? mi.from(Et)
															: Et instanceof N.$vdb
																? Zt.from(Et)
																: Et instanceof N.$qdb
																	? ii.from(Et)
																	: Et instanceof N.$ydb
																		? pi.from(Et)
																		: Et instanceof N.$zdb
																			? ci.from(Et)
																			: {
																					kind: "markdownContent",
																					content: J.from(""),
																				};
					}
					Ft.from = Xt;
					function $t(Et, Tt) {
						switch (Et.kind) {
							case "reference":
								return at.to(Et);
							case "markdownContent":
							case "inlineReference":
							case "progressMessage":
							case "treeData":
							case "command":
								return ut(Et, Tt);
						}
					}
					Ft.to = $t;
					function ut(Et, Tt) {
						switch (Et.kind) {
							case "markdownContent":
								return Ut.to(Et);
							case "inlineReference":
								return Jt.to(Et);
							case "progressMessage":
								return;
							case "treeData":
								return Dt.to(Et);
							case "command":
								return Wt.to(Et, Tt);
						}
					}
					Ft.toContent = ut;
				})(Li || (e.ChatResponsePart = Li = {}));
				var Di;
				(function (Ft) {
					function Xt($t, ut) {
						const Et = $t.variables.variables.filter((qt) => qt.isTool),
							Tt = $t.variables.variables.filter((qt) => !qt.isTool);
						return {
							prompt: $t.message,
							command: $t.command,
							attempt: $t.attempt ?? 0,
							enableCommandDetection: $t.enableCommandDetection ?? !0,
							isParticipantDetected: $t.isParticipantDetected ?? !1,
							references: Tt.map(Wi.to),
							toolReferences: Et.map(Gi.to),
							location: Ui.to($t.location),
							acceptedConfirmationData: $t.acceptedConfirmationData,
							rejectedConfirmationData: $t.rejectedConfirmationData,
							location2: ut,
						};
					}
					Ft.to = Xt;
				})(Di || (e.ChatAgentRequest = Di = {}));
				var Ui;
				(function (Ft) {
					function Xt(ut) {
						switch (ut) {
							case I.ChatAgentLocation.Notebook:
								return N.ChatLocation.Notebook;
							case I.ChatAgentLocation.Terminal:
								return N.ChatLocation.Terminal;
							case I.ChatAgentLocation.Panel:
								return N.ChatLocation.Panel;
							case I.ChatAgentLocation.Editor:
								return N.ChatLocation.Editor;
						}
					}
					Ft.to = Xt;
					function $t(ut) {
						switch (ut) {
							case N.ChatLocation.Notebook:
								return I.ChatAgentLocation.Notebook;
							case N.ChatLocation.Terminal:
								return I.ChatAgentLocation.Terminal;
							case N.ChatLocation.Panel:
								return I.ChatAgentLocation.Panel;
							case N.ChatLocation.Editor:
								return I.ChatAgentLocation.Editor;
						}
					}
					Ft.from = $t;
				})(Ui || (e.ChatLocation = Ui = {}));
				var Wi;
				(function (Ft) {
					function Xt($t) {
						const ut = $t.value;
						if (!ut) throw new Error("Invalid value reference");
						return {
							id: $t.id,
							name: $t.name,
							range: $t.range && [$t.range.start, $t.range.endExclusive],
							value: (0, p.$Bc)(ut)
								? p.URI.revive(ut)
								: ut &&
										typeof ut == "object" &&
										"uri" in ut &&
										"range" in ut &&
										(0, p.$Bc)(ut.uri)
									? O.to((0, r.$ji)(ut))
									: ut,
							modelDescription: $t.modelDescription,
						};
					}
					Ft.to = Xt;
				})(Wi || (e.ChatPromptReference = Wi = {}));
				var Gi;
				(function (Ft) {
					function Xt($t) {
						if ($t.value) throw new Error("Invalid tool reference");
						return {
							id: $t.id,
							range: $t.range && [$t.range.start, $t.range.endExclusive],
						};
					}
					Ft.to = Xt;
				})(Gi || (e.ChatLanguageModelToolReference = Gi = {}));
				var qi;
				(function (Ft) {
					function Xt($t, ut, Et) {
						return {
							id: $t.id,
							label: $t.label,
							fullName: $t.fullName,
							icon: $t.icon?.id,
							value: $t.values[0].value,
							insertText: $t.insertText,
							detail: $t.detail,
							documentation: $t.documentation,
							command: ut.toInternal($t.command, Et),
						};
					}
					Ft.from = Xt;
				})(qi || (e.ChatAgentCompletionItem = qi = {}));
				var Oi;
				(function (Ft) {
					function Xt($t) {
						return {
							errorDetails: $t.errorDetails,
							metadata: $t.metadata,
							nextQuestion: $t.nextQuestion,
						};
					}
					Ft.to = Xt;
				})(Oi || (e.ChatAgentResult = Oi = {}));
				var yi;
				(function (Ft) {
					function Xt($t, ut, Et) {
						if (ut.action.kind === "vote") return;
						const Tt = Oi.to($t);
						if (ut.action.kind === "command") {
							const qt = ut.action.commandButton.command;
							return {
								action: {
									kind: "command",
									commandButton: {
										command: Et.fromInternal(qt) ?? {
											command: qt.id,
											title: qt.title,
										},
									},
								},
								result: Tt,
							};
						} else
							return ut.action.kind === "followUp"
								? {
										action: {
											kind: "followUp",
											followup: Bt.to(ut.action.followup),
										},
										result: Tt,
									}
								: ut.action.kind === "inlineChat"
									? {
											action: {
												kind: "editor",
												accepted: ut.action.action === "accepted",
											},
											result: Tt,
										}
									: { action: ut.action, result: Tt };
					}
					Ft.to = Xt;
				})(yi || (e.ChatAgentUserActionEvent = yi = {}));
				var Ai;
				(function (Ft) {
					function Xt(ut) {
						return { ...ut, string: ut.toString() };
					}
					Ft.from = Xt;
					function $t(ut) {
						const Et = { ...ut, toString: () => ut.string };
						return delete Et.string, Et;
					}
					Ft.to = $t;
				})(Ai || (e.LanguageModelToolResult = Ai = {}));
				var li;
				(function (Ft) {
					function Xt($t, ut, Et) {
						return "terminalCommand" in $t
							? {
									terminalCommand: $t.terminalCommand,
									shouldExecute: $t.shouldExecute,
								}
							: "uri" in $t
								? { uri: $t.uri }
								: ut.toInternal($t, Et);
					}
					Ft.from = Xt;
				})(li || (e.TerminalQuickFix = li = {}));
				var Vi;
				(function (Ft) {
					function Xt($t) {
						return { kind: wi.to($t.kind) };
					}
					Ft.to = Xt;
				})(Vi || (e.PartialAcceptInfo = Vi = {}));
				var wi;
				(function (Ft) {
					function Xt($t) {
						switch ($t) {
							case s.PartialAcceptTriggerKind.Word:
								return N.PartialAcceptTriggerKind.Word;
							case s.PartialAcceptTriggerKind.Line:
								return N.PartialAcceptTriggerKind.Line;
							case s.PartialAcceptTriggerKind.Suggest:
								return N.PartialAcceptTriggerKind.Suggest;
							default:
								return N.PartialAcceptTriggerKind.Unknown;
						}
					}
					Ft.to = Xt;
				})(wi || (e.PartialAcceptTriggerKind = wi = {}));
				var _t;
				(function (Ft) {
					function Xt($t, ut) {
						return {
							id: ut,
							label: $t.label,
							description: $t.description,
							canEdit: $t.canEdit,
							collapsibleState:
								$t.collapsibleState || P.DebugTreeItemCollapsibleState.None,
							contextValue: $t.contextValue,
						};
					}
					Ft.from = Xt;
				})(_t || (e.DebugTreeItem = _t = {}));
				var ai;
				(function (Ft) {
					function Xt($t) {
						return {
							id: $t.id,
							modelDescription: $t.modelDescription,
							parametersSchema: $t.parametersSchema,
							displayName: $t.displayName,
						};
					}
					Ft.to = Xt;
				})(ai || (e.LanguageModelToolDescription = ai = {}));
			},
		),
		