import '../../../../require.js';
import '../../../../exports.js';
define(de[1542], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.WrappingIndent =
					e.TrackedRangeStickiness =
					e.TextEditorCursorStyle =
					e.TextEditorCursorBlinkingStyle =
					e.SymbolTag =
					e.SymbolKind =
					e.SignatureHelpTriggerKind =
					e.ShowLightbulbIconMode =
					e.SelectionDirection =
					e.ScrollbarVisibility =
					e.ScrollType =
					e.RenderMinimap =
					e.RenderLineNumbersType =
					e.PositionAffinity =
					e.PartialAcceptTriggerKind =
					e.OverviewRulerLane =
					e.OverlayWidgetPositionPreference =
					e.NewSymbolNameTriggerKind =
					e.NewSymbolNameTag =
					e.MouseTargetType =
					e.MinimapSectionHeaderStyle =
					e.MinimapPosition =
					e.MarkerTag =
					e.MarkerSeverity =
					e.KeyCode =
					e.InlineEditTriggerKind =
					e.InlineCompletionTriggerKind =
					e.InlayHintKind =
					e.InjectedTextCursorStops =
					e.IndentAction =
					e.HoverVerbosityAction =
					e.GlyphMarginLane =
					e.EndOfLineSequence =
					e.EndOfLinePreference =
					e.EditorOption =
					e.EditorAutoIndentStrategy =
					e.DocumentHighlightKind =
					e.DefaultEndOfLine =
					e.CursorChangeReason =
					e.ContentWidgetPositionPreference =
					e.CompletionTriggerKind =
					e.CompletionItemTag =
					e.CompletionItemKind =
					e.CompletionItemInsertTextRule =
					e.CodeActionTriggerType =
					e.AccessibilitySupport =
						void 0);
			var t;
			(function (W) {
				(W[(W.Unknown = 0)] = "Unknown"),
					(W[(W.Disabled = 1)] = "Disabled"),
					(W[(W.Enabled = 2)] = "Enabled");
			})(t || (e.AccessibilitySupport = t = {}));
			var i;
			(function (W) {
				(W[(W.Invoke = 1)] = "Invoke"), (W[(W.Auto = 2)] = "Auto");
			})(i || (e.CodeActionTriggerType = i = {}));
			var w;
			(function (W) {
				(W[(W.None = 0)] = "None"),
					(W[(W.KeepWhitespace = 1)] = "KeepWhitespace"),
					(W[(W.InsertAsSnippet = 4)] = "InsertAsSnippet");
			})(w || (e.CompletionItemInsertTextRule = w = {}));
			var E;
			(function (W) {
				(W[(W.Method = 0)] = "Method"),
					(W[(W.Function = 1)] = "Function"),
					(W[(W.Constructor = 2)] = "Constructor"),
					(W[(W.Field = 3)] = "Field"),
					(W[(W.Variable = 4)] = "Variable"),
					(W[(W.Class = 5)] = "Class"),
					(W[(W.Struct = 6)] = "Struct"),
					(W[(W.Interface = 7)] = "Interface"),
					(W[(W.Module = 8)] = "Module"),
					(W[(W.Property = 9)] = "Property"),
					(W[(W.Event = 10)] = "Event"),
					(W[(W.Operator = 11)] = "Operator"),
					(W[(W.Unit = 12)] = "Unit"),
					(W[(W.Value = 13)] = "Value"),
					(W[(W.Constant = 14)] = "Constant"),
					(W[(W.Enum = 15)] = "Enum"),
					(W[(W.EnumMember = 16)] = "EnumMember"),
					(W[(W.Keyword = 17)] = "Keyword"),
					(W[(W.Text = 18)] = "Text"),
					(W[(W.Color = 19)] = "Color"),
					(W[(W.File = 20)] = "File"),
					(W[(W.Reference = 21)] = "Reference"),
					(W[(W.Customcolor = 22)] = "Customcolor"),
					(W[(W.Folder = 23)] = "Folder"),
					(W[(W.TypeParameter = 24)] = "TypeParameter"),
					(W[(W.User = 25)] = "User"),
					(W[(W.Issue = 26)] = "Issue"),
					(W[(W.Snippet = 27)] = "Snippet");
			})(E || (e.CompletionItemKind = E = {}));
			var C;
			(function (W) {
				W[(W.Deprecated = 1)] = "Deprecated";
			})(C || (e.CompletionItemTag = C = {}));
			var d;
			(function (W) {
				(W[(W.Invoke = 0)] = "Invoke"),
					(W[(W.TriggerCharacter = 1)] = "TriggerCharacter"),
					(W[(W.TriggerForIncompleteCompletions = 2)] =
						"TriggerForIncompleteCompletions");
			})(d || (e.CompletionTriggerKind = d = {}));
			var m;
			(function (W) {
				(W[(W.EXACT = 0)] = "EXACT"),
					(W[(W.ABOVE = 1)] = "ABOVE"),
					(W[(W.BELOW = 2)] = "BELOW");
			})(m || (e.ContentWidgetPositionPreference = m = {}));
			var r;
			(function (W) {
				(W[(W.NotSet = 0)] = "NotSet"),
					(W[(W.ContentFlush = 1)] = "ContentFlush"),
					(W[(W.RecoverFromMarkers = 2)] = "RecoverFromMarkers"),
					(W[(W.Explicit = 3)] = "Explicit"),
					(W[(W.Paste = 4)] = "Paste"),
					(W[(W.Undo = 5)] = "Undo"),
					(W[(W.Redo = 6)] = "Redo");
			})(r || (e.CursorChangeReason = r = {}));
			var u;
			(function (W) {
				(W[(W.LF = 1)] = "LF"), (W[(W.CRLF = 2)] = "CRLF");
			})(u || (e.DefaultEndOfLine = u = {}));
			var a;
			(function (W) {
				(W[(W.Text = 0)] = "Text"),
					(W[(W.Read = 1)] = "Read"),
					(W[(W.Write = 2)] = "Write");
			})(a || (e.DocumentHighlightKind = a = {}));
			var h;
			(function (W) {
				(W[(W.None = 0)] = "None"),
					(W[(W.Keep = 1)] = "Keep"),
					(W[(W.Brackets = 2)] = "Brackets"),
					(W[(W.Advanced = 3)] = "Advanced"),
					(W[(W.Full = 4)] = "Full");
			})(h || (e.EditorAutoIndentStrategy = h = {}));
			var c;
			(function (W) {
				(W[(W.acceptSuggestionOnCommitCharacter = 0)] =
					"acceptSuggestionOnCommitCharacter"),
					(W[(W.acceptSuggestionOnEnter = 1)] = "acceptSuggestionOnEnter"),
					(W[(W.accessibilitySupport = 2)] = "accessibilitySupport"),
					(W[(W.accessibilityPageSize = 3)] = "accessibilityPageSize"),
					(W[(W.ariaLabel = 4)] = "ariaLabel"),
					(W[(W.ariaRequired = 5)] = "ariaRequired"),
					(W[(W.autoClosingBrackets = 6)] = "autoClosingBrackets"),
					(W[(W.autoClosingComments = 7)] = "autoClosingComments"),
					(W[(W.screenReaderAnnounceInlineSuggestion = 8)] =
						"screenReaderAnnounceInlineSuggestion"),
					(W[(W.autoClosingDelete = 9)] = "autoClosingDelete"),
					(W[(W.autoClosingOvertype = 10)] = "autoClosingOvertype"),
					(W[(W.autoClosingQuotes = 11)] = "autoClosingQuotes"),
					(W[(W.autoIndent = 12)] = "autoIndent"),
					(W[(W.automaticLayout = 13)] = "automaticLayout"),
					(W[(W.autoSurround = 14)] = "autoSurround"),
					(W[(W.bracketPairColorization = 15)] = "bracketPairColorization"),
					(W[(W.guides = 16)] = "guides"),
					(W[(W.codeLens = 17)] = "codeLens"),
					(W[(W.codeLensFontFamily = 18)] = "codeLensFontFamily"),
					(W[(W.codeLensFontSize = 19)] = "codeLensFontSize"),
					(W[(W.colorDecorators = 20)] = "colorDecorators"),
					(W[(W.colorDecoratorsLimit = 21)] = "colorDecoratorsLimit"),
					(W[(W.columnSelection = 22)] = "columnSelection"),
					(W[(W.comments = 23)] = "comments"),
					(W[(W.contextmenu = 24)] = "contextmenu"),
					(W[(W.copyWithSyntaxHighlighting = 25)] =
						"copyWithSyntaxHighlighting"),
					(W[(W.cursorBlinking = 26)] = "cursorBlinking"),
					(W[(W.cursorSmoothCaretAnimation = 27)] =
						"cursorSmoothCaretAnimation"),
					(W[(W.cursorStyle = 28)] = "cursorStyle"),
					(W[(W.cursorSurroundingLines = 29)] = "cursorSurroundingLines"),
					(W[(W.cursorSurroundingLinesStyle = 30)] =
						"cursorSurroundingLinesStyle"),
					(W[(W.cursorWidth = 31)] = "cursorWidth"),
					(W[(W.disableLayerHinting = 32)] = "disableLayerHinting"),
					(W[(W.disableMonospaceOptimizations = 33)] =
						"disableMonospaceOptimizations"),
					(W[(W.domReadOnly = 34)] = "domReadOnly"),
					(W[(W.dragAndDrop = 35)] = "dragAndDrop"),
					(W[(W.dropIntoEditor = 36)] = "dropIntoEditor"),
					(W[(W.emptySelectionClipboard = 37)] = "emptySelectionClipboard"),
					(W[(W.experimentalWhitespaceRendering = 38)] =
						"experimentalWhitespaceRendering"),
					(W[(W.extraEditorClassName = 39)] = "extraEditorClassName"),
					(W[(W.fastScrollSensitivity = 40)] = "fastScrollSensitivity"),
					(W[(W.find = 41)] = "find"),
					(W[(W.fixedOverflowWidgets = 42)] = "fixedOverflowWidgets"),
					(W[(W.folding = 43)] = "folding"),
					(W[(W.foldingStrategy = 44)] = "foldingStrategy"),
					(W[(W.foldingHighlight = 45)] = "foldingHighlight"),
					(W[(W.foldingImportsByDefault = 46)] = "foldingImportsByDefault"),
					(W[(W.foldingMaximumRegions = 47)] = "foldingMaximumRegions"),
					(W[(W.unfoldOnClickAfterEndOfLine = 48)] =
						"unfoldOnClickAfterEndOfLine"),
					(W[(W.fontFamily = 49)] = "fontFamily"),
					(W[(W.fontInfo = 50)] = "fontInfo"),
					(W[(W.fontLigatures = 51)] = "fontLigatures"),
					(W[(W.fontSize = 52)] = "fontSize"),
					(W[(W.fontWeight = 53)] = "fontWeight"),
					(W[(W.fontVariations = 54)] = "fontVariations"),
					(W[(W.formatOnPaste = 55)] = "formatOnPaste"),
					(W[(W.formatOnType = 56)] = "formatOnType"),
					(W[(W.glyphMargin = 57)] = "glyphMargin"),
					(W[(W.gotoLocation = 58)] = "gotoLocation"),
					(W[(W.hideCursorInOverviewRuler = 59)] = "hideCursorInOverviewRuler"),
					(W[(W.hover = 60)] = "hover"),
					(W[(W.inDiffEditor = 61)] = "inDiffEditor"),
					(W[(W.inlineSuggest = 62)] = "inlineSuggest"),
					(W[(W.inlineEdit = 63)] = "inlineEdit"),
					(W[(W.letterSpacing = 64)] = "letterSpacing"),
					(W[(W.lightbulb = 65)] = "lightbulb"),
					(W[(W.lineDecorationsWidth = 66)] = "lineDecorationsWidth"),
					(W[(W.lineHeight = 67)] = "lineHeight"),
					(W[(W.lineNumbers = 68)] = "lineNumbers"),
					(W[(W.lineNumbersMinChars = 69)] = "lineNumbersMinChars"),
					(W[(W.linkedEditing = 70)] = "linkedEditing"),
					(W[(W.links = 71)] = "links"),
					(W[(W.matchBrackets = 72)] = "matchBrackets"),
					(W[(W.minimap = 73)] = "minimap"),
					(W[(W.mouseStyle = 74)] = "mouseStyle"),
					(W[(W.mouseWheelScrollSensitivity = 75)] =
						"mouseWheelScrollSensitivity"),
					(W[(W.mouseWheelZoom = 76)] = "mouseWheelZoom"),
					(W[(W.multiCursorMergeOverlapping = 77)] =
						"multiCursorMergeOverlapping"),
					(W[(W.multiCursorModifier = 78)] = "multiCursorModifier"),
					(W[(W.multiCursorPaste = 79)] = "multiCursorPaste"),
					(W[(W.multiCursorLimit = 80)] = "multiCursorLimit"),
					(W[(W.occurrencesHighlight = 81)] = "occurrencesHighlight"),
					(W[(W.overviewRulerBorder = 82)] = "overviewRulerBorder"),
					(W[(W.overviewRulerLanes = 83)] = "overviewRulerLanes"),
					(W[(W.padding = 84)] = "padding"),
					(W[(W.pasteAs = 85)] = "pasteAs"),
					(W[(W.parameterHints = 86)] = "parameterHints"),
					(W[(W.peekWidgetDefaultFocus = 87)] = "peekWidgetDefaultFocus"),
					(W[(W.placeholder = 88)] = "placeholder"),
					(W[(W.definitionLinkOpensInPeek = 89)] = "definitionLinkOpensInPeek"),
					(W[(W.quickSuggestions = 90)] = "quickSuggestions"),
					(W[(W.quickSuggestionsDelay = 91)] = "quickSuggestionsDelay"),
					(W[(W.readOnly = 92)] = "readOnly"),
					(W[(W.readOnlyMessage = 93)] = "readOnlyMessage"),
					(W[(W.renameOnType = 94)] = "renameOnType"),
					(W[(W.renderControlCharacters = 95)] = "renderControlCharacters"),
					(W[(W.renderFinalNewline = 96)] = "renderFinalNewline"),
					(W[(W.renderLineHighlight = 97)] = "renderLineHighlight"),
					(W[(W.renderLineHighlightOnlyWhenFocus = 98)] =
						"renderLineHighlightOnlyWhenFocus"),
					(W[(W.renderValidationDecorations = 99)] =
						"renderValidationDecorations"),
					(W[(W.renderWhitespace = 100)] = "renderWhitespace"),
					(W[(W.revealHorizontalRightPadding = 101)] =
						"revealHorizontalRightPadding"),
					(W[(W.roundedSelection = 102)] = "roundedSelection"),
					(W[(W.rulers = 103)] = "rulers"),
					(W[(W.scrollbar = 104)] = "scrollbar"),
					(W[(W.scrollBeyondLastColumn = 105)] = "scrollBeyondLastColumn"),
					(W[(W.scrollBeyondLastLine = 106)] = "scrollBeyondLastLine"),
					(W[(W.scrollPredominantAxis = 107)] = "scrollPredominantAxis"),
					(W[(W.selectionClipboard = 108)] = "selectionClipboard"),
					(W[(W.selectionHighlight = 109)] = "selectionHighlight"),
					(W[(W.selectOnLineNumbers = 110)] = "selectOnLineNumbers"),
					(W[(W.showFoldingControls = 111)] = "showFoldingControls"),
					(W[(W.showUnused = 112)] = "showUnused"),
					(W[(W.snippetSuggestions = 113)] = "snippetSuggestions"),
					(W[(W.smartSelect = 114)] = "smartSelect"),
					(W[(W.smoothScrolling = 115)] = "smoothScrolling"),
					(W[(W.stickyScroll = 116)] = "stickyScroll"),
					(W[(W.stickyTabStops = 117)] = "stickyTabStops"),
					(W[(W.stopRenderingLineAfter = 118)] = "stopRenderingLineAfter"),
					(W[(W.suggest = 119)] = "suggest"),
					(W[(W.suggestFontSize = 120)] = "suggestFontSize"),
					(W[(W.suggestLineHeight = 121)] = "suggestLineHeight"),
					(W[(W.suggestOnTriggerCharacters = 122)] =
						"suggestOnTriggerCharacters"),
					(W[(W.suggestSelection = 123)] = "suggestSelection"),
					(W[(W.tabCompletion = 124)] = "tabCompletion"),
					(W[(W.tabIndex = 125)] = "tabIndex"),
					(W[(W.unicodeHighlighting = 126)] = "unicodeHighlighting"),
					(W[(W.unusualLineTerminators = 127)] = "unusualLineTerminators"),
					(W[(W.useShadowDOM = 128)] = "useShadowDOM"),
					(W[(W.useTabStops = 129)] = "useTabStops"),
					(W[(W.wordBreak = 130)] = "wordBreak"),
					(W[(W.wordSegmenterLocales = 131)] = "wordSegmenterLocales"),
					(W[(W.wordSeparators = 132)] = "wordSeparators"),
					(W[(W.wordWrap = 133)] = "wordWrap"),
					(W[(W.wordWrapBreakAfterCharacters = 134)] =
						"wordWrapBreakAfterCharacters"),
					(W[(W.wordWrapBreakBeforeCharacters = 135)] =
						"wordWrapBreakBeforeCharacters"),
					(W[(W.wordWrapColumn = 136)] = "wordWrapColumn"),
					(W[(W.wordWrapOverride1 = 137)] = "wordWrapOverride1"),
					(W[(W.wordWrapOverride2 = 138)] = "wordWrapOverride2"),
					(W[(W.wrappingIndent = 139)] = "wrappingIndent"),
					(W[(W.wrappingStrategy = 140)] = "wrappingStrategy"),
					(W[(W.showDeprecated = 141)] = "showDeprecated"),
					(W[(W.inlayHints = 142)] = "inlayHints"),
					(W[(W.editorClassName = 143)] = "editorClassName"),
					(W[(W.pixelRatio = 144)] = "pixelRatio"),
					(W[(W.tabFocusMode = 145)] = "tabFocusMode"),
					(W[(W.layoutInfo = 146)] = "layoutInfo"),
					(W[(W.wrappingInfo = 147)] = "wrappingInfo"),
					(W[(W.defaultColorDecorators = 148)] = "defaultColorDecorators"),
					(W[(W.colorDecoratorsActivatedOn = 149)] =
						"colorDecoratorsActivatedOn"),
					(W[(W.inlineCompletionsAccessibilityVerbose = 150)] =
						"inlineCompletionsAccessibilityVerbose");
			})(c || (e.EditorOption = c = {}));
			var n;
			(function (W) {
				(W[(W.TextDefined = 0)] = "TextDefined"),
					(W[(W.LF = 1)] = "LF"),
					(W[(W.CRLF = 2)] = "CRLF");
			})(n || (e.EndOfLinePreference = n = {}));
			var g;
			(function (W) {
				(W[(W.LF = 0)] = "LF"), (W[(W.CRLF = 1)] = "CRLF");
			})(g || (e.EndOfLineSequence = g = {}));
			var p;
			(function (W) {
				(W[(W.Left = 1)] = "Left"),
					(W[(W.Center = 2)] = "Center"),
					(W[(W.Right = 3)] = "Right");
			})(p || (e.GlyphMarginLane = p = {}));
			var o;
			(function (W) {
				(W[(W.Increase = 0)] = "Increase"), (W[(W.Decrease = 1)] = "Decrease");
			})(o || (e.HoverVerbosityAction = o = {}));
			var f;
			(function (W) {
				(W[(W.None = 0)] = "None"),
					(W[(W.Indent = 1)] = "Indent"),
					(W[(W.IndentOutdent = 2)] = "IndentOutdent"),
					(W[(W.Outdent = 3)] = "Outdent");
			})(f || (e.IndentAction = f = {}));
			var b;
			(function (W) {
				(W[(W.Both = 0)] = "Both"),
					(W[(W.Right = 1)] = "Right"),
					(W[(W.Left = 2)] = "Left"),
					(W[(W.None = 3)] = "None");
			})(b || (e.InjectedTextCursorStops = b = {}));
			var s;
			(function (W) {
				(W[(W.Type = 1)] = "Type"), (W[(W.Parameter = 2)] = "Parameter");
			})(s || (e.InlayHintKind = s = {}));
			var l;
			(function (W) {
				(W[(W.Automatic = 0)] = "Automatic"),
					(W[(W.Explicit = 1)] = "Explicit");
			})(l || (e.InlineCompletionTriggerKind = l = {}));
			var y;
			(function (W) {
				(W[(W.Invoke = 0)] = "Invoke"), (W[(W.Automatic = 1)] = "Automatic");
			})(y || (e.InlineEditTriggerKind = y = {}));
			var $;
			(function (W) {
				(W[(W.DependsOnKbLayout = -1)] = "DependsOnKbLayout"),
					(W[(W.Unknown = 0)] = "Unknown"),
					(W[(W.Backspace = 1)] = "Backspace"),
					(W[(W.Tab = 2)] = "Tab"),
					(W[(W.Enter = 3)] = "Enter"),
					(W[(W.Shift = 4)] = "Shift"),
					(W[(W.Ctrl = 5)] = "Ctrl"),
					(W[(W.Alt = 6)] = "Alt"),
					(W[(W.PauseBreak = 7)] = "PauseBreak"),
					(W[(W.CapsLock = 8)] = "CapsLock"),
					(W[(W.Escape = 9)] = "Escape"),
					(W[(W.Space = 10)] = "Space"),
					(W[(W.PageUp = 11)] = "PageUp"),
					(W[(W.PageDown = 12)] = "PageDown"),
					(W[(W.End = 13)] = "End"),
					(W[(W.Home = 14)] = "Home"),
					(W[(W.LeftArrow = 15)] = "LeftArrow"),
					(W[(W.UpArrow = 16)] = "UpArrow"),
					(W[(W.RightArrow = 17)] = "RightArrow"),
					(W[(W.DownArrow = 18)] = "DownArrow"),
					(W[(W.Insert = 19)] = "Insert"),
					(W[(W.Delete = 20)] = "Delete"),
					(W[(W.Digit0 = 21)] = "Digit0"),
					(W[(W.Digit1 = 22)] = "Digit1"),
					(W[(W.Digit2 = 23)] = "Digit2"),
					(W[(W.Digit3 = 24)] = "Digit3"),
					(W[(W.Digit4 = 25)] = "Digit4"),
					(W[(W.Digit5 = 26)] = "Digit5"),
					(W[(W.Digit6 = 27)] = "Digit6"),
					(W[(W.Digit7 = 28)] = "Digit7"),
					(W[(W.Digit8 = 29)] = "Digit8"),
					(W[(W.Digit9 = 30)] = "Digit9"),
					(W[(W.KeyA = 31)] = "KeyA"),
					(W[(W.KeyB = 32)] = "KeyB"),
					(W[(W.KeyC = 33)] = "KeyC"),
					(W[(W.KeyD = 34)] = "KeyD"),
					(W[(W.KeyE = 35)] = "KeyE"),
					(W[(W.KeyF = 36)] = "KeyF"),
					(W[(W.KeyG = 37)] = "KeyG"),
					(W[(W.KeyH = 38)] = "KeyH"),
					(W[(W.KeyI = 39)] = "KeyI"),
					(W[(W.KeyJ = 40)] = "KeyJ"),
					(W[(W.KeyK = 41)] = "KeyK"),
					(W[(W.KeyL = 42)] = "KeyL"),
					(W[(W.KeyM = 43)] = "KeyM"),
					(W[(W.KeyN = 44)] = "KeyN"),
					(W[(W.KeyO = 45)] = "KeyO"),
					(W[(W.KeyP = 46)] = "KeyP"),
					(W[(W.KeyQ = 47)] = "KeyQ"),
					(W[(W.KeyR = 48)] = "KeyR"),
					(W[(W.KeyS = 49)] = "KeyS"),
					(W[(W.KeyT = 50)] = "KeyT"),
					(W[(W.KeyU = 51)] = "KeyU"),
					(W[(W.KeyV = 52)] = "KeyV"),
					(W[(W.KeyW = 53)] = "KeyW"),
					(W[(W.KeyX = 54)] = "KeyX"),
					(W[(W.KeyY = 55)] = "KeyY"),
					(W[(W.KeyZ = 56)] = "KeyZ"),
					(W[(W.Meta = 57)] = "Meta"),
					(W[(W.ContextMenu = 58)] = "ContextMenu"),
					(W[(W.F1 = 59)] = "F1"),
					(W[(W.F2 = 60)] = "F2"),
					(W[(W.F3 = 61)] = "F3"),
					(W[(W.F4 = 62)] = "F4"),
					(W[(W.F5 = 63)] = "F5"),
					(W[(W.F6 = 64)] = "F6"),
					(W[(W.F7 = 65)] = "F7"),
					(W[(W.F8 = 66)] = "F8"),
					(W[(W.F9 = 67)] = "F9"),
					(W[(W.F10 = 68)] = "F10"),
					(W[(W.F11 = 69)] = "F11"),
					(W[(W.F12 = 70)] = "F12"),
					(W[(W.F13 = 71)] = "F13"),
					(W[(W.F14 = 72)] = "F14"),
					(W[(W.F15 = 73)] = "F15"),
					(W[(W.F16 = 74)] = "F16"),
					(W[(W.F17 = 75)] = "F17"),
					(W[(W.F18 = 76)] = "F18"),
					(W[(W.F19 = 77)] = "F19"),
					(W[(W.F20 = 78)] = "F20"),
					(W[(W.F21 = 79)] = "F21"),
					(W[(W.F22 = 80)] = "F22"),
					(W[(W.F23 = 81)] = "F23"),
					(W[(W.F24 = 82)] = "F24"),
					(W[(W.NumLock = 83)] = "NumLock"),
					(W[(W.ScrollLock = 84)] = "ScrollLock"),
					(W[(W.Semicolon = 85)] = "Semicolon"),
					(W[(W.Equal = 86)] = "Equal"),
					(W[(W.Comma = 87)] = "Comma"),
					(W[(W.Minus = 88)] = "Minus"),
					(W[(W.Period = 89)] = "Period"),
					(W[(W.Slash = 90)] = "Slash"),
					(W[(W.Backquote = 91)] = "Backquote"),
					(W[(W.BracketLeft = 92)] = "BracketLeft"),
					(W[(W.Backslash = 93)] = "Backslash"),
					(W[(W.BracketRight = 94)] = "BracketRight"),
					(W[(W.Quote = 95)] = "Quote"),
					(W[(W.OEM_8 = 96)] = "OEM_8"),
					(W[(W.IntlBackslash = 97)] = "IntlBackslash"),
					(W[(W.Numpad0 = 98)] = "Numpad0"),
					(W[(W.Numpad1 = 99)] = "Numpad1"),
					(W[(W.Numpad2 = 100)] = "Numpad2"),
					(W[(W.Numpad3 = 101)] = "Numpad3"),
					(W[(W.Numpad4 = 102)] = "Numpad4"),
					(W[(W.Numpad5 = 103)] = "Numpad5"),
					(W[(W.Numpad6 = 104)] = "Numpad6"),
					(W[(W.Numpad7 = 105)] = "Numpad7"),
					(W[(W.Numpad8 = 106)] = "Numpad8"),
					(W[(W.Numpad9 = 107)] = "Numpad9"),
					(W[(W.NumpadMultiply = 108)] = "NumpadMultiply"),
					(W[(W.NumpadAdd = 109)] = "NumpadAdd"),
					(W[(W.NUMPAD_SEPARATOR = 110)] = "NUMPAD_SEPARATOR"),
					(W[(W.NumpadSubtract = 111)] = "NumpadSubtract"),
					(W[(W.NumpadDecimal = 112)] = "NumpadDecimal"),
					(W[(W.NumpadDivide = 113)] = "NumpadDivide"),
					(W[(W.KEY_IN_COMPOSITION = 114)] = "KEY_IN_COMPOSITION"),
					(W[(W.ABNT_C1 = 115)] = "ABNT_C1"),
					(W[(W.ABNT_C2 = 116)] = "ABNT_C2"),
					(W[(W.AudioVolumeMute = 117)] = "AudioVolumeMute"),
					(W[(W.AudioVolumeUp = 118)] = "AudioVolumeUp"),
					(W[(W.AudioVolumeDown = 119)] = "AudioVolumeDown"),
					(W[(W.BrowserSearch = 120)] = "BrowserSearch"),
					(W[(W.BrowserHome = 121)] = "BrowserHome"),
					(W[(W.BrowserBack = 122)] = "BrowserBack"),
					(W[(W.BrowserForward = 123)] = "BrowserForward"),
					(W[(W.MediaTrackNext = 124)] = "MediaTrackNext"),
					(W[(W.MediaTrackPrevious = 125)] = "MediaTrackPrevious"),
					(W[(W.MediaStop = 126)] = "MediaStop"),
					(W[(W.MediaPlayPause = 127)] = "MediaPlayPause"),
					(W[(W.LaunchMediaPlayer = 128)] = "LaunchMediaPlayer"),
					(W[(W.LaunchMail = 129)] = "LaunchMail"),
					(W[(W.LaunchApp2 = 130)] = "LaunchApp2"),
					(W[(W.Clear = 131)] = "Clear"),
					(W[(W.MAX_VALUE = 132)] = "MAX_VALUE");
			})($ || (e.KeyCode = $ = {}));
			var v;
			(function (W) {
				(W[(W.Hint = 1)] = "Hint"),
					(W[(W.Info = 2)] = "Info"),
					(W[(W.Warning = 4)] = "Warning"),
					(W[(W.Error = 8)] = "Error");
			})(v || (e.MarkerSeverity = v = {}));
			var S;
			(function (W) {
				(W[(W.Unnecessary = 1)] = "Unnecessary"),
					(W[(W.Deprecated = 2)] = "Deprecated");
			})(S || (e.MarkerTag = S = {}));
			var I;
			(function (W) {
				(W[(W.Inline = 1)] = "Inline"), (W[(W.Gutter = 2)] = "Gutter");
			})(I || (e.MinimapPosition = I = {}));
			var T;
			(function (W) {
				(W[(W.Normal = 1)] = "Normal"), (W[(W.Underlined = 2)] = "Underlined");
			})(T || (e.MinimapSectionHeaderStyle = T = {}));
			var P;
			(function (W) {
				(W[(W.UNKNOWN = 0)] = "UNKNOWN"),
					(W[(W.TEXTAREA = 1)] = "TEXTAREA"),
					(W[(W.GUTTER_GLYPH_MARGIN = 2)] = "GUTTER_GLYPH_MARGIN"),
					(W[(W.GUTTER_LINE_NUMBERS = 3)] = "GUTTER_LINE_NUMBERS"),
					(W[(W.GUTTER_LINE_DECORATIONS = 4)] = "GUTTER_LINE_DECORATIONS"),
					(W[(W.GUTTER_VIEW_ZONE = 5)] = "GUTTER_VIEW_ZONE"),
					(W[(W.CONTENT_TEXT = 6)] = "CONTENT_TEXT"),
					(W[(W.CONTENT_EMPTY = 7)] = "CONTENT_EMPTY"),
					(W[(W.CONTENT_VIEW_ZONE = 8)] = "CONTENT_VIEW_ZONE"),
					(W[(W.CONTENT_WIDGET = 9)] = "CONTENT_WIDGET"),
					(W[(W.OVERVIEW_RULER = 10)] = "OVERVIEW_RULER"),
					(W[(W.SCROLLBAR = 11)] = "SCROLLBAR"),
					(W[(W.OVERLAY_WIDGET = 12)] = "OVERLAY_WIDGET"),
					(W[(W.OUTSIDE_EDITOR = 13)] = "OUTSIDE_EDITOR");
			})(P || (e.MouseTargetType = P = {}));
			var k;
			(function (W) {
				W[(W.AIGenerated = 1)] = "AIGenerated";
			})(k || (e.NewSymbolNameTag = k = {}));
			var L;
			(function (W) {
				(W[(W.Invoke = 0)] = "Invoke"), (W[(W.Automatic = 1)] = "Automatic");
			})(L || (e.NewSymbolNameTriggerKind = L = {}));
			var D;
			(function (W) {
				(W[(W.TOP_RIGHT_CORNER = 0)] = "TOP_RIGHT_CORNER"),
					(W[(W.BOTTOM_RIGHT_CORNER = 1)] = "BOTTOM_RIGHT_CORNER"),
					(W[(W.TOP_CENTER = 2)] = "TOP_CENTER");
			})(D || (e.OverlayWidgetPositionPreference = D = {}));
			var M;
			(function (W) {
				(W[(W.Left = 1)] = "Left"),
					(W[(W.Center = 2)] = "Center"),
					(W[(W.Right = 4)] = "Right"),
					(W[(W.Full = 7)] = "Full");
			})(M || (e.OverviewRulerLane = M = {}));
			var N;
			(function (W) {
				(W[(W.Word = 0)] = "Word"),
					(W[(W.Line = 1)] = "Line"),
					(W[(W.Suggest = 2)] = "Suggest");
			})(N || (e.PartialAcceptTriggerKind = N = {}));
			var A;
			(function (W) {
				(W[(W.Left = 0)] = "Left"),
					(W[(W.Right = 1)] = "Right"),
					(W[(W.None = 2)] = "None"),
					(W[(W.LeftOfInjectedText = 3)] = "LeftOfInjectedText"),
					(W[(W.RightOfInjectedText = 4)] = "RightOfInjectedText");
			})(A || (e.PositionAffinity = A = {}));
			var R;
			(function (W) {
				(W[(W.Off = 0)] = "Off"),
					(W[(W.On = 1)] = "On"),
					(W[(W.Relative = 2)] = "Relative"),
					(W[(W.Interval = 3)] = "Interval"),
					(W[(W.Custom = 4)] = "Custom");
			})(R || (e.RenderLineNumbersType = R = {}));
			var O;
			(function (W) {
				(W[(W.None = 0)] = "None"),
					(W[(W.Text = 1)] = "Text"),
					(W[(W.Blocks = 2)] = "Blocks");
			})(O || (e.RenderMinimap = O = {}));
			var B;
			(function (W) {
				(W[(W.Smooth = 0)] = "Smooth"), (W[(W.Immediate = 1)] = "Immediate");
			})(B || (e.ScrollType = B = {}));
			var U;
			(function (W) {
				(W[(W.Auto = 1)] = "Auto"),
					(W[(W.Hidden = 2)] = "Hidden"),
					(W[(W.Visible = 3)] = "Visible");
			})(U || (e.ScrollbarVisibility = U = {}));
			var z;
			(function (W) {
				(W[(W.LTR = 0)] = "LTR"), (W[(W.RTL = 1)] = "RTL");
			})(z || (e.SelectionDirection = z = {}));
			var F;
			(function (W) {
				(W.Off = "off"), (W.OnCode = "onCode"), (W.On = "on");
			})(F || (e.ShowLightbulbIconMode = F = {}));
			var x;
			(function (W) {
				(W[(W.Invoke = 1)] = "Invoke"),
					(W[(W.TriggerCharacter = 2)] = "TriggerCharacter"),
					(W[(W.ContentChange = 3)] = "ContentChange");
			})(x || (e.SignatureHelpTriggerKind = x = {}));
			var H;
			(function (W) {
				(W[(W.File = 0)] = "File"),
					(W[(W.Module = 1)] = "Module"),
					(W[(W.Namespace = 2)] = "Namespace"),
					(W[(W.Package = 3)] = "Package"),
					(W[(W.Class = 4)] = "Class"),
					(W[(W.Method = 5)] = "Method"),
					(W[(W.Property = 6)] = "Property"),
					(W[(W.Field = 7)] = "Field"),
					(W[(W.Constructor = 8)] = "Constructor"),
					(W[(W.Enum = 9)] = "Enum"),
					(W[(W.Interface = 10)] = "Interface"),
					(W[(W.Function = 11)] = "Function"),
					(W[(W.Variable = 12)] = "Variable"),
					(W[(W.Constant = 13)] = "Constant"),
					(W[(W.String = 14)] = "String"),
					(W[(W.Number = 15)] = "Number"),
					(W[(W.Boolean = 16)] = "Boolean"),
					(W[(W.Array = 17)] = "Array"),
					(W[(W.Object = 18)] = "Object"),
					(W[(W.Key = 19)] = "Key"),
					(W[(W.Null = 20)] = "Null"),
					(W[(W.EnumMember = 21)] = "EnumMember"),
					(W[(W.Struct = 22)] = "Struct"),
					(W[(W.Event = 23)] = "Event"),
					(W[(W.Operator = 24)] = "Operator"),
					(W[(W.TypeParameter = 25)] = "TypeParameter");
			})(H || (e.SymbolKind = H = {}));
			var q;
			(function (W) {
				W[(W.Deprecated = 1)] = "Deprecated";
			})(q || (e.SymbolTag = q = {}));
			var V;
			(function (W) {
				(W[(W.Hidden = 0)] = "Hidden"),
					(W[(W.Blink = 1)] = "Blink"),
					(W[(W.Smooth = 2)] = "Smooth"),
					(W[(W.Phase = 3)] = "Phase"),
					(W[(W.Expand = 4)] = "Expand"),
					(W[(W.Solid = 5)] = "Solid");
			})(V || (e.TextEditorCursorBlinkingStyle = V = {}));
			var G;
			(function (W) {
				(W[(W.Line = 1)] = "Line"),
					(W[(W.Block = 2)] = "Block"),
					(W[(W.Underline = 3)] = "Underline"),
					(W[(W.LineThin = 4)] = "LineThin"),
					(W[(W.BlockOutline = 5)] = "BlockOutline"),
					(W[(W.UnderlineThin = 6)] = "UnderlineThin");
			})(G || (e.TextEditorCursorStyle = G = {}));
			var K;
			(function (W) {
				(W[(W.AlwaysGrowsWhenTypingAtEdges = 0)] =
					"AlwaysGrowsWhenTypingAtEdges"),
					(W[(W.NeverGrowsWhenTypingAtEdges = 1)] =
						"NeverGrowsWhenTypingAtEdges"),
					(W[(W.GrowsOnlyWhenTypingBefore = 2)] = "GrowsOnlyWhenTypingBefore"),
					(W[(W.GrowsOnlyWhenTypingAfter = 3)] = "GrowsOnlyWhenTypingAfter");
			})(K || (e.TrackedRangeStickiness = K = {}));
			var J;
			(function (W) {
				(W[(W.None = 0)] = "None"),
					(W[(W.Same = 1)] = "Same"),
					(W[(W.Indent = 2)] = "Indent"),
					(W[(W.DeepIndent = 3)] = "DeepIndent");
			})(J || (e.WrappingIndent = J = {}));
		}),
		