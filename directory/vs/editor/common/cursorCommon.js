import '../../../require.js';
import '../../../exports.js';
import './config/editorOptions.js';
import './core/position.js';
import './core/range.js';
import './core/selection.js';
import './languages/supports.js';
import './core/cursorColumns.js';
import './core/indentation.js';
define(
			de[346],
			he([1, 0, 38, 48, 17, 104, 748, 435, 1146]),
			function (ce /*require*/,
 e /*exports*/,
 t /*editorOptions*/,
 i /*position*/,
 w /*range*/,
 E /*selection*/,
 C /*supports*/,
 d /*cursorColumns*/,
 m /*indentation*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Csb =
						e.$Bsb =
						e.SelectionStartKind =
						e.$Asb =
						e.$zsb =
						e.$ysb =
						e.$xsb =
						e.EditOperationType =
							void 0),
					(e.$Dsb = s);
				var r;
				(function (l) {
					(l[(l.Other = 0)] = "Other"),
						(l[(l.DeletingLeft = 2)] = "DeletingLeft"),
						(l[(l.DeletingRight = 3)] = "DeletingRight"),
						(l[(l.TypingOther = 4)] = "TypingOther"),
						(l[(l.TypingFirstSpace = 5)] = "TypingFirstSpace"),
						(l[(l.TypingConsecutiveSpace = 6)] = "TypingConsecutiveSpace");
				})(r || (e.EditOperationType = r = {}));
				const u = () => !0,
					a = () => !1,
					h = (l) => l === " " || l === "	";
				class c {
					static shouldRecreate(y) {
						return (
							y.hasChanged(t.EditorOption.layoutInfo) ||
							y.hasChanged(t.EditorOption.wordSeparators) ||
							y.hasChanged(t.EditorOption.emptySelectionClipboard) ||
							y.hasChanged(t.EditorOption.multiCursorMergeOverlapping) ||
							y.hasChanged(t.EditorOption.multiCursorPaste) ||
							y.hasChanged(t.EditorOption.multiCursorLimit) ||
							y.hasChanged(t.EditorOption.autoClosingBrackets) ||
							y.hasChanged(t.EditorOption.autoClosingComments) ||
							y.hasChanged(t.EditorOption.autoClosingQuotes) ||
							y.hasChanged(t.EditorOption.autoClosingDelete) ||
							y.hasChanged(t.EditorOption.autoClosingOvertype) ||
							y.hasChanged(t.EditorOption.autoSurround) ||
							y.hasChanged(t.EditorOption.useTabStops) ||
							y.hasChanged(t.EditorOption.fontInfo) ||
							y.hasChanged(t.EditorOption.readOnly) ||
							y.hasChanged(t.EditorOption.wordSegmenterLocales)
						);
					}
					constructor(y, $, v, S) {
						(this.languageConfigurationService = S),
							(this._cursorMoveConfigurationBrand = void 0),
							(this.a = y);
						const I = v.options,
							T = I.get(t.EditorOption.layoutInfo),
							P = I.get(t.EditorOption.fontInfo);
						(this.readOnly = I.get(t.EditorOption.readOnly)),
							(this.tabSize = $.tabSize),
							(this.indentSize = $.indentSize),
							(this.insertSpaces = $.insertSpaces),
							(this.stickyTabStops = I.get(t.EditorOption.stickyTabStops)),
							(this.lineHeight = P.lineHeight),
							(this.typicalHalfwidthCharacterWidth =
								P.typicalHalfwidthCharacterWidth),
							(this.pageSize = Math.max(
								1,
								Math.floor(T.height / this.lineHeight) - 2,
							)),
							(this.useTabStops = I.get(t.EditorOption.useTabStops)),
							(this.wordSeparators = I.get(t.EditorOption.wordSeparators)),
							(this.emptySelectionClipboard = I.get(
								t.EditorOption.emptySelectionClipboard,
							)),
							(this.copyWithSyntaxHighlighting = I.get(
								t.EditorOption.copyWithSyntaxHighlighting,
							)),
							(this.multiCursorMergeOverlapping = I.get(
								t.EditorOption.multiCursorMergeOverlapping,
							)),
							(this.multiCursorPaste = I.get(t.EditorOption.multiCursorPaste)),
							(this.multiCursorLimit = I.get(t.EditorOption.multiCursorLimit)),
							(this.autoClosingBrackets = I.get(
								t.EditorOption.autoClosingBrackets,
							)),
							(this.autoClosingComments = I.get(
								t.EditorOption.autoClosingComments,
							)),
							(this.autoClosingQuotes = I.get(
								t.EditorOption.autoClosingQuotes,
							)),
							(this.autoClosingDelete = I.get(
								t.EditorOption.autoClosingDelete,
							)),
							(this.autoClosingOvertype = I.get(
								t.EditorOption.autoClosingOvertype,
							)),
							(this.autoSurround = I.get(t.EditorOption.autoSurround)),
							(this.autoIndent = I.get(t.EditorOption.autoIndent)),
							(this.wordSegmenterLocales = I.get(
								t.EditorOption.wordSegmenterLocales,
							)),
							(this.surroundingPairs = {}),
							(this.b = null),
							(this.shouldAutoCloseBefore = {
								quote: this.d(y, this.autoClosingQuotes, !0),
								comment: this.d(y, this.autoClosingComments, !1),
								bracket: this.d(y, this.autoClosingBrackets, !1),
							}),
							(this.autoClosingPairs = this.languageConfigurationService
								.getLanguageConfiguration(y)
								.getAutoClosingPairs());
						const k = this.languageConfigurationService
							.getLanguageConfiguration(y)
							.getSurroundingPairs();
						if (k) for (const D of k) this.surroundingPairs[D.open] = D.close;
						const L =
							this.languageConfigurationService.getLanguageConfiguration(
								y,
							).comments;
						this.blockCommentStartToken = L?.blockCommentStartToken ?? null;
					}
					get electricChars() {
						if (!this.b) {
							this.b = {};
							const y = this.languageConfigurationService
								.getLanguageConfiguration(this.a)
								.electricCharacter?.getElectricCharacters();
							if (y) for (const $ of y) this.b[$] = !0;
						}
						return this.b;
					}
					onElectricCharacter(y, $, v) {
						const S = (0, C.$oM)($, v - 1),
							I = this.languageConfigurationService.getLanguageConfiguration(
								S.languageId,
							).electricCharacter;
						return I
							? I.onElectricCharacter(y, S, v - S.firstCharOffset)
							: null;
					}
					normalizeIndentation(y) {
						return (0, m.$ZO)(y, this.indentSize, this.insertSpaces);
					}
					d(y, $, v) {
						switch ($) {
							case "beforeWhitespace":
								return h;
							case "languageDefined":
								return this.f(y, v);
							case "always":
								return u;
							case "never":
								return a;
						}
					}
					f(y, $) {
						const v = this.languageConfigurationService
							.getLanguageConfiguration(y)
							.getAutoCloseBeforeSet($);
						return (S) => v.indexOf(S) !== -1;
					}
					visibleColumnFromColumn(y, $) {
						return d.$BM.visibleColumnFromColumn(
							y.getLineContent($.lineNumber),
							$.column,
							this.tabSize,
						);
					}
					columnFromVisibleColumn(y, $, v) {
						const S = d.$BM.columnFromVisibleColumn(
								y.getLineContent($),
								v,
								this.tabSize,
							),
							I = y.getLineMinColumn($);
						if (S < I) return I;
						const T = y.getLineMaxColumn($);
						return S > T ? T : S;
					}
				}
				e.$xsb = c;
				class n {
					static fromModelState(y) {
						return new g(y);
					}
					static fromViewState(y) {
						return new p(y);
					}
					static fromModelSelection(y) {
						const $ = E.$kL.liftSelection(y),
							v = new f(
								w.$iL.fromPositions($.getSelectionStart()),
								o.Simple,
								0,
								$.getPosition(),
								0,
							);
						return n.fromModelState(v);
					}
					static fromModelSelections(y) {
						const $ = [];
						for (let v = 0, S = y.length; v < S; v++)
							$[v] = this.fromModelSelection(y[v]);
						return $;
					}
					constructor(y, $) {
						(this._cursorStateBrand = void 0),
							(this.modelState = y),
							(this.viewState = $);
					}
					equals(y) {
						return (
							this.viewState.equals(y.viewState) &&
							this.modelState.equals(y.modelState)
						);
					}
				}
				e.$ysb = n;
				class g {
					constructor(y) {
						(this.modelState = y), (this.viewState = null);
					}
				}
				e.$zsb = g;
				class p {
					constructor(y) {
						(this.modelState = null), (this.viewState = y);
					}
				}
				e.$Asb = p;
				var o;
				(function (l) {
					(l[(l.Simple = 0)] = "Simple"),
						(l[(l.Word = 1)] = "Word"),
						(l[(l.Line = 2)] = "Line");
				})(o || (e.SelectionStartKind = o = {}));
				class f {
					constructor(y, $, v, S, I) {
						(this.selectionStart = y),
							(this.selectionStartKind = $),
							(this.selectionStartLeftoverVisibleColumns = v),
							(this.position = S),
							(this.leftoverVisibleColumns = I),
							(this._singleCursorStateBrand = void 0),
							(this.selection = f.a(this.selectionStart, this.position));
					}
					equals(y) {
						return (
							this.selectionStartLeftoverVisibleColumns ===
								y.selectionStartLeftoverVisibleColumns &&
							this.leftoverVisibleColumns === y.leftoverVisibleColumns &&
							this.selectionStartKind === y.selectionStartKind &&
							this.position.equals(y.position) &&
							this.selectionStart.equalsRange(y.selectionStart)
						);
					}
					hasSelection() {
						return !this.selection.isEmpty() || !this.selectionStart.isEmpty();
					}
					move(y, $, v, S) {
						return y
							? new f(
									this.selectionStart,
									this.selectionStartKind,
									this.selectionStartLeftoverVisibleColumns,
									new i.$hL($, v),
									S,
								)
							: new f(new w.$iL($, v, $, v), o.Simple, S, new i.$hL($, v), S);
					}
					static a(y, $) {
						return y.isEmpty() || !$.isBeforeOrEqual(y.getStartPosition())
							? E.$kL.fromPositions(y.getStartPosition(), $)
							: E.$kL.fromPositions(y.getEndPosition(), $);
					}
				}
				e.$Bsb = f;
				class b {
					constructor(y, $, v) {
						(this._editOperationResultBrand = void 0),
							(this.type = y),
							(this.commands = $),
							(this.shouldPushStackElementBefore =
								v.shouldPushStackElementBefore),
							(this.shouldPushStackElementAfter =
								v.shouldPushStackElementAfter);
					}
				}
				e.$Csb = b;
				function s(l) {
					return l === "'" || l === '"' || l === "`";
				}
			},
		)
