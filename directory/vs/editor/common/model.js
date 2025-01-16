define(de[64], he([1, 0, 82, 670]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$SN =
					e.$RN =
					e.$QN =
					e.ModelConstants =
					e.PositionAffinity =
					e.$PN =
					e.$ON =
					e.TrackedRangeStickiness =
					e.$MN =
					e.$LN =
					e.EndOfLineSequence =
					e.DefaultEndOfLine =
					e.EndOfLinePreference =
					e.InjectedTextCursorStops =
					e.MinimapSectionHeaderStyle =
					e.MinimapPosition =
					e.GlyphMarginLane =
					e.OverviewRulerLane =
						void 0),
				(e.$NN = g),
				(e.$TN = y);
			var w;
			(function ($) {
				($[($.Left = 1)] = "Left"),
					($[($.Center = 2)] = "Center"),
					($[($.Right = 4)] = "Right"),
					($[($.Full = 7)] = "Full");
			})(w || (e.OverviewRulerLane = w = {}));
			var E;
			(function ($) {
				($[($.Left = 1)] = "Left"),
					($[($.Center = 2)] = "Center"),
					($[($.Right = 3)] = "Right");
			})(E || (e.GlyphMarginLane = E = {}));
			var C;
			(function ($) {
				($[($.Inline = 1)] = "Inline"), ($[($.Gutter = 2)] = "Gutter");
			})(C || (e.MinimapPosition = C = {}));
			var d;
			(function ($) {
				($[($.Normal = 1)] = "Normal"), ($[($.Underlined = 2)] = "Underlined");
			})(d || (e.MinimapSectionHeaderStyle = d = {}));
			var m;
			(function ($) {
				($[($.Both = 0)] = "Both"),
					($[($.Right = 1)] = "Right"),
					($[($.Left = 2)] = "Left"),
					($[($.None = 3)] = "None");
			})(m || (e.InjectedTextCursorStops = m = {}));
			var r;
			(function ($) {
				($[($.TextDefined = 0)] = "TextDefined"),
					($[($.LF = 1)] = "LF"),
					($[($.CRLF = 2)] = "CRLF");
			})(r || (e.EndOfLinePreference = r = {}));
			var u;
			(function ($) {
				($[($.LF = 1)] = "LF"), ($[($.CRLF = 2)] = "CRLF");
			})(u || (e.DefaultEndOfLine = u = {}));
			var a;
			(function ($) {
				($[($.LF = 0)] = "LF"), ($[($.CRLF = 1)] = "CRLF");
			})(a || (e.EndOfLineSequence = a = {}));
			class h {
				get originalIndentSize() {
					return this.a ? "tabSize" : this.indentSize;
				}
				constructor(v) {
					(this._textModelResolvedOptionsBrand = void 0),
						(this.tabSize = Math.max(1, v.tabSize | 0)),
						v.indentSize === "tabSize"
							? ((this.indentSize = this.tabSize), (this.a = !0))
							: ((this.indentSize = Math.max(1, v.indentSize | 0)),
								(this.a = !1)),
						(this.insertSpaces = !!v.insertSpaces),
						(this.defaultEOL = v.defaultEOL | 0),
						(this.trimAutoWhitespace = !!v.trimAutoWhitespace),
						(this.bracketPairColorizationOptions =
							v.bracketPairColorizationOptions);
				}
				equals(v) {
					return (
						this.tabSize === v.tabSize &&
						this.a === v.a &&
						this.indentSize === v.indentSize &&
						this.insertSpaces === v.insertSpaces &&
						this.defaultEOL === v.defaultEOL &&
						this.trimAutoWhitespace === v.trimAutoWhitespace &&
						(0, t.$zo)(
							this.bracketPairColorizationOptions,
							v.bracketPairColorizationOptions,
						)
					);
				}
				createChangeEvent(v) {
					return {
						tabSize: this.tabSize !== v.tabSize,
						indentSize: this.indentSize !== v.indentSize,
						insertSpaces: this.insertSpaces !== v.insertSpaces,
						trimAutoWhitespace:
							this.trimAutoWhitespace !== v.trimAutoWhitespace,
					};
				}
			}
			e.$LN = h;
			class c {
				constructor(v, S) {
					(this._findMatchBrand = void 0), (this.range = v), (this.matches = S);
				}
			}
			e.$MN = c;
			var n;
			(function ($) {
				($[($.AlwaysGrowsWhenTypingAtEdges = 0)] =
					"AlwaysGrowsWhenTypingAtEdges"),
					($[($.NeverGrowsWhenTypingAtEdges = 1)] =
						"NeverGrowsWhenTypingAtEdges"),
					($[($.GrowsOnlyWhenTypingBefore = 2)] = "GrowsOnlyWhenTypingBefore"),
					($[($.GrowsOnlyWhenTypingAfter = 3)] = "GrowsOnlyWhenTypingAfter");
			})(n || (e.TrackedRangeStickiness = n = {}));
			function g($) {
				return $ && typeof $.read == "function";
			}
			const p = () => ({
				topPromptBarData: {
					selections: [],
					selectedDocs: [],
					lastGenerationUUID: void 0,
					diffIds: [],
					initText: "",
					userBubbleDelegate: new i.$KN(),
					shown: !1,
				},
			});
			(e.$ON = p), (e.$PN = { topPromptBarData: ($) => {} });
			var o;
			(function ($) {
				($[($.Left = 0)] = "Left"),
					($[($.Right = 1)] = "Right"),
					($[($.None = 2)] = "None"),
					($[($.LeftOfInjectedText = 3)] = "LeftOfInjectedText"),
					($[($.RightOfInjectedText = 4)] = "RightOfInjectedText");
			})(o || (e.PositionAffinity = o = {}));
			var f;
			(function ($) {
				$[($.FIRST_LINE_DETECTION_LENGTH_LIMIT = 1e3)] =
					"FIRST_LINE_DETECTION_LENGTH_LIMIT";
			})(f || (e.ModelConstants = f = {}));
			class b {
				constructor(v, S, I, T, P, k) {
					(this.identifier = v),
						(this.range = S),
						(this.text = I),
						(this.forceMoveMarkers = T),
						(this.isAutoWhitespaceEdit = P),
						(this._isTracked = k);
				}
			}
			e.$QN = b;
			class s {
				constructor(v, S, I) {
					(this.regex = v), (this.wordSeparators = S), (this.simpleSearch = I);
				}
			}
			e.$RN = s;
			class l {
				constructor(v, S, I) {
					(this.reverseEdits = v),
						(this.changes = S),
						(this.trimAutoWhitespaceLineNumbers = I);
				}
			}
			e.$SN = l;
			function y($) {
				return !$.isTooLargeForSyncing() && !$.isForSimpleWidget;
			}
		}),
		